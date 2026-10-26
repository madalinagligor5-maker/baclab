import { abs, cmp, frac, fmt, parseDecimal, pctOf, sub, toNumber, type Frac } from "../frac";
import { makeRng } from "../rng";
import type { ChainSpec } from "../exam/types";

/** Calcul în lanț cu procente, ca la Subiectul II.A.c (sânge 7% → plasmă 55% → apă 90%). */

export interface ChainStepResult {
  label: string;
  pct: string;
  before: Frac;
  after: Frac;
  text: string;
}

export interface ChainSolution {
  start: Frac;
  unit: string;
  steps: ChainStepResult[];
  final: Frac;
  finalText: string;
}

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export function solveChain(spec: Pick<ChainSpec, "mass" | "unit" | "steps">): ChainSolution {
  const start = parseDecimal(spec.mass);
  if (!start) throw new Error(`Masă invalidă: ${spec.mass}`);
  let current = start;
  let prevLabel = "masa corpului";
  const steps: ChainStepResult[] = [];
  for (const st of spec.steps) {
    const pct = parseDecimal(st.pct);
    if (!pct) throw new Error(`Procent invalid: ${st.pct}`);
    const before = current;
    const after = pctOf(before, pct);
    const of = st.of ?? prevLabel;
    steps.push({
      label: st.label,
      pct: st.pct,
      before,
      after,
      text: `${cap(st.label)} = ${st.pct}% din ${of} → ${fmt(before)} × ${st.pct} / 100 = ${fmt(after)} ${spec.unit}`,
    });
    current = after;
    prevLabel = st.label;
  }
  return { start, unit: spec.unit, steps, final: current, finalText: `${fmt(current)} ${spec.unit}` };
}

/**
 * Verifică un răspuns tastat de elev („0,38 kg”, „0.381”). Acceptă o rotunjire rezonabilă (±0,005).
 */
export function checkNumeric(input: string, expected: Frac, tolerance = parseDecimal("0.005") as Frac): boolean {
  const m = /[-+]?\d+(?:[.,]\d+)?/.exec(input);
  if (!m) return false;
  const v = parseDecimal(m[0]);
  if (!v) return false;
  return cmp(abs(sub(v, expected)), tolerance) <= 0;
}

// ---------------------------------------------------------------------------------------------
// Generator

const STEP_DEFS = {
  blood: { label: "masa sângelui", phrase: "sângele reprezintă 7% din masa corpului", pct: "7", of: "masa corpului" },
  plasma: { label: "masa plasmei sangvine", phrase: "plasma sangvină reprezintă 55% din masa sângelui", pct: "55", of: "masa sângelui" },
  water: { label: "masa apei din plasmă", phrase: "apa reprezintă 90% din masa plasmei sangvine", pct: "90", of: "masa plasmei sangvine" },
  figured: {
    label: "masa elementelor figurate",
    phrase: "elementele figurate reprezintă 45% din masa sângelui",
    pct: "45",
    of: "masa sângelui",
  },
} as const;

type StepKey = keyof typeof STEP_DEFS;

const VARIANTS: { weight: number; steps: StepKey[]; asks: string }[] = [
  { weight: 5, steps: ["blood", "plasma", "water"], asks: "masa apei din plasma sângelui" },
  { weight: 2, steps: ["blood", "plasma"], asks: "masa plasmei sangvine" },
  { weight: 2, steps: ["blood", "figured"], asks: "masa elementelor figurate din sânge" },
  { weight: 1, steps: ["blood"], asks: "masa sângelui" },
];

const PEOPLE = [
  { who: "unui copil", genitive: "copilului", min: 9, max: 38 },
  { who: "unui adolescent", genitive: "adolescentului", min: 45, max: 72 },
  { who: "unui adult", genitive: "adultului", min: 55, max: 98 },
];

export interface ChainProblem {
  id: string;
  spec: ChainSpec;
  /** enunțul, rând cu rând */
  statement: string[];
  solution: ChainSolution;
}

export function generateChain(seed: string | number): ChainProblem {
  const rng = makeRng(`chain:${seed}`);
  const total = VARIANTS.reduce((a, v) => a + v.weight, 0);
  let roll = rng.int(1, total);
  let variant = VARIANTS[0]!;
  for (const v of VARIANTS) {
    if (roll <= v.weight) {
      variant = v;
      break;
    }
    roll -= v.weight;
  }
  const person = rng.pick(PEOPLE);
  const mass = rng.int(person.min, person.max);
  const spec: ChainSpec = {
    mass: String(mass),
    unit: "kg",
    asks: variant.asks,
    steps: variant.steps.map((k) => ({ label: STEP_DEFS[k].label, pct: STEP_DEFS[k].pct, of: STEP_DEFS[k].of })),
  };
  const statement = [
    `Calculați ${variant.asks} ${person.who}, știind următoarele:`,
    ...variant.steps.map((k) => `- ${STEP_DEFS[k].phrase};`),
    `- masa corpului ${person.genitive} este de ${mass} kg.`,
    "Scrieți toate etapele parcurse pentru rezolvarea cerinței.",
  ];
  return { id: `chain-${seed}`, spec, statement, solution: solveChain(spec) };
}

export const chainFinalNumber = (p: ChainProblem) => toNumber(p.solution.final);
