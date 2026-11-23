from lib import *

CH = dict(
meta=dict(id="A13", title="Sistemul circulator: inima, vasele, circuitele; boli", module="A",
  sources=["Fișe sinteză 2012, p.52–54"],
  concepts=["inima: localizare, pericard, epicard–miocard–endocard, 4 camere", "valvule: tricuspidă (dreapta), bicuspidă (stânga), semilunare", "artere, vene, capilare", "circulația dublă, completă, închisă; marea și mica circulație",
            "boli: varice, ateroscleroză, hipertensiune arterială, infarct miocardic, accident vascular cerebral"],
  bac_slots=["I.C", "I.D", "II.A.a", "II.A.b"], prereq=["A05", "A12"], big_ideas=["structură–funcție", "homeostazie"]),

gr=[
 G("Valvule", "Orificiul atrioventricular drept prezintă:", ["valvula bicuspidă", "valvula tricuspidă", "valvule semilunare", "nicio valvulă"], 1,
   "Dreapta: tricuspidă; stânga: bicuspidă (mitrală). Semilunarele sunt la originea arterelor.", {0: "M24", 2: "M24", 3: "M24"}, "C", 1, "Fișe p.52"),
 G("Artera pulmonară", "Artera pulmonară pleacă din:", ["atriul stâng", "ventriculul drept", "ventriculul stâng", "atriul drept"], 1,
   "Transportă sânge neoxigenat spre plămâni.", {0: "M24", 2: "M24", 3: "M24"}, "C", 1, "Fișe p.52"),
 G("Aorta", "Artera aortă:", ["pleacă din ventriculul stâng cu sânge oxigenat", "pleacă din ventriculul drept", "aduce sânge la atriul stâng", "transportă sânge neoxigenat spre plămâni"], 0,
   "Formează cârja aortică orientată spre stânga și distribuie sângele la țesuturi.", {1: "M24", 2: "M24", 3: "M24"}, "C", 1, "Fișe p.52–53"),
 G("Venele pulmonare", "Venele pulmonare se deschid în:", ["atriul drept", "atriul stâng", "ventriculul drept", "ventriculul stâng"], 1,
   "Sunt patru, aduc sânge oxigenat de la plămâni.", {0: "M24", 2: "M24", 3: "M24"}, "C", 1, "Fișe p.52"),
 G("Venele cave", "Venele cave se deschid în:", ["atriul stâng", "atriul drept", "ventriculul stâng", "artera pulmonară"], 1,
   "Aduc sânge încărcat cu CO2 de la țesuturi.", {0: "M24", 2: "M24", 3: "M24"}, "C", 1, "Fișe p.52"),
 G("Mica circulație", "Mica circulație (pulmonară) începe în:", ["ventriculul stâng", "ventriculul drept", "atriul drept", "atriul stâng"], 1,
   "Ventriculul drept → artera pulmonară → plămâni → 4 vene pulmonare → atriul stâng; are rol de oxigenare.", {0: "M25", 2: "M25", 3: "M25"}, "C", 1, "Fișe p.53"),
 G("Marea circulație", "Marea circulație se termină în:", ["atriul stâng", "atriul drept", "ventriculul drept", "ventriculul stâng"], 1,
   "Ventricul stâng → aortă → țesuturi → vene cave → atriul drept; rol de nutriție.", {0: "M25", 2: "M25", 3: "M25"}, "C", 1, "Fișe p.53"),
 G("Valvule semilunare", "Valvulele semilunare:", ["împiedică întoarcerea sângelui din artere în ventricule", "separă atriile între ele", "se află între atriu și ventricul", "sunt prezente numai în vene mici"], 0,
   "Se găsesc la originea aortei și a arterei pulmonare.", {1: "M24", 2: "M24", 3: "M24"}, "U", 2, "Fișe p.52"),
 G("Pereții inimii", "Peretele inimii este format din:", ["epicard, miocard, endocard", "mucoasă, submucoasă, seroasă", "epiderm, derm, hipoderm", "sclerotică, coroidă, retină"], 0,
   "Miocardul este țesut muscular striat de tip cardiac; endocardul se continuă cu endoteliul vaselor.", {1: "M24", 2: "M24", 3: "M24"}, "C", 1, "Fișe p.52"),
 G("Capilare", "Schimbul de substanțe dintre sânge și celule are loc la nivelul:", ["arterelor", "capilarelor", "venelor cave", "valvulelor"], 1,
   "Capilarele au perete subțire, un epiteliu unistratificat pavimentos (endoteliu).", {0: "M24", 2: "M24", 3: "M24"}, "C", 1, "Fișe p.53"),
 G("Caracteristici ale circulației", "Circulația sângelui la mamifere este:", ["simplă, incompletă, deschisă", "dublă, completă, închisă", "dublă, incompletă, deschisă", "simplă, completă, închisă"], 1,
   "Două circuite, sânge oxigenat nemestecat cu cel neoxigenat, sânge în vase.", {0: "M25", 2: "M25", 3: "M25"}, "C", 2, "Fișe p.53"),
 G("Ateroscleroza", "Ateroscleroza este:", ["infiltrarea pereților arterelor mari cu lipide și colesterol", "dilatarea venelor superficiale", "inflamația alveolelor", "distrugerea tecii de mielină"], 0,
   "Scade elasticitatea vaselor și calibrul lor; poate duce la hipertensiune.", {1: "M26", 2: "M26", 3: "M26"}, "C", 2, "Fișe p.54"),
 G("Varice", "Varicele sunt:", ["dilatări ale venelor superficiale ale membrelor inferioare", "depuneri de colesterol în artere", "necroza miocardului", "paralizii"], 0,
   "Cauză: stat prelungit în picioare; prevenire: bandaje speciale, mers în ritm alert.", {1: "M26", 2: "M26", 3: "M26"}, "C", 1, "Fișe p.53–54"),
 G("Infarct", "Infarctul miocardic constă în:", ["dilatarea venelor", "astuparea vaselor coronare cu un cheag și necrozarea miocardului", "inflamația pericardului", "îngustarea bronhiilor"], 1,
   "Manifestare: dureri mari în regiunea inimii (angină pectorală).", {0: "M26", 2: "M26", 3: "M26"}, "C", 2, "Fișe p.54"),
],

af=[
 AF("Artere", "Toate arterele transportă sânge oxigenat.", False, "Artera aortă transportă sânge oxigenat, iar artera pulmonară transportă sânge neoxigenat.", "Arterele conduc sângele de la inimă.", "M24"),
 AF("Valvule", "Valvula bicuspidă se află între atriul stâng și ventriculul stâng.", True, None, ""),
 AF("Venele pulmonare", "Venele pulmonare aduc sânge neoxigenat la inimă.", False, "Venele pulmonare aduc sânge oxigenat la inimă.", "Venele cave aduc sânge neoxigenat.", "M24"),
 AF("Circulația", "Circulația sângelui la mamifere este închisă.", True, None, "Sângele nu iese din vase."),
 AF("Inima", "Atriul drept comunică direct cu atriul stâng.", False, "Atriul drept comunică cu ventriculul drept prin orificiul atrioventricular.", "Atriile nu comunică între ele; sensul de comunicare atriu–ventricul este unic.", "M24"),
],

cp=[
 CP("Inimă", "Inima are patru camere: două ............ și două ............ .", ["atrii", "ventricule"]),
 CP("Circuite", "Marea circulație începe în ventriculul ............ și se termină în atriul ............ .", ["stâng", "drept"]),
],

ex=[
 EX("Vase de sânge", "Dați două exemple de vase de sânge; scrieți câte un rol.",
    [("artera aortă", "conduce sânge oxigenat de la ventriculul stâng la țesuturi"), ("capilarul", "schimbul de substanțe dintre sânge și celule"), ("vena cavă", "aduce sânge neoxigenat în atriul drept")]),
 EX("Boli circulatorii", "Dați două exemple de boli ale sistemului circulator la om; scrieți câte o manifestare.",
    [("varice", "dilatarea venelor superficiale ale membrelor inferioare"), ("hipertensiunea arterială", "amețeli, dureri de cap, palpitații"), ("ateroscleroza", "scăderea elasticității și a calibrului vaselor")]),
],

st=[
 ST("Valvule semilunare", "II.A.b", "Explicați rolul valvulelor semilunare/sigmoide.",
    "Valvulele semilunare se află la originea aortei și a arterei pulmonare și împiedică întoarcerea sângelui din artere în ventricule, asigurând circulația într-un singur sens.",
    ["localizare: la originea aortei și arterei pulmonare", "împiedică refluxul sângelui în ventricule"], "U", 2, "Subiect bac 2025 II.A.b"),
 ST("Boli circulatorii", "II.A.a", "Numiți o boală a sistemului circulator la om (la alegere) precizând: o cauză, o manifestare, două măsuri de prevenire.",
    "Exemplu – ateroscleroza: cauză – excesul de alimente cu grăsimi animale, sedentarismul, fumatul; manifestare – scăderea elasticității și a calibrului vaselor, hipertensiune; prevenire – alimentație echilibrată, evitarea fumatului și a sedentarismului.",
    ["boală corectă", "o cauză", "o manifestare", "două măsuri de prevenire"], "C", 2, "Simulare 2026 II.A.a"),
 ST("Inima", "II.A.b", "Explicați de ce ventriculul stâng are pereți mai groși decât atriile.",
    "Ventriculele au pereți mai îngroșați, iar cel stâng pompează sângele în marea circulație, la țesuturi, deci lucrează cu forță mai mare; atriile au pereți subțiri și golesc sângele în ventricule.",
    ["ventricule cu pereți îngroșați", "ventriculul stâng → marea circulație", "atrii cu pereți subțiri"], "U", 2, "Fișe p.52"),
],

en=[
 EN("Inimă", "Construiți patru enunțuri afirmative, câte două pentru fiecare conținut: inima; capilarele.",
    ["Inima", "Capilarele"],
    ["Inima este localizată în cutia toracică, între cei doi plămâni.", "Peretele inimii este format din epicard, miocard și endocard.",
     "Capilarele sunt cele mai mici vase de sânge.", "Peretele capilarelor este un endoteliu unistratificat, pavimentos."]),
],

me=[
 ME("Circulația sângelui", "Circulația sângelui", ["inimă", "ventricul", "atriu", "artere", "vene", "capilare"],
    "Sângele este pompat de inimă, un organ cu patru camere: două atrii și două ventricule. Arterele conduc sângele de la inimă, iar venele îl aduc înapoi. La nivelul capilarelor au loc schimburile dintre sânge și celule."),
],

gl=[
 ("pericard", "Membrană care acoperă inima."),
 ("miocard", "Mușchiul inimii; țesut muscular striat cardiac."),
 ("endocard", "Foița internă a peretelui inimii."),
 ("atriu", "Cameră cardiacă de la baza inimii, cu pereți subțiri."),
 ("ventricul", "Cameră cardiacă de la vârf, cu pereți groși."),
 ("valvulă tricuspidă", "Între atriul drept și ventriculul drept."),
 ("valvulă bicuspidă", "Între atriul stâng și ventriculul stâng."),
 ("valvule semilunare", "La originea aortei și a arterei pulmonare; împiedică refluxul."),
 ("arteră", "Vas prin care sângele pleacă de la inimă."),
 ("venă", "Vas prin care sângele se întoarce la inimă."),
 ("capilar", "Cel mai mic vas; schimb de substanțe."),
 ("marea circulație", "Circulația sistemică: ventricul stâng → aortă → țesuturi → vene cave → atriu drept."),
 ("mica circulație", "Circulația pulmonară: ventricul drept → artera pulmonară → plămâni → vene pulmonare → atriu stâng."),
 ("ateroscleroză", "Infiltrarea arterelor cu lipide și colesterol."),
 ("hipertensiune arterială", "Creșterea presiunii sângelui în artere peste valorile normale."),
 ("infarct miocardic", "Necroza miocardului prin astuparea vaselor coronare."),
],

cd=[
 ("Traseul marii circulații?", "VS → aortă → țesuturi → vene cave → AD."),
 ("Traseul micii circulații?", "VD → artera pulmonară → plămâni → 4 vene pulmonare → AS."),
 ("Ce valvule are inima?", "Tricuspidă (dreapta), bicuspidă (stânga), semilunare (la originea arterelor)."),
 ("Ce conține artera pulmonară?", "Sânge neoxigenat."),
 ("Ce conțin venele pulmonare?", "Sânge oxigenat."),
 ("Cauze ale hipertensiunii?", "Tutun, alcool, cafea în exces, obezitate, sedentarism, stres, sare."),
],

cmp=[
 dict(title="Marea vs mica circulație", cols=["Criteriu", "Marea circulație", "Mica circulație"],
      rows=[["Începe în", "ventriculul stâng", "ventriculul drept"], ["Prin", "artera aortă", "artera pulmonară"], ["Se termină în", "atriul drept (vene cave)", "atriul stâng (4 vene pulmonare)"], ["Rol", "nutriție", "oxigenare"]]),
],
)
