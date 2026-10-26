// Generează public/content/exams/*.json din subiectele oficiale (enunțuri) + răspunsuri model scrise de autor.
// ATENȚIE: baremul oficial nu a fost furnizat; răspunsurile și punctajele pe subcerințe sunt orientative.
import { writeFileSync } from "node:fs";

const mcq = (q, options, correct, chapter, explanation) => ({ q, options, correct, chapter, explanation });
const af = (q, truth, correction, chapter, explanation) => ({ q, truth, ...(truth ? {} : { correction }), chapter, explanation });
const sub = (id, prompt, points, chapters, model, chain) => ({ id, prompt, points, chapters, model, ...(chain ? { chain } : {}) });

const NOTE = "Enunțurile sunt cele oficiale. Răspunsurile model sunt scrise de autorii aplicației (baremul oficial nu a fost furnizat) și trebuie verificate de un profesor.";

const chain = (mass, steps, asks) => ({ mass, unit: "kg", asks, steps });
const BLOOD = { label: "masa sângelui", pct: "7", of: "masa corpului" };
const PLASMA = { label: "masa plasmei sangvine", pct: "55", of: "masa sângelui" };
const WATER = { label: "masa apei din plasmă", pct: "90", of: "masa plasmei sangvine" };
const FIGURED = { label: "masa elementelor figurate", pct: "45", of: "masa sângelui" };

const p2025 = {
  id: "bac-2025-var01", title: "Bacalaureat 2025 — Varianta 1", year: 2025, kind: "oficial", durationMin: 180, note: NOTE,
  parts: [
    { id: "I.A", subject: "I", title: "Completare", points: 4, kind: "open", intro: "Scrieți noțiunile cu care completați spațiile libere: „Procesul de ............ poate fi evidențiat după substanțele organice sintetizate și ............ .”",
      subs: [sub("a", "Completați primul spațiu liber.", 2, ["A06"], ["fotosinteză"]), sub("b", "Completați al doilea spațiu liber.", 2, ["A06"], ["oxigenul eliberat (sau: amidonul / lumina absorbită, după varianta acceptată de barem)"])] },
    { id: "I.B", subject: "I", title: "Exemple și caracteristici", points: 6, kind: "open", intro: "Dați două exemple de componente ale unei celule procariote; scrieți în dreptul fiecărui component câte o caracteristică structurală.",
      subs: [sub("1", "Primul component și o caracteristică structurală.", 3, ["A01"], ["Ribozomii — granule mici, formate din ARN și proteine, fără membrană."]), sub("2", "Al doilea component și o caracteristică structurală.", 3, ["A01"], ["Nucleoidul — ADN circular, necondensat în cromozomi, fără membrană nucleară.", "(alt exemplu acceptabil: peretele celular — conține peptidoglican)"])] },
    { id: "I.C", subject: "I", title: "Grile", points: 10, kind: "mcq", items: [
      mcq("Sunt vertebrate:", ["arahnidele", "amfibienii", "celenteratele", "moluștele"], 1, "A03", "Amfibienii au coloană vertebrală; celelalte grupe sunt nevertebrate."),
      mcq("Organitul citoplasmatic comun celulelor vegetală și animală, cu rol în sinteza proteinelor, este:", ["centrozomul", "cloroplastul", "lizozomul", "ribozomul"], 3, "A01", "Ribozomii sintetizează proteine. Centrozomul lipsește la plante, cloroplastul la animale."),
      mcq("Fiecare dintre celulele-fiice formate prin diviziunea meiotică a unei celule-mamă cu 2n = 14 cromozomi are:", ["n = 7 cromozomi", "n = 14 cromozomi", "2n = 7 cromozomi", "2n = 14 cromozomi"], 0, "A02", "Meioza reduce numărul de cromozomi la jumătate: n = 7."),
      mcq("Plămânii mamiferelor:", ["conțin lobuli alcătuiți din numeroși lobi", "își măresc volumul în timpul expirației", "sunt localizaţi în cavitatea abdominală", "sunt acoperiți de două pleure"], 3, "A10", "Plămânul este acoperit de pleura viscerală și pleura parietală. Volumul crește la inspirație; plămânii sunt în cavitatea toracică; lobii conțin lobuli, nu invers."),
      mcq("Bila și sucul pancreatic au în comun următoarea caracteristică:", ["conțin lipaze cu rol în digestia lipidelor emulsionate", "participă la digestia intestinală a alimentelor", "sunt sucuri digestive lipsite de enzime", "transformă chimic oligopeptidele în aminoacizi"], 1, "A08", "Ambele se varsă în duoden și participă la digestia intestinală. Bila nu conține enzime, iar lipazele sunt în sucul pancreatic."),
    ] },
    { id: "I.D", subject: "I", title: "Adevărat / Fals", points: 10, kind: "af", weights: [3, 3, 4], intro: "Dacă afirmația este falsă, modificați-o parțial, fără negație, pentru a deveni adevărată.", items: [
      af("Gonoreea este o boală cu transmitere sexuală cauzată de infecția cu o ciupercă.", false, "Gonoreea este o boală cu transmitere sexuală cauzată de infecția cu o bacterie (Neisseria gonorrhoeae).", "A21", "Gonoreea este bacteriană."),
      af("Androceul florii angiospermelor este alcătuit din totalitatea carpelelor.", false, "Androceul florii angiospermelor este alcătuit din totalitatea staminelor.", "A20", "Carpelele formează gineceul."),
      af("Rinichii sunt componente ale sistemului excretor al mamiferelor.", true, undefined, "A15", "Rinichii formează urina; fac parte din sistemul excretor."),
    ] },
    { id: "II.A", subject: "II", title: "Sângele și circulația", points: 18, kind: "open",
      intro: "Unul dintre componentele mediului intern al mamiferelor este sângele, care circulă într-un sistem închis de vase.",
      subs: [
        sub("a", "Precizați trei componente ale sângelui și câte un rol pentru două dintre aceste componente.", 6, ["A12"], ["Componente: plasma, hematiile, leucocitele, trombocitele (trei dintre acestea).", "Rol: hematiile transportă oxigenul (hemoglobina); leucocitele apără organismul prin fagocitoză și anticorpi; trombocitele participă la coagulare; plasma transportă substanțe."]),
        sub("b", "Explicați rolul valvulelor semilunare/sigmoide.", 4, ["A13"], ["Valvulele semilunare se află la baza aortei și a arterei pulmonare.", "Ele se închid după sistola ventriculară și împiedică refluxul sângelui din artere înapoi în ventricule, asigurând sensul unic al circulației."]),
        sub("c", "Calculați masa apei din plasma sângelui unui copil (corp: 11 kg; sânge 7%; plasmă 55%; apă 90%). Scrieți toate etapele.", 5, ["A12"], ["Masa sângelui = 11 × 7 / 100 = 0,77 kg", "Masa plasmei = 0,77 × 55 / 100 = 0,4235 kg", "Masa apei = 0,4235 × 90 / 100 = 0,38115 kg"], chain("11", [BLOOD, PLASMA, WATER], "masa apei din plasma sângelui")),
        sub("d", "Completați problema cu o altă cerință și rezolvați-o.", 3, ["A12"], ["Exemplu: masa elementelor figurate din sângele copilului (45% din masa sângelui).", "0,77 × 45 / 100 = 0,3465 kg"], chain("11", [BLOOD, FIGURED], "masa elementelor figurate din sânge")),
      ] },
    { id: "II.B", subject: "II", title: "Genetică (dihibridare)", points: 12, kind: "open",
      intro: "Se încrucișează un soi de pepene cu fructe oval-alungite (O) și de culoare galben-auriu (v) cu un soi de pepene cu fructe rotunde (o) și de culoare verde-deschis (V). Părinții sunt homozigoți pentru ambele caractere. În F1 se obțin hibrizi; prin încrucișarea lor se obțin în F2 16 combinații.",
      subs: [
        sub("a", "Tipurile de gameți formați de organismele din F1.", 3, ["A22"], ["P: OOvv × ooVV → F1: OoVv", "Gameți: OV, Ov, oV, ov (câte 25%)"]),
        sub("b", "Fenotipul organismelor din F1.", 3, ["A22"], ["Toți hibrizii F1 sunt OoVv: fructe oval-alungite, de culoare verde-deschis (alelele O și V sunt dominante)."]),
        sub("c", "Numărul combinațiilor din F2 dublu heterozigote și dublu homozigote; genotipul celor cu fructe rotunde, galben-auriu.", 3, ["A22"], ["Dublu heterozigote (OoVv): 4 din 16.", "Dublu homozigote (OOVV, OOvv, ooVV, oovv): 4 din 16.", "Fructe rotunde, galben-auriu: oovv."]),
        sub("d", "Completați problema cu o altă cerință și rezolvați-o.", 3, ["A22"], ["Exemplu: raportul de segregare după fenotip în F2 = 9 : 3 : 3 : 1 (9 oval-alungite verzi, 3 oval-alungite galbene, 3 rotunde verzi, 1 rotundă galbenă)."]),
      ] },
    { id: "III.1", subject: "III", title: "Organe de simț și sistem nervos", points: 14, kind: "open",
      intro: "Organele de simț și sistemul nervos participă la realizarea funcțiilor de relație ale unui organism.",
      subs: [
        sub("a", "Numiți trei deficiențe senzoriale la om.", 3, ["A19"], ["Miopia, hipermetropia, astigmatismul, daltonismul, surditatea (trei dintre acestea)."]),
        sub("b", "Explicați: „La mamifere, cerebelul are rol în menținerea echilibrului corpului”.", 3, ["A18"], ["Cerebelul primește informații de la urechea internă (vestibul, canale semicirculare), de la mușchi și articulații.", "Le integrează și coordonează contracția mușchilor scheletici, reglând tonusul muscular și echilibrul."]),
        sub("c", "Construiți patru enunțuri afirmative, câte două pentru Diencefal și Urechea internă.", 8, ["A18", "A19"], ["Diencefalul conține talamusul, care este stație de releu pentru căile senzitive.", "Hipotalamusul, parte a diencefalului, reglează temperatura corpului și controlează hipofiza.", "Urechea internă conține melcul membranos, în care se află organul Corti, cu receptorii auditivi.", "Vestibulul și canalele semicirculare din urechea internă conțin receptorii echilibrului."]),
      ] },
    { id: "III.2", subject: "III", title: "Țesuturi", points: 16, kind: "open",
      intro: "Țesuturile sunt alcătuite din celule care au aceeași formă, aceeași structură și îndeplinesc aceeași funcție.",
      subs: [
        sub("a", "Precizați trei tipuri de țesuturi animale epiteliale.", 3, ["A05"], ["Epiteliu de acoperire, epiteliu glandular, epiteliu senzorial."]),
        sub("b", "Argument pentru: „Vasele conducătoare liberiene ale plantelor sunt adaptate funcției de conducere”.", 3, ["A04"], ["Sunt formate din celule alungite, așezate cap la cap, ale căror pereți transversali sunt perforați (plăci ciuruite), ceea ce permite circulația sevei elaborate."]),
        sub("c", "Minieseu „Țesutul muscular”: șase noțiuni și un text de maximum 3–4 fraze.", 10, ["A05"], ["Noțiuni: miocit, actină, miozină, contracție, țesut muscular striat, țesut muscular neted (sau cardiac).", "Text: Țesutul muscular este format din miocite, celule alungite care conțin proteinele contractile actină și miozină. Prin contracție, acestea produc mișcarea. Țesutul muscular striat mișcă scheletul, iar cel neted se găsește în pereții organelor interne."]),
      ] },
  ],
};

const p2026 = {
  id: "bac-2026-simulare", title: "Simulare Bacalaureat 2026", year: 2026, kind: "oficial", durationMin: 180, note: NOTE,
  parts: [
    { id: "I.A", subject: "I", title: "Completare", points: 4, kind: "open", intro: "În cazul florii angiospermelor, gineceul este format din ............ , iar androceul din ............ .",
      subs: [sub("a", "Completați primul spațiu liber.", 2, ["A20"], ["carpele (pistil)"]), sub("b", "Completați al doilea spațiu liber.", 2, ["A20"], ["stamine"])] },
    { id: "I.B", subject: "I", title: "Exemple și roluri", points: 6, kind: "open", intro: "Dați două exemple de vase conducătoare din corpul plantelor; scrieți în dreptul fiecărui vas rolul îndeplinit.",
      subs: [sub("1", "Primul vas conducător și rolul lui.", 3, ["A11"], ["Vasele lemnoase (xilemul) — conduc seva brută (apa cu săruri minerale) de la rădăcină spre frunze."]), sub("2", "Al doilea vas conducător și rolul lui.", 3, ["A11"], ["Vasele liberiene (floemul) — conduc seva elaborată (substanțe organice) de la frunze spre restul plantei."])] },
    { id: "I.C", subject: "I", title: "Grile", points: 10, kind: "mcq", items: [
      mcq("Briofitele și pteridofitele aparțin regnului:", ["Fungi", "Monera", "Plante", "Protiste"], 2, "A03", "Mușchii și ferigile sunt plante."),
      mcq("Cefalopodele sunt:", ["artropode", "celenterate", "moluște", "nematelminți"], 2, "A03", "Caracatița, sepia și calmarul sunt moluște."),
      mcq("În cazul mamiferelor, spermatozoidul:", ["este o celulă diploidă/2n", "participă la procesul de fecundație", "reprezintă gonada masculină", "se formează în canalele deferente"], 1, "A21", "Spermatozoidul este gamet haploid (n), format în tubii seminiferi ai testiculului; gonada este testiculul."),
      mcq("Fiecare dintre celulele-fiice formate prin diviziunea mitotică a unei celule-mamă cu 2n = 28 cromozomi are:", ["n = 14 cromozomi", "n = 28 cromozomi", "2n = 14 cromozomi", "2n = 28 cromozomi"], 3, "A02", "Mitoza păstrează numărul de cromozomi: 2n = 28."),
      mcq("Celulele fotosensibile din structura ochiului mamiferelor:", ["fac sinapsă cu neuronii bipolari", "participă la formarea nervului optic", "sunt localizate la nivelul coroidei", "sunt componente ale sistemului optic"], 0, "A19", "Conurile și bastonașele fac sinapsă cu neuronii bipolari din retină. Nervul optic este format din axonii neuronilor multipolari."),
    ] },
    { id: "I.D", subject: "I", title: "Adevărat / Fals", points: 10, kind: "af", weights: [3, 3, 4], intro: "Dacă afirmația este falsă, modificați-o parțial, fără negație, pentru a deveni adevărată.", items: [
      af("La mamifere, substanța albă din structura măduvei spinării este organizată în coarne.", false, "La mamifere, substanța cenușie din structura măduvei spinării este organizată în coarne.", "A18", "Substanța albă este la exterior și formează cordoanele."),
      af("În procesul de fotosinteză, plantele transformă substanțele organice în substanțe anorganice, eliberând oxigen în atmosferă.", false, "În procesul de fotosinteză, plantele transformă substanțele anorganice în substanțe organice, eliberând oxigen în atmosferă.", "A06", "Din CO2 și apă rezultă glucoză."),
      af("În timpul inspirației, presiunea aerului din plămânii mamiferelor scade.", true, undefined, "A10", "Volumul plămânilor crește, presiunea scade, iar aerul intră."),
    ] },
    { id: "II.A", subject: "II", title: "Inima și vasele de sânge", points: 18, kind: "open",
      intro: "Inima mamiferelor pompează sângele în vasele de sânge. Cele două componente ale sistemului circulator pot fi afectate de boli.",
      subs: [
        sub("a", "Numiți o boală a sistemului circulator la om, precizând: o cauză, o manifestare, două măsuri de prevenire.", 6, ["A13"], ["Boala: hipertensiunea arterială.", "Cauză: stresul cronic, alimentația bogată în sare și grăsimi, sedentarismul.", "Manifestare: cefalee, amețeli, valori ale tensiunii arteriale peste valorile normale.", "Prevenire: alimentație echilibrată cu puțină sare; exerciții fizice regulate; evitarea fumatului."]),
        sub("b", "Explicați numărul mare de mitocondrii din celulele țesutului muscular cardiac.", 4, ["A01", "A05"], ["Mușchiul cardiac se contractă continuu, toată viața, deci consumă multă energie.", "Mitocondriile produc ATP prin respirație aerobă, de aceea celulele miocardice au multe mitocondrii."]),
        sub("c", "Calculați masa apei din plasma sângelui unui adult (corp: 87 kg; sânge 7%; plasmă 55%; apă 90%). Scrieți toate etapele.", 5, ["A12"], ["Masa sângelui = 87 × 7 / 100 = 6,09 kg", "Masa plasmei = 6,09 × 55 / 100 = 3,3495 kg", "Masa apei = 3,3495 × 90 / 100 = 3,01455 kg"], chain("87", [BLOOD, PLASMA, WATER], "masa apei din plasma sângelui")),
        sub("d", "Completați problema cu o altă cerință și rezolvați-o.", 3, ["A12"], ["Exemplu: masa elementelor figurate din sângele adultului (45% din masa sângelui).", "6,09 × 45 / 100 = 2,7405 kg"], chain("87", [BLOOD, FIGURED], "masa elementelor figurate din sânge")),
      ] },
    { id: "II.B", subject: "II", title: "Genetică (dihibridare)", points: 12, kind: "open",
      intro: "Se încrucișează un soi de dovlecel cu fructe cilindrice (o), de culoare verde-închis (V), heterozigot pentru culoare, cu un soi de dovlecel cu fructe ovale (O), de culoare crem-gălbui (v), heterozigot pentru forma fructelor.",
      subs: [
        sub("a", "Genotipurile celor doi părinți.", 3, ["A22"], ["Părintele 1: ooVv (cilindric, verde-închis, heterozigot pentru culoare).", "Părintele 2: Oovv (oval, crem-gălbui, heterozigot pentru formă)."]),
        sub("b", "Tipurile de gameți formați de părintele cu fructe ovale, crem-gălbui.", 3, ["A22"], ["Oovv formează două tipuri de gameți: Ov și ov (câte 50%)."]),
        sub("c", "Procentul descendenților din F1 cu fructe verde-închis și genotipul lor.", 3, ["A22"], ["ooVv formează gameții oV și ov; Oovv formează Ov și ov.", "Descendenți: OoVv, Oovv, ooVv, oovv (câte 25%).", "Verde-închis (V-): OoVv și ooVv = 50%."]),
        sub("d", "Completați problema cu o altă cerință și rezolvați-o.", 3, ["A22"], ["Exemplu: raportul de segregare după fenotip în F1 = 1 : 1 : 1 : 1 (oval verde, oval crem, cilindric verde, cilindric crem)."]),
      ] },
    { id: "III.1", subject: "III", title: "Excreția", points: 14, kind: "open", intro: "Excreția este una dintre funcțiile vitale ale organismelor.",
      subs: [
        sub("a", "Precizați localizarea și două caracteristici structurale ale rinichilor mamiferelor.", 3, ["A15"], ["Localizare: în regiunea lombară, de o parte și de alta a coloanei vertebrale (retroperitoneal).", "Caracteristici: formă de bob de fasole; învelit într-o capsulă fibroasă; are zonă corticală și zonă medulară."]),
        sub("b", "Explicați rolul stomatelor în realizarea transpirației la plante.", 3, ["A14"], ["Stomatele sunt formate din două celule stomatice care delimitează ostiola.", "Prin ostiolă ies vaporii de apă din frunză. Celulele stomatice reglează deschiderea și astfel intensitatea transpirației."]),
        sub("c", "Construiți patru enunțuri afirmative, câte două pentru Căile urinare ale mamiferelor și Litiaza urinară.", 8, ["A15"], ["Ureterele conduc urina de la bazinetul renal la vezica urinară.", "Uretra elimină urina din vezica urinară în exterior.", "Litiaza urinară se manifestă prin colică renală, durere lombară și hematurie.", "Litiaza poate fi prevenită prin hidratare corespunzătoare și alimentație echilibrată."]),
      ] },
    { id: "III.2", subject: "III", title: "Ereditate și mutații", points: 16, kind: "open",
      intro: "Caracterele ereditare ale viețuitoarelor se transmit în descendență conform unor legi descoperite de Mendel. Mediul poate influența ereditatea.",
      subs: [
        sub("a", "Dați trei exemple de mutații.", 3, ["A23"], ["Mutația genică (punctiformă), mutația cromozomială structurală (deleția), mutația cromozomială numerică (trisomia 21)."]),
        sub("b", "Un argument pentru: „Codominanța este un exemplu de abatere de la segregarea mendeliană”.", 3, ["A22"], ["La codominanță ambele alele se exprimă simultan în heterozigot (de exemplu IA și IB la grupa AB), fără ca una să o domine pe cealaltă, spre deosebire de dominanța completă din legile lui Mendel."]),
        sub("c", "Minieseu „Factorii mutageni”: șase noțiuni și un text de maximum 3–4 fraze.", 10, ["A23"], ["Noțiuni: mutație, factori mutageni, radiații ultraviolete, raze X, substanțe chimice, ADN.", "Text: Factorii mutageni sunt agenți fizici, chimici sau biologici care produc mutații la nivelul ADN-ului. Radiațiile ultraviolete și razele X sunt factori fizici, iar unele substanțe chimice, precum pesticidele sau fumul de țigară, sunt factori chimici. Mutațiile pot duce la boli genetice sau la cancer."]),
      ] },
  ],
};

for (const p of [p2025, p2026]) writeFileSync(`public/content/exams/${p.id}.json`, JSON.stringify(p, null, 1));
writeFileSync("public/content/exams/index.json", JSON.stringify([p2026, p2025].map((p) => ({ id: p.id, title: p.title, year: p.year, kind: p.kind, durationMin: p.durationMin, file: `${p.id}.json` })), null, 1));
console.log("ok");
