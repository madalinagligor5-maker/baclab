// Importă banca completă: `npm run content:import -- ../out/banca_itemi.json`
import { readFileSync, writeFileSync } from "node:fs";
import { parseBank, validateBank } from "../src/lib/content/normalize";
import { CHAPTERS_A } from "../src/content/chapters";

const src = process.argv[2];
if (!src) {
  console.error("Folosire: npm run content:import -- <cale/către/banca_itemi.json>");
  process.exit(2);
}
const { bank, errors } = parseBank(JSON.parse(readFileSync(src, "utf8")));
const all = [...errors, ...validateBank(bank, CHAPTERS_A.map((c) => c.code))];
all.slice(0, 50).forEach((e) => console.warn("!", e));
console.log(`${bank.items.length} itemi valizi, ${all.length} probleme.`);
if (bank.items.length === 0) process.exit(1);
writeFileSync("public/content/bank.json", JSON.stringify(bank));
console.log("Scris în public/content/bank.json");
