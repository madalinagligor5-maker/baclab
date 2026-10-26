import type { ReactNode } from "react";
export default function Link({ href, children, ...r }: { href: string; children?: ReactNode; [k: string]: unknown }) {
  return <a href={href} {...(r as object)}>{children}</a>;
}
