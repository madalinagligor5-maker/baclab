import { ITEM_TYPES, type Bank, type Item, type ItemType, type Level } from "./types";

/**
 * Normalizator tolerant: banca reală de itemi (out/*.json) poate folosi nume de câmpuri ușor diferite
 * (snake_case, litere în loc de indici etc.). Aici ajung toate la forma `Item`.
 */

type Raw = Record<string, unknown>;

const str = (v: unknown): string | undefined => (typeof v === "string" && v.trim() ? v.trim() : undefined);
const strArr = (v: unknown): string[] | undefined =>
  Array.isArray(v) ? v.map((x) => String(x).trim()).filter(Boolean) : typeof v === "string" && v.trim() ? [v.trim()] : undefined;

function toIndex(v: unknown, n: number): number | undefined {
  if (typeof v === "number" && Number.isInteger(v)) return v >= 0 && v < n ? v : undefined;
  if (typeof v === "string") {
    const s = v.trim().toLowerCase();
    if (/^[a-d]$/.test(s)) return s.charCodeAt(0) - 97;
    if (/^\d+$/.test(s)) {
      const i = Number(s);
      return i >= 0 && i < n ? i : undefined;
    }
  }
  return undefined;
}

function toTruth(v: unknown): boolean | undefined {
  if (typeof v === "boolean") return v;
  if (typeof v === "string") {
    const s = v.trim().toLowerCase();
    if (["a", "adevarat", "adevărat", "true", "da"].includes(s)) return true;
    if (["f", "fals", "false", "nu"].includes(s)) return false;
  }
  return undefined;
}

const LEVELS: Level[] = ["C", "U", "A", "R"];

export function normalizeItem(raw: unknown): { item?: Item; errors: string[] } {
  const errors: string[] = [];
  if (!raw || typeof raw !== "object") return { errors: ["itemul nu este un obiect"] };
  const r = raw as Raw;
  const id = str(r.id);
  if (!id) errors.push("lipsește id");
  const chapter = str(r.chapter ?? r.capitol)?.toUpperCase();
  if (!chapter || !/^[AB]\d{2}$/.test(chapter)) errors.push(`capitol invalid: ${String(r.chapter)}`);
  const type = str(r.type ?? r.tip) as ItemType | undefined;
  if (!type || !ITEM_TYPES.includes(type)) errors.push(`tip invalid: ${String(r.type)}`);
  const q = str(r.q ?? r.question ?? r.enunt);
  if (!q) errors.push("lipsește enunțul (q)");
  if (errors.length || !id || !chapter || !type || !q) return { errors };

  const item: Item = { id, chapter, type, q };
  const slot = str(r.slot ?? r.bac_slot);
  if (slot) item.slot = slot;
  const topic = str(r.topic);
  if (topic) item.topic = topic;
  const explanation = str(r.explanation ?? r.explicatie);
  if (explanation) item.explanation = explanation;
  const source = str(r.source ?? r.sursa);
  if (source) item.source = source;
  const level = str(r.level)?.toUpperCase() as Level | undefined;
  if (level && LEVELS.includes(level)) item.level = level;
  const d = Number(r.difficulty);
  if (d === 1 || d === 2 || d === 3) item.difficulty = d;
  if (typeof r.validated === "boolean") item.validated = r.validated;

  if (type === "grila") {
    const options = strArr(r.options ?? r.variante);
    if (!options || options.length !== 4) errors.push(`${id}: o grilă are nevoie de exact 4 variante`);
    else {
      const correct = toIndex(r.correct ?? r.raspuns, 4);
      if (correct === undefined) errors.push(`${id}: răspuns corect invalid`);
      else {
        item.options = options;
        item.correct = correct;
      }
    }
    const ww = r.wrong_why ?? r.wrongWhy;
    if (Array.isArray(ww)) item.wrongWhy = ww.map((x) => (typeof x === "string" && x.trim() ? x.trim() : null));
  } else if (type === "adevarat_fals") {
    const t = toTruth(r.truth ?? r.correct ?? r.raspuns);
    if (t === undefined) errors.push(`${id}: valoare de adevăr lipsă`);
    else {
      item.truth = t;
      const c = str(r.correction ?? r.corectare);
      if (!t && !c) errors.push(`${id}: afirmație falsă fără corectare`);
      if (c) item.correction = c;
    }
  } else {
    const model = strArr(r.model ?? r.answer ?? r.raspuns_model);
    if (model) item.model = model;
  }

  return errors.length ? { errors } : { item, errors };
}

export function parseBank(json: unknown): { bank: Bank; errors: string[] } {
  const rawItems: unknown[] = Array.isArray(json)
    ? json
    : json && typeof json === "object" && Array.isArray((json as Raw).items)
      ? ((json as Raw).items as unknown[])
      : [];
  const errors: string[] = [];
  const items: Item[] = [];
  const seen = new Set<string>();
  for (const raw of rawItems) {
    const res = normalizeItem(raw);
    if (!res.item) {
      errors.push(...res.errors);
      continue;
    }
    if (seen.has(res.item.id)) {
      errors.push(`${res.item.id}: id duplicat`);
      continue;
    }
    seen.add(res.item.id);
    items.push(res.item);
    errors.push(...res.errors);
  }
  const version = json && typeof json === "object" && !Array.isArray(json) && typeof (json as Raw).version === "number" ? ((json as Raw).version as number) : 1;
  return { bank: { version, items }, errors };
}

export function validateBank(bank: Bank, knownChapters: string[]): string[] {
  const errs: string[] = [];
  for (const it of bank.items) {
    if (!knownChapters.includes(it.chapter)) errs.push(`${it.id}: capitol necunoscut ${it.chapter}`);
    if (it.type === "grila" && it.wrongWhy && it.wrongWhy.length !== 4) errs.push(`${it.id}: wrong_why trebuie să aibă 4 intrări`);
  }
  return errs;
}
