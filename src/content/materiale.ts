/**
 * Materialele de sprijin din `materiale/` (vezi materiale/README.md): imaginile lecțiilor, glosarul,
 * cartonașele de recuperare și registrul confuziilor tipice. Se importă doar în componente de server;
 * componentele de client primesc numai datele de care au nevoie.
 */
import imagini from "../../materiale/imagini/imagini.json";
import glosar from "../../materiale/out/glosar.json";
import fise from "../../materiale/out/fise_recuperare.json";
import confuzii from "../../materiale/out/confuzii_tipice.json";
import banca from "../../materiale/out/banca_itemi.json";

export interface Imagine {
  slug: string;
  fisier: string;
  latime: number;
  inaltime: number;
  legenda: string;
  alt: string;
  autor: string;
  licenta: string;
  licentaUrl: string | null;
  sursa: string;
  modificari: string | null;
}

export interface Termen {
  chapter: string;
  term: string;
  definition: string;
}

export interface Cartonas {
  id: string;
  chapter: string;
  kind: "definitie" | "recuperare";
  front: string;
  back: string;
}

export interface Confuzie {
  code: string;
  title: string;
  desc: string;
  remedy: string;
  /** capitolele în care apare confuzia, după itemii din materiale care trimit la ea */
  chapters: string[];
}

const REGISTRU = imagini as Record<string, Omit<Imagine, "slug">>;

export const IMAGINI: Imagine[] = Object.entries(REGISTRU).map(([slug, i]) => ({ slug, ...i }));
export const imagine = (slug: string): Imagine | undefined => (REGISTRU[slug] ? { slug, ...REGISTRU[slug]! } : undefined);

export const GLOSAR = (glosar as Termen[]).slice().sort((a, b) => a.term.localeCompare(b.term, "ro"));
export const glosarCapitol = (code: string): Termen[] => (glosar as Termen[]).filter((t) => t.chapter === code);

export const CARTONASE = fise as Cartonas[];
export const cartonaseCapitol = (code: string): Cartonas[] => CARTONASE.filter((c) => c.chapter === code);

type ItemMaterial = { chapter: string; wrong_why?: Record<string, string>; misconception?: string | null };
const capitolePeConfuzie = new Map<string, Set<string>>();
for (const it of banca as ItemMaterial[]) {
  for (const cod of [...Object.values(it.wrong_why ?? {}), it.misconception].filter((c): c is string => Boolean(c))) {
    if (!capitolePeConfuzie.has(cod)) capitolePeConfuzie.set(cod, new Set());
    capitolePeConfuzie.get(cod)!.add(it.chapter);
  }
}

export const CONFUZII: Confuzie[] = Object.entries(confuzii as Record<string, Omit<Confuzie, "code" | "chapters">>).map(([code, c]) => ({
  code,
  ...c,
  chapters: [...(capitolePeConfuzie.get(code) ?? [])].sort(),
}));
