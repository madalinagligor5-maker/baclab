"""Constructori de probleme de genetică: toate rezultatele sunt CALCULATE cu genetics.py."""
from lib import PB
from genetics import gametes, gam_str, cross, gt_str, pct, frac, ratio_str
from collections import Counter

def ro_list(xs):
    xs = list(xs)
    return xs[0] if len(xs) == 1 else ", ".join(xs[:-1]) + " și " + xs[-1]

def gts(g):
    """genotip-părinte (listă de perechi) -> șir, ex. OoVv"""
    return "".join("".join(p) for p in g)

def gam_list(g):
    return ", ".join(gam_str(x) for x in gametes(g))

def count_where(cnt, fn):
    return sum(n for gt, n in cnt.items() if fn(gt))

def genotype_list(cnt, pred=None):
    return [gt_str(gt) for gt in cnt if pred is None or pred(gt)]

def phenotype_table(cnt, pheno_fn):
    """-> dict fenotip -> (număr, [genotipuri])"""
    out = {}
    for gt, n in cnt.items():
        ph = pheno_fn(gt)
        c, l = out.get(ph, (0, []))
        out[ph] = (c + n, l + [gt_str(gt)])
    return out

def table_text(tab, total):
    parts = []
    for ph, (n, gl) in tab.items():
        parts.append(f"{ph}: {frac(n, total)} = {pct(n, total)} (genotipuri: {', '.join(gl)})")
    return "; ".join(parts)

def ratio_of(tab):
    return ratio_str({k: v[0] for k, v in tab.items()})
