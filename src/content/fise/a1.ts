import type { Fisa } from "./types";

/** Sursa: fișele de sinteză 2012 (Proba E.d) și subiectele de Bac 2025 / simulare 2026. */
export const FISE_1: Fisa[] = [
  {
    code: "A01",
    intro: "Celula este unitatea structurală, funcțională și genetică a organismelor vii.",
    blocks: [
      {
        type: "table",
        title: "Celula procariotă vs. celula eucariotă",
        cols: ["Caracter", "Procariotă", "Eucariotă animală", "Eucariotă vegetală"],
        rows: [
          ["La ce organisme", "bacterii, cianobacterii", "animale (și protiste)", "alge, mușchi, ferigi, plante superioare"],
          ["Nucleu", "nu are membrană nucleară (nucleoid)", "da, cu membrană și pori", "da, cu membrană și pori"],
          ["Material genetic", "o moleculă de ADN, cromozom circular", "ADN + proteine, cromozomi", "ADN + proteine, cromozomi"],
          ["Perete celular", "rigid, necelulozic, cu mureină", "lipsește", "celulozic (celuloză, hemiceluloză, pectine)"],
          ["Organite", "ribozomi", "mitocondrii, RE, Golgi, lizozomi, centrozom, vacuole", "mitocondrii, RE, Golgi, plastide, vacuole permanente; fără centrozom"],
        ],
        note: "La fungi, peretele celular este chitinos.",
      },
      {
        type: "table",
        title: "Organitele celulare",
        cols: ["Organit", "Învelișul", "Rol"],
        rows: [
          ["Mitocondrii", "membrană dublă (cea internă formează criste)", "respirație celulară, producere de energie (ATP); au ADN propriu"],
          ["Reticul endoplasmatic", "membrană simplă; neted sau rugos (cu ribozomi)", "sistem de transport intracitoplasmatic"],
          ["Ribozomi", "fără membrană (ARN + proteine)", "sinteza proteinelor"],
          ["Aparat Golgi", "membrană simplă (dictiozomi)", "secreție, asamblarea și transportul produșilor, formarea membranelor"],
          ["Lizozomi", "membrană simplă", "digestie intracelulară (enzime hidrolitice)"],
          ["Centrozom", "format din doi centrioli", "formează fusul de diviziune; la celula animală și protiste"],
          ["Vacuole", "membrană simplă (tonoplast)", "conțin suc vacuolar; temporare la animale, permanente la plante"],
          ["Plastide", "membrană dublă", "cloroplaste (fotosinteză), cromoplaste, leucoplaste (depozit); doar la plante"],
          ["Nucleu", "membrană dublă cu pori", "stochează informația genetică (ADN), coordonează celula"],
        ],
      },
      {
        type: "table",
        title: "Tipuri de plastide",
        cols: ["Plastidă", "Pigment", "Exemplu"],
        rows: [
          ["Cloroplaste", "verzi (clorofilă)", "plante verzi"],
          ["Rodoplaste", "roșii", "alge roșii"],
          ["Feoplaste", "bruni", "alge brune"],
          ["Cromoplaste", "roșu-portocalii", "fructe"],
          ["Leucoplaste", "fără pigmenți: amiloplaste (amidon), oleoplaste (uleiuri), proteoplaste (proteine)", "cartof, floarea-soarelui, semințe"],
        ],
      },
      {
        type: "flow",
        title: "Calea proteinelor de secreție",
        rows: [{ steps: ["Nucleu||ADN, informația genetică", "Ribozomi||sinteza proteinelor", "Aparat Golgi||asamblare și secreție", "Vezicule||eliminare din celulă"] }],
        note: "Ribozomii pot fi liberi sau atașați reticulului endoplasmatic rugos.",
      },
    ],
  },
  {
    code: "A02",
    intro: "Ciclul celular = interfază + diviziune. Mitoza produce celule identice, meioza produce gameți.",
    blocks: [
      {
        type: "flow",
        title: "Ciclul celular",
        loop: true,
        rows: [{ steps: ["Interfază||sinteză, creștere, dublarea ADN", "Profază||cromozomi bicromatidici", "Metafază||placa ecuatorială", "Anafază||migrare spre poli", "Telofază||două celule fiice"] }],
        note: "Interfaza precede diviziunea; ADN-ul se dublează în interfază.",
      },
      {
        type: "table",
        title: "Fazele mitozei (cariokineza)",
        cols: ["Fază", "Ce se întâmplă"],
        rows: [
          ["Profaza", "cromatina se condensează, apar cromozomii bicromatidici; dispar membrana nucleară și nucleolii; se schițează fusul de diviziune"],
          ["Metafaza", "cromozomii bicromatidici se așază în placa ecuatorială; sunt clivați și devin monocromatidici"],
          ["Anafaza", "cromozomii monocromatidici migrează spre capetele fusului"],
          ["Telofaza", "cromozomii ajung la poli și se despiralizează; se reface membrana nucleară; se formează peretele despărțitor și două celule fiice"],
        ],
      },
      {
        type: "table",
        title: "Mitoză vs. meioză",
        cols: ["Caracter", "Mitoza", "Meioza"],
        rows: [
          ["Unde", "celule somatice", "organe reproducătoare (testicule, ovare)"],
          ["Celule rezultate", "2 celule fiice", "4 celule fiice"],
          ["Număr de cromozomi", "rămâne 2n → 2n", "se înjumătățește: 2n → n"],
          ["Etape", "o singură diviziune", "etapa reducțională (meioza I) + etapa ecvațională (meioza II)"],
          ["Recombinare genetică", "nu", "da: crossing-over și „dansul cromozomilor”"],
          ["Rol", "creștere, dezvoltare, înlocuirea celulelor uzate", "formarea gameților, constanța numărului de cromozomi, variabilitate"],
        ],
      },
      {
        type: "flow",
        title: "Meioza pe scurt",
        rows: [
          { label: "Meioza I (reducțională)", steps: ["Celulă mamă 2n||cromozomi bicromatidici", "Profaza I||bivalenți, chiasme, crossing-over", "Metafaza I||tetrade în placa ecuatorială", "Anafaza I – Telofaza I||2 celule n"] },
          { label: "Meioza II (ecvațională)", steps: ["2 celule n||scurtă interfază fără sinteză de ADN", "Profaza II – Telofaza II||ca în mitoză", "4 celule n||cromozomi monocromatidici, recombinați"] },
        ],
      },
      {
        type: "table",
        title: "Cromozomii",
        cols: ["Noțiune", "Explicație"],
        rows: [
          ["Celulă somatică", "diploidă (2n): set matern + set patern"],
          ["Celulă sexuală (gamet)", "haploidă (n): un singur set de cromozomi"],
          ["Autozomi / heterozomi", "autozomii sunt identici la cele două sexe; heterozomii (X, Y) diferă după sex"],
          ["Cariotip uman", "2n = 46: 44 autozomi + 2 heterozomi; femeia XX (homogametic), bărbatul XY (heterogametic)"],
          ["Cromozom eucariot", "două cromatide unite prin centromer; ADN + proteine"],
        ],
      },
    ],
  },
  {
    code: "A03",
    intro: "Organismele sunt grupate în cinci regnuri; virusurile stau în afara lor.",
    blocks: [
      {
        type: "flow",
        title: "Ierarhia taxonilor",
        rows: [{ steps: ["Specie", "Gen", "Familie", "Ordin", "Clasă", "Încrengătură", "Regn"] }],
        note: "Nomenclatura este binară: numele genului + numele speciei.",
      },
      {
        type: "table",
        title: "Cele cinci regnuri",
        cols: ["Regn", "Celule", "Organizare", "Nutriție", "Exemple"],
        rows: [
          ["Monera", "procariote", "unicelulare", "diverse", "bacilul tetanic, bacilul Koch"],
          ["Protista", "eucariote", "unicelulare", "autotrofă / heterotrofă", "euglena, plasmodiul malariei, verzeala zidurilor"],
          ["Fungi", "eucariote", "pluricelulare, imobile", "heterotrofă (fără clorofilă)", "drojdii, Penicillium, hribi"],
          ["Plantae", "eucariote", "pluricelulare", "fotoautotrofă", "alge, mușchi, ferigi, brad, grâu"],
          ["Animalia", "eucariote, fără perete", "pluricelulare", "heterotrofă", "râma, melcul, racul, peștii, mamiferele"],
        ],
      },
      {
        type: "table",
        title: "Virusurile",
        cols: ["Tip", "Material genetic", "Exemple", "Boli (viroze)"],
        rows: [
          ["Adenovirusuri (dezoxiribovirusuri)", "ADN", "virusul variolei, herpetic, al varicelei, al hepatitei", "variolă, herpes, varicelă, hepatită"],
          ["Ribovirusuri", "ARN", "virusul gripal, HIV, virusul turbării", "gripă, SIDA, turbare"],
        ],
        note: "Virusurile nu au organizare celulară și se înmulțesc doar în celula gazdă. Stări: virion, virus vegetativ, provirus.",
      },
      {
        type: "table",
        title: "Regnul Plantae",
        cols: ["Grup", "Tip", "Caractere", "Exemple"],
        rows: [
          ["Alge pluricelulare", "talofite", "acvatice, fără organe vegetative", "Spirogyra, Ulva (verzi); Ceramium (roșii); Fucus (brune)"],
          ["Briofite (briate)", "talofite", "fără vase conducătoare", "mușchiul de pământ, mușchiul de turbă"],
          ["Pteridofite (filicate)", "cormofite", "fără flori și semințe, se înmulțesc prin spori", "feriga comună"],
          ["Gimnosperme", "cormofite", "semințe golașe, fără fruct, glande rezinifere", "brad, molid, pin, tisă, zadă"],
          ["Angiosperme", "cormofite", "flori complete, sămânța închisă în fruct", "dicotiledonate: fasole, măr; monocotiledonate: grâu, porumb"],
        ],
      },
      {
        type: "table",
        title: "Nevertebrate",
        cols: ["Încrengătură", "Clase", "Exemple"],
        rows: [
          ["Celenterate", "hidrozoare, scifozoare", "hidra de apă dulce; meduza"],
          ["Platelminți", "trematode, cestode", "viermele de gălbează; tenia"],
          ["Nematelminți", "nematode", "limbricul, trichina, oxiurul"],
          ["Anelide", "oligochete, hirudinee", "râma; lipitoarea"],
          ["Moluște", "gasteropode, lamelibranhiate, cefalopode", "melcul de livadă; scoica, midia; sepia, caracatița"],
          ["Artropode", "arahnide, crustacei, insecte", "păianjenul, scorpionul; racul; albina, musca"],
        ],
      },
      {
        type: "table",
        title: "Vertebratele — cele cinci clase",
        cols: ["Clasă", "Tegument", "Respirație", "Fecundație", "Exemple"],
        rows: [
          ["Pești", "solzi", "branhială", "externă sau internă", "crap, știucă, șalău"],
          ["Amfibieni", "subțire, umed, fără solzi", "branhială (larve), pulmonară și cutanee (adulți)", "externă", "broasca de lac, salamandra"],
          ["Reptile", "uscat, cu solzi cornoși, năpârlire", "pulmonară", "internă", "șopârla, vipera, broasca țestoasă"],
          ["Păsări", "pene, puf; fără glande sudoripare", "pulmonară", "internă (ovipare)", "rândunica, vulturul, rața"],
          ["Mamifere", "păr, glande mamare, sebacee, sudoripare", "pulmonară", "internă (vivipare)", "lupul, delfinul, omul"],
        ],
        note: "Păsările și mamiferele sunt homeoterme (temperatura corpului constantă).",
      },
    ],
  },
  {
    code: "A04",
    blocks: [
      {
        type: "tree",
        title: "Țesuturile vegetale",
        root: {
          label: "Țesuturi vegetale",
          children: [
            { label: "Embrionare (meristeme)", children: [{ label: "apicale" }, { label: "intercalare" }] },
            {
              label: "Definitive",
              children: [
                { label: "de apărare: epiderma" },
                { label: "conducătoare: vase lemnoase, vase liberiene" },
                { label: "fundamentale: parenchim asimilator, parenchim de depozitare" },
                { label: "secretoare" },
              ],
            },
          ],
        },
      },
      {
        type: "table",
        title: "Vase lemnoase vs. vase liberiene",
        cols: ["Caracter", "Vase lemnoase (xilem)", "Vase liberiene (floem)"],
        rows: [
          ["Celule", "moarte, cu pereți puternic îngroșați", "vii, alungite, cu pereții transversali perforați (tuburi ciuruite)"],
          ["Ce conduc", "seva brută (apă și săruri minerale)", "seva elaborată (substanțe organice)"],
          ["Sens", "ascendent", "ambele sensuri"],
          ["Consum de energie", "nu (forța de sucțiune) / presiune radiculară", "da, transport activ, mai lent"],
        ],
      },
      {
        type: "table",
        title: "Țesuturi embrionare vs. definitive",
        cols: ["Caracter", "Embrionare", "Definitive"],
        rows: [
          ["Celule", "nediferențiate, perete subțire, citoplasmă abundentă", "diferențiate, specializate"],
          ["Diviziune", "da", "nu"],
          ["Rol", "creșterea în lungime", "funcții specializate (apărare, conducere, depozitare…)"],
        ],
      },
    ],
  },
  {
    code: "A05",
    blocks: [
      {
        type: "tree",
        title: "Țesuturile animale",
        root: {
          label: "Țesuturi animale",
          children: [
            { label: "Epitelial", children: [{ label: "de acoperire" }, { label: "glandular: exocrin, endocrin, mixt" }, { label: "senzorial" }] },
            { label: "Conjunctiv", children: [{ label: "moale: lax, adipos, reticulat" }, { label: "semidur: cartilaginos" }, { label: "dur: osos compact, osos spongios" }, { label: "sângele" }] },
            { label: "Muscular", children: [{ label: "striat scheletic" }, { label: "neted" }, { label: "striat cardiac" }] },
            { label: "Nervos", children: [{ label: "neuroni" }, { label: "celule gliale" }] },
          ],
        },
      },
      {
        type: "table",
        title: "Țesutul epitelial",
        cols: ["Tip", "Rol / localizare", "Exemple"],
        rows: [
          ["De acoperire", "protecție; epiderma și mucoasele; nevascularizat", "epiderma, mucoasa digestivă"],
          ["Glandular exocrin", "secreție prin canal", "glande sebacee, sudoripare, salivare"],
          ["Glandular endocrin", "hormoni direct în sânge", "tiroida, hipofiza, suprarenalele"],
          ["Glandular mixt", "secreție externă și internă", "pancreasul, gonadele"],
          ["Senzorial", "recepția stimulilor", "receptorii analizatorilor"],
        ],
      },
      {
        type: "table",
        title: "Țesutul conjunctiv",
        cols: ["Tip", "Particularități", "Localizare"],
        rows: [
          ["Moale – lax", "legătură între organe", "între organe"],
          ["Moale – adipos", "depozit de grăsime", "hipoderm"],
          ["Moale – reticulat", "formează elemente figurate", "ganglioni limfatici, măduva roșie"],
          ["Semidur – cartilaginos", "nevascularizat", "pavilionul urechii, laringe, trahee, discuri intervertebrale"],
          ["Dur – osos compact", "lamele dispuse concentric", "diafiza oaselor lungi"],
          ["Dur – osos spongios", "lamele dezordonate", "epifizele oaselor lungi, oase scurte și late"],
        ],
        note: "Țesutul osos este vascularizat.",
      },
      {
        type: "table",
        title: "Țesutul muscular",
        cols: ["Tip", "Contracție", "Localizare"],
        rows: [
          ["Striat scheletic", "rapidă, voluntară", "mușchii scheletici"],
          ["Neted", "lentă, involuntară", "pereții organelor interne și ai vaselor"],
          ["Striat cardiac", "involuntară", "miocard"],
        ],
      },
      {
        type: "table",
        title: "Neuronul",
        cols: ["Parte", "Descriere", "Sensul impulsului"],
        rows: [
          ["Corp celular (pericarion)", "nucleu, neuroplasmă, corpusculi Nissl, neurofibrile", "—"],
          ["Dendrite", "prelungiri scurte, ramificate", "de la periferie spre corp (aferent, centripet)"],
          ["Axon", "prelungire unică, lungă; butoni terminali cu mediator chimic", "de la corp spre periferie (eferent, centrifug)"],
        ],
        note: "Celulele gliale sunt de 10 ori mai numeroase, se divid, hrănesc și susțin neuronii și produc mielina.",
      },
    ],
  },
  {
    code: "A06",
    blocks: [
      {
        type: "flow",
        title: "Cum se desfășoară fotosinteza",
        rows: [
          { label: "Faza de lumină (grana)", steps: ["Lumină||absorbită de clorofilă", "Fotoliza apei||2H₂O → 2H₂ + O₂", "Produși||O₂ eliberat, ATP, H₂"] },
          { label: "Faza de întuneric (stroma)", steps: ["CO₂ din atmosferă||sursă de carbon", "Sinteză||folosește H₂ și energia din ATP", "Produs||glucide, lipide, proteine"] },
        ],
        note: "Ecuația globală: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂",
      },
      {
        type: "table",
        title: "Faza de lumină vs. faza de întuneric",
        cols: ["Caracter", "Faza de lumină", "Faza de întuneric"],
        rows: [
          ["Unde", "membrana tilacoidelor (grana)", "stroma cloroplastului"],
          ["Sursa de energie", "energia luminoasă", "energia chimică din ATP"],
          ["Ce se întâmplă", "fotoliza apei", "sinteza substanțelor organice"],
          ["Ce se eliberează", "O₂, ATP, H₂", "substanțe organice"],
        ],
      },
      {
        type: "table",
        title: "Fotosinteză vs. respirație aerobă",
        cols: ["Caracter", "Fotosinteza", "Respirația aerobă"],
        rows: [
          ["Ecuație", "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂", "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energie"],
          ["Energie", "se înmagazinează", "se eliberează (ATP)"],
          ["Organit", "cloroplast", "mitocondrie"],
          ["Se evidențiază după", "CO₂ absorbit, substanță organică produsă, O₂ eliberat", "substanță organică consumată, O₂ consumat, CO₂ produs"],
        ],
      },
      {
        type: "table",
        title: "Pigmenții asimilatori",
        cols: ["Pigment", "Rol"],
        rows: [
          ["Clorofila a", "absoarbe energia luminoasă și o poate converti în energie chimică"],
          ["Clorofila b", "absoarbe energia luminoasă, dar nu o poate converti"],
        ],
        note: "Importanța fotosintezei: conversia energiei luminoase în energie chimică, sinteza de substanțe organice, eliberarea oxigenului, purificarea atmosferei prin absorbția CO₂.",
      },
    ],
  },
  {
    code: "A07",
    blocks: [
      {
        type: "table",
        title: "Nutriția heterotrofă",
        cols: ["Tip", "Cum se hrănește", "Exemple", "Importanță"],
        rows: [
          ["Saprofită", "preia substanțe organice dizolvate din resturi", "bacterii, ciuperci, mucegaiuri", "descompun resturile, închid circuitul materiei; penicilina din mucegai"],
          ["Parazită", "pe seama organismelor vii, pe care le îmbolnăvește", "rugina grâului, mana viței de vie, cornul secarei, tăciunele porumbului; torțelul (Cuscuta), lupoaia", "boli la plante"],
          ["Simbiontă", "ajutor reciproc între două organisme", "lichenii (algă verde sau cianobacterie + ciupercă)", "micorize: fungi pe rădăcinile plantelor"],
        ],
        note: "Plantele parazite superioare și-au pierdut clorofila și extrag substanțe prin haustori, care pătrund în vasele liberiene ale gazdei.",
      },
      {
        type: "table",
        title: "Saprofite omnivore vs. specializate",
        cols: ["Tip", "Substrat", "Exemplu"],
        rows: [
          ["Omnivore", "variate", "mucegaiul comun"],
          ["Specializate", "un anumit substrat", "Mycoderma aceti (alcool etilic → acid acetic)"],
        ],
      },
    ],
  },
  {
    code: "A08",
    blocks: [
      {
        type: "flow",
        title: "Tubul digestiv",
        rows: [{ steps: ["Cavitate bucală||masticație, amilaza salivară", "Faringe||intersecția cu calea respiratorie", "Esofag", "Stomac||sucul gastric, pepsina", "Intestin subțire||duoden + intestin liber; absorbție", "Intestin gros||cecum, colon, rect"] }],
        note: "Glande anexe: glandele salivare, ficatul (bila) și pancreasul (suc pancreatic).",
      },
      {
        type: "table",
        title: "Enzimele digestive",
        cols: ["Enzimă", "Provine din", "Digeră", "Unde"],
        rows: [
          ["Amilaza salivară (ptialina)", "glande salivare", "amidonul → dextrine, maltoză", "cavitatea bucală"],
          ["Pepsina", "suc gastric", "proteinele → albumoze, peptone", "stomac"],
          ["Tripsina", "suc pancreatic", "proteinele", "duoden"],
          ["Lipaza pancreatică", "suc pancreatic", "lipidele emulsionate", "duoden"],
          ["Amilaza pancreatică", "suc pancreatic", "glucidele", "duoden"],
          ["Peptidaze, lipaza intestinală, dizaharidaze", "suc intestinal", "peptide, lipide, dizaharide", "intestin subțire"],
        ],
        note: "Bila nu conține enzime: sărurile biliare emulsionează grăsimile.",
      },
      {
        type: "table",
        title: "Glandele anexe",
        cols: ["Glandă", "Localizare", "Secreție", "Rol"],
        rows: [
          ["Glande salivare (parotide, sublinguale, submandibulare)", "cavitatea bucală", "salivă (apă, mucus, amilază)", "înmoaie alimentele, începe digestia glucidelor"],
          ["Ficat (~1,5 kg)", "cavitatea abdominală, subdiafragmatic", "bilă (depozitată în vezicula biliară)", "emulsionarea și absorbția grăsimilor; fără enzime"],
          ["Pancreas (glandă mixtă)", "lângă duoden", "suc pancreatic", "enzime proteolitice, lipolitice, glicolitice"],
        ],
      },
      {
        type: "table",
        title: "Digestia intracelulară vs. extracelulară",
        cols: ["Caracter", "Intracelulară", "Extracelulară"],
        rows: [
          ["Cum", "fagocitoză și pinocitoză, în vacuole digestive", "în cavități, cu participarea glandelor"],
          ["Exemple", "amiba, euglena, hidra, leucocitele", "mamiferele"],
        ],
      },
      {
        type: "table",
        title: "Bolile digestive",
        cols: ["Boală", "Cauze", "Manifestări"],
        rows: [
          ["Gastrită", "alcool, tutun, condimente, alimente alterate, supraîncărcarea stomacului", "greață, dureri gastrice, vărsături, regurgitări"],
          ["Ulcer gastroduodenal", "acțiunea corozivă a HCl; Helicobacter pylori", "leziuni ale mucoasei, arsuri, foame dureroasă, vomă cu sânge"],
          ["Toxiinfecții alimentare", "alimente alterate, gătite insuficient, depozitate greșit", "greață, vomă, diaree, febră"],
          ["Hepatită virală acută", "virusuri: A (alimente, mâini murdare); B și C (sânge, salivă, spermă)", "icter, urină închisă, scaun decolorat, ficat mărit"],
        ],
        note: "Prevenire: igienă, conservarea corectă a alimentelor, spălatul pe mâini, fără exces de alcool și tutun.",
      },
      {
        type: "table",
        title: "Stomacul la mamifere",
        cols: ["Tip", "Cine îl are", "Particularități"],
        rows: [
          ["Unicameral", "majoritatea mamiferelor", "voluminos la ierbivore și carnivore, redus la omnivore"],
          ["Tetracameral", "ierbivore rumegătoare", "burduf → ciur → (rumegat) → foios → cheag"],
        ],
      },
    ],
  },
];
