import Link from "next/link";
import { CHAPTERS_B_PLANNED, chapterGroups } from "@/content/chapters";
import { FISA_BY_CODE, FISE_B, fisaCount } from "@/content/fise";
import { Card, Eyebrow, H1, NumBadge } from "@/components/ui";

export const metadata = { title: "Fișe, tabele și scheme" };

export default function Fise() {
  return (
    <div className="space-y-8">
      <div>
        <Eyebrow>Recapitulare vizuală</Eyebrow>
        <H1>Fișe, tabele și scheme</H1>
        <p className="mt-2 max-w-xl text-muted">Tot ce trebuie comparat este în tabele, tot ce are ordine este în scheme. Folosește-le înainte de exersare sau în ultima seară dinaintea examenului.</p>
      </div>

      <Link href="/fise/proba" className="block">
        <Card className="flex items-center gap-4 bg-accent text-on-accent hover:brightness-95">
          <span className="text-3xl font-extrabold" aria-hidden>90+10</span>
          <div>
            <p className="text-lg font-extrabold">Structura probei E.d</p>
            <p>Cum arată subiectul și cum rezolvi calculul, genetica și minieseul.</p>
          </div>
        </Card>
      </Link>

      {chapterGroups().map((g) => (
        <section key={g.group} aria-labelledby={`g-${g.group}`}>
          <h2 id={`g-${g.group}`} className="mb-3 text-sm font-bold uppercase tracking-widest text-muted">
            {g.group}
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {g.chapters.map((c) => {
              const f = FISA_BY_CODE[c.code];
              const n = f ? fisaCount(f) : null;
              return (
                <li key={c.code}>
                  <Link href={`/fise/${c.slug}`} className="flex h-full gap-3 rounded-2xl border border-line bg-surface p-4 hover:border-ink/40">
                    <NumBadge>{Number(c.code.slice(1))}</NumBadge>
                    <div>
                      <p className="font-bold leading-snug">{c.short}</p>
                      <p className="mt-1 text-sm text-muted">
                        {n ? `${n.tables} ${n.tables === 1 ? "tabel" : "tabele"}${n.schemes ? ` · ${n.schemes} ${n.schemes === 1 ? "schemă" : "scheme"}` : ""}` : "Fișa de recapitulare"}
                      </p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      ))}

      <section aria-labelledby="g-modul-b">
        <h2 id="g-modul-b" className="mb-1 text-sm font-bold uppercase tracking-widest text-muted">
          Modulul B — în pregătire
        </h2>
        <p className="mb-3 max-w-2xl text-sm text-muted">
          Recapitulare pentru clasele a XI-a – a XII-a (anatomie, fiziologie, genetică). Nu am confirmat încă dacă și cum apare la proba ta, iar exersarea cu itemi nu este disponibilă. Verifică programa oficială și, dacă poți, conținutul cu profesorul.
        </p>
        <ul className="grid gap-3 sm:grid-cols-2">
          {CHAPTERS_B_PLANNED.filter((c) => FISE_B.some((f) => f.code === c.code)).map((c) => {
            const n = fisaCount(FISA_BY_CODE[c.code]!);
            return (
              <li key={c.code}>
                <Link href={`/fise/${c.code.toLowerCase()}`} className="flex h-full gap-3 rounded-2xl border border-dashed border-line bg-surface p-4 hover:border-ink/40">
                  <NumBadge>{Number(c.code.slice(1))}</NumBadge>
                  <div>
                    <p className="font-bold leading-snug">{c.title}</p>
                    <p className="mt-1 text-sm text-muted">
                      {n.tables} {n.tables === 1 ? "tabel" : "tabele"}
                      {n.schemes ? ` · ${n.schemes} ${n.schemes === 1 ? "schemă" : "scheme"}` : ""}
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
