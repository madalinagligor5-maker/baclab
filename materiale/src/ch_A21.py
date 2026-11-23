from lib import *

CH = dict(
meta=dict(id="A21", title="Reproducerea la om și bolile cu transmitere sexuală", module="A",
  sources=["Fișe sinteză 2012, p.44–46"],
  concepts=["fecundație și meioză – două momente ale ciclului", "spermatogeneza (testicule) și ovogeneza (ovare)", "sistem reproducător masculin și feminin", "boli cu transmitere sexuală: sifilis, gonoree, candidoză, SIDA – agent, manifestări, prevenire"],
  bac_slots=["I.C", "I.D", "II.A", "III.1"], prereq=["A02", "A05"], big_ideas=["informație genetică", "homeostazie"]),

gr=[
 G("Spermatozoid", "În cazul mamiferelor, spermatozoidul:", ["este o celulă diploidă/2n", "participă la procesul de fecundație", "reprezintă gonada masculină", "se formează în canalele deferente"], 1,
   "Spermatozoidul este gamet haploid, format prin meioză în tuburile seminifere ale testiculului.", {0: "M43", 2: "M38", 3: "M38"}, "C", 2, "Simulare 2026 I.C.3"),
 G("Testicule", "Testiculele:", ["sunt situate în cavitatea abdominală", "sunt glande mixte situate în scrot", "produc ovule", "sunt glande anexe"], 1,
   "Rol exocrin (spermatozoizi) și endocrin (hormon sexual masculin); conțin tuburi seminifere.", {0: "M38", 2: "M38", 3: "M38"}, "C", 1, "Fișe p.45"),
 G("Prostata", "Prostata:", ["este traversată de uretră și produce un lichid care hrănește spermatozoizii", "produce spermatozoizi", "este gonadă", "se află în scrot"], 0,
   "Glandă anexă, localizată în partea inferioară a vezicii urinare, lângă rect.", {1: "M38", 2: "M38", 3: "M38"}, "C", 2, "Fișe p.45"),
 G("Ovare", "Ovarele:", ["produc spermatozoizi", "sunt glande mixte care conțin foliculi ovarieni", "se află în scrot", "sunt căi genitale"], 1,
   "Rol exocrin (ovule) și endocrin (hormoni sexuali feminini); expulzia ovulului = ovulație.", {0: "M38", 2: "M38", 3: "M38"}, "C", 1, "Fișe p.45"),
 G("Uterul", "Uterul are rolul de:", ["a produce ovule", "implantare a embrionului și dezvoltare a fătului", "a conduce spermatozoizii", "a secreta hormoni masculini"], 1,
   "Elimină fătul în timpul nașterii.", {0: "M38", 2: "M38", 3: "M38"}, "C", 1, "Fișe p.45"),
 G("Uretra masculină", "Uretra la bărbat elimină:", ["numai urina", "urina și sperma", "numai sperma", "bila"], 1,
   "Rol dublu: micțiune și ejaculare.", {0: "M38", 2: "M38", 3: "M38"}, "C", 1, "Fișe p.45"),
 G("Sifilis", "Sifilisul este produs de:", ["o ciupercă (Candida)", "o bacterie spirochetă", "un virus (HIV)", "un protozoar"], 1,
   "Evoluează în trei stadii: primar (șancru), secundar (rozeola), terțiar (inimă și creier afectate).", {0: "M39", 2: "M39", 3: "M39"}, "C", 1, "Fișe p.46"),
 G("Gonoreea", "Agentul cauzal al gonoreei este:", ["un virus", "gonococul", "o ciupercă", "un protozoar"], 1,
   "Manifestări: usturimi uretrale, scurgeri galben-verzui; complicații: sterilitate.", {0: "M39", 2: "M39", 3: "M39"}, "C", 1, "Subiect bac 2025 I.D.1; fișe p.46"),
 G("Candidoza", "Candidoza este cauzată de:", ["o bacterie", "ciuperca Candida albicans", "un virus", "un parazit sanguin"], 1,
   "Manifestări: scurgere vaginală albicioasă, mâncărime, usturime la urinare.", {0: "M39", 2: "M39", 3: "M39"}, "C", 1, "Fișe p.46"),
 G("SIDA", "SIDA este produsă de:", ["bacteria spirochetă", "virusul HIV", "ciuperca Candida", "gonococ"], 1,
   "Determină depresie imună majoră; prevenire: igienă, evitarea utilizării în comun a seringilor, controlul donatorilor de sânge.", {0: "M39", 2: "M39", 3: "M39"}, "C", 1, "Fișe p.46"),
 G("Gametogeneză", "Spermatogeneza are loc în:", ["ovare", "testicule", "prostată", "uter"], 1,
   "Ovogeneza – în ovare; ambele prin meioză.", {0: "M38", 2: "M38", 3: "M38"}, "C", 1, "Fișe p.44"),
 G("Fecundația", "Fecundația:", ["înjumătățește numărul de cromozomi", "dublează numărul de cromozomi prin contopirea a două celule haploide", "are loc în prostată", "formează gameții"], 1,
   "Meioza înjumătățește numărul de cromozomi la formarea gameților.", {0: "M43", 2: "M38", 3: "M43"}, "U", 2, "Fișe p.44"),
],

af=[
 AF("Gonoreea", "Gonoreea este o boală cu transmitere sexuală cauzată de infecția cu o ciupercă.", False, "Gonoreea este o boală cu transmitere sexuală cauzată de infecția cu o bacterie (gonococ).", "Candidoza este cauzată de o ciupercă.", "M39", src="Subiect bac 2025 I.D.1"),
 AF("Rinichi", "Rinichii sunt componente ale sistemului excretor al mamiferelor.", True, None, "", None, "C", 1, "Subiect bac 2025 I.D.3"),
 AF("SIDA", "SIDA este produsă de un virus.", True, None, "HIV."),
 AF("Ovulație", "Expulzia ovulului din ovar se numește fecundație.", False, "Expulzia ovulului din ovar se numește ovulație.", "Fecundația este contopirea gameților.", "M38"),
 AF("Testicul", "Testiculele sunt glande mixte.", True, None, "Exocrin și endocrin."),
],

cp=[
 CP("Gametogeneză", "Formarea spermatozoizilor se numește ............, iar formarea ovulelor se numește ............ .", ["spermatogeneză", "ovogeneză"]),
 CP("BTS", "Sifilisul este produs de o ............, iar candidoza de o ............ .", ["bacterie (spirochetă)", "ciupercă (Candida albicans)"]),
],

ex=[
 EX("Organe genitale feminine", "Dați două exemple de organe ale sistemului reproducător feminin; scrieți câte un rol.",
    [("ovarul", "produce ovule și hormoni sexuali feminini"), ("uterul", "implantarea embrionului și dezvoltarea fătului"), ("trompele uterine", "conduc ovulul")]),
 EX("BTS", "Dați două exemple de boli cu transmitere sexuală; scrieți câte un agent cauzal.",
    [("sifilis", "o bacterie spirochetă"), ("gonoree", "gonococul"), ("candidoză", "Candida albicans (ciupercă)"), ("SIDA", "virusul HIV")]),
],

st=[
 ST("BTS", "II.A.a", "Numiți o boală cu transmitere sexuală, precizând: o cauză, o manifestare, două măsuri de prevenire.",
    "Exemplu – gonoreea: cauză – gonococul (bacterie); manifestare – usturimi uretrale, scurgere galben-verzuie; prevenire – folosirea prezervativului, evitarea partenerilor multipli/necunoscuți.",
    ["boală", "cauză", "manifestare", "două măsuri"], "C", 2, "Fișe p.46"),
 ST("Meioză și fecundație", "III.2.b", "Explicați de ce numărul de cromozomi se păstrează constant la om de la o generație la alta.",
    "Prin meioză gameții devin haploizi (n = 23), iar prin fecundație zigotul redevine diploid (2n = 46).",
    ["meioza → n", "fecundația → 2n"], "U", 2, "Fișe p.44"),
],

en=[
 EN("Sistem reproducător", "Construiți patru enunțuri afirmative, câte două pentru fiecare conținut: testiculul; uterul.",
    ["Testiculul", "Uterul"],
    ["Testiculul este o glandă mixtă situată în scrot.", "Tuburile seminifere ale testiculului produc spermatozoizi prin meioză.",
     "Uterul este locul de implantare a embrionului.", "Uterul elimină fătul în timpul nașterii."]),
],

me=[
 ME("BTS", "Bolile cu transmitere sexuală", ["sifilis", "gonoree", "candidoză", "HIV", "prevenire", "agent patogen"],
    "Bolile cu transmitere sexuală sunt produse de agenți patogeni diferiți: sifilisul de o bacterie spirochetă, gonoreea de gonococ, candidoza de o ciupercă, iar SIDA de virusul HIV. Prevenirea se face prin evitarea partenerilor multipli și prin igienă."),
],

gl=[
 ("spermatogeneză", "Formarea spermatozoizilor prin meioză, în testicule."),
 ("ovogeneză", "Formarea ovulelor prin meioză, în ovare."),
 ("tub seminifer", "Structură din testicul unde se formează spermatozoizii."),
 ("epididim", "Cale genitală masculină."),
 ("prostată", "Glandă anexă care hrănește spermatozoizii; traversată de uretră."),
 ("folicul ovarian", "Structură ovariană care formează ovule."),
 ("ovulație", "Expulzia ovulului din ovar."),
 ("trompă uterină", "Cale genitală feminină."),
 ("uter", "Implantarea embrionului, dezvoltarea fătului, nașterea."),
 ("BTS", "Boală cu transmitere sexuală: sifilis, gonoree, candidoză, SIDA."),
 ("șancru sifilitic", "Rană în zona genitală în sifilisul primar."),
 ("HIV", "Virus care produce SIDA."),
],

cd=[
 ("Unde se formează gameții masculini / feminini?", "Testicule (tuburi seminifere) / ovare (foliculi)."),
 ("Agenții BTS?", "Sifilis – spirochetă; gonoree – gonococ; candidoză – Candida; SIDA – HIV."),
 ("Prevenirea BTS?", "Evitarea partenerilor multipli/necunoscuți, prezervativ, seringi de unică folosință, controlul donatorilor, igienă."),
 ("Rolul uterului?", "Implantare, dezvoltarea fătului, naștere."),
],

cmp=[
 dict(title="Boli cu transmitere sexuală", cols=["Boală", "Agent", "Tip agent", "Manifestări"],
      rows=[["Sifilis", "spirochetă", "bacterie", "șancru, rozeolă, afectare cardiacă și cerebrală"], ["Gonoree", "gonococ", "bacterie", "usturimi, scurgeri galben-verzui, sterilitate"],
            ["Candidoză", "Candida albicans", "ciupercă", "scurgere albicioasă, mâncărime"], ["SIDA", "HIV", "virus", "depresie imună, infecții grave, tumori"]]),
],
)
