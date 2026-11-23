"""Regenerează src/content/lectii/la-bac.ts din casetele „La bac” ale lecțiilor din materiale/lectii/*.md.

Utilizare: python3 -I scripts/la-bac.py
"""
import glob
import json
import os
import re

out = {}
for f in sorted(glob.glob("materiale/lectii/A*.md")):
    code = os.path.basename(f)[:-3]
    m = re.search(r"> \[!bac\]\n((?:>.*\n?)+)", open(f, encoding="utf-8").read())
    if m:
        t = " ".join(l[1:].strip() for l in m.group(1).splitlines()).strip()
        t = re.sub(r"\*\*([^*]+)\*\*", r"\1", t)
        out[code] = re.sub(r"\*([^*]+)\*", r"\1", t)

lines = [
    "/**",
    " * „Cum apare la Bac”: câte un sfat de examen pe capitol, din lecțiile BacBio (materiale/lectii/*.md, casetele [!bac]).",
    " * Generat de scripts/la-bac.py; pentru modificări editează lecțiile din materiale și regenerează.",
    " */",
    "export const LA_BAC: Record<string, string> = {",
    *[f"  {k}: {json.dumps(v, ensure_ascii=False)}," for k, v in out.items()],
    "};",
]
open("src/content/lectii/la-bac.ts", "w", encoding="utf-8").write("\n".join(lines) + "\n")
print(len(out), "sfaturi")
