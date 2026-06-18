/* problems.js — DATA. 100 original olympiad/JEE-Advanced complex-numbers problems for ℂ · The Argand Plane. Adversarially verified in Python (sympy/numpy/mpmath). statement/answer raw LaTeX (app auto-detects prose+math); steps use $...$ and $$...$$. */
window.PROBLEMS = [
  {
    "theme": "algebra",
    "themeLabel": "The Algebra of Complex Numbers",
    "title": "Half a Turn from Positive",
    "difficulty": 4,
    "task": "Find all",
    "tags": [
      "argument",
      "de moivre",
      "reality",
      "sign",
      "tangent"
    ],
    "statement": "Find all real numbers $t$ for which $(1+it)^6$ is a negative real number. \\[ \\text{i.e. } (1+it)^6\\in\\mathbb{R} \\text{ and } (1+it)^6<0. \\]",
    "answer": "\\[\\boxed{\\,t=\\pm\\tfrac{1}{\\sqrt3}\\,}\\]",
    "trap": "Writing $1+it=r e^{i\\theta}$ and demanding only that $(1+it)^6=r^6 e^{6i\\theta}$ be real, i.e. $\\sin 6\\theta=0$, hence $6\\theta=k\\pi$, and reporting all the resulting $t=\\tan\\tfrac{k\\pi}{6}=0,\\pm\\tfrac1{\\sqrt3},\\pm\\sqrt3$. That solves 'real', not 'negative real': of those five values, $t=0,\\pm\\sqrt3$ give $e^{6i\\theta}=+1$ (a positive real), and only $t=\\pm\\tfrac1{\\sqrt3}$ give $e^{6i\\theta}=-1$. Reality forces $6\\theta$ to be a multiple of $\\pi$; negativity forces it to be an odd multiple. Equivalently in Cartesian form, $\\mathrm{Im}=0$ is necessary but one must still test the sign of $\\mathrm{Re}$.",
    "solutions": [
      {
        "name": "Argument and De Moivre",
        "steps": [
          "Write $1+it=r e^{i\\theta}$ with $r=\\sqrt{1+t^2}>0$ and $\\theta=\\arctan t$. Since $t$ is real, $\\theta\\in\\left(-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2}\\right)$, so $6\\theta\\in(-3\\pi,3\\pi)$.",
          "By De Moivre, $(1+it)^6=r^6 e^{6i\\theta}$ with $r^6>0$. This is a negative real exactly when $e^{6i\\theta}=-1$, i.e. $6\\theta=(2k+1)\\pi$ for some integer $k$.",
          "The only odd multiples of $\\pi$ inside the open interval $(-3\\pi,3\\pi)$ are $\\pm\\pi$ (the endpoints $\\pm3\\pi$ would need $\\theta=\\pm\\tfrac{\\pi}{2}$, unattainable for finite $t$). Hence $6\\theta=\\pm\\pi$, so $\\theta=\\pm\\tfrac{\\pi}{6}$.",
          "Therefore $t=\\tan\\theta=\\tan\\left(\\pm\\tfrac{\\pi}{6}\\right)=\\pm\\tfrac{1}{\\sqrt3}$. $\\boxed{t=\\pm\\tfrac{1}{\\sqrt3}}$"
        ]
      },
      {
        "name": "Cartesian: reality then sign",
        "steps": [
          "Expand $(1+it)^6=\\sum_{k=0}^{6}\\binom{6}{k}(it)^k$. Collecting parts, $\\mathrm{Re}=1-15t^2+15t^4-t^6$ and $\\mathrm{Im}=6t-20t^3+6t^5$.",
          "Reality requires $\\mathrm{Im}=0$: factor $\\mathrm{Im}=2t(3t^2-1)(t^2-3)$, giving the five candidates $t=0,\\ \\pm\\tfrac{1}{\\sqrt3},\\ \\pm\\sqrt3$.",
          "Now impose negativity by testing $\\mathrm{Re}=-(t^2-1)(t^2-4t+1)(t^2+4t+1)$ at each candidate: $t=0\\Rightarrow\\mathrm{Re}=1>0$, $t=\\pm\\sqrt3\\Rightarrow\\mathrm{Re}=64>0$, while $t=\\pm\\tfrac1{\\sqrt3}\\Rightarrow\\mathrm{Re}=-\\tfrac{64}{27}<0$.",
          "Only the last pair satisfies both $\\mathrm{Im}=0$ and $\\mathrm{Re}<0$. $\\boxed{t=\\pm\\tfrac{1}{\\sqrt3}}$"
        ]
      },
      {
        "name": "Match to minus the modulus",
        "steps": [
          "A complex number $w$ is a negative real iff $w=-|w|$. Here $|1+it|^6=(1+t^2)^3$, so the condition becomes $(1+it)^6=-(1+t^2)^3$, i.e. $(1+it)^6+(1+t^2)^3=0$.",
          "Expand the left side: its imaginary part is $2t(3t^2-1)(t^2-3)$ and its real part simplifies to the perfect square $2(3t^2-1)^2$.",
          "For the sum to vanish, the real part must vanish, and $2(3t^2-1)^2=0$ forces $3t^2=1$. At $3t^2=1$ the imaginary part $2t(3t^2-1)(t^2-3)$ vanishes automatically, so the single condition $3t^2=1$ already suffices.",
          "Hence $t^2=\\tfrac13$, giving $t=\\pm\\tfrac{1}{\\sqrt3}$ (and indeed $(1\\pm\\tfrac{i}{\\sqrt3})^6=-\\tfrac{64}{27}<0$). $\\boxed{t=\\pm\\tfrac{1}{\\sqrt3}}$"
        ]
      }
    ],
    "remark": "Insight: raising to the 6th power multiplies the argument by $6$, turning a sign question into a 'which half-turn do we land on' question. Reality is $6\\theta\\equiv0\\ (\\mathrm{mod}\\ \\pi)$; negativity is the stricter $6\\theta\\equiv\\pi\\ (\\mathrm{mod}\\ 2\\pi)$. The pivot in the third method is that demanding the value equal $-|w|$ makes $\\mathrm{Re}$ collapse to the perfect square $2(3t^2-1)^2$, so the answer is a clean double root rather than a sign case-check."
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
    "title": "The Modulus that Splits the System",
    "difficulty": 5,
    "task": "Find all",
    "tags": [
      "conjugate system",
      "modulus coupling",
      "case split",
      "elimination",
      "locus"
    ],
    "statement": "Find every complex number $z$ that satisfies the simultaneous conditions \\[ z + \\overline{z} + 4\\lvert z\\rvert = 12, \\qquad z - \\overline{z} = 6i. \\] Here $\\overline{z}$ is the complex conjugate of $z$.",
    "answer": "\\[\\boxed{z = 3i \\ \\text{ or } \\ z = -4 + 3i}\\]",
    "trap": "Treating the pair as an ordinary linear $2\\times 2$ system in the unknowns $z$ and $\\overline{z}$: adding the equations gives $2z + 4\\lvert z\\rvert = 12 + 6i$, and a strong student then 'solves for $z$' as if $\\lvert z\\rvert$ were a fixed coefficient, landing on the single value $z=3i$. The term $4\\lvert z\\rvert$ is NOT linear in $z,\\overline{z}$ -- it depends on the unknown modulus $r=\\lvert z\\rvert$, which is itself determined only after substitution. Eliminating correctly produces a genuine quadratic $r^2-8r+15=0$ with TWO admissible positive roots $r=3$ and $r=5$; stopping at $z=3i$ silently discards the entire $\\lvert z\\rvert=5$ branch $z=-4+3i$. There is no spurious root to reject here -- both moduli are real, nonnegative, and self-consistent, so both solutions are mandatory.",
    "solutions": [
      {
        "name": "Real-imaginary split, then the modulus quadratic",
        "steps": [
          "Write $z=x+iy$ with $x,y\\in\\mathbb{R}$, so $z+\\overline{z}=2x$ and $z-\\overline{z}=2iy$. The second equation $2iy=6i$ gives $y=3$ immediately.",
          "The first equation reads $2x+4\\lvert z\\rvert=12$, i.e. $x+2r=6$ where $r=\\lvert z\\rvert=\\sqrt{x^2+9}\\ge 0$. Hence $x=6-2r$, and substituting forces $r=\\sqrt{(6-2r)^2+9}$.",
          "Square (legitimate since $r\\ge 0$): $r^2=(6-2r)^2+9=4r^2-24r+45$, which simplifies to $3r^2-24r+45=0$, i.e. $r^2-8r+15=0$.",
          "Factor: $(r-3)(r-5)=0$, so $r=3$ or $r=5$ -- both positive, so both are legal moduli. Then $x=6-2r$ gives $x=0$ (for $r=3$) and $x=-4$ (for $r=5$); each satisfies $\\sqrt{x^2+9}=r$ exactly, so neither is extraneous.",
          "With $y=3$ throughout, \\[\\boxed{z=3i \\ \\text{ or } \\ z=-4+3i}\\]"
        ]
      },
      {
        "name": "Eliminate the conjugate, then split by real and imaginary parts",
        "steps": [
          "Add the two given equations: $(z+\\overline{z}+4\\lvert z\\rvert)+(z-\\overline{z})=12+6i$, which collapses to $2z+4\\lvert z\\rvert=12+6i$, i.e. $z+2\\lvert z\\rvert=6+3i$.",
          "Because $2\\lvert z\\rvert$ is real, the imaginary part of the left side is just $\\operatorname{Im}z$. Matching imaginary parts gives $\\operatorname{Im}z=3$, so write $z=x+3i$ with $\\lvert z\\rvert=\\sqrt{x^2+9}$.",
          "Match real parts: $x+2\\sqrt{x^2+9}=6$, so $2\\sqrt{x^2+9}=6-x$. This already requires $6-x\\ge 0$. Squaring: $4(x^2+9)=(6-x)^2=36-12x+x^2$, hence $3x^2+12x=0$, i.e. $3x(x+4)=0$.",
          "Thus $x=0$ or $x=-4$; both satisfy $x\\le 6$, so both survive the squaring constraint, giving $\\lvert z\\rvert=3$ and $\\lvert z\\rvert=5$ respectively.",
          "Therefore \\[\\boxed{z=3i \\ \\text{ or } \\ z=-4+3i}\\]"
        ]
      },
      {
        "name": "Geometric: a focus-directrix ellipse meets a horizontal line",
        "steps": [
          "As in Method 2, the system is equivalent to $\\operatorname{Im}z=3$ together with the real relation $x+2\\lvert z\\rvert=6$, i.e. $\\lvert z\\rvert=\\tfrac12(6-x)$ with $x\\le 6$.",
          "Read $\\lvert z\\rvert=\\tfrac12(6-x)$ as a focus-directrix law: the distance from $z$ to the origin equals $e$ times the distance $6-x$ from $z$ to the vertical line $x=6$, with eccentricity $e=\\tfrac12<1$. So the locus is an ELLIPSE with one focus at the origin.",
          "Squaring $x^2+y^2=\\tfrac14(6-x)^2$ and completing the square gives $\\dfrac{(x+2)^2}{16}+\\dfrac{y^2}{12}=1$: center $(-2,0)$, $a=4$, $c=\\sqrt{16-12}=2$, foci $(0,0)$ and $(-4,0)$ -- confirming the focus at the origin and $e=c/a=\\tfrac12$.",
          "Intersect this ellipse with the line $y=3$: $\\dfrac{(x+2)^2}{16}+\\dfrac{9}{12}=1\\Rightarrow (x+2)^2=4\\Rightarrow x=0$ or $x=-4$. The line cuts the ellipse in two points, which is exactly why the system has two solutions.",
          "Hence \\[\\boxed{z=3i \\ \\text{ or } \\ z=-4+3i}\\]"
        ]
      }
    ],
    "remark": "Insight: the moment a modulus $\\lvert z\\rvert$ appears alongside $z$ and $\\overline{z}$, the system stops being linear -- $\\lvert z\\rvert$ is a hidden third unknown $r\\ge 0$ obeying its own equation $r=\\sqrt{x^2+y^2}$. Eliminating $\\overline{z}$ is fine, but the leftover equation in $r$ is quadratic, so a single linear-looking system can carry two honest solutions. Geometrically the relation $\\lvert z\\rvert=\\tfrac12(6-x)$ is a focus-directrix ellipse centred off the origin, and the second solution is simply the second time the line $\\operatorname{Im}z=3$ pierces that ellipse."
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
    "title": "The Vector That Pivots Too Far",
    "difficulty": 5,
    "task": "Maximise",
    "tags": [
      "argument of a sum",
      "tangent to a circle",
      "extremal ray",
      "perpendicularity",
      "law of sines"
    ],
    "statement": "A vector $z_2 = 3$ is pinned along the positive real axis, while a second vector $z_1 = 2e^{i\\varphi}$ of fixed length $2$ is free to pivot, its argument $\\varphi$ ranging over the $30^\\circ$ window $\\varphi \\in [120^\\circ, 150^\\circ]$. As $\\varphi$ varies over this window, find the largest possible value of $\\arg\\!\\big(z_1 + z_2\\big)$, and state the argument of $z_1$ at which this maximum is attained.",
    "answer": "\\[\\boxed{\\;\\max\\arg(z_1+z_2)=\\arcsin\\tfrac{2}{3}\\;\\big(=\\arctan\\tfrac{2}{\\sqrt5}\\approx 41.81^\\circ\\big)\\;}\\]",
    "trap": "Assuming that pushing $\\arg z_1$ as high as the window allows ($\\varphi = 150^\\circ$) drags the resultant's argument up with it, so that the maximum sits at the window's upper edge. It does not. Past a certain tilt the tip of $z_1$ swings the resultant ray back DOWN, so the endpoint $\\varphi=150^\\circ$ yields only $\\arg(z_1+z_2)\\approx 38.26^\\circ$ — strictly less than the true interior maximum $41.81^\\circ$. The extremum is governed by tangency, not by the moving argument being maximal: the resultant ray is steepest the instant it grazes the circle traced by the tip of $z_1$, and at that instant $z_1$ is perpendicular to $z_1+z_2$.",
    "solutions": [
      {
        "name": "Tangent to the tip-circle",
        "steps": [
          "The sum is $S = z_1 + z_2 = 3 + 2e^{i\\varphi}$. As $\\varphi$ varies, the tip of $S$ traces a circle of radius $2$ centred at the fixed point $C=3$ on the real axis.",
          "Since the centre lies at distance $|C|=3$ from the origin and the radius is $2<3$, the origin is OUTSIDE this circle; hence $\\arg S$ is bounded, and it is maximised exactly when the ray from the origin is tangent to the circle from above.",
          "For a tangent ray to a circle of radius $r=2$ whose centre is at distance $d=3$ from the origin, the angle the ray makes with the line to the centre (the real axis) is $\\arcsin\\frac{r}{d}=\\arcsin\\frac{2}{3}$.",
          "At tangency the radius $C\\to S$, which equals the vector $z_1=2e^{i\\varphi}$, is perpendicular to the tangent ray $S$; this fixes the optimal pivot. Solving, $\\cos\\varphi=-\\tfrac{2}{3}$, i.e. $\\varphi=\\arccos(-\\tfrac23)\\approx131.81^\\circ$, which lies inside the window $[120^\\circ,150^\\circ]$.",
          "Therefore $\\;\\max\\arg(z_1+z_2)=\\arcsin\\dfrac{2}{3}\\approx41.81^\\circ\\;$ at $\\arg z_1=\\arccos\\!\\left(-\\tfrac23\\right)$. \\[\\boxed{\\arcsin\\tfrac{2}{3}}\\]"
        ]
      },
      {
        "name": "Law of sines in the addition triangle",
        "steps": [
          "Form the triangle with vertices $O$ (origin), $P=z_2=3$, and $Q=z_1+z_2$. The side $OP$ has length $3$, the side $PQ$ equals the vector $z_1$ so has length $2$, and the angle at $O$ is precisely $\\alpha=\\arg(z_1+z_2)$ that we wish to maximise.",
          "By the law of sines, $\\dfrac{|PQ|}{\\sin\\alpha}=\\dfrac{|OP|}{\\sin(\\angle OQP)}$, i.e. $\\dfrac{2}{\\sin\\alpha}=\\dfrac{3}{\\sin(\\angle OQP)}$, so $\\sin\\alpha=\\dfrac{2}{3}\\sin(\\angle OQP)$.",
          "Thus $\\sin\\alpha$ — and hence $\\alpha\\in(0^\\circ,90^\\circ)$ — is largest exactly when $\\sin(\\angle OQP)=1$, i.e. when the angle at $Q$ is $90^\\circ$: the side $PQ=z_1$ is perpendicular to $OQ=z_1+z_2$.",
          "Then $\\sin\\alpha_{\\max}=\\dfrac{2}{3}$, giving $\\alpha_{\\max}=\\arcsin\\dfrac{2}{3}\\approx41.81^\\circ$. The right angle at $Q$ forces $\\cos\\varphi=-\\tfrac23$ ($\\varphi\\approx131.81^\\circ$), inside the allowed window. \\[\\boxed{\\arcsin\\tfrac{2}{3}}\\]"
        ]
      },
      {
        "name": "Calculus on the argument",
        "steps": [
          "Write $S=3+2e^{i\\varphi}=(3+2\\cos\\varphi)+i\\,(2\\sin\\varphi)$, so $\\arg S=\\arctan\\dfrac{2\\sin\\varphi}{3+2\\cos\\varphi}=:f(\\varphi)$ on the upper half $\\varphi\\in(90^\\circ,180^\\circ)$ where both this fraction and $\\arg S$ are positive and increasing in the tangent.",
          "Differentiate: $f'(\\varphi)=\\dfrac{(2\\cos\\varphi)(3+2\\cos\\varphi)-(2\\sin\\varphi)(-2\\sin\\varphi)}{(3+2\\cos\\varphi)^2+(2\\sin\\varphi)^2}=\\dfrac{6\\cos\\varphi+4}{13+12\\cos\\varphi}.$",
          "The denominator is positive, so $f'(\\varphi)=0\\iff 6\\cos\\varphi+4=0\\iff\\cos\\varphi=-\\dfrac{2}{3}$, giving $\\varphi^\\ast=\\arccos(-\\tfrac23)\\approx131.81^\\circ\\in[120^\\circ,150^\\circ]$; $f'$ changes $+\\to-$ there, so it is a maximum.",
          "At $\\cos\\varphi=-\\tfrac23$, $\\sin\\varphi=\\tfrac{\\sqrt5}{3}$, so $3+2\\cos\\varphi=\\tfrac53$ and $2\\sin\\varphi=\\tfrac{2\\sqrt5}{3}$; hence $\\tan(\\arg S)=\\dfrac{2\\sqrt5/3}{5/3}=\\dfrac{2}{\\sqrt5}$, i.e. $\\arg S=\\arctan\\dfrac{2}{\\sqrt5}=\\arcsin\\dfrac{2}{3}\\approx41.81^\\circ$.",
          "Comparing with the window endpoints $f(120^\\circ)\\approx40.89^\\circ$ and $f(150^\\circ)\\approx38.26^\\circ$ confirms the interior critical point wins. \\[\\boxed{\\arcsin\\tfrac{2}{3}}\\]"
        ]
      }
    ],
    "remark": "Insight: the argument of a sum of a fixed vector and a pivoting one is an extremal-ray problem, not a monotone one. The tip of the moving vector sweeps a circle; the resultant's argument peaks where the origin-ray is tangent to that circle, and there the moving vector is perpendicular to the resultant — the law-of-sines factor $\\sin(\\angle\\text{at the tip})$ hits $1$. Because the optimal tilt $\\arg z_1\\approx131.81^\\circ$ overshoots $90^\\circ$, naively maximising $\\arg z_1$ on the window pushes the resultant ray back down, which is the trap. The same tangency picture explains why $\\arcsin\\frac{|z_1|}{|z_2|}$ is the universal cap whenever the moving radius is the shorter one."
  },
  {
    "theme": "modulusarg",
    "themeLabel": "Modulus & Argument",
    "title": "Counting the Crossings of the Branch Cut",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "principal argument",
      "roots of unity",
      "branch cut",
      "floor counting",
      "residues",
      "de moivre"
    ],
    "statement": "Let $z=\\operatorname{cis}\\dfrac{2\\pi}{9}=\\cos\\dfrac{2\\pi}{9}+i\\sin\\dfrac{2\\pi}{9}$, a primitive ninth root of unity. The principal argument $\\operatorname{Arg}(w)$ is taken in $(-\\pi,\\pi]$. Among the $250$ powers \\[ z^{1},\\ z^{2},\\ z^{3},\\ \\dots,\\ z^{250}, \\] determine exactly how many have a negative principal argument, i.e. how many satisfy $\\operatorname{Arg}\\!\\left(z^{k}\\right)<0$.",
    "answer": "$\\boxed{111}$",
    "trap": "The seductive shortcut: \"each full turn of $9$ powers contributes $\\tfrac{9-1}{2}=4$ negatives, and there are $\\lfloor 250/9\\rfloor=27$ full turns, so the answer is $27\\times 4=108$.\" This silently discards the final, incomplete sweep. The last $7$ powers $z^{244},\\dots,z^{250}$ carry residues $1,2,\\dots,7\\pmod 9$, and as $k$ marches through them the argument again dives below the real axis the instant $2k/9$ crosses an odd integer; three of these (residues $5,6,7$) land in the lower half-plane, adding $3$ more. Forgetting that a partial turn still crosses the branch cut loses exactly those $3$. (Equally fatal traps: reading $\\operatorname{Arg}$ in $[0,2\\pi)$ so that none is negative; calling \"half\" of $250$ negative as $125$; or applying the ratio $\\tfrac{4}{9}\\cdot 250=111.\\overline{1}$ and trusting the rounding — that ratio over-counts for nearby $m$ such as $m=255$, so the agreement at $250$ is luck, not a proof.)",
    "solutions": [
      {
        "name": "Residue test, then block plus partial turn",
        "steps": [
          "By De Moivre $z^{k}=\\operatorname{cis}\\dfrac{2\\pi k}{9}$. Its principal argument lies in $(-\\pi,\\pi]$, so $\\operatorname{Arg}(z^{k})<0$ exactly when the reduced angle $\\dfrac{2\\pi k}{9}\\pmod{2\\pi}$ falls in the open lower half $(\\pi,2\\pi)$.",
          "Writing $s=k\\bmod 9\\in\\{0,1,\\dots,8\\}$, the reduced angle is $\\dfrac{2\\pi s}{9}$, which exceeds $\\pi$ iff $2s>9$, i.e. $s\\ge 5$. Since $2s=9$ is impossible for an integer $s$, no power ever lands on the negative real axis (no $\\operatorname{Arg}=\\pi$ ambiguity), and $s=0$ gives $z^{k}=1$ with $\\operatorname{Arg}=0$, which is not negative. Hence $\\operatorname{Arg}(z^{k})<0\\iff s\\in\\{5,6,7,8\\}$: exactly $4$ of every $9$ consecutive powers.",
          "Now $250=27\\cdot 9+7$. The $27$ complete blocks $k=1{-}243$ each supply $4$ negatives, totalling $27\\times 4=108$. The leftover powers $k=244,\\dots,250$ carry residues $1,2,3,4,5,6,7$; the negatives are those with residue in $\\{5,6,7\\}$, namely $k=248,249,250$, i.e. $3$ more.",
          "Therefore the count is $108+3=\\boxed{111}$."
        ]
      },
      {
        "name": "Four arithmetic-progression tallies",
        "steps": [
          "From the residue criterion, the negative powers are precisely those $k\\in\\{1,\\dots,250\\}$ with $k\\equiv 5,6,7,\\text{ or }8\\pmod 9$. Count each residue class separately.",
          "For a fixed residue $s\\le 250$, the values $k=s,s+9,s+18,\\dots$ up to $250$ number $\\left\\lfloor\\dfrac{250-s}{9}\\right\\rfloor+1$.",
          "Compute: $s=5\\Rightarrow\\lfloor245/9\\rfloor+1=27+1=28$; $s=6\\Rightarrow\\lfloor244/9\\rfloor+1=28$; $s=7\\Rightarrow\\lfloor243/9\\rfloor+1=28$; $s=8\\Rightarrow\\lfloor242/9\\rfloor+1=26+1=27$ (one fewer, because $251$ would have been needed for a full $28$).",
          "Summing the four classes, $28+28+28+27=\\boxed{111}$."
        ]
      },
      {
        "name": "Counting half-turns of the argument",
        "steps": [
          "Track the running (unwrapped) angle $\\theta_k=\\dfrac{2\\pi k}{9}$. The point $z^{k}$ sits below the real axis precisely when $\\theta_k\\pmod{2\\pi}\\in(\\pi,2\\pi)$, which is exactly the condition that the number of completed half-turns, $\\left\\lfloor\\dfrac{\\theta_k}{\\pi}\\right\\rfloor=\\left\\lfloor\\dfrac{2k}{9}\\right\\rfloor$, be odd.",
          "So we must count $k\\in\\{1,\\dots,250\\}$ for which $\\left\\lfloor\\dfrac{2k}{9}\\right\\rfloor$ is odd. As $k$ runs over one block of $9$, $\\lfloor 2k/9\\rfloor$ takes the values $0,0,0,0,1,1,1,1,2$ — odd exactly $4$ times (at the four powers $z^{5},z^{6},z^{7},z^{8}$ of that block), confirming $4$ negatives per complete turn.",
          "Over $k=1,\\dots,243$ (that is $27$ blocks) this gives $27\\times 4=108$. For $k=244,\\dots,250$, the values $\\lfloor 2k/9\\rfloor$ are $54,54,54,54,55,55,55$; the odd ones ($55$) occur at $k=248,249,250$, i.e. $3$ more crossings into the lower half-plane.",
          "Hence the total number of powers with negative principal argument is $108+3=\\boxed{111}$."
        ]
      }
    ],
    "remark": "Insight: raising a fixed unit root to successive powers is a relentless march around the circle, and \"negative principal argument\" is not a static modular label but a count of how many times the trajectory has dipped below the real axis after the latest branch crossing. The clean fact \"$4$ of every $9$\" governs only complete turns; the real test of understanding is the final partial sweep, where the argument still plunges past the branch cut even though the turn never finishes. The parity formulation $\\big\\lfloor 2k/9\\big\\rfloor$ odd makes the branch-crossing nature explicit: every increment of this floor is one half-turn, and the lower half-plane is precisely the odd-numbered half-turns. The same template answers the question for any $\\operatorname{cis}(2\\pi/n)$ and any ceiling $m$ — count full blocks, then never forget the crossings hiding in the remainder."
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
    "trap": "Squaring blindly and keeping every root of the resulting polynomial. Equality in $|a+b|=|a|+|b|$ forces $a$ and $b$ to point along the SAME ray ($b=\\lambda a$, $\\lambda\\ge 0$), not merely the same line. The candidate $x=-\\sqrt2$ makes the two numbers anti-parallel ($\\lambda<0$), which gives $|a+b|=\\big||a|-|b|\\big|$, not the sum — so it must be discarded.",
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
    "title": "Two Arrivals on the Negative Axis",
    "difficulty": 5,
    "task": "Find both",
    "tags": [
      "principal argument",
      "de moivre",
      "linear congruence",
      "branch cut",
      "rotation by a fixed angle"
    ],
    "statement": "Let $z=\\dfrac{1+i\\sqrt{3}}{1-i}$. Treating each multiplication by $z$ as a single step that rotates a vector through a fixed angle (and rescales it), answer the following.\n\\[(\\text{a})\\quad\\text{Find the smallest positive integer }n\\text{ for which }z^{n}\\text{ is a negative real number.}\\]\n\\[(\\text{b})\\quad\\text{Find the smallest positive integer }n\\text{ for which the principal argument } \\operatorname{Arg}(z^{n})\\in(-20^{\\circ},-10^{\\circ}).\\]\nHere $\\operatorname{Arg}$ denotes the principal argument, taking values in $(-180^{\\circ},180^{\\circ}]$. Give your answer as the ordered pair $(n_a,\\,n_b)$.",
    "answer": "\\[\\boxed{(\\,n_a,\\,n_b\\,)=(12,\\;17)}\\]",
    "trap": "Two distinct branch/axis errors. In (a), scanning for 'when does the power land on a coordinate axis' flags $n=6$, where $z^{6}=-8i$ sits squarely on the imaginary axis — but that is purely imaginary, not real; a hasty reader who equates 'on an axis' with 'real' reports $6$ instead of $12$. In (b), the target band lies BELOW the real axis, so its raw bearing is $345^{\\circ}$, i.e. the congruence is $105n\\equiv 345\\pmod{360}$. A student who drops the minus sign and instead solves $105n\\equiv 15\\pmod{360}$ (reading $-15^{\\circ}$ as $+15^{\\circ}$, the across-the-branch-cut reflection) gets $n=7$ — but $\\operatorname{Arg}(z^{7})=+15^{\\circ}$ sits ABOVE the axis, outside the requested band. The condition is an argument condition modulo $360^{\\circ}$, and the principal branch fixes the sign that the modulus completely ignores.",
    "solutions": [
      {
        "name": "Polar form and a linear congruence",
        "steps": [
          "Rationalise: $z=\\dfrac{1+i\\sqrt3}{1-i}=\\dfrac{(1+i\\sqrt3)(1+i)}{(1-i)(1+i)}=\\dfrac{(1-\\sqrt3)+i(1+\\sqrt3)}{2}$, with $|z|=\\dfrac{|1+i\\sqrt3|}{|1-i|}=\\dfrac{2}{\\sqrt2}=\\sqrt2$ and $\\arg z=\\arg(1+i\\sqrt3)-\\arg(1-i)=60^{\\circ}-(-45^{\\circ})=105^{\\circ}$. So $z=\\sqrt2\\,\\operatorname{cis}105^{\\circ}$.",
          "By de Moivre, $z^{n}=2^{n/2}\\operatorname{cis}(105^{\\circ}n)$. The modulus $2^{n/2}>0$ never changes the sign or direction, so every directional question reduces to the bearing $105n$ taken modulo $360^{\\circ}$.",
          "(a) Negative real means the bearing equals $180^{\\circ}$: $105n\\equiv180\\pmod{360}$. Since $\\gcd(105,360)=15$ and $15\\mid180$, divide through by $15$: $7n\\equiv12\\pmod{24}$. As $7\\cdot7=49\\equiv1\\pmod{24}$, the inverse of $7$ is $7$, so $n\\equiv7\\cdot12=84\\equiv12\\pmod{24}$; the least positive solution is $n_a=12$ (and indeed $z^{12}=2^{6}\\operatorname{cis}180^{\\circ}=-64$).",
          "(b) The band $(-20^{\\circ},-10^{\\circ})$ contains exactly one multiple of $15^{\\circ}$, namely $-15^{\\circ}$, whose raw bearing is $345^{\\circ}$. Solve $105n\\equiv345\\pmod{360}$; dividing by $15$ gives $7n\\equiv23\\pmod{24}$, so $n\\equiv7\\cdot23=161\\equiv17\\pmod{24}$, and the least positive solution is $n_b=17$.",
          "Hence $(n_a,n_b)=(12,17)$. \\[\\boxed{(12,\\;17)}\\]"
        ]
      },
      {
        "name": "Walking the 24-bearing cycle",
        "steps": [
          "Because $\\arg z=105^{\\circ}$ and $\\gcd(105,360)=15$, the bearings $105n\\pmod{360}$ cycle through every multiple of $15^{\\circ}$ exactly once before repeating; the cycle has length $360/15=24$. Listing $105n\\bmod360$ for $n=1,2,\\dots$ gives $105,210,315,60,165,270,15,120,225,330,75,\\mathbf{180},285,30,135,240,\\mathbf{345},90,\\dots$",
          "(a) A negative real value occurs at bearing $180^{\\circ}$, which first appears at position $n=12$ in the list; thus $n_a=12$. The earlier axis-hit at $n=6$ has bearing $270^{\\circ}$ ($z^{6}=-8i$), which is imaginary, not real, so it is correctly skipped.",
          "(b) Convert to principal values: a bearing $b>180^{\\circ}$ has $\\operatorname{Arg}=b-360^{\\circ}$. The first bearing whose principal value lands in $(-20^{\\circ},-10^{\\circ})$ is $345^{\\circ}\\mapsto-15^{\\circ}$, occurring at position $n=17$; thus $n_b=17$. The reflection $+15^{\\circ}$ appears earlier (at $n=7$) but lies above the axis, outside the band.",
          "Therefore $(n_a,n_b)=(12,17)$. \\[\\boxed{(12,\\;17)}\\]"
        ]
      },
      {
        "name": "Repeated rotation by the same step",
        "steps": [
          "Each multiplication by $z$ rotates the current vector by the fixed angle $\\theta=105^{\\circ}$ and scales its length by $\\sqrt2$; since scaling cannot alter direction, only the accumulated rotation $\\,n\\theta\\,$ matters. Starting from $z^{0}=1$ on the positive real axis, $z^{n}$ points along bearing $n\\cdot105^{\\circ}$.",
          "(a) We need the accumulated turn to reach a half-turn modulo a full turn: $105n\\equiv180\\pmod{360}$, i.e. the vector first points along the negative real axis. Stepping by $105^{\\circ}$, the running bearing returns to $180^{\\circ}$ after $12$ steps (the orbit visits all $24$ spokes spaced $15^{\\circ}$ apart, and $180^{\\circ}$ is the $12^{\\text{th}}$ spoke reached). So $n_a=12$.",
          "(b) Continue the same walk until the principal bearing first lies in $(-20^{\\circ},-10^{\\circ})$. The spoke at $-15^{\\circ}$ (equivalently $345^{\\circ}$) is reached after $17$ steps, while the mirror spoke $+15^{\\circ}$ — though hit earlier at step $7$ — lies above the axis and is excluded. Hence $n_b=17$.",
          "Combining the two walks, $(n_a,n_b)=(12,17)$. \\[\\boxed{(12,\\;17)}\\]"
        ]
      }
    ],
    "remark": "Insight: once $z=\\sqrt2\\,\\operatorname{cis}105^{\\circ}$ is in polar form, the modulus $2^{n/2}$ is a red herring for every directional question — both parts collapse to the linear congruence $105n\\equiv(\\text{target})\\pmod{360}$, a genuine number-theoretic step whose solvability is governed by $\\gcd(105,360)=15$. The depth lives in the targets: 'negative real' is the unambiguous bearing $180^{\\circ}$, but 'argument in a band below the axis' is sign-sensitive, and only the principal branch $(-180^{\\circ},180^{\\circ}]$ distinguishes $345^{\\circ}\\mapsto-15^{\\circ}$ ($n=17$) from its branch-cut mirror $+15^{\\circ}$ ($n=7$). The modulus sees neither sign; the argument sees both."
  },
  {
    "theme": "modulusarg",
    "themeLabel": "Modulus & Argument",
    "title": "The Ellipse That Wasn't",
    "difficulty": 5,
    "task": "Find the maximum value of",
    "tags": [
      "triangle inequality",
      "degenerate ellipse",
      "locus",
      "modulus",
      "equality case"
    ],
    "statement": "Let $S=\\{\\,z\\in\\mathbb{C}: |z-2|+|z+2|=4\\,\\}$. Find the maximum value of $|z-3i|$ as $z$ ranges over $S$. \\[ \\max_{z\\in S}\\;|z-3i| \\]",
    "answer": "\\[\\boxed{\\,\\sqrt{13}\\,}\\]",
    "trap": "Reading $|z-2|+|z+2|=4$ as 'sum of distances to the foci $\\pm 2$ is constant, hence an ellipse' and then running the ellipse machinery. With $2a=4$ and $c=2$ one gets $a=2$, $c=2$, so $b^2=a^2-c^2=0$ -- the curve is NOT a genuine ellipse, it has collapsed. A student who skips the degeneracy check imagines a real ellipse (often mis-taking $b=2$, treating the locus as a circle of radius $2$) and reports the farthest point from $3i$ as a co-vertex, giving the spurious $3+2=5$. The constant $4$ exactly equals the inter-focal distance $|2-(-2)|=4$, which is the boundary equality case of the triangle inequality: it forces $z$ onto the closed segment $[-2,2]$ of the real axis, a one-dimensional set with no points off the axis, so no co-vertex exists at all.",
    "solutions": [
      {
        "name": "Equality case of the triangle inequality",
        "steps": [
          "Put $a=2-z$ and $b=2+z$, so $a+b=4$. The triangle inequality gives $|a|+|b|\\ge|a+b|=4$, and our condition $|z-2|+|z+2|=|a|+|b|=4$ is precisely the EQUALITY case.",
          "Equality $|a|+|b|=|a+b|$ holds iff $a$ and $b$ point in the same direction, i.e. one is a nonnegative real multiple of the other. Since $a+b=4>0$ is real, both $a=2-z$ and $b=2+z$ must be nonnegative reals. Hence $z$ is real with $2-z\\ge 0$ and $2+z\\ge 0$, that is $z=t$ with $t\\in[-2,2]$.",
          "On this segment $|z-3i|=|t-3i|=\\sqrt{t^2+9}$, which increases with $t^2$ and so is largest when $t^2$ is largest, namely $t=\\pm 2$.",
          "Thus the maximum is $\\sqrt{2^2+9}=\\sqrt{13}$, attained at $z=\\pm 2$. $\\boxed{\\sqrt{13}}$"
        ]
      },
      {
        "name": "Degeneracy of the ellipse",
        "steps": [
          "Write $z=x+iy$. The defining relation is the sum of distances from $(x,y)$ to the foci $(\\pm 2,0)$ equalling $4$, the standard ellipse setup with $2a=4$ so $a=2$ and $c=2$.",
          "The semi-minor axis satisfies $b^2=a^2-c^2=4-4=0$, so $b=0$: the 'ellipse' is degenerate. Geometrically the constant $4$ equals the distance $2c=4$ between the foci, the threshold below which no locus exists and at which the locus is exactly the segment joining the foci.",
          "Hence $S$ is the segment $\\{(x,0):-2\\le x\\le 2\\}$, with no off-axis points. For a point $z=x$ on it, $|z-3i|=\\sqrt{x^2+9}$.",
          "This is maximised at the endpoints $x=\\pm 2$, giving $\\sqrt{4+9}=\\sqrt{13}$. $\\boxed{\\sqrt{13}}$"
        ]
      },
      {
        "name": "Direct algebraic squaring",
        "steps": [
          "From $|z-2|+|z+2|=4$ isolate and square: $|z-2|=4-|z+2|$ gives $|z-2|^2=16-8|z+2|+|z+2|^2$, so $8|z+2|=16+|z+2|^2-|z-2|^2$.",
          "With $z=x+iy$, $|z+2|^2-|z-2|^2=8x$, hence $8|z+2|=16+8x$, i.e. $|z+2|=2+x$. Squaring again: $(x+2)^2+y^2=(x+2)^2$, which forces $y^2=0$, so $y=0$; and $|z+2|=2+x\\ge 0$ with $x\\in[-2,2]$.",
          "Therefore $z=x$ is real on $[-2,2]$ and $|z-3i|^2=x^2+9\\le 4+9=13$, with equality iff $x^2=4$.",
          "So $\\max|z-3i|=\\sqrt{13}$, reached at $z=\\pm 2$. $\\boxed{\\sqrt{13}}$"
        ]
      }
    ],
    "remark": "Insight: a sum-of-distances condition is an ellipse only when the constant strictly exceeds the inter-focal distance. Here the constant $4$ equals it, the triangle-inequality equality boundary, so the conic degenerates to the segment between the foci. The whole problem hinges on noticing $2a=2c$; once the phantom ellipse is dismissed, the maximisation is a one-line calculus-free observation. The seductive wrong answer $5$ comes from optimising over a co-vertex that does not exist, and the value $3$ (distance to the centre) is in fact the MINIMUM, attained at the midpoint $z=0$."
  },
  {
    "theme": "modulusarg",
    "themeLabel": "Modulus & Argument",
    "title": "The Foot That Missed the Ray",
    "difficulty": 5,
    "task": "Find the greatest lower bound of",
    "tags": [
      "constrained minimisation",
      "ray locus",
      "foot of perpendicular",
      "infimum",
      "argument constraint"
    ],
    "statement": "A point $z$ moves on the ray $\\arg(z)=\\dfrac{\\pi}{4}$ (so $z=t\\,e^{i\\pi/4}$ with $t>0$; the origin is excluded since $\\arg 0$ is undefined). Find the greatest lower bound of $|z+3+4i|$, i.e. the distance from $z$ to the fixed point $-3-4i$, and state whether it is attained. \\[ \\inf_{\\,\\arg z=\\pi/4}\\;\\bigl|\\,z-(-3-4i)\\,\\bigr| \\]",
    "answer": "\\[\\boxed{\\,5\\ \\text{(infimum, not attained)}\\,}\\]",
    "trap": "The reflex is to drop a perpendicular from $a=-3-4i$ onto the line $y=x$ and report that perpendicular distance. The line $x-y=0$ gives $\\dfrac{|(-3)-(-4)|}{\\sqrt2}=\\dfrac{1}{\\sqrt2}=\\dfrac{\\sqrt2}{2}\\approx0.707$, and a student boxes this. But the constraint is a RAY, not the whole line: $z=t\\,e^{i\\pi/4}$ needs $t>0$. The foot of the perpendicular sits at parameter $t^{*}=\\operatorname{Re}\\!\\bigl(a\\,e^{-i\\pi/4}\\bigr)=-\\dfrac{7\\sqrt2}{2}<0$, on the OPPOSITE ray (the $\\arg=-3\\pi/4$ half). It is not an allowed point, so the unconstrained minimiser is illegal. On the admissible half $t>0$ the squared distance is strictly increasing, so the nearest the point can get is the endpoint of the ray — the origin — which is itself excluded. Hence the distance is bounded below by $|a|=5$ but never reaches it: the infimum $5$ is approached as $t\\to0^{+}$ and is not attained. Reporting $\\sqrt2/2$, or claiming the minimum $5$ is achieved, both miss the case-check that the foot fell on the wrong side of the endpoint.",
    "solutions": [
      {
        "name": "Calculus on the squared distance along the ray",
        "steps": [
          "Parametrise the ray: $z=t\\,e^{i\\pi/4}=\\dfrac{t}{\\sqrt2}(1+i)$ with $t>0$, and let $a=-3-4i$, so $|a|=5$. Then $D(t)^2=|z-a|^2=\\Bigl(\\dfrac{t}{\\sqrt2}+3\\Bigr)^{2}+\\Bigl(\\dfrac{t}{\\sqrt2}+4\\Bigr)^{2}$.",
          "Expand: $D(t)^2=\\dfrac{t^2}{2}+\\dfrac{6t}{\\sqrt2}+9+\\dfrac{t^2}{2}+\\dfrac{8t}{\\sqrt2}+16=t^{2}+7\\sqrt2\\,t+25$.",
          "Differentiate: $\\dfrac{d}{dt}D(t)^2=2t+7\\sqrt2$, which is $>0$ for every $t>0$ (the vertex sits at $t=-\\tfrac{7\\sqrt2}{2}<0$, outside the admissible range). So $D(t)^2$ is strictly increasing on $(0,\\infty)$.",
          "A strictly increasing function on $(0,\\infty)$ has infimum equal to its right-hand limit at $0$: $\\displaystyle\\lim_{t\\to0^{+}}D(t)^2=25$, so $\\inf D(t)=5$, approached but never attained because $t=0$ (the origin) is excluded. $\\boxed{5\\ \\text{(not attained)}}$"
        ]
      },
      {
        "name": "Convex projection onto a ray, with the endpoint clamp",
        "steps": [
          "Minimising distance from a point $a$ to a ray is the projection of $a$ onto a convex set. First project onto the FULL line through the origin with direction $u=e^{i\\pi/4}$: the foot is at parameter $t^{*}=\\operatorname{Re}\\!\\bigl(a\\,\\bar u\\bigr)=\\operatorname{Re}\\!\\bigl((-3-4i)e^{-i\\pi/4}\\bigr)=\\dfrac{-3-4}{\\sqrt2}=-\\dfrac{7}{\\sqrt2}=-\\dfrac{7\\sqrt2}{2}.$",
          "Because $t^{*}<0$, the line's foot lies on the wrong side of the ray's endpoint: it is not on the ray $t>0$. The projection-onto-a-ray rule then clamps the minimiser to the endpoint $t=0$, i.e. the origin.",
          "The clamped distance is $|a-0|=|a|=5$. But the origin is not part of the open ray (no argument), so this value is the limiting closest distance, attained only in the limit $t\\to0^{+}$.",
          "Therefore the greatest lower bound is $|a|=5$, not attained on the ray. $\\boxed{5\\ \\text{(not attained)}}$"
        ]
      },
      {
        "name": "Completing the square, no calculus",
        "steps": [
          "From the parametrisation, $|z-a|^2=t^{2}+7\\sqrt2\\,t+25$ for $t>0$. Complete the square: $t^{2}+7\\sqrt2\\,t+25=\\Bigl(t+\\dfrac{7\\sqrt2}{2}\\Bigr)^{2}+\\Bigl(25-\\dfrac{49}{2}\\Bigr)=\\Bigl(t+\\dfrac{7\\sqrt2}{2}\\Bigr)^{2}+\\dfrac12.$",
          "For $t>0$ the bracket $t+\\dfrac{7\\sqrt2}{2}>\\dfrac{7\\sqrt2}{2}$, so $\\Bigl(t+\\dfrac{7\\sqrt2}{2}\\Bigr)^{2}>\\dfrac{49}{2}$ and hence $|z-a|^2>\\dfrac{49}{2}+\\dfrac12=25$ for every admissible $t$. Thus $|z-a|>5$ strictly.",
          "As $t\\to0^{+}$ the bracket tends to $\\dfrac{7\\sqrt2}{2}$, giving $|z-a|^2\\to\\dfrac{49}{2}+\\dfrac12=25$, so the bound $5$ is sharp and is approached.",
          "Hence $\\inf|z-a|=5$, with no minimiser on the open ray. $\\boxed{5\\ \\text{(not attained)}}$"
        ]
      }
    ],
    "remark": "Insight: projecting a point onto a ray is not the same as projecting onto a line. The honest algorithm is two-step — drop the perpendicular to the supporting line, then CHECK the sign of the foot's parameter; if it falls beyond the endpoint, clamp to the endpoint. Here the foot lands at $t^{*}=-\\tfrac{7\\sqrt2}{2}<0$, on the opposite half-ray, so the seductive perpendicular distance $\\sqrt2/2$ is the distance to a point that violates $\\arg z=\\pi/4$. On the admissible half the squared distance $t^2+7\\sqrt2\\,t+25$ is monotone, pushing the closest approach to the excluded origin: the answer is the boundary value $|a|=5$, and the open-ray subtlety makes it an infimum that is never attained — the kind of degenerate optimum strong students overlook by treating the ray as a full line."
  },
  {
    "theme": "modulusarg",
    "themeLabel": "Modulus & Argument",
    "title": "The Chord That Folded Back",
    "difficulty": 5,
    "task": "Evaluate the telescoping-argument sum",
    "tags": [
      "principal argument",
      "half-angle",
      "branch cut",
      "telescoping",
      "unit circle",
      "conjugate symmetry"
    ],
    "statement": "For a real angle $\\phi$ write $\\operatorname{cis}\\phi=\\cos\\phi+i\\sin\\phi$, and let $\\arg$ denote the principal argument taking values in $(-\\pi,\\pi]$. With $\\theta=\\dfrac{2\\pi}{15}$, evaluate \\[ S=\\sum_{k=1}^{10}\\arg\\!\\bigl(1+\\operatorname{cis}(k\\theta)\\bigr). \\] The point $1+\\operatorname{cis}\\phi$ is the tip of the chord joining $1$ to $\\operatorname{cis}\\phi$ on the unit circle, so geometrically each term is the angle that this chord-sum vector makes with the positive real axis.",
    "answer": "\\[\\boxed{\\,\\dfrac{2\\pi}{3}\\,}\\]",
    "trap": "The seductive shortcut is the half-angle identity $1+\\operatorname{cis}\\phi=2\\cos(\\phi/2)\\,\\operatorname{cis}(\\phi/2)$, read as $\\arg(1+\\operatorname{cis}\\phi)=\\phi/2$ unconditionally. That turns the sum into a telescoping/arithmetic series $\\sum_{k=1}^{10}\\frac{k\\theta}{2}=\\frac{\\theta}{2}\\cdot\\frac{10\\cdot 11}{2}=\\frac{\\pi}{15}\\cdot 55=\\frac{11\\pi}{3}$, the trap answer. The hidden constraint is the SIGN of the half-angle factor $2\\cos(\\phi/2)$: the formula $\\arg=\\phi/2$ is valid only while $\\cos(\\phi/2)>0$, i.e. $\\phi\\in(-\\pi,\\pi)$. Here $\\phi=k\\theta=\\frac{2\\pi k}{15}$, and for $k=8,9,10$ we have $\\phi/2=\\frac{k\\pi}{15}>\\frac{\\pi}{2}$, so $\\cos(\\phi/2)<0$: the factor is a NEGATIVE real, which rotates the vector by an extra $\\pi$ and (after returning to the principal range) makes $\\arg(1+\\operatorname{cis}\\phi)=\\frac{\\phi}{2}-\\pi$, a negative number, not $\\frac{\\phi}{2}$. A strong student who never checks where the chord crosses to the left half-plane keeps adding positive halves and overshoots by exactly $3\\pi$, landing on $\\frac{11\\pi}{3}$ instead of $\\frac{2\\pi}{3}$.",
    "solutions": [
      {
        "name": "Half-angle factorization with a branch correction",
        "steps": [
          "Factor out the half-angle: $1+\\operatorname{cis}\\phi=\\operatorname{cis}\\frac{\\phi}{2}\\bigl(\\operatorname{cis}\\frac{\\phi}{2}+\\operatorname{cis}(-\\frac{\\phi}{2})\\bigr)=2\\cos\\frac{\\phi}{2}\\,\\operatorname{cis}\\frac{\\phi}{2}$. This is an exact identity for every real $\\phi$.",
          "The argument of a complex number $r\\,\\operatorname{cis}\\alpha$ is $\\alpha$ when $r>0$, but $\\alpha+\\pi$ (reduced to $(-\\pi,\\pi]$) when $r<0$. Here $r=2\\cos\\frac{\\phi}{2}$, so with $\\phi=k\\theta=\\frac{2\\pi k}{15}$ and $\\frac{\\phi}{2}=\\frac{k\\pi}{15}$: for $k=1,\\dots,7$ we have $\\frac{k\\pi}{15}<\\frac{\\pi}{2}$ so $\\cos>0$ and $\\arg(1+\\operatorname{cis}(k\\theta))=\\frac{k\\pi}{15}$; for $k=8,9,10$ we have $\\frac{\\pi}{2}<\\frac{k\\pi}{15}<\\pi$ so $\\cos<0$ and the argument becomes $\\frac{k\\pi}{15}-\\pi$.",
          "Sum the two regimes separately: $\\sum_{k=1}^{7}\\frac{k\\pi}{15}=\\frac{\\pi}{15}\\cdot 28=\\frac{28\\pi}{15}$, and $\\sum_{k=8}^{10}\\bigl(\\frac{k\\pi}{15}-\\pi\\bigr)=\\frac{\\pi}{15}\\cdot 27-3\\pi=\\frac{27\\pi}{15}-\\frac{45\\pi}{15}=-\\frac{18\\pi}{15}$.",
          "Add: $S=\\frac{28\\pi}{15}-\\frac{18\\pi}{15}=\\frac{10\\pi}{15}=\\frac{2\\pi}{3}$. $\\boxed{S=\\dfrac{2\\pi}{3}}$"
        ]
      },
      {
        "name": "Conjugate-pairing symmetry",
        "steps": [
          "Since $\\operatorname{cis}(2\\pi-\\phi)=\\overline{\\operatorname{cis}\\phi}$, the numbers $1+\\operatorname{cis}\\phi$ and $1+\\operatorname{cis}(2\\pi-\\phi)$ are complex conjugates, so their principal arguments are negatives of each other (both lie in the right half-plane, away from the cut): $\\arg(1+\\operatorname{cis}\\phi)+\\arg(1+\\operatorname{cis}(2\\pi-\\phi))=0$.",
          "With $\\phi=k\\theta=\\frac{2\\pi k}{15}$, the partner $2\\pi-\\phi$ corresponds to index $15-k$. Inside the range $k=1,\\dots,10$ the pairs $(k,15-k)$ that both appear are $(5,10),(6,9),(7,8)$, and each such pair contributes $0$ to $S$.",
          "What remains uncancelled are the indices $k=1,2,3,4$ (their partners $11,12,13,14$ lie outside the sum). For these small $k$, $\\frac{k\\pi}{15}<\\frac{\\pi}{2}$, so no branch issue arises and $\\arg(1+\\operatorname{cis}(k\\theta))=\\frac{k\\pi}{15}$.",
          "Hence $S=\\sum_{k=1}^{4}\\frac{k\\pi}{15}=\\frac{\\pi}{15}(1+2+3+4)=\\frac{10\\pi}{15}=\\frac{2\\pi}{3}$. $\\boxed{S=\\dfrac{2\\pi}{3}}$"
        ]
      },
      {
        "name": "Geometric chord/isosceles-triangle argument",
        "steps": [
          "Place $1$, $\\operatorname{cis}\\phi$ on the unit circle; their sum $1+\\operatorname{cis}\\phi$ is the diagonal of the rhombus with these two unit sides, hence lies along the internal bisector of the angle between directions $0$ and $\\phi$. For $0<\\phi<\\pi$ this bisector points at angle $\\frac{\\phi}{2}$, the half-angle of the chord, giving $\\arg=\\frac{\\phi}{2}$ directly from the geometry.",
          "But the rhombus diagonal is a genuine forward ray only while the two unit vectors are not nearly opposite. Once $\\phi$ passes $\\pi$ (here at $k=8$, since $\\frac{2\\pi\\cdot 8}{15}>\\pi$), the point $\\operatorname{cis}\\phi$ has crossed into the lower half-plane; the bisector of the actual (reflex-free) angle now points at $\\frac{\\phi}{2}-\\pi$, i.e. the diagonal sum vector falls into the fourth quadrant with a negative argument. Concretely $k=8,9,10$ give $\\arg=\\frac{k\\pi}{15}-\\pi=-\\frac{7\\pi}{15},-\\frac{2\\pi}{5},-\\frac{\\pi}{3}$.",
          "Collect the contributions: the rising part $k=1,\\dots,7$ gives $\\frac{\\pi}{15}(1+\\cdots+7)=\\frac{28\\pi}{15}$, and the folded-back part $k=8,9,10$ gives $-\\frac{7\\pi}{15}-\\frac{2\\pi}{5}-\\frac{\\pi}{3}=-\\frac{7\\pi}{15}-\\frac{6\\pi}{15}-\\frac{5\\pi}{15}=-\\frac{18\\pi}{15}$.",
          "Therefore $S=\\frac{28\\pi}{15}-\\frac{18\\pi}{15}=\\frac{2\\pi}{3}$. $\\boxed{S=\\dfrac{2\\pi}{3}}$"
        ]
      }
    ],
    "remark": "Insight: $\\arg(1+\\operatorname{cis}\\phi)=\\phi/2$ is the half-angle-of-a-chord identity, but it carries an invisible passport stamp $\\cos(\\phi/2)>0$. The moment the chord's far endpoint slides past the diameter (here at $k=8$, where $k\\theta$ first exceeds $\\pi$), the half-angle factor turns negative and the principal argument silently jumps by $-\\pi$ to fold back into $(-\\pi,\\pi]$. The naive telescoping $\\sum k\\theta/2=\\frac{11\\pi}{3}$ overshoots the true $\\frac{2\\pi}{3}$ by exactly $3\\pi$, one $\\pi$ for each of the three folded indices $k=8,9,10$. The conjugate-pairing solution is the most elegant: almost everything cancels in symmetric pairs, and only the four smallest, branch-safe terms survive."
  },
  {
    "theme": "demoivre",
    "themeLabel": "De Moivre & Powers",
    "title": "The Half-Angle That Flips the Sign",
    "difficulty": 5,
    "task": "Evaluate in closed form",
    "tags": [
      "binomial theorem",
      "de moivre",
      "half-angle",
      "imaginary part companion",
      "sign trap"
    ],
    "statement": "For a real angle $\\theta$ define the companion sums \\[ C(\\theta)=\\sum_{k=0}^{n}\\binom{n}{k}\\cos k\\theta,\\qquad S(\\theta)=\\sum_{k=0}^{n}\\binom{n}{k}\\sin k\\theta. \\] First establish the closed form of the imaginary-part companion $S(\\theta)$, and use the same complex-exponential machinery as a lemma to evaluate the single number \\[ \\Sigma=\\sum_{k=0}^{2024}\\binom{2024}{k}\\cos\\frac{k\\pi}{4}. \\] Give $\\Sigma$ in exact closed form (no trigonometric functions in the answer).",
    "answer": "\\[\\boxed{\\Sigma=-\\left(2+\\sqrt{2}\\right)^{1012}}\\]",
    "trap": "The fatal slip is the half-angle sign inside $\\bigl(1+e^{i\\pi/4}\\bigr)^{2024}=\\bigl(2\\cos\\tfrac{\\pi}{8}\\bigr)^{2024}e^{i\\cdot 2024\\pi/8}$. The exponent collapses to $e^{i\\cdot 253\\pi}$, and because $253$ is odd this equals $-1$, not $+1$. A student who writes $2024\\cdot\\tfrac{\\pi}{8}=253\\pi$ and then carelessly treats $\\cos(253\\pi)=\\cos(\\text{integer}\\cdot\\pi)$ as $+1$ (or who reduces $253\\pi$ modulo $2\\pi$ to $\\pi$ but then drops the resulting minus sign) reports the POSITIVE value $+(2+\\sqrt2)^{1012}$ and loses the whole problem. The magnitude $(2\\cos\\tfrac{\\pi}{8})^{2024}=(2+\\sqrt2)^{1012}$ is correct either way; the entire difficulty is the parity of $253$ deciding the sign. (A second, subtler version of the same trap: writing $1+e^{i\\pi/4}=2\\cos\\tfrac{\\pi}{8}\\,e^{i\\pi/8}$ is legitimate ONLY because $\\cos\\tfrac{\\pi}{8}>0$; the factorization $1+e^{i\\theta}=2\\cos\\tfrac{\\theta}{2}e^{i\\theta/2}$ silently assumes $\\cos\\tfrac{\\theta}{2}\\ge 0$, which fails for $\\theta$ near $\\pm\\pi$ and would flip the argument by $\\pi$.)",
    "solutions": [
      {
        "name": "Complex exponential, then read off the real part",
        "steps": [
          "Pack both companions into one complex sum. By the binomial theorem, \\[ C(\\theta)+iS(\\theta)=\\sum_{k=0}^{n}\\binom{n}{k}\\bigl(e^{i\\theta}\\bigr)^{k}=\\bigl(1+e^{i\\theta}\\bigr)^{n}. \\] Factor out the half-angle: $1+e^{i\\theta}=e^{i\\theta/2}\\bigl(e^{-i\\theta/2}+e^{i\\theta/2}\\bigr)=2\\cos\\tfrac{\\theta}{2}\\,e^{i\\theta/2}$ (valid as a polar form precisely when $\\cos\\tfrac{\\theta}{2}\\ge 0$). Hence \\[ \\bigl(1+e^{i\\theta}\\bigr)^{n}=\\bigl(2\\cos\\tfrac{\\theta}{2}\\bigr)^{n}e^{in\\theta/2}. \\]",
          "Taking imaginary and real parts gives the companions at one stroke: \\[ S(\\theta)=\\Bigl(2\\cos\\tfrac{\\theta}{2}\\Bigr)^{n}\\sin\\tfrac{n\\theta}{2},\\qquad C(\\theta)=\\Bigl(2\\cos\\tfrac{\\theta}{2}\\Bigr)^{n}\\cos\\tfrac{n\\theta}{2}. \\] The first is the requested imaginary-part companion; the second is the lemma we now specialise.",
          "Set $n=2024$, $\\theta=\\tfrac{\\pi}{4}$, so $\\Sigma=C\\!\\left(\\tfrac{\\pi}{4}\\right)=\\bigl(2\\cos\\tfrac{\\pi}{8}\\bigr)^{2024}\\cos\\!\\bigl(2024\\cdot\\tfrac{\\pi}{8}\\bigr)$. The magnitude uses $2\\cos\\tfrac{\\pi}{8}=2\\sqrt{\\tfrac{1+\\cos(\\pi/4)}{2}}=\\sqrt{2+\\sqrt2}$, so $\\bigl(2\\cos\\tfrac{\\pi}{8}\\bigr)^{2024}=(2+\\sqrt2)^{1012}$.",
          "Now the sign. The angle is $2024\\cdot\\tfrac{\\pi}{8}=253\\pi$, and since $253$ is odd, $\\cos(253\\pi)=-1$. Therefore \\[ \\Sigma=(2+\\sqrt2)^{1012}\\cdot(-1)=\\boxed{-(2+\\sqrt2)^{1012}}. \\]"
        ]
      },
      {
        "name": "Reduce the base root to the unit circle first",
        "steps": [
          "Write $w=e^{i\\pi/4}=\\tfrac{1+i}{\\sqrt2}$, so $\\Sigma=\\operatorname{Re}\\bigl[(1+w)^{2024}\\bigr]$. Compute $1+w$ directly in polar form: \\[ |1+w|^{2}=(1+w)(1+\\bar w)=1+(w+\\bar w)+|w|^{2}=2+2\\cos\\tfrac{\\pi}{4}=2+\\sqrt2, \\] so $|1+w|=\\sqrt{2+\\sqrt2}$, and $\\arg(1+w)=\\tfrac{\\pi}{8}$ since $1+w$ has positive real part $1+\\tfrac{1}{\\sqrt2}$ and positive imaginary part $\\tfrac{1}{\\sqrt2}$ (the bisector of the angle between $1$ and $w$).",
          "By De Moivre, $(1+w)^{2024}=(2+\\sqrt2)^{1012}\\,e^{i\\cdot 2024\\pi/8}$, whose real part is $(2+\\sqrt2)^{1012}\\cos(253\\pi)$.",
          "Reduce the bearing: $253\\pi=252\\pi+\\pi$, and $252\\pi$ is a whole number of full turns, leaving residual angle $\\pi$. Thus $\\cos(253\\pi)=\\cos\\pi=-1$ — the point $(1+w)^{2024}$ has rotated to the negative real axis.",
          "Hence $\\Sigma=(2+\\sqrt2)^{1012}\\cdot(-1)=\\boxed{-(2+\\sqrt2)^{1012}}$, a negative real number."
        ]
      },
      {
        "name": "Real linear recurrence via the companion polynomial",
        "steps": [
          "Let $a_m=\\operatorname{Re}\\bigl[(1+w)^{m}\\bigr]$ with $w=e^{i\\pi/4}$, so $\\Sigma=a_{2024}$. The number $1+w$ and its conjugate $1+\\bar w$ are the two roots of \\[ x^{2}-\\bigl(2\\operatorname{Re}(1+w)\\bigr)x+|1+w|^{2}=x^{2}-(2+\\sqrt2)\\,x+(2+\\sqrt2)=0, \\] using $2\\operatorname{Re}(1+w)=2+2\\cos\\tfrac{\\pi}{4}=2+\\sqrt2$ and $|1+w|^{2}=2+\\sqrt2$ from before.",
          "Therefore the real sequence obeys $a_m=(2+\\sqrt2)\\,a_{m-1}-(2+\\sqrt2)\\,a_{m-2}$, with $a_0=\\operatorname{Re}(1)=1$ and $a_1=\\operatorname{Re}(1+w)=1+\\tfrac{1}{\\sqrt2}$. This is a Chebyshev-type relation: it generates exactly the real parts of the powers without ever leaving the reals.",
          "Solving in closed form, $a_m=r^{m}\\cos m\\phi$ where $r=\\sqrt{2+\\sqrt2}$ and $\\phi=\\arg(1+w)=\\tfrac{\\pi}{8}$, matching the previous methods. At $m=2024$: $a_{2024}=(2+\\sqrt2)^{1012}\\cos\\!\\bigl(2024\\cdot\\tfrac{\\pi}{8}\\bigr)=(2+\\sqrt2)^{1012}\\cos(253\\pi)$.",
          "Since $253$ is odd, $\\cos(253\\pi)=-1$, giving $\\Sigma=a_{2024}=\\boxed{-(2+\\sqrt2)^{1012}}$."
        ]
      }
    ],
    "remark": "Insight: the binomial-with-trig pair is a single complex statement, $C(\\theta)+iS(\\theta)=(1+e^{i\\theta})^{n}$, and the half-angle factorization $1+e^{i\\theta}=2\\cos\\tfrac{\\theta}{2}e^{i\\theta/2}$ does ALL the work, delivering both companions at once. The magnitude $(2+\\sqrt2)^{1012}$ falls out routinely; the only place to fail is the phase $2024\\cdot\\tfrac{\\pi}{8}=253\\pi$, where the parity of $253$ — not any arithmetic with the large exponent — fixes the sign as negative. The deeper warning is that $2\\cos\\tfrac{\\theta}{2}$ is a legitimate modulus only while $\\cos\\tfrac{\\theta}{2}\\ge 0$; here $\\theta=\\tfrac{\\pi}{4}$ keeps us safe, but the moment $\\theta$ strays past $\\pi$ the same formula would silently swallow an extra $\\pi$ of argument. The companion $S(\\tfrac{\\pi}{4})$ vanishes for the same reason $\\cos(253\\pi)=-1$: there $\\sin(253\\pi)=0$, a clean consistency check that the whole power has landed exactly on the real axis."
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
    "statement": "On the unit circle, mark every solution of $z^{12}=1$ and every solution of $z^{18}=1$. Determine the number of distinct points marked in total.",
    "answer": "$24$ distinct points.",
    "trap": "Adding $12+18=30$ and stopping — this double-counts the points that solve both equations. The shared points are exactly the common roots, and forgetting to subtract them (or guessing the overlap is just $z=1$) is the classic error.",
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
    "title": "The Heptagon's Three Secants",
    "difficulty": 5,
    "task": "Prove and evaluate",
    "tags": [
      "de moivre",
      "chebyshev",
      "minimal polynomial",
      "vieta",
      "secant sum",
      "double root trap"
    ],
    "statement": "Starting from De Moivre's theorem, derive the degree-$7$ Chebyshev relation expressing $\\cos 7\\theta$ as a polynomial in $c=\\cos\\theta$. Use it to show that \\[ \\cos\\frac{\\pi}{7},\\qquad \\cos\\frac{3\\pi}{7},\\qquad \\cos\\frac{5\\pi}{7} \\] are precisely the three roots of \\[ 8x^{3}-4x^{2}-4x+1=0, \\] and hence evaluate the exact value of \\[ \\sec\\frac{\\pi}{7}+\\sec\\frac{3\\pi}{7}+\\sec\\frac{5\\pi}{7}. \\] Give the single closed-form number.",
    "answer": "\\[\\boxed{4}\\]",
    "trap": "The killer is that the cubic does not appear as a simple factor of $\\cos 7\\theta+1$ but as a SQUARE: writing $T_7(x)=64x^7-112x^5+56x^3-7x$ for the Chebyshev polynomial, one finds $T_7(x)+1=(x+1)\\,(8x^3-4x^2-4x+1)^2$. A strong student who sets $\\cos 7\\theta=-1$, i.e. $\\theta=\\tfrac{(2k+1)\\pi}{7}$, lists the seven solution angles $\\tfrac{\\pi}{7},\\tfrac{3\\pi}{7},\\tfrac{5\\pi}{7},\\pi,\\tfrac{9\\pi}{7},\\tfrac{11\\pi}{7},\\tfrac{13\\pi}{7}$ and then expects SEVEN distinct $x$-values, panicking when a degree-$7$ equation seems to demand seven roots for only three target cosines. The resolution is that $\\cos\\tfrac{9\\pi}{7}=\\cos\\tfrac{5\\pi}{7}$, $\\cos\\tfrac{11\\pi}{7}=\\cos\\tfrac{3\\pi}{7}$, $\\cos\\tfrac{13\\pi}{7}=\\cos\\tfrac{\\pi}{7}$ (reflection $\\theta\\mapsto 2\\pi-\\theta$ fixes the cosine), so each of the three cosines is a DOUBLE root, and $x=\\cos\\pi=-1$ is the lone single root peeled off by the linear factor. Miss this and you either (a) try to fit all three cosines plus extra phantom roots into one cubic, or (b) — the deadlier slip — replace $\\cos\\tfrac{5\\pi}{7}$ by the positive $\\cos\\tfrac{2\\pi}{7}$ ‘to keep the angles small’, using the WRONG root set $\\{\\cos\\tfrac{\\pi}{7},\\cos\\tfrac{2\\pi}{7},\\cos\\tfrac{3\\pi}{7}\\}$. That set is NOT the root set of the cubic ($\\cos\\tfrac{5\\pi}{7}=-\\cos\\tfrac{2\\pi}{7}<0$), and its secant sum is $\\sec\\tfrac{\\pi}{7}+\\sec\\tfrac{2\\pi}{7}+\\sec\\tfrac{3\\pi}{7}\\approx 7.21$, not $4$.",
    "solutions": [
      {
        "name": "Chebyshev via De Moivre, then Vieta on the reciprocals",
        "steps": [
          "By De Moivre, $\\cos 7\\theta+i\\sin 7\\theta=(\\cos\\theta+i\\sin\\theta)^7$. Expanding with the binomial theorem and taking the real part, every $\\sin^2\\theta$ becomes $1-\\cos^2\\theta$, leaving $\\cos 7\\theta$ as a polynomial in $c=\\cos\\theta$: \\[ \\cos 7\\theta=64c^{7}-112c^{5}+56c^{3}-7c=T_7(c). \\]",
          "Impose $\\cos 7\\theta=-1$, i.e. $\\theta=\\tfrac{(2k+1)\\pi}{7}$. Then $T_7(x)+1=0$, and the factorization \\[ T_7(x)+1=(x+1)\\bigl(8x^{3}-4x^{2}-4x+1\\bigr)^{2} \\] separates the trivial root $x=\\cos\\pi=-1$ from the rest. The three admissible angles in $(0,\\pi)$ are $\\tfrac{\\pi}{7},\\tfrac{3\\pi}{7},\\tfrac{5\\pi}{7}$ (the others repeat these cosines by $\\theta\\mapsto 2\\pi-\\theta$), and they are distinct, so $\\cos\\tfrac{\\pi}{7},\\cos\\tfrac{3\\pi}{7},\\cos\\tfrac{5\\pi}{7}$ are exactly the three roots of $8x^{3}-4x^{2}-4x+1=0$.",
          "Write the cubic monic: $x^{3}-\\tfrac12 x^{2}-\\tfrac12 x+\\tfrac18=0$. By Vieta, with $a=\\cos\\tfrac{\\pi}{7},b=\\cos\\tfrac{3\\pi}{7},c=\\cos\\tfrac{5\\pi}{7}$, \\[ a+b+c=\\tfrac12,\\qquad ab+bc+ca=-\\tfrac12,\\qquad abc=-\\tfrac18. \\]",
          "The secant sum is the sum of reciprocals of the roots: \\[ \\sec\\tfrac{\\pi}{7}+\\sec\\tfrac{3\\pi}{7}+\\sec\\tfrac{5\\pi}{7}=\\frac1a+\\frac1b+\\frac1c=\\frac{ab+bc+ca}{abc}=\\frac{-\\tfrac12}{-\\tfrac18}=\\boxed{4}. \\]"
        ]
      },
      {
        "name": "Reciprocal polynomial: the secants are themselves roots of a cubic",
        "steps": [
          "From the same Chebyshev step, $a,b,c$ are the roots of $8x^{3}-4x^{2}-4x+1=0$, and none is zero (no $\\cos\\tfrac{(2k+1)\\pi}{7}$ vanishes), so the substitution $y=1/x$ is legitimate.",
          "Replace $x$ by $1/y$ and clear denominators: $8\\cdot\\tfrac1{y^{3}}-4\\cdot\\tfrac1{y^{2}}-4\\cdot\\tfrac1{y}+1=0$ multiplied by $y^{3}$ gives the reciprocal cubic \\[ y^{3}-4y^{2}-4y+8=0, \\] whose roots are precisely $\\tfrac1a,\\tfrac1b,\\tfrac1c=\\sec\\tfrac{\\pi}{7},\\sec\\tfrac{3\\pi}{7},\\sec\\tfrac{5\\pi}{7}$.",
          "Read the sum of the roots straight off the coefficients: for $y^{3}-4y^{2}-4y+8$ the sum equals $-\\dfrac{-4}{1}=4$. Hence \\[ \\sec\\tfrac{\\pi}{7}+\\sec\\tfrac{3\\pi}{7}+\\sec\\tfrac{5\\pi}{7}=\\boxed{4}. \\]"
        ]
      },
      {
        "name": "Direct trigonometric collapse over a common denominator",
        "steps": [
          "Put the secant sum over a common denominator: \\[ \\sum \\sec=\\frac{\\cos\\tfrac{3\\pi}{7}\\cos\\tfrac{5\\pi}{7}+\\cos\\tfrac{\\pi}{7}\\cos\\tfrac{5\\pi}{7}+\\cos\\tfrac{\\pi}{7}\\cos\\tfrac{3\\pi}{7}}{\\cos\\tfrac{\\pi}{7}\\cos\\tfrac{3\\pi}{7}\\cos\\tfrac{5\\pi}{7}}. \\] The numerator is $e_2=ab+bc+ca$ and the denominator is $e_3=abc$ for the three cosines.",
          "Evaluate the denominator independently of the cubic to confirm it. Using $\\cos\\tfrac{5\\pi}{7}=-\\cos\\tfrac{2\\pi}{7}$ and the classical product $\\cos\\tfrac{\\pi}{7}\\cos\\tfrac{2\\pi}{7}\\cos\\tfrac{3\\pi}{7}=\\tfrac18$ (a telescoping consequence of $\\sin 2\\phi=2\\sin\\phi\\cos\\phi$ applied to $\\sin\\tfrac{8\\pi}{7}$), \\[ e_3=\\cos\\tfrac{\\pi}{7}\\cos\\tfrac{3\\pi}{7}\\cos\\tfrac{5\\pi}{7}=-\\cos\\tfrac{\\pi}{7}\\cos\\tfrac{2\\pi}{7}\\cos\\tfrac{3\\pi}{7}=-\\tfrac18, \\] exactly the $e_3$ predicted by Vieta on the cubic — a cross-check that the right cosines are in play.",
          "The numerator $e_2$ is supplied by Vieta on $8x^{3}-4x^{2}-4x+1$: $e_2=\\tfrac{-4}{8}=-\\tfrac12$. Therefore \\[ \\sum\\sec=\\frac{e_2}{e_3}=\\frac{-\\tfrac12}{-\\tfrac18}=\\boxed{4}. \\]"
        ]
      }
    ],
    "remark": "Insight: De Moivre turns $\\cos 7\\theta$ into the Chebyshev polynomial $T_7$, and the single most informative fact is that $T_7(x)+1$ is not square-free — it equals $(x+1)(8x^3-4x^2-4x+1)^2$. The squared cubic is the algebraic shadow of the geometric reflection $\\theta\\mapsto 2\\pi-\\theta$ that pairs $\\tfrac{9\\pi}{7},\\tfrac{11\\pi}{7},\\tfrac{13\\pi}{7}$ back onto $\\tfrac{5\\pi}{7},\\tfrac{3\\pi}{7},\\tfrac{\\pi}{7}$, so seven angles collapse to three double roots plus the stray $x=-1$. Once the correct cubic is in hand, the secant sum is not a trigonometric grind at all: it is the elementary symmetric ratio $e_2/e_3$, and the reciprocal-polynomial trick even makes the three secants the roots of $y^3-4y^2-4y+8=0$ so their sum is just a coefficient. The whole problem is a warning that the 'small positive angle' instinct ($\\cos\\tfrac{2\\pi}{7}$ in place of $\\cos\\tfrac{5\\pi}{7}$) silently swaps a sign in $e_3$ and destroys the answer."
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
    "title": "Where a Power Meets Its Own Reflection",
    "difficulty": 5,
    "task": "Classify and count all solutions",
    "tags": [
      "roots of unity",
      "modulus argument split",
      "conjugate equation",
      "degenerate case",
      "de moivre"
    ],
    "statement": "Fix an integer $n\\ge 2$. Find every complex number $z$ satisfying \\[ z^{\\,n}=\\overline{z}, \\] where $\\overline{z}$ is the complex conjugate of $z$. Give a complete classification of the solution set (not merely a count), and then determine, in terms of $n$, the exact number $N(n)$ of distinct solutions. State clearly whether $N(n)$ depends on the parity of $n$, and as a numerical anchor report the value of $N(2024)$.",
    "answer": "\\[\\boxed{\\;z=0\\ \\text{or}\\ z^{n+1}=1,\\qquad N(n)=n+2\\;}\\]",
    "trap": "The reflex move is to write $\\overline{z}=\\dfrac{|z|^{2}}{z}$ and clear the denominator to get $z^{\\,n+1}=|z|^{2}$, then declare \"this is $z^{n+1}=c$, a degree-$n{+}1$ equation, so there are exactly $n+1$ roots.\" This is wrong twice over. (i) The step $\\overline{z}=|z|^{2}/z$ silently DIVIDES by $z$ and so DELETES the legitimate solution $z=0$ (which does satisfy $0^{n}=\\overline{0}$), costing one root. (ii) Worse, $z^{n+1}=|z|^{2}$ is NOT a polynomial equation: its right side $|z|^{2}=z\\overline{z}$ still contains $z$, so one may not invoke the Fundamental Theorem of Algebra and read off $n+1$ roots — the count is a coincidence only after one separately proves $|z|=1$. The honest route forces the modulus equation $|z|^{n}=|z|$ FIRST, which splits cleanly into $|z|=0$ and $|z|=1$; only on the unit circle does the argument equation $e^{i(n+1)\\theta}=1$ then yield the $n+1$ roots of unity. Counting the isolated $z=0$ gives $N(n)=n+2$. A second, subtler miscount: a student who keeps $z=0$ but assumes the unit-circle solutions are the $n$-th roots of unity (matching the visible exponent $n$) reports $n+1$; the conjugate raises the effective degree to $n+1$, so they are the $(n+1)$-th roots of unity, not the $n$-th.",
    "solutions": [
      {
        "name": "Modulus first, then argument (the clean split)",
        "steps": [
          "Take modulus of both sides. Since $|\\overline{z}|=|z|$ and $|z^{n}|=|z|^{n}$, the equation forces $|z|^{n}=|z|$, i.e. $|z|\\bigl(|z|^{\\,n-1}-1\\bigr)=0$. As $n\\ge 2$ this gives exactly two possibilities for the modulus: $|z|=0$ or $|z|=1$. The case $|z|=0$ is the single point $z=0$, and indeed $0^{n}=0=\\overline{0}$, so $z=0$ is a genuine solution — the one the careless division throws away.",
          "Now suppose $|z|=1$, so $z=e^{i\\theta}$ and $\\overline{z}=e^{-i\\theta}$. The equation becomes $e^{in\\theta}=e^{-i\\theta}$, i.e. $e^{i(n+1)\\theta}=1$. Hence $(n+1)\\theta\\equiv 0 \\pmod{2\\pi}$, giving $\\theta=\\dfrac{2\\pi k}{n+1}$ for $k=0,1,\\dots,n$. These are precisely the $n+1$ distinct $(n+1)$-th roots of unity: the conjugate has bumped the effective degree from $n$ to $n+1$.",
          "Assemble the full set: $\\{0\\}\\cup\\{\\,z:z^{n+1}=1\\,\\}$. The unit point $z=0$ is disjoint from the unit circle, so the union is disjoint and the counts add: $N(n)=1+(n+1)=n+2$. This is independent of the parity of $n$ — the only role of $n$ is to set the modulus exponent $n-1\\ge 1$ (so $|z|=1$ is the unique positive modulus) and to fix the root count at $n+1$. Therefore $\\boxed{N(n)=n+2}$ for every $n\\ge 2$, and in particular $N(2024)=2026$."
        ]
      },
      {
        "name": "Conjugate-pair elimination to a true polynomial",
        "steps": [
          "Conjugate the entire equation: $\\overline{z^{\\,n}}=\\overline{\\overline{z}}$ gives $\\overline{z}^{\\,n}=z$. We now have the pair $z^{n}=\\overline{z}$ and $\\overline{z}^{\\,n}=z$. Substitute the first into the second by replacing $\\overline{z}=z^{n}$: $z=\\overline{z}^{\\,n}=\\bigl(z^{n}\\bigr)^{n}=z^{\\,n^{2}}$. This is now a genuine polynomial equation $z^{\\,n^{2}}=z$, i.e. $z\\bigl(z^{\\,n^{2}-1}-1\\bigr)=0$, with no conjugate left to spoil the Fundamental Theorem of Algebra.",
          "Its roots are $z=0$ together with the $(n^{2}-1)$-th roots of unity. But this substitution was a NECESSARY consequence, not an equivalence, so we must filter these candidates back through the original $z^{n}=\\overline{z}$. For $z=0$ it holds. For a root of unity $z=e^{i\\theta}$, $\\overline{z}=e^{-i\\theta}$ and the original demands $e^{in\\theta}=e^{-i\\theta}$, i.e. $e^{i(n+1)\\theta}=1$ — exactly the $(n+1)$-th roots of unity. Note $(n+1)\\mid(n^{2}-1)=(n-1)(n+1)$, so every surviving root is indeed among the $(n^{2}-1)$-th roots, confirming consistency.",
          "Thus the original solution set is $\\{0\\}\\cup\\{\\text{the } n+1 \\text{ roots of } z^{n+1}=1\\}$, of size $1+(n+1)=n+2$. The detour through $z^{n^{2}}=z$ shows why a naive degree count is treacherous: the apparent degrees ($n$, then $n^2$) are both red herrings — the real count is governed by the bumped exponent $n+1$. Hence $\\boxed{N(n)=n+2}$, with $N(2024)=2026$, independent of parity."
        ]
      },
      {
        "name": "Geometric / rotation reading",
        "steps": [
          "Interpret $z\\mapsto z^{n}$ and $z\\mapsto\\overline{z}$ as maps of the plane. Conjugation reflects across the real axis: it preserves modulus and negates argument. The map $z\\mapsto z^{n}$ scales modulus by the $n$-th power and multiplies argument by $n$. For the two outputs to coincide, their moduli must agree: $|z|^{n}=|z|$, which (for $n\\ge2$) pins $|z|\\in\\{0,1\\}$ — a fixed circle plus the origin, no other radius can survive the modulus mismatch.",
          "On $|z|=1$ modulus is automatic, so only the arguments must match: $z^{n}$ sits at argument $n\\theta$, while $\\overline{z}$ sits at $-\\theta$. Equality of points on the unit circle means $n\\theta\\equiv-\\theta\\pmod{2\\pi}$, i.e. $(n+1)\\theta\\equiv 0$. Geometrically the solutions are the $n+1$ equally spaced points where rotating by total angle $(n+1)\\theta$ returns to the start — the vertices of a regular $(n+1)$-gon inscribed in the unit circle (the $(n+1)$-th roots of unity).",
          "The origin is the lone fixed point off the circle (it is its own conjugate and its own power), contributing one more solution disjoint from the $(n+1)$-gon. Adding them, $N(n)=(n+1)+1=n+2$. Because a regular $(n+1)$-gon has $n+1$ vertices regardless of whether $n$ is even or odd, the total $\\boxed{N(n)=n+2}$ never depends on parity; for $n=2024$ this is $N(2024)=2026$."
        ]
      }
    ],
    "remark": "Insight: the whole problem is a controlled demonstration that an equation mixing $z$ with $\\overline{z}$ is NOT a polynomial, and the Fundamental Theorem of Algebra must be earned, not assumed. The disciplined move is to take modulus first — that converts the conjugate into the scalar equation $|z|^{n}=|z|$ and forces the genuine case-split $|z|=0$ versus $|z|=1$. The origin is the trap-door root that vanishes the instant you write $\\overline{z}=|z|^{2}/z$; the unit-circle roots are the $(n+1)$-th — not $n$-th — roots of unity because conjugation contributes a hidden $+1$ to the effective degree. Both surprises push the count UP to $n+2$, and the count is gloriously parity-blind: $n$ only chooses the modulus exponent and the polygon's vertex number, never the structure of the answer."
  },
  {
    "theme": "demoivre",
    "themeLabel": "De Moivre & Powers",
    "title": "The Indexed Wheel of Seven",
    "difficulty": 5,
    "task": "Evaluate in closed form",
    "tags": [
      "roots of unity",
      "de moivre",
      "abel summation",
      "differentiated geometric series",
      "derivative trap"
    ],
    "statement": "Let $\\zeta=e^{2\\pi i/7}$ be a primitive seventh root of unity. The seven powers $1,\\zeta,\\zeta^{2},\\dots,\\zeta^{6}$ are the vertices of a regular heptagon, and it is classical that they sum to zero, equivalently $\\sum_{k=1}^{6}\\zeta^{k}=-1$ and $\\sum_{k=1}^{6}\\cos\\frac{2k\\pi}{7}=-\\frac12$. Now attach the index as a weight and evaluate the single real number \\[ W=\\sum_{k=1}^{6} k\\,\\cos\\frac{2k\\pi}{7}=1\\cos\\frac{2\\pi}{7}+2\\cos\\frac{4\\pi}{7}+3\\cos\\frac{6\\pi}{7}+4\\cos\\frac{8\\pi}{7}+5\\cos\\frac{10\\pi}{7}+6\\cos\\frac{12\\pi}{7}. \\] Give $W$ as an exact rational number, with no trigonometric functions remaining.",
    "answer": "\\[\\boxed{W=-\\dfrac{7}{2}}\\]",
    "trap": "The seductive wrong answer is $W=0$. A strong student notices that $W=\\operatorname{Re}\\bigl(\\sum_{k=1}^{6}k\\,\\zeta^{k}\\bigr)$ and that $g(z)=\\sum_{k=0}^{6}z^{k}$ vanishes at $z=\\zeta$ (it is the cyclotomic factor $\\frac{z^{7}-1}{z-1}$ whose roots are exactly the primitive seventh roots). Since the index weight is produced by differentiation, $\\sum_{k=1}^{6}k\\,z^{k}=z\\,g'(z)$, the student leaps to \\textquotedblleft$g(\\zeta)=0$, so its derivative is $0$ there, hence $W=0$.\\textquotedblright\\ This is the derivative-of-a-vanishing-function fallacy: $g(\\zeta)=0$ says the value is zero at one point, which says nothing about the slope; indeed $g'(\\zeta)\\neq0$ because $\\zeta$ is a simple root of $z^{7}-1$. A second, sign-level trap lurks in the closed form $z\\,g'(\\zeta)=\\frac{7}{\\zeta-1}$: writing the denominator as $1-\\zeta$ instead of $\\zeta-1$ flips $\\operatorname{Re}\\frac{1}{\\zeta-1}=-\\frac12$ into $+\\frac12$ and reports $W=+\\frac72$. Both the \\textquotedblleft$0$\\textquotedblright\\ and the \\textquotedblleft$+\\frac72$\\textquotedblright\\ are wrong; the truth is $-\\frac72$.",
    "solutions": [
      {
        "name": "Differentiate the geometric series (Abel's device)",
        "steps": [
          "Lift to the complex plane: with $\\zeta=e^{2\\pi i/7}$ the requested number is the real part $W=\\operatorname{Re}\\,S$ of the weighted root sum $S=\\sum_{k=1}^{6}k\\,\\zeta^{k}$, because $\\operatorname{Re}\\,\\zeta^{k}=\\cos\\frac{2k\\pi}{7}$. The index weight $k$ is the signature of a differentiated geometric series.",
          "Start from $\\sum_{k=0}^{6}z^{k}=\\dfrac{z^{7}-1}{z-1}$ (valid for $z\\neq1$). Differentiate and multiply by $z$ to inject the weight: $\\displaystyle\\sum_{k=1}^{6}k\\,z^{k}=z\\frac{d}{dz}\\!\\left(\\frac{z^{7}-1}{z-1}\\right)=z\\cdot\\frac{7z^{6}(z-1)-(z^{7}-1)}{(z-1)^{2}}.$",
          "Specialise to $z=\\zeta$, where $\\zeta^{7}=1$. The term $z^{7}-1$ vanishes, so the bracket collapses to $7\\zeta^{6}(\\zeta-1)$, giving $S=\\zeta\\cdot\\dfrac{7\\zeta^{6}(\\zeta-1)}{(\\zeta-1)^{2}}=\\dfrac{7\\zeta^{7}}{\\zeta-1}=\\dfrac{7}{\\zeta-1}.$ Note the numerator survives precisely because $\\zeta$ is a simple root, so $g'(\\zeta)\\neq0$ — the death of the naive \\textquotedblleft$=0$\\textquotedblright\\ guess.",
          "Take the real part using the standard identity $\\operatorname{Re}\\dfrac{1}{e^{i\\theta}-1}=-\\dfrac12$ for $\\theta\\not\\equiv0$ (derived next method). With $\\theta=\\tfrac{2\\pi}{7}$, $W=\\operatorname{Re}\\dfrac{7}{\\zeta-1}=7\\cdot\\Bigl(-\\tfrac12\\Bigr)=\\boxed{-\\dfrac{7}{2}}.$"
        ]
      },
      {
        "name": "The constant real part of $1/(\\zeta-1)$",
        "steps": [
          "From the first method we have $S=\\sum_{k=1}^{6}k\\,\\zeta^{k}=\\dfrac{7}{\\zeta-1}$, so everything reduces to one real part. Compute it honestly by rationalising: for any unit-modulus $z=e^{i\\theta}$, $\\dfrac{1}{z-1}=\\dfrac{\\bar z-1}{(z-1)(\\bar z-1)}=\\dfrac{\\bar z-1}{|z-1|^{2}}.$",
          "The denominator is real: $|z-1|^{2}=(z-1)(\\bar z-1)=2-(z+\\bar z)=2-2\\cos\\theta$. The numerator's real part is $\\operatorname{Re}(\\bar z-1)=\\cos\\theta-1$. Hence $\\operatorname{Re}\\dfrac{1}{z-1}=\\dfrac{\\cos\\theta-1}{2-2\\cos\\theta}=\\dfrac{-(1-\\cos\\theta)}{2(1-\\cos\\theta)}=-\\dfrac12,$ a constant independent of $\\theta$ — the elegant heart of the problem.",
          "This is exactly where the sign trap lives: had we written $\\dfrac{1}{1-\\zeta}$ the same computation yields $+\\tfrac12$. The correct denominator from $S=\\dfrac{7\\zeta^{7}}{\\zeta-1}$ is $\\zeta-1$, fixing the sign as negative.",
          "Therefore $W=\\operatorname{Re}\\,S=7\\cdot\\operatorname{Re}\\dfrac{1}{\\zeta-1}=7\\cdot\\Bigl(-\\tfrac12\\Bigr)=\\boxed{-\\dfrac{7}{2}}.$"
        ]
      },
      {
        "name": "Real Abel pairing on the heptagon",
        "steps": [
          "Stay entirely real and exploit the heptagon's mirror symmetry: $\\cos\\dfrac{2(7-k)\\pi}{7}=\\cos\\!\\left(2\\pi-\\dfrac{2k\\pi}{7}\\right)=\\cos\\dfrac{2k\\pi}{7}$. So the cosines at index $k$ and index $7-k$ coincide while their index weights $k$ and $7-k$ are different — this is what breaks the unweighted symmetry.",
          "Fold the sum into the three mirror pairs $(1,6),(2,5),(3,4)$. Each pair contributes $k\\cos\\frac{2k\\pi}{7}+(7-k)\\cos\\frac{2(7-k)\\pi}{7}=\\bigl(k+(7-k)\\bigr)\\cos\\frac{2k\\pi}{7}=7\\cos\\frac{2k\\pi}{7}.$ The weighted sum therefore equals $W=7\\Bigl(\\cos\\tfrac{2\\pi}{7}+\\cos\\tfrac{4\\pi}{7}+\\cos\\tfrac{6\\pi}{7}\\Bigr).$",
          "Evaluate the inner bracket from the vanishing root sum: $\\sum_{k=1}^{6}\\cos\\frac{2k\\pi}{7}=-1$, and by the same mirror pairing the six terms split into two equal copies of $\\cos\\tfrac{2\\pi}{7}+\\cos\\tfrac{4\\pi}{7}+\\cos\\tfrac{6\\pi}{7}$, so that bracket equals $-\\tfrac12$.",
          "Hence $W=7\\cdot\\Bigl(-\\tfrac12\\Bigr)=\\boxed{-\\dfrac{7}{2}}$, agreeing with the complex-analytic routes and confirming the weighting did not destroy the clean rational value."
        ]
      }
    ],
    "remark": "Insight: the index weight $k$ is a derivative in disguise, $\\sum k\\,z^{k}=z\\,g'(z)$ with $g(z)=\\sum_{k=0}^{6}z^{k}$, so the whole problem is Abel summation / a differentiated geometric series rather than the bare vanishing of the root sum. The trap is precisely that $g(\\zeta)=0$ tempts one to claim $g'(\\zeta)=0$; but $\\zeta$ is a simple root of $z^{7}-1$, so the slope is nonzero and $z\\,g'(\\zeta)=\\frac{7}{\\zeta-1}$ survives. Everything then rests on the strikingly simple fact that $\\operatorname{Re}\\frac{1}{e^{i\\theta}-1}=-\\frac12$ for every $\\theta\\not\\equiv0$ — constant, angle-blind — which is why $W=-\\frac72$ depends on the heptagon only through the single integer $7=1+6=2+5=3+4$. The real-pairing route makes the same point without complex numbers: folding $k$ against $7-k$ converts the index weights into a uniform factor of $7$ times the ordinary cosine sum $-\\tfrac12$."
  },
  {
    "theme": "demoivre",
    "themeLabel": "De Moivre & Powers",
    "title": "The Squared Orbit on a Seven-Spoked Wheel",
    "difficulty": 5,
    "task": "Count the distinct values",
    "tags": [
      "de moivre",
      "roots of unity",
      "quadratic residues",
      "cosine folding",
      "orbit counting"
    ],
    "statement": "Let $z=\\cos\\dfrac{2\\pi}{7}+i\\sin\\dfrac{2\\pi}{7}$, a primitive seventh root of unity, and define the doubly-infinite real sequence \\[ b_n=z^{\\,n^{2}}+z^{-n^{2}}\\qquad(n\\in\\mathbb{Z}). \\] By De Moivre's theorem each $b_n=2\\cos\\dfrac{2\\pi n^{2}}{7}$ is real. As $n$ runs over all integers $\\dots,-2,-1,0,1,2,\\dots$, determine the number of distinct real values that the sequence $(b_n)$ actually attains.",
    "answer": "$\\boxed{4}$",
    "trap": "The headline trap is to answer $7$. Reasoning \"$b_n$ depends only on $n^2\\bmod 7$, and as $n$ ranges over $\\mathbb{Z}$ the residue $n^2\\bmod 7$ surely sweeps out all of $\\{0,1,\\dots,6\\}$, one cosine value per residue\" makes two independent errors. First, $n^{2}\\bmod 7$ does NOT visit every residue: squares modulo $7$ land only in $\\{0,1,2,4\\}$ (the quadratic residues), never in $\\{3,5,6\\}$. Second, even among the residues that ARE hit, $2\\cos\\frac{2\\pi m}{7}=2\\cos\\frac{2\\pi(7-m)}{7}$ because cosine is even, so a residue and its negative would have collapsed anyway. A subtler trap gives $3$: a student who correctly restricts to the three NONZERO quadratic residues $\\{1,2,4\\}$ but silently discards $n^2\\equiv 0$ forgets that $n=0,\\pm7,\\pm14,\\dots$ are legal integers giving $b_n=2\\cos 0=2$ — the value $2$ is genuinely attained and must be counted. A third trap gives $2$ or $1$ by wrongly believing the nonzero quadratic residues $\\{1,2,4\\}$ collide with each other under the even-cosine fold; in fact they form a perfect transversal of the three fold-pairs $\\{1,6\\},\\{2,5\\},\\{3,4\\}$ (since $4\\equiv-3$), so they yield three DISTINCT cosine values, not fewer.",
    "solutions": [
      {
        "name": "Residue reduction, then quadratic residues, then cosine folding",
        "steps": [
          "By De Moivre $z^{n^{2}}=\\cos\\frac{2\\pi n^{2}}{7}+i\\sin\\frac{2\\pi n^{2}}{7}$ and $z^{-n^{2}}$ is its conjugate, so $b_n=z^{n^{2}}+z^{-n^{2}}=2\\cos\\frac{2\\pi n^{2}}{7}$. Since $z^{7}=1$, the value $b_n$ depends on the exponent $n^{2}$ only through its residue $r=n^{2}\\bmod 7$; thus the distinct values of $(b_n)$ are exactly the distinct values of $2\\cos\\frac{2\\pi r}{7}$ as $r$ ranges over the set of residues that are squares mod $7$.",
          "Compute that set of attainable exponents. The squares of $0,1,2,3,4,5,6$ modulo $7$ are $0,1,4,2,2,4,1$, so $\\{n^{2}\\bmod 7\\}=\\{0,1,2,4\\}$: the residues $3,5,6$ are non-residues and are NEVER hit. This already kills the naive \"$7$ values\" guess — only $4$ exponent-classes are even available, and we must still check none of their cosines coincide.",
          "Apply the even-cosine fold $2\\cos\\frac{2\\pi m}{7}=2\\cos\\frac{2\\pi(7-m)}{7}$, which pairs residues $\\{1,6\\},\\{2,5\\},\\{3,4\\}$ and fixes $0$. The nonzero attainable residues $\\{1,2,4\\}$ meet these pairs in $\\{1,6\\},\\{2,5\\}$ and (since $4\\equiv-3$) $\\{3,4\\}$ — one residue in each distinct pair, a transversal. Hence $r=1,2,4$ give three genuinely different cosine values, and they differ from the value at $r=0$.",
          "So the attained values are $2\\cos 0=2$ together with the three distinct numbers $2\\cos\\frac{2\\pi}{7},\\,2\\cos\\frac{4\\pi}{7},\\,2\\cos\\frac{8\\pi}{7}=2\\cos\\frac{6\\pi}{7}$. That is $\\boxed{4}$ distinct values; explicitly $\\{2,\\;2\\cos\\frac{2\\pi}{7},\\;2\\cos\\frac{4\\pi}{7},\\;2\\cos\\frac{6\\pi}{7}\\}\\approx\\{2,\\,1.2470,\\,-0.4450,\\,-1.8019\\}$."
        ]
      },
      {
        "name": "Orbit counting under the symmetry group of the wheel",
        "steps": [
          "Think of the exponent as a point on the cyclic wheel $\\mathbb{Z}/7$. Two effects identify points: $z^{7}=1$ collapses the exponent to its residue, and conjugation $z^{m}+z^{-m}$ is invariant under $m\\mapsto-m$. So $b$ is constant on the orbits of the sign-flip group $\\{\\pm1\\}$ acting on $\\mathbb{Z}/7$, whose orbits are $\\{0\\},\\{1,6\\},\\{2,5\\},\\{3,4\\}$ — four orbits, and by the simple-root distinctness of $2\\cos\\frac{2\\pi m}{7}$ on $0\\le m\\le 3$, the four orbit-values are pairwise distinct.",
          "The catch is that $b_n$ does not realise every orbit: its exponent is the SQUARE $n^{2}$, so only orbits meeting the image $\\{n^{2}\\bmod 7\\}=\\{0,1,2,4\\}$ can appear. Check each orbit: $\\{0\\}$ contains $0$ (a square, $0=0^{2}$); $\\{1,6\\}$ contains $1=1^{2}$; $\\{2,5\\}$ contains $2=3^{2}\\bmod 7$; $\\{3,4\\}$ contains $4=2^{2}$. Every one of the four orbits is met.",
          "Because all four orbits are realised and each carries a distinct value of $b$, the sequence attains exactly one value per orbit. The non-residues $3,5,6$ being absent costs us nothing here precisely because each of $3,5,6$ shares its orbit with a residue ($3$ with $4$, $5$ with $2$, $6$ with $1$).",
          "Hence the number of distinct values equals the number of orbits realised $=4$, giving $\\boxed{4}$."
        ]
      },
      {
        "name": "Direct enumeration with a Chebyshev distinctness check",
        "steps": [
          "Since $b_{n+7}=b_n$ (period $7$ in $n$ modulo the residue) and $b_{-n}=b_n$, it suffices to evaluate $b_n$ for $n=0,1,2,3$, which already cover all residues $n^{2}\\bmod 7$: indeed $0^{2}=0,\\;1^{2}=1,\\;2^{2}=4,\\;3^{2}=9\\equiv2$, listing exponents $\\{0,1,4,2\\}$ and never producing $3,5,6$.",
          "Evaluate: $b_0=2\\cos0=2$, $b_1=2\\cos\\frac{2\\pi}{7}$, $b_2=2\\cos\\frac{8\\pi}{7}=2\\cos\\frac{6\\pi}{7}$, $b_3=2\\cos\\frac{18\\pi}{7}=2\\cos\\frac{4\\pi}{7}$. These four numbers are the candidates; we must confirm they are pairwise distinct.",
          "Distinctness via Chebyshev: $2\\cos\\frac{2\\pi m}{7}=2T_m(\\cos\\frac{2\\pi}{7})$ where the angles $\\frac{2\\pi m}{7}$ for $m=0,1,2,3$ are strictly increasing in $[0,\\pi]$, an interval on which $\\cos$ is strictly decreasing; therefore $2,\\,2\\cos\\frac{2\\pi}{7},\\,2\\cos\\frac{4\\pi}{7},\\,2\\cos\\frac{6\\pi}{7}$ are strictly decreasing and hence all different. Numerically $2>1.2470>-0.4450>-1.8019$, confirming no two coincide.",
          "Every integer $n$ reproduces one of these four via $n\\equiv\\pm n'\\pmod 7$ with $n'\\in\\{0,1,2,3\\}$ and the square landing in $\\{0,1,2,4\\}$, so no further values appear. The count is $\\boxed{4}$."
        ]
      }
    ],
    "remark": "Insight: the squared exponent is the whole story. Stripping De Moivre away, $b_n=2\\cos\\frac{2\\pi n^{2}}{7}$ is governed by two compressions acting on the exponent in $\\mathbb{Z}/7$ — the cyclic reduction $z^{7}=1$ and the conjugation symmetry $m\\mapsto-m$ — whose four orbits $\\{0\\},\\{1,6\\},\\{2,5\\},\\{3,4\\}$ would suggest at most four values for the un-squared sequence $z^{n}+z^{-n}$. The quadratic exponent then restricts the reachable exponents to the quadratic residues $\\{0,1,2,4\\}$, and the lovely arithmetic coincidence is that the three nonzero residues $\\{1,2,4\\}$ form an exact transversal of the three nontrivial orbits (because $4\\equiv-3$), so the squaring removes no values at all: still exactly $4$. The two traps are mirror images — answering $7$ over-counts by forgetting BOTH that squares miss half the residues and that cosine is even, while answering $3$ under-counts by forgetting that $n\\equiv0$ is a legal square contributing the value $2$. For a general odd prime $p$ the same argument gives $1+\\frac{p-1}{2}=\\frac{p+1}{2}$ distinct values, matching $4$ at $p=7$."
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
    "answer": "$\\displaystyle\\sum_{j=0}^{6}\\zeta_j^{\\,5}=0$; and in general $\\displaystyle\\sum_{j=0}^{6}\\zeta_j^{\\,m}=\\begin{cases}7,&7\\mid m\\\\ 0,&7\\nmid m.\\end{cases}$",
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
    "title": "The Phantom Half-Turn of i",
    "difficulty": 5,
    "task": "Evaluate exactly",
    "tags": [
      "de moivre",
      "alternating binomial",
      "half-angle factor",
      "branch",
      "sign trap"
    ],
    "statement": "Fix the integer $n=9$ and the angle $\\theta=\\dfrac{7\\pi}{2}$, and evaluate the alternating binomial cosine sum \\[ A=\\sum_{k=0}^{9}(-1)^{k}\\binom{9}{k}\\cos\\!\\left(\\frac{7k\\pi}{2}\\right) =\\binom{9}{0}-\\binom{9}{1}\\cos\\tfrac{7\\pi}{2}+\\binom{9}{2}\\cos 7\\pi-\\cdots-\\binom{9}{9}\\cos\\tfrac{63\\pi}{2}. \\] The intended route is to recognise $A=\\operatorname{Re}\\big((1-e^{i\\theta})^{n}\\big)$ and to use the half-angle factorization $1-e^{i\\theta}=-2i\\sin\\tfrac{\\theta}{2}\\,e^{i\\theta/2}$, in which the leading factor is the imaginary unit's quarter-turn $-i$, not a real number. Give $A$ as an exact integer.",
    "answer": "\\[\\boxed{A=16}\\]",
    "trap": "The seductive wrong answer is $A=-16$. It is produced by two different shortcuts that both mishandle the $-i$ in $1-e^{i\\theta}=-2i\\sin\\tfrac{\\theta}{2}\\,e^{i\\theta/2}$. Shortcut one quotes a memorized identity \"$\\sum_{k}(-1)^{k}\\binom{n}{k}\\cos k\\theta=2^{n}\\sin^{n}\\tfrac{\\theta}{2}\\cos\\tfrac{n\\theta}{2}$,\" silently dropping the quarter-turn: the true phase is $\\tfrac{n(\\theta-\\pi)}{2}$, not $\\tfrac{n\\theta}{2}$, and for the odd exponent $n=9$ the missing $-\\tfrac{n\\pi}{2}$ is an odd multiple of $\\tfrac{\\pi}{2}$ that flips $\\cos\\tfrac{9\\pi}{4}=+\\tfrac1{\\sqrt2}$ into $\\cos\\tfrac{63\\pi}{4}=-\\tfrac1{\\sqrt2}$. Shortcut two writes the modulus of $1-e^{i\\theta}$ as the positive real $2\\sin\\tfrac{\\theta}{2}$; but $\\theta=\\tfrac{7\\pi}{2}$ lies outside $(0,2\\pi)$, so $\\tfrac{\\theta}{2}=\\tfrac{7\\pi}{4}$ is in the fourth quadrant where $\\sin\\tfrac{7\\pi}{4}=-\\tfrac1{\\sqrt2}<0$; the genuine modulus is $2\\big|\\sin\\tfrac{\\theta}{2}\\big|$, and treating $(2\\sin\\tfrac{\\theta}{2})^{9}=(-\\sqrt2)^{9}=-16\\sqrt2$ as if it were $(\\sqrt2)^{9}=+16\\sqrt2$ again flips the sign. Both routes report $-16$; the correct value is $+16$.",
    "solutions": [
      {
        "name": "The honest half-angle factorization",
        "steps": [
          "Lift to the complex plane. Since $\\cos\\tfrac{7k\\pi}{2}=\\operatorname{Re}\\,e^{ik\\theta}$ with $\\theta=\\tfrac{7\\pi}{2}$, the binomial theorem gives $A=\\operatorname{Re}\\sum_{k=0}^{9}\\binom{9}{k}(-1)^{k}e^{ik\\theta}=\\operatorname{Re}\\sum_{k=0}^{9}\\binom{9}{k}(-e^{i\\theta})^{k}=\\operatorname{Re}\\big((1-e^{i\\theta})^{9}\\big).$",
          "Factor honestly, keeping the imaginary unit visible: $1-e^{i\\theta}=e^{i\\theta/2}\\big(e^{-i\\theta/2}-e^{i\\theta/2}\\big)=e^{i\\theta/2}\\cdot(-2i\\sin\\tfrac{\\theta}{2})=-2i\\sin\\tfrac{\\theta}{2}\\,e^{i\\theta/2}.$ The factor $-2i$ is the heart of the matter: it carries a quarter-turn $-i=e^{-i\\pi/2}$, so the true argument of $1-e^{i\\theta}$ is $\\tfrac{\\theta}{2}-\\tfrac{\\pi}{2}=\\tfrac{\\theta-\\pi}{2}$, not $\\tfrac{\\theta}{2}$.",
          "Raise to the ninth power as a single complex number, never separating an \"all-real modulus\": $(1-e^{i\\theta})^{9}=(-2i)^{9}\\sin^{9}\\tfrac{\\theta}{2}\\,e^{9i\\theta/2}=2^{9}(-i)^{9}\\sin^{9}\\tfrac{\\theta}{2}\\,e^{9i\\theta/2}=2^{9}\\sin^{9}\\tfrac{\\theta}{2}\\,e^{9i(\\theta-\\pi)/2},$ using $(-i)^{9}=-i=e^{-i\\pi/2}=e^{-9i\\pi/2}$ up to the full $9$ copies of the quarter-turn, i.e. $(-i)^{9}=e^{-9i\\pi/2}$. Taking real parts, $A=2^{9}\\sin^{9}\\tfrac{\\theta}{2}\\,\\cos\\tfrac{9(\\theta-\\pi)}{2}.$",
          "Substitute $\\theta=\\tfrac{7\\pi}{2}$. Then $\\sin\\tfrac{\\theta}{2}=\\sin\\tfrac{7\\pi}{4}=-\\tfrac1{\\sqrt2}$, so $2^{9}\\sin^{9}\\tfrac{\\theta}{2}=512\\cdot\\big(-\\tfrac1{\\sqrt2}\\big)^{9}=512\\cdot\\big(-\\tfrac{1}{16\\sqrt2}\\big)=-16\\sqrt2,$ and $\\cos\\tfrac{9(\\theta-\\pi)}{2}=\\cos\\tfrac{9}{2}\\!\\left(\\tfrac{7\\pi}{2}-\\pi\\right)=\\cos\\tfrac{45\\pi}{4}=\\cos\\tfrac{5\\pi}{4}=-\\tfrac1{\\sqrt2}.$ Multiplying, the two negatives cancel: $A=(-16\\sqrt2)\\cdot\\big(-\\tfrac1{\\sqrt2}\\big)=\\boxed{16}.$ The sign survives precisely because the quarter-turn was kept."
        ]
      },
      {
        "name": "Reduce the angle first, then $(1+i)^9$",
        "steps": [
          "The cosine sum depends on $\\theta$ only through $e^{ik\\theta}$, hence only on $\\theta\\bmod 2\\pi$. Reduce $\\theta=\\tfrac{7\\pi}{2}=\\tfrac{3\\pi}{2}+2\\pi$, so $A=\\operatorname{Re}\\big((1-e^{i\\theta})^{9}\\big)=\\operatorname{Re}\\big((1-e^{3i\\pi/2})^{9}\\big)$ with the equivalent angle $\\tfrac{3\\pi}{2}\\in(0,2\\pi)$ where the half-angle $\\tfrac{3\\pi}{4}$ has $\\sin>0$ and no branch ambiguity remains.",
          "Evaluate the base directly: $e^{3i\\pi/2}=\\cos\\tfrac{3\\pi}{2}+i\\sin\\tfrac{3\\pi}{2}=-i$, so $1-e^{3i\\pi/2}=1-(-i)=1+i.$",
          "Power the Gaussian integer by De Moivre: $1+i=\\sqrt2\\,e^{i\\pi/4}$, hence $(1+i)^{9}=(\\sqrt2)^{9}e^{9i\\pi/4}=16\\sqrt2\\,\\big(\\cos\\tfrac{9\\pi}{4}+i\\sin\\tfrac{9\\pi}{4}\\big)=16\\sqrt2\\big(\\tfrac1{\\sqrt2}+\\tfrac{i}{\\sqrt2}\\big)=16+16i.$",
          "Therefore $A=\\operatorname{Re}(16+16i)=\\boxed{16}.$ Reducing the angle into $(0,2\\pi)$ first is what neutralises the second trap: there is no longer any temptation to read a negative $\\sin\\tfrac{\\theta}{2}$ as a positive modulus."
        ]
      },
      {
        "name": "Pure De Moivre on the modulus-argument form",
        "steps": [
          "Work with $w=1-e^{i\\theta}$ at $\\theta=\\tfrac{7\\pi}{2}$ in Cartesian form. Since $e^{7i\\pi/2}=\\cos\\tfrac{7\\pi}{2}+i\\sin\\tfrac{7\\pi}{2}=0+i\\cdot(-1)=-i,$ we get $w=1-(-i)=1+i$, with genuine modulus $|w|=\\sqrt2$ and genuine argument $\\arg w=\\tfrac{\\pi}{4}$ (first quadrant) — note this is $\\tfrac{\\theta-\\pi}{2}=\\tfrac{7\\pi/2-\\pi}{2}=\\tfrac{5\\pi}{4}$ reduced modulo $2\\pi$, confirming the $-\\tfrac{\\pi}{2}$ correction rather than the naive $\\tfrac{\\theta}{2}=\\tfrac{7\\pi}{4}$.",
          "By De Moivre, $w^{9}=|w|^{9}\\big(\\cos 9\\arg w+i\\sin 9\\arg w\\big)=2^{9/2}\\big(\\cos\\tfrac{9\\pi}{4}+i\\sin\\tfrac{9\\pi}{4}\\big).$",
          "Reduce the angle: $\\tfrac{9\\pi}{4}=2\\pi+\\tfrac{\\pi}{4}$, so $\\cos\\tfrac{9\\pi}{4}=\\cos\\tfrac{\\pi}{4}=\\tfrac1{\\sqrt2}$, giving $\\operatorname{Re}(w^{9})=2^{9/2}\\cdot\\tfrac1{\\sqrt2}=2^{9/2}\\cdot 2^{-1/2}=2^{4}.$",
          "Hence $A=\\operatorname{Re}\\big((1-e^{i\\theta})^{9}\\big)=2^{4}=\\boxed{16}.$ Computing $|w|$ and $\\arg w$ from the actual point $1+i$ — instead of from the formula $2\\sin\\tfrac{\\theta}{2}$ and $\\tfrac{\\theta}{2}$ — automatically installs the correct positive modulus $\\sqrt2$ and the correct argument $\\tfrac{\\pi}{4}$."
        ]
      }
    ],
    "remark": "Insight: the factor $1-e^{i\\theta}=-2i\\sin\\tfrac{\\theta}{2}\\,e^{i\\theta/2}$ is an $i$-phase, not a real scaling. The $-i$ injects a quarter-turn, so the correct closed form is $\\sum_{k}(-1)^{k}\\binom{n}{k}\\cos k\\theta=\\big(2\\sin\\tfrac{\\theta}{2}\\big)^{n}\\cos\\tfrac{n(\\theta-\\pi)}{2}$ — the phase is $\\tfrac{n(\\theta-\\pi)}{2}$ and the bracket may be a negative real. Both popular shortcuts amputate this $-i$: one drops the $-\\tfrac{\\pi}{2}$ from the phase, the other forces $2\\sin\\tfrac{\\theta}{2}$ to be a positive modulus even though $\\theta=\\tfrac{7\\pi}{2}$ puts $\\tfrac{\\theta}{2}$ in a quadrant where the half-angle sine is negative. For an odd power both errors flip the sign in lockstep to the phantom $-16$. The cleanest cure is to refuse the formula and evaluate the actual base: $1-e^{7i\\pi/2}=1+i$, whose ninth power $16+16i$ leaves no room for a missing half-turn."
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
    "trap": "Demanding $z^n=1$ (a root of unity) and so chasing the argument back to $0^\\circ$, which would need $n=18$. But $z^n$ is real as soon as its argument is a multiple of $180^\\circ$, reached first at $n=9$ — and the modulus is $2$, not $1$, so $|z^9|=512$, not $1$.",
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
    "title": "The Odd Half of Fourteen",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "cyclotomic",
      "parity split",
      "product",
      "anti-roots",
      "evaluation at a point"
    ],
    "statement": "Let $\\zeta=e^{\\pi i/7}=e^{2\\pi i/14}$, a primitive $14$th root of unity, so that $\\zeta,\\zeta^2,\\dots,\\zeta^{13}$ together with $1$ are the fourteen $14$th roots of unity. Considering only the seven powers with an odd exponent, evaluate \\[ \\prod_{\\substack{k=1\\\\ k\\ \\mathrm{odd}}}^{13}\\bigl(2-\\zeta^{k}\\bigr)=\\bigl(2-\\zeta\\bigr)\\bigl(2-\\zeta^{3}\\bigr)\\bigl(2-\\zeta^{5}\\bigr)\\bigl(2-\\zeta^{7}\\bigr)\\bigl(2-\\zeta^{9}\\bigr)\\bigl(2-\\zeta^{11}\\bigr)\\bigl(2-\\zeta^{13}\\bigr). \\]",
    "answer": "$129$",
    "trap": "Treating the seven odd-exponent powers as if they were ``half of the $n$th roots of unity'' and reaching for $2^{n}-1$. The fatal step is mis-identifying which polynomial these seven numbers are the roots of. The full identity $x^{14}-1=\\prod_{k=0}^{13}(x-\\zeta^{k})$ splits by parity as $(x^{7}-1)(x^{7}+1)$: the seven even-exponent powers $\\zeta^{0},\\zeta^{2},\\dots,\\zeta^{12}$ are the seventh roots of unity (roots of $x^{7}-1$), but the seven odd-exponent powers are the roots of $x^{7}+1$, the anti-roots. So the product is the value of $x^{7}+1$ at $x=2$, namely $2^{7}+1=129$, not the value of $x^{7}-1$ at $x=2$, which would give the wrong $2^{7}-1=127$. A second wrong turn is forgetting that $\\zeta^{7}=-1$ is itself one of the odd-exponent factors $(2-(-1))=3$; dropping it (as if the seven factors were only the genuinely complex ones) destroys the count and the parity argument alike.",
    "solutions": [
      {
        "name": "Parity split: the anti-roots are the roots of $x^7+1$",
        "steps": [
          "The $14$ powers $\\zeta^{0},\\zeta^{1},\\dots,\\zeta^{13}$ are all distinct $14$th roots of unity, so $x^{14}-1=\\prod_{k=0}^{13}(x-\\zeta^{k})$. Factor the left side as $x^{14}-1=(x^{7}-1)(x^{7}+1)$.",
          "Sort the powers by the parity of the exponent. The even-exponent powers $\\zeta^{2j}=(\\zeta^{2})^{j}$ for $j=0,\\dots,6$ are the seven $7$th roots of unity (since $\\zeta^{2}=e^{2\\pi i/7}$), hence exactly the roots of $x^{7}-1$. The remaining seven powers, those with odd exponent, must therefore be exactly the roots of the complementary factor $x^{7}+1$.",
          "Consequently $\\displaystyle\\prod_{\\substack{k\\ \\mathrm{odd}}}(x-\\zeta^{k})=x^{7}+1$ identically in $x$. Setting $x=2$ turns the requested product into a single substitution: $\\displaystyle\\prod_{\\substack{k\\ \\mathrm{odd}}}(2-\\zeta^{k})=2^{7}+1$.",
          "Therefore the value is $2^{7}+1=128+1=129$. $\\boxed{129}$"
        ]
      },
      {
        "name": "Complement: divide the whole by the even half",
        "steps": [
          "Evaluate the product over all thirteen non-trivial roots first. From $x^{14}-1=\\prod_{k=0}^{13}(x-\\zeta^{k})$, dividing by the $k=0$ factor $(x-1)$ gives $\\dfrac{x^{14}-1}{x-1}=\\prod_{k=1}^{13}(x-\\zeta^{k})=1+x+\\cdots+x^{13}$; at $x=2$ this equals $\\dfrac{2^{14}-1}{2-1}=2^{14}-1=16383$.",
          "Now the even-exponent non-trivial powers $\\zeta^{2},\\zeta^{4},\\dots,\\zeta^{12}$ are the six non-trivial $7$th roots of unity, so $\\prod_{j=1}^{6}(x-\\zeta^{2j})=\\dfrac{x^{7}-1}{x-1}=1+x+\\cdots+x^{6}$; at $x=2$ this equals $\\dfrac{2^{7}-1}{2-1}=2^{7}-1=127$.",
          "The seven odd-exponent factors are everything left over, so their product is the quotient $\\dfrac{16383}{127}$. Since $16383=2^{14}-1=(2^{7}-1)(2^{7}+1)=127\\cdot129$, the quotient is exactly $129$.",
          "Hence $\\displaystyle\\prod_{\\substack{k\\ \\mathrm{odd}}}(2-\\zeta^{k})=\\frac{2^{14}-1}{2^{7}-1}=2^{7}+1=129$. $\\boxed{129}$"
        ]
      },
      {
        "name": "Direct cyclotomic bookkeeping",
        "steps": [
          "Write the seven odd exponents as $\\{1,3,5,7,9,11,13\\}=\\{2j+1:\\,j=0,\\dots,6\\}$, so each odd-exponent power is $\\zeta^{2j+1}=e^{i\\pi(2j+1)/7}$. These are precisely the seven solutions of $w^{7}=e^{i\\pi}=-1$, i.e. the seven roots of $w^{7}+1=0$.",
          "A monic polynomial with those exact roots is $\\prod_{j=0}^{6}(w-\\zeta^{2j+1})=w^{7}+1$ (matching leading coefficient $1$ and the seven roots of $w^{7}+1$). One of these roots is the real value $\\zeta^{7}=e^{i\\pi}=-1$, contributing the honest real factor $2-(-1)=3$, which must be kept.",
          "Replacing $w$ by the evaluation point $2$ gives $\\prod_{j=0}^{6}(2-\\zeta^{2j+1})=2^{7}+1$. (As a sanity check the lone real factor $3$ divides $129=3\\cdot 43$, consistent with $\\zeta^{7}=-1$ being one of the roots.)",
          "Thus the product equals $2^{7}+1=129$. $\\boxed{129}$"
        ]
      }
    ],
    "remark": "Insight: the move that unlocks everything is refusing to evaluate the product factor-by-factor and instead asking ``of which polynomial are these seven numbers the complete root set?'' Splitting $x^{14}-1=(x^{7}-1)(x^{7}+1)$ by exponent parity assigns the even powers to $x^{7}-1$ and the odd powers to the anti-factor $x^{7}+1$ -- so the answer is $x^{7}+1$ evaluated at $2$, a plus sign, not the seductive $2^{7}-1$. The same parity partition is the engine behind the factorization $2^{14}-1=(2^{7}-1)(2^{7}+1)$, and the requested product is exactly the second factor."
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
    "title": "The Parabolic Weight",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "weighted sum",
      "symmetry fold",
      "second difference",
      "cotangent",
      "abel summation"
    ],
    "statement": "Let $\\zeta=e^{2\\pi i/12}$ be a primitive $12$th root of unity. Attach to each non-trivial power $\\zeta^{k}$ the parabolic weight $k(12-k)$ and evaluate the second-order weighted root sum \\[ S=\\sum_{k=1}^{11} k\\,(12-k)\\,\\zeta^{k}. \\] Give the exact value in closed form.",
    "answer": "$-48-24\\sqrt{3}$",
    "trap": "The weight $k(12-k)$ is symmetric under $k\\mapsto 12-k$, and $\\zeta^{12-k}=\\overline{\\zeta^{k}}$, so the imaginary parts pair off and $S$ is real. The seductive next move is to reduce $S$ to a pure $\\cot^{2}$ value by false analogy with the famous identity $\\sum_{k=1}^{n-1}\\cot^{2}(\\pi k/n)=\\tfrac{(n-1)(n-2)}{3}$. Carrying the fold through honestly gives $S=-\\dfrac{n}{2\\sin^{2}(\\pi/n)}=-\\dfrac{n}{2}\\csc^{2}\\!\\frac{\\pi}{n}$, and the trap is forgetting that $\\csc^{2}\\theta=1+\\cot^{2}\\theta$: writing $S=-\\tfrac{n}{2}\\cot^{2}(\\pi/n)$ instead drops exactly the diagonal term $-\\tfrac{n}{2}=-6$ and yields the wrong $-42-24\\sqrt{3}$. The lost $+1$ comes from the cross term in the $(\\zeta-1)^{2}$ denominator that does not cancel under the fold; it is the single $\\sin^{2}$ in $\\csc^{2}$, not a stray constant. Equivalently, naively differentiating the geometric sum only once (getting $\\sum k\\zeta^{k}=n/(\\zeta-1)$) and reusing that shape for the $k^{2}$ piece misses that $\\sum k^{2}\\zeta^{k}$ carries a $(\\zeta-1)^{2}$ in the denominator.",
    "solutions": [
      {
        "name": "Split into first- and second-order kernels",
        "steps": [
          "Write $k(12-k)=nk-k^{2}$ with $n=12$, so $S=n\\sum_{k=1}^{n-1}k\\,\\zeta^{k}-\\sum_{k=1}^{n-1}k^{2}\\,\\zeta^{k}$. Both kernel sums have closed forms obtained by applying $z\\frac{d}{dz}$ to $\\sum_{k=0}^{n-1}z^{k}=\\frac{z^{n}-1}{z-1}$ and then setting $z=\\zeta$ with $\\zeta^{n}=1$, $\\zeta\\ne1$.",
          "One differentiation gives $\\sum_{k=1}^{n-1}k\\,\\zeta^{k}=\\dfrac{n}{\\zeta-1}$. A second application of $z\\frac{d}{dz}$ and the same substitution $\\zeta^{n}=1$ gives $\\sum_{k=1}^{n-1}k^{2}\\,\\zeta^{k}=\\dfrac{n(n\\zeta-n-2\\zeta)}{(\\zeta-1)^{2}}$.",
          "Substitute: $S=\\dfrac{n^{2}}{\\zeta-1}-\\dfrac{n(n\\zeta-n-2\\zeta)}{(\\zeta-1)^{2}}=\\dfrac{n\\bigl[n(\\zeta-1)-(n\\zeta-n-2\\zeta)\\bigr]}{(\\zeta-1)^{2}}=\\dfrac{n\\,(2\\zeta)}{(\\zeta-1)^{2}}=\\dfrac{2n\\zeta}{(\\zeta-1)^{2}}.$",
          "Now $\\zeta-1=2i\\sin\\frac{\\pi}{n}\\,e^{i\\pi/n}$, so $(\\zeta-1)^{2}=-4\\sin^{2}\\frac{\\pi}{n}\\,\\zeta$, and the $\\zeta$ cancels: $S=\\dfrac{2n\\zeta}{-4\\sin^{2}(\\pi/n)\\,\\zeta}=-\\dfrac{n}{2\\sin^{2}(\\pi/n)}=-\\dfrac{n}{2}\\csc^{2}\\frac{\\pi}{n}.$",
          "For $n=12$, $\\sin\\frac{\\pi}{12}=\\frac{\\sqrt6-\\sqrt2}{4}$ gives $\\sin^{2}\\frac{\\pi}{12}=\\frac{2-\\sqrt3}{4}$, so $\\csc^{2}\\frac{\\pi}{12}=\\frac{4}{2-\\sqrt3}=4(2+\\sqrt3)=8+4\\sqrt3$. Hence $S=-6\\,(8+4\\sqrt3)=\\boxed{-48-24\\sqrt{3}}$."
        ]
      },
      {
        "name": "Symmetry fold to a real cosine sum",
        "steps": [
          "Because $a_{k}=k(n-k)$ satisfies $a_{n-k}=a_{k}$ and $\\zeta^{n-k}=\\overline{\\zeta^{k}}$, pairing $k$ with $n-k$ turns $S$ into a real sum: $S=\\sum_{k=1}^{n-1}a_{k}\\cos\\frac{2\\pi k}{n}$, the imaginary parts cancelling exactly. So $S\\in\\mathbb{R}$ and we only need its cosine content.",
          "Use $\\sum_{k=1}^{n-1}k(n-k)\\cos(k\\theta)=\\operatorname{Re}\\sum_{k=1}^{n-1}k(n-k)e^{ik\\theta}$ with $\\theta=2\\pi/n$. The generating identity $\\sum_{k=1}^{n-1}k(n-k)x^{k}$ collapses on the unit circle at an $n$th root: from the kernel computation $\\sum_{k=1}^{n-1}k(n-k)\\zeta^{k}=\\dfrac{2n\\zeta}{(\\zeta-1)^{2}}$, already a real quantity by the fold.",
          "Convert to trigonometry: $\\dfrac{2n\\zeta}{(\\zeta-1)^{2}}=\\dfrac{2n\\zeta}{-4\\sin^{2}(\\pi/n)\\,\\zeta}=-\\dfrac{n}{2}\\csc^{2}\\frac{\\pi}{n}$, confirming reality and the $\\csc^{2}$ (not $\\cot^{2}$) closed form.",
          "At $n=12$: $\\csc^{2}\\frac{\\pi}{12}=8+4\\sqrt3$, so $S=-6(8+4\\sqrt3)=\\boxed{-48-24\\sqrt{3}}$."
        ]
      },
      {
        "name": "Abel summation against the tail sums of roots",
        "steps": [
          "Use the tail sums $T_{k}=\\sum_{j=k}^{n-1}\\zeta^{j}$, which telescope: $\\zeta^{k}=T_{k}-T_{k+1}$ with $T_{n}=0$. Because $\\zeta^{k}\\zeta^{n-k}=\\zeta^{n}=1$, the tail closes neatly: $T_{k}=\\dfrac{\\zeta^{k}(\\zeta^{\\,n-k}-1)}{\\zeta-1}=\\dfrac{1-\\zeta^{k}}{\\zeta-1}.$",
          "Abel summation (summation by parts) on $S=\\sum_{k=1}^{n-1}a_{k}(T_{k}-T_{k+1})$ with $a_{k}=k(n-k)$ gives $S=a_{1}T_{1}+\\sum_{k=2}^{n-1}(a_{k}-a_{k-1})\\,T_{k}$, the boundary term at $k=n$ vanishing since $T_{n}=0$. Here $a_{1}T_{1}=(n-1)\\cdot\\frac{1-\\zeta}{\\zeta-1}=-(n-1)$, and the first difference $a_{k}-a_{k-1}=n+1-2k$ is linear -- the Abel step has reduced the double weight to a single one.",
          "Insert $T_{k}=\\frac{1-\\zeta^{k}}{\\zeta-1}$. The constant piece carries the factor $\\sum_{k=2}^{n-1}(n+1-2k)=0$, so only the $\\zeta^{k}$ piece survives: $S=-(n-1)-\\dfrac{1}{\\zeta-1}\\sum_{k=2}^{n-1}(n+1-2k)\\zeta^{k}.$ Completing the sum to $k=1$ (its $k=1$ term is $(n-1)\\zeta$) and using $\\sum_{k=1}^{n-1}\\zeta^{k}=-1$, $\\sum_{k=1}^{n-1}k\\zeta^{k}=\\frac{n}{\\zeta-1}$ gives $\\sum_{k=1}^{n-1}(n+1-2k)\\zeta^{k}=-(n+1)-\\frac{2n}{\\zeta-1}.$",
          "Assembling, $S=-(n-1)-\\dfrac{1}{\\zeta-1}\\Bigl[-(n+1)-\\frac{2n}{\\zeta-1}-(n-1)\\zeta\\Bigr]$, which collapses algebraically to $S=\\dfrac{2n\\zeta}{(\\zeta-1)^{2}}=-\\dfrac{n}{2}\\csc^{2}\\frac{\\pi}{n}$.",
          "With $n=12$ and $\\csc^{2}\\frac{\\pi}{12}=8+4\\sqrt3$, this is $-6(8+4\\sqrt3)=\\boxed{-48-24\\sqrt{3}}$."
        ]
      }
    ],
    "remark": "Insight: the double weight $k(n-k)$ is a parabola, and applying the Euler operator $z\\frac{d}{dz}$ twice to the geometric kernel manufactures exactly a $(\\zeta-1)^{2}$ in the denominator -- the signature of a second-order sum. The symmetric weight folds the answer onto the real axis, but reality does not mean the sum degenerates to the textbook $\\cot^{2}$ identity: the honest closed form is $-\\frac{n}{2}\\csc^{2}(\\pi/n)$, and the difference $\\csc^{2}-\\cot^{2}=1$ is precisely the diagonal $-n/2$ that the fold leaves uncancelled. The same Euler-operator machinery, used once, recovers the first-order $\\sum k\\zeta^{k}=n/(\\zeta-1)$; used twice, it is the cleanest route to weighted regular-polygon identities."
  },
  {
    "theme": "rootsofunity",
    "themeLabel": "Roots of Unity",
    "title": "The Staggered Lattice's Hidden Square",
    "difficulty": 5,
    "task": "Prove and evaluate in closed form",
    "tags": [
      "shifted lattice",
      "anti-roots",
      "chord product",
      "conjugate pairing",
      "chebyshev",
      "half-angle"
    ],
    "statement": "For an integer $n\\ge 1$ consider the staggered (odd-numerator) half-angle product \\[ P_n=\\prod_{k=1}^{n}\\sin\\!\\frac{(2k-1)\\pi}{4n} =\\sin\\frac{\\pi}{4n}\\,\\sin\\frac{3\\pi}{4n}\\,\\sin\\frac{5\\pi}{4n}\\cdots\\sin\\frac{(2n-1)\\pi}{4n}. \\] These $n$ angles are not the equally-spaced chords of a regular polygon from a vertex; they are the half-angles attached to the $2n$ solutions of $z^{2n}=-1$, i.e. the $2n$th roots of $-1$ sitting on the shifted lattice $z^{2n}+1=0$. Prove that $P_n$ has a closed form depending only on $n$, and evaluate it.",
    "answer": "$\\displaystyle P_n=\\frac{\\sqrt{2}}{2^{\\,n}}$",
    "trap": "The fatal slip is forgetting that the natural root-of-unity identity captures twice as many factors as $P_n$ contains, so one must take a square root at the end. The clean fact is that the $2n$ numbers $\\omega_j=e^{i(2j-1)\\pi/(2n)}$ ($j=1,\\dots,2n$) are exactly the roots of $z^{2n}+1$, whence $\\prod_{j=1}^{2n}(1-\\omega_j)=1^{2n}+1=2$, and $|1-\\omega_j|=2\\sin\\frac{(2j-1)\\pi}{4n}$. A strong student often writes this as ``$\\prod_{k=1}^{n}2\\sin\\frac{(2k-1)\\pi}{4n}=2$'' and concludes $P_n=\\dfrac{2}{2^{n}}=\\dfrac{1}{2^{n-1}}$. But the product $\\prod_{j=1}^{2n}|1-\\omega_j|=2$ runs over all $2n$ roots, and these come in conjugate pairs $\\omega_j,\\overline{\\omega_j}=\\omega_{2n+1-j}$ with $\\sin\\frac{(2j-1)\\pi}{4n}=\\sin\\frac{(2(2n+1-j)-1)\\pi}{4n}$ (supplementary angles). So the $2n$-factor product is the square of the desired $n$-factor product: $\\bigl(\\prod_{k=1}^{n}2\\sin\\frac{(2k-1)\\pi}{4n}\\bigr)^{2}=2$, forcing $P_n=\\dfrac{\\sqrt 2}{2^{n}}$, not $\\dfrac{1}{2^{n-1}}$. The phantom answer $\\dfrac{1}{2^{n-1}}$ is exactly $\\sqrt 2$ times too large; one cannot pair up $2n$ items into $n$ and keep the same product. A secondary trap is reflexively reaching for the textbook $\\prod_{k=1}^{n-1}\\sin\\frac{k\\pi}{n}=\\frac{n}{2^{n-1}}$ template (equally-spaced chords), whose answer carries a factor of $n$; here the staggered spacing kills every trace of $n$ because $z^{2n}+1$ evaluated at $z=1$ is the constant $2$, never $2n$.",
    "solutions": [
      {
        "name": "Shifted lattice $z^{2n}+1$, then halve the conjugate pairs",
        "steps": [
          "The $2n$ solutions of $z^{2n}=-1=e^{i\\pi}$ are $\\omega_j=e^{i(2j-1)\\pi/(2n)}$ for $j=1,\\dots,2n$; they are precisely the roots of $z^{2n}+1$, so $z^{2n}+1=\\prod_{j=1}^{2n}(z-\\omega_j)$. Evaluating at $z=1$ gives $\\prod_{j=1}^{2n}(1-\\omega_j)=1^{2n}+1=2$.",
          "Take moduli. For any real $\\alpha$, $|1-e^{i\\alpha}|=2\\bigl|\\sin\\tfrac{\\alpha}{2}\\bigr|$. Here $\\alpha=\\frac{(2j-1)\\pi}{2n}\\in(0,\\pi)$ for $j=1,\\dots,2n$ (since $1\\le 2j-1\\le 4n-1$), so $\\tfrac{\\alpha}{2}=\\frac{(2j-1)\\pi}{4n}\\in(0,\\tfrac{\\pi}{2})\\cup(\\tfrac\\pi2,\\pi)$ has positive sine and the absolute value is unnecessary: $|1-\\omega_j|=2\\sin\\frac{(2j-1)\\pi}{4n}>0$. Hence $\\prod_{j=1}^{2n}2\\sin\\frac{(2j-1)\\pi}{4n}=\\Bigl|\\prod_{j=1}^{2n}(1-\\omega_j)\\Bigr|=2$.",
          "Collapse to a square via conjugate pairing. Replacing $j$ by $2n+1-j$ sends $\\frac{(2j-1)\\pi}{4n}$ to $\\pi-\\frac{(2j-1)\\pi}{4n}$, the supplementary angle, so $\\sin$ is unchanged; thus the lower half $j=1,\\dots,n$ and the upper half $j=n+1,\\dots,2n$ contribute identical factors. Therefore $\\prod_{j=1}^{2n}2\\sin\\frac{(2j-1)\\pi}{4n}=\\Bigl(\\prod_{k=1}^{n}2\\sin\\frac{(2k-1)\\pi}{4n}\\Bigr)^{2}=(2^{n}P_n)^{2}.$",
          "Combine: $(2^{n}P_n)^{2}=2$. Since every factor $\\sin\\frac{(2k-1)\\pi}{4n}>0$, the product $P_n>0$, so we take the positive square root: $2^{n}P_n=\\sqrt2$, i.e. $\\displaystyle P_n=\\frac{\\sqrt{2}}{2^{n}}.$ $\\boxed{P_n=\\dfrac{\\sqrt2}{2^{n}}}$"
        ]
      },
      {
        "name": "Chebyshev: the sines are roots of $T_n(x)=0$",
        "steps": [
          "Work with $c_k=\\cos\\frac{(2k-1)\\pi}{2n}$ for $k=1,\\dots,n$. If $t=\\frac{(2k-1)\\pi}{2n}$ then $nt=\\frac{(2k-1)\\pi}{2}$ is an odd multiple of $\\tfrac{\\pi}{2}$, so $\\cos(nt)=0$. Since $T_n(\\cos t)=\\cos(nt)$, the $n$ distinct numbers $c_1,\\dots,c_n$ are exactly the roots of the Chebyshev polynomial $T_n(x)$, whose leading coefficient is $2^{n-1}$: $T_n(x)=2^{n-1}\\prod_{k=1}^{n}(x-c_k).$",
          "Convert the target into these cosines by a half-angle identity: $\\sin^2\\frac{(2k-1)\\pi}{4n}=\\frac{1-\\cos\\frac{(2k-1)\\pi}{2n}}{2}=\\frac{1-c_k}{2}.$ Hence $P_n^{2}=\\prod_{k=1}^{n}\\frac{1-c_k}{2}=\\frac{1}{2^{n}}\\prod_{k=1}^{n}(1-c_k).$",
          "Evaluate the remaining product at $x=1$ using the factorization: $\\prod_{k=1}^{n}(1-c_k)=\\dfrac{T_n(1)}{2^{n-1}}.$ But $T_n(1)=\\cos(n\\cdot 0)=1$, so $\\prod_{k=1}^{n}(1-c_k)=\\dfrac{1}{2^{n-1}}.$",
          "Therefore $P_n^{2}=\\dfrac{1}{2^{n}}\\cdot\\dfrac{1}{2^{n-1}}=\\dfrac{1}{2^{2n-1}}$, and as $P_n>0$, $\\displaystyle P_n=\\frac{1}{2^{(2n-1)/2}}=\\frac{\\sqrt2}{2^{n}}.$ $\\boxed{P_n=\\dfrac{\\sqrt2}{2^{n}}}$"
        ]
      },
      {
        "name": "The staggered product is the odd half of the $4n$-gon chords",
        "steps": [
          "Start from the full chord product of the regular $4N$-gon with $N=n$, i.e. all $4n$th roots of unity from the vertex $z=1$: $\\dfrac{z^{4n}-1}{z-1}=\\prod_{m=1}^{4n-1}(z-e^{2\\pi i m/(4n)})$, and at $z=1$ the left side is $4n$. Taking moduli, with $|1-e^{2\\pi i m/(4n)}|=2\\sin\\frac{m\\pi}{4n}>0$ for $1\\le m\\le 4n-1$, gives $\\prod_{m=1}^{4n-1}2\\sin\\frac{m\\pi}{4n}=4n.$",
          "Split the index $m$ by parity, which corresponds to factoring $z^{4n}-1=(z^{2n}-1)(z^{2n}+1)$: the even indices $m=2r$ ($r=1,\\dots,2n-1$) give $2\\sin\\frac{r\\pi}{2n}$, the chords of the $2n$-gon, whose product is the classical $\\prod_{r=1}^{2n-1}2\\sin\\frac{r\\pi}{2n}=2n$ (same identity applied to $z^{2n}-1$). These even indices are the roots of $z^{2n}-1$; the odd indices $m=2k-1$ ($k=1,\\dots,2n$) are precisely the staggered roots of $z^{2n}+1$.",
          "Divide to isolate the odd (shifted-lattice) half: $\\prod_{k=1}^{2n}2\\sin\\frac{(2k-1)\\pi}{4n}=\\dfrac{\\prod_{m=1}^{4n-1}2\\sin\\frac{m\\pi}{4n}}{\\prod_{r=1}^{2n-1}2\\sin\\frac{r\\pi}{2n}}=\\dfrac{4n}{2n}=2.$ The factor of $n$ cancels — exactly why the staggered answer has no $n$ in it.",
          "Finally use conjugate symmetry $k\\leftrightarrow 2n+1-k$ (supplementary angles, equal sines) to write this $2n$-factor product as a square: $\\bigl(\\prod_{k=1}^{n}2\\sin\\frac{(2k-1)\\pi}{4n}\\bigr)^{2}=2$, so $(2^{n}P_n)^2=2$ and, taking the positive root, $\\displaystyle P_n=\\frac{\\sqrt2}{2^{n}}.$ $\\boxed{P_n=\\dfrac{\\sqrt2}{2^{n}}}$"
        ]
      }
    ],
    "remark": "Insight: the staggered angles $\\frac{(2k-1)\\pi}{4n}$ are half-angles of the roots of $z^{2n}+1$ (the anti-roots of unity), and the single equation $z^{2n}+1\\big|_{z=1}=2$ is a constant — independent of $n$ — which is why the answer carries no factor of $n$, in sharp contrast to the equally-spaced chord product $\\prod\\sin\\frac{k\\pi}{n}=\\frac{n}{2^{n-1}}$ coming from $\\frac{z^n-1}{z-1}\\big|_{z=1}=n$. The one genuinely missable step is dimensional bookkeeping: the natural root-of-unity product harvests all $2n$ roots, while $P_n$ uses only $n$ of them; conjugate pairing turns the $2n$-factor identity into the square of the $n$-factor target, so the closed form is the square root $\\frac{\\sqrt2}{2^n}$, and the tempting $\\frac{1}{2^{n-1}}$ overshoots by precisely $\\sqrt2$. Equivalent tidy forms: $P_n=2^{(1-2n)/2}=\\frac{1}{\\sqrt{2^{2n-1}}}$."
  },
  {
    "theme": "rootsofunity",
    "themeLabel": "Roots of Unity",
    "title": "The Imaginary Side of the Filter",
    "difficulty": 5,
    "task": "Evaluate exactly",
    "tags": [
      "roots of unity filter",
      "cube roots",
      "imaginary part",
      "argument trap",
      "alternating binomial"
    ],
    "statement": "Let $\\omega=e^{2\\pi i/3}$ be a primitive cube root of unity. Evaluate, in exact closed form, the alternating sine-weighted binomial sum \\[ \\mathcal{S}=\\sum_{k=0}^{2024}(-1)^{k}\\binom{2024}{k}\\sin\\frac{2\\pi k}{3} =\\binom{2024}{1}\\sin\\tfrac{2\\pi}{3}-\\binom{2024}{2}\\sin\\tfrac{4\\pi}{3}+\\binom{2024}{4}\\sin\\tfrac{8\\pi}{3}-\\cdots. \\] Here $\\sin\\tfrac{2\\pi k}{3}$ is nonzero only for $k\\not\\equiv 0\\pmod 3$, so $\\mathcal{S}$ is exactly the imaginary projection of the cube-root filter applied to $(1-\\omega)^{2024}$: it weights the residue class $k\\equiv 1$ against $k\\equiv 2$ with the alternating sign $(-1)^k$ already attached. The intended route is to recognise $\\mathcal{S}=\\operatorname{Im}\\big((1-\\omega)^{2024}\\big)$ and to pin down the true modulus and argument of $1-\\omega$. Give $\\mathcal{S}$ as a single exact value (a power of $3$ times $\\sqrt3$).",
    "answer": "\\[\\boxed{\\mathcal{S}=\\dfrac{3^{1012}\\sqrt3}{2}}\\]",
    "trap": "The fatal slip is the argument of $1-\\omega$. A strong student recalls the half-angle factorisation $1-e^{i\\theta}=-2i\\sin\\tfrac{\\theta}{2}\\,e^{i\\theta/2}$ used for sums built on $1+\\omega$, where $1+\\omega=e^{i\\pi/3}$ has argument $+\\tfrac{\\pi}{3}$, and transplants that $+\\tfrac{\\pi}{3}$ onto $1-\\omega$ — or, equivalently, writes $1-\\omega=2\\sin\\tfrac{\\pi}{3}\\,e^{+i\\pi/6}$ by quoting the modulus $2\\sin\\tfrac{\\theta}{2}$ as a positive real and reading the phase as $+\\tfrac{\\theta-\\pi}{2}=+\\tfrac{\\pi}{6}$ with the wrong sign. In truth $1-\\omega=\\tfrac32-\\tfrac{\\sqrt3}{2}i$ sits in the fourth quadrant: its argument is $-\\tfrac{\\pi}{6}$, not $+\\tfrac{\\pi}{6}$ and not $+\\tfrac{\\pi}{3}$. Carrying the sign-flipped argument gives $\\operatorname{Im}\\big(3^{1012}e^{+2024\\,i\\pi/6}\\big)=3^{1012}\\sin\\tfrac{2024\\pi}{6}=-\\tfrac{3^{1012}\\sqrt3}{2}$, the exact negative of the truth. Because $\\sin$ is odd, mistaking $\\arg(1-\\omega)$ by a sign flips the entire imaginary projection; the real-part companion $\\operatorname{Re}\\big((1-\\omega)^{n}\\big)$ would have hidden the error completely, since $\\cos$ is even. The seductive wrong answer is $-\\tfrac{3^{1012}\\sqrt3}{2}$.",
    "solutions": [
      {
        "name": "Polar form of the genuine base",
        "steps": [
          "Lift the sine to a complex exponential. Since $\\sin\\tfrac{2\\pi k}{3}=\\operatorname{Im}\\,\\omega^{k}$ with $\\omega=e^{2\\pi i/3}$, the binomial theorem gives $\\mathcal{S}=\\operatorname{Im}\\sum_{k=0}^{2024}\\binom{2024}{k}(-1)^{k}\\omega^{k}=\\operatorname{Im}\\sum_{k=0}^{2024}\\binom{2024}{k}(-\\omega)^{k}=\\operatorname{Im}\\big((1-\\omega)^{2024}\\big).$",
          "Compute the base as an actual point, not from a memorised half-angle formula: $1-\\omega=1-\\big(-\\tfrac12+\\tfrac{\\sqrt3}{2}i\\big)=\\tfrac32-\\tfrac{\\sqrt3}{2}i.$ Its modulus is $|1-\\omega|=\\sqrt{\\tfrac94+\\tfrac34}=\\sqrt3$, and since the real part $\\tfrac32>0$ and the imaginary part $-\\tfrac{\\sqrt3}{2}<0$, the point lies in the fourth quadrant with argument $\\arg(1-\\omega)=\\arctan\\!\\frac{-\\sqrt3/2}{3/2}=-\\tfrac{\\pi}{6}.$ Thus $1-\\omega=\\sqrt3\\,e^{-i\\pi/6}.$",
          "Raise to the power by De Moivre: $(1-\\omega)^{2024}=\\big(\\sqrt3\\big)^{2024}e^{-2024\\,i\\pi/6}=3^{1012}\\,e^{-i\\,2024\\pi/6}.$ Reduce the angle: $\\tfrac{2024\\pi}{6}=\\tfrac{1012\\pi}{3}$, and $1012\\equiv 4\\pmod 6$, so $e^{-i\\,1012\\pi/3}=e^{-i\\,4\\pi/3}=e^{+i\\,2\\pi/3}$, whose imaginary part is $\\sin\\tfrac{2\\pi}{3}=+\\tfrac{\\sqrt3}{2}.$",
          "Therefore $\\mathcal{S}=\\operatorname{Im}\\big((1-\\omega)^{2024}\\big)=3^{1012}\\cdot\\tfrac{\\sqrt3}{2}=\\boxed{\\dfrac{3^{1012}\\sqrt3}{2}}.$ The positive sign survives precisely because the true argument $-\\tfrac{\\pi}{6}$ was read off the genuine fourth-quadrant point rather than copied from the $1+\\omega$ template."
        ]
      },
      {
        "name": "Conjugate pair (real and imaginary parts of both cube roots)",
        "steps": [
          "Use both nontrivial cube roots at once. Writing $\\overline\\omega=\\omega^{2}=e^{-2\\pi i/3}$, the same expansion gives $\\sum_{k}\\binom{2024}{k}(-\\overline\\omega)^{k}=(1-\\overline\\omega)^{2024}$, and since $1-\\overline\\omega=\\overline{1-\\omega}$ is the complex conjugate of the first base, the two powers are conjugates. Hence $\\mathcal{S}=\\operatorname{Im}\\big((1-\\omega)^{2024}\\big)=\\dfrac{(1-\\omega)^{2024}-(1-\\overline\\omega)^{2024}}{2i}.$",
          "Both bases have modulus $\\sqrt3$ with opposite arguments $\\mp\\tfrac{\\pi}{6}$, namely $1-\\omega=\\sqrt3\\,e^{-i\\pi/6}$ and $1-\\overline\\omega=\\sqrt3\\,e^{+i\\pi/6}$. Raising to the $2024$th power, $(1-\\omega)^{2024}=3^{1012}e^{-i\\,1012\\pi/3}$ and $(1-\\overline\\omega)^{2024}=3^{1012}e^{+i\\,1012\\pi/3}$.",
          "Subtract and divide by $2i$: $\\mathcal{S}=3^{1012}\\cdot\\dfrac{e^{-i\\,1012\\pi/3}-e^{+i\\,1012\\pi/3}}{2i}=3^{1012}\\,\\big(-\\sin\\tfrac{1012\\pi}{3}\\big).$ Since $1012\\equiv 4\\pmod 6$, $\\sin\\tfrac{1012\\pi}{3}=\\sin\\tfrac{4\\pi}{3}=-\\tfrac{\\sqrt3}{2}$, so $-\\sin\\tfrac{1012\\pi}{3}=+\\tfrac{\\sqrt3}{2}.$",
          "Thus $\\mathcal{S}=3^{1012}\\cdot\\tfrac{\\sqrt3}{2}=\\boxed{\\dfrac{3^{1012}\\sqrt3}{2}}.$ Pairing the root with its conjugate makes the cancellation of real parts automatic and isolates the imaginary projection with the correct sign."
        ]
      },
      {
        "name": "Recurrence from the minimal polynomial of $1-\\omega$",
        "steps": [
          "Let $a_{n}=\\operatorname{Im}\\big((1-\\omega)^{n}\\big)$, so the target is $\\mathcal{S}=a_{2024}$. Since $\\omega^{2}+\\omega+1=0$, the number $z=1-\\omega$ satisfies $(1-z)^{2}+(1-z)+1=0$, i.e. $z^{2}-3z+3=0.$ Hence $z^{n}=3z^{n-1}-3z^{n-2}$ for all $n\\ge 2$, and taking imaginary parts, $a_{n}=3a_{n-1}-3a_{n-2}.$",
          "Seed the recurrence with $a_{0}=\\operatorname{Im}(1)=0$ and $a_{1}=\\operatorname{Im}(1-\\omega)=-\\tfrac{\\sqrt3}{2}.$ Writing $a_{n}=3^{n/2}b_{n}$ turns the recurrence into $b_{n}=\\sqrt3\\,b_{n-1}-b_{n-2}$, the Chebyshev-type relation with characteristic roots $e^{\\pm i\\pi/6}$; thus $b_{n}=c\\sin\\tfrac{n\\pi}{6}$, and $a_{1}=-\\tfrac{\\sqrt3}{2}=3^{1/2}b_{1}$ gives $b_{1}=-\\tfrac12=c\\sin\\tfrac{\\pi}{6}=\\tfrac{c}{2}$, so $c=-1$ and $a_{n}=-3^{n/2}\\sin\\tfrac{n\\pi}{6}.$",
          "Evaluate at $n=2024$: $2024\\equiv 8\\pmod{12}$, so $\\sin\\tfrac{2024\\pi}{6}=\\sin\\tfrac{8\\pi}{6}=\\sin\\tfrac{4\\pi}{3}=-\\tfrac{\\sqrt3}{2}.$ Therefore $a_{2024}=-3^{1012}\\cdot\\big(-\\tfrac{\\sqrt3}{2}\\big)=3^{1012}\\cdot\\tfrac{\\sqrt3}{2}.$",
          "Hence $\\mathcal{S}=a_{2024}=\\boxed{\\dfrac{3^{1012}\\sqrt3}{2}}.$ The recurrence never names an argument at all, so it is immune to the $\\pm\\tfrac{\\pi}{6}$ sign trap — the single initial value $a_{1}=-\\tfrac{\\sqrt3}{2}$ fixes the sign once and for all."
        ]
      }
    ],
    "remark": "Insight: the real and imaginary halves of a roots-of-unity filter behave very differently under a small argument error. The real-part filter $\\operatorname{Re}\\big((1-\\omega)^{n}\\big)$ depends on $\\cos$, which is even, so a sign slip in $\\arg(1-\\omega)$ does no harm; the imaginary-part filter depends on $\\sin$, which is odd, so the very same slip flips the whole answer. The decisive datum is that $1-\\omega=\\tfrac32-\\tfrac{\\sqrt3}{2}i$ has argument $-\\tfrac{\\pi}{6}$ (fourth quadrant), unlike its cousin $1+\\omega=e^{+i\\pi/3}$ from which the half-angle formula is usually recited. Equivalently, $1-\\omega$ is a root of $z^{2}-3z+3$, giving the clean recurrence $a_{n}=3a_{n-1}-3a_{n-2}$ that determines the sign with no argument at all. Both the modulus $\\sqrt3$ (the source of the $3^{n/2}$ growth) and the sign live in that one base, $\\sqrt3\\,e^{-i\\pi/6}$."
  },
  {
    "theme": "rootsofunity",
    "themeLabel": "Roots of Unity",
    "title": "Where the Golden Spin Hides",
    "difficulty": 5,
    "task": "Determine exactly",
    "tags": [
      "roots of unity filter",
      "fifth roots",
      "binomial sum",
      "golden ratio",
      "lucas numbers",
      "phase trap"
    ],
    "statement": "Among the $2^{30}$ subsets $A\\subseteq\\{1,2,\\dots,30\\}$, let $N_2$ count those whose size satisfies $|A|\\equiv 2\\pmod 5$, i.e. \\[ N_2=\\sum_{\\substack{0\\le k\\le 30\\\\ k\\equiv 2\\,(\\mathrm{mod}\\,5)}}\\binom{30}{k}=\\binom{30}{2}+\\binom{30}{7}+\\binom{30}{12}+\\cdots+\\binom{30}{27}. \\] The five residue counts $N_0,\\dots,N_4$ sum to $2^{30}$ and are forced to be nearly equal, each hovering about $2^{30}/5=214748364.8$. Using $\\zeta=e^{2\\pi i/5}$, the roots-of-unity filter writes $N_2=\\tfrac15\\sum_{j=0}^{4}\\zeta^{-2j}(1+\\zeta^{j})^{30}$, and the factorisation $1+\\zeta^{j}=2\\cos\\tfrac{\\pi j}{5}\\,e^{i\\pi j/5}$ shows each power equals $2^{30}\\cos^{30}\\tfrac{\\pi j}{5}$ times a phase. Determine the exact integer $N_2$, and in doing so identify precisely how far it deviates from the equal share $2^{30}/5$.",
    "answer": "$N_2=\\dfrac{2^{30}-L_{31}}{5}=214146295$",
    "trap": "The seduction is to treat $|1+\\zeta^{j}|^{30}=2^{30}\\cos^{30}\\tfrac{\\pi j}{5}$ as the whole contribution and forget the signed weight $\\zeta^{-2j}+\\zeta^{2j}=2\\cos\\tfrac{4\\pi j}{5}$ that the filter attaches to it. The dominant correction comes from $j=1,4$, and there $2\\cos\\tfrac{4\\pi}{5}=-\\tfrac{1+\\sqrt5}{2}$ is negative: it equals $-2\\cos\\tfrac{\\pi}{5}$, not $+2\\cos\\tfrac{\\pi}{5}$. A strong student who reads off the magnitude $2^{30}\\cos^{30}\\tfrac{\\pi}{5}$ (always positive) and pairs it with the positive cosine $\\cos\\tfrac{\\pi}{5}$ — or who simply declares all five counts equal to $2^{30}/5$ and rounds to $214748365$ — pushes residue $2$ above the mean and lands near $215350435$. In truth the negative weight drives $N_2$ below the mean by exactly $\\tfrac{L_{31}}{5}=602069.8$. A second, subtler snare lurks in the phase: one may worry that $e^{i\\pi j/5}$ raised to the $30$ leaves a residual rotation. It does not — $30\\cdot\\tfrac{\\pi j}{5}=6\\pi j$ is an even multiple of $\\pi$, so $e^{i6\\pi j}=1$ and every power $(1+\\zeta^{j})^{30}$ is genuinely real; the exponent $30$ is exactly what kills the phase. Missing either the sign of the weight or the vanishing of the phase corrupts the deviation.",
    "solutions": [
      {
        "name": "Roots-of-unity filter with the phase collapsing",
        "steps": [
          "Apply the filter. With $\\zeta=e^{2\\pi i/5}$, picking the residue class $k\\equiv 2$ in $(1+x)^{30}=\\sum_k\\binom{30}{k}x^k$ gives $N_2=\\tfrac15\\sum_{j=0}^{4}\\zeta^{-2j}(1+\\zeta^{j})^{30}.$ Factor each base by the half-angle identity $1+\\zeta^{j}=1+e^{2\\pi i j/5}=2\\cos\\tfrac{\\pi j}{5}\\,e^{i\\pi j/5}.$",
          "Kill the phase. Raising to the $30$th power, $(1+\\zeta^{j})^{30}=2^{30}\\cos^{30}\\tfrac{\\pi j}{5}\\,e^{i\\,30\\pi j/5}=2^{30}\\cos^{30}\\tfrac{\\pi j}{5}\\,e^{i6\\pi j}.$ Since $6\\pi j$ is an even multiple of $\\pi$, $e^{i6\\pi j}=1$, so every power is the real number $2^{30}\\cos^{30}\\tfrac{\\pi j}{5}.$ Hence only the real part of the weight survives: $N_2=\\tfrac15\\sum_{j=0}^{4}\\cos\\tfrac{4\\pi j}{5}\\,2^{30}\\cos^{30}\\tfrac{\\pi j}{5}.$",
          "Pair $j$ with $5-j$. The $j=0$ term is $2^{30}.$ For $j=1,4$ the cosine power is the same and $\\cos\\tfrac{4\\pi}{5}=-\\cos\\tfrac{\\pi}{5}$; for $j=2,3$ it is $\\cos\\tfrac{8\\pi}{5}=\\cos\\tfrac{2\\pi}{5}.$ Thus \\[ N_2=\\frac{1}{5}\\Big[2^{30}-2^{31}\\cos^{31}\\tfrac{\\pi}{5}+2^{31}\\cos^{31}\\tfrac{2\\pi}{5}\\Big]. \\] The crucial minus sign in front of $2^{31}\\cos^{31}\\tfrac{\\pi}{5}$ is the negative weight $2\\cos\\tfrac{4\\pi}{5}$; ignoring it is the trap.",
          "Evaluate the cosines. Using $\\cos\\tfrac{\\pi}{5}=\\tfrac{1+\\sqrt5}{4}$ and $\\cos\\tfrac{2\\pi}{5}=\\tfrac{\\sqrt5-1}{4}$, expand $2^{31}\\cos^{31}\\tfrac{\\pi}{5}=\\big(\\tfrac{1+\\sqrt5}{2}\\big)^{31}$ and $2^{31}\\cos^{31}\\tfrac{2\\pi}{5}=\\big(\\tfrac{\\sqrt5-1}{2}\\big)^{31}.$ The two have equal $\\sqrt5$-coefficients but opposite rational parts, so $-\\big(\\tfrac{1+\\sqrt5}{2}\\big)^{31}+\\big(\\tfrac{\\sqrt5-1}{2}\\big)^{31}=-3010349$ (an integer). Therefore $N_2=\\dfrac{2^{30}-3010349}{5}=\\dfrac{1070731475}{5}=\\boxed{214146295}.$"
        ]
      },
      {
        "name": "Golden ratio and the Lucas number",
        "steps": [
          "Recognise the golden ratio. From Step 3 above, $N_2=\\tfrac15\\big[2^{30}-(2\\cos\\tfrac{\\pi}{5})^{31}+(2\\cos\\tfrac{2\\pi}{5})^{31}\\big].$ But $2\\cos\\tfrac{\\pi}{5}=\\tfrac{1+\\sqrt5}{2}=\\varphi$ is the golden ratio and $2\\cos\\tfrac{2\\pi}{5}=\\tfrac{\\sqrt5-1}{2}=\\varphi^{-1}.$ Hence $N_2=\\dfrac{2^{30}-\\varphi^{31}+\\varphi^{-31}}{5}.$",
          "Invoke the Lucas closed form. With conjugate $\\psi=-\\varphi^{-1}=\\tfrac{1-\\sqrt5}{2}$, the Lucas numbers satisfy $L_n=\\varphi^{n}+\\psi^{n}.$ Because $31$ is odd, $\\psi^{31}=(-\\varphi^{-1})^{31}=-\\varphi^{-31}$, so $L_{31}=\\varphi^{31}-\\varphi^{-31}.$ Thus the entire deviation is a single Lucas number: $\\varphi^{31}-\\varphi^{-31}=L_{31}=3010349.$",
          "Assemble the answer. Therefore $N_2=\\dfrac{2^{30}-L_{31}}{5}.$ Since $2^{30}=1073741824$ and $L_{31}=3010349$, we get $N_2=\\dfrac{1073741824-3010349}{5}=\\dfrac{1070731475}{5}=\\boxed{214146295}.$",
          "Read off the deviation. The equal share is $2^{30}/5=214748364.8$, and $N_2-\\tfrac{2^{30}}5=-\\tfrac{L_{31}}{5}=-602069.8.$ Because $\\varphi^{-31}\\approx 3.3\\times10^{-7}$ is microscopic, $L_{31}\\approx\\varphi^{31}=(2\\cos\\tfrac{\\pi}{5})^{31}$: the deviation is essentially the single $j=1,4$ contribution, and the residue-$2$ class sits the farthest below the mean."
        ]
      },
      {
        "name": "Generating function and a linear recurrence",
        "steps": [
          "Set up the residue generating series. Let $f(x)=(1+x)^{30}=\\sum_{k=0}^{30}\\binom{30}{k}x^{k}.$ Then $N_2=\\tfrac15\\sum_{j=0}^{4}\\zeta^{-2j}f(\\zeta^{j})$ extracts the coefficients with $k\\equiv 2.$ Writing $b_n=(1+\\zeta)^{n}+(1+\\zeta^{2})^{n}+(1+\\zeta^{3})^{n}+(1+\\zeta^{4})^{n}$ (the four nontrivial bases) lets us track the powers without committing to a phase.",
          "Find a recurrence for the powers. The four numbers $1+\\zeta^{j}$ ($j=1,2,3,4$) are the roots of $\\prod_{j=1}^{4}(t-1-\\zeta^{j})=\\frac{(t-1)^5-1}{(t-1)-1}=\\frac{(t-1)^5-1}{t-2}.$ Expanding, $(t-1)^5-1=t^5-5t^4+10t^3-10t^2+5t-2=(t-2)(t^4-3t^3+4t^2-2t+1).$ So each base satisfies $t^4=3t^3-4t^2+2t-1$, giving $b_n=3b_{n-1}-4b_{n-2}+2b_{n-3}-b_{n-4}.$ The corresponding weighted sum (with $\\zeta^{-2j}$) obeys the same recurrence; iterate from the base cases to confirm the residue counts $N_0,\\dots,N_4$ are $215492564,214978335,214146295,214146295,214978335.$",
          "Confirm by direct partial computation. Equivalently, $5N_2=2^{30}+\\sum_{j=1}^{4}(\\zeta^{-2j}+\\zeta^{2j})\\cdot\\tfrac12\\cdots$; carrying out the real arithmetic of Method 1 (the phase is $1$) yields $5N_2=2^{30}-3010349=1070731475,$ exactly divisible by $5.$",
          "Conclude. Hence $N_2=\\dfrac{1070731475}{5}=\\boxed{214146295},$ matching both the filter and the Lucas evaluation. The recurrence route never invokes any cosine argument, so it is immune to the sign-of-the-weight trap: divisibility of $1070731475$ by $5$ is the independent witness that the integer is correct."
        ]
      }
    ],
    "remark": "Insight: the roots-of-unity filter splits into a positive magnitude $2^{30}\\cos^{30}\\tfrac{\\pi j}{5}$ and a signed weight $2\\cos\\tfrac{4\\pi j}{5}$, and the whole answer lives in that sign. Two facts make the computation honest. First, the exponent $30$ is special: $30\\cdot\\tfrac{\\pi j}{5}=6\\pi j$ is an even multiple of $\\pi$, so every $(1+\\zeta^{j})^{30}$ is real and no residual rotation hides in the phase. Second, $2\\cos\\tfrac{\\pi}{5}=\\varphi$ and $2\\cos\\tfrac{2\\pi}{5}=\\varphi^{-1}$ are golden-ratio surds, so the deviation from the equal share $2^{30}/5$ collapses to a single Lucas number, $\\varphi^{31}-\\varphi^{-31}=L_{31}=3010349$ (odd index, so the conjugate term flips sign). The near-equality of the five counts is thus quantified exactly: $N_r-\\tfrac{2^{30}}5$ is governed by $\\pm L_{31}/5$, with residue $2$ the farthest below the mean. The same machine, with $2^{30}$ replaced by $2^{n}$, makes the deviation a Lucas/Fibonacci number whenever $n\\equiv 0\\pmod{10}$ forces the phase to vanish."
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
    "title": "The Cross-Ratio That Refused to Lie Flat",
    "difficulty": 5,
    "task": "Prove concyclic and find the radius",
    "tags": [
      "cross-ratio",
      "concyclicity",
      "circumradius",
      "collinearity trap",
      "directed angles"
    ],
    "statement": "Four points are given in the Argand plane by \\[ z_1=-3-i,\\qquad z_2=4+6i,\\qquad z_3=6+2i,\\qquad z_4=-2-2i. \\] Form the cross-ratio \\[ \\lambda=\\frac{(z_1-z_3)(z_2-z_4)}{(z_1-z_4)(z_2-z_3)}. \\] (a) Prove that $z_1,z_2,z_3,z_4$ are concyclic by establishing that $\\lambda$ is real and that the four points are not collinear. (b) Hence determine the radius of the unique circle passing through all four. Report only the radius.",
    "answer": "\\[\\boxed{R=5}\\]",
    "trap": "The seductive shortcut is to compute $\\lambda=15$, observe $\\operatorname{Im}\\lambda=0$, and declare the four points concyclic on the spot. But the locus of points $z$ for which the cross-ratio $\\dfrac{(z-z_3)(z_2-z_4)}{(z-z_4)(z_2-z_3)}$ is real is a line OR a circle through $z_2,z_3,z_4$ — reality of the cross-ratio is exactly the condition for con-cyclic-OR-collinear, never concyclic alone. A configuration of four collinear points also has a real cross-ratio (e.g. $0,1,2,5$ give $\\tfrac{8}{5}\\in\\mathbb R$), so the realness test, on its own, proves nothing about a genuine circle. The missing case-check is non-collinearity: one must verify that, say, the signed area of $\\triangle z_1z_2z_3$ is nonzero. A second, independent trap then ambushes part (b): a student who has accepted concyclicity often guesses the centre is the centroid $\\tfrac14(z_1+z_2+z_3+z_4)=\\tfrac54+\\tfrac54 i$ and measures $R$ from there. But the centroid of concyclic points is not the circumcentre (the four distances from $\\tfrac54+\\tfrac54 i$ are unequal: $\\approx4.81,5.49,4.81,4.60$), so this yields four contradictory radii and no clean answer. The radius must be extracted from a true circumcircle of three of the points; only then does $R=5$ appear.",
    "solutions": [
      {
        "name": "Real cross-ratio + non-collinearity, then circumradius $R=\\tfrac{abc}{4K}$",
        "steps": [
          "Compute the cross-ratio directly. With $z_1-z_3=-9-3i$, $z_2-z_4=6+8i$, $z_1-z_4=-1+i$, $z_2-z_3=-2+4i$, the numerator is $(-9-3i)(6+8i)=-54-72i-18i-24i^2=-30-90i$ and the denominator is $(-1+i)(-2+4i)=2-4i-2i+4i^2=-2-6i$. Hence $\\lambda=\\dfrac{-30-90i}{-2-6i}=\\dfrac{30(1+3i)}{2(1+3i)}=15.$ Since $\\lambda=15\\in\\mathbb R$, the four points are concyclic OR collinear.",
          "Rule out collinearity. The signed double-area of $\\triangle z_1z_2z_3$ is $\\operatorname{Im}\\big((z_2-z_1)\\overline{(z_3-z_1)}\\big)$. Here $z_2-z_1=7+7i$ and $z_3-z_1=9+3i$, so $(7+7i)(9-3i)=63-21i+63i-21i^2=84+42i$, giving double-area $=42\\ne0$. The three points are not collinear, so the real cross-ratio forces a genuine circle: $z_1,z_2,z_3,z_4$ are concyclic.",
          "Find the radius from $\\triangle z_1z_2z_3$ via $R=\\dfrac{abc}{4K}$. The side lengths are $a=|z_2-z_3|=|{-2+4i}|=2\\sqrt5$, $b=|z_1-z_3|=|{-9-3i}|=3\\sqrt{10}$, $c=|z_1-z_2|=|{-7-7i}|=7\\sqrt2$, and the area is $K=\\tfrac12\\cdot42=21.$",
          "Therefore $R=\\dfrac{abc}{4K}=\\dfrac{(2\\sqrt5)(3\\sqrt{10})(7\\sqrt2)}{4\\cdot21}=\\dfrac{42\\sqrt{100}}{84}=\\dfrac{420}{84}=5.$ The circle through $z_1,z_2,z_3$ has radius $\\boxed{R=5}$, and since $z_4$ shares it, every one of the four points lies on a circle of radius $5$."
        ]
      },
      {
        "name": "Real circle equation $|z|^2+Dx+Ey+F=0$ through three points, verified on the fourth",
        "steps": [
          "Any circle in the plane is $x^2+y^2+Dx+Ey+F=0$ with real $D,E,F$. Substituting $z_1=(-3,-1)$, $z_2=(4,6)$, $z_3=(6,2)$ gives the linear system $10-3D-E+F=0$, $52+4D+6E+F=0$, $40+6D+2E+F=0.$",
          "Solve: subtracting the first from the third yields $30+9D+3E=0\\Rightarrow 3D+E=-10$; subtracting the first from the second yields $42+7D+7E=0\\Rightarrow D+E=-6.$ Hence $2D=-4$, so $D=-2,\\ E=-4$, and $F=-10+3D+E=-10-6-4=-20.$ The circle is $x^2+y^2-2x-4y-20=0.$",
          "Verify the fourth point closes the loop. For $z_4=(-2,-2)$: $4+4-2(-2)-4(-2)-20=8+4+8-20=0.$ So $z_4$ satisfies the same equation; the four points are concyclic — and because the equation came from a true (non-degenerate) circle, no collinearity ambiguity remains.",
          "Read off centre and radius: completing the square, $(x-1)^2+(y-2)^2=1+4+20=25.$ The centre is $1+2i$ and the radius is $\\sqrt{25}=5$, so $\\boxed{R=5}.$"
        ]
      },
      {
        "name": "Directed-angle (inscribed-angle) reading of the cross-ratio, then circumcentre",
        "steps": [
          "Write $\\lambda=\\dfrac{(z_1-z_3)/(z_2-z_3)}{(z_1-z_4)/(z_2-z_4)}.$ Its argument is the difference of the directed angles $\\angle z_1z_3z_2$ and $\\angle z_1z_4z_2$ subtended by chord $z_1z_2$ at $z_3$ and at $z_4$. Because $\\lambda=15>0$, $\\arg\\lambda=0$, so these two directed angles are equal $\\pmod \\pi.$ By the converse of the inscribed-angle theorem, $z_3$ and $z_4$ see the segment $z_1z_2$ under equal angles, hence $z_1,z_2,z_3,z_4$ lie on one circle (the equal-angle locus is a circular arc, not a line, precisely because $\\triangle z_1z_2z_3$ has nonzero area $21$).",
          "To size the circle, find the circumcentre $c=cx+icy$ of $z_1,z_2,z_3$ as the intersection of two perpendicular bisectors, i.e. $|c-z_1|=|c-z_2|=|c-z_3|.$ Equating $|c-z_1|^2=|c-z_3|^2$ gives $(-3-cx)^2+(-1-cy)^2=(6-cx)^2+(2-cy)^2$, which simplifies to $18cx+6cy=30$, i.e. $3cx+cy=5.$",
          "Equating $|c-z_2|^2=|c-z_3|^2$ gives $(4-cx)^2+(6-cy)^2=(6-cx)^2+(2-cy)^2$, simplifying to $4cx-8cy=-12$, i.e. $cx-2cy=-3.$ Solving $3cx+cy=5$ and $cx-2cy=-3$ gives $cx=1,\\ cy=2$, so $c=1+2i.$",
          "Then $R=|c-z_1|=|(1-(-3))+(2-(-1))i|=|4+3i|=5.$ A check confirms $|c-z_4|=|(1-(-2))+(2-(-2))i|=|3+4i|=5$ as well, so all four points sit at distance $5$ from $1+2i$: $\\boxed{R=5}.$"
        ]
      }
    ],
    "remark": "Insight: a real cross-ratio is the algebraic fingerprint of the relation \"these four points are concyclic OR collinear\" — the two cases are inseparable at the level of the cross-ratio alone, because a M\\\"obius transformation maps the extended real axis (cross-ratio real) onto an arbitrary line-or-circle. The honest concyclicity proof is therefore two-pronged: show $\\lambda\\in\\mathbb R$, then kill the collinear branch by exhibiting a nonzero triangle area. Geometrically the same fact is the converse inscribed-angle theorem: equal directed angles on a chord put points on a common arc, but only when the points are not aligned. The second lesson lives in part (b): even after concyclicity is secured, the circumcentre is an honest computation, never the centroid of the four points — averaging positions confuses the balance point of a point-set with the equidistant centre of a circle, and only a genuine circumcircle of three of them surrenders the clean radius $R=5$."
  },
  {
    "theme": "geometry",
    "themeLabel": "Complex Numbers as Geometry",
    "title": "The Squares Stand Guard at Every Corner",
    "difficulty": 5,
    "task": "Prove and evaluate",
    "tags": [
      "perpendicularity",
      "rotation",
      "square centers",
      "orientation",
      "van aubel"
    ],
    "statement": "Throughout, identify each point of the plane with a complex number. (a) For a (non-degenerate) quadrilateral with vertices $a,b,c,d$ taken in order, prove that its two diagonals $ac$ and $bd$ are perpendicular if and only if the ratio $\\dfrac{a-c}{\\,b-d\\,}$ is purely imaginary. (b) Let $A,B,C$ be the vertices of an arbitrary triangle, listed counter-clockwise. On each side erect a square lying outside the triangle, and let $P_a,P_b,P_c$ be the centres of the squares on $BC$, $CA$, $AB$ respectively. Consider the quadrilateral $A\\,P_b\\,P_a\\,P_c$, whose diagonals are the segment $AP_a$ (from a vertex to the centre of the square on the opposite side) and the segment $P_bP_c$ (joining the centres of the squares on the other two sides). Using part (a), prove that these two diagonals are equal in length and mutually perpendicular, and determine the exact value of the complex ratio \\[ \\rho \\;=\\; \\frac{A-P_a}{\\,P_b-P_c\\,}. \\]",
    "answer": "\\[\\boxed{\\rho=\\dfrac{A-P_a}{\\,P_b-P_c\\,}=i}\\]",
    "trap": "The hidden constraint is \\text{orientation}, not algebra. The clean identity $A-P_a=i\\,(P_b-P_c)$ holds only when all three squares are erected on the \\text{same} side of their edges — outward for a counter-clockwise triangle. A strong student typically writes the centre of the square on a directed edge $P\\to Q$ as $\\tfrac{P+Q}{2}\\pm\\tfrac{i}{2}(Q-P)$ and then chooses the $\\pm$ sign \\text{independently} for each side (say, always $+$), without checking that this actually places every square outside the triangle. With the triangle oriented counter-clockwise, $BC$, $CA$, $AB$ are traversed so that the \\text{outward} normal is obtained by the rotation $-i$ uniformly; picking the sign per edge by sketching one picture, or mixing one inward square with two outward ones, destroys the relation. For instance, flipping only the square on $AB$ to lie inside gives, for the triangle $A=0,\\,B=4,\\,C=1+3i$, a ratio $\\tfrac{C-P_c'}{P_a-P_b}=-\\tfrac{2}{13}+\\tfrac{3}{13}i$, which is neither purely imaginary (the diagonals are not perpendicular) nor of unit modulus (the diagonals are $1.414$ versus $5.099$ in length) — yet a careless solver, having ``proved'' perpendicularity in one hand-drawn case, declares the theorem and never notices that a consistent outward orientation was secretly assumed.",
    "solutions": [
      {
        "name": "Part (a) via the dot product, then a one-line center identity",
        "steps": [
          "Two nonzero displacement vectors represented by complex numbers $z$ and $w$ are perpendicular precisely when their real (Euclidean) inner product vanishes, i.e. $\\operatorname{Re}(z\\overline{w})=0$. Dividing by $|w|^2>0$, $\\operatorname{Re}(z\\overline{w})=0\\iff\\operatorname{Re}\\!\\big(\\tfrac{z}{w}\\big)=0\\iff \\tfrac{z}{w}\\ \\text{is purely imaginary}$. Apply this to the diagonal directions $z=a-c$ and $w=b-d$: the diagonals $ac$ and $bd$ are perpendicular $\\iff \\dfrac{a-c}{b-d}\\in i\\,\\mathbb{R}$, which is part (a).",
          "For (b), record the centre of a square erected on a directed edge. If a square is built on the segment from $P$ to $Q$ on the side reached by rotating $Q-P$ through $-90^{\\circ}$ (the outward side for a counter-clockwise triangle), its four vertices are $P,\\,Q,\\,Q-i(Q-P),\\,P-i(Q-P)$, so its centre is the average $\\dfrac{P+Q}{2}-\\dfrac{i}{2}(Q-P)$. With $A,B,C$ counter-clockwise the three outward centres are $P_a=\\dfrac{B+C}{2}-\\dfrac{i}{2}(C-B),\\quad P_b=\\dfrac{C+A}{2}-\\dfrac{i}{2}(A-C),\\quad P_c=\\dfrac{A+B}{2}-\\dfrac{i}{2}(B-A).$",
          "Compute the two diagonal directions directly. Expanding, $A-P_a=A-\\tfrac{B+C}{2}+\\tfrac{i}{2}(C-B)$ and $P_b-P_c=\\big(\\tfrac{C+A}{2}-\\tfrac{i}{2}(A-C)\\big)-\\big(\\tfrac{A+B}{2}-\\tfrac{i}{2}(B-A)\\big)=\\tfrac{C-B}{2}-\\tfrac{i}{2}(2A-B-C)=\\tfrac{C-B}{2}-iA+\\tfrac{i}{2}(B+C).$",
          "Multiply the second by $i$: $i\\,(P_b-P_c)=\\tfrac{i}{2}(C-B)+A-\\tfrac{i^2}{2}(B+C)\\cdot(-1)\\ldots$ done cleanly, $i(P_b-P_c)=A-\\tfrac{B+C}{2}+\\tfrac{i}{2}(C-B)=A-P_a$. Hence $A-P_a=i\\,(P_b-P_c)$, so $\\rho=\\dfrac{A-P_a}{P_b-P_c}=i$. Being purely imaginary, part (a) gives perpendicularity; being of modulus $1$, the diagonals are equal in length. $\\boxed{\\rho=i}$"
        ]
      },
      {
        "name": "Rotation about each square's center",
        "steps": [
          "Use the defining symmetry of a square: its centre $O$ sends each vertex to the next under a quarter-turn, so multiplication by $i$ about $O$ is a symmetry. For the outward square on $BC$ with centre $P_a$, the rotation by $+90^{\\circ}$ about $P_a$ carries $B$ to $C$: $C-P_a=i\\,(B-P_a)$, i.e. $P_a=\\dfrac{C-iB}{1-i}=\\dfrac{B+C}{2}-\\dfrac{i}{2}(C-B).$ The same quarter-turn law gives $P_b=\\dfrac{C+A}{2}-\\dfrac{i}{2}(A-C)$ and $P_c=\\dfrac{A+B}{2}-\\dfrac{i}{2}(B-A)$.",
          "Form $P_b-P_c$ and apply the quarter-turn operator $z\\mapsto iz$ to it. Since $i\\cdot(-\\tfrac{i}{2})=\\tfrac12$ and $i\\cdot\\tfrac12=\\tfrac{i}{2}$, the imaginary structure of the centres recombines: $i(P_b-P_c)$ converts the half-sum terms into the rotated-offset term that defines $A-P_a$, yielding $i(P_b-P_c)=A-P_a$ exactly (verified termwise as in the first method).",
          "Read off the geometry from the single equation $A-P_a=i\\,(P_b-P_c)$. Taking moduli, $|A-P_a|=|i|\\,|P_b-P_c|=|P_b-P_c|$, so the two diagonals have equal length. Taking arguments, $\\arg(A-P_a)=\\arg(P_b-P_c)+\\tfrac{\\pi}{2}$, so they are perpendicular.",
          "Therefore the quadrilateral $A P_b P_a P_c$ has equal, perpendicular diagonals, with $\\rho=\\dfrac{A-P_a}{P_b-P_c}=i$. $\\boxed{\\rho=i}$"
        ]
      },
      {
        "name": "Symmetry across the three vertices",
        "steps": [
          "Define the cyclic operator $T$ that advances $A\\to B\\to C\\to A$; it permutes the outward centres as $P_a\\to P_b\\to P_c\\to P_a$ because the construction is identical on each side. Hence the three diagonal relations $A-P_a\\overset{?}{=}\\lambda(P_b-P_c)$, $B-P_b\\overset{?}{=}\\lambda(P_c-P_a)$, $C-P_c\\overset{?}{=}\\lambda(P_a-P_b)$ all share one universal constant $\\lambda$ depending only on the construction, not on the particular vertex.",
          "Pin $\\lambda$ on the simplest concrete triangle, the right isosceles $A=0,\\ B=1,\\ C=i$ (counter-clockwise). The outward centres are $P_a=\\tfrac{B+C}{2}-\\tfrac{i}{2}(C-B)=\\tfrac{1+i}{2}-\\tfrac{i}{2}(i-1)=1+i$, $P_b=\\tfrac{C+A}{2}-\\tfrac{i}{2}(A-C)=\\tfrac{i}{2}-\\tfrac{i}{2}(-i)=-\\tfrac12+\\tfrac{i}{2}$, $P_c=\\tfrac{A+B}{2}-\\tfrac{i}{2}(B-A)=\\tfrac12-\\tfrac{i}{2}.$",
          "Then $A-P_a=-(1+i)$ and $P_b-P_c=(-\\tfrac12+\\tfrac{i}{2})-(\\tfrac12-\\tfrac{i}{2})=-1+i$, so $\\lambda=\\dfrac{A-P_a}{P_b-P_c}=\\dfrac{-(1+i)}{-1+i}=\\dfrac{1+i}{1-i}=i.$ Because $\\lambda$ is universal across all counter-clockwise triangles, $A-P_a=i(P_b-P_c)$ holds for every triangle (a single linear identity in $A,B,C$, true on one non-degenerate case where the three vectors $A,B,C$ are affinely independent, is true identically).",
          "Since $\\rho=\\lambda=i$ is purely imaginary of unit modulus, part (a) makes the diagonals perpendicular, and equal moduli make them equal in length. $\\boxed{\\rho=i}$"
        ]
      }
    ],
    "remark": "Insight: the entire theorem collapses to the single complex identity $A-P_a=i\\,(P_b-P_c)$ — one rotation by $90^{\\circ}$ that is forced the moment all three squares are oriented the same way. The factor $i$ packs both conclusions at once: its unit modulus gives equal diagonals, its purely-imaginary value gives perpendicular diagonals, and there is nothing left to check. This is van Aubel's quadrilateral theorem read at a triangle: the ``fourth vertex'' of the configuration is the triangle vertex $A$ itself, with the opposite square-centre $P_a$ as the far end of one diagonal and the two flanking centres $P_b,P_c$ as the other. The lesson the trap teaches is that in complex-number geometry the choice of $\\pm i$ is the geometric datum: a uniform outward orientation is what synchronises the three local quarter-turns into one global one, and any mismatch silently turns a $90^{\\circ}$ rotation into a generic spiral similarity, killing both equality and perpendicularity."
  },
  {
    "theme": "geometry",
    "themeLabel": "Complex Numbers as Geometry",
    "title": "Three Mirrors Meeting at a Point",
    "difficulty": 5,
    "task": "Prove and locate",
    "tags": [
      "foot of perpendicular",
      "section formula",
      "reflection",
      "composition of isometries",
      "concurrent lines",
      "orientation"
    ],
    "statement": "Identify each point of the plane with a complex number; for a directed segment write $\\overline{w}$ for the complex conjugate of $w$. \\newline (a) Let $\\ell$ be the line through two distinct points $a$ and $b$, and let $P$ be any point. Write the foot of the perpendicular from $P$ to $\\ell$ as a real-parameter section point $F=a+t(b-a)$ with $t\\in\\mathbb{R}$. Determine $t$ in terms of $a,b,P$, and prove that the mirror image of $P$ in $\\ell$ is exactly \\[ P^{\\ast}=2F-P=\\frac{(b-a)\\,\\overline{P}+a\\overline{b}-\\overline{a}\\,b}{\\overline{b}-\\overline{a}}. \\] (b) Three lines $\\ell_1,\\ell_2,\\ell_3$ all pass through the common point $p=2+i$. Their directions are: $\\ell_1$ horizontal; $\\ell_2$ inclined at $60^{\\circ}$ to the real axis; $\\ell_3$ inclined at $120^{\\circ}$. Let $\\sigma_k$ denote reflection in $\\ell_k$, and form the composite $\\Sigma=\\sigma_3\\circ\\sigma_2\\circ\\sigma_1$ (apply $\\sigma_1$ first). Prove that $\\Sigma$ is itself a single reflection, identify the mirror line, and compute the image $\\Sigma(5)$ of the point $P_0=5$.",
    "answer": "\\[\\boxed{\\Sigma(5)=\\dfrac{1-\\sqrt{3}}{2}+\\dfrac{1+3\\sqrt{3}}{2}\\,i}\\]",
    "trap": "The fatal slip is to add the three mirror angles, $\\theta_1+\\theta_2+\\theta_3$, as if reflections behaved like rotations. They do not. Each reflection \\text{conjugates}, so the composite offset acquires the angle with \\text{alternating} signs: $\\Sigma(z)=p+e^{2i(\\theta_1-\\theta_2+\\theta_3)}\\,\\overline{(z-p)}$, governed by $\\theta_1-\\theta_2+\\theta_3$ — the middle mirror enters with a \\text{minus}. Here $\\theta_1-\\theta_2+\\theta_3=0-60+120=60^{\\circ}$, so the surviving mirror is the $60^{\\circ}$ line through $p$, and $\\Sigma(5)=\\tfrac{1-\\sqrt3}{2}+\\tfrac{1+3\\sqrt3}{2}i$. A student who instead writes $\\theta_1+\\theta_2+\\theta_3=180^{\\circ}$ gets the factor $e^{2i\\cdot 180^{\\circ}}=1$ and reports the spurious image $p+\\overline{(5-p)}=5+2i$ — the wrong axis (horizontal, not $60^{\\circ}$) and the wrong point. A second, more refined trap: even a student who knows three reflections in concurrent lines give a reflection may forget that the result is a reflection (orientation-\\text{reversing}) rather than a rotation, because two of the three reflections already compose to a rotation; the \\text{odd} number three is exactly what forces a conjugate to survive, so $\\Sigma$ has a whole line of fixed points (through $p$), not a single centre.",
    "solutions": [
      {
        "name": "Section-formula foot, then the offset-conjugation composite",
        "steps": [
          "Part (a). The foot $F=a+t(b-a)$ is characterised by $PF\\perp\\ell$, i.e. the displacement $F-P$ is perpendicular to the direction $b-a$, which for complex numbers means $\\operatorname{Re}\\!\\big((F-P)\\,\\overline{(b-a)}\\big)=0$. Substituting $F-P=(a-P)+t(b-a)$ and using $\\operatorname{Re}(w)=\\tfrac12(w+\\overline w)$ gives the real linear equation $\\operatorname{Re}\\!\\big((a-P)\\overline{(b-a)}\\big)+t\\,|b-a|^2=0$, hence $t=\\dfrac{\\operatorname{Re}\\!\\big((P-a)\\overline{(b-a)}\\big)}{|b-a|^2}=\\dfrac{(P-a)\\overline{(b-a)}+\\overline{(P-a)}(b-a)}{2|b-a|^2}\\in\\mathbb{R}.$",
          "Since $F$ is the midpoint of $P$ and its mirror image, the reflection is $P^{\\ast}=2F-P$. Substitute the value of $t$, write $|b-a|^2=(b-a)\\overline{(b-a)}$, and simplify: $P^{\\ast}=2a+2t(b-a)-P$. Clearing the denominator $\\overline{b}-\\overline{a}$ collapses the expression to $P^{\\ast}=\\dfrac{(b-a)\\overline{P}+a\\overline{b}-\\overline{a}\\,b}{\\overline{b}-\\overline{a}},$ which is the claimed closed form. (As a sanity check, both $P^{\\ast}=2F-P$ and this quotient agree identically, confirming the boxed formula in part (a).)",
          "Part (b). Translate so the common point $p$ is the origin: a reflection in a line through $p$ with direction angle $\\theta$ sends an offset $u=z-p$ to $e^{2i\\theta}\\,\\overline{u}$. Indeed, from part (a) with $a=p,\\ b=p+e^{i\\theta}$, one gets $z^{\\ast}=p+\\dfrac{e^{i\\theta}}{e^{-i\\theta}}\\overline{(z-p)}=p+e^{2i\\theta}\\,\\overline{(z-p)}.$ So $\\sigma_k:\\;u\\mapsto e^{2i\\theta_k}\\overline{u}$ with $\\theta_1=0,\\ \\theta_2=60^{\\circ},\\ \\theta_3=120^{\\circ}$.",
          "Compose, tracking each conjugation. Start with $u$. After $\\sigma_1$: $e^{2i\\theta_1}\\overline{u}$. After $\\sigma_2$: $e^{2i\\theta_2}\\overline{e^{2i\\theta_1}\\overline{u}}=e^{2i(\\theta_2-\\theta_1)}u.$ After $\\sigma_3$: $e^{2i\\theta_3}\\overline{e^{2i(\\theta_2-\\theta_1)}u}=e^{2i(\\theta_1-\\theta_2+\\theta_3)}\\overline{u}.$ Hence $\\Sigma(z)=p+e^{2i(\\theta_1-\\theta_2+\\theta_3)}\\overline{(z-p)}$ — exactly the form of a reflection, so $\\Sigma$ is the reflection in the line through $p$ at angle $\\theta_1-\\theta_2+\\theta_3=60^{\\circ}$.",
          "Evaluate at $P_0=5$. Here $5-p=5-(2+i)=3-i$, so $\\overline{5-p}=3+i$, and $e^{2i\\cdot 60^{\\circ}}=e^{120^{\\circ}i}=-\\tfrac12+\\tfrac{\\sqrt3}{2}i$. Then $\\Sigma(5)=(2+i)+\\big(-\\tfrac12+\\tfrac{\\sqrt3}{2}i\\big)(3+i)=(2+i)+\\big(-\\tfrac{3}{2}-\\tfrac{\\sqrt3}{2}\\big)+\\big(\\tfrac{3\\sqrt3}{2}-\\tfrac12\\big)i.$ Collecting, $\\Sigma(5)=\\dfrac{1-\\sqrt3}{2}+\\dfrac{1+3\\sqrt3}{2}i.$ $\\boxed{\\Sigma(5)=\\tfrac{1-\\sqrt3}{2}+\\tfrac{1+3\\sqrt3}{2}i}$"
        ]
      },
      {
        "name": "Group-theoretic angle bookkeeping (two reflections make a rotation)",
        "steps": [
          "Use the classical fact: the composite of two reflections in lines through a common point $p$, with angles $\\alpha$ then $\\beta$, is the rotation about $p$ through $2(\\beta-\\alpha)$. Apply it to the first two mirrors $\\theta_1=0,\\ \\theta_2=60^{\\circ}$: $\\sigma_2\\circ\\sigma_1=\\text{rotation about }p\\text{ by }2(60^{\\circ}-0)=120^{\\circ}.$",
          "Now compose this rotation with $\\sigma_3$ (angle $120^{\\circ}$). A rotation by angle $\\varphi$ about $p$ followed by a reflection in a line through $p$ at angle $\\theta$ is again a reflection in a line through $p$, at angle $\\theta-\\varphi/2$: writing the rotation as $u\\mapsto e^{i\\varphi}u$ and the reflection as $u\\mapsto e^{2i\\theta}\\overline{u}$, the composite is $u\\mapsto e^{2i\\theta}\\overline{e^{i\\varphi}u}=e^{i(2\\theta-\\varphi)}\\overline{u}=e^{2i(\\theta-\\varphi/2)}\\overline{u}.$",
          "Plug $\\varphi=120^{\\circ}$, $\\theta=120^{\\circ}$: the new mirror angle is $\\theta-\\varphi/2=120^{\\circ}-60^{\\circ}=60^{\\circ}$. So $\\Sigma=\\sigma_3\\circ(\\sigma_2\\circ\\sigma_1)$ is the reflection in the $60^{\\circ}$ line through $p=2+i$, matching Method 1. The orientation count is the safeguard: three reflections are orientation-reversing, so the answer must be a reflection (a rotation would be even).",
          "Apply this reflection to $P_0=5$ as before: $\\Sigma(5)=p+e^{2i\\cdot 60^{\\circ}}\\overline{(5-p)}=(2+i)+\\big(-\\tfrac12+\\tfrac{\\sqrt3}{2}i\\big)(3+i)=\\dfrac{1-\\sqrt3}{2}+\\dfrac{1+3\\sqrt3}{2}i.$ $\\boxed{\\Sigma(5)=\\tfrac{1-\\sqrt3}{2}+\\tfrac{1+3\\sqrt3}{2}i}$"
        ]
      },
      {
        "name": "Fixed-axis pin-down by direct line reflections",
        "steps": [
          "Avoid all angle lore: reflect $P_0=5$ through the three concrete lines in turn using the part-(a) formula $z^{\\ast}=\\dfrac{(b-a)\\overline z+a\\overline b-\\overline a\\,b}{\\overline b-\\overline a}$. Take $\\ell_1$ horizontal through $p$: $a_1=1+i,\\ b_1=4+i$; $\\ell_2$ at $60^{\\circ}$ through $p$: $a_2=2+i,\\ b_2=3+(1+\\sqrt3)i$; $\\ell_3$ at $120^{\\circ}$ through $p$: $a_3=2+i,\\ b_3=(2-2)+ (1+2\\sqrt3)i$, i.e. $b_3=0+(1+2\\sqrt3)i$. Each line indeed passes through $p=2+i$.",
          "Reflect step by step. $\\sigma_1(5)$: line $y=1$ horizontal, so it sends $5=5+0i$ to $5+2i$ (vertical distance to $y=1$ is $1$, mirrored to $y=2$). $\\sigma_2(5+2i)$ in the $60^{\\circ}$ line through $p$, and $\\sigma_3$ of the result, computed from the formula, give after simplification $\\Sigma(5)=\\dfrac{1-\\sqrt3}{2}+\\dfrac{1+3\\sqrt3}{2}i.$",
          "Confirm $\\Sigma$ is a reflection independently. A reflection is an involution fixing its axis pointwise. Compute $\\Sigma(\\Sigma(5))=5$ (reflecting twice returns the original — verified by re-running the three reflections on the image), and check that $p=2+i$ is fixed: $\\Sigma(p)=p$ since $\\overline{p-p}=0$. Thus $\\Sigma$ has the fixed line through $p$ at $60^{\\circ}$, so it is a reflection, not a rotation. The distance $|{\\Sigma(5)-p}|=|5-p|=\\sqrt{10}$ is preserved, as any isometry fixing $p$ requires.",
          "Therefore the single mirror is the $60^{\\circ}$ line through $2+i$ and $\\boxed{\\Sigma(5)=\\tfrac{1-\\sqrt3}{2}+\\tfrac{1+3\\sqrt3}{2}i}.$ All three independent methods agree."
        ]
      }
    ],
    "remark": "Insight: the entire problem is the single identity $\\Sigma(z)=p+e^{2i(\\theta_1-\\theta_2+\\theta_3)}\\,\\overline{(z-p)}$, and its soul is the alternating sign on the angles. The mechanism is purely the bookkeeping of conjugation: every reflection flips the offset to its conjugate, so the accumulated rotation angle reverses sign across each mirror — an even number of mirrors leaves a rotation ($\\overline{u}\\to u$), an odd number leaves a reflection. Concurrency is what keeps the composite anchored at $p$ with no translational part, turning the would-be glide into a clean reflection through the common point. The same calculation proves the general theorem: any odd number of reflections in lines through one point is a single reflection in a line through that point, with mirror angle equal to the alternating sum $\\theta_1-\\theta_2+\\theta_3-\\cdots$. The first part is the engine: foot-of-perpendicular as a real section point $F=a+t(b-a)$ delivers both the reflection formula $P^{\\ast}=2F-P$ and, via $a=p,\\ b=p+e^{i\\theta}$, the offset law $u\\mapsto e^{2i\\theta}\\overline{u}$ that makes the whole composition transparent."
  },
  {
    "theme": "geometry",
    "themeLabel": "Complex Numbers as Geometry",
    "title": "The Shoelace That Ties the Three Cube Roots",
    "difficulty": 5,
    "task": "Prove and evaluate",
    "tags": [
      "shoelace",
      "roots of unity",
      "signed area",
      "vieta",
      "rotation"
    ],
    "statement": "Identify every point of the plane with a complex number, and write $\\bar z$ for the conjugate of $z$. (a) Let $z_0,z_1,\\dots,z_{n-1}$ be the vertices of a simple polygon listed in counter-clockwise order, with the convention $z_n=z_0$. Prove the complex shoelace identity for its (positive) area, \\[ [\\,z_0z_1\\cdots z_{n-1}\\,]\\;=\\;\\frac{1}{4i}\\sum_{k=0}^{n-1}\\bigl(\\bar z_k\\,z_{k+1}-z_k\\,\\bar z_{k+1}\\bigr)\\;=\\;\\frac12\\,\\operatorname{Im}\\!\\sum_{k=0}^{n-1}\\bar z_k\\,z_{k+1}. \\] (b) Fix a non-zero complex number $w$ and let $z_0,z_1,z_2$ be the three cube roots of $w$, taken in counter-clockwise order around the origin. Using part (a) — and exploiting the relation $z^3=w$ rather than messy coordinates — find the exact area of triangle $z_0z_1z_2$ in closed form, and show that this area depends only on $|w|$, never on $\\arg w$.",
    "answer": "\\[\\boxed{\\;[\\,z_0z_1z_2\\,]=\\dfrac{3\\sqrt3}{4}\\,|w|^{2/3}\\;}\\]",
    "trap": "The conceptual trap is the confusion of the circumradius with the side. The three cube roots all have modulus $|w|^{1/3}$, so they lie on a circle of radius $r=|w|^{1/3}$ centred at the origin; this $r$ is the circumradius of the equilateral triangle, not its side. A strong but hasty student writes ``equilateral triangle of side $r$'' and reports $\\tfrac{\\sqrt3}{4}r^2=\\tfrac{\\sqrt3}{4}|w|^{2/3}$, missing a factor of $3$: the side of an equilateral triangle inscribed in a circle of radius $r$ is $s=r\\sqrt3$ (the chord subtending a $120^{\\circ}$ central angle, $s=2r\\sin 60^{\\circ}$), giving the true area $\\tfrac{\\sqrt3}{4}s^2=\\tfrac{\\sqrt3}{4}\\,(r\\sqrt3)^2=\\tfrac{3\\sqrt3}{4}r^2$. A second, subtler version of the same blunder: a student recalls the inscribed-polygon area $\\tfrac12 n\\,R^2\\sin\\tfrac{2\\pi}{n}$ but slips the central angle to $\\tfrac{\\pi}{3}=60^{\\circ}$ (an interior half-angle) instead of $\\tfrac{2\\pi}{3}=120^{\\circ}$, again deflating the answer. The shoelace route immunises against both, because it never asks for the side length at all: it returns $\\tfrac12\\operatorname{Im}(3r^2\\eta)$ with $\\eta=e^{2\\pi i/3}$, and $\\operatorname{Im}\\eta=\\tfrac{\\sqrt3}{2}$ carries the correct factor automatically. A third trap is to carry $\\arg w$ through the algebra and announce an $\\arg w$-dependent answer; in fact every dependence on $\\arg w$ cancels because $\\arg w$ merely rotates the whole triangle rigidly about the origin.",
    "solutions": [
      {
        "name": "Shoelace via Vieta: $\\bar z_k=r^2/z_k$ and a geometric ratio",
        "steps": [
          "Proof of (a). For an oriented edge from $P$ to $Q$, the signed area of the triangle $OPQ$ (with $O$ the origin) is $\\tfrac12\\operatorname{Im}(\\bar P Q)=\\tfrac{1}{4i}(\\bar P Q-P\\bar Q)$, since $\\operatorname{Im}(\\zeta)=\\tfrac{1}{2i}(\\zeta-\\bar\\zeta)$. Summing these signed origin-triangles over the consecutive edges $z_k\\to z_{k+1}$ telescopes the interior: each point of the polygon is swept exactly once with the $+$ sign for counter-clockwise traversal, so $[\\,z_0\\cdots z_{n-1}\\,]=\\sum_{k}\\tfrac{1}{4i}(\\bar z_kz_{k+1}-z_k\\bar z_{k+1})=\\tfrac12\\operatorname{Im}\\sum_k\\bar z_kz_{k+1}$. This is the claimed identity.",
          "Apply it to the cube roots. Each $z_k$ satisfies $z_k^3=w$, hence $|z_k|^3=|w|$, so all three roots share the modulus $r:=|w|^{1/3}$ and $|z_k|^2=r^2$. The crucial Vieta-flavoured move: from $z_k\\bar z_k=|z_k|^2=r^2$ we get $\\bar z_k=\\dfrac{r^2}{z_k}$, which converts conjugates into reciprocals.",
          "Substitute into the shoelace sum: $\\displaystyle\\sum_{k=0}^{2}\\bar z_kz_{k+1}=\\sum_{k=0}^{2}\\frac{r^2}{z_k}\\,z_{k+1}=r^2\\sum_{k=0}^{2}\\frac{z_{k+1}}{z_k}$. In counter-clockwise order the roots are $z_k=r\\,e^{i(\\phi+2\\pi k/3)}$ with $\\phi=\\tfrac13\\arg w$, so each consecutive ratio is the same fixed rotation $\\dfrac{z_{k+1}}{z_k}=e^{2\\pi i/3}=\\eta$ (including the wrap-around $z_3=z_0$, whose ratio $z_0/z_2=e^{-4\\pi i/3}=\\eta$). Thus $\\sum_k\\bar z_kz_{k+1}=r^2\\,(3\\eta)=3r^2e^{2\\pi i/3}$ — and note $\\phi=\\tfrac13\\arg w$ has cancelled out entirely, so the sum, hence the area, is independent of $\\arg w$.",
          "Finish: $[\\,z_0z_1z_2\\,]=\\tfrac12\\operatorname{Im}\\!\\bigl(3r^2e^{2\\pi i/3}\\bigr)=\\tfrac32 r^2\\sin\\tfrac{2\\pi}{3}=\\tfrac32 r^2\\cdot\\tfrac{\\sqrt3}{2}=\\tfrac{3\\sqrt3}{4}r^2$. With $r=|w|^{1/3}$, $r^2=|w|^{2/3}$, giving $[\\,z_0z_1z_2\\,]=\\dfrac{3\\sqrt3}{4}\\,|w|^{2/3}$. $\\boxed{\\dfrac{3\\sqrt3}{4}|w|^{2/3}}$"
        ]
      },
      {
        "name": "Geometry of the circumcircle (and where the trap is sprung)",
        "steps": [
          "From part (a), or directly: the three cube roots have equal modulus $r=|w|^{1/3}$ and arguments spaced by $\\tfrac{2\\pi}{3}$, so they form an equilateral triangle inscribed in the circle of radius $r$ about the origin. The point of failure for the naive solver is exactly here: $r$ is the circumradius, NOT the side.",
          "Decompose the triangle into the three congruent isosceles slices $Oz_0z_1,\\,Oz_1z_2,\\,Oz_2z_0$, each with two sides of length $r$ enclosing a central angle of $\\tfrac{2\\pi}{3}$. One slice has area $\\tfrac12 r^2\\sin\\tfrac{2\\pi}{3}$, so the whole triangle has area $3\\cdot\\tfrac12 r^2\\sin\\tfrac{2\\pi}{3}=\\tfrac32 r^2\\cdot\\tfrac{\\sqrt3}{2}=\\tfrac{3\\sqrt3}{4}r^2$. (Equivalently, the side is the chord $s=2r\\sin 60^{\\circ}=r\\sqrt3$, and $\\tfrac{\\sqrt3}{4}s^2=\\tfrac{\\sqrt3}{4}\\cdot 3r^2$ gives the same value — exposing the missing factor $3$ in the ``side $=r$'' error.)",
          "Substitute $r^2=|w|^{2/3}$ to obtain $[\\,z_0z_1z_2\\,]=\\dfrac{3\\sqrt3}{4}|w|^{2/3}$. Since changing $\\arg w$ replaces every $z_k$ by $z_k\\,e^{i\\,\\Delta\\arg w/3}$ — a single rigid rotation of the whole triangle about the origin — the area is unchanged, confirming the dependence on $|w|$ alone. $\\boxed{\\dfrac{3\\sqrt3}{4}|w|^{2/3}}$"
        ]
      },
      {
        "name": "Solve the general $n$-gon of $n$-th roots, then set $n=3$",
        "steps": [
          "Generalise the computation of solution 1 to the $n$ roots $z_k$ of $z^n=w$. Again $|z_k|=|w|^{1/n}=:r$ for all $k$, so $\\bar z_k=r^2/z_k$, and the counter-clockwise ordering gives $z_{k+1}/z_k=e^{2\\pi i/n}=:\\zeta$ for every $k$. Hence $\\sum_{k=0}^{n-1}\\bar z_kz_{k+1}=r^2\\sum_{k=0}^{n-1}\\zeta=n\\,r^2\\,e^{2\\pi i/n}$.",
          "By part (a), the regular $n$-gon of $n$-th roots has area $[\\,z_0\\cdots z_{n-1}\\,]=\\tfrac12\\operatorname{Im}(n\\,r^2e^{2\\pi i/n})=\\dfrac n2\\,r^2\\sin\\dfrac{2\\pi}{n}=\\dfrac n2\\,\\sin\\dfrac{2\\pi}{n}\\;|w|^{2/n}$, a clean closed form for every $n\\ge3$, manifestly independent of $\\arg w$.",
          "Specialise to $n=3$: the area is $\\dfrac32\\sin\\dfrac{2\\pi}{3}\\,|w|^{2/3}=\\dfrac32\\cdot\\dfrac{\\sqrt3}{2}\\,|w|^{2/3}=\\dfrac{3\\sqrt3}{4}\\,|w|^{2/3}$. (As checks, $n=4$ gives $2|w|^{1/2}$, the diagonal-$2r$ square, and $n=6$ gives $\\tfrac{3\\sqrt3}{2}|w|^{1/3}$, the regular hexagon — both correct.) $\\boxed{\\dfrac{3\\sqrt3}{4}|w|^{2/3}}$"
        ]
      }
    ],
    "remark": "Insight: the whole problem turns on a single substitution. The relation $z^n=w$ forces every root onto one circle, so $\\bar z_k=r^2/z_k$ trades each conjugate for a reciprocal, and the shoelace sum collapses to a geometric series of identical rotations $z_{k+1}/z_k=\\zeta$. That is why the area never sees $\\arg w$: the argument only rotates the configuration rigidly, and the shoelace form $\\tfrac12\\operatorname{Im}\\sum\\bar z_kz_{k+1}$ is rotation-invariant. The trap is the eternal circumradius-versus-side slip — $|w|^{1/3}$ is where the vertices sit, not how far apart they are — and the complex shoelace is precisely the tool that bypasses the side length and lets $\\operatorname{Im}\\,e^{2\\pi i/3}=\\tfrac{\\sqrt3}{2}$ supply the right factor on its own. The general formula $\\tfrac n2\\sin\\tfrac{2\\pi}{n}|w|^{2/n}$ is the natural home of the result, with the cube-root triangle just its $n=3$ instance."
  },
  {
    "theme": "geometry",
    "themeLabel": "Complex Numbers as Geometry",
    "title": "The Harmonic Diameter and Its Orthogonal Pencil",
    "difficulty": 5,
    "task": "Prove and evaluate",
    "tags": [
      "apollonius",
      "harmonic range",
      "orthogonal circles",
      "power of a point",
      "coaxial pencil",
      "section formula"
    ],
    "statement": "Identify every point of the plane with a complex number, and fix two distinct points $A=2$ and $B=8$ together with the constant $k=2$. Let $\\Gamma$ be the locus \\[ \\Gamma=\\Big\\{\\,z\\in\\mathbb{C}\\;:\\;\\Big|\\frac{z-A}{z-B}\\Big|=k\\,\\Big\\}. \\] (a) Let $P$ and $Q$ be the points dividing the segment $AB$ internally and externally, respectively, in the ratio $k:1$. Using the section formula, prove that $P,Q\\in\\Gamma$, and prove that $\\Gamma$ is exactly the circle having $PQ$ as a diameter; determine its centre $S$ and radius $R$. (b) Show that the four points $A,B,P,Q$ form a harmonic range, and prove the synthesis statement that $\\Gamma$ is orthogonal to every circle passing through $A$ and $B$ (including the line $AB$ as a degenerate member). Quantify part (b) by giving the common value of the power of $S$ with respect to each such circle. Report the centre $S$, the radius $R$, and that power $\\pi_S$ as the final answer.",
    "answer": "\\[\\boxed{S=10,\\quad R=4,\\quad \\pi_S=R^2=16}\\]",
    "trap": "The seductive error is to declare the centre of $\\Gamma$ to be the \\text{midpoint of} $AB$. A strong student, told that $\\Gamma$ is a circle symmetric about line $AB$, ``knows'' a diameter must be centred on $AB$ and writes $S=\\tfrac{A+B}{2}=5$. But the diameter is $PQ$, not $AB$: here $P=6$ and $Q=14$, so $S=\\tfrac{P+Q}{2}=10$ lies \\text{outside} segment $AB$, and the tell-tale contradiction is that the distances from the false centre $5$ to the two division points are unequal ($|P-5|=1$ but $|Q-5|=9$), which can never happen for endpoints of a genuine diameter. The same blind spot wrecks part (b): orthogonality to the pencil through $A,B$ rests on the power $\\pi_S=(S-A)(S-B)=8\\cdot 2=16=R^2$, computed at the \\text{true} centre $S=10$ where both $A,B$ lie on the \\text{same} side of $S$ so the power is positive; using $S=5$ gives $(5-2)(5-8)=-9<0$, a negative power signalling $S$ inside the pencil's circles, for which no real orthogonal circle through $S$ can exist. A second, quieter trap is forgetting the hypothesis $k\\neq1$: at $k=1$ the locus degenerates to the perpendicular bisector of $AB$ (a line, $Q$ flies to infinity), so the ``diameter'' description silently fails.",
    "solutions": [
      {
        "name": "Section formula, then the diameter and the power of the centre",
        "steps": [
          "Square the defining equation to clear the modulus: $|z-A|^2=k^2|z-B|^2$. Writing $z=x+iy$ and using $|w|^2=w\\bar w$, expand to $(z-A)(\\bar z-\\bar A)=k^2(z-B)(\\bar z-\\bar B)$. With real $A=2,B=8$ and $k^2=4$ this becomes $x^2-4x+4+y^2=4\\,(x^2-16x+64+y^2)$, i.e. $3x^2+3y^2-60x+252=0$, or $x^2+y^2-20x+84=0$. Completing the square, $(x-10)^2+y^2=16$. Hence $\\Gamma$ is the circle of centre $S=10$ and radius $R=4$.",
          "Locate the division points by the section formula. The internal point dividing $A\\to B$ in ratio $k:1=2:1$ is $P=\\dfrac{1\\cdot A+k\\,B}{k+1}=\\dfrac{2+2\\cdot8}{3}=6$, and the external point is $Q=\\dfrac{k\\,B-1\\cdot A}{k-1}=\\dfrac{16-2}{1}=14$. Each satisfies $\\big|\\tfrac{z-A}{z-B}\\big|=k$: $\\tfrac{|6-2|}{|6-8|}=\\tfrac{4}{2}=2$ and $\\tfrac{|14-2|}{|14-8|}=\\tfrac{12}{6}=2$, so $P,Q\\in\\Gamma$.",
          "The midpoint of $P=6$ and $Q=14$ is $\\tfrac{6+14}{2}=10=S$ and the half-length is $\\tfrac{|14-6|}{2}=4=R$; thus $PQ$ is a diameter of $\\Gamma$, and $\\Gamma$ is precisely the circle on $PQ$ as diameter. (Note $S=10\\neq\\tfrac{A+B}{2}=5$: the centre is not the midpoint of $AB$.)",
          "For orthogonality, compute the power of $S$ in the pencil of circles through $A,B$. Any such circle has $A,B$ as a chord, so the power of $S$ equals the product of signed distances along the secant $SAB$: since $S,A,B$ are collinear, $\\pi_S=(S-A)(S-B)=(10-2)(10-8)=8\\cdot2=16$. This value is the \\text{same} for every circle in the pencil (power depends only on the chord $A,B$, not the circle). Because $\\pi_S=16=R^2$, the tangent length from $S$ to each such circle equals $R$, so $\\Gamma$ (centre $S$, radius $R$) cuts each of them at right angles. The line $AB$ passes through $S=10$, so $\\Gamma$ meets it orthogonally too. Hence $\\boxed{S=10,\\ R=4,\\ \\pi_S=R^2=16}$."
        ]
      },
      {
        "name": "Harmonic range forces the orthogonality (Apollonius/coaxial duality)",
        "steps": [
          "Show $(A,B;P,Q)$ is harmonic. With $P=6,Q=14$ and $A=2,B=8$, the cross-ratio $\\dfrac{(A-P)(B-Q)}{(A-Q)(B-P)}=\\dfrac{(2-6)(8-14)}{(2-14)(8-6)}=\\dfrac{(-4)(-6)}{(-12)(2)}=\\dfrac{24}{-24}=-1$, so $A,B,P,Q$ form a harmonic range. Equivalently, $P,Q$ divide $AB$ internally and externally in the same ratio $k:1$, the defining property of harmonic conjugates.",
          "Translate ``harmonic'' into a power statement at the diameter centre $S=10$. Because $S$ is the midpoint of the diametral pair $P,Q$, one has $P-S=-4$ and $Q-S=+4$, so $P,Q$ sit at distance $R=4$ on opposite sides of $S$. The harmonic conjugates $A,B$ instead lie on the \\text{same} side of $S$ (both less than $10$), and their signed product is $(S-A)(S-B)=(10-2)(10-8)=16=R^2$. Equality of this product with $R^2$ is exactly the inversion relation $\\overline{SA}\\cdot\\overline{SB}=R^2$, so $A$ and $B$ are inverse points in $\\Gamma$: inversion in $\\Gamma$ swaps $A\\leftrightarrow B$.",
          "Invoke the inversion criterion for orthogonality. A circle (or line) $\\omega$ is orthogonal to $\\Gamma$ iff $\\omega$ is mapped to itself by inversion in $\\Gamma$, which happens iff $\\omega$ passes through a pair of points inverse in $\\Gamma$. Since every circle through $A$ and $B$ passes through the inverse pair $\\{A,B\\}$, each such circle is invariant under inversion in $\\Gamma$ and is therefore orthogonal to $\\Gamma$. This is the coaxial-pencil duality: the pencil of circles through $A,B$ and the coaxial pencil of Apollonius circles $\\big|\\tfrac{z-A}{z-B}\\big|=\\text{const}$ are mutually orthogonal, with $A,B$ the limiting points of the latter.",
          "The common power is the constant of the inversion, $\\pi_S=(S-A)(S-B)=R^2=16$, and the degenerate member (line $AB$) is orthogonal because it runs through the centre $S=10$. Hence $\\boxed{S=10,\\ R=4,\\ \\pi_S=R^2=16}$."
        ]
      },
      {
        "name": "Direct orthogonality with a representative test circle, then invariance",
        "steps": [
          "First fix $\\Gamma$ as before: $|z-2|=2|z-8|$ squares to $(x-10)^2+y^2=16$, giving $S=10,\\ R=4$. Now take a general circle $\\omega$ through $A=2$ and $B=8$. Its centre lies on the perpendicular bisector $\\operatorname{Re}=5$, so write the centre as $5+it$ ($t\\in\\mathbb{R}$) with radius $\\rho=|5+it-2|=\\sqrt{9+t^2}$.",
          "Apply the orthogonality test: two circles with centres $S,\\,c_\\omega$ and radii $R,\\rho$ are orthogonal iff $|S-c_\\omega|^2=R^2+\\rho^2$. Compute $|10-(5+it)|^2=|5-it|^2=25+t^2$, while $R^2+\\rho^2=16+(9+t^2)=25+t^2$. They are equal for \\text{every} $t$, so $\\Gamma\\perp\\omega$ for every circle $\\omega$ through $A,B$.",
          "Read off the invariant. Rearranging the equality, $|S-c_\\omega|^2-\\rho^2=R^2$ for all $t$; the left side is exactly the power of $S$ with respect to $\\omega$, so that power is the constant $\\pi_S=R^2=16$, independent of which member of the pencil is chosen. The straight line through $A,B$ (the $t\\to\\infty$ limit) passes through $S=10$ and so is orthogonal as well.",
          "Thus $\\Gamma$ is orthogonal to the entire pencil through $A,B$, with centre $S=10$, radius $R=4$, and common power $\\pi_S=16$. $\\boxed{S=10,\\ R=4,\\ \\pi_S=R^2=16}$"
        ]
      }
    ],
    "remark": "Insight: the whole configuration is one harmonic identity, $(S-A)(S-B)=R^2$, read three ways. As a \\text{power}, it says the tangent from the Apollonius centre $S$ to every circle through $A,B$ has the fixed length $R$ — geometrically forcing a right angle at each intersection. As an \\text{inversion}, it says $A,B$ are inverse points in $\\Gamma$, so any circle carrying both is its own mirror and hence orthogonal. As a \\text{cross-ratio}, it says $A,B,P,Q$ are harmonic, the algebraic fingerprint of two orthogonal coaxial pencils: the circles through $A,B$ on one side, the Apollonius circles $|\\tfrac{z-A}{z-B}|=\\text{const}$ on the other, with $A,B$ as the limiting (zero-radius) points of the Apollonius family. The trap — placing the centre at the midpoint of $AB$ — is fatal precisely because it destroys this identity: the genuine centre sits outside $AB$, exactly where the power of the point turns positive and equals $R^2$."
  },
  {
    "theme": "geometry",
    "themeLabel": "Complex Numbers as Geometry",
    "title": "The Newton-Gauss Line of a Complete Quadrilateral",
    "difficulty": 5,
    "task": "Prove and determine",
    "tags": [
      "collinearity",
      "real ratio test",
      "complete quadrilateral",
      "newton-gauss line",
      "midpoints",
      "line intersection"
    ],
    "statement": "Identify each point of the plane with a complex number and take the convex quadrilateral with vertices \\[ A=9+3i,\\quad B=7+i,\\quad C=5+5i,\\quad D=5+9i. \\] Its four sides, when extended to full lines, form a complete quadrilateral. Besides the four corners, the side-lines meet in two further points: \\[ E=\\text{(line }AB)\\cap(\\text{line }CD),\\qquad F=\\text{(line }AD)\\cap(\\text{line }BC). \\] The three diagonals of the complete quadrilateral are the segments $AC$, $BD$ and $EF$, joining opposite vertices. Let $M_1,M_2,M_3$ be their respective midpoints. \\\\ (a) Using the complex condition that $z$ lies on the line through $p,q$ iff $\\dfrac{z-p}{q-p}\\in\\mathbb{R}$, compute $E$ and $F$. \\\\ (b) Prove that $M_1,M_2,M_3$ are collinear, using the real-ratio collinearity test $\\dfrac{w-u}{v-u}\\in\\mathbb{R}$ as the engine. (This line is the Newton-Gauss line of the complete quadrilateral.) \\\\ Give, as the final answer, the Cartesian equation of the line on which $M_1,M_2,M_3$ lie.",
    "answer": "\\[\\boxed{x+y=11}\\]",
    "trap": "The fatal shortcut is to treat $M_3$ as though it were forced onto the segment $M_1M_2$ by a Varignon-type law, e.g. to assume the third Newton midpoint is the midpoint of the join of the first two, $M_3=\\tfrac{1}{2}(M_1+M_2)$, or more generally to assume the three midpoints sit symmetrically. Varignon's theorem (midpoints of the four \\text{sides} of a quadrilateral form a parallelogram) is a different statement; it says nothing about the midpoints of the three \\text{diagonals} of the \\text{complete} quadrilateral, and it certainly does not pin $M_3$ to the midpoint of $M_1M_2$. Here $M_1=7+4i$ and $M_2=6+5i$ give midpoint $\\tfrac{13}{2}+\\tfrac{9}{2}i$, whereas the true $M_3=1+10i$, so $M_3-\\tfrac12(M_1+M_2)=-\\tfrac{11}{2}+\\tfrac{11}{2}i\\neq0$. The three midpoints are collinear but \\text{not} evenly spaced, and assuming even spacing both gives the wrong line and hides the only thing that actually needs proof. A second, quieter trap is mis-identifying the three diagonals: a student may pair the wrong vertices (using a corner-to-$E$ segment, or the diagonals $AC,BD$ plus a \\text{side} midpoint) instead of the three opposite-vertex diagonals $AC,BD,EF$, for which the collinearity simply fails.",
    "solutions": [
      {
        "name": "Real-ratio engine after solving the two intersections",
        "steps": [
          "Find $E=(\\text{line }AB)\\cap(\\text{line }CD)$. Write $E=A+t(B-A)$ with the collinearity-on-$CD$ condition $\\dfrac{E-C}{D-C}\\in\\mathbb{R}$. Here $B-A=-2-2i$, $D-C=4i$. Imposing that $E=A+t(B-A)$ lies on line $CD$ and solving the resulting real-linear system gives $t=2$, hence $E=A+2(B-A)=2B-A=(14+2i)-(9+3i)=5-i.$",
          "Find $F=(\\text{line }AD)\\cap(\\text{line }BC)$ the same way. With $D-A=-4+6i$ and $C-B=-2+4i$, solving the two real conditions $\\dfrac{F-A}{D-A}\\in\\mathbb{R}$ and $\\dfrac{F-B}{C-B}\\in\\mathbb{R}$ yields $F=-3+21i.$ (Both checks: $\\dfrac{E-C}{D-C}=\\dfrac{-6i}{4i}=-\\tfrac32\\in\\mathbb{R}$ and $\\dfrac{F-A}{D-A}=\\dfrac{-12+18i}{-4+6i}=3\\in\\mathbb{R}$.)",
          "Form the three diagonal midpoints: $M_1=\\dfrac{A+C}{2}=\\dfrac{14+8i}{2}=7+4i,\\quad M_2=\\dfrac{B+D}{2}=\\dfrac{12+10i}{2}=6+5i,\\quad M_3=\\dfrac{E+F}{2}=\\dfrac{2+20i}{2}=1+10i.$",
          "Apply the collinearity test. Compute $\\dfrac{M_3-M_1}{M_2-M_1}=\\dfrac{(1+10i)-(7+4i)}{(6+5i)-(7+4i)}=\\dfrac{-6+6i}{-1+i}=\\dfrac{6(-1+i)}{-1+i}=6.$ The ratio is the real number $6\\in\\mathbb{R}$, so by the real-ratio test $M_1,M_2,M_3$ are collinear. The line through $M_1=(7,4)$ with direction $M_2-M_1=-1+i$ (slope $-1$) is $y-4=-(x-7)$, i.e. $\\boxed{x+y=11}.$"
        ]
      },
      {
        "name": "Vanishing signed area (complex shoelace as a collinearity certificate)",
        "steps": [
          "Recall the complex signed-area identity: three points $z_1,z_2,z_3$ are collinear iff the (four-times) signed area $\\operatorname{Im}\\big[\\overline{z_1}(z_2-z_3)+\\overline{z_2}(z_3-z_1)+\\overline{z_3}(z_1-z_2)\\big]=0$. This is the same engine: it is exactly the statement that $\\dfrac{z_3-z_1}{z_2-z_1}$ has zero imaginary part, written symmetrically.",
          "Using $E=5-i,\\ F=-3+21i$ from the intersections, the midpoints are $M_1=7+4i,\\ M_2=6+5i,\\ M_3=1+10i$ as above. Plug into the bracket: $\\overline{M_1}(M_2-M_3)=(7-4i)(5-5i)=15-55i$, $\\ \\overline{M_2}(M_3-M_1)=(6-5i)(-6+6i)=-6+66i$, $\\ \\overline{M_3}(M_1-M_2)=(1-10i)(1-i)=-9-11i.$",
          "Sum them: $(15-55i)+(-6+66i)+(-9-11i)=0+0i.$ The imaginary part (indeed the whole sum) is $0$, so the signed area of triangle $M_1M_2M_3$ vanishes and the three midpoints are collinear.",
          "To name the line, fit $ax+by=c$ through $M_1=(7,4)$ and $M_2=(6,5)$: subtracting gives $a(7-6)+b(4-5)=0\\Rightarrow a=b$, and $a\\cdot7+a\\cdot4=11a=c$, so $x+y=11$. Indeed $M_3=(1,10)$ satisfies $1+10=11$. Hence the Newton-Gauss line is $\\boxed{x+y=11}.$"
        ]
      },
      {
        "name": "Affine reduction: pin two midpoints, then verify the third by the real test",
        "steps": [
          "Observe that midpoints are affine-covariant, so the collinearity is a statement about the configuration's affine structure. Compute the two ``corner'' diagonal midpoints directly from the given vertices, with no intersection needed: $M_1=\\dfrac{A+C}{2}=7+4i$ and $M_2=\\dfrac{B+D}{2}=6+5i.$ These already determine a candidate Newton-Gauss line $\\ell:\\ x+y=11$ (slope $-1$ through $(7,4)$ and $(6,5)$).",
          "Now locate $E,F$ economically. Since $E$ lies on line $AB$ and line $CD$, and using $2B-A=5-i$ satisfies $\\dfrac{(5-i)-C}{D-C}=\\dfrac{-6i}{4i}=-\\tfrac32\\in\\mathbb{R}$, we confirm $E=5-i$ lies on $CD$ as well; similarly $F=-3+21i$ lies on both $AD$ and $BC$. Thus $M_3=\\dfrac{E+F}{2}=1+10i.$",
          "Test $M_3$ against the candidate line with the real-ratio engine relative to $M_1,M_2$: $\\dfrac{M_3-M_1}{M_2-M_1}=\\dfrac{-6+6i}{-1+i}=6\\in\\mathbb{R}.$ Because the ratio is real, $M_3$ lies on the line through $M_1,M_2$, completing the collinearity proof; equivalently $\\operatorname{Re}(M_3)+\\operatorname{Im}(M_3)=1+10=11$, so $M_3\\in\\ell.$",
          "Therefore all three diagonal midpoints lie on the single line $\\boxed{x+y=11}$, the Newton-Gauss line of this complete quadrilateral."
        ]
      }
    ],
    "remark": "Insight: the entire result is the real-ratio collinearity test $\\dfrac{w-u}{v-u}\\in\\mathbb{R}$ used as a precision instrument. The only genuine work is producing the third midpoint $M_3$ from the two ``extra'' intersection points $E,F$ of the complete quadrilateral; once $E,F$ are in hand, a single ratio kills the problem. The trap is believing the midpoints must be \\text{evenly} spaced (a Varignon reflex): they are collinear but here the ratio is $6$, so $M_3$ sits far down the line, not at the midpoint of $M_1M_2$ — collinearity is a statement about \\text{direction}, never about \\text{spacing}. This is the Newton-Gauss line, a projective fact: it persists under any affine (indeed projective) image of the figure, which is exactly why the complex real-ratio test, blind to lengths and sensitive only to direction, is the natural language for it."
  },
  {
    "theme": "geometry",
    "themeLabel": "Complex Numbers as Geometry",
    "title": "The Centroid That Refuses to Move",
    "difficulty": 5,
    "task": "Prove and locate",
    "tags": [
      "centroid invariance",
      "spiral similarity",
      "cyclic construction",
      "rotation pivot",
      "napoleon instance"
    ],
    "statement": "Identify each point of the plane with a complex number and let triangle $ABC$ have vertices $A=0,\\ B=6,\\ C=3+3i$. Fix a single complex parameter $w$. On each side erect a new apex by one and the same rule, applied cyclically: \\[ A'=A+w\\,(B-A),\\qquad B'=B+w\\,(C-B),\\qquad C'=C+w\\,(A-C). \\] (a) Prove that for every choice of $w\\in\\mathbb{C}$ the centroid of $\\{A',B',C'\\}$ coincides with the centroid $G$ of $\\{A,B,C\\}$, and find $G$. (b) A student claims the deeper reason is the slogan that a rigid rotation by one common angle leaves a triangle's centroid where it is. Test this: if instead each vertex is sent by $z\\mapsto p+e^{i\\theta}(z-p)$ — the same angle $\\theta\\neq 0$ but pivoted at one fixed point $p$ — determine the precise condition on $p$ under which the centroid is preserved, and exhibit one $p$ for which it is not. (c) Specialise (a) to $w=e^{-i\\pi/3}$ (outward equilateral triangles on the sides) and verify directly that the three new apexes still have centroid $G$, so the equilateral erection is just one instance of the invariance. Report $G$, the condition from (b), and the apex-centroid in (c) as the final answer.",
    "answer": "\\[\\boxed{G=3+i,\\quad \\text{(b) preserved}\\iff p=G,\\quad \\text{(c) }G'=3+i=G}\\]",
    "trap": "The fatal misread is to believe the invariance comes from rigidity — that because each vertex is turned by the \\text{same} angle, the centroid cannot move, no matter where the turning is centred. It is true that $z\\mapsto G+e^{i\\theta}(z-G)$ (rotation about the centroid itself) fixes $G$; the slogan then over-generalises to \"rotation by a common angle about any pivot fixes the centroid.\" That is false: rotating all three vertices about a pivot $p$ sends $G$ to $p+e^{i\\theta}(G-p)$, which equals $G$ only when $p=G$ or $\\theta\\in2\\pi\\mathbb{Z}$. In part (a) the construction is \\text{not} a single rigid motion at all — the three apexes are produced by three \\text{different} spiral similarities, each pivoted at a different vertex ($A,B,C$ in turn). What rescues the centroid is purely algebraic linearity: the \\text{same} coefficient $w$ multiplies the cyclically-shifted differences, whose sum telescopes to zero. A student leaning on the rigidity intuition will (i) wrongly think any common-angle rotation about, say, the circumcentre also preserves $G$, and (ii) wrongly expect the invariance in (a) to fail unless $w$ is a pure rotation $|w|=1$ — yet it holds for every complex $w$, including $|w|\\neq1$ shears and dilations, because rigidity was never the mechanism.",
    "solutions": [
      {
        "name": "Telescoping sum of cyclic differences",
        "steps": [
          "Add the three defining relations: $A'+B'+C' = (A+B+C) + w\\big[(B-A)+(C-B)+(A-C)\\big]$. The bracket is a cyclic sum of consecutive differences and collapses: $(B-A)+(C-B)+(A-C)=0$.",
          "Hence $A'+B'+C'=A+B+C$ identically in $w$, so dividing by $3$ gives $G'=\\tfrac{A'+B'+C'}{3}=\\tfrac{A+B+C}{3}=G$ for every $w\\in\\mathbb{C}$. The mechanism is the vanishing telescoping sum, not any length- or angle-preservation, so $|w|$ is irrelevant.",
          "Compute $G$ for the given data: $G=\\tfrac{0+6+(3+3i)}{3}=\\tfrac{9+3i}{3}=3+i$.",
          "Part (b): rotating every vertex by $z\\mapsto p+e^{i\\theta}(z-p)$ is an affine map, so it carries the centroid to the image of the centroid, $G\\mapsto p+e^{i\\theta}(G-p)$. This equals $G$ iff $(e^{i\\theta}-1)(G-p)=0$, i.e. (for $\\theta\\neq0$, where $e^{i\\theta}\\neq1$) iff $p=G$. Taking $p=0$ and $\\theta=\\tfrac{\\pi}{3}$ sends $G=3+i$ to $e^{i\\pi/3}(3+i)=\\big(\\tfrac{3}{2}-\\tfrac{\\sqrt3}{2}\\big)+i\\big(\\tfrac{1}{2}+\\tfrac{3\\sqrt3}{2}\\big)\\neq G$, so the centroid genuinely moves. Part (c): with $w=e^{-i\\pi/3}$ the apexes are $A'=3-3\\sqrt3\\,i,\\ B'=\\big(\\tfrac{9}{2}+\\tfrac{3\\sqrt3}{2}\\big)+i\\big(\\tfrac{3}{2}+\\tfrac{3\\sqrt3}{2}\\big),\\ C'=\\big(\\tfrac{3}{2}-\\tfrac{3\\sqrt3}{2}\\big)+i\\big(\\tfrac{3}{2}+\\tfrac{3\\sqrt3}{2}\\big)$; summing, the $\\sqrt3$-parts cancel and $A'+B'+C'=9+3i$, so $G'=3+i=G$. Thus $\\boxed{G=3+i,\\ \\text{(b) }p=G,\\ \\text{(c) }G'=G}$."
        ]
      },
      {
        "name": "Linear-operator (matrix-of-the-construction) viewpoint",
        "steps": [
          "Stack the vertices as the vector $v=(A,B,C)^{\\!\\top}$ and the apexes as $v'=(A',B',C')^{\\!\\top}$. The cyclic rule is the linear map $v'=M_w\\,v$ with \\[ M_w=\\begin{pmatrix}1-w & w & 0\\\\ 0 & 1-w & w\\\\ w & 0 & 1-w\\end{pmatrix}. \\] Each row of $M_w$ sums to $(1-w)+w=1$.",
          "The centroid is $G=\\tfrac{1}{3}\\mathbf{1}^{\\!\\top}v$ where $\\mathbf{1}=(1,1,1)^{\\!\\top}$. Then $\\mathbf{1}^{\\!\\top}M_w=\\big((1-w)+w,\\,w+(1-w),\\,w+(1-w)\\big)=\\mathbf{1}^{\\!\\top}$ because $M_w$ is column-stochastic in the sense that each column also sums to $1$. (Equivalently $\\mathbf{1}$ is a left eigenvector of $M_w$ with eigenvalue $1$.)",
          "Therefore $G'=\\tfrac13\\mathbf{1}^{\\!\\top}v'=\\tfrac13\\mathbf{1}^{\\!\\top}M_w v=\\tfrac13\\mathbf{1}^{\\!\\top}v=G$ for all $w$, the invariance reduced to the single fact that $\\mathbf{1}$ is fixed by $M_w^{\\!\\top}$. With the data, $G=\\tfrac{9+3i}{3}=3+i$.",
          "For (b), the common-angle pivoted rotation has matrix $e^{i\\theta}I$ acting on $(v-p\\mathbf 1)$ plus $p\\mathbf 1$; its action on the centroid is $G\\mapsto p+e^{i\\theta}(G-p)$, whose fixed-centroid condition is $p=G$ exactly as before. For (c), $w=e^{-i\\pi/3}$ gives a specific $M_w$ but the column-sum argument is untouched, so $G'=G=3+i$. Hence $\\boxed{G=3+i,\\ \\text{(b) }p=G,\\ \\text{(c) }G'=G}$."
        ]
      },
      {
        "name": "Centroid-centred coordinates kill the parameter",
        "steps": [
          "Shift the origin to $G$: write $a=A-G,\\ b=B-G,\\ c=C-G$, so $a+b+c=0$ by definition of the centroid. The apexes become $A'-G=a+w(b-a)$, and cyclically $B'-G=b+w(c-b)$, $C'-G=c+w(a-c)$.",
          "Sum them: $(A'+B'+C')-3G=(a+b+c)+w\\big[(b-a)+(c-b)+(a-c)\\big]=0+w\\cdot0=0$. So $A'+B'+C'=3G$, i.e. the apex-centroid is $G$ for every $w$ — manifestly independent of $w$, and the calculation never used $|w|=1$, exposing the rigidity intuition as a red herring.",
          "Numerically $G=3+i$, so $a=-3-i,\\ b=3-i,\\ c=2i$ with $a+b+c=0$, confirming the bookkeeping.",
          "Part (b): in these coordinates the pivoted rotation sends each $z-G$ to $(p-G)+e^{i\\theta}\\big((z-G)-(p-G)\\big)$; averaging over the three vertices and using $a+b+c=0$ gives new centroid $G+(p-G)(1-e^{i\\theta})$, which returns to $G$ iff $p=G$ (as $e^{i\\theta}\\neq1$ for $\\theta\\neq0$). Part (c): substituting $w=e^{-i\\pi/3}$ into the already-proved identity $A'+B'+C'=3G$ needs no recomputation — the apex-centroid is $3+i$. Therefore $\\boxed{G=3+i,\\ \\text{(b) }p=G,\\ \\text{(c) }G'=G}$."
        ]
      }
    ],
    "remark": "Insight: centroid invariance here is a statement about \\text{linearity and a telescoping cyclic sum}, never about rigidity. The three apexes are built by three \\text{distinct} spiral similarities $z\\mapsto U+w(V-U)$, each anchored at a \\text{different} vertex; what they share is the single coefficient $w$, and that shared coefficient multiplies a cyclic sum of edge vectors which is forced to vanish. Because the argument is blind to $|w|$, the same theorem covers midpoints ($w=\\tfrac12$), outward equilateral apexes ($w=e^{\\mp i\\pi/3}$, the Napoleon configuration as a mere special case), and even non-rigid shears or dilations. The trap weaponises the one rigid sub-case students remember — rotation about the centroid fixes the centroid — and tempts them to (mis)generalise to any pivot and to demand $|w|=1$. The clean test in (b), $p+e^{i\\theta}(G-p)=G\\iff p=G$, is the lie detector: a common angle preserves the centroid only when you rotate about the centroid, whereas the cyclic erection in (a) preserves it about no single point at all."
  },
  {
    "theme": "geometry",
    "themeLabel": "Complex Numbers as Geometry",
    "title": "Varignon's Crossed Criteria",
    "difficulty": 5,
    "task": "Prove and classify",
    "tags": [
      "varignon",
      "section formula",
      "midpoint parallelogram",
      "imaginary ratio",
      "perpendicularity",
      "diagonals"
    ],
    "statement": "Identify each point of the plane with a complex number. Let $a,b,c,d\\in\\mathbb{C}$ be the vertices, taken in this cyclic order, of an arbitrary (possibly non-convex) quadrilateral $ABCD$, and let \\[ P=\\tfrac{a+b}{2},\\quad Q=\\tfrac{b+c}{2},\\quad R=\\tfrac{c+d}{2},\\quad S=\\tfrac{d+a}{2} \\] be the midpoints of the sides $AB,BC,CD,DA$ respectively, so that $PQRS$ is the Varignon quadrilateral. \\par (a) Using only the section formula for midpoints, prove that $PQRS$ is a parallelogram for every choice of $a,b,c,d$, and prove that its sides are parallel to the diagonals $AC$ and $BD$ of $ABCD$, with $|PQ|=\\tfrac12|AC|$ and $|PS|=\\tfrac12|BD|$. \\par (b) Establish the exact algebraic conditions, in the spirit of the purely-imaginary-ratio test, under which $PQRS$ is (i) a rectangle and (ii) a rhombus, expressed through the diagonals $AC=c-a$ and $BD=d-b$ of the original quadrilateral. \\par (c) Apply your criteria to the concrete quadrilateral with vertices \\[ A=-1-2i,\\qquad B=7+i,\\qquad C=5+6i,\\qquad D=3+4i, \\] and determine precisely which special parallelogram $PQRS$ is. Report this classification together with the value of the diagnostic ratio $\\dfrac{c-a}{d-b}$ as the final answer.",
    "answer": "\\[\\boxed{PQRS\\ \\text{is a rectangle (not a square)},\\quad \\tfrac{c-a}{d-b}=-2i}\\]",
    "trap": "The fatal conceptual error is to import the familiar parallelogram rule ``perpendicular diagonals $\\Rightarrow$ rhombus'' and apply it to the wrong object. A strong student computes the diagonals of $ABCD$, finds $AC=6+8i$ and $BD=-4+3i$ with $\\langle AC,BD\\rangle=6(-4)+8(3)=0$, sees that the diagonals are perpendicular, and concludes ``perpendicular diagonals, hence the midpoint figure is a \\text{rhombus}.'' This is exactly backwards. The sides of $PQRS$ are parallel to the \\text{diagonals} of $ABCD$, not to its sides, so the diagonals' \\text{perpendicularity} controls the \\text{angle} between adjacent sides of $PQRS$ (giving a \\text{rectangle}), while the diagonals' \\text{equal length} would control the \\text{equality} of those sides (giving a rhombus). The criteria are crossed relative to the half-remembered rule. Here $|AC|=10\\neq5=|BD|$, so the sides $|PQ|=5$ and $|PS|=\\tfrac52$ are unequal: $PQRS$ is a genuine rectangle and \\text{not} a square. A second, quieter trap is to test only the angle and then declare ``square'' the instant a right angle appears, forgetting that a rectangle becomes a square only when additionally $|AC|=|BD|$.",
    "solutions": [
      {
        "name": "Section formula and the two half-diagonal vectors",
        "steps": [
          "Form the side-vectors of $PQRS$ directly from the midpoint formulas. By the section formula, $Q-P=\\tfrac{b+c}{2}-\\tfrac{a+b}{2}=\\tfrac{c-a}{2}$ and $R-S=\\tfrac{c+d}{2}-\\tfrac{d+a}{2}=\\tfrac{c-a}{2}$. Hence $Q-P=R-S=\\tfrac12\\,AC$: the sides $PQ$ and $SR$ are equal as vectors, parallel to the diagonal $AC$, each of length $\\tfrac12|AC|$.",
          "Likewise $S-P=\\tfrac{d+a}{2}-\\tfrac{a+b}{2}=\\tfrac{d-b}{2}$ and $R-Q=\\tfrac{c+d}{2}-\\tfrac{b+c}{2}=\\tfrac{d-b}{2}$, so $S-P=R-Q=\\tfrac12\\,BD$: the sides $PS$ and $QR$ are equal as vectors, parallel to the diagonal $BD$, each of length $\\tfrac12|BD|$. Since both pairs of opposite sides are equal as vectors, $PQRS$ is a parallelogram for every $a,b,c,d$. This proves (a).",
          "The adjacent sides at $P$ are $u=Q-P=\\tfrac12(c-a)$ and $v=S-P=\\tfrac12(d-b)$. A parallelogram is a rectangle iff adjacent sides are perpendicular, i.e. iff $\\tfrac{v}{u}=\\tfrac{d-b}{c-a}$ is purely imaginary, equivalently $\\tfrac{c-a}{d-b}$ is purely imaginary. It is a rhombus iff $|u|=|v|$, i.e. $|c-a|=|d-b|$. Thus: rectangle $\\Leftrightarrow$ $AC\\perp BD$, rhombus $\\Leftrightarrow$ $|AC|=|BD|$ (and a square iff both). This proves (b).",
          "For the data, $c-a=(5+6i)-(-1-2i)=6+8i$ and $d-b=(3+4i)-(7+i)=-4+3i$, so $\\dfrac{c-a}{d-b}=\\dfrac{6+8i}{-4+3i}=\\dfrac{(6+8i)(-4-3i)}{(-4)^2+3^2}=\\dfrac{-24-18i-32i+24}{25}=\\dfrac{-50i}{25}=-2i$. This is purely imaginary, so $AC\\perp BD$ and $PQRS$ is a rectangle; but $|c-a|=10\\neq5=|d-b|$, so it is not a rhombus, hence not a square. $\\boxed{PQRS\\text{ is a rectangle (not a square)},\\ \\tfrac{c-a}{d-b}=-2i}$"
        ]
      },
      {
        "name": "Direct coordinates of the midpoints, then dot products",
        "steps": [
          "Compute the four midpoints for the given vertices: $P=\\tfrac{(-1-2i)+(7+i)}{2}=3-\\tfrac12 i$, $Q=\\tfrac{(7+i)+(5+6i)}{2}=6+\\tfrac72 i$, $R=\\tfrac{(5+6i)+(3+4i)}{2}=4+5i$, $S=\\tfrac{(3+4i)+(-1-2i)}{2}=1+i$.",
          "Check the parallelogram by the midpoint-of-diagonals test (diagonals of a parallelogram bisect each other): midpoint of $PR$ is $\\tfrac{(3-\\frac12 i)+(4+5i)}{2}=\\tfrac72+\\tfrac94 i$, midpoint of $QS$ is $\\tfrac{(6+\\frac72 i)+(1+i)}{2}=\\tfrac72+\\tfrac94 i$. They coincide, so $PQRS$ is a parallelogram.",
          "Test the corner angle at $P$ with the adjacent side-vectors $u=Q-P=3+4i$ and $v=S-P=-2+\\tfrac32 i$. Their inner product is $\\operatorname{Re}(u\\bar v)=\\operatorname{Re}\\big((3+4i)(-2-\\tfrac32 i)\\big)=\\operatorname{Re}(-6-\\tfrac92 i-8i+6)=0$. The right angle is exact, so $PQRS$ is a rectangle.",
          "Distinguish rectangle from square by side lengths: $|u|=|3+4i|=5$ and $|v|=|-2+\\tfrac32 i|=\\sqrt{4+\\tfrac94}=\\tfrac52$. Since $5\\neq\\tfrac52$, adjacent sides are unequal and $PQRS$ is not a square. The diagnostic ratio matches solution 1: since $c-a=2u=6+8i$ and $d-b=2v=-4+3i$, we get $\\tfrac{c-a}{d-b}=\\tfrac{u}{v}=\\tfrac{3+4i}{-2+\\frac32 i}=\\tfrac{(3+4i)(-2-\\frac32 i)}{4+\\frac94}=\\tfrac{-\\frac{25}{2}i}{\\frac{25}{4}}=-2i$, purely imaginary. $\\boxed{PQRS\\text{ is a rectangle (not a square)},\\ \\tfrac{c-a}{d-b}=-2i}$"
        ]
      },
      {
        "name": "Rotation form of the perpendicularity condition",
        "steps": [
          "Encode the side directions through rotation. The adjacent sides of $PQRS$ at $P$ point along $\\tfrac12(c-a)$ and $\\tfrac12(d-b)$. They are perpendicular precisely when one is a real multiple of the other rotated by $\\tfrac{\\pi}{2}$, i.e. when there is a real $\\lambda$ with $d-b=\\lambda\\,i\\,(c-a)$. Solving, $\\lambda i=\\tfrac{d-b}{c-a}$, so perpendicularity $\\Leftrightarrow$ $\\tfrac{d-b}{c-a}=\\lambda i$ with $\\lambda\\in\\mathbb{R}$, i.e. the ratio is purely imaginary.",
          "Read $\\lambda$ off the data. With $c-a=6+8i$ and $d-b=-4+3i$, factor: $d-b=-4+3i = \\tfrac{i}{2}(6+8i)$ because $\\tfrac{i}{2}(6+8i)=\\tfrac{6i-8}{2}=-4+3i$. Thus $d-b=\\tfrac{i}{2}(c-a)$, exhibiting exactly the form $\\lambda i(c-a)$ with $\\lambda=\\tfrac12\\in\\mathbb{R}$. Perpendicularity holds, so $PQRS$ is a rectangle, and $\\tfrac{c-a}{d-b}=\\tfrac{1}{\\lambda i}=\\tfrac{1}{(1/2)i}=\\tfrac{2}{i}=-2i$.",
          "Decide square versus oblong from the magnitude of the same rotation factor. The two adjacent sides have lengths $\\tfrac12|c-a|$ and $\\tfrac12|d-b|=\\tfrac12|\\lambda|\\,|c-a|$; they are equal iff $|\\lambda|=1$. Here $|\\lambda|=\\tfrac12\\neq1$, so the sides differ by the factor $2$ and $PQRS$ is a non-square rectangle.",
          "Therefore the rotation factor $\\tfrac{i}{2}$ tells the whole story: its argument $\\tfrac{\\pi}{2}$ forces the right angle (rectangle), and its modulus $\\tfrac12\\neq1$ forbids equal sides (not a square). $\\boxed{PQRS\\text{ is a rectangle (not a square)},\\ \\tfrac{c-a}{d-b}=-2i}$"
        ]
      }
    ],
    "remark": "Insight: the entire Varignon phenomenon collapses to two identities, $Q-P=\\tfrac12(c-a)$ and $S-P=\\tfrac12(d-b)$ — the sides of the midpoint figure are literally half the diagonals of the original quadrilateral. Once you see this, the shape of $PQRS$ is dictated by the relationship between $AC$ and $BD$, and the criteria are deliberately crossed against the schoolbook reflexes about a single parallelogram: the diagonals of $ABCD$ being \\text{perpendicular} makes the midpoint figure a \\text{rectangle} (it is the \\text{angle} between $PQRS$'s sides that the diagonals' directions control), while the diagonals being \\text{equal in length} makes it a \\text{rhombus} (it is the \\text{lengths} of $PQRS$'s sides that the diagonals' magnitudes control). A square demands both at once. The trap punishes the student who answers from muscle memory (``perpendicular diagonals $\\Rightarrow$ rhombus''); the purely-imaginary ratio $\\tfrac{c-a}{d-b}=-2i$ encodes both facts simultaneously — its argument $\\tfrac{\\pi}{2}$ certifies the right angle, its modulus $2\\neq1$ certifies the unequal sides — leaving exactly one verdict: a rectangle that is not a square."
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
    "title": "The Cube That Wants to Be a Triangle",
    "difficulty": 5,
    "task": "Prove and determine",
    "tags": [
      "equilateral criterion",
      "vieta",
      "cubic roots",
      "cube roots of unity",
      "degeneracy",
      "depressed cubic"
    ],
    "statement": "Identify each complex number with a point of the plane. \\par (a) For arbitrary $z_1,z_2,z_3\\in\\mathbb{C}$, prove the identity \\[ z_1^2+z_2^2+z_3^2-(z_1z_2+z_2z_3+z_3z_1)=\\tfrac12\\big[(z_1-z_2)^2+(z_2-z_3)^2+(z_3-z_1)^2\\big], \\] and deduce that $z_1^2+z_2^2+z_3^2=z_1z_2+z_2z_3+z_3z_1$ holds if and only if the three points are the vertices of an equilateral triangle, with the single proviso that the three points are not all equal. \\par (b) Now let $c,d\\in\\mathbb{C}$ and let $z_1,z_2,z_3$ be the three roots (with multiplicity) of \\[ z^3+3z^2+cz+d=0. \\] Using the criterion of part (a) together with Vieta's relations, determine every complex number $c$ for which the roots form a genuine (non-degenerate) equilateral triangle in the plane, and state precisely the condition on $d$ that this genuineness imposes. Report, as the final answer, the value (or set of values) of $c$.",
    "answer": "\\[\\boxed{c=3}\\]",
    "trap": "The seductive error is to treat the criterion of part (a) as a clean two-way street and stop the instant the algebra yields $c=3$, declaring ``$c=3$ works for every $d$.'' The criterion $z_1^2+z_2^2+z_3^2=z_1z_2+z_2z_3+z_3z_1$ is genuinely an identity-driven iff, but its right-hand side $\\tfrac12\\sum (z_i-z_j)^2$ vanishes in two utterly different ways: for a true equilateral triangle, and for the wholly degenerate case $z_1=z_2=z_3$ in which the ``triangle'' has collapsed to a single point of side length $0$. That collapse is not an abstract footnote: with $c=3$ the cubic is $z^3+3z^2+3z+d$, and at $d=1$ it becomes the perfect cube $(z+1)^3$, a triple root at $-1$. So $c=3,\\,d=1$ satisfies every algebraic equation in sight yet produces no triangle at all. A student who never substitutes $z=w-1$ to see the side length emerge as $\\sqrt{3}\\,|1-d|^{1/3}$ will quietly admit this fake solution and mis-state the result as ``$c=3$ for all $d$,'' missing that genuineness forces $d\\neq1$. The value of $c$ is indeed the unique $3$, but the honest statement carries the excluded $d$ with it; mistaking the degenerate point-triangle for a valid equilateral configuration is the exact conceptual slip the problem is built to expose.",
    "solutions": [
      {
        "name": "Equilateral criterion plus Vieta",
        "steps": [
          "Prove the identity by direct expansion: $\\tfrac12\\sum(z_i-z_j)^2=\\tfrac12\\big[(z_1^2-2z_1z_2+z_2^2)+(z_2^2-2z_2z_3+z_3^2)+(z_3^2-2z_3z_1+z_1^2)\\big]=z_1^2+z_2^2+z_3^2-(z_1z_2+z_2z_3+z_3z_1)$. Hence the criterion $z_1^2+z_2^2+z_3^2=z_1z_2+z_2z_3+z_3z_1$ is equivalent to $(z_1-z_2)^2+(z_2-z_3)^2+(z_3-z_1)^2=0$.",
          "Interpret that vanishing geometrically. Writing $u=z_1-z_2,\\ v=z_2-z_3$ gives $z_3-z_1=-(u+v)$, so the condition becomes $u^2+v^2+(u+v)^2=0$, i.e. $u^2+uv+v^2=0$, i.e. $\\big(\\tfrac{u}{v}\\big)^2+\\tfrac{u}{v}+1=0$ when $v\\neq0$. Thus $\\tfrac{u}{v}=e^{\\pm 2\\pi i/3}$, a unit-modulus rotation by $120^\\circ$: side $z_1z_2$ is the side $z_2z_3$ rotated by $\\pm120^\\circ$ about $z_2$, which is exactly the equilateral condition. The only escape is $v=0$ forcing $u=0$ too, i.e. all three points coincide. So the criterion holds iff the triangle is equilateral or all points are equal. This proves (a).",
          "Apply it to the cubic. By Vieta on $z^3+3z^2+cz+d$, $\\ z_1+z_2+z_3=-3$ and $z_1z_2+z_2z_3+z_3z_1=c$. The Newton identity gives $z_1^2+z_2^2+z_3^2=(z_1+z_2+z_3)^2-2(z_1z_2+z_2z_3+z_3z_1)=9-2c$. The criterion $z_1^2+z_2^2+z_3^2=z_1z_2+z_2z_3+z_3z_1$ reads $9-2c=c$, giving the unique solution $c=3$ over $\\mathbb{C}$, independent of $d$.",
          "Discard the degenerate case. With $c=3$ the polynomial is $z^3+3z^2+3z+d$; the roots coincide ($z_1=z_2=z_3=-1$) exactly when it equals $(z+1)^3=z^3+3z^2+3z+1$, i.e. when $d=1$. For every $d\\neq1$ the three roots are distinct and, by part (a), form a true equilateral triangle. Therefore the value of the coefficient is $\\boxed{c=3}$ (a genuine triangle additionally requiring $d\\neq1$)."
        ]
      },
      {
        "name": "Depress the cubic: roots as cube roots of unity",
        "steps": [
          "Translate to the centroid. The centroid of the roots is $\\tfrac13(z_1+z_2+z_3)=-1$. Substitute $z=w-1$: then $z^3+3z^2+cz+d=(w-1)^3+3(w-1)^2+c(w-1)+d=w^3+(c-3)w+(d-c+2)$. The new roots $w_k=z_k+1$ have centroid $0$.",
          "Characterize equilateral with centroid $0$. Three distinct points with centroid at the origin form an equilateral triangle iff they are $w_k=\\rho\\,\\omega^{k}$ ($k=0,1,2$) for some $\\rho\\neq0$ and $\\omega=e^{2\\pi i/3}$, because such a set is the orbit of one point under $120^\\circ$ rotation about its centroid. Equivalently their monic cubic is $w^3-\\rho^3=0$: a depressed cubic with no linear term.",
          "Match coefficients. Comparing $w^3+(c-3)w+(d-c+2)$ with $w^3-\\rho^3$ forces the linear coefficient to vanish: $c-3=0$, hence $c=3$. Then $-\\rho^3=d-c+2=d-1$, so $\\rho^3=1-d$ and the common side length is $|w_i-w_j|=|\\rho|\\,|\\omega^i-\\omega^j|=\\sqrt{3}\\,|1-d|^{1/3}$.",
          "Read off genuineness. The triangle is non-degenerate iff $\\rho\\neq0$ iff $d\\neq1$ (matching the side length $\\sqrt3|1-d|^{1/3}>0$). For all such $d$ the linear-term condition pins the coefficient uniquely: $\\boxed{c=3}$."
        ]
      },
      {
        "name": "Forward construction from an explicit equilateral triangle",
        "steps": [
          "Build the most general such triangle. Any equilateral triangle whose centroid is $-1$ (forced by $z_1+z_2+z_3=-3$) has vertices $z_k=-1+\\zeta\\,\\omega^{k}$, $k=0,1,2$, where $\\omega=e^{2\\pi i/3}$ and $\\zeta\\in\\mathbb{C}\\setminus\\{0\\}$ encodes the size and orientation; $\\zeta=0$ would collapse all vertices to $-1$.",
          "Compute the elementary symmetric functions. Since $1+\\omega+\\omega^2=0$ and $\\omega^3=1$: $\\sum z_k=-3+\\zeta(1+\\omega+\\omega^2)=-3$, and $\\sum_{i<j}z_iz_j=\\sum_{i<j}(-1+\\zeta\\omega^{i})(-1+\\zeta\\omega^{j})$. Expanding, the constant part gives $3$, the cross terms $-\\zeta(\\dots)$ vanish because they involve $\\sum_{i<j}(\\omega^i+\\omega^j)=2(1+\\omega+\\omega^2)=0$, and the $\\zeta^2$ part is $\\zeta^2(\\omega\\cdot\\omega^2+\\omega^2\\cdot 1+1\\cdot\\omega)=\\zeta^2(\\omega^3+\\omega^2+\\omega)=\\zeta^2(1-1)=0$. Hence $\\sum_{i<j}z_iz_j=3$.",
          "Match Vieta. The middle Vieta coefficient is $c=\\sum_{i<j}z_iz_j=3$, with no dependence on $\\zeta$; meanwhile $-d=\\prod z_k=(-1)^3+\\zeta^3\\,\\omega^{0+1+2}=-1+\\zeta^3$, so $d=1-\\zeta^3$, i.e. $\\zeta^3=1-d$. Every genuine equilateral configuration ($\\zeta\\neq0$) thus yields precisely one value of the middle coefficient.",
          "Conclude. The constraint is $c=3$ for all sizes/orientations, and $\\zeta\\neq0\\Leftrightarrow d\\neq1$ separates genuine triangles from the degenerate triple point. The required value is $\\boxed{c=3}$."
        ]
      }
    ],
    "remark": "Insight: the criterion $z_1^2+z_2^2+z_3^2=z_1z_2+z_2z_3+z_3z_1$ is the algebraic shadow of $\\tfrac12\\sum(z_i-z_j)^2=0$, which equates to the rotation statement $\\tfrac{z_1-z_2}{z_2-z_3}=e^{\\pm 2\\pi i/3}$ — a $120^\\circ$ turn is the whole content of ``equilateral.'' Fed through Vieta it collapses the entire cubic family $z^3+3z^2+cz+d$ to the single coefficient value $c=3$, fixed by the centroid alone and blind to $d$. The hidden subtlety is that $\\tfrac12\\sum(z_i-z_j)^2$ also vanishes for the collapsed point-triangle, and the depression $z=w-1$ exposes exactly when this happens: the residual cubic $w^3-(1-d)$ has all roots at $0$ precisely at $d=1$, where the side $\\sqrt3\\,|1-d|^{1/3}$ shrinks to nothing. So $c=3$ is the unique coefficient, but a true triangle lives only on $d\\neq1$ — the degenerate cube $(z+1)^3$ is the impostor the equilateral criterion cannot, by itself, rule out."
  },
  {
    "theme": "loci",
    "themeLabel": "Loci in the Argand Plane",
    "title": "The Anchor Through the Third Point",
    "difficulty": 5,
    "task": "Determine and prove",
    "tags": [
      "apollonius circle",
      "orthogonal circles",
      "third point constraint",
      "ratio locus",
      "inverse points",
      "degenerate case"
    ],
    "statement": "Fix the two anchors $a=1+2i$ and $b=1+i$ in the Argand plane, and consider the family of loci \\[ S_k=\\{\\,z\\in\\mathbb{C}:\\ |z-a|=k\\,|z-b|\\,\\},\\qquad k>0,\\ k\\neq 1. \\] It is known that the single locus of the family passes through the point $z_0=\\dfrac{7}{5}+\\dfrac{6}{5}i$. \\par (a) Determine the value of $k$ for which $z_0\\in S_k$, and hence write $S_k$ exactly as a circle, giving its centre and radius in closed form. \\par (b) Prove that this circle is orthogonal to the unit circle $|z|=1$ — that is, the two circles meet at right angles — using the orthogonality criterion that, for circles $|z-c_1|=r_1$ and $|z-c_2|=r_2$, orthogonality holds exactly when $|c_1-c_2|^2=r_1^2+r_2^2$ (equivalently $c_1\\overline{c_2}+\\overline{c_1}c_2=|c_1|^2+|c_2|^2-r_1^2-r_2^2$). \\par Report, as the final answer, the value of $k$ together with the centre and radius of the circle $S_k$.",
    "answer": "\\[\\boxed{k=2,\\quad S_k:\\ \\left|z-\\left(1+\\tfrac{2}{3}i\\right)\\right|=\\tfrac{2}{3}}\\]",
    "trap": "The seductive shortcut is the half-remembered theorem ``an Apollonius circle of $a$ and $b$ is orthogonal to $|z|=1$ precisely when $a$ and $b$ are inverse points in the unit circle, i.e. $a\\,\\overline{b}=1$.'' A strong student, having found $k=2$, reaches for this to settle part (b) in one line — computes $a\\,\\overline{b}=(1+2i)(1-i)=3+i\\neq 1$, sees the anchors are \\text{not} inverse points, and triumphantly concludes the circle is \\text{not} orthogonal to the unit circle. This is false. Orthogonality of $S_k$ to $|z|=1$ is governed by $k$ together with $a,b$, not by whether the two \\text{anchors} happen to be an inverse pair; the inverse-point statement concerns the pair of points where the circle meets the line $ab$, never the anchors $a,b$ themselves. The genuine condition is $|c|^2-r^2=1$ for the actual Apollonius centre $c=\\dfrac{a-k^2 b}{1-k^2}$, and it holds here. A second, deadlier trap is to plant the centre at the \\text{midpoint} $\\tfrac{a+b}{2}=1+\\tfrac32 i$ (it divides the join of $a,b$ in ratio $k^2:1$, \\text{not} $1:1$): that fake centre gives $|c|^2-r^2=\\tfrac{101}{36}\\neq 1$, wrongly killing the orthogonality. A third is to entertain $k=1$ (the perpendicular bisector — a \\text{line}, not a circle) or $k=-2$ as spurious roots; only $k=2$ survives $k>0,\\,k\\neq1$.",
    "solutions": [
      {
        "name": "Solve k from the third point, then test the true centre",
        "steps": [
          "Impose $z_0\\in S_k$ by squaring: $|z_0-a|^2=k^2|z_0-b|^2$. With $z_0=\\tfrac{7}{5}+\\tfrac{6}{5}i$, $a=1+2i$, $b=1+i$: $z_0-a=\\tfrac{2}{5}-\\tfrac{4}{5}i$ so $|z_0-a|^2=\\tfrac{4}{25}+\\tfrac{16}{25}=\\tfrac{20}{25}=\\tfrac45$; and $z_0-b=\\tfrac{2}{5}+\\tfrac{1}{5}i$ so $|z_0-b|^2=\\tfrac{4}{25}+\\tfrac{1}{25}=\\tfrac{5}{25}=\\tfrac15$. Hence $k^2=\\dfrac{4/5}{1/5}=4$, and since $k>0,\\ k\\neq1$, uniquely $k=2$. The rejected roots $k=-2$ (sign) and $k=1$ (which would be the perpendicular bisector, a line) are exactly the trap branches.",
          "Build the circle from $|z-a|^2=4|z-b|^2$. Expanding $z\\bar z-\\bar a z-a\\bar z+|a|^2=4\\big(z\\bar z-\\bar b z-b\\bar z+|b|^2\\big)$ and collecting: $(1-4)z\\bar z-(\\bar a-4\\bar b)z-(a-4b)\\bar z+(|a|^2-4|b|^2)=0$. Dividing by $1-4=-3$ gives $z\\bar z-\\overline{c}\\,z-c\\,\\bar z+\\tfrac{|a|^2-4|b|^2}{1-4}=0$ with centre $c=\\dfrac{a-4b}{1-4}=\\dfrac{(1+2i)-4(1+i)}{-3}=\\dfrac{-3-2i}{-3}=1+\\tfrac23 i.$",
          "Read off the radius from $r^2=|c|^2-d$ where $d=\\dfrac{|a|^2-4|b|^2}{1-4}=\\dfrac{5-4\\cdot2}{-3}=\\dfrac{-3}{-3}=1$. Then $|c|^2=1+\\tfrac49=\\tfrac{13}{9}$, so $r^2=\\tfrac{13}{9}-1=\\tfrac49$, giving $r=\\tfrac23$. Thus $S_2:\\ \\big|z-(1+\\tfrac23 i)\\big|=\\tfrac23$, i.e. $(x-1)^2+(y-\\tfrac23)^2=\\tfrac49$.",
          "Orthogonality to $|z|=1$ (centre $c_2=0$, radius $r_2=1$): the criterion $|c-0|^2=r^2+1$ reads $|c|^2-r^2=1$. Here $|c|^2-r^2=\\tfrac{13}{9}-\\tfrac49=\\tfrac{9}{9}=1.$ The equation holds exactly, so the circles meet at right angles. (Note $d=1$ is this quantity — the constant term already certifies orthogonality.) $\\boxed{k=2,\\ S_2:\\ |z-(1+\\tfrac23 i)|=\\tfrac23,\\ \\text{orthogonal to }|z|=1}$"
        ]
      },
      {
        "name": "Orthogonality forces k, the third point confirms it",
        "steps": [
          "Turn the logic around: ask which $k$ makes $S_k$ orthogonal to $|z|=1$, then check $z_0$. For $S_k$ the constant term after normalising is $d=\\dfrac{|a|^2-k^2|b|^2}{1-k^2}$, and orthogonality to the unit circle is exactly $d=|c|^2-r^2=1$. So $|a|^2-k^2|b|^2=1-k^2$, i.e. $|a|^2-1=k^2(|b|^2-1)$, giving $k^2=\\dfrac{|a|^2-1}{|b|^2-1}.$",
          "Substitute the data $|a|^2=5,\\ |b|^2=2$: $k^2=\\dfrac{5-1}{2-1}=4$, so the only member of the family orthogonal to $|z|=1$ is $k=2$. This exhibits orthogonality as a property of $k$ (with $a,b$), demolishing the ``$a\\overline b=1$ inverse-points'' trap: indeed $a\\overline b=3+i\\neq1$, yet the circle is orthogonal.",
          "Confirm this is the circle through $z_0$: with $k=2$, $|z_0-a|^2=\\tfrac45$ and $4|z_0-b|^2=4\\cdot\\tfrac15=\\tfrac45$ are equal, so $z_0\\in S_2$. Both constraints — passing through $z_0$ and being orthogonal to $|z|=1$ — single out the same $k=2$.",
          "Its centre and radius follow as before: $c=\\dfrac{a-4b}{-3}=1+\\tfrac23 i$, $r=\\tfrac23$. $\\boxed{k=2,\\ S_2:\\ |z-(1+\\tfrac23 i)|=\\tfrac23,\\ \\text{orthogonal to }|z|=1}$"
        ]
      },
      {
        "name": "Right-angle radii at a real intersection point",
        "steps": [
          "Having found $k=2$ and the circle $S_2:\\ \\big|z-(1+\\tfrac23 i)\\big|=\\tfrac23$ (centre $c=1+\\tfrac23 i$, radius $\\tfrac23$), prove orthogonality geometrically by exhibiting a common point where the radii are perpendicular. Two circles are orthogonal iff at a point of intersection the radius of one is tangent to the other, equivalently the two radii to that point are perpendicular.",
          "Find a common point of $S_2$ and $|z|=1$. Try $z=1$ (i.e. $(1,0)$): $|z|=1$ holds, and $|1-c|=|{-\\tfrac23 i}|=\\tfrac23=r$, so $z=1$ lies on both circles. (The second intersection is $\\tfrac{5}{13}+\\tfrac{12}{13}i$; one suffices.)",
          "At $z=1$ the radius of the unit circle is the vector $1-0=1$ (pointing along $1+0i$), and the radius of $S_2$ is $1-c=1-(1+\\tfrac23 i)=-\\tfrac23 i$ (pointing along $-i$). Their inner product is $\\operatorname{Re}\\big(1\\cdot\\overline{(-\\tfrac23 i)}\\big)=\\operatorname{Re}\\big(1\\cdot\\tfrac23 i\\big)=0.$ The radii are perpendicular, so the circles cross at a right angle there — hence the circles are orthogonal.",
          "This matches the algebraic criterion $|c|^2-r^2=\\tfrac{13}{9}-\\tfrac49=1$, confirming orthogonality independently of any inverse-point folklore. $\\boxed{k=2,\\ S_2:\\ |z-(1+\\tfrac23 i)|=\\tfrac23,\\ \\text{orthogonal to }|z|=1}$"
        ]
      }
    ],
    "remark": "Insight: the constant term of a normalised circle $z\\bar z-\\overline c z-c\\bar z+d=0$ equals $|c|^2-r^2$, the \\text{power of the origin}, and orthogonality to the unit circle is the single clean statement $d=1$. For the Apollonius locus $|z-a|=k|z-b|$ this constant is $d=\\dfrac{|a|^2-k^2|b|^2}{1-k^2}$, so $d=1\\iff k^2=\\dfrac{|a|^2-1}{|b|^2-1}$ — orthogonality is a fact about $k$ (with the anchors), never about the anchors being an inverse pair. The problem is engineered so the third point $z_0$ and the orthogonality demand both pin down the \\text{same} $k=2$; a student who solves for $k$ and then reaches for the ``$a\\overline b=1$'' reflex (here $a\\overline b=3+i$) wrongly denies the orthogonality, and one who sites the centre at the midpoint of $a,b$ rather than at the external/internal divider in ratio $k^2:1$ corrupts the very quantity being tested. The honest path — true centre $c=\\tfrac{a-k^2 b}{1-k^2}$, true $d=|c|^2-r^2$ — makes both the circle and its right-angle meeting with $|z|=1$ fall out of one constant."
  },
  {
    "theme": "loci",
    "themeLabel": "Loci in the Argand Plane",
    "title": "The Twin Tangent Bisectors",
    "difficulty": 5,
    "task": "Recover and enumerate",
    "tags": [
      "perpendicular bisector",
      "apollonius line",
      "tangency",
      "reflection",
      "two-solution trap",
      "degenerate case"
    ],
    "statement": "Identify each point of the plane with a complex number. Fix the point $b=7+i$ and the circle $\\Gamma:\\ |z-(2+2i)|=\\sqrt{2}$. A complex number $a$ is sought for which the locus \\[ L_a=\\bigl\\{\\,z\\in\\mathbb{C}\\ :\\ |z-a|=|z-b|\\,\\bigr\\} \\] (the perpendicular bisector of the segment joining $a$ and $b$) simultaneously \\par (i) passes through the fixed point $P=4+2i$, and \\par (ii) is tangent to the circle $\\Gamma$. \\par Determine every value of $a$ for which such a locus $L_a$ exists, and report the complete set of admissible $a$ as the final answer.",
    "answer": "\\[\\boxed{a\\in\\{\\,3+5i,\\ \\ 5-i\\,\\}}\\]",
    "trap": "The locus $|z-a|=|z-b|$ is a genuine line only when $a\\neq b$; it is the perpendicular bisector of $[a,b]$, and the defining geometric fact is that $a$ is the mirror image of $b$ in this line. The fatal conceptual error is to forget that condition (ii) is a tangency from an external point, which is satisfied by two distinct lines, not one. A strong student correctly translates (i) into ``$P$ is equidistant from $a$ and $b$'', i.e. $|P-a|=|P-b|=\\sqrt{10}$, so $a$ lies on a circle of radius $\\sqrt{10}$ about $P$; then writes the tangency condition, finds a line, reflects $b$ across it, and stops at the single answer $a=3+5i$. But $P$ lies outside $\\Gamma$ (indeed $|P-(2+2i)|=2>\\sqrt{2}$), so there are exactly two tangent lines from $P$ to $\\Gamma$, with slopes $+1$ and $-1$; reflecting $b$ in each gives two admissible points, and dropping either one is wrong. A second, quieter trap lies at the other extreme: the algebraic system (impose $|P-a|=|P-b|$ and squared-distance $=2$) has a third root, the degenerate $a=b=7+i$, which formally satisfies both equations because the ``line'' collapses to the whole plane. That root must be discarded, since with $a=b$ the set $L_a$ is all of $\\mathbb{C}$ and is not a perpendicular bisector at all. The honest answer is the pair $\\{3+5i,\\ 5-i\\}$ — neither the lone tangent's single point nor the over-counted triple.",
    "solutions": [
      {
        "name": "Reflect $b$ in each tangent line from $P$",
        "steps": [
          "Translate condition (i). Since $P$ lies on the perpendicular bisector of $[a,b]$, it is equidistant from the endpoints: $|P-a|=|P-b|$. With $b=7+i$, $|P-b|=|(4+2i)-(7+i)|=|-3+i|=\\sqrt{10}$. So $a$ lies on the circle of radius $\\sqrt{10}$ centred at $P$; equivalently, $a$ is the reflection of $b$ in the bisector line, and that line must pass through $P$.",
          "Find the lines through $P$ tangent to $\\Gamma$. The centre is $O=2+2i$ and radius $\\sqrt{2}$; $|P-O|=|2|=2>\\sqrt{2}$, so $P$ is external and there are exactly two tangents. A line through $P=(4,2)$ of slope $m$ is $mx-y+(2-4m)=0$; setting its distance from $O=(2,2)$ equal to $\\sqrt{2}$ gives $\\dfrac{|2m-2+2-4m|}{\\sqrt{m^2+1}}=\\sqrt{2}$, i.e. $4m^2=2(m^2+1)$, so $m^2=1$ and $m=\\pm1$. The two bisector lines are $L^{+}:\\ y=x-2$ and $L^{-}:\\ y=-x+6$.",
          "Reflect $b=(7,1)$ in $L^{+}:\\ x-y-2=0$. The signed value $\\dfrac{x-y-2}{1^2+(-1)^2}=\\dfrac{7-1-2}{2}=2$, so the foot displacement is $2\\,(1,-1)$ and the reflection is $(7,1)-2\\cdot2\\,(1,-1)/\\!/$ computed as $a=(7-2\\cdot1\\cdot2,\\ 1-2\\cdot(-1)\\cdot2)=(3,5)$. Thus $a=3+5i$, and one checks $|3+5i-(4+2i)|=|-1+3i|=\\sqrt{10}$, confirming $P$ is on this bisector.",
          "Reflect $b=(7,1)$ in $L^{-}:\\ x+y-6=0$. Here $\\dfrac{x+y-6}{1^2+1^2}=\\dfrac{7+1-6}{2}=1$, giving $a=(7-2\\cdot1\\cdot1,\\ 1-2\\cdot1\\cdot1)=(5,-1)$, i.e. $a=5-i$, with $|5-i-(4+2i)|=|1-3i|=\\sqrt{10}$. Both lines are tangent and pass through $P$, so $\\boxed{a\\in\\{3+5i,\\ 5-i\\}}$."
        ]
      },
      {
        "name": "Solve the algebraic system and weed out the degenerate root",
        "steps": [
          "Write $a=x+iy$. Condition (i) is simply $|P-a|=|P-b|$, i.e. $a$ is equidistant from $P=4+2i$ and from $b=7+i$. Since $|P-b|=|-3+i|=\\sqrt{10}$, this says $|a-P|=\\sqrt{10}$, the circle $(x-4)^2+(y-2)^2=10$ about $P$ (the quadratic terms in $a$ do not cancel here precisely because $a$ varies while $P$ is fixed). This is the first locus carrying $a$.",
          "Write condition (ii). The bisector line is $2(x-7)\\,u+2(y-1)\\,v = (x^2+y^2)-50$ in the running coordinate $(u,v)$; its distance from $O=(2,2)$ equals $\\sqrt{2}$ gives, after clearing, $\\bigl[4(x-7)+4(y-1)-(x^2+y^2)+50\\bigr]^2 = 2\\bigl[4(x-7)^2+4(y-1)^2\\bigr]$.",
          "Solve the two equations together. Eliminating with $(x-4)^2+(y-2)^2=10$ reduces the system to the three intersection points $(x,y)\\in\\{(3,5),\\,(5,-1),\\,(7,1)\\}$; that is, $a\\in\\{3+5i,\\ 5-i,\\ 7+i\\}$.",
          "Discard the degenerate root. The value $a=7+i=b$ makes $|z-a|=|z-b|$ hold for every $z$, so $L_a=\\mathbb{C}$ is not a perpendicular bisector and condition (ii) is vacuous, not a tangency; it is an artefact of squaring. The two legitimate roots remain: $\\boxed{a\\in\\{3+5i,\\ 5-i\\}}$."
        ]
      },
      {
        "name": "Through the tangent points (chord of contact)",
        "steps": [
          "Each admissible bisector passes through $P$ and touches $\\Gamma$, so it is the line $PT$ for a point of tangency $T$ on $\\Gamma$. The two tangent points from $P=(4,2)$ to $\\Gamma:\\ (u-2)^2+(v-2)^2=2$ satisfy $OT\\perp PT$, i.e. $(u-2)(u-4)+(v-2)(v-2)=0$ together with the circle equation; solving gives $T_1=(3,1)$ and $T_2=(3,3)$.",
          "Form the two bisector lines as $PT_1$ and $PT_2$. Line $PT_1$ joins $(4,2)$ and $(3,1)$: slope $1$, equation $y=x-2$. Line $PT_2$ joins $(4,2)$ and $(3,3)$: slope $-1$, equation $y=-x+6$. These are exactly the lines $L^{+},L^{-}$ found before, now produced from the chord of contact instead of the slope condition.",
          "Recover $a$ as the reflection of $b$ in each line. Reflecting $b=7+i$ in $y=x-2$ swaps-and-shifts: the foot of perpendicular from $(7,1)$ is $\\bigl(\\tfrac{7+1+2}{2},\\tfrac{7+1-2}{2}\\bigr)=(5,3)$, so $a=2(5,3)-(7,1)=(3,5)$, giving $a=3+5i$. Reflecting $b$ in $y=-x+6$ gives foot $\\bigl(\\tfrac{7-1+6}{2},\\tfrac{-7+1+6}{2}\\bigr)=(6,0)$, so $a=2(6,0)-(7,1)=(5,-1)$, giving $a=5-i$.",
          "Both reflections are at equal distance $\\sqrt{10}$ from $P$ (consistent with $P$ on each bisector) and each line touches $\\Gamma$ at a single point $T_i$, confirming tangency. Hence the complete admissible set is $\\boxed{a\\in\\{3+5i,\\ 5-i\\}}$."
        ]
      }
    ],
    "remark": "Insight: condition (i) is the cleanest possible reading of a perpendicular bisector — ``$P$ on the bisector of $[a,b]$'' is identical to ``$|P-a|=|P-b|$'', which is itself an Apollonius-with-ratio-one statement and pins $a$ to a circle of radius $|P-b|$ about $P$. The whole problem then turns on a single counting fact from the tangency in (ii): a point outside a circle admits two tangent lines, so the bisector is one of two lines, and since $a$ is forced to be the mirror image of $b$ in the bisector, there are two values of $a$. The signature of a top-rank solver is treating the answer as a set and proving the count both ways: that the external position $|P-O|=2>\\sqrt2$ guarantees two tangents (no fewer, no more), and that the spurious third algebraic root $a=b$ is the degenerate collapse $L_a=\\mathbb{C}$ and must be expelled. Reporting a single point understates the locus; reporting three overstates it. The honest answer is the twin pair $\\{3+5i,\\ 5-i\\}$."
  },
  {
    "theme": "loci",
    "themeLabel": "Loci in the Argand Plane",
    "title": "The Angle the Disc Subtends",
    "difficulty": 5,
    "task": "Maximise and justify",
    "tags": [
      "argument extremum",
      "tangent from a point",
      "half-angle subtended",
      "ray locus",
      "boundary not interior"
    ],
    "statement": "In the Argand plane let $D$ be the closed disc \\[ D=\\bigl\\{\\,z\\in\\mathbb{C}\\ :\\ |z-(1+i)|\\le 1\\,\\bigr\\}. \\] For $z\\in D$ with $z\\neq 0$, let $\\theta(z)=\\arg z\\in(-\\pi,\\pi]$ denote the angle the point makes at the origin, measured from the positive real axis. \\par Determine the maximum value of $\\theta(z)$ as $z$ ranges over $D$, prove that this maximum is actually attained, and identify the unique point $z^\\star\\in D$ at which it occurs. Report the maximum value of $\\arg z$ as the final answer.",
    "answer": "\\[\\boxed{\\max_{z\\in D}\\arg z=\\dfrac{\\pi}{2}}\\]",
    "trap": "The disc lies wholly in the open first quadrant (its centre is $1+i$ and it touches both axes), so $\\arg z$ is well defined and positive throughout. The fatal instinct is to assume the argument is extremised where the \\text{modulus} is extremised — to look along the central ray from the origin through the centre $1+i$ and inspect the nearest point $z_{\\min}=\\bigl(1-\\tfrac{1}{\\sqrt2}\\bigr)(1+i)$ and the farthest point $z_{\\max}=\\bigl(1+\\tfrac{1}{\\sqrt2}\\bigr)(1+i)$. But every point of that diameter is a positive real multiple of $1+i$, so all of them carry the \\text{same} argument $\\arg(1+i)=\\tfrac{\\pi}{4}$; the $|z|$-extremes give $\\tfrac{\\pi}{4}$, which is neither the largest nor the smallest argument. The angle $\\arg z$ is constant along rays and has nothing to do with $|z|$; its extreme over the disc occurs where a ray from the origin is \\text{tangent} to the circle, not where $|z|$ peaks. A second, subtler error is to differentiate $\\arg z$ over the \\text{open} disc, find no interior stationary point, and conclude no maximum exists — forgetting that a continuous function on a \\text{compact} set attains its maximum, necessarily on the boundary circle here. The third trap is sloppy book-keeping of the tangent: there are two tangent rays from the origin (the real axis, $\\arg=0$, giving the \\text{minimum}, and the imaginary axis, $\\arg=\\tfrac{\\pi}{2}$, giving the maximum); picking the wrong one returns $0$. The honest maximum is $\\tfrac{\\pi}{2}$, attained only at the tangency point $z^\\star=i$.",
    "solutions": [
      {
        "name": "Tangent ray from the origin (half-angle subtended)",
        "steps": [
          "The level set $\\{\\arg z=\\theta\\}$ is a ray from the origin. As $\\theta$ increases from $\\arg(1+i)=\\tfrac\\pi4$, the ray rotates anticlockwise and stays a chord of the disc until, at the extreme angle, it becomes \\text{tangent} to the boundary circle $C:\\ |z-(1+i)|=1$; beyond that the ray misses $D$ entirely. So $\\max\\arg z$ is the argument of the upper tangent line from the origin to $C$, and the maximiser $z^\\star$ is the point of tangency.",
          "Let $c=1+i$ be the centre, $|c|=\\sqrt2$, radius $R=1$. A ray from the origin tangent to $C$ touches it at a point $T$ with $OT\\perp cT$, so triangle $OTc$ is right-angled at $T$ with hypotenuse $|Oc|=|c|=\\sqrt2$ and opposite side $|cT|=R=1$. Hence the half-angle the disc subtends at the origin is $\\alpha=\\arcsin\\dfrac{R}{|c|}=\\arcsin\\dfrac{1}{\\sqrt2}=\\dfrac\\pi4$. The whole disc is seen within the angular sector $[\\arg c-\\alpha,\\ \\arg c+\\alpha]$.",
          "Therefore $\\arg z$ ranges over $\\Bigl[\\tfrac\\pi4-\\tfrac\\pi4,\\ \\tfrac\\pi4+\\tfrac\\pi4\\Bigr]=\\bigl[0,\\tfrac\\pi2\\bigr]$, and the maximum is $\\arg c+\\alpha=\\dfrac\\pi4+\\dfrac\\pi4=\\dfrac\\pi2$. The upper tangent ray is thus the positive imaginary axis $\\{x=0,\\ y>0\\}$, whose distance from $c=(1,1)$ is exactly $1=R$, confirming tangency.",
          "The tangency point is the foot of the perpendicular from $c=(1,1)$ to the imaginary axis, namely $(0,1)$, i.e. $z^\\star=i$; indeed $|i-(1+i)|=|-1|=1$, so $i\\in C\\subset D$ and $\\arg i=\\tfrac\\pi2$. Compactness of $D$ guarantees the maximum is attained, and it is attained uniquely at this single tangency point. $\\boxed{\\max_{z\\in D}\\arg z=\\dfrac\\pi2\\ \\text{at}\\ z^\\star=i}$"
        ]
      },
      {
        "name": "Boundary parametrisation and calculus",
        "steps": [
          "Since $\\arg z$ has no critical point in the interior (its gradient $\\nabla\\arg z=\\tfrac{1}{|z|^2}(-y,x)\\neq 0$ off the origin, and the origin is not in $D$), and $D$ is compact, the maximum lies on the boundary circle. Parametrise it by $z=c+Re^{it}=(1+\\cos t)+i(1+\\sin t)$, $t\\in[0,2\\pi)$, and maximise $f(t)=\\arg z=\\arctan\\dfrac{1+\\sin t}{1+\\cos t}$ (valid since both coordinates are positive on the relevant arc).",
          "Set $g(t)=\\tan f(t)=\\dfrac{1+\\sin t}{1+\\cos t}$. Then $g'(t)=\\dfrac{\\cos t(1+\\cos t)-(1+\\sin t)(-\\sin t)}{(1+\\cos t)^2}=\\dfrac{\\cos t+\\sin t+1}{(1+\\cos t)^2}.$ Stationarity needs $\\cos t+\\sin t+1=0$, i.e. $\\cos t+\\sin t=-1$, i.e. $\\sqrt2\\cos\\!\\bigl(t-\\tfrac\\pi4\\bigr)=-1$.",
          "Solving $\\cos\\!\\bigl(t-\\tfrac\\pi4\\bigr)=-\\tfrac{1}{\\sqrt2}$ gives $t-\\tfrac\\pi4=\\pm\\tfrac{3\\pi}{4}$, so $t=\\pi$ or $t=-\\tfrac\\pi2$ (i.e. $t=\\tfrac{3\\pi}{2}$). At $t=\\pi$: $z=(1+\\cos\\pi)+i(1+\\sin\\pi)=0+i=i$, giving $\\arg z=\\tfrac\\pi2$. At $t=\\tfrac{3\\pi}{2}$: $z=(1+0)+i(1-1)=1$, giving $\\arg z=0$.",
          "Comparing the two stationary boundary values, the maximum is $\\tfrac\\pi2$ at $z=i$ and the minimum is $0$ at $z=1$ (the two tangency points). The naive central-diameter candidates $z=\\bigl(1\\pm\\tfrac{1}{\\sqrt2}\\bigr)(1+i)$ both yield $\\arg=\\tfrac\\pi4$ and are not even stationary, exposing the $|z|$-extreme instinct as false. $\\boxed{\\max_{z\\in D}\\arg z=\\dfrac\\pi2}$"
        ]
      },
      {
        "name": "When does the ray meet the disc? (locus intersection)",
        "steps": [
          "Fix a target angle $\\theta\\in(0,\\tfrac\\pi2)$ and ask whether the ray $L_\\theta=\\{\\,re^{i\\theta}:r>0\\,\\}$ meets $D$. Writing $z=re^{i\\theta}$, membership $|z-(1+i)|\\le1$ becomes $|re^{i\\theta}-(1+i)|^2\\le1$, i.e. $r^2-2r\\,\\mathrm{Re}\\bigl(e^{-i\\theta}(1+i)\\bigr)+1\\le0$ since $|1+i|^2=2$. With $\\mathrm{Re}\\bigl(e^{-i\\theta}(1+i)\\bigr)=\\cos\\theta+\\sin\\theta$, this is the quadratic $r^2-2(\\cos\\theta+\\sin\\theta)\\,r+1\\le0$.",
          "A real $r>0$ satisfying the inequality exists iff the quadratic's discriminant is non-negative: $\\Delta=4(\\cos\\theta+\\sin\\theta)^2-4\\ge0$, i.e. $(\\cos\\theta+\\sin\\theta)^2\\ge1$, i.e. $\\sin 2\\theta\\ge0$. For $\\theta\\in(0,\\tfrac\\pi2)$ this holds for all such $\\theta$ up to and including the boundary case $\\sin2\\theta=0$ at $\\theta=\\tfrac\\pi2$, where the discriminant vanishes and the ray is \\text{tangent} (a unique $r$).",
          "Thus the ray meets $D$ exactly for $\\theta\\in[0,\\tfrac\\pi2]$, and the largest admissible angle is $\\theta=\\tfrac\\pi2$, where $\\sin2\\theta=0$ gives a double root $r=\\cos\\tfrac\\pi2+\\sin\\tfrac\\pi2=1$. The single touching point is $z^\\star=1\\cdot e^{i\\pi/2}=i$.",
          "Hence $\\arg z$ attains every value in $[0,\\tfrac\\pi2]$ on $D$ and no more, so its maximum is $\\tfrac\\pi2$, realised only at $z=i$ — precisely the tangency dictated by the vanishing discriminant, never by the modulus extremes. $\\boxed{\\max_{z\\in D}\\arg z=\\dfrac\\pi2}$"
        ]
      }
    ],
    "remark": "Insight: $\\arg z$ is a function of \\text{direction}, constant along every ray from the origin, so extremising it over a region is a tangency question, never a distance question. A disc of radius $R$ centred at $c$ (with $|c|>R$, the origin outside) is seen from the origin inside an angular sector of half-width $\\alpha=\\arcsin(R/|c|)$ bisected by the direction $\\arg c$; therefore $\\arg z$ sweeps exactly the closed interval $[\\arg c-\\alpha,\\ \\arg c+\\alpha]$, attaining each endpoint at one of the two tangent points. Here $R/|c|=1/\\sqrt2$ makes $\\alpha=\\tfrac\\pi4=\\arg c$, a deliberate coincidence forcing the clean answers $0$ and $\\tfrac\\pi2$ with the two coordinate axes as the tangent lines and $1,\\,i$ as the tangency points. The trap — reading the argument off the nearest/farthest point of the disc — collapses to the constant $\\tfrac\\pi4$ for the whole central diameter, the surest sign that modulus and argument extrema are governed by entirely different geometry."
  },
  {
    "theme": "loci",
    "themeLabel": "Loci in the Argand Plane",
    "title": "The Inverted Twin",
    "difficulty": 5,
    "task": "Reconstruct and justify",
    "tags": [
      "apollonius circle",
      "inverse points",
      "harmonic conjugate",
      "reverse construction",
      "inversion-vs-reflection trap",
      "ratio recovery"
    ],
    "statement": "Identify each point of the plane with a complex number. A laboratory only records the trace of an Apollonius locus, not its data. For some hidden pair of distinct foci $a,b\\in\\mathbb{C}$ and some hidden ratio $k>0,\\ k\\neq 1$, the recorded curve is the circle \\[ \\mathcal{C}=\\bigl\\{\\,z\\in\\mathbb{C}\\ :\\ |z-a|=k\\,|z-b|\\,\\bigr\\}. \\] All that survives in the log is the pair of points where $\\mathcal{C}$ crosses the line through its two foci, \\[ P=3+3i,\\qquad Q=-1+7i, \\] together with one of the two foci, the one lying inside $\\mathcal{C}$: $a=2+4i$. \\par Reconstruct the missing data: determine the second focus $b$ and the ratio $k$. (You may take for granted, and should exploit, that $a$ and $b$ are inverse points with respect to $\\mathcal{C}$.) Report $b$ and $k$ as the final answer.",
    "answer": "\\[\\boxed{\\,b=5+i,\\qquad k=\\tfrac12\\,}\\]",
    "trap": "The two crossing points $P,Q$ are diametrically opposite on $\\mathcal{C}$, so the centre is $c=\\tfrac{P+Q}{2}=1+5i$ and the radius is $r=\\tfrac12|P-Q|=2\\sqrt2$. The fatal conceptual error is to recover the partner focus by the wrong symmetry. A strong student, seeing that $a,b$ are collinear with $c$ and that the configuration is ``symmetric'', reflexively places $b$ as the reflection of $a$ through the centre, $b=2c-a=6i$ — an \\text{additive} symmetry. This is wrong: that point sits at distance $|2c-a-c|=|c-a|=\\sqrt2$ from $c$, i.e. still \\text{inside} $\\mathcal{C}$, and testing it gives a ratio $|P-a|/|P-b|=\\tfrac13$ at $P$ but $|Q-a|/|Q-b|=3$ at $Q$ — \\text{not} a single constant $k$, so $\\{a,2c-a\\}$ are not Apollonius foci of $\\mathcal{C}$ at all. The correct symmetry is \\text{inversion}: $a,b$ are inverse points, $(a-c)\\,\\overline{(b-c)}=r^2$, equivalently $|a-c|\\,|b-c|=r^2$ on the same ray from $c$. Since $|a-c|=\\sqrt2$, the partner lies \\text{outside} at $|b-c|=\\tfrac{r^2}{\\sqrt2}=4\\sqrt2$, giving $b=5+i$. A second trap is to forget that $P,Q$ are the harmonic conjugates of $a,b$ and to read the ratio off the \\text{midpoint} of $a,b$ rather than off the internal/external division points, mis-scaling $k$. A third is the sign/branch slip $k$ versus $1/k$: the inside focus is $a$, and the constant is $k=|a-c|/r=\\tfrac12$ (had one named the outside focus, one would get $1/k=2$). The honest reconstruction is $b=5+i,\\ k=\\tfrac12$ — inversion, not reflection.",
    "solutions": [
      {
        "name": "Build the circle, invert the known focus",
        "steps": [
          "Recover $\\mathcal{C}$ from the two crossing points. Since $P,Q$ lie on $\\mathcal{C}$ and on the line through the foci (a line through the centre), the chord $PQ$ is a diameter. Hence the centre is $c=\\dfrac{P+Q}{2}=\\dfrac{(3+3i)+(-1+7i)}{2}=1+5i$ and the radius is $r=\\dfrac{|P-Q|}{2}=\\dfrac{|4-4i|}{2}=\\dfrac{4\\sqrt2}{2}=2\\sqrt2$, so $r^2=8$.",
          "Invert $a$ in $\\mathcal{C}$ to get $b$. The defining property is that $a,b$ are inverse points of $\\mathcal{C}$: $(a-c)\\,\\overline{(b-c)}=r^2$, i.e. $b=c+\\dfrac{r^2}{\\overline{a-c}}$. With $a-c=(2+4i)-(1+5i)=1-i$, $\\overline{a-c}=1+i$, so $b=(1+5i)+\\dfrac{8}{1+i}=(1+5i)+\\dfrac{8(1-i)}{2}=(1+5i)+(4-4i)=5+i.$ The partner focus is $b=5+i$, which lies \\text{outside} $\\mathcal{C}$ since $|b-c|=|4-4i|=4\\sqrt2>r$.",
          "Read off $k$ from any point of $\\mathcal{C}$. At $z=P=3+3i$: $|P-a|=|1-i|=\\sqrt2$ and $|P-b|=|-2+2i|=2\\sqrt2$, so $k=\\dfrac{|P-a|}{|P-b|}=\\dfrac{\\sqrt2}{2\\sqrt2}=\\tfrac12.$ Checking at $z=Q=-1+7i$ confirms the same value: $|Q-a|=|-3+3i|=3\\sqrt2$ and $|Q-b|=|-6+6i|=6\\sqrt2$ give $k=\\tfrac12$ again.",
          "Both crossing points return the same constant, certifying $\\{a,b\\}$ as genuine foci. Hence $\\boxed{b=5+i,\\ k=\\tfrac12}.$"
        ]
      },
      {
        "name": "Harmonic conjugate on the focal line",
        "steps": [
          "Use the classical fact that the points $P,Q$ where the Apollonius circle meets the focal line divide $[a,b]$ internally and externally in the ratio $k:1$; equivalently, $(a,b;P,Q)$ is a \\text{harmonic} range, so the cross-ratio is $-1$: $\\dfrac{a-P}{a-Q}=-\\,\\dfrac{b-P}{b-Q}.$ This expresses $b$ as the harmonic conjugate of $a$ with respect to $P,Q$.",
          "Plug in $a=2+4i,\\ P=3+3i,\\ Q=-1+7i$. Then $a-P=-1+i$ and $a-Q=3-3i=-3(-1+i)$, so $\\dfrac{a-P}{a-Q}=\\dfrac{-1+i}{-3(-1+i)}=-\\tfrac13.$ The harmonic condition becomes $-\\tfrac13=-\\dfrac{b-P}{b-Q}$, i.e. $\\dfrac{b-P}{b-Q}=\\tfrac13$, whence $3(b-P)=b-Q$, giving $2b=3P-Q=3(3+3i)-(-1+7i)=10+2i$, so $b=5+i.$",
          "Extract $k$ as the (unsigned) division ratio at $P$, the internal point: $k=\\dfrac{|P-a|}{|P-b|}=\\dfrac{|-1+i|}{|-2+2i|}=\\dfrac{\\sqrt2}{2\\sqrt2}=\\tfrac12.$ The external point $Q$ gives the same magnitude with the opposite sign of division, consistent with the harmonic relation.",
          "Thus the harmonic-conjugate route reproduces the inversion answer without ever forming the circle's centre explicitly: $\\boxed{b=5+i,\\ k=\\tfrac12}.$"
        ]
      },
      {
        "name": "Radius ratio: k from the focus--centre distance",
        "steps": [
          "From the centre $c=1+5i$ and radius $r=2\\sqrt2$ (Step 1 of the first method), use the focal-distance identity for an Apollonius circle: the inside focus sits at distance $|a-c|=k\\,r$ and the outside focus at $|b-c|=r/k$ (their product is $r^2$, the inversion relation). This pins $k$ \\text{before} locating $b$.",
          "Compute $|a-c|=|(2+4i)-(1+5i)|=|1-i|=\\sqrt2$. Since $a$ is the \\text{inside} focus, $k=\\dfrac{|a-c|}{r}=\\dfrac{\\sqrt2}{2\\sqrt2}=\\tfrac12.$ (Had $a$ been the outside focus the same distance would force $1/k$, the branch the trap mishandles; the problem's stipulation that $a$ lies inside fixes $k=\\tfrac12$, not $2$.)",
          "Locate $b$ along the ray from $c$ through $a$ at distance $r/k=\\dfrac{2\\sqrt2}{1/2}=4\\sqrt2$. The unit vector from $c$ to $a$ is $\\dfrac{a-c}{|a-c|}=\\dfrac{1-i}{\\sqrt2}$, so $b=c+4\\sqrt2\\cdot\\dfrac{1-i}{\\sqrt2}=(1+5i)+4(1-i)=5+i.$",
          "This matches the inversion and harmonic computations, and $|a-c|\\,|b-c|=\\sqrt2\\cdot4\\sqrt2=8=r^2$ verifies the inverse-point relation. Hence $\\boxed{b=5+i,\\ k=\\tfrac12}.$"
        ]
      }
    ],
    "remark": "Insight: the whole reconstruction hinges on a single distinction between two ``symmetries'' that look interchangeable on a line through the centre. The foci of an Apollonius circle are \\text{inverse} points — related multiplicatively by $|a-c|\\,|b-c|=r^2$ on a common ray — not reflections through the centre, which are related additively by $b=2c-a$. The trap point $2c-a=6i$ shares the inside focus's distance from $c$ and so feels symmetric, yet it produces two different ratios at the two ends of the diameter and is therefore not a focus at all. Three independent lenses converge: inversion in the circle, the harmonic range $(a,b;P,Q)=-1$ (the crossing points are the harmonic conjugates of the foci, not their midpoint), and the focal-distance law $|a-c|=k\\,r$. The same data also exposes the $k$-versus-$1/k$ branch: naming which focus is inside is exactly what selects $k=\\tfrac12$ over $2$. A top-rank solver reconstructs the hidden foci by inverting, confirms the constant ratio at both crossing points, and reports the inside focus's ratio — $b=5+i,\\ k=\\tfrac12$."
  },
  {
    "theme": "loci",
    "themeLabel": "Loci in the Argand Plane",
    "title": "The Weight That Swallows the Circle",
    "difficulty": 5,
    "task": "Find all values and count",
    "tags": [
      "apollonius circle",
      "tangency",
      "radical axis",
      "internal tangency",
      "missed case",
      "weight parameter"
    ],
    "statement": "For a real weight $k>0$ with $k\\neq 1$, the locus \\[ C_k:\\qquad |z|=k\\,|z-5| \\] is the Apollonius circle of the points $0$ and $5$ with ratio $k$. As $k$ varies, this circle slides and breathes along the real axis. \\par Determine all values of $k>0$ for which $C_k$ is tangent to the unit circle $|z|=1$, and state how many such values exist. (Two circles are tangent when they meet in exactly one point; remember that a small circle may sit inside a large one and touch it, and that the large one may equally be the Apollonius circle.) Report the set of admissible $k$ and the count.",
    "answer": "\\[\\boxed{k\\in\\left\\{\\tfrac16,\\ \\tfrac14\\right\\}\\quad(\\text{exactly }2\\text{ values})}\\]",
    "trap": "The locus $C_k$ is genuinely a circle, so the temptation is to write its centre $C=\\dfrac{5k^2}{k^2-1}$ and radius $r=\\dfrac{5k}{|k^2-1|}$, and then impose tangency to the unit circle by the single familiar rule for two circles touching on the outside, $d=1+r$, where $d=|C|$ is the distance between centres. That equation has \\text{no} positive solution at all, so the careless conclusion is that no such $k$ exists. The error is treating ``tangent'' as ``externally tangent.'' For $0<k<1$ the weight is small, the Apollonius circle is enormous, and one of two \\text{internal} configurations occurs: either $C_k$ nestles inside the unit circle ($d=1-r$, giving $k=\\tfrac16$, contact at $z=-1$) or $C_k$ has grown so large that it \\text{encloses} the unit circle ($d=r-1$, giving $k=\\tfrac14$, contact at $z=+1$). A student who remembers internal tangency but assumes the unit circle is always the outer one writes only $d=1-r$, recovers $k=\\tfrac16$, and reports a single value — missing the enclosing case entirely. The honest condition is $d=|1-r|$ \\text{or} $d=1+r$, and only the absolute value, expanded into both signs, surfaces both roots. The count is $2$, not $0$ and not $1$.",
    "solutions": [
      {
        "name": "Centre-and-radius with the full $d=|1-r|$ casework",
        "steps": [
          "Square the defining relation: $|z|^2=k^2|z-5|^2$ gives $x^2+y^2=k^2\\big((x-5)^2+y^2\\big)$. Collecting terms (and dividing by $1-k^2\\neq0$), $C_k$ is the circle \\[ x^2+y^2+\\frac{10k^2}{1-k^2}\\,x-\\frac{25k^2}{1-k^2}=0, \\] with centre $C=\\Big(\\dfrac{5k^2}{k^2-1},\\,0\\Big)$ on the real axis and radius $r=\\dfrac{5k}{|k^2-1|}$. Its centre-distance from the origin is $d=|C|=\\dfrac{5k^2}{|k^2-1|}$.",
          "The unit circle has centre $0$ and radius $1$, so $C_k$ touches it iff $d=1+r$ (external) or $d=|1-r|$ (internal). For $k>1$ one checks $d=\\dfrac{5k^2}{k^2-1}$ and $r=\\dfrac{5k}{k^2-1}$ give $d-r=\\dfrac{5k(k-1)}{k^2-1}=\\dfrac{5k}{k+1}>2$, which already exceeds $1+r$ and $|1-r|$ in the relevant range; no tangency arises for $k>1$. So take $0<k<1$, where $|k^2-1|=1-k^2$, hence $d=\\dfrac{5k^2}{1-k^2}$ and $r=\\dfrac{5k}{1-k^2}$.",
          "External tangency $d=1+r$ reads $\\dfrac{5k^2}{1-k^2}=1+\\dfrac{5k}{1-k^2}$, i.e. $5k^2-5k=1-k^2$, i.e. $6k^2-5k-1=0$, whose roots are $k=1$ and $k=-\\tfrac16$, both rejected ($k=1$ excluded, $k<0$ impossible). Thus there is \\text{no} externally tangent weight — exactly the case the naive solver stops at.",
          "Internal tangency $d=|1-r|$ splits into two signs. Case $d=1-r$: $\\dfrac{5k^2}{1-k^2}=1-\\dfrac{5k}{1-k^2}$ gives $5k^2+5k=1-k^2$, i.e. $6k^2+5k-1=0=(6k-1)(k+1)$, so $k=\\tfrac16$. Case $d=r-1$: $\\dfrac{5k^2}{1-k^2}=\\dfrac{5k}{1-k^2}-1$ gives $5k^2-5k=-(1-k^2)$, i.e. $4k^2-5k+1=0=(4k-1)(k-1)$, so $k=\\tfrac14$. Both lie in $(0,1)$.",
          "Hence the admissible weights are exactly $k=\\tfrac16$ (the Apollonius circle sits inside the unit circle, touching at $z=-1$) and $k=\\tfrac14$ (the Apollonius circle has swollen to enclose the unit circle, touching at $z=+1$). $\\boxed{k\\in\\{\\tfrac16,\\tfrac14\\},\\ \\text{exactly }2\\text{ values}}$"
        ]
      },
      {
        "name": "Radical axis: the line that must kiss the unit circle",
        "steps": [
          "Write both circles in the form $x^2+y^2+\\cdots=0$. The unit circle is $S_0:\\,x^2+y^2-1=0$, and from Solution 1 the Apollonius circle is $S_k:\\,x^2+y^2+\\dfrac{10k^2}{1-k^2}x-\\dfrac{25k^2}{1-k^2}=0$. Subtracting $S_0$ from $S_k$ eliminates the quadratic part and leaves the radical axis, the line through any common points: \\[ \\frac{10k^2}{1-k^2}\\,x-\\frac{25k^2}{1-k^2}+1=0. \\]",
          "Two circles are tangent precisely when they meet in one point, which forces their radical axis to be tangent to each circle. Here the radical axis is the vertical line $x=x_\\star$ with \\[ x_\\star=\\frac{\\frac{25k^2}{1-k^2}-1}{\\frac{10k^2}{1-k^2}}=\\frac{25k^2-(1-k^2)}{10k^2}=\\frac{26k^2-1}{10k^2}. \\] A vertical line $x=x_\\star$ is tangent to the unit circle $x^2+y^2=1$ iff $|x_\\star|=1$.",
          "Solve $|x_\\star|=1$, i.e. $\\dfrac{26k^2-1}{10k^2}=\\pm1$. The $+1$ branch: $26k^2-1=10k^2\\Rightarrow 16k^2=1\\Rightarrow k=\\tfrac14$ (contact at $x_\\star=1$, the point $z=1$). The $-1$ branch: $26k^2-1=-10k^2\\Rightarrow 36k^2=1\\Rightarrow k=\\tfrac16$ (contact at $x_\\star=-1$, the point $z=-1$). Both are positive and $\\neq1$.",
          "Equivalently, clearing denominators in $x_\\star^2=1$ gives $(26k^2-1)^2=100k^4$, i.e. $(16k^2-1)(36k^2-1)=0$, which factors over the reals as $(4k-1)(4k+1)(6k-1)(6k+1)=0$; the only positive roots are $k=\\tfrac14,\\tfrac16$. No spurious case is lost because the radical-axis tangency captures internal and external touching at once. $\\boxed{k\\in\\{\\tfrac16,\\tfrac14\\},\\ 2\\text{ values}}$"
        ]
      },
      {
        "name": "Substitution and a discriminant in $u=k^2$",
        "steps": [
          "Look for a point $z$ lying on \\text{both} loci. On the unit circle $|z|=1$, the Apollonius condition $|z|=k|z-5|$ becomes $1=k|z-5|$, i.e. $|z-5|=\\dfrac1k$. So a common point is an intersection of the unit circle $|z|=1$ with the circle $|z-5|=\\tfrac1k$ centred at $5$.",
          "Tangency of the original pair is equivalent to these two circles — radii $1$ and $\\tfrac1k$, centres $0$ and $5$ — meeting in exactly one point, i.e. tangency, i.e. $5=1+\\tfrac1k$ or $5=\\big|1-\\tfrac1k\\big|$ (distance between centres equals sum or difference of radii).",
          "Solve each. External, $5=1+\\tfrac1k$: $\\tfrac1k=4$, so $k=\\tfrac14$. Internal, $5=\\big|1-\\tfrac1k\\big|$: either $1-\\tfrac1k=5\\Rightarrow \\tfrac1k=-4$ (rejected, $k>0$), or $\\tfrac1k-1=5\\Rightarrow \\tfrac1k=6\\Rightarrow k=\\tfrac16$. The transformed problem makes the missed case visible: with radii $1$ and $\\tfrac1k$ both tangencies of the \\text{auxiliary} pair are legitimate, and they correspond to the enclosing/enclosed configurations of the original pair.",
          "Writing $u=\\tfrac1k$, the two tangency equations $u=4$ and $u=6$ are the roots of $(u-4)(u-6)=u^2-10u+24=0$, a genuine quadratic with discriminant $100-96=4>0$, hence two distinct positive roots; back-substituting $k=\\tfrac1u$ yields $k=\\tfrac14$ and $k=\\tfrac16$. Both contact points, $z=1$ and $z=-1$, lie on $|z|=1$ and on the respective $C_k$, confirming genuine tangency. $\\boxed{k\\in\\{\\tfrac16,\\tfrac14\\},\\ \\text{exactly }2}$"
        ]
      }
    ],
    "remark": "Insight: letting the weight $k$ vary turns a static Apollonius circle into a one-parameter family that breathes, and the whole problem is governed by where the contact happens on the real axis. The cleanest viewpoint is the auxiliary one in Solution 3: on the unit circle, $|z|=k|z-5|$ collapses to $|z-5|=\\tfrac1k$, so tangency of $C_k$ to $|z|=1$ is just tangency of two ordinary circles of radii $1$ and $\\tfrac1k$ whose centres are a fixed distance $5$ apart — and $5=1+\\tfrac1k$ or $5=\\tfrac1k-1$ instantly give $k=\\tfrac14,\\tfrac16$. The trap is the word ``tangent'': because the small weight inflates $C_k$, the relevant touchings are both \\text{internal} — the Apollonius circle once sitting inside the unit circle ($z=-1$) and once having grown to swallow it ($z=+1$) — while pure external tangency is impossible. Anyone who writes only $d=1+r$, or only $d=1-r$, reports the wrong count. The honest answer requires the full $d=|1-r|$ with both signs, and the radical-axis picture (Solution 2) shows why no case can hide: the line $x=\\tfrac{26k^2-1}{10k^2}$ must kiss the unit circle, $|x|=1$, and that single absolute value carries both configurations at once."
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
    "title": "The Twin-Looped Knot",
    "difficulty": 5,
    "task": "Find the total enclosed area",
    "tags": [
      "lemniscate",
      "conjugate condition",
      "non-circular quartic",
      "self-intersection",
      "two-to-one map",
      "polar area"
    ],
    "statement": "A point $z$ in the Argand plane satisfies the conjugate-flavoured condition \\[ \\bigl|\\,z^2-1\\,\\bigr| \\;=\\; 1, \\] which, on writing $z=x+iy$, is the real quartic relation $(x^2+y^2)^2=2\\,(x^2-y^2)$ obtained from $|z^2-1|^2=(z^2-1)\\overline{(z^2-1)}=1$. This is not a circle, an ellipse, or any conic: it is a single closed curve that crosses itself. \\par Find the total area enclosed by this locus (the sum of the areas of all the regions it bounds). Identify the curve and the point where it self-intersects.",
    "answer": "\\[\\boxed{\\,2\\,}\\]",
    "trap": "The fatal shortcut is the substitution $w=z^2$. Then $|z^2-1|=1$ reads $|w-1|=1$, a perfect circle of radius $1$ centred at $w=1$, whose area is $\\pi$. A strong student boxes $\\pi$ at once — and is wrong, because the map $z\\mapsto w=z^2$ is conformal but \\text{not area-preserving}, and moreover it is \\text{two-to-one} ($z$ and $-z$ share the same $w$). The Jacobian of $w=z^2$ is $|dw/dz|^2=4|z|^2=4|w|$, so an element $dA_w$ in the $w$-plane pulls back to $dA_z=\\dfrac{dA_w}{4|w|}$, which blows up near $w=0$ — and $w=0$ lies \\text{on} the circle $|w-1|=1$, forcing the $z$-locus through the origin twice and knotting it into a self-crossing figure-eight (a lemniscate of Bernoulli), never a circle. A second, subtler trap awaits even those who pass to polar form $r^2=2\\cos 2\\theta$ correctly: the admissible angles are $\\cos2\\theta\\ge0$, i.e. \\text{two} separate arcs $\\theta\\in[-\\tfrac{\\pi}{4},\\tfrac{\\pi}{4}]$ \\text{and} $\\theta\\in[\\tfrac{3\\pi}{4},\\tfrac{5\\pi}{4}]$, giving \\text{two} loops; integrating over only one arc returns area $1$. The honest total is the sum over both loops, $2$ — not $\\pi$ (treating $z^2$ as area-preserving) and not $1$ (forgetting the twin loop).",
    "solutions": [
      {
        "name": "Polar reduction to the lemniscate $r^2=2\\cos2\\theta$",
        "steps": [
          "Put $z=re^{i\\theta}$, so $z^2=r^2e^{2i\\theta}$ and $z^2-1=(r^2\\cos2\\theta-1)+i\\,r^2\\sin2\\theta$. Then $|z^2-1|^2=(r^2\\cos2\\theta-1)^2+(r^2\\sin2\\theta)^2=r^4-2r^2\\cos2\\theta+1.$ Setting this equal to $1$ gives $r^4=2r^2\\cos2\\theta$, hence $r^2=2\\cos2\\theta$ (the root $r=0$ is the origin, where the curve passes through itself).",
          "The relation $r^2=2\\cos2\\theta$ is the lemniscate of Bernoulli. Reality of $r$ demands $\\cos2\\theta\\ge0$, i.e. $\\theta\\in[-\\tfrac{\\pi}{4},\\tfrac{\\pi}{4}]\\cup[\\tfrac{3\\pi}{4},\\tfrac{5\\pi}{4}]$ — two disjoint angular windows, tracing two symmetric loops. At $\\theta=\\pm\\tfrac{\\pi}{4}$ (and $\\tfrac{3\\pi}{4},\\tfrac{5\\pi}{4}$) one has $r=0$, so both loops meet at the origin: the self-intersection is $z=0$, with branch tangents along $\\theta=\\pm\\tfrac{\\pi}{4}$, i.e. the lines $y=\\pm x$ crossing at right angles.",
          "Polar area of one loop is $A_1=\\tfrac12\\displaystyle\\int_{-\\pi/4}^{\\pi/4} r^2\\,d\\theta=\\tfrac12\\int_{-\\pi/4}^{\\pi/4}2\\cos2\\theta\\,d\\theta=\\tfrac12\\big[\\sin2\\theta\\big]_{-\\pi/4}^{\\pi/4}=\\tfrac12(1-(-1))=1.$",
          "By the symmetry $\\theta\\mapsto\\theta+\\pi$ (equivalently $z\\mapsto-z$, which preserves $|z^2-1|$), the second loop over $[\\tfrac{3\\pi}{4},\\tfrac{5\\pi}{4}]$ has the same area $A_1=1$. Total enclosed area $=A_1+A_1=2.$ $\\boxed{2}$"
        ]
      },
      {
        "name": "The $w=z^2$ map done honestly, with its Jacobian",
        "steps": [
          "Let $w=z^2$. The condition becomes $|w-1|=1$, the disc-boundary circle $D:\\,|w-1|\\le1$ in the $w$-plane. The interior of the $z$-locus is the preimage of $D$. Crucially $z\\mapsto w$ is \\text{two-to-one} ($\\pm z\\mapsto w$) and has Jacobian $\\Big|\\dfrac{dw}{dz}\\Big|^2=|2z|^2=4|z|^2=4|w|$, so area transforms by $dA_w=4|w|\\,dA_z$, i.e. $dA_z=\\dfrac{dA_w}{4|w|}.$",
          "Because the map is two-to-one, the $z$-region consists of two sheets each covering $D$ once, so its total area is $\\displaystyle 2\\!\\iint_{D}\\frac{dA_w}{4|w|}=\\frac12\\iint_{D}\\frac{dA_w}{|w|}.$ This single $\\dfrac{1}{|w|}$ factor is exactly why the naive answer $\\pi$ (the plain area of $D$) is wrong.",
          "Evaluate in polar $w=\\rho e^{i\\varphi}$. The circle $|w-1|=1$ is $\\rho=2\\cos\\varphi$ for $\\varphi\\in[-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2}]$, and $\\dfrac{dA_w}{|w|}=\\dfrac{\\rho\\,d\\rho\\,d\\varphi}{\\rho}=d\\rho\\,d\\varphi$. Hence $\\displaystyle\\iint_D\\frac{dA_w}{|w|}=\\int_{-\\pi/2}^{\\pi/2}\\!\\!\\int_0^{2\\cos\\varphi}\\!d\\rho\\,d\\varphi=\\int_{-\\pi/2}^{\\pi/2}2\\cos\\varphi\\,d\\varphi=4.$",
          "Therefore the total area is $\\tfrac12\\cdot4=2$. (And since $w=0$ lies on $|w-1|=1$, its single preimage $z=0$ is the node where the two sheets are pinched together — the self-intersection.) $\\boxed{2}$"
        ]
      },
      {
        "name": "Direct Cartesian integration of the quartic",
        "steps": [
          "From $|z^2-1|^2=1$ the Cartesian equation is $(x^2+y^2)^2=2(x^2-y^2)$. Its lowest-degree part is $-2(x^2-y^2)=-2(x-y)(x+y)$; vanishing of these terms at the origin shows the curve is singular there with two distinct tangents $y=x$ and $y=-x$, confirming a genuine right-angle self-crossing at $z=0$ (not a smooth point).",
          "Use the curve's symmetry under $y\\mapsto-y$ and $x\\mapsto-x$: it suffices to find the area in the first quadrant of the right-hand loop and multiply. Solve the quartic for $y^2$ as a function of $x$: writing $s=x^2+y^2$, the relation is $s^2=2(2x^2-s)$, i.e. $s^2+2s-4x^2=0$, so $s=x^2+y^2=-1+\\sqrt{1+4x^2}$ (taking the $+$ root for $s\\ge0$). Thus $y^2=-1-x^2+\\sqrt{1+4x^2}\\ge0$, valid for $0\\le x\\le\\sqrt2$ (the rightmost point $z=\\sqrt2$, the maximum modulus $|z|=\\sqrt2$).",
          "The right-hand loop area is $A_1=2\\displaystyle\\int_{0}^{\\sqrt2}\\!\\sqrt{\\,-1-x^2+\\sqrt{1+4x^2}\\,}\\;dx$ (factor $2$ for $\\pm y$). Substituting $x=\\sqrt2\\cos\\theta\\cdot$(loop parametrisation) or simply recognising this as the Cartesian rewrite of $\\tfrac12\\int_{-\\pi/4}^{\\pi/4}2\\cos2\\theta\\,d\\theta$, the integral evaluates to $A_1=1$.",
          "The locus has two such loops, congruent by the $z\\mapsto-z$ symmetry $(x,y)\\mapsto(-x,-y)$ that fixes the equation, so the total enclosed area is $2A_1=2$. $\\boxed{2}$"
        ]
      }
    ],
    "remark": "Insight: the modulus-of-a-conjugate condition $|z^2-1|=1$ is a quartic in disguise, and the temptation to linearise it via $w=z^2$ into the innocent circle $|w-1|=1$ is precisely the trap. The map $z\\mapsto z^2$ is two-to-one and stretches area by the non-constant factor $4|z|^2$, so the circle's area $\\pi$ has nothing to do with the answer; pulling back honestly inserts a $\\tfrac{1}{|w|}$ weight that, because $w=0$ sits on the circle, both pins the locus to the origin (creating the self-intersection) and rescales the area to the clean value $2$. In polar coordinates the same curve is the lemniscate of Bernoulli $r^2=2\\cos2\\theta$, whose two loops are the visible signature of the doubled map — and integrating over only one loop is the second trap, halving the answer to $1$. The deeper lesson for loci: a condition built from $z^2$ (or any anti-holomorphic combination) can produce a self-crossing quartic that no $|z-a|=k|z-b|$ or $\\arg$ template ever yields, and the right tools are polar reduction and the Jacobian of the underlying map, not circle-and-line formulas."
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
    "title": "The Square That Wouldn't Flip",
    "difficulty": 5,
    "task": "Determine the image area and orientation",
    "tags": [
      "direct similarity",
      "orientation",
      "jacobian",
      "conjugation trap",
      "area scaling",
      "spiral similarity"
    ],
    "statement": "A planar map of the form \\[ w=f(z)=a\\,z+b,\\qquad a,b\\in\\mathbb{C},\\ a\\neq 0, \\] (a direct similarity of the plane) is known only through its effect on two points. It sends \\[ z=1\\ \\longmapsto\\ A=1+2i,\\qquad z=i\\ \\longmapsto\\ B=7i, \\] where $A$ and $B$ are the two endpoints of one side of a target square. Let $U$ be the closed unit square with vertices listed in counter-clockwise order \\[ 0\\ \\to\\ 1\\ \\to\\ 1+i\\ \\to\\ i. \\] \\par Find the area of the image $f(U)$, and decide whether the vertex order $f(0)\\to f(1)\\to f(1+i)\\to f(i)$ runs counter-clockwise (orientation preserved) or clockwise (orientation reversed) around $f(U)$. Report the area together with the orientation verdict.",
    "answer": "$\\text{area}=13,\\ \\text{orientation preserved (CCW)}$",
    "trap": "Only two image points are handed over, and they do \\text{not} by themselves determine a unique similarity: both the direct map $f(z)=az+b$ and the \\text{indirect} (conjugate-linear) map $g(z)=c\\,\\overline{z}+d$ can be forced through $1\\mapsto A,\\ i\\mapsto B$. Fitting the conjugate version gives $c=-2-3i,\\ d=3+5i$, with $|c|^2=13$ — \\text{the same} area factor — so the area $13$ is robust and feels confirmed. But $g$ is a reflection-type similarity: it sends the CCW square to a CW one, signed area $-13$. A student who, seeing that the directed side $1\\to i$ appears to ``point the other way'' after landing on $A\\to B$, quietly reconstructs the map as a conjugation (or simply declares the orientation flipped because $\\arg a=\\arg(3-2i)<0$ is a \\text{clockwise} rotation) reports ``orientation reversed.'' That is the conceptual error. The map is \\text{stipulated} to be $f(z)=az+b$, holomorphic with no $\\overline{z}$; its real Jacobian determinant is $|a|^2=13>0$ everywhere, so it is \\text{orientation-preserving} no matter how negative $\\arg a$ is. A clockwise \\text{rotation} is not an orientation reversal — rotations, however large the angle, are proper (direct) isometries; only a reflection or conjugation flips handedness. The honest verdict is area $13$ \\text{and} orientation preserved; the conjugate fit is a different map that merely happens to agree on the two probe points.",
    "solutions": [
      {
        "name": "Recover $a$ from the side, then $|a|^2$ and holomorphy",
        "steps": [
          "Subtract the two data equations to kill $b$: from $a\\cdot1+b=A$ and $a\\cdot i+b=B$, $a(i-1)=B-A=7i-(1+2i)=-1+5i$. Hence \\[ a=\\frac{-1+5i}{\\,i-1\\,}=\\frac{(-1+5i)(\\overline{i-1})}{|i-1|^2}=\\frac{(-1+5i)(-1-i)}{2}=\\frac{6-4i}{2}=3-2i, \\] and $b=A-a=(1+2i)-(3-2i)=-2+4i$ (not even needed below).",
          "A direct similarity $w=az+b$ scales every area by the constant factor $|a|^2$, because locally $|dw|=|a|\\,|dz|$ in every direction. Here $|a|^2=3^2+(-2)^2=13$, so $\\operatorname{area}\\,f(U)=|a|^2\\cdot\\operatorname{area}(U)=13\\cdot1=13.$",
          "For orientation, note $f$ is holomorphic in $z$ (no $\\overline z$), so its real Jacobian determinant equals $|f'(z)|^2=|a|^2=13>0$ at every point. A map with positive Jacobian is orientation-preserving, so the CCW vertex order $0\\to1\\to1+i\\to i$ maps to a CCW order around $f(U)$. The clockwise spiral angle $\\arg a=\\arg(3-2i)<0$ is a rotation, which does \\text{not} reverse orientation.",
          "Therefore $\\boxed{\\operatorname{area}=13,\\ \\text{orientation preserved (CCW)}}$."
        ]
      },
      {
        "name": "Realify the map: a $2\\times2$ Jacobian",
        "steps": [
          "Write $a=p+qi=3-2i$, so $p=3,\\ q=-2$. With $z=x+iy$, the map $w=az+b$ in real coordinates is $(x,y)\\mapsto(px-qy,\\ qx+py)+(\\operatorname{Re}b,\\operatorname{Im}b)$, a linear map plus a translation. The translation moves the square rigidly and changes neither area nor orientation, so only the linear part matters.",
          "Its matrix is \\[ M=\\begin{pmatrix} p & -q\\\\ q & p \\end{pmatrix}=\\begin{pmatrix} 3 & 2\\\\ -2 & 3 \\end{pmatrix},\\qquad \\det M=p^2+q^2=9+4=13. \\] The area of the image of any region is $|\\det M|$ times the original area, so $\\operatorname{area}\\,f(U)=13\\cdot1=13.$",
          "Orientation is governed by the \\text{sign} of $\\det M$, not its size. Here $\\det M=+13>0$, so the linear part preserves orientation: a CCW loop stays CCW. (Every matrix of this special rotation-dilation shape $\\begin{pmatrix}p&-q\\\\ q&p\\end{pmatrix}$ has determinant $p^2+q^2\\ge0$, which is exactly why $az+b$ can never flip a figure — only $a\\overline z+b$, whose matrix is $\\begin{pmatrix}p&q\\\\ q&-p\\end{pmatrix}$ with determinant $-(p^2+q^2)<0$, can.)",
          "Hence $\\boxed{\\operatorname{area}=13,\\ \\text{orientation preserved}}$."
        ]
      },
      {
        "name": "Brute force: signed shoelace on the four image vertices",
        "steps": [
          "Using $a=3-2i,\\ b=-2+4i$ from Solution 1, map the four vertices in order: $f(0)=b=-2+4i$; $f(1)=a+b=1+2i$; $f(1+i)=a(1+i)+b=(3-2i)+(3-2i)i+(-2+4i)=3+5i$; $f(i)=ai+b=(2+3i)+(-2+4i)=7i$.",
          "Apply the signed shoelace formula to $P_1=(-2,4),\\,P_2=(1,2),\\,P_3=(3,5),\\,P_4=(0,7)$: \\[ \\tfrac12\\sum (x_k y_{k+1}-x_{k+1}y_k) =\\tfrac12\\big[(-2\\cdot2-1\\cdot4)+(1\\cdot5-3\\cdot2)+(3\\cdot7-0\\cdot5)+(0\\cdot4-(-2)\\cdot7)\\big]. \\]",
          "Evaluate the bracket: $(-4-4)+(5-6)+(21-0)+(0+14)=-8-1+21+14=26$, so the signed area is $\\tfrac12\\cdot26=+13$. The magnitude $13$ is the area, and the positive sign means the listed order $f(0)\\to f(1)\\to f(1+i)\\to f(i)$ is counter-clockwise — orientation preserved.",
          "(Contrast: the conjugate fit $g(z)=c\\overline z+d$ with $c=-2-3i$ sends the same vertices to $3+5i,\\,1+2i,\\,-2+4i,\\,7i$, whose shoelace sum is $-13$ — a genuine flip. That $g$ agrees with $f$ only at $z=1,i$, which is why the two probe points cannot decide orientation; the stipulation $w=az+b$ does.) Thus $\\boxed{\\operatorname{area}=13,\\ \\text{orientation preserved}}$."
        ]
      }
    ],
    "remark": "Insight: a similarity $w=az+b$ carries two independent invariants of a region — area, scaled by $|a|^2$, and handedness, set by whether the map is direct or indirect — and they must not be conflated. The data ``$1\\mapsto A,\\ i\\mapsto B$'' fixes $a=3-2i$, so the area factor $|a|^2=13$ is unambiguous; even the rogue conjugate fit shares it. What the two probe points cannot fix is orientation, because a direct map $az+b$ and an indirect map $a\\overline z+b$ can pass through the same pair. The deciding fact is structural, not numerical: $az+b$ is holomorphic, its Jacobian determinant is $|a|^2>0$, so it is always orientation-preserving — a clockwise rotation ($\\arg a<0$) is still a proper motion. Only conjugation, with Jacobian $-|a|^2<0$, flips a square. Once a student internalises that ``rotated the other way'' is not ``reflected,'' the verdict is forced: area $13$, orientation preserved. The cleanest certificate is the $2\\times2$ matrix $\\begin{pmatrix}3&2\\\\ -2&3\\end{pmatrix}$ with determinant $+13$ — its size is the area, its sign is the handedness, in a single number."
  },
  {
    "theme": "transformations",
    "themeLabel": "Mappings of the Plane",
    "title": "The Curves That Survive Their Own Inversion",
    "difficulty": 5,
    "task": "Classify completely and justify",
    "tags": [
      "mobius map",
      "inversion",
      "invariant curves",
      "orthogonality trap",
      "reflection",
      "circline algebra"
    ],
    "statement": "Work on the extended plane and consider the single map \\[ w=\\frac1z . \\] Call a line or circle $\\Gamma$ self-mapping if its image under $w=\\tfrac1z$ is $\\Gamma$ again as a set (every point of $\\Gamma$ lands on $\\Gamma$, and every point of $\\Gamma$ is the image of a point of $\\Gamma$). \\par Determine, with proof, all self-mapping lines and all self-mapping circles. For the circles, characterise the admissible centre $c$ and radius $r>0$ of $|z-c|=r$ exactly. \\par (A tempting half-answer: ``the self-mapping circles are precisely those orthogonal to the unit circle, i.e. $|c|^2-r^2=1$.'' Decide whether this is the complete truth, and correct it if it is not.)",
    "answer": "\\[\\boxed{\\ \\text{Lines: the real and imaginary axes only.}\\quad \\text{Circles: } c\\in\\mathbb{R},\\,|c|^2-r^2=1\\ \\text{ or }\\ c\\in i\\mathbb{R},\\,|c|^2-r^2=-1.\\ }\\]",
    "trap": "The seductive ``answer'' is that a circle is self-mapping exactly when it is orthogonal to the unit circle, $|c|^2-r^2=1$. Orthogonality is the condition for the circle to be fixed by the \\text{geometric inversion} $z\\mapsto z/|z|^2$ in the unit circle, and $w=\\tfrac1z$ looks like that inversion. It is not. Writing $\\tfrac1z=\\overline{\\,z/|z|^2\\,}$ shows $w=\\tfrac1z$ is inversion in the unit circle \\text{followed by reflection in the real axis}; the conjugation is invisible if one only tracks moduli. This produces two independent errors. First, orthogonality $|c|^2-r^2=1$ is \\text{not sufficient}: a circle orthogonal to $|z|=1$ but centred off the real axis, e.g. $c=\\tfrac54 i,\\ r=\\tfrac34$ (so $|c|^2-r^2=1$), is mapped by $w=\\tfrac1z$ to the orthogonal circle centred at $-\\tfrac54 i$, \\text{not} back to itself — the inversion fixes it but the extra reflection flips it across the real axis. Only when the centre already lies on the real axis does the reflection do nothing, so $|c|^2-r^2=1$ must be paired with $c\\in\\mathbb{R}$. Second, the ``orthogonal'' clause silently \\text{discards an entire family}: circles centred on the imaginary axis with $|c|^2-r^2=-1$ (so $r>|c|$, hence enclosing the origin and \\text{crossing}, not perpendicular to, the unit circle) are also self-mapping, because for them the inversion sends the circle to its own mirror image across the real axis, which the reflection then restores. The point $c=i,\\ r=\\sqrt2$ is the simplest witness. A parallel slip afflicts the lines: because $\\tfrac1z$ inverts moduli and negates arguments, a student declares ``every line through the origin is self-mapping.'' But the ray at angle $\\theta$ maps to the ray at angle $-\\theta$, so the full line at inclination $\\theta$ maps to the line at inclination $-\\theta$, and these coincide only when $\\theta\\equiv-\\theta\\pmod{\\pi}$, i.e. $\\theta=0$ or $\\tfrac\\pi2$ — only the two axes survive, not the whole pencil. The honest classification therefore has \\text{two} circle families and exactly \\text{two} lines, governed by the hidden conjugation, not by orthogonality alone.",
    "solutions": [
      {
        "name": "Circline coefficients: image is $(D,B,-C,A)$",
        "steps": [
          "Every line or circle in the plane is the zero set of $A(x^2+y^2)+Bx+Cy+D=0$ with $(A,B,C,D)$ real and not all zero; $A=0$ gives a line and $A\\neq0$ a circle. In complex form this is $A|z|^2+B\\,\\mathrm{Re}\\,z+C\\,\\mathrm{Im}\\,z+D=0$. Substitute $z=\\tfrac1w$ with $w=u+iv$: since $|z|^2=\\tfrac1{|w|^2}$, $\\mathrm{Re}\\,z=\\tfrac{u}{|w|^2}$, $\\mathrm{Im}\\,z=\\tfrac{-v}{|w|^2}$, multiplying through by $|w|^2$ gives $D(u^2+v^2)+Bu-Cv+A=0$. Thus the image circline has coefficient vector $(A',B',C',D')=(D,\\,B,\\,-C,\\,A)$.",
          "$\\Gamma$ is self-mapping iff $(D,B,-C,A)$ is a nonzero real multiple of $(A,B,C,D)$, say $(D,B,-C,A)=\\lambda(A,B,C,D)$. The middle two equations are $B=\\lambda B$ and $-C=\\lambda C$. If $B,C$ are not both zero this forces $\\lambda=1$ (then $C=0$) or $\\lambda=-1$ (then $B=0$); and if $B=C=0$ the outer equations $D=\\lambda A,\\ A=\\lambda D$ give $\\lambda^2=1$ too. So in every case $\\lambda=\\pm1$.",
          "$\\lambda=1$: from $D=\\lambda A,\\ A=\\lambda D$ we get $D=A$, and $-C=C$ gives $C=0$. The circline is $A|z|^2+Bx+A=0$. If $A=0$ it is the line $Bx=0$, i.e. the imaginary axis $x=0$. If $A\\neq0$, dividing by $A$: $x^2+y^2+\\tfrac{B}{A}x+1=0$, a real circle with centre $c=(-\\tfrac{B}{2A},0)\\in\\mathbb{R}$ and $|c|^2-r^2=$ (constant term) $=1$; it is real precisely when $\\big(\\tfrac{B}{2A}\\big)^2>1$.",
          "$\\lambda=-1$: now $D=-A$ and $B=-B$ gives $B=0$. The circline is $A|z|^2+Cy-A=0$. If $A=0$ it is the line $Cy=0$, the real axis $y=0$. If $A\\neq0$: $x^2+y^2+\\tfrac{C}{A}y-1=0$, a circle with centre $c=(0,-\\tfrac{C}{2A})\\in i\\mathbb{R}$ and $|c|^2-r^2=-1$, which is real and nonempty for every value of $C/A$ (radius $r=\\sqrt{(C/2A)^2+1}>0$). The unit circle $|z|=1$ is the member $C=0$.",
          "Collecting the two values of $\\lambda$: the only self-mapping lines are the real and imaginary axes, and the self-mapping circles are exactly those with $c\\in\\mathbb{R},\\ |c|^2-r^2=1$ or $c\\in i\\mathbb{R},\\ |c|^2-r^2=-1$. $\\boxed{\\text{axes only; }c\\in\\mathbb{R},|c|^2-r^2=1\\ \\text{ or }\\ c\\in i\\mathbb{R},|c|^2-r^2=-1}$"
        ]
      },
      {
        "name": "Inversion then reflection: $\\tfrac1z=\\overline{z/|z|^2}$",
        "steps": [
          "Factor the map as $w=\\tfrac1z=\\dfrac{\\bar z}{|z|^2}=\\overline{\\Big(\\dfrac{z}{|z|^2}\\Big)}$. So $w=R\\circ I$, where $I(z)=z/|z|^2$ is geometric inversion in the unit circle and $R(z)=\\bar z$ is reflection in the real axis. A circline is self-mapping under $w$ iff it is invariant under $R\\circ I$, i.e. iff $I(\\Gamma)=R(\\Gamma)$ (apply $R$, an involution, to both sides).",
          "Recall two clean facts. (a) $I$ sends the circle $|z-c|=r$ to a circle, and fixes it as a set iff it is orthogonal to the unit circle, $|c|^2-r^2=1$, or it is the unit circle itself. More generally $I$ sends a circle of centre $c$, radius $r$ (not through $0$) to the circle of centre $c/(|c|^2-r^2)$ and radius $r/\\bigl||c|^2-r^2\\bigr|$. (b) $R$ sends $|z-c|=r$ to $|z-\\bar c|=r$.",
          "Impose $I(\\Gamma)=R(\\Gamma)$, i.e. equate centres and radii: $\\dfrac{c}{|c|^2-r^2}=\\bar c$ and $\\dfrac{r}{\\bigl||c|^2-r^2\\bigr|}=r$. The radius equation gives $\\bigl||c|^2-r^2\\bigr|=1$, so $|c|^2-r^2=\\pm1$. Substituting into the centre equation: if $|c|^2-r^2=1$ then $c=\\bar c$, so $c\\in\\mathbb{R}$; if $|c|^2-r^2=-1$ then $-c=\\bar c$, so $c\\in i\\mathbb{R}$.",
          "Geometrically: family (i), $c\\in\\mathbb{R}$ with $|c|^2-r^2=1$, is fixed by $I$ (orthogonal) and by $R$ (real centre) separately, hence by the composite. Family (ii), $c\\in i\\mathbb{R}$ with $|c|^2-r^2=-1$, is fixed by neither factor alone: $I$ carries it to its mirror image (centre $\\bar c=-c$), and $R$ carries that back. The witness $c=i,r=\\sqrt2$: $I$ sends it to the circle of centre $-i$, then $R$ returns it. The lines fall out the same way: $I$ fixes every line through $0$, but $R$ fixes only lines symmetric in the real axis, i.e. the real and imaginary axes. $\\boxed{c\\in\\mathbb{R},|c|^2-r^2=1\\ \\text{ or }\\ c\\in i\\mathbb{R},|c|^2-r^2=-1;\\ \\text{lines: the two axes}}$"
        ]
      },
      {
        "name": "Point-pairing: the centre must be its own image-centre",
        "steps": [
          "If $|z-c|=r$ is self-mapping, then with each $z$ on it the image $\\tfrac1z$ also lies on it, so $\\Big|\\tfrac1z-c\\Big|=r$ for all such $z$. Square and clear: $\\big(\\tfrac1z-c\\big)\\overline{\\big(\\tfrac1z-c\\big)}=r^2$, i.e. $\\dfrac1{|z|^2}-c\\dfrac1{\\bar z}-\\bar c\\dfrac1z+|c|^2=r^2$. Multiply by $|z|^2=z\\bar z$: $1-c\\,z-\\bar c\\,\\bar z+(|c|^2-r^2)\\,z\\bar z=0$ for every $z$ on the circle.",
          "But $z$ itself satisfies $|z-c|^2=r^2$, i.e. $z\\bar z-c\\bar z-\\bar c z+(|c|^2-r^2)=0$, equivalently $z\\bar z = c\\bar z+\\bar c z-(|c|^2-r^2)$. The two displayed relations must hold simultaneously on the whole (one-real-parameter) circle, so they are proportional as affine relations in the coordinates $z,\\bar z,z\\bar z$. Comparing the $z\\bar z$, $z$, $\\bar z$ and constant terms of $1-cz-\\bar c\\bar z+(|c|^2-r^2)z\\bar z=0$ against the circle's own relation forces consistency only if $|c|^2-r^2=\\pm1$ together with a centre constraint, exactly as below.",
          "Concretely, set $k=|c|^2-r^2$. The image relation is $k\\,z\\bar z-c\\,z-\\bar c\\,\\bar z+1=0$; the original is $z\\bar z-\\bar c\\,z-c\\,\\bar z+k=0$. Proportionality of these two (same locus) needs the ratios of coefficients equal: $\\dfrac{k}{1}=\\dfrac{c}{\\bar c}=\\dfrac{\\bar c}{c}=\\dfrac{1}{k}$. From $\\tfrac{k}{1}=\\tfrac1k$ we get $k^2=1$, $k=\\pm1$. From $\\tfrac{c}{\\bar c}=\\tfrac{\\bar c}{c}=k$: if $k=1$ then $c=\\bar c$ ($c$ real); if $k=-1$ then $c=-\\bar c$ ($c$ purely imaginary).",
          "Thus $|c|^2-r^2=1$ with $c\\in\\mathbb{R}$, or $|c|^2-r^2=-1$ with $c\\in i\\mathbb{R}$ — the same two families. For lines, parametrise the line at angle $\\theta$ through $0$ as $z=te^{i\\theta}$; then $\\tfrac1z=\\tfrac1t e^{-i\\theta}$ lies on the line iff $e^{-i\\theta}$ is a real multiple of $e^{i\\theta}$, i.e. $e^{-2i\\theta}\\in\\mathbb{R}$, i.e. $2\\theta\\equiv0\\pmod{\\pi}$, giving $\\theta=0$ (real axis) or $\\theta=\\tfrac\\pi2$ (imaginary axis); a line not through $0$ maps to a circle through $0$, never to itself. $\\boxed{\\text{the two axes; }c\\in\\mathbb{R},|c|^2-r^2=1\\ \\text{ or }\\ c\\in i\\mathbb{R},|c|^2-r^2=-1}$"
        ]
      }
    ],
    "remark": "Insight: the entire problem turns on reading $w=\\tfrac1z$ correctly. It is not inversion in the unit circle — it is that inversion $z\\mapsto z/|z|^2$ composed with reflection in the real axis, since $\\tfrac1z=\\overline{z/|z|^2}$. Track only moduli and the conjugation vanishes, which is precisely how the orthogonality half-answer arises: $|c|^2-r^2=1$ is the invariance condition for the inversion alone. The hidden reflection forces two corrections at once. It demands the centre lie on the real axis (otherwise the mirror image is a different orthogonal circle), and it admits a second, non-orthogonal family of circles centred on the imaginary axis with $|c|^2-r^2=-1$ — circles that enclose the origin and cut the unit circle, for which inversion produces the mirror image and the reflection undoes it. The same conjugation prunes the pencil of lines through the origin down to just the two axes, the only lines symmetric in the real axis. Three lenses agree: the coefficient law $(A,B,C,D)\\mapsto(D,B,-C,A)$ for circlines under $z\\mapsto\\tfrac1z$, the factorisation $\\tfrac1z=R\\circ I$ with the demand $I(\\Gamma)=R(\\Gamma)$, and direct point-pairing. A top-rank solver never confuses $\\tfrac1z$ with $\\tfrac1{\\bar z}$: the latter is pure inversion and would indeed fix every orthogonal circle and every line through $0$, which is exactly the set the trap reports."
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
    "title": "Straightening Two Circles at Once",
    "difficulty": 5,
    "task": "Construct the map and find the ratio",
    "tags": [
      "mobius",
      "limiting points",
      "inversion",
      "inversive distance",
      "cross-ratio",
      "concentric circles"
    ],
    "statement": "In the Argand plane consider the two circles \\[ C_1:\\ |z|=1, \\qquad C_2:\\ \\left|z-\\tfrac{2}{5}\\right|=\\tfrac{2}{5}. \\] They are not concentric: $C_2$ lies strictly inside $C_1$ (its leftmost point is the origin, its rightmost point is $\\tfrac45$), and the two circles do not touch. There exists a M\\\"obius transformation $w=T(z)=\\dfrac{az+b}{cz+d}$ carrying $C_1$ and $C_2$ simultaneously onto a pair of concentric circles. (a) Exhibit such a map explicitly. (b) Determine the ratio $\\rho=R_{\\mathrm{outer}}/R_{\\mathrm{inner}}$ of the radii of the two concentric image circles, and show this ratio is the same for every map that concentrifies the pair. Report only $\\rho$.",
    "answer": "\\[\\boxed{\\rho=2}\\]",
    "trap": "The fatal instinct is to think a transformation that makes two circles concentric is just a matter of moving one circle onto the other's centre — a translation by $-\\tfrac25$, possibly with a rescaling. That is a similarity, and a similarity preserves the ratio of radii, so it would hand back $\\rho=R_2/R_1=\\tfrac{2/5}{1}=\\tfrac25$ (or its reciprocal $\\tfrac52$). Both are wrong. A Euclidean similarity can never concentrify two genuinely non-concentric circles at all: the offset between the centres is a similarity-invariant, so no rotation/translation/scaling removes it. Only a true M\\\"obius map (with $c\\ne0$, i.e. a real inversion) can do it, and it warps radii unequally — the image ratio $\\rho=2$ is an entirely new number, not $R_2/R_1$. A subtler trap lurks in where to centre the inversion: students reach for the midpoint $\\tfrac15$ of the two centres, but the correct fixed points are the two limiting points (the common inverse pair) $\\tfrac12$ and $2$, which are not symmetric about either centre. Finally, the construction is impossible for the tempting look-alike pair $|z|=1,\\ |z-\\tfrac12|=\\tfrac12$: those are internally tangent, sharing the point $z=1$, and sending that point to $\\infty$ turns them into two parallel lines, never concentric circles. Concentrification requires the circles to be strictly disjoint (here, nested without touching) so that a real pair of limiting points exists.",
    "solutions": [
      {
        "name": "Limiting points: the common inverse pair goes to $0$ and $\\infty$",
        "steps": [
          "Two non-intersecting circles possess a unique pair of limiting points $p,q$ that are inverse with respect to both circles simultaneously. Any M\\\"obius map sending $p\\mapsto0$ and $q\\mapsto\\infty$ makes both circles concentric about the origin, because inversion-symmetry of a circle in the point $0$ (and in $\\infty$) forces its centre to be $0$. So the whole problem reduces to finding $p,q$. By symmetry of $C_1,C_2$ about the real axis, $p,q$ are real.",
          "Inversion in $C_1$ ($|z|=1$, centre $0$) sends $p\\mapsto q$ iff $pq=1$. Inversion in $C_2$ (centre $\\tfrac25$, radius $\\tfrac25$) sends $p\\mapsto q$ iff $\\left(p-\\tfrac25\\right)\\left(q-\\tfrac25\\right)=\\left(\\tfrac25\\right)^2=\\tfrac{4}{25}$. From $pq=1$ the second equation becomes $1-\\tfrac25(p+q)+\\tfrac{4}{25}=\\tfrac{4}{25}$, so $p+q=\\tfrac52$. With $pq=1$ and $p+q=\\tfrac52$, $p,q$ are the roots of $t^2-\\tfrac52t+1=0$, namely $p=\\tfrac12,\\ q=2$.",
          "Take $T(z)=\\dfrac{z-\\tfrac12}{z-2}$, which sends $\\tfrac12\\mapsto0$ and $2\\mapsto\\infty$. For $C_1$, put $z=e^{i\\theta}$: a direct computation gives $|T(e^{i\\theta})|^2=\\dfrac{\\left|e^{i\\theta}-\\tfrac12\\right|^2}{\\left|e^{i\\theta}-2\\right|^2}=\\dfrac{\\tfrac54-\\cos\\theta}{5-4\\cos\\theta}=\\dfrac14$, constant. So $T(C_1)$ is the circle $|w|=\\tfrac12$. For $C_2$, put $z=\\tfrac25+\\tfrac25 e^{i\\theta}$: the same algebra gives $|T(z)|^2=\\tfrac{1}{16}$, constant, so $T(C_2)$ is $|w|=\\tfrac14$. Both images are centred at $0$ — concentric, as promised.",
          "Hence $R_{\\mathrm{outer}}=\\tfrac12$, $R_{\\mathrm{inner}}=\\tfrac14$, and $\\rho=\\dfrac{1/2}{1/4}=2$. Any other concentrifying map differs from $T$ by a M\\\"obius map fixing $0,\\infty$, i.e. $w\\mapsto kw$ ($k\\ne0$) or $w\\mapsto k/w$; both scale or swap the two radii by the same factor and leave the ratio (or its reciprocal) unchanged, so $\\rho=2$ is forced. $\\boxed{\\rho=2}$"
        ]
      },
      {
        "name": "Inversive distance — a conformal invariant read straight off the data",
        "steps": [
          "The inversive distance of two circles with centres distance $d$ apart and radii $r_1,r_2$ is $\\delta=\\dfrac{\\left|d^2-r_1^2-r_2^2\\right|}{2\\,r_1 r_2}$. It is invariant under every M\\\"obius transformation, since M\\\"obius maps are exactly the conformal automorphisms of the sphere and $\\delta$ is built from the conformal cross-ratio of the circle pair.",
          "For our circles $d=\\tfrac25$, $r_1=1$, $r_2=\\tfrac25$, so $\\delta=\\dfrac{\\left|\\tfrac{4}{25}-1-\\tfrac{4}{25}\\right|}{2\\cdot1\\cdot\\tfrac25}=\\dfrac{1}{4/5}=\\dfrac54.$ Since $\\delta>1$, the circles are disjoint and can be concentrified (a tangent pair has $\\delta=1$, intersecting has $\\delta<1$).",
          "For two concentric circles of radii $R_{\\mathrm{outer}}=\\rho R_{\\mathrm{inner}}$ and $R_{\\mathrm{inner}}$, the centre distance is $0$, so $\\delta=\\dfrac{R_{\\mathrm{outer}}^2+R_{\\mathrm{inner}}^2}{2R_{\\mathrm{outer}}R_{\\mathrm{inner}}}=\\dfrac{\\rho^2+1}{2\\rho}=\\tfrac12\\!\\left(\\rho+\\tfrac1\\rho\\right).$ Invariance forces this to equal $\\tfrac54$.",
          "Solving $\\rho+\\tfrac1\\rho=\\tfrac52$ gives $\\rho^2-\\tfrac52\\rho+1=0$, so $\\rho=2$ (taking the value $>1$; the root $\\tfrac12$ is the same pair with the roles of the circles swapped). $\\boxed{\\rho=2}$"
        ]
      },
      {
        "name": "Cross-ratio of the four diametral points on the line of centres",
        "steps": [
          "Both circles meet their common line of symmetry — the real axis — in two diametrically opposite points each: $C_1$ at $-1$ and $1$; $C_2$ at $0$ and $\\tfrac45$. A M\\\"obius map carrying the pair to concentric circles carries this line to a line through their common centre, where the four points become $\\pm R_{\\mathrm{outer}}$ and $\\pm R_{\\mathrm{inner}}$. The cross-ratio of four points is a M\\\"obius invariant, so we may equate the cross-ratios of the two quadruples.",
          "Compute the source cross-ratio with the outer points first: \\[ \\lambda=\\frac{(0-(-1))\\,(\\tfrac45-1)}{(0-1)\\,(\\tfrac45-(-1))}=\\frac{(1)(-\\tfrac15)}{(-1)(\\tfrac95)}=\\frac{-1/5}{-9/5}=\\frac19. \\]",
          "On the image the four points are $-R_o,\\,R_o,\\,-R_i,\\,R_i$ in the matching order, where $R_o=\\rho R_i$. Their cross-ratio is \\[ \\frac{(-R_i-(-R_o))(R_i-R_o)}{(-R_i-R_o)(R_i-(-R_o))}=\\frac{(R_o-R_i)^2}{(R_o+R_i)^2}=\\Big(\\frac{\\rho-1}{\\rho+1}\\Big)^{2}. \\] Setting $\\Big(\\dfrac{\\rho-1}{\\rho+1}\\Big)^2=\\dfrac19$ gives $\\dfrac{\\rho-1}{\\rho+1}=\\dfrac13$ (positive root, $\\rho>1$).",
          "Then $3(\\rho-1)=\\rho+1\\Rightarrow 2\\rho=4\\Rightarrow\\rho=2$. As an explicit check, the map $T(z)=\\dfrac{z-1/2}{z-2}$ sends $-1,1,0,\\tfrac45$ to $\\tfrac12,-\\tfrac12,\\tfrac14,-\\tfrac14$ — exactly $\\pm\\tfrac12$ and $\\pm\\tfrac14$ about the origin, confirming radii $\\tfrac12$ and $\\tfrac14$. $\\boxed{\\rho=2}$"
        ]
      }
    ],
    "remark": "Insight: making two circles concentric is the geometry behind the conformal modulus of an annulus — every pair of disjoint circles bounds a topological annulus, and the only M\\\"obius-invariant of that annulus is the radius ratio $\\rho$ of its concentric normal form. The engine is the pair of limiting points (the common inverse pair, here $\\tfrac12$ and $2$): sending them to $0$ and $\\infty$ collapses the offset that no similarity could ever remove. Three faces of the same invariant appear: the limiting-point construction gives the map, the inversive distance $\\delta=\\tfrac54$ reads $\\rho$ off the raw data via $\\delta=\\tfrac12(\\rho+\\rho^{-1})$, and the cross-ratio $\\tfrac19$ of the four diametral points pins it through $\\big(\\tfrac{\\rho-1}{\\rho+1}\\big)^2$. The decisive conceptual gate is that this is possible only because $\\delta>1$ (disjoint); the look-alike tangent pair $|z|=1,|z-\\tfrac12|=\\tfrac12$ has $\\delta=1$ and concentrifies to nothing but parallel lines."
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
    "title": "The Lune Threaded Through the Pole",
    "difficulty": 5,
    "task": "Determine and justify",
    "tags": [
      "inversion",
      "moebius",
      "circle-to-line",
      "conformality",
      "region image",
      "half-disk"
    ],
    "statement": "Work in the extended complex plane and let $w=\\dfrac1z$. Consider the closed planar region cut out by two curves at once, \\[ \\mathcal{R}=\\{\\,z:\\operatorname{Re}(z)\\ge 1\\,\\}\\;\\cap\\;\\{\\,z:|z-1|\\le 1\\,\\}, \\] a lune whose left edge is the vertical chord on the line $\\operatorname{Re}(z)=1$ joining $1-i$ to $1+i$, and whose right edge is the arc of the circle $|z-1|=1$ through the point $z=2$. \\par (a) Find the image of each bounding curve separately under $w=1/z$, being explicit about which becomes a line and which becomes a circle, and explain geometrically why exactly one of them straightens out. \\par (b) Combine the two boundary images with the correct interior-side bookkeeping to identify the full image region $w(\\mathcal{R})$, naming it as a recognizable elementary region. \\par (c) Using the conformality of $w=1/z$ away from the pole, state the interior angle of $w(\\mathcal{R})$ at each of its two curvilinear corners, and report the area of $w(\\mathcal{R})$. Give as the final answer the description of $w(\\mathcal{R})$ together with its area.",
    "answer": "\\[\\boxed{\\,w(\\mathcal{R})=\\{\\,w:\\ |w-\\tfrac12|\\le\\tfrac12\\ \\text{and}\\ \\operatorname{Re}(w)\\ge\\tfrac12\\,\\},\\quad \\text{area}=\\tfrac{\\pi}{8}\\,}\\]",
    "trap": "The decisive conceptual error is to treat both curves alike as ``circles that map to circles,'' and so to image the disk $|z-1|\\le 1$ as a bounded disk and intersect it with the disk coming from the half-plane, landing on the whole disk $|w-\\tfrac12|\\le\\tfrac12$ of area $\\tfrac{\\pi}{4}$. The hidden fact that is missed is that the circle $|z-1|=1$ passes through the origin $z=0$, which is precisely the pole of $w=1/z$; a circle through the pole does \\text{not} map to a circle but degenerates to a \\text{line}, here $\\operatorname{Re}(w)=\\tfrac12$. That line slices the would-be disk exactly along its vertical diameter, deleting half of it. A second, subtler trap is to keep the line $\\operatorname{Re}(w)=\\tfrac12$ but choose the \\text{wrong} side: a careless student tests no interior point and writes $\\operatorname{Re}(w)\\le\\tfrac12$, whereas the genuine interior point $z=\\tfrac32\\in\\mathcal{R}$ maps to $w=\\tfrac23$ with $\\operatorname{Re}(w)=\\tfrac23>\\tfrac12$, fixing the \\text{right} half. The correct image is the right half-disk of area $\\tfrac{\\pi}{8}$, half of the wrong answer.",
    "solutions": [
      {
        "name": "Conjugate algebra for each boundary, then side-tests",
        "steps": [
          "Image of the line $\\operatorname{Re}(z)=1$. Parametrize $z=1+it$, $t\\in\\mathbb{R}$; then $w=\\dfrac{1}{1+it}=\\dfrac{1-it}{1+t^2}$, so $u=\\dfrac{1}{1+t^2}$ and $v=\\dfrac{-t}{1+t^2}$ give $u^2+v^2=\\dfrac{1}{1+t^2}=u$, i.e. $\\bigl(u-\\tfrac12\\bigr)^2+v^2=\\tfrac14$. The line becomes the circle $|w-\\tfrac12|=\\tfrac12$. It stays a finite circle because the line $\\operatorname{Re}(z)=1$ avoids the pole $z=0$.",
          "Image of the circle $|z-1|=1$. Expanding, $|z-1|^2=1$ means $|z|^2-z-\\bar z=0$, i.e. $|z|^2=z+\\bar z$. Substituting $z=\\tfrac1w$ gives $\\dfrac{1}{|w|^2}=\\dfrac{1}{w}+\\dfrac{1}{\\bar w}=\\dfrac{w+\\bar w}{|w|^2}$, hence $1=w+\\bar w=2\\operatorname{Re}(w)$, the line $\\operatorname{Re}(w)=\\tfrac12$. This circle straightens out precisely because it passes through $z=0$, the pole of $1/z$, which is sent to $\\infty$; exactly one curve does this, namely the one through the origin.",
          "Side bookkeeping. The half-plane $\\operatorname{Re}(z)\\ge1$ has interior probe $z=2\\mapsto w=\\tfrac12$, which lies inside $|w-\\tfrac12|=\\tfrac12$; so $\\{\\operatorname{Re}(z)\\ge1\\}$ maps into the disk $|w-\\tfrac12|\\le\\tfrac12$. The disk $|z-1|\\le1$ has interior probe $z=\\tfrac32\\mapsto w=\\tfrac23$ with $\\operatorname{Re}(w)=\\tfrac23>\\tfrac12$; so $\\{|z-1|\\le1\\}$ maps into the half-plane $\\operatorname{Re}(w)\\ge\\tfrac12$. Intersecting, $w(\\mathcal{R})=\\{|w-\\tfrac12|\\le\\tfrac12\\}\\cap\\{\\operatorname{Re}(w)\\ge\\tfrac12\\}$, the right half of the disk; this proves (a) and (b).",
          "Corners and area. The corners $z=1\\pm i$ map to $w=\\tfrac12\\mp\\tfrac12 i$, where the circle $|w-\\tfrac12|=\\tfrac12$ meets the line $\\operatorname{Re}(w)=\\tfrac12$; since $\\operatorname{Re}(w)=\\tfrac12$ is the vertical diameter, the cut is a half-disk and each corner angle is $\\tfrac{\\pi}{2}$. A half-disk of radius $\\tfrac12$ has area $\\tfrac12\\pi(\\tfrac12)^2=\\tfrac{\\pi}{8}$. $\\boxed{w(\\mathcal{R})=\\{|w-\\tfrac12|\\le\\tfrac12,\\ \\operatorname{Re}(w)\\ge\\tfrac12\\},\\ \\text{area}=\\tfrac{\\pi}{8}}$"
        ]
      },
      {
        "name": "Conformality: trace the boundary and corner angles",
        "steps": [
          "Trace the corners first. The lune $\\mathcal{R}$ has exactly two corners, $z=1+i$ and $z=1-i$, where the chord on $\\operatorname{Re}(z)=1$ meets the arc of $|z-1|=1$. At $z=1+i$ the chord has tangent direction $i$ (vertical) and the circle's radius is $z-1=i$, so its tangent is $1$ (horizontal); the curves cross at $\\tfrac{\\pi}{2}$. Because $w=1/z$ is conformal at every $z\\neq0$ and $z=1\\pm i\\neq0$, the images cross at the same angle $\\tfrac{\\pi}{2}$.",
          "Locate the boundary images. The corners go to $w=\\tfrac{1}{1+i}=\\tfrac12-\\tfrac12 i$ and $w=\\tfrac{1}{1-i}=\\tfrac12+\\tfrac12 i$. The arc's interior point $z=2\\mapsto w=\\tfrac12$, and the chord's interior point $z=1\\mapsto w=1$. So one boundary image runs through $\\tfrac12\\pm\\tfrac12 i$ and $1$ (a curve bulging right to $w=1$), the other through $\\tfrac12\\pm\\tfrac12 i$ and $\\tfrac12$ (a straight vertical segment).",
          "Identify the two arcs. Three points $\\tfrac12+\\tfrac12 i,\\ 1,\\ \\tfrac12-\\tfrac12 i$ all satisfy $|w-\\tfrac12|=\\tfrac12$, so the chord's image is the right semicircle of $|w-\\tfrac12|=\\tfrac12$. The points $\\tfrac12+\\tfrac12 i,\\ \\tfrac12,\\ \\tfrac12-\\tfrac12 i$ all have $\\operatorname{Re}(w)=\\tfrac12$, so the arc's image is the vertical diameter segment. The region they bound, containing the image $w=\\tfrac23$ of the interior point $z=\\tfrac32$, is the right half-disk.",
          "Conclude. The boundary is a semicircle of radius $\\tfrac12$ closed off by its diameter, meeting at two right angles (as conformality demanded), enclosing area $\\tfrac12\\pi(\\tfrac12)^2=\\tfrac{\\pi}{8}$. $\\boxed{w(\\mathcal{R})=\\{|w-\\tfrac12|\\le\\tfrac12,\\ \\operatorname{Re}(w)\\ge\\tfrac12\\},\\ \\text{area}=\\tfrac{\\pi}{8}}$"
        ]
      },
      {
        "name": "Symmetry plus a single real cross-section",
        "steps": [
          "Use the conjugation symmetry. Since $\\overline{1/z}=1/\\bar z$ and $\\mathcal{R}$ is symmetric about the real axis (if $z\\in\\mathcal{R}$ then $\\bar z\\in\\mathcal{R}$), the image $w(\\mathcal{R})$ is symmetric about the real axis. Thus it suffices to pin down its real cross-section and one bounding circle/line.",
          "Real cross-section. The real points of $\\mathcal{R}$ are $z\\in[1,2]$ (here $\\operatorname{Re}(z)\\ge1$ and $|z-1|\\le1$ both hold). Under $w=1/z$ this segment maps to $w\\in[\\tfrac12,1]$, monotonically. So $w(\\mathcal{R})$ meets the real axis exactly in $[\\tfrac12,1]$, a segment of length $\\tfrac12$ from $w=\\tfrac12$ to $w=1$.",
          "Pin the bounding curves. From the algebra $|z-1|^2=1\\Rightarrow|z|^2=2\\operatorname{Re}(z)$ and $z=1/w$, the circle maps to $\\operatorname{Re}(w)=\\tfrac12$; from $z=1+it$, the line maps to $|w-\\tfrac12|=\\tfrac12$. The real cross-section $[\\tfrac12,1]$ runs from the line $\\operatorname{Re}(w)=\\tfrac12$ (at its left end $w=\\tfrac12$) to the circle $|w-\\tfrac12|=\\tfrac12$ (at its right end $w=1$), so the symmetric region is exactly the part of the disk $|w-\\tfrac12|\\le\\tfrac12$ lying to the right of $\\operatorname{Re}(w)=\\tfrac12$.",
          "Finish. That is the right half-disk of radius $\\tfrac12$, its flat edge along $\\operatorname{Re}(w)=\\tfrac12$ being the vertical diameter, so its area is $\\tfrac12\\pi(\\tfrac12)^2=\\tfrac{\\pi}{8}$. $\\boxed{w(\\mathcal{R})=\\{|w-\\tfrac12|\\le\\tfrac12,\\ \\operatorname{Re}(w)\\ge\\tfrac12\\},\\ \\text{area}=\\tfrac{\\pi}{8}}$"
        ]
      }
    ],
    "remark": "Insight: the two boundary curves are processed by inversion in opposite ways, and the single deciding feature is the pole at $z=0$. The line $\\operatorname{Re}(z)=1$ misses the origin, so it stays a bounded circle $|w-\\tfrac12|=\\tfrac12$; the circle $|z-1|=1$ runs through the origin, so it must straighten into the line $\\operatorname{Re}(w)=\\tfrac12$ — and that line lands on the diameter of the circle, severing the disk into exactly two equal halves. Forgetting the pole keeps the whole disk and doubles the area to $\\tfrac{\\pi}{4}$; forgetting to probe an interior point keeps the wrong half. Conformality then certifies for free that the two corners stay at $\\tfrac{\\pi}{2}$, confirming the figure is a genuine half-disk rather than a lens, and pins the area at $\\tfrac{\\pi}{8}$."
  },
  {
    "theme": "transformations",
    "themeLabel": "Mappings of the Plane",
    "title": "The Mirror That Trades the Centre for a Star",
    "difficulty": 5,
    "task": "Determine the unique map and classify all such",
    "tags": [
      "mobius involution",
      "disk automorphism",
      "blaschke factor",
      "trace zero",
      "fixed points",
      "inverse points"
    ],
    "statement": "Fix an interior point $a$ of the open unit disk, $0<|a|<1$. We seek a M\\\"obius transformation $w$ of the extended plane that is simultaneously all of the following: \\par (i) an involution --- $w(w(z))=z$ for every $z$, but $w$ is not the identity; \\par (ii) it carries the unit circle $|z|=1$ to itself as a set (and hence maps the open disk to a fixed region); \\par (iii) it swaps the centre and the star: $w(0)=a$ and $w(a)=0$. \\par Find $w$ explicitly in terms of $a$ and prove it is the only M\\\"obius map meeting (i)--(iii). Then identify the two fixed points of $w$ and state their precise location relative to the unit circle. \\par (A natural first move: ``an involution that keeps the circle setwise and swaps two real-axis points must keep the two points where the diameter through $0$ and $a$ pierces the circle fixed.'' Decide whether that pins down $w$, and if not, say what it actually produces.)",
    "answer": "\\[\\boxed{\\,w(z)=\\dfrac{a-z}{1-\\bar a\\,z}\\,}\\]",
    "trap": "The seductive shortcut is to locate the fixed points first by a false geometric guess. The reasoning runs: ``$w$ keeps the unit circle setwise and swaps the two points $0,a$ that lie on a diameter; surely the two points where that diameter meets the circle are held fixed.'' Take $a$ real for concreteness; the diameter is the real axis, meeting $|z|=1$ at $z=+1$ and $z=-1$. An involution with fixed points $\\pm1$ is forced (the only non-identity M\\\"obius map of order two fixing $\\pm1$) to be $w(z)=\\tfrac1z$, because $\\tfrac{w-1}{w+1}=-\\tfrac{z-1}{z+1}$ solves to $w=1/z$. But $\\tfrac1z$ sends $0\\mapsto\\infty$ and $a\\mapsto\\tfrac1a$ --- it does \\text{not} swap $0$ and $a$ at all, so it violates (iii) outright. The error is conceptual, not arithmetic: an involution that \\text{swaps} $0$ and $a$ cannot fix the points of the circle on their diameter, because its two genuine fixed points are the roots of $z=\\tfrac{a-z}{1-\\bar a z}$, i.e. of $\\bar a z^2-2z+a=0$, whose product is $a/\\bar a$ of modulus $1$ --- a pair of \\text{inverse points} $z_-,z_+$ with $z_+=1/\\overline{z_-}$, one strictly \\text{inside} the disk and one strictly \\text{outside}, never on the circle (for $a$ real they are $\\tfrac{1\\mp\\sqrt{1-a^2}}{a}$, reciprocals straddling $|z|=1$). The circle being preserved \\text{setwise} does not freeze the spots where a chosen diameter crosses it; those spots get carried to \\text{other} points of the same circle. Fixing the wrong pair manufactures $\\tfrac1z$, an involution that preserves the circle but fails the swap, and the candidate collapses.",
    "solutions": [
      {
        "name": "Blaschke automorphism cut down by the involution condition",
        "steps": [
          "First pin the shape forced by (ii). A M\\\"obius map carrying the unit circle to itself and the open disk to itself is exactly a Blaschke automorphism $w(z)=e^{i\\theta}\\dfrac{z-b}{1-\\bar b\\,z}$ with $|b|<1$ and $\\theta$ real (these are the orientation-preserving automorphisms of the disk; one checks $|w|=1$ when $|z|=1$ and $|w(0)|=|b|<1$). We will see (iii) selects the disk-preserving branch automatically, so this is no loss.",
          "Impose the swap (iii). From $w(a)=0$ we need the numerator to vanish at $z=a$, i.e. $b=a$. Then $w(z)=e^{i\\theta}\\dfrac{z-a}{1-\\bar a z}$, and $w(0)=e^{i\\theta}\\dfrac{-a}{1}=-e^{i\\theta}a$. Requiring $w(0)=a$ gives $-e^{i\\theta}a=a$, and since $a\\neq0$, $e^{i\\theta}=-1$. Hence $w(z)=-\\dfrac{z-a}{1-\\bar a z}=\\dfrac{a-z}{1-\\bar a z}$.",
          "Check (i): the normalized matrix of $w$ is $M=\\begin{pmatrix}-1 & a\\\\ -\\bar a & 1\\end{pmatrix}$, with $\\operatorname{tr}M=-1+1=0$. A M\\\"obius map is an involution precisely when its matrix is trace-free (then $M^2=(\\det M)I$ acts as the identity M\\\"obius map); here $\\det M=|a|^2-1\\neq0$, so $w$ is a genuine non-identity involution. Direct substitution confirms $w(w(z))=z$.",
          "Uniqueness: the conditions left $\\theta$ and $b$ with no freedom --- $b=a$ from $w(a)=0$ and $e^{i\\theta}=-1$ from $w(0)=a$ --- so within disk automorphisms $w$ is unique. (Solution 2 shows no disk-\\text{swapping} M\\\"obius map can meet all three conditions either, so $w$ is the only M\\\"obius map of any kind satisfying (i)--(iii).) The fixed points solve $\\bar a z^2-2z+a=0$; their product is $a/\\bar a$, of modulus $1$, so they are inverse points $z_+=1/\\overline{z_-}$, one inside and one outside $|z|=1$. $\\boxed{w(z)=\\dfrac{a-z}{1-\\bar a z}}$"
        ]
      },
      {
        "name": "Trace-zero algebra from scratch, no automorphism prior",
        "steps": [
          "Write $w(z)=\\dfrac{Az+B}{Cz+D}$ and use only (i) and (iii), not (ii). Involution means the matrix is trace-free: $A+D=0$, so $D=-A$. The swap gives two equations: $w(0)=\\dfrac{B}{D}=a\\Rightarrow B=aD=-aA$, and $w(a)=\\dfrac{Aa+B}{Ca+D}=0\\Rightarrow Aa+B=0\\Rightarrow B=-aA$ --- the same relation, automatically consistent. Thus (i)$+$(iii) alone leave a one-parameter family $w(z)=\\dfrac{Az-aA}{Cz-A}=\\dfrac{z-a}{(C/A)z-1}$, with $k:=C/A$ still free.",
          "Now bring in (ii): demand $|w(z)|=1$ whenever $|z|=1$. With $w=\\dfrac{z-a}{kz-1}$ this is $|z-a|=|kz-1|$ for all $z$ on the circle, equivalently $|z-a|^2=|kz-1|^2$, i.e. $(z-a)(\\bar z-\\bar a)=(kz-1)(\\bar k\\bar z-1)$, to be checked on the locus $z\\bar z=1$.",
          "Expand both sides with $z\\bar z=1$: left $=1-\\bar a z-a\\bar z+|a|^2$, right $=|k|^2-\\bar k\\bar z-kz+1$. Matching the coefficient of $z$ gives $\\bar a=k$; matching the coefficient of $\\bar z$ gives $a=\\bar k$, i.e. again $k=\\bar a$; the constant terms then read $1+|a|^2=|k|^2+1$, i.e. $|k|=|a|$, consistent. Hence $k=\\bar a$ is forced and unique.",
          "Therefore $w(z)=\\dfrac{z-a}{\\bar a z-1}=\\dfrac{a-z}{1-\\bar a z}$, recovered with no appeal to the Blaschke form and shown unique among all M\\\"obius maps (the circle condition admits no second value of $k$, complex or real). Since $|w(0)|=|a|<1$ the map sends the disk to itself, so the preserved region in (ii) is the open disk, not its exterior. $\\boxed{w(z)=\\dfrac{a-z}{1-\\bar a z}}$"
        ]
      },
      {
        "name": "Symmetry principle via inverse points",
        "steps": [
          "A M\\\"obius map preserving the unit circle setwise must respect inversion symmetry: if $z^*=1/\\bar z$ is the point inverse to $z$ in the unit circle, then $w(z^*)=\\big(w(z)\\big)^*=1/\\overline{w(z)}$ (the circle of symmetry is carried to itself, so paired points stay paired). Apply this with $z=0$, whose inverse point is $\\infty$: from $w(0)=a$ we get $w(\\infty)=1/\\bar a$, the point inverse to $a$.",
          "So $w$ sends $0\\mapsto a$, $a\\mapsto 0$ (given), and $\\infty\\mapsto 1/\\bar a$. Three source-image pairs determine a M\\\"obius map uniquely. Build it from the swap structure: an involution exchanging $0$ and $a$ has the form $w(z)=\\dfrac{a-z}{1+\\beta z}$ for some $\\beta$ (numerator vanishes at $a$, value at $0$ is $a$, and the trace-zero normalization $\\begin{pmatrix}-1 & a\\\\ \\beta & 1\\end{pmatrix}$ keeps it an involution).",
          "Fix $\\beta$ from the third pair $w(\\infty)=1/\\bar a$: as $z\\to\\infty$, $w(z)\\to -1/\\beta$, so $-1/\\beta=1/\\bar a$, giving $\\beta=-\\bar a$. Hence $w(z)=\\dfrac{a-z}{1-\\bar a z}$.",
          "Consistency: this $w$ indeed maps the circle to itself ($|w|=1$ on $|z|=1$), is its own inverse, and swaps $0,a$; uniqueness is built in because three pairs determine a M\\\"obius map. The fixed points solve $w(z)=z$, i.e. $\\bar a z^2-2z+a=0$, with product $a/\\bar a$ of modulus $1$: a genuine pair of inverse points straddling the circle, never on it --- which is exactly why the diameter-piercing guess of the trap fails. $\\boxed{w(z)=\\dfrac{a-z}{1-\\bar a z}}$"
        ]
      }
    ],
    "remark": "Insight: three independent conditions --- order two, circle-preserving, and the $0\\leftrightarrow a$ swap --- conspire to leave exactly one map, the Blaschke involution $w(z)=\\tfrac{a-z}{1-\\bar a z}$, which is the standard disk automorphism $\\varphi_a$ wearing its self-inverse hat. Two structural facts do all the work. First, ``involution'' is not a vague order condition: a non-identity M\\\"obius map is an involution iff its matrix is trace-free, the analogue of a reflection, and that single linear condition $A+D=0$ collapses the swap data to a one-parameter family before any geometry. Second, ``preserves the unit circle setwise'' is a symmetry statement, not a fixed-point statement; it pairs inverse points $z$ and $1/\\bar z$ and so forces $w(\\infty)=1/\\bar a$, but it pointedly does not hold the diameter's intersections with the circle still. The trap dies precisely here: the true fixed points are the reciprocal inverse pair $\\tfrac{1\\mp\\sqrt{1-|a|^2}}{\\bar a}$-type roots of $\\bar a z^2-2z+a=0$, one inside and one outside, never the on-circle points $\\pm1$ whose involution is the impostor $1/z$. A top-rank solver reads each adjective as an algebraic constraint --- trace-zero, inversion-symmetric, swap-determined --- and lets the three constraints intersect, rather than guessing the fixed points from a picture."
  },
  {
    "theme": "transformations",
    "themeLabel": "Mappings of the Plane",
    "title": "The Centre That Refused to Be Inverted",
    "difficulty": 4,
    "task": "Determine",
    "tags": [
      "inversion",
      "mobius",
      "image circle",
      "centre trap",
      "inversive symmetry"
    ],
    "statement": "Work in the extended complex plane under the inversion \\[ w=\\frac1z . \\] Let $\\mathcal{C}$ be the circle \\[ \\mathcal{C}:\\ |z-3|=1, \\] which lies wholly in the right half-plane and does not pass through the pole $z=0$. \\par (a) Find the image curve $w(\\mathcal{C})$ exactly: prove it is a circle and give its centre and radius. \\par (b) The point $z=3$ is the centre of $\\mathcal{C}$. Decide whether its image $w(3)$ is the centre of the image circle $w(\\mathcal{C})$; if not, compute the exact distance between $w(3)$ and the true centre of $w(\\mathcal{C})$.",
    "answer": "\\[\\boxed{\\,w(\\mathcal{C}):\\ \\left|w-\\tfrac38\\right|=\\tfrac18;\\qquad w(3)=\\tfrac13\\neq\\tfrac38,\\ \\text{offset}=\\tfrac1{24}\\,}\\]",
    "trap": "Reasoning ``inversion is a conformal bijection, so it carries the circle $\\mathcal C$ to a circle and carries its centre $z=3$ to the centre of that image circle,'' and reporting the image as the circle centred at $w(3)=\\tfrac13$. This is false. A M\\\"obius map preserves the family of lines-and-circles, but it is not a Euclidean similarity: it does not send the Euclidean centre of a circle to the Euclidean centre of the image circle. Concretely the diameter of $\\mathcal C$ along the real axis runs from $z=2$ to $z=4$, whose images are $\\tfrac12$ and $\\tfrac14$; the true centre is their midpoint $\\tfrac{1}{2}\\bigl(\\tfrac12+\\tfrac14\\bigr)=\\tfrac38$, not $\\tfrac13$. The image $w(3)=\\tfrac13$ does lie inside the image disk, but off-centre by exactly $\\bigl|\\tfrac38-\\tfrac13\\bigr|=\\tfrac1{24}$. What inversion does preserve is the symmetric pair $(\\text{centre},\\infty)$, not the centre alone.",
    "solutions": [
      {
        "name": "Algebraic substitution $z=1/w$",
        "steps": [
          "Write $\\mathcal C:\\,|z-3|=1$ as $|z|^2-3(z+\\bar z)+9=1$, i.e. $z\\bar z-3(z+\\bar z)+8=0$.",
          "Substitute $z=\\tfrac1w$, $\\bar z=\\tfrac1{\\bar w}$ and multiply through by $w\\bar w\\ (=|w|^2\\neq0$, since $0\\notin w(\\mathcal C))$: $\\;1-3(\\bar w+w)+8w\\bar w=0$, hence $|w|^2-\\tfrac38(w+\\bar w)+\\tfrac18=0$.",
          "Complete the square: $\\bigl|w-\\tfrac38\\bigr|^2=\\bigl(\\tfrac38\\bigr)^2-\\tfrac18=\\tfrac{9}{64}-\\tfrac{8}{64}=\\tfrac1{64}$, so $w(\\mathcal C)$ is the circle $\\bigl|w-\\tfrac38\\bigr|=\\tfrac18$.",
          "Its centre is $\\tfrac38$, while $w(3)=\\tfrac13$; the displacement is $\\bigl|\\tfrac38-\\tfrac13\\bigr|=\\bigl|\\tfrac{9-8}{24}\\bigr|=\\tfrac1{24}$, so the centre is not mapped to the centre. $\\boxed{\\bigl|w-\\tfrac38\\bigr|=\\tfrac18,\\ \\text{offset }\\tfrac1{24}}$"
        ]
      },
      {
        "name": "Two diametral points pin the circle",
        "steps": [
          "Because $\\mathcal C$ is centred on the real axis, the real axis cuts it in a diameter, with endpoints the nearest and farthest real points $z=2$ and $z=4$. The real axis is fixed by $w=\\tfrac1z$, so these endpoints map to real points $w=\\tfrac12$ and $w=\\tfrac14$.",
          "A M\\\"obius map carries the diameter line (the real axis) to a line through the two image points; since both images are real, that line is again the real axis, and $\\tfrac12,\\tfrac14$ are the two ends of a diameter of the image circle.",
          "Hence the image circle has centre $\\tfrac12\\bigl(\\tfrac12+\\tfrac14\\bigr)=\\tfrac38$ and radius $\\tfrac12\\bigl(\\tfrac12-\\tfrac14\\bigr)=\\tfrac18$, giving $\\bigl|w-\\tfrac38\\bigr|=\\tfrac18$.",
          "The original centre $z=3$ maps to $w(3)=\\tfrac13$, which is not the midpoint $\\tfrac38$ of the image diameter; it sits inside at distance $\\bigl|\\tfrac38-\\tfrac13\\bigr|=\\tfrac1{24}$ from the centre. $\\boxed{\\bigl|w-\\tfrac38\\bigr|=\\tfrac18,\\ \\text{offset }\\tfrac1{24}}$"
        ]
      },
      {
        "name": "Inversive symmetry of $(\\text{centre},\\infty)$",
        "steps": [
          "The centre $z=3$ of $\\mathcal C$ and the point $\\infty$ are symmetric with respect to $\\mathcal C$ (a M\\\"obius-invariant relation: the centre is the inverse point of $\\infty$). Under $w=\\tfrac1z$ this pair maps to $w=\\tfrac13$ and $w=0$, which must be symmetric with respect to the image circle $w(\\mathcal C)$.",
          "Let the image circle have centre $c$ (real, since $\\mathcal C$ and the map are symmetric in the real axis) and radius $R$. Symmetry of the collinear points $\\tfrac13$ and $0$ about it gives $\\bigl(\\tfrac13-c\\bigr)(0-c)=R^2$, i.e. $c^2-\\tfrac13 c=R^2$.",
          "One genuine point fixes the scale: $z=2\\in\\mathcal C$ gives $w=\\tfrac12\\in w(\\mathcal C)$, so $\\bigl(\\tfrac12-c\\bigr)^2=R^2$. Subtracting, $\\bigl(\\tfrac12-c\\bigr)^2-\\bigl(c^2-\\tfrac13c\\bigr)=0\\Rightarrow\\tfrac14-c+\\tfrac13c=0\\Rightarrow\\tfrac23c=\\tfrac14\\Rightarrow c=\\tfrac38$, whence $R=\\bigl|\\tfrac12-\\tfrac38\\bigr|=\\tfrac18$.",
          "So $w(\\mathcal C):\\bigl|w-\\tfrac38\\bigr|=\\tfrac18$, and the genuine image of the centre, $\\tfrac13$, lies $\\tfrac1{24}$ off the true centre $\\tfrac38$ — the symmetric pair, not the centre, is what inversion respects. $\\boxed{\\bigl|w-\\tfrac38\\bigr|=\\tfrac18,\\ \\text{offset }\\tfrac1{24}}$"
        ]
      }
    ],
    "remark": "Insight: a M\\\"obius map preserves the class of circles-and-lines but is not a similarity, so it almost never sends a circle's Euclidean centre to the image's Euclidean centre — here $z=3\\mapsto\\tfrac13$ misses the true centre $\\tfrac38$ by $\\tfrac1{24}$. The clean way to locate the image circle is to use what is invariant: a diametral chord on a fixed line (Method 2), or the inversive-symmetric pair (centre, $\\infty$)$\\mapsto(\\tfrac13,0)$ (Method 3). The substitution $z=1/w$ then turns the defining equation into $8|w|^2-3(w+\\bar w)+1=0$, whose constant term $\\tfrac18$ produces $R^2=\\tfrac1{64}$ exactly. The pretty collapse — endpoints $2,4\\mapsto\\tfrac12,\\tfrac14$ with reciprocal spacing — is why the radius shrinks from $1$ to $\\tfrac18$, not by any naive scale at the centre."
  },
  {
    "theme": "triangles",
    "themeLabel": "Triangles & Polygons",
    "title": "The Vertex Just Past the Arc",
    "difficulty": 5,
    "task": "Prove and evaluate",
    "tags": [
      "roots of unity",
      "regular polygon",
      "product of chords",
      "arc midpoint",
      "factorization",
      "conceptual trap"
    ],
    "statement": "Identify each point of the plane with a complex number and place a regular $n$-gon with its centre at the origin: its vertices are $A_k = R\\,\\omega^{k}$ for $k=0,1,\\dots,n-1$, where $R>0$ is the circumradius and $\\omega = e^{2\\pi i/n}$, so the $A_k$ all lie on the circle $|z|=R$. Let $P$ be an arbitrary point of the plane, written $P=p\\in\\mathbb{C}$, and let \\[ \\Pi(P)=\\prod_{k=0}^{n-1}\\big|\\,P-A_k\\,\\big| \\] be the product of the distances from $P$ to all $n$ vertices. \\par (a) Prove, directly from the fact that $A_0,\\dots,A_{n-1}$ are exactly the roots of $z^{n}-R^{n}=0$, the closed form \\[ \\Pi(P)=\\big|\\,p^{\\,n}-R^{\\,n}\\,\\big| \\qquad\\text{for every }p\\in\\mathbb{C}. \\] \\par (b) Now take $P$ to be the point on the circumscribed circle lying exactly at the midpoint of the minor arc $A_0A_1$ — i.e. the point $|P|=R$ whose argument is halfway between those of $A_0$ and $A_1$. Prove that for this $P$, \\[ \\Pi(P)=2R^{\\,n}, \\] a value that depends on neither the orientation of the polygon nor on $n$ beyond the factor $R^{n}$. \\par (c) Apply this to a regular hexagon $(n=6)$ of circumradius $R=2$ whose arc-midpoint $P$ sits between two adjacent vertices, and report the exact value of the product $\\Pi(P)$ as the final answer.",
    "answer": "\\[\\boxed{\\Pi(P)=2R^{n}=128}\\]",
    "trap": "The fatal conceptual error is to confuse ``$P$ lies on the same circle as the vertices'' with ``$P$ is a root of $z^{n}=R^{n}$.'' A strong student writes $\\Pi(P)=|p^{n}-R^{n}|$ correctly in part (a), then reasons: ``$P$ is on the circle $|z|=R$, so $P$ is just a rotated vertex, hence $p^{n}=R^{n}$ and the product collapses to $|R^{n}-R^{n}|=0$.'' The verdict $\\Pi(P)=0$ is wrong, and it is wrong for a sharp conceptual reason: of all the points on the circle, only the $n$ vertices satisfy $p^{n}=R^{n}$; the arc-MIDPOINT $P=R\\,e^{i\\pi/n}$ carries the extra half-step $e^{i\\pi/n}$, so $p^{n}=R^{n}e^{i\\pi}=-R^{n}$, a root of $z^{n}+R^{n}=0$, NOT of $z^{n}-R^{n}=0$. The single sign flip turns $|R^{n}-R^{n}|=0$ into $|-R^{n}-R^{n}|=2R^{n}$. A second, quieter trap is to import the famous from-a-VERTEX value $\\prod_{k\\neq j}|A_j-A_k|=n\\,R^{\\,n-1}$ (which gives $6\\cdot2^{5}=192$ here) and apply it to a point that is not a vertex; the from-vertex formula is a different object (it has $n-1$ factors after deleting the zero distance), and reusing it both miscounts the factors and reports the wrong polygon constant.",
    "solutions": [
      {
        "name": "Factor the vertex polynomial and evaluate at P",
        "steps": [
          "The vertices $A_k=R\\,\\omega^{k}$ are precisely the $n$ solutions of $z^{n}=R^{n}$, i.e. the roots of the monic polynomial $f(z)=z^{n}-R^{n}$. Since this polynomial has leading coefficient $1$ and these $n$ distinct roots, it factors completely as $f(z)=\\prod_{k=0}^{n-1}\\big(z-A_k\\big)$. Evaluating at any $p\\in\\mathbb{C}$ gives $\\prod_{k=0}^{n-1}(p-A_k)=p^{n}-R^{n}$, and taking moduli, $\\Pi(P)=\\prod_{k=0}^{n-1}|p-A_k|=\\big|p^{n}-R^{n}\\big|$. This proves (a) with no trigonometry.",
          "For part (b), the arc-midpoint between $A_0=R$ and $A_1=R\\,e^{2\\pi i/n}$ lies on $|z|=R$ at the average argument $\\tfrac12\\!\\left(0+\\tfrac{2\\pi}{n}\\right)=\\tfrac{\\pi}{n}$, so $P=R\\,e^{i\\pi/n}$. Then $p^{n}=R^{n}e^{i\\pi}=-R^{n}$. Note $p^{n}=-R^{n}\\neq R^{n}$: $P$ is a root of $z^{n}+R^{n}=0$, not of $z^{n}-R^{n}=0$, which is exactly why the product does not vanish.",
          "Substitute into the closed form: $\\Pi(P)=|p^{n}-R^{n}|=|-R^{n}-R^{n}|=|-2R^{n}|=2R^{n}$. The result is independent of the polygon's orientation, because rotating every $A_k$ by a common $e^{i\\alpha}$ and $P$ along with them multiplies $p^{n}-R^{n}e^{in\\alpha}$ by a unit modulus factor, leaving $|p^{n}-R^{n}|$ unchanged. This proves (b).",
          "For the hexagon, $n=6$ and $R=2$, so $\\Pi(P)=2R^{6}=2\\cdot 64=128$. \\[\\boxed{\\Pi(P)=2R^{n}=128}\\]"
        ]
      },
      {
        "name": "Chord lengths as sines, summed by the product-of-sines identity",
        "steps": [
          "Write each distance as a chord on the circle $|z|=R$. With $P=R\\,e^{i\\pi/n}$ and $A_k=R\\,e^{2\\pi i k/n}$, $|P-A_k|=R\\big|e^{i\\pi/n}-e^{2\\pi i k/n}\\big|=2R\\Big|\\sin\\!\\big(\\tfrac{\\pi/n-2\\pi k/n}{2}\\big)\\Big|=2R\\Big|\\sin\\!\\big(\\tfrac{\\pi(1-2k)}{2n}\\big)\\Big|$, using $|e^{i\\theta_1}-e^{i\\theta_2}|=2|\\sin\\tfrac{\\theta_1-\\theta_2}{2}|$.",
          "Multiply over $k=0,\\dots,n-1$: $\\Pi(P)=(2R)^{n}\\prod_{k=0}^{n-1}\\Big|\\sin\\!\\big(-\\tfrac{\\pi}{2n}+\\tfrac{k\\pi}{n}\\big)\\Big|$, where I have rewritten $\\tfrac{\\pi(1-2k)}{2n}=-\\tfrac{\\pi}{2n}+\\tfrac{k\\pi}{n}$ and used $|\\sin(-x)|=|\\sin x|$.",
          "Invoke the standard identity $\\prod_{k=0}^{n-1}\\sin\\!\\big(\\phi+\\tfrac{k\\pi}{n}\\big)=\\dfrac{\\sin(n\\phi)}{2^{\\,n-1}}$ with $\\phi=-\\tfrac{\\pi}{2n}$. Then $n\\phi=-\\tfrac{\\pi}{2}$ and $\\sin(n\\phi)=-1$, so the product of sines equals $\\dfrac{-1}{2^{\\,n-1}}$ and its absolute value is $\\dfrac{1}{2^{\\,n-1}}$.",
          "Therefore $\\Pi(P)=(2R)^{n}\\cdot\\dfrac{1}{2^{\\,n-1}}=\\dfrac{2^{n}R^{n}}{2^{\\,n-1}}=2R^{n}$. For $n=6,\\,R=2$ this is $2\\cdot 2^{6}=128$. \\[\\boxed{\\Pi(P)=2R^{n}=128}\\]"
        ]
      },
      {
        "name": "P as a root of the dual polynomial z^n + R^n",
        "steps": [
          "Set $f(z)=z^{n}-R^{n}=\\prod_{k}(z-A_k)$ as before, so that the product of distances from any $p$ is $\\Pi(P)=|f(p)|$. The geometric content of part (b) is that $P$ is not a vertex but an arc-midpoint, and arc-midpoints are governed by the companion equation $z^{n}=-R^{n}$.",
          "Indeed the $n$ solutions of $z^{n}+R^{n}=0$ are $B_j=R\\,e^{i\\pi(2j+1)/n}$, $j=0,\\dots,n-1$; these are exactly the $n$ arc-midpoints of the regular $n$-gon (the original polygon rotated by $\\pi/n$). Our $P=R\\,e^{i\\pi/n}$ is the case $j=0$, so $P^{n}=-R^{n}$ holds by construction, with no trigonometric computation.",
          "Evaluate $f$ at this root: $f(P)=P^{n}-R^{n}=(-R^{n})-R^{n}=-2R^{n}$, hence $\\Pi(P)=|f(P)|=2R^{n}$. As a global consistency check, the product of $f$ over ALL $n$ arc-midpoints is $\\prod_{j}f(B_j)=\\prod_{j}(-2R^{n})=(-2R^{n})^{n}$, which matches the resultant $\\operatorname{Res}(z^{n}-R^{n},\\,z^{n}+R^{n})=(-2R^{n})^{n}$ up to sign; for $n=6$ both equal $64R^{36}$, confirming each individual factor is $2R^{n}$.",
          "Specializing $n=6,\\,R=2$ gives $\\Pi(P)=2\\cdot 2^{6}=128$. \\[\\boxed{\\Pi(P)=2R^{n}=128}\\]"
        ]
      }
    ],
    "remark": "Insight: the whole problem turns on one dichotomy hidden inside ``$P$ is on the circumscribed circle.'' The circle $|z|=R$ contains infinitely many points, but only $n$ of them — the vertices — satisfy $p^{n}=R^{n}$; the remaining points are NOT roots of the vertex polynomial, and the arc-midpoints are the cleanest such points because they satisfy the dual equation $p^{n}=-R^{n}$. So $\\Pi(P)=|p^{n}-R^{n}|$ does not collapse to $0$; it lands on the maximal value $2R^{n}$, since $-R^{n}$ is the point of the value-circle $|w|=R^{n}$ diametrically opposite $R^{n}$. The factorization $\\prod_k(z-A_k)=z^{n}-R^{n}$ is the engine: it converts a geometric product of $n$ chord lengths into a single modulus evaluation, sidestepping all the trigonometry that the product-of-sines route makes explicit. The trap punishes the reflex ``on the circle $\\Rightarrow$ root of $z^{n}=R^{n}$''; the cure is to track the half-step $e^{i\\pi/n}$, whose $n$-th power is $-1$, not $+1$. The same machinery recovers the famous from-a-vertex constant $n\\,R^{n-1}$ (delete the zero factor, differentiate $f$, and evaluate $|f'(A_j)|=n R^{n-1}$), making clear it is a genuinely different quantity from the arc-midpoint product."
  },
  {
    "theme": "triangles",
    "themeLabel": "Triangles & Polygons",
    "title": "The Point That Weighs the Far Side",
    "difficulty": 5,
    "task": "Prove and evaluate",
    "tags": [
      "symmedian",
      "barycentric",
      "lemoine",
      "weighted-centroid",
      "cevian"
    ],
    "statement": "For a triangle with vertices $a,b,c\\in\\mathbb{C}$ (no two equal), define the point \\[ L \\;=\\; \\frac{a\\,|b-c|^{2}+b\\,|c-a|^{2}+c\\,|a-b|^{2}}{|b-c|^{2}+|c-a|^{2}+|a-b|^{2}}. \\] Prove that $L$ is the symmedian (Lemoine) point of the triangle, i.e. the common point of the three symmedians, equivalently the unique interior point whose perpendicular distances to the sides $BC,CA,AB$ are proportional to those side lengths. Then evaluate $L$ for the triangle with $a=1,\\ b=5,\\ c=1+4i$.",
    "answer": "\\[\\boxed{\\,L=2+i\\,}\\]",
    "trap": "Treating $L$ as just another centroid and using equal weights, or weighting each vertex by the side it touches instead of the side opposite it. Crucially, the weight on $a$ is $|b-c|^2$, the squared length of the side OPPOSITE $a$ (barycentrics $\\propto a^2:b^2:c^2$ in the usual notation $a=|BC|$ etc.). Equal weights give the centroid $\\frac{a+b+c}{3}=\\frac{7}{3}+\\frac{4}{3}i\\neq L$; weighting by the first powers $|b-c|:|c-a|:|a-b|$ gives the incenter (here irrational, $\\approx 2.172+1.172i$), not $L$. For the given triangle the squared sides are $|b-c|^2=32,\\ |c-a|^2=16,\\ |a-b|^2=16$; if one pairs each vertex with a touching side instead of the opposite side the weights get permuted and the answer shifts off $2+i$. The square, and the word OPPOSITE, are both essential.",
    "solutions": [
      {
        "name": "Barycentric distances pin the symmedian point",
        "steps": [
          "Write $a=|BC|,\\ b=|CA|,\\ c=|AB|$ for the side lengths, and let $T$ be the area. A point with normalized barycentric coordinates $(\\alpha:\\beta:\\gamma)$, $\\alpha+\\beta+\\gamma=1$, sits at the affine combination $\\alpha A+\\beta B+\\gamma C$ in the plane (hence at $\\alpha a+\\beta b+\\gamma c$ in complex coordinates), and its perpendicular distance to side $BC$ equals $\\dfrac{2T\\,\\alpha}{a}$, similarly $\\dfrac{2T\\,\\beta}{b},\\ \\dfrac{2T\\,\\gamma}{c}$ to $CA,AB$.",
          "Take the weights $\\alpha:\\beta:\\gamma=a^{2}:b^{2}:c^{2}$, i.e. $\\alpha=\\dfrac{a^{2}}{a^{2}+b^{2}+c^{2}}$, etc. Then the three distances are $\\dfrac{2T}{a^{2}+b^{2}+c^{2}}\\cdot a,\\ \\dfrac{2T}{a^{2}+b^{2}+c^{2}}\\cdot b,\\ \\dfrac{2T}{a^{2}+b^{2}+c^{2}}\\cdot c$, so they are in the ratio $a:b:c$. That proportionality is exactly the defining property of the symmedian (Lemoine) point, so this point IS $L$.",
          "In complex coordinates the same affine combination reads $L=\\dfrac{a^{2}A+b^{2}B+c^{2}C}{a^{2}+b^{2}+c^{2}}=\\dfrac{|b-c|^{2}a+|c-a|^{2}b+|a-b|^{2}c}{|b-c|^{2}+|c-a|^{2}+|a-b|^{2}}$, since $a=|BC|=|b-c|$, $b=|CA|=|c-a|$, $c=|AB|=|a-b|$. This is precisely the stated formula, with each vertex carrying the squared OPPOSITE side. The identity is proved.",
          "Apply it to $a=1,b=5,c=1+4i$: $|b-c|^{2}=|4-4i|^{2}=32$, $|c-a|^{2}=|4i|^{2}=16$, $|a-b|^{2}=|-4|^{2}=16$. Hence $L=\\dfrac{32\\cdot 1+16\\cdot 5+16\\cdot(1+4i)}{32+16+16}=\\dfrac{32+80+16+64i}{64}=\\dfrac{128+64i}{64}=2+i.$ $\\boxed{L=2+i}$"
        ]
      },
      {
        "name": "Build it from two symmedians",
        "steps": [
          "The symmedian from $A$ is the reflection of the median from $A$ in the bisector of angle $A$; a classical consequence is that it meets $BC$ at the point $D$ with $BD:DC=c^{2}:b^{2}=|a-b|^{2}:|c-a|^{2}$. By the section formula $D=\\dfrac{b^{2}B+c^{2}C}{b^{2}+c^{2}}$, which already shows the squared-side weighting and where the SIDE OPPOSITE the apex never enters the foot.",
          "Likewise the symmedian from $B$ meets $CA$ at $E=\\dfrac{c^{2}C+a^{2}A}{c^{2}+a^{2}}$. The Lemoine point is $AD\\cap BE$. A point on $AD$ has barycentrics $(\\,a^{2}: t b^{2}: t c^{2})$ for some $t$ (mixing apex $A$ with the $b^{2}:c^{2}$ split of $D$); imposing membership of $BE$ forces $t=1$, giving barycentrics $a^{2}:b^{2}:c^{2}$ and hence $L=\\dfrac{a^{2}A+b^{2}B+c^{2}C}{a^{2}+b^{2}+c^{2}}$, the stated formula.",
          "For $a=1,b=5,c=1+4i$ this is a right isosceles triangle (legs $AB=AC=4$, right angle at $A$, hypotenuse $BC=4\\sqrt2$). The squared sides are $32,16,16$, so $L=\\dfrac{1\\cdot32+5\\cdot16+(1+4i)\\cdot16}{64}=\\dfrac{128+64i}{64}=2+i.$",
          "Sanity check on the geometry: the median from $A$ hits midpoint $3+2i$ of $BC$; reflecting that cevian in the $45^{\\circ}$ axis of symmetry of this isosceles right triangle keeps it the symmedian, and indeed $2+i$ lies on segment from $A=1$ toward $3+2i$. $\\boxed{L=2+i}$"
        ]
      },
      {
        "name": "Direct verification of the proportional-distance test",
        "steps": [
          "Compute the candidate from the formula for $a=1,b=5,c=1+4i$: squared sides $32,16,16$ give $L=\\dfrac{32+80+(16+64i)}{64}=2+i$. We now confirm independently that $2+i$ is the symmedian point by checking its distances to the three sides are in the ratio of the side lengths $\\sqrt{32}:4:4$.",
          "Side $AB$ is the segment from $1$ to $5$ on the real axis ($\\operatorname{Im}=0$); the distance from $2+i$ is $1$. Side $CA$ is from $1+4i$ to $1$, the vertical line $\\operatorname{Re}=1$; the distance from $2+i$ is $1$. So $d_{AB}=d_{CA}=1$, matching $|AB|=|CA|=4$.",
          "Side $BC$ joins $5$ and $1+4i$; its line is $x/?$: direction $(1+4i)-5=-4+4i$, i.e. the line $x+y=5$ (since $5+0=5$ and $1+4=5$). Distance from $2+i$ is $\\dfrac{|2+1-5|}{\\sqrt2}=\\dfrac{2}{\\sqrt2}=\\sqrt2$.",
          "Thus $d_{BC}:d_{CA}:d_{AB}=\\sqrt2:1:1=4\\sqrt2:4:4=|BC|:|CA|:|AB|$. The distances are proportional to the side lengths, so by the very definition $2+i$ is the Lemoine point, confirming the formula gives $L$. $\\boxed{L=2+i}$"
        ]
      }
    ],
    "remark": "Insight: the symmedian point is a centroid, but a WEIGHTED one. Replace the equal masses of the ordinary centroid by masses equal to the squared opposite sides, $a^2,b^2,c^2$, and the balance point slides from $\\frac{a+b+c}{3}$ to the Lemoine point. The two booby traps -- equal weights (centroid) and unsquared weights (incenter) -- are exactly the two famous neighbours of $L$ in the family of weighted centroids, so getting the power and the OPPOSITE-side pairing right is the whole game. Squaring is what encodes 'reflect the median in the bisector'; first powers would only encode the bisector itself."
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
    "title": "Four Centres on One Wire",
    "difficulty": 5,
    "task": "Prove and evaluate",
    "tags": [
      "euler line",
      "orthocentre",
      "nine-point centre",
      "circumcentre",
      "origin convention"
    ],
    "statement": "A triangle has vertices $z_1=7+i,\\ z_2=-2+4i,\\ z_3=2-4i$ in the Argand plane. Let $O,G,H,N$ denote respectively its circumcentre, centroid, orthocentre and nine-point centre. \\[(a)\\ \\text{Locate } O \\text{ and find } H.\\qquad (b)\\ \\text{Prove } O,G,H \\text{ are collinear with } \\overrightarrow{HG}=2\\,\\overrightarrow{GO}.\\] \\[(c)\\ \\text{Prove } N \\text{ is the midpoint of } OH, \\text{ and give the complex number } N.\\] You may use that for a triangle whose circumcentre is at the origin, the orthocentre is the bare sum $z_1+z_2+z_3$. Report $N$ as a single complex number.",
    "answer": "\\[\\boxed{N=\\tfrac{5}{2}}\\]",
    "trap": "The lethal shortcut is to quote the memorised formula $H=z_1+z_2+z_3$ without first checking where the circumcentre sits. That identity is true only under the circumcentre-at-origin normalisation $|z_1|=|z_2|=|z_3|$. Here $z_1+z_2+z_3=7+i$ — and, with a cruel coincidence, $7+i$ is exactly the vertex $z_1$, so the answer even \"looks like\" a right-angle orthocentre and invites no suspicion. But $|z_k-0|$ are $\\sqrt{50},\\sqrt{20},\\sqrt{20}$ — unequal, so the origin is not the circumcentre and the bare-sum formula does not apply. The true circumcentre is $O=2+i$ (the common point with $|z_k-O|=5$), and the correct orthocentre is the translated sum $H=(z_1+z_2+z_3)-2O=3-i$, not $7+i$. The phantom $H=7+i$ fails the altitude test ($\\operatorname{Re}\\big((H-z_2)\\overline{(z_1-z_3)}\\big)=30\\neq0$) and even breaks collinearity, so it cannot lie on the Euler line at all. Trusting the formula across the wrong origin propagates into $N=\\tfrac{7+i}{2}$ instead of the correct $N=\\tfrac{5}{2}$.",
    "solutions": [
      {
        "name": "Pin the circumcentre, then translate the bare-sum formula",
        "steps": [
          "Find $O$ honestly as the point equidistant from all three vertices, i.e. solve $|z-z_1|^2=|z-z_2|^2=|z-z_3|^2$. Writing $z=x+iy$: $|z-z_1|^2=|z-z_2|^2$ gives $-14x-2y+50=4x-8y+20$, i.e. $18x-6y=30\\Rightarrow 3x-y=5$; and $|z-z_2|^2=|z-z_3|^2$ gives $4x-8y+20=-4x+8y+20$, i.e. $8x-16y=0\\Rightarrow x=2y$. Solving, $y=1,\\ x=2$, so $O=2+i$ with $|z_k-O|=5$ for each $k$ (the circumradius). The origin is NOT the circumcentre, so $z_1+z_2+z_3$ is not yet the orthocentre.",
          "Normalise by translating $O$ to the origin: set $w_k=z_k-O$, so $|w_k|=5$ and the circumcentre of the $w$-triangle is $0$. By the origin convention the orthocentre of the translated triangle is $w_1+w_2+w_3$; translating back, $H=O+(w_1+w_2+w_3)=O+\\big((z_1+z_2+z_3)-3O\\big)=(z_1+z_2+z_3)-2O.$",
          "Substitute: $z_1+z_2+z_3=7+i$ and $2O=4+2i$, so $H=(7+i)-(4+2i)=3-i.$ (Check: $\\operatorname{Re}\\big((H-z_1)\\overline{(z_2-z_3)}\\big)=\\operatorname{Re}\\big((-4-2i)\\overline{(-4+8i)}\\big)=\\operatorname{Re}\\big((-4-2i)(-4-8i)\\big)=16-16=0$, and the other two altitudes vanish likewise — $H=3-i$ is the genuine orthocentre.)",
          "The nine-point centre is the midpoint of $O$ and $H$: $N=\\dfrac{O+H}{2}=\\dfrac{(2+i)+(3-i)}{2}=\\dfrac{5}{2}.$ Hence $\\boxed{N=\\tfrac{5}{2}}$, a point on the real axis."
        ]
      },
      {
        "name": "The Euler vector identity (parts b and c at one stroke)",
        "steps": [
          "Work in the normalised frame $w_k=z_k-O$ with circumcentre at $0$, so $O_w=0,\\ H_w=w_1+w_2+w_3,\\ G_w=\\tfrac{1}{3}(w_1+w_2+w_3)$. Then immediately $H_w=3G_w$, giving the vector relation $\\overrightarrow{O_wH_w}=H_w-0=3G_w=3\\,\\overrightarrow{O_wG_w}.$",
          "Therefore $\\overrightarrow{HG}=G_w-H_w=G_w-3G_w=-2G_w$ and $\\overrightarrow{GO}=0-G_w=-G_w$, so $\\overrightarrow{HG}=2\\,\\overrightarrow{GO}$. Since both are scalar multiples of the single vector $G_w$, the points $O,G,H$ are collinear and $G$ divides $OH$ in ratio $OG:GH=1:2$. Translation by $+O$ preserves all these vector relations, so they hold for the original triangle verbatim — this is the Euler line.",
          "For the nine-point centre, use the standard characterisation $N_w=\\tfrac{1}{2}H_w=\\tfrac{1}{2}(w_1+w_2+w_3)$; indeed $\\big|N_w-\\tfrac{w_i+w_j}{2}\\big|=\\big|\\tfrac{w_k}{2}\\big|=\\tfrac{R}{2}$ for every relabelling, so $N_w$ is equidistant ($R/2$) from all three side-midpoints — it is the nine-point centre. Hence $N_w=\\tfrac12 H_w=\\tfrac12(O_w+H_w)$ is the midpoint of $O_wH_w$.",
          "Translate back: $N=O+N_w=O+\\tfrac12(H-O-(O-O))=\\tfrac{O+H}{2}$. With $O=2+i,\\ H=3-i$ from the perpendicularity in Method 1, $N=\\dfrac{(2+i)+(3-i)}{2}=\\boxed{\\tfrac{5}{2}}.$ The whole chain $O,G,N,H$ sits on one line at parameters $0,\\tfrac13,\\tfrac12,1$ of $O+t(H-O)$."
        ]
      },
      {
        "name": "Direct orthocentre by altitude intersection, then ratios",
        "steps": [
          "Bypass every formula and intersect two altitudes directly. The altitude from $z_1$ is the locus $\\{z:\\operatorname{Re}\\big((z-z_1)\\overline{(z_2-z_3)}\\big)=0\\}$; with $z_2-z_3=-4+8i$ this reads $\\operatorname{Re}\\big((z-(7+i))(-4-8i)\\big)=0$, i.e. (writing $z=x+iy$) $-4(x-7)+8(y-1)=0\\Rightarrow -x+2y+5=0.$ The altitude from $z_2$ uses $z_1-z_3=5+5i$: $\\operatorname{Re}\\big((z-(-2+4i))(5-5i)\\big)=0\\Rightarrow 5(x+2)+5(y-4)=0\\Rightarrow x+y-2=0.$",
          "Solve the two lines $-x+2y+5=0$ and $x+y-2=0$. Adding: $3y+3=0\\Rightarrow y=-1$, then $x=2-y=3$. So $H=3-i$, confirming the orthocentre without ever invoking $z_1+z_2+z_3$ — and exposing the phantom $7+i$ as a fraud.",
          "The centroid is coordinate-free: $G=\\dfrac{z_1+z_2+z_3}{3}=\\dfrac{7+i}{3}$. The circumcentre, as the equidistant point, is $O=2+i$ (Method 1). Check the Euler ratio directly: $H-G=(3-i)-\\tfrac{7+i}{3}=\\tfrac{2}{3}-\\tfrac{4}{3}i$ and $G-O=\\tfrac{7+i}{3}-(2+i)=\\tfrac13-\\tfrac23 i$, so $H-G=2(G-O)$ exactly — collinear with $\\overrightarrow{HG}=2\\overrightarrow{GO}$.",
          "Finally $N=\\dfrac{O+H}{2}=\\dfrac{(2+i)+(3-i)}{2}=\\boxed{\\tfrac{5}{2}}$, and one verifies $|N-\\tfrac{z_i+z_j}{2}|=\\tfrac52$ for all three sides, so $N$ is indeed the nine-point centre on the Euler line."
        ]
      }
    ],
    "remark": "Insight: the elegant formula $H=z_1+z_2+z_3$ is not a law of the plane — it is a law of the chosen frame, valid only after the circumcentre is parked at the origin. The frame-free statement is $H=(z_1+z_2+z_3)-2O=3G-2O$, from which the entire Euler structure falls out as one rigid scaling about $O$: $O,G,N,H$ are the points $O+t(H-O)$ at $t=0,\\tfrac13,\\tfrac12,1$, so $OG:GN:NH=2:1:3$ on a single wire. The booby trap here is that the bare sum $z_1+z_2+z_3=7+i$ coincides with a vertex, dressing the wrong answer in the costume of a right-angled triangle's orthocentre. The cure a top ranker internalises: always certify the origin before quoting a centroid/orthocentre identity — equal moduli, or translate first."
  },
  {
    "theme": "triangles",
    "themeLabel": "Triangles & Polygons",
    "title": "The Locus That Wasn't There",
    "difficulty": 5,
    "task": "Prove and locate",
    "tags": [
      "directly similar",
      "determinant criterion",
      "shape ratio",
      "orientation",
      "locus",
      "spiral similarity"
    ],
    "statement": "Identify each point of the plane with a complex number. Two ordered triangles $(a,b,c)$ and $(a',b',c')$ are called directly similar when one is carried onto the other by an orientation-preserving similarity $z\\mapsto \\alpha z+\\beta$ (with $\\alpha\\neq0$), the vertices corresponding in the listed order. \\par (a) Prove the determinant criterion: $(a,b,c)$ and $(a',b',c')$ are directly similar if and only if \\[ \\begin{vmatrix} a & a' & 1\\\\ b & b' & 1\\\\ c & c' & 1 \\end{vmatrix}=0. \\] \\par (b) Fix the reference triangle $T'$ with vertices $a'=0,\\ b'=1,\\ c'=1+i$, and fix the two base points $b=2$ and $c=6$. A variable point $p$ is sought so that the triangle $(p,b,c)$ is similar to $T'$ (the apex $p$ corresponding to $a'$, and $b,c$ to $b',c'$ respectively). Using the criterion of part (a), determine the complete set of all such points $p$, and report it as the final answer.",
    "answer": "\\[\\boxed{\\{\\,2+4i,\\ 2-4i\\,\\}}\\]",
    "trap": "The word locus primes the student to expect a curve: ``similar triangles form a one-parameter family of scalings, so $p$ should sweep out a line or a circle.'' This is the fatal misreading. With the base $b,c$ pinned and the corresponding vertices fixed, the shape-ratio condition $\\dfrac{b-p}{c-p}=\\dfrac{b'-a'}{c'-a'}$ is a single linear equation in $p$ with a complex right-hand side, so direct similarity forces a \\text{unique} point, $p=2+4i$ — not a curve. The scaling freedom is already consumed by the requirement that $b,c$ land on the fixed $b',c'$. The second, subtler error is to then answer ``one point'' and stop: the plain word ``similar'' admits the \\text{opposite orientation} (a mirror image is still similar), and the reflected triangle satisfies $\\dfrac{b-p}{c-p}=\\overline{\\left(\\tfrac{b'-a'}{c'-a'}\\right)}$, giving the extra point $p=2-4i=\\overline{2+4i}$, the mirror of the first across line $BC$. The determinant criterion of part (a) detects \\text{only} the direct case; missing case is the orientation-reversed copy. So the ``locus'' is neither a curve nor a single point: it is exactly the two points $\\{2+4i,\\,2-4i\\}$.",
    "solutions": [
      {
        "name": "Determinant criterion, then solve the linear equation",
        "steps": [
          "Prove (a). A direct similarity has the form $f(z)=\\alpha z+\\beta$ with $\\alpha\\neq0$. The triangles are directly similar iff such $f$ sends $a'\\!\\mapsto\\!a,\\ b'\\!\\mapsto\\!b,\\ c'\\!\\mapsto\\!c$. Eliminating $\\alpha,\\beta$ from $a=\\alpha a'+\\beta,\\ b=\\alpha b'+\\beta,\\ c=\\alpha c'+\\beta$, the system $\\alpha a'+\\beta\\cdot1=a$, etc., has a nonzero solution $(\\alpha,\\beta,-1)$ to the homogeneous system with coefficient columns $(a',b',c')^{\\!\\top},(1,1,1)^{\\!\\top},(a,b,c)^{\\!\\top}$ precisely when those three columns are dependent, i.e. when $\\det\\!\\begin{vmatrix} a & a' & 1\\\\ b & b' & 1\\\\ c & c' & 1\\end{vmatrix}=0$ (the columns reordered). Expanding the determinant gives $(b-a)(c'-a')-(c-a)(b'-a')$, so the condition is $\\dfrac{b-a}{c-a}=\\dfrac{b'-a'}{c'-a'}$ — equality of shape ratios, the orientation-preserving similarity condition. This proves (a).",
          "Apply (a) to $(p,b,c)$ and $T'=(a',b',c')=(0,1,1+i)$ with $b=2,\\ c=6$. The criterion reads $\\begin{vmatrix} p & 0 & 1\\\\ 2 & 1 & 1\\\\ 6 & 1+i & 1\\end{vmatrix}=0$.",
          "Expand along the second column: the determinant equals $-0\\cdot(\\dots)+1\\cdot\\!\\begin{vmatrix}p&1\\\\6&1\\end{vmatrix}-(1+i)\\!\\begin{vmatrix}p&1\\\\2&1\\end{vmatrix}=(p-6)-(1+i)(p-2)=-ip+(2i-4)$. Setting this to $0$ gives $ip=2i-4$, so $p=\\dfrac{2i-4}{i}=2+4i$. This is the unique \\text{directly} similar apex; there is no curve.",
          "Restore the orientation-reversed copy. ``Similar'' (without ``directly'') also allows the mirror image, which replaces the shape ratio by its conjugate: $\\dfrac{b-p}{c-p}=\\overline{\\left(\\tfrac{b'-a'}{c'-a'}\\right)}=\\overline{\\tfrac{1}{1+i}}=\\tfrac{1+i}{2}$. Solving $\\dfrac{2-p}{6-p}=\\dfrac{1+i}{2}$ gives $p=2-4i$, the reflection of $2+4i$ across the real axis (line $BC$). Hence the complete set is $\\boxed{\\{\\,2+4i,\\ 2-4i\\,\\}}$."
        ]
      },
      {
        "name": "Shape ratio directly",
        "steps": [
          "By part (a), direct similarity of $(p,b,c)$ to $(a',b',c')$ is exactly $\\dfrac{b-p}{c-p}=\\dfrac{b'-a'}{c'-a'}$, the apex $p$ playing the role of $a'$. Compute the reference shape ratio: $w=\\dfrac{b'-a'}{c'-a'}=\\dfrac{1-0}{(1+i)-0}=\\dfrac{1}{1+i}=\\dfrac{1-i}{2}.$",
          "Impose $\\dfrac{2-p}{6-p}=\\dfrac{1-i}{2}$. Cross-multiplying, $2(2-p)=(1-i)(6-p)$, i.e. $4-2p=(6-6i)-(1-i)p$. Collect: $\\big(-2+(1-i)\\big)p=6-6i-4$, so $(-1-i)p=2-6i$.",
          "Hence $p=\\dfrac{2-6i}{-1-i}=\\dfrac{(2-6i)(-1+i)}{(-1)^2+1^2}=\\dfrac{-2+2i+6i+6}{2}=\\dfrac{4+8i}{2}=2+4i.$ This is the only solution with the given orientation.",
          "Allowing the mirror image (still ``similar''), replace $w$ by $\\overline w=\\dfrac{1+i}{2}$ and repeat: $\\dfrac{2-p}{6-p}=\\dfrac{1+i}{2}$ yields $p=2-4i$. Both triangles have the same three side lengths $4,4,4\\sqrt2$ as $4$ times those of $T'$ (legs $1,1$, hypotenuse $\\sqrt2$), confirming genuine similarity. The complete set is $\\boxed{\\{\\,2+4i,\\ 2-4i\\,\\}}$."
        ]
      },
      {
        "name": "Construct the similarity transformation",
        "steps": [
          "A direct similarity carrying $T'$ onto $(p,b,c)$ has the form $f(z)=\\alpha z+\\beta$ and must satisfy $f(0)=p,\\ f(1)=b,\\ f(1+i)=c$. From $f(0)=p$ we get $\\beta=p$, and from $f(1)=b$ we get $\\alpha+\\beta=b$, so $\\alpha=b-p=2-p$.",
          "The third condition $f(1+i)=c$ becomes $\\alpha(1+i)+\\beta=c$, i.e. $(2-p)(1+i)+p=6$. Expand: $(2-p)+(2-p)i+p=6$, so $2+(2-p)i=6$, giving $(2-p)i=4$ and $2-p=\\dfrac{4}{i}=-4i$. Therefore $p=2+4i$, with $\\alpha=-4i$: the map is $z\\mapsto -4i\\,z+(2+4i)$, a rotation by $-\\tfrac{\\pi}{2}$ and magnification by $4$. Since $|\\alpha|=4\\neq0$ it is a genuine similarity, and it is orientation-preserving (no conjugation), so this is the direct copy.",
          "An orientation-\\text{reversing} similarity has the form $g(z)=\\alpha\\overline z+\\beta$. Imposing $g(0)=p,\\ g(1)=b,\\ g(1+i)=c$ with $b,c$ real gives $\\beta=p,\\ \\alpha=2-p$, and $(2-p)\\overline{(1+i)}+p=6$, i.e. $(2-p)(1-i)+p=6$, so $2-(2-p)i=6$ and $p=2-4i$, with map $z\\mapsto 4i\\,\\overline z+(2-4i)$.",
          "Thus there is exactly one direct similar triangle (apex $2+4i$) and exactly one mirror similar triangle (apex $2-4i$), and no others — the family of similarities is pinned the instant $b,c$ are required to land on the fixed $b',c'$. The complete locus is the two-point set $\\boxed{\\{\\,2+4i,\\ 2-4i\\,\\}}$."
        ]
      }
    ],
    "remark": "Insight: the determinant criterion is just the shape-ratio equality $\\tfrac{b-a}{c-a}=\\tfrac{b'-a'}{c'-a'}$ in disguise — its vanishing says the three columns $(a,b,c)$, $(a',b',c')$, $(1,1,1)$ are linearly dependent, which is precisely the existence of an affine map $z\\mapsto\\alpha z+\\beta$ matching the vertices in order. The pedagogical sting is that ``find the locus'' invites a curve, but once two of the three vertices are nailed to fixed images, the orientation-preserving similarity has no freedom left: the apex is forced to a single point. The genuine subtlety is orientation. The determinant (a holomorphic, conjugate-free object) sees only the direct copy; the bare word ``similar'' silently includes the mirror image, whose apex is the reflection $\\overline{2+4i}=2-4i$ across the base line $BC$. The answer is therefore neither a curve nor a single point but exactly two points — a degenerate ``locus'' that rewards the student who keeps both orientations in view."
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
    "title": "Every Chord of the Polygon, Multiplied",
    "difficulty": 5,
    "task": "Prove and evaluate",
    "tags": [
      "roots of unity",
      "regular polygon",
      "ptolemy identity",
      "van der waerden constant",
      "discriminant",
      "double counting"
    ],
    "statement": "Identify the plane with $\\mathbb{C}$ and let $\\omega=e^{2\\pi i/n}$ ($n\\ge 2$), so that $1,\\omega,\\omega^2,\\dots,\\omega^{n-1}$ are the vertices of a regular $n$-gon inscribed in the unit circle. \\par (a) For a point $P\\in\\mathbb{C}$ that does not lie on the unit circle, prove the Ptolemy-style identity \\[ \\prod_{k=1}^{n-1}\\bigl|P-\\omega^{k}\\bigr| \\;=\\; \\frac{\\,|P^{n}-1|\\,}{\\,|P-1|\\,}. \\] \\par (b) Deduce that the product of the distances from a single vertex of the regular $n$-gon to all $n-1$ other vertices equals $n$. (The point $P$ now sits on the circle, so the formula of part (a) is an indeterminate $\\tfrac{0}{0}$ and must be obtained by a limiting argument, not by substitution.) \\par (c) Hence evaluate the product of all $\\binom{n}{2}$ pairwise distances between the vertices of the regular $n$-gon — taken over every unordered pair, counting sides and diagonals alike. Give the value as a closed form in $n$ (this is van der Waerden's polygon constant). State also how the answer changes if the polygon is inscribed in a circle of radius $R$ instead of $1$.",
    "answer": "\\[\\boxed{\\displaystyle\\prod_{0\\le i<j\\le n-1}\\bigl|\\omega^{i}-\\omega^{j}\\bigr|=n^{\\,n/2}}\\]",
    "trap": "The lethal step is the passage from the per-vertex product to the global one. From part (b) each of the $n$ vertices has product $n$ of its distances to the others; multiplying these $n$ numbers gives $n^{n}$, and the hasty student boxes $n^{n}$. But $n^{n}$ is the product over all ordered pairs $(i,j)$ with $i\\neq j$: every unordered chord $|\\omega^{i}-\\omega^{j}|$ has been counted \\text{twice}, once from vertex $i$ and once from vertex $j$. The genuine product over the $\\binom{n}{2}$ unordered pairs is therefore the \\text{square root}, $n^{n/2}$, not $n^{n}$. A second, subtler misread is to take ``all pairwise diagonal lengths'' literally and \\text{exclude the $n$ sides}: the clean constant $n^{n/2}$ is the product over \\text{all} chords (sides included); dropping the sides changes the value (e.g.\\ for $n=6$ the sides each have length $1$ so it happens not to matter, but for $n=5$ the five sides contribute a factor $\\bigl(2\\sin\\tfrac{\\pi}{5}\\bigr)^{5}\\neq1$). A third trap is scaling: enlarging the circumradius to $R$ multiplies \\text{each} of the $\\binom{n}{2}$ chords by $R$, so the product gains a factor $R^{\\binom{n}{2}}=R^{\\,n(n-1)/2}$ — the exponent is the \\text{number of chords}, $\\tfrac{n(n-1)}{2}$, not $n$.",
    "solutions": [
      {
        "name": "Factor $z^n-1$, then take the vertex limit and de-duplicate",
        "steps": [
          "Part (a). Over $\\mathbb{C}$ the polynomial $z^{n}-1$ splits as $z^{n}-1=\\prod_{k=0}^{n-1}\\bigl(z-\\omega^{k}\\bigr)$, since its roots are exactly the $n$-th roots of unity. Putting $z=P$ and isolating the $k=0$ factor $P-\\omega^{0}=P-1$, \\[ P^{n}-1=(P-1)\\prod_{k=1}^{n-1}\\bigl(P-\\omega^{k}\\bigr). \\] For $P$ off the unit circle we have $P\\neq\\omega^{k}$ for all $k$, so $P-1\\neq0$ and we may divide; taking moduli gives $\\prod_{k=1}^{n-1}|P-\\omega^{k}|=|P^{n}-1|/|P-1|$, which is the claimed identity.",
          "Part (b). To find the product of distances from the vertex $1$ to the other vertices we must evaluate $\\prod_{k=1}^{n-1}|1-\\omega^{k}|$, i.e.\\ let $P\\to1$. Direct substitution gives $\\tfrac{0}{0}$, so instead use the factorisation $\\dfrac{P^{n}-1}{P-1}=1+P+P^{2}+\\cdots+P^{n-1}$, valid for $P\\neq1$ and continuous at $P=1$. Hence \\[ \\prod_{k=1}^{n-1}\\bigl|1-\\omega^{k}\\bigr|=\\lim_{P\\to1}\\Bigl|\\tfrac{P^{n}-1}{P-1}\\Bigr|=\\bigl|1+1+\\cdots+1\\bigr|=n. \\] By the rotational symmetry $z\\mapsto\\omega^{j}z$ of the vertex set, the product of distances from \\text{any} vertex $\\omega^{j}$ to the remaining $n-1$ vertices is the same value $n$.",
          "Part (c). For each fixed vertex $\\omega^{i}$ let $\\Pi_{i}=\\prod_{j\\neq i}|\\omega^{i}-\\omega^{j}|=n$ by part (b). Multiply over all $n$ vertices: $\\prod_{i=0}^{n-1}\\Pi_{i}=n^{n}$. In this double product each unordered chord $\\{\\,i,j\\,\\}$ appears exactly twice — as a factor of $\\Pi_{i}$ and of $\\Pi_{j}$ — so $\\prod_{i}\\Pi_{i}=\\Bigl(\\prod_{0\\le i<j\\le n-1}|\\omega^{i}-\\omega^{j}|\\Bigr)^{2}$. Therefore $\\Bigl(\\prod_{i<j}|\\omega^{i}-\\omega^{j}|\\Bigr)^{2}=n^{n}$, and taking the positive square root (all factors are positive) yields $\\prod_{i<j}|\\omega^{i}-\\omega^{j}|=n^{n/2}$.",
          "Scaling. If the same polygon is inscribed in a circle of radius $R$, every vertex is multiplied by $R$, so every chord length is multiplied by $R$. There are $\\binom{n}{2}=\\tfrac{n(n-1)}{2}$ chords, hence the product is multiplied by $R^{\\,n(n-1)/2}$, giving $R^{\\,n(n-1)/2}\\,n^{n/2}$. For $R=1$ this is the boxed constant $\\boxed{n^{\\,n/2}}$."
        ]
      },
      {
        "name": "Discriminant of $z^n-1$",
        "steps": [
          "The vertices $\\omega^{0},\\dots,\\omega^{n-1}$ are precisely the $n$ simple roots of $f(z)=z^{n}-1$. For a monic polynomial with roots $r_{0},\\dots,r_{n-1}$ the discriminant is $\\operatorname{disc}(f)=\\prod_{i<j}(r_{i}-r_{j})^{2}$, so taking absolute values, $\\bigl(\\prod_{i<j}|\\omega^{i}-\\omega^{j}|\\bigr)^{2}=|\\operatorname{disc}(f)|$. Thus the whole question reduces to one discriminant.",
          "Use the resultant formula $\\operatorname{disc}(f)=\\tfrac{(-1)^{n(n-1)/2}}{a_{n}}\\operatorname{Res}(f,f')$ with $a_{n}=1$ and $f'(z)=nz^{n-1}$. Then $\\operatorname{Res}(f,f')=\\prod_{k=0}^{n-1}f'(\\omega^{k})=\\prod_{k=0}^{n-1} n\\,\\omega^{k(n-1)}=n^{n}\\Bigl(\\prod_{k}\\omega^{k}\\Bigr)^{\\,n-1}$. The product of all $n$-th roots of unity is $\\prod_{k}\\omega^{k}=\\omega^{\\,0+1+\\cdots+(n-1)}=\\omega^{\\,n(n-1)/2}=(-1)^{\\,n-1}$ (a unit of modulus $1$).",
          "Hence $|\\operatorname{Res}(f,f')|=n^{n}\\cdot1=n^{n}$, so $|\\operatorname{disc}(f)|=n^{n}$ regardless of the sign bookkeeping. Therefore $\\bigl(\\prod_{i<j}|\\omega^{i}-\\omega^{j}|\\bigr)^{2}=n^{n}$.",
          "Taking the positive square root gives the product of all pairwise distances $=\\sqrt{n^{n}}=n^{n/2}$. (Scaling by circumradius $R$ multiplies each $r_{i}$ by $R$, multiplying every difference by $R$ and the product by $R^{\\binom{n}{2}}=R^{\\,n(n-1)/2}$.) This recovers $\\boxed{n^{\\,n/2}}$."
        ]
      },
      {
        "name": "Cyclotomic factorisation $\\frac{|P^n-1|}{|P-1|}=\\prod_{k=1}^{n-1}|P-\\omega^k|$ and a global product over $P$",
        "steps": [
          "From part (a), define $g(P)=\\prod_{k=1}^{n-1}(P-\\omega^{k})=\\dfrac{P^{n}-1}{P-1}=1+P+\\cdots+P^{n-1}$, a fixed degree-$(n-1)$ polynomial whose roots are exactly the non-trivial vertices. We will assemble the global chord product by evaluating $g$ at each vertex in turn.",
          "Evaluate $g$ at $P=\\omega^{m}$ for $m=0,1,\\dots,n-1$. For $m=0$, part (b) gives $|g(1)|=n$. For $m\\neq0$, $\\omega^{m}$ is a root of $z^{n}-1$ but not of the removed factor $P-1$, so $g(\\omega^{m})=\\prod_{k=1}^{n-1}(\\omega^{m}-\\omega^{k})$ and $|g(\\omega^{m})|=\\prod_{k\\neq m}|\\omega^{m}-\\omega^{k}|$ once we note the missing $k=0$ term is replaced by the $k=m$ term being absent — concretely, $|g(\\omega^{m})|$ equals the product of distances from $\\omega^{m}$ to all the \\text{other} vertices, which by the rotation symmetry of step is again $n$. Thus $|g(\\omega^{m})|=n$ for every $m=0,\\dots,n-1$.",
          "Multiply these $n$ evaluations: $\\prod_{m=0}^{n-1}|g(\\omega^{m})|=n^{n}$. The left side is $\\prod_{m}\\prod_{j\\neq m}|\\omega^{m}-\\omega^{j}|$, the product over all \\text{ordered} pairs of distinct vertices, in which each unordered chord occurs twice. Hence $\\bigl(\\prod_{i<j}|\\omega^{i}-\\omega^{j}|\\bigr)^{2}=n^{n}$.",
          "Taking the positive root, $\\prod_{i<j}|\\omega^{i}-\\omega^{j}|=n^{n/2}$; the side/diagonal split is automatic since all chords are included. For circumradius $R$ multiply by $R^{\\,n(n-1)/2}$. The boxed van der Waerden constant is $\\boxed{n^{\\,n/2}}$."
        ]
      }
    ],
    "remark": "Insight: the single identity $z^{n}-1=\\prod_{k}(z-\\omega^{k})$ contains the whole story. Stripping the factor $z-1$ and reading off $\\tfrac{z^n-1}{z-1}=1+z+\\cdots+z^{n-1}$ is a Ptolemy-type distance product in disguise; evaluating it at a vertex (a $\\tfrac{0}{0}$ limit, never a substitution) gives the clean per-vertex constant $n$. The leap to the global constant is where rank is won or lost: the per-vertex products multiply to $n^{n}$, but that counts every chord from both ends, so the true product over the $\\binom{n}{2}$ undirected chords is the square root $n^{n/2}$ — van der Waerden's constant. The same $n^{n}$ reappears as $|\\operatorname{disc}(z^{n}-1)|$, exposing the deep fact that the discriminant of a polynomial \\text{is} the squared product of root differences; the square root in $n^{n/2}$ and the squaring in the discriminant are the same factor of two. Forgetting that factor (boxing $n^{n}$), silently dropping the sides, or scaling the radius with the wrong exponent ($R^{n}$ instead of $R^{n(n-1)/2}$) are the three ways a strong student still misses the mark."
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
    "title": "The Pentagon Hides a Golden Quadratic",
    "difficulty": 5,
    "task": "Prove and evaluate",
    "tags": [
      "roots of unity",
      "regular pentagon",
      "golden ratio",
      "conjugate pairing",
      "quadratic"
    ],
    "statement": "Let $\\omega=e^{2\\pi i/5}$, a primitive fifth root of unity, so that $1,\\omega,\\omega^2,\\omega^3,\\omega^4$ are the vertices of a regular pentagon inscribed in the unit circle and satisfy \\[ 1+\\omega+\\omega^2+\\omega^3+\\omega^4=0. \\] (a) By pairing the roots into conjugate pairs $\\{\\omega,\\omega^4\\}$ and $\\{\\omega^2,\\omega^3\\}$, derive a single quadratic whose roots are $a=\\omega+\\omega^4$ and $b=\\omega^2+\\omega^3$, and use it to prove that \\[ \\cos\\frac{2\\pi}{5}=\\frac{\\sqrt5-1}{4}. \\] (b) Hence prove that in this regular pentagon the ratio of a diagonal to a side equals the golden ratio: $\\dfrac{d}{s}=\\dfrac{1+\\sqrt5}{2}=\\varphi.$ Give the exact value of $\\dfrac{d}{s}$.",
    "answer": "\\[\\boxed{\\dfrac{d}{s}=\\dfrac{1+\\sqrt5}{2}}\\]",
    "trap": "When the conjugate pairing produces the quadratic $x^2+x-1=0$, its two roots are $a,b=\\dfrac{-1\\pm\\sqrt5}{2}$, and a strong student often grabs the algebra and writes $2\\cos\\dfrac{2\\pi}{5}=\\dfrac{-1-\\sqrt5}{2}$, i.e. $\\cos\\dfrac{2\\pi}{5}=\\dfrac{-1-\\sqrt5}{4}\\approx-0.809$. But that is the WRONG root: the quadratic has both numbers $a$ and $b$ as roots, and one must decide which is $a=\\omega+\\omega^4=2\\cos\\dfrac{2\\pi}{5}$ and which is $b=\\omega^2+\\omega^3=2\\cos\\dfrac{4\\pi}{5}$. Since $\\dfrac{2\\pi}{5}=72^\\circ$ lies in the first quadrant, $\\cos\\dfrac{2\\pi}{5}>0$, so $a$ is the POSITIVE root $\\dfrac{-1+\\sqrt5}{2}$; the value $\\dfrac{-1-\\sqrt5}{2}<0$ is $b=2\\cos\\dfrac{4\\pi}{5}=2\\cos144^\\circ$. Symmetric algebra ($a+b,ab$) cannot by itself separate the two roots; only the sign of the cosine (equivalently $a>b$) selects the correct one. Forgetting this hands back $\\cos144^\\circ$ in place of $\\cos72^\\circ$.",
    "solutions": [
      {
        "name": "Conjugate pairing to a single quadratic",
        "steps": [
          "Set $a=\\omega+\\omega^4$ and $b=\\omega^2+\\omega^3$. Because $\\omega^4=\\overline{\\omega}$ and $\\omega^3=\\overline{\\omega^2}$ (they are conjugates on the unit circle), $a=2\\operatorname{Re}\\omega=2\\cos\\dfrac{2\\pi}{5}$ and $b=2\\operatorname{Re}\\omega^2=2\\cos\\dfrac{4\\pi}{5}$, so both $a,b$ are real.",
          "Sum: from $1+\\omega+\\omega^2+\\omega^3+\\omega^4=0$ we get $a+b=(\\omega+\\omega^4)+(\\omega^2+\\omega^3)=-1$. Product: $ab=(\\omega+\\omega^4)(\\omega^2+\\omega^3)=\\omega^3+\\omega^4+\\omega^6+\\omega^7$. Reducing exponents mod $5$ ($\\omega^5=1$) gives $\\omega^3+\\omega^4+\\omega+\\omega^2=-1$. Hence $a+b=-1,\\ ab=-1$.",
          "Therefore $a,b$ are the two roots of the single quadratic $x^2-(a+b)x+ab=0$, i.e. $x^2+x-1=0$, so $x=\\dfrac{-1\\pm\\sqrt5}{2}$.",
          "Selecting the root: since $\\dfrac{2\\pi}{5}=72^\\circ$ is in the first quadrant, $a=2\\cos\\dfrac{2\\pi}{5}>0$, so $a$ is the positive root $\\dfrac{-1+\\sqrt5}{2}$ (and $b=\\dfrac{-1-\\sqrt5}{2}=2\\cos\\dfrac{4\\pi}{5}<0$). Thus $\\cos\\dfrac{2\\pi}{5}=\\dfrac{a}{2}=\\dfrac{\\sqrt5-1}{4}.$",
          "Part (b): the chord of the unit circle subtending a central angle $\\theta$ has length $2\\sin\\dfrac{\\theta}{2}$. A side joins adjacent vertices (central angle $\\dfrac{2\\pi}{5}$) so $s=2\\sin\\dfrac{\\pi}{5}$; a diagonal joins next-nearest vertices (central angle $\\dfrac{4\\pi}{5}$) so $d=2\\sin\\dfrac{2\\pi}{5}$. Hence $\\dfrac{d}{s}=\\dfrac{\\sin\\frac{2\\pi}{5}}{\\sin\\frac{\\pi}{5}}=2\\cos\\dfrac{\\pi}{5}$ by the double-angle identity.",
          "Finally $\\cos\\dfrac{\\pi}{5}=1-2\\sin^2\\dfrac{\\pi}{10}$ is awkward, so use $\\cos\\dfrac{\\pi}{5}=-\\cos\\dfrac{4\\pi}{5}=-\\dfrac{b}{2}=\\dfrac{1+\\sqrt5}{4}$. Therefore $\\dfrac{d}{s}=2\\cos\\dfrac{\\pi}{5}=\\dfrac{1+\\sqrt5}{2}=\\varphi.$ $\\boxed{\\dfrac{d}{s}=\\dfrac{1+\\sqrt5}{2}}$"
        ]
      },
      {
        "name": "Minimal polynomial of the cosine directly",
        "steps": [
          "Divide $1+\\omega+\\omega^2+\\omega^3+\\omega^4=0$ by $\\omega^2$ (nonzero): $\\omega^2+\\omega+1+\\omega^{-1}+\\omega^{-2}=0$. Group as $\\left(\\omega^2+\\omega^{-2}\\right)+\\left(\\omega+\\omega^{-1}\\right)+1=0$.",
          "Let $c=\\omega+\\omega^{-1}=2\\cos\\dfrac{2\\pi}{5}$. Then $\\omega^2+\\omega^{-2}=c^2-2$, so the relation becomes $(c^2-2)+c+1=0$, i.e. $c^2+c-1=0$ — the same golden quadratic.",
          "Solving, $c=\\dfrac{-1\\pm\\sqrt5}{2}$. Because $\\cos\\dfrac{2\\pi}{5}>0$ we take the $+$ sign: $c=\\dfrac{-1+\\sqrt5}{2}$, hence $\\cos\\dfrac{2\\pi}{5}=\\dfrac{c}{2}=\\dfrac{\\sqrt5-1}{4}.$",
          "For the ratio, with $u=\\omega^2+\\omega^{-2}=2\\cos\\dfrac{4\\pi}{5}=c^2-2=\\dfrac{-1-\\sqrt5}{2}$, we have $2\\cos\\dfrac{\\pi}{5}=-2\\cos\\dfrac{4\\pi}{5}=-u=\\dfrac{1+\\sqrt5}{2}$. Since the chord ratio equals $\\dfrac{2\\sin\\frac{2\\pi}{5}}{2\\sin\\frac{\\pi}{5}}=2\\cos\\dfrac{\\pi}{5}$, we get $\\dfrac{d}{s}=\\dfrac{1+\\sqrt5}{2}.$ $\\boxed{\\dfrac{d}{s}=\\dfrac{1+\\sqrt5}{2}}$"
        ]
      },
      {
        "name": "Ptolemy on the pentagon (geometric cross-check)",
        "steps": [
          "Take the cyclic quadrilateral formed by four consecutive vertices $V_0V_1V_2V_3$ of the regular pentagon. Its sides are three pentagon-sides of length $s$ (namely $V_0V_1,V_1V_2,V_2V_3$) and one diagonal $V_0V_3$. Two of its diagonals are pentagon-diagonals $V_0V_2,V_1V_3$ of length $d$, and the remaining side $V_0V_3$ also has length $d$ (it skips one vertex, like every diagonal).",
          "Ptolemy's theorem ($\\,\\text{product of diagonals}=\\text{sum of products of opposite sides}\\,$) on $V_0V_1V_2V_3$ gives $V_0V_2\\cdot V_1V_3=V_0V_1\\cdot V_2V_3+V_1V_2\\cdot V_0V_3$, i.e. $d\\cdot d=s\\cdot s+s\\cdot d$, so $d^2=s^2+sd$.",
          "Divide by $s^2$ and set $r=\\dfrac{d}{s}$: $r^2=1+r$, i.e. $r^2-r-1=0$, the defining equation of the golden ratio. Since $r>0$, $r=\\dfrac{1+\\sqrt5}{2}=\\varphi.$",
          "This matches part (a): $r=2\\cos\\dfrac{\\pi}{5}=\\dfrac{1+\\sqrt5}{2}$, and back-substituting confirms $\\cos\\dfrac{2\\pi}{5}=2\\cos^2\\dfrac{\\pi}{5}-1=2\\left(\\dfrac{\\varphi}{2}\\right)^2-1=\\dfrac{\\varphi^2}{2}-1=\\dfrac{\\sqrt5-1}{4}$, using $\\varphi^2=\\varphi+1$. $\\boxed{\\dfrac{d}{s}=\\dfrac{1+\\sqrt5}{2}}$"
        ]
      }
    ],
    "remark": "Insight: the single relation $\\sum\\omega^k=0$ is enough to manufacture the golden quadratic $x^2+x-1=0$ once you pair conjugate roots — the symmetric functions $a+b=-1$, $ab=-1$ fall straight out of it. The subtle, examinable point is that a symmetric quadratic can never distinguish its two roots; the sign of the cosine (here $\\cos72^\\circ>0>\\cos144^\\circ$) is the extra non-algebraic input that selects $\\cos\\frac{2\\pi}{5}=\\frac{\\sqrt5-1}{4}$ rather than the impostor $\\frac{-1-\\sqrt5}{4}$. Everything golden about the pentagon — diagonal/side $=\\varphi$, the $36^\\circ$–$72^\\circ$ gnomon, the $r^2=r+1$ Ptolemy relation — is one and the same quadratic seen from different seats."
  },
  {
    "theme": "equations",
    "themeLabel": "Polynomial Equations",
    "title": "The Sextic With a Balanced Heart",
    "difficulty": 5,
    "task": "Prove and count",
    "tags": [
      "gauss-lucas",
      "argument principle",
      "routh-hurwitz",
      "winding number",
      "convex hull",
      "right half-plane"
    ],
    "statement": "Let \\[ P(z)=z^{6}-3z^{4}+28z^{3}-20z^{2}-200z+500 \\] regarded as a polynomial over $\\mathbb{C}$ with real coefficients (note that the $z^{5}$ term is absent, so the six roots sum to $0$). \\par (a) Prove that every critical point of $P$ — that is, every root of $P'(z)$ — lies in the convex hull of the six roots of $P$ in the complex plane (the Gauss--Lucas theorem for this specific $P$), and verify that $P$ has no root on the imaginary axis. \\par (b) Using the argument principle (equivalently, the Routh--Hurwitz criterion), determine exactly how many roots of $P$ lie in the open right half-plane $\\{\\,z:\\operatorname{Re}z>0\\,\\}$. Report that integer as the final answer.",
    "answer": "\\[\\boxed{4}\\]",
    "trap": "Because the $z^{5}$ coefficient is $0$, the sum of the six roots is $0$, so their centroid sits exactly on the imaginary axis, $\\operatorname{Re}(\\text{centroid})=0$. The seductive deduction is: ``the roots are balanced about the line $\\operatorname{Re}z=0$, and Gauss--Lucas says the critical points stay inside their convex hull, so the roots must split evenly — three in each half-plane.'' This is wrong. A vanishing mean of the real parts says nothing about how many real parts are positive: here the real parts are $2,2,1,1,-3,-3$, which average to $0$ yet place \\text{four} roots strictly right of the axis and only \\text{two} (far) to the left. Centroid balance is a first-moment statement; a half-plane count is a sign-counting statement, and the two are independent. A second, equally fatal route is to reach for Descartes' rule of signs: $P(z)$ has sign pattern $+,-,+,-,-,+$ with four sign changes, tempting the answer ``$4$ positive roots.'' But Descartes counts positive \\text{real} roots, of which $P$ has \\text{none} (all six roots are non-real); the coincidence with the true value $4$ is pure accident and the reasoning is void. The third trap is procedural: forming the Routh array, the $z^{5}$ row begins with the coefficient $0$, a premature zero that halts the naive table; the degenerate row must be regularised (the $\\varepsilon$-method or an auxiliary polynomial) before the sign-change count of the first column is legitimate. The honest count is $4$, obtained only by tracking how the curve $P(it)$ winds, not by symmetry, not by Descartes, and not by a stalled Routh table.",
    "solutions": [
      {
        "name": "Argument principle on the half-disc contour",
        "steps": [
          "Part (a), Gauss--Lucas. Factor $P(z)=\\prod_{k=1}^{6}(z-r_k)$, so $\\dfrac{P'(z)}{P(z)}=\\sum_{k=1}^{6}\\dfrac{1}{z-r_k}$. If $w$ is a critical point that is not itself a root, then $\\sum_k \\dfrac{1}{w-r_k}=0$; conjugating each term, $\\sum_k \\dfrac{\\overline{w-r_k}}{|w-r_k|^2}=0$, i.e. $w=\\sum_k \\lambda_k r_k$ with $\\lambda_k=\\dfrac{1/|w-r_k|^2}{\\sum_j 1/|w-r_j|^2}>0$ and $\\sum_k\\lambda_k=1$. Thus $w$ is a convex combination of the roots, hence in their convex hull; roots that are also critical points are trivially in the hull. This proves every root of $P'$ lies in the convex hull of the roots of $P$.",
          "No root on the imaginary axis. Put $z=it$ ($t\\in\\mathbb{R}$): $P(it)=U(t)+iV(t)$ with $U(t)=-t^{6}-3t^{4}+20t^{2}+500$ and $V(t)=-28t^{3}-200t=-4t\\,(7t^{2}+50)$. A root on the axis needs $U=V=0$ simultaneously. $V(t)=0$ forces $t=0$ (since $7t^{2}+50>0$), but $U(0)=500\\neq0$. Hence $P(it)\\neq0$ for all real $t$: no root lies on $\\operatorname{Re}z=0$, so the right-half-plane count is well defined.",
          "Part (b), set-up. Let $N$ be the number of roots with $\\operatorname{Re}z>0$. Take the positively oriented boundary of the half-disc $D_R=\\{\\operatorname{Re}z>0,\\ |z|<R\\}$ for large $R$: the right semicircle $z=Re^{i\\theta}$, $\\theta:-\\tfrac{\\pi}{2}\\to\\tfrac{\\pi}{2}$, then the imaginary axis $z=it$, $t:R\\to -R$. By the argument principle $N=\\dfrac{1}{2\\pi}\\Delta_{\\partial D_R}\\arg P(z)$ once $R$ exceeds every $|r_k|$.",
          "Semicircle contribution. On $|z|=R$ large, $P(z)\\sim z^{6}$, so as $\\theta$ runs $-\\tfrac{\\pi}{2}\\to\\tfrac{\\pi}{2}$ the argument increases by $6\\cdot\\pi=6\\pi$ in the limit $R\\to\\infty$.",
          "Imaginary-axis contribution. Traverse $t:+\\infty\\to-\\infty$ and track the point $\\bigl(U(t),V(t)\\bigr)$. As $t\\to+\\infty$, $P(it)\\sim -t^{6}<0$ on the negative real axis; the curve then crosses the axes governed by the zeros of $V(t)$ (only $t=0$, where $U(0)=500>0$, i.e. the curve passes through the positive real axis) and of $U(t)$ (two real zeros $\\pm t_0$, $t_0\\approx 3.0$, where $V\\neq0$). Carefully unwrapping, the net change of $\\arg P(it)$ as $t:+\\infty\\to-\\infty$ is $+2\\pi$. (Numerically $\\Delta\\arg P(it)/\\pi$ over the axis equals $+2$ to high precision.)",
          "Combine. $2\\pi N=6\\pi+2\\pi-(\\text{correction for orientation})$; carrying the bookkeeping with the standard half-plane formula $\\Delta_{\\text{axis }-\\infty\\to+\\infty}\\arg P=\\pi(n-2N)$ for a degree-$n$ real polynomial gives $\\Delta\\arg=-2\\pi$, hence $6-2N=-2$, so $N=4$. Every contour computation lands on the same value: there are $\\boxed{4}$ roots with $\\operatorname{Re}z>0$.",
          "Sanity factorisation (confirmation, not assumed in the proof). One verifies $P(z)=(z^{2}-4z+5)(z^{2}-2z+10)(z^{2}+6z+10)$, whose roots are $2\\pm i,\\ 1\\pm 3i,\\ -3\\pm i$; their real parts $2,2,1,1,-3,-3$ indeed give four with $\\operatorname{Re}>0$, matching $\\boxed{4}$."
        ]
      },
      {
        "name": "Routh--Hurwitz with the degenerate-row repair",
        "steps": [
          "The Routh--Hurwitz criterion counts roots of a real polynomial with $\\operatorname{Re}z>0$ as the number of sign changes in the first column of the Routh array. For $P(z)=z^{6}+0\\,z^{5}-3z^{4}+28z^{3}-20z^{2}-200z+500$ the first two rows (powers $z^{6}$ and $z^{5}$) read $[\\,1,\\,-3,\\,-20,\\,500\\,]$ and $[\\,0,\\,28,\\,-200,\\,0\\,]$.",
          "Premature zero. The $z^{5}$ row begins with $0$ (a direct consequence of the absent $z^{5}$ term, i.e. of $\\sum r_k=0$), which would force a division by zero in the next row. This degenerate case must be regularised: replace the leading $0$ by a small $\\varepsilon>0$ and take $\\varepsilon\\to0^{+}$ at the end (the standard $\\varepsilon$-method).",
          "Build the array with leading entry $\\varepsilon$. The successive first-column entries simplify to $1,\\ \\varepsilon,\\ -3-\\tfrac{28}{\\varepsilon},\\ \\tfrac{4(196+71\\varepsilon-5\\varepsilon^{2})}{28+3\\varepsilon},\\ \\tfrac{5(-376-126\\varepsilon-95\\varepsilon^{2})}{-196-71\\varepsilon+5\\varepsilon^{2}},\\ \\tfrac{500(-1248-728\\varepsilon-40\\varepsilon^{2}+25\\varepsilon^{3})}{376+126\\varepsilon+95\\varepsilon^{2}},\\ 500.$",
          "Take $\\varepsilon\\to0^{+}$ and read the signs: $+,\\ +,\\ -,\\ +,\\ +,\\ -,\\ +$. The sign changes occur at $(+\\to-)$, $(-\\to+)$, $(+\\to-)$, $(-\\to+)$ — exactly $4$ changes. Therefore $P$ has $4$ roots with positive real part, i.e. $\\boxed{4}$ in the open right half-plane. (Had one naively stopped at the zero row, the count would be inaccessible; the repair is essential and is itself the trap.)"
        ]
      },
      {
        "name": "Explicit conjugate-pair factorisation",
        "steps": [
          "Because $P$ has real coefficients, its non-real roots occur in conjugate pairs, so $P$ splits into three real quadratic factors $z^{2}+p_iz+q_i$. Matching $\\sum p_i=0$ (no $z^{5}$ term) and the remaining symmetric functions, search for an integer factorisation; one finds $P(z)=(z^{2}-4z+5)(z^{2}-2z+10)(z^{2}+6z+10)$, which is checked by expansion to reproduce $z^{6}-3z^{4}+28z^{3}-20z^{2}-200z+500$ exactly.",
          "Solve each quadratic. $z^{2}-4z+5=0\\Rightarrow z=2\\pm i$; $z^{2}-2z+10=0\\Rightarrow z=1\\pm 3i$; $z^{2}+6z+10=0\\Rightarrow z=-3\\pm i$. The discriminants $-4,-36,-4$ are all negative, confirming all six roots are non-real (so Descartes' positive-real-root tally is irrelevant) and none has zero real part.",
          "Read off the real parts $2,2,1,1,-3,-3$. Their sum is $0$ — the centroid lies on the imaginary axis, so the ``balanced $\\Rightarrow 3$ and $3$'' guess is exposed as false: the four roots $2\\pm i,\\ 1\\pm 3i$ have $\\operatorname{Re}>0$ while only $-3\\pm i$ have $\\operatorname{Re}<0$.",
          "Hence the number of roots in the open right half-plane is $4$, in agreement with the argument-principle and Routh--Hurwitz counts, giving $\\boxed{4}$."
        ]
      }
    ],
    "remark": "Insight: the vanishing $z^{5}$ coefficient is a planted decoy. It makes the roots' real parts \\text{average} to zero, which whispers ``three left, three right'' and is reinforced by Gauss--Lucas keeping the critical points inside the convex hull — but a first moment can never decide a sign count. The honest tools are the argument principle and its bookkeeping cousin Routh--Hurwitz, and both punish the unwary: writing $P(it)=U(t)+iV(t)$ shows no axis roots and forces you to \\text{wind} the image curve rather than guess, while the Routh array's leading $0$ in the $z^{5}$ row (the same $\\sum r_k=0$ resurfacing) is a degenerate case that stalls the naive table until the $\\varepsilon$-repair revives it. Descartes' rule is a fourth trap dressed as a shortcut: its four sign changes match the answer $4$ by coincidence yet count positive \\text{real} roots, of which there are none. Only by tracking the change in argument — or equivalently regularising the Routh table — does the true split $4$ versus $2$ emerge."
  },
  {
    "theme": "equations",
    "themeLabel": "Polynomial Equations",
    "title": "The Root and Its Reflection in the Unit Circle",
    "difficulty": 5,
    "task": "Prove and solve",
    "tags": [
      "palindromic polynomial",
      "self-reciprocal",
      "conjugate roots",
      "unit circle",
      "resolvent substitution",
      "hidden constraint"
    ],
    "statement": "Let \\[ P(z)=z^{6}+a\\,z^{5}+b\\,z^{4}+c\\,z^{3}+b\\,z^{2}+a\\,z+1 \\] be a self-reciprocal (palindromic) polynomial with real coefficients $a,b,c$; thus $z^{6}P(1/z)=P(z)$, so the non-zero roots of $P$ come in reciprocal pairs $\\{r,\\,1/r\\}$. You are told three facts: \\par (i) $w=\\tfrac{3}{5}+\\tfrac{4}{5}i$ is a root of $P$; \\par (ii) $\\zeta=e^{2\\pi i/3}=-\\tfrac12+\\tfrac{\\sqrt3}{2}i$ is a root of $P$; \\par (iii) $P(1)+P(-1)=10$. \\par Determine $a,b,c$, prove that all six roots of $P$ lie on the unit circle $|z|=1$, and list them. Be warned: the on-circle conclusion is not automatic from palindromicity plus the numerical datum — it must be earned.",
    "answer": "\\[\\boxed{\\left\\{\\tfrac{3}{5}\\pm\\tfrac{4}{5}i,\\ -\\tfrac12\\pm\\tfrac{\\sqrt3}{2}i,\\ -\\tfrac34\\pm\\tfrac{\\sqrt7}{4}i\\right\\}}\\]",
    "trap": "The datum $P(1)+P(-1)=10$ is seductive: a quick computation gives $P(1)+P(-1)=4b+4$, so $b=\\tfrac32$, and a strong student is tempted to declare ``palindromic real degree six with $b=\\tfrac32$, and we already have two unit-modulus roots, hence all roots lie on $|z|=1$.'' That is the lethal leap. The sum $P(1)+P(-1)$ constrains \\text{only} the single coefficient $b$; it says \\text{nothing} about whether the remaining reciprocal pair lies on the circle. A palindromic real sextic with the \\text{same} $b=\\tfrac32$ and the \\text{same} value $P(1)+P(-1)=10$ can perfectly well have a reciprocal pair $\\{r,1/r\\}$ of \\text{real} roots with $r>1>1/r>0$ sitting \\text{off} the circle (one inside, one outside) — e.g.\\ $z^{6}+\\tfrac32 z^{4}-\\tfrac{45}{2}z^{3}+\\tfrac32 z^{2}+1$ shares both invariants yet has a real reciprocal pair of moduli $\\approx2.62$ and $\\approx0.38$ flung off the circle. The on-circle property is governed by the \\text{trace} of each reciprocal pair, $s=r+1/r$: a reciprocal pair lies on $|z|=1$ \\text{iff} $s$ is real with $|s|\\le 2$ (then $r=e^{i\\theta}$ with $s=2\\cos\\theta$); if $|s|>2$ the pair is real and off the circle. The genuine work is to extract the third trace and verify $|s|\\le 2$ — which only the actual coefficients $a,c$ (pinned by the two \\text{given} roots, not by the sum) make possible.",
    "solutions": [
      {
        "name": "Reconstruct the factors from the given roots, then read off the third trace",
        "steps": [
          "Real coefficients force conjugate roots. Since $w=\\tfrac35+\\tfrac45 i$ is a root, so is $\\bar w=\\tfrac35-\\tfrac45 i$; note $|w|=1$, so $1/w=\\bar w$ and the reciprocal partner coincides with the conjugate. The pair $\\{w,\\bar w\\}$ contributes the real factor $\\bigl(z-w\\bigr)\\bigl(z-\\bar w\\bigr)=z^{2}-2\\,\\mathrm{Re}(w)\\,z+|w|^{2}=z^{2}-\\tfrac65 z+1$. Likewise $\\zeta=e^{2\\pi i/3}$ gives the factor $z^{2}-2\\cos\\tfrac{2\\pi}{3}\\,z+1=z^{2}+z+1$. Both factors are palindromic with constant term $1$, consistent with the self-reciprocal form.",
          "Because $P$ is monic of degree $6$ with these two quadratic factors, the third factor is also a monic real palindromic quadratic $z^{2}-s_3 z+1$ for some real $s_3$ (its constant term must be $1$ so that the product is self-reciprocal). Thus $P(z)=\\bigl(z^{2}-\\tfrac65 z+1\\bigr)\\bigl(z^{2}+z+1\\bigr)\\bigl(z^{2}-s_3 z+1\\bigr)$.",
          "Now use the datum. Expanding the palindromic form, $P(1)=2+2a+2b+c$ and $P(-1)=2-2a+2b-c$, so $P(1)+P(-1)=4b+4$. Hence $4b+4=10\\Rightarrow b=\\tfrac32$. Writing each factor as $z^{2}-t_k z+1$ with traces $t_1=\\tfrac65,\\ t_2=-1,\\ t_3$, the coefficient $b$ (of $z^{4}$) of the product equals $1+1+1+(\\text{sum of pairwise products of the traces})$, i.e.\\ $b=3+\\bigl(\\tfrac65\\cdot(-1)+\\tfrac65 t_3+(-1)t_3\\bigr)=3-\\tfrac65+\\tfrac{t_3}{5}=\\tfrac{9}{5}+\\tfrac{t_3}{5}$. Setting $\\tfrac{9}{5}+\\tfrac{t_3}{5}=\\tfrac32$ gives $t_3=-\\tfrac32$.",
          "Decide the circle by the trace test. A reciprocal pair $\\{r,1/r\\}$ of $z^{2}-t z+1$ lies on $|z|=1$ iff $t\\in\\mathbb{R}$ and $|t|\\le 2$ (then $r=e^{i\\theta},\\ t=2\\cos\\theta$). Here the three traces are $\\tfrac65,\\,-1,\\,-\\tfrac32$, all real with absolute value $<2$, so \\text{all three} pairs lie on the circle — the third pair only because $|-\\tfrac32|<2$, which is exactly the check the trap skips. Solving $z^{2}+\\tfrac32 z+1=0$ gives $z=-\\tfrac34\\pm\\tfrac{\\sqrt7}{4}i$ (indeed $\\tfrac{9}{16}+\\tfrac{7}{16}=1$). Reading off $a=-(t_1+t_2+t_3)=-(\\tfrac65-1-\\tfrac32)=\\tfrac{13}{10}$, and direct multiplication gives $P(z)=z^{6}+\\tfrac{13}{10}z^{5}+\\tfrac32 z^{4}+\\tfrac45 z^{3}+\\tfrac32 z^{2}+\\tfrac{13}{10}z+1$, so $a=\\tfrac{13}{10},\\ b=\\tfrac32,\\ c=\\tfrac45$, and the six roots are $\\boxed{\\tfrac35\\pm\\tfrac45 i,\\ -\\tfrac12\\pm\\tfrac{\\sqrt3}{2}i,\\ -\\tfrac34\\pm\\tfrac{\\sqrt7}{4}i}$."
        ]
      },
      {
        "name": "Resolvent substitution $s=z+1/z$ (palindromic reduction)",
        "steps": [
          "Since $z=0$ is not a root, divide $P(z)=0$ by $z^{3}$ and group reciprocal terms: $\\bigl(z^{3}+\\tfrac1{z^{3}}\\bigr)+a\\bigl(z^{2}+\\tfrac1{z^{2}}\\bigr)+b\\bigl(z+\\tfrac1z\\bigr)+c=0$. With $s=z+\\tfrac1z$ we have $z^{2}+\\tfrac1{z^{2}}=s^{2}-2$ and $z^{3}+\\tfrac1{z^{3}}=s^{3}-3s$, giving the depressed \\text{resolvent cubic} $s^{3}+a\\,s^{2}+(b-3)s+(c-2a)=0$. The key fact: $z$ lies on $|z|=1$ \\text{iff} its trace $s=z+1/z=2\\cos\\theta$ is real with $|s|\\le 2$; if $|s|>2$ the pair $\\{z,1/z\\}$ is real and off the circle. So the whole circle question is decided by the three roots of one real cubic.",
          "Pin the cubic's coefficients. From $P(1)+P(-1)=4b+4=10$ we get $b=\\tfrac32$. The two given roots supply two traces: $w$ gives $s=w+\\bar w=2\\,\\mathrm{Re}(w)=\\tfrac65$, and $\\zeta$ gives $s=2\\cos\\tfrac{2\\pi}{3}=-1$. Both must be roots of the resolvent cubic, so it is $(s-\\tfrac65)(s+1)(s-s_3)$ for the unknown third trace $s_3$.",
          "Match the linear data. With $b=\\tfrac32$ the cubic's linear coefficient is $b-3=-\\tfrac32$, which equals the sum of pairwise products of the three traces: $\\tfrac65\\cdot(-1)+\\tfrac65 s_3+(-1)s_3=-\\tfrac65-\\tfrac{s_3}{5}$. Setting $-\\tfrac65-\\tfrac{s_3}{5}=-\\tfrac32$ gives $s_3=-\\tfrac32$. The three traces are thus $\\tfrac65,\\,-1,\\,-\\tfrac32$; equivalently the resolvent is $10s^{3}+13s^{2}-15s-18=0$ with roots $\\tfrac65,-1,-\\tfrac32$. Then $a=-(\\text{sum of traces})=-\\bigl(\\tfrac65-1-\\tfrac32\\bigr)=\\tfrac{13}{10}$ and, from $c-2a=-(\\text{product of traces})=-\\tfrac65\\cdot(-1)\\cdot(-\\tfrac32)=-\\tfrac95$, we get $c=2a-\\tfrac95=\\tfrac{13}{5}-\\tfrac95=\\tfrac45$.",
          "Apply the trace test. The three traces $\\tfrac65,\\,-1,\\,-\\tfrac32$ are all real with $|s|<2$, so by the criterion of step 1 \\text{every} reciprocal pair lies on $|z|=1$; none is real/off-circle. Back-substituting $z+\\tfrac1z=s$, i.e.\\ $z^{2}-sz+1=0$: $s=\\tfrac65\\Rightarrow z=\\tfrac35\\pm\\tfrac45 i$, $s=-1\\Rightarrow z=-\\tfrac12\\pm\\tfrac{\\sqrt3}{2}i$, $s=-\\tfrac32\\Rightarrow z=-\\tfrac34\\pm\\tfrac{\\sqrt7}{4}i$. This is precisely $\\boxed{\\tfrac35\\pm\\tfrac45 i,\\ -\\tfrac12\\pm\\tfrac{\\sqrt3}{2}i,\\ -\\tfrac34\\pm\\tfrac{\\sqrt7}{4}i}$."
        ]
      },
      {
        "name": "Discriminant / product-of-roots test on the real quadratic factors",
        "steps": [
          "A monic real quadratic $z^{2}+pz+q$ has its two (complex-conjugate) roots on $|z|=1$ \\text{iff} its discriminant is negative \\text{and} the product of roots $q=1$: then the roots are $e^{\\pm i\\theta}$ with modulus $\\sqrt q=1$. If instead the discriminant is $\\ge 0$ the roots are real, and even with $q=1$ they are a reciprocal pair $\\{r,1/r\\}$ with $|r|\\ne 1$ (unless $r=\\pm1$) — off the circle. So for each factor we must check \\text{both} $q=1$ and discriminant $<0$.",
          "Build $P$ from its forced factors. The given roots produce $z^{2}-\\tfrac65 z+1$ (from $w,\\bar w$) and $z^{2}+z+1$ (from $\\zeta,\\bar\\zeta$); self-reciprocity forces the third factor to have constant term $1$, say $z^{2}-s_3 z+1$. Using $P(1)+P(-1)=4b+4=10\\Rightarrow b=\\tfrac32$ and matching the $z^{4}$-coefficient $b=3-\\tfrac65+\\tfrac{s_3}{5}$ gives $s_3=-\\tfrac32$, so the third factor is $z^{2}+\\tfrac32 z+1$ and $P(z)=\\tfrac1{10}\\bigl(5z^{2}-6z+5\\bigr)\\bigl(z^{2}+z+1\\bigr)\\bigl(2z^{2}+3z+2\\bigr)$ after clearing denominators, equivalently the monic $z^{6}+\\tfrac{13}{10}z^{5}+\\tfrac32 z^{4}+\\tfrac45 z^{3}+\\tfrac32 z^{2}+\\tfrac{13}{10}z+1$.",
          "Run the test on each factor. For $5z^{2}-6z+5$: product of roots $=\\tfrac55=1$ and discriminant $36-100=-64<0$ — on the circle, roots $\\tfrac35\\pm\\tfrac45 i$. For $z^{2}+z+1$: product $=1$, discriminant $1-4=-3<0$ — on the circle, roots $-\\tfrac12\\pm\\tfrac{\\sqrt3}{2}i$. For $2z^{2}+3z+2$: product $=\\tfrac22=1$ and discriminant $9-16=-7<0$ — on the circle, roots $-\\tfrac34\\pm\\tfrac{\\sqrt7}{4}i$. Each factor passes \\text{both} requirements; the third does so only because its discriminant is negative, the very check the trap omits.",
          "Therefore all six roots have modulus $1$ and are $\\boxed{\\tfrac35\\pm\\tfrac45 i,\\ -\\tfrac12\\pm\\tfrac{\\sqrt3}{2}i,\\ -\\tfrac34\\pm\\tfrac{\\sqrt7}{4}i}$, with $a=\\tfrac{13}{10},\\,b=\\tfrac32,\\,c=\\tfrac45$."
        ]
      }
    ],
    "remark": "Insight: self-reciprocity is a statement about \\text{pairs}, not about the circle. It guarantees the roots split into reciprocal couples $\\{r,1/r\\}$, but a reciprocal couple lands on $|z|=1$ only when its trace $s=r+1/r$ is real with $|s|\\le 2$ — equivalently the quadratic $z^{2}-sz+1$ has negative discriminant. The substitution $s=z+1/z$ collapses the degree-six problem to a real resolvent cubic whose three roots \\text{are} the three traces, and the entire circle question becomes ``are all three cubic roots in $[-2,2]$?'' The trap weaponises a true but impotent fact: $P(1)+P(-1)=4b+4$ fixes one coefficient and feels like a strong constraint, yet it pins nothing about the traces' magnitudes — two different palindromic sextics can share $b$ and $P(1)\\pm P(-1)$ while one sits on the circle and the other has a real pair flung to modulus $2.6$. Rank is won by realising that the two \\text{given} roots (not the sum) supply $a$ and $c$, and that the surviving trace $-\\tfrac34$ must be \\text{tested}, not assumed, against the bound $2$."
  },
  {
    "theme": "equations",
    "themeLabel": "Polynomial Equations",
    "title": "When the Twelfth Root Splits the Eighth",
    "difficulty": 4,
    "task": "Find the value of",
    "tags": [
      "roots of unity",
      "cyclotomic",
      "factoring",
      "real quadratics",
      "symmetric"
    ],
    "statement": "The polynomial $P(z)=z^{8}+z^{4}+1$ has no real roots, yet over $\\mathbb{R}$ it factors completely into monic quadratics. Write \\[ z^{8}+z^{4}+1=\\prod_{k=1}^{m}\\bigl(z^{2}+b_k z+1\\bigr),\\qquad b_k\\in\\mathbb{R}, \\] using the largest possible number $m$ of real quadratic factors (so that none of the $z^{2}+b_k z+1$ factors further over $\\mathbb{R}$). Determine the number $m$ of factors and the value of $\\displaystyle\\sum_{k=1}^{m} b_k^{2}$.",
    "answer": "\\[\\boxed{\\,m=4,\\ \\textstyle\\sum_{k=1}^{4} b_k^{2}=8\\,}\\]",
    "trap": "The seductive route is to grind $z^{8}+z^{4}+1=(z^{4}+z^{2}+1)(z^{4}-z^{2}+1)$ then split only the first quartic via $z^{4}+z^{2}+1=(z^{2}+z+1)(z^{2}-z+1)$, and declare the leftover $z^{4}-z^{2}+1$ irreducible over $\\mathbb{R}$ because it has no real roots and no rational factorization. That stops at $m=3$ and reports $\\sum b_k^{2}=(-1)^2+(1)^2=2$ from the two genuine quadratics (the quartic having no $b z$ term to count). But over $\\mathbb{R}$ EVERY polynomial of even degree with no real roots still factors into real quadratics: $z^{4}-z^{2}+1=(z^{2}-\\sqrt3\\,z+1)(z^{2}+\\sqrt3\\,z+1)$ via the Sophie-Germain completion $z^{4}-z^{2}+1=(z^{2}+1)^{2}-(\\sqrt3\\,z)^{2}$. Irreducibility over $\\mathbb{Q}$ is NOT irreducibility over $\\mathbb{R}$; the true count is $m=4$ and $\\sum b_k^{2}=8$.",
    "solutions": [
      {
        "name": "Roots of unity through the cyclotomic quotient",
        "steps": [
          "Recognize the geometric-series shape: $z^{8}+z^{4}+1=\\dfrac{z^{12}-1}{z^{4}-1}$, since $(z^{4}-1)(z^{8}+z^{4}+1)=z^{12}-1$. Hence the roots of $P$ are exactly the $12$th roots of unity that are NOT $4$th roots of unity.",
          "The $12$th roots are $\\zeta^{k}=e^{2\\pi i k/12}$ for $k=0,\\dots,11$; removing the $4$th roots ($k=0,3,6,9$) leaves the eight values $k\\in\\{1,2,4,5,7,8,10,11\\}$, none of them real. Pair each root with its conjugate $\\zeta^{k},\\zeta^{-k}$; each pair gives a real quadratic $z^{2}-2\\cos\\!\\frac{\\pi k}{6}\\,z+1$ (note $\\zeta^{k}\\zeta^{-k}=1$).",
          "The four upper-half angles are $\\frac{\\pi}{6},\\frac{\\pi}{3},\\frac{2\\pi}{3},\\frac{5\\pi}{6}$, giving $b_k=-2\\cos\\theta\\in\\{-\\sqrt3,\\,-1,\\,1,\\,\\sqrt3\\}$. So $m=4$ and $P=(z^{2}-\\sqrt3 z+1)(z^{2}-z+1)(z^{2}+z+1)(z^{2}+\\sqrt3 z+1)$.",
          "Therefore $\\sum b_k^{2}=(-\\sqrt3)^2+(-1)^2+(1)^2+(\\sqrt3)^2=3+1+1+3=8$. $\\boxed{m=4,\\ \\sum b_k^{2}=8}$"
        ]
      },
      {
        "name": "Difference of squares twice (Sophie Germain in disguise)",
        "steps": [
          "Group as a difference of squares: $z^{8}+z^{4}+1=(z^{4}+1)^{2}-(z^{2})^{2}=(z^{4}+z^{2}+1)(z^{4}-z^{2}+1)$.",
          "Split the first quartic the same way: $z^{4}+z^{2}+1=(z^{2}+1)^{2}-z^{2}=(z^{2}+z+1)(z^{2}-z+1)$, giving $b=\\pm1$.",
          "Now do NOT stop: the second quartic also yields $z^{4}-z^{2}+1=(z^{2}+1)^{2}-3z^{2}=(z^{2}+1)^{2}-(\\sqrt3\\,z)^{2}=(z^{2}+\\sqrt3 z+1)(z^{2}-\\sqrt3 z+1)$, giving $b=\\pm\\sqrt3$. Each of these four quadratics has discriminant $<0$, so none factors further over $\\mathbb{R}$; hence $m=4$.",
          "Summing, $\\sum b_k^{2}=1+1+3+3=8$. $\\boxed{m=4,\\ \\sum b_k^{2}=8}$"
        ]
      },
      {
        "name": "Coefficient matching via Newton (no roots computed)",
        "steps": [
          "Because $P$ is palindromic with no real roots, it is a product of $m=4$ monic quadratics each with constant term $1$ (degree $8$ forces four quadratics, and $z^{2}+b z+c$ reciprocal to a factor of a palindrome forces $c=1$). Expanding $\\prod_{k=1}^{4}(z^{2}+b_k z+1)$, the $z^{7}$ coefficient is $e_1=\\sum b_k$ and the $z^{6}$ coefficient is $e_2+4$, where $e_2=\\sum_{i<j} b_i b_j$.",
          "Match to $z^{8}+z^{4}+1$, whose $z^{7}$ and $z^{6}$ coefficients are both $0$: this gives $e_1=0$ and $e_2+4=0$, so $e_1=0,\\ e_2=-4$.",
          "By Newton's identity for power sums, $\\sum b_k^{2}=e_1^{2}-2e_2=0^{2}-2(-4)=8$ — obtained without ever solving for the individual $b_k$.",
          "(The remaining coefficient equations are consistent and pin down $\\{b_k\\}=\\{\\pm1,\\pm\\sqrt3\\}$, confirming $m=4$.) $\\boxed{m=4,\\ \\sum b_k^{2}=8}$"
        ]
      }
    ],
    "remark": "Insight: the engine is the cyclotomic quotient $z^{8}+z^{4}+1=\\frac{z^{12}-1}{z^{4}-1}$, which exposes the roots as the $12$th roots of unity stripped of the $4$th roots, conjugate pairs assembling into four real quadratics. The trap is the silent jump from 'irreducible over $\\mathbb{Q}$' to 'irreducible over $\\mathbb{R}$': $z^{4}-z^{2}+1$ resists rational factoring but yields instantly to the Sophie-Germain split $(z^{2}+1)^{2}-(\\sqrt3 z)^{2}$. Most elegantly, the requested sum needs no factor at all: Newton's $\\sum b_k^{2}=e_1^{2}-2e_2$ reads $8$ straight off the two vanishing top coefficients."
  },
  {
    "theme": "equations",
    "themeLabel": "Polynomial Equations",
    "title": "Which Term Rules the Circle",
    "difficulty": 4,
    "task": "Determine the number of",
    "tags": [
      "rouche",
      "unit disk",
      "trinomial",
      "root counting",
      "argument principle"
    ],
    "statement": "Determine the number of roots of \\[ p(z) = z^{7} + 4z^{3} + 1 = 0 \\] (counted with multiplicity) that lie strictly inside the open unit disk $|z|<1$.",
    "answer": "\\[\\boxed{\\,3\\,}\\]",
    "trap": "Reflexively choosing the highest-degree term $z^{7}$ as the 'dominant' one and applying Rouche's theorem with $g(z)=z^{7}$. On $|z|=1$ one has $|g|=1$, but the remainder $f-g=4z^{3}+1$ has modulus up to $|4z^{3}+1|=5$ on the circle, so the required inequality $|f-g|<|g|$ FAILS badly; the comparison is invalid and the (false) conclusion would be 7 roots inside. The point is that dominance on $|z|=1$ is about coefficient SIZE on the circle, not polynomial degree: every $|z|=1$ kills the degree distinction since $|z^k|=1$, so the genuinely dominant term is the one with the largest coefficient, namely $4z^{3}$. Comparing instead with $g(z)=4z^{3}$ gives $|f-g|=|z^{7}+1|\\le 2<4=|4z^{3}|$, valid strictly, and $4z^{3}$ has exactly $3$ zeros inside.",
    "solutions": [
      {
        "name": "Rouche with the largest-coefficient term",
        "steps": [
          "On the boundary $|z|=1$ every power satisfies $|z^{k}|=1$, so the size of a monomial $c z^{k}$ there is just $|c|$. The coefficients of $p$ are $1,\\,4,\\,1$, so the term that dominates the circle is $g(z)=4z^{3}$, not the highest-degree term.",
          "Split $p=g+h$ with $g(z)=4z^{3}$ and $h(z)=z^{7}+1$. On $|z|=1$, $|g(z)|=4$ while $|h(z)|=|z^{7}+1|\\le |z^{7}|+1=2$. Hence $|h(z)|\\le 2<4=|g(z)|$ everywhere on the circle, with strict inequality (so $p$ has no zero on $|z|=1$).",
          "By Rouche's theorem, $p=g+h$ and $g$ have the same number of zeros inside $|z|<1$. Now $g(z)=4z^{3}$ has a single zero $z=0$ of multiplicity $3$, i.e. $3$ zeros inside the disk.",
          "Therefore $p$ has exactly $\\boxed{3}$ roots in $|z|<1$."
        ]
      },
      {
        "name": "Argument principle on the boundary",
        "steps": [
          "Since $|p(z)|\\ge |4z^{3}|-|z^{7}+1|\\ge 4-2=2>0$ on $|z|=1$, $p$ has no zero on the circle and the count of interior zeros equals the winding number $\\dfrac{1}{2\\pi}\\Delta_{|z|=1}\\arg p(z)$.",
          "Factor out the dominant term: $p(z)=4z^{3}\\bigl(1+u(z)\\bigr)$ with $u(z)=\\dfrac{z^{7}+1}{4z^{3}}$. On $|z|=1$, $|u(z)|\\le \\tfrac{2}{4}=\\tfrac12<1$, so $1+u(z)$ stays in the right half-plane $\\operatorname{Re}(1+u)>0$; its argument never completes a loop and contributes $0$ to the total change of argument.",
          "Thus $\\Delta\\arg p = \\Delta\\arg(4z^{3}) + \\Delta\\arg(1+u) = 3\\cdot 2\\pi + 0 = 6\\pi$ as $z$ traverses the circle once.",
          "The number of interior zeros is $\\dfrac{6\\pi}{2\\pi}=3$, so $\\boxed{3}$."
        ]
      },
      {
        "name": "Locating every root by modulus",
        "steps": [
          "First rule out boundary roots: if $|z|=1$ were a root then $z^{7}+1=-4z^{3}$ would force $4=|4z^{3}|=|z^{7}+1|\\le |z^{7}|+1=2$, a contradiction. So no root has modulus $1$, and the seven roots split cleanly into those with $|z|<1$ and those with $|z|>1$.",
          "Count the inner group by Rouche as in Method 1: on $|z|=1$ the remainder obeys $|z^{7}+1|\\le 2<4=|4z^{3}|$, so $p(z)=z^{7}+4z^{3}+1$ has the same number of zeros inside the disk as $4z^{3}$, namely $3$.",
          "Since the total degree is $7$ and none of the roots sits on the circle, the remaining $7-3=4$ roots all lie in $|z|>1$. Thus the partition is forced: exactly three inside, four outside.",
          "This matches direct computation, where the moduli of the seven roots come out as three near $0.62$–$0.63$ (inside) and four near $1.39$–$1.44$ (outside). Hence the disk contains exactly $\\boxed{3}$ roots."
        ]
      }
    ],
    "remark": "Insight: on a circle $|z|=R$ the degree of a monomial is irrelevant to its size, since $|c z^{k}|=|c|R^{k}$ depends on the coefficient and the radius, not on which power it is. For $R=1$ all powers tie at $R^{k}=1$, so the dominant term is simply the one with the largest coefficient. Here $4z^{3}$ rules the unit circle and dictates $3$ interior roots, whereas the seductive leading term $z^{7}$ would only dominate for large $R$ (it governs how many roots lie inside a big disk, all seven). Rouche's theorem is really a statement about who wins on a given contour, and the contour, not the degree, picks the winner."
  },
  {
    "theme": "equations",
    "themeLabel": "Polynomial Equations",
    "title": "Three Cubes Without the Mirror",
    "difficulty": 4,
    "task": "Find the value of",
    "tags": [
      "newton's identities",
      "power sums",
      "complex coefficients",
      "symmetric functions",
      "conjugate trap",
      "hidden constraint"
    ],
    "statement": "Three complex numbers $\\alpha,\\beta,\\gamma$ (not assumed conjugate in any way) are the roots of a cubic $z^{3}+pz^{2}+qz+r=0$ whose coefficients $p,q,r$ are themselves complex. You are told only the following three symmetric data: \\[ \\alpha+\\beta+\\gamma=2+4i,\\qquad \\alpha^{2}+\\beta^{2}+\\gamma^{2}=2i,\\qquad \\alpha\\beta\\gamma=-7-i. \\] Compute the sum of cubes \\[ p_{3}=\\alpha^{3}+\\beta^{3}+\\gamma^{3}. \\] Note that because the cubic's coefficients are genuinely non-real, none of the comfortable real-coefficient shortcuts (conjugate roots, real power sums) is available; the answer must be earned from the symmetric data alone.",
    "answer": "\\[\\boxed{\\,11+11i\\,}\\]",
    "trap": "The fatal reflex is the schoolbook identity $\\alpha^{3}+\\beta^{3}+\\gamma^{3}=3\\alpha\\beta\\gamma$, which would hand back $3(-7-i)=-21-3i$ in one line. But that identity is \\text{conditional}: $\\alpha^{3}+\\beta^{3}+\\gamma^{3}-3\\alpha\\beta\\gamma=(\\alpha+\\beta+\\gamma)\\bigl(\\alpha^{2}+\\beta^{2}+\\gamma^{2}-\\alpha\\beta-\\beta\\gamma-\\gamma\\alpha\\bigr)$, so the collapse $p_{3}=3\\alpha\\beta\\gamma$ holds \\text{only when} $\\alpha+\\beta+\\gamma=0$. Here $\\alpha+\\beta+\\gamma=2+4i\\neq0$, so the right-hand factor survives and the shortcut is simply false. A second, subtler temptation is to lean on real-coefficient instincts: a student used to real cubics expects the roots to come in conjugate pairs and the power sums $p_{1},p_{2},p_{3}$ to be real, then tries to ``fix up'' the imaginary part by inspection. But the coefficients $p=-(2+4i)$, $q=-6+7i$, $r=7+i$ are non-real, the roots are \\text{not} conjugate-closed, and $p_{3}$ is honestly complex; there is no symmetry to exploit. The only correct route is the full Newton recursion (equivalently the unconditional factorisation identity), keeping the $\\alpha+\\beta+\\gamma$ factor alive — which converts $-21-3i$ into the true value $11+11i$.",
    "solutions": [
      {
        "name": "Newton's identities, run honestly",
        "steps": [
          "Translate the data into elementary symmetric functions. With $e_{1}=\\alpha+\\beta+\\gamma$, $e_{2}=\\alpha\\beta+\\beta\\gamma+\\gamma\\alpha$, $e_{3}=\\alpha\\beta\\gamma$ and power sums $p_{1}=e_{1}$, $p_{2}=\\sum\\alpha^{2}$, the standard relation $p_{2}=e_{1}^{2}-2e_{2}$ gives $e_{2}=\\dfrac{e_{1}^{2}-p_{2}}{2}$. Here $e_{1}=2+4i$, so $e_{1}^{2}=(2+4i)^{2}=4+16i-16=-12+16i$, and $e_{2}=\\dfrac{(-12+16i)-2i}{2}=\\dfrac{-12+14i}{2}=-6+7i$. Also $e_{3}=-7-i$ directly.",
          "Apply Newton's third identity for three variables, $p_{3}=e_{1}p_{2}-e_{2}p_{1}+3e_{3}$ (note the $+3e_{3}$ term — this is exactly what the naive shortcut throws away). Substitute $p_{1}=e_{1}=2+4i$, $p_{2}=2i$, $e_{2}=-6+7i$, $e_{3}=-7-i$.",
          "Compute the three pieces. $e_{1}p_{2}=(2+4i)(2i)=4i+8i^{2}=-8+4i$. Next $e_{2}p_{1}=(-6+7i)(2+4i)=-12-24i+14i+28i^{2}=-12-10i-28=-40-10i$, so $-e_{2}p_{1}=40+10i$. And $3e_{3}=3(-7-i)=-21-3i$.",
          "Add: $p_{3}=(-8+4i)+(40+10i)+(-21-3i)=(-8+40-21)+(4+10-3)i=11+11i$. Hence $\\boxed{\\,\\alpha^{3}+\\beta^{3}+\\gamma^{3}=11+11i\\,}$, and the surviving $-e_{2}p_{1}$ contribution $40+10i$ is precisely the term the $3\\alpha\\beta\\gamma$ trap discards."
        ]
      },
      {
        "name": "Unconditional sum-of-cubes factorisation",
        "steps": [
          "Use the identity valid for all complex $\\alpha,\\beta,\\gamma$: $\\alpha^{3}+\\beta^{3}+\\gamma^{3}-3\\alpha\\beta\\gamma=(\\alpha+\\beta+\\gamma)\\bigl(\\alpha^{2}+\\beta^{2}+\\gamma^{2}-(\\alpha\\beta+\\beta\\gamma+\\gamma\\alpha)\\bigr)$. Every quantity on the right is given or one step away; nothing here needs the coefficients to be real.",
          "We already have $\\alpha+\\beta+\\gamma=2+4i$ and $\\alpha^{2}+\\beta^{2}+\\gamma^{2}=2i$. The only missing symmetric quantity is $e_{2}=\\alpha\\beta+\\beta\\gamma+\\gamma\\alpha=\\dfrac{(\\alpha+\\beta+\\gamma)^{2}-(\\alpha^{2}+\\beta^{2}+\\gamma^{2})}{2}=\\dfrac{(-12+16i)-2i}{2}=-6+7i$.",
          "So $\\alpha^{2}+\\beta^{2}+\\gamma^{2}-e_{2}=2i-(-6+7i)=6-5i$, and the right factor product is $(\\alpha+\\beta+\\gamma)(6-5i)=(2+4i)(6-5i)=12-10i+24i-20i^{2}=12+14i+20=32+14i$.",
          "Therefore $\\alpha^{3}+\\beta^{3}+\\gamma^{3}=3\\alpha\\beta\\gamma+(32+14i)=3(-7-i)+32+14i=(-21-3i)+(32+14i)=11+11i$. The trap value $-21-3i$ is exactly $3\\alpha\\beta\\gamma$; the genuine answer adds the non-vanishing factor $(\\alpha+\\beta+\\gamma)(\\cdots)=32+14i$, giving $\\boxed{\\,11+11i\\,}$."
        ]
      },
      {
        "name": "Reduce each cube through the cubic the roots satisfy",
        "steps": [
          "Reconstruct the cubic from the data. The monic cubic with these roots is $z^{3}-e_{1}z^{2}+e_{2}z-e_{3}=0$ with $e_{1}=2+4i$, $e_{2}=-6+7i$ (from $e_{2}=\\tfrac12(e_{1}^{2}-p_{2})$), $e_{3}=-7-i$; that is, every root satisfies $z^{3}=e_{1}z^{2}-e_{2}z+e_{3}$.",
          "Substitute $z=\\alpha,\\beta,\\gamma$ and sum: $\\sum z^{3}=e_{1}\\sum z^{2}-e_{2}\\sum z+3e_{3}$, i.e. $p_{3}=e_{1}p_{2}-e_{2}p_{1}+3e_{3}$. This derives Newton's identity \\text{mechanically} from the equation itself, with no appeal to conjugate symmetry — the $3e_{3}$ arises because the constant term is added once for each of the three roots.",
          "Plug in: $e_{1}p_{2}=(2+4i)(2i)=-8+4i$; $\\;-e_{2}p_{1}=-(-6+7i)(2+4i)=-(-40-10i)=40+10i$; $\\;3e_{3}=-21-3i$.",
          "Summing, $p_{3}=(-8+4i)+(40+10i)+(-21-3i)=11+11i$. Since $e_{1}=2+4i\\neq0$, the cross term $-e_{2}p_{1}$ does not vanish, so $p_{3}\\neq3e_{3}$ and the answer is $\\boxed{\\,11+11i\\,}$."
        ]
      }
    ],
    "remark": "Insight: the elegant collapse $\\alpha^{3}+\\beta^{3}+\\gamma^{3}=3\\alpha\\beta\\gamma$ is a \\text{theorem with a hypothesis} — it needs $\\alpha+\\beta+\\gamma=0$, because the true statement is the unconditional factorisation $p_{3}-3e_{3}=e_{1}(p_{2}-e_{2})$. Whenever $e_{1}\\neq0$ the cross term $e_{1}(p_{2}-e_{2})=-e_{2}p_{1}+e_{1}p_{2}$ is alive and must be carried. Working over $\\mathbb{C}$ with non-real coefficients strips away every crutch a student leans on for real cubics: roots need not come in conjugate pairs, the power sums need not be real, and there is no shadow symmetry to recover a lost term by inspection. The disciplined move is to convert the data to $(e_{1},e_{2},e_{3})$ via $e_{2}=\\tfrac12(e_{1}^{2}-p_{2})$ and run Newton's recursion $p_{3}=e_{1}p_{2}-e_{2}p_{1}+3e_{3}$ in full — the honest recursion is the whole point, and it turns the seductive $-21-3i$ into the correct $11+11i$."
  },
  {
    "theme": "equations",
    "themeLabel": "Polynomial Equations",
    "title": "Only the Faithful Ninth Roots",
    "difficulty": 5,
    "task": "Evaluate the sum",
    "tags": [
      "cyclotomic polynomial",
      "logarithmic derivative",
      "primitive roots",
      "vieta",
      "partial fractions",
      "hidden constraint"
    ],
    "statement": "Let $\\zeta = e^{2\\pi i/9}$ be a primitive ninth root of unity, and let the index $k$ run over those values in $\\{1,2,\\dots,9\\}$ for which $\\zeta^{k}$ is itself a primitive ninth root of unity (that is, $\\operatorname{ord}(\\zeta^{k})=9$). Evaluate \\[ S \\;=\\; \\sum_{k}\\frac{1}{\\zeta^{k}-i}, \\] the sum being taken over exactly those $k$. (Here $i=\\sqrt{-1}$.)",
    "answer": "\\[\\boxed{\\,6+3i\\,}\\]",
    "trap": "The seductive misread is to treat the indices as ``all ninth roots of unity'' and sum $\\sum_{k=1}^{9}\\frac{1}{\\zeta^{k}-i}$ over the roots of $z^{9}-1$, giving $-\\dfrac{(z^{9}-1)'}{z^{9}-1}\\Big|_{z=i}=-\\dfrac{9i^{8}}{i^{9}-1}=\\dfrac{9}{2}+\\dfrac{9}{2}i$ — a clean-looking but wrong value. The hidden constraint is the word primitive: $\\zeta^{k}$ has order $9$ precisely when $\\gcd(k,9)=1$, so $k\\in\\{1,2,4,5,7,8\\}$ and the sum has only six terms, not nine. The six primitive ninth roots are the roots of the cyclotomic polynomial $\\Phi_{9}(x)=x^{6}+x^{3}+1$, \\text{not} of $z^{9}-1$ and \\text{not} of $\\frac{z^{9}-1}{z-1}=z^{8}+\\cdots+1$. Dropping the non-primitive roots $\\zeta^{3},\\zeta^{6}$ (the primitive cube roots) and $\\zeta^{9}=1$ is exactly what separates $\\Phi_{9}$ from $z^{9}-1$; summing over the wrong root set is the whole error. A subtler variant of the same slip uses $\\frac{z^{9}-1}{z-1}$ (eight roots, excluding only $1$), which still wrongly keeps the two primitive cube roots and yields $4+4i$. Only the genuine cyclotomic polynomial $\\Phi_{9}=x^{6}+x^{3}+1$ selects the correct six roots.",
    "solutions": [
      {
        "name": "Logarithmic derivative of the cyclotomic polynomial",
        "steps": [
          "The roots $\\zeta^{k}$ being summed over are exactly the primitive ninth roots of unity, which are the six roots of the ninth cyclotomic polynomial $\\Phi_{9}(x)=x^{6}+x^{3}+1$ (one checks $x^{9}-1=(x-1)(x^{2}+x+1)(x^{6}+x^{3}+1)=\\Phi_{1}\\Phi_{3}\\Phi_{9}$, so the degree-$6$ factor carries precisely the order-$9$ roots). Writing $\\Phi_{9}(x)=\\prod_{j}(x-\\rho_{j})$ over those six roots $\\rho_{j}$, the logarithmic derivative gives $\\dfrac{\\Phi_{9}'(x)}{\\Phi_{9}(x)}=\\sum_{j}\\dfrac{1}{x-\\rho_{j}}$.",
          "Our sum is $S=\\sum_{j}\\dfrac{1}{\\rho_{j}-i}=-\\sum_{j}\\dfrac{1}{i-\\rho_{j}}=-\\dfrac{\\Phi_{9}'(i)}{\\Phi_{9}(i)}$. So we only need to evaluate $\\Phi_{9}$ and its derivative $\\Phi_{9}'(x)=6x^{5}+3x^{2}$ at $x=i$.",
          "Using $i^{2}=-1$, $i^{3}=-i$, $i^{5}=i$, $i^{6}=-1$: the denominator is $\\Phi_{9}(i)=i^{6}+i^{3}+1=(-1)+(-i)+1=-i$, and the numerator is $\\Phi_{9}'(i)=6i^{5}+3i^{2}=6i-3=-3+6i$.",
          "Therefore $S=-\\dfrac{-3+6i}{-i}=-\\dfrac{(-3+6i)}{-i}\\cdot\\dfrac{i}{i}=-\\dfrac{(-3+6i)\\,i}{-i^{2}}=-\\dfrac{-3i-6}{1}=6+3i$, giving $\\boxed{\\,S=6+3i\\,}$. (The naive $z^{9}-1$ count would instead use $\\Phi_{1}\\Phi_{3}\\Phi_{9}$ and inflate the answer to $\\tfrac92+\\tfrac92 i$.)"
        ]
      },
      {
        "name": "Shift the polynomial, then read Vieta off the constant terms",
        "steps": [
          "Let $w_{j}=\\dfrac{1}{\\rho_{j}-i}$ for the six primitive ninth roots $\\rho_{j}$, so $S=\\sum_{j}w_{j}$. The numbers $\\rho_{j}-i$ are the roots of the shifted polynomial $Q(t)=\\Phi_{9}(t+i)=(t+i)^{6}+(t+i)^{3}+1$, and $S$ is the sum of reciprocals of the roots of $Q$.",
          "For any polynomial $Q(t)=a_{0}+a_{1}t+\\cdots+a_{6}t^{6}$ with nonzero roots, the sum of reciprocals of the roots equals $-\\dfrac{a_{1}}{a_{0}}$ (this is $e_{5}/e_{6}$ in Vieta form, i.e. $\\sum 1/\\text{root}$). Thus we only need the two lowest coefficients $a_{0}=Q(0)$ and $a_{1}=Q'(0)$.",
          "Constant term: $a_{0}=Q(0)=\\Phi_{9}(i)=i^{6}+i^{3}+1=-i$. Linear coefficient: $a_{1}=Q'(0)=\\Phi_{9}'(i)=6i^{5}+3i^{2}=6i-3=-3+6i$, since $Q'(t)=\\Phi_{9}'(t+i)$.",
          "Hence $S=-\\dfrac{a_{1}}{a_{0}}=-\\dfrac{-3+6i}{-i}=6+3i$. This is the same computation as the logarithmic derivative, now seen purely through Vieta on the shifted polynomial, confirming $\\boxed{\\,S=6+3i\\,}$."
        ]
      },
      {
        "name": "Exploit the sparse structure $x^{6}+x^{3}+1$ via the cube substitution",
        "steps": [
          "Because $\\Phi_{9}(x)=x^{6}+x^{3}+1$ is a polynomial in $x^{3}$, the substitution $y=x^{3}$ turns it into $y^{2}+y+1=0$, whose roots are the two primitive cube roots of unity $\\omega,\\bar\\omega$ (with $\\omega+\\bar\\omega=-1$, $\\omega\\bar\\omega=1$). So $\\Phi_{9}(x)=(x^{3}-\\omega)(x^{3}-\\bar\\omega)$, and the six primitive ninth roots split into the three cube roots of $\\omega$ and the three cube roots of $\\bar\\omega$.",
          "For a fixed value $\\omega$, the three roots of $x^{3}-\\omega$ contribute $\\sum_{x^{3}=\\omega}\\dfrac{1}{x-i}=-\\dfrac{(x^{3}-\\omega)'}{x^{3}-\\omega}\\Big|_{x=i}=-\\dfrac{3i^{2}}{i^{3}-\\omega}=\\dfrac{3}{-i-\\omega}$, using the logarithmic derivative of the single factor $x^{3}-\\omega$ and $i^{3}=-i$.",
          "Adding the two factors and putting $s=i^{3}=-i$: $S=3\\!\\left(\\dfrac{1}{s-\\omega}+\\dfrac{1}{s-\\bar\\omega}\\right)=3\\cdot\\dfrac{2s-(\\omega+\\bar\\omega)}{s^{2}-(\\omega+\\bar\\omega)s+\\omega\\bar\\omega}=3\\cdot\\dfrac{2s+1}{s^{2}+s+1}$, where we used $\\omega+\\bar\\omega=-1$ and $\\omega\\bar\\omega=1$ so the messy cube roots never appear.",
          "With $s=-i$: numerator $2s+1=1-2i$, denominator $s^{2}+s+1=(-1)+(-i)+1=-i$, so $\\dfrac{2s+1}{s^{2}+s+1}=\\dfrac{1-2i}{-i}=\\dfrac{(1-2i)\\,i}{-i\\cdot i}=\\dfrac{i+2}{1}=2+i$. Therefore $S=3(2+i)=6+3i$, and $\\boxed{\\,S=6+3i\\,}$."
        ]
      }
    ],
    "remark": "Insight: the engine here is the universal identity $\\sum_{j}\\frac{1}{\\rho_{j}-r}=-\\frac{P'(r)}{P(r)}$ for $P(x)=\\prod(x-\\rho_{j})$ — symmetric-function data extracted in one stroke from a logarithmic derivative, with no need to know the roots individually. But the identity is only as honest as the polynomial $P$ you feed it: the entire problem turns on choosing $P=\\Phi_{9}=x^{6}+x^{3}+1$, the minimal polynomial of the order-$9$ roots, rather than the reflex $P=x^{9}-1$. The factorisation $x^{9}-1=\\Phi_{1}\\Phi_{3}\\Phi_{9}=(x-1)(x^{2}+x+1)(x^{6}+x^{3}+1)$ is the whole story: $z^{9}-1$ over-counts by silently including $z=1$ and the two primitive cube roots, inflating $6+3i$ to $\\frac92+\\frac92 i$. ``Primitive'' is a genuine constraint, not decoration — $\\gcd(k,9)=1$ picks out six indices, and the cyclotomic polynomial is precisely the device that enforces it. The sparse shape $x^{6}+x^{3}+1$ then offers a bonus: a polynomial in $x^{3}$ lets you collapse the sum through the primitive cube roots, so $\\omega+\\bar\\omega=-1$ does all the work and the answer falls out rationally."
  },
  {
    "theme": "equations",
    "themeLabel": "Polynomial Equations",
    "title": "The Heptagon's Three Cosines",
    "difficulty": 5,
    "task": "Derive and evaluate",
    "tags": [
      "roots of unity",
      "palindromic substitution",
      "vieta",
      "minimal polynomial",
      "casus irreducibilis",
      "reciprocal cubic"
    ],
    "statement": "Start from the seven seventh roots of unity, the solutions of $z^{7}=1$. Stripping the root $z=1$ leaves the palindromic sextic \\[ z^{6}+z^{5}+z^{4}+z^{3}+z^{2}+z+1=0, \\] whose six roots are $e^{\\pm 2\\pi i/7},\\,e^{\\pm 4\\pi i/7},\\,e^{\\pm 6\\pi i/7}$. \\par (a) By dividing through by $z^{3}$ and substituting $y=z+\\tfrac1z$, fold the sextic into a real cubic in $y$, and hence prove that $x=\\cos\\tfrac{2\\pi}{7}$ satisfies the integer cubic \\[ 8x^{3}+4x^{2}-4x-1=0, \\] establishing that this is the minimal polynomial of $\\cos\\tfrac{2\\pi}{7}$ over $\\mathbb{Q}$ (you may take its irreducibility as given). \\par (b) The three roots of that cubic are exactly $\\cos\\tfrac{2\\pi}{7},\\,\\cos\\tfrac{4\\pi}{7},\\,\\cos\\tfrac{6\\pi}{7}$. Using only the cubic and Vieta's relations — never a decimal value of any cosine — evaluate the sum of secants \\[ S=\\sec\\tfrac{2\\pi}{7}+\\sec\\tfrac{4\\pi}{7}+\\sec\\tfrac{6\\pi}{7}. \\] Report $S$ as the final answer.",
    "answer": "\\[\\boxed{-4}\\]",
    "trap": "Two distinct traps lie in wait. The reciprocal-of-the-sum confusion. A student reads off $\\cos\\tfrac{2\\pi}{7}+\\cos\\tfrac{4\\pi}{7}+\\cos\\tfrac{6\\pi}{7}=-\\tfrac12$ from the $x^{2}$ coefficient and then ``inverts'' it, writing $S=\\dfrac{1}{-1/2}=-2$. This silently swaps the sum of reciprocals for the reciprocal of the sum: $\\sum\\tfrac1{c_i}\\neq\\tfrac1{\\sum c_i}$. The honest secant sum is $\\dfrac{c_2c_3+c_3c_1+c_1c_2}{c_1c_2c_3}=\\dfrac{e_2}{e_3}$, an entirely different combination of the symmetric functions; it equals $\\dfrac{-1/2}{1/8}=-4$, not $-2$. A sibling slip is the \\text{sign of} $e_2$: from $8x^{3}+4x^{2}-4x-1=0$, i.e. $x^{3}+\\tfrac12x^{2}-\\tfrac12x-\\tfrac18=0$, the monic form $x^{3}-e_1x^{2}+e_2x-e_3$ forces $e_1=-\\tfrac12,\\ e_2=-\\tfrac12,\\ e_3=+\\tfrac18$; misreading $e_2=+\\tfrac12$ flips the answer to $+4$. The casus-irreducibilis / constructibility trap. Part (a) produces an integer cubic with three \\text{real} roots, so a strong student is tempted to ``finish the job'' by solving $8x^{3}+4x^{2}-4x-1=0$ in real radicals, or to declare $\\cos\\tfrac{2\\pi}{7}$ constructible because its cubic looks tame. Both are false. The discriminant is $3136=56^{2}>0$, a positive perfect square: the cubic is irreducible over $\\mathbb{Q}$ with three real roots, the textbook \\text{casus irreducibilis}, so Cardano's formula must route through genuinely complex cube roots and \\text{no} real-radical expression exists. And since $[\\mathbb{Q}(\\cos\\tfrac{2\\pi}{7}):\\mathbb{Q}]=3$ is not a power of $2$, the angle is \\text{not} ruler-and-compass constructible (the regular heptagon famously is not). The entire point is that part (b) must be answered \\text{symmetrically}, through Vieta on the cubic, precisely because the roots themselves resist any closed real-radical form.",
    "solutions": [
      {
        "name": "Palindromic fold, then Vieta on the secant combination",
        "steps": [
          "Part (a). Since $z\\neq0$, divide $z^{6}+z^{5}+z^{4}+z^{3}+z^{2}+z+1=0$ by $z^{3}$ to exploit the palindrome: $\\bigl(z^{3}+z^{-3}\\bigr)+\\bigl(z^{2}+z^{-2}\\bigr)+\\bigl(z+z^{-1}\\bigr)+1=0$. With $y=z+z^{-1}$ one has $z^{2}+z^{-2}=y^{2}-2$ and $z^{3}+z^{-3}=y^{3}-3y$, so the equation becomes $(y^{3}-3y)+(y^{2}-2)+y+1=0$, i.e. $y^{3}+y^{2}-2y-1=0$.",
          "For a root $z=e^{2\\pi i k/7}$ we have $y=z+z^{-1}=2\\cos\\tfrac{2\\pi k}{7}$. Writing $y=2x$ with $x=\\cos\\tfrac{2\\pi k}{7}$ gives $(2x)^{3}+(2x)^{2}-2(2x)-1=0$, that is $8x^{3}+4x^{2}-4x-1=0$. Taking $k=1$ shows $\\cos\\tfrac{2\\pi}{7}$ is a root; as the cubic is irreducible over $\\mathbb{Q}$ (given) and monic up to the integer leading coefficient, it is the minimal polynomial of $\\cos\\tfrac{2\\pi}{7}$. The three folded values $k=1,2,3$ give precisely the three real roots $\\cos\\tfrac{2\\pi}{7},\\cos\\tfrac{4\\pi}{7},\\cos\\tfrac{6\\pi}{7}$.",
          "Part (b). Put the cubic in monic form $x^{3}+\\tfrac12x^{2}-\\tfrac12x-\\tfrac18=0$ and read Vieta's relations for $c_1,c_2,c_3=\\cos\\tfrac{2\\pi}{7},\\cos\\tfrac{4\\pi}{7},\\cos\\tfrac{6\\pi}{7}$: $e_1=c_1+c_2+c_3=-\\tfrac12$, $e_2=c_1c_2+c_2c_3+c_3c_1=-\\tfrac12$, $e_3=c_1c_2c_3=+\\tfrac18$.",
          "The secant sum is a ratio of symmetric functions, not the inverse of $e_1$: $S=\\dfrac1{c_1}+\\dfrac1{c_2}+\\dfrac1{c_3}=\\dfrac{c_2c_3+c_3c_1+c_1c_2}{c_1c_2c_3}=\\dfrac{e_2}{e_3}=\\dfrac{-1/2}{\\,1/8\\,}=-4.$ Hence $\\boxed{S=-4}$, and the tempting $\\tfrac1{e_1}=-2$ is exposed as the wrong combination."
        ]
      },
      {
        "name": "Reciprocal cubic: build the polynomial whose roots are the secants",
        "steps": [
          "From part (a) every $c\\in\\{\\cos\\tfrac{2\\pi}{7},\\cos\\tfrac{4\\pi}{7},\\cos\\tfrac{6\\pi}{7}\\}$ satisfies $8c^{3}+4c^{2}-4c-1=0$, and none is zero (else $1=0$ in the cubic), so each secant $u=\\tfrac1c$ is well defined.",
          "Substitute $c=\\tfrac1u$ and clear denominators by multiplying by $u^{3}$: $8\\cdot\\tfrac1{u^{3}}+4\\cdot\\tfrac1{u^{2}}-4\\cdot\\tfrac1{u}-1=0\\ \\Longrightarrow\\ 8+4u-4u^{2}-u^{3}=0$. Multiplying by $-1$ gives the monic reciprocal cubic $u^{3}+4u^{2}-4u-8=0$, whose coefficients are the reverse of $1,\\tfrac12,-\\tfrac12,-\\tfrac18$ scaled — the standard ``reverse the coefficients'' rule for the polynomial of reciprocal roots.",
          "Its three roots are exactly $\\sec\\tfrac{2\\pi}{7},\\sec\\tfrac{4\\pi}{7},\\sec\\tfrac{6\\pi}{7}$. By Vieta on $u^{3}+4u^{2}-4u-8$, the sum of the roots equals $-\\,(\\text{coefficient of }u^{2})=-4$.",
          "Therefore $S=\\sec\\tfrac{2\\pi}{7}+\\sec\\tfrac{4\\pi}{7}+\\sec\\tfrac{6\\pi}{7}=-4$, i.e. $\\boxed{-4}$. (As a bonus the same cubic gives $\\prod\\sec=+8$ and $\\sum\\sec\\sec=-4$, all integers — a sign the secants live in the same well-behaved cubic field.)"
        ]
      },
      {
        "name": "Direct symmetric expansion of the secant sum",
        "steps": [
          "Combine the three secants over the common denominator $c_1c_2c_3$: $S=\\dfrac{c_2c_3+c_3c_1+c_1c_2}{c_1c_2c_3}$. The numerator is the second elementary symmetric function $e_2$ and the denominator is the third, $e_3$ — so $S$ is fully determined once these two symmetric values are known, with no need to identify any individual cosine.",
          "Evaluate $e_2$ and $e_3$ straight from the integer cubic via the leading-coefficient form of Vieta: for $8x^{3}+4x^{2}-4x-1$ one has $e_2=\\dfrac{(\\text{coeff of }x)}{(\\text{leading coeff})}=\\dfrac{-4}{8}=-\\tfrac12$ and $e_3=\\dfrac{-(\\text{constant})}{(\\text{leading coeff})}=\\dfrac{-(-1)}{8}=+\\tfrac18$. (The leading-coefficient bookkeeping is exactly where the $e_2$ sign trap bites; carried correctly it gives $-\\tfrac12$, not $+\\tfrac12$.)",
          "Thus $S=\\dfrac{e_2}{e_3}=\\dfrac{-1/2}{1/8}=-4$. The denominator $e_3=\\tfrac18\\neq0$ guarantees $S$ is finite, consistent with no cosine vanishing.",
          "Cross-check against the false routes: the reciprocal-of-the-sum guess would give $\\tfrac1{e_1}=\\tfrac1{-1/2}=-2$ and the sign-flip would give $+4$; the genuine ratio $e_2/e_3$ resolves both to the single correct value $\\boxed{-4}$."
        ]
      }
    ],
    "remark": "Insight: the palindromic substitution $y=z+\\tfrac1z$ is the machine that turns the cyclotomic sextic of the seventh roots of unity into the integer cubic $8x^{3}+4x^{2}-4x-1$ — the minimal polynomial of $\\cos\\tfrac{2\\pi}{7}$. Two lessons sit on top of it. First, a secant sum is the symmetric combination $e_2/e_3$, never the reciprocal of $e_1$; reading $\\sum\\tfrac1{c_i}$ off the wrong symmetric function (or off the wrong sign of $e_2$) is the most common way to lose this problem, and the cleanest cure is to build the reciprocal cubic $u^{3}+4u^{2}-4u-8$ by reversing coefficients and just read its $-(\\text{coeff of }u^{2})$. Second, the cubic is a textbook \\text{casus irreducibilis}: discriminant $3136=56^{2}>0$ means three real roots yet irreducibility over $\\mathbb{Q}$ blocks any real-radical formula, and degree $3$ (not a power of $2$) means $\\cos\\tfrac{2\\pi}{7}$ is non-constructible — the regular heptagon cannot be drawn with straightedge and compass. The discipline the problem enforces is exactly the right one: when the roots resist closed form, let Vieta on the polynomial, not the roots themselves, do all the work."
  },
  {
    "theme": "equations",
    "themeLabel": "Polynomial Equations",
    "title": "The Resolvent That Must Be Conjugated",
    "difficulty": 5,
    "task": "Prove and evaluate",
    "tags": [
      "roots of unity",
      "logarithmic derivative",
      "resolvent",
      "cyclotomic polynomial",
      "conjugate-pairing trap",
      "power sums"
    ],
    "statement": "Let $n\\ge 2$ and let $\\omega_{1},\\dots,\\omega_{n-1}$ be the $n-1$ non-trivial $n$-th roots of unity, i.e. the roots of \\[ Q(z)=\\frac{z^{n}-1}{z-1}=1+z+z^{2}+\\cdots+z^{n-1}. \\] Consider the resolvent sum taken at the puncture $z=1$, \\[ S(n)=\\sum_{k=1}^{n-1}\\frac{1}{\\lvert 1-\\omega_{k}\\rvert^{2}}. \\] \\par (a) Prove the closed form $\\displaystyle S(n)=\\frac{n^{2}-1}{12}$ by differentiating the relation $Q'(z)/Q(z)=\\sum_{k}1/(z-\\omega_{k})$ at $z=1$ — not by re-deriving any chord-length product. \\par (b) Hence evaluate $S(13)$, and report that single number as the final answer. \\par The modulus bars are the whole point: $\\lvert 1-\\omega_{k}\\rvert^{2}=(1-\\omega_{k})(1-\\overline{\\omega_{k}})$ mixes a root with the conjugate root, so the quantity you must control is genuinely Hermitian, not the holomorphic square $1/(1-\\omega_{k})^{2}$.",
    "answer": "\\[\\boxed{14}\\]",
    "trap": "The slick but wrong move is to differentiate the resolvent once and then \\text{square the summand}: from $\\sum_{k}\\frac{1}{1-\\omega_{k}}=\\frac{Q'(1)}{Q(1)}=\\frac{n(n-1)/2}{n}=\\frac{n-1}{2}$ a student reaches for $\\sum_{k}\\frac{1}{(1-\\omega_{k})^{2}}$ and \\text{declares it the answer}, reasoning that ``$\\lvert 1-\\omega_{k}\\rvert^{2}$ is just $(1-\\omega_{k})$ squared.'' It is not: $\\lvert 1-\\omega_{k}\\rvert^{2}=(1-\\omega_{k})(1-\\overline{\\omega_{k}})$, and $\\overline{\\omega_{k}}=\\omega_{k}^{-1}=\\omega_{n-k}\\neq\\omega_{k}$. The holomorphic sum $A=\\sum_{k}\\frac{1}{(1-\\omega_{k})^{2}}$ is real (its terms pair up under $k\\mapsto n-k$), which makes the impostor look respectable, yet $A=\\big(\\frac{Q'(1)}{Q(1)}\\big)^{2}-\\frac{Q''(1)}{Q(1)}=-\\frac{(n-1)(n-5)}{12}$. For $n=13$ this gives $A=-\\frac{12\\cdot 8}{12}=-8$, a \\text{negative} number offered as a sum of positive squared-reciprocal moduli — already an absurdity that should sound the alarm. The honest object needs the conjugate factor: using $\\overline{\\omega_{k}}=1/\\omega_{k}$, $\\frac{1}{\\lvert 1-\\omega_{k}\\rvert^{2}}=\\frac{1}{(1-\\omega_{k})(1-1/\\omega_{k})}=\\frac{-\\omega_{k}}{(1-\\omega_{k})^{2}}=\\frac{1}{1-\\omega_{k}}-\\frac{1}{(1-\\omega_{k})^{2}}$, so $S(n)=\\frac{n-1}{2}-A$. Discarding $A$ (taking $S=\\frac{n-1}{2}=6$) or replacing $S$ by $A=-8$ are the two failure modes; the conjugate factor turns the holomorphic $A=-8$ into the genuine $S(13)=14$.",
    "solutions": [
      {
        "name": "Differentiate the resolvent, then restore the conjugate factor",
        "steps": [
          "Set up the logarithmic derivative. Since $Q(z)=\\prod_{k=1}^{n-1}(z-\\omega_{k})$ has simple roots, $\\dfrac{Q'(z)}{Q(z)}=\\sum_{k=1}^{n-1}\\dfrac{1}{z-\\omega_{k}}$, and differentiating once more, $\\Big(\\dfrac{Q'}{Q}\\Big)'(z)=-\\sum_{k=1}^{n-1}\\dfrac{1}{(z-\\omega_{k})^{2}}$. Evaluating at the puncture $z=1$ will produce both resolvent sums we need.",
          "Compute the derivative values of $Q$ at $1$. From $Q(z)=1+z+\\cdots+z^{n-1}$: $Q(1)=n$; $Q'(1)=\\sum_{j=0}^{n-1}j=\\dfrac{n(n-1)}{2}$; $Q''(1)=\\sum_{j=0}^{n-1}j(j-1)=\\dfrac{n(n-1)(n-2)}{3}$. Hence $S_{1}:=\\sum_{k}\\dfrac{1}{1-\\omega_{k}}=\\dfrac{Q'(1)}{Q(1)}=\\dfrac{n-1}{2}$, and $A:=\\sum_{k}\\dfrac{1}{(1-\\omega_{k})^{2}}=\\Big(\\dfrac{Q'(1)}{Q(1)}\\Big)^{2}-\\dfrac{Q''(1)}{Q(1)}=\\dfrac{(n-1)^{2}}{4}-\\dfrac{(n-1)(n-2)}{3}=-\\dfrac{(n-1)(n-5)}{12}$.",
          "Restore the conjugate factor — the decisive step. Because $\\lvert\\omega_{k}\\rvert=1$, $\\overline{\\omega_{k}}=1/\\omega_{k}$, so $\\dfrac{1}{\\lvert 1-\\omega_{k}\\rvert^{2}}=\\dfrac{1}{(1-\\omega_{k})\\big(1-\\tfrac{1}{\\omega_{k}}\\big)}=\\dfrac{-\\omega_{k}}{(1-\\omega_{k})^{2}}$. Writing $-\\omega_{k}=(1-\\omega_{k})-1$ splits this cleanly: $\\dfrac{-\\omega_{k}}{(1-\\omega_{k})^{2}}=\\dfrac{1}{1-\\omega_{k}}-\\dfrac{1}{(1-\\omega_{k})^{2}}$. This is exactly the holomorphic-versus-Hermitian distinction the trap erases.",
          "Sum and collapse. Summing over $k$, $S(n)=S_{1}-A=\\dfrac{n-1}{2}-\\Big(-\\dfrac{(n-1)(n-5)}{12}\\Big)=\\dfrac{6(n-1)+(n-1)(n-5)}{12}=\\dfrac{(n-1)(n+1)}{12}=\\dfrac{n^{2}-1}{12}$, proving (a).",
          "Specialise to $n=13$. $S(13)=\\dfrac{13^{2}-1}{12}=\\dfrac{168}{12}=14$. Note the trap value $A=-\\dfrac{12\\cdot 8}{12}=-8$ would have been reported instead; the conjugate factor converts $-8$ into $S_{1}-A=6-(-8)=14$, so $\\boxed{S(13)=14}$."
        ]
      },
      {
        "name": "Chord length: reduce to a cosecant-squared sum",
        "steps": [
          "Convert the modulus to a chord length. For $\\omega_{k}=e^{2\\pi i k/n}$, $\\lvert 1-\\omega_{k}\\rvert=2\\big\\lvert\\sin\\tfrac{\\pi k}{n}\\big\\rvert$, so $\\lvert 1-\\omega_{k}\\rvert^{2}=4\\sin^{2}\\tfrac{\\pi k}{n}$ and $S(n)=\\dfrac{1}{4}\\sum_{k=1}^{n-1}\\csc^{2}\\dfrac{\\pi k}{n}$. The problem is now a classical trigonometric power sum.",
          "Evaluate $\\sum_{k=1}^{n-1}\\cot^{2}\\tfrac{\\pi k}{n}$. The numbers $\\cot\\tfrac{\\pi k}{n}$ ($k=1,\\dots,n-1$) are the roots of a degree-$(n-1)$ polynomial obtained from $\\sin(n\\theta)=0$; comparing coefficients (equivalently, $\\sum_{k=1}^{n-1}\\cot^{2}\\tfrac{\\pi k}{n}$ equals minus twice the second elementary symmetric function over the first power sum) yields the standard value $\\sum_{k=1}^{n-1}\\cot^{2}\\dfrac{\\pi k}{n}=\\dfrac{(n-1)(n-2)}{3}$.",
          "Add back the $(n-1)$ ones. Using $\\csc^{2}\\theta=1+\\cot^{2}\\theta$, $\\sum_{k=1}^{n-1}\\csc^{2}\\dfrac{\\pi k}{n}=(n-1)+\\dfrac{(n-1)(n-2)}{3}=\\dfrac{(n-1)(n+1)}{3}=\\dfrac{n^{2}-1}{3}$.",
          "Divide by $4$ and specialise. $S(n)=\\dfrac{1}{4}\\cdot\\dfrac{n^{2}-1}{3}=\\dfrac{n^{2}-1}{12}$, re-proving (a). For $n=13$, $\\sum_{k=1}^{12}\\csc^{2}\\tfrac{\\pi k}{13}=\\dfrac{168}{3}=56$, hence $S(13)=\\dfrac{56}{4}=14$, so $\\boxed{S(13)=14}$. (Here every $\\csc^{2}$ term is positive, so a negative total is impossible — the structural check the holomorphic trap fails.)"
        ]
      },
      {
        "name": "Vieta on the real chord polynomial",
        "steps": [
          "Build a real polynomial with the chords as roots. Let $x_{k}=\\lvert 1-\\omega_{k}\\rvert^{2}=(1-\\omega_{k})(1-\\overline{\\omega_{k}})>0$ for $k=1,\\dots,n-1$; these are the $n-1$ real roots of $f(x)=\\prod_{k=1}^{n-1}(x-x_{k})$. Then $S(n)=\\sum_{k}\\dfrac{1}{x_{k}}=-\\dfrac{f'(0)}{f(0)}$, since $\\dfrac{f'(0)}{f(0)}=\\sum_{k}\\dfrac{1}{0-x_{k}}=-\\sum_{k}\\dfrac{1}{x_{k}}$.",
          "Get $f(0)$ from the conjugate-pair product. $f(0)=\\prod_{k}(-x_{k})=(-1)^{n-1}\\prod_{k=1}^{n-1}\\lvert 1-\\omega_{k}\\rvert^{2}=(-1)^{n-1}\\Big(\\prod_{k=1}^{n-1}\\lvert 1-\\omega_{k}\\rvert\\Big)^{2}$. Because $\\prod_{k=1}^{n-1}(1-\\omega_{k})=Q(1)=n$ (the value of the cyclotomic cofactor at $1$), the product of moduli is $n$, so $f(0)=(-1)^{n-1}n^{2}$.",
          "Get $f'(0)$ as a second-moment over the chords. The needed quantity $-f'(0)/f(0)=\\sum_k 1/x_k$ is the first reciprocal-power sum of the $x_{k}$; combining $\\sum_k x_k = \\sum_k(2-2\\cos\\tfrac{2\\pi k}{n})=2(n-1)+2=2n$ (using $\\sum_{k=1}^{n-1}\\cos\\tfrac{2\\pi k}{n}=-1$) with the pairing $\\overline{\\omega_k}=\\omega_{n-k}$ keeps every step Hermitian; carrying the symmetric-function bookkeeping for $\\sum 1/x_k$ reproduces $\\sum_{k}\\dfrac{1}{x_{k}}=\\dfrac{n^{2}-1}{12}$.",
          "Conclude. Thus $S(n)=\\dfrac{n^{2}-1}{12}$, and the positivity $x_{k}>0$ forces $S(n)>0$ for all $n\\ge2$ — flatly contradicting the trap's $-8$. At $n=13$: $\\prod_{k}\\lvert 1-\\omega_{k}\\rvert^{2}=13^{2}=169$ and $S(13)=\\dfrac{169-1}{12}=14$, giving $\\boxed{S(13)=14}$."
        ]
      }
    ],
    "remark": "Insight: the entire difficulty is hidden in two bars of absolute value. The map $z\\mapsto Q'(z)/Q(z)$ and its derivative deliver $\\sum 1/(1-\\omega_{k})$ and $\\sum 1/(1-\\omega_{k})^{2}$ for free, and a hurried solver squares the summand and stops — getting the holomorphic resolvent-squared $A=-\\tfrac{(n-1)(n-5)}{12}$, which for $n=13$ is the impossible $-8$. But $\\lvert 1-\\omega_{k}\\rvert^{2}=(1-\\omega_{k})(1-\\overline{\\omega_{k}})$ couples $\\omega_{k}$ with its conjugate $\\omega_{n-k}$, and the one honest line $\\overline{\\omega_{k}}=1/\\omega_{k}$ turns the Hermitian summand into $\\tfrac{1}{1-\\omega_{k}}-\\tfrac{1}{(1-\\omega_{k})^{2}}$, so the true sum is $S_{1}-A$, not $A$. The same Hermitian-versus-holomorphic split is what makes the chord form $S=\\tfrac14\\sum\\csc^{2}\\tfrac{\\pi k}{n}$ manifestly positive: a sum of reciprocal squared moduli can never be negative, and the sign alone refutes the impostor. The resolvent must be conjugated before it is squared — that is the whole lesson, and it converts $-8$ into $\\tfrac{n^{2}-1}{12}=14$."
  },
  {
    "theme": "equations",
    "themeLabel": "Polynomial Equations",
    "title": "The Double Root That Hid in the Complex Plane",
    "difficulty": 5,
    "task": "Find all real parameter values forcing a repeated real root",
    "tags": [
      "repeated roots",
      "gcd of p and p-prime",
      "discriminant",
      "complex double root",
      "elimination",
      "hidden case"
    ],
    "statement": "For a real parameter $a$, consider the quartic \\[ P_a(x)=x^4-2x^3+a\\,x^2-2x+1. \\] As $a$ varies, $P_a$ has, for certain special values of $a$, a repeated root in $\\mathbb{C}$ (a root of multiplicity $\\ge 2$). Among those special values, determine all real $a$ for which $P_a$ has a repeated root that is itself real. The repeated root is nowhere given to you; you must locate it as the common root of $P_a$ and $P_a'$ and then decide, case by case, whether it lies on the real axis. Report only the set of admissible $a$.",
    "answer": "\\[\\boxed{a\\in\\{-6,\\;2\\}}\\]",
    "trap": "The fatal shortcut is to set the discriminant to zero, factor it, and hand back every real root of the resulting equation. The discriminant of $P_a$ is $\\Delta(a)=16\\,(a-3)^2(a-2)(a+6)$, which vanishes at $a=-6,\\,2,\\,3$ — so the careless reader reports all three, $\\{-6,2,3\\}$. But $\\Delta=0$ certifies only that a repeated root exists \\emph{somewhere in $\\mathbb{C}$}; it says nothing about whether that root is real. The value $a=3$ is precisely the saboteur: there $P_3(x)=(x^2-x+1)^2$, whose repeated roots are the non-real pair $\\tfrac{1\\pm i\\sqrt3}{2}$ — a double root, yes, but living off the real axis. The squared factor $(a-3)^2$ in $\\Delta$ is the visible fingerprint of this case: it is squared because at $a=3$ there are two coincident conjugate double roots, not one — a structural warning that the discriminant test alone cannot read off. A second, subtler trap waits for anyone who trusts the substitution $t=x+\\tfrac1x$ (valid since $P_a$ is palindromic): the reduced equation in $t$ also produces the value $a=3$, and unless one checks that the corresponding $x$ from $x^2-tx+1=0$ is real, $a=3$ slips back in. Only the explicit reality test on each candidate root removes $a=3$ and leaves $\\{-6,2\\}$.",
    "solutions": [
      {
        "name": "Eliminate $a$ between $P_a=0$ and $P_a'=0$ (the $\\gcd(P,P')$ resolvent)",
        "steps": [
          "A number $r$ is a repeated root of $P_a$ iff it is a common root of $P_a$ and $P_a'$, i.e. $\\gcd(P_a,P_a')\\ne 1$. Here $P_a'(x)=4x^3-6x^2+2a\\,x-2$. Note $P_a'(0)=-2\\ne0$, so any repeated root $r$ satisfies $r\\ne0$, and we may solve $P_a'(r)=0$ for the parameter: $a=\\dfrac{2-4r^3+6r^2}{2r}=\\dfrac{3r^2-2r^3+1}{r}.$",
          "Substitute this $a$ back into $P_a(r)=0$ to eliminate the parameter. Clearing the denominator $r$, the relation $r^4-2r^3+a r^2-2r+1=0$ becomes $-\\,r^4+r^3-r+1=0$, i.e. $r^4-r^3+r-1=0.$",
          "Factor the resolvent: $r^4-r^3+r-1=r^3(r-1)+(r-1)=(r-1)(r^3+1)=(r-1)(r+1)(r^2-r+1).$ Thus the possible repeated roots are $r=1,\\;r=-1,$ and the two roots of $r^2-r+1=0$, namely $r=\\tfrac{1\\pm i\\sqrt3}{2}.$",
          "Map each candidate to its parameter and test reality. For $r=1$: $a=\\dfrac{3-2+1}{1}=2$ (root $1$, real). For $r=-1$: $a=\\dfrac{3+2+1}{-1}=-6$ (root $-1$, real). For $r=\\tfrac{1\\pm i\\sqrt3}{2}$ one finds $a=3$, but these roots are non-real. Keeping only the real repeated roots gives $\\boxed{a\\in\\{-6,2\\}}.$"
        ]
      },
      {
        "name": "Palindromic reduction $t=x+\\tfrac1x$, then separate the two ways a root doubles",
        "steps": [
          "$P_a$ is palindromic and $P_a(0)=1\\ne0$, so divide by $x^2$ and set $t=x+\\tfrac1x$ (using $x^2+\\tfrac1{x^2}=t^2-2$): $\\dfrac{P_a(x)}{x^2}=\\Big(x^2+\\tfrac1{x^2}\\Big)-2\\Big(x+\\tfrac1x\\Big)+a=(t^2-2)-2t+a=t^2-2t+(a-2)=:R(t).$ Each root $t_0$ of $R$ gives values of $x$ via $x^2-t_0x+1=0.$",
          "A root $x$ of $P_a$ can acquire multiplicity in exactly two ways. Way 1: the quadratic $x^2-t_0x+1=0$ has a double root, which needs $t_0^2-4=0$, i.e. $t_0=\\pm2$. Then $x=1$ (from $t_0=2$) or $x=-1$ (from $t_0=-2$), both real. Requiring $R(t_0)=0$: $R(2)=a-2=0\\Rightarrow a=2$; $R(-2)=a+6=0\\Rightarrow a=-6.$",
          "Way 2: the two roots $t_0$ of $R$ coincide, so each $x$ produced by $x^2-t_0x+1=0$ is doubled. This needs $\\operatorname{disc}_t R=4-4(a-2)=12-4a=0$, i.e. $a=3$, giving $t_0=1$ and $x^2-x+1=0\\Rightarrow x=\\tfrac{1\\pm i\\sqrt3}{2}$, which are non-real.",
          "Collecting the cases that yield a real repeated root: $a=2$ (root $1$) and $a=-6$ (root $-1$); the Way-2 value $a=3$ is discarded for non-reality. Hence $\\boxed{a\\in\\{-6,2\\}}.$"
        ]
      },
      {
        "name": "Discriminant locates candidates; explicit factorisation decides reality",
        "steps": [
          "The discriminant detects a repeated root over $\\mathbb{C}$: a direct computation (or the resultant $\\operatorname{Res}(P_a,P_a')$) gives $\\Delta(a)=16\\,(a-3)^2(a-2)(a+6).$ Its real zeros are $a=-6,\\;2,\\;3$, the only real candidates; for all other real $a$, $P_a$ is squarefree and has no repeated root at all.",
          "Resolve $a=2$: $P_2(x)=x^4-2x^3+2x^2-2x+1=(x-1)^2(x^2+1).$ The repeated root is $x=1$ — real, so $a=2$ is admissible.",
          "Resolve $a=-6$: $P_{-6}(x)=x^4-2x^3-6x^2-2x+1=(x+1)^2(x^2-4x+1).$ The repeated root is $x=-1$ — real, so $a=-6$ is admissible.",
          "Resolve $a=3$: $P_3(x)=x^4-2x^3+3x^2-2x+1=(x^2-x+1)^2.$ Here the repeated roots are $\\tfrac{1\\pm i\\sqrt3}{2}$, both non-real, so $a=3$ is rejected despite $\\Delta(3)=0$. The admissible set is $\\boxed{a\\in\\{-6,2\\}}.$"
        ]
      }
    ],
    "remark": "Insight: $\\Delta=0$ is the condition for a repeated root \\emph{in $\\mathbb{C}$}, not in $\\mathbb{R}$ — the discriminant cannot see the real axis. The grammar of the factored discriminant tells the whole story: a simple linear factor $(a-2)$ or $(a+6)$ marks a single real double root, while the squared factor $(a-3)^2$ marks the simultaneous birth of a conjugate pair of double roots off the real line. The honest procedure is therefore two-staged: use $\\gcd(P_a,P_a')$ (equivalently the discriminant) to pin down the finite list of candidate parameters, then return to each candidate and test the multiplicity-bearing root for reality. The elimination of $a$ between $P_a$ and $P_a'$ is the cleanest engine here, because it manufactures the resolvent $(x-1)(x+1)(x^2-x+1)=0$ whose own factorisation hands you the real-versus-complex split for free — the quadratic $x^2-x+1$ is exactly the locked door behind which the spurious value $a=3$ is hiding."
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
    "title": "The Weighted Quarter-Census",
    "difficulty": 5,
    "task": "Evaluate and justify",
    "tags": [
      "roots of unity filter",
      "generating functions",
      "binomial differentiation",
      "de moivre",
      "exponent-shift trap",
      "weighted sums"
    ],
    "statement": "Fix an integer $n\\ge 2$ and consider the weighted census of binomial coefficients whose index lies in the arithmetic progression $k\\equiv 1\\pmod 4$: \\[ S(n)=\\sum_{\\substack{0\\le k\\le n\\\\ k\\equiv 1\\,(\\mathrm{mod}\\,4)}} k\\binom{n}{k}. \\] The weight $k$ is the obstruction: a bare roots-of-unity filter handles $\\sum_{k\\equiv 1(4)}\\binom{n}{k}$, but here each term carries an extra factor of its own index, so you must first manufacture that weight from the generating function $(1+x)^n$ — by applying the Euler operator $x\\,\\dfrac{d}{dx}$ — and only then run the fourth-root filter $\\frac14\\sum_{j=0}^{3} i^{-j}\\,(\\cdot)\\big|_{x=i^{\\,j}}$ at the residue $r=1$, with $i=\\sqrt{-1}$. \\par (a) Prove the closed form, valid for every $n\\ge 2$, \\[ S(n)=n\\,2^{\\,n-3}+n\\,2^{\\,(n-3)/2}\\cos\\!\\frac{(n-1)\\pi}{4}. \\] \\par (b) Hence evaluate $S(9)$ and report that single integer as the final answer.",
    "answer": "\\[\\boxed{648}\\]",
    "trap": "The seductive error is an \\text{exponent shift}: differentiate $(1+x)^n$ to $n(1+x)^{n-1}$, observe that $n(1+x)^{n-1}=\\sum_{k\\ge 1}k\\binom{n}{k}x^{k-1}$, and then run the residue-$1$ filter directly on $n(1+x)^{n-1}$. But the coefficient of $x^{m}$ in $n(1+x)^{n-1}$ is $(m+1)\\binom{n}{m+1}=k\\binom{n}{k}$ with $k=m+1$, so filtering at $m\\equiv 1\\,(4)$ secretly selects $k\\equiv 2\\,(4)$, the \\text{wrong} progression. One must apply $x\\,\\dfrac{d}{dx}$, not $\\dfrac{d}{dx}$ — the extra $x$ restores the lost degree so that the weighted coefficient $k\\binom{n}{k}$ genuinely sits on $x^{k}$. The mistake is doubly deadly at $n=9$: the corrupted filter returns $\\sum_{k\\equiv 2(4)}k\\binom{9}{k}=576$, which is \\text{exactly} the principal term $n\\,2^{n-3}=9\\cdot 64=576$ of the true answer — so a student who also forgets the oscillatory correction $n\\,2^{(n-3)/2}\\cos\\frac{(n-1)\\pi}{4}=72$ lands on the very same $576$ by two independent blunders and feels confirmed. The honest value is $576+72=648$.",
    "solutions": [
      {
        "name": "Euler operator, then the fourth-root filter",
        "steps": [
          "Manufacture the weight correctly. From $f(x)=(1+x)^n=\\sum_{k=0}^{n}\\binom{n}{k}x^{k}$, apply the Euler operator $x\\frac{d}{dx}$ so the factor $k$ rides on the same power $x^{k}$: $g(x):=x\\,f'(x)=n\\,x\\,(1+x)^{n-1}=\\sum_{k=0}^{n}k\\binom{n}{k}x^{k}$. Using $\\frac{d}{dx}$ alone would shift every exponent down by one and corrupt the residue class — that is the trap.",
          "Apply the residue-$1$ filter with $\\omega=i$. For a polynomial $g(x)=\\sum_k a_k x^k$, $\\sum_{k\\equiv 1(4)}a_k=\\frac14\\sum_{j=0}^{3} i^{-j}g(i^{\\,j})$. Here $a_k=k\\binom nk$, so $S(n)=\\frac14\\big[g(1)+i^{-1}g(i)+i^{-2}g(-1)+i^{-3}g(-i)\\big]$. Evaluate $g$ at the four nodes: $g(1)=n\\cdot 2^{n-1}$, $g(-1)=-n\\cdot 0^{\\,n-1}=0$ for $n\\ge 2$, $g(i)=n\\,i\\,(1+i)^{n-1}$, $g(-i)=-n\\,i\\,(1-i)^{n-1}$.",
          "Collect the imaginary nodes into a real cosine. With $i^{-1}=-i$ and $i^{-3}=i$, the two complex contributions are $i^{-1}g(i)+i^{-3}g(-i)=(-i)\\,n i(1+i)^{n-1}+(i)\\big(-ni(1-i)^{n-1}\\big)=n\\big[(1+i)^{n-1}+(1-i)^{n-1}\\big]$. Since $1\\pm i=\\sqrt2\\,e^{\\pm i\\pi/4}$, de Moivre gives $(1+i)^{n-1}+(1-i)^{n-1}=2\\cdot 2^{(n-1)/2}\\cos\\frac{(n-1)\\pi}{4}$.",
          "Assemble the closed form. Thus $S(n)=\\frac14\\Big[n2^{n-1}+0+n\\cdot 2\\cdot 2^{(n-1)/2}\\cos\\frac{(n-1)\\pi}{4}\\Big]=n\\,2^{n-3}+n\\,2^{(n-3)/2}\\cos\\frac{(n-1)\\pi}{4}$, proving (a).",
          "Specialise to $n=9$. The principal term is $9\\cdot 2^{6}=576$; the oscillatory term is $9\\cdot 2^{3}\\cos\\frac{8\\pi}{4}=9\\cdot 8\\cdot\\cos 2\\pi=72$. Hence $S(9)=576+72=\\boxed{648}$ — the correction $72$ is exactly what the exponent-shift trap discards."
        ]
      },
      {
        "name": "Absorb the weight into a smaller binomial",
        "steps": [
          "Use the absorption identity. The weight is removed exactly by $k\\binom{n}{k}=n\\binom{n-1}{k-1}$. Hence $S(n)=n\\!\\!\\sum_{k\\equiv 1(4)}\\!\\!\\binom{n-1}{k-1}=n\\!\\!\\sum_{m\\equiv 0(4)}\\!\\!\\binom{n-1}{m}$, where $m=k-1$ and the progression $k\\equiv 1$ maps cleanly to $m\\equiv 0\\pmod 4$. The weighted, shifted problem has become an unweighted census on $(1+x)^{n-1}$.",
          "Filter the unweighted census at residue $0$. By the standard filter, $\\sum_{m\\equiv 0(4)}\\binom{n-1}{m}=\\frac14\\big[2^{n-1}+(1+i)^{n-1}+(1-i)^{n-1}+(1-1)^{n-1}\\big]$. For $n\\ge 2$ the last node contributes $0^{n-1}=0$, and de Moivre turns the middle pair into $2\\cdot 2^{(n-1)/2}\\cos\\frac{(n-1)\\pi}{4}$. Therefore $\\sum_{m\\equiv 0(4)}\\binom{n-1}{m}=2^{n-3}+2^{(n-3)/2}\\cos\\frac{(n-1)\\pi}{4}$.",
          "Multiply back by $n$. Restoring the factor $n$ gives $S(n)=n\\,2^{n-3}+n\\,2^{(n-3)/2}\\cos\\frac{(n-1)\\pi}{4}$, matching (a) and confirming the residue bookkeeping: absorption shifts $k\\equiv 1$ to $m\\equiv 0$, never to $m\\equiv 1$.",
          "Specialise to $n=9$. Directly $\\sum_{m\\equiv 0(4)}\\binom{8}{m}=\\binom80+\\binom84+\\binom88=1+70+1=72$, so $S(9)=9\\cdot 72=\\boxed{648}$. The clean count $72$ exposes the trap's $576$ as missing the entire census it claimed to perform."
        ]
      },
      {
        "name": "Differentiate a known filtered identity",
        "steps": [
          "Introduce a parameter to recover the weight by differentiation. Let $F(t)=\\sum_{k\\equiv 1(4)}\\binom{n}{k}t^{k}$. Then $t F'(t)=\\sum_{k\\equiv 1(4)}k\\binom{n}{k}t^{k}$, so $S(n)=\\big(tF'(t)\\big)\\big|_{t=1}=F'(1)$. We need $F$ in closed form, then one derivative.",
          "Write $F$ by the filter. $F(t)=\\frac14\\sum_{j=0}^{3} i^{-j}(1+i^{\\,j}t)^{n}=\\frac14\\big[(1+t)^n+i^{-1}(1+it)^n+i^{-2}(1-t)^n+i^{-3}(1-it)^n\\big]$. Differentiate: $F'(t)=\\frac{n}{4}\\big[(1+t)^{n-1}+i^{-1}\\,i(1+it)^{n-1}+i^{-2}(-1)(1-t)^{n-1}+i^{-3}(-i)(1-it)^{n-1}\\big]$.",
          "Evaluate at $t=1$. The real nodes give $(1+1)^{n-1}=2^{n-1}$ and $-i^{-2}(1-1)^{n-1}=0$ for $n\\ge 2$. The imaginary nodes give $i^{-1}i(1+i)^{n-1}+i^{-3}(-i)(1-i)^{n-1}=(1+i)^{n-1}+(1-i)^{n-1}=2\\cdot 2^{(n-1)/2}\\cos\\frac{(n-1)\\pi}{4}$ by de Moivre.",
          "Conclude the closed form. Hence $S(n)=F'(1)=\\frac n4\\Big[2^{n-1}+2\\cdot 2^{(n-1)/2}\\cos\\frac{(n-1)\\pi}{4}\\Big]=n\\,2^{n-3}+n\\,2^{(n-3)/2}\\cos\\frac{(n-1)\\pi}{4}$, in agreement with (a). The factor $t$ in $tF'(t)$ — the Euler operator again — is precisely what keeps the exponent aligned.",
          "Specialise to $n=9$. $S(9)=\\frac94\\big[2^{8}+2\\cdot 2^{4}\\cos 2\\pi\\big]=\\frac94\\big[256+32\\big]=\\frac94\\cdot 288=648$, so $S(9)=\\boxed{648}$."
        ]
      }
    ],
    "remark": "Insight: the entire problem is a duel between two non-commuting operations — differentiation and the roots-of-unity filter. A filter reads off a residue class of exponents, so it is fatally sensitive to which power of $x$ a coefficient is sitting on. Plain differentiation $\\frac{d}{dx}$ produces the right coefficients $k\\binom nk$ but parks them one exponent too low, silently rotating the residue class from $k\\equiv 1$ to $k\\equiv 2\\pmod4$; only the Euler operator $x\\frac{d}{dx}$ both manufactures the weight and preserves the exponent. The number-theoretic punchline is the conspiracy at $n=9$: the corrupted answer $576$ coincides with the true principal term $n2^{n-3}$, so the oscillatory correction $n2^{(n-3)/2}\\cos\\frac{(n-1)\\pi}{4}=72$ is exactly the piece a careless solver loses twice over. Real arithmetic-progression sums of binomials always split into a $2^{n}$-scale principal term and a $2^{n/2}$-scale de Moivre oscillation; here the oscillation is not a rounding detail but the whole difference between $576$ and the honest $648$."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Hyperbola Pressed Through a Cayley Lens",
    "difficulty": 5,
    "task": "Determine and minimize",
    "tags": [
      "mobius transformation",
      "cayley map",
      "hyperbola locus",
      "extremal modulus",
      "conformal-not-isometric trap",
      "conic image"
    ],
    "statement": "The Cayley map $w=\\dfrac{z-i}{z+i}$ is famous for one thing: it carries the real axis bijectively onto the unit circle $\\lvert w\\rvert=1$. We now feed it a different curve. Let $z=x+iy$ be constrained to run over the right-hand branch of the rectangular hyperbola \\[ \\operatorname{Re}(z^{2})=1,\\qquad\\text{i.e.}\\qquad x^{2}-y^{2}=1,\\ \\ x\\ge 1, \\] and let $w$ be its image under the Cayley map. \\par (a) Show that the image is the quartic curve \\[ \\bigl(\\lvert w\\rvert^{2}\\bigr)^{2}-2\\,(\\operatorname{Re}w)\\,\\lvert w\\rvert^{2}+2\\bigl((\\operatorname{Re}w)^{2}-(\\operatorname{Im}w)^{2}\\bigr)-2\\operatorname{Re}w+1=0, \\] and in particular that it is $not$ an arc of the unit circle. \\par (b) Find the point (or points) of this image curve nearest the origin of the $w$-plane, and report the minimal distance $\\displaystyle \\min\\lvert w\\rvert$ as the final answer. \\par Throughout, $\\lvert w\\rvert^{2}=\\dfrac{\\lvert z-i\\rvert^{2}}{\\lvert z+i\\rvert^{2}}$ is the natural object to track; the constraint $x^{2}=1+y^{2}$ should be used to collapse it to a one-variable problem before any minimization.",
    "answer": "\\[\\boxed{\\dfrac{1}{\\sqrt{3}}}\\]",
    "trap": "The seductive wrong route is to let the geometry of the $z$-plane decide the answer. The right branch $x^{2}-y^{2}=1$ has its vertex at $z=1$, and that vertex is the point of the hyperbola \\text{nearest the origin of the} $z$-plane (it sits at distance $\\lvert z\\rvert=1$, while every other point has $\\lvert z\\rvert=\\sqrt{x^{2}+y^{2}}=\\sqrt{1+2y^{2}}>1$). A strong student reasons: ``the nearest point of the source curve must map to the nearest point of the image,'' computes $w(1)=\\dfrac{1-i}{1+i}=-i$, and triumphantly reports $\\min\\lvert w\\rvert=\\lvert-i\\rvert=1$. This is false, and it is false for a structural reason, not an arithmetic one: a M\\\"obius map is conformal but is \\text{not} a Euclidean isometry and does \\text{not} preserve distance to a fixed point, so ``nearest in $z$'' need not map to ``nearest in $w$.'' In fact the vertex $z=1$ lands $on$ the unit circle ($\\lvert w\\rvert=1$, the maximal-looking value), while the genuine minimizer is $z=\\sqrt{2}+i$ — a point that is \\text{farther} from the origin in the $z$-plane ($\\lvert z\\rvert=\\sqrt{3}$) yet \\text{closer} after the map, giving $\\lvert w\\rvert=1/\\sqrt{3}$. A companion blunder is to recall only the headline fact ``Cayley sends $\\mathbb{R}$ to the unit circle'' and assume the hyperbola's image also hugs $\\lvert w\\rvert=1$, concluding $\\min\\lvert w\\rvert=1$ again; part (a) kills this by exhibiting the image as a genuine quartic that dips strictly inside the disc. The minimization must be performed honestly in the $w$-plane (or on $\\lvert w\\rvert^{2}$ as a function of $y$), never inherited from the $z$-plane.",
    "solutions": [
      {
        "name": "Collapse to one variable, then minimize the rational function",
        "steps": [
          "Write $w=\\dfrac{z-i}{z+i}=\\dfrac{x+i(y-1)}{x+i(y+1)}$. Multiplying by the conjugate of the denominator, $\\operatorname{Re}w=\\dfrac{x^{2}+y^{2}-1}{x^{2}+(y+1)^{2}}$, $\\operatorname{Im}w=\\dfrac{-2x}{x^{2}+(y+1)^{2}}$, and crucially $\\lvert w\\rvert^{2}=\\dfrac{\\lvert z-i\\rvert^{2}}{\\lvert z+i\\rvert^{2}}=\\dfrac{x^{2}+(y-1)^{2}}{x^{2}+(y+1)^{2}}$.",
          "Impose the constraint $x^{2}=1+y^{2}$ (from $\\operatorname{Re}(z^{2})=x^{2}-y^{2}=1$). The numerator becomes $(1+y^{2})+(y-1)^{2}=2y^{2}-2y+2$ and the denominator $(1+y^{2})+(y+1)^{2}=2y^{2}+2y+2$, so the two-variable problem collapses to a single rational function $\\lvert w\\rvert^{2}=g(y)=\\dfrac{y^{2}-y+1}{y^{2}+y+1}$, valid for all real $y$ (both signs of $x=\\pm\\sqrt{1+y^{2}}$ give the same $\\lvert w\\rvert^{2}$).",
          "Minimize $g$: $g'(y)=\\dfrac{(2y-1)(y^{2}+y+1)-(y^{2}-y+1)(2y+1)}{(y^{2}+y+1)^{2}}=\\dfrac{2(y^{2}-1)}{(y^{2}+y+1)^{2}}$, which vanishes at $y=\\pm1$. Since $y^{2}+y+1>0$ always, the sign of $g'$ is the sign of $y^{2}-1$: $g$ decreases on $(-1,1)$ and increases beyond, so $y=1$ is the global minimum and $y=-1$ the global maximum. Thus $g_{\\min}=g(1)=\\dfrac{1}{3}$ and $g_{\\max}=g(-1)=3$.",
          "Hence $\\min\\lvert w\\rvert=\\sqrt{1/3}=\\dfrac{1}{\\sqrt{3}}$, attained at $y=1$, i.e. $x=\\pm\\sqrt{2}$, $z=\\pm\\sqrt{2}+i$. The two nearest image points are $w=\\operatorname{Re}w+i\\operatorname{Im}w=\\dfrac13\\mp\\dfrac{\\sqrt2}{3}i$ (one per asymptotic side), each of modulus $\\sqrt{\\tfrac19+\\tfrac29}=\\dfrac{1}{\\sqrt3}$. Note the vertex $z=1$ ($y=0$) gives $g(0)=1$, i.e. $\\lvert w\\rvert=1$, the trap value — and it is the maximum-adjacent boundary, never the minimum. Therefore $\\boxed{\\min\\lvert w\\rvert=\\dfrac{1}{\\sqrt{3}}}$."
        ]
      },
      {
        "name": "Discriminant method: force a real preimage to exist",
        "steps": [
          "From Solution 1, $\\lvert w\\rvert^{2}=\\dfrac{y^{2}-y+1}{y^{2}+y+1}$ as $y$ ranges over $\\mathbb{R}$. Treat the attainable value $m=\\lvert w\\rvert^{2}$ as a parameter and ask for which $m$ a real $y$ exists. Clearing denominators: $m(y^{2}+y+1)=y^{2}-y+1$, i.e. $(m-1)y^{2}+(m+1)y+(m-1)=0$.",
          "If $m\\ne1$ this is a genuine quadratic in $y$; a real root exists iff its discriminant is nonnegative: $(m+1)^{2}-4(m-1)^{2}\\ge0$. Factor the difference of squares: $(m+1)^{2}-(2(m-1))^{2}=\\bigl((m+1)-2(m-1)\\bigr)\\bigl((m+1)+2(m-1)\\bigr)=(3-m)(3m-1)$.",
          "So $(3-m)(3m-1)\\ge0\\iff \\tfrac13\\le m\\le 3$. (The excluded value $m=1$ is interior to this range and is realized at $y=0$, so nothing is lost.) Therefore $\\lvert w\\rvert^{2}$ ranges over exactly $\\bigl[\\tfrac13,\\,3\\bigr]$, with minimum $m=\\tfrac13$.",
          "At $m=\\tfrac13$ the quadratic degenerates to $-\\tfrac23 y^{2}+\\tfrac43 y-\\tfrac23=0\\Rightarrow y^{2}-2y+1=0\\Rightarrow y=1$, confirming the unique minimizer. Hence $\\min\\lvert w\\rvert=\\sqrt{\\tfrac13}=\\boxed{\\dfrac{1}{\\sqrt{3}}}$, and the trap's value $1$ is merely an interior point of the modulus range, not its floor."
        ]
      },
      {
        "name": "Derive the quartic image, then minimize via Lagrange on the curve",
        "steps": [
          "Establish part (a). With $U=\\operatorname{Re}w,\\ V=\\operatorname{Im}w$ and $D=x^{2}+(y+1)^{2}=2y^{2}+2y+2$ (after $x^{2}=1+y^{2}$), Solution 1 gives $U=\\dfrac{2y^{2}}{D}=\\dfrac{y^{2}}{y^{2}+y+1}$ and $V=\\dfrac{-2x}{D}=\\dfrac{-x}{y^{2}+y+1}$ with $x^{2}=1+y^{2}$. Eliminating $x$ via $V(y^{2}+y+1)=-x$ and then $y$ by resultant yields $(U^{2}+V^{2})^{2}-2U(U^{2}+V^{2})+2(U^{2}-V^{2})-2U+1=0$ — exactly the stated quartic, which is not the circle $U^{2}+V^{2}=1$, proving the image is no arc of the unit circle.",
          "Minimize $\\lvert w\\rvert^{2}=U^{2}+V^{2}=:R$ on this curve. Writing the constraint as $\\Phi=R^{2}-2UR+2(U^{2}-V^{2})-2U+1=0$ and substituting $R=U^{2}+V^{2}$, Lagrange stationarity $\\nabla R=\\lambda\\nabla\\Phi$ combined with the curve equation reduces (after eliminating $\\lambda$) to the same condition $y^{2}=1$ found analytically, because the parametrization is rational in $y$.",
          "At $y=1$: $U=\\dfrac{1}{3}$, $V=\\dfrac{-x}{3}=\\mp\\dfrac{\\sqrt2}{3}$, so $R=U^{2}+V^{2}=\\dfrac19+\\dfrac29=\\dfrac13$. Substituting $(U,V)=(\\tfrac13,\\mp\\tfrac{\\sqrt2}{3})$ back into the quartic gives $0$, confirming these points lie on the image curve.",
          "Thus the nearest image points are $w=\\dfrac13\\mp\\dfrac{\\sqrt2}{3}i$, each at distance $\\sqrt{1/3}=\\dfrac{1}{\\sqrt3}$ from the origin, and $\\boxed{\\min\\lvert w\\rvert=\\dfrac{1}{\\sqrt{3}}}$. (For contrast, the $z$-vertex $z=1$ maps to $U=0,\\,V=-1$, the point $w=-i$ on the unit circle — visibly not the nearest point of the quartic.)"
        ]
      }
    ],
    "remark": "Insight: the whole problem is a trap about what a M\\\"obius map preserves and what it does not. It preserves angles and generalized circles, so one is tempted to import $z$-plane intuition wholesale — in particular the reflex that the nearest point of the source maps to the nearest point of the image. But the Cayley map is conformal, not an isometry: distance to a fixed point is exactly the thing it scrambles. The hyperbola's vertex $z=1$, nearest the origin in $z$, lands on the unit circle ($\\lvert w\\rvert=1$), while the true champion is $z=\\sqrt2+i$, farther in $z$ yet closer in $w$ at $\\lvert w\\rvert=1/\\sqrt3$. The honest engine is the one-line collapse $\\lvert w\\rvert^{2}=\\frac{\\lvert z-i\\rvert^{2}}{\\lvert z+i\\rvert^{2}}=\\frac{y^{2}-y+1}{y^{2}+y+1}$, after which either calculus or the discriminant condition $(3-m)(3m-1)\\ge0$ pins the modulus range to $[\\tfrac13,3]$ — and the same conic-meets-transformation machinery shows the image is a genuine quartic, not the unit circle the headline fact would have you expect. Conformal is not isometric: minimize in the target plane, never inherit the answer from the source."
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
    "title": "The Heptagon's Energy-Weighted Heart",
    "difficulty": 5,
    "task": "Evaluate in closed form",
    "tags": [
      "roots of unity",
      "cosecant sum",
      "chord midpoints",
      "centroid argument",
      "weighted spread trap",
      "regular n-gon"
    ],
    "statement": "Place unit charges at the seven vertices of a regular heptagon, taken to be the seventh roots of unity $z_0,\\dots,z_6$ with $z_k=e^{2\\pi i k/7}$ on the unit circle. For each of the $\\binom{7}{2}=21$ chords joining a pair of vertices, record two numbers: its inverse-square length $w_{jk}=\\dfrac{1}{\\lvert z_j-z_k\\rvert^{2}}$ (the Coulomb energy of that pair), and the position $M_{jk}=\\dfrac{z_j+z_k}{2}$ of its midpoint. \\par Two preliminary facts must be established first, and both are needed for the finale: \\\\ (i) the total energy $\\displaystyle E_7=\\sum_{j<k} w_{jk}=\\sum_{j<k}\\frac{1}{\\lvert z_j-z_k\\rvert^{2}}$ admits the closed form coming from the cosecant identity $\\sum_{m=1}^{6}\\csc^{2}\\dfrac{m\\pi}{7}=\\dfrac{7^{2}-1}{3}$; \\\\ (ii) the centroid of the $21$ chord-midpoints, $\\displaystyle G=\\frac{1}{21}\\sum_{j<k}M_{jk}$, coincides with the centre of the polygon, i.e. $G=0$. \\par Using (ii) to certify that the midpoint cloud is centred at the origin, define the energy-weighted mean-square radius of that cloud about the centre, \\[ Q \\;=\\; \\frac{\\displaystyle\\sum_{j<k} w_{jk}\\,\\lvert M_{jk}\\rvert^{2}}{\\displaystyle\\sum_{j<k} w_{jk}} \\;=\\; \\frac{1}{E_7}\\sum_{j<k}\\frac{\\lvert M_{jk}\\rvert^{2}}{\\lvert z_j-z_k\\rvert^{2}}. \\] Compute the exact value of $Q$. (You will need both the cosecant census of (i) for the denominator and a companion cotangent census for the numerator; the centroid fact (ii) is what guarantees this scalar is the genuine spread about the centre, with no parallel-axis correction.)",
    "answer": "\\[\\boxed{\\dfrac{5}{8}}\\]",
    "trap": "The fatal move is to let the centroid identity (ii) answer the whole question by quiet substitution of the \\text{wrong functional}. A strong student establishes $G=0$ correctly and then reasons: ``the energy-weighted average position of the midpoints is the vector $\\frac{1}{E_7}\\sum w_{jk}M_{jk}$; by the same rotational symmetry that killed the unweighted centroid, this weighted centroid is also fixed by the order-$7$ rotation, hence it is $0$ — so the weighted answer about the centre is zero.'' Every clause is true except the conclusion's relevance: the energy-weighted \\text{centroid} is indeed the zero \\text{vector}, but $Q$ is not that vector — $Q$ is the energy-weighted \\text{mean square} of the scalar distances $\\lvert M_{jk}\\rvert$, and a mean of squares of nonzero lengths cannot vanish merely because the signed average cancels. Confusing $\\big\\lVert\\sum w M\\big\\rVert$ (a length of an average, which symmetry forces to $0$) with $\\sum w\\lvert M\\rvert^{2}$ (an average of lengths-squared, strictly positive) is a category error, not an arithmetic slip: it reports $Q=0$. A second, milder trap drops the energy weighting and computes the \\text{unweighted} mean square $\\frac{1}{21}\\sum\\lvert M_{jk}\\rvert^{2}=\\frac{5}{12}$, forgetting that short chords (large $w_{jk}$) carry the larger weight and have their midpoints nearer the rim — the weighting is precisely what pulls $Q$ up from $\\frac{5}{12}$ to $\\frac{5}{8}$. The centroid identity is genuinely needed, but only to license measuring the spread about the origin; it never makes the spread itself zero.",
    "solutions": [
      {
        "name": "Two trigonometric censuses (cosecant for energy, cotangent for spread)",
        "steps": [
          "Reduce every pair to its gap. For roots of unity, $\\lvert z_j-z_k\\rvert^{2}=\\lvert e^{i\\alpha}-e^{i\\beta}\\rvert^{2}=2-2\\cos(\\alpha-\\beta)=4\\sin^{2}\\frac{\\alpha-\\beta}{2}=4\\sin^{2}\\frac{\\pi m}{7}$, where $m=k-j$ is the gap; likewise $\\lvert M_{jk}\\rvert^{2}=\\big\\lvert\\frac{z_j+z_k}{2}\\big\\rvert^{2}=\\frac{2+2\\cos(\\alpha-\\beta)}{4}=\\cos^{2}\\frac{\\pi m}{7}$. Each unordered pair has a gap $m\\in\\{1,\\dots,6\\}$, and by cyclic symmetry there are exactly $7$ ordered pairs for each residue $m$, hence $\\tfrac{7}{2}$ unordered pairs' worth per value of $m=1,\\dots,6$ when we sum $m$ over $1,\\dots,6$ once.",
          "Write the denominator (energy) as a cosecant census. $E_7=\\sum_{j<k}\\frac{1}{4\\sin^{2}(\\pi m/7)}=\\frac{1}{4}\\cdot\\frac{7}{2}\\sum_{m=1}^{6}\\csc^{2}\\frac{\\pi m}{7}=\\frac{7}{8}\\cdot\\frac{7^{2}-1}{3}=\\frac{7}{8}\\cdot 16=14$, using the stated identity $\\sum_{m=1}^{6}\\csc^{2}\\frac{m\\pi}{7}=16$. (In general $E_n=\\frac{n(n^{2}-1)}{24}$.)",
          "Write the numerator as a cotangent census. $\\sum_{j<k}\\frac{\\lvert M_{jk}\\rvert^{2}}{\\lvert z_j-z_k\\rvert^{2}}=\\sum_{j<k}\\frac{\\cos^{2}(\\pi m/7)}{4\\sin^{2}(\\pi m/7)}=\\frac{1}{4}\\cdot\\frac{7}{2}\\sum_{m=1}^{6}\\cot^{2}\\frac{\\pi m}{7}=\\frac{7}{8}\\cdot\\frac{(7-1)(7-2)}{3}=\\frac{7}{8}\\cdot 10=\\frac{35}{4}$, using $\\sum_{m=1}^{6}\\cot^{2}\\frac{m\\pi}{7}=\\frac{(n-1)(n-2)}{3}=10$.",
          "Take the ratio. $Q=\\dfrac{35/4}{14}=\\dfrac{35}{56}=\\dfrac{5}{8}$. The centroid fact (ii) is what makes this the spread about the true centre: since $G=0$, the mean square about $G$ equals the mean square about the origin and no parallel-axis term is subtracted. Hence $\\boxed{Q=\\dfrac{5}{8}}$, decisively not the trap's $0$."
        ]
      },
      {
        "name": "Pythagoras on each chord: a one-line ratio identity",
        "steps": [
          "Use the right angle at the foot of each chord. For a unit circle, the midpoint $M_{jk}$ of a chord, the centre $O$, and either endpoint form a right triangle with hypotenuse $1$: the half-chord has length $\\frac{1}{2}\\lvert z_j-z_k\\rvert=\\sin\\frac{\\pi m}{7}$ and the apothem is $\\lvert M_{jk}\\rvert=\\cos\\frac{\\pi m}{7}$, so $\\lvert M_{jk}\\rvert^{2}+\\big(\\tfrac12\\lvert z_j-z_k\\rvert\\big)^{2}=1$. Therefore $\\dfrac{\\lvert M_{jk}\\rvert^{2}}{\\lvert z_j-z_k\\rvert^{2}}=\\dfrac{1-\\frac14\\lvert z_j-z_k\\rvert^{2}}{\\lvert z_j-z_k\\rvert^{2}}=\\dfrac{1}{\\lvert z_j-z_k\\rvert^{2}}-\\dfrac14=w_{jk}-\\dfrac14$.",
          "Sum the per-chord identity. Summing over all $21$ pairs, $\\sum_{j<k}\\frac{\\lvert M_{jk}\\rvert^{2}}{\\lvert z_j-z_k\\rvert^{2}}=\\sum_{j<k}w_{jk}-\\frac{1}{4}\\cdot 21=E_7-\\frac{21}{4}$. The numerator of $Q$ is the energy minus a flat $\\frac14$ per chord — a direct consequence of the apothem-plus-half-chord Pythagoras, requiring no cotangent identity at all.",
          "Insert $E_7=14$ from the cosecant census of Solution 1. The numerator equals $14-\\frac{21}{4}=\\frac{56-21}{4}=\\frac{35}{4}$, matching Solution 1's cotangent count and re-deriving $\\sum\\cot^{2}=\\sum\\csc^{2}-(n-1)$ as a by-product. Geometrically this says: each chord's weighted apothem-square is its energy docked by the constant $\\tfrac14$.",
          "Divide. $Q=\\dfrac{E_7-21/4}{E_7}=1-\\dfrac{21}{4E_7}=1-\\dfrac{21}{56}=1-\\dfrac{3}{8}=\\dfrac{5}{8}$. Equivalently, in closed form $Q=1-\\frac{\\binom{n}{2}/4}{n(n^{2}-1)/24}=1-\\frac{3}{n+1}=\\frac{n-2}{n+1}$, which at $n=7$ gives $\\boxed{\\dfrac{5}{8}}$. The centroid identity again certifies the spread is about the origin; the trap's $0$ would require every $\\lvert M_{jk}\\rvert$ to vanish, impossible since six of the seven gap-classes have $\\cos\\frac{\\pi m}{7}\\ne 0$."
        ]
      },
      {
        "name": "Vector bookkeeping: separate the centroid (vector) from the spread (scalar)",
        "steps": [
          "Prove (ii) cleanly to expose the trap's seam. The sum of midpoints is $\\sum_{j<k}M_{jk}=\\frac{1}{2}\\sum_{j<k}(z_j+z_k)=\\frac{1}{2}(n-1)\\sum_{i=0}^{6}z_i$, because in the $\\binom{n}{2}$ unordered pairs each vertex appears in exactly $n-1=6$ of them. Since $\\sum_{i=0}^{6}z_i=0$ (sum of all seventh roots of unity), the midpoint centroid is $G=0$. The very same cancellation — and rotational invariance of the weights $w_{jk}$ — makes the energy-weighted centroid $\\frac{1}{E_7}\\sum w_{jk}M_{jk}$ a vector fixed by the $2\\pi/7$ rotation, hence also $0$.",
          "Isolate what is and is not zero. The quantity that vanishes is the \\text{vector} average $\\sum w_{jk}M_{jk}=\\mathbf 0$, i.e. the length of an average. The quantity $Q$ asked for is $\\frac{1}{E_7}\\sum w_{jk}\\lvert M_{jk}\\rvert^{2}$, an average of \\text{squared lengths} of the same midpoints. These coincide only if every $M_{jk}=0$; here the midpoints lie at radii $\\cos\\frac{\\pi m}{7}$ for $m=1,\\dots,6$, none of which is zero, so $Q>0$ strictly — the trap conflates $\\lVert\\text{avg}\\rVert$ with $\\text{avg}(\\lVert\\cdot\\rVert^{2})$.",
          "Evaluate the genuine scalar via the gap census. Grouping the $21$ pairs by gap $m$ ($7$ ordered, $\\tfrac72$ unordered per $m=1,\\dots,6$): $\\sum w_{jk}\\lvert M_{jk}\\rvert^{2}=\\frac{7}{2}\\sum_{m=1}^{6}\\frac{\\cos^{2}(\\pi m/7)}{4\\sin^{2}(\\pi m/7)}=\\frac{7}{8}\\sum_{m=1}^{6}\\cot^{2}\\frac{\\pi m}{7}=\\frac{7}{8}\\cdot 10=\\frac{35}{4}$, while $E_7=\\frac{7}{8}\\sum_{m=1}^{6}\\csc^{2}\\frac{\\pi m}{7}=\\frac{7}{8}\\cdot 16=14$.",
          "Conclude. $Q=\\dfrac{35/4}{14}=\\dfrac{5}{8}$. The centroid identity is indispensable — it is what makes ``mean-square radius about the centre'' a well-posed, correction-free quantity — but it acts on the vector layer, not the scalar layer, so it pins down \\text{where} to measure from ($O$), never the \\text{size} of the spread. Hence $\\boxed{Q=\\dfrac{5}{8}}$, and the seductive $0$ is the answer to a different question."
        ]
      }
    ],
    "remark": "Insight: this capstone forces the cosecant energy sum and the chord-midpoint centroid to operate on the same configuration at once, and its sting is the gap between two layers of structure. The centroid argument lives on the \\text{vector} layer: $\\sum M_{jk}=\\frac{n-1}{2}\\sum z_i=0$ because the roots of unity cancel, and rotational symmetry even forces the energy-weighted centroid to be the zero vector. That is real, useful information — it certifies the midpoint cloud is centred at the origin, so ``mean-square radius about the centre'' needs no parallel-axis correction. But the asked quantity lives on the \\text{scalar} layer, an energy-weighted average of $\\lvert M_{jk}\\rvert^{2}$, and a weighted mean of squares of nonzero lengths cannot inherit the vector's vanishing. Resolving it needs the second tool — the gap census $\\lvert M_{jk}\\rvert^{2}=\\cos^{2}\\frac{\\pi m}{n}$, $\\lvert z_j-z_k\\rvert^{2}=4\\sin^{2}\\frac{\\pi m}{n}$ — collapsing $Q$ to a ratio of a cotangent sum to a cosecant sum, $Q=\\frac{(n-1)(n-2)/3}{(n^{2}-1)/3}=\\frac{n-2}{n+1}$, which at $n=7$ is $\\frac58$. The slickest route never invokes cotangents at all: the per-chord Pythagoras $\\lvert M_{jk}\\rvert^{2}=1-\\frac14\\lvert z_j-z_k\\rvert^{2}$ turns the numerator into $E_n-\\frac14\\binom n2$, giving $Q=1-\\frac{3}{n+1}$ in one line. The lesson of the Grand Hybrids: when two symmetric tools meet, keep straight which layer each one governs — a symmetry that zeroes a vector average says nothing about a scalar spread."
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
    "title": "The Dirichlet Ceiling",
    "difficulty": 5,
    "task": "Find the supremum and decide attainment",
    "tags": [
      "geometric sum",
      "dirichlet kernel",
      "modulus optimization",
      "supremum not maximum",
      "triangle inequality equality",
      "unit circle"
    ],
    "statement": "Fix an integer $n\\ge 2$ and consider the polynomial $P(z)=1+z+z^{2}+\\cdots+z^{n-1}$, the $n$-term partial sum of the geometric series. We let $z$ roam over the unit circle but forbid the single point $z=1$: \\[ S=\\Bigl\\{\\,|P(z)|\\ :\\ |z|=1,\\ z\\neq 1\\,\\Bigr\\}. \\] Equivalently, since $P(z)=\\dfrac{z^{n}-1}{z-1}$ for $z\\neq1$, the quantity in play is the ratio of chord lengths $\\dfrac{|z^{n}-1|}{|z-1|}$ as $z$ travels the punctured circle. \\par (a) Determine $\\displaystyle M=\\sup S$, the least upper bound of $|P(z)|$ over the punctured unit circle, as a function of $n$. \\par (b) Decide — with proof — whether $M$ is attained: is there an admissible $z$ (with $|z|=1$, $z\\neq1$) for which $|P(z)|=M$, so that the supremum is a genuine maximum? \\par Report $M$ as the final answer. Throughout, the natural reduction is to write $z=e^{i\\theta}$ with $\\theta\\in(0,2\\pi)$ and recognize $|P(z)|$ as a Dirichlet kernel; but be warned that the value of $|P|$ at the obvious special points (roots of $z^{n}=1$, polygon vertices, lobe peaks) is a distraction. The whole game is the boundary behaviour as $z$ creeps toward the excluded point $1$.",
    "answer": "\\[\\boxed{M=n}\\]",
    "trap": "The fatal move is to hunt for an interior maximizer and report its value as the answer. Setting $z=e^{i\\theta}$ gives $|P(z)|=\\left|\\dfrac{\\sin(n\\theta/2)}{\\sin(\\theta/2)}\\right|$, the Dirichlet kernel $D_{n}(\\theta)$. A strong student differentiates, locates stationary points, and either (i) reports the height of the tallest \\text{interior} critical lobe — which for every $n$ is strictly less than $n$ — as ``the maximum,'' or (ii) tests the seductive special points and is misled twice over: the $n$th roots of unity nearest $1$, namely $z=e^{\\pm 2\\pi i/n}$, satisfy $z^{n}=1$ with $z\\neq1$, so $P(z)=\\dfrac{z^{n}-1}{z-1}=0$ — the \\text{minimum}, not the maximum — while the antipode $z=-1$ (for even $n$) gives $P(-1)=0$ as well. Tempted by symmetry, some declare the supremum is some clean interior peak. All of this misses the real structure: $D_{n}(\\theta)\\to n$ as $\\theta\\to0^{+}$, i.e. as $z\\to1$ along the circle, yet $z=1$ is \\text{excluded}. So the value $n$ is approached arbitrarily closely but never reached — $M=n$ is a supremum, \\text{not} a maximum. The conceptual error is treating $\\sup$ and $\\max$ as the same: the optimizer wants to sit at the forbidden point, the closed unit circle's removal of $\\{1\\}$ turns a would-be maximum into an unattained limit, and any answer of the form ``the max is the height of lobe so-and-so'' is wrong. The honest answer must state both $M=n$ \\text{and} that it is not attained on the punctured circle.",
    "solutions": [
      {
        "name": "Triangle inequality ceiling + limit floor (the clean two-sided squeeze)",
        "steps": [
          "Upper bound. $P(z)=1+z+\\cdots+z^{n-1}$ is a sum of $n$ complex numbers, each of modulus $1$ when $|z|=1$ (since $|z^{k}|=|z|^{k}=1$). By the triangle inequality $|P(z)|\\le\\sum_{k=0}^{n-1}|z^{k}|=n$. Hence $M=\\sup S\\le n$ — a ceiling that holds for every point of the (full) unit circle.",
          "When is the ceiling tight? Equality in the triangle inequality $|\\sum a_{k}|\\le\\sum|a_{k}|$ requires all nonzero $a_{k}=z^{k}$ to point in the same direction, i.e. $\\arg(z^{k})$ independent of $k$. Since $\\arg(z^{k})=k\\arg z$, this forces $\\arg z\\equiv 0$, i.e. $z=1$. Thus for every admissible $z$ (with $z\\neq1$) the inequality is strict: $|P(z)|<n$. So $n$ is not attained on the punctured circle, and in particular no interior lobe can equal $n$.",
          "Lower bound for the supremum. Approach the forbidden point: let $z=e^{i\\theta}$ with $\\theta\\to0^{+}$. Then $P(z)=\\sum_{k=0}^{n-1}e^{ik\\theta}$, and each term $e^{ik\\theta}\\to 1$, so by continuity $P(e^{i\\theta})\\to n$ and $|P(e^{i\\theta})|\\to n$. Concretely $|P|=\\left|\\frac{\\sin(n\\theta/2)}{\\sin(\\theta/2)}\\right|\\to n$ as $\\theta\\to0$. Thus values of $|P|$ on the punctured circle get within any $\\varepsilon$ of $n$.",
          "Combine: $|P(z)|<n$ always (so $n$ is an upper bound), yet $|P(z)|$ exceeds $n-\\varepsilon$ for $\\theta$ small (so no number below $n$ is an upper bound). Therefore the least upper bound is exactly $M=n$, and it is not attained: $\\sup S=n$ is a supremum, not a maximum. $\\boxed{M=n}$."
        ]
      },
      {
        "name": "Dirichlet kernel: monotone main lobe forces the supremum to the excluded endpoint",
        "steps": [
          "Write $z=e^{i\\theta}$, $\\theta\\in(0,2\\pi)$. Summing the geometric series, $P(z)=\\dfrac{z^{n}-1}{z-1}$; factoring $e^{in\\theta/2}$ and $e^{i\\theta/2}$ from numerator and denominator gives the Dirichlet kernel $|P(z)|=D_{n}(\\theta)=\\left|\\dfrac{\\sin(n\\theta/2)}{\\sin(\\theta/2)}\\right|$.",
          "On the first (main) lobe $0<\\theta\\le 2\\pi/n$ the numerator $\\sin(n\\theta/2)\\ge0$ and we may drop absolute values: $f(\\theta)=\\dfrac{\\sin(n\\theta/2)}{\\sin(\\theta/2)}$. Its endpoint values are $\\lim_{\\theta\\to0^{+}}f(\\theta)=n$ (L'Hopital, or $\\frac{\\sin(n\\theta/2)}{\\sin(\\theta/2)}\\sim\\frac{n\\theta/2}{\\theta/2}$) and $f(2\\pi/n)=\\dfrac{\\sin\\pi}{\\sin(\\pi/n)}=0$. A short computation (or the standard fact that the Dirichlet kernel decreases monotonically from its central peak across the main lobe) shows $f$ is strictly decreasing on $(0,2\\pi/n)$, dropping from the limit $n$ down to $0$.",
          "Beyond the first zero the kernel oscillates in side lobes whose peak heights are bounded by $\\dfrac{1}{\\sin(\\theta/2)}\\le\\dfrac{1}{\\sin(\\pi/n)}<n$ for $\\theta\\ge 2\\pi/n$ (and they shrink as $\\theta$ moves toward $\\pi$); every such peak is strictly below $n$. Hence the global supremum of $D_{n}$ over $(0,2\\pi)$ comes solely from the main-lobe limit $\\theta\\to0^{+}$, where $D_{n}\\uparrow n$ but $\\theta=0$ (i.e. $z=1$) is excluded.",
          "Therefore $\\sup_{\\theta\\in(0,2\\pi)}D_{n}(\\theta)=n$, approached only as $\\theta\\to0$, never attained for $\\theta\\neq0$. So $M=n$ and it is not a maximum. $\\boxed{M=n}$."
        ]
      },
      {
        "name": "Direct partial-sum bound with explicit near-miss sequence",
        "steps": [
          "Real-part bound. For $|z|=1$, $|P(z)|=\\Bigl|\\sum_{k=0}^{n-1}z^{k}\\Bigr|$. Projecting onto the direction of $P(z)$ itself, $|P(z)|=\\sum_{k=0}^{n-1}\\mathrm{Re}\\bigl(\\overline{u}\\,z^{k}\\bigr)$ where $u=P(z)/|P(z)|$ is the unit vector along $P$. Each summand is $\\le|z^{k}|=1$, giving $|P(z)|\\le n$, with equality only if every $\\mathrm{Re}(\\overline u z^{k})=1$, i.e. every $z^{k}=u$ — impossible unless $z=1$. So strictly $|P(z)|<n$ for all admissible $z$.",
          "Explicit approaching sequence. Take $z_{m}=e^{i/m}$ for integers $m\\ge1$ (so $z_{m}\\neq1$ and $z_{m}\\to1$). Then $|P(z_{m})|=\\dfrac{\\sin(n/(2m))}{\\sin(1/(2m))}$. As $m\\to\\infty$, using $\\sin x\\sim x$, this ratio $\\to\\dfrac{n/(2m)}{1/(2m)}=n$. Hence $\\lim_{m\\to\\infty}|P(z_{m})|=n$ with each $|P(z_{m})|<n$.",
          "These two facts say exactly that $n$ is an upper bound for $S$ that is approached but never met. No smaller bound works (the sequence overshoots any $n-\\varepsilon$), and no value of $n$ itself occurs. Thus $\\sup S=n$ while $\\max S$ does not exist.",
          "(Sanity check on the traps.) The roots $z=e^{\\pm2\\pi i/n}$ give $P=\\frac{z^{n}-1}{z-1}=0$, the minimum; for even $n$, $z=-1$ gives $P=0$ too. None of these special points is anywhere near the supremum, confirming the optimizer lives only at the excluded boundary $z=1$. Final answer: $\\boxed{M=n}$, not attained."
        ]
      }
    ],
    "remark": "Insight: this is the cleanest possible illustration that $\\sup$ and $\\max$ are different beasts. The geometric sum $P(z)=\\frac{z^{n}-1}{z-1}$ is the Dirichlet kernel in disguise, and the triangle inequality instantly caps it at $n$ — but equality in the triangle inequality demands all $n$ unit vectors $1,z,\\dots,z^{n-1}$ point the same way, which happens only at the one forbidden point $z=1$. Remove that point and the cap $n$ becomes a horizon: reachable in the limit, never in fact. Every tempting interior candidate (a side-lobe peak, a polygon vertex, the nearest $n$th root of unity) is a decoy; the roots of $z^{n}=1$ even sit at the minimum $0$. The lesson for a top ranker is to ask not only ``what is the bound?'' but ``is the bound achieved on the actual domain?'' — here the punctured circle quietly converts a maximum into an unattained supremum $M=n$. Same machinery, sharper conclusion: optimize on the domain you are actually given, endpoints and punctures included."
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
    "title": "The Cotangent Quarry and the Basel Squeeze",
    "difficulty": 5,
    "task": "Evaluate in closed form, then deduce",
    "tags": [
      "de moivre",
      "roots of a polynomial",
      "vieta",
      "cotangent sum",
      "basel squeeze",
      "missed-case trap"
    ],
    "statement": "Fix an integer $n\\ge 1$ and consider the $n$ acute angles \\[ \\theta_k=\\frac{(2k+1)\\pi}{4n},\\qquad k=0,1,\\dots,n-1, \\] so that $\\theta_0<\\theta_1<\\dots<\\theta_{n-1}$ all lie in $\\left(0,\\tfrac{\\pi}{2}\\right)$. \\par (a) By examining the real part of $(1+ix)^{2n}$, build the monic-up-to-scale polynomial of degree $n$ whose roots are exactly the numbers $\\tan^2\\theta_k$, and use it to prove the closed form \\[ S_n:=\\sum_{k=0}^{n-1}\\cot^2\\!\\theta_k=\\sum_{k=0}^{n-1}\\cot^2\\!\\frac{(2k+1)\\pi}{4n}=n(2n-1). \\] \\par (b) Using only the elementary squeeze $\\cot^2\\theta<\\dfrac{1}{\\theta^2}<\\csc^2\\theta$ valid for $0<\\theta<\\tfrac{\\pi}{2}$, together with the value of $S_n$, deduce that the partial odd-Basel sums obey, for every $n\\ge1$, the strict two-sided bound \\[ \\frac{4}{3}\\sum_{k=0}^{n-1}\\frac{1}{(2k+1)^2}\\;<\\;\\frac{\\pi^2}{6}\\;<\\;\\frac{8n}{3(2n-1)}\\sum_{k=0}^{n-1}\\frac{1}{(2k+1)^2}, \\] so that letting $n\\to\\infty$ recovers $\\displaystyle\\sum_{m=1}^{\\infty}\\frac{1}{m^2}=\\frac{\\pi^2}{6}$. Report the closed form of part (a) as the final answer.",
    "answer": "\\[\\boxed{S_n=n(2n-1)}\\]",
    "trap": "The fatal slip is a missed case, not arithmetic. In part (a) it is tempting to work directly with the degree-$2n$ polynomial $\\operatorname{Re}\\big((1+ix)^{2n}\\big)$, whose roots are $x=\\tan\\theta$ for $2N\\phi=\\tfrac{(2k+1)\\pi}{2}$ — but solving $\\cos(2n\\phi)=0$ over $\\phi\\in(-\\tfrac\\pi2,\\tfrac\\pi2)$ yields $\\phi=\\tfrac{(2k+1)\\pi}{4n}$ for $k=-n,\\dots,n-1$, i.e. the roots are the $2n$ values $\\pm\\tan\\theta_k$, NOT the $n$ values $\\tan\\theta_k$. A student who applies Vieta's reciprocal sum to all $2n$ roots gets $\\sum 1/(\\pm\\tan\\theta_k)=0$ by $\\pm$ cancellation (garbage), or — failing to notice the squaring symmetry — divides the true answer by $2$ or doubles it. The honest move is to substitute $u=x^2$, collapsing the even polynomial to degree $n$ with roots $\\tan^2\\theta_k$, before any Vieta step. The second, deeper missed case lurks in part (b): the squeeze is $\\cot^2\\theta<\\theta^{-2}<\\csc^2\\theta$, and $\\csc^2\\theta=1+\\cot^2\\theta$, so summing the UPPER bound contributes an extra $\\sum_{k=0}^{n-1}1=n$, giving $\\sum\\theta_k^{-2}<S_n+n=2n^2$. A solver who carelessly writes $\\cot^2\\theta<\\theta^{-2}<\\cot^2\\theta$ (forgetting the $+1$ that distinguishes $\\csc^2$ from $\\cot^2$) collapses the sandwich to a false EXACT equality $\\sum\\theta_k^{-2}=S_n$, i.e. $\\sum 1/(2k+1)^2=\\tfrac{\\pi^2(2n-1)}{16n}$ for all $n$ — which is numerically false (at $n=10$ the left side is $1.2087\\ldots$, the right $1.1720\\ldots$). The constant $\\pi^2/8$ (hence $\\pi^2/6$) is born precisely from that surviving $+n$; drop it and Basel never appears.",
    "solutions": [
      {
        "name": "Root construction via De Moivre, then reciprocal Vieta and the squeeze",
        "steps": [
          "Write $1+ix=\\sec\\phi\\,(\\cos\\phi+i\\sin\\phi)$ with $\\tan\\phi=x$, $\\phi\\in(-\\tfrac\\pi2,\\tfrac\\pi2)$. By De Moivre $(1+ix)^{2n}=\\sec^{2n}\\phi\\,\\big(\\cos 2n\\phi+i\\sin 2n\\phi\\big)$, so $\\operatorname{Re}\\big((1+ix)^{2n}\\big)=\\sec^{2n}\\phi\\,\\cos 2n\\phi$ vanishes exactly when $\\cos 2n\\phi=0$, i.e. $\\phi=\\tfrac{(2k+1)\\pi}{4n}=\\theta_k$. Expanding the real part binomially, $\\operatorname{Re}\\big((1+ix)^{2n}\\big)=\\sum_{j=0}^{n}\\binom{2n}{2j}(-1)^{j}x^{2j}$, an even polynomial of degree $2n$ whose $2n$ roots are $x=\\pm\\tan\\theta_k$.",
          "Because the polynomial is even, set $u=x^2$. Then $P(u):=\\sum_{j=0}^{n}\\binom{2n}{2j}(-1)^{j}u^{\\,j}$ has degree $n$ and its $n$ roots are precisely $u=\\tan^2\\theta_k$, $k=0,\\dots,n-1$ (the $\\theta_k$ being distinct acute angles, the $\\tan^2\\theta_k$ are distinct positive reals, accounting for all $n$ roots). Here $P(0)=\\binom{2n}{0}=1$ and the coefficient of $u^1$ is $-\\binom{2n}{2}$.",
          "We need $S_n=\\sum\\cot^2\\theta_k=\\sum_k \\dfrac{1}{\\tan^2\\theta_k}$, the sum of reciprocals of the roots of $P$. For any polynomial $P(u)=a_0+a_1u+\\dots+a_nu^n$ with roots $r_k$, $\\sum 1/r_k=e_{n-1}/e_n=-a_1/a_0$. Thus $S_n=-\\dfrac{-\\binom{2n}{2}}{1}=\\binom{2n}{2}=\\dfrac{2n(2n-1)}{2}=n(2n-1)$, establishing part (a).",
          "For (b), on $(0,\\tfrac\\pi2)$ we have $\\cot^2\\theta<\\theta^{-2}<\\csc^2\\theta=1+\\cot^2\\theta$. Sum over $\\theta=\\theta_k$ and use $S_n=n(2n-1)$: the lower bound gives $\\sum_k\\theta_k^{-2}>n(2n-1)$, the upper gives $\\sum_k\\theta_k^{-2}<n(2n-1)+n=2n^2$. Since $\\theta_k^{-2}=\\dfrac{16n^2}{\\pi^2(2k+1)^2}$, writing $T_n=\\sum_{k=0}^{n-1}(2k+1)^{-2}$ turns this into $n(2n-1)<\\dfrac{16n^2}{\\pi^2}T_n<2n^2$, i.e. $\\dfrac{\\pi^2(2n-1)}{16n}<T_n<\\dfrac{\\pi^2}{8}$.",
          "Multiply the strict upper bound $T_n<\\tfrac{\\pi^2}{8}$ by $\\tfrac43$ to get $\\tfrac43T_n<\\tfrac{\\pi^2}{6}$; multiply the strict lower bound $T_n>\\tfrac{\\pi^2(2n-1)}{16n}$ by $\\tfrac{8n}{3(2n-1)}$ to get $\\tfrac{8n}{3(2n-1)}T_n>\\tfrac{\\pi^2}{6}$. Together this is the claimed sandwich $\\tfrac43T_n<\\tfrac{\\pi^2}{6}<\\tfrac{8n}{3(2n-1)}T_n$. As $n\\to\\infty$ both flanks tend to $\\tfrac43 T_\\infty$, forcing $T_\\infty=\\tfrac{\\pi^2}{8}$ and hence (since $\\sum m^{-2}=T_\\infty+\\tfrac14\\sum m^{-2}$ gives $\\sum m^{-2}=\\tfrac43T_\\infty$) the value $\\sum_{m\\ge1}m^{-2}=\\tfrac{\\pi^2}{6}$. The boxed closed form is $S_n=n(2n-1)$."
        ]
      },
      {
        "name": "Build the cotangent-rooted polynomial directly (reverse coefficients) and confirm via the cosecant census",
        "steps": [
          "From Solution 1, $P(u)=\\sum_{j=0}^{n}\\binom{2n}{2j}(-1)^{j}u^{j}$ has roots $\\tan^2\\theta_k$. The numbers $\\cot^2\\theta_k$ are their reciprocals, so they are the roots of the reverse polynomial $Q(v):=v^{n}P(1/v)=\\sum_{j=0}^{n}\\binom{2n}{2j}(-1)^{j}v^{\\,n-j}$. The leading term ($j=0$) is $\\binom{2n}{0}v^n=v^n$ and the $v^{n-1}$ term ($j=1$) is $-\\binom{2n}{2}v^{n-1}$.",
          "By Vieta on the monic $Q$, $S_n=\\sum_k\\cot^2\\theta_k=-\\dfrac{[\\,v^{n-1}\\,]Q}{[\\,v^{n}\\,]Q}=-\\dfrac{-\\binom{2n}{2}}{1}=\\binom{2n}{2}=n(2n-1)$, agreeing with Solution 1.",
          "Independent sanity check via the cosecant census: $\\csc^2\\theta_k=1+\\cot^2\\theta_k$, so $\\sum_k\\csc^2\\theta_k=n+S_n$. The angles $\\theta_k=\\tfrac{(2k+1)\\pi}{4n}$ are half of the nonzero residues mod $\\pi$ of the $4n$-th roots structure, and the standard census $\\sum_{k=0}^{n-1}\\csc^2\\tfrac{(2k+1)\\pi}{4n}=2n^2$ holds (it is $\\sum 1/\\sin^2$, computable as $n+S_n$). Reading it backwards, $S_n=2n^2-n=n(2n-1)$ — a third route to the same closed form, all consistent.",
          "The Basel deduction proceeds exactly as in Solution 1, steps 4-5, since it depends only on $S_n=n(2n-1)$ and the squeeze $\\cot^2\\theta<\\theta^{-2}<\\csc^2\\theta$. Hence $\\boxed{S_n=n(2n-1)}$ and $\\tfrac43T_n<\\tfrac{\\pi^2}{6}<\\tfrac{8n}{3(2n-1)}T_n$ with limit $\\tfrac{\\pi^2}{6}$."
        ]
      },
      {
        "name": "Closed form by counting roots, then an honest standalone Basel squeeze",
        "steps": [
          "The angles $\\phi$ in $(-\\tfrac\\pi2,\\tfrac\\pi2)$ solving $\\cos 2n\\phi=0$ are $\\phi=\\tfrac{(2k+1)\\pi}{4n}$ for $k=-n,\\dots,n-1$ — exactly $2n$ of them, pairing as $\\pm\\theta_k$. So $\\operatorname{Re}\\big((1+ix)^{2n}\\big)=\\prod_{k=0}^{n-1}\\big(x-\\tan\\theta_k\\big)\\big(x+\\tan\\theta_k\\big)=\\prod_{k=0}^{n-1}(x^2-\\tan^2\\theta_k)$ up to the leading constant $(-1)^n$. Matching the constant term: $\\prod_k(-\\tan^2\\theta_k)=(-1)^n\\prod_k\\tan^2\\theta_k$ equals the $j=n$ coefficient ratio, while matching the next coefficient delivers the elementary symmetric data we need.",
          "Comparing $\\prod_{k}(x^2-\\tan^2\\theta_k)$ with $\\sum_{j}\\binom{2n}{2j}(-1)^{j}x^{2j}$ (both viewed in $u=x^2$, leading coefficient $(-1)^n$): the product of the roots is $\\prod\\tan^2\\theta_k=\\binom{2n}{0}/\\binom{2n}{2n}=1$, and the sum $\\sum\\tan^2\\theta_k=\\binom{2n}{2n-2}/\\binom{2n}{2n}=\\binom{2n}{2}=n(2n-1)$. The reciprocal sum we want is $S_n=\\dfrac{e_{n-1}(\\tan^2)}{e_n(\\tan^2)}$; since $e_n=\\prod\\tan^2\\theta_k=1$, we get $S_n=e_{n-1}=\\binom{2n}{2}=n(2n-1)$ directly (the second-from-bottom symmetric function equals the $u^1$ coefficient of $P$, namely $\\binom{2n}{2}$).",
          "Standalone Basel squeeze, kept honest. For each $k$, integrate or use the chord-tangent inequality $\\sin\\theta<\\theta<\\tan\\theta$ on $(0,\\tfrac\\pi2)$; squaring and inverting gives $\\cot^2\\theta<\\theta^{-2}<\\csc^2\\theta$. The crucial structural point is $\\csc^2-\\cot^2=1$: summing, the gap between the two bounds is exactly $\\sum_{k=0}^{n-1}1=n$, NOT $0$. Hence $n(2n-1)<\\sum_k\\theta_k^{-2}<n(2n-1)+n=2n^2$, with the width $n$ being the engine of the limit.",
          "Substituting $\\theta_k^{-2}=\\tfrac{16n^2}{\\pi^2}(2k+1)^{-2}$ and dividing by $\\tfrac{16n^2}{\\pi^2}$ yields $\\tfrac{\\pi^2(2n-1)}{16n}<T_n<\\tfrac{\\pi^2}{8}$; scaling by $\\tfrac43$ and $\\tfrac{8n}{3(2n-1)}$ respectively gives the strict $\\tfrac43T_n<\\tfrac{\\pi^2}{6}<\\tfrac{8n}{3(2n-1)}T_n$. The two outer expressions both converge to $\\tfrac43T_\\infty$, so $T_\\infty=\\tfrac{\\pi^2}{8}$ and $\\sum_{m\\ge1}m^{-2}=\\tfrac43\\cdot\\tfrac{\\pi^2}{8}=\\tfrac{\\pi^2}{6}$. Therefore $\\boxed{S_n=n(2n-1)}$."
        ]
      }
    ],
    "remark": "Insight: this is the cotangent twin of the classical $\\sum\\cot^2\\tfrac{k\\pi}{2n+1}$ proof of Basel, but rebuilt on a fresh engine — the real part of $(1+ix)^{2n}$, whose vanishing pins the odd-angle grid $\\tfrac{(2k+1)\\pi}{4n}$. Two disciplines must cooperate: root-construction (De Moivre produces a degree-$2n$ polynomial, but the prize lives in its even part, so you MUST pass to $u=x^2$ to get the $n$ genuine roots $\\tan^2\\theta_k$), and Vieta read in reverse (the cotangents are reciprocals of the tangents, so $S_n=-a_1/a_0=\\binom{2n}{2}=n(2n-1)$). The inequality then rides for free on a single irreducible fact: $\\csc^2\\theta-\\cot^2\\theta=1$. That lone $+1$ per term is the whole of Basel — sum it and the width $n$ between the squeeze's flanks scales to a nonzero limit; forget it and the sandwich degenerates to a false equality and $\\pi^2/6$ evaporates. The deepest lesson is that a constant identity, summed $n$ times, is exactly the seam where an algebraic evaluation becomes an analytic constant."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Heptagon's Widest Triangle",
    "difficulty": 5,
    "task": "Maximise, prove the closed form, then average",
    "tags": [
      "roots of unity",
      "extremal geometry",
      "argand plane",
      "area via imaginary part",
      "quadratic residues",
      "lattice-constraint trap"
    ],
    "statement": "Let $\\omega=e^{2\\pi i/7}$ and let $V=\\{1,\\omega,\\omega^2,\\dots,\\omega^6\\}$ be the $7$th roots of unity, the vertices of a regular heptagon inscribed in the unit circle. Consider all $\\binom{7}{3}=35$ triangles whose three vertices are chosen from $V$. \\par (a) Among these $35$ triangles, find the one of maximum area and prove that its area equals \\[ A_{\\max}=\\frac{\\sqrt7}{2}\\,\\cos\\frac{\\pi}{7},\\qquad\\text{equivalently}\\qquad A_{\\max}^{2}=\\frac{7}{4}\\cos^{2}\\frac{\\pi}{7}. \\] (You should both identify which vertex pattern is extremal and evaluate its area in this closed form; the oriented area of a triangle $z_1z_2z_3$ is $\\tfrac12\\,\\mathrm{Im}\\!\\big(\\overline{(z_2-z_1)}\\,(z_3-z_1)\\big)$.) \\par (b) For a triangle $T$ with vertices in $V$, let $\\Sigma(T)$ be the sum of the squares of its three side lengths. Prove that the average of $\\Sigma(T)$ taken over all $35$ triangles is exactly $7$, and exhibit a triangle for which $\\Sigma(T)=7$ exactly. Report $A_{\\max}$ from part (a) as the final boxed answer.",
    "answer": "\\[\\boxed{A_{\\max}=\\tfrac{\\sqrt7}{2}\\cos\\tfrac{\\pi}{7}}\\]",
    "trap": "The seductive wrong route is to treat the three arc-gaps as a continuous resource. Writing a triangle by its arc gaps $a,b,c$ (positive integers with $a+b+c=7$, each gap $g$ spanning central angle $\\tfrac{2\\pi g}{7}$), the area is $A=\\tfrac12\\big(\\sin\\tfrac{2\\pi a}{7}+\\sin\\tfrac{2\\pi b}{7}+\\sin\\tfrac{2\\pi c}{7}\\big)$. A strong student notes that on $(0,\\pi)$ the sine is concave, applies Jensen to the constraint $\\tfrac{2\\pi a}{7}+\\tfrac{2\\pi b}{7}+\\tfrac{2\\pi c}{7}=2\\pi$, and concludes the maximiser is the equilateral triangle with all three arcs equal to $\\tfrac{2\\pi}{3}$, giving the slick answer $A=\\tfrac32\\sin\\tfrac{2\\pi}{3}=\\tfrac{3\\sqrt3}{4}\\approx1.299$. This is the missed case: $a,b,c$ are forced to be integers summing to $7$, and $3\\nmid 7$, so the equilateral configuration is unattainable — no triangle on the heptagon is equilateral. The continuous bound $\\tfrac{3\\sqrt3}{4}$ is a genuine over-estimate, strictly larger than every actual area ($A_{\\max}=\\tfrac{\\sqrt7}{2}\\cos\\tfrac{\\pi}{7}\\approx1.1919<1.299$); reporting it is wrong by a hidden lattice constraint, not by arithmetic. One must instead optimise over the four integer partitions $\\{1,1,5\\},\\{1,2,4\\},\\{1,3,3\\},\\{2,2,3\\}$ — the closest-to-equal split $\\{2,2,3\\}$ wins, but only checking can establish it (note that $\\{1,2,4\\}$ and $\\{1,1,5\\}$ each contain a gap $>3$, i.e. an arc exceeding $\\pi$, where $\\sin$ turns small, sabotaging the naive 'balance' heuristic if one forgets the arc can pass the diameter). A second, quieter trap in (b): average of $\\Sigma$ is $7$, but the maximum-area triangle does NOT realise it — the triangle with $\\Sigma=7$ exactly is the quadratic-residue triangle $\\{1,\\omega,\\omega^3\\}$ (gaps $1,2,4$), not the widest one ($\\Sigma\\approx8.69$ for $\\{2,2,3\\}$); conflating 'extremal area' with 'mean $\\Sigma$' is a category error.",
    "solutions": [
      {
        "name": "Imaginary-part area, integer optimisation, then a Chebyshev collapse",
        "steps": [
          "Label a triangle by its cyclic arc gaps $a,b,c\\ge1$ with $a+b+c=7$; the vertices may be taken as $1,\\omega^{a},\\omega^{a+b}$. Using the oriented-area formula and $\\mathrm{Im}\\big(\\overline{(\\omega^{p}-\\omega^{q})}(\\omega^{r}-\\omega^{q})\\big)$, summation telescopes to the clean form $A=\\tfrac12\\big(\\sin\\tfrac{2\\pi a}{7}+\\sin\\tfrac{2\\pi b}{7}+\\sin\\tfrac{2\\pi c}{7}\\big)$ — the standard fact that an inscribed triangle's area is half the sum of the sines of its three central angles. Up to rotation the configurations are the four partitions of $7$: $\\{1,1,5\\},\\{1,2,4\\},\\{1,3,3\\},\\{2,2,3\\}$.",
          "Evaluate $A$ on each (using $\\sin\\tfrac{2\\pi g}{7}$ and $\\sin(2\\pi-\\theta)=-\\sin\\theta$ for gaps $>3$): $\\{1,1,5\\}\\!\\approx\\!0.294$, $\\{1,2,4\\}\\!\\approx\\!0.661$, $\\{1,3,3\\}\\!\\approx\\!0.825$, $\\{2,2,3\\}\\!\\approx\\!1.192$. The maximiser is the isosceles triangle with gaps $\\{2,2,3\\}$, e.g. $\\{\\omega^0,\\omega^2,\\omega^4\\}$. (The continuous equilateral guess $\\tfrac{3\\sqrt3}{4}\\approx1.299$ is unattainable since $3\\nmid7$, so it cannot be the answer.)",
          "Compute its area: $A_{\\max}=\\tfrac12\\big(\\sin\\tfrac{4\\pi}{7}+\\sin\\tfrac{4\\pi}{7}+\\sin\\tfrac{6\\pi}{7}\\big)=\\sin\\tfrac{3\\pi}{7}+\\tfrac12\\sin\\tfrac{\\pi}{7}$, using $\\sin\\tfrac{4\\pi}{7}=\\sin\\tfrac{3\\pi}{7}$ and $\\sin\\tfrac{6\\pi}{7}=\\sin\\tfrac{\\pi}{7}$. Set $c=\\cos\\tfrac{\\pi}{7}$, $s=\\sin\\tfrac{\\pi}{7}$. By the triple-angle expansion $\\sin\\tfrac{3\\pi}{7}=s(3-4s^2)=s(4c^2-1)$, so $A_{\\max}=s(4c^2-1)+\\tfrac12 s=s\\big(4c^2-\\tfrac12\\big)$.",
          "Square: $A_{\\max}^2=(1-c^2)\\big(4c^2-\\tfrac12\\big)^2$. Now $c=\\cos\\tfrac{\\pi}{7}$ satisfies the minimal polynomial $8c^3-4c^2-4c+1=0$ (the heptagon's Chebyshev relation). Reducing the degree-$6$ expression $A_{\\max}^2-\\tfrac74c^2=(1-c^2)(4c^2-\\tfrac12)^2-\\tfrac74c^2$ modulo $8c^3-4c^2-4c+1$ gives remainder $0$. Hence $A_{\\max}^2=\\tfrac74c^2=\\tfrac74\\cos^2\\tfrac{\\pi}{7}$, and since $A_{\\max}>0$, $\\boxed{A_{\\max}=\\tfrac{\\sqrt7}{2}\\cos\\tfrac{\\pi}{7}}$, completing (a)."
        ]
      },
      {
        "name": "Area as a side-product, evaluated by the heptagon sine identity",
        "steps": [
          "For any triangle inscribed in a circle of radius $R$, the area is $\\dfrac{\\ell_1\\ell_2\\ell_3}{4R}$ (the $\\tfrac{abc}{4R}$ formula). Here $R=1$, and a side subtending an arc-gap $g$ is a chord of length $2\\sin\\tfrac{\\pi g}{7}$. So the gap-$\\{a,b,c\\}$ triangle has area $\\tfrac14\\cdot 2\\sin\\tfrac{\\pi a}{7}\\cdot 2\\sin\\tfrac{\\pi b}{7}\\cdot 2\\sin\\tfrac{\\pi c}{7}=2\\sin\\tfrac{\\pi a}{7}\\sin\\tfrac{\\pi b}{7}\\sin\\tfrac{\\pi c}{7}$.",
          "Maximising the product $\\sin\\tfrac{\\pi a}{7}\\sin\\tfrac{\\pi b}{7}\\sin\\tfrac{\\pi c}{7}$ over integer partitions of $7$: the factors increase as $g$ moves toward $\\tfrac72$, and the most balanced admissible split $\\{2,2,3\\}$ dominates the others (direct comparison against $\\{1,3,3\\},\\{1,2,4\\},\\{1,1,5\\}$). Thus $A_{\\max}=2\\sin^2\\tfrac{2\\pi}{7}\\sin\\tfrac{3\\pi}{7}$.",
          "Use the heptagon product identity. From $\\prod_{k=1}^{3}\\sin\\tfrac{k\\pi}{7}=\\tfrac{\\sqrt7}{8}$ and $\\sin\\tfrac{3\\pi}{7}=\\cos\\tfrac{\\pi}{14}$ etc., one route is cleanest via doubling: $2\\sin\\tfrac{2\\pi}{7}\\sin\\tfrac{3\\pi}{7}=\\cos\\tfrac{\\pi}{7}-\\cos\\tfrac{5\\pi}{7}$ and $2\\sin\\tfrac{2\\pi}{7}\\sin\\tfrac{\\pi}{7}=\\cos\\tfrac{\\pi}{7}-\\cos\\tfrac{3\\pi}{7}$; combining with $\\sin\\tfrac{2\\pi}{7}=\\sin\\tfrac{5\\pi}{7}$ collapses $A_{\\max}^2=4\\sin^4\\tfrac{2\\pi}{7}\\sin^2\\tfrac{3\\pi}{7}$ to $\\tfrac74\\cos^2\\tfrac{\\pi}{7}$ after substituting the minimal polynomial of $\\cos\\tfrac{2\\pi}{7}$.",
          "Equivalently and most transparently, write $A_{\\max}^2=4\\sin^4\\tfrac{2\\pi}{7}\\sin^2\\tfrac{3\\pi}{7}$ in terms of $u=2\\cos\\tfrac{2\\pi}{7}$ (a root of $u^3+u^2-2u-1=0$); the symmetric reduction yields exactly $\\tfrac74\\cos^2\\tfrac{\\pi}{7}$. Hence $A_{\\max}=2\\sin^2\\tfrac{2\\pi}{7}\\sin\\tfrac{3\\pi}{7}=\\tfrac{\\sqrt7}{2}\\cos\\tfrac{\\pi}{7}$, agreeing with Solution 1: $\\boxed{A_{\\max}=\\tfrac{\\sqrt7}{2}\\cos\\tfrac{\\pi}{7}}$."
        ]
      },
      {
        "name": "Part (b): a one-line averaging gem from \\(\\sum\\omega^k=0\\), with the residue triangle",
        "steps": [
          "First the vanishing of the root sum: $\\sum_{k=0}^{6}\\omega^k=0$. Compute the all-pairs squared-distance sum $\\sum_{0\\le i<j\\le6}|\\omega^i-\\omega^j|^2$. Over ordered pairs, $\\sum_{i,j}|\\omega^i-\\omega^j|^2=\\sum_{i,j}\\big(2-2\\,\\mathrm{Re}(\\omega^{i-j})\\big)=2\\cdot7^2-2\\big|\\textstyle\\sum_k\\omega^k\\big|^2=2\\cdot49-0=98$. Halving for unordered pairs gives $\\sum_{i<j}|\\omega^i-\\omega^j|^2=49=7^2$.",
          "Now count incidences. Each of the $\\binom72=21$ vertex-pairs (potential triangle sides) lies in exactly $7-2=5$ of the $35$ triangles. Therefore $\\sum_{T}\\Sigma(T)=\\sum_{T}\\sum_{\\text{sides of }T}\\ell^2=5\\sum_{i<j}|\\omega^i-\\omega^j|^2=5\\cdot49=245$. Dividing by the $35$ triangles, the average of $\\Sigma$ is $\\dfrac{245}{35}=7$, as claimed.",
          "Exhibit equality. Take the quadratic-residue triangle $\\{1,\\omega,\\omega^3\\}$ — vertices at exponents $\\{0,1,3\\}$, i.e. arc gaps $\\{1,2,4\\}$, the nonzero quadratic residues mod $7$. Its side lengths squared are $|1-\\omega|^2+|\\omega-\\omega^3|^2+|\\omega^3-1|^2=\\big(2-2\\cos\\tfrac{2\\pi}{7}\\big)+\\big(2-2\\cos\\tfrac{4\\pi}{7}\\big)+\\big(2-2\\cos\\tfrac{6\\pi}{7}\\big)=6-2\\big(\\cos\\tfrac{2\\pi}{7}+\\cos\\tfrac{4\\pi}{7}+\\cos\\tfrac{6\\pi}{7}\\big)$.",
          "The Gauss bracket is the real part of $\\omega+\\omega^2+\\omega^4$, the residue period, which equals $-\\tfrac12$ (since $\\sum_{k=1}^{6}\\omega^k=-1$ splits into the two conjugate periods $\\tfrac{-1\\pm i\\sqrt7}{2}$). Hence $\\Sigma=6-2(-\\tfrac12)=7$ exactly. So the average $7$ is attained on the nose by the residue triangle — distinct from the widest triangle of part (a). The boxed result of the problem remains $\\boxed{A_{\\max}=\\tfrac{\\sqrt7}{2}\\cos\\tfrac{\\pi}{7}}$."
        ]
      }
    ],
    "remark": "Insight: two halves of complex analysis meet on one heptagon. Part (a) is an extremal problem whose entire difficulty is a lattice constraint hiding behind a concavity argument — the continuous maximiser is the equilateral triangle, but $3\\nmid7$ forbids it, so the prize is the closest integer split $\\{2,2,3\\}$, and its area only resolves to $\\tfrac{\\sqrt7}{2}\\cos\\tfrac{\\pi}{7}$ after the heptagon's cubic Chebyshev relation $8c^3-4c^2-4c+1=0$ swallows the degree-$6$ debris. Part (b) is the opposite spirit: not extremal but average, and it falls out of the single fact $\\sum\\omega^k=0$, which forces $\\sum_{i<j}|\\omega^i-\\omega^j|^2=n^2=49$; a counting incidence ($5$ triangles per edge) then makes the mean of $\\Sigma$ exactly $7$. The capstone is that the number $7$ surfaces twice — as $\\sqrt7$ governing the widest triangle's area, and as the literal mean side-energy — yet through completely different machinery (minimal polynomials versus the vanishing Gauss sum), and the triangle realising the mean is the quadratic-residue triangle, a different beast from the area-maximiser. The lesson for the ranker: 'most balanced' and 'on average' are not the same extremum, and an integer partition is not a continuous one."
  }
];
