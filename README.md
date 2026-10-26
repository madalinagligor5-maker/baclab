# BacLab — Înveți cu sens.

Aplicație web (PWA) pentru pregătirea la Bacalaureat, biologie vegetală și animală (proba E.d). Elevul învață singur, fără profesor.

**Ce face**
- **Azi** – plan zilnic de 10–30 de minute: recapitulări scadente (repetiție spațiată) + întrebări noi din capitolele deschise, cu accent pe capitolul slab.
- **Capitole** – 23 de capitole (clasele IX–X) cu fișă de recapitulare și sesiuni de exersare.
- **Exersare** – grile (cu explicația confuziei din spatele fiecărei variante greșite), adevărat/fals cu corectare, itemi autoevaluați.
- **Simulări** – subiecte în formatul real (90 p + 10 oficiu, nota = total/10, promovare ≥ 5, 3 ore), cu autoevaluare și capitolele de reluat.
- **Laborator** – calcul în lanț cu procente (II.A.c) și probleme de genetică generate (mono-, dihibridare F2, încrucișare test), cu pătrat Punnett. Calculele sunt exacte (fracții `BigInt`).
- **Fișe** – 24 de fișe vizuale (76 de tabele comparative, 26 de scheme: fluxuri, arbori, pătrate Punnett calculate de motor), câte una pe capitol, plus structura probei E.d. Sursa: fișele de sinteză 2012, subiectele 2025/2026. Datele sunt în `src/content/fise/`.
- **Progres, Setări** – stăpânire pe capitol, serie de zile, export/import al progresului.

Identitatea vizuală: crem `#F5F1E8`, prună `#30243A`, lime `#D9ED79`, salvie `#8AA995`, coral `#E7A08E`; font Plus Jakarta Sans. Sloganuri: „Clar. Logic. Pe înțeles.", „Biologia are sens."

## Rulare
```bash
npm install
npm run dev          # http://localhost:3000
npm run build && npm start
npm test             # motoare + randare SSR
npm run check:types  # verificare de tipuri cu stub-uri (fără next)
npm run content:check
```
Copiază `.env.example` în `.env.local`. Paywall-ul e **oprit** implicit (`NEXT_PUBLIC_PAYWALL=off`): tot conținutul e deschis în beta.

## Arhitectură
- Next.js 15 (App Router), React 19, TypeScript strict, Tailwind cu tokeni CSS (mod întunecat automat).
- **Local-first**: progresul e în `localStorage` (`src/lib/state.ts`, cu migrare și export/import). Conturile și sincronizarea sunt Faza 2 (`supabase/migrations/0001_init.sql`, cu RLS).
- Conținut static în `public/content/` (`bank.json`, `exams/*.json`), încărcat și validat tolerant (`src/lib/content/normalize.ts`).
- Motoare pure, testate, în `src/lib/`: `srs.ts` (SM-2, note 0–3), `plan.ts`, `mastery.ts`, `exam/scoring.ts`, `lab/{chain,genetics,problems}.ts`, `frac.ts`, `access.ts` (freemium).
- PWA: `public/manifest.webmanifest`, `public/sw.js` (offline), `public/offline.html`.

## Conținut — ce este și ce nu este
- `bank.json` conține **57 de itemi de pornire** scriși de autor (`validated: false`). Banca completă (623 itemi: `out/banca_itemi.json`) **nu era în proiect**. Importă-o cu `npm run content:import -- cale/banca_itemi.json`; normalizatorul acceptă câmpurile `bac_slot`, `wrong_why`, răspunsul corect ca literă sau index.
- Subiectele **Bac 2025 var. 1** și **Simularea 2026** au enunțurile oficiale. **Baremul oficial nu a fost furnizat**: răspunsurile model și punctajul pe subcerințe sunt scrise de autori și trebuie verificate de un profesor.
- Fișele de sinteză sunt din 2012; programa actuală nu a fost verificată integral. Modulul B (XI–XII) este doar o hartă.

## Ce a fost verificat
Rulat: 18 teste (SRS, calcule exacte, genetică, normalizator, scor Bac, acces, randare SSR a paginilor), verificare de tipuri, validarea conținutului.
**Nerulat în mediul în care a fost construit** (fără acces la registrul npm): `npm install`, `next build`, compilarea Tailwind și rularea în browser. Prima rulare locală poate scoate mici nepotriviri de configurare sau de aspect; raportează-le.

## Faza 2 (neimplementat)
Conturi Supabase și sincronizare, plăți Stripe (lunar / „Până la Bac"), interfață de administrare a conținutului, Modulul B, aplicații mobile (Capacitor sau React Native pe aceleași motoare).
