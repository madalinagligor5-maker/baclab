import Link from "next/link";
import { notFound } from "next/navigation";
import { CHAPTERS_A, CHAPTER_BY_SLUG } from "@/content/chapters";
import { cartonaseCapitol } from "@/content/materiale";
import { Cartonase } from "@/components/Cartonase";
import { Eyebrow, H1 } from "@/components/ui";

export function generateStaticParams() {
  return CHAPTERS_A.filter((c) => cartonaseCapitol(c.code).length > 0).map((c) => ({ slug: c.slug }));
}

async function resolve(params: Promise<{ slug: string }>) {
  const { slug } = await params;
  const chapter = CHAPTER_BY_SLUG[slug];
  const carti = chapter ? cartonaseCapitol(chapter.code) : [];
  if (!chapter || carti.length === 0) notFound();
  return { chapter, carti };
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { chapter } = await resolve(params);
  return { title: `Cartonașe: ${chapter.short}` };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { chapter, carti } = await resolve(params);
  // Întâi întrebările de recuperare, apoi definițiile: întrebările leagă noțiunile, definițiile le fixează.
  const ordonate = [...carti.filter((c) => c.kind === "recuperare"), ...carti.filter((c) => c.kind === "definitie")];
  return (
    <div className="space-y-6">
      <Link href="/cartonase" className="text-sm font-bold text-muted hover:text-ink">
        ← Cartonașe
      </Link>
      <header>
        <Eyebrow>
          {chapter.code} · {carti.length} cartonașe
        </Eyebrow>
        <H1>{chapter.short}</H1>
      </header>
      <Cartonase carti={ordonate.map(({ id, front, back }) => ({ id, front, back }))} backHref={`/lectii/${chapter.slug}`} backLabel="Înapoi la lecție" />
    </div>
  );
}
