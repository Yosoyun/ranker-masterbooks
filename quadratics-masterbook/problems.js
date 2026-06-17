/* problems.js — DATA. 100 original olympiad/JEE-Advanced quadratic-equation problems for x² · Roots, Discriminant & Vieta. Adversarially verified in Python (sympy/numpy/mpmath). statement/answer raw LaTeX (app auto-detects prose+math); steps use $...$ and $$...$$. */
window.PROBLEMS = [
 {
  "theme": "vieta",
  "themeLabel": "Vieta & Symmetric Functions of Roots",
  "title": "The Crossed Cubes",
  "difficulty": 4,
  "task": "Evaluate",
  "tags": [
   "vieta",
   "symmetric-functions",
   "cubes",
   "reciprocals"
  ],
  "statement": "Let $\\alpha,\\beta$ be the roots of $x^2-5x+3=0$. Evaluate \\[\\frac{\\alpha^2}{\\beta}+\\frac{\\beta^2}{\\alpha}.\\]",
  "answer": "$\\dfrac{80}{3}$",
  "trap": "Splitting the fraction and writing $\\frac{\\alpha^2}{\\beta}+\\frac{\\beta^2}{\\alpha}=\\frac{\\alpha^2+\\beta^2}{\\alpha\\beta}$. That is wrong: combining over the common denominator $\\alpha\\beta$ gives $\\frac{\\alpha^3+\\beta^3}{\\alpha\\beta}$, not $\\alpha^2+\\beta^2$ in the numerator. The bad shortcut yields $\\frac{19}{3}$ instead of the correct $\\frac{80}{3}$. You must cube, not square.",
  "solutions": [
   {
    "name": "Cube-sum over product",
    "steps": [
     "By Vieta, $\\alpha+\\beta=5$ and $\\alpha\\beta=3$.",
     "Common denominator: $\\dfrac{\\alpha^2}{\\beta}+\\dfrac{\\beta^2}{\\alpha}=\\dfrac{\\alpha^3+\\beta^3}{\\alpha\\beta}$.",
     "Use $\\alpha^3+\\beta^3=(\\alpha+\\beta)^3-3\\alpha\\beta(\\alpha+\\beta)=125-3\\cdot3\\cdot5=125-45=80$.",
     "Divide: $\\dfrac{80}{3}$. Hence the value is $\\boxed{\\dfrac{80}{3}}$."
    ]
   },
   {
    "name": "Factor through the sum",
    "steps": [
     "Write the expression as $\\dfrac{\\alpha^3+\\beta^3}{\\alpha\\beta}=\\dfrac{(\\alpha+\\beta)(\\alpha^2-\\alpha\\beta+\\beta^2)}{\\alpha\\beta}$.",
     "Here $\\alpha^2+\\beta^2=(\\alpha+\\beta)^2-2\\alpha\\beta=25-6=19$, so $\\alpha^2-\\alpha\\beta+\\beta^2=19-3=16$.",
     "Thus the value is $\\dfrac{5\\cdot16}{3}=\\dfrac{80}{3}=\\boxed{\\dfrac{80}{3}}$."
    ]
   }
  ],
  "remark": "Insight: any expression $\\frac{\\alpha^k}{\\beta}+\\frac{\\beta^k}{\\alpha}$ collapses to $\\frac{\\alpha^{k+1}+\\beta^{k+1}}{\\alpha\\beta}$ — the asymmetry of the denominators secretly raises the power by one."
 },
 {
  "theme": "vieta",
  "themeLabel": "Vieta & Symmetric Functions of Roots",
  "title": "One Root Doubles the Other",
  "difficulty": 4,
  "task": "Determine",
  "tags": [
   "vieta",
   "root-relation",
   "coefficient-pinning"
  ],
  "statement": "The quadratic $x^2-9x+2k=0$ has two real roots, one of which is exactly twice the other. Determine the value of $k$ and the two roots.",
  "answer": "$k=9$, with roots $3$ and $6$.",
  "trap": "Reading $-b$ literally instead of $-b/a$ for the sum. For $x^2-9x+2k$ one has $a=1$, $b=-9$, so the sum of roots is $-b/a=+9$, not $-9$. A solver who writes $\\alpha+2\\alpha=-9$ gets $\\alpha=-3$ and reports the roots as $-3$ and $-6$. These fail the equation outright ($(-3)^2-9(-3)+18=54\\neq0$), so $-3,-6$ are simply not roots. The slip is doubly seductive because the product $(-3)(-6)=18$ still gives $2k=18$, i.e. $k=9$ matches the true value -- so the wrong sign passes the $k$-check while silently delivering a pair of impostor roots. Always re-substitute the claimed roots into the original equation, not just into Vieta's product.",
  "solutions": [
   {
    "name": "Direct substitution via Vieta",
    "steps": [
     "Let the roots be $\\alpha$ and $2\\alpha$. The leading coefficient is $a=1$, so the sum of roots is $-b/a=9$: thus $\\alpha+2\\alpha=9$, giving $3\\alpha=9$ and $\\alpha=3$.",
     "Hence the roots are $\\alpha=3$ and $2\\alpha=6$.",
     "The product of roots is $c/a=2k$, so $\\alpha\\cdot 2\\alpha=2\\alpha^2=2k$, i.e. $2(3)^2=2k$, giving $18=2k$ and $k=9$.",
     "Check: $x^2-9x+18=(x-3)(x-6)$, whose roots $3$ and $6$ are indeed in ratio $1:2$. Thus $\\boxed{k=9,\\ \\{3,6\\}}$."
    ]
   },
   {
    "name": "Ratio invariant of Vieta",
    "steps": [
     "For roots in ratio $\\beta/\\alpha=2$, the dimensionless quantity $\\dfrac{(\\alpha+\\beta)^2}{\\alpha\\beta}=\\dfrac{(\\alpha+2\\alpha)^2}{\\alpha\\cdot 2\\alpha}=\\dfrac{9\\alpha^2}{2\\alpha^2}=\\dfrac{9}{2}$, independent of $\\alpha$.",
     "In terms of coefficients, $\\dfrac{(\\alpha+\\beta)^2}{\\alpha\\beta}=\\dfrac{(-b/a)^2}{c/a}=\\dfrac{9^2}{2k}=\\dfrac{81}{2k}$.",
     "Setting $\\dfrac{81}{2k}=\\dfrac{9}{2}$ gives $81=9k$, hence $k=9$.",
     "Back-substituting, $x^2-9x+18=0$ factors as $(x-3)(x-6)=0$, so the roots are $3$ and $6$. Thus $\\boxed{k=9,\\ \\{3,6\\}}$."
    ]
   }
  ],
  "remark": "The dimensionless ratio $(\\alpha+\\beta)^2/(\\alpha\\beta)$ depends only on the root ratio $\\beta/\\alpha$, so any condition \"one root is $r$ times the other\" collapses to a single equation $(1+r)^2/r=b^2/(ac)$ in the coefficients. Here a second subtlety surfaces: pinning the product alone is not enough to certify the roots, because product is sign-blind -- two roots and their negatives share the same product. The sum (and a final re-substitution) is what removes the impostor pair."
 },
 {
  "theme": "vieta",
  "themeLabel": "Vieta & Symmetric Functions of Roots",
  "title": "Squaring the Roots",
  "difficulty": 4,
  "task": "Find a,b",
  "tags": [
   "vieta",
   "transformed-roots",
   "building-quadratics"
  ],
  "statement": "Let $\\alpha,\\beta$ be the roots of $x^2-7x+9=0$. Find integers $p,q$ such that the monic quadratic with roots $\\alpha^2$ and $\\beta^2$ is $x^2+px+q$.",
  "answer": "$p=-31,\\ q=81$ (the quadratic is $x^2-31x+81=0$).",
  "trap": "Reconstructing the new quadratic as $x^2-(\\alpha^2+\\beta^2)x+\\alpha^2\\beta^2$ but computing $\\alpha^2+\\beta^2=(\\alpha+\\beta)^2=49$, forgetting the $-2\\alpha\\beta$ correction. The sum of squares is $49-18=31$, not $49$.",
  "solutions": [
   {
    "name": "Sum and product of new roots",
    "steps": [
     "Vieta on $x^2-7x+9=0$: $\\alpha+\\beta=7$, $\\alpha\\beta=9$.",
     "New sum: $\\alpha^2+\\beta^2=(\\alpha+\\beta)^2-2\\alpha\\beta=49-18=31$.",
     "New product: $\\alpha^2\\beta^2=(\\alpha\\beta)^2=81$.",
     "The monic quadratic with roots $\\alpha^2,\\beta^2$ is $x^2-(\\alpha^2+\\beta^2)x+\\alpha^2\\beta^2=x^2-31x+81$, so $p=-31,\\ q=81$, i.e. $\\boxed{x^2-31x+81}$."
    ]
   },
   {
    "name": "Resultant / substitution",
    "steps": [
     "Put $y=x^2$ for a root $x$ of $x^2-7x+9=0$. Rewrite as $x^2+9=7x$, i.e. $y+9=7x$.",
     "Square to eliminate $x$: $(y+9)^2=49x^2=49y$, so $y^2+18y+81=49y$.",
     "Hence $y^2-31y+81=0$. Equivalently, the resultant $\\operatorname{Res}_x\\!\\big(x^2-7x+9,\\ y-x^2\\big)=y^2-31y+81$.",
     "Since $y=\\alpha^2$ and $y=\\beta^2$ are exactly its roots, the quadratic is $x^2-31x+81$, giving $\\boxed{p=-31,\\ q=81}$."
    ]
   }
  ],
  "remark": "Insight: the substitution method (set $y=f(x)$ and eliminate $x$ via the resultant) is a fail-safe alternative to Vieta for building transformed quadratics, and it automatically supplies the $-2\\alpha\\beta$ cross term that the naive square-the-sum shortcut drops."
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
  "title": "The Gap Between the Roots",
  "difficulty": 4,
  "task": "Evaluate",
  "tags": [
   "vieta",
   "root-difference",
   "discriminant"
  ],
  "statement": "Let $\\alpha,\\beta$ be the roots of $x^2-6x+4=0$. Evaluate $(\\alpha-\\beta)^2$ and $|\\alpha-\\beta|$.",
  "answer": "$(\\alpha-\\beta)^2=20$ and $|\\alpha-\\beta|=2\\sqrt5$.",
  "trap": "Writing $(\\alpha-\\beta)^2=(\\alpha+\\beta)^2-2\\alpha\\beta=36-8=28$. The correct identity is $(\\alpha-\\beta)^2=(\\alpha+\\beta)^2-4\\alpha\\beta$; using $-2\\alpha\\beta$ (the coefficient that produces $\\alpha^2+\\beta^2$) instead of $-4\\alpha\\beta$ gives the wrong value $28$.",
  "solutions": [
   {
    "name": "Square-difference identity",
    "steps": [
     "Vieta: $\\alpha+\\beta=6$, $\\alpha\\beta=4$.",
     "$(\\alpha-\\beta)^2=(\\alpha+\\beta)^2-4\\alpha\\beta=36-16=20$.",
     "Taking the positive root, $|\\alpha-\\beta|=\\sqrt{20}=2\\sqrt5$.",
     "Thus $\\boxed{(\\alpha-\\beta)^2=20,\\ |\\alpha-\\beta|=2\\sqrt5}$."
    ]
   },
   {
    "name": "Discriminant",
    "steps": [
     "For $ax^2+bx+c$, $(\\alpha-\\beta)^2=\\dfrac{b^2-4ac}{a^2}$.",
     "Here $\\dfrac{(-6)^2-4(1)(4)}{1^2}=\\dfrac{36-16}{1}=20$.",
     "So $|\\alpha-\\beta|=\\sqrt{20}=2\\sqrt5$, giving $\\boxed{20,\\ 2\\sqrt5}$."
    ]
   },
   {
    "name": "Explicit roots",
    "steps": [
     "By the quadratic formula, $x=\\dfrac{6\\pm\\sqrt{36-16}}{2}=3\\pm\\sqrt5$.",
     "Then $\\alpha-\\beta=(3+\\sqrt5)-(3-\\sqrt5)=2\\sqrt5$, so $|\\alpha-\\beta|=2\\sqrt5$.",
     "Squaring, $(\\alpha-\\beta)^2=(2\\sqrt5)^2=20$, confirming $\\boxed{20,\\ 2\\sqrt5}$."
    ]
   }
  ],
  "remark": "Insight: $(\\alpha-\\beta)^2$ is literally the discriminant divided by $a^2$ — the quantity whose sign decides whether the roots are real, equal, or complex. A symmetric function in its own right, it is invariant under swapping the roots, which is why it can be expressed through $\\alpha+\\beta$ and $\\alpha\\beta$ alone."
 },
 {
  "theme": "vieta",
  "themeLabel": "Vieta & Symmetric Functions of Roots",
  "title": "Roots in the Ratio Three to One",
  "difficulty": 4,
  "task": "Find all",
  "tags": [
   "vieta",
   "root-ratio",
   "coefficient-pinning"
  ],
  "statement": "Find all values of $k$ for which the roots of $x^2-(k+1)x+k=0$ are in the ratio $3:1$.",
  "answer": "$k=3$ or $k=\\dfrac{1}{3}$.",
  "trap": "Assuming the larger root must be $3$ and the smaller $1$, i.e. forcing specific values rather than the ratio. The ratio condition is scale-free, so it yields TWO admissible $k$ (the roles of 'larger' and 'smaller' swap), and forcing one labeling drops the solution $k=1/3$.",
  "solutions": [
   {
    "name": "Parametrize the roots",
    "steps": [
     "Let the roots be $t$ and $3t$. Vieta: $t+3t=k+1$ and $t\\cdot3t=k$, so $4t=k+1$ and $3t^2=k$.",
     "From the first, $t=\\frac{k+1}{4}$; substitute: $3\\left(\\frac{k+1}{4}\\right)^2=k$, i.e. $3(k+1)^2=16k$.",
     "Expand: $3k^2+6k+3=16k\\Rightarrow 3k^2-10k+3=0\\Rightarrow(3k-1)(k-3)=0$.",
     "Hence $k=3$ or $k=\\tfrac13$. So $\\boxed{k\\in\\{3,\\tfrac13\\}}$."
    ]
   },
   {
    "name": "Ratio invariant",
    "steps": [
     "The ratio $3:1$ gives $\\dfrac{(\\alpha+\\beta)^2}{\\alpha\\beta}=\\dfrac{(t+3t)^2}{3t^2}=\\dfrac{16}{3}$.",
     "Here $\\dfrac{(\\alpha+\\beta)^2}{\\alpha\\beta}=\\dfrac{(k+1)^2}{k}$, so $\\dfrac{(k+1)^2}{k}=\\dfrac{16}{3}$.",
     "Cross-multiply: $3(k+1)^2=16k\\Rightarrow 3k^2-10k+3=0\\Rightarrow k=3$ or $k=\\tfrac13$. So $\\boxed{k\\in\\{3,\\tfrac13\\}}$."
    ]
   }
  ],
  "remark": "Insight: a clean factorization $(3k-1)(k-3)$ with reciprocal roots $3$ and $1/3$ is no accident -- swapping which root is '$3t$' inverts $k$ because the equation here is reciprocal-symmetric in a hidden way (product $=k$, the swapped parameter)."
 },
 {
  "theme": "vieta",
  "themeLabel": "Vieta & Symmetric Functions of Roots",
  "title": "Each Root Borrows the Other's Inverse",
  "difficulty": 4,
  "task": "Find a,b",
  "tags": [
   "vieta",
   "transformed-roots",
   "reciprocals",
   "building-quadratics"
  ],
  "statement": "Let $\\alpha,\\beta$ be the roots of $x^2-6x+4=0$. The numbers $\\alpha+\\dfrac1\\beta$ and $\\beta+\\dfrac1\\alpha$ are the roots of a quadratic $ax^2+bx+c=0$ with integer coefficients and $\\gcd(a,b,c)=1$. Find $a,b,c$.",
  "answer": "$a=4,\\ b=-30,\\ c=25$ (the quadratic is $4x^2-30x+25=0$).",
  "trap": "Building the monic quadratic $x^2-\\tfrac{15}{2}x+\\tfrac{25}{4}$ and reporting $b=-15/2$, $c=25/4$ — i.e. dropping the leading coefficient instead of clearing denominators. The problem demands integer coefficients, so you must scale by $4$, which changes $a$ from $1$ to $4.$",
  "solutions": [
   {
    "name": "Sum and product of the new roots",
    "steps": [
     "Vieta: $\\alpha+\\beta=6$, $\\alpha\\beta=4$. Note $\\frac1\\alpha+\\frac1\\beta=\\frac{\\alpha+\\beta}{\\alpha\\beta}=\\frac64=\\frac32$.",
     "Sum: $\\left(\\alpha+\\tfrac1\\beta\\right)+\\left(\\beta+\\tfrac1\\alpha\\right)=(\\alpha+\\beta)+\\left(\\tfrac1\\alpha+\\tfrac1\\beta\\right)=6+\\tfrac32=\\tfrac{15}{2}$.",
     "Product: $\\left(\\alpha+\\tfrac1\\beta\\right)\\left(\\beta+\\tfrac1\\alpha\\right)=\\alpha\\beta+1+1+\\tfrac1{\\alpha\\beta}=4+2+\\tfrac14=\\tfrac{25}{4}$.",
     "Monic quadratic $x^2-\\tfrac{15}{2}x+\\tfrac{25}{4}$; multiply by $4$: $4x^2-30x+25=0$. So $\\boxed{(a,b,c)=(4,-30,25)}$."
    ]
   },
   {
    "name": "Symmetric simplification",
    "steps": [
     "Write $\\alpha+\\frac1\\beta=\\frac{\\alpha\\beta+1}{\\beta}=\\frac{5}{\\beta}$ and $\\beta+\\frac1\\alpha=\\frac{\\alpha\\beta+1}{\\alpha}=\\frac5\\alpha$, since $\\alpha\\beta=4$.",
     "Their product is $\\frac{25}{\\alpha\\beta}=\\frac{25}{4}$ and their sum is $5\\cdot\\frac{\\alpha+\\beta}{\\alpha\\beta}=5\\cdot\\frac{6}{4}=\\frac{15}{2}$.",
     "Clearing denominators in $x^2-\\frac{15}2x+\\frac{25}4$ gives $4x^2-30x+25=0$, so $\\boxed{(4,-30,25)}$."
    ]
   }
  ],
  "remark": "Insight: the trick $\\alpha+\\frac1\\beta=\\frac{\\alpha\\beta+1}{\\beta}$ turns a mixed expression into a pure reciprocal of a single root — symmetric functions of $\\frac5\\alpha,\\frac5\\beta$ are then immediate."
 },
 {
  "theme": "vieta",
  "themeLabel": "Vieta & Symmetric Functions of Roots",
  "title": "The Sixth-Power Ascent",
  "difficulty": 4,
  "task": "Evaluate",
  "tags": [
   "vieta",
   "newton-recursion",
   "power-sums"
  ],
  "statement": "Let $\\alpha,\\beta$ be the roots of $x^2-4x+1=0$. Evaluate $\\alpha^6+\\beta^6$.",
  "answer": "$2702$",
  "trap": "Guessing the binomial-style shortcut $\\alpha^6+\\beta^6=(\\alpha^2+\\beta^2)^3$. Since $\\alpha^2+\\beta^2=14$ this gives $14^3=2744$, but it silently drops the cross terms: the true identity is $(\\alpha^2+\\beta^2)^3=\\alpha^6+\\beta^6+3(\\alpha\\beta)^2(\\alpha^2+\\beta^2)$, so $\\alpha^6+\\beta^6=2744-3\\cdot1\\cdot14=2702$. Mis-tracking those mixed terms is the trap; the recursion sidesteps it entirely.",
  "solutions": [
   {
    "name": "Newton's recursion",
    "steps": [
     "Vieta: $\\alpha+\\beta=4$, $\\alpha\\beta=1$, so the power sums $p_n=\\alpha^n+\\beta^n$ satisfy $p_n=4p_{n-1}-p_{n-2}$ with $p_0=2,\\ p_1=4$.",
     "$p_2=4\\cdot4-2=14$; $p_3=4\\cdot14-4=52$.",
     "$p_4=4\\cdot52-14=194$; $p_5=4\\cdot194-52=724$.",
     "$p_6=4\\cdot724-194=2702$. Hence $\\boxed{2702}$."
    ]
   },
   {
    "name": "Telescoping identities",
    "steps": [
     "$\\alpha^2+\\beta^2=(\\alpha+\\beta)^2-2\\alpha\\beta=16-2=14$ and $\\alpha^3+\\beta^3=(\\alpha+\\beta)^3-3\\alpha\\beta(\\alpha+\\beta)=64-12=52$.",
     "Then $\\alpha^6+\\beta^6=(\\alpha^3+\\beta^3)^2-2(\\alpha\\beta)^3=52^2-2\\cdot1=2704-2=2702$.",
     "So $\\boxed{2702}$."
    ]
   }
  ],
  "remark": "Insight: two routes converge — Newton's linear recursion $p_n=4p_{n-1}-p_{n-2}$ and the quadratic identity $p_6=p_3^2-2q^3$. Cross-checking power sums by both methods is a built-in error detector."
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
  "title": "The Twin Perfect Squares",
  "difficulty": 3,
  "task": "Find all",
  "tags": [
   "perfect-square trinomial",
   "discriminant",
   "equal roots",
   "parameter"
  ],
  "statement": "Find all real values of $k$ for which the quadratic trinomial \\[(k-1)x^{2}+(k+4)x+(k+7)\\] is the square of a (real, possibly scaled) linear polynomial in $x$ — that is, a perfect-square trinomial.",
  "answer": "$k\\in\\{2,\\ -\\tfrac{22}{3}\\}$. (At $k=2$: $(x+3)^2$; at $k=-\\tfrac{22}{3}$: $-\\tfrac13(5x+1)^2$. Both have nonzero leading coefficient, so both are genuine perfect-square trinomials.)",
  "trap": "Stopping at $k=2$ because it gives the \"nice\" $(x+3)^2$. The condition is $D=0$ with $a\\ne0$; the quadratic $D=-3k^2-16k+44=0$ has TWO roots, and $k=-\\tfrac{22}{3}$ is equally valid (leading coefficient $-\\tfrac{25}{3}\\ne0$). Discarding it loses half the answer.",
  "solutions": [
   {
    "name": "Discriminant condition",
    "steps": [
     "A trinomial $ax^2+bx+c$ with $a\\ne0$ is a perfect square iff $b^2-4ac=0$.",
     "Compute $D=(k+4)^2-4(k-1)(k+7)=k^2+8k+16-4(k^2+6k-7)=-3k^2-16k+44$.",
     "Solve $-3k^2-16k+44=0\\Rightarrow 3k^2+16k-44=0\\Rightarrow k=\\dfrac{-16\\pm\\sqrt{256+528}}{6}=\\dfrac{-16\\pm28}{6}$.",
     "Thus $k=2$ or $k=-\\tfrac{22}{3}$; check $a=k-1\\ne0$ in both cases ($1$ and $-\\tfrac{25}{3}$). Both qualify.",
     "$\\boxed{k\\in\\{2,\\,-\\tfrac{22}{3}\\}}$"
    ]
   },
   {
    "name": "Force a repeated root",
    "steps": [
     "A perfect-square trinomial $a(x-r)^2$ has its double root at $x=-\\tfrac{b}{2a}=-\\tfrac{k+4}{2(k-1)}$.",
     "Require $f$ to vanish there; equivalently the constant term equals $a r^2$: $k+7=(k-1)\\left(\\tfrac{k+4}{2(k-1)}\\right)^2=\\tfrac{(k+4)^2}{4(k-1)}$.",
     "Clear denominators: $4(k-1)(k+7)=(k+4)^2$, i.e. $-3k^2-16k+44=0$, the same equation.",
     "Solving gives $\\boxed{k=2,\\ -\\tfrac{22}{3}}$."
    ]
   }
  ],
  "remark": "Insight: \"perfect-square trinomial\" is exactly the $a\\ne0,\\,D=0$ case. Because $D$ is itself a quadratic in the parameter, generically there are two parameter values, not one — symmetry of the equal-root condition rarely yields a single answer."
 },
 {
  "theme": "discriminant",
  "themeLabel": "The Discriminant & Nature of Roots",
  "title": "Two Roads to a Double Root",
  "difficulty": 4,
  "task": "Find all",
  "tags": [
   "equal roots",
   "leading coefficient",
   "parameter",
   "sum of values"
  ],
  "statement": "The equation \\[(p^{2}-5)x^{2}+2(p+1)x+4=0\\] is required to have two equal real roots. Find all real $p$ for which this happens, and report their sum.",
  "answer": "$p\\in\\{3,\\ -\\tfrac{7}{3}\\}$, with sum $\\boxed{\\tfrac{2}{3}}$.",
  "trap": "Forgetting the guard $p^{2}-5\\neq0$ and treating the leading coefficient as if it could vanish. When $a=p^{2}-5=0$ (i.e. $p=\\pm\\sqrt5$) the relation degenerates to a linear equation, which has a single ordinary root, not a double root of a quadratic, so \"two equal roots\" is meaningless there. A solver who omits the $a\\neq0$ condition may wrongly count or discard values; the $a\\neq0$ check must be applied at every candidate.",
  "solutions": [
   {
    "name": "Discriminant equals zero",
    "steps": [
     "Equal roots of a genuine quadratic require $a\\neq0$ and $D=0$, so first demand $p^{2}-5\\neq0$.",
     "$D=[2(p+1)]^{2}-4(p^{2}-5)(4)=4(p+1)^{2}-16(p^{2}-5)=4(p^{2}+2p+1)-16p^{2}+80$.",
     "$D=-12p^{2}+8p+84=-4(3p^{2}-2p-21)=-4(3p+7)(p-3)$.",
     "$D=0\\Rightarrow p=3$ or $p=-\\tfrac73$. Check $a=p^{2}-5$: at $p=3$, $a=4\\neq0$; at $p=-\\tfrac73$, $a=\\tfrac{49}{9}-5=\\tfrac{4}{9}\\neq0$. Both survive the guard (note $\\pm\\sqrt5$ are excluded but never even arise here).",
     "Sum $=3+\\left(-\\tfrac73\\right)=\\boxed{\\tfrac23}$."
    ]
   },
   {
    "name": "Vieta on the parameter equation",
    "steps": [
     "$D=0$ reduces to $3p^{2}-2p-21=0$ after dividing by $-4$; this quadratic in $p$ governs the admissible parameters.",
     "Neither root is $\\pm\\sqrt5$: substituting gives $3(\\pm\\sqrt5)^{2}-2(\\pm\\sqrt5)-21=15\\mp2\\sqrt5-21=-6\\mp2\\sqrt5\\neq0$, so the guard $a\\neq0$ holds for both roots automatically.",
     "By Vieta on $3p^{2}-2p-21=0$, the sum of the two valid $p$-values equals $-\\dfrac{-2}{3}=\\tfrac{2}{3}$ (and their product is $-7$).",
     "$\\boxed{\\tfrac23}$"
    ]
   }
  ],
  "remark": "Insight: the parameter lives in the leading coefficient, so the $a\\neq0$ guard is not optional bookkeeping; it is the heart of the problem. Always intersect the $D=0$ set with $\\{a\\neq0\\}$. Here both double-root values are genuine: $p=3$ gives $4x^{2}+8x+4=0$ with root $x=-1$, and $p=-\\tfrac73$ gives $\\tfrac49x^{2}-\\tfrac83x+4=0$ with root $x=3$."
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
  "title": "A Pair of Mutually Equal-Rooted Quadratics",
  "difficulty": 4,
  "task": "Find all",
  "tags": [
   "equal roots",
   "system",
   "symmetry",
   "real solutions"
  ],
  "statement": "Find all real pairs $(a,b)$ such that BOTH quadratics \\[x^{2}+2ax+b\\qquad\\text{and}\\qquad x^{2}+2bx+a\\] have a repeated (double) real root.",
  "answer": "$(a,b)\\in\\{(0,0),\\ (1,1)\\}$.",
  "trap": "Solving $a^2=b$ from the first equal-root condition, then mechanically substituting and producing extraneous complex roots of $b^4=b$, or forgetting that the SAME pair must satisfy both conditions simultaneously. Treating one quadratic at a time and not intersecting the two solution sets gives wrong or incomplete answers.",
  "solutions": [
   {
    "name": "Symmetric system",
    "steps": [
     "Each quadratic is monic, so a \\emph{double root} means its discriminant vanishes: $(2a)^2-4b=0\\Rightarrow a^2=b$ and $(2b)^2-4a=0\\Rightarrow b^2=a$.",
     "Substitute $b=a^2$ into $b^2=a$: $a^4=a\\Rightarrow a(a^3-1)=0\\Rightarrow a=0$ or $a=1$ (the other roots of $a^3=1$ are non-real).",
     "$a=0\\Rightarrow b=0$; $a=1\\Rightarrow b=1$.",
     "Both are real; check: $x^2$ and $x^2$ at $(0,0)$ have the double root $0$; $x^2+2x+1=(x+1)^2$ (both quadratics) at $(1,1)$ have the double root $-1$. Hence $\\boxed{(0,0),(1,1)}$."
    ]
   },
   {
    "name": "Subtract the conditions",
    "steps": [
     "From $a^2=b$ and $b^2=a$, subtract: $a^2-b^2=b-a\\Rightarrow(a-b)(a+b)=-(a-b)\\Rightarrow(a-b)(a+b+1)=0$.",
     "Case $a=b$: then $a^2=a\\Rightarrow a\\in\\{0,1\\}$, giving $(0,0),(1,1)$.",
     "Case $a+b=-1$: then $b=-1-a$ and $a^2=b=-1-a\\Rightarrow a^2+a+1=0$, whose discriminant $1-4<0$ — no real solution.",
     "Hence the real solutions are exactly $\\boxed{(0,0),(1,1)}$."
    ]
   }
  ],
  "remark": "Insight: \"discriminant zero for each\" turns a roots problem into a symmetric algebraic system. The factor-and-cases method exposes a hidden branch ($a+b=-1$) that a second discriminant argument then kills — discriminants nested inside discriminants."
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
  "title": "The Perfect Square With a Hidden Trapdoor",
  "difficulty": 4,
  "task": "Find all",
  "tags": [
   "perfect-square trinomial",
   "leading coefficient",
   "a=0 trap",
   "parameter"
  ],
  "statement": "Consider the expression \\[E_m(x)=m\\,x^{2}+8x+(m-6).\\] (a) Find all real $m$ for which $E_m$ is a perfect-square trinomial. (b) Identify the value of $m$ that makes $E_m$ a non-constant polynomial which is, deceptively, NOT a perfect-square trinomial, explaining why.",
  "answer": "(a) $m\\in\\{-2,\\ 8\\}$ (giving $-2(x-2)^2$ and $2(2x+1)^2$). (b) $m=0$: then $E_0(x)=8x-6$, a degree-$1$ polynomial — being linear it cannot be a (degree-$2$) perfect-square trinomial even though $D$-style algebra might tempt you.",
  "trap": "Setting $D=64-4m(m-6)=0$ and reporting its roots without checking $m\\ne0$, OR conversely worrying that $m=0$ might \"accidentally\" qualify. At $m=0$ the object is linear, so the perfect-square-TRINOMIAL question does not even apply; it is neither a counterexample to nor a member of the answer set in (a).",
  "solutions": [
   {
    "name": "Discriminant with leading-coefficient guard",
    "steps": [
     "A perfect-square trinomial needs degree $2$ ($m\\ne0$) and $D=0$.",
     "$D=8^2-4m(m-6)=64-4m^2+24m=-4(m^2-6m-16)=-4(m-8)(m+2)$.",
     "$D=0\\Rightarrow m=8$ or $m=-2$; both satisfy $m\\ne0$.",
     "Check: $m=8\\Rightarrow8x^2+8x+2=2(2x+1)^2$; $m=-2\\Rightarrow-2x^2+8x-8=-2(x-2)^2$. So (a) $\\boxed{m\\in\\{-2,8\\}}$.",
     "For (b): $m=0$ gives $8x-6$, linear — outside the trinomial category, the trapdoor. $\\boxed{m=0}$"
    ]
   },
   {
    "name": "Match coefficients to $a(\\alpha x+\\beta)^2$",
    "steps": [
     "Require $mx^2+8x+(m-6)=a(\\alpha x+\\beta)^2=a\\alpha^2x^2+2a\\alpha\\beta x+a\\beta^2$ with $a\\alpha^2\\ne0$.",
     "Then $m=a\\alpha^2$, $8=2a\\alpha\\beta$, $m-6=a\\beta^2$. From the middle, $a\\alpha\\beta=4$; multiply outer two: $m(m-6)=a^2\\alpha^2\\beta^2=(a\\alpha\\beta)^2=16$.",
     "So $m^2-6m-16=0\\Rightarrow(m-8)(m+2)=0\\Rightarrow m=8,-2$, each with $m\\ne0$. (a) $\\boxed{\\{-2,8\\}}$.",
     "If $m=0$ the leading term disappears and the square form $a\\alpha^2x^2$ is impossible; the expression $8x-6$ is merely linear — the (b) trapdoor, $\\boxed{m=0}$."
    ]
   }
  ],
  "remark": "Insight: the perfect-square-trinomial condition is a conjunction, $a\\ne0\\ \\wedge\\ D=0$. The problem isolates the conjunction's two clauses: (a) lives on $D=0$, while (b) is precisely the point where the first clause fails and the whole category dissolves."
 },
 {
  "theme": "discriminant",
  "themeLabel": "The Discriminant & Nature of Roots",
  "title": "The Grand Factorization Sieve",
  "difficulty": 5,
  "task": "Find all",
  "tags": [
   "big discriminant",
   "factor into linear",
   "rational vs real",
   "integer factors",
   "capstone"
  ],
  "statement": "For the family of second-degree expressions \\[F_n(x,y)=6x^{2}+11xy+3y^{2}+17x+n\\,y+12,\\] (a) find all real $n$ for which $F_n$ factors into two real linear factors, and (b) determine the unique such $n$ for which both linear factors have integer coefficients, exhibiting the factorization.",
  "answer": "(a) $n\\in\\{15,\\ \\tfrac{97}{6}\\}$. (b) Only $n=15$ gives integer factors: \\[F_{15}(x,y)=(2x+3y+3)(3x+y+4).\\] (At $n=\\tfrac{97}{6}$ it factors over $\\mathbb{R}$ as $\\tfrac16(6x+2y+9)(6x+9y+8)$ — real but not integer.)",
  "trap": "Assuming that \"factors into two REAL linear factors\" already implies integer (or even rational) factors, and reporting only $n=15$. The big-discriminant equation $\\Delta(n)=0$ is quadratic and yields two real $n$; the second, $n=\\tfrac{97}{6}$, factors over the reals but with non-integer coefficients — the same real-vs-rational gap as $D\\ge0$ vs $D=\\square$, lifted to two variables.",
  "solutions": [
   {
    "name": "Big discriminant, then integrality check",
    "steps": [
     "With $a=6,\\ b=3,\\ c=12,\\ 2h=11,\\ 2g=17,\\ 2f=n$, factorability into two real lines requires $\\Delta=abc+2fgh-af^2-bg^2-ch^2=0$.",
     "$\\Delta=6\\cdot3\\cdot12+2\\cdot\\tfrac n2\\cdot\\tfrac{17}{2}\\cdot\\tfrac{11}{2}-6\\cdot\\tfrac{n^2}{4}-3\\cdot\\tfrac{289}{4}-12\\cdot\\tfrac{121}{4}=432+\\tfrac{187n}{4}-\\tfrac{3n^2}{2}-\\tfrac{867}{4}-363$.",
     "$\\Delta=-\\tfrac32 n^2+\\tfrac{187}{4}n-\\tfrac{1455}{4}=0\\Rightarrow 6n^2-187n+1455=0\\Rightarrow n=\\dfrac{187\\pm\\sqrt{34969-34920}}{12}=\\dfrac{187\\pm7}{12}$.",
     "So $n=\\tfrac{194}{12}=\\tfrac{97}{6}$ or $n=\\tfrac{180}{12}=15$. (a) $\\boxed{n\\in\\{15,\\tfrac{97}{6}\\}}$.",
     "At $n=15$: split $6x^2+11xy+3y^2=(2x+3y)(3x+y)$ and match constants to get $(2x+3y+3)(3x+y+4)$ — integer factors. At $n=\\tfrac{97}{6}$ the factors are $6x+2y+9$ and $6x+9y+8$ over $\\tfrac16$ — real but not integer. (b) $\\boxed{n=15}$."
    ]
   },
   {
    "name": "Quadratic in $x$ with perfect-square discriminant",
    "steps": [
     "Write $F_n=6x^2+(11y+17)x+(3y^2+ny+12)$, a quadratic in $x$.",
     "It splits into two linear factors iff its discriminant in $x$ is a perfect square of a linear polynomial in $y$: $\\Delta_x=(11y+17)^2-24(3y^2+ny+12)=49y^2+(374-24n)y+1$.",
     "A quadratic $Ay^2+By+C$ is a perfect square iff $B^2=4AC$: $(374-24n)^2=4\\cdot49\\cdot1=196$.",
     "So $374-24n=\\pm14\\Rightarrow 24n=360$ or $24n=388\\Rightarrow n=15$ or $n=\\tfrac{97}{6}$.",
     "For $n=15$, $\\Delta_x=49y^2+14y+1=(7y+1)^2$ — rational, so $x=\\dfrac{-(11y+17)\\pm(7y+1)}{12}$ gives rational (indeed integer-coefficient) factors $(2x+3y+3)(3x+y+4)$. For $n=\\tfrac{97}{6}$, $\\Delta_x=49y^2-14y+1=(7y-1)^2$ but the resulting factors carry the $\\tfrac16$ and are non-integer. (a) $\\boxed{\\{15,\\tfrac{97}{6}\\}}$, (b) $\\boxed{n=15}$."
    ]
   }
  ],
  "remark": "Insight: the capstone fuses three threads — the big $3\\times3$ discriminant detecting two-line degeneracy, the reduction to a single-variable discriminant being a perfect square, and the crucial distinction between factoring over $\\mathbb{R}$ (both $n$) versus over $\\mathbb{Z}$ (only $n=15$). It is exactly the $D\\ge0$ vs $D=\\square$ dichotomy promoted to a conic."
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
     "$1<a-1<3 \\Leftrightarrow 2<a<4$;  $1<a+2<3 \\Leftrightarrow -1<a<1$.",
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
  "title": "Across the Origin",
  "difficulty": 5,
  "task": "Find all",
  "tags": [
   "opposite-sign-roots",
   "product-of-roots",
   "sign-of-leading",
   "parameter-range"
  ],
  "statement": "Find all real $a$ for which the roots of\n\\[ (a+1)x^{2} - (a-3)x + (a^{2}-7a+6) = 0 \\]\nare real and of opposite sign.",
  "answer": "$a \\in (-\\infty,\\,-1)\\cup(1,\\,6)$",
  "trap": "Concluding 'opposite signs $\\Leftrightarrow$ constant term $<0$' is wrong: the product of roots is $C/A=(a^2-7a+6)/(a+1)$, and its sign depends on $A=a+1$. For $a<-1$ the constant term $(a-1)(a-6)$ is positive yet the product is negative because $A<0$. Ignoring the leading-coefficient sign loses the entire branch $a<-1$.",
  "solutions": [
   {
    "name": "Product of roots",
    "steps": [
     "Two real roots have opposite sign $\\Leftrightarrow$ their product is negative (this automatically forces $D>0$).",
     "Product $=\\dfrac{C}{A}=\\dfrac{a^{2}-7a+6}{a+1}=\\dfrac{(a-1)(a-6)}{a+1}<0$.",
     "Sign analysis with critical points $-1,1,6$: the rational expression is negative on $(-\\infty,-1)\\cup(1,6)$.",
     "Exclude $a=-1$ (then it is not quadratic) — already excluded as an open point.",
     "Hence $\\boxed{a\\in(-\\infty,-1)\\cup(1,6)}$."
    ]
   },
   {
    "name": "Sign-test via $A\\cdot f(0)$",
    "steps": [
     "The number $0$ lies strictly between the roots $\\Leftrightarrow A\\cdot f(0)<0$; 'roots of opposite sign' is exactly '$0$ between the roots'.",
     "$f(0)=a^2-7a+6=(a-1)(a-6)$, and $A=a+1$.",
     "$A\\,f(0)=(a+1)(a-1)(a-6)<0$.",
     "Sign chart on $-1,1,6$: negative on $(-\\infty,-1)\\cup(1,6)$.",
     "So $\\boxed{a\\in(-\\infty,-1)\\cup(1,6)}$, matching the product computation."
    ]
   }
  ],
  "remark": "Insight: 'opposite-sign roots' is identical to '$0$ lies between the roots', which is why the $A\\cdot f(0)<0$ machine applies and the sign of $A$ matters. The factor $(a+1)$ multiplying the constant term's factors is the whole subtlety."
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
  "title": "Both Beneath Zero",
  "difficulty": 4,
  "task": "Find all",
  "tags": [
   "both-roots-negative",
   "discriminant",
   "vertex",
   "sum-product"
  ],
  "statement": "Find all real $a$ for which both roots of\n\\[ x^{2} + 2a\\,x + (a^{2} - 2a - 3) = 0 \\]\nare negative.",
  "answer": "$a \\in (3,\\,\\infty)$",
  "trap": "Just requiring product of roots $>0$ and sum $<0$ (i.e. $a^2-2a-3>0$ and $-2a<0$) and reading off $a>3$ \\emph{or} $a<-1$ feels complete, but it is not. The full sum/product route needs three conditions at once: sum $<0$ AND product $>0$ AND $D\\ge0$. The phantom branch $a<-1$ violates the sum condition $a>0$ (and for $a<-3/2$ the discriminant is negative, so the roots are not even real). Dropping the discriminant clause lets complex roots masquerade as 'both negative' — at $a=-2$ the roots are $2\\pm i$, not two negative numbers.",
  "solutions": [
   {
    "name": "Three-condition test (both roots $<0$)",
    "steps": [
     "For a monic upward parabola $f(x)=x^2+2ax+(a^2-2a-3)$, both roots are real and $<0$ exactly when three conditions hold: $D\\ge0$ (real roots), $f(0)>0$ (the value at the boundary $x=0$ is positive, so $0$ lies outside the root bracket), and the vertex $x_v<0$ (the bracket sits to the left of $0$).",
     "$D=(2a)^2-4(a^2-2a-3)=8a+12=4(2a+3)\\ge0 \\Rightarrow a\\ge -\\tfrac{3}{2}$.",
     "$f(0)=a^{2}-2a-3=(a-3)(a+1)>0 \\Rightarrow a<-1$ or $a>3$.",
     "$x_v=-\\dfrac{2a}{2}=-a<0 \\Rightarrow a>0$.",
     "Intersect the three sets: $\\big[-\\tfrac32,\\infty\\big)\\cap\\big((-\\infty,-1)\\cup(3,\\infty)\\big)\\cap(0,\\infty)=(3,\\infty)$.",
     "Thus $\\boxed{a\\in(3,\\infty)}$."
    ]
   },
   {
    "name": "Sum and product of roots",
    "steps": [
     "By Vieta, sum of roots $=-2a$ and product of roots $=a^2-2a-3=(a-3)(a+1)$.",
     "Both roots negative requires all three of: $D\\ge0$ (so the roots are real), sum $<0$, and product $>0$.",
     "Sum $<0\\Rightarrow -2a<0\\Rightarrow a>0$.",
     "Product $>0\\Rightarrow (a-3)(a+1)>0\\Rightarrow a<-1$ or $a>3$; intersecting with $a>0$ kills the $a<-1$ branch and leaves $a>3$.",
     "Check $D=4(2a+3)\\ge0$ is automatic on $a>3$, so the roots are genuinely real there.",
     "Hence $\\boxed{a\\in(3,\\infty)}$. At $a=3$ one root is $0$ (roots $-6,0$), which is not negative, so $3$ is excluded."
    ]
   }
  ],
  "remark": "Insight: 'both negative' is the $k=0$ instance of 'both roots $<k$'. The trio $D\\ge0$, $f(k)>0$, $x_v<k$ is the canonical location test, and here it collapses to $a>3$. The sum/vertex condition $a>0$ is exactly what eliminates the seductive $a<-1$ branch that the product condition alone would smuggle in — and the discriminant clause is what stops complex roots (e.g. $2\\pm i$ at $a=-2$) from pretending to be two negative numbers."
 },
 {
  "theme": "location",
  "themeLabel": "Location of Roots",
  "title": "Counting the Lucky Integers",
  "difficulty": 5,
  "task": "Find the number of integers a",
  "tags": [
   "both-roots-interval",
   "integer-count",
   "double-root",
   "discriminant"
  ],
  "statement": "Determine the number of integer values of $a$ for which both roots of\n\\[ x^{2} - a\\,x + (a+3) = 0 \\]\nlie in the interval $(0,\\,6)$.",
  "answer": "$2$ (namely $a=6$ and $a=7$)",
  "trap": "Insisting on $D>0$ (strict) discards $a=6$, where the equation has a DOUBLE root at $x=3\\in(0,6)$. Since 'both roots lie in $(0,6)$' is satisfied by a repeated root inside the interval, the correct condition is $D\\ge0$. Dropping the equality undercounts by one.",
  "solutions": [
   {
    "name": "Localize then count integers",
    "steps": [
     "Both roots in $(0,6)$ for monic $f$ requires $D\\ge0$, $f(0)>0$, $f(6)>0$, and $0<x_v<6$.",
     "$D=a^{2}-4(a+3)=a^{2}-4a-12=(a-6)(a+2)\\ge0\\Rightarrow a\\le-2$ or $a\\ge6$.",
     "$f(0)=a+3>0\\Rightarrow a>-3$.",
     "$f(6)=36-6a+(a+3)=39-5a>0\\Rightarrow a<39/5=7.8$.",
     "Vertex $x_v=a/2\\in(0,6)\\Rightarrow 0<a<12$.",
     "Intersect: $a\\ge6$ (from $D$, $x_v>0$) with $a<7.8$ gives $a\\in[6,7.8)$; integers are $6$ and $7$.",
     "Count $=\\boxed{2}$."
    ]
   },
   {
    "name": "Direct verification of candidates",
    "steps": [
     "From the localization the real interval is $[6,\\,39/5)$; test the integers inside.",
     "$a=6$: $x^2-6x+9=(x-3)^2$, double root $3\\in(0,6)$ — both roots inside. Valid.",
     "$a=7$: $x^2-7x+10=(x-2)(x-5)$, roots $2,5\\in(0,6)$. Valid.",
     "$a=8$: roots $\\approx1.76,6.24$ — the larger exceeds $6$. Invalid.",
     "Only $a=6,7$ qualify, so the count is $\\boxed{2}$."
    ]
   }
  ],
  "remark": "Insight: 'both roots lie in the interval' is true for a repeated root inside it, so the discriminant condition is non-strict ($\\ge$). This single boundary value $a=6$ is the whole point of the count."
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
  "title": "Roots Hiding in an Exponential",
  "difficulty": 5,
  "task": "Find all",
  "tags": [
   "substitution",
   "both-roots-positive",
   "exponential",
   "discriminant"
  ],
  "statement": "Find all real $a$ for which the equation\n\\[ 4^{\\,t} - a\\cdot 2^{\\,t} + (a+3) = 0 \\]\nhas two distinct real solutions $t$.",
  "answer": "$a \\in (6,\\,\\infty)$",
  "trap": "Substituting $y=2^{t}$ and merely asking the quadratic $y^2-ay+(a+3)=0$ to have two distinct real roots ignores the hidden constraint $y=2^{t}>0$. The bare discriminant condition gives $a<-2$ or $a>6$, but for every $a<-2$ at least one root of the $y$-quadratic is negative (indeed for $a\\le -3$ the product $a+3\\le 0$ forces a non-positive root), and a non-positive $y$ yields NO real $t$. Both $y$-roots must be strictly positive, and the double-root case $a=6$ (where $y=3$ is repeated) gives only one $t$ — both pitfalls shrink the answer to $a>6$.",
  "solutions": [
   {
    "name": "Reduce to a positive-roots quadratic",
    "steps": [
     "Let $y=2^{t}>0$; then $4^t=(2^t)^2=y^2$ and the equation becomes $g(y)=y^{2}-a y+(a+3)=0$.",
     "The map $t\\mapsto y=2^{t}$ is a strictly increasing bijection from $\\mathbb{R}$ onto $(0,\\infty)$, so each real $t$ gives exactly one positive $y$ and distinct $t$ give distinct $y$. Hence two distinct real $t$ $\\Leftrightarrow$ $g$ has two distinct POSITIVE roots.",
     "Two distinct positive roots $\\Leftrightarrow$ $D>0$, sum of roots $>0$, and product of roots $>0$.",
     "$D=a^{2}-4(a+3)=a^2-4a-12=(a-6)(a+2)>0\\Rightarrow a<-2$ or $a>6$.",
     "Sum $=a>0\\Rightarrow a>0$; product $=a+3>0\\Rightarrow a>-3$.",
     "Intersect: $\\bigl(\\{a<-2\\}\\cup\\{a>6\\}\\bigr)\\cap\\{a>0\\}\\cap\\{a>-3\\}=(6,\\infty)$, so $\\boxed{a\\in(6,\\infty)}$."
    ]
   },
   {
    "name": "Vertex and boundary check",
    "steps": [
     "For both roots of $g(y)=y^2-ay+(a+3)$ to be positive, use the textbook localization triple: $D\\ge0$, $g(0)>0$, and the vertex abscissa $y_v=\\tfrac{a}{2}>0$.",
     "$g(0)=a+3>0\\Rightarrow a>-3$; $y_v=\\tfrac{a}{2}>0\\Rightarrow a>0$; $D=(a-6)(a+2)\\ge0\\Rightarrow a\\le-2$ or $a\\ge6$.",
     "Combining gives $a\\ge6$ for two non-negative roots, but DISTINCT solutions require $D>0$ strictly, removing $a=6$ (there $g=(y-3)^2$ has the double root $y=3$, i.e. the single solution $t=\\log_2 3$).",
     "Spot-check $a=7$: $g=y^2-7y+10=(y-2)(y-5)$, roots $y=2,5>0$, giving $t=1$ and $t=\\log_2 5$ — two distinct solutions. Valid. And $a=-10$ (in the discarded $a<-2$ branch): $g=y^2+10y-7$ has product $-7<0$, so one root is negative and yields no real $t$ — correctly excluded.",
     "Hence the distinct-solution set is $\\boxed{a\\in(6,\\infty)}$."
    ]
   }
  ],
  "remark": "Insight: an exponential equation collapses to a quadratic in $y=2^{t}$, but the localization 'both roots must be positive' is the bridge back to $t$. The bare discriminant tempts you with the phantom branch $a<-2$, which the sign conditions $\\text{sum}>0$ and $\\text{product}>0$ kill. The single-vs-double root distinction at $a=6$ is exactly why the answer is open at $6$."
 },
 {
  "theme": "commonroots",
  "themeLabel": "Common Roots",
  "title": "The Mirror Pair",
  "difficulty": 4,
  "task": "Prove that",
  "tags": [
   "common root",
   "symmetric coefficients",
   "elimination",
   "monic"
  ],
  "statement": "Let $b \\neq c$ be real numbers such that the equations\n\\[x^2 + bx + c = 0 \\qquad\\text{and}\\qquad x^2 + cx + b = 0\\]\nhave a common root. Prove that this common root must equal $1$, and determine the value of $b + c$.",
  "answer": "The common root is $x = 1$, and $b + c = -1$.",
  "trap": "Assuming the two equations are identical (i.e. $b = c$) because they look symmetric. That case is explicitly excluded by $b \\neq c$; with $b \\neq c$ exactly one root is shared, and subtracting the equations is legitimate precisely because it does not collapse to $0 = 0$.",
  "solutions": [
   {
    "name": "Subtract to eliminate the square term",
    "steps": [
     "Both leading coefficients are $1$, so subtracting the equations cancels $x^2$: $(b - c)x + (c - b) = 0$.",
     "Factor: $(b - c)(x - 1) = 0$. Since $b \\neq c$, we may divide by $b - c$, giving $x = 1$.",
     "Substitute $x = 1$ into $x^2 + bx + c = 0$: $1 + b + c = 0$, hence $b + c = -1$. $\\blacksquare$"
    ]
   },
   {
    "name": "Common-root from Vieta on the difference",
    "steps": [
     "Let $r$ be the shared root. Then $r^2 + br + c = 0$ and $r^2 + cr + b = 0$.",
     "Subtract: $(b - c)r - (b - c) = 0$, i.e. $(b - c)(r - 1) = 0$; with $b \\neq c$ this forces $r = 1$.",
     "Putting $r = 1$ back into either equation yields $1 + b + c = 0$, so $b + c = -1$. $\\blacksquare$"
    ]
   }
  ],
  "remark": "Insight: subtracting two monic quadratics is the workhorse move — it turns a quadratic system into a single linear equation whose root is forced. The symmetry $b \\leftrightarrow c$ guarantees $x = 1$ before you ever know the numbers."
 },
 {
  "theme": "commonroots",
  "themeLabel": "Common Roots",
  "title": "Tuning the Second Quadratic",
  "difficulty": 3,
  "task": "Find all",
  "tags": [
   "common root",
   "find parameter",
   "factoring",
   "shared root"
  ],
  "statement": "Find all real values of $k$ for which the equations\n\\[x^2 - 7x + 12 = 0 \\qquad\\text{and}\\qquad x^2 - 5x + k = 0\\]\nshare a common root, and state the shared root in each case.",
  "answer": "$k = 6$ (shared root $x = 3$) or $k = 4$ (shared root $x = 4$).",
  "trap": "Trying to force BOTH roots to be common by comparing coefficients of the two quadratics. The first has roots $3, 4$ but the second cannot equal the first (their $x$-coefficients differ), so at most one root is shared; you must test each root of the fixed quadratic separately.",
  "solutions": [
   {
    "name": "Test each known root",
    "steps": [
     "Factor the fixed quadratic: $x^2 - 7x + 12 = (x - 3)(x - 4)$, so its roots are $3$ and $4$.",
     "The shared root must be one of these. If $x = 3$: $9 - 15 + k = 0 \\Rightarrow k = 6$. If $x = 4$: $16 - 20 + k = 0 \\Rightarrow k = 4$.",
     "Both give a genuine common root, so $k = 6$ (root $3$) or $k = 4$ (root $4$)."
    ]
   },
   {
    "name": "Subtract and substitute",
    "steps": [
     "Subtracting the equations gives $-2x + (12 - k) = 0$, so the shared root is $x = \\tfrac{12 - k}{2}$.",
     "Substitute into $x^2 - 5x + k = 0$ and clear the denominator to get $(12 - k)^2 - 10(12 - k) + 4k = 0$, i.e. $k^2 - 10k + 24 = 0$.",
     "Factor $(k - 4)(k - 6) = 0$, so $k = 4$ or $k = 6$; back-substitution gives roots $4$ and $3$ respectively."
    ]
   }
  ],
  "remark": "Insight: when one quadratic is fully numeric, its roots are the only candidates -- plug them in. The subtract-and-substitute route gives the same answer and generalizes to cases where neither quadratic factors nicely."
 },
 {
  "theme": "commonroots",
  "themeLabel": "Common Roots",
  "title": "The Resultant Identity in Action",
  "difficulty": 4,
  "task": "Determine",
  "tags": [
   "common root",
   "resultant identity",
   "non-monic",
   "cross-multiplication"
  ],
  "statement": "The equations\n\\[2x^2 - 3x + 1 = 0 \\qquad\\text{and}\\qquad 6x^2 - 5x + 1 = 0\\]\nhave exactly one common root. First verify, using the condition\n\\[(c_1 a_2 - c_2 a_1)^2 = (a_1 b_2 - a_2 b_1)(b_1 c_2 - b_2 c_1),\\]\nthat a common root exists, then determine its value from $x = \\dfrac{c_1 a_2 - c_2 a_1}{a_1 b_2 - a_2 b_1}$.",
  "answer": "The condition holds ($16 = 16$); the common root is $x = \\dfrac{1}{2}$.",
  "trap": "Dividing one equation by the other's leading coefficient and then 'cancelling $x^2$' as if both were monic. Here $a_1 = 2 \\neq 6 = a_2$, so you must eliminate $x^2$ by forming $a_2 f_1 - a_1 f_2$ (or use the identity directly) — naively subtracting $f_2 - f_1 = 4x^2 - 2x$ leaves a stray $4x^2$ term and yields the spurious root $x = 0$ alongside the genuine one.",
  "solutions": [
   {
    "name": "Apply the common-root condition",
    "steps": [
     "Read off $a_1 = 2, b_1 = -3, c_1 = 1$ and $a_2 = 6, b_2 = -5, c_2 = 1$.",
     "Compute $c_1 a_2 - c_2 a_1 = 6 - 2 = 4$, $a_1 b_2 - a_2 b_1 = -10 + 18 = 8$, $b_1 c_2 - b_2 c_1 = -3 + 5 = 2$.",
     "Check $(4)^2 = 16$ versus $(8)(2) = 16$ — equal, so a common root exists; then $x = \\tfrac{4}{8} = \\tfrac12$."
    ]
   },
   {
    "name": "Direct factoring",
    "steps": [
     "Factor: $2x^2 - 3x + 1 = (2x - 1)(x - 1)$ with roots $\\tfrac12, 1$.",
     "Factor: $6x^2 - 5x + 1 = (2x - 1)(3x - 1)$ with roots $\\tfrac12, \\tfrac13$.",
     "The only shared value is $x = \\tfrac12$, confirming the formula."
    ]
   },
   {
    "name": "Eliminate the square term",
    "steps": [
     "Form $a_2 f_1 - a_1 f_2 = 6(2x^2 - 3x + 1) - 2(6x^2 - 5x + 1) = -8x + 4 = 0$.",
     "Solve the linear equation: $x = \\tfrac12$.",
     "Substitute back into $2x^2 - 3x + 1$: $\\tfrac12 - \\tfrac32 + 1 = 0$, confirming $x = \\tfrac12$ is genuine."
    ]
   }
  ],
  "remark": "Insight: the identity $(c_1a_2 - c_2a_1)^2 = (a_1b_2 - a_2b_1)(b_1c_2 - b_2c_1)$ is just the resultant of two quadratics set to zero — it both detects a common root and, via the linear remainder, hands you the root for free. Equivalently, $\\operatorname{Res}(f_1, f_2) = 0$ here."
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
     "Form $x^2 + cx + ab$; substituting $c = -(a+b)$ gives $x^2 - (a+b)x + ab = (x - a)(x - b)$, whose roots are exactly $a$ and $b$ \\textemdash the two non-common roots. $\\blacksquare$"
    ]
   }
  ],
  "remark": "Insight: a single shared root plus Vieta turns three symmetric quadratics into a closed cycle \\textemdash the leftover roots of two equations become the full root-set of the third. The condition $a+b+c = 0$ is the hinge that locks the cycle. Note the converse direction too: a brute search over $a \\neq b$ with $a+b+c \\neq 0$ never produces a nonzero common root, so the hypothesis genuinely forces $a+b+c=0$."
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
  "title": "The Lonely Real Parameter",
  "difficulty": 5,
  "task": "Find all",
  "tags": [
   "common root",
   "non-monic",
   "parameter",
   "resultant",
   "real solutions"
  ],
  "statement": "Find all real values of $k$ for which the equations\n\\[2x^2 + x + k = 0 \\qquad\\text{and}\\qquad 3x^2 + kx - 4 = 0\\]\npossess a common root, and determine that root.",
  "answer": "$k = -1$ is the only real value; the common root is $x = -1$.",
  "trap": "Eliminating $x^2$ to get a linear expression for the root and forgetting that the leading coefficients differ ($2 \\neq 3$), so you must form $3 f_1 - 2 f_2$ (not $f_1 - f_2$) to kill $x^2$. The careless subtraction $f_1 - f_2 = -x^2 + (1-k)x + (k+4)$ still carries an $x^2$ term, so treating it as linear in $x$ produces phantom values of $k$.",
  "solutions": [
   {
    "name": "Eliminate then substitute",
    "steps": [
     "Eliminate $x^2$ via $3(2x^2 + x + k) - 2(3x^2 + kx - 4) = 0$: this gives $(3 - 2k)x + (3k + 8) = 0$, so the shared root must be $x = \\dfrac{3k + 8}{2k - 3}$ (valid for $k \\neq \\tfrac32$; one checks $k=\\tfrac32$ gives no common root).",
     "Substitute this $x$ into $2x^2 + x + k = 0$ and clear the denominator $(2k-3)^2$. The numerator collapses to $4(k + 1)(k^2 + 2k + 26) = 0$, so the common-root condition is $(k + 1)(k^2 + 2k + 26) = 0$.",
     "The quadratic factor has discriminant $4 - 104 = -100 < 0$ (no real roots), so the only real solution is $k = -1$, giving $x = \\dfrac{3(-1)+8}{2(-1)-3} = \\dfrac{5}{-5} = -1$."
    ]
   },
   {
    "name": "Resultant and reality check",
    "steps": [
     "The resultant of the two quadratics in $x$ equals $2(k + 1)(k^2 + 2k + 26)$; it vanishes exactly when a common root exists.",
     "Since $k^2 + 2k + 26 = (k+1)^2 + 25 > 0$ for every real $k$, the lone real root of the resultant is $k = -1$.",
     "At $k = -1$: $2x^2 + x - 1 = (2x - 1)(x + 1)$ and $3x^2 - x - 4 = (3x - 4)(x + 1)$, whose only shared factor is $x + 1$, so the common root is $x = -1$."
    ]
   }
  ],
  "remark": "Insight: with unequal leading coefficients you eliminate $x^2$ by the cross-combination $a_2 f_1 - a_1 f_2$, never the bare difference $f_1 - f_2$. The cubic-in-$k$ that emerges factors into a single real root and an always-positive quadratic $(k+1)^2 + 25$ — a clean certificate of uniqueness over $\\mathbb{R}$."
 },
 {
  "theme": "commonroots",
  "themeLabel": "Common Roots",
  "title": "The Integer Hunt",
  "difficulty": 4,
  "task": "Find all",
  "tags": [
   "common root",
   "symmetric coefficients",
   "integer roots",
   "diophantine",
   "vieta"
  ],
  "statement": "Let $a \\neq b$ be integers such that the equations\n\\[x^2 + ax + b = 0 \\qquad\\text{and}\\qquad x^2 + bx + a = 0\\]\nhave a common root, and suppose their two NON-common roots multiply to $-42$. Find all ordered pairs $(a, b)$.",
  "answer": "$(a, b) = (6, -7)$ or $(a, b) = (-7, 6)$.",
  "trap": "Treating the four roots as four independent unknowns. Once you know the common root is $1$, Vieta pins each non-common root to a single parameter; assuming both roots are shared (so $a = b$) contradicts $a \\neq b$ and destroys the problem.",
  "solutions": [
   {
    "name": "Common root then Vieta",
    "steps": [
     "Subtracting gives $(a - b)(x - 1) = 0$; since $a \\neq b$, the common root is $x = 1$, and $1 + a + b = 0$, so $a + b = -1$.",
     "By Vieta, $x^2 + ax + b$ has root product $b$, so its non-common root is $b$; similarly $x^2 + bx + a$ has non-common root $a$.",
     "The non-common roots are $a$ and $b$ with $a + b = -1$ and $ab = -42$. Then $a, b$ are roots of $t^2 + t - 42 = (t + 7)(t - 6) = 0$, giving $\\{a, b\\} = \\{6, -7\\}$, i.e. $(6, -7)$ or $(-7, 6)$."
    ]
   },
   {
    "name": "Solve the symmetric system directly",
    "steps": [
     "From the shared-root analysis, $a + b = -1$. Combine with the given $ab = -42$.",
     "Solve $a + b = -1, ab = -42$: substitute $b = -1 - a$ into $a(-1 - a) = -42$, i.e. $a^2 + a - 42 = 0$, so $a = 6$ or $a = -7$.",
     "The corresponding $b$ values are $-7$ and $6$, yielding $(a, b) = (6, -7)$ and $(-7, 6)$; both satisfy $a \\neq b$."
    ]
   }
  ],
  "remark": "Insight: the symmetric swap pins the common root to $1$ and the constant $a + b = -1$ instantly; the extra product condition then becomes a tidy quadratic in one variable. Two coefficients, two equations, two ordered solutions."
 },
 {
  "theme": "commonroots",
  "themeLabel": "Common Roots",
  "title": "The Shared Note Between Two Strings",
  "difficulty": 4,
  "task": "Evaluate",
  "tags": [
   "common root",
   "two parameters",
   "elimination",
   "self-referential root",
   "resultant"
  ],
  "statement": "Two monic quadratics carry different linear coefficients but are tuned to ring at one shared frequency $r$:\n\\[x^2 + ax + 6 = 0 \\qquad\\text{and}\\qquad x^2 + bx + 15 = 0.\\]\nThey have exactly one common root $r$, and the tuning is self-referential: the shared root equals the difference of the parameters, $r = a - b$. Given that $a$ and $b$ are real with $a \\neq b$, find all possible values of $a + b$.",
  "answer": "$a + b = -13$ (with $r = a-b = 3$, $a = -5$, $b = -8$) or, by the mirror sign branch, $a + b = 13$ (with $r = -3$, $a = 5$, $b = 8$). The clean principal solution is $a + b = -13$.",
  "trap": "When you subtract the two equations you get $(a-b)x = c_2 - c_1 = 15 - 6 = 9$. A common error is to mis-order the constant difference as $6 - 15 = -9$, turning $r^2 = 9$ into $r^2 = -9$ and 'proving' no real shared root exists. The constant term of the FIRST equation is subtracted FROM the second's on the right-hand side: $a x^2$ terms cancel, $(a-b)x$ remains, and the constants give $+(c_1 - c_2)$ on the left, i.e. $(a-b)x + (6 - 15) = 0 \\Rightarrow (a-b)x = 9$. Get the sign right and two clean real roots $r = \\pm 3$ appear.",
  "solutions": [
   {
    "name": "Eliminate to a linear relation, then use the self-link",
    "steps": [
     "Both quadratics vanish at the shared root $r$: $r^2 + ar + 6 = 0$ and $r^2 + br + 15 = 0$.",
     "Subtract to kill $r^2$: $(a-b)r + (6 - 15) = 0$, so $(a-b)\\,r = 9$.",
     "Apply the self-referential condition $r = a - b$, turning this into $r \\cdot r = 9$, i.e. $r^2 = 9$, so $r = 3$ or $r = -3$.",
     "For $r = 3$: $r^2 + ar + 6 = 0 \\Rightarrow 9 + 3a + 6 = 0 \\Rightarrow a = -5$, and $b = a - r = -5 - 3 = -8$; hence $a + b = -13$. For $r = -3$ the mirror gives $a = 5,\\ b = 8,\\ a + b = 13$."
    ]
   },
   {
    "name": "Eliminate one parameter via b = a - r",
    "steps": [
     "From $r = a - b$ write $b = a - r$ and substitute into $r^2 + br + 15 = 0$: $r^2 + (a - r)r + 15 = 0 \\Rightarrow ar + 15 = 0 \\Rightarrow ar = -15$.",
     "From the first equation $r^2 + ar + 6 = 0$ substitute $ar = -15$: $r^2 - 15 + 6 = 0 \\Rightarrow r^2 = 9 \\Rightarrow r = \\pm 3$.",
     "Then $a = -15/r$: for $r = 3$, $a = -5$ and $b = a - r = -8$, giving $a + b = -13$; for $r = -3$, $a = 5,\\ b = 8,\\ a + b = 13$.",
     "Both check: $x^2 - 5x + 6 = (x-2)(x-3)$ and $x^2 - 8x + 15 = (x-3)(x-5)$ share exactly $x = 3$, and indeed $a - b = -5-(-8) = 3 = r$."
    ]
   },
   {
    "name": "Resultant condition for a common root",
    "steps": [
     "A common root exists iff the resultant of the two quadratics vanishes; for monic $x^2 + ax + 6$ and $x^2 + bx + 15$ it equals $(15 - 6)^2 - (a - b)(\\,b\\cdot 6 - a\\cdot 15\\,) = 15a^2 - 21ab + 6b^2 + 81$, and at the shared root the linear elimination forces $(a-b)\\,r = 9$.",
     "Impose $r = a-b$ to get $(a-b)^2 = 9$, so $a - b = \\pm 3$, matching $r = \\pm 3$.",
     "Pair each with one original equation to pin $a$: $a - b = 3$ gives $(a,b,r) = (-5,-8,3)$ and $a+b = -13$; $a - b = -3$ gives $(5,8,-3)$ and $a+b = 13$. The squared factor $(a-b)^2 = 9$ is the resultant's fingerprint of the single shared root."
    ]
   }
  ],
  "remark": "Insight: tying the shared root back to the parameters ($r = a-b$) supplies the extra equation that pins an otherwise one-parameter family. The decisive simplification is that subtracting two monic quadratics with equal leading terms leaves a linear equation $(a-b)r = c_1 - c_2$ that, once fed the self-link, collapses to $r^2 = c_2 - c_1$. Because the constants $6$ and $15$ differ, the two quadratics can never coincide, so the shared root is automatically unique. Two mirror-image real solutions emerge ($a+b = \\mp 13$); always carry both unless a sign constraint is given."
 },
 {
  "theme": "rangefraction",
  "themeLabel": "Range via the Discriminant",
  "title": "The Twin Trinomials",
  "difficulty": 4,
  "task": "Determine",
  "tags": [
   "range",
   "discriminant",
   "symmetric",
   "rational function"
  ],
  "statement": "As $x$ ranges over all real numbers, determine the set of values taken by \\[ f(x)=\\frac{x^{2}+x+1}{x^{2}-x+1}. \\]",
  "answer": "The range is the closed interval $\\left[\\dfrac{1}{3},\\,3\\right]$.",
  "trap": "Writing the cross-multiplied equation $(y-1)x^2-(y+1)x+(y-1)=0$ and demanding the discriminant be $>0$ (strict) throws away the endpoints $y=1/3,3$, where the discriminant is exactly $0$ (a real double root still exists). The condition must be $\\ge 0$, so both endpoints are attained.",
  "solutions": [
   {
    "name": "Discriminant in $y$",
    "steps": [
     "Set $y=\\frac{x^2+x+1}{x^2-x+1}$; the denominator $x^2-x+1=(x-\\tfrac12)^2+\\tfrac34>0$ never vanishes, so $y$ is defined for all real $x$.",
     "Cross-multiply: $y(x^2-x+1)=x^2+x+1$, i.e. $(y-1)x^2-(y+1)x+(y-1)=0$.",
     "For $y\\ne 1$ this is a genuine quadratic in $x$; a real $x$ exists iff its discriminant is $\\ge 0$: $(y+1)^2-4(y-1)^2\\ge 0$.",
     "Expand: $(y+1)^2-4(y-1)^2=-3y^2+10y-3=-(3y-1)(y-3)\\ge 0$, giving $\\tfrac13\\le y\\le 3$.",
     "Handle $y=1$ separately: the equation becomes $-2x=0$, so $x=0$ works and $f(0)=1\\in[\\tfrac13,3]$.",
     "Hence the range is $\\boxed{\\left[\\tfrac13,3\\right]}$."
    ]
   },
   {
    "name": "Splitting off the symmetric core",
    "steps": [
     "Write $f(x)=1+\\dfrac{2x}{x^2-x+1}$, since $\\dfrac{(x^2+x+1)-(x^2-x+1)}{x^2-x+1}=\\dfrac{2x}{x^2-x+1}$.",
     "Let $g(x)=\\dfrac{2x}{x^2-x+1}$. For $x=0$, $g=0$; for $x\\ne 0$ divide numerator and denominator by $x$: $g=\\dfrac{2}{x+\\frac1x-1}$.",
     "By AM-GM on $x>0$, $x+\\tfrac1x\\ge 2$, so the inner expression $u=x+\\tfrac1x-1\\ge 1$, giving $g=2/u\\in(0,2]$; for $x<0$, $x+\\tfrac1x\\le -2$, so $u\\le -3$, giving $g=2/u\\in[-\\tfrac23,0)$.",
     "Thus $g\\in[-\\tfrac23,2]$ and $f=1+g\\in[\\tfrac13,3]$, both extremes attained ($x=1$ gives $3$, $x=-1$ gives $\\tfrac13$).",
     "Range $=\\boxed{[\\tfrac13,3]}$."
    ]
   },
   {
    "name": "Endpoint check by attainment",
    "steps": [
     "From the discriminant analysis the candidate range is $[\\tfrac13,3]$; verify the boundary values are actually reached.",
     "At $y=3$: $2x^2-4x+2=0\\Rightarrow (x-1)^2=0\\Rightarrow x=1$, and $f(1)=3$.",
     "At $y=\\tfrac13$: $\\tfrac23 x^2+\\tfrac43 x+\\tfrac23=0\\Rightarrow (x+1)^2=0\\Rightarrow x=-1$, and $f(-1)=\\tfrac13$.",
     "Since $f$ is continuous on $\\mathbb{R}$ and attains both $\\tfrac13$ and $3$, by the Intermediate Value Theorem every value between is attained, so the range is exactly $\\boxed{[\\tfrac13,3]}$."
    ]
   }
  ],
  "remark": "Insight: a fraction of two positive-definite quadratics is bounded, and the discriminant-in-$y$ method converts the problem into a single quadratic inequality. The genuine symmetry here is $f(-x)=1/f(x)$ (equivalently $f(x)\\,f(-x)=1$); this is exactly why the two endpoints are reciprocals, with $x=1$ yielding $3$ and $x=-1$ yielding $1/3$. Note that replacing $x$ by $1/x$ leaves $f$ unchanged, $f(1/x)=f(x)$, which is a different symmetry of the same expression."
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
  "title": "The Vanishing Ceiling",
  "difficulty": 5,
  "task": "Determine",
  "tags": [
   "range",
   "discriminant",
   "leading coefficient",
   "half-open interval",
   "asymptote"
  ],
  "statement": "Determine, with proof, the exact range of \\[ f(x)=\\frac{2x^{2}+4x+1}{x^{2}+2x+3}\\qquad(x\\in\\mathbb{R}). \\]",
  "answer": "The range is the half-open interval $\\left[-\\dfrac{1}{2},\\,2\\right)$.",
  "trap": "Solving the discriminant inequality gives $-\\tfrac12\\le y\\le 2$ and one is tempted to report the closed interval $[-\\tfrac12,2]$. But $y=2$ makes the coefficient of $x^2$ vanish; the equation collapses to $0\\cdot x^2+0\\cdot x-5=0$, which has NO solution, so $y=2$ is the unattained value (the horizontal asymptote). The interval is half-open.",
  "solutions": [
   {
    "name": "Discriminant with leading-coefficient audit",
    "steps": [
     "Denominator $x^2+2x+3=(x+1)^2+2>0$, so $f$ is defined for all real $x$.",
     "Write $y(x^2+2x+3)=2x^2+4x+1$: $(y-2)x^2+(2y-4)x+(3y-1)=0$.",
     "Case $y=2$: coefficients become $0,0,5$, i.e. $5=0$, impossible — so $y=2$ is NOT attained.",
     "Case $y\\ne 2$: real $x$ exists iff discriminant $\\ge0$: $(2y-4)^2-4(y-2)(3y-1)\\ge0$.",
     "Factor: $4(y-2)^2-4(y-2)(3y-1)=-4(y-2)(2y+1)\\ge0\\Rightarrow -\\tfrac12\\le y\\le 2$.",
     "Combining with $y\\ne 2$: range $=\\left[-\\tfrac12,2\\right)$. Endpoint $y=-\\tfrac12$ is attained: $\\tfrac52(x+1)^2=0\\Rightarrow x=-1$. Answer $\\boxed{[-\\tfrac12,2)}$."
    ]
   },
   {
    "name": "Asymptote + monotone tails",
    "steps": [
     "As $x\\to\\pm\\infty$, $f(x)\\to 2$ (ratio of leading coefficients), and one checks $f(x)=2-\\frac{5}{x^2+2x+3}<2$ for all $x$ since $x^2+2x+3>0$.",
     "Thus $y=2$ is a strict upper bound approached but never reached.",
     "The minimum of $f$ equals $2$ minus the maximum of $\\frac{5}{x^2+2x+3}$; the denominator's minimum is $2$ at $x=-1$, so $\\frac{5}{\\cdot}$ peaks at $\\tfrac52$.",
     "Therefore $f\\ge 2-\\tfrac52=-\\tfrac12$, attained at $x=-1$. Range $=\\boxed{[-\\tfrac12,2)}$."
    ]
   },
   {
    "name": "Rewrite as constant plus proper fraction",
    "steps": [
     "Polynomial-divide: $f(x)=2+\\dfrac{(4x+1)-2(2x+3)}{x^2+2x+3}=2+\\dfrac{-5}{x^2+2x+3}$.",
     "Let $d=x^2+2x+3\\in[2,\\infty)$ (minimum $2$ at $x=-1$, unbounded above).",
     "Then $\\frac{-5}{d}\\in\\big[-\\tfrac52,0\\big)$: at $d=2$ it equals $-\\tfrac52$; as $d\\to\\infty$ it $\\to 0^-$ but never $0$.",
     "Hence $f=2+\\frac{-5}{d}\\in[-\\tfrac12,2)$, confirming $\\boxed{[-\\tfrac12,2)}$."
    ]
   }
  ],
  "remark": "Insight: the single most common error in this whole topic is forgetting the value of $y$ that kills the $x^2$ term. Here that value equals the horizontal asymptote and is precisely the omitted endpoint — the discriminant method and the asymptote viewpoint agree."
 },
 {
  "theme": "rangefraction",
  "themeLabel": "Range via the Discriminant",
  "title": "Linear over Quadratic",
  "difficulty": 4,
  "task": "Find",
  "tags": [
   "range",
   "discriminant",
   "linear numerator",
   "bounded",
   "endpoints"
  ],
  "statement": "Find the range of \\[ g(x)=\\frac{2x-4}{x^{2}-2x+4}\\qquad(x\\in\\mathbb{R}). \\]",
  "answer": "The range is the closed interval $\\left[-1,\\,\\dfrac{1}{3}\\right]$.",
  "trap": "Because the numerator is linear, students often think one term ('linear') means an unbounded range. In fact, with the denominator always positive and of higher degree, the fraction tends to $0$ at infinity and is bounded. Also, $y=0$ does NOT make any $x^2$ coefficient vanish here (the $x^2$ coefficient of the cleared equation is $-y$, zero only at $y=0$, the value attained at $x=2$), so no endpoint is lost.",
  "solutions": [
   {
    "name": "Discriminant in $y$",
    "steps": [
     "Denominator $x^2-2x+4=(x-1)^2+3>0$, so $g$ is defined for all real $x$.",
     "Cross-multiply: $y(x^2-2x+4)=2x-4$, i.e. $yx^2-(2y+2)x+(4y+4)=0$.",
     "Case $y=0$: $-2x+4=0\\Rightarrow x=2$, so $0$ is attained.",
     "Case $y\\ne0$: real $x$ iff $(2y+2)^2-4y(4y+4)\\ge0$.",
     "Expand: $4y^2+8y+4-16y^2-16y=-12y^2-8y+4=-4(3y-1)(y+1)\\ge0\\Rightarrow -1\\le y\\le\\tfrac13$.",
     "Both endpoints attained ($y=-1$ at $x=0$, $y=\\tfrac13$ at $x=4$), so range $=\\boxed{[-1,\\tfrac13]}$."
    ]
   },
   {
    "name": "Calculus cross-check",
    "steps": [
     "Differentiate: $g'(x)=\\dfrac{2(x^2-2x+4)-(2x-4)(2x-2)}{(x^2-2x+4)^2}$.",
     "Numerator $=2x^2-4x+8-(4x^2-12x+8)=-2x^2+8x=-2x(x-4)$, zero at $x=0,4$.",
     "$g(0)=\\frac{-4}{4}=-1$ (a minimum) and $g(4)=\\frac{4}{12}=\\tfrac13$ (a maximum); as $x\\to\\pm\\infty$, $g\\to0$.",
     "Therefore $g$ attains all values from $-1$ to $\\tfrac13$, range $=\\boxed{[-1,\\tfrac13]}$."
    ]
   }
  ],
  "remark": "Insight: a linear-over-(positive-definite-quadratic) fraction is always bounded with both extrema attained at finite points, and the two critical values are exactly the discriminant roots in $y$. The method is identical to quadratic/quadratic — just with leading numerator coefficient $0$."
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
  "title": "Counting the Lattice Catch",
  "difficulty": 4,
  "task": "Find the number of",
  "tags": [
   "range",
   "discriminant",
   "counting",
   "integers",
   "bounded"
  ],
  "statement": "Find the number of integers that lie in the range of \\[ p(x)=\\frac{3x^{2}+2x+3}{x^{2}+1}\\qquad(x\\in\\mathbb{R}). \\]",
  "answer": "There are exactly $3$ integers in the range (namely $2,3,4$).",
  "trap": "Estimating the range by plugging in a few values (e.g. $p(0)=3$, $p(\\pm1)\\approx 2$) and guessing a wide interval. The actual range is the tight interval $[2,4]$, so only $2,3,4$ qualify; sloppy bounds would over- or under-count. One must compute the exact endpoints via the discriminant.",
  "solutions": [
   {
    "name": "Discriminant, then count",
    "steps": [
     "Denominator $x^2+1>0$ always, so $p$ is defined on all of $\\mathbb{R}$.",
     "Set $y(x^2+1)=3x^2+2x+3$: $(y-3)x^2-2x+(y-3)=0$.",
     "Case $y=3$: $-2x=0\\Rightarrow x=0$, so $3$ is attained.",
     "Case $y\\ne3$: a real $x$ exists iff the discriminant $4-4(y-3)^2\\ge0\\Rightarrow(y-3)^2\\le1\\Rightarrow 2\\le y\\le4$.",
     "So the range is $[2,4]$; the integers it contains are $2,3,4$, a total of $\\boxed{3}$."
    ]
   },
   {
    "name": "Shift to symmetric core",
    "steps": [
     "Since $3(x^2+1)=3x^2+3$, we can write $p(x)=\\dfrac{3(x^2+1)+2x}{x^2+1}=3+\\dfrac{2x}{x^2+1}$.",
     "The standard bound $|2x|\\le x^2+1$ (i.e. $(x\\mp1)^2\\ge0$) gives $\\dfrac{2x}{x^2+1}\\in[-1,1]$.",
     "Hence $p\\in[2,4]$, with the minimum $-1$ attained at $x=-1$ and the maximum $1$ at $x=1$.",
     "Integers in $[2,4]$: $\\{2,3,4\\}$, so the count is $\\boxed{3}$."
    ]
   }
  ],
  "remark": "Insight: the bound $\\big|\\frac{2x}{x^2+1}\\big|\\le 1$ is the discriminant condition in disguise (it is $1-\\frac{(2x)^2}{(x^2+1)^2}\\ge0$). Reducing to '$3$ plus a bounded term' makes the symmetric range $[2,4]$ transparent."
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
  "trap": "Cross-multiplying gives $(y-1)x^{2}+3(y+1)x+4(y-1)=0$. The reflex is to declare $y=1$ inadmissible because the coefficient of $x^{2}$ vanishes there. But when $y=1$ the equation does not disappear — it degrades to the genuine \\emph{linear} equation $6x=0$, which has the real solution $x=0$. So $y=1$ is attained. A value where the leading coefficient dies is excluded only if the resulting linear equation is itself inconsistent; here it is not. (Compare: had the linear part also vanished with a nonzero constant, $y=1$ would be barred.)",
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
  "title": "The Half-Amplitude Lemma",
  "difficulty": 4,
  "task": "Prove that",
  "tags": [
   "range",
   "discriminant",
   "proof",
   "inequality",
   "bound"
  ],
  "statement": "Prove that for every real number $x$, \\[ -\\frac{1}{2}\\le\\frac{x}{x^{2}+1}\\le\\frac{1}{2}, \\] and determine exactly when each bound is achieved. (Equivalently, show the range of $x/(x^2+1)$ is $[-\\tfrac12,\\tfrac12]$.)",
  "answer": "Proved: the range is exactly $\\left[-\\tfrac12,\\tfrac12\\right]$; the upper bound $\\tfrac12$ is achieved iff $x=1$, the lower bound $-\\tfrac12$ iff $x=-1$.",
  "trap": "Trying to prove the bound by AM-GM as $\\frac{x}{x^2+1}\\le\\frac{x}{2x}=\\frac12$ — this is only valid for $x>0$ and silently divides by $x$, losing $x\\le0$ and the case $x=0$. The discriminant (or a single squared-difference) argument covers all real $x$ at once.",
  "solutions": [
   {
    "name": "Discriminant in $y$",
    "steps": [
     "Let $y=\\frac{x}{x^2+1}$; since $x^2+1>0$, $y$ is defined for all real $x$.",
     "Cross-multiply: $yx^2-x+y=0$.",
     "Case $y=0$: $x=0$, value $0\\in[-\\tfrac12,\\tfrac12]$.",
     "Case $y\\ne0$: a real $x$ exists iff discriminant $1-4y^2\\ge0$, i.e. $y^2\\le\\tfrac14$, i.e. $-\\tfrac12\\le y\\le\\tfrac12$.",
     "Equality $y=\\pm\\tfrac12$ forces the double root $x=\\frac{1}{2y}=\\pm1$. Hence the range is $[-\\tfrac12,\\tfrac12]$, achieved at $x=\\pm1$. $\\blacksquare$"
    ]
   },
   {
    "name": "Squared-difference (SOS)",
    "steps": [
     "For all real $x$: $(x-1)^2\\ge0\\Rightarrow x^2+1\\ge2x\\Rightarrow \\frac{x}{x^2+1}\\le\\frac12$ — but to keep this valid we argue directly: $\\tfrac12-\\frac{x}{x^2+1}=\\frac{x^2-2x+1}{2(x^2+1)}=\\frac{(x-1)^2}{2(x^2+1)}\\ge0$.",
     "Similarly $\\frac{x}{x^2+1}+\\tfrac12=\\frac{(x+1)^2}{2(x^2+1)}\\ge0$.",
     "Both numerators are squares and the denominator is positive, so the two inequalities hold for every real $x$, with equality iff $x=1$ and $x=-1$ respectively.",
     "Therefore $-\\tfrac12\\le\\frac{x}{x^2+1}\\le\\tfrac12$ for all $x$, and the bounds are attained, so the range is $[-\\tfrac12,\\tfrac12]$. $\\blacksquare$"
    ]
   }
  ],
  "remark": "Insight: the discriminant condition $1-4y^2\\ge0$ is algebraically identical to the two SOS certificates $\\tfrac12\\mp\\frac{x}{x^2+1}=\\frac{(x\\mp1)^2}{2(x^2+1)}$. The discriminant method even hands you the equality cases for free via the double root $x=1/(2y)$."
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
  "title": "The Caged Vertex",
  "difficulty": 3,
  "task": "Determine",
  "tags": [
   "restricted interval",
   "vertex outside",
   "endpoints",
   "upward parabola"
  ],
  "statement": "Let $f(x)=3x^{2}-12x+7$. Determine the minimum and maximum values of $f$ as $x$ ranges over the closed interval $[3,5]$.",
  "answer": "Minimum $=-2$ (at $x=3$); maximum $=22$ (at $x=5$).",
  "trap": "Writing the answer as the vertex value $f(2)=-5$. The vertex sits at $x=2$, which lies OUTSIDE $[3,5]$, so the parabola is strictly increasing on the whole interval; the extrema occur at the endpoints, not at the vertex.",
  "solutions": [
   {
    "name": "Locate the vertex relative to the interval",
    "steps": [
     "Since $a=3>0$ the parabola opens upward; its vertex is at $x=-\\frac{b}{2a}=\\frac{12}{6}=2$.",
     "Because $2<3$, the entire interval $[3,5]$ lies to the RIGHT of the vertex, where $f$ is increasing.",
     "Hence the minimum is at the left endpoint and the maximum at the right endpoint.",
     "$f(3)=27-36+7=-2$ and $f(5)=75-60+7=22$, so $\\boxed{\\min=-2,\\ \\max=22}$."
    ]
   },
   {
    "name": "Completing the square + monotonicity",
    "steps": [
     "Write $f(x)=3(x-2)^{2}-5$.",
     "For $x\\ge 3$ we have $x-2\\ge 1>0$, so $(x-2)^{2}$ is increasing, hence $f$ is increasing on $[3,5]$.",
     "Therefore $\\min=f(3)=3(1)-5=-2$ and $\\max=f(5)=3(9)-5=22$, giving $\\boxed{[-2,22]}$."
    ]
   }
  ],
  "remark": "Insight: on a closed interval an upward parabola attains its minimum at the vertex ONLY when the vertex lies inside the interval; otherwise both extrema are endpoint values. Always compare $-b/2a$ with $[p,q]$ first."
 },
 {
  "theme": "maxmin",
  "themeLabel": "Maxima & Minima",
  "title": "Roof of the Downward Arch",
  "difficulty": 3,
  "task": "Find",
  "tags": [
   "downward parabola",
   "greatest value",
   "vertex",
   "completing the square"
  ],
  "statement": "A quantity is modelled by $g(x)=-2x^{2}+10x-9$ for all real $x$. Find the greatest value attained by $g$, and the $x$ at which it occurs.",
  "answer": "Greatest value $=\\dfrac{7}{2}$, attained at $x=\\dfrac{5}{2}$.",
  "trap": "Reflexively answering that the parabola has a minimum and computing the vertex as a least value. Because the leading coefficient $a=-2<0$, the parabola opens DOWNWARD, so the vertex is a MAXIMUM; there is no minimum (values run to $-\\infty$).",
  "solutions": [
   {
    "name": "Vertex formula",
    "steps": [
     "The vertex occurs at $x=-\\frac{b}{2a}=-\\frac{10}{2(-2)}=\\frac{5}{2}$.",
     "Since $a<0$ this vertex is the global maximum.",
     "$g\\!\\left(\\tfrac52\\right)=-2\\cdot\\tfrac{25}{4}+10\\cdot\\tfrac52-9=-\\tfrac{25}{2}+25-9=\\tfrac72$.",
     "Greatest value $=\\boxed{\\tfrac{7}{2}}$ at $x=\\tfrac52$."
    ]
   },
   {
    "name": "Completing the square",
    "steps": [
     "$g(x)=-2\\!\\left(x^{2}-5x\\right)-9=-2\\!\\left(x-\\tfrac52\\right)^{2}+\\tfrac{25}{2}-9$.",
     "$=-2\\!\\left(x-\\tfrac52\\right)^{2}+\\tfrac72$.",
     "The squared term is $\\ge 0$, so $g(x)\\le \\tfrac72$ with equality iff $x=\\tfrac52$.",
     "Hence the maximum is $\\boxed{\\tfrac72}$."
    ]
   }
  ],
  "remark": "Insight: the sign of the leading coefficient decides max vs. min. The completed-square form $a(x-h)^2+k$ exposes both the location $h$ and the extreme value $k$ at a glance."
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
  "title": "The Town That Minimised Its Commute",
  "difficulty": 4,
  "task": "Find",
  "tags": [
   "sum of squares",
   "centroid",
   "completing the square",
   "word problem"
  ],
  "statement": "Four houses stand along a straight road at the positions $1,\\ 4,\\ 6,\\ 9$ (in kilometres from the town gate). A well is to be dug at position $x$ on the road. Find the position $x$ that minimises the total of the squared distances $S(x)=(x-1)^{2}+(x-4)^{2}+(x-6)^{2}+(x-9)^{2}$, and find that minimum total.",
  "answer": "$x=5$, giving minimum total $S=34$ (km$^2$).",
  "trap": "Choosing the MEDIAN of the data (which minimises the sum of ABSOLUTE distances) instead of the MEAN. For a sum of SQUARED distances the optimum is the arithmetic mean $\\frac{1+4+6+9}{4}=5$, not the median $5$ — they happen to coincide numerically here, but the seductive reasoning 'pick the middle house' is the wrong principle and fails on other data.",
  "solutions": [
   {
    "name": "Expand into a single quadratic",
    "steps": [
     "$S(x)=4x^{2}-2(1+4+6+9)x+(1^{2}+4^{2}+6^{2}+9^{2})=4x^{2}-40x+134$.",
     "Vertex at $x=-\\frac{b}{2a}=\\frac{40}{8}=5$ (the mean of the data).",
     "$S(5)=4(25)-40(5)+134=100-200+134=34$.",
     "Minimum total $=\\boxed{34}$ at $x=5$."
    ]
   },
   {
    "name": "Variance decomposition",
    "steps": [
     "For any data $a_i$ with mean $\\bar a$, $\\sum (x-a_i)^2 = n(x-\\bar a)^2 + \\sum (a_i-\\bar a)^2$.",
     "The first term is minimised (to $0$) at $x=\\bar a=5$.",
     "The residual is $\\sum(a_i-5)^2=16+1+1+16=34$.",
     "Hence the minimum total is $\\boxed{34}$ at $x=5$."
    ]
   }
  ],
  "remark": "Insight: the mean is exactly the minimiser of squared deviations — that is what 'least squares' means. The leftover at the optimum equals $n$ times the variance of the data points."
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
  "title": "The Range Inside a Window",
  "difficulty": 4,
  "task": "Determine",
  "tags": [
   "range",
   "domain",
   "vertex inside interval",
   "completing the square"
  ],
  "statement": "Determine the exact range (the set of all output values) of $f(x)=x^{2}-4x+1$ as $x$ varies over the closed interval $[0,3]$.",
  "answer": "The range is $[-3,\\,1]$.",
  "trap": "Computing only the endpoint values $f(0)=1$ and $f(3)=-2$ and declaring the range to be $[-2,1]$. The vertex $x=2$ lies INSIDE $[0,3]$, so the true minimum is $f(2)=-3$, lower than either endpoint; the range extends down to $-3$, not $-2$.",
  "solutions": [
   {
    "name": "Vertex inside, plus extreme endpoint",
    "steps": [
     "$a=1>0$; vertex at $x=2$, which lies in $[0,3]$, so the minimum is $f(2)=4-8+1=-3$.",
     "The maximum on a closed interval is an endpoint value: $f(0)=1$, $f(3)=9-12+1=-2$, so the max is $1$.",
     "Since $f$ is continuous, it attains every value between $-3$ and $1$.",
     "Range $=\\boxed{[-3,1]}$."
    ]
   },
   {
    "name": "Completing the square + monotone branches",
    "steps": [
     "$f(x)=(x-2)^{2}-3$.",
     "On $[0,2]$, $(x-2)^2$ decreases from $4$ to $0$, so $f$ decreases from $1$ to $-3$.",
     "On $[2,3]$, $(x-2)^2$ increases from $0$ to $1$, so $f$ increases from $-3$ to $-2$.",
     "Combining the two branches, the outputs sweep $[-3,1]$, so the range is $\\boxed{[-3,1]}$."
    ]
   }
  ],
  "remark": "Insight: 'range on a domain' is min-and-max together. When the vertex is interior, it is one of the two extremes; the other is the farther endpoint. Endpoints alone never suffice unless the vertex is outside the window."
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
  "title": "The Vertex That Couldn't Be Reached",
  "difficulty": 4,
  "task": "Determine",
  "tags": [
   "substitution",
   "quadratic in disguise",
   "restricted range",
   "vertex outside window",
   "completing the square"
  ],
  "statement": "Let $P(x)=\\bigl(x^{2}+4x+5\\bigr)^{2}-8\\bigl(x^{2}+4x+5\\bigr)$ for $x$ in the closed interval $[0,2]$. Determine the least and the greatest values of $P$ on this interval.",
  "answer": "Least value $=-15$ (at $x=0$); greatest value $=153$ (at $x=2$).",
  "trap": "Substituting $u=x^{2}+4x+5$, reading off the downward-looking algebra $u^{2}-8u$ as an upward parabola in $u$ with vertex at $u=4$, and announcing the minimum to be $4^{2}-8\\cdot4=-16$. But $u=x^{2}+4x+5=(x+2)^{2}+1$, and on $x\\in[0,2]$ the value $u$ ranges only over $[5,17]$ — it never reaches $4$. The vertex of the $u$-parabola lies OUTSIDE the reachable window, so $-16$ is unattainable; on $[5,17]$ the function $u^{2}-8u$ is increasing, giving the true minimum at $u=5$, i.e. $P=-15$, not $-16$.",
  "solutions": [
   {
    "name": "Two-stage substitution with a reachability check",
    "steps": [
     "Put $u=x^{2}+4x+5=(x+2)^{2}+1$. As $x$ runs over $[0,2]$, $(x+2)$ runs over $[2,4]$, so $(x+2)^{2}\\in[4,16]$ and $u\\in[5,17]$; moreover $u$ is increasing in $x$ on $[0,2]$.",
     "Now study $Q(u)=u^{2}-8u=(u-4)^{2}-16$, an upward parabola with vertex at $u=4$. Since $4<5$, the vertex is to the LEFT of the window $[5,17]$, so $Q$ is increasing throughout $[5,17]$.",
     "Therefore $Q$ is least at $u=5$ and greatest at $u=17$: $Q(5)=25-40=-15$ and $Q(17)=289-136=153$.",
     "Translating back via the increasing map $x\\mapsto u$: minimum at $x=0$ ($u=5$) and maximum at $x=2$ ($u=17$). Hence $\\boxed{\\min=-15,\\ \\max=153}$."
    ]
   },
   {
    "name": "Calculus on the quartic",
    "steps": [
     "Expand: $P(x)=x^{4}+8x^{3}+18x^{2}+8x-15$, so $P'(x)=4x^{3}+24x^{2}+36x+8=4(x+2)\\bigl(x^{2}+4x+1\\bigr)$.",
     "The critical points solve $x=-2$ or $x^{2}+4x+1=0\\Rightarrow x=-2\\pm\\sqrt{3}$. All three roots ($-2,\\,-2-\\sqrt3\\approx-3.73,\\,-2+\\sqrt3\\approx-0.27$) lie OUTSIDE $[0,2]$.",
     "With no interior critical point, $P$ is monotonic on $[0,2]$; since $P'(1)=4(3)(6)=72>0$, $P$ is increasing there.",
     "So the extremes are the endpoints: $P(0)=5^{2}-8\\cdot5=-15$ and $P(2)=17^{2}-8\\cdot17=153$. Thus $\\boxed{\\min=-15,\\ \\max=153}$. (Note $x^{2}+4x+1=u-4$, so the phantom critical level $u=4$ corresponds exactly to the unreachable roots $-2\\pm\\sqrt3$.)"
    ]
   },
   {
    "name": "Endpoint comparison via monotonicity of each layer",
    "steps": [
     "Both layers are monotone on the relevant set: $u=(x+2)^{2}+1$ is increasing on $[0,2]$ (since $x+2>0$), and $Q(u)=u^{2}-8u$ is increasing for $u\\ge4$, hence on all of $[5,17]$.",
     "A composition of two increasing functions is increasing, so $P=Q(u(x))$ is increasing on $[0,2]$.",
     "An increasing continuous function on $[0,2]$ attains its minimum at $x=0$ and its maximum at $x=2$.",
     "Compute the endpoints: $P(0)=(5)^{2}-8(5)=-15$ and $P(2)=(17)^{2}-8(17)=153$, giving $\\boxed{\\min=-15,\\ \\max=153}$."
    ]
   }
  ],
  "remark": "Insight: substituting $u=g(x)$ turns the expression into a quadratic in $u$, but the optimisation lives on the IMAGE of $g$, not on all of $\\mathbb{R}$. Always compute the reachable range of $u$ first. Here $u=(x+2)^2+1\\ge5$ on $[0,2]$, so the $u$-parabola's vertex at $u=4$ is a phantom: it is never visited, and the genuine extremes sit at the ends of the window. The calculus view confirms this — the factor $x^2+4x+1$ is precisely $u-4$, and its roots fall outside $[0,2]$, so there is no interior turning point at all."
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
  "statement": "Determine the number of \\emph{distinct} real solutions of \\[x^4 - 5x^3 + 8x^2 - 5x + 1 = 0.\\]",
  "answer": "$3$ distinct real solutions: $x=1$ (a double root) and $x=\\dfrac{3\\pm\\sqrt5}{2}$.",
  "trap": "After dividing by $x^2$ and substituting $t=x+\\tfrac1x$ you get $t^2-5t+6=0$, i.e. $t=2,3$ — two values of $t$. The seductive error is to declare '$2$ values of $t$, each giving $2$ values of $x$, so $4$ real roots.' But $t=2$ forces $x+\\tfrac1x=2\\Rightarrow(x-1)^2=0$, a single value $x=1$; only $t=3$ (where $|t|>2$) splits into two distinct reals. The count of \\emph{distinct} solutions is $3$, not $4$ — the missing root hides in the multiplicity at the boundary $|t|=2$.",
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
     "For a given value $t$, the number of \\emph{distinct} real $x$ solving $x^2-tx+1=0$ is governed by $\\Delta=t^2-4$.",
     "$t=2:\\ \\Delta=0$ (one distinct $x$, a repeated root). $t=3:\\ \\Delta=5>0$ (two distinct $x$).",
     "Sum of distinct contributions $1+2=\\boxed{3}$ real solutions."
    ]
   }
  ],
  "remark": "Insight: a palindromic (self-reciprocal) quartic always halves to a quadratic in $t=x+1/x$, but each value of $t$ is a 'gate' — it admits $0$, $1$, or $2$ values of $x$ according to whether $|t|<2$, $|t|=2$, or $|t|>2$. The boundary $|t|=2$ is precisely where a naive 'two $t$'s times two $x$'s' count overshoots, because the gate collapses to a single repeated root. Asking for \\emph{distinct} solutions makes this collapse the whole point: the honest tally is $3$, even though the polynomial has degree $4$."
 },
 {
  "theme": "disguise",
  "themeLabel": "Reducible to a Quadratic",
  "title": "Two Powers, One Quadratic",
  "difficulty": 3,
  "task": "Find all",
  "tags": [
   "exponential",
   "substitution",
   "powers-of-two",
   "positivity"
  ],
  "statement": "Find all real $x$ satisfying \\[4^{\\,x} - 3\\cdot 2^{\\,x+1} + 8 = 0.\\]",
  "answer": "$x=1$ and $x=2$.",
  "trap": "Writing $4^x=(2^x)^2$ is correct, but a common slip is to mishandle $2^{x+1}=2\\cdot2^x$ and drop the factor $2$, turning the middle coefficient into $3$ instead of $6$. That gives $t^2-3t+8=0$, whose discriminant $9-32=-23<0$ has no real root, so the careless solver wrongly declares \"no solution.\" With the correct $t^2-6t+8=0$ you get $t=2,4$; both are positive, so both survive and yield $x=1,2$. Forgetting $t=2^x>0$ would matter if a root were negative — here it is the coefficient error that bites.",
  "solutions": [
   {
    "name": "Substitution $t=2^x$",
    "steps": [
     "Rewrite $2^{x+1}=2\\cdot 2^x$ and $4^x=(2^x)^2$, so the equation becomes $(2^x)^2-6\\cdot 2^x+8=0.$",
     "Let $t=2^x>0$: $\\;t^2-6t+8=0\\Rightarrow(t-2)(t-4)=0.$",
     "Both $t=2$ and $t=4$ are positive, hence admissible.",
     "$2^x=2\\Rightarrow x=1$; $\\ 2^x=4\\Rightarrow x=2.$",
     "Solutions: $\\boxed{x=1,\\ 2}.$"
    ]
   },
   {
    "name": "Logarithmic back-substitution",
    "steps": [
     "Reduce to $t^2-6t+8=0$ with $t=2^x$, giving $t=2,4$.",
     "Take $\\log_2$: $x=\\log_2 t$.",
     "$\\log_2 2=1,\\ \\log_2 4=2.$",
     "Thus $\\boxed{x=1,\\ 2}.$"
    ]
   }
  ],
  "remark": "Insight: every equation $a\\cdot 4^x+b\\cdot 2^x+c=0$ is a quadratic in disguise via $t=2^x$, but the disguise carries a hidden constraint $t>0$ that a blind quadratic solver ignores. Here both roots clear the bar; the lesson is to always test it."
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
  "title": "One Power Forbidden",
  "difficulty": 4,
  "task": "Find all",
  "tags": [
   "exponential",
   "substitution",
   "positivity",
   "trap"
  ],
  "statement": "Find all real solutions of \\[4^{\\,x} - 3\\cdot 2^{\\,x} - 4 = 0.\\]",
  "answer": "$x=2$ (the unique real solution).",
  "trap": "With $t=2^x$ you get $t^2-3t-4=0\\Rightarrow(t-4)(t+1)=0$, so $t=4$ or $t=-1$. The trap is solving the spurious branch $2^x=-1$ — there is no such real $x$ because $2^x>0$ for all real $x$. Reporting two solutions (or worse, writing $x=\\log_2(-1)$) is the classic sign-of-$t$ error. Only the positive root $t=4$ is admissible.",
  "solutions": [
   {
    "name": "Substitution $t=2^x$ with positivity filter",
    "steps": [
     "Write $4^x=(2^x)^2$ and set $t=2^x$, with the hard constraint $t>0.$",
     "Equation: $t^2-3t-4=0\\Rightarrow(t-4)(t+1)=0\\Rightarrow t=4$ or $t=-1.$",
     "Reject $t=-1$ since $2^x>0$ for all real $x$; this branch contributes no real solution.",
     "$2^x=4\\Rightarrow x=2.$",
     "Verify: $4^2-3\\cdot2^2-4=16-12-4=0.$ Unique solution $\\boxed{x=2}.$"
    ]
   },
   {
    "name": "Monotonicity / sign argument",
    "steps": [
     "Let $g(x)=4^x-3\\cdot2^x-4$. With $t=2^x$, $g=t^2-3t-4=(t-4)(t+1).$",
     "On the admissible domain $t>0$, the factor $(t+1)>0$ always, so $g$ has the same sign as $(t-4)$.",
     "Thus $g<0$ for $0<t<4$, $g=0$ at $t=4$, and $g>0$ for $t>4$ — a single sign change, hence exactly one real root.",
     "Since $t=2^x$ is strictly increasing, $t=4$ corresponds to the unique $x$ with $2^x=4$, namely $\\boxed{x=2}.$"
    ]
   }
  ],
  "remark": "Insight: a quadratic in $t=a^x$ (with $a>0$) can have a negative root that is perfectly valid for the quadratic but physically forbidden for the exponential. The number of real $x$ equals the number of POSITIVE roots in $t$, not the total number of roots."
 },
 {
  "theme": "disguise",
  "themeLabel": "Reducible to a Quadratic",
  "title": "Square-Root Substitution",
  "difficulty": 3,
  "task": "Find all",
  "tags": [
   "surd",
   "substitution",
   "domain",
   "squaring"
  ],
  "statement": "Find all real solutions of \\[x - 5\\sqrt{x} + 6 = 0.\\]",
  "answer": "$x=4$ and $x=9$.",
  "trap": "Letting $t=\\sqrt{x}$ gives $t^2-5t+6=0\\Rightarrow t=2,3$, both positive, so both valid — fine. The trap is the rival move of isolating $5\\sqrt{x}=x+6$ and squaring to $25x=x^2+12x+36\\Rightarrow x^2-13x+36=0$; this also gives $x=4,9$ but squaring CAN introduce extraneous roots, so one must verify — and one must remember $x\\ge0$ for $\\sqrt{x}$ to exist.",
  "solutions": [
   {
    "name": "Substitution $t=\\sqrt{x}$",
    "steps": [
     "Domain: $x\\ge0$. Let $t=\\sqrt{x}\\ge0$, so $x=t^2.$",
     "Equation: $t^2-5t+6=0\\Rightarrow(t-2)(t-3)=0\\Rightarrow t=2$ or $t=3.$",
     "Both are $\\ge0$, hence admissible.",
     "$\\sqrt{x}=2\\Rightarrow x=4$; $\\sqrt{x}=3\\Rightarrow x=9.$",
     "Solutions: $\\boxed{x=4,\\ 9}.$"
    ]
   },
   {
    "name": "Isolate-and-square with verification",
    "steps": [
     "Rewrite as $5\\sqrt{x}=x+6$; require $x+6\\ge0$ (automatic for $x\\ge0$).",
     "Square: $25x=x^2+12x+36\\Rightarrow x^2-13x+36=0\\Rightarrow(x-4)(x-9)=0.$",
     "Candidates $x=4,9.$ Check in original: $4-5\\cdot2+6=0$ ✓ and $9-5\\cdot3+6=0$ ✓.",
     "Both verified, no extraneous root: $\\boxed{x=4,\\ 9}.$"
    ]
   }
  ],
  "remark": "Insight: $t=\\sqrt{x}$ is the cleanest reduction because its built-in constraint $t\\ge0$ matches the domain automatically; the squaring route reaches the same place but obliges a verification step that the substitution sidesteps."
 },
 {
  "theme": "disguise",
  "themeLabel": "Reducible to a Quadratic",
  "title": "The Self-Squaring Surd",
  "difficulty": 5,
  "task": "Find all",
  "tags": [
   "surd",
   "completing-the-square",
   "extraneous-roots",
   "substitution",
   "trap"
  ],
  "statement": "Find all real solutions of \\[\\bigl(x^2-6x+13\\bigr)+\\sqrt{\\,x^2-6x+13\\,}=12.\\]",
  "answer": "$x=3-\\sqrt5$ and $x=3+\\sqrt5$.",
  "trap": "Set $t=\\sqrt{x^2-6x+13}$; then $t^2+t-12=0\\Rightarrow(t-3)(t+4)=0$, so $t=3$ or $t=-4$. Accepting $t=-4$ is the trap — a square root is nonnegative, so $t=-4$ is impossible. The deeper subtlety: $x^2-6x+13=(x-3)^2+4\\ge4$, so even $t\\ge2$ always; the radicand is never small. Mishandling either constraint (or back-substituting $t=-4$ to get $x^2-6x-3=0$) injects false roots.",
  "solutions": [
   {
    "name": "Substitution $t=\\sqrt{x^2-6x+13}$",
    "steps": [
     "Let $t=\\sqrt{x^2-6x+13}\\ge0$; then $x^2-6x+13=t^2$, so the equation is $t^2+t-12=0.$",
     "Factor: $(t-3)(t+4)=0\\Rightarrow t=3$ or $t=-4.$",
     "Reject $t=-4$ (a square root is $\\ge0$); keep $t=3.$",
     "$t=3$: $x^2-6x+13=9\\Rightarrow x^2-6x+4=0\\Rightarrow x=3\\pm\\sqrt5.$",
     "Both lie in the domain (all reals are allowed since the radicand $(x-3)^2+4>0$ always). Solutions: $\\boxed{x=3\\pm\\sqrt5}.$"
    ]
   },
   {
    "name": "Complete the square inside the radical",
    "steps": [
     "Write $u=(x-3)^2$, so $x^2-6x+13=u+4$ with $u\\ge0.$",
     "Let $s=\\sqrt{u+4}\\ge2$; equation becomes $s^2+s-12=0\\Rightarrow(s-3)(s+4)=0.$",
     "Domain forces $s\\ge2$, so only $s=3$ qualifies ($s=-4$ rejected, and $s$ could not be below $2$ anyway).",
     "$s=3\\Rightarrow u+4=9\\Rightarrow(x-3)^2=5\\Rightarrow x=3\\pm\\sqrt5.$",
     "Answer: $\\boxed{x=3\\pm\\sqrt5}.$"
    ]
   },
   {
    "name": "Squaring with extraneous-root check",
    "steps": [
     "Let $P=x^2-6x+13$; the equation is $\\sqrt{P}=12-P$, requiring $12-P\\ge0\\Rightarrow P\\le12.$",
     "Square: $P=144-24P+P^2\\Rightarrow P^2-25P+144=0\\Rightarrow(P-9)(P-16)=0\\Rightarrow P=9,16.$",
     "$P=16$ violates $P\\le12$ (extraneous, since $\\sqrt{16}=4\\ne12-16=-4$); keep $P=9.$",
     "$P=9$: $x^2-6x+4=0\\Rightarrow x=3\\pm\\sqrt5$, and each checks: $9+\\sqrt9=12$ ✓.",
     "Solutions: $\\boxed{x=3\\pm\\sqrt5}.$"
    ]
   }
  ],
  "remark": "Insight: when an expression and its own square root both appear, the substitution $t=\\sqrt{\\text{expr}}$ converts it to a quadratic instantly — but the radical pins $t\\ge0$, and completing the square inside often reveals an even tighter floor (here $t\\ge2$) that kills phantom branches."
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
  "title": "Twin Roots on a Tightrope",
  "difficulty": 4,
  "task": "Find the number of integer values of k",
  "tags": [
   "vieta",
   "interval-location",
   "integer-count",
   "perfect-square-discriminant"
  ],
  "statement": "For how many integer values of $k$ do both roots of \\[x^2 - 2(k-1)x + (k^2-2k-8) = 0\\] lie in the closed interval $[-3,\\,8]$?",
  "answer": "$6$ integer values, namely $k\\in\\{1,2,3,4,5,6\\}$.",
  "trap": "Launching straight into the four-condition interval-location system ($D\\ge0$, $f(-3)\\ge0$, $f(8)\\ge0$, vertex in range) without looking first. It does reach the right answer, but it buries the gift: the discriminant collapses to the constant $36$, so the roots are exactly $k-4$ and $k+2$. Skipping that observation turns a one-line problem into an error-prone slog where a single sign slip silently corrupts the count.",
  "solutions": [
   {
    "name": "Spot the constant discriminant",
    "steps": [
     "Compute $D=4(k-1)^2-4(k^2-2k-8)=4\\bigl((k^2-2k+1)-(k^2-2k-8)\\bigr)=4\\cdot 9=36$.",
     "Since $\\sqrt{D}=6$ is constant, the roots are $\\dfrac{2(k-1)\\pm6}{2}=(k-1)\\pm3$, i.e. $k+2$ and $k-4$.",
     "Both must lie in $[-3,8]$: $-3\\le k-4\\le 8\\Rightarrow 1\\le k\\le 12$, and $-3\\le k+2\\le 8\\Rightarrow -5\\le k\\le 6$.",
     "Intersecting gives $1\\le k\\le 6$, so the integers are $1,2,3,4,5,6$: $\\boxed{6}$ values."
    ]
   },
   {
    "name": "Factor the quadratic outright",
    "steps": [
     "The roots differ by $6$ and sum to $2(k-1)$, so the quadratic factors as $\\bigl(x-(k-4)\\bigr)\\bigl(x-(k+2)\\bigr)$.",
     "Verify: sum $=(k-4)+(k+2)=2k-2=2(k-1)$ and product $=(k-4)(k+2)=k^2-2k-8$. Both match the coefficients.",
     "Require $k-4\\in[-3,8]$ and $k+2\\in[-3,8]$ simultaneously; the binding bounds are $k\\ge1$ (from $k-4\\ge-3$) and $k\\le6$ (from $k+2\\le8$).",
     "Hence $k\\in\\{1,2,3,4,5,6\\}$, a total of $\\boxed{6}$ integers."
    ]
   },
   {
    "name": "Endpoint sign test (general machinery, as a cross-check)",
    "steps": [
     "With leading coefficient $a=1>0$, both roots lie in $[-3,8]$ iff $f(-3)\\ge0$, $f(8)\\ge0$, the vertex $-\\tfrac{b}{2a}\\in[-3,8]$, and $D\\ge0$.",
     "$f(-3)=9+6(k-1)+k^2-2k-8=k^2+4k-5=(k+5)(k-1)\\ge0\\Rightarrow k\\le-5$ or $k\\ge1$.",
     "$f(8)=64-16(k-1)+k^2-2k-8=k^2-18k+72=(k-6)(k-12)\\ge0\\Rightarrow k\\le6$ or $k\\ge12$.",
     "Vertex $=k-1\\in[-3,8]\\Rightarrow -2\\le k\\le9$, and $D=36>0$ always; the common region is $1\\le k\\le6$, confirming $\\boxed{6}$ integers."
    ]
   }
  ],
  "remark": "Insight: a discriminant that is a perfect-square constant is a setter's wink. The roots become linear functions of $k$, and the whole interval-location apparatus collapses into two simultaneous inequalities. Always compute $D$ first; it may hand you the factorisation for free and save you from a sign-error minefield."
 },
 {
  "theme": "parameter",
  "themeLabel": "Parameters",
  "title": "One Root Doubles the Other",
  "difficulty": 4,
  "task": "Find all",
  "tags": [
   "ratio-of-roots",
   "vieta",
   "symmetric-functions"
  ],
  "statement": "Find every real value of $k$ for which one root of \\[x^2 - kx + (k^2 - 7) = 0\\] is exactly twice the other, and give the resulting roots.",
  "answer": "$k = 3$ (roots $1,2$) and $k = -3$ (roots $-2,-1$).",
  "trap": "Writing the roots as $\\alpha$ and $2\\alpha$, solving $3\\alpha=k$ and $2\\alpha^2=k^2-7$, then stopping at $k=\\pm3$ without confirming that the resulting quadratics actually have real roots in the stated ratio. The condition '$\\beta=2\\alpha$ for real $\\alpha$' silently demands product $=2\\alpha^2\\ge 0$ and discriminant $\\ge 0$; a solver who treats $\\dfrac{(\\text{sum})^2}{\\text{product}}=\\dfrac92$ as the whole story can, on a rescaled problem, accept a $k$ giving negative product (no real ratio-$2{:}1$ split exists there). Here both $k=\\pm3$ survive the check (product $=2>0$, discriminant $=1>0$), so the honest finish keeps both, but only after the guard is verified.",
  "solutions": [
   {
    "name": "Ratio invariant $\\dfrac{(\\alpha+\\beta)^2}{\\alpha\\beta}$",
    "steps": [
     "If the roots are in ratio $2:1$, write them $t,2t$; then $\\dfrac{(t+2t)^2}{t\\cdot 2t}=\\dfrac{9t^2}{2t^2}=\\dfrac92$, independent of $t$.",
     "With sum $=k$ and product $=k^2-7$, this means $\\dfrac{k^2}{k^2-7}=\\dfrac92$.",
     "Solve: $2k^2=9(k^2-7)\\Rightarrow 7k^2=63\\Rightarrow k^2=9\\Rightarrow k=\\pm3$.",
     "Guard for real roots: at $k=3$, $x^2-3x+2=(x-1)(x-2)$; at $k=-3$, $x^2+3x+2=(x+1)(x+2)$. Both real with ratio $2:1$. Hence $\\boxed{k=\\pm3}$, roots $\\{1,2\\}$ and $\\{-2,-1\\}$."
    ]
   },
   {
    "name": "Direct substitution of $\\alpha,2\\alpha$",
    "steps": [
     "Vieta: $\\alpha+2\\alpha=k\\Rightarrow\\alpha=\\tfrac{k}{3}$, and $\\alpha\\cdot 2\\alpha=2\\alpha^2=k^2-7$.",
     "Substitute: $2\\left(\\tfrac{k}{3}\\right)^2=k^2-7\\Rightarrow \\tfrac{2k^2}{9}=k^2-7$.",
     "Multiply by $9$: $2k^2=9k^2-63\\Rightarrow 7k^2=63\\Rightarrow k=\\pm3$.",
     "At $k=3$, $\\alpha=1$ giving roots $1,2$; at $k=-3$, $\\alpha=-1$ giving roots $-2,-1$. Both have $\\alpha$ real, so the substitution is legitimate. Thus $\\boxed{k=\\pm3}$."
    ]
   },
   {
    "name": "Elimination with a reality guard",
    "steps": [
     "The condition $\\beta=2\\alpha$ together with $\\alpha+\\beta=k$ and $\\alpha\\beta=k^2-7$ gives $3\\alpha=k$ and $2\\alpha^2=k^2-7$.",
     "Eliminate $\\alpha$: from the first, $\\alpha^2=\\tfrac{k^2}{9}$; substitute into the second to get $\\tfrac{2k^2}{9}=k^2-7$, i.e. $7k^2=63$, so $k^2=9$ and $k=\\pm3$.",
     "Reality guard: for a real ratio-$2{:}1$ split we need product $=2\\alpha^2\\ge 0$ and discriminant $\\ge 0$. Both candidates give product $k^2-7=2>0$ and discriminant $k^2-4(k^2-7)=28-3k^2=1>0$, so the roots are real and distinct.",
     "Final: $\\boxed{k=\\pm3}$, with root sets $\\{1,2\\}$ and $\\{-2,-1\\}$."
    ]
   }
  ],
  "remark": "A fixed ratio of roots is encoded entirely in the scale-invariant quantity $\\dfrac{(\\text{sum})^2}{\\text{product}}$: for ratio $m:1$ it equals $\\dfrac{(m+1)^2}{m}$, here $\\dfrac92$ at $m=2$. But that one equation is necessary, not sufficient — it does not see reality. The hidden requirement product $=2\\alpha^2\\ge 0$ (with discriminant $\\ge 0$) is what separates a genuine real ratio-$2{:}1$ pair from an algebraic phantom. The evenness of $k^2-7$ in $k$ is what produces the elegant mirror pair $k=\\pm3$."
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
  "title": "The Shared Secret",
  "difficulty": 5,
  "task": "Find all",
  "tags": [
   "common-root",
   "elimination",
   "real-vs-complex",
   "vieta"
  ],
  "statement": "Consider the two equations \\[x^2 - (2k+1)x + (k+2) = 0 \\qquad\\text{and}\\qquad x^2 + (k+2)x - (2k+1) = 0.\\] Find every real $k$ for which they share a common *real* root, and identify that root.",
  "answer": "$k = 2$, with common real root $x = 1$. (At $k=-1$ the two equations coincide but their shared roots are non-real.)",
  "trap": "Subtracting the equations to get $-3(k+1)(x-1)=0$ and concluding 'either $k=-1$ or $x=1$', then reporting both $k=-1$ and $k=2$ as answers. The case $k=-1$ makes the two equations *identical* (both become $x^2+x+1=0$), whose roots are the complex pair $\\tfrac{-1\\pm i\\sqrt3}{2}$ — no real common root. Only $x=1$, i.e. $k=2$, survives the reality requirement.",
  "solutions": [
   {
    "name": "Eliminate $x^2$ by subtraction",
    "steps": [
     "Subtract the second equation from the first: the $x^2$ terms cancel, leaving $-(2k+1)x-(k+2)x+(k+2)+(2k+1)=0$, i.e. $-3(k+1)(x-1)=0$.",
     "Hence either $x=1$ or $k=-1$.",
     "If $x=1$: substitute into the first equation, $1-(2k+1)+(k+2)=2-k=0\\Rightarrow k=2$. Check the second: $1+(k+2)-(2k+1)=2-k=0$, also $k=2$. Consistent — a genuine real common root.",
     "If $k=-1$: both equations become $x^2+x+1=0$ with discriminant $-3<0$ — no real root. So the only real common root is at $\\boxed{k=2}$, with root $x=1$."
    ]
   },
   {
    "name": "Cross-multiplication (condition for a common root)",
    "steps": [
     "For $a_1x^2+b_1x+c_1$ and $a_2x^2+b_2x+c_2$, a common root satisfies $(c_1a_2-c_2a_1)^2=(b_1c_2-b_2c_1)(a_1b_2-a_2b_1)$.",
     "Here $a_1=a_2=1$, $b_1=-(2k+1)$, $c_1=k+2$, $b_2=k+2$, $c_2=-(2k+1)$. Then $c_1a_2-c_2a_1=(k+2)+(2k+1)=3k+3$.",
     "$b_1c_2-b_2c_1=(2k+1)^2-(k+2)^2=3k^2-3=3(k-1)(k+1)$ and $a_1b_2-a_2b_1=(k+2)+(2k+1)=3(k+1)$.",
     "The condition $(3(k+1))^2=3(k-1)(k+1)\\cdot3(k+1)$ gives $9(k+1)^2=9(k+1)^2(k-1)$, so $(k+1)^2(k-2)=0$: $k=-1$ (identical, complex roots, rejected) or $\\boxed{k=2}$ (real root $1$)."
    ]
   },
   {
    "name": "Test the only candidate root",
    "steps": [
     "Any common root $r$ of two monic quadratics with $a_1=a_2$ must satisfy their difference, which is linear; here that difference is $-3(k+1)(x-1)$.",
     "For $k\\neq-1$ the only possible common root is $x=1$; impose that $1$ is a root of the first equation: $1-(2k+1)+(k+2)=0\\Rightarrow k=2$.",
     "Verify both at $k=2$: first $x^2-5x+4=(x-1)(x-4)$, second $x^2+4x-5=(x-1)(x+5)$; the shared root is indeed $x=1$.",
     "The remaining case $k=-1$ collapses the pair to $x^2+x+1=0$ (no real roots), so the unique answer is $\\boxed{k=2}$."
    ]
   }
  ],
  "remark": "Insight: the two equations are deliberately built by swapping (and negating) the linear and constant coefficients, which forces their difference to factor through $x=1$. The lesson is that 'common root' problems split into a *generic* branch (the linear leftover) and a *degenerate* branch (equations proportional) — and the latter must always be re-tested for the reality the problem actually demands."
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
  "title": "The Solvability Window",
  "difficulty": 4,
  "task": "Find the set of k",
  "tags": [
   "solvability",
   "discriminant",
   "degenerate-case",
   "real-roots-exist"
  ],
  "statement": "Determine the set of all real $k$ for which the equation \\[k x^2 + (k-1)x + (k-1) = 0\\] has at least one real solution $x$.",
  "answer": "$k \\in \\left[-\\tfrac13,\\,1\\right]$.",
  "trap": "Reducing solvability to '$D\\ge0$' and silently treating the equation as quadratic — i.e. dividing by the assumption $k\\neq0$. One must separately handle $k=0$, where the equation becomes the linear $-x-1=0$ with the real solution $x=-1$. (Here $k=0$ happens to already lie inside the discriminant interval, but the case still demands explicit justification — and in a nearby variant it would lie outside.)",
  "solutions": [
   {
    "name": "Discriminant plus the linear case",
    "steps": [
     "Case $k=0$: the equation is $-(x)-1=0$, i.e. $-x-1=0$, with real root $x=-1$. So $k=0$ is solvable.",
     "Case $k\\neq0$ (genuine quadratic): real solutions exist iff $D=(k-1)^2-4k(k-1)\\ge0$.",
     "Factor: $D=(k-1)\\bigl[(k-1)-4k\\bigr]=(k-1)(-3k-1)=-(k-1)(3k+1)$, so $D\\ge0\\iff(k-1)(3k+1)\\le0\\iff -\\tfrac13\\le k\\le1$.",
     "Union with the solvable point $k=0$ (already inside) gives $\\boxed{k\\in[-\\tfrac13,1]}$."
    ]
   },
   {
    "name": "Treat as quadratic in $x$ and read the closure",
    "steps": [
     "Write $f(x)=kx^2+(k-1)x+(k-1)$. For $k\\neq0$ a real $x$ exists exactly when $f$ touches or crosses the axis, i.e. $D\\ge0$.",
     "$D=-(k-1)(3k+1)$, a downward parabola in $k$ vanishing at $k=-\\tfrac13$ and $k=1$, hence $\\ge0$ precisely on $[-\\tfrac13,1]$.",
     "The boundary $k=0$ falls inside this interval and is independently solvable as a linear equation, so it adds nothing new.",
     "Solvability set: $\\boxed{[-\\tfrac13,1]}$."
    ]
   },
   {
    "name": "Verification at endpoints and outside",
    "steps": [
     "$k=-\\tfrac13$: $-\\tfrac13x^2-\\tfrac43x-\\tfrac43=0\\Rightarrow x^2+4x+4=(x+2)^2=0$, double root $-2$ — solvable (boundary).",
     "$k=1$: $x^2+0\\cdot x+0=0\\Rightarrow x=0$ (double) — solvable (boundary).",
     "$k=-1$ (outside): $-x^2-2x-2=0\\Rightarrow x^2+2x+2=0$, discriminant $-4<0$ — no real solution, consistent with exclusion.",
     "Hence the solvable set is exactly the closed interval $\\boxed{[-\\tfrac13,1]}$."
    ]
   }
  ],
  "remark": "Insight: 'has a solution' is broader than 'the quadratic has real roots' — it must absorb the degenerate linear case the parameter can trigger. Even when that case lands harmlessly inside the discriminant interval, the disciplined solver names it, because the same template with a shifted constant would place the lone linear solution outside the $D\\ge0$ window."
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
  "title": "The Vanishing Common Root",
  "difficulty": 3,
  "task": "Find all",
  "tags": [
   "rational inequality",
   "sign chart",
   "wavy curve",
   "cancellation"
  ],
  "statement": "Find all real $x$ satisfying \\[\\frac{x^2-5x+6}{x^2-x-6}<0.\\]",
  "answer": "$x\\in(-2,2)$. (The value $x=3$ is excluded as a hole in the domain, but it lies outside $(-2,2)$ anyway, so the solution set is exactly the open interval $(-2,2)$.)",
  "trap": "Factoring to $\\frac{(x-2)(x-3)}{(x-3)(x+2)}$ and cancelling the $(x-3)$ to get $\\frac{x-2}{x+2}<0$ is fine for solving, but a careless solver then writes the answer as $(-2,2]$ or forgets that $x=3$ must be barred from the domain. The cancellation hides a removable discontinuity: at $x=3$ the original expression is $\\tfrac{0}{0}$, undefined, not $0$.",
  "solutions": [
   {
    "name": "Sign chart on the reduced form",
    "steps": [
     "Factor: numerator $=(x-2)(x-3)$, denominator $=(x-3)(x+2)$, with $x\\neq 3$ and $x\\neq-2$ required.",
     "For $x\\neq3$ the inequality is equivalent to $\\frac{x-2}{x+2}<0$.",
     "This holds when numerator and denominator have opposite signs: $-2<x<2$.",
     "Check $x=3$: it lies outside $(-2,2)$, so no value is gained or lost. Answer $\\boxed{(-2,2)}$."
    ]
   },
   {
    "name": "Full four-factor wavy curve",
    "steps": [
     "Critical points of the unreduced expression: $x=-2,2,3$ (with $3$ a double-type point appearing in both numerator and denominator).",
     "Write $\\frac{(x-2)(x-3)}{(x-3)(x+2)}$ and mark signs on $(-\\infty,-2),(-2,2),(2,3),(3,\\infty)$.",
     "Sign sequence: $+,-,+,+$; the expression is negative only on $(-2,2)$, and $x=3$ is excluded but already outside this interval.",
     "Hence $\\boxed{x\\in(-2,2)}$."
    ]
   }
  ],
  "remark": "Insight: cancelling a common factor is legitimate for the inequality's *sign*, but the cancelled root must still be deleted from the domain — here it happens to be harmless, a deliberate reassurance that won't always hold."
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
  "title": "The Discriminant That Refused",
  "difficulty": 5,
  "task": "Find all",
  "tags": [
   "parameter",
   "positive definite",
   "degenerate case",
   "perfect square discriminant"
  ],
  "statement": "Find all real $a$ for which \\[ax^2-(a+1)x+1>0\\qquad\\text{for every real }x.\\]",
  "answer": "There is no such $a$: the set is empty, $\\varnothing$.",
  "trap": "Jumping straight to ``$a>0$ and $D<0$.'' One computes $D=(a+1)^2-4a=(a-1)^2$, then wrongly reads $(a-1)^2<0$ as having \\emph{some} solution, or quietly drops the case $a=0$. In truth $(a-1)^2\\ge0$ always — it is \\emph{never} strictly negative — and $a=0$ degenerates to a line. Both routes fail, so no $a$ works.",
  "solutions": [
   {
    "name": "Discriminant + degenerate case",
    "steps": [
     "If $a=0$ the expression is the line $-x+1$, which is positive only for $x<1$ (e.g. it equals $-1$ at $x=2$), not for all $x$. So $a=0$ fails.",
     "If $a\\neq0$, positivity for all $x$ needs the parabola to open upward and miss the axis: $a>0$ and $D<0$.",
     "Compute $D=(a+1)^2-4a\\cdot1=a^2-2a+1=(a-1)^2$.",
     "Since $(a-1)^2\\ge0$ for every $a$, the condition $D<0$ is impossible. Combined with the failed $a=0$ case, $\\boxed{\\text{no such }a}$ exists."
    ]
   },
   {
    "name": "Factor and inspect the root",
    "steps": [
     "Notice $ax^2-(a+1)x+1=(ax-1)(x-1)$ for $a\\neq0$ — it factors with real roots $x=\\tfrac1a$ and $x=1$.",
     "A quadratic that factors over the reals has real roots, hence touches or crosses zero, so it cannot be strictly positive for all $x$ (it is $\\le0$ between or at its roots).",
     "Even when the two roots coincide ($a=1$, giving $(x-1)^2$) the value $0$ is attained at $x=1$, violating strict positivity.",
     "The case $a=0$ gives a non-constant line, also failing. Therefore $\\boxed{\\varnothing}$."
    ]
   },
   {
    "name": "Minimum-value check",
    "steps": [
     "For $a>0$ the upward parabola attains its minimum at the vertex $x=\\dfrac{a+1}{2a}$.",
     "The minimum value is $1-\\dfrac{(a+1)^2}{4a}=-\\dfrac{(a-1)^2}{4a}$, which is $\\le0$ for every $a>0$ (it equals $0$ only at $a=1$).",
     "So even at best the expression dips to $0$, never staying strictly positive; and for $a<0$ the parabola opens down (unbounded below), while $a=0$ gives a line.",
     "No value of $a$ keeps the expression $>0$ for all $x$, confirming $\\boxed{\\varnothing}$."
    ]
   }
  ],
  "remark": "Insight: a discriminant that is a \\emph{perfect square} in the parameter can never be negative, so ``positive for all $x$'' is structurally impossible — and the factorisation $(ax-1)(x-1)$ makes the reason vivid: the quadratic always carries the real root $x=1$, so it must hit zero. The vertex computation even quantifies the failure: the best you can do is $a=1$, where the minimum is exactly $0$."
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
  "title": "The Biquadratic Window",
  "difficulty": 4,
  "task": "Find all",
  "tags": [
   "biquadratic",
   "substitution",
   "reducible to quadratic",
   "sign chart"
  ],
  "statement": "Find all real $x$ satisfying \\[x^4-5x^2+4<0.\\]",
  "answer": "$x\\in(-2,-1)\\cup(1,2)$.",
  "trap": "Substituting $t=x^2$ to get $1<t<4$ and then writing the answer as $1<x<4$ or $\\sqrt1<x<\\sqrt4$. The substitution result $1<x^2<4$ is a *double* inequality on $x^2$; resolving $x^2>1$ and $x^2<4$ each splits into two intervals on the line, and forgetting the negative branch (or treating $\\sqrt{x^2}$ as just $x$) discards half the solution.",
  "solutions": [
   {
    "name": "Substitution then unfold",
    "steps": [
     "Let $t=x^2\\ge0$. The inequality becomes $t^2-5t+4<0\\Rightarrow(t-1)(t-4)<0\\Rightarrow1<t<4$.",
     "Translate back: $1<x^2<4$ means $x^2>1$ AND $x^2<4$.",
     "$x^2>1\\Rightarrow|x|>1\\Rightarrow x<-1$ or $x>1$; and $x^2<4\\Rightarrow|x|<2\\Rightarrow-2<x<2$.",
     "Intersect: $\\boxed{(-2,-1)\\cup(1,2)}$."
    ]
   },
   {
    "name": "Full factorization",
    "steps": [
     "Factor over the reals: $x^4-5x^2+4=(x^2-1)(x^2-4)=(x-1)(x+1)(x-2)(x+2)$.",
     "Critical points $-2,-1,1,2$; build the sign chart of this product of four linear factors.",
     "Signs on $(-\\infty,-2),(-2,-1),(-1,1),(1,2),(2,\\infty)$ are $+,-,+,-,+$.",
     "The product is negative on $(-2,-1)$ and $(1,2)$, so $\\boxed{(-2,-1)\\cup(1,2)}$."
    ]
   }
  ],
  "remark": "Insight: a biquadratic is a quadratic *in $x^2$*; the cleanest finish factors it into four linear pieces, since the variable lives on the whole real line and each $x^2$-bound contributes a symmetric pair of intervals."
 },
 {
  "theme": "inequalities",
  "themeLabel": "Quadratic Inequalities",
  "title": "Roots and a Half",
  "difficulty": 3,
  "task": "Find all",
  "tags": [
   "basic quadratic",
   "roots",
   "closed interval",
   "sign of a"
  ],
  "statement": "Find all real $x$ satisfying \\[2x^2-7x+3\\le 0.\\]",
  "answer": "$x\\in\\left[\\tfrac12,\\,3\\right]$.",
  "trap": "Reading off the roots $x=\\tfrac12$ and $x=3$ and then writing the solution as the *outside* region $x\\le\\tfrac12$ or $x\\ge3$. Because the leading coefficient $2>0$ the parabola opens upward, so it is $\\le0$ *between* the roots, not outside. Confusing ``$\\le0$'' with ``outside the roots'' is the classic sign-of-$a$ slip.",
  "solutions": [
   {
    "name": "Roots and parabola orientation",
    "steps": [
     "Solve $2x^2-7x+3=0$: discriminant $49-24=25$, so $x=\\dfrac{7\\pm5}{4}$, giving $x=3$ and $x=\\tfrac12$.",
     "The leading coefficient $2>0$, so the parabola opens upward and dips below (or touches) zero only between its roots.",
     "Therefore $2x^2-7x+3\\le0$ on the closed interval $[\\tfrac12,3]$, endpoints included since equality is allowed.",
     "Answer: $\\boxed{[\\tfrac12,3]}$."
    ]
   },
   {
    "name": "Factored sign chart",
    "steps": [
     "Factor: $2x^2-7x+3=(2x-1)(x-3)$.",
     "Critical points $x=\\tfrac12$ and $x=3$; signs of the product on the three intervals $(-\\infty,\\tfrac12),(\\tfrac12,3),(3,\\infty)$ are $+,-,+$.",
     "The product is $\\le0$ exactly on $[\\tfrac12,3]$ (the zeros included).",
     "Hence $\\boxed{[\\tfrac12,3]}$."
    ]
   }
  ],
  "remark": "Insight: an upward parabola is negative *between* its roots — the single most common sign error in quadratic inequalities is flipping ``between'' and ``outside,'' fixed instantly by recalling the sign of the leading coefficient."
 },
 {
  "theme": "inequalities",
  "themeLabel": "Quadratic Inequalities",
  "title": "Counting Inside the Absolute Value",
  "difficulty": 4,
  "task": "Find the number of integers",
  "tags": [
   "absolute value",
   "reducible to quadratic",
   "integer count",
   "substitution"
  ],
  "statement": "Find the number of integers $x$ satisfying \\[x^2-|x|-6<0.\\]",
  "answer": "$5$ integers (namely $x=-2,-1,0,1,2$).",
  "trap": "Treating $|x|$ as if it were $x$ and solving $x^2-x-6<0\\Rightarrow(x-3)(x+2)<0\\Rightarrow-2<x<3$, then counting the integers $-1,0,1,2$ to get $4$. But $x^2=|x|^2$, so the correct substitution is in $|x|$, yielding a \\emph{symmetric} interval $-3<x<3$ — the asymmetric $(-2,3)$ from the naive reading is simply wrong and miscounts.",
  "solutions": [
   {
    "name": "Substitute $u=|x|$",
    "steps": [
     "Since $x^2=|x|^2$, set $u=|x|\\ge0$: the inequality becomes $u^2-u-6<0\\Rightarrow(u-3)(u+2)<0\\Rightarrow-2<u<3$.",
     "As $u=|x|\\ge0$, the binding constraint is $u<3$, i.e. $|x|<3$.",
     "Thus $-3<x<3$; the integers inside are $-2,-1,0,1,2$.",
     "Count: $\\boxed{5}$."
    ]
   },
   {
    "name": "Even-function symmetry",
    "steps": [
     "$f(x)=x^2-|x|-6$ is even, so its solution set is symmetric about $0$; it suffices to find $x\\ge0$ with $x^2-x-6<0$.",
     "For $x\\ge0$: $(x-3)(x+2)<0\\Rightarrow x<3$, so $0\\le x<3$ gives integers $0,1,2$.",
     "By symmetry the negative side contributes $-1,-2$ (and $0$ is shared), so the full integer set is $\\{-2,-1,0,1,2\\}$.",
     "Number of integers $=\\boxed{5}$."
    ]
   }
  ],
  "remark": "Insight: whenever $x$ appears only as $x^2$ and $|x|$, the natural variable is $|x|$ — the inequality is secretly a quadratic in $|x|$, and its solution set is forced to be symmetric, which a blind $x^2-x-6$ reading destroys."
 },
 {
  "theme": "hybrid",
  "themeLabel": "The Grand Hybrids",
  "title": "Both Roots Trapped in the Window",
  "difficulty": 5,
  "task": "Find all",
  "tags": [
   "location-of-roots",
   "discriminant",
   "vieta",
   "parameter"
  ],
  "statement": "Find all real values of $a$ for which both roots of \\[x^{2}-2a\\,x+\\bigl(a^{2}-2a-3\\bigr)=0\\] are real, distinct, and lie strictly inside the interval $(0,16)$.",
  "answer": "$3<a<11$.",
  "trap": "Writing the roots as $a\\pm\\sqrt{2a+3}$ and demanding $0<a-\\sqrt{2a+3}$ and $a+\\sqrt{2a+3}<16$, then squaring carelessly. Squaring $\\sqrt{2a+3}<a$ is only valid when $a>0$; dropping that sign condition (and the requirement $2a+3>0$) lets the naive student admit a spurious band such as $-\\tfrac32<a<-1$, where the roots are actually both negative.",
  "solutions": [
   {
    "name": "Three-instrument location test",
    "steps": [
     "Let $f(x)=x^{2}-2a x+(a^{2}-2a-3)$, an upward parabola with vertex at $x=a$.",
     "Real & distinct: discriminant $\\Delta=4(2a+3)>0\\Rightarrow a>-\\tfrac32$.",
     "Endpoint signs (both roots inside $(0,16)$ needs $f$ positive at the ends): $f(0)=(a-3)(a+1)>0$ and $f(16)=(a-11)(a-23)>0$.",
     "Vertex inside: $0<a<16$.",
     "Combine: $f(0)>0$ with $a>0$ gives $a>3$; $f(16)>0$ gives $a<11$ or $a>23$; intersecting with $0<a<16$ leaves $\\boxed{3<a<11}$.",
     "Check: $a=3$ gives roots $\\{0,6\\}$ and $a=11$ gives $\\{6,16\\}$, so the endpoints are correctly excluded."
    ]
   },
   {
    "name": "Explicit-root inequalities",
    "steps": [
     "Solve: roots are $a-\\sqrt{2a+3}$ and $a+\\sqrt{2a+3}$, requiring $2a+3>0$.",
     "Lower bound: $a-\\sqrt{2a+3}>0\\Rightarrow a>\\sqrt{2a+3}$; since the right side is nonnegative this forces $a>0$, and squaring gives $a^{2}-2a-3>0\\Rightarrow (a-3)(a+1)>0$, hence $a>3$.",
     "Upper bound: $a+\\sqrt{2a+3}<16\\Rightarrow \\sqrt{2a+3}<16-a$, needing $a<16$; squaring gives $2a+3<(16-a)^2$, i.e. $a^{2}-34a+253>0$, that is $(a-11)(a-23)>0\\Rightarrow a<11$ (since $a<16$).",
     "Distinctness $2a+3>0$ is automatic on $3<a<11$. Intersection: $\\boxed{3<a<11}$."
    ]
   }
  ],
  "remark": "Insight: the parabola test ($\\Delta>0$, $f$ positive at both ends, vertex between them) replaces three separate root inequalities with three sign checks, and crucially keeps the sign information that squaring throws away. Note $(16-a)^2-(2a+3)=a^{2}-34a+253=(a-11)(a-23)$ exactly, so both methods land on the same window $(3,11)$."
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
  "title": "An Exponential in Disguise",
  "difficulty": 5,
  "task": "Classify",
  "tags": [
   "equation-in-disguise",
   "discriminant",
   "location-of-roots",
   "substitution"
  ],
  "statement": "For each real $a$, classify the number of real solutions $x$ of \\[4^{\\,x}-a\\cdot 2^{\\,x+1}+\\bigl(a^{2}+a-2\\bigr)=0.\\] Give the complete classification (the values of $a$ producing $0$, $1$, or $2$ real solutions).",
  "answer": "Two solutions iff $1<a<2$; one solution iff $-2<a\\le 1$ or $a=2$; no solution iff $a\\le -2$ or $a>2$.",
  "trap": "After substituting $t=2^{x}$ and finding the discriminant condition $a\\le 2$, one concludes \"real roots in $t$ exist, so $x$ exists.\" But $t=2^{x}$ must be strictly positive: a real root $t\\le 0$ yields no $x$, and the boundary root $t=0$ (occurring at $a=-2$ and $a=1$) must be excluded. For instance $a=-2$ satisfies $a\\le2$ yet gives $t\\in\\{0,-4\\}$ with no positive root, hence no solution.",
  "solutions": [
   {
    "name": "Substitute and count positive $t$",
    "steps": [
     "Put $t=2^{x}>0$. Then $4^{x}=t^{2}$ and $2^{x+1}=2t$, giving the quadratic $t^{2}-2a t+(a^{2}+a-2)=0$. Each admissible value $t>0$ corresponds to exactly one real $x=\\log_2 t$.",
     "Discriminant $=4a^{2}-4(a^{2}+a-2)=4(2-a)$, so real $t$ require $a\\le 2$; for $a>2$ there is no real $t$ and hence no solution.",
     "The roots are $t=a\\pm\\sqrt{2-a}$, with product $t_1t_2=a^{2}+a-2=(a-1)(a+2)$ and sum $t_1+t_2=2a$. The count of real $x$ equals the count of positive roots.",
     "Two positive roots (two $x$): need $\\Delta>0\\ (a<2)$, product $>0\\ (a<-2$ or $a>1)$, and sum $>0\\ (a>0)$. The common region is $1<a<2$.",
     "One positive root (one $x$): when the product is $\\le 0$ one root is $>0$ and the other $\\le 0$, which happens for $-2<a\\le 1$; additionally the double root $t=a=2>0$ at $a=2$ gives a single solution.",
     "No positive root: for $a\\le -2$ both roots are $\\le 0$ (at $a=-2$ they are $0$ and $-4$, both excluded), and for $a>2$ there is no real $t$. This yields $\\boxed{2\\text{ iff }1<a<2,\\ 1\\text{ iff }-2<a\\le1\\text{ or }a=2,\\ 0\\text{ otherwise}}$."
    ]
   },
   {
    "name": "Track the roots across thresholds",
    "steps": [
     "Write the roots as $t=a\\pm\\sqrt{2-a}$ for $a\\le2$ and watch them as $a$ increases past the critical values $a=-2,1,2$.",
     "At $a=-2$: $t\\in\\{0,-4\\}$, no positive root, so no solution; for $a<-2$ both roots stay negative.",
     "At $a=1$: $t\\in\\{0,2\\}$, exactly one positive root $t=2$ (indeed the original equation becomes $2^{x}(2^{x}-2)=0$, forcing $x=1$); throughout $-2<a\\le1$ the product $(a-1)(a+2)\\le0$ keeps exactly one root positive.",
     "For $1<a<2$ both $a-\\sqrt{2-a}$ and $a+\\sqrt{2-a}$ are positive (sum $2a>0$ and product $(a-1)(a+2)>0$), giving two solutions.",
     "At $a=2$ the two roots merge at $t=2>0$ (discriminant $0$), giving one solution; for $a>2$ the discriminant is negative and no real $t$ exists. Assembling the thresholds reproduces the full classification."
    ]
   }
  ],
  "remark": "Insight: \"reduce to a quadratic\" is only half the battle. The substitution domain $t>0$ turns a discriminant question into a positive-roots (location-of-roots) question, and the two excluded values $a=-2,1$ hide precisely in the boundary root $t=0$."
 },
 {
  "theme": "hybrid",
  "themeLabel": "The Grand Hybrids",
  "title": "Positive Forever, Including the Degenerate Instant",
  "difficulty": 5,
  "task": "Find all",
  "tags": [
   "positive-definite",
   "discriminant",
   "leading-coefficient",
   "degenerate-case"
  ],
  "statement": "Find all real $a$ for which \\[\\bigl(a^{2}-a\\bigr)x^{2}+2(a-1)\\,x+1>0\\qquad\\text{for every real }x.\\]",
  "answer": "$a\\ge 1$.",
  "trap": "Demanding only 'leading coefficient $>0$ and discriminant $<0$.' This silently assumes the expression is genuinely quadratic and so misses $a=1$, where the leading and linear coefficients both vanish and the expression degenerates to the true constant $1>0$ — a valid solution the quadratic-only analysis throws away.",
  "solutions": [
   {
    "name": "Case split on the leading coefficient",
    "steps": [
     "Write $A=a^{2}-a=a(a-1)$, $B=2(a-1)$, $C=1$.",
     "Degenerate case $A=0$ means $a=0$ or $a=1$. For $a=0$ the expression is $-2x+1$, which is negative for large $x$ — fails. For $a=1$ also $B=0$, leaving the constant $1>0$ — holds.",
     "Genuine quadratic case $A\\neq0$: positivity for all $x$ requires $A>0$ and discriminant $<0$. Here the discriminant is $B^{2}-4AC=4(a-1)^{2}-4(a^{2}-a)=4(1-a)$, so we need $4(1-a)<0\\Rightarrow a>1$; then $A=a(a-1)>0$ holds automatically.",
     "For $0<a<1$ we have $A<0$ (downward parabola), so the expression $\\to-\\infty$ — fails; and for $a<0$, $A>0$ but the discriminant $4(1-a)>0$ forces real roots, so it dips below $0$ — also fails.",
     "Union of the surviving cases: $a>1$ together with the degenerate point $a=1$, i.e. $\\boxed{a\\ge1}$."
    ]
   },
   {
    "name": "Continuity / limit viewpoint",
    "steps": [
     "For the strict inequality to hold for ALL $x$, including the regime $|x|\\to\\infty$, the dominant term cannot drag the value negative, so the leading coefficient must satisfy $A=a(a-1)\\ge0$, i.e. $a\\le0$ or $a\\ge1$.",
     "If $A<0$ it fails. If $A=0$ check directly: $a=0$ gives $-2x+1$ (fails), while $a=1$ gives the constant $1$ (succeeds).",
     "If $A>0$ (so $a<0$ or $a>1$): require the discriminant $4(1-a)<0\\Rightarrow a>1$, which kills the entire $a<0$ branch and keeps only $a>1$.",
     "Surviving set: $a=1$ together with $a>1$, giving $\\boxed{a\\ge1}$."
    ]
   }
  ],
  "remark": "Insight: 'for all $x$' on a parameter-dependent quadratic is a hybrid of leading-sign analysis, the discriminant, and the degenerate (non-quadratic) limit — and the single degenerate value $a=1$ is exactly where the naive method fails. Note also that the $a<0$ branch passes the leading-coefficient test yet is rejected by the discriminant, so both guards are essential."
 },
 {
  "theme": "hybrid",
  "themeLabel": "The Grand Hybrids",
  "title": "Symmetric Data, One Honest Quadratic",
  "difficulty": 5,
  "task": "Find a,b",
  "tags": [
   "symmetric-functions",
   "newton-identities",
   "sign-condition",
   "reality"
  ],
  "statement": "Let $\\alpha,\\beta$ be the two roots of $x^{2}+p\\,x+q=0$. Suppose $\\alpha$ and $\\beta$ are positive real numbers satisfying \\[\\alpha^{2}+\\beta^{2}=10,\\qquad \\alpha^{4}+\\beta^{4}=82.\\] Find $p$ and $q$.",
  "answer": "$p=-4,\\ q=3$ (the roots are $1$ and $3$).",
  "trap": "Solving the symmetric system to get $q=\\pm3$ and $p=\\pm4,\\pm2$ and then quoting all four sign combinations. The positivity of $\\alpha,\\beta$ is a genuine sign filter: $\\alpha+\\beta>0$ forces $p<0$ and $\\alpha\\beta>0$ forces $q>0$, leaving exactly one pair.",
  "solutions": [
   {
    "name": "Newton's identities + sign filter",
    "steps": [
     "Let $s=\\alpha+\\beta=-p$ and $m=\\alpha\\beta=q$. Then $\\alpha^{2}+\\beta^{2}=s^{2}-2m=10$.",
     "Also $\\alpha^{4}+\\beta^{4}=(\\alpha^{2}+\\beta^{2})^{2}-2(\\alpha\\beta)^{2}=10^{2}-2m^{2}=82\\Rightarrow m^{2}=9\\Rightarrow m=\\pm3$.",
     "If $m=3$: $s^{2}=10+6=16\\Rightarrow s=\\pm4$. If $m=-3$: $s^{2}=10-6=4\\Rightarrow s=\\pm2$.",
     "Positivity: $\\alpha\\beta=m>0$ kills $m=-3$; $\\alpha+\\beta=s>0$ then forces $s=4$. Thus $s=4,\\ m=3$.",
     "Therefore $p=-s=-4$ and $q=m=3$. Check: $x^{2}-4x+3=(x-1)(x-3)$, roots $1,3>0$, with $1+9=10$ and $1+81=82$. $\\boxed{p=-4,\\ q=3}$."
    ]
   },
   {
    "name": "Solve for the roots directly",
    "steps": [
     "From $\\alpha^{2}+\\beta^{2}=10$ and $\\alpha^{4}+\\beta^{4}=82$, set $u=\\alpha^{2},\\ v=\\beta^{2}$: $u+v=10$, $u^{2}+v^{2}=82$.",
     "Then $uv=\\tfrac12\\big((u+v)^{2}-(u^{2}+v^{2})\\big)=\\tfrac12(100-82)=9$, so $u,v$ solve $t^{2}-10t+9=0$, giving $\\{u,v\\}=\\{1,9\\}$.",
     "Hence $\\{\\alpha^{2},\\beta^{2}\\}=\\{1,9\\}$, and positivity gives $\\{\\alpha,\\beta\\}=\\{1,3\\}$.",
     "So $p=-(\\alpha+\\beta)=-4$ and $q=\\alpha\\beta=3$: $\\boxed{p=-4,\\ q=3}$."
    ]
   }
  ],
  "remark": "Insight: symmetric power sums pin the magnitudes of the coefficients, but a sign condition on the roots is what selects the single correct quadratic out of the four sign-consistent candidates."
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
  "title": "Exactly One Root in Common",
  "difficulty": 5,
  "task": "Find all",
  "tags": [
   "common-root",
   "resultant",
   "identical-equations",
   "parameter"
  ],
  "statement": "Find all real $a$ for which the quadratics \\[x^{2}+a\\,x-3=0\\qquad\\text{and}\\qquad x^{2}-3x+a=0\\] have \\emph{exactly one} common root.",
  "answer": "$a=2$.",
  "trap": "Setting the resultant to zero gives $(a-2)(a+3)^{2}=0$, and reporting both $a=2$ and $a=-3$. At $a=-3$ the two quadratics become \\emph{identical} ($x^{2}-3x-3$), so they share \\emph{both} roots, failing the 'exactly one' requirement.",
  "solutions": [
   {
    "name": "Subtract to locate the candidate root",
    "steps": [
     "If $r$ is common, subtract the equations: $(a+3)r-(a+3)=0$, i.e. $(a+3)(r-1)=0$.",
     "If $a\\neq-3$, then $r=1$; substituting into the first equation gives $1+a-3=0\\Rightarrow a=2$. Check the second: $1-3+2=0$. Valid, and the quadratics $x^{2}+2x-3=(x-1)(x+3)$, $x^{2}-3x+2=(x-1)(x-2)$ share only $x=1$.",
     "If $a=-3$, the subtraction is the identity $0=0$: both quadratics equal $x^{2}-3x-3$, sharing two roots, not one.",
     "Therefore the unique value giving exactly one common root is $\\boxed{a=2}$."
    ]
   },
   {
    "name": "Resultant with an identity check",
    "steps": [
     "The resultant in $x$ of the two quadratics is $(a-2)(a+3)^{2}$; a common root exists iff this vanishes, i.e. $a=2$ or $a=-3$.",
     "At $a=-3$ both polynomials are $x^{2}-3x-3$, identical, so they coincide entirely and share two roots.",
     "At $a=2$ the polynomials are distinct, and their difference $(x^{2}+2x-3)-(x^{2}-3x+2)=5x-5$ vanishes only at $x=1$, giving exactly one shared root.",
     "Hence $\\boxed{a=2}$."
    ]
   }
  ],
  "remark": "Insight: the squared factor $(a+3)^{2}$ in the resultant is the algebra warning you that at $a=-3$ the equations collapse onto each other; 'has a common root' and 'has exactly one common root' part ways precisely there."
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
  "title": "Nonnegative on a Closed Interval",
  "difficulty": 5,
  "task": "Find all",
  "tags": [
   "inequality-on-interval",
   "vertex-location",
   "parameter",
   "minimum"
  ],
  "statement": "Find all real $a$ for which \\[x^{2}-2a\\,x+(a+2)\\ge 0\\qquad\\text{for every }x\\in[0,2].\\]",
  "answer": "$-2\\le a\\le 2$.",
  "trap": "Imposing the all-real-$x$ condition 'discriminant $\\le 0$', i.e. $4a^{2}-4(a+2)\\le0\\Rightarrow -1\\le a\\le2$. That is far too restrictive: the inequality need only hold on $[0,2]$, so the minimum over that interval — which may sit at an endpoint when the vertex $x=a$ lies outside $[0,2]$ — is what governs.",
  "solutions": [
   {
    "name": "Minimise over the interval by vertex location",
    "steps": [
     "Let $f(x)=x^{2}-2a x+(a+2)$, an upward parabola with vertex at $x=a$; the minimum on $[0,2]$ is at the vertex if $a\\in[0,2]$, else at the nearer endpoint.",
     "Case $a<0$: minimum at $x=0$, $f(0)=a+2\\ge0\\Rightarrow a\\ge-2$, giving $-2\\le a<0$.",
     "Case $0\\le a\\le2$: minimum at $x=a$, $f(a)=a+2-a^{2}\\ge0\\Rightarrow a^{2}-a-2\\le0\\Rightarrow(a-2)(a+1)\\le0$, which holds for all $a\\in[0,2]$.",
     "Case $a>2$: minimum at $x=2$, $f(2)=4-4a+a+2=6-3a\\ge0\\Rightarrow a\\le2$ — contradiction, no solutions.",
     "Union of cases: $\\boxed{-2\\le a\\le2}$. (Endpoints touch zero: $a=-2$ gives $f(0)=0$; $a=2$ gives $f(2)=0$.)"
    ]
   },
   {
    "name": "Isolate the parameter",
    "steps": [
     "For fixed $x\\in[0,2]$, rearrange $x^{2}-2ax+a+2\\ge0$ as $a(1-2x)\\ge -x^{2}-2$.",
     "The condition 'holds for all $x\\in[0,2]$' becomes a family of linear constraints on $a$; the binding ones come from the endpoints and the point $x=\\tfrac12$ where the coefficient of $a$ changes sign.",
     "At $x=0$: $a\\ge-2$. At $x=2$: $-3a\\ge-6\\Rightarrow a\\le2$. The interior worst case $x=a$ (when $0\\le a\\le2$) gives $a^2-a-2\\le0$, automatically satisfied there.",
     "The tightest pair is $a\\ge-2$ and $a\\le2$, so $\\boxed{-2\\le a\\le2}$."
    ]
   }
  ],
  "remark": "Insight: 'positive for all $x$' and 'positive on a closed interval' are different instruments — the second is solved by locating the vertex relative to the interval and minimising, not by the discriminant alone."
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
  "statement": "The equation $x^{2}+p\\,x+q=0$ has real roots $\\alpha,\\beta$ satisfying \\[\\alpha^{2}+\\beta^{2}=13,\\qquad \\alpha^{3}+\\beta^{3}=35,\\] and \\emph{both} roots lie in the interval $(0,4)$. Find $p$ and $q$.",
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
 }
];
