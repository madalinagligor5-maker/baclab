"use client";
import { useCallback, useSyncExternalStore } from "react";
import { emptyState, migrate, type AppState } from "../state";

const KEY = "baclab:v1";
const SERVER: AppState = emptyState();

let state: AppState = SERVER;
let hydrated = false;
const listeners = new Set<() => void>();

function load() {
  if (hydrated) return;
  hydrated = true;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (raw) state = migrate(JSON.parse(raw));
  } catch {
    /* stocare indisponibilă sau coruptă: pornim de la zero */
  }
}

function persist() {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    /* mod privat / plin: aplicația merge în continuare în memorie */
  }
}

const emit = () => listeners.forEach((l) => l());

function subscribe(cb: () => void) {
  listeners.add(cb);
  if (!hydrated) {
    load();
    queueMicrotask(emit);
  }
  return () => listeners.delete(cb);
}

export function setState(next: AppState) {
  state = next;
  persist();
  emit();
}

export function useStore() {
  const s = useSyncExternalStore(subscribe, () => state, () => SERVER);
  const ready = useSyncExternalStore(subscribe, () => hydrated, () => false);
  const update = useCallback((fn: (s: AppState) => AppState) => setState(fn(state)), []);
  return { state: s, ready, update };
}
