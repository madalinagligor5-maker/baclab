# Materiale pentru aplicația Bac Biologie

Conținut structurat din cărțile și subiectele furnizate. **Modulul A (clasele IX–X, proba E.d) este complet pe cele 23 de capitole; Modulul B este doar o hartă** (vezi `docs/modul_B_harta.md`).

## Conținut (`out/`)
| Fișier | Ce este |
|---|---|
| `harta_continut.json` | capitole, concepte, sloturi de bac, prerechizite, idei mari |
| `banca_itemi.json` / `.csv` | 623 itemi (grile 289, A/F 119, completări 56, exemple 43, structurați 52, enunțuri 25, minieseuri 26, probleme de calcul 4, probleme de genetică 9) |
| `glosar.json` | 294 termeni |
| `fise_recuperare.json` | 414 fișe de recuperare (definiții + întrebări-cheie) |
| `tabele_comparative.json` | 27 tabele comparative |
| `confuzii_tipice.json` | registrul M01–M47: confuzii frecvente, cu remediere |

## Schema unui item
`id` (ex. A22-GRI05), `chapter`, `type`, `bac_slot` (ex. I.C, II.B), `topic`, `q`, `options`, `correct` (index), `explanation`, `wrong_why` (confuzia asociată fiecărui distractor), `level` (C = cunoaștere, U = înțelegere, A = aplicare, R = raționament), `difficulty` (1–3), `source`.
Problemele conțin `given`, `steps`, `answer`, `extra_requirement_example`.

## Reconstruire
`python3 -I src/build.py` validează și exportă; `python3 -I src/make_docs.py` regenerează `docs/harta_continut.md`.
Validări: 4 opțiuni unice, index corect valid, confuzii existente în registru, consistență A/F (fals → corecție), nr. de spații = nr. de răspunsuri, 2 conținuturi și 4 enunțuri, 6 noțiuni care apar în text de maximum 4 fraze. Calculele (procente în lanț, genetică) sunt făcute în cod (`Decimal`, `genetics.py`), nu scrise de mână.

## Limite de care trebuie ținut cont
1. **Fișele de sinteză sunt din 2012**; programa actuală de bac nu a fost verificată. Capitolele A01–A23 urmează fișele.
2. **Baremul oficial nu a fost furnizat**; punctajele pe subcerințe sunt orientative.
3. Surse în conflict: mitoza (momentul separării cromatidelor) diferă între surse – nu există itemi dependenți de acest detaliu. Ghidul Nominatrix are o greșeală (C6H10O6) – folosită formula corectă C6H12O6.
4. Grila 4 din 2025 (pleura) a fost rezolvată prin eliminare, fără barem.
5. Problemele heterozomale (hemofilie, daltonism) din A23 sunt extinderi: confirmați că apar în programa profilului vostru.
6. Doar o parte din itemi citează o sursă explicită (câmpul `source`); restul se bazează pe capitolul indicat în `meta.sources`.
7. Barron’s este sursă suplimentară de nivel universitar; nu a fost folosită pentru itemi.

## Lecții (`lectii/`)
Câte o lecție pentru fiecare capitol A01–A23, scrisă pornind de la conceptele, glosarul, fișele și tabelele de mai sus. Formatul este un Markdown simplu, citit de `src/lib/lectii.ts`:

- `## Titlu` și `### Subtitlu`; paragrafe; liste cu `-` sau `1.`; tabele cu `|`;
- `![[slug]]` inserează o imagine din registrul de imagini;
- `> [!retine]`, `> [!atentie]`, `> [!bac]` creează casetele „Reține”, „Atenție, capcană” și „La bac”.

## Imagini (`imagini/`)
Imaginile vin de pe Wikimedia Commons și sunt doar în domeniul public, CC0, CC BY sau CC BY-SA.

| Fișier | Rol |
|---|---|
| `surse.json` | ce imagine folosește fiecare slug, legenda și textul alternativ în română, traducerile etichetelor |
| `descarca.py` | descarcă imaginile, citește licența și autorul de pe pagina fiecărei imagini, respinge orice altă licență |
| `pregateste.py` | traduce etichetele SVG în română, comprimă imaginile, scrie `public/lectii/` și `imagini.json` |
| `imagini.json` | registrul generat, cu dimensiuni, autor, licență și sursă; atribuirile apar sub fiecare imagine și pe pagina `/surse-imagini` |

```bash
python3 -I materiale/imagini/descarca.py /un/dosar/temporar
python3 -I materiale/imagini/pregateste.py /un/dosar/temporar
```

Wikimedia limitează strict descărcarea fișierelor originale; scriptul așteaptă cât cere serverul și poate fi reluat. Imaginile marcate cu `"png": true` se descarcă drept miniatură PNG (cu `"limba": "ro"`, în varianta românească, dacă fișierul o are), iar etichetele lor rămase în engleză sunt traduse în legendă.
