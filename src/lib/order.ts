import type { Item } from "./content/types";
import { hashSeed } from "./rng";

/**
 * Itemii noi: întâi cei ușori, apoi, la aceeași dificultate, într-o ordine amestecată, dar stabilă (după hash-ul ID-ului).
 * Ordinea alfabetică a ID-urilor ar grupa sursele (A01-…, EXT27-…, MAT-…), iar elevul ar vedea o sursă abia după alta.
 */
export function byDifficultyMixed(a: Item, b: Item): number {
  return (a.difficulty ?? 2) - (b.difficulty ?? 2) || hashSeed(a.id) - hashSeed(b.id) || a.id.localeCompare(b.id);
}
