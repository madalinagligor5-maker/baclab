import Link from "next/link";
import type { ReactNode } from "react";

export const cx = (...a: (string | false | null | undefined)[]) => a.filter(Boolean).join(" ");

const btn = "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-base font-bold transition active:scale-[.98] disabled:opacity-50";
const variants = {
  primary: "bg-brand text-on-brand hover:opacity-90",
  accent: "bg-accent text-on-accent hover:brightness-95",
  ghost: "border-2 border-line bg-surface text-ink hover:border-ink/40",
} as const;
type Variant = keyof typeof variants;

export function Button({ variant = "primary", className, ...p }: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return <button type="button" {...p} className={cx(btn, variants[variant], className)} />;
}

export function LinkButton({ href, variant = "primary", className, children }: { href: string; variant?: Variant; className?: string; children: ReactNode }) {
  return (
    <Link href={href} className={cx(btn, variants[variant], className)}>
      {children}
    </Link>
  );
}

export function Card({ className, ...p }: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...p} className={cx("rounded-2xl border border-line bg-surface p-5", className)} />;
}

export function Chip({ tone = "plain", children, className }: { tone?: "plain" | "sage" | "coral" | "lime" | "plum"; children: ReactNode; className?: string }) {
  const tones = {
    plain: "border border-line text-muted",
    sage: "bg-sage text-[#30243A]",
    coral: "bg-coral text-[#30243A]",
    lime: "bg-accent text-on-accent",
    plum: "bg-brand text-on-brand",
  };
  return <span className={cx("inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide", tones[tone], className)}>{children}</span>;
}

/** Insigna cu număr, în lime — ca în identitatea „Fișă de recapitulare”. */
export function NumBadge({ children }: { children: ReactNode }) {
  return <span className="inline-flex h-10 min-w-10 items-center justify-center rounded-full bg-accent px-2 text-base font-extrabold text-on-accent tabnum">{children}</span>;
}

export function Progress({ value, label }: { value: number; label?: string }) {
  const pct = Math.round(Math.min(1, Math.max(0, value)) * 100);
  return (
    <div role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label={label} className="h-2.5 w-full overflow-hidden rounded-full bg-line">
      <div className="h-full rounded-full bg-sage" style={{ width: `${pct}%` }} />
    </div>
  );
}

export function Stat({ value, label }: { value: ReactNode; label: string }) {
  return (
    <div>
      <div className="text-3xl font-extrabold tabnum">{value}</div>
      <div className="text-sm text-muted">{label}</div>
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="text-xs font-bold uppercase tracking-widest text-muted">{children}</p>;
}

export function H1({ children }: { children: ReactNode }) {
  return <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">{children}</h1>;
}

export function Loading({ text = "Se încarcă…" }: { text?: string }) {
  return <p className="py-10 text-center text-muted">{text}</p>;
}

export function ErrorBox({ children }: { children: ReactNode }) {
  return <div className="rounded-2xl bg-bad-soft p-4 text-bad">{children}</div>;
}
