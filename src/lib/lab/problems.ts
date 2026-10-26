import { makeRng } from "../rng";
import {
  cross,
  countDoubleHeterozygous,
  countDoubleHomozygous,
  countPheno,
  gametes,
  phenoLabel,
  type CrossResult,
  type Genotype,
  type Locus,
} from "./genetics";

/** Probleme de genetică în stilul Subiectului II.B, generate determinist dintr-un seed. */

export type GeneticsKind = "mono" | "di-f2" | "di-test";

export const KIND_LABEL: Record<GeneticsKind, string> = {
  mono: "Monohibridare",
  "di-f2": "Dihibridare — F2",
  "di-test": "Dihibridare — încrucișare test",
};

interface Organism {
  name: string;
  /** "la pepene" */
  at: string;
  traits: Omit<Locus, "dom" | "rec">[];
}

const ORGANISMS: Organism[] = [
  {
    name: "pepene",
    at: "pepene",
    traits: [
      { trait: "forma fructelor", domText: "fructe ovale", recText: "fructe sferice" },
      { trait: "culoarea fructelor", domText: "fructe verzi", recText: "fructe galbene" },
    ],
  },
  {
    name: "dovlecel",
    at: "dovlecel",
    traits: [
      { trait: "forma fructelor", domText: "fructe alungite", recText: "fructe rotunde" },
      { trait: "culoarea fructelor", domText: "fructe verzi", recText: "fructe albe" },
    ],
  },
  {
    name: "mazăre",
    at: "mazăre",
    traits: [
      { trait: "forma semințelor", domText: "semințe netede", recText: "semințe zbârcite" },
      { trait: "culoarea semințelor", domText: "semințe galbene", recText: "semințe verzi" },
    ],
  },
  {
    name: "tomate",
    at: "tomate",
    traits: [
      { trait: "forma fructelor", domText: "fructe sferice", recText: "fructe piriforme" },
      { trait: "culoarea fructelor", domText: "fructe roșii", recText: "fructe galbene" },
    ],
  },
];

const LETTERS: [string, string][] = [
  ["O", "o"],
  ["V", "v"],
  ["R", "r"],
  ["A", "a"],
  ["B", "b"],
  ["G", "g"],
];

export interface ProblemQuestion {
  prompt: string;
  /** răspuns scurt, comparabil */
  answer: string;
  /** explicația pas cu pas */
  why: string;
  /** dacă răspunsul e un număr, valoarea lui */
  numeric?: number;
}

export interface GeneticsProblem {
  id: string;
  kind: GeneticsKind;
  organism: string;
  loci: Locus[];
  statement: string[];
  /** generația rezolvată în pătratul Punnett */
  parents: [Genotype, Genotype];
  /** pașii prin care se ajunge la încrucișarea de rezolvat (ex. P → F1) */
  steps: { label: string; cross: CrossResult }[];
  result: CrossResult;
  questions: ProblemQuestion[];
}

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

function makeLoci(org: Organism, n: number, letters: [string, string][]): Locus[] {
  return org.traits.slice(0, n).map((t, i) => ({ ...t, dom: (letters[i] as [string, string])[0], rec: (letters[i] as [string, string])[1] }));
}

const phenoOf = (cls: string, loci: Locus[]) => phenoLabel(cls, loci);

export function generateGenetics(kind: GeneticsKind, seed: string | number): GeneticsProblem {
  const rng = makeRng(`gen:${kind}:${seed}`);
  const org = rng.pick(ORGANISMS);
  const letters = rng.shuffle(LETTERS);
  const id = `gen-${kind}-${seed}`;

  if (kind === "mono") {
    const loci = makeLoci(org, 1, letters);
    const L = loci[0] as Locus;
    const heteroCross = rng.chance(0.6);
    const p1 = L.dom + L.rec;
    const p2 = heteroCross ? L.dom + L.rec : L.rec + L.rec;
    const res = cross(p1, p2);
    const k = rng.pick([2, 3, 4, 5]);
    const total = res.total * k * 10;
    const recCount = (countPheno(res, "r") / res.total) * total;
    const domCount = (countPheno(res, "D") / res.total) * total;
    const statement = [
      `La ${org.at}, ${L.trait} se transmite monogenic: ${L.domText} (${L.dom}) domină ${L.recText} (${L.rec}).`,
      heteroCross
        ? `Se încrucișează două plante heterozigote (${p1} × ${p2}).`
        : `Se încrucișează o plantă heterozigotă cu o plantă cu ${L.recText} (${p1} × ${p2}).`,
      "Determinați:",
      "a) tipurile de gameți formați de fiecare părinte;",
      "b) raportul de segregare după fenotip și după genotip;",
      `c) numărul descendenților cu ${L.recText}, dacă s-au obținut ${total} de descendenți.`,
    ];
    return {
      id,
      kind,
      organism: org.name,
      loci,
      statement,
      parents: [res.parents[0], res.parents[1]],
      steps: [{ label: "Încrucișarea dată", cross: res }],
      result: res,
      questions: [
        {
          prompt: `Gameții părintelui ${p1}`,
          answer: gametes(p1).join(", "),
          why: `Un heterozigot ${p1} formează 2 tipuri de gameți, ${gametes(p1).join(" și ")}, în proporții egale.`,
        },
        {
          prompt: `Gameții părintelui ${p2}`,
          answer: gametes(p2).join(", "),
          why:
            gametes(p2).length === 1
              ? `Homozigotul ${p2} formează un singur tip de gamet: ${gametes(p2)[0]}.`
              : `Heterozigotul ${p2} formează 2 tipuri de gameți: ${gametes(p2).join(" și ")}.`,
        },
        {
          prompt: "Raportul fenotipic",
          answer: res.ratioPheno,
          why: `Pătratul Punnett are ${res.total} căsuțe: ${res.phenotypes.map((p) => `${p.count} cu ${phenoOf(p.cls, loci)}`).join(", ")}.`,
        },
        {
          prompt: "Raportul genotipic",
          answer: res.ratioGeno,
          why: `Genotipuri: ${res.genotypes.map((g) => `${g.count} ${g.genotype}`).join(", ")}.`,
        },
        {
          prompt: `Descendenți cu ${L.recText} din ${total}`,
          answer: String(recCount),
          numeric: recCount,
          why: `${countPheno(res, "r")}/${res.total} din ${total} = ${recCount}. (Cei cu ${L.domText}: ${domCount}.)`,
        },
      ],
    };
  }

  const loci = makeLoci(org, 2, letters.slice(0, 2));
  const [A, B] = loci as [Locus, Locus];
  const homDom = A.dom + A.dom + B.dom + B.dom;
  const homRec = A.rec + A.rec + B.rec + B.rec;
  const f1 = A.dom + A.rec + B.dom + B.rec;

  if (kind === "di-f2") {
    const first = cross(homDom, homRec);
    const res = cross(f1, f1);
    const k = rng.pick([1, 2, 3, 4]);
    const total = 16 * k * 5;
    const per = total / 16;
    const dbl = countDoubleHeterozygous(res) * per;
    const recRec = countPheno(res, "rr") * per;
    return {
      id,
      kind,
      organism: org.name,
      loci,
      statement: [
        `La ${org.at}, ${A.trait} (${A.domText} — ${A.dom}, ${A.recText} — ${A.rec}) și ${B.trait} (${B.domText} — ${B.dom}, ${B.recText} — ${B.rec}) sunt determinate de gene situate pe cromozomi diferiți.`,
        `Se încrucișează o plantă homozigotă cu ${A.domText} și ${B.domText} cu o plantă cu ${A.recText} și ${B.recText}. Indivizii din F1 se încrucișează între ei.`,
        "Determinați:",
        "a) genotipul și fenotipul indivizilor din F1;",
        "b) raportul de segregare după fenotip în F2;",
        `c) numărul descendenților din F2 dublu heterozigoți, dacă s-au obținut ${total} de descendenți.`,
      ],
      parents: [f1, f1],
      steps: [
        { label: "P → F1", cross: first },
        { label: "F1 × F1 → F2", cross: res },
      ],
      result: res,
      questions: [
        {
          prompt: "Genotipul indivizilor din F1",
          answer: f1,
          why: `Din gameții ${homDom.slice(0, 1)}${homDom.slice(2, 3)} și ${homRec.slice(0, 1)}${homRec.slice(2, 3)} rezultă doar ${f1}, cu ${phenoOf("DD", loci)}.`,
        },
        {
          prompt: "Gameții unui individ F1",
          answer: gametes(f1).join(", "),
          why: `${f1} formează 4 tipuri de gameți în proporții egale (genele sunt pe cromozomi diferiți).`,
        },
        {
          prompt: "Raportul fenotipic în F2",
          answer: res.ratioPheno,
          why: `16 căsuțe: ${res.phenotypes.map((p) => `${p.count} (${phenoOf(p.cls, loci)})`).join("; ")}.`,
        },
        {
          prompt: `Dublu heterozigoți din ${total}`,
          answer: String(dbl),
          numeric: dbl,
          why: `${f1} apare în 4 din 16 căsuțe: 4/16 din ${total} = ${dbl}.`,
        },
        {
          prompt: `Descendenți cu ${A.recText} și ${B.recText} din ${total}`,
          answer: String(recRec),
          numeric: recRec,
          why: `Dublu recesivii sunt 1 din 16: ${total}/16 = ${recRec}.`,
        },
      ],
    };
  }

  // di-test
  const res = cross(f1, homRec);
  const k = rng.pick([1, 2, 3, 5]);
  const total = 4 * k * 20;
  const per = total / 4;
  return {
    id,
    kind,
    organism: org.name,
    loci,
    statement: [
      `La ${org.at}, ${A.trait} (${A.domText} — ${A.dom}, ${A.recText} — ${A.rec}) și ${B.trait} (${B.domText} — ${B.dom}, ${B.recText} — ${B.rec}) sunt determinate de gene pe cromozomi diferiți.`,
      `O plantă cu ${A.domText} și ${B.domText} (${f1}) se încrucișează cu o plantă cu ${A.recText} și ${B.recText} (${homRec}) — încrucișare test.`,
      "Determinați:",
      "a) tipurile de gameți formați de fiecare părinte;",
      "b) raportul de segregare după fenotip și după genotip;",
      `c) numărul descendenților cu ${A.domText} și ${B.recText}, dacă s-au obținut ${total} de descendenți.`,
    ],
    parents: [res.parents[0], res.parents[1]],
    steps: [{ label: "Încrucișarea test", cross: res }],
    result: res,
    questions: [
      { prompt: `Gameții părintelui ${f1}`, answer: gametes(f1).join(", "), why: "4 tipuri de gameți, în proporții egale." },
      { prompt: `Gameții părintelui ${homRec}`, answer: gametes(homRec).join(", "), why: "Homozigotul dublu recesiv formează un singur tip de gamet." },
      { prompt: "Raportul fenotipic", answer: res.ratioPheno, why: `4 căsuțe, toate diferite: ${res.phenotypes.map((p) => phenoOf(p.cls, loci)).join("; ")}.` },
      { prompt: "Raportul genotipic", answer: res.ratioGeno, why: `Fiecare gamet al lui ${f1} se combină cu ${homRec[0]}${homRec[2]}.` },
      {
        prompt: `Descendenți cu ${A.domText} și ${B.recText} din ${total}`,
        answer: String(per),
        numeric: per,
        why: `Clasa „Dr” are 1 din 4 căsuțe: ${total}/4 = ${per}.`,
      },
    ],
  };
}

export const pickKind = (seed: string | number): GeneticsKind =>
  makeRng(`kind:${seed}`).pick<GeneticsKind>(["mono", "di-f2", "di-f2", "di-test"]);

export { cap as _cap, countDoubleHomozygous };
