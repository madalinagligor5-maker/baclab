from lib import *

CH = dict(
meta=dict(id="A16", title="Locomoția la animale: scheletul și mușchii", module="A",
  sources=["Fișe sinteză 2012, p.32–33"],
  concepts=["sistem osos (pasiv) și muscular (activ)", "scheletul capului, trunchiului, membrelor", "coloana vertebrală 33–34 vertebre, 12 perechi de coaste, stern; cutia toracică; bazin", "adaptări: acvatice, liliac; digitigrade, unguligrade, plantigrade",
            "poziția bipedă la om: modificări", "mușchi striați scheletici: grupe principale"],
  bac_slots=["I.C", "I.D", "III.1"], prereq=["A05"], big_ideas=["structură–funcție", "adaptare–evoluție"]),

gr=[
 G("Componenta pasivă", "Componenta pasivă a sistemului locomotor este:", ["sistemul muscular", "sistemul osos", "sistemul nervos", "sistemul endocrin"], 1,
   "Oasele formează scheletul; mușchii sunt componenta activă.", {0: "M29", 2: "M29", 3: "M29"}, "C", 1, "Fișe p.32"),
 G("Antebraț", "Oasele antebrațului sunt:", ["humerusul și femurul", "radiusul și ulna", "tibia și fibula", "scapula și claviculă"], 1,
   "Brațul = humerus; gamba = tibie și fibulă.", {0: "M29", 2: "M29", 3: "M29"}, "C", 1, "Fișe p.32"),
 G("Gamba", "Oasele gambei sunt:", ["radius și ulna", "tibia și fibula", "femurul", "humerusul"], 1,
   "Coapsa = femur.", {0: "M29", 2: "M29", 3: "M29"}, "C", 1, "Fișe p.32"),
 G("Coloana vertebrală", "Coloana vertebrală este formată din:", ["12 vertebre", "33–34 de vertebre", "50 de vertebre", "24 de vertebre exclusiv"], 1,
   "Coastele sunt 12 perechi; împreună cu sternul formează cutia toracică.", {0: "M29", 2: "M29", 3: "M29"}, "C", 1, "Fișe p.32"),
 G("Bazin", "Bazinul se formează prin sudarea oaselor coxale cu:", ["osul sacral", "sternul", "claviculele", "omoplatul"], 0,
   "Adaptare la poziția verticală.", {1: "M29", 2: "M29", 3: "M29"}, "C", 2, "Fișe p.32–33"),
 G("Mod de aşezare pe sol", "Mamiferele plantigrade sunt:", ["pisica și tigrul", "vaca și oaia", "maimuța, ursul și omul", "calul"], 2,
   "Digitigrade: pisica, tigrul; unguligrade: copitatele (paricopitate – vaca, oaia, porcul; imparicopitate – calul).", {0: "M29", 1: "M29", 3: "M29"}, "C", 2, "Fișe p.32"),
 G("Mușchi brațul", "Mușchii brațului sunt:", ["deltoidul", "bicepsul și tricepsul", "croitorul", "fesierii"], 1,
   "Deltoid = umăr; croitor = coapsă; fesieri = bazin.", {0: "M29", 2: "M29", 3: "M29"}, "C", 1, "Fișe p.33"),
 G("Centura scapulară", "Centura scapulară este formată din:", ["coxale", "scapulă și claviculă", "radius și ulnă", "sacru"], 1,
   "Centura pelviană = oasele coxale.", {0: "M29", 2: "M29", 3: "M29"}, "C", 2, "Fișe p.32"),
 G("Poziție bipedă", "Staționarea verticală și mersul biped au determinat la om:", ["îngustarea toracelui", "curbura plantară elastică și curbele coloanei vertebrale", "lipsa mobilității mâinii", "scăderea mobilității articulațiilor"], 1,
   "Lărgirea toracelui, mobilitatea membrelor, mișcări complexe ale mâinii, bazinul.", {0: "M29", 2: "M29", 3: "M29"}, "U", 2, "Fișe p.32–33"),
 G("Mușchi scheletici", "Mușchii scheletici sunt formați din țesut muscular:", ["neted", "striat scheletic", "striat cardiac", "nervos"], 1,
   "Se fixează pe oase și determină mișcarea prin contracție.", {0: "M14", 2: "M14", 3: "M14"}, "C", 1, "Fișe p.33"),
],

af=[
 AF("Antebraț", "Brațul este format din oasele radius și ulnă.", False, "Brațul este format din osul humerus.", "Antebrațul: radius și ulna.", "M29"),
 AF("Cutia toracică", "Cutia toracică este formată din coloana vertebrală (parțial), coaste și stern.", True, None, ""),
 AF("Plantigrade", "Pisica este mamifer plantigrad.", False, "Pisica este mamifer digitigrad.", "Plantigrade: maimuța, ursul, omul.", "M29"),
 AF("Mușchi", "Mușchii scheletici se fixează pe oase.", True, None, ""),
],

cp=[
 CP("Locomoția", "Sistemul locomotor este alcătuit din sistemul ............ (componenta pasivă) și sistemul ............ (componenta activă).", ["osos", "muscular"]),
 CP("Scheletul membrului inferior", "Coapsa este susținută de osul ............, iar gamba de oasele tibia și ............ .", ["femur", "fibula"]),
],

ex=[
 EX("Oase ale membrului superior", "Dați două exemple de oase ale membrului superior; scrieți câte o localizare.",
    [("humerus", "în braț"), ("radius", "în antebraț"), ("scapula", "centura scapulară")]),
 EX("Grupe de mușchi", "Dați două exemple de mușchi ai membrului superior; scrieți câte o localizare.",
    [("deltoid", "umăr"), ("biceps", "braț"), ("triceps", "braț")]),
],

st=[
 ST("Poziția bipedă", "III.1.b", "Explicați două modificări ale scheletului uman determinate de poziția bipedă.",
    "Bazinul s-a format prin sudarea oaselor coxale cu sacrul, iar curburile coloanei vertebrale oferă mobilitate și elasticitate; se lărgește și toracele.",
    ["două modificări corecte"], "U", 2, "Fișe p.32–33"),
],

en=[
 EN("Locomoția", "Construiți patru enunțuri afirmative, câte două pentru fiecare conținut: scheletul trunchiului; mușchii scheletici.",
    ["Scheletul trunchiului", "Mușchii scheletici"],
    ["Scheletul trunchiului cuprinde coloana vertebrală, coastele și sternul.", "Coloana vertebrală este formată din 33–34 de vertebre.",
     "Mușchii scheletici sunt formați din țesut muscular striat.", "Mușchii scheletici determină, prin contracție, mișcarea oaselor."]),
],

me=[
 ME("Sistemul locomotor", "Sistemul locomotor", ["schelet", "oase", "mușchi", "contracție", "coloană vertebrală", "articulație"],
    "Sistemul locomotor este format din schelet și mușchi. Oasele sunt componenta pasivă și sunt unite prin articulații, iar mușchii, prin contracție, determină mișcarea. Coloana vertebrală și coastele susțin trunchiul."),
],

gl=[
 ("neurocraniu", "Cutia craniană."),
 ("viscerocraniu", "Oasele feței."),
 ("humerus", "Osul brațului."),
 ("radius și ulnă", "Oasele antebrațului."),
 ("femur", "Osul coapsei."),
 ("tibia și fibula", "Oasele gambei."),
 ("coxal", "Os al bazinului; împreună cu sacrul formează bazinul."),
 ("digitigrad", "Se sprijină pe degete (pisica, tigrul)."),
 ("unguligrad", "Se sprijină pe copite."),
 ("plantigrad", "Se sprijină pe toată talpa (urs, maimuță, om)."),
],

cd=[
 ("Câte perechi de coaste are omul?", "12."),
 ("Câte vertebre are coloana?", "33–34."),
 ("Care sunt oasele antebrațului / gambei?", "Radius și ulnă / tibia și fibula."),
 ("Care mamifere sunt digitigrade, unguligrade, plantigrade?", "Pisica; vaca, calul; omul, ursul."),
],

cmp=[],
)
