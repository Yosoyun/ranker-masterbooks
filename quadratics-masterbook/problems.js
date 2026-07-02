/* problems.js — DATA. 100 original JEE Advanced quadratic-equation problems for x² · Roots, Discriminant & Vieta. Adversarially verified in Python (sympy/numpy/mpmath). statement/answer raw LaTeX (app auto-detects prose+math); steps use $...$ and $$...$$. */
window.PROBLEMS = [
  {
    "theme": "vieta",
    "themeLabel": "Vieta & Symmetric Functions of Roots",
    "title": "The Lopsided Cube and Its Sibling Sum",
    "difficulty": 4,
    "task": "Construct",
    "tags": [
      "vieta",
      "power-sums",
      "transformed-roots",
      "elementary-symmetric",
      "degree-raising"
    ],
    "statement": "Let $\\alpha$ and $\\beta$ be the roots of $x^2-5x+3=0$. Construct the monic cubic in $t$ whose three roots are $\\dfrac{\\alpha^2}{\\beta}$, $\\dfrac{\\beta^2}{\\alpha}$ and $(\\alpha+\\beta)$, taken jointly.",
    "answer": "\\[ t^3-\\frac{95}{3}\\,t^2+\\frac{409}{3}\\,t-15=0,\\qquad\\text{equivalently}\\qquad 3t^3-95t^2+409t-45=0. \\]",
    "trap": "The two lopsided cubes $u=\\alpha^2/\\beta$ and $v=\\beta^2/\\alpha$ are tempting to handle alone -- one quickly finds $u+v=\\dfrac{\\alpha^3+\\beta^3}{\\alpha\\beta}=\\dfrac{80}{3}$ and $uv=\\dfrac{\\alpha^2\\beta^2}{\\alpha\\beta}=\\alpha\\beta=3$, and is then seduced into writing the answer as the quadratic $t^2-\\tfrac{80}{3}t+3$. But the problem names three roots: the sibling sum $w=\\alpha+\\beta=5$ is a genuine third root and must enter every symmetric function. Forgetting it does not merely drop a factor $(t-5)$; it silently corrupts $e_2=uv+w(u+v)=3+5\\cdot\\tfrac{80}{3}=\\tfrac{409}{3}$ (not $3$) and $e_1=(u+v)+w=\\tfrac{80}{3}+5=\\tfrac{95}{3}$ (not $\\tfrac{80}{3}$). A quick certificate: $t=5$ is supposed to be a root, yet $5^2-\\tfrac{80}{3}\\cdot 5+3=-\\tfrac{316}{3}\\neq 0$, so the seductive quadratic is simply the wrong object.",
    "solutions": [
      {
        "name": "Elementary symmetric functions of the transformed roots",
        "steps": [
          "From $x^2-5x+3=0$, Vieta gives $\\alpha+\\beta=5$ and $\\alpha\\beta=3$. Let the new roots be $u=\\alpha^2/\\beta,\\ v=\\beta^2/\\alpha,\\ w=\\alpha+\\beta=5$.",
          "First symmetric sum: $u+v=\\dfrac{\\alpha^3+\\beta^3}{\\alpha\\beta}$. Using $\\alpha^3+\\beta^3=(\\alpha+\\beta)^3-3\\alpha\\beta(\\alpha+\\beta)=125-45=80$, we get $u+v=\\tfrac{80}{3}$, so $e_1=u+v+w=\\tfrac{80}{3}+5=\\tfrac{95}{3}$.",
          "Second symmetric sum: $e_2=uv+w(u+v)$. Here $uv=\\dfrac{\\alpha^2}{\\beta}\\cdot\\dfrac{\\beta^2}{\\alpha}=\\alpha\\beta=3$, and $w(u+v)=5\\cdot\\tfrac{80}{3}=\\tfrac{400}{3}$; hence $e_2=3+\\tfrac{400}{3}=\\tfrac{409}{3}$.",
          "Third symmetric sum: $e_3=uvw=(\\alpha\\beta)(\\alpha+\\beta)=3\\cdot 5=15$.",
          "The monic cubic is $t^3-e_1t^2+e_2t-e_3=0$, i.e. $\\boxed{\\,t^3-\\tfrac{95}{3}t^2+\\tfrac{409}{3}t-15=0\\,}$ (clear denominators: $3t^3-95t^2+409t-45=0$)."
        ]
      },
      {
        "name": "Newton power sums, twice",
        "steps": [
          "Stage 1 (original equation): with $p_1=\\alpha+\\beta=5$ and $\\alpha\\beta=3$, Newton's identities give $p_2=\\alpha^2+\\beta^2=5^2-2\\cdot3=19$ and $p_3=\\alpha^3+\\beta^3=5\\cdot19-3\\cdot5=80$.",
          "Stage 2 (transformed roots $u,v,w$): the first power sum is $N_1=e_1=\\dfrac{p_3}{\\alpha\\beta}+w=\\dfrac{80}{3}+5=\\tfrac{95}{3}$.",
          "For the second power sum, $u^2+v^2=\\dfrac{\\alpha^4}{\\beta^2}+\\dfrac{\\beta^4}{\\alpha^2}=\\dfrac{\\alpha^6+\\beta^6}{\\alpha^2\\beta^2}$. From $\\alpha^2+\\beta^2=19,\\ \\alpha^2\\beta^2=9$ we get $\\alpha^6+\\beta^6=19^3-3\\cdot9\\cdot19=6859-513=6346$, so $u^2+v^2=\\tfrac{6346}{9}$ and $N_2=u^2+v^2+w^2=\\tfrac{6346}{9}+25=\\tfrac{6571}{9}$.",
          "Newton's identity $N_2=e_1N_1-2e_2$ gives $e_2=\\dfrac{e_1N_1-N_2}{2}=\\dfrac{\\tfrac{95}{3}\\cdot\\tfrac{95}{3}-\\tfrac{6571}{9}}{2}=\\dfrac{\\tfrac{9025-6571}{9}}{2}=\\dfrac{2454}{18}=\\tfrac{409}{3}$; and $e_3=uvw=3\\cdot5=15$ directly.",
          "Assembling $t^3-e_1t^2+e_2t-e_3$ yields $\\boxed{\\,t^3-\\tfrac{95}{3}t^2+\\tfrac{409}{3}t-15=0\\,}$."
        ]
      },
      {
        "name": "Elimination: build the quadratic factor, then attach the sibling",
        "steps": [
          "The two lopsided cubes share a structure: if $t=\\alpha^2/\\beta$ with $\\beta=3/\\alpha$, then $t=\\dfrac{\\alpha^2}{3/\\alpha}=\\dfrac{\\alpha^3}{3}$, so $\\alpha^3=3t$ (and symmetrically $\\beta^3=3t$ for the other root).",
          "But $\\alpha$ obeys $\\alpha^2=5\\alpha-3$, so $\\alpha^3=\\alpha(5\\alpha-3)=5\\alpha^2-3\\alpha=5(5\\alpha-3)-3\\alpha=22\\alpha-15$. Equating, $22\\alpha-15=3t\\Rightarrow\\alpha=\\dfrac{3t+15}{22}$.",
          "Substitute into $\\alpha^2-5\\alpha+3=0$ and clear: this is the eliminant whose two solutions are exactly $u$ and $v$. It simplifies to $t^2-\\tfrac{80}{3}t+3=0$ -- the quadratic factor carrying $u,v$ (consistent with $u+v=\\tfrac{80}{3},\\ uv=3$).",
          "The third named root is $w=\\alpha+\\beta=5$, contributing the factor $(t-5)$.",
          "Multiplying, $(t-5)\\left(t^2-\\tfrac{80}{3}t+3\\right)=t^3-\\tfrac{95}{3}t^2+\\tfrac{409}{3}t-15$, so $\\boxed{\\,t^3-\\tfrac{95}{3}t^2+\\tfrac{409}{3}t-15=0\\,}$."
        ]
      }
    ],
    "remark": "The degree-raising map $\\alpha\\mapsto\\alpha^2/\\beta$ is a quotient of unequal powers, so it is not a symmetric function of $(\\alpha,\\beta)$ individually -- yet the unordered pair $\\{\\alpha^2/\\beta,\\ \\beta^2/\\alpha\\}$ is symmetric, which is why $u+v=p_3/(\\alpha\\beta)$ and $uv=\\alpha\\beta$ come out rational despite the irrational roots. The elimination method exposes the real engine: $\\alpha^2/\\beta=\\alpha^3/(\\alpha\\beta)=\\alpha^3/3$, turning the transform into a cube-then-scale, which is why a quadratic (not a single linear) factor appears. The lesson for a top ranker is that when a problem lists roots of mixed character -- here two coupled transforms plus one bare Vieta sum -- every elementary symmetric function must blend all of them; isolating the 'interesting' pair is the fast route to a wrong, lower-degree answer."
  },
  {
    "theme": "vieta",
    "themeLabel": "Vieta & Symmetric Functions of Roots",
    "title": "When a Root, Its Twin, and Their Product Run in Geometric Step",
    "difficulty": 5,
    "task": "Find p,q",
    "tags": [
      "vieta",
      "geometric-progression",
      "root-structure",
      "symmetric-functions",
      "parameter-coupling"
    ],
    "statement": "Let $\\alpha,\\beta$ be the real roots of $x^2-px+q=0$ with $q\\neq0$. Suppose the three numbers \\[\\alpha,\\qquad \\beta,\\qquad \\alpha\\beta\\] form a geometric progression in this order, and that their sum equals $14$. Find all admissible pairs $(p,q)$, and exhibit the quadratic.",
    "answer": "$(p,q)=(6,8)$; the quadratic is $x^2-6x+8=0$, with roots $2$ and $4$ (the GP is $2,4,8$, common ratio $2$).",
    "trap": "Reading \"their sum equals $14$\" as the sum of the roots, i.e. $\\alpha+\\beta=p=14$. The phrase refers to the sum of the three GP terms, which by Vieta is $\\alpha+\\beta+\\alpha\\beta=p+q$, not $p$ alone. The mistaken reading $\\alpha+\\beta=14$ together with $\\beta=\\alpha^2$ forces $\\alpha^2+\\alpha-14=0$, giving the irrational $\\alpha=\\tfrac{-1+\\sqrt{57}}2$ and a non-clean $(p,q)$ — a tell-tale sign the wrong sum was used. The genuine constraint is the GP-mean relation $\\beta^2=\\alpha\\cdot(\\alpha\\beta)$, whose middle term is $\\beta$, not $\\alpha\\beta$.",
    "solutions": [
      {
        "name": "GP-mean reduction, then a Vieta sum",
        "steps": [
          "The geometric-mean condition for $\\alpha,\\beta,\\alpha\\beta$ (in this order) is $\\beta^2=\\alpha\\cdot(\\alpha\\beta)=\\alpha^2\\beta$. Since $\\alpha\\beta=q\\neq0$ we may cancel $\\beta$, giving $\\beta=\\alpha^2$. (The discarded branch $\\beta=0$ would force $q=0$.)",
          "The three GP terms are then $\\alpha,\\ \\alpha^2,\\ \\alpha^3$, and their sum is $\\alpha+\\alpha^2+\\alpha^3=14$. But this sum is exactly $\\alpha+\\beta+\\alpha\\beta=(\\alpha+\\beta)+\\alpha\\beta=p+q$ — the key Vieta reading.",
          "Solve $\\alpha^3+\\alpha^2+\\alpha-14=0$. It factors as $(\\alpha-2)(\\alpha^2+3\\alpha+7)=0$; the quadratic factor has discriminant $9-28<0$, so $\\alpha=2$ is the only real value.",
          "Hence $\\beta=\\alpha^2=4$, and Vieta gives $p=\\alpha+\\beta=6$, $q=\\alpha\\beta=8$. The GP is $2,4,8$ (ratio $2$) with sum $14$. So $\\boxed{(p,q)=(6,8)},\\ x^2-6x+8=0.$"
        ]
      },
      {
        "name": "Common-ratio bookkeeping",
        "steps": [
          "Let the GP have first term $\\alpha$ and common ratio $r$. Then $\\beta=\\alpha r$ and $\\alpha\\beta=\\alpha r^2$. But $\\alpha\\beta=\\alpha\\cdot(\\alpha r)=\\alpha^2 r$, so $\\alpha r^2=\\alpha^2 r$, giving $r=\\alpha$ (as $\\alpha,r\\neq0$).",
          "Thus $\\beta=\\alpha^2$ and $\\alpha\\beta=\\alpha^3$, so the terms are $\\alpha(1,\\alpha,\\alpha^2)$ and the sum is $\\alpha(1+\\alpha+\\alpha^2)=14$.",
          "This is the same cubic $\\alpha^3+\\alpha^2+\\alpha-14=0$, whose unique real root is $\\alpha=2$ (the cofactor $\\alpha^2+3\\alpha+7$ is never zero in $\\mathbb R$).",
          "Therefore $r=2$, the GP is $2,4,8$, the roots are $2,4$, and $p=6,\\ q=8$. $\\boxed{(p,q)=(6,8)}.$"
        ]
      },
      {
        "name": "Verification via the locus curve",
        "steps": [
          "Eliminating $\\alpha$ from $p=\\alpha+\\alpha^2$, $q=\\alpha^3$ (using $\\beta=\\alpha^2$) yields the GP-locus relation $p^3-3pq-q^2-q=0$ — every GP-compatible pair $(p,q)$ lies on this curve.",
          "Impose the sum condition $p+q=14$, i.e. $p=14-q$, and substitute into the locus: $(14-q)^3-3(14-q)q-q^2-q=0$, which simplifies to $q^3-44q^2+631q-2744=0$.",
          "Factor: $(q-8)(q^2-36q+343)=0$; the quadratic factor has discriminant $36^2-4\\cdot343=1296-1372<0$, so $q=8$ is the only real solution, whence $p=14-8=6$.",
          "Both equations are satisfied by $(p,q)=(6,8)$, matching the explicit roots $2,4$. $\\boxed{(p,q)=(6,8)}.$"
        ]
      }
    ],
    "remark": "Insight: the GP-mean condition collapses two roots into one parameter ($\\beta=\\alpha^2$), and the seemingly innocent phrase \"sum of the three terms\" secretly encodes $p+q$ via Vieta — turning a root-structure constraint into a single cubic in $\\alpha$ that, by design, factors to a unique real value. The cleanliness is engineered: $1+2+4+\\dots$ style growth makes $\\alpha=2$ land exactly on $14$ while the conjugate roots stay complex, so there is no ordering or extraneous-root ambiguity to resolve."
  },
  {
    "theme": "vieta",
    "themeLabel": "Vieta & Symmetric Functions of Roots",
    "title": "The Roots Slip Through a Mobius Door",
    "difficulty": 5,
    "task": "Find all",
    "tags": [
      "mobius transform of roots",
      "build a new equation",
      "vieta",
      "hidden pole",
      "degenerate leading coefficient"
    ],
    "statement": "Let $\\alpha,\\beta$ be the roots of \\[x^{2}-t\\,x+(2t-3)=0,\\qquad t\\in\\mathbb{R}.\\] Form the two numbers \\[u=\\frac{\\alpha}{1-\\alpha},\\qquad v=\\frac{\\beta}{1-\\beta},\\] obtained by passing each root through the Mobius map $r\\mapsto \\dfrac{r}{1-r}$. Find all real $t$ for which $u$ and $v$ are real, finite, and equal — that is, for which the equation whose roots are $u,v$ has a genuine repeated (double) real root.",
    "answer": "$\\boxed{t=6}$ only. (At $t=6$ the original is $(x-3)^2=0$, and $u=v=\\dfrac{3}{1-3}=-\\tfrac32$.) The value $t=2$, which also makes the discriminant vanish, must be rejected: there the repeated root of the original is $x=1$, the exact pole of the map, so $u,v$ are undefined and the transformed equation is not even a quadratic.",
    "trap": "Building the transformed equation gives $(t-2)y^{2}+3(t-2)y+(2t-3)=0$ with discriminant $(t-2)(t-6)$, so setting it to zero yields $t=2$ and $t=6$ — and reporting both. But the leading coefficient is exactly $t-2$, which is $P(1)$. At $t=2$ that coefficient dies: the \"equation\" collapses to $1=0$, the original's double root is $x=1$ (the pole of $r\\mapsto r/(1-r)$), and no finite $u,v$ exist. The discriminant reads zero there only as an artifact of the leading term vanishing, not because of a true repeated root. This degenerate-leading-coefficient / hidden-pole case is the one strong students drop.",
    "solutions": [
      {
        "name": "Build the equation, then guard the leading coefficient",
        "steps": [
          "To find the equation with roots $y=\\dfrac{x}{1-x}$, invert the map: $y=\\dfrac{x}{1-x}\\iff x=\\dfrac{y}{1+y}$. Substitute $x=\\dfrac{y}{1+y}$ into $x^{2}-tx+(2t-3)=0$ and clear the denominator by multiplying through by $(1+y)^2$.",
          "This gives $y^{2}-t\\,y(1+y)+(2t-3)(1+y)^{2}=0$, i.e. $(1-t+2t-3)\\,y^{2}+(-t+2(2t-3))\\,y+(2t-3)=0$, which simplifies to $(t-2)\\,y^{2}+3(t-2)\\,y+(2t-3)=0$. Note the leading coefficient is exactly $P(1)=1-t+(2t-3)=t-2$.",
          "For a genuine repeated real root we need a true quadratic, so first demand $t-2\\neq0$. Its discriminant is $\\big(3(t-2)\\big)^{2}-4(t-2)(2t-3)=(t-2)\\big[9(t-2)-4(2t-3)\\big]=(t-2)(t-6)$.",
          "Setting the discriminant to zero gives $t=2$ or $t=6$. But $t=2$ violates $t-2\\neq0$ (there the equation degenerates to $0\\cdot y^{2}+0\\cdot y+1=0$, i.e. $1=0$, with no roots at all), so it is rejected.",
          "Only $t=6$ survives, giving $(t-2)=4$ and $4y^{2}+12y+9=(2y+3)^2=0$, the double root $y=-\\tfrac32$. $\\boxed{t=6}$"
        ]
      },
      {
        "name": "A Mobius map preserves double roots — except at its pole",
        "steps": [
          "The map $\\phi(r)=\\dfrac{r}{1-r}$ is a Mobius transformation, hence a bijection of the projective line; it sends distinct points to distinct points and a doubled point to a doubled point. So $u=v$ (a true finite double root) forces $\\alpha=\\beta$, i.e. the original itself must have a repeated root — provided that repeated root is not the pole $r=1$, where $\\phi$ is undefined.",
          "The original $x^{2}-tx+(2t-3)$ has discriminant $t^{2}-4(2t-3)=t^{2}-8t+12=(t-2)(t-6)$, which vanishes at $t=2$ and $t=6$.",
          "At $t=6$: $(x-3)^{2}=0$, double root $x=3\\neq1$, so $u=v=\\phi(3)=\\dfrac{3}{1-3}=-\\tfrac32$ is finite — valid.",
          "At $t=2$: $(x-1)^{2}=0$, double root $x=1$, which is precisely the pole of $\\phi$; $\\phi(1)$ is undefined ($u,v\\to\\infty$), so no finite repeated root exists — invalid.",
          "Hence $\\boxed{t=6}$."
        ]
      },
      {
        "name": "Force equality of the images directly",
        "steps": [
          "Demand $u=v$ outright: $\\dfrac{\\alpha}{1-\\alpha}=\\dfrac{\\beta}{1-\\beta}$. Cross-multiplying, $\\alpha(1-\\beta)=\\beta(1-\\alpha)$, i.e. $\\alpha-\\alpha\\beta=\\beta-\\alpha\\beta$, which collapses to $\\alpha=\\beta$. Equivalently $u-v=\\dfrac{\\alpha-\\beta}{(1-\\alpha)(1-\\beta)}$, so the images are equal exactly when $\\alpha=\\beta$, while finiteness requires $(1-\\alpha)(1-\\beta)\\neq0$, i.e. neither root equals $1$.",
          "By Vieta, $\\alpha+\\beta=t$ and $\\alpha\\beta=2t-3$, so $\\alpha=\\beta$ means $(\\alpha-\\beta)^2=(\\alpha+\\beta)^2-4\\alpha\\beta=t^{2}-4(2t-3)=(t-2)(t-6)=0$, giving $t\\in\\{2,6\\}$.",
          "The finiteness guard $(1-\\alpha)(1-\\beta)\\neq0$ is just $1-(\\alpha+\\beta)+\\alpha\\beta=1-t+(2t-3)=t-2\\neq0$ — exactly the condition that $x=1$ is not a root.",
          "$t=2$ fails this guard (then $\\alpha=\\beta=1$ is the pole), leaving $\\boxed{t=6}$, where $u=v=-\\tfrac32$."
        ]
      }
    ],
    "remark": "Insight: building the equation with roots $\\phi(\\alpha),\\phi(\\beta)$ via $x=\\dfrac{y}{1+y}$ makes the leading coefficient come out as $P(1)$ — the value of the original at the map's pole $x=1$. So the transformed quadratic silently degrades to a linear (or empty) equation exactly when $1$ is a root of the original. The discriminant of such a 'quadratic' can read zero for two unrelated reasons: a true tangency, or the leading term collapsing. A Mobius transform of roots is a bijection that preserves multiplicity, but only off its pole; the whole problem lives in that exception. (Aside: for every admissible $t$ the two images satisfy $u+v=-B/A=-3$, a constant — the sum is a Mobius invariant of this family.)"
  },
  {
    "theme": "vieta",
    "themeLabel": "Vieta & Symmetric Functions of Roots",
    "title": "Newton Climbs to the Tenth Power",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "vieta",
      "newton-recursion",
      "power-sums"
    ],
    "statement": "Let $\\alpha,\\beta$ be the roots of $x^2-x-1=0$. Define $p_n=\\alpha^n+\\beta^n$. Evaluate $p_{10}$.",
    "answer": "$123$",
    "trap": "Trying to compute $\\alpha^{10}+\\beta^{10}$ by directly powering $\\alpha=\\frac{1+\\sqrt5}{2}$ and rounding. Floating-point arithmetic returns $123.00000000000004$, not the exact integer, and using a truncated $\\alpha\\approx1.618$ gives $122.97$ which rounds the wrong way. The irrational arithmetic accumulates error and cannot certify the integer; the recursion is both exact and far faster.",
    "solutions": [
      {
        "name": "Newton's recursion",
        "steps": [
          "Vieta: $\\alpha+\\beta=1$ and $\\alpha\\beta=-1$. Each root satisfies $x^2=x+1$, so multiplying by $x^{n-2}$ and adding the two root-equations gives $p_n=p_{n-1}+p_{n-2}$.",
          "Seed: $p_0=\\alpha^0+\\beta^0=2$ and $p_1=\\alpha+\\beta=1$.",
          "Iterate: $p_2=3,\\ p_3=4,\\ p_4=7,\\ p_5=11,\\ p_6=18,\\ p_7=29,\\ p_8=47,\\ p_9=76$.",
          "Then $p_{10}=p_9+p_8=76+47=123$. Hence $\\boxed{123}$."
        ]
      },
      {
        "name": "Lucas-number identity",
        "steps": [
          "Since $\\alpha,\\beta$ are the golden-ratio conjugates, $p_n=\\alpha^n+\\beta^n$ are exactly the Lucas numbers $L_n$, with $L_0=2,\\ L_1=1$.",
          "Use the doubling identity $L_{2n}=L_n^2-2(-1)^n$. From $p_5=L_5=11$ take $n=5$: $L_{10}=L_5^2-2(-1)^5=121+2=123$.",
          "Therefore $p_{10}=\\boxed{123}$."
        ]
      }
    ],
    "remark": "Insight: $p_n=\\alpha^n+\\beta^n$ obeys the SAME recurrence as the original equation, $p_n=(\\alpha+\\beta)p_{n-1}-\\alpha\\beta\\,p_{n-2}$ — a two-term linear recurrence that never needs the roots themselves. This is the generic Newton's-identity machine for power sums of any quadratic."
  },
  {
    "theme": "vieta",
    "themeLabel": "Vieta & Symmetric Functions of Roots",
    "title": "Three in Step, but One Step is Imaginary",
    "difficulty": 5,
    "task": "Find the coefficients",
    "tags": [
      "vieta",
      "arithmetic-progression",
      "newton-power-sums",
      "hidden-constraint",
      "complex-roots",
      "parameter-coupling"
    ],
    "statement": "The cubic \\[ x^{3}-15x^{2}+a\\,x+b=0 \\] has its three roots in arithmetic progression, and the sum of the fourth powers of its roots equals $4737$. Determine the real numbers $a$ and $b$, and exhibit the roots.",
    "answer": "$a=66,\\ b=-80$; the cubic is $x^{3}-15x^{2}+66x-80=0$ with roots $2,\\,5,\\,8$ (an AP of common difference $3$).",
    "trap": "Both data — \"roots in AP\" and \\emph{$\\sum\\alpha^{4}=4737$} — are symmetric, so they translate into algebra without ever invoking reality. Writing the roots as $5-d,\\,5,\\,5+d$ (the $x^{2}$-coefficient forces the middle root $=15/3=5$) gives $\\sum\\alpha^{4}=2d^{4}+300\\,d^{2}+1875=4737$, a \\emph{quadratic in $d^{2}$}: $\\;2(d^{2})^{2}+300(d^{2})-2862=0\\Rightarrow d^{2}\\in\\{9,\\,-159\\}$. The seductive error is to feed both values back through Vieta and report two answers, $(a,b)=(66,-80)$ and $(a,b)=(234,-920)$. But $d^{2}=-159$ means the common difference $d$ is imaginary: the second cubic $x^{3}-15x^{2}+234x-920$ has roots $5,\\,5\\pm\\sqrt{159}\\,i$ — a conjugate pair that satisfies $\\beta-\\alpha=\\gamma-\\beta$ only \\emph{formally over $\\mathbb{C}$}. It even reproduces $\\sum\\alpha^{4}=4737$ exactly, which is why it survives every symmetric check. A real arithmetic progression demands $d\\in\\mathbb{R}$, i.e. $d^{2}\\ge 0$; the hidden reality constraint, not any arithmetic, kills the extraneous branch.",
    "solutions": [
      {
        "name": "AP parametrisation + Newton fourth power sum",
        "steps": [
          "By Vieta the sum of roots is $15$; for an AP $m-d,\\,m,\\,m+d$ the sum is $3m$, so the middle root is $m=\\tfrac{15}{3}=5$. (This is the AP--Vieta coupling: the central term equals one-third of the sum.)",
          "The fourth-power sum of $m-d,\\,m,\\,m+d$ expands to $\\sum\\alpha^{4}=2d^{4}+12m^{2}d^{2}+3m^{4}$. With $m=5$ this is $2d^{4}+300\\,d^{2}+1875$.",
          "Set it equal to $4737$: $\\,2d^{4}+300d^{2}-2862=0\\Rightarrow (d^{2})^{2}+150\\,d^{2}-1431=0$, whose roots are $d^{2}=9$ and $d^{2}=-159$.",
          "A real AP needs $d\\in\\mathbb{R}$, so $d^{2}\\ge 0$ forces $d^{2}=9$, i.e. $d=3$; the value $d^{2}=-159$ is rejected (it would make the outer roots a complex-conjugate pair, not a genuine progression).",
          "The roots are $2,5,8$. Then $a=\\!\\!\\sum_{i<j}\\alpha_i\\alpha_j=3m^{2}-d^{2}=75-9=66$ and $b=-\\alpha\\beta\\gamma=-m(m^{2}-d^{2})=-5(25-9)=-80$, giving $\\boxed{a=66,\\ b=-80}$ and roots $\\boxed{2,5,8}$."
        ]
      },
      {
        "name": "Vieta--AP identity, then eliminate via power sums",
        "steps": [
          "Let $e_1=15,\\ e_2=a,\\ e_3=-b$ be the elementary symmetric functions. The AP condition is captured intrinsically: with middle root $m=e_1/3=5$, writing $e_2=3m^{2}-d^{2}$ and $e_3=m(m^{2}-d^{2})$ and eliminating $d^{2}$ yields the coefficient identity $e_3=5\\,(e_2-50)$ — true for any AP-rooted cubic with $e_1=15$.",
          "Use Newton's identities with $p_1=e_1$: $p_2=e_1^{2}-2e_2$, $p_3=e_1^{3}-3e_1e_2+3e_3$, and $p_4=e_1p_3-e_2p_2+e_3p_1$. Substituting $e_1=15$ and $e_3=5(e_2-50)$ makes $p_4$ a function of $e_2$ alone.",
          "Imposing $p_4=4737$ collapses to $2e_2^{2}-600\\,e_2+\\,$(const)$=0$, i.e. $e_2\\in\\{66,\\,234\\}$, with the partners $e_3\\in\\{80,\\,920\\}$ and $d^{2}=75-e_2\\in\\{9,\\,-159\\}$.",
          "Reject $e_2=234$ because its $d^{2}=-159<0$ gives no real progression. Keep $e_2=66,\\,e_3=80$.",
          "Hence $a=e_2=66$ and $b=-e_3=-80$; the cubic $x^{3}-15x^{2}+66x-80$ factors as $(x-2)(x-5)(x-8)$, so $\\boxed{a=66,\\ b=-80}$ with roots $\\boxed{2,5,8}$."
        ]
      },
      {
        "name": "Deflate by the forced middle root, reduce to a quadratic",
        "steps": [
          "Since the roots are in AP, the middle one equals the mean of the sum, $\\tfrac{15}{3}=5$; thus $x=5$ is a root and $x^{3}-15x^{2}+ax+b=(x-5)\\bigl(x^{2}-10x+t\\bigr)$, where the remaining roots $p,q$ satisfy $p+q=10,\\ pq=t$.",
          "Comparing coefficients: $a=t+50$ and $b=-5t$. The AP forces $p,q$ symmetric about $5$, so $p,q=5\\mp d$ with $pq=25-d^{2}=t$, i.e. $d^{2}=25-t$.",
          "Compute $\\sum\\alpha^{4}=5^{4}+p^{4}+q^{4}=625+\\bigl[(p^{2}+q^{2})^{2}-2p^{2}q^{2}\\bigr]=625+(100-2t)^{2}-2t^{2}=2t^{2}-400t+10625$.",
          "Set $2t^{2}-400t+10625=4737\\Rightarrow t^{2}-200t+2944=0\\Rightarrow t\\in\\{16,\\,184\\}$. Then $d^{2}=25-t\\in\\{9,\\,-159\\}$; only $t=16$ ($d^{2}=9\\ge0$) yields a real AP, so $t=184$ is discarded.",
          "With $t=16$: the quadratic factor is $x^{2}-10x+16=(x-2)(x-8)$, giving roots $2,5,8$, and $a=t+50=66,\\ b=-5t=-80$. Thus $\\boxed{a=66,\\ b=-80}$, roots $\\boxed{2,5,8}$."
        ]
      }
    ],
    "remark": "The engine here is that both hypotheses are symmetric functions of the roots, so the entire problem can be pushed through Vieta and Newton's identities with no appeal to whether the roots are real — and that is precisely the snare. The quartic power sum $\\sum\\alpha^{4}=2d^{4}+12m^{2}d^{2}+3m^{4}$ is genuinely quadratic in $d^{2}$, manufacturing a second, perfectly self-consistent algebraic solution $(a,b)=(234,-920)$ that reproduces every given datum (same middle root $5$, same $\\sum\\alpha^{4}=4737$) yet describes the conjugate pair $5\\pm\\sqrt{159}\\,i$. The phrase arithmetic progression silently carries the reality constraint $d^{2}\\ge 0$: an AP lives on the real line, and a $\\beta-\\alpha=\\gamma-\\beta$ relation that holds only over $\\mathbb{C}$ is not one. The top-ranker lesson: when a constraint is purely symmetric, the candidate set it produces is larger than the real-world feasible set, and you must reimpose the geometric meaning (here, $d\\in\\mathbb{R}$) by hand to prune the imaginary impostor."
  },
  {
    "theme": "vieta",
    "themeLabel": "Vieta & Symmetric Functions of Roots",
    "title": "The Harmonic Door Has Two Keys, One Is Fake",
    "difficulty": 5,
    "task": "Find all",
    "tags": [
      "harmonic-progression",
      "reciprocal-polynomial",
      "vieta",
      "reality-of-roots",
      "necessary-not-sufficient"
    ],
    "statement": "Determine every real value of $a$ for which the three roots of \\[x^{3}-9x^{2}+12x+a=0\\] are distinct real numbers in harmonic progression (i.e. their reciprocals form an arithmetic progression). For each admissible $a$, exhibit the roots.",
    "answer": "$\\boxed{a=-4}$ is the only admissible value. The roots are then $\\;4-2\\sqrt3,\\;1,\\;4+2\\sqrt3\\;$ (numerically $0.536,\\;1,\\;7.464$), whose reciprocals $\\;1-\\tfrac{\\sqrt3}{2},\\;1,\\;1+\\tfrac{\\sqrt3}{2}\\;$ are in arithmetic progression with common difference $\\tfrac{\\sqrt3}{2}$. The value $a=-32$, which also satisfies the algebraic harmonic-progression condition, must be rejected: there the cubic has only one real root ($x=8$) and a complex-conjugate pair, so no three real reciprocals — let alone an AP — exist.",
    "trap": "Passing to the reciprocal polynomial $a y^{3}+12 y^{2}-9 y+1=0$ (roots $y_i=1/x_i$) and demanding that its roots be in AP, one uses the clean fact that for three numbers in AP the middle one equals one-third of their sum: $y_{\\text{mid}}=\\tfrac13\\sum y_i=\\tfrac13\\!\\left(-\\tfrac{12}{a}\\right)=-\\tfrac{4}{a}$, and this middle value must itself be a root. Substituting $y=-4/a$ into the reciprocal polynomial yields the quadratic condition $a^{2}+36a+128=0$, so $a=-4$ or $a=-32$ — and a strong student reports both. But \"the middle term equals one-third of the sum and is a root\" is only necessary; it never used that the other two reciprocals are real, distinct, and symmetric about the middle. At $a=-32$ the cubic is $x^3-9x^2+12x-32$, whose roots are $8$ and the complex pair $\\tfrac12\\pm\\tfrac{\\sqrt{15}}2 i$: there is exactly one real reciprocal, so a real harmonic progression is impossible. The discriminant condition is the door; reality of all three roots is the second key. Only $a=-4$ turns both.",
    "solutions": [
      {
        "name": "Reciprocal polynomial + AP-middle condition, then test reality",
        "steps": [
          "Roots in HP means the reciprocals $y_i=1/x_i$ are in AP. The $y_i$ are the roots of the reversed (reciprocal) polynomial $a y^{3}+12 y^{2}-9 y+1=0$ (valid since $a\\ne0$; if $a=0$ then $x=0$ is a root and has no reciprocal, so $a=0$ is excluded outright).",
          "For three reals in AP the middle term is the mean: $y_{\\text{mid}}=\\tfrac13(y_1+y_2+y_3)$. By Vieta on the reciprocal cubic, $y_1+y_2+y_3=-\\tfrac{12}{a}$, hence $y_{\\text{mid}}=-\\tfrac{4}{a}$, and this value must be an actual root.",
          "Substitute $y=-\\tfrac{4}{a}$ into $a y^{3}+12 y^{2}-9 y+1=0$ and multiply by $a^{2}$: $\\;a\\!\\left(-\\tfrac{4}{a}\\right)^{3}a^2+12\\!\\left(-\\tfrac{4}{a}\\right)^{2}a^2-9\\!\\left(-\\tfrac{4}{a}\\right)a^2+a^2=-64+192+36a+a^{2}=a^{2}+36a+128=0.$",
          "Thus $a^{2}+36a+128=(a+4)(a+32)=0$, giving the two candidate values $a=-4$ and $a=-32$. This condition is only necessary — it forces the middle reciprocal to be a root but never guaranteed three real roots.",
          "Reality test. For $a=-4$: $x^{3}-9x^{2}+12x-4=(x-1)(x^{2}-8x+4)=0$, roots $1,\\,4\\pm2\\sqrt3$ — three distinct reals; reciprocals $1,\\,1\\mp\\tfrac{\\sqrt3}{2}$ are an AP. For $a=-32$: $x^{3}-9x^{2}+12x-32=(x-8)(x^{2}-x+4)=0$, and $x^{2}-x+4$ has discriminant $1-16<0$ — only one real root, no real HP.",
          "Therefore the only admissible value is $\\boxed{a=-4}$, with roots $4-2\\sqrt3,\\,1,\\,4+2\\sqrt3$."
        ]
      },
      {
        "name": "Parametrise the reciprocals as a genuine real AP and match Vieta",
        "steps": [
          "Write the three reciprocals as $m-\\delta,\\,m,\\,m+\\delta$ with $m,\\delta$ real and $\\delta\\ne0$ (distinctness). These are the roots of the reciprocal polynomial $a y^{3}+12 y^{2}-9 y+1=0$, so Vieta gives $\\;\\sum y=-\\tfrac{12}{a},\\ \\sum y_iy_j=-\\tfrac{9}{a},\\ \\prod y=-\\tfrac{1}{a}.$",
          "Sum: $3m=-\\tfrac{12}{a}\\Rightarrow m=-\\tfrac{4}{a}$. Product: $m(m^{2}-\\delta^{2})=-\\tfrac{1}{a}$. Pair-sum: $\\;(m-\\delta)m+(m-\\delta)(m+\\delta)+m(m+\\delta)=3m^{2}-\\delta^{2}=-\\tfrac{9}{a}.$",
          "From the pair-sum, $\\delta^{2}=3m^{2}+\\tfrac{9}{a}$. Substituting $m=-\\tfrac4a$ gives $\\delta^{2}=\\tfrac{48}{a^{2}}+\\tfrac{9}{a}=\\tfrac{48+9a}{a^{2}}$. For a real AP we need $\\delta^{2}\\ge0$, and for distinct roots $\\delta^{2}>0$, i.e. $48+9a>0\\iff a>-\\tfrac{16}{3}.$",
          "Now use the product equation as the closing constraint: $m(m^2-\\delta^2)=-\\tfrac1a$ with $m=-\\tfrac4a,\\ m^2=\\tfrac{16}{a^2},\\ \\delta^2=\\tfrac{48+9a}{a^2}$ gives $-\\tfrac4a\\!\\left(\\tfrac{16-48-9a}{a^2}\\right)=-\\tfrac1a\\Rightarrow -\\tfrac4a\\cdot\\tfrac{-(32+9a)}{a^2}=-\\tfrac1a$, i.e. $\\tfrac{4(32+9a)}{a^3}=-\\tfrac1a\\Rightarrow 4(32+9a)=-a^{2}\\Rightarrow a^{2}+36a+128=0.$",
          "So again $a\\in\\{-4,-32\\}$, but the reality gate $a>-\\tfrac{16}{3}\\approx-5.33$ admits only $a=-4$ (since $-32<-\\tfrac{16}{3}$ makes $\\delta^{2}=\\tfrac{48-288}{1024}<0$, complex $\\delta$).",
          "At $a=-4$: $m=1,\\ \\delta^{2}=\\tfrac{48-36}{16}=\\tfrac34,\\ \\delta=\\tfrac{\\sqrt3}{2}$. Reciprocals $1\\mp\\tfrac{\\sqrt3}{2},1$ give roots $4\\pm2\\sqrt3,\\,1$. Hence $\\boxed{a=-4}$."
        ]
      },
      {
        "name": "Middle root from the harmonic mean, then factor and check the cofactor",
        "steps": [
          "If $x_1,x_2,x_3$ are in HP then $x_2$ is the harmonic mean of $x_1,x_3$, and more usefully the middle reciprocal is one-third of $\\sum 1/x_i$. For the monic cubic $x^{3}-9x^{2}+12x+a$, $\\sum \\tfrac{1}{x_i}=\\dfrac{e_2}{e_3}=\\dfrac{12}{-a}=-\\dfrac{12}{a}$, so the middle reciprocal is $-\\tfrac4a$ and the middle root is $x_2=-\\tfrac{a}{4}$.",
          "Hence $x=-\\tfrac a4$ must satisfy the cubic. Plug in and multiply by $64$: $-\\tfrac{a^3}{64}\\cdot64-9\\cdot\\tfrac{a^2}{16}\\cdot64+12\\cdot(-\\tfrac a4)\\cdot64+64a = -a^{3}-36a^{2}-192a+64a=-a^{3}-36a^{2}-128a=0.$ Dividing by $-a$ (as $a\\ne0$): $a^{2}+36a+128=0$, so $a=-4$ or $a=-32$.",
          "Each candidate's middle root is $x_2=-a/4$: for $a=-4$, $x_2=1$; for $a=-32$, $x_2=8$. Factor out $(x-x_2)$ to read off the other two roots from the quadratic cofactor.",
          "For $a=-4$: $x^{3}-9x^{2}+12x-4=(x-1)(x^{2}-8x+4)$; the cofactor has discriminant $64-16=48>0$, roots $4\\pm2\\sqrt3$, both real and positive — a genuine three-term HP.",
          "For $a=-32$: $x^{3}-9x^{2}+12x-32=(x-8)(x^{2}-x+4)$; the cofactor has discriminant $1-16=-15<0$, so its roots are non-real. The middle root $8$ exists, but its two HP partners are imaginary — no real harmonic progression.",
          "Only $a=-4$ delivers three distinct real roots in HP, so $\\boxed{a=-4}$."
        ]
      }
    ],
    "remark": "The harmonic-progression condition for a monic cubic $x^{3}+bx^{2}+cx+d$ is the symmetric identity $27d^{2}-9bcd+2c^{3}=0$ (here $27a^{2}+972a+3456=0$, i.e. $a^{2}+36a+128=0$). Every standard route — reciprocal polynomial, harmonic-mean middle root, or eliminant — lands on this single algebraic equation, and that is precisely its danger: it is a necessary condition extracted from one Vieta relation (the middle reciprocal equals the mean of the three) and is blind to whether the flanking reciprocals are real. A cubic always has the algebraic 'middle' of its three roots' reciprocals equal to their mean; the HP condition merely demands that this mean itself be a root, which can happen with two complex partners straddling a real centre. The honest finish is the discriminant of the cofactor (or the reality gate $\\delta^{2}>0$ in the AP-parametrisation): only $a=-4$ survives. Method 2 is the most revealing — it builds reality into the very ansatz, so the spurious root $a=-32$ is filtered by $\\delta^{2}\\ge0$ rather than discovered after the fact. The lesson for a top ranker: a progression condition derived purely from symmetric functions is a statement over $\\mathbb{C}$; promoting it to a real-AP/HP claim always demands a separate reality audit."
  },
  {
    "theme": "vieta",
    "themeLabel": "Vieta & Symmetric Functions of Roots",
    "title": "Newton Run Backwards, and the Phantom Third Root",
    "difficulty": 5,
    "task": "Find",
    "tags": [
      "vieta",
      "newton-identities",
      "power-sums",
      "reverse-recurrence",
      "p0-equals-n",
      "product-of-roots"
    ],
    "statement": "A monic cubic \\[x^{3}-5x^{2}+6x-c=0\\] has (possibly complex) roots $r_{1},r_{2},r_{3}$, where the constant $c$ is unknown. Let $p_{k}=r_{1}^{k}+r_{2}^{k}+r_{3}^{k}$ denote the $k$-th power sum of the roots. It is given that the three lowest power sums satisfy the single linear relation \\[p_{3}=3\\,p_{2}+4\\,p_{1}.\\] Determine the product $r_{1}r_{2}r_{3}$ of the roots (equivalently, find $c$).",
    "answer": "\\[ r_{1}r_{2}r_{3}=c=8,\\qquad\\text{so the cubic is } x^{3}-5x^{2}+6x-8=0. \\]",
    "trap": "The constant $c$ never appears in $p_{1}$ or $p_{2}$, so those are pinned by the visible coefficients alone: $p_{1}=e_{1}=5$ and $p_{2}=e_{1}^{2}-2e_{2}=13$, whence the relation forces $p_{3}=3(13)+4(5)=59$. To extract $c$ one must run Newton's identity at $k=3$ in reverse, and the lone genuine pitfall is the value of $p_{0}$. The recurrence $p_{k}=e_{1}p_{k-1}-e_{2}p_{k-2}+e_{3}\\,p_{k-3}$ is only valid for $k>n$; pushed down to $k=n=3$ it reads $p_{3}=e_{1}p_{2}-e_{2}p_{1}+e_{3}\\,p_{0}$, and the trap is to set $p_{0}=1$ (the reflex ``anything to the zero power is $1$''). But $p_{0}=r_{1}^{0}+r_{2}^{0}+r_{3}^{0}=1+1+1=n=3$: a power sum over three roots. With the erroneous $p_{0}=1$ one gets $59=35+e_{3}\\Rightarrow e_{3}=24$; the correct $p_{0}=3$ gives $59=35+3e_{3}\\Rightarrow e_{3}=8$. The forged cubic $x^{3}-5x^{2}+6x-24=0$ has power sum $p_{3}=107\\neq59$, so it violates the very relation it was built from — a clean certificate that $24$ is wrong and $c=8$.",
    "solutions": [
      {
        "name": "Reverse Newton's identity, guarding $p_0=n$",
        "steps": [
          "From the coefficients, Vieta gives the elementary symmetric functions $e_{1}=5$, $e_{2}=6$, $e_{3}=c$ (the unknown), since the cubic is $x^{3}-e_{1}x^{2}+e_{2}x-e_{3}$.",
          "The low-order Newton identities involve no $e_{3}$, so they fix the first two power sums outright: $p_{1}=e_{1}=5$ and $p_{2}=e_{1}p_{1}-2e_{2}=25-12=13$.",
          "Substitute these into the given relation to pin the third power sum: $p_{3}=3p_{2}+4p_{1}=3(13)+4(5)=59$.",
          "Now run Newton's identity at $k=3$ backwards. The correct form is $p_{3}=e_{1}p_{2}-e_{2}p_{1}+3e_{3}$ (the coefficient $3$ is $k\\,e_{k}$ at $k=3$, equally readable as $e_{3}p_{0}$ with $p_{0}=n=3$). Thus $59=5(13)-6(5)+3e_{3}=35+3e_{3}$.",
          "Solving, $3e_{3}=24$, so $e_{3}=r_{1}r_{2}r_{3}=8$ and $\\boxed{c=8}$, giving $x^{3}-5x^{2}+6x-8=0$."
        ]
      },
      {
        "name": "Sum-of-cubes factorization (no quoted recurrence)",
        "steps": [
          "Use the algebraic identity, valid for any three numbers, $r_{1}^{3}+r_{2}^{3}+r_{3}^{3}-3r_{1}r_{2}r_{3}=(r_{1}+r_{2}+r_{3})\\big(r_{1}^{2}+r_{2}^{2}+r_{3}^{2}-r_{1}r_{2}-r_{2}r_{3}-r_{3}r_{1}\\big)$, i.e. $p_{3}-3e_{3}=p_{1}\\,(p_{2}-e_{2})$.",
          "All ingredients except $e_{3}$ are known: $p_{1}=e_{1}=5$, $p_{2}=e_{1}^{2}-2e_{2}=13$, $e_{2}=6$, and $p_{3}=3p_{2}+4p_{1}=59$ from the given relation.",
          "Hence $59-3e_{3}=5\\,(13-6)=35$, so $3e_{3}=59-35=24$.",
          "Therefore $e_{3}=r_{1}r_{2}r_{3}=8$, i.e. $\\boxed{c=8}$. (The lone $3$ multiplying $r_{1}r_{2}r_{3}$ in the identity is exactly the ``three roots'' that the trap mishandles as one.)"
        ]
      },
      {
        "name": "Sum each root's own equation",
        "steps": [
          "Each root satisfies its defining cubic: $r_{i}^{3}-5r_{i}^{2}+6r_{i}-c=0$, that is $r_{i}^{3}=5r_{i}^{2}-6r_{i}+c$ for $i=1,2,3$.",
          "Add these three equations. The left side sums to $p_{3}$; on the right the constant $c$ is added once for each of the three roots, so $p_{3}=5p_{2}-6p_{1}+3c$ — the factor $3$ arises transparently from summing $c$ over three roots, leaving no room for the $p_{0}=1$ slip.",
          "Insert $p_{1}=5$, $p_{2}=13$, and $p_{3}=3p_{2}+4p_{1}=59$: $59=5(13)-6(5)+3c=35+3c$.",
          "Thus $3c=24$ and $\\boxed{c=8}$, so $r_{1}r_{2}r_{3}=e_{3}=c=8$ and the cubic is $x^{3}-5x^{2}+6x-8=0$."
        ]
      }
    ],
    "remark": "Insight: power sums and elementary symmetric functions are interconvertible, and Newton's identities are the dictionary in both directions. Running them forward (coefficients $\\to$ power sums) is routine; the sport here is running them backward — using a stated relation among $p_1,p_2,p_3$ to recover a hidden coefficient. The crux is that the recurrence $p_k=e_1p_{k-1}-e_2p_{k-2}+e_3p_{k-3}$ only holds for $k>n$; at the boundary $k=n$ the boundary term is $k\\,e_k$, equivalently $e_k\\,p_0$ with $p_0=n$, the number of roots — not $1$. The third solution makes this concrete: summing $r_i^3=e_1r_i^2-e_2r_i+e_3$ over all roots adds $e_3$ once per root, so the coefficient is literally the count $n=3$. Note also that the recovered cubic has one real root and a complex-conjugate pair, so no shortcut by guessing integer roots exists — the answer can only come through the symmetric-function machinery."
  },
  {
    "theme": "vieta",
    "themeLabel": "Vieta & Symmetric Functions of Roots",
    "title": "The Cube Sum That Forgot to Stay Real",
    "difficulty": 5,
    "task": "Find",
    "tags": [
      "vieta",
      "power-sums",
      "cube-sum",
      "parameter",
      "discriminant",
      "hidden-constraint"
    ],
    "statement": "Let $\\alpha$ and $\\beta$ be the real roots of the quadratic \\[x^{2}-2x+c=0,\\] where $c$ is a real parameter. Suppose the third power sum of the roots is tied to the parameter and the lower symmetric functions through \\[\\alpha^{3}+\\beta^{3}=(\\alpha\\beta)^{2}-4(\\alpha+\\beta).\\] Find all values of $c$ for which this holds.",
    "answer": "\\[ c=-8 \\quad(\\text{the only admissible value; the roots are }4\\text{ and }-2). \\]",
    "trap": "Reducing the cube sum by Vieta gives $\\alpha^{3}+\\beta^{3}=(\\alpha+\\beta)^{3}-3\\alpha\\beta(\\alpha+\\beta)=8-6c$, while $(\\alpha\\beta)^{2}-4(\\alpha+\\beta)=c^{2}-8$. The condition collapses to the clean quadratic $c^{2}+6c-16=0$, i.e. $(c+8)(c-2)=0$, so the algebra hands back two candidates $c=-8$ and $c=2$. The fatal temptation is to report both. But the problem stipulates that $\\alpha,\\beta$ are real, and that is a constraint the power-sum equation never sees: power sums of a complex-conjugate pair are perfectly real, so $c=2$ (whose roots are $1\\pm i$) satisfies the identity $\\alpha^{3}+\\beta^{3}=(\\alpha\\beta)^{2}-4(\\alpha+\\beta)$ exactly ($-4=-4$) and leaves no algebraic footprint of its illegitimacy. Only the discriminant exposes it: real roots require $\\Delta=4-4c\\ge 0$, i.e. $c\\le 1$. Thus $c=2$ must be discarded and $c=-8$ is the unique answer. A solver who trusts the symmetric-function machinery alone, forgetting that it is blind to reality of the roots, ships the wrong solution set $\\{-8,2\\}$.",
    "solutions": [
      {
        "name": "Vieta reduction, then guard the discriminant",
        "steps": [
          "By Vieta, $\\alpha+\\beta=2$ and $\\alpha\\beta=c$. Reduce the left side with the identity $\\alpha^{3}+\\beta^{3}=(\\alpha+\\beta)^{3}-3\\alpha\\beta(\\alpha+\\beta)=2^{3}-3c\\cdot 2=8-6c$.",
          "The right side is $(\\alpha\\beta)^{2}-4(\\alpha+\\beta)=c^{2}-4\\cdot 2=c^{2}-8$. Equating gives $8-6c=c^{2}-8$, i.e. $c^{2}+6c-16=0$, which factors as $(c+8)(c-2)=0$, so $c\\in\\{-8,2\\}$.",
          "Now impose the standing hypothesis that the roots are real: the discriminant must satisfy $\\Delta=(-2)^{2}-4c=4-4c\\ge 0$, i.e. $c\\le 1$. This is information the cube-sum equation simply does not carry.",
          "Test the candidates: $c=2>1$ gives $\\Delta=-4<0$ (roots $1\\pm i$, not real) and is rejected; $c=-8\\le 1$ gives $\\Delta=36>0$, real distinct roots. Hence $\\boxed{c=-8}$, with roots $\\tfrac{2\\pm 6}{2}=4,-2$."
        ]
      },
      {
        "name": "Newton's recurrence to build $p_3$ in $c$",
        "steps": [
          "With $e_1=\\alpha+\\beta=2$ and $e_2=\\alpha\\beta=c$, the power sums obey the order-2 recurrence $p_k=e_1\\,p_{k-1}-e_2\\,p_{k-2}=2p_{k-1}-c\\,p_{k-2}$, valid for $k\\ge 2$, seeded by $p_0=2$ (two roots) and $p_1=e_1=2$.",
          "Crank it: $p_2=2p_1-c\\,p_0=2(2)-c(2)=4-2c$, then $p_3=2p_2-c\\,p_1=2(4-2c)-c(2)=8-6c$.",
          "The prescribed coupling reads $p_3=e_2^{2}-4\\,p_1=c^{2}-8$. Setting $8-6c=c^{2}-8$ yields $c^{2}+6c-16=0$, so $c=-8$ or $c=2$.",
          "Reality of the roots demands $\\Delta=4-4c\\ge0\\Rightarrow c\\le1$, eliminating $c=2$. Therefore $\\boxed{c=-8}$. (One can verify $p_3=8-6(-8)=56=64-8=(\\alpha\\beta)^2-4(\\alpha+\\beta)$.)"
        ]
      },
      {
        "name": "Sum each root's own equation",
        "steps": [
          "Every root satisfies $x^{2}-2x+c=0$, i.e. $x^{2}=2x-c$; multiplying by $x$, $x^{3}=2x^{2}-cx$. Apply this to $\\alpha$ and $\\beta$ and add: $\\alpha^{3}+\\beta^{3}=2(\\alpha^{2}+\\beta^{2})-c(\\alpha+\\beta)$ — no quoted recurrence, just the defining equation summed over the roots.",
          "Since $\\alpha^{2}+\\beta^{2}=(\\alpha+\\beta)^{2}-2\\alpha\\beta=4-2c$ and $\\alpha+\\beta=2$, this gives $\\alpha^{3}+\\beta^{3}=2(4-2c)-2c=8-6c$.",
          "The right side of the coupling is $(\\alpha\\beta)^{2}-4(\\alpha+\\beta)=c^{2}-8$, so $8-6c=c^{2}-8\\Rightarrow (c+8)(c-2)=0$, giving $c\\in\\{-8,2\\}$.",
          "Finally enforce real roots, $4-4c\\ge0\\Rightarrow c\\le1$; $c=2$ is a complex-root impostor and is discarded, leaving $\\boxed{c=-8}$ (roots $4,-2$)."
        ]
      }
    ],
    "remark": "Insight: Newton power sums are symmetric functions of the roots, so they are computed purely from the coefficients via $e_1,e_2$ and remain real-valued even when the roots are a complex-conjugate pair. That is exactly why this kind of fusion problem hides a trap: turning the cube-sum condition into the polynomial equation $c^{2}+6c-16=0$ is faithful, but the polynomial is agnostic to whether the roots are real. The word ``real'' in the hypothesis is enforced by a separate gatekeeper — the discriminant $\\Delta=4-4c$ — which the symmetric-function calculation cannot detect. The impostor $c=2$ is doubly seductive precisely because it satisfies the stated identity with no contradiction in sight; only $\\Delta<0$ unmasks it. The discipline a top scorer must internalize: after Vieta delivers a parameter equation, always re-confront every standing constraint on the roots (reality, sign, distinctness, integrality) that the symmetric algebra silently dropped."
  },
  {
    "theme": "vieta",
    "themeLabel": "Vieta & Symmetric Functions of Roots",
    "title": "Pinning a Parameter by a Power Sum",
    "difficulty": 5,
    "task": "Find all",
    "tags": [
      "vieta",
      "parametric-family",
      "power-sums",
      "coefficient-pinning"
    ],
    "statement": "Find all real values of $p$ for which the roots $\\alpha,\\beta$ of $x^2-2px+(p^2-4)=0$ satisfy $\\alpha^2+\\beta^2=26$.",
    "answer": "$p=3$ or $p=-3$.",
    "trap": "Computing $\\alpha^2+\\beta^2=(\\alpha+\\beta)^2-2\\alpha\\beta=4p^2-2(p^2-4)=2p^2+8$ correctly, but then taking only the positive square root $p=3$ and forgetting that $p^2=9$ also gives $p=-3$ (both yield real roots, since the discriminant $16>0$ for all $p$).",
    "solutions": [
      {
        "name": "Power sum in the parameter",
        "steps": [
          "Vieta: $\\alpha+\\beta=2p$, $\\alpha\\beta=p^2-4$.",
          "$\\alpha^2+\\beta^2=(\\alpha+\\beta)^2-2\\alpha\\beta=4p^2-2(p^2-4)=2p^2+8$.",
          "Set $2p^2+8=26\\Rightarrow p^2=9\\Rightarrow p=\\pm3$.",
          "Discriminant $=4p^2-4(p^2-4)=16>0$ always, so both are valid. Hence $\\boxed{p=\\pm3}$."
        ]
      },
      {
        "name": "Explicit roots",
        "steps": [
          "The discriminant is $4p^2-4(p^2-4)=16$, so the roots are $\\alpha,\\beta=p\\pm2$.",
          "Then $\\alpha^2+\\beta^2=(p+2)^2+(p-2)^2=2p^2+8$.",
          "Setting $2p^2+8=26$ gives $p^2=9$, so $p=3$ (roots $1,5$) or $p=-3$ (roots $-5,-1$). Thus $\\boxed{p=\\pm3}$."
        ]
      }
    ],
    "remark": "Insight: writing the constant term as $p^2-4$ makes the discriminant a constant $16$, decoupling 'are the roots real' from 'what is $p$' — a designer's trick that guarantees both branches survive."
  },
  {
    "theme": "vieta",
    "themeLabel": "Vieta & Symmetric Functions of Roots",
    "title": "The Grand Hybrid: Gap, Build, Then Square",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "vieta",
      "root-relation",
      "transformed-roots",
      "symmetric-functions",
      "building-quadratics"
    ],
    "statement": "Let $\\alpha,\\beta$ be the roots of $x^2-mx+3=0$, where $m>0$ is chosen so that the two roots differ by exactly $2$. Form the numbers \\[u=\\frac{\\alpha}{\\beta+1},\\qquad v=\\frac{\\beta}{\\alpha+1}.\\] Evaluate $u^2+v^2$.",
    "answer": "$\\dfrac{37}{16}$",
    "trap": "After finding $m$ from $(\\alpha-\\beta)^2=m^2-4\\cdot3=4$, computing $u+v$ but then writing $u^2+v^2=(u+v)^2$, forgetting the $-2uv$ term (this gives $\\tfrac{49}{16}$). Equally fatal: using $(\\alpha-\\beta)^2=m^2-2\\cdot3$ (the sum-of-squares coefficient) which gives the wrong $m=\\sqrt{10}$.",
    "solutions": [
      {
        "name": "Pin m, then symmetric functions of u,v",
        "steps": [
          "Differ by $2$: $(\\alpha-\\beta)^2=(\\alpha+\\beta)^2-4\\alpha\\beta=m^2-12=4$, so $m^2=16$ and $m=4$ (taking $m>0$). The roots are then $1$ and $3$.",
          "Compute $u+v=\\dfrac{\\alpha(\\alpha+1)+\\beta(\\beta+1)}{(\\alpha+1)(\\beta+1)}=\\dfrac{(\\alpha^2+\\beta^2)+(\\alpha+\\beta)}{\\alpha\\beta+(\\alpha+\\beta)+1}$.",
          "With $\\alpha+\\beta=4,\\ \\alpha\\beta=3,\\ \\alpha^2+\\beta^2=16-6=10$: $u+v=\\dfrac{10+4}{3+4+1}=\\dfrac{14}{8}=\\dfrac74$.",
          "And $uv=\\dfrac{\\alpha\\beta}{(\\alpha+1)(\\beta+1)}=\\dfrac{3}{8}$. Then $u^2+v^2=(u+v)^2-2uv=\\dfrac{49}{16}-\\dfrac{6}{8}=\\dfrac{49-12}{16}=\\dfrac{37}{16}$. So $\\boxed{\\dfrac{37}{16}}$."
        ]
      },
      {
        "name": "Direct from explicit roots",
        "steps": [
          "From $m=4$ the roots are $1$ and $3$. Take $\\alpha=1,\\beta=3$: $u=\\dfrac{1}{3+1}=\\dfrac14$, $v=\\dfrac{3}{1+1}=\\dfrac32$.",
          "Then $u^2+v^2=\\dfrac1{16}+\\dfrac94=\\dfrac1{16}+\\dfrac{36}{16}=\\dfrac{37}{16}$.",
          "The expression is symmetric in $\\alpha\\leftrightarrow\\beta$, so swapping the roots gives the same value. Hence $\\boxed{\\dfrac{37}{16}}$."
        ]
      },
      {
        "name": "Build the quadratic for u,v",
        "steps": [
          "From $u+v=\\dfrac74$ and $uv=\\dfrac38$, the numbers $u,v$ are the roots of $x^2-\\dfrac74x+\\dfrac38=0$, i.e. $8x^2-14x+3=0$.",
          "For the roots of $8x^2-14x+3=0$: sum $=\\dfrac{14}{8}=\\dfrac74$, product $=\\dfrac{3}{8}$.",
          "$u^2+v^2=\\text{(sum)}^2-2\\,\\text{(product)}=\\dfrac{49}{16}-\\dfrac34=\\dfrac{37}{16}$. So $\\boxed{\\dfrac{37}{16}}$."
        ]
      }
    ],
    "remark": "This problem chains all three core skills: a root-relation pins $m$, a Vieta computation builds the $u,v$ quadratic, and a symmetric identity extracts $u^2+v^2$ -- yet the answer stays a clean fraction because the roots were engineered to be the integers $1$ and $3$."
  },
  {
    "theme": "discriminant",
    "themeLabel": "The Discriminant & Nature of Roots",
    "title": "Two Parabolas Wear the Same Family Crest",
    "difficulty": 5,
    "task": "Find and prove",
    "tags": [
      "envelope",
      "discriminant",
      "repeated-root-locus",
      "tangency",
      "perfect-square",
      "family-of-curves"
    ],
    "statement": "For each real number $t$ consider the upward unit-width parabola \\[\\mathcal{F}_t:\\qquad y=(x-t)^2+t^2 .\\] As $t$ ranges over $\\mathbb{R}$ these curves sweep out a one-parameter family. Find, and prove via a discriminant argument, the equation of the curve $\\mathcal{E}$ that is tangent to every single member $\\mathcal{F}_t$ (the envelope of the family). State also the curve traced by the vertices of the members, and explain precisely why the two curves are different.",
    "answer": "The envelope is the parabola \\[\\boxed{\\,y=\\dfrac{x^{2}}{2}\\,},\\] which touches the member $\\mathcal{F}_t$ at the single point $\\bigl(2t,\\,2t^{2}\\bigr)$ with matching slope $2t$. The locus of the vertices is the steeper parabola $y=x^{2}$ (the vertex of $\\mathcal{F}_t$ sits at $(t,t^{2})$). These are genuinely distinct curves: $y=x^{2}$ lies strictly above $y=\\tfrac{x^{2}}{2}$ for every $x\\neq0$, and crucially $y=x^{2}$ crosses each member transversally (a simple root, contact of order one) whereas $y=\\tfrac{x^{2}}{2}$ kisses each member (a double root, contact of order two). Only the latter is the envelope.",
    "trap": "The phrase ``the curve traced by the family'' lures the strong student into computing the locus of the vertices. Each $\\mathcal{F}_t=(x-t)^2+t^2$ has its minimum at $x=t$, giving vertex $(t,t^2)$, so the vertices march along $y=x^2$ — and the tempting conclusion is that $y=x^2$ is the curve the family ``traces.'' But the envelope is the curve tangent to every member, not the curve through their lowest points, and here the two are different parabolas. The fatal check is the order of contact: substituting $y=x^2$ into a member gives $(x-t)^2+t^2-x^2=2t^2-2tx$, a polynomial with the simple root $x=t$ — the vertex locus merely passes through each vertex and cuts across the parabola there, it does not graze it. The true envelope must meet each member in a repeated root (perfect square); that forces $y=\\tfrac{x^2}{2}$, not $y=x^2$. Conflating ``locus of vertices'' with ``envelope'' is the trap, and it is exactly a missed double-root / discriminant condition, not an arithmetic slip.",
    "solutions": [
      {
        "name": "Discriminant of membership: when does a point lie on some member?",
        "steps": [
          "Fix a point $(x,y)$ of the plane and ask: for which $x,y$ does there exist a parameter $t$ with $(x,y)\\in\\mathcal{F}_t$? Rearranging $y=(x-t)^2+t^2$ in powers of $t$ gives the quadratic-in-$t$ condition \\[2t^{2}-2xt+(x^{2}-y)=0 .\\]",
          "This has a real solution $t$ exactly when its discriminant in $t$ is non-negative: \\[\\Delta_t=(-2x)^2-4\\cdot2\\cdot(x^2-y)=4x^2-8x^2+8y=-4\\,(x^{2}-2y)\\ge 0\\;\\Longleftrightarrow\\; y\\ge \\tfrac{x^{2}}{2}.\\] So the family covers exactly the region $y\\ge x^2/2$, sweeping it twice in the interior and once on the boundary.",
          "The boundary of the swept region — the locus where the membership quadratic has a repeated root in $t$, i.e. $\\Delta_t=0$ — is precisely \\[y=\\frac{x^{2}}{2}.\\] A repeated root in $t$ means the point is reached by exactly one member, the hallmark of envelope tangency.",
          "Tangency check. The unique $t$ on the boundary is $t=\\dfrac{2x}{2\\cdot2}=\\dfrac{x}{2}$; equivalently the envelope meets $\\mathcal{F}_t$ where $(x-t)^2+t^2=\\tfrac{x^2}{2}$, i.e. $\\tfrac12(x-2t)^2=0$, a double root at $x=2t$. Both curves have slope $2t$ there, confirming genuine tangency at $(2t,2t^2)$.",
          "Hence the envelope is $\\boxed{\\,y=\\dfrac{x^{2}}{2}\\,}$, distinct from the vertex locus $y=x^2$ (the latter solves $2t^2-2tx=0$, a simple root $x=t$ — a transversal crossing, not a kiss)."
        ]
      },
      {
        "name": "Classical envelope: eliminate the parameter via $\\partial_t f=0$",
        "steps": [
          "Write the family as $F(x,y,t)=(x-t)^2+t^2-y=0$. The envelope is found by solving simultaneously $F=0$ and $\\dfrac{\\partial F}{\\partial t}=0$ and eliminating $t$.",
          "Differentiate: $\\dfrac{\\partial F}{\\partial t}=-2(x-t)+2t=4t-2x=0\\Rightarrow t=\\dfrac{x}{2}.$ (This selects, for each $x$, the single member that grazes rather than crosses the would-be envelope.)",
          "Substitute $t=x/2$ into $y=(x-t)^2+t^2$: \\[y=\\Bigl(x-\\tfrac{x}{2}\\Bigr)^{2}+\\Bigl(\\tfrac{x}{2}\\Bigr)^{2}=\\frac{x^{2}}{4}+\\frac{x^{2}}{4}=\\frac{x^{2}}{2}.\\]",
          "Therefore the envelope is $\\boxed{\\,y=\\dfrac{x^{2}}{2}\\,}$. Contrast the vertex computation: the vertex of $\\mathcal{F}_t$ comes from $\\partial_x[(x-t)^2+t^2]=0\\Rightarrow x=t$, giving $(t,t^2)$ and the locus $y=x^2$. The two parabolas arise from differentiating with respect to different variables — $t$ (envelope) versus $x$ (vertex) — which is exactly why they differ."
        ]
      },
      {
        "name": "Tangent-from-the-start: impose double-root contact and let the discriminant pin the coefficient",
        "steps": [
          "By scaling symmetry the envelope must be a parabola through the origin of the form $y=c\\,x^{2}$ for some constant $c$ (the family is invariant under $(x,y,t)\\mapsto(\\lambda x,\\lambda^2 y,\\lambda t)$, which fixes only curves $y=cx^2$). Demand that this candidate be tangent to every member, i.e. meet each $\\mathcal{F}_t$ in a repeated root in $x$.",
          "Set the candidate equal to a member: $c x^{2}=(x-t)^2+t^2$, i.e. $(1-c)x^{2}-2t\\,x+2t^{2}=0.$ For double-root (tangential) contact, the discriminant of this quadratic in $x$ must vanish — and it must vanish for all $t$, since tangency is required to every member.",
          "Compute the discriminant in $x$: \\[\\Delta_x=(-2t)^2-4(1-c)(2t^2)=4t^2-8t^2(1-c)=4t^{2}\\bigl(2c-1\\bigr).\\] Requiring $\\Delta_x=0$ for every $t$ forces the bracket to vanish: $2c-1=0\\Rightarrow c=\\tfrac12.$",
          "Thus the only curve $y=cx^2$ that touches every member is $\\boxed{\\,y=\\dfrac{x^{2}}{2}\\,}$, with contact point at the double root $x=\\dfrac{2t}{2(1-c)}=2t$, i.e. $(2t,2t^2)$.",
          "Sanity on the trap value $c=1$ (vertex locus $y=x^2$): then $\\Delta_x=4t^2(2\\cdot1-1)=4t^2>0$ for $t\\ne0$ — the candidate cuts each member in two distinct points, not a tangency. Only $c=\\tfrac12$ kills the discriminant identically, confirming the envelope is $y=\\tfrac{x^2}{2}$, not $y=x^2$."
        ]
      }
    ],
    "remark": "The whole problem turns on one idea: tangency is a repeated-root statement, and a repeated root is a vanishing discriminant. Three independent routes — the discriminant of the membership quadratic in $t$, the classical $\\{F=0,\\,\\partial_t F=0\\}$ elimination, and forcing double-root contact in $x$ — all converge on $y=\\tfrac{x^2}{2}$, which is the chapter's lesson that the discriminant is a structural envelope detector, not a plug-in. The trap is conceptually instructive: a family of parabolas carries two natural associated curves that look interchangeable but are not — the locus of vertices ($y=x^2$, where each member bottoms out) and the envelope ($y=x^2/2$, where members are mutually tangent). They coincide only for degenerate families (e.g. $y=(x-t)^2+k$ with a constant shift, whose vertices and envelope both collapse to the line $y=k$). Here the $t^2$-shift lifts the vertices onto a parabola twice as steep as the envelope, and the discriminant is exactly the instrument that tells the two apart: order-two contact (perfect square, $\\Delta=0$) for the envelope versus order-one crossing ($\\Delta>0$) for the vertex locus. A top ranker should leave with the reflex that ``the curve a family traces'' is ambiguous until you decide whether you mean where members turn around or where they graze each other, and that only the discriminant answers the latter."
  },
  {
    "theme": "discriminant",
    "themeLabel": "The Discriminant & Nature of Roots",
    "title": "The Resolvent's Squared Factor Is a Decoy",
    "difficulty": 5,
    "task": "Find",
    "tags": [
      "resolvent-cubic",
      "discriminant",
      "quartic",
      "repeated-root",
      "multiplicity-trap",
      "depressed-quartic"
    ],
    "statement": "Consider the depressed quartic \\[f(x)=x^{4}-6x^{2}+8x+r,\\] where $r$ is a real parameter. Its resolvent cubic is \\[R(z)=z^{3}-pz^{2}-4rz+(4pr-q^{2})\\quad\\text{with }p=-6,\\ q=8,\\] i.e. $R(z)=z^{3}+6z^{2}-4rz-(24r+64)$, whose three roots are the pairing sums $\\alpha\\beta+\\gamma\\delta,\\ \\alpha\\gamma+\\beta\\delta,\\ \\alpha\\delta+\\beta\\gamma$ of the roots $\\alpha,\\beta,\\gamma,\\delta$ of $f$. Determine every real $r$ for which $R(z)$ has a root of multiplicity exactly two (a double root that is not also a triple root). For that $r$, exhibit the factorization of both $R$ and $f$.",
    "answer": "\\[\\boxed{r=24}\\] is the only value giving the resolvent an exactly-double root. There $R(z)=(z-10)(z+8)^{2}$ (double root $z=-8$, simple root $z=10$) and $f(x)=(x+2)^{2}\\,(x^{2}-4x+6)$, with the genuine double root $x=-2$ and a complex-conjugate pair $2\\pm\\sqrt2\\,i$. The other zero of the discriminant, $r=-3$, must be rejected: there $R(z)=(z+2)^{3}$ is a triple root and $f(x)=(x-1)^{3}(x+3)$, so the requested multiplicity is two, not three.",
    "trap": "The discriminant of $R$ is the cubic-in-$r$ \\[\\Delta_{R}(r)=256\\,(r-24)\\,(r+3)^{2},\\] and a repeated root of $R$ requires $\\Delta_{R}(r)=0$, so $r=24$ or $r=-3$. The seductive misstep is to read the squared factor $(r+3)^{2}$ as the signature of the double root and announce $r=-3$ (with $r=24$, the simple factor, dismissed as the ``non-degenerate'' case). This conflates two unrelated multiplicities: the exponent of $r$ as a root of $\\Delta_{R}(r)$ has nothing to do with the multiplicity of $R$'s repeated root in $z$. In fact the assignment is reversed. At $r=-3$ the resolvent is $(z+2)^{3}$ — a triple root, which the problem explicitly excludes — because the quartic degenerates to a triple root $x=1$, collapsing all three pairing sums to one value. At $r=24$ the resolvent is $(z-10)(z+8)^{2}$ — an honest double root — arising from a genuine double root $x=-2$ of $f$, which makes exactly two of the three pairings coincide. The squared factor in $\\Delta_R$ marks where two distinct degenerate-root locus sheets are tangent, not where the resolvent's root is double. So the correct answer is $r=24$, the value the trap discards.",
    "solutions": [
      {
        "name": "Discriminant of the resolvent, then classify the multiplicity",
        "steps": [
          "Write $R(z)=z^{3}+6z^{2}-4rz-(24r+64)$ and compute its discriminant. For a cubic $z^{3}+Bz^{2}+Cz+D$ the discriminant is $\\Delta=18BCD-4B^{3}D+B^{2}C^{2}-4C^{3}-27D^{2}$; substituting $B=6,\\ C=-4r,\\ D=-(24r+64)$ and simplifying gives $\\Delta_{R}(r)=256\\,(r-24)(r+3)^{2}$.",
          "A cubic has a repeated root exactly when its discriminant vanishes, so the candidates are $r=24$ and $r=-3$. But $\\Delta_{R}=0$ only certifies some repeated root; it cannot tell a double root from a triple one, which is precisely what the question asks to separate. The exponents in $256(r-24)(r+3)^{2}$ describe the geometry of the parameter $r$, never the multiplicity of the root $z$.",
          "Resolve each candidate by factoring $R$. At $r=24$: $R(z)=z^{3}+6z^{2}-96z-640=(z-10)(z+8)^{2}$ — root $z=-8$ has multiplicity exactly $2$. At $r=-3$: $R(z)=z^{3}+6z^{2}+12z+8=(z+2)^{3}$ — a triple root, which is multiplicity $3$, not $2$.",
          "Only $r=24$ meets ``exactly two.'' Reading off the quartic there, $f(x)=x^{4}-6x^{2}+8x+24=(x+2)^{2}(x^{2}-4x+6)$, whose double root $x=-2$ is the source of the resolvent's double root. Hence $\\boxed{r=24}$."
        ]
      },
      {
        "name": "Repeated root via $R=R'=0$, classifying double vs triple by also testing $R''$",
        "steps": [
          "A repeated root $z_{0}$ of $R$ satisfies $R(z_{0})=R'(z_{0})=0$; it is a triple root precisely when additionally $R''(z_{0})=0$. With $R'(z)=3z^{2}+12z-4r$ and $R''(z)=6z+12$, eliminating $z$ between $R$ and $R'$ (the resultant) gives $\\operatorname{Res}_{z}(R,R')=-256\\,(r-24)(r+3)^{2}$, vanishing at $r=24,\\,-3$ — the same two candidates.",
          "Test the triple-root condition $R''(z_{0})=0\\Rightarrow z_{0}=-2$. Demanding $R'(-2)=0$ forces $3(4)+12(-2)-4r=12-24-4r=-12-4r=0\\Rightarrow r=-3$, and substituting back, $R(-2)=-8+24+8(-3)-(24(-3)+64)=-8+24-24+8=0$. So $z_{0}=-2$ is genuinely a triple root at $r=-3$, making $r=-3$ exactly the triple-root parameter — it fails ``multiplicity exactly two.''",
          "At the other candidate $r=24$, the repeated root is $z_{0}=-8$ (from $R'(-8)=192-96-96=0$), but $R''(-8)=-48+12=-36\\neq0$, so $z_{0}=-8$ is a double root and the third root $z=10$ is simple. This is the configuration sought.",
          "Therefore the unique value giving an exactly-double resolvent root is $\\boxed{r=24}$, with $R(z)=(z-10)(z+8)^{2}$ and $f(x)=(x+2)^{2}(x^{2}-4x+6)$."
        ]
      },
      {
        "name": "Transfer to the quartic: $\\Delta_{\\text{resolvent}}=\\Delta_{\\text{quartic}}$",
        "steps": [
          "Classically the resolvent cubic and the quartic share the same discriminant: $\\Delta_{R}(r)=\\Delta_{f}(r)$. Indeed $\\operatorname{disc}_{x}\\big(x^{4}-6x^{2}+8x+r\\big)=256(r-24)(r+3)^{2}$, matching Solution 1. So $R$ has a repeated root iff $f$ has a repeated root, and one can classify by looking at $f$ directly.",
          "Because the pairing sums are $\\alpha\\beta+\\gamma\\delta$ etc., two of them coincide iff two roots of $f$ are equal (since $(\\alpha\\beta+\\gamma\\delta)-(\\alpha\\gamma+\\beta\\delta)=(\\alpha-\\delta)(\\beta-\\gamma)$, and likewise). A single double root of $f$ makes exactly one such difference vanish, giving $R$ an exactly-double root; a triple root of $f$ makes all three coincide, giving $R$ a triple root.",
          "Factor $f$ at each discriminant zero. $r=24$: $f=(x+2)^{2}(x^{2}-4x+6)$ — a lone double root $x=-2$ (the quadratic factor has discriminant $16-24<0$, so no further coincidence) $\\Rightarrow$ resolvent root exactly double. $r=-3$: $f=(x-1)^{3}(x+3)$ — a triple root $\\Rightarrow$ resolvent triple root.",
          "Hence the quartic's lone-double-root locus is $r=24$ and the triple-root locus is $r=-3$; the resolvent inherits the same classification. The exactly-double resolvent root occurs only at $\\boxed{r=24}$."
        ]
      }
    ],
    "remark": "Insight: the resolvent cubic and its parent quartic carry the same discriminant, so $\\Delta=0$ flags a repeated root of one exactly when it flags a repeated root of the other — but $\\Delta=0$ is multiplicity-blind: it cannot, by itself, distinguish a double root from a triple. The decoy is to mistake the algebraic multiplicity of $r$ in the factored discriminant $256(r-24)(r+3)^{2}$ for the multiplicity of the repeated root in $z$. They are different objects living on different variables; here they happen to be anti-correlated — the squared factor $r=-3$ produces a triple resolvent root, while the simple factor $r=24$ produces the genuine double. The squared factor in a discriminant-as-function-of-a-parameter signals a tangency of degeneracy sheets (the triple-root point sits where the double-root curve is tangent to the parameter axis), not the order of vanishing of the polynomial whose discriminant it is. Geometrically the double root $z=-8$ of $R$ at $r=24$ is exactly the statement that the two complementary pairings $\\{\\alpha\\delta+\\beta\\gamma\\}$ and $\\{\\alpha\\gamma+\\beta\\delta\\}$ coincide once the quartic acquires the double root $x=-2$ — two distinct pairings of the roots fuse into one shared value. The lesson for a top ranker: when a discriminant is your detector, always finish by reading off the actual factorization and counting multiplicities; the shape of the discriminant locus and the order of the root it detects are not the same number."
  },
  {
    "theme": "discriminant",
    "themeLabel": "The Discriminant & Nature of Roots",
    "title": "A Quartic That Never Touches Zero",
    "difficulty": 3,
    "task": "Prove that",
    "tags": [
      "always positive",
      "discriminant",
      "factoring",
      "quartic"
    ],
    "statement": "Prove that for every real number $x$, \\[x^{4}+x^{2}+1>0,\\] using a discriminant (nature-of-roots) argument rather than calculus.",
    "answer": "proved",
    "trap": "Treating $x^4+x^2+1$ as \"a quadratic in $x^2$\" and stopping at the discriminant $1-4=-3<0$. A negative discriminant alone proves nothing about sign: the polynomial $-(t^2+t+1)$ has the same discriminant $-3$ yet is negative for every real $t$. To conclude positivity you must ALSO note the leading coefficient is $+$. A second slip lurks in completing the square: writing $x^4+x^2+1=(x^2+\\tfrac12)^2+\\tfrac34$ correctly forces the value $\\ge\\tfrac34$, but $\\tfrac34$ is NOT the minimum — equality would need $x^2=-\\tfrac12$, which is impossible. The true minimum is $1$, attained at $x=0$.",
    "solutions": [
      {
        "name": "Factor into two positive quadratics",
        "steps": [
          "Write $x^4+x^2+1=(x^4+2x^2+1)-x^2=(x^2+1)^2-x^2$.",
          "This is a difference of squares: $=(x^2+x+1)(x^2-x+1)$.",
          "Each factor is a quadratic in $x$ with discriminant $1^2-4(1)(1)=-3<0$ and positive leading coefficient; a quadratic with $D<0$ and $a>0$ keeps the constant sign of $a$, so each factor is strictly positive for all real $x$.",
          "A product of two strictly positive numbers is strictly positive, so $x^4+x^2+1>0$ for all real $x$. $\\blacksquare$"
        ]
      },
      {
        "name": "Quadratic in $t=x^2$ with the sign lemma",
        "steps": [
          "Let $t=x^2\\ge0$ and $g(t)=t^2+t+1$. Its discriminant is $1-4=-3<0$.",
          "The positivity lemma: a real quadratic with $D<0$ has no real root, so it never changes sign; its single sign is that of the leading coefficient. Here that coefficient is $+1$, hence $g(t)>0$ for ALL real $t$ (not merely $t\\ge0$).",
          "Therefore $x^4+x^2+1=g(x^2)>0$ for every real $x$. $\\blacksquare$",
          "(Contrast: $-g(t)$ also has $D=-3<0$ but leading coefficient $-1$, so it is always negative — which is why the sign of $a$ is indispensable, not optional.)"
        ]
      },
      {
        "name": "Completing the square (with the honest minimum)",
        "steps": [
          "$x^4+x^2+1=\\left(x^2+\\tfrac12\\right)^2+\\tfrac34$.",
          "A square is $\\ge0$, so the expression is $\\ge\\tfrac34>0$; positivity is proved. $\\blacksquare$",
          "Beware: $\\tfrac34$ is a lower bound but NOT the minimum, since equality demands $x^2=-\\tfrac12$, which no real $x$ achieves.",
          "For the true minimum, use $t=x^2\\ge0$: $g(t)=(t+\\tfrac12)^2+\\tfrac34$ is increasing on $t\\ge0$, so its least value on that range is $g(0)=1$. Equivalently $x^4+x^2+1-1=x^2(x^2+1)\\ge0$, with equality only at $x=0$. Hence the minimum value is $1$, attained at $x=0$."
        ]
      }
    ],
    "remark": "Insight: \"$D<0$ with $a>0\\Rightarrow$ always positive\" is THE discriminant positivity lemma, and the sign of $a$ is doing real work — drop it and $-(t^2+t+1)$ becomes a counterexample with the very same discriminant. The factorization route is cleanest because it reduces a quartic to two textbook quadratics, each transparently positive. And mind the difference between a lower bound and a minimum: completing the square in $x^2$ gives the bound $\\tfrac34$, but the attained minimum is $1$ at $x=0$."
  },
  {
    "theme": "discriminant",
    "themeLabel": "The Discriminant & Nature of Roots",
    "title": "Hunting Integer Roots",
    "difficulty": 4,
    "task": "Find all",
    "tags": [
      "integer roots",
      "vieta",
      "factoring",
      "number theory"
    ],
    "statement": "Find all integers $k$ for which the equation \\[x^{2}-kx+(k+5)=0\\] has both roots integers, and report the sum of all such $k$.",
    "answer": "$k\\in\\{-5,-3,7,9\\}$, with sum $\\boxed{8}$.",
    "trap": "Running the Vieta factoring $(r-1)(s-1)=6$ but listing only the positive factor pairs $(1,6),(2,3),(3,2),(6,1)$. Those give just $(r,s)=(2,7)$ and $(3,4)$, hence $k\\in\\{7,9\\}$ and the wrong sum $16$. The negative factor pairs of $6$ are equally valid: $(-1,-6)$ and $(-2,-3)$ give $(r,s)=(0,-5)$ and $(-1,-2)$, restoring $k=-5$ and $k=-3$. A divisor must be allowed to be negative, and here those branches carry half the answer.",
    "solutions": [
      {
        "name": "Vieta + Simon's Favorite Factoring",
        "steps": [
          "Let the integer roots be $r,s$. Since the leading coefficient is $1$, Vieta gives $r+s=k$ and $rs=k+5$.",
          "Eliminate $k$ by subtracting: $rs-(r+s)=5$, so $rs-r-s+1=6$, i.e. $(r-1)(s-1)=6$.",
          "Now $(r-1,s-1)$ ranges over ALL integer factor pairs of $6$ (positive and negative): $(1,6),(2,3),(3,2),(6,1),(-1,-6),(-2,-3),(-3,-2),(-6,-1)$.",
          "These give $(r,s)=(2,7),(3,4),(0,-5),(-1,-2)$ up to order, hence $k=r+s=9,\\,7,\\,-5,\\,-3$ respectively (the remaining pairs only swap $r,s$).",
          "Distinct $k$: $\\{-5,-3,7,9\\}$; sum $=\\boxed{8}$."
        ]
      },
      {
        "name": "Perfect-square discriminant",
        "steps": [
          "The polynomial is monic with integer coefficients, so by the rational-root theorem any rational root is automatically an integer. Thus integer roots $\\iff$ the discriminant $D=k^{2}-4(k+5)=k^{2}-4k-20$ is a perfect square $m^{2}$, $m\\ge0$.",
          "Complete the square: $(k-2)^{2}-24=m^{2}$, so $(k-2-m)(k-2+m)=24$.",
          "The two factors $u=k-2-m$ and $v=k-2+m$ have the same parity (their difference $2m$ is even), and $uv=24$, so both are even. The even factorizations $24=(\\pm2)(\\pm12)=(\\pm4)(\\pm6)$ give $k-2=\\tfrac{u+v}{2}\\in\\{\\pm7,\\pm5\\}$.",
          "Hence $k\\in\\{9,-5,7,-3\\}$, and each indeed makes $D$ a perfect square (so the parity check above also confirms both roots are integers).",
          "Sum $=\\boxed{8}$."
        ]
      }
    ],
    "remark": "Insight: the substitution $(r-1)(s-1)=rs-r-s+1$ turns an integer-root search into divisor-counting -- vastly cleaner than scanning a discriminant. The single most common loss is forgetting that a divisor of $6$ may be negative; here those branches contribute exactly $k=-5$ and $k=-3$. Note also a structural fact special to monic integer quadratics: a perfect-square discriminant is not merely necessary for integer roots but sufficient, since $u$ and $v$ above are forced to share parity. Always look for such a Simon's-Favorite-Factoring move, and always sweep both signs of every divisor."
  },
  {
    "theme": "discriminant",
    "themeLabel": "The Discriminant & Nature of Roots",
    "title": "The Discriminant That Refuses to Change",
    "difficulty": 4,
    "task": "Determine",
    "tags": [
      "rational roots",
      "constant discriminant",
      "leading coefficient",
      "count"
    ],
    "statement": "For each integer $n$ with $-10\\le n\\le 10$, consider \\[(n-3)x^{2}-2n\\,x+(n+3)=0.\\] Determine the number of these $21$ values of $n$ for which the equation has two rational roots.",
    "answer": "$\\boxed{20}$. For every $n\\ne3$ in the range the discriminant equals the perfect square $36$, giving two rational roots; at $n=3$ the leading coefficient vanishes so it is not a quadratic at all (it is the single linear equation $-6x+6=0$).",
    "trap": "Two opposite errors. (1) Computing $D=4n^2-4(n-3)(n+3)=36$ once and concluding all $21$ values work, ignoring that at $n=3$ the equation is not quadratic. (2) Believing $D$ must depend on $n$ and re-deriving it wrong. The constant $D=36$ is the surprise; the $a=0$ exclusion is the trap.",
    "solutions": [
      {
        "name": "Compute the discriminant",
        "steps": [
          "$D=(-2n)^2-4(n-3)(n+3)=4n^2-4(n^2-9)=36$, independent of $n$.",
          "Since $36=6^2$ is a perfect square, whenever the equation is genuinely quadratic ($n\\ne3$) its roots are rational: $x=\\dfrac{2n\\pm6}{2(n-3)}=\\dfrac{n\\pm3}{n-3}$.",
          "At $n=3$ the leading coefficient $n-3=0$, so it degenerates to $-6x+6=0$, a single linear root, not two rational roots.",
          "Thus exactly the $21-1=\\boxed{20}$ values $n\\in[-10,10]\\setminus\\{3\\}$ give two rational roots."
        ]
      },
      {
        "name": "Explicit roots",
        "steps": [
          "Factor the quadratic: $(n-3)x^2-2nx+(n+3)=\\big((n-3)x-(n+3)\\big)(x-1)$ for $n\\ne3$ (check: expanding gives back $(n-3)x^2-2nx+(n+3)$).",
          "So the roots are $x=1$ and $x=\\dfrac{n+3}{n-3}$, both rational for every integer $n\\ne3$, and distinct since $\\dfrac{n+3}{n-3}=1$ would force $n+3=n-3$.",
          "$n=3$ kills the $x^2$ term, leaving the linear $-6x+6=0$ with the single root $x=1$.",
          "Hence $\\boxed{20}$ values give two rational roots."
        ]
      }
    ],
    "remark": "Insight: a discriminant that is a nonzero perfect-square CONSTANT screams rational roots for all parameter values, but a parameter sitting in the leading coefficient still forces you to delete the degenerate $a=0$ case. Having rational roots is not the same as being a quadratic at all."
  },
  {
    "theme": "discriminant",
    "themeLabel": "The Discriminant & Nature of Roots",
    "title": "Two Parabolas Forced to Kiss the Axis",
    "difficulty": 5,
    "task": "Find all",
    "tags": [
      "perfect-square",
      "simultaneous-discriminants",
      "sum-of-squares",
      "degenerate-case",
      "reverse-polynomial",
      "tangency"
    ],
    "statement": "Find all real triples $(a,b,c)$ for which BOTH \\[P(x)=ax^{2}+bx+c \\qquad\\text{and}\\qquad Q(x)=bx^{2}+cx+a\\] are genuine quadratics (so their leading coefficients are nonzero) whose graphs are each tangent to the $x$-axis — i.e. each is the square of a real linear polynomial — subject to the normalization \\[a+b+c=9.\\] For the admissible triple, exhibit the two perfect squares and the point at which each parabola touches the axis.",
    "answer": "The only admissible triple is \\[\\boxed{(a,b,c)=(1,4,4)},\\] giving \\[P(x)=x^{2}+4x+4=(x+2)^{2},\\qquad Q(x)=4x^{2}+4x+1=(2x+1)^{2}.\\] The parabola $y=P(x)$ touches the $x$-axis at $\\left(-2,0\\right)$ and $y=Q(x)$ touches it at $\\left(-\\tfrac12,0\\right)$; the two contact abscissae are reciprocals, since $Q$ is the reverse polynomial of $P$. The algebraically tempting extra triple $(a,b,c)=(9,0,0)$ is not admissible: there $Q(x)=9$ is a nonzero constant, not a quadratic at all, so it has no parabola to be tangent with.",
    "trap": "Writing the two tangency conditions as the bare discriminant equations $b^{2}-4ac=0$ and $c^{2}-4ab=0$ and adjoining $a+b+c=9$ gives a $3\\times3$ system whose real solutions are $(1,4,4)$ and $(9,0,0)$. The trap is to report both. But $(9,0,0)$ is a degenerate phantom: there $P(x)=9x^{2}$ is a fine quadratic square, yet $Q(x)=0\\cdot x^{2}+0\\cdot x+9=9$ collapses to a constant — its leading coefficient is $0$, so it is not a quadratic and its ``graph'' is a horizontal line that never touches the axis. The equation $c^{2}-4ab=0$ is the discriminant of a quadratic only when $b\\ne0$; at $b=0$ it degenerates into the empty statement $c^{2}=0$ about a constant. A solver who treats $b^{2}-4ac=0$ and $c^{2}-4ab=0$ as pure polynomial equalities, divorced from the standing hypothesis that $a$ and $b$ are leading coefficients of genuine quadratics, harvests the spurious root. Imposing $a\\ne0$ and $b\\ne0$ (forced again by ``square of a real linear polynomial'', which needs a positive leading coefficient) eliminates $(9,0,0)$ and leaves $(1,4,4)$ as the unique answer.",
    "solutions": [
      {
        "name": "Difference of discriminants as a sum-of-squares-style factor",
        "steps": [
          "A genuine quadratic $\\alpha x^{2}+\\beta x+\\gamma$ is the square of a real linear polynomial iff $\\alpha>0$ and $\\beta^{2}-4\\alpha\\gamma=0$. Applying this to $P$ and $Q$: $a>0,\\ b>0$ and the two tangency conditions $b^{2}-4ac=0$ and $c^{2}-4ab=0$. (The leading coefficient of a square $(px+q)^{2}=p^{2}$ is positive, so $a\\ne0,\\ b\\ne0$ are built in, not extra assumptions.)",
          "Subtract the two conditions: $(b^{2}-4ac)-(c^{2}-4ab)=b^{2}-c^{2}+4a(b-c)=(b-c)(b+c)+4a(b-c)=(b-c)(b+c+4a)=0.$ This is the key factorization — the discriminant gap splits into a perfect linear product.",
          "Because $a>0$ and (from $b^{2}=4ac>0$ with $a>0$) $c>0$, while $b>0$, the second factor $b+c+4a$ is a sum of strictly positive terms, hence $b+c+4a>0$. The product can vanish only through $b-c=0$, so $b=c$.",
          "Feed $b=c$ into $b^{2}-4ac=0$: $b^{2}-4ab=b(b-4a)=0$, and since $b>0$ this forces $b=4a$; thus $c=4a$ as well. Now $a+b+c=a+4a+4a=9a=9\\Rightarrow a=1$, whence $b=c=4$. Therefore $\\boxed{(a,b,c)=(1,4,4)}$, with $P=(x+2)^{2}$ and $Q=(2x+1)^{2}$."
        ]
      },
      {
        "name": "Multiply the two discriminant relations",
        "steps": [
          "From tangency, $b^{2}=4ac$ and $c^{2}=4ab$, with $a>0,\\ b>0$ (genuine quadratic squares), forcing $c>0$ as well. Multiply the two relations: $b^{2}c^{2}=16a^{2}bc.$ Since $bc>0$ we may divide by $bc$ to get $bc=16a^{2}.$",
          "Now divide the two relations instead: $\\dfrac{b^{2}}{c^{2}}=\\dfrac{4ac}{4ab}=\\dfrac{c}{b},$ so $b^{3}=c^{3}$, and over the reals the cube is injective, giving $b=c$. (Here is the hidden subtlety: $b^{2}/c^{2}=c/b$ has the complex solutions $b=\\omega c,\\ \\omega^{3}=1$, but only $\\omega=1$ is real — the spurious complex branches are exactly what a careless cube-root step would smuggle in.)",
          "With $b=c$, the relation $b^{2}=4ac=4ab$ gives $b=4a$; so $(a,b,c)=(a,4a,4a)$ for some $a>0$. This one-parameter family is the entire real locus of double-tangency for the pair $(P,Q)$ before normalization.",
          "Impose $a+b+c=9$: $9a=9\\Rightarrow a=1$. Hence $\\boxed{(a,b,c)=(1,4,4)}$ and $P=(x+2)^{2},\\ Q=(2x+1)^{2}$; the phantom $(9,0,0)$ never appears because dividing by $bc$ already presupposed $b,c\\ne0$."
        ]
      },
      {
        "name": "Reverse-polynomial / reciprocal-roots reading",
        "steps": [
          "Compare $Q$ with the reverse of $P$. The reverse polynomial of $P=ax^{2}+bx+c$ is $x^{2}P(1/x)=cx^{2}+bx+a$, which carries the coefficient string $(c,b,a)$; $Q=bx^{2}+cx+a$ has string $(b,c,a)$. These coincide precisely when $b=c$ — the very condition we will derive — and when they do, the roots of $Q$ are the reciprocals of the roots of $P$. Either way, since $P$ and $Q$ are perfect squares we may write $P=a(x-r)^{2}$ with double root $r$ and $Q=b(x-s)^{2}$ with double root $s$.",
          "A perfect square $P=a(x-r)^{2}=ax^{2}-2ar\\,x+ar^{2}$ matches $ax^{2}+bx+c$, so $b=-2ar$ and $c=ar^{2}$; thus $r=-\\dfrac{b}{2a}$ and $c=ar^{2}=\\dfrac{b^{2}}{4a}$ (recovering $b^{2}=4ac$). Likewise $Q=b(x-s)^{2}$ gives $c=-2bs,\\ a=bs^{2}$, so $s=-\\dfrac{c}{2b}$ and $a=\\dfrac{c^{2}}{4b}$ (recovering $c^{2}=4ab$).",
          "Combine: $r=-\\dfrac{b}{2a}$ and $s=-\\dfrac{c}{2b}$ give $rs=\\dfrac{bc}{4ab}=\\dfrac{c}{4a}$. Also $c=ar^{2}$ from $P$, so $rs=\\dfrac{ar^{2}}{4a}=\\dfrac{r^{2}}{4}$, i.e. $s=\\dfrac{r}{4}$. Symmetrically (from $Q$) $a=bs^{2}$ and $r=-b/2a$ yield $r=\\dfrac{s}{4}\\cdot(\\ldots)$; solving the pair $s=r/4,\\ r=4s$ consistently forces $r=4s$ and $s=r/4$ — the same line — so the contact points satisfy $r=4s$. Together with $c=ar^{2}$ and $a=bs^{2}$ this pins $b=4a,\\ c=4a$.",
          "Hence $(a,b,c)=(a,4a,4a)$; the normalization $a+b+c=9$ gives $a=1$, so $\\boxed{(a,b,c)=(1,4,4)}$. The contact abscissae are $r=-2$ and $s=-\\tfrac12=\\tfrac1r$: each parabola kisses the $x$-axis at points whose $x$-coordinates are reciprocals, the geometric signature of $Q$ being $P$'s reverse polynomial."
        ]
      }
    ],
    "remark": "Insight: the two tangency requirements $\\operatorname{disc}P=0$ and $\\operatorname{disc}Q=0$ look like two independent equations in three unknowns and ought to leave a curve of solutions; the third constraint $a+b+c=9$ should then cut out finitely many points. The deeper structure is that subtracting the two discriminants collapses to the single product $(b-c)(b+c+4a)=0$, and the positivity baked into ``square of a real linear polynomial'' (leading coefficients $>0$, hence $a,b,c>0$) annihilates the second factor — a sum-of-positive-terms can never be zero — leaving the rigid equality $b=c$, then $b=c=4a$. That is the sum-of-squares spirit: an apparent freedom is killed because the only way a positive expression vanishes is at the degenerate corner. The trap lives in that very corner: dropping the genuine-quadratic hypothesis lets $b=0$ sneak in, where $\\operatorname{disc}Q=0$ degenerates into a vacuous statement about the constant $Q=9$, manufacturing the phantom $(9,0,0)$. Geometrically, both parabolas are forced to kiss the $x$-axis, and the unique survivor has the elegant signature that $Q$ is the reverse polynomial of $P$, so the two contact points $x=-2$ and $x=-\\tfrac12$ are reciprocals. The lesson for a top ranker: $b^{2}-4ac=0$ is a statement about a quadratic only while its leading coefficient is alive — treat the discriminant as a polynomial identity stripped of that hypothesis and a degenerate root will always try to ride in."
  },
  {
    "theme": "discriminant",
    "themeLabel": "The Discriminant & Nature of Roots",
    "title": "When a Conic Splits into Two Lines",
    "difficulty": 4,
    "task": "Find all",
    "tags": [
      "second-degree expression",
      "factor into linear",
      "big discriminant",
      "conic degeneracy"
    ],
    "statement": "Find all real values of $\\lambda$ for which the second-degree expression \\[2x^{2}+\\lambda\\,xy+3y^{2}-4x-3y-6\\] can be written as a product of two real linear factors in $x$ and $y$.",
    "answer": "$\\lambda\\in\\{-7,\\ 5\\}$. (At $\\lambda=-7$: $(x-3y-3)(2x-y+2)$; at $\\lambda=5$: $(x+y+1)(2x+3y-6)$.)",
    "trap": "Only checking the \"pure\" quadratic part $2x^2+\\lambda xy+3y^2$ and requiring ITS discriminant $\\lambda^2-24$ to be nonnegative (or a perfect square). That test is merely necessary, not sufficient: e.g. $\\lambda=6$ gives $\\lambda^2-24=12\\ge 0$ yet the full expression is irreducible over the reals. The linear and constant terms matter — the correct criterion is that the FULL $3\\times3$ big discriminant $\\Delta=abc+2fgh-af^2-bg^2-ch^2$ vanishes, a different (quadratic-in-$\\lambda$) equation.",
    "solutions": [
      {
        "name": "Big discriminant = 0",
        "steps": [
          "Match $ax^2+2hxy+by^2+2gx+2fy+c$: $a=2,\\ b=3,\\ c=-6,\\ 2h=\\lambda\\ (h=\\tfrac\\lambda2),\\ 2g=-4\\ (g=-2),\\ 2f=-3\\ (f=-\\tfrac32)$.",
          "The expression factors into two real lines iff the big discriminant $\\Delta=abc+2fgh-af^2-bg^2-ch^2=0$.",
          "$\\Delta=2\\cdot3\\cdot(-6)+2(-\\tfrac32)(-2)(\\tfrac\\lambda2)-2(\\tfrac94)-3(4)-(-6)(\\tfrac{\\lambda^2}{4})=-36+3\\lambda-\\tfrac92-12+\\tfrac{3\\lambda^2}{2}$.",
          "$\\Delta=\\tfrac{3}{2}\\lambda^2+3\\lambda-\\tfrac{105}{2}=0\\Rightarrow \\lambda^2+2\\lambda-35=0\\Rightarrow(\\lambda+7)(\\lambda-5)=0$.",
          "$\\boxed{\\lambda=-7\\text{ or }5}$, both giving genuinely real linear factors $(x-3y-3)(2x-y+2)$ and $(x+y+1)(2x+3y-6)$ respectively."
        ]
      },
      {
        "name": "Treat as a quadratic in $x$",
        "steps": [
          "View the expression as $2x^2+(\\lambda y-4)x+(3y^2-3y-6)$, a quadratic in $x$ with parameter $y$.",
          "It factors into two linear factors in $x,y$ iff its roots $x(y)$ are linear in $y$, i.e. the discriminant (in $y$) is a perfect square polynomial in $y$.",
          "Discriminant $=(\\lambda y-4)^2-8(3y^2-3y-6)=(\\lambda^2-24)y^2+(-8\\lambda+24)y+64$.",
          "This is a perfect square in $y$ iff its own discriminant vanishes: $(-8\\lambda+24)^2-4(\\lambda^2-24)(64)=0$.",
          "Simplify: $64\\lambda^2-384\\lambda+576-256\\lambda^2+6144=0\\Rightarrow-192\\lambda^2-384\\lambda+6720=0\\Rightarrow\\lambda^2+2\\lambda-35=0$, so $\\boxed{\\lambda=-7,5}$."
        ]
      },
      {
        "name": "Direct factor template (undetermined coefficients)",
        "steps": [
          "Since the leading part is $2x^2+\\lambda xy+3y^2$, seek $(x+\\alpha y+\\beta)(2x+\\gamma y+\\delta)$, matching $2x^2$ and the constant $\\beta\\delta=-6$.",
          "Match $x$-coefficient $2\\beta+\\delta=-4$ and $y$-coefficient $\\alpha\\delta+\\beta\\gamma=-3$, and $y^2$-coefficient $\\alpha\\gamma=3$.",
          "From $\\beta\\delta=-6,\\ 2\\beta+\\delta=-4$: $(\\beta,\\delta)=(-3,2)$ or $(\\beta,\\delta)=(1,-6)$.",
          "Case $(\\beta,\\delta)=(-3,2)$: $\\alpha\\gamma=3$ and $2\\alpha-3\\gamma=-3$ give $(\\alpha,\\gamma)=(-3,-1)$, so $\\lambda=\\alpha\\cdot2+\\gamma\\cdot1=-6-1=-7$. Case $(\\beta,\\delta)=(1,-6)$: $\\alpha\\gamma=3,\\ -6\\alpha+\\gamma=-3$ give $(\\alpha,\\gamma)=(1,3)$, so $\\lambda=2\\alpha+\\gamma=2+3=5$.",
          "Both cases yield real coefficients, so $\\boxed{\\lambda\\in\\{-7,5\\}}$, agreeing with the discriminant criterion."
        ]
      }
    ],
    "remark": "Insight: factorability of a general second-degree expression in two variables is governed by the vanishing of the $3\\times3$ \"big\" discriminant $\\Delta$ — the same determinant that detects a degenerate conic (two lines). The pure-part discriminant $\\lambda^2-24$ is only necessary (it must be $\\ge 0$ so the lines have real directions), but it over-admits: $\\lambda=6$ passes it yet the curve is a genuine non-degenerate conic. The single-variable view rediscovers the true criterion as a discriminant-of-a-discriminant."
  },
  {
    "theme": "discriminant",
    "themeLabel": "The Discriminant & Nature of Roots",
    "title": "Three Squares Force Equality",
    "difficulty": 5,
    "task": "Prove that",
    "tags": [
      "equal roots",
      "cyclic system",
      "perfect square",
      "always positive"
    ],
    "statement": "Let $a,b,c$ be real numbers, not all zero. Suppose each of the three quadratics \\[ax^{2}+2bx+c,\\qquad bx^{2}+2cx+a,\\qquad cx^{2}+2ax+b\\] is a perfect-square trinomial (i.e. has a repeated root, with the respective leading coefficient nonzero). Prove that $a=b=c$ (and consequently all three leading coefficients are equal and nonzero).",
    "answer": "proved — the only possibility is $a=b=c\\ne0$.",
    "trap": "Concluding from $b^2=ac,\\ c^2=ab,\\ a^2=bc$ that you may freely divide (assuming $a,b,c\\ne0$) and reach $a=b=c$, while silently allowing a stray real branch such as $a+b+c=0$. One must show the $a+b+c=0$ branch is inconsistent over the reals, and handle the leading-coefficient nonvanishing.",
    "solutions": [
      {
        "name": "Sum of squares from pairwise subtraction",
        "steps": [
          "Each quadratic is a perfect square, so its discriminant vanishes. For $ax^2+2bx+c$ this reads $(2b)^2-4ac=0$, i.e. $b^2=ac$; cyclically $c^2=ab$ and $a^2=bc$.",
          "Add all three equalities: $a^2+b^2+c^2=ab+bc+ca$.",
          "Use the identity $2(a^2+b^2+c^2)-2(ab+bc+ca)=(a-b)^2+(b-c)^2+(c-a)^2$. The left side is $0$ by Step 2, so $(a-b)^2+(b-c)^2+(c-a)^2=0$.",
          "A sum of real squares is zero only if every square is zero, forcing $a=b=c$. Since $a,b,c$ are not all zero, $a=b=c\\ne0$; hence every leading coefficient is nonzero and each trinomial is genuinely a perfect square. $\\blacksquare$"
        ]
      },
      {
        "name": "Factor out the $a+b+c$ branch, then kill it with a nested discriminant",
        "steps": [
          "As before the equal-root conditions give $b^2=ac,\\ c^2=ab,\\ a^2=bc$.",
          "Subtract in pairs: $b^2-c^2=ac-ab=a(c-b)$, which factors as $(b-c)(b+c)=-a(b-c)$, i.e. $(b-c)(a+b+c)=0$. Cyclically, $(c-a)(a+b+c)=0$ and $(a-b)(a+b+c)=0$.",
          "Case $a+b+c\\ne0$: each factored equation forces the other factor to vanish, giving $b=c,\\ c=a,\\ a=b$, hence $a=b=c$.",
          "Case $a+b+c=0$: put $c=-a-b$ into $b^2=ac=a(-a-b)$, giving $a^2+ab+b^2=0$. Viewed as a quadratic in $a$, its discriminant is $b^2-4b^2=-3b^2\\le0$, so a real root needs $-3b^2=0$, i.e. $b=0$; then $a^2=0$ gives $a=0$ and $c=-a-b=0$ — all zero, excluded.",
          "Only the first case survives, so $a=b=c$, and being not all zero, $a=b=c\\ne0$. $\\blacksquare$"
        ]
      }
    ],
    "remark": "Insight: three cyclic equal-root conditions collapse, via the identity $\\sum_{\\text{cyc}}(a-b)^2=2\\sum a^2-2\\sum ab$, into a single sum of squares — the cleanest way to force equality. The second route surfaces a tempting $a+b+c=0$ branch; a nested discriminant $-3b^2\\le0$ (the positive-definiteness of $a^2+ab+b^2$) extinguishes it over the reals. Both confirmed by symbolic and numerical search: the unique real ray is $a=b=c$."
  },
  {
    "theme": "discriminant",
    "themeLabel": "The Discriminant & Nature of Roots",
    "title": "Golden, Silver, and the Double Root That Cannot Be Rational",
    "difficulty": 5,
    "task": "Classify",
    "tags": [
      "discriminant",
      "repeated-root",
      "rationality",
      "perfect-square",
      "diophantine",
      "hidden-constraint"
    ],
    "statement": "For a real parameter $m$, let \\[f_{m}(x)=x^{2}+(m-1)\\,x+(m+1).\\] Call $m$ golden if $f_{m}$ has a repeated (double) real root, and call $m$ silver if $f_{m}$ has at least one rational root. (a) Find every golden $m$, and decide with proof whether a golden $m$ can ever be silver — i.e. whether the repeated root can be rational. (b) Determine how many integer values of $m$ are silver.",
    "answer": "\\[(a) \\ m=3\\pm 2\\sqrt{3}\\ \\text{(both irrational); no golden }m\\text{ is silver: the double root }-1\\mp\\sqrt3\\text{ is always irrational.}\\] \\[(b) \\ \\boxed{2}\\quad\\text{integer values, namely } m=-1\\ \\text{and}\\ m=7.\\]",
    "trap": "The fatal reflex is to treat ``repeated root'' and ``rational root'' as nested or as governed by the same object, the discriminant. A strong solver sets $D=(m-1)^{2}-4(m+1)=m^{2}-6m-3=0$, gets the golden set $m=3\\pm2\\sqrt3$, and then — having produced a clean ``double root'' — assumes that double root must be a nice rational number, or never checks it at all. But $D=0$ is one condition (it merely makes the two roots coincide); rationality of that coincident root $r=-\\tfrac{b}{2a}=-\\tfrac{m-1}{2}$ is a second, independent arithmetic condition. Here the two conditions are not just distinct, they are incompatible: forcing $f_{m}(x)=(x-r)^{2}$ matches $m-1=-2r,\\ m+1=r^{2}$, whose difference gives $r^{2}+2r-2=0$, i.e. $r=-1\\pm\\sqrt3$ — irreducibly irrational. So there is no golden-and-silver $m$: a repeated root of this family can never be rational, even though repeated roots genuinely exist (at irrational $m=3\\pm2\\sqrt3$). The second snare lurks in part (b): a student conflates ``rational root'' with ``$D=0$'' again, or thinks silver $m$ must sit near the golden ones; in fact silver over the integers is the perfect-square condition $D=m^{2}-6m-3=k^{2}$, a difference-of-squares Diophantine $(m-3)^{2}-k^{2}=12$ that the discriminant-being-zero idea cannot touch, and it has nothing to do with the double-root values.",
    "solutions": [
      {
        "name": "Separate the two conditions: D=0 versus the root being rational",
        "steps": [
          "Write $a=1,\\ b=m-1,\\ c=m+1$. A repeated real root needs $D=b^{2}-4ac=(m-1)^{2}-4(m+1)=m^{2}-6m-3=0$. Completing the square, $(m-3)^{2}=12$, so the golden set is $m=3\\pm2\\sqrt3$, both irrational.",
          "The (necessarily unique) repeated root is $r=-\\tfrac{b}{2a}=-\\tfrac{m-1}{2}$. At $m=3\\pm2\\sqrt3$ this gives $r=-\\tfrac{2\\pm2\\sqrt3}{2}=-1\\mp\\sqrt3$, plainly irrational. Hence some golden $m$ exist, but each yields an irrational double root.",
          "Now test the rationality condition independently. Suppose a rational $r$ were a double root; then $f_{m}(x)\\equiv(x-r)^{2}=x^{2}-2rx+r^{2}$, so matching coefficients $m-1=-2r$ and $m+1=r^{2}$. Subtracting, $(m+1)-(m-1)=2=r^{2}-(-2r)=r^{2}+2r$, i.e. $r^{2}+2r-2=0$, whence $r=-1\\pm\\sqrt3$ — irrational. Contradiction.",
          "Therefore no golden $m$ is silver: the repeated root can never be rational. This is the gap — $D=0$ only forces coincidence of the roots; their common value $-\\tfrac{m-1}{2}$ is rational only if $m$ is rational, but $D=0$ pins $m$ at the irrational $3\\pm2\\sqrt3$. The two requirements clash, giving $\\boxed{m=3\\pm2\\sqrt3,\\ \\text{none rational}}$ for part (a)."
        ]
      },
      {
        "name": "Part (b): rational root over the integers as a difference of squares",
        "steps": [
          "For integer $m$, $f_{m}$ (monic, integer coefficients) has a rational root iff it has an integer root iff $D=m^{2}-6m-3$ is a perfect square $k^{2}\\ge0$. (If a monic integer quadratic has a rational root it is an integer by the rational-root theorem, and that forces $\\sqrt D\\in\\mathbb Z$.)",
          "Complete the square: $D=(m-3)^{2}-12=k^{2}$, so $(m-3)^{2}-k^{2}=12$, i.e. $(m-3-k)(m-3+k)=12$.",
          "The two factors $u=m-3-k$ and $v=m-3+k$ satisfy $u+v=2(m-3)$, which is even, so $u,v$ share parity; since $uv=12$ is even, both must be even. The even factor pairs of $12$ are $(\\pm2,\\pm6)$ and $(\\pm6,\\pm2)$, giving $m-3=\\tfrac{u+v}{2}\\in\\{\\pm4\\}$, hence $m=7$ or $m=-1$.",
          "Check: $m=-1\\Rightarrow x^{2}-2x+0=0$, roots $0,2$ (rational); $m=7\\Rightarrow x^{2}+6x+8=0$, roots $-4,-2$ (rational). Both have $D=4\\ne0$, so neither is golden — silver and golden are disjoint. Exactly $\\boxed{2}$ integer values of $m$ are silver."
        ]
      },
      {
        "name": "Quadratic-in-m view: a unified resolvent picture",
        "steps": [
          "Regard the conditions as constraints in $m$. Golden is the equation $g(m)=m^{2}-6m-3=0$; its roots are $3\\pm2\\sqrt3$ and, because the constant term $-3$ is not such that the rational-root theorem yields any rational candidate dividing $-3$ to a root ($\\pm1,\\pm3$ all fail: $g(1)=-8,\\,g(3)=-12,\\,g(-1)=4,\\,g(-3)=24$), $g$ is irreducible over $\\mathbb Q$. So no golden $m$ is rational.",
          "A rational double root would itself be a rational $m$ (since $r=-\\tfrac{m-1}{2}$ rational $\\iff m$ rational), but golden has no rational $m$; equivalently the double-root value solves $r^{2}+2r-2=0$, irreducible over $\\mathbb Q$. Either way, golden $\\cap$ silver $=\\varnothing$, settling (a): $m=3\\pm2\\sqrt3$ with no rational repeated root.",
          "For (b), silver over $\\mathbb Z$ is $g(m)=k^{2}$ for some integer $k\\ge0$. Since $g(m)=(m-3)^{2}-12$, consecutive-square spacing forces $|m-3|$ small: for $|m-3|\\ge4$ the gap to the nearest square below $(m-3)^2$ exceeds $12$ only after checking $|m-3|=4$ works ($16-12=4=2^2$) and $|m-3|=3$ gives $9-12<0$, $|m-3|=5$ gives $25-12=13$ (not square), $|m-3|=6$ gives $36-12=24$ (not square), and beyond that $(m-3)^2-12$ lies strictly between $(|m-3|-1)^2$ and $(|m-3|)^2$.",
          "Thus the only integer solutions are $|m-3|=4$, i.e. $m=7$ and $m=-1$, exactly the two found by factoring. Final count $\\boxed{2}$, consistent with the difference-of-squares method."
        ]
      }
    ],
    "remark": "Insight: the discriminant decides only the coincidence of the roots, never their number-field. ``Repeated'' ($D=0$) and ``rational'' are two logically independent tests, and a top scorer must run both. The clean structural fact behind part (a): for a quadratic with rational coefficients, $D=0$ forces the double root $-\\tfrac{b}{2a}$ to be rational automatically — so a repeated irrational root can appear only when the coefficients are irrational, which is exactly what happens here because $D=0$ drags the parameter to the irrational $m=3\\pm2\\sqrt3$. The parameter sweep thus splits the plane into three disjoint regimes: golden (real double, irrational, at two points), silver (rational root, an arithmetic perfect-square locus), and golden$\\cap$silver $=\\varnothing$. Part (b) then re-teaches the lesson from the other side: ``has a rational root'' is the perfect-square condition $D=\\square$, a Diophantine equation living a world away from $D=0$, and its difference-of-squares solution $(m-3)^2-k^2=12$ is an arithmetic statement the nature-of-roots beginner never expects the discriminant to hide."
  },
  {
    "theme": "discriminant",
    "themeLabel": "The Discriminant & Nature of Roots",
    "title": "The Parabola in Disguise: A Perfect Square That Hides the Real Test",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "pair-of-lines",
      "perfect-square-form",
      "degenerate-conic",
      "parallel-lines",
      "repeated-discriminant",
      "hidden-constraint"
    ],
    "statement": "For a real parameter $t$ consider the curve \\[ C_t:\\quad 4x^{2}+4t\\,xy+t^{2}y^{2}-8x+(2-5t)\\,y+3=0. \\] It is given that $C_t$ degenerates into a pair of parallel straight lines for exactly one value of $t$, and that for that value the two lines are distinct (not coincident). Determine that value of $t$, exhibit the two lines explicitly, and state the perpendicular distance between them.",
    "answer": "\\[ \\boxed{t=2}, \\] for which $C_2$ factors as \\[ (2x+2y-1)(2x+2y-3)=0, \\] the two distinct parallel lines $2x+2y-1=0$ and $2x+2y-3=0$, separated by a perpendicular distance \\[ \\frac{|3-1|}{\\sqrt{2^{2}+2^{2}}}=\\frac{1}{\\sqrt2}. \\] No other $t$ makes $C_t$ a line-pair: for every $t\\neq 2$ the curve is a genuine (non-degenerate) parabola.",
    "trap": "The instinctive move is: \"two parallel lines means the second-degree terms form a perfect square, so impose $h^{2}=ab$.\" Writing the conic as $ax^{2}+2hxy+by^{2}+\\dots$ gives $a=4,\\ 2h=4t,\\ b=t^{2}$, so $h^{2}-ab=(2t)^{2}-4\\cdot t^{2}=4t^{2}-4t^{2}\\equiv 0$ for every $t$. The condition $h^{2}=ab$ is satisfied identically and pins nothing down — a student who treats it as the criterion concludes \"$C_t$ is a pair of parallel lines for all $t$,\" which is flat wrong: the perfect-square quadratic part $(2x+ty)^{2}$ only fixes the common direction; for $t\\neq 2$ the linear terms refuse to align with that direction and $C_t$ is a parabola. Parallelism of the second-degree part is the outer perfect square; the genuine test is a second, deeper perfect-square condition — the $3\\times3$ pair-of-lines determinant $\\Delta(t)$ must vanish, and it turns out $\\Delta(t)=-(t-2)^{2}$, a perfect square in $t$ whose lone (repeated) zero is $t=2$. Stopping at $h^{2}=ab$ misses this entire second layer. A weaker variant of the slip is to find $t=2$ but forget the final distinctness check (the offset quadratic's discriminant must be positive, else the lines coincide).",
    "solutions": [
      {
        "name": "Pair-of-lines determinant (the deeper perfect square)",
        "steps": [
          "Write $C_t$ as $ax^{2}+2hxy+by^{2}+2gx+2fy+c=0$ with $a=4,\\ h=2t,\\ b=t^{2},\\ g=-4,\\ f=\\tfrac{2-5t}{2},\\ c=3$. The second-degree part is $(2x+ty)^{2}$, so $h^{2}-ab=4t^{2}-4t^{2}=0$ for all $t$: the lines (if any) are parallel, but this gives no equation for $t$.",
          "A general second-degree equation represents a pair of straight lines if and only if the symmetric determinant $\\Delta=\\begin{vmatrix}a&h&g\\\\h&b&f\\\\g&f&c\\end{vmatrix}=abc+2fgh-af^{2}-bg^{2}-ch^{2}$ vanishes. Substituting and simplifying collapses everything to $\\Delta(t)=-(t-2)^{2}$.",
          "Hence $\\Delta(t)=0\\iff (t-2)^{2}=0\\iff t=2$. The fact that $\\Delta$ is itself a perfect square in $t$ is the structural twist: the line-pair locus is a single tangential value, the \"perfect square inside the perfect square.\" For all $t\\neq2$, $\\Delta\\neq0$ and (since $h^{2}=ab$) the curve is a parabola.",
          "At $t=2$ the equation is $4x^{2}+8xy+4y^{2}-8x-8y+3=0$. With $u=2x+2y$ it reads $u^{2}-4u+3=(u-1)(u-3)=0$, i.e. $(2x+2y-1)(2x+2y-3)=0$ — distinct because $1\\neq3$. Distance $=\\dfrac{|3-1|}{\\sqrt{2^{2}+2^{2}}}=\\dfrac1{\\sqrt2}$. Thus $\\boxed{t=2}$."
        ]
      },
      {
        "name": "Force the factorization and match coefficients",
        "steps": [
          "Since the quadratic part is $(2x+ty)^{2}$, if $C_t$ splits into parallel lines they must read $(2x+ty-p)(2x+ty-q)=0$ for some constants $p,q$. Expanding gives $4x^{2}+4txy+t^{2}y^{2}-(p+q)(2x+ty)+pq$.",
          "Matching this against $4x^{2}+4txy+t^{2}y^{2}-8x+(2-5t)y+3$ forces the $x$-coefficient $-2(p+q)=-8$, so $p+q=4$; the constant $pq=3$; and the $y$-coefficient $-t(p+q)=2-5t$, i.e. $-4t=2-5t$.",
          "The $y$-equation gives $t=2$ immediately — this is the alignment condition the perfect-square test cannot see. Then $p+q=4,\\ pq=3\\Rightarrow\\{p,q\\}=\\{1,3\\}$, both real and distinct, so the lines are genuinely two (not coincident).",
          "Therefore $C_2=(2x+2y-1)(2x+2y-3)=0$ with $\\boxed{t=2}$, the lines $2x+2y=1$ and $2x+2y=3$, distance $\\dfrac1{\\sqrt2}$ apart."
        ]
      },
      {
        "name": "Solve as a quadratic in $x$ and demand a constant discriminant",
        "steps": [
          "Read $C_t$ as a quadratic in $x$: $4x^{2}+(4ty-8)x+\\big(t^{2}y^{2}+(2-5t)y+3\\big)=0$, so $x=\\dfrac{-(4ty-8)\\pm\\sqrt{D(y)}}{8}$ with $D(y)=(4ty-8)^{2}-16\\big(t^{2}y^{2}+(2-5t)y+3\\big)$.",
          "For each of the $\\pm$ branches to be a straight line, $x$ must be linear in $y$, which forces $\\sqrt{D(y)}$ to be a polynomial of degree $\\le1$; for the two resulting lines to be parallel (equal slope $-1$ from the $-(4ty-8)/8$ part) the radical $\\sqrt{D(y)}$ must in fact be constant. Compute $D(y)=16\\big((t-2)y+1\\big)$.",
          "$D(y)$ is constant in $y$ iff its $y$-coefficient $16(t-2)=0$, i.e. $t=2$; then $D=16>0$, so $\\sqrt D=4$ is real and nonzero, giving two distinct parallel lines (a zero value would mean coincident lines, a negative value none).",
          "At $t=2$, $x=\\dfrac{-(8y-8)\\pm4}{8}$ yields $2x+2y=3$ and $2x+2y=1$, i.e. $C_2=(2x+2y-1)(2x+2y-3)=0$, distance $\\dfrac1{\\sqrt2}$. Hence $\\boxed{t=2}$."
        ]
      }
    ],
    "remark": "Insight: \"pair of parallel lines\" is governed by two nested perfect-square conditions, and only the inner one carries information here. The outer condition $h^{2}=ab$ merely says the highest-degree part is a perfect square $(2x+ty)^{2}$ — it fixes the common direction but, being an identity in $t$, cannot select a value; it is structurally the same decoy as in the hint's $4x^{2}+kxy+(k^{2}/16)y^{2}$. The true determinant is the $3\\times3$ pair-of-lines invariant $\\Delta(t)$, and the elegance is that $\\Delta(t)=-(t-2)^{2}$ is itself a perfect square in the parameter: degeneracy occurs at a single tangential value $t=2$ rather than along an interval, marking where the parabola family momentarily flattens into a line-pair. Two finishing subtleties separate a top ranker from the pack. First, $h^{2}=ab$ does not even guarantee a line-pair — for $t\\neq2$ it guarantees a parabola (perfect-square quadratic part with non-vanishing $\\Delta$), so one must never conflate \"the quadratic terms factor\" with \"the whole conic factors.\" Second, $\\Delta=0$ certifies some degenerate line-pair but is blind to distinct-versus-coincident; the offset quadratic $u^{2}-4u+3$ having positive discriminant ($4>0$) is what upgrades the answer from \"a repeated line\" to \"two genuine parallel lines.\" The lesson: when a perfect square appears, ask which perfect square actually constrains the parameter, and always read off the factorization to count the multiplicity you are really being asked for."
  },
  {
    "theme": "location",
    "themeLabel": "Location of Roots",
    "title": "The Threshold of Two",
    "difficulty": 4,
    "task": "Find all",
    "tags": [
      "both-roots-greater",
      "discriminant",
      "vertex",
      "parameter-range"
    ],
    "statement": "Find all real values of $a$ for which both roots of\n\\[ x^{2} - 2a\\,x + (a+2) = 0 \\]\nare strictly greater than $1$.",
    "answer": "$a \\in [2,\\,3)$",
    "trap": "Demanding only $f(1)>0$ and vertex $a>1$ gives $(1,3)$, which wrongly admits $1<a<2$. There the discriminant $4(a-2)(a+1)$ is negative, so the roots are complex and 'both greater than $1$' is meaningless. The $D\\ge 0$ clause is what trims the interval to $[2,3)$.",
    "solutions": [
      {
        "name": "Three-condition criterion",
        "steps": [
          "For a monic quadratic $f$ with both roots exceeding $k$, three conditions are necessary and sufficient: $D\\ge 0$, $f(k)>0$, and the vertex $x_v=-b/(2a)>k$.",
          "Compute $D = 4a^{2}-4(a+2) = 4(a-2)(a+1)\\ge 0 \\Rightarrow a\\le -1$ or $a\\ge 2$.",
          "Compute $f(1) = 1-2a+(a+2) = 3-a>0 \\Rightarrow a<3$.",
          "Vertex $x_v = a > 1$.",
          "Intersect: $\\big(\\{a\\le-1\\}\\cup\\{a\\ge2\\}\\big)\\cap\\{a<3\\}\\cap\\{a>1\\} = [2,3)$.",
          "Hence $\\boxed{a\\in[2,3)}$."
        ]
      },
      {
        "name": "Roots via shift $x=y+1$",
        "steps": [
          "Put $x=y+1$; both roots exceed $1$ iff both roots of the shifted polynomial in $y$ are positive.",
          "$f(y+1) = (y+1)^2 - 2a(y+1) + (a+2) = y^{2} + (2-2a)y + (3-a)$.",
          "Both roots positive $\\Leftrightarrow$ $D\\ge0$, sum $2a-2>0$, product $3-a>0$.",
          "$D = (2-2a)^2 - 4(3-a) = 4a^2 -4a -8 = 4(a-2)(a+1)\\ge0$; sum $>0\\Rightarrow a>1$; product $>0\\Rightarrow a<3$.",
          "Combine: $a\\ge2$ (from $D$ with $a>1$) and $a<3$, giving $\\boxed{a\\in[2,3)}$."
        ]
      }
    ],
    "remark": "Insight: the three-condition test for 'both roots $>k$' is exactly 'shift so $k\\mapsto 0$, then both roots positive' — the vertex condition $x_v>k$ is just 'sum of shifted roots $>0$', and $f(k)>0$ is 'product $>0$'. The endpoint $a=2$ survives because there the double root is exactly $2>1$."
  },
  {
    "theme": "location",
    "themeLabel": "Location of Roots",
    "title": "A Sign That Flips",
    "difficulty": 5,
    "task": "Find all",
    "tags": [
      "between-roots",
      "sign-of-leading",
      "af(k)<0",
      "parameter-range"
    ],
    "statement": "The leading coefficient of the quadratic\n\\[ f(x) = (a-2)x^{2} - (2a+1)x + (a+4) \\]\ndepends on $a$. Find all real $a$ for which the number $1$ lies strictly between the two (real) roots of $f$.",
    "answer": "$a \\in (-\\infty,\\,2)$",
    "trap": "Assuming the parabola opens upward and demanding $f(1)<0$ is the seductive error: here the leading coefficient is $a-2$, which is negative for $a<2$. The correct criterion is $(\\text{leading coeff})\\cdot f(1)<0$, i.e. $(a-2)f(1)<0$. Forgetting the factor $a-2$ flips the answer — and since $f(1)=1>0$ always, the naive demand $f(1)<0$ would select no $a$ at all.",
    "solutions": [
      {
        "name": "Sign criterion $L\\cdot f(k)<0$",
        "steps": [
          "A value $k$ lies strictly between the roots of $Ax^2+Bx+C$ (with $A\\neq 0$) iff $A\\cdot f(k)<0$; this single inequality automatically forces the discriminant $D>0$.",
          "Here $L=a-2$ and $f(1) = (a-2)-(2a+1)+(a+4) = 1$.",
          "So $L\\cdot f(1) = (a-2)\\cdot 1 = a-2 < 0 \\Rightarrow a<2$.",
          "Sanity check on the discriminant: $D = (2a+1)^2 - 4(a-2)(a+4) = 33-4a$, which is positive for all $a<2$, so two distinct real roots genuinely exist — the criterion is self-consistent.",
          "Check $a=2$ separately: $f$ becomes linear, $-5x+6$, with a single root $6/5$ — no 'between' configuration, so $a=2$ is excluded (consistent with strict inequality).",
          "Therefore $\\boxed{a\\in(-\\infty,2)}$."
        ]
      },
      {
        "name": "Normalize the leading sign",
        "steps": [
          "Since $f(1)=1>0$, the value of $f$ at $x=1$ is positive regardless of $a$.",
          "For $1$ to lie between the roots, the value $f(1)$ must have the opposite sign to the opening direction $L=a-2$: the parabola must dip below (or rise above) the axis on the side opposite its opening.",
          "Concretely, $1$ is between the roots iff $f(1)$ and $L$ have opposite signs; with $f(1)=1>0$ this needs $L=a-2<0$, giving $a<2$.",
          "Verify with $a=0$: $f=-2x^2-x+4$, roots $\\approx -1.69,\\ 1.19$, and $1$ lies between them. With $a=3$: $f=x^2-7x+7$, roots $\\approx1.21,\\ 5.79$, so $1$ is NOT between. This confirms $\\boxed{a<2}$."
        ]
      }
    ],
    "remark": "Insight: the test '$k$ between roots $\\Leftrightarrow A\\,f(k)<0$' is the one place where the sign of the leading coefficient cannot be normalized away cheaply — when $A$ itself carries the parameter, the whole answer hinges on it. The deliberate trapdoor is that $f(1)=1$ is a constant: a student who shortcuts to '$f(1)<0$' finds it can never hold and concludes (wrongly) that no $a$ works."
  },
  {
    "theme": "location",
    "themeLabel": "Location of Roots",
    "title": "Trapped in a Window",
    "difficulty": 4,
    "task": "Find all",
    "tags": [
      "both-roots-interval",
      "four-conditions",
      "discriminant",
      "vertex"
    ],
    "statement": "Find all real $a$ such that both roots of\n\\[ x^{2} - 2a\\,x + (a+6) = 0 \\]\nlie in the open interval $(0,\\,5)$.",
    "answer": "$a \\in \\left[3,\\,\\tfrac{31}{9}\\right)$",
    "trap": "Imposing only the boundary signs $f(0)>0$ and $f(5)>0$ admits the huge spurious range $-6<a<\\tfrac{31}{9}$. But for $a$ in $(-2,3)$ the discriminant is negative, so the roots are complex and not in $(0,5)$ at all; and the other branch $a\\le-2$ has its vertex outside $(0,5)$, sliding both roots away from the window. Two more conditions are mandatory: $D\\ge0$ (real roots) and the vertex $x_v=a$ must lie in $(0,5)$.",
    "solutions": [
      {
        "name": "Four-condition localization",
        "steps": [
          "Both roots of a monic $f$ lie in $(p,q)$ $\\iff$ four conditions hold simultaneously: $D\\ge0$, $f(p)>0$, $f(q)>0$, and $p<x_v<q$ where $x_v$ is the vertex abscissa.",
          "Discriminant: $D=(-2a)^2-4(a+6)=4a^2-4a-24=4(a-3)(a+2)\\ge0\\Rightarrow a\\le-2\\ \\text{or}\\ a\\ge3$.",
          "Left sign: $f(0)=a+6>0\\Rightarrow a>-6$.",
          "Right sign: $f(5)=25-10a+(a+6)=31-9a>0\\Rightarrow a<\\tfrac{31}{9}$.",
          "Vertex: $x_v=-\\dfrac{-2a}{2}=a$, so the requirement $0<x_v<5$ becomes $0<a<5$.",
          "Intersect everything: the discriminant branch $a\\le-2$ is killed by $a>0$ (vertex), leaving $a\\ge3$; combined with $a<\\tfrac{31}{9}$ this gives $\\boxed{a\\in\\left[3,\\tfrac{31}{9}\\right)}$ (note $a<\\tfrac{31}{9}<5$ keeps the vertex condition slack)."
        ]
      },
      {
        "name": "Roots-and-bounds (Vieta) view",
        "steps": [
          "Write the roots as $r,s$ with $r+s=2a$ and $rs=a+6$. Requiring both in $(0,5)$ forces $r+s\\in(0,10)$ and a positive product, but those alone are not sufficient — reality and the upper cap must be enforced.",
          "Reality: $r,s\\in\\mathbb{R}$ needs $D\\ge0$, i.e. $a\\le-2$ or $a\\ge3$.",
          "Both positive: with $r+s=2a>0$ and $rs=a+6>0$ we need $a>0$, which already discards the $a\\le-2$ branch, so $a\\ge3$.",
          "Both below $5$: equivalently $f(5)>0$ (the upward parabola is positive beyond the larger root). $f(5)=31-9a>0\\Rightarrow a<\\tfrac{31}{9}$. Since $\\tfrac{31}{9}\\approx3.44<5$, the sum stays in range automatically.",
          "Combining $a\\ge3$ and $a<\\tfrac{31}{9}$ gives $\\boxed{a\\in\\left[3,\\tfrac{31}{9}\\right)}$."
        ]
      },
      {
        "name": "Endpoint sanity check",
        "steps": [
          "At $a=3$: $D=0$, giving a double root $x=x_v=a=3\\in(0,5)$ — valid, so the left endpoint is INCLUDED (closed).",
          "At $a=\\tfrac{31}{9}\\approx3.44$: $f(5)=0$, so $x=5$ is a root, which is NOT in the OPEN interval — EXCLUDED (open).",
          "Just above, $a=3.45$ gives roots $\\approx1.88$ and $\\approx5.02$; the larger one escapes the window, confirming the right cut is sharp.",
          "Hence the admissible set is exactly $\\boxed{\\left[3,\\tfrac{31}{9}\\right)}$."
        ]
      }
    ],
    "remark": "Insight: the vertex condition is the silent hero. The naive sign test $f(0)>0,\\ f(5)>0$ leaks values like $a=0,1,2$, where the discriminant is negative and the roots are complex, and the far branch $a\\le-2$, where the vertex sits outside $(0,5)$. Adding $D\\ge0$ and $0<a<5$ surgically removes both leaks, collapsing the spurious window down to the true band $\\left[3,\\tfrac{31}{9}\\right)$."
  },
  {
    "theme": "location",
    "themeLabel": "Location of Roots",
    "title": "One Foot In, One Foot Out",
    "difficulty": 4,
    "task": "Find all",
    "tags": [
      "exactly-one-root",
      "f(p)f(q)<0",
      "interval",
      "parameter-range"
    ],
    "statement": "Find all real $a$ for which the quadratic\n\\[ x^{2} - (2a+1)x + (a^{2}+a-2) = 0 \\]\nhas exactly one root in the open interval $(1,\\,3)$.",
    "answer": "$a \\in (-1,\\,1)\\cup(2,\\,4)$",
    "trap": "The criterion $f(1)f(3)<0$ is correct here, but only because the two roots can never BOTH land inside $(1,3)$. The careless move is to invoke $f(1)f(3)<0$ without checking that 'both-in' is impossible: in general $f(p)f(q)>0$ hides a case where two roots sit together inside, and $f(p)f(q)<0$ could in principle miss configurations. Here the roots are $a-1$ and $a+2$, separated by a fixed gap of $3>2=$ the interval length, so 'both-in' is ruled out — but that gap check is exactly the step that licenses $f(1)f(3)<0$ as a complete answer.",
    "solutions": [
      {
        "name": "Opposite signs at the endpoints",
        "steps": [
          "If neither endpoint is a root, 'exactly one root strictly inside $(p,q)$' is equivalent to $f(p)\\cdot f(q)<0$: the parabola changes sign across $(p,q)$ precisely when it crosses the axis an odd number of times there.",
          "$f(1)=1-(2a+1)+(a^2+a-2)=a^2-a-2=(a-2)(a+1)$.",
          "$f(3)=9-3(2a+1)+(a^2+a-2)=a^2-5a+4=(a-1)(a-4)$.",
          "$f(1)f(3)<0 \\Rightarrow (a-2)(a+1)(a-1)(a-4)<0$.",
          "Sign chart with breakpoints $-1,1,2,4$: the product is negative on $(-1,1)\\cup(2,4)$.",
          "Validity check: a single sign change could also occur with two roots inside, but the roots differ by a constant $3>2$ (see Method 2), so 'both-in' is impossible and $f(1)f(3)<0$ captures exactly the 'one-in' case.",
          "Thus $\\boxed{a\\in(-1,1)\\cup(2,4)}$."
        ]
      },
      {
        "name": "Explicit roots",
        "steps": [
          "The discriminant is $(2a+1)^2-4(a^2+a-2)=9$, a constant perfect square, so the roots are $\\dfrac{(2a+1)\\pm3}{2}=a+2,\\ a-1$.",
          "'Exactly one in $(1,3)$' means precisely one of $a-1,\\ a+2$ lies in $(1,3)$.",
          "$1<a-1<3 \\Leftrightarrow 2<a<4$; $1<a+2<3 \\Leftrightarrow -1<a<1$.",
          "Because the roots differ by exactly $3$ (wider than the interval), the two windows $-1<a<1$ and $2<a<4$ are disjoint and can never hold together, so 'exactly one' is their union $(-1,1)\\cup(2,4)$.",
          "Endpoints $a=-1,1,2,4$ place a root exactly at $1$ or $3$, which is excluded by the open interval, so all four are dropped: $\\boxed{(-1,1)\\cup(2,4)}$."
        ]
      }
    ],
    "remark": "Insight: the discriminant is the constant $9$, so the gap between the roots is rigidly $3$ — strictly larger than the window length $2$. That single fact rules out a 'both-in' branch and is exactly why $f(1)f(3)<0$ alone settles 'exactly one root inside' with no hidden cases."
  },
  {
    "theme": "location",
    "themeLabel": "Location of Roots",
    "title": "One Root in Each Cell of a Triptych",
    "difficulty": 5,
    "task": "Find",
    "tags": [
      "location-of-roots",
      "three-point-straddle",
      "endpoint-signs",
      "trigonometric-coefficients",
      "vieta",
      "boundary-trap"
    ],
    "statement": "For a real parameter $a\\in\\left(-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right)$, consider\n\\[ f(x)=x^{2}-3(\\sin a)\\,x-1. \\]\nThe number line is partitioned by the ordered triple $-1<0<2$ into cells. Find all $a$ for which $f$ has exactly one root in the open interval $(-1,0)$ and its other root in the open interval $(0,2)$, i.e. the two roots occupy the two adjacent cells $(-1,0)$ and $(0,2)$ simultaneously.",
    "answer": "\\[ \\boxed{\\,a\\in\\left(0,\\ \\dfrac{\\pi}{6}\\right)\\,} \\]",
    "trap": "Straddling three ordered points $-1<0<2$ with one root in $(-1,0)$ and one in $(0,2)$ is, for an upward parabola, the joint sign pattern $f(-1)>0,\\ f(0)<0,\\ f(2)>0$ — three conditions, and the discipline of this chapter is to impose all three together with the discriminant. The trap here is engineered to make the eye fix on the wrong pair. Compute the sign data: $f(0)=-1<0$ identically, because the product of the roots is $-1$. So the roots always straddle $0$ — one negative, one positive, automatically two distinct reals (the discriminant $9\\sin^{2}a+4>0$ is never in doubt). A solver who has internalised ``the $f(0)<0$ condition is what makes roots straddle the middle point'' will spend effort confirming the free condition and feel the configuration is essentially secured, then check only that the negative root clears $-1$ — that is $f(-1)=3\\sin a>0$, giving $\\sin a>0$, i.e. $a\\in(0,\\tfrac{\\pi}{2})$ — and stop. This silently drops $f(2)>0$, the one condition that actually pins the right cell. The dropped condition is the live one: $f(2)=3-6\\sin a>0$ forces $\\sin a<\\tfrac12$. Concrete refutation: at $a=0.6\\,(<\\tfrac{\\pi}{2})$ the roots are $\\approx\\{-0.464,\\,2.157\\}$ — the negative root is safely in $(-1,0)$, $f(0)<0$ holds, yet the positive root has escaped past $2$, so $a=0.6$ is NOT a solution though the two-condition reasoning admits it. The mirror error — keeping $f(2)>0$ but dropping $f(-1)>0$ — wrongly admits $a\\le 0$, where the negative root has slid below $-1$ (at $a=0$ it sits exactly at $-1$). Both endpoints, $-1$ and $2$, are gatekeepers; the middle point $0$ is a decoy that certifies nothing. Finally the bounds are open: $a=0$ puts a root on the wall $x=-1$ and $a=\\tfrac{\\pi}{6}$ puts a root on the wall $x=2$, so a $\\le/\\ge$ reading smuggles in the closed endpoints and corrupts the answer.",
    "solutions": [
      {
        "name": "Three-point sign test — isolate the decoy from the two live walls",
        "steps": [
          "For the upward parabola $f$, ``one root in $(-1,0)$ and one in $(0,2)$'' is exactly the chain of strict signs at the three ordered points: $f(-1)>0$ (parabola above axis left of the left cell), $f(0)<0$ (it dips below between the cells, forcing a root on each side of $0$), and $f(2)>0$ (back above axis right of the right cell). Existence of real roots is then automatic, since $f(0)<0$ already guarantees the graph crosses the axis twice.",
          "Evaluate. $f(0)=-1<0$ for every $a$ — this condition is permanently satisfied and contributes nothing; geometrically the product of roots is $-1$, so the two roots always lie on opposite sides of $0$. The work is entirely in the two outer walls.",
          "$f(-1)=1+3\\sin a-1=3\\sin a>0\\iff \\sin a>0$. On $\\left(-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2}\\right)$ this means $a\\in(0,\\tfrac{\\pi}{2})$ — this keeps the negative root above $-1$.",
          "$f(2)=4-6\\sin a-1=3-6\\sin a>0\\iff \\sin a<\\tfrac12$. On $\\left(-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2}\\right)$ this means $a<\\tfrac{\\pi}{6}$ — this keeps the positive root below $2$. This is the condition the trap discards.",
          "Intersect the two live constraints: $0<\\sin a<\\tfrac12$, i.e. $a\\in\\left(0,\\tfrac{\\pi}{6}\\right)$. Strictness at both ends survives because $a=0$ and $a=\\tfrac{\\pi}{6}$ place a root exactly on a wall. Hence $\\boxed{\\,a\\in\\left(0,\\tfrac{\\pi}{6}\\right)\\,}$."
        ]
      },
      {
        "name": "Vieta: pin the negative root to $-1/(\\text{positive root})$",
        "steps": [
          "By Vieta the roots multiply to $-1$ and sum to $3\\sin a$. Write the positive root as $q>0$; then the negative root is exactly $-\\tfrac1q$, so the two roots are $\\left(-\\tfrac1q,\\ q\\right)$ for some $q>0$. (Reality and the straddle of $0$ are built in — no separate discriminant check is needed.)",
          "Translate the two cell requirements into bounds on $q$. The positive root must satisfy $0<q<2$. The negative root must satisfy $-1<-\\tfrac1q<0$, and $-\\tfrac1q>-1\\iff \\tfrac1q<1\\iff q>1$. Combining, $q\\in(1,2)$.",
          "Recover $a$ from the sum: $3\\sin a=q-\\tfrac1q$. The map $q\\mapsto q-\\tfrac1q$ is strictly increasing, sending $q=1\\mapsto 0$ and $q=2\\mapsto \\tfrac32$. Hence $q\\in(1,2)\\iff 3\\sin a\\in(0,\\tfrac32)\\iff \\sin a\\in\\left(0,\\tfrac12\\right)$.",
          "On $\\left(-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2}\\right)$, $\\sin a\\in(0,\\tfrac12)\\iff a\\in\\left(0,\\tfrac{\\pi}{6}\\right)$, so $\\boxed{\\,a\\in\\left(0,\\tfrac{\\pi}{6}\\right)\\,}$. The Vieta picture makes the symmetry transparent: $q>1$ is the same fact as the negative root clearing $-1$, and $q<2$ is the right wall — neither cell can be ignored."
        ]
      },
      {
        "name": "Explicit roots with a sign-safe squaring",
        "steps": [
          "Let $c=3\\sin a$, so $c\\in(-3,3)$ as $a$ ranges over $\\left(-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2}\\right)$. The roots are $\\dfrac{c\\pm\\sqrt{c^{2}+4}}{2}$; since $\\sqrt{c^{2}+4}>|c|$, the lower root $r_{-}=\\dfrac{c-\\sqrt{c^{2}+4}}{2}<0$ and the upper root $r_{+}=\\dfrac{c+\\sqrt{c^{2}+4}}{2}>0$ always.",
          "Right wall, $r_{+}<2$: $c+\\sqrt{c^{2}+4}<4\\Rightarrow \\sqrt{c^{2}+4}<4-c$. Since $4-c>0$, square legitimately: $c^{2}+4<16-8c+c^{2}\\Rightarrow 8c<12\\Rightarrow c<\\tfrac32$.",
          "Left wall, $r_{-}>-1$: $c-\\sqrt{c^{2}+4}>-2\\Rightarrow \\sqrt{c^{2}+4}<c+2$. The right side is positive (as $c>-3$ gives $c+2>-1$; and we need $c+2>0$, automatic once a solution exists), so squaring: $c^{2}+4<c^{2}+4c+4\\Rightarrow 0<4c\\Rightarrow c>0$.",
          "Thus $0<c<\\tfrac32$, i.e. $0<3\\sin a<\\tfrac32$, i.e. $\\sin a\\in\\left(0,\\tfrac12\\right)$, giving $\\boxed{\\,a\\in\\left(0,\\tfrac{\\pi}{6}\\right)\\,}$. The two squarings are precisely the two outer-wall conditions $f(2)>0$ and $f(-1)>0$ in disguise; the would-be middle condition never appears because $r_-r_+=-1$ makes the $0$-straddle free."
        ]
      }
    ],
    "remark": "Insight: a three-point straddle is governed by signs at all three points, but the points are not equal partners. Here the constant term $-1$ forces the product of roots to be $-1$, so $f(0)<0$ holds identically: the middle point $0$ is a permanent decoy, and with it the entire question of real, distinct roots is settled for free. Everything that can go wrong happens at the outer walls $-1$ and $2$, and the design rewards the discipline of checking both. The seductive failure is to treat $f(0)<0$ as the substantive ``straddle'' condition, verify it, watch the negative root, and quietly drop $f(2)>0$ — exactly the wall that the positive root crosses as $a$ grows toward $\\tfrac{\\pi}{2}$. The top-ranker rule: when one of the localization conditions is automatically true (a product- or sign-of-$f(k)$ identity), do not relax — that very freeness is a flag that the live constraints have migrated to the other test points, and a multi-point straddle is only as secure as its tightest wall. And honour strictness: open cells mean open answer."
  },
  {
    "theme": "location",
    "themeLabel": "Location of Roots",
    "title": "Standing Clear of the Pair",
    "difficulty": 4,
    "task": "Find all",
    "tags": [
      "outside-roots",
      "discriminant-strict",
      "af(k)>0",
      "parameter-range"
    ],
    "statement": "Find all real $a$ for which the equation\n\\[ x^{2} - 2a\\,x + (3a-2) = 0 \\]\nhas two distinct real roots, both lying to one side of the number $2$ (that is, $2$ lies strictly outside the interval bounded by the roots).",
    "answer": "$a \\in (-\\infty,\\,1)$",
    "trap": "Imposing only $f(2)>0$ yields $a<2$, but for $1<a<2$ the discriminant $4(a-1)(a-2)$ is negative — the roots are complex, so 'both on one side of $2$' is vacuous/false. The requirement of two distinct real roots ($D>0$) is what cuts the answer down to $a<1$.",
    "solutions": [
      {
        "name": "D>0 together with f(2)>0",
        "steps": [
          "'$k$ outside the (real, distinct) roots' $\\Leftrightarrow$ $D>0$ and $f(k)>0$ (for monic $f$, $f(k)>0$ means $k$ is not between the roots).",
          "$D=4a^{2}-4(3a-2)=4(a^{2}-3a+2)=4(a-1)(a-2)>0 \\Rightarrow a<1$ or $a>2$.",
          "$f(2)=4-4a+(3a-2)=2-a>0 \\Rightarrow a<2$.",
          "Intersect: $\\big(\\{a<1\\}\\cup\\{a>2\\}\\big)\\cap\\{a<2\\} = (-\\infty,1)$.",
          "Therefore $\\boxed{a\\in(-\\infty,1)}$."
        ]
      },
      {
        "name": "Boundary scan",
        "steps": [
          "For $a$ just below $1$ (e.g. $a=0.9$): $D>0$ and both roots are real with $2$ outside — valid.",
          "At $a=1$: $D=0$, double root $x=1$ — not 'two distinct' roots, so excluded (open endpoint).",
          "For $1<a<2$: $D<0$, complex roots — invalid.",
          "At $a=2$: $D=0$ again, and $f(2)=0$ so $2$ is a root — invalid.",
          "For $a>2$: $D>0$ but $f(2)=2-a<0$, so $2$ lies BETWEEN the roots — invalid.",
          "Only $a<1$ survives: $\\boxed{(-\\infty,1)}$."
        ]
      }
    ],
    "remark": "Insight: 'outside the roots' silently presupposes the roots EXIST and are distinct, so $D>0$ is mandatory — exactly the clause the $f(2)>0$-only shortcut forgets. The complex window $(1,2)$ is the bait. (For every valid $a<1$ both roots in fact land strictly below $2$.)"
  },
  {
    "theme": "location",
    "themeLabel": "Location of Roots",
    "title": "The Window That Rides the Vertex",
    "difficulty": 4,
    "task": "Determine",
    "tags": [
      "location-of-roots",
      "discriminant",
      "trigonometric-coefficients",
      "vertex",
      "interval-containment"
    ],
    "statement": "For $\\theta\\in(0,\\pi)$, consider the quadratic\n\\[ f(x)=x^{2}-2x\\sin\\theta+\\bigl(\\sin^{2}\\theta+\\cos\\theta\\bigr). \\]\nFind all $\\theta$ for which $f$ has two distinct real roots, both lying strictly inside the moving window $\\bigl(\\sin\\theta-1,\\ \\sin\\theta+1\\bigr)$.",
    "answer": "\\[ \\boxed{\\,\\theta\\in\\left(\\dfrac{\\pi}{2},\\,\\pi\\right)\\,} \\]",
    "trap": "The window is a moving target, so the reflex is to slam down the three textbook localization conditions for ``both roots in $(a,b)$'' and grind: $f(a)>0$, $f(b)>0$, and $a<x_{\\text{vertex}}<b$. Every one of these holds for the entire range $\\theta\\in(0,\\pi)$ -- indeed $f(\\sin\\theta-1)=f(\\sin\\theta+1)=\\cos\\theta+1>0$ (since $\\cos\\theta>-1$), and the vertex sits at $x=\\sin\\theta$, the exact midpoint of $(\\sin\\theta-1,\\sin\\theta+1)$, so it is trapped inside automatically. A student who writes only these three then triumphantly answers ``all $\\theta\\in(0,\\pi)$'' -- and is wrong. The discriminant condition $D\\ge 0$ was silently dropped, yet here it is the only live constraint: $\\tfrac{D}{4}=\\sin^{2}\\theta-(\\sin^{2}\\theta+\\cos\\theta)=-\\cos\\theta$, which is negative on $(0,\\tfrac{\\pi}{2})$. Concrete refutation: at $\\theta=\\tfrac{\\pi}{3}$, $f(\\sin\\theta\\pm1)=\\tfrac32>0$ and the vertex is centred, yet $\\tfrac{D}{4}=-\\tfrac12<0$, so the roots are complex and no root lies in the window. The trap is believing the sign-and-vertex picture certifies real roots; it does not -- $f$ can sit entirely above the axis while every endpoint test passes. (A secondary subtlety: $\\theta=\\tfrac{\\pi}{2}$ gives the double root $x=1$; ``distinct'' excludes it, so the answer is the open interval.)",
    "solutions": [
      {
        "name": "Full localization machinery -- only the discriminant survives",
        "steps": [
          "Both roots of the upward parabola $f$ lie strictly in $(a,b)=(\\sin\\theta-1,\\ \\sin\\theta+1)$ iff all four conditions hold simultaneously: (i) $D\\ge 0$ for real roots; (ii) $f(a)>0$; (iii) $f(b)>0$; (iv) $a<x_{\\text{vertex}}<b$. Distinctness upgrades (i) to $D>0$.",
          "Condition (i): $\\tfrac{D}{4}=\\sin^{2}\\theta-(\\sin^{2}\\theta+\\cos\\theta)=-\\cos\\theta$. Distinct real roots require $-\\cos\\theta>0$, i.e. $\\cos\\theta<0$, i.e. $\\theta\\in(\\tfrac{\\pi}{2},\\pi)$.",
          "Conditions (ii),(iii): with $x=\\sin\\theta\\pm1$ we get $f(\\sin\\theta\\pm1)=(\\sin\\theta\\pm1)^{2}-2\\sin\\theta(\\sin\\theta\\pm1)+\\sin^{2}\\theta+\\cos\\theta=\\cos\\theta+1$. Since $\\cos\\theta>-1$ for $\\theta\\in(0,\\pi)$, both endpoint values are positive throughout -- these conditions never restrict $\\theta$.",
          "Condition (iv): the vertex is at $x=\\sin\\theta$, which is the midpoint of $(\\sin\\theta-1,\\sin\\theta+1)$, hence always strictly interior -- this condition never restricts $\\theta$ either.",
          "Intersecting the four, only (i) bites: $\\boxed{\\,\\theta\\in\\left(\\tfrac{\\pi}{2},\\pi\\right)\\,}$. The endpoint and vertex tests are decoys precisely tuned to look conclusive."
        ]
      },
      {
        "name": "Shift to the vertex -- the quadratic collapses",
        "steps": [
          "Put $y=x-\\sin\\theta$, centring on the vertex. Then $f=(y+\\sin\\theta)^{2}-2(y+\\sin\\theta)\\sin\\theta+\\sin^{2}\\theta+\\cos\\theta$ simplifies to $y^{2}+\\cos\\theta$, so the equation is simply $y^{2}=-\\cos\\theta$.",
          "The window $(\\sin\\theta-1,\\sin\\theta+1)$ becomes $y\\in(-1,1)$. The roots are $y=\\pm\\sqrt{-\\cos\\theta}$, symmetric about $0$.",
          "They are real and distinct iff $-\\cos\\theta>0$, and both lie in $(-1,1)$ iff $\\sqrt{-\\cos\\theta}<1$, i.e. $-\\cos\\theta<1$, which holds for all $\\theta\\in(0,\\pi)$. So the binding requirement is $0<-\\cos\\theta$.",
          "Hence $\\cos\\theta<0$, giving $\\boxed{\\,\\theta\\in\\left(\\tfrac{\\pi}{2},\\pi\\right)\\,}$. The collapse $f\\mapsto y^{2}+\\cos\\theta$ exposes why the endpoints are inert: the half-spread of the roots is $\\sqrt{-\\cos\\theta}\\le 1$, never reaching the window edge."
        ]
      },
      {
        "name": "Spread-versus-half-width inequality",
        "steps": [
          "For an upward parabola whose vertex is the exact centre of a symmetric window of half-width $h$, ``both roots inside'' is equivalent to the single statement: the roots are real and their distance from the vertex is less than $h$. Here $h=1$.",
          "The distance of each root from the vertex is $\\sqrt{\\tfrac{D}{4}}=\\sqrt{-\\cos\\theta}$ (when real). The condition is therefore $0\\le -\\cos\\theta<1^{2}=1$, with strict lower bound $-\\cos\\theta>0$ to force two distinct roots.",
          "Solve $0<-\\cos\\theta<1$ on $(0,\\pi)$: the upper bound $-\\cos\\theta<1$ is automatic since $\\cos\\theta>-1$; the lower bound $-\\cos\\theta>0$ means $\\cos\\theta<0$.",
          "Thus $\\theta\\in(\\tfrac{\\pi}{2},\\pi)$: $\\boxed{\\,\\theta\\in\\left(\\tfrac{\\pi}{2},\\pi\\right)\\,}$. The half-width $h=1$ never enters as a real constraint because the spread $\\sqrt{-\\cos\\theta}$ tops out below $1$ across the whole range -- the window is simply too wide ever to be the bottleneck, leaving reality of the roots as the sole gatekeeper."
        ]
      }
    ],
    "remark": "The problem is engineered so that the constant term $\\sin^{2}\\theta+\\cos\\theta$ makes $D/4=-\\cos\\theta$ -- a quantity that flips sign exactly at $\\theta=\\pi/2$ -- while the window is pinned symmetrically to the vertex $x=\\sin\\theta$. That symmetry is the misdirection: it forces $f(\\text{left})=f(\\text{right})=\\cos\\theta+1$ and the vertex-interior test to pass for every admissible $\\theta$, so the three ``sign/vertex'' conditions a strong student reaches for first carry zero information. Whenever the vertex lies at the centre of the target window, the sign-of-endpoints picture can never see complex roots, and the discriminant becomes the entire problem. The top-ranker takeaway: localization of roots is genuinely four conditions, not three -- $f(a)>0,\\,f(b)>0,$ and the vertex test certify placement only for roots that exist; existence ($D\\ge0$) must be checked first, and it is most dangerous precisely when the easy conditions look airtight."
  },
  {
    "theme": "location",
    "themeLabel": "Location of Roots",
    "title": "The Window, the Wall, and the Empty Sill",
    "difficulty": 4,
    "task": "Count",
    "tags": [
      "location",
      "straddle",
      "endpoint-signs",
      "boundary-trap",
      "integer-count",
      "asymmetry"
    ],
    "statement": "For an integer parameter $a$, consider \\[ f(x)=x^{2}-a\\,x+\\bigl(a^{2}-3a-10\\bigr). \\] Count the integers $a$ for which $f$ has exactly one root in the open interval $(2,5)$ while its other root lies strictly outside the closed interval $[2,5]$.",
    "answer": "\\[ \\boxed{3}\\qquad\\text{(namely }a\\in\\{0,1,2\\}\\text{).} \\]",
    "trap": "Because the parabola opens upward, \"exactly one root in $(2,5)$ with the other strictly outside $[2,5]$\" is governed by the single sign condition $f(2)\\,f(5)<0$. Factoring, $f(2)=a^{2}-5a-6=(a+1)(a-6)$ and $f(5)=a^{2}-8a+15=(a-3)(a-5)$, so the requirement is $(a+1)(a-3)(a-5)(a-6)<0$. A quartic with positive leading coefficient and simple roots $-1,3,5,6$ is negative on two sign-windows, $(-1,3)\\cup(5,6)$. The fatal habit is to glance at the first window, harvest the integers $0,1,2$, and forget the second window $(5,6)$ entirely — or, worse, to misread the chart and award $a=6$ to it. Two boundary subtleties must be honoured at once. First, the window $(5,6)$ is real but contains no integer, so it contributes nothing; a solver who never inspects it cannot know it is empty and is merely lucky. Second, every root of the product is a boundary touch and must be excluded under strict inequalities: $a=-1$ puts a root exactly at $2$, $a=3$ and $a=5$ put a root exactly at $5$, and $a=6$ is the cruellest — it gives roots $\\{2,4\\}$, so a root does sit inside $(2,5)$, but the other root rests on the wall $x=2$, hence is not strictly outside $[2,5]$, and $a=6$ is disqualified. Treating the interval as closed, or using $\\le$, smuggles in $\\{-1,3,5,6\\}$ and inflates the count to $7$. Only strict signs plus a deliberate sweep of both windows yields the honest answer $3$.",
    "solutions": [
      {
        "name": "Endpoint-sign straddle with a full sign chart",
        "steps": [
          "The graph of $f$ is an upward parabola, so a strict change of sign across the two endpoints is exactly the condition that one root lies in the open interval $(2,5)$ and the other strictly outside the closed interval: the requirement is precisely $f(2)\\,f(5)<0$, where a value of $0$ at an endpoint (a boundary touch) is automatically excluded.",
          "Compute the endpoints: $f(2)=4-2a+(a^{2}-3a-10)=a^{2}-5a-6=(a+1)(a-6)$ and $f(5)=25-5a+(a^{2}-3a-10)=a^{2}-8a+15=(a-3)(a-5)$. The inequality becomes $(a+1)(a-3)(a-5)(a-6)<0$.",
          "This quartic has positive leading coefficient and simple roots $-1<3<5<6$, so it is negative on the two open windows $(-1,3)$ and $(5,6)$, and the boundary roots $a\\in\\{-1,3,5,6\\}$ (where the product is $0$, not $<0$) are excluded.",
          "Now sweep both windows for integers. The window $(-1,3)$ contributes $a=0,1,2$; the window $(5,6)$ contains no integer and contributes nothing. Hence exactly $\\boxed{3}$ integers, $a\\in\\{0,1,2\\}$, qualify."
        ]
      },
      {
        "name": "Split by which side the spare root lands (asymmetry made explicit)",
        "steps": [
          "Separate the demand into the two disjoint geometric cases. Case A: the interior root is in $(2,5)$ and the other root is $<2$; for an upward parabola this means $f(2)<0$ and $f(5)>0$. Case B: the interior root is in $(2,5)$ and the other root is $>5$; this means $f(5)<0$ and $f(2)>0$.",
          "Case A: $f(2)=(a+1)(a-6)<0$ holds for $-1<a<6$, and $f(5)=(a-3)(a-5)>0$ holds for $a<3$ or $a>5$. Intersecting, $a\\in(-1,3)\\cup(5,6)$; integers give $a=0,1,2$ (the strip $(5,6)$ is integer-free).",
          "Case B: $f(5)=(a-3)(a-5)<0$ holds for $3<a<5$, while $f(2)=(a+1)(a-6)>0$ holds for $a<-1$ or $a>6$. These two ranges are disjoint: there is no $a$ at all, so Case B is empty. This is the hidden asymmetry — the spare root can only escape to the left, never to the right.",
          "The disjoint union has $3$ integers, $\\{0,1,2\\}$, confirming $\\boxed{3}$. (Reality of the roots is not a separate hurdle: $f(2)<0$ already forces the parabola below the axis, hence two distinct real roots, so the discriminant condition is automatically met inside Case A.)"
        ]
      },
      {
        "name": "Explicit roots plus the discriminant gate",
        "steps": [
          "The roots are $\\dfrac{a\\pm\\sqrt{D}}{2}$ with $D=a^{2}-4(a^{2}-3a-10)=-3a^{2}+12a+40$. Real roots require $D\\ge 0$, i.e. $a\\in\\Bigl[\\tfrac{6-\\sqrt{156}}{3},\\tfrac{6+\\sqrt{156}}{3}\\Bigr]\\approx[-2.16,\\,6.16]$, so only the integers $a\\in\\{-2,-1,0,1,2,3,4,5,6\\}$ can possibly work.",
          "Test each survivor against the literal demand (one root strictly inside $(2,5)$, the other strictly outside $[2,5]$). The roots are: $a{=}-2:\\{-2,0\\}$; $a{=}-1:\\{-3,2\\}$; $a{=}0:\\{\\mp\\sqrt{10}\\}\\approx\\{-3.16,3.16\\}$; $a{=}1:\\{-3,4\\}$; $a{=}2:\\{1{-}\\sqrt{13},1{+}\\sqrt{13}\\}\\approx\\{-2.61,4.61\\}$; $a{=}3:\\{-2,5\\}$; $a{=}4:\\approx\\{-1.16,5.16\\}$; $a{=}5:\\{0,5\\}$; $a{=}6:\\{2,4\\}$.",
          "Keep only those with a root in the open $(2,5)$ and the partner strictly off $[2,5]$: $a=0,1,2$ pass. Reject $a=-1,3,5$ (a root sits exactly on an endpoint) and reject $a=6$ (root $4$ is inside, but the partner $2$ rests on the wall, so it is not strictly outside $[2,5]$). $a=-2,4$ have no root inside $(2,5)$ at all.",
          "Exactly three integers survive, $a\\in\\{0,1,2\\}$, so the count is $\\boxed{3}$."
        ]
      }
    ],
    "remark": "Insight: a directional straddle is not one condition but a coordinated trio — the endpoint signs decide whether a root sits inside, the sign pattern decides which side the partner escapes to, and strictness at the boundary decides the borderline integers. The single product $f(2)f(5)<0$ secretly encodes all of this, but only if you read its full sign chart: an upward quartic is negative on two windows, and the discipline is to inspect both even when one ($(5,6)$ here) turns out integer-free. The most instructive disqualification is $a=6$, where a root genuinely lands inside the window yet the configuration fails because the other root leans on the wall $x=2$ — \"strictly outside $[2,5]$\" is a constraint on the root you were not watching. Top scorers internalise the rule: after a straddle inequality, return to every endpoint touch ($f=0$) and every secondary window and ask whether a strict reading admits or evicts it."
  },
  {
    "theme": "location",
    "themeLabel": "Location of Roots",
    "title": "Split Across the Line",
    "difficulty": 5,
    "task": "Find all",
    "tags": [
      "root-each-interval",
      "sign-pattern",
      "hybrid",
      "parameter-range"
    ],
    "statement": "Find all real $a$ for which the quadratic\n\\[ x^{2} - (2a+1)x + (a^{2}+a) = 0 \\]\nhas one root in $(0,\\,1)$ and the other root in $(1,\\,2)$.",
    "answer": "$a \\in (0,\\,1)$",
    "trap": "Anchoring only on the outer windows by demanding $f(0)>0$ and $f(2)>0$ (the \"endpoints positive\" reflex) while forgetting the middle condition $f(1)<0$. That weaker pair admits $a^{2}+a>0$ and $a^{2}-3a+2>0$, giving the bloated set $(-\\infty,-1)\\cup(0,1)\\cup(2,\\infty)$. The spurious branches are exactly the configurations where both roots sit on the SAME side of $1$: at $a=-2$ the roots are $-2,-1$ and at $a=3$ the roots are $3,4$. The single sign flip $f(1)<0$ is what forces $1$ to lie strictly between the roots and splits them; dropping it loses the separation.",
    "solutions": [
      {
        "name": "Sign pattern $+,-,+$",
        "steps": [
          "One root in $(0,1)$ and the other in $(1,2)$ means $1$ lies strictly between the two roots while both roots lie in $(0,2)$. For a monic quadratic this is exactly the sign pattern $f(0)>0,\\ f(1)<0,\\ f(2)>0$, where the lone sign change across $x=1$ guarantees a root on each side.",
          "$f(0)=a^{2}+a=a(a+1)>0\\Rightarrow a<-1$ or $a>0$.",
          "$f(1)=1-(2a+1)+(a^{2}+a)=a^{2}-a=a(a-1)<0\\Rightarrow 0<a<1$.",
          "$f(2)=4-2(2a+1)+(a^{2}+a)=a^{2}-3a+2=(a-1)(a-2)>0\\Rightarrow a<1$ or $a>2$.",
          "Intersect all three: $\\{a<-1\\text{ or }a>0\\}\\cap(0,1)\\cap\\{a<1\\text{ or }a>2\\}=(0,1)$.",
          "Hence $\\boxed{a\\in(0,1)}$."
        ]
      },
      {
        "name": "Explicit roots",
        "steps": [
          "The discriminant is $(2a+1)^2-4(a^2+a)=4a^2+4a+1-4a^2-4a=1$, so the roots are $\\dfrac{(2a+1)\\pm1}{2}=a+1$ and $a$.",
          "The roots are always real and a fixed distance $1$ apart, so naming the smaller one $a$ and the larger $a+1$ is unambiguous.",
          "Require the smaller root in $(0,1)$: $0<a<1$. Require the larger root in $(1,2)$: $1<a+1<2$, i.e. $0<a<1$.",
          "Both windows reduce to the SAME condition $0<a<1$; endpoints $a=0$ or $a=1$ put a root exactly on $0,1,$ or $2$ (boundary, excluded).",
          "Therefore $\\boxed{a\\in(0,1)}$."
        ]
      },
      {
        "name": "Separation as a product condition",
        "steps": [
          "Let the roots be $r_1<r_2$. \"$1$ strictly between the roots\" is the single inequality $(r_1-1)(r_2-1)<0$, which by Vieta equals the monic value $f(1)$.",
          "$f(1)=a^{2}-a=a(a-1)<0\\Rightarrow 0<a<1$.",
          "This pins $1$ between the roots; it remains only to keep the lower root above $0$ and the upper below $2$. Since $f(0)=a(a+1)$ and on $0<a<1$ we have $f(0)>0$ with $f$ opening upward, the lower root exceeds $0$; likewise $f(2)=(a-1)(a-2)>0$ on $0<a<1$ keeps the upper root below $2$.",
          "Both auxiliary conditions hold throughout $0<a<1$, so they impose no further restriction.",
          "Hence $\\boxed{a\\in(0,1)}$."
        ]
      }
    ],
    "remark": "Insight: localizing a root in each of two adjacent intervals reduces to reading off a single sign pattern at the shared boundaries $0,1,2$ — and the load-bearing piece is the middle sign $f(1)<0$, the only sign change, which forces $1$ between the roots. Here the discriminant is constant ($=1$), so the roots stay exactly distance $1$ apart at $a$ and $a+1$, sliding the two unit windows together; that rigidity is why the explicit-root method collapses both interval requirements into one inequality."
  },
  {
    "theme": "location",
    "themeLabel": "Location of Roots",
    "title": "A Logarithm Tunes the Twin Windows",
    "difficulty": 5,
    "task": "Find all",
    "tags": [
      "two-window-straddle",
      "logarithmic-coefficient",
      "four-sign-condition",
      "domain-restriction",
      "discriminant-trap",
      "vieta-box"
    ],
    "statement": "For a real parameter $a$, consider the quadratic \\[ f(x)=x^{2}-\\bigl(\\log_{2}a\\bigr)\\,x+8 . \\] Find all values of $a$ for which $f$ has exactly one root in the open interval $(1,2)$ and its other root in the open interval $(4,8)$. (Express the answer as an interval of $a$, not of $\\log_2 a$.)",
    "answer": "\\[ \\boxed{\\,64 < a < 512\\,}\\qquad\\text{equivalently}\\qquad a\\in\\bigl(2^{6},\\,2^{9}\\bigr). \\] The substitution $t=\\log_2 a$ already forces $a>0$; the two-window straddle then pins $t$ to $6<t<9$, both endpoints excluded (at $t=6$ a root sits exactly at $2$, at $t=9$ the roots sit exactly at $1$ and $8$). Exponentiating, $a\\in(2^{6},2^{9})=(64,512)$.",
    "trap": "The coefficient $\\log_2 a$ tempts two fatal shortcuts, both of which silently drop a condition. (1) The Vieta-box reflex: since one root lies in $(1,2)$ and the other in $(4,8)$, the sum $r_1+r_2=\\log_2 a$ must lie in $(1+4,\\,2+8)=(5,10)$ and the product $r_1r_2=8$ must lie in $(1\\cdot4,\\,2\\cdot8)=(4,16)$. The product condition is vacuous ($8$ always lies in $(4,16)$, leaking no information), so the student declares $\\log_2 a\\in(5,10)$, i.e. $a\\in(32,1024)$. This box is only necessary, never sufficient: it even admits $\\log_2 a\\in(5,\\sqrt{32})\\approx(5,5.657)$ where the discriminant $(\\log_2 a)^2-32<0$ and the roots are not even real, and it admits $\\log_2 a\\in(9,10)$ where the roots have escaped to $(<1)$ and $(>8)$. (2) The middle-only reflex: a student who writes only the ``negative between the windows'' conditions $f(2)<0$ and $f(4)<0$ gets $\\log_2 a>6$ with no upper bound, i.e. $a>64$ unbounded above, again because the two outer positivity conditions $f(1)>0$ and $f(8)>0$ (which supply the cap $\\log_2 a<9$) were never written. The correct placement of one root in each of two disjoint windows of an upward parabola demands the FULL four-sign pattern $f(1)>0,\\ f(2)<0,\\ f(4)<0,\\ f(8)>0$ together — dropping any single sign loosens the answer to a strictly wrong superset. (The discriminant need not be imposed separately here: the sign pattern $+,-,-,+$ already forces two real roots by the Intermediate Value Theorem — but only because all four signs are present.)",
    "solutions": [
      {
        "name": "Four-sign placement on an upward parabola (Bolzano)",
        "steps": [
          "Put $t=\\log_2 a$. Because $\\log_2 a$ is defined only for $a>0$ and is a bijection $a\\mapsto t$ from $(0,\\infty)$ onto $\\mathbb{R}$, we may treat $t$ as a free real parameter and recover $a=2^{t}$ at the end. Then $f(x)=x^{2}-t\\,x+8$, an upward parabola ($a_2=1>0$).",
          "For an upward parabola, ``exactly one root in $(1,2)$ and the other in $(4,8)$'' (two disjoint windows, in increasing order) holds iff $f$ is positive at the two outer endpoints and negative at the two inner ones: $f(1)>0,\\ f(2)<0,\\ f(4)<0,\\ f(8)>0$. The sign sequence $+,-,-,+$ forces, by the Intermediate Value Theorem, a sign change in $(1,2)$ and another in $(4,8)$, i.e. one root in each window; since a quadratic has at most two real roots, there is exactly one per window and none elsewhere.",
          "Evaluate: $f(1)=9-t$, $f(2)=12-2t$, $f(4)=24-4t$, $f(8)=72-8t$. The conditions become $9-t>0$, $12-2t<0$, $24-4t<0$, $72-8t>0$, i.e. $t<9$, $t>6$, $t>6$, $t<9$. Intersecting, $6<t<9$.",
          "Translate back: $6<\\log_2 a<9\\iff 2^{6}<a<2^{9}$, giving $\\boxed{64<a<512}$. The endpoints are genuinely open — at $t=6$ a root equals $2$ (on the boundary, not interior) and at $t=9$ the roots equal $1$ and $8$ — so neither endpoint is admitted."
        ]
      },
      {
        "name": "Monotone-root tracking (each root is a monotone function of t)",
        "steps": [
          "With $t=\\log_2 a$ and $f(x)=x^{2}-tx+8$, the discriminant is $t^{2}-32$, so real roots require $|t|>\\sqrt{32}$; since both target windows are positive we need $t>0$, hence $t>\\sqrt{32}$. The roots are $r_{\\mp}(t)=\\dfrac{t\\mp\\sqrt{t^{2}-32}}{2}$.",
          "On $t>\\sqrt{32}$ the smaller root $r_{-}(t)$ is strictly decreasing and the larger root $r_{+}(t)$ is strictly increasing in $t$ (as $t$ grows the roots spread apart about the rising vertex $x=t/2$; equivalently $r_-r_+=8$ is fixed while $r_-+r_+=t$ grows, so $r_-$ falls and $r_+$ rises). Hence each window condition translates to a clean $t$-interval via the endpoint equations.",
          "Smaller root in $(1,2)$: solve $r_{-}(t)=2\\Rightarrow t-\\sqrt{t^2-32}=4\\Rightarrow \\sqrt{t^2-32}=t-4\\Rightarrow t^2-32=t^2-8t+16\\Rightarrow t=6$; and $r_{-}(t)=1\\Rightarrow \\sqrt{t^2-32}=t-2\\Rightarrow t=9$. Since $r_-$ is decreasing, $r_-\\in(1,2)\\iff 6<t<9$.",
          "Larger root in $(4,8)$: solve $r_{+}(t)=4\\Rightarrow \\sqrt{t^2-32}=8-t\\Rightarrow t^2-32=64-16t+t^2\\Rightarrow t=6$; and $r_{+}(t)=8\\Rightarrow \\sqrt{t^2-32}=16-t\\Rightarrow t=9$. Since $r_+$ is increasing, $r_+\\in(4,8)\\iff 6<t<9$. The two windows impose the same interval $6<t<9$ (they are linked through $r_-r_+=8$), so $6<\\log_2a<9$, i.e. $\\boxed{64<a<512}$."
        ]
      },
      {
        "name": "Reduce-by-Vieta, then repair the leaky box",
        "steps": [
          "Set $t=\\log_2 a$ (so $a=2^t$, $a>0$). By Vieta, $r_1+r_2=t$ and $r_1r_2=8$. The necessary box from the windows is $r_1+r_2\\in(5,10)$ and $r_1r_2\\in(4,16)$; the product condition is automatically satisfied ($8\\in(4,16)$) and carries no information, so naively $t\\in(5,10)$. This box is a superset of the truth and must be tightened.",
          "Tighten with reality and placement. Real roots need $t^2-32\\ge0$, i.e. $t\\ge\\sqrt{32}\\approx5.657$, killing the slab $5<t<\\sqrt{32}$ where the box wrongly admits complex roots. Place the smaller root strictly below $2$: $f(2)>0$ would push both roots to one side, so we require $f(2)<0$, i.e. $12-2t<0\\Rightarrow t>6$ (this also already guarantees $t>\\sqrt{32}$).",
          "Cap the larger root strictly below $8$ by $f(8)>0$: $72-8t>0\\Rightarrow t<9$. Finally confirm the in-between endpoints are clear: $f(1)=9-t>0$ holds since $t<9$, and $f(4)=24-4t<0$ holds since $t>6$ — so no root strays into $(2,4)$ and the smaller root stays above $1$. All constraints collapse to $6<t<9$.",
          "Thus the leaky Vieta box $(5,10)$ shrinks to the true interval $(6,9)$ in $t$. Exponentiating, $a\\in(2^6,2^9)=\\boxed{(64,512)}$, matching the direct sign computation."
        ]
      }
    ],
    "remark": "Insight: placing one root in each of two separated windows of $f(x)=x^2-tx+8$ is governed by the joint sign pattern $f(1)>0,f(2)<0,f(4)<0,f(8)>0$ — four conditions that must fire as a single gestalt, not a menu to pick from. The transcendental coefficient $t=\\log_2 a$ does two jobs at once: it silently restricts the domain ($a>0$, with $t$ then sweeping all of $\\mathbb{R}$ as $a$ sweeps $(0,\\infty)$, so the final answer must be exponentiated back to an $a$-interval), and it makes the casework honest because $t$ is genuinely a free real. The deep lesson is that Vieta's sum/product ``box'' is only a necessary envelope: with the product fixed at $8$ it leaks badly, even admitting parameters where the roots are not real. The discriminant is not a fourth thing to bolt on — it is automatically guaranteed by the four-sign pattern itself, which is precisely why a student who keeps all four signs never needs $D>0$ separately, while a student who drops a sign loses both the cap and the reality of the roots in one stroke. Endpoints are open because a root landing exactly on a window boundary is not inside the open interval: at $t=6$ a root equals $2$, at $t=9$ the roots equal $1$ and $8$, so $a=64$ and $a=512$ are excluded and the answer is the open interval $(64,512)$."
  },
  {
    "theme": "commonroots",
    "themeLabel": "Common Roots",
    "title": "The Swap That Eats Its Own Coefficients",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "swap-symmetry",
      "shared-root",
      "power-sum-constraint",
      "resultant",
      "degenerate-coincidence",
      "vieta"
    ],
    "statement": "Let $p$ and $q$ be real numbers, $p\\neq q$, such that the two quadratics \\[ f(x)=x^{2}+px+q \\qquad\\text{and}\\qquad g(x)=x^{2}+qx+p \\] possess a common root. \\\\ (a) Prove that the shared root must equal $1$, that consequently the other (non-shared) root of $f$ is exactly $q$ and the other root of $g$ is exactly $p$, and that $p+q=-1$. \\\\ (b) Now impose in addition the power-sum constraint $p^{3}+q^{3}=-7$. Determine all ordered pairs $(p,q)$, and verify that $p$ and $q$ are precisely the two roots of the quadratic $t^{2}+t-2=0$. \\\\ (c) Explain carefully why the hypothesis $p\\neq q$ cannot be dropped: exhibit the real value $p=q$ that also satisfies $p^{3}+q^{3}=-7$ and show that for it every conclusion of part (a) fails.",
    "answer": "\\[ \\boxed{\\,(p,q)\\in\\{(1,-2),\\,(-2,1)\\}\\,}\\] In part (a), subtracting the two quadratics gives $f(x)-g(x)=(p-q)(x-1)$; since $p\\neq q$ the only possible common root is $x=1$. Plugging $x=1$ into $f$ forces $1+p+q=0$, i.e. $p+q=-1$. The product of $f$'s roots is $q$ and one root is $1$, so the other root is $q$; likewise the other root of $g$ is $p$. In part (b), $p^{3}+q^{3}=(p+q)^{3}-3pq(p+q)=-1+3pq=-7$ gives $pq=-2$, so $p,q$ are the roots of $t^{2}-(p+q)t+pq=t^{2}+t-2=(t-1)(t+2)=0$, namely $\\{1,-2\\}$. Both orderings are valid by the $f\\leftrightarrow g$ swap symmetry. In part (c), $p=q$ collapses $f\\equiv g$, so the pair shares both roots automatically with no forced value $1$; the equation $2p^{3}=-7$ yields the real number $p=q=-\\sqrt[3]{7/2}\\approx-1.5183$, for which $p+q=-2\\sqrt[3]{7/2}\\neq-1$, $x=1$ is not a root, and $\\{p,q\\}$ is not $\\{1,-2\\}$ — every claim of (a) breaks, which is exactly why $p\\neq q$ is indispensable.",
    "trap": "The seductive but fatal move is to encode ``common root'' as a single vanishing resultant and stop there. The resultant of $f$ and $g$ factors as \\[ \\operatorname{Res}(f,g)=(p-q)^{2}\\,(p+q+1), \\] so $\\operatorname{Res}=0$ is satisfied in TWO genuinely different ways: by $p+q+1=0$ (two distinct quadratics meeting in exactly one point — the intended configuration) and by $p=q$ (the two quadratics becoming identical, sharing both roots vacuously). A student who simply writes ``common root $\\Rightarrow$ resultant $=0$'' and then hunts for pairs satisfying $p^{3}+q^{3}=-7$ will silently sweep up the degenerate solution $p=q=-\\sqrt[3]{7/2}$, for which the supposed forced root $x=1$ is false, $p+q=-1$ is false, and the elegant `$t^{2}+t-2$' conclusion is false — yet the resultant honestly vanishes (through its $(p-q)^{2}$ factor). The conceptual error is treating ``the quadratics share a root'' as equivalent to ``$\\operatorname{Res}=0$'' without separating the simple-coincidence branch from the total-coincidence branch. The shared root is forced to be $1$ only on the $p\\neq q$ branch, because the deduction $f-g=(p-q)(x-1)=0\\Rightarrow x=1$ requires dividing by $p-q$. Drop the strict inequality and the cancellation $(p-q)$ becomes $0/0$: the line $f-g$ degenerates from a genuine linear equation pinning $x=1$ into the empty identity $0=0$, which pins nothing. The trap is therefore a hidden degenerate scenario masquerading as a legitimate root of the same algebraic condition.",
    "solutions": [
      {
        "name": "Subtract, cancel, then close with the power sum",
        "steps": [
          "Subtract the quadratics: $f(x)-g(x)=(px+q)-(qx+p)=(p-q)x-(p-q)=(p-q)(x-1)$. A common root $x=r$ satisfies $f(r)=g(r)=0$, hence $f(r)-g(r)=0$, i.e. $(p-q)(r-1)=0$. Because $p\\neq q$ we may cancel the nonzero factor $p-q$, forcing $r=1$. (This cancellation is the whole game: it is legitimate precisely because $p\\neq q$.)",
          "Impose that $1$ is a root of $f$: $f(1)=1+p+q=0$, so $p+q=-1$. By Vieta on $f$, the product of its roots equals $q$; since one root is $1$, the other root equals $q$. Symmetrically the other root of $g$ equals $p$. This proves part (a).",
          "Now use the Newton/power-sum identity $p^{3}+q^{3}=(p+q)^{3}-3pq(p+q)$. With $p+q=-1$ this is $(-1)^{3}-3pq(-1)=-1+3pq$. Setting it equal to $-7$ gives $-1+3pq=-7$, so $pq=-2$.",
          "Therefore $p$ and $q$ are the two roots of $t^{2}-(p+q)t+pq=t^{2}+t-2=(t-1)(t+2)=0$, i.e. $\\{p,q\\}=\\{1,-2\\}$. The discriminant $1-4(-2)=9>0$ confirms $p\\neq q$, so the branch hypothesis is genuinely met. Both orderings survive the original $f\\leftrightarrow g$ symmetry, giving $\\boxed{(p,q)\\in\\{(1,-2),(-2,1)\\}}$."
        ]
      },
      {
        "name": "Self-referential Vieta: the non-shared roots ARE the coefficients",
        "steps": [
          "Suppose the common root is $r$, and let $a$ be the other root of $f$, $b$ the other root of $g$. Vieta on $f=x^{2}+px+q$: $r+a=-p$ and $ra=q$. Vieta on $g=x^{2}+qx+p$: $r+b=-q$ and $rb=p$. Add the two product equations: $ra+rb=q+p$, i.e. $r(a+b)=p+q$.",
          "Add the two sum equations: $2r+a+b=-(p+q)$. Subtract the two sum equations: $a-b=-(p-q)=q-p$, which is nonzero since $p\\neq q$ — already a hint the two quadratics are truly distinct. From the product equations, $ra=q$ and $rb=p$ say the non-shared roots satisfy $a=q/r,\\ b=p/r$.",
          "Eliminate to find $r$. Substitute $a=q/r$ into $r+a=-p$: $r+q/r=-p\\Rightarrow r^{2}+pr+q=0$, which is just $f(r)=0$ — consistent. The decisive relation comes from $r(a+b)=p+q$ together with $2r+(a+b)=-(p+q)$: writing $S=a+b$ gives $rS=p+q$ and $2r+S=-(p+q)=-rS$, so $S(1+r)=-2r$, hence $S=-\\dfrac{2r}{1+r}$. Feeding back $rS=p+q$ yields $p+q=-\\dfrac{2r^{2}}{1+r}$. Independently, $f(r)-g(r)=(p-q)(r-1)=0$ with $p\\neq q$ forces $r=1$; then $p+q=-\\dfrac{2}{2}=-1$, recovering part (a), and indeed $a=q/1=q$, $b=p/1=p$: the other roots literally equal the coefficients.",
          "With $p+q=-1$ fixed, impose $p^{3}+q^{3}=-7$. Since $p^{3}+q^{3}=(p+q)(p^{2}-pq+q^{2})=(p+q)\\big((p+q)^{2}-3pq\\big)=(-1)(1-3pq)=-1+3pq$, we get $pq=-2$. Hence $p,q$ solve $t^{2}+t-2=0$, giving $\\boxed{(p,q)\\in\\{(1,-2),(-2,1)\\}}$."
        ]
      },
      {
        "name": "Resultant factorisation with the degeneracy stripped off",
        "steps": [
          "Two monic quadratics share a root iff their resultant vanishes. Compute $\\operatorname{Res}_x(f,g)$ for $f=x^{2}+px+q,\\ g=x^{2}+qx+p$. Expanding the $4\\times4$ Sylvester determinant (or eliminating $x^{2}$ between $f$ and $g$) gives $\\operatorname{Res}_x(f,g)=(p-q)^{2}(p+q+1)$.",
          "Read off the two branches. The factor $(p-q)^{2}$ vanishes exactly when $p=q$, i.e. $f\\equiv g$ — the quadratics coincide and share both roots trivially; this is the degenerate branch the problem excludes by hypothesis $p\\neq q$. On the admissible branch $p\\neq q$, vanishing of the resultant is equivalent to the surviving factor $p+q+1=0$, i.e. $p+q=-1$. (Substituting $p+q=-1$ back, the shared root is the common solution $x=1$ of $f$ and $g$, matching part (a).)",
          "Pair $p+q=-1$ with the constraint. From $p^{3}+q^{3}=-1+3pq=-7$ we obtain $pq=-2$. Thus $\\{p,q\\}$ are the roots of $t^{2}+t-2=0$, namely $1$ and $-2$, giving $\\boxed{(p,q)\\in\\{(1,-2),(-2,1)\\}}$.",
          "Part (c) is now transparent from the same factorisation: the degenerate branch $p=q$ also makes $\\operatorname{Res}=0$, and forcing the SAME power-sum $2p^{3}=-7$ yields the real root $p=q=-\\sqrt[3]{7/2}\\approx-1.5183$. There $p+q=-2\\sqrt[3]{7/2}\\approx-3.037\\neq-1$, $f(1)=1+2p\\neq0$ so $x=1$ is not a root, and $\\{p,q\\}\\neq\\{1,-2\\}$ — confirming that only the $(p-q)^{2}$ factor, not the genuine common-root condition $p+q+1=0$, is responsible, and hence that $p\\neq q$ is indispensable."
        ]
      }
    ],
    "remark": "Insight: the swap $f(x)=x^2+px+q\\mapsto g(x)=x^2+qx+p$ is engineered so that the very act of looking for a common root turns the coefficients into roots — the other root of each quadratic is literally the OTHER quadratic's leading-coefficient partner ($q$ and $p$), and the shared root is pinned to $1$. That self-reference is what elevates the problem above 'plug into the cross-multiplication condition': you cannot finish by a single subtraction, because the power-sum $p^3+q^3=-7$ is a SECOND symmetric constraint that must be fused with $p+q=-1$ via Newton's identity $p^3+q^3=(p+q)^3-3pq(p+q)$ to extract $pq=-2$ and rebuild the quadratic $t^2+t-2$ whose roots are $p,q$. The deep trap is structural: the common-root condition is algebraically the resultant $(p-q)^2(p+q+1)=0$, and the squared factor $(p-q)^2$ secretly encodes the degenerate 'identical quadratics' configuration. That degenerate branch even admits its own real solution $p=q=-\\sqrt[3]{7/2}$ of the power-sum equation, so a solver who never separated 'one shared root' from 'totally coincident' would report a spurious answer for which the shared root is not $1$ and $p+q\\neq-1$. The hypothesis $p\\neq q$ is therefore not decoration — it is the precise act of dividing by $p-q$ that converts the empty identity $0=0$ into the equation $x=1$, and it is what makes every elegant conclusion true."
  },
  {
    "theme": "commonroots",
    "themeLabel": "Common Roots",
    "title": "The Shared Root Must Be the Tall One",
    "difficulty": 4,
    "task": "Find all",
    "tags": [
      "common-root",
      "parametric-quadratic",
      "root-ordering",
      "case-split",
      "resultant",
      "selection-condition"
    ],
    "statement": "Let $k$ be a real parameter and consider the two quadratics \\[ P(x)=x^{2}-(k+1)x+k, \\qquad Q(x)=x^{2}-6x+(4k-3). \\] Find all values of $k$ for which $P$ and $Q$ have exactly one common root and that common root is the larger of the two roots of $P$.",
    "answer": "\\[ \\boxed{k=3}. \\] At $k=3$ we have $P(x)=(x-1)(x-3)$ with roots $\\{1,3\\}$ and $Q(x)=(x-3)^{2}$, so the unique common root is $x=3$, which is precisely the larger root of $P$. The two rival parameter values $k=-1$ and $k=2$ that also produce a common root are rejected: in each of those the shared root turns out to be the smaller root of $P$.",
    "trap": "The mechanical solver notices that $P(x)=x^{2}-(k+1)x+k=(x-1)(x-k)$ has roots $1$ and $k$, substitutes both into $Q$, and harvests every $k$ that produces a common root: $Q(1)=0\\Rightarrow 4(k-2)=0\\Rightarrow k=2$, and $Q(k)=0\\Rightarrow k^{2}-2k-3=(k+1)(k-3)=0\\Rightarrow k\\in\\{-1,3\\}$. (The resultant $\\operatorname{Res}_x(P,Q)=4(k+1)(k-2)(k-3)$ confirms exactly these three.) The trap is to report the full list $k\\in\\{-1,2,3\\}$, or to grab the wrong one, because the selection clause ``the common root is the LARGER root of $P$'' is not a verification you can skip. The larger root of $P$ is $\\max(1,k)$, which equals $k$ only when $k>1$ and equals $1$ when $k<1$. So you must match the shared root to the correct slot: the branch $Q(k)=0$ makes $k$ itself the shared root, but $k$ is the larger root only if $k>1$ — this kills $k=-1$ (there the shared root $-1=k$ is the smaller root, since $1>-1$) and keeps $k=3$. The branch $Q(1)=0$ makes $1$ the shared root, but at the resulting $k=2$ the larger root of $P$ is $2$, not $1$, so the shared root $1$ is the smaller one and $k=2$ is rejected. Blind cross-multiplication or blind testing finds the common-root condition but silently ignores which root is shared; the order condition is the entire problem. Only $k=3$ survives.",
    "solutions": [
      {
        "name": "Factor P, test its two known roots, then enforce the ordering",
        "steps": [
          "Factor the first quadratic: $P(x)=x^{2}-(k+1)x+k=(x-1)(x-k)$, so the roots of $P$ are exactly $1$ and $k$, for every $k$. A common root of $P$ and $Q$ must be one of these two numbers, so test each in $Q(x)=x^{2}-6x+(4k-3)$.",
          "Shared root $=1$: $Q(1)=1-6+4k-3=4k-8=0\\Rightarrow k=2$. Shared root $=k$: $Q(k)=k^{2}-6k+4k-3=k^{2}-2k-3=(k+1)(k-3)=0\\Rightarrow k=-1$ or $k=3$. Hence a common root exists exactly for $k\\in\\{-1,2,3\\}$.",
          "Now apply the selection clause. The larger root of $P$ is $\\max(1,k)$: it is $k$ precisely when $k>1$, and it is $1$ when $k<1$. For the shared root to be the larger root we need the shared value to occupy the larger slot. For $k=2$ the shared root is $1$ while the larger root is $2$ — the shared root is the smaller one, reject. For $k=-1$ the shared root is $k=-1$ while the larger root is $1$ — again the smaller one, reject. For $k=3$ the shared root is $k=3$, and since $3>1$ this $k$ is indeed the larger root — accept.",
          "Check the ``exactly one common root'' clause at the survivor: at $k=3$, $P=(x-1)(x-3)$ and $Q=(x-3)^{2}$ share only $x=3$ (the value $1$ is not a root of $Q$ since $Q(1)=-2\\neq0$), so there is exactly one common root and it is the larger root of $P$. Therefore $\\boxed{k=3}$."
        ]
      },
      {
        "name": "Resultant for the common-root set, ordering to prune",
        "steps": [
          "Two quadratics share a root iff their resultant in $x$ vanishes. Compute $\\operatorname{Res}_x(P,Q)$ for $P=x^{2}-(k+1)x+k$ and $Q=x^{2}-6x+(4k-3)$; expanding the standard $2\\times2$ common-root determinant (cross-multiplication) gives $\\operatorname{Res}_x(P,Q)=4(k+1)(k-2)(k-3)$. So the parameter values admitting a common root are $k\\in\\{-1,2,3\\}$ — the same three the substitution method finds, now obtained without first factoring $P$.",
          "For each candidate, locate the actual shared root by subtracting: any common root $r$ satisfies $P(r)-Q(r)=0$, and since the $x^{2}$ terms cancel this is linear, $(5-k)\\,x+(3-3k)=0\\Rightarrow r=\\dfrac{3(1-k)}{k-5}$ (well-defined for $k\\neq5$). This gives $r(-1)=-1,\\ r(2)=1,\\ r(3)=3$.",
          "Compare each shared root with the roots $1$ and $k$ of $P$ to find the larger root $\\max(1,k)$. At $k=-1$: $\\max(1,-1)=1\\neq -1=r$, reject. At $k=2$: $\\max(1,2)=2\\neq 1=r$, reject. At $k=3$: $\\max(1,3)=3=r$, accept.",
          "Confirm uniqueness of the common root at $k=3$: $P=(x-1)(x-3)$, $Q=(x-3)^{2}$ are not proportional, so they cannot share both roots; they share only $x=3$. Hence the unique value is $\\boxed{k=3}$."
        ]
      },
      {
        "name": "Force the larger root to be shared, then back-solve",
        "steps": [
          "Translate the selection clause into a single equation. The larger root of $P=(x-1)(x-k)$ is $L=\\max(1,k)$. We want $L$ to be a root of $Q$, so split on the order of the roots. Case A ($k>1$, larger root is $k$): require $Q(k)=0$, i.e. $k^{2}-2k-3=(k+1)(k-3)=0$, giving $k=-1$ or $k=3$; only $k=3$ obeys $k>1$.",
          "Case B ($k<1$, larger root is $1$): require $Q(1)=0$, i.e. $4k-8=0\\Rightarrow k=2$; but $k=2$ violates $k<1$, so this case is empty. Case C ($k=1$, roots coincide): $P=(x-1)^{2}$ has the double root $1$ as both ``larger'' and ``smaller'', and $Q(1)=4(1)-8=-4\\neq0$, so $1$ is not a common root — empty.",
          "Thus the order condition itself forces $k>1$ and selects $k=3$ as the only consistent value; the rival roots $k=-1$ (wrong sign of $k-1$) and $k=2$ (came from the wrong slot) never satisfy their own case hypothesis.",
          "Verify directly: $k=3$ gives $P=(x-1)(x-3)$, $Q=(x-3)^{2}$, common root $3=$ larger root of $P$, and it is the only common root. Hence $\\boxed{k=3}$."
        ]
      }
    ],
    "remark": "Insight: a common-root condition and a root-ordering condition are two different demands, and the second is not optional polish — it is the discriminator. Factoring $P=(x-1)(x-k)$ exposes that the parameter $k$ is literally one of $P$'s roots, so ``the shared root is the larger root of $P$'' becomes a statement about $\\max(1,k)$, whose value flips at the threshold $k=1$. The resultant (or blind substitution) honestly reports all three parameter values $\\{-1,2,3\\}$ where some root is shared, but it is blind to which root is shared; the ordering clause supplies that missing information and reduces the set to the single value $k=3$. The cleanest way to never overcount is to run the case-split forward — assume $k>1$ (so $k$ is the larger root) and demand $Q(k)=0$, then assume $k<1$ (so $1$ is the larger root) and demand $Q(1)=0$ — and keep only the solutions that satisfy their own case hypothesis. The rejected value $k=2$ is the most instructive: it is a perfectly genuine common-root solution, yet there the shared root $1$ sits in the smaller slot, so it fails not on existence but on placement. A top ranker treats ``which root'' as a first-class constraint, not an afterthought to be confirmed by plugging in."
  },
  {
    "theme": "commonroots",
    "themeLabel": "Common Roots",
    "title": "The Determinant Confesses, but Reads Its Own Squared Factor Wrong",
    "difficulty": 5,
    "task": "Prove and determine",
    "tags": [
      "sylvester-resultant",
      "common-root",
      "eliminant-determinant",
      "double-factor",
      "identical-equation-locus",
      "real-vs-complex"
    ],
    "statement": "Consider two monic quadratics $u(x)=x^{2}+b_{1}x+c_{1}$ and $v(x)=x^{2}+b_{2}x+c_{2}$ with real coefficients. \\\\ (a) Prove from first principles that $u$ and $v$ possess a common root if and only if the $4\\times4$ Sylvester eliminant \\[ \\Delta=\\begin{vmatrix} 1 & b_{1} & c_{1} & 0\\\\ 0 & 1 & b_{1} & c_{1}\\\\ 1 & b_{2} & c_{2} & 0\\\\ 0 & 1 & b_{2} & c_{2} \\end{vmatrix}=0, \\] and show that $\\Delta$ equals the classical cross-multiplication expression $(c_{1}-c_{2})^{2}-(b_{1}c_{2}-b_{2}c_{1})(b_{2}-b_{1})$. \\\\ (b) Apply this to the pair \\[ P(x)=x^{2}+ax+1, \\qquad Q(x)=x^{2}+x+a \\qquad(a\\in\\mathbb{R}), \\] showing that $\\Delta$ collapses to the resultant $\\operatorname{Res}_x(P,Q)=(a-1)^{2}(a+2)$. \\\\ (c) Determine every real value of $a$ for which $P$ and $Q$ have a common real root, and explain precisely why the squared factor $(a-1)^{2}$ does not contribute such a value — interpret $a=1$ geometrically as the ``identical-equation locus'' and say why its multiplicity-two vanishing of $\\Delta$ is honest yet irrelevant to the real-root question.",
    "answer": "\\[ \\boxed{a=-2} \\] (a) Write the common root as the statement that the linear system in the powers $(x^{3},x^{2},x,1)$ obtained from $x\\,u=0,\\ u=0,\\ x\\,v=0,\\ v=0$ has a nonzero solution; its coefficient matrix is exactly the Sylvester matrix above, so a common root exists iff $\\Delta=0$. Expanding the determinant gives $\\Delta=(c_{1}-c_{2})^{2}-(b_{1}c_{2}-b_{2}c_{1})(b_{2}-b_{1})$. (b) Putting $b_{1}=a,c_{1}=1,b_{2}=1,c_{2}=a$ yields $\\Delta=(1-a)^{2}-(a^{2}-1)(1-a)=(a-1)^{2}+(a-1)^{2}(a+1)=(a-1)^{2}(a+2)$, matching $\\operatorname{Res}_x(P,Q)=a^{3}-3a+2=(a-1)^{2}(a+2)$. (c) Subtracting, $P-Q=(a-1)(x-1)$, so for $a\\neq1$ any common root must be $x=1$, and $P(1)=a+2=0\\Rightarrow a=-2$; there $P=(x-1)^{2}$, $Q=(x-1)(x+2)$ share the real root $1$. The other zero $a=1$ makes $P\\equiv Q\\equiv x^{2}+x+1$, the identical equation, whose roots are the non-real $-\\tfrac12\\pm\\tfrac{\\sqrt3}{2}i$. So $a=1$ is a perfectly genuine zero of $\\Delta$ — it is a double zero precisely because the two rows of the eliminant for $u$ become identical to those for $v$ (a two-fold rank collapse) — yet it contributes no real common root. Hence the real-root answer is the single value $a=-2$.",
    "trap": "The fatal move is to treat ``$\\Delta=0$'' as synonymous with ``a (real) common root exists'' and then read the factorisation $(a-1)^{2}(a+2)=0$ as the three solutions $a=1,\\,1,\\,-2$ (or simply $a\\in\\{1,-2\\}$), reporting $a=1$ as a valid answer. Two distinct misconceptions feed this. First, the eliminant theorem is a statement over $\\mathbb{C}$: $\\Delta=0$ guarantees a common root in $\\mathbb{C}$, not in $\\mathbb{R}$. At $a=1$ the two quadratics coincide as the single equation $x^{2}+x+1=0$ (discriminant $1-4=-3<0$), so they share both roots — but those roots are the conjugate pair $-\\tfrac12\\pm\\tfrac{\\sqrt3}{2}i$, and the problem asks for a common real root. The student who never checks reality of the shared root imports a spurious value. Second, the multiplicity is misread: $(a-1)^{2}$ is a double factor not by accident but because $a=1$ is the identical-equation locus — there $b_{1}=b_{2}$ and $c_{1}=c_{2}$ simultaneously, so rows $1,2$ of the Sylvester matrix become equal to rows $3,4$ and the rank drops by two, not one. A double rank-collapse is the determinant's signature for ``the two polynomials are proportional'' (here, equal), i.e. they share all of their roots, whereas the simple factor $(a+2)$ is the signature for ``exactly one shared root, the quadratics otherwise distinct''. Confusing ``shares both roots'' with ``shares a real root'' is the conceptual error; the squared factor is honestly telling you the quadratics merged, not that a new real solution appeared. Only $a=-2$, the simple root of $\\Delta$, delivers a genuine real common root.",
    "solutions": [
      {
        "name": "Eliminant from first principles, then specialise and split off the squared factor",
        "steps": [
          "Suppose $r$ is a common root of $u(x)=x^{2}+b_{1}x+c_{1}$ and $v(x)=x^{2}+b_{2}x+c_{2}$. Then $r$ satisfies the four equations $r\\,u(r)=0,\\ u(r)=0,\\ r\\,v(r)=0,\\ v(r)=0$, i.e. the vector $(r^{3},r^{2},r,1)^{\\!\\top}\\neq0$ lies in the kernel of the matrix whose rows are the coefficients of $x\\,u,\\ u,\\ x\\,v,\\ v$ in the basis $(x^{3},x^{2},x,1)$. That matrix is exactly $\\begin{pmatrix}1&b_{1}&c_{1}&0\\\\0&1&b_{1}&c_{1}\\\\1&b_{2}&c_{2}&0\\\\0&1&b_{2}&c_{2}\\end{pmatrix}$. A nonzero kernel vector exists iff its determinant $\\Delta$ vanishes; conversely if $\\Delta=0$ the (complex) kernel vector $(r^{3},r^{2},r,1)$ recovers a common root $r$. Hence $u,v$ share a root $\\iff\\Delta=0$. Expanding the determinant gives the closed form $\\Delta=(c_{1}-c_{2})^{2}-(b_{1}c_{2}-b_{2}c_{1})(b_{2}-b_{1})$, the familiar cross-multiplication condition for monic quadratics.",
          "Specialise to $P=x^{2}+ax+1$, $Q=x^{2}+x+a$: take $b_{1}=a,\\,c_{1}=1,\\,b_{2}=1,\\,c_{2}=a$. Then $(c_{1}-c_{2})^{2}=(1-a)^{2}$ and $(b_{1}c_{2}-b_{2}c_{1})(b_{2}-b_{1})=(a\\cdot a-1\\cdot1)(1-a)=(a^{2}-1)(1-a)=-(a-1)^{2}(a+1)$. Therefore $\\Delta=(a-1)^{2}+(a-1)^{2}(a+1)=(a-1)^{2}(a+2)$, which equals $\\operatorname{Res}_x(P,Q)=a^{3}-3a+2$.",
          "Read the two factors. The simple factor $(a+2)$: set $a=-2$. Then $P=x^{2}-2x+1=(x-1)^{2}$ and $Q=x^{2}+x-2=(x-1)(x+2)$ are distinct quadratics sharing exactly the real root $x=1$. The double factor $(a-1)^{2}$: set $a=1$. Then $b_{1}=b_{2}=1$ and $c_{1}=c_{2}=1$, so $P\\equiv Q\\equiv x^{2}+x+1$ — the two rows of the eliminant belonging to $u$ become identical to those belonging to $v$, forcing a rank drop of two; this is the determinant's signature that the quadratics are proportional, hence share all roots.",
          "Apply the reality filter demanded by part (c). The shared roots at $a=1$ are the roots of $x^{2}+x+1$, whose discriminant is $-3<0$: they are $-\\tfrac12\\pm\\tfrac{\\sqrt3}{2}i$, not real. So although $\\Delta(1)=0$ honestly (with multiplicity two), $a=1$ yields no real common root. Only $a=-2$ does. Hence the set of real values producing a common real root is $\\boxed{\\{a=-2\\}}$."
        ]
      },
      {
        "name": "Subtract to linearise the eliminant; reality decides the squared factor",
        "steps": [
          "Instead of expanding the $4\\times4$ determinant blindly, perform the row operation that subtracts the $v$-rows from the $u$-rows: the bottom two rows become $\\big(0,\\,b_{1}-b_{2},\\,c_{1}-c_{2},\\,0\\big)$ and $\\big(0,\\,0,\\,b_{1}-b_{2},\\,c_{1}-c_{2}\\big)$, i.e. the coefficient rows of $x\\,(u-v)$ and $(u-v)$ where $u-v=(b_{1}-b_{2})x+(c_{1}-c_{2})$ is linear. Geometrically: a common root of $u$ and $v$ is a common root of $u$ and the line $u-v$. For our pair, $P-Q=(a-1)x+(1-a)=(a-1)(x-1)$.",
          "Case $a\\neq1$: the line $P-Q=(a-1)(x-1)$ is genuinely linear with the single root $x=1$, so the only candidate common root is $x=1$. Impose $P(1)=1+a+1=a+2=0$, giving $a=-2$. Check: at $a=-2$, $P=(x-1)^{2}$ and $Q=(x-1)(x+2)$ indeed meet at the real root $x=1$, and only there (they are not proportional, so cannot share two roots).",
          "Case $a=1$: now $P-Q\\equiv0$, the line degenerates to the empty identity $0=0$ and pins no value of $x$ — exactly the moment when $P$ and $Q$ become the same quadratic $x^{2}+x+1$. The eliminant's two extra rows collapse, producing the double factor $(a-1)^{2}$ in $\\Delta$. Whether this gives a usable answer depends entirely on the roots of $x^{2}+x+1$.",
          "Those roots have discriminant $1-4=-3<0$, hence are the non-real pair $-\\tfrac12\\pm\\tfrac{\\sqrt3}{2}i$. So the degenerate (identical-equation) case $a=1$ contributes a complex common root but no real one. Combining the cases, the unique real value with a common real root is $\\boxed{a=-2}$, the shared real root being $x=1$."
        ]
      },
      {
        "name": "Resultant as a cubic in $a$; multiplicity tracks the rank drop, sign of discriminant tracks reality",
        "steps": [
          "Eliminate $x$ between $P$ and $Q$ directly: from $P=0$, $x^{2}=-ax-1$; substitute into $Q=x^{2}+x+a=0$ to get $(-ax-1)+x+a=(1-a)x+(a-1)=(1-a)(x-1)=0$. (This is the same content as $\\Delta=0$, since the resultant equals the Sylvester determinant.) The resultant, as a polynomial in $a$, is $\\operatorname{Res}_x(P,Q)=a^{3}-3a+2$. Factor: $a=1$ is a root, and synthetic division gives $a^{3}-3a+2=(a-1)(a^{2}+a-2)=(a-1)(a-1)(a+2)=(a-1)^{2}(a+2)$.",
          "Distinguish the two roots by multiplicity. Differentiate: $\\frac{d}{da}\\operatorname{Res}=3a^{2}-3$, which is $0$ at $a=1$ but $9\\neq0$ at $a=-2$. So $a=1$ is a double root of the resultant while $a=-2$ is simple. The double root is the signature of total coincidence: at $a=1$ the matrix $\\begin{pmatrix}1&a&1&0\\\\0&1&a&1\\\\1&1&a&0\\\\0&1&1&a\\end{pmatrix}$ has rank $2$ (the $u$-rows equal the $v$-rows), a rank deficiency of two; at $a=-2$ it has rank $3$, deficiency one, the signature of exactly one shared root.",
          "Now test reality root-by-root. At $a=-2$: $P=(x-1)^{2}$, $Q=(x-1)(x+2)$, common root $x=1\\in\\mathbb{R}$ — accept. At $a=1$: $P=Q=x^{2}+x+1$ with discriminant $-3<0$, so both (shared) roots are non-real — the resultant correctly reports they coincide over $\\mathbb{C}$, but there is no real common root, so $a=1$ is rejected for the real-root question.",
          "Therefore the cubic $a^{3}-3a+2$ encodes everything: the simple factor $(a+2)$ is the lone real-common-root locus, while the squared factor $(a-1)^{2}$ is the identical-equation locus whose shared roots happen to be complex. The answer to (c) is the single value $\\boxed{a=-2}$."
        ]
      }
    ],
    "remark": "Insight: the resultant of two quadratics is a determinant whose vanishing certifies a shared root over $\\mathbb{C}$, and whose order of vanishing certifies how many roots are shared and whether the polynomials have merged. Here the elegant identity $\\operatorname{Res}_x(x^{2}+ax+1,\\ x^{2}+x+a)=(a-1)^{2}(a+2)$ is not a lucky factorisation: the $\\mathbb{Z}_2$ symmetry that swaps the roles $1\\leftrightarrow a$ (it sends $P\\leftrightarrow Q$) forces the resultant to be symmetric in a way that splits off the diagonal locus $a=1$ where the two quadratics fuse into one. That fusion is exactly why the factor is squared: at $a=1$ both Sylvester row-pairs coincide, the rank drops by two, and the determinant has a double zero — the algebraic fingerprint of `proportional polynomials, all roots shared'. The trap that catches strong students is to stop at $\\Delta=0$ and announce $a\\in\\{1,-2\\}$, because the eliminant theorem lives over $\\mathbb{C}$ while the problem lives over $\\mathbb{R}$: at $a=1$ the merged equation $x^{2}+x+1=0$ has negative discriminant, so the `shared roots' are a non-real conjugate pair and contribute nothing to a real-root count. The lesson for a top ranker is to read a vanishing resultant in three layers — does it vanish (common root in $\\mathbb{C}$), with what multiplicity (one shared root vs. proportional polynomials), and are the shared roots real (the field the question actually asks about). Only the simple factor $(a+2)$ survives all three; the squared factor is an honest confession of coincidence that is simply irrelevant to the real question."
  },
  {
    "theme": "commonroots",
    "themeLabel": "Common Roots",
    "title": "One Root, Two Roots, or None",
    "difficulty": 5,
    "task": "Classify",
    "tags": [
      "common root",
      "classification",
      "parameter",
      "both roots common",
      "identical equations"
    ],
    "statement": "For each real value of $m$, classify the pair\n\\[2x^2 + mx + 3 = 0 \\qquad\\text{and}\\qquad 2x^2 + 3x + m = 0\\]\naccording to how many roots they share (none, exactly one, or both). Give every $m$ for which a root is shared and describe the sharing precisely.",
    "answer": "$m = -5$: exactly ONE common root, $x = 1$. $m = 3$: the equations are identical, so BOTH roots are common. For all other real $m$: no common root.",
    "trap": "After subtracting and getting $(m - 3)(x - 1) = 0$, concluding $x = 1$ unconditionally. When $m = 3$ the factor $m - 3$ vanishes, so the subtraction gives $0 = 0$ and tells you nothing — that is exactly the case where the two equations coincide and both roots are shared. Dividing by $m - 3$ silently discards it.",
    "solutions": [
      {
        "name": "Subtract, then handle the degenerate case",
        "steps": [
          "Subtract: $(m - 3)x + (3 - m) = 0$, i.e. $(m - 3)(x - 1) = 0$.",
          "If $m \\neq 3$: the shared root must be $x = 1$; substituting into $2x^2 + mx + 3 = 0$ gives $2 + m + 3 = 0 \\Rightarrow m = -5$. Then both equations factor as $2(x-1)(x-\\tfrac32)$ and $2(x-1)(x+\\tfrac52)$ — exactly one common root $x = 1$.",
          "If $m = 3$: both equations are $2x^2 + 3x + 3 = 0$, identical, so both (complex) roots coincide. All other $m$ share nothing."
        ]
      },
      {
        "name": "Proportionality test for the full-overlap case",
        "steps": [
          "For both roots common the quadratics must be proportional; same leading coefficient $2$ forces them identical, which needs $m = 3$ (then $b = c = 3$).",
          "For exactly one common root, set the shared root $r$: subtracting gives $r = 1$ (valid only when $m \\neq 3$), and $2 + m + 3 = 0$ yields $m = -5$.",
          "Hence the complete classification: $m = 3$ (both), $m = -5$ (one), otherwise none."
        ]
      },
      {
        "name": "Resultant elimination",
        "steps": [
          "A common root exists (over $\\mathbb{C}$) iff the resultant of the two quadratics in $x$ vanishes. Computing it gives $\\operatorname{Res} = 2(m - 3)^2(m + 5)$.",
          "So the only candidates are $m = -5$ and $m = 3$. The squared factor $(m-3)^2$ signals the double-overlap (identical-equation) case at $m = 3$, while the simple factor $(m+5)$ gives the single overlap at $m = -5$.",
          "Checking each: $m = -5$ yields one shared root $x = 1$; $m = 3$ makes the equations identical (both roots shared); every other $m$ gives no shared root."
        ]
      }
    ],
    "remark": "Insight: the vanishing of the elimination coefficient ($m = 3$ here) is never an annoyance to divide away — it is precisely the signature of the 'both roots common' (identical-equation) case. The resultant $2(m-3)^2(m+5)$ even encodes this: the squared factor marks the full overlap, the simple factor the single overlap. Always treat the degenerate branch as its own case."
  },
  {
    "theme": "commonroots",
    "themeLabel": "Common Roots",
    "title": "The Cyclic Triple",
    "difficulty": 5,
    "task": "Prove that",
    "tags": [
      "three quadratics",
      "common root",
      "cyclic",
      "sum of squares"
    ],
    "statement": "Let $a, b, c$ be real numbers and suppose the three equations\n\\[x^2 + ax + b = 0, \\qquad x^2 + bx + c = 0, \\qquad x^2 + cx + a = 0\\]\nall share a common root. Prove that $a = b = c$ (so that the three equations are in fact identical).",
    "answer": "$a = b = c$.",
    "trap": "Pairing the equations and dividing by a difference such as $a - b$ to solve for the root, while forgetting that the difference could be zero. A second, subtler trap is to multiply the three subtraction relations together: the product collapses to $(a-b)(b-c)(c-a)\\,(r^3+1)=0$, which only forces one pair of the parameters to be equal (or $r=-1$) and does NOT by itself give $a=b=c$. The clean route keeps the differences symmetric and lets a sum-of-squares do the work, avoiding any illegal division.",
    "solutions": [
      {
        "name": "Sum-of-squares elimination",
        "steps": [
          "Let $r$ be the common root, so $r^2+ar+b=0$, $r^2+br+c=0$, $r^2+cr+a=0$. Subtracting the first two gives $(a-b)r+(b-c)=0$; subtracting the second and third gives $(b-c)r+(c-a)=0$.",
          "Eliminate $r$. If $a\\neq b$, the first relation gives $r=\\dfrac{c-b}{a-b}$; substituting into the second and clearing the denominator yields $(b-c)(c-b)+(c-a)(a-b)=0$, which expands to $-(a^2+b^2+c^2-ab-bc-ca)=0$, i.e. $a^2+b^2+c^2-ab-bc-ca=0$.",
          "But $a^2+b^2+c^2-ab-bc-ca=\\tfrac12\\big[(a-b)^2+(b-c)^2+(c-a)^2\\big]\\ge 0$, with equality if and only if $a=b=c$. (If instead $a=b$, the first relation $(a-b)r+(b-c)=0$ forces $b=c$, and then the third equation gives $c=a$, so again $a=b=c$.) Hence in every case $a=b=c$. $\\blacksquare$"
        ]
      },
      {
        "name": "Square and add the three differences",
        "steps": [
          "From the common root $r$, the three pairwise subtractions give $(a-b)r=c-b$, $(b-c)r=a-c$, and $(c-a)r=b-a$. No division is needed: square each relation.",
          "Squaring and adding, the left side is $\\big[(a-b)^2+(b-c)^2+(c-a)^2\\big]r^2$ and the right side is $(c-b)^2+(a-c)^2+(b-a)^2=(a-b)^2+(b-c)^2+(c-a)^2$. Writing $P=(a-b)^2+(b-c)^2+(c-a)^2\\ge 0$, this is exactly $P\\,(r^2-1)=0$.",
          "So either $P=0$, which means $a=b=c$ immediately, or $r^2=1$. If $r=1$, the original equations read $1+a+b=0,\\ 1+b+c=0,\\ 1+c+a=0$; subtracting in pairs forces $a=b=c\\,(=-\\tfrac12)$. If $r=-1$, the equations read $1-a+b=0,\\ 1-b+c=0,\\ 1-c+a=0$, whose sum is $3=0$, a contradiction, so this case is impossible. In every surviving case $a=b=c$. $\\blacksquare$"
        ]
      }
    ],
    "remark": "Insight: three equations sharing one unknown root over-determine it, and the leftover consistency condition collapses to the famous nonnegative form $\\tfrac12\\sum(a-b)^2$, which vanishes only when all parameters coincide. The square-and-add variant is instructive because it shows where the naive 'multiply the relations' shortcut leaks: products only see when a factor is zero, whereas squares see the full magnitude and pin down $r^2=1$, after which the two stray roots $r=\\pm1$ are dispatched directly."
  },
  {
    "theme": "commonroots",
    "themeLabel": "Common Roots",
    "title": "Roots That Hand Off to a Third",
    "difficulty": 5,
    "task": "Prove that",
    "tags": [
      "three quadratics",
      "symmetric",
      "common root",
      "vieta",
      "a+b+c=0"
    ],
    "statement": "Let $a, b, c$ be distinct real numbers ($a \\neq b$) and suppose\n\\[x^2 + ax + bc = 0 \\qquad\\text{and}\\qquad x^2 + bx + ca = 0\\]\nhave a common root, with that root nonzero. Prove that $a + b + c = 0$, that the common root equals $c$, and that the two NON-common roots are exactly the roots of $x^2 + cx + ab = 0$.",
    "answer": "$a + b + c = 0$; the common root is $x = c$; the non-common roots $a$ and $b$ are precisely the roots of $x^2 + cx + ab = 0$.",
    "trap": "Assuming both roots are shared and concluding the two quadratics are identical. With $a \\neq b$ the equations differ, so only one root is shared; the elegance comes from the OTHER roots, which a 'both common' assumption would erase.",
    "solutions": [
      {
        "name": "Eliminate, then use Vieta",
        "steps": [
          "Subtract the equations: $(a - b)x + (bc - ca) = 0 \\Rightarrow (a - b)x - c(a - b) = 0$, i.e. $(a - b)(x - c) = 0$. Since $a \\neq b$, every common root must satisfy $x = c$.",
          "Substitute $x = c$ into $x^2 + ax + bc = 0$: $c^2 + ac + bc = c(a + b + c) = 0$. Because the shared root $c \\neq 0$, we conclude $a + b + c = 0$.",
          "By Vieta on $x^2 + ax + bc$, the product of its roots is $bc$; one root is $c$, so the other is $b$. Likewise $x^2 + bx + ca$ has roots $c$ and $a$. Hence the non-common roots are $b$ and $a$. They satisfy $a + b = -c$ (from $a+b+c=0$) and have product $ab$, i.e. they are precisely the roots of $x^2 + cx + ab = 0$. $\\blacksquare$"
        ]
      },
      {
        "name": "Direct substitution of $c = -(a+b)$",
        "steps": [
          "Having established $a + b + c = 0$, write $c = -(a + b)$ and factor: $x^2 + ax + bc = (x - b)(x - c)$ and $x^2 + bx + ca = (x - a)(x - c)$, so both indeed share the root $c$.",
          "Reading off the factorizations, the non-common roots are $b$ (for the first) and $a$ (for the second).",
          "Form $x^2 + cx + ab$; substituting $c = -(a+b)$ gives $x^2 - (a+b)x + ab = (x - a)(x - b)$, whose roots are exactly $a$ and $b$ —the two non-common roots. $\\blacksquare$"
        ]
      }
    ],
    "remark": "Insight: a single shared root plus Vieta turns three symmetric quadratics into a closed cycle —the leftover roots of two equations become the full root-set of the third. The condition $a+b+c = 0$ is the hinge that locks the cycle. Note the converse direction too: a brute search over $a \\neq b$ with $a+b+c \\neq 0$ never produces a nonzero common root, so the hypothesis genuinely forces $a+b+c=0$."
  },
  {
    "theme": "commonroots",
    "themeLabel": "Common Roots",
    "title": "A Quadratic Meets Its Reflection",
    "difficulty": 5,
    "task": "Prove that",
    "tags": [
      "common root",
      "reciprocal roots",
      "palindrome",
      "resultant"
    ],
    "statement": "Let $p, q$ be real numbers with $q \\neq 1$. Suppose the equation\n\\[x^2 + px + q = 0\\]\nshares a common root with its coefficient-reversed equation\n\\[q x^2 + p x + 1 = 0.\\]\nProve that the common root must be $+1$ or $-1$, and find the relation between $p$ and $q$ in each case.",
    "answer": "The common root is $\\pm 1$: it is $x = 1$ when $p = -(q + 1)$, and $x = -1$ when $p = q + 1$.",
    "trap": "Reasoning 'the reversed equation has reciprocal roots, so the shared root $r$ must satisfy $r = 1/r$', then dividing by $q$ to make the second equation monic. Dividing by $q$ is fine only because $q \\neq 1$ keeps the equations distinct, but $q$ could still be negative, and forgetting that loses the $x = -1$ branch.",
    "solutions": [
      {
        "name": "Subtract the scaled equations",
        "steps": [
          "Let $r$ be the shared root: $r^2 + pr + q = 0$ and $qr^2 + pr + 1 = 0$.",
          "Subtract the second from the first: $(1 - q)r^2 + (q - 1) = 0 \\Rightarrow (1 - q)(r^2 - 1) = 0$. Since $q \\neq 1$, we get $r^2 = 1$, so $r = \\pm 1$.",
          "Plug $r = 1$: $1 + p + q = 0 \\Rightarrow p = -(q + 1)$. Plug $r = -1$: $1 - p + q = 0 \\Rightarrow p = q + 1$. $\\blacksquare$"
        ]
      },
      {
        "name": "Resultant factorization",
        "steps": [
          "The resultant of $x^2 + px + q$ and $qx^2 + px + 1$ factors as $-(q - 1)^2(p - q - 1)(p + q + 1)$.",
          "A common root requires the resultant to vanish; with $q \\neq 1$ the factor $(q-1)^2 \\neq 0$, so $p = q + 1$ or $p = -(q + 1)$.",
          "Substituting back, $p = q+1$ makes $x = -1$ a shared root and $p = -(q+1)$ makes $x = 1$ a shared root. $\\blacksquare$"
        ]
      }
    ],
    "remark": "Insight: reversing coefficients reflects roots to their reciprocals, so a self-shared root is fixed by $x \\mapsto 1/x$, i.e. $x = \\pm 1$. The algebra confirms it without ever invoking the reciprocal heuristic, guarding against the lost $-1$ branch."
  },
  {
    "theme": "commonroots",
    "themeLabel": "Common Roots",
    "title": "Prove the Bridge Can Never Be Built",
    "difficulty": 5,
    "task": "Prove that",
    "tags": [
      "common-root",
      "non-existence",
      "sos-certificate",
      "elimination",
      "discriminant-trap",
      "resultant"
    ],
    "statement": "For a real parameter $t$ consider the monic quadratics \\[ P_t(x)=x^{2}+t\\,x+(t+1), \\qquad Q_t(x)=x^{2}+(t+1)\\,x+1. \\] Prove that there is no real value of $t$ for which $P_t$ and $Q_t$ have a common root, and exhibit an explicit sum-of-squares certificate of impossibility (i.e. a manifestly positive identity that the common-root condition would force to vanish).",
    "answer": "\\[ \\boxed{\\text{No real }t\\text{ works.}} \\] If $r$ were a common root then subtracting $Q_t(r)-P_t(r)=0$ gives $r=t$, and substituting back forces \\[ P_t(t)=2t^{2}+t+1=0. \\] But this quantity is strictly positive for every real $t$, certified by \\[ 8\\,(2t^{2}+t+1)=(4t+1)^{2}+7\\;\\ge\\;7>0, \\qquad\\text{equivalently}\\qquad 2t^{2}+t+1=2\\!\\left(t+\\tfrac14\\right)^{2}+\\tfrac78 . \\] Since a sum of squares plus $\\tfrac78$ can never be $0$, no real $t$ produces a common root. (The forbidden parameter values are the complex numbers $t=\\dfrac{-1\\pm i\\sqrt{7}}{4}$, which lie outside $\\mathbb{R}$.)",
    "trap": "The seductive route is to run the machine to the end and then misread the verdict. A student eliminates correctly and arrives at $2t^{2}+t+1=0$ — and then does one of two fatal things. (1) They solve it: $t=\\dfrac{-1\\pm\\sqrt{1-8}}{4}=\\dfrac{-1\\pm i\\sqrt7}{4}$, and report these as the answers, silently treating the complex roots as admissible parameter values; the problem says $t$ is real, so these are not solutions — they are a proof of non-existence, and the task was to certify exactly that. (2) Even worse, they see ``discriminant $=1-8=-7<0$'' and conclude ``so the quadratics $P_t,Q_t$ have no real roots'' — confusing the discriminant of the eliminant in the parameter $t$ with the discriminant of $P_t$ or $Q_t$ in $x$. (For example at $t=3$, $P_3=x^2+3x+4$ does have complex roots, but at $t=10$, $Q_{10}=x^2+11x+1$ has two perfectly real roots — the two quadratics individually do have real roots for many $t$; what never happens is that they share one.) A third, subtler slip: forgetting to justify the elimination step. Subtraction is legitimate only because $P_t-Q_t=t-x$ is genuinely linear with nonzero $x$-coefficient, which in turn relies on $P_t\\not\\equiv Q_t$; since matching coefficients would require $t=t+1$, the two quadratics are never identical, so the candidate root $x=t$ is forced and unique. The whole point of the problem is the flip from ``find $t$'' to ``prove no real $t$ exists, with a certificate'': the negative discriminant is not a dead end to be lamented but the very object you must package as a sum of squares.",
    "solutions": [
      {
        "name": "Subtract to pin the only candidate root, then SOS-certify",
        "steps": [
          "Suppose, for contradiction, that some real $t$ admits a common root $r$, so $P_t(r)=0$ and $Q_t(r)=0$. Subtract the two equations; the $x^{2}$ terms cancel and \\[ Q_t(r)-P_t(r)=\\big[(t+1)-t\\big]r+\\big[1-(t+1)\\big]=r-t=0, \\] hence the only possible common root is $r=t$. (This subtraction is valid because $P_t$ and $Q_t$ are never identical: equal constant terms would need $t+1=1$ and equal linear terms would need $t=t+1$, which cannot both hold; so $P_t-Q_t$ is honestly linear and pins $r=t$ uniquely.)",
          "Substitute $r=t$ into $P_t$: \\[ P_t(t)=t^{2}+t\\cdot t+(t+1)=2t^{2}+t+1. \\] A common root exists for a given $t$ iff $2t^{2}+t+1=0$.",
          "Certify positivity. Multiply by $8$ to clear fractions: \\[ 8\\,(2t^{2}+t+1)=16t^{2}+8t+8=(4t+1)^{2}+7. \\] The right-hand side is a square plus $7$, so $8(2t^{2}+t+1)\\ge 7>0$, whence $2t^{2}+t+1>0$ for every real $t$. (Equivalently $2t^{2}+t+1=2(t+\\tfrac14)^{2}+\\tfrac78$.)",
          "Thus $P_t(t)>0$ always, so $t$ is never a root of $P_t$, so the required common root $r=t$ can never occur. The assumption was contradictory: $\\boxed{\\text{no real }t}$ yields a common root, certified by $8(2t^2+t+1)=(4t+1)^2+7>0$."
        ]
      },
      {
        "name": "Classical cross-multiplication eliminant",
        "steps": [
          "For two monic quadratics $x^2+b_1x+c_1$ and $x^2+b_2x+c_2$, the condition for a common root is the eliminant \\[ (c_1-c_2)^{2}=(b_2-b_1)\\,(b_1c_2-b_2c_1), \\] the standard cross-multiplication / resultant identity. Here $b_1=t,\\ c_1=t+1$ and $b_2=t+1,\\ c_2=1$.",
          "Evaluate each piece: $c_1-c_2=(t+1)-1=t$; $\\,b_2-b_1=(t+1)-t=1$; $\\,b_1c_2-b_2c_1=t\\cdot1-(t+1)^{2}=-(t^{2}+t+1)$. The eliminant becomes \\[ t^{2}=1\\cdot\\big(-(t^{2}+t+1)\\big)\\;\\Longleftrightarrow\\; t^{2}+t^{2}+t+1=0\\;\\Longleftrightarrow\\; 2t^{2}+t+1=0, \\] exactly the resultant $\\operatorname{Res}_x(P_t,Q_t)=2t^{2}+t+1$.",
          "This quadratic in $t$ has discriminant $1-8=-7<0$ with positive leading coefficient $2$, so it has no real zero and is everywhere positive; equivalently $2t^{2}+t+1=\\tfrac18\\big[(4t+1)^{2}+7\\big]$ is a (scaled) sum of squares.",
          "Since the eliminant — a necessary condition for any common root — can never vanish for real $t$, no real $t$ gives a common root. $\\boxed{\\text{Impossible over }\\mathbb{R},}$ with the SOS witness $(4t+1)^2+7\\ge7>0$."
        ]
      },
      {
        "name": "Two-variable SOS: kill both equations at once",
        "steps": [
          "Treat existence as a real system in the two unknowns $(x,t)$: a common root exists for some real $t$ iff the system $P_t(x)=0,\\ Q_t(x)=0$ has a real solution. Form the combination $Q_t(x)-P_t(x)=x-t$ and $P_t(x)$ itself; on any common solution both $x-t=0$ and $P_t(x)=0$ hold, so $x=t$ and $P_t(x)=0$ simultaneously.",
          "Eliminate $x$ using $x=t$ inside $P_t$: define $F(t)=P_t(t)=2t^2+t+1$. Build the explicit positive identity directly from the two original polynomials evaluated at $x=t$: \\[ 8\\,P_t(t)=8\\,(2t^2+t+1)=(4t+1)^2+7. \\] This expresses a fixed positive number ($7$) as $8P_t(t)$ minus a perfect square, i.e. $7=8P_t(t)-(4t+1)^2$.",
          "If a real common root existed we would have $P_t(t)=0$, and the boxed identity would give $7=0-(4t+1)^2\\le 0$, a contradiction since $7>0$. Hence the system is real-infeasible: the gap $7$ is the SOS certificate of non-existence (a Positivstellensatz-style witness: $8P_t(t)-(4t+1)^2\\equiv 7>0$).",
          "Therefore there is no real $t$ with a common root, and the certificate is the manifestly positive identity $8\\,P_t(t)=(4t+1)^2+7$. $\\boxed{\\text{No real }t\\text{ exists.}}$"
        ]
      }
    ],
    "remark": "Insight: the cross-multiplication condition is symmetric in its two outcomes — for a fixed pair of quadratic families it produces a polynomial in the parameter, and the find-$t$ problem and the prove-impossible problem are the same computation read with opposite expectations. Here elimination is exceptionally clean because $P_t-Q_t=t-x$ is linear with a constant ($=-1$) leading coefficient, so the candidate common root is forced to be $x=t$ with no case-splitting; the entire difficulty is relocated to certifying that $2t^2+t+1$ never vanishes. The decisive habit is to convert ``discriminant $<0$'' into a constructive sum-of-squares witness $8(2t^2+t+1)=(4t+1)^2+7$: a discriminant sign is an assertion, but an SOS identity is a proof you can hand to a skeptic, and it is exactly the kind of nonnegativity certificate (a baby Positivstellensatz) that scales to systems no eye can solve. The trap — solving $2t^2+t+1=0$ and reporting the complex $t=\\tfrac{-1\\pm i\\sqrt7}{4}$, or mistaking the eliminant's discriminant in $t$ for a statement about whether $P_t,Q_t$ have real roots in $x$ — is the difference between a student who manipulates symbols and one who reads what they mean."
  },
  {
    "theme": "commonroots",
    "themeLabel": "Common Roots",
    "title": "Thirty-Four Refuses the Cyclic Handshake",
    "difficulty": 5,
    "task": "Decide",
    "tags": [
      "cyclic-triple",
      "diophantine",
      "roots-of-unity",
      "resultant",
      "sum-of-squares",
      "impossibility"
    ],
    "statement": "Consider the cyclic triple of monic quadratics \\[ f(x)=x^{2}+ax+b,\\qquad g(x)=x^{2}+bx+c,\\qquad h(x)=x^{2}+cx+a, \\] where $a,b,c$ are integers subject to the single constraint \\[ a+b+c=34. \\] \\\\ Call the triple harmonised if $f,g,h$ possess a common root $r$ (one value of $r$ with $f(r)=g(r)=h(r)=0$; $r$ may be complex). \\\\ (a) Decide whether any harmonised integer triple with $a+b+c=34$ exists. If it does, exhibit one; if not, prove that none can. \\\\ (b) In the course of (a), determine exactly which complex numbers $r$ are eligible to be a common root of a cyclic triple whose coefficients are not all equal, and explain why the constant $34$ — rather than, say, an arbitrary real sum — is what makes the integer question collapse so cleanly.",
    "answer": "\\[ \\boxed{\\text{No harmonised integer triple with } a+b+c=34 \\text{ exists.}} \\] A common root $r$ of all three forces the cyclic linear system $(a-b)r+(b-c)=0,\\ (b-c)r+(c-a)=0,\\ (c-a)r+(a-b)=0$. For coefficients that are not all equal this homogeneous system in $(a-b,\\,b-c,\\,c-a)$ must be singular, and its determinant is $(r+1)(r^{2}-r+1)$; hence the only eligible common roots are $r=-1$ or the two primitive sixth roots of unity $r=\\tfrac{1\\pm i\\sqrt3}{2}$ (the roots of $r^{2}-r+1=0$), all of part (b). Now $r=-1$ collapses the system to $a-b=b-c=c-a$, which together with $(a-b)+(b-c)+(c-a)=0$ gives $a=b=c$, impossible since $a=b=c$ would need $3a=34$ with $a\\in\\mathbb Z$. And for $r^{2}-r+1=0$ the root is non-real; substituting $r^{2}=r-1$ into $f(r)=0$ gives $(a+1)r+(b-1)=0$, and a non-real $r$ forces $a=-1,\\ b=1$; cycling forces $b=-1,c=1$ and $c=-1,a=1$, an outright contradiction ($a=-1$ and $a=1$). So no integer (indeed no real, and even no complex) triple with not-all-equal coefficients is harmonised, and the constraint $a+b+c=34$ — with $3\\nmid 34$ — additionally annihilates the only surviving escape route $a=b=c$. The number $34$ matters precisely because it is $\\equiv 1\\pmod 3$: it makes $a=b=c$ unreachable over $\\mathbb Z$, so the impossibility needs no case-checking of the equal-coefficient family.",
    "trap": "The fatal shortcut is to treat ``$f$ and $g$ share a root'' by the textbook cross-multiplication formula, read off the real candidate $r=\\dfrac{b-c}{\\,b-a\\,}$, and then go hunting for integer triples with $a+b+c=34$ that make this $r$ work — never noticing that the cyclic closure (the third quadratic $h$, and the requirement that the SAME $r$ solve all three) is an extra, decisive constraint. Worse, a solver may add the three equations to get $3r^{2}+34(r+1)=0$, observe its discriminant $34^{2}-12\\cdot34=748>0$, and triumphantly conclude ``two real roots $r$ exist, so a common root exists.'' That is a trap on two levels. First, the sum equation $3r^{2}+34r+34=0$ is a necessary consequence of $f(r)=g(r)=h(r)=0$, not a sufficient one: its real roots $r=\\tfrac{-17\\pm\\sqrt{187}}{3}$ do not satisfy $r^{2}-r+1=0$, so they are roots of the sum $f+g+h$ without being roots of any individual quadratic. Second, the genuinely eligible roots come from the differences, not the sum, and the difference system pins $r$ to $\\{-1\\}\\cup\\{\\text{primitive sixth roots of unity}\\}$ — a set that is either real-but-forcing-$a=b=c$ or non-real-and-self-contradictory. The conceptual error is mistaking a real solution of one derived (summed or pairwise) equation for a real common root of the system; the cyclic structure secretly drives the only possible common root onto the unit circle at $60^{\\circ}$, where no real-coefficient quadratic with distinct partners can keep it.",
    "solutions": [
      {
        "name": "Difference system and its cyclic determinant",
        "steps": [
          "Let $r$ be a common root, so $r^{2}+ar+b=r^{2}+br+c=r^{2}+cr+a=0$. Subtracting consecutive equations kills the $r^{2}$ term and leaves the cyclic linear system $(a-b)r+(b-c)=0,\\ (b-c)r+(c-a)=0,\\ (c-a)r+(a-b)=0$ in the differences $p=a-b,\\ q=b-c,\\ s=c-a$ (note $p+q+s=0$).",
          "If the coefficients are not all equal then $(p,q,s)\\neq(0,0,0)$, so the homogeneous system $\\begin{pmatrix} r&1&0\\\\ 0&r&1\\\\ 1&0&r\\end{pmatrix}\\!\\begin{pmatrix}p\\\\ q\\\\ s\\end{pmatrix}=0$ has a nontrivial solution, forcing the determinant to vanish: $r^{3}+1=(r+1)(r^{2}-r+1)=0$. Thus the only eligible common roots are $r=-1$ and the primitive sixth roots of unity $r=\\tfrac{1\\pm i\\sqrt3}{2}$ — this answers part (b).",
          "Case $r=-1$: the first equation gives $-(a-b)+(b-c)=0$, the second $-(b-c)+(c-a)=0$, so $p=q=s$; combined with $p+q+s=0$ this yields $p=q=s=0$, i.e. $a=b=c$. But $a=b=c$ and $a+b+c=34$ force $3a=34$, impossible for $a\\in\\mathbb Z$.",
          "Case $r^{2}-r+1=0$: here $r$ is non-real. Reduce $f(r)=0$ using $r^{2}=r-1$: $(r-1)+ar+b=(a+1)r+(b-1)=0$. Since $r$ is non-real and $a,b$ are real, both coefficients must vanish: $a=-1,\\ b=1$. Cycling the same reduction on $g$ and $h$ gives $b=-1,c=1$ and $c=-1,a=1$ — so $a=-1$ and $a=1$ at once, a contradiction. No eligible $r$ survives, hence $\\boxed{\\text{no harmonised integer triple with }a+b+c=34\\text{ exists}}$."
        ]
      },
      {
        "name": "Sum equation versus difference equation — separating necessary from sufficient",
        "steps": [
          "Add the three vanishing conditions $f(r)=g(r)=h(r)=0$: $3r^{2}+(a+b+c)r+(a+b+c)=0$. With $a+b+c=34$ this is the sum equation $3r^{2}+34r+34=0$, whose roots are $r=\\tfrac{-17\\pm\\sqrt{187}}{3}$ — both real. This is the bait: it is only a necessary condition, true of any root of $f+g+h$.",
          "A true common root must also satisfy the difference equation. Subtracting $f(r)=g(r)$ and $g(r)=h(r)$ and eliminating gives, for not-all-equal coefficients, $r^{2}-r+1=0$ (the surviving factor of the cyclic determinant $r^{3}+1$). So a genuine common root must lie in the intersection of $\\{3r^{2}+34r+34=0\\}$ and $\\{r^{2}-r+1=0\\}$.",
          "These two quadratics are incompatible: from $r^{2}=r-1$, the sum equation becomes $3(r-1)+34r+34=37r+31=0$, i.e. $r=-\\tfrac{31}{37}$, a real number — but $r^{2}-r+1=0$ has no real root (its discriminant is $-3$). Contradiction, so the intersection is empty.",
          "Equivalently, the only common root of $\\gcd$-type compatibility would be a primitive sixth root of unity, which the real sum equation cannot host. Therefore no $r$ solves all three quadratics for any not-all-equal triple; and $a+b+c=34$ with $3\\nmid34$ rules out the only other configuration $a=b=c$. Hence $\\boxed{\\text{no such integer triple exists}}$."
        ]
      },
      {
        "name": "A real common root would force a perfect cyclic symmetry",
        "steps": [
          "Suppose, aiming for a contradiction even before invoking integrality, that the common root $r$ is real. From the eligibility result $r^{3}=-1$ with $r$ real, the only option is $r=-1$, because $r^{2}-r+1$ is positive for every real $r$ (its minimum value is $\\tfrac34$ at $r=\\tfrac12$). So a real common root can only be $r=-1$.",
          "Plug $r=-1$ into the three equations: $1-a+b=0,\\ 1-b+c=0,\\ 1-c+a=0$, i.e. $b=a-1,\\ c=b-1=a-2,\\ a=c-1=a-3$. The last reads $a=a-3$, i.e. $0=-3$, which is absurd — so $r=-1$ is itself unattainable, and no real common root exists at all, regardless of the value of $a+b+c$.",
          "Thus any common root is non-real and must satisfy $r^{2}-r+1=0$. Writing $f(r)=0$ as $(a+1)r+(b-1)=0$ with $r$ non-real forces $a=-1,b=1$; cycling gives the self-contradiction $a=-1$ and $a=1$. So even over $\\mathbb C$ a not-all-equal cyclic triple is never harmonised.",
          "Finally the only loophole, $a=b=c$ (which makes $f=g=h$ and trivially shares both roots), is closed by the prescribed sum: $a=b=c$ needs $3a=34$, impossible in $\\mathbb Z$ since $34\\equiv1\\pmod3$. Combining, $\\boxed{\\text{no harmonised integer triple with }a+b+c=34\\text{ exists}}$."
        ]
      }
    ],
    "remark": "Insight: the cyclic shift $a\\to b\\to c\\to a$ turns the common-root question into the equation $r^{3}+1=0$ in disguise — the difference system's determinant is exactly $(r+1)(r^{2}-r+1)$, so any common root must be a cube root of $-1$, i.e. $-1$ or a primitive sixth root of unity sitting at $60^{\\circ}$ on the unit circle. That single observation decides everything: the real option $r=-1$ would demand $a=b=c$, while the non-real options cannot be roots of a real-coefficient quadratic unless the coefficients self-contradict. The genuinely deep move is refusing to confuse the three derived scalar equations a solver naturally writes — the pairwise cross-multiplication value $r=\\tfrac{b-c}{b-a}$ and the summed equation $3r^{2}+34r+34=0$ — with the actual system. Both derived equations happily produce real numbers, luring the solver into believing a real common root lives among integer triples; but those reals are roots of $f+g+h$ or of a single pair, not of all three simultaneously. The constant $34$ is chosen with care: because $34\\equiv1\\pmod3$, the degenerate family $a=b=c$ (the lone configuration that can share a root) is unreachable over $\\mathbb Z$, so the Diophantine answer is a clean, unconditional ``impossible'' rather than a finite search. The lesson for a top ranker: a cyclic common-root condition is a statement about roots of unity, and reality is the hidden gate that the symmetric machinery quietly slams shut."
  },
  {
    "theme": "commonroots",
    "themeLabel": "Common Roots",
    "title": "Where the Fixed-Root Pencil Grazes the Discriminant",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "pencil-of-quadratics",
      "discriminant-parabola",
      "envelope",
      "tangency",
      "coefficient-plane",
      "fixed-root"
    ],
    "statement": "Work in the coefficient plane, whose points $(p,q)\\in\\mathbb{R}^2$ name the monic real quadratic \\[ Q_{p,q}(x)=x^{2}+px+q. \\] Fix a real number $t$ and let \\[ L_t=\\bigl\\{(p,q):\\ t\\text{ is a root of }Q_{p,q}\\bigr\\}, \\] the family (``pencil'') of all monic quadratics one of whose roots is the common, prescribed value $t$. Let \\[ \\mathcal{D}=\\bigl\\{(p,q):\\ Q_{p,q}\\text{ has a repeated root}\\bigr\\} \\] be the discriminant curve. \\\\ (a) Show that $L_t$ is a straight line and that $\\mathcal{D}$ is a parabola; write each explicitly. \\\\ (b) The grazing count. For a given fixed root $t$, determine how many members of the pencil $L_t$ have a repeated root, and identify every such member explicitly. \\\\ (c) The meet of two pencils. Two solvers fix different roots $a\\neq b$. Prove that the two lines $L_a$ and $L_b$ meet in exactly one coefficient point $(p^\\ast,q^\\ast)$, and identify the single quadratic $Q_{p^\\ast,q^\\ast}$ that this meet-point names. \\\\ (d) As $t$ ranges over all of $\\mathbb{R}$, what curve do the lines $L_t$ sweep out, in the sense of the curve they are all tangent to? State it and reconcile it with part (b).",
    "answer": "\\[ \\boxed{\\;L_t:\\ q=-t\\,p-t^{2}\\quad(\\text{slope }-t);\\qquad \\mathcal{D}:\\ q=\\tfrac{p^{2}}{4}\\;} \\] (b) The pencil $L_t$ contains exactly one repeated-root member, namely $(x-t)^{2}=x^{2}-2t\\,x+t^{2}$, sitting at $(p,q)=(-2t,\\,t^{2})$ — never two, because $L_t$ is tangent to $\\mathcal{D}$. Indeed, substituting $q=-tp-t^{2}$ into the discriminant gives \\[ \\Delta=p^{2}-4q=p^{2}+4tp+4t^{2}=(p+2t)^{2}\\ge 0, \\] a perfect square that vanishes only at the single value $p=-2t$. \\\\ (c) Solving $-ap-a^{2}=-bp-b^{2}$ gives the unique meet $\\;(p^\\ast,q^\\ast)=(-(a+b),\\,ab)$, which are exactly the coefficients of $(x-a)(x-b)=x^{2}-(a+b)x+ab$: the meet of the two fixed-root pencils is precisely the quadratic carrying both fixed roots. \\\\ (d) The lines $\\{L_t\\}_{t\\in\\mathbb{R}}$ are precisely the tangent lines of the discriminant parabola $\\mathcal{D}:q=\\tfrac{p^{2}}{4}$; that parabola is their envelope. This is the conceptual reconciliation of (b): each $L_t$ touches $\\mathcal{D}$ once because $\\mathcal{D}$ is the envelope, so every fixed-root pencil has exactly one double-root member, with the point of tangency $(-2t,t^{2})$ tracing out the whole of $\\mathcal{D}$ as $t$ varies.",
    "trap": "The seductive error is a counting one. ``A line meets a parabola in up to two points, so the pencil $L_t$ — being a line — should generically contain two quadratics with a repeated root.'' A solver who sets $\\tfrac{p^2}{4}=-tp-t^2$ and reaches the quadratic $p^2+4tp+4t^2=0$ may even ``solve'' it with the quadratic formula, write $p=\\dfrac{-4t\\pm\\sqrt{16t^2-16t^2}}{2}$, glance at $\\sqrt{16t^2-16t^2}$, and — instead of noticing the radicand is identically $0$ — declare ``two roots $p=-2t\\pm 2t$'', i.e. $p=-2t$ and $p=0$, thereby inventing a phantom second double-root member $x^2+t^2$ at $p=0$. But $x^2+t^2$ has discriminant $-4t^2<0$ (for $t\\neq0$): it has no real repeated root, and it is not even on the pencil $L_t$ unless $t=0$. The truth the count misses is that $\\Delta$ restricted to the pencil is the perfect square $(p+2t)^2$, so the line is tangent, not secant — the discriminant parabola is the envelope of the whole family of fixed-root lines, and a member of an envelope-family touches the envelope exactly once. The deeper trap is conceptual: ``having a fixed real root $t$'' already guarantees a non-negative discriminant ($\\Delta=(p+2t)^2\\ge0$ along $L_t$), so the discriminant can never dip below zero and cross back — there is no room for a second tangency. Equating ``line vs. parabola'' with ``two intersections'' ignores that this particular pencil is built to be tangent.",
    "solutions": [
      {
        "name": "Direct intersection: the discriminant becomes a perfect square",
        "steps": [
          "A monic quadratic $Q_{p,q}(x)=x^2+px+q$ has $t$ as a root iff $t^2+pt+q=0$, i.e. $q=-tp-t^2$. This is linear in $(p,q)$ with slope $-t$, so $L_t$ is a line — part (a). A repeated root means $\\Delta=p^2-4q=0$, i.e. $q=\\tfrac{p^2}{4}$, a parabola $\\mathcal{D}$.",
          "Intersect: a repeated-root member of $L_t$ is a point with $q=-tp-t^2$ and $q=\\tfrac{p^2}{4}$. Eliminating $q$, $\\tfrac{p^2}{4}=-tp-t^2$, i.e. $p^2+4tp+4t^2=0$, which factors as $(p+2t)^2=0$.",
          "The perfect square forces the single solution $p=-2t$, hence $q=\\tfrac{(-2t)^2}{4}=t^2$. So there is exactly one repeated-root member, $(p,q)=(-2t,t^2)$, namely $x^2-2tx+t^2=(x-t)^2$ — answering (b) and exposing the trap: the radicand $16t^2-16t^2=0$ kills the second candidate, so no phantom $x^2+t^2$ survives.",
          "For (c), the meet of $L_a,L_b$ solves $-ap-a^2=-bp-b^2$, so $(a-b)p=-(a^2-b^2)=-(a-b)(a+b)$; since $a\\neq b$, $p^\\ast=-(a+b)$ and $q^\\ast=-a\\,p^\\ast-a^2=a(a+b)-a^2=ab$. Thus $Q_{p^\\ast,q^\\ast}=x^2-(a+b)x+ab=(x-a)(x-b)$, the quadratic through both fixed roots. The grazing count is therefore $\\boxed{1}$ per pencil, with the lone member $(x-t)^2$."
        ]
      },
      {
        "name": "Envelope (calculus of the family of lines)",
        "steps": [
          "Write the pencil family as $F(p,q,t)=q+tp+t^2=0$, one line for each fixed root $t$. The envelope of a one-parameter family of curves is found by eliminating $t$ from $F=0$ and $\\partial F/\\partial t=0$.",
          "Here $\\partial F/\\partial t=p+2t=0$ gives $t=-\\tfrac{p}{2}$. Substituting into $F=0$: $q+\\bigl(-\\tfrac{p}{2}\\bigr)p+\\bigl(-\\tfrac{p}{2}\\bigr)^2=q-\\tfrac{p^2}{2}+\\tfrac{p^2}{4}=q-\\tfrac{p^2}{4}=0$.",
          "So the envelope is exactly $q=\\tfrac{p^2}{4}$ — the discriminant parabola $\\mathcal{D}$ — answering (d). By definition each line of an envelope-family is tangent to the envelope, touching it at a single point; that touch-point is $(p,q)=(-2t,t^2)$, i.e. the coefficients of $(x-t)^2$.",
          "Hence each fixed-root pencil $L_t$ meets $\\mathcal{D}$ in exactly one point, giving the grazing count $\\boxed{1}$ with member $(x-t)^2$; and the meet $(p^\\ast,q^\\ast)=(-(a+b),ab)$ of two distinct pencils, lying below $\\mathcal{D}$ when $a\\neq b$ are real and distinct (discriminant $(a-b)^2>0$), names the quadratic $(x-a)(x-b)$ — reconciling parts (b), (c), (d)."
        ]
      },
      {
        "name": "Tangency by the touching condition (no calculus, no elimination)",
        "steps": [
          "A line $q=mp+c$ is tangent to the parabola $q=\\tfrac{p^2}{4}$ iff the quadratic $\\tfrac{p^2}{4}=mp+c$, i.e. $p^2-4mp-4c=0$, has a repeated root, i.e. its discriminant $16m^2+16c=0$, the tangency condition $c=-m^2$.",
          "The pencil $L_t$ is $q=-t\\,p-t^2$, so here $m=-t$ and $c=-t^2$. Check the tangency condition: $-m^2=-(-t)^2=-t^2=c$. It holds for every $t$ — so every fixed-root pencil line is tangent to $\\mathcal{D}$, never secant.",
          "Tangency means a single contact point; solving $p^2-4mp-4c=p^2+4tp+4t^2=(p+2t)^2=0$ gives the unique $p=-2t$, $q=t^2$, the member $(x-t)^2$. Thus the grazing count is $\\boxed{1}$, settling (b) and (d) at once (the family of tangent lines has the parabola as envelope).",
          "For (c): the intersection of $L_a$ and $L_b$ is forced by $-ap-a^2=-bp-b^2\\Rightarrow p^\\ast=-(a+b),\\,q^\\ast=ab$, i.e. $Q_{p^\\ast,q^\\ast}=(x-a)(x-b)$. Note this meet-point lies strictly below the envelope (its $\\Delta=(a-b)^2>0$), consistent with two distinct real roots and with each pencil grazing $\\mathcal{D}$ only once."
        ]
      }
    ],
    "remark": "Insight: the right arena for ``a family of quadratics sharing a fixed root'' is the coefficient plane $(p,q)$, where the constraint ``$t$ is a root'' is the linear equation $q=-tp-t^2$ and ``repeated root'' is the parabola $q=\\tfrac{p^2}{4}$. The whole problem then becomes a single picture: the fixed-root pencils are the tangent lines of the discriminant parabola, and that parabola is their envelope. Three independent computations — substituting and watching $\\Delta$ collapse to the perfect square $(p+2t)^2$, the calculus envelope $\\partial_t F=0$, and the algebraic touching condition $c=-m^2$ — all converge on the same fact, which is the antidote to the ``a line cuts a parabola twice'' reflex. The self-referential punchline of (c) is worth savouring: the point where two fixed-root pencils cross is the coefficient address of the quadratic carrying both of those roots, so the geometry of meeting lines literally reconstructs $(x-a)(x-b)$ from its roots. For a top ranker the lesson is that a generic incidence count (two intersections) can be wrong precisely when the family is engineered to be tangent — and ``has the fixed real root $t$'' is exactly such an engineering, since it pins the discriminant to $(p+2t)^2\\ge0$ with no room to dip negative and graze twice."
  },
  {
    "theme": "rangefraction",
    "themeLabel": "Range via the Discriminant",
    "title": "The Asymptote You Can Actually Touch",
    "difficulty": 5,
    "task": "Find",
    "tags": [
      "range",
      "discriminant",
      "degenerate-leading-coefficient",
      "perfect-square-denominator",
      "one-sided-unbounded",
      "horizontal-asymptote"
    ],
    "statement": "Let \\[ f(x)=\\frac{3x^{2}+2x-1}{(x+2)^{2}},\\qquad x\\in\\mathbb{R}\\setminus\\{-2\\}. \\] Note that the numerator $3x^{2}+2x-1=(3x-1)(x+1)$ genuinely changes sign, while the denominator $(x+2)^{2}$ is a perfect square. Determine, with full justification, the exact range of $f$ — i.e. the set $\\{\\,f(x):x\\neq-2\\,\\}$. State clearly which endpoint values are attained and whether the range is bounded.",
    "answer": "\\[ \\boxed{\\operatorname{Range}(f)=\\left[-\\tfrac{4}{7},\\,\\infty\\right).} \\] The minimum $-\\tfrac47$ is attained (at $x=-\\tfrac35$); the range is unbounded above (as $x\\to-2$, $f(x)\\to+\\infty$). Crucially, the horizontal-asymptote value $y=3$ — the very value at which the cleared equation degenerates from quadratic to linear — is itself attained, at $x=-\\tfrac{13}{10}$; so there is no hole at $y=3$, and the range is the full ray $[-\\tfrac47,\\infty)$ with no point removed.",
    "trap": "Set $y=f(x)$ and clear the denominator: $y(x+2)^{2}=3x^{2}+2x-1$, i.e. $(y-3)x^{2}+(4y-2)x+(4y+1)=0.$ The seductive but fatal move is to declare ``for real $x$ I need the discriminant $\\ge 0$'' and simultaneously treat this as an honest quadratic for every $y$. Two distinct conceptual errors hide here. (1) The degenerate value. At $y=3$ the coefficient of $x^{2}$ is $a(y)=y-3=0$, so the relation is not quadratic — it is the linear equation $10x+13=0$, which has the perfectly good solution $x=-\\tfrac{13}{10}$. A student who blindly invokes ``$D\\ge0$ for a quadratic'' silently assumes $a(y)\\neq0$ and therefore punches a hole at $y=3$, reporting $[-\\tfrac47,\\infty)\\setminus\\{3\\}$. But $y=3$ is the horizontal asymptote, and here the asymptote is a value the function reaches at a finite $x$, not merely approaches — so excluding it is wrong. (2) The phantom upper bound. Pattern-matching to the textbook $\\frac{\\text{quadratic}}{\\text{quadratic}}$ with a strictly-positive denominator (like $\\frac{x^{2}-1}{x^{2}-x+1}$, whose range is the bounded $[-\\tfrac{2}{\\sqrt3},\\tfrac{2}{\\sqrt3}]$) tempts one to expect a two-sided interval $[m,M]$. That intuition silently relies on the denominator never vanishing. Here the denominator is a perfect square that does vanish (at $x=-2$), so $f$ blows up to $+\\infty$ and the range is a one-sided ray. Concretely, the discriminant collapses: $D(y)=(4y-2)^{2}-4(y-3)(4y+1)=28y+16$ is linear, not quadratic, so it yields a single bound $y\\ge-\\tfrac47$ and no upper bound at all. The deep point: the sign/vanishing of the cleared leading coefficient $a(y)=y-3$ controls everything — it is exactly the asymptote value, exactly the value $D(y)$ would otherwise have to ``cap,'' and exactly the value the naive quadratic-discriminant ritual deletes.",
    "solutions": [
      {
        "name": "Discriminant method, with the degenerate leading coefficient handled honestly",
        "steps": [
          "A real number $y$ is in the range iff the equation $y=\\dfrac{3x^{2}+2x-1}{(x+2)^{2}}$ has a real solution $x\\neq-2$. Clearing the (never-cancelling) denominator gives $(y-3)x^{2}+(4y-2)x+(4y+1)=0.\\ (\\ast)$ Note $x=-2$ is never a solution of $(\\ast)$ for any $y$, since substituting $x=-2$ into $3x^{2}+2x-1$ gives $7\\neq0$ while $(x+2)^2=0$; hence every real root of $(\\ast)$ is automatically an admissible $x$, and there is no extraneous-root bookkeeping.",
          "Degenerate case $y=3$ first. If $y=3$ the leading coefficient $a(y)=y-3$ vanishes and $(\\ast)$ becomes the linear equation $(12-2)x+(12+1)=10x+13=0$, giving $x=-\\tfrac{13}{10}$ (and $\\neq-2$). So $y=3$ is attained. This is the case the quadratic-discriminant test cannot see, so we dispose of it by hand.",
          "Genuine quadratic case $y\\neq3$. Real $x$ exists iff the discriminant of $(\\ast)$ is nonnegative: $D(y)=(4y-2)^{2}-4(y-3)(4y+1)=16y^{2}-16y+4-4(4y^{2}-11y-3)=28y+16.$ The $y^{2}$ terms cancel (a footprint of the perfect-square denominator), leaving the linear condition $28y+16\\ge0\\iff y\\ge-\\tfrac47.$ Thus every $y\\ge-\\tfrac47$ with $y\\neq3$ is attained, and there is no upper restriction.",
          "Combine: the quadratic case gives $[-\\tfrac47,\\infty)\\setminus\\{3\\}$ and the degenerate case restores $y=3$, so $\\operatorname{Range}(f)=[-\\tfrac47,\\infty)$. The endpoint $y=-\\tfrac47$ is attained (then $D=0$, double root $x=\\dfrac{-(4y-2)}{2(y-3)}=-\\tfrac35$), and no value exceeds it on the closed side. Hence $\\boxed{\\operatorname{Range}(f)=\\left[-\\tfrac47,\\infty\\right)}.$"
        ]
      },
      {
        "name": "Substitution $t=x+2$ that exposes the ray directly",
        "steps": [
          "Let $t=x+2$ (so $t\\neq0$ and $t$ ranges over $\\mathbb{R}\\setminus\\{0\\}$). Then $x=t-2$, and $3x^{2}+2x-1=3(t-2)^{2}+2(t-2)-1=3t^{2}-10t+7$, so $f=\\dfrac{3t^{2}-10t+7}{t^{2}}=3-\\dfrac{10}{t}+\\dfrac{7}{t^{2}}.$",
          "Put $u=\\dfrac1t\\in\\mathbb{R}\\setminus\\{0\\}$. Then $f=7u^{2}-10u+3$, a genuine upward parabola in $u$, but with the single point $u=0$ deleted from the domain.",
          "On all of $\\mathbb{R}$ the parabola $g(u)=7u^{2}-10u+3$ has minimum at $u=\\tfrac{10}{14}=\\tfrac57$, value $g(\\tfrac57)=3-\\tfrac{25}{7}=-\\tfrac47$, and is unbounded above; so $g(\\mathbb{R})=[-\\tfrac47,\\infty)$. Removing $u=0$ removes only the single output $g(0)=3$ as produced by $u=0$ — but $3$ is also produced by the other preimage $u=\\tfrac{10}{7}$ (since $g(0)=g(\\tfrac{10}{7})=3$ by symmetry about $u=\\tfrac57$), and $\\tfrac{10}{7}\\neq0$ is allowed. Hence deleting $u=0$ deletes no value from the range.",
          "Therefore $\\operatorname{Range}(f)=g\\big(\\mathbb{R}\\setminus\\{0\\}\\big)=[-\\tfrac47,\\infty)$, with $-\\tfrac47$ attained at $u=\\tfrac57$ (i.e. $x=-\\tfrac35$). $\\boxed{\\operatorname{Range}(f)=\\left[-\\tfrac47,\\infty\\right)}.$ The asymptote value $3$ survives precisely because the parabola hits it twice and only one preimage was forbidden."
        ]
      },
      {
        "name": "Calculus: single critical point plus the blow-up establishes the ray",
        "steps": [
          "Differentiate by the quotient rule on $f=\\dfrac{3x^{2}+2x-1}{(x+2)^{2}}$. The numerator of $f'$ is $(6x+2)(x+2)^{2}-(3x^{2}+2x-1)\\cdot2(x+2)=(x+2)\\big[(6x+2)(x+2)-2(3x^{2}+2x-1)\\big].$ The bracket is $(6x^{2}+14x+4)-(6x^{2}+4x-2)=10x+6$, so after cancelling one factor of $(x+2)$, \\[ f'(x)=\\frac{10x+6}{(x+2)^{3}}=\\frac{2(5x+3)}{(x+2)^{3}}. \\]",
          "Hence the only critical point is $5x+3=0\\Rightarrow x=-\\tfrac35$, where $f(-\\tfrac35)=\\dfrac{3\\cdot\\frac{9}{25}-\\frac65-1}{(\\frac75)^{2}}=\\dfrac{\\frac{27}{25}-\\frac{30}{25}-\\frac{25}{25}}{\\frac{49}{25}}=\\dfrac{-28/25}{49/25}=-\\tfrac47.$",
          "Sign chart of $f'(x)=\\dfrac{2(5x+3)}{(x+2)^{3}}$. On $(-\\infty,-2)$: numerator $5x+3<0$ and denominator $(x+2)^3<0$, so $f'>0$ — $f$ increases from $f\\to3^{+}$ (as $x\\to-\\infty$) up to $f\\to+\\infty$ (as $x\\to-2^{-}$); this branch covers $(3,\\infty)$. On $(-2,-\\tfrac35)$: numerator $<0$, denominator $>0$, so $f'<0$ — $f$ decreases from $+\\infty$ down to the minimum $-\\tfrac47$. On $(-\\tfrac35,\\infty)$: both positive, $f'>0$ — $f$ increases from $-\\tfrac47$ back up toward $f\\to3^{-}$ (as $x\\to+\\infty$); this part of the right branch covers $[-\\tfrac47,3)$.",
          "Assemble the images: the left branch gives $(3,\\infty)$; the right branch gives $[-\\tfrac47,3)$ on its way to the asymptote, plus it attains the asymptote value $3$ exactly once, at $x=-\\tfrac{13}{10}$ (where $f=3$). The union is $[-\\tfrac47,3)\\cup\\{3\\}\\cup(3,\\infty)=[-\\tfrac47,\\infty)$, the minimum $-\\tfrac47$ attained and the supremum infinite. Hence $\\boxed{\\operatorname{Range}(f)=\\left[-\\tfrac47,\\infty\\right)}.$"
        ]
      }
    ],
    "remark": "Insight: this is the discriminant method's most instructive failure mode, displayed in miniature. The instant you clear a fraction $y=\\frac{N(x)}{D(x)}$ you create a polynomial in $x$ whose leading coefficient $a(y)$ is itself a function of $y$ — and $a(y)=0$ is not a nuisance to be waved away but the single most important value of $y$: it is the horizontal-asymptote level $\\lim_{x\\to\\pm\\infty}f$, the level where the curve $y=f(x)$ meets its asymptote, and the level the routine ``discriminant $\\ge0$'' test is structurally blind to. Whether that asymptote value lies in the range depends on whether the linearised equation has an admissible root — here it does (at $x=-\\tfrac{13}{10}$), so the asymptote is touched, not merely approached, and deleting it would be an error. The second lesson is that boundedness of $\\frac{\\text{quad}}{\\text{quad}}$ is decided entirely by the denominator's discriminant: a strictly positive denominator forces a bounded two-sided range, whereas a denominator that vanishes (here a perfect square, root $x=-2$) lets $f\\to+\\infty$ and makes the range a one-sided ray. That same perfect-square structure is why $D(y)=28y+16$ comes out linear — the $y^{2}$ term cancels — so there is exactly one finite bound, never the symmetric $[m,M]$ a careless pattern-match expects. A top ranker reads $a(y)=y-3$ and the denominator's double root before touching a discriminant, and lets those two facts predict the answer's shape: a ray, closed at the discriminant bound, with the asymptote value quietly recaptured."
  },
  {
    "theme": "rangefraction",
    "themeLabel": "Range via the Discriminant",
    "title": "The Detector's Dynamic Range",
    "difficulty": 4,
    "task": "Find the maximum and minimum",
    "tags": [
      "range",
      "discriminant",
      "extremum",
      "word problem",
      "optimization"
    ],
    "statement": "A photodetector's normalized response to a tuning parameter $t\\in\\mathbb{R}$ is modelled by \\[ R(t)=\\frac{(t-2)^{2}}{t^{2}+1}. \\] Find the maximum and minimum possible values of $R$, and the tunings $t$ at which they occur.",
    "answer": "Minimum $R=0$ at $t=2$; maximum $R=5$ at $t=-\\tfrac12$. The full range is $[0,5]$.",
    "trap": "Assuming the maximum occurs as $t\\to\\pm\\infty$ (where $R\\to 1$) and concluding the response is bounded by its horizontal-asymptote value $1$. The true maximum $5$ occurs at a finite $t=-\\tfrac12$, far above the asymptote; the asymptote is not an extremum.",
    "solutions": [
      {
        "name": "Discriminant in $y$",
        "steps": [
          "Set $y=\\frac{(t-2)^2}{t^2+1}$; since $t^2+1>0$ always, $y$ is defined for all real $t$.",
          "Cross-multiply: $y(t^2+1)=t^2-4t+4$, i.e. $(y-1)t^2+4t+(y-4)=0$.",
          "For $y\\ne 1$, a real $t$ exists iff discriminant $\\ge0$: $16-4(y-1)(y-4)\\ge 0$.",
          "Simplify: $16-4(y^2-5y+4)=-4(y^2-5y)=-4y(y-5)\\ge 0$, so $0\\le y\\le 5$.",
          "Check $y=1$ (linear case): $4t-3=0\\Rightarrow t=\\tfrac34$, attained and inside $[0,5]$.",
          "Endpoints: $y=0\\Rightarrow(t-2)^2=0\\Rightarrow t=2$; $y=5\\Rightarrow 4t^2+4t+1=0\\Rightarrow t=-\\tfrac12$. Thus $\\min=0$, $\\max=\\boxed{5}$."
        ]
      },
      {
        "name": "Obvious minimum + boundary search",
        "steps": [
          "Since $(t-2)^2\\ge 0$ and $t^2+1>0$, clearly $R(t)\\ge 0$ with equality iff $t=2$; so the minimum is $0$.",
          "For the maximum, solve $R(t)=y$: $(1-y)t^2-4t+(4-y)=0$ must have a real root.",
          "Treat as quadratic in $t$ (for $y\\ne1$): discriminant $16-4(1-y)(4-y)\\ge0\\Rightarrow 4y(5-y)\\ge0\\Rightarrow y\\le 5$.",
          "The largest such $y$ is $5$, attained at the double root $t=\\frac{4}{2(1-5)}=-\\tfrac12$, giving $\\max R=\\boxed{5}$."
        ]
      }
    ],
    "remark": "Insight: the numerator is a perfect square so the minimum is read off instantly; only the maximum needs the discriminant. Don't be misled by the horizontal asymptote $R\\to1$ — for a quadratic-over-quadratic, the extrema sit at finite points, not at infinity."
  },
  {
    "theme": "rangefraction",
    "themeLabel": "Range via the Discriminant",
    "title": "The Asymptote Hides in the Middle",
    "difficulty": 4,
    "task": "Determine",
    "tags": [
      "range",
      "discriminant",
      "interior-puncture",
      "horizontal-asymptote",
      "golden-ratio"
    ],
    "statement": "Let \\[ f(x)=\\frac{x^{2}-2x+2}{x^{2}+1},\\qquad x\\in\\mathbb{R}. \\] The graph $y=f(x)$ has a horizontal asymptote, and it crosses that asymptote at exactly one point $P$. \\\\ Define $g$ to be the same rule restricted to the punctured domain $\\mathbb{R}\\setminus\\{x_{P}\\}$, where $x_{P}$ is the $x$-coordinate of $P$ (so the single point $P$ is deleted from the curve). \\\\ Determine, with exact bounds, the range of $g$ — that is, the set of values $y=f(x)$ taken as $x$ runs over every real number except $x_{P}$. State precisely which values are attained, which (if any) are approached but never reached, and whether each bound of the range is achieved.",
    "answer": "First, the horizontal asymptote is $y=1$ (since the numerator and denominator are both monic of degree $2$). Solving $f(x)=1$ gives $\\dfrac{x^{2}-2x+2}{x^{2}+1}=1\\iff -2x+2=1\\iff x=\\tfrac12$, a unique solution, so $P=\\left(\\tfrac12,\\,1\\right)$ and $x_{P}=\\tfrac12$. \\\\ Setting $y=f(x)$ and clearing denominators, $y(x^{2}+1)=x^{2}-2x+2$, i.e. \\[ (y-1)x^{2}+2x+(y-2)=0. \\] For $y\\neq1$ this is a genuine quadratic in $x$; a real $x$ exists iff its discriminant is nonnegative: \\[ \\Delta=4-4(y-1)(y-2)=-4\\bigl(y^{2}-3y+1\\bigr)\\ge0\\iff y^{2}-3y+1\\le0\\iff \\frac{3-\\sqrt5}{2}\\le y\\le\\frac{3+\\sqrt5}{2}. \\] So over all of $\\mathbb{R}$ the range of $f$ is the closed interval $\\left[\\frac{3-\\sqrt5}{2},\\,\\frac{3+\\sqrt5}{2}\\right]$, with endpoints attained at $x=\\tfrac{1\\pm\\sqrt5}{2}$. \\\\ Now restrict to $x\\neq\\tfrac12$. The value $y=1$ is attained only at $x=\\tfrac12$, which has been deleted; every other value in the interval is attained at some $x\\neq\\tfrac12$. Crucially $\\Delta(1)=-4(1-3+1)=4>0$, so $y=1$ lies strictly inside the interval, not at an endpoint. Hence the range of $g$ is the closed interval with that one interior value punched out: \\[ \\boxed{\\;\\operatorname{ran}(g)=\\left[\\dfrac{3-\\sqrt5}{2},\\ \\dfrac{3+\\sqrt5}{2}\\right]\\setminus\\{1\\}\\;} \\] Both endpoints $\\frac{3\\mp\\sqrt5}{2}$ are achieved (at $x=\\frac{1\\pm\\sqrt5}{2}\\neq\\tfrac12$); the value $1$ is approached arbitrarily closely from both sides but never reached.",
    "trap": "The seductive error is to run the discriminant method, obtain the closed interval $\\left[\\frac{3-\\sqrt5}{2},\\frac{3+\\sqrt5}{2}\\right]$, and report it as the answer for $g$ — forgetting that the deleted point $P$ removes a value from inside the interval. A student tests only the endpoints (``are the bounds attained? yes, at $x=\\frac{1\\pm\\sqrt5}{2}$''), sees nothing wrong at the boundary, and never checks the interior. The puncture is invisible to an endpoints-only audit. \\\\ A second, deeper misconception compounds it: many strong students carry the reflex ``the value the function cannot attain is the horizontal asymptote, and that excluded value always sits at an end of the range.'' That reflex is correct for the unattained horizontal asymptote of an ordinary rational function — if $y=y_{0}$ makes the cleared equation linear-and-inconsistent, then $\\Delta(y_{0})=0$, so $y_{0}$ is forced onto the boundary. Here the asymptote $y=1$ is the opposite kind: it is attained on the full domain (at $x=\\tfrac12$, where the equation $(y-1)x^{2}+2x+(y-2)=0$ degenerates to the linear $2x-1=0$ with a genuine root), and $\\Delta(1)=4>0$ places it strictly interior. The deletion of a single point therefore removes an interior value, not an endpoint. A solver who conflates ``asymptote value'' with ``endpoint of range,'' or who deletes the wrong (boundary) value, lands on a wrong answer. The only correct statement keeps both endpoints and removes the interior point $1$.",
    "solutions": [
      {
        "name": "Discriminant range, then locate and delete the interior point",
        "steps": [
          "The horizontal asymptote of $f(x)=\\dfrac{x^{2}-2x+2}{x^{2}+1}$ is $y=\\lim_{x\\to\\pm\\infty}f(x)=1$ (ratio of leading coefficients). Find where the curve meets it: $f(x)=1\\iff x^{2}-2x+2=x^{2}+1\\iff -2x+1=0\\iff x=\\tfrac12$, and this is the only solution. So $P=\\bigl(\\tfrac12,1\\bigr)$, $x_{P}=\\tfrac12$, and the deleted value is $f(\\tfrac12)=1$.",
          "For the range, set $y=f(x)$ and clear: $y(x^{2}+1)=x^{2}-2x+2$, giving $(y-1)x^{2}+2x+(y-2)=0$. For $y\\neq1$ this quadratic in $x$ has a real solution iff $\\Delta=2^{2}-4(y-1)(y-2)\\ge0$, i.e. $-4\\bigl(y^{2}-3y+1\\bigr)\\ge0$, i.e. $y^{2}-3y+1\\le0$. The roots of $y^{2}-3y+1$ are $\\tfrac{3\\pm\\sqrt5}{2}$, so $\\Delta\\ge0\\iff \\tfrac{3-\\sqrt5}{2}\\le y\\le\\tfrac{3+\\sqrt5}{2}$.",
          "Check the boundary value $y=1$: $\\Delta(1)=-4(1-3+1)=4>0$, so $y=1$ is strictly between the two roots $\\tfrac{3-\\sqrt5}{2}\\approx0.382$ and $\\tfrac{3+\\sqrt5}{2}\\approx2.618$ — it is an interior point of the discriminant interval, not an endpoint. The endpoints themselves give $\\Delta=0$, hence a double root $x=\\dfrac{-2}{2(y-1)}=\\dfrac{1}{1-y}$; at $y=\\tfrac{3\\mp\\sqrt5}{2}$ this is $x=\\tfrac{1\\pm\\sqrt5}{2}$, both different from $\\tfrac12$, so both endpoints are attained even after the puncture.",
          "On the punctured domain $x\\neq\\tfrac12$, the value $1$ is attained only at the removed point, while every other $y$ in the interval is attained at some admissible $x$. Therefore $\\operatorname{ran}(g)=\\boxed{\\left[\\dfrac{3-\\sqrt5}{2},\\ \\dfrac{3+\\sqrt5}{2}\\right]\\setminus\\{1\\}}$: a closed interval with one interior point deleted, endpoints achieved, the level $1$ approached but never reached."
        ]
      },
      {
        "name": "Shift to an odd profile: write $f-1$ and read off the symmetric puncture",
        "steps": [
          "Subtract the asymptote: $f(x)-1=\\dfrac{x^{2}-2x+2-(x^{2}+1)}{x^{2}+1}=\\dfrac{1-2x}{x^{2}+1}$. Put $u=f(x)-1$; then $u(x^{2}+1)=1-2x$, i.e. $u\\,x^{2}+2x+(u-1)=0$. The deleted point is exactly $u=0$, which forces $2x-1=0$, $x=\\tfrac12$ — confirming $P$ and that $u=0\\ (\\,y=1\\,)$ is reached only there.",
          "For $u\\neq0$ a real $x$ exists iff the discriminant of $u\\,x^{2}+2x+(u-1)$ is $\\ge0$: $4-4u(u-1)\\ge0\\iff u^{2}-u-1\\le0\\iff \\dfrac{1-\\sqrt5}{2}\\le u\\le\\dfrac{1+\\sqrt5}{2}$. Notice the interval for $u$ is centred structure $u^2-u-1$ whose roots are $-\\tfrac1\\varphi$ and $\\varphi$ (with $\\varphi=\\tfrac{1+\\sqrt5}{2}$): the maximum $h=\\dfrac{1-2x}{x^{2}+1}$ over $\\mathbb R$ is $\\varphi$ and the minimum is $-\\tfrac1\\varphi$.",
          "Since $u=0$ lies strictly between $\\tfrac{1-\\sqrt5}{2}<0$ and $\\tfrac{1+\\sqrt5}{2}>0$, the deleted value is interior to the $u$-range too. Translating back via $y=u+1$ gives $y\\in\\left[\\tfrac{3-\\sqrt5}{2},\\tfrac{3+\\sqrt5}{2}\\right]$ with $y=1$ (i.e. $u=0$) removed.",
          "The endpoints of the $u$-interval are attained at the double roots $x=-1/u=\\tfrac{1\\pm\\sqrt5}{2}\\neq\\tfrac12$, so they survive the puncture. Hence $\\operatorname{ran}(g)=\\boxed{\\left[\\dfrac{3-\\sqrt5}{2},\\ \\dfrac{3+\\sqrt5}{2}\\right]\\setminus\\{1\\}}$."
        ]
      },
      {
        "name": "Calculus extrema plus continuity: the gap is a single interior point",
        "steps": [
          "Differentiate: $f'(x)=\\dfrac{(2x-2)(x^{2}+1)-(x^{2}-2x+2)(2x)}{(x^{2}+1)^{2}}=\\dfrac{2x^{2}-2x-2}{(x^{2}+1)^{2}}=\\dfrac{2(x^{2}-x-1)}{(x^{2}+1)^{2}}$. The critical points are the roots of $x^{2}-x-1=0$, namely $x=\\tfrac{1\\pm\\sqrt5}{2}$.",
          "Evaluate: $f\\!\\left(\\tfrac{1-\\sqrt5}{2}\\right)=\\tfrac{3+\\sqrt5}{2}$ (global maximum) and $f\\!\\left(\\tfrac{1+\\sqrt5}{2}\\right)=\\tfrac{3-\\sqrt5}{2}$ (global minimum); both critical abscissae differ from $\\tfrac12$, so they remain in the punctured domain and the extreme values are genuinely achieved by $g$.",
          "Because $f$ is continuous on each of the two intervals $(-\\infty,\\tfrac12)$ and $(\\tfrac12,\\infty)$ and attains both its global min and max there, the image of $g$ is connected within $\\left[\\tfrac{3-\\sqrt5}{2},\\tfrac{3+\\sqrt5}{2}\\right]$ except possibly at values reached only at $x=\\tfrac12$. Solving $f(x)=c$ shows the unique value reached only at $\\tfrac12$ is $c=1$ (every $c\\neq1$ in the interval gives a quadratic with a root $\\neq\\tfrac12$).",
          "As $x\\to\\tfrac12$ from either side, $f(x)\\to1$, so $1$ is a limit point of the image but is omitted. All other values, including both endpoints, are attained. Therefore $\\operatorname{ran}(g)=\\boxed{\\left[\\dfrac{3-\\sqrt5}{2},\\ \\dfrac{3+\\sqrt5}{2}\\right]\\setminus\\{1\\}}$ — a closed interval punctured at the interior point $1$."
        ]
      }
    ],
    "remark": "Insight: the textbook instinct ``the value a rational function misses is its horizontal asymptote, and that missed value sits at the edge of the range'' is only half a theorem. It is true precisely when the asymptote is unattained — there the cleared quadratic loses its leading term and degenerates to an inconsistent linear equation, forcing $\\Delta(y_{0})=0$ and pinning $y_{0}$ to a boundary. The whole trick of this problem is to engineer the opposite: the asymptote $y=1$ is genuinely attained (the degenerate equation $2x-1=0$ has the honest root $x=\\tfrac12$), and $\\Delta(1)=4>0$ throws it into the strict interior. Deleting that single crossing point therefore does not trim an endpoint — it drills a hole in the middle. The endpoints come out as $\\tfrac{3\\pm\\sqrt5}{2}=\\varphi^{2}$ and $\\varphi^{-2}$ (with $\\varphi$ the golden ratio), whose product is $1$; so the punctured value $1$ is exactly the geometric mean $\\sqrt{\\varphi^{2}\\cdot\\varphi^{-2}}$ of the two extrema — a quiet hint that it lives dead-centre, not at a rim. The lesson for a top ranker: after the discriminant gives a closed interval, separately interrogate every value reachable at a removed or forbidden $x$, and test whether such a value is interior ($\\Delta>0$) or boundary ($\\Delta=0$). An endpoints-only check is structurally blind to interior punctures."
  },
  {
    "theme": "rangefraction",
    "themeLabel": "Range via the Discriminant",
    "title": "The Forbidden Band Between Two Poles",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "range",
      "discriminant",
      "vertical-asymptote",
      "degenerate-case",
      "forbidden-interval",
      "linear-over-quadratic"
    ],
    "statement": "Let \\[ f(x)=\\frac{x+2}{x^{2}-2x-3},\\qquad x\\in\\mathbb{R}\\setminus\\{-1,\\,3\\}. \\] The denominator factors as $x^{2}-2x-3=(x+1)(x-3)$, so the graph has two genuine vertical asymptotes and $f$ is unbounded in both directions. Determine, with complete justification, the exact range of $f$ — the set $\\{\\,f(x):x\\neq-1,\\,3\\,\\}$. Your answer must state precisely which real numbers are not attained, whether the missing set is open or closed at its ends, and whether the horizontal-asymptote value $y=0$ belongs to the range.",
    "answer": "Set $y=f(x)$ and clear the denominator: $y\\bigl(x^{2}-2x-3\\bigr)=x+2$, i.e. \\[ y\\,x^{2}-(2y+1)\\,x-(3y+2)=0.\\qquad(\\star) \\] Degenerate case $y=0$. Then $(\\star)$ is the linear equation $-x-2=0$, giving $x=-2$; since $-2\\notin\\{-1,3\\}$, the value $y=0$ is attained (at $x=-2$). So $0\\in\\operatorname{ran}(f)$ — even though $y=0$ is the horizontal asymptote. \\\\ Generic case $y\\neq0$. Now $(\\star)$ is a true quadratic in $x$; a real $x$ exists iff \\[ \\Delta(y)=(2y+1)^{2}+4y\\,(3y+2)=16y^{2}+12y+1\\;\\ge\\;0. \\] Because the leading coefficient $16=(\\,\\text{disc of denominator}\\,)=(-2)^{2}-4(-3)>0$, $\\Delta(y)$ is an upward parabola, so $\\Delta\\ge0$ holds outside the roots, not between them. The roots are $y=\\dfrac{-12\\pm\\sqrt{144-64}}{32}=\\dfrac{-3\\pm\\sqrt5}{8}$. Hence a real $x$ exists iff \\[ y\\le\\frac{-3-\\sqrt5}{8}\\quad\\text{or}\\quad y\\ge\\frac{-3+\\sqrt5}{8}. \\] Equivalently the only values missed are the open band strictly between the roots. \\\\ Endpoints. At each root $\\Delta=0$, the double root is $x=\\dfrac{2y+1}{2y}$, which evaluates to $x=-2+\\sqrt5$ and $x=-2-\\sqrt5$ respectively — both in the domain — so both band endpoints are attained. Combining (and noting $0>\\frac{-3+\\sqrt5}{8}$, so the $y=0$ case is consistent with the inequality above), \\[ \\boxed{\\;\\operatorname{ran}(f)=\\mathbb{R}\\setminus\\left(\\frac{-3-\\sqrt5}{8},\\ \\frac{-3+\\sqrt5}{8}\\right)\\;} \\] a closed-complement: every real except the open interval $\\left(\\frac{-3-\\sqrt5}{8},\\frac{-3+\\sqrt5}{8}\\right)$ is hit; the two endpoints $\\frac{-3\\pm\\sqrt5}{8}$ are achieved, and the asymptote value $0$ lies in the range.",
    "trap": "The fatal reflex is to run the discriminant method on autopilot: clear to $y\\,x^{2}-(2y+1)x-(3y+2)=0$, write $\\Delta=16y^{2}+12y+1\\ge0$, find the roots $\\frac{-3\\pm\\sqrt5}{8}$, and — by analogy with the familiar quadratic-over-quadratic problems where the range is the interval between the discriminant's roots — report $\\operatorname{ran}(f)=\\left[\\frac{-3-\\sqrt5}{8},\\frac{-3+\\sqrt5}{8}\\right]$. This is exactly backwards. The sign of the $y^{2}$-coefficient flips the geometry: here the denominator $(x+1)(x-3)$ has two real roots, so its discriminant $16>0$ becomes the leading coefficient of $\\Delta(y)$, making $\\Delta$ an upward parabola. ``$\\Delta\\ge0$'' therefore selects the outside of the root-pair — two unbounded rays — and the interval between the roots is the one band the function can never reach. A solver who memorised ``range $=$ interval between the $\\Delta=0$ values'' from bounded examples (where the parabola opened downward) names the complement of the truth. \\\\ A second, independent landmine: the discriminant step silently divides by the leading coefficient $y$, so it says nothing about $y=0$. A careless solver either (a) drops $y=0$ entirely, or (b) assumes the horizontal asymptote $y=0$ is automatically unattained (true for many rational functions) and wrongly excludes it. In fact $(\\star)$ at $y=0$ degenerates to a consistent linear equation $-x-2=0$ with the honest root $x=-2$ in the domain, so $0$ is in the range. Finally, a student who does get the rays right but writes the missing set as the closed interval $\\left[\\frac{-3-\\sqrt5}{8},\\frac{-3+\\sqrt5}{8}\\right]$ wrongly discards the two endpoints, which are genuinely attained at the double roots $x=-2\\pm\\sqrt5$. Only ``$\\mathbb{R}$ minus the open band, asymptote value included'' survives all three checks.",
    "solutions": [
      {
        "name": "Discriminant with explicit sign-of-leading-coefficient and degenerate-case audit",
        "steps": [
          "Put $y=f(x)$ and clear: $y(x^{2}-2x-3)=x+2$, i.e. $y\\,x^{2}-(2y+1)x-(3y+2)=0\\ (\\star)$. First isolate the degenerate value: if $y=0$, $(\\star)$ collapses to $-x-2=0\\Rightarrow x=-2$, and $-2\\notin\\{-1,3\\}$, so $y=0$ is attained. Record $0\\in\\operatorname{ran}(f)$.",
          "For $y\\neq0$, $(\\star)$ is quadratic in $x$ and has a real solution iff $\\Delta(y)=(2y+1)^{2}+4y(3y+2)=16y^{2}+12y+1\\ge0$. Crucially the coefficient of $y^{2}$ is $+16>0$ (it equals the discriminant $b^{2}-4ac=4+12$ of the denominator, which is positive precisely because the denominator has two real roots). So $\\Delta(y)$ opens upward: $\\Delta\\ge0$ holds for $y$ outside its roots.",
          "The roots are $y=\\dfrac{-12\\pm\\sqrt{12^{2}-4\\cdot16}}{2\\cdot16}=\\dfrac{-3\\pm\\sqrt5}{8}$. Hence a real preimage exists $\\iff y\\le\\frac{-3-\\sqrt5}{8}$ or $y\\ge\\frac{-3+\\sqrt5}{8}$; the open band $\\left(\\frac{-3-\\sqrt5}{8},\\frac{-3+\\sqrt5}{8}\\right)$ is unattainable. (Consistency: $\\frac{-3+\\sqrt5}{8}\\approx-0.095<0$, so $y=0$ already satisfies the inequality, matching Step 1.)",
          "Endpoints: at $\\Delta=0$ the double root is $x=\\dfrac{2y+1}{2y}$; substituting $y=\\frac{-3\\mp\\sqrt5}{8}$ gives $x=-2\\pm\\sqrt5$, both in the domain, so both endpoints are attained. Therefore $\\operatorname{ran}(f)=\\boxed{\\mathbb{R}\\setminus\\left(\\dfrac{-3-\\sqrt5}{8},\\ \\dfrac{-3+\\sqrt5}{8}\\right)}$ — all reals except an open band, endpoints included, asymptote $0$ included."
        ]
      },
      {
        "name": "Calculus: the local extrema bound the gap from inside the rays",
        "steps": [
          "Differentiate $f(x)=\\dfrac{x+2}{x^{2}-2x-3}$: $f'(x)=\\dfrac{(x^{2}-2x-3)-(x+2)(2x-2)}{(x^{2}-2x-3)^{2}}=\\dfrac{-(x^{2}+4x-1)}{(x^{2}-2x-3)^{2}}$. Critical points solve $x^{2}+4x-1=0$, i.e. $x=-2\\pm\\sqrt5$ (both lie strictly between the poles' exterior branches and inside the domain).",
          "Evaluate: $f(-2+\\sqrt5)=\\frac{-3-\\sqrt5}{8}$ and $f(-2-\\sqrt5)=\\frac{-3+\\sqrt5}{8}$. A sign check of $f'$ shows $x=-2-\\sqrt5$ is a local maximum on the branch $(-\\infty,-1)$ with value $\\frac{-3+\\sqrt5}{8}$, and $x=-2+\\sqrt5$ is a local minimum on the branch $(-1,3)$ with value $\\frac{-3-\\sqrt5}{8}$.",
          "Track the three branches, using the limits $f\\to0$ as $x\\to\\pm\\infty$ and the one-sided pole behaviour $f\\to+\\infty,-\\infty$ as $x\\to-1^{-},-1^{+}$ and $f\\to-\\infty,+\\infty$ as $x\\to3^{-},3^{+}$. On $(-\\infty,-1)$ the critical point $x=-2-\\sqrt5$ is a local maximum with value $\\frac{-3+\\sqrt5}{8}$, while $f\\to0^{-}$ at $-\\infty$ and $f\\to+\\infty$ at $-1^{-}$; this branch therefore sweeps $\\bigl[\\tfrac{-3+\\sqrt5}{8},+\\infty\\bigr)$ (climbing to the local max, dipping back, then rising to $+\\infty$). On $(-1,3)$ the critical point $x=-2+\\sqrt5$ is a local minimum with value $\\frac{-3-\\sqrt5}{8}$, and $f\\to-\\infty$ at both ends ($-1^{+}$ and $3^{-}$); this branch sweeps $\\bigl(-\\infty,\\tfrac{-3-\\sqrt5}{8}\\bigr]$. On $(3,\\infty)$, $f\\to+\\infty$ at $3^{+}$ and $f\\to0^{+}$ at $+\\infty$ monotonically, covering $(0,+\\infty)$.",
          "Union of the branch-images is $\\bigl(-\\infty,\\tfrac{-3-\\sqrt5}{8}\\bigr]\\cup\\bigl[\\tfrac{-3+\\sqrt5}{8},+\\infty\\bigr)$ together with the value $0$ (attained at $x=-2$); no value strictly inside $\\bigl(\\tfrac{-3-\\sqrt5}{8},\\tfrac{-3+\\sqrt5}{8}\\bigr)$ is ever produced. Hence $\\operatorname{ran}(f)=\\boxed{\\mathbb{R}\\setminus\\left(\\dfrac{-3-\\sqrt5}{8},\\ \\dfrac{-3+\\sqrt5}{8}\\right)}$, the local-extreme values being exactly the (attained) band endpoints."
        ]
      },
      {
        "name": "AM-GM / amplitude on the reciprocal: bound how small $|f|$ can be",
        "steps": [
          "The unattained band is symmetric-looking about its centre; locate it by asking when $f(x)=y$ has no solution. Equivalently study $g(x)=\\dfrac1{f(x)}=\\dfrac{x^{2}-2x-3}{x+2}$ where $f\\neq0$. Put $t=x+2$ (so $x=t-2$, $t\\neq0$ and $t\\neq1,5$ excluded for the poles): $g=\\dfrac{(t-2)^{2}-2(t-2)-3}{t}=\\dfrac{t^{2}-6t+5}{t}=t+\\dfrac5t-6$.",
          "So $1/f = t+\\dfrac5t-6$ with $t=x+2\\in\\mathbb{R}\\setminus\\{0\\}$ (and $t\\ne1,5$, the poles of $f$, which correspond to $1/f=0$). For $t>0$, $t+\\frac5t\\ge2\\sqrt5$ by AM–GM, so $1/f\\ge2\\sqrt5-6$; for $t<0$, $t+\\frac5t\\le-2\\sqrt5$, so $1/f\\le-2\\sqrt5-6$. Thus the value $w=1/f$ ranges over $(-\\infty,\\,-2\\sqrt5-6\\,]\\cup[\\,2\\sqrt5-6,\\,\\infty)$, plus $w=0$ (the asymptote, from $t=1,5$).",
          "Invert to recover $y=f=1/w$. The two extreme reciprocals give $y=\\dfrac1{2\\sqrt5-6}=\\dfrac{2\\sqrt5+6}{(2\\sqrt5)^2-36}=\\dfrac{2\\sqrt5+6}{-16}=\\dfrac{-3-\\sqrt5}{8}$ and $y=\\dfrac1{-2\\sqrt5-6}=\\dfrac{-3+\\sqrt5}{8}$. Since $w$ omits the open interval $(-2\\sqrt5-6,\\,2\\sqrt5-6)$ around the unattainable-region, the reciprocal map sends the attained $w$-rays exactly onto $y\\le\\frac{-3-\\sqrt5}{8}$ and $y\\ge\\frac{-3+\\sqrt5}{8}$, with the AM–GM equalities ($t=\\sqrt5$ and $t=-\\sqrt5$, i.e. $x=-2\\pm\\sqrt5$) attaining the endpoints.",
          "Finally $w=0$ maps to $y=0$ being attained directly (at $x=-2$, where $t=0$ is not the case — rather $f(-2)=0$ comes from the numerator vanishing). Assembling: $\\operatorname{ran}(f)=\\boxed{\\mathbb{R}\\setminus\\left(\\dfrac{-3-\\sqrt5}{8},\\ \\dfrac{-3+\\sqrt5}{8}\\right)}$, endpoints attained at $x=-2\\pm\\sqrt5$, and $0$ in the range."
        ]
      }
    ],
    "remark": "Insight: for a quadratic-over-quadratic whose denominator has no real root, the cleared equation's discriminant is a downward parabola in $y$ and ``$\\Delta\\ge0$'' carves out the bounded interval that is the range — the picture students internalise. The instant the denominator acquires two real roots (genuine poles), the leading coefficient of $\\Delta(y)$ becomes the denominator's own positive discriminant, the parabola flips to open upward, and ``$\\Delta\\ge0$'' now describes two rays — so the discriminant's root-interval becomes the one band the function cannot reach. The geometry of the range and the algebra of the discriminant trade places. Three further traps cluster at the boundary: (i) the degenerate $y=0$ row, invisible to the discriminant because that step divides by the leading coefficient $y$, must be checked by hand — and here it is attained, so the horizontal asymptote is in the range (the numerator $x+2$ has a real zero in the domain); (ii) the band is open, its endpoints $\\frac{-3\\pm\\sqrt5}{8}$ being the attained local extrema $f(-2\\pm\\sqrt5)$; (iii) the reciprocal route reveals the hidden $t+5/t$ amplitude, where the AM–GM minimum $2\\sqrt5$ is exactly what pins the gap-width. The discipline a top ranker must drill: before quoting ``range $=$ interval between the discriminant roots,'' read the sign of the $y^{2}$-coefficient, and audit the degenerate $y$ where the quadratic silently degrades to a linear equation."
  },
  {
    "theme": "rangefraction",
    "themeLabel": "Range via the Discriminant",
    "title": "The Broken Domain",
    "difficulty": 5,
    "task": "Find",
    "tags": [
      "range",
      "discriminant",
      "denominator zeros",
      "gap in range",
      "two rays"
    ],
    "statement": "The denominator of \\[ h(x)=\\frac{x^{2}-4x-4}{x^{2}-4x} \\] vanishes at $x=0$ and $x=4$, which are excluded from the domain. Find the range of $h$ over its natural domain $\\mathbb{R}\\setminus\\{0,4\\}$.",
    "answer": "The range is $(-\\infty,\\,1)\\cup[2,\\,\\infty)$.",
    "trap": "Applying the discriminant condition gives $(y-1)(y-2)\\ge 0$, i.e. $y\\le 1$ or $y\\ge 2$, and one is tempted to include $y=1$ as an endpoint. But $y=1$ is exactly the value that annihilates the $x^2$ coefficient: the equation reduces to $-4=0$, impossible. So $y=1$ is excluded even though the discriminant is $0$ there — the gap is $[1,2)$, not $(1,2)$.",
    "solutions": [
      {
        "name": "Discriminant with degenerate value",
        "steps": [
          "Set $y(x^2-4x)=x^2-4x-4$: $(y-1)x^2-4(y-1)x+4=0$.",
          "Case $y=1$: the equation becomes $4=0$, impossible, so $y=1$ is NOT in the range.",
          "Case $y\\ne1$: divide by $(y-1)$: $x^2-4x+\\frac{4}{y-1}=0$; real $x$ needs $16-\\frac{16}{y-1}\\ge0$.",
          "This gives $1-\\frac{1}{y-1}\\ge0\\Rightarrow\\frac{y-2}{y-1}\\ge0\\Rightarrow y<1\\text{ or }y\\ge2$.",
          "Must also ensure the real root is not the forbidden $x=0$ or $x=4$: substituting $x=0$ or $x=4$ into $h$ requires the numerator $-4=0$, never true, so no attained $y$ comes from those points — no extra exclusions.",
          "Range $=\\boxed{(-\\infty,1)\\cup[2,\\infty)}$; note $y=2$ is attained ($x^2-4x+4=0\\Rightarrow x=2$)."
        ]
      },
      {
        "name": "Substitution $u=x^2-4x$",
        "steps": [
          "Let $u=x^2-4x=(x-2)^2-4$, so $u$ ranges over $[-4,\\infty)$, and $u=0$ is excluded (it gives $x=0,4$).",
          "Then $h=\\frac{u-4}{u}=1-\\frac4u$ with $u\\in[-4,0)\\cup(0,\\infty)$.",
          "For $u\\in[-4,0)$: $\\frac4u\\in(-\\infty,-1]$, so $h=1-\\frac4u\\in[2,\\infty)$.",
          "For $u\\in(0,\\infty)$: $\\frac4u\\in(0,\\infty)$, so $h=1-\\frac4u\\in(-\\infty,1)$.",
          "Union: $\\boxed{(-\\infty,1)\\cup[2,\\infty)}$ — the value $1$ (limit as $u\\to\\infty$) is never reached."
        ]
      }
    ],
    "remark": "Insight: when the denominator genuinely vanishes somewhere, the range typically becomes two rays with a gap. The degenerate value $y=1$ doubles as both the leading-coefficient-zero AND the horizontal asymptote, and it sits at the open end of the gap — a perfect storm of the two classic traps."
  },
  {
    "theme": "rangefraction",
    "themeLabel": "Range via the Discriminant",
    "title": "The Gap Between the Rails Is Closed on One Side Only",
    "difficulty": 5,
    "task": "Count",
    "tags": [
      "range",
      "discriminant",
      "two-rays",
      "integer-count",
      "asymptote",
      "endpoint-attainment"
    ],
    "statement": "Let \\[ f(x)=\\frac{x^{2}-6x-9}{x^{2}-6x+8},\\qquad x\\in\\mathbb{R}\\setminus\\{2,4\\}, \\] the natural domain (the two points where the denominator vanishes are excluded). \\\\ Because the denominator $x^{2}-6x+8=(x-2)(x-4)$ has real roots, the range of $f$ is not an interval — it is a union of two unbounded rays separated by a gap. \\\\ Determine how many integers fail to lie in the range of $f$ — i.e. the number of integers $k$ for which the equation $f(x)=k$ has no real solution. You must justify both that the two rays capture every sufficiently large and every sufficiently small integer, and exactly which integers sit in the gap, deciding with care whether each of the two gap-edges is itself attained.",
    "answer": "Set $y=f(x)$ and clear denominators: $y(x^{2}-6x+8)=x^{2}-6x-9$, i.e. \\[ (y-1)x^{2}-6(y-1)x+(8y+9)=0. \\] For $y\\neq1$ this is a genuine quadratic in $x$, which has a real root iff its discriminant is nonnegative: \\[ \\Delta=36(y-1)^{2}-4(y-1)(8y+9)=4(y-1)\\bigl[9(y-1)-(8y+9)\\bigr]=4(y-1)(y-18). \\] Since the coefficient of $y^{2}$ in $4(y-1)(y-18)$ is positive, $\\Delta\\ge0\\iff y\\le1\\ \\text{or}\\ y\\ge18$. \\\\ The two gap-edges behave oppositely. \\\\ $\\bullet$ Upper edge $y=18$ is attained. Here $\\Delta=0$ and $y-1=17\\neq0$, so the quadratic has a genuine double root; indeed $f(x)=18\\iff x^{2}-6x-9=18(x^{2}-6x+8)\\iff -17(x-3)^{2}=0\\iff x=3$, and $x=3$ is in the domain ($(3-2)(3-4)=-1\\neq0$). So $18\\in\\operatorname{ran}f$. \\\\ $\\bullet$ Lower edge $y=1$ is NOT attained. At $y=1$ the leading coefficient $y-1$ vanishes, so the equation degenerates from quadratic to $f(x)=1\\iff x^{2}-6x-9=x^{2}-6x+8\\iff -9=8$, impossible. The value $1$ is the horizontal asymptote, approached but never reached. \\\\ Therefore \\[ \\operatorname{ran}f=(-\\infty,\\,1)\\ \\cup\\ [\\,18,\\,\\infty). \\] Counting the missing integers. Every integer $k\\le0$ lies in $(-\\infty,1)$ and every integer $k\\ge18$ lies in $[18,\\infty)$, so all of those are attained. The integers that are absent are exactly those in the gap that the rays do not cover: $k=1$ (the unattained asymptote) together with $k=2,3,\\dots,17$ (strictly inside the open gap). Note $k=18$ is present. Hence the missing integers are $\\{1,2,3,\\dots,17\\}$, and their count is \\[ \\boxed{17}. \\]",
    "trap": "The discriminant condition $\\Delta=4(y-1)(y-18)\\ge0$ tempts a solver to treat $y=1$ and $y=18$ symmetrically — both are roots of $\\Delta$, so both look like ``double-root'' values that are attained. A strong but hasty student writes the range as $(-\\infty,1]\\cup[18,\\infty)$, declares the gap to be the open interval $(1,18)$, counts the integers $2,3,\\dots,17$ inside it, and reports $\\mathbf{16}$. \\\\ The opposite slip gives $\\mathbf{18}$: a student who recalls ``the value a rational function misses is its horizontal asymptote'' may strip $y=1$ correctly but then, by a false symmetry reflex, also treat the other edge $y=18$ as an unreachable asymptote-type value and exclude it too, counting $\\{1,2,\\dots,18\\}$. \\\\ Both are wrong because the two edges are structurally different even though they are both roots of $\\Delta$. At $y=1$ the leading coefficient $(y-1)$ of the cleared equation vanishes: the quadratic collapses to an inconsistent linear (constant) equation, so $\\Delta=0$ there is an artifact of degeneration, not a genuine double root — $y=1$ is unattained. At $y=18$ the leading coefficient $(y-1)=17\\neq0$, so $\\Delta=0$ is an honest double root $x=3$ (and $3\\notin\\{2,4\\}$), so $y=18$ is attained. The only correct gap is $[1,18)$ — closed (excluded) at the asymptote end, half-open at the attained end — and exactly $17$ integers $\\{1,\\dots,17\\}$ are missing. Whether each $\\Delta=0$ root is attained must be tested individually by checking the degeneracy of the leading coefficient; it cannot be read off the symmetric look of $\\Delta$.",
    "solutions": [
      {
        "name": "Discriminant for real $x$, then audit each gap-edge for degeneracy",
        "steps": [
          "Put $y=f(x)$ and clear: $y(x^{2}-6x+8)=x^{2}-6x-9$, i.e. $(y-1)x^{2}-6(y-1)x+(8y+9)=0$. For $y\\neq1$ this is a quadratic in $x$; a real $x$ exists iff $\\Delta\\ge0$, where $\\Delta=36(y-1)^{2}-4(y-1)(8y+9)=4(y-1)\\bigl[9(y-1)-(8y+9)\\bigr]=4(y-1)(y-18)$.",
          "The coefficient of $y^{2}$ in $4(y-1)(y-18)$ is $4>0$, so the parabola $\\Delta(y)$ opens upward and $\\Delta\\ge0\\iff y\\le1$ or $y\\ge18$. This already shows the range is a union of two rays with a gap around $(1,18)$ — but the endpoints need individual scrutiny.",
          "Audit $y=18$: $\\Delta=0$ and the leading coefficient $y-1=17\\neq0$, so a genuine double root exists. Solving $f(x)=18$ gives $-17(x-3)^{2}=0$, i.e. $x=3$, and $(3-2)(3-4)=-1\\neq0$ so $x=3$ is in the domain. Hence $18$ is attained. Audit $y=1$: the leading coefficient $y-1=0$, so the equation degenerates to $-9=8$, impossible; $y=1$ (the horizontal asymptote) is never reached. Thus $\\operatorname{ran}f=(-\\infty,1)\\cup[18,\\infty)$.",
          "Every integer $\\le0$ lies in the lower ray and every integer $\\ge18$ in the upper ray, so they are all attained. The absent integers are precisely those in $[1,18)$: namely $1$ (asymptote) and $2,\\dots,17$, i.e. $\\{1,2,\\dots,17\\}$. Their count is $\\boxed{17}$."
        ]
      },
      {
        "name": "Single-variable reduction $t=x^{2}-6x$ collapses the function to a Mobius map",
        "steps": [
          "Both numerator and denominator depend on $x$ only through $t:=x^{2}-6x=(x-3)^{2}-9$. As $x$ ranges over $\\mathbb R$, $t$ ranges over $[-9,\\infty)$. The excluded points $x=2,4$ both give $t=4-12=-8$, and $t=-8$ arises only from $x\\in\\{2,4\\}$ (since $x^{2}-6x=-8\\iff(x-2)(x-4)=0$); so the admissible $t$-set is $[-9,\\infty)\\setminus\\{-8\\}$.",
          "Then $f=g(t)=\\dfrac{t-9}{t+8}$, a Mobius map with $g'(t)=\\dfrac{(t+8)-(t-9)}{(t+8)^{2}}=\\dfrac{17}{(t+8)^{2}}>0$, so $g$ is strictly increasing on each side of its pole $t=-8$.",
          "On $t\\in[-9,-8)$: $g$ increases from $g(-9)=\\dfrac{-18}{-1}=18$ (attained, at $t=-9\\Leftrightarrow x=3$) up toward $t\\to-8^{-}$ where $g\\to+\\infty$. This branch yields $[18,\\infty)$. On $t\\in(-8,\\infty)$: $g$ increases from $t\\to-8^{+}$ where $g\\to-\\infty$ up toward $t\\to+\\infty$ where $g\\to1^{-}$ (limit not attained). This branch yields $(-\\infty,1)$.",
          "Hence $\\operatorname{ran}f=(-\\infty,1)\\cup[18,\\infty)$. The integers it omits are exactly $1$ (the unattained limit), $2,\\dots,17$; the value $18$ is attained and all integers outside $[1,18)$ are attained. Count of missing integers $=\\boxed{17}$."
        ]
      },
      {
        "name": "Subtract the asymptote: a reciprocal-of-a-shifted-square form reads off both edges",
        "steps": [
          "Write $f(x)-1=\\dfrac{(x^{2}-6x-9)-(x^{2}-6x+8)}{x^{2}-6x+8}=\\dfrac{-17}{x^{2}-6x+8}=\\dfrac{-17}{(x-3)^{2}-1}$. Set $s=(x-3)^{2}\\in[0,\\infty)$; the domain exclusion $x\\in\\{2,4\\}$ is exactly $s=1$ (the pole), so $s\\in[0,\\infty)\\setminus\\{1\\}$, and $u:=f-1=\\dfrac{-17}{s-1}$.",
          "On $s\\in[0,1)$: $s-1\\in[-1,0)$, so $u=\\dfrac{-17}{s-1}>0$, decreasing-denominator gives $u$ from $u(0)=\\dfrac{-17}{-1}=17$ up to $+\\infty$ as $s\\to1^{-}$; thus $u\\in[17,\\infty)$, with $17$ attained at $s=0\\Leftrightarrow x=3$. On $s\\in(1,\\infty)$: $s-1>0$ so $u<0$, running from $-\\infty$ (as $s\\to1^{+}$) up to $0^{-}$ (as $s\\to\\infty$, never $0$); thus $u\\in(-\\infty,0)$.",
          "So $u=f-1\\in(-\\infty,0)\\cup[17,\\infty)$, and adding $1$ gives $\\operatorname{ran}f=(-\\infty,1)\\cup[18,\\infty)$. The edge $y=1$ corresponds to $u=0$, which is the unreached limit $\\big(u\\to0$ never equals $0\\big)$; the edge $y=18$ corresponds to $u=17$, genuinely attained at $x=3$.",
          "Therefore the integers absent from the range are $\\{1,2,\\dots,17\\}$ — the asymptote value $1$ plus the strictly interior gap integers $2,\\dots,17$, with $18$ present. The number of missing integers is $\\boxed{17}$."
        ]
      }
    ],
    "remark": "Insight: when the denominator of a $\\dfrac{\\text{quadratic}}{\\text{quadratic}}$ has real roots, the discriminant test $\\Delta(y)\\ge0$ flips sign-region: instead of a bounded interval you get the complement of an interval, a pair of rays. The whole difficulty is then concentrated at the two edges, and the discriminant $\\Delta(y)=4(y-1)(y-18)$ is dangerously symmetric — it gives no hint that its two roots are attained differently. The discriminator is the leading coefficient $(y-1)$ of the cleared equation: at $y=1$ it vanishes, so the quadratic degenerates to an inconsistent constant equation and $\\Delta=0$ is a degeneracy artifact (value unattained, this is exactly the horizontal asymptote); at $y=18$ it is nonzero, so $\\Delta=0$ is a real double root (value attained). A top ranker should reflexively, for each root of $\\Delta$, ask ``is the leading coefficient zero there?'' — the answer decides closed-vs-open at that rail. The clean reduction $f=\\frac{t-9}{t+8}$ with $t=(x-3)^2-9$ makes the asymmetry transparent: one rail is the Mobius map's finite value at the boundary of the $t$-range (attained), the other is its horizontal asymptote $t\\to\\infty$ (not attained). The integer count is genuinely two-part: prove the rays mop up all $|k|$ large, then count only the $17$ stragglers $\\{1,\\dots,17\\}$ trapped in the half-open gap $[1,18)$."
  },
  {
    "theme": "rangefraction",
    "themeLabel": "Range via the Discriminant",
    "title": "The Coefficient That Dies",
    "difficulty": 4,
    "task": "Determine",
    "tags": [
      "rangefraction",
      "discriminant",
      "degenerate-leading-coefficient",
      "closed-interval",
      "trap"
    ],
    "statement": "Determine, with proof, the exact range of \\[ f(x)=\\frac{x^{2}-3x+4}{x^{2}+3x+4}\\qquad(x\\in\\mathbb{R}), \\] and decide whether the value $y=1$ — at which the cross-multiplied equation loses its $x^{2}$ term — actually belongs to the range.",
    "answer": "The range is the closed interval $\\left[\\dfrac{1}{7},\\,7\\right]$. In particular $y=1$ does belong to the range (attained at $x=0$); it is an interior value, not an excluded one.",
    "trap": "Cross-multiplying gives $(y-1)x^{2}+3(y+1)x+4(y-1)=0$. The reflex is to declare $y=1$ inadmissible because the coefficient of $x^{2}$ vanishes there. But when $y=1$ the equation does not disappear — it degrades to the genuine linear equation $6x=0$, which has the real solution $x=0$. So $y=1$ is attained. A value where the leading coefficient dies is excluded only if the resulting linear equation is itself inconsistent; here it is not. (Compare: had the linear part also vanished with a nonzero constant, $y=1$ would be barred.)",
    "solutions": [
      {
        "name": "Discriminant in y, with the degenerate case handled separately",
        "steps": [
          "First note the denominator never vanishes: $x^{2}+3x+4$ has discriminant $9-16=-7<0$ and positive leading coefficient, so it is positive for all real $x$ and the natural domain is all of $\\mathbb{R}$.",
          "Set $y=f(x)$ and clear the denominator: $y(x^{2}+3x+4)=x^{2}-3x+4$, i.e. $(y-1)x^{2}+3(y+1)x+4(y-1)=0.$",
          "Degenerate case $y=1$: the equation becomes $6x=0$, giving the real root $x=0$. Hence $y=1$ is attained — keep it.",
          "Non-degenerate case $y\\ne 1$: a real $x$ exists iff the discriminant is $\\ge 0$. Compute $\\Delta=9(y+1)^{2}-16(y-1)^{2}=-(7y-1)(y-7).$",
          "Solve $-(7y-1)(y-7)\\ge 0$, i.e. $(7y-1)(y-7)\\le 0$, giving $\\tfrac17\\le y\\le 7$.",
          "Both endpoints are admissible: $y=\\tfrac17$ forces $x=2$ and $y=7$ forces $x=-2$ (the discriminant is zero, double root). Combining with the degenerate value $y=1$ (which already lies inside) the range is $\\boxed{\\left[\\tfrac17,\\,7\\right]}$."
        ]
      },
      {
        "name": "Split off the constant and reduce to a known kernel",
        "steps": [
          "Write $f(x)=\\dfrac{x^{2}+3x+4-6x}{x^{2}+3x+4}=1-\\dfrac{6x}{x^{2}+3x+4}.$",
          "So it suffices to find the range of $h(x)=\\dfrac{x}{x^{2}+3x+4}$. Put $y=h(x)$: $yx^{2}+(3y-1)x+4y=0$.",
          "Real $x$ exists iff $(3y-1)^{2}-16y^{2}\\ge0$, i.e. $-(7y-1)(y+1)\\ge0$, giving $-1\\le y\\le\\tfrac17$ (the degenerate $y=0$ gives $x=0$, already interior).",
          "Therefore $\\dfrac{6x}{x^{2}+3x+4}=6h(x)$ ranges over $[-6,\\tfrac67]$, and $f=1-6h$ ranges over $\\left[1-\\tfrac67,\\,1+6\\right]=\\left[\\tfrac17,\\,7\\right].$ The reflection $f=1-6h$ confirms $y=1$ (the image of $h=0$) sits inside."
        ]
      },
      {
        "name": "Calculus check on the endpoints",
        "steps": [
          "Differentiate: $f'(x)=\\dfrac{(2x-3)(x^{2}+3x+4)-(x^{2}-3x+4)(2x+3)}{(x^{2}+3x+4)^{2}}.$ The numerator simplifies to $6(x^{2}-4)=6(x-2)(x+2).$",
          "Critical points are $x=\\pm2$; since the denominator is always positive, $f$ increases then decreases then increases, with a local max at $x=-2$ and a local min at $x=2$.",
          "Evaluate: $f(-2)=\\dfrac{4+6+4}{4-6+4}=\\dfrac{14}{2}=7$ and $f(2)=\\dfrac{4-6+4}{4+6+4}=\\dfrac{2}{14}=\\tfrac17.$",
          "As $x\\to\\pm\\infty$, $f\\to1$, an interior value, so the global extremes are exactly $7$ and $\\tfrac17$; by continuity the range is the closed interval $\\left[\\tfrac17,\\,7\\right].$"
        ]
      }
    ],
    "remark": "The function is its own mirror: $f(x)\\cdot f(-x)=1$ because swapping $x\\mapsto-x$ interchanges numerator and denominator. That symmetry forces the range to be reciprocal-closed — if $r$ is attained so is $1/r$ — which is exactly why the endpoints $7$ and $\\tfrac17$ are reciprocals and the fixed value of the symmetry, $y=1$, lands dead-centre. The lesson on the trap is general: a $y$ that kills the quadratic's leading coefficient is excluded only when the leftover linear (or constant) equation has no solution, never automatically."
  },
  {
    "theme": "rangefraction",
    "themeLabel": "Range via the Discriminant",
    "title": "The Asymptote that Equals an Endpoint",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "range",
      "discriminant",
      "leading coefficient",
      "half-open interval",
      "double value"
    ],
    "statement": "Determine the exact range of \\[ q(x)=\\frac{2x^{2}+4x+9}{x^{2}+2x+3}\\qquad(x\\in\\mathbb{R}), \\] and state explicitly whether each endpoint is attained.",
    "answer": "The range is $\\left(2,\\,\\dfrac{7}{2}\\right]$: the value $\\dfrac72$ is attained (at $x=-1$) but $2$ is not.",
    "trap": "The discriminant inequality yields $2\\le y\\le\\tfrac72$, suggesting the closed interval $[2,\\tfrac72]$. But $y=2$ simultaneously (i) makes the $x^2$ coefficient vanish (collapsing the equation to $3=0$) and (ii) is a discriminant root. The coincidence means $2$ is the horizontal asymptote, approached but never attained — so the lower end is open.",
    "solutions": [
      {
        "name": "Discriminant with leading-coefficient audit",
        "steps": [
          "Denominator $x^2+2x+3=(x+1)^2+2>0$, so $q$ is defined on $\\mathbb{R}$.",
          "Clear: $(y-2)x^2+(2y-4)x+(3y-9)=0$.",
          "Case $y=2$: coefficients are $0,0,-3$, i.e. $-3=0$, impossible — so $2$ is NOT attained.",
          "Case $y\\ne2$: discriminant $(2y-4)^2-4(y-2)(3y-9)\\ge0$.",
          "Factor: $4(y-2)^2-12(y-2)(y-3)=-4(y-2)(2y-7)\\ge0\\Rightarrow 2\\le y\\le\\tfrac72$.",
          "Intersect with $y\\ne2$: range $=\\left(2,\\tfrac72\\right]$; $y=\\tfrac72$ gives $\\tfrac32(x+1)^2=0\\Rightarrow x=-1$, attained. Answer $\\boxed{(2,\\tfrac72]}$."
        ]
      },
      {
        "name": "Constant plus proper fraction",
        "steps": [
          "Divide: $q(x)=2+\\dfrac{(4x+9)-2(2x+3)}{x^2+2x+3}=2+\\dfrac{3}{x^2+2x+3}$.",
          "Let $d=x^2+2x+3=(x+1)^2+2\\in[2,\\infty)$.",
          "Then $\\dfrac{3}{d}\\in(0,\\tfrac32]$: at $d=2$ it is $\\tfrac32$ (max), and as $d\\to\\infty$ it $\\to 0^+$ but never $0$.",
          "So $q=2+\\frac3d\\in(2,\\tfrac72]$, confirming $\\boxed{(2,\\tfrac72]}$ with $2$ excluded and $\\tfrac72$ included."
        ]
      }
    ],
    "remark": "Insight: when the leading-coefficient-zero value coincides with a discriminant root, the algebra warns you twice that the endpoint is special. Rewriting as 'constant $+\\frac{c}{\\text{positive quadratic}}$' makes the open/closed status of each end instantly visible."
  },
  {
    "theme": "rangefraction",
    "themeLabel": "Range via the Discriminant",
    "title": "Two Knobs, One Tether",
    "difficulty": 5,
    "task": "Find",
    "tags": [
      "range",
      "discriminant",
      "two-variable",
      "cauchy-schwarz",
      "auxiliary-angle",
      "attained-extremum"
    ],
    "statement": "Let \\[ f(x,y)=\\frac{x+2y}{1+x^{2}+y^{2}},\\qquad (x,y)\\in\\mathbb{R}^{2}. \\] Find, with exact bounds, the range of $f$ as $(x,y)$ ranges over the whole plane. State precisely whether each bound is attained, and if so, exhibit a point where it is reached.",
    "answer": "The range is the closed interval \\[ \\boxed{\\;\\operatorname{ran}(f)=\\left[-\\frac{\\sqrt5}{2},\\ \\frac{\\sqrt5}{2}\\right]\\;} \\] and both endpoints are attained. The maximum $\\frac{\\sqrt5}{2}$ is reached at $\\left(\\tfrac{1}{\\sqrt5},\\tfrac{2}{\\sqrt5}\\right)$ and the minimum $-\\frac{\\sqrt5}{2}$ at $\\left(-\\tfrac{1}{\\sqrt5},-\\tfrac{2}{\\sqrt5}\\right)$. \\\\ The number $k$ is a value of $f$ iff $k(1+x^{2}+y^{2})=x+2y$ has a real solution $(x,y)$. Reading this as a quadratic in $x$, $kx^{2}-x+\\bigl(ky^{2}-2y+k\\bigr)=0$, a real $x$ exists for a given $y$ iff $\\Delta_x=1-4k\\bigl(ky^{2}-2y+k\\bigr)\\ge0$. We need this to hold for some real $y$; for $k>0$ the quantity $4k\\bigl(ky^{2}-2y+k\\bigr)$ is smallest at $y=\\tfrac1k$, where it equals $4k^{2}-4$, so a feasible $y$ exists iff $4k^{2}-4\\le1$, i.e. $k^{2}\\le\\tfrac54$. By the odd symmetry $f(-x,-y)=-f(x,y)$ the same bound governs $k<0$, and $k=0$ is plainly attained. Hence $|k|\\le\\frac{\\sqrt5}{2}$, with equality forced at the two listed points (where $\\Delta_x=0$ gives a double root). Both bounds are genuinely achieved, not merely approached.",
    "trap": "The fatal shortcut is to introduce the two ``natural'' aggregates $s=x+2y$ (numerator) and $q=x^{2}+y^{2}$ (the moving part of the denominator), write $f=\\dfrac{s}{1+q}$, and then treat $s$ and $q$ as independent dials — letting $q\\to0^{+}$ while $s$ stays large to make $f$ blow up, and concluding the range is all of $\\mathbb{R}$ (unbounded, no finite extremum). This is wrong because $s$ and $q$ are tethered: for the value $s=x+2y$ to be large, the point cannot sit near the origin, so $q$ cannot be small. The exact leash is Cauchy--Schwarz, $s^{2}=(x+2y)^{2}\\le(1^{2}+2^{2})(x^{2}+y^{2})=5q$, i.e. $q\\ge \\tfrac{s^{2}}{5}$; you may not pick $q=0$ with $s\\neq0$. The naive ``unbounded'' answer even predicts attainable values like $f=\\tfrac32$, yet substituting $f=\\tfrac32$ leaves $-9y^{2}+12y-8$ under a square root, whose discriminant $144-288<0$ makes it never real — a concrete refutation. A second, subtler trap: a solver who does respect the coupling may still stop at the open bound, reporting $\\left(-\\tfrac{\\sqrt5}{2},\\tfrac{\\sqrt5}{2}\\right)$ and claiming the extremes are only approached; in fact the $\\Delta=0$ case yields an honest double root, so both endpoints are attained and the interval is closed.",
    "solutions": [
      {
        "name": "Nested discriminant: quadratic in $x$, then feasibility in $y$",
        "steps": [
          "A real number $k$ lies in the range iff $f(x,y)=k$ has a real solution, i.e. $k(1+x^{2}+y^{2})=x+2y$. Group as a quadratic in $x$ with $y$ a parameter: $kx^{2}-x+\\bigl(ky^{2}-2y+k\\bigr)=0$. (The degenerate case $k=0$ gives $x+2y=0$, solvable, so $0$ is attained; assume $k\\neq0$ henceforth.)",
          "For a fixed $y$, a real $x$ exists iff $\\Delta_x=(-1)^{2}-4k\\bigl(ky^{2}-2y+k\\bigr)\\ge0$. We need this to be satisfiable for some real $y$, i.e. we need $\\min_{y}\\,4k\\bigl(ky^{2}-2y+k\\bigr)\\le1$.",
          "Take $k>0$. The inner quadratic $ky^{2}-2y+k$ is minimized at $y=\\tfrac1k$ with value $k-\\tfrac1k$, so $\\min_y 4k(ky^{2}-2y+k)=4k\\bigl(k-\\tfrac1k\\bigr)=4k^{2}-4$. The feasibility condition $4k^{2}-4\\le1$ gives $k^{2}\\le\\tfrac54$, i.e. $0<k\\le\\tfrac{\\sqrt5}{2}$.",
          "By the odd symmetry $f(-x,-y)=-f(x,y)$, the negative values fill $[-\\tfrac{\\sqrt5}{2},0)$ symmetrically. At $k=\\tfrac{\\sqrt5}{2}$ both inequalities are tight: $y=\\tfrac1k=\\tfrac{2}{\\sqrt5}$ and then $\\Delta_x=0$ gives the double root $x=\\tfrac{1}{2k}=\\tfrac{1}{\\sqrt5}$. So the maximum is achieved at $\\bigl(\\tfrac1{\\sqrt5},\\tfrac2{\\sqrt5}\\bigr)$ and, by symmetry, the minimum at $\\bigl(-\\tfrac1{\\sqrt5},-\\tfrac2{\\sqrt5}\\bigr)$. Hence $\\operatorname{ran}(f)=\\boxed{\\left[-\\tfrac{\\sqrt5}{2},\\,\\tfrac{\\sqrt5}{2}\\right]}$, endpoints attained."
        ]
      },
      {
        "name": "Polar / auxiliary-angle: collapse the direction, optimize the radius",
        "steps": [
          "Write $x=r\\cos\\theta,\\ y=r\\sin\\theta$ with $r\\ge0$. Then $x+2y=r(\\cos\\theta+2\\sin\\theta)=r\\sqrt5\\,\\sin(\\theta+\\varphi)$ by the auxiliary-angle (harmonic) form, where $\\tan\\varphi=\\tfrac12$; the amplitude is $\\sqrt{1^{2}+2^{2}}=\\sqrt5$. Thus $f=\\dfrac{r\\sqrt5\\,\\sin(\\theta+\\varphi)}{1+r^{2}}$.",
          "For fixed $r$, the angular factor $\\sin(\\theta+\\varphi)$ ranges over $[-1,1]$ and is hit, so the extreme over $\\theta$ is $\\pm\\dfrac{\\sqrt5\\,r}{1+r^{2}}$. It remains to maximize $h(r)=\\dfrac{\\sqrt5\\,r}{1+r^{2}}$ for $r\\ge0$.",
          "By AM--GM, $1+r^{2}\\ge2r$, so $h(r)=\\dfrac{\\sqrt5\\,r}{1+r^{2}}\\le\\dfrac{\\sqrt5\\,r}{2r}=\\dfrac{\\sqrt5}{2}$, with equality iff $r=1$. Hence $|f|\\le\\tfrac{\\sqrt5}{2}$, and the bound is reached at $r=1,\\ \\sin(\\theta+\\varphi)=1$, i.e. the unit vector along $(1,2)$: $(x,y)=\\bigl(\\tfrac1{\\sqrt5},\\tfrac2{\\sqrt5}\\bigr)$.",
          "The two independent optimizations (angle hits $\\pm1$, radius hits $r=1$) are simultaneously achievable, so every value between is swept out by continuity. Therefore $\\operatorname{ran}(f)=\\boxed{\\left[-\\tfrac{\\sqrt5}{2},\\,\\tfrac{\\sqrt5}{2}\\right]}$ with both endpoints attained — the auxiliary-angle route lands on the same closed interval as the discriminant."
        ]
      },
      {
        "name": "Cauchy--Schwarz tether, then a single-variable rational range",
        "steps": [
          "Set $s=x+2y$ and $q=x^{2}+y^{2}$, so $f=\\dfrac{s}{1+q}$. The genuine constraint linking them is Cauchy--Schwarz: $s^{2}=(x\\cdot1+y\\cdot2)^{2}\\le(1^{2}+2^{2})(x^{2}+y^{2})=5q$, hence $q\\ge\\tfrac{s^{2}}{5}$, with equality iff $(x,y)\\parallel(1,2)$. This is the leash the trap ignores.",
          "Fix $s$. To push $f=\\dfrac{s}{1+q}$ as large (for $s>0$) as possible we take $q$ as small as allowed, namely $q=\\tfrac{s^{2}}{5}$, giving the sharp envelope $f\\le\\dfrac{s}{1+s^{2}/5}=\\dfrac{5s}{5+s^{2}}$. (Any larger $q$ only shrinks $f$.)",
          "Now it is one variable: maximize $g(s)=\\dfrac{5s}{5+s^{2}}$. By AM--GM, $5+s^{2}\\ge2\\sqrt5\\,s$ for $s>0$, so $g(s)\\le\\dfrac{5s}{2\\sqrt5\\,s}=\\dfrac{\\sqrt5}{2}$, equality at $s=\\sqrt5$. Equivalently, $\\dfrac{\\sqrt5}{2}-g(s)=\\dfrac{(s-\\sqrt5)^{2}}{2(5+s^{2})}\\ge0$ pins the maximum and shows it is attained.",
          "Equality needs both $q=\\tfrac{s^{2}}{5}$ (so $(x,y)\\parallel(1,2)$) and $s=\\sqrt5$, forcing $(x,y)=\\bigl(\\tfrac1{\\sqrt5},\\tfrac2{\\sqrt5}\\bigr)$. The odd symmetry gives the minimum. So $\\operatorname{ran}(f)=\\boxed{\\left[-\\tfrac{\\sqrt5}{2},\\,\\tfrac{\\sqrt5}{2}\\right]}$, endpoints attained — and the perfect-square identity shows precisely why $f=\\tfrac32$ (the trap's phantom value) is impossible."
        ]
      }
    ],
    "remark": "Insight: the whole problem is a study in a hidden constraint. Reducing a two-variable range to ``numerator $s$ over denominator $1+q$'' is correct algebra but a trap if you forget that $s$ and $q$ are not free knobs — they are tethered by Cauchy--Schwarz, $s^{2}\\le5q$. The discriminant method enforces that leash automatically: making $f=k$ a quadratic in $x$ and then demanding the inner discriminant be nonnegative for some $y$ is exactly the statement ``the level set $f=k$ meets $\\mathbb{R}^{2}$,'' and the nested-discriminant feasibility $4k^{2}-4\\le1$ encodes the coupling without ever naming it. Three independent roads — nested discriminant, auxiliary-angle amplitude $\\sqrt{1^{2}+2^{2}}=\\sqrt5$, and Cauchy--Schwarz with its equality case $(x,y)\\parallel(1,2)$ — converge on the identical closed interval $\\bigl[-\\tfrac{\\sqrt5}{2},\\tfrac{\\sqrt5}{2}\\bigr]$, and all three agree the bounds are attained, because the extremal $\\Delta=0$ delivers an honest double root rather than a limit. The general lesson for a top ranker: for $\\dfrac{a x+b y}{1+x^{2}+y^{2}}$ the extreme value is $\\tfrac12\\sqrt{a^{2}+b^{2}}$, attained on the unit-length scaling of the direction $(a,b)$ — the amplitude of the numerator and the AM--GM optimum $1+r^{2}\\ge2r$ of the denominator multiply to the clean factor $\\tfrac12$."
  },
  {
    "theme": "rangefraction",
    "themeLabel": "Range via the Discriminant",
    "title": "When the Range Stays Finite",
    "difficulty": 5,
    "task": "Find all",
    "tags": [
      "range",
      "discriminant",
      "parameter",
      "bounded",
      "denominator"
    ],
    "statement": "For a real parameter $k$, consider \\[ f_k(x)=\\frac{x^{2}+x+1}{x^{2}+x+k}. \\] Find all real values of $k$ for which the range of $f_k$ (over its natural domain) is a bounded subset of $\\mathbb{R}$.",
    "answer": "The range is bounded if and only if $k>\\dfrac{1}{4}$.",
    "trap": "Attacking the range directly with the discriminant in $y$ and getting lost in $k$-dependent inequalities. The clean criterion is structural: the fraction is bounded precisely when the denominator never vanishes (no vertical asymptote), i.e. when $x^2+x+k>0$ for all $x$, which is $1-4k<0$. A second trap: writing $k\\ge\\tfrac14$ — at $k=\\tfrac14$ the denominator has the double root $x=-\\tfrac12$, where the numerator is $\\tfrac34\\ne0$, so $f_k$ blows up and the range is unbounded; $k=\\tfrac14$ must be excluded.",
    "solutions": [
      {
        "name": "Boundedness via the denominator",
        "steps": [
          "Write $f_k(x)=1+\\dfrac{1-k}{x^2+x+k}$ (since numerator $-$ denominator $=1-k$).",
          "If $1-k=0$ ($k=1$) then $f_k\\equiv1$, range $\\{1\\}$, bounded.",
          "If $k>\\tfrac14$, the denominator $x^2+x+k=(x+\\tfrac12)^2+(k-\\tfrac14)\\ge k-\\tfrac14>0$ is bounded below by a positive number, so $\\frac{1-k}{x^2+x+k}$ is bounded and tends to $0$ at infinity; hence $f_k$ is bounded.",
          "If $k\\le\\tfrac14$, the denominator has a real zero $x_0$ with numerator $x_0^2+x_0+1=(x_0^2+x_0+k)+(1-k)=1-k\\ne0$ (as $k\\le\\tfrac14<1$), so $f_k(x)\\to\\pm\\infty$ near $x_0$ — unbounded.",
          "Therefore the range is bounded iff $\\boxed{k>\\tfrac14}$."
        ]
      },
      {
        "name": "Discriminant of the denominator",
        "steps": [
          "A quadratic-over-quadratic with equal-degree numerator and denominator is bounded iff the denominator has no real root (no vertical asymptote) and the numerator does not cancel it.",
          "Denominator $x^2+x+k$ has no real root iff its discriminant $1-4k<0$, i.e. $k>\\tfrac14$.",
          "For $k>\\tfrac14$ the denominator is strictly positive, so $f_k$ is continuous on all of $\\mathbb{R}$ and tends to the finite limit $1$ at $\\pm\\infty$; a continuous function with finite limits is bounded.",
          "For $k\\le\\tfrac14$ a real root of the denominator exists and (since $1-k\\ne0$) is not a root of the numerator, producing an unbounded range.",
          "Hence boundedness holds exactly for $\\boxed{k>\\tfrac14}$."
        ]
      }
    ],
    "remark": "Insight: for equal-degree rational functions the boundedness question is decided entirely by the denominator's discriminant, not the full range computation. The decomposition $f_k=1+\\frac{1-k}{x^2+x+k}$ exposes both the horizontal asymptote ($y=1$) and the source of any blow-up in one line."
  },
  {
    "theme": "maxmin",
    "themeLabel": "Maxima & Minima",
    "title": "The Coefficient on a Slider",
    "difficulty": 5,
    "task": "Find",
    "tags": [
      "sliding-coefficient",
      "piecewise-minimum",
      "vertex-window",
      "monotonicity",
      "level-set"
    ],
    "statement": "For a real parameter $a>0$, let \\[ M(a)=\\min_{1\\le x\\le 4}\\bigl(a x^{2}-4x+1\\bigr). \\] Here the window $[1,4]$ is fixed but the leading coefficient $a$ slides, so which feature of the parabola delivers the minimum (a window endpoint, or the vertex) depends on $a$. Assemble $M(a)$ as an explicit piecewise function of $a$ on $(0,\\infty)$, and hence find all values of $a>0$ for which $M(a)=-3$.",
    "answer": "The minimum is governed by the vertex $x^{*}=\\dfrac{2}{a}$, which lies inside $[1,4]$ exactly when $\\tfrac12\\le a\\le 2$. Thus \\[ \\boxed{\\,M(a)=\\begin{cases}16a-15, & 0<a<\\tfrac12 \\quad(\\text{min at }x=4),\\\\ 1-\\dfrac{4}{a}, & \\tfrac12\\le a\\le 2 \\quad(\\text{min at the vertex}),\\\\ a-3, & a>2 \\quad(\\text{min at }x=1),\\end{cases}\\,} \\] and the equation $M(a)=-3$ has the unique solution \\[ \\boxed{\\,a=1\\,}, \\] at which the minimum value $-3$ is attained at $x=2$. Each branch is strictly increasing (slopes $16,\\ 4/a^{2},\\ 1$) and the pieces agree at the joins $a=\\tfrac12$ (value $-7$) and $a=2$ (value $-1$), so $M$ is a continuous, strictly increasing bijection of $(0,\\infty)$ onto $(-15,\\infty)$; the level $-3\\in(-7,-1)$ falls in the vertex regime, giving $1-\\tfrac4a=-3\\Rightarrow a=1$.",
    "trap": "The seductive shortcut is to decide once where the minimum sits and reuse that location for every $a$. A student who notes that $f(1)=a-3$ and $f(4)=16a-15$ and declares ``the minimum of an upward parabola on $[1,4]$ is the smaller endpoint'' will solve $16a-15=-3$, get the tidy $a=\\tfrac34$, and stop. But $a=\\tfrac34>\\tfrac12$ pushes the vertex $x^{*}=2/a=\\tfrac83$ inside the window, so the true minimum there is the vertex value $1-\\tfrac{4}{3/4}=-\\tfrac{13}{3}\\approx-4.33$, not $-3$ — the candidate $a=\\tfrac34$ is a phantom that violates its own regime assumption. The mirror error solves the other endpoint, $a-3=-3\\Rightarrow a=0$, which is not even a parabola (and $a>0$ is required). The hidden case is that as $a$ slides, the vertex $2/a$ migrates across the window, so the formula for $M(a)$ switches branches; the level $-3$ lives strictly between the join values $-7$ and $-1$, i.e. squarely in the vertex branch, and only $1-\\tfrac4a=-3$ is admissible. Each algebraic root must be checked against the window-position inequality that produced its branch, or you accept a value the branch cannot legally take.",
    "solutions": [
      {
        "name": "Complete the square and track the vertex across the window",
        "steps": [
          "Since $a>0$ the parabola $f(x)=ax^{2}-4x+1$ opens upward with vertex at $x^{*}=\\dfrac{-(-4)}{2a}=\\dfrac{2}{a}$ and least value $f(x^{*})=1-\\dfrac{16}{4a}=1-\\dfrac{4}{a}$. On the fixed window $[1,4]$ the minimum is the vertex value when $x^{*}\\in[1,4]$, otherwise the nearer endpoint.",
          "Locate the vertex: $1\\le \\tfrac{2}{a}\\le 4 \\iff \\tfrac12\\le a\\le 2$. For $a<\\tfrac12$ the vertex sits to the right of the window ($x^{*}>4$), so $f$ is decreasing on $[1,4]$ and the minimum is $f(4)=16a-15$. For $a>2$ the vertex sits to the left ($x^{*}<1$), so $f$ is increasing and the minimum is $f(1)=a-3$. This gives the three-branch $M(a)$ above; the joins check out: $16\\cdot\\tfrac12-15=-7=1-\\tfrac{4}{1/2}$ and $1-\\tfrac42=-1=2-3$.",
          "Solve $M(a)=-3$ branch by branch, keeping each root only if it obeys its branch's $a$-range. Branch $16a-15=-3\\Rightarrow a=\\tfrac34$, but $\\tfrac34\\not<\\tfrac12$ — reject. Branch $a-3=-3\\Rightarrow a=0$, but $0\\not>2$ (and $a>0$ fails) — reject. Branch $1-\\tfrac4a=-3\\Rightarrow \\tfrac4a=4\\Rightarrow a=1$, and $1\\in[\\tfrac12,2]$ — accept.",
          "Hence the only admissible value is $\\boxed{a=1}$, where the minimum $-3$ is reached at the vertex $x^{*}=2$. (Indeed $f(2)=4-8+1=-3$.)"
        ]
      },
      {
        "name": "Monotonicity of $M$: lifting a positive-$x$ window forces a single crossing",
        "steps": [
          "On each branch differentiate in $a$: $\\dfrac{d}{da}(16a-15)=16>0$, $\\dfrac{d}{da}\\!\\left(1-\\tfrac4a\\right)=\\dfrac{4}{a^{2}}>0$, $\\dfrac{d}{da}(a-3)=1>0$. With the two joins continuous (values $-7$ at $a=\\tfrac12$ and $-1$ at $a=2$), $M$ is strictly increasing on $(0,\\infty)$. (Conceptually: for any fixed $x\\in[1,4]$ we have $x^{2}>0$, so $a\\mapsto ax^{2}-4x+1$ is increasing; the minimum of an increasing family is increasing.)",
          "A strictly increasing $M$ is injective, so $M(a)=-3$ has at most one root — there is no need to fear multiple solutions, but we must land in the correct branch. As $a$ ranges over $(0,\\infty)$, $M$ sweeps continuously from $\\lim_{a\\to0^{+}}(16a-15)=-15$ up to $+\\infty$, so $-3$ is hit exactly once.",
          "Read off the branch by comparing $-3$ with the join values: $-7<-3<-1$, the exact range of the middle (vertex) branch. So the solution satisfies $1-\\tfrac4a=-3$.",
          "Solving gives $a=1$, the unique root: $\\boxed{a=1}$. Monotonicity simultaneously kills the phantom $a=\\tfrac34$ — were it valid, $M$ would take the value $-3$ at two distinct points, contradicting injectivity."
        ]
      },
      {
        "name": "Level-set / tangency: when is $-3$ a minimum value on the window?",
        "steps": [
          "Saying the minimum of an upward parabola on $[1,4]$ equals $k$ in the interior regime means the horizontal line $y=k$ is tangent to the parabola at an interior point: $ax^{2}-4x+1=k$ has a double root. The discriminant condition is $16-4a(1-k)=0$, i.e. $a=\\dfrac{4}{1-k}$, with double root $x=\\dfrac{2}{a}$.",
          "This tangency is the genuine minimum only if the contact point lies in the window: $x=\\tfrac2a\\in[1,4]\\iff \\tfrac12\\le a\\le 2\\iff k\\in[-7,-1]$. For $k$ outside $[-7,-1]$ the minimum is instead an endpoint value, $16a-15$ (needs $k<-7$) or $a-3$ (needs $k>-1$).",
          "For the target $k=-3\\in[-7,-1]$ the tangency branch applies: $a=\\dfrac{4}{1-(-3)}=\\dfrac{4}{4}=1$, with contact at $x=\\tfrac21=2\\in[1,4]$. The two endpoint branches would demand $k<-7$ or $k>-1$, both false for $k=-3$, so they contribute no solution (their formal roots $a=\\tfrac34$, $a=0$ are exactly the rejected phantoms).",
          "Therefore $-3$ is attained as a window-minimum precisely when $\\boxed{a=1}$, matching the other two methods, and confirming the minimum is the vertex value at $x=2$."
        ]
      }
    ],
    "remark": "Insight: a sliding leading coefficient is subtler than a sliding vertex, because changing $a$ moves the vertex $x^{*}=2/a$ and reshapes the parabola at once. The single governing question is geometric — where does $2/a$ sit relative to $[1,4]$? — and it partitions $a$ into the three regimes whose formulas you must stitch together; only after the assembly does the algebra $1-\\tfrac4a=-3$ become legitimate. The deeper structural fact, worth internalising, is that over a window with $x>0$ the map $a\\mapsto M(a)$ is strictly increasing (each $ax^{2}$ term rises with $a$), so the level equation has a unique root and any second algebraic candidate is automatically a phantom living in the wrong branch. All three viewpoints — completing the square, monotonicity of the lower envelope, and the tangency/discriminant condition $a=\\tfrac{4}{1-k}$ validated by $x=\\tfrac2a\\in[1,4]$ — converge on $a=1$, and each independently exposes why $a=\\tfrac34$ is illegal: it would force the minimum onto an endpoint while the vertex still occupies the window."
  },
  {
    "theme": "maxmin",
    "themeLabel": "Maxima & Minima",
    "title": "The Vertex That Lives Off the Circle",
    "difficulty": 5,
    "task": "Find",
    "tags": [
      "constrained",
      "quadratic-in-disguise",
      "discriminant",
      "symmetric-functions",
      "attained-extremum",
      "am-gm"
    ],
    "statement": "Real numbers $x,y$ satisfy the constraint \\[ x^{2}+y^{2}=8. \\] Consider the expression \\[ E(x,y)=x^{4}+y^{4}+20\\,xy. \\] Find the maximum and the minimum value of $E$ over all real $(x,y)$ on the circle, and exhibit a point where each is reached. (Both extremes are genuinely attained, not merely approached.)",
    "answer": "Using $x^{4}+y^{4}=(x^{2}+y^{2})^{2}-2(xy)^{2}=64-2(xy)^{2}$, write everything in the single quantity $t:=xy$: \\[ E=64-2t^{2}+20t,\\qquad t=xy. \\] This is a downward parabola in $t$ with unconstrained vertex at $t=5$. But $t$ is not free: putting $s=x+y$, the constraint reads $s^{2}-2t=8$, so $s^{2}=8+2t$, and the reality of $x,y$ (they are the roots of $u^{2}-su+t=0$) forces the discriminant condition $s^{2}\\ge 4t$, i.e. $8+2t\\ge 4t\\Rightarrow t\\le 4$; together with $s^{2}=8+2t\\ge 0\\Rightarrow t\\ge -4$, the admissible band is \\[ t\\in[-4,\\,4]. \\] The vertex $t=5$ lies outside this band, so it is unreachable. On $[-4,4]$ the parabola $64-2t^{2}+20t$ is strictly increasing (the axis $t=5$ is to the right of the whole band), hence \\[ \\boxed{E_{\\max}=112\\ \\text{at } t=4\\ (x=y=2),\\qquad E_{\\min}=-48\\ \\text{at } t=-4\\ (x=2,\\,y=-2).} \\] At $t=4$: $s^{2}=16,\\ s=\\pm4$, double root $x=y=\\pm2$ (the discriminant is tight, $x=y$). At $t=-4$: $s^{2}=0,\\ s=0$, so $\\{x,y\\}=\\{2,-2\\}$. Check: $E(2,2)=16+16+80=112$ and $E(2,-2)=16+16-80=-48$.",
    "trap": "The expression collapses cleanly to $E=64-2t^{2}+20t$ with $t=xy$, and the irresistible reflex is to maximize this quadratic by calculus or completing the square: $-2t^{2}+20t=-2(t-5)^{2}+50$, vertex $t=5$, giving the ``maximum'' $E=64+50=\\mathbf{114}$. This is wrong. The variable $t=xy$ is caged by a hidden constraint that the reduction silently swallows: on $x^{2}+y^{2}=8$ the product $xy$ cannot exceed $4$, because $xy\\le\\frac{x^{2}+y^{2}}{2}=4$ (AM--GM), equivalently because $x,y$ are real roots of $u^{2}-su+t=0$ and so need $s^{2}\\ge 4t$, which with $s^{2}=8+2t$ forces $t\\le 4$. The vertex $t=5$ would require $xy=5$ with $x^{2}+y^{2}=8$ — impossible (it would need $(x-y)^{2}=8-10<0$). So $114$ is a phantom living off the circle; the genuine maximum is at the boundary of the feasible band, $t=4$, namely $E=112$. The trap is precisely a caged vertex driven by a discriminant, not by an interval window written into the problem: the cage $t\\le4$ is invisible until you demand that $x,y$ be real. A symmetric slip on the low side: a solver who does respect $t\\in[-4,4]$ might still grab the vertex-of-a-parabola instinct for the minimum and look near $t=5$ or mis-locate it; the minimum of the downward parabola over the band is at the far endpoint $t=-4$ (not the vertex), giving $-48$.",
    "solutions": [
      {
        "name": "Collapse to a quadratic in $t=xy$, then cage $t$ by the discriminant",
        "steps": [
          "Since $x^{4}+y^{4}=(x^{2}+y^{2})^{2}-2(xy)^{2}=8^{2}-2t^{2}=64-2t^{2}$ with $t:=xy$, the objective is a function of $t$ alone: $E=64-2t^{2}+20t$.",
          "Find the true range of $t$. With $s:=x+y$, the constraint $x^{2}+y^{2}=8$ becomes $s^{2}-2t=8$, so $s^{2}=8+2t$. Because $x,y$ are real, they are real roots of $u^{2}-su+t=0$, which requires $s^{2}\\ge 4t$: $8+2t\\ge 4t\\Rightarrow t\\le 4$. Also $s^{2}=8+2t\\ge 0\\Rightarrow t\\ge -4$. Hence $t\\in[-4,4]$, and both ends are achievable (the discriminant is then $\\ge0$).",
          "Optimize $\\varphi(t)=64-2t^{2}+20t$ on $[-4,4]$. Its axis is $t=5$, which lies to the right of the band, so $\\varphi$ is strictly increasing on $[-4,4]$. Therefore the maximum is at $t=4$ and the minimum at $t=-4$: $\\varphi(4)=64-32+80=112$ and $\\varphi(-4)=64-32-80=-48$.",
          "Recover the points. $t=4$ with $s^{2}=16$ gives $s=\\pm4$ and the double root $x=y=\\pm2$; $t=-4$ with $s^{2}=0$ gives $s=0$, i.e. $\\{x,y\\}=\\{2,-2\\}$. Thus $\\boxed{E_{\\max}=112}$ at $(2,2)$ and $\\boxed{E_{\\min}=-48}$ at $(2,-2)$. The naive vertex $t=5$ ($E=114$) is infeasible since $xy\\le4$."
        ]
      },
      {
        "name": "Lagrange multipliers — the genuine critical points, none at the phantom vertex",
        "steps": [
          "Set $\\nabla E=\\lambda\\nabla g$ with $g=x^{2}+y^{2}-8$: $\\;4x^{3}+20y=2\\lambda x$ and $4y^{3}+20x=2\\lambda y$. Subtract: $4(x^{3}-y^{3})+20(y-x)=2\\lambda(x-y)$, i.e. $(x-y)\\bigl[4(x^{2}+xy+y^{2})-20+2\\lambda\\bigr]=0$.",
          "Case $x=y$: the constraint gives $2x^{2}=8\\Rightarrow x=y=\\pm2$, where $E=16+16+20\\cdot4=112$. Adding the two stationarity equations instead and using $x^{2}+y^{2}=8$ leads, in the complementary branch, to $x=-y$: then $2x^{2}=8\\Rightarrow (x,y)=(2,-2)$ or $(-2,2)$, where $E=16+16+20\\cdot(-4)=-48$.",
          "These exhaust the real critical points on the (compact) circle, so by the extreme value theorem the largest critical value is the maximum and the smallest is the minimum: $E_{\\max}=112$, $E_{\\min}=-48$.",
          "No stationary point yields $114$; the closed-form $E=64-2(xy)^{2}+20xy$ would need $xy=5$, impossible on $x^{2}+y^{2}=8$. Hence $\\boxed{E_{\\max}=112,\\ E_{\\min}=-48}$, attained at $(\\pm2,\\pm2)$ and $(\\pm2,\\mp2)$ respectively."
        ]
      },
      {
        "name": "Trigonometric (double-angle) parametrization — one variable, honest endpoints",
        "steps": [
          "Parametrize the circle: $x=2\\sqrt2\\cos\\theta,\\ y=2\\sqrt2\\sin\\theta$. Then $xy=8\\cos\\theta\\sin\\theta=4\\sin2\\theta$, so $t=xy=4\\sin2\\theta$ ranges over $[-4,4]$ and attains both ends (at $2\\theta=\\tfrac\\pi2$ and $2\\theta=-\\tfrac\\pi2$) — this is the same band as the discriminant gives, now visibly closed.",
          "Substitute into $E=64-2t^{2}+20t=64-2(4\\sin2\\theta)^{2}+20(4\\sin2\\theta)=64-32\\sin^{2}2\\theta+80\\sin2\\theta$. Writing $w=\\sin2\\theta\\in[-1,1]$, $E=64-32w^{2}+80w$.",
          "On $w\\in[-1,1]$ the parabola $-32w^{2}+80w$ has axis $w=\\tfrac{80}{64}=1.25>1$, so it is increasing on $[-1,1]$: maximum at $w=1$, minimum at $w=-1$. Thus $E_{\\max}=64-32+80=112$ (at $\\sin2\\theta=1$, i.e. $\\theta=\\tfrac\\pi4$, giving $x=y=2$) and $E_{\\min}=64-32-80=-48$ (at $\\sin2\\theta=-1$, i.e. $\\theta=-\\tfrac\\pi4$, giving $(x,y)=(2,-2)$).",
          "The would-be vertex $w=1.25$ corresponds to $\\sin2\\theta=1.25$, which has no real $\\theta$ — the same phantom as $xy=5$. Hence $\\boxed{E_{\\max}=112,\\ E_{\\min}=-48}$, both genuinely attained."
        ]
      }
    ],
    "remark": "Insight: this is a ``caged vertex'' whose cage is invisible. Many extremum problems hand you a window like $x\\in[a,b]$; here the window on the true free variable $t=xy$ is manufactured by the reality of the roots — the discriminant condition $s^{2}\\ge4t$ on the auxiliary quadratic $u^{2}-su+t=0$, equivalently AM--GM $xy\\le\\tfrac{x^{2}+y^{2}}{2}=4$. The reduction $x^{4}+y^{4}=(x^{2}+y^{2})^{2}-2(xy)^{2}$ turns a degree-four problem into a clean parabola in $t$, but it also erases the link between $xy$ and reality, so a solver who optimizes the parabola in isolation lands on the vertex $t=5$ and the phantom value $114$. The cure that a top ranker internalizes: whenever you fold a constrained two-variable problem into one symmetric quantity ($s$ or $p$), immediately re-impose the discriminant band $s^{2}\\ge4p$ — it is the leash that the algebra silently dropped. Three independent routes agree: the discriminant band, Lagrange's genuine critical points, and the double-angle substitution $xy=4\\sin2\\theta$ all refuse to reach $114$ and pin the answers at $E_{\\max}=112$ (boundary $x=y$) and $E_{\\min}=-48$ (boundary $x=-y$). Notice the extra subtlety the parabola's downward shape injects: because the vertex lies beyond the right edge, the minimum sits at the far edge $t=-4$, not at the vertex — the usual ``min at the turning point'' instinct is wrong on both counts."
  },
  {
    "theme": "maxmin",
    "themeLabel": "Maxima & Minima",
    "title": "The Reluctant Reciprocal",
    "difficulty": 4,
    "task": "Determine",
    "tags": [
      "x plus c over x",
      "am-gm",
      "restricted domain",
      "reciprocal"
    ],
    "statement": "For $x$ in the interval $[1,6]$, let $h(x)=x+\\dfrac{9}{x}$. Determine both the least and the greatest values of $h$ on this interval.",
    "answer": "Least value $=6$ (at $x=3$); greatest value $=10$ (at $x=1$).",
    "trap": "Applying AM-GM to get the minimum $2\\sqrt{9}=6$ at $x=3$ and then declaring $6$ to be the ONLY extreme value, forgetting that on a closed interval the maximum is a separate endpoint computation. (One must also check $x=3\\in[1,6]$ before trusting AM-GM.)",
    "solutions": [
      {
        "name": "AM-GM for the floor, endpoints for the ceiling",
        "steps": [
          "By AM-GM, $x+\\frac{9}{x}\\ge 2\\sqrt{x\\cdot\\frac{9}{x}}=6$, with equality iff $x=\\frac{9}{x}$, i.e. $x=3$, which lies in $[1,6]$.",
          "So the least value is $6$ at $x=3$.",
          "The maximum on $[1,6]$ occurs at an endpoint: $h(1)=1+9=10$, $h(6)=6+\\frac{9}{6}=\\frac{15}{2}=7.5$.",
          "Thus greatest $=10$ at $x=1$; answer $\\boxed{\\min=6,\\ \\max=10}$."
        ]
      },
      {
        "name": "Calculus / monotonic pieces",
        "steps": [
          "$h'(x)=1-\\frac{9}{x^{2}}=0\\Rightarrow x=3$ (taking $x>0$).",
          "$h'<0$ on $(1,3)$ and $h'>0$ on $(3,6)$, so $x=3$ is a minimum: $h(3)=6$.",
          "The maximum is the larger endpoint value: $\\max\\{h(1),h(6)\\}=\\max\\{10,\\tfrac{15}{2}\\}=10$.",
          "Hence $\\boxed{\\min=6,\\ \\max=10}$."
        ]
      }
    ],
    "remark": "Insight: $x+c/x$ is U-shaped on $(0,\\infty)$ with minimum $2\\sqrt c$ at $x=\\sqrt c$. Because the branch toward $0$ blows up while the branch toward $\\infty$ rises only linearly, the curve is asymmetric, so on a closed interval the maximum is simply whichever endpoint gives the larger value of $h$ — compare $h(1)=10$ and $h(6)=7.5$ directly. (Distance from $\\sqrt c$ is NOT the test: here $6$ is actually farther from $3$ than $1$ is, yet the max sits at $1$.)"
  },
  {
    "theme": "maxmin",
    "themeLabel": "Maxima & Minima",
    "title": "The Drone That Refused the Middle",
    "difficulty": 4,
    "task": "Minimise",
    "tags": [
      "weighted-mean",
      "sum-of-squares",
      "variance-decomposition",
      "parallel-axis",
      "hidden-constraint",
      "quadratic-in-disguise"
    ],
    "statement": "Four ground sensors sit along a straight rail at positions $a_1=2,\\ a_2=5,\\ a_3=9,\\ a_4=14$ (kilometres). A relay drone hovering at position $x$ on the same rail incurs a total signal cost \\[ S(x)=4\\,(x-2)^2+3\\,(x-5)^2+2\\,(x-9)^2+1\\cdot(x-14)^2, \\] the coefficients $4,3,2,1$ being the sensors' (unequal) traffic weights. (a) Find the position $x^\\star$ that minimises $S$, and the minimum value $S(x^\\star)$; state explicitly which two sensors $x^\\star$ lies strictly between. (b) A new regulation now penalises the drone for straying from the depot at $c=7$ by adding a term $5\\,(x-7)^2$ to the cost, giving \\[ T(x)=S(x)+5\\,(x-7)^2. \\] Find the new minimising position and the new minimum value $T$, and explain — via the variance / parallel-axis structure — exactly why the optimum moves and by how much the floor of the cost rises.",
    "answer": "(a) Expanding, $S(x)=10x^2-110x+449$, a single upward parabola. Its vertex is at \\[ x^\\star=\\frac{110}{20}=\\frac{11}{2}=5.5,\\qquad S(x^\\star)=\\frac{293}{2}=146.5 . \\] Equivalently $x^\\star$ is the weighted mean $x^\\star=\\dfrac{\\sum w_i a_i}{\\sum w_i}=\\dfrac{4\\cdot2+3\\cdot5+2\\cdot9+1\\cdot14}{4+3+2+1}=\\dfrac{55}{10}=\\dfrac{11}{2}$. It lies strictly between sensors $a_2=5$ and $a_3=9$ — it is not a sensor position, not the median $7$, and not the plain mean $\\tfrac{2+5+9+14}{4}=\\tfrac{15}{2}$. \\[ \\boxed{\\,x^\\star=\\tfrac{11}{2},\\qquad S(x^\\star)=\\tfrac{293}{2}=146.5\\,} \\] (b) With the extra weight $5$ anchored at $c=7$, the optimiser is the re-weighted mean over all five terms: \\[ x^{\\star\\star}=\\frac{\\sum w_i a_i+5c}{\\sum w_i+5}=\\frac{55+5\\cdot7}{10+5}=\\frac{90}{15}=6, \\] and $T(x)=15x^2-180x+694$ gives $T(6)=154$. \\[ \\boxed{\\,x^{\\star\\star}=6,\\qquad T(x^{\\star\\star})=154\\,} \\] The optimum moves from $5.5$ toward the anchor $7$ (landing at $6$, not at $7$), and the cost floor rises from $146.5$ to $154$, an increase of exactly $7.5=\\dfrac{W\\,p}{W+p}\\,(c-x^\\star)^2=\\dfrac{10\\cdot5}{15}\\,(7-\\tfrac{11}{2})^2=\\dfrac{10}{3}\\cdot\\dfrac{9}{4}$.",
    "trap": "The textbook reflex for ``minimise a sum of distances/squares to a set of points'' is to drop the optimiser at the middle of the data. Two flavours of this reflex both fail here. (1) Median fallacy. Students who half-remember ``the point minimising total distance is the median'' reach for the median of $2,5,9,14$, namely $\\tfrac{5+9}{2}=7$, and report $x=7$. But that theorem is for the $L^1$ cost $\\sum|x-a_i|$; for the squared cost the minimiser is the mean, not the median — and $S(7)=169>146.5$, so $7$ is strictly worse. (2) Forgotten-weights fallacy. Students who do know it is the mean compute the plain mean $\\tfrac{2+5+9+14}{4}=\\tfrac{15}{2}=7.5$, silently treating the weights $4,3,2,1$ as if equal. The weights are the whole point: they pull the balance toward the heavily-weighted small sensors, giving the weighted mean $\\tfrac{11}{2}=5.5$, with $S(7.5)=186.5$, far worse still. The hidden structure both misses is that $S$ is just a single quadratic whose vertex is the weighted mean; the abscissa $5.5$ provably sits between two data points (it equals none of them), so any ``snap to a data point or to the median'' instinct is wrong by construction. \\\\ Part (b) carries its own trap. Adding $5(x-7)^2$ tempts two wrong moves: (i) assume the optimum is unchanged at $5.5$ because ``we only added a constant-looking penalty'' — but the penalty is quadratic in $x$, so it re-weights the average; (ii) assume the optimum jumps to the anchor $7$ because the penalty ``pulls it there'' — but with finite weight $5$ against the existing total weight $10$, it pulls only part way, to $x^{\\star\\star}=6=\\frac{10\\cdot 5.5+5\\cdot 7}{15}$. The cost floor rises by exactly $\\frac{Wp}{W+p}(c-x^\\star)^2=7.5$ — the parallel-axis penalty for separating two centres of mass — not by $5(7-5.5)^2=11.25$ (which would be the penalty only if the drone foolishly stayed at the old optimum $5.5$).",
    "solutions": [
      {
        "name": "Collapse to one quadratic and read its vertex",
        "steps": [
          "Expand every square and collect: $S(x)=\\sum_i w_i(x-a_i)^2=\\bigl(\\sum w_i\\bigr)x^2-2\\bigl(\\sum w_i a_i\\bigr)x+\\sum w_i a_i^2$. Here $\\sum w_i=10$, $\\sum w_i a_i=4\\cdot2+3\\cdot5+2\\cdot9+14=55$, and $\\sum w_i a_i^2=4\\cdot4+3\\cdot25+2\\cdot81+196=449$, so $S(x)=10x^2-110x+449$.",
          "This is an upward parabola ($10>0$), so its unique minimum is at the vertex $x^\\star=-\\dfrac{-110}{2\\cdot10}=\\dfrac{11}{2}=5.5$, which equals the weighted mean $\\frac{\\sum w_i a_i}{\\sum w_i}=\\frac{55}{10}$. Note $5<5.5<9$: it lies strictly between sensors $a_2$ and $a_3$, and differs from both the median $7$ and the plain mean $7.5$. The minimum value is $S(\\tfrac{11}{2})=10\\cdot\\tfrac{121}{4}-110\\cdot\\tfrac{11}{2}+449=\\tfrac{293}{2}=146.5$. $\\boxed{x^\\star=\\tfrac{11}{2},\\ S(x^\\star)=\\tfrac{293}{2}}$",
          "For (b) add $5(x-7)^2$ to the coefficients directly: the $x^2$ coefficient becomes $10+5=15$, the $x$ coefficient becomes $-110+5\\cdot(-14)=-180$, giving $T(x)=15x^2-180x+694$. Its vertex is $x^{\\star\\star}=\\dfrac{180}{2\\cdot15}=6$ and $T(6)=15\\cdot36-180\\cdot6+694=540-1080+694=154$. $\\boxed{x^{\\star\\star}=6,\\ T=154}$"
        ]
      },
      {
        "name": "Calculus: set the derivative (a weighted balance) to zero",
        "steps": [
          "Differentiate term by term: $S'(x)=\\sum_i 2w_i(x-a_i)=2\\bigl[(\\sum w_i)x-\\sum w_i a_i\\bigr]$. Setting $S'(x)=0$ gives the balance condition $\\sum w_i(x-a_i)=0$, i.e. $x=\\dfrac{\\sum w_i a_i}{\\sum w_i}=\\dfrac{55}{10}=\\dfrac{11}{2}$. Since $S''(x)=2\\sum w_i=20>0$, this is the global minimum. Substituting back, $S(\\tfrac{11}{2})=\\tfrac{293}{2}=146.5$. The balance interpretation makes the misses transparent: weights $4,3,2,1$ are torques about $x$, and the weighted sensors balance at $5.5$, not at the median $7$. $\\boxed{x^\\star=\\tfrac{11}{2},\\ S(x^\\star)=\\tfrac{293}{2}}$",
          "For (b), $T'(x)=S'(x)+10(x-7)=2[10x-55]+10x-70=30x-180$. Setting $T'=0$ gives $x^{\\star\\star}=6$ (with $T''=30>0$), and $T(6)=154$. The new balance includes the depot as a fifth weighted point: $\\frac{10\\cdot5.5+5\\cdot7}{15}=6$, partway from $5.5$ toward $7$. $\\boxed{x^{\\star\\star}=6,\\ T=154}$"
        ]
      },
      {
        "name": "Variance decomposition / parallel-axis (shift without re-expanding)",
        "steps": [
          "Write $x-a_i=(x-x^\\star)+(x^\\star-a_i)$ with $x^\\star$ the weighted mean. Squaring and weighting, the cross term $2(x-x^\\star)\\sum w_i(x^\\star-a_i)$ vanishes (definition of the weighted mean), leaving the identity $S(x)=W\\,(x-x^\\star)^2+S(x^\\star)$, where $W=\\sum w_i=10$. Thus $S$ is minimised at $x=x^\\star=\\frac{55}{10}=\\frac{11}{2}$, and the floor $S(x^\\star)=W\\cdot(\\text{weighted variance})=10\\cdot\\frac{293}{20}=\\frac{293}{2}=146.5$. $\\boxed{x^\\star=\\tfrac{11}{2},\\ S(x^\\star)=\\tfrac{293}{2}}$",
          "For (b), treat the depot $c=7$ as a fifth point with weight $p=5$. Two centres of mass — the four sensors (total weight $W=10$, centroid $x^\\star=5.5$) and the depot (weight $p=5$, at $c=7$) — combine into one system whose new centroid is $x^{\\star\\star}=\\dfrac{W x^\\star+p c}{W+p}=\\dfrac{10\\cdot5.5+5\\cdot7}{15}=6$. So the optimum slides from $5.5$ toward $7$, stopping at $6$ (it reaches $7$ only as $p\\to\\infty$).",
          "By the parallel-axis theorem for combining two weighted systems, the new minimum cost is the old floor plus the inevitable separation penalty: $T(x^{\\star\\star})=S(x^\\star)+\\dfrac{W\\,p}{W+p}\\,(c-x^\\star)^2=\\dfrac{293}{2}+\\dfrac{10\\cdot5}{15}\\Bigl(7-\\dfrac{11}{2}\\Bigr)^2=146.5+\\dfrac{10}{3}\\cdot\\dfrac{9}{4}=146.5+7.5=154$. The floor rises by exactly $7.5$ — strictly less than the naive $5(7-5.5)^2=11.25$, because the drone re-optimises rather than staying put. $\\boxed{x^{\\star\\star}=6,\\ T=154}$"
        ]
      }
    ],
    "remark": "Insight: a weighted sum of squares is secretly one quadratic, and its vertex is the weighted mean — never the median, never (unless weights are equal) the plain mean. The median is the right answer for the $L^1$ cost $\\sum|x-a_i|$; swapping to squares swaps the median for the mean, and unequal weights swap the plain mean for the weighted one. Because the data here are even in number with mean and median pulled apart, and the weights lean hard on the small sensors, the true optimum $5.5$ provably lands between data points and is unmistakably distinct from both decoys. The deeper lesson is the variance / parallel-axis identity $S(x)=W(x-x^\\star)^2+W\\sigma_w^2$: it hands you the optimiser, the minimum (= total weight times weighted variance), and — crucially — a free formula for how a quadratic penalty $p(x-c)^2$ re-weights everything. The new optimum is the centroid of the old centroid and the anchor, $\\frac{Wx^\\star+pc}{W+p}$, moving only part way (finite $p$ can never drag it all the way to $c$), and the cost floor climbs by exactly the inter-centroid penalty $\\frac{Wp}{W+p}(c-x^\\star)^2$ — the parallel-axis term — not by the larger $p(c-x^\\star)^2$ one would get by foolishly holding station at the old optimum. Reading the optimisation through centres of mass turns two separate vertex computations into one structural picture."
  },
  {
    "theme": "maxmin",
    "themeLabel": "Maxima & Minima",
    "title": "A Hyperbola in Disguise",
    "difficulty": 4,
    "task": "Find",
    "tags": [
      "substitution",
      "x minus 1 over x",
      "quadratic in t",
      "reducible"
    ],
    "statement": "Find the least value of $\\;E(x)=x^{2}+\\dfrac{1}{x^{2}}-6\\!\\left(x-\\dfrac{1}{x}\\right)+5\\;$ over all nonzero real $x$.",
    "answer": "The least value is $-2$.",
    "trap": "Substituting $t=x-\\frac1x$ and then restricting $t$ to some bounded range (as one does for $\\sin$ or $\\cos$). In fact $t=x-\\frac1x$ takes EVERY real value as $x$ runs over $\\mathbb{R}\\setminus\\{0\\}$, so the new quadratic in $t$ is unconstrained and its vertex value is genuinely attained — a wrong 'allowed range' would give a wrong answer.",
    "solutions": [
      {
        "name": "Substitution to a free quadratic",
        "steps": [
          "Let $t=x-\\frac1x$. Then $t^{2}=x^{2}-2+\\frac{1}{x^{2}}$, so $x^{2}+\\frac{1}{x^{2}}=t^{2}+2$.",
          "Thus $E=t^{2}+2-6t+5=t^{2}-6t+7=(t-3)^{2}-2$.",
          "As $x$ ranges over all nonzero reals, $t$ ranges over all of $\\mathbb{R}$: solving $x-\\frac1x=c$ means $x^{2}-cx-1=0$, whose discriminant $c^{2}+4>0$ is positive for every real $c$, so a real $x\\neq0$ always exists. Hence $t=3$ is attainable.",
          "Therefore $\\min E=(3-3)^{2}-2=\\boxed{-2}$, achieved when $x-\\frac1x=3$, i.e. $x=\\frac{3\\pm\\sqrt{13}}{2}$."
        ]
      },
      {
        "name": "Direct calculus check",
        "steps": [
          "$E'(x)=2x-\\dfrac{2}{x^{3}}-6\\!\\left(1+\\dfrac{1}{x^{2}}\\right)$. Clearing denominators, $\\dfrac{x^{3}}{2}\\,E'(x)=x^{4}-3x^{3}-3x-1=(x^{2}+1)(x^{2}-3x-1)$.",
          "Since $x^{2}+1>0$, $E'(x)=0\\iff x^{2}-3x-1=0$, i.e. $x-\\frac1x=3$, giving the two real critical points $x=\\frac{3\\pm\\sqrt{13}}{2}$.",
          "At either point $x^{2}+\\frac1{x^{2}}=t^{2}+2=11$ and $x-\\frac1x=3$, so $E=11-18+5=-2$.",
          "The second derivative is positive at both (e.g. $E''>0$), so both are local minima; as $E\\to+\\infty$ when $x\\to0^{\\pm}$ or $x\\to\\pm\\infty$, the global minimum is $\\min E=\\boxed{-2}$."
        ]
      }
    ],
    "remark": "Insight: the pairing $x^{2}+\\frac{1}{x^{2}}=(x-\\frac1x)^{2}+2$ converts a reciprocal mess into a clean quadratic in one variable. The crucial habit is to determine the RANGE of the substituted variable — here it is all of $\\mathbb{R}$, unlike $x+\\frac1x$ whose value avoids $(-2,2)$. The calculus route confirms this: $E'$ factors as $(x^{2}+1)(x^{2}-3x-1)$, so the only real critical condition is exactly $x-\\frac1x=3$."
  },
  {
    "theme": "maxmin",
    "themeLabel": "Maxima & Minima",
    "title": "The Range Across the Forbidden Gap",
    "difficulty": 5,
    "task": "Find",
    "tags": [
      "hidden-domain",
      "nested-variable",
      "quadratic-in-disguise",
      "union-of-intervals",
      "vertex-outside-window",
      "boundary-extremum"
    ],
    "statement": "A real number $x$ is admissible exactly when it satisfies the single inequality \\[ \\bigl(x^{2}-6x+5\\bigr)\\bigl(x^{2}-6x+8\\bigr)\\;\\le\\;0 . \\] Over all admissible $x$, find the range (the set of attained values, hence the minimum and the maximum) of \\[ g(x)\\;=\\;2x^{2}-10x+7 . \\] You must first derive the admissible set from the constraint — it is not handed to you — and then report $g_{\\min}$, $g_{\\max}$, and a value of $x$ achieving each.",
    "answer": "Step 1 — uncage the domain. The constraint is a quadratic in the nested variable $t=x^{2}-6x$: it reads $(t+5)(t+8)\\le 0$, so $-8\\le t\\le -5$, i.e. $-8\\le x^{2}-6x\\le -5$. Splitting: $x^{2}-6x\\ge -8\\Rightarrow (x-2)(x-4)\\ge 0\\Rightarrow x\\le 2\\text{ or }x\\ge 4$, while $x^{2}-6x\\le -5\\Rightarrow (x-1)(x-5)\\le 0\\Rightarrow 1\\le x\\le 5$. Intersecting, \\[ \\text{admissible set }=\\;[1,2]\\;\\cup\\;[4,5],\\qquad\\text{a union with a forbidden gap }(2,4). \\] Step 2 — optimise over the union. Write $g(x)=2\\bigl(x-\\tfrac52\\bigr)^{2}-\\tfrac{11}{2}$. Its vertex sits at $x=\\tfrac52=2.5$, which lies inside the forbidden gap $(2,4)$, so the parabola's true bottom is never reached. On a parabola the value grows with distance from the axis $x=\\tfrac52$; among admissible points the one closest to $2.5$ is $x=2$ (distance $\\tfrac12$) and the one farthest is $x=5$ (distance $\\tfrac52$). Hence \\[ \\boxed{\\,g_{\\min}=g(2)=-5\\ \\text{at }x=2,\\qquad g_{\\max}=g(5)=7\\ \\text{at }x=5,\\qquad \\text{range}=[-5,\\,7].\\,} \\] (Check: $g(1)=g(4)=-1$, $g(2)=-5$, $g(5)=7$.) The unconstrained-vertex value $-\\tfrac{11}{2}=-5.5$ is a phantom — it lives in the gap and is never attained.",
    "trap": "The reduction $g(x)=2x^{2}-10x+7=2\\bigl(x-\\tfrac52\\bigr)^{2}-\\tfrac{11}{2}$ screams ``minimum $=-\\tfrac{11}{2}=-5.5$ at $x=\\tfrac52$,'' and a hurried solver boxes that — never checking whether $x=\\tfrac52$ is even admissible. It is not: $\\tfrac52$ lies in the forbidden gap $(2,4)$, because the constraint cuts the line into the disconnected set $[1,2]\\cup[4,5]$, not a single interval. The vertex is unreachable, so the minimum must occur on the boundary, and the correct value is $g(2)=-5$, strictly larger than the phantom $-5.5$. \\\\ A second, subtler slip survives even after the union is found. Many students, having derived $[1,2]\\cup[4,5]$, then test only the outer endpoints $x=1$ and $x=5$ (the ``ends of the domain''), getting $g(1)=-1$ and $g(5)=7$, and wrongly report the minimum as $-1$. They forget that $x=2$ and $x=4$ are also boundary points — the interior edges flanking the gap — and that the minimiser is precisely the inner edge $x=2$, nearest the missing vertex, where $g(2)=-5<-1$. \\\\ A third trap is silent: if one mis-solves $(x-2)(x-4)\\ge0$ as $2\\le x\\le4$ (sign-flip on a $\\ge0$ product), the intersection collapses to $[2,4]$, the gap vanishes, $\\tfrac52$ becomes ``admissible,'' and the phantom $-5.5$ is ``confirmed'' — a self-consistent wrong answer. The genuine difficulty is that the window is disconnected and the objective's natural minimum falls exactly into the hole; only by deriving the domain honestly and recognising that the extremum lives on a boundary does the parabola's vertex reveal itself as forbidden.",
    "solutions": [
      {
        "name": "Nested-variable reduction, then distance-from-axis on the union",
        "steps": [
          "Set $t=x^{2}-6x$. The constraint $(x^{2}-6x+5)(x^{2}-6x+8)\\le0$ becomes $(t+5)(t+8)\\le0$, a quadratic in $t$ with roots $-8,-5$, so $-8\\le t\\le -5$. Translate back: $x^{2}-6x\\ge-8$ gives $(x-2)(x-4)\\ge0\\Rightarrow x\\le2\\text{ or }x\\ge4$; and $x^{2}-6x\\le-5$ gives $(x-1)(x-5)\\le0\\Rightarrow1\\le x\\le5$. The intersection is the disconnected set $[1,2]\\cup[4,5]$ with forbidden gap $(2,4)$.",
          "Put $g$ in vertex form: $g(x)=2x^{2}-10x+7=2\\bigl(x-\\tfrac52\\bigr)^{2}-\\tfrac{11}{2}$. On an upward parabola the value is an increasing function of $|x-\\tfrac52|$, the distance to the axis $x=\\tfrac52$.",
          "Crucially $\\tfrac52\\in(2,4)$ is forbidden. Among admissible $x$ the distances $|x-\\tfrac52|$ are: $x=1\\!:\\!\\tfrac32$, $x=2\\!:\\!\\tfrac12$, $x=4\\!:\\!\\tfrac32$, $x=5\\!:\\!\\tfrac52$, with every interior admissible point lying between these. The minimum distance $\\tfrac12$ occurs at $x=2$ and the maximum distance $\\tfrac52$ at $x=5$.",
          "Therefore $g_{\\min}=g(2)=2\\cdot\\tfrac14-\\tfrac{11}{2}=-5$ and $g_{\\max}=g(5)=2\\cdot\\tfrac{25}{4}-\\tfrac{11}{2}=7$. The range is $\\boxed{[-5,\\,7]}$; the vertex value $-\\tfrac{11}{2}$ is never attained because $\\tfrac52$ sits in the gap."
        ]
      },
      {
        "name": "Calculus piece by piece (monotonicity rules out the gap)",
        "steps": [
          "Derive the domain as above: $[1,2]\\cup[4,5]$. Compute $g'(x)=4x-10$, which vanishes only at $x=\\tfrac52$. Since $\\tfrac52$ lies in the excluded gap $(2,4)$, $g$ has no interior critical point on the domain; every extremum is forced onto an endpoint.",
          "On $[1,2]$, $g'(x)=4x-10<0$ (as $x<\\tfrac52$), so $g$ is strictly decreasing: it runs from $g(1)=-1$ down to $g(2)=-5$.",
          "On $[4,5]$, $g'(x)=4x-10>0$ (as $x>\\tfrac52$), so $g$ is strictly increasing: it runs from $g(4)=-1$ up to $g(5)=7$.",
          "Collecting the four endpoint values $\\{-1,-5,-1,7\\}$, the smallest is $-5$ (at $x=2$) and the largest is $7$ (at $x=5$). Hence $g_{\\min}=-5$, $g_{\\max}=7$, and the range is $\\boxed{[-5,\\,7]}$."
        ]
      },
      {
        "name": "Image of each interval, then union (direct interval arithmetic)",
        "steps": [
          "With domain $[1,2]\\cup[4,5]$ and $g$ continuous, the range is $g([1,2])\\cup g([4,5])$; on each interval (no critical point inside) the image is the closed interval between the endpoint values.",
          "On $[1,2]$: endpoints $g(1)=-1$, $g(2)=-5$, so $g([1,2])=[-5,-1]$.",
          "On $[4,5]$: endpoints $g(4)=-1$, $g(5)=7$, so $g([4,5])=[-1,7]$.",
          "Union: $[-5,-1]\\cup[-1,7]=[-5,7]$ (the two images abut at $-1=g(1)=g(4)$, so the range is a single interval despite the disconnected domain). Thus $g_{\\min}=-5$ at $x=2$ and $g_{\\max}=7$ at $x=5$: range $\\boxed{[-5,\\,7]}$. The naive vertex minimum $-\\tfrac{11}{2}$ lies below $-5$ and is unattainable, confirming the trap."
        ]
      }
    ],
    "remark": "Insight: the objective is a trivial parabola; the entire difficulty is hidden in the domain, which the problem refuses to hand over. Recognising the constraint as a quadratic in the nested variable $t=x^{2}-6x$ collapses it to $-8\\le t\\le-5$, and translating back produces a disconnected window $[1,2]\\cup[4,5]$ — the single most important structural fact, because the objective's vertex $x=\\tfrac52$ lands exactly in the forbidden gap. The discipline a top ranker internalises: never read a parabola's vertex as the answer until you have confirmed the vertex is inside the feasible set; when it is not, the extremum migrates to the boundary, and on a disconnected window the relevant boundary includes the interior edges flanking the gap, not just the outer ends. The vertex-form view $g=2(x-\\tfrac52)^{2}-\\tfrac{11}{2}$ makes the resolution inevitable: value is governed by distance to the axis, so the minimum sits at the admissible point nearest the forbidden centre ($x=2$, distance $\\tfrac12$) and the maximum at the point farthest from it ($x=5$, distance $\\tfrac52$). That the two interval-images abut cleanly at $-1$ to give the single range $[-5,7]$ — despite the domain being in two pieces — is the final elegant surprise."
  },
  {
    "theme": "maxmin",
    "themeLabel": "Maxima & Minima",
    "title": "Quadratic Caught in a Sine",
    "difficulty": 4,
    "task": "Find",
    "tags": [
      "quadratic in sin",
      "bounded substitution",
      "vertex inside",
      "trigonometric"
    ],
    "statement": "Find the minimum and maximum values of $\\;F(x)=2\\sin^{2}x-3\\sin x+1\\;$ as $x$ ranges over all real numbers.",
    "answer": "Minimum $=-\\dfrac{1}{8}$; maximum $=6$.",
    "trap": "Substituting $t=\\sin x$ and then treating $t$ as a free real variable, so that the maximum appears to be $+\\infty$. In truth $t=\\sin x$ is confined to $[-1,1]$; the quadratic must be optimised on that bounded interval, where the maximum is the endpoint value $q(-1)=6$, not infinity.",
    "solutions": [
      {
        "name": "Reduce to a quadratic on [-1,1]",
        "steps": [
          "Let $t=\\sin x\\in[-1,1]$ and $q(t)=2t^{2}-3t+1$.",
          "Vertex at $t=\\frac{3}{4}\\in[-1,1]$ with $a=2>0$, so the minimum is $q\\!\\left(\\tfrac34\\right)=2\\cdot\\tfrac{9}{16}-\\tfrac94+1=\\tfrac98-\\tfrac{9}{4}+1=-\\tfrac18$.",
          "The maximum is the larger endpoint: $q(-1)=2+3+1=6$, $q(1)=2-3+1=0$, so $\\max=6$.",
          "Both $t=\\frac34$ and $t=-1$ are attainable by $\\sin x$, so $\\boxed{\\min=-\\tfrac18,\\ \\max=6}$."
        ]
      },
      {
        "name": "Completing the square in t",
        "steps": [
          "$q(t)=2\\!\\left(t-\\tfrac34\\right)^{2}+1-2\\cdot\\tfrac{9}{16}=2\\!\\left(t-\\tfrac34\\right)^{2}-\\tfrac18$.",
          "On $[-1,1]$ the squared term is smallest ($0$) at $t=\\frac34$, giving $q=-\\frac18$.",
          "It is largest where $|t-\\frac34|$ is greatest, namely $t=-1$: $2\\!\\left(-\\tfrac74\\right)^2-\\tfrac18=2\\cdot\\tfrac{49}{16}-\\tfrac18=\\tfrac{49}{8}-\\tfrac18=6$.",
          "Hence $\\boxed{\\min=-\\tfrac18,\\ \\max=6}$."
        ]
      }
    ],
    "remark": "Insight: any expression polynomial in $\\sin x$ (or $\\cos x$) becomes a polynomial on the FIXED interval $[-1,1]$. The bounded domain is what tames the otherwise-unbounded quadratic — always re-impose $-1\\le t\\le 1$."
  },
  {
    "theme": "maxmin",
    "themeLabel": "Maxima & Minima",
    "title": "The Two-Pen Paddock",
    "difficulty": 4,
    "task": "Find",
    "tags": [
      "optimisation",
      "area",
      "word problem",
      "downward parabola"
    ],
    "statement": "A farmer has $120$ metres of fencing to build a rectangular paddock that is also divided into two equal rectangular pens by an internal fence parallel to one pair of sides. If $w$ denotes the common length (in metres) of the three parallel widths (the two outer sides plus the divider) and the two remaining sides have length $L$, then $3w+2L=120$. Find the largest total area the paddock can enclose.",
    "answer": "The largest total area is $600$ square metres (achieved at $w=20$, $L=30$).",
    "trap": "Assuming the optimal paddock is a square, i.e. setting $w=L$. The constraint then forces $5w=120$, so $w=L=24$ and the area is only $24\\times24=576\\text{ m}^2$. Symmetry of the shape is irrelevant here; what must be balanced is the fencing spent in each direction, namely the two groups $3w$ and $2L$. The correct area function is $A(w)=\\tfrac{w(120-3w)}{2}$, a downward parabola whose vertex is at $w=20$, giving $600>576$.",
    "solutions": [
      {
        "name": "Express area as one downward parabola",
        "steps": [
          "From $3w+2L=120$, solve for $L=\\frac{120-3w}{2}$.",
          "Total area $A=wL=\\frac{w(120-3w)}{2}=60w-\\frac{3}{2}w^{2}$, valid for $0<w<40$.",
          "The coefficient of $w^2$ is $-\\tfrac32<0$, so the parabola opens downward; its vertex is at $w=-\\frac{60}{2(-3/2)}=20$, which lies in $(0,40)$.",
          "$A(20)=60(20)-\\tfrac32(400)=1200-600=600$, with $L=\\frac{120-60}{2}=30$. Largest area $=\\boxed{600\\text{ m}^2}$."
        ]
      },
      {
        "name": "AM-GM on the fencing budget",
        "steps": [
          "Rewrite the area in terms of the two fencing groups: $A=wL=\\frac{1}{6}\\,(3w)(2L)$.",
          "The two positive quantities $3w$ and $2L$ have fixed sum $3w+2L=120$. By AM-GM, $(3w)(2L)\\le\\left(\\frac{3w+2L}{2}\\right)^{2}=\\left(\\frac{120}{2}\\right)^{2}=3600$, with equality iff $3w=2L$.",
          "Equality gives $3w=2L=60$, i.e. $w=20$ and $L=30$, which satisfy the constraint.",
          "Hence $A\\le\\frac{3600}{6}=600$, and this bound is attained, so the maximum area $=\\boxed{600\\text{ m}^2}$."
        ]
      }
    ],
    "remark": "Insight: in fencing problems the count of each segment type matters. The divider makes the budget $3w+2L$, not $2w+2L$, so the optimum is NOT a square. What gets balanced at the optimum is the total fencing in each direction ($3w=2L=60$), not the side lengths themselves. Once the area is written as a single quadratic, or as a product of two terms with fixed sum, the optimum follows immediately."
  },
  {
    "theme": "maxmin",
    "themeLabel": "Maxima & Minima",
    "title": "The Minimax of a Sliding Parabola",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "minimax",
      "parameter family",
      "max on interval",
      "piecewise linear"
    ],
    "statement": "For a real parameter $a$, let $M(a)=\\displaystyle\\max_{0\\le x\\le 2}\\bigl(x^{2}-2ax+a\\bigr)$ be the largest value of the upward parabola $x^{2}-2ax+a$ on the interval $[0,2]$. Determine $\\displaystyle\\min_{a\\in\\mathbb{R}}M(a)$, the smallest that this maximum can be made, and the value of $a$ achieving it.",
    "answer": "$\\min_{a}M(a)=1$, achieved at $a=1$.",
    "trap": "Trying to locate the maximum of $x^{2}-2ax+a$ at its vertex $x=a$. For an UPWARD parabola the vertex is the MINIMUM (there $f(a)=a-a^{2}$); the maximum over a closed interval is always at an endpoint. Hunting the vertex for the inner maximum is the fatal misstep — it replaces $M(a)$ by $a-a^{2}$, which is unbounded below, so the whole minimax collapses to nonsense.",
    "solutions": [
      {
        "name": "Inner max at an endpoint, then minimise",
        "steps": [
          "For the upward parabola $f(x)=x^{2}-2ax+a$, the maximum on $[0,2]$ is attained at an endpoint: $f(0)=a$ and $f(2)=4-4a+a=4-3a$.",
          "So $M(a)=\\max\\{a,\\,4-3a\\}$, the upper envelope of two lines.",
          "$a$ and $4-3a$ are equal when $a=4-3a\\Rightarrow a=1$, with common value $1$; for $a<1$, $4-3a>a$ (decreasing in $a$), and for $a>1$, $a>4-3a$ (increasing).",
          "Hence the piecewise-linear $M(a)$ bottoms out at the crossing: $\\min_a M(a)=M(1)=\\boxed{1}$ at $a=1$."
        ]
      },
      {
        "name": "Geometric check at the optimum",
        "steps": [
          "At $a=1$, $f(x)=x^{2}-2x+1=(x-1)^{2}$ on $[0,2]$, with $f(0)=f(2)=1$ and $f(1)=0$, so $M(1)=1$.",
          "Any other $a$ raises one endpoint above $1$: $M(a)=\\max\\{a,4-3a\\}>1$ whenever $a\\ne1$ (since one of the two linear values exceeds $1$).",
          "Thus $a=1$ balances the two endpoints and cannot be improved.",
          "Therefore the minimax value is $\\boxed{1}$ at $a=1$."
        ]
      }
    ],
    "remark": "Insight: this is a clean minimax. The inner problem (max of an upward parabola on an interval) is ALWAYS at an endpoint, turning $M(a)$ into the upper envelope of two lines; its minimum is the balance point where the two endpoint values coincide — the equioscillation idea behind Chebyshev approximation."
  },
  {
    "theme": "maxmin",
    "themeLabel": "Maxima & Minima",
    "title": "The Off-Centre Ring and the Vertex Just Out of Reach",
    "difficulty": 5,
    "task": "Minimise",
    "tags": [
      "constrained-optimisation",
      "cauchy-schwarz",
      "reachable-range",
      "vertex-outside-window",
      "irrational-endpoint"
    ],
    "statement": "Let $x,y$ be real numbers constrained to the circle \\[ (x-1)^{2}+(y-2)^{2}=5. \\] Find, with full justification, the minimum value of \\[ E(x,y)=(x+y)^{2}-14\\,(x+y), \\] and the point $(x,y)$ at which it is attained. State clearly where on the circle the minimum lives and why the naive ``vertex'' value is not achievable.",
    "answer": "Writing $s=x+y$, the expression is the parabola $E=s^{2}-14s=(s-7)^{2}-49$ whose vertex sits at $s=7$. But on the off-centre circle $s$ does not range over all of $\\mathbb{R}$: with $u=x-1,\\ v=y-2$ (so $u^{2}+v^{2}=5$) we have $s=u+v+3$, and by Cauchy–Schwarz $|u+v|\\le\\sqrt2\\,\\sqrt{u^{2}+v^{2}}=\\sqrt{10}$. Hence the reachable set is the asymmetric, irrational-endpoint segment \\[ s\\in\\bigl[\\,3-\\sqrt{10},\\ 3+\\sqrt{10}\\,\\bigr]\\approx[-0.162,\\ 6.162]. \\] Since $3+\\sqrt{10}<7$, the entire window lies to the left of the vertex, so $E$ is strictly decreasing across it; the minimum is the right endpoint $s=3+\\sqrt{10}$, not the vertex. Therefore \\[ \\boxed{\\,E_{\\min}=-23-8\\sqrt{10}\\,}\\qquad\\text{attained at}\\quad (x,y)=\\Bigl(1+\\tfrac{\\sqrt{10}}{2},\\ 2+\\tfrac{\\sqrt{10}}{2}\\Bigr). \\] (For contrast the maximum is $E_{\\max}=-23+8\\sqrt{10}$ at the left endpoint $s=3-\\sqrt{10}$, i.e. $(x,y)=\\bigl(1-\\tfrac{\\sqrt{10}}{2},\\,2-\\tfrac{\\sqrt{10}}{2}\\bigr)$.) The vertex value $E=-49$ would require $s=7$, impossible: $x+y=7$ meets the circle only if $2x^{2}-12x+21=0$ has a real root, but its discriminant is $-24<0$.",
    "trap": "The reflex of a strong solver is to read $E=(x+y)^{2}-14(x+y)$ as a parabola in the single variable $s=x+y$, complete the square to $E=(s-7)^{2}-49$, and announce $E_{\\min}=-49$ at $s=7$. This silently assumes $s$ is free to equal $7$ —{} i.e. that $x+y$ ranges over all of $\\mathbb{R}$. It does not: $(x,y)$ is pinned to a circle, so $s=x+y$ is confined to a bounded segment, and the vertex $s=7$ may lie outside it. Here it does, and only barely —{} $3+\\sqrt{10}\\approx6.162$ versus $7$ —{} which is exactly why the trap is lethal: the gap is small enough that nobody bothers to check reachability, and the bogus answer $-49$ is tantalisingly close to the true $-23-8\\sqrt{10}\\approx-48.30$. A second, subtler snare is to assume (by symmetry-of-habit) that $s$ ranges over a symmetric interval like $[-\\sqrt{10},\\sqrt{10}]$ or $[3-\\sqrt{10},\\sqrt{10}-3]$; the circle is off-centre, so the centre $(1,2)$ contributes a fixed $+3$ and the genuine window is the asymmetric $[\\,3-\\sqrt{10},\\,3+\\sqrt{10}\\,]$. Forgetting the $+3$ shift gives the wrong endpoint and hence the wrong minimum. The honest move is to derive the reachable range of the inner variable (centre-shift $+$ Cauchy–Schwarz), check the vertex against it, and only then read off the extremum at the correct endpoint.",
    "solutions": [
      {
        "name": "Reduce to one variable, derive the reachable window by Cauchy–Schwarz, then locate the vertex",
        "steps": [
          "Put $s=x+y$, so $E=s^{2}-14s$, a parabola in $s$ with vertex at $s=7$ and value $E=(s-7)^{2}-49$. The minimum of $E$ over the constraint is therefore decided entirely by which values of $s$ are reachable on the circle —{} so first compute the exact range of $s$, do not assume it is all of $\\mathbb{R}$.",
          "Centre the circle: let $u=x-1,\\ v=y-2$, so $u^{2}+v^{2}=5$ and $s=x+y=(u+1)+(v+2)=u+v+3$. By Cauchy–Schwarz $|u+v|\\le\\sqrt{1^{2}+1^{2}}\\,\\sqrt{u^{2}+v^{2}}=\\sqrt2\\cdot\\sqrt5=\\sqrt{10}$, with equality iff $u=v$. Hence $s\\in[\\,3-\\sqrt{10},\\ 3+\\sqrt{10}\\,]$ —{} an asymmetric segment with irrational endpoints, shifted by the centre's contribution $+3$.",
          "Compare with the vertex: $3+\\sqrt{10}\\approx6.162<7$, so the entire window lies strictly left of $s=7$. On $(-\\infty,7)$ the parabola is strictly decreasing, hence $E$ is decreasing across the whole window and is minimised at the right endpoint $s=3+\\sqrt{10}$ (and maximised at the left endpoint $s=3-\\sqrt{10}$).",
          "Evaluate at $s=3+\\sqrt{10}$: $E=(3+\\sqrt{10})^{2}-14(3+\\sqrt{10})=(19+6\\sqrt{10})-(42+14\\sqrt{10})=-23-8\\sqrt{10}$. Equality in C–S needs $u=v$, and $u+v=\\sqrt{10}$ gives $u=v=\\tfrac{\\sqrt{10}}{2}$, i.e. $(x,y)=\\bigl(1+\\tfrac{\\sqrt{10}}{2},\\,2+\\tfrac{\\sqrt{10}}{2}\\bigr)$. Thus $\\boxed{E_{\\min}=-23-8\\sqrt{10}}$."
        ]
      },
      {
        "name": "Lagrange multipliers —{} the critical points land exactly at the two window endpoints",
        "steps": [
          "Optimise $f=(x+y)^{2}-14(x+y)$ subject to $g=(x-1)^{2}+(y-2)^{2}-5=0$. With $s=x+y$, $\\partial f/\\partial x=\\partial f/\\partial y=2s-14$, so $\\nabla f=(2s-14)(1,1)$. Setting $\\nabla f=\\lambda\\nabla g=\\lambda\\bigl(2(x-1),\\,2(y-2)\\bigr)$ forces $(2s-14)(1,1)\\parallel(x-1,\\,y-2)$.",
          "If $2s-14\\neq0$, then $(x-1,\\,y-2)\\parallel(1,1)$, i.e. $x-1=y-2=:k$, so $x=1+k,\\ y=2+k$. The constraint $2k^{2}=5$ gives $k=\\pm\\tfrac{\\sqrt{10}}{2}$. (The case $2s-14=0$ would need $s=7$, but $s=7$ is unreachable —{} see step 4 —{} so it yields no critical point on the circle.)",
          "These two points give $s=x+y=3+2k=3\\pm\\sqrt{10}$, with $f=s^{2}-14s$. At $s=3+\\sqrt{10}$, $f=-23-8\\sqrt{10}\\approx-48.30$; at $s=3-\\sqrt{10}$, $f=-23+8\\sqrt{10}\\approx2.30$. The circle is compact and $f$ continuous, so the smaller is the global minimum: $\\boxed{E_{\\min}=-23-8\\sqrt{10}}$ at $\\bigl(1+\\tfrac{\\sqrt{10}}{2},\\,2+\\tfrac{\\sqrt{10}}{2}\\bigr)$, and the larger is the maximum.",
          "Sanity on the trap: the vertex value $-49$ would need $s=7$, i.e. $x+y=7$; substituting $y=7-x$ into the circle gives $2x^{2}-12x+21=0$ with discriminant $144-168=-24<0$, so no real point. The vertex is genuinely off the circle, confirming the minimum sits at an endpoint, not at $s=7$."
        ]
      },
      {
        "name": "Geometric / nearest-approach: minimise the distance from the reachable $s$-segment to the vertex $s=7$",
        "steps": [
          "Rewrite $E=(s-7)^{2}-49$. Because the constant $-49$ is fixed, minimising $E$ over the reachable $s$ is the same as minimising $(s-7)^{2}$, i.e. making $s$ as close to $7$ as possible within the allowed window.",
          "Find the window geometrically: the line $x+y=s$ meets the circle of centre $C=(1,2)$, radius $\\sqrt5$ iff the perpendicular distance $\\dfrac{|1+2-s|}{\\sqrt2}=\\dfrac{|s-3|}{\\sqrt2}\\le\\sqrt5$, i.e. $|s-3|\\le\\sqrt{10}$. So $s\\in[\\,3-\\sqrt{10},\\,3+\\sqrt{10}\\,]$ —{} the same asymmetric window, now read off as the chord-existence condition.",
          "The point of the window nearest to $7$ is its right endpoint $s=3+\\sqrt{10}$ (since $3+\\sqrt{10}<7$, the whole window lies left of $7$ and the closest approach is the largest $s$). There the gap is $7-(3+\\sqrt{10})=4-\\sqrt{10}$, so $(s-7)^{2}=(4-\\sqrt{10})^{2}=26-8\\sqrt{10}$.",
          "Hence $E_{\\min}=(26-8\\sqrt{10})-49=\\boxed{-23-8\\sqrt{10}}$, attained where the line $x+y=3+\\sqrt{10}$ is tangent to the circle —{} the tangent point $\\bigl(1+\\tfrac{\\sqrt{10}}{2},\\,2+\\tfrac{\\sqrt{10}}{2}\\bigr)$, lying along $CP$ in the direction $(1,1)$. The naive vertex $s=7$ would force a chord at distance $\\tfrac{4}{\\sqrt2}=2\\sqrt2>\\sqrt5$ from $C$ —{} no such chord exists, which is precisely why $-49$ is unreachable."
        ]
      }
    ],
    "remark": "Insight: when an objective is a quadratic in some inner quantity $s$, the minimum is not read off the vertex —{} it is read off whatever part of $s$'s reachable range sits closest to the vertex. The single discipline that separates a top ranker here is: derive the range of the inner variable before touching the parabola. Two features make the range non-trivial. First, the circle is off-centre, so $s=x+y$ does not range over a symmetric interval about $0$; the centre $(1,2)$ injects a fixed shift $+3$, producing the asymmetric window $[\\,3-\\sqrt{10},\\,3+\\sqrt{10}\\,]$. Second, the endpoints are irrational, born from Cauchy–Schwarz (equivalently the chord-distance condition $|s-3|\\le\\sqrt{10}$) rather than from any tidy completion of squares. With the window in hand, the vertex $s=7$ is seen to lie just outside it, so the parabola is monotone across the window and the extremum migrates to the endpoint —{} the genuine ``vertex outside the window'' phenomenon, here with the deliciously small margin $7-(3+\\sqrt{10})=4-\\sqrt{10}\\approx0.84$ that punishes anyone who skips the reachability check. The three views —{} algebraic (C–S window $+$ monotonicity), variational (Lagrange, whose critical points are exactly the two tangent endpoints), and geometric (closest approach of the chord family to the unreachable vertex line) —{} all converge on $-23-8\\sqrt{10}$, and each independently exposes that $s=7$ never happens."
  },
  {
    "theme": "disguise",
    "themeLabel": "Reducible to a Quadratic",
    "title": "The Palindrome's Hidden Triplet",
    "difficulty": 4,
    "task": "Find the number of …",
    "tags": [
      "reciprocal-equation",
      "palindromic",
      "substitution",
      "real-roots",
      "trap"
    ],
    "statement": "Determine the number of distinct real solutions of \\[x^4 - 5x^3 + 8x^2 - 5x + 1 = 0.\\]",
    "answer": "$3$ distinct real solutions: $x=1$ (a double root) and $x=\\dfrac{3\\pm\\sqrt5}{2}$.",
    "trap": "After dividing by $x^2$ and substituting $t=x+\\tfrac1x$ you get $t^2-5t+6=0$, i.e. $t=2,3$ — two values of $t$. The seductive error is to declare '$2$ values of $t$, each giving $2$ values of $x$, so $4$ real roots.' But $t=2$ forces $x+\\tfrac1x=2\\Rightarrow(x-1)^2=0$, a single value $x=1$; only $t=3$ (where $|t|>2$) splits into two distinct reals. The count of distinct solutions is $3$, not $4$ — the missing root hides in the multiplicity at the boundary $|t|=2$.",
    "solutions": [
      {
        "name": "Symmetric substitution $t=x+1/x$",
        "steps": [
          "Note $x=0$ is not a root, so divide by $x^2$: $\\;x^2-5x+8-\\dfrac5x+\\dfrac1{x^2}=0.$",
          "Group the reciprocal pairs: $\\left(x^2+\\dfrac1{x^2}\\right)-5\\left(x+\\dfrac1x\\right)+8=0.$",
          "With $t=x+\\tfrac1x$ we have $x^2+\\tfrac1{x^2}=t^2-2$, giving $t^2-2-5t+8=0\\Rightarrow t^2-5t+6=0.$",
          "Hence $t=2$ or $t=3$. On the reals the map $x\\mapsto x+\\tfrac1x$ has range $(-\\infty,-2]\\cup[2,\\infty)$; the boundary $|t|=2$ yields exactly one $x$, while $|t|>2$ yields two distinct reals.",
          "$t=2$: $x^2-2x+1=0\\Rightarrow x=1$ (one value, a double root). $t=3$: $x^2-3x+1=0\\Rightarrow x=\\dfrac{3\\pm\\sqrt5}{2}$ (two distinct reals).",
          "Counting distinct real solutions: $\\boxed{3}.$"
        ]
      },
      {
        "name": "Direct factorisation",
        "steps": [
          "From the $t$-reduction, $t-2$ and $t-3$ correspond to the factors $x^2-2x+1$ and $x^2-3x+1$ of the original quartic.",
          "Indeed $(x^2-2x+1)(x^2-3x+1)=x^4-5x^3+8x^2-5x+1$, matching the given polynomial.",
          "$x^2-2x+1=(x-1)^2$ contributes the single distinct value $x=1$ (with multiplicity $2$).",
          "$x^2-3x+1$ has discriminant $9-4=5>0$, contributing two distinct reals $x=\\dfrac{3\\pm\\sqrt5}{2}$.",
          "Distinct real solutions total $\\boxed{3}$ (while the multiset of roots has size $4$, with $x=1$ repeated)."
        ]
      },
      {
        "name": "Discriminant bookkeeping in $t$",
        "steps": [
          "Reduce to $t^2-5t+6=0$, with roots $t=2,3$, both satisfying $|t|\\ge2$ so both are attainable by real $x$.",
          "For a given value $t$, the number of distinct real $x$ solving $x^2-tx+1=0$ is governed by $\\Delta=t^2-4$.",
          "$t=2:\\ \\Delta=0$ (one distinct $x$, a repeated root). $t=3:\\ \\Delta=5>0$ (two distinct $x$).",
          "Sum of distinct contributions $1+2=\\boxed{3}$ real solutions."
        ]
      }
    ],
    "remark": "Insight: a palindromic (self-reciprocal) quartic always halves to a quadratic in $t=x+1/x$, but each value of $t$ is a 'gate' — it admits $0$, $1$, or $2$ values of $x$ according to whether $|t|<2$, $|t|=2$, or $|t|>2$. The boundary $|t|=2$ is precisely where a naive 'two $t$'s times two $x$'s' count overshoots, because the gate collapses to a single repeated root. Asking for distinct solutions makes this collapse the whole point: the honest tally is $3$, even though the polynomial has degree $4$."
  },
  {
    "theme": "disguise",
    "themeLabel": "Reducible to a Quadratic",
    "title": "The Twin-Power Mirror and Its Forbidden Floor",
    "difficulty": 5,
    "task": "Find all",
    "tags": [
      "exponential",
      "palindrome-substitution",
      "am-gm-gate",
      "reality-guard",
      "extraneous-branch",
      "hidden-symmetry"
    ],
    "statement": "Find all real numbers $x$ satisfying \\[9^{x}+9\\cdot 9^{-x}-7\\cdot 3^{x}-21\\cdot 3^{-x}+18=0.\\] (Two bases of $3$ appear with opposite-sign exponents; the deliberate coefficients $9$ and $21=7\\cdot 3$ are not decoration.)",
    "answer": "$\\boxed{x\\in\\{0,\\,1\\}}$. Writing $u=3^{x}>0$ and grouping by the paired substitution $s=3^{x}+3\\cdot 3^{-x}=u+\\dfrac{3}{u}$, the equation collapses to $s^{2}-7s+12=(s-3)(s-4)=0$. Of the two candidate values, only $s=4$ is attainable: for $u>0$ the AM--GM bound forces $s=u+\\tfrac{3}{u}\\ge 2\\sqrt3\\approx 3.464$, so the value $s=3$ lies below the floor of the range and is reached by no real $x$. From $s=4$: $u+\\tfrac3u=4\\Rightarrow u^{2}-4u+3=0\\Rightarrow u\\in\\{1,3\\}$, i.e. $3^{x}=1$ or $3^{x}=3$, giving $x=0$ and $x=1$.",
    "trap": "The coefficients $9$ and $21$ are engineered so that the equation is a disguised palindrome in $u=3^{x}$: with $s=u+\\dfrac{3}{u}$ one has $s^{2}=u^{2}+6+\\dfrac{9}{u^{2}}$, hence $9^{x}+9\\cdot9^{-x}=u^{2}+\\dfrac{9}{u^{2}}=s^{2}-6$, and the whole equation becomes the clean quadratic $s^{2}-7s+12=0$ with roots $s=3$ and $s=4$. A strong student solves both: from $s=4$ they get $u^{2}-4u+3=0$, $u=1,3$, $x=0,1$; from $s=3$ they get $u^{2}-3u+3=0$ and, racing ahead, may either (i) report the discriminant $9-12=-3<0$ as \"complex roots, discard\" after the fact, or (ii) worse, manufacture a third/fourth value of $x$ from the complex $u$. Both miss the structural point. The auxiliary variable $s=u+3/u$ is not free: for $u>0$ its range is exactly $[2\\sqrt3,\\infty)$ by AM--GM, with equality at $u=\\sqrt3$. The candidate $s=3<2\\sqrt3$ is outside the range of the substitution itself, so it could never correspond to any real $x$ — the rejection is a reality/range guard on the substitution, not a sign discard or a discriminant accident discovered downstream. The substitution silently widened the solution space to all of $s\\in\\mathbb{R}$; the honest finish is to restrict $s$ back to the image $[2\\sqrt3,\\infty)$ before trusting either root.",
    "solutions": [
      {
        "name": "Paired substitution to a palindrome, then the AM--GM range gate",
        "steps": [
          "Let $u=3^{x}>0$, so $9^{x}=u^{2}$, $3^{-x}=\\tfrac1u$, $9^{-x}=\\tfrac1{u^{2}}$. The equation is $u^{2}+\\dfrac{9}{u^{2}}-7u-\\dfrac{21}{u}+18=0$. Notice the two mirror pairs: $u^{2}\\!+\\!\\tfrac{9}{u^{2}}$ and $u\\!+\\!\\tfrac{3}{u}$, both built from the single quantity $u+\\tfrac{3}{u}$.",
          "Set $s=u+\\dfrac{3}{u}$. Squaring, $s^{2}=u^{2}+2\\cdot u\\cdot\\tfrac{3}{u}+\\tfrac{9}{u^{2}}=u^{2}+\\tfrac{9}{u^{2}}+6$, so $u^{2}+\\tfrac{9}{u^{2}}=s^{2}-6$. Also $7u+\\tfrac{21}{u}=7\\!\\left(u+\\tfrac3u\\right)=7s$. Substituting: $(s^{2}-6)-7s+18=0$, i.e. $s^{2}-7s+12=0$.",
          "Factor: $(s-3)(s-4)=0$, giving candidates $s=3$ and $s=4$. Crucially these are values of the derived variable $s$, whose admissibility is not automatic.",
          "Reality/range gate. For $u>0$, AM--GM gives $u+\\dfrac{3}{u}\\ge 2\\sqrt{u\\cdot\\tfrac3u}=2\\sqrt3\\approx 3.464$, with equality only at $u=\\sqrt3$. Thus the image of the substitution is $s\\in[2\\sqrt3,\\infty)$. Since $3<2\\sqrt3$, the candidate $s=3$ is not in the range and corresponds to no real $x$; only $s=4$ survives.",
          "Solve $s=4$: $u+\\dfrac3u=4\\Rightarrow u^{2}-4u+3=0\\Rightarrow (u-1)(u-3)=0\\Rightarrow u=1$ or $u=3$. Both are positive, hence valid for $u=3^{x}$.",
          "Therefore $3^{x}=1\\Rightarrow x=0$ and $3^{x}=3\\Rightarrow x=1$. The solution set is $\\boxed{x\\in\\{0,1\\}}$."
        ]
      },
      {
        "name": "Clear denominators to a quartic in $u$ and factor",
        "steps": [
          "With $u=3^{x}>0$, multiply $u^{2}+\\dfrac{9}{u^{2}}-7u-\\dfrac{21}{u}+18=0$ through by $u^{2}>0$ (an equivalence since $u\\ne0$): $u^{4}-7u^{3}+18u^{2}-21u+9=0$.",
          "Seek the factorisation forced by the mirror structure $u^{2}-su+3$ (so that the product of the two roots of each quadratic factor is $3$, matching the $u\\!+\\!3/u$ pairing). Try $(u^{2}-4u+3)(u^{2}-3u+3)$: expanding gives $u^{4}-7u^{3}+18u^{2}-21u+9$, exactly our quartic.",
          "Hence $(u^{2}-4u+3)(u^{2}-3u+3)=0$. First factor: $u^{2}-4u+3=(u-1)(u-3)=0\\Rightarrow u=1,3$, both positive.",
          "Second factor: $u^{2}-3u+3=0$ has discriminant $9-12=-3<0$, so it contributes no real $u$ at all (and certainly no positive one). This is the algebraic shadow of the $s=3$ branch being below the AM--GM floor.",
          "Only $u=1$ and $u=3$ are admissible. Back-substituting $u=3^{x}$: $3^{x}=1\\Rightarrow x=0$, $3^{x}=3\\Rightarrow x=1$.",
          "Thus $\\boxed{x\\in\\{0,1\\}}$."
        ]
      },
      {
        "name": "Range-of-substitution argument: solvable iff $s\\ge 2\\sqrt3$",
        "steps": [
          "Define $g(u)=u+\\dfrac{3}{u}$ for $u>0$. Then $g'(u)=1-\\dfrac{3}{u^{2}}=0$ at $u=\\sqrt3$, where $g$ attains its minimum $g(\\sqrt3)=2\\sqrt3$; $g$ decreases on $(0,\\sqrt3)$ and increases on $(\\sqrt3,\\infty)$, so the range of $g$ is precisely $[2\\sqrt3,\\infty)$.",
          "For a target value $s$, the equation $u+\\tfrac3u=s$, i.e. $u^{2}-su+3=0$, has a positive real solution iff its discriminant $s^{2}-12\\ge0$ and the (necessarily positive, since product $=3>0$ and sum $=s$) roots are real — exactly $s\\ge2\\sqrt3$. This re-derives the gate without AM--GM and ties solvability of $x$ to the discriminant of the inner quadratic.",
          "The equation in $s$ is $s^{2}-7s+12=0$ (Method 1), with roots $s=4$ and $s=3$. Apply the gate: $s=4$ has $4^{2}-12=4>0$ (admissible); $s=3$ has $3^{2}-12=-3<0$ (no real $u$, rejected).",
          "For $s=4$: $u^{2}-4u+3=0\\Rightarrow u=1,3$, both $>0$, so $x=\\log_{3}1=0$ and $x=\\log_{3}3=1$.",
          "Since the $s=3$ branch is barred by the range constraint of the substitution, no further solutions exist. Final answer $\\boxed{x\\in\\{0,1\\}}$."
        ]
      }
    ],
    "remark": "The whole problem is a single sentence in disguise: $u+\\tfrac3u$ is a two-to-one map from $(0,\\infty)$ onto $[2\\sqrt3,\\infty)$, and the moment you write $s=u+3/u$ you trade a constrained variable for a free one — every value of $s$ below $2\\sqrt3$ is a phantom the substitution invented. The factory-set coefficients ($9=3^{2}$, $21=7\\cdot3$, constant $18$) exist solely to make the equation a clean palindrome $s^{2}-7s+12$ with one root straddling the AM--GM floor: $s=4$ above it, $s=3$ below. This is the chapter's signature trap in its purest reality-guard form — the bad root is not killed by a sign, by a domain like $x>0$, or by a discriminant noticed too late, but by the image of the substitution itself. Method 2 makes the same fact algebraically inevitable: clearing denominators yields a quartic that factors as (good quadratic)$\\times$(quadratic with negative discriminant), so the phantom branch never even produces a real $u$. Method 3 is the cleanest mental model: the equation is solvable for $x$ exactly when the inner quadratic $u^{2}-su+3=0$ has a positive root, i.e. iff $s\\ge2\\sqrt3$ — the gate is the discriminant of the substitution, computed before celebrating either palindrome root. The transferable lesson for a top ranker: when a substitution $s=h(u)$ reduces an equation, the solution set lives in $\\operatorname{Im}(h)$, not in $\\mathbb{R}$; always intersect your candidate $s$-values with the range of $h$ before inverting."
  },
  {
    "theme": "disguise",
    "themeLabel": "Reducible to a Quadratic",
    "title": "Shifted Twins Multiply to 63",
    "difficulty": 4,
    "task": "Find the number of …",
    "tags": [
      "product-shift",
      "substitution",
      "range-constraint",
      "real-roots",
      "trap"
    ],
    "statement": "Find the number of real roots of \\[(x^2+5x+5)(x^2+5x+7)=63.\\]",
    "answer": "$2$ real roots: $x=\\dfrac{-5\\pm\\sqrt{33}}{2}$.",
    "trap": "Setting $u=x^2+5x$ gives $(u+5)(u+7)=63\\Rightarrow u^2+12u-28=0\\Rightarrow u=2,-14$, two values of $u$. Declaring '$2$ values of $u\\Rightarrow 4$ roots' is wrong: $u=x^2+5x$ has minimum $-\\tfrac{25}{4}=-6.25$, so $u=-14<-6.25$ is unreachable and contributes no real $x$. Only $u=2$ survives.",
    "solutions": [
      {
        "name": "Substitution $u=x^2+5x$",
        "steps": [
          "The two quadratics differ by a constant: let $u=x^2+5x$, so the factors are $u+5$ and $u+7$.",
          "Equation: $(u+5)(u+7)=63\\Rightarrow u^2+12u+35=63\\Rightarrow u^2+12u-28=0.$",
          "Factor: $(u-2)(u+14)=0\\Rightarrow u=2$ or $u=-14.$",
          "Range check: $u=x^2+5x=(x+\\tfrac52)^2-\\tfrac{25}{4}\\ge-\\tfrac{25}{4}=-6.25$, so $u=-14$ is impossible.",
          "$u=2$: $x^2+5x-2=0$, discriminant $25+8=33>0$, two real roots $x=\\dfrac{-5\\pm\\sqrt{33}}{2}.$",
          "Number of real roots: $\\boxed{2}.$"
        ]
      },
      {
        "name": "Midpoint shift $v=u+6$",
        "steps": [
          "Center the product: with $v=x^2+5x+6$ the factors are $v-1$ and $v+1$, so $(v-1)(v+1)=63.$",
          "Then $v^2-1=63\\Rightarrow v^2=64\\Rightarrow v=\\pm8.$",
          "$v=8$: $x^2+5x+6=8\\Rightarrow x^2+5x-2=0$, discriminant $33>0$ — two reals.",
          "$v=-8$: $x^2+5x+6=-8\\Rightarrow x^2+5x+14=0$, discriminant $25-56=-31<0$ — none.",
          "Real roots: $\\boxed{2}.$"
        ]
      },
      {
        "name": "Sign analysis of $f(x)=(x^2+5x+5)(x^2+5x+7)-63$",
        "steps": [
          "Both quadratic factors share the same vertex line $x=-\\tfrac52$; at the vertex $u=-6.25$, the product is $(-1.25)(0.75)<0$ so $f<0$ there.",
          "As $x\\to\\pm\\infty$, $f\\to+\\infty$, so $f$ changes sign exactly twice.",
          "A quartic with leading coefficient $+1$ that is negative somewhere and positive at both ends crosses zero exactly twice.",
          "Hence $\\boxed{2}$ real roots."
        ]
      }
    ],
    "remark": "Insight: the trick $(P-1)(P+1)=P^2-1$ after centering turns the product into a pure quadratic in $P$, but the substituted variable $u=x^2+5x$ is bounded below — solving the $u$-quadratic blindly invents a phantom pair of roots."
  },
  {
    "theme": "disguise",
    "themeLabel": "Reducible to a Quadratic",
    "title": "The Surd That Lies",
    "difficulty": 4,
    "task": "Find all",
    "tags": [
      "surd",
      "squaring",
      "extraneous-roots",
      "substitution"
    ],
    "statement": "Find all real solutions of \\[x^2+2x+\\sqrt{x^2+2x+8}=12.\\]",
    "answer": "$x=-4$ and $x=2$.",
    "trap": "Substituting $v=x^2+2x$ gives $v+\\sqrt{v+8}=12$, i.e. $\\sqrt{v+8}=12-v$; squaring yields $v^2-25v+136=0\\Rightarrow v=8,17$. Accepting both is the trap: squaring requires $12-v\\ge0$, so $v=17$ is extraneous (it makes the LHS $\\sqrt{25}=5$ but $12-17=-5$). Only $v=8$ is valid.",
    "solutions": [
      {
        "name": "Substitution $v=x^2+2x$ then isolate the surd",
        "steps": [
          "Let $v=x^2+2x$, so $v+\\sqrt{v+8}=12\\Rightarrow\\sqrt{v+8}=12-v.$",
          "Validity of squaring needs $12-v\\ge0$, i.e. $v\\le12.$",
          "Square: $v+8=144-24v+v^2\\Rightarrow v^2-25v+136=0\\Rightarrow(v-8)(v-17)=0.$",
          "$v=17$ violates $v\\le12$ (extraneous); keep $v=8.$",
          "$x^2+2x=8\\Rightarrow x^2+2x-8=0\\Rightarrow(x+4)(x-2)=0\\Rightarrow x=-4,\\,2.$",
          "Both satisfy the original (each gives $8+\\sqrt{16}=12$): $\\boxed{x=-4,\\ 2}.$"
        ]
      },
      {
        "name": "New variable $w=\\sqrt{x^2+2x+8}$",
        "steps": [
          "Set $w=\\sqrt{x^2+2x+8}\\ge0$, so $x^2+2x=w^2-8.$",
          "Equation becomes $(w^2-8)+w=12\\Rightarrow w^2+w-20=0\\Rightarrow(w-4)(w+5)=0.$",
          "Since $w\\ge0$, reject $w=-5$; take $w=4.$",
          "Then $x^2+2x+8=16\\Rightarrow x^2+2x-8=0\\Rightarrow x=-4,2.$",
          "Answer: $\\boxed{x=-4,\\ 2}.$ (The rejected $w=-5$ is precisely the extraneous $v=17$ branch.)"
        ]
      }
    ],
    "remark": "Insight: substituting $w=\\sqrt{\\,\\cdot\\,}$ (rather than squaring) bakes the constraint $w\\ge0$ into the algebra, so the extraneous root is rejected automatically — a cleaner route than squaring and back-checking. Note also the radicand $x^2+2x+8=(x+1)^2+7\\ge7>0$, so the equation is defined for every real $x$ and no domain loss occurs."
  },
  {
    "theme": "disguise",
    "themeLabel": "Reducible to a Quadratic",
    "title": "Antisymmetric Quartet",
    "difficulty": 5,
    "task": "Find the number of …",
    "tags": [
      "reciprocal-equation",
      "anti-symmetric",
      "substitution",
      "real-roots",
      "trap"
    ],
    "statement": "Find the number of real roots of \\[x^4 - 2x^3 - 6x^2 + 2x + 1 = 0.\\]",
    "answer": "$4$ real roots.",
    "trap": "This looks like the standard $t=x+\\tfrac1x$ palindrome, but the coefficients are anti-symmetric ($+1,-2,-6,+2,+1$ has the outer pair matching but the inner pair sign-flipped). Forcing $t=x+\\tfrac1x$ gives a wrong reduction. The correct substitution is $t=x-\\tfrac1x$, whose range is all of $\\mathbb{R}$ — so unlike the $x+1/x$ case there is no $|t|\\ge2$ gate, and every $t$ yields two real $x$. Mis-identifying the symmetry, or importing the $|t|\\ge2$ rule, miscounts.",
    "solutions": [
      {
        "name": "Anti-symmetric substitution $t=x-1/x$",
        "steps": [
          "Divide by $x^2$ (note $x\\ne0$): $\\;x^2-2x-6+\\dfrac2x+\\dfrac1{x^2}=0.$",
          "Group as $\\left(x^2+\\dfrac1{x^2}\\right)-2\\left(x-\\dfrac1x\\right)-6=0$, noticing $+\\tfrac2x$ pairs with $-2x$.",
          "Let $t=x-\\tfrac1x$; then $x^2+\\dfrac1{x^2}=t^2+2$, so $t^2+2-2t-6=0\\Rightarrow t^2-2t-4=0.$",
          "Thus $t=1\\pm\\sqrt5$, two real values.",
          "Crucial range fact: $x-\\tfrac1x$ is a bijection from each of $(0,\\infty)$ and $(-\\infty,0)$ onto $\\mathbb{R}$, so for ANY real $t$ the equation $x^2-tx-1=0$ has discriminant $t^2+4>0$ — always two real $x$.",
          "Each of the two $t$-values gives $2$ distinct reals, totalling $\\boxed{4}.$"
        ]
      },
      {
        "name": "Discriminant of $x^2-tx-1=0$",
        "steps": [
          "Reduce to $t^2-2t-4=0$ via $t=x-\\tfrac1x$, giving $t=1\\pm\\sqrt5.$",
          "For each $t$, $x$ solves $x^2-tx-1=0$ with discriminant $t^2+4$.",
          "Since $t^2+4>0$ for every real $t$, each $t$ produces two distinct real $x$; no value is rejected.",
          "The four roots are distinct because the two $t$-values are distinct and $x-\\tfrac1x$ is injective on each half-line.",
          "Real-root count: $\\boxed{4}.$"
        ]
      },
      {
        "name": "Factor into two quadratics",
        "steps": [
          "The reduction predicts factors $x^2-(1+\\sqrt5)x-1$ and $x^2-(1-\\sqrt5)x-1.$",
          "Their product is $x^4-2x^3-6x^2+2x+1$, matching the polynomial (constant $(-1)(-1)=1$, $x^3$-coeff $-(1+\\sqrt5)-(1-\\sqrt5)=-2$).",
          "Each quadratic has discriminant $(1\\pm\\sqrt5)^2+4>0$, so each gives two real roots.",
          "Total $\\boxed{4}$ real roots."
        ]
      }
    ],
    "remark": "Insight: the substitution must match the symmetry of the coefficients. Symmetric ($x+1/x$) carries the $|t|\\ge2$ gate; anti-symmetric ($x-1/x$) has full range $\\mathbb{R}$ and gates nothing. Reading the coefficient pattern first is what tells you which world you're in."
  },
  {
    "theme": "disguise",
    "themeLabel": "Reducible to a Quadratic",
    "title": "The Base That Vanishes at Two",
    "difficulty": 5,
    "task": "Solve for all real",
    "tags": [
      "logarithmic",
      "change-of-base",
      "quadratic-in-log",
      "extraneous-root",
      "domain-guard",
      "hidden-base"
    ],
    "statement": "Solve for all real $x$: \\[ \\frac{\\log_2 x}{\\log_{\\,x/2} 2}\\;=\\;4\\log_2 x-4. \\] Give the complete solution set, and state explicitly which candidate value the algebra produces but the equation forbids, and why.",
    "answer": "Put $y=\\log_2 x$. By change of base $\\log_{x/2}2=\\dfrac{1}{\\log_2(x/2)}=\\dfrac{1}{y-1}$, so the left side is $y(y-1)$ and the equation becomes the quadratic \\[ y(y-1)=4(y-1)\\;\\Longleftrightarrow\\;y^2-5y+4=0\\;\\Longleftrightarrow\\;(y-1)(y-4)=0, \\] with candidate roots $y=1$ and $y=4$, i.e. $x=2$ and $x=16$. But the original equation contains $\\log_{x/2}2$, whose base $x/2$ must satisfy $x/2>0$ and $x/2\\neq 1$, i.e. $x\\neq 2$. The candidate $x=2$ makes the base equal to $1$, so $\\log_{x/2}2$ does not exist there — $x=2$ is extraneous, an artefact of the change-of-base step that silently cleared the offending denominator. Only $x=16$ survives (base $x/2=8$, and indeed $\\tfrac{\\log_2 16}{\\log_8 2}=\\tfrac{4}{1/3}=12=4\\cdot 4-4$). Hence \\[ \\boxed{x=16}. \\]",
    "trap": "The equation is built to reduce to a clean quadratic in $y=\\log_2 x$: change of base gives $\\log_{x/2}2=\\tfrac{1}{y-1}$, so $\\dfrac{\\log_2 x}{\\log_{x/2}2}=y(y-1)$, and the equation is $(y-1)(y-4)=0$ with roots $y=1,4$, i.e. $x=2,16$. A strong student reports both. The lethal subtlety is that $y=1$ ($x=2$) is exactly the value the substitution destroys: the very step $\\log_{x/2}2=\\tfrac{1}{y-1}$ is valid only when $y\\neq 1$, because at $y=1$ the base $x/2$ equals $1$ and $\\log_{1}2$ is undefined. Multiplying through (or, equivalently, the tempting regrouping $\\dfrac{\\log_2 x}{\\log_{x/2}2}=y(y-1)=\\log_2\\!\\big(x^{\\log_2 x}/x\\big)$) cancels the $(y-1)$ that was sitting in a denominator, so the cleared equation $\\log_2(x^{\\log_2 x}/x)=4\\log_2 x-4$ is defined for all $x>0$ and dutifully accepts $x=2$ — even though the original equation is undefined there. This is a genuine domain/extraneous-root guard, not an arithmetic slip: the forbidden value $x=2$ is not killed by a sign, a discriminant, or a positivity-of-argument condition (every argument here is fine), but by the hidden constraint base$\\,\\neq 1$ on a logarithm whose base contains the unknown. The honest move is to read off the base restriction $x/2\\neq 1$ before simplifying, or to substitute every candidate back into the original equation; either way $x=2$ falls and $x=16$ alone remains.",
    "solutions": [
      {
        "name": "Change of base to a quadratic in $\\log_2 x$, then apply the base guard",
        "steps": [
          "Record the domain first, from the literal expression $\\log_{x/2}2$: its base $x/2$ must be positive and $\\neq 1$, so $x>0$ and $x\\neq 2$. Also $\\log_2 x$ needs $x>0$. So the equation lives on $x\\in(0,2)\\cup(2,\\infty)$ — note that $x=2$ is excluded from the outset.",
          "Let $y=\\log_2 x$. Change base: $\\log_{x/2}2=\\dfrac{\\log_2 2}{\\log_2(x/2)}=\\dfrac{1}{\\log_2 x-\\log_2 2}=\\dfrac{1}{y-1}$ (legitimate because $x\\neq 2\\Rightarrow y\\neq 1$). Therefore $\\dfrac{\\log_2 x}{\\log_{x/2}2}=\\dfrac{y}{1/(y-1)}=y(y-1)$.",
          "The equation becomes $y(y-1)=4(y-1)$, i.e. $(y-1)(y-4)=0$, with roots $y=1$ and $y=4$. Equivalently $y^2-5y+4=0$.",
          "Apply the guard: $y=1$ means $x=2$, which is barred ($x/2=1$). It is an extraneous root introduced precisely because the manipulation $\\log_{x/2}2=\\tfrac{1}{y-1}$ assumed $y\\neq 1$. Only $y=4$ is admissible.",
          "Thus $\\log_2 x=4\\Rightarrow x=2^4=16$. Check in the original: base $x/2=8$, $\\log_8 2=\\tfrac13$, so LHS $=\\dfrac{4}{1/3}=12$ and RHS $=4\\cdot 4-4=12$. Hence $\\boxed{x=16}$."
        ]
      },
      {
        "name": "The seductive regrouping that drops the guard, then a back-substitution catches it",
        "steps": [
          "Rewrite the left side as a single base-$2$ logarithm. Since $\\dfrac{\\log_2 x}{\\log_{x/2}2}=(\\log_2 x)\\cdot\\log_2(x/2)=(\\log_2 x)^2-\\log_2 x=\\log_2\\!\\big(x^{\\log_2 x}\\big)-\\log_2 x=\\log_2\\!\\Big(\\dfrac{x^{\\log_2 x}}{x}\\Big)$, the equation looks like $\\log_2\\!\\Big(\\dfrac{x^{\\log_2 x}}{x}\\Big)=4\\log_2 x-4=\\log_2\\!\\Big(\\dfrac{x^4}{16}\\Big)$.",
          "Equating arguments: $\\dfrac{x^{\\log_2 x}}{x}=\\dfrac{x^4}{16}$, i.e. $x^{\\log_2 x}=\\dfrac{x^5}{16}$. Taking $\\log_2$ of both sides (both are positive for $x>0$): $(\\log_2 x)^2=5\\log_2 x-4$, the quadratic $y^2-5y+4=0$ with roots $y=1,4$, i.e. $x=2,16$.",
          "Crucial caution: the regrouping in step 1 is an identity only away from $x=2$ — it quietly cancelled the factor $(y-1)$ that lived in a denominator of the original, so the rewritten equation is defined for all $x>0$ and will accept the bogus $x=2$. The candidates must therefore be tested in the original equation, not the simplified one.",
          "Test $x=2$: the original needs $\\log_{x/2}2=\\log_{1}2$, which is undefined. Reject. Test $x=16$: $\\log_{8}2=\\tfrac13$ exists, and LHS $=4\\div\\tfrac13=12=$ RHS. Accept.",
          "Therefore the unique solution is $\\boxed{x=16}$, and $x=2$ is exposed as the extraneous root the substitution manufactured."
        ]
      },
      {
        "name": "Direct candidate verification without ever inverting (range/definedness test)",
        "steps": [
          "Set $f(x)=\\dfrac{\\log_2 x}{\\log_{x/2}2}-\\big(4\\log_2 x-4\\big)$ on its natural domain $(0,2)\\cup(2,\\infty)$. Any solution is a zero of $f$ where $f$ is defined; the point $x=2$ is not in the domain, so it can never be a solution regardless of algebra.",
          "From step-by-step change of base, $f(x)=0\\iff y(y-1)=4(y-1)\\iff (y-1)(y-4)=0$ for $y=\\log_2 x$ with $y\\neq 1$; the only admissible root is $y=4$.",
          "Verify $y=4$ directly: $x=16$, base $x/2=8>0,\\ \\neq 1$, $\\log_8 2=\\tfrac13$, giving $\\dfrac{4}{1/3}-(16-4)=12-12=0$. So $x=16$ is a genuine zero of $f$ inside the domain.",
          "Verify that the other quadratic root is not a domain point: $y=1\\Rightarrow x=2$, base $x/2=1$, and $\\log_1 2$ is undefined; $f(2)$ does not exist, so $x=2$ is excluded — it is the extraneous root predicted by the hidden base-$\\neq 1$ constraint.",
          "A monotonicity sweep confirms uniqueness: on $(0,2)$ and on $(2,\\infty)$ the equation $(y-1)(y-4)=0$ (with $y\\neq 1$) has the single admissible root $y=4$, so $f$ has exactly one zero overall. Hence $\\boxed{x=16}$."
        ]
      }
    ],
    "remark": "Insight: the whole problem turns on a logarithm whose base contains the unknown. The instant you change base — $\\log_{x/2}2=\\tfrac{1}{\\log_2(x/2)}=\\tfrac{1}{y-1}$ — you create a denominator $(y-1)$ and then, in tidying $\\dfrac{\\log_2 x}{\\log_{x/2}2}=y(y-1)$, you cancel it. That cancellation is the trap: it converts a removable-singularity point into an apparently valid root. The cleared quadratic $(y-1)(y-4)=0$ honestly reports both $x=2$ and $x=16$, but $x=2$ is exactly the value that makes the original base $x/2$ equal to $1$, where $\\log_{1}2$ does not exist. The transferable discipline for a top ranker: with a variable-base logarithm $\\log_{g(x)}(\\cdot)$, write down $g(x)>0$ and $g(x)\\neq 1$ before any change of base, and after reducing to a quadratic in $\\log_2 x$, intersect the roots with that domain — never simplify first and trust the cleaned-up equation, because the simplification is precisely what erased the constraint. The same fingerprint appears whenever a substitution multiplies through by a factor that can vanish: the cleared equation is a superset of the original, and the extra roots are the ones the substitution invented."
  },
  {
    "theme": "disguise",
    "themeLabel": "Reducible to a Quadratic",
    "title": "The Radical That Folds Into Itself",
    "difficulty": 5,
    "task": "Solve",
    "tags": [
      "nested-radical",
      "self-reference",
      "extraneous-root",
      "domain-guard",
      "monotone-fixed-point",
      "sign-trap"
    ],
    "statement": "Find all real numbers $x$ satisfying the self-referential nested radical \\[ x \\;=\\; \\sqrt{\\,7 + \\sqrt{\\,7 - x\\,}\\,}. \\] State the complete solution set and prove there are no others. (The inner sign is a minus: the radicand of the outer root contains a root of $7-x$, not $7+x$.)",
    "answer": "Both square roots are principal, so any solution must satisfy $x\\ge 0$, and from the outer root $x^{2}=7+\\sqrt{7-x}\\ge 7$, hence $x\\ge\\sqrt7\\approx 2.6458$; also $7-x\\ge 0$. The folding trick. Put $y=\\sqrt{7-x}\\ge 0$, so the two defining relations are \\[ x^{2}=7+y,\\qquad y^{2}=7-x. \\] Subtracting, $x^{2}-y^{2}=x+y$, i.e. $(x-y)(x+y)=(x+y)$. Since $x\\ge\\sqrt7>0$ and $y\\ge 0$ give $x+y>0$, we may cancel to get $x-y=1$, i.e. $y=x-1$. Feeding this into $y^{2}=7-x$: \\[ (x-1)^{2}=7-x\\;\\Longrightarrow\\; x^{2}-x-6=0\\;\\Longrightarrow\\;(x-3)(x+2)=0. \\] The root $x=-2$ is rejected (a principal square root is never negative; equivalently it violates $x\\ge\\sqrt7$). The root $x=3$ passes every guard, and directly $\\sqrt{7+\\sqrt{7-3}}=\\sqrt{7+\\sqrt4}=\\sqrt{7+2}=\\sqrt9=3.$ \\[ \\boxed{\\,x=3\\ \\text{is the unique real solution.}\\,} \\]",
    "trap": "The instinctive move is to clear radicals by squaring twice. Squaring once gives $x^{2}-7=\\sqrt{7-x}$; squaring again gives the quartic \\[ (x^{2}-7)^{2}=7-x\\;\\Longrightarrow\\; x^{4}-14x^{2}+x+42=0, \\] which factors as $(x-3)(x+2)(x^{2}+x-7)=0$. A solver who now lists the positive roots reports $x=3$ and $x=\\tfrac{-1+\\sqrt{29}}{2}\\approx 2.192$ — and the second one is a lethal extraneous root. It is a genuine root of the quartic, it is positive, it even looks like it ought to come from a sibling nested radical, so the careless eye keeps it. But it fails the sign guard that the second squaring destroyed: $x^{2}-7=\\sqrt{7-x}$ requires the left side to be non-negative, i.e. $x\\ge\\sqrt7\\approx 2.6458$, whereas $\\tfrac{-1+\\sqrt{29}}{2}\\approx 2.192<\\sqrt7$, so there $x^{2}-7<0$ while $\\sqrt{7-x}\\ge 0$ — impossible. Squaring $A=B$ silently admits $A=-B$, and this ghost root is exactly the $A=-B$ branch. The deeper trap is structural: the second squaring quadruples the candidate set (four quartic roots for a problem with one honest answer), and only the discipline of re-imposing $x\\ge\\sqrt7$ (or the elegant folding trick, which never squares twice and produces only $x=3,-2$) keeps the count honest. A solver who only checks $x\\ge0$, not $x\\ge\\sqrt7$, will wrongly keep $2.192$.",
    "solutions": [
      {
        "name": "Fold the radical onto itself (subtract the two squares)",
        "steps": [
          "Record the guards before touching anything. Both roots are principal, so $x\\ge 0$; the outer equation $x^{2}=7+\\sqrt{7-x}$ forces $x^{2}\\ge 7$, hence $x\\ge\\sqrt7$; and the inner radicand needs $7-x\\ge 0$. So any solution lives in $[\\sqrt7,\\,7]$.",
          "Name the inner radical $y=\\sqrt{7-x}\\ge 0$. The structure now reads as a tidy symmetric system: from the outer root $x^{2}=7+y$, and by definition of $y$, $y^{2}=7-x$. The self-reference has become two equations in two unknowns.",
          "Subtract them: $x^{2}-y^{2}=(7+y)-(7-x)=x+y$, so $(x-y)(x+y)=(x+y)$. Because $x\\ge\\sqrt7>0$ and $y\\ge 0$, the factor $x+y>0$ is nonzero and may be cancelled, leaving the single linear relation $x-y=1$, i.e. $y=x-1$.",
          "Substitute $y=x-1$ into $y^{2}=7-x$: $(x-1)^{2}=7-x\\Rightarrow x^{2}-x-6=0\\Rightarrow(x-3)(x+2)=0$. The quadratic — the disguise finally undone — offers $x=3$ and $x=-2$; the latter is impossible since $x=\\sqrt{\\cdots}\\ge 0$ (it also fails $x\\ge\\sqrt7$). Hence $\\boxed{x=3}$, and $\\sqrt{7+\\sqrt{7-3}}=\\sqrt9=3$ confirms it."
        ]
      },
      {
        "name": "Brute double-squaring, then weed the quartic with the sign guard",
        "steps": [
          "From $x=\\sqrt{7+\\sqrt{7-x}}$ square once: $x^{2}=7+\\sqrt{7-x}$, i.e. $x^{2}-7=\\sqrt{7-x}$. The right side is $\\ge 0$, so this carries the hidden constraint $x^{2}-7\\ge 0$, i.e. $x\\ge\\sqrt7$ (together with $x\\ge 0$ from the original principal root). Keep this guard in hand — the next squaring will erase it.",
          "Square again: $(x^{2}-7)^{2}=7-x$, giving $x^{4}-14x^{2}+x+42=0$. Factor: $(x-3)(x+2)(x^{2}+x-7)=0$, whose real roots are $x=3,\\;x=-2,\\;x=\\tfrac{-1\\pm\\sqrt{29}}{2}$ (numerically $2.192$ and $-3.192$).",
          "Re-impose the guard $x\\ge\\sqrt7\\approx 2.6458$ (equivalently, check $x^{2}-7=+\\sqrt{7-x}$ with the correct sign). Reject $x=-2$ and $x=-3.192$ at once ($x<0$). Reject $x=\\tfrac{-1+\\sqrt{29}}{2}\\approx 2.192$: it is below $\\sqrt7$, so $x^{2}-7<0$ cannot equal the non-negative $\\sqrt{7-x}$ — it is the spurious $A=-B$ branch introduced by squaring.",
          "Only $x=3$ survives ($3\\ge\\sqrt7$, $3^{2}-7=2=\\sqrt{7-3}$). Substituting back, $\\sqrt{7+\\sqrt{7-3}}=\\sqrt{7+2}=3$. Hence $\\boxed{x=3}$ is the unique real solution; the quartic's other three roots are all extraneous."
        ]
      },
      {
        "name": "Monotone fixed point (uniqueness without solving a quartic)",
        "steps": [
          "Define $F(x)=\\sqrt{7+\\sqrt{7-x}}$ on its natural domain $x\\le 7$; a solution is exactly a fixed point $F(x)=x$. As $x$ increases, $7-x$ decreases, so $\\sqrt{7-x}$ decreases, so $7+\\sqrt{7-x}$ decreases, so $F(x)$ strictly decreases. Thus $F$ is a strictly decreasing continuous function.",
          "The map $G(x)=F(x)-x$ is then strictly decreasing (decreasing minus increasing), hence injective: $G$ has at most one zero. So the equation can have at most one real solution — no case-splitting needed.",
          "Exhibit the solution by spotting the self-similar value: try $x=3$. Then $7-x=4$, $\\sqrt4=2$, $7+2=9$, $\\sqrt9=3=x$. So $F(3)=3$: $x=3$ is a fixed point.",
          "By the at-most-one conclusion of step 2, this fixed point is the only one. Therefore $\\boxed{x=3}$ is the unique real solution. (Cross-check on monotonicity: $F(2.9)\\approx 3.004>2.9$ and $F(3.1)\\approx 2.996<3.1$, so $G$ changes sign across $x=3$ exactly once.)"
        ]
      }
    ],
    "remark": "Insight: a self-referential nested radical is not solved by grinding radicals away but by naming the inner copy and letting the equation fold onto itself. Writing $y=\\sqrt{7-x}$ turns the single mysterious equation into the symmetric pair $x^{2}=7+y,\\ y^{2}=7-x$; subtracting collapses the squares to $(x-y)(x+y)=x+y$, and the strict positivity of $x+y$ — the one domain fact that earns its keep — cancels cleanly to the linear $x=y+1$, after which a single honest quadratic $x^{2}-x-6=0$ remains. The deliberate minus inside (a root of $7-x$, not $7+x$) is what makes the subtraction produce $x+y$ on the right and so factor; with a plus inside one would add instead and the trick reorganises, but the philosophy — exploit the self-similarity, do not brute-force it — is identical. The chapter's signature trap lives in the alternative route: squaring twice is legal but lossy, replacing $A=B$ with $A^{2}=B^{2}$ and thereby smuggling in the entire $A=-B$ branch. Here that branch is the seductive $\\tfrac{-1+\\sqrt{29}}{2}\\approx 2.192$, a true quartic root, positive, plausible — and dead on arrival because it sits below $\\sqrt7$, where $x^{2}-7$ has the wrong sign. The top-ranker reflex is threefold: (i) extract all guards ($x\\ge 0$, then the sharper $x\\ge\\sqrt7$, plus $x\\le 7$) before squaring; (ii) prefer the folding identity that never squares twice and so never breeds the ghost; and (iii) when a clean answer like $x=3$ appears, certify uniqueness by the monotone-fixed-point argument rather than trusting that the quartic had no other survivors. All three roads meet at $x=3$."
  },
  {
    "theme": "disguise",
    "themeLabel": "Reducible to a Quadratic",
    "title": "The Symmetric Pair That Fakes a Second Solution",
    "difficulty": 5,
    "task": "Find all",
    "tags": [
      "symmetric-system",
      "vieta-of-the-pair",
      "reality-discriminant",
      "power-sum",
      "extraneous-branch",
      "newton-identity"
    ],
    "statement": "Find all ordered pairs of real numbers $(x,y)$ satisfying the symmetric system \\[x+y=4,\\qquad x^{4}+y^{4}=82.\\] (Reducing to $s=x+y,\\ p=xy$ turns the second equation into a quadratic in $p$ with two roots — be sure you can say which of them actually come from real $x,y$, and how many real pairs there are in all.)",
    "answer": "$\\boxed{(x,y)\\in\\{(1,3),\\,(3,1)\\}}$ — exactly two real ordered pairs. With $s=x+y=4$, $p=xy$, the identity $x^{4}+y^{4}=2p^{2}-4ps^{2}+s^{4}$ gives $2p^{2}-64p+256=82$, i.e. $p^{2}-32p+87=0$, with roots $p=3$ and $p=29$. The Vieta pair $\\{x,y\\}$ are the roots of $t^{2}-st+p=t^{2}-4t+p=0$, which are real iff the reality discriminant $s^{2}-4p\\ge0$, i.e. $16-4p\\ge0$, i.e. $p\\le4$. Thus $p=3$ is admissible (disc $=4>0$, roots $t=1,3$) while $p=29$ is barred (disc $=16-116=-100<0$, roots $t=2\\pm5i$ — not real). The only real solutions are the two orderings of $\\{1,3\\}$.",
    "trap": "The substitution $s=x+y,\\ p=xy$ is two-stage, and both stages need a reality check — but the second equation only forces the first. From $x^{4}+y^{4}=2p^{2}-4ps^{2}+s^{4}$ a strong student gets the clean quadratic $p^{2}-32p+87=0$ and correctly finds $p\\in\\{3,29\\}$. The trap is to treat each value of $p$ as a delivered solution and announce four real pairs (two orderings for each $p$), or to write down ``$xy=29,\\ x+y=4$'' and quote $t^{2}-4t+29=0$ as if it had real roots. It does not: a value of $p$ is only the product of a real pair when the inner quadratic $t^{2}-st+p=0$ has real roots, i.e. exactly when $s^{2}-4p\\ge0$. Here $s^{2}-4p=16-4p$, so the live constraint is $p\\le4$: $p=3$ passes, $p=29$ fails ($16-116=-100<0$). The crucial point is that this is a hidden discriminant of the symmetric pair, not a careless oversight: the algebra in $p$ is honest and complete, yet a whole branch of it ($p=29$) corresponds to the conjugate pair $2\\pm5i$ — real product, real sum, but complex members. Tellingly, $p=29$ would also force $x^{2}+y^{2}=s^{2}-2p=16-58=-42<0$, an outright impossibility for reals. The reduction silently enlarged the search from ``real pairs'' to ``pairs with real $s$ and $p$''; the honest finish intersects the $p$-roots with the reality cone $p\\le s^{2}/4$ before counting solutions.",
    "solutions": [
      {
        "name": "Vieta of the pair, then the reality discriminant $s^{2}-4p\\ge0$",
        "steps": [
          "Put $s=x+y=4$ and $p=xy$. Newton's identity (or $x^{4}+y^{4}=(x^{2}+y^{2})^{2}-2x^{2}y^{2}$ with $x^{2}+y^{2}=s^{2}-2p$) gives $x^{4}+y^{4}=(s^{2}-2p)^{2}-2p^{2}=2p^{2}-4ps^{2}+s^{4}$.",
          "Substitute $s=4$: $2p^{2}-4p(16)+256=82\\Rightarrow 2p^{2}-64p+174=0\\Rightarrow p^{2}-32p+87=0$. Factoring, $(p-3)(p-29)=0$, so $p=3$ or $p=29$.",
          "Reality gate. For a target pair, $x$ and $y$ are the roots of $t^{2}-st+p=t^{2}-4t+p=0$; these are real iff $s^{2}-4p\\ge0$, i.e. $16-4p\\ge0$, i.e. $p\\le4$. Test the candidates: $p=3$ gives disc $16-12=4>0$ (real); $p=29$ gives disc $16-116=-100<0$ (complex, rejected).",
          "Only $p=3$ survives. Solve $t^{2}-4t+3=0\\Rightarrow(t-1)(t-3)=0\\Rightarrow t\\in\\{1,3\\}$, so $\\{x,y\\}=\\{1,3\\}$.",
          "Restoring order, the real solutions are exactly $(x,y)=(1,3)$ and $(x,y)=(3,1)$: $\\boxed{(x,y)\\in\\{(1,3),(3,1)\\}}$."
        ]
      },
      {
        "name": "Direct elimination to a quartic that factors over $\\mathbb{R}$",
        "steps": [
          "Eliminate using $y=4-x$: $x^{4}+(4-x)^{4}=82$. Expanding, $2x^{4}-16x^{3}+96x^{2}-256x+256=82$, i.e. $2x^{4}-16x^{3}+96x^{2}-256x+174=0$, or $x^{4}-8x^{3}+48x^{2}-128x+87=0$.",
          "The symmetric structure forces a factorisation into two real quadratics whose constant terms are the two products $p=3,29$ (and each has linear term $-s=-4$): $x^{4}-8x^{3}+48x^{2}-128x+87=(x^{2}-4x+3)(x^{2}-4x+29)$, which one checks by expansion.",
          "First factor: $x^{2}-4x+3=(x-1)(x-3)=0\\Rightarrow x=1$ or $x=3$, giving $(x,y)=(1,3),(3,1)$ since $y=4-x$.",
          "Second factor: $x^{2}-4x+29=0$ has discriminant $16-116=-100<0$, so it yields no real $x$ at all (its roots are $2\\pm5i$). This is the algebraic shadow of the rejected $p=29$ branch: a quadratic factor irreducible over $\\mathbb{R}$.",
          "Hence the only real $x$ are $1$ and $3$, so $\\boxed{(x,y)\\in\\{(1,3),(3,1)\\}}$, two pairs — not four."
        ]
      },
      {
        "name": "Shift to the mean: biquadratic in the spread $d$ with $d^{2}\\ge0$",
        "steps": [
          "Since $x+y=4$, the pair is symmetric about its mean $2$: write $x=2+d,\\ y=2-d$, where $2d=x-y$ measures the spread. Any real pair with sum $4$ has a real $d$, and conversely; reality of the pair is precisely $d\\in\\mathbb{R}$, i.e. $d^{2}\\ge0$.",
          "Compute $x^{4}+y^{4}=(2+d)^{4}+(2-d)^{4}=2\\big(16+24d^{2}+d^{4}\\big)=2d^{4}+48d^{2}+32$. Setting this equal to $82$ gives $2d^{4}+48d^{2}-50=0$, i.e. $d^{4}+24d^{2}-25=0$.",
          "This is a quadratic in $D=d^{2}$: $D^{2}+24D-25=0\\Rightarrow(D-1)(D+25)=0\\Rightarrow D=1$ or $D=-25$. The reality guard is now transparent: $D=d^{2}$ must be $\\ge0$, so $D=-25$ is impossible and only $D=1$ remains (the discarded $D=-25$ is exactly the $p=29$ phantom, since $p=xy=4-d^{2}=4-D$ gives $4-(-25)=29$).",
          "From $D=d^{2}=1$, $d=\\pm1$, so $(x,y)=(2+1,2-1)=(3,1)$ or $(2-1,2+1)=(1,3)$.",
          "Therefore the complete real solution set is $\\boxed{(x,y)\\in\\{(1,3),(3,1)\\}}$."
        ]
      }
    ],
    "remark": "The engine here is Vieta of the pair: $\\{x,y\\}$ are the roots of $t^{2}-st+p=0$, so the genuine variables are $s=x+y$ and $p=xy$ — and any power sum $x^{n}+y^{n}$ is a polynomial in them (here $x^{4}+y^{4}=2p^{2}-4ps^{2}+s^{4}$). Fixing $s=4$ collapses the system to a single quadratic in $p$, the chapter's signature move, but the reduction smuggles in a phantom: solving for $p$ searches over all pairs with real sum and product, which is strictly larger than the set of pairs with real members. The bridge back is the discriminant of the inner quadratic, $s^{2}-4p\\ge0$, i.e. $p\\le s^{2}/4=4$ — a reality cone the candidate $p$ must lie in. One root, $p=3$, is inside; the other, $p=29$, is outside, and it is no accident that $p=29$ pairs with the conjugates $2\\pm5i$ (real sum $4$, real product $29$, complex members) and even predicts the impossible $x^{2}+y^{2}=16-2(29)=-42$. Method 2 makes the same fact unavoidable algebraically: the quartic splits as (real-root quadratic)$\\times$(quadratic with negative discriminant), the second factor being the phantom branch frozen into an $\\mathbb{R}$-irreducible factor. Method 3 is the cleanest mental model — parametrising by the spread $d$ turns reality of the pair into the visible condition $d^{2}\\ge0$, and the bad branch surfaces as the forbidden $d^{2}=-25$. The transferable lesson for a top ranker: when you trade $(x,y)$ for $(s,p)$, you must re-impose $s^{2}-4p\\ge0$ on every candidate before counting — a value of $p$ is a real solution only when it sits in the reality cone of the symmetric pair, never merely because the quadratic in $p$ produced it."
  },
  {
    "theme": "disguise",
    "themeLabel": "Reducible to a Quadratic",
    "title": "The Perfect-Square Collapse",
    "difficulty": 5,
    "task": "Find the number of …",
    "tags": [
      "exponential",
      "nested-substitution",
      "symmetry",
      "real-roots",
      "trap"
    ],
    "statement": "Find the number of real solutions of \\[4^{\\,x}+4^{-x}-6\\bigl(2^{\\,x}+2^{-x}\\bigr)+11=0.\\]",
    "answer": "$2$ real solutions: $x=\\pm\\log_2\\!\\dfrac{3+\\sqrt5}{2}$.",
    "trap": "With $s=2^x+2^{-x}$, note $4^x+4^{-x}=s^2-2$, so the equation becomes $s^2-6s+9=(s-3)^2=0\\Rightarrow s=3$ — a DOUBLE root in $s$. The trap is to read 'double root $\\Rightarrow$ one solution'; the multiplicity in $s$ is irrelevant. Each distinct admissible $s$ (here only $s=3$, and $s\\ge2$ holds) then opens a SECOND quadratic in $t=2^x$, namely $t+1/t=3$, which itself yields two positive $t$, hence two real $x$.",
    "solutions": [
      {
        "name": "Double substitution $s=2^x+2^{-x}$, then $t=2^x$",
        "steps": [
          "Let $s=2^x+2^{-x}$. By AM–GM, $s\\ge2$. Also $4^x+4^{-x}=(2^x+2^{-x})^2-2=s^2-2.$",
          "Equation: $s^2-2-6s+11=0\\Rightarrow s^2-6s+9=0\\Rightarrow(s-3)^2=0\\Rightarrow s=3.$",
          "Since $3\\ge2$, $s=3$ is admissible. Now set $t=2^x>0$: $t+\\dfrac1t=3\\Rightarrow t^2-3t+1=0.$",
          "Roots $t=\\dfrac{3\\pm\\sqrt5}{2}$, both positive, so both give a real $x.$",
          "$x=\\log_2\\!\\dfrac{3\\pm\\sqrt5}{2}$; note these are negatives of each other. Number of real solutions: $\\boxed{2}.$"
        ]
      },
      {
        "name": "Single variable $t=2^x$ throughout",
        "steps": [
          "With $t=2^x>0$: $4^x=t^2$, $4^{-x}=t^{-2}$, $2^{-x}=t^{-1}.$",
          "Equation: $t^2+t^{-2}-6(t+t^{-1})+11=0.$ Multiply by $t^2$: $t^4-6t^3+11t^2-6t+1=0.$",
          "This palindrome factors as $(t^2-3t+1)^2=0$ (expand: $(t^2-3t+1)^2=t^4-6t^3+11t^2-6t+1$).",
          "So $t^2-3t+1=0\\Rightarrow t=\\dfrac{3\\pm\\sqrt5}{2}$, both $>0.$",
          "Each positive $t$ gives one real $x=\\log_2 t$; the squared factor does not change the SET of $t$-roots, only multiplicity.",
          "Distinct real $x$: $\\boxed{2}.$"
        ]
      },
      {
        "name": "Symmetry $x\\mapsto -x$",
        "steps": [
          "The function $h(x)=4^x+4^{-x}-6(2^x+2^{-x})+11$ is even: $h(-x)=h(x).$",
          "Hence real roots come in $\\pm$ pairs unless $x=0$. Test $x=0$: $1+1-6(2)+11=1\\ne0$, so $0$ is not a root.",
          "Restrict to $x>0$ via $s=2^x+2^{-x}>2$: the equation $(s-3)^2=0$ gives the single value $s=3>2$, attained at exactly one $x>0$ (since $s$ is strictly increasing on $x>0$).",
          "By evenness that $x>0$ root has a mirror $x<0$ root, and no others.",
          "Total real solutions: $\\boxed{2}.$"
        ]
      }
    ],
    "remark": "Insight: this is a quadratic nested in a quadratic. Multiplicity at the OUTER level ($(s-3)^2$) is a decoy — what counts the real $x$ is how many admissible outer values feed forward, and how many positive $t=2^x$ each inner quadratic delivers. The even symmetry is a fast independent check that the count is $2$."
  },
  {
    "theme": "disguise",
    "themeLabel": "Reducible to a Quadratic",
    "title": "The Reciprocal That Rejects a Root",
    "difficulty": 4,
    "task": "Determine the number of real solutions.",
    "tags": [
      "reciprocal",
      "substitution",
      "rejection",
      "palindromic",
      "real-roots"
    ],
    "statement": "Find the number of real solutions of\n\\[\n2\\left(x^{2}+\\frac{1}{x^{2}}\\right)-7\\left(x+\\frac{1}{x}\\right)+9=0.\n\\]",
    "answer": "There are exactly $\\boxed{2}$ real solutions, namely $x=2$ and $x=\\tfrac12$.\n\nPut $t=x+\\dfrac1x$, so $x^{2}+\\dfrac1{x^{2}}=t^{2}-2$. The equation becomes $2(t^{2}-2)-7t+9=0$, i.e. $2t^{2}-7t+5=0$, with roots $t=\\dfrac52$ and $t=1$. Recovering $x$ from $x+\\dfrac1x=t$ means solving $x^{2}-tx+1=0$, whose discriminant is $t^{2}-4$; real $x$ require $|t|\\ge 2$. Since $|1|<2$, the value $t=1$ yields no real $x$ and is discarded. Only $t=\\dfrac52$ survives, giving $2x^{2}-5x+2=0$, hence $x=2$ and $x=\\tfrac12$. Total: $2$ real solutions.",
    "trap": "Each admissible $t$ normally returns two values of $x$, so a careless solver counts $2\\times 2=4$ real roots. The value $t=1$ has $t^{2}-4=-3<0$, so it produces no real $x$ and must be rejected — only $t=\\tfrac52$ contributes. Forgetting the $|t|\\ge 2$ feasibility test (the constraint forced by AM–GM on $x+\\tfrac1x$) is the central error.",
    "solutions": [
      {
        "name": "Reciprocal substitution $t=x+\\tfrac1x$",
        "steps": [
          "Note $x\\neq 0$, and set $t=x+\\dfrac1x$ so that $x^{2}+\\dfrac1{x^{2}}=t^{2}-2$.",
          "Substitute: $2(t^{2}-2)-7t+9=0\\Rightarrow 2t^{2}-7t+5=0$, factoring as $(2t-5)(t-1)=0$, so $t=\\dfrac52$ or $t=1$.",
          "For each $t$, real $x$ solves $x^{2}-tx+1=0$ with discriminant $t^{2}-4$; this is $\\ge 0$ only when $|t|\\ge 2$.",
          "$t=1$ gives discriminant $-3<0$ (reject); $t=\\dfrac52$ gives $\\dfrac{25}{4}-4=\\dfrac94>0$, so $2x^{2}-5x+2=0\\Rightarrow x=2,\\ \\tfrac12$.",
          "Hence exactly $2$ real solutions."
        ]
      },
      {
        "name": "Palindromic quartic factorisation",
        "steps": [
          "Multiply through by $x^{2}\\ (\\neq 0)$: $2x^{4}-7x^{3}+9x^{2}-7x+2=0$, a palindromic quartic.",
          "Seek a factorisation $(2x^{2}+ax+2)(x^{2}+bx+1)$; matching coefficients gives $(2x^{2}-5x+2)(x^{2}-x+1)$.",
          "Verify $x^{2}-x+1=0$ has discriminant $1-4=-3<0$, contributing no real root.",
          "$2x^{2}-5x+2=0$ factors as $(2x-1)(x-2)=0$, giving $x=\\tfrac12$ and $x=2$.",
          "So the quartic has exactly $2$ real roots."
        ]
      },
      {
        "name": "Feasibility via AM–GM bound on $x+\\tfrac1x$",
        "steps": [
          "For real $x\\neq 0$, the value $u=x+\\dfrac1x$ satisfies $|u|\\ge 2$ (AM–GM: $x>0\\Rightarrow u\\ge 2$; $x<0\\Rightarrow u\\le -2$), and every such $u$ is attained by exactly two $x$ unless $u=\\pm2$.",
          "Reducing the equation to $2u^{2}-7u+5=0$ gives candidate values $u=\\dfrac52$ and $u=1$.",
          "Only $u=\\dfrac52$ lies in the attainable range $|u|\\ge 2$; $u=1$ is impossible, so it contributes nothing.",
          "Since $u=\\dfrac52\\neq\\pm2$, it is attained by exactly two distinct real $x$.",
          "Therefore the equation has exactly $2$ real solutions."
        ]
      }
    ],
    "remark": "The palindromic structure $2,-7,9,-7,2$ is the tell that a reciprocal substitution will collapse the degree-4 equation to a quadratic in $t=x+\\tfrac1x$. The lesson is that solving for $t$ is only half the work: each $t$ must be screened against the attainability constraint $|t|\\ge2$ before its two preimages are counted. Here exactly one of the two $t$-values clears the bar, so the honest count is $2$, not $4$."
  },
  {
    "theme": "parameter",
    "themeLabel": "Parameters",
    "title": "The Vanishing Leading Coefficient",
    "difficulty": 4,
    "task": "Find all",
    "tags": [
      "vieta",
      "discriminant",
      "sign-conditions",
      "degenerate-case",
      "both-roots-negative"
    ],
    "statement": "Determine every real number $k$ for which the equation \\[(k-1)x^2 + 2(k+1)x + (k+4) = 0\\] possesses two real roots, both of which are negative (a repeated negative root is allowed).",
    "answer": "$k \\in (-\\infty,\\,-4)\\,\\cup\\,(1,\\,5]$.",
    "trap": "Plugging $k=1$ into the 'two negative roots' machinery (product $>0$, sum $<0$, $D\\ge 0$). At $k=1$ the leading coefficient vanishes, the equation collapses to the linear $4x+5=0$ with the single root $-\\tfrac54$, so there are not two roots at all — $k=1$ must be excluded outright, not analysed via Vieta.",
    "solutions": [
      {
        "name": "Vieta sign analysis (genuine quadratic)",
        "steps": [
          "Require $a=k-1\\neq 0$, i.e. $k\\neq 1$, so the equation is genuinely quadratic.",
          "Discriminant: $D=4(k+1)^2-4(k-1)(k+4)=-4(k-5)\\ge 0\\iff k\\le 5$.",
          "Both roots negative needs product $\\tfrac{k+4}{k-1}>0$ (so $k<-4$ or $k>1$) and sum $-\\tfrac{2(k+1)}{k-1}<0$, i.e. $\\tfrac{k+1}{k-1}>0$ (so $k<-1$ or $k>1$).",
          "Intersect with $k\\le 5$ and $k\\neq1$: the branch $k<-4$ satisfies everything; the branch $k>1$ gives $1<k\\le 5$.",
          "At $k=-4$ the product is $0$ (a root equals $0$, not negative), so $k=-4$ is excluded; at $k=5$, $D=0$ gives the double root $-\\tfrac32<0$, included. Hence $\\boxed{k\\in(-\\infty,-4)\\cup(1,5]}$."
        ]
      },
      {
        "name": "Locating roots relative to $0$ via $f(0)$ and the vertex",
        "steps": [
          "For $k\\neq1$ write $f(x)=(k-1)x^2+2(k+1)x+(k+4)$; both roots $<0$ means $f$ has its two real zeros to the left of $0$.",
          "This is equivalent to: $D\\ge0$, $a\\cdot f(0)>0$, and the vertex abscissa $-\\tfrac{b}{2a}<0$.",
          "$D\\ge0\\Rightarrow k\\le5$. $a f(0)=(k-1)(k+4)>0\\Rightarrow k<-4$ or $k>1$. Vertex $-\\tfrac{(k+1)}{(k-1)}<0\\Rightarrow \\tfrac{k+1}{k-1}>0\\Rightarrow k<-1$ or $k>1$.",
          "Combining (with $k\\neq1$): $k<-4$ or $1<k\\le5$, matching $\\boxed{(-\\infty,-4)\\cup(1,5]}$ (boundary $k=5$ keeps the negative double root; $k=-4$ drops out as a root hits $0$)."
        ]
      }
    ],
    "remark": "Insight: whenever the coefficient of $x^2$ carries the parameter, the 'two roots' problem secretly contains a hidden linear sub-problem. The clean factor $D=-4(k-5)$ and the partner factorisations $(k-1)(k+4)$, $(k-1)(k+1)$ make the three sign conditions snap together — the only real subtlety is the boundary bookkeeping at $k=-4$ (root hits $0$) and $k=5$ (double root)."
  },
  {
    "theme": "parameter",
    "themeLabel": "Parameters",
    "title": "Two Roots Past One, Reciprocals Tipped Over Three-Fifths",
    "difficulty": 5,
    "task": "Find all",
    "tags": [
      "coupled-conditions",
      "location-of-roots",
      "leading-coefficient-sign",
      "vieta-fraction",
      "discriminant-guard",
      "degenerate-case"
    ],
    "statement": "Find all real values of the parameter $k$ for which the equation \\[(k-2)\\,x^{2}-2k\\,x+(k+6)=0\\] has two real roots $\\alpha,\\beta$ that both exceed $1$ and whose reciprocals satisfy $\\dfrac{1}{\\alpha}+\\dfrac{1}{\\beta}>\\dfrac{3}{5}$. (Two parameter conditions are imposed at once: a location demand on where the roots sit, and a Vieta demand on $\\tfrac1\\alpha+\\tfrac1\\beta$. Find the intersection of the $k$-sets they produce — and mind what happens to the leading coefficient.)",
    "answer": "$\\boxed{\\,k\\in\\left(\\tfrac{18}{7},\\,3\\right]\\,}$. The location condition ``both roots $>1$'' forces $k\\in(2,3]$, and the reciprocal condition $\\tfrac1\\alpha+\\tfrac1\\beta=\\tfrac{2k}{k+6}>\\tfrac35$ forces $k<-6$ or $k>\\tfrac{18}{7}$; their intersection is the half-open interval $\\left(\\tfrac{18}{7},\\,3\\right]$. The left endpoint $\\tfrac{18}{7}$ is excluded (there $\\tfrac{2k}{k+6}=\\tfrac35$ exactly, and the inequality is strict); the right endpoint $3$ is included (there the equation has the double root $3>1$ with $\\tfrac1\\alpha+\\tfrac1\\beta=\\tfrac23>\\tfrac35$).",
    "trap": "Two coupled conditions, two distinct traps that compound. (1) The leading-coefficient sign. A student reaches for the location triple ``$D\\ge0$, $f(1)>0$, vertex $>1$''. Here $f(1)=(k-2)-2k+(k+6)=4>0$ identically, and the vertex $\\tfrac{k}{k-2}>1$ reduces to $k>2$, and $D=-16(k-3)\\ge0$ gives $k\\le3$ --- so the careless reading announces $(2,3]$ from those three, but only because it silently assumed the parabola opens up. The correct middle condition is $A\\cdot f(1)>0$, i.e. $(k-2)\\cdot4>0$, i.e. $k>2$; it is the sign of the leading coefficient that does the real work, not $f(1)$ on its own. Drop it and the entire region $k\\in(1,2)$ --- where $A=k-2<0$, the parabola opens downward, $f(1)=4>0$ holds, yet one root sits just above $1$ while the other plunges to large negative values --- masquerades as admissible. (At $k=2$ the equation degenerates to the linear $-4x+8=0$ with the single root $x=2$; ``both roots $>1$'' is vacuous/false, so $k=2$ is out --- another casualty of ignoring the leading term.) (2) The phantom reciprocal branch. Solving $\\tfrac{2k}{k+6}>\\tfrac35$ correctly yields $(k<-6)\\ \\text{or}\\ (k>\\tfrac{18}{7})$, because multiplying by $k+6$ flips the inequality when $k+6<0$. The trap is to keep the $k<-6$ branch in the final answer: it satisfies the reciprocal demand honestly, but every such $k$ fails ``both roots $>1$'' (for $k<-6$ the two real roots straddle $1$, one below it), so the whole left branch must be annihilated by the intersection. A solver who reports $\\left(\\tfrac{18}{7},3\\right]\\cup(-\\infty,-6)$ has done both halves right and the coupling wrong.",
    "solutions": [
      {
        "name": "Location triple with the honest $A\\cdot f(1)$ test, then the Vieta fraction",
        "steps": [
          "Treat the two demands separately and intersect at the end. Condition A (both roots $>1$). For a genuine quadratic we need $k\\ne2$; the standard criterion for both roots of $Ax^{2}+Bx+C$ to exceed a point $p$ is $D\\ge0$, $A\\cdot f(p)>0$, and (vertex) $-\\tfrac{B}{2A}>p$. Here $A=k-2$, $B=-2k$, $C=k+6$, $p=1$.",
          "Compute the three ingredients. Discriminant $D=B^{2}-4AC=4k^{2}-4(k-2)(k+6)=4k^{2}-4(k^{2}+4k-12)=48-16k=-16(k-3)$, so $D\\ge0\\iff k\\le3$. Next $f(1)=(k-2)-2k+(k+6)=4$, so $A\\cdot f(1)=4(k-2)>0\\iff k>2$ --- this is where the sign of the leading coefficient enters, and it cannot be skipped. Finally the vertex $-\\tfrac{B}{2A}=\\tfrac{k}{k-2}>1\\iff\\tfrac{k-(k-2)}{k-2}=\\tfrac{2}{k-2}>0\\iff k>2$.",
          "Combine: $k>2$ and $k\\le3$, i.e. Condition A holds exactly on $k\\in(2,3]$. (At $k=2$ the equation is linear with sole root $2$, so ``both roots'' fails; correctly excluded.)",
          "Condition B (reciprocals). By Vieta on the same quadratic, $\\tfrac1\\alpha+\\tfrac1\\beta=\\tfrac{\\alpha+\\beta}{\\alpha\\beta}=\\dfrac{-B/A}{C/A}=\\dfrac{-B}{C}=\\dfrac{2k}{k+6}$. Require $\\dfrac{2k}{k+6}>\\dfrac35$. Bringing to one side, $\\dfrac{2k}{k+6}-\\dfrac35=\\dfrac{10k-3(k+6)}{5(k+6)}=\\dfrac{7k-18}{5(k+6)}>0$, a ratio positive iff numerator and denominator share sign: $\\{k>\\tfrac{18}{7}\\text{ and }k>-6\\}$ or $\\{k<\\tfrac{18}{7}\\text{ and }k<-6\\}$, i.e. $k>\\tfrac{18}{7}$ or $k<-6$.",
          "Intersect. $(2,3]\\cap\\big[(-\\infty,-6)\\cup(\\tfrac{18}{7},\\infty)\\big]=(\\tfrac{18}{7},3]$ since $(-\\infty,-6)$ misses $(2,3]$ entirely. Hence $\\boxed{k\\in\\left(\\tfrac{18}{7},\\,3\\right]}$."
        ]
      },
      {
        "name": "Shift $x=t+1$ to convert ``roots $>1$'' into ``roots $>0$''",
        "steps": [
          "Set $x=t+1$, so ``$x>1$'' becomes ``$t>0$''. Then $g(t)=(k-2)(t+1)^{2}-2k(t+1)+(k+6)$. Expanding, $(k-2)(t^{2}+2t+1)-2k t-2k+k+6=(k-2)t^{2}+\\big(2(k-2)-2k\\big)t+\\big((k-2)-2k+k+6\\big)=(k-2)\\,t^{2}-4t+4.$",
          "Both original roots exceed $1$ $\\iff$ both roots of $g$ are positive. For the quadratic $(k-2)t^{2}-4t+4$ this needs a positive leading coefficient with positive sum and product of roots and a nonnegative discriminant: $k-2>0$; sum $=\\tfrac{4}{k-2}>0$; product $=\\tfrac{4}{k-2}>0$; and $D_t\\ge0$.",
          "The sum and product conditions both reduce to $k>2$ (automatic once $k-2>0$), and $D_t=(-4)^{2}-4(k-2)(4)=16-16(k-2)=48-16k=-16(k-3)\\ge0\\iff k\\le3$. So Condition A is $k\\in(2,3]$ --- note the leading-coefficient positivity $k-2>0$ is structural here, impossible to forget once you demand ``two positive roots.''",
          "Condition B is unchanged: $\\tfrac1\\alpha+\\tfrac1\\beta=\\tfrac{2k}{k+6}>\\tfrac35\\iff\\tfrac{7k-18}{5(k+6)}>0\\iff k>\\tfrac{18}{7}\\ \\text{or}\\ k<-6$.",
          "Intersecting $(2,3]$ with $(-\\infty,-6)\\cup(\\tfrac{18}{7},\\infty)$ deletes the $k<-6$ branch and leaves $\\boxed{k\\in\\left(\\tfrac{18}{7},\\,3\\right]}$."
        ]
      },
      {
        "name": "Explicit roots from the clean discriminant, then both conditions read off directly",
        "steps": [
          "Since $D=-16(k-3)$, real roots require $k\\le3$, and then $\\sqrt{D}=4\\sqrt{3-k}$, so $\\alpha,\\beta=\\dfrac{2k\\pm4\\sqrt{3-k}}{2(k-2)}=\\dfrac{k\\pm2\\sqrt{3-k}}{k-2}$ (with $k\\ne2$).",
          "For ``both roots $>1$'' the leading-coefficient sign governs the picture: if $k-2<0$ (i.e. $1<k<2$, with $k\\le3$) the parabola opens down and one computes that the smaller root drops far below $1$ (e.g. at $k=1.9$ the roots are $\\approx1.98$ and $\\approx-40$), so both$>1$ fails; if $k-2>0$ the smaller root is $\\dfrac{k-2\\sqrt{3-k}}{k-2}=1+\\dfrac{2-2\\sqrt{3-k}}{k-2}$, which exceeds $1$ exactly when $\\dfrac{2-2\\sqrt{3-k}}{k-2}>0$, i.e. (as $k-2>0$) when $\\sqrt{3-k}<1$, i.e. $3-k<1$, i.e. $k>2$ --- consistent with $k>2$, and combined with $k\\le3$ gives Condition A $=(2,3]$.",
          "On $(2,3]$ the larger root is automatically $>1$ too, and at the endpoint $k=3$ the two roots coincide at $\\dfrac{3}{1}=3>1$, so $k=3$ is retained.",
          "Now the reciprocal sum, from the explicit roots or Vieta, is $\\dfrac{\\alpha+\\beta}{\\alpha\\beta}=\\dfrac{2k}{k+6}$; the demand $\\dfrac{2k}{k+6}>\\dfrac35$ rearranges to $\\dfrac{7k-18}{5(k+6)}>0$, giving $k>\\tfrac{18}{7}$ or $k<-6$. On the live window $(2,3]$ only $k>\\tfrac{18}{7}$ is relevant.",
          "Therefore the admissible parameters are $(2,3]\\cap(\\tfrac{18}{7},\\infty)=\\boxed{\\left(\\tfrac{18}{7},\\,3\\right]}$, the endpoint $\\tfrac{18}{7}$ open (equality $\\tfrac1\\alpha+\\tfrac1\\beta=\\tfrac35$) and $3$ closed."
        ]
      }
    ],
    "remark": "The design couples a location constraint to a Vieta-fraction constraint, and each carries its own classic ranker-trap. The location half hinges on the principle that ``both roots $>p$'' is not $f(p)>0$ but $A\\cdot f(p)>0$ together with $D\\ge0$ and vertex $>p$: because $f(1)=4>0$ identically, the test collapses entirely onto the sign of the leading coefficient $A=k-2$, with the degenerate $k=2$ (linear, single root) and the open downward region $1<k<2$ both demanding to be thrown out. The cleanest way to make that automatic is the shift $x=t+1$ (Method 2): ``two roots $>1$'' becomes ``two positive roots'' of $(k-2)t^{2}-4t+4$, where insisting on positive leading coefficient, positive sum, positive product and $D\\ge0$ leaves no room to forget the sign. The Vieta half hides its trap in an inequality manipulation: $\\tfrac{2k}{k+6}>\\tfrac35$ has the two-branch solution $k>\\tfrac{18}{7}$ or $k<-6$ precisely because multiplying through by $k+6$ flips the sign on $k<-6$ --- and the seductive $k<-6$ branch is real, honest, and entirely killed by the location condition, surviving only as a warning about treating coupled conditions as a union instead of an intersection. The transferable lesson for a top ranker: solve each parameter condition to its full $k$-set (branches and all), then intersect, and never let $f(p)>0$ stand in for the leading-coefficient sign that actually decides where the roots live."
  },
  {
    "theme": "parameter",
    "themeLabel": "Parameters",
    "title": "The Ratio That Demands Two Distinct Roots",
    "difficulty": 5,
    "task": "Find all integer",
    "tags": [
      "vieta-ratio",
      "discriminant",
      "perfect-square",
      "distinctness-guard",
      "sign-of-product",
      "parameter-window"
    ],
    "statement": "For the parameter $t$ consider \\[ x^{2}-3t\\,x+\\bigl(t^{2}+3t-1\\bigr)=0 . \\] Find every integer $t$ with $-5\\le t\\le 5$ for which the equation has two distinct real roots whose ratio (the larger root divided by the smaller root) is an integer. State which values of $t$ qualify, and say exactly which near-miss values look like solutions but must be rejected, and why.",
    "answer": "Let $S=x_{1}+x_{2}=3t$ and $P=x_{1}x_{2}=t^{2}+3t-1$ be the Vieta data, and let $r$ denote the ratio (larger root)$/$(smaller root). Writing the roots as $u$ and $ru$, $\\dfrac{S^{2}}{P}=\\dfrac{(u+ru)^{2}}{u\\cdot ru}=\\dfrac{(1+r)^{2}}{r}$, so the integer-ratio condition is the Diophantine relation \\[ \\frac{9t^{2}}{t^{2}+3t-1}=\\frac{(1+r)^{2}}{r}. \\] Two distinct real roots require the discriminant $D=S^{2}-4P=9t^{2}-4(t^{2}+3t-1)=5t^{2}-12t+4=(t-2)(5t-2)>0$, i.e. $t<\\tfrac25$ or $t>2$; this already removes $t=1$ ($D=-3<0$, complex) and $t=2$ ($D=0$, equal roots). Because the two real roots have an integer (hence rational) ratio, the roots are themselves rational, forcing $D=(t-2)(5t-2)$ to be a perfect square. Over the admissible integers $t\\in\\{-5,\\dots,0\\}\\cup\\{3,4,5\\}$ the only perfect-square values are $D=4$ at $t=0$ and $D=36$ at $t=4$; every other $t$ gives an irrational pair. Testing those two: at $t=0$ the equation is $x^{2}-1=0$ with roots $\\pm1$ and ratio $\\tfrac{1}{-1}=-1$ (an integer); at $t=4$ the roots are $3,9$ with ratio $3$. Hence \\[ \\boxed{t\\in\\{0,\\ 4\\}}\\qquad(\\text{exactly two values}). \\] The seductive near-misses are $t=2$ (a double root $x=3$: the quotient $3/3=1$ looks like the integer ratio $1$, but there is no larger and smaller root, so it is barred by distinctness — and indeed $r=1$ is algebraically the equal-root case, since $\\tfrac{(1+r)^{2}}{r}=4\\iff S^{2}=4P\\iff D=0$) and $t=0$ itself, which the unwary drop because its ratio $-1$ is negative; the smaller root is $0$ at no admissible $t$, so $r=-1$ is a genuine integer ratio and must be kept.",
    "trap": "Two opposite mistakes both lead away from $\\{0,4\\}$, and each is a conceptual omission rather than an arithmetic slip. (A) Wrongly admitting $t=2$. Setting up the Vieta relation $\\tfrac{S^{2}}{P}=\\tfrac{(1+r)^{2}}{r}$ and hunting for integer $r$, a strong student finds that $t=2$ gives $S=6,\\ P=9$, so $\\tfrac{S^{2}}{P}=\\tfrac{36}{9}=4=\\tfrac{(1+r)^{2}}{r}$ at $r=1$, and reports a ratio of $1$. But $\\tfrac{(1+r)^{2}}{r}=4\\iff (r-1)^{2}=0\\iff r=1\\iff S^{2}=4P\\iff D=0$: the value $r=1$ is the equal-root condition. At $t=2$ the discriminant is $(2-2)(10-2)=0$, the equation is $x^{2}-6x+9=(x-3)^{2}=0$, and there is no larger-versus-smaller root at all. The phrase ``two distinct real roots whose ratio…'' silently forbids $t=2$; a solver who never separates the $D>0$ (distinct) case from $D=0$ (repeated) case lets the phantom solution $r=1$ through. (B) Wrongly discarding $t=0$. Having (correctly) realised that an integer ratio of real roots forces a rational pair and hence a perfect-square $D=(t-2)(5t-2)$, the natural next move is to solve the Diophantine $\\tfrac{(1+r)^{2}}{r}$ for $r\\ge2$ — because ``the larger over the smaller is bigger than $1$.'' That tacitly assumes the two roots are the same sign (then $r>1$). It is false here: at $t=0$ the product $P=t^{2}+3t-1=-1<0$, the roots are $\\pm1$ of opposite sign, and the ratio is the negative integer $\\tfrac{1}{-1}=-1$. A negative integer is still an integer, and the quotient is perfectly defined because the smaller root $-1\\ne0$. The trap is to conflate ``ratio is an integer'' with ``ratio is an integer $\\ge2$,'' thereby deleting the entire $P<0$ / negative-$r$ branch and losing $t=0$. (The often-quoted caution ``ratio undefined when the product is negative'' is itself the misconception: the ratio is undefined only when the smaller root is zero, i.e. when $P=0$, never merely because $P<0$.) Only a solver who (i) enforces $D>0$ to kill $t=2$ and (ii) admits negative integer $r$ to keep $t=0$ lands on the correct count of $2$.",
    "solutions": [
      {
        "name": "Vieta ratio relation $\\tfrac{S^{2}}{P}=\\tfrac{(1+r)^{2}}{r}$ with a distinctness gate",
        "steps": [
          "By Vieta, $S=x_{1}+x_{2}=3t$ and $P=x_{1}x_{2}=t^{2}+3t-1$. Demand first that the roots be distinct and real: $D=S^{2}-4P=9t^{2}-4(t^{2}+3t-1)=5t^{2}-12t+4=(t-2)(5t-2)$ must be $>0$, i.e. $t<\\tfrac25$ or $t>2$. This excludes $t=1$ (here $D=-3<0$, complex) and the boundary $t=2$ (here $D=0$, a repeated root). Admissible integers in $[-5,5]$: $t\\in\\{-5,-4,-3,-2,-1,0\\}\\cup\\{3,4,5\\}$.",
          "Let $r=\\dfrac{\\text{larger root}}{\\text{smaller root}}$. Writing the roots as $u$ and $ru$ gives $\\dfrac{S^{2}}{P}=\\dfrac{(u+ru)^{2}}{u\\cdot ru}=\\dfrac{(1+r)^{2}}{r}=r+2+\\dfrac1r$. So $r$ is an integer exactly when $\\dfrac{9t^{2}}{t^{2}+3t-1}=\\dfrac{(1+r)^{2}}{r}$ holds for some integer $r$. Crucially $r$ may be negative (opposite-sign roots) and $r\\ne1$ (that would force $D=0$, already excluded).",
          "Two real roots with a rational (here integer) ratio are themselves rational, so $\\sqrt{D}$ is rational, i.e. $D=(t-2)(5t-2)$ must be a perfect square. Scanning the admissible integers: $D(-5)=189,\\ D(-4)=132,\\ D(-3)=85,\\ D(-2)=48,\\ D(-1)=21,\\ D(0)=4,\\ D(3)=13,\\ D(4)=36,\\ D(5)=69$. Only $D(0)=4=2^{2}$ and $D(4)=36=6^{2}$ are perfect squares; all others are irrational pairs and cannot give an integer ratio.",
          "Evaluate the ratio at the two survivors. $t=0$: $x^{2}-1=0$, roots $\\{-1,1\\}$, ratio $=\\dfrac{1}{-1}=-1$ — an integer (this is the $r=-1$, opposite-sign branch; $P=-1<0$). $t=4$: $x^{2}-12x+27=0$, roots $\\{3,9\\}$, ratio $=\\dfrac{9}{3}=3$ — an integer.",
          "Both satisfy the Diophantine: $t=0$ gives $\\dfrac{S^{2}}{P}=\\dfrac{0}{-1}=0=\\dfrac{(1+(-1))^{2}}{-1}$, and $t=4$ gives $\\dfrac{S^{2}}{P}=\\dfrac{144}{27}=\\dfrac{16}{3}=\\dfrac{(1+3)^{2}}{3}$. Therefore $\\boxed{t\\in\\{0,4\\}}$, exactly two integers."
        ]
      },
      {
        "name": "Roots-are-rational $\\Rightarrow$ perfect-square discriminant (number-theoretic shortcut)",
        "steps": [
          "If the two real roots $\\alpha>\\beta$ have an integer ratio $r=\\alpha/\\beta$, then $\\alpha=r\\beta$ with $r\\in\\mathbb{Z}$, so $\\alpha/\\beta\\in\\mathbb{Q}$; since $\\alpha+\\beta=3t\\in\\mathbb{Z}$, both roots are rational. For a quadratic with integer coefficients, rational roots occur iff the discriminant is a perfect square. Hence a necessary condition is that $D=5t^{2}-12t+4=(t-2)(5t-2)$ be a perfect square, with $D>0$ for distinctness (this already discards $t=1$ where $D<0$ and $t=2$ where $D=0$ gives a repeated root, not two roots to compare).",
          "Search the perfect-square condition over integer $t\\in[-5,5]$ with $D>0$. The values $D(t)$ for $t=-5,\\dots,0,3,4,5$ are $189,132,85,48,21,4,13,36,69$; the only squares are $D(0)=4$ and $D(4)=36$. So $t\\in\\{0,4\\}$ are the only candidates that can possibly yield an integer ratio.",
          "These are only necessary; verify sufficiency by computing the actual ratios. $t=0$: roots $\\pm1$, ratio $\\dfrac{1}{-1}=-1\\in\\mathbb{Z}$ (the opposite-sign case, kept because $-1$ is a genuine integer and the smaller root $-1\\ne0$). $t=4$: roots $3,9$, ratio $3\\in\\mathbb{Z}$.",
          "Confirm the rejected boundary is not slipped back in: $t=2$ also makes $D=0$ a perfect square, but $D=0$ means the roots coincide ($x=3$ twice), so there is no ``larger'' and ``smaller'' — the distinctness clause bars it. No other integer $t$ in the window has square discriminant.",
          "Therefore the complete answer is $\\boxed{t\\in\\{0,4\\}}$, two values, obtained without ever solving the full Diophantine in $r$."
        ]
      },
      {
        "name": "Parametrise the roots by the ratio and eliminate (direct substitution)",
        "steps": [
          "Suppose the smaller root is $u$ and the larger is $ru$ for an integer $r$ (so $r\\ne1$ if the roots are distinct, and $u\\ne0$ so that the ratio is defined). Vieta gives two equations: $u(1+r)=3t$ \\;(sum) and $r\\,u^{2}=t^{2}+3t-1$ \\;(product).",
          "Main branch $r\\ne-1$: from the sum, $u=\\dfrac{3t}{1+r}$; substitute into the product to get $r\\cdot\\dfrac{9t^{2}}{(1+r)^{2}}=t^{2}+3t-1$, i.e. $9r\\,t^{2}=(1+r)^{2}\\bigl(t^{2}+3t-1\\bigr)$. For this to have a real $u$ the roots must be real and distinct, so $D=(t-2)(5t-2)>0$; combined with rationality (integer ratio $\\Rightarrow$ rational roots) this forces $D$ to be a perfect square, leaving only $t=0$ or $t=4$. Of these, $t=0$ has $u(1+r)=0$ with $u\\ne0$, which needs $r=-1$ — outside this branch — so the only main-branch solution is $t=4$: there $u=3$, $1+r=4\\Rightarrow r=3$, and indeed $r u^{2}=3\\cdot9=27=t^{2}+3t-1$. Keep $t=4$.",
          "Exceptional branch $r=-1$ (opposite-sign roots of equal magnitude): the sum equation becomes $u(1+r)=0=3t\\Rightarrow t=0$. Then the product equation reads $-u^{2}=t^{2}+3t-1=-1$, so $u^{2}=1$, $u=\\pm1$, giving roots $\\{-1,1\\}$ with ratio $-1$. This is a legitimate integer ratio, so keep $t=0$. (This is exactly the branch a careless ``$r\\ge2$'' search throws away.)",
          "Check no other integer $r$ produces an integer $t\\in[-5,5]$: rearranging $9r\\,t^{2}=(1+r)^{2}(t^{2}+3t-1)$ as a quadratic in $t$ and testing each small $|r|$ yields no further integer $t$ in range (consistent with the perfect-square scan, which is exhaustive). The reality/distinctness gate $D>0$ also rules out $t=1,2$.",
          "Collecting both branches, the integers are $t=0$ (ratio $-1$) and $t=4$ (ratio $3$): $\\boxed{t\\in\\{0,4\\}}$."
        ]
      }
    ],
    "remark": "Insight: the genuine variables of a ratio problem are not the roots but the symmetric pair $(S,P)=(x_{1}+x_{2},\\,x_{1}x_{2})$, and the ratio $r$ enters only through the scale-free combination $\\dfrac{S^{2}}{P}=\\dfrac{(1+r)^{2}}{r}=r+2+\\dfrac1r$. That single identity carries every subtlety of the chapter. First, it is symmetric under $r\\mapsto1/r$, so it cannot distinguish the larger root from the smaller — fine for ``the ratio is an integer,'' but a reminder that the orientation is a convention, not data. Second, the special value $\\dfrac{(1+r)^{2}}{r}=4$ occurs precisely at $r=1$, which is $S^{2}=4P$, which is $D=0$: the equal-root case masquerades as the ``ratio $=1$'' solution, and only an explicit distinctness gate ($D>0$) excludes it. Third, the sign of $P$ is the whole story for the sign of $r$: $P>0$ gives same-sign roots and $r>0$, while $P<0$ gives opposite-sign roots and $r<0$ — so an integer ratio may be negative, and discarding negative $r$ silently deletes the entire $P<0$ region (here the lone but real solution $t=0$, ratio $-1$). The ratio fails to exist only when the smaller root is zero, i.e. $P=0$ — never merely because $P<0$. Finally, the cleanest finishing stroke is arithmetic, not algebraic: an integer ratio of two real roots makes them rational, so $D=(t-2)(5t-2)$ must be a perfect square, and a one-line scan of nine integers settles everything. The transferable discipline for a top ranker: convert a ratio constraint to $\\dfrac{S^{2}}{P}=\\dfrac{(1+r)^{2}}{r}$, then layer three independent guards — $D>0$ for distinct real roots, $\\operatorname{sign}(P)$ for the sign of $r$, and the perfect-square/rationality test — before counting; skipping any one of them produces a confidently wrong tally."
  },
  {
    "theme": "parameter",
    "themeLabel": "Parameters",
    "title": "Mirror Roots, Real or Phantom",
    "difficulty": 5,
    "task": "Find all",
    "tags": [
      "reciprocal-roots",
      "discriminant",
      "degenerate-case",
      "interval-answer"
    ],
    "statement": "The roots of \\[(k-1)(k-2)\\,x^2 - (k-4)(k+1)\\,x + (k-1)(k-2) = 0\\] are reciprocals of one another whenever the equation is a genuine quadratic. Find all real $k$ for which the equation actually has two *real* (reciprocal) roots.",
    "answer": "$k \\in [0,\\,3]\\setminus\\{1,2\\}$, i.e. $[0,1)\\cup(1,2)\\cup(2,3]$.",
    "trap": "Declaring the answer to be 'all $k$' because the constant and leading coefficients are identical, so the product of roots is $1$ for every $k$. That guarantees *reciprocal* roots but says nothing about *reality*: for most $k$ the reciprocal pair is a complex-conjugate pair on the unit circle. One must impose $D\\ge0$, and also throw out $k=1,2$ where the leading coefficient is $0$ (no quadratic at all).",
    "solutions": [
      {
        "name": "Discriminant after noting product $=1$",
        "steps": [
          "Since the $x^2$- and constant-coefficients coincide, the product of roots is $\\tfrac{c}{a}=1$ — reciprocal roots, automatically, whenever $a=(k-1)(k-2)\\neq0$.",
          "Reality requires $D=(k-4)^2(k+1)^2-4(k-1)^2(k-2)^2\\ge0$.",
          "Factoring, $D=-3k(k-3)(k^2-3k+8)$; the quadratic $k^2-3k+8$ has discriminant $9-32<0$, so it is always positive.",
          "Thus $D\\ge0\\iff k(k-3)\\le0\\iff 0\\le k\\le3$. Excluding the degenerate $k=1,2$ gives $\\boxed{[0,1)\\cup(1,2)\\cup(2,3]}$."
        ]
      },
      {
        "name": "Real reciprocal pair $\\Rightarrow |{\\rm sum}|\\ge 2$",
        "steps": [
          "A real number $t$ and its reciprocal satisfy $t+\\tfrac1t=S$ with $|S|\\ge2$; conversely $|S|<2$ forces a complex conjugate pair.",
          "Here the sum of roots is $S=\\dfrac{(k-4)(k+1)}{(k-1)(k-2)}$, and real reciprocal roots demand $|S|\\ge2$, i.e. $S^2\\ge4$.",
          "$S^2-4=\\dfrac{(k-4)^2(k+1)^2-4(k-1)^2(k-2)^2}{(k-1)^2(k-2)^2}=\\dfrac{-3k(k-3)(k^2-3k+8)}{(k-1)^2(k-2)^2}\\ge0$.",
          "The denominator and $k^2-3k+8$ are positive, so the sign is that of $-k(k-3)$, giving $0\\le k\\le3$; with $k\\neq1,2$ this is $\\boxed{[0,1)\\cup(1,2)\\cup(2,3]}$."
        ]
      },
      {
        "name": "Boundary spot-check",
        "steps": [
          "At $k=0$: the coefficient of $x$ is $-(k-4)(k+1)=-(-4)(1)=4$, so $2x^2+4x+2=2(x+1)^2$, double root $-1$ ($=$ its own reciprocal) — real. At $k=3$: $-(k-4)(k+1)=-(-1)(4)=4$ as well, so again $2x^2+4x+2=2(x+1)^2$, double root $-1$ — real.",
          "At $k=\\tfrac12$ (interior): $\\tfrac34x^2+\\tfrac{21}{4}x+\\tfrac34=0\\Rightarrow x^2+7x+1=0$, roots $\\tfrac{-7\\pm3\\sqrt5}{2}$ with product $1$ — real reciprocals, confirming the interior.",
          "At $k=1$ or $k=2$ the leading coefficient is $0$ (the equation collapses to $6x=0$, a single root), so no quadratic — excluded.",
          "Just outside, e.g. $k=-0.5$ or $k=3.5$, $D<0$ and the roots are non-real, confirming the endpoints. Answer: $\\boxed{[0,1)\\cup(1,2)\\cup(2,3]}$."
        ]
      }
    ],
    "remark": "Insight: 'reciprocal roots' is an algebraic identity ($c=a$) that is utterly silent about reality. The decisive — and most-forgotten — filters are $D\\ge0$ and the degeneracy $a=0$. The clean collapse $D=-3k(k-3)\\cdot(\\text{positive})$ is engineered so the answer is a tidy interval punctured at the two degenerate parameters. Note both endpoints $k=0,3$ yield the very same square $2(x+1)^2$ with double root $-1$ — a reminder that the boundary of $D\\ge0$ is exactly where the two reciprocal roots collide into a single self-reciprocal value $\\pm1$."
  },
  {
    "theme": "parameter",
    "themeLabel": "Parameters",
    "title": "The Common Root That Must Count",
    "difficulty": 5,
    "task": "Find all",
    "tags": [
      "common-root",
      "resultant-elimination",
      "integrality-filter",
      "non-vieta-constraint",
      "degenerate-case",
      "golden-ratio-phantom"
    ],
    "statement": "Find every real value of the parameter $k$ for which the two quadratics \\[ A:\\quad x^{2}-kx+3=0, \\qquad B:\\quad x^{2}-3x+(k-4)=0 \\] possess a common root that is, in addition, a positive integer. For each surviving $k$, name the shared root. (Be sure your elimination is valid for all $k$, and that every candidate $k$ thrown up by the algebra is tested against the positive-integer demand before you keep it.)",
    "answer": "$\\boxed{k=4}$, with the common positive-integer root $x=3$. Eliminating $x$ (subtract $B$ from $A$): $A-B=(3-k)x+(7-k)=0$, so for $k\\neq3$ the only possible shared root is $x=\\dfrac{7-k}{k-3}$. Feeding this back (equivalently, taking the resultant of $A,B$ in $x$) gives \\[ \\operatorname{Res}_x(A,B)=(k-4)\\,(k^{2}-2k-19)=0,\\] whose roots are $k=4$ and $k=1\\pm2\\sqrt5$. The Vieta/resultant machinery treats all three as ``common-root values,'' but the problem imposes a non-Vieta filter: the shared root must be a positive integer. Their shared roots are \\[ k=4\\!:\\ x=3;\\qquad k=1-2\\sqrt5\\!:\\ x=\\tfrac{-1-\\sqrt5}{2}\\approx-1.618;\\qquad k=1+2\\sqrt5\\!:\\ x=\\tfrac{-1+\\sqrt5}{2}\\approx0.618. \\] The two irrational values of $k$ produce the golden-ratio pair $\\tfrac{-1\\pm\\sqrt5}{2}$ as shared roots —{} real, but neither integral nor (in one case) even positive, so both are discarded. Only $k=4$ survives, where $A=x^{2}-4x+3=(x-1)(x-3)$ and $B=x^{2}-3x=x(x-3)$ indeed share $x=3$. The degenerate value $k=3$ (where elimination loses $x$) gives $A=x^{2}-3x+3$ with discriminant $-3<0$, no real root at all, hence no common root —{} consistent with $k=3$ not being a root of the resultant. Thus the unique answer is $k=4$.",
    "trap": "The seductive plan is: ``a common root exists $\\iff$ the resultant vanishes,'' so set $\\operatorname{Res}_x(A,B)=(k-4)(k^{2}-2k-19)=0$ and report all three roots $k\\in\\{4,\\,1-2\\sqrt5,\\,1+2\\sqrt5\\}$ (a popular packaged answer is then ``sum of values $=4+(1-2\\sqrt5)+(1+2\\sqrt5)=6$''). Every step of that is algebraically correct —{} all three $k$ genuinely give a real shared root —{} which is exactly why the trap is lethal: nothing in the elimination is wrong, so the strong student stops. But the question never asked merely for a common root; it asked for a common root that is a positive integer, and that is a non-Vieta arithmetic condition the resultant cannot see. The resultant is the condition for $A,B$ to share some root over $\\mathbb{C}$ (here over $\\mathbb{R}$); it is blind to whether that root is an integer, a fraction, or an irrational. The two phantom values $k=1\\pm2\\sqrt5$ deliver the golden-ratio numbers $\\tfrac{-1\\pm\\sqrt5}{2}$ as their shared root —{} fully real, even one of them positive ($\\approx0.618$), but not integers, so they fail the stated demand. A second, quieter snare lives in the elimination itself: subtracting $B$ from $A$ to ``solve for the shared root'' divides by $(3-k)$, which is illegal precisely at $k=3$; a careful solver must inspect $k=3$ separately (there $A=x^{2}-3x+3$ has discriminant $-3<0$, so no real root and no common root, harmlessly outside the resultant's zero set). The honest finish is two-phase: use elimination/resultant to generate the finite candidate set, then filter each candidate by re-deriving the shared root and testing it against the arithmetic constraint (positive integer) —{} the resultant proposes, number theory disposes.",
    "solutions": [
      {
        "name": "Resultant proposes, integrality disposes (elimination + non-Vieta filter)",
        "steps": [
          "Suppose $r$ is a common root of $A:\\,x^{2}-kx+3=0$ and $B:\\,x^{2}-3x+(k-4)=0$. Subtracting, $A-B=(3-k)\\,r+(7-k)=0$. If $k\\neq3$ this fixes the shared root uniquely as $r=\\dfrac{7-k}{k-3}$; the case $k=3$ (where the $r$-term vanishes) is treated in step 4.",
          "Substituting $r$ back into $A$ —{} equivalently forming $\\operatorname{Res}_x(A,B)$ —{} clears $r$ and yields a single condition on $k$: $\\operatorname{Res}_x(A,B)=(k-4)(k^{2}-2k-19)=0$. Hence the only $k$ that allow any common root are $k=4$ and $k=1\\pm2\\sqrt5$ (from $k^{2}-2k-19=0$). This is the complete candidate set —{} but it is only a candidate set.",
          "Now apply the filter the resultant cannot: the shared root must be a positive integer. For $k=4$: $r=\\dfrac{7-4}{4-3}=3$, a positive integer —{} keep (indeed $A=(x-1)(x-3)$ and $B=x(x-3)$ visibly share $x=3$). For $k=1\\pm2\\sqrt5$: $r=\\dfrac{7-k}{k-3}=\\dfrac{6\\mp2\\sqrt5}{-2\\pm2\\sqrt5}$ simplifies to $\\dfrac{-1\\pm\\sqrt5}{2}$, the golden-ratio pair $\\approx-1.618$ and $\\approx0.618$: real, but irrational —{} reject both.",
          "Degenerate check $k=3$: then $A=x^{2}-3x+3$ has discriminant $9-12=-3<0$, so $A$ has no real root and $A,B$ cannot share one; correspondingly $k=3$ is not a root of the resultant, so nothing was lost by the division in step 1. Conclusion: the only $k$ giving a positive-integer common root is $\\boxed{k=4}$, root $x=3$."
        ]
      },
      {
        "name": "Eliminate $k$ instead of $x$: a cubic in the shared root, filtered to positive integers",
        "steps": [
          "Let $r$ be the common root and treat the two equations as a linear system in the unknown $k$. From $A$: $r^{2}-kr+3=0\\Rightarrow k=\\dfrac{r^{2}+3}{r}$ (for $r\\neq0$). From $B$: $r^{2}-3r+(k-4)=0\\Rightarrow k=4+3r-r^{2}$.",
          "Equate the two expressions for $k$ and clear $r$: $\\dfrac{r^{2}+3}{r}=4+3r-r^{2}\\Rightarrow r^{2}+3=4r+3r^{2}-r^{3}\\Rightarrow r^{3}-2r^{2}-4r+3=0$. This cubic in the shared root factors over $\\mathbb{Q}$ as $(r-3)(r^{2}+r-1)=0$.",
          "Apply the arithmetic demand directly to $r$: the candidates are $r=3$ and $r=\\dfrac{-1\\pm\\sqrt5}{2}$ (the golden-ratio conjugates). Only $r=3$ is a positive integer; the other two are irrational and discarded. (Note how cleanly the non-Vieta filter acts here —{} it is a test on the root, applied to the very polynomial whose roots are the admissible shared roots.)",
          "Recover $k$ from the survivor: $k=\\dfrac{r^{2}+3}{r}=\\dfrac{9+3}{3}=4$ (and the check $k=4+3r-r^{2}=4+9-9=4$ agrees). The case $r=0$ excluded in step 1 is impossible anyway, since $A(0)=3\\neq0$. Hence $\\boxed{k=4}$, with common root $x=3$."
        ]
      },
      {
        "name": "Vieta bookkeeping on the surviving root, with a reality/integrality audit",
        "steps": [
          "If the shared root $r$ is a positive integer, then $A(r)=0$ forces $r\\mid 3$ (since $r$ divides the constant term $3$ of the monic integer-coefficient polynomial $x^{2}-kx+3$ whenever $k$ is an integer; more robustly, $k=\\dfrac{r^{2}+3}{r}=r+\\dfrac{3}{r}$ must be real and the construction below pins $k$). The positive integer candidates are therefore $r\\in\\{1,3\\}$ —{} a finite list to audit.",
          "Test $r=1$: from $A$, $1-k+3=0\\Rightarrow k=4$; but then $B(1)=1-3+(4-4)=-2\\neq0$, so $x=1$ is not a root of $B$. Reject $r=1$ (it is a root of $A$ at $k=4$, but $A,B$ share $3$, not $1$).",
          "Test $r=3$: from $A$, $9-3k+3=0\\Rightarrow k=4$; then $B(3)=9-9+(4-4)=0$. So $x=3$ is a genuine common root, at $k=4$. This is the only positive integer that satisfies both equations.",
          "Confirm completeness against the trap: solving $A,B$ in general (resultant $(k-4)(k^{2}-2k-19)=0$) shows the only other common-root values are $k=1\\pm2\\sqrt5$, whose shared root is the irrational $\\tfrac{-1\\pm\\sqrt5}{2}$ —{} not a positive integer. Therefore the audit is exhaustive and the unique answer is $\\boxed{k=4}$, root $x=3$."
        ]
      }
    ],
    "remark": "Insight: a resultant (or any elimination) answers exactly one question —{} ``do the two polynomials share a root?'' —{} and it answers it over the full field, blind to arithmetic refinements like ``is that root a positive integer?'' So a common-root problem with an added number-theoretic clause splits into two genuinely different layers: an algebraic layer that manufactures a finite candidate set ($(k-4)(k^{2}-2k-19)=0$, giving $k=4$ and $k=1\\pm2\\sqrt5$), and a non-Vieta layer that sieves those candidates by re-deriving the shared root and testing it ($x$ must be a positive integer). The phantom values $k=1\\pm2\\sqrt5$ are not algebra mistakes —{} they really do force a shared real root —{} they are simply the wrong kind of root, the golden-ratio pair $\\tfrac{-1\\pm\\sqrt5}{2}$, and the discipline that separates a top ranker is refusing to report a candidate until its root has been examined. Method 2 makes the two layers maximally vivid by eliminating $k$ rather than $x$: the shared root itself satisfies the clean cubic $(r-3)(r^{2}+r-1)=0$, so the integrality filter is applied to the very object it constrains. Two further completeness obligations are easy to skip and fatal to skip: the elimination $A-B=(3-k)x+(7-k)$ secretly divides by $(3-k)$, so the degenerate value $k=3$ must be inspected by hand (there $A$ has negative discriminant and no real root, so it harmlessly sits outside the resultant's zero set); and one must verify which root is actually shared, since at $k=4$ the polynomial $A=(x-1)(x-3)$ also has the positive integer $1$ as a root, yet $B$ rejects it —{} the shared root is $3$ alone. The transferable maxim: in a parameter problem, the resultant proposes and arithmetic disposes; never let the elimination's candidates masquerade as the final answer."
  },
  {
    "theme": "parameter",
    "themeLabel": "Parameters",
    "title": "Counting Opposite Signs",
    "difficulty": 4,
    "task": "Find the number of integer values of k",
    "tags": [
      "opposite-sign-roots",
      "integer-count",
      "sign-of-leading-coefficient",
      "degenerate-case"
    ],
    "statement": "For the equation \\[(k-4)x^2 + (2k+1)x + (k+2) = 0,\\] find the number of integer values of $k$ for which the roots are real, of opposite sign, and the *positive* root has the larger absolute value.",
    "answer": "$4$ integer values, namely $k\\in\\{0,1,2,3\\}$.",
    "trap": "Translating 'positive root larger in magnitude' into 'sum of roots $>0$' as $-\\tfrac{2k+1}{k-4}>0$ and forgetting that the leading coefficient $k-4$ can be negative — which flips the inequality. Equivalently, treating $\\tfrac{2k+1}{k-4}<0$ carelessly. Also, $k=4$ makes the equation linear (one root only) and must be discarded.",
    "solutions": [
      {
        "name": "Vieta with sign tracking",
        "steps": [
          "Opposite-sign roots require the product $\\tfrac{c}{a}=\\tfrac{k+2}{k-4}<0$, which holds for $-2<k<4$; this automatically forces $D>0$ (since $-4ac>0$), so the roots are real and distinct.",
          "'Positive root larger in magnitude' $\\iff$ sum of roots $>0$: $-\\tfrac{2k+1}{k-4}>0\\iff \\tfrac{2k+1}{k-4}<0\\iff -\\tfrac12<k<4$.",
          "Intersecting $-2<k<4$ with $-\\tfrac12<k<4$ gives $-\\tfrac12<k<4$.",
          "Integer $k$: $0,1,2,3$ (note $k=4$ excluded — degenerate linear case). Hence $\\boxed{4}$ values."
        ]
      },
      {
        "name": "Reduce to roots via $f(0)$ and $f$ at $\\infty$",
        "steps": [
          "Opposite signs means $0$ lies strictly between the roots, equivalent to $a\\cdot f(0)<0$: $(k-4)(k+2)<0\\Rightarrow -2<k<4$.",
          "The condition that the positive root dominates is that the parabola's vertex lies to the right of $0$: $-\\tfrac{b}{2a}>0$, i.e. $\\tfrac{2k+1}{k-4}<0$, giving $-\\tfrac12<k<4$.",
          "Both together: $-\\tfrac12<k<4$; the leading coefficient is nonzero throughout (it would vanish only at $k=4$, the excluded endpoint).",
          "Integers in $(-\\tfrac12,4)$: $\\{0,1,2,3\\}$, so $\\boxed{4}$."
        ]
      },
      {
        "name": "Brute Vieta check at boundary integers",
        "steps": [
          "For each integer $k$ near the window, compute the roots' product $\\tfrac{k+2}{k-4}$ and sum $-\\tfrac{2k+1}{k-4}$.",
          "$k=0$: product $-\\tfrac12<0$, sum $+\\tfrac14>0$ — qualifies. $k=3$: product $-5<0$, sum $+7>0$ — qualifies.",
          "$k=-1$: product $-\\tfrac15<0$ but sum $-\\tfrac15<0$ — positive root is *smaller*, so it fails. $k=4$: linear, single root — fails.",
          "The qualifying integers are exactly $0,1,2,3$, giving $\\boxed{4}$."
        ]
      }
    ],
    "remark": "Insight: opposite-sign roots depend only on $\\tfrac{c}{a}<0$ (and that single condition secretly guarantees reality). The 'which root is bigger' refinement is a *sign-of-sum* condition, and the parametric leading coefficient is exactly what makes the inequality flip — the heart of the problem."
  },
  {
    "theme": "parameter",
    "themeLabel": "Parameters",
    "title": "A Fixed Root and Its Wandering Twin",
    "difficulty": 4,
    "task": "Find all",
    "tags": [
      "fixed-root",
      "interval-location",
      "degenerate-case",
      "parametric-leading-coefficient"
    ],
    "statement": "The number $x=1$ is a root of \\[k x^2 - (3k+1)x + (2k+1) = 0\\] for every $k$. Find all real $k$ for which *both* roots of this equation lie in the closed interval $[1,4]$.",
    "answer": "$k \\in (-\\infty,\\,-1]\\,\\cup\\,[\\tfrac12,\\,\\infty)$ (equivalently $k\\le-1$ or $k\\ge\\tfrac12$).",
    "trap": "Setting up the full $D\\ge0$, $f(1)\\ge0$, $f(4)\\ge0$, vertex-in-$[1,4]$ system and dividing by $k$ as if it were positive — and, worse, including $k=0$ somewhere. At $k=0$ the equation degenerates to the linear $-x+1=0$ with the *single* root $x=1$; there is no 'both roots', so $k=0$ cannot belong to the answer (and indeed it lies in neither interval).",
    "solutions": [
      {
        "name": "Pin the moving root via the product",
        "steps": [
          "Since $x=1$ is always a root, write the other root as $r$. By Vieta the product of roots is $\\tfrac{2k+1}{k}$, so $1\\cdot r=\\tfrac{2k+1}{k}=2+\\tfrac1k$ (for $k\\neq0$).",
          "Both roots in $[1,4]$ reduces to $r\\in[1,4]$, i.e. $1\\le 2+\\tfrac1k\\le4$, i.e. $-1\\le\\tfrac1k\\le2$.",
          "For $k>0$: $\\tfrac1k\\le2\\Rightarrow k\\ge\\tfrac12$ (and $\\tfrac1k>0\\ge-1$ automatically). For $k<0$: $\\tfrac1k\\ge-1\\Rightarrow k\\le-1$ (and $\\tfrac1k<0\\le2$ automatically).",
          "$k=0$ gives only one root, excluded. Hence $\\boxed{k\\le-1\\ \\text{or}\\ k\\ge\\tfrac12}$."
        ]
      },
      {
        "name": "Factor out the known root",
        "steps": [
          "Because $1$ is a root, $kx^2-(3k+1)x+(2k+1)=k(x-1)\\!\\left(x-\\tfrac{2k+1}{k}\\right)$ for $k\\neq0$.",
          "So the roots are $1$ and $\\tfrac{2k+1}{k}=2+\\tfrac1k$; the first already lies in $[1,4]$.",
          "Require $1\\le2+\\tfrac1k\\le4\\iff -1\\le\\tfrac1k\\le2$, solved by $k\\le-1$ or $k\\ge\\tfrac12$.",
          "Boundary checks: $k=\\tfrac12$ gives roots $1,4$; $k=-1$ gives the double root $1$; both acceptable. Therefore $\\boxed{(-\\infty,-1]\\cup[\\tfrac12,\\infty)}$."
        ]
      },
      {
        "name": "Endpoint-sign method as confirmation",
        "steps": [
          "For $k>0$ (upward parabola) both roots in $[1,4]$ needs $f(1)\\ge0$, $f(4)\\ge0$, vertex in $[1,4]$; $f(1)=0$ exactly (the known root), and $f(4)=16k-4(3k+1)+(2k+1)=6k-3\\ge0\\Rightarrow k\\ge\\tfrac12$.",
          "For $k<0$ (downward parabola) the inequalities reverse: $f(4)\\le0\\Rightarrow 6k-3\\le0$, true for all $k<0$, and the moving root $2+\\tfrac1k\\ge1\\Rightarrow \\tfrac1k\\ge-1\\Rightarrow k\\le-1$.",
          "At $k=0$ the equation is linear with the lone root $1$ — not 'both roots' — so it is excluded.",
          "Combining the two sign regimes reproduces $\\boxed{k\\le-1\\ \\text{or}\\ k\\ge\\tfrac12}$."
        ]
      }
    ],
    "remark": "Insight: when one root is fixed and known, never deploy the heavy four-condition interval machinery — factor it out and the problem collapses to placing a *single* rational expression $2+\\tfrac1k$ inside $[1,4]$. The parametric leading coefficient then only matters at $k=0$, where 'both roots' silently loses its meaning."
  },
  {
    "theme": "parameter",
    "themeLabel": "Parameters",
    "title": "When Twin Roots Are an Illusion",
    "difficulty": 5,
    "task": "Find all",
    "tags": [
      "equal-roots",
      "discriminant",
      "degenerate-case",
      "double-root"
    ],
    "statement": "Find all real values of $k$ for which \\[(k-2)x^2 + (2-4k)x + (k-2) = 0\\] has a repeated (double) real root.",
    "answer": "$k = -1$ (double root $1$) and $k = 1$ (double root $-1$).",
    "trap": "After solving $D=0$ to get $k=\\pm1$, also reporting $k=2$ as a 'repeated root' because the equation looks like it has a single solution there. At $k=2$ the leading coefficient vanishes and the equation degenerates to the linear $-6x=0$, whose unique root $x=0$ is a root of a *linear* equation — it is not a repeated root of a quadratic, and $k=2$ does not satisfy $D=0$ at all.",
    "solutions": [
      {
        "name": "Discriminant of the genuine quadratic",
        "steps": [
          "For a double root the equation must be a true quadratic: $a=k-2\\neq0$, i.e. $k\\neq2$.",
          "Set $D=(2-4k)^2-4(k-2)(k-2)=0$.",
          "Expand: $D=4(1-2k)^2-4(k-2)^2=4\\bigl[(1-2k)^2-(k-2)^2\\bigr]=4\\,(1-2k-k+2)(1-2k+k-2)=4(3-3k)(-1-k)=12(k-1)(k+1)$.",
          "$D=0\\iff k=\\pm1$, both $\\neq2$. At $k=-1$: $-3(x-1)^2=0$, root $1$; at $k=1$: $-(x+1)^2=0$, root $-1$. Hence $\\boxed{k=\\pm1}$."
        ]
      },
      {
        "name": "Perfect-square coefficient matching",
        "steps": [
          "A quadratic $ax^2+bx+c$ ($a\\neq0$) is a perfect square iff $b^2=4ac$.",
          "Here $b^2=(2-4k)^2=4(1-2k)^2$ and $4ac=4(k-2)^2$.",
          "Equate: $(1-2k)^2=(k-2)^2\\Rightarrow |1-2k|=|k-2|$, giving $1-2k=\\pm(k-2)$.",
          "'$+$': $1-2k=k-2\\Rightarrow k=1$. '$-$': $1-2k=-(k-2)=2-k\\Rightarrow k=-1$. The degenerate $k=2$ (where $a=0$) is not a perfect-square quadratic. Thus $\\boxed{k=\\pm1}$."
        ]
      },
      {
        "name": "Vieta double-root condition",
        "steps": [
          "A double root $r$ satisfies sum $=2r$ and product $=r^2$, so $\\bigl(\\tfrac{b}{2a}\\bigr)^2=\\tfrac{c}{a}$, i.e. $b^2=4ac$ — the same discriminant condition, valid only for $a\\neq0$.",
          "With $a=c=k-2$, the product of roots is $\\tfrac{c}{a}=1$, so a double root would be $r=\\pm1$; the sum $-\\tfrac{b}{a}=2r$ forces $-\\tfrac{2-4k}{k-2}=2r$.",
          "$r=1$: $-\\tfrac{2-4k}{k-2}=2\\Rightarrow 2-4k=-2(k-2)=-2k+4\\Rightarrow -2k=2\\Rightarrow k=-1$. $r=-1$: $-\\tfrac{2-4k}{k-2}=-2\\Rightarrow 2-4k=2k-4\\Rightarrow k=1$.",
          "Both with $a=k-2\\neq0$; $k=2$ never arises. Therefore $\\boxed{k=\\pm1}$."
        ]
      }
    ],
    "remark": "Insight: 'equal roots' is the condition $D=0$ — but only for a *bona fide* quadratic. The decoy $k=2$ is built to look like the natural special value (it kills $a$, and $a=c$ makes the product of roots constantly $1$), yet it lives outside $D=0$ entirely. A double root is a quadratic phenomenon; a degenerate single root is not."
  },
  {
    "theme": "parameter",
    "themeLabel": "Parameters",
    "title": "The Interior Point the Parabola Forgot",
    "difficulty": 4,
    "task": "Find all",
    "tags": [
      "degenerate-leading-coefficient",
      "two-distinct-roots",
      "palindromic-quadratic",
      "discriminant-window",
      "punctured-interval"
    ],
    "statement": "Find every real value of the parameter $k$ for which \\[ (k-2)\\,x^{2}+(k+1)\\,x+(k-2)=0 \\] has two distinct real roots. (Here ``two distinct real roots'' means exactly that: a genuine pair of different real numbers. Decide carefully what happens at the value of $k$ that kills the leading coefficient, and whether your discriminant window already accounts for it.)",
    "answer": "$\\boxed{\\,k\\in(1,2)\\cup(2,5)\\,}$. For $k\\neq2$ the equation is a true quadratic with discriminant \\[ D=(k+1)^{2}-4(k-2)^{2}=-3k^{2}+18k-15=-3(k-1)(k-5), \\] and two distinct real roots demand $D>0$, i.e. $k\\in(1,5)$. But this window silently includes $k=2$, where the leading coefficient $k-2$ vanishes: there the equation is no longer quadratic at all, collapsing to the linear $3x=0$, whose single root $x=0$ can never be ``two distinct roots.'' Hence $k=2$ must be punched out of $(1,5)$. The endpoints $k=1$ and $k=5$ give $D=0$ (a repeated root: $-(x-1)^{2}=0$ and $3(x+1)^{2}=0$), so the strict inequality already excludes them. The honest answer is the punctured interval $(1,5)\\setminus\\{2\\}=(1,2)\\cup(2,5)$ —{} not the closed-eyed $(1,5)$.",
    "trap": "The fatal shortcut is to declare ``two distinct real roots $\\iff D>0$,'' compute $D=-3(k-1)(k-5)$, solve $D>0$, and report the clean window $k\\in(1,5)$ —{} done. Every algebraic step there is correct, which is exactly why a strong student stops: the quadratic formula, the factorisation of $D$, the inequality, all impeccable. The error is silent and structural: the entire ``$D>0\\Rightarrow$ two distinct roots'' theorem is a statement about quadratics, and it is being applied at $k=2$, where the object is not a quadratic. At $k=2$ the leading coefficient $k-2$ is zero, so $\\,ax^{2}+bx+c\\,$ degenerates to the linear $3x=0$ with the lone root $x=0$. A pure discriminant solver never sees this, because the discriminant it writes, $b^{2}-4ac=(k+1)^{2}-4(k-2)^{2}$, is a perfectly finite, perfectly positive number at $k=2$ (it equals $9-0=9>0$) —{} the formula keeps computing as if $a\\neq0$, returning a confident ``$D>0$, two distinct roots'' precisely where the premise has collapsed. The number $9>0$ is the discriminant of a quadratic that no longer exists. So $k=2$ sits as an interior point of the naive window, fully endorsed by the discriminant, yet there is genuinely only ONE root there. The fix is not a different inequality but a separate case analysis of the leading coefficient before any discriminant talk: $k=2$ (linear, excluded), then $k\\neq2$ (quadratic, $D>0$). The correct answer is therefore the punctured interval $(1,2)\\cup(2,5)$, and the missing puncture at $k=2$ is the whole problem. (A milder cousin of the same slip is to write $D\\geq0$ and wrongly drag in the equal-root endpoints $k=1,5$; the strict ``distinct'' rules those out.)",
    "solutions": [
      {
        "name": "Leading-coefficient case split, then the discriminant window (punch out the degenerate point)",
        "steps": [
          "Before touching the discriminant, split on the leading coefficient $k-2$, since ``two distinct real roots'' is a theorem about genuine quadratics. Case $k=2$: the equation becomes $(0)x^{2}+(3)x+(0)=0$, i.e. $3x=0$, a linear equation with the single root $x=0$. One root is not two distinct roots, so $k=2$ is rejected outright —{} regardless of any discriminant value.",
          "Case $k\\neq2$: now it is a true quadratic, and two distinct real roots $\\iff$ discriminant $>0$. Compute $D=(k+1)^{2}-4(k-2)^{2}=(k^{2}+2k+1)-4(k^{2}-4k+4)=-3k^{2}+18k-15=-3(k^{2}-6k+5)=-3(k-1)(k-5).$",
          "Solve $D>0$: $-3(k-1)(k-5)>0\\iff(k-1)(k-5)<0\\iff 1<k<5.$ The endpoints $k=1,\\,5$ give $D=0$ (a repeated root, $-(x-1)^{2}=0$ and $3(x+1)^{2}=0$ respectively), so the strict inequality correctly drops them.",
          "Intersect with the case condition $k\\neq2$. The quadratic case contributes $(1,5)$ minus the forbidden $k=2$, and the linear case $k=2$ contributed nothing. Hence the set of $k$ giving two distinct real roots is the punctured interval $\\boxed{(1,2)\\cup(2,5)}$."
        ]
      },
      {
        "name": "Palindromic reciprocal-roots view (the puncture appears for free)",
        "steps": [
          "For $k\\neq2$ divide by $k-2$ to get the monic form $x^{2}+\\dfrac{k+1}{k-2}\\,x+\\dfrac{k-2}{k-2}=0$, i.e. $x^{2}+s\\,x+1=0$ with $s=\\dfrac{k+1}{k-2}$. The constant term is exactly $1$ because the original is palindromic ($a=c=k-2$): the two roots multiply to $1$, so they form a reciprocal pair $r,\\,1/r$.",
          "A reciprocal pair $r,1/r$ is real and distinct precisely when it is not a repeated root, i.e. when the sum $s=-(r+\\tfrac1r)$ has $|s|>2$ (since $|r+\\tfrac1r|\\geq2$ for real $r$, with equality only at $r=\\pm1$). Thus the condition is $\\left(\\dfrac{k+1}{k-2}\\right)^{2}>4.$",
          "Rearrange: $\\dfrac{(k+1)^{2}}{(k-2)^{2}}-4>0\\iff\\dfrac{(k+1)^{2}-4(k-2)^{2}}{(k-2)^{2}}>0\\iff\\dfrac{-3(k-1)(k-5)}{(k-2)^{2}}>0.$ The denominator $(k-2)^{2}>0$ for $k\\neq2$, so the sign is that of $-3(k-1)(k-5)$, giving $1<k<5$ —{} and the manipulation was only valid for $k\\neq2$ all along, so $k=2$ is automatically absent.",
          "The single excluded value is exactly the one where the division was illegal, $k=2$ (there the equation is not the reciprocal-roots quadratic but the linear $3x=0$, root $x=0$, a non-pair). Therefore the answer is $\\boxed{(1,2)\\cup(2,5)}$ —{} the puncture at $k=2$ is built into the reciprocal-roots reduction, not patched on afterward."
        ]
      },
      {
        "name": "Coincident-root resultant flags the degenerate locus itself",
        "steps": [
          "Two real roots fail to be distinct exactly when $f(x)=(k-2)x^{2}+(k+1)x+(k-2)$ has a repeated root or stops being quadratic. The repeated-root locus is the vanishing of the resultant of $f$ and $f'=2(k-2)x+(k+1)$: $\\operatorname{Res}_x(f,f')=3(k-1)(k-2)(k-5).$ Strikingly, the factor $(k-2)$ —{} the degenerate leading-coefficient value —{} appears in the resultant alongside the genuine equal-root values $k=1,5$.",
          "These three critical values $k\\in\\{1,2,5\\}$ partition the line into intervals on which the root structure is constant; test one point in each. On $(-\\infty,1)$ try $k=0$: $-2x^{2}+x-2=0$, $D=1-16<0$, no real root. On $(1,5)$ try $k=3$: $x^{2}+4x+1=0$, $D=12>0$, two distinct real roots. On $(5,\\infty)$ try $k=6$: $4x^{2}+7x+4=0$, $D=49-64<0$, no real root.",
          "So the two-distinct-roots behaviour holds throughout the open interval $(1,5)$ —{} but each of the three boundary values must now be examined, and the resultant has already told us $k=2$ is special. At $k=1$ and $k=5$: repeated root ($D=0$), not distinct, excluded. At $k=2$: leading coefficient zero, the equation is the linear $3x=0$ with the single root $x=0$, not a distinct pair, excluded.",
          "Removing all three flagged values from the closure $[1,5]$ —{} the equal-root ends $1,5$ and the interior degenerate point $2$ —{} leaves the open interval with a hole: $\\boxed{(1,2)\\cup(2,5)}$. The resultant's inclusion of the factor $(k-2)$ is the warning, in algebra, that the discriminant alone would have missed."
        ]
      }
    ],
    "remark": "Insight: the proposition ``two distinct real roots $\\iff$ discriminant $>0$'' is a theorem with a hidden hypothesis —{} $a\\neq0$ —{} and a parameter problem exists precisely to make that hypothesis fail somewhere inside the answer set. Here $D=(k+1)^{2}-4(k-2)^{2}=-3(k-1)(k-5)$ is a smooth function of $k$ that knows nothing about whether the equation is still quadratic; at $k=2$ it cheerfully reports $9>0$, the discriminant of a parabola that has flattened into a line. The discipline that separates a top ranker is to case-split on the leading coefficient first, treating $k=2$ as its own (linear) world before the discriminant is even written; only then does the interior puncture at $k=2$ become visible, turning the lazy window $(1,5)$ into the honest $(1,2)\\cup(2,5)$. Three independent vantage points all converge on that hole: the direct case split removes it by hand; the palindromic reciprocal-roots reduction removes it automatically, because dividing by $k-2$ was illegal there from the start; and the coincident-root resultant $3(k-1)(k-2)(k-5)$ literally carries the degenerate value $(k-2)$ as a factor, refusing to forget what the bare discriminant drops. The transferable maxim: in any parametric ``how many roots'' question, the leading coefficient is a case, not a coefficient —{} the value that kills it is exactly where the standard discriminant test is silently inapplicable, and that value loves to hide in the interior of the answer where it is easiest to miss."
  },
  {
    "theme": "parameter",
    "themeLabel": "Parameters",
    "title": "Both Roots Caged in an Interval",
    "difficulty": 5,
    "task": "Find the number of integer values of k",
    "tags": [
      "interval-location",
      "discriminant",
      "integer-count",
      "grand-hybrid",
      "vieta"
    ],
    "statement": "Find the number of integer values of $k$ for which both roots of \\[x^2 - (k-2)x + (k^2 - 9k + 14) = 0\\] are real and lie in the closed interval $[-1,\\,6]$.",
    "answer": "$4$ integer values, namely $k\\in\\{2,6,7,8\\}$.",
    "trap": "Assuming the qualifying $k$ form one contiguous block, so that once $D\\ge0$ on $2\\le k\\le\\tfrac{26}{3}$ you simply count all integers there and report $7$. In fact $k=3,4,5$ fail: their roots, though real, are not both inside $[-1,6]$ — for each, the smaller root slips just below $-1$. The endpoint condition $f(-1)\\ge0$ punches these three holes out of the discriminant window, so $D\\ge0$ is far from sufficient and the true answer is $4$, not $7$.",
    "solutions": [
      {
        "name": "Four-condition interval location",
        "steps": [
          "Write $f(x)=x^2-(k-2)x+(k^2-9k+14)$ with leading coefficient $a=1>0$. Both roots lie in $[-1,6]$ exactly when all four hold: $D\\ge0$ (real roots), $f(-1)\\ge0$ and $f(6)\\ge0$ (parabola non-negative at the fences), and $-1\\le\\tfrac{k-2}{2}\\le6$ (vertex inside).",
          "Discriminant: $D=(k-2)^2-4(k^2-9k+14)=-3k^2+32k-52=-(k-2)(3k-26)\\ge0\\iff 2\\le k\\le\\tfrac{26}{3}$. Integer candidates: $k\\in\\{2,3,4,5,6,7,8\\}$.",
          "Left fence: $f(-1)=1+(k-2)+(k^2-9k+14)=k^2-8k+13\\ge0\\iff k\\le4-\\sqrt3\\approx2.27$ or $k\\ge4+\\sqrt3\\approx5.73$. This removes the integers $3,4,5$ from the candidate list, leaving $\\{2,6,7,8\\}$.",
          "Right fence: $f(6)=36-6(k-2)+(k^2-9k+14)=k^2-15k+62$ has discriminant $225-248=-23<0$, so $f(6)>0$ for every $k$ — this condition is automatic and rules out nothing. The vertex condition $-1\\le\\tfrac{k-2}{2}\\le6\\iff0\\le k\\le14$ is also satisfied throughout the window. Hence the survivors are exactly $\\{2,6,7,8\\}$, giving $\\boxed{4}$ integer values."
        ]
      },
      {
        "name": "Direct root computation per integer",
        "steps": [
          "Inside the discriminant window $2\\le k\\le8$, the roots are $\\tfrac{(k-2)\\pm\\sqrt{D}}{2}$ with $D=-(k-2)(3k-26)$. Test each integer for membership in $[-1,6]$.",
          "$k=2$: $D=0$, double root $0\\in[-1,6]$ ✓. $k=3$: $\\tfrac{1\\pm\\sqrt{17}}{2}\\approx\\{-1.56,2.56\\}$ — smaller root $<-1$ ✗. $k=4$: $1\\pm\\sqrt7\\approx\\{-1.65,3.65\\}$ ✗. $k=5$: $\\tfrac{3\\pm\\sqrt{33}}{2}\\approx\\{-1.37,4.37\\}$ ✗.",
          "$k=6$: $2\\pm2\\sqrt2\\approx\\{-0.83,4.83\\}\\subset[-1,6]$ ✓. $k=7$: roots $0$ and $5$, both in $[-1,6]$ ✓. $k=8$: $3\\pm\\sqrt3\\approx\\{1.27,4.73\\}\\subset[-1,6]$ ✓.",
          "The qualifying integers are $\\{2,6,7,8\\}$, so the count is $\\boxed{4}$."
        ]
      },
      {
        "name": "Vieta bounding of sum and product",
        "steps": [
          "Let the roots be $\\alpha,\\beta$. Both lie in $[-1,6]$ iff they are real and the shifted products are non-negative: $(\\alpha+1)(\\beta+1)\\ge0$ and $(6-\\alpha)(6-\\beta)\\ge0$, with $\\alpha+\\beta=k-2\\in[-2,12]$. By Vieta $\\alpha+\\beta=k-2$ and $\\alpha\\beta=k^2-9k+14$.",
          "Reality: $D=-(k-2)(3k-26)\\ge0\\iff2\\le k\\le\\tfrac{26}{3}$, integers $\\{2,\\dots,8\\}$.",
          "$(\\alpha+1)(\\beta+1)=\\alpha\\beta+(\\alpha+\\beta)+1=(k^2-9k+14)+(k-2)+1=k^2-8k+13\\ge0$ forces $k\\le4-\\sqrt3$ or $k\\ge4+\\sqrt3$, eliminating $k=3,4,5$. And $(6-\\alpha)(6-\\beta)=36-6(\\alpha+\\beta)+\\alpha\\beta=k^2-15k+62>0$ always (its discriminant $-23<0$). The sum bound $k-2\\in[-2,12]$ holds throughout.",
          "Only $k\\in\\{2,6,7,8\\}$ survive every constraint, so there are $\\boxed{4}$ integer values."
        ]
      }
    ],
    "remark": "Insight: this is the full quadratic-location toolkit — discriminant for reality, $a\\cdot f(\\text{endpoint})\\ge0$ at each fence, and vertex inside — but here only two of the four conditions actually bite. The right fence $f(6)>0$ holds identically (its discriminant is negative), and the vertex sits inside automatically; the entire pruning is done by $D\\ge0$ together with the left fence $f(-1)\\ge0$. That left fence punches the holes $k=3,4,5$ out of the discriminant block, producing the deliberately non-contiguous answer set $\\{2,6,7,8\\}$. The lesson: $D\\ge0$ is necessary but nowhere near sufficient, and you must actually evaluate the endpoint conditions rather than assume the survivors form one interval of integers."
  },
  {
    "theme": "inequalities",
    "themeLabel": "Quadratic Inequalities",
    "title": "The Hole in the Middle of the Answer",
    "difficulty": 5,
    "task": "Solve and count",
    "tags": [
      "rational-inequality",
      "removable-hole",
      "domain-puncture",
      "sign-chart",
      "zero-vs-pole",
      "integer-count"
    ],
    "statement": "Consider the inequality \\[ \\frac{2x^{2}-5x-3}{x^{2}-9}\\;\\ge\\;0. \\] First determine its complete solution set $S\\subseteq\\mathbb{R}$. Then report the value of \\[ N+\\sigma,\\qquad\\text{where } N=\\#\\bigl(S\\cap\\mathbb{Z}\\cap[-5,5]\\bigr)\\ \\text{ and }\\ \\sigma=\\!\\!\\sum_{n\\in S\\cap\\mathbb{Z}\\cap[-5,5]}\\!\\! n, \\] i.e. the number of integers in $[-5,5]$ that satisfy the inequality, plus their sum. (Before you cancel anything, decide carefully which of the points where numerator and denominator vanish belong to $S$ and which must be thrown out —{} the answer is sensitive to a single such point.)",
    "answer": "$S=(-\\infty,-3)\\cup\\bigl[-\\tfrac12,\\,3\\bigr)\\cup(3,\\infty)$, so the integers of $[-5,5]$ in $S$ are $\\{-5,-4,0,1,2,4,5\\}$, giving $N=7$, $\\sigma=3$, and \\[ \\boxed{\\,N+\\sigma=10\\,}. \\] Factoring, $\\dfrac{2x^{2}-5x-3}{x^{2}-9}=\\dfrac{(x-3)(2x+1)}{(x-3)(x+3)}$. The factor $(x-3)$ cancels, but $x=3$ is a genuine $\\tfrac{0}{0}$ hole: the original expression is undefined there, so $x=3\\notin S$ even though the reduced form $\\dfrac{2x+1}{x+3}$ is perfectly happy at $x=3$. The reduced inequality $\\dfrac{2x+1}{x+3}\\ge0$ gives $(-\\infty,-3)\\cup[-\\tfrac12,\\infty)$, with the zero $x=-\\tfrac12$ included (since $\\ge$) and the pole $x=-3$ excluded. The hole $x=3$ sits strictly inside the piece $[-\\tfrac12,\\infty)$, so it must be punched out: $S=(-\\infty,-3)\\cup[-\\tfrac12,3)\\cup(3,\\infty)$. Listing integers in $[-5,5]$: $-5,-4$ lie in $(-\\infty,-3)$; $-3$ is the excluded pole; $-2,-1$ lie in the gap $(-3,-\\tfrac12)$ and fail; $0,1,2$ lie in $[-\\tfrac12,3)$; $3$ is the excluded hole; $4,5$ lie in $(3,\\infty)$. Thus $S\\cap\\mathbb{Z}\\cap[-5,5]=\\{-5,-4,0,1,2,4,5\\}$: $N=7$ and $\\sigma=-5-4+0+1+2+4+5=3$, so $N+\\sigma=10$.",
    "trap": "The lethal move is to cancel $(x-3)$ on sight and forget where it went. Writing $\\dfrac{(x-3)(2x+1)}{(x-3)(x+3)}=\\dfrac{2x+1}{x+3}$ and solving $\\dfrac{2x+1}{x+3}\\ge0$ produces $(-\\infty,-3)\\cup[-\\tfrac12,\\infty)$ —{} and the strong student, having dutifully removed the pole $x=-3$, declares this the answer. Every sign is correct; the omission is invisible. But cancellation does not restore a deleted point: at $x=3$ the original ratio is $\\tfrac{0}{0}$, undefined, so $3\\notin S$. The reduced expression $\\dfrac{2x+1}{x+3}$ evaluates to a cheerful $\\tfrac{7}{6}>0$ at $x=3$, which is exactly why the trap bites —{} the surviving function gives no hint that a point was lost. And crucially the hole does not sit in some discarded region where it would be harmless; it lies strictly interior to the solution piece $[-\\tfrac12,\\infty)$, so it genuinely punctures the answer into $[-\\tfrac12,3)\\cup(3,\\infty)$. The integer-count packaging makes the cost explicit: the naive solver keeps $x=3$, counts $8$ integers $\\{-5,-4,0,1,2,3,4,5\\}$ with sum $6$, and reports $N+\\sigma=14$; the honest solver excises $3$, getting $7$ integers of sum $3$ and $N+\\sigma=10$. A subtler version of the same error is the asymmetry between zero and pole on the boundary: at the genuine zero $x=-\\tfrac12$ the original is $0\\ge0$ —{} included; at the pole $x=-3$ it is undefined —{} excluded. Treating the two endpoints alike (both open or both closed) is the second way to lose a point. The discipline: identify every root of numerator and denominator, classify each as zero / pole / removable hole, and let the inequality type ($\\ge$ vs $>$) decide the bracket —{} cancellation is bookkeeping, not deletion.",
    "solutions": [
      {
        "name": "Factor, cancel, then re-puncture the hole (sign chart of the reduced form)",
        "steps": [
          "Factor: $2x^{2}-5x-3=(x-3)(2x+1)$ and $x^{2}-9=(x-3)(x+3)$, so the inequality is $\\dfrac{(x-3)(2x+1)}{(x-3)(x+3)}\\ge0$. The common factor $(x-3)$ may be cancelled to simplify the sign, giving $\\dfrac{2x+1}{x+3}\\ge0$, provided we remember that $x=3$ has been removed from the domain (there the original is $\\tfrac{0}{0}$).",
          "Sign chart for $\\dfrac{2x+1}{x+3}$ with critical points $x=-3$ (pole) and $x=-\\tfrac12$ (zero): for $x<-3$ both factors negative $\\Rightarrow$ positive; for $-3<x<-\\tfrac12$ numerator negative, denominator positive $\\Rightarrow$ negative; for $x>-\\tfrac12$ both positive $\\Rightarrow$ positive. Since the inequality is non-strict, include the zero $x=-\\tfrac12$ and exclude the pole $x=-3$: the reduced solution is $(-\\infty,-3)\\cup[-\\tfrac12,\\infty)$.",
          "Re-impose the deleted point. The hole $x=3$ lies strictly inside $[-\\tfrac12,\\infty)$, so it must be punched out: \\[ S=(-\\infty,-3)\\cup\\Bigl[-\\tfrac12,\\,3\\Bigr)\\cup(3,\\infty). \\]",
          "Harvest integers in $[-5,5]$: $\\{-5,-4\\}\\subset(-\\infty,-3)$, $\\{0,1,2\\}\\subset[-\\tfrac12,3)$, $\\{4,5\\}\\subset(3,\\infty)$; the points $-3$ (pole) and $3$ (hole) are excluded. Hence $S\\cap\\mathbb{Z}\\cap[-5,5]=\\{-5,-4,0,1,2,4,5\\}$, $N=7$, $\\sigma=3$, and $N+\\sigma=\\boxed{10}$."
        ]
      },
      {
        "name": "No cancellation: multiply by the positive square of the denominator",
        "steps": [
          "Never cancel. For $x\\ne\\pm3$ the denominator's square $(x^{2}-9)^{2}>0$, so multiplying preserves the inequality: $\\dfrac{2x^{2}-5x-3}{x^{2}-9}\\ge0\\iff (2x^{2}-5x-3)(x^{2}-9)\\ge0$, together with the domain restriction $x\\ne3$ and $x\\ne-3$ carried along separately.",
          "Factor the polynomial product: $(2x^{2}-5x-3)(x^{2}-9)=(x-3)(2x+1)\\cdot(x-3)(x+3)=(x-3)^{2}(2x+1)(x+3)$. The squared factor $(x-3)^{2}\\ge0$ never changes sign, so for the product to be $\\ge0$ we need $(2x+1)(x+3)\\ge0$ (the only place $(x-3)^2$ contributes is the value $0$ at $x=3$, but that point is barred by the domain).",
          "Solve the upward parabola $(2x+1)(x+3)\\ge0$: roots $-3$ and $-\\tfrac12$, so $x\\le-3$ or $x\\ge-\\tfrac12$. Now apply the domain: drop $x=-3$ (pole) and $x=3$ (hole). This yields $S=(-\\infty,-3)\\cup[-\\tfrac12,3)\\cup(3,\\infty)$ —{} the $\\ge$ keeps the zero $x=-\\tfrac12$ while the carried-along restriction removes the interior point $3$.",
          "Count integers in $[-5,5]$: $\\{-5,-4,0,1,2,4,5\\}$, so $N=7$, $\\sigma=3$, and $N+\\sigma=\\boxed{10}$. The squared factor made the hole visible as the double root, a built-in reminder that $x=3$ is special."
        ]
      },
      {
        "name": "Direct interval audit by domain partition (test-point method, hole included as a cut)",
        "steps": [
          "List every point where numerator or denominator vanishes: $x=-3$ ($x^2-9=0$, pole), $x=-\\tfrac12$ ($2x^2-5x-3=0$, zero), and $x=3$ (both vanish $\\Rightarrow$ $\\tfrac{0}{0}$ hole). Use all three as cut points so the hole is never glossed over: the open intervals are $(-\\infty,-3),(-3,-\\tfrac12),(-\\tfrac12,3),(3,\\infty)$, all of which exclude $x=3$ automatically.",
          "Pick a test point in each and evaluate $f(x)=\\dfrac{2x^2-5x-3}{x^2-9}$: $f(-4)=\\dfrac{32+20-3}{7}=7>0$ (keep); $f(-1)=\\dfrac{2+5-3}{-8}=-\\tfrac12<0$ (drop); $f(0)=\\dfrac{-3}{-9}=\\tfrac13>0$ (keep); $f(4)=\\dfrac{32-20-3}{7}=\\tfrac{9}{7}>0$ (keep).",
          "Decide the boundary points. The zero $x=-\\tfrac12$ gives $f=0\\ge0$ $\\Rightarrow$ included; the pole $x=-3$ and the hole $x=3$ are both undefined $\\Rightarrow$ excluded. Splicing the kept open intervals with their admissible endpoints: $S=(-\\infty,-3)\\cup[-\\tfrac12,3)\\cup(3,\\infty)$, the hole leaving a puncture between the two pieces that border it.",
          "The integers of $[-5,5]$ inside $S$ are $\\{-5,-4,0,1,2,4,5\\}$ (note $-3$ and $3$ are the excluded undefined points and $-2,-1$ fall in the negative interval). Thus $N=7$, $\\sigma=-5-4+0+1+2+4+5=3$, and $N+\\sigma=\\boxed{10}$."
        ]
      }
    ],
    "remark": "Insight: cancelling a common factor in a rational expression is a statement about the formula, not about the domain. The function $\\dfrac{(x-3)(2x+1)}{(x-3)(x+3)}$ and the function $\\dfrac{2x+1}{x+3}$ agree everywhere except at $x=3$, where the first is undefined and the second is not —{} so cancellation must always be accompanied by the clause ``for $x\\ne3$.'' What makes this problem a trap rather than a triviality is where the deleted point lands: not in a discarded region (harmless), and not on a boundary (a closed bracket would silently absorb it), but strictly interior to a solution interval, where it punctures the answer into two pieces $[-\\tfrac12,3)\\cup(3,\\infty)$. The surviving reduced function offers no warning —{} it returns a perfectly positive $\\tfrac{7}{6}$ at $x=3$ —{} which is precisely why a confident solver sails past. The three methods triangulate the same defense: Method 1 cancels but explicitly re-punctures; Method 2 refuses to cancel at all, multiplying by $(x^2-9)^2>0$ so the lost point reappears as the double root $(x-3)^2$, a structural flag; Method 3 partitions the domain using all vanishing points (including the hole) as cuts, so the puncture is built into the very interval structure. Two boundary disciplines run alongside the hole: a non-strict $\\ge$ keeps a genuine zero ($x=-\\tfrac12$) but never a pole or hole, so the two undefined endpoints ($-3$ and $3$) are open while the zero is closed —{} treating zeros and poles symmetrically is the companion error. The transferable maxim: in any rational inequality, enumerate the roots of numerator and denominator, classify each as zero, pole, or removable hole, and let the inequality sign place the bracket —{} a cancelled factor is bookkeeping, never a license to forget the point it stood for."
  },
  {
    "theme": "inequalities",
    "themeLabel": "Quadratic Inequalities",
    "title": "Positive Forever",
    "difficulty": 3,
    "task": "Find all",
    "tags": [
      "positive definite",
      "discriminant",
      "parameter",
      "all real x"
    ],
    "statement": "Find all real values of $m$ for which \\[x^2+(m+1)x+(m+1)>0\\quad\\text{for every real }x.\\]",
    "answer": "$m\\in(-1,3)$.",
    "trap": "Writing the condition as $D\\le 0$ instead of the strict $D<0$. If $D=0$ the parabola merely touches the axis, so it attains the value $0$ at its vertex, which violates the strict ``$>0$''. The leading coefficient is $1>0$, so only the discriminant's sign is in question; but because the inequality is strict, the discriminant must be strictly negative. Using $D\\le0$ wrongly enlarges the answer to the closed interval $[-1,3]$, illegally admitting $m=-1$ (giving $x^2$, zero at $x=0$) and $m=3$ (giving $(x+2)^2$, zero at $x=-2$).",
    "solutions": [
      {
        "name": "Discriminant condition",
        "steps": [
          "The leading coefficient is $1>0$, so the quadratic is positive for every real $x$ if and only if its discriminant is strictly negative (no real roots, parabola opening upward and staying above the axis).",
          "$D=(m+1)^2-4(m+1)=(m+1)\\bigl[(m+1)-4\\bigr]=(m+1)(m-3)$.",
          "Require $(m+1)(m-3)<0$. A product of two factors is negative exactly between its roots $-1$ and $3$, so $-1<m<3$.",
          "Therefore $\\boxed{m\\in(-1,3)}$."
        ]
      },
      {
        "name": "Completing the square",
        "steps": [
          "$x^2+(m+1)x+(m+1)=\\left(x+\\tfrac{m+1}{2}\\right)^2+(m+1)-\\tfrac{(m+1)^2}{4}$.",
          "The squared term is $\\ge0$, so the minimum value of the expression is the constant remainder $(m+1)-\\tfrac{(m+1)^2}{4}=-\\tfrac{(m+1)(m-3)}{4}$.",
          "Strict positivity for all $x$ forces this minimum to be strictly positive: $-(m+1)(m-3)>0$, i.e. $(m+1)(m-3)<0$.",
          "This holds precisely for $-1<m<3$, so $\\boxed{m\\in(-1,3)}$."
        ]
      },
      {
        "name": "Boundary sweep",
        "steps": [
          "The quadratic varies continuously in $m$, so positivity for all $x$ can only switch on/off where it stops being strictly positive, namely where the curve first touches the axis ($D=0$).",
          "Solve $D=(m+1)(m-3)=0$ to get the candidate boundaries $m=-1$ and $m=3$.",
          "Test the boundaries directly: at $m=-1$ the quadratic is $x^2$ (zero at $x=0$); at $m=3$ it is $x^2+4x+4=(x+2)^2$ (zero at $x=-2$). Both attain $0$, so neither is admissible.",
          "Test the middle, e.g. $m=1$: $x^2+2x+2=(x+1)^2+1\\ge1>0$, valid. So the strict positivity holds on the open interval between the boundaries: $\\boxed{m\\in(-1,3)}$."
        ]
      }
    ],
    "remark": "Insight: ``positive for all $x$'' for a fixed-sign leading coefficient collapses entirely to the discriminant, and the strictness of the inequality decides whether the endpoints (where $D=0$) are kept or dropped. Here strict ``$>0$'' excludes both touching cases, leaving the open interval $(-1,3)$; had the problem asked for ``$\\ge0$'', the answer would close up to $[-1,3]$."
  },
  {
    "theme": "inequalities",
    "themeLabel": "Quadratic Inequalities",
    "title": "Guarding the Interval",
    "difficulty": 4,
    "task": "Determine",
    "tags": [
      "parameter",
      "interval constraint",
      "vertex location",
      "case analysis"
    ],
    "statement": "Determine all real $a$ for which \\[x^2-2ax+(a+2)\\ge 0\\qquad\\text{holds for every }x\\in[1,3].\\]",
    "answer": "$a\\in(-\\infty,2]$.",
    "trap": "Imposing the global condition $D\\le 0$ (i.e. requiring the quadratic to be nonnegative for all real $x$). That over-restricts $a$: positivity is only demanded on $[1,3]$, so when the vertex $x=a$ lies outside $[1,3]$ the minimum on the interval occurs at an endpoint, not at the vertex. Here $D=4a^2-4a-8\\le0$ would give $-1\\le a\\le2$, wrongly discarding every $a<-1$ even though, for instance, $a=-3$ keeps $f$ positive throughout $[1,3]$. One must locate the vertex relative to $[1,3]$ and minimise accordingly.",
    "solutions": [
      {
        "name": "Vertex-position case split",
        "steps": [
          "Let $f(x)=x^2-2ax+(a+2)$; it opens upward with vertex at $x=a$. The minimum of $f$ on $[1,3]$ depends on where $a$ sits relative to the interval.",
          "If $a<1$: $f$ is increasing on $[1,3]$, so the minimum is $f(1)=3-a$; the requirement $3-a\\ge0$ means $a\\le3$, which is automatic since $a<1$. Hence all $a<1$ work.",
          "If $1\\le a\\le3$: the vertex lies in the interval, so the minimum is $f(a)=-a^2+a+2$; then $-a^2+a+2\\ge0\\Rightarrow a^2-a-2\\le0\\Rightarrow(a-2)(a+1)\\le0\\Rightarrow-1\\le a\\le2$. Intersecting with $1\\le a\\le3$ gives $1\\le a\\le2$.",
          "If $a>3$: $f$ is decreasing on $[1,3]$, so the minimum is $f(3)=11-5a$; then $11-5a\\ge0\\Rightarrow a\\le\\tfrac{11}{5}$, impossible for $a>3$. None work.",
          "Union of the cases: $a<1$ together with $1\\le a\\le2$, i.e. $\\boxed{a\\le2}$."
        ]
      },
      {
        "name": "Separate the parameter",
        "steps": [
          "For $x\\in[1,3]$ we have $x>0$, so $x^2-2ax+a+2\\ge0$ rearranges to $a(1-2x)\\ge-(x^2+2)$.",
          "Since $x\\ge1$, we have $1-2x<0$; dividing by it flips the inequality: $a\\le\\dfrac{x^2+2}{2x-1}$ must hold for every $x\\in[1,3]$.",
          "Thus the condition is $a\\le\\min_{[1,3]}g(x)$ where $g(x)=\\dfrac{x^2+2}{2x-1}$. Differentiating, $g'(x)=\\dfrac{2x^2-2x-4}{(2x-1)^2}=\\dfrac{2(x-2)(x+1)}{(2x-1)^2}$, which is negative on $[1,2)$ and positive on $(2,3]$, so $x=2$ is the minimiser.",
          "Then $g(2)=\\dfrac{6}{3}=2$, so $\\min_{[1,3]}g=2$, giving $\\boxed{a\\le2}$."
        ]
      }
    ],
    "remark": "Insight: nonnegativity on an interval is a localized condition. The binding constraint is the minimum over that interval, which migrates between the vertex and the endpoints as the parameter slides the vertex around. Equality occurs at $a=2$, where the vertex sits at $x=2\\in[1,3]$ and $f(2)=0$ touches the axis from above."
  },
  {
    "theme": "inequalities",
    "themeLabel": "Quadratic Inequalities",
    "title": "The Honest Square Root",
    "difficulty": 4,
    "task": "Find all",
    "tags": [
      "irrational inequality",
      "domain",
      "sign cases",
      "reducible to quadratic"
    ],
    "statement": "Find all real $x$ for which \\[\\sqrt{x+2}\\;>\\;x.\\]",
    "answer": "$x\\in[-2,2)$.",
    "trap": "Squaring both sides immediately to get $x+2>x^2$ and solving $-1<x<2$. Squaring an inequality preserves direction only when both sides are nonnegative. When $x<0$ the right side is negative while the left side is $\\ge 0$, so the inequality holds automatically for every $x$ in the domain; blindly squaring discards this fact and throws away the entire stretch $[-2,-1]$, where $x+2\\le x^2$ would falsely flag failure even though the original inequality is true there.",
    "solutions": [
      {
        "name": "Sign-of-RHS case split",
        "steps": [
          "Domain: the radicand needs $x+2\\ge0$, i.e. $x\\ge-2$. On the whole domain the left side $\\sqrt{x+2}$ is $\\ge0$.",
          "Case $x<0$ (with $x\\ge-2$): the right side is negative and the left side is $\\ge0$, so $\\sqrt{x+2}>x$ holds for every such $x$. This contributes $-2\\le x<0$.",
          "Case $x\\ge0$: both sides are nonnegative, so squaring is reversible: $x+2>x^2\\Rightarrow x^2-x-2<0\\Rightarrow(x-2)(x+1)<0\\Rightarrow-1<x<2$. Intersecting with $x\\ge0$ gives $0\\le x<2$.",
          "Union of the two cases: $[-2,0)\\cup[0,2)=\\boxed{[-2,2)}$."
        ]
      },
      {
        "name": "Graphical reasoning",
        "steps": [
          "Plot $y=\\sqrt{x+2}$, the upper half of a sideways parabola starting at $(-2,0)$ and rising, against the line $y=x$.",
          "They can only meet where $x\\ge0$ (the curve is $\\ge0$); setting $\\sqrt{x+2}=x$ and squaring gives $x^2-x-2=0$, so $x=2$ or $x=-1$, and only $x=2$ survives $x\\ge0$.",
          "For all $x$ in $[-2,0)$ the line lies below the $x$-axis while the curve is $\\ge0$, so the curve is strictly above the line there; on $[0,2)$ the curve stays above the line right up to the single crossing at $x=2$.",
          "Hence the curve exceeds the line exactly on $\\boxed{[-2,2)}$."
        ]
      }
    ],
    "remark": "Insight: an irrational inequality is governed by the sign of the bare (non-radical) side before any squaring. Where that side is negative the inequality is free for every point of the domain, and only the nonnegative region needs the reversible squaring step and its resulting quadratic."
  },
  {
    "theme": "inequalities",
    "themeLabel": "Quadratic Inequalities",
    "title": "The Convex Form That Still Went Negative",
    "difficulty": 5,
    "task": "Find all parameters",
    "tags": [
      "two-variable-form",
      "positive-semidefinite",
      "gram-matrix",
      "sum-of-squares",
      "hidden-constraint"
    ],
    "statement": "Find every real number $a$ for which \\[ 3x^{2}+3y^{2}+2\\;\\ge\\;a\\,(x+y+2xy)\\qquad\\text{holds for all real }x,y. \\] Give the answer as the exact interval (or set) of admissible $a$. (Warning: this is a quadratic form in two variables, not one. “Treat $y$ as a constant and force a discriminant in $x$”{} is only half the story —{} the leftover condition is itself an inequality that must hold for every $y$, and that second layer is where the real constraint hides.)",
    "answer": "Writing $F(x,y)=3x^{2}+3y^{2}+2-a(x+y+2xy)$ and demanding $F\\ge0$ on all of $\\mathbb{R}^{2}$, the admissible set is the closed interval \\[ \\boxed{\\,-3\\le a\\le 2\\,}, \\] i.e. $a\\in[-3,2]$. The two endpoints arise from two different obstructions: $a=-3$ is where the form stops being convex (its Hessian loses positive-definiteness), while $a=2$ is where a still-strictly-convex form first dips to the value $0$ —{} a constraint invisible to the convexity/discriminant check alone. At $a=2$ equality is attained at $(x,y)=(1,1)$, with the exact decomposition $F=3\\!\\left(x-\\tfrac{2y+1}{3}\\right)^{2}+\\tfrac{5}{3}(y-1)^{2}$.",
    "trap": "The seductive, almost-right route: fix $y$, view $F=3x^{2}-(a+2ay)x+(3y^{2}-ay+2)$ as a quadratic in $x$ with positive leading coefficient, and demand $\\operatorname{disc}_{x}\\le0$. That is correct so far. The trap is the next step: a strong student, having produced one inequality, treats it as a single quadratic condition in $a$ —{} or, worse, only checks that the $2\\times2$ leading block of the form is positive semidefinite, i.e. $9-a^{2}\\ge0$, and concludes $-3\\le a\\le 3$. Every line of that is internally consistent, and it even gets the lower endpoint $a=-3$ exactly right, which makes it feel verified. But $\\operatorname{disc}_{x}\\le0$ is a statement that must hold for every real $y$: rearranged, $-\\operatorname{disc}_{x}=(36-4a^{2})y^{2}-(4a^{2}+12a)y+(24-a^{2})$ must be $\\ge0$ as a quadratic in $y$. That demands BOTH its leading coefficient $36-4a^{2}\\ge0$ (giving the familiar $-3\\le a\\le3$) AND its own discriminant $\\le0$, namely $96(a-2)(a+3)(a+6)\\le0$. The second condition is the whole game: it forces $a\\le2$, slicing the upper end off $3$ and down to $2$. Skipping it keeps the phantom band $2<a\\le3$. Concretely at $a=\\tfrac{21}{10}$ the form is still strictly convex (so no discriminant-in-$x$ alarm at fixed $y$ sounds loudly), yet $F\\!\\left(\\tfrac76,\\tfrac76\\right)=-\\tfrac{9}{20}<0$: the inequality fails although the naive answer swears it holds. The deep error is conflating “positive definite in the highest-degree part”{} (a $2\\times2$ Hessian condition) with “positive for all $x,y$”{} (a $3\\times3$ condition that drags in the constant term $2$). The interaction between the linear coefficients and that constant —{} the bottom-right $3\\times3$ determinant —{} is exactly what the trap discards.",
    "solutions": [
      {
        "name": "Gram matrix: positivity of a 3×3 quadratic form (Sylvester / PSD)",
        "steps": [
          "Move everything to one side: $F(x,y)=3x^{2}+3y^{2}+2-a(x+y+2xy)\\ge0$ for all real $x,y$. This is a quadratic form in the three quantities $(x,y,1)$, so write $F=[x\\;y\\;1]\\,M\\,[x\\;y\\;1]^{\\mathsf T}$ with the symmetric matrix \\[ M=\\begin{pmatrix} 3 & -a & -\\tfrac a2\\\\ -a & 3 & -\\tfrac a2\\\\ -\\tfrac a2 & -\\tfrac a2 & 2 \\end{pmatrix}, \\] reading $3,3,2$ off the squares and halving the cross-coefficients ($-2a$ on $xy$, $-a$ on $x$ and on $y$). Then $F\\ge0$ for all $x,y$ $\\iff$ $M$ is positive semidefinite.",
          "A symmetric matrix is PSD iff all its principal minors are $\\ge0$. The $1\\times1$ minors are $3,3,2>0$. The three $2\\times2$ principal minors are $\\,3\\cdot3-a^{2}=9-a^{2}$ (the $(x,y)$ block) and $\\,3\\cdot2-\\tfrac{a^{2}}4=6-\\tfrac{a^{2}}4$ (twice). These give $-3\\le a\\le3$ and $|a|\\le2\\sqrt6$; the binding one so far is $-3\\le a\\le3$.",
          "Now the full $3\\times3$ determinant —{} the condition the leading-block check never sees: \\[ \\det M=-\\tfrac12(a-2)(a+3)(a+6). \\] Requiring $\\det M\\ge0$ gives $(a-2)(a+3)(a+6)\\le0$, i.e. $a\\le-6$ or $-3\\le a\\le2$.",
          "Intersect all minor conditions: $\\{-3\\le a\\le3\\}\\cap\\{|a|\\le2\\sqrt6\\}\\cap\\{a\\le-6\\text{ or }-3\\le a\\le2\\}=[-3,2]$. (The branch $a\\le-6$ is killed by $-3\\le a$.) Hence the inequality holds for all $x,y$ exactly when $\\boxed{-3\\le a\\le2}$. The determinant, not the leading block, sets the upper end."
        ]
      },
      {
        "name": "Iterated one-variable discriminant (the two-layer reduction done honestly)",
        "steps": [
          "Fix $y$ and read $F$ as a quadratic in $x$: $F=3x^{2}-(a+2ay)\\,x+(3y^{2}-ay+2)$. Its leading coefficient $3>0$, so $F\\ge0$ for all $x$ (at this fixed $y$) iff $\\operatorname{disc}_{x}=(a+2ay)^{2}-12(3y^{2}-ay+2)\\le0$.",
          "But this must hold for every $y$. Expand $g(y):=-\\operatorname{disc}_{x}=(36-4a^{2})y^{2}-(4a^{2}+12a)\\,y+(24-a^{2})$; we need $g(y)\\ge0$ for all real $y$. This is a quadratic in $y$, so two requirements appear, not one.",
          "Requirement (i): its leading coefficient $36-4a^{2}\\ge0\\iff-3\\le a\\le3$. Requirement (ii): with that leading coefficient nonnegative, its discriminant must be $\\le0$: $\\operatorname{disc}_{y}=(4a^{2}+12a)^{2}-4(36-4a^{2})(24-a^{2})=96(a-2)(a+3)(a+6)\\le0$, i.e. $a\\le-6$ or $-3\\le a\\le2$.",
          "Both at once: $[-3,3]\\cap\\bigl((-\\infty,-6]\\cup[-3,2]\\bigr)=[-3,2]$. (Edge case $a=\\pm3$ makes the $y$-leading coefficient vanish; at $a=3$, $g(y)=-72y-15$ is not $\\ge0$ for all $y$, killing $a=3$ — consistent with requirement (ii); at $a=-3$, $g(y)=15\\ge0$, so $a=-3$ survives.) Thus $\\boxed{-3\\le a\\le2}$."
        ]
      },
      {
        "name": "Sum of squares at the boundary (construct the equality and certify both sides)",
        "steps": [
          "Complete the square in $x$ without fixing $y$: $F=3\\!\\left(x-\\dfrac{a+2ay}{6}\\right)^{2}+R(y)$, where $R(y)=3y^{2}-ay+2-\\dfrac{(a+2ay)^{2}}{12}=\\dfrac{36-4a^{2}}{12}\\,y^{2}-\\dfrac{a^{2}+3a}{3}\\,y+\\dfrac{24-a^{2}}{12}$. Since the $x$-square is $\\ge0$, $F\\ge0$ for all $x,y$ $\\iff$ $R(y)\\ge0$ for all $y$.",
          "$R(y)\\ge0$ for all $y$ requires its leading coefficient $\\ge0$ ($-3\\le a\\le3$) and discriminant $\\le0$. Its discriminant is a positive multiple of $(a-2)(a+3)(a+6)$, so $R\\ge0$ for all $y$ exactly on $[-3,2]$ — matching the other methods. To see why $a=2$ is the cliff, build the certificate there.",
          "At $a=2$: $F=3x^{2}+3y^{2}+2-2(x+y+2xy)=3\\!\\left(x-\\dfrac{2y+1}{3}\\right)^{2}+\\dfrac{5}{3}(y-1)^{2}$. This is a genuine sum of two squares, so $F\\ge0$; equality needs both squares zero, i.e. $y=1$ and $x=\\tfrac{2\\cdot1+1}{3}=1$, giving $F(1,1)=0$. Thus at $a=2$ the form is positive semidefinite but not positive definite — it kisses zero — so $a=2$ is admissible and is the last such value.",
          "For $a>2$ the SOS breaks: e.g. at $a=\\tfrac{21}{10}$, evaluating at the would-be touch point $(1,1)$ already gives $F(1,1)=8-\\tfrac{21}{10}\\cdot4=-\\tfrac25<0$, so the inequality fails. Combined with the lower end $a=-3$ (where the Hessian first goes singular and $F$ stays $\\ge\\tfrac54>0$, while $a<-3$ sends $F\\to-\\infty$), the admissible set is $\\boxed{-3\\le a\\le2}$."
        ]
      }
    ],
    "remark": "Insight: “positive for all real $x,y$”{} is a statement about the whole affine quadratic, encoded by a $3\\times3$ Gram matrix on $(x,y,1)$ — not just about its highest-degree part, encoded by the $2\\times2$ Hessian. The two layers genuinely differ, and this problem is engineered so the endpoints come from different layers: the lower endpoint $a=-3$ is the convexity boundary (Hessian PSD, the $9-a^{2}\\ge0$ condition that the naive solver does catch), while the upper endpoint $a=2$ is set by the bordered determinant that couples the linear terms to the constant $2$ — a still-strictly-convex bowl whose minimum value has just reached zero. That asymmetry is the whole lesson: a quadratic form can be perfectly convex yet drop below zero because its vertex sits beneath the axis, and only the full determinant (equivalently, the second-layer discriminant in $y$) detects it. The three methods triangulate the same truth from different altitudes: the Gram/Sylvester method makes the missing $3\\times3$ minor literal; the iterated-discriminant method shows the trap precisely — the first discriminant in $x$ is necessary but its survivor must itself be nonnegative for all $y$, spawning the second, binding condition; and the SOS method produces an explicit certificate $3(x-\\tfrac{2y+1}{3})^{2}+\\tfrac53(y-1)^{2}$ at $a=2$ that both proves admissibility and pinpoints the unique equality point $(1,1)$. Transferable maxim: to test whether a multivariable quadratic is nonnegative, homogenize with a slack “$1$”{} and demand the resulting Gram matrix be positive semidefinite — check all principal minors, because the constant term participates, and the constraint that bites is almost never the one on the leading block."
  },
  {
    "theme": "inequalities",
    "themeLabel": "Quadratic Inequalities",
    "title": "Crossing the Bar",
    "difficulty": 4,
    "task": "Find all",
    "tags": [
      "rational inequality",
      "move-everything-to-one-side",
      "sign chart",
      "domain"
    ],
    "statement": "Find all real $x$ satisfying \\[\\frac{2x-1}{x+1}\\le 1.\\]",
    "answer": "$x\\in(-1,2]$.",
    "trap": "Multiplying both sides by $x+1$ to get $2x-1\\le x+1$. Since $x+1$ may be negative, this multiplication can flip the inequality without warning, producing the spurious answer $x\\le2$ (which wrongly includes points like $x=-2$ where the original gives $\\tfrac{-5}{-1}=5\\not\\le1$). One must move everything to one side and analyze the sign of the combined fraction.",
    "solutions": [
      {
        "name": "One-sided fraction + sign chart",
        "steps": [
          "Rewrite as $\\frac{2x-1}{x+1}-1\\le0\\Rightarrow\\frac{2x-1-(x+1)}{x+1}\\le0\\Rightarrow\\frac{x-2}{x+1}\\le0$, with $x\\neq-1$.",
          "The fraction is $\\le0$ where numerator and denominator have opposite signs (or the numerator is $0$): between the critical points $-1$ and $2$.",
          "Include $x=2$ (numerator zero, fraction $=0$, allowed) but exclude $x=-1$ (denominator zero).",
          "Solution: $\\boxed{(-1,2]}$."
        ]
      },
      {
        "name": "Two cases on the denominator sign",
        "steps": [
          "If $x+1>0$ (i.e. $x>-1$): multiply safely, $2x-1\\le x+1\\Rightarrow x\\le2$; combined with $x>-1$ gives $-1<x\\le2$.",
          "If $x+1<0$ (i.e. $x<-1$): multiplying flips the inequality, $2x-1\\ge x+1\\Rightarrow x\\ge2$; this contradicts $x<-1$, so no solutions here.",
          "The point $x=-1$ is excluded (undefined).",
          "Union of the cases: $\\boxed{(-1,2]}$."
        ]
      }
    ],
    "remark": "Insight: the safest way past a denominator of unknown sign is never to multiply across — collapse to a single fraction and read its sign chart, where the endpoints are decided by which factor may legitimately equal zero."
  },
  {
    "theme": "inequalities",
    "themeLabel": "Quadratic Inequalities",
    "title": "The Coefficient's Veto",
    "difficulty": 5,
    "task": "Find all",
    "tags": [
      "parameter",
      "leading coefficient sign",
      "discriminant",
      "positive definite",
      "case analysis"
    ],
    "statement": "Find all real $a$ for which \\[(a-1)x^2-(a+1)x+(a+1)>0\\qquad\\text{for every real }x.\\]",
    "answer": "$a\\in\\left(\\tfrac{5}{3},\\,\\infty\\right)$.",
    "trap": "Solving $D<0$ alone and reporting $a<-1$ or $a>\\tfrac{5}{3}$. The discriminant being negative only forces a constant sign; it does not guarantee that sign is positive. For $a<-1$ the leading coefficient $a-1$ is negative, so the parabola opens downward and is negative for all $x$ — the exact opposite of what is wanted. One must also enforce $a-1>0$, and separately dispatch the degenerate $a=1$.",
    "solutions": [
      {
        "name": "Leading-coefficient + discriminant",
        "steps": [
          "Degenerate case $a=1$: the expression collapses to $-2x+2$, a line, positive only for $x<1$ — fails.",
          "For $a\\neq1$ the graph is a genuine parabola; to be positive for every $x$ it must open upward AND lie strictly above the axis: $a-1>0$ and $D<0$.",
          "$D=(a+1)^2-4(a-1)(a+1)=(a+1)\\big[(a+1)-4(a-1)\\big]=(a+1)(5-3a)$. Then $D<0\\iff(a+1)(5-3a)<0\\iff a<-1$ or $a>\\tfrac53$.",
          "Intersect with $a-1>0$ (i.e. $a>1$): only $a>\\tfrac53$ survives. Hence $\\boxed{a>\\tfrac53}$."
        ]
      },
      {
        "name": "Why $a<-1$ is a decoy",
        "steps": [
          "From $D=(a+1)(5-3a)<0$ the candidate set is $a<-1$ or $a>\\tfrac53$; both make the quadratic of constant sign — but the sign is dictated by the leading coefficient, not by $D$.",
          "Pick a test point in $a<-1$, say $a=-2$: the polynomial is $-3x^2+x-1$, with leading coefficient $-3<0$, so it $\\to-\\infty$ as $x\\to\\pm\\infty$ — constantly negative, not positive.",
          "Pick a test point in $a>\\tfrac53$, say $a=2$: the polynomial is $x^2-3x+3$, leading coefficient $1>0$, discriminant $9-12<0$ — constantly positive. ✓",
          "Thus only $a-1>0$ delivers the positive sign, leaving $\\boxed{a\\in(\\tfrac53,\\infty)}$."
        ]
      },
      {
        "name": "Endpoint check $a=\\tfrac53$",
        "steps": [
          "At $a=\\tfrac53$ the discriminant vanishes: $D=(a+1)(5-3a)=0$, so the parabola is tangent to the $x$-axis and attains the value $0$.",
          "Explicitly, $(\\tfrac53-1)x^2-(\\tfrac53+1)x+(\\tfrac53+1)=\\tfrac23x^2-\\tfrac83x+\\tfrac83=\\tfrac23\\big(x^2-4x+4\\big)=\\tfrac23(x-2)^2$.",
          "This equals $0$ at $x=2$, violating the strict inequality $>0$. Hence $a=\\tfrac53$ is excluded and the interval is open at the left.",
          "Therefore the full solution set is the open ray $\\boxed{a\\in(\\tfrac53,\\infty)}$."
        ]
      }
    ],
    "remark": "Insight: $D<0$ guarantees a constant sign but the leading coefficient chooses which sign. The phrase ``positive for all $x$'' demands both conditions at once — and the discriminant's other branch $a<-1$ is a perfectly valid ``negative for all $x$'' region in disguise. The boundary $a=\\tfrac53$ is the tangency value $\\tfrac23(x-2)^2$, excluded by strictness."
  },
  {
    "theme": "inequalities",
    "themeLabel": "Quadratic Inequalities",
    "title": "The Substitution's Forbidden Band",
    "difficulty": 5,
    "task": "Solve",
    "tags": [
      "reciprocal-substitution",
      "range-restriction",
      "palindromic-quartic",
      "always-positive-factor",
      "spurious-interval"
    ],
    "statement": "Find every real $x$ for which \\[ x^{2}+\\frac{1}{x^{2}}\\;-\\;5\\!\\left(x+\\frac{1}{x}\\right)\\;+\\;6\\;<\\;0 . \\] Report the solution set as a clean interval (or union of intervals). Be careful: the natural substitution does not make every value of the new variable accessible.",
    "answer": "Put $t=x+\\dfrac1x$, so that $x^{2}+\\dfrac1{x^{2}}=t^{2}-2$. The inequality becomes $t^{2}-2-5t+6<0$, i.e. $t^{2}-5t+4<0$, i.e. $(t-1)(t-4)<0$, whose raw solution is $1<t<4$. But $t=x+\\tfrac1x$ cannot take every real value: for real $x\\ne0$, AM--GM (with sign) forces $|t|\\ge 2$, so the band $1<t<2$ is unreachable and must be discarded. The accessible part is therefore \\[ t\\in(1,4)\\cap\\bigl((-\\infty,-2]\\cup[2,\\infty)\\bigr)=[2,4). \\] The left endpoint $t=2$ survives: there $(t-1)(t-4)=-2<0$, the strict inequality holds, and $t=2\\iff x=1$, so $x=1$ is a genuine solution — not a boundary to be nervously excluded. Translating $t\\in[2,4)$ back through $x+\\tfrac1x=t$ (equivalently $x^{2}-tx+1=0$), the function $t(x)=x+\\tfrac1x$ on $x>0$ attains its minimum $2$ at $x=1$ and the value $4$ at $x=2\\pm\\sqrt3$; thus $t\\in[2,4)$ corresponds exactly to $x$ strictly between those two values, with no $x<0$ ever qualifying (negative $x$ give $t\\le-2$). Hence \\[ \\boxed{\\,x\\in\\bigl(2-\\sqrt3,\\;2+\\sqrt3\\bigr)\\,}\\qquad(2-\\sqrt3\\approx0.268,\\;2+\\sqrt3\\approx3.732). \\] Both endpoints are excluded because there the expression equals exactly $0$, not a negative number.",
    "trap": "The reduction to $(t-1)(t-4)<0$ is irresistible, and the fatal reflex is to read off ``$1<t<4$'' and back-substitute the whole interval as if every $t$ in it were achievable. It is not: $t=x+\\tfrac1x$ has range $(-\\infty,-2]\\cup[2,\\infty)$, so the sub-band $1<t<2$ is a phantom produced by the substitution, corresponding to no real $x$ at all. A solver who ignores the constraint $|t|\\ge2$ silently smuggles those impossible $t$-values into the answer and, on translating back, manufactures spurious $x$ near the wrong places or simply mis-states the interval. \\\\ The second, subtler half of the trap is the opposite over-correction at the surviving boundary $t=2$. Having (correctly) learned that $t=2$ is the edge of the achievable region, many students treat $t=2$ as ``the boundary'' and exclude it --- discarding $x=1$. But $t=2$ is the edge of the domain of $t$, not a root of $(t-1)(t-4)$; the strict inequality is comfortably satisfied there, $(2-1)(2-4)=-2<0$, so $x=1$ is squarely inside the solution. Dropping it punches a false hole in the answer interval. \\\\ A third slip catches the unwary on the back-substitution itself: from $1<t<4$ one might naively conclude the leftmost $x$ comes from the smallest $t$ available and forget that each interior $t\\in(2,4)$ yields two positive $x$ (reciprocal partners $x$ and $1/x$ with $x\\cdot\\tfrac1x=1$), which is exactly why the final set is the single symmetric interval $(2-\\sqrt3,2+\\sqrt3)$ about the geometric centre $x=1$ rather than two disjoint pieces. Only by enforcing $|t|\\ge2$ and correctly placing the achievable endpoint $t=2$ does the genuine answer $(2-\\sqrt3,2+\\sqrt3)$ emerge.",
    "solutions": [
      {
        "name": "Reciprocal substitution with the range constraint $|t|\\ge2$",
        "steps": [
          "Since $x\\ne0$ and the expression is symmetric under $x\\mapsto\\tfrac1x$, set $t=x+\\dfrac1x$. Squaring, $t^{2}=x^{2}+2+\\dfrac1{x^{2}}$, so $x^{2}+\\dfrac1{x^{2}}=t^{2}-2$. The inequality becomes $t^{2}-2-5t+6<0$, that is $t^{2}-5t+4<0$, i.e. $(t-1)(t-4)<0$, with raw solution $1<t<4$.",
          "Impose the hidden constraint. For real $x\\ne0$, $x+\\dfrac1x$ has range $(-\\infty,-2]\\cup[2,\\infty)$ (if $x>0$, AM--GM gives $x+\\tfrac1x\\ge2$; if $x<0$, $x+\\tfrac1x\\le-2$). Intersecting, $t\\in(1,4)\\cap\\{|t|\\ge2\\}=[2,4)$. The phantom band $1<t<2$ is discarded; the endpoint $t=2$ is kept because $(2-1)(2-4)=-2<0$ holds and $t=2$ is achievable (at $x=1$).",
          "Back-substitute $t\\in[2,4)$. Negative $x$ give $t\\le-2$ and cannot land in $[2,4)$, so all solutions have $x>0$. On $x>0$ the map $t(x)=x+\\tfrac1x$ decreases on $(0,1]$ from $+\\infty$ to its minimum $2$ at $x=1$, then increases on $[1,\\infty)$ back to $+\\infty$; the level $t=4$ is hit at $x^{2}-4x+1=0$, i.e. $x=2\\pm\\sqrt3$.",
          "Thus $2\\le t<4$ holds precisely for $x$ strictly between the two solutions of $t=4$, namely $2-\\sqrt3<x<2+\\sqrt3$ (the minimum $t=2$ at the interior point $x=1$ is included, the value $t=4$ at the ends is excluded). Therefore $\\boxed{x\\in(2-\\sqrt3,\\,2+\\sqrt3)}$. $\\blacksquare$"
        ]
      },
      {
        "name": "Clear denominators into a palindromic quartic and isolate an always-positive factor",
        "steps": [
          "Multiply through by $x^{2}>0$ (legal for all $x\\ne0$ with no sign reversal, since $x^{2}>0$): the inequality is equivalent to $x^{4}-5x^{3}+6x^{2}-5x+1<0$, a palindromic (self-reciprocal) quartic.",
          "Factor it as a product of two quadratics: $x^{4}-5x^{3}+6x^{2}-5x+1=(x^{2}-4x+1)(x^{2}-x+1)$ (expand to check the cross terms: $-x^{3}-4x^{3}=-5x^{3}$ and $x^{2}+4x^{2}+x^{2}=6x^{2}$). The second factor $x^{2}-x+1$ has discriminant $1-4=-3<0$ with positive leading coefficient, so $x^{2}-x+1>0$ for every real $x$ --- it can never change the sign of the product.",
          "Hence the quartic is negative exactly when the first factor is negative: $x^{2}-4x+1<0$. Its roots are $x=\\dfrac{4\\pm\\sqrt{16-4}}{2}=2\\pm\\sqrt3$, and an upward parabola is negative strictly between its roots.",
          "Therefore $x^{2}-4x+1<0\\iff 2-\\sqrt3<x<2+\\sqrt3$, and since $2-\\sqrt3>0$ the value $x=0$ is automatically excluded and never an issue. The solution is $\\boxed{x\\in(2-\\sqrt3,\\,2+\\sqrt3)}$, identical to Method 1. The trap is invisible here precisely because clearing denominators already restricts to real $x$ --- the $|t|\\ge2$ subtlety is silently absorbed into the always-positive factor $x^{2}-x+1$. $\\blacksquare$"
        ]
      },
      {
        "name": "Sign analysis as a quadratic in $u=x-1$ via the centre $x=1$",
        "steps": [
          "Both Methods agree the governing factor is $x^{2}-4x+1$; here we reach it by exploiting the reciprocal symmetry directly. Because the expression is invariant under $x\\mapsto1/x$, its solution set is symmetric under that involution, whose fixed point is $x=1$; this predicts a single interval centred (multiplicatively) at $x=1$. We confirm by completing the square on the decisive factor.",
          "Write $x^{2}-4x+1=(x-2)^{2}-3$. The full expression's sign equals the sign of $(x-2)^{2}-3$ because the cofactor $x^{2}-x+1=\\bigl(x-\\tfrac12\\bigr)^{2}+\\tfrac34>0$ is strictly positive for all real $x$ (a sum of a square and a positive constant).",
          "So the inequality reduces to $(x-2)^{2}-3<0$, i.e. $(x-2)^{2}<3$, i.e. $|x-2|<\\sqrt3$.",
          "This unwinds to $-\\sqrt3<x-2<\\sqrt3$, that is $2-\\sqrt3<x<2+\\sqrt3$ --- a single open interval, exactly as the symmetry argument anticipated (note $\\bigl(2-\\sqrt3\\bigr)\\bigl(2+\\sqrt3\\bigr)=4-3=1$, so the endpoints are reciprocal partners, confirming the $x\\mapsto1/x$ symmetry). Hence $\\boxed{x\\in(2-\\sqrt3,\\,2+\\sqrt3)}$. $\\blacksquare$"
        ]
      }
    ],
    "remark": "Insight: the whole problem turns on a discipline every top ranker must internalise about substitution --- a substitution can enlarge the solution set with values the new variable can never actually take. Here $t=x+\\tfrac1x$ collapses the messy reciprocal expression to the clean quadratic $(t-1)(t-4)<0$, but $t$ lives only on $|t|\\ge2$, so the slab $1<t<2$ is a fiction; honouring the range cuts the answer down to $t\\in[2,4)$. Equally instructive is the boundary $t=2$: it is the edge of the domain of $t$, not a root of the quadratic, so the strict inequality still holds there and the point $x=1$ stays in --- over-zealously excluding it punches a false hole. The second method is the perfect cross-check and a lesson in its own right: clearing denominators by $x^{2}>0$ turns the problem into a palindromic quartic that factors as $(x^{2}-4x+1)(x^{2}-x+1)$, and the cofactor $x^{2}-x+1$ has negative discriminant, hence is always positive and silently irrelevant to the sign --- the same range information the first method spent a paragraph enforcing is here baked into an unconditionally-positive factor. That the final answer is one symmetric interval with reciprocal endpoints $(2-\\sqrt3)(2+\\sqrt3)=1$ is the fingerprint of the underlying $x\\mapsto1/x$ symmetry, and recognising that symmetry up front (Method 3) lets you predict the shape of the answer before computing it."
  },
  {
    "theme": "inequalities",
    "themeLabel": "Quadratic Inequalities",
    "title": "When the Parabola Changes Its Mind",
    "difficulty": 4,
    "task": "Solve",
    "tags": [
      "sign-of-leading-coefficient",
      "case-split",
      "degenerate-case",
      "parameter",
      "direction-flip"
    ],
    "statement": "Let $a$ be a real parameter. Solve, completely and for every real value of $a$, the inequality \\[ (a-3)\\,x^{2}-2(a-3)\\,x-8(a-3)\\;\\le\\;0 \\] for $x$. Give the solution set as a function of $a$; do not assume the expression is genuinely quadratic.",
    "answer": "Factor out the common $(a-3)$: the inequality is $(a-3)\\,(x^{2}-2x-8)\\le 0$, i.e. $\\boxed{(a-3)(x-4)(x+2)\\le 0}$. The roots of the quadratic part are fixed at $x=-2$ and $x=4$ (independent of $a$); only the sign of the leading coefficient $a-3$ moves, so the solution flips between \"inside\" and \"outside,\" with a degenerate collapse at $a=3$:\n\\[\n\\boxed{\\;\n\\begin{aligned}\na>3:&\\quad x\\in[-2,\\,4]\\quad(\\text{parabola opens up, }\\le 0\\text{ between the roots}),\\\\ \na=3:&\\quad x\\in\\mathbb{R}\\quad(\\text{the }x^{2}\\text{ and }x\\text{ terms vanish; }0\\le 0\\text{ holds for all }x),\\\\ \na<3:&\\quad x\\in(-\\infty,\\,-2]\\cup[4,\\,+\\infty)\\quad(\\text{parabola opens down, }\\le 0\\text{ outside the roots}).\n\\end{aligned}\\;}\n\\]\nEndpoints $x=-2,4$ are included for $a\\ne3$ because the inequality is non-strict and the product is exactly $0$ there.",
    "trap": "Two distinct traps, both fatal, both invisible to a solver who treats the parameter as inert. (1) The direction trap. The reflex is to divide both sides by $(a-3)$, obtain the clean $x^{2}-2x-8\\le 0$, and report $x\\in[-2,4]$ as the answer for all $a$. But dividing an inequality by $(a-3)$ silently assumes $a-3>0$; when $a<3$ the divisor is negative and the inequality reverses to $x^{2}-2x-8\\ge 0$, whose solution is the complement $(-\\infty,-2]\\cup[4,\\infty)$. Concretely, at $a=-1$ the inequality is $-4(x^{2}-2x-8)\\le 0$: the point $x=0$ (squarely inside $[-2,4]$) gives $-4(-8)=32>0$, not a solution, while $x=10$ (outside) gives $-4(72)=-288<0$, which is a solution — the exact reverse of the careless answer. A solver who never asks \"which way does the parabola open?\" reports the inside interval and is wrong on a whole half-line of parameters. (2) The degenerate trap. The leading coefficient is not a constant but the expression $a-3$, which vanishes at $a=3$. There the expression is identically $0$ — no longer a quadratic at all — so $0\\le 0$ holds for every real $x$, the solution set being all of $\\mathbb{R}$. A solver who keeps the $(x-4)(x+2)$ factor and blithely lumps $a=3$ into the \"$a\\ge 3$\" branch reports $[-2,4]$, missing the entire real line, and one who cancels $(a-3)$ before noticing it can be zero divides by zero. The non-quadratic limit is precisely the case the phrase \"do not assume the expression is genuinely quadratic\" is warning about.",
    "solutions": [
      {
        "name": "Factor out the parameter, then read a three-factor sign chart",
        "steps": [
          "Every term carries the common factor $(a-3)$, so the inequality is $(a-3)\\bigl(x^{2}-2x-8\\bigr)\\le 0$. Factor the bracket: $x^{2}-2x-8=(x-4)(x+2)$, giving $(a-3)(x-4)(x+2)\\le 0$. Crucially the roots $x=-2,4$ are pinned and do not depend on $a$; the only $a$-dependence is the sign of the scalar $(a-3)$.",
          "Degenerate first: if $a=3$ the whole left side is identically $0$, so $0\\le 0$ is true for all $x$ — solution $x\\in\\mathbb{R}$. This case must be split off before any cancellation, since dividing by $(a-3)$ would be division by zero.",
          "For $a\\ne3$, treat $(a-3)$ as a nonzero constant. The product $(x-4)(x+2)$ is $\\le 0$ on $[-2,4]$ and $\\ge 0$ on $(-\\infty,-2]\\cup[4,\\infty)$. If $a>3$ the constant is positive, so we need $(x-4)(x+2)\\le 0$: $x\\in[-2,4]$. If $a<3$ the constant is negative, so the requirement on the bracket flips to $(x-4)(x+2)\\ge 0$: $x\\in(-\\infty,-2]\\cup[4,\\infty)$.",
          "Collecting the three regimes: $a>3\\Rightarrow[-2,4]$; $a=3\\Rightarrow\\mathbb{R}$; $a<3\\Rightarrow(-\\infty,-2]\\cup[4,\\infty)$. Endpoints are included throughout because $\\le$ admits the zeros. $\\blacksquare$"
        ]
      },
      {
        "name": "Geometry of the parabola: which way does it open?",
        "steps": [
          "Write $g(x)=(a-3)\\,q(x)$ with $q(x)=x^{2}-2x-8$. The shape of $q$ is fixed: it opens upward, has discriminant $4+32=36>0$, vertex at $x=1$ with minimum value $q(1)=-9$, and crosses zero at $x=-2$ and $x=4$. So $q(x)\\le 0$ exactly on $[-2,4]$ and $q(x)\\ge 0$ exactly outside.",
          "Multiplying $q$ by the scalar $(a-3)$ either keeps the cup ($a>3$) or vertically reflects it into a cap ($a<3$), without moving the $x$-intercepts. We want $g(x)=(a-3)q(x)\\le 0$.",
          "If $a>3$: $g$ is an upward parabola, negative between its roots, so $g(x)\\le 0\\iff x\\in[-2,4]$. If $a<3$: $g$ is a downward parabola (a cap through $-2,4$), negative outside its roots, so $g(x)\\le 0\\iff x\\in(-\\infty,-2]\\cup[4,\\infty)$.",
          "If $a=3$: the parabola degenerates — the leading coefficient $a-3$ and indeed all coefficients vanish, $g\\equiv 0$, and $0\\le 0$ holds everywhere, giving $x\\in\\mathbb{R}$. This matches Method 1 exactly: $a>3\\to[-2,4]$, $a=3\\to\\mathbb{R}$, $a<3\\to(-\\infty,-2]\\cup[4,\\infty)$. $\\blacksquare$"
        ]
      },
      {
        "name": "Honest division: track the divisor's sign and the zero divisor",
        "steps": [
          "Isolate the parameter as a multiplier: $(a-3)\\,(x^{2}-2x-8)\\le 0$. We will divide by $(a-3)$ — but a legitimate division of an inequality must record the sign of the divisor and forbid a zero divisor, which is exactly where the three cases are born.",
          "Case $a-3=0$ (i.e. $a=3$): division is illegal; substitute directly to get $0\\le 0$, true for all $x$, so the solution is $\\mathbb{R}$.",
          "Case $a-3>0$ (i.e. $a>3$): dividing by a positive number preserves the direction, $x^{2}-2x-8\\le 0\\Rightarrow (x-4)(x+2)\\le 0\\Rightarrow x\\in[-2,4]$.",
          "Case $a-3<0$ (i.e. $a<3$): dividing by a negative number reverses the inequality, $x^{2}-2x-8\\ge 0\\Rightarrow (x-4)(x+2)\\ge 0\\Rightarrow x\\in(-\\infty,-2]\\cup[4,\\infty)$. The three branches reproduce the boxed answer, and the deliberate sign bookkeeping is precisely what defuses the \"divide and forget\" trap. $\\blacksquare$"
        ]
      }
    ],
    "remark": "Insight: the danger here is that the inequality looks like a single quadratic with a harmless overall factor, tempting the solver to cancel $(a-3)$ and quote one interval. But a parametric leading coefficient does two things a constant never does. First, its sign controls whether the parabola opens up or down, and so whether \"$\\le 0$\" means between the roots or outside them — dividing an inequality by $(a-3)$ legitimately requires knowing that sign, and reversing the inequality when $a<3$ is not optional. Second, the coefficient can vanish: at $a=3$ the object stops being a quadratic entirely and becomes the identically-zero function, for which $0\\le 0$ is satisfied by every real $x$. The clean engineering of this problem is to keep the roots $-2,4$ fixed so that nothing distracts from the one moving part — the sign and possible vanishing of the leading coefficient. The transferable discipline for a top ranker: before reading \"inside vs. outside\" off a parabola, first ask whether the leading coefficient could be negative (flip the reading) or zero (the quadratic degenerates), and split those cases off explicitly — the algebra of cancellation is blind to both."
  },
  {
    "theme": "inequalities",
    "themeLabel": "Quadratic Inequalities",
    "title": "The Gap the Modulus Hides",
    "difficulty": 4,
    "task": "Count",
    "tags": [
      "modulus-of-quadratic",
      "piecewise-quadratic",
      "two-sided-inequality",
      "disconnected-solution",
      "integer-count",
      "corner"
    ],
    "statement": "Find the number of integers $x$ satisfying \\[ \\bigl|\\,x^{2}-5x\\,\\bigr| \\;<\\; 6. \\] Here the modulus wraps the sign-changing quadratic $x^{2}-5x=x(x-5)$, so the left side is a piecewise-quadratic function with corners at $x=0$ and $x=5$. Unfold the modulus honestly before counting; the inner quadratic dips well below $-6$ between its roots, so do not assume the solution is a single interval.",
    "answer": "The solution set is \\[ S=\\bigl|\\,x^{2}-5x\\,\\bigr|<6 \\iff (-1,2)\\cup(3,6), \\] a disconnected set with a gap $[2,3]$. Unfolding $|u|<6\\iff -6<u<6$ gives two simultaneous conditions: $x^{2}-5x<6$, i.e. $(x-6)(x+1)<0\\Rightarrow x\\in(-1,6)$, and $x^{2}-5x>-6$, i.e. $(x-2)(x-3)>0\\Rightarrow x\\in(-\\infty,2)\\cup(3,\\infty)$. Their intersection is $(-1,2)\\cup(3,6)$. The integers inside are $x=0,1,4,5$; the would-be members $x=2,3$ are knocked out because there $|x^{2}-5x|=|{-6}|=6\\not<6$ (the inner quadratic reaches its minimum $-\\tfrac{25}{4}=-6.25$ at $x=\\tfrac52$, so $|x^{2}-5x|>6$ throughout the gap). Hence \\[ \\boxed{\\,4\\,}\\quad\\text{integers},\\qquad S\\cap\\mathbb{Z}=\\{0,1,4,5\\}. \\]",
    "trap": "The fatal shortcut is to treat $|x^{2}-5x|<6$ as the single inequality $x^{2}-5x<6$ and stop. That move keeps only the upper half of the two-sided bound $-6<x^{2}-5x<6$ and silently discards the lower half $x^{2}-5x>-6$. It yields the clean interval $(x-6)(x+1)<0\\Rightarrow(-1,6)$, whose integers are $\\{0,1,2,3,4,5\\}$ —{} a confident, tidy count of $6$, off by exactly the two integers $2,3$ that live in the hidden gap. The reason the gap exists is the whole point of the problem: $x^{2}-5x$ is a sign-changing quadratic with minimum $-6.25$, so on the stretch around $x=\\tfrac52$ the inner value drops below $-6$ and its modulus climbs back above $6$; concretely $x=2$ gives $x^{2}-5x=4-10=-6$, so $|x^{2}-5x|=6$, which is not $<6$ —{} $x=2$ fails, and so does $x=3$ by the symmetry of the parabola about $x=\\tfrac52$. A solver who never writes the lower bound never sees that $|u|<6$ forbids $u$ from being too negative, not just too positive; the absolute value's two-sidedness is exactly what manufactures the disconnected answer. A second, subtler slip is to write $-6<x^{2}-5x<6$ correctly but then solve the chain as if both ends could be combined into one interval, forgetting that $x^{2}-5x>-6$ has discriminant $25-24=1>0$ and therefore does carve out a forbidden middle band $[2,3]$ rather than holding for all $x$; if that discriminant had been negative the lower bound would have been automatic and there would be no gap, so checking it is mandatory, not decorative. Either error reports $6$; the honest count is $4$.",
    "solutions": [
      {
        "name": "Two-sided unfolding of the modulus",
        "steps": [
          "For a strict modulus, $|u|<6\\iff -6<u<6$. With $u=x^{2}-5x$ this is the conjunction of two quadratic inequalities, and both must hold: \\[ x^{2}-5x<6\\quad\\text{AND}\\quad x^{2}-5x>-6. \\] Omitting the second is the trap; the modulus bounds $u$ from both sides.",
          "Upper bound: $x^{2}-5x-6<0\\Rightarrow(x-6)(x+1)<0\\Rightarrow x\\in(-1,6)$. Lower bound: $x^{2}-5x+6>0\\Rightarrow(x-2)(x-3)>0$; since this upward parabola is positive outside its roots, $x\\in(-\\infty,2)\\cup(3,\\infty)$. (Its discriminant $25-24=1>0$ is what guarantees a genuine forbidden band $[2,3]$.)",
          "Intersect: $(-1,6)\\cap\\bigl[(-\\infty,2)\\cup(3,\\infty)\\bigr]=(-1,2)\\cup(3,6)$, a disconnected set with the open gap $(2,3)$ (endpoints $2,3$ excluded too, since the lower inequality is strict there).",
          "Count integers in $(-1,2)\\cup(3,6)$: from $(-1,2)$ take $0,1$; from $(3,6)$ take $4,5$. That is $\\{0,1,4,5\\}$, so the answer is $\\boxed{4}$. $\\blacksquare$"
        ]
      },
      {
        "name": "Unfold the modulus by the sign of the inner quadratic (true piecewise)",
        "steps": [
          "The inner expression $x^{2}-5x=x(x-5)$ is $\\ge 0$ for $x\\le 0$ or $x\\ge 5$, and $<0$ for $0<x<5$. The corners of $|x^{2}-5x|$ sit at $x=0$ and $x=5$. Split into these regions and replace the modulus by its actual formula on each.",
          "Region I ($x\\le 0$ or $x\\ge 5$): $|x^{2}-5x|=x^{2}-5x$, so the inequality is $x^{2}-5x<6\\Rightarrow(x+1)(x-6)<0\\Rightarrow x\\in(-1,6)$. Intersecting with this region gives $(-1,0]\\cup[5,6)$.",
          "Region II ($0<x<5$): $|x^{2}-5x|=5x-x^{2}$, so the inequality is $5x-x^{2}<6\\Rightarrow x^{2}-5x+6>0\\Rightarrow(x-2)(x-3)>0\\Rightarrow x<2$ or $x>3$. Intersecting with $(0,5)$ gives $(0,2)\\cup(3,5)$.",
          "Glue at the corners, where both branches agree (continuity): $(-1,0]\\cup(0,2)=(-1,2)$ and $(3,5)\\cup[5,6)=(3,6)$, so $S=(-1,2)\\cup(3,6)$ —{} the corner points $x=0,5$ are interior solutions since $|x^{2}-5x|=0<6$ there. Integers inside: $0,1,4,5$, total $\\boxed{4}$. $\\blacksquare$"
        ]
      },
      {
        "name": "Square the modulus to a biquadratic-style product",
        "steps": [
          "Since both sides are nonnegative, $|x^{2}-5x|<6\\iff (x^{2}-5x)^{2}<36\\iff (x^{2}-5x)^{2}-36<0$. This is a difference of squares: $(x^{2}-5x-6)(x^{2}-5x+6)<0$.",
          "Factor each quadratic: $(x-6)(x+1)\\,(x-2)(x-3)<0$, i.e. $(x+1)(x-2)(x-3)(x-6)<0$ with four distinct real roots $-1<2<3<6$.",
          "Sign chart of a positive-leading degree-4 product with simple roots: it is negative on the first and third gaps between roots, $(-1,2)$ and $(3,6)$, and positive elsewhere. Hence $S=(-1,2)\\cup(3,6)$, automatically exhibiting the gap $(2,3)$ as the middle interval where the product is positive.",
          "The integers in $(-1,2)\\cup(3,6)$ are $\\{0,1,4,5\\}$, so the count is $\\boxed{4}$. The squaring exposes the gap as the structurally inevitable middle band between the two inner roots $2,3$. $\\blacksquare$"
        ]
      }
    ],
    "remark": "Insight: $|x^{2}-5x|<6$ looks like a one-line modulus exercise, but its sign-changing inner quadratic is what gives it teeth. A modulus inequality $|u|<k$ is intrinsically two-sided —{} it forbids $u$ from being too large and too negative —{} so it splits into the conjunction $-k<u<k$, not the single condition $u<k$. The instinct to keep only the upper bound is the classic error, and here it is punished precisely because $x^{2}-5x$ dips to $-6.25$, below $-6$, on the stretch around its vertex $x=\\tfrac52$; there the inner value is more negative than $-6$, its modulus exceeds $6$, and a hole opens in the answer. That is why the solution is the disconnected set $(-1,2)\\cup(3,6)$ and not the seductive single interval $(-1,6)$ —{} and why the integers $2,3$ (and only those) are quietly evicted. The deciding quantity is the discriminant of the lower bound $x^{2}-5x+6>0$: it is $1>0$, so a forbidden middle band genuinely exists; had it been $\\le 0$ the lower bound would hold automatically and the solution would be one interval. The three methods triangulate the same truth from different directions: the two-sided unfolding makes the dropped inequality explicit; the sign-of-inner split shows the corners at $0,5$ and that the function is honestly piecewise with continuous gluing; and squaring to $(x+1)(x-2)(x-3)(x-6)<0$ turns the gap into the inevitable middle band of a four-root sign chart. The transferable discipline for a top ranker: whenever a modulus wraps an expression that itself changes sign, write both sides of $|u|<k$, check the discriminant of the lower bound, and be ready for a disconnected answer —{} the absolute value's two-sidedness is exactly what manufactures the hole."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Window the Logarithm Guards",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "log-substitution",
      "root-location",
      "discriminant",
      "domain-constraint",
      "parameter-band"
    ],
    "statement": "Find every real value of the parameter $a$ for which the equation \\[ (\\log_2 x)^2 \\;-\\; a\\,\\log_2 x \\;+\\;\\Bigl(a-\\tfrac34\\Bigr)\\;=\\;0 \\] has two real solutions $x$ (counted with multiplicity), both lying in the window $x\\in(2,4)$. Hint and warning. Put $t=\\log_2 x$; the window $x\\in(2,4)$ becomes $t\\in(1,2)$, so you must trap both roots of the quadratic $g(t)=t^2-at+\\bigl(a-\\tfrac34\\bigr)$ inside the open interval $(1,2)$ in $t$-space (the $g(1)$, $g(2)$, vertex and discriminant test). But $t=\\log_2 x$ is only meaningful for $x>0$, and a real $t$-root exists only when the discriminant is nonnegative —{} so the very condition that lets $x$ exist as a real point of the window is a constraint you must not silently assume.",
    "answer": "Write $t=\\log_2 x$; since $\\log_2$ is a strictly increasing bijection from $(0,\\infty)$ onto $\\mathbb{R}$, the requirement \"two solutions $x$, both in $(2,4)$\" is equivalent to \"two real roots $t$ of $g(t)=t^2-at+\\bigl(a-\\tfrac34\\bigr)$, both in the open interval $(1,2)$\". For an upward parabola this is the conjunction of four conditions: \\[ \\text{disc}\\ge 0,\\qquad g(1)>0,\\qquad g(2)>0,\\qquad 1<\\tfrac{a}{2}<2. \\] Compute each. The discriminant is $a^2-4\\bigl(a-\\tfrac34\\bigr)=a^2-4a+3=(a-1)(a-3)$, so $\\text{disc}\\ge0\\iff a\\le1\\ \\text{or}\\ a\\ge3$. Next $g(1)=1-a+\\bigl(a-\\tfrac34\\bigr)=\\tfrac14>0$ for every $a$ (the linear-in-$a$ terms cancel), and $g(2)=4-2a+\\bigl(a-\\tfrac34\\bigr)=\\tfrac{13}{4}-a>0\\iff a<\\tfrac{13}{4}$. The vertex lies at $t=\\tfrac a2$, so $1<\\tfrac a2<2\\iff 2<a<4$. Intersecting: the vertex band $2<a<4$ with $g(2)>0$ gives $2<a<\\tfrac{13}{4}$, and now the discriminant slices off the lower part, keeping only $a\\ge3$. Hence \\[ \\boxed{\\,3\\le a<\\tfrac{13}{4}\\,}. \\] At the left end $a=3$ the discriminant vanishes and $g(t)=(t-\\tfrac32)^2$ has the double root $t=\\tfrac32\\in(1,2)$, i.e. $x=2^{3/2}=2\\sqrt2\\in(2,4)$ counted twice —{} included. At the right end $a=\\tfrac{13}{4}$ one root slides out to $t=2$ (so $x=4$, on the boundary, excluded). The seductive but wrong interval $(2,\\tfrac{13}{4})$ collapses on $2<a<3$ because there $(a-1)(a-3)<0$: the equation has no real $x$ at all, so it cannot have two roots in the window.",
    "trap": "The killer omission is to run the root-location test with only three of its four legs —{} $g(1)>0$, $g(2)>0$, and the vertex condition $1<\\tfrac a2<2$ —{} and to forget the discriminant. Doing so is doubly tempting here because $g(1)=\\tfrac14>0$ comes out a clean positive constant for all $a$ (the $a$-terms cancel), so the solver feels the left edge is \"automatically safe\" and never suspects a hidden condition lurks. The three surviving conditions give $g(2)>0\\Rightarrow a<\\tfrac{13}{4}$ together with $2<a<4$, i.e. the confident band $\\boxed{2<a<\\tfrac{13}{4}}$ —{} a tidy interval that even passes a quick spot-check of $g(1),g(2)$ signs. It is wrong on the whole sub-band $2<a<3$. There the discriminant $(a-1)(a-3)$ is negative, so $g(t)$ has no real root $t$, hence the original equation has no real $x$ whatsoever —{} not two solutions in $(2,4)$, but zero solutions anywhere. The reason this is a genuine conceptual trap and not arithmetic is the logarithmic disguise: after the substitution $t=\\log_2 x$, the discriminant condition $\\text{disc}\\ge0$ is precisely the statement “a real $x>0$ exists”; dropping it silently admits a whole parameter band for which $x$ is imaginary. A subtler second slip lives at the endpoints. A solver who remembers the discriminant but writes it as the strict $\\text{disc}>0$ (“two distinct roots”) wrongly evicts $a=3$, where the double root $t=\\tfrac32$ gives the legitimate repeated solution $x=2\\sqrt2\\in(2,4)$ —{} which the phrase “counted with multiplicity”explicitly keeps. And a solver who tests the closed window $x\\in[2,4]$ instead of the open $(2,4)$ wrongly admits $a=\\tfrac{13}{4}$, where a root sits exactly on $x=4$. The honest band is the half-open $[3,\\tfrac{13}{4})$; every shortcut either inflates it to $(2,\\tfrac{13}{4})$ or mishandles one of its two endpoints.",
    "solutions": [
      {
        "name": "Root-location in t-space (the four-leg test)",
        "steps": [
          "Substitute $t=\\log_2 x$. Because $\\log_2:(0,\\infty)\\to\\mathbb{R}$ is a strictly increasing bijection, “a solution $x\\in(2,4)$”corresponds bijectively to “a root $t\\in(\\log_2 2,\\log_2 4)=(1,2)$”, and multiplicities transfer. So the task is exactly: the upward parabola $g(t)=t^2-at+\\bigl(a-\\tfrac34\\bigr)$ has both roots in the open interval $(1,2)$.",
          "Both roots of an upward parabola lie in $(1,2)$ iff all four hold: $\\text{disc}\\ge0$ (roots are real), $g(1)>0$ and $g(2)>0$ (the parabola is above the axis at both endpoints, so no root escapes the interval), and the vertex abscissa satisfies $1<\\tfrac a2<2$ (the turning point sits between the endpoints, so the roots straddle it inside). Skip none: the discriminant leg is what guarantees the roots exist at all.",
          "Evaluate. $\\text{disc}=a^2-4\\bigl(a-\\tfrac34\\bigr)=a^2-4a+3=(a-1)(a-3)\\ge0\\iff a\\le1\\ \\text{or}\\ a\\ge3$. $g(1)=1-a+a-\\tfrac34=\\tfrac14>0$ for all $a$. $g(2)=4-2a+a-\\tfrac34=\\tfrac{13}{4}-a>0\\iff a<\\tfrac{13}{4}$. Vertex: $1<\\tfrac a2<2\\iff 2<a<4$.",
          "Intersect all four. The vertex band $(2,4)$ meets $g(2)>0$ in $(2,\\tfrac{13}{4})$; meeting that with the discriminant set $\\{a\\le1\\}\\cup\\{a\\ge3\\}$ keeps only $[3,\\tfrac{13}{4})$ (the part of $(2,\\tfrac{13}{4})$ with $a\\ge3$). The constant condition $g(1)>0$ imposes nothing. Therefore $\\boxed{3\\le a<\\tfrac{13}{4}}$. $\\blacksquare$"
        ]
      },
      {
        "name": "Vieta on the shifted roots",
        "steps": [
          "Let the $t$-roots be $t_1,t_2$, so by Vieta $t_1+t_2=a$ and $t_1t_2=a-\\tfrac34$. Both roots lie in $(1,2)$ iff $(t_1-1)(t_2-1)>0$ and $(t_2-2)(t_1-2)>0$ (each shifted product positive, meaning both shifted roots share a sign), together with the mean trapped, $1<\\tfrac{t_1+t_2}{2}<2$, and reality $\\text{disc}\\ge0$. The positivity-of-product conditions force the common sign to be the correct one once the mean is inside.",
          "Expand using Vieta. $(t_1-1)(t_2-1)=t_1t_2-(t_1+t_2)+1=\\bigl(a-\\tfrac34\\bigr)-a+1=\\tfrac14>0$ identically —{} the left endpoint never threatens. $(t_1-2)(t_2-2)=t_1t_2-2(t_1+t_2)+4=\\bigl(a-\\tfrac34\\bigr)-2a+4=\\tfrac{13}{4}-a>0\\iff a<\\tfrac{13}{4}$.",
          "Mean: $1<\\tfrac a2<2\\iff 2<a<4$. Reality: $\\text{disc}=(t_1-t_2)^2=(t_1+t_2)^2-4t_1t_2=a^2-4a+3=(a-1)(a-3)\\ge0\\iff a\\le1\\ \\text{or}\\ a\\ge3$. (Here the discriminant is literally $(t_1-t_2)^2$, so demanding it be $\\ge0$ is demanding the two real $x$-values exist.)",
          "Combine $a<\\tfrac{13}{4}$, $2<a<4$, and $\\{a\\le1\\}\\cup\\{a\\ge3\\}$: the survivors are $3\\le a<\\tfrac{13}{4}$. The repeated-root case $a=3$ ($t_1=t_2=\\tfrac32$) is retained since the problem counts multiplicity, giving $\\boxed{3\\le a<\\tfrac{13}{4}}$. $\\blacksquare$"
        ]
      },
      {
        "name": "Solve for the roots explicitly and bound them",
        "steps": [
          "The roots are $t=\\dfrac{a\\pm\\sqrt{(a-1)(a-3)}}{2}$, real iff $(a-1)(a-3)\\ge0$, i.e. $a\\le1$ or $a\\ge3$; for $a$ near the window of interest only $a\\ge3$ is relevant. Write $s=\\sqrt{(a-1)(a-3)}\\ge0$, so the smaller root is $t_-=\\tfrac{a-s}{2}$ and the larger is $t_+=\\tfrac{a+s}{2}$.",
          "Both roots in $(1,2)$ means $t_->1$ and $t_+<2$. From $t_->1$: $a-s>2$, i.e. $a-2>s\\ge0$, which needs $a>2$ and, squaring, $(a-2)^2>(a-1)(a-3)$. Expand: $a^2-4a+4>a^2-4a+3$, i.e. $4>3$ —{} always true once $a>2$. So $t_->1$ reduces simply to $a>2$ (this is the explicit shadow of $g(1)=\\tfrac14>0$).",
          "From $t_+<2$: $a+s<4$, i.e. $s<4-a$, which needs $a<4$ and, squaring, $(a-1)(a-3)<(4-a)^2$. Expand: $a^2-4a+3<a^2-8a+16$, i.e. $4a<13$, so $a<\\tfrac{13}{4}$ (the explicit shadow of $g(2)>0$).",
          "Assemble the necessary pieces: reality $a\\ge3$ (the branch meeting $a>2$), the lower bound $a>2$ (subsumed by $a\\ge3$), and the upper bound $a<\\tfrac{13}{4}$. Together $3\\le a<\\tfrac{13}{4}$. At $a=3$, $s=0$ and $t_-=t_+=\\tfrac32\\in(1,2)$ (double root, kept by multiplicity); at $a=\\tfrac{13}{4}$, $t_+=2$ exits the open window. Hence $\\boxed{3\\le a<\\tfrac{13}{4}}$. $\\blacksquare$"
        ]
      }
    ],
    "remark": "Insight: the engine of this problem is that after $t=\\log_2 x$ the discriminant stops being a routine box to tick and becomes the existence statement “a real $x>0$ lives in the window.”Because $\\log_2$ is a strictly increasing bijection of $(0,\\infty)$ onto $\\mathbb{R}$, locating $x$ in $(2,4)$ is faithfully the same as locating $t$ in $(1,2)$ —{} but the inverse map $x=2^t$ only delivers a real point when $t$ itself is real, and $t$ is real exactly when $\\text{disc}=(a-1)(a-3)\\ge0$. Drop that leg and you import a phantom band $2<a<3$ on which the equation has no real solution whatsoever, dressed up as if it had two; the trap is conceptual, not clerical, because the logarithm hides the existence question inside what looks like a bookkeeping inequality. The design deliberately makes $g(1)=\\tfrac14$ a constant positive number so the left endpoint feels free and the solver is lulled into thinking only $g(2)$ and the vertex matter —{} the discriminant is the one that actually carves the answer. The two endpoints encode the rest of the discipline a top ranker must carry: $a=3$ is in because the double root $t=\\tfrac32$ ($x=2\\sqrt2$) is a legitimate solution “counted with multiplicity,”so the right inequality is $\\text{disc}\\ge0$, not $>0$; and $a=\\tfrac{13}{4}$ is out because there a root reaches $x=4$ on the boundary of the open window. The three methods converge on $[3,\\tfrac{13}{4})$ from independent directions —{} the classical four-leg test, Vieta on the shifted roots (where the discriminant reappears as $(t_1-t_2)^2$, making its meaning unmistakable), and explicit root-bounding (where squaring $a-2>s$ and $s<4-a$ regenerates the same $g(1),g(2)$ inequalities) —{} and all three are powerless without first demanding the roots be real. The transferable lesson: whenever a substitution like $t=\\log x$, $t=\\sqrt x$, or $t=\\tan(x/2)$ converts a problem into a quadratic, the discriminant of the quadratic is no longer optional bookkeeping but the gatekeeper of the original variable's existence —{} check it first, and check it with the correct $\\ge$ or $>$."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Shared Root and the Minimum",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "common-root",
      "am-gm",
      "extremum",
      "parameter"
    ],
    "statement": "Positive reals $a,b$ are such that the quadratics \\[x^{2}-a\\,x+3=0\\qquad\\text{and}\\qquad x^{2}-b\\,x+5=0\\] possess a common positive root. Determine the minimum possible value of $a+b$.",
    "answer": "$a+b=8$ (attained when the common root is $2$, giving $a=\\tfrac72,\\ b=\\tfrac92$).",
    "trap": "Eliminating $x$ via the resultant gives the conic $5a^{2}-8ab+3b^{2}+4=0$, and minimising $a+b$ on it as if $a,b$ were independent reals. That conic is unbounded below in $a+b$ (its other stationary branch sits at $a+b=-8$, and the curve runs off to $-\\infty$), because it secretly also encodes a common negative root. The constraint actually ties $a$ and $b$ to a single free parameter, the shared root $r$; demanding $r>0$ and $a,b>0$ restores the genuine bound $8$.",
    "solutions": [
      {
        "name": "Parametrise by the common root",
        "steps": [
          "Let $r>0$ be the common root. From the equations, $a=\\dfrac{r^{2}+3}{r}=r+\\dfrac{3}{r}$ and $b=\\dfrac{r^{2}+5}{r}=r+\\dfrac{5}{r}$; both are positive for $r>0$.",
          "Hence $a+b=2r+\\dfrac{8}{r}$.",
          "By AM-GM, $2r+\\dfrac{8}{r}\\ge 2\\sqrt{2r\\cdot\\tfrac{8}{r}}=2\\sqrt{16}=8$, with equality when $2r=\\dfrac8r$, i.e. $r=2$.",
          "At $r=2$: $a=\\tfrac72,\\ b=\\tfrac92$, and indeed $x^{2}-\\tfrac72x+3=(x-2)(x-\\tfrac32)$, $x^{2}-\\tfrac92x+5=(x-2)(x-\\tfrac52)$ share the root $2$. Minimum $=\\boxed{8}$."
        ]
      },
      {
        "name": "Calculus on the single parameter",
        "steps": [
          "With $g(r)=2r+\\tfrac8r$ for $r>0$, set $g'(r)=2-\\tfrac{8}{r^{2}}=0\\Rightarrow r^{2}=4\\Rightarrow r=2$.",
          "Since $g''(r)=\\tfrac{16}{r^{3}}>0$, this critical point is a minimum.",
          "$g(2)=4+4=8$, and the boundary behaviour $g\\to\\infty$ as $r\\to0^{+}$ or $r\\to\\infty$ confirms it is global. Minimum $=\\boxed{8}$."
        ]
      },
      {
        "name": "Subtract the equations (eliminate the quadratic term)",
        "steps": [
          "If $r$ satisfies both equations, subtracting $r^{2}-ar+3=0$ from $r^{2}-br+5=0$ kills $r^{2}$ and gives $(a-b)r+2=0$, so $b-a=\\dfrac{2}{r}>0$ for $r>0$.",
          "Adding the two equations gives $2r^{2}-(a+b)r+8=0$, hence $a+b=2r+\\dfrac{8}{r}$ exactly as before.",
          "Thus $a+b\\ge 2\\sqrt{16}=8$ by AM-GM, equality at $r=2$, where $b-a=\\tfrac22=1$, consistent with $a=\\tfrac72,\\ b=\\tfrac92$. Minimum $=\\boxed{8}$."
        ]
      }
    ],
    "remark": "Insight: a common-root constraint collapses two parameters onto a one-parameter curve; once you see $a$ and $b$ as functions of the shared root, the extremum is a one-variable AM-GM. The resultant $5a^{2}-8ab+3b^{2}+4=0$ keeps both the positive- and negative-root branches, so optimising it blindly leaks the spurious unattainable value; insisting $r>0$ is what pins the answer at $8$."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Product That Outlives Its Parameter",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "logarithm",
      "quadratic-in-log",
      "vieta",
      "domain-trap",
      "roots-above-one",
      "parameter"
    ],
    "statement": "Let $a$ be a real parameter and consider, for $x>0$, the equation \\[ \\bigl(\\log_{3}x\\bigr)^{2}\\;-\\;\\bigl(a^{2}-3a\\bigr)\\,\\log_{3}x\\;+\\;\\log_{3}a\\;=\\;0. \\] It is given that this equation has two real solutions $x_{1},x_{2}$ that satisfy $x_{1}\\,x_{2}=81$ and $x_{1}>1,\\;x_{2}>1$. Find every value of $a$ for which this happens. The whole equation is a hidden quadratic in $t=\\log_{3}x$; the product of the $x$'s is governed by the sum of the $t$-roots through Vieta, while the standing presence of $\\log_{3}a$ quietly restricts which $a$ are even admissible. Resolve both pressures before reporting.",
    "answer": "The substitution $t=\\log_{3}x$ turns the equation into the genuine quadratic \\[ t^{2}-\\bigl(a^{2}-3a\\bigr)t+\\log_{3}a=0,\\qquad t_{1}+t_{2}=a^{2}-3a,\\quad t_{1}t_{2}=\\log_{3}a. \\] Since $x_{i}=3^{t_{i}}$, the product condition reads $x_{1}x_{2}=3^{\\,t_{1}+t_{2}}=3^{\\,a^{2}-3a}=81=3^{4}$, hence \\[ a^{2}-3a=4\\;\\Longrightarrow\\;a^{2}-3a-4=0\\;\\Longrightarrow\\;(a-4)(a+1)=0\\;\\Longrightarrow\\;a=4\\ \\text{or}\\ a=-1. \\] Domain filter. The term $\\log_{3}a$ appears in the equation, so $a>0$ is mandatory; $a=-1$ makes $\\log_{3}(-1)$ undefined and the equation ill-posed, so $a=-1$ is rejected outright. Both-roots-above-one filter. For $x_{1},x_{2}>1$ we need $t_{1},t_{2}>0$, i.e. by Vieta $t_{1}+t_{2}>0$ and $t_{1}t_{2}>0$: here $t_{1}+t_{2}=4>0$ automatically and $t_{1}t_{2}=\\log_{3}a>0\\iff a>1$. At $a=4$: $t_{1}t_{2}=\\log_{3}4>0$, and the discriminant $\\Delta=4^{2}-4\\log_{3}4=16-4\\log_{3}4\\approx10.95>0$ gives two distinct real $t$, both positive. Thus $x_{1}\\approx55.43,\\;x_{2}\\approx1.461$ with $x_{1}x_{2}=81$ and both exceeding $1$. \\[ \\boxed{\\,a=4\\,} \\]",
    "trap": "The seductive shortcut stops at the algebra. Reading off $x_{1}x_{2}=3^{\\,t_{1}+t_{2}}=81$ gives the Vieta condition $a^{2}-3a=4$, whose two clean roots are $a=4$ and $a=-1$. A confident solver boxes the set $\\{4,-1\\}$ and moves on —{} after all, $a=-1$ also makes $a^{2}-3a=1+3=4$, so it appears to deliver the same product $81$. That is the whole snare: $a=-1$ never enters the arena. The original equation literally contains $\\log_{3}a$ as its constant term, and $\\log_{3}(-1)$ is undefined over the reals, so at $a=-1$ there is no equation to solve and no roots $x_{1},x_{2}$ exist at all; the value is killed by the base/argument domain of the logarithm, a check that lives outside the Vieta computation and is invisible to anyone who only manipulates $t_{1}+t_{2}$. A second, independent slip is to forget the clause $x_{1}>1,\\,x_{2}>1$. Translated through $x_{i}=3^{t_{i}}$, that clause is not automatic: it demands $t_{1}>0$ and $t_{2}>0$, equivalently $t_{1}+t_{2}>0$ and $t_{1}t_{2}>0$, i.e. $a^{2}-3a>0$ and $\\log_{3}a>0\\iff a>1$. The sum part holds at $a=4$, but the genuinely active test is the product of the $t$-roots: $t_{1}t_{2}=\\log_{3}a$. Had the product condition admitted a candidate with $0<a<1$ (so $\\log_{3}a<0$), the two $t$-roots would carry opposite signs, forcing one $x<1$ and silently violating ``both $>1$'' even though the product $x_{1}x_{2}$ might still look right. Either oversight —{} accepting the domain-dead $a=-1$, or skipping the sign test on $t_{1}t_{2}$ —{} corrupts the answer. The honest filtering leaves exactly one survivor, $a=4$.",
    "solutions": [
      {
        "name": "Vieta on the log-roots, then two filters",
        "steps": [
          "Set $t=\\log_{3}x$ (legal since $x>0$). The equation becomes the quadratic $t^{2}-(a^{2}-3a)t+\\log_{3}a=0$, so by Vieta $t_{1}+t_{2}=a^{2}-3a$ and $t_{1}t_{2}=\\log_{3}a$. Because $x_{i}=3^{t_{i}}$, the product of the original solutions is $x_{1}x_{2}=3^{t_{1}}\\cdot 3^{t_{2}}=3^{\\,t_{1}+t_{2}}=3^{\\,a^{2}-3a}$.",
          "Impose $x_{1}x_{2}=81=3^{4}$: matching exponents (base $3$ is injective) gives $a^{2}-3a=4$, i.e. $(a-4)(a+1)=0$, so the algebraic candidates are $a=4$ and $a=-1$.",
          "Domain filter: the constant term $\\log_{3}a$ forces $a>0$, so $a=-1$ is inadmissible (the equation does not exist there). Only $a=4$ survives this gate.",
          "Both-roots-above-one filter: $x_{1},x_{2}>1\\iff t_{1},t_{2}>0\\iff t_{1}+t_{2}>0$ and $t_{1}t_{2}>0$. At $a=4$: $t_{1}+t_{2}=4>0$ and $t_{1}t_{2}=\\log_{3}4>0$; the discriminant $16-4\\log_{3}4>0$ guarantees two distinct real $t$. Both conditions hold, so $\\boxed{a=4}$. $\\blacksquare$"
        ]
      },
      {
        "name": "Inequality version: encode ``both $>1$'' as Vieta constraints",
        "steps": [
          "Demand simultaneously: (i) two real $t$-roots, (ii) $x_{1}x_{2}=81$, (iii) both $t$-roots positive. Write them in $a$. Condition (ii) is $3^{a^{2}-3a}=81\\Rightarrow a^{2}-3a=4$.",
          "Condition (iii), ``both $t>0$,'' is exactly $t_{1}+t_{2}>0$ and $t_{1}t_{2}>0$, i.e. $a^{2}-3a>0$ and $\\log_{3}a>0$. The second inequality $\\log_{3}a>0$ means $a>1$ (which already entails $a>0$, so the logarithm is defined —{} the domain requirement is absorbed here).",
          "Now intersect with (ii): from $a^{2}-3a=4$ the only candidates are $a\\in\\{4,-1\\}$; the constraint $a>1$ keeps $a=4$ and discards $a=-1$ (which is not even $>0$). Note $a^{2}-3a=4>0$, so $t_{1}+t_{2}>0$ holds too.",
          "Finally check reality (i): $\\Delta=(a^{2}-3a)^{2}-4\\log_{3}a=16-4\\log_{3}4>0$ at $a=4$, so the two $t$ are real and distinct, both positive. Hence the unique value is $\\boxed{a=4}$. $\\blacksquare$"
        ]
      },
      {
        "name": "Solve for $x$ explicitly via the exponential disguise",
        "steps": [
          "Treat the quadratic in $t=\\log_{3}x$ with the quadratic formula: $t=\\dfrac{(a^{2}-3a)\\pm\\sqrt{(a^{2}-3a)^{2}-4\\log_{3}a}}{2}$, so the two solutions are $x=3^{t}$ for these $t$. Their product is $x_{1}x_{2}=3^{t_{1}+t_{2}}=3^{a^{2}-3a}$ directly from the symmetric sum of the two $t$-values, independent of the square-root part.",
          "Require $x_{1}x_{2}=81$: $3^{a^{2}-3a}=3^{4}\\Rightarrow a^{2}-3a-4=0\\Rightarrow a\\in\\{4,-1\\}$. For the radicand and the constant $\\log_{3}a$ to make the expression real, we need $a>0$, eliminating $a=-1$ at once.",
          "At $a=4$ the explicit solutions are $x=3^{\\,2\\pm\\sqrt{4-\\log_{3}4}}$ (since $a^{2}-3a=4$ gives $t=2\\pm\\sqrt{4-\\log_{3}4}$). Numerically $x_{1}\\approx55.43$, $x_{2}\\approx1.461$: both exceed $1$, and $x_{1}x_{2}=3^{4}=81$ exactly.",
          "Because $\\sqrt{4-\\log_{3}4}\\approx1.654<2$, both exponents $2\\pm\\sqrt{4-\\log_{3}4}$ are positive, confirming both $x>1$ without further work. The only admissible parameter is $\\boxed{a=4}$. $\\blacksquare$"
        ]
      }
    ],
    "remark": "Insight: this is a quadratic wearing a logarithm's clothes, and the entire difficulty is choreographing three filters in the right order. The substitution $t=\\log_{3}x$ exposes a clean quadratic whose Vieta data carry all the information: the product of the original unknowns is the sum of the $t$-roots, $x_{1}x_{2}=3^{t_{1}+t_{2}}$, so a product condition on $x$ becomes a linear-in-Vieta condition that pins $a^{2}-3a=4$ and offers two algebraic candidates $a=4,-1$. The first lesson is that algebra over-generates: $a=-1$ reproduces the same value $a^{2}-3a=4$ and tempts you, but it makes $\\log_{3}a$ —{} a constant sitting in the equation —{} undefined, so at $a=-1$ there is no equation, no roots, nothing to talk about. Domain is not decoration; here it is the decisive blow. The second lesson is that ``both roots exceed $1$'' is a constraint on the sign of the log-roots, not on the $x$'s directly: $x>1\\iff\\log_{3}x>0\\iff t>0$, and ``both $t>0$'' is the classic Vieta pair $t_{1}+t_{2}>0,\\ t_{1}t_{2}>0$. The product test $t_{1}t_{2}=\\log_{3}a>0$ is exactly what would have caught a stray candidate in $0<a<1$, where the two $x$'s would straddle $1$ even while their product stayed plausible. A top ranker should read the device as a template: when a problem hides a quadratic inside $\\log_{b}x$, translate every condition into $t$-space (product$\\to$sum, ``$>1$''$\\to$``$>0$''), then run the discriminant for reality, the Vieta signs for location, and the domain of every logarithm in sight for admissibility —{} and never trust an algebraic root until it has cleared the base-and-argument gate. All three methods converge on the single survivor, $a=4$."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "Positive for Every x, but Only on Half a Circle",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "positive-definite",
      "degenerate-leading-coefficient",
      "discriminant-as-trig-inequality",
      "period-collapse",
      "sign-of-leading-coefficient",
      "over-a-period"
    ],
    "statement": "Find every real number $a$ for which \\[ f(x)\\;=\\;(\\sin a)\\,x^{2}\\;+\\;2x\\;+\\;2\\sin a\\;>\\;0\\qquad\\text{for every real }x. \\] The leading coefficient $\\sin a$ is itself a function of the parameter, so this is two problems welded together: a quadratic positivity question inside a trigonometric one. Before reaching for the discriminant, ask what happens when $\\sin a=0$ —{} the object stops being a quadratic at all. Then translate ``positive for all $x$'' into a condition on $a$, and report the complete solution set over $\\mathbb{R}$, watching closely what the true period of that set turns out to be.",
    "answer": "A genuine quadratic is positive for all real $x$ exactly when its leading coefficient is positive and its discriminant is negative; the degenerate value $\\sin a=0$ must be discarded first because there $f(x)=2x$ is linear and changes sign. So we need \\[ \\sin a>0\\qquad\\text{and}\\qquad \\Delta=2^{2}-4(\\sin a)(2\\sin a)=4\\bigl(1-2\\sin^{2}a\\bigr)<0. \\] The discriminant condition is $2\\sin^{2}a>1$, i.e. $\\sin^{2}a>\\tfrac12$, i.e. $-\\cos 2a>0\\iff\\cos 2a<0$; combined with the sign requirement $\\sin a>0$ it becomes $\\sin a>\\dfrac{1}{\\sqrt2}$. Over a full period this is \\[ a\\in\\Bigl(\\tfrac{\\pi}{4},\\tfrac{3\\pi}{4}\\Bigr)\\pmod{2\\pi}, \\] so the complete answer is \\[ \\boxed{\\,a\\in\\Bigl(\\dfrac{\\pi}{4}+2n\\pi,\\;\\dfrac{3\\pi}{4}+2n\\pi\\Bigr),\\quad n\\in\\mathbb{Z}.\\,} \\] The period is $2\\pi$, not $\\pi$: although $\\cos 2a<0$ alone repeats every $\\pi$ and would also admit the band $\\bigl(\\tfrac{5\\pi}{4},\\tfrac{7\\pi}{4}\\bigr)$, on that band $\\sin a<0$ —{} the parabola opens downward and dives to $-\\infty$ —{} so it is rightly excluded.",
    "trap": "There are two traps, nested. The first and shallowest: forgetting the degenerate instant $\\sin a=0$ (at $a=n\\pi$). A solver who jumps straight to ``discriminant $<0$'' never notices that at those values $f$ collapses to the linear $f(x)=2x$, which is negative for every $x<0$; the positivity simply fails, but the discriminant machinery, applied blindly, would not flag it because there is no quadratic to take a discriminant of. The second trap is the deep one and it is what makes the problem a $5$. Suppose the solver does handle positivity correctly as ``$\\Delta<0$'' and computes $4(1-2\\sin^{2}a)<0\\Rightarrow\\cos 2a<0$. The inequality $\\cos 2a<0$ has period $\\pi$, and reading it off mechanically gives $2a\\in\\bigl(\\tfrac{\\pi}{2}+2k\\pi,\\tfrac{3\\pi}{2}+2k\\pi\\bigr)$, hence \\[ a\\in\\Bigl(\\tfrac{\\pi}{4},\\tfrac{3\\pi}{4}\\Bigr)\\cup\\Bigl(\\tfrac{5\\pi}{4},\\tfrac{7\\pi}{4}\\Bigr)\\pmod{2\\pi}, \\] a tidy, symmetric, wrong answer with period $\\pi$. The discarded half is fatal: the discriminant being negative guarantees the quadratic has no real root, i.e. it keeps a constant sign —{} but that constant sign is the sign of the leading coefficient. On $\\bigl(\\tfrac{5\\pi}{4},\\tfrac{7\\pi}{4}\\bigr)$ we have $\\sin a<0$, so the constant sign is negative: $f(x)<0$ for all $x$, the exact opposite of what was asked. Concretely at $a=\\tfrac{3\\pi}{2}$, $\\sin a=-1$ and $f(x)=-x^{2}+2x-2=-(x-1)^{2}-1\\le-1<0$ everywhere. The discriminant condition alone never sees the sign of the leading coefficient; it only forbids real roots, treating ``always positive'' and ``always negative'' as the same case. The instinct that $\\cos2a<0$ \"has period $\\pi$ so the answer has period $\\pi$\" is the killer —{} the coupling to $\\operatorname{sgn}(\\sin a)$, which has period $2\\pi$, collapses the true solution to a single band per $2\\pi$. Either slip yields a confident wrong set; the honest answer is the lone family $\\bigl(\\tfrac{\\pi}{4}+2n\\pi,\\tfrac{3\\pi}{4}+2n\\pi\\bigr)$.",
    "solutions": [
      {
        "name": "Positivity criterion: leading sign first, then discriminant as a trig inequality",
        "steps": [
          "Step 0 (the degenerate instant). If $\\sin a=0$ then $f(x)=2x$, a non-constant linear function that is negative for all $x<0$; positivity-for-all-$x$ fails. So every $a=n\\pi$ is excluded, and from here on $\\sin a\\neq 0$ and $f$ is a genuine quadratic.",
          "Step 1 (the two-part criterion). A real quadratic $Ax^{2}+Bx+C$ is $>0$ for all real $x$ iff $A>0$ and $\\Delta=B^{2}-4AC<0$. The condition $A>0$ is not optional: $\\Delta<0$ alone only says ``no real roots'', i.e. constant sign, which could be constantly negative. Here $A=\\sin a,\\ B=2,\\ C=2\\sin a$, so we require $\\;\\sin a>0\\;$ and $\\;\\Delta=4-8\\sin^{2}a<0.$",
          "Step 2 (solve the discriminant condition). $\\Delta<0\\iff 2\\sin^{2}a>1\\iff \\sin^{2}a>\\tfrac12$. Combined with $\\sin a>0$ this is simply $\\sin a>\\dfrac{1}{\\sqrt2}$.",
          "Step 3 (read off over a period and fix the period). $\\sin a>\\tfrac{1}{\\sqrt2}$ holds exactly on $a\\in\\bigl(\\tfrac{\\pi}{4},\\tfrac{3\\pi}{4}\\bigr)\\pmod{2\\pi}$. Because $\\sin a>0$ already restricts $a$ to the upper half of each circle, only one band survives per $2\\pi$ —{} the would-be twin band $\\bigl(\\tfrac{5\\pi}{4},\\tfrac{7\\pi}{4}\\bigr)$ (where $\\cos 2a<0$ but $\\sin a<0$) is killed. Hence $\\boxed{\\,a\\in\\bigl(\\tfrac{\\pi}{4}+2n\\pi,\\tfrac{3\\pi}{4}+2n\\pi\\bigr),\\ n\\in\\mathbb{Z}.}\\ \\blacksquare$"
        ]
      },
      {
        "name": "Complete the square: make the global minimum visible",
        "steps": [
          "Assume first $\\sin a>0$ (we must, else the parabola opens downward or degenerates; the cases $\\sin a\\le 0$ are handled at the end). Then $f$ has a true minimum. Complete the square: \\[ f(x)=\\sin a\\Bigl(x+\\tfrac{1}{\\sin a}\\Bigr)^{2}+\\Bigl(2\\sin a-\\tfrac{1}{\\sin a}\\Bigr). \\]",
          "The squared term is $\\ge 0$ and vanishes at the vertex, so $\\min_{x}f=2\\sin a-\\dfrac{1}{\\sin a}=\\dfrac{2\\sin^{2}a-1}{\\sin a}$. With $\\sin a>0$, requiring $f>0$ everywhere is exactly $\\min_x f>0\\iff 2\\sin^{2}a-1>0\\iff \\sin a>\\dfrac{1}{\\sqrt2}.$",
          "Now dispose of the excluded cases. If $\\sin a=0$, $f(x)=2x$ is linear and not always positive. If $\\sin a<0$, the parabola opens downward and $f\\to-\\infty$, so it is never positive for all $x$. Both are rejected, confirming the hidden constraint $\\sin a>0$ was forced, not assumed.",
          "Therefore positivity-for-all-$x$ $\\iff \\sin a>\\tfrac{1}{\\sqrt2}\\iff a\\in\\bigl(\\tfrac{\\pi}{4}+2n\\pi,\\tfrac{3\\pi}{4}+2n\\pi\\bigr)$, $n\\in\\mathbb{Z}$. $\\boxed{\\,a\\in\\bigl(\\tfrac{\\pi}{4}+2n\\pi,\\tfrac{3\\pi}{4}+2n\\pi\\bigr)\\,}\\ \\blacksquare$"
        ]
      },
      {
        "name": "Treat it as a quadratic in $t=\\sin a$ via the minimum, then a clean half-angle reading",
        "steps": [
          "Write $t=\\sin a$. For the genuine-quadratic case the vertex value (Method 2) is $g(t)=2t-\\dfrac1t$, and positivity-for-all-$x$ demands $t>0$ together with $g(t)>0$, i.e. $2t^{2}-1>0$ with $t>0$, i.e. $t>\\dfrac{1}{\\sqrt2}$. So the entire trigonometric problem reduces to the single one-variable inequality $\\sin a>\\dfrac{1}{\\sqrt2}$.",
          "Convert the discriminant form to a clean trig statement to double-check: $2\\sin^{2}a>1\\iff 1-\\cos2a>1\\iff \\cos 2a<0$. By itself $\\cos2a<0$ gives $a\\in\\bigl(\\tfrac{\\pi}{4},\\tfrac{3\\pi}{4}\\bigr)\\cup\\bigl(\\tfrac{5\\pi}{4},\\tfrac{7\\pi}{4}\\bigr)\\pmod{2\\pi}$ —{} period $\\pi$. This is exactly the tempting over-count.",
          "Intersect with the leading-sign gate $t=\\sin a>0$, which selects only $a\\in(0,\\pi)\\pmod{2\\pi}$. The band $\\bigl(\\tfrac{5\\pi}{4},\\tfrac{7\\pi}{4}\\bigr)$ lies where $\\sin a<0$ and is deleted; the band $\\bigl(\\tfrac{\\pi}{4},\\tfrac{3\\pi}{4}\\bigr)$ survives intact.",
          "The surviving set repeats with the period of $\\sin a$, namely $2\\pi$ (not the period $\\pi$ of $\\cos 2a$), giving $\\boxed{\\,a\\in\\bigl(\\tfrac{\\pi}{4}+2n\\pi,\\tfrac{3\\pi}{4}+2n\\pi\\bigr),\\ n\\in\\mathbb{Z}.}$ The two readings agree precisely once the leading-sign gate is applied. $\\blacksquare$"
        ]
      }
    ],
    "remark": "Insight: this capstone fuses the cleanest fact in elementary algebra —{} a quadratic is positive for all $x$ iff $A>0$ and $\\Delta<0$ —{} with the cleanest fact in trigonometry: $\\sin$ and $\\cos2a$ live on different periods. The whole problem is engineered around what happens when you forget that the criterion has two clauses. The discriminant clause $\\Delta<0$ only forbids real roots; on its own it cannot tell ``always positive'' from ``always negative'', and it carries the misleading period $\\pi$ of $\\cos 2a$. The leading-sign clause $A=\\sin a>0$ is what disambiguates the two constant-sign cases and carries the true period $2\\pi$. Dropping either clause produces a confident wrong answer: drop the degenerate check and you keep the meaningless instants $a=n\\pi$; drop the leading-sign gate and you double the answer, reporting the spurious band $\\bigl(\\tfrac{5\\pi}{4},\\tfrac{7\\pi}{4}\\bigr)$ where the parabola is in fact uniformly negative. The transferable discipline for a top ranker: when a quadratic's coefficients are themselves functions of a parameter, never collapse ``positive-definite'' to ``$\\Delta<0$''. First strip out the values where the leading coefficient vanishes (the object is no longer a quadratic there); then impose $A>0$ and $\\Delta<0$ as a conjunction; and finally let the slower-varying coefficient —{} here $\\operatorname{sgn}(\\sin a)$ with period $2\\pi$ —{} dictate the period of the answer, not the discriminant. The three methods converge on the same band from three angles: the criterion route exposes the conjunction directly, completing the square exhibits the global minimum $\\tfrac{2\\sin^{2}a-1}{\\sin a}$ whose positivity forces $\\sin a>\\tfrac1{\\sqrt2}$, and the $t=\\sin a$ reduction shows explicitly how the leading-sign gate halves the naive $\\cos2a<0$ solution from period $\\pi$ down to period $2\\pi$."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "A Conjugate Pair on the Circle of Radius Two",
    "difficulty": 5,
    "task": "Recover",
    "tags": [
      "vieta",
      "power-sums",
      "complex-conjugate-roots",
      "modulus-equals-product",
      "discriminant-sign",
      "de-moivre"
    ],
    "statement": "Let $p,q$ be real numbers and suppose the equation \\[ x^{2}+px+q=0 \\] has roots $\\alpha,\\beta$ that form a non-real complex-conjugate pair with \\[ |\\alpha|=2 \\qquad\\text{and}\\qquad \\alpha^{3}+\\beta^{3}=16. \\] Recover $p$ and $q$. This is a power-sum problem welded to a complex-modulus one: the data are given in the language of $|\\alpha|$ and a cube-sum, but the unknowns live in Vieta's real coefficients. Translate $|\\alpha|=2$ into a statement about $\\alpha\\beta$, push the cube-sum through Newton's identity to get a single equation in $p$ —{} and then watch which of its roots actually delivers a non-real pair. Report the unique admissible $(p,q)$.",
    "answer": "Because $\\alpha,\\beta=\\bar\\alpha$ are conjugates, $\\alpha\\beta=\\alpha\\bar\\alpha=|\\alpha|^{2}=4$, so by Vieta $\\;q=\\alpha\\beta=4$. Newton's identity gives \\[ \\alpha^{3}+\\beta^{3}=(\\alpha+\\beta)^{3}-3\\alpha\\beta(\\alpha+\\beta)=(-p)^{3}-3q(-p)=-p^{3}+3qp=-p^{3}+12p. \\] Setting this equal to $16$ yields \\[ -p^{3}+12p=16\\;\\Longleftrightarrow\\; p^{3}-12p+16=0\\;\\Longleftrightarrow\\;(p-2)^{2}(p+4)=0, \\] so the algebra permits $p=2$ (double) or $p=-4$. The roots are conjugate non-real only when the discriminant is negative: $\\Delta=p^{2}-4q=p^{2}-16<0\\iff |p|<4$. Thus $p=-4$ (where $\\Delta=0$ and $x^{2}-4x+4=(x-2)^{2}$ has the real double root $x=2$) is inadmissible, even though it satisfies both given equations numerically; the surviving value is $p=2$. Hence \\[ \\boxed{\\,p=2,\\qquad q=4\\,}\\qquad\\text{(so }x^{2}+2x+4=0,\\ \\alpha=-1+i\\sqrt3,\\ \\beta=-1-i\\sqrt3\\text{).} \\] Check: $|\\alpha|=\\sqrt{1+3}=2$ and $\\alpha^{3}+\\beta^{3}=2\\,\\mathrm{Re}(\\alpha^{3})=2\\,\\mathrm{Re}(8e^{i\\cdot 2\\pi})=16.$",
    "trap": "The cube-sum equation reduces to $p^{3}-12p+16=0$, which factors as $(p-2)^{2}(p+4)=0$ —{} and the value that ambushes a strong solver is $p=-4$. It is not an extraneous artefact of squaring or a sign slip; it is a bona fide solution of both stated equations. With $p=-4,q=4$ the quadratic is $x^{2}-4x+4=(x-2)^{2}$, whose root is $x=2$. That $x=2$ has $|2|=2$, matching $|\\alpha|=2$ to the letter; and $2^{3}+2^{3}=16$, matching $\\alpha^{3}+\\beta^{3}=16$ exactly. Every numerical clue checks out. The defect is purely structural: the problem demands a non-real conjugate pair, and $x=2$ is real —{} the complex conjugate of a real number is itself, so the ``pair'' has collapsed to a single real point on the real axis, not two distinct points symmetric across it. The discriminant is the silent gatekeeper: a real quadratic has a genuine non-real conjugate pair iff $\\Delta=p^{2}-4q<0$. At $p=-4$, $\\Delta=16-16=0$ —{} the boundary, a repeated real root —{} so it must be discarded; at $p=2$, $\\Delta=4-16=-12<0$, a true non-real pair. A solver who treats ``$|\\alpha|=2$'' as merely $\\alpha\\bar\\alpha=4$ and ``$\\alpha^{3}+\\beta^{3}=16$'' as a polynomial constraint, then solves the cubic and reports both $p=2$ and $p=-4$ (or, worse, prefers the tidy-looking $p=-4$), has missed that the words ``non-real conjugate pair'' encode an inequality, not an equation. The identity $\\alpha\\bar\\alpha=|\\alpha|^{2}$ that makes $q=4$ so painless quietly presupposes $\\beta=\\bar\\alpha$; if $\\alpha$ is real that identity still holds but the conjugate-pair hypothesis is void. Only $\\Delta<0$ enforces the hypothesis, and only $p=2$ survives it.",
    "solutions": [
      {
        "name": "Vieta + Newton's identity, gated by the discriminant",
        "steps": [
          "Modulus fixes the product. Since the roots are conjugates, $\\beta=\\bar\\alpha$, so $\\alpha\\beta=\\alpha\\bar\\alpha=|\\alpha|^{2}=2^{2}=4$. By Vieta, $q=\\alpha\\beta=4$ and $\\alpha+\\beta=-p$ (still unknown).",
          "Cube-sum becomes a cubic in $p$. Newton's identity for two variables: $\\alpha^{3}+\\beta^{3}=(\\alpha+\\beta)^{3}-3\\alpha\\beta(\\alpha+\\beta)=(-p)^{3}-3(4)(-p)=-p^{3}+12p$. Setting $-p^{3}+12p=16$ gives $p^{3}-12p+16=0$, i.e. $(p-2)^{2}(p+4)=0$, so $p\\in\\{2,\\,-4\\}$.",
          "Discriminant selects the non-real pair. A real quadratic $x^{2}+px+q$ has a non-real conjugate pair iff $\\Delta=p^{2}-4q<0$. Here $\\Delta=p^{2}-16$. For $p=-4$, $\\Delta=0$: the root is the real double root $x=2$, so the conjugate-pair hypothesis fails and this value is rejected. For $p=2$, $\\Delta=-12<0$: a genuine non-real pair.",
          "Conclude and verify. The unique admissible pair is $\\boxed{p=2,\\ q=4}$. Indeed $x^{2}+2x+4=0$ gives $\\alpha=-1+i\\sqrt3,\\ \\beta=-1-i\\sqrt3$, with $|\\alpha|=\\sqrt{1+3}=2$ and $\\alpha^{3}+\\beta^{3}=(-1+i\\sqrt3)^{3}+(-1-i\\sqrt3)^{3}=8+8=16.$ $\\blacksquare$"
        ]
      },
      {
        "name": "Polar form / De Moivre: the cube-sum is $16\\cos 3\\theta$",
        "steps": [
          "Parametrise the non-real pair on the circle of radius $2$. Write $\\alpha=2(\\cos\\theta+i\\sin\\theta)$ with $\\theta\\in(0,\\pi)$ —{} the open interval $(0,\\pi)$ is exactly the non-real condition ($\\sin\\theta\\ne0$), automatically barring the real values $\\theta=0,\\pi$. Then $\\beta=\\bar\\alpha=2(\\cos\\theta-i\\sin\\theta)$, and at once $q=\\alpha\\beta=|\\alpha|^{2}=4$ and $p=-(\\alpha+\\beta)=-4\\cos\\theta.$",
          "Convert the cube-sum via De Moivre. $\\alpha^{3}+\\beta^{3}=2\\,\\mathrm{Re}(\\alpha^{3})=2\\cdot 2^{3}\\cos 3\\theta=16\\cos 3\\theta.$ The condition $\\alpha^{3}+\\beta^{3}=16$ is therefore $16\\cos3\\theta=16$, i.e. $\\cos3\\theta=1$.",
          "Solve on the admissible arc. $\\cos3\\theta=1\\Rightarrow 3\\theta=2k\\pi$. With $\\theta\\in(0,\\pi)$ we have $3\\theta\\in(0,3\\pi)$, whose only multiple of $2\\pi$ is $3\\theta=2\\pi$, giving the unique $\\theta=\\tfrac{2\\pi}{3}$. (The would-be solution $3\\theta=0$, i.e. $\\theta=0$, is the real root on the positive axis —{} excluded by the open interval, which is precisely how this method sidesteps the $p=-4$ trap from the outset.)",
          "Read off $p,q$. $p=-4\\cos\\tfrac{2\\pi}{3}=-4\\bigl(-\\tfrac12\\bigr)=2$ and $q=4$. Hence $\\boxed{p=2,\\ q=4}.$ $\\blacksquare$"
        ]
      },
      {
        "name": "Plug the real form $\\alpha=a+bi$ into both clues",
        "steps": [
          "Use realness of the coefficients directly. A real quadratic with non-real roots has $\\alpha=a+bi,\\ \\beta=a-bi$ with $b\\neq0$. Vieta: $-p=\\alpha+\\beta=2a$ so $p=-2a$, and $q=\\alpha\\beta=a^{2}+b^{2}$.",
          "Impose $|\\alpha|=2$: $a^{2}+b^{2}=4$, which immediately gives $q=a^{2}+b^{2}=4$. (Note this is where ``$|\\alpha|=2$'' silently uses $b\\ne0$ only for admissibility, not for the value of $q$.)",
          "Impose the cube-sum. $\\alpha^{3}+\\beta^{3}=2\\,\\mathrm{Re}(\\alpha^{3})=2(a^{3}-3ab^{2})=2a(a^{2}-3b^{2})$. Substitute $b^{2}=4-a^{2}$: $\\;2a\\bigl(a^{2}-3(4-a^{2})\\bigr)=2a(4a^{2}-12)=8a^{3}-24a$. Setting $8a^{3}-24a=16$ gives $a^{3}-3a-2=0$, i.e. $(a+1)^{2}(a-2)=0$, so $a=-1$ or $a=2$.",
          "Enforce $b\\ne0$. If $a=2$ then $b^{2}=4-4=0$, so $b=0$: the root is real $(x=2)$ —{} rejected. If $a=-1$ then $b^{2}=4-1=3$, $b=\\pm\\sqrt3\\ne0$: a genuine non-real pair. Then $p=-2a=2$ and $q=4$, so $\\boxed{p=2,\\ q=4}.$ The rejected $a=2$ is exactly the disguised $p=-4$ from the cubic route. $\\blacksquare$"
        ]
      }
    ],
    "remark": "Insight: the problem is a study in how a word (\"non-real conjugate pair\") secretly carries an inequality ($\\Delta<0$) that the algebra of $|\\alpha|$ and power-sums cannot see. Three of the four data —{} $q=4$ from $\\alpha\\bar\\alpha=|\\alpha|^2$, the cubic from Newton's identity, the boxed $p=2$ —{} flow from pure Vieta manipulation; but that manipulation is sign-blind to whether the pair is truly non-real, and it hands back the impostor $p=-4$, which satisfies $|\\alpha|=2$ and $\\alpha^3+\\beta^3=16$ to the digit while quietly being the real double root $x=2$. The discipline a top ranker should extract: whenever roots are described as complex/conjugate/non-real, that description is a constraint with the same force as the numerical ones —{} translate it to $\\Delta<0$ (or to an open arc $\\theta\\in(0,\\pi)$, or to $b\\ne0$) and impose it before declaring victory. The three methods illuminate the same gate from three sides: Vieta+Newton produces both candidates and uses $\\Delta=p^2-16<0$ to cut $p=-4$; the polar form never even meets the impostor because $\\theta\\in(0,\\pi)$ pre-excludes $\\theta=0$; and the explicit $\\alpha=a+bi$ route shows the rejection most viscerally —{} the spurious $a=2$ forces $b^2=4-a^2=0$, collapsing the imaginary part to zero. The structural lesson —{} $\\alpha\\bar\\alpha=|\\alpha|^2$ presupposes conjugacy, and conjugacy of a real number with itself is vacuous —{} is the kind of degeneracy that separates a rank inside the top ten from a confident, well-presented wrong answer."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Range a Discriminant Permits",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "vieta",
      "discriminant",
      "range",
      "parameter"
    ],
    "statement": "Let $\\alpha,\\beta$ be the roots of $x^{2}-2a\\,x+\\bigl(2a^{2}-4a+3\\bigr)=0$. As $a$ ranges over all real values for which $\\alpha,\\beta$ are real, determine the set of all possible values of $\\alpha^{2}+\\beta^{2}$.",
    "answer": "$[\\,2,\\,18\\,]$.",
    "trap": "Computing $\\alpha^{2}+\\beta^{2}=8a-6$ and letting $a$ run over all reals to get $(-\\infty,\\infty)$. The reality requirement (discriminant $\\ge0$) confines $a$ to a finite interval, which truncates the range.",
    "solutions": [
      {
        "name": "Vieta then constrain $a$",
        "steps": [
          "By Vieta, $\\alpha+\\beta=2a$ and $\\alpha\\beta=2a^{2}-4a+3$, so $\\alpha^{2}+\\beta^{2}=(2a)^{2}-2(2a^{2}-4a+3)=8a-6$.",
          "Reality: discriminant $=4a^{2}-4(2a^{2}-4a+3)=-4(a^{2}-4a+3)=-4(a-1)(a-3)\\ge0\\Rightarrow 1\\le a\\le3$.",
          "On $[1,3]$ the linear function $8a-6$ increases from $8(1)-6=2$ to $8(3)-6=18$.",
          "Since it is continuous and monotone, every value in between is attained: range $=\\boxed{[2,18]}$."
        ]
      },
      {
        "name": "Endpoint check via explicit roots",
        "steps": [
          "At $a=1$: $x^{2}-2x+1=(x-1)^{2}$, so $\\alpha=\\beta=1$ and $\\alpha^{2}+\\beta^{2}=2$.",
          "At $a=3$: $x^{2}-6x+9=(x-3)^{2}$, so $\\alpha=\\beta=3$ and $\\alpha^{2}+\\beta^{2}=18$.",
          "Between these the expression $8a-6$ sweeps continuously, and outside $[1,3]$ the roots are non-real and excluded.",
          "Hence the attainable set is exactly $\\boxed{[2,18]}$."
        ]
      }
    ],
    "remark": "Insight: a symmetric function of the roots is a clean function of the parameter, but its range is gated by the discriminant — the reality window, not the formula, sets the endpoints."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Shared Root That Is a Geometric Mean",
    "difficulty": 5,
    "task": "Find",
    "tags": [
      "common-root",
      "geometric-mean",
      "vieta",
      "missed-case",
      "four-root-synthesis",
      "branch-of-the-root"
    ],
    "statement": "The quadratics \\[ P(x)=x^{2}-a\\,x+27\\qquad\\text{and}\\qquad Q(x)=x^{2}-4x+3 \\] share exactly one root $r$. Among the four roots of $P$ and $Q$, two are this common root $r$ (counted once for each polynomial) and two are not shared. Find every real value of the parameter $a$ for which the common root $r$ is the geometric mean of the two non–shared roots. Note that $Q$ is fully numerical: it already hands you the two candidates for $r$. The catch is that only one of those candidates can survive the geometric–mean demand, and choosing the wrong one returns a perfectly clean integer $a$ that is nonetheless wrong.",
    "answer": "Since $r$ must be a root of the numerical quadratic $Q(x)=x^{2}-4x+3=(x-1)(x-3)$, the only candidates for the shared root are $r=1$ and $r=3$. The product of the roots of $P$ is $27$ and of $Q$ is $3$, so the non–shared partner of $r$ in $P$ is $p=\\dfrac{27}{r}$ and in $Q$ is $q=\\dfrac{3}{r}$. The geometric–mean condition ``$r$ is the geometric mean of $p$ and $q$'' is \\[ r^{2}=p\\,q=\\frac{27}{r}\\cdot\\frac{3}{r}=\\frac{81}{r^{2}}\\quad\\Longrightarrow\\quad r^{4}=81\\quad\\Longrightarrow\\quad r^{2}=9\\ \\ (r\\in\\mathbb{R})\\quad\\Longrightarrow\\quad r=\\pm 3. \\] Intersecting $\\{\\,r=\\pm3\\,\\}$ with the candidate set $\\{1,3\\}$ forced by $Q$ leaves the single value $r=3$. Then, from $r$ being a root of $P$, $\\;9-3a+27=0\\Rightarrow a=12$. Check: $P(x)=x^{2}-12x+27=(x-3)(x-9)$, the shared root is $3$, the non–shared roots are $9$ (from $P$) and $1$ (from $Q$), and indeed $\\sqrt{9\\cdot 1}=3$. The other candidate $r=1$ gives the tidy but illegitimate $a=28$ (then $P=(x-1)(x-27)$, non–shared roots $27,3$, whose geometric mean is $\\sqrt{81}=9\\ne 1$). Hence \\[ \\boxed{\\,a=12\\,}. \\]",
    "trap": "The trap is a missed–case married to a seductively clean wrong answer. A strong solver correctly reduces the shared root to a root of the numerical $Q$, namely $r\\in\\{1,3\\}$, and correctly writes the non–shared partners as $p=27/r$ and $q=3/r$. The fatal step is treating ``$r$ is a geometric mean'' as automatically satisfiable and simply solving for $a$ from whichever candidate is grabbed first —{} usually $r=1$, the smaller, friendlier root. That yields $a=r+27/r=1+27=28$, a clean integer that even factors beautifully: $P=x^{2}-28x+27=(x-1)(x-27)$. It looks like a finished problem. But the geometric–mean clause is not a formality; it is the actual question. For $r=1$ the non–shared roots are $27$ and $3$, whose geometric mean is $\\sqrt{27\\cdot 3}=\\sqrt{81}=9$, not $1$ —{} the condition is violated, so $a=28$ must be discarded. Only $r=3$ survives: its non–shared partners are $9$ and $1$ with geometric mean $\\sqrt{9}=3=r$. A second, subtler snare lurks in the algebra: collapsing the condition to $r^{4}=81$ produces $r=\\pm3$, and an unwary solver may try to use $r=-3$ (it is real, after all) and hunt for the $a$ it implies. But $-3$ is not a root of $Q$, so it was never an admissible shared root; it is an extraneous branch introduced by squaring, not a second answer. Both slips —{} skipping the geometric–mean check and admitting the extraneous $r=-3$ —{} hand back confident, clean–looking values; the honest answer is the single $a=12$.",
    "solutions": [
      {
        "name": "Locate the shared root in Q, then let the geometric mean choose",
        "steps": [
          "The shared root $r$ must satisfy the numerical quadratic $Q(x)=x^{2}-4x+3=(x-1)(x-3)=0$, so there are only two candidates: $r=1$ or $r=3$. (This is the whole point of $Q$ being fully numerical: it pre–filters the shared root to two values, no parameter involved.)",
          "Use Vieta to name the non–shared roots without solving anything. The product of $P$'s roots is its constant term $27$, so $P$'s non–shared root is $p=\\dfrac{27}{r}$; the product of $Q$'s roots is $3$, so $Q$'s non–shared root is $q=\\dfrac{3}{r}$.",
          "Impose the geometric–mean condition $r=\\sqrt{p\\,q}$, i.e. $r^{2}=p\\,q$. Test the two candidates. For $r=1$: $p\\,q=27\\cdot 3=81\\ne 1=r^{2}$ —{} fails. For $r=3$: $p\\,q=9\\cdot 1=9=r^{2}$ —{} holds. So the shared root is forced to be $r=3$.",
          "Finally, $r=3$ is a root of $P$: $\\;3^{2}-3a+27=0\\Rightarrow 36=3a\\Rightarrow a=12$. Verification: $P=x^{2}-12x+27=(x-3)(x-9)$ shares the root $3$ with $Q$, the non–shared roots are $9$ and $1$, and $\\sqrt{9\\cdot 1}=3$ is exactly the shared root. $\\boxed{a=12}.\\ \\blacksquare$"
        ]
      },
      {
        "name": "Eliminate the parameter first: collapse the geometric mean to a pure equation in r",
        "steps": [
          "Write the geometric–mean condition before committing to a candidate. With $p=\\dfrac{27}{r}$ and $q=\\dfrac{3}{r}$ (Vieta on the two constant terms), $r^{2}=p\\,q=\\dfrac{27}{r}\\cdot\\dfrac{3}{r}=\\dfrac{81}{r^{2}}$, which clears to $r^{4}=81$. The parameter $a$ has vanished entirely —{} the geometric–mean clause is purely a statement about $r$.",
          "Solve over the reals: $r^{4}=81\\Rightarrow r^{2}=9\\Rightarrow r=\\pm 3$. (The value $r=-3$ is a genuine root of $r^{4}=81$ but an extraneous candidate for our problem; it survives only because squaring forgot where $r$ is allowed to live.)",
          "Re–impose the domain that $r$ must obey: $r$ is a shared root, hence a root of $Q$, so $r\\in\\{1,3\\}$. Intersecting $\\{-3,3\\}$ with $\\{1,3\\}$ gives the unique admissible $r=3$; the extraneous $r=-3$ is rejected for not being a root of $Q$.",
          "Recover $a$ from $P(3)=0$: $9-3a+27=0\\Rightarrow a=12$. $\\boxed{a=12}.\\ \\blacksquare$"
        ]
      },
      {
        "name": "Full four-root Vieta bookkeeping",
        "steps": [
          "Denote the four roots as $r,p$ (for $P$) and $r,q$ (for $Q$), with $r$ the shared one. Vieta gives the complete system: from $P$, $\\;r+p=a$ and $rp=27$; from $Q$, $\\;r+q=4$ and $rq=3$.",
          "The two purely numerical Vieta relations of $Q$ already pin the shared root: eliminating $q=3/r$ in $r+q=4$ gives $r^{2}-4r+3=0$, so $r\\in\\{1,3\\}$, and correspondingly $q=3/r\\in\\{3,1\\}$.",
          "Bring in the geometric–mean condition $r^{2}=p\\,q$. Substitute $p=27/r$ and $q=3/r$ to get $r^{2}=\\dfrac{81}{r^{2}}$, i.e. $r^{4}=81$, so $r=3$ is the only value compatible with $r\\in\\{1,3\\}$ (and $r=1$ is rejected because $1\\ne\\sqrt{27\\cdot 3}=9$).",
          "With $r=3$: $p=27/3=9$, $q=3/3=1$, and $a=r+p=3+9=12$. All four Vieta relations hold ($r+p=12=a$, $rp=27$, $r+q=4$, $rq=3$) and the geometric mean $\\sqrt{p\\,q}=\\sqrt{9}=3=r$ is confirmed. $\\boxed{a=12}.\\ \\blacksquare$"
        ]
      }
    ],
    "remark": "Insight: the engine of this capstone is that one quadratic is left fully numerical on purpose. $Q=x^{2}-4x+3$ does double duty —{} it supplies one of the two non–shared roots and it pre–quantises the shared root to the finite set $\\{1,3\\}$, turning an apparently continuous parameter hunt into a two–candidate decision. The synthesis then lands cleanly because the geometric–mean clause, when written through Vieta as $r^{2}=p\\,q=\\dfrac{27}{r}\\cdot\\dfrac{3}{r}$, eliminates the parameter altogether and collapses to the strikingly simple $r^{4}=81$: the two constant terms $27$ and $3$ fuse into the single number $81$, and the whole problem balances on $r^{2}=9$. Two disciplines separate a top ranker from a strong student here. First, the geometric–mean condition is the question, not decoration: $a=28$ from the wrong candidate factors prettily and tempts you to stop, yet $\\sqrt{27\\cdot 3}=9\\ne 1$ exposes it instantly —{} always test the clause you were actually asked about. Second, squaring breeds phantoms: $r^{4}=81$ offers $r=-3$, real and tidy, but illegitimate because the shared root is shackled to $Q$'s root set $\\{1,3\\}$; the right move is to re–impose the domain a variable must live in after every squaring step. The three routes converge from three vantage points —{} candidate–testing makes the missed case visceral, parameter–elimination exposes the extraneous branch, and full Vieta bookkeeping shows every relation closing on $a=12$ —{} and all three agree that the lone honest answer is $a=12$."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "A Trigonometric Equation Made of Sines",
    "difficulty": 5,
    "task": "Find the number of integers a for which the equation is solvable",
    "tags": [
      "equation-in-disguise",
      "double-angle",
      "bounded-range",
      "integer-count"
    ],
    "statement": "Find the number of integers $a$ for which the equation \\[2\\cos 2x+4a\\sin x=a^{2}+1\\] has at least one real solution $x$.",
    "answer": "$7$ (namely $a\\in\\{-3,-2,-1,0,1,2,3\\}$).",
    "trap": "Reducing to a quadratic in $\\sin x$ and only demanding that this quadratic have a real root (a discriminant condition). Here the discriminant is the constant $16>0$, so the quadratic always has real roots; this would wrongly admit every integer $a$, i.e. infinitely many. The genuine constraint is that the root must lie in $[-1,1]$, because it equals $\\sin x$.",
    "solutions": [
      {
        "name": "Double angle, then bound the sine",
        "steps": [
          "Use $\\cos 2x=1-2\\sin^{2}x$. With $s=\\sin x$ the equation becomes $2(1-2s^{2})+4as=a^{2}+1$, i.e. $4s^{2}-4as+(a^{2}-1)=0$.",
          "Notice this is $(2s-a)^{2}=1$, so $2s-a=\\pm1$ and $s=\\dfrac{a\\pm1}{2}$. The discriminant is the constant $16$, so a real $s$ always exists — that alone proves nothing.",
          "A real $x$ exists iff at least one candidate lies in the range $[-1,1]$ of $\\sin$: $\\dfrac{a-1}{2}\\in[-1,1]\\Leftrightarrow a\\in[-1,3]$, or $\\dfrac{a+1}{2}\\in[-1,1]\\Leftrightarrow a\\in[-3,1]$.",
          "The union is $a\\in[-3,3]$. The integers in this range are $-3,-2,-1,0,1,2,3$, so the count is $\\boxed{7}$.",
          "Sanity check at the boundary $a=3$: $s=\\tfrac{3\\pm1}{2}\\in\\{2,1\\}$, and $s=1$ is valid; at $x=\\tfrac{\\pi}{2}$ the equation reads $2(-1)+12=10=a^{2}+1$. For $a=4$ both candidates $\\{1.5,2.5\\}$ exceed $1$, so no $x$ works."
        ]
      },
      {
        "name": "Read it as a quadratic in $a$",
        "steps": [
          "Rearrange to $a^{2}-(4\\sin x)\\,a+(1-2\\cos 2x)=0$, a quadratic in $a$. Writing $s=\\sin x$ and $\\cos 2x=1-2s^{2}$ gives $a^{2}-4as+(4s^{2}-1)=0$, i.e. $(a-2s)^{2}=1$, so $a=2s\\pm1$.",
          "Thus an integer $a$ is attainable iff $a=2s\\pm1$ for some $s\\in[-1,1]$, i.e. iff $\\dfrac{a\\mp1}{2}\\in[-1,1]$ for one choice of sign.",
          "As $s$ ranges over $[-1,1]$, the value $2s+1$ sweeps $[-1,3]$ and $2s-1$ sweeps $[-3,1]$; their union is $[-3,3]$. So $a$ is attainable exactly when $-3\\le a\\le 3$.",
          "For $|a|>3$ both candidate sines have modulus exceeding $1$ (e.g. $a=4\\Rightarrow s\\in\\{1.5,2.5\\}$), so no real $x$ exists. The integers in $[-3,3]$ number $7$, giving $\\boxed{7}$."
        ]
      }
    ],
    "remark": "Insight: behind a trigonometric equation sits a quadratic, but the real gate is the codomain of $\\sin$. Because the disguised quadratic is the perfect square $(2\\sin x-a)^{2}=1$, its discriminant is a positive constant — a real algebraic root is automatic and tells you nothing. The solvability count is governed entirely by whether a root falls inside $[-1,1]$, turning an existence question into a clean location-of-roots count."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Exponential That Only Visits Half the Line",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "exponential-substitution",
      "min-on-closed-interval",
      "vertex-location",
      "interval-positivity",
      "parameter-isolation"
    ],
    "statement": "Find every real value of the parameter $a$ for which \\[ 4^{x}\\;-\\;2a\\cdot 2^{x}\\;+\\;(a+2)\\;\\ge\\;0\\qquad\\text{for every }x\\in[0,1]. \\] Hint and warning. Set $t=2^{x}$. As $x$ runs over $[0,1]$, $t$ runs over $[1,2]$ —{} and over nothing else, because $2^{x}$ is a strictly increasing bijection of $[0,1]$ onto $[1,2]$. So the demand becomes: the upward parabola $h(t)=t^{2}-2at+(a+2)$ is $\\ge 0$ for every $t$ in the closed interval $[1,2]$. This is not the question \"is $h$ positive for all real $t$\" —{} you are only asked about a single short arc of the line. Whether the controlling value of $h$ is the vertex or an endpoint depends entirely on where the vertex $t=a$ falls relative to $[1,2]$, and that location is itself governed by $a$.",
    "answer": "Substitute $t=2^{x}$. Since $2^{x}:[0,1]\\to[1,2]$ is a strictly increasing bijection, \"the inequality holds for all $x\\in[0,1]$\" is equivalent to \"$h(t)=t^{2}-2at+(a+2)\\ge 0$ for all $t\\in[1,2]$\", i.e. $\\min_{t\\in[1,2]}h(t)\\ge 0$. The parabola opens upward with vertex at $t=a$, so the location of the minimum on $[1,2]$ splits into three cases. (i) $a\\le 1$: the vertex is at or left of $1$, so $h$ is increasing on $[1,2]$ and $\\min h=h(1)=1-2a+(a+2)=3-a$. Then $3-a\\ge 0\\iff a\\le 3$, which is automatic here, so all $a\\le 1$ work. (ii) $1\\le a\\le 2$: the vertex lies inside, so $\\min h=h(a)=-a^{2}+a+2=-(a-2)(a+1)\\ge 0\\iff -1\\le a\\le 2$, true throughout $[1,2]$, so all $a\\in[1,2]$ work. (iii) $a\\ge 2$: the vertex is at or right of $2$, so $h$ is decreasing on $[1,2]$ and $\\min h=h(2)=4-4a+(a+2)=6-3a\\ge 0\\iff a\\le 2$; combined with $a\\ge 2$ this leaves only $a=2$. Taking the union of the three cases gives every $a\\le 1$, every $a\\in[1,2]$, and the point $a=2$, i.e. \\[ \\boxed{\\,a\\le 2,\\quad\\text{that is}\\quad a\\in(-\\infty,\\,2].\\,} \\] At the boundary $a=2$, $h(t)=(t-2)^{2}\\ge 0$ with equality only at $t=2$ (i.e. $x=1$), which the non-strict $\\ge$ permits, so $a=2$ is included.",
    "trap": "The fatal slip is to read \"$\\ge 0$\" as \\emph{positive-definite on all of $\\mathbb{R}$} and reach straight for the discriminant: demand that $h(t)=t^{2}-2at+(a+2)$ have no real roots, i.e. $\\Delta=(2a)^{2}-4(a+2)=4(a^{2}-a-2)=4(a-2)(a+1)\\le 0$, giving the clean, symmetric, wrong band $\\boxed{-1\\le a\\le 2}$. It is wrong on the entire ray $a<-1$. The discriminant test asks whether the parabola clears the axis everywhere on the real line, but the problem only cares about the short arc $t\\in[1,2]$. When $a<-1$ the vertex $t=a$ sits far to the left of $[1,2]$; the parabola does dip below the axis and even has two real roots, but both roots lie to the left of $t=1$, so on the interval $[1,2]$ the function is comfortably positive. Concretely at $a=-5$ the roots are $-5\\pm 2\\sqrt 7\\approx 0.29$ and $-10.29$, both less than $1$, and $h(1)=3-a=8>0$: the inequality holds throughout $[0,1]$, yet the discriminant trap rejects this $a$ outright. The trap is conceptual, not arithmetic: it confuses \"nonnegative on a closed interval\" with \"nonnegative on $\\mathbb{R}$\", and the exponential disguise hides that the variable was only ever allowed to roam over $[1,2]$. A second, subtler slip is to substitute $t=2^{x}$ but mis-state its range —{} writing $t\\in(0,\\infty)$ (the range of $2^{x}$ over all $x$) or $t\\in[1,2)$ (forgetting $x=1$ is included). The correct closed range $[1,2]$ is precisely why the controlling endpoint is $t=2$ and the boundary value $a=2$ survives; widen the range to $(0,\\infty)$ and you are back to a positive-definiteness question that again yields the spurious $[-1,2]$. The honest answer is the whole ray $a\\le 2$, not the bounded interval $[-1,2]$.",
    "solutions": [
      {
        "name": "Vertex-location case-split (minimum on a closed interval)",
        "steps": [
          "Substitute $t=2^{x}$. Because $2^{x}$ is strictly increasing and continuous, it maps $[0,1]$ bijectively onto $[1,2]$, and every $t\\in[1,2]$ is hit by exactly one $x$. So \"the inequality holds for all $x\\in[0,1]$\" is identical to \"$h(t)=t^{2}-2at+(a+2)\\ge 0$ for all $t\\in[1,2]$\", i.e. $\\min_{t\\in[1,2]}h(t)\\ge 0$.",
          "The graph of $h$ is an upward parabola with vertex abscissa $t=a$. On a closed interval the minimum of an upward parabola is at the vertex if the vertex lies inside, otherwise at the nearer endpoint. So split on where $a$ falls relative to $[1,2]$.",
          "Case $a\\le 1$ (vertex at/left of $1$): $h$ increases on $[1,2]$, so $\\min h=h(1)=3-a\\ge 0\\iff a\\le 3$, automatic; all $a\\le 1$ qualify. Case $1\\le a\\le 2$ (vertex inside): $\\min h=h(a)=a^{2}-2a^{2}+a+2=-(a-2)(a+1)\\ge 0\\iff -1\\le a\\le 2$, true on all of $[1,2]$; all such $a$ qualify. Case $a\\ge 2$ (vertex at/right of $2$): $h$ decreases on $[1,2]$, so $\\min h=h(2)=6-3a\\ge 0\\iff a\\le 2$; with $a\\ge 2$ only $a=2$ survives.",
          "Union the three cases: $\\{a\\le 1\\}\\cup[1,2]\\cup\\{2\\}=(-\\infty,2]$. Hence $\\boxed{\\,a\\le 2\\,}$. $\\blacksquare$"
        ]
      },
      {
        "name": "Parameter isolation (separate $a$, then minimize a single function)",
        "steps": [
          "After $t=2^{x}\\in[1,2]$ the requirement is $t^{2}-2at+(a+2)\\ge 0$ for all $t\\in[1,2]$. Group the terms carrying $a$: rewrite as $t^{2}+2\\ge a(2t-1)$. On $[1,2]$ the coefficient $2t-1$ satisfies $2t-1\\ge 1>0$, so we may divide without flipping the inequality: the condition is $a\\le \\dfrac{t^{2}+2}{2t-1}$ for every $t\\in[1,2]$.",
          "\"$a\\le \\varphi(t)$ for every $t$\" is equivalent to $a\\le \\min_{t\\in[1,2]}\\varphi(t)$, where $\\varphi(t)=\\dfrac{t^{2}+2}{2t-1}$. So the whole problem collapses to minimizing one explicit function on $[1,2]$.",
          "Differentiate: $\\varphi'(t)=\\dfrac{2t(2t-1)-2(t^{2}+2)}{(2t-1)^{2}}=\\dfrac{2t^{2}-2t-4}{(2t-1)^{2}}=\\dfrac{2(t-2)(t+1)}{(2t-1)^{2}}$. For $t\\in[1,2)$ the numerator $2(t-2)(t+1)<0$, so $\\varphi$ is strictly decreasing on $[1,2]$; its minimum is at the right endpoint, $\\varphi(2)=\\dfrac{4+2}{4-1}=\\dfrac{6}{3}=2$ (while $\\varphi(1)=3$ is the maximum).",
          "Therefore the condition is $a\\le \\min_{[1,2]}\\varphi=2$, i.e. $\\boxed{\\,a\\le 2\\,}$. The minimum is attained (closed interval, $\\varphi(2)=2$), so equality $a=2$ is allowed, matching the non-strict $\\ge$. $\\blacksquare$"
        ]
      },
      {
        "name": "Endpoint screen plus a tangency check (necessary then sufficient)",
        "steps": [
          "Necessity from the endpoints. With $t=2^{x}\\in[1,2]$, the inequality at the two endpoints $t=1$ and $t=2$ must certainly hold: $h(1)=3-a\\ge 0\\Rightarrow a\\le 3$, and $h(2)=6-3a\\ge 0\\Rightarrow a\\le 2$. The binding one is $a\\le 2$, so no $a>2$ can possibly work —{} this is a necessary condition.",
          "Sufficiency for $a\\le 2$. We show $h\\ge 0$ on all of $[1,2]$ whenever $a\\le 2$, by locating the only place $h$ could be negative: its vertex $t=a$. If $a\\le 1$, the vertex is left of the interval, so the interval minimum is $h(1)=3-a\\ge 2>0$. If $a\\ge 2$, only $a=2$ remains by Step 1, and there $h(t)=(t-2)^{2}\\ge 0$.",
          "If $1<a<2$ the vertex is interior and the interval minimum is the vertex value $h(a)=-(a-2)(a+1)$; for $1<a<2$ both factors give $-(\\text{neg})(\\text{pos})=$ positive, so $h(a)>0$. In every sub-case the minimum over $[1,2]$ is $\\ge 0$, so $a\\le 2$ is sufficient.",
          "Necessity ($a\\le 2$) and sufficiency ($a\\le 2$) coincide, so the exact answer is $\\boxed{\\,a\\le 2\\,}$. The boundary $a=2$ is the tangency case where $h$ touches zero at $t=2$ (i.e. $x=1$), legitimately kept by the non-strict inequality. $\\blacksquare$"
        ]
      }
    ],
    "remark": "Insight: the engine is the deliberate clash between \"nonnegative on a closed interval\" and \"nonnegative on the whole line.\" The exponential substitution $t=2^{x}$ is faithful only because $2^{x}$ is a strictly increasing bijection of $[0,1]$ onto exactly $[1,2]$ —{} that \"why exactly $[1,2]$\" step is the hinge of the problem. Once the variable is pinned to a short arc, the discriminant becomes the wrong tool: $\\Delta\\le 0$ would force the parabola above the axis everywhere, a strictly stronger demand than staying nonnegative on $[1,2]$, and it amputates the entire ray $a<-1$ where the parabola dips below the axis only out to the left of $t=1$, harmlessly. What actually controls the answer is the location of the vertex $t=a$ relative to $[1,2]$: left of the interval the binding value is the endpoint $h(1)$, inside it is the vertex $h(a)$, right of it the other endpoint $h(2)$ —{} and only the rightmost case bites, capping $a$ at $2$. The three methods converge on $a\\le 2$ from independent directions: the case-split reads the minimum off the geometry, parameter isolation turns \"for all $t$\" into a single one-variable minimization $a\\le\\min\\varphi=\\varphi(2)=2$ (the cleanest route, since dividing by $2t-1>0$ never flips the sign), and the endpoint-plus-tangency route proves $a\\le 2$ necessary then sufficient. The transferable discipline for a top ranker: when a parameter inequality is required on an interval, never substitute \"discriminant $\\le 0$\" for \"minimum on the interval $\\ge 0$\" —{} first nail down the exact range the substituted variable occupies (here the closed $[1,2]$, not $(0,\\infty)$ and not $[1,2)$), then compare the vertex against that range; the discriminant only answers the global question, which is almost never the one being asked."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Grand Hybrid: Coefficients from Three Clues",
    "difficulty": 5,
    "task": "Find a,b",
    "tags": [
      "symmetric-functions",
      "reality",
      "location-of-roots",
      "newton-identities"
    ],
    "statement": "The equation $x^{2}+p\\,x+q=0$ has real roots $\\alpha,\\beta$ satisfying \\[\\alpha^{2}+\\beta^{2}=13,\\qquad \\alpha^{3}+\\beta^{3}=35,\\] and both roots lie in the interval $(0,4)$. Find $p$ and $q$.",
    "answer": "$p=-5,\\ q=6$ (the roots are $2$ and $3$).",
    "trap": "Solving the symmetric system for $(s,m)=(\\alpha+\\beta,\\alpha\\beta)$ produces three real pairs; stopping after enforcing reality (which kills one) and forgetting the location condition. The surviving pair $(s,m)=(2,-\\tfrac92)$ is real with real roots, but one root is negative — only the interval condition $(0,4)$ rejects it.",
    "solutions": [
      {
        "name": "Power sums, then reality, then location",
        "steps": [
          "Let $s=\\alpha+\\beta=-p$, $m=\\alpha\\beta=q$. Then $\\alpha^{2}+\\beta^{2}=s^{2}-2m=13$ and $\\alpha^{3}+\\beta^{3}=s^{3}-3sm=35$.",
          "From the first, $m=\\dfrac{s^{2}-13}{2}$. Substitute into the second: $s^{3}-3s\\cdot\\dfrac{s^{2}-13}{2}=35\\Rightarrow -s^{3}+39s=70\\Rightarrow s^{3}-39s+70=0$.",
          "Factor: $(s-5)(s+7)(s-2)=0$, so $s\\in\\{5,-7,2\\}$, giving $(s,m)\\in\\{(5,6),(-7,18),(2,-\\tfrac92)\\}$.",
          "Reality (discriminant $s^{2}-4m\\ge0$): $(5,6)\\to1\\ge0$ ✓; $(-7,18)\\to-23<0$ ✗ (rejected); $(2,-\\tfrac92)\\to22\\ge0$ ✓.",
          "Location in $(0,4)$: $(5,6)$ gives roots $2,3$ — both inside ✓. $(2,-\\tfrac92)$ gives $1\\pm\\sqrt{22}/2\\approx\\{-1.35,3.35\\}$ — one root outside ✗.",
          "Only $(s,m)=(5,6)$ survives, so $p=-5,\\ q=6$: $\\boxed{p=-5,\\ q=6}$ with roots $2,3$."
        ]
      },
      {
        "name": "Guess-and-confirm via the data",
        "steps": [
          "Seek integers $\\alpha,\\beta\\in(0,4)$ with $\\alpha^{2}+\\beta^{2}=13$: the only choice is $\\{2,3\\}$ since $2^{2}+3^{2}=13$.",
          "Check the cubic clue: $2^{3}+3^{3}=8+27=35$ ✓.",
          "Then $p=-(\\alpha+\\beta)=-5$ and $q=\\alpha\\beta=6$, and both roots $2,3$ lie in $(0,4)$.",
          "To confirm uniqueness, the symmetric system $s^{3}-39s+70=0$ has roots $s=5,-7,2$; the reality and location filters eliminate the other two, leaving only $\\boxed{p=-5,\\ q=6}$."
        ]
      }
    ],
    "remark": "Insight: this is the capstone — symmetric power sums fix the candidate coefficients, the discriminant prunes the non-real branch, and location-of-roots prunes the negative-root branch. All three instruments are needed; drop any one and a spurious answer slips through."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2026",
    "title": "A Triangle Hidden Inside a Discriminant",
    "difficulty": 3,
    "task": "Determine the bound on $\\lambda$.",
    "pyq": {
      "year": 2006,
      "paper": "1",
      "qno": "6"
    },
    "tags": [
      "real roots / discriminant",
      "triangle inequality",
      "2006"
    ],
    "figure": "",
    "statement": "Let $a,b,c$ be the sides of a triangle. No two of them are equal and $\\lambda\\in\\mathbb{R}$. If the roots of the equation $$x^2+2(a+b+c)\\,x+3\\lambda(ab+bc+ca)=0$$ are real, then which of the following holds?\n\n(A) $\\lambda<\\dfrac43$\n\n(B) $\\lambda>\\dfrac53$\n\n(C) $\\lambda\\in\\left(\\dfrac13,\\dfrac53\\right)$\n\n(D) $\\lambda\\in\\left(\\dfrac43,\\dfrac53\\right)$",
    "answer": "$\\boxed{\\lambda<\\dfrac43}$ (A)",
    "trap": "The discriminant condition alone gives $\\lambda\\le\\tfrac13\\cdot\\tfrac{a^2+b^2+c^2}{ab+bc+ca}+\\tfrac23$, which depends on $a,b,c$. Students freeze here, not realizing they must feed in the triangle inequality to turn a variable bound into a numerical one. The real question is: what is the supremum of $\\tfrac{a^2+b^2+c^2}{ab+bc+ca}$ over all triangles? A tempting error is to use the unconstrained bound $\\tfrac{a^2+b^2+c^2}{ab+bc+ca}\\ge1$ (which gives the wrong direction) instead of the triangle-forced upper bound $<2$.",
    "solutions": [
      {
        "name": "Discriminant $+$ triangle inequality",
        "steps": [
          "For real roots the discriminant must be non-negative: $$4(a+b+c)^2-4\\cdot 3\\lambda(ab+bc+ca)\\ge 0.$$",
          "Divide by $4$ and expand $(a+b+c)^2=a^2+b^2+c^2+2(ab+bc+ca)$: $$a^2+b^2+c^2+2(ab+bc+ca)\\ge 3\\lambda(ab+bc+ca).$$",
          "Solve for $\\lambda$ (note $ab+bc+ca>0$): $$\\lambda\\le \\frac{a^2+b^2+c^2}{3(ab+bc+ca)}+\\frac23.$$",
          "Now bound the ratio using the triangle inequalities. From $|a-b|<c$, $|b-c|<a$, $|c-a|<b$, square each: $a^2+b^2-2ab<c^2$, and cyclically. Adding the three: $$2(a^2+b^2+c^2)-2(ab+bc+ca)<a^2+b^2+c^2,$$ i.e. $a^2+b^2+c^2<2(ab+bc+ca)$, so $\\dfrac{a^2+b^2+c^2}{ab+bc+ca}<2$.",
          "Therefore $\\lambda\\le\\dfrac{a^2+b^2+c^2}{3(ab+bc+ca)}+\\dfrac23<\\dfrac{2}{3}+\\dfrac23=\\dfrac43.$",
          "Hence for the roots to be real we must have $\\lambda<\\dfrac43$, giving option (A)."
        ]
      },
      {
        "name": "Boundary/limiting-triangle check",
        "steps": [
          "The condition reduces to $\\lambda\\le \\dfrac{a^2+b^2+c^2}{3(ab+bc+ca)}+\\dfrac23$, so the answer is controlled by $\\displaystyle\\sup \\frac{a^2+b^2+c^2}{ab+bc+ca}$ over valid triangles.",
          "Consider the degenerate limit where the triangle collapses, e.g. $a=b=1$, $c\\to 2^{-}$ (the extreme allowed by $c<a+b$). Then $a^2+b^2+c^2\\to 1+1+4=6$ and $ab+bc+ca\\to 1+2+2=5$, so the ratio $\\to \\tfrac{6}{5}$... but this is not the supremum.",
          "Push toward a needle triangle: $a=b=1$, $c\\to 2^-$ gave $6/5$; instead take $a=1,\\ b\\to 0^+,\\ c\\to 1^-$ (a very thin sliver where $b$ is tiny and $a\\approx c$). Then $a^2+b^2+c^2\\to 2$ while $ab+bc+ca\\to 1$, so the ratio $\\to 2$. The supremum $2$ is approached but never attained by a genuine (non-degenerate) triangle.",
          "Thus $\\dfrac{a^2+b^2+c^2}{ab+bc+ca}\\in[1,2)$ strictly below $2$, so $\\lambda<\\dfrac13\\cdot 2+\\dfrac23=\\dfrac43$, and the bound $\\dfrac43$ cannot be reached.",
          "This confirms (A): $\\lambda<\\dfrac43$, and shows why $\\dfrac43$ is a strict (open) bound rather than $\\le$."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE 2006, Paper 1, Q6. The quadratic is a decoy — the entire problem is really the triangle inequality $a^2+b^2+c^2<2(ab+bc+ca)$ dressed up as a discriminant condition."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2026",
    "title": "Two Quadratics That Feed Each Other",
    "difficulty": 4,
    "task": "Find $a+b+c+d$.",
    "pyq": {
      "year": 2006,
      "paper": "1",
      "qno": "33"
    },
    "tags": [
      "theory of equations",
      "symmetric relations",
      "2006"
    ],
    "figure": "",
    "statement": "If the roots of the equation $x^2-10cx-11d=0$ are $a,b$ and those of $x^2-10ax-11b=0$ are $c,d$, then find the value of $a+b+c+d$, where $a,b,c,d$ are distinct real numbers.",
    "answer": "$\\boxed{1210}$",
    "trap": "The symmetry between the two quadratics tempts students to guess $a=c$, $b=d$ — but the problem states all four are distinct, so that shortcut is forbidden. The correct move is to use each number's own defining equation ($a$ is a root of the first, $c$ is a root of the second) and subtract, which cleanly kills the quadratic terms. Forgetting to reject the spurious root $a+c=-22$ (it forces $a=c$, violating distinctness) is the second trap.",
    "solutions": [
      {
        "name": "Vieta $+$ each number satisfies its own equation",
        "steps": [
          "By Vieta on $x^2-10cx-11d=0$ (roots $a,b$): $\\;a+b=10c$ and $ab=-11d$.",
          "By Vieta on $x^2-10ax-11b=0$ (roots $c,d$): $\\;c+d=10a$ and $cd=-11b$.",
          "Add the two sum-relations: $(a+b)+(c+d)=10c+10a$, so $b+d=9(a+c)$. $\\quad(\\ast)$",
          "Now use that $a$ is a root of the first equation and $c$ is a root of the second: $$a^2-10ca-11d=0,\\qquad c^2-10ac-11b=0.$$",
          "Subtract the second from the first: $$a^2-c^2-11d+11b=0\\;\\Rightarrow\\;(a-c)(a+c)=11(d-b).$$",
          "From $(\\ast)$, $d-b$ is awkward; instead add the two 'own-equation' relations: $$a^2+c^2-10ca-10ac-11(d+b)=0\\;\\Rightarrow\\;a^2+c^2-20ac=11(b+d).$$",
          "Substitute $b+d=9(a+c)$ from $(\\ast)$: $\\;a^2+c^2-20ac=99(a+c)$. Write $a^2+c^2=(a+c)^2-2ac$: $$(a+c)^2-22ac=99(a+c).\\quad(\\ast\\ast)$$",
          "Get $ac$ from the subtracted equation: $(a-c)(a+c)=11(d-b)$. Also subtract $(\\ast)$-type: from $a+b=10c$ and $c+d=10a$, subtract to get $a+b-c-d=10c-10a$, i.e. $(a-c)+(b-d)=10(c-a)$, so $b-d=-11(a-c)$, i.e. $d-b=11(a-c)$. Then $(a-c)(a+c)=11\\cdot 11(a-c)$; since $a\\ne c$, divide: $a+c=121$.",
          "(Consistency via $(\\ast\\ast)$: with $a+c=121$ one finds $ac=121$, and the rejected alternative root of the $(a+c)$ equation is $-22$, which forces $a=c$ and is discarded as $a,b,c,d$ are distinct.)",
          "Finally, $a+b+c+d=(a+b)+(c+d)=10c+10a=10(a+c)=10\\cdot 121=\\boxed{1210}$."
        ]
      },
      {
        "name": "Direct elimination for $a+c$",
        "steps": [
          "Write the two 'own-number' equations: $a^2=10ca+11d$ and $c^2=10ac+11b$.",
          "Subtract: $a^2-c^2=11(d-b)$, so $(a-c)(a+c)=11(d-b)$. $\\quad(1)$",
          "From the Vieta sums $a+b=10c$ and $c+d=10a$, subtract them: $(a+b)-(c+d)=10c-10a\\Rightarrow (a-c)+(b-d)=-10(a-c)$, hence $b-d=-11(a-c)$, i.e. $d-b=11(a-c)$. $\\quad(2)$",
          "Insert $(2)$ into $(1)$: $(a-c)(a+c)=11\\cdot 11\\,(a-c)=121(a-c)$.",
          "Since the four numbers are distinct, $a\\ne c$, so we may cancel $(a-c)$: $\\;a+c=121$.",
          "Add the Vieta sums: $(a+b)+(c+d)=10c+10a=10(a+c)$, and the left side is exactly $a+b+c+d$.",
          "Therefore $a+b+c+d=10(a+c)=10\\times 121=1210$."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE 2006, Paper 1, Q33. The elegant trick is that $a$ and $c$ each satisfy a *different* quadratic; subtracting those two scalar equations annihilates the quadratic terms and hands you $a+c$ in one line."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2026",
    "title": "Two quadratics sharing a constant: recover $r$",
    "difficulty": 3,
    "task": "Find the value of $r$.",
    "pyq": {
      "year": 2007,
      "paper": "1",
      "qno": "50"
    },
    "tags": [
      "roots of quadratic",
      "sum and product of roots",
      "relation between coefficients",
      "2007"
    ],
    "figure": "",
    "statement": "Let $\\alpha,\\beta$ be the roots of the equation $x^2-px+r=0$ and let $\\tfrac{\\alpha}{2},\\,2\\beta$ be the roots of the equation $x^2-qx+r=0$. Then the value of $r$ is\n\n(A) $\\tfrac{2}{9}(p-q)(2q-p)$\n\n(B) $\\tfrac{2}{9}(q-p)(2p-q)$\n\n(C) $\\tfrac{2}{9}(q-2p)(2q-p)$\n\n(D) $\\tfrac{2}{9}(2p-q)(2q-p)$",
    "answer": "$\\boxed{r=\\dfrac{2}{9}(2p-q)(2q-p)}$ — option (D)",
    "trap": "The two equations share the SAME constant term $r$, not the same linear term. A student who blindly writes $\\tfrac{\\alpha}{2}\\cdot 2\\beta = r$ gets $\\alpha\\beta=r$ — which is true and consistent, but gives no new information; the real leverage is that the two products being equal forces a relation, while the two sums ($\\alpha+\\beta=p$ and $\\tfrac{\\alpha}{2}+2\\beta=q$) are the equations that actually pin down $\\alpha$ and $\\beta$.",
    "solutions": [
      {
        "name": "Solve the two sum-relations for $\\alpha,\\beta$",
        "steps": [
          "From $x^2-px+r=0$: sum $\\alpha+\\beta=p$ and product $\\alpha\\beta=r$.",
          "From $x^2-qx+r=0$: sum $\\tfrac{\\alpha}{2}+2\\beta=q$ and product $\\tfrac{\\alpha}{2}\\cdot 2\\beta=\\alpha\\beta=r$ — consistent with the first product, so the products carry no extra data.",
          "Use the two sums as simultaneous linear equations in $\\alpha,\\beta$: $\\alpha+\\beta=p$ and $\\tfrac{\\alpha}{2}+2\\beta=q$.",
          "Multiply the second by $2$: $\\alpha+4\\beta=2q$. Subtract the first: $3\\beta=2q-p\\Rightarrow \\beta=\\dfrac{2q-p}{3}$.",
          "Then $\\alpha=p-\\beta=p-\\dfrac{2q-p}{3}=\\dfrac{3p-2q+p}{3}=\\dfrac{2(2p-q)}{3}$.",
          "Hence $r=\\alpha\\beta=\\dfrac{2(2p-q)}{3}\\cdot\\dfrac{2q-p}{3}=\\dfrac{2}{9}(2p-q)(2q-p)$, which is option (D)."
        ]
      },
      {
        "name": "Eliminate via the shared product $\\alpha\\beta=\\tfrac{\\alpha}{2}\\cdot 2\\beta$ and the sums",
        "steps": [
          "Write $S_1=\\alpha+\\beta=p$ for the first equation and $S_2=\\tfrac{\\alpha}{2}+2\\beta=q$ for the second.",
          "Add a convenient combination: $2S_2-S_1=(\\alpha+4\\beta)-(\\alpha+\\beta)=3\\beta$, so $3\\beta=2q-p$ and $\\beta=\\dfrac{2q-p}{3}$.",
          "Similarly $4S_1-2S_2=(4\\alpha+4\\beta)-(\\alpha+4\\beta)=3\\alpha$, so $3\\alpha=4p-2q$ and $\\alpha=\\dfrac{2(2p-q)}{3}$.",
          "Both equations have the same constant term $r$; since $r=\\alpha\\beta$ from the first equation, substitute the values found: $r=\\dfrac{2(2p-q)}{3}\\cdot\\dfrac{2q-p}{3}$.",
          "Simplify: $r=\\dfrac{2}{9}(2p-q)(2q-p)$. This matches option (D)."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE 2007, Paper 1, Q50. The equal constant terms are a decoy — the genuine constraints are the two sum-of-roots relations, which form a $2\\times2$ linear system in $\\alpha,\\beta$; the product is then read off."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2026",
    "title": "A shared root forces real roots: $(p^2-q)(b^2-ac)\\ge 0$",
    "difficulty": 4,
    "task": "Decide the truth of the two statements and pick the option.",
    "pyq": {
      "year": 2008,
      "paper": "2",
      "qno": "11"
    },
    "tags": [
      "quadratic equations",
      "roots",
      "discriminant",
      "2008"
    ],
    "figure": "",
    "statement": "Let $a,b,c,p,q$ be real numbers. Suppose $\\alpha,\\beta$ are the roots of the equation $x^2+2px+q=0$ and $\\alpha,\\tfrac{1}{\\beta}$ are the roots of the equation $ax^2+2bx+c=0$, where $\\beta^2\\notin\\{-1,0,1\\}$.\n\nSTATEMENT-1: $(p^2-q)(b^2-ac)\\ge 0$.\n\nSTATEMENT-2: $b\\ne pa$ or $c\\ne qa$.\n\n(A) STATEMENT-1 is True, STATEMENT-2 is True; STATEMENT-2 is a correct explanation for STATEMENT-1\n\n(B) STATEMENT-1 is True, STATEMENT-2 is True; STATEMENT-2 is NOT a correct explanation for STATEMENT-1\n\n(C) STATEMENT-1 is True, STATEMENT-2 is False\n\n(D) STATEMENT-1 is False, STATEMENT-2 is True",
    "answer": "(B)",
    "trap": "The two quadratics share the root $\\alpha$. If both discriminants were negative, their (non-real) roots would come in conjugate pairs, and a shared root would force one equation to be a real multiple of the other — i.e. $b=pa$ and $c=qa$ — which then makes $\\tfrac{1}{\\beta}=\\beta$, contradicting $\\beta^2\\ne 1$. So at least one discriminant is $\\ge 0$; but a strong student may wrongly conclude Statement-2 therefore EXPLAINS Statement-1, when in fact both discriminants turn out non-negative, so Statement-2 is a true-but-not-causal companion fact.",
    "solutions": [
      {
        "name": "Conjugate-root elimination of the imaginary case",
        "steps": [
          "$\\alpha$ is a common root of $x^2+2px+q=0$ and $ax^2+2bx+c=0$; here $p,q,a,b,c$ are all real.",
          "Suppose, for contradiction, that $x^2+2px+q=0$ had non-real roots. Then $\\alpha,\\beta$ are complex conjugates, so $\\beta=\\bar\\alpha$ and $|\\alpha|^2=\\alpha\\beta=q$.",
          "The second equation also has real coefficients, and shares the real-coefficient root $\\alpha$; its other root is $\\tfrac{1}{\\beta}$. For a real-coefficient quadratic a non-real root's partner must be its conjugate, so $\\tfrac{1}{\\beta}=\\bar\\alpha=\\beta$, giving $\\beta^2=1$.",
          "But we are told $\\beta^2\\notin\\{-1,0,1\\}$, so $\\beta^2=1$ is impossible. Hence $x^2+2px+q=0$ has REAL roots, i.e. discriminant $\\ge 0$: $(2p)^2-4q\\ge 0\\Rightarrow p^2-q\\ge 0$.",
          "Since $\\alpha$ is real, and $\\alpha,\\tfrac{1}{\\beta}$ are real, the second equation $ax^2+2bx+c=0$ also has real roots, so its discriminant $\\ge 0$: $(2b)^2-4ac\\ge 0\\Rightarrow b^2-ac\\ge 0$.",
          "Both factors are $\\ge 0$, so $(p^2-q)(b^2-ac)\\ge 0$. STATEMENT-1 is TRUE.",
          "STATEMENT-2 claims $b\\ne pa$ or $c\\ne qa$. If instead $b=pa$ AND $c=qa$, then $ax^2+2bx+c=a(x^2+2px+q)$, so the second equation has the SAME roots $\\alpha,\\beta$ as the first; its roots being $\\alpha,\\tfrac{1}{\\beta}$ then force $\\tfrac{1}{\\beta}=\\beta$, i.e. $\\beta^2=1$ — again excluded. So we cannot have both $b=pa$ and $c=qa$; STATEMENT-2 is TRUE.",
          "STATEMENT-1 is proved directly from the two discriminants; it does not rely on the inequality in STATEMENT-2. So STATEMENT-2 is a true statement but NOT a correct explanation of STATEMENT-1. Answer: (B)."
        ]
      },
      {
        "name": "Vieta bookkeeping on the shared root",
        "steps": [
          "First equation: $\\alpha+\\beta=-2p$, $\\alpha\\beta=q$. Second equation: $\\alpha+\\tfrac{1}{\\beta}=-\\dfrac{2b}{a}$, $\\alpha\\cdot\\tfrac{1}{\\beta}=\\dfrac{c}{a}$ (assume $a\\ne 0$; the degenerate $a=0$ case is handled separately and does not change the conclusion).",
          "Discriminant of the first (all coefficients real): $D_1=4p^2-4q=4(p^2-q)$. Discriminant of the second: $D_2=4b^2-4ac=4(b^2-ac)$. So $D_1D_2=16(p^2-q)(b^2-ac)$, and the sign of $(p^2-q)(b^2-ac)$ equals the sign of $D_1D_2$.",
          "Key claim: $D_1$ and $D_2$ cannot both be negative. If $D_1<0$, the roots $\\alpha,\\beta$ are non-real conjugates; the second real-coefficient quadratic shares $\\alpha$, forcing its partner $\\tfrac1\\beta=\\bar\\alpha=\\beta$, i.e. $\\beta^2=1$ — excluded. So $D_1\\ge 0$.",
          "With $D_1\\ge 0$, $\\alpha$ (and $\\beta$) are real, hence $\\tfrac{1}{\\beta}$ is real, hence the second quadratic has real roots and $D_2\\ge 0$.",
          "Therefore $D_1\\ge 0$ and $D_2\\ge 0$, so $D_1D_2\\ge 0$ and $(p^2-q)(b^2-ac)\\ge 0$: STATEMENT-1 TRUE.",
          "For STATEMENT-2, note $b=pa$ and $c=qa$ simultaneously would make the second quadratic a scalar multiple $a(x^2+2px+q)$ of the first, so both equations would have identical root sets $\\{\\alpha,\\beta\\}$. Matching with $\\{\\alpha,\\tfrac1\\beta\\}$ gives $\\tfrac1\\beta=\\beta\\Rightarrow\\beta^2=1$, contradicting the hypothesis. Hence NOT both equalities hold, so $b\\ne pa$ or $c\\ne qa$: STATEMENT-2 TRUE.",
          "The proof of STATEMENT-1 used only the discriminant/conjugate argument, independent of STATEMENT-2's inequality. So STATEMENT-2 does not explain STATEMENT-1. Correct choice: (B)."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE 2008, Paper 2, Q11. The heart is a reality argument: real coefficients plus a shared root make the imaginary case collapse to $\\beta^2=1$, which the exclusion $\\beta^2\\notin\\{-1,0,1\\}$ forbids — so both discriminants are non-negative and their product is $\\ge 0$."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2026",
    "title": "Both roots pinned past $x=4$",
    "difficulty": 4,
    "task": "Find the smallest such $k$.",
    "pyq": {
      "year": 2009,
      "paper": "2",
      "qno": "35"
    },
    "tags": [
      "location of roots",
      "discriminant",
      "roots at least a given value",
      "2009"
    ],
    "figure": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" font-size=\"12\"><line x1=\"20\" y1=\"170\" x2=\"300\" y2=\"170\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"/><line x1=\"40\" y1=\"20\" x2=\"40\" y2=\"185\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"/><text x=\"302\" y=\"174\" fill=\"var(--ink2)\">x</text><line x1=\"120\" y1=\"30\" x2=\"120\" y2=\"185\" stroke=\"var(--ink2)\" stroke-width=\"1\" stroke-dasharray=\"4 3\"/><text x=\"108\" y=\"198\" fill=\"var(--ink2)\">x=4</text><path d=\"M60 40 Q 190 260 300 60\" fill=\"none\" stroke=\"var(--gold)\" stroke-width=\"2\"/><circle cx=\"150\" cy=\"170\" r=\"3\" fill=\"var(--gold)\"/><circle cx=\"258\" cy=\"170\" r=\"3\" fill=\"var(--gold)\"/><text x=\"140\" y=\"162\" fill=\"var(--ink2)\">x₁</text><text x=\"250\" y=\"162\" fill=\"var(--ink2)\">x₂</text><text x=\"132\" y=\"58\" fill=\"var(--ink2)\">f(4)≥0</text></svg>",
    "statement": "The smallest value of $k$, for which both the roots of the equation $$x^2-8kx+16(k^2-k+1)=0$$ are real, distinct and have values at least $4$, is ______ .",
    "answer": "$\\boxed{2}$",
    "trap": "Students demand only the discriminant $>0$ (which gives $k>1$) and stop, or they force $f(4)>0$ with a strict sign and lose the boundary case $k=2$ where the smaller root equals exactly $4$. \"At least $4$\" is a closed condition, so the vertex/value inequalities must be non-strict — yet the roots being *distinct* is what stays strict.",
    "solutions": [
      {
        "name": "Location of roots: sign of $f$, discriminant, vertex",
        "steps": [
          "Let $f(x)=x^2-8kx+16(k^2-k+1)$, an upward parabola. Both roots real and distinct means the discriminant is strictly positive.",
          "Discriminant $= (8k)^2-4\\cdot16(k^2-k+1)=64k^2-64k^2+64k-64=64(k-1)>0\\Rightarrow k>1$.",
          "\"Both roots $\\ge 4$\" needs three simultaneous conditions for an upward parabola: (i) discriminant $>0$, (ii) $f(4)\\ge 0$ (the point $4$ lies at or left of the smaller root), (iii) the vertex abscissa $x_v=\\tfrac{8k}{2}=4k>4$.",
          "Compute $f(4)=16-32k+16(k^2-k+1)=16k^2-48k+32=16(k-1)(k-2)$. So $f(4)\\ge 0\\Rightarrow k\\le 1$ or $k\\ge 2$.",
          "Condition (iii): $4k>4\\Rightarrow k>1$. Intersect all three: $k>1$ and ($k\\le1$ or $k\\ge2$) and $k>1$ $\\Rightarrow k\\ge 2$.",
          "Hence the admissible set is $[2,\\infty)$ and the smallest value is $k=2$."
        ]
      },
      {
        "name": "Solve the roots explicitly and bound the smaller one",
        "steps": [
          "The roots are $x=\\dfrac{8k\\pm\\sqrt{64(k-1)}}{2}=4k\\pm 4\\sqrt{k-1}$, requiring $k>1$ for them to be real and distinct.",
          "The smaller root is $x_{\\min}=4k-4\\sqrt{k-1}$. The requirement \"both roots $\\ge 4$\" reduces to $x_{\\min}\\ge 4$.",
          "$4k-4\\sqrt{k-1}\\ge 4\\iff k-1\\ge\\sqrt{k-1}$. Put $u=\\sqrt{k-1}\\ge 0$: the inequality is $u^2\\ge u\\iff u(u-1)\\ge 0\\iff u\\ge 1$ (since $u\\ge0$).",
          "$u\\ge 1\\iff \\sqrt{k-1}\\ge 1\\iff k-1\\ge 1\\iff k\\ge 2$.",
          "At $k=2$: roots are $8\\pm4=4,12$, both $\\ge 4$ and distinct — valid. So the least $k$ is $2$.",
          "For $1<k<2$ the smaller root $4k-4\\sqrt{k-1}<4$, confirming $k=2$ is the minimum."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE / JEE Advanced 2009, Paper 2, Q35. The whole difficulty lives in the *closed* boundary: at the extremal $k=2$ the smaller root sits exactly on the wall $x=4$, so $f(4)=0$ — using a strict inequality there silently deletes the answer."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2026",
    "title": "The equation with roots $\\tfrac{\\alpha}{\\beta},\\tfrac{\\beta}{\\alpha}$",
    "difficulty": 3,
    "task": "Identify the quadratic equation.",
    "pyq": {
      "year": 2010,
      "paper": "1",
      "qno": "35"
    },
    "tags": [
      "roots and coefficients",
      "symmetric functions",
      "complex numbers",
      "2010"
    ],
    "figure": "",
    "statement": "Let $p$ and $q$ be real numbers such that $p\\neq 0$, $p^3\\neq q$ and $p^3\\neq -q$. If $\\alpha$ and $\\beta$ are nonzero complex numbers satisfying $\\alpha+\\beta=-p$ and $\\alpha^3+\\beta^3=q$, then a quadratic equation having $\\dfrac{\\alpha}{\\beta}$ and $\\dfrac{\\beta}{\\alpha}$ as its roots is\n\n(A) $(p^3+q)x^2-(p^3+2q)x+(p^3+q)=0$\n\n(B) $(p^3+q)x^2-(p^3-2q)x+(p^3+q)=0$\n\n(C) $(p^3-q)x^2-(5p^3-2q)x+(p^3-q)=0$\n\n(D) $(p^3-q)x^2-(5p^3+2q)x+(p^3-q)=0$",
    "answer": "(B)",
    "trap": "The product of the new roots $\\dfrac{\\alpha}{\\beta}\\cdot\\dfrac{\\beta}{\\alpha}=1$ is *forced* — it is exactly $1$, not $\\dfrac{p^3+q}{p^3+q}$. Many candidates never notice that equating the constant and leading coefficients is precisely the statement \"product $=1$\", so they mis-scale the equation or pick (A)/(D) whose middle terms come from a wrong $\\alpha\\beta$.",
    "solutions": [
      {
        "name": "Extract $\\alpha\\beta$ from the cube identity, then build the equation",
        "steps": [
          "Use $\\alpha^3+\\beta^3=(\\alpha+\\beta)^3-3\\alpha\\beta(\\alpha+\\beta)$. With $\\alpha+\\beta=-p$: $q=(-p)^3-3\\alpha\\beta(-p)=-p^3+3p\\,\\alpha\\beta$.",
          "Solve for the product: $3p\\,\\alpha\\beta=p^3+q\\Rightarrow \\alpha\\beta=\\dfrac{p^3+q}{3p}$ (well-defined since $p\\neq 0$).",
          "For the new roots $r_1=\\tfrac{\\alpha}{\\beta},\\,r_2=\\tfrac{\\beta}{\\alpha}$: product $r_1r_2=\\dfrac{\\alpha}{\\beta}\\cdot\\dfrac{\\beta}{\\alpha}=1$.",
          "Sum $r_1+r_2=\\dfrac{\\alpha^2+\\beta^2}{\\alpha\\beta}=\\dfrac{(\\alpha+\\beta)^2-2\\alpha\\beta}{\\alpha\\beta}=\\dfrac{p^2-2\\cdot\\frac{p^3+q}{3p}}{\\frac{p^3+q}{3p}}$.",
          "Multiply numerator and denominator by $3p$: $=\\dfrac{3p^3-2(p^3+q)}{p^3+q}=\\dfrac{p^3-2q}{p^3+q}$.",
          "A quadratic with these roots is $x^2-(r_1+r_2)x+r_1r_2=0$, i.e. $x^2-\\dfrac{p^3-2q}{p^3+q}\\,x+1=0$. Clear the denominator (allowed since $p^3+q\\neq0$): $(p^3+q)x^2-(p^3-2q)x+(p^3+q)=0$ — option (B)."
        ]
      },
      {
        "name": "Reciprocal-root symmetry pins the palindromic form",
        "steps": [
          "Since $r_2=1/r_1$, the two new roots are reciprocals of each other, so the required quadratic is *palindromic*: its constant and leading coefficients must be equal. This alone eliminates (C) and (D)? No — check: (C),(D) also have equal end coefficients $p^3-q$, so keep all four and use the sum.",
          "The middle coefficient equals $-(r_1+r_2)$ times the (equal) end coefficient. So we only need the sum $r_1+r_2=\\dfrac{\\alpha}{\\beta}+\\dfrac{\\beta}{\\alpha}$ and to know which end coefficient, $p^3+q$ or $p^3-q$, is correct.",
          "From $q=-p^3+3p\\,\\alpha\\beta$ we get $\\alpha\\beta=\\dfrac{p^3+q}{3p}$, so the natural denominator that clears everything is $p^3+q$, singling out family (A)/(B) over (C)/(D).",
          "Now $r_1+r_2=\\dfrac{(\\alpha+\\beta)^2}{\\alpha\\beta}-2=\\dfrac{p^2}{\\frac{p^3+q}{3p}}-2=\\dfrac{3p^3}{p^3+q}-2=\\dfrac{3p^3-2(p^3+q)}{p^3+q}=\\dfrac{p^3-2q}{p^3+q}$.",
          "Thus the middle coefficient is $-(p^3+q)\\cdot\\dfrac{p^3-2q}{p^3+q}=-(p^3-2q)$, giving $(p^3+q)x^2-(p^3-2q)x+(p^3+q)=0$.",
          "This is option (B); the guarding conditions $p^3\\neq\\pm q$ keep both the leading coefficient and $\\alpha\\beta$ nonzero, so no root is lost."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE / JEE Advanced 2010, Paper 1, Q35. Reciprocal roots force a palindromic (self-reversing) quadratic — spot that the product is a clean $1$ and the entire problem collapses to computing one symmetric sum."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2026",
    "title": "Counting the real roots of $x^4-4x^3+12x^2+x-1$",
    "difficulty": 3,
    "task": "Find the number of distinct real roots.",
    "pyq": {
      "year": 2011,
      "paper": "2",
      "qno": "36"
    },
    "tags": [
      "number of real roots",
      "Rolle's theorem",
      "theory of equations",
      "2011"
    ],
    "figure": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" font-size=\"12\"><line x1=\"20\" y1=\"150\" x2=\"300\" y2=\"150\" stroke=\"var(--ink3)\" stroke-width=\"1\"/><line x1=\"150\" y1=\"20\" x2=\"150\" y2=\"200\" stroke=\"var(--ink3)\" stroke-width=\"1\"/><text x=\"302\" y=\"146\" fill=\"var(--ink2)\">x</text><text x=\"156\" y=\"28\" fill=\"var(--ink2)\">y</text><path d=\"M 78 40 C 105 120 130 170 150 165 C 178 158 205 100 240 40\" fill=\"none\" stroke=\"var(--gold)\" stroke-width=\"2\"/><circle cx=\"120\" cy=\"150\" r=\"3\" fill=\"var(--gold)\"/><circle cx=\"163\" cy=\"150\" r=\"3\" fill=\"var(--gold)\"/><text x=\"104\" y=\"168\" fill=\"var(--ink2)\">r₁&lt;0</text><text x=\"160\" y=\"168\" fill=\"var(--ink2)\">r₂&gt;0</text><text x=\"152\" y=\"163\" fill=\"var(--ink2)\">O</text><text x=\"40\" y=\"120\" fill=\"var(--ink2)\">f(0)=−1</text></svg>",
    "statement": "Find the number of distinct real roots of the equation $$x^4-4x^3+12x^2+x-1=0.$$",
    "answer": "$\\boxed{2}$",
    "trap": "A degree-4 equation invites you to hunt for four roots or to factor blindly. The subtle move is not to solve it at all: bounding the number of turning points through convexity ($f''>0$) caps the real roots at two before you ever look for their values.",
    "solutions": [
      {
        "name": "Convexity cap via $f''>0$ (Rolle bound)",
        "steps": [
          "Let $f(x)=x^4-4x^3+12x^2+x-1$.",
          "Differentiate twice: $f'(x)=4x^3-12x^2+24x+1$ and $f''(x)=12x^2-24x+24=12(x^2-2x+2)$.",
          "Complete the square: $f''(x)=12\\big[(x-1)^2+1\\big]>0$ for every real $x$.",
          "Since $f''>0$ everywhere, $f'$ is strictly increasing, so $f'$ has exactly one real zero; hence $f$ has at most one turning point (a single minimum).",
          "A differentiable function with at most one critical point can cross any horizontal line at most twice — by Rolle's theorem, between two roots of $f$ there must lie a root of $f'$, and $f'$ offers only one such point. So $f$ has at most $2$ real roots.",
          "Now show there are at least $2$. Evaluate $f(0)=-1<0$, while $f(x)\\to+\\infty$ as $x\\to+\\infty$ and as $x\\to-\\infty$ (leading term $x^4$).",
          "By the Intermediate Value Theorem there is a root in $(-\\infty,0)$ and another in $(0,\\infty)$.",
          "At least $2$ and at most $2$ real roots force exactly $\\boxed{2}$ distinct real roots."
        ]
      },
      {
        "name": "Sum-of-squares decomposition",
        "steps": [
          "Try to write $f$ as a sum of a perfect square and a low-degree remainder that pins down the sign.",
          "Group $x^4-4x^3+12x^2 = (x^2-2x)^2 + 8x^2$, since $(x^2-2x)^2=x^4-4x^3+4x^2$ and we need $12x^2$, leaving $+8x^2$.",
          "Thus $f(x)=(x^2-2x)^2+8x^2+x-1$.",
          "The tail $8x^2+x-1$ has discriminant $1+32=33>0$, so it is negative only on a short interval $\\big(\\tfrac{-1-\\sqrt{33}}{16},\\tfrac{-1+\\sqrt{33}}{16}\\big)\\approx(-0.42,0.30)$; elsewhere $f\\ge 0$ is guaranteed away from roots.",
          "So every real root must lie inside that short interval near the origin, where $(x^2-2x)^2$ is small — confirming the roots straddle $0$ (one just below, one just above), consistent with $f(0)=-1<0$.",
          "Since $f$ is strictly convex (from $f''=12[(x-1)^2+1]>0$), it dips below zero on exactly one interval and returns, crossing the axis exactly twice.",
          "Hence the equation has exactly $\\boxed{2}$ distinct real roots."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE / JEE Advanced 2011, Paper 2, Q36. The whole problem collapses once you notice $f''>0$ globally — a quartic that is strictly convex behaves like an upward parabola and can meet the axis at most twice, so you never need to compute a single root."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2026",
    "title": "Where $\\alpha x^2-x+\\alpha=0$ has close roots: $|x_1-x_2|<1$",
    "difficulty": 3,
    "task": "Identify which intervals lie inside $S$.",
    "pyq": {
      "year": 2015,
      "paper": "2",
      "qno": "50"
    },
    "tags": [
      "discriminant",
      "difference of roots",
      "inequalities on roots",
      "2015"
    ],
    "figure": "",
    "statement": "Let $S$ be the set of all non-zero real numbers $\\alpha$ such that the quadratic equation $\\alpha x^2-x+\\alpha=0$ has two distinct real roots $x_1$ and $x_2$ satisfying the inequality $|x_1-x_2|<1$. Which of the following intervals is (are) a subset(s) of $S$?\n\n(A) $\\left(-\\dfrac12,\\,-\\dfrac{1}{\\sqrt5}\\right)$\n\n(B) $\\left(-\\dfrac{1}{\\sqrt5},\\,0\\right)$\n\n(C) $\\left(0,\\,\\dfrac{1}{\\sqrt5}\\right)$\n\n(D) $\\left(\\dfrac{1}{\\sqrt5},\\,\\dfrac12\\right)$",
    "answer": "(A), (D)",
    "trap": "Two conditions pull in opposite directions and a strong student often enforces only one. The distinct-roots condition demands $|\\alpha|<\\tfrac12$ (small $|\\alpha|$), while the closeness condition $|x_1-x_2|<1$ demands $|\\alpha|>\\tfrac1{\\sqrt5}$ (not-too-small $|\\alpha|$). Keeping only the discriminant, or forgetting to take the absolute value of $\\alpha$, sweeps in the wrong intervals (B) and (C).",
    "solutions": [
      {
        "name": "$(x_1-x_2)^2$ via sum and product of roots",
        "steps": [
          "For $\\alpha x^2-x+\\alpha=0$ (with $\\alpha\\neq0$), the roots satisfy $x_1+x_2=\\dfrac{1}{\\alpha}$ and $x_1x_2=\\dfrac{\\alpha}{\\alpha}=1$.",
          "Distinct real roots require discriminant $>0$: $(-1)^2-4\\alpha\\cdot\\alpha>0\\Rightarrow 1-4\\alpha^2>0\\Rightarrow |\\alpha|<\\tfrac12$.",
          "Compute the squared gap: $(x_1-x_2)^2=(x_1+x_2)^2-4x_1x_2=\\dfrac{1}{\\alpha^2}-4=\\dfrac{1-4\\alpha^2}{\\alpha^2}$.",
          "Impose $|x_1-x_2|<1$, i.e. $(x_1-x_2)^2<1$: $\\dfrac{1-4\\alpha^2}{\\alpha^2}<1$.",
          "Since $\\alpha^2>0$, multiply through: $1-4\\alpha^2<\\alpha^2\\Rightarrow 1<5\\alpha^2\\Rightarrow \\alpha^2>\\tfrac15\\Rightarrow |\\alpha|>\\tfrac1{\\sqrt5}$.",
          "Combine both conditions: $\\dfrac1{\\sqrt5}<|\\alpha|<\\dfrac12$, i.e. $\\alpha\\in\\left(-\\tfrac12,-\\tfrac1{\\sqrt5}\\right)\\cup\\left(\\tfrac1{\\sqrt5},\\tfrac12\\right)$.",
          "This is exactly $S$. Intervals (A) and (D) are subsets of $S$; (B) and (C) lie in the forbidden band $|\\alpha|<\\tfrac1{\\sqrt5}$ (where roots are too far apart), so they are not.",
          "Hence the answer is (A), (D)."
        ]
      },
      {
        "name": "Direct root formula",
        "steps": [
          "Solve explicitly: $x=\\dfrac{1\\pm\\sqrt{1-4\\alpha^2}}{2\\alpha}$, valid and real-distinct only when $1-4\\alpha^2>0\\Rightarrow|\\alpha|<\\tfrac12$.",
          "The two roots differ by $x_1-x_2=\\dfrac{2\\sqrt{1-4\\alpha^2}}{2\\alpha}=\\dfrac{\\sqrt{1-4\\alpha^2}}{\\alpha}$.",
          "Therefore $|x_1-x_2|=\\dfrac{\\sqrt{1-4\\alpha^2}}{|\\alpha|}$.",
          "Require $|x_1-x_2|<1$: $\\dfrac{\\sqrt{1-4\\alpha^2}}{|\\alpha|}<1\\Rightarrow \\sqrt{1-4\\alpha^2}<|\\alpha|$.",
          "Both sides positive, so square: $1-4\\alpha^2<\\alpha^2\\Rightarrow 5\\alpha^2>1\\Rightarrow |\\alpha|>\\tfrac1{\\sqrt5}$.",
          "Intersecting with the distinctness band $|\\alpha|<\\tfrac12$ gives $\\tfrac1{\\sqrt5}<|\\alpha|<\\tfrac12$.",
          "So $S=\\left(-\\tfrac12,-\\tfrac1{\\sqrt5}\\right)\\cup\\left(\\tfrac1{\\sqrt5},\\tfrac12\\right)$, and the intervals contained in $S$ are (A) and (D)."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE / JEE Advanced 2015, Paper 2, Q50. The product of roots is pinned to $1$ regardless of $\\alpha$, so the entire problem reduces to squeezing $|\\alpha|$ between the discriminant bound $\\tfrac12$ and the gap bound $\\tfrac1{\\sqrt5}$ — a clean two-sided inequality on $|\\alpha|$."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2026",
    "title": "Twin Quadratics with $\\sec\\theta$ and $\\tan\\theta$",
    "difficulty": 3,
    "task": "Find the value of $\\alpha_1+\\beta_2$.",
    "pyq": {
      "year": 2016,
      "paper": "1",
      "qno": "37"
    },
    "tags": [
      "nature and roots of quadratics",
      "trigonometric coefficients",
      "2016"
    ],
    "figure": "",
    "statement": "Let $-\\dfrac{\\pi}{6} < \\theta < -\\dfrac{\\pi}{12}$. Suppose $\\alpha_1$ and $\\beta_1$ are the roots of the equation $x^2 - 2x\\sec\\theta + 1 = 0$, and $\\alpha_2$ and $\\beta_2$ are the roots of the equation $x^2 + 2x\\tan\\theta - 1 = 0$. If $\\alpha_1 > \\beta_1$ and $\\alpha_2 > \\beta_2$, then $\\alpha_1 + \\beta_2$ equals\n\n(A) $2(\\sec\\theta - \\tan\\theta)$\n(B) $2\\sec\\theta$\n(C) $-2\\tan\\theta$\n(D) $0$",
    "answer": "$\\boxed{-2\\tan\\theta}$ — option (C)",
    "trap": "The quadratic formula hands you $\\alpha,\\beta = \\sec\\theta \\pm |\\tan\\theta|$ and $-\\tan\\theta \\pm |\\sec\\theta|$ — but which sign is the *larger* root depends entirely on the signs of $\\sec\\theta$ and $\\tan\\theta$. On $-\\tfrac{\\pi}{6}<\\theta<-\\tfrac{\\pi}{12}$ (a slice of the fourth quadrant) we have $\\tan\\theta<0$ and $\\sec\\theta>0$, so ordering $\\alpha_1>\\beta_1$ flips $\\pm$ from the naive reading. A student who forgets to test the sign of $\\tan\\theta$ picks the wrong root and lands on $+2\\tan\\theta$.",
    "solutions": [
      {
        "name": "Direct roots via the quadratic formula",
        "steps": [
          "For $x^2 - 2x\\sec\\theta + 1 = 0$, the discriminant is $4\\sec^2\\theta - 4 = 4\\tan^2\\theta$, so the roots are $x = \\sec\\theta \\pm \\sqrt{\\tan^2\\theta} = \\sec\\theta \\pm |\\tan\\theta|$.",
          "On the interval $-\\tfrac{\\pi}{6}<\\theta<-\\tfrac{\\pi}{12}$ (fourth-quadrant angles) we have $\\cos\\theta>0$ so $\\sec\\theta>0$, and $\\sin\\theta<0$ so $\\tan\\theta<0$; hence $|\\tan\\theta| = -\\tan\\theta$.",
          "Thus the roots are $\\sec\\theta - \\tan\\theta$ and $\\sec\\theta + \\tan\\theta$. Since $-\\tan\\theta>0$, the larger root is $\\alpha_1 = \\sec\\theta - \\tan\\theta$.",
          "For $x^2 + 2x\\tan\\theta - 1 = 0$, the discriminant is $4\\tan^2\\theta + 4 = 4\\sec^2\\theta$, so the roots are $x = -\\tan\\theta \\pm |\\sec\\theta| = -\\tan\\theta \\pm \\sec\\theta$ (using $\\sec\\theta>0$).",
          "The two roots are $-\\tan\\theta + \\sec\\theta$ and $-\\tan\\theta - \\sec\\theta$; since $\\sec\\theta>0$, the smaller root is $\\beta_2 = -\\tan\\theta - \\sec\\theta$.",
          "Add: $\\alpha_1 + \\beta_2 = (\\sec\\theta - \\tan\\theta) + (-\\tan\\theta - \\sec\\theta) = -2\\tan\\theta.$"
        ]
      },
      {
        "name": "Sum-of-roots bookkeeping (Vieta)",
        "steps": [
          "By Vieta, $\\alpha_1+\\beta_1 = 2\\sec\\theta$ and $\\alpha_2+\\beta_2 = -2\\tan\\theta$. The target $\\alpha_1+\\beta_2$ is the *larger* root of the first plus the *smaller* root of the second, so we must peel off the half that is not wanted from each sum.",
          "For the first equation, $\\alpha_1 = \\tfrac{(\\alpha_1+\\beta_1)}{2} + \\tfrac{(\\alpha_1-\\beta_1)}{2} = \\sec\\theta + \\tfrac12\\sqrt{4\\tan^2\\theta}= \\sec\\theta + |\\tan\\theta| = \\sec\\theta - \\tan\\theta$, since $\\tan\\theta<0$ on the given interval.",
          "For the second equation, $\\beta_2 = \\tfrac{(\\alpha_2+\\beta_2)}{2} - \\tfrac{(\\alpha_2-\\beta_2)}{2} = -\\tan\\theta - \\tfrac12\\sqrt{4\\sec^2\\theta} = -\\tan\\theta - |\\sec\\theta| = -\\tan\\theta - \\sec\\theta$, since $\\sec\\theta>0$.",
          "Adding the two: $\\alpha_1 + \\beta_2 = (\\sec\\theta - \\tan\\theta) + (-\\tan\\theta - \\sec\\theta) = -2\\tan\\theta.$",
          "The $\\sec\\theta$ terms cancel while the $\\tan\\theta$ terms reinforce, giving $-2\\tan\\theta$, i.e. option (C)."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE / JEE Advanced 2016, Paper 1, Q37. The whole difficulty is bookkeeping the *sign* of $\\sec\\theta$ and $\\tan\\theta$ on the quadrant $-\\tfrac{\\pi}{6}<\\theta<-\\tfrac{\\pi}{12}$ — the algebra of the roots is trivial once $|\\tan\\theta|=-\\tan\\theta$ and $|\\sec\\theta|=\\sec\\theta$ are fixed."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2026",
    "title": "The Golden Recurrence: $a_n=p\\alpha^n+q\\beta^n$",
    "difficulty": 3,
    "task": "Express $a_{12}$ in terms of earlier terms.",
    "pyq": {
      "year": 2017,
      "paper": "2",
      "qno": "53"
    },
    "tags": [
      "roots recurrence",
      "theory of equations",
      "2017"
    ],
    "figure": "",
    "statement": "Let $p,q$ be integers and let $\\alpha,\\beta$ be the roots of the equation $x^2 - x - 1 = 0$, where $\\alpha \\neq \\beta$. For $n = 0, 1, 2, \\dots$, let $a_n = p\\alpha^n + q\\beta^n$. (FACT: if $a$ and $b$ are rational numbers and $a + b\\sqrt{5} = 0$, then $a = 0 = b$.)\n\nThen $a_{12}$ equals\n\n(A) $a_{11} - a_{10}$\n(B) $a_{11} + a_{10}$\n(C) $2a_{11} + a_{10}$\n(D) $a_{11} + 2a_{10}$",
    "answer": "$\\boxed{a_{11} + a_{10}}$ — option (B)",
    "trap": "It is tempting to reach for the FACT and expand $\\alpha^{12},\\beta^{12}$ explicitly, drowning in $\\sqrt5$ arithmetic. The point is structural: because $\\alpha$ and $\\beta$*individually* satisfy $x^2=x+1$, the sequence $a_n$ inherits the Fibonacci recurrence regardless of the constants $p,q$. A student who treats $p,q$ as an obstacle rather than passengers riding the recurrence overcomplicates a one-line problem.",
    "solutions": [
      {
        "name": "Roots satisfy the defining equation (recurrence)",
        "steps": [
          "Since $\\alpha$ is a root of $x^2 - x - 1 = 0$, we have $\\alpha^2 = \\alpha + 1$, and multiplying by $\\alpha^{n-2}$ gives $\\alpha^n = \\alpha^{n-1} + \\alpha^{n-2}$ for every $n\\ge 2$.",
          "Identically $\\beta$ is a root, so $\\beta^n = \\beta^{n-1} + \\beta^{n-2}$.",
          "Multiply the $\\alpha$ relation by $p$ and the $\\beta$ relation by $q$, then add: $p\\alpha^n + q\\beta^n = (p\\alpha^{n-1}+q\\beta^{n-1}) + (p\\alpha^{n-2}+q\\beta^{n-2})$.",
          "By the definition $a_n = p\\alpha^n + q\\beta^n$, this reads $a_n = a_{n-1} + a_{n-2}$ for all $n\\ge 2$ — the Fibonacci-type recurrence, holding for any $p,q$.",
          "Setting $n = 12$: $a_{12} = a_{11} + a_{10}$, which is option (B)."
        ]
      },
      {
        "name": "Newton's identity / power-sum recurrence",
        "steps": [
          "For a monic quadratic $x^2 - sx + t = 0$ with roots $\\alpha,\\beta$, the power sums $S_n = \\alpha^n + \\beta^n$ obey $S_n = s\\,S_{n-1} - t\\,S_{n-2}$ (Newton's identity). Here $s = \\alpha+\\beta = 1$ and $t = \\alpha\\beta = -1$.",
          "So $S_n = 1\\cdot S_{n-1} - (-1)S_{n-2} = S_{n-1} + S_{n-2}$; the pure power sums already satisfy the Fibonacci recurrence.",
          "The given sequence is a linear combination $a_n = p\\alpha^n + q\\beta^n$. Any linear combination of two solutions of a linear recurrence is again a solution, because the recurrence operator is linear.",
          "Hence $a_n$ satisfies the same relation $a_n = a_{n-1} + a_{n-2}$; the weights $p,q$ are just the initial data $a_0 = p+q$, $a_1 = p\\alpha+q\\beta$.",
          "Therefore $a_{12} = a_{11} + a_{10}$ — option (B)."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE / JEE Advanced 2017, Paper 2, Q53 (Paragraph 2). Key insight: a sequence built from powers of the roots of $x^2-x-1=0$ automatically obeys the Fibonacci recurrence — the constants $p,q$ only fix the seeds, never the propagation rule."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2026",
    "title": "Pinning $p$ and $q$ from a single term $a_4=28$",
    "difficulty": 3,
    "task": "Find the value of $p+2q$.",
    "pyq": {
      "year": 2017,
      "paper": "2",
      "qno": "54"
    },
    "tags": [
      "roots of quadratic",
      "recurrence",
      "integer solution",
      "2017"
    ],
    "figure": "",
    "statement": "Let $p,q$ be integers and let $\\alpha,\\beta$ be the roots of the equation $x^2-x-1=0$, where $\\alpha\\neq\\beta$. For $n=0,1,2,\\dots$, define $a_n=p\\alpha^n+q\\beta^n$. (You may use the FACT: if $a,b$ are rational and $a+b\\sqrt5=0$, then $a=b=0$.) If $a_4=28$, then $p+2q$ equals\n\n(A) $21$\n(B) $14$\n(C) $7$\n(D) $12$",
    "answer": "(D) $12$",
    "trap": "The equation $a_4=28$ alone looks like one equation in two unknowns $p,q$ — seemingly under-determined. The resolution is that $a_4$ is a *rational* number, but $\\alpha^4,\\beta^4$ carry $\\sqrt5$; forcing the irrational part to vanish (the given FACT) is the hidden second equation that fixes both $p$ and $q$.",
    "solutions": [
      {
        "name": "Use the recurrence to reduce $a_4$ to $a_0,a_1$",
        "steps": [
          "As in the paired problem, $\\alpha^2=\\alpha+1$ and $\\beta^2=\\beta+1$ give the recurrence $a_{n+2}=a_{n+1}+a_{n}$.",
          "Write $a_0=p+q$ and $a_1=p\\alpha+q\\beta$. Then $a_2=a_1+a_0$, $a_3=a_2+a_1=2a_1+a_0$, and $a_4=a_3+a_2=3a_1+2a_0$.",
          "So $28=a_4=3a_1+2a_0=3(p\\alpha+q\\beta)+2(p+q)$.",
          "Substitute $\\alpha=\\tfrac{1+\\sqrt5}{2}$, $\\beta=\\tfrac{1-\\sqrt5}{2}$: $p\\alpha+q\\beta=\\tfrac{p+q}{2}+\\tfrac{p-q}{2}\\sqrt5$.",
          "Thus $28=3\\!\\left(\\tfrac{p+q}{2}+\\tfrac{p-q}{2}\\sqrt5\\right)+2(p+q)=\\tfrac{7(p+q)}{2}+\\tfrac{3(p-q)}{2}\\sqrt5$.",
          "Since $28$ is rational, the FACT forces the $\\sqrt5$-coefficient to vanish: $p-q=0$, i.e. $p=q$.",
          "Then $28=\\tfrac{7(p+q)}{2}=7p$, so $p=q=4$.",
          "Hence $p+2q=4+2\\cdot4=12$ — option (D)."
        ]
      },
      {
        "name": "Split $a_4$ into rational and irrational parts directly",
        "steps": [
          "Compute the powers using $\\alpha=\\tfrac{1+\\sqrt5}{2}$, $\\beta=\\tfrac{1-\\sqrt5}{2}$. From $\\alpha^2=\\alpha+1$: $\\alpha^2=\\tfrac{3+\\sqrt5}{2}$, then $\\alpha^4=(\\alpha^2)^2=\\tfrac{(3+\\sqrt5)^2}{4}=\\tfrac{14+6\\sqrt5}{4}=\\tfrac{7+3\\sqrt5}{2}$.",
          "Symmetrically $\\beta^4=\\tfrac{7-3\\sqrt5}{2}$.",
          "So $a_4=p\\alpha^4+q\\beta^4=\\tfrac{7(p+q)}{2}+\\tfrac{3(p-q)}{2}\\sqrt5$.",
          "Setting $a_4=28$ (rational) and applying the FACT: the $\\sqrt5$ part gives $p-q=0$, and the rational part gives $\\tfrac{7(p+q)}{2}=28\\Rightarrow p+q=8$.",
          "Solving $p=q$ with $p+q=8$ yields $p=q=4$ (both integers, as required).",
          "Therefore $p+2q=4+8=12$."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE / JEE Advanced 2017, Paper 2, Q54. One numeric condition determines two integers because rationality of $a_4$ secretly supplies a second equation — the coefficient of $\\sqrt5$ must vanish, forcing $p=q$."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2026",
    "title": "A Modulus Splits the Parabola",
    "difficulty": 3,
    "task": "Count the real roots.",
    "pyq": {
      "year": 2021,
      "paper": "1",
      "qno": "17"
    },
    "tags": [
      "equations with modulus",
      "case analysis",
      "number of real roots",
      "2021"
    ],
    "figure": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" font-size=\"12\"><line x1=\"20\" y1=\"170\" x2=\"300\" y2=\"170\" stroke=\"var(--ink3)\"/><line x1=\"160\" y1=\"20\" x2=\"160\" y2=\"200\" stroke=\"var(--ink3)\"/><text x=\"302\" y=\"174\" fill=\"var(--ink2)\">x</text><text x=\"164\" y=\"18\" fill=\"var(--ink2)\">y</text><line x1=\"90\" y1=\"20\" x2=\"90\" y2=\"200\" stroke=\"var(--ink2)\" stroke-dasharray=\"3 3\"/><line x1=\"230\" y1=\"20\" x2=\"230\" y2=\"200\" stroke=\"var(--ink2)\" stroke-dasharray=\"3 3\"/><text x=\"78\" y=\"192\" fill=\"var(--ink2)\">-1</text><text x=\"226\" y=\"192\" fill=\"var(--ink2)\">1</text><path d=\"M40 40 Q90 150 90 150\" fill=\"none\" stroke=\"var(--ink2)\"/><path d=\"M90 150 Q160 90 230 150\" fill=\"none\" stroke=\"var(--ink2)\"/><path d=\"M230 150 Q280 90 300 40\" fill=\"none\" stroke=\"var(--ink2)\"/><circle cx=\"63\" cy=\"170\" r=\"3\" fill=\"var(--gold)\"/><circle cx=\"110\" cy=\"170\" r=\"3\" fill=\"var(--gold)\"/><circle cx=\"200\" cy=\"170\" r=\"3\" fill=\"var(--gold)\"/><circle cx=\"270\" cy=\"170\" r=\"3\" fill=\"var(--gold)\"/><text x=\"120\" y=\"36\" fill=\"var(--ink2)\">|x|&lt;1 vs |x|&#8805;1</text></svg>",
    "statement": "For $x\\in\\mathbb{R}$, find the number of real roots of the equation $$3x^2-4\\lvert x^2-1\\rvert+x-1=0.$$",
    "answer": "$\\boxed{4}$",
    "trap": "After solving each quadratic you must discard the roots that fall outside the interval that defined that case. A root of the $\\lvert x\\rvert<1$ quadratic which actually lies in $\\lvert x\\rvert\\ge 1$ is spurious — students who count all four algebraic roots plus all two from the other branch (or forget to filter) get the wrong total.",
    "solutions": [
      {
        "name": "Case split on the sign of $x^2-1$",
        "steps": [
          "The modulus flips at $x^2=1$, i.e. at $x=\\pm 1$. Split the real line accordingly.",
          "Case 1: $\\lvert x\\rvert\\ge 1$. Then $\\lvert x^2-1\\rvert=x^2-1$, so the equation becomes $3x^2-4(x^2-1)+x-1=0$, i.e. $-x^2+x+3=0$, or $x^2-x-3=0$.",
          "Its roots are $x=\\dfrac{1\\pm\\sqrt{13}}{2}\\approx 2.30$ and $\\approx -1.30$. Both satisfy $\\lvert x\\rvert\\ge 1$, so both are valid — that is $2$ roots.",
          "Case 2: $\\lvert x\\rvert<1$. Then $\\lvert x^2-1\\rvert=1-x^2$, so $3x^2-4(1-x^2)+x-1=0$, i.e. $7x^2+x-5=0$.",
          "Its roots are $x=\\dfrac{-1\\pm\\sqrt{1+140}}{14}=\\dfrac{-1\\pm\\sqrt{141}}{14}\\approx 0.78$ and $\\approx -0.92$. Both lie in $(-1,1)$, so both are valid — that is $2$ more roots.",
          "No root sits exactly at $x=\\pm 1$ (check: at $x=1$, $3-0+1-1=3\\ne 0$; at $x=-1$, $3-0-1-1=1\\ne 0$), so there is no boundary double-count.",
          "Total valid real roots $=2+2=4$."
        ]
      },
      {
        "name": "Graphical: intersect $y=3x^2+x-1$ with $y=4\\lvert x^2-1\\rvert$",
        "steps": [
          "Rewrite the equation as $3x^2+x-1=4\\lvert x^2-1\\rvert$ and count intersections of the two graphs.",
          "The left side $L(x)=3x^2+x-1$ is a single upward parabola.",
          "The right side $R(x)=4\\lvert x^2-1\\rvert$ is a W-shaped curve: it equals $4(x^2-1)$ outside $[-1,1]$ and $4(1-x^2)$ inside, touching $0$ at $x=\\pm 1$.",
          "For $\\lvert x\\rvert\\ge 1$: solving $L=R$ gives $x^2-x-3=0$, whose two roots $\\dfrac{1\\pm\\sqrt{13}}{2}$ both lie in $\\lvert x\\rvert\\ge 1$ — two crossings on the outer arms.",
          "For $\\lvert x\\rvert<1$: solving $L=R$ gives $7x^2+x-5=0$, whose two roots $\\dfrac{-1\\pm\\sqrt{141}}{14}$ both lie in $(-1,1)$ — two crossings on the inner hump.",
          "The upward parabola therefore meets the W in exactly $4$ points, so the equation has $4$ real roots."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE/JEE Advanced 2021, Paper 1, Q17. The whole difficulty is bookkeeping: each branch supplies a quadratic, but a root only counts if it lives in the very interval that produced that branch's form of the modulus."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2026",
    "title": "A Log Substitution Hides a Biquadratic",
    "difficulty": 3,
    "task": "Find the product.",
    "pyq": {
      "year": 2022,
      "paper": "2",
      "qno": "4"
    },
    "tags": [
      "logarithmic equations",
      "biquadratic equation",
      "product of roots",
      "2022"
    ],
    "figure": "",
    "statement": "The product of all positive real values of $x$ satisfying the equation $$x^{\\left(16(\\log_5 x)^3-68\\log_5 x\\right)}=5^{-16}$$ is __________ .",
    "answer": "$\\boxed{1}$",
    "trap": "Do not compute the four $x$-values numerically and multiply — the point is that the product of the $x$'s equals $5$ raised to the SUM of the exponents $t=\\log_5 x$. Since the biquadratic $4t^4-17t^2+4=0$ is even in $t$, its roots pair off as $\\pm t$ and the sum of all $t$'s is $0$, forcing the product of the $x$'s to be $5^0=1$. Missing that the equation is even (or overlooking a negative $t$, i.e. an $x\\in(0,1)$) breaks the argument.",
    "solutions": [
      {
        "name": "Substitute $t=\\log_5 x$ and reduce to a biquadratic",
        "steps": [
          "Let $t=\\log_5 x$, so $x=5^t$ (any positive real $x$ gives a real $t$).",
          "Take $\\log_5$ of both sides. The exponent on the left multiplies $\\log_5 x=t$: $$t\\big(16t^3-68t\\big)=\\log_5\\!\\big(5^{-16}\\big)=-16.$$",
          "This expands to $16t^4-68t^2+16=0$; divide by $4$ to get $4t^4-17t^2+4=0$.",
          "Treat it as a quadratic in $u=t^2$: $4u^2-17u+4=0\\Rightarrow u=\\dfrac{17\\pm\\sqrt{289-64}}{8}=\\dfrac{17\\pm 15}{8}$, so $u=4$ or $u=\\tfrac14$.",
          "Hence $t^2=4$ or $t^2=\\tfrac14$, giving $t\\in\\{2,-2,\\tfrac12,-\\tfrac12\\}$ — four positive real values of $x$.",
          "The product of the $x$'s is $\\prod 5^{t}=5^{\\sum t}=5^{\\,2+(-2)+\\frac12+(-\\frac12)}=5^{0}=1.$"
        ]
      },
      {
        "name": "Vieta on the sum of exponents",
        "steps": [
          "As above, with $t=\\log_5 x$ the equation becomes $4t^4-17t^2+4=0$, a quartic in $t$ with no odd-degree terms.",
          "Writing it as $4t^4+0\\cdot t^3-17t^2+0\\cdot t+4=0$, Vieta's formula gives the sum of the four roots as $-\\dfrac{\\text{coeff of }t^3}{\\text{coeff of }t^4}=-\\dfrac{0}{4}=0.$",
          "The required product of the $x$-values is $x_1x_2x_3x_4=5^{t_1}5^{t_2}5^{t_3}5^{t_4}=5^{\\,t_1+t_2+t_3+t_4}=5^{0}=1.$",
          "So the product equals $1$ without ever solving for the individual roots — the vanishing $t^3$ coefficient is all that is needed."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE/JEE Advanced 2022, Paper 2, Q4. Converting a product of $x$'s into $5$ to the SUM of the log-roots turns the whole problem into reading one Vieta coefficient — and the equation being even in $t$ guarantees that sum is zero."
  }
];
