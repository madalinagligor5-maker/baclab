import type { Fisa } from "./types";
import type { Locus } from "@/lib/lab/genetics";

const NZ: Locus = { dom: "N", rec: "z", trait: "aspectul bobului", domText: "boabe netede", recText: "boabe zbârcite" };
const GG: Locus = { dom: "G", rec: "g", trait: "culoarea bobului", domText: "boabe galbene", recText: "boabe verzi" };

export const FISE_3: Fisa[] = [
  {
    code: "A17",
    blocks: [
      {
        type: "tree",
        title: "Mișcările plantelor",
        root: {
          label: "Mișcările plantelor",
          children: [
            { label: "Pasive (fără energie)", children: [{ label: "răspândirea fructelor, semințelor, sporilor" }] },
            {
              label: "Active (cu energie)",
              children: [
                { label: "Tactisme (celule mobile)", children: [{ label: "chimiotactism" }, { label: "fototactism" }] },
                { label: "Tropisme (organe, orientate)", children: [{ label: "geotropism" }, { label: "fototropism" }, { label: "chimiotropism" }] },
                { label: "Nastii (neorientate)", children: [{ label: "fotonastii" }, { label: "termonastii" }, { label: "seismonastii" }] },
              ],
            },
          ],
        },
      },
      {
        type: "table",
        title: "Tropismele organelor",
        cols: ["Organ", "Geotropism", "Fototropism"],
        rows: [
          ["Rădăcina", "pozitiv", "negativ"],
          ["Tulpina", "negativ", "pozitiv"],
        ],
        note: "Tropismul pozitiv = mișcare în sensul stimulului; negativ = în sens opus.",
      },
      {
        type: "table",
        title: "Tactisme, tropisme, nastii",
        cols: ["Tip", "Direcția depinde de stimul?", "Exemple"],
        rows: [
          ["Tactism", "da, se deplasează celula", "gameții bărbătești atrași spre cei femeiești (chimiotactism); alge spre lumină (fototactism)"],
          ["Tropism", "da, orientat", "rădăcina spre substanțe nutritive (chimiotropism); floarea-soarelui spre lumină"],
          ["Nastie", "nu, depinde de intensitate", "regina nopții (fotonastie); lalea (termonastie); Mimosa pudica (seismonastie)"],
        ],
      },
    ],
  },
  {
    code: "A18",
    blocks: [
      {
        type: "flow",
        title: "Arcul reflex",
        rows: [{ steps: ["Receptor||culege informația", "Cale aferentă (senzitivă)", "Centru nervos||analizează, emite comanda", "Cale eferentă (motoare)", "Efector||mușchi sau glandă"] }],
      },
      {
        type: "tree",
        title: "Sistemul nervos",
        root: {
          label: "Sistemul nervos",
          children: [
            { label: "Central", children: [{ label: "măduva spinării" }, { label: "encefal: trunchi cerebral, cerebel, diencefal, emisfere cerebrale" }] },
            { label: "Periferic", children: [{ label: "nervi spinali și cranieni" }, { label: "ganglioni" }] },
            { label: "Vegetativ (coordonează organele interne)" },
          ],
        },
      },
      {
        type: "table",
        title: "Măduva spinării",
        cols: ["Caracter", "Substanța cenușie", "Substanța albă"],
        rows: [
          ["Poziție", "la interior, în formă de H", "la exterior"],
          ["Alcătuire", "corpii neuronilor + fibre; coarne posterioare, laterale, anterioare", "axoni mielinizați; cordoane posterioare, anterioare, laterale"],
          ["Rol", "centru nervos reflex", "conducere (fascicule ascendente și descendente)"],
        ],
        note: "Se întinde de la vertebra C1 până la L2, în canalul vertebral.",
      },
      {
        type: "table",
        title: "Encefalul",
        cols: ["Parte", "Rol"],
        rows: [
          ["Trunchi cerebral (bulb, punte, mezencefal)", "conducere; centri vitali"],
          ["Cerebel", "echilibru (informații de la urechea internă), tonus muscular, precizia mișcărilor"],
          ["Diencefal: talamus, epitalamus, metatalamus, hipotalamus", "hipotalamus: homeostazie, temperatură, comportamente, control al sistemului endocrin"],
          ["Emisfere cerebrale (lobi frontal, temporal, parietal, occipital)", "scoarța: arii senzitive, motorii și de asociație"],
        ],
      },
      {
        type: "table",
        title: "Reflexe monosinaptice vs. polisinaptice",
        cols: ["Caracter", "Monosinaptice", "Polisinaptice"],
        rows: [
          ["Neuroni pe traseu", "doi: senzitiv și motor", "și neuroni intercalari"],
          ["Timp de latență", "scurt", "lung"],
          ["Viteză", "mare", "mică"],
          ["Excitația", "nu iradiază", "iradiază"],
          ["Exemple", "rotulian, achilean, bicipital", "reflexul de flexie (de apărare)"],
        ],
      },
      {
        type: "table",
        title: "Bolile SNC",
        cols: ["Boală", "Cauză", "Manifestări"],
        rows: [
          ["Parkinson", "degenerarea progresivă a sistemului nervos", "rigiditate, tremur, mers cu pași mici"],
          ["Paralizie", "lezarea unui nerv (infecții, tumori, traumatisme)", "monoplegie, hemiplegie, tetraplegie"],
          ["Epilepsie", "descărcări electrice ritmice ale unor neuroni", "convulsii, pierderea cunoștinței"],
          ["Scleroza în plăci", "cauză neclară; distrugerea tecii de mielină", "tulburări de echilibru, vorbire, vedere"],
        ],
        note: "Factori de risc: droguri, alcool, cafea, tutun, surmenaj.",
      },
    ],
  },
  {
    code: "A19",
    blocks: [
      {
        type: "table",
        title: "Ochiul",
        cols: ["Învelișul", "Părți", "Rol"],
        rows: [
          ["Externă (fibroasă)", "sclerotica și corneea", "protecție; sclerotica este albă, corneea transparentă și nevascularizată"],
          ["Medie (vasculară)", "coroida, irisul cu pupila", "hrănire, cameră obscură; pupila reglează lumina"],
          ["Internă (nervoasă)", "retina", "receptorul: conuri și bastonașe"],
          ["Aparatul optic", "cornee, umoare apoasă, cristalin, corp vitros", "formarea imaginii pe retină (reală, mai mică, răsturnată)"],
        ],
      },
      {
        type: "table",
        title: "Conuri vs. bastonașe",
        cols: ["Caracter", "Conuri", "Bastonașe"],
        rows: [
          ["Număr", "~7 milioane", "~130 milioane"],
          ["Localizare", "pata galbenă; exclusiv în foveea centralis", "periferie; lipsesc în fovee"],
          ["Vedere", "diurnă, cromatică, detalii", "nocturnă, acromatică"],
        ],
      },
      {
        type: "table",
        title: "Deficiențele de vedere",
        cols: ["Deficiență", "Cauză", "Imaginea se formează", "Corecție"],
        rows: [
          ["Miopie", "glob ocular alungit, cristalin cu putere mare", "în fața retinei", "lentile divergente (biconcave)"],
          ["Hipermetropie", "glob ocular turtit, cristalin cu putere mică", "în spatele retinei", "lentile convergente (biconvexe)"],
          ["Astigmatism", "curbură neuniformă a corneei sau cristalinului", "în puncte diferite", "lentile cilindrice"],
          ["Strabism", "slăbirea unui mușchi extern", "axele optice nu sunt paralele", "chirurgical sau exerciții"],
        ],
      },
      {
        type: "table",
        title: "Urechea",
        cols: ["Parte", "Componente", "Rol"],
        rows: [
          ["Externă", "pavilion, conduct auditiv extern, timpan; cerumen", "captarea sunetelor"],
          ["Medie", "ciocan, nicovală, scăriță; trompa lui Eustachio", "transmiterea sunetului spre urechea internă"],
          ["Internă", "labirint osos și membranos: vestibul, canale semicirculare, melc", "melc: organul Corti (auz); vestibul și canale: echilibru"],
        ],
      },
      {
        type: "table",
        title: "Simțurile",
        cols: ["Organ", "Receptori", "Stimul"],
        rows: [
          ["Pielea", "tactili, termici, dureroși, de presiune", "atingere, temperatură, durere"],
          ["Nasul", "celule olfactive (chemoreceptori de distanță)", "substanțe volatile dizolvate în mucus"],
          ["Limba", "muguri gustativi (receptori de contact)", "substanțe solubile: acru, amar, dulce, sărat"],
          ["Ochiul", "conuri și bastonașe", "lumina"],
          ["Urechea", "organul Corti; creste ampulare și macule", "sunete; poziția capului"],
        ],
      },
      {
        type: "table",
        title: "Surditatea",
        cols: ["Tip", "Cauză"],
        rows: [
          ["De conducere", "dop de ceară, îngroșarea sau spargerea timpanului, leziuni ale urechii externe sau medii"],
          ["Nervoasă", "leziuni ale nervului acustic sau ale centrului nervos din creier"],
        ],
        note: "Sunete peste 120 dB pot cauza durere, iar peste 140 dB pot distruge receptorii.",
      },
    ],
  },
  {
    code: "A20",
    blocks: [
      {
        type: "table",
        title: "Reproducerea asexuată la plante",
        cols: ["Mod", "Ce este", "Exemple"],
        rows: [
          ["Spori", "structuri specializate", "mușchi, ferigi"],
          ["Stolon", "tulpină târâtoare", "fragi, căpșun"],
          ["Rizom", "tulpină subterană", "iris"],
          ["Bulb", "tulpină subterană", "lalea, zambilă, ceapă"],
          ["Tubercul", "tulpină subterană", "cartof"],
          ["Butași", "fragmente de tulpini sau frunze", "mușcată, begonie"],
          ["Marcote", "fragmente îngropate, neseparate de planta-mamă", "viță de vie"],
          ["Altoi", "ramură atașată pe un portaltoi", "pomi fructiferi"],
        ],
      },
      {
        type: "table",
        title: "Floarea",
        cols: ["Parte", "Alcătuire", "Rol"],
        rows: [
          ["Caliciu", "sepale", "înveliș floral"],
          ["Corolă", "petale", "înveliș floral"],
          ["Androceu (♂)", "stamine: filament + anteră (polen)", "formează gameții bărbătești (spermatii)"],
          ["Gineceu (♀)", "carpele; pistil: ovar, stil, stigmat", "în ovar: ovule cu sac embrionar"],
        ],
        note: "Sacul embrionar are 7 nuclee: 6 haploide (unul este oosfera) și 1 diploid (nucleul secundar).",
      },
      {
        type: "flow",
        title: "Dubla fecundație",
        rows: [
          { label: "Prima contopire", steps: ["Spermatie 1 + oosferă", "Zigot principal (2n)", "Embrion al semințelor"] },
          { label: "A doua contopire", steps: ["Spermatie 2 + nucleu secundar (2n)", "Zigot accesoriu (3n)", "Endosperm (albumen)"] },
        ],
      },
      {
        type: "table",
        title: "Sămânța și fructul",
        cols: ["Ce", "Provine din", "Alcătuire"],
        rows: [
          ["Sămânța", "ovul", "tegument, embrion (radiculă, hipocotil, gemulă), cotiledoane (1 la monocotiledonate, 2 la dicotiledonate), endosperm"],
          ["Fructul", "ovar", "—"],
        ],
      },
      {
        type: "table",
        title: "Tipuri de fructe",
        cols: ["Categorie", "Tip", "Exemple"],
        rows: [
          ["Cărnoase", "drupă", "prun, cireș, cais"],
          ["Cărnoase", "bacă", "tomate, strugure"],
          ["Cărnoase", "poamă", "măr, păr, gutui"],
          ["Uscate indehiscente", "nucă, achenă, cariopsă", "nucă; floarea-soarelui; grâu, porumb"],
          ["Uscate dehiscente", "păstaie, capsulă", "fasole; mac"],
        ],
      },
    ],
  },
  {
    code: "A21",
    blocks: [
      {
        type: "flow",
        title: "Ciclul unui organism cu reproducere sexuată",
        loop: true,
        rows: [{ steps: ["Organism 2n", "Meioză||2n → n", "Gameți (n)||spermatozoid + ovul", "Fecundație||n + n → 2n", "Zigot (2n)"] }],
      },
      {
        type: "table",
        title: "Sistemul reproducător",
        cols: ["", "Masculin", "Feminin"],
        rows: [
          ["Gonade", "testicule (în scrot): tuburi seminifere, spermatogeneză; glande mixte", "ovare (în abdomen): foliculi, ovogeneză; glande mixte"],
          ["Căi genitale", "epididim, canale deferente, canale ejaculatorii, uretră", "trompe uterine, uter, vagin"],
          ["Glande anexe / organe", "vezicule seminale, prostată, penis", "vulvă; uterul asigură nidarea, sarcina și nașterea"],
        ],
      },
      {
        type: "table",
        title: "Bolile cu transmitere sexuală",
        cols: ["Boală", "Agent", "Manifestări"],
        rows: [
          ["Sifilis", "bacterie (spirochetă)", "șancru → erupție (rozeolă) → afectarea inimii și creierului"],
          ["Gonoree", "bacterie (gonococ)", "dureri uretrale, scurgere galben-verzuie, sterilitate"],
          ["Candidoză", "ciupercă (Candida albicans)", "scurgere albicioasă, inflamare, mâncărimi"],
          ["SIDA", "virus (HIV)", "depresie imună, infecții grave, tumori"],
        ],
        note: "Prevenire: prezervativ, evitarea partenerilor multipli, seringi de unică folosință, controlul donatorilor de sânge, igienă.",
      },
    ],
  },
  {
    code: "A22",
    intro: "Aici sunt schemele de încrucișare din legile lui Mendel, calculate de aplicație.",
    blocks: [
      {
        type: "table",
        title: "Termenii eredității",
        cols: ["Termen", "Înseamnă", "Exemplu"],
        rows: [
          ["Gene alele", "forme ale aceleiași gene, la același locus", "N și z"],
          ["Dominant / recesiv", "se manifestă / se manifestă doar în homozigot", "N domină z"],
          ["Homozigot", "alele identice", "NN, zz"],
          ["Heterozigot", "alele diferite", "Nz"],
          ["Genotip", "totalitatea genelor", "NzGg"],
          ["Fenotip", "genotip + mediu", "boabe netede, galbene"],
          ["Gamet", "conține o singură alelă din pereche (haploid)", "N sau z"],
        ],
      },
      {
        type: "cross",
        title: "Monohibridare: F2 (Nz × Nz)",
        parents: ["Nz", "Nz"],
        loci: [NZ],
        note: "Legea purității gameților. În F1 toți hibrizii sunt Nz (uniformitate). În F2: 3 : 1 după fenotip, 1 : 2 : 1 după genotip.",
      },
      {
        type: "cross",
        title: "Dihibridare: F2 (NzGg × NzGg)",
        parents: ["NzGg", "NzGg"],
        loci: [NZ, GG],
        note: "Legea segregării independente. Din P: NNGG × zzgg obținem F1 NzGg (100% netede, galbene). În F2: 9 : 3 : 3 : 1.",
      },
      {
        type: "cross",
        title: "Încrucișarea test (NzGg × zzgg)",
        parents: ["NzGg", "zzgg"],
        loci: [NZ, GG],
        note: "Indivizii dublu recesivi formează un singur tip de gameți, de aceea fenotipul descendenților arată gameții celuilalt părinte: 1 : 1 : 1 : 1.",
      },
      {
        type: "table",
        title: "Grupele de sânge (codominanță)",
        cols: ["Grupa", "Genotipuri", "Antigene pe hematii", "Anticorpi în plasmă", "Donează la", "Primește de la"],
        rows: [
          ["I (O)", "ll", "—", "alfa și beta", "toate (donator universal)", "doar O"],
          ["II (A)", "LᴬLᴬ, Lᴬl", "A", "beta", "A, AB", "A, O"],
          ["III (B)", "LᴮLᴮ, Lᴮl", "B", "alfa", "B, AB", "B, O"],
          ["IV (AB)", "LᴬLᴮ", "A și B", "—", "doar AB", "toate (primitor universal)"],
        ],
        note: "Alelele Lᴬ și Lᴮ sunt codominante: ambele se exprimă în fenotipul AB. Aglutinogenul și aglutinina de același fel nu pot coexista (A cu alfa, B cu beta).",
      },
      {
        type: "table",
        title: "Legile lui Mendel",
        cols: ["Lege", "Enunț", "Raport"],
        rows: [
          ["Uniformitatea F1", "hibrizii din prima generație sunt identici", "100%"],
          ["Purității gameților", "gameții conțin doar una dintre alelele din pereche", "F2 monohibrid: 3:1 și 1:2:1"],
          ["Segregării independente", "fiecare pereche de alele segregă independent", "F2 dihibrid: 9:3:3:1"],
        ],
        note: "Importanță: obținerea de soiuri și rase noi, ameliorare, sfat genetic.",
      },
    ],
  },
  {
    code: "A23",
    blocks: [
      {
        type: "flow",
        title: "Crossing-over (recombinare intracromozomală)",
        rows: [{ steps: ["Profaza I||cromozomii omologi se perechează", "Bivalenți||tetrade", "Chiasme||între cromatide nesurori", "Crossing-over||schimb de material genetic", "Cromozomi recombinați"] }],
        note: "„Dansul cromozomilor” (metafaza I) este recombinarea intercromozomală.",
      },
      {
        type: "table",
        title: "Determinismul cromozomal al sexului",
        cols: ["", "Tipul A (Drosophila)", "Tipul B (Abraxas)"],
        rows: [
          ["Femela", "XX (homogametic)", "XY (heterogametic)"],
          ["Masculul", "XY (heterogametic)", "XX (homogametic)"],
          ["Se întâlnește la", "om, mamifere, Drosophila, hamei, cânepă, spanac", "unele insecte, amfibieni, reptile, păsări"],
        ],
        note: "Sexul heterogametic produce 50% gameți cu X și 50% cu Y.",
      },
      {
        type: "table",
        title: "Mutațiile",
        cols: ["Criteriu", "Tipuri"],
        rows: [
          ["Celula afectată", "gametice (se transmit ereditar), somatice (structură mozaicată)"],
          ["Ce se modifică", "genice (și punctiforme), cromozomiale (structură), genomice (număr)"],
          ["Mutații cromozomiale", "translocații, deleții, adiții, inversii, duplicații"],
          ["Mutații genomice", "poliploidii (3n, 4n…), aneuploidii (2n+1 trisomie, 2n−1 monosomie)"],
          ["Efect", "majoritatea dăunătoare, puține neutre sau utile"],
        ],
      },
      {
        type: "table",
        title: "Factori mutageni",
        cols: ["Tip", "Exemple", "Efecte"],
        rows: [
          ["Fizici", "radiații ionizante și neionizante, cosmice, variații bruște de temperatură", "cancerigen, teratogen"],
          ["Chimici", "derivați ai bazelor azotate, acid nitros, coloranți, unele medicamente, colchicina", "cancerigen, teratogen"],
          ["Biologici", "virusuri, unele microorganisme parazite", "alterări genetice, restructurări, cancer"],
        ],
      },
      {
        type: "table",
        title: "Boli cromozomiale",
        cols: ["Boală", "Anomalie", "Cine"],
        rows: [
          ["Sindrom Down", "trisomia 21 (47 cromozomi)", "ambele sexe"],
          ["Sindrom Klinefelter", "trisomie XXY", "bărbați"],
          ["Sindrom Turner", "monosomie XO", "femei"],
          ["Țipătul pisicii", "modificarea structurii unui cromozom autozom", "ambele sexe"],
        ],
      },
      {
        type: "table",
        title: "Boli genice",
        cols: ["Boală", "Transmitere", "Particularități"],
        rows: [
          ["Polidactilie", "autozomală, dominantă", "degete în plus"],
          ["Sindactilie", "autozomală, dominantă", "degete unite"],
          ["Albinism", "autozomală, recesivă", "lipsa pigmenților melanici"],
          ["Anemie falciformă", "autozomală", "hematii în formă de seceră; heterozigoții sunt mai rezistenți la malarie"],
          ["Hemofilie", "recesivă, legată de X", "nu se coagulează sângele"],
          ["Daltonism", "recesivă, legată de X", "nu distinge roșu și verde"],
        ],
        note: "Hemizigoția: la bărbați gena de pe X se manifestă mereu, la femei doar în stare homozigotă. Guta și diabetul zaharat apar din deficiențe enzimatice.",
      },
    ],
  },
  {
    code: "proba",
    intro: "Cum arată proba E.d. Biologie vegetală și animală. Sunt 90 de puncte, plus 10 din oficiu. Nota este totalul împărțit la 10, iar de la 5 ești promovat.",
    blocks: [
      {
        type: "table",
        title: "Structura subiectului",
        cols: ["Subiect", "Cerință", "Puncte", "Ce se cere"],
        rows: [
          ["I.A", "Completare", "4", "două noțiuni care completează o afirmație"],
          ["I.B", "Exemple și caracteristici", "6", "două exemple, fiecare cu o caracteristică sau un rol"],
          ["I.C", "Grile", "10", "5 întrebări, un singur răspuns corect"],
          ["I.D", "Adevărat / Fals", "10", "3 afirmații; la cele false, corectare fără negație"],
          ["II.A", "Mediul intern, circulația, boli", "18", "a), b), calcul în lanț cu procente, o cerință formulată de tine"],
          ["II.B", "Genetică", "12", "genotipuri, gameți, procente; o cerință formulată de tine"],
          ["III.1", "Funcții de relație, excreție etc.", "14", "denumiri, explicație, 4 enunțuri câte 2 pentru 2 conținuturi"],
          ["III.2", "Țesuturi, ereditate", "16", "exemple, un argument, minieseu cu 6 noțiuni"],
        ],
        note: "Total 90 + 10 din oficiu = 100. Timp de lucru: 3 ore.",
      },
      {
        type: "flow",
        title: "Cum rezolvi un calcul în lanț",
        rows: [{ steps: ["Scrie datele||masa corpului, procentele", "Primul procent||din masa corpului", "Al doilea procent||din rezultatul anterior", "Al treilea procent||din rezultatul anterior", "Răspuns||cu unitatea de măsură"] }],
        note: "Cerința de la punctul d) cere să adaugi tu o altă cerință și s-o rezolvi (de exemplu, masa elementelor figurate: 45% din masa sângelui).",
      },
      {
        type: "flow",
        title: "Cum rezolvi o problemă de genetică",
        rows: [{ steps: ["Notează alelele||literă mare = dominant", "Genotipurile părinților", "Gameții fiecărui părinte", "Pătratul Punnett", "Fenotipuri și rapoarte"] }],
      },
      {
        type: "flow",
        title: "Cum construiești minieseul",
        rows: [{ steps: ["Scrie 6 noțiuni specifice temei", "Text de 3–4 fraze", "Folosește toate noțiunile în corelație", "Limbaj științific"] }],
      },
    ],
  },
];
