import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { CHAPTERS_A } from "../src/content/chapters";
import { SYLLABUS_A } from "../src/content/syllabus";
import { diagnosticItems, diagnosticWeakChapters, observedChapter, wrongItems } from "../src/lib/diagnostic";
import { emptyState, migrate, recordAnswer, type SimRun } from "../src/lib/state";
import { parseBank } from "../src/lib/content/normalize";
import { buildPlan } from "../src/lib/plan";
import { review, retention } from "../src/lib/srs";
import { trainingRange } from "../src/lib/exam/history";
import { afKey, criterionKey, mcqKey, scorePaper, validatePaper } from "../src/lib/exam/scoring";
import type { Paper } from "../src/lib/exam/types";

const items = parseBank(JSON.parse(readFileSync("public/content/bank.json", "utf8"))).bank.items;
const now = new Date("2026-10-26T10:00:00Z");
test("diagnostic: every chapter, no duplicate; existing small bank is not disguised", () => {
  const selected = diagnosticItems(items, CHAPTERS_A, 1);
  assert.equal(selected.length, 23);
  assert.equal(new Set(selected.map((i) => i.chapter)).size, 23);
  assert.equal(new Set(diagnosticItems(items, CHAPTERS_A, 3).map((i) => i.id)).size, diagnosticItems(items, CHAPTERS_A, 3).length);
  assert.equal(diagnosticItems(items, CHAPTERS_A, 3).length, 23 * 3);
  assert.deepEqual(Object.keys(SYLLABUS_A).sort(), CHAPTERS_A.map((c) => c.code).sort());
});
test("statistics: fifty repeats of one question are one observation; later success clears the error", () => {
  let state = emptyState();
  for (let i = 0; i < 50; i++) state = recordAnswer(state, { item: items[0]!, ok: false, grade: 0, now });
  assert.deepEqual(observedChapter(items[0]!.chapter, state.attempts, "2026-10-26"), { n: 1, correct: 0, accuracy: 0, sufficient: false });
  assert.equal(wrongItems(items, state.attempts).length, 1);
  state = recordAnswer(state, { item: items[0]!, ok: true, grade: 2, now: new Date(now.getTime() + 1000) });
  assert.equal(wrongItems(items, state.attempts).length, 0);
  assert.equal(observedChapter(items[0]!.chapter, state.attempts, "2026-12-01").accuracy, null);
});
test("diagnostic: wrong chapters feed priority; persisted false answers survive migration", () => {
  const item = items.find((i) => i.type === "adevarat_fals")!;
  const run = { id: "test", startedAt: now.toISOString(), finishedAt: null, itemIds: [item.id], answers: { [item.id]: !item.truth } };
  assert.deepEqual(diagnosticWeakChapters(run, items), [item.chapter]);
  assert.deepEqual(migrate({ diagnostic: run }).diagnostic, run);
  assert.equal(migrate({}).diagnostic, null);
});
test("daily plan: actual question count determines duration, bounded by available budget", () => {
  const state = emptyState();
  const plan = buildPlan({ ...state, items, chapters: CHAPTERS_A, profile: { minutes: 20, examDate: null }, today: "2026-10-26" });
  assert.equal(plan.availableMinutes, 20);
  assert.ok(plan.minutes > 0 && plan.minutes <= plan.availableMinutes);
  assert.equal(plan.minutes, Math.ceil((plan.reviews.length + plan.fresh.length) * 45 / 60));
  assert.ok(plan.fresh.length > 5);
});
test("spaced review: forgotten overdue item loses estimated fixation", () => {
  let c = review(undefined, 3, "2026-08-01");
  for (let i = 0; i < 4; i++) c = review(c, 3, c.due);
  assert.ok(retention(c, "2028-01-01") < retention(c, c.seen));
});
const paper = JSON.parse(readFileSync("public/content/exams/bac-2026-simulare.json", "utf8")) as Paper;
test("official 2026 rubric: 90 + 10; actual part weights and all discrete criteria", () => {
  assert.deepEqual(validatePaper(paper), []);
  const answers: Record<string, string | number> = {};
  const grades: Record<string, number> = {};
  for (const p of paper.parts) {
    if (p.kind === "mcq") p.items.forEach((it, i) => { answers[mcqKey(p, i)] = it.correct; });
    if (p.kind === "af") p.items.forEach((it, i) => { answers[afKey(p, i)] = it.truth ? "A" : "F"; grades[afKey(p, i)] = 1; });
    if (p.kind === "open") p.subs.forEach((s) => s.rubric!.forEach((c) => { grades[criterionKey(p, s.id, c.id)] = c.points; }));
  }
  assert.equal(scorePaper(paper, answers, grades).nota, 10);
  assert.equal(scorePaper(paper, {}, {}).nota, 1);
  assert.deepEqual(paper.parts.find((p) => p.id === "I.D")?.kind, "af");
  const ii = paper.parts.find((p) => p.id === "II.A")!;
  assert.ok(ii.kind === "open");
  assert.deepEqual(ii.subs.map((s) => s.points), [5, 3, 6, 4]);
  const genetics = paper.parts.find((p) => p.id === "II.B")!;
  assert.ok(genetics.kind === "open");
  assert.deepEqual(genetics.subs.map((s) => s.points), [2, 2, 4, 4]);
  for (const p of paper.parts) if (p.kind === "open") for (const s of p.subs) for (const c of s.rubric!) {
    // A criterion is isolated; disallowed fractional/infinite grades are never credited.
    assert.equal(scorePaper(paper, {}, { [criterionKey(p, s.id, c.id)]: 0.5 }).points, 0);
    assert.equal(scorePaper(paper, {}, { [criterionKey(p, s.id, c.id)]: Infinity }).points, 0);
  }
});
test("official A/F: two marks per letter and two per correct reformulation", () => {
  const af = paper.parts.find((p) => p.id === "I.D")!;
  assert.ok(af.kind === "af");
  assert.deepEqual(af.weights, [4, 4, 2]);
  const answers = { [afKey(af, 0)]: "F", [afKey(af, 1)]: "F", [afKey(af, 2)]: "A" };
  assert.equal(scorePaper(paper, answers, {}).points, 6);
  assert.equal(scorePaper(paper, answers, { [afKey(af, 0)]: 0.5 }).points, 6);
});
test("grade reference rejects repeated papers, stale results, and unverified rubrics", () => {
  const sample = (paperId: string, nota: number): SimRun => ({ runId: paperId, paperId, title: paperId, startedAt: now.toISOString(), finishedAt: now.toISOString(), points: nota * 10 - 10, max: 90, nota, passed: true, bySubject: {}, byChapter: {}, timed: true, rubricVerified: true });
  assert.equal(trainingRange([sample("a", 7), sample("a", 8), sample("a", 9)], "2026-10-26").range, null);
  assert.deepEqual(trainingRange([sample("a", 6), sample("b", 7), sample("c", 8)], "2026-10-26").range, { low: 6, high: 8 });
  assert.equal(trainingRange([sample("a", 6), sample("b", 7), { ...sample("c", 8), rubricVerified: false }], "2026-10-26").range, null);
  assert.equal(trainingRange([sample("a", 6), sample("b", 7), sample("c", 8)], "2027-01-01").range, null);
});
