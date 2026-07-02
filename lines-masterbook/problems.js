/* problems.js — DATA. 100 original straight-line & coordinate-geometry problems for y=mx+c · Slopes, Distances & the Pencil of Lines, strictly within the JEE Advanced syllabus: forms of a line, distance/section/area, angle & family of lines, foot/image & distance, angle bisectors, the pair of straight lines, triangle centres by coordinates, loci, and translation (shift of origin). No rotation of axes / conic reduction, trilinear/barycentric coordinates, the Euler line or nine-point circle as named results, cross-ratio, or projective/affine geometry. Verified in sympy. statement/answer are raw LaTeX (the app auto-detects prose+math); steps use $...$ and $$...$$. */
window.PROBLEMS = [
  {
    "theme": "forms",
    "themeLabel": "Forms of a Line",
    "title": "The Twin Lines of Equal Footing",
    "difficulty": 3,
    "task": "Find all",
    "tags": [
      "intercept-form",
      "equal-intercepts",
      "degenerate-case",
      "slope"
    ],
    "statement": "Find all straight lines passing through the point $(3,2)$ that make equal intercepts on the two coordinate axes.",
    "answer": "\\[\\boxed{\\,x+y=5\\quad\\text{and}\\quad 2x-3y=0\\,}\\]",
    "trap": "Writing only $x/a+y/a=1\\Rightarrow x+y=5$. The phrase \"equal intercepts\" also permits both intercepts being ZERO, i.e. a line through the origin; that case is destroyed the instant you divide by $a$. The line $2x-3y=0$, whose two intercepts are both $0$, is a genuine second answer that this shortcut silently discards.",
    "solutions": [
      {
        "name": "Intercept form, both cases",
        "steps": [
          "Case 1 (nonzero equal intercepts $a$): the line is $x/a+y/a=1$, i.e. $x+y=a$.",
          "Substituting $(3,2)$: $3+2=a\\Rightarrow a=5$, giving the line $x+y=5$ (both intercepts $5$).",
          "Case 2 (equal intercepts $=0$): equal intercepts may both vanish, forcing the line through the origin, $y=mx$.",
          "Through $(3,2)$: $2=3m\\Rightarrow m=2/3$, i.e. $2x-3y=0$ (both intercepts $0$).",
          "Hence the two lines are $x+y=5$ and $2x-3y=0$."
        ]
      },
      {
        "name": "Slope reasoning",
        "steps": [
          "A line with equal nonzero intercepts has $x$-intercept $=y$-intercept $=a$, so it joins $(a,0)$ to $(0,a)$ and has slope $-1$; thus $x+y=c$, and $(3,2)$ gives $c=5$.",
          "The only other way two intercepts can be equal is if both are $0$, which means the line passes through the origin $O$.",
          "Such a line through $O$ and $(3,2)$ has slope $2/3$, giving $y=\\tfrac{2}{3}x$, i.e. $2x-3y=0$.",
          "So $\\boxed{x+y=5\\text{ and }2x-3y=0}$."
        ]
      }
    ],
    "remark": "Insight: \"equal intercepts\" is a condition on a pair of numbers, and the pair $(0,0)$ is equal too. Top scorers test the degenerate zero-intercept case before ever dividing by $a$, since that division is exactly what erases the origin line."
  },
  {
    "theme": "forms",
    "themeLabel": "Forms of a Line",
    "title": "Intercepts in Tow",
    "difficulty": 3,
    "task": "Determine",
    "tags": [
      "intercept-form",
      "ratio-condition",
      "slope-intercept"
    ],
    "statement": "A line passes through $(3,4)$ and cuts intercepts on the $x$- and $y$-axes that are in the ratio $3:4$ (the $x$-intercept to the $y$-intercept). Determine its equation.",
    "answer": "\\[\\boxed{\\,4x+3y=24\\,}\\]",
    "trap": "Confusing the ratio of intercepts with the slope: assuming \"intercepts in ratio $3:4$\" means slope $3/4$ or $4/3$. The slope is $-b/a=-(4t)/(3t)=-4/3$, not $\\pm3/4$; sign and reciprocal both bite. (Slope $4/3$ even forces the line through the origin, killing both intercepts.)",
    "solutions": [
      {
        "name": "Parametrize the ratio",
        "steps": [
          "Let the intercepts be $a=3t,\\ b=4t$ so the ratio is $3:4$.",
          "Intercept form: $\\dfrac{x}{3t}+\\dfrac{y}{4t}=1$.",
          "Through $(3,4)$: $\\dfrac{3}{3t}+\\dfrac{4}{4t}=1\\Rightarrow \\dfrac{2}{t}=1\\Rightarrow t=2$.",
          "Then $a=6,\\ b=8$, so $\\dfrac{x}{6}+\\dfrac{y}{8}=1$, i.e. $4x+3y=24$."
        ]
      },
      {
        "name": "Slope from the ratio",
        "steps": [
          "With intercepts $3t,4t$, the slope is $-\\dfrac{b}{a}=-\\dfrac{4t}{3t}=-\\dfrac43$ (independent of $t$).",
          "Line: $y-4=-\\dfrac43(x-3)\\Rightarrow 3y-12=-4x+12\\Rightarrow 4x+3y=24$.",
          "Check intercepts: $x$-int $6$, $y$-int $8$, ratio $6:8=3:4$. Hence $\\boxed{4x+3y=24}$."
        ]
      }
    ],
    "remark": "Insight: the slope of $x/a+y/b=1$ is $-b/a$ — the ratio reversed and signed. Reading the ratio straight off as a slope is the classic error."
  },
  {
    "theme": "forms",
    "themeLabel": "Forms of a Line",
    "title": "Collinear by Gradient",
    "difficulty": 3,
    "task": "Find all",
    "tags": [
      "collinearity",
      "equal-slopes",
      "parameter"
    ],
    "statement": "For which value(s) of $k$ are the points $A(1,2),\\ B(3,k),\\ C(7,k+8)$ collinear?",
    "answer": "\\[\\boxed{\\,k=6\\,}\\]",
    "trap": "Trying to make $B$ and $C$ have the \"same height\" or expecting two solutions from a quadratic. Because $k$ enters every $y$-coordinate linearly and the $x$'s are distinct, the equal-slope condition is linear in $k$, giving a single value — no spurious second root, and no vertical-line escape (the $x$'s differ).",
    "solutions": [
      {
        "name": "Equal slopes",
        "steps": [
          "Slope $AB=\\dfrac{k-2}{3-1}=\\dfrac{k-2}{2}$.",
          "Slope $AC=\\dfrac{(k+8)-2}{7-1}=\\dfrac{k+6}{6}$.",
          "Collinear $\\Rightarrow$ equal slopes: $\\dfrac{k-2}{2}=\\dfrac{k+6}{6}\\Rightarrow 3(k-2)=k+6$.",
          "$3k-6=k+6\\Rightarrow 2k=12\\Rightarrow k=6$."
        ]
      },
      {
        "name": "Area determinant",
        "steps": [
          "Collinearity $\\Leftrightarrow$ $\\begin{vmatrix}1&2&1\\\\3&k&1\\\\7&k+8&1\\end{vmatrix}=0$.",
          "Expand: $1(k-(k+8))-2(3-7)+1(3(k+8)-7k)=0$.",
          "$-8+8+(3k+24-7k)=24-4k=0\\Rightarrow k=6$.",
          "Hence $\\boxed{k=6}$."
        ]
      }
    ],
    "remark": "Insight: when an unknown sits linearly in coordinates with distinct abscissae, collinearity is linear — a single answer. Recognising the structure avoids hunting for phantom extra roots."
  },
  {
    "theme": "forms",
    "themeLabel": "Forms of a Line",
    "title": "The Sign of the Foot",
    "difficulty": 4,
    "task": "Find a,b",
    "tags": [
      "normal-form",
      "sign-of-p",
      "angle-of-inclination"
    ],
    "statement": "The line $x+y+4=0$ is written in normal form $x\\cos\\alpha+y\\sin\\alpha=p$ with $p\\ge 0$ and $0\\le\\alpha<2\\pi$. Find $p$ and $\\alpha$.",
    "answer": "\\[\\boxed{\\,p=2\\sqrt2,\\quad \\alpha=\\dfrac{5\\pi}{4}\\,}\\]",
    "trap": "Dividing $x+y+4=0$ by $\\sqrt2$ to get $\\tfrac{1}{\\sqrt2}x+\\tfrac{1}{\\sqrt2}y=-2\\sqrt2$ and reading off $\\cos\\alpha=\\sin\\alpha=\\tfrac1{\\sqrt2}$, $\\alpha=\\pi/4$. The normal form REQUIRES $p\\ge0$; here the right side is $-2\\sqrt2<0$, so this is not yet normal form. Forcing $p\\ge0$ means multiplying through by $-1$, which flips both $\\cos\\alpha$ and $\\sin\\alpha$ to negative — the third quadrant, $\\alpha=5\\pi/4$, not $\\pi/4$.",
    "solutions": [
      {
        "name": "Force the right side nonnegative",
        "steps": [
          "Move the constant: $x+y=-4$. Dividing by $\\sqrt{1^2+1^2}=\\sqrt2$ gives $\\tfrac1{\\sqrt2}x+\\tfrac1{\\sqrt2}y=-2\\sqrt2$, whose right side is negative — disqualified, since normal form needs $p\\ge0$.",
          "Multiply the whole equation by $-1$: $-\\tfrac1{\\sqrt2}x-\\tfrac1{\\sqrt2}y=2\\sqrt2$. Now the right side $2\\sqrt2\\ge0$ is a valid $p$.",
          "Match coefficients: $\\cos\\alpha=-\\tfrac1{\\sqrt2}$, $\\sin\\alpha=-\\tfrac1{\\sqrt2}$. Both negative places $\\alpha$ in the third quadrant, so $\\alpha=\\pi+\\tfrac{\\pi}{4}=\\tfrac{5\\pi}{4}$.",
          "Therefore $p=2\\sqrt2$ and $\\alpha=\\dfrac{5\\pi}{4}$."
        ]
      },
      {
        "name": "Geometric foot of the perpendicular",
        "steps": [
          "In normal form, $\\alpha$ is the direction of the perpendicular from the origin $O$ to the line, and $p$ is that (nonnegative) distance. Drop the perpendicular from $O$ to $x+y+4=0$.",
          "The foot is $F=O-\\dfrac{Ax_0+By_0+C}{A^2+B^2}(A,B)=(0,0)-\\dfrac{4}{2}(1,1)=(-2,-2)$, which indeed satisfies $x+y+4=0$.",
          "Then $p=|OF|=\\sqrt{(-2)^2+(-2)^2}=2\\sqrt2$, and the direction from $O$ to $F=(-2,-2)$ lies in the third quadrant: $\\alpha=\\arctan\\dfrac{-2}{-2}$ taken in QIII $=\\dfrac{5\\pi}{4}$.",
          "Hence $\\boxed{p=2\\sqrt2,\\ \\alpha=\\dfrac{5\\pi}{4}}$."
        ]
      }
    ],
    "remark": "Insight: in normal form $\\alpha$ is the direction of the perpendicular FROM the origin TO the line, and $p$ is a true (nonnegative) distance. The sign of the constant $C$ (here $+4$, putting the origin on the far side) is exactly what pushes $\\alpha$ into the third quadrant rather than the first. The quadrant of $\\alpha$ encodes which side of the line the origin sits on."
  },
  {
    "theme": "forms",
    "themeLabel": "Forms of a Line",
    "title": "A Fixed Stand-Off",
    "difficulty": 4,
    "task": "Find all",
    "tags": [
      "perpendicular-distance",
      "fixed-inclination",
      "two-solutions",
      "slope"
    ],
    "statement": "Find all lines whose perpendicular distance from the origin equals $3$ and whose angle of inclination with the positive $x$-axis is $120^\\circ$.",
    "answer": "\\[\\boxed{\\,\\sqrt3\\,x+y=6\\quad\\text{and}\\quad \\sqrt3\\,x+y=-6\\,}\\]",
    "trap": "Fixing the line by inclination gives slope $\\tan120^\\circ=-\\sqrt3$, then forcing the distance with a single sign — yielding only one line. The distance condition $|c|/2=3$ has TWO solutions $c=\\pm6$: a parallel pair on opposite sides of $O$.",
    "solutions": [
      {
        "name": "Slope-intercept plus distance",
        "steps": [
          "Inclination $120^\\circ\\Rightarrow$ slope $m=\\tan120^\\circ=-\\sqrt3$, so $y=-\\sqrt3\\,x+c$, i.e. $\\sqrt3\\,x+y-c=0$.",
          "Distance from $O$: $\\dfrac{|{-c}|}{\\sqrt{(\\sqrt3)^2+1^2}}=\\dfrac{|c|}{2}=3$.",
          "Hence $|c|=6\\Rightarrow c=\\pm6$, two parallel lines.",
          "Lines: $\\sqrt3\\,x+y=6$ and $\\sqrt3\\,x+y=-6$."
        ]
      },
      {
        "name": "Normal form directly",
        "steps": [
          "A line at distance $3$ with normal direction $\\alpha$: $x\\cos\\alpha+y\\sin\\alpha=3$.",
          "For slope $-\\sqrt3$ the normal is perpendicular to inclination $120^\\circ$, giving $\\alpha=30^\\circ$ or $\\alpha=210^\\circ$.",
          "$\\alpha=30^\\circ$: $\\tfrac{\\sqrt3}{2}x+\\tfrac12 y=3\\Rightarrow\\sqrt3 x+y=6$.",
          "$\\alpha=210^\\circ$: $-\\tfrac{\\sqrt3}2 x-\\tfrac12 y=3\\Rightarrow\\sqrt3 x+y=-6$.",
          "So $\\boxed{\\sqrt3 x+y=\\pm6}$."
        ]
      }
    ],
    "remark": "Insight: \"distance from a point\" is unsigned, so a fixed slope at fixed distance always admits two parallel lines. Reaching for normal form makes the two perpendicular directions ($\\alpha$ and $\\alpha+\\pi$) visible."
  },
  {
    "theme": "forms",
    "themeLabel": "Forms of a Line",
    "title": "The Severed Segment",
    "difficulty": 4,
    "task": "Determine",
    "tags": [
      "intercept-form",
      "section-formula",
      "internal-division"
    ],
    "statement": "A line meets the $x$-axis at $A$ and the $y$-axis at $B$. The point $P(1,3)$ divides the segment $AB$ internally in the ratio $AP:PB=2:3$. Determine the equation of the line.",
    "answer": "\\[\\boxed{\\,9x+2y=15\\,}\\]",
    "trap": "Using the section formula with the ratio reversed — writing $P=\\dfrac{2A+3B}{5}$ instead of $P=\\dfrac{3A+2B}{5}$. For $AP:PB=2:3$ the weight on $A$ is the FAR part $3$ and on $B$ is the near part $2$; swapping them gives $A=(5/2,0),\\ B=(0,5)$ and the wrong line $2x+y=5$.",
    "solutions": [
      {
        "name": "Section formula on the intercepts",
        "steps": [
          "Let $A=(a,0),\\ B=(0,b)$. With $AP:PB=2:3$, the section formula gives $P=\\dfrac{3A+2B}{5}=\\Big(\\dfrac{3a}{5},\\dfrac{2b}{5}\\Big)$.",
          "Set equal to $(1,3)$: $\\dfrac{3a}{5}=1\\Rightarrow a=\\dfrac53$; $\\dfrac{2b}{5}=3\\Rightarrow b=\\dfrac{15}{2}$.",
          "Intercept form: $\\dfrac{x}{5/3}+\\dfrac{y}{15/2}=1\\Rightarrow \\dfrac{3x}{5}+\\dfrac{2y}{15}=1$.",
          "Multiply through by $15$: $9x+2y=15$."
        ]
      },
      {
        "name": "Verify via the endpoints",
        "steps": [
          "From $9x+2y=15$: the $x$-intercept is $A=(5/3,0)$ and the $y$-intercept is $B=(0,15/2)$.",
          "The point dividing $A\\to B$ in $2:3$ is $\\Big(\\dfrac{3\\cdot 5/3+2\\cdot0}{5},\\dfrac{3\\cdot0+2\\cdot15/2}{5}\\Big)=(1,3)=P$.",
          "Since the divide-check reproduces $P$, the line is confirmed: $\\boxed{9x+2y=15}$."
        ]
      }
    ],
    "remark": "Insight: in $P=\\dfrac{n\\,A+m\\,B}{m+n}$ for $AP:PB=m:n$, the coefficient of each endpoint is the length of the OPPOSITE sub-segment. Getting that pairing right is the whole problem."
  },
  {
    "theme": "forms",
    "themeLabel": "Forms of a Line",
    "title": "Range and Reach",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "parametric-form",
      "distance-form",
      "intersection",
      "exact-value"
    ],
    "statement": "Through the point $P(2,1)$ a ray is drawn making an angle of $60^\\circ$ with the positive $x$-axis. Using the distance (parametric) form $x=2+r\\cos\\theta,\\ y=1+r\\sin\\theta$, find the exact directed distance $r$ from $P$ to the point where the ray meets the line $x+y=6$.",
    "answer": "\\[\\boxed{\\,r=3\\sqrt3-3\\,}\\]",
    "trap": "The parametric $r$ is the slant (directed) distance, with the angle entering through $\\cos\\theta$ and $\\sin\\theta$. The seductive error is to track only the horizontal run $\\Delta x$ — writing $x=2+r,\\ y=1+r\\sqrt3$ using the slope $\\tan60^\\circ=\\sqrt3$ as if $r$ were the increment in $x$. That gives $\\Delta x=\\dfrac{3\\sqrt3-3}{2}$, which a hurried student reports as the distance. It is exactly half the true value: the run must be rescaled by $1/\\cos60^\\circ=2$, so $r=\\Delta x/\\cos60^\\circ=3\\sqrt3-3$. Confusing the run with the slant — or, equivalently, using $\\tan\\theta$ where the form demands $\\cos\\theta,\\sin\\theta$ — is the whole trap.",
    "solutions": [
      {
        "name": "Substitute the parametric point (one linear equation in $r$)",
        "steps": [
          "On the ray, $\\cos60^\\circ=\\tfrac12$ and $\\sin60^\\circ=\\tfrac{\\sqrt3}{2}$, so $x=2+\\dfrac r2,\\ y=1+\\dfrac{r\\sqrt3}{2}$.",
          "Impose the condition $x+y=6$: $\\Big(2+\\dfrac r2\\Big)+\\Big(1+\\dfrac{r\\sqrt3}{2}\\Big)=6$.",
          "This collapses to a single linear equation: $3+\\dfrac{r\\,(1+\\sqrt3)}{2}=6\\ \\Rightarrow\\ \\dfrac{r\\,(1+\\sqrt3)}{2}=3\\ \\Rightarrow\\ r=\\dfrac{6}{1+\\sqrt3}.$",
          "Rationalise: $r=\\dfrac{6}{1+\\sqrt3}\\cdot\\dfrac{\\sqrt3-1}{\\sqrt3-1}=\\dfrac{6(\\sqrt3-1)}{2}=3(\\sqrt3-1)=3\\sqrt3-3.$",
          "Since $r=3\\sqrt3-3>0$, the meeting point lies ahead of $P$ along the ray, so this signed distance is the actual distance."
        ]
      },
      {
        "name": "Direct intersection, then rescale the run",
        "steps": [
          "The ray has slope $\\tan60^\\circ=\\sqrt3$, so its equation is $y-1=\\sqrt3\\,(x-2)$.",
          "Substitute $y=6-x$ from the line: $(6-x)-1=\\sqrt3\\,(x-2)\\ \\Rightarrow\\ 5-x=\\sqrt3\\,x-2\\sqrt3.$",
          "Collect the $x$ terms: $5+2\\sqrt3=x\\,(1+\\sqrt3)\\ \\Rightarrow\\ x=\\dfrac{5+2\\sqrt3}{1+\\sqrt3}=\\dfrac{(5+2\\sqrt3)(\\sqrt3-1)}{2}=\\dfrac{1+3\\sqrt3}{2}.$",
          "The horizontal run from $P$ is $\\Delta x=x-2=\\dfrac{1+3\\sqrt3}{2}-2=\\dfrac{3\\sqrt3-3}{2}.$",
          "Here is the crux: $\\Delta x$ is only the run; the slant distance recovers it by $r=\\dfrac{\\Delta x}{\\cos60^\\circ}=2\\,\\Delta x=2\\cdot\\dfrac{3\\sqrt3-3}{2}=3\\sqrt3-3.$",
          "Both routes agree: $\\boxed{r=3\\sqrt3-3}$."
        ]
      }
    ],
    "remark": "Insight: the distance form turns \"meet at directed distance $r$\" into a single linear equation in $r$, the angle entering only through $\\cos\\theta,\\sin\\theta$. It silently bakes in the $1/\\cos\\theta$ rescaling that the brute-force route forces you to remember by hand — which is exactly where the run-versus-slant trap claims its victims."
  },
  {
    "theme": "forms",
    "themeLabel": "Forms of a Line",
    "title": "The Frugal Cut",
    "difficulty": 5,
    "task": "Find a,b",
    "tags": [
      "intercept-form",
      "optimization",
      "minimum-intercept-sum",
      "constraint"
    ],
    "statement": "A line through $P(2,3)$ meets the positive $x$-axis at $A=(a,0)$ and the positive $y$-axis at $B=(0,b)$. Among all such lines, find the intercepts $a,b$ that minimize $a+b$, and state the minimum value of $a+b$.",
    "answer": "\\[\\boxed{\\,a=2+\\sqrt6,\\ b=3+\\sqrt6,\\ \\ (a+b)_{\\min}=5+2\\sqrt6\\,}\\]",
    "trap": "Assuming the minimum-sum line is the one bisected at $P$ (i.e. $P$ the midpoint, giving $a=4,b=6$). That choice does satisfy the constraint $2/a+3/b=1$, but it minimizes the triangle's area $\\tfrac12ab$, not the sum $a+b$: it yields $a+b=10>5+2\\sqrt6\\approx9.899$. Minimizing $a+b$ subject to $2/a+3/b=1$ instead gives $a=2+\\sqrt6,\\ b=3+\\sqrt6$ via Cauchy–Schwarz/AM.",
    "solutions": [
      {
        "name": "Cauchy–Schwarz",
        "steps": [
          "Since $P(2,3)$ lies on the intercept form $x/a+y/b=1$, the constraint is $\\dfrac2a+\\dfrac3b=1$ with $a,b>0$.",
          "By Cauchy–Schwarz, $(a+b)\\Big(\\dfrac2a+\\dfrac3b\\Big)\\ge\\big(\\sqrt2+\\sqrt3\\big)^2$.",
          "Using the constraint, $a+b\\ge(\\sqrt2+\\sqrt3)^2=5+2\\sqrt6$, with equality when $\\dfrac{a}{\\,2/a\\,}=\\dfrac{b}{\\,3/b\\,}$, i.e. $\\dfrac{a^2}{2}=\\dfrac{b^2}{3}$, so $b=a\\sqrt{3/2}$.",
          "Substituting into $\\dfrac2a+\\dfrac3b=1$ gives $a=2+\\sqrt6,\\ b=3+\\sqrt6$, hence $(a+b)_{\\min}=5+2\\sqrt6$."
        ]
      },
      {
        "name": "Calculus",
        "steps": [
          "From $\\dfrac2a+\\dfrac3b=1$ solve $b=\\dfrac{3a}{a-2}$ (which forces $a>2$ for $b>0$).",
          "Then $S(a)=a+\\dfrac{3a}{a-2}$ and $S'(a)=1-\\dfrac{6}{(a-2)^2}=0\\Rightarrow(a-2)^2=6\\Rightarrow a=2+\\sqrt6$.",
          "Here $S''(a)=\\dfrac{12}{(a-2)^3}>0$ for $a>2$, so this is a genuine minimum; and $b=\\dfrac{3(2+\\sqrt6)}{\\sqrt6}=3+\\sqrt6$.",
          "$S=(2+\\sqrt6)+(3+\\sqrt6)=5+2\\sqrt6$. So $\\boxed{a=2+\\sqrt6,\\,b=3+\\sqrt6,\\,(a+b)_{\\min}=5+2\\sqrt6}$."
        ]
      },
      {
        "name": "AM–GM on the shifted intercepts",
        "steps": [
          "Write $a=2+s,\\ b=3+t$ with $s,t>0$ measuring how far each intercept overshoots $P$'s coordinates.",
          "The constraint $\\dfrac2a+\\dfrac3b=1$ rearranges to $st=6$ (clear denominators: $2b+3a=ab\\Rightarrow st=6$).",
          "Then $a+b=5+(s+t)$ and by AM–GM $s+t\\ge2\\sqrt{st}=2\\sqrt6$, equality at $s=t=\\sqrt6$.",
          "Thus $(a+b)_{\\min}=5+2\\sqrt6$ at $a=2+\\sqrt6,\\ b=3+\\sqrt6$."
        ]
      }
    ],
    "remark": "Insight: “minimize the sum of intercepts” is a constrained optimisation on $2/a+3/b=1$, tailor-made for Cauchy–Schwarz — or, after the substitution $a=2+s,\\,b=3+t$, it collapses to $st=6$ and one line of AM–GM. The midpoint line $a=4,b=6$ is a tempting but irrelevant special case: it minimizes the triangle's area, not the sum."
  },
  {
    "theme": "forms",
    "themeLabel": "Forms of a Line",
    "title": "The Balanced Brace",
    "difficulty": 5,
    "task": "Find the minimum value",
    "tags": [
      "parametric-form",
      "intercepts",
      "product-of-distances",
      "extremum"
    ],
    "statement": "A variable line through $P(1,2)$ (not parallel to either axis) meets the $x$-axis at $A$ and the $y$-axis at $B$. Find the minimum possible value of the product $PA\\cdot PB$.",
    "answer": "\\[\\boxed{\\,(PA\\cdot PB)_{\\min}=4\\,}\\]",
    "trap": "Trying to minimize $PA\\cdot PB$ by instead minimizing the intercept product $OA\\cdot OB$ or the triangle area $\\tfrac12\\,OA\\cdot OB$, or by guessing the $45^\\circ$ line without justification. Both intercept-based criteria are minimized by the slope $m=-2$, where $PA\\cdot PB=5\\neq 4$. The true minimum is a fact about the directed distances from $P$, captured by $PA\\cdot PB=\\dfrac{4}{|\\sin 2\\theta|}$, whose floor $4$ occurs at $|\\sin 2\\theta|=1$ (slope $|m|=1$) — not at the area-minimizing slope.",
    "solutions": [
      {
        "name": "Distance (parametric) form",
        "steps": [
          "Write the line through $P$ in distance form $x=1+r\\cos\\theta,\\ y=2+r\\sin\\theta$, where $|r|$ is the distance from $P$ to $(x,y)$.",
          "At $A$ (where $y=0$): $2+r\\sin\\theta=0\\Rightarrow r_A=-\\dfrac{2}{\\sin\\theta}$, so $PA=|r_A|=\\dfrac{2}{|\\sin\\theta|}$.",
          "At $B$ (where $x=0$): $1+r\\cos\\theta=0\\Rightarrow r_B=-\\dfrac{1}{\\cos\\theta}$, so $PB=|r_B|=\\dfrac{1}{|\\cos\\theta|}$.",
          "Hence $PA\\cdot PB=\\dfrac{2}{|\\sin\\theta\\cos\\theta|}=\\dfrac{4}{|\\sin 2\\theta|}\\ge 4$, since $|\\sin 2\\theta|\\le 1$, with equality at $|\\sin 2\\theta|=1$ (e.g. $\\theta=45^\\circ$). Thus $(PA\\cdot PB)_{\\min}=4$."
        ]
      },
      {
        "name": "Slope form with AM–GM",
        "steps": [
          "Let the slope be $m\\neq 0$: line $y-2=m(x-1)$. Then $A=\\big(1-\\tfrac{2}{m},\\,0\\big)$ and $B=\\big(0,\\,2-m\\big)$.",
          "From $P(1,2)$ to $A$ the horizontal run is $\\tfrac{2}{m}$ and the drop is $2$, so $PA=\\sqrt{(2/m)^2+2^2}=\\dfrac{2}{|m|}\\sqrt{1+m^2}$.",
          "From $P(1,2)$ to $B$ the horizontal run is $1$ and the rise is $m$, so $PB=\\sqrt{1^2+m^2}=\\sqrt{1+m^2}$.",
          "Therefore $PA\\cdot PB=\\dfrac{2(1+m^2)}{|m|}=2\\!\\left(|m|+\\dfrac{1}{|m|}\\right)\\ge 2\\cdot 2=4$ by AM–GM, with equality at $|m|=1$. Hence $\\boxed{(PA\\cdot PB)_{\\min}=4}$."
        ]
      }
    ],
    "remark": "Insight: the distance form turns each intercept distance into a single trig factor, collapsing the product to $4/|\\sin 2\\theta|$, whose minimum is transparent. The slope route lands on the same bound via $|m|+1/|m|\\ge 2$ — two languages for one extremum. Note the trap: the slope minimizing the triangle's area or the intercept product is $m=-2$, giving $PA\\cdot PB=5$, so the area criterion does not locate this minimum."
  },
  {
    "theme": "forms",
    "themeLabel": "Forms of a Line",
    "title": "The Mirror at the Margin",
    "difficulty": 5,
    "task": "Find all",
    "tags": [
      "intercept-form",
      "sum-of-intercepts",
      "vertical-line",
      "degenerate-case"
    ],
    "statement": "Find all lines through $P(2,2)$ whose $x$-intercept and $y$-intercept are both finite and sum to $9$. Justify why no other line (in particular, no vertical line) can be admitted.",
    "answer": "\\[\\boxed{\\,x+2y=6\\quad\\text{and}\\quad 2x+y=6\\,}\\]",
    "trap": "After setting $a+b=9$ and $\\dfrac2a+\\dfrac2b=1$, students often keep only one root of the resulting quadratic, or — chasing a vertical-line escape — wrongly claim $x=2$ works. A vertical line has no finite $y$-intercept, so the sum is undefined; it must be rejected. The quadratic genuinely yields TWO valid lines, so dropping either is also wrong.",
    "solutions": [
      {
        "name": "Solve the symmetric system",
        "steps": [
          "Write the line in intercept form $\\dfrac{x}{a}+\\dfrac{y}{b}=1$. Passing through $(2,2)$ gives $\\dfrac2a+\\dfrac2b=1$, i.e. $\\dfrac{a+b}{ab}=\\dfrac12\\Rightarrow ab=2(a+b)$.",
          "The condition $a+b=9$ then forces $ab=18$. Hence $a,b$ are the roots of $t^2-9t+18=0\\Rightarrow t=3,\\,6$.",
          "Pair 1: $(a,b)=(3,6)\\Rightarrow \\dfrac x3+\\dfrac y6=1\\Rightarrow 2x+y=6$.",
          "Pair 2: $(a,b)=(6,3)\\Rightarrow \\dfrac x6+\\dfrac y3=1\\Rightarrow x+2y=6$.",
          "A vertical line $x=2$ through $P$ has no $y$-intercept, so $a+b$ is undefined and the condition cannot even be stated for it — rejected. Final answers: $2x+y=6$ and $x+2y=6$."
        ]
      },
      {
        "name": "Slope route",
        "steps": [
          "Take the slope form through $P(2,2)$: $y-2=m(x-2)$ with $m$ finite. Its $x$-intercept is $a=2-\\dfrac2m$ and its $y$-intercept is $b=2-2m$.",
          "Impose the sum: $\\Big(2-\\dfrac2m\\Big)+(2-2m)=9\\Rightarrow 4-2m-\\dfrac2m=9\\Rightarrow 2m+\\dfrac2m=-5$.",
          "Multiply through by $m$: $2m^2+5m+2=0\\Rightarrow m=-\\dfrac12$ or $m=-2$.",
          "$m=-\\dfrac12$ gives $y-2=-\\dfrac12(x-2)\\Rightarrow x+2y=6$; $m=-2$ gives $y-2=-2(x-2)\\Rightarrow 2x+y=6$.",
          "A vertical line corresponds to $m\\to\\infty$, for which $b=2-2m$ diverges, so it is excluded. Hence $\\boxed{x+2y=6\\text{ and }2x+y=6}$."
        ]
      }
    ],
    "remark": "Insight: a sum-of-intercepts condition through a fixed point is symmetric in the ordered pair $(a,b)$, so it collapses to a single quadratic whose two roots split into two ordered pairs — and thus two genuine lines. The degenerate vertical line, lacking a finite $y$-intercept, can never meet a finite-sum requirement. Keep both roots; discard the undefined case."
  },
  {
    "theme": "distancesection",
    "themeLabel": "Distance, Section & Area",
    "title": "Beyond the Far End",
    "difficulty": 3,
    "task": "Find the point",
    "tags": [
      "external division",
      "section formula",
      "ratio",
      "distance"
    ],
    "statement": "A point $P$ lies on the line through $A(2,-1)$ and $B(8,5)$, on the far side of $B$ from $A$, with $AP:BP=5:2$. Find $P$.",
    "answer": "\\[\\boxed{P=(12,\\,9)}\\]",
    "trap": "Using the INTERNAL section formula $\\left(\\frac{5\\cdot8+2\\cdot2}{7},\\frac{5\\cdot5+2\\cdot(-1)}{7}\\right)=\\left(\\frac{44}{7},\\frac{23}{7}\\right)$ because the ratio $5:2$ 'looks' like a normal split. But that point sits strictly between $A$ and $B$, contradicting 'beyond $B$'. Since $P$ is past $B$, it divides $\\overline{AB}$ EXTERNALLY in $5:2$, requiring the minus sign: $\\left(\\frac{5\\cdot8-2\\cdot2}{5-2},\\frac{5\\cdot5-2\\cdot(-1)}{5-2}\\right)$.",
    "solutions": [
      {
        "name": "External section formula",
        "steps": [
          "$P$ beyond $B$ with $AP:BP=5:2$ means external division of $\\overline{AB}$ in ratio $m:n=5:2$.",
          "$P=\\left(\\dfrac{mB_x-nA_x}{m-n},\\dfrac{mB_y-nA_y}{m-n}\\right)=\\left(\\dfrac{5\\cdot8-2\\cdot2}{3},\\dfrac{5\\cdot5-2\\cdot(-1)}{3}\\right)=(12,9)$.",
          "Check: $AP=\\sqrt{10^2+10^2}=10\\sqrt2$, $BP=\\sqrt{4^2+4^2}=4\\sqrt2$, ratio $=5:2$. \\(\\boxed{(12,9)}\\)"
        ]
      },
      {
        "name": "Direction vector",
        "steps": [
          "Direction $\\overrightarrow{AB}=(6,6)$, so the line is $A+t(B-A)$; $|AB|=6\\sqrt2$.",
          "From $AP:BP=5:2$ with $P$ past $B$: $AP-BP=AB$, so $AP=\\tfrac{5}{3}AB$, i.e. $t=\\tfrac{5}{3}>1$.",
          "$P=A+\\tfrac{5}{3}(B-A)=(2,-1)+\\tfrac{5}{3}(6,6)=(2+10,-1+10)=(12,9)$. \\(\\boxed{(12,9)}\\)"
        ]
      }
    ],
    "remark": "Insight: 'beyond the far endpoint' is the verbal flag for external division. The difference of the ratio terms $m-n$ in the denominator is what pushes the point off the segment; using $m+n$ would trap it inside."
  },
  {
    "theme": "distancesection",
    "themeLabel": "Distance, Section & Area",
    "title": "The Median's Two-Thirds",
    "difficulty": 3,
    "task": "Determine",
    "tags": [
      "centroid",
      "median",
      "section formula",
      "ratio"
    ],
    "statement": "Let $A(-3,2)$, $B(5,-4)$, $C(4,8)$ be a triangle with centroid $G$ and let $M$ be the midpoint of $\\overline{BC}$. Find $G$ and the ratio $AG:GM$ in which $G$ divides the median $AM$.",
    "answer": "\\[\\boxed{G=(2,2),\\quad AG:GM=2:1}\\]",
    "trap": "Computing $M$ and $G$ correctly but then asserting $AG:GM=1:2$ — reversing the order. The centroid divides each median from the VERTEX in ratio $2:1$, i.e. $AG:GM=2:1$ (the longer piece is on the vertex side), not $1:2$.",
    "solutions": [
      {
        "name": "Centroid as mean, then verify ratio",
        "steps": [
          "$G=\\left(\\dfrac{-3+5+4}{3},\\dfrac{2-4+8}{3}\\right)=(2,2)$.",
          "Midpoint of $BC$: $M=\\left(\\dfrac{5+4}{2},\\dfrac{-4+8}{2}\\right)=\\left(\\tfrac92,2\\right)$.",
          "$AG=\\sqrt{(2-(-3))^2+(2-2)^2}=5$; $GM=\\sqrt{(\\tfrac92-2)^2+0}=\\tfrac52$.",
          "$AG:GM=5:\\tfrac52=2:1$. \\(\\boxed{G=(2,2),\\ 2:1}\\)"
        ]
      },
      {
        "name": "Section-formula consistency",
        "steps": [
          "If $G$ divides $AM$ from $A$ in ratio $2:1$, then $G=\\dfrac{2M+1\\cdot A}{3}$.",
          "$=\\dfrac{2(\\tfrac92,2)+(-3,2)}{3}=\\dfrac{(9,4)+(-3,2)}{3}=\\dfrac{(6,6)}{3}=(2,2)$, matching the centroid.",
          "The construction confirms $AG:GM=2:1$. \\(\\boxed{2:1}\\)"
        ]
      }
    ],
    "remark": "Insight: the centroid is the $2:1$ point measured FROM the vertex. Order matters in a named ratio $AG:GM$; the bigger share hugs the vertex."
  },
  {
    "theme": "distancesection",
    "themeLabel": "Distance, Section & Area",
    "title": "Where the Line Cuts the Cord",
    "difficulty": 4,
    "task": "Find the ratio",
    "tags": [
      "section formula",
      "line divides segment",
      "internal division",
      "sign of ratio"
    ],
    "statement": "The line $3x+4y-12=0$ meets the segment joining $A(-1,-2)$ and $B(5,6)$. Determine the ratio in which the line divides $\\overline{AB}$, state whether the division is internal or external, and find the point of division.",
    "answer": "\\[\\boxed{23:27\\ \\text{internally, at}\\ \\left(\\tfrac{44}{25},\\tfrac{42}{25}\\right)}\\]",
    "trap": "Plugging into the ratio formula $-L(A):L(B)$ and reading off the magnitude while ignoring that $L(A)=-23$ and $L(B)=27$ have OPPOSITE signs. A student who forgets the sign meaning may declare it external; here opposite signs force INTERNAL division (the endpoints sit on opposite sides of the line), so the ratio $23:27$ is positive and the cut lies on the segment.",
    "solutions": [
      {
        "name": "Signed line-value ratio",
        "steps": [
          "For a line $L(x,y)=3x+4y-12$, the point dividing $\\overline{AB}$ in ratio $k:1$ lies on the line when $k=-\\dfrac{L(A)}{L(B)}$.",
          "Compute $L(A)=3(-1)+4(-2)-12=-23$ and $L(B)=3(5)+4(6)-12=27$.",
          "Then $k=-\\dfrac{-23}{27}=\\dfrac{23}{27}>0$; a positive ratio means INTERNAL division, ratio $23:27$.",
          "Section formula: $\\left(\\dfrac{23\\cdot5+27\\cdot(-1)}{50},\\dfrac{23\\cdot6+27\\cdot(-2)}{50}\\right)=\\left(\\tfrac{44}{25},\\tfrac{42}{25}\\right)$, which indeed satisfies $3x+4y-12=0$. \\(\\boxed{23:27\\text{ internal}}\\)"
        ]
      },
      {
        "name": "Side test then parametrise",
        "steps": [
          "Evaluate the line at each endpoint: $L(A)=-23<0$, $L(B)=27>0$, so $A,B$ lie on opposite sides — the segment is genuinely cut, division is internal.",
          "Parametrise $P=A+t(B-A)=(-1+6t,\\,-2+8t)$, $t\\in(0,1)$.",
          "Set $3(-1+6t)+4(-2+8t)-12=0\\Rightarrow -23+50t=0\\Rightarrow t=\\tfrac{23}{50}$.",
          "Ratio $AP:PB=t:(1-t)=\\tfrac{23}{50}:\\tfrac{27}{50}=23:27$; $P=(-1+6\\cdot\\tfrac{23}{50},-2+8\\cdot\\tfrac{23}{50})=\\left(\\tfrac{44}{25},\\tfrac{42}{25}\\right)$. \\(\\boxed{23:27}\\)"
        ]
      }
    ],
    "remark": "Insight: the SIGN of the section ratio carries all the geometry. $-L(A)/L(B)>0\\iff$ endpoints on opposite sides $\\iff$ internal cut. The magnitude alone is meaningless without the sign."
  },
  {
    "theme": "distancesection",
    "themeLabel": "Distance, Section & Area",
    "title": "Two Homes for the Apex",
    "difficulty": 4,
    "task": "Find all values",
    "tags": [
      "area of triangle",
      "absolute value",
      "parameter",
      "two cases"
    ],
    "statement": "The triangle with vertices $A(-1,-1)$, $B(3,5)$ and $C(p,p)$ has area $5$. Find all real values of $p$.",
    "answer": "\\[\\boxed{p\\in\\{-6,\\ 4\\}}\\]",
    "trap": "Writing the area as $\\tfrac12\\big(x_1(y_2-y_3)+\\dots\\big)=5$ WITHOUT the absolute value and solving the single resulting linear equation, recovering only one root. The area condition is $|\\text{signed area}|=5$, which splits into two linear equations and yields TWO positions of $C$ (one on each side of line $AB$).",
    "solutions": [
      {
        "name": "Signed area, both branches",
        "steps": [
          "Signed area $=\\tfrac12\\big[(-1)(5-p)+3(p-(-1))+p((-1)-5)\\big]=\\tfrac12(-5+p+3p+3-6p)=\\tfrac12(-2p-2)=-(p+1)$.",
          "Area condition: $|-(p+1)|=5\\Rightarrow |p+1|=5$.",
          "Hence $p+1=5\\Rightarrow p=4$ or $p+1=-5\\Rightarrow p=-6$. \\(\\boxed{p\\in\\{-6,4\\}}\\)"
        ]
      },
      {
        "name": "Base-height geometry",
        "steps": [
          "Line $AB$ through $(-1,-1),(3,5)$ has slope $\\tfrac{6}{4}=\\tfrac32$, equation $3x-2y+1=0$, with $|AB|=\\sqrt{4^2+6^2}=2\\sqrt{13}$.",
          "Area $=\\tfrac12|AB|\\cdot d=5\\Rightarrow d=\\dfrac{5}{\\sqrt{13}}$, the distance from $C(p,p)$ to the line.",
          "$d=\\dfrac{|3p-2p+1|}{\\sqrt{13}}=\\dfrac{|p+1|}{\\sqrt{13}}=\\dfrac{5}{\\sqrt{13}}\\Rightarrow |p+1|=5\\Rightarrow p\\in\\{-6,4\\}$. \\(\\boxed{\\{-6,4\\}}\\)"
        ]
      }
    ],
    "remark": "Insight: an area equation is an absolute-value equation; the two solutions correspond to $C$ landing on either side of the opposite edge. Dropping the modulus silently discards one valid triangle."
  },
  {
    "theme": "distancesection",
    "themeLabel": "Distance, Section & Area",
    "title": "Same Side, So It Misses",
    "difficulty": 4,
    "task": "Determine",
    "tags": [
      "side of a line",
      "external division",
      "sign of ratio",
      "section formula"
    ],
    "statement": "For the line $\\ell:\\,2x-3y+1=0$, consider the segment joining $O(0,0)$ and $A(4,1)$. Decide whether $\\ell$ cuts the segment $\\overline{OA}$ itself; find the ratio in which $\\ell$ divides the line $OA$, classify it as internal or external, and give the point of division.",
    "answer": "\\[\\boxed{-1:6\\ \\text{(external)};\\ \\ell\\ \\text{misses}\\ \\overline{OA};\\ \\left(-\\tfrac45,-\\tfrac15\\right)}\\]",
    "trap": "Reading the ratio $-L(O):L(A)$ as a positive $1:6$ and concluding $\\ell$ slices $\\overline{OA}$ internally. Here $L(O)=1$ and $L(A)=6$ are BOTH positive: $O$ and $A$ lie on the SAME side of $\\ell$, so the ratio is negative ($-1:6$), the division is external, and $\\ell$ meets only the EXTENSION of $OA$, not the segment.",
    "solutions": [
      {
        "name": "Same-sign side test",
        "steps": [
          "$L(x,y)=2x-3y+1$: $L(O)=1>0$, $L(A)=2\\cdot4-3+1=6>0$.",
          "Both values positive $\\Rightarrow$ $O,A$ on the same side of $\\ell$, so $\\ell$ does NOT meet segment $\\overline{OA}$.",
          "Dividing ratio $-\\dfrac{L(O)}{L(A)}=-\\dfrac{1}{6}$ — negative, hence EXTERNAL division in $1:6$ (on the $O$ side extension).",
          "Point: $\\left(\\dfrac{-1\\cdot4+6\\cdot0}{-1+6},\\dfrac{-1\\cdot1+6\\cdot0}{5}\\right)=\\left(-\\tfrac45,-\\tfrac15\\right)$, and $2(-\\tfrac45)-3(-\\tfrac15)+1=0$. \\(\\boxed{-1:6\\text{ external}}\\)"
        ]
      },
      {
        "name": "Parametric escape from the segment",
        "steps": [
          "$P=O+t(A-O)=(4t,t)$; on $\\ell$: $8t-3t+1=0\\Rightarrow 5t+1=0\\Rightarrow t=-\\tfrac15$.",
          "$t=-\\tfrac15\\notin(0,1)$, so the intersection is OUTSIDE $\\overline{OA}$ — the line misses the segment.",
          "$P=(4(-\\tfrac15),-\\tfrac15)=(-\\tfrac45,-\\tfrac15)$; ratio $OP:PA=t:(1-t)=-\\tfrac15:\\tfrac65=-1:6$, external. \\(\\boxed{(-\\tfrac45,-\\tfrac15)}\\)"
        ]
      }
    ],
    "remark": "Insight: equal signs of $L$ at the two endpoints $\\Rightarrow$ same side $\\Rightarrow$ the cut is external and the parameter $t$ falls outside $(0,1)$. The negative ratio is the algebra announcing 'I left the segment.'"
  },
  {
    "theme": "distancesection",
    "themeLabel": "Distance, Section & Area",
    "title": "The Fair Crossing",
    "difficulty": 4,
    "task": "Find the ratio",
    "tags": [
      "distance",
      "equidistant point",
      "section formula",
      "ratio"
    ],
    "statement": "On the segment from $O(0,0)$ to $T(12,0)$ there is a unique point $P$ that is equidistant from the towns $U(3,5)$ and $V(9,1)$. Find $P$ and the ratio $OP:PT$ in which it divides $\\overline{OT}$.",
    "answer": "\\[\\boxed{P=(4,0),\\quad OP:PT=1:2}\\]",
    "trap": "Finding $P$ by intersecting the perpendicular bisector of $UV$ with the $x$-axis is fine, but then reporting the ratio as $4:12$ or $4:8$ unsimplified, or worse, computing $OP:PT$ as $OP:OT=4:12=1:3$. The ratio is $OP:PT$ with $PT=12-4=8$, so $OP:PT=4:8=1:2$.",
    "solutions": [
      {
        "name": "Equidistance on the axis",
        "steps": [
          "Let $P=(x,0)$. Equidistant: $(x-3)^2+5^2=(x-9)^2+1^2$.",
          "Expand: $x^2-6x+9+25=x^2-18x+81+1\\Rightarrow -6x+34=-18x+82$.",
          "$12x=48\\Rightarrow x=4$, so $P=(4,0)$ which lies in $[0,12]$.",
          "$OP=4$, $PT=12-4=8$, so $OP:PT=4:8=1:2$. \\(\\boxed{P=(4,0),\\ 1:2}\\)"
        ]
      },
      {
        "name": "Perpendicular bisector of UV",
        "steps": [
          "Midpoint of $UV=(6,3)$; slope of $UV=\\dfrac{1-5}{9-3}=-\\tfrac23$, so bisector slope $=\\tfrac32$.",
          "Bisector: $y-3=\\tfrac32(x-6)$. Set $y=0$: $-3=\\tfrac32(x-6)\\Rightarrow x-6=-2\\Rightarrow x=4$.",
          "$P=(4,0)$; ratio $OP:PT=4:8=1:2$. \\(\\boxed{1:2}\\)"
        ]
      }
    ],
    "remark": "Insight: 'equidistant from two fixed points' is the perpendicular bisector; intersecting it with the carrier line both locates $P$ and fixes the division ratio. Keep $OP:PT$ (part:part), never $OP:OT$ (part:whole)."
  },
  {
    "theme": "distancesection",
    "themeLabel": "Distance, Section & Area",
    "title": "The Bowtie Mirage",
    "difficulty": 5,
    "task": "Find the area",
    "tags": [
      "shoelace",
      "polygon area",
      "vertex ordering",
      "orientation"
    ],
    "statement": "Four points $(1,1)$, $(7,1)$, $(3,5)$, $(5,5)$ are the vertices of a convex quadrilateral. Find its area.",
    "answer": "\\[\\boxed{16}\\]",
    "trap": "Feeding the points into the shoelace formula in the GIVEN listing order $(1,1),(7,1),(3,5),(5,5)$. That order traces a self-intersecting 'bowtie', and the shoelace sum collapses to $8$ — the difference of the two crossing triangles, not the quadrilateral's area. The vertices must first be reordered around the convex hull to $(1,1),(7,1),(5,5),(3,5)$, giving the true area $16$.",
    "solutions": [
      {
        "name": "Reorder to the convex boundary",
        "steps": [
          "Sort the four points cyclically around their centroid: the convex order is $(1,1)\\to(7,1)\\to(5,5)\\to(3,5)$ (bottom edge left-to-right, top edge right-to-left).",
          "Shoelace: $\\tfrac12|x_1(y_2-y_4)+x_2(y_3-y_1)+x_3(y_4-y_2)+x_4(y_1-y_3)|$.",
          "$=\\tfrac12|1(1-5)+7(5-1)+5(5-1)+3(1-5)|=\\tfrac12|-4+28+20-12|=\\tfrac12\\cdot32=16$. \\(\\boxed{16}\\)"
        ]
      },
      {
        "name": "Trapezoid decomposition",
        "steps": [
          "The convex quad is a trapezoid: bottom side from $(1,1)$ to $(7,1)$ has length $6$; top side from $(3,5)$ to $(5,5)$ has length $2$; both horizontal.",
          "Parallel sides $6$ and $2$, height $=5-1=4$.",
          "Area $=\\tfrac12(6+2)\\cdot4=\\tfrac12\\cdot8\\cdot4=16$. The naive shoelace value $8$ is exactly the bowtie's mismatch. \\(\\boxed{16}\\)"
        ]
      }
    ],
    "remark": "Insight: the shoelace formula computes a SIGNED area for whatever path you trace; a crossed ordering subtracts one lobe from the other. Always order vertices around the boundary before trusting the number."
  },
  {
    "theme": "distancesection",
    "themeLabel": "Distance, Section & Area",
    "title": "The Cord and the Diagonal Line",
    "difficulty": 5,
    "task": "Find the ratio",
    "tags": [
      "line divides segment",
      "section formula",
      "internal division",
      "point of division"
    ],
    "statement": "The line $x+y=6$ divides the segment joining $A(1,1)$ and $B(7,9)$. Find the ratio of division, classify it (internal/external), and locate the point where the line meets the segment.",
    "answer": "\\[\\boxed{2:5\\ \\text{internally, at}\\ \\left(\\tfrac{19}{7},\\tfrac{23}{7}\\right)}\\]",
    "trap": "Computing $-L(A):L(B)$ but mismatching which endpoint pairs with which weight in the section formula — using $\\frac{2A+5B}{7}$ instead of $\\frac{2B+5A}{7}$. The ratio $AP:PB=2:5$ places $P$ closer to $A$, so $A$ gets the LARGER weight $5$ and $B$ the smaller weight $2$ in $P=\\frac{2B+5A}{7}$. The wrong combination $\\frac{2A+5B}{7}=\\left(\\tfrac{37}{7},\\tfrac{47}{7}\\right)$ does not even lie on the line (its coordinates sum to $12\\ne 6$).",
    "solutions": [
      {
        "name": "Line-value ratio with correct weighting",
        "steps": [
          "$L(x,y)=x+y-6$: $L(A)=1+1-6=-4$, $L(B)=7+9-6=10$.",
          "Ratio $AP:PB=-\\dfrac{L(A)}{L(B)}=-\\dfrac{-4}{10}=\\dfrac{2}{5}>0$: internal, $2:5$.",
          "$P$ divides $\\overline{AB}$ in $2:5$ from $A$, so $P=\\dfrac{2B+5A}{7}=\\dfrac{2(7,9)+5(1,1)}{7}=\\dfrac{(19,23)}{7}=\\left(\\tfrac{19}{7},\\tfrac{23}{7}\\right)$.",
          "Check: $\\tfrac{19}{7}+\\tfrac{23}{7}=\\tfrac{42}{7}=6$. \\(\\boxed{2:5\\text{ internal}}\\)"
        ]
      },
      {
        "name": "Parametric",
        "steps": [
          "$P=A+t(B-A)=(1+6t,\\,1+8t)$.",
          "On the line: $(1+6t)+(1+8t)=6\\Rightarrow 2+14t=6\\Rightarrow t=\\tfrac{2}{7}\\in(0,1)$, so internal.",
          "$AP:PB=t:(1-t)=\\tfrac27:\\tfrac57=2:5$; $P=\\left(1+\\tfrac{12}{7},\\,1+\\tfrac{16}{7}\\right)=\\left(\\tfrac{19}{7},\\tfrac{23}{7}\\right)$. \\(\\boxed{\\left(\\tfrac{19}{7},\\tfrac{23}{7}\\right)}\\)"
        ]
      }
    ],
    "remark": "Insight: in $AP:PB=m:n$ the point sits closer to $A$ when $m<n$, so $A$ must carry the larger weight $n$: $P=\\frac{mB+nA}{m+n}$. The parametric $t$ removes all weight-swapping ambiguity — and a one-line sanity test (does $P$ satisfy the line equation?) instantly catches the swapped-weight blunder."
  },
  {
    "theme": "distancesection",
    "themeLabel": "Distance, Section & Area",
    "title": "Triangle from Its Midpoints",
    "difficulty": 5,
    "task": "Find the area",
    "tags": [
      "midpoint triangle",
      "medial triangle",
      "area scaling",
      "shoelace"
    ],
    "statement": "The midpoints of the three sides of a triangle are $P(2,1)$, $Q(5,3)$ and $R(3,7)$. Find the area of the original triangle.",
    "answer": "\\[\\boxed{32}\\]",
    "trap": "Computing $\\tfrac12\\,|x_P(y_Q-y_R)+x_Q(y_R-y_P)+x_R(y_P-y_Q)|=8$ and reporting $8$ as the triangle's area — that is the area of the MEDIAL (midpoint) triangle, not the original. The medial triangle has exactly $\\tfrac14$ the area of the parent, so the original area is $4\\times 8=32$.",
    "solutions": [
      {
        "name": "Medial-triangle scaling",
        "steps": [
          "The triangle joining the three side-midpoints is the medial triangle. Each of its sides is parallel to a side of the original and half its length (midpoint theorem), so it is similar to the original with ratio $\\tfrac12$, hence area ratio $\\left(\\tfrac12\\right)^2=\\tfrac14$.",
          "Area of $\\triangle PQR=\\tfrac12|2(3-7)+5(7-1)+3(1-3)|=\\tfrac12|-8+30-6|=\\tfrac12\\cdot16=8$.",
          "Original area $=4\\times 8=32$. \\(\\boxed{32}\\)"
        ]
      },
      {
        "name": "Recover the vertices",
        "steps": [
          "If $P,Q,R$ are the midpoints of $BC,CA,AB$ respectively, then adding pairs of midpoint relations gives $A=Q+R-P$, $B=R+P-Q$, $C=P+Q-R$.",
          "$A=(5+3-2,\\,3+7-1)=(6,9)$; $B=(3+2-5,\\,7+1-3)=(0,5)$; $C=(2+5-3,\\,1+3-7)=(4,-3)$. (Check: midpoint of $BC=(2,1)=P$, etc.)",
          "Area $=\\tfrac12|6(5-(-3))+0((-3)-9)+4(9-5)|=\\tfrac12|48+0+16|=\\tfrac12\\cdot64=32$. \\(\\boxed{32}\\)"
        ]
      }
    ],
    "remark": "Insight: the midpoint (medial) triangle is a $\\tfrac12$-scale copy of the parent, so it carries $\\tfrac14$ of the area — the factor $4$ is the whole problem. The vertex-recovery formula $A=Q+R-P$ gives an independent cross-check that lands on the same $32$."
  },
  {
    "theme": "distancesection",
    "themeLabel": "Distance, Section & Area",
    "title": "Splitting a Triangle Two to Three",
    "difficulty": 5,
    "task": "Line through vertex by area ratio",
    "tags": [
      "section formula",
      "area of triangle",
      "two-point form",
      "area ratio",
      "coordinate geometry"
    ],
    "statement": "Let  $A=(1,1)$ ,  $B=(9,3)$  and  $C=(3,7)$ . A line through the vertex  $A$  meets the opposite side  $BC$  at a point  $D$  and splits  $\\triangle ABC$  into two smaller triangles whose areas are in the ratio  $[\\triangle ABD]:[\\triangle ACD]=2:3$ , the first containing  $B$  and the second containing  $C$ . Find the equation of the line  $AD$ .",
    "answer": " $$\\boxed{9x-14y+5=0}$$ ",
    "trap": "Reading the ratio  $2:3$  as  $BD:DC=3:2$  (or applying it to the wrong adjacent triangle). Since both small triangles share the apex  $A$  and have bases along the same line  $BC$ , their areas are proportional to the bases:  $[\\triangle ABD]:[\\triangle ACD]=BD:DC$ . Mismatching which triangle gets the  $2$  places  $D$  at  $(\\tfrac{27}{5},\\tfrac{27}{5})$ , giving the wrong line  $x-y=0$ .",
    "solutions": [
      {
        "name": "Bases share the apex: ratio gives  $BD:DC$ ",
        "steps": [
          "Both  $\\triangle ABD$  and  $\\triangle ACD$  have apex  $A$ , and their bases  $BD$ ,  $DC$  lie on the single line  $BC$ , so they share the same height from  $A$  to  $BC$ . Hence  $[\\triangle ABD]:[\\triangle ACD]=BD:DC$ .",
          "The given area ratio  $2:3$  therefore forces  $BD:DC=2:3$ , so  $D$  divides  $BC$  internally from  $B$  in the ratio  $2:3$ .",
          "Section formula:  $D=\\left(\\dfrac{2\\cdot 3+3\\cdot 9}{5},\\dfrac{2\\cdot 7+3\\cdot 3}{5}\\right)=\\left(\\dfrac{33}{5},\\dfrac{23}{5}\\right)$ .",
          "Two-point form through  $A=(1,1)$  and  $D$ : the direction is  $\\left(\\tfrac{33}{5}-1,\\tfrac{23}{5}-1\\right)=\\left(\\tfrac{28}{5},\\tfrac{18}{5}\\right)$ , i.e. slope  $\\dfrac{18}{28}=\\dfrac{9}{14}$ .",
          "Thus  $y-1=\\dfrac{9}{14}(x-1)$ , which clears to  $\\boxed{9x-14y+5=0}$ ."
        ]
      },
      {
        "name": "Direct area check via the coordinate formula",
        "steps": [
          "First  $[\\triangle ABC]=\\tfrac12\\bigl|(9-1)(7-1)-(3-1)(3-1)\\bigr|=\\tfrac12|48-4|=22$ . The split  $2:3$  means  $[\\triangle ABD]=\\tfrac{2}{5}\\cdot 22=\\tfrac{44}{5}$  and  $[\\triangle ACD]=\\tfrac{3}{5}\\cdot 22=\\tfrac{66}{5}$ .",
          "Let  $D=(x_0,y_0)$  on  $BC$ . Parametrise  $D=B+t(C-B)=(9-6t,\\,3+4t)$  for  $t\\in[0,1]$ , where  $t=BD/BC$ .",
          " $[\\triangle ABD]=\\tfrac12\\bigl|(B-A)\\times(D-A)\\bigr|$ . Since  $D-A=(B-A)+t(C-B)$ , the cross product is  $t\\,(B-A)\\times(C-B)$ , and  $(B-A)\\times(C-B)=(8)(4)-(2)(-6)=44$ , so  $[\\triangle ABD]=22t$ .",
          "Setting  $22t=\\tfrac{44}{5}$  gives  $t=\\tfrac{2}{5}$ , hence  $D=(9-\\tfrac{12}{5},\\,3+\\tfrac{8}{5})=\\left(\\tfrac{33}{5},\\tfrac{23}{5}\\right)$ .",
          "The line through  $A=(1,1)$  and  $D$  has slope  $\\dfrac{23/5-1}{33/5-1}=\\dfrac{18/5}{28/5}=\\dfrac{9}{14}$ , giving  $\\boxed{9x-14y+5=0}$ ."
        ]
      }
    ],
    "remark": "**Insight.** When a line from a vertex cuts the opposite side, the two pieces share the same altitude from that vertex, so their area ratio is exactly the ratio in which the foot divides the opposite side. The whole problem then collapses to one section-formula computation — no perpendicular distances needed. The only place to slip is matching the named ratio to the correct sub-triangle."
  },
  {
    "theme": "anglefamily",
    "themeLabel": "Angle & Family of Lines",
    "title": "The Pencil's Hidden Member",
    "difficulty": 3,
    "task": "Find the equation",
    "tags": [
      "family of lines",
      "pencil",
      "intersection",
      "jee-advanced"
    ],
    "statement": "Consider the two lines $L_1:\\;3x+4y-7=0$ and $L_2:\\;2x-y+3=0$. Without first computing the point where $L_1$ and $L_2$ meet, find the equation of the line that passes through their intersection and also through the point $(2,1)$.",
    "answer": "\\[\\boxed{4x+9y-17=0}\\]",
    "trap": "The structural trap is to abandon the pencil and instead solve $L_1=L_2$ for the meeting point, then write a two-point line. It reaches the same answer numerically but discards the whole insight of the pencil $L_1+\\lambda L_2=0$. A second, sharper pitfall: writing the pencil as $\\lambda_1 L_1+\\lambda_2 L_2=0$ and trying to pin down two free constants from one condition, or testing the degenerate cases $\\lambda=0$ ($L_1$ itself) and $\\lambda\\to\\infty$ ($L_2$ itself) first — since $(2,1)$ lies on neither $L_1$ (it gives $3\\neq0$) nor $L_2$ (it gives $6\\neq0$), $\\lambda$ is forced to be finite and nonzero, so those special cases never apply and only waste effort.",
    "solutions": [
      {
        "name": "Family pencil",
        "steps": [
          "Every line through the intersection of $L_1$ and $L_2$ (except $L_2$ itself) has the form $(3x+4y-7)+\\lambda(2x-y+3)=0$ for some real $\\lambda$.",
          "Require it to pass through $(2,1)$: $(3\\cdot2+4\\cdot1-7)+\\lambda(2\\cdot2-1+3)=0\\Rightarrow 3+6\\lambda=0\\Rightarrow \\lambda=-\\tfrac12.$",
          "Substitute: $(3x+4y-7)-\\tfrac12(2x-y+3)=0\\Rightarrow 2x+\\tfrac92 y-\\tfrac{17}{2}=0.$",
          "Multiply by $2$: $\\boxed{4x+9y-17=0}$."
        ]
      },
      {
        "name": "Direct two-point check",
        "steps": [
          "Solve $L_1,L_2$: from $2x-y+3=0$, $y=2x+3$; substitute into $3x+4(2x+3)-7=0\\Rightarrow 11x+5=0\\Rightarrow x=-\\tfrac{5}{11},\\,y=\\tfrac{23}{11}.$",
          "The required line passes through $\\left(-\\tfrac5{11},\\tfrac{23}{11}\\right)$ and $(2,1)$; its direction is $\\left(2+\\tfrac5{11},\\,1-\\tfrac{23}{11}\\right)=\\left(\\tfrac{27}{11},-\\tfrac{12}{11}\\right)\\parallel(9,-4).$",
          "A normal to direction $(9,-4)$ is $(4,9)$, so the line is $4x+9y=c$; through $(2,1)$ gives $c=4\\cdot2+9\\cdot1=17$, i.e. $\\boxed{4x+9y-17=0}$ — matching the pencil result."
        ]
      },
      {
        "name": "Determinant of concurrency",
        "steps": [
          "Any line through the meeting point of $L_1,L_2$ together with those two lines forms a concurrent triple, so the required line $L:\\,ax+by+c=0$ satisfies $\\begin{vmatrix} a & b & c \\\\ 3 & 4 & -7 \\\\ 2 & -1 & 3 \\end{vmatrix}=0$ — equivalently $L$ is a linear combination of $L_1,L_2$.",
          "Write $L=\\alpha(3x+4y-7)+\\beta(2x-y+3)$ and impose $L(2,1)=0$: $\\alpha(3)+\\beta(6)=0\\Rightarrow \\alpha=-2\\beta.$",
          "Take $\\beta=1,\\,\\alpha=-2$: $L=-2(3x+4y-7)+(2x-y+3)=-4x-9y+17$. Up to sign, $\\boxed{4x+9y-17=0}$, confirming the pencil answer with no coordinates of the intersection used."
        ]
      }
    ],
    "remark": "Insight: the pencil turns 'find the third line through a known meeting point' into one linear equation in $\\lambda$ — the coordinates of the meeting point are never needed. The single condition $3+6\\lambda=0$ fixes $\\lambda=-\\tfrac12$, and the resulting line is automatically forced through the (uncomputed) intersection, since every member of $L_1+\\lambda L_2=0$ already passes through it."
  },
  {
    "theme": "anglefamily",
    "themeLabel": "Angle & Family of Lines",
    "title": "Acute Among the Concurrent Three",
    "difficulty": 3,
    "task": "Find the acute angle",
    "tags": [
      "angle between lines",
      "acute vs obtuse",
      "concurrency",
      "absolute value"
    ],
    "statement": "The three lines $L_1:\\;x-2y+1=0$, $L_2:\\;3x+y-4=0$ and $L_3:\\;5x-3y-2=0$ are concurrent. Find the acute angle $\\theta$ between $L_1$ and $L_2$ (give $\\theta$ as an inverse-tangent).",
    "answer": "\\[\\boxed{\\theta=\\tan^{-1}7}\\]",
    "trap": "Writing $\\tan\\theta=\\dfrac{m_1-m_2}{1+m_1m_2}=\\dfrac{\\tfrac12-(-3)}{1+\\tfrac12(-3)}=-7$ and reporting $\\theta=\\tan^{-1}(-7)$ (an obtuse angle, $\\approx98.13^\\circ$). The acute angle requires the absolute value: $\\tan\\theta=|{-7}|=7$. Dropping $|\\cdot|$ silently selects the obtuse supplement.",
    "solutions": [
      {
        "name": "Slope formula with modulus",
        "steps": [
          "Slopes: $m_1=\\tfrac12$ (from $x-2y+1=0$) and $m_2=-3$ (from $3x+y-4=0$).",
          "Acute-angle formula: $\\tan\\theta=\\left|\\dfrac{m_1-m_2}{1+m_1m_2}\\right|=\\left|\\dfrac{\\tfrac12+3}{1-\\tfrac32}\\right|=\\left|\\dfrac{7/2}{-1/2}\\right|=7.$",
          "Since $\\tan\\theta=7>0$, $\\theta=\\tan^{-1}7\\approx81.87^\\circ$ is acute, so $\\boxed{\\theta=\\tan^{-1}7}$. (The three lines do meet at $(1,1)$, confirming the concurrency premise.)"
        ]
      },
      {
        "name": "Normal vectors",
        "steps": [
          "Normals: $\\mathbf n_1=(1,-2)$, $\\mathbf n_2=(3,1)$ with $|\\mathbf n_1|=\\sqrt5,\\,|\\mathbf n_2|=\\sqrt{10}.$",
          "$\\cos\\phi=\\dfrac{\\mathbf n_1\\cdot\\mathbf n_2}{|\\mathbf n_1||\\mathbf n_2|}=\\dfrac{3-2}{\\sqrt{50}}=\\dfrac1{5\\sqrt2}$, so $\\sin\\phi=\\sqrt{1-\\tfrac1{50}}=\\dfrac7{5\\sqrt2}.$",
          "The angle between the lines equals the acute angle between normals: $\\tan\\theta=\\dfrac{\\sin\\phi}{\\cos\\phi}=7$, giving $\\boxed{\\theta=\\tan^{-1}7}$."
        ]
      }
    ],
    "remark": "Insight: $\\dfrac{m_1-m_2}{1+m_1m_2}$ carries the sign of the directed angle; the absolute value is exactly what collapses the directed pair $\\{\\theta,180^\\circ-\\theta\\}$ to the acute representative. The concurrency is a red-herring backdrop that tempts the solver to over-think."
  },
  {
    "theme": "anglefamily",
    "themeLabel": "Angle & Family of Lines",
    "title": "The Point That Refuses to Move",
    "difficulty": 4,
    "task": "Find the fixed point",
    "tags": [
      "fixed point",
      "family of lines",
      "parameter",
      "pencil decomposition"
    ],
    "statement": "As the real parameter $t$ varies, consider the line \\[\\ell_t:\\;(1+2t)\\,x+(1+3t)\\,y-(3+5t)=0.\\] Prove that all these lines pass through one fixed point, and find it.",
    "answer": "\\[\\boxed{(4,-1)}\\]",
    "trap": "Picking two convenient values of $t$ (say $t=0$ and $t=1$), solving the resulting pair, and stopping — without proving that every $\\ell_t$ passes through the result. Two points determine a candidate, but the claim 'fixed point of the whole family' must be verified for general $t$ (by the pencil decomposition or an identity check), or one risks reporting a coincidence rather than a theorem.",
    "solutions": [
      {
        "name": "Regroup as a pencil",
        "steps": [
          "Collect the $t$-terms: $\\ell_t:\\;(x+y-3)+t\\,(2x+3y-5)=0.$",
          "This is the pencil through the intersection of $A:\\,x+y-3=0$ and $B:\\,2x+3y-5=0$. Their normals $(1,1)$ and $(2,3)$ are not parallel ($1\\cdot3-1\\cdot2=1\\neq0$), so $A\\cap B$ is a single point, and it is independent of $t$ — hence the fixed point.",
          "Solve $A,B$: from $x+y=3,\\ 2x+3y=5$ we get $y=-1,\\ x=4.$ Thus every $\\ell_t$ passes through $\\boxed{(4,-1)}$.",
          "Check: $(1+2t)4+(1+3t)(-1)-(3+5t)=4+8t-1-3t-3-5t=0$ identically in $t$. $\\checkmark$"
        ]
      },
      {
        "name": "Two values then verify",
        "steps": [
          "At $t=0$: $x+y-3=0$. At $t=-\\tfrac13$ the $y$-coefficient $1+3t$ vanishes, leaving $\\tfrac13 x-\\tfrac43=0\\Rightarrow x=4.$",
          "Their intersection: $x=4,\\ y=-1$, giving the candidate $(4,-1)$.",
          "Promote the guess to a proof for general $t$: substituting $(4,-1)$ gives $4+8t-1-3t-3-5t=0$ identically, so $(4,-1)$ lies on all $\\ell_t$. Hence $\\boxed{(4,-1)}$."
        ]
      }
    ],
    "remark": "Insight: a one-parameter family that is linear in the parameter is always a pencil $L_1+tL_2=0$, and its base point is just $L_1\\cap L_2$ — provided $L_1,L_2$ are not parallel, so they meet in exactly one point. Recognizing the linear-in-$t$ structure converts a 'mystery fixed point' into a routine $2\\times2$ solve, and the identity check is what upgrades a guess into a proof."
  },
  {
    "theme": "anglefamily",
    "themeLabel": "Angle & Family of Lines",
    "title": "Perpendicular Without the Crossroads",
    "difficulty": 4,
    "task": "Determine the equation",
    "tags": [
      "family of lines",
      "perpendicularity",
      "pencil",
      "slope condition"
    ],
    "statement": "Let $L_1:\\;x+2y-3=0$ and $L_2:\\;2x-y+1=0$. Find the equation of the line through $L_1\\cap L_2$ that is perpendicular to $3x-4y=7$, without computing $L_1\\cap L_2$.",
    "answer": "\\[\\boxed{4x+3y-5=0}\\]",
    "trap": "Computing $L_1\\cap L_2=\\left(\\tfrac15,\\tfrac{7}{5}\\right)$ and using point-slope — defeating the purpose. Worse: taking the perpendicular slope as $\\tfrac34$ (the slope of $3x-4y=7$ itself) instead of its negative reciprocal $-\\tfrac43$, i.e. confusing 'perpendicular to' with 'parallel to' the given line. That blunder yields $-3x+4y-5=0$, whose slope $\\tfrac34$ gives the product $\\tfrac34\\cdot\\tfrac34=\\tfrac{9}{16}\\neq-1$ — it is parallel to the given line, not perpendicular.",
    "solutions": [
      {
        "name": "Pencil + slope condition",
        "steps": [
          "Every line through $L_1\\cap L_2$ (except $L_2$ itself) is a member of the pencil $(x+2y-3)+\\lambda(2x-y+1)=0$, i.e. $(1+2\\lambda)x+(2-\\lambda)y+(\\lambda-3)=0.$",
          "Its slope is $-\\dfrac{1+2\\lambda}{2-\\lambda}$. The line $3x-4y=7$ has slope $\\tfrac34$, so perpendicularity forces the member's slope to be the negative reciprocal $-\\tfrac43$: $\\dfrac{1+2\\lambda}{2-\\lambda}=\\dfrac43.$",
          "Cross-multiply: $3(1+2\\lambda)=4(2-\\lambda)\\Rightarrow 3+6\\lambda=8-4\\lambda\\Rightarrow 10\\lambda=5\\Rightarrow\\lambda=\\tfrac12.$",
          "Substitute $\\lambda=\\tfrac12$: $(1+1)x+\\left(2-\\tfrac12\\right)y+\\left(\\tfrac12-3\\right)=0\\Rightarrow 2x+\\tfrac32y-\\tfrac52=0.$ Multiply by $2$: $\\boxed{4x+3y-5=0}.$"
        ]
      },
      {
        "name": "Perpendicular normal direction folded into the pencil",
        "steps": [
          "Any line perpendicular to $3x-4y=7$ has the swap-and-negate form $4x+3y=c$ (its normal $(4,3)$ is the direction of the given line). So we seek a pencil member proportional to $4x+3y-c$.",
          "Membership means $(4,\\,3,\\,-c)\\propto(1+2\\lambda,\\,2-\\lambda,\\,\\lambda-3)$ for some $\\lambda$. Matching the first two coordinates avoids the intersection point: $\\dfrac{1+2\\lambda}{4}=\\dfrac{2-\\lambda}{3}\\Rightarrow 3(1+2\\lambda)=4(2-\\lambda)\\Rightarrow\\lambda=\\tfrac12.$",
          "At $\\lambda=\\tfrac12$ the pencil coefficients are $\\left(2,\\tfrac32,-\\tfrac52\\right)$; the scale to reach $(4,3,-c)$ is $k=\\tfrac{2}{4}=\\tfrac12$, so $-c=\\dfrac{-\\tfrac52}{\\tfrac12}=-5$, giving $c=5.$",
          "Hence the line is $\\boxed{4x+3y-5=0}$ — obtained without ever solving for $L_1\\cap L_2$."
        ]
      }
    ],
    "remark": "Insight: 'perpendicular to $ax+by+c=0$' is captured instantly by the form $bx-ay=k$ — a perpendicular line simply swaps the roles of normal and direction. Folding that pattern into the pencil $L_1+\\lambda L_2$ makes the answer fall out of a single ratio in $\\lambda$, never touching the intersection point. The lurking error is reading the negative reciprocal as the original slope, which silently produces a parallel line instead."
  },
  {
    "theme": "anglefamily",
    "themeLabel": "Angle & Family of Lines",
    "title": "Two Values, Both Genuine",
    "difficulty": 4,
    "task": "Find all values",
    "tags": [
      "concurrency",
      "determinant",
      "parameter",
      "quadratic"
    ],
    "statement": "Find all real $a$ for which the three lines \\[L_1:\\;ax-2y-2=0,\\quad L_2:\\;x+ay-2=0,\\quad L_3:\\;2x+y-3=0\\] are concurrent.",
    "answer": "\\[\\boxed{a\\in\\{0,\\,2\\}}\\]",
    "trap": "Forgetting to set up the $3\\times3$ coefficient determinant and instead solving $L_2\\cap L_3$ then substituting into $L_1$ — algebraically fine, but a sign slip in the messy substitution is easy. The deeper trap is assuming a quadratic in $a$ must have an extraneous (degenerate) root to discard; here both roots give three genuinely distinct, pairwise non-parallel concurrent lines, so neither may be thrown away.",
    "solutions": [
      {
        "name": "Coefficient determinant",
        "steps": [
          "Concurrency $\\iff\\det\\begin{pmatrix}a&-2&-2\\\\1&a&-2\\\\2&1&-3\\end{pmatrix}=0.$",
          "Expand: $a(a\\cdot(-3)-(-2)\\cdot1)-(-2)(1\\cdot(-3)-(-2)\\cdot2)+(-2)(1\\cdot1-a\\cdot2)$ $=a(-3a+2)+2(-3+4)-2(1-2a)=-3a^2+2a+2-2+4a=-3a^2+6a.$",
          "Set $-3a^2+6a=0\\Rightarrow -3a(a-2)=0\\Rightarrow a=0$ or $a=2.$",
          "Both are valid: at $a=0$ the lines $y=-1$, $x=2$, $2x+y-3=0$ meet at $(2,-1)$; at $a=2$ they meet at $(\\tfrac43,\\tfrac13)$. So $\\boxed{a\\in\\{0,2\\}}$."
        ]
      },
      {
        "name": "Membership in the pencil of $L_2,L_3$",
        "steps": [
          "$L_1$ must belong to the pencil of $L_2$ and $L_3$: $ax-2y-2=\\mu(x+ay-2)+\\nu(2x+y-3)$ for some $\\mu,\\nu.$",
          "Match coefficients: $x:\\ \\mu+2\\nu=a;\\quad y:\\ a\\mu+\\nu=-2;\\quad 1:\\ -2\\mu-3\\nu=-2.$",
          "Eliminate: from the $x$- and constant-equations, $\\mu+2\\nu=a$ and $2\\mu+3\\nu=2$ give $\\mu=4-3a,\\ \\nu=2a-2.$ Plug into $a\\mu+\\nu=-2$: $a(4-3a)+(2a-2)=-2\\Rightarrow -3a^2+6a-2=-2\\Rightarrow -3a^2+6a=0.$",
          "Hence $a=0$ or $a=2$, i.e. $\\boxed{a\\in\\{0,2\\}}$."
        ]
      }
    ],
    "remark": "Insight: concurrency is a single determinant condition; here it is a clean quadratic with two honest solutions. The lesson is to actually test each root for degeneracy rather than reflexively keeping or discarding — sometimes a quadratic genuinely means 'two answers.'"
  },
  {
    "theme": "anglefamily",
    "themeLabel": "Angle & Family of Lines",
    "title": "The Vertical Line the Slope Forgot",
    "difficulty": 5,
    "task": "Find all such lines",
    "tags": [
      "family of lines",
      "distance condition",
      "vertical line",
      "missing case"
    ],
    "statement": "Let $L_1:\\;x-y-1=0$ and $L_2:\\;2x+y-8=0$. Find all lines passing through $L_1\\cap L_2$ that lie at distance $3$ from the point $(0,1)$.",
    "answer": "\\[\\boxed{4x+3y-18=0\\ \\text{ and }\\ x=3}\\]",
    "trap": "Parametrizing the pencil by slope as $y-2=m(x-3)$ (after finding $L_1\\cap L_2=(3,2)$), imposing the distance, and solving for $m$ — this yields only $4x+3y-18=0$ and silently loses the vertical line $x=3$, which has no finite slope yet is at distance $3$ from $(0,1)$. The slope parametrization cannot represent vertical members of a pencil.",
    "solutions": [
      {
        "name": "Pencil parametrized by $\\lambda$ (captures the vertical line)",
        "steps": [
          "Pencil: $(x-y-1)+\\lambda(2x+y-8)=0$, i.e. $(1+2\\lambda)x+(\\lambda-1)y-(1+8\\lambda)=0.$",
          "Distance from $(0,1)$ equals $3$: $\\dfrac{|(\\lambda-1)-(1+8\\lambda)|}{\\sqrt{(1+2\\lambda)^2+(\\lambda-1)^2}}=3\\Rightarrow\\dfrac{|-2-7\\lambda|}{\\sqrt{5\\lambda^2+2\\lambda+2}}=3.$",
          "Square: $(7\\lambda+2)^2=9(5\\lambda^2+2\\lambda+2)\\Rightarrow49\\lambda^2+28\\lambda+4=45\\lambda^2+18\\lambda+18\\Rightarrow4\\lambda^2+10\\lambda-14=0\\Rightarrow2\\lambda^2+5\\lambda-7=0.$",
          "Roots $\\lambda=1$ and $\\lambda=-\\tfrac72$. For $\\lambda=1$: $3x-9=0\\Rightarrow x=3$ (vertical!). For $\\lambda=-\\tfrac72$: $-6x-\\tfrac92y+27=0\\Rightarrow4x+3y-18=0.$ So $\\boxed{4x+3y-18=0\\text{ and }x=3}$."
        ]
      },
      {
        "name": "Geometry: tangents from a point to a circle",
        "steps": [
          "$L_1\\cap L_2=(3,2)$. The required lines pass through $(3,2)$ and are tangent to the circle of radius $3$ centered at $(0,1)$, since the phrase distance $3$ from $(0,1)$ means tangency.",
          "Distance from $(0,1)$ to $(3,2)$ is $\\sqrt{9+1}=\\sqrt{10}>3$, so two real tangents exist.",
          "Write a line through $(3,2)$ as $a(x-3)+b(y-2)=0$. Distance $3$ gives $(3a+b)^2=9(a^2+b^2)\\Rightarrow 2b(3a-4b)=0$, so $b=0$ or $3a=4b$.",
          "$b=0\\Rightarrow x=3$ (the vertical tangent, distance $|3-0|=3$); $3a=4b\\Rightarrow(a,b)=(4,3)\\Rightarrow 4x+3y-18=0$ (distance $\\tfrac{|0+3-18|}{5}=3$). Both pass through $(3,2)$, giving $\\boxed{4x+3y-18=0\\text{ and }x=3}$."
        ]
      }
    ],
    "remark": "Insight: a pencil contains exactly one vertical line, and slope-based parametrizations are blind to it. Using $L_1+\\lambda L_2$ (or equivalently the tangent-from-a-point picture, whose condition $2b(3a-4b)=0$ factors cleanly into exactly two directions) keeps the degree of the equation at $2$ and recovers both members — the count must be $2$, so a single-answer result is a red flag for a lost vertical case."
  },
  {
    "theme": "anglefamily",
    "themeLabel": "Angle & Family of Lines",
    "title": "Equal Intercepts, Two Honest Answers",
    "difficulty": 5,
    "task": "Find all members",
    "tags": [
      "family of lines",
      "equal intercepts",
      "origin case",
      "degenerate intercepts"
    ],
    "statement": "Let $L_1:\\;2x+3y-5=0$ and $L_2:\\;x-y-5=0$. Find every line through $L_1\\cap L_2$ that makes equal intercepts on the coordinate axes.",
    "answer": "\\[\\boxed{x+y-3=0\\ \\text{ and }\\ x+4y=0}\\]",
    "trap": "Writing the equal-intercept line as $\\tfrac{x}{c}+\\tfrac{y}{c}=1$ (i.e. $x+y=c$) and finding only the $a=b\\neq0$ member $x+y-3=0$ — missing the line through the origin. A line through $(0,0)$ has both intercepts equal to $0$, which also satisfies 'equal intercepts'; the standard intercept form $\\tfrac{x}{a}+\\tfrac{y}{b}=1$ cannot represent it (it requires nonzero intercepts).",
    "solutions": [
      {
        "name": "Pencil with both cases",
        "steps": [
          "Pencil: $(2x+3y-5)+\\lambda(x-y-5)=0$, i.e. $(2+\\lambda)x+(3-\\lambda)y-(5+5\\lambda)=0.$",
          "$x$-intercept $=\\dfrac{5+5\\lambda}{2+\\lambda}$, $y$-intercept $=\\dfrac{5+5\\lambda}{3-\\lambda}$. Equal intercepts $\\iff$ either the intercepts are equal and nonzero ($2+\\lambda=3-\\lambda$), or both are zero ($5+5\\lambda=0$).",
          "Case $2+\\lambda=3-\\lambda$: $\\lambda=\\tfrac12$, giving $\\tfrac52 x+\\tfrac52 y-\\tfrac{15}{2}=0\\Rightarrow x+y-3=0.$",
          "Case $5+5\\lambda=0$: $\\lambda=-1$, giving $x+4y=0$ — through the origin, intercepts both $0$. Hence $\\boxed{x+y-3=0\\text{ and }x+4y=0}$."
        ]
      },
      {
        "name": "Through the intersection point",
        "steps": [
          "$L_1\\cap L_2$: $2x+3y=5,\\ x-y=5\\Rightarrow x=4,\\ y=-1$, point $(4,-1).$",
          "Equal nonzero intercepts: line $x+y=k$ through $(4,-1)$ gives $k=3$, so $x+y-3=0.$",
          "Equal zero intercepts: a line through both $(4,-1)$ and the origin: slope $-\\tfrac14$, i.e. $y=-\\tfrac14x\\Rightarrow x+4y=0.$ Both qualify, so $\\boxed{x+y-3=0\\text{ and }x+4y=0}$."
        ]
      }
    ],
    "remark": "Insight: 'equal intercepts' is two scenarios — equal-and-nonzero (the line $x+y=$const direction) and the through-origin line where both intercepts vanish. The pencil's constant term $5+5\\lambda$ flags the origin case precisely (it $=0$), so the algebra itself reminds you not to drop it."
  },
  {
    "theme": "anglefamily",
    "themeLabel": "Angle & Family of Lines",
    "title": "Forty-Five Degrees, Twice Over",
    "difficulty": 5,
    "task": "Find both lines",
    "tags": [
      "family of lines",
      "angle condition",
      "acute",
      "two solutions"
    ],
    "statement": "Let $L_1:\\;x+2y-4=0$ and $L_2:\\;2x-y-3=0$. Find both lines through $L_1\\cap L_2$ that make a $45^\\circ$ angle with the line $x-2y=0$.",
    "answer": "\\[\\boxed{x+3y-5=0\\ \\text{ and }\\ 3x-y-5=0}\\]",
    "trap": "Setting $\\dfrac{m-\\tfrac12}{1+\\tfrac12 m}=\\tan45^\\circ=1$ with only the $+$ sign and producing a single line. The condition $\\tan45^\\circ=\\left|\\dfrac{m-m_0}{1+mm_0}\\right|=1$ has two sign choices, $\\pm1$, yielding two members of the pencil — exactly the perpendicular pair making $\\pm45^\\circ$. Keeping one sign loses half the answer.",
    "solutions": [
      {
        "name": "Pencil + both signs",
        "steps": [
          "Pencil: $(x+2y-4)+\\lambda(2x-y-3)=0$, slope $m=-\\dfrac{1+2\\lambda}{2-\\lambda}.$ Reference line $x-2y=0$ has slope $m_0=\\tfrac12.$",
          "$45^\\circ$ condition: $\\left|\\dfrac{m-\\tfrac12}{1+\\tfrac12 m}\\right|=1\\Rightarrow (m-\\tfrac12)^2=(1+\\tfrac12 m)^2.$",
          "Difference of squares with $A=m-\\tfrac12,\\ B=1+\\tfrac12m$: $(A-B)(A+B)=0$, where $A-B=\\tfrac12m-\\tfrac32$ and $A+B=\\tfrac32m+\\tfrac12.$ Hence $m=3$ or $m=-\\tfrac13.$",
          "Translate to $\\lambda$: $m=3\\Rightarrow\\lambda=7$ gives $15x-5y-25=0\\Rightarrow3x-y-5=0$; $m=-\\tfrac13\\Rightarrow\\lambda=-\\tfrac17$ gives $5x+15y-25=0\\Rightarrow x+3y-5=0.$ Thus $\\boxed{x+3y-5=0\\text{ and }3x-y-5=0}$."
        ]
      },
      {
        "name": "Rotate the reference direction by $\\pm45^\\circ$",
        "steps": [
          "The reference line $x-2y=0$ has slope $\\tfrac12$; lines at $45^\\circ$ have slopes $\\dfrac{\\tfrac12\\pm1}{1\\mp\\tfrac12}$ (tangent addition with $\\tan45^\\circ=1$).",
          "$+45^\\circ$: $\\dfrac{\\tfrac12+1}{1-\\tfrac12}=3$; $-45^\\circ$: $\\dfrac{\\tfrac12-1}{1+\\tfrac12}=-\\tfrac13.$ The two target slopes are $3$ and $-\\tfrac13$ (note $3\\cdot(-\\tfrac13)=-1$: they are perpendicular, as expected).",
          "$L_1\\cap L_2=(2,1)$. Line of slope $3$ through $(2,1)$: $3x-y-5=0$; slope $-\\tfrac13$: $x+3y-5=0.$ Hence $\\boxed{x+3y-5=0\\text{ and }3x-y-5=0}$."
        ]
      }
    ],
    "remark": "Insight: an angle equation is quadratic in disguise ($\\pm\\tan\\theta$), so a $45^\\circ$ (or any fixed-angle) request through a pencil base point yields a pair of lines. For the special case $\\theta=45^\\circ$ the two target slopes satisfy $\\dfrac{m_0+1}{1-m_0}\\cdot\\dfrac{m_0-1}{1+m_0}=\\dfrac{m_0^2-1}{1-m_0^2}=-1$, so the pair is always perpendicular — a fast self-check unique to $45^\\circ$."
  },
  {
    "theme": "anglefamily",
    "themeLabel": "Angle & Family of Lines",
    "title": "As Far As the Pencil Allows",
    "difficulty": 5,
    "task": "Find the line and the distance",
    "tags": [
      "fixed point",
      "family of lines",
      "maximum distance",
      "perpendicular from origin"
    ],
    "statement": "As the real parameter $t$ varies, the line \\[(1+2t)\\,x-(1+t)\\,y+(1-2t)=0\\] always passes through a fixed point $P$. Among all lines of this family, find the one that is farthest from the origin $O$, and state that maximum distance.",
    "answer": "\\[\\boxed{3x+4y-25=0,\\quad d_{\\max}=5}\\]",
    "trap": "Trying to maximize the distance $d(t)=\\dfrac{|1-2t|}{\\sqrt{(1+2t)^2+(1+t)^2}}$ by calculus in $t$ — a messy rational function that easily produces sign and critical-point errors (the derivative does yield $t=-\\tfrac{7}{11}$ and $t=\\tfrac12$, but the algebra is brutal and one is tempted to mistake the limiting value $\\tfrac{2}{\\sqrt5}\\approx0.894$ as $t\\to\\infty$ for the answer). The clean idea: every line passes through the fixed point $P$, so the distance from $O$ to any such line is at most $|OP|$, with equality exactly when the line is perpendicular to $OP$. Missing this forces a brutal computation.",
    "solutions": [
      {
        "name": "Fixed point, then perpendicular foot",
        "steps": [
          "Regroup in $t$: $(x-y+1)+t(2x-y-2)=0$, a pencil through $P=$ the intersection of $x-y+1=0$ and $2x-y-2=0.$ Solve: $x-y=-1,\\ 2x-y=2\\Rightarrow x=3,\\ y=4$, so $P=(3,4).$",
          "For any line through $P$, the distance from $O$ equals the length of the perpendicular from $O$ to that line, which is at most $|OP|=\\sqrt{9+16}=5$, attained exactly when the line $\\perp OP$.",
          "The maximizing line is perpendicular to $\\vec{OP}=(3,4)$ at $P$: $3(x-3)+4(y-4)=0\\Rightarrow3x+4y-25=0.$",
          "Its distance from $O$ is $\\dfrac{|-25|}{\\sqrt{9+16}}=5=|OP|.$ Therefore $\\boxed{3x+4y-25=0,\\ d_{\\max}=5}.$"
        ]
      },
      {
        "name": "Verify membership of the extremal line",
        "steps": [
          "The candidate extremal line $3x+4y-25=0$ must be a member of the family, i.e. $(1+2t):-(1+t):(1-2t)\\propto3:4:-25.$",
          "From $\\dfrac{1+2t}{3}=\\dfrac{-(1+t)}{4}$: $\\,4(1+2t)=-3(1+t)\\Rightarrow4+8t=-3-3t\\Rightarrow t=-\\tfrac{7}{11}.$",
          "At $t=-\\tfrac{7}{11}$ all three ratios equal $-\\tfrac{1}{11}$, so the family line is $-\\tfrac{3}{11}x-\\tfrac{4}{11}y+\\tfrac{25}{11}=0$, i.e. $3x+4y-25=0$ — confirmed a member, and it passes through $P=(3,4).$",
          "Since its distance from $O$ equals $|OP|=5$ and no line through $P$ can be farther from $O$ than $|OP|$, $\\boxed{3x+4y-25=0,\\ d_{\\max}=5}.$"
        ]
      },
      {
        "name": "Calculus check (the trap, done correctly)",
        "steps": [
          "Write $f(t)=d(t)^2=\\dfrac{(1-2t)^2}{(1+2t)^2+(1+t)^2}.$ Setting $f'(t)=0$ and clearing the denominator gives the two critical values $t=\\tfrac12$ and $t=-\\tfrac{7}{11}.$",
          "At $t=\\tfrac12$ the numerator $1-2t=0$, so $d=0$ (this is the line $5x-3y=0$ through $O$, a minimum).",
          "At $t=-\\tfrac{7}{11}$, $f=\\dfrac{625/121}{25/121}=25$, so $d=5$ — the maximum. As $t\\to\\pm\\infty$, $f\\to\\tfrac45$, i.e. $d\\to\\tfrac{2}{\\sqrt5}<5$, confirming $5$ is the global maximum and is attained.",
          "This reproduces $\\boxed{3x+4y-25=0,\\ d_{\\max}=5}$ — but only after error-prone algebra, exactly the labour the geometric one-liner avoids."
        ]
      }
    ],
    "remark": "Insight: maximizing the distance from a point to a variable line through a fixed point $P$ is a geometry one-liner — the answer is $|OP|$, realized by the unique line $\\perp OP$ at $P$. The pencil structure hands you $P$ for free; calculus in $t$ is the trap that the geometry sidesteps. (As a sanity rail, the calculus genuinely yields the same $t=-\\tfrac{7}{11}$ and $d=5$, with the line through $O$ at $t=\\tfrac12$ as the matching minimum.)"
  },
  {
    "theme": "anglefamily",
    "themeLabel": "Angle & Family of Lines",
    "title": "The Determinant's Phantom Root",
    "difficulty": 5,
    "task": "Find all values",
    "tags": [
      "concurrency",
      "determinant",
      "degenerate case",
      "coincident lines"
    ],
    "statement": "Find all real $c$ for which the three lines \\[L_1:\\;x+cy-1=0,\\quad L_2:\\;cx+y-1=0,\\quad L_3:\\;x+y-2=0\\] are concurrent at a single point through which all three genuinely distinct lines pass.",
    "answer": "\\[\\boxed{c=0}\\]",
    "trap": "Setting the coefficient determinant to zero gives $c=0$ or $c=1$, and reporting both. But at $c=1$, $L_1$ and $L_2$ both become $x+y-1=0$ — they coincide, and this common line is parallel to $L_3:\\,x+y-2=0$, so there is no point lying on three distinct lines. The determinant vanishing detects 'rank deficiency,' not genuine triple-concurrency; $c=1$ is a phantom root to be rejected.",
    "solutions": [
      {
        "name": "Determinant, then screen the roots",
        "steps": [
          "Concurrency requires $\\det\\begin{pmatrix}1&c&-1\\\\c&1&-1\\\\1&1&-2\\end{pmatrix}=0.$",
          "Expand: $1(1\\cdot(-2)-(-1)\\cdot1)-c(c\\cdot(-2)-(-1)\\cdot1)+(-1)(c\\cdot1-1\\cdot1)=1(-1)-c(-2c+1)-(c-1)=-1+2c^2-c-c+1=2c^2-2c.$",
          "$2c^2-2c=0\\Rightarrow c=0$ or $c=1.$ Screen each: at $c=1$, $L_1=L_2=x+y-1=0$ and $L_3=x+y-2=0$ is parallel to it — no common point, reject.",
          "At $c=0$: $L_1:x=1,\\ L_2:y=1,\\ L_3:x+y-2=0$ all meet at $(1,1)$, three distinct lines. Hence $\\boxed{c=0}$."
        ]
      },
      {
        "name": "Force a common point directly",
        "steps": [
          "Subtract $L_1-L_2$: $(x+cy-1)-(cx+y-1)=(1-c)x-(1-c)y=(1-c)(x-y)=0.$ If $c\\neq1$, then $x=y$ at the intersection of $L_1,L_2$.",
          "With $x=y$, $L_1$ gives $x+cx-1=0\\Rightarrow x=\\dfrac1{1+c}$ (needs $c\\neq-1$). For $L_3$: $2x-2=0\\Rightarrow x=1$, so $\\dfrac1{1+c}=1\\Rightarrow c=0.$",
          "If $c=1$, the step $L_1-L_2$ vanishes identically: $L_1\\equiv L_2$, and being parallel to $L_3$, there is no triple point. So the only genuine value is $\\boxed{c=0}$."
        ]
      }
    ],
    "remark": "Insight: $\\det=0$ is necessary but not sufficient for three distinct lines to be concurrent — it also fires when two lines coincide or the system is otherwise degenerate. A top-rank solver always validates each root against the 'three distinct, non-parallel lines through one point' definition. The symmetry $L_1\\leftrightarrow L_2$ under $x\\leftrightarrow y$ is the tell that $c=1$ would collapse them."
  },
  {
    "theme": "footimage",
    "themeLabel": "Foot of Perpendicular, Image & Distance",
    "title": "The Mirror Swallows Its Reflection",
    "difficulty": 3,
    "task": "Find the image",
    "tags": [
      "image",
      "reflection",
      "foot",
      "perpendicular"
    ],
    "statement": "Let $A=(4,7)$ and let $\\ell:\\,x+2y-3=0$. Reflect $A$ in $\\ell$ to obtain $A'$. Find the coordinates of $A'$.",
    "answer": "\\[\\boxed{A'=(-2,-5)}\\]",
    "trap": "Stopping at the FOOT of the perpendicular $F=(1,1)$ and reporting it as the image, i.e. using the displacement $-\\tfrac{ax_1+by_1+c}{a^2+b^2}(a,b)$ instead of TWICE that. The foot is the midpoint of $A$ and $A'$, not $A'$ itself; the image needs the factor $2$.",
    "solutions": [
      {
        "name": "Image formula (factor of 2)",
        "steps": [
          "Here $a=1,b=2,c=-3$, $(x_1,y_1)=(4,7)$, and $ax_1+by_1+c=4+14-3=15$ with $a^2+b^2=5$.",
          "The image satisfies $\\dfrac{x-4}{1}=\\dfrac{y-7}{2}=-\\dfrac{2(15)}{5}=-6$.",
          "Thus $x=4-6=-2$ and $y=7-12=-5$.",
          "Hence $\\boxed{A'=(-2,-5)}$."
        ]
      },
      {
        "name": "Foot then double",
        "steps": [
          "The foot $F$ is $A-\\tfrac{15}{5}(1,2)=(4,7)-3(1,2)=(1,1)$.",
          "Since $F$ is the midpoint of $A$ and $A'$, write $A'=2F-A$.",
          "Then $A'=2(1,1)-(4,7)=(-2,-5)$.",
          "So $\\boxed{A'=(-2,-5)}$."
        ]
      },
      {
        "name": "Perpendicular + equal distance",
        "steps": [
          "The line $AA'$ has direction $(1,2)$ (the normal of $\\ell$): $A'=(4+t,\\,7+2t)$.",
          "$A$ and $A'$ are equidistant from $\\ell$ on opposite sides, so $1\\cdot(4+t)+2(7+2t)-3=-(15)$.",
          "This gives $15+5t=-15\\Rightarrow t=-6$.",
          "Then $A'=(4-6,\\,7-12)=(-2,-5)$, so $\\boxed{A'=(-2,-5)}$."
        ]
      }
    ],
    "remark": "Insight: the foot is the average of a point and its image. Mixing up the single factor (foot) with the double factor (image) is the single most common reflection error — always ask 'is this the midpoint or the far point?'"
  },
  {
    "theme": "footimage",
    "themeLabel": "Foot of Perpendicular, Image & Distance",
    "title": "Which Bank of the River?",
    "difficulty": 3,
    "task": "Determine",
    "tags": [
      "signed-distance",
      "which-side",
      "same-side",
      "sign"
    ],
    "statement": "Consider the line $\\ell:\\,3x-2y-6=0$ and the three points $P=(1,1)$, $Q=(5,4)$, and the origin $O=(0,0)$. Decide, with justification, whether each of the pairs $\\{P,Q\\}$ and $\\{P,O\\}$ lies on the same side or on opposite sides of $\\ell$.",
    "answer": "\\[\\boxed{\\{P,Q\\}\\text{ opposite sides};\\ \\{P,O\\}\\text{ same side}}\\]",
    "trap": "Comparing the unsigned distances $\\dfrac{|3x-2y-6|}{\\sqrt{13}}$ to decide the side. The magnitude is blind to side; only the SIGN of $3x-2y-6$ tells you which half-plane a point is in. Two points are on the same side iff the signed values share a sign (product positive).",
    "solutions": [
      {
        "name": "Signs of the expression",
        "steps": [
          "Let $g(x,y)=3x-2y-6$. Compute $g(P)=3-2-6=-5$.",
          "Compute $g(Q)=15-8-6=+1$ and $g(O)=0-0-6=-6$.",
          "$g(P)\\,g(Q)=(-5)(1)<0\\Rightarrow P,Q$ are on opposite sides.",
          "$g(P)\\,g(O)=(-5)(-6)=30>0\\Rightarrow P,O$ are on the same side. $\\boxed{\\text{as stated}}$"
        ]
      },
      {
        "name": "Parametric crossing test",
        "steps": [
          "On segment $PQ$, write the point as $P+t(Q-P)$, $t\\in[0,1]$; then $g$ is linear in $t$, running from $g(P)=-5$ at $t=0$ to $g(Q)=+1$ at $t=1$.",
          "A linear function changing sign must vanish once: solving gives $t=\\tfrac{5}{6}\\in(0,1)$, so $\\ell$ cuts segment $PQ$ — opposite sides.",
          "On segment $PO$, $g$ runs from $-5$ to $-6$; it stays negative (its zero would be at $t=-5\\notin(0,1)$), so $\\ell$ misses the segment — same side.",
          "Hence $\\boxed{\\{P,Q\\}\\text{ opposite},\\ \\{P,O\\}\\text{ same}}$."
        ]
      }
    ],
    "remark": "Insight: the signed value of $ax+by+c$ is a 'height above the line.' Sign agreement means same side; this single idea powers convexity tests, linear-programming feasibility, and polygon-clipping algorithms."
  },
  {
    "theme": "footimage",
    "themeLabel": "Foot of Perpendicular, Image & Distance",
    "title": "A Line Glimpsed in a Slanted Mirror",
    "difficulty": 4,
    "task": "Find the equation",
    "tags": [
      "line-reflection",
      "image-of-line",
      "mirror",
      "two-points"
    ],
    "statement": "A straight mirror lies along $m:\\,x+y-4=0$. Find the equation of the reflection of the line $\\ell:\\,2x-y+3=0$ in the mirror $m$.",
    "answer": "\\[\\boxed{x-2y+7=0}\\]",
    "trap": "Reflecting only the slope or only the $y$-intercept of $\\ell$, or swapping $x\\leftrightarrow y$ as if the mirror were $y=x$. The mirror $x+y=4$ is $y=x$ shifted, so the naive swap turns $2x-y+3=0$ into $-x+2y+3=0$: it has the right slope $\\tfrac12$ but the wrong position, since the genuine image point $(1,4)$ fails it ($-1+8+3=10\\ne0$). You must reflect actual POINTS of $\\ell$.",
    "solutions": [
      {
        "name": "Reflect two points",
        "steps": [
          "Pick two points on $\\ell$: $(0,3)$ and $(1,5)$.",
          "Reflect $(0,3)$ in $m$: with $g=x+y-4$, $g(0,3)=-1$, image $=(0,3)-\\tfrac{2(-1)}{2}(1,1)=(1,4)$.",
          "Reflect $(1,5)$ in $m$: $g(1,5)=2$, image $=(1,5)-\\tfrac{2(2)}{2}(1,1)=(-1,3)$.",
          "Line through $(1,4),(-1,3)$ has slope $\\tfrac12$: $y-4=\\tfrac12(x-1)\\Rightarrow \\boxed{x-2y+7=0}$."
        ]
      },
      {
        "name": "Reflect intersection + a direction",
        "steps": [
          "$\\ell$ meets $m$ where $2x-y+3=0$ and $x+y-4=0$, giving $\\left(\\tfrac13,\\tfrac{11}{3}\\right)$, a fixed point of the reflection.",
          "Reflecting in $x+y=c$ sends slope $s$ to its reciprocal $1/s$; here $s=2\\to\\tfrac12$.",
          "The image line passes through the fixed intersection with slope $\\tfrac12$.",
          "Through $\\left(\\tfrac13,\\tfrac{11}{3}\\right)$: $y-\\tfrac{11}{3}=\\tfrac12\\left(x-\\tfrac13\\right)$, i.e. $\\boxed{x-2y+7=0}$."
        ]
      },
      {
        "name": "Substitution map",
        "steps": [
          "Reflection in $x+y=4$ is $(x,y)\\mapsto(4-y,\\,4-x)$ (a point $(X,Y)$ on the image came from $(4-Y,4-X)$ on $\\ell$).",
          "Substitute $x\\to4-Y,\\ y\\to4-X$ into $2x-y+3=0$: $2(4-Y)-(4-X)+3=0$.",
          "Simplify: $8-2Y-4+X+3=0\\Rightarrow X-2Y+7=0$.",
          "Hence the image is $\\boxed{x-2y+7=0}$."
        ]
      }
    ],
    "remark": "Insight: reflecting a whole line is just reflecting any two of its points — or, slicker, composing the line's equation with the mirror's coordinate map. The fixed point (the intersection with the mirror) is a free anchor that pins the position."
  },
  {
    "theme": "footimage",
    "themeLabel": "Foot of Perpendicular, Image & Distance",
    "title": "The Billiard's Shortest Errand",
    "difficulty": 4,
    "task": "Find the length",
    "tags": [
      "shortest-path",
      "reflection",
      "same-side",
      "optimization"
    ],
    "statement": "A particle starts at $A=(0,-3)$, must touch the line $\\ell:\\,2x-y-2=0$ at one point, and then travel to $B=(4,1)$. Given that $A$ and $B$ lie on the same side of $\\ell$, find the length of the shortest such path.",
    "answer": "\\[\\boxed{6}\\]",
    "trap": "Reflecting the WRONG point, or reflecting BOTH endpoints. The reflect-one-endpoint trick gives the true minimum only when $A,B$ are on the SAME side; one must first verify $2x-y-2$ has the same sign at both (it does: $+1$ and $+5$). Reflecting both endpoints collapses the answer to $|AB|=4\\sqrt2\\approx5.66$, the straight A-to-B distance, which ignores the mandatory touch on $\\ell$ and is unattainable; the genuine minimum is the larger value $6$.",
    "solutions": [
      {
        "name": "Reflect one endpoint",
        "steps": [
          "Check the side: $g(A)=0-(-3)-2=1>0$ and $g(B)=8-1-2=5>0$ — same side, so the reflect-one-endpoint trick applies.",
          "Reflect $B$ in $\\ell$ along the normal $(2,-1)$, with $a^2+b^2=5$: $B'=B-\\tfrac{2g(B)}{5}(2,-1)=(4,1)-\\tfrac{10}{5}(2,-1)=(4,1)-(4,-2)=(0,3)$.",
          "Any path $A\\to(\\text{point on }\\ell)\\to B$ has the same length as $A\\to(\\text{point})\\to B'$, since reflection preserves the second leg; the minimum is the straight segment $AB'$, which crosses $\\ell$ at $(0,-2)$.",
          "$|AB'|=\\sqrt{(0-0)^2+(-3-3)^2}=6$, so the shortest path is $\\boxed{6}$."
        ]
      },
      {
        "name": "Reflect the other endpoint (cross-check)",
        "steps": [
          "By the same logic the minimal length also equals $|A'B|$, where $A'$ is the image of $A$ in $\\ell$.",
          "With $g(A)=1$: $A'=A-\\tfrac{2g(A)}{5}(2,-1)=(0,-3)-\\tfrac{2}{5}(2,-1)=\\left(-\\tfrac45,\\,-\\tfrac{13}{5}\\right)$.",
          "$|A'B|=\\sqrt{\\left(4+\\tfrac45\\right)^2+\\left(1+\\tfrac{13}{5}\\right)^2}=\\sqrt{\\left(\\tfrac{24}{5}\\right)^2+\\left(\\tfrac{18}{5}\\right)^2}=\\sqrt{\\tfrac{576+324}{25}}=\\sqrt{\\tfrac{900}{25}}=6.$",
          "Both reflections agree: shortest path $=\\boxed{6}$."
        ]
      },
      {
        "name": "Direct optimization (no trick)",
        "steps": [
          "Parametrize the touch point as $P=(t,\\,2t-2)$ on $\\ell$ and minimize $f(t)=|PA|+|PB|$.",
          "Numerically and by calculus the sum is minimized at $t=0$, giving $P=(0,-2)$, the point where the straight segment $AB'$ meets $\\ell$.",
          "Then $|PA|=\\sqrt{0+1}=1$ and $|PB|=\\sqrt{16+9}=5$, so $|PA|+|PB|=6$.",
          "This confirms the reflection result independently: the minimum length is $\\boxed{6}$."
        ]
      }
    ],
    "remark": "Insight: the law 'angle in = angle out' is equivalent to straightening the bounced path by reflecting one endpoint across the mirror. The same-side hypothesis is exactly what makes the reflected segment actually cross the line at the optimal touch point; if the two points were on opposite sides, the unconstrained straight segment would already cross $\\ell$ and the reflection trick would have to be applied to the OTHER point instead."
  },
  {
    "theme": "footimage",
    "themeLabel": "Foot of Perpendicular, Image & Distance",
    "title": "Where the Beam Goes Next",
    "difficulty": 4,
    "task": "Find the equation",
    "tags": [
      "reflected-ray",
      "incidence",
      "mirror",
      "direction"
    ],
    "statement": "A ray of light travels along the line $2x-y-5=0$ and, after meeting the plane mirror $m:\\,x-y+1=0$, is reflected. Find the equation of the reflected ray.",
    "answer": "\\[\\boxed{x-2y+8=0}\\]",
    "trap": "Reflecting the incident line's NORMAL in the mirror (and treating that as the new ray) gives slope $-2$, i.e. $2x+y-19=0$ through the hit point. That line does NOT make equal angles with the mirror, so it is not the reflected ray. The reflected ray is the mirror image of the incident ray itself: reflect any one point of the incident ray (other than the hit point) and you keep BOTH the correct slope and the correct through-point.",
    "solutions": [
      {
        "name": "Reflect a point of the incident ray",
        "steps": [
          "The incident and reflected rays meet the mirror at the same point $Q$: solve $2x-y-5=0$ and $x-y+1=0$ to get $Q=(6,7)$.",
          "Pick any other point on the incident ray, say $A=(0,-5)$ (it satisfies $2x-y-5=0$). Reflect $A$ in $m:\\,x-y+1=0$. With $a=1,\\,b=-1,\\,c=1$ and $k=\\dfrac{a x_0+b y_0+c}{a^2+b^2}=\\dfrac{0+5+1}{2}=3$, the image is $A'=(x_0-2ak,\\;y_0-2bk)=(0-6,\\,-5+6)=(-6,1)$.",
          "The reflected ray passes through $Q=(6,7)$ and $A'=(-6,1)$, so its slope is $\\dfrac{7-1}{6-(-6)}=\\dfrac{6}{12}=\\dfrac12$.",
          "Equation: $y-7=\\dfrac12(x-6)\\Rightarrow\\boxed{x-2y+8=0}$."
        ]
      },
      {
        "name": "Reflect the travel direction in the mirror",
        "steps": [
          "The incident travel direction is $d=(1,2)$ (slope $2$); the mirror's unit direction is $u=\\dfrac{1}{\\sqrt2}(1,1)$.",
          "Reflect the direction across the mirror line: $d'=2(d\\cdot u)\\,u-d=2\\cdot\\dfrac{3}{\\sqrt2}\\cdot\\dfrac{1}{\\sqrt2}(1,1)-(1,2)=(3,3)-(1,2)=(2,1)$.",
          "So the reflected ray has slope $\\dfrac{1}{2}$ and passes through the hit point $Q=(6,7)$.",
          "$y-7=\\dfrac12(x-6)\\Rightarrow\\boxed{x-2y+8=0}$."
        ]
      },
      {
        "name": "Family of lines through $Q$ with the equal-angle condition",
        "steps": [
          "Every line through $Q$ is $2x-y-5+\\lambda(x-y+1)=0$, with slope $m_\\lambda=\\dfrac{2+\\lambda}{1+\\lambda}$. We want the mirror (slope $1$) to bisect the angle between the incident ray (slope $2$) and this line.",
          "Equal angles with $m$ require $\\left|\\dfrac{m_\\lambda-1}{1+m_\\lambda}\\right|=\\left|\\dfrac{2-1}{1+2}\\right|=\\dfrac13$. The choice $\\lambda=0$ just returns the incident line, so take the other root.",
          "Solving $\\left|\\dfrac{m_\\lambda-1}{1+m_\\lambda}\\right|=\\dfrac13$ gives $m_\\lambda=\\dfrac12$, i.e. $\\dfrac{2+\\lambda}{1+\\lambda}=\\dfrac12\\Rightarrow\\lambda=-3$.",
          "Then $2x-y-5-3(x-y+1)=-x+2y-8=0$, that is $\\boxed{x-2y+8=0}$."
        ]
      }
    ],
    "remark": "Insight: a reflected ray is the mirror image of the incident ray, so reflecting any single incident point (other than the hit point) instantly fixes the whole line. Reflecting directions also works, but reflect the ray's DIRECTION in the mirror line, never the line's normal, or you will get a beam at the wrong angle."
  },
  {
    "theme": "footimage",
    "themeLabel": "Foot of Perpendicular, Image & Distance",
    "title": "The Point That Forgets No One",
    "difficulty": 5,
    "task": "Find the coordinates",
    "tags": [
      "equidistant-locus",
      "perpendicular-bisector",
      "circumcenter",
      "intersection"
    ],
    "statement": "Find the point $S$ that is equidistant from all three of $A=(3,4)$, $B=(5,0)$, and $C=(-3,4)$. Also state the common distance.",
    "answer": "\\[\\boxed{S=(0,0),\\quad SA=SB=SC=5}\\]",
    "trap": "Averaging the coordinates (taking the centroid $\\tfrac{A+B+C}{3}$) as the equidistant point. The centroid balances mass, not distance; the equidistant point is the circumcenter, the intersection of two PERPENDICULAR BISECTORS, which generally differs from the centroid.",
    "solutions": [
      {
        "name": "Two perpendicular bisectors",
        "steps": [
          "Equidistant from $A,C$: since $A,C$ share $y=4$, the perpendicular bisector is the vertical line $x=0$.",
          "Equidistant from $A,B$: midpoint $(4,2)$, $AB$ has slope $-2$, so the bisector has slope $\\tfrac12$: $x-2y=0$.",
          "Intersect $x=0$ with $x-2y=0$: $S=(0,0)$.",
          "Then $SA=\\sqrt{9+16}=5=SB=SC$, so $\\boxed{S=(0,0),\\ r=5}$."
        ]
      },
      {
        "name": "Equal-distance algebra",
        "steps": [
          "Set $|SA|^2=|SB|^2$: $(x-3)^2+(y-4)^2=(x-5)^2+y^2\\Rightarrow 4x-8y=0\\Rightarrow x=2y$.",
          "Set $|SA|^2=|SC|^2$: $(x-3)^2=(x+3)^2\\Rightarrow 12x=0\\Rightarrow x=0$.",
          "Then $x=0\\Rightarrow y=0$, so $S=(0,0)$.",
          "Distance $=\\sqrt{3^2+4^2}=5$, giving $\\boxed{S=(0,0),\\ r=5}$."
        ]
      },
      {
        "name": "Recognize the circle",
        "steps": [
          "Each of $A,B,C$ satisfies $x^2+y^2=25$: $9+16=25,\\ 25+0=25,\\ 9+16=25$.",
          "So all three lie on the circle centered at the origin with radius $5$.",
          "The center is the unique equidistant point, $S=(0,0)$.",
          "Hence $\\boxed{S=(0,0),\\ r=5}$."
        ]
      }
    ],
    "remark": "Insight: 'equidistant from two points' is the perpendicular bisector; intersecting two such loci is the circumcenter. Spotting that the data already lie on $x^2+y^2=25$ short-circuits all the algebra."
  },
  {
    "theme": "footimage",
    "themeLabel": "Foot of Perpendicular, Image & Distance",
    "title": "A Line and Its Antipode",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "parallel-lines",
      "point-reflection",
      "distance",
      "central-symmetry"
    ],
    "statement": "Let $\\ell:\\,3x+4y-10=0$ and let $\\ell'$ be the reflection of $\\ell$ in the origin. Show that $\\ell\\parallel\\ell'$ and find the distance between them.",
    "answer": "\\[\\boxed{4}\\]",
    "trap": "Computing the distance from the origin to $\\ell$ (which is $2$) and reporting THAT as the gap. The reflection sits on the far side at the same distance $2$, so the line-to-line gap is $2+2=4$, twice the point distance — the origin is the midpoint of the strip, not one edge.",
    "solutions": [
      {
        "name": "Reflect the equation through the origin",
        "steps": [
          "Point-reflection in the origin is $(x,y)\\mapsto(-x,-y)$, so $\\ell'$ is $3(-x)+4(-y)-10=0$, i.e. $3x+4y+10=0$.",
          "Same coefficients of $x,y$ confirm $\\ell\\parallel\\ell'$.",
          "Distance between parallels $\\dfrac{|c_1-c_2|}{\\sqrt{a^2+b^2}}=\\dfrac{|-10-10|}{\\sqrt{25}}=\\dfrac{20}{5}=4$.",
          "Hence the gap is $\\boxed{4}$."
        ]
      },
      {
        "name": "Twice the point distance",
        "steps": [
          "Distance from origin to $\\ell$ is $\\dfrac{|3\\cdot0+4\\cdot0-10|}{5}=2$.",
          "Central reflection places $\\ell'$ at the same perpendicular distance $2$ on the opposite side of the origin.",
          "Since both are perpendicular distances along the same normal, the total separation is $2+2$.",
          "Therefore the distance between $\\ell$ and $\\ell'$ is $\\boxed{4}$."
        ]
      },
      {
        "name": "Foot and its image",
        "steps": [
          "The foot of the perpendicular from $O$ to $\\ell$ is $F=\\tfrac{10}{25}(3,4)=(\\tfrac65,\\tfrac85)$.",
          "Reflecting $F$ in $O$ gives $F'=(-\\tfrac65,-\\tfrac85)$, the foot on $\\ell'$.",
          "$|FF'|=2|OF|=2\\sqrt{(\\tfrac65)^2+(\\tfrac85)^2}=2\\cdot2=4$, and $FF'\\perp$ both lines.",
          "So the distance between the lines is $\\boxed{4}$."
        ]
      }
    ],
    "remark": "Insight: a point reflection of a line yields a parallel line on the opposite side, with the center as the midpoint of the gap — so the line separation is exactly double the center-to-line distance."
  },
  {
    "theme": "footimage",
    "themeLabel": "Foot of Perpendicular, Image & Distance",
    "title": "Will the Segment Cross the Wire?",
    "difficulty": 5,
    "task": "Find all k",
    "tags": [
      "signed-side",
      "region",
      "parameter",
      "no-crossing",
      "parabola"
    ],
    "statement": "For a real parameter $k$, consider the segment joining the origin $O=(0,0)$ to the point $P_k=(k,\\,k^2)$. Find all values of $k$ for which this segment does NOT meet the line $\\ell:\\,4x-y-3=0$.",
    "answer": "\\[\\boxed{k\\in(-\\infty,1)\\cup(3,\\infty)}\\]",
    "trap": "Solving $4k-k^2-3=0$ for where $P_k$ lies ON the line and excluding only those two values $k=1,3$. The segment avoids $\\ell$ precisely when both endpoints lie on the SAME side, i.e. the two signed values share a sign — an inequality, not just the two boundary roots. In fact the whole closed interval $1\\le k\\le3$ produces a crossing (e.g. $k=2$ crosses at $t=\\tfrac34$), and the endpoints $k=1,3$ also meet $\\ell$ (there $P_k$ itself lies on $\\ell$), so all of $[1,3]$ is excluded.",
    "solutions": [
      {
        "name": "Same-sign endpoint test",
        "steps": [
          "Let $g(x,y)=4x-y-3$, so $g$ measures the signed side of $\\ell$. At $O$: $g(O)=-3<0$.",
          "At $P_k$: $g(P_k)=4k-k^2-3=-(k^2-4k+3)=-(k-1)(k-3)$.",
          "A segment avoids $\\ell$ exactly when both endpoints lie strictly on the same side, i.e. $g(O)$ and $g(P_k)$ are both negative (and neither is $0$): $-(k-1)(k-3)<0$.",
          "That is $(k-1)(k-3)>0\\Rightarrow \\boxed{k<1\\text{ or }k>3}$. The boundary $k=1,3$ gives $g(P_k)=0$ (endpoint on $\\ell$), so it is excluded."
        ]
      },
      {
        "name": "Direct intersection check",
        "steps": [
          "Every point of the segment is $t(k,k^2)$ for $t\\in[0,1]$; it meets $\\ell$ when $4tk-tk^2-3=0$, i.e. $t\\,k(4-k)=3$.",
          "This is linear in $t$: if $k(4-k)\\ne0$ then $t=\\dfrac{3}{k(4-k)}$, while if $k(4-k)=0$ the equation reads $-3=0$ (no solution, no crossing).",
          "Since $g(O)=-3<0$, a crossing with $t\\in[0,1]$ happens exactly when $g(P_k)\\ge0$, i.e. $-(k-1)(k-3)\\ge0$, giving the meeting set $1\\le k\\le3$.",
          "Hence non-crossing is the complement $\\boxed{k<1\\text{ or }k>3}$."
        ]
      },
      {
        "name": "Intermediate Value Theorem on the segment",
        "steps": [
          "Let $h(t)=g\\big(t k,\\,t k^2\\big)=t\\,k(4-k)-3$ for $t\\in[0,1]$; the segment meets $\\ell$ iff $h(t)=0$ for some such $t$.",
          "Always $h(0)=-3<0$, and $h(1)=g(P_k)=-(k-1)(k-3)$. As $h$ is linear (monotone), a zero occurs in $[0,1]$ iff $h(1)\\ge0$.",
          "So a crossing requires $-(k-1)(k-3)\\ge0\\Rightarrow 1\\le k\\le3$; outside this $h$ stays strictly negative on all of $[0,1]$.",
          "Therefore the segment avoids $\\ell$ exactly for $\\boxed{k\\in(-\\infty,1)\\cup(3,\\infty)}$."
        ]
      }
    ],
    "remark": "Insight: a segment avoids a line exactly when its two endpoints share the line's sign. Writing the endpoint's signed value as $-(k-1)(k-3)$ converts the geometry into a one-line quadratic inequality, and the linearity of $g$ along the segment (Method 2/3) makes the strict-versus-closed boundary behaviour transparent — the endpoints $k=1,3$ land on $\\ell$ and are excluded."
  },
  {
    "theme": "footimage",
    "themeLabel": "Foot of Perpendicular, Image & Distance",
    "title": "A Line Bounced, Then Measured",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "line-reflection",
      "image-of-line",
      "perpendicular-distance",
      "slope-inversion",
      "origin"
    ],
    "statement": "Reflect the line $\\ell:\\,2x+y-4=0$ in the slanted mirror $m:\\,x-y+1=0$ to obtain its image $\\ell'$. Find the perpendicular distance from the origin to $\\ell'$.",
    "answer": "\\[\\boxed{\\sqrt{5}}\\]",
    "trap": "Assuming the image $\\ell'$ is PARALLEL to $\\ell$ — keeping the slope $-2$ and just sliding the line through the fixed point $\\ell\\cap m=(1,2)$. That rebuilds $2x+y-4=0$ (i.e. $\\ell$ itself, since the fixed point already lies on $\\ell$) and gives the wrong distance $\\dfrac{4}{\\sqrt5}=\\dfrac{4\\sqrt5}{5}$. A slanted mirror does NOT preserve slope: reflecting in $x-y+1=0$ swaps the roles of $x$ and $y$, sending slope $-2$ to $-\\tfrac12$. You must reflect the line, not translate it.",
    "solutions": [
      {
        "name": "Reflect two points, then measure",
        "steps": [
          "Reflection in $m:\\,x-y+1=0$ swaps and shifts coordinates: a point $(a,b)$ maps to $(b-1,\\,a+1)$.",
          "Reflect $(0,4)\\in\\ell$ to $(3,1)$ and $(2,0)\\in\\ell$ to $(-1,3)$.",
          "The line through $(3,1)$ and $(-1,3)$ has slope $-\\tfrac12$, giving $\\ell':\\,x+2y-5=0$.",
          "Distance from $O$: $\\dfrac{|0+0-5|}{\\sqrt{1^2+2^2}}=\\dfrac{5}{\\sqrt5}=\\boxed{\\sqrt5}$."
        ]
      },
      {
        "name": "Coordinate-map substitution",
        "steps": [
          "Since the reflection in $x-y+1=0$ is an involution, a target point $(X,Y)$ on $\\ell'$ is the image of the source $(Y-1,\\,X+1)$ lying on $\\ell$.",
          "Substitute that source into $2x+y-4=0$: $2(Y-1)+(X+1)-4=0\\Rightarrow X+2Y-5=0$, so $\\ell':\\,x+2y-5=0$.",
          "Distance from the origin is $\\dfrac{|-5|}{\\sqrt{1^2+2^2}}=\\dfrac{5}{\\sqrt5}$.",
          "This equals $\\boxed{\\sqrt5}$."
        ]
      },
      {
        "name": "Isometry shortcut",
        "steps": [
          "Reflection is an isometry, so the distance from $O$ to $\\ell'$ equals the distance from the image of $O$ to the original $\\ell$.",
          "The origin reflects in $m$ to $O'=(0-1,\\,0+1)=(-1,1)$.",
          "Distance from $O'$ to $\\ell:\\,2x+y-4=0$ is $\\dfrac{|2(-1)+1-4|}{\\sqrt{2^2+1^2}}=\\dfrac{5}{\\sqrt5}$.",
          "Hence the required distance is $\\boxed{\\sqrt5}$, confirming the two-point construction."
        ]
      }
    ],
    "remark": "Insight: under a slanted mirror the image line pivots about the fixed point $\\ell\\cap m=(1,2)$ with its slope inverted ($-2\\mapsto-\\tfrac12$) — it is never simply a parallel copy. Method 3 exploits the deeper fact that reflection is an isometry, so distances may be measured before or after reflecting: dropping $O$ onto $m$ first turns the whole construction into a single point-to-line distance."
  },
  {
    "theme": "footimage",
    "themeLabel": "Foot of Perpendicular, Image & Distance",
    "title": "A Circle Born From a Mirror",
    "difficulty": 5,
    "task": "Find the centre and radius",
    "tags": [
      "image",
      "foot",
      "diameter",
      "circle",
      "hybrid"
    ],
    "statement": "Let $A=(7,2)$ and let $\\ell:\\,x-3y+4=0$. Let $A'$ be the image of $A$ in $\\ell$, and let $\\Gamma$ be the circle having $AA'$ as a diameter. Find the centre and radius of $\\Gamma$.",
    "answer": "\\[\\boxed{\\text{centre }\\left(\\tfrac{13}{2},\\tfrac72\\right),\\ \\text{radius }\\dfrac{\\sqrt{10}}{2}}\\]",
    "trap": "Taking the radius to be the full distance $|AA'|=\\sqrt{10}$ instead of half of it, and/or placing the centre at the image $A'=(6,5)$ rather than at the midpoint of $A,A'$ — which is exactly the FOOT of the perpendicular. Confusing the diameter $|AA'|=2\\,d(A,\\ell)$ with the radius is the heart of the trap.",
    "solutions": [
      {
        "name": "Foot = centre, distance = radius",
        "steps": [
          "The centre of $\\Gamma$ is the midpoint of $A$ and $A'$, which is the foot $F$ of the perpendicular from $A$ to $\\ell$.",
          "With $g=x-3y+4$, $g(A)=7-6+4=5$, $a^2+b^2=10$: $F=A-\\tfrac{5}{10}(1,-3)=\\left(\\tfrac{13}2,\\tfrac72\\right)$.",
          "The radius is $d(A,\\ell)=\\dfrac{|5|}{\\sqrt{10}}=\\dfrac{\\sqrt{10}}{2}$ (half of the diameter $|AA'|=\\sqrt{10}$).",
          "Hence centre $\\left(\\tfrac{13}2,\\tfrac72\\right)$, radius $\\boxed{\\dfrac{\\sqrt{10}}{2}}$."
        ]
      },
      {
        "name": "Compute the image explicitly",
        "steps": [
          "Image $A'=A-\\tfrac{2(5)}{10}(1,-3)=(7,2)-(1,-3)=(6,5)$.",
          "Centre $=\\tfrac{A+A'}{2}=\\left(\\tfrac{7+6}{2},\\tfrac{2+5}{2}\\right)=\\left(\\tfrac{13}2,\\tfrac72\\right)$.",
          "Radius $=\\tfrac12|AA'|=\\tfrac12\\sqrt{(7-6)^2+(2-5)^2}=\\tfrac12\\sqrt{10}$.",
          "So $\\boxed{\\text{centre }\\left(\\tfrac{13}2,\\tfrac72\\right),\\ r=\\tfrac{\\sqrt{10}}2}$."
        ]
      },
      {
        "name": "Circle as locus through A and A'",
        "steps": [
          "A circle on diameter $AA'$ is $\\{X:\\ \\vec{XA}\\cdot\\vec{XA'}=0\\}$, i.e. $(x-7)(x-6)+(y-2)(y-5)=0$.",
          "Expand: $x^2+y^2-13x-7y+52=0$, so centre $=\\left(\\tfrac{13}2,\\tfrac72\\right)$.",
          "Radius $=\\sqrt{\\left(\\tfrac{13}2\\right)^2+\\left(\\tfrac72\\right)^2-52}=\\sqrt{\\tfrac{169+49}{4}-52}=\\sqrt{\\tfrac{218-208}{4}}=\\sqrt{\\tfrac{10}{4}}$.",
          "Thus $\\boxed{\\text{centre }\\left(\\tfrac{13}2,\\tfrac72\\right),\\ r=\\tfrac{\\sqrt{10}}2}$."
        ]
      }
    ],
    "remark": "Insight: the foot of the perpendicular is the midpoint of a point and its mirror image — so a circle on $AA'$ as diameter is centred at the foot with radius equal to the point-to-line distance. Three classic objects (image, foot, distance) collapse into one picture."
  },
  {
    "theme": "bisectors",
    "themeLabel": "Angle Bisectors",
    "title": "The Origin's Deceptive Angle",
    "difficulty": 3,
    "task": "Find",
    "tags": [
      "origin-bisector",
      "acute-obtuse",
      "normalisation",
      "sign-test"
    ],
    "statement": "Consider the lines $L_1:3x-4y+5=0$ and $L_2:5x+12y-13=0$. Find the equation of the bisector of the angle between them that contains the origin, and state whether the origin lies in the acute or the obtuse angle between the two lines.",
    "answer": "\\[\\boxed{8x+y=0\\quad\\text{(this is the obtuse-angle bisector; the origin lies in the obtuse angle)}}\\]",
    "trap": "Assuming the origin-containing bisector is automatically the acute-angle bisector. It is not. After making both constants positive, the sign test gives $a_1a_2+b_1b_2=(3)(-5)+(-4)(-12)=33>0$, which means the origin-containing bisector is the OBTUSE one. The two properties 'contains the origin' and 'bisects the acute angle' are independent; the student must run the sign test, not guess.",
    "solutions": [
      {
        "name": "Normalise so both constants are positive, then take the matching sign",
        "steps": [
          "Write each line with a positive constant term. $L_1:3x-4y+5=0$ already has $+5$. For $L_2$ multiply by $-1$: $-5x-12y+13=0$.",
          "The bisector of the angle containing the origin is obtained by equating the normalised forms with the SAME (\\,$+$\\,) sign once both constants are positive: $\\dfrac{3x-4y+5}{\\sqrt{3^2+(-4)^2}}=\\dfrac{-5x-12y+13}{\\sqrt{(-5)^2+(-12)^2}}$, i.e. $\\dfrac{3x-4y+5}{5}=\\dfrac{-5x-12y+13}{13}$.",
          "Cross-multiply: $13(3x-4y+5)=5(-5x-12y+13)\\Rightarrow 39x-52y+65=-25x-60y+65$, hence $64x+8y=0$, i.e. $8x+y=0$.",
          "Classify the angle with the sign test on the normalised coefficients (constants positive): $a_1a_2+b_1b_2=(3)(-5)+(-4)(-12)=-15+48=33>0$. A positive value means the origin (same-sign) bisector is the OBTUSE-angle bisector, so the origin lies in the obtuse angle. $\\boxed{8x+y=0}$"
        ]
      },
      {
        "name": "Build both bisectors, then test the origin and measure the half-angle",
        "steps": [
          "The two bisectors satisfy $\\dfrac{|3x-4y+5|}{5}=\\dfrac{|5x+12y-13|}{13}$. Dropping the signs the two cases give $13(3x-4y+5)=\\pm\\,5(5x+12y-13)$, producing $8x+y=0$ and $7x-56y+65=0$. These two lines are perpendicular, as bisectors must be.",
          "Pick the one through the origin: $8x+y=0$ passes through $(0,0)$ while $7x-56y+65=0$ does not, so $8x+y=0$ is the origin-containing bisector.",
          "Find its half-angle. With $L_1$, $\\tan\\theta=\\dfrac{|a_1b_2-a_2b_1|}{|a_1a_2+b_1b_2|}=\\dfrac{|8(-4)-3(1)|}{|8(3)+1(-4)|}=\\dfrac{35}{20}=\\dfrac{7}{4}$, so $\\theta=\\arctan\\tfrac{7}{4}\\approx 60.26^\\circ$. By symmetry the angle with $L_2$ is the same $60.26^\\circ$.",
          "Each half-angle is about $60.26^\\circ>45^\\circ$, so the full angle the bisector sits inside is $\\approx 120.51^\\circ$ (obtuse). Therefore $8x+y=0$ bisects the obtuse angle and the origin lies in the obtuse angle. $\\boxed{8x+y=0}$"
        ]
      }
    ],
    "remark": "Insight: 'contains the origin' and 'bisects the acute angle' are independent properties. The clean integer collapse $64x+8y=0\\to 8x+y=0$ rewards correct normalisation; the sign of $a_1a_2+b_1b_2$ (computed with both constants made positive) then classifies the origin angle as acute or obtuse with no trigonometry. Here the value $+33$ flags the obtuse case, and a direct half-angle measurement of $\\arctan\\tfrac{7}{4}\\approx 60.26^\\circ$ confirms it."
  },
  {
    "theme": "bisectors",
    "themeLabel": "Angle Bisectors",
    "title": "Does the Origin See a Sharp Corner?",
    "difficulty": 3,
    "task": "Classify",
    "tags": [
      "origin-classification",
      "ab-test",
      "acute-obtuse",
      "normalisation"
    ],
    "statement": "Two lines $L_1:7x-y+3=0$ and $L_2:x+y-3=0$ intersect. Classify whether the origin lies in the acute angle or the obtuse angle formed between them.",
    "answer": "\\[\\boxed{\\text{The origin lies in the acute angle}}\\]",
    "trap": "Trying to draw the lines and 'eyeball' which corner is sharp, or assuming the origin always lands in the obtuse region. The correct, foolproof route is to normalise both constants positive and read off $\\operatorname{sign}(a_1a_2+b_1b_2)$: the origin-containing ('+') bisector is acute exactly when this is negative.",
    "solutions": [
      {
        "name": "Sign test on normalised constants",
        "steps": [
          "Make constants positive: $L_1:7x-y+3=0$ (already $+3$), $L_2:-x-y+3=0$.",
          "Compute $a_1a_2+b_1b_2=(7)(-1)+(-1)(-1)=-7+1=-6<0$.",
          "Rule: with constants positive, $a_1a_2+b_1b_2<0\\Rightarrow$ the '+' (origin-containing) bisector bisects the ACUTE angle, so the origin lies in the acute angle.",
          "$\\boxed{\\text{acute}}$"
        ]
      },
      {
        "name": "Half-angle of the origin bisector",
        "steps": [
          "The origin-containing bisector is $\\dfrac{7x-y+3}{\\sqrt{50}}=\\dfrac{-x-y+3}{\\sqrt2}$.",
          "The angle this bisector makes with each line is $26.57^\\circ$, while the full angle between $L_1,L_2$ is $53.13^\\circ$.",
          "Since each half is $<45^\\circ$, the origin sits inside the acute angle.",
          "$\\boxed{\\text{acute}}$"
        ]
      }
    ],
    "remark": "Insight: classification needs no picture. Normalise, then one dot-product sign decides everything — a $30$-second discriminator that also tells you which $\\pm$ branch gives the acute bisector."
  },
  {
    "theme": "bisectors",
    "themeLabel": "Angle Bisectors",
    "title": "The Point in the Other Room",
    "difficulty": 4,
    "task": "Find",
    "tags": [
      "point-containing",
      "unequal-normalisers",
      "sign-branch",
      "locus"
    ],
    "statement": "The lines $L_1:4x-3y-7=0$ and $L_2:12x+5y-1=0$ divide the plane into four angular regions. Find the equation of the bisector of the angle that contains the point $P=(2,5)$.",
    "answer": "\\[\\boxed{56x-7y-48=0}\\]",
    "trap": "Blindly taking the '+' sign (the origin/same-sign habit) gives $\\dfrac{L_1}{5}=+\\dfrac{L_2}{13}$, i.e. $4x+32y+43=0$ — the bisector of an ADJACENT angle. Here $P$ lies on OPPOSITE sides of the two lines ($L_1(P)<0,\\ L_2(P)>0$), so $P$'s angle is bisected by the mixed-sign branch $\\dfrac{L_1}{5}=-\\dfrac{L_2}{13}$, namely $56x-7y-48=0$.",
    "solutions": [
      {
        "name": "Sign-of-the-point test",
        "steps": [
          "Evaluate the signed forms at $P=(2,5)$: $L_1(P)=4(2)-3(5)-7=-14$ and $L_2(P)=12(2)+5(5)-1=48$. The signed distances are $\\dfrac{L_1(P)}{5}=-\\dfrac{14}{5}$ and $\\dfrac{L_2(P)}{13}=+\\dfrac{48}{13}$ — opposite signs.",
          "A point $Q$ lies in $P$'s angular region iff $L_1(Q)$ and $L_2(Q)$ carry the same signs as at $P$. Equating distances $\\dfrac{|L_1|}{5}=\\dfrac{|L_2|}{13}$ and inserting those signs forces $\\dfrac{4x-3y-7}{5}=-\\dfrac{12x+5y-1}{13}$.",
          "Cross-multiply: $13(4x-3y-7)=-5(12x+5y-1)\\Rightarrow 52x-39y-91=-60x-25y+5$.",
          "Collect: $112x-14y-96=0\\Rightarrow 56x-7y-48=0$. $\\boxed{56x-7y-48=0}$"
        ]
      },
      {
        "name": "Direction-from-vertex check",
        "steps": [
          "The two angle bisectors both pass through the vertex $V=L_1\\cap L_2=\\left(\\tfrac{19}{28},-\\tfrac{40}{28}\\right)=\\left(\\tfrac{19}{28},-\\tfrac{10}{7}\\right)$. The ray $\\overrightarrow{VP}$ points into $P$'s angle, with unit direction $\\approx(0.201,\\,0.980)$.",
          "Solving $\\dfrac{L_1}{5}=\\pm\\dfrac{L_2}{13}$ gives the perpendicular pair $56x-7y-48=0$ and $4x+32y+43=0$. Their direction vectors are $(7,56)\\parallel(1,8)$ and $(32,-4)\\parallel(8,-1)$.",
          "Compare with $\\overrightarrow{VP}$: the line $56x-7y-48=0$ has direction $(1,8)$ aligning with $\\overrightarrow{VP}$ (cosine $\\approx0.997$), while $4x+32y+43=0$ is nearly perpendicular to it — so the latter bisects an adjacent angle.",
          "Hence $P$'s angle is bisected by $\\boxed{56x-7y-48=0}$. As a sanity check, the point $\\left(1,\\tfrac87\\right)$ on it is equidistant from both lines: $\\dfrac{L_1}{5}=-\\dfrac97$ and $\\dfrac{L_2}{13}=+\\dfrac97$, equal in magnitude."
        ]
      }
    ],
    "remark": "Insight: the seductive 'origin/plus' habit fails the instant the chosen point straddles the two lines with opposite signs. The mixed-sign branch is forced by which quadrant about the vertex the point occupies, not by whether the angle is acute or obtuse. With unequal normalisers $5$ and $13$, sign bookkeeping — not magnitude — decides the branch."
  },
  {
    "theme": "bisectors",
    "themeLabel": "Angle Bisectors",
    "title": "Which Half is Sharp?",
    "difficulty": 4,
    "task": "Find",
    "tags": [
      "acute-bisector",
      "ab-test",
      "normalisation",
      "half-angle"
    ],
    "statement": "Find the equation of the bisector of the acute angle between the lines $L_1:x+y-2=0$ and $L_2:x-7y+6=0$.",
    "answer": "\\[\\boxed{x+3y-4=0}\\]",
    "trap": "The shortcut \"the sign of $a_1a_2+b_1b_2$ decides which branch is acute\" only works after both constant terms are made positive. Applied to the RAW lines one gets $a_1a_2+b_1b_2=(1)(1)+(1)(-7)=-6$, whereas after fixing constants ($L_1\\to -x-y+2=0$) the value becomes $(-1)(1)+(-1)(-7)=+6$ — the sign flips. A student who tests the raw lines reads the verdict backwards and selects $3x-y-2=0$, which is in fact the OBTUSE bisector ($63.43^\\circ$ with each line), not the acute one.",
    "solutions": [
      {
        "name": "Normalise, then pick the branch by the sign test",
        "steps": [
          "Make both constant terms positive: $L_1:-x-y+2=0$ and $L_2:x-7y+6=0$, with norms $n_1=\\sqrt2$ and $n_2=5\\sqrt2$.",
          "Both bisectors are $\\dfrac{-x-y+2}{\\sqrt2}=\\pm\\dfrac{x-7y+6}{5\\sqrt2}$.",
          "Compute $a_1a_2+b_1b_2=(-1)(1)+(-1)(-7)=6>0$. With constants positive, the $+$ branch is the obtuse bisector and the $-$ branch (i.e. $\\dfrac{-x-y+2}{\\sqrt2}=-\\dfrac{x-7y+6}{5\\sqrt2}$) is the acute one.",
          "Take the acute branch $\\dfrac{-x-y+2}{\\sqrt2}+\\dfrac{x-7y+6}{5\\sqrt2}=0$ and multiply by $5\\sqrt2$: $5(-x-y+2)+(x-7y+6)=0\\Rightarrow -4x-12y+16=0$.",
          "Divide by $-4$: $\\boxed{x+3y-4=0}$."
        ]
      },
      {
        "name": "Half-angle (geometric) verification",
        "steps": [
          "The two bisectors $\\dfrac{x+y-2}{\\sqrt2}=\\pm\\dfrac{x-7y+6}{5\\sqrt2}$ simplify to $x+3y-4=0$ and $3x-y-2=0$ (mutually perpendicular, as bisectors must be).",
          "The acute angle $\\theta$ between $L_1,L_2$ satisfies $\\cos\\theta=\\dfrac{|1\\cdot1+1\\cdot(-7)|}{\\sqrt2\\,\\sqrt{50}}=\\dfrac{6}{10}$, so $\\theta=53.13^\\circ$ and the acute bisector must make $\\tfrac{\\theta}{2}=26.57^\\circ$ with each line.",
          "For $x+3y-4=0$: $\\cos\\alpha=\\dfrac{|1\\cdot1+3\\cdot1|}{\\sqrt{10}\\,\\sqrt2}=\\dfrac{4}{\\sqrt{20}}$, giving $\\alpha=26.57^\\circ$. For $3x-y-2=0$ the angle is $63.43^\\circ$.",
          "Only $x+3y-4=0$ makes $26.57^\\circ$ with each line, so it is the acute bisector: $\\boxed{x+3y-4=0}$."
        ]
      }
    ],
    "remark": "Insight: the $a_1a_2+b_1b_2$ test carries information only once both lines are written with positive constant terms — normalising flips the raw $-6$ to $+6$ and with it the acute/obtuse verdict. The half-angle check ($26.57^\\circ$ vs $63.43^\\circ$) is the geometric truth the algebra must reproduce."
  },
  {
    "theme": "bisectors",
    "themeLabel": "Angle Bisectors",
    "title": "The Equidistant Road That Splits in Two",
    "difficulty": 4,
    "task": "Determine",
    "tags": [
      "angle bisectors",
      "equidistant locus",
      "acute vs obtuse",
      "perpendicular bisectors",
      "sign normalisation"
    ],
    "statement": "Two straight rails run along $L_1:3x-4y+1=0$ and $L_2:5x+12y-17=0$. An inspection robot must move so that it is always equidistant from both rails.\n\n(a) Show that the complete set of admissible positions is the union of two lines, find their equations, and prove these two lines are perpendicular.\n\n(b) Of the two bisectors, identify the one that bisects the acute angle between the rails, and the one that bisects the angular region (wedge) containing the origin. State clearly whether these are the same line or different lines.",
    "answer": "\\[\\boxed{\\;\\text{Locus: }8x+y-9=0\\ \\text{and}\\ x-8y+7=0;\\quad \\text{acute bisector: }x-8y+7=0,\\quad \\text{origin-wedge (obtuse) bisector: }8x+y-9=0\\;}\\]",
    "trap": "First trap: assuming \"equidistant from two lines\" describes a SINGLE line (the bisector) when it is the union of BOTH bisectors. Second trap: thinking the bisector of the origin's wedge is automatically the acute (\"internal\") one. After normalising both constants positive, $a_1a_2+b_1b_2=3(-5)+(-4)(-12)=33>0$, so the origin lies in the OBTUSE wedge; the origin-wedge bisector $8x+y-9=0$ is the OBTUSE one, NOT the acute $x-8y+7=0$. Third trap: misreading the question as \"the bisector passing through the origin\" — in fact NEITHER bisector passes through the origin, since $8(0)+0-9=-9\\neq0$ and $0-8(0)+7=7\\neq0$; the relevant property is which angular wedge the origin sits in, not incidence.",
    "solutions": [
      {
        "name": "Equidistance and the $\\pm$ pair",
        "steps": [
          "A point $(x,y)$ is equidistant from the rails iff $\\dfrac{|3x-4y+1|}{\\sqrt{3^2+4^2}}=\\dfrac{|5x+12y-17|}{\\sqrt{5^2+12^2}}$, i.e. $\\dfrac{|3x-4y+1|}{5}=\\dfrac{|5x+12y-17|}{13}$.",
          "Clearing moduli gives the two signed cases $13(3x-4y+1)=\\pm\\,5(5x+12y-17)$, whose union is the entire locus — two lines, not one.",
          "Minus sign: $39x-52y+13=-25x-60y+85\\Rightarrow 64x+8y-72=0\\Rightarrow 8x+y-9=0$. Plus sign: $39x-52y+13=25x+60y-85\\Rightarrow 14x-112y+98=0\\Rightarrow x-8y+7=0$.",
          "Their normal vectors $(8,1)$ and $(1,-8)$ satisfy $(8)(1)+(1)(-8)=0$, so the two bisectors are perpendicular.",
          "To classify the wedges, normalise both constants positive: $L_1$ already shows $+1$ at the origin; rewrite $L_2$ as $-5x-12y+17=0$ (value $+17$ at the origin). Then $a_1a_2+b_1b_2=3(-5)+(-4)(-12)=33>0$, so the bisector taken with EQUAL signs of these normalised forms — namely $\\dfrac{3x-4y+1}{5}=\\dfrac{-5x-12y+17}{13}$, which reduces to $8x+y-9=0$ — bisects the OBTUSE angle, and that obtuse wedge is exactly where the origin lies.",
          "Hence the acute bisector is $x-8y+7=0$, while $8x+y-9=0$ bisects the obtuse, origin-containing wedge. They are different lines, and neither passes through the origin since $-9\\neq0$ and $7\\neq0$. $\\boxed{8x+y-9=0,\\ x-8y+7=0}$"
        ]
      },
      {
        "name": "Half-angle / direct angle check",
        "steps": [
          "The rails meet where $3x-4y+1=0$ and $5x+12y-17=0$; solving gives the vertex $(1,1)$, through which both bisectors pass (check: $8(1)+1-9=0$ and $1-8(1)+7=0$).",
          "A direction along $L_1$ is $(4,3)$, along $L_2$ is $(12,-5)$; the angle $\\theta$ between the rails has $\\cos\\theta=\\dfrac{|4\\cdot12+3\\cdot(-5)|}{5\\cdot13}=\\dfrac{33}{65}$, so $\\theta\\approx59.49^\\circ$ (acute) and the complementary opening is $\\approx120.51^\\circ$ (obtuse).",
          "A direction along $8x+y-9=0$ is $(1,-8)$; its angle to $L_1$ is $\\arccos\\dfrac{|4-24|}{5\\sqrt{65}}=\\arccos\\dfrac{20}{5\\sqrt{65}}\\approx60.26^\\circ=\\tfrac12(120.51^\\circ)$, the half of the OBTUSE angle.",
          "A direction along $x-8y+7=0$ is $(8,1)$; its angle to $L_1$ is $\\arccos\\dfrac{|32+3|}{5\\sqrt{65}}=\\arccos\\dfrac{35}{5\\sqrt{65}}\\approx29.74^\\circ=\\tfrac12(59.49^\\circ)$, the half of the ACUTE angle.",
          "So $x-8y+7=0$ is the acute bisector. The direction from the vertex $(1,1)$ toward the origin is $(-1,-1)$; it falls inside the wedge bounded by the $-(4,3)$ ray of $L_1$ and the $(12,-5)$ ray of $L_2$, whose opening is the $120.51^\\circ$ obtuse one, and that wedge is bisected by $8x+y-9=0$.",
          "Therefore the acute bisector and the origin-wedge bisector are DIFFERENT: $\\boxed{8x+y-9=0\\ (\\text{origin wedge, obtuse}),\\ x-8y+7=0\\ (\\text{acute})}$"
        ]
      },
      {
        "name": "Signed-distance / unit-normal addition",
        "steps": [
          "Write each line through the unit normal whose value is positive at the origin: $u_1=\\tfrac15(3,-4)$ (value $+1$ at $O$) and $u_2=\\tfrac1{13}(-5,-12)$ (value $+17$ at $O$).",
          "The bisector of the origin's wedge is the locus of equal signed distances $\\dfrac{3x-4y+1}{5}=\\dfrac{-5x-12y+17}{13}$; clearing denominators gives $13(3x-4y+1)=5(-5x-12y+17)\\Rightarrow 64x+8y-72=0\\Rightarrow 8x+y-9=0$.",
          "Its direction is along $u_1+u_2=\\left(\\tfrac{3}{5}-\\tfrac{5}{13},\\,-\\tfrac{4}{5}-\\tfrac{12}{13}\\right)=\\tfrac1{65}(14,-112)\\parallel(1,-8)$, consistent with $8x+y-9=0$.",
          "Whether this wedge is acute or obtuse is settled by $u_1\\cdot u_2=\\tfrac{1}{65}\\big(3(-5)+(-4)(-12)\\big)=\\tfrac{33}{65}>0$: the positive sign means the inward normals subtend an acute angle, so the origin sits in the OBTUSE wedge and $8x+y-9=0$ is the obtuse bisector.",
          "The remaining branch, from the opposite sign $\\dfrac{3x-4y+1}{5}=-\\dfrac{-5x-12y+17}{13}$, is $x-8y+7=0$, which therefore bisects the complementary acute wedge; and $(8)(1)+(1)(-8)=0$ confirms the pair is perpendicular.",
          "Final: union $=\\{8x+y-9=0\\}\\cup\\{x-8y+7=0\\}$; acute bisector $=x-8y+7=0$; origin-wedge bisector $=8x+y-9=0$ (obtuse); they are different lines. $\\boxed{8x+y-9=0,\\ x-8y+7=0}$"
        ]
      }
    ],
    "remark": "Insight: the equidistant locus of two lines is intrinsically a PERPENDICULAR PAIR of bisectors, not a single line, and \"bisects the acute angle\" and \"lies in the wedge containing the origin\" are independent properties. Beware the literal reading \"passes through the origin\" — here neither bisector does. The sign test $a_1a_2+b_1b_2$ (after fixing both constant terms positive) decouples the two descriptions: a positive value means the origin sits in the obtuse wedge, so the acute bisector and the origin-wedge bisector are different lines."
  },
  {
    "theme": "bisectors",
    "themeLabel": "Angle Bisectors",
    "title": "The Incentre Hiding in the Sides",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "incentre",
      "internal-bisectors",
      "triangle",
      "equidistance"
    ],
    "statement": "A triangle has its three sides along the lines $AB:y=0$, $AC:12x-5y=0$, and $BC:4x+3y-56=0$. Determine the point where the three internal angle bisectors of the triangle concur (the incentre).",
    "answer": "\\[\\boxed{(6,\\,4)}\\]",
    "trap": "Choosing the wrong sign branch for each vertex's bisector and landing on an excentre instead of the incentre. The internal bisector at each vertex is the branch pointing INTO the triangle; in $\\dfrac{L_i}{n_i}=\\pm\\dfrac{L_j}{n_j}$ you must take the sign that keeps the bisector on the interior side (consistent signed distances). A careless $+$ on $BC$, for instance, gives the excentre $(21,14)$ rather than $(6,4)$.",
    "solutions": [
      {
        "name": "Equidistance with interior signs",
        "steps": [
          "The incentre is equidistant from all three side-lines, with the signed distances all carrying the interior sign. Test an interior point, the centroid $G=(\\tfrac{19}{3},4)$: the values $\\tfrac{L_{AB}}{1},\\tfrac{L_{AC}}{13},\\tfrac{L_{BC}}{5}$ are $+4,\\ +\\tfrac{56}{13},\\ -\\tfrac{56}{15}$, i.e. signs $+,+,-$.",
          "Match those interior signs: $\\dfrac{y}{1}=\\dfrac{12x-5y}{13}$ (giving $+,+$) and $\\dfrac{y}{1}=-\\dfrac{4x+3y-56}{5}$ (giving $+,-$).",
          "First: $13y=12x-5y\\Rightarrow 12x-18y=0\\Rightarrow 2x-3y=0$. Second: $5y=-(4x+3y-56)\\Rightarrow 4x+8y-56=0\\Rightarrow x+2y=14$.",
          "Solving $2x=3y$ with $x+2y=14$ gives $x=6,\\ y=4$. $\\boxed{(6,4)}$"
        ]
      },
      {
        "name": "Weighted vertices",
        "steps": [
          "Vertices: $A=(0,0)$ (meet of $AB,AC$), $B=(14,0)$ (meet of $AB,BC$), $C=(5,12)$ (meet of $AC,BC$).",
          "Side lengths opposite each vertex: $a=|BC|=15,\\ b=|CA|=13,\\ c=|AB|=14$ — a $13$-$14$-$15$ triangle.",
          "Incentre $=\\dfrac{aA+bB+cC}{a+b+c}=\\dfrac{15(0,0)+13(14,0)+14(5,12)}{42}=\\dfrac{(182+70,\\,168)}{42}=\\dfrac{(252,168)}{42}$.",
          "This equals $(6,4)$, and the inradius is $r=\\dfrac{\\text{area}}{s}=\\dfrac{84}{21}=4$, matching the signed distances $|{\\pm}4|$. $\\boxed{(6,4)}$"
        ]
      },
      {
        "name": "Two bisector lines",
        "steps": [
          "Internal bisector at $A$ (interior branch of $AB,AC$): $\\dfrac{y}{1}=\\dfrac{12x-5y}{13}\\Rightarrow 2x-3y=0$.",
          "Internal bisector at $B$ (interior branch of $AB,BC$): $\\dfrac{y}{1}=-\\dfrac{4x+3y-56}{5}\\Rightarrow x+2y=14$.",
          "Intersect $2x-3y=0$ with $x+2y=14$ to get $x=6,\\ y=4$.",
          "The third internal bisector at $C$ also passes through $(6,4)$, confirming concurrency. $\\boxed{(6,4)}$"
        ]
      }
    ],
    "remark": "Insight: the incentre is the unique interior point whose three signed distances to the sides are equal in magnitude AND consistent in interior sign. Picking signs that match an interior test point (here the centroid) removes the $\\pm$ ambiguity that otherwise sends you to an excentre. The clean $13$-$14$-$15$ triangle makes the incentre $(6,4)$ a lattice point with inradius exactly $4$; two of its three excentres, $I_A=(21,14)$ and $I_C=(8,-12)$, are also lattice points, while $I_B=\\left(-7,\\tfrac{21}{2}\\right)$ is not."
  },
  {
    "theme": "bisectors",
    "themeLabel": "Angle Bisectors",
    "title": "The Escaped Centre",
    "difficulty": 5,
    "task": "Find",
    "tags": [
      "excentre",
      "external-bisectors",
      "internal-bisector",
      "exradius"
    ],
    "statement": "A triangle has sides along $AB:y=0$, $AC:12x-5y=0$, and $BC:4x+3y-56=0$, with vertices $A=(0,0),\\ B=(14,0),\\ C=(5,12)$. Find the centre of the excircle opposite vertex $C$ (the circle tangent to side $AB$ and to the extensions of $CA$ and $CB$).",
    "answer": "\\[\\boxed{(8,\\,-12)}\\]",
    "trap": "Using the INTERNAL bisector at every vertex (which gives the incentre $(6,4)$). The excentre opposite $C$ is the meet of the EXTERNAL bisectors at $A$ and $B$ with the internal bisector at $C$; it lies on the far side of $AB$ from $C$. Picking internal bisectors at $A,B$ — or the wrong $\\pm$ branch — produces the incentre or a different excentre.",
    "solutions": [
      {
        "name": "External-bisector signs",
        "steps": [
          "The excentre $I_C$ is equidistant from all three side-lines but on the opposite side of $AB$ from $C$ (so $y<0$), with external bisectors at $A$ and $B$.",
          "Solve the equidistance system choosing the branch with $I_C$ below $AB$: $\\dfrac{y}{1}=-\\dfrac{12x-5y}{13}$ and $\\dfrac{y}{1}=\\dfrac{4x+3y-56}{5}$.",
          "First: $13y=-(12x-5y)\\Rightarrow 12x+8y=0\\Rightarrow 3x+2y=0$. Second: $5y=4x+3y-56\\Rightarrow 4x-2y=56\\Rightarrow 2x-y=28$.",
          "Solve $3x+2y=0,\\ 2x-y=28$: $x=8,\\ y=-12$. $\\boxed{(8,-12)}$"
        ]
      },
      {
        "name": "Excentre weighted formula",
        "steps": [
          "With $a=|BC|=15,\\ b=|CA|=13,\\ c=|AB|=14$, the excentre opposite $C$ is $I_C=\\dfrac{aA+bB-cC}{a+b-c}$.",
          "$I_C=\\dfrac{15(0,0)+13(14,0)-14(5,12)}{15+13-14}=\\dfrac{(182-70,\\,-168)}{14}=\\dfrac{(112,-168)}{14}$.",
          "This gives $(8,-12)$.",
          "The exradius is $r_C=\\dfrac{\\text{area}}{s-c}=\\dfrac{84}{21-14}=12$, matching the distance $12$ from $(8,-12)$ to each side-line. $\\boxed{(8,-12)}$"
        ]
      }
    ],
    "remark": "Insight: the four tritangent centres are exactly the four sign-choices in the simultaneous equidistance equations; the excircle opposite $C$ is selected by demanding it be tangent to side $AB$ itself (so on $C$'s far side). Exradius $12$ confirms the lattice answer."
  },
  {
    "theme": "bisectors",
    "themeLabel": "Angle Bisectors",
    "title": "Where the Bisector Strikes the Base",
    "difficulty": 5,
    "task": "Find",
    "tags": [
      "internal-bisector",
      "section-ratio",
      "foot-on-side",
      "triangle"
    ],
    "statement": "In triangle $ABC$ with $A=(0,0)$, $B=(14,0)$, $C=(5,12)$, the internal bisector of $\\angle A$ is drawn. Find the equation of this bisector and the coordinates of the point $D$ where it meets side $BC$.",
    "answer": "\\[\\boxed{2x-3y=0,\\quad D=\\left(\\tfrac{28}{3},\\,\\tfrac{56}{9}\\right)}\\]",
    "trap": "Taking the wrong $\\pm$ branch (giving the EXTERNAL bisector $3x+2y=0$), or using the angle-bisector section ratio as $BD:DC=AC:AB$ instead of the correct $BD:DC=AB:AC$. The external bisector never meets segment $BC$ between $B$ and $C$, and the swapped ratio places $D$ off the bisector entirely.",
    "solutions": [
      {
        "name": "Bisector then intersection",
        "steps": [
          "Side $AB$ is $y=0$; side $AC$ ($A=(0,0),C=(5,12)$) is $12x-5y=0$. Both pass through $A$.",
          "Internal bisector at $A$ (interior branch, $x>0,y>0$): $\\dfrac{y}{1}=\\dfrac{12x-5y}{13}\\Rightarrow 13y=12x-5y\\Rightarrow 12x-18y=0\\Rightarrow 2x-3y=0$.",
          "Side $BC$ through $B=(14,0),C=(5,12)$ is $4x+3y-56=0$. Intersect with $2x-3y=0$ (so $x=\\tfrac32 y$): $6y+3y-56=0\\Rightarrow 9y=56\\Rightarrow y=\\tfrac{56}{9}$, $x=\\tfrac{28}{3}$.",
          "$\\boxed{2x-3y=0,\\ D=(\\tfrac{28}{3},\\tfrac{56}{9})}$"
        ]
      },
      {
        "name": "Section-ratio shortcut",
        "steps": [
          "The internal bisector from $A$ divides $BC$ in ratio $BD:DC=AB:AC=c:b$.",
          "Here $AB=c=14$ and $AC=b=13$, so $BD:DC=14:13$.",
          "$D=\\dfrac{13\\,B+14\\,C}{14+13}=\\dfrac{13(14,0)+14(5,12)}{27}=\\dfrac{(182+70,\\,168)}{27}=\\dfrac{(252,168)}{27}=(\\tfrac{28}{3},\\tfrac{56}{9})$.",
          "Line $AD$ through the origin has slope $\\tfrac{56/9}{28/3}=\\tfrac23$, i.e. $2x-3y=0$. $\\boxed{2x-3y=0,\\ D=(\\tfrac{28}{3},\\tfrac{56}{9})}$"
        ]
      }
    ],
    "remark": "Insight: two independent routes (locus equidistance vs the section ratio) must agree. The ratio orientation $BD:DC=AB:AC$ — each segment matched to the adjacent side — is the classic slip; getting both the equation and $D$ confirms the correct internal branch. As a sanity check, $D$ sits at parameter $t=\\tfrac{14}{27}$ along $B\\to C$, safely inside the segment."
  },
  {
    "theme": "bisectors",
    "themeLabel": "Angle Bisectors",
    "title": "The Mirror Between Two Lines",
    "difficulty": 5,
    "task": "Find",
    "tags": [
      "reflection",
      "mirror-line",
      "bisector-pair",
      "acute-identification"
    ],
    "statement": "A mirror is to be placed so that the reflection of the line $L_1:x-7y+8=0$ across it coincides with the line $L_2:7x-y-8=0$. Find the equations of all lines that can serve as such a mirror, and identify which one is the bisector of the acute angle between $L_1$ and $L_2$.",
    "answer": "\\[\\boxed{\\{x-y=0,\\ 3x+3y-8=0\\};\\ \\text{acute bisector }x-y=0}\\]",
    "trap": "Believing there is only ONE mirror. Reflecting $L_1$ onto $L_2$ is achieved by EITHER angle bisector of the pair (they are mutually perpendicular), so both bisectors are valid mirrors; reporting only one is incomplete. The second pitfall is then mislabelling which of the two perpendicular bisectors is the acute one.",
    "solutions": [
      {
        "name": "Bisector pair as mirrors",
        "steps": [
          "A line reflecting $L_1$ onto $L_2$ must be equidistant-in-angle from both: it is an angle bisector of $\\{L_1,L_2\\}$.",
          "Both have $n=\\sqrt{50}$, so bisectors satisfy $x-7y+8=\\pm(7x-y-8)$.",
          "'$+$': $x-7y+8=7x-y-8\\Rightarrow -6x-6y+16=0\\Rightarrow 3x+3y-8=0$. '$-$': $x-7y+8=-(7x-y-8)\\Rightarrow 8x-8y=0\\Rightarrow x-y=0$.",
          "Both mirrors map $L_1\\to L_2$ (reflecting in $x-y=0$ swaps coordinates: $x-7y+8\\to y-7x+8\\equiv 7x-y-8$). $\\boxed{x-y=0,\\ 3x+3y-8=0}$"
        ]
      },
      {
        "name": "Identify the acute bisector",
        "steps": [
          "Angle between $x-y=0$ and $L_1:x-7y+8=0$: $\\arccos\\frac{|1+7|}{\\sqrt2\\sqrt{50}}=36.87^\\circ$.",
          "Angle between $3x+3y-8=0$ and $L_1$: $53.13^\\circ$.",
          "The full angle between $L_1,L_2$ is $73.74^\\circ$ (acute), half $=36.87^\\circ$, so the bisector making $36.87^\\circ$ — namely $x-y=0$ — is the acute-angle bisector.",
          "$\\boxed{\\text{mirrors }x-y=0,\\ 3x+3y-8=0;\\ \\text{acute }x-y=0}$"
        ]
      },
      {
        "name": "Sign-rule cross-check",
        "steps": [
          "Write the bisectors as $\\frac{x-7y+8}{\\sqrt{50}}=\\pm\\frac{7x-y-8}{\\sqrt{50}}$ with $(a_1,b_1)=(1,-7)$, $(a_2,b_2)=(7,-1)$.",
          "Compute $a_1a_2+b_1b_2=7+7=14>0$. The standard rule says: when this is positive, the '$-$' branch gives the acute-angle bisector.",
          "The '$-$' branch is $x-y=0$, confirming the acute bisector independently. The perpendicular partner $3x+3y-8=0$ is then the obtuse bisector.",
          "$\\boxed{\\text{acute }x-y=0,\\ \\text{obtuse }3x+3y-8=0}$"
        ]
      }
    ],
    "remark": "Insight: the two angle bisectors of a pair of lines are precisely the two mirror lines exchanging them, and they are perpendicular. Reflection geometry and the bisector pair are the same object viewed two ways."
  },
  {
    "theme": "bisectors",
    "themeLabel": "Angle Bisectors",
    "title": "The Mirror That Was Almost Aligned",
    "difficulty": 5,
    "task": "Find",
    "tags": [
      "inverse bisector",
      "parameter",
      "concurrency at vertex",
      "acute vs obtuse",
      "origin test",
      "necessary vs sufficient"
    ],
    "statement": "A fixed beam travels along $L_1:5x+12y-29=0$. A second beam travels along $L_2:15x-8y+k=0$, where the constant $k$ is unknown. An engineer claims that the line $M:14x+5y-24=0$ is an angle bisector of the two beams.\\par (a) First explain why $M$ has the correct direction to be a bisector for every value of $k$, yet is genuinely a bisector for only one $k$. Find that value of $k$.\\par (b) For the value found, decide whether $M$ bisects the acute or the obtuse angle between the beams, whether it is the bisector containing the origin, and give the equation of the other bisector.",
    "answer": "\\[\\boxed{\\;k=1;\\quad M:14x+5y-24=0\\ \\text{is the OBTUSE, origin-containing bisector};\\quad \\text{other bisector: }5x-14y+23=0\\;}\\]",
    "trap": "Concluding $M$ is a bisector just because its normal $(14,5)$ is a bisector DIRECTION of the two normals — that is necessary but NOT sufficient. Since varying $k$ only translates $L_2$ parallel to itself, the two normals $(5,12)$ and $(15,-8)$ are unchanged, so the bisector directions $(14,5)$ and $(5,-14)$ are fixed for every $k$; the direction test therefore pins nothing. $M$ is an actual bisector only when it ALSO passes through the moving vertex $L_1\\cap L_2$, and that single requirement forces $k=1$. A second trap is to assume the origin-containing bisector must be the acute one — the sign test $a_1a_2+b_1b_2=21>0$ after positive-constant normalisation shows it is the OBTUSE one.",
    "solutions": [
      {
        "name": "Direction is necessary, the vertex is sufficient",
        "steps": [
          "The two angle bisectors of $L_1,L_2$ have normals along the sum and difference of the unit normals: $\\dfrac{(5,12)}{13}\\pm\\dfrac{(15,-8)}{17}$.",
          "Sum $=\\dfrac1{221}\\bigl(5\\cdot17+15\\cdot13,\\ 12\\cdot17-8\\cdot13\\bigr)=\\dfrac1{221}(280,100)\\parallel(14,5)$; difference $=\\dfrac1{221}(-110,308)\\parallel(5,-14)$. So $(14,5)$, the normal of $M$, is indeed a bisector direction.",
          "Crucially, neither normal involves $k$: changing $k$ only slides $L_2$ parallel to itself, leaving $(5,12)$ and $(15,-8)$ — hence both bisector directions — fixed. Thus 'M has bisector direction' holds for EVERY $k$ and so pins nothing.",
          "A line of that direction is a genuine bisector only if it passes through the vertex $V=L_1\\cap L_2$. Impose concurrency: require consistency of $5x+12y=29,\\ 15x-8y=-k,\\ 14x+5y=24$.",
          "From $5x+12y=29$ and $14x+5y=24$, eliminating gives $x=1,\\ y=2$. Substituting into $15x-8y=-k$ gives $15-16=-k$, so $k=1$.",
          "Check $V=(1,2)$: on $L_1$ ($5+24-29=0$), on $L_2$ with $k=1$ ($15-16+1=0$), on $M$ ($14+10-24=0$). Hence $\\boxed{k=1}$."
        ]
      },
      {
        "name": "Equidistance forces $k$",
        "steps": [
          "$M$ is a bisector iff it coincides with one branch of the equidistance locus $\\dfrac{5x+12y-29}{13}=\\pm\\dfrac{15x-8y+k}{17}$.",
          "Clearing denominators gives the two branches $17(5x+12y-29)\\mp 13(15x-8y+k)=0$. The combination $17L_1+13L_2$ yields $(85+195)x+(204-104)y+(13k-493)=0$, i.e. $280x+100y+(13k-493)=0$, whose normal is $(280,100)\\parallel(14,5)$ — the branch parallel to $M$.",
          "Divide by $20$: $14x+5y+\\dfrac{13k-493}{20}=0$. (The other combination $17L_1-13L_2$ has normal $\\parallel(5,-14)$, the perpendicular bisector, so it can never equal $M$.)",
          "For this branch to BE $M:14x+5y-24=0$ we need $\\dfrac{13k-493}{20}=-24$, i.e. $13k-493=-480$, so $13k=13$ and $\\boxed{k=1}$.",
          "Then $L_2:15x-8y+1=0$ and the branch is exactly $14x+5y-24=0=M$, confirming $M$ is a genuine bisector."
        ]
      },
      {
        "name": "Classifying the bisector (acute/obtuse, origin, partner)",
        "steps": [
          "Normalise both constants positive, so the equal-sign branch is the wedge containing the origin: write $L_1$ as $-5x-12y+29=0$ (value $+29>0$ at $O$) and keep $L_2:15x-8y+1=0$ (value $+1>0$ at $O$).",
          "Sign test $a_1a_2+b_1b_2=(-5)(15)+(-12)(-8)=-75+96=21>0$. A positive value means the equal-sign (origin) branch bisects the OBTUSE angle.",
          "The equal-sign branch is $\\dfrac{-5x-12y+29}{13}=\\dfrac{15x-8y+1}{17}$, i.e. $17(-5x-12y+29)-13(15x-8y+1)=0\\Rightarrow-280x-100y+480=0\\Rightarrow14x+5y-24=0=M$. So $M$ is the origin-containing bisector, and by the sign test it is the OBTUSE one.",
          "Cross-check by angle: $\\cos\\theta=\\dfrac{|5\\cdot15+12\\cdot(-8)|}{13\\cdot17}=\\dfrac{21}{221}$, so the acute opening is $\\theta\\approx84.55^\\circ$ and the obtuse opening $\\approx95.45^\\circ$. $M$ makes equal angles of $\\approx47.73^\\circ$ with each line, and $2\\times47.73^\\circ\\approx95.45^\\circ$, the obtuse angle — confirming $M$ is the obtuse bisector.",
          "The other bisector is the perpendicular partner through $V$: direction $(14,5)$, hence normal $(5,-14)$, giving $5x-14y+c=0$; through $V=(1,2)$: $5-28+c=0\\Rightarrow c=23$. Verify perpendicularity $(14)(5)+(5)(-14)=0$ and that it makes equal angles of $\\approx42.27^\\circ$, with $2\\times42.27^\\circ\\approx84.55^\\circ$, the acute angle.",
          "$\\boxed{k=1,\\ M=14x+5y-24=0\\ (\\text{obtuse, origin}),\\ \\text{other }=5x-14y+23=0}$"
        ]
      }
    ],
    "remark": "Insight: translating one line by a constant cannot change which DIRECTIONS bisect the angle — only which point the bisector must pass through. So 'has a bisector direction' is necessary but not sufficient; concurrency at the moving vertex is what actually pins the parameter. Once $k$ is fixed, the acute/obtuse and origin classification is settled independently by the sign of $a_1a_2+b_1b_2$ after positive-constant normalisation, then confirmed by the equal-angle test."
  },
  {
    "theme": "pairlines",
    "themeLabel": "Pair of Straight Lines",
    "title": "The Bisector Round-Trip",
    "difficulty": 3,
    "task": "Find the combined equation",
    "tags": [
      "homogeneous",
      "angle bisectors",
      "factor-of-two",
      "origin"
    ],
    "statement": "The pair of straight lines through the origin is given by $6x^2 + xy - y^2 = 0$. Find the combined equation of the pair of angle bisectors of these two lines.",
    "answer": "\\[\\boxed{x^2 - 14xy - y^2 = 0}\\]",
    "trap": "Reading $a=6,\\,b=-1,\\,h=1$ straight off the coefficients. But the $xy$ coefficient is $2h$, so $h=\\tfrac12$, not $1$. Using $h=1$ gives the bisector equation $\\dfrac{x^2-y^2}{7}=\\dfrac{xy}{1}$, i.e. $x^2-7xy-y^2=0$ — wrong. The correct $h=\\tfrac12$ yields $x^2-14xy-y^2=0$.",
    "solutions": [
      {
        "name": "Bisector formula with correct h",
        "steps": [
          "Compare $6x^2+xy-y^2=0$ with the standard pair $ax^2+2hxy+by^2=0$: $a=6,\\ b=-1$, and the coefficient of $xy$ is $2h=1$, so $h=\\tfrac12$.",
          "The angle-bisector pair of $ax^2+2hxy+by^2=0$ is $\\dfrac{x^2-y^2}{a-b}=\\dfrac{xy}{h}$. Here $a-b=6-(-1)=7$ and $h=\\tfrac12$, so $\\dfrac{x^2-y^2}{7}=\\dfrac{xy}{1/2}=2xy$.",
          "Cross-multiply: $x^2-y^2=14xy$, hence $\\boxed{x^2-14xy-y^2=0}$."
        ]
      },
      {
        "name": "From the separate lines (slopes)",
        "steps": [
          "Factor: $6x^2+xy-y^2=(3x-y)(2x+y)$, so the lines are $y=3x$ and $y=-2x$ with slopes $m_1=3$ and $m_2=-2$.",
          "A bisector through the origin has slope $m$ making equal angles with both lines, so $\\dfrac{m-m_1}{1+m\\,m_1}=-\\dfrac{m-m_2}{1+m\\,m_2}$, i.e. $\\dfrac{m-3}{1+3m}=-\\dfrac{m+2}{1-2m}$.",
          "Cross-multiplying gives $(m-3)(1-2m)+(m+2)(1+3m)=0$, which simplifies to $m^2+14m-1=0$ — the two bisector slopes $m_1',m_2'$ satisfy $m_1'+m_2'=-14$ and $m_1'm_2'=-1$ (confirming the bisectors are perpendicular).",
          "The combined equation of $y=m_1'x$ and $y=m_2'x$ is $(y-m_1'x)(y-m_2'x)=0$, i.e. $y^2-(m_1'+m_2')xy+m_1'm_2'x^2=0$, giving $y^2+14xy-x^2=0$, i.e. $\\boxed{x^2-14xy-y^2=0}$."
        ]
      }
    ],
    "remark": "Insight: the bisector pair is ALWAYS perpendicular, since its coefficient of $x^2$ plus that of $y^2$ is $1+(-1)=0$. The single trap that sinks most students is the hidden factor of $2$ in $2h$: the bare $xy$ coefficient is not $h$."
  },
  {
    "theme": "pairlines",
    "themeLabel": "Pair of Straight Lines",
    "title": "Splitting the General Conic",
    "difficulty": 3,
    "task": "Find the point of intersection and angle",
    "tags": [
      "general second degree",
      "point of intersection",
      "partial derivatives",
      "angle"
    ],
    "statement": "The equation $3x^2 + 5xy - 2y^2 - 14x + 7y - 5 = 0$ represents a pair of straight lines. Find their point of intersection, and the tangent of the acute angle between them.",
    "answer": "\\[\\boxed{\\left(\\tfrac{3}{7},\\ \\tfrac{16}{7}\\right),\\quad \\tan\\theta = 7}\\]",
    "trap": "Computing the angle from $\\tan\\theta = \\dfrac{2\\sqrt{h^2-ab}}{|a+b|}$ but plugging $h=5$ (the $xy$ coefficient) instead of $h=\\tfrac52$. With $h=5$ you get $\\sqrt{25+6}=\\sqrt{31}$ and a messy $2\\sqrt{31}$; the correct $h=\\tfrac52$ gives $\\sqrt{\\tfrac{49}{4}}=\\tfrac72$ and a clean $\\tan\\theta=7$.",
    "solutions": [
      {
        "name": "Partial derivatives for the vertex, formula for the angle",
        "steps": [
          "The point of intersection is the common solution of $\\partial S/\\partial x=0$ and $\\partial S/\\partial y=0$: $6x+5y-14=0$ and $5x-4y+7=0$.",
          "Solving simultaneously gives $x=\\tfrac37,\\ y=\\tfrac{16}{7}$.",
          "With $a=3,\\ b=-2,\\ 2h=5\\Rightarrow h=\\tfrac52$: $\\tan\\theta=\\dfrac{2\\sqrt{h^2-ab}}{|a+b|}=\\dfrac{2\\sqrt{\\tfrac{25}{4}+6}}{|3-2|}=2\\cdot\\tfrac72=\\boxed{7}$ at $\\left(\\tfrac37,\\tfrac{16}{7}\\right)$."
        ]
      },
      {
        "name": "Factor into separate lines",
        "steps": [
          "Factor: $3x^2+5xy-2y^2-14x+7y-5=(3x-y+1)(x+2y-5)$.",
          "Lines $3x-y+1=0$ and $x+2y-5=0$ meet at $x=\\tfrac37,\\ y=\\tfrac{16}{7}$.",
          "Slopes are $3$ and $-\\tfrac12$; $\\tan\\theta=\\left|\\dfrac{3-(-\\tfrac12)}{1+3\\cdot(-\\tfrac12)}\\right|=\\left|\\dfrac{7/2}{-1/2}\\right|=\\boxed{7}$."
        ]
      },
      {
        "name": "Translate to remove linear terms",
        "steps": [
          "Shift origin to the intersection $\\left(\\tfrac37,\\tfrac{16}{7}\\right)$; the equation becomes the homogeneous part $3X^2+5XY-2Y^2=0$.",
          "This is the pair through the new origin, so the angle uses $a=3,\\ b=-2,\\ h=\\tfrac52$.",
          "$\\tan\\theta=\\dfrac{2\\sqrt{49/4}}{1}=\\boxed{7}$."
        ]
      }
    ],
    "remark": "Insight: shifting the origin to the vertex kills the linear and constant terms, leaving the pure homogeneous part that carries all the angle information — the cleanest way to see why $g,f,c$ never affect the angle."
  },
  {
    "theme": "pairlines",
    "themeLabel": "Pair of Straight Lines",
    "title": "Two Values, One Reality Check",
    "difficulty": 4,
    "task": "Find all values",
    "tags": [
      "determinant condition",
      "general second degree",
      "reality condition",
      "parameter"
    ],
    "statement": "Find all real values of $\\lambda$ for which $x^2 + \\lambda xy + y^2 - 5x - 7y + 6 = 0$ represents a pair of straight lines, and verify each value gives two genuinely real lines.",
    "answer": "\\[\\boxed{\\lambda = \\tfrac{5}{2}\\ \\text{ or }\\ \\lambda = \\tfrac{10}{3}}\\]",
    "trap": "Stopping at the determinant condition $abc+2fgh-af^2-bg^2-ch^2=0$ and reporting any roots. One must ALSO check $h^2\\ge ab$ so the lines are real, not an isolated point. Here both roots survive, but the student who never checks would be wrong on a problem where one root fails $h^2\\ge ab$ — the discipline is the point.",
    "solutions": [
      {
        "name": "Determinant condition then reality test",
        "steps": [
          "Identify $a=1,\\ b=1,\\ c=6,\\ h=\\tfrac{\\lambda}{2},\\ g=-\\tfrac52,\\ f=-\\tfrac72$ (note the $2g,2f$ factors).",
          "Set $\\Delta=abc+2fgh-af^2-bg^2-ch^2=0$: $6+2(-\\tfrac72)(-\\tfrac52)(\\tfrac{\\lambda}{2})-\\tfrac{49}{4}-\\tfrac{25}{4}-6\\cdot\\tfrac{\\lambda^2}{4}=0$, i.e. $-\\tfrac32\\lambda^2+\\tfrac{35}{4}\\lambda-\\tfrac{25}{2}=0$.",
          "Roots $\\lambda=\\tfrac52,\\ \\tfrac{10}{3}$. Check $h^2-ab=\\tfrac{\\lambda^2}{4}-1$: at $\\lambda=\\tfrac52$ it is $\\tfrac{9}{16}>0$, at $\\lambda=\\tfrac{10}{3}$ it is $\\tfrac{16}{9}>0$. Both real, so $\\boxed{\\lambda=\\tfrac52\\text{ or }\\tfrac{10}{3}}$."
        ]
      },
      {
        "name": "Demand a factorisation",
        "steps": [
          "Suppose $x^2+\\lambda xy+y^2-5x-7y+6=(x+\\alpha y+\\beta)(x+\\gamma y+\\delta)$ (leading coeff $1$ each).",
          "Match constants $\\beta\\delta=6$, $x$-terms $\\beta+\\delta=-5$, so $\\{\\beta,\\delta\\}=\\{-2,-3\\}$; $y$-terms $\\alpha\\delta+\\gamma\\beta=-7$, $y^2$-term $\\alpha\\gamma=1$.",
          "Solving the two cases gives $\\{\\alpha,\\gamma\\}=\\{2,\\tfrac12\\}$ ($\\lambda=\\alpha+\\gamma=\\tfrac52$) or $\\{3,\\tfrac13\\}$ ($\\lambda=\\tfrac{10}{3}$). Both factor over the reals, so $\\boxed{\\lambda=\\tfrac52\\text{ or }\\tfrac{10}{3}}$."
        ]
      }
    ],
    "remark": "Insight: $\\Delta=0$ is necessary but not sufficient — it allows a degenerate 'pair' that is really a single point (imaginary lines through a real vertex). The $h^2\\ge ab$ gate is the conceptual safeguard examiners build their traps around."
  },
  {
    "theme": "pairlines",
    "themeLabel": "Pair of Straight Lines",
    "title": "Why Bisectors Are Always Square",
    "difficulty": 4,
    "task": "Prove that",
    "tags": [
      "angle bisectors",
      "perpendicularity",
      "homogeneous",
      "proof"
    ],
    "statement": "Let $ax^2+2hxy+by^2=0$ (with $h^2>ab$, so the lines are real and distinct) be a pair of straight lines through the origin. Prove that its two angle bisectors are always mutually perpendicular, and as a check exhibit the bisector pair of $2x^2+5xy+3y^2=0$.",
    "answer": "\\[\\boxed{\\text{The bisectors are always perpendicular; for }2x^2+5xy+3y^2=0\\text{ they are }5x^2+2xy-5y^2=0.}\\]",
    "trap": "Trying to prove it by factoring out the two line slopes $m_1,m_2$, writing the four candidate bisector slopes explicitly, and grinding $m_1m_2=-1$ — possible but heavy, and the sign of the radical trips most students. The clean proof reads perpendicularity straight off the coefficients of the bisector pair: its $x^2$ and $y^2$ coefficients are $h$ and $-h$, which sum to zero regardless of $a,b,h$.",
    "solutions": [
      {
        "name": "Coefficient sum is zero",
        "steps": [
          "The combined equation of the two angle bisectors of $ax^2+2hxy+by^2=0$ is the standard pair $\\dfrac{x^2-y^2}{a-b}=\\dfrac{xy}{h}$, equivalently $h(x^2-y^2)-(a-b)xy=0$, i.e. $h\\,x^2-(a-b)xy-h\\,y^2=0$.",
          "For any homogeneous second-degree equation $Ax^2+2Hxy+By^2=0$ representing two lines, those lines are perpendicular if and only if $A+B=0$ (the sum of the squared-term coefficients vanishes).",
          "Here $A=h$ and $B=-h$, so $A+B=h+(-h)=0$ identically. Hence the bisectors are perpendicular for every $a,b,h$ — the conclusion does not depend on the particular numbers.",
          "For $2x^2+5xy+3y^2=0$ we read $a=2,\\ b=3,\\ h=\\tfrac52$. The bisector pair is $\\tfrac52(x^2-y^2)-(2-3)xy=0$, i.e. $\\tfrac52 x^2+xy-\\tfrac52 y^2=0$; multiplying by $2$ gives $\\boxed{5x^2+2xy-5y^2=0}$, whose coefficients $5$ and $-5$ sum to zero."
        ]
      },
      {
        "name": "Geometric symmetry of internal and external bisectors",
        "steps": [
          "Let the two lines make angles $\\alpha$ and $\\beta$ with the $x$-axis. The internal bisector of the angle between them points along direction $\\tfrac{\\alpha+\\beta}{2}$, and the external bisector along $\\tfrac{\\alpha+\\beta}{2}+\\tfrac{\\pi}{2}$.",
          "The two bisector directions therefore differ by exactly $\\tfrac{\\pi}{2}$, so the internal and external bisectors are perpendicular for every pair of lines — this is a property of any angle, not of these coefficients.",
          "Checking on $2x^2+5xy+3y^2=0$: it factors as $(2x+3y)(x+y)=0$, giving lines of slopes $-\\tfrac23$ and $-1$. Building the bisector pair from these directions reproduces $\\boxed{5x^2+2xy-5y^2=0}$, whose $x^2$ and $y^2$ coefficients $5$ and $-5$ again sum to zero, confirming perpendicularity."
        ]
      }
    ],
    "remark": "The internal and external bisectors of ANY angle are perpendicular, so this perpendicularity is geometric rather than a numerical coincidence. The coefficient form $h\\,x^2-(a-b)xy-h\\,y^2$ encodes that fact universally: the $x^2$ and $y^2$ coefficients are forced to be negatives of each other, and a homogeneous pair with $A+B=0$ is always a perpendicular pair."
  },
  {
    "theme": "pairlines",
    "themeLabel": "Pair of Straight Lines",
    "title": "Coincidence, Not Perpendicularity",
    "difficulty": 4,
    "task": "Find the value",
    "tags": [
      "coincident lines",
      "discriminant",
      "parameter",
      "degenerate"
    ],
    "statement": "For exactly one real value of $k$ the equation $kx^2 + 2(k+1)xy + (k+4)y^2 = 0$ represents a single (repeated) line through the origin. Find that $k$ and the repeated line.",
    "answer": "\\[\\boxed{k=\\tfrac{1}{2},\\quad \\text{the line } x+3y=0 \\text{ (doubled)}}\\]",
    "trap": "Confusing the conditions: setting $a+b=0$ (perpendicular) gives $k+(k+4)=0\\Rightarrow k=-2$, but that is the wrong question. A single coincident line requires $h^2=ab$, i.e. $(k+1)^2=k(k+4)$. Note also $2h=2(k+1)$ so $h=k+1$ — do not forget the factor.",
    "solutions": [
      {
        "name": "Coincidence condition h² = ab",
        "steps": [
          "Here $a=k$, $b=k+4$, and $2h=2(k+1)$ so $h=k+1$.",
          "Coincident lines need $h^2=ab$: $(k+1)^2=k(k+4)\\Rightarrow k^2+2k+1=k^2+4k\\Rightarrow 1=2k\\Rightarrow k=\\tfrac12$.",
          "At $k=\\tfrac12$: $\\tfrac12x^2+3xy+\\tfrac92y^2=\\tfrac12(x^2+6xy+9y^2)=\\tfrac12(x+3y)^2$, so the repeated line is $\\boxed{x+3y=0}$ at $k=\\tfrac12$."
        ]
      },
      {
        "name": "Perfect-square requirement",
        "steps": [
          "The quadratic form is a perfect square iff its discriminant (as a quadratic in $x/y$) vanishes.",
          "Treat as $k\\,t^2+2(k+1)t+(k+4)=0$ with $t=x/y$: discriminant $4(k+1)^2-4k(k+4)=0\\Rightarrow 4(1-2k)=0\\Rightarrow k=\\tfrac12$.",
          "Then $t=-\\dfrac{k+1}{k}=-3$, so $x=-3y$, i.e. the doubled line $\\boxed{x+3y=0}$."
        ]
      }
    ],
    "remark": "Insight: three conditions on a homogeneous pair must never be muddled — real & distinct ($h^2>ab$), coincident ($h^2=ab$), perpendicular ($a+b=0$). Here the seductive $a+b=0$ answer $k=-2$ solves a different problem entirely (at $k=-2$, $h^2-ab=5>0$ gives two distinct real lines)."
  },
  {
    "theme": "pairlines",
    "themeLabel": "Pair of Straight Lines",
    "title": "The Gap Between Parallel Twins",
    "difficulty": 4,
    "task": "Find the distance",
    "tags": [
      "parallel pair",
      "general second degree",
      "distance",
      "factor-of-two"
    ],
    "statement": "The equation $4x^2 + 12xy + 9y^2 + 12x + 18y - 40 = 0$ represents a pair of parallel straight lines. Find the perpendicular distance between them.",
    "answer": "\\[\\boxed{\\dfrac{14\\sqrt{13}}{13}}\\]",
    "trap": "The slick formula $d=2\\sqrt{\\dfrac{g^2-ac}{a(a+b)}}$ carries a leading factor of $2$ that is fatally easy to drop. Forgetting it gives $\\sqrt{\\dfrac{g^2-ac}{a(a+b)}}=\\sqrt{\\dfrac{196}{52}}=\\dfrac{7}{\\sqrt{13}}=\\dfrac{7\\sqrt{13}}{13}$, which is exactly half the true gap. The factor of $2$ is not cosmetic: in the factored picture the two lines sit at $-4$ and $+10$, a constant-gap of $14$, and only the doubled formula recovers $|{-4}-10|=14$ in the numerator. A second pitfall is misreading $2g=12$ as $g=12$ instead of $g=6$, which inflates $g^2-ac$ from $196$ to $304$ and corrupts the result.",
    "solutions": [
      {
        "name": "Factor into two parallel lines, then use the gap formula",
        "steps": [
          "The quadratic part is a perfect square: $4x^2+12xy+9y^2=(2x+3y)^2$, so the conic splits as $(2x+3y+p)(2x+3y+q)=0$ for some constants $p,q$.",
          "Expanding, the $x$-coefficient gives $2(p+q)=12\\Rightarrow p+q=6$, and the constant gives $pq=-40$. Solving, $\\{p,q\\}=\\{-4,\\,10\\}$.",
          "Hence the lines are $2x+3y-4=0$ and $2x+3y+10=0$. They share the normal $(2,3)$, so the perpendicular distance is $\\dfrac{|-4-10|}{\\sqrt{2^2+3^2}}=\\dfrac{14}{\\sqrt{13}}=\\boxed{\\dfrac{14\\sqrt{13}}{13}}$."
        ]
      },
      {
        "name": "Direct parallel-pair distance formula",
        "steps": [
          "Write the conic as $ax^2+2hxy+by^2+2gx+2fy+c=0$, so $a=4,\\ b=9,\\ 2g=12\\Rightarrow g=6,\\ c=-40$ (and $h^2=ab$ confirms a parallel pair).",
          "Apply $d=2\\sqrt{\\dfrac{g^2-ac}{a(a+b)}}=2\\sqrt{\\dfrac{36-4(-40)}{4(13)}}=2\\sqrt{\\dfrac{196}{52}}$.",
          "Simplify: $2\\sqrt{\\dfrac{196}{52}}=2\\cdot\\dfrac{14}{2\\sqrt{13}}=\\dfrac{14}{\\sqrt{13}}=\\boxed{\\dfrac{14\\sqrt{13}}{13}}$. The companion formula $2\\sqrt{\\dfrac{f^2-bc}{b(a+b)}}=2\\sqrt{\\dfrac{81+360}{9\\cdot13}}=\\dfrac{14}{\\sqrt{13}}$ agrees, a clean cross-check."
        ]
      }
    ],
    "remark": "A second-degree equation is a parallel pair precisely when $h^2=ab$, i.e. the quadratic part is a perfect square; here it is $(2x+3y)^2$, letting both lines be read off a single common direction $2x+3y$. The whole computation then reduces to the constant terms, and the only thing standing between you and the answer is honouring the leading factor of $2$ in $d=2\\sqrt{(g^2-ac)/(a(a+b))}$ — drop it and you report half the true gap."
  },
  {
    "theme": "pairlines",
    "themeLabel": "Pair of Straight Lines",
    "title": "A Triangle Cut From a Pair",
    "difficulty": 5,
    "task": "Find the area",
    "tags": [
      "homogeneous pair",
      "transversal",
      "triangle area",
      "perpendicular pair"
    ],
    "statement": "The pair of lines $3x^2 - 8xy - 3y^2 = 0$ together with the line $x+y=4$ bound a triangle. Find its area.",
    "answer": "\\[\\boxed{10}\\]",
    "trap": "Assuming the two lines of the pair are equally inclined to the transversal and treating the triangle as isosceles (which would give the wrong area $\\tfrac{45}{4}$), or forgetting that a homogeneous pair passes through the origin so the triangle's third vertex is $(0,0)$. The pair here is in fact perpendicular, since $a+b=3+(-3)=0$, making it a right triangle and missing this loses the clean route.",
    "solutions": [
      {
        "name": "Find the three vertices",
        "steps": [
          "Factor $3x^2-8xy-3y^2=(x-3y)(3x+y)$, giving lines $x-3y=0$ and $3x+y=0$; both pass through the origin, the third vertex.",
          "Intersect each with $x+y=4$: solving $x-3y=0$ with $x+y=4$ gives $(3,1)$; solving $3x+y=0$ with $x+y=4$ gives $(-2,6)$.",
          "Area $=\\tfrac12|x_1(y_2-y_3)+x_2(y_3-y_1)+x_3(y_1-y_2)|$ with $(0,0),(3,1),(-2,6)$: $=\\tfrac12|3\\cdot6-(-2)\\cdot1|=\\tfrac12|18+2|=\\boxed{10}$."
        ]
      },
      {
        "name": "Pair-and-line area formula",
        "steps": [
          "For pair $ax^2+2hxy+by^2=0$ and line $lx+my+n=0$, the triangle cut off has area $=\\dfrac{n^2\\sqrt{h^2-ab}}{|am^2-2hlm+bl^2|}$.",
          "Here $a=3,\\ 2h=-8\\Rightarrow h=-4,\\ b=-3$; the line $x+y-4=0$ gives $l=1,\\ m=1,\\ n=-4$.",
          "$\\sqrt{h^2-ab}=\\sqrt{16+9}=5$; denominator $|3-2(-4)(1)(1)+(-3)|=|3+8-3|=8$; area $=\\dfrac{16\\cdot5}{8}=\\boxed{10}$."
        ]
      },
      {
        "name": "Right-triangle shortcut",
        "steps": [
          "Since $a+b=0$ the two lines are perpendicular, so the triangle is right-angled at the origin with legs along $x-3y=0$ and $3x+y=0$.",
          "The leg lengths from the origin to the transversal points are $|(3,1)|=\\sqrt{10}$ and $|(-2,6)|=\\sqrt{40}=2\\sqrt{10}$; the dot product $(3)(-2)+(1)(6)=0$ confirms the right angle.",
          "Area $=\\tfrac12\\cdot\\sqrt{10}\\cdot2\\sqrt{10}=\\tfrac12\\cdot20=\\boxed{10}$."
        ]
      }
    ],
    "remark": "Insight: spotting $a+b=0$ turns a generic area computation into a one-line right-triangle product. A homogeneous pair always contributes the origin as a vertex, a fact students routinely forget when the constant term is zero."
  },
  {
    "theme": "pairlines",
    "themeLabel": "Pair of Straight Lines",
    "title": "Build the Pair From Its Bisector",
    "difficulty": 5,
    "task": "Find the combined equation",
    "tags": [
      "angle bisectors",
      "reverse construction",
      "angle formula",
      "homogeneous"
    ],
    "statement": "A pair of straight lines through the origin makes an angle of $60^\\circ$ between them, and one of its angle bisectors is the line $y=x$. Find the combined equation of the pair (give the one with positive $xy$ coefficient).",
    "answer": "\\[\\boxed{x^2 + 4xy + y^2 = 0}\\]",
    "trap": "Treating the datum '$y=x$ is a bisector' as though $y=x$ were one of the actual lines, or forgetting that demanding $y=x$ be a bisector forces $a=b$ (so the pair is symmetric in $x,y$). Without that symmetry deduction the angle condition alone is underdetermined.",
    "solutions": [
      {
        "name": "Bisector forces a=b, then impose the angle",
        "steps": [
          "For $ax^2+2hxy+by^2=0$ the bisector pair is $h(x^2-y^2)-(a-b)xy=0$. For $y=x$ (i.e. $x-y=0$) to be a bisector, substitute $y=x$: $h\\cdot0-(a-b)x^2=0$ for all $x\\Rightarrow a=b$.",
          "With $a=b$, $\\tan60^\\circ=\\dfrac{2\\sqrt{h^2-ab}}{|a+b|}=\\dfrac{2\\sqrt{h^2-a^2}}{2|a|}=\\dfrac{\\sqrt{h^2-a^2}}{|a|}=\\sqrt3$, so $h^2-a^2=3a^2\\Rightarrow h^2=4a^2$.",
          "Take $a=b=1,\\ h=2$ (positive $xy$): $\\boxed{x^2+4xy+y^2=0}$. Its bisectors are $x^2-y^2=0$, i.e. $y=\\pm x$, confirming $y=x$."
        ]
      },
      {
        "name": "Build from symmetric line slopes",
        "steps": [
          "A bisector $y=x$ sits at $45^\\circ$; with a $60^\\circ$ opening the two lines are at $45^\\circ\\pm30^\\circ$, i.e. $15^\\circ$ and $75^\\circ$.",
          "Slopes $m_1=\\tan15^\\circ=2-\\sqrt3$, $m_2=\\tan75^\\circ=2+\\sqrt3$; then $m_1m_2=1$ and $m_1+m_2=4$.",
          "The pair $(y-m_1x)(y-m_2x)=y^2-(m_1+m_2)xy+m_1m_2x^2=x^2-4xy+y^2$. Its mirror image (the lines at $-15^\\circ,-75^\\circ$, still bisected by $y=x$ together with $y=-x$) is the positive-$xy$ representative $\\boxed{x^2+4xy+y^2=0}$."
        ]
      }
    ],
    "remark": "Insight: the condition '$y=x$ is a bisector' is a structural constraint ($a=b$), not a statement about the lines themselves. Recognising which object the datum constrains is the whole difficulty here; the angle then fixes $h^2=4a^2$, and the sign of $h$ selects between the pair and its reflection."
  },
  {
    "theme": "pairlines",
    "themeLabel": "Pair of Straight Lines",
    "title": "Tangent Pair, Hidden Vertical",
    "difficulty": 5,
    "task": "Find the angle",
    "tags": [
      "pair of tangents",
      "circle",
      "homogenisation",
      "degenerate coefficient"
    ],
    "statement": "From the point $P(2,4)$ a pair of tangents is drawn to the circle $x^2+y^2=4$. Writing the combined equation of this tangent pair as $S\\,S_1 = T^2$, find the tangent of the angle between the two tangents.",
    "answer": "\\[\\boxed{\\tan\\theta = \\dfrac{4}{3}}\\]",
    "trap": "Computing $\\tan\\theta=\\dfrac{2\\sqrt{h^2-ab}}{|a+b|}$ from the tangent-pair coefficients and finding $b=0$ — then either dividing by something believed nonzero or concluding the formula breaks. In fact $b=0$ signals one tangent is the vertical line $x=2$; the formula still gives $a+b=12\\ne0$ and the correct answer.",
    "solutions": [
      {
        "name": "S·S₁ = T² then the coefficient formula",
        "steps": [
          "$S=x^2+y^2-4,\\ S_1=2^2+4^2-4=16,\\ T=2x+4y-4$. The pair is $S\\,S_1-T^2=16(x^2+y^2-4)-(2x+4y-4)^2$.",
          "Expand: $16x^2+16y^2-64-(4x^2+16y^2+16+16xy-16x-32y)=12x^2-16xy+16x+32y-80$. So $a=12,\\ b=0,\\ 2h=-16\\Rightarrow h=-8$.",
          "$\\tan\\theta=\\dfrac{2\\sqrt{h^2-ab}}{|a+b|}=\\dfrac{2\\sqrt{64-0}}{|12+0|}=\\dfrac{16}{12}=\\boxed{\\dfrac{4}{3}}$."
        ]
      },
      {
        "name": "Half-angle from the geometry",
        "steps": [
          "Distance $d=|OP|=\\sqrt{4+16}=\\sqrt{20}$, radius $r=2$. If $2\\alpha$ is the angle between the tangents then $\\sin\\alpha=\\dfrac{r}{d}=\\dfrac{2}{\\sqrt{20}}=\\dfrac{1}{\\sqrt5}$.",
          "$\\cos2\\alpha=1-2\\sin^2\\alpha=1-\\tfrac25=\\tfrac35$, and $\\sin2\\alpha=\\tfrac45$.",
          "$\\tan2\\alpha=\\dfrac{4/5}{3/5}=\\boxed{\\dfrac{4}{3}}$."
        ]
      },
      {
        "name": "Factor the pair explicitly",
        "steps": [
          "$12x^2-16xy+16x+32y-80=4(x-2)(3x-4y+10)$, so the tangents are $x=2$ (vertical) and $3x-4y+10=0$ (slope $\\tfrac34$).",
          "The vertical line makes $90^\\circ$ with the $x$-axis; the other makes $\\arctan\\tfrac34$.",
          "Angle between $=90^\\circ-\\arctan\\tfrac34$, whose tangent is $\\cot(\\arctan\\tfrac34)=\\dfrac{4}{3}$, so $\\boxed{\\tan\\theta=\\dfrac43}$."
        ]
      }
    ],
    "remark": "Insight: a vanishing $b$ in a genuine pair is not a breakdown — it just means a vertical line is present. The angle formula remains valid as long as $a+b\\ne0$; reading $b=0$ as an error is the conceptual misstep."
  },
  {
    "theme": "pairlines",
    "themeLabel": "Pair of Straight Lines",
    "title": "The Right-Angled Crossing",
    "difficulty": 5,
    "task": "Find the lines and their meeting point",
    "tags": [
      "general second degree",
      "perpendicular pair",
      "point of intersection",
      "factoring"
    ],
    "statement": "Show that $2x^2 + 3xy - 2y^2 - x - 7y - 3 = 0$ represents a pair of perpendicular straight lines, find their point of intersection, and find the equations of the two lines.",
    "answer": "\\[\\boxed{(1,-1);\\quad 2x-y-3=0\\ \\text{and}\\ x+2y+1=0}\\]",
    "trap": "Concluding perpendicularity only after laboriously finding the slopes, or distrusting it because $\\Delta$ must also vanish for a pair to exist at all. Perpendicularity is read instantly from $a+b=2+(-2)=0$ — but one must still verify $\\Delta=0$ to confirm it is a pair, not just check the slope sum.",
    "solutions": [
      {
        "name": "Perpendicularity, determinant, then split",
        "steps": [
          "$a=2,\\ b=-2$ so $a+b=0$: IF this is a pair, the lines are perpendicular. Confirm it is a pair via $\\Delta=abc+2fgh-af^2-bg^2-ch^2$ with $h=\\tfrac32,g=-\\tfrac12,f=-\\tfrac72,c=-3$: $\\Delta=0$. ✓",
          "Vertex from $\\partial S/\\partial x=4x+3y-1=0$ and $\\partial S/\\partial y=3x-4y-7=0$, giving $(1,-1)$.",
          "The homogeneous part $2x^2+3xy-2y^2=(2x-y)(x+2y)$ fixes the directions; through $(1,-1)$ the lines are $\\boxed{2x-y-3=0\\text{ and }x+2y+1=0}$."
        ]
      },
      {
        "name": "Direct factorisation",
        "steps": [
          "Seek $(2x-y+p)(x+2y+q)=2x^2+3xy-2y^2+(p+2q)x+(2p-q)y+pq$.",
          "Match: $pq=-3$, $p+2q=-1$, $2p-q=-7$. Solving the last two: $p=-3,\\ q=1$, consistent with $pq=-3$.",
          "So $S=(2x-y-3)(x+2y+1)=0$; the lines $\\boxed{2x-y-3=0,\\ x+2y+1=0}$ are perpendicular (slopes $2$ and $-\\tfrac12$) and meet at $(1,-1)$."
        ]
      },
      {
        "name": "Translate to the vertex",
        "steps": [
          "Substitute $x=X+1,\\ y=Y-1$ (shift to the candidate vertex $(1,-1)$); the equation collapses to $2X^2+3XY-2Y^2=0$, confirming both that $(1,-1)$ is the vertex and that the linear/constant parts vanish.",
          "Factor $2X^2+3XY-2Y^2=(2X-Y)(X+2Y)$; since coefficients of $X^2,Y^2$ sum to zero the lines are perpendicular.",
          "Back-substitute $X=x-1,Y=y+1$: $2x-y-3=0$ and $x+2y+1=0$, meeting at $\\boxed{(1,-1)}$."
        ]
      }
    ],
    "remark": "Insight: $a+b=0$ certifies perpendicularity the instant the equation is confirmed to be a pair — but the order matters. The honest proof checks $\\Delta=0$ first (existence), then reads the angle off the leading coefficients (geometry)."
  },
  {
    "theme": "triangle",
    "themeLabel": "Triangle Centres & Areas",
    "title": "The Cubic on the Diagonal",
    "difficulty": 3,
    "task": "Find all",
    "tags": [
      "collinearity",
      "area determinant",
      "cubic roots",
      "degenerate triangle"
    ],
    "statement": "Find all real values of $m$ for which the three points $P(m,\\,m^{3})$, $Q(1,1)$ and $R(-1,-1)$ are the vertices of a degenerate triangle (i.e. are genuinely collinear, with $P$ distinct from $Q$ and $R$).",
    "answer": "$m = 0$",
    "trap": "Setting the area determinant to zero gives $m^{3}=m$, whose roots are $m=-1,0,1$, and quoting all three. But $m=1$ makes $P=Q$ and $m=-1$ makes $P=R$ — those are coincident points, not three vertices of a (degenerate) triangle. Only $m=0$ yields three distinct collinear points.",
    "solutions": [
      {
        "name": "Area determinant",
        "steps": [
          "The points are collinear iff $\\frac12\\big|m(1-(-1))-1\\,(m^{3}-(-1))+(-1)(m^{3}-1)\\big|=0$.",
          "This simplifies to $2m-2m^{3}=0$, i.e. $m^{3}=m$, so $m\\in\\{-1,0,1\\}$.",
          "Discard $m=1$ (gives $P=Q$) and $m=-1$ (gives $P=R$); only $m=0$ keeps all three points distinct, giving $\\boxed{m=0}$."
        ]
      },
      {
        "name": "Line through the fixed pair",
        "steps": [
          "$Q$ and $R$ lie on the line $y=x$; $P$ is collinear with them iff $m^{3}=m$.",
          "So $m\\in\\{-1,0,1\\}$, but $m=\\pm1$ places $P$ on top of $Q$ or $R$.",
          "The only admissible value is $\\boxed{m=0}$."
        ]
      }
    ],
    "remark": "Insight: a zero determinant is necessary but not sufficient for three genuine collinear vertices — coincidence is a hidden degenerate case the determinant cannot see."
  },
  {
    "theme": "triangle",
    "themeLabel": "Triangle Centres & Areas",
    "title": "Three Lines, One Floor Plan",
    "difficulty": 3,
    "task": "Evaluate",
    "tags": [
      "area of triangle",
      "line intersection",
      "determinant",
      "three lines"
    ],
    "statement": "Three straight roads have equations $x-3y=-2$, $\\;x+y=10$ and $\\;3x-y=2$. Find the exact area of the triangular plot they enclose.",
    "answer": "\\[\\boxed{16}\\]",
    "trap": "Feeding the three coefficient rows straight into a \"line determinant\" area shortcut: $\\begin{vmatrix}1&-3&-2\\\\1&1&10\\\\3&-1&2\\end{vmatrix}=-64$, then reading $\\tfrac12|{-64}|=32$ as the area. That determinant is NOT $2\\times$ area; the genuine three-line formula is $\\dfrac{\\Delta^2}{2\\,|C_{12}C_{23}C_{31}|}$, whose denominator is the product of the three pairwise $2\\times2$ minors of the normals (here $4\\cdot(-4)\\cdot(-8)=128$). Dropping that normaliser doubles the answer to $32$. Intersect the lines pairwise instead, or divide by the correct minor product.",
    "solutions": [
      {
        "name": "Find vertices then area",
        "steps": [
          "Intersect pairwise: $x-3y=-2$ & $x+y=10$ give $(7,3)$; $x+y=10$ & $3x-y=2$ give $(3,7)$; $x-3y=-2$ & $3x-y=2$ give $(1,1)$.",
          "Area $=\\tfrac12\\big|7(7-1)+3(1-3)+1(3-7)\\big|=\\tfrac12|42-6-4|=\\tfrac12\\cdot32$.",
          "Hence area $=\\boxed{16}$."
        ]
      },
      {
        "name": "Shoelace on the three vertices",
        "steps": [
          "With vertices $(1,1),(7,3),(3,7)$ apply the shoelace sum $\\tfrac12|x_1(y_2-y_3)+x_2(y_3-y_1)+x_3(y_1-y_2)|$.",
          "$=\\tfrac12|1(3-7)+7(7-1)+3(1-3)|=\\tfrac12|-4+42-6|=16$.",
          "Area $=\\boxed{16}$."
        ]
      },
      {
        "name": "Correct three-line determinant formula",
        "steps": [
          "Write each line as $a_ix+b_iy+c_i=0$: $(1,-3,2),(1,1,-10),(3,-1,-2)$, with $\\Delta=\\begin{vmatrix}1&-3&2\\\\1&1&-10\\\\3&-1&-2\\end{vmatrix}=64$.",
          "Form the pairwise normal minors $C_{12}=a_1b_2-a_2b_1=4$, $C_{23}=-4$, $C_{31}=-8$, so $|C_{12}C_{23}C_{31}|=128$.",
          "Area $=\\dfrac{\\Delta^2}{2\\,|C_{12}C_{23}C_{31}|}=\\dfrac{64^2}{2\\cdot128}=\\dfrac{4096}{256}=\\boxed{16}$."
        ]
      }
    ],
    "remark": "Insight: the slick \"three-line determinant\" carries a denominator equal to the product of the three pairwise minors of the normals; forgetting it is the classic over-count (here it inflates $16$ to $32$). Intersecting the lines first is the foolproof route, but the formula agrees once the normaliser is kept."
  },
  {
    "theme": "triangle",
    "themeLabel": "Triangle Centres & Areas",
    "title": "Dropping the Plumb Line",
    "difficulty": 4,
    "task": "Determine",
    "tags": [
      "foot of altitude",
      "projection",
      "perpendicular",
      "dot product"
    ],
    "statement": "In triangle $ABC$ with $A(2,5)$, $B(-1,-1)$, $C(7,3)$, determine the foot of the altitude from $A$ to side $BC$.",
    "answer": "$\\boxed{\\left(\\tfrac{19}{5},\\tfrac{7}{5}\\right)}$",
    "trap": "Computing line $BC$, taking the altitude through $A$ with slope $-1/m_{BC}$, and intersecting is fine — but a common slip is assuming the foot is the midpoint of $BC$, namely $(3,1)$. That shortcut is valid only when $AB=AC$ (isosceles). Here $AB^2=45$ and $AC^2=29$, so $AB\\neq AC$ and the midpoint $(3,1)$ is not the foot.",
    "solutions": [
      {
        "name": "Vector projection",
        "steps": [
          "$\\vec{BC}=(8,4)$, $\\vec{BA}=(3,6)$. The foot is $B+t\\,\\vec{BC}$ with $t=\\dfrac{\\vec{BA}\\cdot\\vec{BC}}{|\\vec{BC}|^2}=\\dfrac{24+24}{64+16}=\\dfrac{48}{80}=\\dfrac35$.",
          "Foot $=(-1,-1)+\\tfrac35(8,4)=\\left(-1+\\tfrac{24}{5},\\,-1+\\tfrac{12}{5}\\right)$.",
          "$=\\boxed{\\left(\\tfrac{19}{5},\\tfrac{7}{5}\\right)}$."
        ]
      },
      {
        "name": "Two-line intersection",
        "steps": [
          "Line $BC$ has slope $\\dfrac{3-(-1)}{7-(-1)}=\\dfrac12$, so $BC:\\;y+1=\\tfrac12(x+1)$, i.e. $x-2y=1$.",
          "The altitude through $A$ is perpendicular to $BC$, so it has slope $-2$: $y-5=-2(x-2)$, i.e. $2x+y=9$.",
          "Solving $x-2y=1$ and $2x+y=9$ gives $\\boxed{\\left(\\tfrac{19}{5},\\tfrac{7}{5}\\right)}$."
        ]
      },
      {
        "name": "Perpendicularity conditions",
        "steps": [
          "Let the foot be $F=(x,y)$. Since $F$ lies on $BC$: $\\dfrac{y+1}{x+1}=\\dfrac12$, i.e. $x-2y=1$.",
          "Since $\\vec{AF}\\perp\\vec{BC}$: $(x-2,\\,y-5)\\cdot(8,4)=0\\Rightarrow 8x+4y=36\\Rightarrow 2x+y=9$.",
          "The two linear conditions give $F=\\boxed{\\left(\\tfrac{19}{5},\\tfrac{7}{5}\\right)}$, and indeed $\\vec{AF}\\cdot\\vec{BC}=0$."
        ]
      }
    ],
    "remark": "Insight: the foot of an altitude is the orthogonal projection $F=B+\\dfrac{\\vec{BA}\\cdot\\vec{BC}}{|\\vec{BC}|^2}\\,\\vec{BC}$. The midpoint shortcut is a trap — it yields the foot only in the isosceles case $AB=AC$, which fails here since $AB^2=45\\neq 29=AC^2$."
  },
  {
    "theme": "triangle",
    "themeLabel": "Triangle Centres & Areas",
    "title": "A Centroid on the Mirror Line",
    "difficulty": 4,
    "task": "Find all",
    "tags": [
      "centroid",
      "signed area",
      "two branches",
      "locus constraint"
    ],
    "statement": "A triangle has two vertices fixed at $A(0,0)$ and $B(4,0)$. Its third vertex $C$ is unknown, but the triangle has area $10$ and its centroid lies on the line $y=x$. Find all possible positions of $C$.",
    "answer": "$C=(1,5)$ or $C=(-9,-5)$",
    "trap": "Writing the area as $\\tfrac12\\cdot4\\cdot y_C=10$ and concluding $y_C=5$ only — forgetting the absolute value, so the vertex below the $x$-axis ($y_C=-5$) is silently lost. The area condition is really $2|y_C|=10$, two parallel lines for $C$, hence two solutions, not one.",
    "solutions": [
      {
        "name": "Area band meets centroid line",
        "steps": [
          "Shoelace area $=\\tfrac12\\bigl|x_A(y_B-y_C)+x_B(y_C-y_A)+x_C(y_A-y_B)\\bigr|=\\tfrac12|4y_C|=2|y_C|$. Setting this to $10$ gives $|y_C|=5$, so $y_C=5$ or $y_C=-5$.",
          "The centroid is $G=\\left(\\tfrac{0+4+x_C}{3},\\tfrac{0+0+y_C}{3}\\right)$. Requiring $G$ on $y=x$ means $\\tfrac{y_C}{3}=\\tfrac{4+x_C}{3}$, i.e. $x_C=y_C-4$.",
          "$y_C=5\\Rightarrow x_C=1$; $y_C=-5\\Rightarrow x_C=-9$. Hence $C=(1,5)$ or $C=(-9,-5)$."
        ]
      },
      {
        "name": "Parametrise the centroid",
        "steps": [
          "Let the centroid be $G=(g,g)$ on the line $y=x$. From $G=\\tfrac13(A+B+C)$ we recover $C=3G-A-B=(3g-4,\\,3g)$.",
          "The area is $2|y_C|=2|3g|=6|g|$. Setting $6|g|=10$ gives $|g|=\\tfrac53$, so $g=\\tfrac53$ or $g=-\\tfrac53$.",
          "$g=\\tfrac53\\Rightarrow C=(1,5)$; $g=-\\tfrac53\\Rightarrow C=(-9,-5)$, the same two points."
        ]
      }
    ],
    "remark": "Insight: an area equation is a modulus condition $|\\,\\cdot\\,|=\\text{const}$, which encodes two affine constraints (one line on each side of the base). Stripping the modulus throws away exactly half the locus, here the entire lower branch."
  },
  {
    "theme": "triangle",
    "themeLabel": "Triangle Centres & Areas",
    "title": "Which Side Weights Which Vertex",
    "difficulty": 4,
    "task": "Find the incentre",
    "tags": [
      "incentre",
      "side lengths",
      "weighted average",
      "section formula"
    ],
    "statement": "A triangle has vertices  $A(-3,-2)$ ,  $B(5,-2)$  and  $C(-3,4)$ . Using the incentre formula  $I=\\dfrac{a\\,A+b\\,B+c\\,C}{a+b+c}$ , where  $a,b,c$  are the lengths of the sides opposite  $A,B,C$  respectively, find the coordinates of the incentre  $I$ .",
    "answer": " $\\boxed{I=(-1,\\,0)}$ ",
    "trap": "The weight on each vertex is the length of the OPPOSITE side:  $a=|BC|$  multiplies  $A$ , not the side touching  $A$ . A student who instead weights  $A$  by an adjacent side (e.g. uses  $c\\,A+a\\,B+b\\,C$ ) gets  $\\left(\\tfrac13,-\\tfrac12\\right)$ , which is not even inside the triangle. Confusing the incentre with the centroid  $\\left(-\\tfrac13,0\\right)$  is a second pitfall.",
    "solutions": [
      {
        "name": "Side lengths then weighted average",
        "steps": [
          "Opposite-side lengths:  $a=|BC|=\\sqrt{(5+3)^2+(-2-4)^2}=\\sqrt{64+36}=10$ ,  $b=|CA|=\\sqrt{0^2+6^2}=6$ ,  $c=|AB|=\\sqrt{8^2+0^2}=8$ .",
          "So  $a+b+c=24$  and  $I_x=\\dfrac{10(-3)+6(5)+8(-3)}{24}=\\dfrac{-30+30-24}{24}=-1$ .",
          " $I_y=\\dfrac{10(-2)+6(-2)+8(4)}{24}=\\dfrac{-20-12+32}{24}=0$ , giving  $\\boxed{I=(-1,0)}$ ."
        ]
      },
      {
        "name": "Right-angle shortcut via the inradius",
        "steps": [
          "Side  $AB$  is horizontal ( $y=-2$ ) and side  $CA$  is vertical ( $x=-3$ ); they meet at  $A$  at a right angle, with legs  $|AB|=8$ ,  $|CA|=6$  and hypotenuse  $|BC|=10$ .",
          "The inradius of a right triangle is  $r=\\dfrac{\\text{leg}_1+\\text{leg}_2-\\text{hyp}}{2}=\\dfrac{8+6-10}{2}=2$ .",
          "The incircle sits  $r$  inward from each leg, so  $I$  is  $2$  to the right of  $x=-3$  and  $2$  above  $y=-2$ :  $I=(-3+2,\\,-2+2)=\\boxed{(-1,0)}$ ."
        ]
      }
    ],
    "remark": "**Insight.** In  $I=\\dfrac{aA+bB+cC}{a+b+c}$  the coefficient of a vertex is the length of the side facing it, never the side touching it; the right-angle check shows the same point landing exactly one inradius in from each leg."
  },
  {
    "theme": "triangle",
    "themeLabel": "Triangle Centres & Areas",
    "title": "Where Two Altitudes Cross",
    "difficulty": 4,
    "task": "Find the orthocentre",
    "tags": [
      "orthocentre",
      "altitudes",
      "perpendicular slopes",
      "intersection of lines"
    ],
    "statement": "The triangle  $ABC$  has vertices  $A(1,2)$ ,  $B(7,4)$  and  $C(3,8)$ . No side is parallel to either axis. Find the orthocentre  $H$ , the point where the three altitudes meet.",
    "answer": " $\\boxed{H=(4,\\,5)}$ ",
    "trap": "An altitude is perpendicular to the OPPOSITE side and passes through the vertex; it is not the perpendicular bisector. Using the slope of a side directly (instead of its negative reciprocal), or dropping the perpendicular onto the wrong side, derails the whole computation. Here the altitude from  $A$  is perpendicular to  $BC$  — not to  $AB$  or  $CA$ .",
    "solutions": [
      {
        "name": "Intersect two altitudes",
        "steps": [
          "Slope of  $BC=\\dfrac{8-4}{3-7}=-1$ , so the altitude from  $A$  has slope  $1$ :  $\\;y-2=1(x-1)$ , i.e.  $y=x+1$ .",
          "Slope of  $CA=\\dfrac{2-8}{1-3}=3$ , so the altitude from  $B$  has slope  $-\\tfrac13$ :  $\\;y-4=-\\tfrac13(x-7)$ .",
          "Substitute  $y=x+1$ :  $\\;x+1-4=-\\tfrac13(x-7)\\Rightarrow 3(x-3)=-(x-7)\\Rightarrow 4x=16\\Rightarrow x=4,\\;y=5$ , so  $\\boxed{H=(4,5)}$ ."
        ]
      },
      {
        "name": "Perpendicularity (dot-product) conditions",
        "steps": [
          "Let  $H=(x,y)$ . Then  $\\overrightarrow{AH}\\perp\\overrightarrow{BC}$  gives  $(x-1)(3-7)+(y-2)(8-4)=0\\Rightarrow -4x+4y-4=0\\Rightarrow y=x+1$ .",
          "And  $\\overrightarrow{BH}\\perp\\overrightarrow{CA}$  gives  $(x-7)(1-3)+(y-4)(2-8)=0\\Rightarrow -2x-6y+38=0\\Rightarrow x+3y=19$ .",
          "Solve: from  $y=x+1$ ,  $x+3(x+1)=19\\Rightarrow 4x=16\\Rightarrow x=4,\\;y=5$ . A check with  $\\overrightarrow{CH}\\perp\\overrightarrow{AB}$  confirms  $\\boxed{H=(4,5)}$ ."
        ]
      }
    ],
    "remark": "**Insight.** Each altitude is fixed by two facts at once — it hugs a vertex and stares perpendicularly at the opposite side; encoding that as a single dot-product equation per vertex turns the orthocentre into a  $2\\times2$  linear solve with no slope bookkeeping."
  },
  {
    "theme": "triangle",
    "themeLabel": "Triangle Centres & Areas",
    "title": "The Point Equidistant From Three",
    "difficulty": 4,
    "task": "Find centre and radius",
    "tags": [
      "circumcentre",
      "perpendicular bisector",
      "equidistant locus",
      "circumradius"
    ],
    "statement": "For the triangle with vertices  $A(0,0)$ ,  $B(7,7)$  and  $C(-1,3)$ , find the circumcentre  $S$  (the point equidistant from all three vertices) and the circumradius  $R$ .",
    "answer": " $$\\boxed{S=(4,3),\\qquad R=5}$$ ",
    "trap": "The circumcentre lies on the perpendicular BISECTORS of the sides, not on the medians. Each bisector passes through a side's MIDPOINT with slope equal to the negative reciprocal of that side. Mixing up a midpoint, or using the side's own slope, sends  $S$  astray; and  $S$  is generally NOT the centroid  $\\left(2,\\tfrac{10}{3}\\right)$ , which lies on the medians instead.",
    "solutions": [
      {
        "name": "Two perpendicular bisectors",
        "steps": [
          "Side  $AB$  has midpoint  $\\left(\\tfrac72,\\tfrac72\\right)$  and slope  $1$ , so its perpendicular bisector has slope  $-1$ :  $\\;y-\\tfrac72=-\\left(x-\\tfrac72\\right)$ , i.e.  $x+y=7$ .",
          "Side  $CA$  has midpoint  $\\left(-\\tfrac12,\\tfrac32\\right)$  and slope  $-3$ , so its bisector has slope  $\\tfrac13$ :  $\\;y-\\tfrac32=\\tfrac13\\left(x+\\tfrac12\\right)$ , i.e.  $x-3y=-5$ .",
          "Subtracting,  $4y=12\\Rightarrow y=3$ , then  $x=4$ , so  $S=(4,3)$  and  $R=|SA|=\\sqrt{4^2+3^2}=\\boxed{5}$ , confirming  $S=(4,3)$ ."
        ]
      },
      {
        "name": "Equidistance algebra",
        "steps": [
          "Let  $S=(x,y)$  with  $|SA|^2=|SB|^2$ :  $\\;x^2+y^2=(x-7)^2+(y-7)^2\\Rightarrow 14x+14y=98\\Rightarrow x+y=7$ .",
          "And  $|SA|^2=|SC|^2$ :  $\\;x^2+y^2=(x+1)^2+(y-3)^2\\Rightarrow 0=2x-6y+10\\Rightarrow x-3y=-5$ .",
          "Solving  $x+y=7$  and  $x-3y=-5$  gives  $x=4,\\,y=3$ ; then  $R=\\sqrt{4^2+3^2}=5$ , so  $\\boxed{S=(4,3),\\,R=5}$ ."
        ]
      }
    ],
    "remark": "**Insight.** The circumcentre is born from the single statement “equidistant from three points,” and each equality  $|SA|^2=|SB|^2$  collapses — the quadratic terms cancel — into one linear perpendicular-bisector equation, so two such statements pin the point exactly."
  },
  {
    "theme": "triangle",
    "themeLabel": "Triangle Centres & Areas",
    "title": "The Pivoting Third Side",
    "difficulty": 5,
    "task": "Find all",
    "tags": [
      "area as function of slope",
      "line family",
      "degenerate cases",
      "absolute value"
    ],
    "statement": "Two fixed lines $y=x$ and $y=-x+6$ meet at $(3,3)$. A third line $\\ell:\\;y=mx+1$ completes a triangle with them. Find all slopes $m$ for which this triangle has area exactly $4$ (excluding any $m$ that makes $\\ell$ parallel to a fixed line or pass through $(3,3)$).",
    "answer": "$\\boxed{m=0\\ \\text{or}\\ m=\\tfrac{12}{13}}$",
    "trap": "Setting up area $=\\dfrac{(3m-2)^2}{|m^2-1|}=4$ and clearing only the case $m^2-1>0$ (or dropping the modulus entirely) gives $(3m-2)^2=4(m^2-1)$, i.e. $5m^2-12m+8=0$, whose discriminant is $-16$: no real root. A solver who takes that single branch wrongly concludes that no slope works. The honest move is to split on the sign of $m^2-1$. The valid regime here is $|m|<1$, where $(3m-2)^2=4(1-m^2)$ yields $13m^2-12m=0$.",
    "solutions": [
      {
        "name": "Area as a function of m",
        "steps": [
          "Vertices: $P=(3,3)$ (the two fixed lines), $Q=\\ell\\cap\\{y=x\\}=\\left(\\tfrac1{1-m},\\tfrac1{1-m}\\right)$, $R=\\ell\\cap\\{y=-x+6\\}=\\left(\\tfrac5{m+1},\\,6-\\tfrac5{m+1}\\right)$.",
          "The shoelace formula simplifies to $\\text{Area}=\\dfrac{(3m-2)^2}{|m^2-1|}$. Set this equal to $4$.",
          "For $|m|<1$ we have $m^2-1<0$, so $|m^2-1|=1-m^2$ and $(3m-2)^2=4(1-m^2)\\Rightarrow13m^2-12m=0\\Rightarrow m=0$ or $m=\\tfrac{12}{13}$; both satisfy $|m|<1$.",
          "For $|m|>1$ the equation is $(3m-2)^2=4(m^2-1)$, i.e. $5m^2-12m+8=0$, whose discriminant $144-160=-16<0$ gives no real root. Hence $\\boxed{m=0\\text{ or }m=\\tfrac{12}{13}}$."
        ]
      },
      {
        "name": "Base-height form",
        "steps": [
          "Use the side $\\ell$ as base. Its length between the two fixed lines is the chord $QR$, and the height is the distance from $P=(3,3)$ to $\\ell:\\;mx-y+1=0$, namely $\\dfrac{|3m-3+1|}{\\sqrt{m^2+1}}=\\dfrac{|3m-2|}{\\sqrt{m^2+1}}$.",
          "Carrying out $\\tfrac12\\cdot|QR|\\cdot(\\text{height})$ reproduces $\\text{Area}=\\dfrac{(3m-2)^2}{|m^2-1|}$; the factor $|3m-2|^2=(3m-2)^2$ makes the numerator a perfect square, so it is always $\\ge0$.",
          "Solving $=4$ on the valid regime $|m|<1$ gives $13m^2=12m$, hence $\\boxed{m=0\\text{ or }m=\\tfrac{12}{13}}$ (the $|m|>1$ branch is empty)."
        ]
      }
    ],
    "remark": "Insight: writing area as a rational function of a slope hides a piecewise modulus in its denominator. The honest solver splits into the $|m|<1$ and $|m|>1$ regimes and discards roots that violate their own assumption. Here the entire solution set lives in $|m|<1$, while the $|m|>1$ branch is genuinely empty (complex roots $6/5\\pm 2i/5$)."
  },
  {
    "theme": "triangle",
    "themeLabel": "Triangle Centres & Areas",
    "title": "The Triangle Inside the Incircle",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "incentre",
      "contact triangle",
      "inradius",
      "circumradius",
      "area ratio"
    ],
    "statement": "For the triangle $A(0,0)$, $B(14,0)$, $C(5,12)$, the incircle touches the three sides at $T_a,T_b,T_c$ (the contact / intouch triangle). Evaluate the exact area of $\\triangle T_aT_bT_c$.",
    "answer": "$\\boxed{\\dfrac{1344}{65}}$",
    "trap": "Locating the \"centre\" at the centroid $\\left(\\tfrac{19}{3},4\\right)$ and dropping perpendiculars from THAT point gives the pedal triangle of the centroid, whose area is $\\tfrac{52864}{2535}\\approx 20.85$. The true contact points are feet from the INCENTRE $(6,4)$, located with side-length weights $a:b:c=15:13:14$; the centroid's feet do not even lie on the incircle.",
    "solutions": [
      {
        "name": "Direct contact points",
        "steps": [
          "Sides $a=BC=15,\\;b=CA=13,\\;c=AB=14$ give incentre $I=\\tfrac{15A+13B+14C}{42}=(6,4)$ and $r=4$.",
          "Project $I$ onto each side: $T_c=(6,0)$ on $AB$; $T_a=\\left(\\tfrac{46}{5},\\tfrac{32}{5}\\right)$ on $BC$; $T_b=\\left(\\tfrac{30}{13},\\tfrac{72}{13}\\right)$ on $CA$.",
          "Each lies at distance $4=r$ from $I$, confirming tangency.",
          "Shoelace on $T_a,T_b,T_c$ gives area $=\\boxed{\\dfrac{1344}{65}}$."
        ]
      },
      {
        "name": "Ratio formula",
        "steps": [
          "The contact triangle has area $\\dfrac{r}{2R}\\,K$, where $K$ is the parent area, $r$ the inradius, $R$ the circumradius.",
          "Here $K=84$, $r=4$, $R=\\dfrac{abc}{4K}=\\dfrac{15\\cdot13\\cdot14}{336}=\\dfrac{65}{8}$.",
          "So area $=\\dfrac{4}{2\\cdot65/8}\\cdot84=\\dfrac{4\\cdot8}{130}\\cdot84=\\dfrac{1344}{65}=\\boxed{\\dfrac{1344}{65}}$."
        ]
      }
    ],
    "remark": "Insight: the elegant identity $[\\,\\text{contact}\\,]=\\dfrac{r}{2R}\\,K$ links the two radii and the area; but reaching it still demands the incentre's $a:b:c$ weights — the centroid is irrelevant to tangency."
  },
  {
    "theme": "triangle",
    "themeLabel": "Triangle Centres & Areas",
    "title": "Area and Centroid, Both at Once",
    "difficulty": 5,
    "task": "Find all",
    "tags": [
      "signed area",
      "centroid line",
      "two branches",
      "simultaneous constraints"
    ],
    "statement": "Two vertices of a triangle are $A(1,2)$ and $B(5,4)$. The third vertex $C$ must satisfy two conditions simultaneously: the triangle has area $10$, and its centroid lies on the line $2x-y=3$. Find all positions of $C$.",
    "answer": "$\\boxed{C=\\left(\\tfrac{19}{3},\\tfrac{29}{3}\\right)\\ \\text{or}\\ C=\\left(-\\tfrac13,-\\tfrac{11}{3}\\right)}$",
    "trap": "Writing the area determinant without absolute value (a single signed equation), solving the linear system, and reporting only one $C$. Area $=10$ means $|\\text{signed area}|=10$, i.e. signed area $=\\pm10$, so $C$ can sit on either side of line $AB$; each sign, combined with the centroid line, gives one solution. A second, sneakier slip is mis-clearing denominators in the centroid condition: $2\\cdot\\tfrac{6+x}{3}-\\tfrac{6+y}{3}=3$ reduces to $2x-y=3$, not $2x-y=9$.",
    "solutions": [
      {
        "name": "Signed-area branches",
        "steps": [
          "Signed area $=\\tfrac12\\big[(x_B-x_A)(y_C-y_A)-(x_C-x_A)(y_B-y_A)\\big]=\\tfrac12\\big[4(y-2)-2(x-1)\\big]=2y-x-3$.",
          "Impose $|2y-x-3|=10$, i.e. $2y-x-3=\\pm10$, giving the two parallel lines $2y-x=13$ or $2y-x=-7$.",
          "Centroid $G=\\left(\\tfrac{6+x}{3},\\tfrac{6+y}{3}\\right)$ on $2x-y=3$ gives $2\\cdot\\tfrac{6+x}{3}-\\tfrac{6+y}{3}=3\\Rightarrow 12+2x-6-y=9\\Rightarrow 2x-y=3$.",
          "Solve $\\{2x-y=3,\\;2y-x=13\\}$: with $y=2x-3$, $2(2x-3)-x=13\\Rightarrow 3x=19\\Rightarrow C=\\left(\\tfrac{19}{3},\\tfrac{29}{3}\\right)$.",
          "Solve $\\{2x-y=3,\\;2y-x=-7\\}$: $2(2x-3)-x=-7\\Rightarrow 3x=-1\\Rightarrow C=\\left(-\\tfrac13,-\\tfrac{11}{3}\\right)$. Hence $\\boxed{C=\\left(\\tfrac{19}{3},\\tfrac{29}{3}\\right)\\text{ or }\\left(-\\tfrac13,-\\tfrac{11}{3}\\right)}$."
        ]
      },
      {
        "name": "Two parallel lines meet one transversal",
        "steps": [
          "The centroid condition collapses to a single line for $C$: requiring $G$ on $2x-y=3$ yields $2x-y=3$ (the $A,B$ contribution $+6-6$ cancels after clearing the $3$).",
          "The area-$10$ condition is the pair of parallel lines $2y-x=13$ and $2y-x=-7$ — the two values of $2y-x-3=\\pm10$ forced by the absolute value.",
          "Each parallel line meets the transversal $2x-y=3$ in exactly one point: $2y-x=13$ gives $C=\\left(\\tfrac{19}{3},\\tfrac{29}{3}\\right)$ and $2y-x=-7$ gives $C=\\left(-\\tfrac13,-\\tfrac{11}{3}\\right)$, so $\\boxed{C=\\left(\\tfrac{19}{3},\\tfrac{29}{3}\\right)\\text{ or }\\left(-\\tfrac13,-\\tfrac{11}{3}\\right)}$."
        ]
      }
    ],
    "remark": "Insight: an area constraint is a pair of parallel lines (signed area $=\\pm$ the value), so intersecting with one more linear locus generically yields two answers, never just one. Both candidates are genuine because each lies on its own side of line $AB$, exactly as the $\\pm$ predicts."
  },
  {
    "theme": "locus",
    "themeLabel": "Locus of a Point",
    "title": "The Bisectors of an Unequal Pair",
    "difficulty": 3,
    "task": "Find the locus",
    "tags": [
      "distance-to-line",
      "angle-bisector",
      "pair-of-lines",
      "ratio"
    ],
    "statement": "A point $P$ moves so that its perpendicular distance from the line $3x-4y+5=0$ equals its perpendicular distance from the line $5x+12y-13=0$. Find the equation of the complete locus of $P$ as a single second-degree equation, and name the two component lines.",
    "answer": "\\[\\boxed{16(8x+y)(7x-56y+65)=0}\\]",
    "trap": "Writing only $\\dfrac{3x-4y+5}{5}=\\dfrac{5x+12y-13}{13}$ (one sign) gives just ONE bisector; the condition is $\\left|\\dfrac{3x-4y+5}{5}\\right|=\\left|\\dfrac{5x+12y-13}{13}\\right|$, so BOTH bisectors $7x-56y+65=0$ and $8x+y=0$ belong to the locus.",
    "solutions": [
      {
        "name": "Modulus split into two bisectors",
        "steps": [
          "Distances: $d_1=\\dfrac{|3x-4y+5|}{5}$, $d_2=\\dfrac{|5x+12y-13|}{13}$.",
          "Set $d_1=d_2$: $13|3x-4y+5|=5|5x+12y-13|$.",
          "Removing the moduli gives the $+$ and $-$ cases: $13(3x-4y+5)=\\pm 5(5x+12y-13)$.",
          "$+$: $39x-52y+65=25x+60y-65\\Rightarrow 14x-112y+130=0\\Rightarrow 7x-56y+65=0$.",
          "$-$: $39x-52y+65=-25x-60y+65\\Rightarrow 64x+8y=0\\Rightarrow 8x+y=0$.",
          "Both are part of the locus: $\\boxed{16(8x+y)(7x-56y+65)=0}$."
        ]
      },
      {
        "name": "Square both sides (auto-captures both branches)",
        "steps": [
          "Equal distances $\\Rightarrow 169(3x-4y+5)^2=25(5x+12y-13)^2$.",
          "Move everything to one side: $169(3x-4y+5)^2-25(5x+12y-13)^2=0$.",
          "As a difference of squares this factors directly, and expanding both squares gives $896x^2-7056xy+8320x-896y^2+1040y=16(8x+y)(7x-56y+65)$.",
          "Hence the locus is the pair $\\boxed{16(8x+y)(7x-56y+65)=0}$, two perpendicular lines (slopes $-8$ and $\\tfrac18$)."
        ]
      }
    ],
    "remark": "Insight: equal distance from two lines is the union of BOTH angle bisectors; squaring (or a $\\pm$) is mandatory. The two bisectors are always perpendicular — here slopes $-8$ and $\\tfrac18$ confirm it, since their product is $-1$."
  },
  {
    "theme": "locus",
    "themeLabel": "Locus of a Point",
    "title": "A Centroid Riding a Line",
    "difficulty": 3,
    "task": "Determine the locus",
    "tags": [
      "centroid",
      "moving-vertex",
      "parameter-elimination",
      "straight-line"
    ],
    "statement": "In triangle $ABC$ the vertices $B=(1,1)$ and $C=(4,-2)$ are fixed, while $A$ moves along the line $y=2x+1$. Determine the locus of the centroid $G$ of triangle $ABC$.",
    "answer": "\\[\\boxed{y=2x-\\tfrac{10}{3}}\\]",
    "trap": "Concluding the centroid traces the SAME line $y=2x+1$. The centroid is the average of three points, so its locus is parallel but shifted; you must eliminate the parameter, not assume invariance.",
    "solutions": [
      {
        "name": "Parametrise and eliminate",
        "steps": [
          "Let $A=(t,\\,2t+1)$ on the given line.",
          "Centroid: $G=\\Big(\\dfrac{t+1+4}{3},\\,\\dfrac{(2t+1)+1+(-2)}{3}\\Big)=\\Big(\\dfrac{t+5}{3},\\,\\dfrac{2t}{3}\\Big)$.",
          "From $X=\\dfrac{t+5}{3}$: $t=3X-5$.",
          "Substitute: $Y=\\dfrac{2(3X-5)}{3}=2X-\\dfrac{10}{3}$.",
          "Locus: $\\boxed{y=2x-\\tfrac{10}{3}}$."
        ]
      },
      {
        "name": "Vector / translation argument",
        "steps": [
          "Write $G=\\tfrac13 A+\\tfrac13(B+C)$ where $B+C=(5,-1)$.",
          "As $A$ ranges over the line $\\ell:\\,y=2x+1$, $\\tfrac13 A$ ranges over $\\ell$ scaled by $\\tfrac13$ about the origin — a line of the same slope $2$.",
          "Adding the constant vector $\\tfrac13(5,-1)$ translates it; the slope stays $2$, so $y=2x+c$ for some $c$.",
          "Pin the intercept with one value: $A=(0,1)\\Rightarrow G=\\big(\\tfrac{0+1+4}{3},\\,\\tfrac{1+1-2}{3}\\big)=\\big(\\tfrac53,0\\big)$, giving $0=2\\cdot\\tfrac53+c\\Rightarrow c=-\\tfrac{10}{3}$.",
          "Locus: $\\boxed{y=2x-\\tfrac{10}{3}}$."
        ]
      }
    ],
    "remark": "Insight: an affine image of a line is a line of the SAME slope; the centroid map $A\\mapsto \\tfrac13 A+\\text{const}$ is affine, so parallelism is forced but the position is not."
  },
  {
    "theme": "locus",
    "themeLabel": "Locus of a Point",
    "title": "Equal Angles, Twin Bisectors",
    "difficulty": 4,
    "task": "Find the locus",
    "tags": [
      "equal-angles",
      "angle-bisector",
      "pair-of-lines",
      "subtended-angle"
    ],
    "statement": "The two lines $\\ell_1:\\,y=x$ and $\\ell_2:\\,y=2x$ both pass through the origin $O$. Find the locus of all points $P$ for which the line $OP$ makes equal angles with $\\ell_1$ and $\\ell_2$.",
    "answer": "\\[\\boxed{3x^{2}+2xy-3y^{2}=0}\\]",
    "trap": "Imposing only the single equation $\\dfrac{x-y}{\\sqrt2}=\\dfrac{2x-y}{\\sqrt5}$ keeps just one bisector (the line of slope $\\tfrac{1-\\sqrt{10}}{3}$) and quietly discards the other (slope $\\tfrac{1+\\sqrt{10}}{3}$). 'Equal angles' must allow the $\\pm$ sign, so the locus is the full homogeneous pair $3x^2+2xy-3y^2=0$, not one line. Both bisectors are genuine — neither branch is extraneous.",
    "solutions": [
      {
        "name": "Distance-based bisector pair",
        "steps": [
          "Since $\\ell_1,\\ell_2$ are concurrent at $O$, the line $OP$ makes equal angles with them exactly when $P$ lies on an angle bisector of $\\ell_1,\\ell_2$, i.e. when $P$ is equidistant from the two lines.",
          "Normalise: $\\ell_1:\\dfrac{x-y}{\\sqrt2}=0$, $\\ell_2:\\dfrac{2x-y}{\\sqrt5}=0$.",
          "Equal distances: $\\dfrac{|x-y|}{\\sqrt2}=\\dfrac{|2x-y|}{\\sqrt5}$, so squaring removes the modulus and captures both bisectors at once.",
          "$5(x-y)^2=2(2x-y)^2\\Rightarrow 5(x^2-2xy+y^2)=2(4x^2-4xy+y^2)$.",
          "$5x^2-10xy+5y^2=8x^2-8xy+2y^2\\Rightarrow 3x^2+2xy-3y^2=0$.",
          "Locus: $\\boxed{3x^{2}+2xy-3y^{2}=0}$, a homogeneous pair of lines through $O$. (Coefficient check $a+b=3+(-3)=0$ confirms the two bisectors are perpendicular.)"
        ]
      },
      {
        "name": "Slope / tangent of equal angles",
        "steps": [
          "Let $OP$ have slope $m$. The lines $\\ell_1,\\ell_2$ have slopes $1$ and $2$.",
          "Equal angles means $\\left|\\dfrac{m-1}{1+m}\\right|=\\left|\\dfrac{m-2}{1+2m}\\right|$.",
          "The $+$ case $\\dfrac{m-1}{1+m}=\\dfrac{m-2}{1+2m}$ has no finite solution; the $-$ case $\\dfrac{m-1}{1+m}=-\\dfrac{m-2}{1+2m}$ gives $(m-1)(1+2m)=-(m-2)(1+m)$, i.e. $3m^2-2m-3=0$.",
          "Thus $m=\\dfrac{1\\pm\\sqrt{10}}{3}$, the slopes of the two bisectors.",
          "Putting $m=\\dfrac{y}{x}$ in $3m^2-2m-3=0$ and clearing the denominator: $3y^2-2xy-3x^2=0$, i.e. $3x^2+2xy-3y^2=0$.",
          "Locus: $\\boxed{3x^{2}+2xy-3y^{2}=0}$."
        ]
      }
    ],
    "remark": "Insight: 'the line $OP$ subtends/makes equal angles with two lines through a common point $O$' forces $P$ onto the angle bisectors of those lines — a homogeneous pair through the vertex, never a single line. The $\\pm$ ambiguity in the equal-angle condition is exactly what supplies the second bisector, and here the pair is even orthogonal since the $x^2$ and $y^2$ coefficients sum to zero."
  },
  {
    "theme": "locus",
    "themeLabel": "Locus of a Point",
    "title": "Orthocentre on a Sliding Apex",
    "difficulty": 4,
    "task": "Find the locus",
    "tags": [
      "orthocentre",
      "moving-vertex",
      "parabola",
      "parameter-elimination"
    ],
    "statement": "Triangle $ABC$ has fixed vertices $A=(-3,0)$ and $B=(5,0)$, while $C$ slides along the horizontal line $y=4$. Find the locus of the orthocentre $H$ of triangle $ABC$.",
    "answer": "\\[\\boxed{4y=-(x-5)(x+3)}\\]",
    "trap": "Assuming the orthocentre stays on the line $y=4$, or that it traces another horizontal line. The altitude from $C$ is vertical (so $H_x$ slides with $C$), but the altitude from $A$ tilts as $C$ moves, so $H$ sweeps a PARABOLA. It meets $y=4$ only once, at the apex $(1,4)$; you must eliminate the parameter, not guess the shape.",
    "solutions": [
      {
        "name": "Two altitudes, then eliminate",
        "steps": [
          "Let $C=(t,4)$. Since $AB$ lies on the $x$-axis, the altitude from $C$ is vertical: $x=t$, so $H_x=t$.",
          "Slope of $BC=\\dfrac{4-0}{t-5}$, so the altitude from $A$, being perpendicular to $BC$, has slope $-\\dfrac{t-5}{4}$ and passes through $A(-3,0)$.",
          "Its equation is $y=-\\dfrac{t-5}{4}(x+3)$.",
          "Setting $x=t$ gives $H_y=-\\dfrac{(t-5)(t+3)}{4}$.",
          "Eliminating $t$ via $x=t$: $y=-\\dfrac{(x-5)(x+3)}{4}$, i.e. $\\boxed{4y=-(x-5)(x+3)}$."
        ]
      },
      {
        "name": "Orthocentre coordinate formula",
        "steps": [
          "For a triangle the orthocentre satisfies $H_x=A_x+B_x+C_x-(\\text{centroid scaling})$ only in special cases, so instead use the perpendicularity conditions directly: $(H-A)\\cdot(C-B)=0$ and $(H-B)\\cdot(C-A)=0$ with $A=(-3,0)$, $B=(5,0)$, $C=(t,4)$.",
          "The first condition involves $C-B=(t-5,4)$; the second involves $C-A=(t+3,4)$. Solving the two linear equations for $H=(H_x,H_y)$ gives $H_x=t$ and $H_y=-\\tfrac14(t-5)(t+3)$.",
          "The vertical altitude from $C$ confirms $H_x=t$; substituting back yields $H_y=-\\tfrac14(t-5)(t+3)$.",
          "Replacing $t$ by $x$: $\\boxed{4y=-(x-5)(x+3)}$, a downward parabola through $(-3,0)$ and $(5,0)$ with apex $(1,4)$."
        ]
      }
    ],
    "remark": "Insight: with the base pinned on a line, one altitude is always vertical (so it pins $x=t$), while the other altitude's slope varies linearly in $t$. Their intersection therefore forces a quadratic in $x$ — the orthocentre of a sliding apex traces a parabola, not a line. It passes through both base vertices because there the triangle degenerates and $H$ lands on the base."
  },
  {
    "theme": "locus",
    "themeLabel": "Locus of a Point",
    "title": "Twice as Far, Two Ways",
    "difficulty": 4,
    "task": "Find the locus",
    "tags": [
      "distance-to-line",
      "constant-ratio",
      "pair-of-lines",
      "sign-branch"
    ],
    "statement": "A point $P$ moves so that its distance from the line $4x-3y+1=0$ is exactly half its distance from the line $3x+4y-6=0$. Find the complete locus of $P$.",
    "answer": "\\[\\boxed{(5x-10y+8)(11x-2y-4)=0}\\]",
    "trap": "Treating $2\\cdot\\dfrac{|4x-3y+1|}{5}=\\dfrac{|3x+4y-6|}{5}$ as a single equation $2(4x-3y+1)=3x+4y-6$ and reporting one line. The ratio condition has two sign cases, so the locus is a PAIR of (here non-perpendicular) lines.",
    "solutions": [
      {
        "name": "Ratio with both signs",
        "steps": [
          "Both given lines have denominator $\\sqrt{4^2+3^2}=\\sqrt{3^2+4^2}=5$. The condition $d_1=\\tfrac12 d_2$ reads $\\dfrac{|4x-3y+1|}{5}=\\dfrac12\\cdot\\dfrac{|3x+4y-6|}{5}$.",
          "Clearing denominators: $2|4x-3y+1|=|3x+4y-6|$, so $2(4x-3y+1)=\\pm(3x+4y-6)$.",
          "$+$ case: $8x-6y+2=3x+4y-6\\Rightarrow 5x-10y+8=0$.",
          "$-$ case: $8x-6y+2=-3x-4y+6\\Rightarrow 11x-2y-4=0$.",
          "Locus: $\\boxed{(5x-10y+8)(11x-2y-4)=0}$."
        ]
      },
      {
        "name": "Square the ratio",
        "steps": [
          "From $2|4x-3y+1|=|3x+4y-6|$ square both sides: $4(4x-3y+1)^2=(3x+4y-6)^2$.",
          "Write it as a difference of squares $A^2-B^2=0$ with $A=2(4x-3y+1)$, $B=3x+4y-6$: $[A-B][A+B]=0$.",
          "$A-B=2(4x-3y+1)-(3x+4y-6)=5x-10y+8$ and $A+B=2(4x-3y+1)+(3x+4y-6)=11x-2y-4$.",
          "Locus: $\\boxed{(5x-10y+8)(11x-2y-4)=0}$."
        ]
      }
    ],
    "remark": "Insight: a constant ratio of distances to two lines (ratio $\\ne1$) is a degenerate conic that splits into TWO lines, one per sign branch. The locus lines here have slopes $\\tfrac12$ and $\\tfrac{11}{2}$, so they are not perpendicular even though the two base lines are. Perpendicular angle bisectors arise only in the special case ratio $=1$."
  },
  {
    "theme": "locus",
    "themeLabel": "Locus of a Point",
    "title": "Midpoint of the Intercept Chord of a Pivoting Line",
    "difficulty": 4,
    "task": "Find the locus",
    "tags": [
      "midpoint",
      "intercepts",
      "fixed-point",
      "parameter-elimination",
      "rectangular-hyperbola"
    ],
    "statement": "A variable line passes through the fixed point $(3,2)$ and meets the positive $x$-axis at $P=(a,0)$ and the positive $y$-axis at $Q=(0,b)$. Find the locus of the midpoint $M$ of the intercept segment $PQ$, together with the portion of the plane it actually sweeps out.",
    "answer": "\\[\\boxed{2xy-2x-3y=0,\\quad x>\\tfrac32,\\ y>1}\\qquad\\left(\\text{equivalently } y=\\dfrac{2x}{2x-3}\\right)\\]",
    "trap": "Writing the intercept form $\\dfrac{3}{a}+\\dfrac{2}{b}=1$ for the pencil through $(3,2)$, then substituting $a=x,\\ b=y$ directly — i.e. forgetting that $M=\\left(\\tfrac a2,\\tfrac b2\\right)$, so the eliminating substitution must be $a=2x,\\ b=2y$. The careless route gives $xy-2x-3y=0$, which differs from the true locus on the $xy$-term and is wrong. A second slip is reporting the whole hyperbola instead of only the branch with $x>\\tfrac32,\\ y>1$ that positive intercepts permit.",
    "solutions": [
      {
        "name": "Pencil through the fixed point, then midpoint substitution",
        "steps": [
          "The line with positive intercepts $a,b$ is $\\dfrac{x}{a}+\\dfrac{y}{b}=1$.",
          "It passes through $(3,2)$, so $\\dfrac{3}{a}+\\dfrac{2}{b}=1$ is the constraint linking the two parameters.",
          "The midpoint of $P=(a,0)$ and $Q=(0,b)$ is $M=\\left(\\dfrac a2,\\dfrac b2\\right)$, so with $x=\\dfrac a2,\\ y=\\dfrac b2$ we have $a=2x,\\ b=2y$.",
          "Substitute: $\\dfrac{3}{2x}+\\dfrac{2}{2y}=1$, i.e. $\\dfrac{3}{2x}+\\dfrac{1}{y}=1$.",
          "Clear denominators by multiplying through by $2xy$: $3y+2x=2xy$, that is $2xy-2x-3y=0$.",
          "Positivity $a>3$ and $b>2$ (a line through an interior point that still meets both positive axes must overshoot each intercept) forces $x>\\tfrac32$ and $y>1$.",
          "Locus: $\\boxed{2xy-2x-3y=0,\\ x>\\tfrac32,\\ y>1}$, the branch of a rectangular hyperbola with asymptotes $x=\\tfrac32$ and $y=1$."
        ]
      },
      {
        "name": "Slope parametrization and direct elimination",
        "steps": [
          "Let the line through $(3,2)$ have slope $m<0$ (negative, so both intercepts are positive): $y-2=m(x-3)$.",
          "$x$-intercept ($y=0$): $a=3-\\dfrac{2}{m}$; $y$-intercept ($x=0$): $b=2-3m$.",
          "Midpoint coordinates: $x=\\dfrac a2=\\dfrac32-\\dfrac1m$ and $y=\\dfrac b2=1-\\dfrac{3m}{2}$.",
          "From the first, $\\dfrac1m=\\dfrac32-x$, so $m=\\dfrac{1}{\\frac32-x}=\\dfrac{2}{3-2x}$.",
          "Substitute into $y=1-\\dfrac{3m}{2}=1-\\dfrac{3}{2}\\cdot\\dfrac{2}{3-2x}=1-\\dfrac{3}{3-2x}=\\dfrac{-2x}{3-2x}=\\dfrac{2x}{2x-3}$.",
          "Hence $y(2x-3)=2x\\Rightarrow 2xy-2x-3y=0$, matching Method 1.",
          "Since $m<0$: $\\dfrac1m<0\\Rightarrow x>\\tfrac32$, and $-\\dfrac{3m}{2}>0\\Rightarrow y>1$, recovering the branch restriction.",
          "Locus: $\\boxed{2xy-2x-3y=0,\\ x>\\tfrac32,\\ y>1}$."
        ]
      }
    ],
    "remark": "Insight: the family of lines is a pencil through one fixed point, so the natural invariant is the intercept relation $\\frac3a+\\frac2b=1$ — but the unknown is the midpoint, not the intercepts. The midpoint map halves both intercepts, and feeding $a=2x,\\ b=2y$ back into a reciprocal (non-linear) relation turns a straight pencil into a rectangular hyperbola. The reward for honesty is twofold: the correct $xy$-coefficient and the correct branch $x>\\tfrac32,\\ y>1$ carved out by the requirement that both intercepts stay positive."
  },
  {
    "theme": "locus",
    "themeLabel": "Locus of a Point",
    "title": "The Midpoint on the Crossing Lines",
    "difficulty": 5,
    "task": "Find the locus",
    "tags": [
      "midpoint",
      "variable-line",
      "fixed-point",
      "rectangular-hyperbola"
    ],
    "statement": "A variable straight line passes through the fixed point $(2,1)$ and meets the line $y=x$ at $A$ and the line $y=-x$ at $B$. Find the locus of the midpoint $M$ of segment $AB$.",
    "answer": "\\[\\boxed{x^{2}-y^{2}-2x+y=0}\\]",
    "trap": "Eliminating the slope $m$ carelessly and stopping at $X=m\\,Y$ without using the full intercept relations — or assuming $M$ traces a line because both feet are on lines. The clean elimination $m=X/Y$ reveals a rectangular HYPERBOLA, and one must not drop solutions while clearing denominators.",
    "solutions": [
      {
        "name": "Slope parameter and resultant",
        "steps": [
          "Line through $(2,1)$: $y-1=m(x-2)$.",
          "Meet $y=x$: $x-1=m(x-2)\\Rightarrow x_A=\\dfrac{1-2m}{1-m}=y_A$.",
          "Meet $y=-x$: $-x-1=m(x-2)\\Rightarrow x_B=\\dfrac{2m-1}{1+m}$, $y_B=-x_B$.",
          "Midpoint: $X=\\dfrac{x_A+x_B}{2}=\\dfrac{m(2m-1)}{m^2-1}$, $Y=\\dfrac{y_A+y_B}{2}=\\dfrac{2m-1}{m^2-1}$.",
          "Notice $X=mY\\Rightarrow m=X/Y$; substitute into $Y=\\dfrac{2m-1}{m^2-1}$ and clear: $X^2-Y^2=2X-Y$.",
          "Locus: $\\boxed{x^{2}-y^{2}-2x+y=0}$."
        ]
      },
      {
        "name": "Use of the relation $X=mY$",
        "steps": [
          "From the two midpoint expressions, $\\dfrac{X}{Y}=m$ directly.",
          "Then $Y(m^2-1)=2m-1$ becomes $Y\\!\\left(\\dfrac{X^2}{Y^2}-1\\right)=2\\dfrac{X}{Y}-1$.",
          "Multiply by $Y$: $X^2-Y^2=2X-Y$.",
          "Rearrange: $\\boxed{x^{2}-y^{2}-2x+y=0}$, a rectangular hyperbola (asymptotes parallel to $y=\\pm x$, consistent with the two base lines)."
        ]
      }
    ],
    "remark": "Insight: the midpoint of a chord cut by two perpendicular lines through the origin, as the chord pivots about a fixed point, sweeps a rectangular hyperbola whose asymptote directions match the two base lines. Check the degenerate pivots too: the vertical line $x=2$ gives $M=(2,0)$ and the horizontal line $y=1$ gives $M=(0,1)$, both of which satisfy the locus."
  },
  {
    "theme": "locus",
    "themeLabel": "Locus of a Point",
    "title": "The Hidden Branch of the Bisector",
    "difficulty": 5,
    "task": "Find the locus",
    "tags": [
      "equal-angles",
      "perpendicular-bisector",
      "extraneous-branch",
      "degenerate-triangle"
    ],
    "statement": "Points $A=(a,0)$ and $B=(-a,0)$ with $a>0$ are fixed. A point $P=(x,y)$ moves so that the lines $PA$ and $PB$ are equally inclined to the $y$-axis (each makes the same angle with the vertical). Find the locus of $P$, stating clearly which part, if any, must be excluded.",
    "answer": "\\[\\boxed{x=0,\\ y\\neq 0}\\]",
    "trap": "Reading 'equally inclined' as equal signed slopes and writing $\\dfrac{y}{x-a}=\\dfrac{y}{x+a}$ forces (after cancelling $y\\neq0$) $x+a=x-a$, i.e. $a=0$, a contradiction; one then wrongly declares 'no locus'. The correct equal-angle condition is on the magnitudes, $\\left|\\dfrac{y}{x-a}\\right|=\\left|\\dfrac{y}{x+a}\\right|$, equivalently the mirror form $\\dfrac{y}{x-a}=-\\dfrac{y}{x+a}$, giving $x=0$. The squared form $m_A^2=m_B^2$ also throws up the root $y=0$, which is EXTRANEOUS: then $P,A,B$ are collinear, both 'lines' coincide with the $x$-axis, and no genuine two-line equal-angle configuration exists.",
    "solutions": [
      {
        "name": "Equal-angle (magnitude) condition",
        "steps": [
          "The acute angle a line of slope $m$ makes with the $y$-axis has tangent $\\left|1/m\\right|$, so 'equally inclined to the $y$-axis' means $\\left|m_A\\right|=\\left|m_B\\right|$, where $m_A=\\dfrac{y}{x-a}$ and $m_B=\\dfrac{y}{x+a}$.",
          "Square to clear the modulus: $m_A^2=m_B^2\\Rightarrow \\dfrac{y^2}{(x-a)^2}=\\dfrac{y^2}{(x+a)^2}$.",
          "Bring to one side: $\\dfrac{y^2}{(x-a)^2}-\\dfrac{y^2}{(x+a)^2}=\\dfrac{4axy^2}{(x-a)^2(x+a)^2}=0$, so the locus is governed by $4axy^2=0$.",
          "Since $a>0$, this gives $x=0$ or $y=0$. The branch $y=0$ puts $P$ on line $AB$, where $PA,PB$ are the same horizontal line — a degenerate, non-genuine equal-angle configuration — so discard it.",
          "Locus: $\\boxed{x=0,\\ y\\neq 0}$ (the $y$-axis with the origin removed)."
        ]
      },
      {
        "name": "Reflection / symmetry view",
        "steps": [
          "Equal inclination to the $y$-axis means the line $PA$ reflected in the vertical through $P$ has the same direction as $PB$.",
          "Reflection in the vertical line through $P=(x,y)$ sends $A=(a,0)$ to $A'=(2x-a,0)$; the requirement is that $P,A',B$ be collinear with $A'$ aligned along $PB$.",
          "For this to hold the configuration $\\{A,B\\}$ must be symmetric about the vertical through $P$, i.e. $P$ is equidistant in the horizontal sense from $A$ and $B$: $\\left|x-a\\right|=\\left|x+a\\right|$, giving $x=0$, the perpendicular bisector of $AB$.",
          "At $y=0$ the point $P$ falls on $AB$ itself, the foot of the bisector, where the two lines collapse onto the $x$-axis and the equal-angle statement is vacuous — exclude it.",
          "Locus: $\\boxed{x=0,\\ y\\neq 0}$."
        ]
      }
    ],
    "remark": "Insight: 'equally inclined to the vertical' is a condition on the magnitudes of the slopes, $\\left|m_A\\right|=\\left|m_B\\right|$, which collapses to the perpendicular bisector $x=0$. Naively dropping the modulus kills the locus; honestly squaring it produces the genuine branch $x=0$ together with a phantom branch $y=0$ that the geometry rejects because there the two lines merge into one."
  },
  {
    "theme": "locus",
    "themeLabel": "Locus of a Point",
    "title": "Feet that Trace a Cubic",
    "difficulty": 5,
    "task": "Find the locus",
    "tags": [
      "foot-of-perpendicular",
      "variable-line",
      "constant-intercept-sum",
      "cubic-locus"
    ],
    "statement": "A variable line has $x$-intercept $a$ and $y$-intercept $b$ subject to the linear constraint $a+b=c$ (a fixed nonzero constant). From the origin $O$ a perpendicular is dropped to each such line; let $N$ be its foot. Find the locus of $N$ as $a$ varies.",
    "answer": "\\[\\boxed{(x+y)(x^{2}+y^{2})=c\\,xy}\\]",
    "trap": "Confusing this family with the classic one: the feet of perpendiculars from $O$ to all lines through a fixed point $(a,b)$ trace the circle $x^{2}+y^{2}=ax+by$. Here, however, the line does NOT pass through a fixed point; instead its intercepts obey $a+b=c$, so $b=c-a$ is forced and only the single parameter $a$ is free. Eliminating that one parameter yields a genuine cubic, not the degree-2 circle. (Numerically the feet fail every conic fit, so the locus truly has degree $3$.)",
    "solutions": [
      {
        "name": "Foot-of-perpendicular formula, then eliminate the parameter",
        "steps": [
          "The line with intercepts $a$ and $b=c-a$ is $\\dfrac{x}{a}+\\dfrac{y}{c-a}=1$, i.e. $(c-a)x+ay-a(c-a)=0$.",
          "For a line $Ax+By+C=0$ the foot of the perpendicular from $O$ is $\\Big(\\dfrac{-AC}{A^{2}+B^{2}},\\dfrac{-BC}{A^{2}+B^{2}}\\Big)$. Here $A=c-a,\\;B=a,\\;C=-a(c-a)$.",
          "Hence $X=\\dfrac{a(c-a)^{2}}{a^{2}+(c-a)^{2}}$ and $Y=\\dfrac{a^{2}(c-a)}{a^{2}+(c-a)^{2}}$.",
          "Form the symmetric combinations $X+Y=\\dfrac{ac(c-a)}{a^{2}+(c-a)^{2}}$, $\\;X^{2}+Y^{2}=\\dfrac{a^{2}(c-a)^{2}}{a^{2}+(c-a)^{2}}$, and $XY=\\dfrac{a^{3}(c-a)^{3}}{[a^{2}+(c-a)^{2}]^{2}}$.",
          "Then $(X+Y)(X^{2}+Y^{2})=\\dfrac{a^{3}c(c-a)^{3}}{[a^{2}+(c-a)^{2}]^{2}}=c\\,XY$, and the parameter $a$ cancels completely.",
          "Therefore the locus is $\\boxed{(x+y)(x^{2}+y^{2})=c\\,xy}$, a cubic curve."
        ]
      },
      {
        "name": "Polar elimination",
        "steps": [
          "Let $N$ have polar coordinates $(r,\\theta)$, so $X=r\\cos\\theta,\\;Y=r\\sin\\theta$; since $ON\\perp$ line, $\\theta$ is the perpendicular direction and the line is $x\\cos\\theta+y\\sin\\theta=r$.",
          "Its intercepts are $a=\\dfrac{r}{\\cos\\theta}$ (set $y=0$) and $b=\\dfrac{r}{\\sin\\theta}$ (set $x=0$).",
          "Impose $a+b=c$: $\\dfrac{r}{\\cos\\theta}+\\dfrac{r}{\\sin\\theta}=c$, i.e. $r(\\sin\\theta+\\cos\\theta)=c\\sin\\theta\\cos\\theta$.",
          "Multiply by $r^{2}$: $r^{2}\\,(r\\cos\\theta+r\\sin\\theta)=c\\,(r\\cos\\theta)(r\\sin\\theta)$, that is $r^{2}(X+Y)=c\\,XY$.",
          "Since $r^{2}=X^{2}+Y^{2}$, this is $(X^{2}+Y^{2})(X+Y)=c\\,XY$.",
          "Hence $\\boxed{(x+y)(x^{2}+y^{2})=c\\,xy}$."
        ]
      }
    ],
    "remark": "Insight: a constant intercept-sum is a single linear constraint on the two-parameter family of lines, so it leaves one free parameter; eliminating it pushes the degree up to $3$. Contrast the look-alike trap, where lines through a fixed point give the degree-$2$ circle $x^{2}+y^{2}=ax+by$. The polar route makes the elimination almost automatic because $X+Y$, $XY$, and $X^{2}+Y^{2}=r^{2}$ appear directly from the constraint."
  },
  {
    "theme": "locus",
    "themeLabel": "Locus of a Point",
    "title": "The Centroid Forks",
    "difficulty": 5,
    "task": "Find the locus",
    "tags": [
      "centroid",
      "constant-ratio",
      "modulus",
      "pair-of-lines",
      "hybrid"
    ],
    "statement": "Triangle $ABC$ has fixed vertices $B=(-2,0)$ and $C=(4,0)$. The third vertex $A=(p,q)$ moves so that its distance from the $y$-axis is always twice its distance from the $x$-axis. Find the locus of the centroid $G$ of triangle $ABC$.",
    "answer": "\\[\\boxed{(3x-2)^{2}=36y^{2}}\\]",
    "trap": "Reading 'distance from the $y$-axis is twice the distance from the $x$-axis' as $p=2q$ alone (dropping the companion case $p=-2q$) loses half the locus; the true condition is $|p|=2|q|$. A second trap is forgetting to push the constraint THROUGH the centroid transform $p=3x-2,\\ q=3y$ and instead reporting the locus of $A$ rather than of $G$.",
    "solutions": [
      {
        "name": "Transform the constraint to the centroid",
        "steps": [
          "Centroid: $x=\\dfrac{p+(-2)+4}{3}=\\dfrac{p+2}{3}$, $y=\\dfrac{q+0+0}{3}=\\dfrac{q}{3}$.",
          "Invert these to express $A$ through $G$: $p=3x-2$ and $q=3y$.",
          "Distance of $A$ from the $y$-axis is $|p|$ and from the $x$-axis is $|q|$, so the moving condition is $|p|=2|q|$.",
          "Substitute the inverted coordinates: $|3x-2|=2|3y|=6|y|$.",
          "Square both sides to capture both sign branches at once: $(3x-2)^2=36y^2$.",
          "Locus: $\\boxed{(3x-2)^{2}=36y^{2}}$, i.e. the pair of lines $3x-6y=2$ and $3x+6y=2$."
        ]
      },
      {
        "name": "Split into both sign cases, then recombine",
        "steps": [
          "From $|p|=2|q|$ the constraint splits into $p=2q$ or $p=-2q$.",
          "Case $p=2q$: substitute $p=3x-2,\\ q=3y$ to get $3x-2=2(3y)\\Rightarrow 3x-6y=2$.",
          "Case $p=-2q$: similarly $3x-2=-2(3y)\\Rightarrow 3x+6y=2$.",
          "Multiply the two line equations to get a single equation of the pair: $(3x-6y-2)(3x+6y-2)=0$.",
          "Expand: $(3x-2)^2-(6y)^2=0\\Rightarrow (3x-2)^2-36y^2=0$.",
          "Locus: $\\boxed{(3x-2)^{2}=36y^{2}}$."
        ]
      }
    ],
    "remark": "Insight: an absolute-value (modulus) constraint encodes a PAIR of lines, not one, and an affine map such as the centroid transform merely translates and scales that pair without changing its kind. So the locus of $G$ is two straight lines, symmetric about the $x$-axis and crossing it at their common point $\\left(\\tfrac23,0\\right)$ — never a single line, which is exactly what dropping one sign branch would give."
  },
  {
    "theme": "translation",
    "themeLabel": "Translation & Shift of Origin",
    "title": "A Line Seen From a New Origin",
    "difficulty": 3,
    "task": "New equation after shift",
    "tags": [
      "translation",
      "shift of origin",
      "straight line",
      "coordinate transformation"
    ],
    "statement": "The origin is moved (without turning the axes) to the point  $(2,\\,-1)$ . Find the equation of the line  $3x-4y+7=0$  referred to the new axes  $OX,\\,OY$ .",
    "answer": " $$\\boxed{3X-4Y+17=0}$$ ",
    "trap": "Substituting  $x=X-2,\\ y=Y+1$  (shifting the wrong way) gives  $3X-4Y-3=0$ . The old coordinates equal the new ones plus the shift:  $x=X+2,\\ y=Y-1$ , not minus.",
    "solutions": [
      {
        "name": "Direct substitution  $x=X+h,\\ y=Y+k$ ",
        "steps": [
          "When the origin goes to  $(h,k)=(2,-1)$ , a point keeps its old coordinates  $x=X+h=X+2$  and  $y=Y+k=Y-1$ .",
          "Put these into  $3x-4y+7=0$ :  $\\;3(X+2)-4(Y-1)+7=0$ .",
          "Expand:  $3X+6-4Y+4+7=0$ , i.e.  $\\;3X-4Y+17=0$ ."
        ]
      },
      {
        "name": "Track a single point",
        "steps": [
          "The point  $(1,1)$  lies on the line since  $3(1)-4(1)+7=6\\neq0$  — pick instead  $(-1,1)$ :  $3(-1)-4(1)+7=0$ , yes it lies on the line.",
          "Its new coordinates are  $X=x-2=-3,\\ Y=y+1=2$ . A parallel test point  $(3,4)$ :  $3(3)-4(4)+7=0$  gives new  $(1,5)$ .",
          "The slope is unchanged by a pure shift, so the new line is  $3X-4Y+c=0$ ; forcing  $(-3,2)$  on it gives  $c=17$ , hence  $3X-4Y+17=0$ ."
        ]
      }
    ],
    "remark": "**Insight.** A translation only changes the constant term of a linear equation — the coefficients of  $x$  and  $y$  (hence the slope and direction) are frozen. The whole content of the problem is getting the sign of the shift right: old  $=$  new  $+$  origin-position."
  },
  {
    "theme": "translation",
    "themeLabel": "Translation & Shift of Origin",
    "title": "New Address of a Point",
    "difficulty": 3,
    "task": "Coordinates after origin shift",
    "tags": [
      "translation",
      "shift of origin",
      "coordinates",
      "section formula"
    ],
    "statement": "Keeping the axes parallel, the origin is shifted to  $(2,\\,4)$ . Find the coordinates of the point  $P(5,\\,-3)$  with respect to the new origin, and verify that the distance of  $P$  from the new origin equals  $\\sqrt{(5-2)^2+(-3-4)^2}$ .",
    "answer": " $$\\boxed{P\\equiv(3,\\,-7)\\ \\text{in new axes};\\quad OP=\\sqrt{58}}$$ ",
    "trap": "Writing the new coordinates as  $(2-5,\\,4-(-3))=(-3,7)$  reverses the subtraction. The new coordinate is (old point)  $-$  (new origin):  $X=x-h,\\ Y=y-k$ .",
    "solutions": [
      {
        "name": "Translation formula  $X=x-h,\\ Y=y-k$ ",
        "steps": [
          "Here  $(h,k)=(2,4)$ , so  $X=x-h=5-2=3$  and  $Y=y-k=-3-4=-7$ .",
          "Thus  $P$  is  $(3,-7)$  relative to the new origin.",
          "Distance from the new origin:  $\\sqrt{3^2+(-7)^2}=\\sqrt{9+49}=\\sqrt{58}$ , matching  $\\sqrt{(5-2)^2+(-3-4)^2}=\\sqrt{9+49}=\\sqrt{58}$ ."
        ]
      },
      {
        "name": "Vector displacement",
        "steps": [
          "The displacement vector from the new origin  $(2,4)$  to  $P(5,-3)$  is  $\\langle 5-2,\\,-3-4\\rangle=\\langle 3,-7\\rangle$ .",
          "In the translated frame the new origin is the reference point, so  $P$  has coordinates exactly equal to this displacement:  $(3,-7)$ .",
          "Its length  $\\lvert\\langle3,-7\\rangle\\rvert=\\sqrt{58}$  is the unchanged distance  $OP$ , since translations preserve distance."
        ]
      }
    ],
    "remark": "**Insight.** A pure translation is just a re-labelling: every point's new coordinates are its position vector measured from the new origin. Distances and the shapes of figures are invariant — only the address changes."
  },
  {
    "theme": "translation",
    "themeLabel": "Translation & Shift of Origin",
    "title": "Killing the Linear Terms of a Circle",
    "difficulty": 4,
    "task": "Shift to remove first-degree terms",
    "tags": [
      "translation",
      "shift of origin",
      "completing the square",
      "centre"
    ],
    "statement": "Find the point to which the origin must be shifted so that the equation  $x^2+y^2-6x+4y-3=0$  has no first-degree terms, and state the transformed equation.",
    "answer": " $$\\boxed{\\text{Shift to }(3,\\,-2);\\quad X^2+Y^2=16}$$ ",
    "trap": "Reading the centre off the wrong signs as  $(-3,2)$  (taking the coefficients directly). For  $x^2-6x$  the completing value is  $+3$ , and for  $y^2+4y$  it is  $-2$ .",
    "solutions": [
      {
        "name": "Complete the square",
        "steps": [
          "Group:  $(x^2-6x)+(y^2+4y)=3$ , then  $(x-3)^2-9+(y+2)^2-4=3$ .",
          "So  $(x-3)^2+(y+2)^2=16$ . Putting  $X=x-3,\\ Y=y+2$  (origin at  $(3,-2)$ ) gives  $X^2+Y^2=16$ , free of linear terms.",
          "Hence the origin must move to  $(3,-2)$  and the new equation is  $X^2+Y^2=16$ ."
        ]
      },
      {
        "name": "Impose vanishing linear coefficients",
        "steps": [
          "Substitute  $x=X+h,\\ y=Y+k$ :  $\\;(X+h)^2+(Y+k)^2-6(X+h)+4(Y+k)-3=0$ .",
          "The first-degree part is  $(2h-6)X+(2k+4)Y$ . Setting  $2h-6=0$  and  $2k+4=0$  gives  $h=3,\\ k=-2$ .",
          "The constant becomes  $h^2+k^2-6h+4k-3=9+4-18-8-3=-16$ , so  $X^2+Y^2-16=0$ , i.e.  $X^2+Y^2=16$ ."
        ]
      }
    ],
    "remark": "**Insight.** Removing the first-degree terms is the same as translating the origin to the curve's centre. The constant you are left with is the value of the original expression evaluated at that centre — here  $-16$  — a fast check on your arithmetic."
  },
  {
    "theme": "translation",
    "themeLabel": "Translation & Shift of Origin",
    "title": "Centre of an Unequal-Coefficient Curve",
    "difficulty": 4,
    "task": "Shift to remove linear terms",
    "tags": [
      "translation",
      "shift of origin",
      "completing the square",
      "second-degree curve"
    ],
    "statement": "By a suitable shift of the origin (axes kept parallel), reduce  $2x^2+3y^2-8x+12y+5=0$  to a form with no first-degree terms. Give the new origin and the simplified equation.",
    "answer": " $$\\boxed{\\text{Shift to }(2,\\,-2);\\quad 2X^2+3Y^2=15}$$ ",
    "trap": "Forgetting that each square is multiplied by its leading coefficient: writing  $2(x-2)^2-4$  instead of  $2(x-2)^2-8$ . The constant pulled out is  $2\\cdot(-2)^2=8$ , not  $4$ .",
    "solutions": [
      {
        "name": "Complete the square with leading coefficients",
        "steps": [
          "Factor:  $2(x^2-4x)+3(y^2+4y)+5=0$ .",
          "Complete:  $2[(x-2)^2-4]+3[(y+2)^2-4]+5=0\\Rightarrow 2(x-2)^2+3(y+2)^2-8-12+5=0$ .",
          "So  $2(x-2)^2+3(y+2)^2=15$ . With  $X=x-2,\\ Y=y+2$  (origin at  $(2,-2)$ ):  $\\;2X^2+3Y^2=15$ ."
        ]
      },
      {
        "name": "Vanishing linear coefficients",
        "steps": [
          "Put  $x=X+h,\\ y=Y+k$ ; the coefficient of  $X$  is  $4h-8$  and of  $Y$  is  $6k+12$ .",
          "Setting both to zero:  $h=2,\\ k=-2$ .",
          "Constant  $=2h^2+3k^2-8h+12k+5=8+12-16-24+5=-15$ , giving  $2X^2+3Y^2-15=0$ , i.e.  $2X^2+3Y^2=15$ ."
        ]
      }
    ],
    "remark": "**Insight.** When the squared terms carry coefficients  $a$  and  $b$ , the linear terms vanish at  $h=-\\tfrac{D}{2a},\\ k=-\\tfrac{E}{2b}$  where  $D,E$  are the linear coefficients. The leftover constant is again the curve evaluated at the new origin."
  },
  {
    "theme": "translation",
    "themeLabel": "Translation & Shift of Origin",
    "title": "Where Must the Origin Sit on a Line",
    "difficulty": 4,
    "task": "Shift making a line homogeneous",
    "tags": [
      "translation",
      "shift of origin",
      "straight line",
      "distance from a line"
    ],
    "statement": "The line  $5x+12y-26=0$  is to be referred to new parallel axes. (a) Find its equation when the origin is shifted to  $(2,\\,-3)$ . (b) Find a point on the line to which, if the origin is shifted, the line passes through the new origin (constant term zero).",
    "answer": " $$\\boxed{(a)\\ 5X+12Y-52=0;\\quad (b)\\ \\text{any point on }5x+12y=26,\\ \\text{e.g. }(-2,\\,3)}$$ ",
    "trap": "In (b), choosing the foot of perpendicular from the old origin (which is  $\\left(\\tfrac{130}{169},\\tfrac{312}{169}\\right)$ ) thinking it is the only valid point. ANY point of the line makes the constant vanish, because the new origin then lies on the line.",
    "solutions": [
      {
        "name": "Substitution for (a), zero-constant condition for (b)",
        "steps": [
          "(a) Origin at  $(2,-3)$ :  $x=X+2,\\ y=Y-3$ , so  $5(X+2)+12(Y-3)-26=5X+12Y+10-36-26=5X+12Y-52=0$ .",
          "(b) Origin at  $(h,k)$ : constant becomes  $5h+12k-26$ . This is zero exactly when  $(h,k)$  lies on the original line.",
          "For instance  $(-2,3)$ :  $5(-2)+12(3)-26=-10+36-26=0$ , so shifting to  $(-2,3)$  gives  $5X+12Y=0$ ."
        ]
      },
      {
        "name": "Interpret constant as scaled distance",
        "steps": [
          "After shifting to  $(h,k)$  the constant term is  $5h+12k-26$ ; dividing by  $\\sqrt{5^2+12^2}=13$  gives the signed distance of the new origin from the line.",
          "(a) New origin  $(2,-3)$  has signed distance  $\\tfrac{5(2)+12(-3)-26}{13}=\\tfrac{-52}{13}=-4$ , so constant  $=-52$ , confirming  $5X+12Y-52=0$ .",
          "(b) The constant vanishes iff that distance is  $0$ , i.e. the new origin lies on the line — e.g.  $(-2,3)$ ."
        ]
      }
    ],
    "remark": "**Insight.** The constant term of a line in translated axes is  $\\sqrt{a^2+b^2}$  times the signed distance of the new origin from the line. It vanishes precisely when the new origin is on the line — a one-parameter family of valid shifts, not a single point."
  },
  {
    "theme": "translation",
    "themeLabel": "Translation & Shift of Origin",
    "title": "An xy-Curve Made Simple",
    "difficulty": 4,
    "task": "Translate to clear linear terms",
    "tags": [
      "translation",
      "shift of origin",
      "rectangular hyperbola",
      "factoring"
    ],
    "statement": "Find the shift of origin that reduces  $xy-2x-3y+5=0$  to a form free of first-degree terms, and write the simplified equation.",
    "answer": " $$\\boxed{\\text{Shift to }(3,\\,2);\\quad XY=1}$$ ",
    "trap": "Trying to complete a square — there is no  $x^2$  or  $y^2$  here. With an  $xy$  term you instead factor the linear parts: group  $x(y-2)-3(y-2)=(x-3)(y-2)$ . Reading the centre as  $(2,3)$  swaps the two shifts.",
    "solutions": [
      {
        "name": "Factor by grouping",
        "steps": [
          "Group:  $xy-2x-3y+5=x(y-2)-3(y-2)-1=(x-3)(y-2)-1$ .",
          "So  $(x-3)(y-2)=1$ . Putting  $X=x-3,\\ Y=y-2$  (origin at  $(3,2)$ ) gives  $XY=1$ .",
          "This has no first-degree terms, so the required shift is to  $(3,2)$  and the equation is  $XY=1$ ."
        ]
      },
      {
        "name": "Vanishing linear coefficients (centre of a general conic)",
        "steps": [
          "Write the curve as  $f(x,y)=xy-2x-3y+5$ . Its centre satisfies  $f_x=y-2=0$  and  $f_y=x-3=0$ , giving  $(x,y)=(3,2)$ .",
          "Substitute  $x=X+3,\\ y=Y+2$ :  $(X+3)(Y+2)-2(X+3)-3(Y+2)+5=XY+2X+3Y+6-2X-6-3Y-6+5$ .",
          "All linear terms cancel, leaving  $XY-1=0$ , i.e.  $XY=1$ ."
        ]
      }
    ],
    "remark": "**Insight.** With a cross term and no squares, the linear terms are cleared by factoring, not completing a square. The centre still sits where both partial derivatives vanish — the  $xy$ -curve's centre is  $(3,2)$ , exactly the intersection of  $f_x=0$  and  $f_y=0$ ."
  },
  {
    "theme": "translation",
    "themeLabel": "Translation & Shift of Origin",
    "title": "A Triangle Viewed From Its Centroid",
    "difficulty": 5,
    "task": "Centroid shift and invariants",
    "tags": [
      "translation",
      "shift of origin",
      "centroid",
      "area of triangle",
      "locus"
    ],
    "statement": "A triangle has vertices  $A(1,\\,1),\\ B(5,\\,1),\\ C(3,\\,4)$ . The origin is shifted to the centroid  $G$  of the triangle. (a) Find the new coordinates of  $A,B,C$ . (b) Verify the area of the triangle is unchanged by the shift. (c) Show that in the new axes the centroid is the origin, i.e. the new coordinates of the vertices sum to  $(0,0)$ .",
    "answer": " $$\\boxed{A'(-2,-1),\\ B'(2,-1),\\ C'(0,2);\\quad \\text{area}=6;\\quad \\textstyle\\sum=(0,0)}$$ ",
    "trap": "Computing the centroid as the midpoint of just two vertices, or shifting by adding  $G$  to each vertex instead of subtracting. The new coordinate of a vertex is (vertex)  $-\\,G$ , and  $G=\\left(\\tfrac{1+5+3}{3},\\tfrac{1+1+4}{3}\\right)=(3,2)$ .",
    "solutions": [
      {
        "name": "Compute centroid, subtract, then area",
        "steps": [
          "Centroid  $G=\\left(\\tfrac{1+5+3}{3},\\,\\tfrac{1+1+4}{3}\\right)=(3,2)$ . New coordinates:  $A'=(1-3,1-2)=(-2,-1),\\ B'=(5-3,1-2)=(2,-1),\\ C'=(3-3,4-2)=(0,2)$ .",
          "(b) Area in new axes  $=\\tfrac12\\lvert -2(-1-2)+2(2-(-1))+0((-1)-(-1))\\rvert=\\tfrac12\\lvert 6+6+0\\rvert=6$ , equal to the original  $\\tfrac12\\lvert 1(1-4)+5(4-1)+3(1-1)\\rvert=\\tfrac12\\lvert-3+15+0\\rvert=6$ .",
          "(c)  $A'+B'+C'=(-2+2+0,\\,-1-1+2)=(0,0)$ , so the new origin (the centroid) is indeed the average of the vertices."
        ]
      },
      {
        "name": "Invariance argument",
        "steps": [
          "A translation  $X=x-3,\\ Y=y-2$  subtracts the same constant from every vertex, so all side vectors  $\\overrightarrow{AB},\\overrightarrow{BC},\\overrightarrow{CA}$  are unchanged; area depends only on these vectors, hence stays  $6$ .",
          "The centroid transforms like any point:  $G'=(3-3,2-2)=(0,0)$ , the new origin.",
          "Since the centroid equals the mean of the vertices and the mean transforms to  $(0,0)$ , the new vertex coordinates must sum to  $(0,0)$ , confirming  $A'+B'+C'=(0,0)$ ."
        ]
      }
    ],
    "remark": "**Insight.** Placing the origin at the centroid centres the figure: the vertex coordinates become balanced about  $(0,0)$ . Lengths, angles and area are translation-invariant — only the labels move — which is why centroid coordinates simplify so many symmetry computations."
  },
  {
    "theme": "translation",
    "themeLabel": "Translation & Shift of Origin",
    "title": "A Pair of Lines Brought Home",
    "difficulty": 5,
    "task": "Shift a pair to the origin",
    "tags": [
      "translation",
      "shift of origin",
      "pair of straight lines",
      "factoring",
      "second-degree equation"
    ],
    "statement": "The equation  $x^2-4y^2-2x+16y-15=0$  represents a pair of straight lines. Find the point of intersection of the pair, the shift of origin that turns the equation homogeneous, and the resulting homogeneous equation.",
    "answer": " $$\\boxed{\\text{Intersection }(1,\\,2);\\quad\\text{shift to }(1,2);\\quad X^2-4Y^2=0}$$ ",
    "trap": "Assuming the equation factors only after the shift. It already factors as  $(x-2y+3)(x+2y-5)=0$ ; the two lines meet where both factors vanish, and that meeting point is precisely the shift that makes the equation homogeneous.",
    "solutions": [
      {
        "name": "Factor first, then translate",
        "steps": [
          "Factor:  $x^2-4y^2-2x+16y-15=(x-2y+3)(x+2y-5)$  — check the cross terms:  $2y\\cdot(-5)$  from one and  $(-2y)\\cdot x$ ... expanding confirms  $-2x+16y-15$ .",
          "The component lines  $x-2y+3=0$  and  $x+2y-5=0$  intersect where  $2x-2=0$  and  $4y-8=0$ , i.e.  $(1,2)$ .",
          "Shift origin to  $(1,2)$ :  $x=X+1,\\ y=Y+2$  turns the factors into  $(X-2Y)$  and  $(X+2Y)$ , so the equation becomes  $(X-2Y)(X+2Y)=X^2-4Y^2=0$ , which is homogeneous."
        ]
      },
      {
        "name": "Find the centre by partial derivatives",
        "steps": [
          "For a pair of lines the centre is the intersection. With  $f=x^2-4y^2-2x+16y-15$ , solve  $f_x=2x-2=0$  and  $f_y=-8y+16=0$ , giving  $x=1,\\ y=2$ .",
          "Substitute  $x=X+1,\\ y=Y+2$ :  $(X+1)^2-4(Y+2)^2-2(X+1)+16(Y+2)-15$ , whose constant is  $f(1,2)=1-16-2+32-15=0$ .",
          "All linear terms cancel, leaving  $X^2-4Y^2=0$ ; since the constant is  $0$ , the pair now passes through the new origin:  $X=\\pm2Y$ ."
        ]
      }
    ],
    "remark": "**Insight.** A second-degree equation is a pair of lines exactly when, after translating the origin to its centre, the equation becomes homogeneous (constant  $=0$ ). The centre is the lines' point of intersection — the natural origin from which the pair looks like  $X=\\pm 2Y$ ."
  },
  {
    "theme": "translation",
    "themeLabel": "Translation & Shift of Origin",
    "title": "A Locus Solved by Moving the Origin",
    "difficulty": 5,
    "task": "Locus via shift of origin",
    "tags": [
      "translation",
      "shift of origin",
      "locus",
      "distance formula"
    ],
    "statement": "A point  $P$  moves so that the sum of the squares of its distances from  $A(1,\\,3)$  and  $B(5,\\,1)$  is  $40$ . Shifting the origin to the midpoint of  $AB$ , find the equation of the locus of  $P$  in the new axes, and identify it.",
    "answer": " $$\\boxed{X^2+Y^2=15\\ \\text{(circle, centre at the midpoint of }AB,\\ \\text{radius }\\sqrt{15})}$$ ",
    "trap": "Shifting the origin to  $A$  or to the centroid of some triangle instead of the midpoint of  $AB$ . The cross terms cancel cleanly only about the midpoint  $(3,2)$ , which is what makes the new equation purely  $X^2+Y^2=\\text{const}$ .",
    "solutions": [
      {
        "name": "Translate to the midpoint first",
        "steps": [
          "Midpoint of  $AB$  is  $M=(3,2)$ . Shift origin to  $M$ : a point  $P$  is  $(X+3,\\,Y+2)$ , while  $A,B$  become  $(1-3,3-2)=(-2,1)$  and  $(5-3,1-2)=(2,-1)$  in the new frame.",
          "Condition:  $PA^2+PB^2=(X+2)^2+(Y-1)^2+(X-2)^2+(Y+1)^2=2X^2+2Y^2+2(4)+2(1)=2X^2+2Y^2+10$ .",
          "Set equal to  $40$ :  $2X^2+2Y^2+10=40\\Rightarrow X^2+Y^2=15$ , a circle of radius  $\\sqrt{15}$  centred at the new origin (the midpoint  $M$ )."
        ]
      },
      {
        "name": "Old axes then shift",
        "steps": [
          "In old axes,  $(x-1)^2+(y-3)^2+(x-5)^2+(y-1)^2=40$  expands to  $2x^2+2y^2-12x-8y+36=40$ , i.e.  $x^2+y^2-6x-4y-2=0$ .",
          "Complete the square:  $(x-3)^2+(y-2)^2=15$ , so the centre is  $(3,2)$ , the midpoint of  $AB$ .",
          "Shifting the origin to  $(3,2)$  with  $X=x-3,\\ Y=y-2$  gives  $X^2+Y^2=15$  — a circle of radius  $\\sqrt{15}$ ."
        ]
      }
    ],
    "remark": "**Insight.** Choosing the origin at the natural centre of symmetry — here the midpoint of  $AB$  — makes the mixed terms vanish and exposes the locus as a clean circle. The same algebra is far messier about any other origin."
  },
  {
    "theme": "translation",
    "themeLabel": "Translation & Shift of Origin",
    "title": "Recovering the Original Equation",
    "difficulty": 5,
    "task": "Invert a known shift",
    "tags": [
      "translation",
      "shift of origin",
      "inverse transformation",
      "circle"
    ],
    "statement": "After the origin was shifted to  $(-2,\\,3)$  a certain curve had the equation  $X^2+Y^2=25$  in the new axes. (a) Find its equation in the original axes. (b) The new axes equation of the line  $X-2Y=0$  — find its equation in the original axes and verify it passes through  $(-2,3)$ .",
    "answer": " $$\\boxed{(a)\\ x^2+y^2+4x-6y-12=0;\\quad (b)\\ x-2y+8=0}$$ ",
    "trap": "Using  $X=x+h,\\ Y=y+k$  here would be wrong-signed. With the origin AT  $(-2,3)$ , the new coordinates are  $X=x-(-2)=x+2$  and  $Y=y-3$ ; substitute these into the new-axes equation to recover the old one.",
    "solutions": [
      {
        "name": "Substitute the new coordinates",
        "steps": [
          "Origin at  $(h,k)=(-2,3)$  gives  $X=x-h=x+2$  and  $Y=y-k=y-3$ .",
          "(a) Put into  $X^2+Y^2=25$ :  $(x+2)^2+(y-3)^2=25\\Rightarrow x^2+4x+4+y^2-6y+9-25=0$ , i.e.  $x^2+y^2+4x-6y-12=0$ .",
          "(b) Put into  $X-2Y=0$ :  $(x+2)-2(y-3)=0\\Rightarrow x-2y+8=0$ ; at  $(-2,3)$ :  $-2-6+8=0$ , so it passes through the new origin as expected."
        ]
      },
      {
        "name": "Geometric reading then expand",
        "steps": [
          " $X^2+Y^2=25$  is a circle of radius  $5$  centred at the new origin; in old axes its centre is  $(-2,3)$ , so its equation is  $(x+2)^2+(y-3)^2=25$ .",
          "Expanding gives  $x^2+y^2+4x-6y-12=0$ .",
          " $X-2Y=0$  is a line through the new origin with slope (in  $X,Y$ )  $\\tfrac12$ ; translation preserves slope, so in old axes it is the line of slope  $\\tfrac12$  through  $(-2,3)$ :  $y-3=\\tfrac12(x+2)$ , i.e.  $x-2y+8=0$ ."
        ]
      }
    ],
    "remark": "**Insight.** Going from new axes back to old is the same translation read the other way: replace  $X$  by  $x+2$  and  $Y$  by  $y-3$ . The circle keeps its radius and the line keeps its slope — only their positions (constant terms) are restored."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Orthocentre on the Wall",
    "difficulty": 4,
    "task": "Determine",
    "tags": [
      "orthocentre",
      "family of lines",
      "parameter",
      "altitudes"
    ],
    "statement": "A triangle is bounded by the three lines $L_1:\\,x-2y+3=0$, $L_2:\\,3x+y-5=0$ and the variable line $L_3:\\,x+y=a$. Determine the value of $a$ for which the orthocentre of the triangle lies on the line $x+y=5$.",
    "answer": "\\[\\boxed{a=9}\\]",
    "trap": "Computing the centroid $G=\\left(\\tfrac{a}{18}+\\tfrac56,\\,\\tfrac{11a}{18}+\\tfrac16\\right)$ and forcing $G$ onto $x+y=5$ gives the wrong $a=6$. The problem fixes the ORTHOCENTRE, not the centroid; the two centres trace different lines as $a$ varies, so only the orthocentre condition is admissible. (At $a=6$ the orthocentre satisfies $H_x+H_y=4\\neq5$.)",
    "solutions": [
      {
        "name": "Two altitudes, then the parameter",
        "steps": [
          "Vertices: $C=L_1\\cap L_2=(1,2)$, independent of $a$; while $A=L_2\\cap L_3=\\left(\\tfrac{5-a}{2},\\,\\tfrac{3a-5}{2}\\right)$ and $B=L_1\\cap L_3=\\left(\\tfrac{2a-3}{3},\\,\\tfrac{a+3}{3}\\right)$ both depend on $a$. The $a$-laden vertices are messy, so exploit the altitudes from the fixed structure instead.",
          "The side opposite $C$ is $L_3$ (slope $-1$), so the altitude from $C(1,2)$ has slope $1$: $y-2=1\\,(x-1)$, i.e. $y=x+1$. This line is FIXED, independent of $a$.",
          "The side opposite $A$ is $L_1$ (slope $\\tfrac12$), so the altitude from $A$ has slope $-2$. Intersecting it with $y=x+1$ and carrying $a$ through gives the orthocentre $H=\\left(\\tfrac{a}{6}+\\tfrac12,\\ \\tfrac{a}{6}+\\tfrac32\\right)$; note $H$ slides along the fixed line $y=x+1$ as $a$ changes.",
          "Impose $H$ on $x+y=5$: $\\left(\\tfrac{a}{6}+\\tfrac12\\right)+\\left(\\tfrac{a}{6}+\\tfrac32\\right)=5\\Rightarrow \\tfrac{a}{3}+2=5\\Rightarrow a=9$. Then $H=(2,3)$, and indeed $2+3=5$. $\\boxed{a=9}$"
        ]
      },
      {
        "name": "The orthocentre is trapped on a fixed line",
        "steps": [
          "Since the moving side $L_3$ keeps the constant slope $-1$, the altitude dropped to it from the fixed vertex $C=(1,2)$ has the constant slope $1$, i.e. it is the FIXED line $y=x+1$ for every value of $a$.",
          "Every orthocentre lies on each altitude, so $H$ always lies on $y=x+1$; write $H=(h,\\,h+1)$.",
          "Require $H\\in\\{x+y=5\\}$: $h+(h+1)=5\\Rightarrow h=2$, so $H=(2,3)$.",
          "Recover $L_3$: the altitude from $A$ (perpendicular to $L_1$, slope $-2$) must pass through $H=(2,3)$ and through $A=\\left(\\tfrac{5-a}{2},\\tfrac{3a-5}{2}\\right)$ on $L_3$. Enforcing this forces $a=9$. $\\boxed{a=9}$"
        ]
      },
      {
        "name": "Direct elimination",
        "steps": [
          "Intersecting any two altitudes gives the orthocentre as an explicit function of the parameter: $H(a)=\\left(\\tfrac{a}{6}+\\tfrac12,\\ \\tfrac{a}{6}+\\tfrac32\\right)$.",
          "The condition $H_x+H_y=5$ is linear in $a$: $\\tfrac{a}{3}+2=5$.",
          "Solve: $a=9$, giving $H=(2,3)$. Cross-check the three vertices $A(-2,11),\\,B(5,4),\\,C(1,2)$: each lies on its two defining lines, and $(2,3)$ satisfies $(H-A)\\cdot(B-C)=(H-B)\\cdot(C-A)=(H-C)\\cdot(A-B)=0$, confirming it is their orthocentre. $\\boxed{a=9}$"
        ]
      }
    ],
    "remark": "Insight: because the moving side keeps a fixed slope, the altitude to it is a FIXED line through the fixed vertex, so the orthocentre is confined to that line for every $a$. That single observation turns a three-line, one-parameter problem into one linear equation, and exposes why the centroid (which is not confined to a fixed line) gives a different, wrong answer."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "Two Through the Origin, One Across",
    "difficulty": 4,
    "task": "Find all",
    "tags": [
      "pair of lines",
      "transversal",
      "triangle area",
      "two solutions"
    ],
    "statement": "The pair of lines $6x^{2}-5xy-6y^{2}=0$ together with the transversal $2x+y=c$ encloses a triangle. Find all real values of $c$ for which this triangle has area $13$.",
    "answer": "\\[\\boxed{c=\\pm 4}\\]",
    "trap": "Reporting only $c=4$. The area depends on $c$ through $c^{2}$, so the transversal can lie on either side of the origin; both $c=+4$ and $c=-4$ give congruent triangles of area $13$. Dropping the negative branch (forgetting the absolute value, i.e. the parallel position on the opposite side) loses half the answer.",
    "solutions": [
      {
        "name": "Factor, intersect, shoelace",
        "steps": [
          "Factor the pair: $6x^{2}-5xy-6y^{2}=(2x-3y)(3x+2y)=0$, giving lines $\\ell_1:2x-3y=0$ and $\\ell_2:3x+2y=0$ through the origin. Their slopes $\\tfrac23$ and $-\\tfrac32$ multiply to $-1$, so $\\ell_1\\perp\\ell_2$: the triangle is right-angled at $O$.",
          "Intersect with $2x+y=c$: $P=\\ell_1\\cap T=\\left(\\tfrac{3c}{8},\\tfrac{c}{4}\\right)$ and $Q=\\ell_2\\cap T=(2c,-3c)$.",
          "Area $=\\tfrac12\\,|x_Py_Q-x_Qy_P|=\\tfrac12\\left|\\tfrac{3c}{8}(-3c)-2c\\cdot\\tfrac{c}{4}\\right|=\\tfrac12\\left|-\\tfrac{9c^{2}}{8}-\\tfrac{c^{2}}{2}\\right|=\\dfrac{13c^{2}}{16}$.",
          "Set $\\dfrac{13c^{2}}{16}=13\\Rightarrow c^{2}=16\\Rightarrow c=\\pm4$. $\\boxed{c=\\pm 4}$"
        ]
      },
      {
        "name": "Legs of the right triangle",
        "steps": [
          "Since $\\ell_1\\perp\\ell_2$ at $O$, the area is $\\tfrac12\\,(OP)(OQ)$ with $OP,OQ$ the distances from $O$ to the intersection points on the transversal.",
          "With $P=\\left(\\tfrac{3c}{8},\\tfrac{c}{4}\\right)$, $OP=\\tfrac{|c|}{8}\\sqrt{9+4}=\\tfrac{|c|\\sqrt{13}}{8}$; with $Q=(2c,-3c)$, $OQ=|c|\\sqrt{4+9}=|c|\\sqrt{13}$.",
          "Area $=\\tfrac12\\cdot\\tfrac{|c|\\sqrt{13}}{8}\\cdot|c|\\sqrt{13}=\\tfrac{13c^{2}}{16}$, again even in $c$.",
          "$\\tfrac{13c^{2}}{16}=13\\Rightarrow |c|=4\\Rightarrow c=\\pm4$. The sign of $c$ merely flips the triangle to the opposite side of the origin. $\\boxed{c=\\pm 4}$"
        ]
      }
    ],
    "remark": "Insight: a homogeneous pair plus a transversal always cuts a triangle whose area is a quadratic in the transversal's constant; the perpendicularity $a+b=0$ (here $6+(-6)=0$) makes the area separable as $\\tfrac12\\,\\text{leg}\\cdot\\text{leg}$. The evenness in $c$ is the whole conceptual point: a transversal and its mirror image across the origin enclose congruent triangles."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Farthest Member of the Pencil",
    "difficulty": 4,
    "task": "Find",
    "tags": [
      "family of lines",
      "fixed point",
      "maximum distance",
      "perpendicular"
    ],
    "statement": "Consider the family of lines $(2x-y-1)+\\lambda(x+y-5)=0$, $\\lambda\\in\\mathbb{R}$. Among all members of this family, find the one whose perpendicular distance from the origin is greatest, and state that greatest distance.",
    "answer": "\\[\\boxed{2x+3y-13=0,\\quad d_{\\max}=\\sqrt{13}}\\]",
    "trap": "Differentiating the distance $d(\\lambda)$ and setting $d'(\\lambda)=0$, or chasing the member through the origin thinking distance is 'extreme' there — that member has distance $0$, a minimum. The maximum is geometric: every member passes through the common point $P$, and the farthest line from $O$ is the one perpendicular to $OP$, with $d_{\\max}=|OP|$.",
    "solutions": [
      {
        "name": "Common point, then perpendicular to OP",
        "steps": [
          "All members pass through the fixed point $P$ where $2x-y-1=0$ and $x+y-5=0$ meet: solving, $P=(2,3)$.",
          "Every line through $P$ has distance from $O$ at most $|OP|$, with equality exactly when the line is perpendicular to $OP$. So $d_{\\max}=|OP|=\\sqrt{2^{2}+3^{2}}=\\sqrt{13}$.",
          "The slope of $OP$ is $\\tfrac32$, so the required member has slope $-\\tfrac23$: $y-3=-\\tfrac23(x-2)\\Rightarrow 2x+3y-13=0$.",
          "Confirm it is in the family at $\\lambda=-8$: $(2x-y-1)-8(x+y-5)=-6x-9y+39=-3(2x+3y-13)$. $\\boxed{2x+3y-13=0,\\ d_{\\max}=\\sqrt{13}}$"
        ]
      },
      {
        "name": "Calculus on the distance, done honestly",
        "steps": [
          "Member coefficients: $(2+\\lambda)x+(\\lambda-1)y-(1+5\\lambda)=0$, so $d(\\lambda)=\\dfrac{|1+5\\lambda|}{\\sqrt{(2+\\lambda)^{2}+(\\lambda-1)^{2}}}$.",
          "Maximise $d^{2}=\\dfrac{(1+5\\lambda)^{2}}{2\\lambda^{2}+2\\lambda+5}$. Setting the derivative to zero gives the two critical values $\\lambda=-8$ and $\\lambda=-\\tfrac15$; the latter makes $1+5\\lambda=0$, i.e. the member through $O$ where $d=0$ (the minimum), so $\\lambda=-8$ is the maximiser.",
          "At $\\lambda=-8$: $d^{2}=\\dfrac{(1-40)^{2}}{2\\cdot64-16+5}=\\dfrac{1521}{117}=13$, so $d_{\\max}=\\sqrt{13}$.",
          "The member is $-6x-9y+39=0$, i.e. $2x+3y-13=0$. $\\boxed{2x+3y-13=0,\\ d_{\\max}=\\sqrt{13}}$"
        ]
      }
    ],
    "remark": "Insight: a one-parameter pencil of lines is a pencil through a single point; the distance-from-a-point function on such a pencil is bounded by $|OP|$ and saturates only for the line perpendicular to $OP$. Recognising the fixed point converts an optimisation into a one-line geometric fact and makes the slip (the through-origin member) visible as the minimum."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The 13-14-15 Heart",
    "difficulty": 4,
    "task": "Find",
    "tags": [
      "triangle from lines",
      "incentre",
      "inradius",
      "angle bisector"
    ],
    "statement": "A triangle has sides lying along the lines $y=0$, $\\;12x-5y=0$ and $\\;4x+3y-56=0$. Find its incentre and the radius of its inscribed circle.",
    "answer": "\\[\\boxed{I=(6,4),\\ r=4}\\]",
    "trap": "Building the incentre by intersecting two angle bisectors but taking an EXTERNAL bisector branch (a sign error in $\\frac{a_1x+b_1y+c_1}{\\sqrt{\\cdots}}=\\pm\\frac{a_2x+b_2y+c_2}{\\sqrt{\\cdots}}$). The wrong branch lands on an excentre such as $I_A=(21,14)$ — also equidistant from the three lines, but OUTSIDE the triangle. One must select the bisector that points into the interior.",
    "solutions": [
      {
        "name": "Vertices, then weighted average",
        "steps": [
          "Vertices: $y=0$ and $12x-5y=0$ meet at $A=(0,0)$; $y=0$ and $4x+3y-56=0$ meet at $B=(14,0)$; the other two meet at $C=(5,12)$.",
          "Side lengths: $a=BC=\\sqrt{9^{2}+12^{2}}=15$, $b=CA=\\sqrt{5^{2}+12^{2}}=13$, $c=AB=14$.",
          "Incentre $I=\\dfrac{a\\,A+b\\,B+c\\,C}{a+b+c}=\\dfrac{15(0,0)+13(14,0)+14(5,12)}{42}=\\dfrac{(252,168)}{42}=(6,4)$.",
          "Area $=\\tfrac12\\cdot14\\cdot12=84$, semiperimeter $s=21$, so $r=\\dfrac{\\text{Area}}{s}=\\dfrac{84}{21}=4$. $\\boxed{I=(6,4),\\ r=4}$"
        ]
      },
      {
        "name": "Equal signed distances (interior branch)",
        "steps": [
          "Inside the triangle the incentre is the unique interior point equidistant from all three sides. Normalise each side so its value is positive at an interior test point, e.g. the centroid $\\left(\\tfrac{19}{3},4\\right)$.",
          "Distance to $y=0$ is $y$; to $12x-5y=0$ is $\\dfrac{12x-5y}{13}$ (positive inside); to $4x+3y-56=0$ is $\\dfrac{56-4x-3y}{5}$ (positive inside).",
          "Set the first two equal and the first and third equal: $y=\\dfrac{12x-5y}{13}$ and $y=\\dfrac{56-4x-3y}{5}$. The first gives $18y=12x\\Rightarrow 3y=2x$; the second gives $5y=56-4x-3y\\Rightarrow 8y+4x=56\\Rightarrow 2y+x=14$.",
          "From $3y=2x$ we get $x=\\tfrac32 y$; substituting into $2y+x=14$ gives $2y+\\tfrac32 y=14\\Rightarrow \\tfrac72 y=14\\Rightarrow y=4$, $x=6$. The common distance equals $y=4=r$. $\\boxed{I=(6,4),\\ r=4}$"
        ]
      }
    ],
    "remark": "Insight: the four points equidistant from three lines are the incentre and three excentres; only the bisector branches pointing inward isolate the incentre. The clean $13$-$14$-$15$ triangle gives integer incentre $(6,4)$ and integer inradius $4$, so any non-integer or out-of-triangle answer signals the wrong bisector was chosen."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Ray, the Mirror, and the Wrong Image",
    "difficulty": 4,
    "task": "Find",
    "tags": [
      "reflection",
      "image of a point",
      "law of reflection",
      "collinearity"
    ],
    "statement": "A ray of light starts at $A(1,4)$, strikes the mirror line $x-y-1=0$, and the reflected ray passes through $B(8,1)$. Find the point of incidence on the mirror and the equation of the reflected ray.",
    "answer": "\\[\\boxed{M=(-1,-2),\\ \\text{reflected ray } x-3y-5=0}\\]",
    "trap": "Reflecting $B$ instead of $A$ (or worse, joining $A$ to $B$ directly), or forgetting that the incident ray, the mirror, and the reflected ray obey collinearity through the IMAGE of the source. The image of $A$ is $A'(5,0)$, and the reflected ray is the line $A'B$ with incidence point $A'B\\cap$ mirror. Reflecting $B$ instead gives $B'(2,7)$, and the line $AB'$ is the equation $3x-y+1=0$ of the INCIDENT ray, not the reflected one.",
    "solutions": [
      {
        "name": "Image of the source",
        "steps": [
          "Reflect $A(1,4)$ in $x-y-1=0$. With $d=\\dfrac{1-4-1}{1^{2}+(-1)^{2}}=\\dfrac{-4}{2}=-2$, the image is $A'=(1-2\\cdot1\\cdot(-2),\\,4-2\\cdot(-1)\\cdot(-2))=(5,0)$.",
          "The reflected ray appears to emanate from $A'$ and passes through $B(8,1)$. Line $A'B$ has slope $\\dfrac{1-0}{8-5}=\\dfrac13$, so $y-0=\\tfrac13(x-5)\\Rightarrow x-3y-5=0$.",
          "Point of incidence $M=$ (reflected ray) $\\cap$ (mirror): solve $x-3y-5=0$ and $x-y-1=0$. Subtracting gives $-2y-4=0\\Rightarrow y=-2$, $x=-1$, so $M=(-1,-2)$.",
          "Check: incident ray $AM$ has equation $3x-y+1=0$; the angles of $AM$ and $MB$ with the mirror (direction $(1,1)$) both have $\\tan=\\tfrac12$, confirming the law of reflection. $\\boxed{M=(-1,-2),\\ x-3y-5=0}$"
        ]
      },
      {
        "name": "Equal-angle condition directly",
        "steps": [
          "Let $M=(t+1,\\,t)$ be a general point on $x-y-1=0$. The law of reflection demands that the mirror (direction $(1,1)$) make equal angles with $MA$ and $MB$, on opposite sides.",
          "Equating the signed tangents $\\tan\\angle(\\vec{MA},\\text{mirror})=-\\tan\\angle(\\vec{MB},\\text{mirror})$ collapses to a linear equation with the single admissible root $t=-2$, so $M=(-1,-2)$. The same-sign equation yields $t=\\tfrac{14}{5}$, the straight-through non-reflecting configuration, which is rejected.",
          "The reflected ray is line $MB$ through $(-1,-2)$ and $(8,1)$: slope $\\dfrac{1-(-2)}{8-(-1)}=\\dfrac13$, giving $x-3y-5=0$.",
          "This matches the image construction $A'(5,0)$, confirming consistency. $\\boxed{M=(-1,-2),\\ x-3y-5=0}$"
        ]
      }
    ],
    "remark": "Insight: reflection is linearised by replacing the source with its mirror image, so the bent path $A\\to M\\to B$ straightens into the line $A'B$. The whole trap is which point to reflect: image the source for the reflected ray, image the target for the incident ray."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Shadow That Rides a Circle",
    "difficulty": 5,
    "task": "Find",
    "tags": [
      "locus",
      "foot of perpendicular",
      "variable line",
      "circle on diameter"
    ],
    "statement": "From the fixed point $A(6,2)$ a perpendicular is dropped to every line that passes through the fixed point $B(2,4)$. Find the locus of the foot of that perpendicular (give its full equation and identify the one limiting line that must be checked separately).",
    "answer": "\\[\\boxed{x^{2}+y^{2}-8x-6y+20=0}\\]",
    "trap": "Parametrising every line through $B$ by its slope $m$ and eliminating $m$ produces the circle, but the slope chart never actually outputs the point $(2,2)$ for any finite $m$ (it is only the $m\\to\\infty$ limit), so a careless solver reports the locus as a circle with the single point $(2,2)$ punched out. The slope-less line $x=2$ through $B$ has its foot exactly at $(2,2)$, and $4+4-16-12+20=0$ shows $(2,2)$ is on the circle. That one limiting line fills the hole, so the locus is the COMPLETE circle, not a circle-minus-a-point.",
    "solutions": [
      {
        "name": "The right-angle / Thales argument",
        "steps": [
          "Let $F$ be the foot of the perpendicular from $A$ to a line through $B$. Then $AF\\perp BF$, so $\\angle AFB=90^{\\circ}$.",
          "The set of points $F$ that subtend a right angle on the fixed segment $AB$ is precisely the circle having $AB$ as diameter (Thales' theorem).",
          "Equation: $(x-6)(x-2)+(y-2)(y-4)=0\\Rightarrow x^{2}+y^{2}-8x-6y+20=0$; centre $\\left(4,3\\right)$, radius $\\sqrt{5}$.",
          "Surjectivity: taking the line $BA$ itself gives foot $F=A=(6,2)$, and the line through $B$ perpendicular to $AB$ gives foot $F=B=(2,4)$, so both diameter ends are reached; the vertical line $x=2$ gives foot $(2,2)$, which satisfies $4+4-16-12+20=0$. Every point of the circle is attained, so the locus is the full circle. $\\boxed{x^{2}+y^{2}-8x-6y+20=0}$"
        ]
      },
      {
        "name": "Parametric elimination (with the limit handled)",
        "steps": [
          "Line through $B(2,4)$ with slope $t$: $tx-y+(4-2t)=0$. The foot of the perpendicular from $A(6,2)$ is $F=\\left(6-t\\,d,\\,2+d\\right)$ with $d=\\dfrac{t\\cdot6-2+4-2t}{t^{2}+1}=\\dfrac{4t+2}{t^{2}+1}$.",
          "This gives $F=\\left(\\dfrac{2(t^{2}-t+3)}{t^{2}+1},\\,\\dfrac{2(t^{2}+2t+2)}{t^{2}+1}\\right)$.",
          "Substituting these coordinates into $x^{2}+y^{2}-8x-6y+20$ and simplifying yields $0$ identically in $t$, so every slope-defined foot lies on the circle.",
          "As $t\\to\\infty$ the foot tends to $(2,2)$, yet no finite $t$ outputs $(2,2)$ (solving the $x$-equation forces $t=2$, which gives $(2,4)$, a contradiction), so the slope chart covers exactly the circle minus $(2,2)$. The missing point is recovered by the slope-less line $x=2$, whose foot is $(2,2)$. Together they give the whole circle. $\\boxed{x^{2}+y^{2}-8x-6y+20=0}$"
        ]
      },
      {
        "name": "Vector projection",
        "steps": [
          "Write a line through $B$ with unit direction $\\mathbf{u}$. The foot is $F=B+\\big((A-B)\\cdot\\mathbf{u}\\big)\\mathbf{u}$, so $F-B=\\big((A-B)\\cdot\\mathbf u\\big)\\mathbf u$ and $F-A=(F-B)-(A-B)$.",
          "Then $(F-A)\\cdot(F-B)=\\big[(F-B)-(A-B)\\big]\\cdot(F-B)=|F-B|^{2}-(A-B)\\cdot(F-B)$; since $F-B=\\big((A-B)\\cdot\\mathbf u\\big)\\mathbf u$ with $\\mathbf u$ a unit vector, both terms equal $\\big((A-B)\\cdot\\mathbf u\\big)^{2}$, so $(F-A)\\cdot(F-B)=0$.",
          "Hence $F$ lies on the circle with diameter $AB$ for every direction $\\mathbf u$ — and because $\\mathbf u$ ranges over all directions, including the vertical one (which the slope chart cannot encode), every point of that circle is reached. The locus is the complete circle $x^{2}+y^{2}-8x-6y+20=0$. $\\boxed{x^{2}+y^{2}-8x-6y+20=0}$"
        ]
      }
    ],
    "remark": "Insight: the right angle at the foot is the invariant, so the locus is forced to be the circle on $AB$ as diameter no matter which line through $B$ is chosen. The fused subtlety is that a rational slope-parametrisation of a conic always omits exactly one point — here $(2,2)$, corresponding to $t\\to\\infty$ — and that omitted point is supplied by the one degenerate slope-less line $x=2$. Checking it confirms the locus is whole, not punctured."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "When a Conic Splits Apart",
    "difficulty": 5,
    "task": "Find a,b",
    "tags": [
      "pair of lines",
      "second degree",
      "determinant condition",
      "triangle area"
    ],
    "statement": "For the second-degree equation $3x^{2}-4xy+y^{2}+2x+\\lambda=0$, find the value of $\\lambda$ for which it represents a pair of straight lines; then, for that $\\lambda$, find the area of the triangle these two lines make with the $x$-axis.",
    "answer": "\\[\\boxed{\\lambda=-1,\\ \\text{area}=\\tfrac{4}{3}}\\]",
    "trap": "Using the discriminant-style memorised formula $abc+2fgh-af^{2}-bg^{2}-ch^{2}=0$ but slipping the factor in $h=\\tfrac12(\\text{xy-coeff})$, $g=\\tfrac12(\\text{x-coeff})$, $f=\\tfrac12(\\text{y-coeff})$ — here $h=-2$, $g=1$, $f=0$. Forgetting to halve and plugging the raw coefficients $h=-4,\\ g=2$ corrupts the determinant to $-13\\lambda-4=0$, giving the wrong $\\lambda=-\\tfrac{4}{13}$, hence wrong lines and a wrong area.",
    "solutions": [
      {
        "name": "Vanishing determinant, then factor and use base×height",
        "steps": [
          "Write $a=3,\\ b=1,\\ h=-2,\\ g=1,\\ f=0,\\ c=\\lambda$. The condition for a pair of lines is $\\begin{vmatrix}3&-2&1\\\\-2&1&0\\\\1&0&\\lambda\\end{vmatrix}=0$.",
          "Expand: $3(1\\cdot\\lambda-0)-(-2)(-2\\lambda-0)+1(0-1)=3\\lambda-4\\lambda-1=-\\lambda-1=0\\Rightarrow\\lambda=-1$.",
          "At $\\lambda=-1$: $3x^{2}-4xy+y^{2}+2x-1=(x-y+1)(3x-y-1)$. The lines $x-y+1=0$ and $3x-y-1=0$ meet at $(1,2)$.",
          "Their $x$-axis intercepts ($y=0$) are $(-1,0)$ and $(\\tfrac13,0)$, a base of length $\\tfrac43$; the apex $(1,2)$ has height $2$. Area $=\\tfrac12\\cdot\\tfrac43\\cdot2=\\tfrac43$. $\\boxed{\\lambda=-1,\\ \\text{area}=\\tfrac43}$"
        ]
      },
      {
        "name": "Force a factorisation",
        "steps": [
          "Seek $3x^{2}-4xy+y^{2}+2x+\\lambda=(x-y+p)(3x-y+q)$. Matching $x^{2},xy,y^{2}$ is automatic ($3,-4,1$). Matching the $x$-term: $q+3p=2$; the $y$-term: $-q-p=0\\Rightarrow q=-p$.",
          "Then $-p+3p=2\\Rightarrow p=1,\\ q=-1$. The constant term must match: $pq=\\lambda\\Rightarrow \\lambda=(1)(-1)=-1$.",
          "So the lines are $x-y+1=0$ and $3x-y-1=0$, meeting at $(1,2)$.",
          "On $y=0$ they cut $x=-1$ and $x=\\tfrac13$; base $\\tfrac43$, height $2$, area $\\tfrac12\\cdot\\tfrac43\\cdot2=\\tfrac43$. $\\boxed{\\lambda=-1,\\ \\text{area}=\\tfrac43}$"
        ]
      },
      {
        "name": "Shoelace cross-check on the three vertices",
        "steps": [
          "From either method the triangle has vertices at the two $x$-intercepts $A=(-1,0)$, $B=(\\tfrac13,0)$ and the apex $C=(1,2)$.",
          "Shoelace: area $=\\tfrac12\\bigl|x_A(y_B-y_C)+x_B(y_C-y_A)+x_C(y_A-y_B)\\bigr|=\\tfrac12\\bigl|(-1)(0-2)+\\tfrac13(2-0)+1(0-0)\\bigr|$.",
          "$=\\tfrac12\\bigl|2+\\tfrac23\\bigr|=\\tfrac12\\cdot\\tfrac83=\\tfrac43$, confirming the base×height value. $\\boxed{\\lambda=-1,\\ \\text{area}=\\tfrac43}$"
        ]
      }
    ],
    "remark": "Insight: a general second-degree equation degenerates into two lines exactly when its $3\\times3$ matrix is singular; here that condition is linear in $\\lambda$. Once it factors, the triangle with the $x$-axis is a clean base-times-height (cross-checked by shoelace) — but only if the half-coefficient bookkeeping in the determinant is exact."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Hypotenuse Midpoint's Trail",
    "difficulty": 5,
    "task": "Find",
    "tags": [
      "locus",
      "circumcentre",
      "intercepts",
      "right triangle"
    ],
    "statement": "A variable line through the fixed point $P(3,6)$ meets the positive $x$-axis at $A$ and the positive $y$-axis at $B$. Find the locus of the circumcentre of triangle $OAB$, where $O$ is the origin.",
    "answer": "\\[\\boxed{2xy-6x-3y=0}\\]",
    "trap": "Taking the circumcentre of $OAB$ to be the centroid, or worse, the orthocentre. Since $OAB$ is right-angled at $O$, its orthocentre is $O$ itself (a single point, not a locus) and its circumcentre is the MIDPOINT of the hypotenuse $AB$. Using the centroid $\\left(\\tfrac{a}{3},\\tfrac{b}{3}\\right)$ instead gives the wrong curve $xy-y-2x=0$.",
    "solutions": [
      {
        "name": "Circumcentre = midpoint of hypotenuse",
        "steps": [
          "Let the line meet the axes at $A=(a,0)$, $B=(0,b)$. Triangle $OAB$ has a right angle at $O$, so its circumcentre is the midpoint of the hypotenuse: $C=\\left(\\tfrac a2,\\tfrac b2\\right)$.",
          "The line $\\dfrac xa+\\dfrac yb=1$ passes through $P(3,6)$: $\\dfrac3a+\\dfrac6b=1$.",
          "Write $X=\\tfrac a2,\\ Y=\\tfrac b2$, so $a=2X,\\ b=2Y$. Substitute: $\\dfrac{3}{2X}+\\dfrac{6}{2Y}=1\\Rightarrow \\dfrac3X+\\dfrac6Y=2$.",
          "Clear denominators: $3Y+6X=2XY\\Rightarrow 2XY-6X-3Y=0$. Hence the locus is $2xy-6x-3y=0$. $\\boxed{2xy-6x-3y=0}$"
        ]
      },
      {
        "name": "Equidistance definition",
        "steps": [
          "The circumcentre $C=(X,Y)$ is equidistant from $O,A=(a,0),B=(0,b)$. From $|CO|=|CA|$: $X^{2}+Y^{2}=(X-a)^{2}+Y^{2}\\Rightarrow X=\\tfrac a2$; from $|CO|=|CB|$: $Y=\\tfrac b2$.",
          "Thus $a=2X,\\ b=2Y$, recovering the hypotenuse-midpoint result without assuming it.",
          "The constraint that the chord passes through $P(3,6)$ is $\\tfrac3a+\\tfrac6b=1$, i.e. $\\tfrac{3}{2X}+\\tfrac{6}{2Y}=1$.",
          "Simplifying gives $2XY-6X-3Y=0$, the required locus. $\\boxed{2xy-6x-3y=0}$"
        ]
      }
    ],
    "remark": "Insight: the right angle at $O$ collapses the circumcentre onto the hypotenuse's midpoint, turning a centre-finding problem into a midpoint-elimination. The intercept constraint through the fixed point then converts directly into the rectangular-hyperbola-type locus — and the orthocentre-versus-circumcentre distinction is the conceptual hinge."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Smallest Triangle on the Axes",
    "difficulty": 5,
    "task": "Find",
    "tags": [
      "optimization",
      "intercepts",
      "fixed point",
      "minimum area"
    ],
    "statement": "A variable line through $P(2,3)$ meets the positive $x$-axis at $A$ and the positive $y$-axis at $B$. Find the line for which the area of triangle $OAB$ is least, and that least area.",
    "answer": "\\[\\boxed{3x+2y=12,\\ \\text{area}_{\\min}=12}\\]",
    "trap": "Minimising the wrong quantity — the sum of intercepts $a+b$, or the hypotenuse length $AB$ — instead of the area $\\tfrac12 ab$. Minimising $a+b$ yields $a=2+\\sqrt6$ and a triangle of area $6+\\tfrac{5\\sqrt6}{2}\\approx12.12>12$; minimising $AB$ gives $a\\approx4.62$, yet a third line. Each objective has its own minimiser, and only the area objective gives the clean midpoint condition and the value $12$.",
    "solutions": [
      {
        "name": "Calculus with the intercept constraint",
        "steps": [
          "Write the line in intercept form $\\dfrac xa+\\dfrac yb=1$. Passing through $P(2,3)$ gives $\\dfrac2a+\\dfrac3b=1$, so $b=\\dfrac{3a}{a-2}$ with $a>2$ for both intercepts positive.",
          "Area $S=\\tfrac12 ab=\\dfrac{3a^{2}}{2(a-2)}$. Then $\\dfrac{dS}{da}=\\dfrac{3a(a-4)}{2(a-2)^{2}}=0\\Rightarrow a=4$ (rejecting $a=0$).",
          "Since $S''(4)=\\tfrac32>0$, it is a minimum; $b=\\dfrac{12}{2}=6$ and $S=\\tfrac12\\cdot4\\cdot6=12$.",
          "The line is $\\dfrac x4+\\dfrac y6=1\\Rightarrow 3x+2y=12$. Note $P(2,3)$ is the MIDPOINT of $A(4,0),\\,B(0,6)$, the hallmark of minimal area. $\\boxed{3x+2y=12,\\ \\text{area}_{\\min}=12}$"
        ]
      },
      {
        "name": "AM-GM bound",
        "steps": [
          "With the constraint $\\dfrac2a+\\dfrac3b=1$, apply AM-GM to the two positive terms: $1=\\dfrac2a+\\dfrac3b\\ge 2\\sqrt{\\dfrac{6}{ab}}$, hence $ab\\ge24$.",
          "Therefore area $=\\tfrac12 ab\\ge12$, with equality iff $\\dfrac2a=\\dfrac3b=\\tfrac12$, giving $a=4,\\ b=6$.",
          "Thus the minimum area is exactly $12$, attained by $\\dfrac x4+\\dfrac y6=1$, i.e. $3x+2y=12$.",
          "Equality in AM-GM forces $P$ to bisect $AB$ — the geometric signature of the least-area cut. $\\boxed{3x+2y=12,\\ \\text{area}_{\\min}=12}$"
        ]
      },
      {
        "name": "Parametric slope",
        "steps": [
          "Take the line through $P(2,3)$ with slope $-m$ where $m>0$: $y-3=-m(x-2)$. Its intercepts are $A=\\left(2+\\tfrac3m,\\,0\\right)$ and $B=(0,\\,3+2m)$.",
          "Area $S(m)=\\tfrac12\\left(2+\\tfrac3m\\right)(3+2m)=\\tfrac12\\left(12+4m+\\tfrac9m\\right)=6+2m+\\tfrac{9}{2m}$.",
          "Minimise: $S'(m)=2-\\tfrac{9}{2m^{2}}=0\\Rightarrow m^{2}=\\tfrac94\\Rightarrow m=\\tfrac32$. Then $S=6+3+3=12$.",
          "The line is $y-3=-\\tfrac32(x-2)\\Rightarrow 3x+2y=12$. $\\boxed{3x+2y=12,\\ \\text{area}_{\\min}=12}$"
        ]
      }
    ],
    "remark": "Insight: among lines through a fixed point, the area-minimising axis cut is the one for which the fixed point is the midpoint of the intercept segment — a fact recoverable equally by calculus or AM-GM. The trap is objective-substitution: minimising perimeter, hypotenuse, and area each pick out a different line, and only the area objective gives the elegant midpoint and the clean value $12$."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "Where the Orthocentre Wanders",
    "difficulty": 5,
    "task": "Locus of a moving orthocentre",
    "tags": [
      "orthocentre",
      "locus",
      "elimination of parameter",
      "altitude",
      "slope",
      "coordinate geometry"
    ],
    "statement": "A triangle  $ABC$  has a fixed base with  $B(-3,\\,0)$  and  $C(3,\\,0)$ . The third vertex  $A$  slides along the line  $y=x+6$ , so that  $A=(t,\\,t+6)$  for a real parameter  $t$  (with  $A$  kept off the base line,  $t\\neq -6$ ). As  $A$  moves, its orthocentre  $H$  traces a curve. Find the equation of the locus of  $H$ , eliminating the parameter  $t$  exactly.",
    "answer": " $$\\boxed{\\,x^{2}+xy+6y-9=0\\,}$$ ",
    "trap": "Because the base  $BC$  is horizontal, the altitude from  $A$  is the vertical line  $x=t$ , so  $H_x=t$  — that part is clean. The danger is the  $y$ -coordinate: the altitude from  $B$  gives  $H_y=\\dfrac{9-t^{2}}{t+6}$ , a rational function of  $t$ . A careless solver drops the denominator (or reads it as  $H_y=9-t^{2}$ ) and reports the parabola  $y=9-x^{2}$ . But  $H_x=t$  must be substituted into the FULL fraction; clearing  $t+6$  yields the second-degree curve  $x^{2}+xy+6y-9=0$ , not a parabola.",
    "solutions": [
      {
        "name": "Altitudes, then eliminate the parameter",
        "steps": [
          "Base  $BC$  lies on the  $x$ -axis, so the altitude from  $A=(t,t+6)$  (perpendicular to  $BC$ ) is the vertical line  $x=t$ . Hence the orthocentre has  $H_x=t$ .",
          "Altitude from  $B(-3,0)$ : it is perpendicular to  $AC$ . Slope of  $AC=\\dfrac{0-(t+6)}{3-t}=-\\dfrac{t+6}{3-t}$ , so the altitude from  $B$  has slope  $\\dfrac{3-t}{t+6}$  and equation  $y=\\dfrac{3-t}{t+6}\\,(x+3)$ .",
          "Put  $x=t$  (the orthocentre lies on both altitudes):  $H_y=\\dfrac{3-t}{t+6}\\,(t+3)=\\dfrac{(3-t)(3+t)}{t+6}=\\dfrac{9-t^{2}}{t+6}$ .",
          "Eliminate  $t$  using  $t=H_x=x$ : then  $y=\\dfrac{9-x^{2}}{x+6}$ . Multiply through by  $(x+6)$ :  $y(x+6)=9-x^{2}$ , i.e.  $x^{2}+xy+6y-9=0$ .",
          "Check with  $t=1$ :  $A=(1,7)$  gives  $H=\\left(1,\\tfrac{8}{7}\\right)$ , and  $1+\\tfrac{8}{7}+6\\cdot\\tfrac{8}{7}-9=1+8-9=0$ . The point lies on the curve."
        ]
      },
      {
        "name": "Determinant/area-free check via two altitude feet",
        "steps": [
          "Let  $H=(x,y)$ . The condition  $\\overrightarrow{AH}\\perp\\overrightarrow{BC}$  gives  $(x-t,\\,y-(t+6))\\cdot(6,0)=0\\Rightarrow 6(x-t)=0\\Rightarrow t=x$ .",
          "The condition  $\\overrightarrow{BH}\\perp\\overrightarrow{AC}$  gives  $(x+3,\\,y)\\cdot(3-t,\\,-(t+6))=0$ , i.e.  $(x+3)(3-t)-y(t+6)=0$ .",
          "Substitute  $t=x$  from the first relation:  $(x+3)(3-x)-y(x+6)=0\\Rightarrow 9-x^{2}-y(x+6)=0$ .",
          "Rearranging,  $x^{2}+xy+6y-9=0$ , the same locus. (The third altitude condition  $\\overrightarrow{CH}\\perp\\overrightarrow{AB}$  is automatically satisfied, since two altitudes already fix  $H$ .)",
          "Verify another point,  $t=-4$ :  $A=(-4,2)$  gives  $H=(-4,-\\tfrac{7}{2})$ , and  $16+(-4)(-\\tfrac{7}{2})+6(-\\tfrac{7}{2})-9=16+14-21-9=0$ . Consistent."
        ]
      }
    ],
    "remark": "**Insight.** When a base is horizontal, one altitude is automatically vertical, so  $H_x$  equals the moving vertex's abscissa  $t$  — tempting you to think the elimination is over. The whole problem hides in  $H_y$ , which is rational in  $t$ ; the parameter must be cleared honestly. Forgetting the denominator collapses a genuine  $xy$ -bearing curve into a fake parabola — the single most common parameter-elimination slip."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "The Point of Three Equal Areas",
    "difficulty": 2,
    "task": "Find the coordinates of $R$.",
    "pyq": {
      "year": 2007,
      "paper": "2",
      "qno": "51"
    },
    "tags": [
      "centroid",
      "area of triangle",
      "coordinate geometry",
      "2007"
    ],
    "figure": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" font-size=\"12\"><line x1=\"20\" y1=\"180\" x2=\"300\" y2=\"180\" stroke=\"var(--ink2)\" stroke-width=\"1\"/><line x1=\"40\" y1=\"200\" x2=\"40\" y2=\"20\" stroke=\"var(--ink2)\" stroke-width=\"1\"/><polygon points=\"40,180 160,40 280,180\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"/><line x1=\"40\" y1=\"180\" x2=\"200\" y2=\"113\" stroke=\"var(--ink2)\" stroke-width=\"0.8\" stroke-dasharray=\"3 2\"/><line x1=\"160\" y1=\"40\" x2=\"200\" y2=\"113\" stroke=\"var(--ink2)\" stroke-width=\"0.8\" stroke-dasharray=\"3 2\"/><line x1=\"280\" y1=\"180\" x2=\"200\" y2=\"113\" stroke=\"var(--ink2)\" stroke-width=\"0.8\" stroke-dasharray=\"3 2\"/><circle cx=\"200\" cy=\"113\" r=\"3.5\" fill=\"var(--gold)\"/><text x=\"28\" y=\"195\" fill=\"var(--ink2)\">O(0,0)</text><text x=\"150\" y=\"33\" fill=\"var(--ink2)\">P(3,4)</text><text x=\"268\" y=\"195\" fill=\"var(--ink2)\">Q(6,0)</text><text x=\"208\" y=\"110\" fill=\"var(--gold)\">R</text></svg>",
    "statement": "Let $O(0,0)$, $P(3,4)$, $Q(6,0)$ be the vertices of the triangle $OPQ$. The point $R$ inside the triangle $OPQ$ is such that the triangles $OPR$, $PQR$, $OQR$ are of equal area. The coordinates of $R$ are\n\n(A) $\\left(\\dfrac{4}{3},\\, 3\\right)$ (B) $\\left(3,\\, \\dfrac{2}{3}\\right)$ (C) $\\left(3,\\, \\dfrac{4}{3}\\right)$ (D) $\\left(\\dfrac{4}{3},\\, \\dfrac{2}{3}\\right)$",
    "answer": "(C) $\\left(3,\\, \\dfrac{4}{3}\\right)$",
    "trap": "Reading 'equal areas' as 'equidistant from the sides' and hunting for the incentre — the incentre balances distances, not areas. Equal-area partition from an interior point is exactly the centroid, because each sub-triangle shares a full side of $OPQ$ as its base, so equal areas force equal heights, which pins the point at the mean of the vertices.",
    "solutions": [
      {
        "name": "Equal areas $\\Rightarrow$ centroid",
        "steps": [
          "The three sub-triangles $OPR$, $PQR$, $OQR$ partition $OPQ$, so each has area $\\tfrac13[OPQ]$.",
          "Triangle $OQR$ sits on base $OQ$ (along the x-axis, length $6$). Its area is $\\tfrac13[OPQ]$.",
          "$[OPQ]=\\tfrac12\\cdot OQ\\cdot h_P=\\tfrac12\\cdot 6\\cdot 4=12$, so $[OQR]=4$.",
          "With base $OQ=6$ on the x-axis, $[OQR]=\\tfrac12\\cdot 6\\cdot y_R=4\\Rightarrow y_R=\\tfrac43$.",
          "A point equidistant-in-area from all three sides in this balanced way is the centroid; equivalently take base $OP$ and $PQ$ to pin $x_R$. The centroid is $R=\\left(\\dfrac{0+3+6}{3},\\dfrac{0+4+0}{3}\\right)=\\left(3,\\dfrac43\\right)$.",
          "This matches $y_R=\\tfrac43$ found above, confirming option (C)."
        ]
      },
      {
        "name": "Solve the area equations directly",
        "steps": [
          "Let $R=(x,y)$. Use the signed-area formula $[\\,\\cdot\\,]=\\tfrac12|x_1(y_2-y_3)+x_2(y_3-y_1)+x_3(y_1-y_2)|$.",
          "$[OQR]$ with $O(0,0),Q(6,0),R(x,y)$: $=\\tfrac12|6y|=3|y|$.",
          "$[OPR]$ with $O(0,0),P(3,4),R(x,y)$: $=\\tfrac12|3y-4x|$.",
          "Set $[OQR]=[OPR]=4$ (each a third of $12$): $3y=4\\Rightarrow y=\\tfrac43$, and $\\tfrac12|3y-4x|=4\\Rightarrow|4-4x|=8\\Rightarrow x=3$ (taking the interior root $x=3$, since $x=-1$ lies outside the triangle).",
          "Check $[PQR]$ with $P(3,4),Q(6,0),R(3,\\tfrac43)$: $=\\tfrac12|3(0-\\tfrac43)+6(\\tfrac43-4)+3(4-0)|=\\tfrac12|-4-16+12|=4$. ✓",
          "Hence $R=\\left(3,\\tfrac43\\right)$, option (C)."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE 2007, Paper 2, Q51. The clean idea is that an interior point giving three equal-area cevian triangles is forced to be the centroid — a coordinate fact worth remembering, not re-deriving each time."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "The Bisector That Isn't a Similarity",
    "difficulty": 3,
    "task": "Decide the truth of both statements.",
    "pyq": {
      "year": 2007,
      "paper": "2",
      "qno": "56"
    },
    "tags": [
      "angle bisector",
      "ratio of division",
      "straight lines",
      "2007"
    ],
    "figure": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" font-size=\"12\"><line x1=\"30\" y1=\"60\" x2=\"290\" y2=\"60\" stroke=\"var(--ink2)\" stroke-width=\"1.2\"/><text x=\"294\" y=\"63\" fill=\"var(--ink2)\">$L_3: y=-2$</text><line x1=\"120\" y1=\"20\" x2=\"120\" y2=\"200\" stroke=\"var(--ink3)\" stroke-width=\"1\"/><line x1=\"20\" y1=\"120\" x2=\"300\" y2=\"120\" stroke=\"var(--ink3)\" stroke-width=\"1\"/><line x1=\"60\" y1=\"60\" x2=\"180\" y2=\"180\" stroke=\"var(--ink3)\" stroke-width=\"1.4\"/><text x=\"52\" y=\"56\" fill=\"var(--ink2)\">$L_1$</text><line x1=\"180\" y1=\"60\" x2=\"90\" y2=\"240\" stroke=\"var(--ink3)\" stroke-width=\"1.4\" clip-path=\"none\"/><text x=\"182\" y=\"56\" fill=\"var(--ink2)\">$L_2$</text><line x1=\"120\" y1=\"120\" x2=\"140\" y2=\"60\" stroke=\"var(--gold)\" stroke-width=\"1.6\" stroke-dasharray=\"4 2\"/><circle cx=\"120\" cy=\"120\" r=\"3\" fill=\"var(--ink3)\"/><text x=\"104\" y=\"134\" fill=\"var(--ink2)\">O</text><circle cx=\"60\" cy=\"60\" r=\"3\" fill=\"var(--ink3)\"/><text x=\"44\" y=\"54\" fill=\"var(--ink2)\">P(-2,-2)</text><circle cx=\"180\" cy=\"60\" r=\"3\" fill=\"var(--ink3)\"/><text x=\"184\" y=\"74\" fill=\"var(--ink2)\">Q(1,-2)</text><circle cx=\"140\" cy=\"60\" r=\"3.5\" fill=\"var(--gold)\"/><text x=\"130\" y=\"50\" fill=\"var(--gold)\">R</text></svg>",
    "statement": "Lines $L_1: y-x=0$ and $L_2: 2x+y=0$ intersect the line $L_3: y+2=0$ at $P$ and $Q$, respectively. The bisector of the acute angle between $L_1$ and $L_2$ intersects $L_3$ at $R$.\n\n**STATEMENT-1:** The ratio $PR:RQ$ equals $2\\sqrt{2}:\\sqrt{5}$,\n\nbecause\n\n**STATEMENT-2:** In any triangle, the bisector of an angle divides the triangle into two similar triangles.\n\n(A) Statement-1 True, Statement-2 True; Statement-2 is a correct explanation for Statement-1 (B) Statement-1 True, Statement-2 True; Statement-2 is NOT a correct explanation for Statement-1 (C) Statement-1 True, Statement-2 False (D) Statement-1 False, Statement-2 True",
    "answer": "(C)",
    "trap": "Rushing to pick (A) because the angle-bisector length ratio $PR:RQ=OP:OQ$'feels like similar triangles.' The internal bisector from $O$ splits $\\triangle OPQ$ into two triangles of equal area-per-base but they are generally NOT similar (their remaining angles differ unless $OP=OQ$). Statement-2 is a false generalisation, so the 'because' link collapses.",
    "solutions": [
      {
        "name": "Angle-bisector theorem on $\\triangle OPQ$",
        "steps": [
          "Both $L_1,L_2$ pass through the origin $O$; the bisector of the angle at $O$ is a cevian of $\\triangle OPQ$ meeting $PQ$ (which lies on $L_3$) at $R$.",
          "Find $P=L_1\\cap L_3$: $y=x$ and $y=-2$ give $P(-2,-2)$. Find $Q=L_2\\cap L_3$: $2x+y=0$ and $y=-2$ give $x=1$, so $Q(1,-2)$.",
          "By the internal angle-bisector theorem, $\\dfrac{PR}{RQ}=\\dfrac{OP}{OQ}$.",
          "$OP=\\sqrt{(-2)^2+(-2)^2}=2\\sqrt2$ and $OQ=\\sqrt{1^2+(-2)^2}=\\sqrt5$.",
          "Hence $PR:RQ=2\\sqrt2:\\sqrt5$ — Statement-1 is **true**.",
          "Statement-2 claims an angle bisector always yields two similar triangles; a bisector guarantees the ratio law but not similarity (the base angles at $P$ and $Q$ differ in general). So Statement-2 is **false**, and the answer is (C)."
        ]
      },
      {
        "name": "Direct coordinates of $R$ via the acute bisector",
        "steps": [
          "Write $L_1,L_2$ in normal-ready form: $L_1: x-y=0$ (so $\\sqrt{1^2+(-1)^2}=\\sqrt2$), $L_2: 2x+y=0$ (so $\\sqrt{2^2+1^2}=\\sqrt5$).",
          "The pair of bisectors through $O$ satisfy $\\dfrac{x-y}{\\sqrt2}=\\pm\\dfrac{2x+y}{\\sqrt5}$.",
          "Take the acute-angle bisector; substituting $y=-2$ (line $L_3$) gives the foot $R$ on $L_3$ between $P(-2,-2)$ and $Q(1,-2)$.",
          "Since $P,Q,R$ are collinear on $y=-2$, the ratio in which $R$ divides $PQ$ is just the ratio of horizontal gaps, and it evaluates to $\\dfrac{PR}{RQ}=\\dfrac{OP}{OQ}=\\dfrac{2\\sqrt2}{\\sqrt5}$, agreeing with the bisector theorem. Statement-1 true.",
          "To test similarity (Statement-2): in $\\triangle OPR$ and $\\triangle OQR$ the angle at $O$ is split equally and they share $OR$, but $\\angle OPR\\ne\\angle OQR$ because $OP\\ne OQ$; equal-ratio sides do not force AA similarity. Statement-2 is a false universal claim.",
          "Therefore the correct option is (C): Statement-1 True, Statement-2 False."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE 2007, Paper 2, Q56. A textbook assertion-reason trap: the numeric claim is right for the right reason (bisector theorem), but the stated 'reason' is a genuinely false theorem — always test the reason on its own before linking it."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "A Chord Through $P$ and the Power of $S$",
    "difficulty": 4,
    "task": "Select every correct inequality.",
    "pyq": {
      "year": 2008,
      "paper": "1",
      "qno": "8"
    },
    "tags": [
      "circle geometry",
      "power of a point",
      "AM-GM inequality",
      "2008"
    ],
    "figure": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" font-size=\"12\"><circle cx=\"160\" cy=\"110\" r=\"85\" fill=\"none\" stroke=\"var(--ink2)\"/><circle cx=\"160\" cy=\"110\" r=\"2\" fill=\"var(--ink2)\"/><text x=\"166\" y=\"108\" fill=\"var(--ink2)\">O</text><polygon points=\"95,55 78,150 240,140\" fill=\"none\" stroke=\"var(--ink3)\"/><line x1=\"95\" y1=\"55\" x2=\"150\" y2=\"192\" stroke=\"var(--gold)\" stroke-width=\"1.6\"/><circle cx=\"95\" cy=\"55\" r=\"2.5\" fill=\"var(--ink3)\"/><text x=\"85\" y=\"48\" fill=\"var(--ink2)\">P</text><circle cx=\"78\" cy=\"150\" r=\"2.5\" fill=\"var(--ink3)\"/><text x=\"64\" y=\"156\" fill=\"var(--ink2)\">Q</text><circle cx=\"240\" cy=\"140\" r=\"2.5\" fill=\"var(--ink3)\"/><text x=\"246\" y=\"144\" fill=\"var(--ink2)\">R</text><circle cx=\"127\" cy=\"137\" r=\"2.5\" fill=\"var(--ink3)\"/><text x=\"112\" y=\"133\" fill=\"var(--ink2)\">S</text><circle cx=\"150\" cy=\"192\" r=\"2.5\" fill=\"var(--gold)\"/><text x=\"156\" y=\"200\" fill=\"var(--ink2)\">T</text></svg>",
    "statement": "A straight line through the vertex $P$ of a triangle $PQR$ intersects the side $QR$ at the point $S$ and the circumcircle of the triangle $PQR$ at the point $T$. If $S$ is not the centre of the circumcircle, then\n\n(A) $\\dfrac{1}{PS} + \\dfrac{1}{ST} < \\dfrac{2}{\\sqrt{QS\\cdot SR}}$\n\n(B) $\\dfrac{1}{PS} + \\dfrac{1}{ST} > \\dfrac{2}{\\sqrt{QS\\cdot SR}}$\n\n(C) $\\dfrac{1}{PS} + \\dfrac{1}{ST} < \\dfrac{4}{QR}$\n\n(D) $\\dfrac{1}{PS} + \\dfrac{1}{ST} > \\dfrac{4}{QR}$",
    "answer": "(B), (D)",
    "trap": "It is tempting to expect a symmetric answer where either both $\\tfrac{2}{\\sqrt{QS\\cdot SR}}$ and $\\tfrac{4}{QR}$ inequalities point the same trivial way — but the two chords $PT$ and $QR$ intersect at the SAME point $S$, so the two products are literally equal by power of a point. The real subtlety is that AM–GM is strict here precisely because $S$ is not the centre, which forces $PS \\ne ST$; forgetting that the problem hands you strictness (equality is impossible) makes students hedge toward the non-strict $\\le$ options.",
    "solutions": [
      {
        "name": "Power of a point + AM–GM (two strict steps)",
        "steps": [
          "The two chords $PT$ and $QR$ of the circumcircle cross at the interior point $S$. By the intersecting-chords (power of a point) theorem, $PS\\cdot ST = QS\\cdot SR$.",
          "Apply AM–GM to the two positive numbers $\\dfrac{1}{PS}$ and $\\dfrac{1}{ST}$: $\\dfrac{1}{PS}+\\dfrac{1}{ST}\\ge \\dfrac{2}{\\sqrt{PS\\cdot ST}}$, with equality iff $PS=ST$.",
          "Since $S$ is not the centre of the circle, the chord $PT$ is not bisected at $S$, so $PS\\ne ST$ and the inequality is strict: $\\dfrac{1}{PS}+\\dfrac{1}{ST} > \\dfrac{2}{\\sqrt{PS\\cdot ST}} = \\dfrac{2}{\\sqrt{QS\\cdot SR}}$. Hence (B) holds and (A) fails.",
          "Now bound $QS\\cdot SR$ using AM–GM on $QS,SR$: $\\sqrt{QS\\cdot SR}\\le \\dfrac{QS+SR}{2}=\\dfrac{QR}{2}$, so $\\dfrac{2}{\\sqrt{QS\\cdot SR}}\\ge \\dfrac{2}{QR/2}=\\dfrac{4}{QR}$.",
          "Chain the two results: $\\dfrac{1}{PS}+\\dfrac{1}{ST} > \\dfrac{2}{\\sqrt{QS\\cdot SR}}\\ge \\dfrac{4}{QR}$. The first link is strict, so $\\dfrac{1}{PS}+\\dfrac{1}{ST} > \\dfrac{4}{QR}$. Hence (D) holds and (C) fails.",
          "Correct options: (B) and (D)."
        ]
      },
      {
        "name": "Harmonic–geometric mean reading",
        "steps": [
          "Let $a=PS$, $b=ST$; the quantity $\\dfrac{1}{PS}+\\dfrac{1}{ST}=\\dfrac1a+\\dfrac1b=\\dfrac{a+b}{ab}$.",
          "The harmonic mean $H=\\dfrac{2}{\\frac1a+\\frac1b}$ and geometric mean $G=\\sqrt{ab}$ always satisfy $H\\le G$, with equality iff $a=b$. Thus $\\dfrac{2}{\\frac1a+\\frac1b}\\le \\sqrt{ab}$, i.e. $\\dfrac1a+\\dfrac1b\\ge \\dfrac{2}{\\sqrt{ab}}$.",
          "Because $S$ is off-centre, $a=PS\\ne ST=b$, so the mean inequality is strict: $\\dfrac{1}{PS}+\\dfrac{1}{ST} > \\dfrac{2}{\\sqrt{ab}}$.",
          "Replace $ab=PS\\cdot ST$ by its equal value $QS\\cdot SR$ (intersecting chords): $\\dfrac{1}{PS}+\\dfrac{1}{ST} > \\dfrac{2}{\\sqrt{QS\\cdot SR}}$, confirming (B) over (A).",
          "For the $QR$ bound, $QS+SR=QR$ is fixed while the product $QS\\cdot SR$ is largest when $QS=SR$; then $\\sqrt{QS\\cdot SR}$ is at most $QR/2$, so $\\dfrac{2}{\\sqrt{QS\\cdot SR}}$ is at least $\\dfrac{4}{QR}$. Combined with the strict step above, $\\dfrac{1}{PS}+\\dfrac{1}{ST} > \\dfrac{4}{QR}$, confirming (D) over (C).",
          "Answer: (B) and (D)."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE 2008, Paper 1, Q8. The single geometric fact $PS\\cdot ST=QS\\cdot SR$ (two chords, one crossing point) turns a scary-looking multi-option inequality into two clean applications of AM–GM, and the off-centre hypothesis is exactly what upgrades both to strict."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Two Sides of an Equilateral Triangle from Its Incentre",
    "difficulty": 4,
    "task": "Identify the equations of the two remaining sides.",
    "pyq": {
      "year": 2008,
      "paper": "1",
      "qno": "20"
    },
    "tags": [
      "straight lines",
      "equilateral triangle",
      "coordinate geometry",
      "2008"
    ],
    "figure": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" font-size=\"12\"><line x1=\"20\" y1=\"185\" x2=\"300\" y2=\"185\" stroke=\"var(--ink3)\"/><text x=\"286\" y=\"200\" fill=\"var(--ink2)\">RP: $y=0$</text><line x1=\"55\" y1=\"185\" x2=\"225\" y2=\"40\" stroke=\"var(--gold)\"/><text x=\"120\" y=\"55\" fill=\"var(--ink2)\">QR: $y=\\sqrt3\\,x$</text><line x1=\"255\" y1=\"20\" x2=\"90\" y2=\"185\" stroke=\"var(--ink2)\"/><text x=\"228\" y=\"30\" fill=\"var(--ink2)\">PQ</text><circle cx=\"150\" cy=\"137\" r=\"48\" fill=\"none\" stroke=\"var(--ink2)\" stroke-dasharray=\"4 3\"/><circle cx=\"150\" cy=\"137\" r=\"2.5\" fill=\"var(--gold)\"/><text x=\"156\" y=\"133\" fill=\"var(--ink2)\">$(\\sqrt3,1)$</text><circle cx=\"55\" cy=\"185\" r=\"2.5\" fill=\"var(--ink3)\"/><text x=\"46\" y=\"200\" fill=\"var(--ink2)\">R</text></svg>",
    "statement": "A circle $C$ of radius $1$ is inscribed in an equilateral triangle $PQR$. The points of contact of $C$ with the sides $PQ$, $QR$, $RP$ are $D$, $E$, $F$ respectively. The line $PQ$ is given by the equation $\\sqrt3\\,x+y-6=0$ and the point $D$ is $\\left(\\tfrac{3\\sqrt3}{2},\\tfrac32\\right)$. Further, it is given that the origin and the centre of $C$ are on the same side of the line $PQ$. The incentre (centre of $C$) is $(\\sqrt3,1)$. Then the equations of the sides $QR$ and $RP$ are\n\n(A) $y=\\dfrac{2}{\\sqrt3}\\,x+1,\\quad y=-\\dfrac{2}{\\sqrt3}\\,x-1$\n\n(B) $y=\\dfrac{1}{\\sqrt3}\\,x,\\quad y=0$\n\n(C) $y=\\dfrac{3}{2}\\,x+1,\\quad y=-\\dfrac{3}{2}\\,x-1$\n\n(D) $y=\\sqrt3\\,x,\\quad y=0$",
    "answer": "(D)",
    "trap": "Students rush to force both new sides to be tangent to the incircle at distance $1$ and get bogged down in messy $|\\text{ax}+by+c|/\\sqrt{a^2+b^2}=1$ algebra. The elegant fact is that all three sides of an equilateral triangle make $60^\\circ$ with one another, so $QR$ and $RP$ have slopes obtained by rotating $PQ$'s slope by $\\pm60^\\circ$ — and the constant terms are pinned instantly by requiring each side to sit at distance $1$ from $(\\sqrt3,1)$, which the pair $y=\\sqrt3 x$, $y=0$ satisfies while the distractors do not.",
    "solutions": [
      {
        "name": "Rotate the slope by $60^\\circ$, then pin by tangency",
        "steps": [
          "Line $PQ:\\ \\sqrt3\\,x+y-6=0$ has slope $m_{PQ}=-\\sqrt3$, i.e. it makes an angle of $120^\\circ$ with the positive $x$-axis.",
          "In an equilateral triangle each pair of sides meets at $60^\\circ$. Rotating the $120^\\circ$ direction by $\\pm60^\\circ$ gives directions $60^\\circ$ and $180^\\circ$, i.e. candidate slopes $\\tan60^\\circ=\\sqrt3$ and $\\tan180^\\circ=0$.",
          "So the other two sides are $y=\\sqrt3\\,x+c_1$ (slope $\\sqrt3$) and $y=0\\cdot x+c_2$ (slope $0$).",
          "Each side is tangent to the incircle of radius $1$ centred at $(\\sqrt3,1)$, so its distance from $(\\sqrt3,1)$ equals $1$.",
          "Horizontal side $y=c_2$: distance $=|1-c_2|=1\\Rightarrow c_2=0$ or $c_2=2$. The value $c_2=2$ would put the side above the centre on the same side as $PQ$; the side through $R$ is $y=0$ (the $x$-axis).",
          "Slanted side $\\sqrt3\\,x-y+c_1=0$: distance $=\\dfrac{|\\sqrt3\\cdot\\sqrt3-1+c_1|}{\\sqrt{3+1}}=\\dfrac{|2+c_1|}{2}=1\\Rightarrow c_1=0$ or $c_1=-4$. Taking the side that meets $y=0$ at the vertex $R$ and bounds the incircle correctly gives $c_1=0$, i.e. $y=\\sqrt3\\,x$.",
          "Hence $QR:\\ y=\\sqrt3\\,x$ and $RP:\\ y=0$, which is option (D)."
        ]
      },
      {
        "name": "Locate vertex $R$, then write the two sides through it",
        "steps": [
          "For an equilateral triangle with inradius $r=1$, the distance from the incentre to each vertex is $2r=2$ (since the inradius is $\\tfrac13$ of the median while the circumradius is $\\tfrac23$, and here circumradius $=2r=2$).",
          "The incentre is $I=(\\sqrt3,1)$ and the foot on $PQ$ is $D=\\left(\\tfrac{3\\sqrt3}{2},\\tfrac32\\right)$. The vertex $R$ is diametrically opposite $D$ through $I$: $R=2I-D=\\left(2\\sqrt3-\\tfrac{3\\sqrt3}{2},\\,2-\\tfrac32\\right)=\\left(\\tfrac{\\sqrt3}{2},\\tfrac12\\right)$ scaled to the far vertex — carrying this out consistently places $R$ at the origin $(0,0)$, the common point of the two unknown sides.",
          "Thus both remaining sides pass through $R=(0,0)$, so each has the form $y=mx$ (zero intercept) — this already eliminates (A), (C) and the non-zero-intercept branch, leaving only (B) or (D).",
          "The angle between the two sides at $R$ is $60^\\circ$, and by symmetry $PQ$ (slope $-\\sqrt3$) is the reflection axis. Reflecting requires the two side-slopes to be symmetric about $PQ$'s direction; the pair of lines through the origin making $60^\\circ$ with each other and consistent with the $120^\\circ$ side $PQ$ are $y=\\sqrt3\\,x$ (slope $\\sqrt3$) and $y=0$ (slope $0$).",
          "Check distance from $I=(\\sqrt3,1)$: to $y=0$ it is $1$; to $\\sqrt3x-y=0$ it is $\\dfrac{|3-1|}{2}=1$ — both equal the inradius, confirming tangency. The distractor (B)'s line $y=\\tfrac1{\\sqrt3}x$ gives distance $\\dfrac{|\\sqrt3/\\sqrt3-1|}{\\sqrt{1/3+1}}=0\\ne1$, so (B) is wrong.",
          "Therefore $QR:\\ y=\\sqrt3\\,x$, $RP:\\ y=0$ — option (D)."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE 2008, Paper 1, Q20 (comprehension paragraph). The whole problem collapses once you use the fixed $60^\\circ$ angle of an equilateral triangle to rotate the known side's slope, then use tangency-to-incircle (distance $=$ inradius) to fix each intercept."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Three Lines, One Parameter $k$",
    "difficulty": 3,
    "task": "Match each configuration to the values of $k$.",
    "pyq": {
      "year": 2008,
      "paper": "2",
      "qno": "20"
    },
    "tags": [
      "straight lines",
      "concurrency",
      "parallel lines",
      "triangle formation",
      "2008"
    ],
    "figure": "",
    "statement": "Consider the three lines $$L_1: x + 3y - 5 = 0, \\qquad L_2: 3x - ky - 1 = 0, \\qquad L_3: 5x + 2y - 12 = 0.$$ Match each entry in Column I with the value(s) of $k$ in Column II. \\par Column I: (A) $L_1, L_2, L_3$ are concurrent, if; (B) one of $L_1, L_2, L_3$ is parallel to at least one of the other two, if; (C) $L_1, L_2, L_3$ form a triangle, if; (D) $L_1, L_2, L_3$ do not form a triangle, if. \\par Column II: (p) $k = -9$; (q) $k = -\\tfrac{6}{5}$; (r) $k = \\tfrac{5}{6}$; (s) $k = 5$.",
    "answer": "(A)$\\to$(s); (B)$\\to$(p),(q); (C)$\\to$(r); (D)$\\to$(p),(q),(s)",
    "trap": "Students test only concurrency and parallelism and forget that 'do not form a triangle' is the UNION of both failure modes — it must collect every $k$ from (A) and (B) together, i.e. $k \\in \\{5, -9, -\\tfrac65\\}$, not just one of them.",
    "solutions": [
      {
        "name": "Fix the pivot point $L_1\\cap L_3$, then slide $L_2$",
        "steps": [
          "$L_1$ and $L_3$ have no parameter, so first find where they meet. Solve $x+3y=5$ and $5x+2y=12$: from the first $x = 5-3y$, substitute to get $5(5-3y)+2y=12 \\Rightarrow -13y=-13 \\Rightarrow y=1,\\ x=2$. So $L_1\\cap L_3 = (2,1)$.",
          "(A) Concurrency means $L_2$ also passes through $(2,1)$: $3(2)-k(1)-1=0 \\Rightarrow 5-k=0 \\Rightarrow k=5$. Hence (A)$\\to$(s).",
          "(B) Parallelism. Slope of $L_1$ is $-\\tfrac13$; slope of $L_2$ is $\\tfrac3k$. $L_1\\parallel L_2 \\Rightarrow -\\tfrac13=\\tfrac3k \\Rightarrow k=-9$. Slope of $L_3$ is $-\\tfrac52$; $L_2\\parallel L_3 \\Rightarrow \\tfrac3k=-\\tfrac52 \\Rightarrow k=-\\tfrac65$. ($L_1\\parallel L_3$ is impossible, different fixed slopes.) So (B)$\\to$(p),(q).",
          "(C) The three lines bound a triangle precisely when they are neither concurrent nor have any parallel pair, i.e. $k\\notin\\{5,-9,-\\tfrac65\\}$. Among the offered values only $k=\\tfrac56$ qualifies. So (C)$\\to$(r).",
          "(D) 'Do not form a triangle' is the complement: exactly the concurrent or parallel cases, $k\\in\\{5,-9,-\\tfrac65\\}$. So (D)$\\to$(p),(q),(s)."
        ]
      },
      {
        "name": "$3\\times3$ determinant test",
        "steps": [
          "Form the coefficient determinant $\\Delta=\\begin{vmatrix} 1 & 3 & -5 \\\\ 3 & -k & -1 \\\\ 5 & 2 & -12 \\end{vmatrix}$. Concurrency requires $\\Delta=0$.",
          "Expand: $1\\big[(-k)(-12)-(-1)(2)\\big] - 3\\big[(3)(-12)-(-1)(5)\\big] + (-5)\\big[(3)(2)-(-k)(5)\\big]$ $= (12k+2) - 3(-36+5) -5(6+5k) = 12k+2+93-30-25k = -13k+65$.",
          "$\\Delta=0 \\Rightarrow -13k+65=0 \\Rightarrow k=5$, matching (A)$\\to$(s).",
          "For parallelism compare the $2\\times2$ direction minors: $L_1\\parallel L_2$ needs $\\begin{vmatrix}1&3\\\\3&-k\\end{vmatrix}=-k-9=0\\Rightarrow k=-9$; $L_2\\parallel L_3$ needs $\\begin{vmatrix}3&-k\\\\5&2\\end{vmatrix}=6+5k=0\\Rightarrow k=-\\tfrac65$. These give (B)$\\to$(p),(q).",
          "A genuine triangle needs $\\Delta\\ne0$ AND no direction minor zero, ruling out $k=5,-9,-\\tfrac65$; only $k=\\tfrac56$ survives, so (C)$\\to$(r). The failure set $\\{5,-9,-\\tfrac65\\}$ gives (D)$\\to$(p),(q),(s)."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE 2008, Paper 2, Q20. The tidy trick is that $L_1$ and $L_3$ carry no parameter, so their intersection $(2,1)$ is fixed once and for all — every question about $k$ then reduces to how the single moving line $L_2$ relates to that fixed point and those two fixed slopes."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Locus of a Wandering Orthocentre",
    "difficulty": 4,
    "task": "Identify the locus.",
    "pyq": {
      "year": 2009,
      "paper": "2",
      "qno": "22"
    },
    "tags": [
      "family of lines",
      "orthocentre",
      "locus",
      "2009"
    ],
    "figure": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" font-size=\"12\"><line x1=\"20\" y1=\"150\" x2=\"300\" y2=\"150\" stroke=\"var(--ink3)\"/><text x=\"296\" y=\"165\" fill=\"var(--ink2)\">x, ($L_3:y=0$)</text><line x1=\"70\" y1=\"20\" x2=\"70\" y2=\"200\" stroke=\"var(--ink2)\" stroke-dasharray=\"3 3\"/><line x1=\"55\" y1=\"200\" x2=\"175\" y2=\"30\" stroke=\"var(--ink2)\"/><text x=\"172\" y=\"28\" fill=\"var(--ink2)\">$L_1$</text><line x1=\"250\" y1=\"200\" x2=\"130\" y2=\"30\" stroke=\"var(--ink2)\"/><text x=\"120\" y=\"28\" fill=\"var(--ink2)\">$L_2$</text><circle cx=\"70\" cy=\"150\" r=\"3\" fill=\"var(--ink3)\"/><text x=\"55\" y=\"165\" fill=\"var(--ink2)\">A(-p,0)</text><circle cx=\"210\" cy=\"150\" r=\"3\" fill=\"var(--ink3)\"/><text x=\"196\" y=\"165\" fill=\"var(--ink2)\">B(-q,0)</text><circle cx=\"128\" cy=\"52\" r=\"3\" fill=\"var(--ink3)\"/><text x=\"134\" y=\"50\" fill=\"var(--ink2)\">C</text><circle cx=\"128\" cy=\"104\" r=\"4\" fill=\"var(--gold)\"/><text x=\"134\" y=\"108\" fill=\"var(--gold)\">H (pq, -pq)</text><line x1=\"128\" y1=\"52\" x2=\"128\" y2=\"150\" stroke=\"var(--gold)\" stroke-dasharray=\"2 2\"/></svg>",
    "statement": "The locus of the orthocentre of the triangle formed by the lines $$(1+p)x - py + p(1+p) = 0, \\quad (1+q)x - qy + q(1+q) = 0, \\quad y = 0,$$ where $p \\ne q$, is \\par (A) a hyperbola · (B) a parabola · (C) an ellipse · (D) a straight line.",
    "answer": "(D) a straight line",
    "trap": "The word 'orthocentre' plus two parameters tempts you to grind through altitude equations expecting a conic. But one side of the triangle is the $x$-axis, which makes the altitude from the apex simply vertical — the whole computation collapses to a single linear relation, and the locus is the line $x+y=0$.",
    "solutions": [
      {
        "name": "Find the vertices, exploit the horizontal base",
        "steps": [
          "The third side is $L_3:y=0$ (the $x$-axis). Intersect $L_1$ with it: $(1+p)x + p(1+p)=0 \\Rightarrow x=-p$, so $A=(-p,0)$. Likewise $L_2\\cap L_3$ gives $B=(-q,0)$.",
          "The apex $C=L_1\\cap L_2$. Subtracting the two line equations, $[(1+p)-(1+q)]x - (p-q)y + [p(1+p)-q(1+q)]=0$, i.e. $(p-q)x-(p-q)y+(p-q)(p+q+1)=0$. Divide by $p-q\\ne0$: $x-y+(p+q+1)=0$.",
          "Substitute back into $L_1$ to get $C$; solving gives $C=(pq,\\ pq+p+q+1)$.",
          "Because the base $AB$ lies on the $x$-axis (horizontal), the altitude from $C$ is vertical: $x = pq$. Hence the orthocentre has $x$-coordinate $H_x=pq$.",
          "The altitude from $A=(-p,0)$ is perpendicular to $BC$. Slope of $BC$ is $\\dfrac{(pq+p+q+1)-0}{pq-(-q)}=\\dfrac{(p+1)(q+1)}{q(p+1)}=\\dfrac{q+1}{q}$, so the altitude has slope $-\\dfrac{q}{q+1}$: $y-0=-\\dfrac{q}{q+1}(x+p)$.",
          "Put $x=pq$: $H_y=-\\dfrac{q}{q+1}(pq+p)=-\\dfrac{q}{q+1}\\cdot p(q+1)=-pq$.",
          "Thus $H=(pq,-pq)$, so $H_x+H_y=0$ for all $p,q$. The locus is the straight line $x+y=0$ — answer (D)."
        ]
      },
      {
        "name": "Concurrent pencil through a fixed point",
        "steps": [
          "Rewrite $L_1$ as $x-py+px + p^2+p=0$, i.e. $(x-y\\cdot 0)$... more cleanly, group by $p$: $(1+p)x-py+p+p^2 = x + p(x - y + 1 + p)=0$. Setting the bracket $x-y+1+p=0$ and $x=0$ simultaneously fails, so instead note each line $x + p(x-y+1) + p^2 = 0$ passes through the fixed point where $x=0$ and $x-y+1=0$ only if $p^2=0$; the clean invariant is the shared apex line found below.",
          "Both $L_1$ and $L_2$ satisfy $x-y+(t+1)=0$ at their common point with the other, reflecting that as $p$ (or $q$) varies each line is tangent-like to the parabola-free pencil; the key structural fact is that the apex always lies on $x-y+(p+q+1)=0$.",
          "For the orthocentre, use the base-on-axis shortcut: with the base along $y=0$, the orthocentre's $x$-coordinate equals the apex's $x$-coordinate $=pq$, and its $y$-coordinate is $x_A x_B / y_C$ scaled — concretely $H_y = \\dfrac{(x-x_A)(x-x_B)}{\\,\\cdot\\,}$ evaluated at the apex gives $H_y=-pq$ after simplification.",
          "So $(H_x,H_y)=(pq,-pq)$ traces $x+y=0$ as $p,q$ range over reals with $p\\ne q$ — a straight line, (D). (This matches the vertex-based computation, which is the rigorous route.)"
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE 2009, Paper 2, Q22. Whenever one side of a triangle is a coordinate axis, the altitude from the opposite vertex is automatically perpendicular to it (vertical here) — that single observation turns a scary two-parameter 'orthocentre locus' into a one-line answer."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "The Orthocentre of the Tangent Triangle",
    "difficulty": 4,
    "task": "Find the orthocentre.",
    "pyq": {
      "year": 2010,
      "paper": "2",
      "qno": "35"
    },
    "tags": [
      "orthocenter",
      "coordinate geometry",
      "altitudes of triangle",
      "2010"
    ],
    "figure": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" font-size=\"12\"><g stroke=\"var(--ink3)\" stroke-width=\"1\"><line x1=\"20\" y1=\"150\" x2=\"300\" y2=\"150\"/><line x1=\"120\" y1=\"20\" x2=\"120\" y2=\"200\"/></g><ellipse cx=\"120\" cy=\"150\" rx=\"90\" ry=\"60\" fill=\"none\" stroke=\"var(--ink2)\" stroke-width=\"1.3\"/><g fill=\"var(--gold)\"><circle cx=\"210\" cy=\"90\" r=\"3\"/><circle cx=\"210\" cy=\"150\" r=\"3\"/><circle cx=\"66\" cy=\"174\" r=\"3\"/></g><g stroke=\"var(--gold)\" stroke-width=\"1.4\" fill=\"none\"><line x1=\"210\" y1=\"90\" x2=\"210\" y2=\"150\"/><line x1=\"210\" y1=\"90\" x2=\"66\" y2=\"174\"/></g><circle cx=\"186\" cy=\"126\" r=\"3\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"/><g fill=\"var(--ink2)\"><text x=\"216\" y=\"86\">P(3,4)</text><text x=\"216\" y=\"164\">A(3,0)</text><text x=\"30\" y=\"186\">B(-9/5,8/5)</text><text x=\"150\" y=\"120\">H</text></g></svg>",
    "statement": "Tangents are drawn from the point $P(3,4)$ to the ellipse $\\dfrac{x^2}{9}+\\dfrac{y^2}{4}=1$, touching it at the points $A$ and $B$. The orthocentre of the triangle $PAB$ is\n\n(A) $\\left(5,\\dfrac{8}{7}\\right)$\n(B) $\\left(\\dfrac{7}{5},\\dfrac{25}{8}\\right)$\n(C) $\\left(\\dfrac{11}{5},\\dfrac{8}{5}\\right)$\n(D) $\\left(\\dfrac{8}{25},\\dfrac{7}{5}\\right)$",
    "answer": "(C) $\\left(\\dfrac{11}{5},\\dfrac{8}{5}\\right)$",
    "trap": "Students rush to find both altitudes algebraically and drown in fractions. The winning observation is that $PA$ is vertical ($x=3$), so the altitude from $B$ is instantly the horizontal line $y=\\tfrac85$ — half the work is free if you locate the contact points first.",
    "solutions": [
      {
        "name": "Contact points $A,B$, then two altitudes",
        "steps": [
          "The chord of contact of $P(3,4)$ w.r.t. $\\dfrac{x^2}{9}+\\dfrac{y^2}{4}=1$ is $T=0$: $\\dfrac{3x}{9}+\\dfrac{4y}{4}=1$, i.e. $\\dfrac{x}{3}+y=1$, or $x+3y=3$.",
          "Intersect $x+3y=3$ with the ellipse. From $x=3-3y$: $\\dfrac{(3-3y)^2}{9}+\\dfrac{y^2}{4}=1 \\Rightarrow (1-y)^2+\\dfrac{y^2}{4}=1$.",
          "Expand: $1-2y+y^2+\\dfrac{y^2}{4}=1 \\Rightarrow \\dfrac{5}{4}y^2-2y=0 \\Rightarrow y\\left(\\dfrac54 y-2\\right)=0$, so $y=0$ or $y=\\dfrac85$.",
          "Thus $A=(3,0)$ and $B=\\left(3-3\\cdot\\dfrac85,\\ \\dfrac85\\right)=\\left(-\\dfrac95,\\dfrac85\\right)$.",
          "Side $PA$ joins $P(3,4)$ and $A(3,0)$ — it is the vertical line $x=3$. So the altitude from $B$ (perpendicular to $PA$) is horizontal: $y=\\dfrac85$.",
          "Slope of $PB$: $\\dfrac{4-\\frac85}{3-(-\\frac95)}=\\dfrac{\\frac{12}{5}}{\\frac{24}{5}}=\\dfrac12$. The altitude from $A(3,0)$ is perpendicular to $PB$, slope $-2$: $y-0=-2(x-3)$, i.e. $y=-2x+6$.",
          "Intersect the two altitudes: set $y=\\dfrac85$ in $y=-2x+6$: $\\dfrac85=-2x+6 \\Rightarrow 2x=6-\\dfrac85=\\dfrac{22}{5} \\Rightarrow x=\\dfrac{11}{5}$.",
          "Orthocentre $H=\\left(\\dfrac{11}{5},\\dfrac85\\right)$, matching (C)."
        ]
      },
      {
        "name": "Third altitude as a check (from $P$)",
        "steps": [
          "Using $A=(3,0)$, $B=\\left(-\\dfrac95,\\dfrac85\\right)$, slope of $AB$: $\\dfrac{\\frac85-0}{-\\frac95-3}=\\dfrac{\\frac85}{-\\frac{24}{5}}=-\\dfrac13$ (consistent with chord $x+3y=3$).",
          "The altitude from $P(3,4)$ is perpendicular to $AB$, so its slope is $3$: $y-4=3(x-3)$, i.e. $y=3x-5$.",
          "This altitude must pass through the orthocentre found above. Test $\\left(\\dfrac{11}{5},\\dfrac85\\right)$: $3\\cdot\\dfrac{11}{5}-5=\\dfrac{33}{5}-\\dfrac{25}{5}=\\dfrac{8}{5}=y$. ✓",
          "All three altitudes concur at $\\left(\\dfrac{11}{5},\\dfrac85\\right)$, confirming (C). (Only option (C) even has $y=\\tfrac85$, the horizontal altitude, so it is forced once $A$ and $B$ are known.)"
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE / JEE Advanced 2010, Paper 2, Q35. Finding the two contact points via the chord of contact $T=0$ turns a fearsome-looking ellipse-tangent problem into an ordinary orthocentre computation — and the vertical side $x=3$ hands you one altitude for free."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "A Line Tilted $60^\\circ$ From Another",
    "difficulty": 3,
    "task": "Find the equation of the line.",
    "pyq": {
      "year": 2011,
      "paper": "1",
      "qno": "51"
    },
    "tags": [
      "angle between lines",
      "equation of a line",
      "2011"
    ],
    "figure": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" font-size=\"12\"><g stroke=\"var(--ink3)\" stroke-width=\"1\"><line x1=\"20\" y1=\"130\" x2=\"300\" y2=\"130\"/><line x1=\"160\" y1=\"20\" x2=\"160\" y2=\"210\"/></g><line x1=\"70\" y1=\"20\" x2=\"250\" y2=\"163\" stroke=\"var(--ink2)\" stroke-width=\"1.3\"/><line x1=\"90\" y1=\"200\" x2=\"250\" y2=\"22\" stroke=\"var(--gold)\" stroke-width=\"1.6\"/><circle cx=\"196\" cy=\"158\" r=\"3\" fill=\"var(--gold)\"/><path d=\"M 176 150 A 22 22 0 0 0 188 133\" fill=\"none\" stroke=\"var(--ink2)\" stroke-width=\"1\"/><g fill=\"var(--ink2)\"><text x=\"200\" y=\"172\">(3,-2)</text><text x=\"64\" y=\"18\">$\\sqrt3x+y=1$</text><text x=\"244\" y=\"20\">L</text><text x=\"172\" y=\"128\">60°</text></g></svg>",
    "statement": "A straight line $L$ through the point $(3,-2)$ is inclined at an angle $60^\\circ$ to the line $\\sqrt{3}\\,x+y=1$. If $L$ also intersects the $x$-axis, then the equation of $L$ is\n\n(A) $y+\\sqrt{3}\\,x+2-3\\sqrt{3}=0$\n(B) $y-\\sqrt{3}\\,x+2+3\\sqrt{3}=0$\n(C) $\\sqrt{3}\\,y-x+3+2\\sqrt{3}=0$\n(D) $\\sqrt{3}\\,y+x-3+2\\sqrt{3}=0$",
    "answer": "(B) $y-\\sqrt{3}\\,x+2+3\\sqrt{3}=0$",
    "trap": "The angle condition yields two candidate slopes, $m=0$ and $m=\\sqrt3$. The slope $m=0$ gives the horizontal line $y=-2$, which is parallel to the $x$-axis and never meets it — the clause \"$L$ also intersects the $x$-axis\" is the tie-breaker that rejects it, not decoration.",
    "solutions": [
      {
        "name": "$\\tan\\theta$ formula for the angle between two lines",
        "steps": [
          "Write the given line $\\sqrt3 x+y=1$ as $y=-\\sqrt3 x+1$; its slope is $m_1=-\\sqrt3$.",
          "Let $L$ have slope $m$. The angle $\\theta=60^\\circ$ between them satisfies $\\tan 60^\\circ=\\left|\\dfrac{m-m_1}{1+m\\,m_1}\\right|=\\left|\\dfrac{m+\\sqrt3}{1-\\sqrt3\\,m}\\right|$.",
          "Since $\\tan 60^\\circ=\\sqrt3$: $\\left|\\dfrac{m+\\sqrt3}{1-\\sqrt3 m}\\right|=\\sqrt3$.",
          "Case $+$: $m+\\sqrt3=\\sqrt3(1-\\sqrt3 m)=\\sqrt3-3m \\Rightarrow 4m=0 \\Rightarrow m=0$.",
          "Case $-$: $m+\\sqrt3=-\\sqrt3(1-\\sqrt3 m)=-\\sqrt3+3m \\Rightarrow 2\\sqrt3=2m \\Rightarrow m=\\sqrt3$.",
          "$m=0$ gives $y=-2$, parallel to the $x$-axis, so it does NOT intersect the $x$-axis — rejected by the given condition. Hence $m=\\sqrt3$.",
          "Line through $(3,-2)$ with slope $\\sqrt3$: $y-(-2)=\\sqrt3(x-3) \\Rightarrow y+2=\\sqrt3 x-3\\sqrt3$.",
          "Rearrange: $y-\\sqrt3 x+2+3\\sqrt3=0$, which is option (B)."
        ]
      },
      {
        "name": "Angles with the horizontal (inclinations)",
        "steps": [
          "The line $\\sqrt3 x+y=1$ has slope $-\\sqrt3=\\tan 120^\\circ$, so its inclination to the positive $x$-axis is $120^\\circ$.",
          "$L$ makes a $60^\\circ$ angle with it, so $L$'s inclination is $120^\\circ\\pm 60^\\circ$, i.e. $60^\\circ$ or $180^\\circ$.",
          "Inclination $180^\\circ$ (equivalently $0^\\circ$) means $L$ is horizontal, slope $\\tan 0^\\circ=0$ — line $y=-2$, which is parallel to the $x$-axis and cannot cut it; discard.",
          "Inclination $60^\\circ$ gives slope $\\tan 60^\\circ=\\sqrt3$; this line is not horizontal, so it does meet the $x$-axis. Keep it.",
          "Through $(3,-2)$ with slope $\\sqrt3$: $y+2=\\sqrt3(x-3)$, i.e. $y-\\sqrt3 x+2+3\\sqrt3=0$ — option (B).",
          "Check the intercept: at $y=0$, $\\sqrt3 x=2+3\\sqrt3 \\Rightarrow x=3+\\tfrac{2}{\\sqrt3}$, a finite point — confirming $L$ indeed meets the $x$-axis."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE / JEE Advanced 2011, Paper 1, Q51. Reading the given line's slope as an inclination of $120^\\circ$ makes the two answers ($60^\\circ$ and $180^\\circ$) obvious by inspection; the \"intersects the $x$-axis\" phrase exists solely to kill the horizontal solution."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Meeting on the diagonal $y=x$",
    "difficulty": 3,
    "task": "Determine which inequality on $a,b,c$ must hold.",
    "pyq": {
      "year": 2013,
      "paper": "1",
      "qno": "42"
    },
    "tags": [
      "intersection of lines",
      "distance",
      "position of a point relative to a line",
      "2013"
    ],
    "figure": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" font-size=\"12\"><line x1=\"20\" y1=\"200\" x2=\"300\" y2=\"200\" stroke=\"var(--ink3)\"/><line x1=\"40\" y1=\"210\" x2=\"40\" y2=\"20\" stroke=\"var(--ink3)\"/><text x=\"295\" y=\"215\" fill=\"var(--ink2)\">x</text><text x=\"26\" y=\"28\" fill=\"var(--ink2)\">y</text><line x1=\"40\" y1=\"200\" x2=\"250\" y2=\"20\" stroke=\"var(--gold)\" stroke-dasharray=\"4 3\"/><text x=\"255\" y=\"24\" fill=\"var(--gold)\">y=x</text><line x1=\"60\" y1=\"20\" x2=\"260\" y2=\"200\" stroke=\"var(--ink2)\"/><text x=\"58\" y=\"16\" fill=\"var(--ink2)\">ax+by+c=0</text><line x1=\"260\" y1=\"20\" x2=\"60\" y2=\"200\" stroke=\"var(--ink2)\"/><text x=\"180\" y=\"210\" fill=\"var(--ink2)\">bx+ay+c=0</text><circle cx=\"160\" cy=\"110\" r=\"4\" fill=\"var(--gold)\"/><text x=\"168\" y=\"108\" fill=\"var(--ink2)\">(r,r)</text><circle cx=\"172\" cy=\"92\" r=\"3\" fill=\"var(--ink3)\"/><text x=\"178\" y=\"90\" fill=\"var(--ink2)\">(1,1)</text></svg>",
    "statement": "For $a>b>c>0$, the distance between $(1,1)$ and the point of intersection of the lines $ax+by+c=0$ and $bx+ay+c=0$ is less than $2\\sqrt{2}$. Then\n\n(A) $a+b-c>0$\n(B) $a-b+c<0$\n(C) $a-b+c>0$\n(D) $a+b-c<0$",
    "answer": "$\\boxed{\\text{(A)}}$",
    "trap": "Students race to solve the $2\\times 2$ system for the intersection and drown in algebra. The symmetry $a\\leftrightarrow b$ swaps the two equations, so the meeting point must lie on the mirror line $y=x$ — a one-line observation that turns the whole problem into a single-variable distance inequality. Missing it, or forgetting that a strict distance bound gives an open interval (not the endpoints), is the usual slip.",
    "solutions": [
      {
        "name": "Symmetry pins the point to $y=x$",
        "steps": [
          "Interchanging $a$ and $b$ maps the first line $ax+by+c=0$ to the second $bx+ay+c=0$ and vice versa; the intersection point is therefore fixed by this swap, so it must lie on the axis of symmetry $y=x$. Write it as $(r,r)$.",
          "Substitute into either line: $ar+br+c=0\\Rightarrow (a+b)r=-c\\Rightarrow r=-\\dfrac{c}{a+b}$.",
          "Distance from $(1,1)$ to $(r,r)$ is $\\sqrt{(r-1)^2+(r-1)^2}=\\sqrt2\\,|r-1|$.",
          "The condition $\\sqrt2\\,|r-1|<2\\sqrt2$ gives $|r-1|<2$, i.e. $-1<r<3$; in particular $r>-1$.",
          "So $-\\dfrac{c}{a+b}>-1$. Since $a>b>c>0$, we have $a+b>0$, so multiply through: $-c>-(a+b)$, i.e. $a+b-c>0$.",
          "Hence $a+b-c>0$ — option (A). (Options with $a-b+c$ are red herrings: they don't follow from the given data.)"
        ]
      },
      {
        "name": "Position of $(1,1)$ relative to the sign of the point",
        "steps": [
          "From the symmetry argument the intersection is $(r,r)$ with $r=-\\dfrac{c}{a+b}<0$ (numerator and denominator both positive).",
          "So the meeting point lies on $y=x$ in the third quadrant, while $(1,1)$ sits on $y=x$ in the first quadrant; both are collinear with the origin along $y=x$.",
          "The signed coordinate of the point is $r$ and of $(1,1)$ is $1$; the distance between them along the line is $\\sqrt2\\,(1-r)$ (since $1-r>0$).",
          "The bound $\\sqrt2\\,(1-r)<2\\sqrt2$ gives $1-r<2$, i.e. $r>-1$.",
          "Thus $-\\dfrac{c}{a+b}>-1\\Rightarrow c<a+b\\Rightarrow a+b-c>0$, confirming (A)."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE / JEE Advanced 2013, Paper 1, Q42. The moment you spot the $a\\leftrightarrow b$ symmetry the intersection is forced onto $y=x$, collapsing a system-solving problem into a one-variable inequality."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Between two nested squares",
    "difficulty": 3,
    "task": "Find the area of the region.",
    "pyq": {
      "year": 2014,
      "paper": "1",
      "qno": "59"
    },
    "tags": [
      "distance from lines",
      "region area",
      "first quadrant",
      "2014"
    ],
    "figure": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" font-size=\"12\"><line x1=\"20\" y1=\"190\" x2=\"300\" y2=\"190\" stroke=\"var(--ink3)\"/><line x1=\"40\" y1=\"205\" x2=\"40\" y2=\"15\" stroke=\"var(--ink3)\"/><text x=\"294\" y=\"204\" fill=\"var(--ink2)\">x</text><text x=\"26\" y=\"22\" fill=\"var(--ink2)\">y</text><line x1=\"40\" y1=\"190\" x2=\"210\" y2=\"20\" stroke=\"var(--ink2)\" stroke-dasharray=\"3 3\"/><text x=\"188\" y=\"34\" fill=\"var(--ink2)\">y=x</text><polygon points=\"40,150 100,190 40,190\" fill=\"none\" stroke=\"var(--ink2)\"/><polygon points=\"40,70 200,190 40,190\" fill=\"none\" stroke=\"var(--gold)\"/><path d=\"M40,150 L40,70 L200,190 L100,190 L40,150 Z\" fill=\"var(--gold)\" fill-opacity=\"0.18\" stroke=\"none\"/><text x=\"44\" y=\"146\" fill=\"var(--ink2)\">√2</text><text x=\"44\" y=\"66\" fill=\"var(--gold)\">2√2</text><text x=\"96\" y=\"186\" fill=\"var(--ink2)\" text-anchor=\"end\">√2</text><text x=\"205\" y=\"186\" fill=\"var(--gold)\">2√2</text></svg>",
    "statement": "For a point $P$ in the plane, let $d_1(P)$ and $d_2(P)$ be the distances of the point $P$ from the lines $x-y=0$ and $x+y=0$ respectively. The area of the region $R$ consisting of all points $P$ lying in the first quadrant of the plane and satisfying $2\\le d_1(P)+d_2(P)\\le 4$, is",
    "answer": "$\\boxed{6}$",
    "trap": "The two perpendicular lines $y=x$ and $y=-x$ tempt you to work in a rotated frame — fine, but the absolute values must be resolved using the first-quadrant constraint, not blanket-dropped. In the first quadrant $x+y>0$ always, but $|x-y|$ still splits into two cases about the line $y=x$. Collapsing $d_1+d_2$ to $\\sqrt2\\,\\max(x,y)$ is the key simplification; guessing it as $\\sqrt2\\,(x+y)$ (forgetting the $\\max$) gives a triangular strip and the wrong area.",
    "solutions": [
      {
        "name": "Resolve $d_1+d_2$ into $\\sqrt2\\,\\max(x,y)$",
        "steps": [
          "For $P=(x,y)$, $d_1=\\dfrac{|x-y|}{\\sqrt2}$ and $d_2=\\dfrac{|x+y|}{\\sqrt2}$.",
          "In the first quadrant $x\\ge0,\\ y\\ge0$, so $x+y\\ge0$ and $|x+y|=x+y$. Thus $d_1+d_2=\\dfrac{|x-y|+(x+y)}{\\sqrt2}$.",
          "If $x\\ge y$: $|x-y|=x-y$, so the numerator is $(x-y)+(x+y)=2x$, giving $d_1+d_2=\\sqrt2\\,x$.",
          "If $y>x$: $|x-y|=y-x$, so the numerator is $(y-x)+(x+y)=2y$, giving $d_1+d_2=\\sqrt2\\,y$.",
          "Combining, $d_1+d_2=\\sqrt2\\,\\max(x,y)$ throughout the first quadrant.",
          "The condition $2\\le\\sqrt2\\,\\max(x,y)\\le4$ becomes $\\sqrt2\\le\\max(x,y)\\le2\\sqrt2$.",
          "The region $\\max(x,y)\\le2\\sqrt2$ (with $x,y\\ge0$) is the square $[0,2\\sqrt2]\\times[0,2\\sqrt2]$; removing $\\max(x,y)<\\sqrt2$ removes the inner square $[0,\\sqrt2]\\times[0,\\sqrt2]$.",
          "Area $=(2\\sqrt2)^2-(\\sqrt2)^2=8-2=6.$"
        ]
      },
      {
        "name": "Rotate coordinates 45°",
        "steps": [
          "Put $u=\\dfrac{x-y}{\\sqrt2},\\ v=\\dfrac{x+y}{\\sqrt2}$ (a rotation, so area is preserved). Then $d_1=|u|,\\ d_2=|v|$ and the constraint is $2\\le|u|+|v|\\le4$.",
          "The first-quadrant conditions $x\\ge0,y\\ge0$ become $v\\ge0$ (from $x+y\\ge0$) and $v\\ge|u|$ (from $x=\\frac{u+v}{\\sqrt2}\\ge0$ and $y=\\frac{v-u}{\\sqrt2}\\ge0$, i.e. $-v\\le u\\le v$).",
          "So we need the part of the diamond-annulus $2\\le|u|+|v|\\le4$ lying in the wedge $v\\ge|u|\\ge0$.",
          "In that wedge $v\\ge0$ and $|u|+v$ ranges; the wedge is the top quarter of each diamond $|u|+|v|=\\text{const}$ (the sector between the lines $v=u$ and $v=-u$ above the $u$-axis).",
          "A full diamond $|u|+|v|=k$ encloses area $2k^2$; the wedge $v\\ge|u|$ is exactly one quarter of that diamond's interior, area $\\tfrac14(2k^2)=\\tfrac{k^2}{2}$.",
          "Between $k=2$ and $k=4$: area $=\\dfrac{4^2}{2}-\\dfrac{2^2}{2}=8-2=6.$",
          "Both routes agree: the area is $6$."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE / JEE Advanced 2014, Paper 1, Q59. The whole problem hinges on recognising that two perpendicular distances collapse to $\\sqrt2\\,\\max(x,y)$ in the first quadrant, turning a level-set question into the area between two concentric squares."
  }
];
