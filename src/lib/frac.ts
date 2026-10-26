/**
 * Numere raționale exacte (BigInt). Calculele cu procente din subiectele de Bac se fac fără erori de virgulă mobilă:
 * 11 kg × 7% × 55% × 90% = 0,38115 kg exact.
 */
export interface Frac {
  n: bigint;
  d: bigint;
}

const gcd = (a: bigint, b: bigint): bigint => {
  a = a < 0n ? -a : a;
  b = b < 0n ? -b : b;
  while (b) [a, b] = [b, a % b];
  return a;
};

export function frac(n: bigint | number, d: bigint | number = 1n): Frac {
  let nn = BigInt(n);
  let dd = BigInt(d);
  if (dd === 0n) throw new Error("împărțire la zero");
  if (dd < 0n) {
    nn = -nn;
    dd = -dd;
  }
  const g = gcd(nn, dd) || 1n;
  return { n: nn / g, d: dd / g };
}

/** "11", "0,77", "0.5" → fracție; altceva → null */
export function parseDecimal(s: string): Frac | null {
  const m = /^\s*([+-]?)(\d+)(?:[.,](\d+))?\s*$/.exec(s);
  if (!m) return null;
  const sign = m[1] === "-" ? -1n : 1n;
  const intPart = BigInt(m[2] as string);
  const dec = m[3] ?? "";
  const scale = 10n ** BigInt(dec.length);
  return frac(sign * (intPart * scale + BigInt(dec || "0")), scale);
}

export const mul = (a: Frac, b: Frac): Frac => frac(a.n * b.n, a.d * b.d);
export const sub = (a: Frac, b: Frac): Frac => frac(a.n * b.d - b.n * a.d, a.d * b.d);
export const abs = (a: Frac): Frac => ({ n: a.n < 0n ? -a.n : a.n, d: a.d });
export const cmp = (a: Frac, b: Frac): number => {
  const l = a.n * b.d;
  const r = b.n * a.d;
  return l < r ? -1 : l > r ? 1 : 0;
};
export const eq = (a: Frac, b: Frac): boolean => cmp(a, b) === 0;

/** x × pct / 100 */
export const pctOf = (x: Frac, pct: Frac): Frac => mul(x, frac(pct.n, pct.d * 100n));

export const toNumber = (a: Frac): number => Number(a.n) / Number(a.d);

/** Format românesc: virgulă zecimală, fără zerouri la coadă. Rotunjire „half up”. */
export function fmt(a: Frac, maxDecimals = 6): string {
  const neg = a.n < 0n;
  const n = neg ? -a.n : a.n;
  const scale = 10n ** BigInt(maxDecimals);
  const scaled = (n * scale * 2n + a.d) / (2n * a.d); // rotunjit
  const intPart = scaled / scale;
  let dec = (scaled % scale).toString().padStart(maxDecimals, "0").replace(/0+$/, "");
  const body = dec ? `${intPart},${dec}` : `${intPart}`;
  return neg && scaled !== 0n ? `-${body}` : body;
}

/** 25% din fracția 1/4 */
export function fmtPercent(a: Frac, maxDecimals = 2): string {
  return `${fmt(mul(a, frac(100)), maxDecimals)}%`;
}
