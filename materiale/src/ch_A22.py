from lib import *
from gen_pb import *

# ---------- PROBLEME DE GENETICĂ (rezultate calculate) ----------
ORD2 = ["O", "o", "V", "v"]

def is_dom(p, dom):
    return dom in p

def het(p):
    return p[0] != p[1]

# --- 1. Pepene (după Bac 2025 II.B): OOvv x ooVV, F1 x F1 ---
P1 = [("O", "O"), ("v", "v")]
P2 = [("o", "o"), ("V", "V")]
f1_cnt = cross(P1, P2, ORD2)
assert len(f1_cnt) == 1 and gt_str(list(f1_cnt)[0]) == "OoVv"
F1 = [("O", "o"), ("V", "v")]
f2 = cross(F1, F1, ORD2)
assert sum(f2.values()) == 16
dbl_het = count_where(f2, lambda g: het(g[0]) and het(g[1]))
dbl_hom = count_where(f2, lambda g: (not het(g[0])) and (not het(g[1])))
dbl_hom_gts = genotype_list(f2, lambda g: (not het(g[0])) and (not het(g[1])))
def ph_pepene(gt):
    return ("oval-alungite" if "O" in gt[0] else "rotunde") + ", " + ("verde-deschis" if "V" in gt[1] else "galben-auriu")
tab1 = phenotype_table(f2, ph_pepene)
rot_gal = [gt_str(g) for g in f2 if ph_pepene(g) == "rotunde, galben-auriu"]
assert rot_gal == ["oovv"] and dbl_het == 4 and dbl_hom == 4 and ratio_of(tab1) == "9:3:3:1"

pb_pepene = PB("Dihibridare (F1 × F1, 16 combinații)", "problema_genetica",
  "Se încrucișează un soi de pepene cu fructe oval-alungite (O) și de culoare galben-auriu (v) cu un soi de pepene cu fructe rotunde (o) și de culoare verde-deschis (V). Părinții sunt homozigoți pentru ambele caractere. În F1 se obțin hibrizi; prin încrucișarea lor între ei se obțin în F2 16 combinații. Stabiliți: a) tipurile de gameți formați de organismele din F1; b) fenotipul organismelor din F1; c) numărul combinațiilor din F2 dublu heterozigote și al celor dublu homozigote; genotipul organismelor din F2 cu fructe rotunde, galben-auriu; d) completați problema cu o altă cerință formulată de voi și rezolvați-o.",
  dict(P="OOvv x ooVV", F1_x_F1="OoVv x OoVv", dominante="O (oval-alungit), V (verde-deschis)"),
  [f"Genotipuri părinți: OOvv și ooVV; gameți: {gam_list(P1)} și {gam_list(P2)} → F1 = {gt_str(list(f1_cnt)[0])} (100%).",
   f"a) Gameți F1 (OoVv): {gam_list(F1)} → 2² = 4 tipuri.",
   "b) F1: O și V sunt dominante → fructe oval-alungite, de culoare verde-deschis (100%, uniformitate).",
   f"c) Dublu heterozigote (OoVv): {dbl_het} din 16; dublu homozigote ({', '.join(dbl_hom_gts)}): {dbl_hom} din 16; fructe rotunde (oo), galben-auriu (vv) → genotip {rot_gal[0]}.",
   f"d) Exemplu de cerință: raportul de segregare după fenotip în F2 → {table_text(tab1, 16)} → raport {ratio_of(tab1)}."],
  f"a) {gam_list(F1)}; b) fructe oval-alungite, verde-deschis; c) {dbl_het} dublu heterozigote, {dbl_hom} dublu homozigote; genotip: {rot_gal[0]}; d) raport fenotipic {ratio_of(tab1)}",
  "Cerință d) – exemplu: procentul descendenților F2 cu fructe oval-alungite și galben-auriu: " + pct(sum(n for ph,(n,_) in tab1.items() if ph == 'oval-alungite, galben-auriu'), 16),
  2, "Bac 2025 II.B (model)")

# --- 2. Dovlecel (după Simulare 2026 II.B): ooVv x Oovv ---
Pa = [("o", "o"), ("V", "v")]   # fructe cilindrice (o), verde-închis (V), heterozigot pentru culoare
Pb = [("O", "o"), ("v", "v")]   # fructe ovale (O), crem-gălbui (v), heterozigot pentru formă
f1b = cross(Pa, Pb, ORD2)
assert sum(f1b.values()) == 16
tot_b = sum(f1b.values())
def ph_dov(gt):
    return ("ovale" if "O" in gt[0] else "cilindrice") + ", " + ("verde-închis" if "V" in gt[1] else "crem-gălbui")
tabb = phenotype_table(f1b, ph_dov)
verde = count_where(f1b, lambda g: "V" in g[1])
verde_gts = genotype_list(f1b, lambda g: "V" in g[1])
assert pct(verde, tot_b) == "50%" and sorted(verde_gts) == ["OoVv", "ooVv"] and ratio_of(tabb) == "1:1:1:1"

pb_dovlecel = PB("Dihibridare cu părinți heterozigoți pentru un caracter", "problema_genetica",
  "Se încrucișează un soi de dovlecel cu fructe cilindrice (o), de culoare verde-închis (V), heterozigot pentru culoare, cu un soi de dovlecel cu fructe ovale (O), de culoare crem-gălbui (v), heterozigot pentru forma fructelor. Stabiliți: a) genotipurile părinților; b) tipurile de gameți ai părintelui cu fructe ovale, crem-gălbui; c) procentul descendenților din F1 cu fructe verde-închis și genotipul lor; d) completați problema cu o cerință formulată de voi și rezolvați-o.",
  dict(parinte_1="ooVv", parinte_2="Oovv"),
  [f"a) Cilindrice (o) = recesiv → oo; verde-închis, heterozigot → Vv ⇒ ooVv. Ovale, heterozigot → Oo; crem-gălbui (v) recesiv → vv ⇒ Oovv.",
   f"b) Părinte Oovv: {gam_list(Pb)} (2 tipuri). (Celălalt părinte, ooVv: {gam_list(Pa)}.)",
   f"c) Din {tot_b} combinații, descendenții F1: {table_text(tabb, tot_b)}.",
   f"c) Verde-închis (V_): {verde} din {tot_b} = {pct(verde, tot_b)}; genotipuri: {', '.join(verde_gts)}.",
   f"d) Exemplu: raportul fenotipic în F1 → {ratio_of(tabb)}."],
  f"a) ooVv × Oovv; b) {gam_list(Pb)}; c) {pct(verde, tot_b)}, genotipuri {', '.join(verde_gts)}; d) raport fenotipic {ratio_of(tabb)}",
  "Cerință d) – exemplu: câți descendenți din 200 ar avea fructe ovale, crem-gălbui? → " + str(200 * count_where(f1b, lambda g: ph_dov(g) == 'ovale, crem-gălbui') // tot_b),
  2, "Simulare 2026 II.B (model)")

# --- 3. Monohibridare mazăre N/z ---
ORD_N = ["N", "z"]
Pn = [("N", "z")]
f2n = cross(Pn, Pn, ORD_N)
tabn = phenotype_table(f2n, lambda g: "boabe netede" if "N" in g[0] else "boabe zbârcite")
gen_ratio = ratio_str(Counter({gt_str(g): n for g, n in f2n.items()}))
assert ratio_of(tabn) == "3:1" and gen_ratio == "2:1:1"
zz = count_where(f2n, lambda g: g[0] == ("z", "z"))
pb_mono = PB("Monohibridare, F1 × F1", "problema_genetica",
  "La mazăre, aspectul neted al bobului (N) domină asupra aspectului zbârcit (z). Se încrucișează două plante hibride din F1 (Nz × Nz). Stabiliți: a) tipurile de gameți ai unei plante din F1; b) genotipurile și fenotipurile descendenților F2; c) raportul de segregare după fenotip și după genotip; d) procentul plantelor cu boabe zbârcite.",
  dict(F1="Nz x Nz"),
  [f"a) Nz → {gam_list(Pn)} (puritatea gameților: fiecare gamet are un singur factor din pereche).",
   f"b) F2 ({sum(f2n.values())} combinații): {table_text(tabn, 4)}.",
   f"c) Raport fenotipic {ratio_of(tabn)}; genotipic 1:2:1 (NN : Nz : zz = {f2n[(('N','N'),)]}:{f2n[(('N','z'),)]}:{f2n[(('z','z'),)]} din 4).",
   f"d) zz = {zz} din 4 = {pct(zz, 4)}."],
  f"a) N, z; b) NN, Nz (netede), zz (zbârcite); c) fenotip {ratio_of(tabn)}, genotip 1:2:1; d) {pct(zz, 4)}",
  None, 1, "Fișe p.25 (model)")

# --- 4. Retroîncrucișare dihibridă NzGg x zzgg ---
ORD_NG = ["N", "z", "G", "g"]
Pnz = [("N", "z"), ("G", "g")]
Pzz = [("z", "z"), ("g", "g")]
tc = cross(Pnz, Pzz, ORD_NG)
tabt = phenotype_table(tc, lambda g: ("netede" if "N" in g[0] else "zbârcite") + ", " + ("galbene" if "G" in g[1] else "verzi"))
assert ratio_of(tabt) == "1:1:1:1" and sum(tc.values()) == 16
pb_tc = PB("Încrucișare cu dublu recesiv (dihibridare)", "problema_genetica",
  "La mazăre, boabele netede (N) și galbene (G) sunt dominante față de cele zbârcite (z) și verzi (g). Se încrucișează o plantă dublu heterozigotă cu una cu boabe zbârcite și verzi. Stabiliți: a) genotipul fiecărui părinte; b) gameții formați; c) raportul fenotipic al descendenților și procentul plantelor cu boabe zbârcite, galbene.",
  dict(P="NzGg x zzgg"),
  ["a) Dublu heterozigot: NzGg; cu boabe zbârcite și verzi (recesiv pentru ambele): zzgg.",
   f"b) NzGg → {gam_list(Pnz)} (4 tipuri); zzgg → {gam_list(Pzz)} (1 tip).",
   f"c) {table_text(tabt, 16)}.",
   f"c) Raport {ratio_of(tabt)}; zbârcite, galbene: 4 din 16 = 25%."],
  f"a) NzGg × zzgg; b) {gam_list(Pnz)} / {gam_list(Pzz)}; c) 1:1:1:1; 25% zbârcite și galbene (zzGg)",
  None, 2, "Fișe p.25–26 (model)")

# --- 5. Grupe de sânge: II(LAl) x III(LBl) ---
ORD_B = ["LA", "LB", "l"]
def grp(gt):
    p = gt[0]
    if "LA" in p and "LB" in p: return "IV (AB)"
    if "LA" in p: return "II (A)"
    if "LB" in p: return "III (B)"
    return "I (O)"
Pa_b = [("LA", "l")]
Pb_b = [("LB", "l")]
cb = cross(Pa_b, Pb_b, ORD_B)
tabg = phenotype_table(cb, grp)
assert set(tabg) == {"I (O)", "II (A)", "III (B)", "IV (AB)"} and ratio_of(tabg) == "1:1:1:1"
pb_blood = PB("Grupe de sânge – codominanță", "problema_genetica",
  "Doi părinți au grupele de sânge II(A) și III(B), ambii heterozigoți. Stabiliți: a) genotipurile părinților; b) gameții formați; c) grupele de sânge posibile ale copiilor și probabilitatea fiecăreia; d) ce alele determină grupa IV(AB) și ce relație există între ele.",
  dict(parinti="II(A) heterozigot x III(B) heterozigot"),
  ["a) II(A) heterozigot → LAl; III(B) heterozigot → LBl.",
   f"b) LAl → {gam_list(Pa_b)}; LBl → {gam_list(Pb_b)}.",
   f"c) {table_text(tabg, sum(cb.values()))}.",
   "d) Grupa IV(AB) are genotipul LALB: alelele LA și LB sunt codominante – ambele se manifestă în fenotip."],
  "a) LAl × LBl; b) LA, l / LB, l; c) fiecare grupă – 25% (I, II, III, IV); d) LALB, codominanță",
  None, 2, "Fișe p.26–27 (model)")

# --- 6. Grupe de sânge: IV x I ---
Pab = [("LA", "LB")]
Po = [("l", "l")]
cab = cross(Pab, Po, ORD_B)
tab_ab = phenotype_table(cab, grp)
assert set(tab_ab) == {"II (A)", "III (B)"} and ratio_of(tab_ab) == "1:1"
pb_blood2 = PB("Grupe de sânge – IV × I", "problema_genetica",
  "Un bărbat cu grupa IV(AB) și o femeie cu grupa I(O) au copii. Stabiliți: a) genotipurile părinților; b) grupele posibile ale copiilor; c) dacă un copil poate avea grupa I(O); explicați.",
  dict(parinti="IV (AB) x I (O)"),
  ["a) IV(AB) → LALB; I(O) → ll.",
   f"b) {table_text(tab_ab, sum(cab.values()))}.",
   "c) Nu: bărbatul nu are alela l, deci copiii primesc de la el LA sau LB; niciun copil nu este ll."],
  "a) LALB × ll; b) II(A) 50% (LAl), III(B) 50% (LBl); c) nu, tatăl nu transmite alela l",
  None, 2, "Fișe p.26–27 (model)")

CH = dict(
meta=dict(id="A22", title="Ereditatea: legile lui Mendel, codominanța, grupele de sânge", module="A",
  sources=["Fișe sinteză 2012, p.23–27", "Subiect bac 2025 II.B", "Simulare 2026 II.B"],
  concepts=["ereditate, variabilitate", "gene alele, dominant/recesiv, homozigot/heterozigot, genotip/fenotip",
            "legea purității gameților; uniformitatea F1", "legea segregării independente a perechilor de caractere",
            "monohibridare (3:1, 1:2:1) și dihibridare (9:3:3:1)", "codominanța: grupe de sânge AB0",
            "importanța legilor lui Mendel"],
  bac_slots=["I.A", "I.B", "I.C", "I.D", "II.B", "III.1"], prereq=["A02"], big_ideas=["informație genetică"]),

gr=[
 G("Heterozigot", "Un organism cu genotipul Aa este:", ["homozigot dominant", "heterozigot", "homozigot recesiv", "haploid"], 1,
   "Aa are două alele diferite → heterozigot; AA și aa sunt homozigote.", {0: "M40", 2: "M40", 3: "M40"}, "C", 1, "Fișe p.23"),
 G("Genotip", "Totalitatea factorilor ereditari ai unui organism formează:", ["fenotipul", "genotipul", "mediul", "caracterul"], 1,
   "Fenotipul = totalitatea însușirilor rezultate din interacțiunea genotip – mediu.", {0: "M40", 2: "M40", 3: "M40"}, "C", 1, "Fișe p.23"),
 G("Fenotip", "Fenotipul unui organism rezultă din interacțiunea dintre:", ["genotip și mediu", "doi gameți", "două cromozomi", "genă și proteină exclusiv"], 0,
   "Genotipul nu determină singur fenotipul.", {1: "M40", 2: "M40", 3: "M40"}, "C", 2, "Fișe p.23"),
 G("Gene alele", "Genele alele sunt:", ["gene care determină manifestări contrastante ale aceluiași caracter", "gene de pe cromozomi diferiți", "gene care determină caractere diferite", "gene numai recesive"], 0,
   "Exemplu: ochi negri – ochi albaștri.", {1: "M40", 2: "M40", 3: "M40"}, "C", 1, "Fișe p.23"),
 G("Celule somatice", "Genele alele sunt perechi în:", ["gameți", "celule somatice (2n)", "spermatozoizi", "ovule"], 1,
   "În gameți (celule haploide) alelele sunt nepereche.", {0: "M43", 2: "M43", 3: "M43"}, "C", 1, "Fișe p.23"),
 G("Tipuri de gameți", "Genotipul NzGg formează tipuri de gameți în număr de:", ["2", "4", "8", "16"], 1,
   "2ⁿ, n = nr. de perechi heterozigote (2² = 4): NG, Ng, zG, zg.", {0: "M43", 2: "M43", 3: "M43"}, "C", 2, "Fișe p.25"),
 G("Gameți homozigot", "Genotipul NNGG formează gameți:", ["NG și zg", "NG (un singur tip)", "NN și GG", "NG, Ng, zG, zg"], 1,
   "Homozigoții formează un singur tip de gameți.", {0: "M43", 2: "M43", 3: "M43"}, "C", 2, "Fișe p.25"),
 G("Legea 1", "Legea purității gameților afirmă că gameții conțin:", ["ambii factori ereditari ai perechii", "un singur factor ereditar din fiecare pereche", "numai factori dominanți", "numai factori recesivi"], 1,
   "Gameții sunt puri genetic.", {0: "M41", 2: "M41", 3: "M41"}, "C", 1, "Fișe p.25"),
 G("Uniformitate", "Prin încrucișarea NN × zz, generația F1 este formată din:", ["50% NN și 50% zz", "100% Nz, cu boabe netede", "100% zz", "75% netede și 25% zbârcite"], 1,
   "F1 este uniformă genotipic și fenotipic.", {0: "M41", 2: "M41", 3: "M41"}, "C", 1, "Fișe p.25"),
 G("Raport genotipic", "Raportul de segregare după genotip în F2 la monohibridare este:", ["3:1", "1:2:1", "9:3:3:1", "1:1"], 1,
   "Fenotipic: 3:1; genotipic: 1:2:1.", {0: "M41", 2: "M41", 3: "M41"}, "C", 1, "Fișe p.25"),
 G("Raport dihibridare", "Raportul fenotipic în F2 la dihibridare este:", ["3:1", "1:2:1", "9:3:3:1", "1:1:1:1"], 2,
   "16 combinații; 4 fenotipuri.", {0: "M41", 1: "M41", 3: "M41"}, "C", 1, "Fișe p.26"),
 G("Combinații F2", "Prin încrucișarea hibrizilor dublu heterozigoți din F1 se obțin în F2:", ["4 combinații", "8 combinații", "9 combinații", "16 combinații"], 3,
   "4 × 4 tipuri de gameți = 16.", {0: "M41", 1: "M41", 2: "M41"}, "C", 1, "Fișe p.26; Bac 2025 II.B"),
 G("Mazăre", "Mendel a ales mazărea pentru experimente deoarece:", ["este plantă autogamă, ușor de cultivat, cu multe semințe", "este plantă alogamă", "produce puține semințe", "nu poate forma soiuri pure"], 0,
   "Autopolenizarea permite obținerea de soiuri pure.", {1: "M41", 2: "M41", 3: "M41"}, "C", 1, "Fișe p.24"),
 G("Codominanță", "Grupa de sânge IV (AB) este un exemplu de:", ["dominanță completă", "codominanță", "recesivitate", "mutație"], 1,
   "Alelele LA și LB sunt codominante și se manifestă împreună.", {0: "M42", 2: "M42", 3: "M45"}, "C", 1, "Fișe p.26; Simulare 2026 III.2.b"),
 G("Grupa A", "Persoana cu grupa II(A) poate avea genotipul:", ["ll", "LAl", "LALB", "LBl"], 1,
   "Grupa II: LALA sau LAl.", {0: "M42", 2: "M42", 3: "M42"}, "C", 2, "Fișe p.26"),
 G("Grupa 0", "Persoana cu grupa I(O) are genotipul:", ["LAl", "LBl", "ll", "LALB"], 2,
   "Este homozigotă recesivă.", {0: "M42", 1: "M42", 3: "M42"}, "C", 1, "Fișe p.26"),
 G("Aglutinine", "În plasma persoanei cu grupa II(A) se găsesc anticorpii:", ["alfa", "alfa și beta", "beta", "niciunul"], 2,
   "Aglutinogenul și aglutinina de același fel nu pot coexista (A cu anti-A / alfa).", {0: "M42", 1: "M42", 3: "M42"}, "C", 2, "Fișe p.27"),
 G("Donator universal", "Donatorul universal este persoana cu grupa:", ["I (O)", "II (A)", "III (B)", "IV (AB)"], 0,
   "Nu are antigene pe hematii; primitor universal: IV (AB).", {1: "M42", 2: "M42", 3: "M42"}, "C", 1, "Fișe p.27"),
 G("Importanță", "Cunoașterea legilor lui Mendel permite:", ["acordarea sfatului genetic", "dispariția mutațiilor", "modificarea genotipului prin mediu", "înlocuirea fecundației"], 0,
   "Și ameliorarea soiurilor și raselor.", {1: "M41", 2: "M41", 3: "M41"}, "C", 1, "Fișe p.26"),
 G("Retroîncrucișare", "Din încrucișarea Nz × zz, procentul descendenților cu boabe zbârcite este:", ["0%", "25%", "50%", "75%"], 2,
   "Nz × zz → 1 Nz : 1 zz.", {0: "M41", 1: "M41", 3: "M41"}, "A", 2, "Calculat cu motorul de genetică"),
],

af=[
 AF("Heterozigot", "Genotipul NN este heterozigot.", False, "Genotipul NN este homozigot.", "Heterozigot = alele diferite (Nz).", "M40"),
 AF("Gameți", "Gameții conțin câte un factor ereditar din fiecare pereche.", True, None, "Legea purității gameților."),
 AF("Raport", "Raportul genotipic în F2 la monohibridare este 3:1.", False, "Raportul fenotipic în F2 la monohibridare este 3:1.", "Genotipic: 1:2:1.", "M41"),
 AF("Codominanță", "Grupa AB(IV) este determinată de alele aflate în relație de codominanță.", True, None, ""),
 AF("Donare", "Persoana cu grupa IV(AB) este donator universal.", False, "Persoana cu grupa I(O) este donator universal.", "AB – primitor universal.", "M42"),
 AF("Mazăre", "Mazărea este o plantă autogamă.", True, None, "Autopolenizare."),
],

cp=[
 CP("Genotip", "Totalitatea genelor formează ............, iar totalitatea însușirilor – ............ .", ["genotipul", "fenotipul"]),
 CP("Mendel", "Generația F1 obținută din părinți homozigoți este ............ genotipic și fenotipic.", ["uniformă"]),
 CP("Gameți", "Legea ............ gameților afirmă că gameții conțin un singur factor din pereche.", ["purității"]),
 CP("Grupe", "Alelele LA și LB sunt în relație de ............ și determină grupa ............ .", ["codominanță", "IV (AB)"]),
],

ex=[
 EX("Homo/heterozigot", "Dați două exemple de genotipuri; precizați dacă sunt homozigote sau heterozigote.",
    [("NN", "homozigot dominant"), ("Nz", "heterozigot"), ("zz", "homozigot recesiv")]),
 EX("Grupe de sânge", "Dați două exemple de grupe de sânge; scrieți câte un genotip posibil.",
    [("grupa II (A)", "LALA sau LAl"), ("grupa III (B)", "LBLB sau LBl"), ("grupa I (O)", "ll"), ("grupa IV (AB)", "LALB")]),
],

st=[
 ST("Codominanță", "III.2.b", "Precizați un argument în favoarea afirmației: „Codominanța este un exemplu de abatere de la segregarea mendeliană”.",
    "La grupele de sânge, alelele LA și LB sunt codominante și determină un fenotip nou (grupa AB), nu unul dintre fenotipurile părinților, ca în dominanța completă.",
    ["alele LA și LB", "fenotip nou: AB"], "C", 3, "Simulare 2026 III.2.b"),
 ST("Legile lui Mendel", "III.2.b", "Enunțați legea segregării independente a perechilor de caractere.",
    "Fiecare pereche de gene alele segregă independent de alte perechi de gene (dihibridare: 9:3:3:1).", ["legea", "independent"], "C", 2, "Fișe p.26"),
 ST("Mazăre", "III.1.b", "Explicați de ce mazărea este un organism potrivit pentru experimentele lui Mendel.",
    "Este autogamă, ceea ce permite soiuri pure, ușor de cultivat și produce multe semințe, deci se pot urmări corect caracterele.", ["autogamă", "soiuri pure"], "U", 2, "Fișe p.24"),
],

en=[
 EN("Ereditate", "Construiți patru enunțuri afirmative, câte două pentru fiecare conținut: legea purității gameților; codominanța.",
    ["Legea purității gameților", "Codominanța"],
    ["Legea purității gameților afirmă că gameții conțin un singur factor din pereche.", "Gameții sunt întotdeauna puri genetic.",
     "Codominanța este o abatere de la segregarea mendeliană.", "Codominanța determină apariția grupei de sânge AB."]),
],

me=[
 ME("Legile lui Mendel", "Legile lui Mendel", ["monohibridare", "dihibridare", "gamet", "alele", "F1", "segregare"],
    "Mendel a urmărit transmiterea caracterelor prin monohibridare și dihibridare, observând că gametul conține un singur factor din perechea de alele. F1 este uniformă, iar în F2 are loc segregarea caracterelor, în raport de 3:1 sau 9:3:3:1."),
],

pb=[pb_pepene, pb_dovlecel, pb_mono, pb_tc, pb_blood, pb_blood2],

gl=[
 ("ereditate", "Însușirea organismelor de a transmite informația genetică descendenților."),
 ("variabilitate", "Însușirea organismelor de a se deosebi prin caractere ereditare și neereditare."),
 ("gene alele", "Factori ereditari care determină manifestări contrastante ale aceluiași caracter."),
 ("homozigot", "Organism cu alele identice (AA sau aa)."),
 ("heterozigot", "Organism cu alele diferite (Aa)."),
 ("genotip", "Totalitatea factorilor ereditari ai unui organism."),
 ("fenotip", "Totalitatea însușirilor rezultate din interacțiunea genotip – mediu."),
 ("monohibridare", "Încrucișare între organisme care diferă printr-o pereche de caractere."),
 ("dihibridare", "Încrucișare între organisme care diferă prin două perechi de caractere."),
 ("legea purității gameților", "Gameții conțin un singur factor ereditar din fiecare pereche."),
 ("legea segregării independente", "Fiecare pereche de gene alele segregă independent de celelalte."),
 ("codominanță", "Două alele dominante care se manifestă împreună (grupa AB)."),
 ("aglutinogen", "Antigen (A, B) de pe membrana hematiilor."),
 ("aglutinină", "Anticorp (alfa, beta) din plasmă."),
 ("autogamă", "Plantă care se reproduce prin autopolenizare."),
],

cd=[
 ("Care sunt cele două legi mendeliene (din programă)?", "Legea purității gameților; legea segregării independente a perechilor de caractere."),
 ("Raporturile în F2: monohibridare / dihibridare?", "Fenotipic 3:1 (genotipic 1:2:1); dihibridare 9:3:3:1."),
 ("Câte tipuri de gameți formează NzGg?", "4 (2²): NG, Ng, zG, zg."),
 ("Genotipurile grupelor de sânge?", "I: ll; II: LALA/LAl; III: LBLB/LBl; IV: LALB."),
 ("Donator / primitor universal?", "I(O) / IV(AB)."),
],

cmp=[
 dict(title="Grupe de sânge AB0", cols=["Grupa", "Genotip", "Antigene pe hematii", "Anticorpi în plasmă", "Donează", "Primește"],
      rows=[["I (O)", "ll", "—", "alfa și beta", "tuturor", "doar I"], ["II (A)", "LALA, LAl", "A", "beta", "A, AB", "A, O"],
            ["III (B)", "LBLB, LBl", "B", "alfa", "B, AB", "B, O"], ["IV (AB)", "LALB", "A și B", "—", "AB", "toate"]]),
 dict(title="Monohibridare vs dihibridare", cols=["Criteriu", "Monohibridare", "Dihibridare"],
      rows=[["Perechi de caractere", "1", "2"], ["Gameți F1", "2 tipuri", "4 tipuri"], ["Combinații F2", "4", "16"], ["Raport fenotipic F2", "3:1", "9:3:3:1"]]),
],
)
