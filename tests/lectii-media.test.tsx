import test from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { renderToString } from "react-dom/server";
import { CHAPTERS_A } from "../src/content/chapters";
import { LECTIE_BY_CODE } from "../src/content/lectii";
import { IMAGINI_LECTII } from "../src/content/lectii/imagini";
import { LA_BAC } from "../src/content/lectii/la-bac";
import { CARTONASE, CONFUZII, GLOSAR, IMAGINI, imagine } from "../src/content/materiale";
import LectiePage from "../src/app/(app)/lectii/[slug]/page";
import CartonasePage from "../src/app/(app)/cartonase/[slug]/page";
import GlosarPage from "../src/app/(app)/glosar/page";
import ConfuziiPage from "../src/app/(app)/confuzii/page";
import Surse from "../src/app/surse/page";

const text = (html: string) => html.replace(/<!-- -->/g, "");

test("lesson images: every chapter has one, placed after a real section, with the file on disk", () => {
  for (const ch of CHAPTERS_A) {
    const figuri = IMAGINI_LECTII[ch.code] ?? [];
    assert.ok(figuri.length > 0, `${ch.code} fără imagini`);
    const titluri = LECTIE_BY_CODE[ch.code]!.sectiuni.map((s) => s.titlu);
    for (const f of figuri) {
      assert.ok(titluri.includes(f.dupa), `${ch.code}: secțiunea „${f.dupa}” nu există`);
      const img = imagine(f.slug);
      assert.ok(img, `${f.slug} lipsește din registru`);
      assert.ok(existsSync(`public/lectii/${img!.fisier}`), `${img!.fisier} lipsește din public/lectii`);
    }
  }
});

test("image registry: only reusable licences, every image with caption, alt text and source", () => {
  assert.equal(IMAGINI.length, 44);
  for (const i of IMAGINI) {
    assert.match(i.licenta, /^(Domeniu public|CC0|CC BY \d|CC BY-SA \d)/, `${i.slug}: ${i.licenta}`);
    assert.ok(i.legenda.length > 20 && i.alt.length > 5, `${i.slug}: legendă sau alt prea scurt`);
    assert.match(i.sursa, /^https:\/\/commons\.wikimedia\.org\/wiki\/File:/);
    if (i.licenta.startsWith("CC BY-SA") && i.modificari) assert.match(i.modificari, /aceeași licență/);
  }
});

test("support materials cover every chapter", () => {
  for (const ch of CHAPTERS_A) {
    assert.ok(LA_BAC[ch.code], `${ch.code} fără „Cum apare la Bac”`);
    assert.ok(GLOSAR.some((t) => t.chapter === ch.code), `${ch.code} fără termeni în glosar`);
    assert.ok(CARTONASE.some((c) => c.chapter === ch.code), `${ch.code} fără cartonașe`);
  }
  assert.equal(CONFUZII.length, 47);
  assert.ok(CONFUZII.every((c) => c.chapters.length > 0));
});

test("new pages render: lesson with figures, flashcards, glossary, misconceptions, image credits", async () => {
  const lectie = text(renderToString(await LectiePage({ params: Promise.resolve({ slug: "a13" }) })));
  assert.match(lectie, /<figure/);
  assert.match(lectie, /Cum apare la Bac/);
  assert.match(lectie, /Termeni-cheie/);
  assert.match(lectie, /Cartonașe \(\d+\)/);
  const deck = text(renderToString(await CartonasePage({ params: Promise.resolve({ slug: "a01" }) })));
  assert.match(deck, /Răspunde în gând/);
  assert.match(text(renderToString(<GlosarPage />)), /mitocondrie/i);
  assert.match(text(renderToString(<ConfuziiPage />)), /Mitoză vs meioză/);
  assert.match(text(renderToString(<Surse />)), /Wikimedia Commons/);
});
