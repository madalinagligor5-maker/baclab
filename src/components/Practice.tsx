"use client";
import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { CHAPTERS_A, CHAPTER_BY_CODE } from "@/content/chapters";
import { useBank } from "@/lib/client/content";
import { useStore } from "@/lib/client/store";
import { todayStr } from "@/lib/dates";
import { buildChapterSession, buildMixedSession, buildPlan, buildReviewSession } from "@/lib/plan";
import { canOpenChapter } from "@/lib/access";
import { wrongItems } from "@/lib/diagnostic";
import type { Item } from "@/lib/content/types";
import { ErrorBox, Loading, LinkButton, Card } from "./ui";
import { Session } from "./Session";

export function Practice() {
  const sp = useSearchParams();
  const mode = sp.get("mod") ?? "azi";
  const cap = sp.get("cap");
  const { items, error } = useBank();
  const { state } = useStore();

  // sesiunea se construiește o singură dată, la încărcarea itemilor (altfel s-ar schimba pe parcurs)
  const session = useMemo<{ list: Item[]; title: string; back: string } | null>(() => {
    if (!items) return null;
    const today = todayStr();
    if (cap) {
      const ch = CHAPTER_BY_CODE[cap];
      if (!ch || !canOpenChapter(cap)) return { list: [], title: "Capitol", back: "/capitole" };
      return { list: buildChapterSession(cap, items, state.cards, today), title: ch.short, back: `/capitole/${ch.slug}` };
    }
    if (mode === "mixt") return { list: buildMixedSession(items, today), title: "Mix ca la Bac", back: "/azi" };
    if (mode === "greseli") return { list: wrongItems(items, state.attempts).slice(0, 15), title: "Greșelile mele", back: "/greseli" };
    if (mode === "recap") return { list: buildReviewSession(items, state.cards, today), title: "Recapitulare", back: "/azi" };
    const plan = buildPlan({
      items,
      chapters: CHAPTERS_A,
      cards: state.cards,
      attempts: state.attempts,
      sims: state.sims,
      profile: state.profile ?? { minutes: 20, examDate: null },
      focus: state.focus,
      today,
    });
    return { list: [...plan.reviews, ...plan.fresh], title: "Planul de azi", back: "/azi" };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, mode, cap]);

  if (error) return <ErrorBox>Conținutul nu s-a putut încărca. Verifică conexiunea și încearcă din nou.</ErrorBox>;
  if (!session) return <Loading />;
  if (session.list.length === 0 && cap && !canOpenChapter(cap))
    return (
      <Card className="mx-auto max-w-xl text-center">
        <p className="text-lg font-bold">Acest capitol face parte din planul complet.</p>
        <div className="mt-4">
          <LinkButton href="/capitole">Vezi capitolele gratuite</LinkButton>
        </div>
      </Card>
    );
  return <Session items={session.list} title={session.title} backHref={session.back} />;
}
