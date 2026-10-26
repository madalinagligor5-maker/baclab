"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { Button, Card, cx } from "@/components/ui";
import { PRODUCT } from "@/config/product";
import { useStore } from "@/lib/client/store";
import { setProfile } from "@/lib/state";
import { isDayStr, todayStr } from "@/lib/dates";

export default function Start() {
  const router = useRouter();
  const { update } = useStore();
  const [minutes, setMinutes] = useState<number>(PRODUCT.defaultMinutes);
  const [date, setDate] = useState("");

  const go = () => {
    update((s) => setProfile(s, { module: "A", minutes, examDate: isDayStr(date) ? date : null, createdAt: todayStr() }));
    router.push("/azi");
  };

  return (
    <div className="mx-auto min-h-dvh max-w-lg px-4 py-8">
      <Logo height={30} />
      <h1 className="mt-8 text-3xl font-extrabold leading-tight">Hai să-ți facem planul.</h1>
      <p className="mt-2 text-muted">Două întrebări. Poți schimba oricând din Setări.</p>
      <Card className="mt-6 space-y-6">
        <fieldset>
          <legend className="font-bold">Cât timp ai pe zi?</legend>
          <div className="mt-3 grid grid-cols-3 gap-3">
            {PRODUCT.minutesOptions.map((m) => (
              <button key={m} type="button" onClick={() => setMinutes(m)} aria-pressed={minutes === m} className={cx("min-h-14 rounded-xl border-2 text-lg font-extrabold", minutes === m ? "border-ink bg-accent text-on-accent" : "border-line")}>
                {m} min
              </button>
            ))}
          </div>
        </fieldset>
        <div>
          <label htmlFor="exam" className="font-bold">
            Când e examenul? <span className="font-normal text-muted">(opțional)</span>
          </label>
          <input id="exam" type="date" value={date} onChange={(e) => setDate(e.target.value)} min={todayStr()} className="mt-3 min-h-12 w-full rounded-xl border-2 border-line bg-surface px-3" />
        </div>
        <Button variant="accent" onClick={go} className="w-full">
          Începem
        </Button>
      </Card>
      <p className="mt-4 text-center text-sm text-muted">Progresul se păstrează pe acest dispozitiv. Fără cont, deocamdată.</p>
    </div>
  );
}
