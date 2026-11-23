"""Descarcă imaginile din materiale/imagini/surse.json de pe Wikimedia Commons.

Pentru fiecare imagine citește wikitext-ul paginii (licența și autorul), acceptă doar
domeniul public, CC0, CC BY și CC BY-SA, apoi descarcă originalul de pe upload.wikimedia.org.
Wikimedia limitează cererile, așa că scriptul face pauze și poate fi reluat: sare peste
imaginile deja descărcate (cele din meta.json).

Utilizare (din rădăcina repo-ului):
  python3 -I materiale/imagini/descarca.py DIR_DESCARCARI
"""
import hashlib, json, re, subprocess, sys, time, urllib.parse
from pathlib import Path

UA = "BacBioLessons/0.1 (https://github.com/madalinagligor5-maker/bacbi; educational) curl"
OK_LIC = re.compile(r"\{\{\s*(PD[-\w]*|cc-zero|cc0|cc-by(?:-sa)?-[\d.,\w-]+|self\s*\|[^}]*)", re.I)
BAD = re.compile(r"\b(nc|nd)\b|noncommercial|no-derivs", re.I)

def curl(url, out=None, incercari=4):
    """GET cu respectarea Retry-After la 429. Întoarce textul sau scrie în `out`."""
    for _ in range(incercari):
        args = ["curl", "-sS", "-L", "-A", UA, "-D", "-", "-o", str(out) if out else "/dev/stdout", url, "-w", "\n%{http_code}"]
        r = subprocess.run(args, capture_output=True, text=True, errors="replace")
        cod = r.stdout.rsplit("\n", 1)[-1].strip()
        if cod == "200":
            if out:
                return None
            corp = r.stdout.rsplit("\n", 1)[0]
            return corp.split("\r\n\r\n")[-1] if "\r\n\r\n" in corp else corp
        if cod != "429":
            raise subprocess.CalledProcessError(int(cod or 1), args, r.stdout[-300:], f"HTTP {cod}")
        m = re.search(r"retry-after:\s*(\d+)", r.stdout, re.I)
        asteptare = min(int(m.group(1)) if m else 60, 660) + 5
        print(f"   429, aștept {asteptare}s", flush=True)
        time.sleep(asteptare)
    raise subprocess.CalledProcessError(429, url, "", "HTTP 429")


RASTER = (".jpg", ".jpeg", ".png", ".gif", ".tif", ".tiff", ".webp")


def e_pagina_html(cale):
    with open(cale, "rb") as f:
        return re.match(rb"\s*<(!doctype html|html)", f.read(300), re.I) is not None


def descarca_fisier(titlu, dest, ca_png=False, limba=None):
    """Imaginile raster vin ca miniatură de 1280 px (limitele pentru originale sunt stricte);
    SVG-urile vin în original, ca să le putem traduce etichetele."""
    q = urllib.parse.quote(titlu)
    h = hashlib.md5(titlu.encode()).hexdigest()
    baza = f"https://upload.wikimedia.org/wikipedia/commons"
    original = f"{baza}/{h[0]}/{h[:2]}/{q}"
    ext = Path(titlu).suffix.lower()
    if ext in RASTER or ca_png:
        sufix = ".png" if ext in (".tif", ".tiff", ".gif", ".svg") else ""
        prefix = f"lang{limba}-" if limba else ""
        for w in (1280, 960):
            try:
                curl(f"{baza}/thumb/{h[0]}/{h[:2]}/{q}/{prefix}{w}px-{q}{sufix}", dest, incercari=2)
                return
            except subprocess.CalledProcessError:
                pass
    curl(original, dest)


def curata(s):
    s = re.sub(r"\[\[(?:[^|\]]*\|)?([^\]]*)\]\]", r"\1", s)          # [[a|b]] -> b
    s = re.sub(r"\[https?://\S+\s+([^\]]*)\]", r"\1", s)            # [url text] -> text
    s = re.sub(r"\[(https?://\S+)\]", r"\1", s)
    s = re.sub(r"\{\{\s*(?:u|user|creator|w)\s*\|([^}|]*)[^}]*\}\}", r"\1", s, flags=re.I)
    s = re.sub(r"\{\{[^{}]*\}\}", "", s)
    s = re.sub(r"<[^>]+>", "", s)
    s = re.sub(r"'''?", "", s)
    return re.sub(r"\s+", " ", s).strip(" .;,")

def licente(text):
    gasite = []
    for m in re.finditer(r"\{\{\s*([^{}|]+)((?:\|[^{}]*)?)\}\}", text):
        nume, args = m.group(1).strip(), m.group(2)
        n = nume.lower()
        if n == "self":
            for a in args.split("|")[1:]:
                a = a.strip()
                if "=" not in a and a:
                    gasite.append(a)
        elif n.startswith(("pd-", "cc-", "cc0")) or n in ("pd", "cc-zero", "fal", "gfdl", "attribution"):
            gasite.append(nume)
    return gasite

def accepta(lics):
    bune = [l for l in lics if re.match(r"(pd|cc-zero|cc0|cc-by)", l, re.I) and not BAD.search(l)]
    return bune

def main(iesire):
    iesire = Path(iesire); iesire.mkdir(parents=True, exist_ok=True)
    meta_path = iesire / "meta.json"
    meta = json.loads(meta_path.read_text()) if meta_path.exists() else {}
    surse = json.loads((Path(__file__).resolve().parent / "surse.json").read_text(encoding="utf-8"))
    for slug, s in surse.items():
        nume = s["commons"]
        if slug in meta:
            continue
        titlu = nume.replace(" ", "_")
        q = urllib.parse.quote(titlu)
        try:
            raw = curl(f"https://commons.wikimedia.org/w/index.php?title=File:{q}&action=raw")
        except subprocess.CalledProcessError:
            print("LIPSA", slug, nume); continue
        red = re.match(r"\s*#REDIRECT\s*\[\[(?:File|Fișier):([^\]]+)\]\]", raw, re.I)
        if red:
            nume = red.group(1).strip(); titlu = nume.replace(" ", "_"); q = urllib.parse.quote(titlu)
            raw = curl(f"https://commons.wikimedia.org/w/index.php?title=File:{q}&action=raw")
        lics = licente(raw)
        bune = accepta(lics)
        autor_m = re.search(r"\|\s*[Aa]uthor\s*=\s*(.+?)\n\s*\|", raw, re.S)
        autor = curata(autor_m.group(1)) if autor_m else ""
        if not bune:
            print("RESPINS", slug, nume, lics); continue
        ca_png = bool(s.get("png"))
        ext = ".png" if ca_png else Path(nume).suffix.lower()
        dest = iesire / f"{slug}{ext}"
        try:
            descarca_fisier(titlu, dest, ca_png, s.get("limba"))
            if e_pagina_html(dest):
                dest.unlink()
                raise subprocess.CalledProcessError(1, titlu, "", "pagină de eroare în loc de imagine")
        except subprocess.CalledProcessError as e:
            print("EROARE", slug, nume, e.stderr.strip()[:120]); continue
        meta[slug] = dict(fisier=dest.name, commons=nume, sursa=f"https://commons.wikimedia.org/wiki/File:{q}",
                          autor=autor, licente=bune)
        meta_path.write_text(json.dumps(meta, ensure_ascii=False, indent=1))
        print("OK", slug, bune, "|", autor[:70], "|", dest.stat().st_size)
        time.sleep(2)

main(sys.argv[1])
