# TRIG · The Circular Arsenal

**The Ranker's Masterbook — 106 original, mind-bending trigonometry problems** for the very top of
JEE Advanced and the Mathematical Olympiad shortlist. Every problem is intended to be *short to state,
brutal to solve*, and worked **more than one way**.

The book is scaffolded from `../limits-masterbook` / `../itf-masterbook`: same static manuscript UI,
same problem schema, same verification bar. The dataset contains **106 problems**: 10 chapters
(10 each, plus 6 bonus problems in the equations & substitution chapters), each with a trap and at
least two solution methods.

PDFs:

- [TRIG-Problems.pdf](TRIG-Problems.pdf)
- [TRIG-Solutions.pdf](TRIG-Solutions.pdf)

## Ten instruments

| # | Key | Chapter | Instrument |
|---|-----|---------|------------|
| I | `conditional` | Conditional Angle Identities | constrained angles, symmetric sums |
| II | `telescope` | Product-to-Sum Telescopes | collapsing sums and products |
| III | `roots` | Unit Roots & Finite Trig Sums | roots of unity, filters, products |
| IV | `chebyshev` | Chebyshev & Multiple Angles | polynomial recurrences, minimal equations |
| V | `substitution` | Trigonometric Substitution Engines | tangent half-angle, parametrisation |
| VI | `inequalities` | Concavity, Tangents & Bounds | Jensen, tangent-line, SOS transforms |
| VII | `extrema` | Phase, Range & Extremum Machines | R-method, envelopes, hidden ranges |
| VIII | `equations` | Periodicity & Root-Counting | intervals, squaring traps, extraneous roots |
| IX | `geometry` | Triangle Geometry Through Trig | sine/cosine laws, area, R/r/s |
| X | `hybrid` | Grand Hybrids | fused instruments from earlier chapters |

## Generated 100-problem map

Each line below is the instrument-level map used for the generated problem objects. The final
`problems.js` entries include difficulty 3-5, raw LaTeX statement/answer, a specific seductive trap,
2 distinct solutions, and a remark.

### I. Conditional Angle Identities

1. Evaluate a symmetric tangent expression under `A+B+C=\pi`.
2. Prove a cyclic sine-square identity under `A+B+C=\pi`.
3. Find a constrained maximum using `\tan A+\tan B+\tan C=\tan A\tan B\tan C`.
4. Simplify a rational expression in `\sin A,\sin B,\sin C` using triangle constraints.
5. Solve for an angle from mixed `\cos(A-B)` and `\cos C` data.
6. Prove a hidden factorisation in `\cot A\cot B+\cot B\cot C+\cot C\cot A`.
7. Evaluate a determinant whose entries are `\sin`/`\cos` of constrained angles.
8. Find all triples satisfying a symmetric tangent equation and an interval condition.
9. Prove an inequality with equality forced by the angle-sum constraint.
10. Evaluate a nested expression where the wrong move treats three angles as independent.

### II. Product-to-Sum Telescopes

1. Evaluate a finite sum of cotangent differences.
2. Collapse a product of cosines at dyadic angles.
3. Evaluate `\prod \sin` or `\prod \cos` after a product-to-sum rewrite.
4. Simplify a tangent telescoping chain with missing endpoints.
5. Prove a sine-ratio product by induction and telescoping.
6. Evaluate a mixed sum `\sum \sin kx\sin (k+1)x`.
7. Find a parameter for which a telescoping product equals a target value.
8. Prove a finite identity that becomes two boundary cosines.
9. Evaluate a shifted cotangent sum with one singular-looking term removed.
10. Solve a product equation after the telescope exposes the zero factors.

### III. Unit Roots & Finite Trig Sums

1. Evaluate a filtered cosine sum using `n`th roots of unity.
2. Compute a sine product from roots of `z^n-1`.
3. Find a closed form for `\sum \cos^4(2\pi k/n)`.
4. Evaluate a reciprocal sine-square sum.
5. Prove a vanishing mixed sine-cosine sum with a congruence condition.
6. Compute a product over odd residues modulo `n`.
7. Solve a finite trig equation by converting to a polynomial in roots of unity.
8. Evaluate a weighted sum `\sum k\sin(2\pi k/n)`.
9. Find a determinant/circulant eigenvalue using cosine roots.
10. Prove a divisibility-flavored identity from the unit-circle factorisation.

### IV. Chebyshev & Multiple Angles

1. Express a high-degree cosine equation through `T_n(x)`.
2. Find the minimal polynomial of `2\cos(\pi/n)` for a small Olympiad-grade `n`.
3. Evaluate a nested radical via a half-angle/Chebyshev relation.
4. Solve `\cos nx=\cos mx` on a restricted interval without overcounting.
5. Prove a recurrence for a sine quotient.
6. Evaluate a product over roots of `T_n(x)-a`.
7. Find a closed form for `\cos 5x`-driven algebraic expression.
8. Prove a sum identity using Chebyshev orthogonality.
9. Determine all rational values of a multiple-angle expression in a constraint.
10. Convert a trigonometric inequality into a polynomial inequality in `\cos x`.

### V. Trigonometric Substitution Engines

1. Rationalise a radical expression with `x=\tan(\theta/2)`.
2. Find a domain/range after substituting `x=a\sin\theta+b\cos\theta`.
3. Evaluate an algebraic extremum by setting `x=\tan\theta`.
4. Solve a rational equation through tangent half-angle.
5. Prove a radical identity using a right-triangle substitution.
6. Parametrise a conic-like constraint with sine and cosine.
7. Convert an algebraic inequality into a simple sine bound.
8. Differentiate a disguised trig substitution expression cleanly.
9. Evaluate a definite-looking finite expression through angle substitution.
10. Find all parameter values for which a substituted expression is real.

### VI. Concavity, Tangents & Bounds

1. Prove a sharp Jensen inequality for sines under angle sum.
2. Use tangent-line bounds to trap a cosine expression.
3. Prove `\tan x` dominates a rational expression on a given interval.
4. Find the best constant in a sine-square inequality.
5. Prove a cyclic triangle inequality with equality case.
6. Convert a trig inequality into SOS in `\sin(x/2)`.
7. Compare two products of sines using concavity of `\log\sin x`.
8. Find a maximum under `x+y+z` fixed via Jensen and smoothing.
9. Prove a mixed `\sin,\tan` inequality with a quadrant restriction.
10. Disprove a tempting global inequality by exposing the endpoint case.

### VII. Phase, Range & Extremum Machines

1. Find the range of `a\sin x+b\cos x+c`.
2. Maximise a quotient of two linear sine-cosine forms.
3. Find the exact range of a quadratic in `\sin x,\cos x`.
4. Determine all parameters for which a trig equation has a solution.
5. Maximise a symmetric expression in `\sin x+\sin y` under a constraint.
6. Find the envelope of `p\cos x+q\cos 2x`.
7. Evaluate an extremum by converting to a circle-line distance.
8. Solve for the minimum of a product after phase-shifting.
9. Find range with a forbidden quadrant or branch interval.
10. Prove the extremum and equality cases by two independent methods.

### VIII. Periodicity & Root-Counting

1. Count roots of a mixed sine-cosine equation on a nonstandard interval.
2. Solve an equation after squaring, then reject extraneous roots.
3. Find all solutions to a tangent equation with hidden period halving.
4. Determine the number of roots of `\sin nx=a\sin x`.
5. Solve a reciprocal trig equation with domain exclusions.
6. Count intersections of two trig graphs using monotonic intervals.
7. Solve a parameterised equation and classify root counts.
8. Find all integer `n` satisfying a finite-angle equation.
9. Solve a system of two trig equations modulo `2\pi`.
10. Prove a root-counting formula using symmetry and periodicity.

### IX. Triangle Geometry Through Trig

1. Prove an identity involving `R,r,s` using sine/cosine laws.
2. Find a triangle angle from a nonstandard trigonometric relation.
3. Maximise area under a side or angle constraint.
4. Evaluate a cyclic quadrilateral expression through Ptolemy and sines.
5. Prove an inequality involving medians or altitudes via trig.
6. Solve for a ratio of sides from a tangent/cotangent angle condition.
7. Find the inradius/circumradius relation from a disguised sine product.
8. Prove a triangle determinant identity.
9. Optimise a triangle expression with one fixed angle.
10. Classify triangles satisfying a symmetric trig equation.

### X. Grand Hybrids

1. Unit roots plus Chebyshev: evaluate a filtered multiple-angle sum.
2. Conditional angles plus inequality: prove a sharp triangle bound.
3. Telescope plus root-counting: solve a product equation exactly.
4. Substitution plus extrema: find a range with a rationalised trig parameter.
5. Geometry plus Chebyshev: classify a triangle via a multiple-angle relation.
6. Unit roots plus product-to-sum: evaluate a rare sine product.
7. Inequality plus equations: determine parameters for exactly two roots.
8. Conditional identities plus tangent half-angle: solve a constrained system.
9. Extrema plus triangle geometry: optimise a radius expression.
10. Three-instrument capstone: finite sum, equation, and inequality in one problem.

## Problem schema

```js
{
  theme: 'conditional',
  themeLabel: 'Conditional Angle Identities',
  title: '...',
  difficulty: 3,
  task: 'Evaluate',
  answerLabel: 'Answer',
  tags: ['angle-sum', 'tangent', 'identity'],
  statement: 'raw LaTeX, no dollar delimiters',
  answer: 'raw LaTeX closed form',
  trap: 'specific seductive wrong answer and why it fails',
  solutions: [
    { name: 'Method I: ...', steps: ['...', '...'] },
    { name: 'Method II: ...', steps: ['...', '...'] }
  ],
  remark: '...'
}
```

KaTeX convention: use `\sin^{-1}`, `\cos^{-1}`, `\tan^{-1}`, `\cot^{-1}`, `\sec^{-1}`,
`\csc^{-1}` if inverse functions appear.

## Run it

```bash
python3 -m http.server 8770
```

Then open `http://localhost:8770`.

## Verify

```bash
/Users/vanindra/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node --check problems.js
/Users/vanindra/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node _gen/verify_problems.mjs
python3 _gen/audit_math.py
```

The PDF builder is in `tools/` and uses the template `node_modules` symlink:

```bash
/Users/vanindra/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node tools/build-pdf.mjs
```
