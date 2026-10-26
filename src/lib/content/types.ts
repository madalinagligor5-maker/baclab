/**
 * Tipurile de conținut. Schema itemilor urmează documentația din materiale/README.md
 * (id, chapter, type, bac_slot, topic, q, options, correct, explanation, wrong_why, level, difficulty, source).
 */

export type ModuleId = "A" | "B";

export type ItemType =
  | "grila"
  | "adevarat_fals"
  | "completare"
  | "exemple_caracteristica"
  | "structurat"
  | "enunturi"
  | "minieseu"
  | "problema_calcul"
  | "problema_genetica";

export const ITEM_TYPES: ItemType[] = [
  "grila",
  "adevarat_fals",
  "completare",
  "exemple_caracteristica",
  "structurat",
  "enunturi",
  "minieseu",
  "problema_calcul",
  "problema_genetica",
];

/** Tipurile care se corectează automat. Restul se autoevaluează pe baza răspunsului model. */
export const AUTO_GRADED: ItemType[] = ["grila", "adevarat_fals"];

export const TYPE_LABEL: Record<ItemType, string> = {
  grila: "Grilă",
  adevarat_fals: "Adevărat / Fals",
  completare: "Completare",
  exemple_caracteristica: "Exemple și caracteristici",
  structurat: "Item structurat",
  enunturi: "Construire de enunțuri",
  minieseu: "Minieseu",
  problema_calcul: "Problemă de calcul",
  problema_genetica: "Problemă de genetică",
};

/** C = cunoaștere, U = înțelegere, A = aplicare, R = raționament */
export type Level = "C" | "U" | "A" | "R";

export interface Item {
  id: string;
  /** Codul capitolului, ex. "A12" */
  chapter: string;
  type: ItemType;
  /** Locul în subiectul de Bac, ex. "I.C", "II.B" */
  slot?: string;
  topic?: string;
  q: string;
  /** grila: exact 4 variante */
  options?: string[];
  /** grila: indexul variantei corecte (0–3) */
  correct?: number;
  /** adevarat_fals: valoarea de adevăr a afirmației */
  truth?: boolean;
  /** adevarat_fals: afirmația corectată (când truth = false), fără negație */
  correction?: string;
  /** tipuri autoevaluate: liniile răspunsului model */
  model?: string[];
  explanation?: string;
  /** grila: explicația confuziei din spatele fiecărei variante greșite (null la cea corectă) */
  wrongWhy?: (string | null)[];
  level?: Level;
  difficulty?: 1 | 2 | 3;
  source?: string;
  /** a fost verificat de un specialist? */
  validated?: boolean;
}

export interface Bank {
  version: number;
  items: Item[];
}

export interface Chapter {
  code: string; // "A01"
  slug: string; // "a01"
  module: ModuleId;
  title: string;
  short: string;
  group: string;
  clasa: "IX" | "X";
  /** Locurile din subiectul de Bac în care apare capitolul */
  slots: string[];
  ideas: string[];
  prereq: string[];
  concepts: string[];
}

export interface PlannedChapter {
  code: string;
  title: string;
  note?: string;
}
