from lib import *

CH = dict(
meta=dict(id="A14", title="Excreția la plante: transpirația, stomatele", module="A",
  sources=["Fișe sinteză 2012, p.21"],
  concepts=["substanțe eliminate: produși de dezasimilație, substanțe în exces, semnale chimice (nectar, arome)", "căi: transpirație și gutație", "transpirația prin cuticulă, stomate (masiv), lenticele",
            "stomata: celule reniforme, ostiolă, celule anexe; mecanism osmotic", "importanța transpirației"],
  bac_slots=["I.C", "I.D", "III.1.b"], prereq=["A04"], big_ideas=["homeostazie"]),

gr=[
 G("Transpirația", "Transpirația este procesul de eliminare a apei sub formă de:", ["picături", "vapori", "lichid biliar", "urină"], 1,
   "Se realizează prin cuticulă (redus), stomate (masiv) și lenticele.", {0: "M27", 2: "M27", 3: "M27"}, "C", 1, "Fișe p.21"),
 G("Stomatele", "Transpirația se realizează predominant prin:", ["rădăcină", "stomate", "vase liberiene", "cuticula tulpinii"], 1,
   "La nivelul frunzei, prin stomate (masiv) și cuticulă (redus); la tulpină, prin lenticele.", {0: "M27", 2: "M27", 3: "M27"}, "C", 1, "Fișe p.21"),
 G("Structura stomatei", "Stomata este formată din:", ["două celule epidermice reniforme care delimitează ostiola", "o celulă cu perete subțire fără ostiolă", "un singur vas lemnos", "celule de țesut asimilator"], 0,
   "Este înconjurată de celule anexe; deschiderea ostiolei se reglează osmotic.", {1: "M27", 2: "M27", 3: "M27"}, "C", 2, "Fișe p.21"),
 G("Stomate – lumină", "La lumină stomatele:", ["se închid", "se deschid prin creșterea gradului de hidratare a celulelor", "dispar", "devin lemnoase"], 1,
   "La întuneric se închid, ceea ce menține echilibrul hidric.", {0: "M27", 2: "M27", 3: "M27"}, "U", 2, "Fișe p.21"),
 G("Importanța transpirației", "Transpirația:", ["împiedică circulația sevei brute", "asigură ascensiunea sevei brute și previne supraîncălzirea", "oprește fotosinteza", "consumă oxigen"], 1,
   "Menține ostiolele deschise, asigurând circulația O2 și CO2.", {0: "M27", 2: "M27", 3: "M27"}, "U", 2, "Fișe p.21"),
 G("Lenticele", "Lenticelele se află la nivelul:", ["frunzei", "tulpinii", "rădăcinii", "florii"], 1,
   "Sunt căi de transpirație redusă.", {0: "M27", 2: "M27", 3: "M27"}, "C", 2, "Fișe p.21"),
 G("Frunza", "Particularitate a frunzei adaptată transpirației:", ["suprafață de evaporare mică", "epidermă cu numeroase stomate", "lipsa țesutului asimilator", "cuticulă foarte groasă"], 1,
   "Suprafață mare de evaporare, țesut asimilator cu spații intercelulare, epidermă cu stomate.", {0: "M27", 2: "M27", 3: "M27"}, "C", 2, "Fișe p.21"),
],

af=[
 AF("Stomate", "Stomatele sunt formate din două celule epidermice modificate, reniforme.", True, None, ""),
 AF("Stomate la întuneric", "La întuneric ostiolele stomatelor se deschid larg.", False, "La întuneric ostiolele stomatelor se închid.", "La lumină se deschid.", "M27"),
 AF("Transpirația", "Transpirația asigură ascensiunea sevei elaborate.", False, "Transpirația asigură ascensiunea sevei brute.", "Creează forța de sucțiune.", "M22"),
],

cp=[
 CP("Stomată", "Stomata delimitează un orificiu numit ............, prin care circulă apa sub formă de ............ .", ["ostiolă", "vapori"]),
],

ex=[
 EX("Căi de transpirație", "Dați două exemple de structuri prin care se realizează transpirația la plante; scrieți câte o caracteristică.",
    [("stomatele", "elimină masiv vapori de apă; sunt reglate osmotic"), ("lenticelele", "se află la tulpină; transpirație redusă"), ("cuticula", "transpirație în cantitate redusă")]),
],

st=[
 ST("Stomate", "III.1.b", "Explicați rolul stomatelor în realizarea transpirației la plante.",
    "Stomatele au o ostiolă prin care circulă vaporii de apă; la lumină ostiolele se deschid și apa este eliminată masiv sub formă de vapori, iar prin închiderea lor la întuneric se păstrează echilibrul hidric.",
    ["ostiola – calea vaporilor de apă", "deschidere la lumină / închidere la întuneric", "echilibrul hidric"], "U", 2, "Simulare 2026 III.1.b"),
 ST("Importanța transpirației", "III.1.b", "Precizați două roluri ale transpirației.",
    "Asigură ascensiunea sevei brute; împiedică supraîncălzirea plantei; menține ostiolele deschise pentru circulația gazelor.", ["două roluri corecte"], "C", 1, "Fișe p.21"),
],

en=[
 EN("Excreția la plante", "Construiți patru enunțuri afirmative, câte două pentru fiecare conținut: stomata; transpirația.",
    ["Stomata", "Transpirația"],
    ["Stomata este formată din două celule reniforme.", "Stomata delimitează un orificiu numit ostiolă.",
     "Transpirația este eliminarea apei sub formă de vapori.", "Transpirația previne supraîncălzirea plantei."]),
],

me=[
 ME("Transpirația", "Transpirația la plante", ["stomate", "ostiolă", "vapori de apă", "frunză", "sevă brută", "lenticele"],
    "Transpirația este eliminarea apei sub formă de vapori, în special prin stomatele frunzei. Stomata delimitează o ostiolă care se deschide la lumină. Procesul face ca seva brută să urce în plantă, iar la tulpină apa se elimină și prin lenticele."),
],

gl=[
 ("excreție", "Eliminarea din organism a produșilor de dezasimilație și a substanțelor în exces."),
 ("transpirație (la plante)", "Eliminarea apei sub formă de vapori, în special prin stomate."),
 ("gutație", "Cale de excreție la plante, alături de transpirație (definiție standard, eliminarea apei sub formă de picături)."),
 ("stomată", "Structură din două celule reniforme care delimitează ostiola."),
 ("ostiolă", "Orificiul stomatei prin care circulă gazele și vaporii."),
 ("lenticelă", "Structură a tulpinii prin care se elimină apa în cantitate redusă."),
 ("cuticulă", "Strat protector al epidermei; transpirație redusă."),
],

cd=[
 ("Prin ce căi se face excreția la plante?", "Transpirație și gutație."),
 ("Prin ce structuri se elimină vaporii de apă?", "Stomate (masiv), cuticulă (redus), lenticele (la tulpină)."),
 ("Când se deschid stomatele?", "La lumină, prin creșterea hidratării celulelor; la întuneric se închid."),
 ("Importanța transpirației?", "Ascensiunea sevei brute, prevenirea supraîncălzirii, circulația gazelor prin ostiole deschise."),
],

cmp=[],
)
