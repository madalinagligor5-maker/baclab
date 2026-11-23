from lib import *

CH = dict(
meta=dict(id="A18", title="Sistemul nervos central la mamifere; boli ale SNC", module="A",
  sources=["Fișe sinteză 2012, p.57–61"],
  concepts=["SNC: măduva spinării și encefal; SN periferic și vegetativ", "măduva: localizare C1–L2, substanță cenușie (H: coarne) și albă (cordoane)", "funcții: reflexă și de conducere; arcul reflex; reflexe monosinaptice/polisinaptice",
            "encefal: trunchi cerebral, cerebel, diencefal, emisfere cerebrale", "cerebel: echilibru, tonus, precizia mișcărilor", "hipotalamus", "scoarța: arii senzitive, motorii, de asociație",
            "boli: Parkinson, paralizie, epilepsie, scleroză în plăci; factori de risc"],
  bac_slots=["I.C", "I.D", "II.A", "III.1"], prereq=["A05"], big_ideas=["homeostazie", "informație", "structură–funcție"]),

gr=[
 G("Substanța albă", "Substanța albă a măduvei spinării:", ["este dispusă la interior, în formă de H", "este organizată în cordoane și conduce impulsuri", "conține corpii neuronilor care formează centrii reflecși", "formează coarnele"], 1,
   "Substanța albă (axoni mielinici) este la exterior, organizată în cordoane (posterioare, anterioare, laterale); are rol de conducere.", {0: "M31", 2: "M31", 3: "M31"}, "C", 1, "Fișe p.58"),
 G("Substanța cenușie", "Substanța cenușie a măduvei spinării:", ["este la exterior", "are forma literei H, cu coarne, și rol de centru reflex", "este formată din axoni mielinici", "este organizată în cordoane"], 1,
   "Este la interior, străbătută de canalul ependimar; coarne posterioare, laterale, anterioare.", {0: "M31", 2: "M31", 3: "M31"}, "C", 1, "Fișe p.57–58"),
 G("Localizarea măduvei", "Măduva spinării se întinde de la:", ["C1 până la L2", "T1 până la S5", "L1 până la coccis", "bulb până la C7"], 0,
   "Este situată în canalul vertebral.", {1: "M31", 2: "M31", 3: "M31"}, "C", 2, "Fișe p.57"),
 G("Arcul reflex", "Calea aferentă a arcului reflex conduce impulsul:", ["de la centru la efector", "de la receptor la centrul nervos", "de la efector la receptor", "între doi efectori"], 1,
   "Receptor → cale aferentă (senzitivă) → centru nervos → cale eferentă (motoare) → efector.", {0: "M33", 2: "M33", 3: "M33"}, "C", 1, "Fișe p.58"),
 G("Reflexe monosinaptice", "Reflexul rotulian este:", ["polisinaptic, cu neuroni intercalari", "monosinaptic, cu doi neuroni pe traseu", "vegetativ exclusiv", "de apărare"], 1,
   "Monosinaptice: rotulian, achilean, bicipital, tricipital; latență scurtă, viteză mare.", {0: "M33", 2: "M33", 3: "M33"}, "C", 2, "Fișe p.58"),
 G("Cerebelul", "Cerebelul are rol în:", ["menținerea echilibrului corpului", "reglarea temperaturii corpului", "secreția hormonilor sexuali", "elaborarea gândirii abstracte"], 0,
   "Pe baza informațiilor de la urechea internă; menține tonusul muscular și precizia mișcărilor fine.", {1: "M32", 2: "M32", 3: "M32"}, "C", 1, "Fișe p.59; subiect bac 2025 III.1.b"),
 G("Hipotalamus", "Hipotalamusul:", ["face parte din trunchiul cerebral", "este centru de control al funcțiilor vegetative și reglează homeotermia", "este sediul gândirii", "conduce numai impulsuri senzitive"], 1,
   "Face parte din diencefal; controlează sistemul endocrin; reglează comportamentele alimentar, sexual, de apărare.", {0: "M32", 2: "M32", 3: "M32"}, "C", 2, "Fișe p.59"),
 G("Trunchiul cerebral", "Trunchiul cerebral este format din:", ["talamus și hipotalamus", "bulb rahidian, punte și mezencefal", "lobii frontal și occipital", "vermis și emisfere cerebeloase"], 1,
   "Este în prelungirea măduvei spinării.", {0: "M32", 2: "M32", 3: "M32"}, "C", 2, "Fișe p.59"),
 G("Diencefal", "Diencefalul cuprinde:", ["bulb, punte, mezencefal", "talamus, epitalamus, metatalamus, hipotalamus", "vermis și două emisfere", "scizuri și girusuri"], 1,
   "Este în prelungirea trunchiului cerebral, acoperit de emisferele cerebrale.", {0: "M32", 2: "M32", 3: "M32"}, "C", 2, "Fișe p.59"),
 G("Scoarța cerebrală", "Pe suprafața scoarței cerebrale se descriu:", ["numai arii motorii", "arii senzitive, motorii și de asociație", "numai arii vizuale", "numai nuclei bazali"], 1,
   "Ariile de asociație controlează comportamentul, învățarea, memorarea.", {0: "M32", 2: "M32", 3: "M32"}, "C", 1, "Fișe p.60"),
 G("Lobii cerebrali", "Lobii emisferelor cerebrale sunt:", ["frontal, temporal, parietal, occipital", "cervical, toracic, lombar, sacral", "anterior, posterior, lateral, medial", "stâng, drept, superior, inferior"], 0,
   "Sunt delimitați de scizuri.", {1: "M32", 2: "M32", 3: "M32"}, "C", 1, "Fișe p.60"),
 G("Parkinson", "Boala Parkinson se manifestă prin:", ["convulsii cu pierderea cunoștinței", "rigiditate musculară, tremurături, mers cu pași mici", "plăci în substanța albă", "paralizia unui membru"], 1,
   "Cauză: degenerarea progresivă a sistemului nervos.", {0: "M26", 2: "M26", 3: "M26"}, "C", 2, "Fișe p.60"),
 G("Epilepsia", "Epilepsia se caracterizează prin:", ["rigiditate musculară", "convulsii, pierderea cunoștinței", "demielinizare în plăci", "paralizie flască"], 1,
   "Cauze: modificări bioelectrice ale unui grup de neuroni, traumatisme craniene, tumori.", {0: "M26", 2: "M26", 3: "M26"}, "C", 2, "Fișe p.60"),
 G("Scleroza în plăci", "În scleroza în plăci este afectată:", ["teaca de mielină din substanța albă", "substanța cenușie a cerebelului", "retina", "nervul optic exclusiv"], 0,
   "Apar leziuni sub formă de plăci; tulburări de echilibru, coordonare, vorbire, vedere.", {1: "M26", 2: "M26", 3: "M26"}, "C", 3, "Fișe p.60–61"),
 G("Paralizii", "Paralizia unui membru se numește:", ["tetraplegie", "hemiplegie", "monoplegie", "paraplegie exclusiv"], 2,
   "Hemiplegia – jumătate a corpului; tetraplegia – toate membrele.", {0: "M26", 1: "M26", 3: "M26"}, "C", 2, "Fișe p.60"),
],

af=[
 AF("Substanța albă", "La mamifere, substanța albă din structura măduvei spinării este organizată în coarne.", False, "La mamifere, substanța albă din structura măduvei spinării este organizată în cordoane.", "Substanța cenușie formează coarnele.", "M31", src="Simulare 2026 I.D.1"),
 AF("Cerebel", "Cerebelul menține echilibrul corpului.", True, None, ""),
 AF("Reflex", "Reflexul rotulian este polisinaptic.", False, "Reflexul rotulian este monosinaptic.", "Are doi neuroni pe traseu.", "M33"),
 AF("Hipotalamus", "Hipotalamusul face parte din diencefal.", True, None, ""),
 AF("Măduva", "Măduva spinării are două funcții: reflexă și de conducere.", True, None, ""),
],

cp=[
 CP("Măduva spinării", "Substanța ............ a măduvei are rol de centru reflex, iar substanța ............ are rol de conducere.", ["cenușie", "albă"]),
 CP("Encefal", "Encefalul este format din trunchi cerebral, ............, diencefal și ............ cerebrale.", ["cerebel", "emisfere"]),
],

ex=[
 EX("Etaje ale encefalului", "Dați două exemple de componente ale encefalului; scrieți câte un rol.",
    [("cerebelul", "menține echilibrul și tonusul muscular"), ("hipotalamusul", "reglează temperatura corpului și funcțiile vegetative"), ("scoarța cerebrală", "etajul superior de integrare al activității sistemului nervos")]),
 EX("Boli ale SNC", "Dați două exemple de boli ale SNC la om; scrieți câte o manifestare.",
    [("boala Parkinson", "rigiditate musculară, tremurături"), ("epilepsia", "convulsii și pierderea cunoștinței"), ("scleroza în plăci", "tulburări de echilibru și coordonare")]),
],

st=[
 ST("Cerebel", "III.1.b", "Explicați afirmația: „La mamifere, cerebelul are rol în menținerea echilibrului corpului”.",
    "Cerebelul primește informații de la urechea internă (aparatul vestibular) și le integrează; prin conexiunile sale reglează tonusul muscular și poziția corpului, deci menține echilibrul.",
    ["informații de la urechea internă", "tonus muscular și poziția corpului"], "U", 2, "Subiect bac 2025 III.1.b"),
 ST("Boli ale SNC", "II.A.a", "Numiți o boală a SNC la om, precizând o cauză, o manifestare și două măsuri de prevenire/factori de risc de evitat.",
    "Exemplu – epilepsia: cauză – traumatisme craniene, tumori, alcoolism; manifestare – convulsii și pierderea cunoștinței; prevenire – evitarea alcoolului și a drogurilor, regim de viață rațional.",
    ["boală", "cauză", "manifestare", "două măsuri"], "C", 2),
 ST("Măduva spinării", "III.1.b", "Explicați de ce măduva spinării are funcție de conducere.",
    "Substanța albă este formată din axoni mielinici grupați în fascicule ascendente (sensibilitate) și descendente (motilitate), care conduc impulsul între măduvă și encefal.",
    ["substanța albă", "fascicule ascendente/descendente"], "U", 2, "Fișe p.58"),
],

en=[
 EN("SNC", "Construiți patru enunțuri afirmative, câte două pentru fiecare conținut: diencefalul; cerebelul.",
    ["Diencefalul", "Cerebelul"],
    ["Diencefalul este situat în prelungirea trunchiului cerebral.", "Hipotalamusul din diencefal reglează temperatura corpului.",
     "Cerebelul este alcătuit din două emisfere și vermis.", "Cerebelul menține echilibrul și tonusul muscular."],
    2, "Subiect bac 2025 III.1.c (diencefal)"),
],

me=[
 ME("Măduva spinării", "Măduva spinării", ["canal vertebral", "substanță cenușie", "substanță albă", "arc reflex", "cordoane", "conducere"],
    "Măduva spinării este localizată în canalul vertebral și are substanță cenușie, centru reflex, și substanță albă, organizată în cordoane. Ea îndeplinește funcția reflexă prin arcul reflex și funcția de conducere."),
],

gl=[
 ("SNC", "Sistem nervos central: măduva spinării și encefalul."),
 ("substanță cenușie", "Corpii neuronilor; centri nervoși; în măduvă are forma H."),
 ("substanță albă", "Axonii mielinici; căi de conducere; cordoane."),
 ("canal ependimar", "Canal central al măduvei, străbate substanța cenușie."),
 ("act reflex", "Răspunsul organismului la un stimul prin arc reflex."),
 ("arc reflex", "Receptor – cale aferentă – centru nervos – cale eferentă – efector."),
 ("trunchi cerebral", "Bulb rahidian, punte, mezencefal."),
 ("cerebel", "Echilibru, tonus muscular, precizia mișcărilor."),
 ("diencefal", "Talamus, epitalamus, metatalamus, hipotalamus."),
 ("hipotalamus", "Centru vegetativ; homeotermie; controlează sistemul endocrin."),
 ("scizură", "Șanț adânc care delimitează lobii cerebrali."),
 ("scoarță cerebrală", "Etajul superior de integrare; substanță cenușie la exterior."),
 ("boala Parkinson", "Degenerare progresivă; rigiditate și tremurături."),
 ("epilepsie", "Descărcări bioelectrice anormale; convulsii."),
 ("scleroză în plăci", "Distrugerea tecii de mielină, cu plăci în substanța albă."),
],

cd=[
 ("Unde sunt coarnele și unde cordoanele?", "Coarne – substanța cenușie; cordoane – substanța albă."),
 ("Componentele arcului reflex?", "Receptor, cale aferentă, centru, cale eferentă, efector."),
 ("Ce conține trunchiul cerebral?", "Bulb rahidian, punte, mezencefal."),
 ("Funcțiile cerebelului?", "Echilibru, tonus muscular, mișcări fine."),
 ("Ce reglează hipotalamusul?", "Funcții vegetative, homeotermie, echilibru hidroelectrolitic, comportamente, activitatea endocrină."),
 ("Lobii emisferelor?", "Frontal, temporal, parietal, occipital."),
],

cmp=[
 dict(title="Substanța cenușie vs albă (măduvă)", cols=["Criteriu", "Cenușie", "Albă"],
      rows=[["Poziție", "interior (H)", "exterior"], ["Formată din", "corpi neuronali, fibre", "axoni mielinici"], ["Organizare", "coarne (posterioare, laterale, anterioare)", "cordoane (posterioare, anterioare, laterale)"], ["Rol", "centru reflex", "conducere"]]),
 dict(title="Etajele encefalului", cols=["Structură", "Componente", "Rol principal"],
      rows=[["Trunchi cerebral", "bulb, punte, mezencefal", "căi de conducere, centri vegetativi"], ["Cerebel", "emisfere + vermis", "echilibru, tonus, mișcări fine"], ["Diencefal", "talamus, epitalamus, metatalamus, hipotalamus", "integrare, funcții vegetative"],
            ["Emisfere cerebrale", "lobi, scoarță, nuclei bazali", "integrare superioară"]]),
],
)
