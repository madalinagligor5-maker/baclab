// Stub-uri minimale, DOAR pentru verificarea de tipuri fără `npm install` (vezi tests/tsconfig.check.json).
// În proiectul real tipurile vin din @types/react, next etc.
declare const process: { env: Record<string, string | undefined> };
declare namespace React {
  type ReactNode = any;
  type ButtonHTMLAttributes<T> = { [k: string]: any } & { children?: any; className?: string; onClick?: (e: any) => void; disabled?: boolean };
  type HTMLAttributes<T> = { [k: string]: any } & { children?: any; className?: string };
}
declare namespace JSX {
  interface IntrinsicAttributes { key?: any }
  interface IntrinsicElements { [k: string]: { [a: string]: any; onChange?: (e: any) => void; onClick?: (e: any) => void } }
  type Element = any;
}
declare module "react" {
  export type ReactNode = any;
  export function useState<T>(init: T | (() => T)): [T, (v: T | ((p: T) => T)) => void];
  export function useEffect(fn: () => void | (() => void), deps?: unknown[]): void;
  export function useMemo<T>(fn: () => T, deps: unknown[]): T;
  export function useCallback<T extends (...a: any[]) => any>(fn: T, deps: unknown[]): T;
  export function useRef<T>(init: T | null): { current: T | null };
  export function useSyncExternalStore<T>(sub: (cb: () => void) => () => void, get: () => T, server?: () => T): T;
  export function Suspense(p: any): any;
  export const Fragment: any;
}
declare module "react/jsx-runtime" { export const jsx: any; export const jsxs: any; export const Fragment: any; }
declare module "next" { export type Metadata = any; export type Viewport = any; export namespace MetadataRoute { type Sitemap = any[]; type Robots = any; } }
declare module "next/link" { const L: (p: { href: string; className?: string; children?: any; [k: string]: any }) => any; export default L; }
declare module "next/navigation" {
  export function useRouter(): { push(h: string): void; replace(h: string): void };
  export function usePathname(): string;
  export function useSearchParams(): { get(k: string): string | null };
  export function notFound(): never;
}
declare module "next/font/google" { export function Plus_Jakarta_Sans(o: any): { variable: string }; }

declare module "*.css" {}
