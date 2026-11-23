"use client";
import Link from "next/link";
import { useMemo, useState } from "react";

export interface TermenGlosar {
  term: string;
  definition: string;
  chapter: string;
  chapterShort: string;
  chapterSlug: string;
}

const fara = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

/** Glosarul tuturor capitolelor, cu căutare fără diacritice (merge și „tesut”, și „țesut”). */
export function Glosar({ termeni }: { termeni: TermenGlosar[] }) {
  const [q, setQ] = useState("");
  const gasite = useMemo(() => {
    const c = fara(q.trim());
    return c ? termeni.filter((t) => fara(t.term).includes(c) || fara(t.definition).includes(c)) : termeni;
  }, [q, termeni]);

  return (
    <div className="space-y-4">
      <label className="block">
        <span className="sr-only">Caută în glosar</span>
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Caută un termen: mitoză, nefron, alelă…"
          className="min-h-12 w-full rounded-full border-2 border-line bg-surface px-5 text-base outline-none focus:border-ink/40"
        />
      </label>
      <p className="text-sm text-muted" aria-live="polite">
        {gasite.length} {gasite.length === 1 ? "termen" : "termeni"}
      </p>
      <dl className="divide-y divide-line rounded-2xl border border-line bg-surface">
        {gasite.map((t) => (
          <div key={`${t.chapter}-${t.term}`} className="p-4">
            <dt className="flex flex-wrap items-baseline justify-between gap-2">
              <span className="font-bold">{t.term}</span>
              <Link href={`/lectii/${t.chapterSlug}`} className="text-xs font-bold uppercase tracking-wide text-muted hover:text-ink">
                {t.chapter} · {t.chapterShort}
              </Link>
            </dt>
            <dd className="mt-1 text-muted">{t.definition}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
