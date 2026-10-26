import Link from "next/link";
import { Logo } from "@/components/Logo";
import { LinkButton, Chip, Card, NumBadge } from "@/components/ui";

const POINTS = [
  { n: "1", t: "Înveți ce contează azi", d: "Un plan de 10–30 de minute, făcut din ce ai uitat și ce n-ai văzut încă." },
  { n: "2", t: "Fiecare greșeală are un motiv", d: "Aflii de ce ai ales varianta greșită, nu doar care e cea corectă." },
  { n: "3", t: "Simulări cu notă reală", d: "Subiecte în formatul probei E.d: 90 de puncte + 10 din oficiu, nota la final." },
  { n: "4", t: "Probleme care nu se termină", d: "Calcule în lanț și genetică, generate la nesfârșit, cu rezolvarea pas cu pas." },
];

export default function Home() {
  return (
    <div className="min-h-dvh">
      <header className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Logo height={30} />
        <Link href="/azi" className="rounded-full border-2 border-line px-4 py-2 text-sm font-bold">
          Intră în aplicație
        </Link>
      </header>
      <section className="mx-auto max-w-5xl px-4 pb-14 pt-10 sm:pt-16">
        <Chip tone="sage">Biologie · Bacalaureat</Chip>
        <h1 className="mt-5 max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-7xl">Biologia are sens.</h1>
        <p className="mt-5 max-w-xl text-xl text-muted">Clar. Logic. Pe înțeles. Înveți singur, în ritmul tău, fără meditator și fără să memorezi pe nepusă masă.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <LinkButton href="/start" variant="accent">
            Începe gratuit
          </LinkButton>
          <LinkButton href="/simulari" variant="ghost">
            Încearcă o simulare
          </LinkButton>
        </div>
      </section>
      <section className="mx-auto grid max-w-5xl gap-4 px-4 pb-16 sm:grid-cols-2">
        {POINTS.map((p) => (
          <Card key={p.n} className="flex gap-4">
            <NumBadge>{p.n}</NumBadge>
            <div>
              <h2 className="text-lg font-extrabold">{p.t}</h2>
              <p className="mt-1 text-muted">{p.d}</p>
            </div>
          </Card>
        ))}
      </section>
      <footer className="border-t border-line px-4 py-8 text-center text-sm text-muted">
        <p>BacLab · Înveți cu sens.</p>
        <p className="mt-1">Conținutul este în curs de validare de specialiști; nu înlocuiește manualele și programa oficială.</p>
      </footer>
    </div>
  );
}
