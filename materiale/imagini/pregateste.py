"""Pregătește imaginile lecțiilor pentru aplicație.

Citește materiale/imagini/surse.json (ce imagine, legenda în română, traducerile etichetelor)
și metadatele descărcării (autor, licență), apoi:
  - la SVG: alege varianta în română din <switch> (dacă există), altfel traduce etichetele;
  - la imaginile raster: le micșorează la cel mult 1400 px lățime;
  - scrie fișierele în public/lectii/ și registrul în materiale/imagini/imagini.json.

Utilizare (din rădăcina repo-ului):
  python3 -I materiale/imagini/pregateste.py DIR_DESCARCARI
DIR_DESCARCARI conține fișierele <slug>.<ext> și meta.json scrise de descarca.py.
"""
import json
import re
import sys
from pathlib import Path

from lxml import etree
from PIL import Image

RADACINA = Path(__file__).resolve().parents[2]
SURSE = RADACINA / "materiale" / "imagini" / "surse.json"
REGISTRU = RADACINA / "materiale" / "imagini" / "imagini.json"
PUBLIC = RADACINA / "public" / "lectii"
SVG_NS = "http://www.w3.org/2000/svg"
LATIME_MAX = 1200


def licenta(coduri):
    """Licența care se aplică: la lucrări derivate cu mai multe licențe, cea mai restrictivă."""
    gasite = []
    for c in coduri:
        n = c.strip().lower()
        m = re.match(r"cc-(by(?:-sa)?)-([\d.]+)", n)
        if m:
            tip, ver = m.groups()
            gasite.append((2 if tip == "by-sa" else 1, f"CC {tip.upper()} {ver}",
                           f"https://creativecommons.org/licenses/{tip}/{ver}/deed.ro"))
        elif n in ("cc-zero", "cc0"):
            gasite.append((0, "CC0", "https://creativecommons.org/publicdomain/zero/1.0/deed.ro"))
        elif n.startswith("pd"):
            gasite.append((-1, "Domeniu public", None))
    if not gasite:
        raise ValueError(f"licență necunoscută: {coduri}")
    _, nume, url = max(gasite, key=lambda g: g[0])
    return nume, url


def alege_romana(radacina):
    """În fiecare <switch> păstrează doar copilul în română (altfel pe cel implicit).
    Elementul <switch> rămâne, cu tot cu poziționarea lui (transform)."""
    for sw in list(radacina.iter(f"{{{SVG_NS}}}switch")):
        copii = [c for c in sw if isinstance(c.tag, str)]
        def limbi(c):
            return [l.strip() for l in (c.get("systemLanguage") or "").split(",") if l.strip()]
        ales = next((c for c in copii if any(l == "ro" or l.startswith("ro-") for l in limbi(c))), None)
        if ales is None:
            ales = next((c for c in copii if not limbi(c)), None)
        if ales is None:
            ales = next((c for c in copii if "en" in limbi(c)), None)
        if ales is None:
            continue
        ales.attrib.pop("systemLanguage", None)
        for c in copii:
            if c is not ales:
                sw.remove(c)


def traduce_texte(radacina, dictionar):
    folosite = set()
    for el in radacina.iter():
        if not isinstance(el.tag, str):
            continue
        if el.text and el.text.strip() in dictionar:
            cheie = el.text.strip()
            el.text = el.text.replace(cheie, dictionar[cheie])
            folosite.add(cheie)
    return set(dictionar) - folosite


def dimensiuni_svg(radacina):
    """Proporțiile desenului, scalate la 1000 px lățime (unitățile SVG pot fi mm sau pt)."""
    vb = radacina.get("viewBox")
    if vb:
        _, _, w, h = [float(x) for x in re.split(r"[\s,]+", vb.strip())]
    else:
        num = lambda v: float(re.match(r"[\d.]+", v).group())
        w, h = num(radacina.get("width")), num(radacina.get("height"))
    return 1000, round(1000 * h / w)


def afiseaza(radacina, vizibilitate):
    """{id: true/false}: arată sau ascunde un grup (unele desene au textul editabil ascuns
    și o copie a lui transformată în contururi, care nu se poate traduce)."""
    for id_, vizibil in (vizibilitate or {}).items():
        el = radacina.find(f".//*[@id='{id_}']")
        if el is None:
            print("  id inexistent:", id_)
            continue
        stil = re.sub(r"display:\s*[a-z-]+;?", "", el.get("style", "")).strip(";")
        el.set("style", f"{stil};display:{'inline' if vizibil else 'none'}".lstrip(";"))


def largeste(radacina, margini):
    """Mărește viewBox-ul cu [stânga, dreapta] procente din lățime, ca etichetele lungi
    traduse în română să nu iasă din desen."""
    if not margini:
        return
    st, dr = margini
    vb = radacina.get("viewBox")
    if vb:
        x, y, w, h = [float(v) for v in re.split(r"[\s,]+", vb.strip())]
    else:
        num = lambda v: float(re.match(r"[\d.]+", v).group())
        x, y, w, h = 0.0, 0.0, num(radacina.get("width")), num(radacina.get("height"))
    dx_st, dx_dr = w * st / 100, w * dr / 100
    radacina.set("viewBox", f"{x - dx_st:g} {y:g} {w + dx_st + dx_dr:g} {h:g}")
    for a in ("width", "height"):
        radacina.attrib.pop(a, None)


GENERICE = ("sans-serif", "serif", "monospace")


def font_rezerva(radacina):
    """Adaugă sans-serif ca rezervă: fonturile din desene (Arial, Source Sans Pro) nu există
    pe toate dispozitivele, iar fără rezervă browserul folosește un font cu serife."""
    for el in radacina.iter():
        if not isinstance(el.tag, str):
            continue
        ff = el.get("font-family")
        if ff and not any(g in ff for g in GENERICE):
            el.set("font-family", f"{ff},sans-serif")
        stil = el.get("style")
        if stil and "font-family" in stil:
            el.set("style", re.sub(
                r"font-family:([^;]+)",
                lambda m: m.group(0) if any(g in m.group(1) for g in GENERICE) else f"font-family:{m.group(1)},sans-serif",
                stil))


def pregateste_svg(sursa, dest, traduceri, vizibilitate=None, margini=None):
    parser = etree.XMLParser(huge_tree=True, remove_blank_text=False)
    arbore = etree.parse(str(sursa), parser)
    rad = arbore.getroot()
    alege_romana(rad)
    afiseaza(rad, vizibilitate)
    largeste(rad, margini)
    font_rezerva(rad)
    lipsa = traduce_texte(rad, traduceri) if traduceri else set()
    arbore.write(str(dest), xml_declaration=True, encoding="utf-8")
    return dimensiuni_svg(rad), lipsa


def pregateste_raster(sursa, dest):
    with Image.open(sursa) as im:
        im.seek(0)
        im = im.convert("RGB") if im.mode not in ("RGB", "RGBA") else im.copy()
        # Fotografiile verticale se limitează și pe înălțime, ca să nu umple ecranul telefonului.
        scara = min(1, LATIME_MAX / im.width, (1000 if dest.suffix == ".jpg" else 2400) / im.height)
        if scara < 1:
            im = im.resize((round(im.width * scara), round(im.height * scara)), Image.LANCZOS)
        if dest.suffix == ".jpg":
            im.convert("RGB").save(dest, quality=78, optimize=True, progressive=True)
        else:
            # Diagramele au puține culori: paleta de 256 le micșorează de 3–4 ori fără pierderi vizibile.
            im.save(dest, optimize=True)
            mic = dest.with_suffix(".tmp.png")
            im.convert("RGBA").quantize(256, method=Image.Quantize.FASTOCTREE).save(mic, optimize=True)
            if mic.stat().st_size < dest.stat().st_size:
                mic.replace(dest)
            else:
                mic.unlink()
        return im.width, im.height


def main(dir_descarcari):
    dir_descarcari = Path(dir_descarcari)
    meta = json.loads((dir_descarcari / "meta.json").read_text(encoding="utf-8"))
    surse = json.loads(SURSE.read_text(encoding="utf-8"))
    PUBLIC.mkdir(parents=True, exist_ok=True)
    registru = {}

    for slug, s in surse.items():
        m = meta.get(slug)
        if not m:
            print("LIPSEȘTE descărcarea:", slug)
            continue
        sursa = dir_descarcari / m["fisier"]
        if not sursa.exists() or re.match(rb"\s*<(!doctype html|html)", sursa.read_bytes()[:300], re.I):
            print("FIȘIER INVALID (lipsă sau pagină de eroare):", slug)
            continue
        ext = sursa.suffix.lower()
        if ext == ".svg":
            dest = PUBLIC / f"{slug}.svg"
            (w, h), lipsa = pregateste_svg(sursa, dest, s.get("traduceri"), s.get("afiseaza"), s.get("margini"))
            if lipsa:
                print("  traduceri nefolosite la", slug, sorted(lipsa))
        else:
            dest = PUBLIC / f"{slug}{'.jpg' if ext in ('.jpg', '.jpeg') else '.png'}"
            w, h = pregateste_raster(sursa, dest)

        nume_lic, url_lic = licenta(m["licente"])
        modificari = None
        if s.get("traduceri"):
            modificari = "Etichete traduse în română de BacBio"
            if nume_lic.startswith("CC BY-SA"):
                modificari += ", sub aceeași licență"

        registru[slug] = dict(
            fisier=dest.name,
            latime=w,
            inaltime=h,
            legenda=s["legenda"],
            alt=s["alt"],
            autor=s.get("autor") or m["autor"],
            licenta=nume_lic,
            licentaUrl=url_lic,
            sursa=m["sursa"],
            modificari=modificari,
        )
        print("OK", slug, dest.name, w, h, nume_lic)

    REGISTRU.write_text(json.dumps(registru, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(len(registru), "imagini în registru")


if __name__ == "__main__":
    main(sys.argv[1])
