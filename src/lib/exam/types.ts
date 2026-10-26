/**
 * Modelul unui subiect de Bac (proba E.d). Structura urmează materiale/format_proba.md:
 * Subiectul I (30 p) A 4 + B 6 + C 10 + D 10; II (30 p) A 18 + B 12; III (30 p) 1 → 14 + 2 → 16.
 * 90 de puncte + 10 din oficiu = 100; nota = total / 10; promovare de la 5.
 *
 * Baremul oficial nu a fost furnizat: distribuția punctelor în interiorul unei cerințe este orientativă.
 */

export interface McqQuestion {
  q: string;
  options: string[];
  correct: number;
  chapter: string;
  explanation?: string;
}

export interface AfStatement {
  q: string;
  truth: boolean;
  /** pentru afirmațiile false: varianta corectată, fără negație */
  correction?: string;
  chapter: string;
  explanation?: string;
}

/** Calcul în lanț cu procente (II.A.c) */
export interface ChainSpec {
  mass: string;
  unit: string;
  steps: { label: string; pct: string; /** din ce se calculează: "masa corpului" */ of?: string }[];
  /** ce se cere: "masa apei din plasma sângelui" */
  asks: string;
}

export interface OpenSub {
  id: string;
  prompt: string;
  points: number;
  chapters: string[];
  /** răspunsul model (liniile pe care le poate bifa elevul) */
  model: string[];
  chain?: ChainSpec;
}

interface PartBase {
  /** "I.A", "II.B", "III.1" … */
  id: string;
  subject: "I" | "II" | "III";
  title: string;
  points: number;
  intro?: string;
}

export interface McqPart extends PartBase {
  kind: "mcq";
  items: McqQuestion[];
}

export interface AfPart extends PartBase {
  kind: "af";
  /** punctajul fiecărei afirmații (suma = points) */
  weights: number[];
  items: AfStatement[];
}

export interface OpenPart extends PartBase {
  kind: "open";
  subs: OpenSub[];
}

export type Part = McqPart | AfPart | OpenPart;

export interface Paper {
  id: string;
  title: string;
  year: number;
  kind: "oficial" | "generat";
  durationMin: number;
  note?: string;
  parts: Part[];
}

export interface PaperIndexEntry {
  id: string;
  title: string;
  year: number;
  kind: "oficial" | "generat";
  durationMin: number;
  file: string;
}

export const OFICIU = 10;
export const NOTA_MIN = 5;
