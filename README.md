# BacLab — Înveți cu sens.

Aplicație web (PWA) în beta pentru pregătirea la Bacalaureat, biologie vegetală și animală (IX–X, proba E.d).

**Planul de produs, auditul, sursele, diferențierea și recomandarea de plăți:** [docs/BACLAB-2027.md](docs/BACLAB-2027.md).

**Programa pentru 2027:** art. 3 alin. (10) din OMEC 5211/2026 trimite la OMECTS 4800/2010. Programa oficială și delimitările fiecărui capitol sunt documentate în [src/content/syllabus.ts](src/content/syllabus.ts) și în pagina publică `/surse`. Metadatele documentelor consultate și amprentele SHA-256 sunt în [docs/research/manifest.json](docs/research/manifest.json).

**Ce face**
- **Azi** – plan zilnic de 10–30 de minute: recapitulări scadente (repetiție spațiată) + întrebări noi din capitolele deschise, cu accent pe capitolul slab.
- **Diagnostic** – evaluare inițială pe 23 de capitole; după o greșeală adaugă un item diferit din capitol, dacă există, maximum trei per capitol. Coada se păstrează local; rezultatul adaptează prioritățile și recapitulările. Este un screening după reguli, nu o evaluare psihometrică validată.
- **Greșelile mele** – întrebările cu ultimul răspuns automat greșit, care pot fi reluate într-o sesiune separată.
- **Capitole** – 23 de capitole (clasele IX–X) cu fișă de recapitulare și sesiuni de exersare.
- **Exersare** – grile (cu explicația confuziei din spatele fiecărei variante greșite), adevărat/fals cu corectare, itemi autoevaluați.
- **Simulări** – subiecte în formatul real (90 p + 10 oficiu, nota = total/10, promovare ≥ 5, 3 ore), cu autoevaluare și capitolele de reluat.
- **Laborator** – calcul în lanț cu procente (II.A.c) și probleme de genetică generate (mono-, dihibridare F2, încrucișare test), cu pătrat Punnett. Calculele sunt exacte (fracții `BigInt`).
- **Fișe** – 24 de fișe vizuale (76 de tabele comparative, 26 de scheme: fluxuri, arbori, pătrate Punnett calculate de motor), câte una pe capitol, plus structura probei E.d. Sursa: fișele de sinteză 2012, subiectele 2025/2026. Datele sunt în `src/content/fise/`. Modulul B (clasele XI–XII): 14 fișe de recapitulare (63 de tabele și scheme), într-o secțiune separată „în pregătire”, fără exersare.
- **Progres, Setări** – acuratețe pe întrebări distincte, volum testat, fixare euristică, serie de zile, export/import. Sub cinci întrebări distincte pe capitol se semnalează date insuficiente. Intervalul notelor de antrenament necesită minimum trei subiecte diferite cu barem verificat și nu este o prognoză de Bac.

Identitatea vizuală: crem `#F5F1E8`, prună `#30243A`, lime `#D9ED79`, salvie `#8AA995`, coral `#E7A08E`; font Plus Jakarta Sans. Sloganuri: „Clar. Logic. Pe înțeles.", „Biologia are sens."

## Rulare
```bash
npm ci
npm run dev          # http://localhost:3000
npm run build && npm start
npm test             # motoare + randare SSR
npm run check:types  # verificare de tipuri cu stub-uri (fără next)
npm run content:check
npm run content:audit
npm run content:release-check # eșuează intenționat cât timp banca nu este validată și completată
```
Copiază `.env.example` în `.env.local`. Paywall-ul e **oprit** implicit (`NEXT_PUBLIC_PAYWALL=off`): tot conținutul e deschis în beta.

## Arhitectură
- Next.js 15 (App Router), React 19, TypeScript strict, Tailwind cu tokeni CSS (mod întunecat automat).
- **Local-first**: progresul e în `localStorage` (`src/lib/state.ts`, cu migrare și export/import). Conturile și sincronizarea sunt Faza 2 (`supabase/migrations/0001_init.sql`, cu RLS).
- Conținut static în `public/content/` (`bank.json`, `exams/*.json`), încărcat și validat tolerant (`src/lib/content/normalize.ts`).
- Motoare pure, testate, în `src/lib/`: `srs.ts` (SM-2, note 0–3), `plan.ts`, `mastery.ts`, `exam/scoring.ts`, `lab/{chain,genetics,problems}.ts`, `frac.ts`, `access.ts` (freemium).
- PWA: `public/manifest.webmanifest`, `public/sw.js` (offline), `public/offline.html`.

## Conținut — ce este și ce nu este
- `bank.json` conține **333 de itemi**: 57 inițiali și 276 noi (12 suplimentari pe fiecare dintre cele 23 de capitole). Noile întrebări includ grile, A/F cu reformulare și cerințe scurte, cu referințe documentare; `validated: false` păstrează distinctă validarea de specialitate. Banca completă (623 itemi: `out/banca_itemi.json`) **nu era în proiect**. Importă-o cu `npm run content:import -- cale/banca_itemi.json`; normalizatorul acceptă câmpurile `bac_slot`, `wrong_why`, răspunsul corect ca literă sau index.
- **Simularea națională 2026:** enunțurile și cheile grilelor au fost confruntate cu documentele CNCE. Punctajele I.D, II.A și II.B au fost corectate, iar cerințele deschise au criterii discrete din barem. Răspunsurile model sunt exemple ale autorilor, iar evaluarea lor rămâne făcută de elev. Cronometrul oprește editarea la expirare.
- **Bac 2025 var. 1:** baremul pe subcerințe rămâne orientativ până la confruntarea cu documentul oficial pereche. Nu intră automat în istoricul de simulări cu barem verificat.
- Fișele de sinteză provin din materiale anterioare și necesită audit editorial complet. Programa actuală a fost identificată și mapată pe capitole; aceasta nu certifică fiecare afirmație din fișe. B2 (XI–XII) are fișe în pregătire, fără exersare completă; ecologia umană face parte din programa B2.
- Cinci întrebări au fost înlocuite cu întrebări potrivite ariei obligatorii B1 și au ID-uri noi (`-v2`) pentru a nu reutiliza rezultatele unei alte întrebări. Modelele A/F și ipotezele genetice au fost corectate punctual. Niciun item nu a fost etichetat fictiv drept validat de un specialist.
- Nu rula scripturile vechi `content:seed` peste banca revizuită: ele reproduc conținutul inițial. Pentru actualizări, editează/importă cu verificare editorială și rulează testele de regresie.

## Ce a fost verificat
Rulate în această revizie: instalare cu lockfile, 29 teste (inclusiv criteriile baremului 2026, statistici pe itemi distincți și persistența diagnosticului), verificare TypeScript, verificare structurală a conținutului și build Next.js. Controlul pentru lansare comercială semnalează corect că banca nu este validată.

Site-ul public existent a fost inspectat în browser. Verificarea în browser a noii ramuri a fost împiedicată de incompatibilitatea infrastructurii de preview cu argumentele Next.js (`--host`); randarea server și buildul au fost verificate. Nu se pretinde verificare vizuală sau cap-coadă în browser pentru noile interacțiuni.

## Faza 2 (neimplementat)
Conturi Supabase și sincronizare, plăți Stripe (lunar / „Până la Bac"), interfață de administrare a conținutului, Modulul B, aplicații mobile (Capacitor sau React Native pe aceleași motoare).

## Extinderea băncii B1

`python scripts/expand-bank-2027.py` regenerează idempotent cele 276 de întrebări suplimentare și păstrează cele 57 inițiale revizuite. Total: 333; tipuri: 230 grile, 57 A/F, 23 completări și 23 cerințe scurte. Sursele și statutul editorial sunt păstrate în JSON și în `docs/research/bank-expansion-sources.json`. În feedbackul exersării există o secțiune cu programa și referințele itemilor noi. Acoperirea actuală este de 13–18 itemi pe capitol; nu se pretinde că toate subtemele programei sunt epuizate sau că banca a fost validată independent.
