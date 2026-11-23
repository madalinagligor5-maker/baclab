from lib import *

CH = dict(
meta=dict(id="A15", title="Excreția la animale: sistemul excretor la mamifere; boli", module="A",
  sources=["Fișe sinteză 2012, p.55–56"],
  concepts=["căi de excreție: urinară, tegumentară (sudoare), pulmonară", "rinichi: localizare, structură (capsulă, corticală, medulară), nefron", "procese: filtrare, reabsorbție, secreție",
            "căi urinare extrarenale: uretere, vezică urinară, uretră", "boli: litiaza urinară, insuficiența renală cronică"],
  bac_slots=["I.C", "I.D", "II.A", "III.1"], prereq=["A05"], big_ideas=["homeostazie", "structură–funcție"]),

gr=[
 G("Localizarea rinichilor", "Rinichii mamiferelor:", ["sunt localizați în cavitatea toracică", "sunt organe pereche, situate în cavitatea abdominală, de o parte și de alta a coloanei vertebrale", "sunt organe impare", "sunt în pelvis"], 1,
   "Regiunea toraco-lombară; aspect reniform; la polul superior se află glandele suprarenale.", {0: "M28", 2: "M28", 3: "M28"}, "C", 1, "Fișe p.55; simulare 2026 III.1.a"),
 G("Corticala", "Zona corticală a rinichiului este formată din:", ["piramide Malpighi", "corpusculi Malpighi și tuburi sinuoase ale nefronilor", "ansele Henle și tuburile colectoare", "uretere"], 1,
   "Medulara conține piramidele Malpighi (anse Henle, tuburi colectoare).", {0: "M28", 2: "M28", 3: "M28"}, "C", 2, "Fișe p.55"),
 G("Nefronul", "Unitatea structurală și funcțională a rinichiului este:", ["glomerulul", "nefronul", "ureterul", "ansa Henle"], 1,
   "Nefronul = corpuscul renal (glomerul + capsula Bowman) + tub urinifer.", {0: "M28", 2: "M28", 3: "M28"}, "C", 1, "Fișe p.55"),
 G("Procese în nefron", "La nivelul nefronului au loc procesele de:", ["digestie, absorbție, secreție", "filtrare, reabsorbție, secreție", "fotoliză, filtrare, fermentație", "fagocitoză, absorbție, excreție"], 1,
   "Se formează urina finală.", {0: "M28", 2: "M28", 3: "M28"}, "C", 1, "Fișe p.55"),
 G("Căi extrarenale", "Căile urinare extrarenale sunt:", ["ureterele, vezica urinară, uretra", "calicele, bazinetul", "nefronii", "tuburile colectoare"], 0,
   "Vezica urinară este situată în pelvis, capacitate 300–350 ml.", {1: "M28", 2: "M28", 3: "M28"}, "C", 1, "Fișe p.55–56"),
 G("Uretra", "Uretra la bărbat:", ["este numai cale urinară", "este comună sistemului excretor și celui reproducător", "lipsește", "este mai scurtă ca la femeie și nu servește reproducerii"], 1,
   "Elimină urina și sperma.", {0: "M28", 2: "M28", 3: "M28"}, "C", 2, "Fișe p.56"),
 G("Căi de excreție", "La mamifere excreția se realizează pe calea:", ["urinară, tegumentară și pulmonară", "numai urinară", "numai pulmonară", "tegumentară și digestivă exclusiv"], 0,
   "Calea urinară este principală.", {1: "M28", 2: "M28", 3: "M28"}, "C", 1, "Fișe p.55"),
 G("Litiază", "Litiaza urinară constă în:", ["inflamația bronhiilor", "formarea de calculi renali", "scleroza arterelor", "distrugerea mielinei"], 1,
   "Cauze: tulburări de metabolism, urină concentrată, alimentație bogată în carne, lapte, dulciuri; manifestări: dureri lombare, hemoragii, febră.", {0: "M26", 2: "M26", 3: "M26"}, "C", 1, "Fișe p.56"),
 G("Insuficiență renală", "Insuficiența renală cronică se manifestă prin:", ["anurie, astenie, anemie, greață", "voce răgușită", "paralizii", "tuse cu expectorație"], 0,
   "Cauze: afecțiuni renale, intoxicații, infecții, diabet, obstrucții, hipertensiune.", {1: "M26", 2: "M26", 3: "M26"}, "C", 2, "Fișe p.56"),
 G("Rolul rinichiului", "Rolul rinichiului este:", ["filtrarea sângelui, formarea urinei și menținerea echilibrului hidroelectrolitic", "digestia grăsimilor", "producerea sângelui", "secreția bilei"], 0,
   "Rinichiul filtrează sângele, formează urina și menține echilibrul hidroelectrolitic.", {1: "M28", 2: "M28", 3: "M28"}, "C", 1, "Fișe p.56"),
],

af=[
 AF("Rinichi", "Rinichii sunt organe pereche, de aspect reniform.", True, None, ""),
 AF("Zona medulară", "Zona medulară a rinichiului conține corpusculii Malpighi.", False, "Zona corticală a rinichiului conține corpusculii Malpighi.", "Medulara conține piramidele Malpighi.", "M28"),
 AF("Vezica urinară", "Vezica urinară este situată în cavitatea toracică.", False, "Vezica urinară este situată în pelvis.", "Capacitate 300–350 ml.", "M28"),
 AF("Litiaza", "Litiaza urinară este cauzată de virusuri.", False, "Litiaza urinară are drept cauze tulburările de metabolism și urina concentrată.", "Nu este boală infecțioasă virală; constă în formarea de calculi renali.", "M26"),
],

cp=[
 CP("Nefron", "Nefronul este alcătuit din corpuscul ............ și tub ............ .", ["renal (Malpighi)", "urinifer"]),
 CP("Căi excretoare", "Căile urinare extrarenale sunt ureterele, vezica ............ și ............ .", ["urinară", "uretra"]),
],

ex=[
 EX("Rinichi – caracteristici", "Precizați localizarea și două caracteristici structurale ale rinichilor mamiferelor.",
    [("localizare", "în cavitatea abdominală, de o parte și de alta a coloanei vertebrale, în regiunea toraco-lombară"), ("structură 1", "capsulă fibroasă și parenchim renal cu zonă corticală și medulară"),
     ("structură 2", "aspect reniform; la polul superior au glandele suprarenale"), ("structură 3", "unitatea structurală și funcțională este nefronul")],
    "Localizare + două caracteristici.", src="Simulare 2026 III.1.a"),
],

st=[
 ST("Boli excretoare", "II.A.a", "Numiți o boală a sistemului excretor la om (la alegere) precizând: o cauză, o manifestare, două măsuri de prevenire.",
    "Exemplu – litiaza urinară: cauză – urina concentrată și tulburări de metabolism; manifestare – dureri lombare și vezicale; prevenire – alimentație echilibrată, igienă corectă a organelor excretoare, tratarea infecțiilor.",
    ["boală corectă", "o cauză", "o manifestare", "două măsuri"], "C", 2),
 ST("Rinichi", "III.1.a", "Precizați localizarea și două caracteristici structurale ale rinichilor mamiferelor.",
    "Localizare: cavitatea abdominală, de o parte și de alta a coloanei vertebrale (regiunea toraco-lombară). Structură: capsulă fibroasă și parenchim cu zonă corticală (corpusculi Malpighi, tuburi sinuoase) și zonă medulară (piramide Malpighi); aspect reniform; unitatea funcțională este nefronul.",
    ["localizare", "două caracteristici structurale"], "C", 2, "Simulare 2026 III.1.a"),
],

en=[
 EN("Căi urinare", "Construiți patru enunțuri afirmative, câte două pentru fiecare conținut: căile urinare ale mamiferelor; litiaza urinară.",
    ["Căile urinare ale mamiferelor", "Litiaza urinară"],
    ["Căile urinare extrarenale sunt ureterele, vezica urinară și uretra.", "Vezica urinară este un organ cavitar situat în pelvis.",
     "Litiaza urinară constă în formarea de calculi renali.", "Litiaza poate fi prevenită printr-o alimentație echilibrată și hidratare."],
    2, "Simulare 2026 III.1.c"),
],

me=[
 ME("Rinichii", "Rinichii", ["nefron", "filtrare", "reabsorbție", "urină", "zona corticală", "echilibru hidroelectrolitic"],
    "Rinichii sunt organe pereche, iar unitatea lor funcțională este nefronul. Aici au loc filtrarea, reabsorbția și secreția, în urma cărora se formează urina. Zona corticală conține corpusculii renali, iar rinichii mențin echilibrul hidroelectrolitic."),
],

gl=[
 ("nefron", "Unitatea structurală și funcțională a rinichiului."),
 ("corpuscul Malpighi (renal)", "Glomerul vascular + capsula Bowman; în zona corticală."),
 ("ansa Henle", "Segment intermediar al tubului urinifer; în zona medulară."),
 ("piramidă Malpighi", "Formațiune triunghiulară a medularei, cu baza spre exterior."),
 ("uretră", "Canal de eliminare a urinei; la bărbat și a spermei."),
 ("vezică urinară", "Organ cavitar din pelvis, capacitate 300–350 ml."),
 ("litiază urinară", "Formarea calculilor renali."),
 ("anurie", "Oprirea eliminării de urină."),
],

cd=[
 ("Unde sunt localizați rinichii?", "Cavitatea abdominală, de o parte și de alta a coloanei, regiunea toraco-lombară."),
 ("Care sunt zonele rinichiului?", "Corticală (externă) și medulară (internă)."),
 ("Ce procese au loc în nefron?", "Filtrare, reabsorbție, secreție."),
 ("Care sunt căile urinare extrarenale?", "Uretere, vezică urinară, uretră."),
],

cmp=[],
)
