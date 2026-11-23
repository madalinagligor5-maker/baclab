from lib import *

CH = dict(
meta=dict(id="A20", title="Reproducerea la plante: floare, fecundație, sămânță, fruct", module="A",
  sources=["Fișe sinteză 2012, p.43–44"],
  concepts=["reproducere asexuată: spori, vegetativă (stolon, rizom, bulb, tubercul, butași, marcote, altoi)", "floare: peduncul, receptacul, caliciu, corolă, androceu (stamine), gineceu (carpele, pistil)",
            "sac embrionar: 7 nuclee", "dublă fecundație: zigot principal 2n, zigot accesoriu 3n", "sămânță: tegument, embrion, cotiledoane, endosperm", "fruct: cărnoase (drupă, bacă, poamă), uscate (nucă, achenă, cariopsă, păstaie, capsulă)"],
  bac_slots=["I.A", "I.B", "I.C", "I.D", "III.1"], prereq=["A03", "A02"], big_ideas=["informație genetică", "structură–funcție"]),

gr=[
 G("Androceu", "Androceul florii angiospermelor este alcătuit din totalitatea:", ["carpelelor", "staminelor", "sepalelor", "petalelor"], 1,
   "Stamina = filament + anteră; gineceul = carpele (pistil: ovar, stil, stigmat).", {0: "M36", 2: "M36", 3: "M36"}, "C", 1, "Subiect bac 2025 I.D.2; fișe p.43"),
 G("Gineceu", "Gineceul florii este format din:", ["stamine", "carpele", "sepale", "petale"], 1,
   "Pistilul: ovar, stil, stigmat.", {0: "M36", 2: "M36", 3: "M36"}, "C", 1, "Fișe p.43–44"),
 G("Sac embrionar", "Sacul embrionar are:", ["4 nuclee", "7 nuclee", "2 nuclee", "9 nuclee"], 1,
   "Șase sunt haploide (din care oosfera) și unul diploid (nucleul secundar).", {0: "M36", 2: "M36", 3: "M36"}, "C", 2, "Fișe p.44"),
 G("Fecundația", "Prin dubla fecundație la angiosperme se formează:", ["doi zigoți diploizi", "un zigot principal 2n și un zigot accesoriu 3n", "doi zigoți triploizi", "un zigot haploid"], 1,
   "Spermatia + oosferă → zigot principal; a doua spermatie + nucleu diploid → zigot accesoriu (3n).", {0: "M36", 2: "M36", 3: "M36"}, "C", 2, "Fișe p.44"),
 G("Sămânța", "Din ovulul florii, după fecundație, se formează:", ["fructul", "sămânța", "polenul", "caliciul"], 1,
   "Fructul provine din ovar.", {0: "M36", 2: "M36", 3: "M36"}, "C", 1, "Fișe p.44"),
 G("Fructul", "Fructul se dezvoltă din:", ["ovul", "ovar", "stamină", "sepală"], 1,
   "Sămânța se dezvoltă din ovul.", {0: "M36", 2: "M36", 3: "M36"}, "C", 1, "Fișe p.44"),
 G("Albumen", "Endospermul (albumenul) se formează din:", ["zigotul principal", "zigotul accesoriu", "oosferă", "tegument"], 1,
   "Țesut nutritiv al seminței; celulă triploidă.", {0: "M36", 2: "M36", 3: "M36"}, "C", 3, "Fișe p.44"),
 G("Tipuri de fructe", "Este fruct cărnos de tip drupă:", ["mărul", "prunul (prună)", "fasolea", "grâul"], 1,
   "Drupe: prun, cireș, cais; bace: tomate, strugure; poame: măr, păr, gutui.", {0: "M36", 2: "M36", 3: "M36"}, "C", 2, "Fișe p.44"),
 G("Fructe uscate", "Păstaia este fruct uscat:", ["indehiscent", "dehiscent", "cărnos", "fals"], 1,
   "Dehiscente: păstaie (fasole), capsulă (mac); indehiscente: nucă, achenă, cariopsă.", {0: "M36", 2: "M36", 3: "M36"}, "C", 2, "Fișe p.44"),
 G("Reproducere vegetativă", "Tuberculul de cartof este:", ["tulpină subterană", "rădăcină", "frunză", "fruct"], 0,
   "Rizomul irisului; bulbul – lalea, ceapă; stolonul – căpșun.", {1: "M37", 2: "M37", 3: "M37"}, "C", 2, "Fișe p.43"),
 G("Stolon", "Stolonul este o:", ["tulpină târâtoare, caracteristică căpșunului", "tulpină subterană a cartofului", "rădăcină tuberizată", "frunză modificată"], 0,
   "Reproducerea asexuată vegetativă.", {1: "M37", 2: "M37", 3: "M37"}, "C", 2, "Fișe p.43"),
 G("Asexuată prin spori", "Reproducerea asexuată prin spori este întâlnită la:", ["gimnosperme", "mușchi și ferigi", "angiosperme", "mamifere"], 1,
   "Structuri specializate – spori.", {0: "M37", 2: "M37", 3: "M37"}, "C", 1, "Fișe p.43"),
 G("Cotiledoane", "Numărul de cotiledoane este:", ["2 la dicotiledonate și 1 la monocotiledonate", "1 la dicotiledonate și 2 la monocotiledonate", "2 la toate angiospermele", "0 la toate"], 0,
   "Cotiledoanele conțin substanțe de rezervă.", {1: "M10", 2: "M10", 3: "M10"}, "C", 1, "Fișe p.44"),
 G("Embrion", "Embrionul seminței este alcătuit din:", ["radiculă, hipocotil, gemulă", "tegument, endosperm", "ovar, stil, stigmat", "filament, anteră"], 0,
   "Va forma noua plăntuță.", {1: "M36", 2: "M36", 3: "M36"}, "C", 2, "Fișe p.44"),
],

af=[
 AF("Androceu", "Androceul florii angiospermelor este alcătuit din totalitatea carpelelor.", False, "Androceul florii angiospermelor este alcătuit din totalitatea staminelor.", "Carpelele formează gineceul.", "M36", src="Subiect bac 2025 I.D.2"),
 AF("Fruct", "Fructul se formează din ovarul florii după fecundație.", True, None, ""),
 AF("Endosperm", "Endospermul seminței provine din zigotul principal.", False, "Endospermul seminței provine din zigotul accesoriu.", "Zigotul principal formează embrionul.", "M36"),
 AF("Altoire", "Altoiul este un exemplu de reproducere sexuată.", False, "Altoiul este un exemplu de reproducere asexuată vegetativă.", "Nu implică fecundație.", "M37"),
 AF("Spermatii", "Spermatiile se formează în grăuncioarele de polen.", True, None, ""),
],

cp=[
 CP("Floare", "Gineceul este format din ............, iar androceul din ............ .", ["carpele", "stamine"], src="Model după simulare 2026 I.A"),
 CP("Fecundația", "Sămânța provine din ............ florii, iar fructul din ............ florii.", ["ovul", "ovar"]),
 CP("Stamină", "O stamină este formată din filament și ............ .", ["anteră"]),
],

ex=[
 EX("Reproducere vegetativă", "Dați două exemple de organe de reproducere asexuată vegetativă; scrieți câte un exemplu de plantă.",
    [("stolon", "căpșun, fragi"), ("rizom", "iris"), ("bulb", "lalea, ceapă"), ("tubercul", "cartof")]),
 EX("Fructe", "Dați două exemple de tipuri de fructe cărnoase; scrieți câte un exemplu de plantă.",
    [("drupa", "prun, cireș, cais"), ("baca", "tomată, strugure"), ("poama", "măr, păr, gutui")]),
],

st=[
 ST("Floare", "III.1.b", "Explicați de ce floarea este organul reproducerii sexuate la spermatofite.",
    "Floarea conține organele reproducătoare: staminele (care formează grăuncioarele de polen cu spermatiile) și carpelele (cu ovule care conțin sacul embrionar cu oosfera); prin fecundație se formează zigotul.",
    ["stamine → spermatii", "ovule → oosferă", "fecundație → zigot"], "U", 2),
 ST("Sămânța", "III.2.b", "Precizați părțile componente ale unei semințe de angiosperme.",
    "Tegument, embrion (radiculă, hipocotil, gemulă), cotiledoane și, la unele semințe, endosperm (albumen).", ["tegument", "embrion", "cotiledoane"], "C", 2),
],

en=[
 EN("Reproducere la plante", "Construiți patru enunțuri afirmative, câte două pentru fiecare conținut: androceul; fructul.",
    ["Androceul", "Fructul"],
    ["Androceul este totalitatea staminelor florii.", "O stamină este formată din filament și anteră.",
     "Fructul se dezvoltă din ovarul florii după fecundație.", "Fructele pot fi cărnoase sau uscate."]),
],

me=[
 ME("Fecundația la angiosperme", "Fecundația la angiosperme", ["floare", "polen", "ovul", "zigot", "sămânță", "fruct"],
    "Floarea este organul reproducerii sexuate al angiospermelor, iar grăuncioarele de polen formează gameții bărbătești. În ovul are loc fecundația, din care rezultă zigotul. După fecundație ovulul devine sămânță, iar ovarul devine fruct."),
],

gl=[
 ("androceu", "Totalitatea staminelor."),
 ("gineceu", "Totalitatea carpelelor; pistil: ovar, stil, stigmat."),
 ("stamină", "Filament + anteră (cu polen)."),
 ("spermatie", "Gamet bărbătesc din grăuncior de polen."),
 ("oosferă", "Gametul femeiesc din sacul embrionar."),
 ("sac embrionar", "Structură din ovul cu 7 nuclee."),
 ("zigot principal", "Celulă 2n din care se dezvoltă embrionul."),
 ("zigot accesoriu", "Celulă 3n din care se formează endospermul."),
 ("endosperm (albumen)", "Țesut nutritiv al seminței."),
 ("cotiledon", "Frunză embrionară cu substanțe de rezervă; 1 sau 2."),
 ("drupă / baca / poamă", "Fructe cărnoase: prună; tomată; măr."),
 ("achenă / cariopsă / nucă", "Fructe uscate indehiscente."),
 ("păstaie / capsulă", "Fructe uscate dehiscente."),
 ("stolon", "Tulpină târâtoare (căpșun)."),
 ("rizom", "Tulpină subterană (iris)."),
 ("altoi", "Fragment de ramură atașat unui portaltoi."),
],

cd=[
 ("Din ce se formează sămânța? Dar fructul?", "Sămânța din ovul; fructul din ovar."),
 ("Ce este androceul / gineceul?", "Stamine / carpele."),
 ("Ce formează zigotul principal / accesoriu?", "Embrionul / endospermul."),
 ("Exemple de reproducere vegetativă?", "Stolon (căpșun), rizom (iris), bulb (lalea), tubercul (cartof), butași, marcote, altoi."),
 ("Exemple de fructe: drupă, bacă, poamă, păstaie, capsulă?", "Prun, tomată, măr, fasole, mac."),
],

cmp=[
 dict(title="Androceu vs gineceu", cols=["Criteriu", "Androceu", "Gineceu"],
      rows=[["Componente", "stamine (filament + anteră)", "carpele; pistil (ovar, stil, stigmat)"], ["Gameți", "spermatii (în polen)", "oosferă (în sacul embrionar)"], ["După fecundație", "—", "ovul → sămânță; ovar → fruct"]]),
],
)
