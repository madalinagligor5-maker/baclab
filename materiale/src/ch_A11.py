from lib import *

CH = dict(
meta=dict(id="A11", title="Circulația la plante: absorbția apei și circulația sevelor", module="A",
  sources=["Fișe sinteză 2012, p.5–6"],
  concepts=["absorbția: perii absorbanți (celule rizodermice)", "absorbție pasivă (sucțiune, osmoză, fără energie) și activă (presiune radiculară, cu energie)", "seva brută: vase lemnoase, ascendent",
            "traseu: peri absorbanți → exodermă → scoarță → endodermă → cilindru central → fascicule lemnoase", "seva elaborată: vase liberiene, ambele sensuri, activ, mai lent", "rezerve: rădăcină, tulpină"],
  bac_slots=["I.C", "I.D", "III.1"], prereq=["A04"], big_ideas=["structură–funcție", "homeostazie"]),

gr=[
 G("Zona de absorbție", "Zona de maximă absorbție a apei la nivelul rădăcinii este zona:", ["apicală", "perilor absorbanți", "lenticelelor", "stomatelor"], 1,
   "Perii absorbanți sunt celule rizodermice (epidermice) modificate.", {0: "M22", 2: "M27", 3: "M27"}, "C", 1, "Fișe p.5"),
 G("Absorbția pasivă", "Absorbția pasivă a apei:", ["se face cu consum de energie, prin presiune radiculară", "este determinată de deficitul hidric creat prin transpirație și se realizează prin osmoză", "are loc la nivelul frunzelor", "este maximă primăvara, când solul e bogat în apă, prin presiune radiculară"], 1,
   "Deficitul hidric din frunză declanșează forța de sucțiune transmisă prin vasele lemnoase până la perii absorbanți.", {0: "M22", 2: "M22", 3: "M22"}, "U", 2, "Fișe p.5"),
 G("Presiunea radiculară", "Presiunea radiculară pozitivă:", ["este un mecanism pasiv", "acționează cu consum de energie", "este influențată de transpirație", "conduce seva elaborată"], 1,
   "Absorbția activă, cu consum de energie; predomină primăvara sau când solul este bogat în apă.", {0: "M22", 2: "M22", 3: "M22"}, "C", 2, "Fișe p.5"),
 G("Seva brută", "Seva brută este:", ["soluție concentrată de substanțe organice", "soluție apoasă diluată, predominant minerală, din vasele lemnoase", "soluție bogată în glucide, din vasele liberiene", "latex"], 1,
   "Seva brută = apă cu săruri minerale.", {0: "M22", 2: "M22", 3: "M22"}, "C", 1, "Fișe p.5"),
 G("Seva elaborată", "Seva elaborată circulă:", ["numai ascendent, prin vase lemnoase", "în ambele sensuri, prin vasele liberiene", "numai descendent", "prin stomate"], 1,
   "Este bogată în substanțe organice solubile produse de frunze prin fotosinteză; transport activ, mai lent.", {0: "M22", 2: "M22", 3: "M22"}, "C", 1, "Fișe p.5–6"),
 G("Osmoza", "Osmoza este:", ["deplasarea apei printr-o membrană semipermeabilă dintr-o soluție diluată spre una concentrată", "eliminarea apei sub formă de picături", "sinteza glucidelor", "mișcarea stomatelor"], 0,
   "Soluția mai concentrată absoarbe apa din cea mai diluată; la rădăcină: suc celular vs mediu extracelular.", {1: "M27", 2: "M15", 3: "M27"}, "C", 2, "Fișe p.5"),
 G("Traseul sevei brute", "Seva brută străbate în rădăcină, în ordine:", ["endodermă → exodermă → cilindru central", "peri absorbanți → exodermă → scoarță → endodermă → cilindru central", "cilindru central → scoarță → peri absorbanți", "scoarță → peri absorbanți → endodermă"], 1,
   "Apoi pătrunde în fasciculele lemnoase și capătă traseu ascendent.", {0: "M22", 2: "M22", 3: "M22"}, "C", 3, "Fișe p.5"),
 G("Depozitarea", "Surplusul de substanțe organice se depune ca rezervă în rădăcina de:", ["cartof", "morcov", "gulie", "ceapă"], 1,
   "Rădăcini: morcov, sfeclă, ridiche; tulpini: gulie, cartof.", {0: "M22", 2: "M22", 3: "M22"}, "C", 2, "Fișe p.6"),
],

af=[
 AF("Absorbție pasivă", "Absorbția pasivă a apei se realizează cu consum de energie.", False, "Absorbția activă a apei se realizează cu consum de energie.", "Cea pasivă – prin osmoză, fără energie.", "M22"),
 AF("Seva brută", "Seva brută circulă prin vasele lemnoase.", True, None, ""),
 AF("Seva elaborată", "Seva elaborată circulă numai ascendent.", False, "Seva elaborată circulă în ambele sensuri.", "Descendent spre tulpină și rădăcină, ascendent spre flori și fructe.", "M22"),
 AF("Peri absorbanți", "Perii absorbanți sunt celule rizodermice modificate.", True, None, ""),
],

cp=[
 CP("Absorbția", "Absorbția ............ se realizează fără consum de energie, iar absorbția ............ se datorează presiunii radiculare.", ["pasivă", "activă"]),
 CP("Seve", "Seva ............ conține apă și săruri minerale, iar seva ............ conține substanțe organice.", ["brută", "elaborată"]),
],

ex=[
 EX("Forțe", "Dați două exemple de forțe care contribuie la ascensiunea sevei brute; scrieți câte o caracteristică.",
    [("presiunea radiculară", "mecanism activ, cu consum de energie; predomină primăvara"), ("forța de sucțiune", "mecanism pasiv, determinat de transpirație")]),
],

st=[
 ST("Seve", "III.1.b", "Explicați de ce transportul sevei elaborate se face cu consum de energie.",
    "Vasele liberiene sunt formate din celule vii, care au citoplasmă; transportul este activ, cu consum de energie, și are viteză mai mică.",
    ["celule vii cu citoplasmă", "transport activ"], "U", 2, "Fișe p.6"),
],

en=[
 EN("Circulația la plante", "Construiți patru enunțuri afirmative, câte două pentru fiecare conținut: seva brută; seva elaborată.",
    ["Seva brută", "Seva elaborată"],
    ["Seva brută este o soluție diluată, predominant minerală.", "Seva brută circulă ascendent prin vasele lemnoase.",
     "Seva elaborată este bogată în substanțe organice.", "Seva elaborată circulă prin vasele liberiene în ambele sensuri."]),
],

me=[
 ME("Absorbția", "Absorbția apei la plante", ["rădăcină", "peri absorbanți", "osmoză", "presiune radiculară", "sevă brută", "vase lemnoase"],
    "Rădăcina absoarbe apa prin perii absorbanți, prin osmoză sau sub acțiunea presiunii radiculare. Seva brută urcă prin vasele lemnoase spre frunze."),
],

gl=[
 ("rizodermă", "Epiderma rădăcinii; celulele ei modificate formează perii absorbanți."),
 ("osmoză", "Trecerea apei printr-o membrană semipermeabilă spre soluția mai concentrată."),
 ("presiune radiculară", "Forță activă, cu consum de energie, care contribuie la ascensiunea sevei."),
 ("forță de sucțiune", "Forță pasivă creată de transpirație; se transmite prin vasele lemnoase."),
 ("seva brută", "Apă cu săruri minerale; vase lemnoase."),
 ("seva elaborată", "Apă cu substanțe organice; vase liberiene."),
],

cd=[
 ("Ce conduc vasele lemnoase / liberiene?", "Seva brută / elaborată."),
 ("Cum se numesc cele două tipuri de absorbție și forțele?", "Pasivă (sucțiune, osmoză) și activă (presiune radiculară)."),
 ("Unde se depun rezervele plantelor?", "Rădăcini (morcov, sfeclă, ridiche), tulpini (gulie, cartof)."),
],

cmp=[
 dict(title="Seva brută vs elaborată", cols=["Criteriu", "Brută", "Elaborată"],
      rows=[["Compoziție", "apă + săruri minerale", "apă + substanțe organice"], ["Vase", "lemnoase", "liberiene"], ["Sens", "ascendent", "ascendent și descendent"],
            ["Energie", "presiune radiculară (activ) + sucțiune (pasiv)", "activ, consum de energie"]]),
],
)
