import type { Fisa } from "./types";

export const FISE_2: Fisa[] = [
  {
    code: "A09",
    blocks: [
      {
        type: "table",
        title: "Respirația aerobă vs. anaerobă",
        cols: ["Caracter", "Aerobă", "Anaerobă"],
        rows: [
          ["Oxigen", "folosește O₂ liber", "fără O₂"],
          ["Oxidare", "completă", "parțială"],
          ["Produși finali", "CO₂ și apă", "o altă substanță organică + CO₂"],
          ["Energie", "mare (~675 kcal)", "mică (16–34 kcal)"],
          ["Unde", "mitocondrii", "citoplasmă; fungi, bacterii, temporar țesuturi vegetale"],
          ["Ecuație", "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energie", "substanță organică A → substanță organică B + CO₂ + energie"],
        ],
      },
      {
        type: "table",
        title: "Fermentațiile",
        cols: ["Fermentație", "Agent", "Transformare", "Aplicații"],
        rows: [
          ["Alcoolică", "drojdii", "glucoză → alcool etilic", "pâine, băuturi alcoolice"],
          ["Lactică", "bacterii lactice", "glucoză → acid lactic", "iaurt, brânzeturi, murături"],
          ["Acetică", "bacterii acetice", "alcool etilic → acid acetic (în prezența O₂)", "oțet"],
        ],
        note: "Fermentația acetică este atipică: este un proces aerob.",
      },
    ],
  },
  {
    code: "A10",
    blocks: [
      {
        type: "flow",
        title: "Calea aerului",
        rows: [{ steps: ["Fose nazale||prin nări, coane", "Faringe", "Laringe||coarde vocale, glota", "Trahee||inele cartilaginoase incomplete", "Bronhii||inele complete", "Arbore bronșic", "Acini pulmonari", "Alveole||schimbul de gaze"] }],
      },
      {
        type: "table",
        title: "Inspirație vs. expirație",
        cols: ["Caracter", "Inspirația", "Expirația"],
        rows: [
          ["Tip", "activă (cu consum de energie)", "pasivă (fără consum de energie)"],
          ["Mușchi inspiratori", "se contractă (diafragm, intercostali)", "se relaxează"],
          ["Cutia toracică", "diametrele cresc", "revin la normal"],
          ["Volumul plămânilor", "crește", "scade"],
          ["Presiunea intrapulmonară", "scade față de cea atmosferică", "crește față de cea atmosferică"],
          ["Aerul", "intră", "iese"],
        ],
      },
      {
        type: "table",
        title: "Plămânii",
        cols: ["Aspect", "Detalii"],
        rows: [
          ["Localizare", "cavitatea toracică"],
          ["Lobi", "plămân stâng: 2 lobi; plămân drept: 3 lobi"],
          ["Organizare", "lobi → segmente → lobuli (unitatea structurală și funcțională) → acini → alveole"],
          ["Pleura", "foiță parietală (la peretele toracic) + foiță viscerală (la plămân); între ele, cavitatea pleurală cu lichid"],
          ["Membrana alveolo-capilară", "epiteliul alveolar + endoteliul capilar; aici se fac schimburile de gaze"],
        ],
      },
      {
        type: "table",
        title: "Bolile respiratorii",
        cols: ["Boală", "Cauze", "Manifestări"],
        rows: [
          ["Bronșită", "inflamarea mucoasei bronșice (infecție bacteriană sau virală)", "tuse profundă, expectorație, febră"],
          ["Laringită", "inflamarea mucoasei laringelui", "voce răgușită, arsură în gât, tuse seacă"],
          ["Astm bronșic", "inflamarea și îngustarea bronhiilor, spasm", "crize de sufocare, mai ales noaptea"],
          ["Pneumonie", "pneumococ, streptococ, stafilococ; inflamația alveolelor", "febră ridicată, tuse, expectorație purulentă, junghi toracic"],
          ["TBC", "bacilul Koch, distruge alveolele (caverne)", "slăbire, lipsa poftei de mâncare, transpirații nocturne"],
        ],
        note: "Prevenire: aer curat (18–20°C), călire, îmbrăcăminte adecvată, vaccinare antituberculoasă.",
      },
    ],
  },
  {
    code: "A11",
    blocks: [
      {
        type: "flow",
        title: "Traseul sevei brute în rădăcină",
        rows: [{ steps: ["Peri absorbanți", "Exodermă", "Scoarță", "Endodermă", "Cilindru central", "Fascicule lemnoase||apoi ascensiune"] }],
      },
      {
        type: "table",
        title: "Absorbția apei: pasivă vs. activă",
        cols: ["Caracter", "Pasivă", "Activă"],
        rows: [
          ["Energie", "fără consum", "cu consum"],
          ["Forța", "forța de sucțiune (deficit hidric creat de transpirație)", "presiunea radiculară pozitivă"],
          ["Mecanism", "osmoză", "acțiunea rădăcinii"],
          ["Când predomină", "plante cu frunze transpirante", "primăvara sau când solul e bogat în apă"],
        ],
      },
      {
        type: "table",
        title: "Seva brută vs. seva elaborată",
        cols: ["Caracter", "Brută", "Elaborată"],
        rows: [
          ["Compoziție", "apă și săruri minerale", "apă și substanțe organice (din fotosinteză)"],
          ["Vase", "lemnoase", "liberiene"],
          ["Sens", "ascendent", "descendent și ascendent"],
          ["Transport", "pasiv + presiune radiculară", "activ, mai lent"],
        ],
        note: "Surplusul de substanțe organice se depozitează în rădăcină (morcov, sfeclă) sau tulpină (gulie, cartof).",
      },
    ],
  },
  {
    code: "A12",
    intro: "Mediul intern = sânge, limfă și lichid interstițial. Constanța lui se numește homeostazie.",
    blocks: [
      {
        type: "flow",
        title: "Calcul în lanț (II.A.c): masa apei din plasmă",
        rows: [{ steps: ["Masa corpului||dată (ex. 87 kg)", "Sânge = 7%||87 × 7 / 100 = 6,09 kg", "Plasmă = 55% din sânge||6,09 × 55 / 100 = 3,3495 kg", "Apă = 90% din plasmă||3,3495 × 90 / 100 = 3,01455 kg"] }],
        note: "La fiecare pas procentul se aplică la rezultatul pasului anterior, nu la masa corpului. Exersează în Laborator.",
      },
      {
        type: "table",
        title: "Compoziția sângelui",
        cols: ["Componentă", "Pondere", "Caracteristici", "Rol"],
        rows: [
          ["Plasmă", "55% din volum", "90% apă, 10% reziduu uscat", "transport de substanțe, echilibru hidroelectrolitic"],
          ["Eritrocite (hematii)", "elemente figurate: 45%", "anucleate la maturitate, biconcave, cu hemoglobină", "transportul O₂ și CO₂"],
          ["Leucocite", "—", "cu nucleu, fără pigmenți", "apărare: fagocitoză, anticorpi"],
          ["Trombocite", "—", "fragmente celulare anucleate", "hemostază, coagulare"],
        ],
        note: "Sângele reprezintă 7–8% din greutatea corpului.",
      },
      {
        type: "table",
        title: "Hemoglobina și gazele",
        cols: ["Compus", "Cu ce se formează", "Stabilitate"],
        rows: [
          ["Oxihemoglobină", "oxigen", "instabil"],
          ["Carbohemoglobină", "CO₂", "instabil"],
          ["Carboxihemoglobină", "CO (monoxid de carbon)", "stabil, nu se mai descompune → asfixie"],
        ],
      },
      {
        type: "table",
        title: "Rolurile sângelui",
        cols: ["Rol", "Cine îl realizează"],
        rows: [
          ["Transportul gazelor, nutrienților, apei, produșilor de excreție", "plasma și hematiile"],
          ["Apărarea organismului", "leucocitele"],
          ["Oprirea sângerării", "trombocitele"],
          ["Echilibru hidroelectrolitic, temperatură constantă", "întregul sânge"],
        ],
      },
    ],
  },
  {
    code: "A13",
    blocks: [
      {
        type: "flow",
        title: "Cele două circuite",
        rows: [
          { label: "Marea circulație (de nutriție)", steps: ["Ventricul stâng", "Aorta", "Țesuturi||schimb de gaze", "Vene cave", "Atriul drept"] },
          { label: "Mica circulație (de oxigenare)", steps: ["Ventricul drept", "Artera pulmonară", "Plămâni||schimb de gaze", "4 vene pulmonare", "Atriul stâng"] },
        ],
        note: "Circulația este dublă, completă (sângele oxigenat nu se amestecă cu cel neoxigenat) și închisă.",
      },
      {
        type: "table",
        title: "Inima",
        cols: ["Element", "Detalii"],
        rows: [
          ["Localizare", "cutia toracică, între plămâni, vârful spre stânga"],
          ["Peretele", "epicard (foița viscerală a pericardului), miocard (țesut muscular striat cardiac), endocard"],
          ["Camere", "2 atrii (la bază, pereți subțiri) + 2 ventricule (la vârf, pereți groși)"],
          ["Valvula tricuspidă", "între atriul drept și ventriculul drept"],
          ["Valvula bicuspidă (mitrală)", "între atriul stâng și ventriculul stâng"],
          ["Valvule semilunare", "la baza aortei și a arterei pulmonare; împiedică întoarcerea sângelui în ventricule"],
        ],
      },
      {
        type: "table",
        title: "Vasele de sânge",
        cols: ["Vas", "Sensul sângelui", "Exemple", "Particularități"],
        rows: [
          ["Artere", "de la inimă spre organe", "aorta (sânge oxigenat), artera pulmonară (neoxigenat)", "—"],
          ["Capilare", "între artere și vene", "—", "perete subțire (endoteliu); aici se fac schimburile cu celulele"],
          ["Vene", "spre inimă", "venele cave (neoxigenat), venele pulmonare (oxigenat)", "vena cavă inferioară are valvule semilunare"],
        ],
        note: "Arterele și venele se deosebesc după sensul față de inimă, nu după oxigenare.",
      },
      {
        type: "table",
        title: "Bolile circulatorii",
        cols: ["Boală", "Cauze", "Manifestări"],
        rows: [
          ["Varice", "statul îndelungat în picioare", "dilatarea venelor superficiale, edeme, ulcerații"],
          ["Ateroscleroză", "depunere de lipide și colesterol în artere; sedentarism, fumat", "scăderea elasticității, îngustarea vaselor, hipertensiune"],
          ["Hipertensiune arterială", "stres, tutun, alcool, obezitate, sare", "tensiune peste normal, amețeli, dureri de cap"],
          ["Infarct miocardic", "astuparea vaselor coronare cu un cheag", "necroza miocardului, durere în piept (angină)"],
          ["Accident vascular cerebral", "ateroscleroză, hipertensiune", "paralizii, tulburări de vorbire și vedere, comă"],
        ],
      },
    ],
  },
  {
    code: "A14",
    blocks: [
      {
        type: "table",
        title: "Excreția la plante",
        cols: ["Proces", "Ce se elimină", "Pe unde"],
        rows: [
          ["Transpirația", "apă sub formă de vapori", "stomate (masiv), cuticulă (puțin), lenticele (la tulpină)"],
          ["Gutația", "apă lichidă", "hidatode (la marginea frunzei)"],
        ],
        note: "Se mai elimină produși de dezasimilație, substanțe în exces și semnale chimice (nectar, arome).",
      },
      {
        type: "table",
        title: "Stomata",
        cols: ["Element", "Detalii"],
        rows: [
          ["Alcătuire", "două celule reniforme, cu concavitatea spre interior, care delimitează ostiola; înconjurate de celule anexe"],
          ["La lumină", "celulele se hidratează → ostiola se deschide"],
          ["La întuneric", "ostiola se închide"],
          ["Rol", "reglează transpirația și schimbul de gaze, menține echilibrul hidric"],
        ],
      },
      {
        type: "table",
        title: "De ce este importantă transpirația",
        cols: ["Rol", "Explicație"],
        rows: [
          ["Ascensiunea sevei brute", "creează deficitul hidric și forța de sucțiune"],
          ["Răcirea plantei", "împiedică supraîncălzirea"],
          ["Schimb de gaze", "ostiolele deschise lasă să circule O₂ și CO₂"],
        ],
      },
    ],
  },
  {
    code: "A15",
    blocks: [
      {
        type: "flow",
        title: "Formarea și eliminarea urinei",
        rows: [
          { label: "În nefron", steps: ["Corpuscul renal||glomerul + capsula Bowman: filtrare", "Tub contort proximal||reabsorbție", "Ansa Henle", "Tub contort distal||reabsorbție, secreție", "Tub colector"] },
          { label: "Căile extrarenale", steps: ["Uretere", "Vezică urinară||300–350 ml", "Uretră||la bărbat și cale genitală"] },
        ],
        note: "Procese: filtrare, reabsorbție, secreție.",
      },
      {
        type: "table",
        title: "Rinichiul",
        cols: ["Element", "Detalii"],
        rows: [
          ["Localizare", "pereche, de o parte și de alta a coloanei vertebrale, regiunea lombară; aspect de bob de fasole"],
          ["Înveliș", "capsulă fibroasă"],
          ["Zona corticală (externă)", "corpusculii Malpighi și tuburile contorte ale nefronilor"],
          ["Zona medulară (internă)", "piramidele Malpighi (ansele Henle și tuburile colectoare)"],
          ["Nefronul", "unitatea structurală și funcțională a rinichiului"],
          ["Rol", "filtrarea sângelui, formarea urinei, echilibrul hidroelectrolitic"],
        ],
      },
      {
        type: "table",
        title: "Căile de excreție la animale",
        cols: ["Cale", "Ce elimină"],
        rows: [
          ["Urinară", "produși toxici ai metabolismului (principala cale)"],
          ["Tegumentară", "sudoare"],
          ["Pulmonară", "CO₂ și vapori de apă"],
        ],
      },
      {
        type: "table",
        title: "Bolile excretorii",
        cols: ["Boală", "Cauze", "Manifestări"],
        rows: [
          ["Litiază urinară", "tulburări de metabolism, urină concentrată, alimentație bogată în carne și dulciuri", "calculi, dureri lombare și vezicale, hemoragii, febră, greață"],
          ["Insuficiență renală cronică", "afecțiuni renale, infecții, diabet, hipertensiune, obstrucții", "scăderea sau oprirea funcției rinichiului (anurie), astenie, anemie"],
        ],
        note: "Prevenire: alimentație echilibrată, hidratare, tratarea infecțiilor, fără abuz de medicamente.",
      },
    ],
  },
  {
    code: "A16",
    blocks: [
      {
        type: "tree",
        title: "Scheletul",
        root: {
          label: "Scheletul",
          children: [
            { label: "Capul", children: [{ label: "neurocraniu (cutia craniană)" }, { label: "viscerocraniu (oasele feței)" }] },
            { label: "Trunchiul", children: [{ label: "coloana vertebrală (33–34 vertebre)" }, { label: "12 perechi de coaste" }, { label: "stern" }] },
            { label: "Membrele superioare", children: [{ label: "centura: scapulă, claviculă" }, { label: "braț: humerus; antebraț: radius, ulna" }, { label: "mâna: carpiene, metacarpiene, falange" }] },
            { label: "Membrele inferioare", children: [{ label: "centura: oasele coxale (cu sacrul formează bazinul)" }, { label: "coapsa: femur; gamba: tibia, fibula" }, { label: "piciorul: tarsiene, metatarsiene, falange" }] },
          ],
        },
      },
      {
        type: "table",
        title: "Mersul la mamifere",
        cols: ["Tip", "Se sprijină pe", "Exemple"],
        rows: [
          ["Digitigrade", "degete", "pisica, tigrul"],
          ["Unguligrade", "copite", "vaca, oaia, porcul, calul"],
          ["Plantigrade", "toată talpa", "maimuța, ursul, omul"],
        ],
        note: "La mamiferele acvatice scheletul membrelor este slab dezvoltat; la liliac falangele sunt lungi și subțiri.",
      },
      {
        type: "table",
        title: "Staționarea bipedă la om",
        cols: ["Modificare", "Efect"],
        rows: [
          ["Lărgirea toracelui", "adaptare la poziția verticală"],
          ["Membrele anterioare eliberate, mobile", "mișcări complexe ale mâinii"],
          ["Oasele coxale sudate cu sacrul (bazin)", "susținerea trunchiului"],
          ["Curbura plantară", "elasticitate"],
          ["Curburile coloanei vertebrale", "mobilitate și plasticitate"],
        ],
      },
      {
        type: "table",
        title: "Principalele grupe musculare",
        cols: ["Regiune", "Mușchi"],
        rows: [
          ["Membrul superior", "deltoid (umăr), biceps și triceps (braț), flexori și extensori ai degetelor"],
          ["Membrul inferior", "fesieri, croitor (coapsă), mușchii gambei"],
          ["Capul, gâtul, trunchiul", "mușchii capului, gâtului și trunchiului"],
        ],
        note: "Sistemul osos este componenta pasivă, sistemul muscular (striat scheletic) cea activă.",
      },
    ],
  },
];
