"use client";
import Link from "next/link";
import { useState } from "react";
import { Button, Card, Progress } from "./ui";

export interface CarteJoc {
  id: string;
  front: string;
  back: string;
}

/**
 * Pachet de cartonașe pentru recuperare activă: răspunzi în gând, întorci cartea, spui dacă ai știut.
 * Ce n-ai știut revine la finalul pachetului, până când le știi pe toate.
 */
export function Cartonase({ carti, backHref, backLabel }: { carti: CarteJoc[]; backHref: string; backLabel: string }) {
  const [coada, setCoada] = useState<CarteJoc[]>(carti);
  const [intoarsa, setIntoarsa] = useState(false);
  const [stiute, setStiute] = useState(0);
  const [incercari, setIncercari] = useState(0);

  const reia = () => {
    setCoada(carti);
    setStiute(0);
    setIncercari(0);
    setIntoarsa(false);
  };

  if (coada.length === 0)
    return (
      <Card className="mx-auto max-w-xl space-y-4 text-center">
        <p className="text-2xl font-extrabold">Gata: le știi pe toate {carti.length}.</p>
        <p className="text-muted">
          {incercari === carti.length ? "Fără nicio repetare." : `Ți-au trebuit ${incercari} întoarceri pentru ${carti.length} cartonașe.`}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button variant="accent" onClick={reia}>
            Încă o dată
          </Button>
          <Link href={backHref} className="inline-flex min-h-12 items-center px-4 font-bold underline">
            {backLabel}
          </Link>
        </div>
      </Card>
    );

  const carte = coada[0]!;
  const raspunde = (stiu: boolean) => {
    setIncercari((n) => n + 1);
    if (stiu) setStiute((n) => n + 1);
    setCoada((c) => (stiu ? c.slice(1) : [...c.slice(1), c[0]!]));
    setIntoarsa(false);
  };

  return (
    <div className="mx-auto max-w-xl space-y-4">
      <div className="flex items-center gap-3">
        <Progress value={stiute / carti.length} label="Cartonașe știute" />
        <span className="shrink-0 text-sm font-bold tabnum text-muted">
          {stiute}/{carti.length}
        </span>
      </div>
      <button
        type="button"
        onClick={() => setIntoarsa((v) => !v)}
        aria-pressed={intoarsa}
        className="block min-h-56 w-full rounded-2xl border-2 border-line bg-surface p-6 text-left transition hover:border-ink/40"
      >
        <span className="text-xs font-bold uppercase tracking-widest text-muted">{intoarsa ? "Răspuns" : "Întrebare"}</span>
        <span className="mt-3 block text-xl font-extrabold leading-snug">{carte.front}</span>
        {intoarsa ? (
          <span className="mt-4 block rounded-xl bg-bg p-4 text-lg leading-relaxed" aria-live="polite">
            {carte.back}
          </span>
        ) : (
          <span className="mt-6 block text-sm font-bold text-muted">Răspunde în gând, apoi atinge cartonașul.</span>
        )}
      </button>
      {intoarsa && (
        <div className="grid grid-cols-2 gap-3">
          <Button variant="ghost" onClick={() => raspunde(false)}>
            Mai repet
          </Button>
          <Button variant="accent" onClick={() => raspunde(true)}>
            Am știut
          </Button>
        </div>
      )}
    </div>
  );
}
