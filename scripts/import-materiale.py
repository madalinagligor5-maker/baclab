"""Importă în public/content/bank.json banca completă din materiale (materiale/out/banca_itemi.json).

Idempotent: șterge itemii importați anterior (ID cu prefixul MAT-) și îi adaugă din nou.
Itemii existenți (cei 57 inițiali și cei 276 EXT27) rămân neatinși.

Conversia către schema BacLab:
  - grilă: wrong_why din materiale trimite la un cod de confuzie (M01–M47); aici devine textul
    confuziei, la persoana a II-a, cu remedierea;
  - adevărat/fals: enunțul vine din `statement`; confuzia asociată se adaugă la explicație;
  - completare, exemple, item structurat, enunțuri, minieseu, probleme: răspunsul model devine `model`.
Se sar itemii cu enunț identic cu altul din bancă și cei aproape identici cu un item BacLab existent
(același capitol și tip, enunț asemănător ≥ 95% și, la grile, același răspuns corect). Pragul e strict:
„mitotică” / „meiotică” sau „chimic” / „fizic” schimbă întrebarea, deși textul diferă printr-un cuvânt.
Niciun item nu este marcat ca validat de un specialist.

Utilizare: python3 -I scripts/import-materiale.py
"""
import difflib
import json
import re
from pathlib import Path

RADACINA = Path(__file__).resolve().parents[1]
BANCA = RADACINA / "public" / "content" / "bank.json"
MATERIALE = RADACINA / "materiale" / "out"
PREFIX = "MAT-"
SURSA = "Materiale BacBio: fișe de sinteză E.d (2012), subiectul Bac 2025, simularea 2026"
AUTORAT = "Item din materialele BacBio, redactat în română după formatul probei E.d; nu este subiect oficial."
NIVELURI = {"C", "U", "A", "R"}

VERBE = {
    "Atribuie": "ai atribuit",
    "Încurcă": "ai încurcat",
    "Confundă": "ai confundat",
    "Inversează": "ai inversat",
    "Încadrează": "ai încadrat",
    "Plasează": "ai plasat",
    "Aplică": "ai aplicat",
}


def norm(s):
    return re.sub(r"\s+", " ", (s or "").strip().lower())


def confuzie_text(c):
    """„Confundă X.” → „Probabil ai confundat X. Ca să nu mai greșești: …”"""
    primul, _, rest = c["desc"].partition(" ")
    if primul in VERBE:
        fraza = f"Probabil {VERBE[primul]} {rest}"
    else:
        fraza = f"Confuzie frecventă ({c['title']}): {c['desc'][0].lower()}{c['desc'][1:]}"
    remediu = c["remedy"][0].lower() + c["remedy"][1:]
    return f"{fraza} Ca să nu mai greșești: {remediu}"


def minieseu_q(it):
    notiuni = ", ".join(it["notions"])
    return (
        f"Alcătuiți un minieseu intitulat „{it['title']}”, folosind informația științifică adecvată: "
        f"enumerați șase noțiuni specifice temei și construiți, folosind corect și în corelație noțiunile "
        f"enumerate, un text coerent de maximum trei–patru fraze. Noțiuni posibile: {notiuni}."
    )


def converteste(it, confuzii):
    tip = it["type"]
    q = it.get("q") or it.get("statement") or it.get("text")
    if tip == "minieseu":
        q = minieseu_q(it)
    out = {
        "id": PREFIX + it["id"],
        "chapter": it["chapter"],
        "type": tip,
        "q": q,
        "slot": it.get("bac_slot"),
        "topic": it.get("topic"),
        "source": f"{SURSA}" + (f" · {it['source']}" if it.get("source") else ""),
        "authorship": AUTORAT,
        "review_status": "materiale-draft",
        "validated": False,
    }
    if it.get("level") in NIVELURI:
        out["level"] = it["level"]
    if it.get("difficulty") in (1, 2, 3):
        out["difficulty"] = it["difficulty"]
    explicatie = (it.get("explanation") or "").strip()

    if tip == "grila":
        out["options"] = it["options"]
        out["correct"] = it["correct"]
        ww = [None] * 4
        for idx, cod in (it.get("wrong_why") or {}).items():
            i = int(idx)
            if i != it["correct"] and cod in confuzii:
                ww[i] = confuzie_text(confuzii[cod])
        out["wrong_why"] = ww
    elif tip == "adevarat_fals":
        out["truth"] = it["truth"]
        if it.get("correction"):
            out["correction"] = it["correction"]
        cod = it.get("misconception")
        if cod in confuzii and not it["truth"]:
            explicatie = f"{explicatie} {confuzie_text(confuzii[cod])}".strip()
    elif tip == "completare":
        out["model"] = [f"{i}. {r}" for i, r in enumerate(it["answers"], 1)]
    elif tip == "exemple_caracteristica":
        out["model"] = [f"{a['example']} – {a['feature']}" for a in it["answers"]]
        if len(it["answers"]) > 2:
            out["model"].append("Oricare două exemple corecte, fiecare cu caracteristica potrivită, sunt acceptate.")
    elif tip == "structurat":
        out["model"] = [it["model_answer"]] + ([f"Idei obligatorii: {'; '.join(it['key_points'])}."] if it.get("key_points") else [])
    elif tip == "enunturi":
        out["model"] = it["model_statements"]
    elif tip == "minieseu":
        out["model"] = [f"Noțiuni: {', '.join(it['notions'])}.", it["model_text"]]
    elif tip in ("problema_calcul", "problema_genetica"):
        out["model"] = list(it["steps"]) + [f"Răspuns: {it['answer']}"]
        if it.get("extra_requirement_example"):
            out["model"].append(f"Exemplu pentru cerința de completare a problemei: {it['extra_requirement_example']}")
    if explicatie:
        out["explanation"] = explicatie
    return {k: v for k, v in out.items() if v is not None}


def main():
    banca = json.loads(BANCA.read_text(encoding="utf-8"))
    existente = [i for i in banca["items"] if not i["id"].startswith(PREFIX)]
    confuzii = json.loads((MATERIALE / "confuzii_tipice.json").read_text(encoding="utf-8"))
    materiale = json.loads((MATERIALE / "banca_itemi.json").read_text(encoding="utf-8"))

    def raspuns(i):
        return norm(i["options"][i["correct"]]) if i.get("type") == "grila" else ""

    def acelasi_raspuns(a, b):
        ra, rb = raspuns(a), raspuns(b)
        return ra in rb or rb in ra or difflib.SequenceMatcher(None, ra, rb).ratio() >= 0.8

    vazute = {norm(i["q"]) for i in existente}
    baclab_pe_capitol = {}
    for i in existente:
        baclab_pe_capitol.setdefault((i["chapter"], i["type"]), []).append(i)

    adaugate, sarite = [], []
    for it in materiale:
        nou = converteste(it, confuzii)
        q = norm(nou["q"])
        aproape = any(
            difflib.SequenceMatcher(None, q, norm(v["q"])).ratio() >= 0.95
            and (nou["type"] != "grila" or acelasi_raspuns(nou, v))
            for v in baclab_pe_capitol.get((nou["chapter"], nou["type"]), [])
        )
        if q in vazute or aproape:
            sarite.append(it["id"])
            continue
        vazute.add(q)
        adaugate.append(nou)

    banca["items"] = existente + adaugate
    banca["version"] = max(banca.get("version", 1), 4)
    banca["note"] = (
        "Bancă beta: 57 de itemi inițiali, 276 de itemi originali documentați (EXT27) și "
        f"{len(adaugate)} de itemi din materialele BacBio (MAT), în formatul probei E.d. "
        "Validarea profesorului este distinctă și încă necesară."
    )
    BANCA.write_text(json.dumps(banca, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
    print(f"{len(existente)} itemi existenți + {len(adaugate)} importați = {len(banca['items'])}")
    print(f"sărite ca duplicate: {len(sarite)} ({', '.join(sarite)})")


if __name__ == "__main__":
    main()
