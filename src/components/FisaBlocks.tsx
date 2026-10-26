import { Fragment } from "react";
import { cross, phenoLabel } from "@/lib/lab/genetics";
import type { Block, CrossBlock, FlowBlock, TableBlock, TreeBlock, TreeNode } from "@/content/fise/types";
import { Card, Chip, cx } from "./ui";

function Title({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-3 text-lg font-extrabold leading-snug">{children}</h2>;
}

function Note({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 rounded-xl bg-bg p-3 text-sm text-muted">{children}</p>;
}

export function TableView({ b }: { b: TableBlock }) {
  return (
    <Card>
      <Title>{b.title}</Title>
      <div className="-mx-1 overflow-x-auto" role="region" aria-label={b.title} tabIndex={0}>
        <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
          <thead>
            <tr>
              {b.cols.map((c, i) => (
                <th key={i} scope="col" className="border-b-2 border-ink/20 bg-bg px-3 py-2 font-extrabold first:rounded-tl-xl last:rounded-tr-xl">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {b.rows.map((r, ri) => (
              <tr key={ri} className={ri % 2 === 1 ? "bg-bg/60" : undefined}>
                {r.map((cell, ci) =>
                  ci === 0 ? (
                    <th key={ci} scope="row" className="border-b border-line px-3 py-2 align-top font-bold">
                      {cell}
                    </th>
                  ) : (
                    <td key={ci} className="border-b border-line px-3 py-2 align-top">
                      {cell}
                    </td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {b.note && <Note>{b.note}</Note>}
    </Card>
  );
}

export function FlowView({ b }: { b: FlowBlock }) {
  return (
    <Card>
      <Title>{b.title}</Title>
      <div className="space-y-5">
        {b.rows.map((row, ri) => (
          <div key={ri}>
            {row.label && <p className="mb-2 text-xs font-bold uppercase tracking-widest text-muted">{row.label}</p>}
            <ol className="flex flex-col items-stretch gap-1 sm:flex-row sm:flex-wrap sm:items-stretch">
              {row.steps.map((s, i) => {
                const [t, sub] = s.split("||");
                return (
                  <Fragment key={i}>
                    <li className="flex flex-1 flex-col justify-center rounded-xl border-2 border-line bg-surface px-3 py-2 sm:min-w-[7rem] sm:max-w-[14rem]">
                      <span className="flex items-start gap-2">
                        <span aria-hidden className="mt-0.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1 text-[11px] font-extrabold text-on-accent tabnum">
                          {i + 1}
                        </span>
                        <span className="font-bold leading-snug">{t}</span>
                      </span>
                      {sub && <span className="mt-1 pl-7 text-xs text-muted">{sub}</span>}
                    </li>
                    {i < row.steps.length - 1 && (
                      <li aria-hidden className="flex items-center justify-center text-xl font-extrabold text-sage">
                        <span className="sm:hidden">↓</span>
                        <span className="hidden sm:inline">→</span>
                      </li>
                    )}
                  </Fragment>
                );
              })}
            </ol>
          </div>
        ))}
      </div>
      {b.loop && <p className="mt-3 text-sm font-bold text-sage">↺ Ciclul se repetă.</p>}
      {b.note && <Note>{b.note}</Note>}
    </Card>
  );
}

function Branch({ node, depth }: { node: TreeNode; depth: number }) {
  return (
    <li>
      <span
        className={cx(
          "inline-block rounded-full px-3 py-1 text-sm font-bold",
          depth === 0 && "bg-brand text-on-brand",
          depth === 1 && "bg-sage text-[#30243A]",
          depth === 2 && "bg-accent text-on-accent",
          depth >= 3 && "border border-line",
        )}
      >
        {node.label}
      </span>
      {node.children && (
        <ul className="ml-4 mt-1.5 space-y-1.5 border-l-2 border-line pl-4">
          {node.children.map((c, i) => (
            <Branch key={i} node={c} depth={depth + 1} />
          ))}
        </ul>
      )}
    </li>
  );
}

export function TreeView({ b }: { b: TreeBlock }) {
  return (
    <Card>
      <Title>{b.title}</Title>
      <ul>
        <Branch node={b.root} depth={0} />
      </ul>
      {b.note && <Note>{b.note}</Note>}
    </Card>
  );
}

export function CrossView({ b }: { b: CrossBlock }) {
  const res = cross(b.parents[0], b.parents[1]);
  return (
    <Card>
      <Title>{b.title}</Title>
      <p className="mb-3 text-sm text-muted">
        Părinți: <b className="text-ink">{b.parents[0]}</b> × <b className="text-ink">{b.parents[1]}</b>. Gameți: {res.gametes[0].join(", ")} și {res.gametes[1].join(", ")}.
      </p>
      <div className="overflow-x-auto" role="region" aria-label={`Pătrat Punnett: ${b.title}`} tabIndex={0}>
        <table className="punnett text-sm">
          <thead>
            <tr>
              <th aria-label="gameți" />
              {res.table.cols.map((c) => (
                <th key={c}>{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {res.table.rows.map((r, ri) => (
              <tr key={r}>
                <th scope="row">{r}</th>
                {(res.table.cells[ri] ?? []).map((g, ci) => (
                  <td key={ci}>{g}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ul className="mt-3 space-y-1.5 text-sm">
        {res.phenotypes.map((p) => (
          <li key={p.cls} className="flex items-start gap-2">
            <Chip tone="sage">{p.count}</Chip>
            <span>{phenoLabel(p.cls, b.loci)}</span>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-sm">
        Raport fenotipic: <b>{res.ratioPheno.replaceAll(":", " : ")}</b> · raport genotipic: <b>{res.ratioGeno.replaceAll(":", " : ")}</b>
      </p>
      {b.note && <Note>{b.note}</Note>}
    </Card>
  );
}

export function BlockView({ b }: { b: Block }) {
  switch (b.type) {
    case "table":
      return <TableView b={b} />;
    case "flow":
      return <FlowView b={b} />;
    case "tree":
      return <TreeView b={b} />;
    case "cross":
      return <CrossView b={b} />;
  }
}
