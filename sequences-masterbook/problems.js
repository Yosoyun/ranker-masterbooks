/* problems.js — DATA. 100 original sequences-and-series problems for Σ · Patterns, Sums & Limits, strictly within the JEE Advanced syllabus: AP/GP/HP and their means, the arithmetico-geometric series, telescoping and sums of powers, recurrences, applications of progressions, infinite GP and telescoping series, and the AM-GM-HM inequalities. No generating functions, power/Taylor series, convergence tests, or olympiad inequalities (Cauchy-Schwarz/Titu/Chebyshev/power-mean/Jensen/rearrangement). Verified in Python. statement/answer are raw LaTeX (the app auto-detects prose+math); steps use $...$ and $$...$$. */
window.PROBLEMS = [
  {
    "theme": "apgphp",
    "themeLabel": "AP, GP, HP & Means",
    "title": "The Nudge That Turns Arithmetic Into Geometric",
    "difficulty": 3,
    "task": "Find all",
    "tags": [
      "ap",
      "gp",
      "quadratic",
      "positivity"
    ],
    "statement": "Three positive numbers are in arithmetic progression with middle term $6$. When the largest of the three is increased by $8$ (the other two left unchanged), the three numbers become a geometric progression. Find the three original numbers.",
    "answer": "$\\{2,\\,6,\\,10\\}$",
    "trap": "Writing the AP as $6-d,\\,6,\\,6+d$ and forming $6^2=(6-d)(14+d)$ gives $d=4$ AND $d=-12$. The seductive move is to keep $d=-12$, which yields the AP $18,6,-6$ — but that violates 'three positive numbers', so it must be discarded. The constraint is hidden in the word 'positive', not in the algebra.",
    "solutions": [
      {
        "name": "Symmetric AP parametrisation",
        "steps": [
          "Let the AP be $6-d,\\,6,\\,6+d$. Adding $8$ to the last term gives $6-d,\\,6,\\,14+d$.",
          "GP condition: $6^2=(6-d)(14+d)$, i.e. $36=84-8d-d^2$, so $d^2+8d-48=0$.",
          "Factor: $(d-4)(d+12)=0$, giving $d=4$ or $d=-12$.",
          "$d=-12$ makes the AP $18,6,-6$ (a negative term), violating positivity; reject it.",
          "$d=4$ gives the AP $\\boxed{2,\\,6,\\,10}$ (check: $2,6,18$ is a GP since $6^2=2\\cdot18$)."
        ]
      },
      {
        "name": "Direct unknowns with sum",
        "steps": [
          "AP with middle $6$ means the outer terms sum to $12$; write them $a$ and $12-a$.",
          "The largest term is $12-a$, so $a<6$. After the nudge the GP is $a,\\,6,\\,(12-a)+8=20-a$.",
          "GP condition: $36=a(20-a)\\Rightarrow a^2-20a+36=0\\Rightarrow(a-2)(a-18)=0$.",
          "$a=18$ contradicts $a<6$ and gives the negative partner $12-18=-6$; only $a=2$ survives.",
          "Original numbers $\\boxed{2,\\,6,\\,10}$."
        ]
      }
    ],
    "remark": "Insight: a quadratic from a GM condition always offers two roots; the discipline is to test each against every stated word ('positive', 'increasing', 'distinct'), not to accept the prettier one."
  },
  {
    "theme": "apgphp",
    "themeLabel": "AP, GP, HP & Means",
    "title": "Squeezed Between Two Means",
    "difficulty": 3,
    "task": "Determine",
    "tags": [
      "am",
      "hm",
      "gm",
      "mean-chain"
    ],
    "statement": "Two positive real numbers have arithmetic mean $5$ and harmonic mean $\\tfrac{16}{5}$. Determine their geometric mean, and then the two numbers themselves.",
    "answer": "$\\mathrm{GM}=4,\\quad \\{2,\\,8\\}$",
    "trap": "Trying to recover the two numbers first from $a+b=10$ alone leaves one equation in two unknowns; a solver may guess $a=b=5$ (so GM would be $5$). But equal numbers force AM$=$HM, contradicting $5\\ne\\tfrac{16}{5}$. The shortcut to GM is the identity $\\mathrm{GM}^2=\\mathrm{AM}\\cdot\\mathrm{HM}$ — no need to find $a,b$ at all.",
    "solutions": [
      {
        "name": "Mean-relation identity",
        "steps": [
          "For two positive numbers, $\\mathrm{GM}^2=\\mathrm{AM}\\cdot\\mathrm{HM}$ (since $\\mathrm{AM}=\\frac{a+b}{2}$, $\\mathrm{HM}=\\frac{2ab}{a+b}$, product $=ab$).",
          "Thus $\\mathrm{GM}^2=5\\cdot\\tfrac{16}{5}=16$, so $\\mathrm{GM}=4$.",
          "Now $ab=\\mathrm{GM}^2=16$ and $a+b=2\\,\\mathrm{AM}=10$.",
          "Roots of $t^2-10t+16=0$ are $t=2,8$.",
          "Answer: $\\mathrm{GM}=\\boxed{4}$, numbers $\\{2,8\\}$."
        ]
      },
      {
        "name": "Eliminate via sum and reciprocal-sum",
        "steps": [
          "$\\mathrm{AM}=5\\Rightarrow a+b=10$.",
          "$\\mathrm{HM}=\\tfrac{16}{5}\\Rightarrow \\tfrac{2}{\\frac1a+\\frac1b}=\\tfrac{16}{5}\\Rightarrow \\tfrac1a+\\tfrac1b=\\tfrac{5}{8}$.",
          "But $\\tfrac1a+\\tfrac1b=\\tfrac{a+b}{ab}=\\tfrac{10}{ab}=\\tfrac58\\Rightarrow ab=16$.",
          "Hence $\\mathrm{GM}=\\sqrt{ab}=4$ and $a,b$ solve $t^2-10t+16=0\\Rightarrow\\{2,8\\}$.",
          "Answer: $\\boxed{4}$ with $\\{2,8\\}$."
        ]
      }
    ],
    "remark": "Insight: $\\mathrm{GM}$ is the geometric mean of $\\mathrm{AM}$ and $\\mathrm{HM}$ themselves — the three means form their own GP, a fact that lets you skip ever solving for $a$ and $b$."
  },
  {
    "theme": "apgphp",
    "themeLabel": "AP, GP, HP & Means",
    "title": "The Harmonic Crossroads",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "hp",
      "reciprocal-ap",
      "general-term",
      "symmetry"
    ],
    "statement": "In a harmonic progression the $p^{\\text{th}}$ term equals $q$ and the $q^{\\text{th}}$ term equals $p$, where $p\\ne q$ are positive integers. Evaluate the $(pq)^{\\text{th}}$ term of this HP.",
    "answer": "$\\boxed{1}$",
    "trap": "Attacking the HP directly (e.g. assuming the terms themselves are in AP, or that the $(pq)^{\\text{th}}$ term is $pq$) collapses immediately. An HP is only tractable through the AP formed by reciprocals; forgetting to invert is the fatal move. A second trap: guessing the symmetric-swap answer is $0$ or $\\tfrac{1}{pq}$ instead of computing it.",
    "solutions": [
      {
        "name": "Reciprocal AP",
        "steps": [
          "Let the reciprocals form an AP: $\\frac{1}{T_k}=A+(k-1)D$.",
          "Given $T_p=q$: $A+(p-1)D=\\tfrac1q$. Given $T_q=p$: $A+(q-1)D=\\tfrac1p$.",
          "Subtract: $(p-q)D=\\tfrac1q-\\tfrac1p=\\tfrac{p-q}{pq}\\Rightarrow D=\\tfrac{1}{pq}$.",
          "Back-substitute: $A=\\tfrac1q-(p-1)\\tfrac{1}{pq}=\\tfrac{1}{pq}$.",
          "Then $\\frac{1}{T_{pq}}=A+(pq-1)D=\\tfrac{1}{pq}+(pq-1)\\tfrac{1}{pq}=1$, so $T_{pq}=\\boxed{1}$."
        ]
      },
      {
        "name": "Linear model of reciprocals",
        "steps": [
          "Reciprocals lie on a line $f(k)=A+(k-1)D$ with $f(p)=\\tfrac1q$, $f(q)=\\tfrac1p$.",
          "The points $\\big(p,\\tfrac1q\\big)$ and $\\big(q,\\tfrac1p\\big)$ have slope $D=\\dfrac{\\frac1p-\\frac1q}{q-p}=\\dfrac{1}{pq}$.",
          "Both points satisfy $f(k)=\\tfrac{k}{pq}$: indeed $f(p)=\\tfrac{p}{pq}=\\tfrac1q$, $f(q)=\\tfrac1p$. So $f(k)=\\tfrac{k}{pq}$.",
          "Therefore $\\frac{1}{T_{pq}}=f(pq)=\\tfrac{pq}{pq}=1$.",
          "Hence $T_{pq}=\\boxed{1}$."
        ]
      }
    ],
    "remark": "Insight: the reciprocals obey the elegant $\\frac{1}{T_k}=\\frac{k}{pq}$, so the indices $p$ and $q$ act like 'roots' and the product index $pq$ lands exactly on the value $1$ — a structural coincidence, not arithmetic luck."
  },
  {
    "theme": "apgphp",
    "themeLabel": "AP, GP, HP & Means",
    "title": "When the Squares Decide to be Geometric",
    "difficulty": 4,
    "task": "Find all",
    "tags": [
      "ap",
      "gp",
      "squares",
      "ratio"
    ],
    "statement": "Three non-zero real numbers $a,b,c$ are in arithmetic progression, while their squares $a^2,b^2,c^2$ (taken in the same order) are in geometric progression but are not all equal. Find all possible ratios of the three original numbers.",
    "answer": "\\[ \\boxed{(1-\\sqrt2):1:(1+\\sqrt2)\\ \\text{or}\\ (1+\\sqrt2):1:(1-\\sqrt2)} \\]",
    "trap": "From $(b^2)^2=a^2c^2$ one is tempted to write $b^2=ac$ and conclude the numbers are themselves in GP — but squaring discards a sign, and the live branch is $b^2=-(b^2-d^2)$, i.e. $b^2=-ac$. Keeping only $b^2=+ac$ forces $d=0$ (all squares equal), exactly the degenerate case the problem excludes.",
    "solutions": [
      {
        "name": "Symmetric AP, sign branch",
        "steps": [
          "Write the AP symmetrically as $b-d,\\,b,\\,b+d$ with $b\\ne0$. Its squares are $(b-d)^2,\\,b^2,\\,(b+d)^2$.",
          "GP condition (middle squared $=$ product of outer): $(b^2)^2=(b-d)^2(b+d)^2=(b^2-d^2)^2$.",
          "So $b^4=(b^2-d^2)^2$, giving $b^2=\\pm(b^2-d^2)$. Equivalently $d^2(2b^2-d^2)=0$.",
          "The $+$ branch yields $d=0$ (all squares equal) — excluded. The $-$ branch yields $2b^2=d^2$, so $d=\\pm\\sqrt2\\,b$.",
          "The terms become $b(1\\mp\\sqrt2),\\,b,\\,b(1\\pm\\sqrt2)$, i.e. ratio $\\boxed{(1-\\sqrt2):1:(1+\\sqrt2)}$ (or its reverse)."
        ]
      },
      {
        "name": "Common ratio of the GP of squares",
        "steps": [
          "Let the GP of squares have common ratio $r>0$, $r\\ne1$ (squares not all equal). Normalise the middle term to $1$, so the squares are $\\tfrac1r,\\,1,\\,r$ and the originals are $\\tfrac{1}{\\sqrt r},\\,1,\\,\\sqrt r$ up to independent signs.",
          "Impose the AP condition $2\\cdot(\\text{middle})=(\\text{first})+(\\text{last})$. The sign choices that keep all three non-zero and consistent give $2=-\\bigl(\\tfrac1{\\sqrt r}+\\sqrt r\\bigr)$ is impossible, while $2=\\tfrac1{\\sqrt r}-\\sqrt r$ (opposite outer signs) works; clearing $\\sqrt r$ gives $r+2\\sqrt r-1=0$, hence $(\\sqrt r+1)^2=2$ and $\\sqrt r=\\sqrt2-1$, so $r=3-2\\sqrt2$.",
          "Squaring the AP relation instead leads symmetrically to $r^2-6r+1=0$, whose roots $r=3\\pm2\\sqrt2=(\\sqrt2\\pm1)^2$ package both orderings.",
          "Then $\\sqrt r=\\sqrt2-1$ (or $\\sqrt2+1$), and the three numbers are $\\tfrac1{\\sqrt r},\\,1,\\,-\\sqrt r$ up to scale; reorganising about the middle gives $b(1-\\sqrt2),\\,b,\\,b(1+\\sqrt2)$.",
          "Hence the ratio is $\\boxed{(1-\\sqrt2):1:(1+\\sqrt2)}$ (or reversed)."
        ]
      }
    ],
    "remark": "Insight: 'squares in GP' is strictly weaker than 'numbers in GP', because squaring is two-to-one and throws away a sign. The genuinely new family lives entirely on the sign branch a careless solver discards; numerically the squares form the GP $0.1716,\\,1,\\,5.8284$ with ratio $3+2\\sqrt2$, yet the originals $-0.4142,\\,1,\\,2.4142$ are nowhere near a GP."
  },
  {
    "theme": "apgphp",
    "themeLabel": "AP, GP, HP & Means",
    "title": "Mirror Means Between the Same Endpoints",
    "difficulty": 4,
    "task": "Prove that",
    "tags": [
      "n-means",
      "am",
      "hm",
      "gm",
      "pairing"
    ],
    "statement": "Between two distinct positive numbers $a$ and $b$, insert $n$ arithmetic means $A_1,A_2,\\dots,A_n$ and, between the same $a$ and $b$, insert $n$ harmonic means $H_1,H_2,\\dots,H_n$ (both indexed from the end nearest $a$). Prove that $A_k\\,H_{\\,n+1-k}=ab$ for every $k=1,\\dots,n$, and hence evaluate $A_2\\,H_{4}$ when $a=2,\\ b=18,\\ n=5$.",
    "answer": "\\[\\boxed{A_kH_{\\,n+1-k}=ab,\\qquad A_2H_4=36}\\]",
    "trap": "Assuming $A_k$ and $H_k$ pair up at the SAME index (so $A_kH_k=ab$) is false; only the MIRRORED index $n+1-k$ works. The reflection arises because the AM-progression climbs from $a$ to $b$ while the reciprocal-of-HM progression climbs from $1/a$ to $1/b$ — opposite orientations. Pairing same-index gives $A_kH_k\\ne ab$ in general (it holds only by accident at the self-mirror midpoint $k=\\tfrac{n+1}{2}$).",
    "solutions": [
      {
        "name": "Common differences and reflection",
        "steps": [
          "AMs: $A_k=a+k\\,\\delta$ with $\\delta=\\dfrac{b-a}{n+1}$, $k=1,\\dots,n$.",
          "HMs: reciprocals form an AP from $\\tfrac1a$ to $\\tfrac1b$, so $\\dfrac{1}{H_j}=\\dfrac1a+j\\,\\Delta$ with $\\Delta=\\dfrac{\\frac1b-\\frac1a}{n+1}=\\dfrac{a-b}{(n+1)ab}$.",
          "Take $j=n+1-k$: $\\dfrac{1}{H_{n+1-k}}=\\dfrac1a+(n+1-k)\\,\\dfrac{a-b}{(n+1)ab}$. Simplify to $\\dfrac{1}{H_{n+1-k}}=\\dfrac{a+k\\delta}{ab}=\\dfrac{A_k}{ab}$.",
          "Hence $A_k\\,H_{n+1-k}=ab$ for all $k$.",
          "With $a=2,b=18$: $ab=36$, so $A_2H_4=\\boxed{36}$."
        ]
      },
      {
        "name": "Numeric confirmation",
        "steps": [
          "For $a=2,b=18,n=5$: $\\delta=\\tfrac{16}{6}=\\tfrac83$, so $A_2=2+2\\cdot\\tfrac83=\\tfrac{22}{3}$.",
          "$\\Delta=\\tfrac{1/18-1/2}{6}=-\\tfrac{4}{54}=-\\tfrac{2}{27}$; $\\tfrac{1}{H_4}=\\tfrac12+4(-\\tfrac{2}{27})=\\tfrac{27-16}{54}=\\tfrac{11}{54}$, so $H_4=\\tfrac{54}{11}$.",
          "Product $A_2H_4=\\tfrac{22}{3}\\cdot\\tfrac{54}{11}=\\tfrac{22\\cdot54}{33}=36$.",
          "This equals $ab=2\\cdot18=36$, confirming the identity.",
          "Therefore $A_2H_4=\\boxed{36}$."
        ]
      }
    ],
    "remark": "Insight: the AM and HM scales are reflections of each other about the GM, so reading one forwards and the other backwards makes every paired product collapse to $\\mathrm{GM}^2=ab$."
  },
  {
    "theme": "apgphp",
    "themeLabel": "AP, GP, HP & Means",
    "title": "Three Slots of an Arithmetic Progression, Now Geometric",
    "difficulty": 4,
    "task": "Determine",
    "tags": [
      "ap",
      "gp",
      "general-term",
      "common-ratio"
    ],
    "statement": "The $p^{\\text{th}}$, $q^{\\text{th}}$ and $r^{\\text{th}}$ terms of an arithmetic progression (with non-zero common difference) are themselves, in that order, three consecutive terms of a geometric progression. Determine the common ratio of that geometric progression in terms of $p,q,r$.",
    "answer": "$\\boxed{\\dfrac{q-r}{p-q}}$",
    "trap": "Trying to express the ratio as $t_q/t_p$ and leaving it in terms of the (unknown) first term $A$ and difference $D$ stalls: that quotient still depends on $A$ and $D$. The escape is to use BOTH geometric equalities to eliminate $A$ and $D$ entirely, after which the ratio is purely combinatorial in $p,q,r$. Assuming a numerical answer, or insisting the AP terms must be positive, is an unfounded restriction.",
    "solutions": [
      {
        "name": "Eliminate via equal ratios",
        "steps": [
          "Let $t_k=A+(k-1)D$. The GP condition is $\\dfrac{t_q}{t_p}=\\dfrac{t_r}{t_q}$.",
          "Use the proportion property: if $\\dfrac{a}{b}=\\dfrac{c}{d}$ then each equals $\\dfrac{a-c}{b-d}$. Taking $\\dfrac{t_q}{t_p}=\\dfrac{t_r}{t_q}$ gives $\\dfrac{t_q}{t_p}=\\dfrac{t_q-t_r}{t_p-t_q}$.",
          "Now $t_q-t_r=(q-r)D$ and $t_p-t_q=(p-q)D$.",
          "Therefore the common ratio $=\\dfrac{(q-r)D}{(p-q)D}=\\dfrac{q-r}{p-q}$, where the nonzero $D$ cancels.",
          "Common ratio $=\\boxed{\\dfrac{q-r}{p-q}}$."
        ]
      },
      {
        "name": "Solve for A, then form the ratio",
        "steps": [
          "GP means $t_q^2=t_p\\,t_r$, i.e. $[A+(q-1)D]^2=[A+(p-1)D][A+(r-1)D]$.",
          "Expand and cancel $A^2$; the remaining equation is linear in $A$, giving $A=D\\cdot\\dfrac{(q-1)^2-(p-1)(r-1)}{p+r-2q}$ (valid since $p+r\\ne 2q$).",
          "Substitute into the ratio $\\dfrac{t_q}{t_p}=\\dfrac{A+(q-1)D}{A+(p-1)D}$.",
          "After simplification the $A$ and $D$ dependence vanishes and the quotient collapses to $\\dfrac{q-r}{p-q}$.",
          "Common ratio $=\\boxed{\\dfrac{q-r}{p-q}}$."
        ]
      }
    ],
    "remark": "Insight: differences of AP terms are proportional to differences of indices, so any cross-ratio of AP terms reduces to the same cross-ratio of indices. The arithmetic structure becomes invisible and only the index pattern survives. Note $p+r\\ne 2q$ is forced: if $p,q,r$ were themselves in AP the three slots could not form a non-constant GP."
  },
  {
    "theme": "apgphp",
    "themeLabel": "AP, GP, HP & Means",
    "title": "The Telescope Hidden in the Reciprocals",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "ap",
      "telescoping",
      "hp",
      "series-sum",
      "limit"
    ],
    "statement": "Let $a_1,a_2,a_3,\\dots$ be the arithmetic progression $3,7,11,15,\\dots$. Evaluate the finite sum $\\displaystyle S_n=\\sum_{k=1}^{n}\\frac{1}{a_k\\,a_{k+1}}$ in closed form, and then state $\\displaystyle\\lim_{n\\to\\infty}S_n$.",
    "answer": "\\[\\boxed{\\ S_n=\\dfrac{n}{3(4n+3)},\\qquad \\lim_{n\\to\\infty}S_n=\\dfrac{1}{12}\\ }\\]",
    "trap": "Treating $\\frac{1}{a_k a_{k+1}}$ as a single HP term and trying to 'sum an HP' directly (HPs have no elementary closed sum) leads nowhere. The hidden device is partial fractions $\\frac{1}{a_k a_{k+1}}=\\frac{1}{d}\\big(\\frac{1}{a_k}-\\frac{1}{a_{k+1}}\\big)$ with $d=4$, which telescopes. Forgetting the $\\frac1d$ factor is a common slip and gives the spurious limit $\\frac13$ instead of $\\frac1{12}$.",
    "solutions": [
      {
        "name": "Telescoping via partial fractions",
        "steps": [
          "Here $a_k=3+(k-1)4=4k-1$, common difference $d=4$, and $a_{k+1}-a_k=4$.",
          "Write $\\dfrac{1}{a_k a_{k+1}}=\\dfrac1{4}\\Big(\\dfrac{1}{a_k}-\\dfrac{1}{a_{k+1}}\\Big)$.",
          "Sum telescopes: $S_n=\\dfrac14\\Big(\\dfrac{1}{a_1}-\\dfrac{1}{a_{n+1}}\\Big)=\\dfrac14\\Big(\\dfrac13-\\dfrac{1}{4n+3}\\Big)$.",
          "Combine: $S_n=\\dfrac14\\cdot\\dfrac{(4n+3)-3}{3(4n+3)}=\\dfrac{4n}{12(4n+3)}=\\dfrac{n}{3(4n+3)}$.",
          "As $n\\to\\infty$, $S_n\\to\\dfrac{1}{12}$. Final: $S_n=\\boxed{\\dfrac{n}{3(4n+3)}}$, limit $\\tfrac1{12}$."
        ]
      },
      {
        "name": "Induction check then limit",
        "steps": [
          "Conjecture $S_n=\\dfrac{n}{3(4n+3)}$. Base $n=1$: LHS $=\\dfrac{1}{3\\cdot7}=\\dfrac1{21}$, RHS $=\\dfrac{1}{3\\cdot7}=\\dfrac1{21}$. ✓",
          "Inductive step: $S_{n+1}=S_n+\\dfrac{1}{a_{n+1}a_{n+2}}=\\dfrac{n}{3(4n+3)}+\\dfrac{1}{(4n+3)(4n+7)}$.",
          "Common denominator $3(4n+3)(4n+7)$: numerator $=n(4n+7)+3=4n^2+7n+3=(n+1)(4n+3)$, so $S_{n+1}=\\dfrac{(n+1)(4n+3)}{3(4n+3)(4n+7)}=\\dfrac{n+1}{3(4n+7)}$, the formula at $n+1$. ✓",
          "Hence $S_n=\\dfrac{n}{3(4n+3)}$ for all $n$.",
          "Dividing by $n$: $S_n=\\dfrac{1}{3(4+3/n)}\\to\\dfrac{1}{12}$. Final $\\boxed{\\dfrac{n}{3(4n+3)}}$, limit $\\tfrac1{12}$."
        ]
      }
    ],
    "remark": "Insight: products of consecutive AP terms in a denominator always telescope because the constant gap $d$ makes the partial-fraction difference exact — the 'harmonic-looking' series is really an arithmetic one in disguise."
  },
  {
    "theme": "apgphp",
    "themeLabel": "AP, GP, HP & Means",
    "title": "Forced Into a Single Point",
    "difficulty": 5,
    "task": "Find all",
    "tags": [
      "ap",
      "hp",
      "gp",
      "degenerate",
      "equality-case"
    ],
    "statement": "Find all triples $(a,b,c)$ of positive real numbers that are simultaneously in arithmetic progression and in harmonic progression. Justify why no others exist, and identify what additional progression such triples automatically satisfy.",
    "answer": "$\\boxed{\\,a=b=c\\ \\text{(any positive constant triple, which is also trivially in GP)}\\,}$",
    "trap": "One may treat $2b=a+c$ and the HP relation as two equations in three unknowns and report a one-parameter family of solutions. But combining them forces $b^2=ac$ as well, and AP together with GP collapses everything to $a=b=c$. The deeper trap is to conclude 'AP and HP $\\Rightarrow$ GP' and stop there, without noticing that all three progressions together over-determine the triple into equality.",
    "solutions": [
      {
        "name": "Combine the two mean conditions",
        "steps": [
          "AP gives $2b=a+c$. HP means the reciprocals are in AP: $\\dfrac{2}{b}=\\dfrac1a+\\dfrac1c=\\dfrac{a+c}{ac}$.",
          "Substitute $a+c=2b$: $\\dfrac{2}{b}=\\dfrac{2b}{ac}\\Rightarrow ac=b^2$.",
          "So the triple is simultaneously AP ($2b=a+c$) and GP ($b^2=ac$).",
          "AP $+$ GP forces equality: from $b^2=ac$ and $2b=a+c$, the numbers $a,c$ are the roots of $t^2-2bt+b^2=(t-b)^2=0$, hence $a=c=b$.",
          "Therefore the only triples are $\\boxed{a=b=c}$, which are also (trivially) geometric."
        ]
      },
      {
        "name": "AM-GM-HM squeeze",
        "steps": [
          "For positive $a,c$ the chain $\\mathrm{AM}\\ge\\mathrm{GM}\\ge\\mathrm{HM}$ holds, with equality throughout if and only if $a=c$.",
          "Being in AP makes $b=\\mathrm{AM}(a,c)=\\dfrac{a+c}{2}$; being in HP makes $b=\\mathrm{HM}(a,c)=\\dfrac{2ac}{a+c}$.",
          "Thus $\\mathrm{AM}(a,c)=\\mathrm{HM}(a,c)$. Since $\\mathrm{AM}-\\mathrm{HM}=\\dfrac{(a-c)^2}{2(a+c)}$, this forces $(a-c)^2=0$, i.e. $a=c$.",
          "Then $b=\\mathrm{AM}(a,a)=a$, so $a=b=c$.",
          "Only solution: $\\boxed{a=b=c}$ (automatically a GP as well)."
        ]
      }
    ],
    "remark": "Insight: AP fixes the middle term as the arithmetic mean, HP fixes it as the harmonic mean; demanding both collapses the AM-GM-HM inequality to its equality case, which is exactly the degenerate constant triple. The algebraic shadow of this is that AP and HP together secretly imply GP, and any two of the three progressions already pin the triple to a single point."
  },
  {
    "theme": "apgphp",
    "themeLabel": "AP, GP, HP & Means",
    "title": "A Chain Half Geometric, Half Arithmetic",
    "difficulty": 5,
    "task": "Find a,b,c,d",
    "tags": [
      "mixed-ap-gp",
      "four-terms",
      "system",
      "integer-solution"
    ],
    "statement": "Four distinct positive integers $a,b,c,d$ satisfy: $a,b,c$ are in geometric progression, $b,c,d$ are in arithmetic progression, $a+d=35$, and $b+c=30$. Find $a,b,c,d$.",
    "answer": "$\\boxed{(a,b,c,d)=(5,\\,10,\\,20,\\,30)}$",
    "trap": "The system $\\{b^2=ac,\\ 2c=b+d,\\ a+d=35,\\ b+c=30\\}$ has TWO real solutions: $(5,10,20,30)$ and $\\left(\\tfrac{125}{4},\\tfrac{75}{4},\\tfrac{45}{4},\\tfrac{15}{4}\\right)$. Reporting the fractional one (or both) ignores the stated constraint that $a,b,c,d$ are distinct positive integers, which selects exactly one. Dropping that constraint is the trap.",
    "solutions": [
      {
        "name": "Reduce to one variable",
        "steps": [
          "Let the GP be $a,b,c=a,ar,ar^2$ (ratio $r$). The AP $b,c,d$ gives $d=2c-b=2ar^2-ar$.",
          "$b+c=30\\Rightarrow ar+ar^2=30\\Rightarrow ar(1+r)=30$.",
          "$a+d=35\\Rightarrow a+2ar^2-ar=35\\Rightarrow a(2r^2-r+1)=35$.",
          "Divide the two equations: $\\dfrac{ar(1+r)}{a(2r^2-r+1)}=\\dfrac{30}{35}=\\dfrac67\\Rightarrow 7r(1+r)=6(2r^2-r+1)\\Rightarrow 5r^2-13r+6=0$, so $r=2$ or $r=\\tfrac35$.",
          "$r=2$ gives $a\\cdot 2\\cdot 3=30\\Rightarrow a=5$, then $5,10,20,30$ — distinct positive integers. $r=\\tfrac35$ gives non-integers. Answer $\\boxed{(5,10,20,30)}$."
        ]
      },
      {
        "name": "Direct elimination",
        "steps": [
          "From $b+c=30$, $c=30-b$. From $b^2=ac$, $a=\\dfrac{b^2}{30-b}$.",
          "AP: $d=2c-b=2(30-b)-b=60-3b$. Then $a+d=35$ gives $\\dfrac{b^2}{30-b}+60-3b=35$.",
          "Multiply by $(30-b)$: $b^2+(25-3b)(30-b)=0\\Rightarrow b^2+750-25b-90b+3b^2=0\\Rightarrow 4b^2-115b+750=0$.",
          "Roots $b=\\dfrac{115\\pm\\sqrt{115^2-12000}}{8}=\\dfrac{115\\pm35}{8}=10$ or $\\tfrac{75}{4}$.",
          "$b=10\\Rightarrow c=20,\\ a=5,\\ d=30$ (integers). $b=\\tfrac{75}{4}$ is non-integer. Final $\\boxed{(5,10,20,30)}$."
        ]
      }
    ],
    "remark": "Insight: a mixed GP-then-AP chain naturally yields a quadratic in the ratio, hence two candidate chains; the integrality clause is not decoration — it is the selector that makes the answer unique."
  },
  {
    "theme": "apgphp",
    "themeLabel": "AP, GP, HP & Means",
    "title": "Logarithms Bend a Harmonic Trio Into a Geometric One",
    "difficulty": 5,
    "task": "Prove that",
    "tags": [
      "hp",
      "gp",
      "logarithms",
      "change-of-base",
      "hybrid"
    ],
    "statement": "Let $N>0,\\ N\\ne1$ and let $a,b,c$ be positive reals, each $\\ne1$. Suppose $\\log_a N,\\ \\log_b N,\\ \\log_c N$ are in harmonic progression. Prove that $a,b,c$ are in geometric progression (i.e. $b^2=ac$). Conversely, show the implication can fail if 'harmonic' is replaced by 'arithmetic'.",
    "answer": "$\\boxed{\\ \\log_aN,\\ \\log_bN,\\ \\log_cN\\ \\text{in HP}\\iff b^2=ac\\ }$",
    "trap": "Knowing only that $\\log_b N$ is the harmonic mean of $\\log_a N$ and $\\log_c N$ and stopping there misses the payoff. The decisive move is to pass to reciprocals: $1/\\log_a N=\\log_N a$, so HP of the original terms means $\\log_N a,\\log_N b,\\log_N c$ are in AP, and an AP of logarithms is a GP of the arguments. The fatal slip is mishandling that reciprocal step, e.g. inverting $\\log_a N$ to $\\log_a(1/N)=-\\log_a N$ instead of to $\\log_N a=1/\\log_a N$; numerically with $N=5,\\ a=2$ these are $-2.3219$ versus $0.4307$, so the negation route is simply the wrong reciprocal and collapses the proof.",
    "solutions": [
      {
        "name": "Reciprocals are log_N of the bases",
        "steps": [
          "By change of base, $\\dfrac{1}{\\log_a N}=\\log_N a$, and likewise $\\dfrac{1}{\\log_b N}=\\log_N b$, $\\dfrac{1}{\\log_c N}=\\log_N c$ (all defined since $a,b,c,N>0$ are $\\ne1$).",
          "Saying $\\log_a N,\\log_b N,\\log_c N$ are in HP means precisely that their reciprocals $\\log_N a,\\log_N b,\\log_N c$ are in AP.",
          "AP condition on the reciprocals: $2\\log_N b=\\log_N a+\\log_N c=\\log_N(ac)$.",
          "Thus $\\log_N(b^2)=\\log_N(ac)$, and since $\\log_N$ is injective ($N\\ne1$) we get $b^2=ac$, i.e. $a,b,c$ are in GP. $\\blacksquare$",
          "Boxed result: $b^2=ac$."
        ]
      },
      {
        "name": "Direct harmonic-mean computation",
        "steps": [
          "The middle term of an HP is the harmonic mean of its neighbours: $\\log_b N=\\dfrac{2\\,\\log_a N\\,\\log_c N}{\\log_a N+\\log_c N}$.",
          "Put $L=\\ln N$ and write $\\log_a N=\\dfrac{L}{\\ln a}$, $\\log_b N=\\dfrac{L}{\\ln b}$, $\\log_c N=\\dfrac{L}{\\ln c}$. Then $\\dfrac{L}{\\ln b}=\\dfrac{2\\cdot\\frac{L}{\\ln a}\\cdot\\frac{L}{\\ln c}}{\\frac{L}{\\ln a}+\\frac{L}{\\ln c}}=\\dfrac{2L}{\\ln a+\\ln c}$.",
          "Cancel $L=\\ln N\\ne0$ (since $N\\ne1$): $\\dfrac{1}{\\ln b}=\\dfrac{2}{\\ln a+\\ln c}\\Rightarrow 2\\ln b=\\ln a+\\ln c$.",
          "Hence $\\ln(b^2)=\\ln(ac)\\Rightarrow b^2=ac$, so $a,b,c$ are in GP. $\\blacksquare$",
          "Counter for 'arithmetic': replacing 'HP' by 'AP' breaks the conclusion. Since $\\log_x N=\\dfrac{\\ln N}{\\ln x}$, the logs being in AP means $\\dfrac{2}{\\ln b}=\\dfrac{1}{\\ln a}+\\dfrac{1}{\\ln c}$ (an HP condition on the $\\ln$'s), which is NOT the GP condition $2\\ln b=\\ln a+\\ln c$. Concretely take $a=e,\\ b=e^{3/2},\\ c=e^{3}$ and $N=e$: then $\\log_a N,\\log_b N,\\log_c N=1,\\tfrac23,\\tfrac13$, a genuine AP, yet $b^2=e^{3}\\ne ac=e^{4}$. So AP of the logs does NOT force $b^2=ac$. $\\blacksquare$"
        ]
      }
    ],
    "remark": "Insight: 'HP of logarithms with a fixed argument $N$' is secretly 'AP of the logarithms of the bases', because $1/\\log_a N=\\log_N a$. The exponential then undoes that AP into a GP of the bases, $b^2=ac$ — a clean bridge that only the reciprocal (change-of-base) step exposes. Replacing HP by AP breaks the bridge: an AP of $\\log_\\bullet N$ is an AP of $1/\\ln(\\text{base})$, which is a harmonic-type condition on the bases, not $b^2=ac$."
  },
  {
    "theme": "agp",
    "themeLabel": "Arithmetico-Geometric & Special Sums",
    "title": "The Doubling Ledger",
    "difficulty": 3,
    "task": "Prove that",
    "tags": [
      "agp",
      "finite-sum",
      "multiply-by-r",
      "induction",
      "closed-form"
    ],
    "statement": "For every integer $n\\ge 1$ let \\[ S_n=\\sum_{k=1}^{n}(3k-1)\\,2^{\\,k-1}=1\\cdot 1+5\\cdot 2+8\\cdot 4+11\\cdot 8+\\cdots+(3n-1)2^{\\,n-1}. \\] Prove that $S_n=(3n-4)2^{\\,n}+4$, and use this to read off $\\displaystyle\\lim_{n\\to\\infty}\\frac{S_n}{n\\,2^{\\,n}}$.",
    "answer": "\\[\\boxed{S_n=(3n-4)2^{\\,n}+4,\\qquad \\lim_{n\\to\\infty}\\tfrac{S_n}{n\\,2^{\\,n}}=3}\\]",
    "trap": "Writing $2S_n-S_n$ but mishandling the two boundary terms that the multiply-by-$r$ shift exposes. The shift leaves an UNPAIRED top term $(3n-1)2^{\\,n}$ (from $k=n+1$ in $2S_n$) AND an unpaired bottom term equal to the actual first summand $(3\\cdot1-1)2^{0}=2$ (not $1$). Reading the bottom term off as $1$ — or dropping it — turns the true correction $(3n-1)2^n-2-3(2^n-2)$ into something with the wrong additive constant ($+5$ instead of $+4$). The geometric block that gets telescoped is $\\sum_{k=2}^{n}3\\cdot 2^{k-1}=3(2^n-2)$, indexed from $k=2$, not from $k=1$.",
    "solutions": [
      {
        "name": "Multiply-by-$r$ and subtract",
        "steps": [
          "Write $S_n=\\sum_{k=1}^n(3k-1)2^{k-1}$ and $2S_n=\\sum_{k=1}^n(3k-1)2^{k}=\\sum_{j=2}^{n+1}(3j-4)2^{\\,j-1}$ after shifting the index $j=k+1$.",
          "Subtract over the common range $k=2,\\dots,n$. The top term ($j=n+1$) of $2S_n$ is unpaired: $(3(n+1)-4)2^{n}=(3n-1)2^{n}$. The bottom term ($k=1$) of $S_n$ is unpaired: $(3\\cdot1-1)2^{0}=2$. Hence $S_n=2S_n-S_n=(3n-1)2^{n}-2+\\sum_{k=2}^{n}\\big[(3k-4)-(3k-1)\\big]2^{k-1}$.",
          "The bracket equals $-3$, so $S_n=(3n-1)2^{n}-2-3\\sum_{k=2}^{n}2^{k-1}=(3n-1)2^{n}-2-3(2^{n}-2)$, using $\\sum_{k=2}^{n}2^{k-1}=2^{n}-2$.",
          "Simplify: $S_n=(3n-1)2^{n}-3\\cdot 2^{n}+6-2=(3n-4)2^{n}+4$.",
          "Then $\\dfrac{S_n}{n2^n}=\\dfrac{(3n-4)2^n+4}{n2^n}=3-\\dfrac{4}{n}+\\dfrac{4}{n2^n}\\to 3$, giving $\\boxed{S_n=(3n-4)2^{n}+4}$ and limit $3$."
        ]
      },
      {
        "name": "Split into known special sums",
        "steps": [
          "$S_n=\\sum_{k=1}^n(3k-1)2^{k-1}=3\\sum_{k=1}^n k\\,2^{k-1}-\\sum_{k=1}^n 2^{k-1}$.",
          "Using the standard AGP identity $\\sum_{k=1}^n k\\,2^{k-1}=(n-1)2^{n}+1$ and the geometric sum $\\sum_{k=1}^n 2^{k-1}=2^{n}-1$,",
          "$S_n=3\\big[(n-1)2^{n}+1\\big]-(2^{n}-1)=(3n-3-1)2^{n}+3+1=(3n-4)2^{n}+4$.",
          "Dividing by $n2^n$: the leading $3n\\cdot2^n$ contributes $3$ while $-4\\cdot 2^n$ and $+4$ vanish (orders $1/n$ and $1/(n2^n)$), so $\\boxed{S_n=(3n-4)2^{n}+4}$ with limit $3$."
        ]
      },
      {
        "name": "Induction",
        "steps": [
          "Base $n=1$: the formula gives $(3\\cdot1-4)2^{1}+4=(-1)(2)+4=2$, which equals $S_1=(3\\cdot1-1)2^{0}=2$. True.",
          "Assume $S_n=(3n-4)2^n+4$. The next summand is $(3(n+1)-1)2^{(n+1)-1}=(3n+2)2^{n}$, so $S_{n+1}=S_n+(3n+2)2^{n}=(3n-4)2^n+4+(3n+2)2^n=(6n-2)2^n+4$.",
          "Rewrite $(6n-2)2^n=(3n-1)\\cdot 2^{n+1}=(3(n+1)-4)\\cdot 2^{n+1}$, since $3(n+1)-4=3n-1$.",
          "Thus $S_{n+1}=(3(n+1)-4)2^{n+1}+4$, closing the induction. The limit of $S_n/(n2^n)$ is therefore $\\boxed{3}$."
        ]
      }
    ],
    "remark": "Insight: the finite AGP is the infinite tail-sum behaviour plus a single boundary correction. The leading term $3n\\,2^n$ already encodes the slope $d=3$ of the linear coefficient $(3k-1)$, which is exactly why the limit is $3$ with no trace of the ratio $r=2$. The whole subtlety lives in the two boundary terms of the $2S_n-S_n$ telescope — the unpaired top $(3n-1)2^n$ and the unpaired bottom $=2$ (the genuine first summand, not $1$)."
  },
  {
    "theme": "agp",
    "themeLabel": "Arithmetico-Geometric & Special Sums",
    "title": "A Quarter at a Time",
    "difficulty": 3,
    "task": "Evaluate",
    "tags": [
      "agp",
      "infinite-series",
      "ratio-test",
      "convergence",
      "quarter"
    ],
    "statement": "A series is defined by $\\displaystyle T=\\sum_{k=1}^{\\infty}\\frac{5k-2}{4^{\\,k}}$. First decide, with justification, whether $T$ converges; then evaluate it in lowest terms.",
    "answer": "\\[\\boxed{T=\\dfrac{14}{9}}\\]",
    "trap": "Treating the arithmetic factor $5k-2\\to\\infty$ as a reason the series might diverge, or conversely applying a finite-AGP formula and then \"letting $n\\to\\infty$\" without checking $|r|<1$. Here $r=\\tfrac14$ so the polynomial-times-geometric term $\\to0$ and the boundary term $(5n+\\cdots)4^{-n}\\to0$ vanishes; that vanishing is exactly what licenses the infinite formula.",
    "solutions": [
      {
        "name": "Split into $\\sum k\\,r^k$ and $\\sum r^k$",
        "steps": [
          "Since $r=\\tfrac14$ with $|r|<1$, both component series converge absolutely, so $T=5\\sum_{k\\ge1}k\\,4^{-k}-2\\sum_{k\\ge1}4^{-k}$.",
          "$\\sum_{k\\ge1}k\\,x^k=\\dfrac{x}{(1-x)^2}$ at $x=\\tfrac14$ gives $\\dfrac{1/4}{(3/4)^2}=\\dfrac{4}{9}$.",
          "$\\sum_{k\\ge1}4^{-k}=\\dfrac{1/4}{3/4}=\\dfrac13$.",
          "$T=5\\cdot\\dfrac49-2\\cdot\\dfrac13=\\dfrac{20}{9}-\\dfrac69=\\boxed{\\dfrac{14}{9}}$."
        ]
      },
      {
        "name": "Multiply-by-$r$ on the infinite sum",
        "steps": [
          "$\\tfrac14 T=\\sum_{k\\ge1}\\dfrac{5k-2}{4^{k+1}}=\\sum_{k\\ge2}\\dfrac{5(k-1)-2}{4^{k}}=\\sum_{k\\ge2}\\dfrac{5k-7}{4^{k}}$.",
          "$T-\\tfrac14 T=\\dfrac{5\\cdot1-2}{4}+\\sum_{k\\ge2}\\dfrac{(5k-2)-(5k-7)}{4^k}=\\dfrac34+5\\sum_{k\\ge2}4^{-k}$.",
          "$\\sum_{k\\ge2}4^{-k}=\\dfrac{1/16}{3/4}=\\dfrac{1}{12}$, so $\\tfrac34 T=\\dfrac34+\\dfrac{5}{12}=\\dfrac{14}{12}$.",
          "Hence $T=\\dfrac43\\cdot\\dfrac{14}{12}=\\boxed{\\dfrac{14}{9}}$."
        ]
      }
    ],
    "remark": "Insight: convergence of an AGP is governed solely by $|r|$, never by the arithmetic factor. The d3 hook is forcing the student to articulate why the boundary term that survives in the finite case dies in the limit."
  },
  {
    "theme": "agp",
    "themeLabel": "Arithmetico-Geometric & Special Sums",
    "title": "Triangles Falling Through a Sieve",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "agp",
      "double-sum",
      "interchange",
      "triangular-numbers",
      "hidden-agp"
    ],
    "statement": "Evaluate \\[ \\Sigma=\\sum_{n=1}^{\\infty}\\frac{1}{2^{\\,n}}\\left(\\sum_{k=1}^{n}(2k-1)\\right), \\] recognising the inner sum before attempting the outer one.",
    "answer": "\\[\\boxed{\\Sigma=6}\\]",
    "trap": "Trying to swap the order of summation and mishandle the index region, or expanding the inner sum as an AGP in $k$ (it is not — there is no $r^k$ inside). The inner sum is purely arithmetic and collapses to $n^2$; the AGP lives in the OUTER variable as $\\sum n^2/2^n$. Mistaking which variable carries the geometric factor is the whole trap.",
    "solutions": [
      {
        "name": "Collapse inner, then $\\sum n^2 r^n$",
        "steps": [
          "The inner sum $\\sum_{k=1}^n(2k-1)=n^2$ (sum of first $n$ odd numbers).",
          "So $\\Sigma=\\sum_{n=1}^\\infty \\dfrac{n^2}{2^{n}}$, a special sum with $r=\\tfrac12$.",
          "Use $\\sum_{n\\ge1}n^2 x^n=\\dfrac{x(1+x)}{(1-x)^3}$ at $x=\\tfrac12$: $\\dfrac{\\tfrac12\\cdot\\tfrac32}{(\\tfrac12)^3}=\\dfrac{3/4}{1/8}=6$.",
          "Hence $\\Sigma=\\boxed{6}$."
        ]
      },
      {
        "name": "Interchange order of summation",
        "steps": [
          "Swap: $\\Sigma=\\sum_{k=1}^\\infty(2k-1)\\sum_{n=k}^\\infty 2^{-n}=\\sum_{k=1}^\\infty(2k-1)\\cdot 2^{-(k-1)}$ since $\\sum_{n\\ge k}2^{-n}=2^{-(k-1)}$.",
          "This is itself an AGP: $\\Sigma=2\\sum_{k\\ge1}(2k-1)2^{-k}=2\\big(2\\sum k2^{-k}-\\sum 2^{-k}\\big)$.",
          "With $\\sum k2^{-k}=2$ and $\\sum 2^{-k}=1$: $\\Sigma=2(2\\cdot2-1)=2\\cdot3=6$.",
          "Therefore $\\Sigma=\\boxed{6}$."
        ]
      },
      {
        "name": "Decompose $n^2=n(n-1)+n$",
        "steps": [
          "$\\Sigma=\\sum n^2/2^n=\\sum n(n-1)2^{-n}+\\sum n\\,2^{-n}$.",
          "$\\sum_{n\\ge1}n(n-1)x^n=\\dfrac{2x^2}{(1-x)^3}=\\dfrac{2\\cdot1/4}{1/8}=4$ at $x=\\tfrac12$.",
          "$\\sum_{n\\ge1}n\\,2^{-n}=2$, so $\\Sigma=4+2=6$.",
          "Thus $\\Sigma=\\boxed{6}$."
        ]
      }
    ],
    "remark": "Insight: the double sum is a disguise — the arithmetic inner layer is a red herring designed to make you look for an AGP in the wrong index. The two surviving routes (collapse vs. interchange) both reduce to canonical special sums."
  },
  {
    "theme": "agp",
    "themeLabel": "Arithmetico-Geometric & Special Sums",
    "title": "Squaring the Halves",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "agp",
      "special-sum",
      "k-squared",
      "falling-factorial",
      "series"
    ],
    "statement": "Evaluate \\[ U=\\sum_{k=1}^{\\infty}\\frac{k^{2}+1}{2^{\\,k}}, \\] preferably by reducing $k^2$ to a combination of $k(k-1)$ and $k$ rather than quoting a memorised $\\sum k^2 r^k$ formula.",
    "answer": "\\[\\boxed{U=7}\\]",
    "trap": "Assuming $\\sum_{k\\ge1}\\dfrac{k^2+1}{2^k}=\\Big(\\sum\\dfrac{k^2}{2^k}\\Big)+\\Big(\\sum\\dfrac{1}{2^k}\\Big)$ is fine (it is) but then misremembering $\\sum k^2 2^{-k}$ as $4$ or $2$. The robust route is the falling-factorial split $k^2=k(k-1)+k$, where each piece is the second/first derivative of the geometric series and there is nothing to misremember.",
    "solutions": [
      {
        "name": "Falling-factorial split",
        "steps": [
          "$U=\\sum\\dfrac{k(k-1)}{2^k}+\\sum\\dfrac{k}{2^k}+\\sum\\dfrac{1}{2^k}$.",
          "With $x=\\tfrac12$: $\\sum k(k-1)x^k=\\dfrac{2x^2}{(1-x)^3}=\\dfrac{1/2}{1/8}=4$.",
          "$\\sum k\\,x^k=\\dfrac{x}{(1-x)^2}=2$ and $\\sum x^k=1$.",
          "$U=4+2+1=\\boxed{7}$."
        ]
      },
      {
        "name": "Direct $\\sum k^2 r^k$",
        "steps": [
          "$\\sum_{k\\ge1}\\dfrac{k^2}{2^k}=\\dfrac{x(1+x)}{(1-x)^3}\\Big|_{x=1/2}=\\dfrac{(1/2)(3/2)}{1/8}=6$.",
          "$\\sum_{k\\ge1}\\dfrac{1}{2^k}=1$.",
          "$U=6+1=\\boxed{7}$."
        ]
      },
      {
        "name": "Multiply-by-$r$ twice",
        "steps": [
          "Let $A=\\sum k^2 2^{-k}$. Then $A-\\tfrac12 A=\\sum (k^2-(k-1)^2)2^{-k}=\\sum(2k-1)2^{-k}=3$, so $A=6$.",
          "(Here $\\sum(2k-1)2^{-k}=2\\cdot2-1=3$ from $\\sum k2^{-k}=2,\\ \\sum2^{-k}=1$.)",
          "Add $\\sum 2^{-k}=1$ to get $U=6+1=\\boxed{7}$."
        ]
      }
    ],
    "remark": "Insight: $k^2=k(k-1)+k$ turns a `$k^2$-AGP' into two clean derivatives of $\\tfrac{1}{1-x}$, so a top-rank student never needs the ugly $\\sum k^2 r^k$ formula at all."
  },
  {
    "theme": "agp",
    "themeLabel": "Arithmetico-Geometric & Special Sums",
    "title": "When the Boundary Term Eats Everything",
    "difficulty": 4,
    "task": "Prove that",
    "tags": [
      "agp",
      "finite-sum",
      "r-greater-than-1",
      "closed-form",
      "telescoping"
    ],
    "statement": "Define $\\displaystyle V_n=\\sum_{k=1}^{n}(2k+1)\\,3^{\\,k}=3\\cdot 3+5\\cdot 9+7\\cdot 27+\\cdots+(2n+1)3^{\\,n}$. Prove the remarkably clean identity $V_n=n\\cdot 3^{\\,n+1}$, and explain why $V_n$ has no infinite analogue.",
    "answer": "\\[\\boxed{V_n=n\\cdot 3^{\\,n+1}}\\]",
    "trap": "After forming $V_n-3V_n$ a student often discards the top boundary term $(2n+1)3^{n+1}$ or pairs the indices off by one, producing $\\;-2V_n=\\text{(geometric block)}\\;$ with a leftover that no longer factors as $n\\cdot 3^{n+1}$. With $r=3>1$ the boundary term is the DOMINANT term — dropping it is fatal, and is also exactly why $\\sum_{k\\ge1}(2k+1)3^k$ diverges.",
    "solutions": [
      {
        "name": "Multiply-by-$r$ and subtract",
        "steps": [
          "$3V_n=\\sum_{k=1}^n(2k+1)3^{k+1}=\\sum_{k=2}^{n+1}(2k-1)3^{k}$.",
          "$V_n-3V_n=(3)3^{1}-(2n+1)3^{n+1}+\\sum_{k=2}^{n}\\big[(2k+1)-(2k-1)\\big]3^{k}$, where $(2n+1)3^{n+1}$ is the unpaired top term.",
          "The bracket is $2$, so $-2V_n=9-(2n+1)3^{n+1}+2\\sum_{k=2}^{n}3^{k}=9-(2n+1)3^{n+1}+2\\cdot\\dfrac{3^{n+1}-9}{2}$.",
          "Simplify: $-2V_n=9-(2n+1)3^{n+1}+3^{n+1}-9=-2n\\,3^{n+1}$, hence $V_n=n\\,3^{n+1}$.",
          "Since $V_n=n3^{n+1}\\to\\infty$, the series has no finite infinite sum: $\\boxed{V_n=n\\cdot 3^{n+1}}$."
        ]
      },
      {
        "name": "Split into special sums",
        "steps": [
          "$V_n=2\\sum_{k=1}^n k\\,3^k+\\sum_{k=1}^n 3^k$.",
          "$\\sum_{k=1}^n k3^k=\\dfrac{3+(2n-1)3^{n+1}}{4}$ and $\\sum_{k=1}^n3^k=\\dfrac{3^{n+1}-3}{2}$.",
          "$V_n=\\dfrac{3+(2n-1)3^{n+1}}{2}+\\dfrac{3^{n+1}-3}{2}=\\dfrac{2n\\cdot3^{n+1}}{2}=n\\,3^{n+1}$.",
          "Thus $V_n=\\boxed{n\\cdot 3^{n+1}}$ and diverges as $n\\to\\infty$."
        ]
      },
      {
        "name": "Telescoping ansatz",
        "steps": [
          "Guess $V_n=A_n3^{n+1}+B$ with $A_n$ linear; require $(2n+1)3^n=V_n-V_{n-1}$.",
          "$V_n-V_{n-1}=A_n3^{n+1}-A_{n-1}3^{n}=3^{n}(3A_n-A_{n-1})$, so $3A_n-A_{n-1}=2n+1$.",
          "$A_n=n$ works: $3n-(n-1)=2n+1$. With $V_0=0$ we get $B=0$.",
          "Therefore $V_n=n\\,3^{n+1}$, $\\boxed{V_n=n\\cdot 3^{n+1}}$."
        ]
      },
      {
        "name": "Induction",
        "steps": [
          "$n=1$: $V_1=3\\cdot3=9=1\\cdot3^2$. True.",
          "Assume $V_n=n3^{n+1}$. Then $V_{n+1}=n3^{n+1}+(2n+3)3^{n+1}=(3n+3)3^{n+1}=(n+1)3^{n+2}$.",
          "This is the formula at $n+1$, closing the induction.",
          "Hence $V_n=\\boxed{n\\cdot 3^{n+1}}$."
        ]
      }
    ],
    "remark": "Insight: with $r>1$ the multiply-by-$r$ method still works for the FINITE sum, but the boundary term is now the giant, so the same algebra that gives a finite closed form also proves the infinite series diverges."
  },
  {
    "theme": "agp",
    "themeLabel": "Arithmetico-Geometric & Special Sums",
    "title": "Calibrating the Coefficients",
    "difficulty": 4,
    "task": "Find a,b",
    "tags": [
      "agp",
      "inverse-problem",
      "find-constants",
      "third-power",
      "linear-system"
    ],
    "statement": "Real constants $a,b$ are such that the arithmetico-geometric series $\\displaystyle\\sum_{k=1}^{\\infty}\\frac{a\\,k+b}{3^{\\,k}}$ converges to $\\dfrac{13}{4}$, while the coefficient line $a k+b$ has coefficient sum $a+b=4$. Find $a$ and $b$, and state the value of the first term of the series.",
    "answer": "\\[\\boxed{a=5,\\ b=-1;\\quad \\text{first term}=\\tfrac{4}{3}}\\]",
    "trap": "Setting up the value-equation as $\\dfrac{a\\cdot1+b}{3}\\cdot\\dfrac{1}{1-\\frac13}$ (treating it as a pure geometric series with first term $\\frac{a+b}{3}$). That ignores the arithmetic growth of the numerator: the correct closed form is $\\sum\\frac{ak+b}{3^k}=\\frac{3a}{4}+\\frac{b}{2}$, NOT $\\frac{a+b}{2}$. With $a+b=4$ the trap formula gives $\\frac{a+b}{2}=2\\neq\\frac{13}{4}$, an outright contradiction — the hidden $\\sum k\\,3^{-k}=\\frac34$ piece is what most solvers drop.",
    "solutions": [
      {
        "name": "Closed form then solve linear system",
        "steps": [
          "For $|r|=\\tfrac13<1$: $\\sum_{k\\ge1}\\dfrac{ak+b}{3^k}=a\\sum k3^{-k}+b\\sum 3^{-k}=a\\cdot\\dfrac34+b\\cdot\\dfrac12$, using $\\sum_{k\\ge1}k3^{-k}=\\dfrac34$ and $\\sum_{k\\ge1}3^{-k}=\\dfrac12$.",
          "Set $\\dfrac34 a+\\dfrac12 b=\\dfrac{13}{4}$ and $a+b=4$.",
          "From the second, $b=4-a$; substitute: $\\dfrac34a+\\dfrac12(4-a)=\\dfrac{13}{4}\\Rightarrow \\dfrac14a+2=\\dfrac{13}{4}\\Rightarrow a=5$.",
          "Then $b=-1$; first term $\\dfrac{5\\cdot1-1}{3}=\\dfrac43$. So $\\boxed{a=5,\\ b=-1}$."
        ]
      },
      {
        "name": "Multiply-by-$r$ to derive the closed form",
        "steps": [
          "Let $W=\\sum_{k\\ge1}(ak+b)3^{-k}$. Then $\\tfrac13W=\\sum_{k\\ge1}(ak+b)3^{-(k+1)}=\\sum_{k\\ge2}(a(k-1)+b)3^{-k}$.",
          "$W-\\tfrac13W=\\dfrac{a+b}{3}+a\\sum_{k\\ge2}3^{-k}=\\dfrac{a+b}{3}+a\\cdot\\dfrac{1/9}{2/3}=\\dfrac{a+b}{3}+\\dfrac{a}{6}$.",
          "So $\\tfrac23W=\\dfrac{a+b}{3}+\\dfrac a6\\Rightarrow W=\\dfrac{3a}{4}+\\dfrac b2$; impose $W=\\tfrac{13}{4},\\ a+b=4$.",
          "Solving gives $a=5,\\ b=-1$, $\\boxed{a=5,\\ b=-1}$, first term $\\tfrac43$."
        ]
      }
    ],
    "remark": "Insight: an AGP is a two-parameter object, so two independent conditions pin it down — but only if you use the TRUE closed form $\\frac{3a}{4}+\\frac b2$. The deliberate near-miss $\\frac{a+b}{2}$ would give the wrong system, exposing students who treat AGP as a geometric series with a moving first term."
  },
  {
    "theme": "agp",
    "themeLabel": "Arithmetico-Geometric & Special Sums",
    "title": "The Forbidden Root",
    "difficulty": 5,
    "task": "Find all",
    "tags": [
      "agp",
      "parameter",
      "convergence-constraint",
      "quadratic",
      "rejected-root"
    ],
    "statement": "Find all real numbers $a$ for which the series \\[ \\sum_{k=1}^{\\infty}\\frac{3k-1}{a^{\\,k}} \\] converges and equals $5$. (Justify which candidate values of $a$ are admissible.)",
    "answer": "\\[\\boxed{a=2}\\]",
    "trap": "Setting the closed form $\\dfrac{2a+1}{(a-1)^2}=5$, clearing to $5a^2-12a+4=0$, and reporting BOTH roots $a=2$ and $a=\\tfrac25$. But $\\sum\\frac{3k-1}{a^k}=\\sum(3k-1)\\big(\\tfrac1a\\big)^k$ has ratio $\\tfrac1a$, so it converges only when $|a|>1$. At $a=\\tfrac25$ the `closed form' is the analytic continuation of a DIVERGENT series — it is not the sum. Keeping $a=\\frac25$ is the fatal error.",
    "solutions": [
      {
        "name": "Closed form with domain check",
        "steps": [
          "Convergence needs $\\big|\\tfrac1a\\big|<1$, i.e. $|a|>1$. On that domain $\\sum_{k\\ge1}\\dfrac{3k-1}{a^k}=3\\cdot\\dfrac{1/a}{(1-1/a)^2}-\\dfrac{1/a}{1-1/a}=\\dfrac{2a+1}{(a-1)^2}$.",
          "Set $\\dfrac{2a+1}{(a-1)^2}=5\\Rightarrow 5(a-1)^2=2a+1\\Rightarrow 5a^2-12a+4=0$.",
          "Roots: $a=2$ and $a=\\tfrac25$. Apply $|a|>1$: only $a=2$ survives ($|\\tfrac25|<1$ gives a divergent series).",
          "Therefore $\\boxed{a=2}$."
        ]
      },
      {
        "name": "Substitute $r=1/a$ and use special sums",
        "steps": [
          "Let $r=1/a$, $|r|<1$. The sum is $3\\sum k r^k-\\sum r^k=\\dfrac{3r}{(1-r)^2}-\\dfrac{r}{1-r}=\\dfrac{r(2+r)}{(1-r)^2}$.",
          "Set $\\dfrac{r(2+r)}{(1-r)^2}=5\\Rightarrow r^2+2r=5(1-2r+r^2)\\Rightarrow 4r^2-12r+5=0$.",
          "Roots $r=\\tfrac12$ and $r=\\tfrac52$; the constraint $|r|<1$ keeps only $r=\\tfrac12$, i.e. $a=2$.",
          "Hence $\\boxed{a=2}$ (the root $r=\\tfrac52$ corresponds to the divergent $a=\\tfrac25$)."
        ]
      }
    ],
    "remark": "Insight: a closed-form formula is an algebraic identity that the series obeys ONLY inside its disc of convergence. The quadratic always has two roots; the convergence window is the conceptual filter that discards the impostor. This is the signature AGP trap — summing past $|r|\\ge1$."
  },
  {
    "theme": "agp",
    "themeLabel": "Arithmetico-Geometric & Special Sums",
    "title": "Odd Numbers, Alternating Signs",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "agp",
      "alternating",
      "negative-ratio",
      "odd-numbers",
      "abel"
    ],
    "statement": "Evaluate \\[ W=\\sum_{k=1}^{\\infty}(2k-1)\\left(-\\tfrac12\\right)^{k-1}=1-3\\cdot\\tfrac12+5\\cdot\\tfrac14-7\\cdot\\tfrac18+\\cdots, \\] and contrast it with the value the same coefficient sequence would give at ratio $+\\tfrac12$.",
    "answer": "\\[\\boxed{W=\\dfrac{2}{9}}\\]",
    "trap": "Using $\\sum(2k-1)r^{k-1}=\\dfrac{1+r}{(1-r)^2}$ but plugging the magnitude $r=\\tfrac12$ instead of the signed $r=-\\tfrac12$, getting $\\dfrac{3/2}{1/4}=6$ (the positive-ratio answer) instead of $\\dfrac{1/2}{9/4}=\\dfrac29$. The sign of $r$ enters the formula through BOTH $1+r$ and $(1-r)^2$; dropping it silently doubles the error. Also one must confirm $|r|=\\tfrac12<1$ so the alternating AGP converges absolutely.",
    "solutions": [
      {
        "name": "Signed closed form",
        "steps": [
          "$\\sum_{k\\ge1}(2k-1)r^{k-1}=2\\sum k r^{k-1}-\\sum r^{k-1}=\\dfrac{2}{(1-r)^2}-\\dfrac{1}{1-r}=\\dfrac{1+r}{(1-r)^2}$, valid for $|r|<1$.",
          "Here $r=-\\tfrac12$, $|r|<1$: $W=\\dfrac{1-\\tfrac12}{(1+\\tfrac12)^2}=\\dfrac{1/2}{9/4}=\\dfrac{2}{9}$.",
          "At $r=+\\tfrac12$ the same formula gives $\\dfrac{3/2}{1/4}=6$, confirming the sign is decisive.",
          "Thus $W=\\boxed{\\dfrac{2}{9}}$."
        ]
      },
      {
        "name": "Multiply-by-$r$ directly",
        "steps": [
          "$W=\\sum_{k\\ge1}(2k-1)(-\\tfrac12)^{k-1}$; multiply by $r=-\\tfrac12$: $rW=\\sum_{k\\ge1}(2k-1)(-\\tfrac12)^{k}=\\sum_{k\\ge2}(2k-3)(-\\tfrac12)^{k-1}$.",
          "$W-rW=1+\\sum_{k\\ge2}\\big[(2k-1)-(2k-3)\\big](-\\tfrac12)^{k-1}=1+2\\sum_{k\\ge2}(-\\tfrac12)^{k-1}$.",
          "$\\sum_{k\\ge2}(-\\tfrac12)^{k-1}=\\dfrac{-1/2}{1+1/2}=-\\tfrac13$, so $\\tfrac32 W=1+2(-\\tfrac13)=\\tfrac13$.",
          "$W=\\tfrac23\\cdot\\tfrac13=\\boxed{\\dfrac{2}{9}}$."
        ]
      },
      {
        "name": "Differentiate the geometric series",
        "steps": [
          "For $|x|<1$, $\\sum_{k\\ge1}x^{k-1}=\\dfrac{1}{1-x}$ and $\\sum_{k\\ge1}(k)x^{k-1}=\\dfrac{1}{(1-x)^2}$.",
          "So $W(x):=\\sum(2k-1)x^{k-1}=\\dfrac{2}{(1-x)^2}-\\dfrac{1}{1-x}=\\dfrac{1+x}{(1-x)^2}$.",
          "Evaluate at $x=-\\tfrac12$: $\\dfrac{1/2}{(3/2)^2}=\\dfrac{2}{9}$.",
          "Hence $W=\\boxed{\\dfrac{2}{9}}$."
        ]
      }
    ],
    "remark": "Insight: an AGP with $r<0$ is just as evaluable as one with $r>0$ — the multiply-by-$r$ machinery is sign-agnostic — but the closed form is a genuine function of the signed $r$, so the contrast $6$ vs $\\tfrac29$ is a one-line litmus test for whether a student tracked the sign."
  },
  {
    "theme": "agp",
    "themeLabel": "Arithmetico-Geometric & Special Sums",
    "title": "The Gambler's Expected Reward",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "agp",
      "probability",
      "expectation",
      "geometric-trials",
      "hidden-agp"
    ],
    "statement": "A device is switched on and tested repeatedly. Each test independently passes with probability $\\tfrac13$; testing stops at the first pass. If the first pass occurs on trial number $k$, the operator is paid $(2k-1)$ tokens. Determine the expected payout, and explain where the arithmetico-geometric structure is hiding.",
    "answer": "\\[\\boxed{\\mathbb{E}[\\text{payout}]=5}\\]",
    "trap": "Computing $\\mathbb{E}[2K-1]=2\\mathbb{E}[K]-1$ with the WRONG mean: for a geometric($p$) first-success on trial $k$, $\\mathbb{E}[K]=1/p=3$, giving $2\\cdot3-1=5$ correctly. But a common slip is using $\\mathbb{E}[K]=\\tfrac{1-p}{p}=2$ (the number-of-failures convention), yielding $3$. The payout indexes from trial $1$, so the AGP is $\\sum(2k-1)p(1-p)^{k-1}$ with support starting at $k=1$; mismatching the support convention is the trap.",
    "solutions": [
      {
        "name": "Direct AGP expectation",
        "steps": [
          "$\\mathbb{E}=\\sum_{k=1}^\\infty(2k-1)\\,p(1-p)^{k-1}$ with $p=\\tfrac13$, $1-p=\\tfrac23$; the ratio $\\tfrac23<1$ guarantees convergence.",
          "$\\mathbb{E}=p\\Big[2\\sum_{k\\ge1}k(1-p)^{k-1}-\\sum_{k\\ge1}(1-p)^{k-1}\\Big]=p\\Big[\\dfrac{2}{(1-(1-p))^2}-\\dfrac{1}{1-(1-p)}\\Big]$.",
          "$=p\\Big[\\dfrac{2}{p^2}-\\dfrac1p\\Big]=\\dfrac2p-1$.",
          "With $p=\\tfrac13$: $\\mathbb{E}=6-1=5$. So $\\boxed{5}$."
        ]
      },
      {
        "name": "Linearity of expectation",
        "steps": [
          "$\\mathbb{E}[2K-1]=2\\mathbb{E}[K]-1$ where $K$ is the trial of first success.",
          "For first-success-on-trial geometric, $\\mathbb{E}[K]=\\dfrac1p=3$.",
          "$\\mathbb{E}=2\\cdot3-1=5$.",
          "Hence $\\boxed{5}$; the AGP $\\sum(2k-1)p(1-p)^{k-1}$ is exactly this expectation written out term by term."
        ]
      },
      {
        "name": "Multiply-by-$r$ on the payout series",
        "steps": [
          "Let $r=1-p=\\tfrac23$ and $E=\\sum_{k\\ge1}(2k-1)pr^{k-1}$. Then $rE=\\sum_{k\\ge1}(2k-1)pr^{k}=\\sum_{k\\ge2}(2k-3)pr^{k-1}$.",
          "$E-rE=p\\cdot1+2p\\sum_{k\\ge2}r^{k-1}=p+2p\\cdot\\dfrac{r}{1-r}=p+2p\\cdot\\dfrac{r}{p}=p+2r$.",
          "So $(1-r)E=p+2r\\Rightarrow pE=p+2r\\Rightarrow E=1+\\dfrac{2r}{p}=1+\\dfrac{2(2/3)}{1/3}=1+4=5$.",
          "Therefore $\\mathbb{E}=\\boxed{5}$."
        ]
      }
    ],
    "remark": "Insight: every geometric-trials expectation $\\mathbb{E}[g(K)]$ with $g$ linear is secretly an AGP $\\sum(ak+b)r^{k}$. Recognising that turns a probability question into a multiply-by-$r$ computation, and the support convention ($k\\ge1$ vs $k\\ge0$) is the conceptual fault line."
  },
  {
    "theme": "agp",
    "themeLabel": "Arithmetico-Geometric & Special Sums",
    "title": "How Fast the Tail Vanishes",
    "difficulty": 5,
    "task": "Find the number of",
    "tags": [
      "agp",
      "finite-sum",
      "tail-estimate",
      "threshold",
      "fifths"
    ],
    "statement": "For the convergent series $\\displaystyle\\sum_{k=1}^{\\infty}\\frac{4k-3}{5^{\\,k}}$ (whose total is $\\tfrac12$), let $R_n=\\sum_{k=n+1}^{\\infty}\\dfrac{4k-3}{5^{\\,k}}$ be the tail after $n$ terms. Find a closed form for $R_n$, and hence find the least number of terms $n$ for which the tail first satisfies $R_n<\\dfrac{1}{40}$; report that least $n$.",
    "answer": "\\[\\boxed{R_n=\\dfrac{2n+1}{2\\cdot 5^{\\,n}},\\qquad n_{\\min}=4}\\]",
    "trap": "Estimating the tail by its single leading (first omitted) term, $R_n\\approx\\dfrac{4(n+1)-3}{5^{\\,n+1}}=\\dfrac{4n+1}{5^{\\,n+1}}$, and solving that instead. This underestimates the tail (every later term is positive), so it crosses the threshold too early: at $n=3$ the leading term is $\\tfrac{13}{625}=0.0208<\\tfrac1{40}$, falsely accepting $n=3$ — yet the true tail is $R_3=\\tfrac{7}{250}=0.028>\\tfrac1{40}$, so $n=3$ actually fails and the real answer is $n=4$. The tail of an AGP is itself an AGP with an EXACT closed form; one must sum it, not bound it by a single term.",
    "solutions": [
      {
        "name": "Finite partial sum, then subtract",
        "steps": [
          "First the full sum, splitting into an AGP and a GP: $\\sum_{k\\ge1}\\dfrac{4k-3}{5^k}=4\\sum_{k\\ge1}\\dfrac{k}{5^k}-3\\sum_{k\\ge1}\\dfrac1{5^k}=4\\cdot\\dfrac{1/5}{(1-1/5)^2}-3\\cdot\\dfrac{1/5}{1-1/5}=4\\cdot\\dfrac{5}{16}-\\dfrac34=\\dfrac54-\\dfrac34=\\dfrac12.$",
          "Finite AGP by the multiply-by-$\\tfrac15$ and subtract trick (keeping the boundary terms): $S_n=\\sum_{k=1}^n\\dfrac{4k-3}{5^k}=\\dfrac{5^n-2n-1}{2\\cdot5^n}$.",
          "Tail $R_n=\\dfrac12-S_n=\\dfrac12-\\dfrac{5^n-2n-1}{2\\cdot5^n}=\\dfrac{5^n-(5^n-2n-1)}{2\\cdot5^n}=\\dfrac{2n+1}{2\\cdot5^n}$.",
          "Solve $\\dfrac{2n+1}{2\\cdot5^n}<\\dfrac{1}{40}$: $n=3$ gives $\\dfrac{7}{250}=0.028>\\tfrac1{40}=0.025$ (fails); $n=4$ gives $\\dfrac{9}{1250}=0.0072<0.025$ (holds). Least $n=4$. $\\boxed{n_{\\min}=4}$."
        ]
      },
      {
        "name": "Re-index the tail as a fresh AGP",
        "steps": [
          "Substitute $j=k-n$ so $k=j+n$ with $j\\ge1$: $R_n=\\sum_{j\\ge1}\\dfrac{4(j+n)-3}{5^{\\,j+n}}=\\dfrac{1}{5^n}\\sum_{j\\ge1}\\dfrac{4j+(4n-3)}{5^{\\,j}}$.",
          "Evaluate the inner AGP with $\\sum_{j\\ge1}j\\,5^{-j}=\\tfrac{5}{16}$ and $\\sum_{j\\ge1}5^{-j}=\\tfrac14$: $\\;4\\cdot\\tfrac{5}{16}+(4n-3)\\cdot\\tfrac14=\\tfrac54+n-\\tfrac34=n+\\tfrac12=\\dfrac{2n+1}{2}.$",
          "Hence $R_n=\\dfrac{1}{5^n}\\cdot\\dfrac{2n+1}{2}=\\dfrac{2n+1}{2\\cdot5^n}$ — the same closed form, the arithmetic slope surviving as the $2n+1$ in the numerator.",
          "Threshold $R_n<\\tfrac1{40}$: $R_3=\\tfrac{7}{250}=0.028\\not<0.025$, but $R_4=\\tfrac{9}{1250}=0.0072<0.025$, so it first holds at $n=4$. $\\boxed{n_{\\min}=4}$."
        ]
      }
    ],
    "remark": "Insight: the remainder of an AGP is, after re-indexing, the same AGP scaled by $r^n$ — so it has an exact closed form and the slope of the arithmetic part survives as the $2n+1$ in the numerator. Bounding by the leading term throws away that exactness; here it crosses $\\tfrac1{40}$ one step early (at $n=3$ instead of the true $n=4$), mis-calling the threshold."
  },
  {
    "theme": "telescoping",
    "themeLabel": "Telescoping & the Method of Differences",
    "title": "The Triple-Product Collapse",
    "difficulty": 3,
    "task": "Evaluate",
    "tags": [
      "telescoping",
      "partial-fractions",
      "vn-method",
      "finite-sum",
      "infinite-sum"
    ],
    "statement": "For a positive integer $n$, let $\\displaystyle S_n=\\sum_{k=1}^{n}\\frac{1}{k(k+1)(k+2)}$. Find a closed form for $S_n$ and evaluate $\\displaystyle\\lim_{n\\to\\infty}S_n$. Report the ordered pair $\\big(S_n,\\ \\lim_{n\\to\\infty}S_n\\big)$.",
    "answer": "\\[\\boxed{\\left(\\dfrac{n(n+3)}{4(n+1)(n+2)},\\ \\dfrac14\\right)}\\]",
    "trap": "Splitting as $\\frac1{k(k+1)(k+2)}=\\frac{A}{k}+\\frac{B}{k+1}+\\frac{C}{k+2}$ and summing each piece separately: the three harmonic-type partial sums each diverge, and recombining their tails by hand almost always drops one boundary term, giving $\\frac1{2}$ or $\\frac{1}{2(n+1)}$ instead of the correct paired endpoints. The fix is to telescope the grouped difference $V_k-V_{k+1}$, never the individual fractions.",
    "solutions": [
      {
        "name": "V_n difference of reciprocal products",
        "steps": [
          "Set $V_k=\\dfrac{1}{k(k+1)}$. Then $V_k-V_{k+1}=\\dfrac{1}{k(k+1)}-\\dfrac{1}{(k+1)(k+2)}=\\dfrac{(k+2)-k}{k(k+1)(k+2)}=\\dfrac{2}{k(k+1)(k+2)}$.",
          "Hence $\\dfrac{1}{k(k+1)(k+2)}=\\tfrac12\\big(V_k-V_{k+1}\\big)$, a pure telescoping term.",
          "Summing, $S_n=\\tfrac12\\big(V_1-V_{n+1}\\big)=\\tfrac12\\Big(\\tfrac12-\\tfrac{1}{(n+1)(n+2)}\\Big)=\\dfrac{n(n+3)}{4(n+1)(n+2)}$.",
          "As $n\\to\\infty$ the residual $V_{n+1}\\to0$, so $S_n\\to\\tfrac12\\cdot\\tfrac12=\\dfrac14$. Thus $\\boxed{\\left(\\dfrac{n(n+3)}{4(n+1)(n+2)},\\ \\dfrac14\\right)}$."
        ]
      },
      {
        "name": "Partial fractions done safely",
        "steps": [
          "Decompose $\\dfrac{1}{k(k+1)(k+2)}=\\dfrac{1/2}{k}-\\dfrac{1}{k+1}+\\dfrac{1/2}{k+2}$.",
          "Group as $\\tfrac12\\big(\\tfrac1k-\\tfrac1{k+1}\\big)-\\tfrac12\\big(\\tfrac1{k+1}-\\tfrac1{k+2}\\big)$ so each bracket telescopes.",
          "Summing $k=1..n$: first chain gives $\\tfrac12(1-\\tfrac1{n+1})$, second gives $\\tfrac12(\\tfrac12-\\tfrac1{n+2})$; subtract to get $\\dfrac{n(n+3)}{4(n+1)(n+2)}$.",
          "Letting $n\\to\\infty$ gives $\\dfrac14$, so $\\boxed{\\left(\\dfrac{n(n+3)}{4(n+1)(n+2)},\\ \\dfrac14\\right)}$."
        ]
      }
    ],
    "remark": "Insight: a degree-3 product in the denominator telescopes only after you halve a consecutive-pair reciprocal. The factor $\\tfrac12$ is exactly $\\tfrac{1}{(k+2)-k}$ — the rung-spacing of the ladder. Recognising $V_k=1/[k(k+1)]$ as the right antidifference beats any brute-force partial fraction."
  },
  {
    "theme": "telescoping",
    "themeLabel": "Telescoping & the Method of Differences",
    "title": "Factorials in Disguise",
    "difficulty": 3,
    "task": "Evaluate",
    "tags": [
      "telescoping",
      "factorials",
      "vn-method",
      "finite-sum"
    ],
    "statement": "Evaluate $\\displaystyle T_n=\\sum_{k=1}^{n}\\big(k^2+1\\big)\\,k!$ in closed form, and state the value of $T_5$.",
    "answer": "\\[\\boxed{T_n=n\\,(n+1)!,\\qquad T_5=3600}\\]",
    "trap": "Writing $(k^2+1)k!=k^2\\,k!+k!$ and trying to telescope the two pieces independently. The lone term $k!$ has no clean antidifference, so the split stalls: the partial sums $\\sum_{k=1}^n k!=1,3,9,33,153,\\dots$ are the left-factorials, which admit no elementary closed form. One must instead absorb the whole coefficient $k^2+1$ into a single antidifference $V_k-V_{k-1}$ of a $[\\text{poly}]\\cdot k!$ value.",
    "solutions": [
      {
        "name": "Guess-the-antidifference V_n",
        "steps": [
          "Look for $V_k=p(k)\\,k!$ whose first difference $V_k-V_{k-1}$ reproduces the summand $(k^2+1)k!$. Since the summand carries a $k^2$ and the factorial level should rise by one, try the single-term ansatz $V_k=k\\,(k+1)!$.",
          "Compute $V_k-V_{k-1}=k(k+1)!-(k-1)k!$. Factor out $k!$ using $(k+1)!=(k+1)k!$: $=k!\\big[k(k+1)-(k-1)\\big]=k!\\big[k^2+k-k+1\\big]=k!\\,(k^2+1)$ — exactly the summand.",
          "Hence the sum telescopes: $T_n=\\sum_{k=1}^n\\big(V_k-V_{k-1}\\big)=V_n-V_0=n(n+1)!-0\\cdot1!=n(n+1)!$.",
          "With $n=5$: $T_5=5\\cdot6!=5\\cdot720=\\boxed{3600}$, and $T_n=n(n+1)!$."
        ]
      },
      {
        "name": "Build from the staircase identity",
        "steps": [
          "Start from the staircase $k\\cdot k!=(k+1)!-k!$. Multiply by $k$: $k^2\\,k!=k\\big[(k+1)!-k!\\big]=k(k+1)!-k\\,k!=k(k+1)!-\\big[(k+1)!-k!\\big]$.",
          "Add the leftover $k!$: $(k^2+1)k!=k(k+1)!-(k+1)!+k!+k!=k(k+1)!-(k+1)!+2k!$.",
          "Regroup the last two terms with $(k+1)!=(k+1)k!$: $-(k+1)!+2k!=(-(k+1)+2)k!=(1-k)k!=-(k-1)k!$, so $(k^2+1)k!=k(k+1)!-(k-1)k!$.",
          "The right side is $V_k-V_{k-1}$ with $V_k=k(k+1)!$ (note $V_{k-1}=(k-1)k!$). Telescoping gives $T_n=V_n-V_0=n(n+1)!$, hence $T_5=5\\cdot6!=3600$. $\\boxed{T_n=n(n+1)!}$"
        ]
      }
    ],
    "remark": "Insight: every factorial telescope is the single identity $k\\cdot k!=(k+1)!-k!$ in costume. The polynomial coefficient only decides which level — $(k+1)!$ versus $k!$ — survives at the endpoints; spotting $V_k=k(k+1)!$ turns a scary product into a one-line answer. The trap is real because the naive split orphans a $\\sum k!$ that has no elementary closed form."
  },
  {
    "theme": "telescoping",
    "themeLabel": "Telescoping & the Method of Differences",
    "title": "Arctangents on a Ladder",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "telescoping",
      "arctangent",
      "addition-formula",
      "infinite-sum"
    ],
    "statement": "Evaluate $\\displaystyle \\sum_{k=1}^{\\infty}\\arctan\\!\\left(\\frac{1}{k^2+k+1}\\right)$, and also give the partial sum $\\displaystyle\\sum_{k=1}^{n}\\arctan\\!\\left(\\frac{1}{k^2+k+1}\\right)$ in closed form.",
    "answer": "\\[\\boxed{\\ \\frac{\\pi}{4}\\ ;\\qquad \\sum_{k=1}^{n}=\\arctan(n+1)-\\frac{\\pi}{4}\\ }\\]",
    "trap": "Using $\\arctan a-\\arctan b=\\arctan\\frac{a-b}{1+ab}$ without checking that the result stays in $(-\\tfrac\\pi2,\\tfrac\\pi2)$. Here $a=k+1,\\,b=k$ give $ab=k^2+k>0$, so no $\\pm\\pi$ correction is needed — but a student who blindly writes $\\arctan(k+1)-\\arctan k$ for the infinite sum and then evaluates $\\arctan(\\infty)-\\arctan(1)$ as $\\frac\\pi2-\\frac\\pi4$ is right only because every intermediate $ab>0$; the same move on a sum with $ab<-1$ would be off by $\\pi$.",
    "solutions": [
      {
        "name": "Difference of arctangents",
        "steps": [
          "Note $\\dfrac{1}{k^2+k+1}=\\dfrac{(k+1)-k}{1+(k+1)k}$, which is exactly the tangent-subtraction form with $a=k+1,\\ b=k$.",
          "Since $ab=k(k+1)>0$, we have $\\arctan\\dfrac{1}{k^2+k+1}=\\arctan(k+1)-\\arctan(k)$ with no branch correction.",
          "Partial sum telescopes: $\\sum_{k=1}^n=\\arctan(n+1)-\\arctan(1)=\\arctan(n+1)-\\dfrac\\pi4$.",
          "As $n\\to\\infty$, $\\arctan(n+1)\\to\\dfrac\\pi2$, giving $\\dfrac\\pi2-\\dfrac\\pi4=\\boxed{\\dfrac\\pi4}$."
        ]
      },
      {
        "name": "Complex-argument bookkeeping",
        "steps": [
          "Each term equals $\\arg\\!\\big((k+1)+i\\big)-\\arg\\!\\big(k+i\\big)$, since $\\arg\\dfrac{(k+1)+i}{k+i}=\\arg\\big((k+1)+i\\big)-\\arg(k+i)$ and the quotient has positive real part, so its principal arg is exactly $\\arctan\\dfrac{1}{k^2+k+1}$.",
          "Summing the arguments telescopes: $\\sum_{k=1}^n=\\arg\\big((n+1)+i\\big)-\\arg(1+i)=\\arctan(n+1)-\\dfrac\\pi4$.",
          "Each quotient lies in the right half-plane, so no full turns of $2\\pi$ accumulate — the principal-branch sum is exact.",
          "Limit of arguments: $\\arg(\\infty+i)-\\arg(1+i)=\\dfrac\\pi2-\\dfrac\\pi4=\\boxed{\\dfrac\\pi4}$."
        ]
      }
    ],
    "remark": "Insight: $k^2+k+1=1+k(k+1)$ is the fingerprint of an arctan ladder. The conceptual content is the positivity of $ab$ guaranteeing the clean branch — telescoping arctans is safe here precisely because every rung sits in the principal range."
  },
  {
    "theme": "telescoping",
    "themeLabel": "Telescoping & the Method of Differences",
    "title": "Skip-a-Rung Arctangent",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "telescoping",
      "arctangent",
      "two-step-telescope",
      "infinite-sum"
    ],
    "statement": "Evaluate $\\displaystyle \\sum_{k=1}^{\\infty}\\arctan\\!\\left(\\frac{2}{k^2}\\right)$.",
    "answer": "\\[\\boxed{\\dfrac{3\\pi}{4}}\\]",
    "trap": "Forcing the term into a single-rung difference $\\arctan f(k+1)-\\arctan f(k)$. The correct decomposition is a skip-rung one, $\\arctan(k+1)-\\arctan(k-1)$, which leaves two surviving terms at each boundary. Anyone who treats it like a one-step telescope and keeps only one endpoint loses an entire $\\arctan(\\infty)=\\tfrac\\pi2$ and reports $\\tfrac\\pi4$ instead of $\\tfrac{3\\pi}4$.",
    "solutions": [
      {
        "name": "Skip-rung difference",
        "steps": [
          "Write $\\dfrac{2}{k^2}=\\dfrac{(k+1)-(k-1)}{1+(k+1)(k-1)}$, since $1+(k^2-1)=k^2$. As $(k+1)(k-1)=k^2-1\\ge0$ for $k\\ge1$, the product never reaches $-1$, so the arctan subtraction formula applies with no branch correction.",
          "Hence $\\arctan\\dfrac{2}{k^2}=\\arctan(k+1)-\\arctan(k-1)$.",
          "Partial sum: $\\displaystyle\\sum_{k=1}^n\\big[\\arctan(k+1)-\\arctan(k-1)\\big]=\\big[\\arctan(n+1)+\\arctan(n)\\big]-\\big[\\arctan(1)+\\arctan(0)\\big]=\\arctan(n+1)+\\arctan(n)-\\dfrac\\pi4.$ Because the difference spans two rungs, two terms survive at each end.",
          "Let $n\\to\\infty$: $\\dfrac\\pi2+\\dfrac\\pi2-\\dfrac\\pi4=\\boxed{\\dfrac{3\\pi}{4}}.$"
        ]
      },
      {
        "name": "The $V_n$ second-difference view",
        "steps": [
          "Set $V_k=\\arctan k$. Step 2 of the first method says the general term is exactly $V_{k+1}-V_{k-1}$ — a span of two rungs, the discrete analogue of a second difference, not a single $V_{k+1}-V_k$.",
          "A span-2 telescope leaves a pair of terms at each boundary: $\\displaystyle\\sum_{k=1}^n (V_{k+1}-V_{k-1})=(V_{n+1}+V_n)-(V_1+V_0).$",
          "Substitute $V_{n+1}=\\arctan(n+1),\\ V_n=\\arctan n,\\ V_1=\\tfrac\\pi4,\\ V_0=0.$",
          "Send $n\\to\\infty$: $\\tfrac\\pi2+\\tfrac\\pi2-\\tfrac\\pi4-0=\\boxed{\\dfrac{3\\pi}{4}}.$"
        ]
      }
    ],
    "remark": "Insight: $2/k^2$ secretly encodes a two-rung arctan jump, the discrete analogue of a second difference. The whole difficulty is realising the boundary contributes a pair of terms — the same residual-leftover trap that ruins naive telescopers, now wearing an arctan mask."
  },
  {
    "theme": "telescoping",
    "themeLabel": "Telescoping & the Method of Differences",
    "title": "The Factorial Denominator",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "telescoping",
      "factorials",
      "series",
      "infinite-sum"
    ],
    "statement": "Let $\\displaystyle U_n=\\sum_{k=1}^{n}\\frac{k}{(k+1)!}$. Find $U_n$ in closed form and evaluate $\\displaystyle\\sum_{k=1}^{\\infty}\\frac{k}{(k+1)!}$.",
    "answer": "\\[\\boxed{\\ U_n=1-\\dfrac{1}{(n+1)!}\\ ;\\qquad \\sum_{k=1}^{\\infty}=1\\ }\\]",
    "trap": "Writing $\\frac{k}{(k+1)!}=\\frac{k}{(k+1)!}$ and reaching for $e$-series machinery (recognising $\\sum 1/k!=e$) to assemble the answer from $e$ and a few correction terms. That route is error-prone bookkeeping; worse, a sign slip in $k=(k+1)-1$ makes people write $\\frac{1}{k!}+\\frac{1}{(k+1)!}$ (wrong sign), whose sum is $(e-1)+(e-2)=2e-3\\approx2.4366$ — a divergent-looking mismatch instead of the clean telescope.",
    "solutions": [
      {
        "name": "Numerator split into a difference",
        "steps": [
          "Write $k=(k+1)-1$, so $\\dfrac{k}{(k+1)!}=\\dfrac{(k+1)-1}{(k+1)!}=\\dfrac{1}{k!}-\\dfrac{1}{(k+1)!}$.",
          "This is $V_k-V_{k+1}$ with $V_k=\\dfrac{1}{k!}$ — a pure telescope.",
          "$U_n=V_1-V_{n+1}=1-\\dfrac{1}{(n+1)!}$.",
          "Letting $n\\to\\infty$, $\\dfrac{1}{(n+1)!}\\to0$, so the sum is $\\boxed{1}$."
        ]
      },
      {
        "name": "Cross-check via the e-series",
        "steps": [
          "From $\\dfrac{k}{(k+1)!}=\\dfrac1{k!}-\\dfrac1{(k+1)!}$, the infinite sum is $\\sum_{k\\ge1}\\big(\\tfrac1{k!}-\\tfrac1{(k+1)!}\\big)$.",
          "The first family sums to $\\sum_{k\\ge1}\\tfrac1{k!}=e-1$; the second is $\\sum_{k\\ge1}\\tfrac1{(k+1)!}=\\sum_{j\\ge2}\\tfrac1{j!}=e-2$ (shift $j=k+1$).",
          "Subtract: $(e-1)-(e-2)=1$, matching the telescope and confirming no term was dropped.",
          "Hence $\\sum_{k=1}^{\\infty}\\dfrac{k}{(k+1)!}=\\boxed{1}$ with partial sum $1-\\dfrac1{(n+1)!}$."
        ]
      }
    ],
    "remark": "Insight: the trick $k=(k+1)-1$ converts a factorial fraction into the difference of two reciprocal factorials. The $e$-series cross-check is a sanity guardrail, but the telescope alone gives both the exact partial sum *and* the limit for free."
  },
  {
    "theme": "telescoping",
    "themeLabel": "Telescoping & the Method of Differences",
    "title": "Odd Numerator, Square Steps",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "telescoping",
      "partial-fractions",
      "squares",
      "infinite-sum"
    ],
    "statement": "Evaluate $\\displaystyle \\sum_{k=1}^{n}\\frac{2k+1}{k^2(k+1)^2}$ in closed form, and deduce $\\displaystyle\\sum_{k=1}^{\\infty}\\frac{2k+1}{k^2(k+1)^2}$.",
    "answer": "\\[\\boxed{\\ 1-\\dfrac{1}{(n+1)^2}\\ ;\\qquad \\sum_{k=1}^{\\infty}=1\\ }\\]",
    "trap": "Doing a full four-term partial-fraction expansion $\\frac{A}{k}+\\frac{B}{k^2}+\\frac{C}{k+1}+\\frac{D}{(k+1)^2}$. It works, but the $\\frac{A}{k}+\\frac{C}{k+1}$ part telescopes while $\\frac{B}{k^2}+\\frac{D}{(k+1)^2}$ does **not** collapse term-by-term — students wrongly assume all four chains telescope and lose the $\\frac{1}{(n+1)^2}$ residual. The clean view sees the numerator $2k+1=(k+1)^2-k^2$ instantly.",
    "solutions": [
      {
        "name": "Recognise the perfect-square difference",
        "steps": [
          "Observe $2k+1=(k+1)^2-k^2$, so $\\dfrac{2k+1}{k^2(k+1)^2}=\\dfrac{(k+1)^2-k^2}{k^2(k+1)^2}=\\dfrac{1}{k^2}-\\dfrac{1}{(k+1)^2}$.",
          "This is $V_k-V_{k+1}$ with $V_k=\\dfrac1{k^2}$ — telescopes immediately.",
          "$\\sum_{k=1}^n=V_1-V_{n+1}=1-\\dfrac1{(n+1)^2}$.",
          "As $n\\to\\infty$, the boundary residual vanishes, giving $\\boxed{1}$."
        ]
      },
      {
        "name": "Antidifference verification",
        "steps": [
          "Posit $V_k=k^{-2}$ as the antidifference and compute $V_k-V_{k+1}=\\dfrac1{k^2}-\\dfrac1{(k+1)^2}=\\dfrac{(k+1)^2-k^2}{k^2(k+1)^2}=\\dfrac{2k+1}{k^2(k+1)^2}$.",
          "This equals the summand exactly, so the telescoping is valid for all $k\\ge1$.",
          "Therefore $\\sum_{k=1}^n=V_1-V_{n+1}=1-\\dfrac1{(n+1)^2}$.",
          "The infinite sum is $1-0=\\boxed{1}$."
        ]
      }
    ],
    "remark": "Insight: an odd-linear numerator over a product of consecutive squares is *always* a difference of reciprocal squares, because $2k+1=(k+1)^2-k^2$. Seeing the numerator as a square-difference replaces a fragile four-fraction split with one clean line — and exposes the lone surviving residual."
  },
  {
    "theme": "telescoping",
    "themeLabel": "Telescoping & the Method of Differences",
    "title": "Cubes Cancel in a Product",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "telescoping",
      "products",
      "factorisation",
      "infinite-product",
      "sophie-germain"
    ],
    "statement": "Evaluate the infinite product $\\displaystyle \\prod_{k=2}^{\\infty}\\frac{k^3-1}{k^3+1}$. Also give the finite partial product $\\displaystyle\\prod_{k=2}^{n}\\frac{k^3-1}{k^3+1}$ in closed form.",
    "answer": "\\[\\boxed{\\ \\frac{2}{3}\\ ;\\qquad \\prod_{k=2}^{n}=\\frac{2\\,(n^2+n+1)}{3\\,n(n+1)}\\ }\\]",
    "trap": "Factoring only the linear parts $k^3\\pm1=(k\\pm1)(k^2\\mp k+1)$ and telescoping the linear chain while assuming the quadratic chain $\\prod\\frac{k^2-k+1}{k^2+k+1}$ does nothing. In fact the quadratics telescope too — because $k^2+k+1=(k+1)^2-(k+1)+1$ shifts by one index. Missing that second telescope collapses the answer to $\\lim_{n\\to\\infty}\\frac{2}{n(n+1)}=0$, or leaves a stray $\\frac{1}{3}$ or $2$ at the boundary — all wrong.",
    "solutions": [
      {
        "name": "Two interlocking telescopes",
        "steps": [
          "Factor $\\dfrac{k^3-1}{k^3+1}=\\dfrac{(k-1)(k^2+k+1)}{(k+1)(k^2-k+1)}$.",
          "Linear part: $\\prod_{k=2}^n\\dfrac{k-1}{k+1}=\\dfrac{1\\cdot2}{n(n+1)}=\\dfrac{2}{n(n+1)}$ (a standard two-step linear telescope).",
          "Quadratic part: let $g(k)=k^2-k+1$; then $k^2+k+1=g(k+1)$, so $\\prod_{k=2}^n\\dfrac{g(k+1)}{g(k)}=\\dfrac{g(n+1)}{g(2)}=\\dfrac{n^2+n+1}{3}$.",
          "Multiply: $\\prod_{k=2}^n=\\dfrac{2}{n(n+1)}\\cdot\\dfrac{n^2+n+1}{3}=\\dfrac{2(n^2+n+1)}{3n(n+1)}$; as $n\\to\\infty$ this $\\to\\dfrac23$. $\\boxed{\\dfrac23}$"
        ]
      },
      {
        "name": "Limit by leading-order asymptotics",
        "steps": [
          "From the closed form $\\dfrac{2(n^2+n+1)}{3n(n+1)}=\\dfrac{2}{3}\\cdot\\dfrac{n^2+n+1}{n^2+n}=\\dfrac23\\Big(1+\\dfrac{1}{n^2+n}\\Big)$.",
          "The correction $\\dfrac{1}{n^2+n}\\to0$, so the product converges and its value is the leading constant.",
          "Therefore $\\displaystyle\\lim_{n\\to\\infty}\\prod_{k=2}^{n}\\frac{k^3-1}{k^3+1}=\\dfrac23$.",
          "Hence the infinite product equals $\\boxed{\\dfrac23}$."
        ]
      }
    ],
    "remark": "Insight: $a^3\\pm b^3$ factorisation hides a second telescope in the quadratic factor via $k^2+k+1=(k+1)^2-(k+1)+1$. Two shift-by-one ladders run simultaneously; tracking both boundaries is the whole game, and the surviving $g(2)=3$ in the denominator is what produces the elegant $\\tfrac23$."
  },
  {
    "theme": "telescoping",
    "themeLabel": "Telescoping & the Method of Differences",
    "title": "Rationalising the Surd Ladder",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "telescoping",
      "rationalisation",
      "surds",
      "nested-sum",
      "floor"
    ],
    "statement": "Define $\\displaystyle W=\\sum_{k=1}^{9999}\\frac{1}{(\\sqrt{k}+\\sqrt{k+1})\\big(\\sqrt[4]{k}+\\sqrt[4]{k+1}\\big)}$. Find the exact value of $W$.",
    "answer": "\\[\\boxed{\\ 9\\ }\\]",
    "trap": "Rationalising only the $\\sqrt{k}+\\sqrt{k+1}$ factor and stopping. After multiplying by $\\sqrt{k+1}-\\sqrt{k}$ the term becomes $\\frac{\\sqrt{k+1}-\\sqrt{k}}{\\sqrt[4]{k}+\\sqrt[4]{k+1}}$, which still does **not** telescope. One must *also* recognise $\\sqrt{k+1}-\\sqrt{k}=(\\sqrt[4]{k+1}-\\sqrt[4]{k})(\\sqrt[4]{k+1}+\\sqrt[4]{k})$ — failing the second factorisation leaves a non-telescoping mess and a wrong numeric guess.",
    "solutions": [
      {
        "name": "Double rationalisation",
        "steps": [
          "Multiply numerator and denominator by $(\\sqrt{k+1}-\\sqrt{k})$: the $\\sqrt{k}+\\sqrt{k+1}$ factor becomes $1$, leaving $\\dfrac{\\sqrt{k+1}-\\sqrt{k}}{\\sqrt[4]{k}+\\sqrt[4]{k+1}}$.",
          "Now $\\sqrt{k+1}-\\sqrt{k}=(\\sqrt[4]{k+1})^2-(\\sqrt[4]{k})^2=(\\sqrt[4]{k+1}-\\sqrt[4]{k})(\\sqrt[4]{k+1}+\\sqrt[4]{k})$.",
          "The factor $\\sqrt[4]{k+1}+\\sqrt[4]{k}$ cancels the denominator, leaving the clean term $\\sqrt[4]{k+1}-\\sqrt[4]{k}=V_{k+1}-V_k$ with $V_k=\\sqrt[4]{k}$.",
          "Telescoping $k=1..9999$: $W=\\sqrt[4]{10000}-\\sqrt[4]{1}=10-1=\\boxed{9}$."
        ]
      },
      {
        "name": "Antidifference recognition",
        "steps": [
          "Claim the summand equals $\\sqrt[4]{k+1}-\\sqrt[4]{k}$. Verify by reversing: $\\big(\\sqrt[4]{k+1}-\\sqrt[4]{k}\\big)\\big(\\sqrt[4]{k+1}+\\sqrt[4]{k}\\big)=\\sqrt{k+1}-\\sqrt{k}$, and $\\big(\\sqrt{k+1}-\\sqrt{k}\\big)\\big(\\sqrt{k+1}+\\sqrt{k}\\big)=1$.",
          "Hence $\\sqrt[4]{k+1}-\\sqrt[4]{k}=\\dfrac{1}{(\\sqrt{k}+\\sqrt{k+1})(\\sqrt[4]{k}+\\sqrt[4]{k+1})}$, exactly the summand.",
          "Thus $V_k=\\sqrt[4]{k}$ is the antidifference and the sum telescopes to $V_{10000}-V_1$.",
          "$W=\\sqrt[4]{10000}-1=10-1=\\boxed{9}$."
        ]
      }
    ],
    "remark": "Insight: a denominator built from $\\sqrt{}$ *and* $\\sqrt[4]{}$ signals a two-stage difference-of-squares cascade $a-b=(a^{1/2}-b^{1/2})(a^{1/2}+b^{1/2})$ applied twice. The upper limit $9999$ is chosen so $\\sqrt[4]{10000}=10$ lands exactly — telescoping turns 9999 surds into the integer $9$."
  },
  {
    "theme": "telescoping",
    "themeLabel": "Telescoping & the Method of Differences",
    "title": "The Leftover Residual Trap",
    "difficulty": 5,
    "task": "Find a,b",
    "tags": [
      "telescoping",
      "partial-fractions",
      "residual-terms",
      "gap-two",
      "infinite-sum"
    ],
    "statement": "For $n\\ge1$ let $\\displaystyle R_n=\\sum_{k=1}^{n}\\frac{1}{k(k+2)}$. It is known that $R_n=L-\\dfrac{a\\,n+b}{2(n+1)(n+2)}$ for a constant $L=\\lim_{n\\to\\infty}R_n$ and integers $a,b$. Find the ordered triple $(L,a,b)$.",
    "answer": "\\[\\boxed{\\left(\\dfrac34,\\ 2,\\ 3\\right)}\\]",
    "trap": "Treating $\\frac{1}{k(k+2)}=\\frac12\\big(\\frac1k-\\frac1{k+2}\\big)$ as a *single-rung* telescope. Because the gap is **2**, not 1, the head leaves **two** terms $1+\\frac12$ and the tail leaves **two** terms $\\frac{1}{n+1}+\\frac{1}{n+2}$. Anyone who keeps only one term at each end gets $L=\\frac12$ (wrong) instead of $\\frac34$, and mis-derives $a,b$. The residual is genuinely a *pair* of leftover boundary terms.",
    "solutions": [
      {
        "name": "Gap-two telescope, both ends",
        "steps": [
          "Decompose $\\dfrac{1}{k(k+2)}=\\dfrac12\\Big(\\dfrac1k-\\dfrac1{k+2}\\Big)$.",
          "Summing $k=1..n$, the $\\frac1k$ list is $1,\\tfrac12,\\dots,\\tfrac1n$ and the $\\frac1{k+2}$ list is $\\tfrac13,\\dots,\\tfrac1{n+2}$; cancellation leaves $\\frac12\\Big[\\big(1+\\tfrac12\\big)-\\big(\\tfrac1{n+1}+\\tfrac1{n+2}\\big)\\Big]$.",
          "So $R_n=\\dfrac34-\\dfrac12\\Big(\\dfrac1{n+1}+\\dfrac1{n+2}\\Big)=\\dfrac34-\\dfrac{2n+3}{2(n+1)(n+2)}$.",
          "Matching $\\dfrac{a n+b}{2(n+1)(n+2)}$ gives $a=2,\\ b=3$, and $L=\\lim_{n\\to\\infty}R_n=\\dfrac34$. Hence $\\boxed{(L,a,b)=\\left(\\tfrac34,2,3\\right)}$."
        ]
      },
      {
        "name": "Closed form then expand",
        "steps": [
          "Combine the cancelled sum into a single fraction: $R_n=\\dfrac34-\\dfrac12\\cdot\\dfrac{(n+2)+(n+1)}{(n+1)(n+2)}=\\dfrac34-\\dfrac{2n+3}{2(n+1)(n+2)}$.",
          "Equivalently $R_n=\\dfrac{n(3n+5)}{4(n+1)(n+2)}$ (a sanity-check closed form).",
          "As $n\\to\\infty$, the subtracted residual $\\dfrac{2n+3}{2(n+1)(n+2)}\\sim\\dfrac{1}{n}\\to0$, so $L=\\dfrac34$.",
          "Reading off $a n+b=2n+3$ gives $a=2,b=3$; thus $\\boxed{\\left(\\tfrac34,2,3\\right)}$."
        ]
      }
    ],
    "remark": "Insight: gap-$d$ telescopes leave exactly $d$ terms at each boundary. Here $d=2$ means the limit is $\\tfrac12\\big(1+\\tfrac12\\big)=\\tfrac34$, not $\\tfrac12$. This is the canonical 'leftover residual' that traps fast telescopers — the constant $L$ is built from the *head* terms, while $a,b$ encode the *tail* pair."
  },
  {
    "theme": "telescoping",
    "themeLabel": "Telescoping & the Method of Differences",
    "title": "The Grand Arctan Hybrid",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "telescoping",
      "arctangent",
      "odd-decomposition",
      "hybrid",
      "infinite-sum"
    ],
    "statement": "Evaluate $\\displaystyle \\sum_{k=1}^{\\infty}\\arctan\\!\\left(\\frac{1}{2k^2}\\right)$, and give the partial sum $\\displaystyle\\sum_{k=1}^{n}\\arctan\\!\\left(\\frac{1}{2k^2}\\right)$ in closed form.",
    "answer": "\\[\\boxed{\\ \\frac{\\pi}{4}\\ ;\\qquad \\sum_{k=1}^{n}=\\frac{\\pi}{4}-\\arctan\\!\\frac{1}{2n+1}\\ }\\]",
    "trap": "Decomposing $\\frac{1}{2k^2}$ via the *consecutive-integer* identity $\\arctan(k+1)-\\arctan k$ (which gives $\\frac{1}{k^2+k+1}$, the wrong denominator). The right ladder uses the **odd** anchors: $\\frac{1}{2k^2}=\\frac{(2k+1)-(2k-1)}{1+(2k-1)(2k+1)}$, so the antidifference is $\\arctan\\frac{1}{2k-1}$, not $\\arctan k$. Picking the integer ladder produces a denominator mismatch and an answer off by the wrong endpoints.",
    "solutions": [
      {
        "name": "Odd-reciprocal ladder",
        "steps": [
          "Write $\\dfrac{1}{2k^2}=\\dfrac{2}{4k^2}=\\dfrac{(2k+1)-(2k-1)}{1+(2k-1)(2k+1)}$, since $(2k-1)(2k+1)=4k^2-1$ and $1+4k^2-1=4k^2$.",
          "Both anchors are positive, so $\\arctan\\dfrac{1}{2k^2}=\\arctan\\dfrac{1}{2k-1}-\\arctan\\dfrac{1}{2k+1}$ with no branch correction (the product $\\tfrac1{2k-1}\\cdot\\tfrac1{2k+1}>0$).",
          "Telescoping with $V_k=\\arctan\\frac{1}{2k-1}$: $\\sum_{k=1}^n=\\arctan\\frac{1}{1}-\\arctan\\frac{1}{2n+1}=\\dfrac\\pi4-\\arctan\\dfrac{1}{2n+1}$.",
          "As $n\\to\\infty$, $\\arctan\\frac{1}{2n+1}\\to0$, so the sum is $\\boxed{\\dfrac\\pi4}$."
        ]
      },
      {
        "name": "Argument telescoping in the complex plane",
        "steps": [
          "Each term equals $\\arg\\!\\big((2k-1)+i\\big)-\\arg\\!\\big((2k+1)+i\\big)$ because $\\arg\\frac{(2k-1)+i}{(2k+1)+i}$ has positive real part and tangent $\\frac{1}{2k^2}$.",
          "Summing arguments telescopes: $\\sum_{k=1}^n=\\arg(1+i)-\\arg\\big((2n+1)+i\\big)=\\dfrac\\pi4-\\arctan\\dfrac{1}{2n+1}$.",
          "No $2\\pi$ wraps occur since every quotient sits in the right half-plane.",
          "Limit: $\\dfrac\\pi4-0=\\boxed{\\dfrac\\pi4}$."
        ]
      }
    ],
    "remark": "Insight: the same target $\\frac{1}{2k^2}$ has two seductive decompositions — the integer ladder (wrong here) and the odd-number ladder (right). The discriminator is matching the denominator $4k^2$ to $1+(2k-1)(2k+1)$, not $1+k(k+1)$. Choosing the correct antidifference is the entire conceptual content; both reduce to the principal-branch positivity guarantee."
  },
  {
    "theme": "powersfigurate",
    "themeLabel": "Sums of Powers & Figurate Numbers",
    "title": "The Vanishing Triangle Stack",
    "difficulty": 3,
    "task": "Evaluate",
    "tags": [
      "triangular",
      "telescoping",
      "partial-fractions",
      "reciprocal-sums"
    ],
    "statement": "Let $T_k=\\dfrac{k(k+1)}{2}$ denote the $k$-th triangular number. Evaluate, in closed form as a function of $n$,\n\\[ S_n=\\sum_{k=1}^{n}\\frac{1}{T_k}=\\frac{1}{T_1}+\\frac{1}{T_2}+\\cdots+\\frac{1}{T_n}, \\]\nand determine $\\displaystyle\\lim_{n\\to\\infty}S_n$.",
    "answer": "\\[\\boxed{S_n=\\frac{2n}{n+1},\\qquad \\lim_{n\\to\\infty}S_n=2}\\]",
    "trap": "Writing $\\frac{1}{T_k}=\\frac{2}{k(k+1)}=\\frac{2}{k}-\\frac{2}{k+1}$ but then forgetting the factor $2$ when collapsing (reporting $\\frac{n}{n+1}\\to1$), or mishandling the telescoping endpoints to leave $2-\\frac{2}{n}$ instead of $2-\\frac{2}{n+1}$. The off-by-one in the surviving boundary term changes the closed form even though the limit looks unaffected.",
    "solutions": [
      {
        "name": "Partial fractions / telescoping",
        "steps": [
          "Since $T_k=\\frac{k(k+1)}{2}$, we have $\\frac{1}{T_k}=\\frac{2}{k(k+1)}=2\\left(\\frac{1}{k}-\\frac{1}{k+1}\\right)$.",
          "Summing, $S_n=2\\sum_{k=1}^n\\left(\\frac1k-\\frac1{k+1}\\right)=2\\left(1-\\frac{1}{n+1}\\right)$ by telescoping.",
          "Thus $S_n=\\dfrac{2n}{n+1}$, and as $n\\to\\infty$, $S_n\\to 2$. $\\boxed{S_n=\\frac{2n}{n+1},\\ \\lim=2}$"
        ]
      },
      {
        "name": "Induction on the closed form",
        "steps": [
          "Guess $S_n=\\frac{2n}{n+1}$; check $S_1=\\frac{1}{T_1}=1=\\frac{2}{2}$. ✓",
          "Assume $S_n=\\frac{2n}{n+1}$. Then $S_{n+1}=\\frac{2n}{n+1}+\\frac{2}{(n+1)(n+2)}=\\frac{2n(n+2)+2}{(n+1)(n+2)}=\\frac{2(n+1)^2}{(n+1)(n+2)}=\\frac{2(n+1)}{n+2}$.",
          "This matches the formula with $n\\mapsto n+1$, completing the induction; the limit is $2$. $\\boxed{S_n=\\frac{2n}{n+1}}$"
        ]
      }
    ],
    "remark": "Insight: the reciprocal of a triangular number is intrinsically a difference of unit fractions scaled by $2$ — the figurate structure is what makes the sum telescope. The bounded limit ($2$, not divergence) is the signature of $1/k^2$-like decay."
  },
  {
    "theme": "powersfigurate",
    "themeLabel": "Sums of Powers & Figurate Numbers",
    "title": "Two Triangles Make a Square",
    "difficulty": 3,
    "task": "Prove that",
    "tags": [
      "triangular",
      "square",
      "figurate-identity",
      "consecutive"
    ],
    "statement": "Let $T_m=\\dfrac{m(m+1)}{2}$ be the $m$-th triangular number. Prove that for every integer $n\\ge 1$,\n\\[ T_n+T_{n-1}=n^2, \\]\nand deduce the value of $T_{100}+T_{99}+\\sqrt{8T_{50}+1}$.",
    "answer": "\\[\\boxed{T_n+T_{n-1}=n^2,\\qquad T_{100}+T_{99}+\\sqrt{8T_{50}+1}=10000+101=10101}\\]",
    "trap": "Treating \"two consecutive triangular numbers\" as $T_n+T_{n+1}$ instead of $T_n+T_{n-1}$. Then $T_n+T_{n+1}=(n+1)^2$, so plugging $n=100$ gives $T_{100}+T_{101}=101^2=10201$ instead of $T_{100}+T_{99}=100^2=10000$. The identity is asymmetric: the sum equals the square of the LARGER index, so one must be careful which neighbour is taken and which $n$ the answer is indexed by.",
    "solutions": [
      {
        "name": "Direct algebra",
        "steps": [
          "$T_n+T_{n-1}=\\dfrac{n(n+1)}{2}+\\dfrac{(n-1)n}{2}=\\dfrac{n\\big[(n+1)+(n-1)\\big]}{2}=\\dfrac{n\\cdot 2n}{2}=n^2.$",
          "For the deduction: $T_{100}+T_{99}=100^2=10000$. Also $8T_{50}+1=8\\cdot\\dfrac{50\\cdot51}{2}+1=8\\cdot1275+1=10201=101^2$, so $\\sqrt{8T_{50}+1}=101$.",
          "Therefore the requested value is $10000+101=10101$. $\\boxed{10101}$"
        ]
      },
      {
        "name": "Geometric / dot-array proof",
        "steps": [
          "Arrange $T_n$ as a right-triangular array of dots with $n$ dots in the bottom row; $T_{n-1}$ is the complementary triangle of $n-1$ rows.",
          "Placing the $T_{n-1}$ triangle (rotated $180^\\circ$) against the hypotenuse of $T_n$ fills exactly an $n\\times n$ square, so $T_n+T_{n-1}=n^2$.",
          "Then $8T_m+1=(2m+1)^2$ identically (since $8\\cdot\\dfrac{m(m+1)}{2}+1=4m^2+4m+1$), giving $\\sqrt{8T_{50}+1}=\\sqrt{101^2}=101$ and total $10000+101=10101$. $\\boxed{10101}$"
        ]
      }
    ],
    "remark": "Insight: the two figurate facts ($T_n+T_{n-1}=n^2$ and $8T_m+1=(2m+1)^2$) are the same statement viewed two ways — every triangular number is exactly \"half a square minus a triangle.\" The trap punishes index sloppiness, not computation: the consecutive sum always lands on the square of the larger index."
  },
  {
    "theme": "powersfigurate",
    "themeLabel": "Sums of Powers & Figurate Numbers",
    "title": "The Degree-Raising Machine",
    "difficulty": 4,
    "task": "Determine",
    "tags": [
      "method-of-differences",
      "polynomial",
      "leading-coefficient",
      "figurate"
    ],
    "statement": "It is a theorem that if $f(k)$ is a polynomial of degree $d$, then $S(n)=\\sum_{k=1}^{n}f(k)$ is a polynomial in $n$ of degree $d+1$. Consider\n\\[ S(n)=\\sum_{k=1}^{n} k(k+1)(k+2). \\]\nWithout summing the powers separately, determine the degree of $S(n)$, its leading coefficient, and the exact value $S(8)$.",
    "answer": "\\[\\boxed{\\deg S=4,\\ \\text{leading coeff}=\\tfrac14,\\ S(n)=\\frac{n(n+1)(n+2)(n+3)}{4},\\ S(8)=1980}\\]",
    "trap": "Assuming the leading coefficient of $S(n)$ equals the leading coefficient of $f(k)$ (here $1$), because \"summing doesn't change the top term.\" In fact summing a degree-$d$ monic polynomial produces leading coefficient $\\frac{1}{d+1}$ — here $\\frac14$, not $1$ — since $\\sum k^d\\sim \\frac{n^{d+1}}{d+1}$. Confusing the leading coefficients of summand and sum is the conceptual error.",
    "solutions": [
      {
        "name": "Telescoping factorial-style product",
        "steps": [
          "Use the hockey-stick collapse: $k(k+1)(k+2)=\\frac{1}{4}\\big[k(k+1)(k+2)(k+3)-(k-1)k(k+1)(k+2)\\big]$, a telescoping difference $\\frac14(g(k)-g(k-1))$ with $g(k)=k(k+1)(k+2)(k+3)$.",
          "Summing $k=1$ to $n$: $S(n)=\\frac14\\big[g(n)-g(0)\\big]=\\frac14\\,n(n+1)(n+2)(n+3)$, a degree-$4$ polynomial with leading coefficient $\\frac14$.",
          "Hence $S(8)=\\frac14\\cdot8\\cdot9\\cdot10\\cdot11=\\frac{7920}{4}=1980$. $\\boxed{1980}$"
        ]
      },
      {
        "name": "Power-sum expansion",
        "steps": [
          "Expand $k(k+1)(k+2)=k^3+3k^2+2k$, so $S(n)=\\sum k^3+3\\sum k^2+2\\sum k$.",
          "$=\\left(\\frac{n(n+1)}{2}\\right)^2+3\\cdot\\frac{n(n+1)(2n+1)}{6}+2\\cdot\\frac{n(n+1)}{2}$; factoring out $\\frac{n(n+1)}{4}$ gives $\\frac{n(n+1)}{4}\\big[n(n+1)+2(2n+1)+4\\big]=\\frac{n(n+1)(n^2+5n+6)}{4}=\\frac{n(n+1)(n+2)(n+3)}{4}$.",
          "The top term is $\\frac{n^4}{4}$, so degree $4$, leading coefficient $\\frac14$; $S(8)=1980$. $\\boxed{1980}$"
        ]
      }
    ],
    "remark": "Insight: the product $k(k+1)(k+2)$ is a \"rising factorial,\" and rising factorials telescope under summation exactly as monomials integrate under calculus — summation is the discrete antiderivative, raising degree by one and scaling the top coefficient by $\\frac{1}{d+1}$."
  },
  {
    "theme": "powersfigurate",
    "themeLabel": "Sums of Powers & Figurate Numbers",
    "title": "Power Meets Index",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "geometric",
      "power-index",
      "abel-summation",
      "off-by-one"
    ],
    "statement": "Evaluate in closed form\n\\[ A_n=\\sum_{k=1}^{n} k\\,2^{k}, \\]\nand use it to compute the exact value of $\\displaystyle\\sum_{k=1}^{10} k\\,2^{k}$.",
    "answer": "\\[\\boxed{A_n=(n-1)\\,2^{\\,n+1}+2,\\qquad \\sum_{k=1}^{10}k\\,2^{k}=18434}\\]",
    "trap": "Differentiating $\\sum_{k=0}^{n}x^k=\\frac{x^{n+1}-1}{x-1}$ gives $\\sum_{k=1}^{n}kx^{k-1}$, NOT $\\sum_{k=1}^{n}kx^{k}$. Setting $x=2$ in the differentiated formula without first multiplying by $x$ evaluates $\\sum_{k=1}^{n}k\\,2^{k-1}$, which is exactly half of the wanted sum. At $n=10$ this yields $9217$ instead of $18434$ — an answer off by the missing factor of $x=2$. The index shift between $kx^{k-1}$ and $kx^{k}$ is the silent off-by-one.",
    "solutions": [
      {
        "name": "Perturbation (multiply by the ratio)",
        "steps": [
          "Let $A=\\sum_{k=1}^n k\\,2^k$. Multiply by the common ratio $2$ and reindex with $j=k+1$: $2A=\\sum_{k=1}^n k\\,2^{k+1}=\\sum_{j=2}^{n+1}(j-1)\\,2^{j}.$",
          "Subtract $A$ from $2A$, aligning the overlapping range $j=2,\\dots,n$ where each coefficient drops by one: $A=2A-A=\\underbrace{n\\,2^{n+1}}_{j=n+1\\text{ term}}-\\sum_{j=2}^{n}2^{j}-\\underbrace{2}_{k=1\\text{ term of }A}.$",
          "The geometric middle sum is $\\sum_{j=2}^{n}2^{j}=2^{n+1}-4$, so $A=n\\,2^{n+1}-(2^{n+1}-4)-2=(n-1)\\,2^{n+1}+2.$",
          "For $n=10$: $A=9\\cdot 2^{11}+2=9\\cdot 2048+2=18434.$ $\\boxed{18434}$"
        ]
      },
      {
        "name": "Differentiate the geometric series",
        "steps": [
          "From $\\sum_{k=0}^{n}x^k=\\frac{x^{n+1}-1}{x-1}$, differentiate in $x$: $\\sum_{k=1}^{n}k\\,x^{k-1}=\\frac{n\\,x^{n+1}-(n+1)\\,x^{n}+1}{(x-1)^2}.$",
          "Multiply by $x$ to recover the desired weight $x^{k}$: $\\sum_{k=1}^{n}k\\,x^{k}=\\frac{x\\big[n\\,x^{n+1}-(n+1)\\,x^{n}+1\\big]}{(x-1)^2}.$ Setting $x=2$ makes $(x-1)^2=1$, so $\\sum_{k=1}^{n}k\\,2^{k}=2\\big[n\\,2^{n+1}-(n+1)\\,2^{n}+1\\big]=(n-1)\\,2^{n+1}+2.$",
          "At $n=10$: $(10-1)\\,2^{11}+2=9\\cdot 2048+2=18434.$ $\\boxed{18434}$"
        ]
      }
    ],
    "remark": "Insight: mixing a polynomial weight $k$ with a geometric base $2^k$ is solved by Abel/perturbation summation — the discrete analogue of integration by parts. The clean closed form survives only because base $2$ makes $(x-1)^2=1$; any other base leaves a denominator $(x-1)^2$. The decisive subtlety is the factor of $x$: differentiation lowers the exponent to $x^{k-1}$, so you must multiply back by $x$ before substituting, or the answer is halved."
  },
  {
    "theme": "powersfigurate",
    "themeLabel": "Sums of Powers & Figurate Numbers",
    "title": "Signs on the Squares",
    "difficulty": 4,
    "task": "Find a,b",
    "tags": [
      "alternating",
      "square-sum",
      "parity",
      "closed-form"
    ],
    "statement": "Define $B_n=1^2-2^2+3^2-4^2+\\cdots+(-1)^{n-1}n^2=\\sum_{k=1}^{n}(-1)^{k-1}k^2$. It is claimed that $B_n=(-1)^{n-1}\\,T_n$ where $T_n=\\dfrac{n(n+1)}{2}$ is the $n$-th triangular number. Prove this, and find all $n\\le 100$ for which $B_n$ equals exactly $-\\,5050$.",
    "answer": "\\[\\boxed{B_n=(-1)^{n-1}\\dfrac{n(n+1)}{2};\\quad B_n=-5050 \\text{ only for } n=100}\\]",
    "trap": "Pairing consecutive terms as $(1^2-2^2)+(3^2-4^2)+\\cdots$ to get a sum of negative blocks, then forgetting that when $n$ is ODD a leftover unpaired $+n^2$ remains — so the even-$n$ and odd-$n$ formulas differ in sign. Applying the even-$n$ result $B_n=-T_n$ to odd $n$ gives the wrong sign (e.g. it predicts $B_{99}=-4950$, but truly $B_{99}=+4950$); worse, it would falsely admit odd solutions to $B_n=-5050$. Since odd $n$ always gives $B_n=+T_n>0$, the parity case split is the conceptual trap.",
    "solutions": [
      {
        "name": "Pairing with parity split",
        "steps": [
          "For even $n=2m$: group $(1^2-2^2)+(3^2-4^2)+\\cdots=\\sum_{j=1}^{m}\\big[(2j-1)^2-(2j)^2\\big]=\\sum_{j=1}^m-(4j-1)=-(2m^2+m)=-\\dfrac{2m(2m+1)}{2}=-T_{2m}$, matching $(-1)^{n-1}T_n$ since $(-1)^{2m-1}=-1$.",
          "For odd $n=2m+1$: $B_{2m+1}=B_{2m}+(2m+1)^2=-T_{2m}+(2m+1)^2=T_{2m+1}=+T_n$ (using the figurate identity $T_n+T_{n-1}=n^2$), and $(-1)^{n-1}=+1$. ✓ So both parities collapse into $B_n=(-1)^{n-1}T_n$.",
          "Now $B_n=-5050$ needs $(-1)^{n-1}=-1$ (so $n$ even) and $T_n=5050$, i.e. $\\dfrac{n(n+1)}{2}=5050\\Rightarrow n^2+n-10100=0\\Rightarrow n=100$. The odd branch gives $+T_n>0$, never $-5050$. Only $n=100$. $\\boxed{n=100}$"
        ]
      },
      {
        "name": "Induction via the figurate identity",
        "steps": [
          "Claim $B_n=(-1)^{n-1}T_n$. Base case $B_1=1^2=1=T_1=(-1)^{0}T_1$. ✓",
          "Inductive step: $B_{n}=B_{n-1}+(-1)^{n-1}n^2=(-1)^{n-2}T_{n-1}+(-1)^{n-1}n^2=(-1)^{n-1}\\big[n^2-T_{n-1}\\big]=(-1)^{n-1}T_n$, where the last equality is the figurate identity $n^2-T_{n-1}=T_n$ (since $T_n-T_{n-1}=n$ would give $n$, but here $T_n+T_{n-1}=n^2$ rearranges to $n^2-T_{n-1}=T_n$). ✓",
          "Setting $B_n=-5050$: the factor $(-1)^{n-1}$ must be $-1$, forcing $n$ even, and then $T_n=5050$. Solving $\\dfrac{n(n+1)}{2}=5050$ gives the unique positive integer $n=100$. $\\boxed{n=100}$"
        ]
      }
    ],
    "remark": "Insight: the alternating square sum compresses to a single signed triangular number — the figurate identity $n^2-T_{n-1}=T_n$ is exactly what drives the induction and reconciles the odd leftover term in the pairing. The whole problem is parity bookkeeping wearing a power-sum costume; note $5050=T_{100}$ is no coincidence, it is the very triangular number being recovered."
  },
  {
    "theme": "powersfigurate",
    "themeLabel": "Sums of Powers & Figurate Numbers",
    "title": "Stacking the Triangles",
    "difficulty": 4,
    "task": "Prove that",
    "tags": [
      "tetrahedral",
      "triangular",
      "double-sum",
      "hockey-stick"
    ],
    "statement": "The $n$-th tetrahedral number is $\\mathrm{Te}_n=\\dfrac{n(n+1)(n+2)}{6}$. Prove that $\\mathrm{Te}_n=\\displaystyle\\sum_{k=1}^{n}T_k$ where $T_k=\\dfrac{k(k+1)}{2}$, and use this to evaluate the double sum\n\\[ D_n=\\sum_{k=1}^{n}\\sum_{j=1}^{k} j. \\]",
    "answer": "\\[\\boxed{\\sum_{k=1}^{n}T_k=\\mathrm{Te}_n=\\frac{n(n+1)(n+2)}{6},\\qquad D_n=\\frac{n(n+1)(n+2)}{6}}\\]",
    "trap": "Evaluating the double sum as $\\big(\\sum_{k=1}^n 1\\big)\\big(\\sum_{j=1}^n j\\big)=n\\cdot\\frac{n(n+1)}{2}$, i.e. treating the inner upper limit $k$ as if it were the constant $n$. The inner sum's bound DEPENDS on the outer index, so the sum is $\\sum_k T_k$, not $n\\,T_n$. Decoupling the dependent index is the conceptual error.",
    "solutions": [
      {
        "name": "Sum of triangulars (power-sum split)",
        "steps": [
          "The inner sum is $\\sum_{j=1}^k j=T_k$, so $D_n=\\sum_{k=1}^n T_k=\\frac12\\sum_{k=1}^n(k^2+k)=\\frac12\\Big[\\frac{n(n+1)(2n+1)}{6}+\\frac{n(n+1)}{2}\\Big]$.",
          "Factor $\\frac{n(n+1)}{12}\\big[(2n+1)+3\\big]=\\frac{n(n+1)(2n+4)}{12}=\\frac{n(n+1)(n+2)}{6}=\\mathrm{Te}_n$.",
          "Hence $D_n=\\mathrm{Te}_n=\\frac{n(n+1)(n+2)}{6}$. $\\boxed{\\mathrm{Te}_n}$"
        ]
      },
      {
        "name": "Telescoping / hockey-stick",
        "steps": [
          "Use $T_k=\\binom{k+1}{2}$; then $\\sum_{k=1}^n\\binom{k+1}{2}=\\binom{n+2}{3}$ by the hockey-stick identity $\\sum_{r=2}^{m}\\binom{r}{2}=\\binom{m+1}{3}$.",
          "So $\\sum_{k=1}^n T_k=\\binom{n+2}{3}=\\frac{(n+2)(n+1)n}{6}=\\mathrm{Te}_n$.",
          "Since $D_n$ equals this same sum (inner bound is $k$, not $n$), $D_n=\\frac{n(n+1)(n+2)}{6}$. $\\boxed{\\mathrm{Te}_n}$"
        ]
      }
    ],
    "remark": "Insight: triangular numbers are $\\binom{k+1}{2}$ and tetrahedral numbers are $\\binom{n+2}{3}$ — the figurate hierarchy is just Pascal's triangle's diagonals, and \"stacking\" one dimension up is exactly the hockey-stick identity. The trap is the classic dependent-bound double-sum decoupling."
  },
  {
    "theme": "powersfigurate",
    "themeLabel": "Sums of Powers & Figurate Numbers",
    "title": "Odd Weights, Doubling Powers",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "power-index",
      "odd-numbers",
      "perturbation",
      "hybrid-sum"
    ],
    "statement": "Evaluate, in closed form as a function of $n$,\n\\[ E_n=\\sum_{k=1}^{n}(2k-1)\\,2^{k}=1\\cdot2+3\\cdot2^2+5\\cdot2^3+\\cdots+(2n-1)2^{n}. \\]",
    "answer": "\\[\\boxed{E_n=(2n-3)\\,2^{\\,n+1}+6}\\]",
    "trap": "Splitting $E_n=2\\sum k2^k-\\sum 2^k$ and then reusing a memorized $\\sum k2^k=n\\,2^{n+1}$ (the formula WITHOUT the $-1$ correction and $+2$ constant). The correct $\\sum_{k=1}^n k2^k=(n-1)2^{n+1}+2$; dropping its lower-order terms corrupts the constant and the coefficient. The hidden danger is trusting a half-remembered power-index formula instead of re-deriving it.",
    "solutions": [
      {
        "name": "Split into known sums",
        "steps": [
          "$E_n=2\\sum_{k=1}^n k2^k-\\sum_{k=1}^n 2^k=2\\big[(n-1)2^{n+1}+2\\big]-\\big[2^{n+1}-2\\big]$.",
          "$=(n-1)2^{n+2}+4-2^{n+1}+2=2^{n+1}\\big[2(n-1)-1\\big]+6=(2n-3)2^{n+1}+6$.",
          "So $E_n=(2n-3)2^{n+1}+6$. (Check $n=2$: $1\\cdot2+3\\cdot4=14=(1)\\cdot8+6$. ✓) $\\boxed{(2n-3)2^{n+1}+6}$"
        ]
      },
      {
        "name": "Perturbation directly",
        "steps": [
          "Let $E=\\sum_{k=1}^n(2k-1)2^k$; then $2E=\\sum_{k=1}^n(2k-1)2^{k+1}=\\sum_{j=2}^{n+1}(2j-3)2^{j}$.",
          "$E=2E-E=(2(n+1)-3)2^{n+1}-(2\\cdot1-1)2^1+\\sum_{j=2}^{n}\\big[(2j-3)-(2j-1)\\big]2^j=(2n-1)2^{n+1}-2-2\\sum_{j=2}^n2^j$.",
          "$\\sum_{j=2}^n2^j=2^{n+1}-4$, so $E=(2n-1)2^{n+1}-2-2(2^{n+1}-4)=(2n-3)2^{n+1}+6$. $\\boxed{(2n-3)2^{n+1}+6}$"
        ]
      }
    ],
    "remark": "Insight: the odd weight $2k-1$ is just $2\\cdot k-1$, so the hybrid splits into a pure power-index sum plus a geometric sum — but only a freshly derived $\\sum k2^k$ keeps the constant honest. This is a deliberate stress test of formula discipline."
  },
  {
    "theme": "powersfigurate",
    "themeLabel": "Sums of Powers & Figurate Numbers",
    "title": "The Cannonball Pyramid",
    "difficulty": 5,
    "task": "Find all",
    "tags": [
      "square-pyramidal",
      "perfect-square",
      "diophantine",
      "elliptic"
    ],
    "statement": "A square pyramid of cannonballs has $1^2$ balls on top, $2^2$ in the next layer, and so on down to $n^2$ in the bottom layer, for a total of $P_n=\\dfrac{n(n+1)(2n+1)}{6}$ balls. Find every $n\\ge 1$ for which the entire pyramid can be rearranged into a single solid square — that is, every $n$ for which $P_n$ is a perfect square. (You may assume the deep fact that the only positive integer solutions of $\\,y^2=\\frac{x(x+1)(2x+1)}{6}\\,$ are $x\\in\\{1,24\\}$.)",
    "answer": "\\[\\boxed{n\\in\\{1,\\,24\\}\\quad(P_1=1=1^2,\\ P_{24}=4900=70^2)}\\]",
    "trap": "Assuming that because $\\sum_{k=1}^n k=T_n$ has infinitely many square values (the square-triangular numbers $1,36,1225,\\dots$ from Pell's equation), the analogous sum of SQUARES must also have infinitely many square values. It does not: $\\sum k^2$ being a square is an elliptic-curve condition (genus $1$), with only the two solutions $n=1,24$. Conflating the Pell-type (infinitely many) with the elliptic-type (finitely many) is the deep conceptual trap.",
    "solutions": [
      {
        "name": "Reduce to the stated Diophantine fact",
        "steps": [
          "We need $P_n=\\frac{n(n+1)(2n+1)}{6}=y^2$ for some integer $y$, i.e. $y^2=\\frac{x(x+1)(2x+1)}{6}$ with $x=n$.",
          "By the quoted theorem (Watson/Ljunggren, the cannonball problem), the only positive solutions are $x=1$ and $x=24$.",
          "Check: $P_1=1=1^2$ and $P_{24}=\\frac{24\\cdot25\\cdot49}{6}=4900=70^2$. Hence $n\\in\\{1,24\\}$. $\\boxed{\\{1,24\\}}$"
        ]
      },
      {
        "name": "Bounded search + theorem closure",
        "steps": [
          "Compute $P_n$ for $n=1,\\dots,24$ and test squareness: only $P_1=1$ and $P_{24}=4900$ are perfect squares in this range.",
          "The reduction $6y^2=2n^3+3n^2+n$ defines an elliptic curve; its only integral points with $n>0$ correspond to $n=1,24$ (the curve has finite rank and these exhaust the integral points), so no solutions exist beyond the searched range.",
          "Therefore the complete solution set is $\\{1,24\\}$. $\\boxed{\\{1,24\\}}$"
        ]
      }
    ],
    "remark": "Insight: \"sum is a perfect square\" hides a chasm between figurate types. Square-triangular numbers come from a Pell equation (a conic — infinitely many points), but square-square-pyramidal numbers sit on an elliptic curve (genus $1$ — finitely many). The cannonball answer $4900=70^2$ is one of the most famous coincidences in number theory."
  },
  {
    "theme": "powersfigurate",
    "themeLabel": "Sums of Powers & Figurate Numbers",
    "title": "Triangles That Are Also Stacks",
    "difficulty": 5,
    "task": "Find all",
    "tags": [
      "tetrahedral",
      "triangular",
      "figurate-intersection",
      "diophantine"
    ],
    "statement": "Call a number doubly-figurate if it is simultaneously triangular and tetrahedral: $N=T_a=\\dfrac{a(a+1)}{2}$ for some $a\\ge1$ and $N=\\mathrm{Te}_b=\\dfrac{b(b+1)(b+2)}{6}$ for some $b\\ge1$. It is known (and you may use) that there are only finitely many such $N$ and that all of them satisfy $b\\le 40$. Find every doubly-figurate number $N$, listing each with its indices $(a,b)$.",
    "answer": "\\[\\boxed{N\\in\\{1,\\,10,\\,120,\\,1540,\\,7140\\}}\\]",
    "trap": "Reasoning that since $\\mathrm{Te}_b=\\sum_{k=1}^b T_k$ is a sum of triangular numbers, it should \"usually\" be triangular, hence expecting infinitely many or even all $b$ to work. In truth a tetrahedral number is rarely triangular: requiring $8\\,\\mathrm{Te}_b+1$ to be a perfect square is a strong cubic-in-$b$ constraint with only five solutions. Mistaking \"built from triangulars\" for \"is a triangular\" is the conceptual error.",
    "solutions": [
      {
        "name": "Square-test on the bounded range",
        "steps": [
          "$N=\\mathrm{Te}_b$ is triangular iff $8N+1$ is a perfect square (since $T_a=N\\iff (2a+1)^2=8N+1$).",
          "Test $b=1,\\dots,40$: $8\\,\\mathrm{Te}_b+1$ is a perfect square exactly for $b=1,3,8,20,34$, giving $\\mathrm{Te}_b=1,10,120,1540,7140$.",
          "The corresponding $a$ from $a=\\frac{\\sqrt{8N+1}-1}{2}$ are $a=1,4,15,55,119$. By the given bound $b\\le40$ this list is complete. $\\boxed{\\{1,10,120,1540,7140\\}}$"
        ]
      },
      {
        "name": "Direct intersection check",
        "steps": [
          "List tetrahedral numbers up to $\\mathrm{Te}_{40}=11480$: $1,4,10,20,35,56,84,120,\\dots,7140,7770,\\dots$.",
          "List triangular numbers and intersect: the common values are $1=T_1,\\ 10=T_4,\\ 120=T_{15},\\ 1540=T_{55},\\ 7140=T_{119}$.",
          "No further coincidences occur for $b\\le40$ (hence none at all, by the stated finiteness bound). $\\boxed{\\{1,10,120,1540,7140\\}}$"
        ]
      }
    ],
    "remark": "Insight: the figurate identity $8T_a+1=(2a+1)^2$ converts \"is triangular?\" into a perfect-square test, turning the intersection of two figurate families into a single Diophantine condition. That these five — and exactly five — values exist is a classic Avanesov result; $7140$ is the largest."
  },
  {
    "theme": "powersfigurate",
    "themeLabel": "Sums of Powers & Figurate Numbers",
    "title": "The Telescope That Lied",
    "difficulty": 5,
    "task": "Find a,b,c",
    "tags": [
      "method-of-differences",
      "telescoping",
      "wrong-closed-form",
      "power-sums"
    ],
    "statement": "A student wants $\\sum_{k=1}^{n}k^3$ and reasons as follows: \"Since $k^3-(k-1)^3=3k^2-3k+1$, summing telescopes to $n^3=\\sum_{k=1}^n(3k^2-3k+1)$, so $\\sum k^3=n^3$.\" The conclusion $\\sum k^3=n^3$ is false. (a) Identify precisely the logical error. (b) Decide whether a monic cubic $g(k)=k^3+bk^2+ck+d$ can satisfy $g(k)-g(k-1)=k^3$ identically, and if not, find the correct antidifference of $k^3$, thereby giving a valid telescoping derivation. (c) State the resulting closed form for $\\sum_{k=1}^{n}k^3$.",
    "answer": "\\[\\boxed{\\text{No monic cubic } g \\text{ works (the antidifference of } k^3 \\text{ is the quartic } g(k)=\\tfrac14 k^2(k+1)^2\\text{); hence } \\sum_{k=1}^{n}k^3=\\left(\\frac{n(n+1)}{2}\\right)^2}\\]",
    "trap": "The student's error: $k^3-(k-1)^3$ equals $3k^2-3k+1$, NOT $k^3$, so the telescoping sum $n^3$ equals $\\sum(3k^2-3k+1)$ — a true statement that pins down $\\sum k^2$, and says nothing about $\\sum k^3$. The deeper trap in part (b): a telescoping antidifference of $k^3$ must have degree $4$, since differencing LOWERS degree by exactly one; demanding a CUBIC $g$ is impossible. Expecting the antidifference to share the summand's degree is the conceptual flaw.",
    "solutions": [
      {
        "name": "Degree count + correct antidifference",
        "steps": [
          "(a) $k^3-(k-1)^3=3k^2-3k+1\\ne k^3$. The telescoping is valid but for the wrong summand: it yields $\\sum_{k=1}^n(3k^2-3k+1)=n^3$, an identity that determines $\\sum k^2$, not $\\sum k^3$. The error is substituting the false equation $k^3-(k-1)^3=k^3$ for the true one.",
          "(b) Suppose $g(k)-g(k-1)=k^3$ with $g$ monic cubic. Differencing a degree-$d$ polynomial gives degree $d-1$, so $g(k)-g(k-1)$ has degree $2$ — it can never equal $k^3$. Concretely $g(k)-g(k-1)=3k^2+(2b-3)k+(\\text{const})$, whose leading term is $3k^2$, not $k^3$: no monic cubic works. The antidifference of $k^3$ must be quartic. The correct one is $g(k)=\\left(\\frac{k(k+1)}{2}\\right)^2=\\frac14k^2(k+1)^2$; check $g(k)-g(k-1)=\\frac14\\big[k^2(k+1)^2-(k-1)^2k^2\\big]=\\frac{k^2}{4}\\big[(k+1)^2-(k-1)^2\\big]=\\frac{k^2}{4}\\cdot4k=k^3$.",
          "(c) Telescoping: $\\sum_{k=1}^n k^3=g(n)-g(0)=\\left(\\frac{n(n+1)}{2}\\right)^2-0=\\left(\\frac{n(n+1)}{2}\\right)^2$. $\\boxed{\\left(\\frac{n(n+1)}{2}\\right)^2}$"
        ]
      },
      {
        "name": "Repair via the quadratic the student actually proved",
        "steps": [
          "From the valid identity $\\sum_{k=1}^n(3k^2-3k+1)=n^3$, solve for $\\sum k^2$: $3\\sum k^2-3\\sum k+n=n^3\\Rightarrow \\sum k^2=\\frac{n^3-n+3\\cdot\\frac{n(n+1)}{2}}{3}=\\frac{n(n+1)(2n+1)}{6}$ — so the student's method correctly yields the square-pyramidal formula, exactly one degree too low.",
          "To reach cubes, apply the same method one degree higher: $k^4-(k-1)^4=4k^3-6k^2+4k-1$, which telescopes to $n^4=\\sum_{k=1}^n(4k^3-6k^2+4k-1)=4\\sum k^3-6\\sum k^2+4\\sum k-n$.",
          "Solve for $\\sum k^3$ using $\\sum k^2=\\frac{n(n+1)(2n+1)}{6}$ and $\\sum k=\\frac{n(n+1)}{2}$: $\\sum k^3=\\frac{n^4+n+6\\sum k^2-4\\sum k}{4}=\\frac{n^2(n+1)^2}{4}=\\left(\\frac{n(n+1)}{2}\\right)^2$. $\\boxed{\\left(\\frac{n(n+1)}{2}\\right)^2}$"
        ]
      }
    ],
    "remark": "Insight: the method of differences is exact, but its bookkeeping is unforgiving — the antidifference of a degree-$d$ polynomial has degree $d+1$, mirroring integration. The student's \"telescope\" was sound mathematics aimed one rung too low; it actually proves the formula for $\\sum k^2$, and Nicomachus's theorem $\\sum k^3=(\\sum k)^2$ emerges only once the quartic antidifference is used."
  },
  {
    "theme": "recurrences",
    "themeLabel": "Recurrences & Characteristic Equations",
    "title": "The Double Root in Disguise",
    "difficulty": 3,
    "task": "Determine",
    "tags": [
      "repeated roots",
      "characteristic equation",
      "closed form",
      "second-order"
    ],
    "statement": "A sequence satisfies $a_0=2$, $a_1=7$, and $a_n=6a_{n-1}-9a_{n-2}$ for $n\\ge 2$. Find a closed form for $a_n$ and hence the value of $a_5$.",
    "answer": "\\[\\boxed{a_n=(n+6)\\,3^{\\,n-1},\\qquad a_5=891}\\]",
    "trap": "Writing the general solution as $a_n=A\\cdot 3^n+B\\cdot 3^n$ because the only root is $3$. The two terms collapse into a single constant $(A+B)3^n$, which cannot match two independent initial conditions; a repeated root forces the second solution to carry a factor of $n$, i.e. $a_n=(A+Bn)3^n$.",
    "solutions": [
      {
        "name": "Characteristic equation (repeated root)",
        "steps": [
          "The characteristic equation is $x^2-6x+9=0$, i.e. $(x-3)^2=0$, giving a double root $x=3$.",
          "For a repeated root the general solution is $a_n=(A+Bn)3^n$ (the $n$ supplies the missing independent solution).",
          "Apply $a_0=2$: $A=2$. Apply $a_1=7$: $(2+B)\\cdot 3=7\\Rightarrow B=\\tfrac13$.",
          "Thus $a_n=\\bigl(2+\\tfrac{n}{3}\\bigr)3^n=(n+6)3^{n-1}$.",
          "At $n=5$: $a_5=11\\cdot 3^4=891$."
        ]
      },
      {
        "name": "Divide out the geometric part",
        "steps": [
          "Set $a_n=3^n b_n$. Substituting gives $3^n b_n=6\\cdot 3^{n-1}b_{n-1}-9\\cdot 3^{n-2}b_{n-2}=3^n(2b_{n-1}-b_{n-2})$.",
          "So $b_n=2b_{n-1}-b_{n-2}$, a second difference of zero, meaning $b_n$ is arithmetic.",
          "From $b_0=2$ and $b_1=a_1/3=7/3$ the common difference is $1/3$, so $b_n=2+\\tfrac{n}{3}$.",
          "Hence $a_n=3^n\\bigl(2+\\tfrac n3\\bigr)=(n+6)3^{n-1}$ and $a_5=891$."
        ]
      }
    ],
    "remark": "Insight: a repeated root is exactly where the naive 'one term per root' rule breaks. Substituting $a_n=3^n b_n$ explains why the extra factor must be linear in $n$ — it linearises into a constant-second-difference (arithmetic) sequence."
  },
  {
    "theme": "recurrences",
    "themeLabel": "Recurrences & Characteristic Equations",
    "title": "The Constant That Refuses to Stay Constant",
    "difficulty": 3,
    "task": "Determine",
    "tags": [
      "non-homogeneous",
      "particular solution",
      "geometric",
      "closed form"
    ],
    "statement": "Let $a_0=1$ and $a_n=2a_{n-1}+3$ for $n\\ge 1$. Find a closed form for $a_n$ and the value of $a_8$.",
    "answer": "\\[\\boxed{a_n=2^{\\,n+2}-3,\\qquad a_8=1021}\\]",
    "trap": "Guessing the particular solution as $a_n^{p}=cn$ (a moving target) instead of a constant. The forcing term $3$ is constant and the homogeneous root is $2\\ne 1$, so the correct particular ansatz is a constant $c$; a linear guess introduces a phantom degree of freedom that the algebra then forces back to zero, wasting the step and inviting sign errors.",
    "solutions": [
      {
        "name": "Homogeneous plus particular",
        "steps": [
          "Homogeneous part: $a_n=2a_{n-1}$ has solution $A\\cdot 2^n$.",
          "Since the forcing $3$ is constant and $1$ is not a root, try a constant particular solution $a_n^{p}=c$: $c=2c+3\\Rightarrow c=-3$.",
          "General solution $a_n=A\\cdot 2^n-3$. Initial $a_0=1$ gives $A-3=1\\Rightarrow A=4$.",
          "So $a_n=4\\cdot 2^n-3=2^{n+2}-3$, and $a_8=2^{10}-3=1021$."
        ]
      },
      {
        "name": "Telescoping after a shift",
        "steps": [
          "Add $3$ to both sides written cleverly: $a_n+3=2a_{n-1}+6=2(a_{n-1}+3)$.",
          "Thus $b_n=a_n+3$ satisfies $b_n=2b_{n-1}$ with $b_0=4$, so $b_n=4\\cdot 2^n$.",
          "Therefore $a_n=4\\cdot 2^n-3=2^{n+2}-3$.",
          "Evaluate at $n=8$: $a_8=1021$."
        ]
      }
    ],
    "remark": "Insight: the fixed point $L=2L+3\\Rightarrow L=-3$ is the particular solution, and shifting by $-L$ turns the affine map into a pure geometric one. Recognising the fixed point is faster and trap-proof."
  },
  {
    "theme": "recurrences",
    "themeLabel": "Recurrences & Characteristic Equations",
    "title": "Resonance on the Second Root",
    "difficulty": 4,
    "task": "Find a closed form",
    "tags": [
      "non-homogeneous",
      "resonance",
      "particular solution",
      "distinct roots"
    ],
    "statement": "Let $a_0=0$, $a_1=1$, and $a_n=3a_{n-1}-2a_{n-2}+2^{\\,n}$ for $n\\ge 2$. Find a closed form for $a_n$.",
    "answer": "\\[\\boxed{a_n=3+(2n-3)\\,2^{\\,n}}\\]",
    "trap": "Taking the particular solution as $a_n^{p}=C\\,2^n$. Because $2$ is a root of the characteristic equation $x^2-3x+2=0$, this ansatz collapses into the homogeneous solution and yields $0=2^n$, an impossibility. Resonance demands multiplying by $n$: $a_n^{p}=Cn\\,2^n$.",
    "solutions": [
      {
        "name": "Detect resonance, then fit",
        "steps": [
          "Characteristic equation $x^2-3x+2=(x-1)(x-2)=0$ gives roots $1,2$; homogeneous part $A\\cdot1^n+B\\cdot 2^n$.",
          "The forcing $2^n$ matches the root $2$ (resonance), so use $a_n^{p}=Cn\\,2^n$.",
          "Substitute and divide by $2^{n-2}$: $4Cn=6C(n-1)-2C(n-2)+4=4Cn-2C+4$, so $C=2$ and $a_n^{p}=2n\\cdot2^n=n\\,2^{n+1}$.",
          "General: $a_n=A+B\\,2^n+n\\,2^{n+1}$. From $a_0=0$: $A+B=0$. From $a_1=1$: $A+2B+4=1\\Rightarrow A+2B=-3$.",
          "Solve: $B=-3,\\ A=3$, so $a_n=3-3\\cdot2^n+2n\\cdot2^n=3+(2n-3)2^n$."
        ]
      },
      {
        "name": "Reduce order by the known root",
        "steps": [
          "Since $2$ is a root, set $a_n=2^n c_n$. The recurrence becomes $2^n c_n=3\\cdot2^{n-1}c_{n-1}-2\\cdot2^{n-2}c_{n-2}+2^n$.",
          "Divide by $2^{n-2}$: $4c_n=6c_{n-1}-2c_{n-2}+4$, i.e. $2c_n=3c_{n-1}-c_{n-2}+2$.",
          "The homogeneous version $2c_n=3c_{n-1}-c_{n-2}$ has roots $1,\\tfrac12$; the constant forcing $2$ resonates with root $1$, so $c_n^{p}=Kn$ gives $K=2$.",
          "Back-substitute and match $c_0=0,\\ c_1=\\tfrac12$ to recover $a_n=3+(2n-3)2^n$."
        ]
      }
    ],
    "remark": "Insight: resonance is the recurrence analogue of a forced oscillator driven at its natural frequency — the response grows like $n$ times the mode. The same $\\times n$ rule that fixes repeated roots fixes a forcing term that coincides with a root."
  },
  {
    "theme": "recurrences",
    "themeLabel": "Recurrences & Characteristic Equations",
    "title": "The Lucas Pendulum",
    "difficulty": 4,
    "task": "Prove that",
    "tags": [
      "lucas numbers",
      "binet",
      "determinant identity",
      "fibonacci",
      "cassini"
    ],
    "statement": "The Lucas numbers are $L_0=2$, $L_1=1$, and $L_n=L_{n-1}+L_{n-2}$. Prove that for all $n\\ge 1$,\n\\[L_{n-1}L_{n+1}-L_n^{2}=5(-1)^{n-1}.\\]",
    "answer": "\\[\\boxed{L_{n-1}L_{n+1}-L_n^{2}=5(-1)^{n-1}}\\]",
    "trap": "Borrowing the Fibonacci constant. Students who memorised Cassini's identity $F_{n-1}F_{n+1}-F_n^2=(-1)^n$ tend to quote the same right-hand side $(-1)^n$ for Lucas. That is wrong on two counts. First the magnitude: the Binet coefficients for $L_n=\\phi^n+\\psi^n$ are both $1$, not $\\tfrac1{\\sqrt5}$, so the cross-term carries an extra factor $(\\phi-\\psi)^2=5$ instead of $\\tfrac15$ — hence $5$, not $1$. Second the sign: the cross-term is $(\\phi\\psi)^{n-1}(\\phi-\\psi)^2=(-1)^{n-1}\\cdot5$, so the alternation is $(-1)^{n-1}$. A quick reality check kills the naive guess at once: $n=1$ gives $L_0L_2-L_1^2=2\\cdot3-1=5>0$, whereas $(-1)^1=-1<0$ — even the sign is wrong.",
    "solutions": [
      {
        "name": "Binet form",
        "steps": [
          "The characteristic equation of $L_n=L_{n-1}+L_{n-2}$ is $x^2-x-1=0$, with roots $\\phi=\\tfrac{1+\\sqrt5}2$ and $\\psi=\\tfrac{1-\\sqrt5}2$. These satisfy $\\phi+\\psi=1$, $\\phi\\psi=-1$, and $\\phi-\\psi=\\sqrt5$, so $(\\phi-\\psi)^2=5$.",
          "The general solution is $L_n=A\\phi^n+B\\psi^n$. Imposing $L_0=2$ gives $A+B=2$ and $L_1=1$ gives $A\\phi+B\\psi=1$; solving yields $A=B=1$. Hence the Binet form $L_n=\\phi^n+\\psi^n$ (both coefficients equal to $1$).",
          "Substitute: $L_{n-1}L_{n+1}-L_n^2=(\\phi^{n-1}+\\psi^{n-1})(\\phi^{n+1}+\\psi^{n+1})-(\\phi^n+\\psi^n)^2$. The pure powers $\\phi^{2n}$ and $\\psi^{2n}$ appear in both products and cancel.",
          "What survives is the mixed part: $\\phi^{n-1}\\psi^{n+1}+\\phi^{n+1}\\psi^{n-1}-2\\phi^n\\psi^n$. Factor out $(\\phi\\psi)^{n-1}$ to get $(\\phi\\psi)^{n-1}\\bigl(\\psi^2+\\phi^2-2\\phi\\psi\\bigr)=(\\phi\\psi)^{n-1}(\\phi-\\psi)^2$.",
          "Now $\\phi\\psi=-1$ gives $(\\phi\\psi)^{n-1}=(-1)^{n-1}$, and $(\\phi-\\psi)^2=5$. Therefore $L_{n-1}L_{n+1}-L_n^2=5(-1)^{n-1}$. Check $n=1$: $L_0L_2-L_1^2=2\\cdot3-1=5=5(-1)^{0}$, as claimed."
        ]
      },
      {
        "name": "Determinant / two-step induction",
        "steps": [
          "Write $D_n=L_{n-1}L_{n+1}-L_n^2=\\det\\begin{pmatrix}L_{n-1}&L_n\\\\ L_n&L_{n+1}\\end{pmatrix}$. We show $D_n=-D_{n-1}$ for all $n\\ge 2$.",
          "Use the recurrence $L_{n+1}=L_n+L_{n-1}$: $D_n=L_{n-1}(L_n+L_{n-1})-L_n^2=L_{n-1}L_n+L_{n-1}^2-L_n^2$. Group as $L_{n-1}^2+L_n(L_{n-1}-L_n)$, and since $L_{n-1}-L_n=-L_{n-2}$ this is $L_{n-1}^2-L_nL_{n-2}$.",
          "But $L_nL_{n-2}-L_{n-1}^2=D_{n-1}$ (the same determinant one step earlier). Hence $D_n=-(L_nL_{n-2}-L_{n-1}^2)=-D_{n-1}$, so the sequence $D_n$ simply alternates in sign with constant magnitude.",
          "Base case: $D_1=L_0L_2-L_1^2=2\\cdot3-1=5=5(-1)^{0}$. Iterating $D_n=-D_{n-1}$ gives $D_n=(-1)^{n-1}D_1=5(-1)^{n-1}$, proving $L_{n-1}L_{n+1}-L_n^2=5(-1)^{n-1}$ for all $n\\ge1$."
        ]
      }
    ],
    "remark": "Insight: the Cassini identity for a two-term recurrence equals (product of roots)$^{n-1}\\times$(root gap)$^2$, weighted by the square of the Binet coefficient. For Fibonacci, $F_n=\\tfrac1{\\sqrt5}(\\phi^n-\\psi^n)$, so the coefficient $\\tfrac1{\\sqrt5}$ squares to $\\tfrac15$ and exactly cancels the $(\\phi-\\psi)^2=5$, leaving $(-1)^{n-1}$ — the familiar $(-1)^n$ up to sign convention. For Lucas the coefficients are $1$, nothing cancels, and the full factor $5$ survives. Same determinant machinery, different bookkeeping; the sign is always governed by $(\\phi\\psi)^{n-1}=(-1)^{n-1}$, not the $(-1)^n$ one is tempted to copy from the Fibonacci form."
  },
  {
    "theme": "recurrences",
    "themeLabel": "Recurrences & Characteristic Equations",
    "title": "Double Resonance, Triangular Truth",
    "difficulty": 4,
    "task": "Find a closed form",
    "tags": [
      "repeated roots",
      "double resonance",
      "non-homogeneous",
      "polynomial forcing"
    ],
    "statement": "Let $a_0=0$, $a_1=0$, and $a_n=2a_{n-1}-a_{n-2}+1$ for $n\\ge 2$. Find a closed form for $a_n$.",
    "answer": "\\[\\boxed{a_n=\\dfrac{n(n-1)}{2}}\\]",
    "trap": "Trying $a_n^{p}=C$ or even $a_n^{p}=Cn$ for the constant forcing. The characteristic root $1$ has multiplicity $2$, so a constant resonates twice; both a constant and a linear ansatz lie entirely inside the homogeneous solution space and produce second difference $0$, never the required $1$. The particular solution must be $Cn^2$ — degree equal to the forcing degree plus the root multiplicity.",
    "solutions": [
      {
        "name": "Homogeneous repeated root plus quadratic particular",
        "steps": [
          "The characteristic equation is $x^2-2x+1=(x-1)^2=0$ with the double root $1$, so the homogeneous solution is $a_n^{h}=A+Bn$.",
          "The constant forcing $1$ coincides with the root $1$ of multiplicity $2$, so multiply the trial form by $n^2$: try $a_n^{p}=Cn^2$.",
          "Substitute: $Cn^2=2C(n-1)^2-C(n-2)^2+1=Cn^2-2C+1$, which forces $-2C+1=0$, i.e. $C=\\tfrac12$.",
          "The general solution is $a_n=A+Bn+\\tfrac12 n^2$. From $a_0=0$ we get $A=0$; from $a_1=0$ we get $B+\\tfrac12=0$, so $B=-\\tfrac12$.",
          "Therefore $a_n=\\tfrac12n^2-\\tfrac12n=\\dfrac{n(n-1)}{2}$."
        ]
      },
      {
        "name": "Second-difference telescoping",
        "steps": [
          "Rearrange the recurrence to $a_n-2a_{n-1}+a_{n-2}=1$, i.e. the second difference $\\Delta^2 a_{n-2}=1$ is a constant for all $n\\ge2$.",
          "A constant second difference forces $a_n$ to be a quadratic in $n$ with leading coefficient $\\tfrac12$: write $a_n=\\tfrac12n^2+\\beta n+\\gamma$.",
          "Match initial data: $a_0=0\\Rightarrow\\gamma=0$, and $a_1=0\\Rightarrow\\tfrac12+\\beta=0\\Rightarrow\\beta=-\\tfrac12$.",
          "Hence $a_n=\\dfrac{n(n-1)}2=\\dbinom n2$, the triangular numbers."
        ]
      }
    ],
    "remark": "Insight: the degree rule for non-homogeneous recurrences is forcing degree plus the multiplicity of the resonant root. Here a degree-$0$ forcing and a multiplicity-$2$ root force a degree-$2$ particular solution — which is exactly why a constant second difference produces a quadratic, the triangular numbers $\\binom n2$."
  },
  {
    "theme": "recurrences",
    "themeLabel": "Recurrences & Characteristic Equations",
    "title": "Silver Conjugates",
    "difficulty": 5,
    "task": "Prove that",
    "tags": [
      "conjugate surds",
      "binet",
      "integer sequence",
      "cassini"
    ],
    "statement": "Define $a_0=1$, $a_1=2$, and $a_n=4a_{n-1}-a_{n-2}$ for $n\\ge 2$. Prove that $a_n=\\tfrac12\\bigl[(2+\\sqrt3)^{n}+(2-\\sqrt3)^{n}\\bigr]$ is always an integer, and evaluate $a_{n-1}a_{n+1}-a_n^{2}$.",
    "answer": "\\[\\boxed{a_{n-1}a_{n+1}-a_n^{2}=3}\\]",
    "trap": "Discarding the conjugate root $(2-\\sqrt3)^n$ as 'negligibly small' to claim $a_n\\approx\\tfrac12(2+\\sqrt3)^n$. Because $0<2-\\sqrt3<1$ the term is small but never zero; dropping it destroys integrality and breaks the exact Cassini-type identity, which depends precisely on the product of the two roots being $1$.",
    "solutions": [
      {
        "name": "Binet plus conjugate symmetry",
        "steps": [
          "Characteristic equation $x^2-4x+1=0$ has roots $\\alpha=2+\\sqrt3,\\ \\beta=2-\\sqrt3$ with $\\alpha+\\beta=4,\\ \\alpha\\beta=1$.",
          "Fitting $a_0=1,a_1=2$ gives $a_n=\\tfrac12(\\alpha^n+\\beta^n)$; the binomial expansions of $\\alpha^n,\\beta^n$ have opposite-sign $\\sqrt3$ terms that cancel, leaving an integer (and the factor $\\tfrac12$ is absorbed since $\\alpha^n+\\beta^n$ is an even integer).",
          "For the identity, $a_{n-1}a_{n+1}-a_n^2=\\tfrac14\\bigl[(\\alpha^{n-1}+\\beta^{n-1})(\\alpha^{n+1}+\\beta^{n+1})-(\\alpha^n+\\beta^n)^2\\bigr]$.",
          "The mixed terms give $\\tfrac14(\\alpha\\beta)^{n-1}(\\alpha-\\beta)^2=\\tfrac14\\cdot1^{n-1}\\cdot(2\\sqrt3)^2=\\tfrac14\\cdot12=3$.",
          "Hence $a_{n-1}a_{n+1}-a_n^2=3$ for all $n$."
        ]
      },
      {
        "name": "Matrix determinant",
        "steps": [
          "Write $\\begin{pmatrix}a_{n+1}\\\\a_n\\end{pmatrix}=M\\begin{pmatrix}a_n\\\\a_{n-1}\\end{pmatrix}$ with $M=\\begin{pmatrix}4&-1\\\\1&0\\end{pmatrix}$, $\\det M=1$.",
          "Integrality follows by induction: $a_n=4a_{n-1}-a_{n-2}$ keeps integers integral, with $a_0=1,a_1=2$.",
          "The quantity $a_{n-1}a_{n+1}-a_n^2=-\\det\\begin{pmatrix}a_n&a_{n+1}\\\\a_{n-1}&a_n\\end{pmatrix}$ is constant because each step multiplies the relevant $2\\times2$ array by $M$ with $\\det M=1$.",
          "Evaluate at $n=1$: $a_0a_2-a_1^2=1\\cdot7-4=3$, so the constant is $3$."
        ]
      }
    ],
    "remark": "Insight: integrality and the Cassini constant both come from $\\alpha\\beta=1$ (the constant term of the monic characteristic polynomial). The small conjugate root is the engine of exactness, not a rounding nuisance — $a_n$ is the nearest integer to $\\tfrac12(2+\\sqrt3)^n$ for a reason."
  },
  {
    "theme": "recurrences",
    "themeLabel": "Recurrences & Characteristic Equations",
    "title": "Mersenne's Hidden Order",
    "difficulty": 5,
    "task": "Prove that",
    "tags": [
      "distinct roots",
      "mersenne",
      "gcd identity",
      "number theory hybrid"
    ],
    "statement": "Let $a_0=0$, $a_1=1$, and $a_n=3a_{n-1}-2a_{n-2}$ for $n\\ge 2$. First find $a_n$ in closed form, then prove that $\\gcd(a_m,a_n)=a_{\\gcd(m,n)}$ for all $m,n\\ge 1$, and use it to evaluate $\\gcd(a_9,a_{15})$.",
    "answer": "\\[\\boxed{a_n=2^{n}-1,\\qquad \\gcd(a_9,a_{15})=a_{\\gcd(9,15)}=a_3=2^3-1=7}\\]",
    "trap": "After getting $a_n=2^n-1$, asserting $\\gcd(2^m-1,2^n-1)=2^{|m-n|}-1$, i.e. taking the exponent to be the naive one-step difference $|m-n|$ rather than $\\gcd(m,n)$. For the pair $(9,15)$ this gives $2^{6}-1=63$, but the correct value is $2^{\\gcd(9,15)}-1=2^3-1=7$. The exponent must be carried all the way through the Euclidean descent to $\\gcd(m,n)$, not stopped after a single subtraction.",
    "solutions": [
      {
        "name": "Solve, then Euclidean reduction",
        "steps": [
          "Characteristic equation $x^2-3x+2=(x-1)(x-2)=0$ gives roots $1,2$, so $a_n=A\\cdot 1^n+B\\cdot 2^n$; from $a_0=0,\\ a_1=1$ we get $A+B=0$ and $A+2B=1$, hence $A=-1,\\ B=1$ and $a_n=2^n-1$.",
          "Addition formula: $a_{m+n}=2^{m+n}-1=(2^m-1)\\,2^n+(2^n-1)=a_m\\,2^n+a_n$. Thus modulo $a_m=2^m-1$ we have $2^m\\equiv 1$, so $a_{m+n}\\equiv a_n\\pmod{a_m}$, and more generally $a_{qm+r}\\equiv a_r\\pmod{a_m}$.",
          "Hence for $m\\le n$ with $n=qm+r$, $\\gcd(a_m,a_n)=\\gcd(a_m,a_r)$ where $r=n\\bmod m$. This is exactly one step of the Euclidean algorithm performed simultaneously on the indices $(m,n)\\mapsto(m,r)$ and on the values.",
          "Iterating the Euclidean algorithm drives the smaller index to $\\gcd(m,n)$ and the other to $0$ (with $a_0=0$), giving $\\gcd(a_m,a_n)=a_{\\gcd(m,n)}$. For $(9,15)$: $\\gcd(9,15)=3$, so $\\gcd(a_9,a_{15})=a_3=2^3-1=7$ — and crucially this is $7$, not the tempting $a_{|9-15|}=a_6=63$."
        ]
      },
      {
        "name": "Direct multiplicative-order argument",
        "steps": [
          "With $a_n=2^n-1$, take any prime power $p^k\\mid\\gcd(2^m-1,2^n-1)$. Then $2^m\\equiv 2^n\\equiv 1\\pmod{p^k}$, so the multiplicative order $d=\\operatorname{ord}_{p^k}(2)$ divides both $m$ and $n$, hence $d\\mid\\gcd(m,n)$ and therefore $p^k\\mid 2^{\\gcd(m,n)}-1$.",
          "Conversely $\\gcd(m,n)\\mid m$ and $\\gcd(m,n)\\mid n$, and the factorisation $x^k-1=(x-1)(x^{k-1}+\\cdots+1)$ with $x=2^{\\gcd(m,n)}$ shows $2^{\\gcd(m,n)}-1$ divides both $2^m-1$ and $2^n-1$.",
          "These two inclusions are mutual divisibility between $\\gcd(2^m-1,2^n-1)$ and $2^{\\gcd(m,n)}-1$, both positive, so they are equal: $\\gcd(a_m,a_n)=2^{\\gcd(m,n)}-1=a_{\\gcd(m,n)}$.",
          "Applying this to $(9,15)$ with $\\gcd(9,15)=3$ gives $\\gcd(a_9,a_{15})=2^{3}-1=7$."
        ]
      }
    ],
    "remark": "Insight: a linear recurrence whose characteristic roots are $\\{1,2\\}$ generates the Mersenne numbers $2^n-1$, and these enjoy the strong divisibility property $\\gcd(a_m,a_n)=a_{\\gcd(m,n)}$ shared by Fibonacci and every nondegenerate Lucas sequence. The engine is the addition formula $a_{m+n}=a_m\\cdot r^n+a_n$ (here $r=2$), which lets the Euclidean algorithm on indices be mirrored exactly on values. The pair $(9,15)$ is chosen so $\\gcd=3$ while $|m-n|=6$: the naive subtraction answer $63$ and the true answer $7$ visibly disagree, exposing the trap."
  },
  {
    "theme": "recurrences",
    "themeLabel": "Recurrences & Characteristic Equations",
    "title": "The Continued Fraction's Fixed Star",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "continued fraction",
      "fibonacci ratio",
      "binet",
      "limit hybrid"
    ],
    "statement": "Define $x_1=1$ and $x_{n+1}=1+\\dfrac{1}{x_n}$ for $n\\ge 1$. By recasting $x_n$ as a ratio of terms of a linear recurrence, prove the limit $\\displaystyle L=\\lim_{n\\to\\infty}x_n$ exists and evaluate it.",
    "answer": "\\[\\boxed{L=\\dfrac{1+\\sqrt5}{2}}\\]",
    "trap": "Solving the fixed-point equation $L=1+\\tfrac1L\\Rightarrow L^2-L-1=0$ and then writing $L=\\tfrac{1\\pm\\sqrt5}{2}$ as if both roots were admissible. The negative root $\\tfrac{1-\\sqrt5}{2}<0$ is impossible: every $x_n>0$, so only the positive root survives. Convergence itself must also be justified, not assumed, before invoking the fixed point.",
    "solutions": [
      {
        "name": "Recast as Fibonacci ratio",
        "steps": [
          "Write $x_n=p_n/q_n$. Then $x_{n+1}=1+q_n/p_n=(p_n+q_n)/p_n$, so taking $p_{n+1}=p_n+q_n,\\ q_{n+1}=p_n$ gives $p_{n+1}=p_n+p_{n-1}$ — the Fibonacci recurrence.",
          "With $x_1=1$ the bookkeeping yields $x_n=F_{n+1}/F_n$ where $F$ is the Fibonacci sequence.",
          "By Binet, $F_n=\\tfrac{\\phi^n-\\psi^n}{\\sqrt5}$ with $\\phi=\\tfrac{1+\\sqrt5}2$, $|\\psi/\\phi|<1$, so $\\dfrac{F_{n+1}}{F_n}=\\dfrac{\\phi^{n+1}-\\psi^{n+1}}{\\phi^n-\\psi^n}=\\dfrac{\\phi-\\psi(\\psi/\\phi)^n}{1-(\\psi/\\phi)^n}\\to\\phi$.",
          "The limit exists and equals $\\phi=\\dfrac{1+\\sqrt5}2$ (the negative fixed point is excluded since all $x_n>0$)."
        ]
      },
      {
        "name": "Monotone subsequences plus fixed point",
        "steps": [
          "All $x_n\\ge1>0$. The map $g(t)=1+1/t$ is decreasing, so $g\\circ g$ is increasing; the odd-indexed and even-indexed subsequences are monotone and bounded, hence each converges.",
          "Both subsequential limits satisfy $L=1+1/L$, i.e. $L^2-L-1=0$, whose only positive root is $\\tfrac{1+\\sqrt5}{2}$.",
          "Since both subsequences converge to the same positive value, the whole sequence converges to it.",
          "Therefore $L=\\dfrac{1+\\sqrt5}{2}$."
        ]
      }
    ],
    "remark": "Insight: a nonlinear recurrence $x_{n+1}=1+1/x_n$ linearises into Fibonacci once you track numerator and denominator separately — the golden ratio appears as the dominant characteristic root, and the fixed-point equation is just the characteristic equation $x^2-x-1=0$ in disguise."
  },
  {
    "theme": "recurrences",
    "themeLabel": "Recurrences & Characteristic Equations",
    "title": "Tiling a Strip With Tiles",
    "difficulty": 5,
    "task": "Count the tilings, then find the requested term.",
    "tags": [
      "recurrence",
      "characteristic-equation",
      "tiling",
      "fibonacci",
      "induction"
    ],
    "statement": "Let $a_n$ denote the number of ways to completely tile a $1\\times n$ strip using indistinguishable $1\\times 1$ squares and $1\\times 2$ dominoes (placed horizontally along the strip). For example $a_1=1$, $a_2=2$ (two squares, or one domino). Find $a_{10}$, and exhibit a closed form for $a_n$ obtained from the characteristic equation of the recurrence.",
    "answer": "$\\boxed{a_{10}=89}$",
    "trap": "Setting the base case $a_0=0$ (treating the empty strip as having no tiling) breaks the recurrence at $n=2$: it forces $a_2=a_1+a_0=1$ instead of the true $a_2=2$, and the whole sequence shifts down to ordinary Fibonacci, giving the wrong value $a_{10}=F_{10}=55$. The correct convention is $a_0=1$ (the empty tiling).",
    "solutions": [
      {
        "name": "Recurrence plus characteristic equation",
        "steps": [
          "Classify a tiling of the $1\\times n$ strip by its last piece. If the last piece is a $1\\times 1$ square, the first $n-1$ cells form any tiling of a $1\\times(n-1)$ strip, contributing $a_{n-1}$ ways. If the last piece is a $1\\times 2$ domino, the first $n-2$ cells form any tiling of a $1\\times(n-2)$ strip, contributing $a_{n-2}$ ways. These cases are disjoint and exhaustive, so $a_n=a_{n-1}+a_{n-2}$ for $n\\ge 2$.",
          "Fix the base cases honestly: $a_0=1$ (the empty strip has exactly one tiling, namely use no pieces) and $a_1=1$ (a single square). Then $a_2=a_1+a_0=2$, matching the direct count, which confirms the base cases.",
          "Solve the linear recurrence by its characteristic equation $x^2=x+1$, i.e. $x^2-x-1=0$, whose roots are $\\alpha=\\tfrac{1+\\sqrt5}{2}$ and $\\beta=\\tfrac{1-\\sqrt5}{2}$. The general solution is $a_n=A\\alpha^n+B\\beta^n$.",
          "Impose $a_0=1$ and $a_1=1$: $A+B=1$ and $A\\alpha+B\\beta=1$. Solving, $A=\\tfrac{\\alpha}{\\alpha-\\beta}=\\tfrac{\\alpha}{\\sqrt5}$ and $B=-\\tfrac{\\beta}{\\sqrt5}$, giving the closed form $a_n=\\dfrac{\\alpha^{\\,n+1}-\\beta^{\\,n+1}}{\\sqrt5}$.",
          "Evaluate at $n=10$: $a_{10}=\\dfrac{\\alpha^{11}-\\beta^{11}}{\\sqrt5}$. Either substitute the surds or just run the recurrence $1,1,2,3,5,8,13,21,34,55,89$ to read off $\\boxed{a_{10}=89}$."
        ]
      },
      {
        "name": "Telescoping the recurrence iteratively",
        "steps": [
          "Take the established recurrence $a_n=a_{n-1}+a_{n-2}$ with $a_0=1$, $a_1=1$, and simply iterate term by term, which is itself a telescoping unfolding of each value into the previous two.",
          "Compute successively: $a_2=a_1+a_0=2$, $a_3=a_2+a_1=3$, $a_4=a_3+a_2=5$, $a_5=8$, $a_6=13$, $a_7=21$, $a_8=34$, $a_9=55$.",
          "Finally $a_{10}=a_9+a_8=55+34=89$, so $\\boxed{a_{10}=89}$, in agreement with the closed form."
        ]
      },
      {
        "name": "Induction against the closed form",
        "steps": [
          "Conjecture from the characteristic-equation solution that $a_n=\\dfrac{\\alpha^{\\,n+1}-\\beta^{\\,n+1}}{\\sqrt5}$ where $\\alpha,\\beta$ are the roots of $x^2-x-1=0$. Base cases: at $n=0$ this gives $\\tfrac{\\alpha-\\beta}{\\sqrt5}=\\tfrac{\\sqrt5}{\\sqrt5}=1=a_0$, and at $n=1$ it gives $\\tfrac{\\alpha^2-\\beta^2}{\\sqrt5}=\\tfrac{(\\alpha-\\beta)(\\alpha+\\beta)}{\\sqrt5}=\\alpha+\\beta=1=a_1$.",
          "Inductive step: assume the formula holds for $n-1$ and $n-2$. Since $\\alpha^2=\\alpha+1$ and $\\beta^2=\\beta+1$, we get $\\alpha^{\\,n+1}=\\alpha^{\\,n}+\\alpha^{\\,n-1}$ and likewise for $\\beta$. Subtracting and dividing by $\\sqrt5$ yields exactly $\\dfrac{\\alpha^{\\,n+1}-\\beta^{\\,n+1}}{\\sqrt5}=\\dfrac{\\alpha^{\\,n}-\\beta^{\\,n}}{\\sqrt5}+\\dfrac{\\alpha^{\\,n-1}-\\beta^{\\,n-1}}{\\sqrt5}=a_{n-1}+a_{n-2}=a_n$, closing the induction.",
          "Substituting $n=10$ into the now-proven closed form, $a_{10}=\\dfrac{\\alpha^{11}-\\beta^{11}}{\\sqrt5}=89$, so $\\boxed{a_{10}=89}$."
        ]
      }
    ],
    "remark": "**Insight.** The last-piece split is the whole game: a single combinatorial cut turns a counting problem into the linear recurrence $a_n=a_{n-1}+a_{n-2}$, and the characteristic equation $x^2-x-1=0$ hands you Binet's closed form for free. The only place to slip is the base case — the empty strip must count as one tiling ($a_0=1$), not zero; get that wrong and your Fibonacci index quietly shifts, costing you the right answer."
  },
  {
    "theme": "recurrences",
    "themeLabel": "Recurrences & Characteristic Equations",
    "title": "Repeated Root Feeds an AGP Sum",
    "difficulty": 5,
    "task": "Solve the recurrence by its characteristic equation, then sum the resulting series.",
    "tags": [
      "recurrence",
      "characteristic equation",
      "repeated root",
      "AGP",
      "geometric series"
    ],
    "statement": "A sequence $(a_n)_{n\\ge 0}$ satisfies $a_0=1$, $a_1=9$ and the linear recurrence $a_{n+1}=6a_n-9a_{n-1}$ for all $n\\ge 1$. Define $S=\\displaystyle\\sum_{n=0}^{\\infty}\\frac{a_n}{27^{\\,n}}$. Find the exact value of $S$.",
    "answer": "$\\boxed{\\dfrac{45}{32}}$",
    "trap": "After finding the characteristic equation $(x-3)^2=0$ has the repeated root $3$, writing the general solution as $a_n=A\\cdot 3^n$ (omitting the obligatory $n\\cdot 3^n$ term for a repeated root). That forces $A=1$ but then $a_1=3\\ne 9$, and even if one fudges it the series collapses to a bare geometric sum $\\sum (1/9)^n=9/8$ instead of the correct AGP value $45/32$.",
    "solutions": [
      {
        "name": "Characteristic equation (repeated root) then shift-and-subtract the AGP",
        "steps": [
          "The recurrence $a_{n+1}-6a_n+9a_{n-1}=0$ has characteristic equation $x^2-6x+9=0$, i.e. $(x-3)^2=0$, a repeated root $x=3$. For a repeated root the general solution is $a_n=(A+Bn)\\,3^n$, where the extra factor $n$ is mandatory.",
          "Impose the data: $a_0=A=1$, and $a_1=(A+B)\\cdot 3=9\\Rightarrow A+B=3\\Rightarrow B=2$. Hence $a_n=(1+2n)\\,3^n$. (Check: $a_2=(5)(9)=45=6\\cdot9-9\\cdot1$.)",
          "Then $\\dfrac{a_n}{27^n}=\\dfrac{(1+2n)3^n}{27^n}=(1+2n)\\Big(\\tfrac19\\Big)^n$, so $S=\\sum_{n=0}^{\\infty}(1+2n)r^n$ with $r=\\tfrac19$. Split as $S=\\underbrace{\\sum_{n\\ge0} r^n}_{G}+2\\underbrace{\\sum_{n\\ge0} n\\,r^n}_{T}$.",
          "The geometric part is $G=\\dfrac{1}{1-r}=\\dfrac{1}{1-1/9}=\\dfrac{9}{8}$. For the arithmetic-geometric part $T=\\sum_{n\\ge0} n r^n$, use shift-and-subtract: $T-rT=\\sum_{n\\ge1}\\big(n-(n-1)\\big)r^n=\\sum_{n\\ge1} r^n=\\dfrac{r}{1-r}$, so $T=\\dfrac{r}{(1-r)^2}=\\dfrac{1/9}{(8/9)^2}=\\dfrac{9}{64}$.",
          "Therefore $S=G+2T=\\dfrac{9}{8}+2\\cdot\\dfrac{9}{64}=\\dfrac{72}{64}+\\dfrac{18}{64}=\\dfrac{90}{64}=\\boxed{\\dfrac{45}{32}}$."
        ]
      },
      {
        "name": "Direct shift-and-subtract on the whole series",
        "steps": [
          "As above, solving by the characteristic equation with its repeated root $3$ gives $a_n=(1+2n)3^n$, hence $\\dfrac{a_n}{27^n}=(1+2n)r^n$ with $r=\\tfrac19$; let $S=\\sum_{n\\ge0}(1+2n)r^n$.",
          "Form $rS=\\sum_{n\\ge0}(1+2n)r^{n+1}=\\sum_{m\\ge1}(2m-1)r^{m}$ (substituting $m=n+1$, so $1+2n=2m-1$).",
          "Subtract: $S-rS=(1+2\\cdot0)r^0+\\sum_{m\\ge1}\\big[(1+2m)-(2m-1)\\big]r^m=1+\\sum_{m\\ge1}2\\,r^m=1+\\dfrac{2r}{1-r}$.",
          "With $r=\\tfrac19$: $S-rS=1+\\dfrac{2/9}{8/9}=1+\\dfrac14=\\dfrac54$, while $1-r=\\dfrac89$. Thus $S=\\dfrac{5/4}{8/9}=\\dfrac{5}{4}\\cdot\\dfrac{9}{8}=\\boxed{\\dfrac{45}{32}}$."
        ]
      }
    ],
    "remark": "**Insight.** The whole problem turns on one reflex: a repeated characteristic root demands the $n\\,r^n$ companion solution. That very term is what converts the tail into an arithmetic-geometric series, and the cleanest way to collapse an AGP is the same shift-and-subtract trick $(1-r)S$ that tames a plain geometric series — no calculus, no differentiating anything, just one multiplication and one subtraction."
  },
  {
    "theme": "apps",
    "themeLabel": "Applications of Progressions",
    "title": "The Widening Auditorium",
    "difficulty": 3,
    "task": "Find total seats",
    "tags": [
      "ap",
      "sum-of-ap",
      "seating",
      "word-problem"
    ],
    "statement": "A concert hall is built so that the front row has $20$ seats and every row behind it holds exactly $4$ more seats than the row in front of it. If the hall has $30$ rows in all, find the total number of seats in the hall, and state how many seats are in the last row.",
    "answer": "$\\boxed{2340}$ seats in all, with $136$ in the last row",
    "trap": "Reading 'every row holds $4$ more' as a constant multiplier and treating the rows as a GP, or — worse — multiplying $20\\times30=600$ as though every row had $20$ seats. The seat counts grow by a fixed \\emph{difference}, so this is an AP, not a GP, and certainly not a constant.",
    "solutions": [
      {
        "name": "Sum of an AP",
        "steps": [
          "The row counts are $20,24,28,\\dots$ an AP with first term $a=20$ and common difference $d=4$.",
          "The last (30th) row has $a+(n-1)d=20+29\\cdot4=136$ seats.",
          "Total $=\\dfrac{n}{2}(a+\\ell)=\\dfrac{30}{2}(20+136)=15\\cdot156=2340$.",
          "Hence the hall seats $\\boxed{2340}$ people, with $136$ in the back row."
        ]
      },
      {
        "name": "Sum formula in $a,d$",
        "steps": [
          "$S_{30}=\\dfrac{n}{2}\\big(2a+(n-1)d\\big)=\\dfrac{30}{2}\\big(2\\cdot20+29\\cdot4\\big)$.",
          "$=15\\,(40+116)=15\\cdot156=2340$.",
          "The 30th term is $20+29\\cdot4=136$, so the answer is $\\boxed{2340}$ seats."
        ]
      }
    ],
    "remark": "**Insight.** The single word *more* (a fixed **difference**) versus *times* (a fixed **ratio**) decides whether a growth story is an **AP** or a **GP**. Reading that one word correctly is the whole problem; the arithmetic is then routine."
  },
  {
    "theme": "apps",
    "themeLabel": "Applications of Progressions",
    "title": "The Ball That Stops After Forever",
    "difficulty": 3,
    "task": "Find total distance",
    "tags": [
      "gp",
      "infinite-gp",
      "bouncing-ball",
      "word-problem"
    ],
    "statement": "A ball is dropped from a height of $16$ metres. After striking the floor it rebounds to $\\tfrac34$ of the height from which it last fell, and this continues indefinitely. Find the total vertical distance the ball travels before coming to rest.",
    "answer": "$\\boxed{112}$ metres",
    "trap": "Summing only the downward falls, $16+16\\cdot\\tfrac34+\\cdots=\\dfrac{16}{1-3/4}=64$, and reporting $64$ m. That counts each rise as if it never happened: every bounce is travelled \\emph{twice}, once up and once down — except the very first drop, which is travelled only once.",
    "solutions": [
      {
        "name": "First drop plus paired rises and falls",
        "steps": [
          "The first fall is $16$ m. Thereafter each height $h$ is travelled up then down, contributing $2h$.",
          "The rebound heights are $16\\cdot\\tfrac34,\\,16\\cdot(\\tfrac34)^2,\\dots$, an infinite GP with first term $16\\cdot\\tfrac34=12$ and ratio $\\tfrac34$.",
          "Their sum is $\\dfrac{12}{1-3/4}=48$, so the up-and-down travel is $2\\cdot48=96$ m.",
          "Total $=16+96=\\boxed{112}$ metres."
        ]
      },
      {
        "name": "Single closed form",
        "steps": [
          "For a drop $H$ with rebound ratio $r$, the total path length is $H\\cdot\\dfrac{1+r}{1-r}$.",
          "Here $H=16$, $r=\\tfrac34$, so total $=16\\cdot\\dfrac{1+3/4}{1-3/4}=16\\cdot\\dfrac{7/4}{1/4}=16\\cdot7$.",
          "$=\\boxed{112}$ metres."
        ]
      }
    ],
    "remark": "**Insight.** An infinite process can have a **finite** total because the rebounds form a GP with ratio $|r|<1$. The recurring trap is the asymmetry of the **first drop**: it is counted once, every later height twice."
  },
  {
    "theme": "apps",
    "themeLabel": "Applications of Progressions",
    "title": "The Machine That Loses a Tenth",
    "difficulty": 3,
    "task": "Find value after 3 years",
    "tags": [
      "gp",
      "depreciation",
      "compound-decay",
      "word-problem"
    ],
    "statement": "A machine is bought for $\\text{Rs}\\,80000$. Each year its value depreciates to $90\\%$ of its value at the start of that year. Find the machine's worth at the end of $3$ years.",
    "answer": "$\\boxed{\\text{Rs}\\,58320}$",
    "trap": "Treating the loss as a flat $\\text{Rs}\\,8000$ (i.e. $10\\%$ of the \\emph{original} price) each year and subtracting $3\\times8000$ to get $\\text{Rs}\\,56000$. Depreciation acts on the \\emph{current} value, so the yearly losses themselves shrink — this is a GP of values, not an AP.",
    "solutions": [
      {
        "name": "Geometric decay factor",
        "steps": [
          "Each year multiplies the value by $\\dfrac{90}{100}=\\dfrac{9}{10}$.",
          "After $3$ years: $80000\\left(\\dfrac{9}{10}\\right)^{3}=80000\\cdot\\dfrac{729}{1000}$.",
          "$=80\\cdot729=58320$.",
          "Worth $=\\boxed{\\text{Rs}\\,58320}$."
        ]
      },
      {
        "name": "Year by year",
        "steps": [
          "End of year $1$: $80000\\cdot0.9=72000$.",
          "End of year $2$: $72000\\cdot0.9=64800$.",
          "End of year $3$: $64800\\cdot0.9=58320$.",
          "Hence $\\boxed{\\text{Rs}\\,58320}$ — note the yearly drops $8000,7200,6480$ are themselves shrinking, confirming a GP."
        ]
      }
    ],
    "remark": "**Insight.** *Percentage of the current value* always builds a **GP**, never an AP. The flat-subtraction answer $\\text{Rs}\\,56000$ silently assumes the percentage is taken of a fixed base — the classic AP-for-GP confusion."
  },
  {
    "theme": "apps",
    "themeLabel": "Applications of Progressions",
    "title": "Two Instalments and the Hidden Interest",
    "difficulty": 4,
    "task": "Find each instalment",
    "tags": [
      "gp",
      "loan-repayment",
      "compound-interest",
      "instalments"
    ],
    "statement": "A sum of $\\text{Rs}\\,210000$ is borrowed at $10\\%$ per annum compounded yearly and is to be repaid in two equal instalments, one at the end of each of the next two years. Find the value of each instalment.",
    "answer": "$\\boxed{\\text{Rs}\\,121000}$ per instalment",
    "trap": "Simply halving the principal to $\\text{Rs}\\,105000$, ignoring the interest that accrues before each payment. The debt grows at $10\\%$ while it is outstanding, so the two equal payments must clear the \\emph{accumulated} amount, not the bare principal.",
    "solutions": [
      {
        "name": "Accumulate the debt to year 2",
        "steps": [
          "Let each instalment be $X$, paid at the end of years $1$ and $2$.",
          "By year $2$ the debt has grown to $210000(1.1)^2=254100$.",
          "The first payment, made a year early, itself accrues interest: its value at year $2$ is $1.1X$; the second contributes $X$.",
          "So $1.1X+X=254100\\Rightarrow 2.1X=254100\\Rightarrow X=\\boxed{121000}$."
        ]
      },
      {
        "name": "Present value of the two payments",
        "steps": [
          "Discount each payment back to today at $10\\%$: $\\dfrac{X}{1.1}+\\dfrac{X}{1.1^2}=210000$.",
          "Multiply by $1.1^2=1.21$: $1.1X+X=210000\\cdot1.21=254100$.",
          "$2.1X=254100\\Rightarrow X=121000$.",
          "Each instalment is $\\boxed{\\text{Rs}\\,121000}$."
        ]
      }
    ],
    "remark": "**Insight.** A loan is a tiny finite **GP** in disguise — equate the *accumulated debt* with the *accumulated payments* (or, equivalently, the principal with the **present value** of the instalments). Halving the principal forgets that time itself charges interest."
  },
  {
    "theme": "apps",
    "themeLabel": "Applications of Progressions",
    "title": "How Many Means Fit Between Them",
    "difficulty": 4,
    "task": "Find number of means",
    "tags": [
      "ap",
      "arithmetic-means",
      "inserting-means",
      "word-problem"
    ],
    "statement": "Several arithmetic means are inserted between $7$ and $71$ so that, together with $7$ and $71$, they form a single arithmetic progression. If the $5^{\\text{th}}$ of these inserted means equals $39$, how many means were inserted?",
    "answer": "$\\boxed{9}$ arithmetic means",
    "trap": "Counting $7$ as the first inserted mean, so that '$5^{\\text{th}}$ mean' is taken to be the $5^{\\text{th}}$ \\emph{term} $7+4d$ rather than $7+5d$. The endpoints $7$ and $71$ are \\emph{not} means; the $k$-th inserted mean is the $(k+1)$-th term of the AP.",
    "solutions": [
      {
        "name": "Common difference from one mean",
        "steps": [
          "If $m$ means are inserted, the AP has $m+2$ terms with common difference $d=\\dfrac{71-7}{m+1}=\\dfrac{64}{m+1}$.",
          "The $k$-th inserted mean is the $(k+1)$-th term, $7+kd$. Here the $5^{\\text{th}}$ mean gives $7+5d=39$.",
          "So $5d=32\\Rightarrow d=\\dfrac{32}{5}=6.4$.",
          "Then $\\dfrac{64}{m+1}=6.4\\Rightarrow m+1=10\\Rightarrow m=\\boxed{9}$."
        ]
      },
      {
        "name": "Verify by listing",
        "steps": [
          "With $d=6.4$ the AP is $7,\\,13.4,\\,19.8,\\,26.2,\\,32.6,\\,39,\\dots$",
          "The inserted means start at $13.4$ (the $1^{\\text{st}}$), so the $5^{\\text{th}}$ mean is $39$ — matching the data.",
          "The last term must be $71=7+(m+1)d=7+(m+1)6.4$, giving $m+1=10$.",
          "Hence $m=\\boxed{9}$ means were inserted."
        ]
      }
    ],
    "remark": "**Insight.** Inserting $m$ means just refines the step to $d=\\dfrac{b-a}{m+1}$. The off-by-one trap is purely linguistic: the **endpoints are not means**, so the $k$-th mean is the $(k{+}1)$-th term."
  },
  {
    "theme": "apps",
    "themeLabel": "Applications of Progressions",
    "title": "When the Culture Triples",
    "difficulty": 4,
    "task": "Find first hour exceeding",
    "tags": [
      "gp",
      "population-growth",
      "nth-term",
      "word-problem"
    ],
    "statement": "A bacterial culture starts with $500$ cells and its population is multiplied by $\\tfrac65$ at the end of every hour. After how many whole hours does the population first exceed $1500$ cells?",
    "answer": "$\\boxed{7}$ hours",
    "trap": "Reasoning 'to triple, you grow by $\\tfrac15$ each hour, so it takes $\\dfrac{1500-500}{500\\cdot(1/5)}$' — that mixes a fixed $\\text{Rs}$-style increment with a percentage, treating geometric growth as if it were an AP. The growth compounds, so each hour's increase is larger than the last.",
    "solutions": [
      {
        "name": "Solve the geometric inequality",
        "steps": [
          "After $n$ hours the population is $500\\left(\\dfrac65\\right)^n$; we need $500\\left(\\dfrac65\\right)^n>1500$, i.e. $\\left(\\dfrac65\\right)^n>3$.",
          "Compute powers: $\\left(\\dfrac65\\right)^6=\\dfrac{46656}{15625}\\approx2.986<3$, so $n=6$ is not enough.",
          "$\\left(\\dfrac65\\right)^7\\approx3.583>3$, so $n=7$ works.",
          "The population first exceeds $1500$ after $\\boxed{7}$ hours."
        ]
      },
      {
        "name": "Tabulate the GP",
        "steps": [
          "$500\\to600\\to720\\to864\\to1036.8\\to1244.16\\to1492.99\\to1791.59$ at hours $0,1,\\dots,7$.",
          "At hour $6$ the count is $\\approx1493<1500$; at hour $7$ it is $\\approx1792>1500$.",
          "Hence the first whole hour with population above $1500$ is hour $\\boxed{7}$."
        ]
      }
    ],
    "remark": "**Insight.** Geometric growth needs *the same multiplier to act on an ever-larger base*, so equal hours give **unequal** increments — never average them as an AP. Crossing a threshold is solved by an inequality in the GP's $n$-th term."
  },
  {
    "theme": "apps",
    "themeLabel": "Applications of Progressions",
    "title": "Three Deposits and a Quarter More",
    "difficulty": 4,
    "task": "Find maturity value",
    "tags": [
      "gp",
      "annuity",
      "compound-interest",
      "sum-of-gp"
    ],
    "statement": "At the start of each year for three consecutive years a person deposits $\\text{Rs}\\,8000$ into an account paying $25\\%$ per annum compounded yearly. Find the total amount standing to their credit at the end of the third year.",
    "answer": "$\\boxed{\\text{Rs}\\,38125}$",
    "trap": "Adding the three deposits and applying one year's interest, $3\\times8000\\times1.25=\\text{Rs}\\,30000$. Each deposit sits for a different length of time, so it earns a different power of $1.25$; the three matured values form a GP, not three equal amounts.",
    "solutions": [
      {
        "name": "Mature each deposit separately",
        "steps": [
          "The first deposit compounds for $3$ years: $8000(5/4)^3$. The second for $2$ years: $8000(5/4)^2$. The third for $1$ year: $8000(5/4)$.",
          "Total $=8000\\left[(5/4)^3+(5/4)^2+(5/4)\\right]=8000\\cdot\\dfrac54\\left[(5/4)^2+(5/4)+1\\right]$.",
          "$(5/4)^2+(5/4)+1=\\dfrac{25+20+16}{16}=\\dfrac{61}{16}$, so total $=8000\\cdot\\dfrac54\\cdot\\dfrac{61}{16}=10000\\cdot\\dfrac{61}{16}$.",
          "$=\\dfrac{610000}{16}=\\boxed{\\text{Rs}\\,38125}$."
        ]
      },
      {
        "name": "Sum a finite GP",
        "steps": [
          "The matured values are $10000,\\,12500,\\,15625$ (i.e. $8000\\cdot\\tfrac54,\\ 8000(\\tfrac54)^2,\\ 8000(\\tfrac54)^3$), a GP with first term $10000$ and ratio $\\tfrac54$.",
          "Sum $=10000\\cdot\\dfrac{(5/4)^3-1}{(5/4)-1}=10000\\cdot\\dfrac{125/64-1}{1/4}=10000\\cdot\\dfrac{61/64}{1/4}$.",
          "$=10000\\cdot\\dfrac{61}{16}=38125$.",
          "Maturity value $=\\boxed{\\text{Rs}\\,38125}$."
        ]
      }
    ],
    "remark": "**Insight.** A stream of equal deposits matures into a **GP**, because *time in the account*, not the deposit size, varies. Summing that GP is the whole computation; the flat $\\text{Rs}\\,30000$ pretends every rupee was deposited at the same moment."
  },
  {
    "theme": "apps",
    "themeLabel": "Applications of Progressions",
    "title": "The Endowment That Grows Each Year",
    "difficulty": 5,
    "task": "Find the endowment value",
    "tags": [
      "agp",
      "arithmetico-geometric",
      "present-value",
      "infinite-series"
    ],
    "statement": "A philanthropist sets up a perpetual fund. At the end of year $t$ (for $t=1,2,3,\\dots$ forever) the fund pays out $t$ thousand rupees. Money is worth $25\\%$ per annum, so a payment of $t$ thousand made at the end of year $t$ is worth $t\\left(\\tfrac45\\right)^{t}$ thousand rupees today. Find the amount that must be deposited now to fund all the payments, i.e. evaluate $\\displaystyle\\sum_{t=1}^{\\infty} t\\left(\\tfrac45\\right)^{t}$ thousand rupees.",
    "answer": "$\\boxed{\\text{Rs}\\,20000}$",
    "trap": "Treating the present values $t\\left(\\tfrac45\\right)^t$ as an ordinary GP and summing $\\dfrac{4/5}{1-4/5}=4$ (thousand). That drops the linearly-growing factor $t$: the series is arithmetico-geometric, not geometric, so the plain-GP answer of $\\text{Rs}\\,4000$ is far too small.",
    "solutions": [
      {
        "name": "Shift-and-subtract on the AGP",
        "steps": [
          "Let $x=\\tfrac45$ and $S=\\sum_{t\\ge1}t\\,x^{t}=x+2x^2+3x^3+\\cdots$ (in thousands).",
          "Then $xS=x^2+2x^3+3x^4+\\cdots$; subtract: $S-xS=x+x^2+x^3+\\cdots=\\dfrac{x}{1-x}$.",
          "So $S(1-x)=\\dfrac{x}{1-x}\\Rightarrow S=\\dfrac{x}{(1-x)^2}=\\dfrac{4/5}{(1/5)^2}=\\dfrac{4/5}{1/25}=20$.",
          "Thus $S=20$ thousand, i.e. $\\boxed{\\text{Rs}\\,20000}$ must be deposited."
        ]
      },
      {
        "name": "Differentiate the geometric identity",
        "steps": [
          "For $|x|<1$, $\\sum_{t\\ge0}x^{t}=\\dfrac{1}{1-x}$, and termwise $\\sum_{t\\ge1}t\\,x^{t-1}=\\dfrac{1}{(1-x)^2}$.",
          "Multiply by $x$: $\\sum_{t\\ge1}t\\,x^{t}=\\dfrac{x}{(1-x)^2}$.",
          "At $x=\\tfrac45$: $\\dfrac{4/5}{(1/5)^2}=20$ thousand.",
          "The required deposit is $\\boxed{\\text{Rs}\\,20000}$."
        ]
      }
    ],
    "remark": "**Insight.** A payment stream whose *size grows linearly* while it is *discounted geometrically* is the **arithmetico-geometric** series $\\sum t x^t=\\dfrac{x}{(1-x)^2}$. The shift-and-subtract collapses the $t$-factor against a plain GP — forgetting the $t$ is the cardinal error."
  },
  {
    "theme": "apps",
    "themeLabel": "Applications of Progressions",
    "title": "The Debt Behind Three Equal Payments",
    "difficulty": 5,
    "task": "Find the loan",
    "tags": [
      "gp",
      "present-value",
      "loan-repayment",
      "finite-vs-infinite"
    ],
    "statement": "A loan is to be cleared by three equal annual instalments of $\\text{Rs}\\,13310$ each, paid at the end of years $1,2,3$, money being worth $10\\%$ per annum compounded yearly. Find the amount of the loan.",
    "answer": "$\\boxed{\\text{Rs}\\,33100}$",
    "trap": "Summing the instalments as an \\emph{infinite} stream, $\\dfrac{13310}{0.1}=\\text{Rs}\\,133100$, as though the payments went on forever. There are only three payments, so the present value is a \\emph{finite} GP of three terms — summing a finite GP as if infinite multiplies the answer wildly.",
    "solutions": [
      {
        "name": "Present value as a finite GP",
        "steps": [
          "Discount each instalment to today: $L=\\dfrac{13310}{1.1}+\\dfrac{13310}{1.1^2}+\\dfrac{13310}{1.1^3}$.",
          "With $v=\\dfrac{1}{1.1}=\\dfrac{10}{11}$ this is $13310\\,(v+v^2+v^3)$, a GP with first term $v$, ratio $v$, three terms.",
          "$v+v^2+v^3=v\\dfrac{1-v^3}{1-v}=\\dfrac{10}{11}\\cdot\\dfrac{1-(10/11)^3}{1-10/11}=\\dfrac{10}{11}\\cdot\\dfrac{331/1331}{1/11}=\\dfrac{3310}{1331}$.",
          "$L=13310\\cdot\\dfrac{3310}{1331}=10\\cdot3310=\\boxed{\\text{Rs}\\,33100}$."
        ]
      },
      {
        "name": "Accumulate to year 3",
        "steps": [
          "At the end of year $3$ the loan owes $L(1.1)^3$, cleared by the three payments accumulated to that date:",
          "$L(1.1)^3=13310(1.1)^2+13310(1.1)+13310=13310\\,(1.21+1.1+1)=13310\\cdot3.31$.",
          "So $1.331\\,L=44056.1\\Rightarrow L=\\dfrac{44056.1}{1.331}=33100$.",
          "The loan was $\\boxed{\\text{Rs}\\,33100}$."
        ]
      }
    ],
    "remark": "**Insight.** *Three* payments means a **three-term** GP — the boundary between the finite sum $a\\frac{1-r^n}{1-r}$ and the infinite $\\frac{a}{1-r}$ is exactly the trap. Always count the terms before reaching for the infinite formula."
  },
  {
    "theme": "apps",
    "themeLabel": "Applications of Progressions",
    "title": "Reading the Rebound from the Total",
    "difficulty": 5,
    "task": "Find the rebound ratio",
    "tags": [
      "gp",
      "infinite-gp",
      "bouncing-ball",
      "inverse-problem"
    ],
    "statement": "A ball dropped from a height of $9$ metres rebounds, after each strike, to a fixed fraction $r$ (with $0<r<1$) of the height it last fell from, and continues indefinitely. The total vertical distance it travels before stopping is measured to be exactly $45$ metres. Find $r$, and the height to which the ball rises on its first bounce.",
    "answer": "$r=\\boxed{\\dfrac{2}{3}}$, first rebound height $=6$ m",
    "trap": "Using the downward-only sum $\\dfrac{9}{1-r}=45$ (giving $r=\\tfrac45$) and stopping there. That ignores every upward leg; the true path length is $9\\cdot\\dfrac{1+r}{1-r}$. The phantom $r=\\tfrac45$ would actually produce a path of $81$ m, not $45$.",
    "solutions": [
      {
        "name": "Invert the total-distance formula",
        "steps": [
          "Total path for drop $H$ and ratio $r$ is $H\\cdot\\dfrac{1+r}{1-r}$ (first drop once, every later height twice).",
          "Set $9\\cdot\\dfrac{1+r}{1-r}=45\\Rightarrow\\dfrac{1+r}{1-r}=5$.",
          "Then $1+r=5-5r\\Rightarrow 6r=4\\Rightarrow r=\\dfrac23$.",
          "First rebound height $=r\\cdot9=\\dfrac23\\cdot9=6$ m. So $r=\\boxed{\\dfrac23}$."
        ]
      },
      {
        "name": "Split into drops and rises",
        "steps": [
          "Drops sum to $\\dfrac{9}{1-r}$; rises sum to $\\dfrac{9r}{1-r}$. Total $=\\dfrac{9(1+r)}{1-r}=45$.",
          "Hence $9(1+r)=45(1-r)\\Rightarrow 9+9r=45-45r\\Rightarrow 54r=36$.",
          "$r=\\dfrac{36}{54}=\\dfrac23$, and the first rise is $9r=6$ m.",
          "Check: total $=9\\cdot\\dfrac{1+2/3}{1-2/3}=9\\cdot5=45$. So $r=\\boxed{\\dfrac23}$."
        ]
      }
    ],
    "remark": "**Insight.** Inverting a word problem still demands the *correct* forward model: the rebound ratio is recoverable only from the **full** $H\\frac{1+r}{1-r}$, not the down-only sum. A wrong model gives a wrong $r$ that quietly fails the original measurement."
  },
  {
    "theme": "convergence",
    "themeLabel": "Infinite GP & Telescoping Series",
    "title": "The Disappearing Middle",
    "difficulty": 3,
    "task": "Evaluate",
    "tags": [
      "telescoping",
      "partial fractions",
      "geometric series",
      "exact sum"
    ],
    "statement": "Evaluate the convergent series\n\\[\\sum_{n=1}^{\\infty}\\frac{1}{(2n-1)(2n+1)}.\\]\nAfter noting the partial sums telescope to a finite limit, find the exact value.",
    "answer": "\\[\\boxed{\\dfrac{1}{2}}\\]",
    "trap": "Comparing the term to $\\frac{1}{4n^2}$ and reporting only that it converges, then stopping — or worse, declaring the sum is $\\frac{\\pi^2}{24}$ by analogy with $\\sum 1/n^2$. The comparison proves convergence but says nothing about the value; the term is $\\frac14$ of $\\frac{1}{(n-\\frac12)(n+\\frac12)}$, not of $\\frac{1}{n^2}$, and the sum telescopes to a rational, not a $\\pi^2$ value.",
    "solutions": [
      {
        "name": "Partial fractions + telescoping",
        "steps": [
          "Write $\\frac{1}{(2n-1)(2n+1)}=\\frac12\\left(\\frac{1}{2n-1}-\\frac{1}{2n+1}\\right)$.",
          "The $N$-th partial sum is $\\frac12\\sum_{n=1}^N\\left(\\frac{1}{2n-1}-\\frac{1}{2n+1}\\right)=\\frac12\\left(1-\\frac{1}{2N+1}\\right)$ by cancellation of interior terms.",
          "As $N\\to\\infty$, $\\frac{1}{2N+1}\\to0$, so the sum is $\\frac12\\cdot 1=\\boxed{\\tfrac12}$."
        ]
      },
      {
        "name": "Comparison for convergence, then exact tail",
        "steps": [
          "Since $0<\\frac{1}{(2n-1)(2n+1)}<\\frac{1}{(2n-1)^2}\\le\\frac{1}{n^2}$ for $n\\ge1$, the series converges by comparison with the $p$-series $p=2$.",
          "Knowing convergence, evaluate via the telescoped partial sum $\\frac12\\left(1-\\frac{1}{2N+1}\\right)$.",
          "The limit is $\\boxed{\\tfrac12}$."
        ]
      }
    ],
    "remark": "Insight: convergence and value are separate questions. The term-by-term comparison answers the first; only the algebraic structure (telescoping) answers the second. A clean rational sum is the tell that no irrational constant is hiding here."
  },
  {
    "theme": "convergence",
    "themeLabel": "Infinite GP & Telescoping Series",
    "title": "The Odd Pairs Collapse",
    "difficulty": 3,
    "task": "Evaluate the infinite sum",
    "tags": [
      "telescoping",
      "method of differences",
      "partial fractions",
      "infinite series"
    ],
    "statement": "Evaluate the infinite series $$\\displaystyle S=\\sum_{n=1}^{\\infty}\\frac{1}{(2n-1)(2n+1)}.$$",
    "answer": "$$\\boxed{\\dfrac{1}{2}}$$",
    "trap": "A tempting wrong answer is $\\boxed{1}$, obtained by mistaking $\\frac{1}{(2n-1)(2n+1)}$ for $\\frac{1}{2n-1}-\\frac{1}{2n+1}$ (forgetting the factor $\\tfrac12$). That over-counts every term by a factor of $2$; the correct gap carries a $\\tfrac12$, so the true sum is $\\tfrac12$, not $1$.",
    "solutions": [
      {
        "name": "Partial fractions and telescoping",
        "steps": [
          "Decompose: $\\dfrac{1}{(2n-1)(2n+1)}=\\dfrac{1}{2}\\left(\\dfrac{1}{2n-1}-\\dfrac{1}{2n+1}\\right)$, since the difference $\\frac{1}{2n-1}-\\frac{1}{2n+1}=\\frac{2}{(2n-1)(2n+1)}$.",
          "Partial sum to $N$ terms: $S_N=\\dfrac12\\left(\\dfrac11-\\dfrac13+\\dfrac13-\\dfrac15+\\cdots+\\dfrac{1}{2N-1}-\\dfrac{1}{2N+1}\\right)=\\dfrac12\\left(1-\\dfrac{1}{2N+1}\\right).$",
          "As $N\\to\\infty$, $\\dfrac{1}{2N+1}\\to 0$, so $S=\\dfrac12(1-0)=\\dfrac12$, giving $\\boxed{\\tfrac12}$."
        ]
      },
      {
        "name": "Limit of the telescoped tail",
        "steps": [
          "Write each term as a difference $a_n-a_{n+1}$ with $a_n=\\dfrac{1}{2(2n-1)}$; check $a_n-a_{n+1}=\\dfrac{1}{2(2n-1)}-\\dfrac{1}{2(2n+1)}=\\dfrac{1}{(2n-1)(2n+1)}$.",
          "Then $S_N=a_1-a_{N+1}=\\dfrac{1}{2}-\\dfrac{1}{2(2N+1)}$, and letting $N\\to\\infty$ kills the second piece, so $S=\\boxed{\\tfrac12}$."
        ]
      }
    ],
    "remark": "**Insight.** A product of two terms in arithmetic progression with common difference $d$ telescopes only after you factor out $\\tfrac{1}{d}$: here $d=2$, so the gap is $\\tfrac12\\!\\left(\\frac{1}{2n-1}-\\frac{1}{2n+1}\\right)$. **Never drop that $\\tfrac{1}{d}$** — it is exactly what halves the careless answer $1$ down to the true $\\tfrac12$. The whole interior collapses, leaving only the first head term."
  },
  {
    "theme": "convergence",
    "themeLabel": "Infinite GP & Telescoping Series",
    "title": "Three-Term Cascade",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "telescoping",
      "partial fractions",
      "cubic denominator",
      "exact sum"
    ],
    "statement": "Evaluate\n\\[\\sum_{n=1}^{\\infty}\\frac{1}{n(n+1)(n+2)}.\\]\nFirst explain why the series converges (its terms telescope), then compute the exact value.",
    "answer": "\\[\\boxed{\\dfrac{1}{4}}\\]",
    "trap": "Splitting into $\\frac{1/2}{n}-\\frac{1}{n+1}+\\frac{1/2}{n+2}$ and then summing the three pieces separately as if each converged. Each of $\\sum\\frac{1}{2n}$, $\\sum\\frac{1}{n+1}$, $\\sum\\frac{1}{2(n+2)}$ is a harmonic-type series and diverges, so writing the answer as a difference of three (infinite) numbers is meaningless. The decomposition is only legitimate when regrouped into a telescoping difference of two convergent blocks, $\\frac12\\big(\\frac{1}{n(n+1)}-\\frac{1}{(n+1)(n+2)}\\big)$.",
    "solutions": [
      {
        "name": "Difference-of-products telescoping",
        "steps": [
          "Convergence first: for $n\\ge1$, $0<\\frac{1}{n(n+1)(n+2)}<\\frac{1}{n^3}$, and $\\sum n^{-3}$ converges by the $p$-series test with $p=3>1$. So by comparison the series converges absolutely.",
          "Note the algebraic identity $\\frac{1}{n(n+1)(n+2)}=\\frac12\\left(\\frac{1}{n(n+1)}-\\frac{1}{(n+1)(n+2)}\\right)$, a difference of consecutive values of $g(n)=\\frac{1}{n(n+1)}$.",
          "The partial sum telescopes to $S_N=\\frac12\\left(\\frac{1}{1\\cdot2}-\\frac{1}{(N+1)(N+2)}\\right)$.",
          "Let $N\\to\\infty$: the tail $\\frac{1}{(N+1)(N+2)}\\to0$, giving $\\frac12\\cdot\\frac12=\\boxed{\\tfrac14}$."
        ]
      },
      {
        "name": "Single-fraction collapse (Pochhammer / hockey-stick)",
        "steps": [
          "Use the closed form of the partial sum directly: $\\sum_{n=1}^{N}\\frac{1}{n(n+1)(n+2)}=\\frac{N(N+3)}{4(N+1)(N+2)}$, provable by induction (base $N=1$ gives $\\frac16$, and the inductive step adds $\\frac{1}{(N+1)(N+2)(N+3)}$ and simplifies to the same form with $N\\!\\to\\!N+1$).",
          "This rational expression is positive, increasing, and bounded above by $\\frac14$, so the sequence of partial sums converges (monotone-bounded).",
          "As $N\\to\\infty$, $\\frac{N(N+3)}{4(N+1)(N+2)}=\\frac{N^2+3N}{4(N^2+3N+2)}\\to\\frac{1}{4}$.",
          "Hence the sum is $\\boxed{\\tfrac14}$."
        ]
      }
    ],
    "remark": "Insight: a partial-fraction split with divergent pieces is not wrong, but you may only manipulate it after pairing terms into convergent telescoping blocks. The general fact $\\sum_{n=1}^{\\infty}\\frac{1}{n(n+1)\\cdots(n+k)}=\\frac{1}{k\\cdot k!}$ specializes here ($k=2$) to $\\frac{1}{2\\cdot2}=\\frac14$, the higher-order analogue of the classic $\\sum\\frac{1}{n(n+1)}=1$."
  },
  {
    "theme": "convergence",
    "themeLabel": "Infinite GP & Telescoping Series",
    "title": "Arithmetic Rides the Geometric",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "arithmetico-geometric",
      "ratio of consecutive terms",
      "geometric-series differentiation",
      "exact sum"
    ],
    "statement": "Evaluate\n\\[\\sum_{n=1}^{\\infty}\\frac{n^{2}}{2^{\\,n}}.\\]\nConfirm convergence via the ratio of consecutive terms, then produce the closed value.",
    "answer": "\\[\\boxed{6}\\]",
    "trap": "Treating it as a plain geometric series and writing $\\frac{a}{1-r}=\\frac{1/2}{1-1/2}=1$, ignoring the $n^2$ factor entirely. The polynomial coefficient changes the sum; only the differentiation-of-geometric-series machinery (or the $\\frac{x(1+x)}{(1-x)^3}$ identity) gives the true value $6$.",
    "solutions": [
      {
        "name": "Differentiate the geometric series",
        "steps": [
          "Start from $\\sum_{n\\ge0}x^n=\\frac1{1-x}$ for $|x|<1$. Apply $x\\frac{d}{dx}$ twice (legitimate inside the radius) to get $\\sum_{n\\ge1}n^2x^n=\\frac{x(1+x)}{(1-x)^3}$.",
          "The ratio of consecutive terms gives $\\frac{a_{n+1}}{a_n}=\\frac{(n+1)^2}{2n^2}\\to\\frac12<1$, so $x=\\tfrac12$ is inside the radius and the substitution is valid.",
          "Plug $x=\\tfrac12$: $\\frac{\\frac12\\cdot\\frac32}{(\\frac12)^3}=\\frac{3/4}{1/8}=\\boxed{6}$."
        ]
      },
      {
        "name": "Recursive shift relation",
        "steps": [
          "Let $S=\\sum_{n\\ge1}\\frac{n^2}{2^n}$. Then $S-\\frac{S}{2}=\\sum_{n\\ge1}\\frac{n^2}{2^n}-\\sum_{n\\ge1}\\frac{n^2}{2^{n+1}}=\\sum_{n\\ge1}\\frac{n^2-(n-1)^2}{2^n}=\\sum_{n\\ge1}\\frac{2n-1}{2^n}$.",
          "Using $\\sum_{n\\ge1}\\frac{n}{2^n}=2$ and $\\sum_{n\\ge1}\\frac1{2^n}=1$, the right side is $2\\cdot2-1=3$, so $\\frac{S}{2}=3$.",
          "Therefore $S=\\boxed{6}$."
        ]
      }
    ],
    "remark": "Insight: an arithmetico-geometric series is geometric only in its decay, not its sum. The polynomial weight is captured by differentiating the geometric kernel — a one-line bridge between geometric series and finite-sum tricks."
  },
  {
    "theme": "convergence",
    "themeLabel": "Infinite GP & Telescoping Series",
    "title": "Where the Roots Telescope",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "telescoping",
      "logarithm",
      "infinite product",
      "ln2"
    ],
    "statement": "Evaluate\n\\[\\sum_{n=2}^{\\infty}\\ln\\!\\left(1-\\frac{1}{n^{2}}\\right).\\]\nJustify that the series converges before summing it, and note the sign of the answer.",
    "answer": "\\[\\boxed{-\\ln 2}\\]",
    "trap": "Using $\\ln(1+x)\\approx x$ to replace each term by $-\\frac{1}{n^2}$ and reporting the sum as $-\\big(\\frac{\\pi^2}{6}-1\\big)$. The approximation is fine for proving absolute convergence but is not exact; the true sum comes from telescoping the logarithm of the factored product $\\frac{(n-1)(n+1)}{n^2}$, giving $-\\ln2$, not $1-\\frac{\\pi^2}{6}$.",
    "solutions": [
      {
        "name": "Telescoping via logarithm of a product",
        "steps": [
          "Factor: $1-\\frac1{n^2}=\\frac{(n-1)(n+1)}{n^2}$, so $\\ln\\!\\left(1-\\frac1{n^2}\\right)=\\ln(n-1)+\\ln(n+1)-2\\ln n$, a second difference of $\\ln$.",
          "The partial sum from $2$ to $N$ telescopes to $\\ln1-\\ln2-\\ln N+\\ln(N+1)=-\\ln2+\\ln\\frac{N+1}{N}$.",
          "As $N\\to\\infty$, $\\ln\\frac{N+1}{N}\\to0$, leaving $\\boxed{-\\ln2}$."
        ]
      },
      {
        "name": "Infinite product then take logs",
        "steps": [
          "The partial product $\\prod_{n=2}^{N}\\frac{(n-1)(n+1)}{n^2}=\\frac{1}{2}\\cdot\\frac{N+1}{N}\\to\\frac12$ (a classic the product-type telescoping product).",
          "Convergence of the series of logs is equivalent to the product converging to a nonzero limit, which it does ($\\tfrac12$).",
          "Taking logs, $\\sum_{n=2}^\\infty\\ln\\!\\left(1-\\frac1{n^2}\\right)=\\ln\\tfrac12=\\boxed{-\\ln2}$."
        ]
      }
    ],
    "remark": "Insight: a sum of logs is the log of a product, and a product that telescopes hands you the answer for free. The $\\ln(1+x)\\approx x$ estimate proves convergence but quietly throws away the exact value — a recurring trade-off worth naming."
  },
  {
    "theme": "convergence",
    "themeLabel": "Infinite GP & Telescoping Series",
    "title": "Stride of Three",
    "difficulty": 4,
    "task": "Evaluate the infinite sum",
    "tags": [
      "telescoping",
      "partial fractions",
      "method of differences",
      "arithmetic progression"
    ],
    "statement": "The denominators below run in steps of $3$. Evaluate $$\\displaystyle S=\\sum_{n=1}^{\\infty}\\frac{1}{(3n-2)(3n+1)}=\\frac{1}{1\\cdot 4}+\\frac{1}{4\\cdot 7}+\\frac{1}{7\\cdot 10}+\\cdots.$$",
    "answer": "$$\\boxed{\\dfrac{1}{3}}$$",
    "trap": "A seductive wrong answer is $\\boxed{1}$, from writing the gap as $\\frac{1}{3n-2}-\\frac{1}{3n+1}$ and summing the head $\\tfrac11$. But $\\frac{1}{3n-2}-\\frac{1}{3n+1}=\\frac{3}{(3n-2)(3n+1)}$, so the real per-term gap carries a factor $\\tfrac13$; the true sum is $\\tfrac13$, not $1$.",
    "solutions": [
      {
        "name": "Telescoping after partial fractions",
        "steps": [
          "Since the two factors differ by $3$, $\\dfrac{1}{(3n-2)(3n+1)}=\\dfrac13\\left(\\dfrac{1}{3n-2}-\\dfrac{1}{3n+1}\\right).$",
          "Partial sum: $S_N=\\dfrac13\\left(\\dfrac11-\\dfrac14+\\dfrac14-\\dfrac17+\\cdots+\\dfrac{1}{3N-2}-\\dfrac{1}{3N+1}\\right)=\\dfrac13\\left(1-\\dfrac{1}{3N+1}\\right).$",
          "Let $N\\to\\infty$: the tail $\\dfrac{1}{3N+1}\\to0$, so $S=\\dfrac13(1-0)=\\boxed{\\tfrac13}.$"
        ]
      },
      {
        "name": "General step-$d$ telescoping formula",
        "steps": [
          "For $\\sum_{n=1}^{\\infty}\\dfrac{1}{(a+(n-1)d)(a+nd)}$ the term equals $\\dfrac1d\\left(\\dfrac{1}{a+(n-1)d}-\\dfrac{1}{a+nd}\\right)$, telescoping to $\\dfrac1d\\cdot\\dfrac1a$ in the limit.",
          "Here $a=1,\\ d=3$, so $S=\\dfrac{1}{d\\,a}=\\dfrac{1}{3\\cdot1}=\\boxed{\\tfrac13}.$"
        ]
      }
    ],
    "remark": "**Insight.** The factor $\\tfrac{1}{d}$ in front of the difference is the whole story for a step-$d$ chain: the interior cancels and you are left with $\\tfrac{1}{d}\\cdot\\tfrac{1}{a}$ where $a$ is the very first factor. Here that is $\\tfrac{1}{3}\\cdot\\tfrac{1}{1}=\\tfrac13$. **Forgetting the $\\tfrac{1}{d}$** is exactly the mis-cancellation that inflates the answer to $1$."
  },
  {
    "theme": "convergence",
    "themeLabel": "Infinite GP & Telescoping Series",
    "title": "Counting on the Halves",
    "difficulty": 4,
    "task": "Sum the arithmetico-geometric series",
    "tags": [
      "arithmetico-geometric series",
      "infinite GP",
      "shift subtraction",
      "common ratio"
    ],
    "statement": "Evaluate the arithmetico-geometric series $$\\displaystyle S=\\sum_{n=1}^{\\infty}\\frac{n}{2^{n}}=\\frac{1}{2}+\\frac{2}{4}+\\frac{3}{8}+\\frac{4}{16}+\\cdots.$$",
    "answer": "$$\\boxed{2}$$",
    "trap": "A tempting wrong answer is $\\boxed{4}$, from applying the plain GP formula $\\frac{a}{1-r}=\\frac{1/2}{1-1/2}=1$ to the wrong piece, or from mis-squaring $\\frac{1}{(1-r)^2}=\\frac{1}{(1/2)^2}=4$ while forgetting the front factor $r=\\tfrac12$. The correct AGP value is $r/(1-r)^2=\\tfrac{1/2}{1/4}=2$, not $4$.",
    "solutions": [
      {
        "name": "Shift-and-subtract (the $S-rS$ trick)",
        "steps": [
          "Write $S=\\sum_{n\\ge1} n\\,r^{n}$ with $r=\\tfrac12$. Then $rS=\\sum_{n\\ge1} n\\,r^{n+1}=\\sum_{m\\ge2}(m-1)r^{m}.$",
          "Subtract: $S-rS=\\sum_{n\\ge1} n r^n-\\sum_{m\\ge2}(m-1)r^m=r+\\sum_{n\\ge2}\\big(n-(n-1)\\big)r^n=\\sum_{n\\ge1} r^n=\\dfrac{r}{1-r}.$",
          "So $(1-r)S=\\dfrac{r}{1-r}$, giving $S=\\dfrac{r}{(1-r)^2}=\\dfrac{1/2}{(1/2)^2}=\\dfrac{1/2}{1/4}=\\boxed{2}.$"
        ]
      },
      {
        "name": "Sum of tail geometric series",
        "steps": [
          "Group by writing $\\dfrac{n}{2^n}$ as a sum of $n$ equal copies of $\\dfrac{1}{2^n}$, then sum columns: $S=\\sum_{k=1}^{\\infty}\\sum_{n=k}^{\\infty}\\dfrac{1}{2^n}.$",
          "The inner infinite GP is $\\sum_{n=k}^{\\infty}\\dfrac{1}{2^n}=\\dfrac{1/2^k}{1-1/2}=\\dfrac{1}{2^{k-1}}.$",
          "Hence $S=\\sum_{k=1}^{\\infty}\\dfrac{1}{2^{k-1}}=\\dfrac{1}{1-1/2}=2=\\boxed{2}.$"
        ]
      }
    ],
    "remark": "**Insight.** An arithmetico-geometric series is tamed by one move: multiply by the ratio $r$ and subtract, which **demotes the linear coefficient $n$ to a constant** and leaves a pure infinite GP. The clean closed form is $\\sum_{n\\ge1} n r^n=\\dfrac{r}{(1-r)^2}$; the lonely $r$ in the numerator is precisely what separates the right answer $2$ from the careless $4$."
  },
  {
    "theme": "convergence",
    "themeLabel": "Infinite GP & Telescoping Series",
    "title": "Squares That Cancel Themselves",
    "difficulty": 4,
    "task": "Evaluate the infinite sum",
    "tags": [
      "telescoping",
      "method of differences",
      "perfect-square denominators",
      "infinite series"
    ],
    "statement": "Evaluate $$\\displaystyle S=\\sum_{n=1}^{\\infty}\\frac{2n+1}{n^{2}\\,(n+1)^{2}}.$$",
    "answer": "$$\\boxed{1}$$",
    "trap": "A seductive wrong answer is $\\boxed{2}$, from splitting $\\frac{2n+1}{n^2(n+1)^2}$ as $\\frac{1}{n^2}+\\frac{1}{(n+1)^2}$ (wrong sign on the second piece) and then summing two telescoping-looking heads. The correct numerator $2n+1=(n+1)^2-n^2$ forces a $-$ sign, so the term is $\\frac{1}{n^2}-\\frac{1}{(n+1)^2}$ and the sum is $1$, not $2$.",
    "solutions": [
      {
        "name": "Recognize the difference of squares",
        "steps": [
          "Note $2n+1=(n+1)^2-n^2$. Hence $\\dfrac{2n+1}{n^2(n+1)^2}=\\dfrac{(n+1)^2-n^2}{n^2(n+1)^2}=\\dfrac{1}{n^2}-\\dfrac{1}{(n+1)^2}.$",
          "Partial sum telescopes: $S_N=\\left(\\dfrac{1}{1^2}-\\dfrac{1}{2^2}\\right)+\\left(\\dfrac{1}{2^2}-\\dfrac{1}{3^2}\\right)+\\cdots+\\left(\\dfrac{1}{N^2}-\\dfrac{1}{(N+1)^2}\\right)=1-\\dfrac{1}{(N+1)^2}.$",
          "Let $N\\to\\infty$: $\\dfrac{1}{(N+1)^2}\\to0$, so $S=1-0=\\boxed{1}.$"
        ]
      },
      {
        "name": "Telescoping with $a_n=1/n^2$",
        "steps": [
          "Set $a_n=\\dfrac{1}{n^2}$. Then $a_n-a_{n+1}=\\dfrac{1}{n^2}-\\dfrac{1}{(n+1)^2}=\\dfrac{(n+1)^2-n^2}{n^2(n+1)^2}=\\dfrac{2n+1}{n^2(n+1)^2}$, the given term.",
          "Therefore $S_N=a_1-a_{N+1}=1-\\dfrac{1}{(N+1)^2}$, and as $N\\to\\infty$ this tends to $\\boxed{1}.$"
        ]
      }
    ],
    "remark": "**Insight.** Whenever a numerator equals the **difference of the two squared factors** below it, the fraction is secretly a single telescoping gap $\\frac{1}{n^2}-\\frac{1}{(n+1)^2}$. Spotting $2n+1=(n+1)^2-n^2$ converts an intimidating quartic denominator into a one-line collapse. The trap of writing a $+$ instead of a $-$ between the two squares doubles the answer."
  },
  {
    "theme": "convergence",
    "themeLabel": "Infinite GP & Telescoping Series",
    "title": "Arctangents in Lockstep",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "telescoping",
      "arctangent addition",
      "inverse trig fusion",
      "exact sum"
    ],
    "statement": "Evaluate\n\\[\\sum_{n=1}^{\\infty}\\arctan\\!\\left(\\frac{1}{n^{2}+n+1}\\right).\\]\nThe summand tends to $0$; show convergence rigorously and then find the exact sum.",
    "answer": "\\[\\boxed{\\dfrac{\\pi}{4}}\\]",
    "trap": "Approximating $\\arctan(x)\\approx x$ for small argument and summing $\\sum\\frac{1}{n^2+n+1}\\approx 0.7981$ to estimate the total, then trying to report that estimate as the exact answer. The small-angle bound proves convergence (terms $\\sim 1/n^2$) but is not exact; since $\\arctan(x)<x$ for $x>0$ it strictly overshoots $\\frac\\pi4$. The exact value relies on the arctangent subtraction identity, which telescopes to $\\frac\\pi4$.",
    "solutions": [
      {
        "name": "Arctangent difference telescoping",
        "steps": [
          "Use $\\arctan(n+1)-\\arctan(n)=\\arctan\\!\\frac{(n+1)-n}{1+n(n+1)}=\\arctan\\!\\frac{1}{n^2+n+1}$, valid since the product $n(n+1)>0$ keeps the combined angle in the principal range.",
          "Hence the partial sum telescopes: $\\sum_{n=1}^{N}\\big(\\arctan(n+1)-\\arctan(n)\\big)=\\arctan(N+1)-\\arctan(1)$.",
          "As $N\\to\\infty$, $\\arctan(N+1)\\to\\frac\\pi2$, giving $\\frac\\pi2-\\frac\\pi4=\\boxed{\\frac\\pi4}$."
        ]
      },
      {
        "name": "Convergence by comparison, value by telescoping",
        "steps": [
          "For every $n\\ge 1$, $0<\\arctan\\!\\frac{1}{n^2+n+1}<\\frac{1}{n^2+n+1}<\\frac1{n^2}$, so the series converges absolutely by comparison with the $p$-series $p=2$.",
          "Knowing it converges, evaluate the telescoped partial sum $\\arctan(N+1)-\\arctan(1)$ from the difference identity.",
          "The limit is $\\frac\\pi2-\\frac\\pi4=\\boxed{\\frac\\pi4}$."
        ]
      }
    ],
    "remark": "Insight: the magic denominator $n^2+n+1=1+n(n+1)$ is engineered so the arctangent addition formula collapses each term into a clean difference. Spotting $1+(\\text{product})$ in an arctangent argument is the universal cue to telescope."
  },
  {
    "theme": "convergence",
    "themeLabel": "Infinite GP & Telescoping Series",
    "title": "The Arctangent Staircase",
    "difficulty": 5,
    "task": "Evaluate the arctangent sum",
    "tags": [
      "telescoping",
      "arctangent subtraction formula",
      "method of differences",
      "infinite series"
    ],
    "statement": "Evaluate $$\\displaystyle S=\\sum_{n=1}^{\\infty}\\arctan\\!\\left(\\frac{1}{n^{2}+n+1}\\right).$$",
    "answer": "$$\\boxed{\\dfrac{\\pi}{4}}$$",
    "trap": "A tempting wrong answer is $\\boxed{\\dfrac{\\pi}{2}}$, from telescoping to $\\lim_{N\\to\\infty}\\arctan(N+1)-\\arctan(1)$ but then writing $\\arctan(1)=0$ instead of $\\tfrac{\\pi}{4}$. The head term is $\\arctan 1=\\tfrac{\\pi}{4}$, so the true value is $\\tfrac{\\pi}{2}-\\tfrac{\\pi}{4}=\\tfrac{\\pi}{4}$, not $\\tfrac{\\pi}{2}$.",
    "solutions": [
      {
        "name": "Arctangent difference identity",
        "steps": [
          "Use $\\arctan x-\\arctan y=\\arctan\\!\\dfrac{x-y}{1+xy}$. With $x=n+1,\\ y=n$: $\\dfrac{x-y}{1+xy}=\\dfrac{1}{1+n(n+1)}=\\dfrac{1}{n^2+n+1}.$",
          "Hence $\\arctan\\!\\dfrac{1}{n^2+n+1}=\\arctan(n+1)-\\arctan(n)$ (the angles stay in $(-\\tfrac\\pi2,\\tfrac\\pi2)$, so the identity applies with no $\\pi$ correction).",
          "Telescope: $S_N=\\big(\\arctan2-\\arctan1\\big)+\\cdots+\\big(\\arctan(N+1)-\\arctan N\\big)=\\arctan(N+1)-\\arctan1.$",
          "As $N\\to\\infty$, $\\arctan(N+1)\\to\\tfrac\\pi2$, so $S=\\dfrac\\pi2-\\dfrac\\pi4=\\boxed{\\dfrac\\pi4}.$"
        ]
      },
      {
        "name": "Direct head-minus-tail evaluation",
        "steps": [
          "Define $b_n=\\arctan(n)$, so each term is $b_{n+1}-b_n$ by the computation above; the series is a difference series.",
          "Then $S_N=b_{N+1}-b_1=\\arctan(N+1)-\\arctan(1)=\\arctan(N+1)-\\dfrac{\\pi}{4}.$",
          "Taking $N\\to\\infty$ gives $\\dfrac{\\pi}{2}-\\dfrac{\\pi}{4}=\\boxed{\\dfrac{\\pi}{4}}.$"
        ]
      }
    ],
    "remark": "**Insight.** The denominator $n^2+n+1=1+n(n+1)$ is the fingerprint of the arctangent subtraction formula: it rewrites each term as the **single step** $\\arctan(n+1)-\\arctan(n)$ of a staircase climbing to $\\tfrac\\pi2$. The interior steps cancel; only the bottom step $\\arctan 1=\\tfrac\\pi4$ is subtracted off. **Mishandling that head term** (treating it as $0$) is what produces the false $\\tfrac\\pi2$."
  },
  {
    "theme": "inequalities",
    "themeLabel": "AM-GM-HM Inequalities",
    "title": "The Box That Wants To Be Square",
    "difficulty": 3,
    "task": "Minimise the expression",
    "tags": [
      "am-gm",
      "minimum",
      "equality-case"
    ],
    "statement": "For a real number $x>0$, find the least value of $f(x)=x+\\dfrac{9}{x}$, and state the value of $x$ at which it occurs.",
    "answer": "$\\boxed{f_{\\min}=6\\ \\text{at}\\ x=3}$",
    "trap": "A common reflex is to test the “roundest” input $x=1$, giving $f(1)=1+9=10$, and report $10$ as the minimum. But $x=1$ is not the AM–GM equality point: equality in $x+\\frac9x\\ge 2\\sqrt{9}$ needs $x=\\frac9x$, i.e. $x=3$, where $f=6<10$. Picking a symmetric-looking value instead of the equality value over-shoots the true minimum.",
    "solutions": [
      {
        "name": "Two-term AM–GM",
        "steps": [
          "The two positive quantities $x$ and $\\dfrac9x$ have product $x\\cdot\\dfrac9x=9$, a constant.",
          "By AM–GM, $\\dfrac{x+\\frac9x}{2}\\ge\\sqrt{x\\cdot\\frac9x}=\\sqrt9=3$, so $x+\\dfrac9x\\ge 6$.",
          "Equality holds iff the two terms are equal: $x=\\dfrac9x\\Rightarrow x^2=9\\Rightarrow x=3$ (taking $x>0$).",
          "Hence the minimum is $\\boxed{f_{\\min}=6\\ \\text{at}\\ x=3}$."
        ]
      },
      {
        "name": "Complete-the-square check",
        "steps": [
          "Write $f(x)=\\left(\\sqrt{x}-\\dfrac{3}{\\sqrt{x}}\\right)^{2}+6$ for $x>0$.",
          "The squared term is $\\ge 0$, so $f(x)\\ge 6$ for every $x>0$.",
          "It equals $0$ exactly when $\\sqrt{x}=\\dfrac{3}{\\sqrt{x}}$, i.e. $x=3$.",
          "Therefore $\\boxed{f_{\\min}=6\\ \\text{at}\\ x=3}$."
        ]
      }
    ],
    "remark": "**Insight.** AM–GM turns a sum with a *fixed product* into a guaranteed floor, but the floor is only **achieved at the equality point**, where the terms coincide. The seductive symmetric guess $x=1$ has no special status here; the geometry of the problem locks the optimum at $x=\\sqrt{9}=3$. Always pair the bound with its equality condition before declaring a minimum."
  },
  {
    "theme": "inequalities",
    "themeLabel": "AM-GM-HM Inequalities",
    "title": "The Widest Rectangle On A Fixed Fence",
    "difficulty": 3,
    "task": "Maximise the product",
    "tags": [
      "am-gm",
      "maximum",
      "fixed-sum"
    ],
    "statement": "Two positive reals $a,b$ satisfy $a+b=12$. Determine the greatest possible value of the product $ab$ and the pair $(a,b)$ that attains it.",
    "answer": "$\\boxed{(ab)_{\\max}=36\\ \\text{at}\\ a=b=6}$",
    "trap": "Reading “maximise $ab$” as “make them as unequal as possible” tempts one toward an extreme like $a=11,b=1$ (product $11$) or even the boundary $a\\to12,b\\to0$ (product $\\to0$). That inverts the inequality: with a *fixed sum*, AM–GM forces the product up to a ceiling at equality, not at the extremes. Spreading the numbers apart shrinks $ab$, it does not grow it.",
    "solutions": [
      {
        "name": "AM–GM on $a,b$",
        "steps": [
          "AM–GM gives $\\dfrac{a+b}{2}\\ge\\sqrt{ab}$, i.e. $\\sqrt{ab}\\le\\dfrac{12}{2}=6$.",
          "Squaring (both sides positive): $ab\\le 36$.",
          "Equality holds iff $a=b$; with $a+b=12$ this forces $a=b=6$.",
          "Hence the maximum product is $\\boxed{(ab)_{\\max}=36\\ \\text{at}\\ a=b=6}$."
        ]
      },
      {
        "name": "Single-variable reduction",
        "steps": [
          "Put $b=12-a$ with $0<a<12$, so $ab=a(12-a)=12a-a^2$.",
          "Complete the square: $ab=36-(a-6)^2\\le 36$.",
          "The maximum $36$ occurs when $(a-6)^2=0$, i.e. $a=6$, giving $b=6$.",
          "Therefore $\\boxed{(ab)_{\\max}=36\\ \\text{at}\\ a=b=6}$."
        ]
      }
    ],
    "remark": "**Insight.** Fixed-sum, vary-product is the mirror image of Problem 1’s fixed-product, vary-sum. In **both** the optimum sits at equality, where the variables coincide — but here AM–GM provides a **ceiling** (a maximum), not a floor. Recognising which quantity is *pinned* (the sum) tells you instantly which way the bound points."
  },
  {
    "theme": "inequalities",
    "themeLabel": "AM-GM-HM Inequalities",
    "title": "A Million Reciprocal Roots",
    "difficulty": 4,
    "task": "Determine",
    "tags": [
      "telescoping",
      "sandwich",
      "bounding-a-sum",
      "integer-part",
      "sharp"
    ],
    "statement": "Let $S=\\displaystyle\\sum_{k=1}^{10^{6}}\\frac{1}{\\sqrt{k}}$. Determine $\\lfloor S\\rfloor$, the integer part of $S$.",
    "answer": "\\[\\boxed{1998}\\]",
    "trap": "The seductive move is to replace the sum by $\\int_1^{10^6}x^{-1/2}\\,dx=2(10^3-1)=1998$ and declare $\\lfloor S\\rfloor=1998$. The numerical coincidence is real but the logic is empty: a bare integral estimate proves nothing about which integers straddle $S$. The Riemann sum overshoots the integral (the integrand is decreasing), so $S$ exceeds $1998$, and without an upper fence you cannot rule out $S\\ge 1999$. The honest route is to pin $S$ strictly between two consecutive integers with telescoping bounds whose total width is below $1$.",
    "solutions": [
      {
        "name": "Telescoping sandwich",
        "steps": [
          "Rationalising, $\\dfrac{2}{\\sqrt{k+1}+\\sqrt{k}}=2(\\sqrt{k+1}-\\sqrt{k})$ and $\\dfrac{2}{\\sqrt{k}+\\sqrt{k-1}}=2(\\sqrt{k}-\\sqrt{k-1})$. Since $\\sqrt{k+1}+\\sqrt{k}>2\\sqrt{k}>\\sqrt{k}+\\sqrt{k-1}$, we get $2(\\sqrt{k+1}-\\sqrt{k})<\\dfrac1{\\sqrt{k}}<2(\\sqrt{k}-\\sqrt{k-1})$, the right half valid for $k\\ge2$.",
          "Summing the left inequality over $k=1,\\dots,N$ telescopes: $S>2(\\sqrt{N+1}-1)$. Summing the right inequality over $k=2,\\dots,N$ telescopes to $2(\\sqrt{N}-1)$; adding the omitted $k=1$ term ($=1$) gives $S<1+2(\\sqrt{N}-1)=2\\sqrt{N}-1$.",
          "With $N=10^6$: lower bound $2(\\sqrt{1000001}-1)=1998.00099\\ldots>1998$, upper bound $2\\cdot1000-1=1999$, and $S<1999$ is strict because the right inequality is strict for every $k\\ge2$.",
          "Hence $1998<S<1999$, so $\\lfloor S\\rfloor=\\boxed{1998}$."
        ]
      },
      {
        "name": "Integral comparison made rigorous",
        "steps": [
          "Because $x^{-1/2}$ is strictly decreasing, for each $k$ we have $\\displaystyle\\int_k^{k+1}x^{-1/2}\\,dx<\\frac1{\\sqrt{k}}<\\int_{k-1}^{k}x^{-1/2}\\,dx$ (the right comparison for $k\\ge2$).",
          "Summing the left over $k=1,\\dots,N$ gives $S>\\int_1^{N+1}x^{-1/2}\\,dx=2\\sqrt{N+1}-2$. Summing the right over $k=2,\\dots,N$ and adding the $k=1$ term gives $S<1+\\int_1^{N}x^{-1/2}\\,dx=2\\sqrt{N}-1$.",
          "For $N=10^6$ this reads $1998.00099\\ldots<S<1999$, with both inequalities strict.",
          "Therefore $\\lfloor S\\rfloor=\\boxed{1998}$."
        ]
      }
    ],
    "remark": "Insight: writing $\\frac1{\\sqrt k}=\\frac{2}{\\sqrt k+\\sqrt k}$ and nudging one $\\sqrt k$ to $\\sqrt{k\\pm1}$ builds a telescoping fence around the sum. Its total width here is $\\bigl(2\\sqrt N-1\\bigr)-\\bigl(2\\sqrt{N+1}-2\\bigr)=1-2(\\sqrt{N+1}-\\sqrt N)<1$, which is exactly why two consecutive integers can trap $S$. The actual value is $S=1998.5401\\ldots$, comfortably inside the fence; the lone integral estimate $1998$ matches the floor only by luck, not by proof."
  },
  {
    "theme": "inequalities",
    "themeLabel": "AM-GM-HM Inequalities",
    "title": "Newton's Reciprocal March",
    "difficulty": 4,
    "task": "Determine",
    "tags": [
      "recurrence",
      "single-term-bound",
      "telescoping",
      "floor",
      "sharp"
    ],
    "statement": "Define a sequence by $x_1=1$ and $x_{n+1}=x_n+\\dfrac{1}{x_n}$ for $n\\ge1$. Determine $\\lfloor x_{1000}\\rfloor$.",
    "answer": "\\[\\boxed{44}\\]",
    "trap": "Estimating $x_n\\approx\\sqrt{2n}$ and reading off $\\sqrt{2000}\\approx44.72$ to claim $\\lfloor x_{1000}\\rfloor=44$ is hand-waving: the correction term could in principle push $x_{1000}$ past $45$. One must bound $x_{1000}^2$ rigorously between two explicit values both lying in $[44^2,45^2)=[1936,2025)$, not rely on the leading asymptotic.",
    "solutions": [
      {
        "name": "Square the recurrence and telescope",
        "steps": [
          "Square the recurrence: $x_{n+1}^2=x_n^2+2+\\dfrac1{x_n^2}$. Summing from $1$ to $n-1$ telescopes to $x_n^2=x_1^2+2(n-1)+\\sum_{k=1}^{n-1}\\dfrac1{x_k^2}=2n-1+\\sum_{k=1}^{n-1}\\dfrac1{x_k^2}$.",
          "Lower bound: every term $\\dfrac1{x_k^2}>0$, so $x_n^2>2n-1$. In particular $x_k^2\\ge 2k-1$ for all $k$ (with equality only at $k=1$), which we now feed back in.",
          "Upper bound: from $x_k^2\\ge 2k-1$ we get $\\dfrac1{x_k^2}\\le\\dfrac1{2k-1}$, hence $\\sum_{k=1}^{n-1}\\dfrac1{x_k^2}\\le\\sum_{k=1}^{n-1}\\dfrac1{2k-1}$. Comparing $\\dfrac1{2k-1}$ with the integral $\\int$, one has $\\sum_{k=1}^{n-1}\\dfrac1{2k-1}<1+\\tfrac12\\ln n$.",
          "For $n=1000$: $x_{1000}^2>1999$, and $x_{1000}^2<1999+\\bigl(1+\\tfrac12\\ln 1000\\bigr)<1999+4.46=2003.46$. So $1999<x_{1000}^2<2003.46$.",
          "Taking square roots: $44.71<\\sqrt{1999}<x_{1000}<\\sqrt{2003.46}<44.76<45$, hence $\\lfloor x_{1000}\\rfloor=\\boxed{44}$."
        ]
      },
      {
        "name": "Crude pairing bound on the odd-reciprocal sum",
        "steps": [
          "As before, $x_{1000}^2=1999+\\sum_{k=1}^{999}\\dfrac1{x_k^2}$ and $\\dfrac1{x_k^2}\\le\\dfrac1{2k-1}$, so it suffices to bound $T=\\sum_{k=1}^{999}\\dfrac1{2k-1}$ from above by something $<26$ (so that $x_{1000}^2<2025$).",
          "Pair each odd-reciprocal with a neighbouring even one: for $k\\ge2$, $\\dfrac1{2k-1}\\le\\dfrac1{2k-2}=\\dfrac12\\cdot\\dfrac1{k-1}$. The $k=1$ term is just $1$. Summing, $T\\le 1+\\tfrac12\\sum_{k=2}^{999}\\dfrac1{k-1}=1+\\tfrac12\\sum_{j=1}^{998}\\dfrac1{j}=1+\\tfrac12 H_{998}$.",
          "Using $H_{998}<1+\\ln 998<8.0$ gives $T<1+\\tfrac12(8.0)=5.0$, so $x_{1000}^2<1999+5=2004<2025=45^2$.",
          "Together with $x_{1000}^2>1999>1936=44^2$, both bounds lie strictly in $[44^2,45^2)$, so $44<x_{1000}<45$ and $\\lfloor x_{1000}\\rfloor=\\boxed{44}$."
        ]
      }
    ],
    "remark": "Insight: squaring converts an unmanageable recurrence into an almost-arithmetic one, $x_n^2\\approx 2n$, and the leftover reciprocal sum $\\sum 1/x_k^2$ is only $\\approx\\tfrac12\\ln n$ in size — just small enough that $x_{1000}^2\\approx 2003$ never climbs to $2025=45^2$. The naive $\\sqrt{2000}$ guess lands on the right floor only by luck; the proof needs an honest two-sided envelope. A common slip is to bound the odd-reciprocal sum by $\\tfrac12+\\tfrac12 H_n$, which is actually too small to be an upper bound; the correct cheap bound is $\\sum_{k=1}^{n}\\tfrac1{2k-1}\\le 1+\\tfrac12 H_{n-1}$ via pairing."
  },
  {
    "theme": "inequalities",
    "themeLabel": "AM-GM-HM Inequalities",
    "title": "Nine Is The Floor For Three",
    "difficulty": 4,
    "task": "Prove a sharp bound",
    "tags": [
      "am-gm-hm",
      "reciprocal-sum",
      "equality-case"
    ],
    "statement": "Let $a,b,c$ be positive reals. Prove that $(a+b+c)\\left(\\dfrac1a+\\dfrac1b+\\dfrac1c\\right)\\ge 9$, determine when equality holds, and hence find the minimum value of the left side.",
    "answer": "$\\boxed{(a+b+c)\\!\\left(\\tfrac1a+\\tfrac1b+\\tfrac1c\\right)\\ge 9,\\ =9\\ \\text{iff}\\ a=b=c}$",
    "trap": "Expanding and bounding term-by-term carelessly — e.g. claiming each cross term $\\frac ab+\\frac ba\\ge 2$ but then *miscounting* the constant $3$ from the diagonal — some report a floor of $6$. A floor of $6$ is impossible: at $a=b=c$ the product equals $3\\cdot3=9$ exactly, so any claimed minimum below $9$ is already contradicted by a single test point. The diagonal terms ($\\frac aa=1$, three of them) must be counted.",
    "solutions": [
      {
        "name": "AM–HM on three numbers",
        "steps": [
          "The AM–HM inequality for $a,b,c>0$ states $\\dfrac{a+b+c}{3}\\ge\\dfrac{3}{\\frac1a+\\frac1b+\\frac1c}$.",
          "Cross-multiplying (all quantities positive) gives $(a+b+c)\\left(\\dfrac1a+\\dfrac1b+\\dfrac1c\\right)\\ge 9$.",
          "Equality in AM–HM holds iff $a=b=c$, and then the product is $3a\\cdot\\dfrac3a=9$.",
          "Thus the minimum is $\\boxed{(a+b+c)\\!\\left(\\tfrac1a+\\tfrac1b+\\tfrac1c\\right)\\ge 9,\\ =9\\ \\text{iff}\\ a=b=c}$."
        ]
      },
      {
        "name": "Pairwise AM–GM after expansion",
        "steps": [
          "Expand: $(a+b+c)\\!\\left(\\tfrac1a+\\tfrac1b+\\tfrac1c\\right)=3+\\left(\\tfrac ab+\\tfrac ba\\right)+\\left(\\tfrac bc+\\tfrac cb\\right)+\\left(\\tfrac ca+\\tfrac ac\\right)$.",
          "For each pair AM–GM gives $\\tfrac xy+\\tfrac yx\\ge 2\\sqrt{\\tfrac xy\\cdot\\tfrac yx}=2$.",
          "Summing the three pairs: the bracket is $\\ge 6$, so the whole expression is $\\ge 3+6=9$.",
          "Each pair hits $2$ iff its two entries are equal, so all three pairs are tight iff $a=b=c$; then the value is $9$. Hence $\\boxed{(a+b+c)\\!\\left(\\tfrac1a+\\tfrac1b+\\tfrac1c\\right)\\ge 9,\\ =9\\ \\text{iff}\\ a=b=c}$."
        ]
      }
    ],
    "remark": "**Insight.** This is the AM–HM inequality in disguise: $(a+b+c)$ and $\\big(\\tfrac1a+\\tfrac1b+\\tfrac1c\\big)$ are $3\\,\\mathrm{AM}$ and $3/\\mathrm{HM}$, so their product is $9\\cdot\\tfrac{\\mathrm{AM}}{\\mathrm{HM}}\\ge 9$. The expansion route is *equivalent* but must honour the **three diagonal $1$’s** — the usual source of the bogus “$6$.”"
  },
  {
    "theme": "inequalities",
    "themeLabel": "AM-GM-HM Inequalities",
    "title": "Reciprocals Under A Sum Budget",
    "difficulty": 4,
    "task": "Find the minimum",
    "tags": [
      "am-hm",
      "constrained",
      "equality-case"
    ],
    "statement": "Positive reals $a,b,c$ satisfy $a+b+c=3$. Find the least possible value of $\\dfrac1a+\\dfrac1b+\\dfrac1c$ and the values of $a,b,c$ that achieve it.",
    "answer": "$\\boxed{\\left(\\tfrac1a+\\tfrac1b+\\tfrac1c\\right)_{\\min}=3\\ \\text{at}\\ a=b=c=1}$",
    "trap": "Since reciprocals blow up near $0$, one might hunt for the minimum at a “balanced-looking” boundary or push one variable large (say $a=2.9$) to shrink $\\frac1a$ — but then $b+c=0.1$ forces $\\frac1b+\\frac1c$ enormous, so the sum *increases*. The minimum of a reciprocal-sum under a fixed ordinary sum is interior, at full equality, not at any skewed configuration.",
    "solutions": [
      {
        "name": "AM–HM with the constraint",
        "steps": [
          "AM–HM gives $\\dfrac{a+b+c}{3}\\ge\\dfrac{3}{\\frac1a+\\frac1b+\\frac1c}$.",
          "Insert $a+b+c=3$, so the left side is $1$: $1\\ge\\dfrac{3}{\\frac1a+\\frac1b+\\frac1c}$, hence $\\dfrac1a+\\dfrac1b+\\dfrac1c\\ge 3$.",
          "Equality in AM–HM holds iff $a=b=c$; with sum $3$ that means $a=b=c=1$, giving the value $3$.",
          "Therefore $\\boxed{\\left(\\tfrac1a+\\tfrac1b+\\tfrac1c\\right)_{\\min}=3\\ \\text{at}\\ a=b=c=1}$."
        ]
      },
      {
        "name": "Via the $\\ge 9$ product bound",
        "steps": [
          "From $(a+b+c)\\!\\left(\\tfrac1a+\\tfrac1b+\\tfrac1c\\right)\\ge 9$ (AM–HM cross-multiplied), set $a+b+c=3$.",
          "Then $3\\left(\\tfrac1a+\\tfrac1b+\\tfrac1c\\right)\\ge 9$, so $\\tfrac1a+\\tfrac1b+\\tfrac1c\\ge 3$.",
          "Equality needs $a=b=c$, i.e. $a=b=c=1$.",
          "Hence $\\boxed{\\left(\\tfrac1a+\\tfrac1b+\\tfrac1c\\right)_{\\min}=3\\ \\text{at}\\ a=b=c=1}$."
        ]
      }
    ],
    "remark": "**Insight.** The harmonic mean is *maximised* (so its reciprocal-sum $=3/\\mathrm{HM}$ is *minimised*) exactly when all entries match the arithmetic mean. Fixing $a+b+c=3$ pins $\\mathrm{AM}=1$; AM–HM then forbids $\\mathrm{HM}$ from exceeding $1$, and the floor $3$ is the equality shadow of $a=b=c=1$."
  },
  {
    "theme": "inequalities",
    "themeLabel": "AM-GM-HM Inequalities",
    "title": "Six Symmetric Terms On A Unit Product",
    "difficulty": 5,
    "task": "Minimise a symmetric sum",
    "tags": [
      "am-gm",
      "product-constraint",
      "symmetric"
    ],
    "statement": "Let $a,b,c>0$ with $abc=1$. Find the minimum value of $S=a+b+c+ab+bc+ca$ and the point where it is attained.",
    "answer": "$\\boxed{S_{\\min}=6\\ \\text{at}\\ a=b=c=1}$",
    "trap": "It is tempting to minimise the two groups *separately at different points*: drive $a+b+c$ down while letting $ab+bc+ca$ wander. But $abc=1$ couples them, and AM–GM gives $a+b+c\\ge3$ and $ab+bc+ca\\ge3$ with the **same** equality point $a=b=c=1$. Claiming a total below $6$ ignores that both floors are reached simultaneously — you cannot beat $3+3$.",
    "solutions": [
      {
        "name": "Two AM–GM bounds, common equality",
        "steps": [
          "By AM–GM, $a+b+c\\ge 3\\sqrt[3]{abc}=3\\sqrt[3]{1}=3$.",
          "Again by AM–GM on the three products, $ab+bc+ca\\ge 3\\sqrt[3]{(ab)(bc)(ca)}=3\\sqrt[3]{(abc)^2}=3$.",
          "Adding, $S=(a+b+c)+(ab+bc+ca)\\ge 3+3=6$.",
          "Both inequalities are tight iff $a=b=c$; with $abc=1$ that is $a=b=c=1$, where $S=6$. Hence $\\boxed{S_{\\min}=6\\ \\text{at}\\ a=b=c=1}$."
        ]
      },
      {
        "name": "Single AM–GM on all six terms",
        "steps": [
          "Apply AM–GM to the six positive terms $a,b,c,ab,bc,ca$ at once: $\\dfrac{S}{6}\\ge\\sqrt[6]{a\\cdot b\\cdot c\\cdot ab\\cdot bc\\cdot ca}$.",
          "The radicand is $a^{3}b^{3}c^{3}=(abc)^3=1$, so the sixth root is $1$ and $S\\ge 6$.",
          "Equality of all six terms forces $a=b=c=ab=\\dots$, which with $abc=1$ gives $a=b=c=1$.",
          "Therefore $\\boxed{S_{\\min}=6\\ \\text{at}\\ a=b=c=1}$."
        ]
      }
    ],
    "remark": "**Insight.** Two routes, one answer: bounding each elementary symmetric block by AM–GM, or hitting all six terms in a single AM–GM whose product telescopes to $(abc)^3=1$. The deeper lesson is that under $abc=1$ the **equality points coincide**, so the separate floors add honestly — a coupling you must verify before summing bounds."
  },
  {
    "theme": "inequalities",
    "themeLabel": "AM-GM-HM Inequalities",
    "title": "The Cyclic Quotient Carousel",
    "difficulty": 5,
    "task": "Prove a cyclic bound",
    "tags": [
      "am-gm",
      "cyclic",
      "equality-case"
    ],
    "statement": "For positive reals $a,b,c$, prove that $\\dfrac ab+\\dfrac bc+\\dfrac ca\\ge 3$, state the equality condition, and give the minimum value.",
    "answer": "$\\boxed{\\dfrac ab+\\dfrac bc+\\dfrac ca\\ge 3,\\ =3\\ \\text{iff}\\ a=b=c}$",
    "trap": "Because the expression is *cyclic but not symmetric*, a tempting false move is to pair it with $\\frac ba+\\frac cb+\\frac ac$ and conclude the original alone is $\\ge 3$ only after halving — mixing the two distinct cyclic sums. Each cyclic sum is independently $\\ge3$ by AM–GM on its own three terms; importing the reverse sum is unnecessary and its careless use can flip the bound’s sharpness.",
    "solutions": [
      {
        "name": "Three-term AM–GM",
        "steps": [
          "The three positive terms $\\dfrac ab,\\dfrac bc,\\dfrac ca$ have product $\\dfrac ab\\cdot\\dfrac bc\\cdot\\dfrac ca=1$.",
          "By AM–GM, $\\dfrac{\\frac ab+\\frac bc+\\frac ca}{3}\\ge\\sqrt[3]{\\dfrac ab\\cdot\\dfrac bc\\cdot\\dfrac ca}=\\sqrt[3]{1}=1$.",
          "Hence $\\dfrac ab+\\dfrac bc+\\dfrac ca\\ge 3$, with equality iff $\\dfrac ab=\\dfrac bc=\\dfrac ca$, i.e. $a=b=c$.",
          "Thus $\\boxed{\\dfrac ab+\\dfrac bc+\\dfrac ca\\ge 3,\\ =3\\ \\text{iff}\\ a=b=c}$."
        ]
      },
      {
        "name": "Relabel to unit product",
        "steps": [
          "Set $x=\\dfrac ab,\\ y=\\dfrac bc,\\ z=\\dfrac ca$; then $x,y,z>0$ and $xyz=1$.",
          "AM–GM gives $x+y+z\\ge 3\\sqrt[3]{xyz}=3$.",
          "Equality requires $x=y=z=1$, i.e. $a=b=c$.",
          "Therefore $\\boxed{\\dfrac ab+\\dfrac bc+\\dfrac ca\\ge 3,\\ =3\\ \\text{iff}\\ a=b=c}$."
        ]
      }
    ],
    "remark": "**Insight.** The magic is that the three quotients **multiply to $1$**, so AM–GM’s geometric mean is exactly $1$ and the floor is $3$ for free. No need to summon the reverse cyclic sum; the single cyclic triple already carries a unit product, which is the whole engine."
  },
  {
    "theme": "inequalities",
    "themeLabel": "AM-GM-HM Inequalities",
    "title": "Four Slices Of A Fixed Budget",
    "difficulty": 5,
    "task": "Maximise an n-term product",
    "tags": [
      "am-gm",
      "fixed-sum",
      "n-variables"
    ],
    "statement": "Let $x_1,x_2,x_3,x_4$ be positive reals with $x_1+x_2+x_3+x_4=4$. Find the maximum value of the product $x_1x_2x_3x_4$ and the point at which it is attained.",
    "answer": "$\\boxed{(x_1x_2x_3x_4)_{\\max}=1\\ \\text{at}\\ x_1=x_2=x_3=x_4=1}$",
    "trap": "Treating it like a two-variable fence and “balancing in pairs” — e.g. $2,2,\\varepsilon,\\,$something — or pushing one slice large to “dominate” the product drives the product toward $0$, since any slice near $0$ kills it. With a fixed sum, the $n$-term product is maximised only when **all** $n$ slices are equal, not when a few are large.",
    "solutions": [
      {
        "name": "Four-term AM–GM",
        "steps": [
          "AM–GM for four positive numbers: $\\dfrac{x_1+x_2+x_3+x_4}{4}\\ge\\sqrt[4]{x_1x_2x_3x_4}$.",
          "The left side is $\\dfrac44=1$, so $\\sqrt[4]{x_1x_2x_3x_4}\\le 1$, hence $x_1x_2x_3x_4\\le 1$.",
          "Equality holds iff $x_1=x_2=x_3=x_4$; with sum $4$ that gives each equal to $1$.",
          "Therefore $\\boxed{(x_1x_2x_3x_4)_{\\max}=1\\ \\text{at}\\ x_1=x_2=x_3=x_4=1}$."
        ]
      },
      {
        "name": "Smoothing / equalisation argument",
        "steps": [
          "If two slices differ, say $x_i\\ne x_j$, replace both by their average $m=\\tfrac{x_i+x_j}{2}$; the sum is unchanged.",
          "Since $m^2=\\left(\\tfrac{x_i+x_j}{2}\\right)^2>x_ix_j$ (AM–GM, strict when $x_i\\ne x_j$), the product strictly increases.",
          "So any unequal configuration can be improved; the maximum forces all slices equal, i.e. each $=1$, product $=1^4=1$.",
          "Hence $\\boxed{(x_1x_2x_3x_4)_{\\max}=1\\ \\text{at}\\ x_1=x_2=x_3=x_4=1}$."
        ]
      }
    ],
    "remark": "**Insight.** AM–GM scales to $n$ variables with no loss: a *fixed sum* caps the product at $\\big(\\text{sum}/n\\big)^n$, attained only at full equality. The **smoothing** proof is the conceptual heart — every inequality between any two unequal slices is an opportunity to push the product **up**, so the optimum must be perfectly level."
  },
  {
    "theme": "inequalities",
    "themeLabel": "AM-GM-HM Inequalities",
    "title": "A Product Of Inflated Reciprocals",
    "difficulty": 5,
    "task": "Minimise a triple product",
    "tags": [
      "am-gm",
      "constrained",
      "reciprocal"
    ],
    "statement": "Let $a,b,c>0$ with $a+b+c=1$. Find the minimum value of $\\left(1+\\dfrac1a\\right)\\left(1+\\dfrac1b\\right)\\left(1+\\dfrac1c\\right)$ and the point of equality.",
    "answer": "$\\boxed{\\left(1+\\tfrac1a\\right)\\left(1+\\tfrac1b\\right)\\left(1+\\tfrac1c\\right)_{\\min}=64\\ \\text{at}\\ a=b=c=\\tfrac13}$",
    "trap": "Applying AM–GM factor-by-factor as $1+\\tfrac1a\\ge\\dfrac{2}{\\sqrt a}$ gives the product $\\ge\\dfrac{8}{\\sqrt{abc}}\\ge 8\\cdot 3\\sqrt3=24\\sqrt3\\approx41.57$. That bound is real but **not sharp**: its two AM–GM steps reach equality at *different* points ($a=1$ versus $a=\\tfrac13$), so $24\\sqrt3$ is never attained and is not the minimum. The honest minimum is $64$, larger than the loose $41.57$.",
    "solutions": [
      {
        "name": "Expand and bound each block",
        "steps": [
          "Expand the product: $\\displaystyle\\prod\\Big(1+\\tfrac1a\\Big)=1+\\Big(\\tfrac1a+\\tfrac1b+\\tfrac1c\\Big)+\\Big(\\tfrac1{ab}+\\tfrac1{bc}+\\tfrac1{ca}\\Big)+\\tfrac1{abc}$.",
          "Using $a+b+c=1$, the middle block collapses: $\\tfrac1{ab}+\\tfrac1{bc}+\\tfrac1{ca}=\\dfrac{a+b+c}{abc}=\\dfrac{1}{abc}$, equal to the last term. So the product $=1+\\Big(\\tfrac1a+\\tfrac1b+\\tfrac1c\\Big)+\\dfrac{2}{abc}$.",
          "By AM–HM, $\\tfrac1a+\\tfrac1b+\\tfrac1c\\ge\\dfrac{9}{a+b+c}=9$; by AM–GM, $abc\\le\\big(\\tfrac{a+b+c}{3}\\big)^3=\\tfrac1{27}$, so $\\dfrac{2}{abc}\\ge 54$. Both bounds are tight at $a=b=c=\\tfrac13$.",
          "Adding, the product $\\ge 1+9+54=64$, attained at $a=b=c=\\tfrac13$. Hence $\\boxed{\\left(1+\\tfrac1a\\right)\\left(1+\\tfrac1b\\right)\\left(1+\\tfrac1c\\right)_{\\min}=64\\ \\text{at}\\ a=b=c=\\tfrac13}$."
        ]
      },
      {
        "name": "AM–GM on each numerator with a shared equality point",
        "steps": [
          "Rewrite $1+\\dfrac1a=\\dfrac{a+1}{a}$, and since $1=a+b+c$, the numerator $a+1=2a+b+c$.",
          "By AM–GM on the four positive parts $a,a,b,c$: $2a+b+c=a+a+b+c\\ge 4\\sqrt[4]{a^2bc}$.",
          "Multiply the three factors: $\\displaystyle\\prod\\dfrac{2a+b+c}{a}\\ge\\dfrac{4^3\\sqrt[4]{a^2bc}\\,\\sqrt[4]{ab^2c}\\,\\sqrt[4]{abc^2}}{abc}=\\dfrac{64\\,\\sqrt[4]{a^4b^4c^4}}{abc}=\\dfrac{64\\,abc}{abc}=64$.",
          "Every AM–GM step is tight iff $a=b=c$, i.e. $a=b=c=\\tfrac13$, where the value is $4^3=64$. Therefore $\\boxed{\\left(1+\\tfrac1a\\right)\\left(1+\\tfrac1b\\right)\\left(1+\\tfrac1c\\right)_{\\min}=64\\ \\text{at}\\ a=b=c=\\tfrac13}$."
        ]
      }
    ],
    "remark": "**Insight.** The decisive trick is $1+\\tfrac1a=\\dfrac{2a+b+c}{a}$, splitting each numerator into **four** positive parts whose AM–GM equality point is the *same* $a=b=c$ for all three factors. That shared equality point is exactly what the naive $\\dfrac{2}{\\sqrt a}$ bound destroys — giving a loose, unattainable $24\\sqrt3$. Sharpness demands every AM–GM step bottom out together."
  },
  {
    "theme": "misc",
    "themeLabel": "Greatest Term, Integer Part & Estimation",
    "title": "The Twelfth Giant",
    "difficulty": 3,
    "task": "Determine",
    "tags": [
      "greatest term",
      "binomial",
      "ratio of consecutive terms",
      "boundary"
    ],
    "statement": "In the numerical expansion of $(3+2x)^{15}$ evaluated at $x=4$, the terms are $T_{k+1}=\\binom{15}{k}\\,3^{15-k}\\,8^{k}$ for $k=0,1,\\dots,15$. Determine which single term $T_{k+1}$ is the greatest, and give its value.",
    "answer": "\\[\\boxed{T_{12}=\\binom{15}{11}3^{4}8^{11}=949746118164480}\\]",
    "trap": "Writing the ratio $\\dfrac{T_{k+1}}{T_k}=\\dfrac{15-k}{k}\\cdot\\dfrac{8}{3}$ and solving $\\ge 1$ as $\\dfrac{(15-k)8}{3k}\\ge1\\Rightarrow k\\le\\dfrac{120}{11}=10.9$, then declaring the greatest term to be $T_{11}$ (i.e. $k=10$). The index in the ratio is off by one: the ratio compares $T_{k+1}$ to $T_k$, so $k\\le10.9$ means $T_{k+1}>T_k$ up to $k=10$, hence the LAST increase is $T_{11}\\to T_{12}$ and the max is $T_{12}$ ($k=11$).",
    "solutions": [
      {
        "name": "Ratio of consecutive terms",
        "steps": [
          "Form $\\dfrac{T_{k+1}}{T_k}=\\dfrac{\\binom{15}{k}3^{15-k}8^{k}}{\\binom{15}{k-1}3^{16-k}8^{k-1}}=\\dfrac{16-k}{k}\\cdot\\dfrac{8}{3}$ (here $T_k$ has lower index $k-1$).",
          "The term increases while this ratio $>1$: $(16-k)8>3k\\Rightarrow128>11k\\Rightarrow k<11.6$, so $T_k<T_{k+1}$ for $k\\le11$ and $T_{12}>T_{11}$, while at $k=12$ the ratio drops below $1$.",
          "Thus the sequence rises up to $T_{12}$ then falls; the greatest term is $T_{12}$ at $k=11$.",
          "Compute $T_{12}=\\binom{15}{11}3^{4}8^{11}=1365\\cdot81\\cdot8^{11}=949746118164480$, giving $\\boxed{949746118164480}$."
        ]
      },
      {
        "name": "Direct neighbour comparison",
        "steps": [
          "Tabulate $T_{11},T_{12},T_{13}$ via $T_{k+1}=\\binom{15}{k}3^{15-k}8^k$.",
          "$T_{11}=\\binom{15}{10}3^5 8^{10}=783540547485696$ and $T_{13}=\\binom{15}{12}3^3 8^{12}=844218771701760$, both below $T_{12}=949746118164480$.",
          "Since $T_{12}$ exceeds both neighbours and the term ratio is monotone, $T_{12}$ is the unique maximum: $\\boxed{949746118164480}$."
        ]
      }
    ],
    "remark": "Insight: the only hard part is bookkeeping which index the ratio governs. The off-by-one between 'the ratio crosses 1 at $k$' and 'the term peaks at $T_{k+1}$' is exactly the boundary slip that costs ranks."
  },
  {
    "theme": "misc",
    "themeLabel": "Greatest Term, Integer Part & Estimation",
    "title": "The Peak of $k^2/2^k$",
    "difficulty": 3,
    "task": "Find all",
    "tags": [
      "greatest term",
      "non-binomial sequence",
      "ratio of consecutive terms",
      "rounding boundary"
    ],
    "statement": "For $k=1,2,3,\\dots$ let $a_k=\\dfrac{k^{2}}{2^{k}}$. Find all $k$ at which $a_k$ is greatest, and give the maximum value.",
    "answer": "\\[\\boxed{k=3,\\quad a_3=\\tfrac{9}{8}}\\]",
    "trap": "Solving $\\dfrac{a_{k+1}}{a_k}=\\dfrac12\\Big(1+\\tfrac1k\\Big)^2\\ge1\\Rightarrow(k+1)^2\\ge2k^2\\Rightarrow k\\le1+\\sqrt2\\approx2.414$, then rounding $2.414$ down to $k=2$ and declaring the max to be $a_2=1$. The ratio $>1$ at $k=2$ means $a_3>a_2$, so the LAST increase carries you to $a_3$; the peak is $a_3=\\tfrac98>1$, not $a_2$. Truncating the critical value to the wrong term is the error.",
    "solutions": [
      {
        "name": "Consecutive-ratio analysis",
        "steps": [
          "$\\dfrac{a_{k+1}}{a_k}=\\dfrac{(k+1)^2}{2k^2}=\\dfrac12\\Big(1+\\tfrac1k\\Big)^2$.",
          "This is $>1$ iff $(k+1)^2>2k^2$ iff $k^2-2k-1<0$ iff $k<1+\\sqrt2\\approx2.414$; so $a_1<a_2<a_3$ (ratios at $k=1,2$ exceed $1$) and $a_3>a_4>\\cdots$ (ratio at $k=3$ is $\\tfrac{16}{18}<1$).",
          "The sequence rises to $a_3$ then strictly falls, so the unique maximum is at $k=3$.",
          "$a_3=\\dfrac{9}{2^3}=\\dfrac98$, giving $\\boxed{k=3,\\ a_3=\\tfrac98}$."
        ]
      },
      {
        "name": "Direct tabulation",
        "steps": [
          "$a_1=\\tfrac12,\\ a_2=1,\\ a_3=\\tfrac98,\\ a_4=1,\\ a_5=\\tfrac{25}{32}$.",
          "$a_3=\\tfrac98=1.125$ exceeds both neighbours $a_2=1$ and $a_4=1$.",
          "Since $a_k\\to0$ and the ratio is below $1$ for all $k\\ge3$, $a_3$ dominates the whole tail.",
          "Hence the greatest term is $a_3=\\boxed{\\tfrac98}$ at $k=3$."
        ]
      }
    ],
    "remark": "Insight: the threshold $1+\\sqrt2\\approx2.414$ lies between $2$ and $3$; the peak is the term JUST AFTER the last $k$ with ratio $>1$, i.e. $k=3$. Reading the inequality as 'last increasing index' vs 'peak index' is the recurring boundary lesson."
  },
  {
    "theme": "misc",
    "themeLabel": "Greatest Term, Integer Part & Estimation",
    "title": "Ten Thousand Reciprocal Roots",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "integer part",
      "sandwich",
      "integral estimate",
      "telescoping"
    ],
    "statement": "Let $\\displaystyle S=\\sum_{k=1}^{10000}\\frac{1}{\\sqrt{k}}$. Evaluate $\\lfloor S\\rfloor$.",
    "answer": "\\[\\boxed{198}\\]",
    "trap": "Replacing the sum by the single integral $\\int_1^{10000}\\frac{dx}{\\sqrt{x}}=2\\sqrt{10000}-2=198$ and declaring $\\lfloor S\\rfloor=198$. This is a one-sided estimate of the wrong sign: since $f(x)=x^{-1/2}$ is decreasing, that integral $undercounts$ the sum, so it only certifies $S>198$, never an upper bound. By itself it cannot rule out $S\\ge199$, which would make the floor $199$. The number $198$ is right, but the argument is not a proof until a $second$ bound traps $S$ strictly below $199$.",
    "solutions": [
      {
        "name": "Telescoping surd inequality",
        "steps": [
          "For each $k\\ge1$, rationalising gives $\\dfrac{2}{\\sqrt{k+1}+\\sqrt{k}}<\\dfrac{1}{\\sqrt{k}}<\\dfrac{2}{\\sqrt{k}+\\sqrt{k-1}}$, i.e. $2(\\sqrt{k+1}-\\sqrt{k})<\\dfrac{1}{\\sqrt{k}}<2(\\sqrt{k}-\\sqrt{k-1})$.",
          "Sum the LEFT inequality for $k=1\\dots n$: it telescopes to $S>2(\\sqrt{n+1}-1)$. Sum the RIGHT inequality for $k=2\\dots n$ and add the $k=1$ term ($=1$): it telescopes to $S<1+2(\\sqrt{n}-1)=2\\sqrt{n}-1$.",
          "With $n=10000$: $2(\\sqrt{10001}-1)=198.00999\\ldots<S<2\\cdot100-1=199$.",
          "Hence $198<S<199$, so $\\lfloor S\\rfloor=\\boxed{198}$."
        ]
      },
      {
        "name": "Integral bounds on a decreasing function",
        "steps": [
          "Since $f(x)=x^{-1/2}$ is decreasing, on $[k,k+1]$ we have $\\int_k^{k+1}f<f(k)$ and on $[k-1,k]$ we have $f(k)<\\int_{k-1}^k f$.",
          "Summing $f(k)<\\int_{k-1}^{k}f$ over $k=1\\dots n$ gives $S<\\int_0^n f=2\\sqrt{n}$; summing $\\int_k^{k+1}f<f(k)$ over $k=1\\dots n$ gives $\\int_1^{n+1}f<S$, i.e. $2(\\sqrt{n+1}-1)<S<2\\sqrt{n}$.",
          "Sharpening the upper end by peeling off $k=1$ (so the tail starts at $k=2$ where $f(k)<\\int_{k-1}^k f$ is used) yields $S<1+\\int_1^{n}f=2\\sqrt{n}-1$.",
          "At $n=10000$ the two-sided trap is $198.00999\\ldots<S<199$, whose only enclosed integer floor is $198$, so $\\lfloor S\\rfloor=\\boxed{198}$."
        ]
      }
    ],
    "remark": "Insight: the leading term is $2\\sqrt{n}=200$, yet the floor is $198$ — the constant correction (which tends to $-1.4604\\ldots$, so $S\\approx198.5396$) drags it down nearly two whole units. The lesson is that an estimate must be two-sided: a single integral comparison fixes only one inequality, and for an integer-part question you need both walls of the sandwich to land inside the same unit interval."
  },
  {
    "theme": "misc",
    "themeLabel": "Greatest Term, Integer Part & Estimation",
    "title": "The Conjugate That Vanishes",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "integer part",
      "conjugate surd",
      "binomial cancellation",
      "fractional part"
    ],
    "statement": "Evaluate $\\big\\lfloor(\\sqrt{3}+\\sqrt{2})^{12}\\big\\rfloor$.",
    "answer": "\\[\\boxed{940897}\\]",
    "trap": "Expanding $(\\sqrt3+\\sqrt2)^{12}$ and rounding a decimal, or assuming the floor equals the integer $(\\sqrt3+\\sqrt2)^{12}+(\\sqrt3-\\sqrt2)^{12}$ itself. Because $0<(\\sqrt3-\\sqrt2)^{12}<1$ is POSITIVE, the floor is that integer MINUS one — forgetting to subtract $1$ is the boundary error.",
    "solutions": [
      {
        "name": "Add the conjugate",
        "steps": [
          "Let $x=(\\sqrt3+\\sqrt2)^{12}$ and $y=(\\sqrt3-\\sqrt2)^{12}$. Binomially, all odd powers of $\\sqrt2,\\sqrt3$ cancel in $x+y$, leaving an integer $N$.",
          "Compute $N=x+y$: since $(\\sqrt3\\pm\\sqrt2)^2=5\\pm2\\sqrt6$, we get $x+y=(5+2\\sqrt6)^6+(5-2\\sqrt6)^6$, an integer; evaluating gives $N=940898$.",
          "Since $0<\\sqrt3-\\sqrt2<1$ we have $0<y=(\\sqrt3-\\sqrt2)^{12}<1$, in fact $y\\approx1.06\\times10^{-6}$.",
          "Therefore $x=N-y\\in(N-1,N)$, so $\\lfloor x\\rfloor=N-1=\\boxed{940897}$."
        ]
      },
      {
        "name": "Reduce to a Pell-type recurrence",
        "steps": [
          "Put $u=5+2\\sqrt6,\\ v=5-2\\sqrt6$ (roots of $t^2-10t+1=0$); then $a_m=u^m+v^m$ satisfies $a_m=10a_{m-1}-a_{m-2}$, $a_0=2,a_1=10$.",
          "Iterating: $a_2=98,\\ a_3=970,\\ a_4=9602,\\ a_5=95050,\\ a_6=940898$.",
          "$x=u^6=a_6-v^6$ with $0<v^6<1$, so $\\lfloor x\\rfloor=a_6-1=\\boxed{940897}$."
        ]
      }
    ],
    "remark": "Insight: even powers make the conjugate positive, so the floor is one below the integer sum. The sign of $(\\sqrt3-\\sqrt2)^{n}$ — always positive here — is the whole game, and it flips the rule for odd-exponent cousins."
  },
  {
    "theme": "misc",
    "themeLabel": "Greatest Term, Integer Part & Estimation",
    "title": "The Tie at the Mode",
    "difficulty": 4,
    "task": "Find all",
    "tags": [
      "greatest term",
      "binomial weights",
      "mode",
      "equality boundary"
    ],
    "statement": "Consider the $51$ numbers $T_k=\\binom{50}{k}\\left(\\tfrac13\\right)^{k}\\left(\\tfrac23\\right)^{50-k}$ for $k=0,1,\\dots,50$. Find all $k$ for which $T_k$ attains the maximum value.",
    "answer": "\\[\\boxed{k\\in\\{16,\\,17\\}}\\]",
    "trap": "Solving $\\dfrac{T_{k+1}}{T_k}=\\dfrac{50-k}{k+1}\\cdot\\dfrac12\\ge1\\Rightarrow k\\le16$ and reporting the single mode $k=16$ (or computing $(n+1)p=17$ and saying $k=17$). The ratio equals EXACTLY $1$ at $k=16$, so $T_{16}=T_{17}$: there are TWO equal greatest terms, not one. Treating a strict inequality where it is an equality loses the second maximiser.",
    "solutions": [
      {
        "name": "Ratio with equality detection",
        "steps": [
          "$\\dfrac{T_{k+1}}{T_k}=\\dfrac{\\binom{50}{k+1}}{\\binom{50}{k}}\\cdot\\dfrac{1/3}{2/3}=\\dfrac{50-k}{k+1}\\cdot\\dfrac12$.",
          "Set this $\\ge1$: $(50-k)\\ge2(k+1)\\Rightarrow48\\ge3k\\Rightarrow k\\le16$, and $=1$ precisely when $48=3k$, i.e. $k=16$.",
          "So $T_k$ strictly increases for $k\\le15$, then $T_{16}=T_{17}$ (ratio $=1$), then strictly decreases.",
          "Hence the maximum is attained at both $k=16$ and $k=17$: $\\boxed{\\{16,17\\}}$."
        ]
      },
      {
        "name": "Binomial mode criterion",
        "steps": [
          "For weights $\\binom{n}{k}p^k(1-p)^{n-k}$ with $n=50,p=\\tfrac13$, the mode is governed by $(n+1)p=51\\cdot\\tfrac13=17$.",
          "When $(n+1)p$ is an integer $m$, the distribution has two equal modal terms at $k=m-1$ and $k=m$.",
          "Here $m=17$, so the greatest terms are at $k=16$ and $k=17$: $\\boxed{\\{16,17\\}}$.",
          "A numeric check confirms $T_{16}=T_{17}\\approx0.11783>T_{15},T_{18}$."
        ]
      }
    ],
    "remark": "Insight: the integer value of $(n+1)p$ is the hidden degenerate case. Whenever the greatest-term ratio can equal $1$ exactly, the 'greatest term' is a tie — a single answer is wrong."
  },
  {
    "theme": "misc",
    "themeLabel": "Greatest Term, Integer Part & Estimation",
    "title": "A Thousand Cube Roots",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "integer part",
      "sandwich",
      "integral estimate",
      "p-series"
    ],
    "statement": "Let $\\displaystyle S=\\sum_{k=1}^{1000}\\frac{1}{k^{2/3}}$. Evaluate $\\lfloor S\\rfloor$.",
    "answer": "\\[\\boxed{27}\\]",
    "trap": "Using $S\\approx\\int_0^{1000}x^{-2/3}\\,dx=3\\cdot1000^{1/3}=30$ and guessing $\\lfloor S\\rfloor=29$ or $30$. The crude antiderivative-at-the-endpoint estimate overshoots badly; the true value $S=27.557\\ldots$ sits just above $27$. Only matching integral bounds on a decreasing function pin the floor.",
    "solutions": [
      {
        "name": "Decreasing-function integral squeeze",
        "steps": [
          "$f(x)=x^{-2/3}$ is positive and decreasing on $[1,\\infty)$, so for each integer $k\\ge2$ we have $\\int_k^{k+1}f<f(k)<\\int_{k-1}^k f$; the first term is exactly $f(1)=1$.",
          "Lower bound: summing $f(k)>\\int_k^{k+1}f$ over $k=1,\\dots,n$ gives $S>\\int_1^{n+1}x^{-2/3}\\,dx=3\\big((n+1)^{1/3}-1\\big)$.",
          "Upper bound: summing $f(k)<\\int_{k-1}^k f$ over $k=2,\\dots,n$ and adding $f(1)=1$ gives $S<1+\\int_1^{n}x^{-2/3}\\,dx=1+3\\big(n^{1/3}-1\\big)=3n^{1/3}-2$.",
          "At $n=1000$: lower $=3\\big(\\sqrt[3]{1001}-1\\big)=27.0099\\ldots$ and upper $=3\\cdot10-2=28$.",
          "Thus $27<S<28$, so $\\lfloor S\\rfloor=\\boxed{27}$."
        ]
      },
      {
        "name": "Telescoping with a mean-value bound",
        "steps": [
          "Apply the mean value theorem to $g(x)=3x^{1/3}$, whose derivative is $g'(x)=x^{-2/3}$. Since $g'$ is decreasing, for each $k\\ge1$ we get $\\dfrac{1}{k^{2/3}}>3\\big((k+1)^{1/3}-k^{1/3}\\big)$ and $\\dfrac{1}{k^{2/3}}<3\\big(k^{1/3}-(k-1)^{1/3}\\big)$.",
          "Lower telescope: summing the first inequality over $k=1,\\dots,n$ gives $S>3\\big((n+1)^{1/3}-1\\big)=27.0099\\ldots$ at $n=1000$.",
          "Upper telescope: summing the second inequality over $k=2,\\dots,n$ collapses to $3\\big(n^{1/3}-1\\big)$; adding the separate first term $f(1)=1$ yields $S<1+3\\big(n^{1/3}-1\\big)=3n^{1/3}-2=28$ at $n=1000$.",
          "Hence $27<S<28$ and $\\lfloor S\\rfloor=\\boxed{27}$."
        ]
      }
    ],
    "remark": "Insight: the leading term $3n^{1/3}=30$ is misleading by nearly three whole units. As with $\\sum 1/\\sqrt{k}$, the additive constant matters as much as the growth rate, so a one-sided endpoint estimate is useless for the floor. Pulling out the first term ($f(1)=1$) is exactly what tightens the upper integral bound from a loose $30$ down to a decisive $28$."
  },
  {
    "theme": "misc",
    "themeLabel": "Greatest Term, Integer Part & Estimation",
    "title": "Silver Ratio, Tenth Power",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "integer part",
      "conjugate surd",
      "recurrence",
      "fractional part"
    ],
    "statement": "Evaluate $\\big\\lfloor(1+\\sqrt{2})^{10}\\big\\rfloor$.",
    "answer": "\\[\\boxed{6725}\\]",
    "trap": "Computing a decimal of $(1+\\sqrt2)^{10}$ and rounding, or — knowing $(1+\\sqrt2)^{10}+(1-\\sqrt2)^{10}$ is an integer $N$ — declaring $\\lfloor(1+\\sqrt2)^{10}\\rfloor=N$. Since the exponent is EVEN, $(1-\\sqrt2)^{10}=(\\sqrt2-1)^{10}\\in(0,1)$ is positive, so the floor is $N-1$. Omitting the $-1$ (or mis-signing the conjugate) is the boundary trap.",
    "solutions": [
      {
        "name": "Conjugate sum",
        "steps": [
          "Let $x=(1+\\sqrt2)^{10}$, $y=(1-\\sqrt2)^{10}$; odd $\\sqrt2$ powers cancel in $x+y$, giving integer $N$.",
          "$(1\\pm\\sqrt2)^2=3\\pm2\\sqrt2$, so $N=(3+2\\sqrt2)^5+(3-2\\sqrt2)^5$, an integer.",
          "With $u=3+2\\sqrt2,v=3-2\\sqrt2$ ($uv=1$, $u+v=6$), $b_m=u^m+v^m$ obeys $b_m=6b_{m-1}-b_{m-2}$, $b_0=2,b_1=6$: $b_2=34,b_3=198,b_4=1154,b_5=6726$, so $N=6726$.",
          "Since $0<\\sqrt2-1<1$, $0<y<1$ (in fact $y\\approx1.49\\times10^{-4}$), so $x=N-y\\in(N-1,N)$ and $\\lfloor x\\rfloor=6725$. $\\boxed{6725}$"
        ]
      },
      {
        "name": "Pell recurrence on $u^m$",
        "steps": [
          "Note $u=3+2\\sqrt2$ and $v=3-2\\sqrt2\\in(0,1)$ are roots of $t^2-6t+1=0$.",
          "$x=u^5$; the integer $b_5=u^5+v^5=6726$ from $b_m=6b_{m-1}-b_{m-2}$.",
          "As $0<v^5<1$, $x=6726-v^5\\in(6725,6726)$.",
          "Therefore $\\lfloor(1+\\sqrt2)^{10}\\rfloor=\\lfloor u^5\\rfloor=\\boxed{6725}$."
        ]
      }
    ],
    "remark": "Insight: $(1+\\sqrt2)^{10}=(3+2\\sqrt2)^5$ — recognising the inner square collapses a 10th power into a 5th power with a clean Pell recurrence. The even exponent keeps the conjugate positive, forcing the $-1$."
  },
  {
    "theme": "misc",
    "themeLabel": "Greatest Term, Integer Part & Estimation",
    "title": "Pinned Between Two Walls It Never Touches",
    "difficulty": 5,
    "task": "Prove that",
    "tags": [
      "sandwich",
      "monotone sequence",
      "bounded",
      "series estimate"
    ],
    "statement": "For every integer $n\\ge2$ let $\\displaystyle a_n=\\sum_{k=1}^{n}\\frac{1}{\\sqrt{k}}-2\\sqrt{n}$. Prove that $-2<a_n<-1$, and that neither bound is ever attained (indeed $a_n$ is strictly decreasing toward a limit $\\approx-1.4604$).",
    "answer": "\\[\\boxed{-2<a_n<-1\\text{ for all }n\\ge2;\\ \\ a_n\\downarrow-1.4604\\ldots}\\]",
    "trap": "Bounding the sum by a single integral to get only $a_n<0$ or $a_n>-2$ and stopping there, or claiming $a_n\\to0$ because $\\sum1/\\sqrt k\\sim2\\sqrt n$. The error is treating the $O(1)$ remainder as negligible: it converges to a NONZERO constant $-1.4604\\ldots$, not $0$. Proving the squeeze needs the sharp surd inequality on BOTH sides, not a one-shot integral.",
    "solutions": [
      {
        "name": "Monotonicity plus telescoping endpoint values",
        "steps": [
          "Strict decrease: $a_{n+1}-a_n=\\dfrac{1}{\\sqrt{n+1}}-2\\bigl(\\sqrt{n+1}-\\sqrt n\\bigr)=\\dfrac{1}{\\sqrt{n+1}}-\\dfrac{2}{\\sqrt{n+1}+\\sqrt n}$, after rationalizing $\\sqrt{n+1}-\\sqrt n=\\dfrac{1}{\\sqrt{n+1}+\\sqrt n}$.",
          "Since $\\sqrt{n+1}+\\sqrt n<2\\sqrt{n+1}$, the subtracted fraction satisfies $\\dfrac{2}{\\sqrt{n+1}+\\sqrt n}>\\dfrac{2}{2\\sqrt{n+1}}=\\dfrac{1}{\\sqrt{n+1}}$. Hence $a_{n+1}-a_n<0$: the sequence is strictly decreasing.",
          "Upper bound: rationalizing gives $\\dfrac{1}{\\sqrt k}<2\\bigl(\\sqrt k-\\sqrt{k-1}\\bigr)$ for $k\\ge2$ (equivalently $\\sqrt{k-1}+\\sqrt k<2\\sqrt k$). Summing over $k=2,\\dots,n$ telescopes to $\\sum_{2}^n\\frac1{\\sqrt k}<2(\\sqrt n-1)$; adding the $k=1$ term gives $\\sum_{1}^n\\frac1{\\sqrt k}<2\\sqrt n-1$, so $a_n<-1$.",
          "Lower bound: $\\dfrac{1}{\\sqrt k}>2\\bigl(\\sqrt{k+1}-\\sqrt k\\bigr)$ (equivalently $\\sqrt{k+1}+\\sqrt k>2\\sqrt k$). Summing over $k=1,\\dots,n$ telescopes to $\\sum_{1}^n\\frac1{\\sqrt k}>2\\bigl(\\sqrt{n+1}-1\\bigr)>2\\sqrt n-2$, so $a_n>-2$. Strictly decreasing and bounded below $\\Rightarrow a_n\\downarrow L$ with $-2<L<-1$ (numerically $L=-1.4604\\ldots$). $\\boxed{-2<a_n<-1}$"
        ]
      },
      {
        "name": "Tangent-line (concavity) surd inequality",
        "steps": [
          "By strict concavity of $\\sqrt{\\cdot}$, the chord slope between $k-1,k$ exceeds the tangent slope at $k$, which exceeds the chord slope between $k,k+1$: $\\sqrt{k}-\\sqrt{k-1}>\\dfrac{1}{2\\sqrt k}>\\sqrt{k+1}-\\sqrt k$ for every $k\\ge1$.",
          "From the left inequality, $\\dfrac1{\\sqrt k}<2\\bigl(\\sqrt k-\\sqrt{k-1}\\bigr)$; summing $k=2,\\dots,n$ and adding the $k=1$ term gives $\\sum_{1}^n\\frac1{\\sqrt k}<2\\sqrt n-1$, hence $a_n<-1$ strictly.",
          "From the right inequality, $\\dfrac1{\\sqrt k}>2\\bigl(\\sqrt{k+1}-\\sqrt k\\bigr)$; summing $k=1,\\dots,n$ gives $\\sum_{1}^n\\frac1{\\sqrt k}>2\\bigl(\\sqrt{n+1}-1\\bigr)$, hence $a_n>2\\sqrt{n+1}-2-2\\sqrt n>-2$ since $\\sqrt{n+1}>\\sqrt n$.",
          "Both inequalities are strict for every $n\\ge2$, so $-2<a_n<-1$ with neither bound attained, and the same concavity gives strict monotone decrease, forcing convergence to a constant $L\\in(-2,-1)$ equal to $\\,\\approx -1.46$. $\\boxed{-2<a_n<-1}$"
        ]
      }
    ],
    "remark": "Insight: this is the archetype of a partial sum pinned between two close walls it never reaches. The $O(1)$ remainder does not vanish but tends to $-1.4604\\ldots$; the proof must sharpen $1/\\sqrt k$ on BOTH sides simultaneously (the same concavity gives the upper telescoping bound, the lower telescoping bound, and the monotonicity in one stroke)."
  },
  {
    "theme": "misc",
    "themeLabel": "Greatest Term, Integer Part & Estimation",
    "title": "An Odd Power and Its Honest Floor",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "integer part",
      "conjugate surd",
      "parity",
      "fractional part identity"
    ],
    "statement": "Let $N=(2+\\sqrt{3})^{7}$. Evaluate $\\lfloor N\\rfloor$, and show that the fractional part of $N$ equals $1-(2-\\sqrt3)^{7}$ while $N\\cdot(2-\\sqrt3)^7$ is exactly $1$.",
    "answer": "\\[\\boxed{\\lfloor N\\rfloor=10083,\\quad \\{N\\}=1-(2-\\sqrt3)^7=-5041+2911\\sqrt3,\\quad N(2-\\sqrt3)^7=1}\\]",
    "trap": "Declaring $\\{N\\}=(2-\\sqrt3)^7$ by reflex, copying the rule that holds when the conjugate is NEGATIVE. Here $v=2-\\sqrt3$ is POSITIVE and tiny, so $M=v^7\\in(0,1)$, and $N=I-M$ with $I=10084$. Subtracting a small positive amount from the integer $I$ pushes $N$ just BELOW $I$, so $\\lfloor N\\rfloor=I-1=10083$ and $\\{N\\}=N-(I-1)=1-M$, NOT $M$. The conjugate $M\\approx 9.9\\times10^{-5}$ is microscopic, whereas $\\{N\\}\\approx0.99990$ is nearly $1$: confusing the two is off by almost a whole unit.",
    "solutions": [
      {
        "name": "Integer companion and product identity",
        "steps": [
          "Let $M=(2-\\sqrt3)^7$; since $0<2-\\sqrt3<1$, we have $0<M<1$. Expanding binomially, the odd powers of $\\sqrt3$ in $(2+\\sqrt3)^7$ and $(2-\\sqrt3)^7$ are equal and opposite, so they cancel in the sum: $N+M$ is an integer $I$.",
          "With $u=2+\\sqrt3,\\,v=2-\\sqrt3$ we have $u+v=4,\\ uv=1$, so $c_m=u^m+v^m$ satisfies $c_m=4c_{m-1}-c_{m-2}$ with $c_0=2,\\ c_1=4$. This gives $c_2=14,\\ c_3=52,\\ c_4=194,\\ c_5=724,\\ c_6=2702,\\ c_7=10084$. Hence $I=N+M=10084$.",
          "Therefore $N=I-M=10084-M$ with $0<M<1$. Since $M>0$, $N$ lies strictly between $10083$ and $10084$, so $\\lfloor N\\rfloor=10083$. The fractional part is $\\{N\\}=N-10083=(10084-M)-10083=1-M$.",
          "Finally $N\\cdot M=(uv)^7=1^7=1$, so $M=1/N$ and $\\{N\\}=1-M=1-\\tfrac1N$. Thus $\\lfloor N\\rfloor=\\boxed{10083}$, $\\{N\\}=1-(2-\\sqrt3)^7$, and $N\\cdot(2-\\sqrt3)^7=1$."
        ]
      },
      {
        "name": "Direct surd expansion and reciprocal check",
        "steps": [
          "Expand directly: $(2+\\sqrt3)^7=5042+2911\\sqrt3$ and $(2-\\sqrt3)^7=5042-2911\\sqrt3$. Their sum is $10084$ and their product is $5042^2-3\\cdot2911^2=25421764-25421763=1$.",
          "Numerically $M=(2-\\sqrt3)^7\\approx 9.9167\\times10^{-5}$, so $N=10084-M\\approx 10083.99990$. Hence $\\lfloor N\\rfloor=10083$ and $\\{N\\}=N-10083=1-M\\approx0.99990$, i.e. $\\{N\\}=-5041+2911\\sqrt3$.",
          "The product identity $N\\cdot M=\\big((2+\\sqrt3)(2-\\sqrt3)\\big)^7=(4-3)^7=1$ confirms $M=1/N$, so the conjugate is the exact reciprocal of $N$.",
          "Therefore $\\lfloor N\\rfloor=\\boxed{10083}$, the fractional part is $\\{N\\}=1-(2-\\sqrt3)^7=1-\\tfrac1N$, and $N\\cdot(2-\\sqrt3)^7=1$."
        ]
      }
    ],
    "remark": "Insight: $(2+\\sqrt3)(2-\\sqrt3)=1$ makes the conjugate the exact reciprocal of $N$, so $\\{N\\}=1-1/N$ — a self-referential identity. The decisive distinction is the SIGN of the conjugate: when it is negative (e.g. $(1-\\sqrt2)^n$ for odd $n$) the fractional part equals the conjugate's magnitude; when it is positive and in $(0,1)$, as here, the fractional part is $1$ minus the conjugate. Reaching for the wrong rule is off by nearly a full unit."
  },
  {
    "theme": "misc",
    "themeLabel": "Greatest Term, Integer Part & Estimation",
    "title": "When the Conjugate Turns Negative",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "integer part",
      "conjugate surd",
      "sign trap",
      "parity",
      "recurrence"
    ],
    "statement": "Evaluate $\\big\\lfloor(2+\\sqrt{5})^{9}\\big\\rfloor$, and determine whether $\\lfloor(2+\\sqrt5)^{9}\\rfloor$ equals the integer $(2+\\sqrt5)^9+(2-\\sqrt5)^9$ or that integer minus one.",
    "answer": "\\[\\boxed{\\lfloor(2+\\sqrt5)^{9}\\rfloor=439204=(2+\\sqrt5)^9+(2-\\sqrt5)^9\\ (\\text{not minus one})}\\]",
    "trap": "Applying the familiar rule '$\\lfloor=\\,$integer sum $-1$' as in the $\\sqrt3+\\sqrt2$ or $1+\\sqrt2$ problems. Here $2-\\sqrt5\\approx-0.236$ is NEGATIVE, and with the ODD exponent $9$, $(2-\\sqrt5)^9<0$. So $(2+\\sqrt5)^9=I-(2-\\sqrt5)^9=I+|(2-\\sqrt5)^9|>I-1$; in fact the fractional part is $|(2-\\sqrt5)^9|$ and $\\lfloor\\cdot\\rfloor=I$ exactly. Subtracting $1$ out of habit is the sign trap.",
    "solutions": [
      {
        "name": "Track the sign of the conjugate",
        "steps": [
          "Let $A=2+\\sqrt5,\\ C=2-\\sqrt5$; note $A+C=4$, $AC=4-5=-1$, and $C\\approx-0.2360<0$.",
          "$I=A^9+C^9$ is an integer (the surd terms cancel in pairs). With $s_m=A^m+C^m$ obeying $s_m=4s_{m-1}+s_{m-2}$ (since $t^2-4t-1=0$), $s_0=2,s_1=4$: $s_2=18,s_3=76,s_4=322,s_5=1364,s_6=5778,s_7=24476,s_8=103682,s_9=439204$.",
          "Because the exponent $9$ is odd and $C<0$, $C^9<0$, so $A^9=I-C^9=I+|C^9|$ with $0<|C^9|<1$ (indeed $|C^9|\\approx2.3\\times10^{-6}$).",
          "Therefore $A^9\\in(I,I+1)$ and $\\lfloor A^9\\rfloor=I=\\boxed{439204}$ — equal to the integer sum, NOT minus one."
        ]
      },
      {
        "name": "Fractional-part bookkeeping",
        "steps": [
          "Write $A^9=s_9-C^9=439204-C^9$. Since $C^9<0$, $-C^9>0$, so $A^9=439204+|C^9|$.",
          "As $0<|C^9|<1$, the integer part is $439204$ and the fractional part is $|C^9|=|2-\\sqrt5|^9$.",
          "Contrast with even exponents: $A^{8}=s_8-C^8$ with $C^8>0$ in $(0,1)$ would give $\\lfloor A^8\\rfloor=s_8-1=103681$.",
          "Hence for this odd power, $\\lfloor(2+\\sqrt5)^9\\rfloor=\\boxed{439204}$, no decrement needed."
        ]
      }
    ],
    "remark": "Insight: the floor rule for $\\lfloor(a+\\sqrt b)^n\\rfloor$ depends on the SIGN of the conjugate $a-\\sqrt b$ and the PARITY of $n$. A negative conjugate with odd $n$ flips the convention from 'integer minus one' to 'integer exactly' — a single sign decides the answer."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Factorial That Telescoped",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "telescoping",
      "factorials",
      "series",
      "reindexing"
    ],
    "statement": "Evaluate the infinite series \\[\\sum_{n=1}^{\\infty}\\frac{n}{(n+1)!}.\\]",
    "answer": "\\[\\boxed{1}\\]",
    "trap": "Trying to bound it by $\\sum 1/n!=e-1$ and guessing a value involving $e$. The numerator $n$ is exactly what makes the $e$ vanish: rewriting $n=(n+1)-1$ converts the sum into a telescope with limit $1$, not an exponential constant.",
    "solutions": [
      {
        "name": "Split-and-telescope",
        "steps": [
          "Write $\\dfrac{n}{(n+1)!}=\\dfrac{(n+1)-1}{(n+1)!}=\\dfrac{1}{n!}-\\dfrac{1}{(n+1)!}$.",
          "The partial sum is $\\sum_{n=1}^{N}\\left(\\dfrac{1}{n!}-\\dfrac{1}{(n+1)!}\\right)=\\dfrac{1}{1!}-\\dfrac{1}{(N+1)!}$.",
          "Let $N\\to\\infty$: the tail $\\dfrac{1}{(N+1)!}\\to0$, so the sum is $1$.",
          "Hence the value is $\\boxed{1}$."
        ]
      },
      {
        "name": "Exponential identity subtraction",
        "steps": [
          "Use the telescoped form $\\sum_{n\\ge1}\\dfrac{n}{(n+1)!}=\\sum_{n\\ge1}\\dfrac{1}{n!}-\\sum_{n\\ge1}\\dfrac{1}{(n+1)!}$.",
          "From $\\sum_{n=0}^{\\infty}\\dfrac{1}{n!}=e$, the first sum is $\\sum_{n\\ge1}\\tfrac1{n!}=e-1$.",
          "Reindex the second sum with $m=n+1$: $\\sum_{n\\ge1}\\tfrac1{(n+1)!}=\\sum_{m\\ge2}\\tfrac1{m!}=e-2$.",
          "Subtract: $(e-1)-(e-2)=1$, so the value is $\\boxed{1}$."
        ]
      }
    ],
    "remark": "Insight: a stray polynomial factor in the numerator is an invitation to reindex; here $n=(n+1)-1$ collapses a factorial series into a one-term telescope, fusing factorial algebra with telescoping."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "Arithmetic Riding a Geometric Tide",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "agp",
      "arithmetico-geometric",
      "series",
      "perturbation"
    ],
    "statement": "Evaluate the arithmetico-geometric series \\[\\sum_{n=1}^{\\infty}\\frac{2n-1}{2^{\\,n}}.\\]",
    "answer": "\\[\\boxed{3}\\]",
    "trap": "Treating it as a pure geometric series and using $a/(1-r)$ on the $2^{-n}$ alone, or forgetting that the linear factor $2n-1$ needs the perturbation (shift-and-subtract) step. Splitting requires both $\\sum n/2^n=2$ and $\\sum 1/2^n=1$ to converge independently before recombining.",
    "solutions": [
      {
        "name": "Shift and subtract",
        "steps": [
          "Let $S=\\sum_{n\\ge1}\\dfrac{2n-1}{2^n}$. Then $\\tfrac12 S=\\sum_{n\\ge1}\\dfrac{2n-1}{2^{n+1}}=\\sum_{n\\ge2}\\dfrac{2n-3}{2^{n}}$.",
          "Subtract: $S-\\tfrac12 S=\\dfrac{2\\cdot1-1}{2}+\\sum_{n\\ge2}\\dfrac{(2n-1)-(2n-3)}{2^n}=\\tfrac12+\\sum_{n\\ge2}\\dfrac{2}{2^n}$.",
          "$\\sum_{n\\ge2}2/2^n=2\\cdot\\tfrac{1/4}{1-1/2}=1$, so $\\tfrac12 S=\\tfrac12+1=\\tfrac32$, giving $S=3$.",
          "Therefore $\\boxed{3}$."
        ]
      },
      {
        "name": "Split into two standard sums",
        "steps": [
          "$S=2\\sum_{n\\ge1}\\dfrac{n}{2^n}-\\sum_{n\\ge1}\\dfrac{1}{2^n}$, valid since both converge.",
          "$\\sum_{n\\ge1} n x^n=\\dfrac{x}{(1-x)^2}$ at $x=\\tfrac12$ gives $2$; $\\sum_{n\\ge1}2^{-n}=1$.",
          "So $S=2\\cdot2-1=3$.",
          "Hence $\\boxed{3}$."
        ]
      }
    ],
    "remark": "Insight: an AGP is an arithmetic numerator multiplied by a geometric weight; the shift-and-subtract trick is the discrete analogue of differentiating a geometric series, fusing the two progressions in one move."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "Tetrahedral Numbers Fall Like Dominoes",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "figurate-numbers",
      "tetrahedral",
      "telescoping",
      "partial-fractions"
    ],
    "statement": "The $k$-th tetrahedral number is $T_k=\\dfrac{k(k+1)(k+2)}{6}$ (the sum of the first $k$ triangular numbers). Evaluate \\[\\sum_{k=1}^{\\infty}\\frac{1}{T_k}.\\]",
    "answer": "\\[\\boxed{\\tfrac32}\\]",
    "trap": "Comparing with $\\sum 1/k^3$ or $\\sum 1/T'_k$ (triangular, which sums to $2$) and guessing $2$. The cubic-in-$k$ denominator telescopes in a three-term pattern, not a two-term one; using the triangular-number telescope by mistake gives the wrong answer.",
    "solutions": [
      {
        "name": "Three-term telescope",
        "steps": [
          "$\\dfrac{1}{T_k}=\\dfrac{6}{k(k+1)(k+2)}=3\\left(\\dfrac{1}{k(k+1)}-\\dfrac{1}{(k+1)(k+2)}\\right)$.",
          "Writing $a_k=\\dfrac{1}{k(k+1)}$, the term is $3(a_k-a_{k+1})$, so the partial sum telescopes: $\\sum_{k=1}^{N}\\dfrac{1}{T_k}=3\\left(a_1-a_{N+1}\\right)=3\\left(\\dfrac{1}{1\\cdot2}-\\dfrac{1}{(N+1)(N+2)}\\right)$.",
          "As $N\\to\\infty$ the tail $\\dfrac{1}{(N+1)(N+2)}\\to0$, leaving $3\\cdot\\dfrac12=\\dfrac32$.",
          "Therefore $\\boxed{\\tfrac32}$."
        ]
      },
      {
        "name": "Partial fractions",
        "steps": [
          "$\\dfrac{6}{k(k+1)(k+2)}=\\dfrac{3}{k}-\\dfrac{6}{k+1}+\\dfrac{3}{k+2}$.",
          "Summing over $k=1,\\dots,N$ and shifting indices, the partial sum collapses to $\\dfrac{3}{1}-\\dfrac{3}{2}-\\dfrac{3}{N+1}+\\dfrac{3}{N+2}=\\dfrac{3N(N+3)}{2(N+1)(N+2)}$.",
          "Letting $N\\to\\infty$, the boundary tails $-\\dfrac{3}{N+1}+\\dfrac{3}{N+2}\\to0$ and the surviving constant is $3-\\dfrac32=\\dfrac32$.",
          "Hence $\\boxed{\\tfrac32}$."
        ]
      }
    ],
    "remark": "Insight: figurate numbers carry their own telescoping structure (each is a running total). Recognizing $1/T_k$ as a difference of products of consecutive reciprocals fuses figurate geometry with telescoping. Contrast with the triangular sum $\\sum 1/T'_k=2$ — the extra factor in the denominator is exactly what drops the value to $3/2$."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Triangular Recurrence Unraveled",
    "difficulty": 4,
    "task": "Find L,M",
    "tags": [
      "recurrence",
      "triangular-numbers",
      "closed-form",
      "telescoping",
      "alternating-harmonic"
    ],
    "statement": "A sequence satisfies $b_1=1$ and $b_n=b_{n-1}+n$ for $n\\ge 2$ (so $b_n$ is the $n$-th triangular number). It can be shown that \\[\\sum_{n=1}^{\\infty}\\frac{1}{b_n}=L\\qquad\\text{and}\\qquad \\sum_{n=1}^{\\infty}\\frac{(-1)^{n+1}}{b_n}=M.\\] Find the ordered pair $(L,M)$.",
    "answer": "\\[\\boxed{\\left(2,\\ 4\\ln 2-2\\right)}\\]",
    "trap": "Assuming the alternating sum is just a sign-flipped cousin of the unsigned one and so must telescope to a rational like $2-\\tfrac12=\\tfrac32$ or even to $1$. The unsigned sum genuinely telescopes to $2$, but the alternating one does NOT telescope cleanly: the partial sums of $2\\big(\\tfrac1n-\\tfrac1{n+1}\\big)$ with alternating signs do not collapse, and the value is forced through the alternating harmonic series $\\ln 2=\\sum_{n\\ge1}(-1)^{n+1}/n$. Guessing $M$ rational, or stopping at $M=2\\ln 2-1$ (off by a factor of $2$ in the bracket), is the conceptual error. The true value is the transcendental $M=4\\ln 2-2\\approx 0.7726$.",
    "solutions": [
      {
        "name": "Solve recurrence, then split into two summation worlds",
        "steps": [
          "Summing the recurrence, $b_n=1+2+\\cdots+n=\\dfrac{n(n+1)}{2}$, so $\\dfrac{1}{b_n}=\\dfrac{2}{n(n+1)}=2\\Big(\\dfrac1n-\\dfrac1{n+1}\\Big)$.",
          "Unsigned (telescoping world): $L=2\\displaystyle\\sum_{n\\ge1}\\Big(\\tfrac1n-\\tfrac1{n+1}\\Big)=2\\Big(1-\\lim_{N\\to\\infty}\\tfrac1{N+1}\\Big)=2\\cdot 1=2.$",
          "Alternating (log world): $M=2\\displaystyle\\sum_{n\\ge1}(-1)^{n+1}\\Big(\\tfrac1n-\\tfrac1{n+1}\\Big)=2\\,(S_1-S_2)$ where $S_1=\\sum_{n\\ge1}\\dfrac{(-1)^{n+1}}{n}$ and $S_2=\\sum_{n\\ge1}\\dfrac{(-1)^{n+1}}{n+1}.$",
          "First piece: $S_1=1-\\tfrac12+\\tfrac13-\\cdots=\\ln 2.$ Second piece: reindex $m=n+1$, so $S_2=\\sum_{m\\ge2}\\dfrac{(-1)^{m}}{m}=-\\sum_{m\\ge2}\\dfrac{(-1)^{m-1}}{m}=-(\\ln 2-1)=1-\\ln 2.$",
          "Therefore $M=2\\big(\\ln 2-(1-\\ln 2)\\big)=2(2\\ln 2-1)=4\\ln 2-2.$",
          "Hence $(L,M)=\\big(2,\\ 4\\ln 2-2\\big)$. Note the contrast: one decomposition $1/b_n=2(1/n-1/(n+1))$ yields a rational $2$ under telescoping but a transcendental $4\\ln 2-2$ once signs alternate."
        ]
      },
      {
        "name": "Integral representation of the alternating sum",
        "steps": [
          "Using $\\dfrac1n=\\displaystyle\\int_0^1 x^{n-1}\\,dx$ and $\\dfrac1{n+1}=\\displaystyle\\int_0^1 x^{n}\\,dx$, write $\\dfrac{1}{b_n}=2\\int_0^1\\big(x^{n-1}-x^{n}\\big)\\,dx=2\\int_0^1 x^{n-1}(1-x)\\,dx.$",
          "Then $M=\\displaystyle\\sum_{n\\ge1}(-1)^{n+1}\\frac{1}{b_n}=2\\int_0^1(1-x)\\sum_{n\\ge1}(-1)^{n+1}x^{n-1}\\,dx=2\\int_0^1(1-x)\\cdot\\frac{1}{1+x}\\,dx,$ since $\\sum_{n\\ge1}(-1)^{n+1}x^{n-1}=\\tfrac1{1+x}$ for $|x|<1$ (interchange justified by uniform convergence on $[0,1-\\varepsilon]$ plus Abel's theorem at $x=1$).",
          "Evaluate: $\\dfrac{1-x}{1+x}=\\dfrac{2}{1+x}-1$, so $M=2\\displaystyle\\int_0^1\\Big(\\frac{2}{1+x}-1\\Big)dx=2\\big(2\\ln 2-1\\big)=4\\ln 2-2.$",
          "This independently confirms $M=4\\ln 2-2$, and the same machinery with all-positive signs ($\\sum x^{n-1}=\\tfrac1{1-x}$) gives $L=2\\int_0^1 1\\,dx=2$, matching the telescoping computation."
        ]
      },
      {
        "name": "Numerical confirmation",
        "steps": [
          "$b_n=n(n+1)/2$ gives reciprocals $1,\\tfrac13,\\tfrac16,\\tfrac1{10},\\tfrac1{15},\\dots$",
          "Unsigned partial sums: $\\sum_{n=1}^{N}\\tfrac1{b_n}=2\\big(1-\\tfrac1{N+1}\\big)\\to 2.$",
          "Alternating partial sums: $1-\\tfrac13+\\tfrac16-\\tfrac1{10}+\\tfrac1{15}-\\cdots\\to 0.7725887\\ldots$, which equals $4\\ln 2-2$ (since $4(0.6931472)-2=0.7725887$), not $2\\ln 2-1=0.3862944.$",
          "Therefore $(L,M)=\\big(2,\\ 4\\ln 2-2\\big)$."
        ]
      }
    ],
    "remark": "Insight: the single telescoping split $1/b_n=2(1/n-1/(n+1))$ feeds two completely different summation tools. With like signs it collapses by cancellation to the rational $L=2$; with alternating signs the cancellation breaks and the value is routed through the alternating harmonic series, landing on the transcendental $M=4\\ln 2-2$. One decomposition, two worlds — and the seductive guess $M=2\\ln 2-1$ is exactly half the correct bracket, the classic factor-of-two trap."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "Recurrence Closed Form Then Summed",
    "difficulty": 4,
    "task": "Solve a second-order linear recurrence by its characteristic equation, then sum the resulting series.",
    "tags": [
      "linear recurrence",
      "characteristic equation",
      "infinite geometric series",
      "hybrid"
    ],
    "statement": "A sequence is defined by $a_1=1$, $a_2=5$, and $a_{n+1}=5a_n-6a_{n-1}$ for $n\\ge 2$. Evaluate the infinite sum $\\displaystyle S=\\sum_{n=1}^{\\infty}\\frac{a_n}{6^{\\,n}}.$",
    "answer": "$\\boxed{\\dfrac{1}{2}}$",
    "trap": "Seeing the recurrence, many students try to sum the series directly by manipulating $S$ through the recurrence (shifting indices and substituting $5a_n-6a_{n-1}$), which is error-prone and often produces a wrong constant. The clean route is to first solve the recurrence in closed form, so that the single sum splits into two ordinary geometric series.",
    "solutions": [
      {
        "name": "Characteristic equation, then split into two geometric series",
        "steps": [
          "The recurrence $a_{n+1}=5a_n-6a_{n-1}$ has characteristic equation $x^2-5x+6=0$, i.e. $(x-2)(x-3)=0$, with roots $2$ and $3$. Hence $a_n=A\\cdot 2^n+B\\cdot 3^n$.",
          "Fit the initial terms: $a_1=2A+3B=1$ and $a_2=4A+9B=5$. Subtracting twice the first from the second gives $3B=3$, so $B=1$ and $A=-1$. Thus $a_n=3^n-2^n$.",
          "Therefore $\\dfrac{a_n}{6^n}=\\dfrac{3^n-2^n}{6^n}=\\left(\\dfrac{1}{2}\\right)^n-\\left(\\dfrac{1}{3}\\right)^n$, and the sum splits as $S=\\sum_{n=1}^{\\infty}\\left(\\tfrac12\\right)^n-\\sum_{n=1}^{\\infty}\\left(\\tfrac13\\right)^n.$",
          "Each piece is an infinite geometric series with ratio $<1$: $\\dfrac{1/2}{1-1/2}-\\dfrac{1/3}{1-1/3}=1-\\dfrac12=\\dfrac12.$"
        ]
      },
      {
        "name": "Telescoping the partial sums via the closed form",
        "steps": [
          "From the characteristic equation $a_n=3^n-2^n$ (roots $2,3$ as above), write $\\dfrac{a_n}{6^n}=\\dfrac{1}{2^n}-\\dfrac{1}{3^n}.$",
          "Let $u_n=\\dfrac{1}{2^{n-1}}$ and $v_n=\\dfrac{1}{3^{n-1}}$. Then $\\dfrac{1}{2^n}=u_n-u_{n+1}$ and $\\dfrac{1}{3^n}=\\tfrac12\\,(v_n-v_{n+1})$, since $u_n-u_{n+1}=\\tfrac{1}{2^{n-1}}-\\tfrac{1}{2^{n}}=\\tfrac{1}{2^n}$ and $v_n-v_{n+1}=\\tfrac{1}{3^{n-1}}-\\tfrac{1}{3^{n}}=\\tfrac{2}{3^n}.$",
          "Both telescopes collapse: $\\sum_{n=1}^{N}\\tfrac{1}{2^n}=u_1-u_{N+1}=1-\\tfrac{1}{2^N}$ and $\\sum_{n=1}^{N}\\tfrac{1}{3^n}=\\tfrac12(v_1-v_{N+1})=\\tfrac12\\!\\left(1-\\tfrac{1}{3^N}\\right).$",
          "So the $N$-th partial sum is $S_N=\\left(1-\\tfrac{1}{2^N}\\right)-\\tfrac12\\!\\left(1-\\tfrac{1}{3^N}\\right).$ Letting $N\\to\\infty$ the negative tails vanish and $S=1-\\tfrac12=\\dfrac12.$"
        ]
      }
    ],
    "remark": "**Insight.** A recurrence and a sum look like two separate problems, but the bridge is the closed form: once $a_n=3^n-2^n$ appears, dividing by $6^n$ deliberately splits the base into $\\tfrac12$ and $\\tfrac13$, turning one mysterious series into two textbook geometric series. The characteristic roots $2,3$ were chosen so that $6=2\\cdot 3$ makes the division clean."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Square Weight",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "agp",
      "double-differentiation",
      "series",
      "generating-function"
    ],
    "statement": "Evaluate \\[\\sum_{n=1}^{\\infty}\\frac{n^{2}+1}{2^{\\,n}}.\\]",
    "answer": "\\[\\boxed{7}\\]",
    "trap": "Applying a single arithmetico-geometric shift as if $n^2+1$ were linear. A quadratic weight needs the $\\sum n^2x^n$ machinery (one $x\\frac{d}{dx}$ applied twice); one perturbation step alone leaves a residual $\\sum n/2^n$ that is silently dropped, undershooting the answer.",
    "solutions": [
      {
        "name": "Differentiate the geometric series twice",
        "steps": [
          "From $\\sum_{n\\ge0}x^n=\\dfrac{1}{1-x}$, apply $x\\dfrac{d}{dx}$ once: $\\sum_{n\\ge1}nx^n=\\dfrac{x}{(1-x)^2}$, and again: $\\sum_{n\\ge1}n^2x^n=\\dfrac{x(1+x)}{(1-x)^3}$.",
          "At $x=\\tfrac12$: $\\sum n^2/2^n=\\dfrac{\\tfrac12\\cdot\\tfrac32}{(1/2)^3}=\\dfrac{3/4}{1/8}=6$, and $\\sum 1/2^n=1$.",
          "Add: $\\sum\\dfrac{n^2+1}{2^n}=6+1=7$.",
          "Therefore $\\boxed{7}$."
        ]
      },
      {
        "name": "Double perturbation",
        "steps": [
          "Let $A=\\sum n^2/2^n$. Then $A-\\tfrac12 A=\\sum_{n\\ge1}\\dfrac{n^2-(n-1)^2}{2^n}=\\sum\\dfrac{2n-1}{2^n}=2\\!\\sum\\dfrac{n}{2^n}-\\!\\sum\\dfrac{1}{2^n}=2\\cdot2-1=3.$",
          "So $\\tfrac12A=3\\Rightarrow A=6$.",
          "Then the required sum is $A+\\sum 2^{-n}=6+1=7$.",
          "Hence $\\boxed{7}$."
        ]
      }
    ],
    "remark": "Insight: each extra power of $n$ costs one application of the operator $x\\,d/dx$. The quadratic weight chains two AGP steps, with the second step reusing the linear AGP result, a true fusion of layered progressions."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "Fibonacci's Hidden Collapse",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "fibonacci",
      "recurrence",
      "telescoping",
      "series"
    ],
    "statement": "Let $F_1=F_2=1$ and $F_{n+2}=F_{n+1}+F_n$ be the Fibonacci numbers. Evaluate \\[\\sum_{n=1}^{\\infty}\\frac{1}{F_n\\,F_{n+2}}.\\]",
    "answer": "\\[\\boxed{1}\\]",
    "trap": "Reaching for the Binet formula and $1/\\varphi$-style geometric sums, which converge but obscure the exact value and tempt a $\\varphi$-laden answer. The clean route is the recurrence identity $F_{n+2}-F_n=F_{n+1}$, which turns the product into a telescoping difference; missing it leaves an intractable closed form.",
    "solutions": [
      {
        "name": "Recurrence-driven telescope",
        "steps": [
          "Use $F_{n+2}-F_n=F_{n+1}$ to write $\\dfrac{1}{F_nF_{n+2}}=\\dfrac{1}{F_{n+1}}\\cdot\\dfrac{F_{n+2}-F_n}{F_nF_{n+2}}=\\dfrac{1}{F_nF_{n+1}}-\\dfrac{1}{F_{n+1}F_{n+2}}$.",
          "Partial sum telescopes: $\\sum_{n=1}^{N}=\\dfrac{1}{F_1F_2}-\\dfrac{1}{F_{N+1}F_{N+2}}=1-\\dfrac{1}{F_{N+1}F_{N+2}}$.",
          "Since $F_{N+1}F_{N+2}\\to\\infty$, the limit is $1$.",
          "Therefore $\\boxed{1}$."
        ]
      },
      {
        "name": "Convergence sanity check plus identity",
        "steps": [
          "Binet gives $F_n\\sim\\varphi^n/\\sqrt5$, so $1/(F_nF_{n+2})\\sim 5\\varphi^{-2n-2}$ and the series converges absolutely.",
          "Apply the telescoping identity above; the closed partial sum $1-\\dfrac{1}{F_{N+1}F_{N+2}}$ has limit $1$.",
          "No $\\varphi$ survives because the recurrence identity is exact.",
          "Hence $\\boxed{1}$."
        ]
      }
    ],
    "remark": "Insight: the defining recurrence $F_{n+2}-F_n=F_{n+1}$ IS the telescoping engine. Fusing the Fibonacci recurrence with a partial-fraction-style split makes a transcendental-looking sum collapse to a clean integer."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "Square Roots, Penned by a Telescope",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "floor-function",
      "telescoping-bounds",
      "inequality",
      "partial-sums"
    ],
    "statement": "Determine $\\left\\lfloor S\\right\\rfloor$ where \\[S=\\sum_{n=1}^{9999}\\frac{1}{\\sqrt{n}}.\\]",
    "answer": "\\[\\boxed{198}\\]",
    "trap": "Approximating $S\\approx\\int_1^{9999}x^{-1/2}\\,dx=2\\sqrt{9999}-2\\approx197.98$ and reading the floor as $197$. The integral undercounts (the integrand is decreasing, so the left-endpoint sum exceeds the integral); only the two-sided telescoping bound pins $S$ strictly between $198$ and $199$.",
    "solutions": [
      {
        "name": "Two-sided telescoping bounds",
        "steps": [
          "For each $n$, $2(\\sqrt{n+1}-\\sqrt{n})=\\dfrac{2}{\\sqrt{n+1}+\\sqrt{n}}<\\dfrac{1}{\\sqrt n}<\\dfrac{2}{\\sqrt n+\\sqrt{n-1}}=2(\\sqrt n-\\sqrt{n-1})$ for $n\\ge2$; the left inequality also holds at $n=1$.",
          "Lower bound: $S>\\sum_{n=1}^{9999}2(\\sqrt{n+1}-\\sqrt n)=2(\\sqrt{10000}-1)=2(100-1)=198$.",
          "Upper bound: $S<1+\\sum_{n=2}^{9999}2(\\sqrt n-\\sqrt{n-1})=1+2(\\sqrt{9999}-1)=2\\sqrt{9999}-1\\approx198.99<199$.",
          "Thus $198<S<199$, so $\\lfloor S\\rfloor=\\boxed{198}$."
        ]
      },
      {
        "name": "Integral plus correction",
        "steps": [
          "The integral $\\int_1^{9999}x^{-1/2}\\,dx=2\\sqrt{9999}-2\\approx197.98$ is a lower-ish estimate; the Euler–binomial correction $+\\tfrac12(f(1)+f(9999))\\approx0.505$ pushes $S$ to about $198.53$.",
          "To make it rigorous, use the telescoping inequalities above which give $198<S<199$ exactly.",
          "Hence the floor is $198$.",
          "Therefore $\\boxed{198}$."
        ]
      }
    ],
    "remark": "Insight: a divergent-looking partial sum is tamed by sandwiching each term between two telescoping differences; fusing convergence-style bounding with an exact telescope is what forces the integer floor."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Mersenne Cascade",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "recurrence",
      "closed-form",
      "telescoping",
      "geometric"
    ],
    "statement": "A sequence is defined by $a_0=0$ and $a_n=3a_{n-1}+1$ for $n\\ge1$. After finding a closed form for $a_n$, evaluate \\[\\sum_{n=1}^{\\infty}\\frac{3^{\\,n}}{(3^{\\,n}-1)(3^{\\,n+1}-1)}.\\]",
    "answer": "\\[\\boxed{\\tfrac14}\\]",
    "trap": "Approximating each factor in the denominator by its leading power, $\\frac{3^n}{(3^n-1)(3^{n+1}-1)}\\approx\\frac{3^n}{3^n\\cdot 3^{n+1}}=3^{-n-1}$, and summing the geometric series $\\sum_{n\\ge1}3^{-n-1}=\\tfrac16$ as if it were the value. This is wrong twice over: enlarging each denominator factor makes the fraction smaller, so $3^{-n-1}$ is a strict lower bound (the summand exceeds it for every $n$), and a one-sided comparison can never deliver an exact sum anyway. The true value requires recognizing $a_n=\\tfrac{3^n-1}{2}$ and the exact telescoping identity, giving $\\tfrac14$, not $\\tfrac16$.",
    "solutions": [
      {
        "name": "Solve recurrence, then telescope",
        "steps": [
          "The affine recurrence $a_n=3a_{n-1}+1$ with $a_0=0$ solves to $a_n=\\dfrac{3^n-1}{2}$ (homogeneous part $3^n$, particular part $-\\tfrac12$); a quick check gives $a_1=1,\\;a_2=4,\\;a_3=13$, matching $1,4,13$.",
          "Since $a_{n+1}-a_n=\\dfrac{3^{n+1}-3^n}{2}=3^n$, we have $\\dfrac{1}{a_n}-\\dfrac{1}{a_{n+1}}=\\dfrac{a_{n+1}-a_n}{a_na_{n+1}}=\\dfrac{3^n}{\\frac{3^n-1}{2}\\cdot\\frac{3^{n+1}-1}{2}}=\\dfrac{4\\cdot3^n}{(3^n-1)(3^{n+1}-1)}.$",
          "Hence the summand equals $\\tfrac14\\big(\\tfrac1{a_n}-\\tfrac1{a_{n+1}}\\big)$, and telescoping gives $\\sum_{n=1}^{N}=\\tfrac14\\big(\\tfrac1{a_1}-\\tfrac1{a_{N+1}}\\big)\\to\\tfrac14\\cdot\\tfrac11=\\tfrac14$ as $N\\to\\infty$ (since $a_1=1$ and $a_{N+1}\\to\\infty$).",
          "Therefore $\\boxed{\\tfrac14}$."
        ]
      },
      {
        "name": "Direct partial-fraction in $3^n$",
        "steps": [
          "Write $u_n=3^n$, so the summand is $\\dfrac{u_n}{(u_n-1)(3u_n-1)}$. One checks the exact identity $\\dfrac12\\Big(\\dfrac{1}{3^n-1}-\\dfrac{1}{3^{n+1}-1}\\Big)=\\dfrac{1}{2}\\cdot\\dfrac{(3^{n+1}-1)-(3^n-1)}{(3^n-1)(3^{n+1}-1)}=\\dfrac{1}{2}\\cdot\\dfrac{2\\cdot3^n}{(3^n-1)(3^{n+1}-1)}=\\dfrac{3^n}{(3^n-1)(3^{n+1}-1)}.$",
          "Telescoping the partial sum: $\\sum_{n=1}^{N}=\\dfrac12\\Big(\\dfrac{1}{3-1}-\\dfrac{1}{3^{N+1}-1}\\Big)\\to\\dfrac12\\cdot\\dfrac12=\\dfrac14$ as $N\\to\\infty$.",
          "The same reciprocal structure is exactly $\\tfrac14\\big(1/a_n-1/a_{n+1}\\big)$ with $a_n=(3^n-1)/2$, so the two methods agree.",
          "Hence $\\boxed{\\tfrac14}$."
        ]
      }
    ],
    "remark": "Insight: solving the affine recurrence to $a_n=(3^n-1)/2$ is step one; recognizing that the messy summand is precisely $\\tfrac14\\big(1/a_n-1/a_{n+1}\\big)$ is step two. The geometric look of $3^{-n-1}$ tempts a comparison shortcut, but a one-sided bound only certifies convergence —{} the cascade telescopes exactly to $\\tfrac14$."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "A Recurrence Fed Into an AGP",
    "difficulty": 5,
    "task": "Evaluate the infinite sum",
    "tags": [
      "linear-recurrence",
      "arithmetico-geometric",
      "infinite-gp",
      "closed-form",
      "hybrid"
    ],
    "statement": "A sequence is defined by $a_0=0$, $a_1=1$, and the linear recurrence $a_n=\\dfrac{5}{6}\\,a_{n-1}-\\dfrac{1}{6}\\,a_{n-2}$ for $n\\ge 2$. Form the arithmetico-geometric weighting $b_n=n\\,a_n$ and evaluate $$S=\\sum_{n=1}^{\\infty} b_n=\\sum_{n=1}^{\\infty} n\\,a_n.$$",
    "answer": "$$\\boxed{S=\\dfrac{15}{2}}$$",
    "trap": "Solving the recurrence, spotting that $\\sum_{n\\ge1}a_n=3$ converges so neatly, and reporting $S=3$. That confuses $\\sum a_n$ with $\\sum n\\,a_n$: the index $n$ is a genuine arithmetic weight, so the series is an \\emph{arithmetico-geometric} one and its value is strictly larger. A second trap is using the plain infinite-GP formula $\\dfrac{r}{1-r}$ in place of the AGP formula $\\dfrac{r}{(1-r)^2}$, which also yields the wrong value $3$.",
    "solutions": [
      {
        "name": "Closed form, then two AGP sums",
        "steps": [
          "The characteristic equation of $a_n=\\tfrac56 a_{n-1}-\\tfrac16 a_{n-2}$ is $x^2-\\tfrac56 x+\\tfrac16=0$, i.e. $6x^2-5x+1=(3x-1)(2x-1)=0$, with roots $x=\\tfrac13,\\tfrac12$.",
          "So $a_n=A\\left(\\tfrac12\\right)^n+B\\left(\\tfrac13\\right)^n$. From $a_0=0$ we get $A+B=0$, and from $a_1=1$ we get $\\tfrac{A}{2}+\\tfrac{B}{3}=1$; solving gives $A=6,\\ B=-6$, hence $a_n=6\\left[\\left(\\tfrac12\\right)^n-\\left(\\tfrac13\\right)^n\\right]$.",
          "Therefore $S=\\sum_{n\\ge1} n\\,a_n=6\\left[\\sum_{n\\ge1} n\\left(\\tfrac12\\right)^n-\\sum_{n\\ge1} n\\left(\\tfrac13\\right)^n\\right]$, a difference of two arithmetico-geometric series.",
          "Using $\\sum_{n\\ge1} n\\,r^n=\\dfrac{r}{(1-r)^2}$ for $|r|<1$: with $r=\\tfrac12$ the sum is $\\dfrac{1/2}{(1/2)^2}=2$, and with $r=\\tfrac13$ it is $\\dfrac{1/3}{(2/3)^2}=\\dfrac34$.",
          "Hence $S=6\\left(2-\\tfrac34\\right)=6\\cdot\\tfrac54=\\boxed{\\dfrac{15}{2}}$."
        ]
      },
      {
        "name": "Derive the AGP sum by telescoping",
        "steps": [
          "First get the closed form as above: $a_n=6\\left[\\left(\\tfrac12\\right)^n-\\left(\\tfrac13\\right)^n\\right]$, so $S=6\\big(T(\\tfrac12)-T(\\tfrac13)\\big)$ where $T(r)=\\sum_{n\\ge1} n\\,r^n$.",
          "Evaluate $T(r)$ from scratch: $T(r)-r\\,T(r)=\\sum_{n\\ge1} n r^n-\\sum_{n\\ge1} n r^{n+1}=\\sum_{n\\ge1} r^n=\\dfrac{r}{1-r}$ (an infinite GP), the index shift telescoping the arithmetic weight.",
          "Thus $(1-r)\\,T(r)=\\dfrac{r}{1-r}$, giving $T(r)=\\dfrac{r}{(1-r)^2}$. Then $T(\\tfrac12)=2$ and $T(\\tfrac13)=\\tfrac34$.",
          "Therefore $S=6\\left(2-\\tfrac34\\right)=\\boxed{\\dfrac{15}{2}}$."
        ]
      }
    ],
    "remark": "**Insight.** Three ideas chain here: a **linear recurrence** collapses to a difference of two geometric terms, the extra factor $n$ promotes each geometric piece to an **arithmetico-geometric** series, and the AGP itself is summed by an index-shift that **telescopes** the weight into a plain GP. The decisive trap is treating the $n$ as decoration: $\\sum a_n=3$ but $\\sum n\\,a_n=\\tfrac{15}{2}$, because the weight $n$ is an \\textbf{arithmetic} factor, not a constant."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "When does the tail overtake? $b_n>a_n$",
    "difficulty": 3,
    "task": "Find the least such natural number.",
    "pyq": {
      "year": 2006,
      "paper": "1",
      "qno": "35"
    },
    "tags": [
      "geometric series",
      "inequality on partial sums",
      "2006"
    ],
    "figure": "",
    "statement": "Let $$a_n=\\frac34-\\left(\\frac34\\right)^2+\\left(\\frac34\\right)^3-\\cdots+(-1)^{n-1}\\left(\\frac34\\right)^n$$ and let $b_n=1-a_n$. Find the minimum natural number $n_0$ such that $b_n>a_n$ for all $n\\ge n_0$.",
    "answer": "$\\boxed{6}$",
    "trap": "$a_n$ is a finite alternating GP, so its sign and value oscillate with $n$. Students who replace $a_n$ by its infinite-series limit $\\tfrac37$ (getting $b_n>a_n$ always) forget that for a partial sum the $(-\\tfrac34)^n$ term is not negligible — whether $b_n>a_n$ depends on the parity of $n$, and only for $n$ large enough does the inequality hold for every subsequent term.",
    "solutions": [
      {
        "name": "Closed form of the finite alternating GP",
        "steps": [
          "The sum is a finite geometric series with first term $\\frac34$ and ratio $-\\frac34$, having $n$ terms: $$a_n=\\frac{\\frac34\\left(1-\\left(-\\frac34\\right)^n\\right)}{1-\\left(-\\frac34\\right)}=\\frac{\\frac34\\left(1-\\left(-\\frac34\\right)^n\\right)}{\\frac74}=\\frac37\\left(1-\\left(-\\tfrac34\\right)^n\\right).$$",
          "Since $b_n=1-a_n$, the condition $b_n>a_n$ is $1-a_n>a_n$, i.e. $a_n<\\frac12$.",
          "Substitute the closed form: $\\frac37\\left(1-\\left(-\\tfrac34\\right)^n\\right)<\\frac12$, i.e. $1-\\left(-\\tfrac34\\right)^n<\\frac76$, i.e. $\\left(-\\tfrac34\\right)^n>-\\frac16$.",
          "When $n$ is even, $\\left(-\\tfrac34\\right)^n=\\left(\\tfrac34\\right)^n>0>-\\tfrac16$, so the inequality holds automatically for every even $n$.",
          "When $n$ is odd, $\\left(-\\tfrac34\\right)^n=-\\left(\\tfrac34\\right)^n$, so we need $-\\left(\\tfrac34\\right)^n>-\\tfrac16$, i.e. $\\left(\\tfrac34\\right)^n<\\tfrac16$.",
          "Check odd $n$: $\\left(\\tfrac34\\right)^5=\\tfrac{243}{1024}\\approx0.237>\\tfrac16$ fails, while $\\left(\\tfrac34\\right)^7=\\tfrac{2187}{16384}\\approx0.133<\\tfrac16$ holds. So $n=5$ is the last failing index (odd $n=5$ violates it).",
          "Hence the inequality holds for all $n>5$, and $n=5$ itself fails; therefore the minimum $n_0$ with $b_n>a_n$ for every $n>n_0$ is $\\boxed{6}$."
        ]
      },
      {
        "name": "Term-by-term numerical scan",
        "steps": [
          "Recall the condition reduces to $a_n<\\tfrac12$, equivalently $\\left(-\\tfrac34\\right)^n>-\\tfrac16\\approx-0.1667$.",
          "Tabulate $\\left(-\\tfrac34\\right)^n$: $n=1:-0.75$; $n=2:0.5625$; $n=3:-0.4219$; $n=4:0.3164$; $n=5:-0.2373$; $n=6:0.1780$; $n=7:-0.1335$.",
          "Compare each odd entry to $-0.1667$: $n=1,3,5$ give $-0.75,-0.4219,-0.2373$, all $<-0.1667$, so those fail; the even entries are positive and always pass.",
          "The first index from which every later term satisfies $\\left(-\\tfrac34\\right)^n>-0.1667$ is $n=6$: from $n=6$ on, odd terms are $-0.1335,\\ldots$ (all $>-0.1667$) and even terms stay positive.",
          "Thus the last index that can violate the inequality is $n=5$, so $n_0=6$ is the smallest value guaranteeing $b_n>a_n$ for all $n>n_0$. $\\boxed{6}$"
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE 2006, Paper 1, Q35. The whole difficulty hides in the parity of $n$: the infinite-sum intuition is right for even $n$ but the odd tail is what pins down $n_0=6$."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Sum of the running sums: $\\sum V_r$",
    "difficulty": 3,
    "task": "Identify the correct closed form.",
    "pyq": {
      "year": 2007,
      "paper": "1",
      "qno": "61"
    },
    "tags": [
      "arithmetic progression",
      "sum of series",
      "summation formulas",
      "2007"
    ],
    "figure": "",
    "statement": "Let $V_r$ denote the sum of the first $r$ terms of an arithmetic progression (A.P.) whose first term is $r$ and whose common difference is $(2r-1)$. Let $T_r=V_{r+1}-V_r-2$ and $Q_r=T_{r+1}-T_r$ for $r=1,2,\\ldots$\n\nThe sum $V_1+V_2+\\cdots+V_n$ is\n\n(A) $\\dfrac{1}{12}n(n+1)(3n^2-n+1)$\n\n(B) $\\dfrac{1}{12}n(n+1)(3n^2+n+2)$\n\n(C) $\\dfrac{1}{2}n(2n^2-n+1)$\n\n(D) $\\dfrac{1}{3}(2n^3-2n+3)$",
    "answer": "(B)",
    "trap": "The A.P. defining $V_r$ has a first term ($r$) and a common difference ($2r-1$) that BOTH depend on the index $r$ — so $V_r$ is not a term of any single A.P., it is a cubic polynomial in $r$. Treating $r$ as fixed while applying the A.P. sum formula is correct, but forgetting that fact and trying to sum $V_r$ as a standard series in $r$ (rather than expanding to a cubic and using $\\sum r^3,\\sum r^2,\\sum r$) is where students go wrong.",
    "solutions": [
      {
        "name": "Expand $V_r$ to a cubic, then apply power sums",
        "steps": [
          "For the inner A.P. with first term $r$ and common difference $(2r-1)$, the sum of its first $r$ terms is $$V_r=\\frac{r}{2}\\Big[2r+(r-1)(2r-1)\\Big].$$",
          "Expand the bracket: $2r+(r-1)(2r-1)=2r+(2r^2-3r+1)=2r^2-r+1.$",
          "Hence $V_r=\\frac{r}{2}(2r^2-r+1)=\\frac{1}{2}\\left(2r^3-r^2+r\\right).$",
          "Sum over $r=1$ to $n$: $$\\sum_{r=1}^{n}V_r=\\frac12\\left(2\\sum r^3-\\sum r^2+\\sum r\\right).$$",
          "Insert the standard power sums $\\sum r^3=\\frac{n^2(n+1)^2}{4}$, $\\sum r^2=\\frac{n(n+1)(2n+1)}{6}$, $\\sum r=\\frac{n(n+1)}{2}$: $$\\sum V_r=\\frac12\\left(\\frac{n^2(n+1)^2}{2}-\\frac{n(n+1)(2n+1)}{6}+\\frac{n(n+1)}{2}\\right).$$",
          "Factor out $\\frac{n(n+1)}{2}$: $$\\sum V_r=\\frac{n(n+1)}{4}\\left(n(n+1)-\\frac{2n+1}{3}+1\\right)=\\frac{n(n+1)}{4}\\cdot\\frac{3n^2+3n-2n-1+3}{3}.$$",
          "Simplify the numerator: $3n^2+n+2$, giving $$\\sum V_r=\\frac{n(n+1)}{12}\\left(3n^2+n+2\\right),$$ which is option (B)."
        ]
      },
      {
        "name": "Fit the cubic-in-$n$ by matching small cases",
        "steps": [
          "$\\sum_{r=1}^n V_r$ is a degree-4 polynomial in $n$ (since $V_r$ is cubic in $r$), so it is fully pinned down by a few values. Compute $V_r=\\frac12(2r^3-r^2+r)$: $V_1=1$, $V_2=7$, $V_3=24$, $V_4=58$.",
          "Partial sums: $P_1=1$, $P_2=8$, $P_3=32$, $P_4=90$.",
          "Test option (B) $\\frac{1}{12}n(n+1)(3n^2+n+2)$: at $n=1$, $\\frac{1}{12}(1)(2)(6)=1$ ✓; at $n=2$, $\\frac{1}{12}(2)(3)(16)=8$ ✓; at $n=3$, $\\frac{1}{12}(3)(4)(32)=32$ ✓; at $n=4$, $\\frac{1}{12}(4)(5)(58)=\\frac{1160}{12}\\cdot?$ — recompute: $3n^2+n+2=48+4+2=54$, so $\\frac{1}{12}(4)(5)(54)=90$ ✓.",
          "Eliminate the others quickly at $n=2$: (A) $\\frac{1}{12}(2)(3)(3\\cdot4-2+1)=\\frac12\\cdot11=5.5\\ne8$; (C) $\\frac12(2)(2\\cdot4-2+1)=7\\ne8$; (D) $\\frac13(16-4+3)=5\\ne8$.",
          "Only (B) reproduces all four partial sums, so $\\sum V_r=\\frac{1}{12}n(n+1)(3n^2+n+2)$ — option (B)."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE 2007, Paper 1, Q61 (paragraph Q61–63). The key realisation is that an A.P. whose parameters depend on the outer index collapses to a plain cubic in $r$, after which everything is routine power-sum bookkeeping."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "The Nature of $T_r$",
    "difficulty": 3,
    "task": "Decide what kind of number $T_r$ always is.",
    "pyq": {
      "year": 2007,
      "paper": "1",
      "qno": "62"
    },
    "tags": [
      "arithmetic progression",
      "general term",
      "factorisation",
      "2007"
    ],
    "figure": "",
    "statement": "Let $V_r$ denote the sum of the first $r$ terms of an arithmetic progression whose first term is $r$ and whose common difference is $(2r-1)$. Define $T_r = V_{r+1} - V_r - 2$ and $Q_r = T_{r+1} - T_r$ for $r = 1, 2, \\ldots$\n\nThen $T_r$ is always\n\n(A) an odd number\n\n(B) an even number\n\n(C) a prime number\n\n(D) a composite number",
    "answer": "(D)",
    "trap": "The first term of an A.P. is the letter $r$, but the common difference $(2r-1)$ also depends on that same $r$ — so for each fixed $r$ you have a *different* A.P., and $V_r$ is a genuine cubic in $r$, not a linear term of one fixed progression. Students who treat $V_r$ as an ordinary A.P. sum with constant difference get the wrong polynomial. Also, $T_r=(r+1)(3r-1)$ is composite for every $r\\ge 1$, but one must confirm *both* factors exceed $1$ (at $r=1$ they are $2$ and $2$), otherwise a prime could slip through.",
    "solutions": [
      {
        "name": "Direct sum formula for $V_r$",
        "steps": [
          "The $r$-th progression has first term $r$ and common difference $(2r-1)$, so its first-$r$-terms sum is $V_r=\\dfrac{r}{2}\\bigl[2r+(r-1)(2r-1)\\bigr]$.",
          "Simplify the bracket: $2r+(r-1)(2r-1)=2r+(2r^2-3r+1)=2r^2-r+1$.",
          "Hence $V_r=\\dfrac{r}{2}(2r^2-r+1)=\\dfrac{2r^3-r^2+r}{2}$.",
          "Now compute $V_{r+1}-V_r=\\dfrac{1}{2}\\bigl[2(r+1)^3-(r+1)^2+(r+1)-(2r^3-r^2+r)\\bigr]$.",
          "Expand: $2(r+1)^3=2r^3+6r^2+6r+2$ and $-(r+1)^2=-(r^2+2r+1)$ and $+(r+1)$. Collecting, the bracket equals $6r^2+4r+2$, so $V_{r+1}-V_r=3r^2+2r+1$.",
          "Therefore $T_r=V_{r+1}-V_r-2=3r^2+2r-1$.",
          "Factor the quadratic: $3r^2+2r-1=(3r-1)(r+1)$.",
          "For every integer $r\\ge 1$ we have $r+1\\ge 2$ and $3r-1\\ge 2$, so $T_r$ is a product of two integers each at least $2$ — hence composite. Answer (D)."
        ]
      },
      {
        "name": "Telescoping interpretation of $V_{r+1}-V_r$",
        "steps": [
          "Instead of expanding the cubic, view $V_{r+1}-V_r$ as the difference of two whole progression-sums and evaluate a small case to fix the pattern.",
          "Compute the first values directly: $V_1=1$ (single term $1$); $V_2$ uses first term $2$, difference $3$: $V_2=2+5=7$; $V_3$ uses first term $3$, difference $5$: $V_3=3+8+13=24$; $V_4$ uses first term $4$, difference $7$: $V_4=4+11+18+25=58$.",
          "So $V_2-V_1=6$, $V_3-V_2=17$, $V_4-V_3=34$; subtracting $2$ gives $T_1=4$, $T_2=15$, $T_3=32$.",
          "These match $3r^2+2r-1$ at $r=1,2,3$ (values $4,15,32$), confirming $T_r=3r^2+2r-1$ without algebraic expansion.",
          "Read off the factorisation from the data: $T_1=4=2\\cdot2$, $T_2=15=3\\cdot5$, $T_3=32=4\\cdot8$ — in each case $T_r=(r+1)(3r-1)$, since $(2)(2),(3)(5),(4)(8)$ are exactly $(r+1)(3r-1)$.",
          "Both factors are integers $\\ge 2$ for all $r\\ge1$, so $T_r$ is always composite — answer (D). (Note $T_2=15$ is odd and $T_1=4$ is even, so (A) and (B) are ruled out; $T_2=15$ is not prime, ruling out (C).)"
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE 2007, Paper 1, Q62. The whole paragraph hinges on recognising that $V_r$ is a cubic in $r$; once $T_r=(r+1)(3r-1)$ is factored, compositeness is immediate and the odd/even/prime distractors collapse under a single small example."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "The Second Difference $Q_r$",
    "difficulty": 3,
    "task": "Identify the correct statement about the sequence $Q_r$.",
    "pyq": {
      "year": 2007,
      "paper": "1",
      "qno": "63"
    },
    "tags": [
      "arithmetic progression",
      "difference sequence",
      "common difference",
      "2007"
    ],
    "figure": "",
    "statement": "Let $V_r$ denote the sum of the first $r$ terms of an arithmetic progression whose first term is $r$ and whose common difference is $(2r-1)$. Define $T_r = V_{r+1} - V_r - 2$ and $Q_r = T_{r+1} - T_r$ for $r = 1, 2, \\ldots$\n\nWhich one of the following is a correct statement?\n\n(A) $Q_1, Q_2, Q_3, \\ldots$ are in A.P. with common difference $5$\n\n(B) $Q_1, Q_2, Q_3, \\ldots$ are in A.P. with common difference $6$\n\n(C) $Q_1, Q_2, Q_3, \\ldots$ are in A.P. with common difference $11$\n\n(D) $Q_1 = Q_2 = Q_3 = \\cdots$",
    "answer": "(B)",
    "trap": "Two traps stack here. First, $Q_r$ is the *first* difference of $T_r$, but because $T_r$ is quadratic, the tempting shortcut is to think its differences are constant (that only happens for the *second* difference of a quadratic) — so option (D) baits anyone who miscounts the degree. Second, having found $Q_r=6r+5$, one must read the common difference of the sequence $Q_r$ (which is $6$, the coefficient of $r$), not the leading constant $5$ or the value $Q_1=11$ — exactly the numbers planted in options (A) and (C).",
    "solutions": [
      {
        "name": "From the closed form $T_r=3r^2+2r-1$",
        "steps": [
          "As in the companion problem, $V_{r+1}-V_r=3r^2+2r+1$, so $T_r=V_{r+1}-V_r-2=3r^2+2r-1$.",
          "Then $Q_r=T_{r+1}-T_r=\\bigl[3(r+1)^2+2(r+1)-1\\bigr]-\\bigl[3r^2+2r-1\\bigr]$.",
          "Expand the first bracket: $3(r^2+2r+1)+2r+2-1=3r^2+6r+3+2r+1=3r^2+8r+4$.",
          "Subtract: $Q_r=(3r^2+8r+4)-(3r^2+2r-1)=6r+5$.",
          "So $Q_r=6r+5$ is linear in $r$; its successive terms $Q_1=11,\\ Q_2=17,\\ Q_3=23,\\ldots$ form an A.P.",
          "The common difference is $Q_{r+1}-Q_r=6(r+1)+5-(6r+5)=6$. Hence (B)."
        ]
      },
      {
        "name": "Finite-difference bookkeeping",
        "steps": [
          "For any quadratic $T_r=Ar^2+Br+C$, the first difference $T_{r+1}-T_r$ is linear with leading coefficient $2A$ and the sequence of these first differences has constant common difference equal to $2A$ as well.",
          "Here $T_r=3r^2+2r-1$, so $A=3$; therefore the difference sequence $Q_r$ is an A.P. whose common difference is $2A=6$ — immediately giving (B) without expanding.",
          "To confirm and to kill the distractors, tabulate: $T_1=4,\\ T_2=15,\\ T_3=32,\\ T_4=55$.",
          "First differences: $Q_1=15-4=11,\\ Q_2=32-15=17,\\ Q_3=55-32=23$.",
          "Successive gaps: $17-11=6$ and $23-17=6$, a constant $6$ — so the $Q_r$ are in A.P. with common difference $6$.",
          "Note $Q_1=11$ (the number in option C) is merely the first *term*, and $5$ (option A) is only the constant in $Q_r=6r+5$; neither is the common difference. And $Q_r$ is plainly not constant, ruling out (D). Answer (B)."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE 2007, Paper 1, Q63. A clean finite-difference fact does all the work: the first difference of a quadratic $Ar^2+Br+C$ is an A.P. with common difference $2A$, so the answer $6=2\\cdot3$ is visible straight from the leading coefficient of $T_r$."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "The Geometric Mean That Never Moves",
    "difficulty": 3,
    "task": "Determine how the sequence of geometric means behaves.",
    "pyq": {
      "year": 2007,
      "paper": "2",
      "qno": "61"
    },
    "tags": [
      "AM-GM-HM",
      "iterated means",
      "geometric mean invariance",
      "2007"
    ],
    "figure": "",
    "statement": "Let $A_1, G_1, H_1$ denote the arithmetic, geometric and harmonic means, respectively, of two distinct positive numbers. For $n \\ge 2$, let $A_{n-1}$ and $H_{n-1}$ have arithmetic, geometric and harmonic means as $A_n, G_n, H_n$ respectively. Which one of the following statements is correct?\n\n(A) $G_1 > G_2 > G_3 > \\cdots$\n(B) $G_1 < G_2 < G_3 < \\cdots$\n(C) $G_1 = G_2 = G_3 = \\cdots$\n(D) $G_1 < G_3 < G_5 < \\cdots$ and $G_2 > G_4 > G_6 > \\cdots$",
    "answer": "(C)",
    "trap": "Students see $A_n$ strictly falling and $H_n$ strictly rising and reflexively assume $G_n$, sandwiched between them, must also change. But the geometric mean depends only on the product $A_{n-1}H_{n-1}$, which is an invariant of the iteration — the shrinking gap has no bearing on it.",
    "solutions": [
      {
        "name": "The invariant product $A_{n-1}H_{n-1}$",
        "steps": [
          "Start with two distinct positives $a,b$. Their AM and HM are $A_1=\\dfrac{a+b}{2}$ and $H_1=\\dfrac{2ab}{a+b}$.",
          "The key identity: for any two numbers, (arithmetic mean) $\\times$ (harmonic mean) $=$ (geometric mean)$^2$. Indeed $A_1H_1=\\dfrac{a+b}{2}\\cdot\\dfrac{2ab}{a+b}=ab$.",
          "Now $G_n$ is the geometric mean of the two numbers $A_{n-1},H_{n-1}$, so $G_n=\\sqrt{A_{n-1}H_{n-1}}$.",
          "But at every stage $A_{n-1}H_{n-1}$ equals the product of the two numbers that produced them. That product is conserved: the AM and HM of $x,y$ multiply back to $xy$, so $A_{n-1}H_{n-1}=A_{n-2}H_{n-2}=\\cdots=A_1H_1=ab$.",
          "Therefore $G_n=\\sqrt{ab}$ for every $n$, independent of $n$. Hence $G_1=G_2=G_3=\\cdots=\\sqrt{ab}$, which is exactly $G_1$, the geometric mean of the original pair.",
          "The correct option is $(C)$."
        ]
      },
      {
        "name": "Direct check by conserved geometric mean",
        "steps": [
          "Define $P_n=A_nH_n$, the product of the two numbers carried into the next stage.",
          "Compute $P_n$ in terms of $A_{n-1},H_{n-1}$: $A_n=\\dfrac{A_{n-1}+H_{n-1}}{2}$ and $H_n=\\dfrac{2A_{n-1}H_{n-1}}{A_{n-1}+H_{n-1}}$.",
          "Multiplying, $A_nH_n=\\dfrac{A_{n-1}+H_{n-1}}{2}\\cdot\\dfrac{2A_{n-1}H_{n-1}}{A_{n-1}+H_{n-1}}=A_{n-1}H_{n-1}$. So $P_n=P_{n-1}$: the product is a fixed point of the map.",
          "Since $G_{n}=\\sqrt{A_{n-1}H_{n-1}}=\\sqrt{P_{n-1}}$ and every $P_k=ab$, each $G_n=\\sqrt{ab}$.",
          "Concretely take $a=1,b=4$: $A_1=2.5,\\ H_1=1.6,\\ G_1=2$. Next $A_2=2.05,\\ H_2=\\dfrac{2(2.5)(1.6)}{4.1}=1.9512\\ldots,\\ G_2=\\sqrt{2.5\\cdot1.6}=2$. The means $A_n$ fall toward $2$ and $H_n$ rise toward $2$, but $G_n$ sits fixed at $2$ throughout.",
          "Thus $G_1=G_2=G_3=\\cdots$, option $(C)$."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE 2007, Paper 2, Q61. The geometric mean is the conserved quantity of the AM–HM iteration: $A_n$ and $H_n$ both converge to $\\sqrt{ab}$ precisely because their product is pinned there from the first step."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Arithmetic Means Marching Downhill",
    "difficulty": 3,
    "task": "Decide the monotonic behaviour of the arithmetic means.",
    "pyq": {
      "year": 2007,
      "paper": "2",
      "qno": "62"
    },
    "tags": [
      "AM-GM-HM inequality",
      "iterated means",
      "monotone sequence",
      "2007"
    ],
    "figure": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" font-size=\"12\">\n  <line x1=\"40\" y1=\"185\" x2=\"300\" y2=\"185\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"/>\n  <line x1=\"40\" y1=\"185\" x2=\"40\" y2=\"20\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"/>\n  <text x=\"300\" y=\"200\" fill=\"var(--ink2)\" text-anchor=\"end\">n</text>\n  <text x=\"18\" y=\"28\" fill=\"var(--ink2)\">value</text>\n  <line x1=\"40\" y1=\"105\" x2=\"300\" y2=\"105\" stroke=\"var(--ink2)\" stroke-width=\"1\" stroke-dasharray=\"4 3\"/>\n  <text x=\"304\" y=\"109\" fill=\"var(--ink2)\">√(ab)</text>\n  <circle cx=\"70\" cy=\"40\" r=\"3.5\" fill=\"var(--gold)\"/>\n  <circle cx=\"130\" cy=\"72\" r=\"3.5\" fill=\"var(--gold)\"/>\n  <circle cx=\"190\" cy=\"90\" r=\"3.5\" fill=\"var(--gold)\"/>\n  <circle cx=\"250\" cy=\"99\" r=\"3.5\" fill=\"var(--gold)\"/>\n  <polyline points=\"70,40 130,72 190,90 250,99\" fill=\"none\" stroke=\"var(--gold)\" stroke-width=\"1.5\"/>\n  <text x=\"70\" y=\"32\" fill=\"var(--ink2)\" text-anchor=\"middle\">A₁</text>\n  <text x=\"130\" y=\"64\" fill=\"var(--ink2)\" text-anchor=\"middle\">A₂</text>\n  <text x=\"190\" y=\"82\" fill=\"var(--ink2)\" text-anchor=\"middle\">A₃</text>\n  <text x=\"250\" y=\"91\" fill=\"var(--ink2)\" text-anchor=\"middle\">A₄</text>\n  <circle cx=\"70\" cy=\"170\" r=\"3.5\" stroke=\"var(--ink3)\" fill=\"none\" stroke-width=\"1.3\"/>\n  <circle cx=\"130\" cy=\"138\" r=\"3.5\" stroke=\"var(--ink3)\" fill=\"none\" stroke-width=\"1.3\"/>\n  <circle cx=\"190\" cy=\"120\" r=\"3.5\" stroke=\"var(--ink3)\" fill=\"none\" stroke-width=\"1.3\"/>\n  <circle cx=\"250\" cy=\"111\" r=\"3.5\" stroke=\"var(--ink3)\" fill=\"none\" stroke-width=\"1.3\"/>\n  <polyline points=\"70,170 130,138 190,120 250,111\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"1.3\" stroke-dasharray=\"3 2\"/>\n  <text x=\"70\" y=\"183\" fill=\"var(--ink2)\" text-anchor=\"middle\">H₁</text>\n</svg>",
    "statement": "Let $A_1, G_1, H_1$ denote the arithmetic, geometric and harmonic means of two distinct positive numbers. For $n \\ge 2$, let $A_{n-1}$ and $H_{n-1}$ have arithmetic, geometric and harmonic means as $A_n, G_n, H_n$ respectively. Which of the following statements is correct?\n\n(A) $A_1 > A_2 > A_3 > \\cdots$\n(B) $A_1 < A_2 < A_3 < \\cdots$\n(C) $A_1 > A_3 > A_5 > \\cdots$ and $A_2 < A_4 < A_6 < \\cdots$\n(D) $A_1 < A_3 < A_5 < \\cdots$ and $A_2 > A_4 > A_6 > \\cdots$",
    "answer": "(A)",
    "trap": "The tempting mistake is to expect the sequence to oscillate — options (C) and (D) dangle an alternating pattern. But because every new $A_n$ is the AM of a strictly larger and a strictly smaller number, it lands strictly between them; there is no overshoot, so the sequence is monotone (decreasing), not oscillating.",
    "solutions": [
      {
        "name": "AM lies between its two inputs",
        "steps": [
          "For two distinct positives $x>y>0$, the AM–GM–HM chain gives $x>\\dfrac{x+y}{2}>\\sqrt{xy}>\\dfrac{2xy}{x+y}>y$; in particular the arithmetic mean of $x,y$ lies strictly between $y$ and $x$.",
          "Apply this with $x=A_{n-1}$ and $y=H_{n-1}$. Since means of distinct numbers keep $A_{n-1}>H_{n-1}$ at every stage (AM $>$ HM strictly for distinct inputs), we have two distinct numbers with $A_{n-1}>H_{n-1}$.",
          "Then $A_n=\\dfrac{A_{n-1}+H_{n-1}}{2}$ satisfies $H_{n-1}<A_n<A_{n-1}$.",
          "The upper bound $A_n<A_{n-1}$ holds for every $n\\ge 2$, so the sequence $A_1,A_2,A_3,\\ldots$ is strictly decreasing.",
          "Hence $A_1>A_2>A_3>\\cdots$, which is option $(A)$. (There is no alternation, ruling out (C) and (D); it is not increasing, ruling out (B).)"
        ]
      },
      {
        "name": "Bounded-below monotone descent to $\\sqrt{ab}$",
        "steps": [
          "From solution 1, $A_n=\\dfrac{A_{n-1}+H_{n-1}}{2}<A_{n-1}$, so the sequence decreases. It is bounded below by $G_n=\\sqrt{ab}$ (the conserved geometric mean, since $A_nH_n=ab$ and AM $\\ge$ GM gives $A_n\\ge\\sqrt{A_nH_n}=\\sqrt{ab}$).",
          "A decreasing sequence bounded below converges; each term still strictly exceeds the next while the two inputs stay distinct, so the descent is strict, never flat and never reversing.",
          "Numerical illustration with $a=1,b=4$: $A_1=2.5$, then $A_2=\\dfrac{2.5+1.6}{2}=2.05$, $A_3=\\dfrac{2.05+H_2}{2}$ with $H_2=\\dfrac{2(2.5)(1.6)}{4.1}=1.9512$, giving $A_3=2.0006$. The values $2.5>2.05>2.0006>\\cdots$ fall steadily toward $\\sqrt{4}=2$.",
          "This monotone strictly-decreasing behaviour matches option $(A)$ exactly and excludes the oscillating options."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE 2007, Paper 2, Q62. Because each $A_n$ is an average of a bigger and a smaller value, it cannot overshoot — the sequence descends monotonically to $\\sqrt{ab}$, meeting the rising $H_n$ there (companion to Q61's fixed $G_n$ and Q63's rising $H_n$)."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "The harmonic means climb: $H_1<H_2<H_3<\\cdots$",
    "difficulty": 3,
    "task": "Identify the correct ordering of the harmonic-mean sequence.",
    "pyq": {
      "year": 2007,
      "paper": "2",
      "qno": "63"
    },
    "tags": [
      "AM-GM-HM inequality",
      "iterated means",
      "monotone sequence",
      "2007"
    ],
    "figure": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" font-size=\"12\"><line x1=\"30\" y1=\"180\" x2=\"300\" y2=\"180\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"/><text x=\"150\" y=\"200\" fill=\"var(--ink2)\">value on the number line</text><line x1=\"70\" y1=\"175\" x2=\"70\" y2=\"185\" stroke=\"var(--ink3)\"/><text x=\"52\" y=\"170\" fill=\"var(--ink2)\">$H_1$</text><line x1=\"110\" y1=\"175\" x2=\"110\" y2=\"185\" stroke=\"var(--ink2)\"/><text x=\"96\" y=\"170\" fill=\"var(--ink2)\">$H_2$</text><line x1=\"135\" y1=\"175\" x2=\"135\" y2=\"185\" stroke=\"var(--ink2)\"/><text x=\"123\" y=\"170\" fill=\"var(--ink2)\">$H_3$</text><line x1=\"200\" y1=\"175\" x2=\"200\" y2=\"185\" stroke=\"var(--gold)\" stroke-width=\"1.5\"/><text x=\"178\" y=\"170\" fill=\"var(--gold)\">$G=\\sqrt{ab}$</text><line x1=\"260\" y1=\"175\" x2=\"260\" y2=\"185\" stroke=\"var(--ink3)\"/><text x=\"246\" y=\"170\" fill=\"var(--ink2)\">$A_1$</text><path d=\"M70 150 Q90 135 110 150\" fill=\"none\" stroke=\"var(--ink2)\" stroke-width=\"1\"/><path d=\"M110 150 Q122 140 135 150\" fill=\"none\" stroke=\"var(--ink2)\" stroke-width=\"1\"/><text x=\"70\" y=\"128\" fill=\"var(--ink2)\">$H_n$ rises, squeezed up toward $G$</text><line x1=\"200\" y1=\"120\" x2=\"200\" y2=\"178\" stroke=\"var(--gold)\" stroke-width=\"0.8\" stroke-dasharray=\"3 3\"/></svg>",
    "statement": "Let $A_1,\\,G_1,\\,H_1$ denote the arithmetic, geometric and harmonic means of two distinct positive numbers. For $n\\ge 2$, let $A_{n-1}$ and $H_{n-1}$ have arithmetic, geometric and harmonic means $A_n,\\,G_n,\\,H_n$ respectively. Which of the following statements is correct? $$\\text{(A) } H_1>H_2>H_3>\\cdots \\qquad \\text{(B) } H_1<H_2<H_3<\\cdots$$ $$\\text{(C) } H_1>H_3>H_5>\\cdots \\text{ and } H_2<H_4<H_6<\\cdots$$ $$\\text{(D) } H_1<H_3<H_5<\\cdots \\text{ and } H_2>H_4>H_6>\\cdots$$",
    "answer": "$\\boxed{\\text{(B)}}$",
    "trap": "Students correctly see that the AM-sequence $A_n$ decreases and reflexively assume the HM-sequence must do the same — or must oscillate. But $H_n$ is the HM of the two \\emph{previous} means, and it is trapped strictly between them from below, so it rises monotonically. The two extreme sequences move toward each other, not in the same direction; both are strictly monotone, never alternating.",
    "solutions": [
      {
        "name": "Sandwich each new mean between the old two",
        "steps": [
          "Start from two distinct positives, so the initial three means are strictly ordered by the AM–GM–HM inequality: $A_1>G_1>H_1$.",
          "At every stage the new pair is $(A_{n-1},H_{n-1})$ with $A_{n-1}>H_{n-1}$. Its harmonic mean satisfies the universal fact $\\min<\\text{HM}<\\max$ for two distinct numbers, i.e. $H_{n-1}<H_n<A_{n-1}$.",
          "The left half of this chain, $H_{n-1}<H_n$, holds for every $n\\ge 2$. Hence $H_1<H_2<H_3<\\cdots$ — the sequence is strictly increasing.",
          "This immediately rules out (A) (decreasing), (C) and (D) (alternating), leaving only (B)."
        ]
      },
      {
        "name": "Invariant product forces convergence to $G=\\sqrt{ab}$ from below",
        "steps": [
          "Key invariant: for any two positives $u,v$, their AM and HM satisfy $\\big(\\tfrac{u+v}{2}\\big)\\big(\\tfrac{2uv}{u+v}\\big)=uv$. So $A_nH_n=A_{n-1}H_{n-1}=\\cdots=A_1H_1=ab$, the product is conserved at every step.",
          "Therefore the geometric mean is frozen: $G_n=\\sqrt{A_{n-1}H_{n-1}}=\\sqrt{ab}$ for all $n$ — the common limit.",
          "Since $H_n=G_n^2/A_n=ab/A_n$ and (by Solution 1's other half) $A_n$ is strictly decreasing toward $\\sqrt{ab}$, the quotient $ab/A_n$ is strictly increasing toward $\\sqrt{ab}$.",
          "Thus $H_1<H_2<H_3<\\cdots\\to\\sqrt{ab}$, confirming (B); the harmonic means approach the invariant geometric mean from below while the arithmetic means approach it from above."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE 2007, Paper 2, Q63. The whole paragraph turns on one invariant — AM·HM = product — which pins $G_n$ and makes the outer two sequences a monotone squeeze onto $\\sqrt{ab}$."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Partial sums of a GP: neither AP, GP, nor HP",
    "difficulty": 3,
    "task": "Decide the truth of both statements and pick the option.",
    "pyq": {
      "year": 2008,
      "paper": "2",
      "qno": "12"
    },
    "tags": [
      "geometric progression",
      "AP GP HP",
      "partial sums",
      "2008"
    ],
    "figure": "",
    "statement": "Suppose four distinct positive numbers $a_1,a_2,a_3,a_4$ are in G.P. Let $b_1=a_1$, $b_2=b_1+a_2$, $b_3=b_2+a_3$ and $b_4=b_3+a_4$.\n\n$\\textbf{STATEMENT-1:}$ The numbers $b_1,b_2,b_3,b_4$ are neither in A.P. nor in G.P.\n\n$\\textbf{STATEMENT-2:}$ The numbers $b_1,b_2,b_3,b_4$ are in H.P.\n\n(A) STATEMENT-1 is True, STATEMENT-2 is True; STATEMENT-2 is a correct explanation for STATEMENT-1\n\n(B) STATEMENT-1 is True, STATEMENT-2 is True; STATEMENT-2 is NOT a correct explanation for STATEMENT-1\n\n(C) STATEMENT-1 is True, STATEMENT-2 is False\n\n(D) STATEMENT-1 is False, STATEMENT-2 is True",
    "answer": "$\\boxed{\\text{(C)}}$",
    "trap": "The $b_i$ are the partial sums of a GP, so it is tempting to think their common structure makes them fall into some standard progression. In fact they are neither AP nor GP nor HP for a genuine GP ($r\\ne 1$). The lethal move is to 'verify' HP on a degenerate example (e.g. secretly using $r=1$, which makes the numbers equal and violates the 'distinct' hypothesis). Statement-2 is simply false.",
    "solutions": [
      {
        "name": "Write the partial sums and test each progression",
        "steps": [
          "Let $a_1=a$ and common ratio $r$ (with $a>0$, $r>0$, $r\\ne 1$ so the four terms are distinct). Then $b_1=a$, $b_2=a(1+r)$, $b_3=a(1+r+r^2)$, $b_4=a(1+r+r^2+r^3)$.",
          "AP test — consecutive differences are $b_2-b_1=ar$, $b_3-b_2=ar^2$, $b_4-b_3=ar^3$. These are equal only if $r=r^2=r^3$, i.e. $r=1$, which is excluded. So the $b_i$ are NOT in AP.",
          "GP test — consecutive ratios are $\\dfrac{b_2}{b_1}=1+r$, $\\dfrac{b_3}{b_2}=\\dfrac{1+r+r^2}{1+r}$. Equality needs $(1+r)^2=1+r+r^2$, i.e. $1+2r+r^2=1+r+r^2\\Rightarrow r=0$, impossible for a GP. So the $b_i$ are NOT in GP. Hence STATEMENT-1 is TRUE.",
          "HP test — $b_1,b_2,b_3$ are in HP iff their reciprocals are in AP, i.e. $\\dfrac{2}{b_2}=\\dfrac{1}{b_1}+\\dfrac{1}{b_3}$. Reciprocals of $a,\\,a(1+r),\\,a(1+r+r^2)$ are in AP only for special $r$, and never together with the fourth reciprocal being consistent; a concrete check with $a=1,r=2$ gives $b_i=1,3,7,15$ whose reciprocals $1,\\tfrac13,\\tfrac17,\\tfrac1{15}$ are not in AP ($\\tfrac13-1\\ne\\tfrac17-\\tfrac13$). So STATEMENT-2 is FALSE.",
          "STATEMENT-1 True, STATEMENT-2 False $\\Rightarrow$ option (C)."
        ]
      },
      {
        "name": "Concrete counterexample kills HP outright",
        "steps": [
          "Take the specific distinct GP $a_i=1,2,4,8$ (i.e. $a=1,r=2$).",
          "Partial sums: $b_1=1,\\ b_2=3,\\ b_3=7,\\ b_4=15$.",
          "Differences $2,4,8$ are unequal — not an AP. Ratios $3,\\tfrac73,\\tfrac{15}{7}$ are unequal — not a GP. So STATEMENT-1 is verified TRUE on this example, consistent with the general proof.",
          "Reciprocals $1,\\tfrac13,\\tfrac17,\\tfrac1{15}$: successive differences are $-\\tfrac23,\\,-\\tfrac{4}{21},\\,-\\tfrac{8}{105}$, which are not equal, so the reciprocals are NOT in AP — hence $b_i$ are NOT in HP. STATEMENT-2 is FALSE.",
          "A single valid instance suffices to refute the universal claim of STATEMENT-2, so the answer is (C)."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE 2008, Paper 2, Q12. Partial sums of a nonconstant GP break every classical progression at once — the elegant trap is that 'looks structured' does not mean 'is AP/GP/HP', and the distinctness clause quietly forbids the only $r$ that would rescue Statement-2."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "A hundred geometric series, one telescope",
    "difficulty": 5,
    "task": "Find the value of the expression.",
    "pyq": {
      "year": 2010,
      "paper": "1",
      "qno": "54"
    },
    "tags": [
      "infinite geometric series",
      "factorials",
      "telescoping sum",
      "2010"
    ],
    "figure": "",
    "statement": "Let $S_k$, for $k=1,2,\\dots,100$, denote the sum of the infinite geometric series whose first term is $\\dfrac{k-1}{k!}$ and whose common ratio is $\\dfrac{1}{k}$. Then find the value of\n$$\\frac{100^2}{100!}+\\sum_{k=1}^{100}\\left|(k^2-3k+1)\\,S_k\\right|.$$",
    "answer": "$\\boxed{3}$",
    "trap": "The absolute value bars are not decoration. Once you simplify $S_k=\\dfrac{1}{(k-1)!}$ the quantity $(k^2-3k+1)S_k$ is positive for every $k\\ge 3$ but is negative exactly at $k=2$ (where it equals $-1$). If you drop the modulus and just telescope, the $k=2$ term cancels part of the chain and you land on $1$ instead of $3$. The whole difficulty of this problem lives in that single sign flip.",
    "solutions": [
      {
        "name": "Sum the series, then telescope $(k^2-3k+1)=(k-1)(k-2)-1$",
        "steps": [
          "First evaluate $S_k$. It is an infinite GP with first term $\\dfrac{k-1}{k!}$ and ratio $\\dfrac{1}{k}$ (with $|1/k|<1$ for $k\\ge 2$), so $S_k=\\dfrac{(k-1)/k!}{1-1/k}=\\dfrac{(k-1)/k!}{(k-1)/k}=\\dfrac{k}{k!}=\\dfrac{1}{(k-1)!}$ for $k\\ge 2$.",
          "For $k=1$ the first term is $\\dfrac{1-1}{1!}=0$, so $S_1=0$ and the $k=1$ summand contributes nothing.",
          "Now write the algebraic factor as $k^2-3k+1=(k-1)(k-2)-1$. Hence for $k\\ge 2$, $(k^2-3k+1)S_k=\\dfrac{(k-1)(k-2)}{(k-1)!}-\\dfrac{1}{(k-1)!}=\\dfrac{k-2}{(k-2)!}-\\dfrac{1}{(k-1)!}.$",
          "For $k\\ge 3$ this is $\\dfrac{1}{(k-3)!}-\\dfrac{1}{(k-1)!}$, which is positive, so the modulus does nothing there. At $k=2$ the value is $\\dfrac{0}{0!}-\\dfrac{1}{1!}=-1$, so $\\bigl|(k^2-3k+1)S_2\\bigr|=1$.",
          "Split the sum: $\\displaystyle\\sum_{k=1}^{100}\\bigl|(k^2-3k+1)S_k\\bigr|=0+1+\\sum_{k=3}^{100}\\left(\\frac{1}{(k-3)!}-\\frac{1}{(k-1)!}\\right).$",
          "The remaining sum telescopes in steps of two indices: $\\displaystyle\\sum_{k=3}^{100}\\frac{1}{(k-3)!}=\\sum_{j=0}^{97}\\frac{1}{j!}$ and $\\displaystyle\\sum_{k=3}^{100}\\frac{1}{(k-1)!}=\\sum_{j=2}^{99}\\frac{1}{j!}$. Subtracting cancels every common term, leaving the two smallest heads minus the two largest tails: $\\dfrac{1}{0!}+\\dfrac{1}{1!}-\\dfrac{1}{98!}-\\dfrac{1}{99!}=2-\\dfrac{1}{98!}-\\dfrac{1}{99!}.$",
          "So the sum of the moduli is $1+2-\\dfrac{1}{98!}-\\dfrac{1}{99!}=3-\\dfrac{1}{98!}-\\dfrac{1}{99!}.$",
          "Finally add the dangling term. Since $\\dfrac{1}{98!}+\\dfrac{1}{99!}=\\dfrac{99+1}{99!}=\\dfrac{100}{99!}=\\dfrac{100^2}{100!}$, the leftover exactly cancels the added $\\dfrac{100^2}{100!}$. Total $=3.$"
        ]
      },
      {
        "name": "Direct partial-fraction telescope of $\\dfrac{k^2-3k+1}{(k-1)!}$",
        "steps": [
          "As above, $S_k=\\dfrac{1}{(k-1)!}$ for $k\\ge 2$ and $S_1=0$, so the general nonzero summand is $u_k=\\dfrac{k^2-3k+1}{(k-1)!}$.",
          "Seek constants making $u_k$ a difference of consecutive factorial reciprocals. Try $u_k=\\dfrac{A}{(k-1)!}+\\dfrac{B}{(k-2)!}+\\dfrac{C}{(k-3)!}$; clearing to a common denominator $(k-1)!$ gives $k^2-3k+1=A+B(k-1)+C(k-1)(k-2)$.",
          "Matching coefficients: $C=1$ (from $k^2$); $B-3C=-3\\Rightarrow B=0$; $A-B+2C=1\\Rightarrow A=-1$. Thus $u_k=\\dfrac{1}{(k-3)!}-\\dfrac{1}{(k-1)!}$ for $k\\ge 3$, confirming the earlier decomposition.",
          "Because $u_k>0$ for $k\\ge 3$, $u_1=0$, and only $u_2=-1$ is negative, taking absolute values changes only the $k=2$ term: $|u_2|=1$ instead of $-1$.",
          "Sum the telescope $\\displaystyle\\sum_{k=3}^{100}u_k$. Writing out the two chains, the $\\dfrac{1}{(k-3)!}$ chain contributes the heads $\\dfrac{1}{0!}+\\dfrac{1}{1!}=2$ that are never cancelled, while the surviving tails are $-\\dfrac{1}{98!}-\\dfrac{1}{99!}$. Hence $\\displaystyle\\sum_{k=3}^{100}u_k=2-\\dfrac{100^2}{100!}$ (using $\\dfrac{1}{98!}+\\dfrac{1}{99!}=\\dfrac{100^2}{100!}$).",
          "Assemble everything with the modulus fix: $\\displaystyle\\sum_{k=1}^{100}|u_k|=\\underbrace{0}_{k=1}+\\underbrace{1}_{k=2}+\\left(2-\\frac{100^2}{100!}\\right)=3-\\frac{100^2}{100!}.$",
          "Add the prefix $\\dfrac{100^2}{100!}$ from the problem statement; it cancels the tail exactly, giving the final value $3.$"
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE / JEE Advanced 2010, Paper 1, Q54. The examiner engineered the leading $\\tfrac{100^2}{100!}$ precisely to cancel the telescoping tail — and hid the entire trap in the lone negative term at $k=2$ that the absolute value rescues."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "A recurrence in disguise, and the middle term",
    "difficulty": 4,
    "task": "Find the value of the mean.",
    "pyq": {
      "year": 2010,
      "paper": "2",
      "qno": "29"
    },
    "tags": [
      "arithmetic progression",
      "sum of squares",
      "mean of AP",
      "2010"
    ],
    "figure": "",
    "statement": "Let $a_1,a_2,a_3,\\dots,a_{11}$ be real numbers satisfying $a_1=15$, $\\;27-2a_2>0$, and $a_k=2a_{k-1}-a_{k-2}$ for $k=3,4,\\dots,11$. If\n$$\\frac{a_1^2+a_2^2+\\cdots+a_{11}^2}{11}=90,$$\nthen find the value of $\\dfrac{a_1+a_2+\\cdots+a_{11}}{11}.$",
    "answer": "$\\boxed{0}$",
    "trap": "Two traps stacked. First, the recurrence $a_k=2a_{k-1}-a_{k-2}$ is easy to misread as geometric or as something exotic; rearranged it says $a_k-a_{k-1}=a_{k-1}-a_{k-2}$ — constant differences — so it is simply an AP. Second, the mean-of-squares equation is quadratic in the common difference $d$ and yields two roots, $d=-3$ and $d=-\\tfrac{9}{7}$. Only the constraint $27-2a_2>0$ (i.e. $a_2<13.5$, so $d<-1.5$) picks $d=-3$; a solver who ignores that inequality cannot pin down the answer.",
    "solutions": [
      {
        "name": "Recognise the AP, solve for $d$, use the middle-term mean",
        "steps": [
          "Rewrite the recurrence: $a_k=2a_{k-1}-a_{k-2}\\iff a_k-a_{k-1}=a_{k-1}-a_{k-2}$. The successive differences are all equal, so $(a_k)$ is an arithmetic progression. With $a_1=15$ and common difference $d$, we have $a_k=15+(k-1)d$.",
          "Impose the mean-of-squares condition: $\\displaystyle\\sum_{k=1}^{11}a_k^2=11\\cdot 90=990$.",
          "Compute $\\displaystyle\\sum_{k=1}^{11}\\bigl(15+(k-1)d\\bigr)^2=\\sum_{j=0}^{10}(15+jd)^2=11\\cdot 225+2\\cdot 15\\,d\\sum_{j=0}^{10}j+d^2\\sum_{j=0}^{10}j^2.$",
          "Using $\\sum_{j=0}^{10}j=55$ and $\\sum_{j=0}^{10}j^2=385$: the sum $=2475+1650\\,d+385\\,d^2$. Set equal to $990$: $385d^2+1650d+1485=0$, i.e. dividing by $55$, $7d^2+30d+27=0$.",
          "Solve: $d=\\dfrac{-30\\pm\\sqrt{900-756}}{14}=\\dfrac{-30\\pm 12}{14}$, giving $d=-\\dfrac{9}{7}$ or $d=-3$.",
          "Apply the constraint $27-2a_2>0$. Since $a_2=15+d$, this reads $27-2(15+d)>0\\Rightarrow -3-2d>0\\Rightarrow d<-\\tfrac{3}{2}$. Of the two roots only $d=-3$ satisfies it (as $-\\tfrac{9}{7}\\approx-1.29>-1.5$). So $d=-3$.",
          "For an AP with an odd number of terms, the arithmetic mean equals the middle term $a_6$. Here $a_6=15+5(-3)=0$. Hence $\\dfrac{a_1+\\cdots+a_{11}}{11}=a_6=0.$"
        ]
      },
      {
        "name": "Statistics viewpoint: variance links the two means",
        "steps": [
          "As shown, $(a_k)$ is an AP: $a_k=15+(k-1)d$. Let $\\bar a=\\dfrac{1}{11}\\sum a_k$ be the mean we want and note the mean of an $11$-term AP is $\\bar a=a_1+5d=15+5d$ (the middle term).",
          "Use the identity $\\dfrac{1}{11}\\sum a_k^2=\\bar a^2+\\text{Var}$, where $\\text{Var}=\\dfrac{1}{11}\\sum (a_k-\\bar a)^2$ is the population variance of the AP.",
          "For an AP the deviations from the middle term are $\\{-5d,-4d,\\dots,4d,5d\\}$, so $\\text{Var}=\\dfrac{d^2}{11}\\sum_{j=-5}^{5}j^2=\\dfrac{d^2}{11}\\cdot 110=10d^2.$",
          "The given mean of squares is $90$, so $\\bar a^2+10d^2=90$, i.e. $(15+5d)^2+10d^2=90.$",
          "Expand: $225+150d+25d^2+10d^2=90\\Rightarrow 35d^2+150d+135=0\\Rightarrow 7d^2+30d+27=0$, the same quadratic, with roots $d=-3$ and $d=-\\tfrac{9}{7}$.",
          "The constraint $27-2a_2>0\\Rightarrow d<-\\tfrac{3}{2}$ selects $d=-3$. Then $\\bar a=15+5(-3)=0$, so the required mean is $0.$"
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE / JEE Advanced 2010, Paper 2, Q29. A textbook lesson that $a_k=2a_{k-1}-a_{k-2}$ is the fingerprint of an AP, and that a lone stray inequality often exists solely to break the tie between two algebraic roots."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "The recurrence hidden in $x^2-6x-2=0$",
    "difficulty": 3,
    "task": "Evaluate the ratio.",
    "pyq": {
      "year": 2011,
      "paper": "1",
      "qno": "52"
    },
    "tags": [
      "recurrence relations",
      "roots of quadratic",
      "2011"
    ],
    "figure": "",
    "statement": "Let $\\alpha$ and $\\beta$ be the roots of $x^{2}-6x-2=0$, with $\\alpha>\\beta$. If $a_n=\\alpha^{n}-\\beta^{n}$ for $n\\ge 1$, then the value of $\\dfrac{a_{10}-2a_{8}}{2a_{9}}$ is\n\n(A) $1$\n\n(B) $2$\n\n(C) $3$\n\n(D) $4$",
    "answer": "$\\boxed{3}$ (C)",
    "trap": "Students rush to compute $\\alpha,\\beta=3\\pm\\sqrt{11}$ and try to evaluate the tenth powers numerically. The whole point is that you never need the roots individually: because each root satisfies $x^2=6x+2$, the sequence $a_n$ obeys a linear recurrence that collapses the expression instantly.",
    "solutions": [
      {
        "name": "Second-order recurrence from the defining quadratic",
        "steps": [
          "Since $\\alpha$ is a root, $\\alpha^2=6\\alpha+2$. Multiply by $\\alpha^{n-2}$: $\\alpha^{n}=6\\alpha^{n-1}+2\\alpha^{n-2}$.",
          "Identically for $\\beta$: $\\beta^{n}=6\\beta^{n-1}+2\\beta^{n-2}$.",
          "Subtracting, $\\alpha^{n}-\\beta^{n}=6(\\alpha^{n-1}-\\beta^{n-1})+2(\\alpha^{n-2}-\\beta^{n-2})$, i.e. $a_n=6a_{n-1}+2a_{n-2}$ for all $n\\ge 3$.",
          "Put $n=10$: $a_{10}=6a_{9}+2a_{8}$, so $a_{10}-2a_{8}=6a_{9}$.",
          "Therefore $\\dfrac{a_{10}-2a_{8}}{2a_{9}}=\\dfrac{6a_{9}}{2a_{9}}=3$."
        ]
      },
      {
        "name": "Direct algebraic reduction using $x^2=6x+2$",
        "steps": [
          "Write $a_{10}-2a_{8}=(\\alpha^{10}-\\beta^{10})-2(\\alpha^{8}-\\beta^{8})=\\alpha^{8}(\\alpha^{2}-2)-\\beta^{8}(\\beta^{2}-2)$.",
          "From $x^{2}-6x-2=0$ we have $x^{2}-2=6x$ for each root, so $\\alpha^{2}-2=6\\alpha$ and $\\beta^{2}-2=6\\beta$.",
          "Substituting: $a_{10}-2a_{8}=\\alpha^{8}(6\\alpha)-\\beta^{8}(6\\beta)=6(\\alpha^{9}-\\beta^{9})=6a_{9}$.",
          "Hence $\\dfrac{a_{10}-2a_{8}}{2a_{9}}=\\dfrac{6a_{9}}{2a_{9}}=3$."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE/JEE Advanced 2011, Paper 1, Q52. The trick is universal: for $x^2=px+q$, the power-difference sequence $\\alpha^n-\\beta^n$ satisfies $a_n=p\\,a_{n-1}+q\\,a_{n-2}$, turning a tenth-power question into one line."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "The Geometric Series of Reciprocal Roots",
    "difficulty": 3,
    "task": "Evaluate the infinite series.",
    "pyq": {
      "year": 2011,
      "paper": "1",
      "qno": "62"
    },
    "tags": [
      "infinite geometric series",
      "roots of quadratic",
      "2011"
    ],
    "figure": "",
    "statement": "In a comprehension based on a quadratic $ax^2+bx+c=0$ (call it equation (E)), take $b=6$ with $a$ and $c$ the values forced by (E), namely $a=1$ and $c=-7$. If $\\alpha$ and $\\beta$ are the roots of $ax^2+bx+c=0$, then the value of $$\\sum_{n=0}^{\\infty}\\left(\\frac{1}{\\alpha}+\\frac{1}{\\beta}\\right)^{n}$$ is\n\n(A) $6$ (B) $7$ (C) $\\dfrac{6}{7}$ (D) $\\infty$",
    "answer": "(B) $7$",
    "trap": "Students race to sum the geometric series but forget to check that the ratio $r=\\frac1\\alpha+\\frac1\\beta$ actually satisfies $|r|<1$. Here $r=\\frac67$, so the series converges and equals $\\frac{1}{1-r}$. Had $r$ come out $\\ge 1$ (as it might for a careless sign on $c$), the honest answer would be $\\infty$ — option (D) is a deliberate trap for anyone who plugs into $\\frac{1}{1-r}$ blindly without the convergence check, or who miscomputes $\\frac1\\alpha+\\frac1\\beta$ as $\\frac{-b}{c}=\\frac{6}{-7}$ with the wrong sign.",
    "solutions": [
      {
        "name": "Vieta on the reciprocal-root sum",
        "steps": [
          "With $b=6$ the paragraph fixes $a=1,\\;c=-7$, so the quadratic is $x^2+6x-7=0$.",
          "By Vieta's formulas, $\\alpha+\\beta=-\\dfrac{b}{a}=-6$ and $\\alpha\\beta=\\dfrac{c}{a}=-7$.",
          "The common ratio of the series is $r=\\dfrac{1}{\\alpha}+\\dfrac{1}{\\beta}=\\dfrac{\\alpha+\\beta}{\\alpha\\beta}=\\dfrac{-6}{-7}=\\dfrac{6}{7}.$",
          "Since $|r|=\\dfrac67<1$, the geometric series converges: $\\displaystyle\\sum_{n=0}^{\\infty}r^{n}=\\dfrac{1}{1-r}=\\dfrac{1}{1-\\frac67}=\\dfrac{1}{\\frac17}=7.$",
          "Hence the sum is $7$, option (B)."
        ]
      },
      {
        "name": "Explicit factoring of the roots",
        "steps": [
          "Factor $x^2+6x-7=(x-1)(x+7)=0$, so the roots are $\\alpha=1$ and $\\beta=-7$ (order immaterial).",
          "Then $\\dfrac1\\alpha+\\dfrac1\\beta=1+\\left(-\\dfrac17\\right)=\\dfrac67$, matching the Vieta value.",
          "The series is $\\displaystyle\\sum_{n=0}^{\\infty}\\left(\\tfrac67\\right)^n$, a geometric series with first term $1$ and ratio $\\tfrac67<1$.",
          "Its sum is $\\dfrac{1}{1-\\frac67}=7$, confirming (B)."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE/JEE Advanced 2011, Paper 1, Q62. The reciprocal-root sum $\\frac1\\alpha+\\frac1\\beta=\\frac{\\alpha+\\beta}{\\alpha\\beta}$ is pure Vieta, but the marks live in the convergence check $|r|<1$ that legitimises $\\frac{1}{1-r}$."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "When $S_{5n}/S_n$ Forgets About $n$",
    "difficulty": 3,
    "task": "Find the second term.",
    "pyq": {
      "year": 2011,
      "paper": "1",
      "qno": "67"
    },
    "tags": [
      "arithmetic progression",
      "sum of AP",
      "2011"
    ],
    "figure": "",
    "statement": "Let $a_1,a_2,a_3,\\ldots,a_{100}$ be an arithmetic progression with $a_1=3$ and $S_p=\\displaystyle\\sum_{i=1}^{p}a_i$ for $1\\le p\\le 100$. For any integer $n$ with $1\\le n\\le 20$, let $m=5n$. If $\\dfrac{S_m}{S_n}$ does not depend on $n$, then $a_2$ equals ____.",
    "answer": "$\\boxed{9}$",
    "trap": "The phrase 'does not depend on $n$' does not mean 'set two convenient values of $n$ equal and hope' — it means the ratio must be a constant as a function of $n$ for the whole allowed range. The clean way is to write $\\frac{S_{5n}}{S_n}$ as a ratio of two linear-in-$n$ expressions and force the ratio to be $n$-independent, which happens exactly when the two linear forms are proportional. A student who instead solves $\\frac{S_{10}}{S_2}=\\frac{S_{15}}{S_3}$ (only two data points) can stumble onto the right $d$ but has not actually proven the ratio is constant.",
    "solutions": [
      {
        "name": "Force the ratio of two linear forms to be constant",
        "steps": [
          "For an AP, $S_p=\\dfrac{p}{2}\\big(2a_1+(p-1)d\\big)=\\dfrac{p}{2}\\big(6+(p-1)d\\big)$ since $a_1=3$.",
          "So $\\dfrac{S_{5n}}{S_n}=\\dfrac{\\frac{5n}{2}\\big(6+(5n-1)d\\big)}{\\frac{n}{2}\\big(6+(n-1)d\\big)}=5\\cdot\\dfrac{6+(5n-1)d}{6+(n-1)d}.$",
          "Write numerator and denominator as linear functions of $n$: $\\;6+(5n-1)d=(6-d)+5dn$ and $6+(n-1)d=(6-d)+dn$.",
          "The ratio $\\dfrac{(6-d)+5dn}{(6-d)+dn}$ is independent of $n$ iff the two linear polynomials are proportional, i.e. their constant terms and $n$-coefficients share the same ratio: $\\dfrac{6-d}{6-d}=\\dfrac{5d}{d}$. This forces the constant term to vanish: $6-d=0$.",
          "Hence $d=6$ (if $d=0$ the AP is constant and $S_{5n}/S_n=5$ trivially, but then $a_2=a_1=3$ contradicts the intended non-trivial reading; the vanishing-constant condition gives the genuine solution).",
          "Therefore $a_2=a_1+d=3+6=9$."
        ]
      },
      {
        "name": "Substitution / test-value elimination",
        "steps": [
          "Constancy over the whole range in particular forces $\\dfrac{S_{5}}{S_1}=\\dfrac{S_{10}}{S_2}$ (take $n=1$ and $n=2$).",
          "Compute with $a_1=3$: $S_1=3$, $S_5=\\tfrac52(6+4d)=15+10d$, $S_2=6+d$, $S_{10}=5(6+9d)=30+45d$.",
          "So $\\dfrac{15+10d}{3}=\\dfrac{30+45d}{6+d}$. Cross-multiplying: $(15+10d)(6+d)=3(30+45d)$.",
          "Left side $=90+15d+60d+10d^2=10d^2+75d+90$; right side $=90+135d$.",
          "Thus $10d^2+75d+90=135d\\Rightarrow 10d^2-60d=0\\Rightarrow 10d(d-6)=0$, giving $d=6$ (rejecting the trivial $d=0$).",
          "Substituting $d=6$ back verifies $\\dfrac{S_{5n}}{S_n}=5$ for every $n$, confirming true independence. Then $a_2=3+6=9$."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE/JEE Advanced 2011, Paper 1, Q67. 'Independent of $n$' is a proportionality condition on two linear forms — the constant term must die, which pins $d=6$ and hence $a_2=9$."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Splitting for the Perfect $\\text{AM-GM}$",
    "difficulty": 3,
    "task": "Find the minimum value.",
    "pyq": {
      "year": 2011,
      "paper": "1",
      "qno": "69"
    },
    "tags": [
      "AM-GM inequality",
      "minimization",
      "2011"
    ],
    "figure": "",
    "statement": "For $a>0$, find the minimum value of the sum of the real numbers $a^{-5}$, $a^{-4}$, $3a^{-3}$, $1$, $a^{8}$ and $a^{10}$.",
    "answer": "$\\boxed{8}$",
    "trap": "A student may apply AM-GM directly to the six listed terms; then the exponents sum to $-5-4-3+8+10=6$ (the constant $1$ contributes $a^0$), so the geometric mean is $\\sqrt[6]{a^{6}}=a$, which still depends on $a$ and gives no fixed bound. The trick is to split the coefficient-$3$ term $3a^{-3}=a^{-3}+a^{-3}+a^{-3}$ so that AM-GM is applied to eight terms whose exponents cancel to $0$.",
    "solutions": [
      {
        "name": "AM-GM after splitting into eight terms",
        "steps": [
          "Rewrite $3a^{-3}$ as three equal terms: $3a^{-3}=a^{-3}+a^{-3}+a^{-3}$. The sum becomes the eight positive terms $a^{-5},\\,a^{-4},\\,a^{-3},\\,a^{-3},\\,a^{-3},\\,a^{8},\\,a^{10},\\,1$.",
          "The exponents of these eight terms sum to $-5-4-3-3-3+8+10+0=0$, so their product is $a^{0}=1$ regardless of $a$. This is exactly why the split into eight terms works.",
          "By the AM-GM inequality on eight positive reals, $\\dfrac{a^{-5}+a^{-4}+3a^{-3}+a^{8}+a^{10}+1}{8}\\ge\\sqrt[8]{a^{-5}\\cdot a^{-4}\\cdot a^{-3}\\cdot a^{-3}\\cdot a^{-3}\\cdot a^{8}\\cdot a^{10}\\cdot 1}=\\sqrt[8]{a^{0}}=1.$",
          "Hence the sum $\\ge 8$. Equality in AM-GM requires all eight terms equal, and $a=1$ makes every term equal to $1$, so the bound is achieved.",
          "Minimum value $=8$."
        ]
      },
      {
        "name": "Calculus check via the derivative",
        "steps": [
          "Let $f(a)=a^{-5}+a^{-4}+3a^{-3}+1+a^{8}+a^{10}$ for $a>0$.",
          "Differentiate: $f'(a)=-5a^{-6}-4a^{-5}-9a^{-4}+8a^{7}+10a^{9}.$",
          "At $a=1$: $f'(1)=-5-4-9+8+10=0$, so $a=1$ is a critical point.",
          "For $a<1$ the negative powers dominate and $f'(a)<0$; for $a>1$ the positive powers dominate and $f'(a)>0$. Thus $a=1$ is a global minimum on $(0,\\infty)$.",
          "$f(1)=1+1+3+1+1+1=8$, confirming the minimum value is $8$."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE / JEE Advanced 2011, Paper 1, Q69. The engineered coefficients ($3$ on $a^{-3}$) are a deliberate signal: split until the weighted exponents cancel, turning AM-GM into a constant lower bound independent of $a$."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "A Self-Similar Radical Meets a Log",
    "difficulty": 3,
    "task": "Evaluate the expression.",
    "pyq": {
      "year": 2012,
      "paper": "1",
      "qno": "57"
    },
    "tags": [
      "nested radicals",
      "logarithms",
      "infinite recursion",
      "2012"
    ],
    "figure": "",
    "statement": "Find the value of $$6+\\log_{3/2}\\!\\left(\\frac{1}{3\\sqrt{2}}\\sqrt{4-\\frac{1}{3\\sqrt{2}}\\sqrt{4-\\frac{1}{3\\sqrt{2}}\\sqrt{4-\\frac{1}{3\\sqrt{2}}\\cdots}}}\\right).$$",
    "answer": "$\\boxed{4}$",
    "trap": "The infinitely nested radical is self-similar, so the whole inner expression $y$ reappears under its own square root. Students who try to expand the radicals term by term get lost; the key is to name the entire nested quantity $y$ and exploit that the same $y$ sits inside. A second subtlety: the fixed-point equation is quadratic, so one must discard the negative (extraneous) root before taking the logarithm.",
    "solutions": [
      {
        "name": "Fixed-point substitution for the nested radical",
        "steps": [
          "Let $y=\\dfrac{1}{3\\sqrt{2}}\\sqrt{4-\\dfrac{1}{3\\sqrt{2}}\\sqrt{4-\\cdots}}$ be the entire nested expression. By self-similarity, the quantity under the outermost radical (after the $4-$) is again $y$, so $y=\\dfrac{1}{3\\sqrt{2}}\\sqrt{4-y}.$",
          "Square both sides: $y^{2}=\\dfrac{1}{18}(4-y)$, since $(3\\sqrt2)^2=18$. Hence $18y^{2}=4-y$, i.e. $18y^{2}+y-4=0.$",
          "Solve the quadratic: $y=\\dfrac{-1\\pm\\sqrt{1+288}}{36}=\\dfrac{-1\\pm 17}{36}.$ The roots are $y=\\dfrac{16}{36}=\\dfrac{4}{9}$ and $y=-\\dfrac{1}{2}.$",
          "Since $y$ is a product of positive quantities it must be positive, so $y=\\dfrac{4}{9}$ (the negative root is rejected).",
          "Now $\\log_{3/2}\\!\\left(\\dfrac{4}{9}\\right)=\\log_{3/2}\\!\\left(\\left(\\dfrac{3}{2}\\right)^{-2}\\right)=-2,$ because $\\left(\\dfrac{3}{2}\\right)^{2}=\\dfrac{9}{4}$ so $\\left(\\dfrac{3}{2}\\right)^{-2}=\\dfrac{4}{9}.$",
          "Therefore the value is $6+(-2)=4.$"
        ]
      },
      {
        "name": "Iteration / convergence to the attracting fixed point",
        "steps": [
          "Define the map $g(y)=\\dfrac{1}{3\\sqrt2}\\sqrt{4-y}$; the infinite nested radical is the limit of the iteration $y_{n+1}=g(y_n)$ started from any admissible seed in $[0,4]$.",
          "A limit $L$ must satisfy $L=g(L)$, giving the same equation $18L^2+L-4=0$ with positive root $L=\\dfrac49$.",
          "Check it is attracting: $g'(y)=-\\dfrac{1}{6\\sqrt2\\,\\sqrt{4-y}}$, and at $y=\\dfrac49$, $\\sqrt{4-\\frac49}=\\sqrt{\\frac{32}{9}}=\\dfrac{4\\sqrt2}{3}$, so $|g'(4/9)|=\\dfrac{1}{6\\sqrt2}\\cdot\\dfrac{3}{4\\sqrt2}=\\dfrac{3}{48}=\\dfrac{1}{16}<1.$ The iteration converges, confirming the nested radical equals $\\dfrac49$.",
          "Take the logarithm base $\\tfrac32$: since $\\dfrac49=\\left(\\dfrac32\\right)^{-2}$, we get $\\log_{3/2}\\!\\left(\\dfrac49\\right)=-2.$",
          "Add $6$: the required value is $6-2=4.$"
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE / JEE Advanced 2012, Paper 1, Q57. An infinite nested radical is a disguised fixed point: name the whole tail once, form the quadratic, and keep only the positive root before feeding it to the logarithm."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "The Sign Pattern $(-1)^{k(k+1)/2}$",
    "difficulty": 4,
    "task": "Find all values the sum can take.",
    "pyq": {
      "year": 2013,
      "paper": "1",
      "qno": "53"
    },
    "tags": [
      "series with alternating signs",
      "sum of squares",
      "2013"
    ],
    "figure": "",
    "statement": "Let $$S_n=\\sum_{k=1}^{4n}(-1)^{\\frac{k(k+1)}{2}}\\,k^2.$$ Then $S_n$ can take value(s)\n\n(A) $1056$\n\n(B) $1088$\n\n(C) $1120$\n\n(D) $1332$",
    "answer": "(A), (D)",
    "trap": "The exponent $\\frac{k(k+1)}{2}$ is not simply alternating: the sign sequence is $-,-,+,+,-,-,+,+,\\dots$ with period $4$, not $+,-,+,-$. A student who reads $(-1)^{k(k+1)/2}$ as $(-1)^k$ gets the wrong grouping and a wrong closed form.",
    "solutions": [
      {
        "name": "Grouping in blocks of four",
        "steps": [
          "First decode the sign. Since $\\frac{k(k+1)}{2}$ is an integer, look at its parity. For $k\\equiv 1,2\\pmod4$ the triangular number $\\frac{k(k+1)}{2}$ is odd (sign $-1$), and for $k\\equiv 3,0\\pmod4$ it is even (sign $+1$). So the signs repeat with period $4$ as $-,-,+,+$.",
          "Group the $4n$ terms into $n$ consecutive blocks of four. The block starting at $k=4r+1$ (for $r=0,1,\\dots,n-1$) contributes $$-(4r+1)^2-(4r+2)^2+(4r+3)^2+(4r+4)^2.$$",
          "Simplify the block. Pairing $[(4r+3)^2-(4r+1)^2]+[(4r+4)^2-(4r+2)^2]$ and using $a^2-b^2=(a-b)(a+b)$ with difference $2$ in each pair: $2(8r+4)+2(8r+6)=32r+20$.",
          "Sum the blocks: $$S_n=\\sum_{r=0}^{n-1}(32r+20)=32\\cdot\\frac{(n-1)n}{2}+20n=16n(n-1)+20n=16n^2+4n=4n(4n+1).$$",
          "Now test the options against $4n(4n+1)$. For $n=8$: $4\\cdot8\\cdot33=1056$, matching (A). For $n=9$: $4\\cdot9\\cdot37=1332$, matching (D).",
          "Check (B) and (C): $4n(4n+1)=1088\\Rightarrow16n^2+4n-1088=0$ has no positive integer root; likewise $1120$ gives no integer $n$. So only (A) and (D) are attainable."
        ]
      },
      {
        "name": "Telescoping the running partial sum",
        "steps": [
          "Define the cumulative sum $S_n$ and compute the increment $S_n-S_{n-1}$, which is exactly the $n$-th block of four terms (the terms $k=4n-3,\\dots,4n$).",
          "With signs $-,-,+,+$, that increment is $-(4n-3)^2-(4n-2)^2+(4n-1)^2+(4n)^2$.",
          "Expand: $(4n-1)^2-(4n-3)^2=(2)(8n-4)=16n-8$ and $(4n)^2-(4n-2)^2=(2)(8n-2)=16n-4$, so the increment equals $32n-12$.",
          "Since $S_0=0$, sum the increments: $$S_n=\\sum_{m=1}^{n}(32m-12)=32\\cdot\\frac{n(n+1)}{2}-12n=16n^2+16n-12n=16n^2+4n=4n(4n+1),$$ the same closed form.",
          "Evaluate: $S_8=4\\cdot8\\cdot33=1056$ and $S_9=4\\cdot9\\cdot37=1332$; the intermediate targets $1088,1120$ are skipped because consecutive values jump by $S_9-S_8=276$. Hence (A) and (D)."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE / JEE Advanced 2013, Paper 1, Q53. The whole difficulty lives in reading the exponent correctly — once the sign pattern is seen to have period four, the sum collapses to the clean quadratic $4n(4n+1)$."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Two Missing Cards",
    "difficulty": 3,
    "task": "Find $k-20$.",
    "pyq": {
      "year": 2013,
      "paper": "1",
      "qno": "59"
    },
    "tags": [
      "arithmetic series sum",
      "consecutive integers",
      "2013"
    ],
    "figure": "",
    "statement": "A pack contains $n$ cards numbered from $1$ to $n$. Two cards bearing consecutive numbers are removed from the pack, and the sum of the numbers on the remaining cards is $1224$. If the smaller of the numbers on the two removed cards is $k$, then find the value of $k-20$.",
    "answer": "$\\boxed{5}$",
    "trap": "There are two unknowns ($n$ and $k$) but only one equation, so a student may think the problem is underdetermined. The hidden second constraint is that the removed pair $\\{k,k+1\\}$ must actually lie inside $\\{1,\\dots,n\\}$, which pins $n$ down by bounding $\\frac{n(n+1)}{2}$ tightly around $1224$.",
    "solutions": [
      {
        "name": "Bound $n$, then solve for $k$",
        "steps": [
          "The full sum of the pack is $\\dfrac{n(n+1)}{2}$. Removing $k$ and $k+1$ leaves $$\\frac{n(n+1)}{2}-(2k+1)=1224.$$",
          "The removed amount $2k+1$ ranges over its extremes as the pair slides. Smallest removal is the pair $\\{1,2\\}$ (remove $3$); largest is $\\{n-1,n\\}$ (remove $2n-1$). So $$1224+3\\le\\frac{n(n+1)}{2}\\le 1224+(2n-1).$$",
          "The left inequality $\\frac{n(n+1)}{2}\\ge 1227$ needs $n\\ge 50$ (since $\\frac{49\\cdot50}{2}=1225<1227\\le\\frac{50\\cdot51}{2}=1275$).",
          "The right inequality $\\frac{n(n+1)}{2}\\le 1223+2n$ i.e. $n^2-3n-2446\\le0$ needs $n\\le 50$ (since $n=51$ gives $51^2-153-2446=2=$ just over). So $n=50$ is forced.",
          "Substitute $n=50$: $\\dfrac{50\\cdot51}{2}-(2k+1)=1275-(2k+1)=1224\\Rightarrow 2k+1=51\\Rightarrow k=25.$",
          "Therefore $k-20=25-20=5.$"
        ]
      },
      {
        "name": "Near-average estimate for $n$",
        "steps": [
          "If no cards were removed, the sum would be $\\frac{n(n+1)}{2}$; removing two of the $n$ cards drops the total by only a little, so $\\frac{n(n+1)}{2}$ is just slightly above $1224$.",
          "Solve $\\frac{n(n+1)}{2}\\approx 1224\\Rightarrow n^2+n-2448\\approx0\\Rightarrow n\\approx\\frac{-1+\\sqrt{1+9792}}{2}=\\frac{-1+98.96}{2}\\approx 48.98.$ So try $n$ near $49$–$50$.",
          "Test $n=49$: full sum $=1225$, so we'd need to remove $1225-1224=1$; but the minimum removable pair-sum is $1+2=3>1$. Impossible.",
          "Test $n=50$: full sum $=1275$, so removal $=1275-1224=51=k+(k+1)=2k+1$, giving $k=25$, a valid pair $\\{25,26\\}\\subset\\{1,\\dots,50\\}$. Test $n=51$: full sum $=1326$, removal $=102=2k+1$ forces $k=50.5$, not an integer. So $n=50,k=25$ uniquely.",
          "Hence $k-20=5.$"
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE / JEE Advanced 2013, Paper 1, Q59. One equation with two unknowns is closed only because the removed pair-sum $2k+1$ is squeezed between $3$ and $2n-1$ — an inequality sandwich forces $n=50$."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "The right triangle whose sides are in A.P.",
    "difficulty": 2,
    "task": "Find the length of the smallest side.",
    "pyq": {
      "year": 2017,
      "paper": "1",
      "qno": "48"
    },
    "tags": [
      "arithmetic progression",
      "right triangle 3-4-5",
      "2017"
    ],
    "figure": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" font-size=\"13\"><polygon points=\"50,180 250,180 50,30\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"1.6\"/><rect x=\"50\" y=\"162\" width=\"18\" height=\"18\" fill=\"none\" stroke=\"var(--ink2)\" stroke-width=\"1\"/><line x1=\"50\" y1=\"180\" x2=\"250\" y2=\"180\" stroke=\"var(--gold)\" stroke-width=\"2.4\"/><text x=\"150\" y=\"200\" fill=\"var(--gold)\" text-anchor=\"middle\">base $4k=8$</text><text x=\"30\" y=\"108\" fill=\"var(--ink2)\" text-anchor=\"middle\">$3k=6$</text><text x=\"165\" y=\"98\" fill=\"var(--ink2)\" text-anchor=\"middle\">$5k=10$</text><text x=\"150\" y=\"20\" fill=\"var(--ink2)\" text-anchor=\"middle\">Area $=24$</text></svg>",
    "statement": "The sides of a right-angled triangle are in arithmetic progression. If the triangle has area $24$, then what is the length of its smallest side?",
    "answer": "$\\boxed{6}$",
    "trap": "Assuming the three sides are simply $a-d,\\,a,\\,a+d$ and grinding through the Pythagorean equation is fine — but a strong student who jumps to “any AP right triangle” must still remember that the AP condition forces the ratio $3:4:5$ exactly. Skipping the proof and just asserting $3:4:5$ (or worse, mis-assigning which side is the hypotenuse) is where marks are lost. The hypotenuse must be the largest term $a+d$, not $a$.",
    "solutions": [
      {
        "name": "Symmetric AP parametrisation $a-d,\\,a,\\,a+d$",
        "steps": [
          "Let the sides in increasing order be $a-d,\\;a,\\;a+d$ with $d>0$, so the hypotenuse is the largest side $a+d$.",
          "Pythagoras: $(a-d)^2+a^2=(a+d)^2$.",
          "Expand: $a^2-2ad+d^2+a^2=a^2+2ad+d^2$, which simplifies to $a^2-2ad=2ad$, i.e. $a^2=4ad$.",
          "Since $a\\neq0$, divide by $a$: $a=4d$. Thus the sides are $3d,\\;4d,\\;5d$ — the AP condition alone forces the $3:4:5$ ratio.",
          "Area $=\\tfrac12(3d)(4d)=6d^2=24$, so $d^2=4$ and $d=2$.",
          "Smallest side $=3d=6$."
        ]
      },
      {
        "name": "Recognise the primitive $3:4:5$ scaling directly",
        "steps": [
          "Any right triangle with sides in AP is similar to the $3,4,5$ triangle, since $3,4,5$ is itself an AP (common difference $1$) satisfying $3^2+4^2=5^2$.",
          "So write the sides as $3k,\\;4k,\\;5k$ for some scale $k>0$.",
          "The legs are $3k$ and $4k$, so the area is $\\tfrac12(3k)(4k)=6k^2$.",
          "Set $6k^2=24\\Rightarrow k^2=4\\Rightarrow k=2$.",
          "Smallest side $=3k=6$."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2017, Paper 1, Q48. The whole problem collapses the moment you prove that “right triangle with sides in AP” is a rigid condition — it pins the shape to $3:4:5$ and leaves only the scale free."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Two APs, one union: $|X\\cup Y|$",
    "difficulty": 3,
    "task": "Find the number of elements in the union.",
    "pyq": {
      "year": 2018,
      "paper": "1",
      "qno": "9"
    },
    "tags": [
      "arithmetic progression",
      "common terms",
      "sets union",
      "2018"
    ],
    "figure": "",
    "statement": "Let $X$ be the set consisting of the first $2018$ terms of the arithmetic progression $1,\\,6,\\,11,\\dots$, and $Y$ be the set consisting of the first $2018$ terms of the arithmetic progression $9,\\,16,\\,23,\\dots$. Then the number of elements in the set $X\\cup Y$ is ______.",
    "answer": "$\\boxed{3748}$",
    "trap": "Everyone gets $|X\\cup Y|=|X|+|Y|-|X\\cap Y|=4036-|X\\cap Y|$. The trap is $|X\\cap Y|$: the common terms form an AP with common difference $\\operatorname{lcm}(5,7)=35$, but you must NOT count all such terms — only those that actually appear in BOTH finite lists. You have to bound by the smaller of the two last terms ($X$ ends at $10086$, $Y$ ends at $14128$), so the ceiling for common terms is $10086$, not $14128$. Using the wrong upper bound is the classic error.",
    "solutions": [
      {
        "name": "Congruences + count common terms in range",
        "steps": [
          "$X$: first term $1$, common difference $5$, so $X=\\{5m+1: m=0,\\dots,2017\\}$ — the terms are exactly the integers $\\equiv1\\pmod5$ from $1$ up to $1+5\\cdot2017=10086$.",
          "$Y$: first term $9$, common difference $7$, so $Y=\\{7n+9: n=0,\\dots,2017\\}$ — the terms are $\\equiv2\\pmod7$ from $9$ up to $9+7\\cdot2017=14128$.",
          "A common term $t$ satisfies $t\\equiv1\\pmod5$ and $t\\equiv2\\pmod7$. By CRT this is a single residue mod $35$: testing, $t\\equiv16\\pmod{35}$ (indeed $16\\equiv1\\pmod5$ and $16\\equiv2\\pmod7$).",
          "So the common terms are $16,\\,51,\\,86,\\dots$, an AP with common difference $35$ and first term $16$.",
          "A value counts only if it lies in BOTH finite lists, i.e. $t\\le\\min(10086,14128)=10086$ (and $t\\ge16$).",
          "Count: $16+35(j-1)\\le10086\\Rightarrow 35(j-1)\\le10070\\Rightarrow j-1\\le287.71\\Rightarrow j\\le288$. So $|X\\cap Y|=288$.",
          "Therefore $|X\\cup Y|=2018+2018-288=3748$."
        ]
      },
      {
        "name": "Match indices directly (no modular arithmetic)",
        "steps": [
          "Write a general term of each list: $x_m=1+5m$ ($0\\le m\\le2017$) and $y_n=9+7n$ ($0\\le n\\le2017$).",
          "Common terms need $1+5m=9+7n$, i.e. $5m-7n=8$.",
          "One particular solution: $m=3,\\,n=1$ (gives $16$). The general solution is $m=3+7t,\\;n=1+5t$ for integer $t\\ge0$.",
          "Index constraints: $m=3+7t\\le2017\\Rightarrow t\\le287.71$ and $n=1+5t\\le2017\\Rightarrow t\\le403.2$. The binding one is $t\\le287$.",
          "So $t=0,1,\\dots,287$ gives $288$ common terms — note the $X$-index ($m$) runs out first, which is exactly why $10086$ is the cutoff.",
          "Hence $|X\\cup Y|=2018+2018-288=3748$."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2018, Paper 1, Q9. Inclusion–exclusion is trivial; the exam is really testing whether you cap the common-term AP by the *smaller* of the two finite last terms rather than by the naive lcm-run."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "The Golden Recurrence: $a_n=\\dfrac{\\alpha^n-\\beta^n}{\\alpha-\\beta}$",
    "difficulty": 4,
    "task": "Decide which options are correct.",
    "pyq": {
      "year": 2019,
      "paper": "1",
      "qno": "1"
    },
    "tags": [
      "recurrence",
      "Fibonacci-type sequence",
      "geometric series",
      "generating function",
      "2019"
    ],
    "figure": "",
    "statement": "Let $\\alpha$ and $\\beta$ be the roots of $x^2-x-1=0$, with $\\alpha>\\beta$. For all positive integers $n$, define\n$$a_n=\\frac{\\alpha^n-\\beta^n}{\\alpha-\\beta},\\quad n\\ge 1,\\qquad b_1=1,\\qquad b_n=a_{n-1}+a_{n+1},\\ n\\ge 2.$$\nThen which of the following options is/are correct?\n\n(A) $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{b_n}{10^n}=\\frac{8}{89}$\n\n(B) $b_n=\\alpha^n+\\beta^n$ for all $n\\ge 1$\n\n(C) $a_1+a_2+a_3+\\cdots+a_n=a_{n+2}-1$ for all $n\\ge 1$\n\n(D) $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{a_n}{10^n}=\\frac{10}{89}$",
    "answer": "(B), (C), (D)",
    "trap": "The sequence $a_n$ is exactly the Fibonacci sequence $1,1,2,3,5,\\dots$, and $b_n$ is the Lucas sequence $1,3,4,7,11,\\dots$. The seductive move is to trust the given $b_1=1$ and blindly test (A) with the Lucas generating function $\\frac{x(2-x)}{1-x-x^2}$ — which correctly gives $\\frac{19}{89}$, NOT $\\frac{8}{89}$. Students who mis-derive the numerator (e.g. forgetting the $b_1$ term is already $1$, or using $\\frac{x}{1-x-x^2}$ for both series) can accidentally 'confirm' the wrong (A) or reject the right (D).",
    "solutions": [
      {
        "name": "Direct Binet manipulation",
        "steps": [
          "Since $\\alpha,\\beta$ are the roots of $x^2-x-1=0$, we have $\\alpha+\\beta=1$, $\\alpha\\beta=-1$, and each satisfies $x^2=x+1$. Also $\\alpha-\\beta=\\sqrt{(\\alpha+\\beta)^2-4\\alpha\\beta}=\\sqrt{1+4}=\\sqrt5$.",
          "**Option (B).** For $n\\ge 2$, $b_n=a_{n-1}+a_{n+1}=\\dfrac{(\\alpha^{n-1}-\\beta^{n-1})+(\\alpha^{n+1}-\\beta^{n+1})}{\\alpha-\\beta}=\\dfrac{\\alpha^{n-1}(1+\\alpha^2)-\\beta^{n-1}(1+\\beta^2)}{\\alpha-\\beta}$.",
          "Now $1+\\alpha^2=1+(\\alpha+1)=\\alpha+2$; but more useful is $1+\\alpha^2=\\alpha^2+1$. Use instead $\\alpha^{n+1}=\\alpha^{n-1}\\cdot\\alpha^2=\\alpha^{n-1}(\\alpha+1)$, so $\\alpha^{n-1}+\\alpha^{n+1}=\\alpha^{n-1}(2+\\alpha)$. Hmm — cleaner: factor $\\alpha^n$: $\\alpha^{n-1}+\\alpha^{n+1}=\\alpha^n(\\alpha^{-1}+\\alpha)$.",
          "Since $\\alpha\\beta=-1$, $\\alpha^{-1}=-\\beta$, so $\\alpha^{-1}+\\alpha=\\alpha-\\beta=\\sqrt5$. Thus $\\alpha^{n-1}+\\alpha^{n+1}=\\sqrt5\\,\\alpha^n$. Similarly $\\beta^{-1}=-\\alpha$, giving $\\beta^{-1}+\\beta=\\beta-\\alpha=-\\sqrt5$, so $\\beta^{n-1}+\\beta^{n+1}=-\\sqrt5\\,\\beta^n$.",
          "Therefore $b_n=\\dfrac{\\sqrt5\\,\\alpha^n-(-\\sqrt5\\,\\beta^n)}{\\sqrt5}=\\alpha^n+\\beta^n$ for $n\\ge 2$. For $n=1$: $\\alpha+\\beta=1=b_1$, so the formula holds for all $n\\ge 1$. **(B) is TRUE.**",
          "**Option (C).** Sum the Binet form: $\\sum_{r=1}^n a_r=\\dfrac{1}{\\sqrt5}\\Big(\\sum_{r=1}^n\\alpha^r-\\sum_{r=1}^n\\beta^r\\Big)=\\dfrac{1}{\\sqrt5}\\Big(\\dfrac{\\alpha(\\alpha^n-1)}{\\alpha-1}-\\dfrac{\\beta(\\beta^n-1)}{\\beta-1}\\Big)$.",
          "Because $x^2=x+1$, we have $x-1=x^2-x-\\text{?}$; more directly $\\dfrac{x}{x-1}$: note $\\alpha-1=\\alpha^2-\\alpha-1+\\alpha=\\alpha^2-1$... use the clean identity instead: since $\\alpha^2=\\alpha+1\\Rightarrow \\alpha^2-\\alpha=1\\Rightarrow \\alpha(\\alpha-1)=1$, so $\\dfrac{\\alpha}{\\alpha-1}=\\alpha^2$. Likewise $\\dfrac{\\beta}{\\beta-1}=\\beta^2$.",
          "Hence $\\sum_{r=1}^n a_r=\\dfrac{1}{\\sqrt5}\\big(\\alpha^2(\\alpha^n-1)-\\beta^2(\\beta^n-1)\\big)=\\dfrac{(\\alpha^{n+2}-\\beta^{n+2})-(\\alpha^2-\\beta^2)}{\\sqrt5}=a_{n+2}-a_2$.",
          "Since $a_2=\\dfrac{\\alpha^2-\\beta^2}{\\sqrt5}=\\dfrac{(\\alpha+\\beta)(\\alpha-\\beta)}{\\sqrt5}=\\dfrac{1\\cdot\\sqrt5}{\\sqrt5}=1$, we get $\\sum_{r=1}^n a_r=a_{n+2}-1$. **(C) is TRUE.**",
          "**Option (D).** Let $F(x)=\\sum_{n\\ge1}a_n x^n=\\dfrac{1}{\\sqrt5}\\Big(\\dfrac{\\alpha x}{1-\\alpha x}-\\dfrac{\\beta x}{1-\\beta x}\\Big)$. Combining over a common denominator, the numerator is $\\dfrac{x(\\alpha-\\beta)}{\\sqrt5}=x$ and the denominator is $(1-\\alpha x)(1-\\beta x)=1-(\\alpha+\\beta)x+\\alpha\\beta x^2=1-x-x^2$. So $F(x)=\\dfrac{x}{1-x-x^2}$.",
          "At $x=\\tfrac1{10}$: $F(\\tfrac1{10})=\\dfrac{1/10}{1-1/10-1/100}=\\dfrac{1/10}{89/100}=\\dfrac{10}{89}$. **(D) is TRUE.**",
          "**Option (A).** With $b_n=\\alpha^n+\\beta^n$, $G(x)=\\sum_{n\\ge1}b_n x^n=\\dfrac{\\alpha x}{1-\\alpha x}+\\dfrac{\\beta x}{1-\\beta x}=\\dfrac{x(\\alpha+\\beta)-2\\alpha\\beta x^2}{1-x-x^2}=\\dfrac{x+2x^2}{1-x-x^2}$.",
          "At $x=\\tfrac1{10}$: $G(\\tfrac1{10})=\\dfrac{1/10+2/100}{89/100}=\\dfrac{12/100}{89/100}=\\dfrac{12}{89}\\ne\\dfrac{8}{89}$. (Equivalently, in the $\\alpha^{-1}=-\\beta$ form $G(x)=\\frac{x(2-x)}{1-x-x^2}=\\frac{19/100}{89/100}=\\frac{19}{89}$ if one uses the two-sided relation; either way it is not $\\tfrac{8}{89}$.) **(A) is FALSE.**",
          "Answer: **(B), (C), (D)**."
        ]
      },
      {
        "name": "Fibonacci/Lucas identities (integer route)",
        "steps": [
          "Recognise the recurrence: from $x^2=x+1$, both $\\alpha^n$ and $\\beta^n$ satisfy $t_{n+1}=t_n+t_{n-1}$, so $a_n$ obeys $a_{n+1}=a_n+a_{n-1}$ with $a_1=1$, $a_2=1$. Thus $a_n=F_n$, the Fibonacci numbers $1,1,2,3,5,8,13,\\dots$.",
          "**(B).** $b_n=a_{n-1}+a_{n+1}=F_{n-1}+F_{n+1}=L_n$, the Lucas numbers $1,3,4,7,11,\\dots$, and indeed $L_n=\\alpha^n+\\beta^n$ is the standard closed form; $b_1=1=L_1$ matches. TRUE.",
          "**(C).** The Fibonacci partial-sum identity $F_1+F_2+\\cdots+F_n=F_{n+2}-1$ is classical (telescoping $F_k=F_{k+2}-F_{k+1}$). Since $a_k=F_k$ and $a_{n+2}=F_{n+2}$, this reads $a_1+\\cdots+a_n=a_{n+2}-1$. TRUE.",
          "**(D).** Evaluate numerically: $\\sum \\frac{F_n}{10^n}=\\frac{1}{10}+\\frac{1}{100}+\\frac{2}{1000}+\\frac{3}{10^4}+\\cdots=0.11235955\\ldots=\\frac{10}{89}$ (the well-known Fibonacci decimal $0.\\overline{011235955\\ldots}$ scaled). TRUE.",
          "**(A).** The Lucas analogue is $\\sum\\frac{L_n}{10^n}=\\frac{1}{10}+\\frac{3}{100}+\\frac{4}{1000}+\\frac{7}{10^4}+\\cdots$. Using $L_n=F_{n-1}+F_{n+1}$ and the generating function $\\frac{x+2x^2}{1-x-x^2}$ at $x=\\frac1{10}$ gives $\\frac{12}{89}$ (or $\\frac{19}{89}$ under the alternate convention), never $\\frac{8}{89}$. FALSE.",
          "Answer: **(B), (C), (D)**."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2019, Paper 1, QS2-Q1. Hidden Fibonacci/Lucas problem: spotting that $a_n=F_n$ and $b_n=L_n$ collapses three of the four options to textbook identities — the generating-function value $\\frac{10}{89}$ is the famous Fibonacci decimal in disguise."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Three APs meet: $\\mathrm{AP}(1;3)\\cap\\mathrm{AP}(2;5)\\cap\\mathrm{AP}(3;7)$",
    "difficulty": 4,
    "task": "Find the value of $a+d$.",
    "pyq": {
      "year": 2019,
      "paper": "1",
      "qno": "5"
    },
    "tags": [
      "arithmetic progression",
      "Chinese Remainder Theorem",
      "congruences",
      "2019"
    ],
    "figure": "",
    "statement": "Let $\\mathrm{AP}(a;d)$ denote the set of all the terms of an infinite arithmetic progression with first term $a$ and common difference $d>0$. If $$\\mathrm{AP}(1;3)\\cap\\mathrm{AP}(2;5)\\cap\\mathrm{AP}(3;7)=\\mathrm{AP}(a;d),$$ then $a+d$ equals ____.",
    "answer": "$\\boxed{157}$",
    "trap": "The three progressions all count from term index $1$, so the residues are $x\\equiv 1\\pmod 3$, $x\\equiv 2\\pmod 5$, $x\\equiv 3\\pmod 7$ — NOT $x\\equiv 0$. Students who casually read off $x\\equiv a\\pmod d$ but then hunt for the smallest value satisfying only two of the three congruences, or who take $a$ as the least residue class rather than the least positive term actually in all three sets, get the wrong first term. The common difference is easy ($\\mathrm{lcm}=105$); the first term is where it breaks.",
    "solutions": [
      {
        "name": "Chinese Remainder Theorem (residue bookkeeping)",
        "steps": [
          "A number $x$ lies in $\\mathrm{AP}(1;3)$ iff $x\\equiv 1\\pmod 3$; in $\\mathrm{AP}(2;5)$ iff $x\\equiv 2\\pmod 5$; in $\\mathrm{AP}(3;7)$ iff $x\\equiv 3\\pmod 7$.",
          "The moduli $3,5,7$ are pairwise coprime, so by CRT the three congruences have a unique solution modulo $\\mathrm{lcm}(3,5,7)=105$. Hence the intersection is itself an AP with common difference $d=105$.",
          "Solve step by step. From $x\\equiv 1\\pmod 3$ and $x\\equiv 2\\pmod 5$: write $x=5k+2$; then $5k+2\\equiv 1\\pmod 3\\Rightarrow 2k\\equiv -1\\equiv 2\\pmod 3\\Rightarrow k\\equiv 1\\pmod 3$. So $k=3m+1$ and $x=15m+7$, i.e. $x\\equiv 7\\pmod{15}$.",
          "Now impose $x\\equiv 3\\pmod 7$: $15m+7\\equiv 3\\pmod 7\\Rightarrow m\\equiv -4\\equiv 3\\pmod 7$ (since $15\\equiv 1\\pmod 7$ and $7\\equiv 0$). So $m=7t+3$ and $x=15(7t+3)+7=105t+52$.",
          "Thus $x\\equiv 52\\pmod{105}$; the smallest positive common term is $a=52$ (check: $52=3\\cdot 17+1$, $52=5\\cdot 10+2$, $52=7\\cdot 7+3$ ✓).",
          "Therefore $a=52$, $d=105$, and $a+d=52+105=157$."
        ]
      },
      {
        "name": "Merge two APs, then the third",
        "steps": [
          "First intersect $\\mathrm{AP}(1;3)=\\{1,4,7,10,13,\\dots\\}$ with $\\mathrm{AP}(2;5)=\\{2,7,12,17,22,\\dots\\}$. Scanning for the first common value: $7$ appears in both.",
          "Two APs with coprime differences $3$ and $5$ intersect in an AP with difference $\\mathrm{lcm}(3,5)=15$. So the intersection is $\\{7,22,37,52,\\dots\\}=\\mathrm{AP}(7;15)$.",
          "Now intersect $\\mathrm{AP}(7;15)=\\{7,22,37,52,67,\\dots\\}$ with $\\mathrm{AP}(3;7)=\\{3,10,17,24,31,38,45,52,\\dots\\}$.",
          "Test the terms $7,22,37,52,\\dots$ for membership in $\\mathrm{AP}(3;7)$ (i.e. $\\equiv 3\\pmod 7$): $7\\equiv 0$, $22\\equiv 1$, $37\\equiv 2$, $52\\equiv 3$ ✓. The first common term is $52$.",
          "The new common difference is $\\mathrm{lcm}(15,7)=105$, so the intersection is $\\mathrm{AP}(52;105)$, giving $a=52$, $d=105$.",
          "Hence $a+d=52+105=157$."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE / JEE Advanced 2019, Paper 1, QS3-Q5. The intersection of finitely many APs with pairwise-coprime differences is again a single AP — its difference is the lcm and its first term is the CRT residue, so the whole answer is 'read off' once you translate the sets into congruences."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "A min and a max, wrapped in logs",
    "difficulty": 3,
    "task": "Find the value of $\\log_2(m^3)+\\log_3(M^2)$.",
    "pyq": {
      "year": 2020,
      "paper": "1",
      "qno": "13"
    },
    "tags": [
      "AM-GM inequality",
      "logarithms",
      "2020"
    ],
    "figure": "",
    "statement": "Let $m$ be the minimum possible value of $\\log_3\\!\\left(3^{y_1}+3^{y_2}+3^{y_3}\\right)$, where $y_1,y_2,y_3$ are real numbers for which $y_1+y_2+y_3=9$. Let $M$ be the maximum possible value of $\\left(\\log_3 x_1+\\log_3 x_2+\\log_3 x_3\\right)$, where $x_1,x_2,x_3$ are positive real numbers for which $x_1+x_2+x_3=9$. Then the value of $$\\log_2\\!\\left(m^3\\right)+\\log_3\\!\\left(M^2\\right)$$ is ______.",
    "answer": "$\\boxed{8}$",
    "trap": "The two halves optimise in opposite directions and it is tempting to blur them. For $m$ the quantities $3^{y_i}$ are the free positive variables whose SUM must be minimised, but the constraint is on the sum of the exponents $y_i$ — AM–GM on the $3^{y_i}$ pins their product, not their sum, so the minimising configuration is $y_1=y_2=y_3=3$. For $M$ the $x_i$ are the free variables with fixed sum, and it is their PRODUCT (hence $\\sum\\log_3 x_i$) that is maximised, again at equality $x_i=3$. Confusing which quantity is fixed and which is optimised — or forgetting that $\\log_3$ is increasing so 'minimise $3^{y_1}+3^{y_2}+3^{y_3}$' is equivalent to 'minimise $m$' — is the classic slip.",
    "solutions": [
      {
        "name": "AM–GM on each part",
        "steps": [
          "Finding $m$: the three numbers $3^{y_1},3^{y_2},3^{y_3}$ are positive with fixed product $3^{y_1}\\cdot 3^{y_2}\\cdot 3^{y_3}=3^{y_1+y_2+y_3}=3^{9}$.",
          "By AM–GM, $3^{y_1}+3^{y_2}+3^{y_3}\\ge 3\\sqrt[3]{3^{y_1+y_2+y_3}}=3\\sqrt[3]{3^{9}}=3\\cdot 3^{3}=3^{4}=81$, with equality when $3^{y_1}=3^{y_2}=3^{y_3}$, i.e. $y_1=y_2=y_3=3$.",
          "Since $\\log_3$ is increasing, the minimum of $\\log_3(3^{y_1}+3^{y_2}+3^{y_3})$ is $\\log_3 81=\\log_3 3^{4}=4$. So $m=4$.",
          "Finding $M$: the $x_i>0$ have fixed sum $x_1+x_2+x_3=9$. By AM–GM, $\\dfrac{x_1+x_2+x_3}{3}\\ge\\sqrt[3]{x_1x_2x_3}\\Rightarrow x_1x_2x_3\\le 3^{3}=27$, with equality when $x_1=x_2=x_3=3$.",
          "Then $\\log_3 x_1+\\log_3 x_2+\\log_3 x_3=\\log_3(x_1x_2x_3)\\le\\log_3 27=3$. So $M=3$.",
          "Finally $\\log_2(m^3)+\\log_3(M^2)=\\log_2(4^{3})+\\log_3(3^{2})=\\log_2 2^{6}+2=6+2=8$."
        ]
      },
      {
        "name": "Lagrange multipliers (calculus check)",
        "steps": [
          "For $m$: minimise $f=3^{y_1}+3^{y_2}+3^{y_3}$ subject to $g=y_1+y_2+y_3-9=0$. Then $\\nabla f=\\lambda\\nabla g$ gives $(\\ln 3)\\,3^{y_i}=\\lambda$ for each $i$, so all $3^{y_i}$ are equal, forcing $y_1=y_2=y_3=3$ by the constraint.",
          "At this critical point $f=3\\cdot 3^{3}=81$ and it is a minimum (the objective $\\to\\infty$ as any $y_i\\to+\\infty$ with the others compensating). Hence $m=\\log_3 81=4$.",
          "For $M$: maximise $h=\\log_3 x_1+\\log_3 x_2+\\log_3 x_3=\\frac{1}{\\ln 3}\\sum\\ln x_i$ subject to $x_1+x_2+x_3=9$. Setting $\\nabla h=\\mu\\nabla(\\sum x_i)$ gives $\\frac{1}{(\\ln 3)x_i}=\\mu$, so all $x_i$ equal, i.e. $x_i=3$.",
          "There $h=\\log_3(3\\cdot 3\\cdot 3)=\\log_3 27=3$, a maximum (concavity of $\\log$). Hence $M=3$.",
          "Both extrema match the AM–GM values, so $\\log_2(m^3)+\\log_3(M^2)=\\log_2 64+\\log_3 9=6+2=8$."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE / JEE Advanced 2020, Paper 1, Q13. Two mirror-image AM–GM problems glued together — one fixes the product and bounds the sum below, the other fixes the sum and bounds the product above — both achieving equality at the symmetric point $=3$."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "The Lone Seed $c$",
    "difficulty": 4,
    "task": "Count the admissible starting values.",
    "pyq": {
      "year": 2020,
      "paper": "1",
      "qno": "14"
    },
    "tags": [
      "arithmetic progression",
      "geometric progression",
      "series sums",
      "2020"
    ],
    "figure": "",
    "statement": "Let $a_1, a_2, a_3, \\ldots$ be a sequence of positive integers in arithmetic progression with common difference $2$. Also, let $b_1, b_2, b_3, \\ldots$ be a sequence of positive integers in geometric progression with common ratio $2$. If $a_1 = b_1 = c$, then the number of all possible values of $c$, for which the equality $$2\\,(a_1 + a_2 + \\cdots + a_n) = b_1 + b_2 + \\cdots + b_n$$ holds for some positive integer $n$, is ______.",
    "answer": "$\\boxed{1}$",
    "trap": "A tempting shortcut is to fix a small $n$ (say $n=1$ or $n=2$) and read off a $c$, then declare 'infinitely many'. But $c$ must be one and the same positive integer that also makes the equality hold — and the exponential $2^n$ eventually dwarfs the quadratic AP-sum, so only a narrow window of $n$ can give a positive integer $c$ at all. The real work is bounding $n$, not solving one case.",
    "solutions": [
      {
        "name": "Reduce to an integer-valued function of $n$",
        "steps": [
          "The AP is $a_k = c + 2(k-1)$, so $a_1 + \\cdots + a_n = nc + 2\\cdot\\frac{n(n-1)}{2} = nc + n(n-1) = nc + n^2 - n$.",
          "The GP is $b_k = c\\cdot 2^{k-1}$, so $b_1 + \\cdots + b_n = c\\,(2^n - 1)$.",
          "The condition $2(a_1+\\cdots+a_n) = b_1+\\cdots+b_n$ becomes $2\\bigl(nc + n^2 - n\\bigr) = c\\,(2^n-1)$.",
          "Collect the $c$-terms: $2nc + 2n^2 - 2n = c\\,2^n - c$, i.e. $c\\,(2^n - 1 - 2n) = 2n^2 - 2n$.",
          "Hence $c = \\dfrac{2n^2 - 2n}{2^n - 2n - 1}$, and we need this to be a positive integer for some positive integer $n$.",
          "Positivity of the denominator: $2^n - 2n - 1 > 0$ first holds at $n = 3$ ($8 - 6 - 1 = 1 > 0$); for $n = 1$ it is $-2$ and for $n = 2$ it is $-1$ (numerator $0$ there, giving $c = 0$, not a positive integer). So test $n \\ge 3$.",
          "$n = 3:\\ c = \\dfrac{12}{1} = 12$ — a positive integer. Valid.",
          "$n = 4:\\ c = \\dfrac{24}{7}$; $\\ n = 5:\\ c = \\dfrac{40}{21}$; $\\ n = 6:\\ c = \\dfrac{60}{51} = \\dfrac{20}{17}$ — none integral.",
          "For $n \\ge 4$, $c = \\frac{2n^2-2n}{2^n-2n-1} < 2$ because $2^n - 2n - 1 > n^2 - n$ there, so $c$ can only be $1$; but $c=1$ would need $2^n - 2n - 1 = 2n^2 - 2n$, i.e. $2^n = 2n^2 + 1$, which has no solution for $n \\ge 4$ (LHS $16,32,\\ldots$ vs RHS $33,51,\\ldots$).",
          "So the only working case is $n = 3$ with $c = 12$: exactly $\\boxed{1}$ value of $c$."
        ]
      },
      {
        "name": "Growth-rate squeeze (bound $n$ first)",
        "steps": [
          "Rewrite the requirement as $c = \\dfrac{2n(n-1)}{2^n - 2n - 1}$; for a positive integer $c$ we need $c \\ge 1$, i.e. $2n(n-1) \\ge 2^n - 2n - 1$, i.e. $2^n \\le 2n^2 + 1$.",
          "Compare the two sides: at $n=3$, $2^3 = 8 \\le 2\\cdot 9 + 1 = 19$ ✓; at $n=4$, $16 \\le 33$ ✓; at $n=5$, $32 \\le 51$ ✓; at $n=6$, $64 \\le 73$ ✓; at $n=7$, $128 \\le 99$ ✗.",
          "For $n \\ge 7$ the exponential $2^n$ has permanently overtaken $2n^2+1$, so $c < 1$ and no positive integer $c$ exists. Thus $n \\in \\{3,4,5,6\\}$ are the only candidates.",
          "Now $c$ must be a positive integer, so the denominator $2^n - 2n - 1$ must divide the numerator $2n(n-1)$:",
          "$n=3:\\ \\dfrac{12}{1} = 12$ ✓ (integer); $n=4:\\ \\dfrac{24}{7}$ ✗; $n=5:\\ \\dfrac{40}{21}$ ✗; $n=6:\\ \\dfrac{60}{51}$ ✗.",
          "Only $n=3$ survives, giving the single value $c = 12$. Sanity check: AP $12,14,16$ sums to $42$, twice is $84$; GP $12,24,48$ sums to $84$. Equal. ✓",
          "Therefore the number of admissible $c$ is $\\boxed{1}$."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2020, Paper 1, Q14. The decisive move is realising the equality is a single Diophantine constraint linking one unknown $c$ to a free index $n$ — exponential-vs-polynomial growth caps $n$, turning an 'infinitely many?' scare into a four-case check."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Circles Marching to a Limit",
    "difficulty": 4,
    "task": "Identify the correct relation.",
    "pyq": {
      "year": 2021,
      "paper": "2",
      "qno": "13"
    },
    "tags": [
      "geometric progression",
      "sum of GP",
      "circles and geometry",
      "2021"
    ],
    "figure": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" font-size=\"12\">\n  <line x1=\"12\" y1=\"150\" x2=\"308\" y2=\"150\" stroke=\"var(--ink3)\" stroke-width=\"1\"/>\n  <text x=\"300\" y=\"165\" fill=\"var(--ink2)\">x</text>\n  <line x1=\"20\" y1=\"20\" x2=\"20\" y2=\"200\" stroke=\"var(--ink2)\" stroke-width=\"0.8\"/>\n  <text x=\"8\" y=\"18\" fill=\"var(--ink2)\">y</text>\n  <circle cx=\"20\" cy=\"150\" r=\"128\" fill=\"none\" stroke=\"var(--gold)\" stroke-width=\"1.5\"/>\n  <text x=\"150\" y=\"40\" fill=\"var(--gold)\">M: r = 1025/513</text>\n  <circle cx=\"20\" cy=\"150\" r=\"64\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"1\"/>\n  <text x=\"22\" y=\"92\" fill=\"var(--ink2)\">C₁</text>\n  <circle cx=\"84\" cy=\"150\" r=\"32\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"1\"/>\n  <text x=\"70\" y=\"126\" fill=\"var(--ink2)\">C₂</text>\n  <circle cx=\"116\" cy=\"150\" r=\"16\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"1\"/>\n  <circle cx=\"132\" cy=\"150\" r=\"8\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"1\"/>\n  <circle cx=\"140\" cy=\"150\" r=\"4\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"1\"/>\n  <text x=\"126\" y=\"175\" fill=\"var(--ink2)\">C₃…</text>\n  <circle cx=\"20\" cy=\"150\" r=\"2\" fill=\"var(--ink3)\"/>\n  <text x=\"2\" y=\"165\" fill=\"var(--ink2)\">O</text>\n</svg>",
    "statement": "Let $M = \\{(x,y)\\in\\mathbb{R}\\times\\mathbb{R} : x^2 + y^2 \\le r^2\\}$, where $r>0$. Consider the geometric progression $a_n = \\dfrac{1}{2^{n-1}}$, $n = 1,2,3,\\ldots$. Let $S_0 = 0$ and, for $n\\ge 1$, let $S_n$ denote the sum of the first $n$ terms of this progression. For $n\\ge 1$, let $C_n$ denote the circle with center $(S_{n-1}, 0)$ and radius $a_n$. Consider $M$ with $r = \\dfrac{1025}{513}$. Let $k$ be the number of all those circles $C_n$ that are inside $M$. Let $l$ be the maximum possible number of circles among these $k$ circles such that no two circles intersect. Then\n\n(A) $k + 2l = 22$\n\n(B) $2k + l = 26$\n\n(C) $2k + 3l = 34$\n\n(D) $3k + 2l = 40$",
    "answer": "(D)",
    "trap": "Two ways to lose here. First, students test containment by the center alone or by $S_n + a_n$ (using $S_n$, the sum of $n$ terms) instead of $S_{n-1} + a_n$ — the rightmost point of $C_n$ is $S_{n-1} + a_n$, not $S_n + a_n$. Second, on the $l$-count, one assumes consecutive circles overlap and halves $k$; in fact adjacent $C_n$ are externally tangent (they touch but do not cross), so a maximal pairwise non-intersecting family alternates — giving $l = \\lceil k/2\\rceil$, not $\\lfloor k/2\\rfloor$.",
    "solutions": [
      {
        "name": "Direct containment count, then a tangency argument for $l$",
        "steps": [
          "The GP has first term $1$ and ratio $\\tfrac12$, so $S_{n-1} = \\dfrac{1 - (1/2)^{n-1}}{1 - 1/2} = 2\\left(1 - \\dfrac{1}{2^{n-1}}\\right) = 2 - \\dfrac{1}{2^{n-2}}$.",
          "Circle $C_n$ has center $(S_{n-1}, 0)$ on the positive $x$-axis and radius $a_n = \\dfrac{1}{2^{n-1}}$; its rightmost point is at $x = S_{n-1} + a_n = 2 - \\dfrac{1}{2^{n-2}} + \\dfrac{1}{2^{n-1}} = 2 - \\dfrac{1}{2^{n-1}}$.",
          "Since every $C_n$ sits on the axis with $O$ nearest to it, $C_n \\subseteq M$ iff its farthest point from the origin lies within $r$: $S_{n-1} + a_n \\le r$, i.e. $2 - \\dfrac{1}{2^{n-1}} \\le \\dfrac{1025}{513}$.",
          "Rearrange: $2 - \\dfrac{1025}{513} \\le \\dfrac{1}{2^{n-1}}$, i.e. $\\dfrac{1026 - 1025}{513} = \\dfrac{1}{513} \\le \\dfrac{1}{2^{n-1}}$, so $2^{n-1} \\le 513$.",
          "The largest such $n$ is $n = 10$ (since $2^{9} = 512 \\le 513 < 1024 = 2^{10}$). Thus $C_1, \\ldots, C_{10}$ are inside $M$ and $k = 10$.",
          "Now $l$: the rightmost point of $C_n$ is $S_{n-1}+a_n$ and the leftmost point of $C_{n+1}$ is $S_n - a_{n+1} = S_{n-1} + a_n - a_{n+1}$. Since $S_n = S_{n-1} + a_n$, the two circles share exactly the point $x = S_n$ — they are externally tangent, so $C_n$ and $C_{n+1}$'intersect' (touch).",
          "For a maximal subfamily with no two circles touching, pick every other circle: $C_1, C_3, C_5, C_7, C_9$ — these are pairwise disjoint. That is $l = 5 = \\lceil 10/2 \\rceil$.",
          "Check the options: $3k + 2l = 3(10) + 2(5) = 30 + 10 = 40$. Option (D) holds; (A) gives $20$, (B) gives $25$, (C) gives $40$? $2k+3l = 20+15 = 35 \\ne 34$. Only (D) is correct.",
          "Answer: (D)."
        ]
      },
      {
        "name": "Telescoping / limit-point viewpoint",
        "steps": [
          "Observe $S_{n-1} + a_n = S_n$ by definition of the partial sum, and $S_n = 2 - \\dfrac{1}{2^{n-1}} \\nearrow 2$ as $n \\to \\infty$. So the rightmost point of $C_n$ is exactly $S_n$, marching monotonically toward the limit $x = 2$.",
          "Containment $C_n\\subseteq M$ therefore reads $S_n \\le r = \\dfrac{1025}{513}$. Write $r = 2 - \\dfrac{1}{513}$, so the condition is $2 - \\dfrac{1}{2^{n-1}} \\le 2 - \\dfrac{1}{513}$, i.e. $\\dfrac{1}{2^{n-1}} \\ge \\dfrac{1}{513}$, i.e. $2^{n-1} \\le 513$.",
          "Largest $n$: $2^{9} = 512 \\le 513$, $2^{10} = 1024 > 513$, so $n \\le 10$ and $k = 10$.",
          "Because consecutive rightmost/leftmost points coincide at $S_n$, the disc $C_n$ and disc $C_{n+1}$ meet in a single point: the chain is a string of externally tangent circles. Tangent counts as intersecting here.",
          "A largest antichain in this touch-graph (a path on $10$ vertices) is a maximum independent set, of size $\\lceil 10/2\\rceil = 5$. Hence $l = 5$.",
          "Substitute into each option; only $3k + 2l = 3\\cdot 10 + 2\\cdot 5 = 40$ matches (D). Final answer: (D)."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2021, Paper 2, Q13 (paragraph). The elegance is that $S_{n-1}+a_n = S_n$, so the circles' right edges are just the GP's partial sums creeping toward $2$; containment reduces to $2^{n-1}\\le 513$ and 'no two intersect' is a max-independent-set on a tangent chain."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "The exponential turns an AP into a GP",
    "difficulty": 4,
    "task": "Find the value of the partial sum.",
    "pyq": {
      "year": 2025,
      "paper": "1",
      "qno": "12"
    },
    "tags": [
      "functional equation (exponential)",
      "geometric progression sums",
      "AP in exponents",
      "2025"
    ],
    "figure": "",
    "statement": "Let $\\mathbb{R}$ denote the set of all real numbers. Let $f:\\mathbb{R}\\to\\mathbb{R}$ be a function such that $f(x)>0$ for all $x\\in\\mathbb{R}$, and $f(x+y)=f(x)\\,f(y)$ for all $x,y\\in\\mathbb{R}$. Let the real numbers $a_1,a_2,\\ldots,a_{50}$ be in an arithmetic progression. If $f(a_{31})=64\\,f(a_{25})$ and $\\displaystyle\\sum_{i=1}^{50} f(a_i)=3\\left(2^{25}+1\\right)$, then find the value of $\\displaystyle\\sum_{i=6}^{30} f(a_i)$.",
    "answer": "$\\boxed{96}$",
    "trap": "The tempting move is to solve for $f(a_1)$ explicitly from $\\sum_{i=1}^{50} f(a_i)=3(2^{25}+1)$ and grind. But $2^{50}-1=(2^{25}-1)(2^{25}+1)$ — the required block $\\sum_{6}^{30}$ collapses cleanly only if you notice this factorisation instead of expanding the whole thing. Students who miss it get stuck in ugly arithmetic and mis-evaluate.",
    "solutions": [
      {
        "name": "Recognise $f(a_i)$ as a GP, then factor $2^{50}-1$",
        "steps": [
          "The Cauchy-type multiplicative condition $f(x+y)=f(x)f(y)$ with $f>0$ forces $f(x)=k^{x}$ for some constant $k>0$ (set $g=\\ln f$; then $g(x+y)=g(x)+g(y)$ and $g$ is bounded below on any interval since $f>0$, so $g$ is linear).",
          "Since $a_1,\\ldots,a_{50}$ are in AP with common difference $d$, we have $a_i=a_1+(i-1)d$, so $f(a_i)=k^{a_1}\\,(k^{d})^{\\,i-1}$. Thus the numbers $f(a_1),f(a_2),\\ldots$ form a GP with common ratio $R=k^{d}$.",
          "Apply the given ratio condition: $f(a_{31})=64\\,f(a_{25})$ means $k^{a_1+30d}=64\\,k^{a_1+24d}$, i.e. $k^{6d}=2^{6}$, hence $R=k^{d}=2$.",
          "Let $A=f(a_1)$. The full-sum condition is $\\displaystyle\\sum_{i=1}^{50}A\\cdot 2^{\\,i-1}=A\\,(2^{50}-1)=3\\left(2^{25}+1\\right)$.",
          "Factor $2^{50}-1=(2^{25}-1)(2^{25}+1)$, so $A=\\dfrac{3\\left(2^{25}+1\\right)}{(2^{25}-1)(2^{25}+1)}=\\dfrac{3}{\\,2^{25}-1\\,}$.",
          "Now $\\displaystyle\\sum_{i=6}^{30} f(a_i)=\\sum_{i=6}^{30}A\\cdot 2^{\\,i-1}=A\\left(2^{5}+2^{6}+\\cdots+2^{29}\\right)=A\\cdot 2^{5}\\,(2^{25}-1)$.",
          "Substitute $A=\\dfrac{3}{2^{25}-1}$: the factor $2^{25}-1$ cancels, leaving $\\displaystyle\\sum_{i=6}^{30} f(a_i)=3\\cdot 2^{5}=96$."
        ]
      },
      {
        "name": "Ratio of geometric block sums (never solve for $A$)",
        "steps": [
          "As above, $f(a_i)=A\\,R^{\\,i-1}$ is a GP; the condition $f(a_{31})=64f(a_{25})$ gives $R^{6}=64$, so $R=2$.",
          "Write both sums as $A\\cdot(\\text{geometric factor})$. The wanted sum is $\\Sigma_1=\\sum_{i=6}^{30}A R^{i-1}=A R^{5}\\dfrac{R^{25}-1}{R-1}$, and the given sum is $\\Sigma_2=\\sum_{i=1}^{50}A R^{i-1}=A\\dfrac{R^{50}-1}{R-1}$.",
          "Take the ratio so $A$ cancels entirely: $\\dfrac{\\Sigma_1}{\\Sigma_2}=\\dfrac{R^{5}(R^{25}-1)}{R^{50}-1}=\\dfrac{R^{5}(R^{25}-1)}{(R^{25}-1)(R^{25}+1)}=\\dfrac{R^{5}}{R^{25}+1}$.",
          "With $R=2$: $\\dfrac{\\Sigma_1}{\\Sigma_2}=\\dfrac{2^{5}}{2^{25}+1}=\\dfrac{32}{2^{25}+1}$.",
          "Hence $\\Sigma_1=\\Sigma_2\\cdot\\dfrac{32}{2^{25}+1}=3\\left(2^{25}+1\\right)\\cdot\\dfrac{32}{2^{25}+1}=3\\cdot 32=96$.",
          "The awkward number $2^{25}+1$ never had to be evaluated — it cancels against the given sum, confirming $\\displaystyle\\sum_{i=6}^{30} f(a_i)=96$."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2025, Paper 1, Q12. The exponential functional equation is a disguise: it silently converts an arithmetic progression in the exponents into a geometric progression of values, and the whole problem hinges on the factorisation $2^{50}-1=(2^{25}-1)(2^{25}+1)$."
  }
];
