"use client";
import { CHAPTER_BY_CODE } from "@/content/chapters";
import { useBank } from "@/lib/client/content";
import { useStore } from "@/lib/client/store";
import { wrongItems } from "@/lib/diagnostic";
import { Card, ErrorBox, H1, LinkButton, Loading } from "@/components/ui";
export default function Greseli() {
  const { items, error } = useBank();
  const { state } = useStore();
  if (error) return <ErrorBox>Nu am putut încărca întrebările.</ErrorBox>;
  if (!items) return <Loading />;
  const list = wrongItems(items, state.attempts);
  return <div className="space-y-5"><H1>Greșelile mele</H1><p>Întrebări la care ultimul răspuns corectat automat a fost greșit. O nouă rezolvare corectă le scoate din această listă.</p>{list.length > 0 ? <><LinkButton href="/exersare?mod=greseli" variant="accent">Reiau până la 15 întrebări</LinkButton><ul className="space-y-3">{list.map((i) => <li key={i.id}><Card><p className="text-sm text-muted">{CHAPTER_BY_CODE[i.chapter]?.short}</p><h2 className="font-bold">{i.q}</h2><p className="mt-2 text-sm">Recapitulare programată: {state.cards[i.id]?.due ?? "—"}</p></Card></li>)}</ul></> : <Card>Nu ai greșeli nerezolvate în istoricul disponibil. Poți începe cu diagnosticul.</Card>}<LinkButton href="/diagnostic" variant="ghost">Test diagnostic</LinkButton></div>;
}
