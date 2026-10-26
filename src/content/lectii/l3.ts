import type { Lectie } from "./types";

/** Lecții A13–A18. Surse: ghidul „Biologie vegetală și animală” (Nominatrix, 2020) și fișele de sinteză E.d (2012). */
export const LECTII_3: Lectie[] = [
  {
    code: "A13",
    intro: "Inima este o pompă cu patru camere. Sângele parcurge două circuite separate structural, dar legate funcțional.",
    sectiuni: [
      {
        titlu: "Inima",
        text: [
          "Este situată în cutia toracică, între plămâni, cu vârful spre stânga, și este învelită de pericard. Peretele are trei straturi: epicard, miocard (țesut muscular striat cardiac) și endocard. Are patru camere: două atrii (la bază, pereți subțiri, nu comunică între ele) și două ventricule (la vârf, pereți mai groși, nu comunică între ele).",
        ],
        puncte: [
          "În atriul drept se deschid venele cave (sânge neoxigenat). În atriul stâng se deschid venele pulmonare (sânge oxigenat).",
          "Din ventriculul drept pleacă artera pulmonară (sânge neoxigenat). Din ventriculul stâng pleacă aorta (sânge oxigenat).",
          "Valvula tricuspidă este între atriul și ventriculul drept, iar cea bicuspidă (mitrală) între atriul și ventriculul stâng. La originea celor două artere sunt valvule semilunare. Valvulele permit curgerea într-un singur sens.",
          "Peretele ventriculului stâng este mai gros, pentru că pompează în marea circulație.",
        ],
      },
      {
        titlu: "Vasele de sânge",
        puncte: [
          "Arterele pleacă de la inimă. Aorta duce sânge oxigenat, artera pulmonară sânge neoxigenat.",
          "Capilarele: cele mai mici vase, perete dintr-un singur strat (endoteliu). Aici se fac schimburile dintre sânge și celule.",
          "Venele se întorc la inimă. Cavele aduc sângele de la corp în atriul drept, cele patru vene pulmonare aduc sângele de la plămâni în atriul stâng.",
        ],
      },
      {
        titlu: "Cele două circuite",
        text: [
          "Circulația este dublă, completă (sângele oxigenat nu se amestecă cu cel neoxigenat) și închisă.",
        ],
        puncte: [
          "Marea circulație (sistemică, de nutriție): ventricul stâng → aortă → organe → vene cave → atriu drept.",
          "Mica circulație (pulmonară, de oxigenare): ventricul drept → artere pulmonare → plămâni → vene pulmonare → atriu stâng.",
        ],
      },
      {
        titlu: "Boli ale sistemului circulator",
        puncte: [
          "Varicele: dilatarea venelor superficiale la membrele inferioare; cauză: statul prelungit în picioare. Prevenire: ciorapi compresivi, mers.",
          "Ateroscleroza: depunerea de lipide și colesterol în pereții arterelor mari; cauze: grăsimi animale, sedentarism, fumat.",
          "Hipertensiunea arterială: valori peste normal; cauze: stres, sare, obezitate, tutun, alcool. Manifestări: cefalee, amețeli, palpitații.",
          "Infarctul miocardic: astuparea unui vas coronar cu un cheag, necroza miocardului, durere în regiunea inimii.",
          "Accidentul vascular cerebral: ateroscleroză, hipertensiune; paralizii, tulburări de vorbire.",
          "Prevenire generală: fără tutun și alcool, mișcare, alimentație echilibrată cu puține grăsimi și sare, evitarea stresului.",
        ],
      },
    ],
    retine: [
      "Venele pulmonare duc sânge oxigenat, arterele pulmonare sânge neoxigenat.",
      "Tricuspida este în dreapta, bicuspida în stânga.",
      "Marea circulație: ventricul stâng → atriu drept. Mica: ventricul drept → atriu stâng.",
    ],
    capcane: [
      "Arteră nu înseamnă „sânge oxigenat”, iar venă nu înseamnă „sânge neoxigenat”: contează sensul față de inimă.",
      "Nu confunda atriile cu ventriculele la locul de plecare al arterelor.",
    ],
  },
  {
    code: "A14",
    intro: "Excreția la plante înseamnă mai ales transpirația: pierderea apei sub formă de vapori, prin stomate. Este reglată de celulele stomatice.",
    sectiuni: [
      {
        titlu: "Ce se elimină",
        text: ["Se elimină produși de dezasimilație care ar deveni toxici prin acumulare, substanțe în exces și semnale chimice (nectar, arome). Căile principale: transpirația și gutația."],
      },
      {
        titlu: "Transpirația",
        text: [
          "Eliminarea apei sub formă de vapori. Se face predominant prin frunză: masiv prin stomate, puțin prin cuticulă; la tulpină, în cantitate mică, prin lenticele. Frunza este adaptată: suprafață mare de evaporare, țesut asimilator cu spații intercelulare, epidermă cu numeroase stomate.",
        ],
      },
      {
        titlu: "Stomata",
        text: [
          "Este alcătuită din două celule stomatice reniforme, cu concavitatea spre interior, care delimitează un orificiu numit ostiolă. Are un mecanism osmotic de reglare: la lumină celulele se hidratează și ostiola se deschide, la întuneric se închide. Așa se păstrează echilibrul hidric al plantei.",
        ],
      },
      {
        titlu: "De ce este importantă transpirația",
        puncte: [
          "Determină ascensiunea sevei brute (forța de sucțiune).",
          "Împiedică supraîncălzirea plantei.",
          "Ține ostiolele deschise, deci permite schimbul de O₂ și CO₂ pentru fotosinteză și respirație.",
        ],
      },
      {
        titlu: "Factori care o influențează",
        text: ["Lumina, temperatura și umiditatea aerului. Aerul uscat și temperatura mai mare cresc pierderea de apă. O cuticulă groasă o limitează, de aceea plantele din medii uscate o au mai groasă."],
      },
    ],
    retine: [
      "Transpirația elimină apă sub formă de vapori, mai ales prin stomate.",
      "Stomata = două celule stomatice + ostiolă.",
      "Lumina deschide stomatele.",
    ],
    capcane: [
      "Planta nu elimină apă „numai lichidă” la transpirație: eliminarea este sub formă de vapori.",
      "Ostiola este orificiul, nu celula.",
    ],
  },
  {
    code: "A15",
    intro: "Rinichii filtrează sângele și formează urina. Sistemul excretor este format din rinichi și căile urinare, într-o ordine care trebuie știută pe de rost.",
    sectiuni: [
      {
        titlu: "Căile de excreție",
        text: ["La animale: calea urinară (principală), cea tegumentară (transpirația) și cea pulmonară (CO₂, vapori)."],
      },
      {
        titlu: "Rinichii",
        text: [
          "Organe pereche, în cavitatea abdominală, de o parte și de alta a coloanei vertebrale (regiunea toraco-lombară), cu formă de bob de fasole. La polul superior se află glandele suprarenale. Au o capsulă fibroasă și parenchim cu zonă corticală (externă, granulară) și medulară (internă, cu piramide Malpighi).",
          "Unitatea structurală și funcțională este nefronul: corpuscul renal (glomerul vascular și capsula Bowman) și tub urinifer (tub contort proximal, ansa Henle, tub contort distal). În nefron au loc filtrarea, reabsorbția și secreția, care formează urina finală.",
        ],
      },
      {
        titlu: "Căile urinare",
        text: [
          "Două uretere (duc urina de la rinichi la vezică), vezica urinară (rezervor, aproximativ 300–350 mL) și uretra (elimină urina). La bărbat uretra este comună cu sistemul reproducător.",
        ],
      },
      {
        titlu: "Rolul rinichiului",
        text: ["Filtrarea sângelui și formarea urinei, eliminarea produșilor de metabolism și menținerea echilibrului hidroelectrolitic."],
      },
      {
        titlu: "Boli",
        puncte: [
          "Litiaza urinară: calculi renali. Cauze: tulburări de metabolism, urină concentrată, alimentație necorespunzătoare. Manifestări: dureri lombare, hemoragii, febră, greață.",
          "Insuficiența renală cronică: afecțiuni renale, infecții, diabet, hipertensiune. Manifestări: astenie, anemie, scăderea sau oprirea urinei (anurie).",
          "Prevenire: alimentație echilibrată, igienă, tratarea infecțiilor, evitarea abuzului de medicamente și a frigului excesiv.",
        ],
      },
    ],
    retine: [
      "Rinichi → uretere → vezică urinară → uretră.",
      "Nefron = corpuscul Malpighi + tub urinifer.",
      "Ureterele duc urina spre vezică, uretra o duce la exterior.",
    ],
    capcane: [
      "Nu inversa ureterele cu uretra.",
      "Cortex = zona externă, medulara = zona internă.",
    ],
  },
  {
    code: "A16",
    intro: "Mișcarea se bazează pe sistemul locomotor: oasele sunt partea pasivă, mușchii partea activă.",
    sectiuni: [
      {
        titlu: "Scheletul",
        puncte: [
          "Capul: neurocraniu (cutia craniană) și viscerocraniu (oasele feței).",
          "Trunchiul: coloana vertebrală (33–34 de vertebre), 12 perechi de coaste și sternul; împreună formează cutia toracică.",
          "Membrul superior: centura scapulară (omoplat și claviculă), brațul (humerus), antebrațul (radius și ulnă), mâna (carpiene, metacarpiene, falange).",
          "Membrul inferior: centura pelviană (oasele coxale), coapsa (femur), gamba (tibie și fibulă), piciorul (tarsiene, metatarsiene, falange). Coxalele și osul sacral formează bazinul.",
        ],
      },
      {
        titlu: "Mușchii",
        text: [
          "Mușchii scheletici sunt formați din țesut striat, se fixează pe oase prin tendoane și, prin contracție, mișcă oasele. Principalele grupe: ai capului, ai gâtului, ai trunchiului, ai membrului superior (deltoid, biceps și triceps brahial, flexorii și extensorii degetelor) și ai membrului inferior (fesieri, croitor, mușchii gambei).",
          "Mușchii lucrează în perechi antagoniste: când bicepsul se contractă, flectează antebrațul pe braț, iar tricepsul se relaxează. Invers la extensie.",
        ],
      },
      {
        titlu: "Adaptări la poziția verticală la om",
        text: ["Torace lărgit, bazin format prin sudarea coxalelor cu sacrul, curburile coloanei, curbura plantară, mobilitatea mâinii. Mamiferele pot fi digitigrade (pisica), unguligrade (vaca, calul) sau plantigrade (urs, om)."],
      },
    ],
    retine: [
      "Osul brațului: humerus. Antebrațul: radius + ulnă. Coapsa: femur. Gamba: tibie + fibulă.",
      "Oase = partea pasivă, mușchi = partea activă.",
      "Biceps și triceps sunt antagoniști.",
    ],
    capcane: [
      "Radiusul și ulna sunt la antebraț, nu la gambă.",
      "Clavicula și omoplatul formează centura scapulară, nu pe cea pelviană.",
    ],
  },
  {
    code: "A17",
    intro: "Plantele nu au sistem nervos, dar reacționează la stimuli prin mișcări. Cheia este să deosebești mișcările orientate de cele neorientate.",
    sectiuni: [
      {
        titlu: "Sensibilitatea",
        text: ["Este proprietatea de a reacționa la stimulii din mediu. La plante, mișcările sunt pasive (fără consum de energie: răspândirea semințelor, fructelor, sporilor) sau active (cu consum de energie)."],
      },
      {
        titlu: "Mișcările active",
        puncte: [
          "Tactisme: mișcări ale celulelor mobile (gameți, alge unicelulare). Chimiotactism (gameții masculini spre cei feminini), fototactism (spre lumină).",
          "Tropisme: mișcări de creștere ale organelor, orientate în funcție de direcția stimulului. Pozitive (spre stimul) sau negative (în sens opus).",
          "Nastii: mișcări neorientate, a căror direcție nu depinde de direcția stimulului.",
        ],
      },
      {
        titlu: "Exemple de tropisme",
        puncte: [
          "Geotropism (gravitropism): rădăcina pozitiv, tulpina negativ.",
          "Fototropism: tulpina pozitiv (floarea-soarelui urmărește lumina), rădăcina negativ.",
          "Chimiotropism: rădăcina spre substanțe nutritive.",
          "Hidrotropism: rădăcina spre apă. Tigmotropism: cârceii se înfășoară pe suport.",
        ],
      },
      {
        titlu: "Exemple de nastii",
        puncte: [
          "Fotonastie: regina nopții se deschide noaptea, zorelele și păpădia ziua.",
          "Termonastie: laleaua se deschide la căldură.",
          "Seismonastie: mimoza își strânge foliolele la atingere.",
        ],
      },
    ],
    retine: [
      "Tropism = orientat după stimul, nastie = neorientat.",
      "Rădăcina: geotropism pozitiv, fototropism negativ. Tulpina: invers.",
      "Mimoza = seismonastie.",
    ],
    capcane: [
      "Tropismele și nastiile sunt mișcări ale plantelor, nu locomoție.",
      "Tactismul aparține celulelor mobile, nu organelor.",
    ],
  },
  {
    code: "A18",
    intro: "Sistemul nervos central (măduva spinării și encefalul) primește informațiile, le analizează și dă comenzi. Baza activității lui este actul reflex.",
    sectiuni: [
      {
        titlu: "Organizarea sistemului nervos",
        text: [
          "Sistemul nervos somatic (de relație) integrează organismul în mediu și are două componente: central (măduva și encefalul) și periferic (nervi spinali și cranieni, ganglioni, plexuri). Sistemul nervos vegetativ coordonează organele interne.",
        ],
      },
      {
        titlu: "Măduva spinării",
        text: [
          "Se află în canalul vertebral, de la C1 la L2. În secțiune are substanță cenușie la interior, în formă de H, cu coarne anterioare, posterioare și laterale, și substanță albă la exterior, organizată în cordoane. Substanța cenușie (corpii neuronilor) este centru reflex. Substanța albă (axoni mielinizați) conduce informația.",
          "Funcții: reflexă și de conducere (căi ascendente ale sensibilității, descendente ale motilității).",
        ],
      },
      {
        titlu: "Arcul reflex",
        text: [
          "Receptor → cale aferentă (senzitivă) → centru nervos → cale eferentă (motorie) → efector. Reflexele monosinaptice (rotulian, achilean) au doi neuroni, latență scurtă și nu iradiază. Cele polisinaptice (flexia de apărare) au și neuroni intercalari, latență lungă și iradiază.",
        ],
      },
      {
        titlu: "Encefalul",
        puncte: [
          "Trunchiul cerebral: bulb rahidian, punte, mezencefal. Centri vegetativi, căi de conducere.",
          "Cerebelul: echilibru, tonus muscular, precizia mișcărilor fine.",
          "Diencefalul: talamus, epitalamus, metatalamus, hipotalamus. Hipotalamusul controlează funcțiile vegetative, temperatura, echilibrul hidroelectrolitic, comportamentele și sistemul endocrin.",
          "Emisferele cerebrale: substanță cenușie la exterior (scoarța) și nuclei bazali, substanță albă la interior. Lobi: frontal, parietal, temporal, occipital. Scoarța are arii senzitive, motorii și de asociație (învățare, memorie).",
        ],
      },
      {
        titlu: "Boli ale SNC",
        puncte: [
          "Boala Parkinson: degenerarea progresivă a unor neuroni; rigiditate, tremor, mers cu pași mici.",
          "Paralizia: lezarea unui nerv (infecții, rupturi de vase, tumori, traumatisme); monoplegie, hemiplegie, tetraplegie.",
          "Epilepsia: descărcări electrice anormale ale unui grup de neuroni; convulsii, pierderea cunoștinței.",
          "Scleroza în plăci: distrugerea tecii de mielină din substanța albă; tulburări de echilibru, vorbire, vedere.",
          "Prevenire: odihnă, evitarea surmenajului, a alcoolului, a tutunului, a cafelei în exces și a drogurilor.",
        ],
      },
    ],
    retine: [
      "Măduva: cenușie la interior (H), albă la exterior.",
      "Arc reflex: receptor, aferentă, centru, eferentă, efector.",
      "Cerebel = echilibru. Hipotalamus = control vegetativ și endocrin.",
    ],
    capcane: [
      "În măduvă coarnele sunt din substanță cenușie, nu albă.",
      "La emisfere ordinea e inversă: cenușie la exterior, albă la interior.",
      "Cerebelul face parte din encefal, deci din sistemul nervos central.",
    ],
  },
];
