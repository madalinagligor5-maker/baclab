import { PRODUCT } from "../config/product";
import type { Chapter, Item, ItemType } from "./content/types";
import { chapterStats, itemsByChapter } from "./mastery";
import { diffDays, type DayStr } from "./dates";
import { isDue, overdueDays, type Card } from "./srs";
import { makeRng } from "./rng";
import type { Attempt, Profile, SimRun } from "./state";

/** Tipurile care se rezolvă repede, potrivite pentru sesiunile zilnice. */
export const QUICK_TYPES: ItemType[] = ["grila", "adevarat_fals", "completare", "exemple_caracteristica"];
const isQuick = (it: Item) => QUICK_TYPES.includes(it.type);

export interface Plan {
  /** itemi de recapitulat (repetiție spațiată) */
  reviews: Item[];
  /** itemi noi */
  fresh: Item[];
  budget: number;
  minutes: number;
  /** capitolul în care se învață lucruri noi azi */
  focusChapter: string | null;
  /** capitolul cu cele mai slabe rezultate recente */
  weakChapter: string | null;
  /** zile până la examen */
  examDays: number | null;
  suggestSim: boolean;
}

export interface PlanInput {
  items: Item[];
  chapters: Chapter[];
  cards: Record<string, Card>;
  attempts: Attempt[];
  sims: SimRun[];
  profile: Pick<Profile, "minutes" | "examDate">;
  focus: string[];
  today: DayStr;
}

export function budgetFor(minutes: number): number {
  return Math.max(5, Math.round((minutes * 60) / PRODUCT.secondsPerItem));
}

/** Un capitol e „deschis” când prerechizitele lui au fost parcurse măcar pe jumătate (sau n-au itemi). */
function unlocked(ch: Chapter, stats: ReturnType<typeof chapterStats>): boolean {
  return ch.prereq.every((p) => {
    const s = stats[p];
    return !s || s.total === 0 || s.seen / s.total >= 0.5;
  });
}

export function buildPlan(input: PlanInput): Plan {
  const { items, chapters, cards, attempts, sims, profile, focus, today } = input;
  const quick = items.filter(isQuick);
  const budget = budgetFor(profile.minutes);
  const stats = chapterStats(chapters, items, cards, attempts, today);
  const byChapter = itemsByChapter(quick);

  // 1. Recapitulări scadente: cele mai întârziate întâi
  const due = quick
    .filter((it) => cards[it.id] && isDue(cards[it.id] as Card, today))
    .sort((a, b) => {
      const ca = cards[a.id] as Card;
      const cb = cards[b.id] as Card;
      return overdueDays(cb, today) - overdueDays(ca, today) || cb.lapses - ca.lapses || a.id.localeCompare(b.id);
    });

  const unseenIn = (code: string) =>
    (byChapter[code] ?? [])
      .filter((it) => !cards[it.id])
      .sort((a, b) => (a.difficulty ?? 2) - (b.difficulty ?? 2) || a.id.localeCompare(b.id));

  // 2. Capitolul slab (acuratețe mică în ultimele 30 de zile)
  let weakChapter: string | null = null;
  let worst = 0.7;
  for (const ch of chapters) {
    const s = stats[ch.code];
    if (s && s.accuracy !== null && s.accuracy < worst) {
      worst = s.accuracy;
      weakChapter = ch.code;
    }
  }

  // 3. Ordinea capitolelor pentru conținut nou: accentele din simulări, apoi ordinea programei
  const order = [...focus.filter((c) => chapters.some((x) => x.code === c)), ...chapters.map((c) => c.code)];
  const seenOrder = new Set<string>();
  const eligible: string[] = [];
  for (const code of order) {
    if (seenOrder.has(code)) continue;
    seenOrder.add(code);
    const ch = chapters.find((c) => c.code === code);
    if (ch && unseenIn(code).length > 0 && (focus.includes(code) || unlocked(ch, stats))) eligible.push(code);
  }

  const reviewCap = eligible.length > 0 ? Math.ceil(budget * 0.6) : budget;
  const reviews = due.slice(0, reviewCap);

  const freshWanted = Math.max(0, budget - reviews.length);
  const fresh: Item[] = [];
  const taken = new Set<string>();
  const add = (it: Item) => {
    if (fresh.length < freshWanted && !taken.has(it.id)) {
      taken.add(it.id);
      fresh.push(it);
    }
  };
  if (weakChapter) {
    const weakQuota = Math.floor(freshWanted * 0.2);
    for (const it of unseenIn(weakChapter).slice(0, weakQuota)) add(it);
  }
  for (const code of eligible) for (const it of unseenIn(code)) add(it);

  const examDays = profile.examDate ? diffDays(today, profile.examDate) : null;
  const lastSim = sims.length ? (sims[sims.length - 1] as SimRun).finishedAt.slice(0, 10) : null;
  const sinceSim = lastSim ? diffDays(lastSim, today) : null;
  const suggestSim =
    (examDays !== null && examDays >= 0 && examDays <= 45 && (sinceSim === null || sinceSim >= 14)) ||
    (sinceSim === null && attempts.length >= 60);

  return {
    reviews,
    fresh,
    budget,
    minutes: profile.minutes,
    focusChapter: fresh.length > 0 ? (fresh[0] as Item).chapter : null,
    weakChapter,
    examDays,
    suggestSim,
  };
}

/** Sesiune pe un capitol: scadentele, apoi noile, apoi restul (cele mai vechi văzute). */
export function buildChapterSession(code: string, items: Item[], cards: Record<string, Card>, today: DayStr, limit = 15): Item[] {
  const list = items.filter((it) => it.chapter === code && isQuick(it));
  const due = list.filter((it) => cards[it.id] && isDue(cards[it.id] as Card, today));
  const fresh = list
    .filter((it) => !cards[it.id])
    .sort((a, b) => (a.difficulty ?? 2) - (b.difficulty ?? 2) || a.id.localeCompare(b.id));
  const rest = list
    .filter((it) => cards[it.id] && !isDue(cards[it.id] as Card, today))
    .sort((a, b) => (cards[a.id] as Card).due.localeCompare((cards[b.id] as Card).due));
  return [...due, ...fresh, ...rest].slice(0, limit);
}

/** Sesiune mixtă: 5 grile + 3 afirmații A/F (ca Subiectul I.C și I.D), din capitole diferite, determinist pe zi. */
export function buildMixedSession(items: Item[], today: DayStr, seed = ""): Item[] {
  const rng = makeRng(`${today}:${seed}`);
  const pickFrom = (type: ItemType, n: number) => {
    const pool = rng.shuffle(items.filter((it) => it.type === type));
    const out: Item[] = [];
    const usedCh = new Set<string>();
    for (const it of pool) {
      if (out.length >= n) break;
      if (!usedCh.has(it.chapter)) {
        usedCh.add(it.chapter);
        out.push(it);
      }
    }
    for (const it of pool) {
      if (out.length >= n) break;
      if (!out.includes(it)) out.push(it);
    }
    return out;
  };
  return [...pickFrom("grila", 5), ...pickFrom("adevarat_fals", 3)];
}

/** Recapitulare: toate itemurile scadente azi (cele mai întârziate întâi), cu plafon. */
export function buildReviewSession(items: Item[], cards: Record<string, Card>, today: DayStr, limit = 30): Item[] {
  return items
    .filter(isQuick)
    .filter((it) => cards[it.id] && isDue(cards[it.id] as Card, today))
    .sort((a, b) => overdueDays(cards[b.id] as Card, today) - overdueDays(cards[a.id] as Card, today) || a.id.localeCompare(b.id))
    .slice(0, limit);
}
