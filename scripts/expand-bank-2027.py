"""Author-curated expansion for B1. Idempotent; never asserts teacher validation.
Rows are original Romanian questions; OpenStax is a factual reference, not exam scope.
"""
import hashlib
import json
from pathlib import Path

DATA = {}

DATA['A01'] = {
'mcq': [
('Golgi', 'Ce organit modifică și sortează produsele destinate secreției celulare?', 'aparatul Golgi', ['centrozomul', 'nucleolul', 'peretele celular'], 'Aparatul Golgi prelucrează și sortează produse celulare, inclusiv pentru secreție.'),
('Reticul endoplasmatic', 'Reticulul endoplasmatic rugos se deosebește de cel neted prin prezența:', 'ribozomilor atașați', ['clorofilei', 'cromozomilor omologi', 'celulozei'], 'Aspectul rugos este dat de ribozomii atașați membranei reticulului.'),
('Digestie celulară', 'Organitele care conțin enzime implicate în digestia intracelulară sunt:', 'lizozomii', ['cloroplastele', 'centrozomii', 'nucleolii'], 'Lizozomii descompun materiale cu ajutorul enzimelor hidrolitice.'),
('Vacuolă', 'Într-o celulă vegetală matură, vacuola centrală contribuie la:', 'menținerea turgescenței', ['producerea gameților', 'organizarea cariotipului', 'formarea fusului de diviziune'], 'Conținutul vacuolei și apa acumulată contribuie la presiunea exercitată asupra peretelui celular.'),
('Plastide', 'Pigmenții carotenoizi care colorează unele fructe se pot acumula în:', 'cromoplaste', ['lizozomi', 'nucleoli', 'ribozomi'], 'Cromoplastele sunt plastide care acumulează pigmenți carotenoizi.'),
('Nucleu', 'Cromatina unei celule eucariote se găsește în principal în:', 'nucleu', ['peretele celular', 'vacuola centrală', 'spațiul extracelular'], 'Cromatina este materialul nuclear care conține ADN asociat cu proteine.'),
('Membrană', 'Modelul mozaicului fluid descrie organizarea:', 'membranei celulare', ['peretelui de celuloză', 'cromozomilor omologi', 'fusului de diviziune'], 'Membrana are un bistrat lipidic în care sunt asociate proteine; componentele au mobilitate.'),
('Comparație celulară', 'O structură prezentă atât în celulele bacteriene, cât și în cele vegetale este:', 'membrana plasmatică', ['nucleul delimitat de membrană', 'cloroplastul', 'aparatul Golgi'], 'Toate celulele au membrană plasmatică; bacteriile nu au nucleu delimitat și organite membranare eucariote.'),
],
'af': [
('Comparare', 'Celulele animale au perete celular de celuloză.', False, 'Celulele vegetale au perete celular de celuloză.', 'Peretele de celuloză este caracteristic celulelor vegetale, iar celulele animale nu au perete celular.'),
('Nucleol', 'Nucleolul participă la formarea subunităților ribozomale.', True, None, 'Nucleolul este implicat în producerea componentelor ribozomilor.'),
],
'open': [
('Completare', 'Completează: organitele fotosintezei sunt ..., iar organitele care sortează produsele celulare sunt ... .', ['cloroplastele', 'aparatul Golgi']),
('Comparație', 'Indică două deosebiri între o celulă bacteriană și o celulă vegetală fotosintetizantă tipică.', ['Celula bacteriană are nucleoid; celula vegetală tipică are nucleu delimitat de membrană.', 'Celula vegetală fotosintetizantă are cloroplaste; celula bacteriană nu are cloroplaste.']),
]}

DATA['A02'] = {
'mcq': [
('Metafază', 'În metafaza mitozei, cromozomii se dispun:', 'în planul ecuatorial al celulei', ['în vacuole', 'numai în nucleoli', 'în afara membranei celulare'], 'Dispunerea ecuatorială permite repartizarea cromatidelor către poli în etapa următoare.'),
('Anafază', 'În anafaza mitozei se separă:', 'cromatidele surori', ['numai nucleolii', 'perechile de celule-fiice deja formate', 'cele două membrane ale mitocondriei'], 'Cromatidele surori se separă și migrează spre poli opuși.'),
('Meioza I', 'La prima diviziune meiotică sunt separați în mod obișnuit:', 'cromozomii omologi', ['nucleolii de ribozomi', 'cromozomii de membrana celulară', 'cromatidele surori ale fiecărui cromozom'], 'Separarea omologilor reduce numărul seturilor cromozomiale; cromatidele surori rămân asociate la această etapă.'),
('Profaza I', 'Schimbul de segmente între cromatide nesurori ale cromozomilor omologi are loc în:', 'profaza I a meiozei', ['telofaza mitozei', 'interfaza de după meioza II', 'citokineza mitotică'], 'Crossing-overul se produce în profaza I, după asocierea cromozomilor omologi.'),
('Meioza II', 'A doua diviziune meiotică este numită ecvațională deoarece:', 'separă cromatidele fără o nouă înjumătățire a numărului de cromozomi pe celulă', ['dublează numărul de seturi cromozomiale', 'transformă toate celulele în diploide', 'este precedată obligatoriu de o nouă replicare a ADN-ului'], 'În meioza II se separă cromatidele surori; între meioza I și II nu are loc o nouă replicare a ADN-ului.'),
('Rol mitoză', 'Creșterea unui organism pluricelular este susținută prin:', 'diviziuni mitotice ale celulelor sale', ['fecundația fiecărei celule somatice', 'înjumătățirea permanentă a genomului tuturor celulelor', 'transformarea tuturor celulelor în gameți'], 'Mitoza produce celule care păstrează, în condiții normale, numărul de cromozomi al celulei-mamă.'),
('Fus de diviziune', 'Fusul de diviziune contribuie la:', 'deplasarea și repartizarea cromozomilor', ['sinteza celulozei', 'digestia alimentelor', 'captarea luminii în cloroplaste'], 'Fibrele fusului participă la repartizarea materialului cromozomial.'),
('Telofază', 'Refacerea învelișurilor nucleare în jurul seturilor de cromozomi este caracteristică:', 'telofazei', ['metafazei', 'fazei S', 'începutului anafazei'], 'În telofază se reorganizează nucleii celulelor-fiice.'),
],
'af': [
('Replicare', 'Între meioza I și meioza II se dublează din nou ADN-ul.', False, 'ADN-ul se dublează înaintea meiozei I, în faza S a interfazei.', 'Cele două diviziuni meiotice sunt precedate de o singură replicare a ADN-ului.'),
('Variabilitate', 'Meioza contribuie la variabilitatea genetică a descendenților.', True, None, 'Recombinarea și repartizarea cromozomilor generează combinații genetice diferite.'),
],
'open': [
('Completare', 'Completează: în mitoză se separă cromatidele surori în ..., iar cromozomii omologi se separă în ... meiozei.', ['anafază', 'anafaza I']),
('Aplicare', 'O celulă cu 2n = 16 finalizează o meioză obișnuită. Indică numărul celulelor rezultate și numărul de cromozomi al fiecăreia.', ['Patru celule haploide.', 'Fiecare are n = 8 cromozomi.']),
]}

DATA['A03'] = {
'mcq': [
('Nomenclatură', 'În nomenclatura binară, denumirea unei specii cuprinde:', 'numele genului și epitetul specific', ['numele regnului și al încrengăturii', 'numele ordinului și al clasei', 'două nume de familii'], 'Denumirea binară asociază genul cu epitetul specific, de exemplu Homo sapiens.'),
('Taxoni', 'În ierarhia taxonomică din programă, categoria situată imediat deasupra genului este:', 'familia', ['specia', 'regnul', 'clasa'], 'Ordinea este specie, gen, familie, ordin, clasă, încrengătură, regn.'),
('Virusuri', 'Ribovirusurile au ca material genetic:', 'ARN', ['numai proteine', 'celuloză', 'chitină'], 'Denumirea ribovirus se referă la genomul constituit din ARN.'),
('Fungi', 'O caracteristică generală a fungilor este:', 'nutriția heterotrofă', ['prezența obligatorie a cloroplastelor', 'fotosinteza ca unică nutriție', 'organizarea procariotă'], 'Fungii sunt organisme eucariote heterotrofe; nu au cloroplaste.'),
('Gimnosperme', 'La conifere, semințele sunt:', 'neînchise într-un fruct', ['închise în ovarul florii', 'formate numai în interiorul sporilor', 'produse de rădăcini'], 'Gimnospermele nu formează fructe care să închidă semințele.'),
('Artropode', 'Insectele se încadrează în grupul:', 'artropodelor', ['anelidelor', 'moluștelor', 'celenteratelor'], 'Insectele sunt artropode, caracterizate prin apendice articulate și exoschelet.'),
('Vertebrate', 'Respirația prin branhii, prezentă în mod caracteristic la adulți, este asociată cu:', 'peștii osoși', ['păsările', 'mamiferele placentare', 'reptilele terestre'], 'Peștii osoși realizează schimburile gazoase prin branhii.'),
('Biodiversitate', 'Protejarea unei specii în mediul ei natural presupune în primul rând:', 'conservarea habitatului acesteia', ['distrugerea locurilor sale de reproducere', 'capturarea tuturor indivizilor', 'eliminarea tuturor celorlalte specii din ecosistem'], 'Conservarea habitatului menține condițiile necesare populației în natură.'),
],
'af': [
('Organizare', 'Bacteriile sunt organisme eucariote.', False, 'Bacteriile sunt organisme procariote.', 'Bacteriile nu au nucleu delimitat de o membrană.'),
('Angiosperme', 'Monocotiledonatele și dicotiledonatele sunt grupe de angiosperme în clasificarea folosită de programa de examen.', True, None, 'Programa B1 menționează aceste două grupe la angiosperme; clasificările moderne pot folosi alte delimitări.'),
],
'open': [
('Completare', 'Completează: virusurile cu genom ADN sunt numite ..., iar cele cu genom ARN sunt numite ... .', ['adenovirusuri, în terminologia generală a programei', 'ribovirusuri']),
('Exemple', 'Dă două exemple de grupe de vertebrate din programă și câte o caracteristică pentru fiecare.', ['Păsări: corpul este acoperit cu pene.', 'Mamifere: femelele au glande mamare. Alte exemple corecte din programă sunt acceptabile.']),
]}

DATA['A04'] = {
'mcq': [
('Epiderma', 'Țesutul care acoperă și protejează suprafața organelor vegetale tinere este:', 'epiderma', ['țesutul osos', 'țesutul nervos', 'sângele'], 'Epiderma este un țesut vegetal de apărare.'),
('Asimilator', 'Un țesut vegetal bogat în cloroplaste are în principal rol:', 'asimilator', ['de transmitere a impulsurilor nervoase', 'de formare a anticorpilor', 'de contracție musculară'], 'Cloroplastele permit fotosinteza, caracteristică țesutului fundamental asimilator.'),
('Depozitare', 'În tuberculul de cartof, acumularea substanțelor de rezervă este asociată cu țesutul:', 'fundamental de depozitare', ['muscular striat', 'nervos', 'epitelial senzorial'], 'Țesuturile de depozitare acumulează substanțe de rezervă, precum amidonul.'),
('Xilem', 'Vasele lemnoase aparțin țesutului vegetal:', 'conducător', ['muscular', 'epitelial glandular', 'nervos'], 'Vasele lemnoase sunt elemente ale țesutului conducător care transportă seva brută.'),
('Floem', 'Vasele liberiene sunt specializate în transportul:', 'sevei elaborate', ['impulsurilor nervoase', 'sângelui', 'urinei'], 'Seva elaborată conține produși organici ai fotosintezei și circulă prin țesutul liberian.'),
('Meristem apical', 'Meristemele apicale se află în principal:', 'la vârfurile rădăcinilor și tulpinilor', ['în alveolele pulmonare', 'în tendoane', 'în interiorul vaselor de sânge'], 'Meristemele apicale asigură creșterea în lungime a rădăcinii și tulpinii.'),
('Meristem intercalar', 'Creșterea unor internoduri la graminee este susținută de meristeme:', 'intercalare', ['nervoase', 'osoase', 'sangvine'], 'Meristemele intercalare se află între țesuturi diferențiate, de exemplu la baza unor internoduri.'),
('Secreție', 'Țesuturile vegetale care produc și eliberează substanțe precum uleiurile volatile sunt:', 'secretoare', ['musculare netede', 'osoase compacte', 'nervoase centrale'], 'Țesuturile secretoare produc sau acumulează substanțe specifice.'),
],
'af': [
('Diferențiere', 'Țesuturile vegetale definitive au toate aceeași funcție.', False, 'Țesuturile vegetale definitive îndeplinesc funcții diferite, precum apărarea, conducerea și depozitarea.', 'Diferențierea celulară permite specializarea funcțională a țesuturilor.'),
('Creștere', 'Meristemele primare contribuie la creșterea în lungime a plantelor.', True, None, 'Meristemele primare includ meristemele apicale și intercalare.'),
],
'open': [
('Completare', 'Completează: epiderma este un țesut de ..., iar parenchimul asimilator este un țesut fundamental implicat în ... .', ['apărare', 'fotosinteză']),
('Exemple', 'Numește două țesuturi vegetale definitive și precizează câte un rol.', ['Țesut conducător: transportul sevelor.', 'Țesut fundamental de depozitare: acumularea substanțelor de rezervă. Se acceptă și alte exemple corecte.']),
]}

DATA['A05'] = {
'mcq': [
('Epitelii', 'Țesutul care acoperă suprafețe ale corpului și căptușește cavități este:', 'epitelial', ['osos', 'cartilaginos', 'muscular striat'], 'Epiteliile de acoperire formează învelișuri și căptușeli.'),
('Glande', 'O glandă exocrină își elimină produsul de secreție:', 'printr-un canal spre o suprafață sau o cavitate', ['obligatoriu direct în sânge', 'numai în nucleul celulei', 'numai în cromozomi'], 'Glandele exocrine au căi de eliminare; cele endocrine eliberează hormonii în mediul intern.'),
('Cartilaj', 'Cartilajul este un țesut conjunctiv:', 'semidur', ['epitelial', 'muscular', 'nervos'], 'În clasificarea școlară, țesuturile conjunctive semidure sunt cartilaginoase.'),
('Adipos', 'Depozitarea lipidelor este o funcție importantă a țesutului:', 'adipos', ['epitelial senzorial', 'nervos', 'osos compact'], 'Adipocitele acumulează lipide, contribuind și la protecție și izolare.'),
('Musculatură scheletică', 'Mișcarea voluntară a membrelor implică în principal țesut muscular:', 'striat scheletic', ['neted din peretele intestinului', 'striat cardiac', 'epitelial'], 'Mușchii scheletici se atașează de schelet și participă la mișcările voluntare.'),
('Mușchi neted', 'Peretele unor organe interne, precum intestinul, conține țesut muscular:', 'neted', ['osos', 'cartilaginos', 'epitelial senzorial'], 'Musculatura netedă produce contracții involuntare în pereții unor organe interne.'),
('Neuron', 'Celula specializată în recepția și transmiterea informației nervoase este:', 'neuronul', ['adipocitul', 'hematia matură', 'celula osoasă'], 'Neuronii generează și conduc semnale nervoase.'),
('Glie', 'Celulele gliale aparțin țesutului:', 'nervos', ['cartilaginos', 'osos', 'epitelial glandular'], 'Celulele gliale îndeplinesc roluri de susținere și protecție în țesutul nervos.'),
],
'af': [
('Sânge', 'Sângele este un țesut muscular lichid.', False, 'Sângele este un țesut conjunctiv lichid.', 'Matricea extracelulară lichidă a sângelui este plasma.'),
('Miocard', 'Țesutul muscular cardiac este striat și are contracție involuntară.', True, None, 'Striațiile nu implică automat control voluntar; miocardul se contractă involuntar.'),
],
'open': [
('Completare', 'Completează: țesutul osos compact și cel osos spongios sunt varietăți de țesut ..., iar neuronul aparține țesutului ... .', ['conjunctiv dur', 'nervos']),
('Exemple', 'Dă două exemple de țesuturi animale și leagă fiecare exemplu de o funcție.', ['Țesut muscular: contracție și producerea mișcării.', 'Țesut epitelial de acoperire: protecție și delimitare. Alte asocieri corecte sunt acceptabile.']),
]}

DATA['A06'] = {
'mcq': [
('Localizare', 'În frunza unei plante verzi, fotosinteza are loc în principal în celulele:', 'bogate în cloroplaste', ['lipsite de orice plastide', 'care formează numai vasele lemnoase mature', 'fără citoplasmă'], 'Țesutul asimilator al frunzei conține numeroase cloroplaste.'),
('Substrat', 'Carbonul din substanțele organice produse prin fotosinteză provine în principal din:', 'dioxidul de carbon', ['oxigenul molecular', 'azotul molecular', 'vaporii de apă'], 'Planta folosește dioxid de carbon pentru a forma compuși organici.'),
('Energie', 'În fotosinteză, energia luminoasă este transformată în:', 'energie chimică stocată în compuși organici', ['energie nucleară', 'energie numai mecanică', 'energie electrică transmisă prin neuroni'], 'Produșii organici ai fotosintezei stochează energie chimică.'),
('Pigmenți', 'Clorofila a și clorofila b sunt:', 'pigmenți asimilatori', ['enzime digestive salivare', 'hormoni tiroidieni', 'proteine ale sângelui'], 'Clorofilele absorb lumină utilizată în fotosinteză.'),
('Evidențiere', 'Formarea amidonului într-o frunză poate fi evidențiată cu:', 'soluție de iod', ['apă distilată, ca reactiv specific', 'ulei alimentar, ca reactiv specific', 'ser fiziologic, ca reactiv specific'], 'Iodul colorează amidonul albastru-închis; frunza trebuie pregătită corespunzător pentru observarea rezultatului.'),
('Experiență', 'Într-un experiment cu o plantă acvatică luminată, gazul eliberat în fotosinteză este în principal:', 'oxigen', ['azot', 'hidrogen', 'metan'], 'Degajarea oxigenului este una dintre modalitățile de evidențiere a fotosintezei.'),
('Factori', 'Dacă lumina este factorul limitant, creșterea iluminării până la un anumit nivel poate:', 'mări intensitatea fotosintezei', ['opri obligatoriu fotosinteza', 'transforma frunza în rădăcină', 'elimina necesitatea dioxidului de carbon'], 'Lumina influențează fotosinteza, dar răspunsul depinde și de ceilalți factori și nu crește nelimitat.'),
('Importanță', 'Un rol major al fotosintezei în ecosisteme este:', 'producerea materiei organice care susține lanțurile trofice', ['eliminarea completă a respirației', 'formarea directă a tuturor rocilor', 'transformarea tuturor organismelor în autotrofe'], 'Organismele fotosintetizante introduc energie în multe lanțuri trofice sub formă de materie organică.'),
],
'af': [
('Condiții', 'Plantele pot realiza fotosinteza fără o sursă de energie luminoasă, în orice condiții.', False, 'Fotosinteza plantelor utilizează energia luminoasă.', 'Etapele fotosintezei depind direct sau indirect de energia captată din lumină.'),
('Produși', 'În fotosinteza oxigenică, se formează substanțe organice și se eliberează oxigen.', True, None, 'Acești produși sunt exprimați și de ecuația globală simplificată a fotosintezei.'),
],
'open': [
('Completare', 'Completează: fotosinteza consumă dioxid de ... și apă și eliberează ... .', ['carbon', 'oxigen']),
('Investigație', 'Indică două observații care pot evidenția fotosinteza într-un experiment controlat.', ['Eliberarea de oxigen de către o plantă acvatică luminată.', 'Acumularea de amidon în porțiunile luminate ale unei frunze, evidențiată cu iod, folosind martori adecvați.']),
]}

DATA['A07'] = {
'mcq': [
('Saprofit', 'O ciupercă saprofită își procură substanțele organice în principal din:', 'materie organică moartă', ['dioxid de carbon prin fotosinteză', 'numai apă și săruri', 'energie luminoasă fără sursă de carbon'], 'Saprofitele folosesc materia organică provenită din organisme moarte sau din resturile acestora.'),
('Parazit', 'Un organism parazit se hrănește pe seama:', 'unei gazde vii, pe care o poate afecta', ['exclusiv rocilor', 'numai luminii', 'doar materiei organice moarte'], 'Parazitul obține resurse de la o gazdă vie, relația fiind defavorabilă gazdei.'),
('Plantă parazită', 'Cuscuta este un exemplu de plantă care prezintă:', 'nutriție parazită', ['nutriție exclusiv fotosintetică prin frunze verzi dezvoltate', 'digestie intracelulară ca la amibă', 'nutriție saprofită obligatorie pe lemn mort'], 'Cuscuta se fixează pe plante-gazdă și preia resurse cu ajutorul haustorilor.'),
('Lichen fotosinteză', 'Într-un lichen, producerea de substanțe organice prin fotosinteză revine:', 'partenerului fotosintetizant', ['exclusiv hifelor ciupercii', 'numai particulelor minerale', 'capsidei virale'], 'Alga sau cianobacteria din asociere poate produce substanțe organice prin fotosinteză.'),
('Lichen fung', 'Partenerul fungic al unui lichen contribuie la:', 'aprovizionarea cu apă și săruri și protecția asocierii', ['producerea clorofilei în hife', 'formarea sângelui', 'producerea gameților umani'], 'Ciuperca oferă suport și contribuie la reținerea apei și a sărurilor minerale.'),
('Descompunători', 'Ciupercile saprofite sunt importante în ecosisteme deoarece:', 'participă la descompunerea resturilor organice', ['formează cloroplastele animalelor', 'împiedică orice reciclare a materiei', 'elimină toate bacteriile din sol'], 'Descompunerea resturilor contribuie la reciclarea substanțelor în ecosisteme.'),
('Absorbție', 'La fungi, produșii rezultați prin digestia extracelulară sunt:', 'absorbiți din substrat', ['transportați printr-un tub digestiv cu stomac', 'pompați de o inimă', 'preluați de alveole pulmonare'], 'Fungii eliberează enzime în substrat și absorb produșii solubili rezultați.'),
('Distincție', 'Care asociere dintre mod de nutriție și sursa hranei este corectă?', 'saprofită – resturi organice', ['parazită – numai lumină', 'autotrofă – obligatoriu corpul unei gazde', 'simbiontă – lipsa oricărei relații între organisme'], 'Saprofitele folosesc resturi organice; paraziții preiau resurse de la o gazdă vie.'),
],
'af': [
('Fungi', 'Ciupercile își produc hrana organică prin fotosinteză.', False, 'Ciupercile își procură substanțele organice prin nutriție heterotrofă.', 'Fungii nu au cloroplaste și folosesc surse organice preexistente.'),
('Parazitism', 'O plantă parazită poate prelua resurse de la o altă plantă vie.', True, None, 'Planta-gazdă furnizează resurse; exemplul din programă poate fi ilustrat prin Cuscuta.'),
],
'open': [
('Completare', 'Completează: nutriția pe seama resturilor organice se numește ..., iar cea pe seama unei gazde vii se numește ... .', ['saprofită', 'parazită']),
('Comparație', 'Precizează două deosebiri între nutriția autotrofă fotosintetică și nutriția heterotrofă a fungilor.', ['Organismul fotosintetizant formează substanțe organice folosind carbon anorganic; fungul preia substanțe organice preexistente.', 'Fotosinteza folosește energie luminoasă și pigmenți asimilatori; nutriția fungilor nu se bazează pe cloroplaste.']),
]}

DATA['A08'] = {
'mcq': [
('Tub digestiv', 'Ordinea corectă a unor segmente ale tubului digestiv este:', 'esofag – stomac – intestin subțire', ['stomac – esofag – intestin subțire', 'intestin subțire – esofag – stomac', 'esofag – intestin gros – stomac'], 'Alimentele trec din esofag în stomac, apoi în intestinul subțire.'),
('Glande anexe', 'Care dintre următoarele este o glandă anexă a sistemului digestiv?', 'pancreasul exocrin', ['vezica urinară', 'traheea', 'splina'], 'Pancreasul exocrin produce suc pancreatic, eliminat în duoden.'),
('Bila', 'Bila contribuie la digestie în special prin:', 'emulsionarea grăsimilor', ['sinteza globulelor roșii', 'producerea acidului clorhidric în stomac', 'transformarea directă a tuturor proteinelor în glucoză'], 'Bila favorizează dispersia grăsimilor în picături mai mici; nu este un suc digestiv bogat în enzime.'),
('Pepsină', 'Pepsina participă la digestia:', 'proteinelor', ['celulozei, ca enzimă umană', 'sărurilor minerale', 'apei'], 'Pepsina este o enzimă gastrică implicată în digestia proteinelor.'),
('Duoden', 'Duodenul reprezintă prima parte a:', 'intestinului subțire', ['esofagului', 'intestinului gros', 'stomacului'], 'Duodenul primește conținutul gastric și secreții digestive anexe.'),
('Digestie extracelulară', 'Digestia extracelulară se desfășoară:', 'în afara celulelor, de exemplu în cavitatea tubului digestiv', ['numai în nucleu', 'numai pe cromozomi', 'exclusiv în mitocondrii'], 'La mamifere, alimentele sunt digerate în principal în lumenul tubului digestiv.'),
('Glande salivare', 'Secreția glandelor salivare este eliminată în:', 'cavitatea bucală', ['vezica urinară', 'ventriculul stâng', 'cavitatea nazală ca loc principal al digestiei'], 'Saliva umezește alimentele și contribuie la începutul digestiei amidonului.'),
('Motricitate', 'Deplasarea bolului alimentar prin esofag este realizată în principal prin:', 'mișcări peristaltice', ['diviziune meiotică', 'fotosinteză', 'coagulare'], 'Contracțiile coordonate ale peretelui tubului digestiv propulsează conținutul.'),
],
'af': [
('Ficat', 'Ficatul face parte din tubul digestiv, iar alimentele trec prin el.', False, 'Ficatul este o glandă anexă a sistemului digestiv.', 'Bila ajunge în intestin prin căile biliare; alimentele nu traversează ficatul.'),
('Digestie mecanică', 'Masticația contribuie la fragmentarea mecanică a alimentelor.', True, None, 'Fragmentarea mărește suprafața alimentelor disponibilă acțiunii secrețiilor digestive.'),
],
'open': [
('Completare', 'Completează: glandele salivare produc ..., iar pancreasul exocrin produce ... .', ['salivă', 'suc pancreatic']),
('Exemple', 'Numește două glande anexe digestive și precizează unde este eliminată secreția fiecăreia.', ['Glandele salivare: secreția este eliminată în cavitatea bucală.', 'Pancreasul exocrin: secreția este eliminată în duoden. Se acceptă și ficatul, cu eliminarea bilei în duoden.']),
]}

DATA['A09'] = {
'mcq': [
('Produși', 'În ecuația globală a respirației aerobe a glucozei se formează:', 'dioxid de carbon și apă', ['etanol și clorofilă', 'celuloză și oxigen', 'numai acid lactic'], 'Oxidarea aerobă completă a glucozei formează dioxid de carbon și apă și eliberează energie.'),
('Rol', 'Rolul energetic al respirației celulare constă în:', 'eliberarea energiei din compuși organici', ['producerea luminii solare', 'crearea directă a sărurilor minerale', 'eliminarea necesității substanțelor nutritive'], 'Energia eliberată este utilizată de celulă pentru activitățile sale.'),
('Fermentație lactică', 'Produsul caracteristic al fermentației lactice este:', 'acidul lactic', ['etanolul', 'oxigenul molecular', 'celuloza'], 'Fermentația lactică transformă glucidele în acid lactic și este utilizată la obținerea unor produse lactate fermentate.'),
('Drojdii', 'Obținerea vinului se bazează în principal pe:', 'fermentația alcoolică a glucidelor de către drojdii', ['fotosinteza efectuată de drojdii', 'digestia renală', 'fermentația care produce direct amidon'], 'Drojdia transformă glucidele în etanol și dioxid de carbon în condiții favorabile fermentației.'),
('Panificație', 'Gazul care contribuie la dospirea aluatului cu drojdie este:', 'dioxidul de carbon', ['azotul produs din făină', 'oxigenul produs prin fotosinteza drojdiei', 'hidrogenul sulfurat ca produs necesar'], 'Dioxidul de carbon format prin fermentație se acumulează în aluat.'),
('Respirație vegetală', 'Respirația unei plante poate fi evidențiată prin observarea:', 'consumului de oxigen și eliminării de dioxid de carbon', ['producției obligatorii de oxigen în întuneric', 'formării fructului în orice experiență', 'dispariției tuturor sărurilor minerale'], 'Plantele respiră, consumând oxigen și eliberând dioxid de carbon în respirația aerobă.'),
('Control experimental', 'Pentru a evidenția respirația semințelor germinate, comparația utilă este cu:', 'un martor fără semințe vii, în condiții similare', ['un recipient cu altă temperatură și alt volum, fără control', 'un recipient lăsat permanent deschis, fără comparație', 'o frunză colorată artificial'], 'Martorul permite atribuirea modificărilor observate activității semințelor vii.'),
('Respirație versus fotosinteză', 'Spre deosebire de fotosinteză, respirația aerobă a unei plante:', 'poate avea loc atât ziua, cât și noaptea', ['se produce numai când există lumină', 'folosește clorofila pentru a capta energia solară', 'eliberează întotdeauna oxigen ca produs global'], 'Respirația nu necesită lumină, iar celulele vii au nevoie permanent de energie.'),
],
'af': [
('Plante', 'Plantele respiră numai în timpul nopții.', False, 'Plantele respiră atât în timpul zilei, cât și în timpul nopții.', 'Ziua pot avea loc simultan respirația și fotosinteza în țesuturile fotosintetizante.'),
('Fermentații', 'Fermentația alcoolică și cea lactică au produși finali diferiți.', True, None, 'Prima produce etanol și dioxid de carbon; cea lactică produce acid lactic.'),
],
'open': [
('Completare', 'Completează: în respirația aerobă, glucoza este oxidată cu participarea ..., rezultând global dioxid de carbon și ... .', ['oxigenului', 'apă']),
('Aplicații', 'Dă două exemple de utilizări ale fermentațiilor și asociază fiecare utilizare cu tipul de fermentație.', ['Obținerea vinului: fermentație alcoolică.', 'Obținerea iaurtului: fermentație lactică. Se acceptă panificația ca aplicație a fermentației alcoolice.']),
]}

DATA['A10'] = {
'mcq': [
('Căi respiratorii', 'Care succesiune descrie corect o parte a traseului aerului inspirat?', 'laringe – trahee – bronhii', ['trahee – laringe – bronhii', 'bronhii – faringe – trahee', 'laringe – esofag – alveole'], 'Laringele comunică cu traheea, care se ramifică în bronhii.'),
('Trahee', 'Traheea se continuă inferior cu:', 'bronhiile principale', ['ureterele', 'arterele coronare', 'vene porte'], 'Traheea se bifurcă în două bronhii principale.'),
('Suprafață', 'Numărul mare al alveolelor pulmonare favorizează schimburile de gaze prin:', 'mărirea suprafeței de schimb', ['reducerea la zero a contactului cu sângele', 'producerea clorofilei', 'oprirea ventilației'], 'O suprafață mare de contact facilitează schimbul gazelor respiratorii.'),
('Expirație', 'În expirația liniștită, diafragma:', 'se relaxează și urcă', ['se contractă și coboară', 'produce bilă', 'se transformă în bronhie'], 'Relaxarea musculaturii inspiratorii și reculul elastic reduc volumul toracic.'),
('Volum toracic', 'În inspirație, creșterea volumului cutiei toracice este asociată cu:', 'pătrunderea aerului în plămâni', ['eliminarea obligatorie a aerului din plămâni', 'oprirea schimburilor alveolare', 'închiderea permanentă a traheei'], 'Creșterea volumului pulmonar scade presiunea intrapulmonară sub cea atmosferică.'),
('Bronhii', 'Bronhiile principale conduc aerul:', 'din trahee spre plămâni', ['din rinichi spre vezică', 'din stomac spre intestin', 'din inimă spre ficat'], 'Bronhiile sunt componente ale căilor respiratorii.'),
('Protecție', 'Firele de păr și mucusul din cavitățile nazale contribuie la:', 'reținerea unor particule din aer', ['producerea urinei', 'digestia principală a proteinelor', 'formarea globulelor roșii'], 'Aerul inspirat este filtrat, încălzit și umidificat în căile respiratorii superioare.'),
('Perete alveolar', 'Pereții subțiri ai alveolelor favorizează:', 'difuzia gazelor între aer și sânge', ['formarea osului compact', 'digestia grăsimilor', 'reținerea permanentă a aerului în stomac'], 'Distanța mică de difuzie facilitează schimbul gazelor.'),
],
'af': [
('Diafragmă', 'Contracția diafragmei micșorează volumul toracic în inspirația normală.', False, 'Contracția diafragmei mărește volumul toracic în inspirația normală.', 'Diafragma coboară, contribuind la creșterea volumului toracic.'),
('Alveole', 'Alveolele pulmonare sunt în contact strâns cu o rețea de capilare.', True, None, 'Această asociere permite schimburile dintre aerul alveolar și sânge.'),
],
'open': [
('Completare', 'Completează: aerul trece din trahee în ..., iar schimbul cu sângele se realizează la nivelul ... .', ['bronhii', 'alveolelor pulmonare']),
('Comparație', 'Precizează două diferențe dintre inspirația liniștită și expirația liniștită.', ['În inspirație diafragma se contractă și coboară; în expirație se relaxează și urcă.', 'În inspirație volumul pulmonar crește și aerul intră; în expirație volumul scade și aerul iese.']),
]}

DATA['A11'] = {
'mcq': [
('Absorbție', 'Absorbția apei și a sărurilor minerale se realizează predominant la nivelul:', 'zonei perișorilor absorbanți ai rădăcinii', ['petalelor', 'fructelor uscate', 'grăuncioarelor de polen'], 'Perișorii absorbanți măresc suprafața de contact dintre rădăcină și sol.'),
('Sevă brută', 'Seva brută conține în principal:', 'apă și săruri minerale', ['numai lipide', 'hematii și leucocite', 'numai hormoni animali'], 'Seva brută transportă apa și elementele minerale absorbite din sol.'),
('Sevă elaborată', 'Substanțele organice produse în frunze sunt transportate către alte organe prin:', 'vasele liberiene', ['uretere', 'artere pulmonare', 'bronhii'], 'Țesutul liberian transportă seva elaborată de la surse către organele consumatoare sau de depozitare.'),
('Transpirație și transport', 'Pierderea apei prin frunze contribuie la ascensiunea sevei brute prin:', 'forța de sucțiune determinată de transpirație', ['contracția unei inimi vegetale', 'pomparea sângelui', 'mișcarea mușchilor frunzei'], 'Transpirația generează o tensiune care contribuie la deplasarea apei în vasele lemnoase.'),
('Presiune radiculară', 'Presiunea radiculară este o forță care poate contribui la:', 'deplasarea ascendentă a sevei brute', ['circulația sângelui în plante', 'deplasarea urinei', 'formarea neuronilor vegetali'], 'Presiunea dezvoltată la nivelul rădăcinii poate împinge seva în vasele lemnoase.'),
('Suprafață de absorbție', 'Prezența unui număr mare de perișori absorbanți mărește:', 'suprafața de absorbție a rădăcinii', ['numărul ventriculelor plantei', 'suprafața alveolelor', 'cantitatea de hemoglobină'], 'Perișorii absorbanți sunt prelungiri ale unor celule epidermice ale rădăcinii.'),
('Destinație', 'Transportul zaharurilor către un tubercul aflat în creștere este asociat în principal cu:', 'seva elaborată', ['plasma sangvină', 'urina', 'aerul din trahee'], 'Un tubercul în creștere este un organ consumator și de depozitare, alimentat cu produși organici.'),
('Traseu', 'Apa absorbită din sol ajunge la frunze predominant pe traseul:', 'rădăcină – tulpină – frunze, prin xilem', ['fruct – polen – rădăcină, prin nervi', 'stomate – petale – sămânță, prin uretere', 'frunze – inimă – rădăcină, prin artere'], 'Țesutul lemnos formează căi de transport al apei de la rădăcină către părțile aeriene.'),
],
'af': [
('Seve', 'Seva elaborată este transportată exclusiv prin vasele lemnoase.', False, 'Seva elaborată este transportată prin vasele liberiene.', 'Vasele lemnoase sunt specializate în transportul sevei brute.'),
('Absorbție', 'Perișorii absorbanți contribuie la preluarea apei și a sărurilor minerale din sol.', True, None, 'Ei măresc contactul dintre rădăcină și soluția solului.'),
],
'open': [
('Completare', 'Completează: vasele lemnoase transportă seva ..., iar vasele liberiene transportă seva ... .', ['brută', 'elaborată']),
('Explicație', 'Indică două forțe care contribuie la ascensiunea sevei brute.', ['Forța de sucțiune determinată de transpirația frunzelor.', 'Presiunea radiculară. Coeziunea și adeziunea apei pot fi menționate suplimentar.']),
]}

DATA['A12'] = {
'mcq': [
('Componente', 'Sângele este alcătuit din:', 'plasmă și elemente figurate', ['numai globule roșii', 'numai apă', 'seve și cloroplaste'], 'Plasma este componenta lichidă în care se află elementele figurate.'),
('Hematii', 'Hematiile mature ale mamiferelor sunt în mod obișnuit:', 'lipsite de nucleu', ['celule cu cloroplaste', 'celule cu perete de celuloză', 'celule cu nucleu foarte voluminos'], 'În cursul maturării, hematiile mamiferelor își pierd nucleul.'),
('Morfologie', 'Forma biconcavă a hematiei favorizează:', 'schimburile gazoase printr-un raport favorabil suprafață/volum', ['producerea bilei', 'secreția de insulină', 'formarea perișorilor absorbanți'], 'Forma hematiei contribuie la eficiența schimburilor și la flexibilitatea sa.'),
('Apărare', 'Un element figurat care poate participa direct la fagocitoză este:', 'un leucocit fagocitar', ['hematia matură', 'un grăuncior de polen', 'un vas lemnos'], 'Unele leucocite înglobează și distrug particule și microorganisme.'),
('Plasmă', 'În plasmă se găsesc, pe lângă apă:', 'proteine, săruri și substanțe transportate', ['numai celuloză insolubilă', 'numai aer atmosferic', 'numai amidon intact'], 'Plasma transportă substanțe dizolvate, inclusiv nutrienți, produși de metabolism și proteine.'),
('Termoreglare', 'Sângele contribuie la termoreglare prin:', 'transportul și redistribuirea căldurii', ['formarea clorofilei', 'producerea exclusivă a aerului inspirat', 'împiedicarea oricărui schimb de căldură'], 'Circulația redistribuie căldura între țesuturi și suprafața corpului.'),
('Hemoglobină', 'Hemoglobina este:', 'un pigment respirator care conține fier', ['o enzimă din salivă', 'un pigment al cloroplastului', 'un component al peretelui vegetal'], 'Hemoglobina din hematii leagă reversibil oxigenul.'),
('Calcul', 'Dacă sângele reprezintă 7% din masa corporală a unei persoane de 60 kg, masa sângelui este:', '4,2 kg', ['0,42 kg', '42 kg', '8,4 kg'], '60 × 7 / 100 = 4,2 kg. Procentul este dat de enunț, nu o constantă exactă pentru fiecare persoană.'),
],
'af': [
('Plasmă', 'Plasma reprezintă totalitatea hematiilor din sânge.', False, 'Plasma reprezintă componenta lichidă a sângelui.', 'Hematiile sunt elemente figurate, distincte de plasmă.'),
('Transport', 'Sângele transportă atât gaze respiratorii, cât și substanțe nutritive.', True, None, 'Gazele sunt transportate prin componentele sângelui, iar nutrienții în principal prin plasmă.'),
],
'open': [
('Completare', 'Completează: elementele figurate ale sângelui includ hematii, ... și ... .', ['leucocite', 'trombocite']),
('Calcul în lanț', 'O persoană are 80 kg. În enunț, sângele reprezintă 7% din masa corpului și plasma 55% din sânge. Calculează masa sângelui și masa plasmei.', ['Masa sângelui: 80 × 7 / 100 = 5,6 kg.', 'Masa plasmei: 5,6 × 55 / 100 = 3,08 kg.']),
]}

DATA['A13'] = {
'mcq': [
('Camere', 'Inima mamiferelor are:', 'două atrii și două ventricule', ['un atriu și un ventricul', 'două atrii și un singur ventricul', 'patru atrii și niciun ventricul'], 'Inima mamiferelor este tetracamerală, cu separarea completă a celor două jumătăți.'),
('Vene cave', 'Venele cave se deschid în:', 'atriul drept', ['atriul stâng', 'ventriculul stâng', 'aortă'], 'Venele cave aduc sângele din circulația sistemică în atriul drept.'),
('Aortă', 'Aorta pornește din:', 'ventriculul stâng', ['atriul drept', 'atriul stâng', 'ventriculul drept'], 'Ventriculul stâng pompează sângele în circulația sistemică prin aortă.'),
('Tricuspidă', 'Valva tricuspidă se află între:', 'atriul drept și ventriculul drept', ['atriul stâng și ventriculul stâng', 'cele două atrii', 'cele două ventricule'], 'Valva atrioventriculară dreaptă permite curgerea din atriu spre ventricul.'),
('Capilare', 'Schimburile dintre sânge și țesuturi se realizează predominant la nivelul:', 'capilarelor', ['aortei', 'venelor cave', 'valvelor cardiace'], 'Pereții foarte subțiri ai capilarelor favorizează schimburile.'),
('Vene', 'Prin definiție, venele conduc sângele:', 'spre inimă', ['numai oxigenat', 'numai din inimă spre organe', 'numai între alveole'], 'Direcția față de inimă definește venele; conținutul în oxigen diferă între circuite.'),
('Perete ventricular', 'Peretele ventriculului stâng este mai gros decât al celui drept deoarece:', 'pompează în circulația sistemică, unde presiunea necesară este mai mare', ['primește sânge direct din trahee', 'produce hematii', 'realizează filtrarea urinei'], 'Ventriculul stâng trebuie să genereze presiunea necesară circulației prin întregul corp.'),
('Coronare', 'Vasele coronare asigură irigarea:', 'mușchiului inimii', ['exclusiv a alveolelor', 'numai a rinichilor', 'numai a retinei'], 'Țesutul inimii primește sânge prin propria rețea vasculară, circulația coronariană.'),
],
'af': [
('Artere', 'Artera pulmonară transportă sângele de la plămâni spre atriul stâng.', False, 'Artera pulmonară transportă sângele din ventriculul drept spre plămâni.', 'Întoarcerea de la plămâni spre atriul stâng se realizează prin venele pulmonare.'),
('Septuri', 'La mamifere, septurile inimii separă complet jumătatea dreaptă de cea stângă.', True, None, 'Separarea contribuie la menținerea distinctă a circuitelor pulmonar și sistemic.'),
],
'open': [
('Completare', 'Completează: circulația sistemică începe în ventriculul ... și se încheie în atriul ... .', ['stâng', 'drept']),
('Traseu', 'Descrie traseul sângelui prin circulația pulmonară, indicând camera de plecare și cea de sosire.', ['Ventricul drept → artere pulmonare → capilare pulmonare → vene pulmonare → atriu stâng.', 'La nivel pulmonar sângele cedează dioxid de carbon și preia oxigen.']),
]}

DATA['A14'] = {
'mcq': [
('Definiție', 'Transpirația plantelor reprezintă pierderea apei în principal sub formă de:', 'vapori', ['cristale de amidon', 'hemoglobină', 'semințe'], 'Transpirația este eliminarea apei sub formă de vapori de la suprafața organelor vegetale.'),
('Ostiolă', 'Deschiderea delimitată de celulele stomatice se numește:', 'ostiolă', ['alveolă', 'nefron', 'atriu'], 'Prin ostiolă se realizează schimburi de gaze și pierderea apei prin transpirație.'),
('Celule stomatice', 'Deschiderea și închiderea ostiolei sunt controlate de:', 'celulele stomatice', ['hematii', 'neuroni motori', 'osteocite'], 'Modificările turgescenței celulelor stomatice schimbă dimensiunea ostiolei.'),
('Cuticulă', 'Cuticula de pe suprafața frunzei contribuie la:', 'limitarea pierderilor de apă', ['producerea sângelui', 'formarea nervilor', 'transportul urinei'], 'Cuticula este un înveliș protector care reduce pierderile de apă prin epidermă.'),
('Umiditate', 'În condiții comparabile, o umiditate atmosferică mai mică tinde să:', 'favorizeze pierderea apei prin transpirație, dacă stomatele rămân deschise', ['oprească obligatoriu orice evaporare', 'transforme apa în celuloză fără reacții', 'creeze presiune sangvină în frunze'], 'Diferența mai mare de umiditate dintre frunză și aer poate favoriza eliminarea vaporilor.'),
('Temperatură', 'O creștere moderată a temperaturii, cu ceilalți factori controlați, poate favoriza:', 'evaporarea apei de la nivelul frunzei', ['transformarea frunzei în rinichi', 'dispariția instantanee a cuticulei', 'producerea de urină vegetală'], 'Temperatura influențează evaporarea; răspunsul plantei depinde și de apă și de reglarea stomatelor.'),
('Rol fiziologic', 'Transpirația poate contribui la:', 'răcirea frunzei prin evaporarea apei', ['încetarea permanentă a circulației sevei', 'producerea directă a proteinelor din aer', 'formarea urinei în frunză'], 'Evaporarea consumă energie termică și poate limita încălzirea frunzei.'),
('Adaptare', 'O frunză cu o cuticulă groasă este, în general, mai bine adaptată la:', 'limitarea pierderilor de apă într-un mediu uscat', ['pierderea nelimitată a apei', 'respirație prin branhii', 'formarea globulelor roșii'], 'O barieră cuticulară mai dezvoltată poate reduce pierderea de apă.'),
],
'af': [
('Formă de eliminare', 'În transpirație, planta elimină apa numai sub formă lichidă.', False, 'În transpirație, planta elimină apa sub formă de vapori.', 'Eliminarea de picături de apă prin gutație este un fenomen diferit.'),
('Localizare', 'Frunzele sunt organe importante pentru realizarea transpirației.', True, None, 'Suprafața frunzelor și aparatele stomatice participă la pierderea controlată a apei.'),
],
'open': [
('Completare', 'Completează: aparatul stomatic include celule ... care delimitează o ... .', ['stomatice', 'ostiolă']),
('Structură și rol', 'Precizează două structuri ale frunzei implicate în reglarea pierderilor de apă și rolul fiecăreia.', ['Stomatele: deschiderea lor influențează eliminarea vaporilor de apă.', 'Cuticula: reduce pierderea de apă prin suprafața epidermică.']),
]}

DATA['A15'] = {
'mcq': [
('Localizare', 'Rinichii mamiferelor sunt situați în mod obișnuit:', 'în regiunea lombară, de o parte și de alta a coloanei vertebrale', ['în cavitatea craniană', 'în interiorul inimii', 'în alveolele pulmonare'], 'La om, rinichii sunt localizați retroperitoneal în regiunea lombară.'),
('Regiuni', 'Principalele regiuni ale parenchimului renal sunt:', 'corticala și medulara', ['atriul și ventriculul', 'corola și caliciul', 'cerebelul și bulbul'], 'Rinichiul prezintă o zonă corticală periferică și o zonă medulară internă.'),
('Vezică', 'Rolul principal al vezicii urinare este:', 'stocarea temporară a urinei', ['producerea bilei', 'digestia proteinelor', 'pomparea sângelui spre plămâni'], 'Vezica acumulează urina adusă prin uretere, înainte de eliminare.'),
('Uretră', 'Urina părăsește vezica urinară prin:', 'uretră', ['ureterul drept ca traseu normal spre exterior', 'aortă', 'trahee'], 'Uretra face legătura dintre vezică și exterior; ureterele aduc urina din rinichi.'),
('Sistem', 'Care asociere include numai componente ale sistemului excretor urinar?', 'rinichi, uretere, vezică urinară, uretră', ['rinichi, stomac, bronhii, uretră', 'ficat, esofag, aortă, uretere', 'plămâni, intestin, inimă, uretră'], 'Aceste organe asigură producerea, transportul, stocarea și eliminarea urinei.'),
('Capsulă', 'La exterior, rinichiul este învelit de:', 'o capsulă fibroasă', ['un perete de celuloză', 'o corolă', 'o membrană timpanică'], 'Capsula fibroasă acoperă rinichiul și contribuie la protecția acestuia.'),
('Excreție', 'Un rol al rinichilor este:', 'eliminarea unor produși de metabolism prin urină', ['producerea sucului gastric', 'realizarea fotosintezei', 'transportul aerului la alveole'], 'Excreția renală contribuie la eliminarea substanțelor reziduale și la echilibrul mediului intern.'),
('Irigare', 'Sângele ajunge la rinichi prin:', 'arterele renale', ['uretere', 'bronhii', 'trompele uterine'], 'Arterele renale sunt vase de sânge; ureterele transportă urina, nu sângele.'),
],
'af': [
('Traseu', 'Uretra conduce urina de la rinichi la vezica urinară.', False, 'Ureterele conduc urina de la rinichi la vezica urinară.', 'Uretra conduce urina din vezică spre exterior.'),
('Organ pereche', 'În alcătuirea obișnuită a sistemului excretor uman există doi rinichi și două uretere.', True, None, 'Rinichii și ureterele sunt organe pereche în anatomia obișnuită.'),
],
'open': [
('Completare', 'Completează: urina trece din rinichi în ..., este stocată în ... și este eliminată prin ... .', ['uretere', 'vezica urinară', 'uretră']),
('Comparație', 'Precizează două diferențe dintre uretere și uretră.', ['Ureterele duc urina de la rinichi la vezică; uretra o duce de la vezică la exterior.', 'Există de regulă două uretere și o singură uretră.']),
]}

DATA['A16'] = {
'mcq': [
('Membru superior', 'Osul brațului este:', 'humerusul', ['radiusul', 'ulna', 'femurul'], 'Humerusul formează scheletul brațului; radiusul și ulna aparțin antebrațului.'),
('Antebraț', 'Scheletul antebrațului este format din:', 'radius și ulnă', ['tibie și fibulă', 'humerus și femur', 'claviculă și scapulă'], 'Radiusul și ulna sunt cele două oase ale antebrațului.'),
('Coapsă', 'Osul coapsei este:', 'femurul', ['humerusul', 'radiusul', 'ulna'], 'Femurul este osul lung al coapsei.'),
('Gambă', 'Scheletul gambei include:', 'tibia și fibula', ['radiusul și ulna', 'clavicula și humerusul', 'scapula și ulna'], 'Tibia și fibula sunt oasele gambei.'),
('Centură scapulară', 'Clavicula și scapula participă la alcătuirea:', 'centurii scapulare', ['scheletului gambei', 'scheletului antebrațului', 'centurii pelviene'], 'Centura scapulară leagă membrul superior de trunchi.'),
('Tendon', 'Un tendon realizează în mod obișnuit legătura dintre:', 'un mușchi și un os', ['două alveole', 'două vene', 'două celule stomatice'], 'Tendoanele transmit forța contracției musculare către oase.'),
('Antagoniști', 'În flexia antebrațului pe braț, bicepsul brahial și tricepsul brahial acționează ca:', 'mușchi antagoniști', ['două glande cu același canal', 'două tipuri de țesut osos', 'două oase ale antebrațului'], 'Bicepsul participă la flexie, iar tricepsul la extensie; acțiunile lor sunt opuse.'),
('Contractilitate', 'Într-o contracție care produce flexia cotului, mușchiul flexor activ:', 'poate scurta distanța dintre punctele sale de inserție', ['se transformă în tendon', 'se transformă în cartilaj', 'își pierde definitiv capacitatea de relaxare'], 'Scurtarea mușchiului transmite forță prin tendoane și poate produce deplasarea segmentelor osoase.'),
],
'af': [
('Oase', 'Radiusul și ulna sunt oase ale gambei.', False, 'Radiusul și ulna sunt oase ale antebrațului.', 'Tibia și fibula formează scheletul gambei.'),
('Mișcare', 'Oasele, articulațiile și mușchii scheletici participă împreună la realizarea mișcărilor.', True, None, 'Mușchii produc forța, iar elementele scheletului și articulațiile permit mișcarea segmentelor.'),
],
'open': [
('Completare', 'Completează: osul brațului este ..., iar osul coapsei este ... .', ['humerusul', 'femurul']),
('Exemple', 'Numește două oase ale membrului inferior și precizează regiunea fiecăruia.', ['Femurul: coapsă.', 'Tibia: gambă. Se acceptă și fibula, oasele tarsiene, metatarsienele sau falangele cu localizare corectă.']),
]}

DATA['A17'] = {
'mcq': [
('Fototropism', 'Curbarea prin creștere a unei tulpini spre lumină reprezintă:', 'fototropism pozitiv', ['fototropism negativ', 'gravitropism pozitiv al rădăcinii', 'fotosinteză fără mișcare'], 'Direcția creșterii este orientată către stimulul luminos.'),
('Gravitropism', 'Creșterea rădăcinii principale în sensul gravitației reprezintă:', 'gravitropism pozitiv', ['gravitropism negativ', 'fototropism pozitiv', 'fotonastie'], 'Rădăcina principală are de regulă orientare pozitivă față de gravitație.'),
('Tulpină', 'Creșterea unei tulpini în sens opus gravitației reprezintă:', 'gravitropism negativ', ['gravitropism pozitiv', 'hidrotropism pozitiv', 'digestie extracelulară'], 'Tulpina se dezvoltă în mod obișnuit în sens opus vectorului gravitațional.'),
('Hidrotropism', 'Orientarea creșterii rădăcinilor către o zonă cu apă disponibilă este un exemplu de:', 'hidrotropism pozitiv', ['fototropism negativ', 'termoreglație sangvină', 'reproducere vegetativă'], 'Apa poate constitui stimulul care orientează creșterea rădăcinii.'),
('Contact', 'Înfășurarea unui cârcel în jurul unui suport, ca răspuns la contact, este:', 'tigmotropism', ['fototropism', 'gravitropism', 'fecundație'], 'Tigmotropismul este o creștere orientată ca răspuns la atingerea unui suport.'),
('Tropism', 'O caracteristică a tropismelor este faptul că:', 'direcția mișcării de creștere depinde de direcția stimulului', ['sunt întotdeauna mișcări de locomoție a întregii plante', 'sunt exclusiv mișcări ale gameților', 'apar numai în lipsa stimulilor'], 'Tropismele sunt răspunsuri de creștere orientată în raport cu stimulul.'),
('Nastie', 'La o mișcare nastică, direcția răspunsului:', 'nu este determinată de direcția din care vine stimulul', ['urmărește obligatoriu direcția gravitației', 'urmărește obligatoriu direcția luminii', 'este identică cu deplasarea animalelor'], 'Nastiile se deosebesc de tropisme prin independența orientării mișcării față de direcția stimulului.'),
('Experiment', 'Pentru a testa orientarea tulpinii față de lumină, variabila modificată intenționat poate fi:', 'direcția iluminării', ['simultan specia, temperatura și cantitatea de apă', 'numărul de cromozomi prin simpla rotire a ghiveciului', 'compoziția sângelui plantei'], 'Un experiment interpretabil controlează ceilalți factori și variază direcția sursei luminoase.'),
],
'af': [
('Orientare', 'Fototropismul pozitiv al tulpinii reprezintă creșterea în sens opus luminii.', False, 'Fototropismul pozitiv al tulpinii reprezintă creșterea către lumină.', 'Un răspuns pozitiv este orientat către sursa stimulului.'),
('Sensibilitate', 'Plantele pot răspunde la stimuli chiar dacă nu au sistem nervos.', True, None, 'Sensibilitatea plantelor se manifestă prin răspunsuri fiziologice și mișcări, fără neuroni.'),
],
'open': [
('Completare', 'Completează: creșterea orientată față de lumină se numește ..., iar creșterea orientată față de gravitație se numește ... .', ['fototropism', 'gravitropism sau geotropism']),
('Comparație', 'Precizează diferența dintre un tropism și o nastie și oferă câte un exemplu.', ['Tropism: răspuns de creștere a cărui orientare depinde de direcția stimulului; de exemplu curbarea tulpinii spre lumină.', 'Nastie: orientarea mișcării nu depinde de direcția stimulului; de exemplu închiderea frunzelor de mimoză la atingere.']),
]}

DATA['A18'] = {
'mcq': [
('Componente SNC', 'Sistemul nervos central este alcătuit din:', 'encefal și măduva spinării', ['numai nervi periferici', 'numai ganglioni spinali', 'nervi și glande salivare'], 'Encefalul și măduva spinării formează SNC; nervii și ganglionii periferici aparțin SNP.'),
('Protecție encefal', 'Encefalul este adăpostit în:', 'cutia craniană', ['canalul vertebral ca sediu principal', 'cavitatea toracică', 'bazinul renal'], 'Oasele craniului protejează encefalul.'),
('Măduvă', 'Măduva spinării este localizată în:', 'canalul vertebral', ['cavitatea bucală', 'cavitatea pleurală', 'cavitatea stomacului'], 'Canalul format de vertebre adăpostește măduva spinării.'),
('Substanță cenușie', 'În măduva spinării, substanța cenușie este dispusă:', 'central, sub formă de coarne', ['numai la exterior, în cordoane', 'în bronhii', 'în retina ochiului'], 'În secțiune transversală, substanța cenușie are aspect caracteristic de H sau fluture.'),
('Substanță albă', 'În măduva spinării, cordoanele sunt formate predominant din substanță:', 'albă', ['cenușie corticală', 'osoasă compactă', 'cartilaginoasă'], 'Substanța albă periferică este organizată în cordoane cu căi de conducere.'),
('Cerebel', 'Cerebelul participă în special la:', 'coordonarea mișcărilor și menținerea echilibrului', ['producerea bilei', 'formarea hematiilor mature', 'absorbția apei din sol'], 'Cerebelul ajustează coordonarea și precizia mișcărilor și contribuie la echilibru.'),
('Emisfere', 'Cortexul cerebral este format predominant din:', 'substanță cenușie', ['țesut osos', 'țesut cartilaginos', 'plasmă sangvină'], 'La suprafața emisferelor cerebrale, substanța cenușie formează scoarța cerebrală.'),
('Măduvă funcții', 'O funcție a măduvei spinării este:', 'conducerea informațiilor nervoase între periferie și encefal', ['producerea sucului pancreatic', 'formarea urinei', 'emulsionarea grăsimilor'], 'Măduva are funcții de conducere și reflexă.'),
],
'af': [
('Cerebel', 'Cerebelul este o componentă a sistemului nervos periferic.', False, 'Cerebelul este o componentă a encefalului, din sistemul nervos central.', 'Encefalul include mai multe regiuni, între care cerebelul.'),
('Organizare', 'Substanța albă și substanța cenușie au distribuții diferite în măduvă și în emisferele cerebrale.', True, None, 'În măduvă cenușia este centrală; în emisfere există și un strat cortical de substanță cenușie.'),
],
'open': [
('Completare', 'Completează: SNC este alcătuit din ... și ... .', ['encefal', 'măduva spinării']),
('Comparație', 'Compară localizarea substanței cenușii în măduva spinării și la suprafața emisferelor cerebrale.', ['În măduva spinării, substanța cenușie este centrală, organizată în coarne.', 'La suprafața emisferelor, substanța cenușie formează cortexul cerebral.']),
]}

DATA['A19'] = {
'mcq': [
('Retină', 'Fotoreceptorii se află în:', 'retină', ['sclerotică', 'iris', 'cornee'], 'Retina conține celule cu bastonașe și celule cu conuri.'),
('Bastonașe', 'Celulele cu bastonașe participă în special la vederea:', 'în lumină slabă', ['exclusiv cromatică fină', 'prin timpan', 'prin mugurii gustativi'], 'Bastonașele au sensibilitate mare la lumină și sunt importante pentru vederea în condiții de iluminare redusă.'),
('Cristalin', 'O componentă transparentă a ochiului care contribuie la focalizarea luminii este:', 'cristalinul', ['nervul optic', 'sclerotica opacă', 'timpanul'], 'Cristalinul are rol optic și își poate modifica forma în acomodare.'),
('Pupilă', 'Cantitatea de lumină care pătrunde în ochi este reglată prin modificarea diametrului pupilei de către:', 'iris', ['retină', 'nervul auditiv', 'cohlee'], 'Mușchii irisului modifică diametrul pupilei.'),
('Ureche medie', 'Ciocanul, nicovala și scărița se află în:', 'urechea medie', ['urechea externă', 'retină', 'cavitatea nazală'], 'Lanțul osicular transmite vibrațiile de la timpan către urechea internă.'),
('Cohlee', 'Receptorii auditivi sunt situați în:', 'cohleea urechii interne', ['pavilionul urechii', 'trompa auditivă', 'iris'], 'Celulele senzoriale auditive se află în organul Corti din cohlee.'),
('Gust', 'Receptorii gustativi sunt grupați în:', 'muguri gustativi', ['alveole pulmonare', 'nefroni', 'vase lemnoase'], 'Mugurii gustativi conțin celule receptoare care răspund la substanțe dizolvate.'),
('Miros', 'Receptorii olfactivi se găsesc în:', 'mucoasa olfactivă a cavității nazale', ['mucoasa vezicii urinare', 'retină', 'timpan'], 'Receptorii olfactivi recepționează substanțe odorante ajunse la mucoasa olfactivă.'),
],
'af': [
('Hipermetropie', 'Hipermetropia se corectează în mod obișnuit cu lentile divergente.', False, 'Hipermetropia se corectează în mod obișnuit cu lentile convergente.', 'Lentilele convergente ajută la aducerea imaginii pe retină în hipermetropie.'),
('Piele', 'Pielea conține receptori pentru sensibilități precum atingerea și temperatura.', True, None, 'Receptorii cutanați răspund la categorii diferite de stimuli.'),
],
'open': [
('Completare', 'Completează: receptorii vizuali sunt în ..., iar receptorii auditivi se află în urechea ... .', ['retină', 'internă']),
('Exemple', 'Numește două organe de simț și asociază fiecare organ cu un stimul recepționat.', ['Ochiul: lumină.', 'Urechea: vibrații sonore. Se acceptă pielea cu stimuli tactili sau termici, nasul cu substanțe odorante, limba cu substanțe sapide dizolvate.']),
]}

DATA['A20'] = {
'mcq': [
('Androceu', 'Androceul unei flori este format din:', 'stamine', ['carpele', 'sepale', 'petale'], 'Staminele sunt componentele reproducătoare masculine ale florii.'),
('Gineceu', 'Gineceul unei flori este alcătuit din:', 'carpele', ['stamine', 'sepale', 'petale'], 'Carpelele formează structurile reproducătoare feminine ale florii.'),
('Anteră', 'Grăuncioarele de polen se formează în:', 'anterele staminelor', ['stigmat', 'rădăcină', 'petale'], 'Antera reprezintă partea staminei care produce polen.'),
('Polenizare', 'Polenizarea constă în:', 'transferul polenului pe stigmat', ['unirea directă a ovarului cu fructul', 'formarea rădăcinilor adventive', 'diviziunea bacteriilor'], 'Polenizarea precedă fecundația și reprezintă transferul polenului către structura receptoare.'),
('Ovul și sămânță', 'După fecundație, ovulul unei angiosperme se transformă în mod obișnuit în:', 'sămânță', ['petală', 'sepală', 'stamină'], 'Ovulul fecundat se dezvoltă în sămânță; ovarul se dezvoltă în fruct.'),
('Embrion', 'Embrionul din sămânță se dezvoltă din:', 'zigot', ['o petală', 'un perișor absorbant', 'un vas liberian'], 'Zigotul rezultat din fecundație se divide și formează embrionul.'),
('Vegetativă', 'Obținerea unei noi plante dintr-un butaș este un exemplu de reproducere:', 'vegetativă', ['sexuată prin fecundație', 'prin gameți masculini', 'prin polenizare'], 'Butașul este o porțiune vegetativă din care se poate dezvolta o nouă plantă.'),
('Caliciu', 'Caliciul unei flori este format din:', 'sepale', ['petale', 'stamine', 'carpele'], 'Sepalele formează caliciul; petalele formează corola.'),
],
'af': [
('Polenizare versus fecundație', 'Polenizarea și fecundația desemnează exact același proces.', False, 'Polenizarea reprezintă transferul polenului pe stigmat, iar fecundația presupune unirea gameților.', 'Cele două procese sunt legate, dar au semnificații diferite.'),
('Sămânță', 'O sămânță viabilă poate conține un embrion și țesuturi cu substanțe de rezervă.', True, None, 'Embrionul și rezervele sunt componente importante pentru dezvoltarea noii plante.'),
],
'open': [
('Completare', 'Completează: corola este alcătuită din ..., iar caliciul din ... .', ['petale', 'sepale']),
('Exemple', 'Dă două exemple de reproducere vegetativă la plante și precizează organul implicat.', ['Prin tuberculi, de exemplu tuberculul de tulpină la cartof.', 'Prin bulbi, de exemplu la ceapă. Se acceptă stoloni sau butași, cu exemplificare corectă.']),
]}

DATA['A21'] = {
'mcq': [
('Gonadă masculină', 'Gonadele masculine sunt:', 'testiculele', ['ovarele', 'prostata', 'veziculele seminale'], 'Testiculele produc spermatozoizi și hormoni sexuali masculini.'),
('Gonadă feminină', 'Gonadele feminine sunt:', 'ovarele', ['trompele uterine', 'uterul', 'vaginul'], 'Ovarele formează ovocite și secretă hormoni sexuali feminini.'),
('Uter', 'Dezvoltarea normală a embrionului și a fătului are loc în:', 'uter', ['vezica urinară', 'ovar', 'ureter'], 'După implantare, dezvoltarea sarcinii are loc în uter.'),
('Căi masculine', 'Canalele deferente au rol în:', 'transportul spermatozoizilor', ['formarea ovocitelor', 'producerea urinei în rinichi', 'implantarea embrionului'], 'Canalele deferente sunt căi ale sistemului reproducător masculin.'),
('Glande anexe', 'Prostata este:', 'o glandă anexă a sistemului reproducător masculin', ['gonada feminină', 'un segment al trompei uterine', 'un organ producător de ovocite'], 'Secrețiile prostatei contribuie la compoziția lichidului seminal.'),
('Ovulație', 'Ovulația reprezintă:', 'eliberarea ovocitului din ovar', ['implantarea embrionului în uter', 'eliminarea urinei', 'formarea polenului'], 'Ovocitul eliberat poate fi preluat de trompa uterină.'),
('Gameți', 'În condiții obișnuite, gameții umani au:', '23 de cromozomi', ['46 de perechi de cromozomi', '92 de cromozomi', '46 de cromozomi în două seturi'], 'Gameții sunt haploizi, având un singur set de 23 de cromozomi.'),
('Zigot', 'Prin fecundație se formează:', 'zigotul diploid', ['doi gameți haploizi noi', 'o celulă fără ADN', 'o gonadă completă'], 'Unirea materialului genetic al gameților reface numărul diploid de cromozomi.'),
],
'af': [
('Gonade', 'Ovarele sunt căi de transport ale urinei.', False, 'Ovarele sunt gonadele feminine.', 'Transportul urinei aparține sistemului urinar; ovarele au funcție reproducătoare și endocrină.'),
('Glande anexe', 'Veziculele seminale sunt glande anexe ale sistemului reproducător masculin.', True, None, 'Secreția lor contribuie la lichidul seminal.'),
],
'open': [
('Completare', 'Completează: gonada masculină este ..., iar gonada feminină este ... .', ['testiculul', 'ovarul']),
('Structură și rol', 'Numește două organe ale sistemului reproducător feminin și precizează câte un rol.', ['Ovarul: formarea ovocitelor și secreția hormonilor sexuali.', 'Uterul: locul dezvoltării embrionului și a fătului după implantare. Se acceptă trompa uterină, cu rolul precizat corect.']),
]}

DATA['A22'] = {
'mcq': [
('Homozigot', 'Un individ homozigot pentru o genă cu alelele A și a poate avea genotipul:', 'AA', ['Aa', 'aA', 'AB, dacă A și B desemnează gene diferite'], 'Homozigotul are două alele identice la locusul considerat: AA sau aa.'),
('Probabilitate', 'În încrucișarea Aa × Aa, cu dominanță completă și segregare obișnuită, probabilitatea genotipului aa este:', '25%', ['50%', '75%', '100%'], 'Combinațiile echiprobabile sunt AA, Aa, Aa, aa; una din patru este aa.'),
('Heterozigoți', 'În încrucișarea Aa × Aa, proporția așteptată a descendenților heterozigoți este:', '50%', ['25%', '75%', '100%'], 'Din raportul genotipic 1 AA : 2 Aa : 1 aa, jumătate sunt heterozigoți.'),
('Încrucișare pură', 'Din încrucișarea AA × aa rezultă, în condiții mendeliene obișnuite:', 'numai descendenți Aa', ['numai descendenți AA', 'numai descendenți aa', 'jumătate AA și jumătate aa'], 'Primul părinte formează gameți A, iar al doilea gameți a; fiecare descendent primește A și a.'),
('Gameți', 'Un individ cu genotipul AABb formează, pentru gene cu segregare independentă, gameți:', 'AB și Ab', ['AA și Bb', 'Aa și BB', 'AB, Ab, aB și ab în proporții egale'], 'Fiecare gamet primește câte o alelă: obligatoriu A și, alternativ, B sau b.'),
('Dihibridare', 'În AaBb × AaBb, cu dominanță completă la ambele gene și segregare independentă, probabilitatea aabb este:', '1/16', ['1/4', '3/16', '9/16'], 'Probabilitatea aa este 1/4 și cea bb este 1/4; pentru evenimente independente, produsul este 1/16.'),
('Testare', 'În AaBb × aabb, cu segregare independentă, cele patru combinații genotipice au proporții așteptate:', 'egale, de 25%', ['9:3:3:1', 'numai 100% AaBb', 'numai 100% aabb'], 'Gameții AB, Ab, aB și ab ai primului părinte se combină cu gametul ab al celui de-al doilea.'),
('Codominanță', 'La codominanță, într-un heterozigot:', 'se exprimă ambele alele în fenotip', ['una dintre alele dispare din ADN', 'se exprimă obligatoriu numai alela recesivă', 'numărul cromozomilor se dublează'], 'Codominanța implică exprimarea ambelor alele, de exemplu antigenii A și B în grupa AB.'),
],
'af': [
('Fenotip și genotip', 'La dominanță completă, un fenotip dominant indică obligatoriu genotip homozigot dominant.', False, 'La dominanță completă, fenotipul dominant poate corespunde unui homozigot dominant sau unui heterozigot.', 'Atât AA, cât și Aa pot avea fenotip dominant.'),
('Gameți', 'În segregarea mendeliană obișnuită, fiecare gamet primește o singură alelă din perechea unui locus.', True, None, 'Separarea alelelor în formarea gameților stă la baza legii purității gameților.'),
],
'open': [
('Aplicare', 'Completează raportul genotipic așteptat pentru Aa × Aa: ... AA : ... Aa : ... aa.', ['1 AA : 2 Aa : 1 aa']),
('Problemă', 'Se încrucișează Aa × aa, cu dominanță completă și segregare obișnuită. Precizează gameții fiecărui părinte și procentul așteptat de descendenți cu fenotip recesiv.', ['Aa formează gameți A și a în proporții egale; aa formează gameți a.', 'Rezultă 50% Aa și 50% aa, deci 50% au fenotip recesiv. Procentul este probabilistic, nu o garanție pentru un număr mic de descendenți.']),
]}

DATA['A23'] = {
'mcq': [
('Variabilitate', 'Variabilitatea reprezintă:', 'proprietatea organismelor de a se deosebi între ele', ['identitatea obligatorie a tuturor indivizilor', 'absența informației genetice', 'numai numărul de eritrocite'], 'Diferențele dintre organisme pot avea cauze genetice și de mediu.'),
('Crossing-over', 'Crossing-overul presupune schimbul reciproc de segmente între:', 'cromatide nesurori ale cromozomilor omologi', ['doi ribozomi', 'două membrane celulare', 'două celule stomatice'], 'Schimbul de segmente cromozomiale poate produce combinații noi de alele.'),
('Mutație genică', 'O modificare a secvenței de nucleotide a unei gene este o:', 'mutație genică', ['polenizare', 'simplă deplasare a unui organ', 'diferență numai de temperatură fără schimbare genetică'], 'Mutațiile genice afectează informația dintr-o genă.'),
('Deleție', 'Pierderea unui segment de cromozom se numește:', 'deleție', ['duplicație', 'inversie', 'fecundație'], 'Deleția este o modificare structurală cromozomială prin pierdere de material.'),
('Duplicație', 'Repetarea unui segment cromozomial reprezintă o:', 'duplicație', ['deleție', 'meioză completă', 'polenizare'], 'Duplicația crește numărul copiilor unui segment cromozomial.'),
('Factori fizici', 'Un exemplu de factor fizic cu potențial mutagen este:', 'radiația ultravioletă', ['succesiunea anotimpurilor, prin definiție', 'apa potabilă, prin definiție', 'orice sunet obișnuit, obligatoriu'], 'Radiația ultravioletă poate produce leziuni ale ADN-ului; efectele depind de expunere și de mecanismele de reparare.'),
('Autozomi', 'În cariotipul uman obișnuit, cele 22 de perechi de cromozomi care nu sunt gonozomi se numesc:', 'autozomi', ['gameți', 'nucleoli', 'cromatide ale unui singur cromozom'], 'Omul are în mod obișnuit 22 de perechi de autozomi și o pereche de cromozomi sexuali.'),
('Număr cromozomi', 'Un cariotip uman cu trisomie 21 are, în forma completă obișnuită:', '47 de cromozomi', ['45 de cromozomi', '23 de cromozomi', '92 de cromozomi'], 'Trisomia completă presupune un cromozom 21 suplimentar față de cei 46 obișnuiți; există și alte forme citogenetice.'),
],
'af': [
('Mutații', 'Toate mutațiile produc obligatoriu o boală gravă.', False, 'Mutațiile pot avea efecte diferite: neutre, defavorabile sau, în anumite condiții, favorabile.', 'Efectul unei mutații depinde de modificare, contextul genetic și mediu.'),
('Recombinare', 'Recombinarea genetică poate produce combinații noi de alele.', True, None, 'Crossing-overul și combinarea materialului genetic contribuie la diversitate.'),
],
'open': [
('Completare', 'Completează: cromozomii sexuali se numesc ..., iar ceilalți cromozomi ai cariotipului sunt ... .', ['gonozomi', 'autozomi']),
('Exemple', 'Dă două exemple de modificări cromozomiale și precizează dacă afectează structura sau numărul cromozomilor.', ['Deleția: modificare structurală prin pierderea unui segment.', 'Trisomia: modificare numerică prin prezența unui cromozom suplimentar într-o pereche. Alte exemple corecte sunt acceptabile.']),
]}

SOURCES = {
'A01': ['4-3-eukaryotic-cells', '4-2-prokaryotic-cells', '5-1-components-and-structure'],
'A02': ['10-2-the-cell-cycle', '11-1-the-process-of-meiosis'],
'A03': ['20-1-organizing-life-on-earth', '21-1-viral-evolution-morphology-and-classification', '24-1-characteristics-of-fungi', '26-2-gymnosperms', '28-6-superphylum-ecdysozoa-arthropods', '29-2-fishes'],
'A04': ['30-1-the-plant-body'],
'A05': ['33-2-animal-primary-tissues'],
'A06': ['8-1-overview-of-photosynthesis', '8-2-the-light-dependent-reactions-of-photosynthesis'],
'A07': ['24-3-ecology-of-fungi', '24-1-characteristics-of-fungi', '31-3-nutritional-adaptations-of-plants'],
'A08': ['34-1-digestive-systems', '34-3-digestive-system-processes'],
'A09': ['7-1-energy-in-living-systems', '7-5-metabolism-without-oxygen', '8-1-overview-of-photosynthesis'],
'A10': ['39-1-systems-of-gas-exchange', '39-2-gas-exchange-across-respiratory-surfaces', '39-3-breathing'],
'A11': ['30-5-transport-of-water-and-solutes-in-plants'],
'A12': ['40-2-components-of-the-blood'],
'A13': ['40-3-mammalian-heart-and-blood-vessels', '40-1-overview-of-the-circulatory-system'],
'A14': ['30-5-transport-of-water-and-solutes-in-plants', '30-4-leaves'],
'A15': ['41-2-the-kidneys-and-osmoregulatory-organs'],
'A16': ['38-1-types-of-skeletal-systems', '38-4-muscle-contraction-and-locomotion'],
'A17': ['30-6-plant-sensory-systems-and-responses'],
'A18': ['35-3-the-central-nervous-system'],
'A19': ['36-5-vision', '36-4-hearing-and-vestibular-sensation', '36-3-taste-and-smell', '36-2-somatosensation'],
'A20': ['32-1-reproductive-development-and-structure', '32-2-pollination-and-fertilization', '32-3-asexual-reproduction'],
'A21': ['43-3-human-reproductive-anatomy-and-gametogenesis', '43-6-fertilization-and-early-embryonic-development'],
'A22': ['12-3-laws-of-inheritance', '12-2-characteristics-and-traits'],
'A23': ['13-1-chromosomal-theory-and-genetic-linkage', '13-2-chromosomal-basis-of-inherited-disorders', '14-6-dna-repair'],
}

def build():
    path = Path('public/content/bank.json')
    bank = json.loads(path.read_text())
    old = [i for i in bank['items'] if not i['id'].startswith('EXT27-')]
    additions = []
    for chapter, rows in sorted(DATA.items()):
        assert len(rows['mcq']) == 8 and len(rows['af']) == 2 and len(rows['open']) == 2, chapter
        pages = '4' if chapter in ['A01', 'A02', 'A03'] else '5' if chapter in ['A04', 'A05', 'A06', 'A07', 'A08', 'A09', 'A22', 'A23'] else '6'
        refs = ['https://openstax.org/books/biology-2e/pages/' + s for s in SOURCES[chapter]]
        def base(kind, number, topic, q):
            return {'id': f'EXT27-{chapter}-{kind}-{number:02}', 'chapter': chapter, 'topic': topic, 'type': kind, 'q': q, 'source': refs[0], 'source_refs': refs, 'syllabus_ref': f'OMECTS 4800/2010 · B1 · PDF p. {pages}', 'authorship': 'Item original BacLab, redactat în română; nu este subiect oficial.', 'review_status': 'documented-draft', 'validated': False, 'created_at': '2026-10-26', 'difficulty': 1, 'level': 'U'}
        for n, (topic, q, correct, wrong, explanation) in enumerate(rows['mcq'], 1):
            item = base('grila', n, topic, q)
            options = [correct, *wrong]
            shift = int(hashlib.sha256(item['id'].encode()).hexdigest()[:8], 16) % 4
            options = options[shift:] + options[:shift]
            item.update(slot='I.C', options=options, correct=options.index(correct), explanation=explanation,
                wrong_why=[None if o == correct else f'Varianta «{o}» nu răspunde corect cerinței. {explanation}' for o in options])
            if any(w in topic.lower() for w in ['calcul', 'probabilitate', 'dihibrid', 'testare', 'experiment', 'traseu']):
                item.update(difficulty=2, level='A')
            additions.append(item)
        for n, (topic, q, truth, correction, explanation) in enumerate(rows['af'], 1):
            item = base('adevarat_fals', n, topic, q)
            item.update(slot='I.D', truth=truth, explanation=explanation)
            if correction:
                item['correction'] = correction
            additions.append(item)
        for n, (topic, q, model) in enumerate(rows['open'], 1):
            kind = 'completare' if n == 1 else 'exemple_caracteristica'
            item = base(kind, n, topic, q)
            item.update(slot='antrenament', model=model, explanation='Compară toate componentele răspunsului tău cu modelul. Formulările echivalente corecte sunt acceptabile; această cerință nu are punctaj oficial de Bac.', difficulty=2, level='A' if n == 2 else 'C')
            additions.append(item)
    assert len(additions) == 276
    bank.update(version=3, note='Bancă beta extinsă: 276 itemi originali suplimentari pentru B1, cu surse și delimitare după programă; validarea profesorului este distinctă și încă necesară.', items=old + additions)
    path.write_text(json.dumps(bank, ensure_ascii=False, indent=1) + '\n')
    Path('docs/research/bank-expansion-sources.json').write_text(json.dumps({'date': '2026-10-26', 'attribution': 'OpenStax, Biology 2e (Rice University), utilizat ca referință factuală. Enunțurile și explicațiile noi sunt redactări originale BacLab.', 'scope': 'Programa oficială B1, OMECTS 4800/2010, paginile 4–6. Sursele academice nu extind programa.', 'status': 'Drafturi documentate; nu se pretinde validare independentă de specialitate.', 'chapters': {c: {'sources': ['https://openstax.org/books/biology-2e/pages/'+s for s in v], 'newItems': 12} for c,v in SOURCES.items()}}, ensure_ascii=False, indent=2) + '\n')
    print(json.dumps({'existing': len(old), 'added': len(additions), 'total': len(bank['items'])}))

if __name__ == '__main__':
    build()
