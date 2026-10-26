"use client";
import { useRef, useState } from "react";
import { Button, Card, Eyebrow, H1, cx } from "@/components/ui";
import { PRODUCT, paywallEnabled } from "@/config/product";
import { setState as setStore, useStore } from "@/lib/client/store";
import { isDayStr, todayStr } from "@/lib/dates";
import { emptyState, exportState, importState, setProfile } from "@/lib/state";

export default function Setari() {
  const { state, update } = useStore();
  const fileRef = useRef<HTMLInputElement>(null);
  const [msg, setMsg] = useState("");
  const p = state.profile;

  const download = () => {
    const blob = new Blob([exportState(state)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `baclab-${todayStr()}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
  };

  const onFile = async (f: File | undefined) => {
    if (!f) return;
    const next = importState(await f.text());
    if (!next) return setMsg("Fișierul nu este o copie BacLab validă.");
    setStore(next);
    setMsg("Copia a fost importată.");
  };

  return (
    <div className="mx-auto max-w-xl space-y-6">
      <div>
        <Eyebrow>Contul tău, fără cont</Eyebrow>
        <H1>Setări</H1>
      </div>
      {p && (
        <Card className="space-y-5">
          <fieldset>
            <legend className="font-bold">Minute pe zi</legend>
            <div className="mt-2 grid grid-cols-3 gap-3">
              {PRODUCT.minutesOptions.map((m) => (
                <button key={m} type="button" aria-pressed={p.minutes === m} onClick={() => update((s) => setProfile(s, { ...p, minutes: m }))} className={cx("min-h-12 rounded-xl border-2 font-extrabold", p.minutes === m ? "border-ink bg-accent text-on-accent" : "border-line")}>
                  {m}
                </button>
              ))}
            </div>
          </fieldset>
          <div>
            <label htmlFor="exam" className="font-bold">Data examenului</label>
            <input id="exam" type="date" value={p.examDate ?? ""} onChange={(e) => update((s) => setProfile(s, { ...p, examDate: isDayStr(e.target.value) ? e.target.value : null }))} className="mt-2 min-h-12 w-full rounded-xl border-2 border-line bg-surface px-3" />
          </div>
        </Card>
      )}
      <Card className="space-y-3">
        <h2 className="font-extrabold">Copie de rezervă</h2>
        <p className="text-sm text-muted">Progresul tău este salvat doar pe acest dispozitiv. Descarcă o copie ca să-l muți pe alt telefon sau să nu-l pierzi.</p>
        <div className="flex flex-wrap gap-3">
          <Button variant="accent" onClick={download}>Descarcă</Button>
          <Button variant="ghost" onClick={() => fileRef.current?.click()}>Importă</Button>
          <input ref={fileRef} type="file" accept="application/json" className="sr-only" aria-label="Alege fișierul de importat" onChange={(e) => onFile(e.target.files?.[0])} />
        </div>
        <p aria-live="polite" className="text-sm font-bold">{msg}</p>
      </Card>
      {paywallEnabled() && (
        <Card className="space-y-2">
          <h2 className="font-extrabold">Acces complet</h2>
          <ul className="list-disc pl-5 text-muted">
            {PRODUCT.plans.map((pl) => (
              <li key={pl.id}><b className="text-ink">{pl.name}</b> — {pl.blurb}</li>
            ))}
          </ul>
          <p className="text-sm text-muted">Plățile se activează în curând.</p>
        </Card>
      )}
      <Card className="space-y-3">
        <h2 className="font-extrabold">Șterge totul</h2>
        <Button variant="ghost" onClick={() => { if (window.confirm("Ștergi tot progresul de pe acest dispozitiv?")) setStore(emptyState()); }}>
          Resetează progresul
        </Button>
      </Card>
    </div>
  );
}
