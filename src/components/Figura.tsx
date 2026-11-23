import type { Imagine } from "@/content/materiale";

/** Imagine de lecție cu legendă și atribuire. Fundalul rămâne alb și în modul întunecat, ca diagramele să se citească. */
export function Figura({ imagine, className }: { imagine: Imagine; className?: string }) {
  const src = `/lectii/${imagine.fisier}`;
  return (
    <figure className={`overflow-hidden rounded-2xl border border-line bg-surface ${className ?? ""}`}>
      <a href={src} target="_blank" rel="noopener" className="block bg-white p-3" aria-label={`${imagine.alt} (deschide imaginea mărită)`}>
        {/* eslint-disable-next-line @next/next/no-img-element -- SVG-urile și PNG-urile sunt deja optimizate în materiale/imagini */}
        <img
          src={src}
          alt={imagine.alt}
          width={imagine.latime}
          height={imagine.inaltime}
          loading="lazy"
          decoding="async"
          className="mx-auto h-auto max-h-[520px] w-auto max-w-full"
        />
      </a>
      <figcaption className="space-y-1 border-t border-line px-4 py-3 text-sm">
        <p>{imagine.legenda}</p>
        <p className="text-xs text-muted">
          {imagine.autor ? `${imagine.autor} · ` : ""}
          {imagine.licentaUrl ? (
            <a href={imagine.licentaUrl} target="_blank" rel="noreferrer" className="underline">
              {imagine.licenta}
            </a>
          ) : (
            imagine.licenta
          )}
          {" · "}
          <a href={imagine.sursa} target="_blank" rel="noreferrer" className="underline">
            Wikimedia Commons
          </a>
          {imagine.modificari ? ` · ${imagine.modificari}` : ""}
          {" · Atinge imaginea ca s-o mărești."}
        </p>
      </figcaption>
    </figure>
  );
}
