import sys, json, collections
sys.path.insert(0, str(__import__("pathlib").Path(__file__).parent))
from lib import *

OUT.mkdir(exist_ok=True)
chs = load_chapters()
misc = load_misconceptions()
errs = validate(chs, misc)
if errs:
    print("ERORI DE VALIDARE:")
    for e in errs: print(" -", e)
    sys.exit(1)

items = flatten(chs)

# glosar + fișe
gloss, cards = [], []
for ch in chs:
    cid = ch["meta"]["id"]
    for t, d in ch.get("gl", []):
        gloss.append(dict(chapter=cid, term=t, definition=d))
        cards.append(dict(chapter=cid, kind="definitie", front=f"Definiți / explicați: {t}", back=d))
    for q, a in ch.get("cd", []):
        cards.append(dict(chapter=cid, kind="recuperare", front=q, back=a))
for i, c in enumerate(cards, 1):
    c["id"] = f"CD{i:04d}"

cmp_ = [dict(chapter=ch["meta"]["id"], **c) for ch in chs for c in ch.get("cmp", [])]

write_json("harta_continut.json", dict(modules=dict(A="Biologie vegetală și animală (clasele IX–X) – proba E.d"), chapters=[ch["meta"] for ch in chs]))
write_json("banca_itemi.json", items)
write_json("glosar.json", gloss)
write_json("fise_recuperare.json", cards)
write_json("tabele_comparative.json", cmp_)
write_json("confuzii_tipice.json", misc)

fields = ["id", "module", "chapter", "type", "bac_slot", "topic", "level", "difficulty", "source", "q", "statement", "text", "title", "options", "correct", "truth", "correction", "answers", "model_answer", "key_points", "model_statements", "model_text", "notions", "given", "steps", "answer", "explanation"]
write_csv("banca_itemi.csv", items, fields)

cnt = collections.Counter((i["chapter"], i["type"]) for i in items)
print(f"capitole: {len(chs)} | itemi: {len(items)} | glosar: {len(gloss)} | fișe: {len(cards)} | tabele: {len(cmp_)}")
bytype = collections.Counter(i["type"] for i in items)
print(dict(bytype))
