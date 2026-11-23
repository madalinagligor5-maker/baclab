import Link from "next/link";
import { chapterGroups } from "@/content/chapters";
import { cartonaseCapitol } from "@/content/materiale";
import { Eyebrow, H1, NumBadge } from "@/components/ui";

export const metadata = { title: "Cartonașe" };

export default function CartonasePage() {
  return (
    <div className="space-y-8">
      <div>
        <Eyebrow>Recuperare activă</Eyebrow>
        <H1>Cartonașe</H1>
        <p className="mt-2 max-w-xl text-muted">
          Întrebări scurte și definiții, câte un pachet pe capitol. Răspunzi în gând, întorci cartonașul și spui sincer dacă ai știut: ce nu știi revine până îl fixezi.
        </p>
      </div>
      {chapterGroups().map((g) => (
        <section key={g.group}>
          <h2 className="mb-3 text-sm font-bold uppercase tracking-widest text-muted">{g.group}</h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {g.chapters.map((c) => {
              const n = cartonaseCapitol(c.code).length;
              if (n === 0) return null;
              return (
                <li key={c.code}>
                  <Link href={`/cartonase/${c.slug}`} className="flex h-full gap-3 rounded-2xl border border-line bg-surface p-4 hover:border-ink/40">
                    <NumBadge>{Number(c.code.slice(1))}</NumBadge>
                    <div>
                      <p className="font-bold leading-snug">{c.short}</p>
                      <p className="mt-1 text-sm text-muted">{n} cartonașe</p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}
