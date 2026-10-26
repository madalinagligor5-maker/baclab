/** Zile calendaristice ca șiruri "YYYY-MM-DD" (fusul orar local al dispozitivului). */
export type DayStr = string;

const pad = (n: number) => String(n).padStart(2, "0");

export function toDayStr(d: Date): DayStr {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

export function todayStr(now: Date = new Date()): DayStr {
  return toDayStr(now);
}

/** Numărul de zile de la 1970-01-01 (întreg, independent de fusul orar). */
export function dayNumber(s: DayStr): number {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s);
  if (!m) throw new Error(`Zi invalidă: ${s}`);
  return Math.round(Date.UTC(Number(m[1]), Number(m[2]) - 1, Number(m[3])) / 86_400_000);
}

export function fromDayNumber(n: number): DayStr {
  const d = new Date(n * 86_400_000);
  return `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}`;
}

export function addDays(s: DayStr, n: number): DayStr {
  return fromDayNumber(dayNumber(s) + n);
}

/** Zile de la `a` până la `b` (pozitiv dacă b e după a). */
export function diffDays(a: DayStr, b: DayStr): number {
  return dayNumber(b) - dayNumber(a);
}

export function isDayStr(s: unknown): s is DayStr {
  return typeof s === "string" && /^\d{4}-\d{2}-\d{2}$/.test(s) && fromDayNumber(dayNumber(s)) === s;
}

const MONTHS = ["ian.", "feb.", "mar.", "apr.", "mai", "iun.", "iul.", "aug.", "sep.", "oct.", "nov.", "dec."];
/** "6 oct. 2026" */
export function formatDayRo(s: DayStr): string {
  const [y, m, d] = s.split("-").map(Number);
  return `${d} ${MONTHS[(m ?? 1) - 1]} ${y}`;
}
