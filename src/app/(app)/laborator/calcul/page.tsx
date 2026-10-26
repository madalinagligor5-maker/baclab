"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Button, Card, Eyebrow, H1 } from "@/components/ui";
import { labRemaining } from "@/lib/access";
import { useStore } from "@/lib/client/store";
import { todayStr } from "@/lib/dates";
import { bumpLab, labCountToday } from "@/lib/state";
import { checkNumeric, generateChain } from "@/lib/lab/chain";

export default function Calcul() {
  const { state, update } = useStore();
  const today = todayStr();
  const [seed, setSeed] = useState(() => Math.floor(Math.random() * 1e6));
  const [input, setInput] = useState("");
  const [verdict, setVerdict] = useState<null | boolean>(null);
  const [reveal, setReveal] = useState(false);
  const prob = useMemo(() => generateChain(seed), [seed]);
  const left = labRemaining(labCountToday(state, today));

  const next = () => {
    update((s) => bumpLab(s, today));
    setSeed(Math.floor(Math.random() * 1e6));
    setInput("");
    setVerdict(null);
    setReveal(false);
  };

  if (left === 0)
    return (
      <Card className="mx-auto max-w-xl text-center">
        <p className="text-lg font-bold">Ai folosit problemele gratuite de azi.</p>
        <p className="mt-1 text-muted">Revino mâine sau deblochează accesul complet.</p>
        <Link href="/setari" className="mt-4 inline-block font-bold underline">Vezi planurile</Link>
      </Card>
    );

  return (
    <div className="mx-auto max-w-2xl space-y-5">
      <Link href="/laborator" className="text-sm font-bold text-muted hover:text-ink">← Laborator</Link>
      <Eyebrow>Calcul în lanț</Eyebrow>
      <H1>Calculează</H1>
      <Card className="space-y-4">
        {prob.statement.map((l, i) => (
          <p key={i} className={i === 0 ? "text-lg font-bold" : ""}>{l}</p>
        ))}
        <div className="flex flex-wrap items-end gap-3">
          <div>
            <label htmlFor="ans" className="block text-sm font-bold">Răspuns ({prob.solution.unit})</label>
            <input id="ans" inputMode="decimal" value={input} onChange={(e) => { setInput(e.target.value); setVerdict(null); }} className="mt-1 min-h-12 w-40 rounded-xl border-2 border-line bg-surface px-3 text-lg tabnum" />
          </div>
          <Button variant="accent" onClick={() => setVerdict(checkNumeric(input, prob.solution.final))}>Verifică</Button>
          <Button variant="ghost" onClick={() => setReveal(true)}>Arată rezolvarea</Button>
        </div>
        {verdict !== null && (
          <p aria-live="polite" className={verdict ? "font-extrabold text-good" : "font-extrabold text-bad"}>
            {verdict ? "Corect!" : "Nu e încă. Verifică fiecare procent, în ordine."}
          </p>
        )}
        {(reveal || verdict === true) && (
          <ol className="list-decimal space-y-1 rounded-xl bg-bg p-4 pl-8">
            {prob.solution.steps.map((s, i) => (
              <li key={i}>{s.text}</li>
            ))}
            <li className="font-bold">Răspuns: {prob.solution.finalText}</li>
          </ol>
        )}
      </Card>
      <Button onClick={next}>Altă problemă</Button>
    </div>
  );
}
