import { OFICIU, NOTA_MIN, type AfPart, type McqPart, type OpenPart, type Paper, type Part } from "./types";

export type Answers = Record<string, string | number>;
export type Grades = Record<string, number>;

export interface PartScore {
  id: string;
  got: number;
  max: number;
}

export interface PaperScore {
  /** puncte obținute, fără oficiu */
  points: number;
  /** puncte maxime, fără oficiu (90) */
  max: number;
  /** punctaj total cu oficiu */
  total: number;
  /** nota finală (total / 10) */
  nota: number;
  passed: boolean;
  parts: PartScore[];
  bySubject: Record<string, { got: number; max: number }>;
  byChapter: Record<string, { got: number; max: number }>;
}

const r2 = (x: number) => Math.round(x * 100) / 100;

export const mcqKey = (part: Pick<Part, "id">, i: number) => `${part.id}.${i}`;
export const afKey = (part: Pick<Part, "id">, i: number) => `${part.id}.${i}`;
export const afTextKey = (part: Pick<Part, "id">, i: number) => `${part.id}.${i}.c`;
export const subKey = (part: Pick<Part, "id">, subId: string) => `${part.id}.${subId}`;

/** Valoarea unei autoevaluări: doar 0, 0.5 sau 1 */
export function clampGrade(g: unknown): number {
  return g === 1 || g === 0.5 ? g : 0;
}

export function mcqPointsEach(part: McqPart): number {
  return part.points / part.items.length;
}

export function scoreMcq(part: McqPart, answers: Answers): { got: number; byItem: number[] } {
  const each = mcqPointsEach(part);
  const byItem = part.items.map((it, i) => (answers[mcqKey(part, i)] === it.correct ? each : 0));
  return { got: byItem.reduce((a, b) => a + b, 0), byItem };
}

/**
 * A/F: pentru o afirmație adevărată, litera corectă aduce tot punctajul.
 * Pentru una falsă, litera F aduce jumătate, iar corectarea (autoevaluată) cealaltă jumătate.
 * Litera greșită → 0.
 */
export function scoreAf(part: AfPart, answers: Answers, grades: Grades): { got: number; byItem: number[] } {
  const byItem = part.items.map((it, i) => {
    const w = part.weights[i] ?? 0;
    const ans = answers[afKey(part, i)]; // "A" | "F"
    const letterOk = it.truth ? ans === "A" : ans === "F";
    if (!letterOk) return 0;
    if (it.truth) return w;
    return w / 2 + (w / 2) * clampGrade(grades[afKey(part, i)]);
  });
  return { got: byItem.reduce((a, b) => a + b, 0), byItem };
}

export function scoreOpen(part: OpenPart, grades: Grades): { got: number; byItem: number[] } {
  const byItem = part.subs.map((s) => s.points * clampGrade(grades[subKey(part, s.id)]));
  return { got: byItem.reduce((a, b) => a + b, 0), byItem };
}

export function scorePaper(paper: Paper, answers: Answers, grades: Grades): PaperScore {
  const parts: PartScore[] = [];
  const bySubject: PaperScore["bySubject"] = {};
  const byChapter: PaperScore["byChapter"] = {};
  const credit = (chs: string[], got: number, max: number) => {
    const list = chs.length ? chs : ["—"];
    for (const c of list) {
      const e = (byChapter[c] ??= { got: 0, max: 0 });
      e.got += got / list.length;
      e.max += max / list.length;
    }
  };

  for (const part of paper.parts) {
    let got = 0;
    if (part.kind === "mcq") {
      const s = scoreMcq(part, answers);
      got = s.got;
      part.items.forEach((it, i) => credit([it.chapter], s.byItem[i] ?? 0, mcqPointsEach(part)));
    } else if (part.kind === "af") {
      const s = scoreAf(part, answers, grades);
      got = s.got;
      part.items.forEach((it, i) => credit([it.chapter], s.byItem[i] ?? 0, part.weights[i] ?? 0));
    } else {
      const s = scoreOpen(part, grades);
      got = s.got;
      part.subs.forEach((sub, i) => credit(sub.chapters, s.byItem[i] ?? 0, sub.points));
    }
    got = r2(got);
    parts.push({ id: part.id, got, max: part.points });
    const subj = (bySubject[part.subject] ??= { got: 0, max: 0 });
    subj.got = r2(subj.got + got);
    subj.max += part.points;
  }

  for (const k of Object.keys(byChapter)) {
    const e = byChapter[k] as { got: number; max: number };
    e.got = r2(e.got);
    e.max = r2(e.max);
  }
  const points = r2(parts.reduce((a, p) => a + p.got, 0));
  const max = parts.reduce((a, p) => a + p.max, 0);
  const total = r2(points + OFICIU);
  const nota = r2(total / 10);
  return { points, max, total, nota, passed: nota >= NOTA_MIN, parts, bySubject, byChapter };
}

/** Capitolele în care s-au pierdut cele mai multe puncte (pentru planul următor). */
export function weakestChapters(score: PaperScore, limit = 4): string[] {
  return Object.entries(score.byChapter)
    .filter(([c, e]) => c !== "—" && e.max > 0)
    .map(([c, e]) => ({ c, lost: e.max - e.got, ratio: e.got / e.max }))
    .filter((x) => x.lost > 0.001)
    .sort((a, b) => b.lost - a.lost || a.ratio - b.ratio)
    .slice(0, limit)
    .map((x) => x.c);
}

/** Verificări de coerență ale unui subiect (folosit la teste și la validarea conținutului). */
export function validatePaper(paper: Paper): string[] {
  const errs: string[] = [];
  let total = 0;
  for (const p of paper.parts) {
    total += p.points;
    if (p.kind === "mcq") {
      for (const [i, it] of p.items.entries()) {
        if (it.options.length !== 4) errs.push(`${p.id}.${i}: trebuie 4 variante`);
        if (!Number.isInteger(it.correct) || it.correct < 0 || it.correct > 3) errs.push(`${p.id}.${i}: index corect invalid`);
        if (new Set(it.options).size !== it.options.length) errs.push(`${p.id}.${i}: variante duplicate`);
      }
    } else if (p.kind === "af") {
      if (p.weights.length !== p.items.length) errs.push(`${p.id}: ponderi != afirmații`);
      const w = p.weights.reduce((a, b) => a + b, 0);
      if (Math.abs(w - p.points) > 1e-9) errs.push(`${p.id}: ponderile (${w}) != punctaj (${p.points})`);
      for (const [i, it] of p.items.entries()) if (!it.truth && !it.correction) errs.push(`${p.id}.${i}: afirmație falsă fără corectare`);
    } else {
      const s = p.subs.reduce((a, b) => a + b.points, 0);
      if (Math.abs(s - p.points) > 1e-9) errs.push(`${p.id}: subcerințele (${s}) != punctaj (${p.points})`);
      const ids = p.subs.map((x) => x.id);
      if (new Set(ids).size !== ids.length) errs.push(`${p.id}: id-uri de subcerințe duplicate`);
    }
  }
  if (total !== 90) errs.push(`total ${total} != 90 de puncte (fără oficiu)`);
  return errs;
}
