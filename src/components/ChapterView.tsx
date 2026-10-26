"use client";
import Link from "next/link";
import { CHAPTER_BY_CODE } from "@/content/chapters";
import { Card, Chip, Eyebrow, H1, LinkButton, Progress } from "./ui";
import { canOpenChapter } from "@/lib/access";
import { useBank } from "@/lib/client/content";
import { useStore } from "@/lib/client/store";
import { todayStr } from "@/lib/dates";
import { chapterStats } from "@/lib/mastery";

export function ChapterView({ code }: { code: string }) {
  const ch = CHAPTER_BY_CODE[code];
  const { items } = useBank();
  const { state } = useStore();
  if (!ch) return null;
  const s = items ? chapterStats([ch], items, state.cards, state.attempts, todayStr())[code] : null;
  const open = canOpenChapter(code);
  return (
    <div className="space-y-6">
      <Link href="/capitole" className="text-sm font-bold text-muted hover:text-ink">
        ← Capitole
      </Link>
      <div className="space-y-3">
        <Eyebrow>
          {ch.group} · clasa {ch.clasa}
        </Eyebrow>
        <H1>{ch.title}</H1>
        <div className="flex flex-wrap gap-2">
          {ch.slots.map((x) => (
            <Chip key={x}>La Bac: {x}</Chip>
          ))}
        </div>
      </div>

      <Card className="space-y-3">
        {s && s.total > 0 ? (
          <>
            <Progress value={s.mastery} label="Stăpânire" />
            <p className="text-sm text-muted tabnum">
              {s.seen}/{s.total} întrebări văzute · {s.due} de recapitulat
              {s.accuracy !== null && ` · acuratețe ${Math.round(s.accuracy * 100)}%`}
            </p>
            {open ? (
              <LinkButton href={`/exersare?cap=${code}`} variant="accent" className="w-full sm:w-auto">
                Exersează capitolul
              </LinkButton>
            ) : (
              <p className="rounded-xl bg-bg p-3 font-bold">Acest capitol face parte din planul complet.</p>
            )}
          </>
        ) : (
          <p className="text-muted">Întrebările pentru acest capitol se adaugă în curând.</p>
        )}
      </Card>

      <section>
        <h2 className="mb-2 text-lg font-extrabold">Ideile mari</h2>
        <div className="flex flex-wrap gap-2">
          {ch.ideas.map((x) => (
            <Chip key={x} tone="sage">
              {x}
            </Chip>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-lg font-extrabold">Fișă de recapitulare</h2>
        <Card>
          <ul className="list-disc space-y-1.5 pl-5">
            {ch.concepts.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </Card>
      </section>

      {ch.prereq.length > 0 && (
        <p className="text-sm text-muted">
          Se sprijină pe:{" "}
          {ch.prereq.map((p, i) => (
            <span key={p}>
              {i > 0 && ", "}
              <Link className="font-bold underline" href={`/capitole/${p.toLowerCase()}`}>
                {CHAPTER_BY_CODE[p]?.short ?? p}
              </Link>
            </span>
          ))}
        </p>
      )}
    </div>
  );
}
