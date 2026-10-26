"use client";
import { useMemo, useState } from "react";
import type { Item } from "@/lib/content/types";
import { AUTO_GRADED, TYPE_LABEL } from "@/lib/content/types";
import { CHAPTER_BY_CODE } from "@/content/chapters";
import { gradeFromAnswer, type Grade } from "@/lib/srs";
import { recordAnswer } from "@/lib/state";
import { useStore } from "@/lib/client/store";
import { Button, Card, Chip, LinkButton, Progress, cx } from "./ui";

const LETTERS = ["a", "b", "c", "d"];

interface Result {
  item: Item;
  ok: boolean | null;
  grade: Grade;
}

/** Sesiune de exersare: o întrebare pe ecran, feedback imediat, notă pentru repetiția spațiată. */
export function Session({ items, title, backHref }: { items: Item[]; title: string; backHref: string }) {
  const { state, update } = useStore();
  const queue = useMemo(() => items, [items]);
  const [i, setI] = useState(0);
  const [results, setResults] = useState<Result[]>([]);
  const [picked, setPicked] = useState<number | boolean | null>(null);
  const [shown, setShown] = useState(false);

  if (queue.length === 0) {
    return (
      <Card className="text-center">
        <p className="text-lg font-bold">Nu ai nimic de făcut aici acum.</p>
        <p className="mt-1 text-muted">Revino mâine sau alege un capitol.</p>
        <div className="mt-4">
          <LinkButton href={backHref}>Înapoi</LinkButton>
        </div>
      </Card>
    );
  }

  if (i >= queue.length) return <Summary results={results} backHref={backHref} />;

  const item = queue[i] as Item;
  const ch = CHAPTER_BY_CODE[item.chapter];
  const prev = state.cards[item.id];
  const auto = AUTO_GRADED.includes(item.type);

  const commit = (ok: boolean | null, grade: Grade) => {
    update((s) => recordAnswer(s, { item, ok, grade, now: new Date() }));
    setResults((r) => [...r, { item, ok, grade }]);
    setPicked(null);
    setShown(false);
    setI((n) => n + 1);
  };

  const correctNow = item.type === "grila" ? picked === item.correct : item.type === "adevarat_fals" ? picked === item.truth : null;
  const answered = auto ? picked !== null : shown;

  return (
    <div className="mx-auto max-w-2xl space-y-4">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-bold text-muted">{title}</p>
        <p className="text-sm font-bold tabnum">
          {i + 1}/{queue.length}
        </p>
      </div>
      <Progress value={i / queue.length} label="Progresul sesiunii" />

      <Card className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Chip tone="sage">{ch?.short ?? item.chapter}</Chip>
          <Chip>{TYPE_LABEL[item.type]}</Chip>
        </div>
        <h2 className="text-xl font-bold leading-snug">{item.q}</h2>

        {item.type === "grila" && item.options && (
          <ul className="space-y-2">
            {item.options.map((o, k) => {
              const isPick = picked === k;
              const isRight = k === item.correct;
              const state_ = !answered ? "idle" : isRight ? "right" : isPick ? "wrong" : "dim";
              return (
                <li key={k}>
                  <button
                    type="button"
                    disabled={answered}
                    onClick={() => setPicked(k)}
                    className={cx(
                      "flex w-full items-start gap-3 rounded-xl border-2 p-3 text-left font-medium transition",
                      state_ === "idle" && "border-line hover:border-ink/40",
                      state_ === "right" && "border-good bg-good-soft",
                      state_ === "wrong" && "border-bad bg-bad-soft",
                      state_ === "dim" && "border-line opacity-60",
                    )}
                  >
                    <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-bg text-sm font-extrabold uppercase">{LETTERS[k]}</span>
                    <span>{o}</span>
                    {answered && isRight && <span className="sr-only"> (răspuns corect)</span>}
                  </button>
                </li>
              );
            })}
          </ul>
        )}

        {item.type === "adevarat_fals" && (
          <div className="grid grid-cols-2 gap-3">
            {[true, false].map((v) => {
              const isPick = picked === v;
              const isRight = v === item.truth;
              return (
                <button
                  key={String(v)}
                  type="button"
                  disabled={answered}
                  onClick={() => setPicked(v)}
                  className={cx(
                    "min-h-14 rounded-xl border-2 text-lg font-extrabold transition",
                    !answered && "border-line hover:border-ink/40",
                    answered && isRight && "border-good bg-good-soft",
                    answered && isPick && !isRight && "border-bad bg-bad-soft",
                    answered && !isPick && !isRight && "border-line opacity-60",
                  )}
                >
                  {v ? "Adevărat" : "Fals"}
                </button>
              );
            })}
          </div>
        )}

        {!auto && !shown && (
          <Button variant="accent" onClick={() => setShown(true)}>
            Arată răspunsul
          </Button>
        )}

        {answered && (
          <div className="space-y-3 rounded-xl bg-bg p-4" aria-live="polite">
            {auto && (
              <p className={cx("font-extrabold", correctNow ? "text-good" : "text-bad")}>{correctNow ? "Corect!" : "Nu chiar."}</p>
            )}
            {item.type === "adevarat_fals" && item.truth === false && item.correction && (
              <p>
                <span className="font-bold">Corectat: </span>
                {item.correction}
              </p>
            )}
            {!auto && item.model && (
              <ul className="list-disc space-y-1 pl-5">
                {item.model.map((m, k) => (
                  <li key={k}>{m}</li>
                ))}
              </ul>
            )}
            {item.type === "grila" && typeof picked === "number" && picked !== item.correct && item.wrongWhy?.[picked] && (
              <p>
                <span className="font-bold">De ce ai putut alege asta: </span>
                {item.wrongWhy[picked]}
              </p>
            )}
            {item.explanation && <p className="text-muted">{item.explanation}</p>}
          </div>
        )}

        {answered && auto && correctNow && (
          <div className="grid grid-cols-2 gap-3">
            <Button variant="ghost" onClick={() => commit(true, gradeFromAnswer({ correct: true, easy: false, prev }))}>
              Mi-a luat timp
            </Button>
            <Button variant="accent" onClick={() => commit(true, gradeFromAnswer({ correct: true, easy: true, prev }))}>
              Am știut ușor
            </Button>
          </div>
        )}
        {answered && auto && !correctNow && (
          <Button onClick={() => commit(false, 0)}>Continuă</Button>
        )}
        {answered && !auto && (
          <div>
            <p className="mb-2 text-sm font-bold text-muted">Cât de bine ai știut?</p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              <Button variant="ghost" onClick={() => commit(null, 0)}>
                Deloc
              </Button>
              <Button variant="ghost" onClick={() => commit(null, 1)}>
                Greu
              </Button>
              <Button variant="ghost" onClick={() => commit(null, 2)}>
                Bine
              </Button>
              <Button variant="accent" onClick={() => commit(null, 3)}>
                Ușor
              </Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}

function Summary({ results, backHref }: { results: Result[]; backHref: string }) {
  const auto = results.filter((r) => r.ok !== null);
  const ok = auto.filter((r) => r.ok).length;
  const wrong = results.filter((r) => r.grade === 0);
  return (
    <Card className="mx-auto max-w-2xl space-y-4 text-center">
      <p className="text-sm font-bold uppercase tracking-widest text-muted">Sesiune încheiată</p>
      <p className="text-5xl font-extrabold tabnum">{results.length}</p>
      <p className="text-muted">
        întrebări parcurse{auto.length > 0 && ` · ${ok} din ${auto.length} corecte`}
      </p>
      {wrong.length > 0 && (
        <p className="rounded-xl bg-bg p-3 text-sm">
          {wrong.length} {wrong.length === 1 ? "întrebare revine" : "întrebări revin"} mâine la recapitulare, ca să se fixeze.
        </p>
      )}
      <div className="flex flex-wrap justify-center gap-3">
        <LinkButton href={backHref}>Gata</LinkButton>
        <LinkButton href="/progres" variant="ghost">
          Vezi progresul
        </LinkButton>
      </div>
    </Card>
  );
}
