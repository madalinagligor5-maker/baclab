"use client";
import { useMemo } from "react";
import { CHAPTER_BY_CODE, CHAPTERS_A } from "@/content/chapters";
import { Card, Chip, ErrorBox, Eyebrow, H1, LinkButton, Loading, Stat } from "@/components/ui";
import { useBank } from "@/lib/client/content";
import { useStore } from "@/lib/client/store";
import { formatDayRo, todayStr } from "@/lib/dates";
import { buildPlan } from "@/lib/plan";
import { computeStreak, attemptsOn } from "@/lib/state";

export default function Azi() {
  const { items, error } = useBank();
  const { state } = useStore();
  const today = todayStr();
  const plan = useMemo(
    () =>
      items
        ? buildPlan({ items, chapters: CHAPTERS_A, cards: state.cards, attempts: state.attempts, sims: state.sims, profile: state.profile ?? { minutes: 20, examDate: null }, focus: state.focus, today })
        : null,
    [items, state.cards, state.attempts, state.sims, state.profile, state.focus, today],
  );
  const streak = computeStreak(state, today);
  const doneToday = attemptsOn(state, today);

  if (error) return <ErrorBox>Conținutul nu s-a putut încărca.</ErrorBox>;
  if (!plan) return <Loading />;
  const total = plan.reviews.length + plan.fresh.length;

  return (
    <div className="space-y-6">
      <div>
        <Eyebrow>{formatDayRo(today)}</Eyebrow>
        <H1>Planul de azi</H1>
      </div>

      <Card className="space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <Stat value={plan.reviews.length} label="de recapitulat" />
          <Stat value={plan.fresh.length} label="noi" />
          <Stat value={`~${plan.minutes}`} label="minute" />
        </div>
        {plan.focusChapter && (
          <p className="text-muted">
            Capitol nou: <span className="font-bold text-ink">{CHAPTER_BY_CODE[plan.focusChapter]?.short}</span>
            {plan.weakChapter && plan.weakChapter !== plan.focusChapter && (
              <>
                {" "}
                · ai nevoie de mai multă atenție la <span className="font-bold text-ink">{CHAPTER_BY_CODE[plan.weakChapter]?.short}</span>
              </>
            )}
          </p>
        )}
        {total > 0 ? (
          <LinkButton href="/exersare?mod=azi" variant="accent" className="w-full sm:w-auto">
            {doneToday > 0 ? "Continuă" : "Începe"} · {total} întrebări
          </LinkButton>
        ) : (
          <p className="rounded-xl bg-good-soft p-3 font-bold text-good">Ești la zi. Poți face un mix sau o simulare.</p>
        )}
      </Card>

      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <Eyebrow>Serie</Eyebrow>
          <p className="mt-1 text-3xl font-extrabold tabnum">{streak.current} {streak.current === 1 ? "zi" : "zile"}</p>
          <p className="text-sm text-muted">{streak.activeToday ? "Ai exersat azi." : streak.current > 0 ? "Exersează azi ca să n-o pierzi." : "Începe una azi."}</p>
        </Card>
        <Card>
          <Eyebrow>Examen</Eyebrow>
          <p className="mt-1 text-3xl font-extrabold tabnum">{plan.examDays !== null && plan.examDays >= 0 ? `${plan.examDays} zile` : "—"}</p>
          <p className="text-sm text-muted">{state.profile?.examDate ? formatDayRo(state.profile.examDate) : "Setează data în Setări."}</p>
        </Card>
        <Card>
          <Eyebrow>Mix ca la Bac</Eyebrow>
          <p className="mt-1 text-sm text-muted">5 grile și 3 afirmații A/F, din capitole diferite.</p>
          <div className="mt-3">
            <LinkButton href="/exersare?mod=mixt" variant="ghost" className="min-h-10 px-4 text-sm">
              Pornește
            </LinkButton>
          </div>
        </Card>
      </div>

      {plan.suggestSim && (
        <Card className="flex flex-wrap items-center justify-between gap-3 bg-accent text-on-accent">
          <div>
            <Chip tone="plum">Recomandat</Chip>
            <p className="mt-2 text-lg font-extrabold">E momentul pentru o simulare.</p>
            <p>Vezi unde ești și ce capitole urmează în plan.</p>
          </div>
          <LinkButton href="/simulari">Alege subiectul</LinkButton>
        </Card>
      )}
    </div>
  );
}
