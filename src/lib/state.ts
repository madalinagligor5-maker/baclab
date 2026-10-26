import { addDays, diffDays, isDayStr, toDayStr, type DayStr } from "./dates";
import { review, type Card, type Grade } from "./srs";
import type { Item, ItemType } from "./content/types";

/** Starea aplicației (se păstrează local, pe dispozitiv; sincronizarea cu un cont vine în Faza 2). */

export interface Profile {
  module: "A";
  /** Data examenului, dacă o știe elevul */
  examDate: DayStr | null;
  /** Minute de învățat pe zi */
  minutes: number;
  createdAt: DayStr;
}

export interface Attempt {
  /** id-ul itemului */
  id: string;
  /** codul capitolului */
  ch: string;
  type: ItemType;
  /** corect? (null la itemii autoevaluați) */
  ok: boolean | null;
  g: Grade;
  at: string; // ISO
  day: DayStr;
}

export interface SimRun {
  runId: string;
  paperId: string;
  title: string;
  startedAt: string;
  finishedAt: string;
  points: number;
  max: number;
  /** nota (cu cele 10 puncte din oficiu) */
  nota: number;
  passed: boolean;
  bySubject: Record<string, { got: number; max: number }>;
  byChapter: Record<string, { got: number; max: number }>;
}

export interface ActiveSim {
  paperId: string;
  startedAt: string;
  phase: "run" | "grade";
  /** răspunsurile elevului, pe chei de forma "I.C.0" / "II.A.a" */
  answers: Record<string, string | number>;
  /** autoevaluări: 0, 0.5 sau 1 */
  grades: Record<string, number>;
}

export interface AppState {
  v: 1;
  profile: Profile | null;
  cards: Record<string, Card>;
  attempts: Attempt[];
  sims: SimRun[];
  activeSim: ActiveSim | null;
  /** capitole de accentuat în plan (din rezultatele simulărilor) */
  focus: string[];
  /** contor pentru problemele generate din Laborator, pe zi */
  lab: { day: DayStr; count: number };
}

export const MAX_ATTEMPTS = 3000;

export function emptyState(): AppState {
  return { v: 1, profile: null, cards: {}, attempts: [], sims: [], activeSim: null, focus: [], lab: { day: "1970-01-01", count: 0 } };
}

const isObj = (x: unknown): x is Record<string, unknown> => typeof x === "object" && x !== null && !Array.isArray(x);

/** Citește în siguranță o stare salvată (posibil coruptă sau de la o versiune mai veche). */
export function migrate(raw: unknown): AppState {
  const base = emptyState();
  if (!isObj(raw)) return base;
  const s = { ...base };
  if (isObj(raw.profile)) {
    const p = raw.profile;
    const minutes = typeof p.minutes === "number" && p.minutes > 0 && p.minutes <= 240 ? Math.round(p.minutes) : 20;
    s.profile = {
      module: "A",
      examDate: isDayStr(p.examDate) ? p.examDate : null,
      minutes,
      createdAt: isDayStr(p.createdAt) ? p.createdAt : toDayStr(new Date()),
    };
  }
  if (isObj(raw.cards)) {
    for (const [id, c] of Object.entries(raw.cards)) {
      if (!isObj(c)) continue;
      if (typeof c.ease !== "number" || typeof c.interval !== "number" || !isDayStr(c.due)) continue;
      s.cards[id] = {
        ease: c.ease,
        interval: c.interval,
        reps: typeof c.reps === "number" ? c.reps : 0,
        lapses: typeof c.lapses === "number" ? c.lapses : 0,
        due: c.due,
        last: ([0, 1, 2, 3] as number[]).includes(c.last as number) ? (c.last as Grade) : 0,
        first: isDayStr(c.first) ? c.first : c.due,
        seen: isDayStr(c.seen) ? c.seen : c.due,
        count: typeof c.count === "number" ? c.count : 1,
      };
    }
  }
  if (Array.isArray(raw.attempts)) {
    s.attempts = (raw.attempts as unknown[])
      .filter((a): a is Attempt => isObj(a) && typeof a.id === "string" && typeof a.ch === "string" && isDayStr(a.day))
      .slice(-MAX_ATTEMPTS);
  }
  if (Array.isArray(raw.sims)) {
    s.sims = (raw.sims as unknown[]).filter(
      (r): r is SimRun => isObj(r) && typeof r.runId === "string" && typeof r.nota === "number" && typeof r.paperId === "string",
    );
  }
  if (isObj(raw.activeSim) && typeof raw.activeSim.paperId === "string" && typeof raw.activeSim.startedAt === "string") {
    const a = raw.activeSim;
    s.activeSim = {
      paperId: a.paperId as string,
      startedAt: a.startedAt as string,
      phase: a.phase === "grade" ? "grade" : "run",
      answers: isObj(a.answers) ? (a.answers as Record<string, string | number>) : {},
      grades: isObj(a.grades) ? (a.grades as Record<string, number>) : {},
    };
  }
  if (Array.isArray(raw.focus)) s.focus = (raw.focus as unknown[]).filter((x): x is string => typeof x === "string").slice(0, 6);
  if (isObj(raw.lab) && isDayStr(raw.lab.day) && typeof raw.lab.count === "number") s.lab = { day: raw.lab.day, count: raw.lab.count };
  return s;
}

export function setProfile(state: AppState, profile: Profile): AppState {
  return { ...state, profile };
}

/** Înregistrează un răspuns: actualizează cardul de repetiție și istoricul. */
export function recordAnswer(
  state: AppState,
  input: { item: Pick<Item, "id" | "chapter" | "type">; ok: boolean | null; grade: Grade; now: Date },
): AppState {
  const day = toDayStr(input.now);
  const card = review(state.cards[input.item.id], input.grade, day);
  const attempt: Attempt = {
    id: input.item.id,
    ch: input.item.chapter,
    type: input.item.type,
    ok: input.ok,
    g: input.grade,
    at: input.now.toISOString(),
    day,
  };
  const attempts = [...state.attempts, attempt];
  return {
    ...state,
    cards: { ...state.cards, [input.item.id]: card },
    attempts: attempts.length > MAX_ATTEMPTS ? attempts.slice(attempts.length - MAX_ATTEMPTS) : attempts,
  };
}

export function startSim(state: AppState, paperId: string, now: Date): AppState {
  return { ...state, activeSim: { paperId, startedAt: now.toISOString(), phase: "run", answers: {}, grades: {} } };
}

export function updateSim(state: AppState, patch: (s: ActiveSim) => ActiveSim): AppState {
  if (!state.activeSim) return state;
  return { ...state, activeSim: patch(state.activeSim) };
}

export function finishSim(state: AppState, run: SimRun, focus: string[]): AppState {
  return { ...state, sims: [...state.sims, run], activeSim: null, focus: focus.slice(0, 6) };
}

export function bumpLab(state: AppState, today: DayStr): AppState {
  const count = state.lab.day === today ? state.lab.count + 1 : 1;
  return { ...state, lab: { day: today, count } };
}

export function labCountToday(state: AppState, today: DayStr): number {
  return state.lab.day === today ? state.lab.count : 0;
}

export interface Streak {
  current: number;
  longest: number;
  activeToday: boolean;
}

/** Seria de zile consecutive cu activitate. Seria curentă rămâne vie și dacă azi nu ai început încă. */
export function computeStreak(state: Pick<AppState, "attempts" | "sims">, today: DayStr): Streak {
  const days = new Set<DayStr>();
  for (const a of state.attempts) days.add(a.day);
  for (const r of state.sims) days.add(r.finishedAt.slice(0, 10));
  const activeToday = days.has(today);
  let current = 0;
  let cursor = activeToday ? today : addDays(today, -1);
  while (days.has(cursor)) {
    current++;
    cursor = addDays(cursor, -1);
  }
  const sorted = [...days].sort();
  let longest = 0;
  let run = 0;
  let prev: DayStr | null = null;
  for (const d of sorted) {
    run = prev !== null && diffDays(prev, d) === 1 ? run + 1 : 1;
    if (run > longest) longest = run;
    prev = d;
  }
  return { current, longest: Math.max(longest, current), activeToday };
}

export function attemptsOn(state: Pick<AppState, "attempts">, day: DayStr): number {
  let n = 0;
  for (const a of state.attempts) if (a.day === day) n++;
  return n;
}

export function exportState(state: AppState): string {
  return JSON.stringify({ app: "baclab", exportedAt: new Date().toISOString(), state }, null, 2);
}

/** Importă o copie de rezervă; întoarce null dacă fișierul nu e valid. */
export function importState(text: string): AppState | null {
  try {
    const data: unknown = JSON.parse(text);
    if (!isObj(data) || data.app !== "baclab") return null;
    return migrate(data.state);
  } catch {
    return null;
  }
}
