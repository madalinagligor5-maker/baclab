import Link from "next/link";
import { Card, Eyebrow, H1, NumBadge } from "@/components/ui";

export const metadata = { title: "Laborator" };

export default function Laborator() {
  return (
    <div className="space-y-6">
      <div>
        <Eyebrow>Probleme generate, fără sfârșit</Eyebrow>
        <H1>Laborator</H1>
        <p className="mt-2 max-w-xl text-muted">Subiectul II are mereu un calcul și o problemă de genetică. Aici exersezi cât vrei, cu rezolvarea pas cu pas.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Link href="/laborator/calcul" className="block">
          <Card className="h-full space-y-2 hover:border-ink/40">
            <NumBadge>%</NumBadge>
            <h2 className="text-xl font-extrabold">Calcul în lanț</h2>
            <p className="text-muted">Sânge → plasmă → apă. Procente din procente, ca la II.A.c.</p>
          </Card>
        </Link>
        <Link href="/laborator/genetica" className="block">
          <Card className="h-full space-y-2 hover:border-ink/40">
            <NumBadge>Aa</NumBadge>
            <h2 className="text-xl font-extrabold">Genetică</h2>
            <p className="text-muted">Monohibridare, dihibridare și încrucișare test, cu pătratul Punnett.</p>
          </Card>
        </Link>
      </div>
    </div>
  );
}
