/** Official scope is independent of the app's teaching order. Pages are PDF page numbers. */
export const VERIFIED_AT = "2026-10-26";
export const SOURCES = [
  { id: "order-2027", title: "OMEC 5211/27.08.2026 · art. 3 alin. (10)", url: "https://legislatie.just.ro/Public/DetaliiDocument/314047", note: "Ordinul publicat în Monitorul Oficial nr. 758/07.09.2026. Portalul oficial a fost indisponibil la verificare; textul a fost citit în copia PDF a Monitorului Oficial." },
  { id: "order-2027-copy", title: "Copia PDF a Monitorului Oficial · ordinul pentru 2027", url: "https://cdn.edupedu.ro/wp-content/uploads/2026/09/ORDIN-Nr.-5.211-2025-Calendar-Bacalaureat-2027-organizarea-si-sefasurarea-examnului-de-bacalaureat-2027-Monitorul-Oficial-Partea-I-nr.-758.pdf", note: "Document oficial, găzduit de Edupedu. În interior: nr. 5211/2026; denumirea fișierului conține eronat anul 2025." },
  { id: "syllabus", title: "Programa oficială de biologie · OMECTS 4800/2010", url: "https://www.edu.ro/sites/default/files/Programa_Bac_2011_E%20d%29_Biologie.pdf", note: "B1: paginile 4–6, clasele IX–X. B2: paginile 7–8, clasele XI–XII. Titlul «2011» nu înseamnă că programa a expirat." },
  { id: "simulation-2026", title: "Simularea națională 2026 · subiectul CNCE", url: "https://cdn.edupedu.ro/wp-content/uploads/2026/03/E_d_bio_veg_anim_2026_var_simulare_LRO.pdf", note: "Copie a subiectului oficial: 180 minute, 90 puncte + 10 din oficiu. Nu este modelul oficial 2027." },
  { id: "rubric-2026", title: "Simularea națională 2026 · baremul CNCE", url: "https://cdn.edupedu.ro/wp-content/uploads/2026/03/E_d_bio_veg_anim_2026_bar_simulare_LRO.pdf", note: "Criteriile și punctajele simulării din aplicație au fost confruntate cu acest document. Răspunsurile model rămân exemple ale autorilor." },
  { id: "retrieval", title: "Roediger & Karpicke, 2006 · practica recuperării din memorie", url: "https://pubmed.ncbi.nlm.nih.gov/16507066/", note: "Susține testarea ca activitate de învățare; nu validează algoritmul BacLab sau o creștere garantată a notei." },
  { id: "spacing", title: "Cepeda et al., 2008 · repetiția distribuită", url: "https://pubmed.ncbi.nlm.nih.gov/19076480/", note: "Susține spațierea repetărilor. Momentul optim diferă; aplicația nu știe exact când va uita un elev." },
];

export const SYLLABUS_A: Record<string, { section: string; pages: string; limit: string }> = {
  A01: { section: "IX · 2.1 Structura și rolul componentelor celulei", pages: "4", limit: "Funcțiile organitelor fără descrierea mecanismelor." },
  A02: { section: "IX · 2.2 Diviziune celulară", pages: "4", limit: "Ciclu, cromozomi, mitoză și meioză; faze și importanță." },
  A03: { section: "IX · 1.1–1.2 Diversitatea lumii vii", pages: "4", limit: "Toți taxonii enumerați și conservarea biodiversității în România; fără cicluri evolutive." },
  A04: { section: "X · 1.1 Țesuturi vegetale", pages: "5", limit: "Clasificare, structură, rol; meristeme primare și țesuturile definitive enumerate." },
  A05: { section: "X · 1.2 Țesuturi animale", pages: "5", limit: "Epitelial, conjunctiv, muscular și nervos." },
  A06: { section: "X · 2.1 Nutriția autotrofă", pages: "5", limit: "Ecuație, etape, evidențiere, pigmenți și importanță; fără mecanism intim." },
  A07: { section: "X · 2.1 Nutriția heterotrofă", pages: "5", limit: "Fungi saprofiți/paraziți, plante parazite, licheni. Micorizele nu sunt cerute explicit." },
  A08: { section: "X · 2.1 Digestia la animale", pages: "5", limit: "Tub digestiv fără structura peretelui, glande anexe, boli enumerate." },
  A09: { section: "X · 2.1 Respirația aerobă și anaerobă", pages: "5", limit: "Ecuație, localizare, fermentații și evidențiere; fără mecanismul respirației celulare." },
  A10: { section: "X · 2.1 Respirația la animale", pages: "6", limit: "Sistem respirator, ventilație, boli enumerate." },
  A11: { section: "X · 2.1 Circulația la plante", pages: "6", limit: "Absorbția apei și sărurilor, mecanisme, circulația sevelor și forțe." },
  A12: { section: "X · 2.1 Mediul intern la mamifere", pages: "6", limit: "Compoziția și rolul sângelui. Compatibilitatea transfuzională nu este cerută explicit în B1." },
  A13: { section: "X · 2.1 Sistem circulator la mamifere", pages: "6", limit: "Inimă: structură macroscopică; vase și boli enumerate." },
  A14: { section: "X · 2.1 Excreția la plante", pages: "6", limit: "Transpirație: prezentare generală și localizare." },
  A15: { section: "X · 2.1 Excreția la animale", pages: "6", limit: "Căi urinare și rinichi, boli; fără mecanismul formării urinei." },
  A16: { section: "X · 2.2 Locomoția la animale", pages: "6", limit: "Scheletul și musculatura membrelor la mamifere." },
  A17: { section: "X · 2.2 Sensibilitatea și mișcarea la plante", pages: "6", limit: "Distincții de bază între răspunsurile la stimuli." },
  A18: { section: "X · 2.2 Sistem nervos la mamifere", pages: "6", limit: "SNC: localizare, componente, rol, boli și factori de risc enumerați." },
  A19: { section: "X · 2.2 Organe de simț la mamifere", pages: "6", limit: "Ochi, ureche, nas, limbă, piele; deficiențele enumerate." },
  A20: { section: "X · 2.3 Reproducerea la plante", pages: "6", limit: "Asexuată și sexuată la angiosperme: floare, fecundație, sămânță, fruct." },
  A21: { section: "X · 2.3 Reproducerea la om", pages: "6", limit: "Localizare, structură, rol, boli cu transmitere sexuală enumerate." },
  A22: { section: "IX · 3.1–3.2 Ereditate și mecanisme de transmitere", pages: "5", limit: "Legi mendeliene și codominanță; ipotezele se precizează în probleme." },
  A23: { section: "IX · 3.3–3.6 Recombinare, sex, mutații, genetică umană", pages: "5", limit: "Determinism cromozomal fără subtipuri; boli ereditare, clasificare și exemple." },
};
