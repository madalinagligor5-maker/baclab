import { addDays, diffDays, type DayStr } from "./dates";

/**
 * Repetiție spațiată (variantă SM-2 simplificată, 4 note).
 *  0 = greșit · 1 = greu (corect, cu efort) · 2 = bine · 3 = ușor
 */
export type Grade = 0 | 1 | 2 | 3;

export interface Card {
  ease: number;
  /** intervalul curent în zile */
  interval: number;
  /** repetări corecte consecutive */
  reps: number;
  lapses: number;
  /** data următoarei repetări */
  due: DayStr;
  last: Grade;
  /** prima și ultima dată când a fost văzut */
  first: DayStr;
  seen: DayStr;
  /** de câte ori a fost parcurs */
  count: number;
}

export const MIN_EASE = 1.3;
export const MAX_EASE = 3.0;
export const MAX_INTERVAL = 180;
const START_EASE = 2.5;

const round = Math.round;
const clamp = (x: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, x));

/** Aplică o notă și întoarce cardul nou (nu modifică cardul anterior). */
export function review(prev: Card | undefined, grade: Grade, today: DayStr): Card {
  const had = prev !== undefined;
  let ease = prev?.ease ?? START_EASE;
  let interval = prev?.interval ?? 0;
  let reps = prev?.reps ?? 0;
  let lapses = prev?.lapses ?? 0;

  switch (grade) {
    case 0:
      if (reps > 0) {
        lapses += 1;
        ease = clamp(ease - 0.2, MIN_EASE, MAX_EASE);
      }
      reps = 0;
      interval = 1;
      break;
    case 1:
      ease = clamp(ease - 0.15, MIN_EASE, MAX_EASE);
      reps = Math.max(reps, 1);
      interval = had && interval > 0 ? Math.max(1, round(interval * 1.2)) : 1;
      break;
    case 2:
      reps += 1;
      interval = reps === 1 ? 1 : reps === 2 ? 3 : Math.max(interval + 1, round(interval * ease));
      break;
    case 3:
      reps += 1;
      ease = clamp(ease + 0.1, MIN_EASE, MAX_EASE);
      interval = reps === 1 ? 3 : reps === 2 ? 6 : Math.max(interval + 1, round(interval * ease * 1.3));
      break;
  }
  interval = Math.min(interval, MAX_INTERVAL);

  return {
    ease: Math.round(ease * 100) / 100,
    interval,
    reps,
    lapses,
    due: addDays(today, interval),
    last: grade,
    first: prev?.first ?? today,
    seen: today,
    count: (prev?.count ?? 0) + 1,
  };
}

export function isDue(card: Card, today: DayStr): boolean {
  return diffDays(card.due, today) >= 0; // due <= today
}

/** Zile de întârziere (0 dacă nu e scadent). */
export function overdueDays(card: Card, today: DayStr): number {
  return Math.max(0, diffDays(card.due, today));
}

/**
 * Nota dintr-un răspuns la un item corectat automat:
 * greșit → 0; corect cu efort → 1; corect ușor → 2; corect ușor și deja stăpânit (≥2 repetări) → 3.
 */
export function gradeFromAnswer(opts: { correct: boolean; easy: boolean; prev?: Card }): Grade {
  if (!opts.correct) return 0;
  if (!opts.easy) return 1;
  return (opts.prev?.reps ?? 0) >= 2 ? 3 : 2;
}

/** O măsură simplă a cât de durabil e fixat un item: 0..1 (intervalul de 21 de zile = fixat). */
export function retention(card: Card | undefined): number {
  if (!card) return 0;
  if (card.last === 0) return 0.1;
  return clamp(card.interval / 21, 0.1, 1);
}
