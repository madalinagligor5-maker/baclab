import type { Chapter, Item } from "./content/types";
import type { Card } from "./srs";
import { retention } from "./srs";
import type { Attempt } from "./state";
import { addDays, type DayStr } from "./dates";

export interface ChapterStats {
  code: string;
  total: number;
  seen: number;
  /** cât din capitol e fixat durabil: 0..1 */
  mastery: number;
  /** acuratețea din ultimele 30 de zile (doar itemi corectați automat), sau null dacă sunt prea puține răspunsuri */
  accuracy: number | null;
  attempts30: number;
  due: number;
}

export function itemsByChapter(items: Item[]): Record<string, Item[]> {
  const out: Record<string, Item[]> = {};
  for (const it of items) (out[it.chapter] ??= []).push(it);
  return out;
}

export function chapterStats(
  chapters: Chapter[],
  items: Item[],
  cards: Record<string, Card>,
  attempts: Attempt[],
  today: DayStr,
): Record<string, ChapterStats> {
  const by = itemsByChapter(items);
  const since = addDays(today, -30);
  const out: Record<string, ChapterStats> = {};
  for (const ch of chapters) {
    const list = by[ch.code] ?? [];
    let seen = 0;
    let sum = 0;
    let due = 0;
    for (const it of list) {
      const c = cards[it.id];
      if (c) {
        seen++;
        sum += retention(c);
        if (c.due <= today) due++;
      }
    }
    let ok = 0;
    let n = 0;
    for (const a of attempts) {
      if (a.ch !== ch.code || a.ok === null || a.day < since) continue;
      n++;
      if (a.ok) ok++;
    }
    out[ch.code] = {
      code: ch.code,
      total: list.length,
      seen,
      mastery: list.length ? sum / list.length : 0,
      accuracy: n >= 5 ? ok / n : null,
      attempts30: n,
      due,
    };
  }
  return out;
}
