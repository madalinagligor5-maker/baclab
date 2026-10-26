import type { MetadataRoute } from "next";
import { CHAPTERS_A } from "@/content/chapters";
import { FISE_B } from "@/content/fise";

export const dynamic = "force-static";

const SITE = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://baclab.ro").replace(/\/$/, "");

/** Doar paginile publice. Paginile de progres personal (azi, progres, setări, greșeli, diagnostic, exersare) nu sunt incluse. */
export default function sitemap(): MetadataRoute.Sitemap {
  const fixed: [string, number][] = [
    ["/", 1],
    ["/start", 0.8],
    ["/capitole", 0.8],
    ["/lectii", 0.9],
    ["/fise", 0.8],
    ["/fise/proba", 0.7],
    ["/laborator", 0.6],
    ["/laborator/calcul", 0.5],
    ["/laborator/genetica", 0.5],
    ["/simulari", 0.7],
    ["/surse", 0.5],
  ];
  const lastModified = new Date();
  const paths: [string, number][] = [
    ...fixed,
    ...CHAPTERS_A.map((c): [string, number] => [`/capitole/${c.slug}`, 0.6]),
    ...CHAPTERS_A.map((c): [string, number] => [`/lectii/${c.slug}`, 0.8]),
    ...CHAPTERS_A.map((c): [string, number] => [`/fise/${c.slug}`, 0.6]),
    ["/simulari/bac-2026-simulare", 0.5],
    ["/simulari/bac-2025-var01", 0.5],
    ...FISE_B.map((f): [string, number] => [`/fise/${f.code.toLowerCase()}`, 0.4]),
  ];
  return paths.map(([p, priority]) => ({ url: `${SITE}${p}`, lastModified, priority }));
}
