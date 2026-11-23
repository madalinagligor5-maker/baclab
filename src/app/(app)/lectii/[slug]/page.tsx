import Link from "next/link";
import { notFound } from "next/navigation";
import { CHAPTERS_A, CHAPTER_BY_SLUG } from "@/content/chapters";
import { LECTIE_BY_CODE } from "@/content/lectii";
import { FISA_BY_CODE } from "@/content/fise";
import { IMAGINI_LECTII } from "@/content/lectii/imagini";
import { LA_BAC } from "@/content/lectii/la-bac";
import { cartonaseCapitol, glosarCapitol, imagine } from "@/content/materiale";
import { Figura } from "@/components/Figura";
import { Card, Chip, Eyebrow, H1, LinkButton } from "@/components/ui";

export function generateStaticParams() {
  return CHAPTERS_A.filter((c) => LECTIE_BY_CODE[c.code]).map((c) => ({ slug: c.slug }));
}

async function resolve(params: Promise<{ slug: string }>) {
  const { slug } = await params;
  const chapter = CHAPTER_BY_SLUG[slug];
  const lectie = chapter ? LECTIE_BY_CODE[chapter.code] : undefined;
  if (!chapter || !lectie) notFound();
  return { chapter, lectie };
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { chapter } = await resolve(params);
  return { title: `Lecție: ${chapter.short}`, description: chapter.title };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { chapter, lectie } = await resolve(params);
  const idx = CHAPTERS_A.findIndex((c) => c.code === chapter.code);
  const prev = idx > 0 ? CHAPTERS_A[idx - 1] : undefined;
  const next = CHAPTERS_A[idx + 1];
  const figuri = (titlu: string) =>
    (IMAGINI_LECTII[chapter.code] ?? []).filter((f) => f.dupa === titlu).map((f) => imagine(f.slug)).filter((i) => i !== undefined);
  const termeni = glosarCapitol(chapter.code);
  const nrCartonase = cartonaseCapitol(chapter.code).length;
  const laBac = LA_BAC[chapter.code];
  return (
    <article className="space-y-6">
      <Link href="/lectii" className="text-sm font-bold text-muted hover:text-ink">
        ← Lecții
      </Link>
      <header className="space-y-3">
        <Eyebrow>
          {chapter.group} · clasa {chapter.clasa}
        </Eyebrow>
        <H1>{chapter.title}</H1>
        <div className="flex flex-wrap gap-2">
          {chapter.slots.map((s) => (
            <Chip key={s}>La Bac: {s}</Chip>
          ))}
        </div>
        <p className="max-w-2xl text-lg text-muted">{lectie.intro}</p>
      </header>

      {lectie.sectiuni.map((s) => (
        <section key={s.titlu} className="max-w-2xl space-y-2">
          <h2 className="text-xl font-extrabold">{s.titlu}</h2>
          {s.text?.map((p, i) => (
            <p key={i} className="leading-relaxed">
              {p}
            </p>
          ))}
          {s.puncte && (
            <ul className="list-disc space-y-1.5 pl-5 leading-relaxed">
              {s.puncte.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          )}
          {figuri(s.titlu).map((img) => (
            <Figura key={img.slug} imagine={img} className="!mt-4" />
          ))}
        </section>
      ))}

      <Card className="max-w-2xl space-y-2 bg-accent text-on-accent">
        <h2 className="text-lg font-extrabold">De reținut</h2>
        <ul className="list-disc space-y-1 pl-5">
          {lectie.retine.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </Card>

      <Card className="max-w-2xl space-y-2">
        <h2 className="text-lg font-extrabold">Capcane la examen</h2>
        <ul className="list-disc space-y-1 pl-5">
          {lectie.capcane.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </Card>

      {laBac && (
        <Card className="max-w-2xl space-y-2 border-coral">
          <h2 className="text-lg font-extrabold">Cum apare la Bac</h2>
          <p>{laBac}</p>
        </Card>
      )}

      {termeni.length > 0 && (
        <details className="max-w-2xl rounded-2xl border border-line bg-surface p-5">
          <summary className="cursor-pointer text-lg font-extrabold">Termeni-cheie ({termeni.length})</summary>
          <dl className="mt-3 space-y-3">
            {termeni.map((t) => (
              <div key={t.term}>
                <dt className="font-bold">{t.term}</dt>
                <dd className="text-muted">{t.definition}</dd>
              </div>
            ))}
          </dl>
        </details>
      )}

      <p className="max-w-2xl text-sm text-muted">Lecție de recapitulare, scrisă după programa și materialele de pregătire din proiect. Nu înlocuiește manualul. Verific-o cu profesorul tău.</p>

      <div className="flex flex-wrap gap-3">
        <LinkButton href={`/exersare?cap=${chapter.code}`} variant="accent">
          Exersează capitolul
        </LinkButton>
        {nrCartonase > 0 && (
          <LinkButton href={`/cartonase/${chapter.slug}`} variant="ghost">
            Cartonașe ({nrCartonase})
          </LinkButton>
        )}
        {FISA_BY_CODE[chapter.code] && (
          <LinkButton href={`/fise/${chapter.slug}`} variant="ghost">
            Tabele și scheme
          </LinkButton>
        )}
      </div>

      <nav aria-label="Lecții vecine" className="flex justify-between gap-3 border-t border-line pt-4 text-sm font-bold">
        {prev ? <Link href={`/lectii/${prev.slug}`}>← {prev.short}</Link> : <span />}
        {next ? <Link href={`/lectii/${next.slug}`}>{next.short} →</Link> : <span />}
      </nav>
    </article>
  );
}
