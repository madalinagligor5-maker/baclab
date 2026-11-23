import Link from "next/link";
import { chapterGroups } from "@/content/chapters";
import { LECTIE_BY_CODE } from "@/content/lectii";
import { Eyebrow, H1, NumBadge } from "@/components/ui";

export const metadata = { title: "Lecții" };

export default function Lectii() {
  return (
    <div className="space-y-8">
      <div>
        <Eyebrow>Învață teoria</Eyebrow>
        <H1>Lecții</H1>
        <p className="mt-2 max-w-xl text-muted">
          Fiecare capitol, explicat pe înțeles, cu imagini: ce trebuie să știi, ce reții și unde greșesc cei mai mulți elevi. După lecție, treci la cartonașe, fișe și exersare.
        </p>
        <nav aria-label="Materiale de sprijin" className="mt-4 flex flex-wrap gap-2">
          <Link href="/cartonase" className="rounded-full border-2 border-line bg-surface px-4 py-2 text-sm font-bold hover:border-ink/40">Cartonașe</Link>
          <Link href="/glosar" className="rounded-full border-2 border-line bg-surface px-4 py-2 text-sm font-bold hover:border-ink/40">Glosar</Link>
          <Link href="/confuzii" className="rounded-full border-2 border-line bg-surface px-4 py-2 text-sm font-bold hover:border-ink/40">Confuzii frecvente</Link>
        </nav>
      </div>
      {chapterGroups().map((g) => (
        <section key={g.group} aria-labelledby={`g-${g.group}`}>
          <h2 id={`g-${g.group}`} className="mb-3 text-sm font-bold uppercase tracking-widest text-muted">
            {g.group}
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {g.chapters
              .filter((c) => LECTIE_BY_CODE[c.code])
              .map((c) => (
                <li key={c.code}>
                  <Link href={`/lectii/${c.slug}`} className="flex h-full gap-3 rounded-2xl border border-line bg-surface p-4 hover:border-ink/40">
                    <NumBadge>{Number(c.code.slice(1))}</NumBadge>
                    <div>
                      <p className="font-bold leading-snug">{c.short}</p>
                      <p className="mt-1 text-sm text-muted">Clasa {c.clasa} · {LECTIE_BY_CODE[c.code]!.sectiuni.length} secțiuni</p>
                    </div>
                  </Link>
                </li>
              ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
