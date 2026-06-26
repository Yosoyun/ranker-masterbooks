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
  }
];
