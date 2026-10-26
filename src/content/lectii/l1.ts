import type { Lectie } from "./types";

/** Lecții A01–A06. Surse: ghidul „Biologie vegetală și animală” (Nominatrix, 2020) și fișele de sinteză E.d (2012). */
export const LECTII_1: Lectie[] = [
  {
    code: "A01",
    intro: "Celula este unitatea structurală, funcțională și genetică a vieții. Capitolul se învață comparând: procariotă cu eucariotă, celulă vegetală cu animală, organit cu organit.",
    sectiuni: [
      {
        titlu: "Două tipuri de celulă",
        text: [
          "Celula procariotă (bacterii și cianobacterii) nu are nucleu adevărat. Materialul genetic este un singur cromozom circular de ADN, aflat în citoplasmă, într-o zonă numită nucleoid, fără membrană nucleară și fără nucleoli. Peretele celular conține mureină.",
          "Celula eucariotă (protiste, fungi, plante, animale) are nucleu delimitat de membrană dublă și organite celulare. Aici intră toate celulele plantelor și ale animalelor.",
        ],
      },
      {
        titlu: "Învelișul celulei",
        puncte: [
          "Membrana celulară: două straturi de fosfolipide străbătute de proteine (modelul mozaicului fluid). Este selectiv permeabilă: controlează ce intră și ce iese.",
          "Peretele celular: structură nevie, în afara membranei. La plante este din celuloză, la fungi din chitină, la bacterii din mureină. La celula animală lipsește.",
        ],
      },
      {
        titlu: "Organitele și rolul lor",
        puncte: [
          "Ribozomi (fără membrană): sinteza proteinelor. Liberi în citoplasmă sau atașați reticulului endoplasmatic rugos.",
          "Reticul endoplasmatic: rugos (cu ribozomi, sintetizează proteine) și neted (sinteză de lipide, transport, degradarea unor substanțe nocive).",
          "Aparat Golgi (membrană simplă): procesează și ambalează produsele, formează veziculele de secreție, participă la formarea peretelui celular la plante.",
          "Lizozomi (membrană simplă): enzime hidrolitice pentru digestia intracelulară și fagocitoză; numeroși în leucocite.",
          "Vacuole (membrană simplă numită tonoplast): suc vacuolar; permanente și mari la plante, temporare la animale.",
          "Mitocondrii (membrană dublă): respirația celulară, producerea de ATP. Au ADN propriu. Membrana internă formează criste.",
          "Plastide (membrană dublă, doar la plante): cloroplaste (fotosinteză, cu grana și stromă), cromoplaste (pigmenți roșu-portocalii), leucoplaste (depozitează amidon, uleiuri sau proteine).",
          "Centrozom (fără membrană): doi centrioli, formează fusul de diviziune. Prezent la animale și protiste, lipsește la plantele superioare.",
        ],
      },
      {
        titlu: "Nucleul",
        text: [
          "Nucleul păstrează informația genetică și coordonează activitatea celulei. Are membrană dublă cu pori, carioplasmă (cariolimfă și cromatină) și unul sau mai mulți nucleoli, care participă la formarea ribozomilor. Cromatina este ADN legat de proteine și devine vizibilă ca cromozomi în timpul diviziunii.",
          "Excepții: hematia matură nu are nucleu, trombocitele sunt fragmente anucleate, hepatocitul poate avea doi nuclei, fibra musculară striată are mai mulți nuclei.",
        ],
      },
    ],
    retine: [
      "Procariota are nucleoid și perete cu mureină, eucariota are nucleu delimitat de membrană.",
      "Membrana dublă: mitocondrii, plastide, nucleu. Membrană simplă: reticul, Golgi, lizozomi, vacuole. Fără membrană: ribozomi, centrozom.",
      "Mitocondria produce energie (ATP), cloroplastul produce substanțe organice.",
      "Plantele au perete, plastide și vacuolă mare. Animalele au centrozom.",
    ],
    capcane: [
      "Nu confunda nucleul (la eucariote) cu nucleoidul (la procariote).",
      "Peretele celular nu e același peste tot: celuloză la plante, chitină la fungi, mureină la bacterii.",
      "Plastidele aparțin celulei vegetale. Nu le pune la celula animală.",
      "Hematia matură este anucleată: e o excepție des întrebată.",
    ],
  },
  {
    code: "A02",
    intro: "Celula se înmulțește prin diviziune. Mitoza produce celule identice, folosite la creștere. Meioza produce gameți și înjumătățește numărul de cromozomi.",
    sectiuni: [
      {
        titlu: "Ciclul celular",
        text: [
          "Ciclul celular are două părți: interfaza (aproximativ 90% din ciclu) și diviziunea propriu-zisă. Interfaza are trei etape: G1 (creștere, sinteze), S (replicarea ADN: cromozomii devin bicromatidici) și G2 (pregătirea pentru diviziune).",
          "Diviziunea directă (amitoza) apare la procariote, prin strangulare, fără fus. Diviziunea indirectă (cariochinetică) apare la eucariote și are fus de diviziune format de centrozom.",
        ],
      },
      {
        titlu: "Cromozomii",
        text: [
          "Cromozomul eucariot are două cromatide unite la centromer. Numărul, forma și dimensiunea lor sunt constante la o specie. Totalitatea cromozomilor formează cariotipul.",
          "La om, celulele somatice sunt diploide (2n = 46: 44 autozomi și 2 heterozomi), iar gameții sunt haploizi (n = 23). Femeia are XX, bărbatul XY.",
        ],
      },
      {
        titlu: "Mitoza",
        puncte: [
          "Profaza: cromatina se condensează în cromozomi bicromatidici, dispar nucleolii și membrana nucleară, se formează fusul.",
          "Metafaza: cromozomii se aliniază în placa ecuatorială. Spre final, cromozomii se clivează.",
          "Anafaza: cromatidele (acum cromozomi monocromatidici) migrează spre poli.",
          "Telofaza: se refac nucleii, dispare fusul, se separă citoplasma. Rezultă două celule fiice diploide, identice cu mama.",
        ],
      },
      {
        titlu: "Meioza",
        text: [
          "Are loc doar în organele de reproducere (testicule, ovare) și are două etape. Etapa reducțională (meioza I) separă cromozomii omologi, deci reduce numărul de cromozomi la jumătate. Etapa ecvațională (meioza II) este asemănătoare unei mitoze: separă cromatidele.",
          "În profaza I, cromozomii omologi formează perechi (tetrade), iar între cromatidele nesurori se produce crossing-over, adică schimb de material genetic. În metafaza I, perechile se orientează aleator (recombinare intercromozomală).",
          "Rezultat: dintr-o celulă 2n se formează patru celule haploide (n), diferite genetic. Importanță: menține constant numărul de cromozomi după fecundație (23 + 23 = 46) și crește variabilitatea.",
        ],
      },
    ],
    retine: [
      "Mitoza: 2n → 2 × 2n, celule somatice. Meioza: 2n → 4 × n, celule sexuale.",
      "ADN se dublează o singură dată, în faza S, înaintea oricărei diviziuni.",
      "Meioza I este reducțională, meioza II este ecvațională.",
      "Crossing-over-ul are loc în profaza I a meiozei.",
    ],
    capcane: [
      "Nu spune că ADN se dublează între meioza I și meioza II. Nu se dublează.",
      "Cromatidele surori se separă în anafaza mitozei și în anafaza II. Omologii se separă în anafaza I.",
      "O celulă cu 2n = 16 produce prin meioză patru celule cu n = 8, nu două.",
    ],
  },
  {
    code: "A03",
    intro: "Lumea vie este organizată în cinci regnuri. Capitolul cere să știi caracterele fiecărui grup, exemple și importanța lor, plus câteva specii ocrotite din România.",
    sectiuni: [
      {
        titlu: "Taxonomia și denumirea speciilor",
        text: [
          "Taxonomia clasifică lumea vie. Ordinea unităților, de la mic la mare: specie, gen, familie, ordin, clasă, încrengătură, regn. Specia este unitatea de bază: indivizi înrudiți genetic, care se încrucișează și dau descendenți fertili. Denumirea este binară (Linné): gen + epitet specific, de exemplu Pisum sativum.",
        ],
      },
      {
        titlu: "Virusurile",
        text: [
          "Sunt entități infecțioase acelulare, fără metabolism propriu, parazite intracelulare obligatorii. Au o capsidă proteică și un genom de ADN sau de ARN. Nu aparțin niciunui regn.",
        ],
        puncte: [
          "Adenovirusuri (cu ADN): variola, herpesul, varicela, hepatita B, bacteriofagii.",
          "Ribovirusuri (cu ARN): virusul gripal, HIV, virusul turbării, poliomielita.",
          "Bolile produse de virusuri se numesc viroze.",
        ],
      },
      {
        titlu: "Cele cinci regnuri",
        puncte: [
          "Monera: procariote unicelulare (bacterii, cianobacterii). Eubacteriile au forme: coci, bacili, vibrioni, spirili. Importanță: descompunători, bacterii lactice și acetice, dar și paraziți (tuberculoza, holera).",
          "Protista: eucariote unicelulare. Euglena (flagel, autotrofă la lumină), amiba (pseudopode), parameciul (cili), sporozoarele (paraziți, ex. plasmodiul malariei).",
          "Fungi: eucariote heterotrofe, cu perete de chitină. Ascomicete (drojdii, Penicillium) și bazidiomicete (ciuperci cu pălărie, rugina, tăciunele). Pot fi saprofite sau parazite; produc micoze.",
          "Plante: eucariote fotoautotrofe. Avasculare (alge, mușchi) și vasculare (ferigi, gimnosperme, angiosperme).",
          "Animale: eucariote heterotrofe, fără perete celular. Nevertebrate și vertebrate.",
        ],
      },
      {
        titlu: "Plantele",
        puncte: [
          "Algele și mușchii: corp de tip tal, fără vase conducătoare și fără organe adevărate.",
          "Ferigile (pteridofite): au vase, se înmulțesc prin spori, nu au flori sau semințe.",
          "Gimnospermele (conifere): semințe neînchise în fruct, ovule neînchise în ovar; brad, molid, pin, tisă.",
          "Angiospermele: semințe închise în fruct. Dicotiledonate (două cotiledoane) și monocotiledonate (un cotiledon: cereale, ceapă, lalea).",
        ],
      },
      {
        titlu: "Animalele",
        puncte: [
          "Celenterate: hidra, meduza. Platelminți: viermele de gălbează, tenia. Nematelminți: limbricul, trichina, oxiurul. Anelide: râma, lipitoarea.",
          "Moluște: gasteropode (melcul), lamelibranhiate (scoica), cefalopode (sepia, caracatița).",
          "Artropode: arahnide (păianjenul, căpușa), crustacee (racul), insecte (albina, musca).",
          "Vertebrate: pești, amfibieni (poichiloterme), reptile (poichiloterme), păsări și mamifere (homeoterme).",
        ],
      },
      {
        titlu: "Conservarea biodiversității în România",
        text: [
          "Se ocrotesc specii, rezervații naturale și parcuri naționale. Exemple de animale: capra neagră, râsul, dropia, pelicanul comun, cocoșul de munte. Exemple de plante: floarea de colț, bujorul românesc, laleaua pestriță, papucul doamnei, tisa.",
        ],
      },
    ],
    retine: [
      "Specie → gen → familie → ordin → clasă → încrengătură → regn.",
      "Virusurile au ADN sau ARN, niciodată ambele, și nu sunt celule.",
      "Procariote: Monera. Eucariote: Protista, Fungi, Plante, Animale.",
      "Gimnosperme: semințe neînchise. Angiosperme: semințe în fruct.",
      "Păsările și mamiferele sunt homeoterme, restul vertebratelor sunt poichiloterme.",
    ],
    capcane: [
      "Virusurile nu fac parte din cele cinci regnuri.",
      "Ciupercile nu fac fotosinteză: sunt heterotrofe.",
      "Nu confunda adenovirusurile (ADN) cu ribovirusurile (ARN).",
      "Mono- sau dicotiledonat se stabilește după numărul de cotiledoane din sămânță.",
    ],
  },
  {
    code: "A04",
    intro: "Țesuturile vegetale se împart în embrionare (care se divid) și definitive (specializate). La examen contează tipul, localizarea și rolul.",
    sectiuni: [
      {
        titlu: "Țesuturile embrionare (meristeme)",
        text: [
          "Celule nediferențiate, cu pereți subțiri și citoplasmă abundentă, care se divid. Meristemele primare asigură creșterea în lungime: apicale (în vârfurile rădăcinii și tulpinii) și intercalare (la nodurile unor tulpini articulate, ca la graminee).",
        ],
      },
      {
        titlu: "Țesuturile definitive",
        text: ["Celule specializate, de regulă fără capacitate de diviziune."],
        puncte: [
          "De apărare: epiderma, un strat de celule aplatizate acoperit de cuticulă.",
          "Conducătoare: vasele lemnoase (celule moarte, pereți îngroșați, conduc seva brută) și vasele liberiene (celule vii, tuburi ciuruite, conduc seva elaborată).",
          "Fundamentale: parenchimul asimilator (bogat în cloroplaste, de exemplu țesutul palisadic din frunză) și parenchimul de depozitare (rădăcini tuberizate, tuberculi, semințe oleaginoase).",
          "Secretoare: produc și elimină mucilagii, latexuri, uleiuri volatile, nectar, rășini; peri secretori, glande nectarifere, canale.",
        ],
      },
    ],
    retine: [
      "Meristeme: apicale și intercalare, pentru creșterea în lungime.",
      "Lemn: seva brută, celule moarte. Liber: seva elaborată, celule vii.",
      "Asimilator = fotosinteză. Depozitare = substanțe de rezervă.",
    ],
    capcane: [
      "Vasele lemnoase conțin celule moarte, cele liberiene celule vii.",
      "Țesutul de apărare este epiderma, nu parenchimul.",
    ],
  },
  {
    code: "A05",
    intro: "La animale există patru tipuri de țesuturi: epitelial, conjunctiv, muscular și nervos. Se diferențiază prin structură, localizare și rol.",
    sectiuni: [
      {
        titlu: "Țesutul epitelial",
        text: [
          "Nu este vascularizat. Are rol de protecție, secreție sau recepție. Tipuri: de acoperire (epiderma, mucoasele), glandular și senzorial.",
        ],
        puncte: [
          "Glande exocrine: elimină secreția printr-un canal (sudoripare, sebacee, salivare).",
          "Glande endocrine: elimină hormoni direct în sânge (tiroida, hipofiza, suprarenalele).",
          "Glande mixte: pancreasul, testiculul și ovarul.",
        ],
      },
      {
        titlu: "Țesutul conjunctiv",
        text: ["Are celule, fibre (colagen, elastină, reticulină) și substanță fundamentală. Rol: legătură, susținere, rezistență, depozitare."],
        puncte: [
          "Moale: lax, adipos (în hipoderm, depozit de lipide), reticulat.",
          "Semidur (cartilaginos): nevascularizat; cartilajele costale, laringele, traheea, pavilionul urechii, discurile intervertebrale.",
          "Dur (osos): vascularizat. Compact (în diafiza oaselor lungi) și spongios (în epifize și în oasele scurte și late).",
          "Sângele este un țesut conjunctiv lichid: plasmă (55%) și elemente figurate (45%).",
        ],
      },
      {
        titlu: "Țesutul muscular",
        puncte: [
          "Striat scheletic: contracție rapidă, voluntară; mușchii scheletici.",
          "Neted: contracție lentă, involuntară; pereții organelor interne și ai vaselor.",
          "Striat cardiac: miocardul; contracție involuntară.",
        ],
      },
      {
        titlu: "Țesutul nervos",
        text: [
          "Neuronul este unitatea structurală și funcțională, fără capacitate de diviziune. Are corp celular (pericarion), dendrite (conduc impulsul spre corp) și un axon (îl conduce de la corp spre periferie). Axonul se termină cu butoni terminali, care conțin mediator chimic. Legătura dintre neuroni este sinapsa.",
          "Celulele gliale sunt mai numeroase, se divid și au rol trofic, de susținere și de apărare. Celulele Schwann produc mielina.",
        ],
      },
    ],
    retine: [
      "Patru țesuturi: epitelial, conjunctiv, muscular, nervos.",
      "Sângele, cartilajul și osul sunt țesuturi conjunctive.",
      "Exocrin = canal. Endocrin = sânge. Mixt = pancreas, gonade.",
      "Dendrita conduce spre corp, axonul dinspre corp.",
    ],
    capcane: [
      "Sângele nu este țesut muscular sau epitelial: este conjunctiv lichid.",
      "Țesutul epitelial și cel cartilaginos nu sunt vascularizate, cel osos este.",
      "Neuronii nu se mai divid. Celulele gliale se divid.",
    ],
  },
  {
    code: "A06",
    intro: "Fotosinteza transformă energia luminii în energie chimică stocată în substanțe organice. Este baza lanțurilor trofice și sursa oxigenului din atmosferă.",
    sectiuni: [
      {
        titlu: "Ce este și unde are loc",
        text: [
          "Plantele verzi sintetizează substanțe organice din apă, săruri minerale și CO₂, folosind energia luminoasă. Procesul are loc în cloroplaste, predominant în frunză, care are suprafață mare, epidermă cu stomate, țesut asimilator bogat în cloroplaste și vase conducătoare.",
          "Ecuația: 6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂ (în prezența luminii și a clorofilei).",
        ],
      },
      {
        titlu: "Pigmenții asimilatori",
        text: ["Clorofila a și clorofila b absorb energia luminoasă. Numai clorofila a o poate converti în energie chimică."],
      },
      {
        titlu: "Cele două faze",
        puncte: [
          "Faza de lumină: în tilacoidele din grana. Are loc fotoliza apei (2 H₂O → 2 H₂ + O₂). Se eliberează oxigen, se asigură hidrogenul necesar fazei următoare și se formează ATP.",
          "Faza de întuneric: în stroma cloroplastului. Se sintetizează substanțe organice, cu CO₂ ca sursă de carbon și energia din ATP. Nu cere lumină directă, dar depinde de produsele fazei de lumină.",
        ],
      },
      {
        titlu: "Evidențierea fotosintezei",
        text: [
          "Se poate evidenția după O₂ eliberat (o plantă acvatică luminată eliberează bule), după CO₂ absorbit sau după substanța organică produsă (amidonul din frunză se colorează în albastru-violet cu soluție de iod). Se folosește mereu un martor.",
        ],
      },
      {
        titlu: "Importanță",
        puncte: [
          "Transformă energia luminoasă în energie chimică.",
          "Produce substanțe organice, hrana tuturor heterotrofelor.",
          "Eliberează oxigenul necesar respirației.",
          "Reduce CO₂ din atmosferă.",
        ],
      },
    ],
    retine: [
      "Reactanți: CO₂ și apă. Produși: glucoză și oxigen.",
      "Oxigenul provine din fotoliza apei, în faza de lumină.",
      "Lumina: grana. Întuneric: stroma.",
      "Amidonul se evidențiază cu iod.",
    ],
    capcane: [
      "Nu scrie că plantele transformă substanțele organice în anorganice: invers, anorganice în organice.",
      "Fotosinteza are nevoie de lumină. Nu poate decurge „în orice condiții”.",
      "Carbonul vine din CO₂, nu din apă.",
    ],
  },
];
