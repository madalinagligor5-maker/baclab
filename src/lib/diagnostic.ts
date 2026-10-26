import type { Chapter, Item } from "./content/types";
import type { Attempt } from "./state";
import { addDays, type DayStr } from "./dates";

export const MIN_CHAPTER_EVIDENCE = 5;
export interface DiagnosticRun {
  id: string;
  startedAt: string;
  finishedAt: string | null;
  itemIds: string[];
  answers: Record<string, number | boolean>;
}

/** Balanced screening, not a calibrated adaptive ability test. No duplicate questions. */
export function diagnosticItems(items: Item[], chapters: Chapter[], perChapter = 2): Item[] {
  const pool = items.filter((i) => i.type === "grila" || i.type === "adevarat_fals");
  const selected: Item[] = [];
  for (let round = 0; round < perChapter; round++) {
    for (const ch of chapters) {
      const candidates = pool.filter((i) => i.chapter === ch.code)
        .sort((a, b) => (a.difficulty ?? 2) - (b.difficulty ?? 2) || a.id.localeCompare(b.id));
      if (candidates[round]) selected.push(candidates[round]);
    }
  }
  return selected;
}

export function isCorrect(item: Item, answer: number | boolean | undefined): boolean {
  return answer !== undefined && (item.type === "grila" ? answer === item.correct : answer === item.truth);
}

/** Use the most recent answer to each distinct question; repeating one item cannot inflate n. */
export function observedChapter(chapter: string, attempts: Attempt[], today: DayStr, currentItemIds?: ReadonlySet<string>) {
  const since = addDays(today, -30);
  const latest = new Map<string, Attempt>();
  for (const a of attempts) {
    if (a.ch !== chapter || typeof a.ok !== "boolean" || a.day < since || a.day > today || (currentItemIds && !currentItemIds.has(a.id))) continue;
    const previous = latest.get(a.id);
    if (!previous || previous.at <= a.at) latest.set(a.id, a);
  }
  const n = latest.size;
  const correct = [...latest.values()].filter((a) => a.ok).length;
  return { n, correct, accuracy: n ? correct / n : null, sufficient: n >= MIN_CHAPTER_EVIDENCE };
}

export function diagnosticWeakChapters(run: DiagnosticRun, items: Item[]): string[] {
  const lookup = new Map(items.map((i) => [i.id, i]));
  const wrong = new Map<string, number>();
  for (const id of run.itemIds) {
    const item = lookup.get(id);
    if (item && !isCorrect(item, run.answers[id])) wrong.set(item.chapter, (wrong.get(item.chapter) ?? 0) + 1);
  }
  return [...wrong].sort((a, b) => b[1] - a[1]).map(([code]) => code).slice(0, 6);
}

export function wrongItems(items: Item[], attempts: Attempt[]): Item[] {
  const last = new Map<string, Attempt>();
  for (const a of attempts) {
    if (typeof a.ok !== "boolean") continue;
    const prev = last.get(a.id);
    if (!prev || prev.at <= a.at) last.set(a.id, a);
  }
  return items.filter((i) => last.get(i.id)?.ok === false)
    .sort((a, b) => (last.get(b.id)?.at ?? "").localeCompare(last.get(a.id)?.at ?? ""));
}
