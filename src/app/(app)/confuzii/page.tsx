import Link from "next/link";
import { CHAPTERS_A } from "@/content/chapters";
import { CONFUZII } from "@/content/materiale";
import { Card, Chip, Eyebrow, H1 } from "@/components/ui";

export const metadata = { title: "Confuzii frecvente" };

export default function ConfuziiPage() {
  const grupe = CHAPTERS_A.map((ch) => ({ ch, confuzii: CONFUZII.filter((c) => c.chapters[0] === ch.code) })).filter((g) => g.confuzii.length > 0);
  return (
    <div className="space-y-8">
      <div>
        <Eyebrow>Unde greșesc cei mai mulți</Eyebrow>
        <H1>Confuzii frecvente</H1>
        <p className="mt-2 max-w-xl text-muted">
          {CONFUZII.length} de greșeli tipice la Bac, fiecare cu remedierea ei. Când alegi o variantă greșită la exersare, BacLab îți arată confuzia din spatele ei.
        </p>
      </div>
      {grupe.map(({ ch, confuzii }) => (
        <section key={ch.code} className="space-y-3">
          <h2 className="text-sm font-bold uppercase tracking-widest text-muted">
            <Link href={`/lectii/${ch.slug}`} className="hover:text-ink">
              {ch.code} · {ch.short}
            </Link>
          </h2>
          {confuzii.map((c) => (
            <Card key={c.code} className="space-y-2">
              <h3 className="text-lg font-extrabold">{c.title}</h3>
              <p>{c.desc}</p>
              <p className="rounded-xl bg-accent p-3 text-on-accent">
                <span className="font-bold">Ce faci: </span>
                {c.remedy}
              </p>
              {c.chapters.length > 1 && (
                <div className="flex flex-wrap gap-2">
                  {c.chapters.map((code) => (
                    <Chip key={code}>{code}</Chip>
                  ))}
                </div>
              )}
            </Card>
          ))}
        </section>
      ))}
    </div>
  );
}
