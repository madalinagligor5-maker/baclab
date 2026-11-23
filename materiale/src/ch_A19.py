from lib import *

CH = dict(
meta=dict(id="A19", title="Organele de simț și deficiențele senzoriale", module="A",
  sources=["Fișe sinteză 2012, p.38–42"],
  concepts=["pielea: straturi, receptori, funcții", "nasul și limba (chemoreceptori)", "ochiul: tunici, aparat optic, retină (conuri, bastonașe)", "urechea: externă, medie, internă (organul Corti, echilibru)",
            "deficiențe: miopie, hipermetropie, astigmatism, strabism, surditate"],
  bac_slots=["I.C", "I.D", "III.1"], prereq=["A05", "A18"], big_ideas=["structură–funcție", "informație"]),

gr=[
 G("Fotoreceptori", "Celulele fotosensibile din structura ochiului mamiferelor:", ["fac sinapsă cu neuronii bipolari", "participă la formarea nervului optic", "sunt localizate la nivelul coroidei", "sunt componente ale sistemului optic"], 0,
   "Fotoreceptorii (conuri și bastonașe) sunt în retină și fac sinapsă cu neuronii bipolari; axonii celulelor ganglionare formează nervul optic.", {1: "M34", 2: "M34", 3: "M34"}, "U", 3, "Simulare 2026 I.C.5"),
 G("Conuri", "Celulele cu con din retină:", ["asigură vederea nocturnă, acromatică", "predomină în pata galbenă și asigură vederea diurnă, cromatică", "lipsesc din pata galbenă", "sunt mai numeroase decât bastonașele"], 1,
   "Sunt ~7 milioane; exclusive în foveea centralis; bastonașele (~130 milioane) asigură vederea nocturnă.", {0: "M34", 2: "M34", 3: "M34"}, "C", 2, "Fișe p.39–40"),
 G("Aparat optic", "Fac parte din aparatul optic al ochiului:", ["sclerotica și coroida", "corneea, umoarea apoasă, cristalinul, corpul vitros", "retina și pata galbenă", "irisul și pupila"], 1,
   "Mediile transparente.", {0: "M34", 2: "M34", 3: "M34"}, "C", 2, "Fișe p.40"),
 G("Coroida", "Coroida:", ["este tunica externă fibroasă", "este pigmentată și vascularizată, cu rol trofic și de cameră obscură", "conține fotoreceptorii", "este transparentă"], 1,
   "Tunica medie vasculară cuprinde coroida și irisul.", {0: "M34", 2: "M34", 3: "M34"}, "C", 2, "Fișe p.39"),
 G("Pupila", "Cantitatea de lumină care pătrunde în globul ocular este reglată de:", ["cristalin", "pupilă (iris)", "sclerotică", "cornee"], 1,
   "Irisul este străbătut central de pupilă.", {0: "M34", 2: "M34", 3: "M34"}, "C", 1, "Fișe p.39"),
 G("Imaginea pe retină", "La ochiul emetrop imaginea pe retină este:", ["reală, mai mare și dreaptă", "reală, mai mică și răsturnată", "virtuală, dreaptă", "formată în fața retinei"], 1,
   "Imaginea obiectelor privite se formează pe retină.", {0: "M35", 2: "M35", 3: "M35"}, "C", 2, "Fișe p.40"),
 G("Miopie", "În miopie imaginea se formează:", ["pe retină", "în fața retinei, corecția fiind cu lentile divergente", "în spatele retinei, corecția fiind cu lentile divergente", "în fața retinei, corecția fiind cu lentile convergente"], 1,
   "Glob ocular alungit sau cristalin cu putere de refracție crescută.", {0: "M35", 2: "M35", 3: "M35"}, "A", 2, "Fișe p.41"),
 G("Hipermetropie", "Hipermetropia se corectează cu lentile:", ["divergente, biconcave", "convergente, biconvexe", "cilindrice", "fumurii"], 1,
   "Imaginea se formează în spatele retinei; globul ocular este mai turtit.", {0: "M35", 2: "M35", 3: "M35"}, "A", 2, "Fișe p.41"),
 G("Astigmatism", "Astigmatismul se corectează cu lentile:", ["divergente", "convergente", "cilindrice", "sferice"], 2,
   "Cauză: curbura neuniformă a cristalinului sau a corneei.", {0: "M35", 1: "M35", 3: "M35"}, "A", 2, "Fișe p.41"),
 G("Organul Corti", "Organul Corti este receptorul pentru auz și se află în:", ["urechea medie", "melcul membranos", "vestibul", "canalele semicirculare"], 1,
   "Este așezat pe membrana bazilară.", {0: "M34", 2: "M34", 3: "M34"}, "C", 2, "Fișe p.41"),
 G("Oscioare", "Urechea medie conține:", ["ciocanul, nicovala și scărița", "organul Corti", "utricula și sacula", "pavilionul"], 0,
   "Comunică cu faringele prin trompa lui Eustachio.", {1: "M34", 2: "M34", 3: "M34"}, "C", 1, "Fișe p.40"),
 G("Echilibru", "Receptorii echilibrului se găsesc în:", ["melcul membranos", "crestele ampulare și maculele din sacula și utriculă", "timpan", "retină"], 1,
   "Aparatul vestibular al urechii interne; informația ajunge la cerebel.", {0: "M34", 2: "M34", 3: "M34"}, "C", 3, "Fișe p.41"),
 G("Piele", "Pielea este alcătuită din:", ["epiderm, derm, hipoderm", "sclerotică, coroidă, retină", "pavilion, conduct, timpan", "mucoasă, submucoasă, musculară"], 0,
   "Epidermul nu este vascularizat; dermul conține glande și foliculi piloși; hipodermul – adipocite.", {1: "M34", 2: "M34", 3: "M34"}, "C", 1, "Fișe p.38"),
 G("Olfacție", "Receptorii olfactivi sunt:", ["mecanoreceptori", "chemoreceptori de distanță, neuroni bipolari", "fotoreceptori", "termoreceptori"], 1,
   "Mucoasa olfactivă se află în partea superioară a foselor nazale.", {0: "M34", 2: "M34", 3: "M34"}, "C", 2, "Fișe p.38"),
 G("Gust", "Senzațiile gustative primare sunt:", ["acru, amar, dulce, sărat", "cald, rece, dureros", "alb, negru, roșu", "tare, moale, aspru"], 0,
   "Mugurii gustativi sunt receptori de contact.", {1: "M34", 2: "M34", 3: "M34"}, "C", 1, "Fișe p.39"),
 G("Surditate", "Surditatea de conducere apare prin:", ["leziuni ale nervului acustic", "dop de ceară în canalul auditiv sau spargerea timpanului", "leziuni ale centrului auditiv din creier", "lipsa cerebelului"], 1,
   "Leziunea nervului acustic sau a centrilor produce surditate nervoasă.", {0: "M26", 2: "M26", 3: "M26"}, "C", 3, "Fișe p.41–42"),
],

af=[
 AF("Epiderm", "Epidermul este bogat vascularizat.", False, "Epidermul este nevascularizat.", "Dermul și hipodermul sunt vascularizate.", "M14"),
 AF("Cristalin", "Cristalinul este o lentilă biconvexă, transparentă.", True, None, ""),
 AF("Miopie", "Miopia se corectează cu lentile convergente.", False, "Miopia se corectează cu lentile divergente.", "Hipermetropia – convergente.", "M35"),
 AF("Bastonașe", "Bastonașele lipsesc din foveea centralis.", True, None, ""),
 AF("Urechea medie", "Urechea medie conține labirintul membranos.", False, "Urechea internă conține labirintul membranos.", "Urechea medie conține oscioarele.", "M34"),
 AF("Strabism", "Strabismul este provocat de slăbirea unuia dintre mușchii externi ai globului ocular.", True, None, ""),
],

cp=[
 CP("Ochiul", "Fotoreceptorii retinei sunt celulele cu ............ și celulele cu ............ .", ["con", "bastonaș"]),
 CP("Urechea", "Urechea medie conține trei oscioare: ciocanul, ............ și ............ .", ["nicovala", "scărița"]),
 CP("Hipermetropie", "În hipermetropie imaginea se formează în ............ retinei.", ["spatele"]),
],

ex=[
 EX("Deficiențe senzoriale", "Numiți trei deficiențe senzoriale la om.",
    [("miopia", "imagine în fața retinei"), ("hipermetropia", "imagine în spatele retinei"), ("astigmatismul", "curbură neuniformă"), ("strabismul", "axe optice neparalele"), ("surditatea", "scăderea acuității auditive")],
    "Orice trei.", src="Subiect bac 2025 III.1.a"),
 EX("Componente ale urechii", "Dați două exemple de componente ale urechii interne; scrieți câte un rol.",
    [("melcul membranos (organul Corti)", "receptor pentru auz"), ("canalele semicirculare", "receptori ai echilibrului"), ("vestibulul membranos (sacula, utricula)", "receptori ai echilibrului")]),
],

st=[
 ST("Urechea internă", "III.1.c", "Precizați două caracteristici structurale ale urechii interne la mamifere.",
    "Este formată din labirint osos (vestibul osos, trei canale semicirculare, melc osos) cu perilimfă și labirint membranos situat în interior, cu endolimfă; în melcul membranos se află organul Corti.",
    ["labirint osos + membranos", "perilimfă / endolimfă", "organul Corti"], "C", 2, "Subiect bac 2025 III.1.c"),
 ST("Miopie", "II.A.a", "Numiți o deficiență senzorială precizând o cauză, o manifestare și două măsuri de prevenire.",
    "Miopia: cauză – glob ocular alungit; manifestare – imaginea se formează în fața retinei, corecție cu lentile divergente; prevenire – iluminat suficient, distanța ochi–carte de 25–30 cm.",
    ["boală", "cauză", "manifestare", "două măsuri"], "C", 2, "Fișe p.41"),
 ST("Fotoreceptori", "III.1.b", "Explicați de ce vederea nocturnă este acromatică.",
    "Vederea nocturnă este asigurată de celulele cu bastonaș, care sunt sensibile la lumină slabă, dar nu disting culorile; culorile sunt percepute de celulele cu con.",
    ["bastonașe – vedere nocturnă", "conurile – culori"], "U", 2, "Fișe p.40"),
],

en=[
 EN("Organe de simț", "Construiți patru enunțuri afirmative, câte două pentru fiecare conținut: retina; urechea medie.",
    ["Retina", "Urechea medie"],
    ["Retina este tunica internă a globului ocular.", "Retina conține celule fotoreceptoare: conuri și bastonașe.",
     "Urechea medie conține ciocanul, nicovala și scărița.", "Urechea medie comunică cu faringele prin trompa lui Eustachio."]),
],

me=[
 ME("Ochiul", "Ochiul", ["retină", "fotoreceptori", "cristalin", "pupilă", "imagine", "nerv optic"],
    "Ochiul este organul văzului, iar lumina trece prin pupilă și cristalin și formează imaginea pe retină. Retina conține fotoreceptori, iar informația este transmisă prin nervul optic spre creier."),
],

gl=[
 ("analizator", "Receptor + cale de conducere + centru cortical."),
 ("retină", "Tunica internă a ochiului; conține fotoreceptorii."),
 ("con", "Celulă fotoreceptoare pentru vederea diurnă, cromatică."),
 ("bastonaș", "Celulă fotoreceptoare pentru vederea nocturnă, acromatică."),
 ("pata galbenă (macula lutea)", "Zona cu conuri; foveea centralis are acuitate maximă."),
 ("cristalin", "Lentilă biconvexă transparentă din spatele irisului."),
 ("corp vitros", "Gel transparent din camera posterioară."),
 ("organul Corti", "Receptorul auzului din melcul membranos."),
 ("trompa lui Eustachio", "Leagă urechea medie de faringe."),
 ("miopie", "Imagine în fața retinei; lentile divergente."),
 ("hipermetropie", "Imagine în spatele retinei; lentile convergente."),
 ("astigmatism", "Curbură neuniformă; lentile cilindrice."),
 ("strabism", "Axe optice neparalele; slăbirea unui mușchi extern."),
],

cd=[
 ("Care sunt tunicile ochiului?", "Externă (sclerotică, cornee), medie (coroidă, iris), internă (retina)."),
 ("Conuri vs bastonașe?", "Conuri: vedere diurnă, cromatică, pata galbenă; bastonașe: vedere nocturnă, acromatică, periferie."),
 ("Părțile urechii?", "Externă, medie (oscioare), internă (labirint osos și membranos)."),
 ("Corecția miopiei / hipermetropiei?", "Lentile divergente / convergente."),
 ("Senzații gustative primare?", "Acru, amar, dulce, sărat."),
],

cmp=[
 dict(title="Deficiențe vizuale", cols=["Deficiență", "Cauză", "Imaginea", "Corecție"],
      rows=[["Miopie", "glob alungit / refracție crescută", "în fața retinei", "lentile divergente (biconcave)"], ["Hipermetropie", "glob turtit / refracție scăzută", "în spatele retinei", "lentile convergente (biconvexe)"],
            ["Astigmatism", "curbură neuniformă", "focalizare în puncte diferite", "lentile cilindrice"], ["Strabism", "slăbirea unui mușchi extern", "axe neparalele", "chirurgical / exerciții"]]),
],
)
