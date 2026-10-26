// Generează public/content/bank.json — banca de pornire (itemi scriși de autor, nevalidați de un specialist).
// Banca completă (623 itemi) se importă din out/banca_itemi.json cu `npm run content:import`.
import { writeFileSync } from "node:fs";

const items = [];
let n = {};
const id = (ch, k) => `${ch}-${k}${String(n[ch + k] = (n[ch + k] ?? 0) + 1).padStart(2, "0")}`;
const G = (ch, slot, q, options, correct, explanation, wrongWhy, difficulty = 2, level = "U") =>
  items.push({ id: id(ch, "SG"), chapter: ch, type: "grila", slot, q, options, correct, explanation,
    wrong_why: options.map((_, i) => (i === correct ? null : wrongWhy[i] ?? null)), level, difficulty, source: "seed-autor", validated: false });
const AF = (ch, slot, q, truth, correction, explanation, difficulty = 1) =>
  items.push({ id: id(ch, "SA"), chapter: ch, type: "adevarat_fals", slot, q, truth, ...(truth ? {} : { correction }), explanation, level: "U", difficulty, source: "seed-autor", validated: false });

// A01 Celula
G("A01","I.C","Care dintre organitele celulare este sediul sintezei proteinelor?",["Lizozomii","Ribozomii","Aparatul Golgi","Centrozomul"],1,"Ribozomii, liberi sau atașați reticulului endoplasmatic rugos, sintetizează proteinele.",{0:"Lizozomii conțin enzime hidrolitice și realizează digestia intracelulară.",2:"Aparatul Golgi modifică, sortează și secretă produse; nu sintetizează proteine.",3:"Centrozomul organizează fusul de diviziune."},1,"C");
G("A01","I.C","Peretele celular de natură celulozică se găsește la:",["celula animală","celula vegetală","toate celulele eucariote","bacteriile (are aceeași compoziție)"],1,"Celuloza este componenta peretelui celulei vegetale. Celula animală nu are perete.",{0:"Celula animală nu are perete celular.",2:"Fungii au perete chitinos, celula animală nu are perete.",3:"Peretele bacterian conține peptidoglican, nu celuloză."},1,"C");
G("A01","I.C","Mitocondriile sunt organite în care are loc:",["fotosinteza","respirația celulară aerobă","sinteza lipidelor din membrană","digestia intracelulară"],1,"În mitocondrii se desfășoară etapele aerobe ale respirației celulare, cu producere de ATP.",{0:"Fotosinteza are loc în cloroplaste.",2:"Sinteza lipidelor are loc în reticulul endoplasmatic neted.",3:"Digestia intracelulară este realizată de lizozomi."},1,"C");
AF("A01","I.D","Celula procariotă are nucleu delimitat de membrană nucleară.",false,"Celula procariotă nu are nucleu delimitat de membrană nucleară; materialul genetic este în citoplasmă.","Procariotele (bacteriile) au nucleoid, nu nucleu adevărat.");
AF("A01","I.D","Membrana plasmatică are permeabilitate selectivă.",true,undefined,"Membrana controlează ce intră și ce iese din celulă.");

// A02 Diviziunea
G("A02","I.C","Numărul de cromozomi al celulelor rezultate prin meioză, față de celula inițială, este:",["dublu","același","redus la jumătate","triplu"],2,"Meioza este diviziune reducțională: din celula 2n rezultă patru celule n.",{0:"Dublarea nu are loc la diviziune; replicarea ADN-ului are loc în interfază.",1:"Numărul rămâne același în mitoză, nu în meioză.",3:"Nicio diviziune nu triplează numărul de cromozomi."},1,"C");
G("A02","I.C","Mitoza dintr-o celulă 2n = 46 produce:",["2 celule cu 23 de cromozomi","2 celule cu 46 de cromozomi","4 celule cu 23 de cromozomi","4 celule cu 46 de cromozomi"],1,"Mitoza dă două celule fiice identice genetic cu cea mamă, deci tot cu 46 de cromozomi.",{0:"23 de cromozomi rezultă prin meioză (gameți).",2:"Patru celule cu 23 de cromozomi rezultă prin meioză.",3:"Mitoza dă două celule, nu patru."},2,"A");
G("A02","I.C","Replicarea ADN-ului are loc în:",["profază","metafază","faza S a interfazei","telofază"],2,"ADN-ul se dublează în faza S a interfazei, înainte de diviziune.",{0:"În profază cromatina se condensează; ADN-ul era deja replicat.",1:"În metafază cromozomii se aliniază la ecuator.",3:"În telofază se reconstituie învelișul nuclear."},2,"C");
AF("A02","I.D","Prin meioză se formează celule somatice.",false,"Prin meioză se formează celule sexuale (gameți) sau spori, cu număr redus de cromozomi.","Celulele somatice se înmulțesc prin mitoză.");

// A06 Fotosinteza
G("A06","I.C","Oxigenul eliberat în fotosinteză provine din:",["dioxidul de carbon","apă","glucoză","clorofilă"],1,"Oxigenul rezultă din fotoliza apei, în faza luminoasă.",{0:"Carbonul din CO2 intră în glucoză.",2:"Glucoza este produsul fotosintezei, nu sursa de oxigen eliberat.",3:"Clorofila captează lumina, nu este sursa oxigenului."},2,"C");
G("A06","I.C","Faza de întuneric a fotosintezei are loc:",["în tilacoide","în stroma cloroplastului","în mitocondrii","în citoplasmă, la animale"],1,"Reacțiile independente de lumină (ciclul Calvin) au loc în stroma cloroplastului.",{0:"În tilacoide are loc faza luminoasă.",2:"Mitocondriile realizează respirația.",3:"Fotosinteza este specifică organismelor autotrofe fotosintetizante."},2,"C");
G("A06","I.C","Care este ecuația globală corectă a fotosintezei?",["6CO2 + 6H2O → C6H12O6 + 6O2","C6H12O6 + 6O2 → 6CO2 + 6H2O","6CO2 + 6O2 → C6H12O6 + 6H2O","6H2O → 6O2 + C6H12O6"],0,"Din dioxid de carbon și apă, cu energie luminoasă, rezultă glucoză și oxigen.",{1:"Aceasta este ecuația respirației aerobe.",2:"Oxigenul nu este reactant în fotosinteză.",3:"Lipsește CO2, sursa de carbon."},2,"C");
AF("A06","I.D","Clorofila absoarbe cel mai puțin lumina verde.",true,undefined,"Clorofila absoarbe lumina roșie și albastră; cea verde o reflectă, de aceea frunzele sunt verzi.",2);

// A08 Digestia
G("A08","I.C","Absorbția principală a nutrienților la om are loc în:",["stomac","intestinul subțire","intestinul gros","esofag"],1,"Intestinul subțire are vilozități intestinale, care măresc suprafața de absorbție.",{0:"În stomac se absorb doar puține substanțe (apă, alcool).",2:"În intestinul gros se absoarbe în principal apa.",3:"Esofagul doar conduce bolul alimentar."},1,"C");
G("A08","I.C","Bila este produsă de:",["pancreas","vezicula biliară","ficat","stomac"],2,"Bila este secretată de ficat și stocată în vezicula biliară.",{0:"Pancreasul produce suc pancreatic.",1:"Vezicula biliară doar depozitează și concentrează bila.",3:"Stomacul produce suc gastric."},2,"C");
G("A08","I.C","Enzima din saliva care începe digestia amidonului este:",["pepsina","amilaza salivară","lipaza","tripsina"],1,"Amilaza salivară (ptialina) descompune amidonul în maltoză.",{0:"Pepsina digeră proteinele în stomac.",2:"Lipaza digeră lipidele.",3:"Tripsina digeră proteinele în intestinul subțire."},2,"C");
AF("A08","I.D","Digestia proteinelor începe în stomac.",true,undefined,"Pepsina, activă în mediul acid, începe digestia proteinelor.");

// A09 Respirația
G("A09","I.C","Fermentația alcoolică produce:",["acid lactic și CO2","etanol și CO2","apă și CO2","acid acetic și apă"],1,"Drojdiile transformă glucoza în etanol și dioxid de carbon.",{0:"Acidul lactic se formează în fermentația lactică.",2:"Apa și CO2 rezultă din respirația aerobă.",3:"Acidul acetic apare în fermentația acetică, care este aerobă."},2,"C");
G("A09","I.C","Câte molecule de ATP se formează net în glicoliză dintr-o moleculă de glucoză?",["2","4","36","38"],0,"Glicoliza dă net 2 ATP (se produc 4, se consumă 2).",{1:"4 ATP sunt produși brut; 2 se consumă.",2:"Aproximativ 36 ATP sunt în total la respirația aerobă, nu în glicoliză.",3:"38 este o valoare uneori citată pentru bilanțul total aerob."},3,"C");

// A10 Respirația la mamifere
G("A10","I.C","Schimbul de gaze între aer și sânge are loc la nivelul:",["bronhiilor","traheei","alveolelor pulmonare","laringelui"],2,"Alveolele au pereți subțiri și o rețea densă de capilare.",{0:"Bronhiile conduc aerul.",1:"Traheea este cale de conducere.",3:"Laringele conține corzile vocale."},1,"C");
G("A10","I.C","În inspirația normală:",["diafragmul se relaxează","volumul cutiei toracice scade","diafragmul se contractă și se coboară","aerul iese din plămâni"],2,"Contracția diafragmului și a mușchilor intercostali mărește volumul toracic, iar aerul intră.",{0:"Relaxarea diafragmului este caracteristică expirației.",1:"Volumul toracic crește la inspirație.",3:"Aerul iese în expirație."},2,"U");
AF("A10","I.D","Schimbul de gaze în alveole se face prin difuzie.",true,undefined,"Gazele trec după gradientul de concentrație, fără consum de energie.");

// A12 Sângele
G("A12","I.C","Transportul oxigenului în sânge este realizat în principal de:",["leucocite","trombocite","hemoglobina din hematii","plasma, dizolvat în totalitate"],2,"Hemoglobina leagă oxigenul formând oxihemoglobina.",{0:"Leucocitele au rol imunitar.",1:"Trombocitele participă la coagulare.",3:"Doar o mică parte din oxigen este dizolvat în plasmă."},1,"C");
G("A12","I.C","Plasma sangvină conține aproximativ:",["10% apă","55% apă","90% apă","99% proteine"],2,"Plasma este formată din circa 90% apă, 8% proteine și circa 2% alte substanțe.",{0:"Plasma este în mare parte apă.",1:"55% este proporția plasmei din volumul sângelui, nu proporția apei din plasmă.",3:"Proteinele sunt circa 7–8%."},2,"C");
G("A12","I.C","Un individ cu grupa sanguină AB (Rh pozitiv) poate primi, ca primitor universal, sânge de la:",["doar grupa AB","doar grupa O","orice grupă ABO, cu Rh pozitiv sau negativ","doar grupa A"],2,"AB Rh+ nu are aglutinine anti-A, anti-B, anti-Rh, deci tolerează toate grupele (în transfuzia de hematii).",{0:"AB poate primi și de la alte grupe.",1:"Nu doar de la O.",3:"Nu doar de la A."},3,"A");
AF("A12","I.D","Trombocitele sunt implicate în coagularea sângelui.",true,undefined,"Trombocitele formează dopul plachetar și eliberează factori ai coagulării.");

// A13 Circulația
G("A13","I.C","Sângele oxigenat ajunge în atriul stâng prin:",["artera pulmonară","venele pulmonare","vena cavă superioară","aorta"],1,"Venele pulmonare aduc sânge oxigenat din plămâni în atriul stâng.",{0:"Artera pulmonară duce sânge neoxigenat spre plămâni.",2:"Vena cavă superioară se varsă în atriul drept.",3:"Aorta pleacă din ventriculul stâng."},2,"C");
G("A13","I.C","Valvula bicuspidă (mitrală) se află între:",["atriul drept și ventriculul drept","atriul stâng și ventriculul stâng","ventriculul stâng și aortă","ventriculul drept și artera pulmonară"],1,"Valvula mitrală separă atriul stâng de ventriculul stâng.",{0:"Aici se află valvula tricuspidă.",2:"Aici se află valvulele sigmoide aortice.",3:"Aici se află valvulele sigmoide pulmonare."},2,"C");
G("A13","I.C","Circulația mică (pulmonară) începe în:",["ventriculul stâng","atriul drept","ventriculul drept","atriul stâng"],2,"Ventriculul drept trimite sângele neoxigenat prin artera pulmonară spre plămâni.",{0:"Din ventriculul stâng pleacă circulația mare.",1:"Atriul drept primește sângele din circulația mare.",3:"Atriul stâng primește sângele de la plămâni."},2,"C");
AF("A13","I.D","Arterele transportă întotdeauna sânge bogat în oxigen.",false,"Arterele transportă sânge de la inimă spre organe; artera pulmonară transportă sânge sărac în oxigen.","Criteriul este sensul față de inimă, nu oxigenarea.",2);

// A15 Excreția
G("A15","I.C","Unitatea structurală și funcțională a rinichiului este:",["nefronul","alveola","neuronul","sarcomerul"],0,"Nefronul filtrează sângele și formează urina.",{1:"Alveola aparține plămânului.",2:"Neuronul aparține sistemului nervos.",3:"Sarcomerul este unitatea contractilă a mușchiului."},1,"C");
G("A15","I.C","Formarea urinii primare are loc prin:",["reabsorbție tubulară","secreție tubulară","filtrare glomerulară","absorbție intestinală"],2,"La nivelul glomerulului, plasma este filtrată în capsula Bowman.",{0:"Reabsorbția are loc în tubul urinifer, după filtrare.",1:"Secreția adaugă substanțe în urină, după filtrare.",3:"Absorbția intestinală aparține digestiei."},2,"C");

// A14 Excreția la plante
G("A14","I.C","Stomatele reglează:",["numai absorbția apei","schimbul de gaze și transpirația","fotosinteza în rădăcină","depozitarea amidonului"],1,"Prin stomate se elimină vapori de apă și se schimbă gaze.",{0:"Apa se absoarbe prin perișorii absorbanți.",2:"Rădăcina nu realizează fotosinteza.",3:"Amidonul se depozitează în organite specializate."},1,"C");

// A18 SNC
G("A18","I.C","Centrul respirației și al activității cardiace se află în:",["scoarța cerebrală","bulbul rahidian","cerebel","hipotalamus"],1,"Bulbul rahidian conține centri vitali.",{0:"Scoarța cerebrală coordonează funcții superioare.",2:"Cerebelul coordonează echilibrul și mișcările.",3:"Hipotalamusul reglează homeostazia și legătura cu hipofiza."},2,"C");
G("A18","I.C","Arcul reflex simplu NU conține:",["receptor","neuron senzitiv","centru nervos","glandă endocrină"],3,"Arcul reflex: receptor, cale aferentă, centru, cale eferentă, efector.",{0:"Receptorul este primul element.",1:"Neuronul senzitiv conduce spre centru.",2:"Centrul nervos integrează răspunsul."},2,"U");

// A19 Organe de simț
G("A19","I.C","Miopia se corectează cu lentile:",["convergente","divergente","cilindrice exclusiv","prismatice"],1,"În miopie imaginea se formează înaintea retinei; lentilele divergente o deplasează înapoi.",{0:"Lentilele convergente corectează hipermetropia.",2:"Cilindrice corectează astigmatismul.",3:"Prismatice corectează tulburări de aliniere a ochilor."},2,"U");
G("A19","I.C","Celulele cu conuri din retină sunt responsabile de:",["vederea nocturnă","vederea cromatică și acuitatea vizuală","reglarea cantității de lumină","echilibru"],1,"Conurile funcționează la lumină intensă și detectează culorile.",{0:"Vederea nocturnă este realizată de bastonașe.",2:"Reglarea cantității de lumină o face irisul.",3:"Echilibrul ține de urechea internă."},2,"C");

// A20 Reproducerea la plante
G("A20","I.C","Fecundația dublă este caracteristică:",["gimnospermelor","angiospermelor","ferigilor","mușchilor"],1,"La angiosperme unul dintre gameții masculi fecundează oosfera, celălalt nucleul secundar al sacului embrionar.",{0:"Gimnospermele au fecundație simplă.",2:"Ferigile au fecundație simplă, în prezența apei.",3:"Mușchii au fecundație simplă, în prezența apei."},2,"C");
G("A20","I.C","Fructul se formează din:",["ovul","ovar","antera","sepale, în toate cazurile"],1,"Ovarul fecundat se transformă în fruct, ovulul în sămânță.",{0:"Ovulul devine sămânță.",2:"Antera produce polen.",3:"Sepalele fac parte din caliciu."},1,"C");

// A21 Reproducerea la om
G("A21","I.C","Fecundația la om are loc în mod normal în:",["uter","trompa uterină","vagin","ovar"],1,"Ovulul fecundat în treimea externă a trompei uterine ajunge apoi în uter pentru nidare.",{0:"În uter are loc nidarea și dezvoltarea.",2:"Vaginul este calea de acces a spermatozoizilor.",3:"Ovarul produce ovule."},2,"C");
G("A21","I.C","Care dintre următoarele boli se transmite pe cale sexuală?",["Gripa","Sifilisul","Tuberculoza","Hepatita A"],1,"Sifilisul este produs de Treponema pallidum, transmis prin contact sexual.",{0:"Gripa se transmite pe cale respiratorie.",2:"Tuberculoza se transmite pe cale aeriană.",3:"Hepatita A se transmite fecal-oral."},2,"C");

// A22 Genetică
G("A22","I.C","Din încrucișarea Aa × Aa raportul de segregare după fenotip este:",["1:1","3:1","1:2:1","9:3:3:1"],1,"Prin Aa × Aa rezultă AA, Aa, Aa, aa: 3 dominanți la 1 recesiv.",{0:"1:1 rezultă din Aa × aa.",2:"1:2:1 este raportul genotipic.",3:"9:3:3:1 este raportul dihibrid în F2."},1,"A");
G("A22","I.C","Un individ AaBb formează, prin segregare independentă, gameți de tipuri:",["2","3","4","16"],2,"AB, Ab, aB, ab — patru tipuri, în proporții egale.",{0:"2 tipuri ar forma un monohibrid.",1:"Nu există 3 tipuri la două gene independente.",3:"16 este numărul de căsuțe din pătratul Punnett."},2,"A");
G("A22","I.C","Un părinte cu grupa AB și unul cu grupa O pot avea copii cu grupele:",["AB și O","A și B","doar A","doar AB"],1,"Părinții AB (IAIB) și O (ii) dau copii IAi (A) sau IBi (B).",{0:"AB și O nu pot apărea, copilul primește i de la părintele O și IA/IB de la AB.",2:"Și B este posibil.",3:"AB ar necesita IA și IB de la același părinte O, imposibil."},3,"A");
G("A22","I.C","Încrucișarea de testare se face cu un individ:",["heterozigot","homozigot dominant","homozigot recesiv","din altă specie"],2,"Individul homozigot recesiv formează un singur tip de gamet, deci fenotipul descendenților arată gameții testați.",{0:"Heterozigotul ar complica interpretarea.",1:"Homozigotul dominant ar masca alelele recesive.",3:"Încrucișarea e intraspecifică."},2,"U");
AF("A22","I.D","Aa × aa dă un raport de segregare după fenotip de 1:1.",true,undefined,"Descendenții sunt Aa și aa în proporții egale.");
AF("A22","I.D","Genele alele ocupă locusuri diferite pe cromozomi omologi.",false,"Genele alele ocupă același locus pe cromozomi omologi.","Alelele sunt forme ale aceleiași gene.");

// A23
G("A23","I.C","La om, sexul genetic masculin este determinat de gonozomii:",["XX","XY","XO","YY"],1,"Bărbatul are XY, femeia XX.",{0:"XX este femeia.",2:"XO este sindromul Turner.",3:"Nu apare în mod normal."},1,"C");
G("A23","I.C","Trisomia 21 (sindromul Down) este o:",["mutație genică punctiformă","anomalie cromozomială numerică","anomalie cromozomială structurală","boală infecțioasă"],1,"Prezența unui cromozom 21 suplimentar (47 de cromozomi).",{0:"Mutația genică modifică o genă, nu numărul de cromozomi.",2:"Structurală înseamnă deleții, translocații etc.",3:"Nu este infecțioasă."},2,"C");
AF("A23","I.D","Hemofilia este o boală determinată de o genă recesivă legată de cromozomul X.",true,undefined,"De aceea este mai frecventă la bărbați (XY).",2);

// A03,A04,A05,A07,A11,A16,A17
G("A04","I.C","Țesutul vegetal format din celule care se divid activ este:",["parenchimul asimilator","meristemul","sclerenchimul","epiderma"],1,"Meristemele au celule nediferențiate care se divid.",{0:"Parenchimul asimilator realizează fotosinteza.",2:"Sclerenchimul are rol de susținere.",3:"Epiderma are rol de protecție."},1,"C");
G("A05","I.C","Țesutul osos aparține categoriei:",["țesut epitelial","țesut conjunctiv","țesut muscular","țesut nervos"],1,"Țesutul osos este un țesut conjunctiv de susținere.",{0:"Epiteliile acoperă suprafețe.",2:"Țesutul muscular se contractă.",3:"Țesutul nervos conduce influxul nervos."},1,"C");
G("A03","I.C","Taxonul de bază în clasificarea organismelor este:",["genul","specia","familia","clasa"],1,"Specia este unitatea fundamentală; numele ei este binomial.",{0:"Genul reunește specii înrudite.",2:"Familia reunește genuri.",3:"Clasa reunește ordine."},1,"C");
G("A07","I.C","Micorizele sunt asocieri simbiotice între:",["bacterii și plante leguminoase","fungi și rădăcinile plantelor","alge și fungi","insecte și plante"],1,"Fungii ajută absorbția apei și a sărurilor minerale, iar planta le oferă substanțe organice.",{0:"Aceasta este simbioza cu Rhizobium.",2:"Aceasta este lichenul.",3:"Nu este micoriză."},2,"C");
G("A11","I.C","Seva brută circulă prin:",["vasele liberiene","vasele lemnoase","stomate","parenchimul de depozit"],1,"Seva brută (apă și minerale) urcă prin xilem, vasele lemnoase.",{0:"Seva elaborată circulă prin vasele liberiene.",2:"Stomatele sunt deschideri.",3:"Parenchimul depozitează."},2,"C");
G("A16","I.C","Articulațiile mobile (diartrozele) permit:",["fixitate completă","mișcări largi","doar mișcări reduse","creșterea oaselor"],1,"Diartrozele (umăr, șold, genunchi) permit mișcări variate.",{0:"Fixitatea e caracteristică sinartrozelor.",2:"Amfiartrozele permit mișcări reduse.",3:"Creșterea oaselor ține de cartilajul de creștere."},2,"C");
G("A17","I.C","Mișcarea de închidere a frunzelor de mimoză la atingere este o:",["tropism","nastie","tactism","fotosinteză"],1,"Nastiile sunt mișcări a căror direcție nu depinde de direcția stimulului.",{0:"Tropismul depinde de direcția stimulului.",2:"Tactismul este o deplasare a organismului întreg.",3:"Fotosinteza nu este o mișcare."},2,"U");

writeFileSync("public/content/bank.json", JSON.stringify({ version: 1, note: "Banca de pornire (seed). Itemi scriși de autor, nevalidați de specialist.", items }, null, 1));
console.log(items.length, "itemi");
