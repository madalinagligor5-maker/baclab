"""Biblioteca de construire a materialelor pentru aplicația de bac Biologie.

Fiecare fișier ch_*.py definește un dicționar CH cu:
  meta  – id, titlu, surse, concepte cheie, sloturi de bac, prerechizite
  gr    – grile (Subiect I.C)
  af    – adevărat/fals cu corectare (Subiect I.D)
  cp    – completare de spații (Subiect I.A)
  ex    – două exemple + caracteristică (Subiect I.B)
  st    – itemi structurați (II.A.a/b, III.1.a/b, III.2.a/b)
  en    – patru enunțuri din două conținuturi (III.1.c)
  me    – minieseu din șase noțiuni (III.2.c)
  pb    – probleme (calcul II.A.c, genetică II.B), cu pași
  gl    – glosar [(termen, definiție)]
  cd    – fișe de recuperare activă [(întrebare, răspuns)]
  cmp   – tabele comparative (pentru intercalare)
"""
import json, csv, importlib, pkgutil, sys, re, os
from pathlib import Path

SRC = Path(__file__).parent
OUT = SRC.parent / "out"

LEVELS = {"C": "cunoaștere", "U": "înțelegere", "A": "aplicare", "D": "interpretare de date", "R": "argumentare"}

# --- helpers care scurtează scrierea conținutului -------------------------------------------

def G(t, q, o, c, e, m=None, lv="C", d=1, src=None):
    return dict(topic=t, q=q, options=o, correct=c, explanation=e, wrong_why=m or {}, level=lv, difficulty=d, source=src)

def AF(t, s, v, fix, e, m=None, lv="C", d=1, src=None):
    return dict(topic=t, statement=s, truth=v, correction=fix, explanation=e, misconception=m, level=lv, difficulty=d, source=src)

def CP(t, s, a, e="", lv="C", d=1, src=None):
    return dict(topic=t, text=s, answers=a, explanation=e, level=lv, difficulty=d, source=src)

def EX(t, q, a, e="", lv="C", d=1, src=None):
    return dict(topic=t, q=q, answers=[dict(example=x, feature=y) for x, y in a], explanation=e, level=lv, difficulty=d, source=src)

def ST(t, slot, q, a, k, lv="U", d=2, src=None):
    return dict(topic=t, slot=slot, q=q, model_answer=a, key_points=k, level=lv, difficulty=d, source=src)

def EN(t, q, contents, a, d=2, src=None):
    return dict(topic=t, q=q, contents=contents, model_statements=a, level="U", difficulty=d, source=src)

def ME(t, title, notions, text, d=2, src=None):
    return dict(topic=t, title=title, notions=notions, model_text=text, level="U", difficulty=d, source=src)

def PB(t, kind, q, given, steps, answer, extra=None, d=2, src=None):
    return dict(topic=t, kind=kind, q=q, given=given, steps=steps, answer=answer, extra_requirement_example=extra, level="A", difficulty=d, source=src)

# --- registrul confuziilor tipice (folosit pentru distractori și remediere) ------------------

def load_misconceptions():
    p = SRC / "misconceptions.json"
    return json.loads(p.read_text(encoding="utf-8"))

def load_chapters():
    mods = []
    for f in sorted(SRC.glob("ch_*.py")):
        spec = importlib.util.spec_from_file_location(f.stem, f)
        m = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(m)
        mods.append(m.CH)
    return mods

# --- validare --------------------------------------------------------------------------------

import unicodedata
def strip_dia(x):
    return "".join(c for c in unicodedata.normalize("NFD", x) if unicodedata.category(c) != "Mn")

BLANK = re.compile(r"\.{6,}")

def validate(chs, misc):
    errs = []
    seen_ch = set()
    for ch in chs:
        cid = ch["meta"]["id"]
        if cid in seen_ch:
            errs.append(f"capitol duplicat {cid}")
        seen_ch.add(cid)
        for i, g in enumerate(ch.get("gr", [])):
            w = f"{cid} grila {i+1}"
            if len(g["options"]) != 4: errs.append(f"{w}: nu are 4 variante")
            if not (0 <= g["correct"] < 4): errs.append(f"{w}: index corect invalid")
            if len(set(g["options"])) != 4: errs.append(f"{w}: variante duplicate")
            for k, mid in g["wrong_why"].items():
                if int(k) == g["correct"]: errs.append(f"{w}: confuzie atașată variantei corecte")
                if mid not in misc: errs.append(f"{w}: confuzie necunoscută {mid}")
            if not g["wrong_why"]: errs.append(f"{w}: lipsesc motivele distractorilor")
        for i, a in enumerate(ch.get("af", [])):
            w = f"{cid} A/F {i+1}"
            if not a["truth"] and not a["correction"]: errs.append(f"{w}: fals fără corectare")
            if a["truth"] and a["correction"]: errs.append(f"{w}: adevărat cu corectare")
            if a["correction"] and a["correction"].strip() == a["statement"].strip(): errs.append(f"{w}: corectarea e identică")
            if a["correction"] and re.search(r"\bnu\b", a["correction"].lower()) and not a["correction"].lower().startswith("nu "):
                pass  # negația e permisă doar dacă e în afirmația științifică; verificat manual
            if a["misconception"] and a["misconception"] not in misc: errs.append(f"{w}: confuzie necunoscută")
        for i, c in enumerate(ch.get("cp", [])):
            if len(BLANK.findall(c["text"])) != len(c["answers"]): errs.append(f"{cid} completare {i+1}: nr. spații != nr. răspunsuri")
        for i, e in enumerate(ch.get("ex", [])):
            if len(e["answers"]) < 2: errs.append(f"{cid} exemple {i+1}: <2 exemple")
        for i, e in enumerate(ch.get("en", [])):
            if len(e["contents"]) != 2 or len(e["model_statements"]) != 4: errs.append(f"{cid} enunțuri {i+1}: trebuie 2 conținuturi și 4 enunțuri")
        for i, e in enumerate(ch.get("me", [])):
            if len(e["notions"]) != 6: errs.append(f"{cid} minieseu {i+1}: trebuie 6 noțiuni")
            txt = e["model_text"].lower()
            for n in e["notions"]:
                for w in re.findall(r"\w+", n.lower()):
                    if len(w) > 3 and strip_dia(w)[:4] not in strip_dia(txt):
                        errs.append(f"{cid} minieseu {i+1}: noțiunea '{n}' nu apare în text (cuvântul '{w}')")
            nsent = len([s for s in re.split(r"(?<=[.!?])\s+", e["model_text"].strip()) if s])
            if nsent > 4: errs.append(f"{cid} minieseu {i+1}: {nsent} fraze (max 4)")
        for i, p in enumerate(ch.get("pb", [])):
            if not p["steps"]: errs.append(f"{cid} problema {i+1}: fără pași")
    return errs

# --- export ----------------------------------------------------------------------------------

def flatten(chs):
    items = []
    n = {}
    typemap = [("gr", "grila", "I.C"), ("af", "adevarat_fals", "I.D"), ("cp", "completare", "I.A"),
               ("ex", "exemple_caracteristica", "I.B"), ("st", "structurat", None), ("en", "enunturi", "III.1.c"),
               ("me", "minieseu", "III.2.c"), ("pb", None, None)]
    for ch in chs:
        cid = ch["meta"]["id"]
        for key, tname, slot in typemap:
            for it in ch.get(key, []):
                tn = tname or it.get("kind")
                n[(cid, tn)] = n.get((cid, tn), 0) + 1
                d = dict(id=f"{cid}-{tn[:3].upper()}{n[(cid, tn)]:02d}", module="A", chapter=cid, type=tn)
                if slot: d["bac_slot"] = slot
                if key == "pb": d["bac_slot"] = "II.A.c" if tn == "problema_calcul" else "II.B"
                if key == "st": d["bac_slot"] = it.pop("slot")
                d.update(it)
                items.append(d)
    return items

def write_json(name, obj):
    (OUT / name).write_text(json.dumps(obj, ensure_ascii=False, indent=1), encoding="utf-8")

def write_csv(name, rows, fields):
    with open(OUT / name, "w", encoding="utf-8-sig", newline="") as f:
        w = csv.DictWriter(f, fieldnames=fields, extrasaction="ignore")
        w.writeheader()
        for r in rows:
            w.writerow({k: (json.dumps(v, ensure_ascii=False) if isinstance(v, (list, dict)) else v) for k, v in r.items()})
