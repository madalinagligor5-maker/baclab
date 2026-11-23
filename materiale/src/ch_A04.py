from lib import *

CH = dict(
meta=dict(id="A04", title="Țesuturi vegetale", module="A",
  sources=["Fișe sinteză 2012, p.65"],
  concepts=["țesut = complex celular de celule asemănătoare (formă, structură, funcție); histogeneză", "meristeme (embrionare) primare: apicale, intercalare",
            "definitive: de apărare (epiderma), conducătoare (vase lemnoase, liberiene), fundamentale (asimilator, depozitare), secretoare"],
  bac_slots=["I.C", "I.D", "III.2.b", "III.2.c"], prereq=["A01"], big_ideas=["structură–funcție"]),

gr=[
 G("Meristeme", "Țesuturile formate din celule nediferențiate, cu pereți subțiri și capacitate de diviziune, sunt:",
   ["definitive", "meristematice", "conducătoare", "de apărare"], 1,
   "Meristemele (țesuturi embrionare) au celule nediferențiate cu citoplasmă abundentă, care se divid.", {0: "M13", 2: "M13", 3: "M13"}, "C", 1, "Fișe p.65"),
 G("Meristeme apicale", "Meristemele apicale asigură:",
   ["îngroșarea tulpinii", "creșterea în lungime", "depozitarea substanțelor", "eliminarea apei"], 1,
   "Meristemele primare (apicale și intercalare) determină creșterea în lungime a organelor.", {0: "M13", 2: "M13", 3: "M13"}, "C", 1, "Fișe p.65"),
 G("Vase liberiene", "Vasele conducătoare liberiene:",
   ["sunt formate din celule moarte", "conduc seva brută", "au pereți transversali perforați (tuburi ciuruite)", "sunt specifice numai gimnospermelor"], 2,
   "Vasele liberiene sunt celule vii, alungite, cu pereți transversali perforați; conduc seva elaborată.", {0: "M13", 1: "M22", 3: "M13"}, "C", 2, "Fișe p.65"),
 G("Vase lemnoase", "Vasele lemnoase conduc:",
   ["seva elaborată", "seva brută", "numai glucide", "numai aer"], 1,
   "Vasele lemnoase (celule moarte, cu pereți groși) conduc seva brută: apă și săruri minerale.", {0: "M22", 2: "M22", 3: "M22"}, "C", 1, "Fișe p.65"),
 G("Epiderma", "Țesutul de apărare al plantelor este:",
   ["parenchimul asimilator", "epiderma", "meristemul apical", "vasul liberian"], 1,
   "Epiderma este un strat de celule aplatizate acoperite de cuticulă, la periferia organelor.", {0: "M13", 2: "M13", 3: "M13"}, "C", 1, "Fișe p.65"),
 G("Parenchim asimilator", "Parenchimul asimilator este abundent în:",
   ["rădăcini tuberizate", "frunză", "semințele oleaginoase", "rizomi"], 1,
   "Țesutul asimilator (de exemplu palisadic) conține cloroplaste și realizează fotosinteza în frunză.", {0: "M13", 2: "M13", 3: "M13"}, "C", 1, "Fișe p.65"),
 G("Parenchim de depozitare", "Parenchimul de depozitare se găsește în:",
   ["frunzele verzi", "morcov, sfeclă, ridiche", "vârfurile de creștere", "perii secretori"], 1,
   "Abundă în rizomi, bulbi, tuberculi, rădăcini tuberizate și semințe oleaginoase.", {0: "M13", 2: "M13", 3: "M13"}, "C", 1, "Fișe p.65"),
 G("Țesut secretor", "Produc nectar, rășini, latex celulele țesutului:",
   ["conducător", "secretor", "meristematic", "de apărare"], 1,
   "Țesutul secretor: peri secretori, glande nectarifere, canale, cavități.", {0: "M13", 2: "M13", 3: "M13"}, "C", 1, "Fișe p.65"),
 G("Meristem intercalar", "Meristemele intercalare se află:",
   ["în vârfurile de creștere", "la nivelul nodurilor plantelor cu tulpini articulate", "în epidermă", "în vasele lemnoase"], 1,
   "Meristemele apicale sunt în vârfurile de creștere; cele intercalare la noduri.", {0: "M13", 2: "M13", 3: "M13"}, "C", 2, "Fișe p.65"),
 G("Celule definitive", "Țesuturile definitive sunt formate din celule:",
   ["nediferențiate, capabile de diviziune", "diferențiate, specializate, fără capacitate de diviziune", "numai moarte", "numai anucleate"], 1,
   "Țesuturile definitive provin din meristeme prin diferențiere celulară.", {0: "M13", 2: "M13", 3: "M13"}, "C", 2, "Fișe p.65"),
],

af=[
 AF("Vase lemnoase", "Vasele lemnoase sunt formate din celule vii.", False, "Vasele lemnoase sunt formate din celule moarte.", "Au pereți puternic îngroșați și conduc seva brută.", "M13"),
 AF("Vase liberiene", "Vasele liberiene conduc seva elaborată.", True, None, "Substanțele organice preparate în frunze."),
 AF("Meristeme", "Țesuturile definitive au capacitate de diviziune.", False, "Meristemele au capacitate de diviziune.", "Țesuturile definitive nu se mai divid.", "M13"),
 AF("Epidermă", "Epiderma este acoperită de cuticulă.", True, None, "Rol de apărare."),
],

cp=[
 CP("Vase conducătoare", "Vasele ............ conduc seva brută, iar vasele ............ conduc seva elaborată.", ["lemnoase", "liberiene"]),
 CP("Meristeme", "Meristemele primare sunt ............ și intercalare.", ["apicale"]),
],

ex=[
 EX("Țesuturi definitive", "Dați două exemple de țesuturi definitive ale plantelor; scrieți câte un rol.",
    [("epiderma", "apărarea organelor"), ("parenchimul asimilator", "fotosinteză"), ("parenchimul de depozitare", "depozitarea substanțelor de rezervă"), ("țesutul conducător", "transportul sevelor")]),
 EX("Vase conducătoare", "Dați două exemple de vase conducătoare din corpul plantelor; scrieți în dreptul fiecărui vas rolul îndeplinit.",
    [("vasul lemnos", "conduce seva brută (apă și săruri minerale)"), ("vasul liberian", "conduce seva elaborată (substanțe organice)")], src="Simulare 2026 I.B"),
],

st=[
 ST("Vase liberiene", "III.2.b", "Scrieți un argument în favoarea afirmației: „Vasele conducătoare liberiene ale plantelor sunt adaptate funcției de conducere”.",
    "Vasele liberiene sunt formate din celule alungite, dispuse cap la cap, cu pereți transversali perforați (tuburi ciuruite), ceea ce permite trecerea sevei elaborate de la o celulă la alta.",
    ["celule alungite, cap la cap", "pereți transversali perforați – tuburi ciuruite"], "R", 2, "Subiect bac 2025 III.2.b"),
 ST("Tipuri de țesuturi", "III.2.a", "Precizați trei tipuri de țesuturi definitive vegetale.",
    "Țesut de apărare (epiderma), țesut conducător, țesut fundamental (asimilator, de depozitare), țesut secretor.", ["trei tipuri corecte"], "C", 1),
],

en=[
 EN("Țesuturi vegetale", "Construiți patru enunțuri afirmative, câte două pentru fiecare conținut: meristemele; vasele liberiene.",
    ["Meristemele", "Vasele liberiene"],
    ["Meristemele sunt țesuturi formate din celule nediferențiate.", "Meristemele apicale determină creșterea în lungime a plantei.",
     "Vasele liberiene conduc seva elaborată.", "Vasele liberiene sunt formate din celule vii, cu pereți transversali perforați."]),
],

me=[
 ME("Țesuturi vegetale", "Țesuturile vegetale", ["meristem", "celule diferențiate", "epidermă", "vase lemnoase", "vase liberiene", "seva"],
    "Meristemele sunt țesuturi embrionare, iar prin diferențiere se formează țesuturile definitive, printre care epiderma de apărare. Vasele lemnoase conduc seva brută, iar vasele liberiene conduc seva elaborată. Celulele diferențiate nu se mai divid."),
],

gl=[
 ("țesut", "Complex celular interdependent, format din celule asemănătoare ca formă, structură și funcție."),
 ("histogeneză", "Proces de diferențiere celulară prin care iau naștere țesuturile."),
 ("meristem", "Țesut embrionar format din celule nediferențiate, cu capacitate de diviziune."),
 ("meristem apical", "Meristem din vârfurile de creștere; creștere în lungime."),
 ("meristem intercalar", "Meristem de la nivelul nodurilor plantelor cu tulpini articulate."),
 ("epidermă", "Țesut de apărare, un strat de celule aplatizate acoperite de cuticulă."),
 ("vas lemnos", "Vas din celule moarte cu pereți îngroșați; conduce seva brută."),
 ("vas liberian", "Vas din celule vii, alungite, cu tuburi ciuruite; conduce seva elaborată."),
 ("parenchim asimilator", "Țesut cu cloroplaste din frunză, de exemplu palisadic."),
 ("parenchim de depozitare", "Țesut care depozitează substanțe de rezervă (rizomi, tuberculi, morcov)."),
 ("țesut secretor", "Țesut care produce mucilagii, latex, uleiuri volatile, nectar, rășini."),
],

cd=[
 ("Ce tipuri de meristeme primare există?", "Apicale și intercalare."),
 ("Ce conduc vasele lemnoase / liberiene?", "Seva brută / seva elaborată."),
 ("Din ce celule sunt formate vasele lemnoase?", "Celule moarte, cu pereți puternic îngroșați."),
 ("Din ce celule sunt formate vasele liberiene?", "Celule vii, alungite, cu pereți transversali perforați (tuburi ciuruite)."),
 ("Unde se află parenchimul de depozitare?", "Rizomi, bulbi, tuberculi, rădăcini tuberizate (morcov, sfeclă), semințe oleaginoase."),
],

cmp=[
 dict(title="Vase lemnoase vs liberiene", cols=["Criteriu", "Lemnoase", "Liberiene"],
      rows=[["Celule", "moarte, pereți îngroșați", "vii, alungite, tuburi ciuruite"], ["Seva", "brută (apă + săruri minerale)", "elaborată (substanțe organice)"],
            ["Transport", "pasiv/activ combinat (presiune radiculară, sucțiune)", "activ, cu consum de energie, mai lent"], ["Sens", "ascendent", "ascendent și descendent"]]),
],
)
