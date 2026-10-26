"use client";
import Link from "next/link";
import { Card, Chip, ErrorBox, Eyebrow, H1, LinkButton, Loading } from "@/components/ui";
import { canOpenExam } from "@/lib/access";
import { loadPaperIndex, usePromise } from "@/lib/client/content";
import { useStore } from "@/lib/client/store";
import { formatDayRo } from "@/lib/dates";

export default function Simulari() {
  const { data, error } = usePromise(loadPaperIndex, []);
  const { state } = useStore();
  if (error) return <ErrorBox>Subiectele nu s-au putut încărca.</ErrorBox>;
  if (!data) return <Loading />;
  return (
    <div className="space-y-6">
      <div>
        <Eyebrow>Proba E.d · 3 ore · 90 + 10 puncte</Eyebrow>
        <H1>Simulări</H1>
        <p className="mt-2 max-w-xl text-muted">Rezolvă subiectul pe o foaie sau direct aici. La final te autoevaluezi pe baza răspunsului model și primești nota și capitolele de reluat.</p>
      </div>
      {state.activeSim && (
        <Card className="flex flex-wrap items-center justify-between gap-3 bg-accent text-on-accent">
          <p className="font-extrabold">Ai o simulare începută.</p>
          <LinkButton href={`/simulari/${state.activeSim.paperId}`}>Continuă</LinkButton>
        </Card>
      )}
      <ul className="grid gap-4 sm:grid-cols-2">
        {data.map((p) => {
          const runs = state.sims.filter((r) => r.paperId === p.id);
          const best = runs.length ? Math.max(...runs.map((r) => r.nota)) : null;
          const open = canOpenExam(p.id);
          return (
            <li key={p.id}>
              <Card className="flex h-full flex-col gap-3">
                <div className="flex flex-wrap gap-2">
                  <Chip tone={p.kind === "oficial" ? "sage" : "plain"}>{p.kind === "oficial" ? "Subiect oficial" : "Generat"}</Chip>
                  {!open && <Chip tone="plum">Complet</Chip>}
                </div>
                <h2 className="text-xl font-extrabold">{p.title}</h2>
                <p className="text-sm text-muted tabnum">
                  {p.durationMin / 60} ore{best !== null && ` · cea mai bună notă: ${best.toFixed(2).replace(".", ",")}`}
                </p>
                {runs.length > 0 && <p className="text-xs text-muted">Ultima dată: {formatDayRo((runs[runs.length - 1] as { finishedAt: string }).finishedAt.slice(0, 10))}</p>}
                <div className="mt-auto">
                  {open ? <LinkButton href={`/simulari/${p.id}`}>{runs.length ? "Din nou" : "Începe"}</LinkButton> : <Link href="/setari" className="text-sm font-bold underline">Deblochează</Link>}
                </div>
              </Card>
            </li>
          );
        })}
      </ul>
      <p className="text-sm text-muted">Răspunsurile model sunt scrise de autorii aplicației, nu sunt baremul oficial. Punctajul pe subcerințe este orientativ.</p>
    </div>
  );
}
