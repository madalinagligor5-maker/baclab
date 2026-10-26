import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { parseBank } from "../src/lib/content/normalize";
import { CHAPTERS_A } from "../src/content/chapters";
import { cross } from "../src/lib/lab/genetics";

const raw = JSON.parse(readFileSync("public/content/bank.json", "utf8"));
const bank = parseBank(raw);
test("expanded bank: complete chapter coverage, unique questions, explicit provenance and no fabricated specialist review", () => {
  assert.equal(bank.errors.length, 0);
  assert.equal(bank.bank.items.length, 333);
  const added = bank.bank.items.filter((i) => i.id.startsWith("EXT27-"));
  assert.equal(added.length, 276);
  assert.equal(new Set(bank.bank.items.map((i) => i.id)).size, 333);
  assert.equal(new Set(bank.bank.items.map((i) => i.q.trim().toLocaleLowerCase("ro"))).size, 333);
  for (const chapter of CHAPTERS_A) {
    assert.equal(added.filter((i) => i.chapter === chapter.code).length, 12);
    assert.ok(bank.bank.items.filter((i) => i.chapter === chapter.code && ["grila", "adevarat_fals"].includes(i.type)).length >= 11);
  }
  for (const i of added) {
    assert.equal(i.validated, false);
    assert.equal(i.reviewStatus, "documented-draft");
    assert.ok(i.sourceRefs?.length);
    assert.match(i.syllabusRef ?? "", /OMECTS 4800\/2010/);
    if (i.type === "grila") {
      assert.equal(new Set(i.options).size, 4);
      assert.equal(i.wrongWhy?.length, 4);
      assert.equal(i.wrongWhy?.[i.correct!], null);
      assert.equal(i.wrongWhy?.filter(Boolean).length, 3);
    }
    if (i.type === "adevarat_fals" && !i.truth) {
      assert.ok(i.correction);
      assert.doesNotMatch(i.correction!, /\bnu\b/i);
    }
    if (["completare", "exemple_caracteristica"].includes(i.type)) assert.ok(i.model?.length);
  }
});
test("genetic probability answers agree with independent exact crossing engine", () => {
  const answer = (n: number) => { const i = bank.bank.items.find((x) => x.id === `EXT27-A22-grila-${String(n).padStart(2, "0")}`)!; return i.options![i.correct!]; };
  assert.equal(cross("Aa", "Aa").ratioGeno, "1:2:1");
  assert.equal(answer(2), "25%");
  assert.equal(answer(3), "50%");
  assert.equal(cross("AA", "aa").ratioGeno, "1");
  assert.equal(answer(4), "numai descendenți Aa");
  assert.equal(cross("AaBb", "AaBb").total, 16);
  assert.equal(answer(6), "1/16");
  assert.equal(cross("AaBb", "aabb").ratioGeno, "1:1:1:1");
  assert.equal(answer(7), "egale, de 25%");
});
