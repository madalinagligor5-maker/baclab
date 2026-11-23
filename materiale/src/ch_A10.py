from lib import *

CH = dict(
meta=dict(id="A10", title="Sistemul respirator la mamifere; ventilația pulmonară; boli", module="A",
  sources=["Fișe sinteză 2012, p.48–50"],
  concepts=["căi respiratorii extrapulmonare: fose nazale, faringe, laringe, trahee, bronhii", "arbore bronșic, acini, alveole", "plămâni: 2 lobi stâng, 3 lobi drept; pleura (foiță parietală și viscerală)",
            "membrana alveolo-capilară", "ventilația: inspirație (activă) și expirație (pasivă)", "boli: bronșită, laringită, astm bronșic, pneumonie, TBC"],
  bac_slots=["I.C", "I.D", "II.A", "III.1"], prereq=["A05"], big_ideas=["structură–funcție", "homeostazie"]),

gr=[
 G("Pleura", "Plămânii mamiferelor:", ["conțin lobuli alcătuiți din numeroși lobi", "își măresc volumul în timpul expirației", "sunt localizați în cavitatea abdominală", "sunt acoperiți de pleură cu două foițe"], 3,
   "Pleura are foiță parietală (la pereții cavității toracice) și foiță viscerală (aderă la plămân), cu lichid pleural între ele.", {0: "M21", 1: "M20", 2: "M21"}, "C", 2, "Model după subiect bac 2025 I.C.4"),
 G("Inspirație", "În timpul inspirației:", ["diafragmul și mușchii intercostali se relaxează", "volumul plămânilor crește și presiunea intrapulmonară scade", "presiunea intrapulmonară crește", "procesul este pasiv"], 1,
   "Inspirația este activă, cu consum de energie; contracția mușchilor inspiratori mărește diametrele cutiei toracice.", {0: "M20", 2: "M20", 3: "M20"}, "C", 1, "Fișe p.49"),
 G("Expirație", "Expirația liniștită este:", ["activă, cu consum de energie", "pasivă, prin relaxarea mușchilor inspiratori", "provocată de contracția diafragmului", "însoțită de scăderea presiunii intrapulmonare"], 1,
   "La expirație volumul plămânilor scade și presiunea intrapulmonară crește.", {0: "M20", 2: "M20", 3: "M20"}, "C", 1, "Fișe p.49"),
 G("Lobii pulmonari", "Numărul de lobi pulmonari este:", ["plămân drept 2, stâng 3", "plămân drept 3, stâng 2", "ambii câte 3", "ambii câte 2"], 1,
   "Plămânul drept are 3 lobi, cel stâng 2.", {0: "M21", 2: "M21", 3: "M21"}, "C", 1, "Fișe p.49"),
 G("Alveole", "Schimbul de gaze dintre aer și sânge are loc la nivelul:", ["traheei", "alveolelor pulmonare (membrana alveolo-capilară)", "bronhiilor extrapulmonare", "laringelui"], 1,
   "Membrana alveolară + endoteliul capilar formează membrana alveolo-capilară.", {0: "M21", 2: "M21", 3: "M21"}, "C", 1, "Fișe p.48"),
 G("Trahee", "Traheea:", ["este formată din inele cartilaginoase complete", "are inele cartilaginoase incomplete posterior și mucoasă cu cili", "se găsește în cavitatea bucală", "este căptușită cu epiteliu pavimentos unistratificat"], 1,
   "Bronhiile extrapulmonare au inele complete.", {0: "M21", 2: "M21", 3: "M21"}, "C", 2, "Fișe p.48"),
 G("Laringe", "Orificiul dintre coardele vocale se numește:", ["coană", "glotă", "ostiolă", "alveolă"], 1,
   "Mucoasa laringeană formează două perechi de pliuri (coarde vocale) care delimitează glota.", {0: "M21", 2: "M27", 3: "M21"}, "C", 2, "Fișe p.48"),
 G("Presiunea la inspirație", "În timpul inspirației presiunea aerului din plămânii mamiferelor:", ["crește", "scade", "rămâne constantă", "devine egală cu zero"], 1,
   "Scăderea presiunii intrapulmonare față de cea atmosferică permite pătrunderea aerului.", {0: "M20", 2: "M20", 3: "M20"}, "A", 1, "Simulare 2026 I.D.3"),
 G("Boală respiratorie", "Bacilul Koch produce:", ["pneumonia", "tuberculoza (TBC)", "laringita", "astmul bronșic"], 1,
   "Distruge alveolele pulmonare, apărând caverne; prevenire: vaccinare antituberculoasă.", {0: "M26", 2: "M26", 3: "M26"}, "C", 1, "Fișe p.50"),
 G("Astm", "Astmul bronșic se caracterizează prin:", ["inflamația alveolelor", "spasm și îngustarea bronhiilor", "distrugerea alveolelor de bacilul Koch", "inflamația mucoasei laringelui"], 1,
   "Crize de sufocare, mai ales noaptea.", {0: "M26", 2: "M26", 3: "M26"}, "C", 2, "Fișe p.50"),
 G("Pneumonia", "Pneumonia este:", ["inflamația acută a alveolelor pulmonare", "inflamația laringelui", "îngustarea bronhiilor", "inflamația traheei"], 0,
   "Microbi: pneumococ, streptococ, stafilococ; manifestări: febră, tuse, expectorație purulentă, junghi toracic.", {1: "M26", 2: "M26", 3: "M26"}, "C", 2, "Fișe p.50"),
],

af=[
 AF("Inspirația", "Inspirația este un proces pasiv.", False, "Inspirația este un proces activ.", "Expirația liniștită este pasivă.", "M20"),
 AF("Plămân stâng", "Plămânul stâng are trei lobi.", False, "Plămânul stâng are doi lobi.", "Plămânul drept are trei lobi.", "M21"),
 AF("Inspirație", "În timpul inspirației presiunea aerului din plămânii mamiferelor scade.", True, None, "Aerul pătrunde în plămâni pentru că presiunea intrapulmonară este mai mică decât cea atmosferică.", None, "A", 1, "Simulare 2026 I.D.3"),
 AF("Bronhii", "Bronhiile extrapulmonare sunt formate din inele cartilaginoase complete.", True, None, ""),
 AF("Laringită", "Laringita este inflamația mucoasei laringelui.", True, None, "Manifestări: voce răgușită, tuse seacă."),
],

cp=[
 CP("Ventilație", "Respirația externă se mai numește ............ pulmonară și are două faze: ............ și expirația.", ["ventilație", "inspirația"]),
 CP("Pleură", "Plămânii sunt acoperiți de ............, formată din foița parietală și foița ............ .", ["pleură", "viscerală"]),
],

ex=[
 EX("Căi respiratorii", "Dați două exemple de căi respiratorii extrapulmonare; scrieți câte o caracteristică.",
    [("laringele", "organ cartilaginos cu coarde vocale; glota între ele"), ("traheea", "inele cartilaginoase incomplete posterior; mucoasă cu cili"), ("fosele nazale", "comunică cu exteriorul prin nări și cu faringele prin coane")]),
 EX("Boli respiratorii", "Dați două exemple de boli ale sistemului respirator la om; scrieți câte o cauză.",
    [("bronșita", "infecție bacteriană sau virală a mucoasei bronșice"), ("TBC", "bacilul Koch"), ("pneumonia", "pneumococ, streptococ, stafilococ")]),
],

st=[
 ST("Boli respiratorii", "II.A.a", "Numiți o boală a sistemului respirator la om (la alegere) precizând: o cauză, o manifestare, două măsuri de prevenire.",
    "Exemplu – bronșita: cauză – infecție bacteriană sau virală a mucoasei bronșice; manifestare – tuse, expectorație galben-cenușie, febră; prevenire – evitarea surselor de infecție și călirea organismului.",
    ["boală corectă", "o cauză", "o manifestare", "două măsuri"], "C", 2),
 ST("Ventilație", "II.A.b", "Explicați de ce inspirația este un proces activ.",
    "Inspirația presupune contracția mușchilor inspiratori (diafragm, intercostali), care mărește diametrele cutiei toracice și volumul plămânilor; contracția consumă energie.",
    ["contracția mușchilor inspiratori", "creșterea volumului", "consum de energie"], "U", 2),
 ST("Alveole", "II.A.b", "Explicați adaptarea alveolelor pulmonare la funcția de schimb de gaze.",
    "Peretele alveolar este un epiteliu pavimentos unistratificat, foarte subțire, înconjurat de capilare sanguine; membrana alveolo-capilară permite difuzia gazelor.",
    ["epiteliu unistratificat subțire", "capilare", "membrană alveolo-capilară"], "U", 2),
],

en=[
 EN("Respirație", "Construiți patru enunțuri afirmative, câte două pentru fiecare conținut: plămânii; traheea.",
    ["Plămânii", "Traheea"],
    ["Plămânii sunt situați în cavitatea toracică.", "Plămânul drept are trei lobi, iar cel stâng doi lobi.",
     "Traheea este formată din inele cartilaginoase incomplete posterior.", "Mucoasa traheală are cili care filtrează aerul."]),
],

me=[
 ME("Ventilația pulmonară", "Ventilația pulmonară", ["inspirație", "expirație", "diafragm", "mușchi intercostali", "presiune intrapulmonară", "alveole"],
    "Ventilația pulmonară cuprinde inspirația și expirația. La inspirație se contractă diafragmul și mușchii intercostali, iar presiunea intrapulmonară scade. Aerul ajunge în alveole, unde au loc schimburile de gaze."),
],

gl=[
 ("fose nazale", "Căi respiratorii căptușite cu mucoasă; comunică cu exteriorul prin nări și cu faringele prin coane."),
 ("laringe", "Organ cartilaginos cu coarde vocale; glota."),
 ("glotă", "Orificiul laringian dintre coardele vocale."),
 ("trahee", "Inele cartilaginoase incomplete posterior; cili."),
 ("arbore bronșic", "Căile intrapulmonare, de la bronhiile principale la acini."),
 ("alveolă pulmonară", "Suprafață de schimb; epiteliu pavimentos unistratificat."),
 ("membrană alveolo-capilară", "Membrana alveolară + endoteliul capilar; schimb de gaze."),
 ("pleură", "Seroasă cu foiță parietală și viscerală; lichid pleural."),
 ("ventilație pulmonară", "Respirație externă: inspirație și expirație."),
 ("diafragm", "Mușchi inspirator, între torace și abdomen."),
 ("lobul pulmonar", "Unitate structurală și funcțională a plămânului."),
],

cd=[
 ("Inspirație: activ sau pasiv? Ce se întâmplă cu presiunea?", "Activ; presiunea intrapulmonară scade, volumul plămânilor crește."),
 ("Expirație liniștită: activ sau pasiv?", "Pasiv; volumul scade, presiunea crește."),
 ("Câți lobi au plămânii?", "Drept 3, stâng 2."),
 ("Din ce foițe e formată pleura?", "Parietală și viscerală."),
 ("Prevenirea bolilor respiratorii?", "Aer curat (18–20°C, umiditate), călire, alimentație echilibrată, evitarea surselor de infecție, vaccinare antituberculoasă."),
],

cmp=[
 dict(title="Inspirație vs expirație", cols=["Parametru", "Inspirație", "Expirație (liniștită)"],
      rows=[["Tip", "activă", "pasivă"], ["Mușchi inspiratori", "se contractă", "se relaxează"], ["Diametrele cutiei toracice", "cresc", "revin la normal"],
            ["Volum pulmonar", "crește", "scade"], ["Presiune intrapulmonară", "scade față de atmosferică", "crește față de atmosferică"]]),
],
)
