/**
 * Motor de genetică mendeliană: gameți, pătrat Punnett, genotipuri, fenotipuri, rapoarte.
 * Genotipul se scrie cu 2 litere pe locus, majuscula întâi: "OoVv" (două gene, independente).
 * Calculele sunt exacte (numărare), nu aproximări.
 */

export interface Locus {
  /** alela dominantă (majusculă) */
  dom: string;
  /** alela recesivă (minusculă) */
  rec: string;
  /** caracterul: "forma fructelor" */
  trait: string;
  /** formularea pentru fenotipul dominant: "fructe oval-alungite" */
  domText: string;
  /** formularea pentru fenotipul recesiv */
  recText: string;
}

export type Genotype = string;

export const lociCount = (g: Genotype) => g.length / 2;

export function normalizeGenotype(g: Genotype): Genotype {
  if (g.length % 2 !== 0) throw new Error(`Genotip invalid: ${g}`);
  let out = "";
  for (let i = 0; i < g.length; i += 2) {
    const a = g[i] as string;
    const b = g[i + 1] as string;
    const aUp = a === a.toUpperCase() && a !== a.toLowerCase();
    const bUp = b === b.toUpperCase() && b !== b.toLowerCase();
    out += !aUp && bUp ? b + a : a + b;
  }
  return out;
}

const pairAt = (g: Genotype, i: number) => g.slice(2 * i, 2 * i + 2);

/** Gameții distincți, cu șanse egale (loci independente), în ordinea: dominant întâi. */
export function gametes(g: Genotype): string[] {
  const norm = normalizeGenotype(g);
  let out = [""];
  for (let i = 0; i < lociCount(norm); i++) {
    const p = pairAt(norm, i);
    const alleles = p[0] === p[1] ? [p[0] as string] : [p[0] as string, p[1] as string];
    out = out.flatMap((prefix) => alleles.map((a) => prefix + a));
  }
  return out;
}

export function combine(gA: string, gB: string): Genotype {
  let out = "";
  for (let i = 0; i < gA.length; i++) out += (gA[i] as string) + (gB[i] as string);
  return normalizeGenotype(out);
}

export interface Punnett {
  rows: string[];
  cols: string[];
  cells: Genotype[][];
}

export function punnett(g1: Genotype, g2: Genotype): Punnett {
  const rows = gametes(g1);
  const cols = gametes(g2);
  return { rows, cols, cells: rows.map((r) => cols.map((c) => combine(r, c))) };
}

const isUpper = (ch: string) => ch === ch.toUpperCase() && ch !== ch.toLowerCase();

/** "D" = fenotip dominant, "r" = recesiv, pe fiecare locus: "Dr" pentru 2 gene. */
export function phenoClass(g: Genotype): string {
  const norm = normalizeGenotype(g);
  let out = "";
  for (let i = 0; i < lociCount(norm); i++) out += isUpper(pairAt(norm, i)[0] as string) ? "D" : "r";
  return out;
}

export function phenoLabel(cls: string, loci: Locus[]): string {
  return cls
    .split("")
    .map((c, i) => (c === "D" ? (loci[i] as Locus).domText : (loci[i] as Locus).recText))
    .join(", ");
}

/** Ordinea standard a claselor fenotipice: DD, Dr, rD, rr (dominant întâi) */
export function phenoClassOrder(n: number): string[] {
  let out = [""];
  for (let i = 0; i < n; i++) out = out.flatMap((p) => [p + "D", p + "r"]);
  return out;
}

const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));

/** [9,3,3,1] → "9:3:3:1"; [2,2] → "1:1" */
export function ratio(counts: number[]): string {
  const g = counts.reduce((a, b) => gcd(a, b), 0) || 1;
  return counts.map((c) => c / g).join(":");
}

/** 0 = homozigot dominant, 1 = heterozigot, 2 = homozigot recesiv, pe fiecare locus */
function genotypeRank(g: Genotype): number[] {
  const out: number[] = [];
  for (let i = 0; i < lociCount(g); i++) {
    const p = pairAt(g, i);
    out.push(p[0] === p[1] ? (isUpper(p[0] as string) ? 0 : 2) : 1);
  }
  return out;
}

export const isHeterozygousAt = (g: Genotype, i: number) => genotypeRank(normalizeGenotype(g))[i] === 1;
export const isHomozygousAt = (g: Genotype, i: number) => genotypeRank(normalizeGenotype(g))[i] !== 1;

export interface CrossResult {
  parents: [Genotype, Genotype];
  gametes: [string[], string[]];
  table: Punnett;
  total: number;
  genotypes: { genotype: Genotype; count: number }[];
  phenotypes: { cls: string; count: number }[];
  ratioGeno: string;
  ratioPheno: string;
}

export function cross(p1: Genotype, p2: Genotype): CrossResult {
  const a = normalizeGenotype(p1);
  const b = normalizeGenotype(p2);
  const table = punnett(a, b);
  const gCount = new Map<Genotype, number>();
  const pCount = new Map<string, number>();
  for (const row of table.cells)
    for (const g of row) {
      gCount.set(g, (gCount.get(g) ?? 0) + 1);
      const cls = phenoClass(g);
      pCount.set(cls, (pCount.get(cls) ?? 0) + 1);
    }
  const genotypes = [...gCount.entries()]
    .map(([genotype, count]) => ({ genotype, count }))
    .sort((x, y) => {
      const rx = genotypeRank(x.genotype);
      const ry = genotypeRank(y.genotype);
      for (let i = 0; i < rx.length; i++) if (rx[i] !== ry[i]) return (rx[i] as number) - (ry[i] as number);
      return 0;
    });
  const order = phenoClassOrder(lociCount(a));
  const phenotypes = order.filter((c) => pCount.has(c)).map((cls) => ({ cls, count: pCount.get(cls) as number }));
  return {
    parents: [a, b],
    gametes: [table.rows, table.cols],
    table,
    total: table.rows.length * table.cols.length,
    genotypes,
    phenotypes,
    ratioGeno: ratio(genotypes.map((x) => x.count)),
    ratioPheno: ratio(phenotypes.map((x) => x.count)),
  };
}

/** Genotipurile din rezultat care au o anumită clasă fenotipică, ex. "rr". */
export function genotypesWithPheno(res: CrossResult, cls: string): { genotype: Genotype; count: number }[] {
  return res.genotypes.filter((x) => phenoClass(x.genotype) === cls);
}

export function countPheno(res: CrossResult, cls: string): number {
  return res.phenotypes.find((p) => p.cls === cls)?.count ?? 0;
}

/** Genotipurile care au un anumit fenotip la UN singur locus (ex. locusul 1 dominant). */
export function genotypesWithTrait(res: CrossResult, locusIndex: number, dominant: boolean) {
  return res.genotypes.filter((x) => (phenoClass(x.genotype)[locusIndex] === "D") === dominant);
}

export function countDoubleHeterozygous(res: CrossResult): number {
  return res.genotypes.filter((x) => lociCount(x.genotype) >= 2 && genotypeRank(x.genotype).every((r) => r === 1)).reduce((a, x) => a + x.count, 0);
}

export function countDoubleHomozygous(res: CrossResult): number {
  return res.genotypes.filter((x) => genotypeRank(x.genotype).every((r) => r !== 1)).reduce((a, x) => a + x.count, 0);
}
