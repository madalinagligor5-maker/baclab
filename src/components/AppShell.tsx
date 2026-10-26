"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, type ReactNode } from "react";
import { Logo } from "./Logo";
import { cx, Loading } from "./ui";
import { useStore } from "@/lib/client/store";

const TABS = [
  { href: "/azi", label: "Azi", icon: "◐" },
  { href: "/capitole", label: "Capitole", icon: "☰" },
  { href: "/simulari", label: "Simulări", icon: "✎" },
  { href: "/laborator", label: "Laborator", icon: "⚗" },
  { href: "/progres", label: "Progres", icon: "▲" },
];

export function AppShell({ children }: { children: ReactNode }) {
  const path = usePathname();
  const router = useRouter();
  const { state, ready } = useStore();
  useEffect(() => {
    if (ready && !state.profile) router.replace("/start");
  }, [ready, state.profile, router]);

  const active = (href: string) => path === href || path.startsWith(href + "/");

  return (
    <div className="min-h-dvh pb-24 md:pb-0">
      <header className="sticky top-0 z-20 border-b border-line bg-bg/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
          <Link href="/azi" aria-label="BacLab — acasă">
            <Logo height={26} />
          </Link>
          <nav aria-label="Principal" className="hidden gap-1 md:flex">
            {TABS.map((t) => (
              <Link key={t.href} href={t.href} aria-current={active(t.href) ? "page" : undefined} className={cx("rounded-full px-4 py-2 text-sm font-bold", active(t.href) ? "bg-brand text-on-brand" : "text-muted hover:text-ink")}>
                {t.label}
              </Link>
            ))}
            <Link href="/lectii" aria-current={active("/lectii") ? "page" : undefined} className={cx("rounded-full px-4 py-2 text-sm font-bold", active("/lectii") ? "bg-brand text-on-brand" : "text-muted hover:text-ink")}>
              Lecții
            </Link>
            <Link href="/fise" aria-current={active("/fise") ? "page" : undefined} className={cx("rounded-full px-4 py-2 text-sm font-bold", active("/fise") ? "bg-brand text-on-brand" : "text-muted hover:text-ink")}>
              Fișe
            </Link>
            <Link href="/setari" className="rounded-full px-4 py-2 text-sm font-bold text-muted hover:text-ink">
              Setări
            </Link>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-4 py-6">
        <p className="mb-5 rounded-xl border border-line p-3 text-sm text-muted">Beta · Biologie vegetală și animală IX–X. Banca de exersare necesită validare de specialitate. <Link href="/surse" className="font-bold underline">Programa, sursele și verificările</Link></p>
        {ready ? children : <Loading />}
        <nav aria-label="Resurse suplimentare" className="mt-8 flex flex-wrap gap-4 border-t border-line pt-5 text-sm font-bold"><Link href="/lectii">Lecții</Link><Link href="/diagnostic">Diagnostic</Link><Link href="/greseli">Greșelile mele</Link><Link href="/fise">Fișe</Link><Link href="/surse">Programa și sursele</Link><Link href="/setari">Setări</Link></nav>
      </main>
      <nav aria-label="Principal" className="fixed inset-x-0 bottom-0 z-20 border-t border-line bg-bg/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden">
        <ul className="mx-auto grid max-w-md grid-cols-5">
          {TABS.map((t) => (
            <li key={t.href}>
              <Link href={t.href} aria-current={active(t.href) ? "page" : undefined} className={cx("flex min-h-14 flex-col items-center justify-center gap-0.5 text-[11px] font-bold", active(t.href) ? "text-ink" : "text-muted")}>
                <span aria-hidden className={cx("flex h-7 w-12 items-center justify-center rounded-full text-base", active(t.href) && "bg-accent text-on-accent")}>
                  {t.icon}
                </span>
                {t.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
