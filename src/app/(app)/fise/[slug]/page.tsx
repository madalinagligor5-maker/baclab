import Link from "next/link";
import { notFound } from "next/navigation";
import { CHAPTERS_A, CHAPTER_BY_SLUG } from "@/content/chapters";
import { FISA_BY_CODE } from "@/content/fise";
import { BlockView } from "@/components/FisaBlocks";
import { Chip, Eyebrow, H1, LinkButton } from "@/components/ui";

export function generateStaticParams() {
  return [...CHAPTERS_A.filter((c) => FISA_BY_CODE[c.code]).map((c) => ({ slug: c.slug })), { slug: "proba" }];
}

async function resolve(params: Promise<{ slug: string }>) {
  const { slug } = await params;
  if (slug === "proba") return { title: "Structura probei E.d", fisa: FISA_BY_CODE["proba"]!, chapter: null };
  const chapter = CHAPTER_BY_SLUG[slug];
  const fisa = chapter ? FISA_BY_CODE[chapter.code] : undefined;
  if (!chapter || !fisa) notFound();
  return { title: chapter.title, fisa, chapter };
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const r = await resolve(params);
  return { title: `Fișă: ${r.chapter?.short ?? "Structura probei"}` };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { title, fisa, chapter } = await resolve(params);
  const idx = chapter ? CHAPTERS_A.findIndex((c) => c.code === chapter.code) : -1;
  const prev = idx > 0 ? CHAPTERS_A[idx - 1] : undefined;
  const next = idx >= 0 ? CHAPTERS_A[idx + 1] : undefined;
  return (
    <div className="space-y-5">
      <Link href="/fise" className="text-sm font-bold text-muted hover:text-ink">
        ← Fișe
      </Link>
      <div className="space-y-3">
        <Eyebrow>{chapter ? `${chapter.group} · clasa ${chapter.clasa}` : "Proba E.d"}</Eyebrow>
        <H1>{title}</H1>
        {chapter && (
          <div className="flex flex-wrap gap-2">
            {chapter.slots.map((s) => (
              <Chip key={s}>La Bac: {s}</Chip>
            ))}
          </div>
        )}
        {fisa.intro && <p className="max-w-2xl text-lg text-muted">{fisa.intro}</p>}
      </div>
      {fisa.blocks.map((b, i) => (
        <BlockView key={i} b={b} />
      ))}
      <div className="flex flex-wrap gap-3 pt-2">
        {chapter && (
          <LinkButton href={`/exersare?cap=${chapter.code}`} variant="accent">
            Exersează capitolul
          </LinkButton>
        )}
        {chapter && (
          <LinkButton href={`/capitole/${chapter.slug}`} variant="ghost">
            Fișa de concepte
          </LinkButton>
        )}
        {!chapter && (
          <LinkButton href="/simulari" variant="accent">
            Încearcă o simulare
          </LinkButton>
        )}
      </div>
      {chapter && (
        <nav aria-label="Capitole vecine" className="flex justify-between gap-3 border-t border-line pt-4 text-sm font-bold">
          {prev ? <Link href={`/fise/${prev.slug}`}>← {prev.short}</Link> : <span />}
          {next ? <Link href={`/fise/${next.slug}`}>{next.short} →</Link> : <span />}
        </nav>
      )}
    </div>
  );
}
