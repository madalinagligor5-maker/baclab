import json, pathlib
from collections import Counter
R = pathlib.Path(__file__).resolve().parent.parent
out = R / "out"; docs = R / "docs"
h = json.loads((out / "harta_continut.json").read_text(encoding="utf-8"))
items = json.loads((out / "banca_itemi.json").read_text(encoding="utf-8"))
cnt = Counter(i["chapter"] for i in items)
types = {}
for i in items: types.setdefault(i["chapter"], Counter())[i["type"]] += 1
L = ["# Harta conținutului – Modulul A (Biologie vegetală și animală, IX–X, proba E.d)", "",
     "Generat automat din `src/ch_*.py`. Surse: fișele de sinteză (2012), subiectul de bac 2025, simularea 2026, ghidul Nominatrix.", "",
     "| Cap. | Titlu | Itemi | Sloturi de bac | Idei mari | Prerechizite |", "|---|---|---|---|---|---|"]
for c in h["chapters"]:
    m = c
    L.append(f"| {m['id']} | {m['title']} | {cnt[m['id']]} | {', '.join(m.get('bac_slots', []))} | {', '.join(m.get('big_ideas', []))} | {', '.join(m.get('prereq', [])) or '—'} |")
L += ["", "## Detaliu pe capitole", ""]
for c in h["chapters"]:
    L += [f"### {c['id']} – {c['title']}", "", f"Surse: {'; '.join(c.get('sources', []))}", "", "Concepte:"]
    L += [f"- {x}" for x in c.get("concepts", [])]
    L += ["", "Itemi: " + ", ".join(f"{k} {v}" for k, v in sorted(types[c['id']].items())), ""]
(docs / "harta_continut.md").write_text("\n".join(L), encoding="utf-8")
print("ok", len(h["chapters"]))
