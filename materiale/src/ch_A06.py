from lib import *

CH = dict(
meta=dict(id="A06", title="Nutriția autotrofă: fotosinteza", module="A",
  sources=["Fișe sinteză 2012, p.22–23"],
  concepts=["fotosinteza: definiție, ecuație 6CO2+6H2O→C6H12O6+6O2", "clorofila a și b", "faza de lumină (grana) și faza de întuneric (stroma)",
            "evidențiere: CO2 absorbit, substanță organică produsă, O2 eliberat", "importanță", "chemosinteza"],
  bac_slots=["I.A", "I.C", "I.D", "III.1"], prereq=["A01"], big_ideas=["energie", "structură–funcție"]),

gr=[
 G("Ecuația fotosintezei", "Ecuația chimică a fotosintezei este:",
   ["C6H12O6 + 6O2 → 6CO2 + 6H2O", "6CO2 + 6H2O → C6H12O6 + 6O2", "6O2 + 6H2O → C6H12O6 + 6CO2", "C6H12O6 → 2C2H5OH + 2CO2"], 1,
   "Din dioxid de carbon și apă, la lumină, se sintetizează glucoză și se eliberează oxigen.", {0: "M15", 2: "M15", 3: "M19"}, "C", 1, "Fișe p.22"),
 G("Locul fotosintezei", "Fotosinteza se desfășoară în:", ["mitocondrii", "cloroplaste", "lizozomi", "ribozomi"], 1,
   "În cloroplaste se găsesc pigmenții clorofilieni.", {0: "M06", 2: "M06", 3: "M06"}, "C", 1, "Fișe p.22"),
 G("Faza de lumină", "Faza de lumină a fotosintezei se desfășoară în:", ["stromă", "grana (membrana tilacoidelor)", "matrix", "citoplasma fundamentală"], 1,
   "În grana, pigmenții absorb lumina; are loc fotoliza apei, cu eliberare de O2 și formare de ATP.", {0: "M07", 2: "M07", 3: "M07"}, "C", 1, "Fișe p.22"),
 G("Faza de întuneric", "Faza de întuneric a fotosintezei:", ["are loc în grana", "sintetizează substanțe organice folosind energia din ATP", "eliberează oxigenul", "are loc numai noaptea"], 1,
   "Se desfășoară în stromă; folosește CO2 ca sursă de carbon și energia chimică din ATP.", {0: "M07", 2: "M15", 3: "M15"}, "C", 2, "Fișe p.23"),
 G("Pigmenți", "Care clorofilă poate converti energia luminoasă în energie chimică?", ["clorofila a", "clorofila b", "ambele în mod egal", "niciuna"], 0,
   "Ambele clorofile absorb lumina, dar numai clorofila a o poate converti în energie chimică.", {1: "M15", 2: "M15", 3: "M15"}, "C", 3, "Fișe p.22"),
 G("Oxigenul fotosintezei", "Oxigenul eliberat în fotosinteză provine din:", ["dioxidul de carbon", "fotoliza apei", "glucoză", "aerul din stomate"], 1,
   "În faza de lumină apa se descompune (fotoliza) și se eliberează O2.", {0: "M15", 2: "M15", 3: "M15"}, "U", 2, "Fișe p.22"),
 G("Evidențierea", "Fotosinteza poate fi evidențiată după:", ["O2 consumat", "CO2 produs", "O2 eliberat", "apa eliminată prin stomate"], 2,
   "Se evidențiază după CO2 absorbit, substanțe organice produse sau O2 eliberat; respirația, după O2 consumat și CO2 produs.", {0: "M15", 1: "M15", 3: "M27"}, "A", 2, "Fișe p.22"),
 G("Importanța fotosintezei", "Care este o importanță a fotosintezei?", ["consumul oxigenului din atmosferă", "conversia energiei luminoase în energie chimică", "eliberarea CO2 în atmosferă", "descompunerea substanțelor organice"], 1,
   "Fotosinteza produce substanțe organice, eliberează O2 și absoarbe CO2 (purificarea atmosferei).", {0: "M15", 2: "M15", 3: "M15"}, "C", 1, "Fișe p.23"),
 G("Frunza", "Particularitate a frunzei adaptată fotosintezei:", ["lipsa stomatelor", "țesut asimilator bogat în cloroplaste", "pereți groși, lignificați", "absența vaselor conducătoare"], 1,
   "Frunza are suprafață mare, epidermă cu stomate, țesut asimilator și vase conducătoare.", {0: "M15", 2: "M15", 3: "M15"}, "U", 2, "Fișe p.22"),
],

af=[
 AF("Fotosinteza", "În procesul de fotosinteză, plantele transformă substanțele organice în substanțe anorganice, eliberând oxigen în atmosferă.", False,
    "În procesul de fotosinteză, plantele transformă substanțele anorganice în substanțe organice, eliberând oxigen în atmosferă.", "CO2 și apa sunt substanțe anorganice; glucoza este organică.", "M15", src="Simulare 2026 I.D.2"),
 AF("Faza de lumină", "Faza de lumină a fotosintezei are loc în stroma cloroplastelor.", False, "Faza de lumină a fotosintezei are loc în grana cloroplastelor.", "Stroma este sediul fazei de întuneric.", "M07"),
 AF("Clorofila", "Clorofila a poate converti energia luminoasă în energie chimică.", True, None, "Clorofila b doar absoarbe lumina."),
 AF("Sursa de carbon", "Sursa de carbon în fotosinteză este CO2 atmosferic.", True, None, "Folosit în faza de întuneric."),
],

cp=[
 CP("Fotosinteza", "Procesul de ............ poate fi evidențiat după substanțele organice sintetizate și după ............ eliberat.", ["fotosinteză", "oxigenul"], src="Model după subiect bac 2025 I.A"),
 CP("Fotosinteza", "În fotosinteză, plantele folosesc ca sursă de energie energia ............ și ca sursă de carbon ............ atmosferic.", ["luminoasă", "CO2 (dioxidul de carbon)"]),
],

ex=[
 EX("Faze", "Dați două exemple de faze ale fotosintezei; scrieți câte o caracteristică.",
    [("faza de lumină", "are loc în grana; fotoliza apei; se eliberează O2 și ATP"), ("faza de întuneric", "are loc în stromă; sinteza substanțelor organice din CO2")]),
 EX("Importanță", "Dați două exemple de importanță a fotosintezei.",
    [("conversia energiei", "energia luminoasă devine energie chimică"), ("eliberarea oxigenului", "necesar respirației"), ("purificarea atmosferei", "prin absorbția CO2")]),
],

st=[
 ST("Fotosinteza", "III.1.b", "Explicați de ce frunza este organul specializat în fotosinteză.",
    "Frunza are suprafață mare de captare a luminii, epidermă cu stomate pentru schimbul de gaze, țesut asimilator bogat în cloroplaste cu clorofilă și vase conducătoare pentru apă și substanțe organice.",
    ["suprafață mare", "stomate", "țesut asimilator cu cloroplaste", "vase conducătoare"], "U", 2),
 ST("Fotosinteza", "II.A.a", "Precizați două substanțe necesare fotosintezei și două produse ale ei.",
    "Necesare: apa și dioxidul de carbon (și lumina ca energie). Produse: glucoza (substanțe organice) și oxigenul.",
    ["două reactanți: H2O, CO2", "două produse: substanțe organice, O2"], "C", 1),
],

en=[
 EN("Fotosinteza", "Construiți patru enunțuri afirmative, câte două pentru fiecare conținut: faza de lumină; faza de întuneric.",
    ["Faza de lumină", "Faza de întuneric"],
    ["Faza de lumină are loc în grana cloroplastelor.", "În faza de lumină are loc fotoliza apei, cu eliberare de oxigen.",
     "Faza de întuneric se desfășoară în stroma cloroplastelor.", "În faza de întuneric se sintetizează substanțe organice din CO2."]),
],

me=[
 ME("Fotosinteza", "Fotosinteza", ["cloroplast", "clorofilă", "energie luminoasă", "dioxid de carbon", "glucoză", "oxigen"],
    "Fotosinteza se desfășoară în cloroplaste, unde clorofila absoarbe energia luminoasă. Din dioxid de carbon și apă se sintetizează glucoză, iar planta eliberează oxigen. Procesul transformă energia luminoasă în energie chimică."),
],

gl=[
 ("fotosinteză", "Proces de sinteză a substanțelor organice din apă, CO2 și săruri minerale, folosind energia luminoasă."),
 ("clorofilă", "Pigment verde din cloroplaste; clorofila a convertește energia luminoasă, clorofila b doar o absoarbe."),
 ("tilacoid", "Vezicule aplatizate din cloroplast; suprapuse formează grana."),
 ("fotoliză", "Descompunerea apei în faza de lumină, cu eliberare de O2."),
 ("ATP", "Adenozintrifosfat; substanță macroergică ce înmagazinează energie."),
 ("chemosinteză", "Nutriție autotrofă la unele bacterii, în care energia provine din reacții chimice."),
 ("autotrof", "Organism care își sintetizează substanțele organice din substanțe minerale."),
],

cd=[
 ("Care este ecuația fotosintezei?", "6CO2 + 6H2O → C6H12O6 + 6O2 (la lumină, cu clorofilă)."),
 ("Unde are loc faza de lumină / de întuneric?", "Grana / stroma."),
 ("De unde provine O2 eliberat în fotosinteză?", "Din fotoliza apei."),
 ("Cum se evidențiază fotosinteza?", "După CO2 absorbit, substanța organică produsă, O2 eliberat."),
 ("Importanța fotosintezei?", "Conversia energiei, sinteza de substanțe organice, eliberarea O2, purificarea atmosferei prin absorbția CO2."),
],

cmp=[
 dict(title="Fotosinteză vs respirație aerobă", cols=["Criteriu", "Fotosinteză", "Respirație aerobă"],
      rows=[["Ecuație", "6CO2 + 6H2O → C6H12O6 + 6O2", "C6H12O6 + 6O2 → 6CO2 + 6H2O + energie"], ["Locul", "cloroplaste", "mitocondrii"],
            ["Energie", "se înmagazinează (lumină → chimică)", "se eliberează (ATP)"], ["O2", "eliberat", "consumat"], ["Organisme", "autotrofe cu clorofilă", "majoritatea organismelor"]]),
],
)
