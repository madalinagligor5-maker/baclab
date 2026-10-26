import type { Fisa } from "./types";
import { FISE_1 } from "./a1";
import { FISE_2 } from "./a2";
import { FISE_3 } from "./a3";

export * from "./types";

export const FISE: Fisa[] = [...FISE_1, ...FISE_2, ...FISE_3];
export const FISA_BY_CODE: Record<string, Fisa> = Object.fromEntries(FISE.map((f) => [f.code, f]));
export const fisaCount = (f: Fisa) => ({
  tables: f.blocks.filter((b) => b.type === "table").length,
  schemes: f.blocks.filter((b) => b.type !== "table").length,
});
