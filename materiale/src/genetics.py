"""Motor minim de genetică mendeliană, folosit pentru a CALCULA (nu a presupune) rezultatele problemelor."""
from itertools import product
from collections import Counter
from fractions import Fraction

def gametes(genotype):
    """genotype: listă de perechi de alele, ex. [("O","o"),("V","v")] -> listă de gameți (tupluri), unici, în ordinea apariției."""
    out = []
    for combo in product(*[[a, b] for a, b in genotype]):
        if combo not in out:
            out.append(combo)
    return out

def gam_str(g):
    return "".join(g)

def norm_pair(a, b, order):
    return tuple(sorted((a, b), key=lambda x: order.index(x)))

def cross(g1, g2, order):
    """Încrucișare: returnează Counter {genotip(tuplu de perechi): frecvență} peste TOATE combinațiile (nu peste tipuri unice)."""
    G1 = [c for c in product(*[[a, b] for a, b in g1])]
    G2 = [c for c in product(*[[a, b] for a, b in g2])]
    cnt = Counter()
    for x in G1:
        for y in G2:
            gt = tuple(norm_pair(a, b, order) for a, b in zip(x, y))
            cnt[gt] += 1
    return cnt

def gt_str(gt):
    return "".join("".join(p) for p in gt)

def pheno_counts(cnt, pheno_fn):
    out = Counter()
    for gt, n in cnt.items():
        out[pheno_fn(gt)] += n
    return out

def pct(n, total):
    f = Fraction(n, total)
    v = float(f) * 100
    return (f"{v:.2f}".rstrip("0").rstrip(".")).replace(".", ",") + "%"

def frac(n, total):
    f = Fraction(n, total)
    return f"{f.numerator}/{f.denominator}" if f.denominator != 1 else str(f.numerator)

def ratio_str(counts):
    vals = sorted(counts.values(), reverse=True)
    from math import gcd
    from functools import reduce
    g = reduce(gcd, vals)
    return ":".join(str(v // g) for v in vals)

if __name__ == "__main__":
    O = [("O", "o"), ("V", "v")]
    order = ["O", "o", "V", "v"]
    c = cross(O, O, order)
    print(sum(c.values()), len(c), sorted(c.items(), key=lambda x: -x[1])[:3])
