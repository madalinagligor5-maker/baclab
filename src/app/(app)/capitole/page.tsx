"use client";
import Link from "next/link";
import { chapterGroups } from "@/content/chapters";
import { CHAPTERS_A } from "@/content/chapters";
import { Card, Chip, ErrorBox, Eyebrow, H1, Loading, NumBadge, Progress } from "@/components/ui";
import { canOpenChapter } from "@/lib/access";
import { useBank } from "@/lib/client/content";
import { useStore } from "@/lib/client/store";
import { todayStr } from "@/lib/dates";
import { chapterStats } from "@/lib/mastery";

export default function Capitole() {
  const { items, error } = useBank();
  const { state } = useStore();
  if (error) return <ErrorBox>Conținutul nu s-a putut încărca.</ErrorBox>;
  if (!items) return <Loading />;
  const stats = chapterStats(CHAPTERS_A, items, state.cards, state.attempts, todayStr());

  return (
    <div className="space-y-8">
      <div>
        <Eyebrow>Modulul A · clasele IX–X</Eyebrow>
        <H1>Capitole</H1>
      </div>
      <Link href="/fise" className="block">
        <Card className="flex items-center justify-between gap-3 bg-accent text-on-accent hover:brightness-95">
          <div>
            <p className="text-lg font-extrabold">Fișe, tabele și scheme</p>
            <p>Recapitulare vizuală pe fiecare capitol.</p>
          </div>
          <span aria-hidden className="text-2xl font-extrabold">→</span>
        </Card>
      </Link>
      {chapterGroups().map((g) => (
        <section key={g.group} aria-labelledby={`g-${g.group}`}>
          <h2 id={`g-${g.group}`} className="mb-3 text-sm font-bold uppercase tracking-widest text-muted">
            {g.group}
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {g.chapters.map((c) => {
              const s = stats[c.code];
              const open = canOpenChapter(c.code);
              return (
                <li key={c.code}>
                  <Link href={`/capitole/${c.slug}`} className="flex h-full gap-3 rounded-2xl border border-line bg-surface p-4 hover:border-ink/40">
                    <NumBadge>{Number(c.code.slice(1))}</NumBadge>
                    <div className="min-w-0 flex-1 space-y-2">
                      <p className="font-bold leading-snug">{c.short}</p>
                      <div className="flex flex-wrap gap-2">
                        <Chip tone={c.clasa === "IX" ? "coral" : "sage"}>Clasa {c.clasa}</Chip>
                        {!open && <Chip tone="plum">Complet</Chip>}
                        {s && s.total === 0 && <Chip>În curând</Chip>}
                      </div>
                      {s && s.total > 0 && (
                        <>
                          <Progress value={s.mastery} label={`Stăpânire ${c.short}`} />
                          <p className="text-xs text-muted tabnum">
                            {s.seen}/{s.total} întrebări văzute{s.due > 0 && ` · ${s.due} de recapitulat`}
                          </p>
                        </>
                      )}
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
      <Card>
        <p className="font-bold">Modulul B (clasele XI–XII) urmează.</p>
        <p className="text-muted">Pentru moment este doar o hartă a conținutului.</p>
      </Card>
    </div>
  );
}
