import type { Lectie } from "./types";

/** Lecții A07–A12. Surse: ghidul „Biologie vegetală și animală” (Nominatrix, 2020) și fișele de sinteză E.d (2012). */
export const LECTII_2: Lectie[] = [
  {
    code: "A07",
    intro: "Organismele heterotrofe iau carbonul din substanțe organice deja formate. Capitolul compară modurile de nutriție heterotrofă la plante și fungi și explică simbioza.",
    sectiuni: [
      {
        titlu: "Nutriția heterotrofă",
        text: ["Heterotrofele își procură carbonul din altă substanță organică. După sursa hranei, nutriția poate fi saprofită, parazită sau simbiontă."],
      },
      {
        titlu: "Nutriția saprofită",
        text: [
          "Organismul se hrănește cu substanțe organice din resturi moarte, absorbite dizolvate. Este caracteristică unor bacterii și ciuperci.",
          "Importanță: saprofitele descompun resturile organice și mineralizează substanțele, deci asigură circuitul materiei în natură. Pot însă și altera alimentele. Unele servesc industrial: din mucegaiul verde-albăstrui (Penicillium) se extrage penicilina, iar bacteriile acetice transformă alcoolul în oțet.",
        ],
      },
      {
        titlu: "Nutriția parazită",
        text: [
          "Parazitul își ia substanțele organice de la un organism viu (gazda) și îl poate îmbolnăvi. Exemple la fungi: rugina grâului, mana viței-de-vie, cornul secarei, tăciunele porumbului.",
          "La plante, parazitul clasic este cuscuta: și-a pierdut clorofila și extrage substanțe din vasele liberiene ale gazdei cu ajutorul unor prelungiri numite haustori.",
        ],
      },
      {
        titlu: "Simbioza",
        text: [
          "Simbioza (mutualismul) este relația dintre două organisme bazată pe ajutor reciproc. Exemplul tipic este lichenul: asociere între o ciupercă și o algă verde sau o cianobacterie. Alga face fotosinteză și produce substanțe organice. Ciuperca asigură apă, săruri minerale și protecție.",
          "O altă simbioză este micoriza, între hifele unei ciuperci și rădăcinile unor plante.",
        ],
      },
    ],
    retine: [
      "Saprofit = resturi moarte. Parazit = organism viu. Simbiont = ajutor reciproc.",
      "Lichen = ciupercă + algă (sau cianobacterie).",
      "Cuscuta este plantă parazită, cu haustori.",
    ],
    capcane: [
      "Nu spune că parazitul ajută gazda: asta e simbioza.",
      "Fotosinteza în lichen o face partenerul fotosintetizant, nu ciuperca.",
    ],
  },
  {
    code: "A08",
    intro: "Digestia transformă alimentele complexe în nutrimente simple, absorbabile. Se învață pe traseu: ce se întâmplă în fiecare segment și ce glandă ajută.",
    sectiuni: [
      {
        titlu: "Tipuri de digestie",
        puncte: [
          "Intracelulară: în vacuole digestive, prin fagocitoză și pinocitoză. La protozoare, bureți, celenterate și la unele celule animale (leucocite).",
          "Extracelulară: în cavități, cu ajutorul glandelor. Este tipul de digestie al mamiferelor.",
        ],
      },
      {
        titlu: "Ce înseamnă digestia",
        text: [
          "Totalitatea transformărilor mecanice (mărunțire), fizice (dizolvare) și chimice (hidroliză) prin care glucidele, lipidele și proteinele devin substanțe simple: glucide → glucoză, lipide → acizi grași și glicerol, proteine → aminoacizi. Digestia chimică se face cu enzime din sucurile digestive.",
        ],
      },
      {
        titlu: "Tubul digestiv",
        puncte: [
          "Cavitatea bucală: dinți, limbă, glande salivare. Masticația formează bolul alimentar, deglutiția îl duce spre stomac. Începe digestia amidonului, cu amilaza salivară.",
          "Faringele: unde se încrucișează calea digestivă cu cea respiratorie.",
          "Esofagul: se deschide în stomac prin cardia; mișcări peristaltice.",
          "Stomacul: depozitare temporară; sucul gastric cu pepsină digeră proteinele. La rumegătoare are patru camere (burduf, ciur, foios, cheag).",
          "Intestinul subțire (duoden, intestin liber): aici se încheie digestia și se absorb nutrimentele. În duoden se varsă bila și sucul pancreatic.",
          "Intestinul gros (cecum, colon, rect): se absorb apa și se formează materiile fecale.",
        ],
      },
      {
        titlu: "Glandele anexe",
        puncte: [
          "Glandele salivare (parotide, sublinguale, submandibulare): saliva umezește alimentele și conține amilază.",
          "Ficatul: secretă bila, care conține săruri biliare cu rol în emulsionarea și absorbția grăsimilor. Bila nu conține enzime. Se acumulează în vezica biliară.",
          "Pancreasul exocrin: sucul pancreatic cu enzime pentru toate cele trei grupe de principii (tripsină, lipază, amilază).",
        ],
      },
      {
        titlu: "Boli ale sistemului digestiv",
        puncte: [
          "Gastrita: cauze: alcool, tutun, alimente condimentate sau alterate. Manifestări: greață, dureri gastrice, vărsături.",
          "Ulcerul gastroduodenal: acțiunea corozivă a HCl și bacteria Helicobacter pylori. Manifestări: arsuri, foame dureroasă, vomă cu sânge dacă se perforează.",
          "Toxiinfecții alimentare: alimente manipulate sau păstrate greșit. Manifestări: greață, vărsături, diaree, febră.",
          "Hepatita virală acută: virusurile A (alimente, mâini murdare), B și C (sânge). Manifestări: icter, fecale decolorate, urină închisă la culoare.",
          "Prevenire: igienă, spălarea mâinilor, alimentație echilibrată, evitarea alcoolului și tutunului, conservarea corectă a alimentelor.",
        ],
      },
    ],
    retine: [
      "Produse finale: glucoză, acizi grași + glicerol, aminoacizi.",
      "Amilaza începe digestia amidonului în gură, pepsina digeră proteinele în stomac.",
      "Bila nu are enzime: emulsionează grăsimile.",
      "Absorbția are loc mai ales în intestinul subțire.",
    ],
    capcane: [
      "Ficatul și pancreasul sunt glande anexe, nu fac parte din tubul digestiv.",
      "Nu spune că bila digeră grăsimile chimic: le emulsionează.",
      "Digestia intracelulară nu este a mamiferelor (cu excepția unor celule ca leucocitele).",
    ],
  },
  {
    code: "A09",
    intro: "Respirația celulară eliberează energia din substanțele organice și o stochează în ATP. Se compară varianta aerobă cu fermentațiile.",
    sectiuni: [
      {
        titlu: "Respirația aerobă",
        text: [
          "Oxidarea completă a substanțelor organice cu oxigen molecular. Se desfășoară în mitocondrii. Produșii finali sunt CO₂ și apă, cu mult ATP eliberat.",
          "Ecuația: C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + energie. Este caracteristică majorității organismelor.",
        ],
      },
      {
        titlu: "Respirația anaerobă și fermentațiile",
        text: [
          "Oxidare parțială, fără oxigen. Produce o cantitate mică de energie și o substanță organică în plus. La microorganisme se numește fermentație. Apare la ciuperci, bacterii și temporar în țesuturile plantelor superioare (de exemplu la inundații).",
        ],
        puncte: [
          "Fermentația alcoolică: glucoză → alcool etilic (+ CO₂). Drojdiile. Aplicații: pâine (CO₂ dospește aluatul), vin, bere.",
          "Fermentația lactică: glucoză → acid lactic. Bacteriile lactice. Aplicații: iaurt, brânzeturi, murături.",
          "Fermentația acetică: alcool etilic → acid acetic, în prezența oxigenului (este deci un proces aerob). Bacteriile acetice. Aplicație: oțet.",
        ],
      },
      {
        titlu: "Respirația la plante",
        text: [
          "Are loc în toate organele, mai intens în frunze, flori și țesuturile de creștere. Se evidențiază după consumul de oxigen, CO₂ eliberat sau substanța organică consumată (de exemplu cu semințe în germinare, față de un martor). Plantele respiră și ziua, și noaptea.",
        ],
      },
    ],
    retine: [
      "Aerobă: mitocondrii, O₂, CO₂ + H₂O, energie mare.",
      "Anaerobă = fermentație: energie mică.",
      "Alcoolică (drojdii), lactică (bacterii lactice), acetică (aerobă).",
    ],
    capcane: [
      "Plantele nu respiră doar noaptea: respiră continuu. Fotosinteza e cea care cere lumină.",
      "Fermentația acetică este singura care cere oxigen.",
      "Nu confunda ecuația respirației cu cea a fotosintezei: sunt aproape inverse.",
    ],
  },
  {
    code: "A10",
    intro: "Aerul ajunge la alveole pe un traseu precis, iar ventilația pulmonară este rezultatul mișcării diafragmului și a coastelor.",
    sectiuni: [
      {
        titlu: "Căile respiratorii",
        puncte: [
          "Fosele nazale: mucoasă cu rol respirator (jos) și olfactiv (sus); încălzesc, umezesc și filtrează aerul.",
          "Faringele: intersecția căii digestive cu cea respiratorie.",
          "Laringele: organ cartilaginos cu coardele vocale; orificiul dintre ele este glota.",
          "Traheea: inele cartilaginoase incomplete posterior, mucoasă ciliată.",
          "Bronhiile: din ramificarea traheei, pătrund în plămâni și formează arborele bronșic, care se termină în alveole.",
        ],
      },
      {
        titlu: "Plămânii",
        text: [
          "Sunt situați în cavitatea toracică și acoperiți de pleură (foiță parietală, foiță viscerală și lichid pleural între ele). Plămânul drept are trei lobi, cel stâng doi. Alveolele au perete subțire, înconjurat de capilare. Membrana alveolo-capilară este locul schimbului de gaze, care se face prin difuzie.",
        ],
      },
      {
        titlu: "Ventilația pulmonară",
        puncte: [
          "Inspirația este activă (consum de energie): se contractă diafragmul și mușchii intercostali, crește volumul cutiei toracice și al plămânilor, scade presiunea intrapulmonară sub cea atmosferică, deci aerul intră.",
          "Expirația liniștită este pasivă: mușchii se relaxează, volumul scade, presiunea crește peste cea atmosferică, aerul iese.",
        ],
      },
      {
        titlu: "Boli ale sistemului respirator",
        puncte: [
          "Bronșita: inflamația mucoasei bronhiilor (infecție virală sau bacteriană). Tuse, expectorație, febră.",
          "Laringita: inflamația laringelui. Voce răgușită, tuse seacă.",
          "Astmul bronșic: îngustarea și spasmul bronhiilor. Crize de sufocare, mai ales noaptea.",
          "Pneumonia: inflamația acută a alveolelor, de obicei bacteriană. Febră mare, junghi toracic.",
          "TBC: bacilul Koch distruge alveolele și formează caverne. Slăbire, transpirații nocturne. Prevenire: vaccinare, igienă, evitarea surselor de infecție.",
        ],
      },
    ],
    retine: [
      "Traseu: nări → faringe → laringe → trahee → bronhii → bronhiole → alveole.",
      "Inspirația: diafragm în jos, volum mare, presiune mică.",
      "Schimbul de gaze are loc la nivelul alveolelor.",
    ],
    capcane: [
      "Contracția diafragmei mărește volumul toracic, nu îl micșorează.",
      "În inspirație presiunea din plămâni scade, nu crește.",
      "Faringele este comun, nu aparține doar căii respiratorii.",
    ],
  },
  {
    code: "A11",
    intro: "Planta absoarbe apa prin rădăcină și o transportă în sus prin lemn, iar substanțele organice circulă prin liber. Totul se explică prin două forțe și două tipuri de vase.",
    sectiuni: [
      {
        titlu: "Absorbția apei și a sărurilor",
        text: [
          "Zona de maximă absorbție este cea a perișorilor absorbanți (celule epidermice modificate). Absorbția este pasivă (osmoză, fără consum de energie, determinată de forța de sucțiune creată de transpirație) sau activă (cu consum de energie, determinată de presiunea radiculară).",
        ],
      },
      {
        titlu: "Seva brută",
        text: [
          "Soluție diluată de apă și săruri minerale. Circulă ascendent prin vasele lemnoase: perișori absorbanți, scoarță, cilindru central, lemn, apoi tulpină și frunze. Ascensiunea este determinată de două forțe: presiunea radiculară (activă, predominantă primăvara sau când solul e bogat în apă) și forța de sucțiune (pasivă, produsă de transpirație).",
        ],
      },
      {
        titlu: "Seva elaborată",
        text: [
          "Soluție de substanțe organice produse prin fotosinteză. Circulă prin vasele liberiene, cu consum de energie și viteză mai mică, deoarece celulele sunt vii. Circulă în ambele sensuri: spre rădăcină și spre flori și fructe. Surplusul se depune ca rezervă (morcov, sfeclă, cartof).",
        ],
      },
    ],
    retine: [
      "Lemn → seva brută, ascendent. Liber → seva elaborată, în ambele sensuri.",
      "Forțe: presiunea radiculară (activă) și sucțiunea (pasivă).",
      "Absorbția are loc în zona perișorilor absorbanți.",
    ],
    capcane: [
      "Nu transporta seva elaborată prin vasele lemnoase.",
      "Sucțiunea este rezultatul transpirației din frunze, nu al rădăcinii.",
    ],
  },
  {
    code: "A12",
    intro: "Sângele este un țesut conjunctiv lichid din mediul intern. Capitolul cere compoziția exactă, rolul elementelor figurate și calculele cu procente.",
    sectiuni: [
      {
        titlu: "Mediul intern și homeostazia",
        text: [
          "Mediul intern este format din sânge, limfă și lichid interstițial. Deși mediul exterior se schimbă, compoziția mediului intern rămâne constantă în limite fiziologice. Această constanță se numește homeostazie.",
        ],
      },
      {
        titlu: "Compoziția sângelui",
        text: ["Sângele reprezintă aproximativ 7–8% din greutatea corpului (aproape 5,6 L la 70 kg)."],
        puncte: [
          "Plasma: 55% din volum. Are 90% apă și 10% reziduu uscat (săruri minerale, proteine).",
          "Elementele figurate: 45% din volum, produse în măduva osoasă roșie.",
        ],
      },
      {
        titlu: "Elementele figurate",
        puncte: [
          "Hematiile (eritrocite): discuri biconcave, anucleate la maturitate, cu hemoglobină. Transportă O₂ (oxihemoglobină) și CO₂ (carbohemoglobină). Hemoglobina se leagă stabil de CO (carboxihemoglobină), ceea ce duce la asfixie.",
          "Leucocitele: cu nucleu, fără pigmenți. Apărarea organismului prin fagocitoză și anticorpi.",
          "Trombocitele: fragmente celulare anucleate. Hemostază, coagulare.",
        ],
      },
      {
        titlu: "Rolurile sângelui",
        text: ["Transportă gaze, nutrimente și substanțe de excreție; menține echilibrul hidroelectrolitic; apără organismul; menține temperatura constantă; oprește hemoragiile prin coagulare."],
      },
      {
        titlu: "Calcule cu procente",
        text: [
          "Problema tipică: masa corpului 87 kg, sângele 7% din masa corpului, plasma 55% din sânge, apa 90% din plasmă. Se calculează în lanț: 87 × 7 / 100 = 6,09 kg sânge; 6,09 × 55 / 100 = 3,3495 kg plasmă; 3,3495 × 90 / 100 = 3,01455 kg apă în plasmă. Se scriu toate etapele, cu unitatea de măsură.",
        ],
      },
    ],
    retine: [
      "Plasmă 55%, elemente figurate 45%. În plasmă, apa este 90%.",
      "Hematia matură nu are nucleu și transportă gaze.",
      "Leucocitele apără, trombocitele coagulează.",
      "La calcule: scrie fiecare pas și rezultatul în kg.",
    ],
    capcane: [
      "Procentele se aplică pe rând, la masa din pasul precedent, nu la masa corpului de fiecare dată.",
      "Nu spune că toate elementele figurate au nucleu: hematiile mature și trombocitele nu au.",
      "CO se leagă stabil de hemoglobină: de aceea este periculos.",
    ],
  },
];
