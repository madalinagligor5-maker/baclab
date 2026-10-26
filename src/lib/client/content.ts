"use client";
import { useEffect, useState } from "react";
import { parseBank } from "../content/normalize";
import type { Item } from "../content/types";
import type { Paper, PaperIndexEntry } from "../exam/types";

let bankPromise: Promise<Item[]> | null = null;

export function loadBank(): Promise<Item[]> {
  bankPromise ??= fetch("/content/bank.json")
    .then((r) => {
      if (!r.ok) throw new Error(`bank.json ${r.status}`);
      return r.json();
    })
    .then((j) => parseBank(j).bank.items)
    .catch((e) => {
      bankPromise = null;
      throw e;
    });
  return bankPromise;
}

export function useBank() {
  const [items, setItems] = useState<Item[] | null>(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    let alive = true;
    loadBank().then((i) => alive && setItems(i), () => alive && setError(true));
    return () => {
      alive = false;
    };
  }, []);
  return { items, error };
}

export async function loadPaperIndex(): Promise<PaperIndexEntry[]> {
  const r = await fetch("/content/exams/index.json");
  if (!r.ok) throw new Error("index");
  return r.json();
}

export async function loadPaper(id: string): Promise<Paper> {
  const r = await fetch(`/content/exams/${encodeURIComponent(id)}.json`);
  if (!r.ok) throw new Error("paper");
  return r.json();
}

export function usePromise<T>(factory: () => Promise<T>, deps: unknown[]) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    let alive = true;
    setData(null);
    factory().then((d) => alive && setData(d), () => alive && setError(true));
    return () => {
      alive = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return { data, error };
}
