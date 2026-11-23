from lib import *

CH = dict(
meta=dict(id="A17", title="Sensibilitatea și mișcarea la plante: tactisme, tropisme, nastii", module="A",
  sources=["Fișe sinteză 2012, p.51"],
  concepts=["sensibilitate = reacția la stimuli", "mișcări pasive (fără energie) și active (cu energie)", "tactisme: chimiotactism, fototactism", "tropisme: geotropism, fototropism, chimiotropism; pozitiv/negativ",
            "nastii: fotonastii, termonastii, seismonastii"],
  bac_slots=["I.C", "I.D", "III.1"], prereq=["A04"], big_ideas=["interdependență", "homeostazie"]),

gr=[
 G("Tactisme", "Tactismele sunt mișcări:", ["orientate ale organelor plantei", "ale celulelor mobile, în funcție de stimul", "neorientate, determinate de intensitatea stimulului", "pasive, fără stimul"], 1,
   "Exemple: chimiotactism (gameții bărbătești spre cei femeiești), fototactism (alge de la umbră la lumină).", {0: "M30", 2: "M30", 3: "M30"}, "C", 1, "Fișe p.51"),
 G("Geotropism", "Rădăcina prezintă:", ["geotropism negativ", "geotropism pozitiv", "fototropism pozitiv", "seismonastie"], 1,
   "Tulpina – geotropism negativ; rădăcina – fototropism negativ.", {0: "M30", 2: "M30", 3: "M30"}, "C", 1, "Fișe p.51"),
 G("Fototropism", "Floarea-soarelui prezintă:", ["fototropism pozitiv", "fototropism negativ", "geotropism pozitiv", "termonastie"], 0,
   "Se orientează spre lumină, la fel ca tulpina.", {1: "M30", 2: "M30", 3: "M30"}, "C", 1, "Fișe p.51"),
 G("Nastii", "Nastiile sunt mișcări:", ["orientate", "neorientate, determinate de intensitatea stimulului", "ale gameților", "pasive"], 1,
   "Fotonastii, termonastii, seismonastii.", {0: "M30", 2: "M30", 3: "M30"}, "C", 1, "Fișe p.51"),
 G("Seismonastie", "Strângerea foliolelor la Mimosa pudica la atingere este o:", ["fotonastie", "termonastie", "seismonastie", "tropism"], 2,
   "Răspuns la factori mecanici.", {0: "M30", 1: "M30", 3: "M30"}, "C", 1, "Fișe p.51"),
 G("Termonastie", "Deschiderea florilor de lalea la căldură este:", ["termonastie", "fotonastie", "geotropism", "chimiotactism"], 0,
   "Se închid la frig.", {1: "M30", 2: "M30", 3: "M30"}, "C", 1, "Fișe p.51"),
 G("Chimiotropism", "Orientarea rădăcinii spre sursa de substanțe nutritive este:", ["chimiotropism", "fototropism", "fotonastie", "seismonastie"], 0,
   "", {1: "M30", 2: "M30", 3: "M30"}, "C", 2, "Fișe p.51"),
 G("Mișcări pasive", "O mișcare pasivă a plantelor este:", ["geotropismul tulpinii", "răspândirea semințelor și a fructelor", "fototactismul algelor", "seismonastia"], 1,
   "Fără consum de energie.", {0: "M30", 2: "M30", 3: "M30"}, "C", 2, "Fișe p.51"),
],

af=[
 AF("Geotropism", "Tulpina prezintă geotropism pozitiv.", False, "Tulpina prezintă geotropism negativ.", "Rădăcina: geotropism pozitiv.", "M30"),
 AF("Fotonastii", "Florile reginei nopții se deschid noaptea și se închid ziua.", True, None, ""),
 AF("Tropisme", "Tropismele sunt mișcări neorientate.", False, "Tropismele sunt mișcări orientate.", "Nastiile sunt neorientate.", "M30"),
 AF("Tactisme", "Chimiotactismul gameților bărbătești este pozitiv.", True, None, "Sunt atrași de substanțele eliminate de gameții femeiești."),
],

cp=[
 CP("Mișcări", "Mișcările orientate ale organelor plantei se numesc ............, iar cele neorientate ............ .", ["tropisme", "nastii"]),
 CP("Mișcări", "Mișcările celulelor mobile ca răspuns la un stimul se numesc ............ .", ["tactisme"]),
],

ex=[
 EX("Tropisme", "Dați două exemple de tropisme; scrieți câte un exemplu de organ la care apar.",
    [("geotropism pozitiv", "rădăcina"), ("geotropism negativ", "tulpina"), ("fototropism pozitiv", "floarea-soarelui")]),
 EX("Nastii", "Dați două exemple de nastii; scrieți câte un exemplu de plantă.",
    [("fotonastie", "regina nopții / zorele"), ("termonastie", "lalea"), ("seismonastie", "Mimosa pudica")]),
],

st=[
 ST("Tropisme", "III.1.b", "Explicați de ce rădăcina prezintă geotropism pozitiv.",
    "Rădăcina crește în sensul de acțiune al forței gravitației, deci mișcarea este orientată în același sens cu stimulul (tropism pozitiv); astfel ajunge în sol, la apă și substanțe minerale.",
    ["orientare în sensul stimulului", "stimul: gravitația"], "U", 2),
],

en=[
 EN("Mișcări la plante", "Construiți patru enunțuri afirmative, câte două pentru fiecare conținut: tropismele; nastiile.",
    ["Tropismele", "Nastiile"],
    ["Tropismele sunt mișcări orientate ale organelor plantei.", "Tropismele pot fi pozitive sau negative, după sensul față de stimul.",
     "Nastiile sunt mișcări neorientate.", "Nastiile sunt determinate de intensitatea stimulului."]),
],

me=[
 ME("Mișcări la plante", "Mișcările plantelor", ["stimul", "tropism", "nastie", "tactism", "mișcare orientată", "rădăcină"],
    "Plantele răspund la stimuli prin mișcări active: tactisme, tropisme și nastii. Tropismele sunt mișcări orientate, ca geotropismul pozitiv al rădăcinii, iar nastiile sunt mișcări neorientate, determinate de intensitatea stimulului."),
],

gl=[
 ("sensibilitate", "Proprietatea organismelor de a reacționa la stimuli din mediu."),
 ("tactism", "Mișcare a celulelor mobile ca răspuns la un stimul."),
 ("tropism", "Mișcare orientată a organelor plantei, pozitivă sau negativă."),
 ("nastie", "Mișcare neorientată, determinată de intensitatea stimulului."),
 ("geotropism", "Tropism determinat de gravitație: rădăcina +, tulpina −."),
 ("fototropism", "Tropism determinat de lumină: tulpina +, rădăcina −."),
 ("fotonastie", "Nastie la lumină (regina nopții, zorele)."),
 ("termonastie", "Nastie la temperatură (lalea)."),
 ("seismonastie", "Nastie la stimul mecanic (Mimosa pudica)."),
],

cd=[
 ("Geotropismul rădăcinii / tulpinii?", "Pozitiv / negativ."),
 ("Fototropismul rădăcinii / tulpinii?", "Negativ / pozitiv."),
 ("Diferența tropism – nastie?", "Tropism: orientat; nastie: neorientat, depinde de intensitatea stimulului."),
 ("Exemple de nastii?", "Foto: regina nopții; termo: lalea; seismo: Mimosa pudica."),
],

cmp=[
 dict(title="Tactisme – tropisme – nastii", cols=["Tip", "Orientare", "Exemplu"],
      rows=[["Tactism", "al celulelor mobile, orientat de stimul", "gameții bărbătești spre cei femeiești; alge la lumină"], ["Tropism", "orientat, pozitiv sau negativ", "rădăcina – geotropism pozitiv; tulpina – fototropism pozitiv"],
            ["Nastie", "neorientat; depinde de intensitate", "lalea (termo), regina nopții (foto), mimoza (seismo)"]]),
],
)
