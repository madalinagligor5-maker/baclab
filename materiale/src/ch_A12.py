from lib import *
from decimal import Decimal as D

def fmt(x):
    s = format(x.normalize(), "f")
    return s.replace(".", ",")

def blood_chain(mass_kg, p_blood=7, p_plasma=55, p_water=90):
    m = D(mass_kg)
    blood = m * D(p_blood) / 100
    plasma = blood * D(p_plasma) / 100
    water = plasma * D(p_water) / 100
    return blood, plasma, water

def pb_water(mass, who, d=2, src=None, extra=None):
    blood, plasma, water = blood_chain(mass)
    steps = [
        f"Masa sângelui = {mass} kg × 7 / 100 = {fmt(blood)} kg",
        f"Masa plasmei = {fmt(blood)} kg × 55 / 100 = {fmt(plasma)} kg",
        f"Masa apei din plasmă = {fmt(plasma)} kg × 90 / 100 = {fmt(water)} kg",
    ]
    return PB("Calcul în lanț cu procente", "problema_calcul",
              f"Calculați masa apei din plasma sângelui unui {who}, știind: sângele reprezintă 7% din masa corpului; plasma reprezintă 55% din masa sângelui; apa reprezintă 90% din masa plasmei; masa corpului este de {mass} kg. Scrieți toate etapele.",
              dict(masa_corp_kg=mass, sange_pct=7, plasma_pct=55, apa_pct=90), steps, f"{fmt(water)} kg (= {fmt(water*1000)} g)", extra, d, src)

b11, p11, w11 = blood_chain(11)
b87, p87, w87 = blood_chain(87)
dry87 = p87 * D(10) / 100
fig87 = b87 * D(45) / 100
b60, p60, w60 = blood_chain(60)
dry60 = p60 * D(10) / 100
fig60 = b60 * D(45) / 100

CH = dict(
meta=dict(id="A12", title="Mediul intern: sângele (compoziție, roluri)", module="A",
  sources=["Fișe sinteză 2012, p.34–35, 63"],
  concepts=["mediul intern: sânge, limfă, lichid interstițial; homeostazia", "sânge: țesut conjunctiv fluid, 7–8% din greutatea corpului", "plasmă 55% (apă 90%, reziduu uscat 10%) și elemente figurate 45%",
            "eritrocite (anucleate, hemoglobină), leucocite (apărare), trombocite (hemostază)", "Hb: oxihemoglobină, carbohemoglobină, carboxihemoglobină", "rolurile sângelui"],
  bac_slots=["I.C", "I.D", "II.A.a", "II.A.c"], prereq=["A05"], big_ideas=["homeostazie", "structură–funcție"]),

gr=[
 G("Plasma", "Plasma sangvină reprezintă aproximativ:", ["45% din volumul sanguin", "55% din volumul sanguin", "10% din volumul sanguin", "90% din volumul sanguin"], 1,
   "Plasma = 55% din volumul sanguin; elementele figurate = 45% (hematocrit).", {0: "M23", 2: "M23", 3: "M23"}, "C", 1, "Fișe p.34"),
 G("Apa din plasmă", "Apa reprezintă în plasmă aproximativ:", ["10%", "55%", "90%", "45%"], 2,
   "Restul de ~10% este reziduu uscat (săruri minerale, substanțe organice).", {0: "M23", 1: "M23", 3: "M23"}, "C", 1, "Fișe p.34"),
 G("Eritrocite", "Eritrocitele mature:", ["au nucleu și apără organismul", "sunt anucleate și conțin hemoglobină", "produc anticorpi", "participă la coagulare"], 1,
   "Sunt celule anucleate, discoidale, biconcave; transportă O2 și CO2.", {0: "M23", 2: "M23", 3: "M23"}, "C", 1, "Fișe p.34"),
 G("Leucocite", "Leucocitele au rol în:", ["transportul gazelor", "apărarea organismului prin fagocitoză și anticorpi", "hemostază", "transportul hormonilor exclusiv"], 1,
   "Sunt celule cu nucleu, fără pigmenți.", {0: "M23", 2: "M23", 3: "M23"}, "C", 1, "Fișe p.34"),
 G("Trombocite", "Trombocitele sunt:", ["celule cu nucleu, fagocitare", "fragmente celulare anucleate, cu rol în hemostază", "celule cu hemoglobină", "componente ale plasmei"], 1,
   "Produc factorii trombocitari ai coagulării; opresc hemoragia.", {0: "M23", 2: "M23", 3: "M23"}, "C", 1, "Fișe p.34"),
 G("Hemoglobina și CO", "Hemoglobina formează cu monoxidul de carbon un compus stabil numit:", ["oxihemoglobină", "carbohemoglobină", "carboxihemoglobină", "methemoglobină"], 2,
   "Carboxihemoglobina nu se descompune în țesuturi; acumularea produce asfixie. Oxi- și carbohemoglobina sunt compuși instabili.", {0: "M23", 1: "M23", 3: "M23"}, "C", 2, "Fișe p.34"),
 G("Hematocrit", "Hematocritul reprezintă:", ["plasma", "elementele figurate (≈45% din volumul sanguin)", "serul", "limfa"], 1,
   "Elementele figurate: eritrocite, leucocite, trombocite.", {0: "M23", 2: "M23", 3: "M23"}, "C", 2, "Fișe p.34"),
 G("Homeostazia", "Homeostazia este:", ["constanța parametrilor mediului intern în limite fiziologice", "scăderea temperaturii corpului", "variația compoziției sângelui", "un tip de respirație"], 0,
   "Condițiile mediului exterior se schimbă, dar mediul intern își păstrează compoziția și proprietățile.", {1: "M23", 2: "M23", 3: "M23"}, "C", 1, "Fișe p.34"),
 G("Mediul intern", "Mediul intern cuprinde:", ["sângele, limfa, lichidul interstițial", "doar sângele", "lichidul din celule", "urina și saliva"], 0,
   "Totalitatea lichidelor corpului situate extracelular.", {1: "M23", 2: "M23", 3: "M23"}, "C", 1, "Fișe p.34"),
 G("Locul formării", "Elementele figurate ale sângelui sunt produse de:", ["ficat", "măduva osoasă roșie hematogenă", "rinichi", "pancreas"], 1,
   "Sângele este considerat un țesut conjunctiv fluid.", {0: "M23", 2: "M23", 3: "M23"}, "C", 2, "Fișe p.63"),
 G("Calcul – procentul", "Dacă sângele reprezintă 7% din masa corpului, un copil de 20 kg are masa sângelui de:", ["0,14 kg", "1,4 kg", "14 kg", "0,7 kg"], 1,
   "20 × 7 / 100 = 1,4 kg.", {0: "M47", 2: "M47", 3: "M47"}, "A", 1, "Calcul simplu"),
],

af=[
 AF("Eritrocite", "Eritrocitele mature au nucleu.", False, "Eritrocitele mature sunt anucleate.", "Leucocitele au nucleu.", "M23"),
 AF("Trombocite", "Trombocitele participă la oprirea hemoragiilor.", True, None, ""),
 AF("Plasmă", "Plasma reprezintă 45% din volumul sanguin.", False, "Plasma reprezintă 55% din volumul sanguin.", "Elementele figurate reprezintă 45%.", "M23"),
 AF("Hemoglobina", "Hemoglobina are afinitate crescută pentru monoxidul de carbon.", True, None, "Carboxihemoglobina este un compus stabil."),
 AF("Sânge", "Sângele este un țesut conjunctiv fluid.", True, None, ""),
],

cp=[
 CP("Plasmă", "Plasma conține ............ % apă și un reziduu ............ .", ["90", "uscat"]),
 CP("Elemente figurate", "Elementele figurate ale sângelui sunt eritrocitele, ............ și ............ .", ["leucocitele", "trombocitele"]),
],

ex=[
 EX("Componente ale sângelui", "Precizați trei componente ale sângelui și câte un rol pentru două dintre ele.",
    [("eritrocitele", "transportul O2 și CO2 prin hemoglobină"), ("leucocitele", "apărarea organismului"), ("trombocitele", "hemostază (coagulare)"), ("plasma", "transportul substanțelor, al apei și hormonilor")],
    "Trei componente sunt suficiente; două roluri.", src="Subiect bac 2025 II.A.a"),
],

st=[
 ST("Rolul sângelui", "II.A.a", "Precizați trei roluri ale sângelui.",
    "Transportul apei, nutrimentelor, gazelor și substanțelor de excreție; menținerea echilibrului hidroelectrolitic; apărarea organismului; menținerea temperaturii constante; oprirea sângerării (hemostaza).",
    ["trei roluri corecte"], "C", 1, "Fișe p.34–35"),
 ST("Hemoglobina", "II.A.b", "Explicați de ce intoxicația cu monoxid de carbon duce la asfixie.",
    "Hemoglobina are afinitate crescută pentru CO și formează carboxihemoglobina, un compus stabil care nu se descompune în țesuturi; hemoglobina nu mai poate transporta O2 și țesuturile sufocă.",
    ["afinitate mare pentru CO", "carboxihemoglobină stabilă", "O2 netransportat"], "U", 3, "Fișe p.34"),
 ST("Leucocite", "II.A.b", "Explicați rolul leucocitelor în apărarea organismului.",
    "Leucocitele apără organismul prin fagocitoză (înglobează microbi) și prin eliberare de anticorpi.", ["fagocitoză", "anticorpi"], "U", 2, "Fișe p.34"),
],

en=[
 EN("Sânge", "Construiți patru enunțuri afirmative, câte două pentru fiecare conținut: eritrocitele; trombocitele.",
    ["Eritrocitele", "Trombocitele"],
    ["Eritrocitele sunt celule anucleate care conțin hemoglobină.", "Eritrocitele transportă oxigenul și dioxidul de carbon.",
     "Trombocitele sunt fragmente celulare anucleate.", "Trombocitele participă la coagularea sângelui."]),
],

me=[
 ME("Sângele", "Sângele", ["plasmă", "elemente figurate", "eritrocite", "hemoglobină", "leucocite", "trombocite"],
    "Sângele este format din plasmă și elemente figurate, adică eritrocite, leucocite și trombocite. Eritrocitele conțin hemoglobină, care transportă gazele respiratorii. Leucocitele apără organismul, iar trombocitele participă la oprirea hemoragiilor."),
],

pb=[
 pb_water(11, "copil", 2, "Subiect bac 2025 II.A.c",
          extra=f"Calculați masa reziduului uscat din plasma sângelui copilului (plasma are {fmt(p11)} kg; reziduul uscat reprezintă 10%): {fmt(p11)} kg × 10 / 100 = {fmt(p11*D(10)/100)} kg."),
 pb_water(87, "adult", 2, "Simulare 2026 II.A.c",
          extra=f"Calculați masa elementelor figurate ale sângelui adultului (45% din masa sângelui, {fmt(b87)} kg): {fmt(b87)} × 45 / 100 = {fmt(fig87)} kg. Sau masa reziduului uscat din plasmă: {fmt(p87)} × 10 / 100 = {fmt(dry87)} kg."),
 pb_water(60, "elev", 1, "Problemă de antrenament",
          extra=f"Calculați masa reziduului uscat din plasmă: {fmt(p60)} × 10 / 100 = {fmt(dry60)} kg."),
 PB("Calcul în lanț cu procente", "problema_calcul",
    "Un adult are masa corpului de 70 kg. Sângele reprezintă 8% din masa corpului, iar elementele figurate 45% din masa sângelui. Calculați masa elementelor figurate.",
    dict(masa_corp_kg=70, sange_pct=8, elemente_figurate_pct=45),
    [f"Masa sângelui = 70 × 8 / 100 = {fmt(D(70)*8/100)} kg", f"Masa elementelor figurate = {fmt(D(70)*8/100)} × 45 / 100 = {fmt(D(70)*8/100*45/100)} kg"],
    f"{fmt(D(70)*8/100*45/100)} kg", None, 2, "Variație cu 8% (fișele indică 7–8%)"),
],

gl=[
 ("mediu intern", "Totalitatea lichidelor extracelulare: sânge, limfă, lichid interstițial."),
 ("homeostazie", "Constanța parametrilor mediului intern în limite fiziologice."),
 ("plasmă", "Componenta lichidă a sângelui (55%); 90% apă."),
 ("hematocrit", "Elementele figurate ale sângelui (45% din volumul sanguin)."),
 ("eritrocit (hematie)", "Celulă anucleată, discoidală biconcavă, cu hemoglobină."),
 ("leucocit", "Celulă nucleată fără pigmenți; apărare prin fagocitoză și anticorpi."),
 ("trombocit", "Fragment celular anucleat; hemostază."),
 ("hemoglobină", "Pigment respirator din eritrocite; fixează și transportă gazele respiratorii."),
 ("hemostază", "Oprirea hemoragiei."),
],

cd=[
 ("Ce procente au plasma și elementele figurate?", "Plasma 55%, elementele figurate 45%."),
 ("Cât din masa corpului este sângele?", "7–8%."),
 ("Ce procent din plasmă este apă?", "90%."),
 ("Care elemente figurate sunt anucleate?", "Eritrocitele mature și trombocitele."),
 ("Ce formează hemoglobina cu CO?", "Carboxihemoglobină, compus stabil → asfixie."),
],

cmp=[
 dict(title="Elementele figurate", cols=["Element", "Nucleu", "Rol"],
      rows=[["Eritrocite", "anucleate", "transportul O2 și CO2"], ["Leucocite", "nucleate", "apărare (fagocitoză, anticorpi)"], ["Trombocite", "anucleate (fragmente)", "hemostază"]]),
],
)
