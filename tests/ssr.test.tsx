import test from "node:test";
import assert from "node:assert/strict";
import { renderToString } from "react-dom/server";
import Home from "../src/app/page";
import Start from "../src/app/start/page";
import { ChapterView } from "../src/components/ChapterView";
import { Session } from "../src/components/Session";
import { AppShell } from "../src/components/AppShell";
import Laborator from "../src/app/(app)/laborator/page";
import Calcul from "../src/app/(app)/laborator/calcul/page";
import Genetica from "../src/app/(app)/laborator/genetica/page";
import Azi from "../src/app/(app)/azi/page";
import Setari from "../src/app/(app)/setari/page";
import DiagnosticPage from "../src/app/(app)/diagnostic/page";
import Greseli from "../src/app/(app)/greseli/page";
import Surse from "../src/app/surse/page";
import { parseBank } from "../src/lib/content/normalize";
import { readFileSync } from "node:fs";

const bank = parseBank(JSON.parse(readFileSync("public/content/bank.json", "utf8"))).bank;

test("pagini statice se randează", () => {
  assert.match(renderToString(<Home />), /Biologia are sens/);
  assert.match(renderToString(<Start />), /Începem/);
  assert.match(renderToString(<ChapterView code="A06" />), /Fotosinteza|fotosinteza/i);
  assert.match(renderToString(<Laborator />), /Calcul în lanț/);
  assert.match(renderToString(<Surse />), /5211\/2026/);
});

test("pagini cu stare se randează în starea inițială (fără erori de hidratare)", () => {
  for (const C of [Calcul, Genetica, Azi, Setari, DiagnosticPage, Greseli]) assert.ok(renderToString(<C />).length > 0);
  assert.ok(renderToString(<AppShell><p>x</p></AppShell>).length > 0);
});

test("sesiunea afișează prima întrebare", () => {
  const html = renderToString(<Session items={bank.items.slice(0, 3)} title="Test" backHref="/azi" />);
  assert.match(html.replace(/<!-- -->/g, ""), /1\/3/);
  assert.match(html, /Test/);
});
