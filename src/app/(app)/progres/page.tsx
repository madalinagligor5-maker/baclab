"use client";
import Link from "next/link";
import { CHAPTERS_A } from "@/content/chapters";
import { Card, ErrorBox, Eyebrow, H1, Loading, Progress, Stat } from "@/components/ui";
import { useBank } from "@/lib/client/content";
import { useStore } from "@/lib/client/store";
import { formatDayRo, todayStr } from "@/lib/dates";
import { chapterStats } from "@/lib/mastery";
import { computeStreak } from "@/lib/state";

export default function Progres() {
  const { items, error } = useBank();
  const { state } = useStore();
  if (error) return <ErrorBox>Conținutul nu s-a putut încărca.</ErrorBox>;
  if (!items) return <Loading />;
  const today = todayStr();
  const stats = chapterStats(CHAPTERS_A, items, state.cards, state.attempts, today);
  const withItems = CHAPTERS_A.filter((c) => (stats[c.code]?.total ?? 0) > 0);
  const totalItems = withItems.reduce((a, c) => a + (stats[c.code]?.total ?? 0), 0);
  const mastery = totalItems ? withItems.reduce((a, c) => a + (stats[c.code]?.mastery ?? 0) * (stats[c.code]?.total ?? 0), 0) / totalItems : 0;
  const streak = computeStreak(state, today);
  const sorted = [...withItems].sort((a, b) => (stats[a.code]?.mastery ?? 0) - (stats[b.code]?.mastery ?? 0));

  return (
    <div className="space-y-6">
      <div>
        <Eyebrow>Cât ai fixat până acum</Eyebrow>
        <H1>Progres</H1>
      </div>
      <Card className="grid grid-cols-3 gap-4">
        <Stat value={`${Math.round(mastery * 100)}%`} label="stăpânire" />
        <Stat value={streak.current} label="zile la rând" />
        <Stat value={state.attempts.length} label="răspunsuri" />
      </Card>
      <section className="space-y-3">
        <h2 className="text-lg font-extrabold">Capitole, de la cele mai slabe</h2>
        <ul className="space-y-3">
          {sorted.map((c) => {
            const s = stats[c.code]!;
            return (
              <li key={c.code}>
                <Link href={`/capitole/${c.slug}`} className="block rounded-2xl border border-line bg-surface p-4 hover:border-ink/40">
                  <div className="mb-2 flex justify-between gap-3">
                    <span className="font-bold">{c.short}</span>
                    <span className="text-sm text-muted tabnum">{Math.round(s.mastery * 100)}%{s.accuracy !== null && ` · acuratețe ${Math.round(s.accuracy * 100)}%`}</span>
                  </div>
                  <Progress value={s.mastery} label={c.short} />
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
      <section className="space-y-3">
        <h2 className="text-lg font-extrabold">Simulări</h2>
        {state.sims.length === 0 ? (
          <p className="text-muted">Încă nu ai făcut nicio simulare. <Link href="/simulari" className="font-bold underline">Încearcă una.</Link></p>
        ) : (
          <ul className="space-y-2">
            {[...state.sims].reverse().map((r) => (
              <li key={r.runId} className="flex justify-between gap-3 rounded-2xl border border-line bg-surface p-4">
                <span>
                  <span className="font-bold">{r.title}</span>
                  <span className="block text-sm text-muted">{formatDayRo(r.finishedAt.slice(0, 10))}</span>
                </span>
                <span className="text-2xl font-extrabold tabnum">{r.nota.toFixed(2).replace(".", ",")}</span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
