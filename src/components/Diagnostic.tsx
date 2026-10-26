"use client";
import { useState } from "react";
import { CHAPTERS_A, CHAPTER_BY_CODE } from "@/content/chapters";
import { useBank } from "@/lib/client/content";
import { useStore } from "@/lib/client/store";
import { diagnosticItems, diagnosticWeakChapters, isCorrect } from "@/lib/diagnostic";
import { recordAnswer } from "@/lib/state";
import { Button, Card, Chip, H1, LinkButton, Loading, ErrorBox, Progress, cx } from "./ui";

export function Diagnostic() {
  const { items, error } = useBank();
  const { state, update, ready } = useStore();
  const [picked, setPicked] = useState<number | boolean | null>(null);
  if (error) return <ErrorBox>Nu am putut încărca întrebările.</ErrorBox>;
  if (!items || !ready) return <Loading />;
  const run = state.diagnostic;
  const start = () => {
    const now = new Date().toISOString();
    update((s) => ({ ...s, diagnostic: { id: now, startedAt: now, finishedAt: null, itemIds: diagnosticItems(items, CHAPTERS_A, 1).map((i) => i.id), answers: {} } }));
    setPicked(null);
  };
  if (run && run.itemIds.some((id) => !items.some((i) => i.id === id))) return <Card className="space-y-3"><H1>Întrebările au fost actualizate.</H1><p>Reîncepe evaluarea cu banca actuală. Răspunsurile din exersare rămân în istoricul tău.</p><Button onClick={start}>Încep o evaluare nouă</Button></Card>;
  const question = run?.itemIds.map((id) => items.find((i) => i.id === id)).find((i) => i && run.answers[i.id] === undefined);
  const submit = () => {
    if (!run || !question || picked === null) return;
    const answer = picked;
    update((s) => {
      if (!s.diagnostic || s.diagnostic.id !== run.id || s.diagnostic.finishedAt) return s;
      const current = s.diagnostic;
      if (current.answers[question.id] !== undefined) return s;
      const next = { ...current, answers: { ...current.answers, [question.id]: answer }, itemIds: [...current.itemIds] };
      // Follow up a mistake with a different item in that chapter. Max three per chapter.
      const chapterCount = next.itemIds.filter((id) => items.find((i) => i.id === id)?.chapter === question.chapter).length;
      if (!isCorrect(question, answer) && chapterCount < 3) {
        const followup = diagnosticItems(items, CHAPTERS_A, 6).find((i) => i.chapter === question.chapter && !next.itemIds.includes(i.id));
        if (followup) next.itemIds.push(followup.id);
      }
      return { ...s, diagnostic: next };
    });
    setPicked(null);
  };
  const finish = () => {
    if (!run || question || run.finishedAt) return;
    update((s) => {
      if (!s.diagnostic || s.diagnostic.id !== run.id || s.diagnostic.finishedAt) return s;
      let next = s;
      const now = new Date();
      for (const id of run.itemIds) {
        const item = items.find((i) => i.id === id);
        if (!item) continue;
        const ok = isCorrect(item, run.answers[id]);
        next = recordAnswer(next, { item, ok, grade: ok ? 2 : 0, now });
      }
      return { ...next, focus: diagnosticWeakChapters(run, items), diagnostic: { ...run, finishedAt: now.toISOString() } };
    });
  };
  if (!run) return <div className="mx-auto max-w-2xl space-y-5">
    <Chip tone="sage">Biologie vegetală și animală · IX–X</Chip><H1>Descoperă ce merită reluat.</H1>
    <p>O întrebare din fiecare capitol disponibil. După o greșeală, primești o întrebare diferită din același capitol, dacă există în bancă. Poți întrerupe și continua pe acest dispozitiv.</p>
    <Card className="space-y-3"><p>Începem cu {diagnosticItems(items, CHAPTERS_A, 1).length} întrebări. Testul poate ajunge la cel mult {diagnosticItems(items, CHAPTERS_A, 3).length}, în funcție de răspunsuri. Nu este o simulare de Bac.</p><p className="text-sm text-muted">Banca beta nu este încă validată de un profesor. Raportul indică răspunsurile observate și semnale pentru recapitulare; nu măsoară exact nivelul întregului capitol.</p><Button onClick={start} variant="accent">Încep diagnosticul</Button></Card>
  </div>;
  if (run.finishedAt) {
    const tested = items.filter((i) => run.itemIds.includes(i.id));
    const wrong = tested.filter((i) => !isCorrect(i, run.answers[i.id]));
    return <div className="space-y-5"><H1>De aici începe planul tău.</H1>
      <Card className="space-y-3"><p className="text-xl font-bold">{tested.length - wrong.length} / {tested.length} răspunsuri corecte</p><p>Greșelile au intrat în recapitulare. Capitolele cu greșeli au prioritate la întrebările noi.</p><p className="text-sm text-muted">Rezultat de orientare pe un eșantion mic; nu este notă de Bac sau diagnostic psihometric validat.</p><LinkButton href="/azi" variant="accent">Vezi planul adaptat</LinkButton></Card>
      <h2 className="text-xl font-extrabold">Rezultatele, cu numărul de întrebări</h2>
      <div className="grid gap-3 sm:grid-cols-2">{CHAPTERS_A.map((ch) => {
        const list = tested.filter((i) => i.chapter === ch.code);
        const correct = list.filter((i) => isCorrect(i, run.answers[i.id])).length;
        return <Card key={ch.code}><p className="font-bold">{ch.short}</p><p>{list.length ? `${correct}/${list.length} corecte · ${Math.round(correct / list.length * 100)}% pe întrebările testate` : "Netestat"}</p><p className="text-sm text-muted">{list.length < 5 ? "Eșantion mic. Continuă evaluarea în exersare." : "Rezultat observat; nu echivalează cu stăpânirea capitolului."}</p></Card>;
      })}</div>
      {wrong.length > 0 && <section className="space-y-3"><h2 className="text-xl font-extrabold">Ce ai confundat</h2>{wrong.map((i) => <Card key={i.id} className="space-y-2"><p className="font-bold">{i.q}</p><p>Corect: {i.type === "grila" ? i.options?.[i.correct ?? 0] : i.truth ? "Adevărat" : i.correction}</p><p className="text-muted">{i.type === "grila" && typeof run.answers[i.id] === "number" ? i.wrongWhy?.[run.answers[i.id] as number] ?? i.explanation : i.explanation}</p></Card>)}</section>}
      <Button variant="ghost" onClick={start}>Începe o nouă evaluare</Button>
    </div>;
  }
  if (!question) return <Card className="space-y-4"><H1>Ai terminat întrebările.</H1><p>Rezultatele vor actualiza planul și recapitulările tale.</p><Button variant="accent" onClick={finish}>Vezi rezultatul și adaptează planul</Button></Card>;
  const count = Object.keys(run.answers).length;
  return <div className="mx-auto max-w-2xl space-y-4"><H1>Test diagnostic</H1><p>{count} răspunsuri salvate · {run.itemIds.length - count} rămase în acest moment</p><Progress value={count / run.itemIds.length} label="Progresul diagnosticului adaptiv" />
    <Card className="space-y-4"><Chip tone="sage">{CHAPTER_BY_CODE[question.chapter]?.short}</Chip><h2 className="text-xl font-bold">{question.q}</h2>
      <div className="grid gap-3">{(question.type === "grila" ? question.options?.map((label, value) => ({ label, value })) ?? [] : [{ label: "Adevărat", value: true }, { label: "Fals", value: false }]).map((option) => <button type="button" key={String(option.value)} aria-pressed={picked === option.value} onClick={() => setPicked(option.value)} className={cx("min-h-12 rounded-xl border-2 p-3 text-left", picked === option.value ? "border-ink bg-accent text-on-accent" : "border-line")}>{option.label}</button>)}</div>
      <Button disabled={picked === null} onClick={submit} variant="accent">Salvează răspunsul</Button>
    </Card><p className="text-sm text-muted">Explicațiile apar după încheierea evaluării. Răspunsurile sunt păstrate local.</p></div>;
}
