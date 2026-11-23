from lib import *

CH = dict(
meta=dict(id="A05", title="Țesuturi animale", module="A",
  sources=["Fișe sinteză 2012, p.62–64"],
  concepts=["epitelial: de acoperire, glandular (exocrin, endocrin, mixt), senzorial", "conjunctiv: moale (lax, adipos, reticulat), semidur (cartilaginos), dur (osos compact/spongios), sângele",
            "muscular: striat scheletic, neted, striat cardiac", "nervos: neuron, celule gliale"],
  bac_slots=["I.C", "I.D", "III.2.a", "III.2.c"], prereq=["A01"], big_ideas=["structură–funcție"]),

gr=[
 G("Epitelii", "Țesutul epitelial:", ["este bogat vascularizat", "acoperă corpul și căptușește organele cavitare", "conține fibre de colagen în substanța fundamentală", "are contracții voluntare"], 1,
   "Epiteliul este nevascularizat; formează epiderma și mucoasele și are rol de protecție, secreție sau recepție.", {0: "M14", 2: "M14", 3: "M14"}, "C", 1, "Fișe p.62"),
 G("Glande", "Glanda endocrină este:", ["glanda sebacee", "tiroida", "glanda salivară", "glanda sudoripară"], 1,
   "Glandele endocrine (tiroida, hipofiza, suprarenalele) varsă hormonii direct în sânge; sebacee, sudoripare, salivare sunt exocrine.", {0: "M14", 2: "M14", 3: "M14"}, "C", 1, "Fișe p.62"),
 G("Glande mixte", "Sunt glande mixte:", ["hipofiza și tiroida", "pancreasul și gonadele", "parotidele și ficatul", "suprarenalele și epifiza"], 1,
   "Pancreasul și gonadele (testicul, ovar) au și secreție externă, și internă.", {0: "M14", 2: "M14", 3: "M14"}, "C", 2, "Fișe p.62"),
 G("Țesut conjunctiv", "Țesutul adipos se găsește:", ["în miocard", "în hipoderm", "în mucoasa gastrică", "în cortexul cerebral"], 1,
   "Țesutul adipos este un conjunctiv moale din hipoderm, bogat în adipocite.", {0: "M14", 2: "M14", 3: "M14"}, "C", 1, "Fișe p.38, 63"),
 G("Țesut cartilaginos", "Țesutul conjunctiv semidur (cartilaginos):", ["este vascularizat", "este nevascularizat", "este țesutul osos compact", "conține fibre musculare"], 1,
   "Cartilajul (costal, laringe, trahee, pavilionul urechii) este nevascularizat.", {0: "M14", 2: "M14", 3: "M14"}, "C", 2, "Fișe p.63"),
 G("Țesut osos", "Țesutul osos spongios se află:", ["în diafiza oaselor lungi", "în epifizele oaselor lungi", "în cartilajele costale", "în piele"], 1,
   "Spongiosul (lamele dezordonate) se află în epifizele oaselor lungi și în interiorul oaselor scurte și late; compactul în diafiză.", {0: "M14", 2: "M14", 3: "M14"}, "C", 2, "Fișe p.63"),
 G("Sânge", "Sângele este considerat un țesut:", ["epitelial", "muscular", "conjunctiv", "nervos"], 2,
   "Sângele este un țesut conjunctiv fluid.", {0: "M14", 1: "M14", 3: "M14"}, "C", 1, "Fișe p.63"),
 G("Țesut muscular neted", "Țesutul muscular neted:", ["are contracții rapide, voluntare", "se află în pereții organelor interne și ai vaselor", "formează miocardul", "se fixează pe oase"], 1,
   "Mușchiul neted are contracții lente, involuntare; scheletic = striat, voluntar; cardiac = miocard.", {0: "M14", 2: "M14", 3: "M14"}, "C", 1, "Fișe p.63–64"),
 G("Țesut cardiac", "Miocardul este alcătuit din țesut:", ["muscular neted", "muscular striat de tip cardiac", "conjunctiv lax", "epitelial glandular"], 1,
   "Miocardul este țesut muscular striat de tip cardiac.", {0: "M14", 2: "M14", 3: "M14"}, "C", 1, "Fișe p.52"),
 G("Neuron", "Axonul neuronului:", ["conduce impulsul de la periferie spre corpul celular", "este scurt și ramificat", "conduce impulsul de la centru spre periferie", "lipsește la neuronul motor"], 2,
   "Axonul este prelungire unică, lungă, eferentă (centrifugă); dendritele sunt scurte, ramificate, aferente (centripete).", {0: "M14", 1: "M14", 3: "M14"}, "C", 2, "Fișe p.64"),
 G("Celule gliale", "Celulele gliale:", ["nu se pot divide", "sunt mai puține decât neuronii", "au rol trofic și de susținere", "conduc impulsul nervos prin axon"], 2,
   "Nevrogliile sunt de ~10 ori mai multe decât neuronii, se pot divide, hrănesc, susțin, izolează; celulele Schwann secretă mielina.", {0: "M14", 1: "M14", 3: "M14"}, "C", 2, "Fișe p.64"),
 G("Fibre musculare scheletice", "Țesutul muscular striat scheletic are contracții:", ["lente, involuntare", "rapide, voluntare", "numai involuntare", "ritmice, involuntare, în miocard"], 1,
   "Mușchii scheletici se contractă rapid și voluntar.", {0: "M14", 2: "M14", 3: "M14"}, "C", 1, "Fișe p.63"),
],

af=[
 AF("Epitelii", "Țesutul epitelial este bogat vascularizat.", False, "Țesutul epitelial este nevascularizat.", "Se hrănește prin difuzie din țesutul conjunctiv.", "M14"),
 AF("Cartilaj", "Cartilajul este un țesut conjunctiv semidur.", True, None, "Localizare: laringe, trahee, pavilion."),
 AF("Neuroni", "Neuronii au capacitate mare de diviziune.", False, "Celulele gliale au capacitate de diviziune.", "Neuronii nu se divid.", "M14"),
 AF("Mușchi", "Țesutul muscular neted are contracții voluntare.", False, "Țesutul muscular neted are contracții involuntare.", "Voluntare sunt contracțiile mușchilor striați scheletici.", "M14"),
 AF("Hematii", "Eritrocitele sunt celule anucleate la maturitate.", True, None, "Conțin hemoglobină."),
],

cp=[
 CP("Țesut nervos", "Țesutul nervos este format din ............ și celule ............ .", ["neuroni", "gliale"]),
 CP("Mușchi", "Țesutul muscular ............ intră în alcătuirea peretelui inimii, formând ............ .", ["striat de tip cardiac", "miocardul"]),
],

ex=[
 EX("Țesuturi epiteliale", "Dați două exemple de țesuturi epiteliale animale; scrieți câte un rol.",
    [("epiteliul de acoperire", "protecție (epiderma, mucoase)"), ("epiteliul glandular", "secreție"), ("epiteliul senzorial", "recepția stimulilor")]),
 EX("Țesuturi conjunctive", "Dați două exemple de țesuturi conjunctive; scrieți câte o localizare.",
    [("țesutul osos", "oasele"), ("țesutul cartilaginos", "laringe, trahee, pavilionul urechii"), ("țesutul adipos", "hipoderm")]),
],

st=[
 ST("Țesuturi epiteliale", "III.2.a", "Precizați trei tipuri de țesuturi animale epiteliale.",
    "De acoperire, glandular, senzorial.", ["trei tipuri: acoperire, glandular, senzorial"], "C", 1, "Subiect bac 2025 III.2.a"),
 ST("Glande", "III.2.b", "Explicați de ce pancreasul este o glandă mixtă.",
    "Pancreasul are secreție exocrină (suc pancreatic vărsat în duoden) și secreție endocrină (hormoni vărsați în sânge).",
    ["exocrin: suc pancreatic în duoden", "endocrin: hormoni în sânge"], "U", 2),
],

en=[
 EN("Țesuturi", "Construiți patru enunțuri afirmative, câte două pentru fiecare conținut: țesutul osos; neuronul.",
    ["Țesutul osos", "Neuronul"],
    ["Țesutul osos este un țesut conjunctiv dur.", "Țesutul osos compact se află în diafiza oaselor lungi.",
     "Neuronul este unitatea structurală și funcțională a sistemului nervos.", "Axonul conduce impulsul nervos de la centru spre periferie."]),
],

me=[
 ME("Țesutul muscular", "Țesutul muscular", ["fibră musculară", "contracție", "striat", "neted", "miocard", "voluntar"],
    "Țesutul muscular este format din fibre musculare capabile de contracție. Mușchii scheletici sunt striați și se contractă voluntar, iar mușchii netezi din organele interne au contracții involuntare. Țesutul striat de tip cardiac formează miocardul."),
 ME("Țesutul nervos", "Țesutul nervos", ["neuron", "dendrite", "axon", "sinapsă", "celule gliale", "impuls nervos"],
    "Țesutul nervos este format din neuroni și celule gliale. Neuronul are dendrite, care conduc impulsul nervos spre corpul celular, și un axon, care îl conduce spre periferie. Legătura dintre neuroni se numește sinapsă, iar celulele gliale hrănesc și susțin neuronii."),
],

gl=[
 ("epiteliu", "Țesut nevascularizat de acoperire, secreție sau recepție."),
 ("glandă exocrină", "Varsă secreția printr-un canal (sebacee, sudoripare, salivare)."),
 ("glandă endocrină", "Varsă hormonii direct în sânge (tiroida, hipofiza)."),
 ("glandă mixtă", "Secreție externă și internă: pancreas, gonade."),
 ("țesut conjunctiv", "Țesut cu celule, fibre și substanță fundamentală; legătură, susținere."),
 ("colagen", "Tip de fibră a țesutului conjunctiv."),
 ("țesut osos compact", "Lamele osoase concentrice; diafiza oaselor lungi."),
 ("țesut osos spongios", "Lamele dezordonate; epifize, oase scurte și late."),
 ("fibră musculară", "Celulă alungită, contractilă."),
 ("neuron", "Unitatea structurală și funcțională a sistemului nervos; fără diviziune."),
 ("dendrită", "Prelungire scurtă, ramificată; conduce impulsul spre corpul celular."),
 ("axon", "Prelungire lungă, unică; conduce impulsul de la corpul celular spre periferie."),
 ("sinapsă", "Legătura morfofuncțională dintre neuroni sau între neuron și celula inervată."),
 ("celule gliale", "Celule ale nevrogliei; nutriție, susținere, izolare, mielină (Schwann); se divid."),
],

cd=[
 ("Care sunt cele patru tipuri de țesuturi animale?", "Epitelial, conjunctiv, muscular, nervos."),
 ("Care sunt tipurile de țesut muscular?", "Striat scheletic, neted, striat cardiac."),
 ("Care țesuturi conjunctive sunt moi / semidure / dure?", "Moi: lax, adipos, reticulat. Semidur: cartilaginos. Dur: osos."),
 ("Ce țesut formează miocardul?", "Muscular striat de tip cardiac."),
 ("Din ce este alcătuit țesutul nervos?", "Neuroni și celule gliale."),
],

cmp=[
 dict(title="Tipuri de țesut muscular", cols=["Tip", "Localizare", "Contracție"],
      rows=[["Striat scheletic", "mușchii scheletici", "rapidă, voluntară"], ["Neted", "pereții organelor interne și ai vaselor", "lentă, involuntară"], ["Striat cardiac", "miocard", "involuntară, ritmică"]]),
],
)
