"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CHAPTER_BY_CODE } from "@/content/chapters";
import { Button, Card, Chip, ErrorBox, Eyebrow, H1, Loading, LinkButton, cx } from "./ui";
import { canOpenExam } from "@/lib/access";
import { loadPaper, usePromise } from "@/lib/client/content";
import { useStore } from "@/lib/client/store";
import type { Paper, Part } from "@/lib/exam/types";
import { afKey, afTextKey, mcqKey, scorePaper, subKey, criterionKey, weakestChapters } from "@/lib/exam/scoring";
import { finishSim, startSim, updateSim, type SimRun } from "@/lib/state";
import { solveChain } from "@/lib/lab/chain";
import { fmt } from "@/lib/frac";

const L = ["a", "b", "c", "d"];
const comma = (n: number) => String(Math.round(n * 100) / 100).replace(".", ",");

export function SimRunner({ id }: { id: string }) {
  const { data: paper, error } = usePromise(() => loadPaper(id), [id]);
  const { state, update } = useStore();
  const [done, setDone] = useState<SimRun | null>(null);

  if (error) return <ErrorBox>Subiectul nu a fost găsit.</ErrorBox>;
  if (!paper) return <Loading />;
  if (!canOpenExam(id))
    return (
      <Card className="mx-auto max-w-xl text-center">
        <p className="text-lg font-bold">Acest subiect face parte din planul complet.</p>
        <div className="mt-4">
          <LinkButton href="/simulari">Înapoi la simulări</LinkButton>
        </div>
      </Card>
    );

  if (done) return <Result run={done} paper={paper} />;

  const active = state.activeSim?.paperId === id ? state.activeSim : null;
  if (!active) {
    return (
      <div className="mx-auto max-w-xl space-y-4">
        <Link href="/simulari" className="text-sm font-bold text-muted hover:text-ink">← Simulări</Link>
        <Eyebrow>{paper.year}</Eyebrow>
        <H1>{paper.title}</H1>
        <Card className="space-y-3">
          <ul className="list-disc space-y-1 pl-5">
            <li>Timp de lucru: {paper.durationMin / 60} ore.</li>
            <li>Toate subiectele sunt obligatorii. Se acordă 10 puncte din oficiu.</li>
            <li>La final te autoevaluezi, apoi primești nota.</li>
          </ul>
          {paper.note && <p className="text-sm text-muted">{paper.note}</p>}
          {state.activeSim && <p className="rounded-xl bg-bad-soft p-3 text-sm text-bad">Ai altă simulare începută. Dacă începi aceasta, cea veche se pierde.</p>}
          <Button variant="accent" onClick={() => update((s) => startSim(s, id, new Date()))}>
            Începe simularea
          </Button>
        </Card>
      </div>
    );
  }

  const submitPaper = () => update((s) => updateSim(s, (a) => {
    if (a.paperId !== id || a.phase !== "run") return a;
    const deadline = new Date(a.startedAt).getTime() + paper.durationMin * 60_000;
    return { ...a, phase: "grade", submittedAt: new Date(Math.min(Date.now(), deadline)).toISOString() };
  }));
  const setAnswer = (key: string, v: string | number) => update((s) => updateSim(s, (a) => {
    if (a.phase !== "run" || a.paperId !== id) return a;
    const deadline = new Date(a.startedAt).getTime() + paper.durationMin * 60_000;
    if (Date.now() >= deadline) return { ...a, phase: "grade", submittedAt: new Date(deadline).toISOString() };
    return { ...a, answers: { ...a.answers, [key]: v } };
  }));
  const setGrade = (key: string, v: number) => update((s) => updateSim(s, (a) => ({ ...a, grades: { ...a.grades, [key]: v } })));

  if (active.phase === "run") {
    return (
      <div className="space-y-6">
        <TimerBar startedAt={active.startedAt} minutes={paper.durationMin} onExpire={submitPaper} />
        <H1>{paper.title}</H1>
        {paper.parts.map((p) => (
          <PartRun key={p.id} part={p} answers={active.answers} onAnswer={setAnswer} />
        ))}
        <div className="flex flex-wrap gap-3">
          <Button variant="accent" onClick={submitPaper}>
            Predau lucrarea
          </Button>
          <Button variant="ghost" onClick={() => update((s) => ({ ...s, activeSim: null }))}>
            Renunț
          </Button>
        </div>
      </div>
    );
  }

  // autoevaluare
  const finish = () => {
    const sc = scorePaper(paper, active.answers, active.grades);
    const run: SimRun = {
      runId: `${id}-${Date.now()}`,
      paperId: id,
      title: paper.title,
      startedAt: active.startedAt,
      finishedAt: new Date().toISOString(),
      points: sc.points,
      max: sc.max,
      nota: sc.nota,
      passed: sc.passed,
      rubricVerified: paper.rubricVerified === true,
      timed: Boolean(active.submittedAt),
      bySubject: sc.bySubject,
      byChapter: sc.byChapter,
    };
    update((s) => finishSim(s, run, weakestChapters(sc)));
    setDone(run);
  };

  return (
    <div className="space-y-6">
      <Eyebrow>Autoevaluare</Eyebrow>
      <H1>Compară cu răspunsul model</H1>
      <p className="max-w-xl text-muted">Compară răspunsul tău cu fiecare criteriu. Nota este de antrenament, bazată parțial pe autoevaluare. {paper.rubricVerified ? "Criteriile și punctajele au fost confruntate cu baremul oficial." : "Acest subiect are încă punctaje orientative."}</p>
      {paper.parts.map((p) => (
        <PartGrade key={p.id} part={p} answers={active.answers} grades={active.grades} onGrade={setGrade} />
      ))}
      <Button variant="accent" onClick={finish}>
        Vezi nota
      </Button>
    </div>
  );
}

function TimerBar({ startedAt, minutes, onExpire }: { startedAt: string; minutes: number; onExpire: () => void }) {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    const tick = () => {
      const current = Date.now();
      setNow(current);
      if (current >= new Date(startedAt).getTime() + minutes * 60_000) onExpire();
    };
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, [startedAt, minutes, onExpire]);
  if (now === null) return null;
  const left = Math.max(0, minutes * 60_000 - (now - new Date(startedAt).getTime()));
  const h = Math.floor(left / 3_600_000);
  const m = Math.floor((left % 3_600_000) / 60_000);
  return (
    <div className="sticky top-14 z-10 -mx-4 border-b border-line bg-bg/95 px-4 py-2 text-sm font-bold backdrop-blur">
      Timp rămas: <span className="tabnum">{h} h {String(m).padStart(2, "0")} min</span>
      {left === 0 && <span className="ml-2 text-bad">Timpul a expirat; poți totuși preda.</span>}
    </div>
  );
}

function PartHead({ part }: { part: Part }) {
  return (
    <div className="space-y-1">
      <div className="flex flex-wrap items-center gap-2">
        <Chip tone="lime">{part.id}</Chip>
        <Chip>{part.points} p</Chip>
      </div>
      <h2 className="text-xl font-extrabold">{part.title}</h2>
      {part.intro && <p className="text-muted">{part.intro}</p>}
    </div>
  );
}

function PartRun({ part, answers, onAnswer }: { part: Part; answers: Record<string, string | number>; onAnswer: (k: string, v: string | number) => void }) {
  return (
    <Card className="space-y-4">
      <PartHead part={part} />
      {part.kind === "mcq" &&
        part.items.map((it, i) => (
          <fieldset key={i} className="space-y-2">
            <legend className="font-bold">
              {i + 1}. {it.q}
            </legend>
            {it.options.map((o, k) => (
              <label key={k} className={cx("flex cursor-pointer items-start gap-3 rounded-xl border-2 p-3", answers[mcqKey(part, i)] === k ? "border-ink bg-accent/40" : "border-line")}>
                <input type="radio" name={mcqKey(part, i)} checked={answers[mcqKey(part, i)] === k} onChange={() => onAnswer(mcqKey(part, i), k)} className="mt-1" />
                <span>
                  <b>{L[k]})</b> {o}
                </span>
              </label>
            ))}
          </fieldset>
        ))}
      {part.kind === "af" &&
        part.items.map((it, i) => (
          <div key={i} className="space-y-2">
            <p className="font-bold">
              {i + 1}. {it.q}
            </p>
            <div className="flex gap-3">
              {(["A", "F"] as const).map((v) => (
                <button key={v} type="button" aria-pressed={answers[afKey(part, i)] === v} onClick={() => onAnswer(afKey(part, i), v)} className={cx("min-h-12 w-16 rounded-xl border-2 text-lg font-extrabold", answers[afKey(part, i)] === v ? "border-ink bg-accent" : "border-line")}>
                  {v}
                </button>
              ))}
            </div>
            {answers[afKey(part, i)] === "F" && (
              <textarea aria-label={`Corectarea afirmației ${i + 1}`} placeholder="Scrie afirmația corectată (fără negație)" value={String(answers[afTextKey(part, i)] ?? "")} onChange={(e) => onAnswer(afTextKey(part, i), e.target.value)} className="min-h-20 w-full rounded-xl border-2 border-line bg-surface p-3" />
            )}
          </div>
        ))}
      {part.kind === "open" &&
        part.subs.map((s) => (
          <div key={s.id} className="space-y-2">
            <label htmlFor={subKey(part, s.id)} className="block font-bold">
              {s.id}) {s.prompt} <span className="font-normal text-muted">({s.points} p)</span>
            </label>
            <textarea id={subKey(part, s.id)} value={String(answers[subKey(part, s.id)] ?? "")} onChange={(e) => onAnswer(subKey(part, s.id), e.target.value)} className="min-h-24 w-full rounded-xl border-2 border-line bg-surface p-3" />
          </div>
        ))}
    </Card>
  );
}

function GradeButtons({ value, onChange, label, binary = false }: { value: number | undefined; onChange: (v: number) => void; label: string; binary?: boolean }) {
  const opts = [
    { v: 0, t: "Nu" },
    { v: 0.5, t: "Parțial" },
    { v: 1, t: "Da" },
  ];
  return (
    <div role="group" aria-label={label} className="flex gap-2">
      {opts.filter((o) => !binary || o.v !== 0.5).map((o) => (
        <button key={o.v} type="button" aria-pressed={value === o.v} onClick={() => onChange(o.v)} className={cx("min-h-11 rounded-full border-2 px-4 text-sm font-bold", value === o.v ? "border-ink bg-accent text-on-accent" : "border-line")}>
          {o.t}
        </button>
      ))}
    </div>
  );
}

function PartGrade({ part, answers, grades, onGrade }: { part: Part; answers: Record<string, string | number>; grades: Record<string, number>; onGrade: (k: string, v: number) => void }) {
  return (
    <Card className="space-y-4">
      <PartHead part={part} />
      {part.kind === "mcq" && (
        <ul className="space-y-2">
          {part.items.map((it, i) => {
            const a = answers[mcqKey(part, i)];
            const ok = a === it.correct;
            return (
              <li key={i} className={cx("rounded-xl p-3", ok ? "bg-good-soft" : "bg-bad-soft")}>
                <p className="font-bold">
                  {i + 1}. {it.q}
                </p>
                <p className="text-sm">
                  Răspunsul tău: {typeof a === "number" ? `${L[a]})` : "—"} · corect: {L[it.correct]}) {it.options[it.correct]}
                </p>
                {it.explanation && <p className="mt-1 text-sm text-muted">{it.explanation}</p>}
              </li>
            );
          })}
        </ul>
      )}
      {part.kind === "af" && (
        <ul className="space-y-3">
          {part.items.map((it, i) => {
            const a = answers[afKey(part, i)];
            const letterOk = it.truth ? a === "A" : a === "F";
            return (
              <li key={i} className={cx("space-y-2 rounded-xl p-3", letterOk ? "bg-good-soft" : "bg-bad-soft")}>
                <p className="font-bold">
                  {i + 1}. {it.q}
                </p>
                <p className="text-sm">
                  Răspunsul tău: {String(a ?? "—")} · corect: {it.truth ? "A" : "F"}
                </p>
                {!it.truth && (
                  <>
                    <p className="text-sm">
                      <b>Model:</b> {it.correction}
                    </p>
                    {letterOk && (
                      <>
                        <p className="text-sm">
                          Corectarea ta: <i>{String(answers[afTextKey(part, i)] ?? "—")}</i>
                        </p>
                        <GradeButtons binary label={`Corectarea afirmației ${i + 1}`} value={grades[afKey(part, i)]} onChange={(v) => onGrade(afKey(part, i), v)} />
                      </>
                    )}
                  </>
                )}
                {it.explanation && <p className="text-sm text-muted">{it.explanation}</p>}
              </li>
            );
          })}
        </ul>
      )}
      {part.kind === "open" &&
        part.subs.map((s) => {
          const sol = s.chain ? solveChain(s.chain) : null;
          return (
            <div key={s.id} className="space-y-2 rounded-xl bg-bg p-3">
              <p className="font-bold">
                {s.id}) {s.prompt} <span className="font-normal text-muted">({s.points} p)</span>
              </p>
              <p className="text-sm">
                <b>Răspunsul tău:</b> {String(answers[subKey(part, s.id)] ?? "").trim() || "—"}
              </p>
              <div className="text-sm">
                <b>Model:</b>
                <ul className="list-disc pl-5">
                  {s.model.map((m, k) => (
                    <li key={k}>{m}</li>
                  ))}
                </ul>
              </div>
              {sol && <p className="text-sm text-muted">Verificat în cod: {sol.steps.map((x) => fmt(x.after)).join(" → ")} {sol.unit}.</p>}
              {s.rubric ? s.rubric.map((c) => <fieldset key={c.id} className="space-y-2 border-t border-line pt-3"><legend className="text-sm font-bold">{c.label} · {c.points} p</legend><div className="flex flex-wrap gap-2">{(c.allowed ?? [0, c.points]).map((points) => <button type="button" key={points} aria-pressed={grades[criterionKey(part, s.id, c.id)] === points} onClick={() => onGrade(criterionKey(part, s.id, c.id), points)} className={cx("min-h-11 rounded-full border-2 px-4 text-sm font-bold", grades[criterionKey(part, s.id, c.id)] === points ? "border-ink bg-accent text-on-accent" : "border-line")}>{points} p</button>)}</div></fieldset>) : <GradeButtons label={`Cât ai acoperit la ${s.id}`} value={grades[subKey(part, s.id)]} onChange={(v) => onGrade(subKey(part, s.id), v)} />}
            </div>
          );
        })}
    </Card>
  );
}

function Result({ run, paper }: { run: SimRun; paper: Paper }) {
  const weak = Object.entries(run.byChapter)
    .filter(([c, e]) => c !== "—" && e.max > 0 && e.max - e.got > 0.001)
    .sort((a, b) => b[1].max - b[1].got - (a[1].max - a[1].got))
    .slice(0, 4);
  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <Eyebrow>{paper.title}</Eyebrow>
      <Card className="space-y-2 text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-muted">Nota ta</p>
        <p className="text-7xl font-extrabold tabnum">{comma(run.nota)}</p>
        <p className="text-muted tabnum">
          {comma(run.points)} din {run.max} de puncte + 10 din oficiu
        </p>
        <p className={cx("font-extrabold", run.passed ? "text-good" : "text-bad")}>{run.passed ? "Promovat (≥ 5)" : "Sub pragul de promovare"}</p>
      </Card>
      <Card className="space-y-2">
        <h2 className="font-extrabold">Pe subiecte</h2>
        {Object.entries(run.bySubject).map(([k, v]) => (
          <p key={k} className="flex justify-between tabnum">
            <span>Subiectul {k}</span>
            <span>
              {comma(v.got)} / {v.max}
            </span>
          </p>
        ))}
      </Card>
      {weak.length > 0 && (
        <Card className="space-y-3">
          <h2 className="font-extrabold">Unde ai pierdut cele mai multe puncte</h2>
          <ul className="space-y-2">
            {weak.map(([c, e]) => (
              <li key={c} className="flex items-center justify-between gap-3">
                <span>{CHAPTER_BY_CODE[c]?.short ?? c}</span>
                <span className="text-sm text-muted tabnum">−{comma(e.max - e.got)} p</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-muted">Aceste capitole au intrat cu prioritate în planul zilnic.</p>
        </Card>
      )}
      <div className="flex flex-wrap gap-3">
        <LinkButton href="/azi" variant="accent">
          Planul de azi
        </LinkButton>
        <LinkButton href="/simulari" variant="ghost">
          Alte simulări
        </LinkButton>
      </div>
    </div>
  );
}
