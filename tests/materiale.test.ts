import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { parseBank } from "../src/lib/content/normalize";
import { CHAPTERS_A } from "../src/content/chapters";
import { AUTO_GRADED } from "../src/lib/content/types";

const bank = parseBank(JSON.parse(readFileSync("public/content/bank.json", "utf8")));
const source = JSON.parse(readFileSync("materiale/out/banca_itemi.json", "utf8")) as { id: string; type: string; correct?: number }[];
const imported = bank.bank.items.filter((i) => i.id.startsWith("MAT-"));

test("materials bank: imported without errors, on every chapter, never marked as specialist-validated", () => {
  assert.equal(bank.errors.length, 0);
  assert.ok(imported.length >= 600, `doar ${imported.length} itemi importați`);
  for (const ch of CHAPTERS_A) assert.ok(imported.some((i) => i.chapter === ch.code), `${ch.code} fără itemi importați`);
  for (const i of imported) {
    assert.equal(i.validated, false);
    assert.equal(i.reviewStatus, "materiale-draft");
    assert.ok(source.some((s) => `MAT-${s.id}` === i.id), `${i.id} nu există în materiale`);
  }
});

test("materials bank: answers and model answers survive the conversion", () => {
  for (const i of imported) {
    const s = source.find((x) => `MAT-${x.id}` === i.id)!;
    if (i.type === "grila") {
      assert.equal(i.correct, s.correct);
      assert.equal(i.wrongWhy?.length, 4);
      assert.equal(i.wrongWhy?.[i.correct!], null);
    }
    if (i.type === "adevarat_fals" && i.truth === false) assert.ok(i.correction, `${i.id}: fals fără corectare`);
    if (!AUTO_GRADED.includes(i.type)) assert.ok(i.model?.length, `${i.id}: lipsește răspunsul model`);
  }
  const types = new Set(imported.map((i) => i.type));
  for (const t of ["grila", "adevarat_fals", "completare", "exemple_caracteristica", "structurat", "enunturi", "minieseu", "problema_calcul", "problema_genetica"])
    assert.ok(types.has(t as never), `lipsește tipul ${t}`);
});

test("materials bank: misconception explanations read as second-person feedback", () => {
  const ww = imported.flatMap((i) => i.wrongWhy ?? []).filter((x): x is string => Boolean(x));
  assert.ok(ww.length > 300);
  for (const w of ww) {
    assert.match(w, /Ca să nu mai greșești:/);
    assert.doesNotMatch(w, /^(Confundă|Atribuie|Încurcă)/);
  }
});
