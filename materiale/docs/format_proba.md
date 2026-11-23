# Formatul probei E.d (Biologie vegetală și animală) – model pentru aplicație

Sursă: subiectul de bac 2025 (var. 01) și simularea 2026, ambele citite integral. **Baremul oficial nu a fost furnizat** – punctajele pe cerințe de mai jos sunt cele din subiect; distribuția în interiorul unei cerințe este orientativă.

Durată: 3 ore. Se acordă 10 puncte din oficiu. Total: 100 p + 10 p oficiu → nota = total / 10.

| Subiect | Cerință | Puncte | Ce se cere | Tip de item în bancă (`type`) |
|---|---|---|---|---|
| I (30 p) | A | 4 | completarea spațiilor libere cu termeni | `completare` |
| | B | 6 | două exemple + câte o caracteristică/precizare | `exemple_caracteristica` |
| | C | 10 | 5 itemi cu alegere multiplă (4 opțiuni, 1 corectă) | `grila` |
| | D | 10 | 3 afirmații A/F; la F se corectează parțial, fără negație | `adevarat_fals` |
| II (30 p) | A | 18 | a) enumerare/rol, b) explicație, c) calcul în lanț cu procente, d) completarea problemei cu o cerință proprie | `structurat`, `problema_calcul` |
| | B | 12 | problemă de genetică, cerințe a–d (d = cerință formulată de elev) | `problema_genetica` |
| III (30 p) | 1 | 14 | a) precizări, b) explicație, c) patru enunțuri afirmative, câte două pentru fiecare dintre două conținuturi | `structurat`, `enunturi` |
| | 2 | 16 | a), b) cerințe scurte, c) minieseu cu 6 noțiuni și text coerent de 3–4 fraze | `structurat`, `minieseu` |

## Observații verificate în subiectele 2025 și 2026
- Calculul II.A.c este identic ca structură: sânge 7% din masa corpului → plasmă 55% din sânge → apă 90% din plasmă (11 kg în 2025, 87 kg în 2026). Itemii din A12 îl generează programatic.
- II.B 2025: dihibridare cu F1 × F1 (16 combinații); II.B 2026: părinți heterozigoți pentru câte un caracter. Ambele sunt modelate în A22 și calculate cu motorul de genetică.
- Cerința „d) completați problema” cere formularea și rezolvarea unei cerințe noi: fiecare problemă din bancă conține un exemplu în câmpul `extra_requirement_example`.
- Subiectul 2025 I.D folosește „nu se acceptă folosirea negației” – validatorul aplicației impune corecția fără negație la itemii A/F.
