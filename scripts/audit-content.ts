import { readFileSync } from "node:fs";
import { CHAPTERS_A } from "../src/content/chapters";
import { parseBank } from "../src/lib/content/normalize";
import { SYLLABUS_A } from "../src/content/syllabus";

const { bank, errors } = parseBank(JSON.parse(readFileSync("public/content/bank.json", "utf8")));
const rows = CHAPTERS_A.map((c) => {
  const items = bank.items.filter((i) => i.chapter === c.code);
  return { chapter: c.code, title: c.short, total: items.length, teacherValidated: items.filter((i) => i.validated === true).length, syllabus: SYLLABUS_A[c.code]?.section ?? null };
});
const result = { total: bank.items.length, teacherValidated: bank.items.filter((i) => i.validated === true).length, structuralErrors: errors, editorialTargetPerChapter: 20, chapters: rows };
console.log(JSON.stringify(result, null, 2));
if (process.argv.includes("--release") && (errors.length || rows.some((r) => r.teacherValidated < 20 || !r.syllabus))) {
  console.error("Lansare comercială blocată: banca nu atinge obiectivul editorial de conținut validat. Validarea structurală nu este validare de specialitate.");
  process.exitCode = 1;
} else if (errors.length) process.exitCode = 1;
