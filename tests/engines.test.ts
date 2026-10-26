import test from "node:test";
import assert from "node:assert/strict";
import { review, isDue, gradeFromAnswer } from "../src/lib/srs";
import { addDays, diffDays } from "../src/lib/dates";
import { makeRng } from "../src/lib/rng";
import { parseDecimal, fmt, pctOf } from "../src/lib/frac";
import { solveChain, checkNumeric, generateChain } from "../src/lib/lab/chain";
import { cross, gametes, normalizeGenotype } from "../src/lib/lab/genetics";
import { generateGenetics } from "../src/lib/lab/problems";
import { normalizeItem, parseBank } from "../src/lib/content/normalize";
import { canOpenChapter } from "../src/lib/access";
import { scorePaper, validatePaper } from "../src/lib/exam/scoring";
import type { Paper } from "../src/lib/exam/types";

test("dates", () => {
  assert.equal(addDays("2026-10-26", 6), "2026-11-01");
  assert.equal(diffDays("2026-10-26", "2026-11-01"), 6);
});

test("rng determinist", () => {
  assert.deepEqual([makeRng("x").int(1, 99), makeRng("x").int(1, 99)].length, 2);
  assert.equal(makeRng("x").int(1, 1000), makeRng("x").int(1, 1000));
});

test("srs: intervale cresc, greșeala resetează", () => {
  const t = "2026-10-26";
  let c = review(undefined, 2, t);
  assert.equal(c.interval, 1);
  c = review(c, 2, c.due);
  assert.equal(c.interval, 3);
  c = review(c, 2, c.due);
  assert.ok(c.interval >= 7);
  const bad = review(c, 0, c.due);
  assert.equal(bad.interval, 1);
  assert.equal(bad.lapses, 1);
  assert.ok(isDue(bad, addDays(c.due, 1)));
  assert.ok([0, 1, 2, 3].includes(gradeFromAnswer({ correct: true, easy: true, prev: undefined })));
});

test("frac: 7% din 60 kg, apoi 55%, apoi 90%", () => {
  const sol = solveChain({ mass: "60", unit: "kg", steps: [{ label: "sânge", pct: "7" }, { label: "plasmă", pct: "55" }, { label: "apă", pct: "90" }] });
  assert.equal(fmt(sol.steps[0]!.after), "4,2");
  assert.equal(fmt(sol.steps[1]!.after), "2,31");
  assert.equal(fmt(sol.final), "2,079");
  assert.ok(checkNumeric("2,08 kg", sol.final));
  assert.ok(!checkNumeric("2,5", sol.final));
  assert.equal(fmt(pctOf(parseDecimal("50")!, parseDecimal("12.5")!)), "6,25");
});

test("chain generator determinist", () => {
  const a = generateChain(7), b = generateChain(7);
  assert.deepEqual(a.statement, b.statement);
  assert.ok(a.solution.steps.length >= 1);
});

test("genetică: monohibrid, dihibrid, test", () => {
  assert.deepEqual(gametes("AaBb"), ["AB", "Ab", "aB", "ab"]);
  assert.equal(normalizeGenotype("aA"), "Aa");
  assert.equal(cross("Aa", "Aa").ratioPheno, "3:1");
  assert.equal(cross("Aa", "Aa").ratioGeno, "1:2:1");
  assert.equal(cross("Aa", "aa").ratioPheno, "1:1");
  const f2 = cross("AaBb", "AaBb");
  assert.equal(f2.total, 16);
  assert.equal(f2.ratioPheno, "9:3:3:1");
  assert.equal(cross("AaBb", "aabb").ratioPheno, "1:1:1:1");
});

test("probleme de genetică: răspunsurile numerice sunt coerente", () => {
  for (const kind of ["mono", "di-f2", "di-test"] as const) {
    for (let s = 1; s <= 25; s++) {
      const p = generateGenetics(kind, s);
      assert.ok(p.questions.length >= 4);
      for (const q of p.questions) if (q.numeric !== undefined) assert.ok(Number.isInteger(q.numeric), `${kind}${s}`);
      const again = generateGenetics(kind, s);
      assert.deepEqual(p.statement, again.statement);
    }
  }
});

test("normalizator", () => {
  const ok = normalizeItem({ id: "x1", chapter: "a05", type: "grila", q: "?", options: ["a", "b", "c", "d"], correct: "C" });
  assert.equal(ok.item?.correct, 2);
  assert.equal(ok.item?.chapter, "A05");
  assert.ok(normalizeItem({ id: "x2", chapter: "A05", type: "adevarat_fals", q: "?", truth: false }).errors.length > 0);
  const { bank, errors } = parseBank({ items: [{ id: "a", chapter: "A01", type: "adevarat_fals", q: "?", truth: "A" }, { id: "a", chapter: "A01", type: "adevarat_fals", q: "?", truth: "A" }] });
  assert.equal(bank.items.length, 1);
  assert.equal(errors.length, 1);
});

test("acces freemium", () => {
  assert.ok(canOpenChapter("A02", { premium: false }, false));
  assert.ok(!canOpenChapter("A02", { premium: false }, true));
  assert.ok(canOpenChapter("A01", { premium: false }, true));
  assert.ok(canOpenChapter("A02", { premium: true }, true));
});

test("scor Bac: total 90 + 10 oficiu", () => {
  const paper: Paper = {
    id: "t", title: "t", year: 2026, kind: "generat", durationMin: 180,
    parts: [
      { id: "I.A", subject: "I", title: "", points: 4, kind: "mcq", items: [{ q: "", options: ["a", "b", "c", "d"], correct: 1, chapter: "A01" }] },
      { id: "I.B", subject: "I", title: "", points: 86, kind: "open", subs: [{ id: "x", prompt: "", points: 86, chapters: ["A02"], model: [] }] },
    ],
  };
  assert.deepEqual(validatePaper(paper), []);
  const s = scorePaper(paper, { "I.A.0": 1 }, { "I.B.x": 1 });
  assert.equal(s.total, 100);
  assert.equal(s.nota, 10);
  const z = scorePaper(paper, {}, {});
  assert.equal(z.total, 10);
  assert.equal(z.nota, 1);
  assert.ok(!z.passed);
});
