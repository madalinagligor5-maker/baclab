from lib import *

CH = dict(
meta=dict(id="A07", title="Nutriția heterotrofă la plante și fungi; simbioza", module="A",
  sources=["Fișe sinteză 2012, p.23"],
  concepts=["heterotrofie: saprofită (omnivore, specializate), parazită, simbiontă", "bacterii și ciuperci saprofite – importanță", "ciuperci parazite pe plante: rugina grâului, mana viței de vie, cornul secarei, tăciunele porumbului",
            "plante parazite: torțel (Cuscuta), lupoaie; haustori", "simbioza: licheni"],
  bac_slots=["I.B", "I.C", "I.D", "III.1"], prereq=["A03"], big_ideas=["interdependență", "energie"]),

gr=[
 G("Saprofitism", "Nutriția saprofită se caracterizează prin:",
   ["sinteza substanțelor organice din CO2", "preluarea substanțelor organice dizolvate din resturi organice", "obținerea hranei de la un organism viu", "asociere cu avantaj reciproc"], 1,
   "Saprofitele (unele bacterii și ciuperci) își iau substanțele organice dizolvate din substraturi organice moarte.", {0: "M16", 2: "M16", 3: "M16"}, "C", 1, "Fișe p.23"),
 G("Paraziți", "Haustorii sunt prelungiri ale:", ["rădăcinilor plantelor autotrofe", "plantelor parazite, care pătrund în vasele liberiene ale gazdei", "ciupercilor saprofite", "lichenilor"], 1,
   "Torțelul (Cuscuta) și lupoaia au pierdut clorofila și extrag substanțe organice prin haustori.", {0: "M16", 2: "M16", 3: "M16"}, "C", 2, "Fișe p.23"),
 G("Licheni", "Lichenii sunt asocieri între:", ["două ciuperci", "o algă (sau cianobacterie) și o ciupercă", "o bacterie și o plantă", "un mușchi și o algă"], 1,
   "Lichenii sunt un exemplu de simbioză (mutualism).", {0: "M16", 2: "M16", 3: "M16"}, "C", 1, "Fișe p.23"),
 G("Ciuperci parazite", "Este ciupercă parazită a cerealelor:", ["drojdia de bere", "rugina grâului", "Penicillium", "Mycoderma aceti"], 1,
   "Rugina grâului, mana viței de vie, cornul secarei, tăciunele porumbului sunt ciuperci parazite.", {0: "M16", 2: "M16", 3: "M16"}, "C", 1, "Fișe p.23"),
 G("Penicilină", "Penicilina se obține din:", ["drojdia de vin", "mucegaiul verde-albăstrui", "rugina grâului", "lichenul renului"], 1,
   "Penicillium (ascomicet saprofit) produce penicilina.", {0: "M16", 2: "M16", 3: "M16"}, "C", 1, "Fișe p.23"),
 G("Mixotrofie", "Nutriția în care două organisme se ajută reciproc se numește:", ["saprofită", "parazită", "simbiontă", "autotrofă"], 2,
   "Simbioza = mutualism.", {0: "M16", 1: "M16", 3: "M16"}, "C", 1, "Fișe p.23"),
 G("Rol ecologic", "Bacteriile saprofite au rol în:", ["producerea de substanțe organice din CO2", "reciclarea carbonului, azotului, fosforului", "fotosinteză", "producerea oxigenului"], 1,
   "Descompun resturile organice și asigură circuitul materiei.", {0: "M16", 2: "M16", 3: "M16"}, "U", 2, "Fișe p.16, 23"),
],

af=[
 AF("Torțel", "Torțelul (Cuscuta) este o plantă parazită.", True, None, "Extrage substanțe organice cu haustori."),
 AF("Licheni", "Lichenii sunt formați dintr-o algă și o bacterie.", False, "Lichenii sunt formați dintr-o algă și o ciupercă.", "Simbioză algă (sau cianobacterie) + ciupercă.", "M16"),
 AF("Saprofite", "Ciupercile saprofite se hrănesc pe seama organismelor vii.", False, "Ciupercile parazite se hrănesc pe seama organismelor vii.", "Saprofitele folosesc substanțe organice dizolvate din resturi.", "M16"),
],

cp=[
 CP("Simbioză", "Relația dintre două organisme bazată pe ajutor reciproc se numește ............ sau ............ .", ["simbioză", "mutualism"]),
 CP("Plante parazite", "Plantele parazite își extrag substanțele organice din vasele ............ ale gazdei cu ajutorul ............ .", ["liberiene", "haustorilor"]),
],

ex=[
 EX("Tipuri de nutriție", "Dați două exemple de tipuri de nutriție heterotrofă; scrieți câte un exemplu de organism.",
    [("saprofită", "drojdia de bere / mucegaiul comun"), ("parazită", "rugina grâului / torțelul"), ("simbiontă", "lichenii")]),
],

st=[
 ST("Nutriție parazită", "III.1.b", "Explicați cum se hrănește torțelul (Cuscuta).",
    "Torțelul este o plantă parazită care și-a pierdut clorofila; prin haustori pătrunde în vasele liberiene ale gazdei și extrage substanțele organice.",
    ["parazit fără clorofilă", "haustori", "vase liberiene ale gazdei"], "U", 2),
],

en=[
 EN("Nutriție", "Construiți patru enunțuri afirmative, câte două pentru fiecare conținut: nutriția saprofită; lichenii.",
    ["Nutriția saprofită", "Lichenii"],
    ["Nutriția saprofită este caracteristică unor bacterii și ciuperci.", "Saprofitele descompun resturile organice și asigură circuitul materiei.",
     "Lichenii sunt asocieri între o algă și o ciupercă.", "Lichenii sunt un exemplu de simbioză."]),
],

me=[
 ME("Heterotrofia", "Nutriția heterotrofă", ["saprofit", "parazit", "simbioză", "ciupercă", "substanțe organice", "gazdă"],
    "Nutriția heterotrofă poate fi saprofită, parazită sau simbiontă. Saprofitele iau substanțe organice din resturi, iar paraziții le iau de la o gazdă vie. Ciuperca și alga din licheni trăiesc în simbioză."),
],

gl=[
 ("heterotrofie", "Obținerea carbonului din substanțe organice produse de alte organisme."),
 ("saprofitism", "Hrănire pe resturi organice, cu substanțe dizolvate."),
 ("parazitism", "Hrănire pe seama unui organism viu (gazdă), pe care îl îmbolnăvește."),
 ("simbioză (mutualism)", "Relație între două organisme bazată pe ajutor reciproc."),
 ("haustor", "Prelungire a plantelor parazite care pătrunde în vasele gazdei."),
 ("fermentație acetică", "Transformarea alcoolului etilic în acid acetic, de către bacterii acetice (proces aerob)."),
],

cd=[
 ("Care sunt tipurile de nutriție heterotrofă?", "Saprofită, parazită, mixotrofă, simbiontă."),
 ("Exemple de ciuperci parazite pe plante?", "Rugina grâului, mana viței de vie, cornul secarei, tăciunele porumbului."),
 ("Exemple de plante parazite?", "Torțelul (Cuscuta), lupoaia."),
 ("Ce sunt lichenii?", "Simbioză între o algă (sau cianobacterie) și o ciupercă."),
],

cmp=[
 dict(title="Tipuri de nutriție heterotrofă", cols=["Tip", "Sursă de hrană", "Exemple"],
      rows=[["Saprofită", "resturi organice (substanțe dizolvate)", "bacterii saprofite, drojdii, mucegai"], ["Parazită", "organism viu (gazdă)", "rugina grâului, torțel"], ["Simbiontă", "ajutor reciproc", "licheni, micorize"]]),
],
)
