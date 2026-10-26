/**
 * Reguli de produs într-un singur loc. Valorile sunt propuneri de pornire – se stabilesc de tine.
 */
export const PRODUCT = {
  name: "BacLab",
  tagline: "Înveți cu sens.",
  /** Cât durează, în medie, un item de tip grilă (secunde) – folosit la planul zilnic. */
  secondsPerItem: 45,
  /** Opțiuni de timp zilnic (minute) afișate la început. */
  minutesOptions: [10, 20, 30] as const,
  defaultMinutes: 20 as number,
  /** Capitolele deschise gratuit atunci când paywall-ul e activ. */
  freeChapters: ["A01", "A06"],
  /** Simulările gratuite (id din public/content/exams/index.json). */
  freeExams: ["bac-2026-simulare"],
  /** Probleme generate gratuite pe zi, când paywall-ul e activ. */
  freeLabPerDay: 3,
  /** Planuri comerciale. Prețurile se completează când se activează plățile (Faza 2). */
  plans: [
    { id: "lunar", name: "Abonament lunar", blurb: "Acces complet, anulezi oricând." },
    { id: "pana-la-bac", name: "Până la Bac", blurb: "Plată unică, acces complet până la examen." },
  ],
} as const;

/** Paywall-ul e oprit implicit (beta): tot conținutul e deschis. */
export function paywallEnabled(): boolean {
  return process.env.NEXT_PUBLIC_PAYWALL === "on";
}
