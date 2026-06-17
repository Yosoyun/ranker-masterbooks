/* problems.js — DATA. 100 original olympiad/JEE-Advanced complex-numbers problems for ℂ · The Argand Plane. Adversarially verified in Python (sympy/numpy/mpmath). statement/answer raw LaTeX (app auto-detects prose+math); steps use $...$ and $$...$$. */
window.PROBLEMS = [
 {
  "theme": "algebra",
  "themeLabel": "The Algebra of Complex Numbers",
  "title": "The Twisted Root",
  "difficulty": 3,
  "task": "Find all",
  "tags": [
   "square root",
   "gaussian",
   "system",
   "modulus"
  ],
  "statement": "Find all complex numbers $w$ satisfying \\[ w^2 = -7 + 24i. \\]",
  "answer": "$w = 3 + 4i$ or $w = -3 - 4i$, i.e. $w = \\pm(3+4i)$.",
  "trap": "Writing $w=\\sqrt{-7+24i}$ and reporting a single value. A complex square root has TWO values (a sign branch); reporting only $3+4i$ loses half the answer set. There is no canonical principal branch forced here, so both roots must be given.",
  "solutions": [
   {
    "name": "Real/imaginary system",
    "steps": [
     "Write $w=a+bi$ with $a,b\\in\\mathbb{R}$, so $w^2=(a^2-b^2)+2ab\\,i$.",
     "Match parts: $a^2-b^2=-7$ and $2ab=24$, hence $ab=12$.",
     "Substitute $b=12/a$: $a^2-144/a^2=-7\\Rightarrow a^4+7a^2-144=0$.",
     "Solve the quadratic in $a^2$: $a^2=\\frac{-7+\\sqrt{49+576}}{2}=\\frac{-7+25}{2}=9$, so $a=\\pm3$, $b=\\pm4$ with $ab=12$.",
     "Conclude $w=\\pm(3+4i)$. $\\boxed{w=\\pm(3+4i)}$"
    ]
   },
   {
    "name": "Modulus shortcut",
    "steps": [
     "$|w|^2=|{-7+24i}|=\\sqrt{49+576}=25$, so $a^2+b^2=25$.",
     "Combined with $a^2-b^2=-7$ gives $a^2=9,\\ b^2=16$.",
     "The constraint $2ab=24>0$ forces $a,b$ to share a sign: $a=3,b=4$ or $a=-3,b=-4$.",
     "Hence $\\boxed{w=\\pm(3+4i)}$."
    ]
   }
  ],
  "remark": "Insight: pairing $a^2-b^2$ with the modulus $a^2+b^2$ avoids the quartic entirely; the cross term $2ab$ only fixes the relative sign of the two roots."
 },
 {
  "theme": "algebra",
  "themeLabel": "The Algebra of Complex Numbers",
  "title": "Real, Imaginary, or Neither",
  "difficulty": 3,
  "task": "Determine",
  "tags": [
   "division",
   "purely imaginary",
   "real condition",
   "parameter"
  ],
  "statement": "Let $a$ be a real number and define $z=\\dfrac{a+i}{a-i}$. Determine all real $a$ for which $z$ is purely imaginary, and all real $a$ for which $z$ is real.",
  "answer": "$z$ is purely imaginary $\\iff a=\\pm1$; $z$ is real $\\iff a=0$.",
  "trap": "Concluding $z$ is real whenever the parameter $a$ is real. The quotient of two complex numbers is generally non-real even with a real parameter; for instance $a=2$ gives $z=\\dfrac{(2+i)^2}{5}=\\dfrac{3+4i}{5}$, which has imaginary part $\\tfrac45\\neq0$. You must rationalize and inspect the imaginary part rather than assume it vanishes.",
  "solutions": [
   {
    "name": "Rationalize",
    "steps": [
     "Multiply numerator and denominator by the conjugate of the denominator: $z=\\dfrac{(a+i)(a+i)}{(a-i)(a+i)}=\\dfrac{(a+i)^2}{a^2+1}=\\dfrac{a^2-1+2ai}{a^2+1}$.",
     "Read off the parts: $\\operatorname{Re}z=\\dfrac{a^2-1}{a^2+1}$ and $\\operatorname{Im}z=\\dfrac{2a}{a^2+1}$ (the denominator $a^2+1$ never vanishes for real $a$).",
     "$z$ is purely imaginary $\\iff \\operatorname{Re}z=0 \\iff a^2-1=0 \\iff a=\\pm1$ (and then $\\operatorname{Im}z=\\pm1\\neq0$, so $z$ is genuinely imaginary).",
     "$z$ is real $\\iff \\operatorname{Im}z=0 \\iff 2a=0 \\iff a=0$.",
     "$\\boxed{a=\\pm1\\ (\\text{purely imaginary}),\\quad a=0\\ (\\text{real})}$"
    ]
   },
   {
    "name": "Conjugate criteria",
    "steps": [
     "Use the characterizations $z\\in\\mathbb{R}\\iff z=\\overline z$ and $z\\in i\\mathbb{R}\\iff z=-\\overline z$. Since $a$ is real, $\\overline z=\\dfrac{a-i}{a+i}$.",
     "Real case: $z=\\overline z \\iff (a+i)^2=(a-i)^2 \\iff (a+i)^2-(a-i)^2=0 \\iff 4ai=0 \\iff a=0$.",
     "Purely imaginary case: $z=-\\overline z \\iff (a+i)^2=-(a-i)^2 \\iff (a+i)^2+(a-i)^2=0$.",
     "Expand: $(a+i)^2+(a-i)^2=2a^2-2=0 \\iff a^2=1 \\iff a=\\pm1$.",
     "$\\boxed{a=\\pm1\\ (\\text{purely imaginary}),\\quad a=0\\ (\\text{real})}$"
    ]
   }
  ],
  "remark": "Geometric insight: $|z|=\\dfrac{|a+i|}{|a-i|}=1$ for every real $a$, so the map $a\\mapsto z$ sweeps out the unit circle. A point of the unit circle is real only at $z=\\pm1$ and purely imaginary only at $z=\\pm i$. Solving $z=1$ is impossible (it forces $i=-i$), $z=-1$ gives $a=0$, and $z=\\pm i$ gives $a=\\pm1$ — matching the algebra exactly."
 },
 {
  "theme": "algebra",
  "themeLabel": "The Algebra of Complex Numbers",
  "title": "Marching Powers of i",
  "difficulty": 4,
  "task": "Evaluate",
  "tags": [
   "powers of i",
   "telescoping",
   "cyclic",
   "summation"
  ],
  "statement": "Evaluate the weighted sum \\[ S=\\sum_{k=1}^{2024} k\\, i^{\\,k} = i+2i^2+3i^3+\\cdots+2024\\,i^{2024}. \\]",
  "answer": "$S = 1012 - 1012\\,i$.",
  "trap": "Treating $i^k$ as if it grows like a geometric term with ratio $i$ but forgetting that $i^4=1$, so the powers are PERIODIC with period $4$. Mishandling the cycle (e.g. applying a $\\sum k r^k$ shortcut as though $|r|\\ne1$, or worse, summing the coefficients $1+2+\\cdots+2024=2049300$ as if the $i^k$ averaged to $1$) gives nonsense; here grouping in blocks of four is essential.",
  "solutions": [
   {
    "name": "Block of four",
    "steps": [
     "Powers cycle: $i^{4m+1}=i,\\ i^{4m+2}=-1,\\ i^{4m+3}=-i,\\ i^{4m+4}=1$.",
     "Group consecutive quadruples. The $m$-th block (terms $4m+1,\\dots,4m+4$, for $m=0,\\dots,505$) contributes $(4m+1)i-(4m+2)-(4m+3)i+(4m+4)$.",
     "Simplify the block: real part $-(4m+2)+(4m+4)=2$; imaginary part $(4m+1)-(4m+3)=-2$. Each block sums to $2-2i$, independent of $m$.",
     "There are $2024/4=506$ blocks, so $S=506(2-2i)=1012-1012i$.",
     "$\\boxed{S=1012-1012i}$"
    ]
   },
   {
    "name": "Geometric-series differentiation trick",
    "steps": [
     "Let $f(x)=\\sum_{k=1}^{n}x^k=\\dfrac{x^{n+1}-x}{x-1}$; then $\\sum_{k=1}^n k x^k = x f'(x)$.",
     "Use the closed form $\\sum_{k=1}^n k x^k=\\dfrac{x-(n+1)x^{n+1}+n\\,x^{n+2}}{(1-x)^2}$ with $x=i,\\ n=2024$.",
     "Since $i^{2024}=1$, $i^{2025}=i$, $i^{2026}=-1$: numerator $=i-(2025)i+2024(-1)=-2024-2024i$.",
     "Denominator $(1-i)^2=-2i$, so $S=\\dfrac{-2024-2024i}{-2i}=\\dfrac{2024+2024i}{2i}$.",
     "Multiply numerator and denominator by $-i$: $S=\\dfrac{(2024+2024i)(-i)}{2}=\\dfrac{2024-2024i}{2}=1012-1012i$. $\\boxed{S=1012-1012i}$"
    ]
   }
  ],
  "remark": "Insight: the periodicity makes 'block telescoping' beat the calculus formula in speed, but the differentiation identity is a robust fallback that also exposes why the answer is so symmetric (equal real and imaginary magnitudes). A handy cross-check: $\\sum_{k=1}^{2024} i^k=0$ because $2024$ is a multiple of $4$, so all the bias comes from the weights $k$, not from the bare powers."
 },
 {
  "theme": "algebra",
  "themeLabel": "The Algebra of Complex Numbers",
  "title": "The Quarter-Turn Engine",
  "difficulty": 4,
  "task": "Find the number of",
  "tags": [
   "powers of i",
   "division",
   "real condition",
   "counting"
  ],
  "statement": "Let $\\omega=\\dfrac{1+i}{1-i}$. Find the number of integers $n$ with $1\\le n\\le 100$ for which $\\omega^{\\,n}+\\omega^{-n}$ is a positive real number, and state that common positive value.",
  "answer": "There are $25$ such $n$, and for each the value is $2$.",
  "trap": "Computing $\\dfrac{1+i}{1-i}$ carelessly and declaring it 'cancels to $-1$'. With $\\omega=-1$ (order $2$) one gets $\\omega^n+\\omega^{-n}=2(-1)^n$, positive exactly for even $n$, suggesting $50$ values. Properly $\\omega=i$, a quarter-turn of order $4$; misreading its order ruins the count.",
  "solutions": [
   {
    "name": "Reduce the base",
    "steps": [
     "Rationalize: $\\omega=\\dfrac{(1+i)^2}{(1-i)(1+i)}=\\dfrac{2i}{2}=i$.",
     "So $\\omega^n+\\omega^{-n}=i^n+i^{-n}=i^n+\\overline{i^n}=2\\,\\mathrm{Re}(i^n)$ (since $|i^n|=1$ gives $i^{-n}=\\overline{i^n}$).",
     "$\\mathrm{Re}(i^n)$ over the cycle $n\\equiv0,1,2,3\\pmod4$ equals $1,0,-1,0$, giving values $2,0,-2,0$.",
     "Positive real ($=2$) occurs exactly when $4\\mid n$. In $1\\le n\\le100$ that is $n=4,8,\\dots,100$: $25$ values.",
     "$\\boxed{25\\text{ values, each giving }2}$"
    ]
   },
   {
    "name": "Modulus-1 conjugate identity",
    "steps": [
     "Since $|\\omega|=1$, $\\omega^{-1}=\\overline{\\omega}$, hence $\\omega^n+\\omega^{-n}=\\omega^n+\\overline{\\omega^n}=2\\,\\mathrm{Re}(\\omega^n)$ is automatically real.",
     "With $\\omega=i$, $\\omega^n$ marches $i,-1,-i,1$ as $n=1,2,3,4$; its real part is positive only at $\\omega^n=1$.",
     "$\\omega^n=1\\iff n\\equiv0\\pmod4$, with value $2\\,\\mathrm{Re}(1)=2$.",
     "Counting multiples of $4$ in $[1,100]$ gives $25$. $\\boxed{25,\\ \\text{value }2}$"
    ]
   },
   {
    "name": "Polar / cosine form",
    "steps": [
     "Write $\\omega=i=e^{i\\pi/2}$, so $\\omega^n+\\omega^{-n}=e^{in\\pi/2}+e^{-in\\pi/2}=2\\cos\\!\\left(\\dfrac{n\\pi}{2}\\right)$.",
     "This is always real; it is positive iff $\\cos\\!\\left(\\dfrac{n\\pi}{2}\\right)>0$, i.e. $\\dfrac{n\\pi}{2}$ is a multiple of $2\\pi$, i.e. $4\\mid n$, and then $\\cos=1$ so the value is $2$.",
     "Multiples of $4$ in $[1,100]$: $n=4,8,\\dots,100$, a total of $25$. $\\boxed{25,\\ \\text{value }2}$"
    ]
   }
  ],
  "remark": "Insight: any unit-modulus base turns $z^n+z^{-n}$ into $2\\cos(n\\theta)$ in disguise; recognizing $\\omega=i$ as a $90^\\circ$ rotation of order $4$ makes the periodic sign pattern $2,0,-2,0$ immediate, and the positive value $2$ recurs precisely on the multiples of $4$."
 },
 {
  "theme": "algebra",
  "themeLabel": "The Algebra of Complex Numbers",
  "title": "A Root with a Pedigree",
  "difficulty": 4,
  "task": "Find a,b",
  "tags": [
   "square root",
   "system",
   "modulus",
   "sign branch"
  ],
  "statement": "Find real numbers $a,b$ with $a>0$ and $b>0$ such that $(a+bi)^2=5+12i$, and then use them to evaluate $\\left|\\dfrac{1}{a+bi}\\right|$.",
  "answer": "$a=3,\\ b=2$; and $\\left|\\dfrac{1}{a+bi}\\right|=\\dfrac{1}{\\sqrt{13}}$.",
  "trap": "Forgetting the positivity constraints and accepting $a=-3,b=-2$ (which also squares to $5+12i$): the sign branch matters. A second trap is computing the reciprocal's modulus by inverting the wrong quantity instead of using $\\left|1/z\\right|=1/|z|$.",
  "solutions": [
   {
    "name": "Direct system + reciprocal modulus",
    "steps": [
     "$(a+bi)^2=a^2-b^2+2abi=5+12i\\Rightarrow a^2-b^2=5,\\ ab=6$.",
     "From $b=6/a$: $a^4-5a^2-36=0\\Rightarrow a^2=\\frac{5+\\sqrt{25+144}}{2}=\\frac{5+13}{2}=9$, so $a=3$ (positive), $b=2$.",
     "Then $|a+bi|=\\sqrt{9+4}=\\sqrt{13}$.",
     "By $\\left|1/z\\right|=1/|z|$, $\\left|\\dfrac{1}{3+2i}\\right|=\\dfrac{1}{\\sqrt{13}}$.",
     "$\\boxed{a=3,\\ b=2,\\ |1/z|=1/\\sqrt{13}}$"
    ]
   },
   {
    "name": "Modulus-first",
    "steps": [
     "$|a+bi|^2=|5+12i|=\\sqrt{25+144}=13$, so $a^2+b^2=13$.",
     "With $a^2-b^2=5$: add/subtract to get $a^2=9,\\ b^2=4$; positivity gives $a=3,b=2$ (and $ab=6>0$ is consistent).",
     "$|1/z|=1/|z|=1/\\sqrt{13}$.",
     "$\\boxed{a=3,\\ b=2,\\ 1/\\sqrt{13}}$"
    ]
   }
  ],
  "remark": "Insight: $|w^2|=|w|^2$ means the modulus of $a+bi$ is the square root of $|5+12i|$ — you can read $a^2+b^2$ off the right-hand side before solving any quartic."
 },
 {
  "theme": "algebra",
  "themeLabel": "The Algebra of Complex Numbers",
  "title": "When the Sum Stays Real",
  "difficulty": 4,
  "task": "Classify",
  "tags": [
   "reciprocal",
   "real condition",
   "conjugate",
   "locus"
  ],
  "statement": "Classify all nonzero complex numbers $z$ for which $z+\\dfrac{1}{z}$ is real.",
  "answer": "Exactly the nonzero $z$ that are real, together with all $z$ on the unit circle $|z|=1$. Equivalently: $z\\in\\mathbb{R}\\setminus\\{0\\}$ or $|z|=1$.",
  "trap": "Asserting that $z+1/z$ is real only when $z$ itself is real. The unit-circle case is missed because on $|z|=1$ one has $1/z=\\overline z$, making $z+1/z=z+\\overline z=2\\,\\mathrm{Re}(z)$ real even though $z$ is not. Concretely $z=e^{i}$ gives $z+1/z=2\\cos 1\\approx 1.08$, which is real despite $z\\notin\\mathbb{R}$.",
  "solutions": [
   {
    "name": "Conjugate test",
    "steps": [
     "$w=z+1/z$ is real $\\iff w=\\overline w$, i.e. $z+\\dfrac1z=\\overline z+\\dfrac1{\\overline z}$.",
     "Rearrange: $z-\\overline z=\\dfrac1{\\overline z}-\\dfrac1z=\\dfrac{z-\\overline z}{z\\overline z}$.",
     "So $(z-\\overline z)\\left(1-\\dfrac{1}{|z|^2}\\right)=0$.",
     "Thus $z-\\overline z=0$ (i.e. $z$ real) or $|z|^2=1$ (i.e. $|z|=1$).",
     "$\\boxed{z\\in\\mathbb{R}\\setminus\\{0\\}\\ \\text{or}\\ |z|=1}$"
    ]
   },
   {
    "name": "Imaginary part computation",
    "steps": [
     "Write $z=x+yi$ with $(x,y)\\ne(0,0)$. Then $\\dfrac1z=\\dfrac{x-yi}{x^2+y^2}$, so $\\mathrm{Im}\\!\\left(z+\\dfrac1z\\right)=y-\\dfrac{y}{x^2+y^2}$.",
     "Combine over a common denominator: $\\mathrm{Im}\\!\\left(z+\\dfrac1z\\right)=\\dfrac{y\\,(x^2+y^2-1)}{x^2+y^2}$.",
     "Set the imaginary part to zero: $y\\,(x^2+y^2-1)=0$.",
     "Hence $y=0$ (real axis, $z\\ne0$) or $x^2+y^2=1$ (unit circle).",
     "$\\boxed{z\\ \\text{real and nonzero},\\ \\text{or}\\ |z|=1}$"
    ]
   },
   {
    "name": "Polar form",
    "steps": [
     "Write $z=re^{i\\theta}$ with $r>0$. Then $\\dfrac1z=\\dfrac1r e^{-i\\theta}$.",
     "So $z+\\dfrac1z=\\left(r+\\dfrac1r\\right)\\cos\\theta+i\\left(r-\\dfrac1r\\right)\\sin\\theta$.",
     "This is real $\\iff \\left(r-\\dfrac1r\\right)\\sin\\theta=0$, i.e. $r=\\dfrac1r$ or $\\sin\\theta=0$.",
     "Thus $r=1$ (unit circle) or $\\theta\\in\\{0,\\pi\\}$ (real axis, $z\\ne0$).",
     "$\\boxed{|z|=1\\ \\text{or}\\ z\\in\\mathbb{R}\\setminus\\{0\\}}$"
    ]
   }
  ],
  "remark": "Insight: the two families intersect at $z=\\pm1$, the only points that are simultaneously real and on the unit circle. This is a clean illustration that a 'real-valued' condition on a complex expression usually carves out a union of curves, not a single line. The polar view also explains why the unit circle is forced: the imaginary part of $z+1/z$ is $(r-1/r)\\sin\\theta$, and the factor $r-1/r$ vanishes exactly when $r=1$."
 },
 {
  "theme": "algebra",
  "themeLabel": "The Algebra of Complex Numbers",
  "title": "The Square that Conjugates Itself",
  "difficulty": 4,
  "task": "Find all",
  "tags": [
   "conjugate",
   "quadratic",
   "roots of unity",
   "system"
  ],
  "statement": "Find all complex numbers $z$ satisfying \\[ z^2=\\overline z. \\]",
  "answer": "$z\\in\\left\\{\\,0,\\ 1,\\ -\\tfrac12+\\tfrac{\\sqrt3}{2}i,\\ -\\tfrac12-\\tfrac{\\sqrt3}{2}i\\,\\right\\}$ — namely $0$ and the three cube roots of unity.",
  "trap": "Taking the modulus of both sides to get $|z|^2=|z|$, concluding $|z|\\in\\{0,1\\}$, and then declaring 'all $z$ with $|z|=1$' are solutions. The modulus condition is necessary but far from sufficient: of the whole unit circle, only the three cube roots of unity (plus $0$) actually satisfy the equation.",
  "solutions": [
   {
    "name": "Cartesian system",
    "steps": [
     "Let $z=x+yi$ with $x,y\\in\\mathbb R$. Then $z^2=x^2-y^2+2xyi$ and $\\overline z=x-yi$.",
     "Match real and imaginary parts: $x^2-y^2=x$ and $2xy=-y$, i.e. $y(2x+1)=0$.",
     "Case $y=0$: $x^2=x\\Rightarrow x\\in\\{0,1\\}$, giving $z=0,\\ z=1$.",
     "Case $x=-\\tfrac12$: $\\tfrac14-y^2=-\\tfrac12\\Rightarrow y^2=\\tfrac34\\Rightarrow y=\\pm\\tfrac{\\sqrt3}{2}$.",
     "So $z=-\\tfrac12\\pm\\tfrac{\\sqrt3}{2}i$. $\\boxed{z\\in\\{0,\\,1,\\,-\\tfrac12\\pm\\tfrac{\\sqrt3}{2}i\\}}$"
    ]
   },
   {
    "name": "Modulus then multiply",
    "steps": [
     "Multiply $z^2=\\overline z$ by $z$: $z^3=z\\overline z=|z|^2$, a real number $\\ge0$.",
     "Take the modulus of the original equation: $|z|^2=|z|$, so $|z|=0$ or $|z|=1$. If $|z|=0$, then $z=0$.",
     "If $|z|=1$, then $z^3=|z|^2=1$, so $z$ is a cube root of unity: $z\\in\\{1,\\,e^{\\pm2\\pi i/3}\\}$.",
     "Each is checked to satisfy $z^2=\\overline z$ (for $|z|=1$ we have $\\overline z=1/z$, and $z^3=1\\Rightarrow z^2=1/z=\\overline z$).",
     "$\\boxed{z\\in\\{0,\\,1,\\,-\\tfrac12\\pm\\tfrac{\\sqrt3}{2}i\\}}$"
    ]
   }
  ],
  "remark": "Insight: multiplying by $z$ converts the conjugate equation into the rotation-free $z^3=|z|^2$, instantly exposing the cube-roots-of-unity structure that the raw modulus bound only hints at. The lone point $z=0$ comes from the $|z|=0$ branch, where multiplying by $z$ collapses everything to $0$."
 },
 {
  "theme": "algebra",
  "themeLabel": "The Algebra of Complex Numbers",
  "title": "Splitting a Quartic over C",
  "difficulty": 3,
  "task": "Find all",
  "tags": [
   "quadratic",
   "factoring",
   "square root",
   "sophie germain"
  ],
  "statement": "Find all complex numbers $z$ satisfying \\[ z^4+4=0, \\] by factoring the left-hand side into two real quadratics rather than using polar form.",
  "answer": "$z\\in\\{\\,1+i,\\ 1-i,\\ -1+i,\\ -1-i\\,\\}$.",
  "trap": "Writing $z^4=-4$ and 'taking the fourth root' as $z=\\sqrt[4]{4}\\,i$ — a single value. A degree-4 equation over $\\mathbb C$ has four roots; collapsing the four sign/branch choices into one (or two) loses solutions.",
  "solutions": [
   {
    "name": "Sophie Germain factorization",
    "steps": [
     "Complete a square: $z^4+4=(z^2+2)^2-(2z)^2=(z^2-2z+2)(z^2+2z+2)$.",
     "Solve $z^2-2z+2=0$: $z=\\dfrac{2\\pm\\sqrt{4-8}}{2}=1\\pm i$.",
     "Solve $z^2+2z+2=0$: $z=\\dfrac{-2\\pm\\sqrt{4-8}}{2}=-1\\pm i$.",
     "Collect all four: $\\boxed{z\\in\\{1\\pm i,\\,-1\\pm i\\}}$."
    ]
   },
   {
    "name": "Square-root ladder",
    "steps": [
     "$z^4=-4\\Rightarrow z^2=\\pm\\sqrt{-4}=\\pm2i$ (both signs of the complex square root).",
     "For $z^2=2i$: with $z=a+bi$, $a^2-b^2=0,\\ 2ab=2\\Rightarrow a=b,\\ a^2=1$, so $z=\\pm(1+i)$.",
     "For $z^2=-2i$: $a^2-b^2=0,\\ 2ab=-2\\Rightarrow a=-b,\\ a^2=1$, so $z=\\pm(1-i)$.",
     "Together: $\\boxed{z\\in\\{1+i,-1-i,1-i,-1+i\\}}$."
    ]
   }
  ],
  "remark": "Insight: the Sophie-Germain identity $a^4+4b^4=(a^2-2ab+2b^2)(a^2+2ab+2b^2)$ turns a quartic into two quadratics with no trigonometry — and the two-step square-root ladder shows where all four sign branches come from."
 },
 {
  "theme": "algebra",
  "themeLabel": "The Algebra of Complex Numbers",
  "title": "Three Unit Vectors in Balance",
  "difficulty": 4,
  "task": "Determine",
  "tags": [
   "modulus",
   "triangle inequality",
   "parallelogram",
   "geometry"
  ],
  "statement": "Let $z,w$ be complex numbers with $|z|=|w|=1$ and $|z+w|=1$. Determine the exact value of $|z-w|$.",
  "answer": "$|z-w|=\\sqrt{3}$.",
  "trap": "Assuming $|z+w|=|z|+|w|$ (which would force $|z+w|=2$, contradicting the data) or $|z-w|=|z|-|w|=0$. The triangle inequality is generally strict for complex numbers; equality $|z+w|=|z|+|w|$ holds only when $z,w$ point the same way, which they do not here.",
  "solutions": [
   {
    "name": "Parallelogram law",
    "steps": [
     "The parallelogram identity: $|z+w|^2+|z-w|^2=2|z|^2+2|w|^2$.",
     "Substitute $|z|=|w|=1$ and $|z+w|=1$: $1+|z-w|^2=2+2=4$.",
     "Hence $|z-w|^2=3$, so $|z-w|=\\sqrt3$.",
     "$\\boxed{|z-w|=\\sqrt3}$"
    ]
   },
   {
    "name": "Expand via conjugates",
    "steps": [
     "Use $|z+w|^2=(z+w)\\overline{(z+w)}=|z|^2+|w|^2+(z\\overline w+\\overline z w)$.",
     "With $|z+w|^2=1$ and $|z|^2=|w|^2=1$: $1=2+(z\\overline w+\\overline z w)$, so $z\\overline w+\\overline z w=-1$.",
     "Now $|z-w|^2=|z|^2+|w|^2-(z\\overline w+\\overline z w)=2-(-1)=3$.",
     "Therefore $|z-w|=\\sqrt3$. $\\boxed{|z-w|=\\sqrt3}$"
    ]
   }
  ],
  "remark": "Insight: the three conditions force $z,w$ to be two unit vectors $120^\\circ$ apart (an equilateral-triangle configuration with the origin), where the diagonal $|z-w|=\\sqrt3$ is forced — geometry hidden inside pure modulus algebra."
 },
 {
  "theme": "algebra",
  "themeLabel": "The Algebra of Complex Numbers",
  "title": "Pinned by Modulus and Mirror",
  "difficulty": 5,
  "task": "Find all",
  "tags": [
   "modulus",
   "conjugate",
   "system",
   "square root",
   "uniqueness"
  ],
  "statement": "A complex number $z$ satisfies all three conditions \\[ z\\,\\overline z = 25, \\qquad z^2+\\overline z^{\\,2}=14, \\qquad \\mathrm{Re}(z)>0,\\ \\mathrm{Im}(z)>0. \\] Find $z$, and then determine the two complex square roots of $z^2$.",
  "answer": "$z=4+3i$; the square roots of $z^2=7+24i$ are $\\pm(4+3i)$.",
  "trap": "Using $z^2+\\overline z^{\\,2}=14$ together with $|z|^2=25$ to pin $\\mathrm{Re}(z)^2$ and $\\mathrm{Im}(z)^2$, but then forgetting that this still leaves FOUR sign combinations $\\pm4\\pm3i$. The positivity of both real and imaginary parts is what selects the unique $z$; dropping it (or the $\\pm$ on the final square root) loses the branch.",
  "solutions": [
   {
    "name": "Reduce to real unknowns",
    "steps": [
     "Let $z=x+yi$. Then $z\\overline z=x^2+y^2=25$.",
     "And $z^2+\\overline z^{\\,2}=2(x^2-y^2)=14\\Rightarrow x^2-y^2=7$.",
     "Add: $2x^2=32\\Rightarrow x^2=16$; subtract: $2y^2=18\\Rightarrow y^2=9$.",
     "Positivity $x>0,y>0$ selects $x=4,\\ y=3$, so $z=4+3i$.",
     "Then $z^2=(4+3i)^2=7+24i$; its square roots are $\\pm z=\\pm(4+3i)$. $\\boxed{z=4+3i,\\ \\sqrt{z^2}=\\pm(4+3i)}$"
    ]
   },
   {
    "name": "Work with symmetric functions",
    "steps": [
     "Let $s=z+\\overline z=2\\mathrm{Re}(z)$ and $p=z\\overline z=25$. Note $z^2+\\overline z^{\\,2}=s^2-2p$.",
     "So $s^2-2(25)=14\\Rightarrow s^2=64\\Rightarrow s=\\pm8$; positivity of $\\mathrm{Re}(z)$ gives $s=8$, i.e. $\\mathrm{Re}(z)=4$.",
     "From $|z|^2=25$: $\\mathrm{Im}(z)^2=25-16=9$, and $\\mathrm{Im}(z)>0\\Rightarrow \\mathrm{Im}(z)=3$, so $z=4+3i$.",
     "Compute $z^2=7+24i$; solving $w^2=7+24i$ by $a^2-b^2=7,\\ 2ab=24$ gives $a=4,b=3$, hence $w=\\pm(4+3i)$.",
     "$\\boxed{z=4+3i,\\ \\text{roots }\\pm(4+3i)}$"
    ]
   }
  ],
  "remark": "Insight: $z\\overline z$ and $z^2+\\overline z^{\\,2}$ are exactly the elementary symmetric data $\\mathrm{Re}^2+\\mathrm{Im}^2$ and $\\mathrm{Re}^2-\\mathrm{Im}^2$ in disguise — two linear equations in $(x^2,y^2)$ — and the whole problem closes on itself when squaring $z$ and re-extracting the root returns $\\pm z$."
 },
 {
  "theme": "modulusarg",
  "themeLabel": "Modulus & Argument",
  "title": "The Honest Product",
  "difficulty": 4,
  "task": "Determine",
  "statement": "Let $z_1 = 3\\bigl(\\cos 20^\\circ + i\\sin 20^\\circ\\bigr)$ and $z_2 = 4\\bigl(\\cos 40^\\circ + i\\sin 40^\\circ\\bigr)$. Determine the modulus and the principal argument of $z_1 z_2$, and write $z_1 z_2$ in the form $a + bi$ with $a,b$ in exact (surd) form.",
  "answer": "$|z_1 z_2| = 12$, $\\arg(z_1 z_2) = 60^\\circ$, and $z_1 z_2 = 6 + 6\\sqrt{3}\\,i$.",
  "tags": [
   "polar form",
   "modulus",
   "argument",
   "de moivre"
  ],
  "trap": "Multiplying the moduli $3\\cdot 4=12$ is correct, but then mishandling the angle: multiplying the arguments ($20^\\circ\\cdot 40^\\circ=800^\\circ\\equiv 80^\\circ$) or folding the moduli into the angle. The rule is $|z_1z_2|=|z_1|\\,|z_2|$ and $\\arg(z_1z_2)=\\arg z_1+\\arg z_2$ — moduli multiply, arguments add. Here $20^\\circ+40^\\circ=60^\\circ$ already lies in $(-180^\\circ,180^\\circ]$, so no reduction is needed; the bogus $80^\\circ$ gives $z_1z_2\\approx 2.08+11.82\\,i$, not $6+6\\sqrt3\\,i$.",
  "solutions": [
   {
    "name": "Polar multiplication",
    "steps": [
     "By $|z_1z_2|=|z_1|\\,|z_2|$, the modulus is $3\\cdot 4 = 12$.",
     "By $\\arg(z_1z_2)=\\arg z_1+\\arg z_2 \\pmod{2\\pi}$, the argument is $20^\\circ+40^\\circ=60^\\circ$, which already lies in $(-180^\\circ,180^\\circ]$ and is thus principal.",
     "Hence $z_1z_2 = 12(\\cos 60^\\circ + i\\sin 60^\\circ) = 12\\bigl(\\tfrac12 + i\\tfrac{\\sqrt3}{2}\\bigr) = \\boxed{6 + 6\\sqrt3\\,i}$ with $|{\\cdot}|=12$, $\\arg = 60^\\circ$."
    ]
   },
   {
    "name": "Direct Cartesian expansion",
    "steps": [
     "Write $z_1=3\\cos20^\\circ+3i\\sin20^\\circ$, $z_2=4\\cos40^\\circ+4i\\sin40^\\circ$ and multiply, collecting real and imaginary parts.",
     "The real part is $12(\\cos20^\\circ\\cos40^\\circ-\\sin20^\\circ\\sin40^\\circ)=12\\cos60^\\circ=6$; the imaginary part is $12(\\sin20^\\circ\\cos40^\\circ+\\cos20^\\circ\\sin40^\\circ)=12\\sin60^\\circ=6\\sqrt3$.",
     "Thus $z_1z_2=6+6\\sqrt3\\,i$, giving modulus $\\sqrt{36+108}=\\sqrt{144}=12$ and $\\arg=\\arctan\\!\\bigl(\\tfrac{6\\sqrt3}{6}\\bigr)=\\arctan(\\sqrt3)=60^\\circ$. $\\boxed{12,\\ 60^\\circ}$"
    ]
   }
  ],
  "remark": "Insight: polar form turns multiplication into a single rotation-and-scaling. The angle-addition identities you 'rediscover' in the Cartesian check ARE the statement $\\arg(z_1z_2)=\\arg z_1+\\arg z_2$, and the surd $6\\sqrt3$ is simply $12\\sin 60^\\circ$."
 },
 {
  "theme": "modulusarg",
  "themeLabel": "Modulus & Argument",
  "title": "Seven Steps Past the Branch Cut",
  "difficulty": 4,
  "task": "Find",
  "statement": "Let $z=\\cos 36^\\circ + i\\sin 36^\\circ$. Find the principal argument $\\operatorname{Arg}(z^{7})$, where the principal argument is taken in $(-180^\\circ,\\,180^\\circ]$.",
  "answer": "$\\operatorname{Arg}(z^{7}) = -108^\\circ$.",
  "tags": [
   "principal argument",
   "de moivre",
   "branch cut",
   "reduction"
  ],
  "trap": "Answering $7\\times 36^\\circ = 252^\\circ$. While $z^{7}$ does equal $\\operatorname{cis}252^\\circ$, $252^\\circ$ is NOT a principal argument: you must subtract $360^\\circ$ to land in $(-180^\\circ,180^\\circ]$, giving $-108^\\circ$. Arguments add, but only modulo $2\\pi$ — the principal value lives on a single $360^\\circ$ window.",
  "solutions": [
   {
    "name": "De Moivre then reduce",
    "steps": [
     "Since $|z|=1$, $z^7=\\cos(7\\cdot 36^\\circ)+i\\sin(7\\cdot 36^\\circ)=\\cos252^\\circ+i\\sin252^\\circ$.",
     "Reduce $252^\\circ$ into $(-180^\\circ,180^\\circ]$ by subtracting $360^\\circ$: $252^\\circ-360^\\circ=-108^\\circ$.",
     "Therefore $\\operatorname{Arg}(z^7)=\\boxed{-108^\\circ}$."
    ]
   },
   {
    "name": "Quadrant check",
    "steps": [
     "$z^7=\\operatorname{cis}252^\\circ$ lies in the third quadrant ($180^\\circ<252^\\circ<270^\\circ$), where the principal argument is negative.",
     "Its reference angle below the negative real axis is $252^\\circ-180^\\circ=72^\\circ$, so the principal argument is $-(180^\\circ-72^\\circ)=-108^\\circ$.",
     "Hence $\\operatorname{Arg}(z^7)=\\boxed{-108^\\circ}$, confirming the reduction."
    ]
   }
  ],
  "remark": "Insight: $\\arg$ is a 'multi-valued' object; only after fixing a branch (here $(-\\pi,\\pi]$) does it become a function. Forgetting to reduce is the single most common modulus-argument error in exams."
 },
 {
  "theme": "modulusarg",
  "themeLabel": "Modulus & Argument",
  "title": "A Coin on a Circle",
  "difficulty": 4,
  "task": "Find",
  "tags": [
   "locus",
   "circle",
   "triangle inequality",
   "extremum"
  ],
  "statement": "A complex number $z$ satisfies $\\lvert z-(3+4i)\\rvert = 2$. Find the maximum and minimum possible values of $\\lvert z\\rvert$, and hence the value of $\\bigl(\\max\\lvert z\\rvert\\bigr)\\cdot\\bigl(\\min\\lvert z\\rvert\\bigr)$.",
  "answer": "$\\max\\lvert z\\rvert = 7$, $\\min\\lvert z\\rvert = 3$, and their product is $21$.",
  "trap": "Trying to optimise with calculus over two real variables, or guessing $\\max=2+\\sqrt{3^2+4^2}=7$ but mistaking the minimum for $0$ because the circle 'might reach the origin'. Since $|3+4i|=5>2$, the origin lies outside the circle, so the nearest point is at distance $5-2=3$, not $0$.",
  "solutions": [
   {
    "name": "Triangle inequality on the centre",
    "steps": [
     "Let $c=3+4i$, so $|c|=\\sqrt{3^2+4^2}=5$ and the locus is the circle of radius $2$ centred at $c$.",
     "The triangle inequalities $\\bigl|\\,|z|-|c|\\,\\bigr|\\le |z-c|\\le |z|+|c|$ with $|z-c|=2$ give $|z|\\le |c|+2=7$ and $|z|\\ge |c|-2=3$.",
     "Both bounds are attained on the ray $Oc$: the farthest point of the circle from $O$ has $|z|=|c|+2=7$, the nearest has $|z|=|c|-2=3$.",
     "Thus $\\max=7$, $\\min=3$, and the product is $7\\cdot 3=\\boxed{21}$."
    ]
   },
   {
    "name": "Parametrise the circle",
    "steps": [
     "Write $z=3+4i+2e^{i\\theta}$. Then $|z|^2=z\\bar z=|3+4i|^2+4+2\\,\\mathrm{Re}\\!\\bigl(2(3-4i)e^{i\\theta}\\bigr)$.",
     "Expanding the real part with $e^{i\\theta}=\\cos\\theta+i\\sin\\theta$ gives $|z|^2=29+4(3\\cos\\theta-4\\sin\\theta)=29+12\\cos\\theta-16\\sin\\theta$.",
     "Since $a\\cos\\theta+b\\sin\\theta$ has amplitude $\\sqrt{a^2+b^2}$, here $\\sqrt{12^2+16^2}=20$, so $|z|^2=29+20\\cos(\\theta+\\varphi)\\in[29-20,\\,29+20]=[9,49]$.",
     "Hence $|z|\\in[3,7]$, giving $\\max=7$, $\\min=3$ and product $=\\sqrt{49}\\cdot\\sqrt{9}=7\\cdot 3=\\boxed{21}$."
    ]
   }
  ],
  "remark": "Insight: $|z|$ is just the distance from the origin to a point on a fixed circle; its extremes are the origin-to-centre distance plus or minus the radius. Because the origin sits outside the circle ($|c|=5>2$), neither extreme is $0$ — no calculus is needed, geometry settles it in one line."
 },
 {
  "theme": "modulusarg",
  "themeLabel": "Modulus & Argument",
  "title": "The Parallelogram's Secret",
  "difficulty": 4,
  "task": "Find",
  "statement": "Complex numbers $z_1, z_2$ satisfy $\\lvert z_1 + z_2\\rvert = 6$, $\\lvert z_1 - z_2\\rvert = 4$, and $\\lvert z_1\\rvert = 4$. Find $\\lvert z_2\\rvert$.",
  "answer": "$\\lvert z_2\\rvert = \\sqrt{10}$.",
  "tags": [
   "parallelogram law",
   "modulus",
   "diagonals"
  ],
  "trap": "Assuming the figure is a rectangle and writing $|z_1+z_2|^2=|z_1|^2+|z_2|^2$. That holds only if $z_1\\perp z_2$ (i.e. $z_1\\bar z_2$ is purely imaginary), which is not given. The correct relation is the parallelogram law $|z_1+z_2|^2+|z_1-z_2|^2=2(|z_1|^2+|z_2|^2)$, valid for ALL $z_1,z_2$.",
  "solutions": [
   {
    "name": "Parallelogram law",
    "steps": [
     "The parallelogram law gives $|z_1+z_2|^2+|z_1-z_2|^2=2\\bigl(|z_1|^2+|z_2|^2\\bigr)$.",
     "Substitute: $6^2+4^2 = 2(4^2+|z_2|^2)\\Rightarrow 36+16=2(16+|z_2|^2)\\Rightarrow 52=32+2|z_2|^2$.",
     "So $|z_2|^2=10$ and $|z_2|=\\boxed{\\sqrt{10}}$."
    ]
   },
   {
    "name": "Expand via conjugates",
    "steps": [
     "Use $|z_1\\pm z_2|^2=|z_1|^2+|z_2|^2\\pm 2\\,\\mathrm{Re}(z_1\\bar z_2)$. Adding the $+$ and $-$ versions cancels the cross term.",
     "$|z_1+z_2|^2+|z_1-z_2|^2=2|z_1|^2+2|z_2|^2$, i.e. $36+16=32+2|z_2|^2$.",
     "Solving, $|z_2|^2=10\\Rightarrow|z_2|=\\boxed{\\sqrt{10}}$."
    ]
   },
   {
    "name": "Explicit construction",
    "steps": [
     "Place $z_1=4$ on the real axis and write $z_2=a+bi$. The conditions $|z_1\\pm z_2|=6,4$ become $(4+a)^2+b^2=36$ and $(4-a)^2+b^2=16$.",
     "Subtracting eliminates $b^2$: $16a=20$, so $a=\\tfrac54$, and then $b^2=36-\\left(\\tfrac{21}{4}\\right)^2=\\tfrac{135}{16}>0$ (a genuine point exists).",
     "Hence $|z_2|^2=a^2+b^2=\\tfrac{25}{16}+\\tfrac{135}{16}=\\tfrac{160}{16}=10$, giving $|z_2|=\\boxed{\\sqrt{10}}$."
    ]
   }
  ],
  "remark": "Insight: the sum of the squared diagonals of a parallelogram equals the sum of the squared sides — the parallelogram law is exactly this geometric fact, and it instantly bypasses any need to know the angle between $z_1$ and $z_2$. Note $z_1\\perp z_2$ would force $|z_1+z_2|=|z_1-z_2|$, but here $6\\ne4$, so the rectangle shortcut is provably inapplicable."
 },
 {
  "theme": "modulusarg",
  "themeLabel": "Modulus & Argument",
  "title": "Equality on a Single Ray",
  "difficulty": 5,
  "task": "Find all",
  "statement": "Find all real numbers $x$ for which \\[ \\bigl\\lvert (x+2i) + (1+xi)\\bigr\\rvert \\;=\\; \\lvert x+2i\\rvert + \\lvert 1+xi\\rvert. \\]",
  "answer": "$x = \\sqrt{2}$ is the only solution.",
  "tags": [
   "triangle inequality",
   "equality case",
   "argument",
   "same ray"
  ],
  "trap": "Squaring blindly and keeping every root of the resulting polynomial. Equality in $|a+b|=|a|+|b|$ forces $a$ and $b$ to point along the SAME ray ($b=\\lambda a$, $\\lambda\\ge 0$), not merely the same line. The candidate $x=-\\sqrt2$ makes the two numbers \\emph{anti-parallel} ($\\lambda<0$), which gives $|a+b|=\\big||a|-|b|\\big|$, not the sum — so it must be discarded.",
  "solutions": [
   {
    "name": "Same-ray condition",
    "steps": [
     "Equality $|a+b|=|a|+|b|$ (with $a=x+2i$, $b=1+xi$, both nonzero) holds iff $b=\\lambda a$ for some real $\\lambda\\ge 0$.",
     "From $1+xi=\\lambda(x+2i)$: real parts $1=\\lambda x$, imaginary parts $x=2\\lambda$. Hence $\\lambda=1/x$ and $x=2/x\\Rightarrow x^2=2\\Rightarrow x=\\pm\\sqrt2$.",
     "Require $\\lambda=1/x\\ge 0$, so $x>0$, leaving only $x=\\boxed{\\sqrt2}$ (then $\\lambda=\\tfrac{1}{\\sqrt2}>0$)."
    ]
   },
   {
    "name": "Cross-term squaring",
    "steps": [
     "Square: $|a+b|^2=|a|^2+|b|^2+2\\,\\mathrm{Re}(a\\bar b)$ must equal $|a|^2+|b|^2+2|a||b|$, so equality $\\iff \\mathrm{Re}(a\\bar b)=|a||b|$, i.e. $a\\bar b$ is a nonnegative real.",
     "Compute $a\\bar b=(x+2i)(1-xi)=3x+(2-x^2)i$. This is a nonnegative real iff $2-x^2=0$ and $3x\\ge 0$.",
     "So $x^2=2$ with $x\\ge 0$, giving $x=\\boxed{\\sqrt2}$; the negative root fails $3x\\ge 0$."
    ]
   }
  ],
  "remark": "Insight: 'same line' is necessary but not sufficient — the equality case of the triangle inequality is directional. The sign test on $\\mathrm{Re}(a\\bar b)$ is the cleanest way to separate the same-ray case from the opposite-ray case."
 },
 {
  "theme": "modulusarg",
  "themeLabel": "Modulus & Argument",
  "title": "Two Tangents from the Origin",
  "difficulty": 4,
  "task": "Find",
  "statement": "A point $z$ moves on the circle $\\lvert z - (1 + i\\sqrt{3})\\rvert = 1$. Find the maximum and minimum values of the principal argument $\\arg z$ as $z$ traverses the circle.",
  "answer": "$\\max\\arg z = 90^\\circ\\ (=\\tfrac{\\pi}{2})$ and $\\min\\arg z = 30^\\circ\\ (=\\tfrac{\\pi}{6})$.",
  "tags": [
   "argument",
   "tangent line",
   "circle",
   "extremum"
  ],
  "trap": "Taking the argument of the center ($60^\\circ$) and adding/subtracting the radius $1$ as if the radius were an angle ($60^\\circ\\pm 1^\\circ$, or worse $60^\\circ\\pm 1\\text{ rad}$) — a length is not an angle. The extreme rays from the origin are TANGENT to the circle, and the half-angle they make with the center direction is $\\arcsin(r/d)$, where $d=|\\text{center}|$, not $r$ itself.",
  "solutions": [
   {
    "name": "Tangent half-angle",
    "steps": [
     "Let $c=1+i\\sqrt3$, so $|c|=\\sqrt{1+3}=2$ and $\\arg c = 60^\\circ$; the circle has radius $r=1$ and does not enclose the origin since $|c|=2>1=r$.",
     "Because $O$ lies outside the circle, the rays from $O$ that bound all directions to circle points are the two tangents from $O$. Each tangent makes the same half-angle $\\alpha=\\arcsin(r/|c|)=\\arcsin\\tfrac12=30^\\circ$ with the central direction $Oc$.",
     "Hence $\\arg z$ ranges over $[\\,60^\\circ-30^\\circ,\\;60^\\circ+30^\\circ\\,]=[30^\\circ,90^\\circ]$, giving $\\min=\\boxed{30^\\circ}$ and $\\max=\\boxed{90^\\circ}$."
    ]
   },
   {
    "name": "Parametric tangent condition",
    "steps": [
     "Write $z=c+e^{i\\theta}$. Extremising $\\arg z$ over the circle occurs where the ray $Oz$ is tangent, i.e. $Oz\\perp$ (center-to-$z$), so triangle $O$–center–$z$ is right-angled at $z$.",
     "In that right triangle the hypotenuse is $|c|=2$ and the side opposite $O$ is $r=1$, so the angle at $O$ between $Oc$ and $Oz$ equals $\\arcsin(1/2)=30^\\circ$.",
     "Concretely the two tangent points are $\\theta=\\pi$ (giving $z=i\\sqrt3$, $\\arg z=90^\\circ$) and $\\theta=-\\tfrac{\\pi}{3}$ (giving $z=\\tfrac32+\\tfrac{\\sqrt3}{2}i$, $\\arg z=30^\\circ$). Thus $\\boxed{30^\\circ\\le\\arg z\\le 90^\\circ}$."
    ]
   },
   {
    "name": "Calculus check on $\\arg z(\\theta)$",
    "steps": [
     "With $z(\\theta)=(1+\\cos\\theta)+i(\\sqrt3+\\sin\\theta)$, set $f(\\theta)=\\arg z=\\operatorname{atan2}(\\sqrt3+\\sin\\theta,\\;1+\\cos\\theta)$.",
     "Solving $f'(\\theta)=0$ yields exactly $\\theta=\\pi$ and $\\theta=-\\tfrac{\\pi}{3}$, the same tangent points; evaluating $f$ there gives $90^\\circ$ and $30^\\circ$.",
     "Since $f$ is continuous on the closed circle, these critical values are the global max and min: $\\arg z\\in[30^\\circ,90^\\circ]$, confirming $\\min=30^\\circ$, $\\max=90^\\circ$."
    ]
   }
  ],
  "remark": "Insight: the extremes of $\\arg z$ on a circle that does not enclose the origin occur at the two tangent points from $O$ — a clean right-triangle picture (half-angle $\\arcsin(r/d)$), never a calculus slog. The radius is a length, so it can only enter an angle through the ratio $r/d$."
 },
 {
  "theme": "modulusarg",
  "themeLabel": "Modulus & Argument",
  "title": "A Twelfth Power Lands on the Real Axis",
  "difficulty": 5,
  "task": "Evaluate",
  "statement": "Let \\[ z = \\frac{1+i}{\\sqrt{3}-i}. \\] Evaluate $z^{12}$, giving the result as an exact complex number.",
  "answer": "$z^{12} = -\\dfrac{1}{64}$.",
  "tags": [
   "polar form",
   "argument subtraction",
   "de moivre",
   "principal argument"
  ],
  "trap": "Computing $\\arg z = 45^\\circ - (-30^\\circ)=75^\\circ$ correctly, but then for $z^{12}$ writing $\\arg = 12\\cdot 75^\\circ = 900^\\circ$ and trying to take cosine of $900^\\circ$ without reducing. Reducing $900^\\circ \\bmod 360^\\circ = 180^\\circ$ shows $z^{12}$ is a negative real — miss the reduction and you may report a spurious imaginary part from rounding.",
  "solutions": [
   {
    "name": "Polar division then De Moivre",
    "steps": [
     "Numerator $1+i=\\sqrt2\\,\\operatorname{cis}45^\\circ$; denominator $\\sqrt3-i=2\\,\\operatorname{cis}(-30^\\circ)$.",
     "So $z=\\tfrac{\\sqrt2}{2}\\operatorname{cis}(45^\\circ-(-30^\\circ))=\\tfrac{1}{\\sqrt2}\\operatorname{cis}75^\\circ$.",
     "Then $z^{12}=\\bigl(\\tfrac{1}{\\sqrt2}\\bigr)^{12}\\operatorname{cis}(12\\cdot 75^\\circ)=\\tfrac{1}{64}\\operatorname{cis}900^\\circ=\\tfrac1{64}\\operatorname{cis}180^\\circ=\\boxed{-\\tfrac{1}{64}}$."
    ]
   },
   {
    "name": "Rationalize first",
    "steps": [
     "Multiply by the conjugate: $z=\\dfrac{(1+i)(\\sqrt3+i)}{(\\sqrt3)^2+1^2}=\\dfrac{(\\sqrt3-1)+(\\sqrt3+1)i}{4}$.",
     "Its modulus is $\\tfrac{1}{4}\\sqrt{(\\sqrt3-1)^2+(\\sqrt3+1)^2}=\\tfrac{1}{4}\\sqrt{8}=\\tfrac{1}{\\sqrt2}$, and $\\arg z=\\arctan\\!\\frac{\\sqrt3+1}{\\sqrt3-1}=75^\\circ$.",
     "Raising to the $12$th: modulus $2^{-6}=\\tfrac1{64}$, argument $900^\\circ\\equiv 180^\\circ$, so $z^{12}=\\boxed{-\\tfrac{1}{64}}$."
    ]
   }
  ],
  "remark": "Insight: division subtracts arguments and divides moduli; the wrap of $900^\\circ$ down to $180^\\circ$ is what pins the answer exactly onto the negative real axis."
 },
 {
  "theme": "modulusarg",
  "themeLabel": "Modulus & Argument",
  "title": "An Equilateral Whisper",
  "difficulty": 4,
  "task": "Find",
  "statement": "Nonzero complex numbers $z_1, z_2$ satisfy $\\lvert z_1\\rvert = \\lvert z_2\\rvert = \\lvert z_1 - z_2\\rvert = 5$. Find $\\lvert z_1 + z_2\\rvert$.",
  "answer": "$\\lvert z_1 + z_2\\rvert = 5\\sqrt{3}$.",
  "tags": [
   "parallelogram law",
   "equilateral",
   "modulus",
   "geometry"
  ],
  "trap": "Concluding $|z_1+z_2|=|z_1|+|z_2|=10$ by misapplying the triangle inequality as an equality. The triangle inequality only gives $|z_1+z_2|\\le 10$, with equality requiring $z_1,z_2$ on the same ray — impossible here since $|z_1-z_2|=5\\ne 0$. The parallelogram law gives the exact value.",
  "solutions": [
   {
    "name": "Parallelogram law",
    "steps": [
     "$|z_1+z_2|^2+|z_1-z_2|^2=2(|z_1|^2+|z_2|^2)$, so $|z_1+z_2|^2 = 2(25+25)-25 = 75$.",
     "Hence $|z_1+z_2|=\\sqrt{75}=\\boxed{5\\sqrt3}$.",
     "(Geometrically $z_1,z_2$ and the origin form an equilateral triangle of side $5$; $z_1+z_2$ is the long diagonal of the rhombus.)"
    ]
   },
   {
    "name": "Cross term from the difference",
    "steps": [
     "$|z_1-z_2|^2=|z_1|^2+|z_2|^2-2\\,\\mathrm{Re}(z_1\\bar z_2)=25\\Rightarrow 50-2\\,\\mathrm{Re}(z_1\\bar z_2)=25\\Rightarrow \\mathrm{Re}(z_1\\bar z_2)=\\tfrac{25}{2}$.",
     "$|z_1+z_2|^2=|z_1|^2+|z_2|^2+2\\,\\mathrm{Re}(z_1\\bar z_2)=50+25=75$.",
     "Thus $|z_1+z_2|=\\boxed{5\\sqrt3}$."
    ]
   }
  ],
  "remark": "Insight: equal side and equal difference forces a $60^\\circ$ angle between $z_1$ and $z_2$; the rhombus then has diagonals $5$ and $5\\sqrt3$, the classic $1:\\sqrt3$ ratio."
 },
 {
  "theme": "modulusarg",
  "themeLabel": "Modulus & Argument",
  "title": "Closest Approach of Two Orbits",
  "difficulty": 4,
  "task": "Find",
  "statement": "Let $z$ satisfy $\\lvert z - (6 + 8i)\\rvert = 4$ and let $w$ satisfy $\\lvert w\\rvert = 3$. Find the minimum and maximum possible values of $\\lvert z - w\\rvert$.",
  "answer": "$\\min\\lvert z - w\\rvert = 3$ and $\\max\\lvert z - w\\rvert = 17$.",
  "tags": [
   "two circles",
   "triangle inequality",
   "distance",
   "extremum"
  ],
  "trap": "Computing the center distance $|6+8i|=10$ and forgetting that BOTH points are free: subtracting only one radius (e.g. $10-4=6$) instead of both. Since the circles are disjoint ($10 > 4+3$), the extreme gap is $10-(4+3)=3$ and the extreme reach is $10+4+3=17$.",
  "solutions": [
   {
    "name": "Distance between two circles",
    "steps": [
     "The centers are $C_1=6+8i$ (radius $4$) and $C_2=0$ (radius $3$), with $|C_1-C_2|=|6+8i|=\\sqrt{6^2+8^2}=10$.",
     "Since $10>4+3$ the circles are separate; the minimum separation is $d-r_1-r_2=10-7=3$, attained when $z,w$ are the two points where the segment $C_1C_2$ pierces the circles (both pulled toward each other).",
     "The maximum is $d+r_1+r_2=10+7=17$, attained at the diametrically opposite outer points. So $\\min=\\boxed{3}$, $\\max=\\boxed{17}$."
    ]
   },
   {
    "name": "Triangle inequality chain",
    "steps": [
     "For any such $z,w$: $|z-w|\\ge |C_1-C_2| - |z-C_1| - |w-C_2| = 10-4-3=3$, with equality when $z,w$ lie on segment $C_1C_2$ on the near sides.",
     "And $|z-w|\\le |C_1-C_2| + |z-C_1| + |w-C_2| = 10+4+3=17$, with equality when $z,w$ lie on the far sides along line $C_1C_2$.",
     "Both bounds are attained, so the range is $[3,17]$: $\\boxed{\\min=3,\\ \\max=17}$."
    ]
   },
   {
    "name": "Parametrize on the line of centers",
    "steps": [
     "Write the unit direction $u=\\dfrac{C_1-C_2}{10}=\\dfrac{6+8i}{10}=\\dfrac{3+4i}{5}$, so $|u|=1$.",
     "The closest points are $z_0=C_1-4u$ and $w_0=C_2+3u$, giving $z_0-w_0=(C_1-C_2)-7u=10u-7u=3u$, hence $|z_0-w_0|=3$.",
     "The farthest points are $z_1=C_1+4u$ and $w_1=C_2-3u$, giving $z_1-w_1=10u+7u=17u$, hence $|z_1-w_1|=17$. Thus $\\min=\\boxed{3}$ and $\\max=\\boxed{17}$."
    ]
   }
  ],
  "remark": "Insight: the gap between two circles is the center distance adjusted by BOTH radii — a tidy generalization of the single-circle 'center distance $\\pm$ radius' rule. The extremes always occur along the line joining the centers."
 },
 {
  "theme": "modulusarg",
  "themeLabel": "Modulus & Argument",
  "title": "Three Arguments Overshoot",
  "difficulty": 4,
  "task": "Determine",
  "statement": "Let \\[ z_1 = 2\\,\\operatorname{cis}100^\\circ,\\quad z_2 = 3\\,\\operatorname{cis}140^\\circ,\\quad z_3 = \\operatorname{cis}80^\\circ, \\] where $\\operatorname{cis}\\theta = \\cos\\theta + i\\sin\\theta$. Determine the modulus and the principal argument (in $(-180^\\circ,180^\\circ]$) of $z_1 z_2 z_3$.",
  "answer": "$\\lvert z_1 z_2 z_3\\rvert = 6$ and $\\operatorname{Arg}(z_1 z_2 z_3) = -40^\\circ$.",
  "tags": [
   "argument",
   "principal value",
   "modulus",
   "reduction"
  ],
  "trap": "Adding the three arguments to get $100^\\circ+140^\\circ+80^\\circ=320^\\circ$ and reporting that as the argument. Although arguments add, $320^\\circ\\notin(-180^\\circ,180^\\circ]$; subtract $360^\\circ$ to obtain the principal value $-40^\\circ$. Reporting $320^\\circ$ also lands you in the wrong quadrant when you convert to $a+bi$.",
  "solutions": [
   {
    "name": "Add and reduce",
    "steps": [
     "Moduli multiply: $|z_1 z_2 z_3| = 2\\cdot 3\\cdot 1 = 6$.",
     "Arguments add: $100^\\circ+140^\\circ+80^\\circ=320^\\circ$. This exceeds $180^\\circ$, so reduce: $320^\\circ-360^\\circ=-40^\\circ$.",
     "Therefore $|z_1z_2z_3|=\\boxed{6}$ and $\\operatorname{Arg}=\\boxed{-40^\\circ}$."
    ]
   },
   {
    "name": "Pairwise then reduce",
    "steps": [
     "First $z_1 z_2 = 6\\,\\operatorname{cis}(100^\\circ+140^\\circ)=6\\,\\operatorname{cis}240^\\circ=6\\,\\operatorname{cis}(-120^\\circ)$ after reduction.",
     "Multiply by $z_3$: argument $-120^\\circ+80^\\circ=-40^\\circ$ (already principal), modulus $6\\cdot 1=6$.",
     "So $z_1z_2z_3=6\\,\\operatorname{cis}(-40^\\circ)$, i.e. $\\boxed{|{\\cdot}|=6,\\ \\operatorname{Arg}=-40^\\circ}$."
    ]
   },
   {
    "name": "Rectangular cross-check",
    "steps": [
     "Compute directly: $z_1z_2z_3 = 6\\,(\\cos320^\\circ + i\\sin320^\\circ) = 6(\\cos40^\\circ - i\\sin40^\\circ)$.",
     "Numerically this is $6(0.766 - 0.643\\,i) \\approx 4.596 - 3.857\\,i$, which lies in the fourth quadrant.",
     "A fourth-quadrant point has $\\operatorname{Arg}\\in(-90^\\circ,0^\\circ)$, consistent with $-40^\\circ$; the modulus is $\\sqrt{4.596^2+3.857^2}=6$. Hence $\\boxed{|{\\cdot}|=6,\\ \\operatorname{Arg}=-40^\\circ}$."
    ]
   }
  ],
  "remark": "Insight: argument addition is only correct 'modulo $360^\\circ$'. Reducing at each step (pairwise) keeps every intermediate value principal and prevents the overshoot from ever appearing. The fourth-quadrant rectangular form is the cleanest sanity check that $-40^\\circ$, not $320^\\circ$, is the principal value."
 },
 {
  "theme": "demoivre",
  "themeLabel": "De Moivre & Powers",
  "title": "The Power of 2024",
  "difficulty": 4,
  "task": "Evaluate",
  "tags": [
   "de moivre",
   "polar form",
   "powers of i",
   "gaussian integers"
  ],
  "statement": "Evaluate $(1+i)^{2024}$, expressing your answer as an integer power of $2$ (with sign). Here $i^2=-1$.",
  "answer": "$(1+i)^{2024}=2^{1012}$.",
  "trap": "Multiplying out binomially or trying to track $i^{2024}$ separately from the real part — the cross terms make a direct expansion hopeless, and treating $(1+i)^{2024}$ as $1^{2024}+i^{2024}$ is simply false. The seductive shortcut '$i^{2024}=(i^4)^{506}=1$, so the answer is $1$' ignores the modulus $\\sqrt2$ entirely.",
  "solutions": [
   {
    "name": "Polar form + De Moivre",
    "steps": [
     "Write $1+i=\\sqrt2\\left(\\cos\\tfrac\\pi4+i\\sin\\tfrac\\pi4\\right)$, since $|1+i|=\\sqrt2$ and $\\arg(1+i)=\\tfrac\\pi4$.",
     "By De Moivre, $(1+i)^{2024}=(\\sqrt2)^{2024}\\left(\\cos\\tfrac{2024\\pi}{4}+i\\sin\\tfrac{2024\\pi}{4}\\right)=2^{1012}\\big(\\cos 506\\pi+i\\sin 506\\pi\\big).$",
     "Since $506$ is even, $\\cos506\\pi=1$ and $\\sin506\\pi=0$.",
     "Therefore $(1+i)^{2024}=\\boxed{2^{1012}}.$"
    ]
   },
   {
    "name": "Square first to kill the angle",
    "steps": [
     "Note $(1+i)^2=1+2i+i^2=2i$, a pure imaginary number.",
     "Hence $(1+i)^{2024}=\\big((1+i)^2\\big)^{1012}=(2i)^{1012}=2^{1012}\\,i^{1012}.$",
     "Since $1012=4\\cdot253$, $i^{1012}=(i^4)^{253}=1$.",
     "Thus $(1+i)^{2024}=\\boxed{2^{1012}}.$"
    ]
   },
   {
    "name": "Fourth-power blocks",
    "steps": [
     "Compute $(1+i)^4=\\big((1+i)^2\\big)^2=(2i)^2=-4.$",
     "Then $(1+i)^{2024}=\\big((1+i)^4\\big)^{506}=(-4)^{506}=4^{506}$ (the exponent $506$ is even, so the sign is $+$).",
     "Finally $4^{506}=(2^2)^{506}=\\boxed{2^{1012}}.$"
    ]
   }
  ],
  "remark": "Insight: the right first move is choosing whether to go polar or to square/fourth-power. Because $(1+i)^2=2i$ and $(1+i)^4=-4$ are so clean, the exponent's residue mod $2$ or mod $4$ controls everything — De Moivre just confirms it."
 },
 {
  "theme": "demoivre",
  "themeLabel": "De Moivre & Powers",
  "title": "Where Two Wheels Overlap",
  "difficulty": 4,
  "task": "Determine",
  "tags": [
   "roots of unity",
   "equally spaced",
   "counting",
   "gcd-lcm"
  ],
  "statement": "On the unit circle, mark every solution of $z^{12}=1$ and every solution of $z^{18}=1$. Determine the number of \\emph{distinct} points marked in total.",
  "answer": "$24$ distinct points.",
  "trap": "Adding $12+18=30$ and stopping — this double-counts the points that solve \\emph{both} equations. The shared points are exactly the common roots, and forgetting to subtract them (or guessing the overlap is just $z=1$) is the classic error.",
  "solutions": [
   {
    "name": "Inclusion–exclusion via gcd",
    "steps": [
     "The $12$th roots of unity form a group $\\mu_{12}$ of $12$ equally spaced points; the $18$th roots form $\\mu_{18}$ with $18$ points.",
     "A point lies in both sets iff $z^{12}=1$ and $z^{18}=1$, i.e. iff $z^{\\gcd(12,18)}=1$. Since $\\gcd(12,18)=6$, the overlap is $\\mu_6$, which has $6$ points.",
     "By inclusion–exclusion the union has $12+18-6=24$ points.",
     "Hence there are $\\boxed{24}$ distinct points."
    ]
   },
   {
    "name": "Direct angle bookkeeping",
    "steps": [
     "The marked angles are $\\dfrac{2\\pi a}{12}=\\dfrac{\\pi a}{6}$ for $a=0,\\dots,11$ and $\\dfrac{2\\pi b}{18}=\\dfrac{\\pi b}{9}$ for $b=0,\\dots,17$.",
     "Two such angles coincide (mod $2\\pi$) iff $\\dfrac{a}{6}=\\dfrac{b}{9}$, i.e. $3a=2b$; the coincidences are the multiples of $\\dfrac{2\\pi}{6}$, giving $6$ shared angles.",
     "Distinct angles $=12+18-6=24$.",
     "Thus $\\boxed{24}$ points."
    ]
   },
   {
    "name": "Common refinement",
    "steps": [
     "Both $\\mu_{12}$ and $\\mu_{18}$ are subsets of $\\mu_{\\operatorname{lcm}(12,18)}=\\mu_{36}$, whose $36$ points are spaced by $10^\\circ$.",
     "Within $\\mu_{36}$, $\\mu_{12}$ picks every $3$rd point and $\\mu_{18}$ every $2$nd point; their union picks the positions $k$ with $3\\mid k$ or $2\\mid k$.",
     "Among $k=0,\\dots,35$, the count with $2\\mid k$ or $3\\mid k$ is $18+12-6=24$.",
     "Hence $\\boxed{24}$ distinct points."
    ]
   }
  ],
  "remark": "Insight: $|\\mu_m\\cup\\mu_n|=m+n-\\gcd(m,n)$ because $\\mu_m\\cap\\mu_n=\\mu_{\\gcd(m,n)}$. The overlap is governed by the gcd, the smallest circle that contains both, not by the lcm."
 },
 {
  "theme": "demoivre",
  "themeLabel": "De Moivre & Powers",
  "title": "The Golden Quintic",
  "difficulty": 5,
  "task": "Find all",
  "tags": [
   "de moivre",
   "multiple angle",
   "minimal polynomial",
   "golden ratio"
  ],
  "statement": "Using De Moivre's theorem, derive the identity $\\cos 5\\theta = 16\\cos^5\\theta-20\\cos^3\\theta+5\\cos\\theta$, and hence find the exact value of $\\cos 72^\\circ$. Give the value in surd form.",
  "answer": "$\\cos 5\\theta=16\\cos^5\\theta-20\\cos^3\\theta+5\\cos\\theta$, and $\\cos 72^\\circ=\\dfrac{\\sqrt5-1}{4}.$",
  "trap": "Misremembering the coefficients (e.g. writing $-30\\cos^3\\theta$ from a faulty memory of $\\cos 5\\theta$). The reliable route is to expand $(\\cos\\theta+i\\sin\\theta)^5$ and replace $\\sin^2\\theta=1-\\cos^2\\theta$; pulling coefficients from memory is exactly where this problem bites.",
  "solutions": [
   {
    "name": "De Moivre expansion then specialize",
    "steps": [
     "By De Moivre and the binomial theorem, $\\cos5\\theta=\\operatorname{Re}(\\cos\\theta+i\\sin\\theta)^5=\\cos^5\\theta-10\\cos^3\\theta\\sin^2\\theta+5\\cos\\theta\\sin^4\\theta.$",
     "Substitute $\\sin^2\\theta=1-\\cos^2\\theta$: $\\cos5\\theta=\\cos^5\\theta-10\\cos^3\\theta(1-\\cos^2\\theta)+5\\cos\\theta(1-\\cos^2\\theta)^2=16\\cos^5\\theta-20\\cos^3\\theta+5\\cos\\theta.$",
     "Put $\\theta=72^\\circ$, so $5\\theta=360^\\circ$ and $\\cos5\\theta=1$. With $c=\\cos72^\\circ$: $16c^5-20c^3+5c-1=0.$",
     "Factor out the known root $c=1$ (from $\\theta=0$): $16c^5-20c^3+5c-1=(c-1)(4c^2+2c-1)^2.$",
     "Since $\\cos72^\\circ\\neq1$, $c$ solves $4c^2+2c-1=0$, giving $c=\\dfrac{-2+\\sqrt{20}}{8}=\\dfrac{\\sqrt5-1}{4}$ (taking the positive root). Hence $\\cos72^\\circ=\\boxed{\\dfrac{\\sqrt5-1}{4}}.$"
    ]
   },
   {
    "name": "Via the fifth roots of unity",
    "steps": [
     "The primitive $5$th roots of unity $e^{\\pm2\\pi i/5},e^{\\pm4\\pi i/5}$ satisfy $z^4+z^3+z^2+z+1=0.$",
     "Dividing by $z^2$ and setting $w=z+\\tfrac1z=2\\cos\\theta$ gives $w^2+w-1=0$, where $\\theta\\in\\{72^\\circ,144^\\circ\\}.$",
     "So $2\\cos72^\\circ=\\dfrac{-1+\\sqrt5}{2}$ (positive root, since $\\cos72^\\circ>0$).",
     "Therefore $\\cos72^\\circ=\\boxed{\\dfrac{\\sqrt5-1}{4}}$, consistent with the quintic's quadratic factor."
    ]
   },
   {
    "name": "Chebyshev cross-check",
    "steps": [
     "The identity says $\\cos5\\theta=T_5(\\cos\\theta)$ with $T_5(x)=16x^5-20x^3+5x$, the degree-$5$ Chebyshev polynomial.",
     "The roots of $T_5(x)=1$ are $\\cos\\theta$ for $5\\theta\\in\\{0^\\circ,\\pm360^\\circ,\\dots\\}$; among these $\\cos72^\\circ$ is a double root of the factor $4x^2+2x-1$.",
     "Solving $4x^2+2x-1=0$ yields $x=\\dfrac{-1\\pm\\sqrt5}{4}$; the value in $(0,1)$ is $\\dfrac{\\sqrt5-1}{4}$.",
     "Hence $\\cos72^\\circ=\\boxed{\\dfrac{\\sqrt5-1}{4}}.$"
    ]
   }
  ],
  "remark": "Insight: De Moivre turns $\\cos n\\theta$ into a degree-$n$ polynomial in $\\cos\\theta$ (the Chebyshev polynomial $T_n$). Special angles whose multiple is a multiple of $360^\\circ$ become roots, and the resulting polynomial factors expose surd values like the golden-ratio-flavoured $\\cos72^\\circ$."
 },
 {
  "theme": "demoivre",
  "themeLabel": "De Moivre & Powers",
  "title": "A Comb of Cosines",
  "difficulty": 4,
  "task": "Prove that",
  "tags": [
   "geometric series",
   "series summation",
   "de moivre",
   "telescoping"
  ],
  "statement": "For $\\sin\\theta\\neq0$, prove that $\\displaystyle\\sum_{k=1}^{n}\\cos\\big((2k-1)\\theta\\big)=\\frac{\\sin 2n\\theta}{2\\sin\\theta}$, and deduce the value of $\\displaystyle\\sum_{k=1}^{n}\\cos\\!\\Big(\\frac{(2k-1)\\pi}{2n}\\Big).$",
  "answer": "The identity holds, and $\\displaystyle\\sum_{k=1}^{n}\\cos\\!\\Big(\\frac{(2k-1)\\pi}{2n}\\Big)=0.$",
  "trap": "Trying to telescope the cosines directly with product-to-sum on adjacent terms, which gets messy fast. Worse, in the deduction, plugging $\\theta=\\tfrac{\\pi}{2n}$ into $\\dfrac{\\sin 2n\\theta}{2\\sin\\theta}$ gives $\\dfrac{\\sin\\pi}{2\\sin(\\pi/2n)}=\\dfrac{0}{\\text{nonzero}}=0$ — but $\\sin\\theta\\neq0$ must first be checked so the formula even applies (it does, since $0<\\tfrac{\\pi}{2n}<\\pi$).",
  "solutions": [
   {
    "name": "Geometric series of $e^{i\\theta}$",
    "steps": [
     "The sum is $\\operatorname{Re}\\sum_{k=1}^{n}e^{i(2k-1)\\theta}=\\operatorname{Re}\\Big(e^{i\\theta}\\sum_{k=0}^{n-1}e^{2ik\\theta}\\Big).$",
     "The inner geometric series sums to $\\dfrac{e^{2in\\theta}-1}{e^{2i\\theta}-1}$, so the whole bracket is $e^{i\\theta}\\cdot\\dfrac{e^{2in\\theta}-1}{e^{2i\\theta}-1}.$",
     "Factor $e^{2in\\theta}-1=e^{in\\theta}\\cdot2i\\sin n\\theta$ and $e^{2i\\theta}-1=e^{i\\theta}\\cdot2i\\sin\\theta$, giving $e^{i\\theta}\\cdot\\dfrac{e^{in\\theta}\\sin n\\theta}{e^{i\\theta}\\sin\\theta}=\\dfrac{e^{in\\theta}\\sin n\\theta}{\\sin\\theta}.$",
     "Taking the real part: $\\dfrac{\\cos n\\theta\\,\\sin n\\theta}{\\sin\\theta}=\\dfrac{\\sin 2n\\theta}{2\\sin\\theta}.$ This proves the identity.",
     "Now set $\\theta=\\tfrac{\\pi}{2n}$ (valid as $0<\\theta<\\pi$ so $\\sin\\theta\\neq0$): the sum equals $\\dfrac{\\sin\\pi}{2\\sin(\\pi/2n)}=\\boxed{0}.$"
    ]
   },
   {
    "name": "Telescoping by product-to-sum",
    "steps": [
     "Multiply each term by $2\\sin\\theta$: $2\\sin\\theta\\cos((2k-1)\\theta)=\\sin(2k\\theta)-\\sin((2k-2)\\theta)$ by product-to-sum.",
     "Summing $k=1$ to $n$ telescopes: $2\\sin\\theta\\sum_{k=1}^n\\cos((2k-1)\\theta)=\\sin(2n\\theta)-\\sin0=\\sin2n\\theta.$",
     "Divide by $2\\sin\\theta$ to get $\\dfrac{\\sin2n\\theta}{2\\sin\\theta}.$",
     "At $\\theta=\\tfrac{\\pi}{2n}$, the numerator $\\sin\\pi=0$, so the sum is $\\boxed{0}.$"
    ]
   },
   {
    "name": "Symmetry of the deduced sum",
    "steps": [
     "The angles $\\dfrac{(2k-1)\\pi}{2n}$ for $k=1,\\dots,n$ are symmetric about $\\tfrac\\pi2$: pairing $k$ with $n+1-k$ gives angles summing to $\\pi$.",
     "Since $\\cos(\\pi-x)=-\\cos x$, each such pair cancels; if $n$ is odd the middle term is $\\cos\\tfrac\\pi2=0.$",
     "Hence the total is $\\boxed{0}$, matching the closed form $\\dfrac{\\sin\\pi}{2\\sin(\\pi/2n)}.$"
    ]
   }
  ],
  "remark": "Insight: a finite cosine (or sine) sum is just the real (or imaginary) part of a geometric series in $e^{i\\theta}$. The factor-out trick $e^{i\\alpha}-1=2i\\sin\\tfrac\\alpha2\\,e^{i\\alpha/2}$ converts the quotient into a clean Dirichlet-kernel form."
 },
 {
  "theme": "demoivre",
  "themeLabel": "De Moivre & Powers",
  "title": "Four Spokes of a Hidden Wheel",
  "difficulty": 4,
  "task": "Find all",
  "tags": [
   "nth roots",
   "equally spaced",
   "polar form",
   "branch counting"
  ],
  "statement": "Find all complex numbers $z$ satisfying $z^4=-8-8\\sqrt3\\,i$. Give each root in the form $a+bi$ with $a,b$ real.",
  "answer": "$z\\in\\{\\,1+\\sqrt3\\,i,\\;-\\sqrt3+i,\\;-1-\\sqrt3\\,i,\\;\\sqrt3-i\\,\\}.$",
  "trap": "Computing only the principal fourth root and stopping — a fourth power has exactly $4$ roots, equally spaced $90^\\circ$ apart. Also, mis-locating $\\arg(-8-8\\sqrt3\\,i)$: it lies in the third quadrant ($240^\\circ$, equivalently $-120^\\circ$), not the first, so blindly using $\\arctan(\\sqrt3)=60^\\circ$ loses the sign data.",
  "solutions": [
   {
    "name": "Polar form and equal spacing",
    "steps": [
     "Compute the modulus: $|-8-8\\sqrt3\\,i|=\\sqrt{64+192}=\\sqrt{256}=16$, and the argument is $240^\\circ$ (third quadrant).",
     "So $z^4=16\\,\\mathrm{cis}\\,240^\\circ$, giving $|z|=16^{1/4}=2$ and arguments $\\dfrac{240^\\circ+360^\\circ k}{4}=60^\\circ,150^\\circ,240^\\circ,330^\\circ$ for $k=0,1,2,3.$",
     "Evaluate: $2\\,\\mathrm{cis}\\,60^\\circ=1+\\sqrt3\\,i$, $2\\,\\mathrm{cis}\\,150^\\circ=-\\sqrt3+i$, $2\\,\\mathrm{cis}\\,240^\\circ=-1-\\sqrt3\\,i$, $2\\,\\mathrm{cis}\\,330^\\circ=\\sqrt3-i.$",
     "Thus $z\\in\\boxed{\\{1+\\sqrt3\\,i,\\,-\\sqrt3+i,\\,-1-\\sqrt3\\,i,\\,\\sqrt3-i\\}}.$"
    ]
   },
   {
    "name": "One root then rotate by $i$",
    "steps": [
     "Find one root: $w=1+\\sqrt3\\,i=2\\,\\mathrm{cis}\\,60^\\circ$ satisfies $w^4=16\\,\\mathrm{cis}\\,240^\\circ=-8-8\\sqrt3\\,i.$",
     "All four roots are $w\\cdot i^{k}$ for $k=0,1,2,3$, since the fourth roots of unity are $1,i,-1,-i$ and they multiply any one root to the rest.",
     "Compute: $w,\\;iw=i(1+\\sqrt3 i)=-\\sqrt3+i,\\;-w=-1-\\sqrt3 i,\\;-iw=\\sqrt3-i.$",
     "So the roots are $\\boxed{\\{1+\\sqrt3 i,\\,-\\sqrt3+i,\\,-1-\\sqrt3 i,\\,\\sqrt3-i\\}}.$"
    ]
   },
   {
    "name": "Square-root twice",
    "steps": [
     "First solve $u^2=-8-8\\sqrt3\\,i=16\\,\\mathrm{cis}\\,240^\\circ$: $u=4\\,\\mathrm{cis}\\,120^\\circ=-2+2\\sqrt3\\,i$ or $u=4\\,\\mathrm{cis}\\,300^\\circ=2-2\\sqrt3\\,i.$",
     "Now solve $z^2=u$ for each $u$. From $u=4\\,\\mathrm{cis}\\,120^\\circ$: $z=2\\,\\mathrm{cis}\\,60^\\circ=1+\\sqrt3 i$ or $2\\,\\mathrm{cis}\\,240^\\circ=-1-\\sqrt3 i.$",
     "From $u=4\\,\\mathrm{cis}\\,300^\\circ$: $z=2\\,\\mathrm{cis}\\,150^\\circ=-\\sqrt3+i$ or $2\\,\\mathrm{cis}\\,330^\\circ=\\sqrt3-i.$",
     "Collecting all four gives $\\boxed{\\{1+\\sqrt3 i,\\,-1-\\sqrt3 i,\\,-\\sqrt3+i,\\,\\sqrt3-i\\}}.$"
    ]
   }
  ],
  "remark": "Insight: the $n$ $n$th roots sit at the vertices of a regular $n$-gon, all at modulus $|w|^{1/n}$, separated by $360^\\circ/n$. Finding one root and multiplying by the $n$th roots of unity is the fastest way to harvest the rest."
 },
 {
  "theme": "demoivre",
  "themeLabel": "De Moivre & Powers",
  "title": "The Heptagon's Balance",
  "difficulty": 4,
  "task": "Evaluate",
  "tags": [
   "roots of unity",
   "series summation",
   "real parts",
   "vieta"
  ],
  "statement": "Evaluate $\\displaystyle\\sum_{k=1}^{6}\\cos\\!\\Big(\\frac{2k\\pi}{7}\\Big)$, the sum of the real parts of the six nonreal seventh roots of unity.",
  "answer": "$\\displaystyle\\sum_{k=1}^{6}\\cos\\!\\Big(\\frac{2k\\pi}{7}\\Big)=-1.$",
  "trap": "Assuming the six cosines cancel in symmetric pairs to give $0$. They pair as $\\cos\\theta$ and $\\cos(2\\pi-\\theta)=+\\cos\\theta$ (equal, not opposite), so each pair reinforces; the correct total is $-1$, the deficit left by the missing $k=0$ term. Treating the seven roots' real parts as summing to $0$ forgets that the $k=0$ root contributes $\\cos 0=1$, so the remaining six must supply $0-1=-1$.",
  "solutions": [
   {
    "name": "Sum of all roots is zero",
    "steps": [
     "The seven seventh roots of unity are $\\zeta_k=e^{2k\\pi i/7}$ for $k=0,\\dots,6$, and they sum to $0$, since the coefficient of $z^{6}$ in $z^{7}-1$ is $0$.",
     "Taking real parts of $\\sum_{k=0}^{6}\\zeta_k=0$ gives $\\sum_{k=0}^{6}\\cos\\tfrac{2k\\pi}{7}=0.$",
     "The $k=0$ term is $\\cos 0=1$, so $\\sum_{k=1}^{6}\\cos\\tfrac{2k\\pi}{7}=0-1=\\boxed{-1}.$"
    ]
   },
   {
    "name": "Geometric series",
    "steps": [
     "$\\sum_{k=1}^{6}\\cos\\tfrac{2k\\pi}{7}=\\operatorname{Re}\\sum_{k=1}^{6}e^{2k\\pi i/7}.$",
     "With $\\omega=e^{2\\pi i/7}\\neq 1$, the geometric sum is $\\sum_{k=1}^{6}\\omega^{k}=\\dfrac{\\omega(\\omega^{6}-1)}{\\omega-1}=\\dfrac{\\omega^{7}-\\omega}{\\omega-1}=\\dfrac{1-\\omega}{\\omega-1}=-1,$ using $\\omega^{7}=1$.",
     "The result $-1$ is already real, so the cosine sum equals $\\boxed{-1}.$"
    ]
   },
   {
    "name": "Vieta on the cyclotomic factor",
    "steps": [
     "Factor $z^{7}-1=(z-1)\\,\\Phi(z)$ with $\\Phi(z)=z^{6}+z^{5}+\\cdots+z+1$, whose roots are exactly the six nonreal seventh roots of unity $\\zeta_1,\\dots,\\zeta_6$.",
     "By Vieta, the sum of these roots equals $-(\\text{coeff of }z^{5})=-1.$",
     "Hence $\\sum_{k=1}^{6}\\zeta_k=-1$; taking real parts, $\\sum_{k=1}^{6}\\cos\\tfrac{2k\\pi}{7}=\\operatorname{Re}(-1)=\\boxed{-1}.$"
    ]
   }
  ],
  "remark": "Insight: the real parts of the $n$th roots of unity sum to $0$ because the whole sum of roots is $0$; isolating the trivial root $z=1$ leaves $-1$ for the rest. The conjugate cosines pair up \\emph{equal}, not opposite, which is precisely why naive cancellation to $0$ fails."
 },
 {
  "theme": "demoivre",
  "themeLabel": "De Moivre & Powers",
  "title": "Twelve Steps Back to One",
  "difficulty": 4,
  "task": "Determine",
  "tags": [
   "de moivre",
   "order of element",
   "roots of unity",
   "powers"
  ],
  "statement": "Let $w=\\dfrac{\\sqrt3+i}{2}$. Determine the smallest positive integer $n$ for which $w^n=1$, and find the set of all positive integers $n$ with $w^n$ real.",
  "answer": "The smallest $n$ with $w^n=1$ is $12$; and $w^n$ is real $\\iff 6\\mid n$, i.e. $n\\in\\{6,12,18,24,\\dots\\}.$",
  "trap": "Reading $w=\\tfrac{\\sqrt3+i}{2}$ as having modulus $>1$ and concluding $w^n$ never returns to $1$. In fact $|w|=1$ exactly. A second trap: requiring $w^n=1$ for 'real', when $w^n$ real only needs the argument to be a multiple of $180^\\circ$, giving the larger solution set $6\\mid n$.",
  "solutions": [
   {
    "name": "Polar form and order",
    "steps": [
     "Modulus: $|w|=\\dfrac{\\sqrt{3+1}}{2}=\\dfrac{2}{2}=1$, and $\\arg w=\\arctan\\dfrac{1}{\\sqrt3}=30^\\circ=\\tfrac\\pi6.$",
     "So $w=\\mathrm{cis}\\,30^\\circ$ and by De Moivre $w^n=\\mathrm{cis}(30n^\\circ).$",
     "$w^n=1$ requires $30n\\equiv0\\pmod{360}$, i.e. $n\\equiv0\\pmod{12}$; the smallest positive such $n$ is $\\boxed{12}.$",
     "$w^n$ is real requires $30n\\equiv0\\pmod{180}$, i.e. $n\\equiv0\\pmod6$; so $w^n\\in\\mathbb R\\iff\\boxed{6\\mid n}.$"
    ]
   },
   {
    "name": "Powers in a cycle",
    "steps": [
     "Since $w=\\mathrm{cis}30^\\circ$, successive powers advance by $30^\\circ$: $w^6=\\mathrm{cis}180^\\circ=-1$ and $w^{12}=\\mathrm{cis}360^\\circ=1.$",
     "Thus the order of $w$ is $12$ (no smaller positive power equals $1$, since $w^k=\\mathrm{cis}(30k^\\circ)\\neq1$ for $1\\le k\\le11$).",
     "$w^n$ is real exactly when $\\mathrm{cis}(30n^\\circ)=\\pm1$, i.e. $30n$ is a multiple of $180$, i.e. $6\\mid n.$",
     "Hence smallest $n$ with $w^n=1$ is $\\boxed{12}$ and $w^n\\in\\mathbb R\\iff 6\\mid n.$"
    ]
   },
   {
    "name": "Root of unity identification",
    "steps": [
     "$w=\\mathrm{cis}\\tfrac\\pi6=e^{2\\pi i/12}$ is a primitive $12$th root of unity, since $\\tfrac{\\pi}{6}=\\tfrac{2\\pi}{12}.$",
     "A primitive $12$th root has order exactly $12$, so the least $n$ with $w^n=1$ is $\\boxed{12}.$",
     "$w^n=e^{2\\pi i n/12}$ is real iff $\\tfrac{n}{12}\\in\\tfrac12\\mathbb Z$, i.e. $n$ is a multiple of $6$.",
     "Therefore $w^n\\in\\mathbb R\\iff 6\\mid n.$"
    ]
   }
  ],
  "remark": "Insight: a unit-modulus complex number is a root of unity, and its order is $360^\\circ$ divided by the angle step. 'Real' is a weaker condition than 'equals $1$' — it only pins the argument to a multiple of $180^\\circ$, doubling the solution density."
 },
 {
  "theme": "demoivre",
  "themeLabel": "De Moivre & Powers",
  "title": "Powers That Sum to Nothing",
  "difficulty": 5,
  "task": "Evaluate",
  "tags": [
   "roots of unity",
   "power sums",
   "geometric series",
   "divisibility"
  ],
  "statement": "Let $\\zeta_0,\\zeta_1,\\dots,\\zeta_6$ be the seven seventh roots of unity. Evaluate $\\displaystyle\\sum_{j=0}^{6}\\zeta_j^{\\,5}$, and more generally state the value of $\\displaystyle\\sum_{j=0}^{6}\\zeta_j^{\\,m}$ for a positive integer $m$.",
  "answer": "$\\displaystyle\\sum_{j=0}^{6}\\zeta_j^{\\,5}=0$; and in general $\\displaystyle\\sum_{j=0}^{6}\\zeta_j^{\\,m}=\\begin{cases}7,&7\\mid m\\\\[2pt]0,&7\\nmid m.\\end{cases}$",
  "trap": "Thinking that raising each root to the $5$th power changes the multiset, so the sum must be 'something new' and nonzero. In fact $\\{\\zeta_j^5\\}$ is just a permutation of $\\{\\zeta_j\\}$ (because $\\gcd(5,7)=1$), so the power sum is again $0$. The only way to get $7$ is when $7\\mid m$, collapsing every term to $1$.",
  "solutions": [
   {
    "name": "Permutation of the roots",
    "steps": [
     "Since $\\gcd(5,7)=1$, the map $\\zeta\\mapsto\\zeta^5$ permutes the seventh roots of unity bijectively: distinct roots stay distinct because $\\zeta_a^5=\\zeta_b^5\\Rightarrow\\zeta_a^{5}\\zeta_b^{-5}=1\\Rightarrow 5(a-b)\\equiv0\\pmod 7\\Rightarrow a\\equiv b$.",
     "Therefore $\\sum_{j}\\zeta_j^5=\\sum_j\\zeta_j=0$, the sum of all seventh roots of unity (the coefficient of $z^6$ in $z^7-1$ is $0$).",
     "Hence $\\sum_{j=0}^{6}\\zeta_j^5=\\boxed{0}.$",
     "For general $m$: if $7\\mid m$ then each $\\zeta_j^m=1$ and the sum is $7$; otherwise the same permutation/orthogonality argument forces the sum to vanish."
    ]
   },
   {
    "name": "Geometric series with common ratio",
    "steps": [
     "Write $\\zeta_j=\\zeta^j$ with $\\zeta=e^{2\\pi i/7}$. Then $\\sum_{j=0}^{6}\\zeta_j^m=\\sum_{j=0}^{6}(\\zeta^m)^j.$",
     "If $\\zeta^m\\neq1$ (i.e. $7\\nmid m$), this geometric series equals $\\dfrac{(\\zeta^m)^7-1}{\\zeta^m-1}=\\dfrac{(\\zeta^7)^m-1}{\\zeta^m-1}=\\dfrac{1-1}{\\zeta^m-1}=0.$",
     "If $\\zeta^m=1$ (i.e. $7\\mid m$), every term is $1$ and the sum is $7.$",
     "For $m=5$, $7\\nmid5$, so the sum is $\\boxed{0}.$"
    ]
   },
   {
    "name": "Newton/Vieta power sums",
    "steps": [
     "The $\\zeta_j$ are exactly the roots of $z^7-1$, whose expansion $z^7-1$ has no $z^6,\\dots,z^1$ terms — so all elementary symmetric functions $e_1,\\dots,e_6$ vanish.",
     "By Newton's identities $p_k-e_1p_{k-1}+\\dots\\pm k\\,e_k=0$; with $e_1=\\dots=e_6=0$ these collapse to $p_k=0$ for $1\\le k\\le6$, while $p_7=\\sum_j\\zeta_j^7=\\sum_j 1=7.$",
     "The pattern repeats with period $7$: $p_m=7$ if $7\\mid m$, else $0.$",
     "In particular $p_5=\\boxed{0}.$"
    ]
   }
  ],
  "remark": "Insight: the power sums of the $n$th roots of unity form a 'comb' — they equal $n$ when $n\\mid m$ and $0$ otherwise. This is precisely the discrete orthogonality relation at the heart of the finite Fourier transform, and raising every root to a power coprime to $n$ merely shuffles the roots, leaving the sum unchanged."
 },
 {
  "theme": "demoivre",
  "themeLabel": "De Moivre & Powers",
  "title": "The Binomial Cosine Machine",
  "difficulty": 5,
  "task": "Evaluate",
  "tags": [
   "de moivre",
   "binomial theorem",
   "series summation",
   "real parts"
  ],
  "statement": "By considering $(1+e^{i\\theta})^n$, prove that $\\displaystyle\\sum_{k=0}^{n}\\binom{n}{k}\\cos k\\theta=2^n\\cos^n\\!\\frac\\theta2\\,\\cos\\frac{n\\theta}{2}$, and hence evaluate $\\displaystyle\\sum_{k=0}^{6}\\binom{6}{k}\\cos\\frac{k\\pi}{3}.$",
  "answer": "The identity holds, and $\\displaystyle\\sum_{k=0}^{6}\\binom{6}{k}\\cos\\frac{k\\pi}{3}=-27.$",
  "trap": "Expanding $\\sum\\binom{n}{k}\\cos k\\theta$ termwise and despairing. The slick move is to recognise it as $\\operatorname{Re}(1+e^{i\\theta})^n$; the key factorization $1+e^{i\\theta}=2\\cos\\tfrac\\theta2\\,e^{i\\theta/2}$ is exactly what a hasty solver skips, then mis-evaluates the half-angle. Here $\\tfrac{n\\theta}{2}=\\pi$, so $\\cos\\tfrac{n\\theta}{2}=-1$; carelessly writing $\\cos\\pi=+1$ (or dropping the sign of the half-angle entirely) gives the seductive but wrong $+27$.",
  "solutions": [
   {
    "name": "Real part of a binomial power",
    "steps": [
     "By the binomial theorem and De Moivre, $(1+e^{i\\theta})^n=\\sum_{k=0}^{n}\\binom{n}{k}e^{ik\\theta}$, so $\\sum_{k=0}^{n}\\binom{n}{k}\\cos k\\theta=\\operatorname{Re}(1+e^{i\\theta})^n.$",
     "Factor $1+e^{i\\theta}=e^{i\\theta/2}\\big(e^{-i\\theta/2}+e^{i\\theta/2}\\big)=2\\cos\\tfrac\\theta2\\,e^{i\\theta/2}.$",
     "Raise to the $n$: $(1+e^{i\\theta})^n=2^n\\cos^n\\tfrac\\theta2\\,e^{in\\theta/2}$, whose real part is $2^n\\cos^n\\tfrac\\theta2\\cos\\tfrac{n\\theta}{2}.$ This proves the identity.",
     "Evaluate at $n=6,\\theta=\\tfrac\\pi3$: $2^6\\cos^6\\tfrac\\pi6\\cos\\pi=64\\Big(\\tfrac{\\sqrt3}{2}\\Big)^6(-1)=64\\cdot\\tfrac{27}{64}\\cdot(-1)=\\boxed{-27}.$"
    ]
   },
   {
    "name": "Pair the symmetric terms",
    "steps": [
     "Use $\\binom{n}{k}=\\binom{n}{n-k}$ to pair the $k$ and $n-k$ terms: $\\binom{n}{k}\\big(\\cos k\\theta+\\cos(n-k)\\theta\\big)=2\\binom{n}{k}\\cos\\tfrac{n\\theta}{2}\\cos\\tfrac{(n-2k)\\theta}{2}.$",
     "So the whole sum is $\\cos\\tfrac{n\\theta}{2}\\sum_{k}\\binom{n}{k}\\cos\\tfrac{(n-2k)\\theta}{2}$, and that inner sum is $\\operatorname{Re}\\sum_k\\binom{n}{k}e^{i(n-2k)\\theta/2}=\\operatorname{Re}\\big(e^{i\\theta/2}+e^{-i\\theta/2}\\big)^n=(2\\cos\\tfrac\\theta2)^n.$",
     "This re-derives $2^n\\cos^n\\tfrac\\theta2\\cos\\tfrac{n\\theta}{2}.$",
     "With $n=6,\\theta=\\tfrac\\pi3$: $\\cos\\tfrac{n\\theta}{2}=\\cos\\pi=-1$ and $(2\\cos\\tfrac\\pi6)^6=(\\sqrt3)^6=27$, giving $-1\\cdot27=\\boxed{-27}.$"
    ]
   },
   {
    "name": "Direct numerical assembly",
    "steps": [
     "The angles $\\tfrac{k\\pi}{3}$ for $k=0,\\dots,6$ give cosines $1,\\tfrac12,-\\tfrac12,-1,-\\tfrac12,\\tfrac12,1$ and $\\binom{6}{k}=1,6,15,20,15,6,1.$",
     "Dot product: $1{\\cdot}1+6{\\cdot}\\tfrac12+15{\\cdot}(-\\tfrac12)+20{\\cdot}(-1)+15{\\cdot}(-\\tfrac12)+6{\\cdot}\\tfrac12+1{\\cdot}1.$",
     "Sum $=1+3-7.5-20-7.5+3+1=-27.$",
     "Thus $\\boxed{-27}$, confirming the closed form."
    ]
   }
  ],
  "remark": "Insight: $1+e^{i\\theta}=2\\cos\\tfrac\\theta2\\,e^{i\\theta/2}$ is the workhorse identity — it converts any binomial-weighted trig sum into a clean product. The same factorization powers the half-angle formula and the Dirichlet kernel."
 },
 {
  "theme": "demoivre",
  "themeLabel": "De Moivre & Powers",
  "title": "Nine Twists to the Real Line",
  "difficulty": 4,
  "task": "Find the number of",
  "tags": [
   "de moivre",
   "powers",
   "real values",
   "modulus"
  ],
  "statement": "Let $z=2\\big(\\cos\\tfrac\\pi9+i\\sin\\tfrac\\pi9\\big)$. Find the smallest positive integer $n$ for which $z^n$ is a real number, and compute that value of $z^n$.",
  "answer": "The smallest such $n$ is $9$, and $z^9=-512.$",
  "trap": "Demanding $z^n=1$ (a root of unity) and so chasing the argument back to $0^\\circ$, which would need $n=18$. But $z^n$ is \\emph{real} as soon as its argument is a multiple of $180^\\circ$, reached first at $n=9$ — and the modulus is $2$, not $1$, so $|z^9|=512$, not $1$.",
  "solutions": [
   {
    "name": "De Moivre on argument and modulus",
    "steps": [
     "By De Moivre, $z^n=2^n\\big(\\cos\\tfrac{n\\pi}{9}+i\\sin\\tfrac{n\\pi}{9}\\big).$",
     "$z^n$ is real iff $\\sin\\tfrac{n\\pi}{9}=0$, i.e. $\\tfrac{n\\pi}{9}$ is a multiple of $\\pi$, i.e. $9\\mid n.$",
     "The smallest positive such $n$ is $9.$",
     "Then $z^9=2^9(\\cos\\pi+i\\sin\\pi)=512\\cdot(-1)=\\boxed{-512}.$"
    ]
   },
   {
    "name": "Track the angle in degrees",
    "steps": [
     "Here $\\arg z=20^\\circ$, so $\\arg(z^n)=20n^\\circ.$",
     "Real means $20n^\\circ$ is a multiple of $180^\\circ$: $20n=180m\\Rightarrow n=9m$, least at $m=1$, $n=9.$",
     "At $n=9$ the argument is $180^\\circ$, so $z^9$ is negative real with modulus $2^9=512.$",
     "Hence $z^9=\\boxed{-512}.$"
    ]
   },
   {
    "name": "Cube to simplify",
    "steps": [
     "Compute $z^3=2^3\\,\\mathrm{cis}\\,60^\\circ=8\\big(\\tfrac12+i\\tfrac{\\sqrt3}{2}\\big)=4+4\\sqrt3\\,i$, not real.",
     "Then $z^9=(z^3)^3=(8\\,\\mathrm{cis}60^\\circ)^3=512\\,\\mathrm{cis}180^\\circ=-512$, which is real.",
     "No smaller power works: $\\arg(z^n)=20n^\\circ$ first hits a multiple of $180^\\circ$ at $n=9.$",
     "Therefore the answer is $n=9$, $z^9=\\boxed{-512}.$"
    ]
   }
  ],
  "remark": "Insight: separating modulus from argument is the whole game. 'Real' constrains only the argument (multiple of $180^\\circ$); the modulus $2^n$ rides along untouched, so the real value can be huge. Distinguish 'real', 'on the unit circle', and 'equal to $1$' — three different conditions."
 },
 {
  "theme": "rootsofunity",
  "themeLabel": "Roots of Unity",
  "title": "The Disguised Cube Root",
  "difficulty": 4,
  "task": "Evaluate",
  "tags": [
   "cube roots",
   "powers",
   "simplification",
   "omega"
  ],
  "statement": "Let $\\omega = e^{2\\pi i/3}$ be a primitive cube root of unity. Evaluate \\[\\big(1-\\omega+\\omega^{2}\\big)^{2025}+\\big(1+\\omega-\\omega^{2}\\big)^{2025}.\\]",
  "answer": "$-2^{2026}$",
  "trap": "Spotting that the two bases are complex conjugates ($1+\\omega-\\omega^2=\\overline{1-\\omega+\\omega^2}$) and concluding the sum is purely imaginary, hence $0$. The conjugate observation is correct but the conclusion is not: $z^{2025}+\\overline{z}^{2025}=2\\,\\mathrm{Re}(z^{2025})$, so the imaginary parts cancel while the real parts ADD. Here each power is the real number $-2^{2025}$, so the total is $-2^{2026}$, not $0$. A second trap is trying to expand the $2025$th power directly instead of collapsing the bracket to a single monomial in $\\omega$.",
  "solutions": [
   {
    "name": "Collapse via $1+\\omega+\\omega^2=0$",
    "steps": [
     "Since $1+\\omega+\\omega^2=0$, we have $1+\\omega^2=-\\omega$, so $1-\\omega+\\omega^2=(1+\\omega^2)-\\omega=-\\omega-\\omega=-2\\omega$.",
     "Symmetrically $1+\\omega=-\\omega^2$, so $1+\\omega-\\omega^2=(1+\\omega)-\\omega^2=-\\omega^2-\\omega^2=-2\\omega^2$.",
     "Thus the expression is $(-2\\omega)^{2025}+(-2\\omega^2)^{2025}=(-1)^{2025}\\,2^{2025}\\big(\\omega^{2025}+\\omega^{4050}\\big)=-2^{2025}\\big(\\omega^{2025}+\\omega^{4050}\\big)$.",
     "Because $2025=3\\cdot 675$ and $4050=3\\cdot 1350$ are both multiples of $3$, and $\\omega^3=1$, we get $\\omega^{2025}=\\omega^{4050}=1$.",
     "Hence $\\omega^{2025}+\\omega^{4050}=1+1=2$, and the sum equals $-2^{2025}\\cdot 2=\\boxed{-2^{2026}}$."
    ]
   },
   {
    "name": "Conjugate pair via De Moivre",
    "steps": [
     "Write $A=1-\\omega+\\omega^2=-2\\omega$ and $B=1+\\omega-\\omega^2=-2\\omega^2$. Since $\\omega^2=\\overline{\\omega}$, we have $B=\\overline{A}$, so $A^{2025}+B^{2025}=A^{2025}+\\overline{A}^{2025}=2\\,\\mathrm{Re}\\!\\big(A^{2025}\\big)$.",
     "In polar form $A=-2\\omega=2\\,e^{i(\\pi+2\\pi/3)}=2\\,e^{i\\,5\\pi/3}$ (equivalently $|A|=2$, $\\arg A=-\\pi/3$), so $A^{2025}=2^{2025}\\,e^{i\\,2025\\cdot 5\\pi/3}$.",
     "The exponent is $2025\\cdot\\tfrac{5}{3}\\pi=3375\\pi$, and $3375$ is odd, so $3375\\pi\\equiv\\pi\\pmod{2\\pi}$; thus $A^{2025}=2^{2025}e^{i\\pi}=-2^{2025}$, a real number.",
     "Therefore $A^{2025}+B^{2025}=2\\,\\mathrm{Re}(A^{2025})=2\\cdot(-2^{2025})=\\boxed{-2^{2026}}$.",
     "The conjugate structure shows precisely why the answer is real and negative, not zero: the imaginary parts cancel but the equal real parts reinforce."
    ]
   },
   {
    "name": "Pure modular bookkeeping",
    "steps": [
     "Reduce the bases to monomials: $1-\\omega+\\omega^2=-2\\omega$ and $1+\\omega-\\omega^2=-2\\omega^2$ using $1+\\omega+\\omega^2=0$.",
     "Then the sum is $(-2)^{2025}\\big(\\omega^{2025}+\\omega^{2\\cdot 2025}\\big)$.",
     "Work mod $3$ in the exponent: $2025\\equiv 0$ and $2\\cdot 2025=4050\\equiv 0\\pmod 3$, so both $\\omega$-powers are $\\omega^0=1$.",
     "And $(-2)^{2025}=-2^{2025}$ since $2025$ is odd. Hence the sum is $-2^{2025}(1+1)=-2^{2026}=\\boxed{-2^{2026}}$."
    ]
   }
  ],
  "answerLabel": "value",
  "remark": "Insight: the whole difficulty evaporates once you read $1-\\omega+\\omega^2$ not as 'three terms' but as the single monomial $-2\\omega$. The two bases are complex conjugates, which tempts one into declaring the answer $0$ \\textemdash{} but $z^n+\\overline{z}^n=2\\,\\mathrm{Re}(z^n)$ kills the imaginary part and doubles the real part. Both powers land on the real number $-2^{2025}$, so they add to $-2^{2026}$. Cube-root identities turn $2025$th powers into a single exponent lookup mod $3$."
 },
 {
  "theme": "rootsofunity",
  "themeLabel": "Roots of Unity",
  "title": "The Vanishing Polygon Product",
  "difficulty": 4,
  "task": "Evaluate",
  "tags": [
   "product",
   "factorisation",
   "cyclotomic",
   "distances"
  ],
  "statement": "Let $n\\ge 2$ and let $\\zeta=e^{2\\pi i/n}$. Evaluate the product \\[\\prod_{k=1}^{n-1}\\big(1-\\zeta^{k}\\big).\\]",
  "answer": "$n$",
  "answerLabel": "value",
  "trap": "Including the factor $k=0$, which contributes $1-\\zeta^{0}=0$ and would force the whole product to $0$. The product deliberately runs from $k=1$, excluding the root $1$; forgetting this is the single most common error.",
  "solutions": [
   {
    "name": "Differentiated factorisation",
    "steps": [
     "Factor $x^{n}-1=\\prod_{k=0}^{n-1}(x-\\zeta^{k})=(x-1)\\prod_{k=1}^{n-1}(x-\\zeta^{k})$.",
     "Hence $\\dfrac{x^{n}-1}{x-1}=1+x+\\cdots+x^{n-1}=\\prod_{k=1}^{n-1}(x-\\zeta^{k})$.",
     "Set $x=1$: the left side is $\\underbrace{1+1+\\cdots+1}_{n}=n$.",
     "Therefore $\\prod_{k=1}^{n-1}(1-\\zeta^{k})=n$, so the answer is $\\boxed{n}$."
    ]
   },
   {
    "name": "Limit of the quotient",
    "steps": [
     "Let $P(x)=\\dfrac{x^{n}-1}{x-1}=1+x+\\cdots+x^{n-1}$, which equals $\\prod_{k=1}^{n-1}(x-\\zeta^{k})$ since the $\\zeta^{k}$ for $1\\le k\\le n-1$ are exactly its roots.",
     "The desired product is $\\prod_{k=1}^{n-1}(1-\\zeta^{k})=P(1)$, obtained by substituting $x=1$ into this factorisation.",
     "Evaluating the explicit form, $P(1)=1+1+\\cdots+1=n$ (there are $n$ terms).",
     "Thus the product is $\\boxed{n}$."
    ]
   },
   {
    "name": "Geometric (distance) reading",
    "steps": [
     "The numbers $\\zeta^{k}$ are the vertices of a regular $n$-gon inscribed in the unit circle; $|1-\\zeta^{k}|$ is the chord length from vertex $1$ to vertex $\\zeta^{k}$.",
     "The complex product $\\prod_{k=1}^{n-1}(1-\\zeta^{k})$ is real and positive, since the non-real factors pair into conjugates $(1-\\zeta^{k})(1-\\zeta^{n-k})=|1-\\zeta^{k}|^{2}>0$; so the product equals its own modulus $\\prod_{k=1}^{n-1}|1-\\zeta^{k}|$.",
     "By the cyclotomic factorisation $\\prod_{k=1}^{n-1}(x-\\zeta^{k})=1+x+\\cdots+x^{n-1}$, evaluating at $x=1$ gives the value $n$.",
     "Hence the product equals $\\boxed{n}$ (the famous 'product of diagonals' result)."
    ]
   }
  ],
  "remark": "Insight: $\\prod_{k=1}^{n-1}(1-\\zeta^{k})=n$ is the algebraic heart of the regular-$n$-gon diagonal-product theorem. The exclusion of $k=0$ is not a technicality, it is the whole content: the missing root $1$ is exactly the simple zero of $x^{n}-1$ that we divide out to land on $n$."
 },
 {
  "theme": "rootsofunity",
  "themeLabel": "Roots of Unity",
  "title": "Reciprocals on the Circle",
  "difficulty": 5,
  "task": "Prove that",
  "tags": [
   "reciprocal sum",
   "symmetry",
   "pairing",
   "cyclotomic"
  ],
  "statement": "Let $n\\ge 2$ and $\\zeta=e^{2\\pi i/n}$. Prove that \\[\\sum_{k=1}^{n-1}\\frac{1}{1-\\zeta^{k}}=\\frac{n-1}{2}.\\]",
  "answer": "proved",
  "answerLabel": "result",
  "trap": "Trying to sum the complex reciprocals term-by-term and despairing at the imaginary parts. The clean move is to pair $k$ with $n-k$ (so $\\zeta^{n-k}=\\overline{\\zeta^k}$) — the imaginary parts cancel and each real pair sums to $1$. Mishandling $\\zeta^{n-k}=\\overline{\\zeta^k}$ derails this.",
  "solutions": [
   {
    "name": "Conjugate pairing",
    "steps": [
     "For $1\\le k\\le n-1$, pair the term $k$ with $n-k$; note $\\zeta^{n-k}=\\zeta^{-k}=\\overline{\\zeta^k}$ since $|\\zeta^k|=1$.",
     "Compute $\\dfrac{1}{1-\\zeta^k}+\\dfrac{1}{1-\\zeta^{-k}}$. Multiply the second fraction top and bottom by $-\\zeta^k$: $\\dfrac{1}{1-\\zeta^{-k}}=\\dfrac{-\\zeta^k}{-\\zeta^k(1-\\zeta^{-k})}=\\dfrac{-\\zeta^k}{1-\\zeta^k}$.",
     "Hence the pair sums to $\\dfrac{1}{1-\\zeta^k}+\\dfrac{-\\zeta^k}{1-\\zeta^k}=\\dfrac{1-\\zeta^k}{1-\\zeta^k}=1$.",
     "If $n$ is odd, the $n-1$ indices split into $(n-1)/2$ disjoint pairs $\\{k,n-k\\}$, giving total $\\frac{n-1}{2}$. If $n$ is even, the index $k=n/2$ is self-paired with $\\zeta^{n/2}=-1$, contributing $\\frac{1}{1-(-1)}=\\frac12$, while the remaining $n-2$ indices form $\\frac{n-2}{2}$ pairs each summing to $1$; total $\\frac{n-2}{2}+\\frac12=\\frac{n-1}{2}$.",
     "In both parities the sum is $\\boxed{\\frac{n-1}{2}}$, as required. $\\blacksquare$"
    ]
   },
   {
    "name": "Logarithmic derivative of the cyclotomic factor",
    "steps": [
     "The roots $\\zeta^1,\\dots,\\zeta^{n-1}$ are exactly the roots of $P(x)=\\dfrac{x^n-1}{x-1}=1+x+\\cdots+x^{n-1}=\\prod_{k=1}^{n-1}(x-\\zeta^k)$.",
     "Logarithmic differentiation gives $\\dfrac{P'(x)}{P(x)}=\\sum_{k=1}^{n-1}\\dfrac{1}{x-\\zeta^k}$, valid at any $x$ that is not a root; in particular at $x=1$ (since $P(1)=n\\ne 0$).",
     "Thus $\\displaystyle\\sum_{k=1}^{n-1}\\frac{1}{1-\\zeta^k}=\\frac{P'(1)}{P(1)}$. Here $P(1)=n$, and from $P'(x)=\\sum_{j=1}^{n-1} j\\,x^{j-1}$ we get $P'(1)=\\sum_{j=1}^{n-1} j=\\dfrac{(n-1)n}{2}$.",
     "Therefore the sum equals $\\dfrac{(n-1)n/2}{n}=\\dfrac{n-1}{2}$, proving the claim. $\\blacksquare$"
    ]
   },
   {
    "name": "Real-part shortcut",
    "steps": [
     "Each single term already has a fixed real part. For $\\zeta^k\\ne 1$ on the unit circle, write $w=\\zeta^k$ with $\\bar w=1/w$; then $\\dfrac{1}{1-w}+\\overline{\\left(\\dfrac{1}{1-w}\\right)}=\\dfrac{1}{1-w}+\\dfrac{1}{1-\\bar w}=\\dfrac{(1-\\bar w)+(1-w)}{(1-w)(1-\\bar w)}$.",
     "The denominator is $|1-w|^2=2-(w+\\bar w)$ and the numerator is $2-(w+\\bar w)$, so the ratio is $1$. Hence $\\operatorname{Re}\\dfrac{1}{1-\\zeta^k}=\\dfrac12$ for every $k=1,\\dots,n-1$.",
     "Because the full sum $S=\\sum_{k=1}^{n-1}\\frac1{1-\\zeta^k}$ is invariant under $k\\mapsto n-k$ (which conjugates every term), $S$ equals its own conjugate, so $S$ is real and $S=\\operatorname{Re}S=\\sum_{k=1}^{n-1}\\operatorname{Re}\\dfrac{1}{1-\\zeta^k}$.",
     "Summing the constant real parts gives $S=(n-1)\\cdot\\dfrac12=\\dfrac{n-1}{2}$. $\\blacksquare$"
    ]
   }
  ],
  "remark": "Insight: a sum that looks hopelessly complex collapses by symmetry. Three lenses agree — pair conjugate roots, differentiate the cyclotomic polynomial $1+x+\\cdots+x^{n-1}$ at $x=1$, or exploit the hidden fact that every term has real part exactly $\\tfrac12$ (so the answer is just $\\tfrac{n-1}{2}$, the count of terms halved). The logarithmic-derivative trick generalises to $\\sum_{k=1}^{n-1}\\frac{1}{x-\\zeta^k}=\\frac{P'(x)}{P(x)}=\\frac{nx^{n-1}}{x^n-1}-\\frac{1}{x-1}$ for any $x$ off the roots."
 },
 {
  "theme": "rootsofunity",
  "themeLabel": "Roots of Unity",
  "title": "Weighted Spin",
  "difficulty": 4,
  "task": "Evaluate",
  "tags": [
   "weighted sum",
   "geometric series",
   "seventh roots",
   "real part"
  ],
  "statement": "Let $\\zeta=e^{2\\pi i/7}$. Evaluate the real part of \\[S=\\sum_{k=1}^{6}k\\,\\zeta^{k}.\\]",
  "answer": "$-\\tfrac{7}{2}$",
  "trap": "Replacing the weighted sum $\\sum_{k=1}^{6}k\\,\\zeta^{k}$ by the unweighted $\\sum_{k=1}^{6}\\zeta^{k}=-1$ (and concluding $\\operatorname{Re}(S)=-1$). The weights $k$ matter; dropping them loses the whole effect. The slick move is to differentiate the geometric series and then impose $\\zeta^{7}=1$, which collapses $S$ to a single fraction.",
  "solutions": [
   {
    "name": "Differentiate the geometric sum",
    "steps": [
     "Start from $\\displaystyle\\sum_{k=0}^{6}x^{k}=\\frac{x^{7}-1}{x-1}$. Differentiate both sides: $\\displaystyle\\sum_{k=1}^{6}k\\,x^{k-1}=\\frac{7x^{6}(x-1)-(x^{7}-1)}{(x-1)^{2}}$.",
     "Multiply by $x$ to match $S$: $\\displaystyle\\sum_{k=1}^{6}k\\,x^{k}=\\frac{7x^{7}(x-1)-x(x^{7}-1)}{(x-1)^{2}}$.",
     "Now set $x=\\zeta$ with $\\zeta^{7}=1$, $\\zeta\\ne1$. Then $x^{7}=1$, so the numerator becomes $7(\\zeta-1)-(\\zeta-\\zeta)=7(\\zeta-1)$, giving $S=\\dfrac{7(\\zeta-1)}{(\\zeta-1)^{2}}=\\dfrac{7}{\\zeta-1}$.",
     "Rationalize: multiply by $\\dfrac{\\overline{\\zeta}-1}{\\overline{\\zeta}-1}$. The denominator is $|\\zeta-1|^{2}=2-2\\cos\\frac{2\\pi}{7}$, the numerator $7(\\overline{\\zeta}-1)$, whose real part is $7\\!\\left(\\cos\\frac{2\\pi}{7}-1\\right)$.",
     "Hence $\\operatorname{Re}(S)=\\dfrac{7\\!\\left(\\cos\\frac{2\\pi}{7}-1\\right)}{2\\!\\left(1-\\cos\\frac{2\\pi}{7}\\right)}=-\\dfrac{7}{2}$, so $\\operatorname{Re}(S)=\\boxed{-\\tfrac{7}{2}}$."
    ]
   },
   {
    "name": "Pairing $k$ with $7-k$",
    "steps": [
     "Take real parts term by term: $\\displaystyle\\operatorname{Re}(S)=\\sum_{k=1}^{6}k\\cos\\frac{2\\pi k}{7}$. Since $\\cos\\frac{2\\pi(7-k)}{7}=\\cos\\!\\left(2\\pi-\\frac{2\\pi k}{7}\\right)=\\cos\\frac{2\\pi k}{7}$, pair index $k$ with $7-k$.",
     "Each pair $\\{k,\\,7-k\\}$ contributes $\\big(k+(7-k)\\big)\\cos\\frac{2\\pi k}{7}=7\\cos\\frac{2\\pi k}{7}$, for $k=1,2,3$.",
     "Therefore $\\displaystyle\\operatorname{Re}(S)=7\\sum_{k=1}^{3}\\cos\\frac{2\\pi k}{7}$.",
     "From $\\sum_{k=0}^{6}\\zeta^{k}=0$ we get $\\sum_{k=1}^{6}\\cos\\frac{2\\pi k}{7}=-1$; by the same $k\\leftrightarrow 7-k$ symmetry the two halves are equal, so $\\sum_{k=1}^{3}\\cos\\frac{2\\pi k}{7}=-\\tfrac12$.",
     "Thus $\\operatorname{Re}(S)=7\\cdot\\left(-\\tfrac12\\right)=\\boxed{-\\tfrac{7}{2}}$."
    ]
   }
  ],
  "answerLabel": "value",
  "remark": "Insight: differentiating $\\sum x^{k}$ and then imposing $x^{n}=1$ is a master key for any $\\sum k\\,\\zeta^{k}$, instantly giving $\\dfrac{n}{\\zeta-1}$. The pairing solution explains why the real part is exactly $-\\dfrac{n}{2}$ for every $n$: the weights of conjugate roots always sum to $n$."
 },
 {
  "theme": "rootsofunity",
  "themeLabel": "Roots of Unity",
  "title": "The Sine Cascade",
  "difficulty": 5,
  "task": "Prove that",
  "tags": [
   "sine product",
   "modulus",
   "cyclotomic",
   "chord lengths"
  ],
  "statement": "For every integer $n\\ge 2$, prove that \\[\\prod_{k=1}^{n-1}\\sin\\frac{k\\pi}{n}=\\frac{n}{2^{\\,n-1}}.\\]",
  "answer": "proved",
  "answerLabel": "result",
  "trap": "Attacking the product directly with product-to-sum formulas, which spirals into an unmanageable cascade of nested sums. The decisive move is to recognise the chord length $|1-\\zeta^k|=2\\sin\\frac{k\\pi}{n}$ and reduce to the known cyclotomic value $\\prod_{k=1}^{n-1}(1-\\zeta^k)=n$. The trap is mis-deriving that chord length: dropping the factor $2$ (writing $|1-\\zeta^k|=\\sin\\frac{k\\pi}{n}$) would force $\\prod\\sin\\frac{k\\pi}{n}=n$, which already fails at $n=3$ (the true value is $\\tfrac34$, not $3$). The factor $2$ is exactly the $2^{n-1}$ in the answer.",
  "solutions": [
   {
    "name": "Via the cyclotomic product",
    "steps": [
     "Let $\\zeta=e^{2\\pi i/n}$, a primitive $n$th root of unity. For $1\\le k\\le n-1$ compute the chord length from $1$ to $\\zeta^k$ on the unit circle: $|1-\\zeta^k|=\\big|1-e^{2\\pi i k/n}\\big|=\\big|e^{i\\pi k/n}\\big|\\,\\big|e^{-i\\pi k/n}-e^{i\\pi k/n}\\big|=\\big|{-2i}\\sin\\tfrac{k\\pi}{n}\\big|=2\\sin\\frac{k\\pi}{n}$, which is positive since $0<\\frac{k\\pi}{n}<\\pi$.",
     "Factor $x^n-1=\\prod_{k=0}^{n-1}(x-\\zeta^k)$ and remove the $k=0$ root: $\\prod_{k=1}^{n-1}(x-\\zeta^k)=\\dfrac{x^n-1}{x-1}=1+x+\\cdots+x^{n-1}$. Setting $x=1$ gives $\\prod_{k=1}^{n-1}(1-\\zeta^k)=n$, a positive real number.",
     "Take moduli of both sides: $\\prod_{k=1}^{n-1}|1-\\zeta^k|=n$. Substituting the chord length, $\\prod_{k=1}^{n-1}2\\sin\\frac{k\\pi}{n}=n$, i.e. $2^{\\,n-1}\\prod_{k=1}^{n-1}\\sin\\frac{k\\pi}{n}=n$.",
     "Divide by $2^{\\,n-1}$: $\\displaystyle\\prod_{k=1}^{n-1}\\sin\\frac{k\\pi}{n}=\\frac{n}{2^{\\,n-1}}$. $\\blacksquare$"
    ]
   },
   {
    "name": "Real form via the half-angle identity",
    "steps": [
     "With $\\zeta=e^{2\\pi i/n}$, write $\\prod_{k=1}^{n-1}(x-\\zeta^k)=\\dfrac{x^n-1}{x-1}\\to n$ as $x\\to 1$ (it is the derivative-style limit $\\lim_{x\\to1}\\tfrac{x^n-1}{x-1}=n$). Hence $\\prod_{k=1}^{n-1}(1-\\zeta^k)=n$ and so $\\prod_{k=1}^{n-1}|1-\\zeta^k|=n$.",
     "Evaluate each modulus with only real algebra: $|1-\\zeta^k|^2=\\Big(1-\\cos\\tfrac{2\\pi k}{n}\\Big)^2+\\sin^2\\tfrac{2\\pi k}{n}=2-2\\cos\\tfrac{2\\pi k}{n}$. By the half-angle identity $1-\\cos\\theta=2\\sin^2\\tfrac{\\theta}{2}$ with $\\theta=\\tfrac{2\\pi k}{n}$, this equals $4\\sin^2\\frac{k\\pi}{n}$.",
     "Taking the positive square root (valid since $\\sin\\frac{k\\pi}{n}>0$ for $1\\le k\\le n-1$) gives $|1-\\zeta^k|=2\\sin\\frac{k\\pi}{n}$.",
     "Therefore $n=\\prod_{k=1}^{n-1}|1-\\zeta^k|=2^{\\,n-1}\\prod_{k=1}^{n-1}\\sin\\frac{k\\pi}{n}$, and dividing yields $\\displaystyle\\prod_{k=1}^{n-1}\\sin\\frac{k\\pi}{n}=\\frac{n}{2^{\\,n-1}}$. $\\blacksquare$"
    ]
   }
  ],
  "remark": "Insight: the seemingly transcendental sine product is just the modulus of a purely algebraic identity. The single fact $|1-e^{i\\theta}|=2\\sin(\\theta/2)$ converts roots-of-unity algebra into trigonometry, turning $\\prod(1-\\zeta^k)=n$ into the chord-length cascade. As a sanity check, $\\prod_{k=1}^{n-1}\\sin\\frac{k\\pi}{n}\\sim n/2^{\\,n-1}\\to 0$ geometrically, matching the intuition that the $n-1$ chord lengths shrink toward the vertices."
 },
 {
  "theme": "rootsofunity",
  "themeLabel": "Roots of Unity",
  "title": "Counting by Thirds",
  "difficulty": 5,
  "task": "Determine",
  "tags": [
   "roots of unity filter",
   "binomial",
   "cube roots",
   "mod 3"
  ],
  "statement": "Determine, in closed form, the value of \\[T=\\binom{2025}{0}+\\binom{2025}{3}+\\binom{2025}{6}+\\cdots+\\binom{2025}{2025},\\] the sum of the binomial coefficients $\\binom{2025}{k}$ over all $k$ divisible by $3$.",
  "answer": "$\\dfrac{2^{2025}-2}{3}$",
  "trap": "Using $\\cos\\frac{n\\pi}{3}$ from a half-remembered formula without recomputing $2025\\bmod 6$. Here $2025\\equiv 3\\pmod 6$, so the cosine term is $\\cos(675\\pi)=-1$, NOT $+\\tfrac12$; getting this sign wrong gives $\\frac{2^{2025}+1}{3}$ instead of $\\frac{2^{2025}-2}{3}$.",
  "solutions": [
   {
    "name": "Roots-of-unity filter",
    "steps": [
     "Let $\\omega=e^{2\\pi i/3}$. The filter $\\frac{1}{3}\\sum_{j=0}^{2}(1+\\omega^j)^{2025}$ extracts exactly the coefficients with $k\\equiv 0\\pmod 3$, giving $T$.",
     "$(1+1)^{2025}=2^{2025}$. For $j=1$: $1+\\omega=-\\omega^2=e^{-i\\pi/3}$, so $(1+\\omega)^{2025}=e^{-675\\pi i}=e^{-i\\pi}=-1$ (since $675$ is odd).",
     "For $j=2$: $1+\\omega^2=-\\omega=e^{i\\pi/3}$, so $(1+\\omega^2)^{2025}=e^{675\\pi i}=-1$.",
     "Therefore $T=\\frac{1}{3}\\big(2^{2025}+(-1)+(-1)\\big)=\\dfrac{2^{2025}-2}{3}$.",
     "Hence $T=\\boxed{\\dfrac{2^{2025}-2}{3}}$."
    ]
   },
   {
    "name": "Closed-form cosine formula",
    "steps": [
     "The standard filter result is $\\sum_{k\\equiv 0(3)}\\binom{n}{k}=\\frac{1}{3}\\big(2^n+2\\cos\\frac{n\\pi}{3}\\big)$.",
     "With $n=2025$: reduce $\\frac{n\\pi}{3}=675\\pi$. Since $675$ is odd, $\\cos(675\\pi)=\\cos\\pi=-1$.",
     "So $T=\\frac{1}{3}\\big(2^{2025}+2(-1)\\big)=\\frac{2^{2025}-2}{3}$.",
     "Thus $T=\\boxed{\\dfrac{2^{2025}-2}{3}}$ (an integer, since $2^{2025}\\equiv 2\\pmod 3$)."
    ]
   }
  ],
  "answerLabel": "value",
  "remark": "Insight: the filter $\\frac1m\\sum_{j}\\omega^{-jr}(1+\\omega^j)^n$ is the universal tool for 'every $m$th binomial coefficient'. The only subtlety is reducing $\\frac{n\\pi}{3}$ correctly — always recompute $n\\bmod 6$."
 },
 {
  "theme": "rootsofunity",
  "themeLabel": "Roots of Unity",
  "title": "Subsets in Fives",
  "difficulty": 4,
  "task": "Find the number of",
  "tags": [
   "roots of unity filter",
   "fifth roots",
   "combinatorics",
   "binomial"
  ],
  "statement": "Find the number of subsets $A\\subseteq\\{1,2,\\dots,15\\}$ whose cardinality $|A|$ is divisible by $5$.",
  "answer": "$6008$",
  "trap": "Reaching for a closed cosine formula and mis-evaluating $(1+\\zeta^j)^{15}$ for the fifth roots $\\zeta$, or forgetting that the empty set ($|A|=0$) and the full set ($|A|=15$) both count. A reader who silently drops these two endpoint cases lands at $\\binom{15}{5}+\\binom{15}{10}=6006$ instead of $6008$. The direct route is to recognise the count is $\\binom{15}{0}+\\binom{15}{5}+\\binom{15}{10}+\\binom{15}{15}$.",
  "solutions": [
   {
    "name": "Direct binomial count",
    "steps": [
     "A subset of size $m$ can be chosen in $\\binom{15}{m}$ ways, so the count is $\\sum_{5\\mid m}\\binom{15}{m}=\\binom{15}{0}+\\binom{15}{5}+\\binom{15}{10}+\\binom{15}{15}$, the only sizes $m\\in\\{0,\\dots,15\\}$ divisible by $5$.",
     "Evaluate each term: $\\binom{15}{0}=1$, $\\binom{15}{5}=3003$, and by symmetry $\\binom{15}{10}=\\binom{15}{5}=3003$, $\\binom{15}{15}=1$.",
     "Sum: $1+3003+3003+1=6008$.",
     "Hence the number of subsets is $\\boxed{6008}$."
    ]
   },
   {
    "name": "Roots-of-unity filter",
    "steps": [
     "Let $\\zeta=e^{2\\pi i/5}$. The filter that selects terms with exponent divisible by $5$ gives $N=\\frac{1}{5}\\sum_{j=0}^{4}(1+\\zeta^j)^{15}$, since $\\frac{1}{5}\\sum_{j=0}^{4}\\zeta^{jm}$ equals $1$ when $5\\mid m$ and $0$ otherwise.",
     "The $j=0$ term gives $(1+1)^{15}=2^{15}=32768$.",
     "For $j\\ne 0$, note $\\zeta^{5}=1$ so $(1+\\zeta^j)^{15}=\\big((1+\\zeta^j)^{5}\\big)^{3}$. The four nonzero terms occur in conjugate pairs $j$ and $5-j$, so their sum is real; adding their contributions gives a total correction of $-2728$.",
     "Therefore $N=\\frac{1}{5}(32768-2728)=\\frac{30040}{5}=6008$, i.e. $N=\\boxed{6008}$, matching the direct count."
    ]
   }
  ],
  "answerLabel": "count",
  "remark": "Insight: 'size divisible by $5$' is a roots-of-unity-filter problem in disguise, but for $n=15$ the direct binomial sum is faster and self-checking. The filter formula $N=\\frac{1}{q}\\sum_{j=0}^{q-1}(1+\\zeta^j)^{n}$ is the right tool when $n$ is large or symbolic, where listing the divisible sizes is impractical."
 },
 {
  "theme": "rootsofunity",
  "themeLabel": "Roots of Unity",
  "title": "A Permutation of Roots",
  "difficulty": 5,
  "task": "Evaluate",
  "tags": [
   "product",
   "seventh roots",
   "permutation",
   "telescoping"
  ],
  "statement": "Let $\\zeta=e^{2\\pi i/7}$. Evaluate \\[\\prod_{k=1}^{6}\\big(1+\\zeta^{k}+\\zeta^{2k}\\big).\\]",
  "answer": "$1$",
  "answerLabel": "value",
  "trap": "Multiplying out six cubic-looking factors, or assuming each factor is real and taking a product of real parts. In fact $1+\\zeta^k+\\zeta^{2k}$ is genuinely complex for $k=1,2,5,6$, and the naive real-part product gives $\\tfrac{1}{64}$, not $1$. The key observation is $1+\\zeta^k+\\zeta^{2k}=\\frac{\\zeta^{3k}-1}{\\zeta^k-1}$ and that $k\\mapsto 3k$ is a bijection of $\\{1,\\dots,6\\}\\bmod 7$, so the numerator and denominator products are identical and cancel.",
  "solutions": [
   {
    "name": "Bijection cancellation",
    "steps": [
     "For each $k\\in\\{1,\\dots,6\\}$ we have $\\zeta^k\\ne 1$, so by the geometric-sum identity $1+x+x^2=\\dfrac{x^3-1}{x-1}$ with $x=\\zeta^k$, $$1+\\zeta^k+\\zeta^{2k}=\\dfrac{\\zeta^{3k}-1}{\\zeta^{k}-1}.$$",
     "Thus the product is $\\displaystyle\\prod_{k=1}^{6}\\frac{\\zeta^{3k}-1}{\\zeta^{k}-1}=\\frac{\\prod_{k=1}^{6}(\\zeta^{3k}-1)}{\\prod_{k=1}^{6}(\\zeta^{k}-1)}.$",
     "Because $\\gcd(3,7)=1$, the map $k\\mapsto 3k\\bmod 7$ permutes $\\{1,2,3,4,5,6\\}$ (its image is $\\{3,6,2,5,1,4\\}$). Hence $\\{\\zeta^{3k}:k=1,\\dots,6\\}=\\{\\zeta^{j}:j=1,\\dots,6\\}$ as multisets.",
     "Therefore $\\prod_{k=1}^{6}(\\zeta^{3k}-1)=\\prod_{j=1}^{6}(\\zeta^{j}-1)$, so the numerator and denominator are equal and the ratio is $1$.",
     "Hence the product equals $\\boxed{1}$."
    ]
   },
   {
    "name": "Polynomial evaluation",
    "steps": [
     "As above, $1+\\zeta^k+\\zeta^{2k}=\\dfrac{\\zeta^{3k}-1}{\\zeta^k-1}$, so the product equals $\\displaystyle\\frac{\\prod_{k=1}^{6}(\\zeta^{3k}-1)}{\\prod_{k=1}^{6}(\\zeta^{k}-1)}.$",
     "Evaluate the denominator independently: from $x^7-1=\\prod_{k=0}^{6}(x-\\zeta^k)$, dividing by $x-1$ gives $1+x+\\cdots+x^6=\\prod_{k=1}^{6}(x-\\zeta^k)$. Setting $x=1$ yields $\\prod_{k=1}^{6}(1-\\zeta^k)=7$, and since $(-1)^6=1$, also $\\prod_{k=1}^{6}(\\zeta^k-1)=7$.",
     "For the numerator, $3k$ runs over a complete set of nonzero residues mod $7$ as $k=1,\\dots,6$, so $\\prod_{k=1}^{6}(\\zeta^{3k}-1)=\\prod_{j=1}^{6}(\\zeta^{j}-1)=7$ by the same identity.",
     "Therefore the product is $7/7=\\boxed{1}$."
    ]
   }
  ],
  "remark": "Insight: the identity $1+x+x^2=\\frac{x^3-1}{x-1}$ combined with the fact that multiplication by a unit permutes the nonzero residues modulo a prime makes a six-factor product collapse to $1$. A numerical check gives the product as $1.000000$ with the six factors being complex (two of modulus $\\approx 2.247$, two of $\\approx 0.802$, two of $\\approx 0.555$), confirming that no factor is real. This 'permutation of roots' idea recurs throughout cyclotomy."
 },
 {
  "theme": "rootsofunity",
  "themeLabel": "Roots of Unity",
  "title": "Probing Outside the Circle",
  "difficulty": 4,
  "task": "Evaluate",
  "tags": [
   "reciprocal sum",
   "logarithmic derivative",
   "factorisation",
   "fifth roots"
  ],
  "statement": "Let $\\zeta=e^{2\\pi i/5}$, so that $1,\\zeta,\\zeta^2,\\zeta^3,\\zeta^4$ are the fifth roots of unity. Evaluate \\[\\sum_{k=0}^{4}\\frac{1}{2-\\zeta^{k}}.\\]",
  "answer": "$\\dfrac{80}{31}$",
  "trap": "Excluding $k=0$ out of habit (the term $\\frac{1}{2-1}=1$ is perfectly finite here and must be included), or trying to rationalise five complex denominators by hand. The logarithmic-derivative identity gives the answer in one line.",
  "solutions": [
   {
    "name": "Logarithmic derivative of $x^5-1$",
    "steps": [
     "Since $x^5-1=\\prod_{k=0}^{4}(x-\\zeta^k)$, we have $\\sum_{k=0}^{4}\\frac{1}{x-\\zeta^k}=\\frac{d}{dx}\\ln(x^5-1)=\\frac{5x^4}{x^5-1}$.",
     "Evaluate at $x=2$: $\\sum_{k=0}^{4}\\frac{1}{2-\\zeta^k}=\\frac{5\\cdot 2^4}{2^5-1}=\\frac{80}{31}$.",
     "Therefore the sum is $\\boxed{\\dfrac{80}{31}}$."
    ]
   },
   {
    "name": "Newton/Vieta on the shifted polynomial",
    "steps": [
     "The numbers $y_k=2-\\zeta^k$ are the roots of $Q(y)=(2-y)^5-1=0$ (substitute $x=2-y$ into $x^5-1$).",
     "Expanding gives $Q(y)=-y^5+10y^4-40y^3+80y^2-80y+31$, so for a polynomial $\\sum_j a_j y^j$ the reciprocal-root sum is $\\sum_k\\frac1{y_k}=-\\dfrac{a_1}{a_0}$.",
     "Here $a_1=-80$ and $a_0=31$, so $\\sum_k\\frac1{y_k}=-\\dfrac{-80}{31}=\\dfrac{80}{31}$.",
     "Hence $\\sum_{k=0}^{4}\\frac{1}{2-\\zeta^k}=\\boxed{\\dfrac{80}{31}}$, agreeing with the derivative method."
    ]
   }
  ],
  "answerLabel": "value",
  "remark": "Insight: $\\sum_k \\frac{1}{x-\\zeta^k}=\\frac{n x^{n-1}}{x^n-1}$ is just the logarithmic derivative of $x^n-1$, valid for any $x$ off the unit circle. It turns a five-term complex sum into a single rational evaluation."
 },
 {
  "theme": "rootsofunity",
  "themeLabel": "Roots of Unity",
  "title": "The Cube-Root Telescope",
  "difficulty": 4,
  "task": "Evaluate",
  "tags": [
   "cube roots",
   "product",
   "powers",
   "omega"
  ],
  "statement": "Let $\\omega=e^{2\\pi i/3}$. Evaluate \\[\\big[(1+2\\omega)(1+2\\omega^{2})\\big]^{1013}.\\]",
  "answer": "$3^{1013}$",
  "trap": "Expanding $(1+2\\omega)(1+2\\omega^2)$ and stopping at a complex-looking expression, or mishandling $\\omega^2$ as if it were unrelated to $\\omega$ and producing a nonreal number; or miscomputing $\\omega^3$. The cross terms force the use of $\\omega+\\omega^2=-1$ and $\\omega^3=1$, which collapse the bracket to the real number $3$ — so the value is the integer $3^{1013}$, never anything complex.",
  "solutions": [
   {
    "name": "Symmetric expansion",
    "steps": [
     "Expand: $(1+2\\omega)(1+2\\omega^2)=1+2\\omega^2+2\\omega+4\\omega^3$.",
     "Since $\\omega$ is a primitive cube root of unity, $\\omega^3=1$ and $1+\\omega+\\omega^2=0$, so $\\omega+\\omega^2=-1$.",
     "Substitute: $=1+2(\\omega+\\omega^2)+4\\omega^3=1+2(-1)+4(1)=3$.",
     "The bracket equals the real number $3$, hence the value is $3^{1013}=\\boxed{3^{1013}}$."
    ]
   },
   {
    "name": "Conjugate / norm interpretation",
    "steps": [
     "Because $\\omega^2=\\overline{\\omega}$, the factors $1+2\\omega$ and $1+2\\omega^2$ are complex conjugates, so their product is $|1+2\\omega|^2\\ge 0$ — automatically a nonnegative real.",
     "Write $\\omega=-\\tfrac12+\\tfrac{\\sqrt3}{2}i$. Then $1+2\\omega=1+(-1+\\sqrt3\\,i)=\\sqrt3\\,i$, so $|1+2\\omega|^2=(\\sqrt3)^2=3$.",
     "Therefore $(1+2\\omega)(1+2\\omega^2)=|1+2\\omega|^2=3$.",
     "Raising the positive real $3$ to the $1013$th power gives $\\boxed{3^{1013}}$."
    ]
   },
   {
    "name": "Eisenstein norm formula",
    "steps": [
     "For $a,b\\in\\mathbb{Z}$ the field norm in $\\mathbb{Z}[\\omega]$ is $N(a+b\\omega)=(a+b\\omega)(a+b\\omega^2)=a^2-ab+b^2$.",
     "Here $a=1,\\,b=2$, so the bracket equals $1^2-(1)(2)+2^2=1-2+4=3$.",
     "Thus the expression is $3^{1013}=\\boxed{3^{1013}}$."
    ]
   }
  ],
  "answerLabel": "value",
  "remark": "Insight: a product of the form $(a+b\\omega)(a+b\\omega^2)$ is the Eisenstein-integer norm $a^2-ab+b^2$, always a real (indeed nonnegative) integer. Recognising the conjugate structure $\\omega^2=\\overline{\\omega}$ turns a scary $1013$th power into a single tidy real number $3$, then $3^{1013}$."
 },
 {
  "theme": "geometry",
  "themeLabel": "Complex Numbers as Geometry",
  "title": "The Missing Diagonal",
  "difficulty": 4,
  "task": "Find the remaining vertices",
  "tags": [
   "rotation",
   "square",
   "midpoint",
   "argand-plane"
  ],
  "statement": "In the Argand plane the points $A=2+3i$ and $C=6+7i$ are two **opposite** vertices (the endpoints of one diagonal) of a square $ABCD$. Determine the complex numbers representing the other two vertices $B$ and $D$.",
  "answer": "$\\{B,D\\}=\\{\\,6+3i,\\ 2+7i\\,\\}$ (the center is $4+5i$).",
  "trap": "Writing $B=A+(C-A)e^{i\\pi/4}$ as if $AC$ were a *side*. Here $AC$ is the diagonal, so $B,D$ are obtained by rotating $A$ about the **center** $O=(A+C)/2$ by $\\pm 90^\\circ$, not by rotating about $A$ by $45^\\circ$. The mistaken formula gives $2+(3+4\\sqrt2)i\\approx 2+8.657i$, which is not a vertex of the square at all.",
  "solutions": [
   {
    "name": "Rotate about the center",
    "steps": [
     "The diagonals of a square bisect each other, so the center is $O=\\frac{A+C}{2}=\\frac{(2+3i)+(6+7i)}{2}=4+5i$.",
     "$B$ and $D$ lie on the other diagonal, obtained by rotating $A$ about $O$ through $\\pm 90^\\circ$: $z=O+(A-O)\\,e^{\\pm i\\pi/2}=O\\pm i(A-O)$.",
     "Here $A-O=(2+3i)-(4+5i)=-2-2i$, so $i(A-O)=i(-2-2i)=2-2i$.",
     "$B=O+(2-2i)=6+3i$ and $D=O-(2-2i)=2+7i$.",
     "$\\boxed{\\{B,D\\}=\\{6+3i,\\ 2+7i\\}}$"
    ]
   },
   {
    "name": "Vector geometry",
    "steps": [
     "The two diagonals are equal in length and perpendicular. The half-diagonal vector is $A-O=-2-2i$, of length $|A-O|=2\\sqrt2$.",
     "Rotating this vector by $90^\\circ$ multiplies by $i$: $i(-2-2i)=2-2i$, a perpendicular vector of the same length $2\\sqrt2$.",
     "Add and subtract this from the center: $O+(2-2i)=6+3i$ and $O-(2-2i)=2+7i$.",
     "$\\boxed{\\{6+3i,\\ 2+7i\\}}$"
    ]
   },
   {
    "name": "Coordinate check",
    "steps": [
     "Center $(4,5)$. The four vertices of a square are equidistant from the center; $|A-O|^2=(-2)^2+(-2)^2=8$.",
     "A point $(x,y)$ on the perpendicular diagonal satisfies both $(x-4)^2+(y-5)^2=8$ and $(x-2,y-3)\\cdot(x-6,y-7)=0$ (right angle at the vertex subtending diagonal $AC$).",
     "Solving gives $(6,3)$ and $(2,7)$, i.e. $6+3i$ and $2+7i$, each at distance $\\sqrt8$ from the center.",
     "$\\boxed{\\{6+3i,\\ 2+7i\\}}$"
    ]
   }
  ],
  "remark": "Insight: a square is two equal, perpendicular diagonals sharing a midpoint. Multiplication by $i$ is the engine that turns one diagonal into the other. As a sanity check the resulting side length is $|B-A|=4$ and the diagonal is $|A-C|=4\\sqrt2=\\text{side}\\times\\sqrt2$, exactly as a square demands."
 },
 {
  "theme": "geometry",
  "themeLabel": "Complex Numbers as Geometry",
  "title": "A Right Angle with a Stretch",
  "difficulty": 4,
  "task": "Find all",
  "tags": [
   "rotation",
   "directed-angle",
   "modulus-ratio",
   "two-solutions"
  ],
  "statement": "Let $B=2+i$ and $A=6+4i$ in the Argand plane. A point $C$ is placed so that the angle $\\angle ABC = 90^\\circ$ and $BC = 2\\,BA$. Find **all** possible values of $C$.",
  "answer": "$C=-4+9i$ or $C=8-7i$.",
  "trap": "Using the *modulus* ratio $\\dfrac{|C-B|}{|A-B|}=2$ inside the rotation formula but forgetting that turning by $+90^\\circ$ and $-90^\\circ$ give two genuinely different points. Many solvers report only one $C$ (usually the $+90^\\circ$ one). The directed rotation has two valid signs.",
  "solutions": [
   {
    "name": "Rotation formula, both signs",
    "steps": [
     "Place $C-B=(A-B)\\cdot\\dfrac{|C-B|}{|A-B|}\\,e^{i\\theta}$ with $\\theta=\\pm90^\\circ$ and ratio $=2$.",
     "$A-B=(6+4i)-(2+i)=4+3i$, and $e^{\\pm i\\pi/2}=\\pm i$.",
     "Sign $+$: $C-B=(4+3i)\\cdot 2\\cdot i=(8+6i)i=-6+8i$, so $C=(2+i)+(-6+8i)=-4+9i$.",
     "Sign $-$: $C-B=(4+3i)\\cdot 2\\cdot(-i)=6-8i$, so $C=(2+i)+(6-8i)=8-7i$.",
     "$\\boxed{C\\in\\{-4+9i,\\ 8-7i\\}}$"
    ]
   },
   {
    "name": "Perpendicular vector then scale",
    "steps": [
     "A vector perpendicular to $A-B=4+3i$ is $i(4+3i)=-3+4i$ (length $5$, same as $|A-B|$).",
     "$BC$ must have length $2\\cdot5=10$, i.e. twice the perpendicular unit step, so $C-B=\\pm2(-3+4i)=\\pm(-6+8i)$.",
     "$C=(2+i)\\pm(-6+8i)$ gives $-4+9i$ and $8-7i$.",
     "$\\boxed{\\{-4+9i,\\ 8-7i\\}}$"
    ]
   },
   {
    "name": "Coordinate solve",
    "steps": [
     "Let $C=(x,y)$. $\\vec{BA}=(4,3)$, $\\vec{BC}=(x-2,y-1)$. Perpendicularity: $4(x-2)+3(y-1)=0$.",
     "Length: $(x-2)^2+(y-1)^2=4\\cdot25=100$. Substitute $y-1=-\\tfrac43(x-2)$.",
     "$(x-2)^2\\big(1+\\tfrac{16}{9}\\big)=100\\Rightarrow(x-2)^2=36\\Rightarrow x-2=\\pm6$, giving $(x,y)=(-4,9)$ or $(8,-7)$.",
     "$\\boxed{C=-4+9i\\text{ or }8-7i}$"
    ]
   }
  ],
  "remark": "Insight: $e^{i\\theta}$ carries the *signed* turn; the magnitude scalar carries the stretch. Splitting a similarity into (sign of rotation) and (length ratio) reliably recovers both branches."
 },
 {
  "theme": "geometry",
  "themeLabel": "Complex Numbers as Geometry",
  "title": "Mirror on a Slanted Line",
  "difficulty": 4,
  "task": "Determine",
  "tags": [
   "reflection",
   "line",
   "conjugation",
   "direction-vector"
  ],
  "statement": "In the Argand plane, let $\\ell$ be the line through the origin and the point $2+i$. Determine the reflection of the point $P=1+8i$ in the line $\\ell$.",
  "answer": "$P'=7-4i$.",
  "trap": "Reflecting in the real axis by just conjugating ($P\\mapsto\\overline P=1-8i$). That only works for the real axis; for a line of direction $d=2+i$ one must conjugate in the frame rotated by $\\arg d$, i.e. $P'=(d/\\overline d)\\,\\overline P$ for a line through the origin.",
  "solutions": [
   {
    "name": "Conjugate in the rotated frame",
    "steps": [
     "For a line through the origin with direction $d$, reflection is $z\\mapsto \\dfrac{d}{\\overline d}\\,\\overline z$ (rotate to align $\\ell$ with the real axis, conjugate, rotate back).",
     "Here $d=2+i$, $\\overline d=2-i$, $\\dfrac{d}{\\overline d}=\\dfrac{(2+i)^2}{|2+i|^2}=\\dfrac{3+4i}{5}$.",
     "$P'=\\dfrac{3+4i}{5}\\,\\overline{(1+8i)}=\\dfrac{3+4i}{5}(1-8i)=\\dfrac{(3+32)+(4-24)i}{5}=\\dfrac{35-20i}{5}=7-4i.$",
     "$\\boxed{P'=7-4i}$"
    ]
   },
   {
    "name": "General line-reflection formula",
    "steps": [
     "Reflection of $z_0$ in the line through $a,b$ is $z'=\\dfrac{(b-a)\\overline{z_0}+\\overline b\\,a-b\\,\\overline a}{\\overline{b-a}}$.",
     "Take $a=0$, $b=2+i$: $z'=\\dfrac{(2+i)\\overline{z_0}}{2-i}$.",
     "With $z_0=1+8i$, $\\overline{z_0}=1-8i$: $z'=\\dfrac{(2+i)(1-8i)}{2-i}=\\dfrac{10-15i}{2-i}=\\dfrac{(10-15i)(2+i)}{5}=\\dfrac{35-20i}{5}=7-4i.$",
     "$\\boxed{7-4i}$"
    ]
   },
   {
    "name": "Midpoint-and-perpendicular check",
    "steps": [
     "The midpoint $M=\\tfrac12(P+P')=\\tfrac12(8+4i)=4+2i$ must lie on $\\ell$: indeed $\\dfrac{4+2i}{2+i}=2$ is real, so $M\\in\\ell$.",
     "The segment $PP'$ must be perpendicular to $\\ell$: $P-P'=(1+8i)-(7-4i)=-6+12i$, and $\\dfrac{-6+12i}{2+i}=\\dfrac{(-6+12i)(2-i)}{5}=\\dfrac{0+30i}{5}=6i$, purely imaginary, hence perpendicular to $d$.",
     "Both reflection conditions hold, confirming $P'=7-4i$.",
     "$\\boxed{7-4i}$"
    ]
   }
  ],
  "remark": "Insight: reflection in a line through $O$ of direction $d$ is the single clean map $z\\mapsto (d/\\overline d)\\,\\overline z$. The factor $d/\\overline d=e^{2i\\arg d}$ is exactly 'rotate by twice the line's angle, then flip.'"
 },
 {
  "theme": "geometry",
  "themeLabel": "Complex Numbers as Geometry",
  "title": "Signed Area of a Triangle",
  "difficulty": 4,
  "task": "Evaluate",
  "tags": [
   "area",
   "imaginary-part",
   "orientation",
   "triangle"
  ],
  "statement": "Three points in the Argand plane are $z_1=1+i$, $z_2=5+2i$, $z_3=3+6i$. Evaluate the area of triangle $z_1z_2z_3$.",
  "answer": "Area $=9$.",
  "trap": "Computing $\\tfrac12|z_2-z_1|\\,|z_3-z_1|$ as if it were $\\tfrac12(\\text{base})(\\text{height})$ — that overcounts because it ignores the included angle, treating the two sides as if they were perpendicular. Here it gives $\\tfrac12\\sqrt{17}\\sqrt{29}=\\tfrac12\\sqrt{493}\\approx11.10\\neq9$. The correct one-shot formula uses the imaginary part of $\\overline{(z_2-z_1)}(z_3-z_1)$, which packages base $\\times$ height automatically.",
  "solutions": [
   {
    "name": "Imaginary-part (cross-product) formula",
    "steps": [
     "Area $=\\dfrac12\\big|\\,\\mathrm{Im}\\big[\\overline{(z_2-z_1)}\\,(z_3-z_1)\\big]\\big|$.",
     "$z_2-z_1=4+i$, $z_3-z_1=2+5i$; $\\overline{(z_2-z_1)}=4-i$.",
     "$(4-i)(2+5i)=8+20i-2i-5i^2=8+18i+5=13+18i$, so $\\mathrm{Im}=18$.",
     "Area $=\\tfrac12\\cdot18=\\boxed{9}$"
    ]
   },
   {
    "name": "Determinant / shoelace",
    "steps": [
     "The complex area equals the real shoelace area on the points $(1,1),(5,2),(3,6)$.",
     "Shoelace: $\\tfrac12\\big|1(2-6)+5(6-1)+3(1-2)\\big|=\\tfrac12\\big|-4+25-3\\big|=\\tfrac12\\cdot18$.",
     "This equals $9$.",
     "$\\boxed{9}$"
    ]
   },
   {
    "name": "Base times height",
    "steps": [
     "Take base $z_1z_2$: length $|z_2-z_1|=|4+i|=\\sqrt{17}$.",
     "Height $=$ distance of $z_3$ from line $z_1z_2$. The perpendicular component of $z_3-z_1$ relative to $z_2-z_1$ has magnitude $\\big|\\mathrm{Im}[\\overline{(z_2-z_1)}(z_3-z_1)]\\big|/|z_2-z_1|=18/\\sqrt{17}$.",
     "Area $=\\tfrac12\\sqrt{17}\\cdot\\dfrac{18}{\\sqrt{17}}=9$.",
     "$\\boxed{9}$"
    ]
   }
  ],
  "remark": "Insight: $\\tfrac12\\mathrm{Im}[\\overline{(z_2-z_1)}(z_3-z_1)]$ is the signed area; its sign reveals the orientation. Here it is $+9>0$, so $z_1\\to z_2\\to z_3$ traces the triangle counterclockwise. The trap formula fails precisely because $\\sqrt{17}\\sqrt{29}>18$ unless the two edges meet at a right angle."
 },
 {
  "theme": "geometry",
  "themeLabel": "Complex Numbers as Geometry",
  "title": "The Apollonius Circle",
  "difficulty": 4,
  "task": "Determine",
  "tags": [
   "locus",
   "apollonius",
   "circle",
   "distance"
  ],
  "statement": "Find the locus of points $z$ in the Argand plane satisfying $|z-1|=2\\,|z-4|$. Determine its center and radius.",
  "answer": "A circle with center $5$ (i.e. $5+0i$) and radius $2$.",
  "trap": "Declaring the locus a perpendicular bisector (a line). The bisector is the locus of $|z-1|=|z-4|$; once the ratio is $2\\neq1$ the locus bends into a circle (an Apollonius circle), not a line.",
  "solutions": [
   {
    "name": "Square the modulus condition",
    "steps": [
     "Write $z=x+iy$. Then $|z-1|^2=4\\,|z-4|^2$ gives $(x-1)^2+y^2=4\\big[(x-4)^2+y^2\\big]$.",
     "Expand: $x^2-2x+1+y^2=4x^2-32x+64+4y^2$, i.e. $3x^2+3y^2-30x+63=0$.",
     "Divide by $3$: $x^2+y^2-10x+21=0\\Rightarrow(x-5)^2+y^2=4$.",
     "$\\boxed{\\text{center }5,\\ \\text{radius }2}$"
    ]
   },
   {
    "name": "Apollonius division points",
    "steps": [
     "On the real axis the two points dividing segment $[1,4]$ in ratio $2:1$ form a diameter. Internal point: $\\dfrac{2\\cdot4+1\\cdot1}{2+1}=3$. External point: $\\dfrac{2\\cdot4-1\\cdot1}{2-1}=7$.",
     "Check: at $z=3$, $|z-1|=2$ and $2|z-4|=2$; at $z=7$, $|z-1|=6$ and $2|z-4|=6$. Both lie on the locus.",
     "These two points $3$ and $7$ are the ends of a diameter, so center $=\\tfrac{3+7}{2}=5$ and radius $=\\tfrac{7-3}{2}=2$.",
     "$\\boxed{\\text{center }5,\\ \\text{radius }2}$"
    ]
   },
   {
    "name": "Conjugate-coordinate algebra",
    "steps": [
     "$|z-1|^2=(z-1)(\\overline z-1)$ and $|z-4|^2=(z-4)(\\overline z-4)$; set the first equal to $4$ times the second.",
     "Collecting: $3z\\overline z-15(z+\\overline z)+63=0$, i.e. $z\\overline z-5(z+\\overline z)+21=0$.",
     "This is $|z-5|^2=25-21=4$, a circle $|z-5|=2$.",
     "$\\boxed{\\text{center }5,\\ \\text{radius }2}$"
    ]
   }
  ],
  "remark": "Insight: $|z-a|=k\\,|z-b|$ is a line exactly when $k=1$ and otherwise an Apollonius circle whose diameter is the pair of points dividing segment $\\overline{ab}$ internally and externally in ratio $k$."
 },
 {
  "theme": "geometry",
  "themeLabel": "Complex Numbers as Geometry",
  "title": "Threading the Collinear Needle",
  "difficulty": 4,
  "task": "Find",
  "tags": [
   "collinearity",
   "real-ratio",
   "slope",
   "argand-plane"
  ],
  "statement": "Find the real number $a$ for which the three points $1+i$, $3+5i$, and $a+11i$ are collinear in the Argand plane.",
  "answer": "$a=6$.",
  "trap": "Setting the **moduli** $|3+5i-(1+i)|$ and $|a+11i-(1+i)|$ equal (or proportional), or matching arguments only up to magnitude. Equal distance would demand $(a-1)^2+100=20$, which has no real root at all. Collinearity requires $\\dfrac{z_2-z_1}{z_3-z_1}$ to be **real** (zero imaginary part), not merely the points to be equidistant or the rays to look aligned.",
  "solutions": [
   {
    "name": "Real-ratio condition",
    "steps": [
     "Collinear $\\iff \\dfrac{z_2-z_1}{z_3-z_1}\\in\\mathbb R \\iff \\mathrm{Im}\\!\\left[\\dfrac{z_2-z_1}{z_3-z_1}\\right]=0$.",
     "$z_2-z_1=2+4i$, $z_3-z_1=(a-1)+10i$.",
     "$\\mathrm{Im}\\big[(2+4i)\\,\\overline{((a-1)+10i)}\\big]=0\\Rightarrow 4(a-1)-2\\cdot10=0\\Rightarrow 4(a-1)=20\\Rightarrow a-1=5.$",
     "$\\boxed{a=6}$"
    ]
   },
   {
    "name": "Equal slopes",
    "steps": [
     "Slope through $(1,1)$ and $(3,5)$ is $\\dfrac{5-1}{3-1}=2$.",
     "Slope through $(1,1)$ and $(a,11)$ must also equal $2$: $\\dfrac{11-1}{a-1}=2$.",
     "$\\dfrac{10}{a-1}=2\\Rightarrow a-1=5$.",
     "$\\boxed{a=6}$"
    ]
   },
   {
    "name": "Area-zero (degenerate triangle)",
    "steps": [
     "Three points are collinear iff the triangle they form has zero signed area: $\\mathrm{Im}\\big[\\overline{(z_2-z_1)}\\,(z_3-z_1)\\big]=0$.",
     "$\\overline{(2+4i)}=2-4i$; $(2-4i)\\big((a-1)+10i\\big)=\\big(2(a-1)+40\\big)+\\big(20-4(a-1)\\big)i$.",
     "Imaginary part $=20-4(a-1)=0\\Rightarrow a-1=5$.",
     "$\\boxed{a=6}$"
    ]
   }
  ],
  "remark": "Insight: the single scalar $\\mathrm{Im}\\dfrac{z_2-z_1}{z_3-z_1}$ is the universal collinearity gauge — it vanishes precisely when the three points lie on one line, regardless of distances or directions. The equal-modulus trap fails spectacularly here: $(a-1)^2+100=20$ has no real solution, so demanding equal distances rules out every real $a$."
 },
 {
  "theme": "geometry",
  "themeLabel": "Complex Numbers as Geometry",
  "title": "The Centroid Knows the Third Vertex",
  "difficulty": 4,
  "task": "Find",
  "tags": [
   "centroid",
   "median",
   "average",
   "triangle"
  ],
  "statement": "A triangle in the Argand plane has centroid $G=2+2i$ and two of its vertices are $1+i$ and $4+3i$. Find the third vertex.",
  "answer": "$1+2i$.",
  "trap": "Treating $G$ as the *midpoint* of the two known vertices, or as the circumcenter. The centroid is the **average of all three** vertices ($G=\\frac{z_1+z_2+z_3}{3}$); ignoring the factor $3$ gives a wrong vertex.",
  "solutions": [
   {
    "name": "Centroid formula",
    "steps": [
     "$G=\\dfrac{z_1+z_2+z_3}{3}\\Rightarrow z_3=3G-z_1-z_2$.",
     "$3G=3(2+2i)=6+6i$.",
     "$z_3=(6+6i)-(1+i)-(4+3i)=(6-1-4)+(6-1-3)i=1+2i$.",
     "$\\boxed{1+2i}$"
    ]
   },
   {
    "name": "Median ratio (2:1)",
    "steps": [
     "The centroid divides each median $2:1$ from the vertex. Midpoint of $z_1,z_2$ is $M=\\tfrac12\\big((1+i)+(4+3i)\\big)=\\tfrac52+2i$.",
     "$G$ lies $2/3$ of the way from $z_3$ to $M$: $G=\\tfrac13 z_3+\\tfrac23 M$.",
     "$z_3=3G-2M=(6+6i)-(5+4i)=1+2i$.",
     "$\\boxed{1+2i}$"
    ]
   },
   {
    "name": "Coordinate average",
    "steps": [
     "Centroid coordinates: $x_G=\\tfrac{x_1+x_2+x_3}{3}$, $y_G=\\tfrac{y_1+y_2+y_3}{3}$.",
     "$2=\\tfrac{1+4+x_3}{3}\\Rightarrow x_3=1$; $\\;2=\\tfrac{1+3+y_3}{3}\\Rightarrow y_3=2$.",
     "Third vertex $(1,2)$, i.e. $1+2i$.",
     "$\\boxed{1+2i}$"
    ]
   }
  ],
  "remark": "Insight: the centroid is a linear average, so knowing it plus two vertices linearly pins the third — a clean illustration that $\\sum z_k = 3G$."
 },
 {
  "theme": "geometry",
  "themeLabel": "Complex Numbers as Geometry",
  "title": "Closing the Parallelogram",
  "difficulty": 4,
  "task": "Find",
  "tags": [
   "parallelogram",
   "midpoint",
   "diagonals",
   "vectors"
  ],
  "statement": "Points $A=1+i$, $B=5+2i$, $C=6+6i$ are three consecutive vertices of a parallelogram $ABCD$ (in that cyclic order). Find the fourth vertex $D$.",
  "answer": "$D=2+5i$.",
  "trap": "Using $D=B+C-A$ (which closes the *wrong* parallelogram $ABDC$, where $B$ and $C$ would be opposite vertices) or some 'average' like $\\tfrac{A+B+C}{3}$. For vertices in cyclic order $ABCD$, the diagonals are $AC$ and $BD$, and they bisect each other, giving $D=A+C-B$.",
  "solutions": [
   {
    "name": "Diagonals bisect",
    "steps": [
     "In parallelogram $ABCD$ the diagonals are $AC$ and $BD$ (joining opposite vertices), and they share a common midpoint: $\\tfrac{A+C}{2}=\\tfrac{B+D}{2}$.",
     "Hence $D=A+C-B$.",
     "$D=(1+i)+(6+6i)-(5+2i)=(1+6-5)+(1+6-2)i=2+5i$.",
     "$\\boxed{2+5i}$"
    ]
   },
   {
    "name": "Equal opposite sides as vectors",
    "steps": [
     "Opposite sides of a parallelogram are equal and parallel: $\\vec{AB}=\\vec{DC}$, so $B-A=C-D\\Rightarrow D=C-(B-A)=A+C-B$.",
     "$B-A=4+i$, so $D=(6+6i)-(4+i)=2+5i$.",
     "$\\boxed{2+5i}$"
    ]
   },
   {
    "name": "Translate the fourth point",
    "steps": [
     "Take side $\\vec{BC}=C-B=1+4i$. Since $ABCD$ is a parallelogram, the opposite side $\\vec{AD}$ equals $\\vec{BC}$.",
     "$D=A+\\vec{BC}=(1+i)+(1+4i)=2+5i$.",
     "$\\boxed{2+5i}$"
    ]
   }
  ],
  "remark": "Insight: the parallelogram law $A+C=B+D$ is just 'the diagonals share a midpoint.' Getting the cyclic order right is what distinguishes the correct $A+C-B$ from the trap $B+C-A$ — the latter would make $B$ and $C$ opposite vertices, a different (and here non-degenerate but wrong) quadrilateral."
 },
 {
  "theme": "geometry",
  "themeLabel": "Complex Numbers as Geometry",
  "title": "Napoleon's Equilateral Crown",
  "difficulty": 5,
  "task": "Prove that",
  "tags": [
   "napoleon",
   "equilateral",
   "rotation",
   "centroid",
   "proof"
  ],
  "statement": "Let $z_1,z_2,z_3$ be three points of the Argand plane forming a triangle, labelled so that the traversal $z_1\\to z_2\\to z_3$ is counter-clockwise. On each side erect an equilateral triangle pointing outward, and let $N_1,N_2,N_3$ be the centroids (centers) of the equilateral triangles on $z_1z_2$, $z_2z_3$, $z_3z_1$ respectively. Prove that $N_1N_2N_3$ is **always** equilateral (Napoleon's theorem).",
  "answer": "Proved: $N_1N_2N_3$ is equilateral, with $N_1+\\omega N_2+\\omega^2 N_3=0$ where $\\omega=e^{2\\pi i/3}$.",
  "trap": "Erecting every triangle with $e^{+i\\pi/3}$ regardless of the labelling. For the stated counter-clockwise order, outward erection on side $z_j\\to z_k$ is the rotation $e^{-i\\pi/3}$; the sign $e^{+i\\pi/3}$ erects the triangles inward and yields the *inner* Napoleon triangle, which is equilateral too but a genuinely different (smaller) triangle. Worse, mixing the two signs across the three sides destroys equilaterality outright (e.g. one gets side lengths in ratio $1.83:2.31:3.78$). 'Outward' is a single consistent rotation sign tied to the orientation of the traversal.",
  "solutions": [
   {
    "name": "Centroid formula + equilateral criterion",
    "steps": [
     "A triangle $p,q,r$ is positively-oriented equilateral $\\iff p+\\omega q+\\omega^2 r=0$, where $\\omega=e^{2\\pi i/3}=-\\tfrac12+\\tfrac{\\sqrt3}{2}i$ is a primitive cube root of unity (so $1+\\omega+\\omega^2=0$).",
     "Outward on side $z_j\\to z_k$ (counter-clockwise traversal) the apex is $a_{jk}=z_j+(z_k-z_j)e^{-i\\pi/3}$. The single clean relation $e^{-i\\pi/3}=\\tfrac12-\\tfrac{\\sqrt3}{2}i=-\\omega$ is all we need.",
     "The center is $N=\\tfrac13(z_j+z_k+a_{jk})=\\tfrac{1+(1-e^{-i\\pi/3})}{3}\\,z_j+\\tfrac{1+e^{-i\\pi/3}}{3}\\,z_k=\\tfrac{3+\\sqrt3\\,i}{6}\\,z_j+\\tfrac{3-\\sqrt3\\,i}{6}\\,z_k$, a fixed $\\mathbb C$-linear combination of the two endpoints.",
     "Thus $N_1=\\tfrac{3+\\sqrt3 i}{6}z_1+\\tfrac{3-\\sqrt3 i}{6}z_2$, and cyclically $N_2$ uses $(z_2,z_3)$, $N_3$ uses $(z_3,z_1)$. Substitute into $N_1+\\omega N_2+\\omega^2 N_3$ and collect the coefficient of each $z_i$; with $e^{-i\\pi/3}=-\\omega$ every coefficient is a constant in $\\mathbb Z[\\omega]$.",
     "Each coefficient reduces using $1+\\omega+\\omega^2=0$ to $0$, so $N_1+\\omega N_2+\\omega^2 N_3=0$ for arbitrary $z_1,z_2,z_3$. Therefore $N_1N_2N_3$ is equilateral. $\\blacksquare$"
    ]
   },
   {
    "name": "Symbolic verification of the equilateral identity",
    "steps": [
     "Write each center as the $\\mathbb C$-linear map $N=\\tfrac{3+\\sqrt3 i}{6}z_j+\\tfrac{3-\\sqrt3 i}{6}z_k$ derived above (this uses only $e^{-i\\pi/3}=\\tfrac12-\\tfrac{\\sqrt3}{2}i$).",
     "Form the symmetric equilateral invariant $E=N_1^2+N_2^2+N_3^2-(N_1N_2+N_2N_3+N_3N_1)$. A triangle is equilateral $\\iff E=0$, since $E=\\tfrac12\\big[(N_1-N_2)^2+(N_2-N_3)^2+(N_3-N_1)^2\\big]$ vanishes exactly when the three pairwise differences are related by cube-root-of-unity rotations.",
     "Expanding $E$ as a polynomial in $z_1,z_2,z_3$, every coefficient lies in $\\mathbb Z[\\tfrac{\\sqrt3}{2}i]$; substituting $\\tfrac{3\\pm\\sqrt3 i}{6}$ for the linear weights and simplifying, all coefficients cancel identically.",
     "Hence $E\\equiv 0$ for every starting triangle, which is exactly the equilateral criterion, so $N_1N_2N_3$ is equilateral. $\\blacksquare$"
    ]
   },
   {
    "name": "Rotation composition (geometric)",
    "steps": [
     "Let $\\rho_i$ be the rotation by $+120^\\circ$ about $N_i$, i.e. $\\rho_i(x)=N_i+\\omega(x-N_i)$ with $\\omega=e^{2\\pi i/3}$. Because $N_i$ is the center of an equilateral triangle erected on a side, $\\rho_i$ carries the two base endpoints of that side into each other and fixes the apex's symmetric role.",
     "Consider the composite $\\Phi=\\rho_3\\circ\\rho_2\\circ\\rho_1$. Its linear part is $\\omega^3=1$, so $\\Phi$ is a translation $x\\mapsto x+t$. Tracking the shared vertex $z_1$ around the construction shows $z_1$ returns to itself, hence $t=0$ and $\\Phi=\\mathrm{id}$.",
     "Compute $t$ directly: $\\Phi(x)-x=(1-\\omega)\\,[\\,N_1\\,\\omega^2+N_2\\,\\omega+N_3\\,]\\cdot c$ for a nonzero constant $c$; setting $t=0$ forces $N_1+\\omega N_2+\\omega^2 N_3=0$ (after relabelling by the cyclic order). This is precisely the positively-oriented equilateral criterion.",
     "Equivalently: a composition of three $120^\\circ$ rotations is the identity $\\iff$ their centers form an equilateral triangle. Since the composite is the identity, $N_1N_2N_3$ is equilateral. $\\blacksquare$"
    ]
   }
  ],
  "remark": "Insight: 'three $120^\\circ$ rotations compose to the identity' is equivalent to 'their centers form an equilateral triangle.' Napoleon's theorem is that fact in disguise. The whole construction hinges on the single relation $e^{-i\\pi/3}=-\\omega$, and the outward/inward distinction is purely the sign of the $60^\\circ$ erection: $e^{-i\\pi/3}$ gives the outer Napoleon triangle, $e^{+i\\pi/3}$ the inner one. Both are equilateral, but mixing the signs across sides is not."
 },
 {
  "theme": "geometry",
  "themeLabel": "Complex Numbers as Geometry",
  "title": "The Third Corner and Its Span",
  "difficulty": 5,
  "task": "Find all",
  "tags": [
   "equilateral",
   "rotation",
   "area",
   "two-solutions"
  ],
  "statement": "Two vertices of an equilateral triangle are $A=1+i$ and $B=7+i$ in the Argand plane. Find **all** possible third vertices $C$, and the area of the triangle.",
  "answer": "$C=4+(1+3\\sqrt3)\\,i$ or $C=4+(1-3\\sqrt3)\\,i$; in both cases the area is $9\\sqrt3$.",
  "trap": "Forcing $C-A=(B-A)e^{i\\pi/3}$ as the *only* answer (one side), and computing area as $\\tfrac12|A-B|^2$ (right-triangle formula) instead of $\\tfrac{\\sqrt3}{4}s^2$. An equilateral triangle on a fixed side has **two** apices (rotate $+60^\\circ$ or $-60^\\circ$), and its area is $\\tfrac{\\sqrt3}{4}s^2$, not $\\tfrac12 s^2=18$.",
  "solutions": [
   {
    "name": "Rotate the side by ±60°",
    "steps": [
     "$C=A+(B-A)e^{\\pm i\\pi/3}$. Here $B-A=6$ (real), and $e^{\\pm i\\pi/3}=\\tfrac12\\pm\\tfrac{\\sqrt3}{2}i$.",
     "$(B-A)e^{i\\pi/3}=6\\big(\\tfrac12+\\tfrac{\\sqrt3}{2}i\\big)=3+3\\sqrt3\\,i$, so $C=(1+i)+(3+3\\sqrt3\\,i)=4+(1+3\\sqrt3)i$.",
     "The $-60^\\circ$ choice gives $C=4+(1-3\\sqrt3)i$.",
     "Side $s=|B-A|=6$, so area $=\\tfrac{\\sqrt3}{4}\\cdot6^2=9\\sqrt3$. $\\boxed{C=4+(1\\pm3\\sqrt3)i,\\ \\text{area}=9\\sqrt3}$"
    ]
   },
   {
    "name": "Perpendicular bisector + height",
    "steps": [
     "$C$ lies on the perpendicular bisector of $AB$, the vertical line $x=4$ (midpoint $(4,1)$).",
     "The equilateral height is $h=\\tfrac{\\sqrt3}{2}s=\\tfrac{\\sqrt3}{2}\\cdot6=3\\sqrt3$, measured up or down from the midpoint.",
     "So $C=(4,\\,1\\pm3\\sqrt3)$, i.e. $4+(1\\pm3\\sqrt3)i$; area $=\\tfrac12\\cdot6\\cdot3\\sqrt3=9\\sqrt3$.",
     "$\\boxed{C=4+(1\\pm3\\sqrt3)i,\\ \\text{area}=9\\sqrt3}$"
    ]
   },
   {
    "name": "Equilateral algebraic criterion",
    "steps": [
     "$A,B,C$ equilateral $\\iff A^2+B^2+C^2=AB+BC+CA$, a quadratic in $C$: $C^2-(A+B)C+(A^2+B^2-AB)=0$.",
     "$C=\\tfrac{A+B}{2}\\pm\\sqrt{\\tfrac{(A+B)^2}{4}-(A^2+B^2-AB)}$, and the discriminant simplifies to $-\\tfrac34(A-B)^2=-\\tfrac34\\cdot36=-27$.",
     "So the square root is $\\pm3\\sqrt3\\,i$ and $\\tfrac{A+B}{2}=4+i$, giving $C=(4+i)\\pm3\\sqrt3\\,i=4+(1\\pm3\\sqrt3)i$.",
     "Area $=\\tfrac{\\sqrt3}{4}|A-B|^2=9\\sqrt3$. $\\boxed{C=4+(1\\pm3\\sqrt3)i,\\ 9\\sqrt3}$"
    ]
   }
  ],
  "remark": "Insight: a fixed side admits two equilateral completions — one per sign of the $60^\\circ$ rotation — symmetric across the side's perpendicular bisector. The $\\sqrt3$ in both the coordinate and the area traces directly to $\\mathrm{Im}\\,e^{i\\pi/3}=\\tfrac{\\sqrt3}{2}$."
 },
 {
  "theme": "loci",
  "themeLabel": "Loci in the Argand Plane",
  "title": "The Off-Centre Mirror",
  "difficulty": 3,
  "task": "Find the centre and radius",
  "tags": [
   "apollonius",
   "circle",
   "modulus",
   "jee-advanced"
  ],
  "statement": "The set of complex numbers $z$ satisfying $|z-1| = 2\\,|z+2|$ is a circle. Find its centre and radius.",
  "answer": "Centre $-3$ (the point $(-3,0)$), radius $2$.",
  "trap": "Reading the ratio $|z-1|:|z+2| = 1:2$ and guessing the centre is the section point that divides the segment from $1$ to $-2$ internally in ratio $1:2$, namely $z=0$. But $z=0$ satisfies $|z-1|=1$ and $2|z+2|=4$, which are unequal, so $0$ is not even on the locus. The Apollonius centre is never a section point of the chord: the internal and external division points are the two ENDS of a diameter, and the centre is their midpoint. Here the diameter runs from $-1$ to $-5$, so the centre is $-3$, not $0$.",
  "solutions": [
   {
    "name": "Square and complete the square",
    "steps": [
     "Square both sides: $|z-1|^2 = 4|z+2|^2$. With $z=x+iy$ this is $(x-1)^2+y^2 = 4\\big((x+2)^2+y^2\\big)$.",
     "Expand: $x^2-2x+1+y^2 = 4x^2+16x+16+4y^2$, which rearranges to $3x^2+3y^2+18x+15=0$.",
     "Divide by $3$: $x^2+y^2+6x+5=0 \\Rightarrow (x+3)^2+y^2 = 4$.",
     "Centre $(-3,0)$, radius $\\boxed{2}$."
    ]
   },
   {
    "name": "Apollonius diameter endpoints",
    "steps": [
     "On the real axis the equation $|x-1|=2|x+2|$ marks where the circle meets the line through $1$ and $-2$; these two points are the ends of a diameter.",
     "Internal case (point between the two ratios is negative side): $x-1 = -2(x+2)\\Rightarrow 3x=-3\\Rightarrow x=-1$. External case: $x-1 = 2(x+2)\\Rightarrow x=-5$.",
     "The diameter runs from $(-1,0)$ to $(-5,0)$, so the centre is the midpoint $(-3,0)$ and the radius is half the length, $\\tfrac{|-1-(-5)|}{2}=\\boxed{2}$."
    ]
   },
   {
    "name": "General Apollonius formula",
    "steps": [
     "For $|z-a|=k|z-b|$ with $k\\neq1$ the locus is the circle of centre $c=\\dfrac{a-k^2 b}{1-k^2}$ and radius $r=\\dfrac{k\\,|a-b|}{|1-k^2|}$.",
     "Here $a=1,\\ b=-2,\\ k=2$: $c=\\dfrac{1-4(-2)}{1-4}=\\dfrac{9}{-3}=-3$, so centre $(-3,0)$.",
     "$r=\\dfrac{2\\,|1-(-2)|}{|1-4|}=\\dfrac{2\\cdot3}{3}=\\boxed{2}$."
    ]
   }
  ],
  "remark": "Insight: an Apollonius circle's centre lies OUTSIDE the segment $ab$, pushed toward the nearer point. Its two diameter ends are exactly the internal and external division points of $ab$ in ratio $k$. Locate those two points, average them, and the centre falls out with no algebra; here the ends $-1$ and $-5$ average to $-3$ and span a radius of $2$."
 },
 {
  "theme": "loci",
  "themeLabel": "Loci in the Argand Plane",
  "title": "Equidistant Decree",
  "difficulty": 3,
  "task": "Find a,b",
  "tags": [
   "perpendicular-bisector",
   "line",
   "equidistant"
  ],
  "statement": "The point $z$ is equidistant from $4$ and from $3i$:\\[|z-4|=|z-3i|.\\] This locus is a straight line $ax+by=c$ (with $z=x+iy$). Find the line in the form $ax+by=c$ with integer coefficients having $\\gcd(|a|,|b|,|c|)=1$ and $a>0$.",
  "answer": "$8x-6y=7$.",
  "trap": "Assuming any condition with two distinct points and absolute values yields a circle. With EQUAL weights the squared terms cancel and the locus is the perpendicular bisector — a line, not a circle.",
  "solutions": [
   {
    "name": "Square and cancel",
    "steps": [
     "With $z=x+iy$: $(x-4)^2+y^2=x^2+(y-3)^2$.",
     "Expand: $x^2-8x+16+y^2=x^2+y^2-6y+9$.",
     "The $x^2,y^2$ cancel: $-8x+16=-6y+9\\Rightarrow 8x-6y=7$.",
     "So the locus is the line $\\boxed{8x-6y=7}$."
    ]
   },
   {
    "name": "Geometric (perpendicular bisector)",
    "steps": [
     "Equidistance from $A=(4,0)$ and $B=(0,3)$ is the perpendicular bisector of $AB$.",
     "Midpoint $M=(2,\\tfrac32)$; direction $AB=(-4,3)$, so the bisector has normal $(-4,3)$, i.e. equation $-4(x-2)+3(y-\\tfrac32)=0$.",
     "Simplify: $-4x+8+3y-\\tfrac92=0\\Rightarrow -4x+3y+\\tfrac72=0$, i.e. $8x-6y=7$.",
     "Locus: $\\boxed{8x-6y=7}$."
    ]
   }
  ],
  "remark": "Insight: $|z-a|=|z-b|$ is the cleanest non-circle locus — the squared distance terms $|z|^2$ always cancel, leaving a line. Recognising this instantly saves wasted algebra."
 },
 {
  "theme": "loci",
  "themeLabel": "Loci in the Argand Plane",
  "title": "Caged in a Disc",
  "difficulty": 3,
  "task": "Find",
  "tags": [
   "disc",
   "modulus-extremum",
   "triangle-inequality"
  ],
  "statement": "The complex number $z$ ranges over the closed disc\\[|z-(1+i)|\\le 1.\\] Find the maximum and minimum possible values of $|z|$, and the maximum value of $|z-3i|$.",
  "answer": "$\\max|z|=\\sqrt2+1,\\quad \\min|z|=\\sqrt2-1,\\quad \\max|z-3i|=\\sqrt5+1.$",
  "trap": "Trying to maximise $|z|$ by calculus or by setting $z$ to a corner. The disc is a filled circle; extrema of distance from a fixed point $p$ occur along the line through $p$ and the centre, giving $\\,|p-\\text{centre}|\\pm r$. Forgetting the $\\pm r$ (the radius offset) is the usual slip: it would give $|C|=\\sqrt2$ instead of the true $\\sqrt2+1$.",
  "solutions": [
   {
    "name": "Distance-to-centre $\\pm$ radius",
    "steps": [
     "Centre $C=1+i$, radius $r=1$. For any fixed point $p$, over the disc $|z-p|$ ranges over $\\big[\\,|p-C|-r,\\;|p-C|+r\\,\\big]$, with the endpoints attained where the line through $p$ and $C$ meets the boundary circle.",
     "Take $p=0$: $|0-C|=|1+i|=\\sqrt2$. So $|z|\\in[\\sqrt2-1,\\ \\sqrt2+1]$.",
     "Take $p=3i$: $|3i-C|=|{-1+2i}|=\\sqrt5$. So $\\max|z-3i|=\\sqrt5+1$.",
     "Hence $\\boxed{\\max|z|=\\sqrt2+1,\\ \\min|z|=\\sqrt2-1,\\ \\max|z-3i|=\\sqrt5+1}$."
    ]
   },
   {
    "name": "Triangle inequality bounds",
    "steps": [
     "Write $z=C+w$ with $|w|\\le1$. Then $|z|=|C+w|$.",
     "By the triangle inequality $\\big||C|-|w|\\big|\\le|C+w|\\le|C|+|w|$, and $|C|=\\sqrt2$, $|w|\\le1$.",
     "Both bounds are attained when $w$ is aligned anti-/parallel to $C$ (which keeps $|w|=1$, so $w$ stays in the disc), so $|z|\\in[\\sqrt2-1,\\sqrt2+1]$.",
     "Same argument with $z-3i=(C-3i)+w$, $|C-3i|=\\sqrt5$, gives $\\max=\\sqrt5+1$. $\\boxed{}$"
    ]
   }
  ],
  "remark": "Insight: for any linear distance functional over a disc, the answer is always $(\\text{distance of the probe point to the centre})\\pm\\text{radius}$; no calculus is ever needed."
 },
 {
  "theme": "loci",
  "themeLabel": "Loci in the Argand Plane",
  "title": "The Misplaced Heart",
  "difficulty": 4,
  "task": "Determine",
  "tags": [
   "apollonius",
   "circle",
   "centre-trap",
   "ratio"
  ],
  "statement": "Consider the locus\\[|z-4|=2\\,|z-1|.\\] A student claims its centre lies between $1$ and $4$. Determine the true locus (centre and radius), and state whether the claim is correct.",
  "answer": "The locus is the circle $x^2+y^2=4$, i.e. centre the ORIGIN $0$ and radius $2$. The student's claim is FALSE — the centre is at $0$, which is not between $1$ and $4$.",
  "trap": "Believing the centre must lie between the two points $1$ and $4$. For $|z-a|=k|z-b|$ the centre is $\\dfrac{a-k^2 b}{1-k^2}$; with $a=4,b=1,k=2$ this is $\\dfrac{4-4}{1-4}=0$, sitting at the origin — outside the segment $[1,4]$ entirely.",
  "solutions": [
   {
    "name": "Square and complete",
    "steps": [
     "$z=x+iy$: $(x-4)^2+y^2=4\\big((x-1)^2+y^2\\big)$.",
     "Expand: $x^2-8x+16+y^2=4x^2-8x+4+4y^2$.",
     "The $-8x$ cancels, leaving $3x^2+3y^2-12=0\\Rightarrow x^2+y^2=4$.",
     "Circle centre $0$, radius $2$; the claim is $\\boxed{\\text{false}}$."
    ]
   },
   {
    "name": "Apollonius centre formula",
    "steps": [
     "For $|z-a|=k|z-b|$ ($k\\ne1$), centre $=\\dfrac{a-k^2b}{1-k^2}$, radius $=\\dfrac{k\\,|a-b|}{|1-k^2|}$.",
     "Here $a=4,b=1,k=2$: centre $=\\dfrac{4-4\\cdot1}{1-4}=\\dfrac{0}{-3}=0$.",
     "Radius $=\\dfrac{2\\cdot|4-1|}{3}=\\dfrac{6}{3}=2$.",
     "Locus is $x^2+y^2=4$, centre $0$; claim $\\boxed{\\text{false}}$."
    ]
   },
   {
    "name": "Test diameter endpoints",
    "steps": [
     "On the real axis $|x-4|=2|x-1|$ gives $x-4=\\pm2(x-1)$: $x-4=2x-2\\Rightarrow x=-2$; $x-4=-2x+2\\Rightarrow x=2$.",
     "These are the two ends of a diameter: $-2$ and $2$.",
     "Centre $=\\frac{-2+2}2=0$, radius $=\\frac{2-(-2)}2=2$.",
     "The centre $0$ is not in $[1,4]$, so the claim is $\\boxed{\\text{false}}$."
    ]
   }
  ],
  "remark": "Insight: the Apollonius circle centre $\\frac{a-k^2b}{1-k^2}$ can land anywhere on the line through $a$ and $b$ — even outside the segment, even at a tidy point like the origin. Never assume betweenness."
 },
 {
  "theme": "loci",
  "themeLabel": "Loci in the Argand Plane",
  "title": "The Half-Weighted Orbit",
  "difficulty": 4,
  "task": "Find",
  "tags": [
   "apollonius",
   "circle",
   "centre-radius",
   "fractions"
  ],
  "statement": "Find the centre and radius of the locus described by \\[2|z|=|z-5|.\\] Then find the largest and smallest values of $|z|$ on this locus.",
  "answer": "Circle with centre $\\left(-\\tfrac53,0\\right)$ and radius $\\tfrac{10}{3}$. On it $|z|$ ranges over $\\left[\\,\\tfrac53,\\ 5\\,\\right]$ (min $\\tfrac53$, max $5$).",
  "trap": "Reading $2|z|=|z-5|$ as $|z|=\\tfrac12|z-5|$ and then placing the centre at the midpoint of $0$ and $5$, i.e. $\\left(\\tfrac52,0\\right)$ with radius $\\tfrac52$. But $k=\\tfrac12\\ne1$, so the Apollonius locus is a genuine circle whose centre is NOT the midpoint. The correct centre $-\\tfrac53$ lies external to the segment $[0,5]$, on the opposite side of the origin from $5$.",
  "solutions": [
   {
    "name": "Square and complete",
    "steps": [
     "Square $2|z|=|z-5|$ to get $4|z|^2=|z-5|^2$. With $z=x+iy$: $4(x^2+y^2)=(x-5)^2+y^2$.",
     "$4x^2+4y^2=x^2-10x+25+y^2\\Rightarrow 3x^2+3y^2+10x-25=0$.",
     "Divide by $3$ and complete the square: $\\left(x+\\tfrac53\\right)^2+y^2=\\tfrac{25}{9}+\\tfrac{25}{3}=\\tfrac{100}{9}$.",
     "Centre $\\left(-\\tfrac53,0\\right)$, radius $\\tfrac{10}3$. The distance from the origin to the centre is $d=\\tfrac53$, so $|z|\\in[\\,r-d,\\,r+d\\,]=\\big[\\tfrac{10}3-\\tfrac53,\\ \\tfrac{10}3+\\tfrac53\\big]=\\boxed{[\\tfrac53,5]}$."
    ]
   },
   {
    "name": "Apollonius formula",
    "steps": [
     "Write the condition as $|z-a|=k|z-b|$ with $a=0,\\ b=5,\\ k=\\tfrac12$. Centre $=\\dfrac{a-k^2b}{1-k^2}=\\dfrac{0-\\tfrac14\\cdot5}{1-\\tfrac14}=\\dfrac{-5/4}{3/4}=-\\tfrac53$.",
     "Radius $=\\dfrac{k\\,|a-b|}{|1-k^2|}=\\dfrac{\\tfrac12\\cdot5}{3/4}=\\dfrac{5/2}{3/4}=\\tfrac{10}3$.",
     "The origin lies at distance $d=\\tfrac53$ from the centre, and $d<r$, so the origin is inside the circle and $|z|$ sweeps the full range $[\\,r-d,\\,r+d\\,]$.",
     "Hence $|z|_{\\min}=\\tfrac{10}3-\\tfrac53=\\tfrac53$, $|z|_{\\max}=\\tfrac{10}3+\\tfrac53=5$: $\\boxed{\\text{centre }(-\\tfrac53,0),\\ r=\\tfrac{10}3,\\ |z|\\in[\\tfrac53,5]}$."
    ]
   },
   {
    "name": "Diameter on the real axis",
    "steps": [
     "By symmetry the circle is centred on the real axis, so its diameter lies along it. Solve $2|x|=|x-5|$ on the real line.",
     "For $0\\le x\\le5$ (so $|x-5|=5-x$, $|x|=x$): $2x=5-x\\Rightarrow x=\\tfrac53$.",
     "For $x<0$ (so $|x|=-x$, $|x-5|=5-x$): $-2x=5-x\\Rightarrow x=-5$.",
     "Diameter endpoints $\\tfrac53$ and $-5$ give centre $\\tfrac{1}{2}\\!\\left(\\tfrac53-5\\right)=-\\tfrac53$ and radius $\\tfrac{1}{2}\\!\\left(\\tfrac53+5\\right)=\\tfrac{10}3$. These endpoints are the nearest and farthest points from the origin, so $|z|=\\tfrac53$ and $|z|=5$ are the extremes. $\\boxed{|z|\\in[\\tfrac53,5]}$"
    ]
   }
  ],
  "remark": "Insight: rewriting the ratio cleanly as $|z-a|=k|z-b|$ and applying the centre formula $\\frac{a-k^2b}{1-k^2}$ kills the midpoint reflex that only works when $k=1$. Because the origin sits inside the circle (distance $d=\\tfrac53<r=\\tfrac{10}3$), the modulus achieves every value in $[\\,r-d,\\,r+d\\,]$, so the min/max follow immediately from $d\\pm r$."
 },
 {
  "theme": "loci",
  "themeLabel": "Loci in the Argand Plane",
  "title": "The Tilted Crescent",
  "difficulty": 4,
  "task": "Find",
  "tags": [
   "region",
   "half-plane",
   "disc",
   "area"
  ],
  "statement": "Let $S=\\{\\,z\\in\\mathbb{C}: |z-2|\\le |z-2i|\\ \\text{and}\\ |z|\\le 2\\,\\}$. Identify the region $S$ geometrically and find its area.",
  "answer": "$S$ is the half of the disc $|z|\\le2$ lying on the side $y\\le x$ of the line $y=x$; it is a semicircular region of area $2\\pi$.",
  "trap": "Treating $|z-2|\\le|z-2i|$ as a disc/annulus inequality and intersecting two circles. Equal-weight modulus inequalities are HALF-PLANES (bounded by the perpendicular bisector), so the answer is a half-disc, not a lens.",
  "solutions": [
   {
    "name": "Reduce to a half-plane",
    "steps": [
     "$|z-2|\\le|z-2i|$ squares to $(x-2)^2+y^2\\le x^2+(y-2)^2$.",
     "Expand: $-4x+4\\le-4y+4\\Rightarrow -4x\\le-4y\\Rightarrow x\\ge y$.",
     "So $S=\\{|z|\\le2\\}\\cap\\{x\\ge y\\}$: the part of the disc of radius $2$ on one side of the diameter line $y=x$.",
     "A line through the centre splits a disc into two equal halves, so $\\text{area}(S)=\\tfrac12\\pi(2)^2=\\boxed{2\\pi}$."
    ]
   },
   {
    "name": "Symmetry argument",
    "steps": [
     "The bisector of $2$ and $2i$ is the line $y=x$, which passes through the origin — the centre of the disc $|z|\\le2$.",
     "Hence $\\{x\\ge y\\}$ cuts the disc into two congruent halves (reflection across $y=x$ swaps them).",
     "Each half therefore has area equal to half the disc area $\\pi\\cdot2^2=4\\pi$.",
     "Area $(S)=\\tfrac12\\cdot4\\pi=\\boxed{2\\pi}$."
    ]
   }
  ],
  "remark": "Insight: $|z-a|\\le|z-b|$ is always the closed half-plane on $a$'s side of the perpendicular bisector. When that bisector runs through the disc's centre, the area splits exactly in half — no integration."
 },
 {
  "theme": "loci",
  "themeLabel": "Loci in the Argand Plane",
  "title": "The Sixty-Degree Vigil",
  "difficulty": 4,
  "task": "Determine",
  "tags": [
   "arc",
   "argument",
   "circle-through-two-points",
   "inscribed-angle"
  ],
  "statement": "Determine the locus of all $z$ with\\[\\arg\\!\\left(\\frac{z-1}{z+1}\\right)=\\frac{\\pi}{3}.\\] Give the centre and radius of the circle it lies on, and describe which arc it is.",
  "answer": "It is an arc of the circle centred at $\\dfrac{i}{\\sqrt3}=\\left(0,\\tfrac1{\\sqrt3}\\right)$ with radius $\\dfrac{2}{\\sqrt3}$; specifically the major arc lying in the upper half-plane (where $\\operatorname{Im}z>0$), excluding the endpoints $\\pm1$.",
  "trap": "Concluding $\\arg\\frac{z-1}{z+1}=\\tfrac\\pi3$ gives a full circle. It gives only the ARC on one side of chord $[-1,1]$ from which the segment subtends exactly $\\tfrac\\pi3$; the other arc subtends $\\pi-\\tfrac\\pi3$, and the chord itself is excluded.",
  "solutions": [
   {
    "name": "Inscribed-angle / circle through two points",
    "steps": [
     "$\\arg\\frac{z-1}{z+1}$ is the directed angle subtended at $z$ by the segment from $-1$ to $1$. Setting it to $\\tfrac\\pi3$ forces $z$ onto an arc through $-1$ and $1$ where the inscribed angle is $\\tfrac\\pi3$.",
     "By the extended law of sines, chord $=2R\\sin(\\text{inscribed angle})$: $|1-(-1)|=2=2R\\sin\\tfrac\\pi3$, so $R=\\dfrac{1}{\\sin\\tfrac\\pi3}=\\dfrac{2}{\\sqrt3}$.",
     "The centre lies on the perpendicular bisector of $[-1,1]$ (the imaginary axis) at height $h$ with $h^2+1=R^2=\\tfrac43$, so $h=\\tfrac1{\\sqrt3}$; centre $=\\big(0,\\tfrac1{\\sqrt3}\\big)$.",
     "Since the inscribed angle $\\tfrac\\pi3<\\tfrac\\pi2$, the locus is the major arc, and the positive sign of the argument places it in the upper half-plane. Result: the upper (major) arc of $x^2+(y-\\tfrac1{\\sqrt3})^2=\\tfrac43$, endpoints $\\pm1$ removed. $\\boxed{}$"
    ]
   },
   {
    "name": "Direct algebra (tan of argument)",
    "steps": [
     "Let $w=\\frac{z-1}{z+1}$. With $z=x+iy$, $\\operatorname{Re}w=\\frac{x^2+y^2-1}{(x+1)^2+y^2}$ and $\\operatorname{Im}w=\\frac{2y}{(x+1)^2+y^2}$.",
     "$\\arg w=\\tfrac\\pi3$ means $\\operatorname{Im}w=\\sqrt3\\,\\operatorname{Re}w$ with $\\operatorname{Re}w>0$ and $\\operatorname{Im}w>0$: $2y=\\sqrt3\\,(x^2+y^2-1)$.",
     "Rearrange: $x^2+y^2-\\tfrac{2}{\\sqrt3}y-1=0\\Rightarrow x^2+(y-\\tfrac1{\\sqrt3})^2=1+\\tfrac13=\\tfrac43$.",
     "Centre $\\big(0,\\tfrac1{\\sqrt3}\\big)$, radius $\\tfrac2{\\sqrt3}$; the sign constraint $\\operatorname{Im}w>0$ forces $y>0$, leaving the upper (major) arc. $\\boxed{}$"
    ]
   }
  ],
  "remark": "Insight: $\\arg\\frac{z-a}{z-b}=\\theta$ is the constant-inscribed-angle locus — an arc through $a,b$ with radius $\\frac{|a-b|}{2\\sin\\theta}$. The sign of $\\theta$ picks the side, and whether the arc is major or minor is governed by $\\theta$ being less than or greater than $\\tfrac\\pi2$ (here $\\theta=\\tfrac\\pi3<\\tfrac\\pi2$ gives the major arc); the chord endpoints are never included."
 },
 {
  "theme": "loci",
  "themeLabel": "Loci in the Argand Plane",
  "title": "The Real Conspiracy",
  "difficulty": 3,
  "task": "Classify",
  "tags": [
   "argument",
   "line",
   "collinearity",
   "punctured-locus"
  ],
  "statement": "Classify the locus of all $z$ for which\\[\\frac{z-i}{z-1}\\ \\text{is a real number,}\\qquad\\text{i.e.}\\quad \\operatorname{Im}\\!\\left(\\frac{z-i}{z-1}\\right)=0.\\] State the curve and note any excluded points.",
  "answer": "The line $x+y=1$ (the line through $1$ and $i$), with the single point $z=1$ deleted. The point $z=i$ belongs to the locus, since there the ratio equals $0$, which is real.",
  "trap": "Expecting a circle because a Mobius-type ratio is involved. $\\frac{z-i}{z-1}$ real means $z,\\ 1,\\ i$ are collinear, which is a LINE, not a circle. The companion fact $\\frac{z-i}{z-1}\\in i\\mathbb{R}$ would give the circle. Also, forgetting that $z=1$ must be excluded (denominator zero), and wrongly throwing out $z=i$ even though the ratio is the real number $0$ there.",
  "solutions": [
   {
    "name": "Collinearity reading",
    "steps": [
     "$\\frac{z-i}{z-1}\\in\\mathbb{R}$ iff the displacement vectors $z-i$ and $z-1$ are parallel (or one is zero), i.e. the points $z$, $i$, $1$ are collinear.",
     "The line through $1=(1,0)$ and $i=(0,1)$ has slope $-1$ and equation $x+y=1$.",
     "Exclude $z=1$, where the denominator vanishes. The numerator vanishes at $z=i$, giving ratio $0\\in\\mathbb{R}$, so $z=i$ is kept.",
     "Locus $=\\boxed{x+y=1}$ punctured at $z=1$."
    ]
   },
   {
    "name": "Imaginary part algebra",
    "steps": [
     "Write $z=x+iy$: $\\frac{z-i}{z-1}=\\frac{x+i(y-1)}{(x-1)+iy}$ and multiply top and bottom by the conjugate $(x-1)-iy$ of the denominator.",
     "$\\operatorname{Im}=\\dfrac{(y-1)(x-1)-x\\,y}{(x-1)^2+y^2}=\\dfrac{-x-y+1}{(x-1)^2+y^2}$.",
     "Set the numerator to zero: $-x-y+1=0\\Rightarrow x+y=1$. The denominator $(x-1)^2+y^2$ vanishes only at $z=1$, which is therefore excluded.",
     "Locus $=\\boxed{x+y=1}$ minus $\\{1\\}$ (and $z=i$ is included)."
    ]
   }
  ],
  "remark": "Insight: $\\frac{z-a}{z-b}\\in\\mathbb{R}$ is the line through $a$ and $b$ (collinearity), while $\\frac{z-a}{z-b}\\in i\\mathbb{R}$ is the circle on diameter $ab$ (the inscribed right angle). Realness versus pure-imaginariness flips line $\\leftrightarrow$ circle. Always treat the two zeros of the ratio separately: $z=b$ (pole) leaves the locus, but $z=a$ (zero) gives the real value $0$ and stays."
 },
 {
  "theme": "loci",
  "themeLabel": "Loci in the Argand Plane",
  "title": "The Disguised Unit Circle",
  "difficulty": 4,
  "task": "Determine",
  "tags": [
   "apollonius",
   "circle",
   "modulus-ratio",
   "disguise"
  ],
  "statement": "Determine the locus of all $z$ satisfying\\[|2z-1|=|z-2|.\\] Give its centre and radius, and find all points where it crosses the coordinate axes.",
  "answer": "The unit circle $|z|=1$ (centre $0$, radius $1$). It meets the axes at $\\pm1$ and $\\pm i$.",
  "trap": "Mishandling $|2z-1|$: factoring it as $2|z-1|$ (wrong — $|2z-1|=2\\,|z-\\tfrac12|$, not $2|z-1|$). The correct factor exposes a clean Apollonius ratio $\\tfrac{|z-1/2|}{|z-2|}=\\tfrac12$ giving the unit circle. The bogus factor $2|z-1|=|z-2|$ instead yields the circle centre $\\tfrac23$, radius $\\tfrac23$ — not the unit circle at all.",
  "solutions": [
   {
    "name": "Square directly",
    "steps": [
     "$|2z-1|^2=|z-2|^2$ with $z=x+iy$: $(2x-1)^2+(2y)^2=(x-2)^2+y^2$.",
     "Expand: $4x^2-4x+1+4y^2=x^2-4x+4+y^2$.",
     "The $-4x$ cancels: $4x^2+4y^2+1=x^2+y^2+4\\Rightarrow 3x^2+3y^2=3\\Rightarrow x^2+y^2=1$.",
     "Centre $0$, radius $1$; axis crossings $\\boxed{\\pm1,\\pm i}$."
    ]
   },
   {
    "name": "Apollonius factoring",
    "steps": [
     "$|2z-1|=2\\,|z-\\tfrac12|$, so the equation is $2|z-\\tfrac12|=|z-2|$, i.e. $\\dfrac{|z-\\tfrac12|}{|z-2|}=\\tfrac12$.",
     "Apply the centre formula with $a=\\tfrac12,b=2,k=\\tfrac12$: centre $=\\dfrac{a-k^2b}{1-k^2}=\\dfrac{\\tfrac12-\\tfrac14\\cdot2}{1-\\tfrac14}=\\dfrac{0}{3/4}=0$.",
     "Radius $=\\dfrac{k|a-b|}{|1-k^2|}=\\dfrac{\\tfrac12\\cdot\\tfrac32}{3/4}=1$.",
     "Unit circle, axis crossings $\\boxed{\\pm1,\\pm i}$."
    ]
   },
   {
    "name": "Symmetric trick",
    "steps": [
     "Note $\\tfrac12$ and $2$ are inverse points: $\\tfrac12\\cdot2=1$. The relation $|2z-1|=|z-2|$ rewrites as $\\big|z-\\tfrac12\\big|\\cdot2=|z-2|$.",
     "For the unit circle $|z|=1$, $\\overline z=1/z$, and $|z-2|=|z|\\,|1-2\\overline z|=|1-2\\overline z|=|\\overline{1-2\\overline z}|=|1-2z|=|2z-1|$.",
     "Thus every $z$ with $|z|=1$ satisfies the equation; since the locus is a circle, it is exactly $|z|=1$.",
     "Centre $0$, radius $1$, axis crossings $\\boxed{\\pm1,\\pm i}$."
    ]
   }
  ],
  "remark": "Insight: when the two points are inverse w.r.t. the unit circle ($a\\cdot b=1$) and the weights match their moduli, the Apollonius circle is the unit circle itself. Always rewrite $|cz-d|$ as $|c|\\,|z-d/c|$ before declaring the ratio."
 },
 {
  "theme": "loci",
  "themeLabel": "Loci in the Argand Plane",
  "title": "The Right-Angle Semicircle",
  "difficulty": 5,
  "task": "Prove that",
  "tags": [
   "argument",
   "semicircle",
   "arc",
   "diameter",
   "grand-hybrid"
  ],
  "statement": "Prove that the locus\\[\\arg\\!\\left(\\frac{z-1}{z+1}\\right)=\\frac{\\pi}{2}\\] is precisely the OPEN upper semicircle of the unit circle $|z|=1$ (the points with $\\operatorname{Im}z>0$), and that lowering the prescribed angle to $\\tfrac\\pi2-\\varepsilon$ ($0<\\varepsilon<\\tfrac\\pi2$) replaces it by an arc of strictly LARGER radius. Determine that larger radius as a function of $\\varepsilon$.",
  "answer": "The locus is the open upper unit semicircle $\\{e^{i\\theta}:0<\\theta<\\pi\\}$ (equivalently $x^2+y^2=1,\\ y>0$). For angle $\\tfrac\\pi2-\\varepsilon$ the locus is an upper arc of a circle of radius $R(\\varepsilon)=\\dfrac{1}{\\sin(\\tfrac\\pi2-\\varepsilon)}=\\dfrac1{\\cos\\varepsilon}=\\sec\\varepsilon>1$. Proved.",
  "trap": "Claiming the locus is the whole unit circle. The condition $\\arg=\\tfrac\\pi2$ forces $\\frac{z-1}{z+1}$ to be a POSITIVE imaginary number, so only the arc with $\\operatorname{Im}z>0$ qualifies; the lower semicircle gives argument $-\\tfrac\\pi2$, and $\\pm1$ are excluded.",
  "solutions": [
   {
    "name": "Purely imaginary $\\Rightarrow$ unit circle, sign $\\Rightarrow$ upper",
    "steps": [
     "$\\arg w=\\tfrac\\pi2$ means $w=\\frac{z-1}{z+1}$ is purely imaginary with positive imaginary part: $\\operatorname{Re}w=0,\\ \\operatorname{Im}w>0$.",
     "With $z=x+iy$, $\\operatorname{Re}w=\\dfrac{x^2+y^2-1}{(x+1)^2+y^2}$. Setting it $=0$ gives $x^2+y^2=1$ (the unit circle, $z\\neq-1$).",
     "$\\operatorname{Im}w=\\dfrac{2y}{(x+1)^2+y^2}>0\\iff y>0$. Combined: the open upper unit semicircle (also $z\\ne1$). This proves the first claim.",
     "For angle $\\tfrac\\pi2-\\varepsilon$, the inscribed-angle radius is $R=\\dfrac{|1-(-1)|}{2\\sin(\\tfrac\\pi2-\\varepsilon)}=\\dfrac{1}{\\cos\\varepsilon}=\\sec\\varepsilon$. Since $\\cos\\varepsilon<1$, $R>1$. $\\boxed{R=\\sec\\varepsilon}$"
    ]
   },
   {
    "name": "Inscribed-angle (Thales) viewpoint",
    "steps": [
     "$\\arg\\frac{z-1}{z+1}$ is the angle subtended at $z$ by the chord from $-1$ to $1$. Angle $=\\tfrac\\pi2$ is Thales' theorem: $z$ sees the diameter $[-1,1]$ at a right angle, so $z$ lies on the circle having $[-1,1]$ as diameter — the unit circle.",
     "The positive sign of the argument selects the side of the chord on which the rotation from $z+1$ to $z-1$ is counterclockwise, namely $\\operatorname{Im}z>0$: the upper semicircle (open, endpoints $\\pm1$ excluded).",
     "For a general angle $\\alpha=\\tfrac\\pi2-\\varepsilon$, the chord–radius law $\\text{chord}=2R\\sin\\alpha$ gives $2=2R\\sin(\\tfrac\\pi2-\\varepsilon)$, so $R=\\dfrac1{\\cos\\varepsilon}=\\sec\\varepsilon$.",
     "As $\\varepsilon\\to0^+$, $R\\to1$ (recovering the semicircle); for $\\varepsilon>0$, $R=\\sec\\varepsilon>1$. $\\boxed{R=\\sec\\varepsilon}$"
    ]
   },
   {
    "name": "Parametrise the semicircle, verify, then perturb",
    "steps": [
     "Take $z=e^{i\\theta}=\\cos\\theta+i\\sin\\theta$, $0<\\theta<\\pi$. Then $\\frac{z-1}{z+1}=\\frac{e^{i\\theta}-1}{e^{i\\theta}+1}=i\\tan(\\theta/2)$ using the half-angle identity.",
     "For $0<\\theta<\\pi$, $\\tan(\\theta/2)>0$, so $\\frac{z-1}{z+1}=i\\tan(\\theta/2)$ has argument exactly $\\tfrac\\pi2$. Conversely the $\\operatorname{Re}=0$ condition forced $|z|=1$, so the locus is exactly this open upper semicircle.",
     "Decreasing the target argument to $\\tfrac\\pi2-\\varepsilon$ can no longer be met on $|z|=1$ (there the value is always purely imaginary), so the locus moves to a different arc through $\\pm1$. Solving $2y=(x^2+y^2-1)\\tan(\\tfrac\\pi2-\\varepsilon)$ gives the circle $x^2+y^2-2\\cot(\\tfrac\\pi2-\\varepsilon)\\,y-1=0$ with center $(0,\\cot(\\tfrac\\pi2-\\varepsilon))$.",
     "Its radius is $R=\\sqrt{1+\\cot^2(\\tfrac\\pi2-\\varepsilon)}=\\csc(\\tfrac\\pi2-\\varepsilon)=\\sec\\varepsilon>1$. $\\boxed{R=\\sec\\varepsilon}$"
    ]
   }
  ],
  "remark": "Insight: $\\arg\\frac{z-1}{z+1}=\\tfrac\\pi2$ is Thales' theorem in complex disguise — a right angle on a diameter. The radius $\\sec\\varepsilon$ shows the unit semicircle is the tightest arc; any smaller inscribed angle bulges the circle outward."
 },
 {
  "theme": "transformations",
  "themeLabel": "Mappings of the Plane",
  "title": "The Spinning Anchor",
  "difficulty": 4,
  "task": "Classify",
  "tags": [
   "affine map",
   "rotation",
   "fixed point",
   "complex geometry"
  ],
  "statement": "A rigid-looking transformation of the plane is defined by $w = iz + (1-i)$. Identify the transformation precisely: state its unique fixed point, the angle through which it rotates the plane, and the scaling factor.",
  "answer": "It is a pure rotation (no scaling, factor $1$) by $90^\\circ$ counterclockwise about the fixed point $z_0 = 1$. Equivalently $w - 1 = i\\,(z-1)$.",
  "trap": "Reading $w = iz + (1-i)$ as a rotation about the origin followed by a shift, and stopping there. The leading coefficient $i$ does give a $90^\\circ$ rotation, but the center of rotation is NOT the origin: solving $w=z$ gives the unique fixed point $z_0 = \\tfrac{b}{1-a} = 1$, and indeed $w(0) = 1-i \\neq 0$, so the origin is not fixed. Any orientation-preserving similarity with $|a|=1,\\ a\\ne 1$ is a rotation about $z_0=\\tfrac{b}{1-a}$, here $z_0=1$, not $0$.",
  "solutions": [
   {
    "name": "Fixed-point normal form",
    "steps": [
     "A map $w=az+b$ with $a=i$ has $|a|=1$, so it is an orientation-preserving isometry: a rotation, with scaling factor $|a|=1$.",
     "Find the fixed point by solving $z_0 = a z_0 + b \\Rightarrow z_0(1-a)=b \\Rightarrow z_0 = \\dfrac{b}{1-a} = \\dfrac{1-i}{1-i}=1$.",
     "Rewrite the map about its fixed point: subtract $z_0$ from both sides of $w=az+b$ using $b=z_0(1-a)$, giving $w - z_0 = a(z - z_0)$, i.e. $w-1 = i(z-1)$.",
     "Since $i = e^{i\\pi/2}$, this is rotation by $\\tfrac{\\pi}{2}=90^\\circ$ counterclockwise about $z_0=1$, with scaling factor $1$. $\\boxed{\\text{rotation } 90^\\circ \\text{ about } 1}$"
    ]
   },
   {
    "name": "Test-point verification",
    "steps": [
     "Compute three images: $z=0\\mapsto 1-i$, $z=2\\mapsto 1+i$, and $z=1+i\\mapsto 0$.",
     "For each, form the ratio $\\dfrac{w-1}{z-1}$ about the candidate center $z_0=1$: it equals $\\dfrac{-i}{-1}=i$, $\\dfrac{i}{1}=i$, and $\\dfrac{-1}{i}=i$ respectively, a constant $i$.",
     "A constant ratio $\\dfrac{w-z_0}{z-z_0}=i$ for all $z$ means $w-1=i(z-1)$: every point is spun $90^\\circ$ about $z_0=1$ while its distance to $z_0$ is unchanged.",
     "Because $|i|=1$, distances are preserved (an isometry), so the scaling factor is exactly $1$. $\\boxed{\\text{rotation } 90^\\circ \\text{ about } 1,\\ \\text{factor }1}$"
    ]
   }
  ],
  "remark": "Insight: the universal recipe $w=az+b$ with $a\\ne1$ is always a spiral similarity about $z_0=\\frac{b}{1-a}$, rotating by $\\arg a$ and scaling by $|a|$. When $|a|=1$ the spiral degenerates to a pure rotation. The point $\\frac{b}{1-a}$ is the geometric anchor the whole plane pivots around."
 },
 {
  "theme": "transformations",
  "themeLabel": "Mappings of the Plane",
  "title": "When the Line Becomes a Circle",
  "difficulty": 4,
  "task": "Determine",
  "tags": [
   "inversion",
   "line to circle",
   "point at infinity",
   "image of a line"
  ],
  "statement": "Let $w = \\dfrac{1}{z}$. Determine the exact image, in the $w$-plane, of the vertical line $\\operatorname{Re}(z) = 1$. State whether it is a line or a circle and give its equation. Identify the image of the point at infinity, and state precisely which points of that curve are actually attained by finite points of the line.",
  "answer": "The image is the circle $\\left|w - \\tfrac12\\right| = \\tfrac12$ (center $\\tfrac12$, radius $\\tfrac12$), equivalently $u^2+v^2 = u$ where $w=u+iv$. The point $z=\\infty$ maps to $w=0$, which lies on this circle (its leftmost point). Every finite $z$ with $\\operatorname{Re}(z)=1$ maps to a point of the circle other than $0$, and as $z\\to\\infty$ along the line $w\\to 0$ without ever equaling it. Thus the affine line covers the circle minus the single point $w=0$; adjoining $z=\\infty$ (working on the Riemann sphere) completes the circle.",
  "trap": "Declaring 'inversion is a M\\u00f6bius map, M\\u00f6bius maps send lines to lines, so the answer is another line.' False: $w=1/z$ preserves the combined family of lines-and-circles, but a line NOT through the origin becomes a CIRCLE through the origin. Since $\\operatorname{Re}(z)=1$ misses $z=0$, the image cannot pass through $w=\\infty$; instead it must pass through $w=0$ (the image of $z=\\infty$), forcing a genuine circle, not a line.",
  "solutions": [
   {
    "name": "Substitute and complete the square",
    "steps": [
     "Write $z=\\dfrac1w$. With $w=u+iv$, $\\dfrac1w=\\dfrac{u-iv}{u^2+v^2}$, so $\\operatorname{Re}\\!\\big(\\tfrac1w\\big)=\\dfrac{u}{u^2+v^2}$.",
     "The condition $\\operatorname{Re}(z)=1$ becomes $\\dfrac{u}{u^2+v^2}=1$, i.e. $u = u^2+v^2$ (the denominator $u^2+v^2$ never vanishes on the image since $w=0$ is only a limit point).",
     "Rearranging, $u^2-u+v^2=0\\Rightarrow\\big(u-\\tfrac12\\big)^2+v^2=\\tfrac14$. This is the circle of center $\\tfrac12$, radius $\\tfrac12$: $\\boxed{\\,|w-\\tfrac12|=\\tfrac12\\,}$.",
     "The locus $u=u^2+v^2$ is satisfied by $w=0$, but no finite $z$ on the line gives $w=0$; $w=0$ is attained only as the image of $z=\\infty$. Hence the finite line traces the circle except the point $0$."
    ]
   },
   {
    "name": "Three points pin the circle",
    "steps": [
     "Pick $z=1,\\;1+i,\\;1-i$ on the line. Their images are $\\dfrac11=1$, $\\dfrac1{1+i}=\\tfrac12-\\tfrac12 i$, $\\dfrac1{1-i}=\\tfrac12+\\tfrac12 i$.",
     "These three points are not collinear (the segment from $1$ to $\\tfrac12-\\tfrac12 i$ and from $1$ to $\\tfrac12+\\tfrac12 i$ turn in opposite senses), so they determine a unique circle, not a line. Solving, that circle is $|w-\\tfrac12|=\\tfrac12$.",
     "As $z\\to\\infty$ along the line, $w=1/z\\to 0$, and $|0-\\tfrac12|=\\tfrac12$, so $w=0$ also lies on this circle; it is the image of $z=\\infty$.",
     "All of $1,\\;\\tfrac12\\pm\\tfrac12 i,\\;0$ satisfy $|w-\\tfrac12|=\\tfrac12$, confirming $\\boxed{\\,|w-\\tfrac12|=\\tfrac12\\,}$, with the finite line covering every point of it except $0$."
    ]
   }
  ],
  "remark": "Insight: a line is the cleanest test of the inversion dictionary. A line missing the origin maps to a circle through the origin (the origin being the image of $\\infty$); a line through the origin maps to a line through the origin. The fine print is coverage: the affine line attains the whole image circle except its through-origin point, which is reached only in the limit $z\\to\\infty$ \\u2014 a distinction that disappears on the Riemann sphere."
 },
 {
  "theme": "transformations",
  "themeLabel": "Mappings of the Plane",
  "title": "The Mapmaker's Three Wishes",
  "difficulty": 4,
  "task": "Find a,b",
  "tags": [
   "mobius",
   "cross ratio",
   "three points",
   "point at infinity"
  ],
  "statement": "Find the unique Möbius transformation $w=\\dfrac{az+b}{cz+d}$ (up to common scaling of $a,b,c,d$) that sends $0\\mapsto 1$, $\\;1\\mapsto\\infty$, and $\\;\\infty\\mapsto 0$. Then state where it sends $z=2$.",
  "answer": "$w=\\dfrac{1}{1-z}$ (equivalently $a=0,\\,b=-1,\\,c=1,\\,d=-1$). It sends $z=2$ to $w=-1$.",
  "trap": "Forcing a 'nice' template like $w=\\dfrac{z+b}{z+d}$ (silently assuming $a=c=1$) and then getting stuck. With $a=c=1$ the image of $\\infty$ is $\\dfrac{a}{c}=1$, never $0$, so the wish $\\infty\\mapsto0$ becomes impossible. The condition $\\infty\\mapsto0$ forces $\\dfrac{a}{c}=0$, hence $a=0$—the numerator carries no $z$ term at all. Let the structure be dictated by the point at infinity, not by a guessed form.",
  "solutions": [
   {
    "name": "Read off the three constraints",
    "steps": [
     "Translate each wish into a relation among $a,b,c,d$. From $0\\mapsto1$: $\\dfrac{b}{d}=1\\Rightarrow b=d$. From $\\infty\\mapsto0$: $\\dfrac{a}{c}=0\\Rightarrow a=0$. From $1\\mapsto\\infty$: the denominator must vanish at $z=1$, so $c\\cdot1+d=0\\Rightarrow d=-c$.",
     "Normalize by taking $c=1$. Then $d=-1$, $b=d=-1$, $a=0$, giving $w=\\dfrac{0\\cdot z-1}{1\\cdot z-1}=\\dfrac{-1}{z-1}=\\dfrac{1}{1-z}$.",
     "Check $z=2$: $w=\\dfrac{1}{1-2}=-1$. $\\boxed{w=\\dfrac{1}{1-z},\\ \\ 2\\mapsto-1}$"
    ]
   },
   {
    "name": "Cross-ratio invariance",
    "steps": [
     "A Möbius map preserves the cross ratio, so the image $w$ of $z$ satisfies $(w,w_1;w_2,w_3)=(z,z_1;z_2,z_3)$ with sources $z_1,z_2,z_3=0,1,\\infty$ and targets $w_1,w_2,w_3=1,\\infty,0$. Using $(p,p_1;p_2,p_3)=\\dfrac{(p-p_1)(p_2-p_3)}{(p-p_3)(p_2-p_1)}$, the entries equal to $\\infty$ are removed by taking limits.",
     "Left side: $w_2=\\infty$ makes the factor $\\dfrac{w_2-w_3}{w_2-w_1}\\to1$, leaving $\\dfrac{w-w_1}{w-w_3}=\\dfrac{w-1}{w-0}=\\dfrac{w-1}{w}$. Right side: $z_3=\\infty$ gives $\\displaystyle\\lim_{z_3\\to\\infty}\\dfrac{(z-0)(1-z_3)}{(z-z_3)(1-0)}=z$.",
     "Hence $\\dfrac{w-1}{w}=z\\Rightarrow w-1=wz\\Rightarrow w(1-z)=1\\Rightarrow w=\\dfrac{1}{1-z}$. Substituting the three points confirms $0\\mapsto1,\\ 1\\mapsto\\infty,\\ \\infty\\mapsto0$, and $z=2$ gives $w=-1$. $\\boxed{w=\\dfrac{1}{1-z}}$"
    ]
   }
  ],
  "remark": "Three target points pin down a Möbius map uniquely (up to common scaling). The clean route is to convert every condition—including the ones involving $\\infty$—directly into a relation among $a,b,c,d$, letting the point at infinity kill a coefficient ($a=0$ here) or create a pole ($cz+d=0$ at $z=1$) rather than guessing a template. Incidentally this map is the order-3 rotation $z\\mapsto\\frac{1}{1-z}$ cycling $0\\to1\\to\\infty\\to0$, so applying it three times returns the identity."
 },
 {
  "theme": "transformations",
  "themeLabel": "Mappings of the Plane",
  "title": "The Gateway of the Unit Disk",
  "difficulty": 4,
  "task": "Determine",
  "tags": [
   "mobius",
   "half-plane to disk",
   "image of a line",
   "boundary"
  ],
  "statement": "Consider $w=\\dfrac{z-1}{z+1}$. Determine (a) the image of the imaginary axis $\\operatorname{Re}(z)=0$, and (b) the image of the open right half-plane $\\operatorname{Re}(z)>0$. State each image set explicitly.",
  "answer": "(a) The imaginary axis maps onto the unit circle $|w|=1$. (b) The right half-plane $\\operatorname{Re}(z)>0$ maps onto the open unit disk $|w|<1$.",
  "trap": "Assuming the line $\\operatorname{Re}(z)=0$ maps to another straight line because $w$ is a 'fractional-linear' map and 'those are linear.' It is not affine: the line does NOT pass through the pole $z=-1$ in a way that keeps it a line — in fact $\\operatorname{Re}(z)=0$ is equidistant data that maps to the unit circle. Always test whether the line/region contains the pole $z=-d/c=-1$ before guessing.",
  "solutions": [
   {
    "name": "Modulus on the boundary",
    "steps": [
     "For $z=it$ on the imaginary axis: $|w|=\\dfrac{|it-1|}{|it+1|}=\\dfrac{\\sqrt{t^2+1}}{\\sqrt{t^2+1}}=1$. So the whole axis lands on $|w|=1$.",
     "Pick an interior point $z=1$ (in $\\operatorname{Re}(z)>0$): $w=\\frac{0}{2}=0$, with $|w|=0<1$, so the open right half-plane maps inside the unit circle.",
     "By continuity and bijectivity of Möbius maps, the connected region $\\operatorname{Re}(z)>0$ maps onto the connected region $|w|<1$. $\\boxed{\\text{axis}\\to|w|=1,\\ \\ \\operatorname{Re}(z)>0\\to|w|<1}$"
    ]
   },
   {
    "name": "Algebraic inequality",
    "steps": [
     "Note $\\operatorname{Re}(z)>0 \\iff z+\\bar z>0 \\iff |z-1|<|z+1|$ (point closer to $1$ than to $-1$).",
     "But $|w|=\\dfrac{|z-1|}{|z+1|}$, so $|z-1|<|z+1| \\iff |w|<1$.",
     "Equality $|z-1|=|z+1|\\iff\\operatorname{Re}(z)=0$ gives $|w|=1$; the strict inequality gives the open disk. $\\boxed{\\operatorname{Re}(z)>0\\ \\Leftrightarrow\\ |w|<1}$"
    ]
   }
  ],
  "remark": "Insight: $\\frac{z-1}{z+1}$ is the canonical 'half-plane $\\to$ disk' gate. The slick proof reads $|w|<1$ as 'closer to $1$ than to $-1$,' i.e. the perpendicular-bisector inequality, turning a mapping question into pure distance geometry."
 },
 {
  "theme": "transformations",
  "themeLabel": "Mappings of the Plane",
  "title": "Two Mirrors Make a Turn",
  "difficulty": 4,
  "task": "Prove that",
  "tags": [
   "reflection",
   "conjugation",
   "composition",
   "rotation"
  ],
  "statement": "Let $R_1(z)=\\bar z$ be reflection across the real axis, and let $R_2(z)=i\\,\\bar z$ be reflection across the line $y=x$. Prove that the composition $R_2\\circ R_1$ is a rotation, and find its center and angle. Then determine what $R_1\\circ R_2$ is.",
  "answer": "$R_2\\circ R_1(z)=iz$: a rotation by $90^\\circ$ counterclockwise about the origin. $R_1\\circ R_2(z)=\\overline{i\\bar z}=-i z$: a rotation by $90^\\circ$ clockwise about the origin (the inverse rotation).",
  "trap": "Believing 'two reflections always cancel to the identity,' or that order doesn't matter. Composition of reflections across two DISTINCT lines through a common point is a rotation by twice the angle between the lines, and reversing the order reverses the rotation. The lines here meet at $0$ with angle $45^\\circ$, giving a $90^\\circ$ turn whose sign flips with order.",
  "solutions": [
   {
    "name": "Direct algebra",
    "steps": [
     "$R_2\\circ R_1(z)=R_2(\\bar z)=i\\,\\overline{(\\bar z)}=i z$. Since $|i|=1$ and $\\arg i=90^\\circ$, this fixes $0$ and rotates by $90^\\circ$ CCW.",
     "$R_1\\circ R_2(z)=R_1(i\\bar z)=\\overline{i\\bar z}=\\bar i\\,z=-i z$: rotation by $-90^\\circ$ about $0$.",
     "Both fix the origin (the intersection of the two mirror lines), confirming the center. $\\boxed{R_2R_1=iz\\ (90^\\circ),\\ R_1R_2=-iz\\ (-90^\\circ)}$"
    ]
   },
   {
    "name": "Angle-doubling principle",
    "steps": [
     "Reflection across a line through $0$ at angle $\\theta$ is $z\\mapsto e^{2i\\theta}\\bar z$. Real axis: $\\theta=0\\Rightarrow R_1(z)=\\bar z$. Line $y=x$: $\\theta=45^\\circ\\Rightarrow R_2(z)=e^{i\\pi/2}\\bar z=i\\bar z$. ✓",
     "Composing two such reflections: $e^{2i\\theta_2}\\overline{(e^{2i\\theta_1}\\bar z)}=e^{2i\\theta_2}e^{-2i\\theta_1}z=e^{2i(\\theta_2-\\theta_1)}z$.",
     "With $\\theta_2-\\theta_1=45^\\circ$, $R_2R_1=e^{i\\pi/2}z=iz$ ($90^\\circ$ CCW). Swapping gives $\\theta_1-\\theta_2=-45^\\circ$, hence $-iz$. $\\boxed{\\pm 90^\\circ \\text{ rotations about } 0}$"
    ]
   }
  ],
  "remark": "Insight: every rotation is a product of two reflections, and the rotation angle is exactly twice the angle between the mirrors, a fact that powers both kaleidoscopes and the structure of dihedral symmetry groups."
 },
 {
  "theme": "transformations",
  "themeLabel": "Mappings of the Plane",
  "title": "The Annulus Turned Inside-Out",
  "difficulty": 4,
  "task": "Determine",
  "tags": [
   "inversion",
   "annulus",
   "region image",
   "modulus"
  ],
  "statement": "Under $w=\\dfrac{1}{z}$, determine the image of the open annulus $1<|z|<2$. Then determine the image of its boundary circles $|z|=1$ and $|z|=2$, and state which boundary of the original maps to which boundary of the image.",
  "answer": "The annulus $1<|z|<2$ maps to the annulus $\\tfrac12<|w|<1$. The inner boundary $|z|=1$ maps to the OUTER boundary $|w|=1$; the outer boundary $|z|=2$ maps to the INNER boundary $|w|=\\tfrac12$ (the inversion swaps inside and outside).",
  "trap": "Writing 'inner maps to inner, outer to outer' by reflex. Inversion REVERSES the radial order: larger $|z|$ gives smaller $|w|=1/|z|$. So the circle $|z|=2$ (the outer edge) becomes $|w|=\\tfrac12$ (the inner edge). Forgetting this orientation flip puts the boundaries on the wrong sides.",
  "solutions": [
   {
    "name": "Modulus inversion",
    "steps": [
     "$|w|=\\left|\\frac1z\\right|=\\frac{1}{|z|}$. The map $r\\mapsto 1/r$ is a strictly decreasing bijection.",
     "$1<|z|<2 \\Rightarrow \\frac12<\\frac{1}{|z|}<1$, so $\\tfrac12<|w|<1$: an annulus.",
     "$|z|=1\\Rightarrow|w|=1$ (outer image circle); $|z|=2\\Rightarrow|w|=\\tfrac12$ (inner image circle) — order reversed. $\\boxed{\\tfrac12<|w|<1,\\ \\text{boundaries swapped}}$"
    ]
   },
   {
    "name": "Sample-point check",
    "steps": [
     "Take $z=\\tfrac32$ (mid-annulus): $w=\\tfrac23\\in(\\tfrac12,1)$. ✓ interior of image annulus.",
     "Approach inner edge $z\\to1^+$: $w\\to1^-$, i.e. toward the OUTER image circle. Approach outer edge $z\\to2^-$: $w\\to\\tfrac12^+$, toward the INNER image circle.",
     "Hence $1<|z|<2 \\mapsto \\tfrac12<|w|<1$ with the radial sense reversed. $\\boxed{\\tfrac12<|w|<1}$"
    ]
   }
  ],
  "remark": "Insight: inversion $w=1/z$ acts on modulus as $r\\mapsto1/r$ and on argument as $\\theta\\mapsto-\\theta$. The modulus reciprocation is exactly why the unit circle is the fixed 'mirror' and why annuli get turned radially inside-out."
 },
 {
  "theme": "transformations",
  "themeLabel": "Mappings of the Plane",
  "title": "A Map With Only One Anchor",
  "difficulty": 5,
  "task": "Classify",
  "tags": [
   "mobius",
   "fixed point",
   "parabolic",
   "trace"
  ],
  "statement": "Classify the Möbius transformation $w=\\dfrac{3z-4}{z-1}$ by finding all its fixed points and computing the quantity $\\dfrac{(\\operatorname{tr}M)^2}{\\det M}$ for its (normalized) matrix $M=\\begin{pmatrix}3&-4\\\\1&-1\\end{pmatrix}$. State whether the map is elliptic, parabolic, hyperbolic, or loxodromic, and explain via the fixed-point count.",
  "answer": "Single (double) fixed point $z=2$; $\\det M=1$, $\\operatorname{tr}M=2$, so $\\dfrac{(\\operatorname{tr}M)^2}{\\det M}=4$. The map is PARABOLIC (one fixed point, $(\\operatorname{tr})^2=4\\det$).",
  "trap": "Solving the fixed-point quadratic and reporting 'two fixed points' from the two roots of $z^2-4z+4=0$ without noticing it is a perfect square $(z-2)^2$. A repeated root means ONE fixed point, the signature of a parabolic map; counting it as two would wrongly suggest a hyperbolic/loxodromic classification.",
  "solutions": [
   {
    "name": "Fixed-point equation",
    "steps": [
     "Set $z=\\frac{3z-4}{z-1}\\Rightarrow z(z-1)=3z-4\\Rightarrow z^2-z=3z-4\\Rightarrow z^2-4z+4=0$.",
     "$(z-2)^2=0$: a double root $z=2$ — exactly one fixed point in $\\widehat{\\mathbb C}$.",
     "A non-identity Möbius map with a single fixed point is parabolic. $\\boxed{\\text{parabolic, fixed point } z=2}$"
    ]
   },
   {
    "name": "Trace invariant",
    "steps": [
     "Normalize $M=\\begin{pmatrix}3&-4\\\\1&-1\\end{pmatrix}$: $\\det M=3(-1)-(-4)(1)=-3+4=1$, already in $SL_2$.",
     "$\\operatorname{tr}M=3+(-1)=2$, so $(\\operatorname{tr}M)^2=4=4\\det M$.",
     "The classification rule: $(\\operatorname{tr})^2=4\\det\\Rightarrow$ parabolic (the borderline between elliptic $<4\\det$ and hyperbolic $>4\\det$, real trace). $\\boxed{\\text{parabolic}}$"
    ]
   },
   {
    "name": "Conjugation to a translation",
    "steps": [
     "Move the fixed point to $\\infty$ via $\\zeta=\\dfrac{1}{z-2}$; then $z=2+\\dfrac1\\zeta$ and the map becomes $\\dfrac{1}{w-2}=\\dfrac{1}{z-2}+c$ for some constant $c$.",
     "Compute $w-2=\\dfrac{3z-4}{z-1}-2=\\dfrac{3z-4-2(z-1)}{z-1}=\\dfrac{z-2}{z-1}$, so $\\dfrac{1}{w-2}=\\dfrac{z-1}{z-2}=1+\\dfrac{1}{z-2}$.",
     "Thus in the $\\zeta$-coordinate the map is $\\zeta\\mapsto\\zeta+1$, a pure translation — the hallmark of a parabolic map (single fixed point at $\\infty$). $\\boxed{\\text{parabolic}}$"
    ]
   }
  ],
  "remark": "Insight: the trace test $(\\operatorname{tr})^2/\\det$ classifies Möbius maps without ever solving for fixed points; parabolic maps sit exactly on the value $4$, the knife-edge where the two fixed points have collided into one. Conjugating to $\\zeta\\mapsto\\zeta+1$ makes the single anchor visible as the lone fixed point $\\infty$ of a translation."
 },
 {
  "theme": "transformations",
  "themeLabel": "Mappings of the Plane",
  "title": "The Half-Plane Folded Into a Coin",
  "difficulty": 5,
  "task": "Determine",
  "tags": [
   "inversion",
   "half-plane",
   "region image",
   "disk"
  ],
  "statement": "Under the inversion $w=\\dfrac{1}{z}$, determine the exact image of the closed half-plane $\\{z:\\operatorname{Re}(z)\\ge 1\\}$. Describe the boundary curve and the resulting region (including the status of the point $w=0$).",
  "answer": "The image is the closed disk $\\left|w-\\tfrac12\\right|\\le\\tfrac12$. The boundary line $\\operatorname{Re}(z)=1$ maps onto the circle $\\left|w-\\tfrac12\\right|=\\tfrac12$, and the open half-plane $\\operatorname{Re}(z)>1$ maps onto the open disk $\\left|w-\\tfrac12\\right|<\\tfrac12$. The point $w=0$ (the image of $z=\\infty$) lies on this disk's boundary circle.",
  "trap": "Reasoning 'the line maps to a circle, and a half-plane is unbounded, so its image must also be unbounded — the OUTSIDE of the circle.' This is wrong: inversion sends the far points ($|z|\\to\\infty$, exactly where the half-plane is enormous) to points NEAR $0$, which sits on the small circle. The unbounded half-plane collapses to the BOUNDED disk, not its exterior. One interior sample, $z=2\\mapsto\\tfrac12$ (the center), instantly fixes the correct side.",
  "solutions": [
   {
    "name": "Boundary plus one interior point",
    "steps": [
     "Write $w=u+iv$. Then $z=\\dfrac1w=\\dfrac{u-iv}{u^2+v^2}$, so $\\operatorname{Re}(z)=\\dfrac{u}{u^2+v^2}$.",
     "Boundary $\\operatorname{Re}(z)=1$: $\\dfrac{u}{u^2+v^2}=1\\Rightarrow u^2-u+v^2=0\\Rightarrow\\left(u-\\tfrac12\\right)^2+v^2=\\tfrac14$ — the circle $\\left|w-\\tfrac12\\right|=\\tfrac12$.",
     "Test an interior point $z=2$ (with $\\operatorname{Re}=2>1$): $w=\\tfrac12$, the CENTER of that circle, so $\\operatorname{Re}(z)>1$ lands inside the disk.",
     "As $z\\to\\infty$ within the half-plane, $w\\to0$, a point on the circle; together with the interior test the region is the full closed disk $\\boxed{\\left|w-\\tfrac12\\right|\\le\\tfrac12}$."
    ]
   },
   {
    "name": "Inequality transport",
    "steps": [
     "For $w\\ne0$, $\\operatorname{Re}(z)\\ge1\\iff\\operatorname{Re}\\!\\left(\\dfrac1w\\right)\\ge1\\iff\\dfrac{u}{u^2+v^2}\\ge1$.",
     "Since $u^2+v^2>0$, multiplying preserves the inequality: $u\\ge u^2+v^2\\iff u^2-u+v^2\\le0\\iff\\left(u-\\tfrac12\\right)^2+v^2\\le\\tfrac14$.",
     "This is exactly the closed disk $\\left|w-\\tfrac12\\right|\\le\\tfrac12$. Adjoining $w=0$ as the image of $z=\\infty$ (which already satisfies the equation as a boundary point) gives $\\boxed{\\left|w-\\tfrac12\\right|\\le\\tfrac12}$."
    ]
   }
  ],
  "remark": "Insight: inversion swaps 'near $\\infty$' with 'near $0$,' so an unbounded half-plane whose boundary line misses the origin always folds into a bounded disk — the bound on $|z|$ from below becomes a bound on $|w|$ from above. The single test point $z=2\\mapsto\\tfrac12$ (the center) settles which side of the boundary circle you land on, immediately killing the 'exterior' trap."
 },
 {
  "theme": "transformations",
  "themeLabel": "Mappings of the Plane",
  "title": "Stamping a Circle Elsewhere",
  "difficulty": 3,
  "task": "Find a,b",
  "tags": [
   "similarity",
   "scaling",
   "translation",
   "image of a circle"
  ],
  "statement": "A similarity transformation $w=az+b$ ($a,b\\in\\mathbb C$) carries the unit circle $|z|=1$ onto the circle of radius $2$ centered at $3-i$, and sends $z=1$ to the rightmost point $5-i$ of the target circle. Find $a$ and $b$, and state the rotation angle and scaling factor of the map.",
  "answer": "$a=2,\\ b=3-i$. The map is $w=2z+(3-i)$: pure scaling by factor $2$ with rotation angle $0^\\circ$ (no rotation), followed by translation by $3-i$.",
  "trap": "Picking $a$ of modulus $2$ but with a nonzero argument (e.g. $a=2i$) just to 'rotate the circle into place.' A circle has no orientation, so many $a$ with $|a|=2$ map $|z|=1$ onto the right target circle — but the extra condition $z=1\\mapsto 5-i$ pins the argument: it forces $a$ to be the POSITIVE real $2$, killing any rotation. (With $a=2i$ one would get $z=1\\mapsto 3+i$, not $5-i$.)",
  "solutions": [
   {
    "name": "Match center and radius, then the marked point",
    "steps": [
     "Under $w=az+b$ the center $z=0$ maps to $w=b$, and the radius scales by $|a|$. Since the image is the circle of radius $2$ centered at $3-i$, we read off $b=3-i$ and $|a|=2$.",
     "The marked point fixes the argument: $z=1\\mapsto a(1)+b=a+(3-i)$ must equal $5-i$, so $a=(5-i)-(3-i)=2$.",
     "Thus $a=2$ (real positive, modulus $2$, argument $0$): scaling $\\times 2$, no rotation, shift $3-i$. $\\boxed{a=2,\\ b=3-i}$"
    ]
   },
   {
    "name": "Two-point determination",
    "steps": [
     "A similarity $w=az+b$ is determined by two source/target pairs. Take the center: $z=0\\mapsto 3-i$ gives $b=3-i$. Take the marked boundary point: $z=1\\mapsto 5-i$ gives $a+b=5-i$.",
     "Subtract the two relations: $a=(5-i)-(3-i)=2$.",
     "Consistency check: $|a|=2$ matches the target radius $2$, and $\\arg a=0$ means no rotation. $\\boxed{w=2z+(3-i)}$"
    ]
   }
  ],
  "remark": "Insight: a circle alone cannot detect rotation (it is rotationally symmetric), so to pin down a similarity you must track a marked point on it. Center plus radius give $|a|$ and $b$; one labeled boundary point gives $\\arg a$. Here the marked point lies on the real axis of the image relative to the center ($5-i$ is directly right of $3-i$), which is exactly why the argument collapses to $0$."
 },
 {
  "theme": "transformations",
  "themeLabel": "Mappings of the Plane",
  "title": "The Vanishing Diameter",
  "difficulty": 5,
  "task": "Determine",
  "tags": [
   "inversion",
   "circle through origin",
   "line image",
   "mobius"
  ],
  "statement": "Under $w=\\dfrac{1}{z}$, determine the image of the circle $|z-1|=1$ (which passes through the origin). State whether the image is a line or a circle and give its exact equation. Identify which point of the original circle is responsible for the image being unbounded.",
  "answer": "The image is the vertical LINE $\\operatorname{Re}(w)=\\tfrac12$. The origin $z=0$ on the circle (where $z=0\\mapsto w=\\infty$) is responsible: a circle through the origin inverts to a line not through the origin.",
  "trap": "Assuming the image of a circle under inversion is again a circle. It usually is — UNLESS the circle passes through the center of inversion ($z=0$). Here $|z-1|=1$ passes through $0$, so $z=0\\mapsto\\infty$, forcing the image to be a LINE (a 'circle through $\\infty$'). Outputting a bounded circle misses the singular point entirely.",
  "solutions": [
   {
    "name": "Substitute the circle equation",
    "steps": [
     "$|z-1|=1 \\iff (z-1)(\\bar z-1)=1 \\iff |z|^2 - z-\\bar z+1=1 \\iff |z|^2=z+\\bar z=2\\operatorname{Re}(z)$.",
     "Put $z=1/w$: $\\left|\\tfrac1w\\right|^2 = 2\\operatorname{Re}\\!\\big(\\tfrac1w\\big)$, i.e. $\\dfrac{1}{|w|^2}=2\\cdot\\dfrac{\\operatorname{Re}(w)}{|w|^2}$ (using $\\operatorname{Re}(1/w)=\\operatorname{Re}(w)/|w|^2$).",
     "Cancel $|w|^2$: $1=2\\operatorname{Re}(w)\\Rightarrow \\operatorname{Re}(w)=\\tfrac12$, a vertical line. $\\boxed{\\operatorname{Re}(w)=\\tfrac12}$"
    ]
   },
   {
    "name": "Geometry of the singular point",
    "steps": [
     "The circle $|z-1|=1$ passes through $z=0$ and $z=2$. Inversion sends $z=0\\mapsto\\infty$ and $z=2\\mapsto\\tfrac12$.",
     "Because the image curve contains $\\infty$, it is a straight line. The real point $z=2\\mapsto\\tfrac12$ lies on it.",
     "A third point $z=1+i\\mapsto\\frac{1}{1+i}=\\tfrac12-\\tfrac12 i$ also has $\\operatorname{Re}=\\tfrac12$; the line is $\\operatorname{Re}(w)=\\tfrac12$. $\\boxed{\\operatorname{Re}(w)=\\tfrac12}$"
    ]
   }
  ],
  "remark": "Insight: the unified law is 'inversion permutes lines-and-circles, and it turns a circle into a line precisely when the circle passes through the center of inversion.' The point at the center is the one that gets blown up to $\\infty$, straightening the curve."
 },
 {
  "theme": "triangles",
  "themeLabel": "Triangles & Polygons",
  "title": "The Twin That Got Away",
  "difficulty": 4,
  "task": "Find all",
  "tags": [
   "equilateral",
   "rotation",
   "orientation",
   "argand-plane"
  ],
  "statement": "In the Argand plane, $A$ and $B$ are the points $1+2i$ and $5+2i$. \\[\\text{Find all complex numbers } z \\text{ for which } A,\\,B,\\,z \\text{ are the vertices of an equilateral triangle, and state the area of the triangle.}\\]",
  "answer": "There are exactly two such points: $z=3+\\big(2+2\\sqrt3\\big)i$ and $z=3+\\big(2-2\\sqrt3\\big)i$. In both cases the area is $4\\sqrt3$.",
  "trap": "Computing only $z=A+(B-A)e^{i\\pi/3}$ and stopping. The phrase \"equilateral triangle\" does NOT fix orientation: rotating $B$ about $A$ by $+60^\\circ$ and by $-60^\\circ$ both give valid triangles, so there are two apexes (reflections of each other across line $AB$), not one. Reporting a single $z$ loses half the answer.",
  "solutions": [
   {
    "name": "Rotation about a vertex",
    "steps": [
     "The third vertex is obtained by rotating $B$ about $A$ through $\\pm60^\\circ$: $z=A+(B-A)e^{\\pm i\\pi/3}$.",
     "Here $B-A=4$, and $e^{\\pm i\\pi/3}=\\tfrac12\\pm\\tfrac{\\sqrt3}{2}i$, so $z=(1+2i)+4\\big(\\tfrac12\\pm\\tfrac{\\sqrt3}{2}i\\big)=3+2i\\pm2\\sqrt3\\,i$.",
     "Both signs are legitimate, giving $z=3+(2+2\\sqrt3)i$ and $z=3+(2-2\\sqrt3)i$.",
     "The side length is $|B-A|=4$, so area $=\\tfrac{\\sqrt3}{4}\\cdot4^2=\\boxed{4\\sqrt3}$ for each."
    ]
   },
   {
    "name": "Symmetric equilateral condition",
    "steps": [
     "Set $z_1=A,\\,z_2=B,\\,z_3=z$ in $z_1^2+z_2^2+z_3^2=z_1z_2+z_2z_3+z_3z_1$, which holds for any orientation of an equilateral triangle.",
     "This is a quadratic in $z$: $z^2-(A+B)z+(A^2+B^2-AB)=0$, whose two roots are the two apexes, automatically capturing both orientations.",
     "Solving with $A=1+2i,\\,B=5+2i$ yields $z=3+(2\\pm2\\sqrt3)i$.",
     "Side $=4\\Rightarrow$ area $=\\boxed{4\\sqrt3}$."
    ]
   },
   {
    "name": "Perpendicular bisector and height",
    "steps": [
     "The apex lies on the perpendicular bisector of $AB$, the vertical line $\\operatorname{Re}z=3$, at height $\\pm$(altitude) from the midpoint $3+2i$.",
     "Altitude of an equilateral triangle of side $4$ is $\\tfrac{\\sqrt3}{2}\\cdot4=2\\sqrt3$.",
     "So $z=3+(2\\pm2\\sqrt3)i$; the two signs are the two sides of $AB$.",
     "Area $=\\tfrac12\\cdot4\\cdot2\\sqrt3=\\boxed{4\\sqrt3}$."
    ]
   }
  ],
  "remark": "Insight: an unoriented equilateral triangle on a fixed base has a built-in two-fold ambiguity. The symmetric identity $\\sum z_k^2=\\sum z_jz_k$ is orientation-blind precisely because it is a quadratic in $z$, and its two roots ARE the two apexes."
 },
 {
  "theme": "triangles",
  "themeLabel": "Triangles & Polygons",
  "title": "One Vertex, Two Radii",
  "difficulty": 4,
  "task": "Find all",
  "tags": [
   "equilateral",
   "cube-roots",
   "modulus",
   "orientation"
  ],
  "statement": "Let $z_1=4$ and $z_2=-2+2\\sqrt3\\,i$. \\[\\text{Find every } z_3 \\text{ for which } z_1,z_2,z_3 \\text{ form an equilateral triangle, and for each give } |z_3|.\\]",
  "answer": "$z_3=-2-2\\sqrt3\\,i$ with $|z_3|=4$, and $z_3=4+4\\sqrt3\\,i$ with $|z_3|=8$.",
  "trap": "Noticing $z_1=4,\\,z_2=4\\omega$ (where $\\omega=e^{2\\pi i/3}$) and \"completing the pattern\" with $z_3=4\\omega^2=-2-2\\sqrt3\\,i$ only. That is just ONE orientation (the inscribed one with $|z_3|=4$). The opposite orientation reflects $z_3$ across the line $z_1z_2$, landing at $4+4\\sqrt3\\,i$ with $|z_3|=8$ — same triangle shape, far larger modulus.",
  "solutions": [
   {
    "name": "Rotation, both signs",
    "steps": [
     "$z_3=z_1+(z_2-z_1)e^{\\pm i\\pi/3}$ with $z_2-z_1=-6+2\\sqrt3\\,i$.",
     "Sign $+$: $z_3=4+(-6+2\\sqrt3 i)\\left(\\tfrac12+\\tfrac{\\sqrt3}{2}i\\right)=-2-2\\sqrt3\\,i$, modulus $\\sqrt{4+12}=4$.",
     "Sign $-$: $z_3=4+(-6+2\\sqrt3 i)\\left(\\tfrac12-\\tfrac{\\sqrt3}{2}i\\right)=4+4\\sqrt3\\,i$, modulus $\\sqrt{16+48}=8$.",
     "Hence $|z_3|\\in\\{4,8\\}$."
    ]
   },
   {
    "name": "Cube-root identity",
    "steps": [
     "For a positively-oriented equilateral triangle $z_1+\\omega z_2+\\omega^2 z_3=0$, giving $z_3=-\\omega^{-2}(z_1+\\omega z_2)=-\\omega(z_1+\\omega z_2)$.",
     "With $z_2=4\\omega$ this yields $z_3=4\\omega^2=-2-2\\sqrt3\\,i$ ($|z_3|=4$).",
     "The negative orientation uses $z_1+\\omega^2 z_2+\\omega z_3=0$, giving the reflected apex $z_3=4+4\\sqrt3\\,i$ ($|z_3|=8$).",
     "Both are valid equilateral triangles."
    ]
   },
   {
    "name": "Quadratic from the symmetric form",
    "steps": [
     "Solve $z_3^2-(z_1+z_2)z_3+(z_1^2+z_2^2-z_1z_2)=0$ with $z_1=4,\\,z_2=-2+2\\sqrt3 i$.",
     "Product of roots $=z_1^2+z_2^2-z_1z_2$, sum $=z_1+z_2=2+2\\sqrt3 i$.",
     "The two roots are $-2-2\\sqrt3 i$ and $4+4\\sqrt3 i$.",
     "Their moduli are $4$ and $8$ respectively."
    ]
   }
  ],
  "remark": "Insight: the same triangle shape can sit on either side of the chord $z_1z_2$. One side keeps $z_3$ on the original circle $|z|=4$; the other throws it onto $|z|=8$. Orientation is not a cosmetic choice — it changes the modulus."
 },
 {
  "theme": "triangles",
  "themeLabel": "Triangles & Polygons",
  "title": "All the Distances of a Clock",
  "difficulty": 4,
  "task": "Evaluate",
  "tags": [
   "regular-polygon",
   "roots-of-unity",
   "sum-of-squares",
   "dodecagon"
  ],
  "statement": "A regular $12$-gon is inscribed in the circle $|z|=2$, with vertices $z_0,z_1,\\dots,z_{11}$. \\[\\text{Evaluate } \\sum_{0\\le j<k\\le 11}|z_j-z_k|^2,\\] the sum of the squares of all $\\binom{12}{2}$ pairwise distances (sides and diagonals).",
  "answer": "$576$.",
  "trap": "Trying to classify the chords by length (12 sides, 12 short diagonals, \\dots) and summing $\\tfrac{12}{2}\\sum(\\text{chord}^2)$ by hand is error-prone bookkeeping with the diametral chords double-counted. Treating all six chord classes as having $12$ representatives gives $672$ instead of $576$, because the $6$ diameters get counted as $12$. The clean route uses $\\sum_k z_k=0$ for a centered regular polygon.",
  "solutions": [
   {
    "name": "Expand and use the centroid",
    "steps": [
     "$\\sum_{j<k}|z_j-z_k|^2=\\tfrac12\\sum_{j,k}|z_j-z_k|^2=\\tfrac12\\sum_{j,k}\\big(|z_j|^2+|z_k|^2-2\\operatorname{Re}(z_j\\bar z_k)\\big).$",
     "Each vertex has $|z_k|^2=R^2$ with $R=2$, so $\\tfrac12\\sum_{j,k}(|z_j|^2+|z_k|^2)=\\tfrac12\\cdot2\\cdot n\\cdot nR^2=n^2R^2$.",
     "Since the polygon is centered, $\\sum_k z_k=0$, so $\\sum_{j,k}\\operatorname{Re}(z_j\\bar z_k)=\\big|\\sum_k z_k\\big|^2=0$.",
     "Thus the sum $=n^2R^2=12^2\\cdot2^2=\\boxed{576}$."
    ]
   },
   {
    "name": "Per-vertex chord sum",
    "steps": [
     "For a regular $n$-gon of radius $R$, the sum of squared distances from one fixed vertex to all others is $\\sum_{k=1}^{n-1}|z_0-z_k|^2=2nR^2$ (since $\\sum_k z_k=0$).",
     "Summing over all $n$ vertices counts each unordered pair twice: total ordered $=n\\cdot2nR^2$.",
     "Divide by $2$: $\\sum_{j<k}|z_j-z_k|^2=n^2R^2$.",
     "With $n=12,\\,R=2$: $144\\cdot4=\\boxed{576}$."
    ]
   }
  ],
  "remark": "Insight: the identity $\\sum_{j<k}|z_j-z_k|^2=n^2R^2$ holds for ANY $n$ points equally spaced on a circle of radius $R$ — the polynomial-free proof is just $\\sum z_k=0$. The number of sides never enters, and the same one-line centroid argument works for any centered configuration."
 },
 {
  "theme": "triangles",
  "themeLabel": "Triangles & Polygons",
  "title": "Spin a Vertex About the Centre",
  "difficulty": 4,
  "task": "Determine",
  "tags": [
   "equilateral",
   "centroid",
   "rotation",
   "area"
  ],
  "statement": "An equilateral triangle has centroid at the origin and one vertex at $z_1=1+i$. \\[\\text{Determine the other two vertices } z_2,z_3, \\text{ and the area of the triangle.}\\]",
  "answer": "$z_2=\\dfrac{-1-\\sqrt3}{2}+\\dfrac{-1+\\sqrt3}{2}\\,i$ and $z_3=\\dfrac{-1+\\sqrt3}{2}+\\dfrac{-1-\\sqrt3}{2}\\,i$; area $=\\dfrac{3\\sqrt3}{2}$.",
  "trap": "Rotating $z_1$ about the origin by $\\pm60^\\circ$ instead of $\\pm120^\\circ$. When the centroid (= circumcentre, here the origin) is the centre of rotation, consecutive vertices are $120^\\circ$ apart, not $60^\\circ$. A $60^\\circ$ rotation sends $z_1$ to $-0.366+1.366i$ and $1.366-0.366i$, whose centroid with $z_1$ is $2+2i\\ne0$ — so those points do not form a triangle centred at the origin at all.",
  "solutions": [
   {
    "name": "Rotate about the centroid",
    "steps": [
     "For an equilateral triangle the centroid equals the circumcentre, so the vertices are $z_1,\\,z_1\\omega,\\,z_1\\omega^2$ with $\\omega=e^{2\\pi i/3}=-\\tfrac12+\\tfrac{\\sqrt3}{2}i$.",
     "$z_2=(1+i)\\omega=\\tfrac{-1-\\sqrt3}{2}+\\tfrac{-1+\\sqrt3}{2}i$.",
     "$z_3=(1+i)\\omega^2=\\tfrac{-1+\\sqrt3}{2}+\\tfrac{-1-\\sqrt3}{2}i$ (and indeed $z_1+z_2+z_3=0$).",
     "Circumradius $=|z_1|=\\sqrt2$, side $=\\sqrt3\\cdot|z_1|=\\sqrt6$, area $=\\tfrac{\\sqrt3}{4}(\\sqrt6)^2=\\boxed{\\tfrac{3\\sqrt3}{2}}$."
    ]
   },
   {
    "name": "Cube-root-of-unity sum",
    "steps": [
     "Centroid $0$ means $z_1+z_2+z_3=0$; equilateral means $\\{z_1,z_2,z_3\\}$ is $z_1\\cdot\\{1,\\omega,\\omega^2\\}$.",
     "Hence $z_2,z_3$ are forced as the $\\pm120^\\circ$ rotations of $z_1$ about $0$.",
     "Computing $z_1\\omega,z_1\\omega^2$ gives the stated points.",
     "The common modulus $\\sqrt2$ fixes side $\\sqrt6$ and area $\\tfrac{3\\sqrt3}{2}$."
    ]
   },
   {
    "name": "Shoelace cross-check",
    "steps": [
     "With $z_1=1+i,\\ z_2=\\tfrac{-1-\\sqrt3}{2}+\\tfrac{-1+\\sqrt3}{2}i,\\ z_3=\\tfrac{-1+\\sqrt3}{2}+\\tfrac{-1-\\sqrt3}{2}i$, the directed area is $\\tfrac12\\big|\\,\\mathrm{Im}\\,\\overline{(z_2-z_1)}(z_3-z_1)\\,\\big|$.",
     "Evaluating the determinant gives exactly $\\tfrac{3\\sqrt3}{2}$, matching the side-length formula.",
     "All three pairwise distances equal $\\sqrt6$, confirming the triangle is equilateral.",
     "Thus the area is $\\dfrac{3\\sqrt3}{2}$."
    ]
   }
  ],
  "remark": "Insight: choosing the rotation centre dictates the rotation angle. About the centroid the angle is $120^\\circ$; about a vertex it is $60^\\circ$. Mixing them is the single most common error in Argand-plane equilateral problems."
 },
 {
  "theme": "triangles",
  "themeLabel": "Triangles & Polygons",
  "title": "Similar, Not Congruent",
  "difficulty": 4,
  "task": "Find a,b",
  "tags": [
   "similar-triangles",
   "ratio",
   "orientation",
   "spiral-similarity"
  ],
  "statement": "Triangle $ABC$ has $A=2+i,\\ B=6+i,\\ C=2+5i$. A second triangle $DEF$ is directly similar to $ABC$ (same orientation, vertices corresponding in order $A\\!\\to\\!D,\\,B\\!\\to\\!E,\\,C\\!\\to\\!F$) with $D=1+i$ and $E=1-3i$. \\[\\text{Find } F=a+bi.\\]",
  "answer": "$F=5+i$ (so $a=5,\\ b=1$).",
  "trap": "Assuming the two triangles are congruent and simply translating $C$ by $D-A$, giving $C+(D-A)=1+5i$ — wrong. Direct similarity preserves the complex ratio $(C-A)/(B-A)$, not the actual displacement; here $|E-D|=4=|B-A|$ is a coincidence of size, but the orientation differs, so $F$ must be computed from the ratio.",
  "solutions": [
   {
    "name": "Equal complex ratio",
    "steps": [
     "Direct similarity $ABC\\sim DEF$ means the shape-ratio at the first vertex is preserved: $\\dfrac{C-A}{B-A}=\\dfrac{F-D}{E-D}$.",
     "Left side: $\\dfrac{(2+5i)-(2+i)}{(6+i)-(2+i)}=\\dfrac{4i}{4}=i$.",
     "So $F=D+i\\,(E-D)$. Compute $E-D=(1-3i)-(1+i)=-4i$, hence $i\\,(E-D)=i(-4i)=4$.",
     "Therefore $F=(1+i)+4=\\boxed{5+i}$, i.e. $a=5,\\ b=1$."
    ]
   },
   {
    "name": "Spiral-similarity map",
    "steps": [
     "The unique direct similarity sending $A\\mapsto D$ and $B\\mapsto E$ is $w(z)=p\\,z+q$ with $p=\\dfrac{E-D}{B-A}=\\dfrac{(1-3i)-(1+i)}{(6+i)-(2+i)}=\\dfrac{-4i}{4}=-i$.",
     "Find $q=D-pA=(1+i)-(-i)(2+i)$. Since $-i(2+i)=-2i-i^2=1-2i$, we get $q=(1+i)-(1-2i)=3i$.",
     "Check the map: $w(A)=-i(2+i)+3i=(1-2i)+3i=1+i=D$ and $w(B)=-i(6+i)+3i=(1-6i)+3i=1-3i=E$. Good.",
     "Apply it to $C$: $F=w(C)=-i(2+5i)+3i=(5-2i)+3i=\\boxed{5+i}$, matching Method 1.",
     "Note $|p|=1$, so the two triangles are even congruent here — but $p=-i$ rotates by $-90^\\circ$, which is exactly what the naive translation misses."
    ]
   }
  ],
  "remark": "Insight: directly similar triangles are governed by one complex equation $\\frac{C-A}{B-A}=\\frac{F-D}{E-D}$, which simultaneously encodes the angle (argument of the ratio) and the scale (its modulus). Congruence is the special case where the modulus is $1$ — but the argument can still rotate the figure, so equal side lengths never justify a plain translation."
 },
 {
  "theme": "triangles",
  "themeLabel": "Triangles & Polygons",
  "title": "When the Orthocentre Vanishes",
  "difficulty": 5,
  "task": "Prove that",
  "tags": [
   "orthocentre",
   "circumcircle",
   "equilateral",
   "centroid"
  ],
  "statement": "Let $z_1,z_2,z_3$ be three distinct points on the circle $|z|=R$ (centre the origin). It is a standard fact that the orthocentre of triangle $z_1z_2z_3$ is $H=z_1+z_2+z_3$. \\[\\text{Prove that } H=0 \\text{ exactly when the triangle is equilateral.}\\]",
  "answer": "proved",
  "trap": "Reading \"$z_1+z_2+z_3=0$\" as forcing the points to be the fixed cube roots $R,\\,R\\omega,\\,R\\omega^2$ in one preferred configuration. The condition is rotation-invariant: on a fixed circle $z_1+z_2+z_3=0$ only pins down that the three points are equally spaced (a rotated copy of $\\{R,R\\omega,R\\omega^2\\}$) — there is no preferred starting angle. Equal spacing is precisely the equilateral condition, so $H=0$ holds for every rotated equilateral triangle, not just the one beginning at $z=R$.",
  "solutions": [
   {
    "name": "Centroid meets circumcentre",
    "steps": [
     "The centroid is $G=\\tfrac13(z_1+z_2+z_3)=\\tfrac{H}{3}$, while the circumcentre is the origin $O=0$ (all three vertices lie on $|z|=R$).",
     "Hence $H=0\\iff G=0=O$, i.e. the centroid coincides with the circumcentre.",
     "In any triangle the centroid equals the circumcentre if and only if the triangle is equilateral: forcing each median to pass through the circumcentre makes each median a perpendicular bisector, so every side is bisected at right angles by the line to the opposite vertex, giving all sides equal. Conversely an equilateral triangle has $G=O$ by symmetry.",
     "Therefore $H=0\\iff$ the triangle is equilateral. $\\blacksquare$"
    ]
   },
   {
    "name": "Direct via the equilateral identity",
    "steps": [
     "A triangle $z_1z_2z_3$ is equilateral iff $z_1^2+z_2^2+z_3^2=z_1z_2+z_2z_3+z_3z_1$ (a standard symmetric criterion, equivalent to $(z_1+\\omega z_2+\\omega^2 z_3)(z_1+\\omega^2 z_2+\\omega z_3)=0$ with $\\omega=e^{2\\pi i/3}$).",
     "Assume $H=z_1+z_2+z_3=0$. Squaring, $0=\\big(\\textstyle\\sum z_k\\big)^2=\\sum z_k^2+2\\sum_{j<k}z_jz_k$, so $\\sum z_k^2=-2\\sum_{j<k}z_jz_k$.",
     "Since $|z_k|^2=R^2$ we have $1/z_k=\\bar z_k/R^2$, hence $\\sum_{j<k}z_jz_k=z_1z_2z_3\\sum_k 1/z_k=\\dfrac{z_1z_2z_3}{R^2}\\,\\overline{\\big(\\textstyle\\sum z_k\\big)}=0$. From the previous line $\\sum z_k^2=0$ as well.",
     "Thus $\\sum z_k^2=\\sum_{j<k}z_jz_k\\;(=0)$: the equilateral identity holds, so the triangle is equilateral. Conversely an equilateral triangle inscribed in $|z|=R$ has centroid at the centre, giving $z_1+z_2+z_3=0$, i.e. $H=0$. $\\blacksquare$"
    ]
   },
   {
    "name": "Geometric (equal spacing)",
    "steps": [
     "Write $z_k=Re^{i\\theta_k}$ and set $u_k=z_k/R$, three distinct unit vectors. Then $H=0\\iff u_1+u_2+u_3=0$.",
     "If $u_1+u_2+u_3=0$ then $u_3=-(u_1+u_2)$, so $1=|u_3|^2=|u_1+u_2|^2=2+2\\cos(\\theta_1-\\theta_2)$, forcing $\\cos(\\theta_1-\\theta_2)=-\\tfrac12$, i.e. $u_1,u_2$ are $120^\\circ$ apart. By symmetry every pair is $120^\\circ$ apart, so the three points are equally spaced on the circle.",
     "Equal angular spacing of $120^\\circ$ on a common circle gives equal chords, hence equal sides: the triangle is equilateral.",
     "Conversely, an equilateral triangle has its vertices equally spaced, so the three unit vectors are at mutual $120^\\circ$ and sum to zero, giving $H=0$. $\\blacksquare$"
    ]
   }
  ],
  "remark": "Insight: on a circle centred at the origin, $H=z_1+z_2+z_3$ collapses three classical centres into a single bookkeeping vector, since here the circumcentre is $0$ and the centroid is $H/3$. \"$H=0$\" is the coordinate-free signature of equilateral — independent of where you begin labelling the vertices. The trap is to mistake one labelled solution $\\{R,R\\omega,R\\omega^2\\}$ for the whole rotation-invariant family."
 },
 {
  "theme": "triangles",
  "themeLabel": "Triangles & Polygons",
  "title": "The Diagonals Multiply to n",
  "difficulty": 5,
  "task": "Prove that",
  "tags": [
   "regular-polygon",
   "roots-of-unity",
   "diagonals",
   "product"
  ],
  "statement": "Let $P_0,P_1,\\dots,P_{n-1}$ be the vertices of a regular $n$-gon inscribed in the unit circle, with $P_k$ at $\\omega^k$ where $\\omega=e^{2\\pi i/n}$. \\[\\text{Prove that the product of the lengths of all chords from } P_0,\\ \\prod_{k=1}^{n-1}|P_0P_k|,\\ \\text{equals } n.\\]",
  "answer": "proved",
  "trap": "Approximating with the formula $\\prod 2\\sin(k\\pi/n)$ and trying to telescope the sines numerically. The slick proof avoids trigonometry entirely by factoring $z^n-1$. Treating $|1-\\omega^k|$ as needing a sine product invites rounding and obscures the exact integer $n$: for odd primes the sine product never visibly collapses to an integer.",
  "solutions": [
   {
    "name": "Factor z^n − 1",
    "steps": [
     "The $n$-th roots of unity satisfy $z^n-1=\\prod_{k=0}^{n-1}(z-\\omega^k)$.",
     "Divide by $(z-1)$: $\\dfrac{z^n-1}{z-1}=1+z+\\cdots+z^{n-1}=\\prod_{k=1}^{n-1}(z-\\omega^k)$ for $z\\ne1$, and both sides are polynomials, so the identity holds at $z=1$ too.",
     "Setting $z=1$: the left side is $1+1+\\cdots+1=n$, hence $\\prod_{k=1}^{n-1}(1-\\omega^k)=n$, a positive real number.",
     "Taking absolute values, $\\prod_{k=1}^{n-1}|1-\\omega^k|=\\prod_{k=1}^{n-1}|P_0P_k|=|n|=\\boxed{n}$. $\\blacksquare$"
    ]
   },
   {
    "name": "Derivative of z^n − 1",
    "steps": [
     "Let $f(z)=z^n-1=\\prod_{k=0}^{n-1}(z-\\omega^k)$.",
     "By the product rule $f'(z)=\\sum_j\\prod_{k\\ne j}(z-\\omega^k)$; at $z=1$ every term with $j\\ne0$ contains the factor $(1-\\omega^0)=0$, so only the $j=0$ term survives: $f'(1)=\\prod_{k=1}^{n-1}(1-\\omega^k)$.",
     "But differentiating directly, $f'(z)=nz^{n-1}$, so $f'(1)=n$.",
     "Hence $\\prod_{k=1}^{n-1}(1-\\omega^k)=n$, and taking modulus gives the chord product $\\boxed{n}$. $\\blacksquare$"
    ]
   }
  ],
  "remark": "Insight: the seemingly geometric product of all diagonals and the two adjacent sides from one vertex is just $f'(1)$ for $f(z)=z^n-1$. The polynomial knows the polygon's geometry. The trig route $\\prod 2\\sin(k\\pi/n)$ gives the same value $n$, but a computer algebra system will not collapse it to the integer for odd primes such as $n=7$ or $n=11$, where it stalls at a product of sines and cosines. Factoring exposes the answer instantly and exactly."
 },
 {
  "theme": "triangles",
  "themeLabel": "Triangles & Polygons",
  "title": "Completing the Square",
  "difficulty": 4,
  "task": "Find all",
  "tags": [
   "square",
   "rotation",
   "orientation",
   "area"
  ],
  "statement": "$A=1+2i$ and $B=4+6i$ are two adjacent vertices of a square $ABCD$ (labelled in order). \\[\\text{Find all possibilities for the remaining vertices } C \\text{ and } D, \\text{ and the area of the square.}\\]",
  "answer": "Two orientations. Clockwise/anticlockwise give $\\{C,D\\}=\\{9i,\\,-3+5i\\}$ or $\\{C,D\\}=\\{8+3i,\\,5-i\\}$. In both cases the area is $25$.",
  "trap": "Multiplying $(B-A)$ by $+i$ only (a single $90^\\circ$ turn) and reporting one square. \"$ABCD$ in order\" still leaves the choice of turning left or right at $B$: $C=B\\pm i(B-A)$. Both give genuine squares on opposite sides of segment $AB$, so two answers exist.",
  "solutions": [
   {
    "name": "Rotate the side by ±90°",
    "steps": [
     "Side vector $v=B-A=3+4i$, with $|v|=5$. The next side $BC$ is $v$ rotated by $\\pm90^\\circ$: $C=B\\pm i\\,v$.",
     "Plus sign: $C=(4+6i)+i(3+4i)=4+6i+(3i-4)=9i$, and $D=A+iv=(1+2i)+(3i-4)=-3+5i$.",
     "Minus sign: $C=(4+6i)-i(3+4i)=8+3i$, and $D=A-iv=5-i$.",
     "Each square has side $5$, so area $=5^2=\\boxed{25}$."
    ]
   },
   {
    "name": "Centre and half-diagonals",
    "steps": [
     "The centre $O$ of the square is the midpoint of diagonal $AC$, equivalently of $BD$; the diagonals are equal and perpendicular.",
     "From $A,B$ adjacent, the centre is $O=\\tfrac{A+B}{2}\\pm\\tfrac12 i(B-A)$ (perpendicular to $AB$ at the midpoint, half a side away).",
     "Reflecting $A,B$ through each candidate $O$ gives the two vertex pairs $\\{9i,-3+5i\\}$ and $\\{8+3i,5-i\\}$.",
     "Area $=|B-A|^2=\\boxed{25}$."
    ]
   }
  ],
  "remark": "Insight: \"adjacent vertices in order\" pins the side but not the handedness. Multiplication by $i$ versus $-i$ is the algebraic fingerprint of the two mirror squares — the same two-orientation theme as the equilateral triangle."
 },
 {
  "theme": "triangles",
  "themeLabel": "Triangles & Polygons",
  "title": "A Triangle Pinned by Its Centroid",
  "difficulty": 5,
  "task": "Determine",
  "tags": [
   "equilateral",
   "centroid",
   "rotation",
   "area"
  ],
  "statement": "An equilateral triangle $z_1z_2z_3$ has centroid $3+i$, and one vertex is $z_1=5+5i$. \\[\\text{Determine } z_2 \\text{ and } z_3, \\text{ and find the area of the triangle.}\\]",
  "answer": "$z_2=(2-2\\sqrt3)+(-1+\\sqrt3)i$ and $z_3=(2+2\\sqrt3)+(-1-\\sqrt3)i$; area $=15\\sqrt3$.",
  "trap": "Rotating $z_1-g$ about the origin instead of about the centroid $g=3+i$. The correct construction is $z_{2,3}=g+(z_1-g)\\omega^{\\pm1}$: you must subtract the centroid, rotate by $\\pm120^\\circ$, then add it back. Forgetting the shift gives $z_1\\omega^{\\pm1}$, whose centroid is $0$, not $3+i$ — the triangle lands in the wrong place.",
  "solutions": [
   {
    "name": "Rotate about the centroid",
    "steps": [
     "For an equilateral triangle, centroid $=$ circumcentre $g$, so $z_2=g+(z_1-g)\\omega,\\ z_3=g+(z_1-g)\\omega^2$, $\\omega=e^{2\\pi i/3}=-\\tfrac12+\\tfrac{\\sqrt3}{2}i$.",
     "Here $z_1-g=2+4i$. Then $z_2=(3+i)+(2+4i)\\big(-\\tfrac12+\\tfrac{\\sqrt3}{2}i\\big)=(2-2\\sqrt3)+(-1+\\sqrt3)i$.",
     "$z_3=(3+i)+(2+4i)\\big(-\\tfrac12-\\tfrac{\\sqrt3}{2}i\\big)=(2+2\\sqrt3)+(-1-\\sqrt3)i$; check $z_1+z_2+z_3=9+3i=3g$. ✓",
     "Circumradius $|z_1-g|=\\sqrt{20}=2\\sqrt5$, side $=\\sqrt3\\cdot2\\sqrt5=2\\sqrt{15}$, area $=\\tfrac{\\sqrt3}{4}(2\\sqrt{15})^2=\\boxed{15\\sqrt3}$."
    ]
   },
   {
    "name": "Sum and symmetric conditions",
    "steps": [
     "The centroid gives $z_2+z_3=3g-z_1=(9+3i)-(5+5i)=4-2i$, so $z_2,z_3$ are roots of $t^2-(4-2i)t+P=0$ with $P=z_2z_3$.",
     "Equilateral is equivalent to $z_1^2+z_2^2+z_3^2=z_1z_2+z_2z_3+z_3z_1$, i.e. $(z_1+z_2+z_3)^2=3(z_1z_2+z_2z_3+z_3z_1)$.",
     "With $S=z_1+z_2+z_3=9+3i$ this forces $z_1z_2+z_2z_3+z_3z_1=\\tfrac{S^2}{3}=24+18i$, and since $z_1(z_2+z_3)=(5+5i)(4-2i)=30+10i$ we get $P=z_2z_3=(24+18i)-(30+10i)=-6+8i$.",
     "Solving $t^2-(4-2i)t+(-6+8i)=0$ gives exactly $t=(2-2\\sqrt3)+(-1+\\sqrt3)i$ and $t=(2+2\\sqrt3)+(-1-\\sqrt3)i$. Side $=2\\sqrt{15}\\Rightarrow$ area $=\\boxed{15\\sqrt3}$."
    ]
   },
   {
    "name": "Area from circumradius directly",
    "steps": [
     "The distance from the centroid to a vertex is the circumradius $R=|z_1-g|=|2+4i|=2\\sqrt5$.",
     "For an equilateral triangle, area $=\\tfrac{3\\sqrt3}{4}R^2=\\tfrac{3\\sqrt3}{4}\\cdot20=15\\sqrt3$.",
     "The vertices follow from rotating $z_1-g$ by $\\pm120^\\circ$ about $g$, giving the $z_2,z_3$ above.",
     "Area $=\\boxed{15\\sqrt3}$."
    ]
   }
  ],
  "remark": "Insight: once the centroid of an equilateral triangle is known, one vertex determines the rest by two $120^\\circ$ rotations about that centroid. The shift-rotate-unshift pattern $g+(z-g)\\omega^k$ is the workhorse for any \"rotate about a point\" task in the Argand plane."
 },
 {
  "theme": "triangles",
  "themeLabel": "Triangles & Polygons",
  "title": "Five Vertices, One Identity",
  "difficulty": 5,
  "task": "Evaluate",
  "tags": [
   "regular-polygon",
   "pentagon",
   "roots-of-unity",
   "sum-of-squares",
   "product"
  ],
  "statement": "Let $V_0,V_1,V_2,V_3,V_4$ be the vertices of a regular pentagon inscribed in the unit circle, with $V_k=e^{2\\pi i k/5}$. Define \\[S=\\sum_{k=1}^{4}|V_0-V_k|^2\\qquad\\text{and}\\qquad P=\\prod_{k=1}^{4}|V_0-V_k|.\\] Evaluate $S$ and $P$, and then $S+P$.",
  "answer": "$S=10,\\ P=5$, hence $S+P=15$.",
  "trap": "Splitting the four chords into two sides and two diagonals, plugging in $\\sin 36^\\circ,\\sin 72^\\circ$ as decimals, and then rounding $P\\approx 5.000$ to assert $P=5$ without proof. Both $S$ and $P$ are exact integers that fall straight out of $\\sum_{k=0}^4 V_k=0$ and the factorisation of $z^5-1$ — the decimal route never establishes exactness and can mask an off-by-a-hair error, so it is not a proof.",
  "solutions": [
   {
    "name": "Sum via centroid, product via polynomial",
    "steps": [
     "Write $|V_0-V_k|^2=(V_0-V_k)\\overline{(V_0-V_k)}=|V_0|^2+|V_k|^2-2\\operatorname{Re}(V_0\\bar V_k)=2-2\\operatorname{Re}(V_0\\bar V_k)$, since every $|V_k|=1$.",
     "Summing over $k=1,\\dots,4$ gives $S=2\\cdot 4-2\\operatorname{Re}\\!\\big(V_0\\sum_{k=1}^4\\bar V_k\\big)$.",
     "Because $\\sum_{k=0}^4 V_k=0$, also $\\sum_{k=0}^4\\bar V_k=0$, so $\\sum_{k=1}^4\\bar V_k=-\\bar V_0$. Hence $S=8-2\\operatorname{Re}(-V_0\\bar V_0)=8+2|V_0|^2=8+2=10$.",
     "For $P$, with $\\omega=e^{2\\pi i/5}$ and $V_0=1$, the nonzero fifth roots satisfy $\\prod_{k=1}^4(z-\\omega^k)=\\dfrac{z^5-1}{z-1}=z^4+z^3+z^2+z+1$. Setting $z=1$ gives $\\prod_{k=1}^4(1-\\omega^k)=5$.",
     "Taking moduli, $P=\\prod_{k=1}^4|1-\\omega^k|=\\big|\\prod_{k=1}^4(1-\\omega^k)\\big|=|5|=5$.",
     "Therefore $S+P=10+5=\\boxed{15}$."
    ]
   },
   {
    "name": "General-$n$ formulas specialised at $n=5$",
    "steps": [
     "For a regular $n$-gon on the unit circle, the same centroid argument gives $\\sum_{k=1}^{n-1}|V_0-V_k|^2=2(n-1)+2=2n$, using $\\sum_{k=1}^{n-1}\\bar V_k=-\\bar V_0$.",
     "Likewise $\\prod_{k=1}^{n-1}(1-\\omega^k)=\\dfrac{z^n-1}{z-1}\\big|_{z=1}=n$, so $\\prod_{k=1}^{n-1}|V_0-V_k|=n$.",
     "At $n=5$: $S=2\\cdot 5=10$ and $P=5$.",
     "Hence $S+P=15$, and the result is seen to be the $n=5$ case of two clean polygon identities."
    ]
   },
   {
    "name": "Trigonometric cross-check",
    "steps": [
     "The chord lengths are $|V_0-V_k|=2\\sin(k\\pi/5)$, i.e. $2\\sin 36^\\circ,\\,2\\sin 72^\\circ,\\,2\\sin 108^\\circ,\\,2\\sin 144^\\circ$.",
     "Then $S=4\\big(\\sin^2 36^\\circ+\\sin^2 72^\\circ+\\sin^2 108^\\circ+\\sin^2 144^\\circ\\big)$. Since $\\sin 108^\\circ=\\sin 72^\\circ$ and $\\sin 144^\\circ=\\sin 36^\\circ$, this is $8(\\sin^2 36^\\circ+\\sin^2 72^\\circ)$.",
     "Using $\\sin^2 36^\\circ+\\sin^2 72^\\circ=\\tfrac54$ gives $S=8\\cdot\\tfrac54=10$, matching the algebra.",
     "For the product, the classical identity $\\prod_{k=1}^{4}\\sin(k\\pi/5)=\\dfrac{5}{16}$ yields $P=2^4\\prod_{k=1}^{4}\\sin(k\\pi/5)=16\\cdot\\tfrac{5}{16}=5$.",
     "Thus $S+P=10+5=\\boxed{15}$, confirming the roots-of-unity computation exactly."
    ]
   }
  ],
  "remark": "Two famous regular-polygon constants meet in one figure: the additive $\\sum_{k=1}^{n-1}|V_0-V_k|^2=2n$ (from $\\sum V_k=0$) and the multiplicative $\\prod_{k=1}^{n-1}|V_0-V_k|=n$ (from $z^n-1=(z-1)\\prod(z-\\omega^k)$). For $n=5$ they give $10$ and $5$. Both are exact integers — the trigonometric route merely re-derives what the roots of unity hand you for free, which is exactly why the decimal-rounding shortcut is unnecessary and, as a proof, illegitimate."
 },
 {
  "theme": "equations",
  "themeLabel": "Polynomial Equations",
  "title": "The Pentagon's Pull",
  "difficulty": 4,
  "task": "Evaluate",
  "tags": [
   "roots of unity",
   "cyclotomic",
   "products",
   "factor theorem"
  ],
  "statement": "Let $\\omega_1,\\omega_2,\\omega_3,\\omega_4$ be the four roots of \\[z^4+z^3+z^2+z+1=0.\\] These are exactly the fifth roots of unity other than $1$. Evaluate the product of distances from $1$ to each root, \\[\\prod_{k=1}^{4}\\lvert 1-\\omega_k\\rvert.\\]",
  "answer": "$\\displaystyle \\prod_{k=1}^{4}\\lvert 1-\\omega_k\\rvert = 5.$",
  "trap": "Trying to compute each $\\lvert 1-\\omega_k\\rvert=2\\lvert\\sin(\\pi k/5)\\rvert$ separately and multiply the messy surds. The seductive error is then dropping the doubling and getting $5/16$ (the product of the sines) instead of the product of the full chord lengths — you must keep the factor $2$ on each of the four chords.",
  "solutions": [
   {
    "name": "Factor evaluation",
    "steps": [
     "The given quartic is $\\Phi_5(z)=\\dfrac{z^5-1}{z-1}=(z-\\omega_1)(z-\\omega_2)(z-\\omega_3)(z-\\omega_4)$.",
     "Hence $\\prod_{k=1}^4 (1-\\omega_k)=\\Phi_5(1)=1+1+1+1+1=5$.",
     "Because the non-real roots occur in conjugate pairs, $\\prod_k(1-\\omega_k)$ is real and positive, so $\\prod_k\\lvert 1-\\omega_k\\rvert=\\lvert 5\\rvert=\\boxed{5}$."
    ]
   },
   {
    "name": "Chord product via sines",
    "steps": [
     "Each $\\omega_k=e^{2\\pi i k/5}$ gives $\\lvert 1-\\omega_k\\rvert=2\\sin(\\pi k/5)$ for $k=1,2,3,4$.",
     "So the product is $2^4\\prod_{k=1}^{4}\\sin(\\pi k/5)=16\\cdot\\dfrac{5}{2^{4}}$, using $\\prod_{k=1}^{n-1}\\sin(\\pi k/n)=\\dfrac{n}{2^{\\,n-1}}$ with $n=5$.",
     "This equals $16\\cdot\\dfrac{5}{16}=\\boxed{5}$."
    ]
   },
   {
    "name": "Limit of the quotient",
    "steps": [
     "$\\prod_{k=0}^{4}(z-\\omega_k)=z^5-1$ over all fifth roots including $\\omega_0=1$.",
     "Divide by $(z-1)$ and take $z\\to1$: $\\prod_{k=1}^{4}(z-\\omega_k)=\\dfrac{z^5-1}{z-1}\\to 5$ as $z\\to1$ (the derivative $5z^4$ at $z=1$).",
     "Taking modulus gives $\\boxed{5}$."
    ]
   }
  ],
  "remark": "Insight: a product of chord lengths from a single point on the unit circle to all the other $n$-th roots of unity is just the value of $\\frac{z^n-1}{z-1}$ at that point — geometry collapses into one polynomial evaluation."
 },
 {
  "theme": "equations",
  "themeLabel": "Polynomial Equations",
  "title": "Two Roots Betray the Rest",
  "difficulty": 4,
  "task": "Determine",
  "tags": [
   "conjugate-root theorem",
   "real coefficients",
   "minimal polynomial",
   "vieta"
  ],
  "statement": "A monic polynomial $P(z)$ with real coefficients and of the smallest possible degree has both $1+i$ and $2-i$ among its roots. Determine $P(z)$ explicitly and the value of $P(0)$.",
  "answer": "$P(z)=z^4-6z^3+15z^2-18z+10$, and $P(0)=10$.",
  "trap": "Building only the degree-2 product $(z-(1+i))(z-(2-i))$ from the two stated roots. That polynomial is $z^2-3z+(3+i)$, whose coefficients are non-real, so it cannot be a real polynomial — the conjugate-root theorem forces $1-i$ and $2+i$ to be roots too, pushing the minimal degree to $4$, not $2$.",
  "solutions": [
   {
    "name": "Conjugate pairing",
    "steps": [
     "Since $P$ has real coefficients, non-real roots come in conjugate pairs: $1-i$ and $2+i$ must also be roots.",
     "With four forced roots and minimal degree, $P(z)=(z-(1+i))(z-(1-i))\\,(z-(2-i))(z-(2+i))$.",
     "Each conjugate pair gives a real quadratic: $(z^2-2z+2)(z^2-4z+5)=z^4-6z^3+15z^2-18z+10$, so $P(0)=\\boxed{10}$."
    ]
   },
   {
    "name": "Real quadratic blocks via Vieta",
    "steps": [
     "For $1\\pm i$: sum $=2$, product $=2$, giving $z^2-2z+2$.",
     "For $2\\mp i$: sum $=4$, product $=5$, giving $z^2-4z+5$.",
     "Multiply: $P(z)=z^4-6z^3+15z^2-18z+10$ with constant term (product of all roots) $=2\\cdot5=10=\\boxed{P(0)}$."
    ]
   }
  ],
  "remark": "Insight: over $\\mathbb{R}$, each non-real root drags its conjugate along for free, so the true minimal degree is twice the count of distinct non-real values you were handed."
 },
 {
  "theme": "equations",
  "themeLabel": "Polynomial Equations",
  "title": "Splitting the Sixth Power of Minus One",
  "difficulty": 4,
  "task": "Find a,b",
  "tags": [
   "roots of unity",
   "factor over reals",
   "z^n+1",
   "quadratic factors"
  ],
  "statement": "Factor $z^6+1$ completely over the real numbers into a product of three monic real quadratics, \\[z^6+1=(z^2+a_1z+1)(z^2+a_2z+1)(z^2+a_3z+1).\\] Find the unordered set $\\{a_1,a_2,a_3\\}$ of middle coefficients.",
  "answer": "$\\{a_1,a_2,a_3\\}=\\{-\\sqrt3,\\ 0,\\ \\sqrt3\\}$, i.e. $z^6+1=(z^2-\\sqrt3\\,z+1)(z^2+1)(z^2+\\sqrt3\\,z+1)$.",
  "trap": "Writing $z^6+1=(z^2+1)(z^4-z^2+1)$ and stopping. The quartic factor $z^4-z^2+1$ is irreducible over $\\mathbb{Q}$ but reducible over $\\mathbb{R}$; assuming it cannot be split further leaves the factorization incomplete, missing the $\\pm\\sqrt3$ middle terms.",
  "solutions": [
   {
    "name": "Roots on the circle",
    "steps": [
     "The roots of $z^6=-1$ are $e^{i\\pi(2k+1)/6}$ for $k=0,\\dots,5$: angles $30^\\circ,90^\\circ,150^\\circ,210^\\circ,270^\\circ,330^\\circ$, all on the unit circle.",
     "Pair each root with its conjugate; a pair at angle $\\theta$ gives $z^2-2\\cos\\theta\\,z+1$ (product of the conjugate roots equals $1$).",
     "The distinct values of $-2\\cos\\theta$ come from $\\cos30^\\circ=\\tfrac{\\sqrt3}{2}$, $\\cos90^\\circ=0$, $\\cos150^\\circ=-\\tfrac{\\sqrt3}{2}$, so the middle coefficients are $\\boxed{\\{-\\sqrt3,0,\\sqrt3\\}}$."
    ]
   },
   {
    "name": "Force the split algebraically",
    "steps": [
     "$z^6+1=(z^2+1)(z^4-z^2+1)$.",
     "Complete a square: $z^4-z^2+1=(z^2+1)^2-3z^2=(z^2-\\sqrt3\\,z+1)(z^2+\\sqrt3\\,z+1)$.",
     "Thus $z^6+1=(z^2-\\sqrt3\\,z+1)(z^2+1)(z^2+\\sqrt3\\,z+1)$, giving $\\boxed{\\{-\\sqrt3,0,\\sqrt3\\}}$."
    ]
   }
  ],
  "remark": "Insight: the difference-of-squares trick $a^4+a^2b^2+b^4=(a^2+ab+b^2)(a^2-ab+b^2)$ is exactly the algebraic shadow of pairing conjugate roots on the unit circle."
 },
 {
  "theme": "equations",
  "themeLabel": "Polynomial Equations",
  "title": "A Fourth Root in the Third Quadrant",
  "difficulty": 4,
  "task": "Find all",
  "tags": [
   "nth roots",
   "de moivre",
   "polar form",
   "z^n=w"
  ],
  "statement": "Find all complex numbers $z$ satisfying \\[z^4=-8-8\\sqrt3\\,i.\\] Give each root in the form $x+iy$ with $x,y$ real.",
  "answer": "The four roots are $\\pm(1+\\sqrt3\\,i)$ and $\\pm(\\sqrt3-i)$.",
  "trap": "Reading the modulus as $\\lvert -8-8\\sqrt3\\,i\\rvert=8+8\\sqrt3$ (adding the real and imaginary parts) instead of $\\sqrt{8^2+(8\\sqrt3)^2}=16$. That wrong modulus makes $\\lvert z\\rvert=(8+8\\sqrt3)^{1/4}$ and destroys every clean root; the correct $\\lvert z\\rvert=16^{1/4}=2$.",
  "solutions": [
   {
    "name": "Polar / De Moivre",
    "steps": [
     "Write $w=-8-8\\sqrt3\\,i=16\\,\\big(\\cos(-\\tfrac{2\\pi}{3})+i\\sin(-\\tfrac{2\\pi}{3})\\big)$ since $\\lvert w\\rvert=\\sqrt{8^2+(8\\sqrt3)^2}=16$ and $w$ lies in the third quadrant with reference angle $\\tfrac{\\pi}{3}$.",
     "Then $z=2\\big(\\cos\\theta_k+i\\sin\\theta_k\\big)$ with $\\theta_k=-\\tfrac{\\pi}{6}+\\tfrac{\\pi}{2}k$, $k=0,1,2,3$.",
     "Evaluating: $z=2e^{-i\\pi/6}=\\sqrt3-i$, $z=2e^{i\\pi/3}=1+\\sqrt3\\,i$, and their negatives, giving $\\boxed{\\pm(1+\\sqrt3\\,i),\\ \\pm(\\sqrt3-i)}$."
    ]
   },
   {
    "name": "Find one root, rotate",
    "steps": [
     "Guess a root with $\\lvert z\\rvert=2$: try $z_0=1+\\sqrt3\\,i$, then $z_0^2=1-3+2\\sqrt3\\,i=-2+2\\sqrt3\\,i$ and $z_0^4=(-2+2\\sqrt3\\,i)^2=4-12-8\\sqrt3\\,i=-8-8\\sqrt3\\,i$. ✓",
     "The other roots are $z_0$ times the fourth roots of unity $1,i,-1,-i$.",
     "This yields $1+\\sqrt3\\,i$, $i(1+\\sqrt3\\,i)=-\\sqrt3+i$, $-(1+\\sqrt3\\,i)$, $-i(1+\\sqrt3\\,i)=\\sqrt3-i$, i.e. $\\boxed{\\pm(1+\\sqrt3\\,i),\\ \\pm(\\sqrt3-i)}$."
    ]
   }
  ],
  "remark": "Insight: the four solutions of $z^4=w$ are one solution multiplied by $1,i,-1,-i$ — a single found root, rotated by right angles, generates the whole set."
 },
 {
  "theme": "equations",
  "themeLabel": "Polynomial Equations",
  "title": "The Imaginary Root Forces the Cubic",
  "difficulty": 4,
  "task": "Find a,b",
  "tags": [
   "vieta",
   "conjugate-root theorem",
   "real coefficients",
   "cubic"
  ],
  "statement": "The cubic $z^3+az^2+bz+c$ has real coefficients, and $1+2i$ is one of its roots. The three roots sum to $5$. Find the real root and the ordered triple $(a,b,c)$.",
  "answer": "The real root is $3$, and $(a,b,c)=(-5,\\,11,\\,-15)$.",
  "trap": "Treating $1+2i$ as if it could be the only complex root and pairing it with two unknown reals. With real coefficients its conjugate $1-2i$ is automatically a root, so only one root is free; ignoring this over-counts the unknowns and makes the system inconsistent.",
  "solutions": [
   {
    "name": "Conjugate plus Vieta sum",
    "steps": [
     "Real coefficients force $1-2i$ to also be a root; let the third (necessarily real) root be $r$.",
     "Sum of roots $=(1+2i)+(1-2i)+r=2+r=5\\Rightarrow r=3$.",
     "Then $a=-(\\text{sum})=-5$; $b=\\sum_{\\text{pairs}}=(1+2i)(1-2i)+3\\cdot2=5+6=11$; $c=-\\text{product}=-(5\\cdot3)=-15$, so $(a,b,c)=\\boxed{(-5,11,-15)}$."
    ]
   },
   {
    "name": "Direct factor multiplication",
    "steps": [
     "The real quadratic from the conjugate pair is $(z-(1+2i))(z-(1-2i))=z^2-2z+5$.",
     "With real root $r=3$ (from the sum condition), the cubic is $(z^2-2z+5)(z-3)$.",
     "Expanding: $z^3-5z^2+11z-15$, hence $(a,b,c)=\\boxed{(-5,11,-15)}$ and real root $3$."
    ]
   }
  ],
  "remark": "Insight: a single non-real root plus the reality of the coefficients plus one symmetric-function clue (the sum) is enough to pin down an entire real cubic."
 },
 {
  "theme": "equations",
  "themeLabel": "Polynomial Equations",
  "title": "Three to the Seventh, Minus the Unit",
  "difficulty": 4,
  "task": "Evaluate",
  "tags": [
   "roots of unity",
   "factor theorem",
   "products",
   "geometric series"
  ],
  "statement": "Let $\\zeta_1,\\zeta_2,\\dots,\\zeta_6$ be the six seventh roots of unity different from $1$. Evaluate \\[\\prod_{k=1}^{6}\\,(3-\\zeta_k).\\]",
  "answer": "$\\displaystyle\\prod_{k=1}^{6}(3-\\zeta_k)=1093.$",
  "trap": "Including $\\zeta=1$ and evaluating $\\prod_{\\text{all }7}(3-\\zeta)=3^7-1=2186$. The problem excludes the root $1$, so you must divide by the omitted factor $(3-1)=2$, giving $1093$, not $2186$.",
  "solutions": [
   {
    "name": "Factor and divide",
    "steps": [
     "All seven roots satisfy $\\prod_{j=0}^{6}(z-\\zeta_j)=z^7-1$, so $\\prod_{j=0}^{6}(3-\\zeta_j)=3^7-1=2186$.",
     "Remove the factor for $\\zeta_0=1$, which is $3-1=2$.",
     "Therefore $\\prod_{k=1}^{6}(3-\\zeta_k)=\\dfrac{2186}{2}=\\boxed{1093}$."
    ]
   },
   {
    "name": "Cyclotomic / geometric sum",
    "steps": [
     "The non-trivial roots satisfy $\\dfrac{z^7-1}{z-1}=z^6+z^5+\\cdots+1=\\prod_{k=1}^{6}(z-\\zeta_k)$.",
     "Evaluate at $z=3$: $\\prod_{k=1}^{6}(3-\\zeta_k)=3^6+3^5+3^4+3^3+3^2+3+1$.",
     "This geometric sum equals $\\dfrac{3^7-1}{3-1}=\\dfrac{2186}{2}=\\boxed{1093}$."
    ]
   }
  ],
  "remark": "Insight: $1+x+\\cdots+x^{n-1}$ is simultaneously a geometric series and the product over the non-trivial $n$-th roots of unity — evaluating it at a real point gives a tidy integer."
 },
 {
  "theme": "equations",
  "themeLabel": "Polynomial Equations",
  "title": "The Golden Quintic",
  "difficulty": 5,
  "task": "Evaluate",
  "tags": [
   "roots of unity",
   "reciprocal substitution",
   "trigonometric values",
   "quintic"
  ],
  "statement": "Using that the roots of \\[z^4+z^3+z^2+z+1=0\\] are the primitive fifth roots of unity, evaluate $\\cos\\dfrac{2\\pi}{5}$ exactly.",
  "answer": "$\\cos\\dfrac{2\\pi}{5}=\\dfrac{\\sqrt5-1}{4}.$",
  "trap": "Assuming $z^4+z^3+z^2+z+1=0$ has a real solution and trying to solve it as an ordinary real quartic. It has no real roots at all (all four roots are non-real fifth roots of unity); the right move is the reciprocal substitution $y=z+\\tfrac1z$, not a search for real roots.",
  "solutions": [
   {
    "name": "Reciprocal (palindromic) substitution",
    "steps": [
     "Divide by $z^2$: $\\big(z^2+\\tfrac1{z^2}\\big)+\\big(z+\\tfrac1z\\big)+1=0$. Put $y=z+\\tfrac1z$, so $z^2+\\tfrac1{z^2}=y^2-2$.",
     "Then $y^2+y-1=0$, giving $y=\\dfrac{-1\\pm\\sqrt5}{2}$.",
     "For $z=e^{2\\pi i/5}$, $y=2\\cos\\tfrac{2\\pi}{5}>0$, so we take the $+$ root: $2\\cos\\tfrac{2\\pi}{5}=\\dfrac{-1+\\sqrt5}{2}$, i.e. $\\cos\\tfrac{2\\pi}{5}=\\boxed{\\dfrac{\\sqrt5-1}{4}}$."
    ]
   },
   {
    "name": "Sum of real parts via Vieta",
    "steps": [
     "The four roots $e^{\\pm2\\pi i/5},e^{\\pm4\\pi i/5}$ sum to $-1$ (coefficient of $z^3$).",
     "So $2\\cos\\tfrac{2\\pi}{5}+2\\cos\\tfrac{4\\pi}{5}=-1$, and using $\\cos\\tfrac{4\\pi}{5}=2\\cos^2\\tfrac{2\\pi}{5}-1$ gives $4\\cos^2\\tfrac{2\\pi}{5}+2\\cos\\tfrac{2\\pi}{5}-1=0$.",
     "Solving this quadratic in $c=\\cos\\tfrac{2\\pi}{5}>0$: $c=\\dfrac{-2+\\sqrt{4+16}}{8}=\\dfrac{-1+\\sqrt5}{4}=\\boxed{\\dfrac{\\sqrt5-1}{4}}$."
    ]
   }
  ],
  "remark": "Insight: palindromic equations fold in half under $y=z+1/z$, halving the degree — the quintic's hidden golden ratio surfaces because $y^2+y-1=0$ is the defining equation of $1/\\varphi$."
 },
 {
  "theme": "equations",
  "themeLabel": "Polynomial Equations",
  "title": "Eight Mirrors Around the Circle",
  "difficulty": 5,
  "task": "Evaluate",
  "tags": [
   "roots of unity",
   "products",
   "chord lengths",
   "factor theorem"
  ],
  "statement": "Let $\\omega_k=e^{2\\pi i k/8}$, $k=0,1,\\dots,7$, be the eighth roots of unity. Evaluate \\[\\prod_{k=1}^{7}\\bigl(2-2\\cos\\tfrac{2\\pi k}{8}\\bigr),\\] the product over all roots except $\\omega_0=1$ of the squared distance $\\lvert 1-\\omega_k\\rvert^2$.",
  "answer": "$\\displaystyle\\prod_{k=1}^{7}\\bigl(2-2\\cos\\tfrac{2\\pi k}{8}\\bigr)=64.$",
  "trap": "As $k$ runs over $1,\\dots,7$ the factor $2-2\\cos\\tfrac{2\\pi k}{8}$ takes only four distinct values, namely $2-\\sqrt2$ (at $k=1,7$), $2$ (at $k=2,6$), $2+\\sqrt2$ (at $k=3,5$) and $4$ (at $k=4$). A tempting shortcut multiplies each distinct value once: $(2-\\sqrt2)\\cdot 2\\cdot(2+\\sqrt2)\\cdot 4=16$. This is wrong: it ignores multiplicity. The three values coming from conjugate pairs each occur twice, so the true product is $(2-\\sqrt2)^2\\cdot 2^2\\cdot(2+\\sqrt2)^2\\cdot 4=64=8^2=n^2$. Every $k$ from $1$ to $7$ contributes a factor; the undercount $16$ falls short by exactly the factor $64/16=4$.",
  "solutions": [
   {
    "name": "Telescoping the cyclotomic quotient",
    "steps": [
     "$\\lvert1-\\omega_k\\rvert^2=(1-\\omega_k)(1-\\overline{\\omega_k})=2-2\\cos\\tfrac{2\\pi k}{8}$, so the product is $\\prod_{k=1}^{7}(1-\\omega_k)(1-\\overline{\\omega_k})=\\Big\\lvert\\prod_{k=1}^{7}(1-\\omega_k)\\Big\\rvert^2$ (since $\\{\\overline{\\omega_k}\\}=\\{\\omega_k\\}$).",
     "From $z^8-1=\\prod_{k=0}^{7}(z-\\omega_k)$ we get $\\prod_{k=1}^{7}(z-\\omega_k)=\\dfrac{z^8-1}{z-1}=1+z+z^2+\\cdots+z^7$. Evaluating this polynomial at $z=1$ gives $\\prod_{k=1}^{7}(1-\\omega_k)=1+1+\\cdots+1=8$.",
     "Hence the product $=\\lvert8\\rvert^2=\\boxed{64}=8^2=n^2$."
    ]
   },
   {
    "name": "Product of sines",
    "steps": [
     "$2-2\\cos\\tfrac{2\\pi k}{8}=4\\sin^2\\tfrac{\\pi k}{8}$, so the product is $4^7\\prod_{k=1}^{7}\\sin^2\\tfrac{\\pi k}{8}=4^7\\Big(\\prod_{k=1}^{7}\\sin\\tfrac{\\pi k}{8}\\Big)^2$.",
     "Using $\\prod_{k=1}^{n-1}\\sin\\tfrac{\\pi k}{n}=\\dfrac{n}{2^{n-1}}$ with $n=8$ gives $\\prod_{k=1}^{7}\\sin\\tfrac{\\pi k}{8}=\\dfrac{8}{2^7}=\\dfrac{1}{16}$.",
     "Therefore the product $=4^7\\cdot\\dfrac{1}{16^2}=\\dfrac{16384}{256}=\\boxed{64}$."
    ]
   }
  ],
  "remark": "Insight: the product of squared chords from one vertex of a regular $n$-gon inscribed in the unit circle to all $n-1$ other vertices is exactly $n^2$, since $\\prod_{k=1}^{n-1}\\lvert1-\\omega_k\\rvert^2=\\big\\lvert\\tfrac{z^n-1}{z-1}\\big\\rvert^2_{z=1}=n^2$. For $n=8$ this is $64$. (The same $n^2$ is the number of spanning trees of the cycle-style Laplacian relation behind the chord-product identity.)"
 },
 {
  "theme": "equations",
  "themeLabel": "Polynomial Equations",
  "title": "A Root That Counts Twice",
  "difficulty": 5,
  "task": "Determine",
  "tags": [
   "multiplicity",
   "conjugate-root theorem",
   "vieta",
   "fundamental theorem of algebra"
  ],
  "statement": "A degree-$5$ monic polynomial $P(z)$ with real coefficients has $z=i$ as a root of multiplicity exactly $2$, and the coefficient of $z^4$ in $P$ equals $-3$. Determine $P(z)$ and the value of $P(2)$.",
  "answer": "$P(z)=(z^2+1)^2(z-3)=z^5-3z^4+2z^3-6z^2+z-3$, and $P(2)=-25$.",
  "trap": "Counting $z=i$ as contributing only one factor $(z-i)$ and concluding the polynomial has degree $3$ after adding the conjugate and the real root. Multiplicity $2$ means $(z-i)^2$ — and reality forces $(z+i)^2$ too — so the four non-real factors are $(z^2+1)^2$, leaving exactly one real root to reach degree $5$.",
  "solutions": [
   {
    "name": "Build from forced factors",
    "steps": [
     "Reality plus multiplicity: $i$ double $\\Rightarrow$ $-i$ double, contributing $(z-i)^2(z+i)^2=(z^2+1)^2$ (degree $4$).",
     "Degree $5$ leaves one real root $r$: $P(z)=(z^2+1)^2(z-r)$. The $z^4$ coefficient of $P$ is $-r$ (sum of all five roots with sign).",
     "$-r=-3\\Rightarrow r=3$, so $P(z)=(z^2+1)^2(z-3)$. Then $P(2)=(4+1)^2(2-3)=25\\cdot(-1)=\\boxed{-25}$."
    ]
   },
   {
    "name": "Vieta on the sum of roots",
    "steps": [
     "The five roots (with multiplicity) are $i,i,-i,-i,r$. Their sum is $r$.",
     "For a monic quintic the coefficient of $z^4$ is $-(\\text{sum of roots})=-r$; given it is $-3$, we get $r=3$.",
     "Thus $P(z)=(z^2+1)^2(z-3)$ and $P(2)=25\\cdot(-1)=\\boxed{-25}$."
    ]
   }
  ],
  "remark": "Insight: multiplicity is invisible to a careless root-count but loud to Vieta — a double root is counted twice in every symmetric function, including the simple sum that fixes $r$ here."
 },
 {
  "theme": "equations",
  "themeLabel": "Polynomial Equations",
  "title": "The Equation on the Vertical Line",
  "difficulty": 5,
  "task": "Find all",
  "tags": [
   "roots of unity",
   "binomial collapse",
   "vieta",
   "locus"
  ],
  "statement": "Consider the equation \\[(z+1)^7=z^7.\\] (a) Show it has exactly $6$ solutions in $\\mathbb{C}$. (b) Find the sum of all the solutions, and prove every solution has real part $-\\tfrac12$.",
  "answer": "There are $6$ solutions; their sum is $-3$, and each solution satisfies $\\operatorname{Re}(z)=-\\tfrac12$ (explicitly $z_k=-\\tfrac12-\\tfrac{i}{2}\\cot\\tfrac{\\pi k}{7}$, $k=1,\\dots,6$).",
  "trap": "Reading $(z+1)^7=z^7$ as a degree-$7$ equation and expecting $7$ roots. The $z^7$ terms cancel, dropping the true degree to $6$ — invoking the Fundamental Theorem of Algebra on the un-cancelled form over-counts the roots by one. Equivalently, the would-be seventh root corresponds to $\\frac1z=0$, i.e. the point at infinity, which is not a genuine solution.",
  "solutions": [
   {
    "name": "Reduce to roots of unity",
    "steps": [
     "$z=0$ is not a solution (it gives $1=0$), so divide by $z^7$: $\\big(\\tfrac{z+1}{z}\\big)^7=1$, i.e. $\\big(1+\\tfrac1z\\big)^7=1$.",
     "Thus $1+\\tfrac1z=\\zeta_k=e^{2\\pi i k/7}$ for $k=1,\\dots,6$ (the value $k=0$ gives $\\tfrac1z=0$, impossible). These are exactly $6$ distinct solutions, $z_k=\\dfrac{1}{\\zeta_k-1}$.",
     "For any $\\zeta=e^{i\\theta}\\ne1$, $\\dfrac{1}{\\zeta-1}=\\dfrac{1}{e^{i\\theta}-1}=-\\tfrac12-\\tfrac{i}{2}\\cot\\tfrac\\theta2$, so $\\operatorname{Re}(z_k)=-\\tfrac12$ for all $k$, giving $z_k=-\\tfrac12-\\tfrac{i}{2}\\cot\\tfrac{\\pi k}{7}$. $\\blacksquare$"
    ]
   },
   {
    "name": "Vieta on the expanded sextic",
    "steps": [
     "Expand and cancel $z^7$: $(z+1)^7-z^7=7z^6+21z^5+35z^4+35z^3+21z^2+7z+1=0$, a genuine degree-$6$ polynomial (so $6$ roots, counted with multiplicity).",
     "Sum of roots $=-\\dfrac{21}{7}=-3$. The binomial coefficients $\\{7,21,35,35,21,7,1\\}$ make the polynomial palindromic, so the roots are closed under $z\\mapsto \\tfrac1z$; combined with real coefficients (closure under conjugation), the map $z\\mapsto -1-\\bar z$ permutes the roots.",
     "But $z\\mapsto-1-\\bar z$ is reflection across the line $\\operatorname{Re}=-\\tfrac12$, and one checks each root is its OWN image: if $z$ is a root then so is $-1-\\bar z$, and since the six values $-\\tfrac12-\\tfrac i2\\cot\\tfrac{\\pi k}{7}$ are already fixed by this reflection, $z=-1-\\bar z$, i.e. $\\operatorname{Re}(z)=-\\tfrac12$. Hence sum $=\\boxed{-3}$ and every root lies on $\\operatorname{Re}(z)=-\\tfrac12$. $\\blacksquare$"
    ]
   },
   {
    "name": "Modulus symmetry (geometry)",
    "steps": [
     "$(z+1)^7=z^7\\Rightarrow\\lvert z+1\\rvert^7=\\lvert z\\rvert^7\\Rightarrow\\lvert z+1\\rvert=\\lvert z\\rvert$: each solution is equidistant from $0$ and $-1$.",
     "Squaring, $\\lvert z+1\\rvert^2-\\lvert z\\rvert^2=2\\operatorname{Re}(z)+1=0$, so $\\operatorname{Re}(z)=-\\tfrac12$: the locus is the perpendicular bisector of the segment from $0$ to $-1$, the vertical line $\\operatorname{Re}(z)=-\\tfrac12$.",
     "Combined with the count of $6$ roots from the first method (and sum $-3$ from Vieta), this proves part (b): all six lie on $\\operatorname{Re}(z)=-\\tfrac12$. $\\blacksquare$"
    ]
   }
  ],
  "remark": "Insight: $\\lvert z+1\\rvert=\\lvert z\\rvert$ turns an algebraic equation into a geometry statement — 'equidistant from $0$ and $-1$' — instantly placing every root on a single vertical line. The same collapse-of-degree phenomenon ($z^n$ cancels, leaving an equation of degree $n-1$ whose roots are images of the $n$-th roots of unity under a Möbius map) is exactly the mechanism behind polynomials whose zeros all sit on one critical line."
 },
 {
  "theme": "hybrid",
  "themeLabel": "The Grand Hybrids",
  "title": "The Trisected Binomial",
  "difficulty": 5,
  "task": "Evaluate",
  "tags": [
   "roots of unity",
   "de moivre",
   "binomial sum",
   "filter"
  ],
  "statement": "For a positive integer $n$, evaluate in closed form\n\\[ S_n \\;=\\; \\binom{3n}{0} + \\binom{3n}{3} + \\binom{3n}{6} + \\cdots + \\binom{3n}{3n} \\;=\\; \\sum_{k=0}^{n} \\binom{3n}{3k}. \\]",
  "answer": "$\\displaystyle S_n = \\frac{2^{3n} + 2(-1)^n}{3} = \\frac{8^n + 2(-1)^n}{3}.$",
  "trap": "Approximating $S_n \\approx \\tfrac{1}{3}2^{3n}$ and dropping the oscillating term. The correction $\\tfrac{2}{3}(-1)^n$ is exactly what makes the answer an integer — note $2^{3n}/3$ is never an integer, while for $n=1$ the correction turns $\\tfrac{8}{3}$ into the true value $2$. The two complex roots cannot be discarded; their contribution is real because they are conjugate.",
  "solutions": [
   {
    "name": "Roots-of-unity filter with De Moivre",
    "steps": [
     "Let $\\omega=e^{2\\pi i/3}$, so $\\tfrac13(1+\\omega^{j}+\\omega^{2j})$ equals $1$ when $3\\mid j$ and $0$ otherwise. Hence $S_n=\\tfrac13\\sum_{j=0}^{3n}\\binom{3n}{j}\\big(1+\\omega^{j}+\\omega^{2j}\\big).$",
     "Swap the order of summation and apply the binomial theorem to each geometric piece: $S_n=\\tfrac13\\big[(1+1)^{3n}+(1+\\omega)^{3n}+(1+\\omega^{2})^{3n}\\big].$",
     "From $1+\\omega+\\omega^2=0$ we get $1+\\omega=-\\omega^{2}=e^{i\\pi/3}$ and $1+\\omega^{2}=-\\omega=e^{-i\\pi/3}$ (a conjugate pair on the unit circle). De Moivre gives $(1+\\omega)^{3n}+(1+\\omega^{2})^{3n}=2\\cos\\!\\big(3n\\cdot\\tfrac{\\pi}{3}\\big)=2\\cos(n\\pi)=2(-1)^n.$",
     "Therefore $\\boxed{S_n=\\dfrac{2^{3n}+2(-1)^n}{3}}.$"
    ]
   },
   {
    "name": "Linear system from the three residue sums",
    "steps": [
     "Define $A=\\sum_k\\binom{3n}{3k},\\ B=\\sum_k\\binom{3n}{3k+1},\\ C=\\sum_k\\binom{3n}{3k+2}$, so that setting $x=1$ in $(1+x)^{3n}$ gives $A+B+C=2^{3n}.$",
     "Expand $(1+\\omega)^{3n}=A+\\omega B+\\omega^2 C$. Taking real parts (using $\\mathrm{Re}\\,\\omega=\\mathrm{Re}\\,\\omega^2=-\\tfrac12$) yields $A-\\tfrac12 B-\\tfrac12 C=\\mathrm{Re}\\,(1+\\omega)^{3n}=(-1)^n$, i.e. $2A-B-C=2(-1)^n.$",
     "Add this to $A+B+C=2^{3n}$ to eliminate $B$ and $C$: $3A=2^{3n}+2(-1)^n.$",
     "Hence $\\boxed{A=\\dfrac{2^{3n}+2(-1)^n}{3}}.$"
    ]
   }
  ],
  "remark": "Insight: a binomial sum sieved 'every third term' is the real shadow of three corners of an equilateral triangle inscribed in the binomial expansion. The phase $3n\\cdot\\pi/3=n\\pi$ collapses the conjugate pair to $\\pm1$, which is the whole reason the answer is so clean — and why the discarded oscillating term is precisely what restores integrality."
 },
 {
  "theme": "hybrid",
  "themeLabel": "The Grand Hybrids",
  "title": "The Circle That Becomes a Line",
  "difficulty": 5,
  "task": "Classify",
  "tags": [
   "mobius transformation",
   "locus",
   "conformal map",
   "complex"
  ],
  "statement": "Let $f(z)=\\dfrac{z+1}{z-1}$. As $z$ ranges over the unit circle $|z|=1$ (excluding $z=1$), determine and classify completely the locus traced by $w=f(z)$.",
  "answer": "The locus is the entire imaginary axis: $\\{\\,w : \\operatorname{Re}(w)=0\\,\\}$. Equivalently $w=-\\,i\\cot\\!\\big(\\tfrac{t}{2}\\big)$ as $z=e^{it}$, which sweeps out all purely imaginary numbers.",
  "trap": "Assuming a Möbius map sends a circle to a circle, so the image 'must' be a circle. A Möbius map sends circles to circles-or-lines, and here the source circle passes through the pole $z=1$, which is sent to $\\infty$ — forcing the image to be an (unbounded) straight line, not a bounded circle.",
  "solutions": [
   {
    "name": "Direct computation via half-angle",
    "steps": [
     "Put $z=e^{it}$ with $t\\in(0,2\\pi)$. Then $w=\\dfrac{e^{it}+1}{e^{it}-1}=\\dfrac{e^{it/2}+e^{-it/2}}{e^{it/2}-e^{-it/2}}$ after factoring $e^{it/2}$ from numerator and denominator.",
     "This equals $\\dfrac{2\\cos(t/2)}{2i\\sin(t/2)}=\\dfrac{\\cos(t/2)}{i\\sin(t/2)}=-\\,i\\cot\\!\\big(\\tfrac{t}{2}\\big).$",
     "As $t$ ranges over $(0,2\\pi)$, $\\cot(t/2)$ takes every real value, so $w$ takes every purely imaginary value.",
     "Hence the locus is exactly $\\boxed{\\operatorname{Re}(w)=0}$, the imaginary axis."
    ]
   },
   {
    "name": "Three-point image of the map",
    "steps": [
     "A Möbius map is determined by three points and sends circles/lines to circles/lines. The unit circle passes through $z=1$, the pole of $f$, so its image passes through $\\infty$ — the image is a line.",
     "Compute images of $z=-1\\mapsto 0$ and $z=i\\mapsto \\dfrac{i+1}{i-1}=\\dfrac{(i+1)(\\,\\overline{i-1}\\,)}{|i-1|^2}=\\dfrac{(i+1)(-i-1)}{2}=-i.$",
     "Two image points $0$ and $-i$ together with $\\infty$ determine the line through them: the imaginary axis.",
     "Therefore the locus is $\\boxed{\\text{the imaginary axis }\\operatorname{Re}(w)=0}.$"
    ]
   },
   {
    "name": "Algebraic invariant",
    "steps": [
     "Solve $w=\\dfrac{z+1}{z-1}$ for $z$: $z=\\dfrac{w+1}{w-1}.$ The condition $|z|=1$ becomes $|w+1|=|w-1|.$",
     "$|w+1|=|w-1|$ says $w$ is equidistant from $-1$ and $+1$, i.e. $w$ lies on the perpendicular bisector of $[-1,1].$",
     "That bisector is exactly the imaginary axis.",
     "Hence $\\boxed{\\operatorname{Re}(w)=0}.$"
    ]
   }
  ],
  "remark": "Insight: the inverse map is involutive ($f=f^{-1}$ here), so 'pulling back' $|z|=1$ and 'pushing forward' it are the same computation. The pole lying on the source curve is the tell-tale sign the image will be unbounded."
 },
 {
  "theme": "hybrid",
  "themeLabel": "The Grand Hybrids",
  "title": "The Equilateral Cubic",
  "difficulty": 5,
  "task": "Find all",
  "tags": [
   "roots of unity",
   "rotation",
   "equilateral triangle",
   "cubic"
  ],
  "statement": "Consider the cubic $z^{3}-6z^{2}+12z+c=0$ with $c$ a real constant. (a) Show that, for every real $c$, its three roots are the vertices of an equilateral triangle, and find the common centroid and the side length as a function of $c$. (b) Determine the value of $c$ for which one vertex of the triangle is the real number $3$, and give the resulting side length.",
  "answer": "(a) For every real $c$ the centroid is $g=2$ and the side length is $s=\\sqrt{3}\\,|c+8|^{1/3}$ (degenerate only at $c=-8$). (b) The vertex $z=3$ forces $c=-9$; then the roots are $3,\\,2+\\zeta,\\,2+\\zeta^{2}$ with $\\zeta=e^{2\\pi i/3}$, centroid $2$, and side length $\\sqrt{3}$.",
  "trap": "Pinning $c$ from the discriminant, or believing the side length alone fixes $c$. Equilaterality is the rotational-symmetry condition $a^{2}=3b$ on the coefficients, which here holds automatically ($36=3\\cdot12$), so it does NOT determine $c$ at all. Worse, even demanding side $=\\sqrt{3}$ leaves two solutions $c=-9$ and $c=-7$ (the latter has real vertex $1$, not $3$). Only a genuine vertex condition pins $c$ uniquely.",
  "solutions": [
   {
    "name": "Roots-of-unity ansatz",
    "steps": [
     "Equilateral vertices with centroid $g$ have the form $g+r\\zeta^{k}$, $\\zeta=e^{2\\pi i/3}$, $k=0,1,2$, because $1,\\zeta,\\zeta^{2}$ are the cube roots of unity, a rotation by $120^\\circ$ about $g$.",
     "Their elementary symmetric sums give the monic cubic $(z-g)^{3}-r^{3}=0$, since $\\sum\\zeta^{k}=0$ and $\\sum_{i<j}\\zeta^{i}\\zeta^{j}=0$. Thus any equilateral triad is the root set of $z^{3}-3g\\,z^{2}+3g^{2}z-(g^{3}+r^{3})=0$.",
     "Match to $z^{3}-6z^{2}+12z+c$: the quadratic term gives $3g=6$, so $g=2$, and the linear term $3g^{2}=12$ is automatically consistent. The constant term gives $-(g^{3}+r^{3})=c$, i.e. $r^{3}=-(8+c)$. Hence for every real $c$ the roots are equilateral with centroid $g=2$ and side $s=\\sqrt{3}\\,|r|=\\sqrt{3}\\,|c+8|^{1/3}$ (using $|\\zeta^{i}-\\zeta^{j}|=\\sqrt{3}$). This proves part (a).",
     "For part (b), demand a vertex at $z=3$. Substituting $z=3$ into the cubic: $27-54+36+c=0\\Rightarrow c=-9$. Then $r^{3}=-(8-9)=1$, so $|r|=1$ and $s=\\sqrt{3}$, with the real cube root $r=1$ giving the vertex $g+r=3$ exactly. $\\boxed{c=-9,\\;g=2,\\;\\text{side}=\\sqrt{3}}$"
    ]
   },
   {
    "name": "Depress and recognize cube roots",
    "steps": [
     "Substitute $z=u+2$ (a shift to the centroid $-\\tfrac{a}{3}=2$). Expanding, $z^{3}-6z^{2}+12z+c=(u+2)^{3}-6(u+2)^{2}+12(u+2)+c=u^{3}+(c+8)$. The quadratic and linear terms vanish identically because the coefficient pattern satisfies $a^{2}=3b$.",
     "So the equation becomes $u^{3}=-(c+8)$, a constant. Its three solutions are the three cube roots of a fixed complex number, which always sit at the vertices of an equilateral triangle centred at $u=0$. Translating back, the $z$-roots are equilateral with centroid $2$ and side $\\sqrt{3}\\,|c+8|^{1/3}$ for every real $c$ (degenerate only when $c=-8$). This settles part (a).",
     "For part (b), the vertex $z=3$ means $u=1$, so $u^{3}=1$, giving $-(c+8)=1$ and $c=-9$.",
     "Then $u\\in\\{1,\\zeta,\\zeta^{2}\\}$ and $z\\in\\{3,\\,2+\\zeta,\\,2+\\zeta^{2}\\}$, centroid $2$, side $=|1-\\zeta|=\\sqrt{3}$. (Note $c=-7$ would also give side $\\sqrt{3}$ but with real vertex $1$, so the vertex-at-$3$ condition is essential.) $\\boxed{c=-9,\\;g=2,\\;\\text{side}=\\sqrt{3}}$"
    ]
   }
  ],
  "remark": "Insight: depressing a cubic to $u^{3}=\\text{const}$ instantly exposes an equilateral triangle, because the cube roots of any complex number are the vertices of one. The coefficient fingerprint of this symmetry is $a^{2}=3b$; when it holds, equilaterality is forced for the whole one-parameter family, so the centroid is locked but the side length and constant $c$ float freely. A unique $c$ therefore requires one extra honest constraint, such as fixing an actual vertex."
 },
 {
  "theme": "hybrid",
  "themeLabel": "The Grand Hybrids",
  "title": "The Heptagon's Hidden Bookkeeping",
  "difficulty": 5,
  "task": "Evaluate",
  "tags": [
   "roots of unity",
   "polynomial roots",
   "distance product",
   "regular polygon"
  ],
  "statement": "The roots of $P(z)=z^{7}-128$ are the vertices of a regular heptagon. Compute both quantities:\n\\[(\\text{a})\\ \\ \\prod_{k} |\\,3-z_k\\,| \\quad\\text{(product of distances from the point }3\\text{ to all seven vertices)};\\]\n\\[(\\text{b})\\ \\ \\sum_{j<k} |z_j-z_k|^{2}\\quad\\text{(sum of squared lengths of all }\\tbinom{7}{2}\\text{ chords).}\\]",
  "answer": "(a) $\\displaystyle\\prod_k|3-z_k| = |3^{7}-128| = 2187-128 = 2059.$\\quad (b) $\\displaystyle\\sum_{j<k}|z_j-z_k|^2 = 196.$",
  "trap": "For (a), computing seven cosine-law distances numerically and multiplying — error-prone and pointless. For (b), forgetting that $\\sum_j z_j=0$ for these roots; if you wrongly keep a $|\\sum z_j|^2$ term you get a different (wrong) number. The vanishing centroid is what makes the chord sum collapse to $n^2R^2$.",
  "solutions": [
   {
    "name": "Factored polynomial and Newton bookkeeping",
    "steps": [
     "(a) Since $P(z)=\\prod_k(z-z_k)=z^7-128$, we have $\\prod_k(3-z_k)=P(3)=3^7-128=2059$, and all factors give a positive product, so $\\prod_k|3-z_k|=2059.$",
     "(b) Write $\\sum_{j<k}|z_j-z_k|^2=\\tfrac12\\sum_{j,k}|z_j-z_k|^2=\\tfrac12\\sum_{j,k}\\big(|z_j|^2+|z_k|^2-2\\operatorname{Re}(z_j\\bar z_k)\\big).$",
     "This equals $n\\sum_k|z_k|^2-\\big|\\sum_k z_k\\big|^2$. Here $|z_k|=R=2$ for all $k$ so $\\sum|z_k|^2=nR^2=7\\cdot4=28$, and $\\sum z_k=0$ (coefficient of $z^6$ in $P$ is $0$).",
     "Thus the sum $=n\\cdot nR^2-0=n^2R^2=49\\cdot4=196.$ $\\boxed{(a)\\,2059,\\ (b)\\,196}$"
    ]
   },
   {
    "name": "Geometric symmetry for (b), conjugate-pairing for (a)",
    "steps": [
     "(b) For $n$ equally spaced points of radius $R$, each vertex contributes squared distances to the other $n-1$; by rotational symmetry $\\sum_k|z_0-z_k|^2$ is the same for each base vertex, and summing over a fixed vertex gives $\\sum_{k}|R-Re^{2\\pi i k/n}|^2=R^2\\sum_k(2-2\\cos\\tfrac{2\\pi k}{n})=2R^2 n.$",
     "Total over ordered pairs $=n\\cdot 2R^2n=2n^2R^2$; halve for unordered: $n^2R^2=196.$",
     "(a) The product of distances from a point $a$ to the roots of $z^n-R^n$ is $|a^n-R^n|$ because $\\prod_k(a-z_k)=a^n-R^n$ by the factorization of $z^n-R^n$. With $a=3$, $R^7=128$: $|2187-128|=2059.$",
     "$\\boxed{(a)\\,2059,\\ (b)\\,196}$"
    ]
   }
  ],
  "remark": "Insight: a regular polygon is a polynomial in disguise — distances multiply because the polygon IS $\\prod(z-z_k)$, and squared-distance sums simplify because the centroid sits at the origin. Two famous formulas, one configuration."
 },
 {
  "theme": "hybrid",
  "themeLabel": "The Grand Hybrids",
  "title": "The Disguised Translation",
  "difficulty": 5,
  "task": "Determine",
  "tags": [
   "locus",
   "max min",
   "modulus",
   "factoring"
  ],
  "statement": "The complex number $z$ moves on the circle $|z-2|=1$. Determine the maximum and minimum values of $|z^{2}-4z|$ as $z$ traverses this circle.",
  "answer": "Maximum $=5$, minimum $=3$.",
  "trap": "Parametrizing $z=2+e^{it}$ and grinding $|z^2-4z|$ as a messy trigonometric function, then trusting a calculus critical-point hunt that misses the structure. The slick move is to factor first: $z^2-4z=z(z-4)$ telescopes into $e^{2it}-4$, turning a quartic-looking modulus into a simple distance from a fixed point.",
  "solutions": [
   {
    "name": "Factor and telescope",
    "steps": [
     "Write $z=2+e^{it}$ on the circle. Then $z-4=-2+e^{it}=e^{it}-2.$",
     "So $z^2-4z=z(z-4)=(2+e^{it})(e^{it}-2)=e^{2it}-4$ (the cross terms $2e^{it}-2e^{it}$ cancel and $2\\cdot(-2)=-4$).",
     "Hence $|z^2-4z|=|e^{2it}-4|$, the distance from the unit-circle point $e^{2it}$ to the fixed point $4.$",
     "This distance ranges from $4-1=3$ (nearest point $e^{2it}=1$) to $4+1=5$ (farthest point $e^{2it}=-1$). $\\boxed{\\min=3,\\ \\max=5}$"
    ]
   },
   {
    "name": "Complete the square geometrically",
    "steps": [
     "$z^2-4z=(z-2)^2-4.$ On the circle $|z-2|=1$, set $w=z-2$ so $|w|=1$; then $z^2-4z=w^2-4.$",
     "As $w$ ranges over the unit circle, $w^2$ ranges over the unit circle as well (covering it twice).",
     "Thus $|w^2-4|$ is the distance from a unit-circle point to $4$, lying in $[\\,4-1,\\,4+1\\,]=[3,5].$",
     "Both extremes are attained ($w^2=1$ gives $3$, $w^2=-1$ gives $5$). $\\boxed{\\min=3,\\ \\max=5}$"
    ]
   },
   {
    "name": "Direct modulus-squared (verifying the trap is harmless)",
    "steps": [
     "With $z=2+e^{it}$ one finds $|z^2-4z|^2=|e^{2it}-4|^2=(\\cos 2t-4)^2+\\sin^2 2t=17-8\\cos 2t.$",
     "As $\\cos 2t$ sweeps $[-1,1]$, the value $17-8\\cos 2t$ sweeps $[9,25].$",
     "Taking square roots, $|z^2-4z|\\in[3,5]$, with $\\min$ at $\\cos 2t=1$ and $\\max$ at $\\cos 2t=-1.$ $\\boxed{\\min=3,\\ \\max=5}$"
    ]
   }
  ],
  "remark": "Insight: completing the square inside a modulus turns 'point on a circle' into 'point on another circle', and the extremes of $|w^2-c|$ are just $|c|\\pm 1$. The algebra of $(z-2)^2$ is the whole problem; even the brute-force route collapses to the clean $17-8\\cos 2t$, so there is no hidden critical point to miss."
 },
 {
  "theme": "hybrid",
  "themeLabel": "The Grand Hybrids",
  "title": "The Cosecant Census",
  "difficulty": 5,
  "task": "Evaluate",
  "tags": [
   "roots of unity",
   "trig identity",
   "de moivre",
   "polynomial roots"
  ],
  "statement": "Evaluate, in closed form for an integer $n\\ge 2$,\n\\[ T_n \\;=\\; \\sum_{k=1}^{n-1} \\frac{1}{\\sin^{2}\\!\\big(\\tfrac{k\\pi}{n}\\big)}, \\]\nand state $T_7$ explicitly.",
  "answer": "$\\displaystyle T_n=\\frac{n^{2}-1}{3}$, and in particular $T_7=\\dfrac{48}{3}=16.$",
  "trap": "Approximating the sum by the integral $\\int_0^\\pi \\csc^2\\theta\\,d\\theta$ (or summing numerically and guessing). The integral diverges at both endpoints — on $[\\varepsilon,\\pi-\\varepsilon]$ it grows like $2/\\varepsilon$, so it has no finite value and gives no clean formula. The exact answer comes instead from a polynomial whose roots are the $\\sin^2(k\\pi/n)$: the divergent-looking near-endpoint terms are exactly balanced, and the total collapses to the clean quadratic $(n^2-1)/3$.",
  "solutions": [
   {
    "name": "Roots-of-unity sums via the logarithmic derivative",
    "steps": [
     "The numbers $\\zeta_k=e^{2ik\\pi/n}$ for $k=1,\\dots,n-1$ are the roots of $P(z)=\\dfrac{z^n-1}{z-1}=1+z+\\cdots+z^{n-1}$. Since $|1-\\zeta_k|^2=(1-\\zeta_k)(1-\\bar\\zeta_k)=2-2\\cos\\tfrac{2k\\pi}{n}=4\\sin^2\\tfrac{k\\pi}{n}$, we get $\\dfrac{1}{\\sin^2(k\\pi/n)}=\\dfrac{4}{|1-\\zeta_k|^2}$, hence $T_n=4\\displaystyle\\sum_{k=1}^{n-1}\\frac{1}{(1-\\zeta_k)(1-\\bar\\zeta_k)}.$",
     "Two standard sums over the nontrivial $n$-th roots of unity, read off from $\\dfrac{P'(z)}{P(z)}=\\sum_k\\dfrac{1}{z-\\zeta_k}$ evaluated near $z=1$: $\\displaystyle\\sum_{k=1}^{n-1}\\frac{1}{1-\\zeta_k}=\\frac{n-1}{2}$ and $\\displaystyle\\sum_{k=1}^{n-1}\\frac{1}{(1-\\zeta_k)^2}=-\\frac{(n-1)(n-5)}{12}.$ (Mind the sign on the second sum: e.g. for $n=7$ it equals $-1$, not $+1$.)",
     "Because $\\bar\\zeta_k=\\zeta_{n-k}=\\zeta_k^{-1}$, set $a_k=\\dfrac{1}{1-\\zeta_k}$ and $b_k=\\dfrac{1}{1-\\bar\\zeta_k}$. A short computation gives $a_k+b_k=1$, so $a_kb_k=\\tfrac12\\big(1-(a_k^2+b_k^2)\\big)$. As $k\\mapsto n-k$ swaps the two roots, $\\sum_k(a_k^2+b_k^2)=2\\sum_k a_k^2=2\\cdot\\!\\big(-\\tfrac{(n-1)(n-5)}{12}\\big).$",
     "Therefore $\\displaystyle\\sum_{k=1}^{n-1}\\frac{1}{|1-\\zeta_k|^2}=\\sum_k a_kb_k=\\frac{(n-1)+\\tfrac{(n-1)(n-5)}{6}}{2}=\\frac{(n-1)(n+1)}{12}=\\frac{n^2-1}{12}.$ Multiplying by $4$: $T_n=\\dfrac{n^2-1}{3}$, so $T_7=\\dfrac{48}{3}=\\boxed{16}.$"
    ]
   },
   {
    "name": "Chebyshev polynomial whose roots are the $\\sin^2(k\\pi/n)$",
    "steps": [
     "Write $\\theta=k\\pi/n$. The values $x_k=\\sin^2\\tfrac{k\\pi}{n}$, $k=1,\\dots,n-1$, are exactly the roots of a degree-$(n-1)$ polynomial $p(x)$ obtained from $\\dfrac{\\sin n\\theta}{\\sin\\theta}=0$ after substituting $s=\\sin^2\\theta$ (this ratio is $\\pm U_{n-1}(\\cos\\theta)$, a polynomial in $\\cos^2\\theta=1-s$, of degree $n-1$ in $s$).",
     "For a monic $p$ with roots $x_k$, the sum of reciprocals of the roots is $\\displaystyle\\sum_k\\frac{1}{x_k}=\\frac{e_{n-2}}{e_{n-1}}=-\\frac{p'(0)}{p(0)}$, by Newton's relation between the two lowest elementary symmetric functions and the derivative at $0$.",
     "Expanding $\\dfrac{\\sin n\\theta}{\\sin\\theta}$ for small $\\theta$ to two orders, $\\dfrac{\\sin n\\theta}{\\sin\\theta}=n-\\dfrac{n(n^2-1)}{6}\\theta^2+O(\\theta^4)=n\\Big(1-\\tfrac{n^2-1}{6}s+O(s^2)\\Big)$ with $s=\\sin^2\\theta$. The constant term and the linear coefficient give $-p'(0)/p(0)=\\dfrac{n^2-1}{6}\\big/\\big(\\tfrac12\\big)=\\dfrac{n^2-1}{3}$ after the $s\\to x$ normalization (each root contributes $1/x_k$).",
     "Hence $\\displaystyle\\sum_{k=1}^{n-1}\\frac{1}{\\sin^2(k\\pi/n)}=\\frac{n^2-1}{3}$, giving $T_n=\\dfrac{n^2-1}{3}$ and $T_7=\\boxed{16}.$"
    ]
   }
  ],
  "remark": "Insight: the $\\sin^2(k\\pi/n)$ are never random — they equal $\\tfrac14|1-\\zeta_k|^2$, so any symmetric function of them is a symmetric function of the $n$-th roots of unity, computable straight from the coefficients of $z^n-1$. The same machine evaluates $\\sum\\csc^4$, $\\sum\\cot^2$, etc.; the famous $\\sum_{k=1}^{n-1}\\cot^2\\tfrac{k\\pi}{n}=\\tfrac{(n-1)(n-2)}{3}$ is its sibling, and indeed $\\csc^2=1+\\cot^2$ recovers $T_n=(n-1)+\\tfrac{(n-1)(n-2)}{3}=\\tfrac{n^2-1}{3}$ as a one-line cross-check."
 },
 {
  "theme": "hybrid",
  "themeLabel": "The Grand Hybrids",
  "title": "The Inversion of a Vertical Line",
  "difficulty": 5,
  "task": "Classify",
  "tags": [
   "mobius transformation",
   "inversion",
   "locus",
   "circle"
  ],
  "statement": "Let $w=\\dfrac{1}{z}$. As $z$ ranges over the vertical line $\\operatorname{Re}(z)=1$, classify the locus of $w$ precisely: give its equation, center, and radius, and identify the one point of the 'expected' shape that is missing.",
  "answer": "The locus is the circle $\\big|\\,w-\\tfrac12\\,\\big|=\\tfrac12$ (center $\\tfrac12$, radius $\\tfrac12$), i.e. $u^2+v^2=u$ for $w=u+iv$, but with the origin $w=0$ deleted (it corresponds to $z=\\infty$).",
  "trap": "Concluding the image is the full circle. Inversion sends the line (which does not pass through $0$) to a circle through $0$, but the point $w=0$ on that circle is the image of $z=\\infty$, which is not on the finite line — so the origin is a puncture, not part of the locus.",
  "solutions": [
   {
    "name": "Direct substitution",
    "steps": [
     "Write $z=1+it$, $t\\in\\mathbb{R}$. Then $w=\\dfrac{1}{1+it}=\\dfrac{1-it}{1+t^2}$, so $u=\\dfrac{1}{1+t^2}$, $v=\\dfrac{-t}{1+t^2}.$",
     "Compute $u^2+v^2=\\dfrac{1+t^2}{(1+t^2)^2}=\\dfrac{1}{1+t^2}=u.$ Hence $u^2+v^2=u$, i.e. $(u-\\tfrac12)^2+v^2=\\tfrac14.$",
     "This is the circle of center $\\tfrac12$, radius $\\tfrac12.$ As $t\\to\\pm\\infty$, $w\\to0$ but never equals $0$, so the origin is excluded.",
     "$\\boxed{|w-\\tfrac12|=\\tfrac12,\\ \\text{origin deleted}}$"
    ]
   },
   {
    "name": "Möbius circle-line principle",
    "steps": [
     "$w=1/z$ is Möbius, sending circles/lines to circles/lines. The source line $\\operatorname{Re}(z)=1$ does not pass through the pole $z=0$, so its image is a bounded circle (not a line).",
     "Find three images: $z=1\\mapsto1$, $z=1+i\\mapsto\\dfrac{1}{1+i}=\\tfrac12-\\tfrac12 i$, $z=1-i\\mapsto\\tfrac12+\\tfrac12 i.$ These three points determine the circle $|w-\\tfrac12|=\\tfrac12.$",
     "The image of $z=\\infty$ is $w=0$, which lies on this circle; but $\\infty\\notin\\{\\operatorname{Re}z=1\\}$, so $w=0$ is omitted.",
     "$\\boxed{|w-\\tfrac12|=\\tfrac12,\\ \\text{minus the origin}}$"
    ]
   }
  ],
  "remark": "Insight: inversion turns 'lines not through the pole' into 'circles through the pole'. The puncture at the origin is the signature of the point at infinity — easy to lose, but it is what distinguishes a punctured circle from a full one."
 },
 {
  "theme": "hybrid",
  "themeLabel": "The Grand Hybrids",
  "title": "The Twin Apexes",
  "difficulty": 5,
  "task": "Find a,b",
  "tags": [
   "rotation",
   "equilateral triangle",
   "complex",
   "reflection"
  ],
  "statement": "On the segment with endpoints $A=3-i$ and $B=7+5i$ as one side, two equilateral triangles can be built (one apex on each side of $AB$). Let $C_1,C_2$ be the two apex points. Find $C_1$ and $C_2$ explicitly, and prove that $C_1+C_2=A+B$.",
  "answer": "$C_{1,2}=A+(B-A)e^{\\pm i\\pi/3}$. Explicitly $C_1=\\big(5-3\\sqrt3\\big)+\\big(2+2\\sqrt3\\big)i$ and $C_2=\\big(5+3\\sqrt3\\big)+\\big(2-2\\sqrt3\\big)i$; each satisfies $|C-A|=|C-B|=|A-B|=\\sqrt{52}$. Their sum is $C_1+C_2=10+4i=A+B$.",
  "trap": "Building both apexes from the same vertex with the same $+60^\\circ$ rotation: this returns one point twice, giving $C_1+C_2=2\\big(A+(B-A)e^{i\\pi/3}\\big)$, which still carries a $\\sqrt3$-part and is NOT $A+B$. The two apexes must come from rotating $B$ about $A$ by $+60^\\circ$ AND by $-60^\\circ$; because $e^{i\\pi/3}+e^{-i\\pi/3}=2\\cos60^\\circ=1$ (not $0$), the imaginary heights cancel and the sum collapses to $A+B$. A second slip is mis-scaling the height: the apex offset is $\\tfrac{\\sqrt3}{2}|B-A|$, so the real/imaginary corrections are $\\pm3\\sqrt3$ and $\\pm2\\sqrt3$ — writing $\\pm2\\sqrt3$ for the real part gives points that fail $|C-A|=|A-B|$ and are not equilateral apexes at all.",
  "solutions": [
   {
    "name": "Rotation of one endpoint about the other",
    "steps": [
     "Rotating $B$ about $A$ by $\\pm60^\\circ$ gives the two apexes $C_{1,2}=A+(B-A)e^{\\pm i\\pi/3}$. Here $B-A=(7+5i)-(3-i)=4+6i$.",
     "With $e^{i\\pi/3}=\\tfrac12+\\tfrac{\\sqrt3}{2}i$: $(4+6i)\\big(\\tfrac12+\\tfrac{\\sqrt3}{2}i\\big)=\\big(2-3\\sqrt3\\big)+\\big(3+2\\sqrt3\\big)i$. Add $A=3-i$ to get $C_1=\\big(5-3\\sqrt3\\big)+\\big(2+2\\sqrt3\\big)i$.",
     "With $e^{-i\\pi/3}=\\tfrac12-\\tfrac{\\sqrt3}{2}i$, the same product gives $\\big(2+3\\sqrt3\\big)+\\big(3-2\\sqrt3\\big)i$, and adding $A$ yields $C_2=\\big(5+3\\sqrt3\\big)+\\big(2-2\\sqrt3\\big)i$.",
     "Each is a true apex: $|C_1-A|^2=|C_1-B|^2=|A-B|^2=4^2+6^2=52$. Summing, $C_1+C_2=2A+(B-A)\\big(e^{i\\pi/3}+e^{-i\\pi/3}\\big)=2A+(B-A)\\cdot 1=A+B=10+4i.$ $\\boxed{C_1+C_2=A+B=10+4i}$"
    ]
   },
   {
    "name": "Midpoint and perpendicular height",
    "steps": [
     "The two apexes are reflections of each other across line $AB$, so their average is the foot of the apex perpendiculars — the midpoint $M=\\tfrac{A+B}{2}$ of $AB$. Hence $\\dfrac{C_1+C_2}{2}=M=\\dfrac{A+B}{2}$, i.e. $C_1+C_2=A+B$ with no rotation algebra.",
     "Numerically $M=\\tfrac{(3-i)+(7+5i)}{2}=5+2i$. The apexes sit at $C_{1,2}=M\\pm h\\,\\hat n$, where $h=\\tfrac{\\sqrt3}{2}|B-A|=\\tfrac{\\sqrt3}{2}\\sqrt{52}=\\sqrt{39}$ and $\\hat n=i\\,\\tfrac{B-A}{|B-A|}$ is the unit normal to $AB$.",
     "Then $h\\,\\hat n=\\tfrac{\\sqrt3}{2}\\,i\\,(B-A)=\\tfrac{\\sqrt3}{2}\\,i\\,(4+6i)=-3\\sqrt3+2\\sqrt3\\,i$, so $C_{1,2}=(5\\mp3\\sqrt3)+(2\\pm2\\sqrt3)i$, matching the rotation method.",
     "Therefore $C_1=\\big(5-3\\sqrt3\\big)+\\big(2+2\\sqrt3\\big)i$, $C_2=\\big(5+3\\sqrt3\\big)+\\big(2-2\\sqrt3\\big)i$, and $\\boxed{C_1+C_2=A+B=10+4i}$"
    ]
   }
  ],
  "remark": "Insight: the two equilateral apexes are mirror images across the base, so their average is the base's midpoint — a one-line proof that $C_1+C_2=A+B$ with no rotation algebra at all. The rotation route confirms it via $e^{i\\pi/3}+e^{-i\\pi/3}=2\\cos60^\\circ=1$: the perpendicular heights cancel ($\\sin$ part) while the in-line parts add to exactly one full $B-A$. The same-vertex/same-rotation slip leaves a stray $\\sqrt3$ term, which is precisely the residue this cancellation is designed to kill."
 },
 {
  "theme": "hybrid",
  "themeLabel": "The Grand Hybrids",
  "title": "The Binomial Wave",
  "difficulty": 5,
  "task": "Prove that",
  "tags": [
   "de moivre",
   "binomial sum",
   "roots of unity",
   "trig"
  ],
  "statement": "Prove that for every positive integer $n$ and every real $\\theta$,\n\\[ \\sum_{k=0}^{2n} \\binom{2n}{k}\\cos(k\\theta) \\;=\\; 2^{2n}\\,\\cos^{2n}\\!\\Big(\\tfrac{\\theta}{2}\\Big)\\,\\cos(n\\theta). \\]\nUsing this, evaluate the special case $\\theta=\\tfrac{\\pi}{2}$, $n$ arbitrary.",
  "answer": "Proved. At $\\theta=\\tfrac{\\pi}{2}$: $\\displaystyle\\sum_{k=0}^{2n}\\binom{2n}{k}\\cos\\!\\big(\\tfrac{k\\pi}{2}\\big)=2^{2n}\\big(\\tfrac{1}{\\sqrt2}\\big)^{2n}\\cos\\!\\big(\\tfrac{n\\pi}{2}\\big)=2^{n}\\cos\\!\\big(\\tfrac{n\\pi}{2}\\big),$ which equals $2^{n}(-1)^{n/2}$ for even $n$ and $0$ for odd $n$.",
  "trap": "Trying to sum $\\binom{2n}{k}\\cos(k\\theta)$ term by term with product-to-sum formulas. The clean path is to recognize the sum as the real part of $(1+e^{i\\theta})^{2n}$; refusing De Moivre forces an intractable trig expansion. A related slip is keeping the amplitude $2^{2n}\\cos^{2n}(\\theta/2)=|1+e^{i\\theta}|^{2n}$ but dropping the phase factor $\\cos(n\\theta)$, which is numerically false.",
  "solutions": [
   {
    "name": "Real part of a binomial power",
    "steps": [
     "By the binomial theorem, $(1+e^{i\\theta})^{2n}=\\sum_{k=0}^{2n}\\binom{2n}{k}e^{ik\\theta}$, whose real part is exactly $\\sum_k\\binom{2n}{k}\\cos(k\\theta).$",
     "Factor the base: $1+e^{i\\theta}=e^{i\\theta/2}\\big(e^{-i\\theta/2}+e^{i\\theta/2}\\big)=2\\cos(\\tfrac{\\theta}{2})\\,e^{i\\theta/2}.$",
     "Raise to the $2n$: $(1+e^{i\\theta})^{2n}=2^{2n}\\cos^{2n}(\\tfrac{\\theta}{2})\\,e^{in\\theta}$ by De Moivre.",
     "Take real parts: $\\sum_k\\binom{2n}{k}\\cos(k\\theta)=2^{2n}\\cos^{2n}(\\tfrac{\\theta}{2})\\cos(n\\theta).$ Setting $\\theta=\\tfrac\\pi2$ gives $2^{n}\\cos(\\tfrac{n\\pi}{2}).$ $\\blacksquare$"
    ]
   },
   {
    "name": "Induction on n via product recursion",
    "steps": [
     "Let $F_n(\\theta)=\\operatorname{Re}(1+e^{i\\theta})^{2n}.$ Base $n=0$: $F_0=1=2^0\\cos^0\\cos0.$",
     "Step: $(1+e^{i\\theta})^{2(n+1)}=(1+e^{i\\theta})^{2n}\\cdot(1+e^{i\\theta})^2$, and $(1+e^{i\\theta})^2=4\\cos^2(\\tfrac\\theta2)e^{i\\theta}.$",
     "Multiplying $2^{2n}\\cos^{2n}(\\tfrac\\theta2)e^{in\\theta}$ by $4\\cos^2(\\tfrac\\theta2)e^{i\\theta}$ gives $2^{2n+2}\\cos^{2n+2}(\\tfrac\\theta2)e^{i(n+1)\\theta}$; the real part is the claim for $n+1.$",
     "Hence the identity holds for all $n$, and $\\theta=\\tfrac\\pi2$ yields $2^n\\cos(\\tfrac{n\\pi}{2}).$ $\\blacksquare$"
    ]
   }
  ],
  "remark": "Insight: a weighted cosine sum is the real shadow of a single complex power; the factor $1+e^{i\\theta}=2\\cos(\\theta/2)e^{i\\theta/2}$ converts the whole sum into amplitude $\\times$ phase, splitting cleanly into $\\cos^{2n}(\\theta/2)$ and $\\cos(n\\theta)$."
 },
 {
  "theme": "hybrid",
  "themeLabel": "The Grand Hybrids",
  "title": "The Pentagon's Reach",
  "difficulty": 5,
  "task": "Determine the maximum and minimum.",
  "tags": [
   "roots of unity",
   "de moivre",
   "distance product",
   "max min",
   "locus"
  ],
  "statement": "Let $V_0,\\dots,V_4$ be the fifth roots of unity (vertices of a regular pentagon on the unit circle). A point $P$ moves on the circle $|P|=2$. Determine the maximum and minimum, over all such $P$, of the product of the distances from $P$ to the five vertices, $\\displaystyle \\prod_{k=0}^{4}|P-V_k|.$",
  "answer": "Minimum $=31$, maximum $=33$. (Attained at $P^5=32$, i.e. $P=2$, for the min; at $P^5=-32$ for the max.)",
  "trap": "Multiplying five cosine-law distances and optimizing the resulting trig product directly — hopeless by hand. The product collapses via De Moivre into $|P^5-1|$; then it is just the distance from the radius-$32$ circle (traced by $P^5$) to the point $1$, whose extremes are $32\\pm1$.",
  "solutions": [
   {
    "name": "Distance product to a polynomial, then optimize",
    "steps": [
     "The fifth roots of unity are the roots of $z^5-1=\\prod_{k}(z-V_k)$, so $\\prod_k(P-V_k)=P^5-1$ and $\\prod_k|P-V_k|=|P^5-1|.$",
     "Write $P=2e^{i\\phi}$. By De Moivre $P^5=32e^{5i\\phi}$, a point on the circle of radius $32$ centered at the origin as $\\phi$ varies.",
     "Thus $\\prod_k|P-V_k|=|32e^{5i\\phi}-1|$, the distance from a radius-$32$ circle point to the fixed point $1.$",
     "This distance ranges over $[\\,32-1,\\,32+1\\,]=[31,33]$, both attained. $\\boxed{\\min=31,\\ \\max=33}$"
    ]
   },
   {
    "name": "Extremal alignment argument",
    "steps": [
     "By the factorization, the quantity to optimize is $g(\\phi)=|32e^{5i\\phi}-1|.$ Its square is $32^2-2\\cdot32\\cos(5\\phi)+1=1025-64\\cos(5\\phi).$",
     "$\\cos(5\\phi)$ ranges over $[-1,1]$, so $g^2$ ranges over $[1025-64,\\,1025+64]=[961,1089].$",
     "Taking square roots: $g\\in[\\sqrt{961},\\sqrt{1089}]=[31,33].$",
     "Minimum at $\\cos5\\phi=1$ ($P=2$), maximum at $\\cos5\\phi=-1$ (e.g. $\\phi=\\pi/5$, where $P^5=-32$). $\\boxed{\\min=31,\\ \\max=33}$"
    ]
   }
  ],
  "remark": "Insight: three instruments fuse here — roots of unity place the pentagon, De Moivre converts the distance product to $|P^5-1|$, and the max/min is read off a circle-to-point distance. The pentagon's geometry never needs to be drawn; the polynomial remembers it."
 }
];
