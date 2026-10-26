# BacLab 2027: aplicația care transformă greșelile în pași de învățare

Verificare documentară: 26 octombrie 2026. Domeniu implementat: B1, biologie vegetală și animală, clasele IX–X. Acest document distinge funcțiile existente, modificările din această ramură și condițiile pentru lansarea comercială.

## 1. Concluzia analizei

BacLab are deja o identitate vizuală coerentă, explicații pentru distractorii grilelor, repetiție spațiată, generatoare exacte de probleme și fișe de recapitulare. Avantajul de construit este legătura dintre aceste funcții: răspuns → confuzie explicată → intervenție potrivită → exercițiu diferit → reverificare ulterioară. O bibliotecă mare de materiale, singură, nu este suficientă.

În ramura analizată inițial existau 57 de itemi, toți marcați `validated: false`, două simulări și progres exclusiv local. Unele capitole aveau un singur item. Acesta este un prototip beta, nu o bancă suficientă pentru a certifica pregătirea integrală la Bac.

Site-ul public a fost verificat: pagina principală, începutul parcursului, planul zilnic, răspunsul la un item A/F și lista simulărilor. Alegerea unui buget de 20 minute afișa aproximativ 20 minute chiar și pentru cinci întrebări. Pagina principală promitea „notă reală”, deși evaluarea răspunsurilor deschise era făcută de elev, pe punctaje orientative.

## 2. Programa aplicabilă pentru 2027

OMEC nr. 5211 din 27.08.2026, publicat în Monitorul Oficial nr. 758 din 07.09.2026, art. 3 alin. (10), menține pentru disciplinele care nu sunt excepții programele aprobate prin OMECTS 4800/2010. Biologia intră în această categorie. S-a citit documentul oficial în copia PDF găzduită de Edupedu, deoarece portalul legislatie.just.ro nu a răspuns la verificare. Numele copiei conține anul 2025, dar în document ordinul este 5211/2026.

Programa de biologie este publicată pe edu.ro sub titlul „Bacalaureat 2011”. Vechimea titlului nu anulează aplicabilitatea sa, confirmată prin ordinul anual. Documentele și amprentele SHA-256 sunt în `docs/research/manifest.json`; legăturile și delimitările pe toate cele 23 de capitole sunt în `src/content/syllabus.ts` și în pagina `/surse`.

Cele două variante trebuie păstrate distincte:

| Variantă | Clase | Conținut de organizat |
|---|---|---|
| B1 | IX–X | Diversitatea lumii vii și conservarea biodiversității; celulă și diviziune; ereditate și variabilitate; țesuturi; funcții de nutriție, relație și reproducere |
| B2 | XI–XII | Alcătuirea corpului; sistem nervos, analizatori, endocrine, osos și muscular; digestie și absorbție, circulație, respirație, excreție; reproducere; genetică moleculară și umană; ecologie umană |

Ecologia umană este explicit în B2, nu o opțiune de confirmat ulterior. „Metabolismul și nutrimentele” și „organismul ca tot unitar” nu trebuie prezentate ca titluri independente din programa B2 doar fiindcă apar în materiale didactice. Pot deveni suport contextual, etichetat distinct, după analiza fiecărei noțiuni.

### Delimitări care contează la B1

- Funcțiile componentelor celulei se cer fără descrierea mecanismelor.
- Fotosinteza: ecuație, etape, evidențiere, pigmenți, importanță; fără mecanism intim.
- Respirația celulară: ecuație și localizare; fără mecanism. Numărarea ATP din glicoliză nu trebuie să domine diagnosticul obligatoriu.
- Digestia: fără structura peretelui tubului digestiv.
- Excreția: rinichi și căi urinare, fără mecanismul formării urinei.
- Simbioza menționează lichenii. Micorizele nu înlocuiesc acest conținut explicit.
- Grupele sanguine pot ilustra codominanța; compatibilitatea transfuzională ABO/Rh nu trebuie tratată automat ca cerință explicită în B1.
- Clasificarea folosită la examen trebuie explicată în termenii programei, fără a confunda convențiile didactice cu o taxonomie modernă exhaustivă.

Programa stabilește limitele, nu oferă toate răspunsurile biologice. Pentru conținut se folosesc manuale școlare aprobate, surse academice și perechile oficiale subiect–barem. Un manual universitar poate verifica un fapt, dar nu extinde programa de Bac.

Puncte de acces verificate pentru documentare: [pagina ministerului despre manuale](https://edu.ro/manuale-scolare), care trimite la manualele aprobate, și [informarea din 14 octombrie 2026 despre noile manuale de clasa a IX-a](https://edu.ro/press_rel_73_26_manuale_IX). Manualele noului curriculum IX din 2026 nu schimbă automat programa cohortei care susține Bacul în 2027. Nu s-a verificat integral niciun manual și nu s-au copiat în aplicație pagini protejate. Pentru verificări punctuale au fost consultate și [OpenStax: celule procariote](https://openstax.org/books/biology-2e/pages/4-2-prokaryotic-cells), [ereditate](https://openstax.org/books/biology-2e/pages/12-3-laws-of-inheritance), [transport la plante](https://openstax.org/books/biology-2e/pages/30-5-transport-of-water-and-solutes-in-plants). Aceste pagini nu țin loc de validare integrală a băncii.

## 3. Experiența diferențiatoare

Promisiune propusă: **„Descoperi ce ai confundat. Înțelegi de ce. Știi cu ce să continui azi.”**

Publicul inițial: elevul care a ales B1 și are nevoie de structură și explicații accesibile. Obiectivul de notă și timpul disponibil pot personaliza parcursul ulterior; ele nu justifică promisiuni de promovare.

### Diagnostic cu aprofundare după greșeli

Implementat: o întrebare din fiecare capitol disponibil. La un răspuns greșit se adaugă, dacă există, un item diferit din același capitol, cu maximum trei întrebări per capitol. Coada și răspunsurile se salvează local; explicațiile sunt arătate la final. Rezultatul actualizează prioritățile și recapitulările o singură dată.

Acesta este un screening adaptiv după reguli, nu un test psihometric calibrat. Un răspuns corect dintr-un singur item nu demonstrează stăpânirea capitolului. Raportul păstrează numitorul: „1/2 corecte”, nu o concluzie sigură despre jumătate din întreaga materie.

Pentru versiunea comercială, itemii diagnostici trebuie să acopere subteme și dificultăți diferite, cu forme alternative. Urmează pilotarea pentru ambiguitate, dificultate observată, putere de discriminare și acoperire. Întrebările diagnostice și cele folosite la verificarea progresului trebuie separate pentru a limita efectul memorării itemului.

### Plan zilnic care spune și motivul

Implementat: recapitulări scadente, apoi întrebări noi din capitole eligibile, prioritizate după rezultatele simulării și diagnosticului. Sloturile nefolosite de întrebări noi se întorc la recapitulări. Durata se estimează din numărul real de întrebări; bugetul elevului este afișat separat. Greșelile recente se pot relua voluntar imediat din „Greșelile mele”.

Următorul nivel de produs: blocuri de învățare care includ fișa potrivită și laboratorul, nu numai grile. Exemplu de proiectare pentru 20 minute, nu regulă demonstrată științific: 4 minute comparație de concepte, 6 minute recapitulare, 8 minute aplicare într-o problemă, 2 minute verificare fără indicii. Timpul se calibrează din folosirea reală și nu se afișează dacă nu există conținutul necesar.

### Explicația confuziei

Păstrează explicația specifică alegerii greșite. Leag-o de o fișă și de un item diferit. De exemplu: „Ai confundat existența ADN-ului cu existența unui nucleu delimitat. Bacteriile au ADN în nucleoid.” La A/F, cere reformularea fără negație când se simulează cerința oficială; simpla bifare „Fals” nu acoperă corectarea.

Generatorul de genetică trebuie să expliciteze dominanța completă și segregarea independentă atunci când folosește 3:1 sau 9:3:3:1. Nu aplica aceleași rapoarte la codominanță sau gene înlănțuite. Motorul exact de fracții este un avantaj; scenariile biologice necesită separat verificare didactică.

### Repetiție spațiată

Implementat: programarea existentă de tip SM-2, cu interval resetat după greșeală. Indicatorul intern de fixare scade după depășirea termenului de repetare, în loc să rămână mare indiferent cât timp a trecut.

Formula este o euristică de produs. Cercetările lui Roediger & Karpicke (2006) și Cepeda et al. (2008) susțin recuperarea din memorie și distribuirea practicii în timp, nu precizia acestui algoritm. Formulare corectă: „Repetările sunt programate în funcție de răspunsurile tale.” Nu promite că știi exact momentul în care elevul începe să uite.

## 4. Simulări și punctaje

Referință verificată: subiectul și baremul simulării naționale 2026, documente CNCE. Durata: 180 minute; 90 puncte + 10 din oficiu. Subiectele I, II și III au fiecare 30 puncte.

Erori găsite și corectate în simularea 2026 din aplicație:

| Cerință | Inițial în aplicație | Barem verificat |
|---|---|---|
| I.D, cele trei afirmații | 3 / 3 / 4 | 4 / 4 / 2; 2 p pe literă și 2 p pe reformularea fiecărei afirmații false |
| II.A, a–d | 6 / 4 / 5 / 3 | 5 / 3 / 6 / 4 |
| II.B, a–d | 3 / 3 / 3 / 3 | 2 / 2 / 4 / 4 |

Implementat: criterii discrete pentru fiecare răspuns deschis al simulării 2026. Nu se acordă o jumătate generică dintr-o cerință de 3 puncte. Opțiunea de 1 punct dintr-un calcul de 2 puncte este disponibilă numai unde baremul permite punctarea raționamentului corect fără calcule. Punctajele nepermise sunt ignorate de motor.

Cronometrul închide răspunsurile la expirare, inclusiv după revenirea la o pagină rămasă deschisă. Răspunsurile deschise continuă să fie autoevaluate; nota este de antrenament. Baremul oficial acceptă orice modalitate corectă de rezolvare: modelul autorului nu trebuie prezentat ca singura formulare corectă.

Subiectul 2025 rămâne cu punctaje orientative până la confruntarea cu perechea sa oficială. Nu este inclus automat în istoricul cu barem verificat. Nu prezentăm simularea 2026 ca model oficial 2027.

### Prognoza de notă

Nu există încă un model BacLab validat față de note reale. Implementarea arată „date insuficiente” înainte de cel puțin trei subiecte diferite, cronometrate, cu punctaje verificate, în 45 zile. După aceea arată minimul și maximul ultimelor maximum cinci subiecte eligibile, ca interval descriptiv de antrenament. Acesta nu este interval de încredere și nici prognoză validată.

În banca actuală există un singur subiect cu barem confruntat; condiția nu este încă îndeplinită. Pentru o prognoză reală sunt necesare mai multe forme de test echivalente și rezultate externe, cu acordul utilizatorilor, un set de evaluare separat și raportarea erorii de predicție și a limitelor sale. Nu convertim procentul de grile în notă de Bac: ar ignora punctajele răspunsurilor deschise.

## 5. Statistici care nu induc în eroare

Implementat: acuratețe pe ultimul răspuns la fiecare întrebare distinctă, în ultimele 30 zile. Repetarea de 50 ori a aceleiași grile nu produce 50 observații independente. Sub cinci itemi diferiți se arată „Prea puține date”, cu răspunsurile corecte și totalul; pragul este o regulă de prudență în interfață, nu o certificare statistică.

Separă în produs: acuratețea observată; întrebările văzute din banca disponibilă; recapitulările scadente; punctele pierdute într-o simulare; indicatorul euristic de fixare. Niciunul singur nu este „procentul din programa oficială stăpânit”.

## 6. Banca de conținut necesară

Nu adăugăm sute de întrebări și nu le etichetăm „validate” după generare. Banca extinsă conține 333 de întrebări, dintre care 276 noi, câte 12 pe capitol. Statutul lor este „draft documentat”, distinct de validarea unui profesor. Au fost înlocuite punctual întrebări nepotrivite ca prioritate obligatorie în B1: ATP în glicoliză, formarea urinei, compatibilitate transfuzională, micorize și un item general de articulații. S-au explicitat ipotezele dominanței complete și s-a corectat un model A/F bazat pe negație.

Plan editorial propus, de ajustat după acoperirea fiecărui capitol: minimum 20 itemi diferiți per capitol pentru prima bancă comercială (460 pentru 23 capitole), plus probleme generate și criterii pentru răspunsuri deschise. Acesta este un obiectiv editorial, nu un minimum impus de Minister sau un prag de validitate psihometrică.

Pentru fiecare capitol:

1. Lista noțiunilor și excluderilor din programă, cu pagină/secțiune.
2. Fișă scurtă, comparație vizuală și exemple verificate.
3. Itemi de cunoaștere, înțelegere și aplicare, fiecare cu răspuns și explicație.
4. Pentru fiecare distractor, confuzia pe care o verifică.
5. Itemi A/F care cer și reformulare, răspunsuri structurate și mini-eseuri acolo unde se potrivesc.
6. Variante diferite pentru diagnostic, antrenament și reverificare.
7. Sursa verificabilă a faptului, autor, verificator de specialitate și data verificării.

Schema editorială propusă, pe lângă câmpurile existente: `syllabus_ref`, `source_ref`, `source_locator`, `misconception_code`, `learning_objective`, `review_status`, `reviewed_by`, `reviewed_at`, `version`. `validated: true` se pune numai după revizia efectivă, nu pentru că JSON-ul trece verificări structurale.

`npm run content:audit` inventariază banca actuală. `npm run content:release-check` semnalează insuficiența conținutului validat. Acest control trebuie legat de procesul de lansare înaintea unei versiuni plătite. Nu s-a activat un paywall și nu s-au configurat încasări în această ramură.

## 7. Diferențiere față de competiție

Pagini publice verificate: [QuestBac](https://questbac.com/), [Kleksa B1](https://kleksa.com/bacalaureat/biologie-vegetala-animala), [GinaMed](https://platform.ginamed.ro/grile). Comparația este limitată la oferta publică, nu la un audit al conturilor plătite. BAClass, MedClass și Simulează au fost menționate în cerință, dar nu sunt prezentate aici drept produse auditate.

QuestBac oferă deja cursuri, teste, flashcarduri și resurse pentru B1/B2, plus cărți. Kleksa prezintă subiecte, punctaj pe barem și evaluare AI a răspunsurilor deschise. GinaMed are grile greșite, teste personalizate și resurse bogate, orientate mai ales către admiterea la medicină. Nu presupune că o funcție lipsește la concurență doar pentru că nu apare pe prima pagină.

Poziționarea BacLab trebuie demonstrată prin experiență: explicații clare pentru confuzii frecvente la B1; probleme verificate și ghidate pas cu pas; transformarea imediată a diagnosticului în acțiune; statistici transparente; experiență calmă și accesibilă pe telefon. Un chatbot generic sau o listă de flashcarduri nu creează singure avantaj.

Păstrează paleta crem–prună–lime. Pe pagina principală adaugă un exemplu interactiv de 60 secunde, aria exactă B1, explicația a ce primește elevul gratuit, cine verifică materia și un traseu simplu către diagnostic. Prezintă mărturii numai după obținerea lor reală și cu acord. Nu folosi rezultate sau numere de elevi inventate.

Distribuție: un clip scurt per confuzie reală („arteră nu înseamnă automat sânge oxigenat”), cu trimitere la exercițiul relevant; colaborări pilot cu profesori; pagini utile pentru subteme și modele de rezolvare. Măsoară finalizarea diagnosticului, prima sesiune terminată și revenirea după o săptămână, înainte de a crește bugetul de promovare.

## 8. Plăți și ofertă

Recomandare pentru aplicația Next.js: **Stripe Checkout**, inițial pentru o plată unică pe un pachet cu termen explicit, apoi Stripe Billing dacă se confirmă utilitatea abonamentului. Checkout suportă plăți unice și abonamente, cu interfață găzduită și întreținere redusă. România este inclusă în oferta de preț verificată.

La verificare, Stripe publică 1,5% + 1 leu pentru carduri standard SEE; Stripe Billing pay-as-you-go publică separat 0,7% din volumul Billing. NETOPIA publică pe pagina serviciului un tarif standard de 1,19% + 0,30 lei, începând cu 1 august 2026, și oferă recurență. Există și o pagină de suport cu o ofertă diferită; cere oferta contractuală aplicabilă, inclusiv tratamentul TVA și costurile serviciilor suplimentare. Nu presupune că NETOPIA nu poate face abonamente.

Exemplu aritmetic pentru 39 lei, fără alte costuri: Stripe Payments standard SEE ≈ 1,59 lei; dacă se adaugă Billing 0,7%, încă ≈ 0,27 lei. NETOPIA, la formula de pe pagina serviciului, ≈ 0,76 lei înainte de clarificarea condițiilor contractuale. Aleg Stripe pentru fluxul de integrare și gestiune, nu pentru cel mai mic comision.

Prețuri de test propuse, nu prețuri activate: gratuit două capitole și un diagnostic; 39 lei/lună pentru acces complet; alternativ 149 lei pentru 90 zile, plată unică. Un pachet „Până la Bac” trebuie să afișeze data finală și sesiunea acoperită. Nu testa plata pentru „acces complet” cât timp banca nu este completată și validată.

Înainte de activare: cont și sincronizare; acces verificat pe server; evenimente de plată semnate și procesate idempotent; tratarea rambursărilor și anulărilor; politici comerciale și integrarea facturării aplicabile afacerii. O revenire pe pagina de succes nu este dovadă suficientă a plății. Banca premium nu rămâne integral în `/public/content/` dacă protejarea accesului este parte din produs. Stripe Checkout nu rezolvă de la sine toate obligațiile de facturare din România.

Surse: [Stripe Payments](https://stripe.com/en-ro/pricing), [Stripe Checkout](https://docs.stripe.com/payments/checkout), [Stripe Billing](https://stripe.com/en-ro/billing/pricing), [NETOPIA card](https://netopia-payments.com/servicii/plati-online-cu-cardul/), [NETOPIA recurență](https://netopia-payments.com/solutii/plata-recurenta/).

## 9. Ordinea de lansare

1. Verificarea editorială a întregii materii B1, completarea băncii și a perechilor subiect–barem; fără etichete de validare fictive.
2. Pilot cu elevi și profesori: observarea confuziilor, verificarea utilității planului și a ușurinței folosirii pe telefon.
3. Conturi, sincronizare și acces sigur; progresul beta este încă local și se poate exporta/importa.
4. Plăți în mediu de test, verificarea traseului complet și a facturării; apoi lansare comercială.
5. Mai multe simulări verificate și pilot pentru estimarea performanței. B2 devine ulterior un produs separat, complet, nu un amestec cu B1.

Ramura nu modifică automat site-ul public și nu garantează validarea de specialitate a materialelor. Criteriul de succes este că fiecare elev înțelege rezultatul, motivul recomandării și următorul pas, iar fiecare afirmație despre examen poate fi urmărită până la sursă.

## 10. Extindere efectiv încărcată în fișierul băncii

Au fost adăugate 276 întrebări originale: pe fiecare capitol, 8 grile, 2 A/F și 2 cerințe scurte. Banca are acum 333 de întrebări (230 grile, 57 A/F, 23 completări, 23 cerințe scurte), cu 13–18 itemi pe capitol. Generatorul este idempotent și folosește ID-uri noi, fără a rescrie istoricul întrebărilor vechi. Poziția răspunsului corect variază. Explicațiile variantelor greșite includ explicația corectă și identifică alegerea; nu reprezintă o clasificare psihologică validată a confuziilor.

Noile întrebări poartă referințe academice pe capitol și o trimitere la pagina programei; nu sunt etichetate ca subiecte oficiale. Include completări, comparații, trasee biologice și calcule cu ipoteze explicite. Există verificări automate pentru ID-uri și enunțuri duplicate, opțiuni distincte, chei, surse, modele A/F fără simpla negație și probabilități genetice. Aceste verificări nu substituie revizia didactică independentă.
