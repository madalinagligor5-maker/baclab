"use client";
import Link from "next/link";
import { CHAPTER_BY_CODE } from "@/content/chapters";
import { FISA_BY_CODE } from "@/content/fise";
import { LECTIE_BY_CODE } from "@/content/lectii";
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

      {LECTIE_BY_CODE[code] && (
        <Link href={`/lectii/${ch.slug}`} className="block">
          <Card className="flex items-center justify-between gap-3 bg-accent text-on-accent hover:brightness-95">
            <div>
              <p className="font-extrabold">Lecția</p>
              <p className="text-sm">Teoria capitolului, pe înțeles, cu ce reții și capcanele de la examen.</p>
            </div>
            <span aria-hidden className="text-2xl font-extrabold">→</span>
          </Card>
        </Link>
      )}

      {FISA_BY_CODE[code] && (
        <Link href={`/fise/${ch.slug}`} className="block">
          <Card className="flex items-center justify-between gap-3 hover:border-ink/40">
            <div>
              <p className="font-extrabold">Tabele și scheme</p>
              <p className="text-sm text-muted">Comparații și scheme pentru acest capitol.</p>
            </div>
            <span aria-hidden className="text-2xl font-extrabold">→</span>
          </Card>
        </Link>
      )}

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
