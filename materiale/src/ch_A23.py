from lib import *
from gen_pb import *

# ---------- PROBLEME (rezultate calculate) ----------
ORD_X = ["XH", "Xh", "Y"]

def ph_hemo(gt):
    p = gt[0]
    if "Y" in p:
        return "băiat hemofilic" if "Xh" in p else "băiat sănătos"
    if p == ("Xh", "Xh"):
        return "fată hemofilică"
    return "fată sănătoasă, purtătoare" if "Xh" in p else "fată sănătoasă, nepurtătoare"

mama = [("XH", "Xh")]
tata = [("XH", "Y")]
ch1 = cross(mama, tata, ORD_X)
tot1 = sum(ch1.values())
tab_h = phenotype_table(ch1, ph_hemo)
hemo = count_where(ch1, lambda g: ph_hemo(g) == "băiat hemofilic")
fii = count_where(ch1, lambda g: "Y" in g[0])
assert tot1 == 4 and hemo == 1 and fii == 2

pb_hemo = PB("Boală heterozomală recesivă (hemofilia) – extindere", "problema_genetica",
  "Hemofilia este determinată de o genă recesivă (h) situată pe cromozomul X. O femeie sănătoasă, purtătoare a genei, se căsătorește cu un bărbat sănătos. Stabiliți: a) genotipurile părinților; b) gameții formați; c) probabilitatea ca un copil să fie hemofilic și procentul băieților hemofilici dintre fii; d) explicați de ce boala apare mai des la bărbați.",
  dict(mama="XHXh", tata="XHY", nota="extindere – verificați dacă profesorul include probleme heterozomale"),
  ["a) Femeie purtătoare: XHXh; bărbat sănătos: XHY.",
   f"b) XHXh → {gam_list(mama)}; XHY → {gam_list(tata)}.",
   f"c) {table_text(tab_h, tot1)}.",
   f"c) Copil hemofilic: {hemo} din {tot1} = {pct(hemo, tot1)}; dintre fii: {hemo} din {fii} = {pct(hemo, fii)}.",
   "d) Bărbatul are un singur cromozom X (hemizigoție): gena h se manifestă oricând este prezentă; femeia are nevoie de două alele recesive (Xh Xh)."],
  f"a) XHXh × XHY; b) XH, Xh / XH, Y; c) {pct(hemo, tot1)} dintre copii; {pct(hemo, fii)} dintre băieți; d) hemizigoție",
  None, 3, "Fișe p.30–31 (model)")

ORD_D = ["XD", "Xd", "Y"]
mama_d = [("XD", "XD")]
tata_d = [("Xd", "Y")]
ch2 = cross(mama_d, tata_d, ORD_D)
tot2 = sum(ch2.values())
def ph_d(gt):
    p = gt[0]
    if "Y" in p:
        return "băiat daltonist" if "Xd" in p else "băiat cu vedere normală"
    return "fată purtătoare (vedere normală)" if "Xd" in p else "fată cu vedere normală"
tab_d = phenotype_table(ch2, ph_d)
assert set(tab_d) == {"fată purtătoare (vedere normală)", "băiat cu vedere normală"}
pb_dalt = PB("Daltonism (heterozomală recesivă) – extindere", "problema_genetica",
  "Daltonismul este determinat de o genă recesivă (d) situată pe cromozomul X. Un bărbat daltonist are copii cu o femeie cu vedere normală, homozigotă. Stabiliți: a) genotipurile părinților; b) genotipurile și fenotipurile copiilor; c) dacă fiii pot fi daltoniști; explicați de la cine primesc cromozomul X.",
  dict(mama="XDXD", tata="XdY"),
  ["a) Femeie homozigotă normală: XDXD; bărbat daltonist: XdY.",
   f"b) {table_text(tab_d, tot2)}.",
   "c) Nu: fiii primesc cromozomul Y de la tată și X de la mamă (XD), deci sunt sănătoși; fiicele primesc Xd de la tată și sunt purtătoare."],
  "a) XDXD × XdY; b) toate fiicele XDXd purtătoare, toți fiii XDY sănătoși; c) nu, X vine de la mamă",
  None, 3, "Fișe p.31 (model)")

# determinism tip A și B
ORD_S = ["X", "Y"]
sA = cross([("X", "X")], [("X", "Y")], ORD_S)
tabA = phenotype_table(sA, lambda g: "femel (XX)" if g[0] == ("X", "X") else "mascul (XY)")
assert ratio_of(tabA) == "1:1"
pb_sex = PB("Determinismul cromozomal al sexului (tip A)", "problema_genetica",
  "La om (tip Drosophila) se încrucișează o femeie (XX) cu un bărbat (XY). Stabiliți: a) tipurile de gameți formați de fiecare părinte și care sex este homogametic; b) probabilitatea ca un copil să fie fată sau băiat; c) cine determină sexul copilului și de ce.",
  dict(tip="A (Drosophila)"),
  ["a) Femeia XX → un singur tip de gamet (X) = sex homogametic; bărbatul XY → X și Y (50% fiecare) = sex heterogametic.",
   f"b) {table_text(tabA, sum(sA.values()))}.",
   "c) Sexul îl determină gametul bărbatului: spermatozoidul cu X dă fată, cel cu Y dă băiat; ovulul conține întotdeauna X."],
  "a) X / X și Y; b) 50% fete, 50% băieți; c) spermatozoidul (X sau Y)",
  None, 1, "Fișe p.28 (model)")

CH = dict(
meta=dict(id="A23", title="Recombinare genetică, determinismul sexului, mutații și boli genetice", module="A",
  sources=["Fișe sinteză 2012, p.28–31", "Simulare 2026 III.2"],
  concepts=["recombinare intracromozomală: profaza I, bivalenți, chiasme, crossing-over", "determinism cromozomal al sexului: tip A (Drosophila), tip B (Abraxas)",
            "mutații: definiție, tipuri (gametice/somatice; genice, cromozomale, genomice), factori mutageni (fizici, chimici, biologici)",
            "cariotipul uman: 46 cromozomi", "aneuploidii: Down, Klinefelter, Turner; cri du chat", "boli genice: polidactilie, sindactilie, albinism, anemie falciformă, hemofilie, daltonism; guta, diabet"],
  bac_slots=["I.A", "I.B", "I.C", "I.D", "II.B", "III.2"], prereq=["A22", "A21"], big_ideas=["informație genetică", "evoluție și variabilitate"]),

gr=[
 G("Crossing-over", "Schimbul reciproc de gene între cromatidele nesurori ale cromozomilor omologi se numește:", ["segregare independentă", "crossing-over", "fecundație", "mitoză"], 1,
   "Are loc în profaza I a meiozei, la nivelul chiasmelor.", {0: "M41", 2: "M43", 3: "M43"}, "C", 2, "Fișe p.28"),
 G("Profaza I", "Recombinarea genetică intracromozomală are loc în:", ["profaza I a meiozei", "metafaza mitozei", "anafaza II", "interfază"], 0,
   "Cromozomii omologi formează bivalenți (tetrade).", {1: "M43", 2: "M43", 3: "M43"}, "C", 2, "Fișe p.28"),
 G("Bivalent", "Un bivalent (tetradă cromozomală) este format din:", ["doi cromozomi omologi", "doi cromozomi neomologi", "o singură cromatidă", "doi gameți"], 0,
   "Unul matern și unul patern.", {1: "M43", 2: "M43", 3: "M43"}, "C", 2, "Fișe p.28"),
 G("Sex homogametic", "La om, sexul homogametic este:", ["masculin (XY)", "feminin (XX)", "masculin (XX)", "feminin (XY)"], 1,
   "Femeia formează un singur tip de gameți (cu X); bărbatul (XY) – două tipuri.", {0: "M44", 2: "M44", 3: "M44"}, "C", 1, "Fișe p.28"),
 G("Gameți bărbat", "Bărbatul formează gameți:", ["numai cu X", "numai cu Y", "50% cu X și 50% cu Y", "XY"], 2,
   "Heterogametic.", {0: "M44", 1: "M44", 3: "M44"}, "C", 1, "Fișe p.28"),
 G("Tip A", "Determinismul sexului de tip Drosophila (A) se întâlnește la:", ["păsări", "mamifere", "reptile", "amfibieni"], 1,
   "Și la musculița de oțet, hamei, cânepă, spanac.", {0: "M44", 2: "M44", 3: "M44"}, "C", 2, "Fișe p.28"),
 G("Tip B", "În tipul Abraxas (B), sexul heterogametic este:", ["masculin", "feminin", "ambele", "niciunul"], 1,
   "Masculul are XX (homogametic), femela XY.", {0: "M44", 2: "M44", 3: "M44"}, "C", 3, "Fișe p.28"),
 G("Mutație", "Mutațiile sunt:", ["modificări ale materialului genetic care nu sunt consecința recombinării", "doar modificări ale fenotipului din mediu", "întotdeauna benefice", "numai cromozomale"], 0,
   "Majoritatea sunt dăunătoare; puține utile.", {1: "M45", 2: "M45", 3: "M45"}, "C", 2, "Fișe p.29"),
 G("Mutații gametice", "Mutațiile care se transmit ereditar sunt:", ["somatice", "gametice", "toate neutre", "numai genomice"], 1,
   "Cele somatice produc o structură mozaicată.", {0: "M45", 2: "M45", 3: "M45"}, "C", 2, "Fișe p.29"),
 G("Tipuri", "După structura afectată, mutațiile pot fi:", ["gametice și somatice", "genice, cromozomale și genomice", "fizice, chimice și biologice", "autozomale și letale"], 1,
   "Gametice/somatice – după tipul de celulă; fizici/chimici/biologici – factorii mutageni.", {0: "M45", 2: "M45", 3: "M45"}, "C", 2, "Fișe p.29"),
 G("Punctiformă", "Mutația care afectează o pereche de nucleotide din gene este:", ["genomică", "punctiformă (genică)", "cromozomială numerică", "somatică exclusiv"], 1,
   "Este cea mai mică mutație.", {0: "M45", 2: "M45", 3: "M45"}, "C", 2, "Fișe p.29"),
 G("Poliploidie", "Multiplicarea seturilor de cromozomi (3n, 4n) este:", ["aneuploidie", "poliploidie", "mutație punctiformă", "crossing-over"], 1,
   "Aneuploidia: variația numărului de cromozomi fără modificarea setului de bază (2n–1, 2n+1).", {0: "M45", 2: "M45", 3: "M45"}, "C", 2, "Fișe p.29"),
 G("Factori fizici", "Este agent mutagen fizic:", ["acidul nitros", "radiațiile ionizante", "virusurile", "colchicina"], 1,
   "Chimici: acid nitros, coloranți, colchicină; biologici: virusuri.", {0: "M45", 2: "M45", 3: "M45"}, "C", 2, "Fișe p.29"),
 G("Factori chimici", "Este agent mutagen chimic:", ["radiațiile cosmice", "colchicina", "virusurile", "variațiile bruște de temperatură"], 1,
   "Și acidul nitros, unele coloranți și medicamente.", {0: "M45", 2: "M45", 3: "M45"}, "C", 2, "Fișe p.29"),
 G("Factori biologici", "Este agent mutagen biologic:", ["radiațiile ionizante", "acidul nitros", "virusurile", "colchicina"], 2,
   "Pot produce restructurări cromozomale și efect cancerigen.", {0: "M45", 1: "M45", 3: "M45"}, "C", 2, "Fișe p.29–30"),
 G("Cariotip", "Cariotipul uman normal cuprinde:", ["23 de cromozomi", "46 de cromozomi", "44 de cromozomi", "48 de cromozomi"], 1,
   "Totalitatea cromozomilor; 46 = 2n.", {0: "M43", 2: "M45", 3: "M45"}, "C", 1, "Fișe p.30"),
 G("Down", "Sindromul Down este:", ["monosomia XO", "trisomia 21", "trisomia XXY", "poliploidie"], 1,
   "Aneuploidie autozomală; cariotip cu 47 de cromozomi.", {0: "M46", 2: "M46", 3: "M46"}, "C", 1, "Fișe p.30"),
 G("Turner", "Sindromul Turner (femei) este:", ["monosomia XO", "trisomia 21", "trisomia XXY", "triploidia (3n)"], 0,
   "Heterozomală; cariotip cu 45 de cromozomi.", {1: "M46", 2: "M46", 3: "M46"}, "C", 2, "Fișe p.30"),
 G("Klinefelter", "Sindromul Klinefelter (bărbați) este:", ["monosomia XO", "trisomia 21", "trisomia XXY", "albinismul"], 2,
   "Aneuploidie heterozomală; cariotip cu 47 de cromozomi.", {0: "M46", 1: "M46", 3: "M46"}, "C", 2, "Fișe p.30"),
 G("Boli genice dominante", "Sunt boli genice autozomale dominante:", ["albinismul", "polidactilia și sindactilia", "hemofilia", "daltonismul"], 1,
   "Albinismul este recesiv; hemofilia și daltonismul sunt heterozomale recesive.", {0: "M46", 2: "M46", 3: "M46"}, "C", 2, "Fișe p.30–31"),
 G("Falciformă", "Anemia falciformă în stare heterozigotă:", ["este letală", "mărește rezistența la malarie", "produce hemofilie", "nu are efect"], 1,
   "În stare homozigotă este letală.", {0: "M46", 2: "M46", 3: "M46"}, "C", 3, "Fișe p.30"),
 G("Hemofilia", "Hemofilia este o boală:", ["autozomală dominantă", "heterozomală recesivă", "autozomală recesivă", "cromozomială numerică"], 1,
   "Gena este pe cromozomul X; apare la bărbați ori de câte ori este prezentă (hemizigoție).", {0: "M46", 2: "M46", 3: "M46"}, "C", 2, "Fișe p.30–31"),
 G("Hemizigoție", "Hemizigoția înseamnă că bărbatul are:", ["două alele pe X", "o singură alelă pentru gena de pe X (nu are alelă pe Y)", "alele identice pe Y", "alele pe autozomi"], 1,
   "De aceea boala se manifestă la bărbați ori de câte ori gena este prezentă.", {0: "M46", 2: "M46", 3: "M46"}, "C", 3, "Fișe p.31"),
 G("Albinism", "Albinismul este:", ["lipsa pigmenților melanici, boală recesivă", "boală dominantă", "boală heterozomală", "o aneuploidie"], 0,
   "Afectează pielea, părul, ochii.", {1: "M46", 2: "M46", 3: "M46"}, "C", 2, "Fișe p.30"),
 G("Număr cromozomi", "Un cariotip uman cu trisomie 21 are:", ["45 de cromozomi", "46 de cromozomi", "47 de cromozomi", "69 de cromozomi"], 2,
   "46 + 1 = 47 (2n+1); Turner: 46 – 1 = 45; poliploidie 3n = 69.", {0: "M45", 1: "M45", 3: "M45"}, "A", 3, "Calcul din Fișe p.30"),
],

af=[
 AF("Crossing-over", "Crossing-over-ul are loc între cromatidele surori ale aceluiași cromozom.", False, "Crossing-over-ul are loc între cromatidele nesurori ale cromozomilor omologi.", "În profaza I.", "M43"),
 AF("Sex", "La femeie, gameții conțin întotdeauna cromozomul X.", True, None, "Sex homogametic."),
 AF("Tip B", "La păsări, la tipul Abraxas, femela este sexul heterogametic.", True, None, "Conform fișelor, masculul este XX, femela XY."),
 AF("Mutații", "Majoritatea mutațiilor sunt benefice.", False, "Majoritatea mutațiilor sunt dăunătoare.", "Puține sunt utile.", "M45"),
 AF("Down", "Sindromul Down este o aneuploidie heterozomală.", False, "Sindromul Down este o aneuploidie autozomală.", "Trisomia 21.", "M46"),
 AF("Radiații", "Radiațiile ionizante sunt agenți mutageni fizici.", True, None, ""),
 AF("Albinism", "Albinismul este o boală genică dominantă.", False, "Albinismul este o boală genică recesivă.", "Polidactilia – dominantă.", "M46"),
 AF("Hemofilia", "Hemofilia se manifestă la bărbați ori de câte ori gena este prezentă.", True, None, "Hemizigoție."),
],

cp=[
 CP("Mutații", "Cea mai mică mutație genică, ce afectează o pereche de nucleotide, se numește mutație ............ .", ["punctiformă"]),
 CP("Aneuploidii", "Trisomia 21 se numește sindromul ............, iar monosomia XO – sindromul ............ .", ["Down", "Turner"]),
 CP("Factori mutageni", "Radiațiile ionizante sunt agenți mutageni ............, iar virusurile – agenți mutageni ............ .", ["fizici", "biologici"]),
 CP("Sex", "Sexul care formează un singur tip de gameți se numește sex ............, iar cel care formează două tipuri – sex ............ .", ["homogametic", "heterogametic"]),
],

ex=[
 EX("Mutații", "Dați trei exemple de mutații.",
    [("mutație genică punctiformă", "afectează o pereche de nucleotide"), ("mutație cromozomială", "deleție, translocație, duplicație, inversie"), ("mutație genomică", "poliploidie sau aneuploidie")]),
 EX("Agenți mutageni", "Dați două exemple de agenți mutageni; precizați tipul fiecăruia.",
    [("radiații ionizante", "fizic"), ("acid nitros", "chimic"), ("virusuri", "biologic"), ("colchicina", "chimic")]),
 EX("Boli genetice", "Dați două exemple de boli genetice; precizați câte un tip.",
    [("sindromul Down", "aneuploidie autozomală (trisomia 21)"), ("hemofilia", "boală genică heterozomală recesivă"), ("albinismul", "boală genică autozomală recesivă"), ("sindromul Turner", "aneuploidie heterozomală (XO)")]),
],

st=[
 ST("Mutații", "III.2.a", "Dați trei exemple de mutații.",
    "Mutații genice (punctiforme), mutații cromozomale (deleții, translocații), mutații genomice (poliploidii, aneuploidii, ex. trisomia 21).", ["trei exemple"], "C", 1, "Simulare 2026 III.2.a"),
 ST("Hemofilia", "II.A.a", "Numiți o boală genetică la om precizând: tipul ei, o manifestare și o modalitate de transmitere.",
    "Exemplu – hemofilia: boală genică heterozomală recesivă; manifestare – incapacitatea de coagulare a sângelui; gena este pe X, se transmite pe linie maternă și apare la bărbați ori de câte ori e prezentă.", ["boală", "tip", "manifestare", "transmitere"], "C", 3, "Fișe p.30–31"),
 ST("Crossing-over", "III.1.b", "Explicați importanța crossing-over-ului.",
    "Prin schimbul de gene între cromatidele nesurori ale omologilor rezultă cromozomi recombinați genetic, deci gameți și descendenți variați genetic.", ["cromozomi recombinați", "variabilitate"], "U", 3, "Fișe p.28"),
 ST("Sex", "III.1.b", "Explicați de ce sexul copilului este determinat de bărbat.",
    "Femeia formează numai ovule cu X, iar bărbatul spermatozoizi cu X sau Y; tipul de spermatozoid care fecundează decide sexul.", ["ovul X", "spermatozoid X/Y"], "U", 2, "Fișe p.28"),
],

en=[
 EN("Mutații", "Construiți patru enunțuri afirmative, câte două pentru fiecare conținut: mutațiile genomice; factorii mutageni fizici.",
    ["Mutațiile genomice", "Factorii mutageni fizici"],
    ["Mutațiile genomice afectează întregul genom.", "Poliploidia și aneuploidia sunt mutații genomice.",
     "Radiațiile ionizante sunt factori mutageni fizici.", "Factorii mutageni fizici au efect cancerigen și teratogen."]),
 EN("Boli genetice", "Construiți patru enunțuri afirmative, câte două pentru fiecare conținut: sindromul Down; hemofilia.",
    ["Sindromul Down", "Hemofilia"],
    ["Sindromul Down este trisomia 21.", "Sindromul Down este o aneuploidie autozomală.",
     "Hemofilia este o boală genică recesivă.", "Gena hemofiliei se află pe cromozomul X."]),
],

me=[
 ME("Factorii mutageni", "Factorii mutageni", ["mutație", "radiații", "agent chimic", "virus", "cancerigen", "teratogen"],
    "Mutațiile sunt modificări ale materialului genetic produse de factori mutageni fizici, chimici și biologici. Radiațiile, agenții chimici și virusurile au efect cancerigen, iar unele mutații produc malformații teratogene."),
 ME("Mutațiile", "Mutațiile și bolile genetice", ["mutație", "genom", "aneuploidie", "cariotip", "trisomie", "sindrom"],
    "Mutațiile pot modifica genomul și cariotipul uman. Aneuploidiile, precum trisomia 21, produc sindroame cu manifestări caracteristice."),
],

pb=[pb_sex, pb_hemo, pb_dalt],

gl=[
 ("recombinare genetică", "Reunirea elementelor genetice din surse independente într-o singură unitate."),
 ("crossing-over", "Schimb reciproc de gene între cromatidele nesurori ale omologilor, în profaza I."),
 ("chiasmă", "Punct de contact între cromatidele nesurori ale cromozomilor omologi."),
 ("bivalent (tetradă)", "Pereche de cromozomi omologi, unită în profaza I."),
 ("heterozom", "Cromozom sexual (X sau Y)."),
 ("sex homogametic", "Sex cu heterozomi identici (XX în tipul A), formează un singur tip de gameți."),
 ("sex heterogametic", "Sex cu heterozomi diferiți (XY în tipul A), formează două tipuri de gameți."),
 ("mutație", "Modificare a materialului genetic care nu este consecința recombinării."),
 ("mutație punctiformă", "Mutație care afectează o pereche de nucleotide."),
 ("poliploidie", "Multiplicarea seturilor de cromozomi (3n, 4n)."),
 ("aneuploidie", "Variația numărului de cromozomi fără modificarea setului de bază (2n±1)."),
 ("factor mutagen", "Agent fizic, chimic sau biologic care produce mutații."),
 ("teratogen", "Care produce malformații în dezvoltarea intrauterină."),
 ("cariotip", "Totalitatea cromozomilor unei specii; la om 46."),
 ("hemizigoție", "Prezența unei singure alele pentru o genă de pe X, la bărbat."),
 ("sindrom Down", "Trisomia 21."),
 ("sindrom Turner", "Monosomia XO, la femei."),
 ("sindrom Klinefelter", "Trisomia XXY, la bărbați."),
],

cd=[
 ("Unde și când are loc crossing-over?", "În profaza I a meiozei, între cromatidele nesurori ale cromozomilor omologi."),
 ("Tipul A / tipul B de determinare a sexului?", "A (Drosophila): femelă XX, mascul XY – om, mamifere. B (Abraxas): mascul XX, femelă XY – păsări, reptile etc."),
 ("Clasificarea mutațiilor?", "După celulă: gametice/somatice; după structură: genice, cromozomale, genomice."),
 ("Factori mutageni?", "Fizici (radiații), chimici (acid nitros, colchicină), biologici (virusuri)."),
 ("Sindroame cromozomale?", "Down 21 (47); Klinefelter XXY (47); Turner XO (45)."),
 ("Boli genice?", "Dominante: polidactilie, sindactilie; recesive: albinism; heterozomale recesive: hemofilie, daltonism."),
],

cmp=[
 dict(title="Tipuri de mutații", cols=["Tip", "Ce se modifică", "Exemple"],
      rows=[["Genice", "gene / perechi de nucleotide", "mutații punctiforme; albinism, anemie falciformă"], ["Cromozomale", "structura cromozomilor", "deleții, translocații, duplicații; ţipătul pisicii"], ["Genomice", "numărul de cromozomi", "poliploidii; trisomia 21, XO, XXY"]]),
 dict(title="Aneuploidii umane", cols=["Sindrom", "Cariotip", "Tip", "Sex afectat"],
      rows=[["Down", "47, trisomia 21", "autozomal", "ambele sexe"], ["Klinefelter", "47, XXY", "heterozomal", "bărbați"], ["Turner", "45, XO", "heterozomal", "femei"]]),
 dict(title="Determinism sex tip A vs B", cols=["Criteriu", "Tip A (Drosophila)", "Tip B (Abraxas)"],
      rows=[["Femelă", "XX (homogametic)", "XY (heterogametic)"], ["Mascul", "XY (heterogametic)", "XX (homogametic)"], ["Exemple", "om, mamifere, musculița de oțet, hamei", "păsări, reptile, amfibieni, unele insecte"]]),
 dict(title="Factori mutageni", cols=["Tip", "Exemple", "Efecte"],
      rows=[["Fizici", "radiații ionizante, neionizante, cosmice; variații bruște de temperatură", "cancerigen, teratogen"], ["Chimici", "acid nitros, coloranți, colchicină", "cancerigen, teratogen"], ["Biologici", "virusuri, microorganisme parazite", "restructurări cromozomale, tumori"]]),
],
)
