import type { Fisa } from "./types";

/**
 * Modulul B (clasele XI–XII) — fișe B07–B14.
 * Surse: „Noțiuni de anatomia și fiziologia omului”, culegerea Corint „Bac Biologie XI–XII”, manualul Corint cls. XI (A367).
 * Conținut de recapitulare, nu itemi de examen. Programa pentru proba aleasă trebuie confirmată.
 */
export const FISE_B2: Fisa[] = [
  {
    code: "B07",
    intro: "Circulația: sângele (țesut), inima (pompa) și vasele (traseul). Se învață pe trei fișe mici.",
    blocks: [
      {
        type: "table",
        title: "Elementele figurate ale sângelui",
        cols: ["Element", "Număr / mm³", "Rol"],
        rows: [
          ["Hematii (eritrocite)", "4,5–5 milioane", "transportă O₂ și CO₂ prin hemoglobină; nu au nucleu"],
          ["Leucocite", "4.000–8.000", "apărarea organismului; fagocitoză, anticorpi"],
          ["Trombocite", "150.000–400.000", "hemostază, coagulare"],
        ],
        note: "Plasma are aproximativ 55% din volumul sângelui; elementele figurate aproximativ 45%.",
      },
      {
        type: "table",
        title: "Grupele sanguine ABO",
        cols: ["Grupa", "Aglutinogen (pe hematii)", "Aglutinine (în plasmă)"],
        rows: [
          ["A (II)", "A", "anti-B (β)"],
          ["B (III)", "B", "anti-A (α)"],
          ["AB (IV)", "A și B", "—"],
          ["O (I)", "—", "anti-A și anti-B"],
        ],
        note: "O este donator universal, AB primitor universal. Factorul Rh: persoanele Rh-pozitive au antigenul D.",
      },
      {
        type: "flow",
        title: "Coagularea",
        rows: [{ steps: ["Lezarea vasului", "Trombocitele eliberează tromboplastina||cu Ca²⁺ și alți factori", "Protrombină → trombină", "Fibrinogen → fibrină", "Cheag de sânge"] }],
        note: "Sinteza factorilor de coagulare are nevoie de vitamina K.",
      },
      {
        type: "table",
        title: "Inima",
        cols: ["Structură", "Detalii"],
        rows: [
          ["Camere", "2 atrii (pereți subțiri) și 2 ventricule (peretele ventriculului stâng este mai gros)"],
          ["Valvula tricuspidă", "între atriul drept și ventriculul drept"],
          ["Valvula bicuspidă (mitrală)", "între atriul stâng și ventriculul stâng"],
          ["Valvule sigmoide", "la baza arterei pulmonare și a aortei"],
          ["Peretele", "endocard, miocard, epicard; în afară pericardul"],
          ["Țesutul excitoconductor", "nodul sinoatrial (pacemaker), nodul atrioventricular, fasciculul His, rețeaua Purkinje"],
        ],
      },
      {
        type: "flow",
        title: "Ciclul cardiac",
        rows: [{ steps: ["Sistola atrială||0,1 s", "Sistola ventriculară||0,3 s", "Diastola generală||0,4 s"] }],
        loop: true,
        note: "Un ciclu durează 0,8 s la 75 de bătăi pe minut.",
      },
      {
        type: "flow",
        title: "Cele două circuite",
        rows: [
          { label: "Mica circulație", steps: ["Ventricul drept", "Artere pulmonare||sânge neoxigenat", "Plămâni", "Vene pulmonare||sânge oxigenat", "Atriu stâng"] },
          { label: "Marea circulație", steps: ["Ventricul stâng", "Aorta||sânge oxigenat", "Organe", "Vene cave||sânge neoxigenat", "Atriu drept"] },
        ],
        note: "Venele pulmonare transportă sânge oxigenat. Arterele pulmonare transportă sânge neoxigenat.",
      },
      {
        type: "table",
        title: "Artere, vene, capilare",
        cols: ["Caracter", "Artere", "Vene", "Capilare"],
        rows: [
          ["Direcția sângelui", "dinspre inimă", "spre inimă", "între artere și vene"],
          ["Perete", "gros, elastic", "mai subțire, cu valvule", "un singur strat de celule"],
          ["Presiune", "mare", "mică", "—"],
          ["Rol", "distribuție", "întoarcere", "schimburi cu țesuturile"],
        ],
      },
    ],
  },
  {
    code: "B08",
    intro: "Respirația: calea aerului, mecanica ventilației și transportul gazelor.",
    blocks: [
      {
        type: "flow",
        title: "Calea aerului",
        rows: [{ steps: ["Fose nazale||încălzește, umezește, filtrează", "Faringe", "Laringe||corzi vocale", "Trahee", "Bronhii", "Bronhiole", "Alveole pulmonare||schimbul de gaze"] }],
      },
      {
        type: "table",
        title: "Mecanica ventilației",
        cols: ["", "Inspirația", "Expirația"],
        rows: [
          ["Tip", "activă", "pasivă în repaus"],
          ["Diafragmul", "se contractă și coboară", "se relaxează și urcă"],
          ["Coastele", "se ridică", "coboară"],
          ["Volumul toracic", "crește", "scade"],
          ["Presiunea în plămâni", "scade sub cea atmosferică", "crește peste cea atmosferică"],
        ],
      },
      {
        type: "table",
        title: "Volumele respiratorii (valori medii)",
        cols: ["Volumul", "Ce este", "Valoare"],
        rows: [
          ["Volum curent (VT)", "aerul inspirat sau expirat într-o respirație normală", "500 mL"],
          ["Volum inspirator de rezervă (VIR)", "aerul inspirat forțat după o inspirație normală", "aproximativ 1500–2000 mL"],
          ["Volum expirator de rezervă (VER)", "aerul expirat forțat după o expirație normală", "aproximativ 1500 mL"],
          ["Volum rezidual (VR)", "aerul rămas după expirație forțată", "aproximativ 1000–1500 mL"],
          ["Capacitate vitală (CV)", "VT + VIR + VER", "aproximativ 3500–4500 mL"],
        ],
        note: "Capacitatea pulmonară totală = CV + VR.",
      },
      {
        type: "table",
        title: "Transportul gazelor",
        cols: ["Gazul", "Cum este transportat"],
        rows: [
          ["O₂", "mai ales legat de hemoglobină (oxihemoglobină), puțin dizolvat în plasmă"],
          ["CO₂", "ca bicarbonat în plasmă, ca carbaminohemoglobină, puțin dizolvat"],
          ["CO", "formează carboxihemoglobină, mai stabilă decât oxihemoglobina; blochează transportul O₂"],
        ],
      },
      {
        type: "table",
        title: "Reglarea respirației",
        cols: ["Element", "Rol"],
        rows: [
          ["Centrii respiratori din bulb", "ritmul respirator; inspirator și expirator"],
          ["Centrul pneumotaxic din punte", "reglează trecerea inspirație → expirație"],
          ["Chemoreceptori", "răspund la creșterea CO₂ și a H⁺, la scăderea O₂"],
          ["Scoarța cerebrală", "controlul voluntar"],
        ],
      },
    ],
  },
  {
    code: "B09",
    intro: "Rinichiul filtrează, reabsoarbe și secretă. Urina finală este rezultatul acestor trei procese.",
    blocks: [
      {
        type: "flow",
        title: "Căile urinare",
        rows: [{ steps: ["Rinichi||formează urina", "Uretere||peristaltism", "Vezică urinară||rezervor", "Uretră||eliminare"] }],
      },
      {
        type: "table",
        title: "Structura nefronului",
        cols: ["Parte", "Rol"],
        rows: [
          ["Corpuscul Malpighi (glomerul + capsulă Bowman)", "filtrare glomerulară"],
          ["Tub contort proximal", "reabsorbție obligatorie (glucoză, aminoacizi, apă, Na⁺)"],
          ["Ansa Henle", "concentrarea urinei"],
          ["Tub contort distal", "reabsorbție facultativă, secreție; sub controlul ADH și aldosteronului"],
          ["Tub colector", "reabsorbție de apă (ADH)"],
        ],
      },
      {
        type: "flow",
        title: "Formarea urinei",
        rows: [{ steps: ["Filtrare glomerulară||urina primară, aprox. 180 L/zi", "Reabsorbție tubulară||glucoză, aminoacizi, apă, săruri", "Secreție tubulară||H⁺, K⁺, amoniac, medicamente", "Urina finală||aprox. 1,5 L/zi"] }],
        note: "Glucoza apare în urină (glicozurie) când depășește pragul de reabsorbție, ca în diabet.",
      },
      {
        type: "table",
        title: "Urina primară și urina finală",
        cols: ["Caracter", "Primară", "Finală"],
        rows: [
          ["Cantitate", "aproximativ 180 L/zi", "aproximativ 1,5 L/zi"],
          ["Glucoză, aminoacizi", "prezente", "absente"],
          ["Uree", "prezentă", "concentrată"],
          ["Proteine", "absente", "absente"],
        ],
      },
      {
        type: "table",
        title: "Alte căi de excreție",
        cols: ["Organ", "Ce elimină"],
        rows: [
          ["Rinichi", "uree, acid uric, creatinină, apă, săruri"],
          ["Plămâni", "CO₂, vapori de apă"],
          ["Piele", "transpirație: apă, săruri, urme de uree"],
          ["Ficat și intestin", "pigmenți biliari, colesterol"],
        ],
      },
    ],
  },
  {
    code: "B10",
    intro: "Metabolismul cu două fețe: anabolism (construiește) și catabolism (degradează). Nutrimentele sunt combustibilul, vitaminele sunt cofactorii.",
    blocks: [
      {
        type: "table",
        title: "Anabolism și catabolism",
        cols: ["Caracter", "Anabolism", "Catabolism"],
        rows: [
          ["Sensul", "sinteză", "degradare"],
          ["Energia", "consumă (endergonic)", "eliberează (exergonic)"],
          ["Exemple", "fotosinteza, sinteza proteinelor", "respirația celulară, digestia"],
        ],
      },
      {
        type: "table",
        title: "Nutrimentele",
        cols: ["Nutrimentul", "Rol", "Surse"],
        rows: [
          ["Glucide", "energie (1 g = 4,1 kcal)", "cereale, cartofi, fructe"],
          ["Lipide", "energie de rezervă (1 g = 9,3 kcal), izolație, structură", "uleiuri, unt, nuci"],
          ["Proteine", "plastic, enzime, anticorpi (1 g = 4,1 kcal)", "carne, ouă, lapte, leguminoase"],
          ["Apă", "solvent, transport, termoreglare", "băuturi, alimente"],
          ["Săruri minerale", "structură și reglare", "variate"],
          ["Vitamine", "cofactori enzimatici", "variate"],
        ],
      },
      {
        type: "table",
        title: "Vitaminele",
        cols: ["Vitamina", "Rol", "Carența"],
        rows: [
          ["A (liposolubilă)", "vederea, epiteliile", "hemeralopie (orbul găinilor)"],
          ["D (liposolubilă)", "absorbția Ca²⁺ și fixarea lui în oase", "rahitism"],
          ["E (liposolubilă)", "antioxidant", "tulburări de reproducere"],
          ["K (liposolubilă)", "sinteza factorilor de coagulare", "hemoragii"],
          ["C (hidrosolubilă)", "sinteza colagenului, imunitate", "scorbut"],
          ["B₁ (hidrosolubilă)", "metabolismul glucidelor", "beriberi"],
          ["B₁₂ (hidrosolubilă)", "formarea hematiilor", "anemie pernicioasă"],
        ],
      },
      {
        type: "flow",
        title: "Degradarea glucozei",
        rows: [
          { label: "Fără O₂", steps: ["Glicoliza||citoplasmă", "Fermentația||sau acidul lactic în mușchi"] },
          { label: "Cu O₂", steps: ["Glicoliza||citoplasmă", "Ciclul Krebs||matrice mitocondrială", "Lanțul respirator||creste mitocondriale", "CO₂ + H₂O + ATP"] },
        ],
        note: "Respirația aerobă produce mult mai mult ATP decât fermentația.",
      },
      {
        type: "table",
        title: "Termoreglarea",
        cols: ["Mecanism", "La frig", "La căldură"],
        rows: [
          ["Vasele din piele", "vasoconstricție", "vasodilatație"],
          ["Mușchii", "tremurături", "—"],
          ["Glandele sudoripare", "inactive", "transpirație"],
          ["Metabolismul", "crește", "—"],
        ],
        note: "Centrul de termoreglare este în hipotalamus.",
      },
    ],
  },
  {
    code: "B11",
    intro: "Reproducerea: gametogeneza, ciclul ovarian și sarcina.",
    blocks: [
      {
        type: "table",
        title: "Aparatul genital masculin",
        cols: ["Organ", "Rol"],
        rows: [
          ["Testicule", "spermatozoizi și testosteron (celule Leydig)"],
          ["Epididim", "maturarea spermatozoizilor"],
          ["Canal deferent", "transportă spermatozoizii"],
          ["Vezicule seminale, prostată, glande Cowper", "lichidul seminal"],
          ["Uretra", "eliminarea spermei și a urinei"],
        ],
      },
      {
        type: "table",
        title: "Aparatul genital feminin",
        cols: ["Organ", "Rol"],
        rows: [
          ["Ovare", "ovule, estrogeni, progesteron"],
          ["Trompe uterine", "captează ovulul; aici are loc fecundația"],
          ["Uter", "nidația și dezvoltarea embrionului"],
          ["Vagin", "organ de copulație, canal de naștere"],
        ],
      },
      {
        type: "table",
        title: "Spermatogeneza și ovogeneza",
        cols: ["Caracter", "Spermatogeneza", "Ovogeneza"],
        rows: [
          ["Rezultatul unei celule mamă", "4 spermatozoizi", "1 ovul și corpusculi polari"],
          ["Începe", "la pubertate", "în viața fetală; finalizată la fecundare"],
          ["Durata", "continuă, toată viața", "până la menopauză"],
        ],
      },
      {
        type: "flow",
        title: "Ciclul ovarian (28 de zile)",
        rows: [
          { label: "Faza foliculară", steps: ["FSH stimulează foliculii", "Foliculul secretă estrogeni", "Endometrul se reface"] },
          { label: "Ovulația", steps: ["Vârf de LH", "Ruperea foliculului", "Ovulul în trompă"] },
          { label: "Faza luteală", steps: ["Corpul galben||secretă progesteron", "Endometrul se pregătește pentru nidație", "Fără fecundare: menstruația"] },
        ],
      },
      {
        type: "flow",
        title: "De la fecundare la naștere",
        rows: [{ steps: ["Fecundația||în trompă", "Zigot → morulă → blastulă", "Nidația||în endometru", "Embrion și anexe||placentă, cordon ombilical", "Făt", "Naștere||ocitocina"] }],
      },
    ],
  },
  {
    code: "B12",
    intro: "Organismul funcționează ca un tot unitar: homeostazia ține parametrii în limite, iar sistemele se corelează între ele.",
    blocks: [
      {
        type: "table",
        title: "Homeostazia: exemple de parametri",
        cols: ["Parametru", "Valoare normală", "Cine îl reglează"],
        rows: [
          ["Glicemia", "aprox. 1 g/L", "insulina scade, glucagonul crește"],
          ["Temperatura", "aprox. 37 °C", "hipotalamus, piele, mușchi"],
          ["pH-ul sângelui", "7,35–7,45", "sisteme tampon, plămâni, rinichi"],
          ["Calcemia", "aprox. 10 mg/dL", "parathormon și calcitonină"],
          ["Tensiunea arterială", "aprox. 120/80 mmHg", "sistemul nervos vegetativ, rinichiul, hormoni"],
        ],
      },
      {
        type: "flow",
        title: "Feedback negativ (principiul)",
        rows: [{ steps: ["Parametrul se abate", "Receptorii sesizează", "Centrul compară cu valoarea normală", "Efectorii corectează", "Revenire la normal"] }],
        loop: true,
      },
      {
        type: "table",
        title: "Corelații între sisteme",
        cols: ["Sistemele", "Legătura"],
        rows: [
          ["Nervos și endocrin", "hipotalamusul controlează hipofiza"],
          ["Digestiv și circulator", "nutrimentele absorbite ajung în sânge și limfă"],
          ["Respirator și circulator", "hemoglobina transportă O₂ și CO₂"],
          ["Excretor și endocrin", "ADH și aldosteronul reglează reabsorbția"],
          ["Locomotor și endocrin", "STH, hormonii tiroidieni, parathormonul influențează oasele"],
        ],
      },
    ],
  },
  {
    code: "B13",
    intro: "Genetica moleculară: ADN → ARN → proteină. Regula de aur: complementaritatea bazelor.",
    blocks: [
      {
        type: "table",
        title: "ADN și ARN",
        cols: ["Caracter", "ADN", "ARN"],
        rows: [
          ["Catene", "două (dublu helix)", "una"],
          ["Zahărul", "dezoxiriboză", "riboză"],
          ["Bazele azotate", "A, T, G, C", "A, U, G, C"],
          ["Rol", "stochează informația genetică", "transferă și execută informația"],
        ],
      },
      {
        type: "table",
        title: "Complementaritatea bazelor",
        cols: ["Pereche în ADN", "Legături de hidrogen", "Pereche ADN → ARN"],
        rows: [
          ["A = T", "2", "A (ADN) → U (ARN)"],
          ["G ≡ C", "3", "G → C, C → G, T → A"],
        ],
        note: "Regula lui Chargaff: A = T și G = C, deci purinele sunt egale cu pirimidinele.",
      },
      {
        type: "table",
        title: "Tipurile de ARN",
        cols: ["Tip", "Rol"],
        rows: [
          ["ARNm", "poartă mesajul genetic de la ADN la ribozom"],
          ["ARNt", "aduce aminoacizii la ribozom; are anticodon"],
          ["ARNr", "intră în structura ribozomilor"],
        ],
      },
      {
        type: "flow",
        title: "Dogma centrală",
        rows: [{ steps: ["Replicare||ADN → ADN, semiconservativă", "Transcripție||ADN → ARNm, în nucleu", "Translație||ARNm → proteină, la ribozom"] }],
      },
      {
        type: "table",
        title: "Codul genetic",
        cols: ["Caracteristică", "Ce înseamnă"],
        rows: [
          ["Triplet", "un codon = 3 nucleotide = un aminoacid"],
          ["Degenerat", "mai mulți codoni pot codifica același aminoacid"],
          ["Universal", "este același în aproape toate organismele"],
          ["Fără suprapunere", "citire continuă, fără virgule"],
          ["Codon start", "AUG (metionina)"],
          ["Codoni stop", "UAA, UAG, UGA"],
        ],
      },
      {
        type: "table",
        title: "Mutații",
        cols: ["Tip", "Ce se schimbă"],
        rows: [
          ["Genice (punctiforme)", "o nucleotidă: substituție, deleție, inserție"],
          ["Cromozomiale", "structura cromozomului: deleție, duplicație, inversie, translocație"],
          ["Genomice", "numărul de cromozomi: aneuploidie (ex. trisomie), poliploidie"],
        ],
      },
    ],
  },
  {
    code: "B14",
    intro: "Genetica umană: boli ereditare, determinismul sexului și transmiterea caracterelor.",
    blocks: [
      {
        type: "table",
        title: "Cariotipul uman",
        cols: ["Element", "Valoare"],
        rows: [
          ["Cromozomi total", "46 (2n)"],
          ["Autozomi", "44 (22 perechi)"],
          ["Heterozomi (sexuali)", "XX la femeie, XY la bărbat"],
          ["Gameți", "23 (n): femeia 22 + X; bărbatul 22 + X sau 22 + Y"],
        ],
        note: "Sexul copilului este determinat de spermatozoid: 50% X, 50% Y.",
      },
      {
        type: "table",
        title: "Sindroame cromozomiale",
        cols: ["Sindromul", "Formula cromozomială", "Caracteristici"],
        rows: [
          ["Down", "trisomia 21 (47)", "retard mental, față rotundă, plică epicantică"],
          ["Turner", "monosomie X0 (45)", "femeie, statură mică, sterilitate"],
          ["Klinefelter", "XXY (47)", "bărbat, sterilitate, dezvoltare feminină"],
          ["Edwards", "trisomia 18", "malformații grave"],
          ["Patau", "trisomia 13", "malformații grave"],
        ],
      },
      {
        type: "table",
        title: "Boli genice",
        cols: ["Boala", "Transmitere", "Simptome"],
        rows: [
          ["Fenilcetonuria", "autozomal recesivă", "lipsa unei enzime; deficit intelectual dacă nu se tratează"],
          ["Fibroza chistică", "autozomal recesivă", "secreții vâscoase în plămâni și digestiv"],
          ["Albinismul", "autozomal recesivă", "lipsa pigmentului"],
          ["Hemofilia", "recesivă, legată de X", "coagulare deficitară; mai frecventă la bărbați"],
          ["Daltonismul", "recesivă, legată de X", "nu se disting culorile roșu-verde"],
        ],
      },
      {
        type: "table",
        title: "Legile lui Mendel",
        cols: ["Legea", "Enunț", "Raport"],
        rows: [
          ["Uniformității F1", "hibrizii F1 dintre părinți homozigoți sunt identici", "100%"],
          ["Segregării (F2)", "alelele se separă la formarea gameților", "3:1 fenotip; 1:2:1 genotip"],
          ["Independenței (dihibridare)", "genele se transmit independent", "9:3:3:1"],
        ],
      },
    ],
  },
];
