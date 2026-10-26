import type { Locus } from "@/lib/lab/genetics";

/** Blocuri de conținut pentru fișele vizuale: tabele comparative și scheme. */

export interface TableBlock {
  type: "table";
  title: string;
  /** capul de tabel */
  cols: string[];
  rows: string[][];
  note?: string;
}

export interface FlowBlock {
  type: "flow";
  title: string;
  /** fiecare rând e o schemă liniară; pașii pot avea subtext după „||” */
  rows: { label?: string; steps: string[] }[];
  /** arată săgeata de întoarcere (ciclu) */
  loop?: boolean;
  note?: string;
}

export interface TreeNode {
  label: string;
  children?: TreeNode[];
}

export interface TreeBlock {
  type: "tree";
  title: string;
  root: TreeNode;
  note?: string;
}

export interface CrossBlock {
  type: "cross";
  title: string;
  parents: [string, string];
  loci: Locus[];
  note?: string;
}

export type Block = TableBlock | FlowBlock | TreeBlock | CrossBlock;

export interface Fisa {
  /** codul capitolului (A01…) sau „proba” */
  code: string;
  intro?: string;
  blocks: Block[];
}
