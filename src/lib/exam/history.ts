import { addDays, type DayStr } from "../dates";
import type { SimRun } from "../state";

/** Descriptive training range, never a validated prediction or confidence interval. */
export function trainingRange(runs: SimRun[], today: DayStr) {
  const since = addDays(today, -45);
  const unique = new Map<string, SimRun>();
  for (const run of [...runs].sort((a, b) => a.finishedAt.localeCompare(b.finishedAt))) {
    const day = run.finishedAt.slice(0, 10);
    if (run.rubricVerified !== true || run.timed !== true || day < since || day > today || !Number.isFinite(run.nota) || run.nota < 1 || run.nota > 10) continue;
    unique.set(run.paperId, run);
  }
  const recent = [...unique.values()].slice(-5);
  if (recent.length < 3) return { range: null, count: recent.length };
  const notes = recent.map((r) => r.nota);
  return { range: { low: Math.min(...notes), high: Math.max(...notes) }, count: recent.length };
}
