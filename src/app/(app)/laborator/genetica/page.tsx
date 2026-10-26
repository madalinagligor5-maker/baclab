"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Button, Card, Chip, Eyebrow, H1, cx } from "@/components/ui";
import { labRemaining } from "@/lib/access";
import { useStore } from "@/lib/client/store";
import { todayStr } from "@/lib/dates";
import { bumpLab, labCountToday } from "@/lib/state";
import { phenoLabel } from "@/lib/lab/genetics";
import { generateGenetics, KIND_LABEL, type GeneticsKind, type GeneticsProblem } from "@/lib/lab/problems";

const KINDS: GeneticsKind[] = ["mono", "di-f2", "di-test"];
const norm = (s: string) => s.toLowerCase().replace(/\s+/g, "").replace(/,/g, ",");

export default function Genetica() {
  const { state, update } = useStore();
  const today = todayStr();
  const [kind, setKind] = useState<GeneticsKind>("mono");
  const [seed, setSeed] = useState(() => Math.floor(Math.random() * 1e6));
  const prob = useMemo(() => generateGenetics(kind, seed), [kind, seed]);
  const left = labRemaining(labCountToday(state, today));

  const again = () => {
    update((s) => bumpLab(s, today));
    setSeed(Math.floor(Math.random() * 1e6));
  };

  if (left === 0)
    return (
      <Card className="mx-auto max-w-xl text-center">
        <p className="text-lg font-bold">Ai folosit problemele gratuite de azi.</p>
        <Link href="/setari" className="mt-4 inline-block font-bold underline">Vezi planurile</Link>
      </Card>
    );

  return (
    <div className="mx-auto max-w-2xl space-y-5">
      <Link href="/laborator" className="text-sm font-bold text-muted hover:text-ink">← Laborator</Link>
      <Eyebrow>Genetică</Eyebrow>
      <H1>Rezolvă</H1>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Tipul problemei">
        {KINDS.map((k) => (
          <button key={k} type="button" aria-pressed={kind === k} onClick={() => { setKind(k); setSeed(Math.floor(Math.random() * 1e6)); }} className={cx("min-h-11 rounded-full border-2 px-4 text-sm font-bold", kind === k ? "border-ink bg-accent text-on-accent" : "border-line")}>
            {KIND_LABEL[k]}
          </button>
        ))}
      </div>
      <Problem key={`${kind}-${seed}`} prob={prob} />
      <Button onClick={again}>Altă problemă</Button>
    </div>
  );
}

function Problem({ prob }: { prob: GeneticsProblem }) {
  const [show, setShow] = useState(false);
  const [step, setStep] = useState(prob.steps.length - 1);
  const res = (prob.steps[step] ?? prob.steps[prob.steps.length - 1])!.cross;
  return (
    <>
      <Card className="space-y-2">
        {prob.statement.map((l, i) => (
          <p key={i} className={i === 0 ? "font-bold" : ""}>{l}</p>
        ))}
      </Card>
      <div className="space-y-3">
        {prob.questions.map((q, i) => (
          <Question key={i} q={q} />
        ))}
      </div>
      <Button variant="ghost" onClick={() => setShow((v) => !v)}>
        {show ? "Ascunde pătratul Punnett" : "Arată pătratul Punnett"}
      </Button>
      {show && (
        <Card className="space-y-3 overflow-x-auto">
          {prob.steps.length > 1 && (
            <div className="flex gap-2">
              {prob.steps.map((s, i) => (
                <button key={i} type="button" aria-pressed={step === i} onClick={() => setStep(i)} className={cx("rounded-full border-2 px-3 py-1 text-sm font-bold", step === i ? "border-ink bg-accent text-on-accent" : "border-line")}>
                  {s.label}
                </button>
              ))}
            </div>
          )}
          <p className="text-sm text-muted">
            {res.parents[0]} × {res.parents[1]}
          </p>
          <table className="punnett">
            <thead>
              <tr>
                <th aria-label="gameți" />
                {res.table.cols.map((c) => (
                  <th key={c}>{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {res.table.rows.map((r, ri) => (
                <tr key={r}>
                  <th>{r}</th>
                  {(res.table.cells[ri] ?? []).map((g, ci) => (
                    <td key={ci}>{g}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <ul className="space-y-1 text-sm">
            {res.phenotypes.map((p) => (
              <li key={p.cls}>
                <Chip tone="sage">{p.count}</Chip> {phenoLabel(p.cls, prob.loci)}
              </li>
            ))}
          </ul>
          <p className="text-sm">
            Raport fenotipic: <b>{res.ratioPheno}</b> · genotipic: <b>{res.ratioGeno}</b>
          </p>
        </Card>
      )}
    </>
  );
}

function Question({ q }: { q: GeneticsProblem["questions"][number] }) {
  const [v, setV] = useState("");
  const [state, setState] = useState<"idle" | "ok" | "no" | "shown">("idle");
  const check = () => setState(norm(v) === norm(q.answer) || norm(v.replace(/\s/g, "")) === norm(q.answer.replace(/,\s*/g, ",")) ? "ok" : "no");
  return (
    <Card className="space-y-2">
      <label htmlFor={q.prompt} className="block font-bold">{q.prompt}</label>
      <div className="flex flex-wrap gap-2">
        <input id={q.prompt} value={v} onChange={(e) => { setV(e.target.value); setState("idle"); }} className="min-h-11 w-48 rounded-xl border-2 border-line bg-surface px-3" />
        <Button variant="accent" className="min-h-11" onClick={check}>Verifică</Button>
        <Button variant="ghost" className="min-h-11" onClick={() => setState("shown")}>Răspuns</Button>
      </div>
      <div aria-live="polite">
        {state === "ok" && <p className="font-extrabold text-good">Corect!</p>}
        {state === "no" && <p className="font-extrabold text-bad">Mai încearcă (scrie gameții separați prin virgulă, raportul ca 9:3:3:1).</p>}
      </div>
      {(state === "shown" || state === "ok") && (
        <p className="rounded-xl bg-bg p-3 text-sm">
          <b>{q.answer}</b> — {q.why}
        </p>
      )}
    </Card>
  );
}
