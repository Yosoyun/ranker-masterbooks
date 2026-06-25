# The Ranker's Masterbooks

Twenty-one static problem books for the very top of **JEE Advanced**.
2106 original problems, organised by the *instrument* that powers each one, and every problem solved
**more than one way**. No build step, no dependencies — just open `index.html`.

🌐 **Live:** https://yosoyun.github.io/ranker-masterbooks/

| Book | What | Problems |
|------|------|----------|
| **[∫f dx · The Signed Area Between Curves](area-masterbook/)** | Area under a curve & the x-axis, area w.r.t. the y-axis, area between two curves, finding the limits from points of intersection, symmetry & even/odd shortcuts, parametric & polar areas, modulus/greatest-integer/piecewise areas, variable boundaries & parameters, optimising an area, grand hybrids | 100 |
| **[y=mx+c · Slopes, Distances & the Pencil of Lines](lines-masterbook/)** | The forms of a line, distance & the section formula, the angle between lines & the family L₁+λL₂, the foot & image of a point, angle bisectors, the pair of straight lines, triangle centres & areas, loci, the shift of origin & rotation of axes, grand hybrids | 100 |
| **[f′=0 · Tangents, Extrema & the Shape of a Curve](aod-masterbook/)** | Tangents & normals, rates of change & related rates, monotonicity & inequalities, maxima & minima, Rolle's & the Mean Value Theorem, approximations differentials & errors, concavity inflection & convexity, curve sketching & number of roots, applied optimisation, grand hybrids | 100 |
| **[∫dx · The Antiderivative & Its Constant](indefinite-masterbook/)** | Standard forms, substitution, integration by parts, rational functions & partial fractions, trigonometric integrals & the Weierstrass substitution, irrational integrands, the special denominators, reduction formulae, exact derivatives, grand hybrids | 100 |
| **[f(x) · Maps, Relations & Their Inverses](functions-masterbook/)** | Relations equivalence & order, domain & range, injective surjective & bijective (& counting maps), composition, inverse functions & involutions, functional equations, even odd & periodic symmetry, greatest-integer fractional-part signum & \|·\|, graphs & transformations, grand hybrids | 100 |
| **[S=0 · The Sections of a Cone](conics-masterbook/)** | The circle, the parabola, the ellipse & the hyperbola, tangents normals & chords of contact (T=0), pole & polar & conjugate points, the general second-degree equation & its classification, focus-directrix & eccentricity, loci & parametric & optimisation, grand hybrids | 100 |
| **[dy/dx · Solving the Equations of Change](diffeq-masterbook/)** | Formation, order & degree, variables separable & substitutions, homogeneous & isobaric, linear & Bernoulli, exact equations & integrating factors, Clairaut & singular solutions, geometric ODEs, orthogonal trajectories, growth/decay/cooling/mixing, grand hybrids | 100 |
| **[v⃗ · Vectors & the Geometry of Space](vectors-masterbook/)** | The dot product & projections, the cross product & areas, scalar & vector triple products, linear dependence & reciprocal bases, position vectors & the section formula, lines in space, planes & pencils, distances & skew lines, vector equations of loci & spheres, grand hybrids | 100 |
| **[Σ · Patterns, Sums & Limits](sequences-masterbook/)** | AP/GP/HP & means, the AGP & special sums, telescoping & the Vₙ method, sums of powers & figurate numbers, recurrences & characteristic equations, generating functions, convergence & infinite series, sequence inequalities, greatest term & integer part, grand hybrids | 100 |
| **[(1+x)ⁿ · The Binomial Theorem](binomial-masterbook/)** | The general term, middle & greatest term, coefficient extraction, binomial sums via calculus, the roots-of-unity filter, the multinomial theorem, divisibility & remainders, approximations & inequalities, the binomial series for any index, grand hybrids | 100 |
| **[ℙ · Chance & Uncertainty](probability-masterbook/)** | Classical & geometric probability, conditioning & independence, total probability & Bayes, Bernoulli trials & the binomial, expectation & the indicator trick, recursive & Markov chance, inclusion–exclusion, named distributions, paradoxes, grand hybrids | 100 |
| **[n! · The Art of Counting](pnc-masterbook/)** | The two principles, permutations, combinations, circular & necklace arrangements, stars & bars, inclusion–exclusion & derangements, combinatorial identities, recurrences & Catalan, lattice paths, grand hybrids | 100 |
| **[∫ · The Definite Integral](definite-masterbook/)** | Symmetry & parity, the king rule, the limit of a sum, reduction & Wallis, differentiation under the integral, estimation & the MVT, floor & periodic integrands, famous integrals, improper integrals, grand hybrids | 100 |
| **[ℂ · The Argand Plane](complex-masterbook/)** | The algebra of a+bi, modulus & argument, De Moivre, roots of unity, the geometry of the plane, loci, Möbius maps, triangles & polygons, polynomial equations, grand hybrids | 100 |
| **[x² · Roots, Discriminant & Vieta](quadratics-masterbook/)** | Vieta, the discriminant, root location, common roots, ranges of fractions, max–min, disguised quadratics, parameters, inequalities, grand hybrids | 100 |
| **[f′ · The Derivative & Where It Fails](diff-masterbook/)** | First principles, non-differentiability, the MVT, Darboux, differentiable functional equations, smoothness, tangents, monotonicity, derivative limits, grand hybrids | 100 |
| **[C⁰ · The Continuous & the Broken](continuity-masterbook/)** | ε–δ proofs, types of discontinuity, continuous functional equations, the IVT, pathological functions, sequential continuity, parametric gluing, the EVT, monotone functions, grand hybrids | 100 |
| **[MATRIX · The Determinant & Its Eigenworld](matrix-masterbook/)** | The alternating form, Cayley–Hamilton, rank, special determinants, block & Schur, the trace, determinant bounds, combinatorial matrices, matrix equations, grand hybrids | 100 |
| **[TRIG · The Circular Arsenal](trig-masterbook/)** | Conditional identities, transformations, equations, extrema, sums & products, polynomial connections, inverse functions, geometry, inequalities, grand hybrids | 106 |
| **[ARC · The Inverse Circular Functions](itf-masterbook/)** | Principal branches & the range trap, ±π corrections, telescoping arctangents, identities, equations, trig-of-inverse-trig, domain/range, calculus, Machin & advanced identities, grand hybrids | 100 |
| **[LIMITS · The Edge of Calculus](limits-masterbook/)** | Floor, fractional part, signum, modulus, inverse-trig, log/exp, advanced trig, exotic indeterminate forms, squeeze & discrete sums, grand hybrids | 100 |

Each problem ships with a clean LaTeX statement & answer, **"The Trap"** (the seductive wrong answer and
why it fails), **2–3 distinct solution methods**, and an **Insight** note. Downloadable Problems and
Solutions PDFs are included in each book's folder.

## How the problems were made

Generated by an elite problem-setter fleet and then **adversarially verified**: a separate skeptical
pass re-checked every claimed value, identity, root, derivative and series **numerically in Python**
(`mpmath`/`sympy`) before any problem was admitted. Wrong answers were recomputed and the solutions
repaired.

## Run locally

Each book is a fully static site. Either double-click its `index.html`, or serve the folder:

```bash
python3 -m http.server 8760 --directory itf-masterbook     # ARC
python3 -m http.server 8750 --directory limits-masterbook   # LIMITS
```

(KaTeX and the fonts load from a CDN, so the first load needs an internet connection.)

## Rebuild the PDFs

```bash
cd itf-masterbook/tools && npm install && node build-pdf.mjs   # → ARC-Problems.pdf, ARC-Solutions.pdf
cd limits-masterbook/tools && npm install && node build-pdf.mjs # → LIMITS-Problems.pdf, LIMITS-Solutions.pdf
```

## Structure

```
<book>/
  index.html     markup + CDN links
  styles.css     design system (ivory / midnight themes)
  app.js         routing, rendering, KaTeX, filters, progress
  problems.js    the 100-problem dataset (window.PROBLEMS)
  tools/         PDF builder (puppeteer-core + katex)
```

To add or edit a problem, append an object to `window.PROBLEMS` in `problems.js`
(`theme`, `themeLabel`, `title`, `difficulty`, `task`, `tags`, `statement`, `answer`, `trap`,
`solutions[]`, `remark`). Statements and answers are raw LaTeX; solution steps use `$…$` / `$$…$$`.
