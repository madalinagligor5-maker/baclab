import { notFound } from "next/navigation";
import { CHAPTERS_A, CHAPTER_BY_SLUG } from "@/content/chapters";
import { ChapterView } from "@/components/ChapterView";

export function generateStaticParams() {
  return CHAPTERS_A.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ch = CHAPTER_BY_SLUG[slug];
  return { title: ch ? ch.short : "Capitol" };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ch = CHAPTER_BY_SLUG[slug];
  if (!ch) notFound();
  return <ChapterView code={ch.code} />;
}
