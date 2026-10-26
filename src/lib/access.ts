import { PRODUCT, paywallEnabled } from "../config/product";

/** Reguli freemium. Cât timp plata nu e activă (NEXT_PUBLIC_PAYWALL != "on"), totul e deschis. */

export interface Entitlement {
  premium: boolean;
}

export const FREE: Entitlement = { premium: false };

export function canOpenChapter(code: string, ent: Entitlement = FREE, enabled = paywallEnabled()): boolean {
  if (!enabled || ent.premium) return true;
  return (PRODUCT.freeChapters as readonly string[]).includes(code);
}

export function canOpenExam(id: string, ent: Entitlement = FREE, enabled = paywallEnabled()): boolean {
  if (!enabled || ent.premium) return true;
  return (PRODUCT.freeExams as readonly string[]).includes(id);
}

export function labRemaining(usedToday: number, ent: Entitlement = FREE, enabled = paywallEnabled()): number {
  if (!enabled || ent.premium) return Infinity;
  return Math.max(0, PRODUCT.freeLabPerDay - usedToday);
}
