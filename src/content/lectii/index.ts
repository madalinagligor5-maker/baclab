import type { Lectie } from "./types";
import { LECTII_1 } from "./l1";
import { LECTII_2 } from "./l2";
import { LECTII_3 } from "./l3";
import { LECTII_4 } from "./l4";

export * from "./types";
export const LECTII: Lectie[] = [...LECTII_1, ...LECTII_2, ...LECTII_3, ...LECTII_4];
export const LECTIE_BY_CODE: Record<string, Lectie> = Object.fromEntries(LECTII.map((l) => [l.code, l]));
