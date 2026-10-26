import { readFileSync, readdirSync } from "node:fs";
import { parseBank, validateBank } from "../src/lib/content/normalize";
import { CHAPTERS_A } from "../src/content/chapters";
import { validatePaper } from "../src/lib/exam/scoring";
import type { Paper } from "../src/lib/exam/types";

let bad = 0;
const bank = parseBank(JSON.parse(readFileSync("public/content/bank.json", "utf8")));
const errs = [...bank.errors, ...validateBank(bank.bank, CHAPTERS_A.map((c) => c.code))];
console.log(`bank.json: ${bank.bank.items.length} itemi, ${errs.length} erori`);
errs.forEach((e) => console.log("  ", e));
bad += errs.length;
for (const f of readdirSync("public/content/exams").filter((f) => f !== "index.json")) {
  const p = JSON.parse(readFileSync(`public/content/exams/${f}`, "utf8")) as Paper;
  const e = validatePaper(p);
  console.log(`${f}: ${e.length} erori`);
  e.forEach((x) => console.log("  ", x));
  bad += e.length;
}
process.exit(bad ? 1 : 0);
