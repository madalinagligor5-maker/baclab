import test from "node:test";
import assert from "node:assert/strict";
import { renderToString } from "react-dom/server";
import { FISE, FISE_B } from "../src/content/fise";
import { CHAPTERS_A } from "../src/content/chapters";
import { BlockView } from "../src/components/FisaBlocks";
import { lociCount } from "../src/lib/lab/genetics";

test("fiecare capitol A01–A23 are fișă + fișa probei", () => {
  const codes = new Set(FISE.map((f) => f.code));
  for (const c of CHAPTERS_A) assert.ok(codes.has(c.code), `lipsește fișa ${c.code}`);
  assert.ok(codes.has("proba"));
  assert.equal(codes.size, FISE.length, "coduri duplicate");
});

test("Modulul B: B01–B14 au fișe", () => {
  const codes = new Set(FISE_B.map((f) => f.code));
  for (let i = 1; i <= 14; i++) assert.ok(codes.has(`B${String(i).padStart(2, "0")}`), `lipsește B${i}`);
});

test("structura blocurilor este coerentă", () => {
  let tables = 0, schemes = 0;
  for (const f of FISE) {
    assert.ok(f.blocks.length > 0, f.code);
    for (const b of f.blocks) {
      if (b.type === "table") {
        tables++;
        for (const r of b.rows) assert.equal(r.length, b.cols.length, `${f.code} / ${b.title}: rând cu ${r.length} celule în loc de ${b.cols.length}`);
      } else schemes++;
      if (b.type === "flow") for (const r of b.rows) assert.ok(r.steps.length >= 2, `${f.code} / ${b.title}`);
      if (b.type === "cross") for (const p of b.parents) assert.equal(lociCount(p), b.loci.length, `${f.code} / ${b.title}`);
    }
  }
  console.log(`fișe: ${FISE.length}, tabele: ${tables}, scheme: ${schemes}`);
  assert.ok(tables >= 40 && schemes >= 20);
});

test("toate blocurile se randează", () => {
  for (const f of FISE) for (const b of f.blocks) assert.ok(renderToString(<BlockView b={b} />).includes(b.title.replace(/&/g, "&amp;").slice(0, 8)), `${f.code} / ${b.title}`);
});

test("schema dihibrid din fișă dă 9:3:3:1", () => {
  const b = FISE.find((f) => f.code === "A22")!.blocks.find((x) => x.type === "cross" && x.parents[0] === "NzGg" && x.parents[1] === "NzGg")!;
  const html = renderToString(<BlockView b={b} />);
  assert.match(html.replace(/<!-- -->/g, ""), /9 : 3 : 3 : 1/);
});

import FiseIndex from "../src/app/(app)/fise/page";
test("pagina de index a fișelor se randează", () => {
  const html = renderToString(<FiseIndex />);
  assert.match(html, /Structura probei E\.d/);
  assert.match(html, /\/fise\/a22/);
});
