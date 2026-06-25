/* problems.js — 100 original JEE Advanced area-under-curves problems for ∫f dx · The Signed Area Between Curves. sympy-verified. */
window.PROBLEMS = [
  {
    "theme": "areaxaxis",
    "themeLabel": "Area Under a Curve & the x-axis",
    "title": "The Parabola That Crosses Twice",
    "difficulty": 3,
    "task": "Evaluate",
    "tags": [
      "definite-integral",
      "sign-change",
      "absolute-value",
      "quadratic"
    ],
    "statement": "Find the area of the region bounded by the curve $y=x^{2}-3x+2$, the $x$-axis, and the lines $x=0$ and $x=3$.",
    "answer": "\\[\\boxed{\\dfrac{11}{6}}\\]",
    "trap": "Writing the area as $\\int_{0}^{3}(x^{2}-3x+2)\\,dx=\\tfrac{3}{2}$. This is the SIGNED integral: on $(1,2)$ the curve dips below the axis, and that negative piece cancels part of the positive area, undercounting the true geometric area $\\tfrac{11}{6}$.",
    "solutions": [
      {
        "name": "Split at the roots",
        "steps": [
          "Factor $x^{2}-3x+2=(x-1)(x-2)$, so the curve meets the $x$-axis at $x=1,2$, both inside $[0,3]$.",
          "Sign chart: positive on $(0,1)$, negative on $(1,2)$, positive on $(2,3)$. The area is $\\int_{0}^{1}f-\\int_{1}^{2}f+\\int_{2}^{3}f$.",
          "With antiderivative $F(x)=\\tfrac{x^{3}}{3}-\\tfrac{3x^{2}}{2}+2x$: the three pieces are $\\tfrac56,\\;\\tfrac16,\\;\\tfrac56$.",
          "Sum $=\\tfrac56+\\tfrac16+\\tfrac56=\\dfrac{11}{6}$."
        ]
      },
      {
        "name": "Integral of the absolute value",
        "steps": [
          "The area is $\\int_{0}^{3}\\lvert x^{2}-3x+2\\rvert\\,dx$ by definition of geometric area.",
          "Because $\\lvert f\\rvert$ equals $f$ where $f\\ge0$ and $-f$ where $f<0$, locate the sign changes at $x=1,2$ before integrating.",
          "Integrate $\\lvert f\\rvert$ piecewise over $[0,1],[1,2],[2,3]$ to get $\\tfrac56,\\tfrac16,\\tfrac56$.",
          "Total $=\\dfrac{11}{6}$."
        ]
      },
      {
        "name": "Signed integral plus a correction",
        "steps": [
          "Compute the signed integral $\\int_{0}^{3}f\\,dx=\\tfrac32$.",
          "The only undercounted region is where $f<0$, namely $(1,2)$, whose signed contribution is $-\\tfrac16$.",
          "To convert signed to geometric area, add back twice the magnitude of every below-axis piece: $\\tfrac32+2\\cdot\\tfrac16=\\dfrac{11}{6}$.",
          "Hence the area is $\\dfrac{11}{6}$."
        ]
      }
    ],
    "remark": "Insight: geometric area is $\\int\\lvert f\\rvert$, never $\\int f$. The gap between the two ($\\tfrac{11}{6}$ vs $\\tfrac32$) is exactly twice the below-axis lobe — a clean reminder that signed integrals let opposite lobes cancel."
  },
  {
    "theme": "areaxaxis",
    "themeLabel": "Area Under a Curve & the x-axis",
    "title": "Logarithm Above and Below",
    "difficulty": 3,
    "task": "Evaluate",
    "tags": [
      "definite-integral",
      "logarithm",
      "sign-change",
      "integration-by-parts"
    ],
    "statement": "Find the area enclosed between the curve $y=\\ln x$, the $x$-axis, and the ordinates $x=\\tfrac1e$ and $x=e$.",
    "answer": "\\[\\boxed{2-\\dfrac{2}{e}}\\]",
    "trap": "Computing $\\int_{1/e}^{e}\\ln x\\,dx=\\tfrac2e$ and calling it the area. On $(\\tfrac1e,1)$ the curve lies below the axis ($\\ln x<0$); the signed integral subtracts that lobe instead of adding its area, giving $\\tfrac2e\\approx0.736$ rather than the true $2-\\tfrac2e\\approx1.264$.",
    "solutions": [
      {
        "name": "Split at x=1",
        "steps": [
          "$\\ln x<0$ on $(\\tfrac1e,1)$ and $\\ln x>0$ on $(1,e)$, with the single sign change at $x=1$.",
          "Area $=-\\int_{1/e}^{1}\\ln x\\,dx+\\int_{1}^{e}\\ln x\\,dx$, using antiderivative $x\\ln x-x$.",
          "Lower piece: $-\\big[(x\\ln x-x)\\big]_{1/e}^{1}=-\\big[(-1)-(-\\tfrac1e-\\tfrac1e)\\big]=1-\\tfrac2e$.",
          "Upper piece: $\\big[(x\\ln x-x)\\big]_{1}^{e}=(e-e)-(0-1)=1$.",
          "Total $=\\big(1-\\tfrac2e\\big)+1=2-\\dfrac{2}{e}$."
        ]
      },
      {
        "name": "Symmetry via x to 1/x",
        "steps": [
          "Substitute $x\\to1/u$ on the below-axis part: $\\int_{1/e}^{1}\\lvert\\ln x\\rvert\\,dx=\\int_{1}^{e}\\ln u\\cdot\\tfrac{du}{u^{2}}$.",
          "Integrate by parts to get $\\int_{1}^{e}\\tfrac{\\ln u}{u^{2}}du=\\Big[-\\tfrac{\\ln u}{u}-\\tfrac1u\\Big]_{1}^{e}=1-\\tfrac2e$.",
          "The above-axis part is $\\int_{1}^{e}\\ln u\\,du=1$.",
          "Add: $\\big(1-\\tfrac2e\\big)+1=2-\\dfrac{2}{e}$."
        ]
      }
    ],
    "remark": "Insight: the interval $[\\tfrac1e,e]$ is symmetric about $x=1$ in the log scale, tempting a one-shot integral; but $\\ln x$ is odd-ish about $x=1$ only in sign, not magnitude, so the lobes have unequal areas $1-\\tfrac2e$ and $1$ — they must be added, not cancelled."
  },
  {
    "theme": "areaxaxis",
    "themeLabel": "Area Under a Curve & the x-axis",
    "title": "When the Net Integral Lies: x cos x",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "definite-integral",
      "integration-by-parts",
      "sign-change",
      "trigonometric"
    ],
    "statement": "Find the total area bounded by the curve $y=x\\cos x$ and the $x$-axis for $0\\le x\\le 2\\pi$.",
    "answer": "\\[\\boxed{4\\pi}\\]",
    "trap": "Concluding the area is $0$ because $\\int_{0}^{2\\pi}x\\cos x\\,dx=0$. The net integral vanishes by a cancellation accident, but the curve genuinely encloses three large lobes; the geometric area is $4\\pi$, not $0$. One must split at the zeros $x=\\tfrac{\\pi}{2},\\tfrac{3\\pi}{2}$ (the $x=0$ zero is an endpoint).",
    "solutions": [
      {
        "name": "Split at cos-zeros",
        "steps": [
          "On $[0,2\\pi]$, $x\\cos x=0$ at $x=0,\\tfrac{\\pi}{2},\\tfrac{3\\pi}{2}$; with $x>0$ the sign follows $\\cos x$: $+$ on $(0,\\tfrac\\pi2)$, $-$ on $(\\tfrac\\pi2,\\tfrac{3\\pi}2)$, $+$ on $(\\tfrac{3\\pi}2,2\\pi)$.",
          "Antiderivative $\\int x\\cos x\\,dx=x\\sin x+\\cos x$. Evaluate the three definite pieces: $\\tfrac\\pi2-1,\\;-2\\pi,\\;\\tfrac{3\\pi}2+1$.",
          "Take magnitudes and add: $\\big(\\tfrac\\pi2-1\\big)+2\\pi+\\big(\\tfrac{3\\pi}2+1\\big)$.",
          "The $\\pm1$ cancel and the $\\pi$-terms sum to $4\\pi$, so the area is $4\\pi$."
        ]
      },
      {
        "name": "Net integral plus below-axis correction",
        "steps": [
          "The net integral $\\int_{0}^{2\\pi}x\\cos x\\,dx=[x\\sin x+\\cos x]_{0}^{2\\pi}=1-1=0$.",
          "The single below-axis lobe is on $(\\tfrac\\pi2,\\tfrac{3\\pi}2)$ with signed value $\\int_{\\pi/2}^{3\\pi/2}x\\cos x\\,dx=-2\\pi$.",
          "Geometric area $=$ net integral $+\\,2\\times$(magnitude of below-axis lobe) $=0+2(2\\pi)=4\\pi$.",
          "Hence the area equals $4\\pi$."
        ]
      }
    ],
    "remark": "Insight: $\\int f=0$ is the most dangerous answer of all — it tempts you to declare 'no area'. The vanishing of the net integral here is a coincidence of the $\\pm1$ and $\\pi$ terms; the actual figure has three substantial lobes."
  },
  {
    "theme": "areaxaxis",
    "themeLabel": "Area Under a Curve & the x-axis",
    "title": "A Hidden Root from a Double Angle",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "definite-integral",
      "double-angle",
      "sign-change",
      "factoring"
    ],
    "statement": "Find the area of the region bounded by $y=\\sin x-\\sin 2x$, the $x$-axis, and the lines $x=0,\\ x=\\pi$.",
    "answer": "\\[\\boxed{\\dfrac{5}{2}}\\]",
    "trap": "Integrating straight through to get $\\int_{0}^{\\pi}(\\sin x-\\sin 2x)\\,dx=2$ and stopping. The interior zero hides inside the double angle: $\\sin x-\\sin 2x=\\sin x(1-2\\cos x)$ vanishes at $x=\\tfrac{\\pi}{3}$, where the curve crosses the axis. Missing this root lets a negative lobe shrink the count from $\\tfrac52$ to $2$.",
    "solutions": [
      {
        "name": "Factor to expose the root",
        "steps": [
          "Write $\\sin 2x=2\\sin x\\cos x$, so $\\sin x-\\sin 2x=\\sin x\\,(1-2\\cos x)$.",
          "On $(0,\\pi)$: $\\sin x>0$ always, and $1-2\\cos x$ changes sign at $\\cos x=\\tfrac12$, i.e. $x=\\tfrac\\pi3$. So $f<0$ on $(0,\\tfrac\\pi3)$, $f>0$ on $(\\tfrac\\pi3,\\pi)$.",
          "Antiderivative $-\\cos x+\\tfrac12\\cos 2x$. Pieces: $\\int_{0}^{\\pi/3}f=-\\tfrac14$ and $\\int_{\\pi/3}^{\\pi}f=\\tfrac94$.",
          "Area $=\\lvert-\\tfrac14\\rvert+\\tfrac94=\\dfrac{5}{2}$."
        ]
      },
      {
        "name": "Net integral plus correction",
        "steps": [
          "Net integral: $\\int_{0}^{\\pi}(\\sin x-\\sin 2x)\\,dx=[-\\cos x+\\tfrac12\\cos2x]_{0}^{\\pi}=2$.",
          "The only below-axis lobe is on $(0,\\tfrac\\pi3)$ with signed value $-\\tfrac14$.",
          "Area $=2+2\\cdot\\tfrac14=\\dfrac{5}{2}$.",
          "So the bounded area is $\\tfrac52$."
        ]
      }
    ],
    "remark": "Insight: a sign change can be camouflaged inside a compound trig term. Factoring $\\sin x(1-2\\cos x)$ turns an invisible crossing at $\\tfrac\\pi3$ into an obvious one — always factor before you decide the sign is constant."
  },
  {
    "theme": "areaxaxis",
    "themeLabel": "Area Under a Curve & the x-axis",
    "title": "The Sawtooth's Six Triangles",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "fractional-part",
      "periodicity",
      "piecewise",
      "sign-change"
    ],
    "statement": "Let $\\{x\\}$ denote the fractional part of $x$. Find the area bounded by the curve $y=\\{x\\}-\\tfrac12$, the $x$-axis, and the lines $x=0$ and $x=3$.",
    "answer": "\\[\\boxed{\\dfrac{3}{4}}\\]",
    "trap": "Reasoning that the sawtooth is balanced so $\\int_{0}^{3}\\big(\\{x\\}-\\tfrac12\\big)\\,dx=0$, hence 'area $=0$'. The net signed integral is indeed $0$, but the graph is six congruent triangles straddling the axis; geometric area sums their absolute contributions to $\\tfrac34$. There are five sign changes (at the half-integers $\\tfrac12,1,\\tfrac32,2,\\tfrac52$) that must each split the absolute-value integral.",
    "solutions": [
      {
        "name": "One period, then multiply",
        "steps": [
          "$f(x)=\\{x\\}-\\tfrac12$ has period $1$, so the area over $[0,3]$ is $3$ times the area over one period $[0,1]$.",
          "On $[0,1]$, $f(x)=x-\\tfrac12$, which is negative on $(0,\\tfrac12)$ and positive on $(\\tfrac12,1)$ — a sign change at $x=\\tfrac12$.",
          "Each piece is a right triangle with legs $\\tfrac12$ and $\\tfrac12$, area $\\tfrac12\\cdot\\tfrac12\\cdot\\tfrac12=\\tfrac18$; two of them give $\\tfrac14$ per period.",
          "Total area $=3\\times\\tfrac14=\\dfrac{3}{4}$."
        ]
      },
      {
        "name": "Direct absolute-value integral",
        "steps": [
          "Area $=\\displaystyle\\int_{0}^{3}\\big\\lvert\\{x\\}-\\tfrac12\\big\\rvert\\,dx$; the integrand vanishes at the half-integers $\\tfrac12,1,\\tfrac32,2,\\tfrac52$.",
          "Over each half-unit the integrand is a straight line running from $0$ up to $\\tfrac12$ (or from $\\tfrac12$ down to $0$), contributing $\\int_{0}^{1/2}t\\,dt=\\tfrac18$.",
          "There are six such half-units in $[0,3]$, so the total is $6\\times\\tfrac18$.",
          "Area $=\\dfrac{6}{8}=\\dfrac{3}{4}$."
        ]
      }
    ],
    "remark": "Insight: periodicity plus symmetry forces the net integral to zero, which is precisely the seduction. Exploit the period to halve the labour, but never let the cancellation tempt you into reporting zero area — area is the integral of $\\lvert f\\rvert$, not of $f$."
  },
  {
    "theme": "areaxaxis",
    "themeLabel": "Area Under a Curve & the x-axis",
    "title": "A V Dipped Below the Axis",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "absolute-value",
      "piecewise",
      "sign-change",
      "geometry"
    ],
    "statement": "Find the area enclosed between the curve $y=\\lvert x-1\\rvert-1$, the $x$-axis, and the lines $x=0,\\ x=3$.",
    "answer": "\\[\\boxed{\\dfrac{3}{2}}\\]",
    "trap": "Treating $\\lvert x-1\\rvert-1$ as if it were a single linear piece and integrating once, or trusting $\\int_{0}^{3}(\\lvert x-1\\rvert-1)\\,dx=-\\tfrac12$. The vertex at $x=1$ AND the two axis-crossings at $x=0$ and $x=2$ each break the formula; the curve sits below the axis on $(0,2)$ and above on $(2,3)$, so the geometric area is $\\tfrac32$.",
    "solutions": [
      {
        "name": "Geometry of the V",
        "steps": [
          "The graph is a V with vertex $(1,-1)$, rising with slopes $\\pm1$; it meets the axis at $x=0$ and $x=2$.",
          "Below-axis part on $[0,2]$: a triangle with base $2$ and height $1$, area $=\\tfrac12\\cdot2\\cdot1=1$.",
          "Above-axis part on $[2,3]$: a triangle with base $1$ and height $1$, area $=\\tfrac12\\cdot1\\cdot1=\\tfrac12$.",
          "Total area $=1+\\tfrac12=\\dfrac{3}{2}$."
        ]
      },
      {
        "name": "Piecewise absolute value",
        "steps": [
          "Split off the modulus: $f=(1-x)-1=-x$ on $[0,1]$ and $f=(x-1)-1=x-2$ on $[1,3]$.",
          "Zeros of $f$: $x=0$ (from $-x$) and $x=2$ (from $x-2$); $f\\le0$ on $[0,2]$, $f\\ge0$ on $[2,3]$.",
          "Area $=-\\int_{0}^{1}(-x)\\,dx-\\int_{1}^{2}(x-2)\\,dx+\\int_{2}^{3}(x-2)\\,dx=\\tfrac12+\\tfrac12+\\tfrac12$.",
          "Total $=\\dfrac{3}{2}$."
        ]
      }
    ],
    "remark": "Insight: a modulus inside the integrand creates a corner (non-differentiable point) that is NOT a sign change, plus separate zeros that ARE. Track both kinds of break-points; only the zeros split the absolute value, but the corner still splits the linear formula."
  },
  {
    "theme": "areaxaxis",
    "themeLabel": "Area Under a Curve & the x-axis",
    "title": "Calibrating the Lobes",
    "difficulty": 4,
    "task": "Find all",
    "tags": [
      "parameter",
      "sign-change",
      "definite-integral",
      "cubic"
    ],
    "statement": "For a constant $k>0$, the region bounded by $y=x^{2}-kx$, the $x$-axis, and the lines $x=0,\\ x=2k$ has total area $8$. Find all such $k$.",
    "answer": "\\[\\boxed{k=2}\\]",
    "trap": "Setting $\\int_{0}^{2k}(x^{2}-kx)\\,dx=8$, which gives $\\tfrac{2k^{3}}{3}=8$ and the wrong $k=12^{1/3}$. That equation uses the signed integral; on $(0,k)$ the curve is below the axis, so its lobe must be added, not subtracted. The correct area is $k^{3}$, giving $k=2$.",
    "solutions": [
      {
        "name": "Build the area function",
        "steps": [
          "$x^{2}-kx=x(x-k)$ vanishes at $x=0,k$; on $(0,k)$ it is negative, on $(k,2k)$ positive.",
          "Below lobe: $-\\int_{0}^{k}(x^{2}-kx)\\,dx=-\\big(\\tfrac{k^{3}}{3}-\\tfrac{k^{3}}{2}\\big)=\\tfrac{k^{3}}{6}$.",
          "Above lobe: $\\int_{k}^{2k}(x^{2}-kx)\\,dx=\\tfrac{7k^{3}}{3}-\\tfrac{3k^{3}}{2}=\\tfrac{5k^{3}}{6}$.",
          "Total area $=\\tfrac{k^{3}}{6}+\\tfrac{5k^{3}}{6}=k^{3}$. Set $k^{3}=8\\Rightarrow k=2$."
        ]
      },
      {
        "name": "Scaling argument",
        "steps": [
          "Substitute $x=k\\,t$: the curve becomes $k^{2}(t^{2}-t)$ and $dx=k\\,dt$, with $t$ running over $[0,2]$.",
          "Hence area $=k^{3}\\int_{0}^{2}\\lvert t^{2}-t\\rvert\\,dt$, where $t^{2}-t<0$ on $(0,1)$.",
          "$\\int_{0}^{2}\\lvert t^{2}-t\\rvert\\,dt=-\\int_{0}^{1}(t^{2}-t)+\\int_{1}^{2}(t^{2}-t)=\\tfrac16+\\tfrac56=1$, so area $=k^{3}$.",
          "$k^{3}=8\\Rightarrow k=2$ (the unique positive root)."
        ]
      }
    ],
    "remark": "Insight: a single self-similar parameter $k$ makes the area scale as $k^{3}$ once you split correctly. The whole difficulty is detecting the below-axis lobe — the trap answer $12^{1/3}$ comes from a $\\tfrac{2k^{3}}{3}$ that has already let the lobes cancel."
  },
  {
    "theme": "areaxaxis",
    "themeLabel": "Area Under a Curve & the x-axis",
    "title": "Three Crossings of a Cosine Difference",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "double-angle",
      "sign-change",
      "factoring",
      "trigonometric",
      "full-period"
    ],
    "statement": "Find the total area enclosed between the curve $y=\\cos x-\\cos 2x$ and the $x$-axis over one full period $0\\le x\\le 2\\pi$.",
    "answer": "\\[\\boxed{3\\sqrt{3}}\\]",
    "trap": "Computing $\\int_{0}^{2\\pi}(\\cos x-\\cos 2x)\\,dx=0$ and declaring zero area, or splitting at the wrong points. Over a full period the net integral of any cosine harmonic is $0$, so it tells you nothing about area; the real crossings come from $\\cos x-\\cos 2x=-(2\\cos x+1)(\\cos x-1)$, giving sign changes at $x=\\tfrac{2\\pi}{3}$ and $x=\\tfrac{4\\pi}{3}$.",
    "solutions": [
      {
        "name": "Factor and split",
        "steps": [
          "Use $\\cos 2x=2\\cos^{2}x-1$: $\\cos x-\\cos 2x=-2\\cos^{2}x+\\cos x+1=-(2\\cos x+1)(\\cos x-1)$.",
          "Zeros in $[0,2\\pi]$: $\\cos x=1$ at $x=0,2\\pi$ (endpoints, touch) and $\\cos x=-\\tfrac12$ at $x=\\tfrac{2\\pi}{3},\\tfrac{4\\pi}{3}$ (genuine crossings).",
          "Antiderivative $\\sin x-\\tfrac12\\sin 2x$ gives pieces $\\int_{0}^{2\\pi/3}=\\tfrac{3\\sqrt3}{4}$, $\\int_{2\\pi/3}^{4\\pi/3}=-\\tfrac{3\\sqrt3}{2}$, $\\int_{4\\pi/3}^{2\\pi}=\\tfrac{3\\sqrt3}{4}$.",
          "Area $=\\tfrac{3\\sqrt3}{4}+\\tfrac{3\\sqrt3}{2}+\\tfrac{3\\sqrt3}{4}=3\\sqrt{3}$."
        ]
      },
      {
        "name": "Symmetry about the midpoint",
        "steps": [
          "$g(x)=\\cos x-\\cos 2x$ satisfies $g(2\\pi-x)=g(x)$, so the figure is symmetric about $x=\\pi$; compute on $[0,\\pi]$ and double.",
          "On $[0,\\pi]$ the crossing is at $\\tfrac{2\\pi}{3}$: $g>0$ on $(0,\\tfrac{2\\pi}{3})$, $g<0$ on $(\\tfrac{2\\pi}{3},\\pi)$.",
          "Half-area $=\\int_{0}^{2\\pi/3}g-\\int_{2\\pi/3}^{\\pi}g=\\tfrac{3\\sqrt3}{4}+\\tfrac{3\\sqrt3}{4}=\\tfrac{3\\sqrt3}{2}$.",
          "Double: $2\\cdot\\tfrac{3\\sqrt3}{2}=3\\sqrt{3}$."
        ]
      }
    ],
    "remark": "Insight: over a full period the net integral of a finite cosine series is always zero by orthogonality, so it carries zero information about area. The factorisation $-(2\\cos x+1)(\\cos x-1)$ is what reveals which roots are mere tangencies ($\\cos x=1$) and which are true crossings ($\\cos x=-\\tfrac12$)."
  },
  {
    "theme": "areaxaxis",
    "themeLabel": "Area Under a Curve & the x-axis",
    "title": "The Golden Crossing",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "irrational-root",
      "sign-change",
      "golden-ratio",
      "quadratic",
      "definite-integral"
    ],
    "statement": "Find the area of the region bounded by the curve $y=x^{2}-x-1$, the $x$-axis, and the lines $x=0$ and $x=2$.",
    "answer": "\\[\\boxed{\\dfrac{5\\sqrt5-1}{6}}\\]",
    "trap": "Integrating once over $[0,2]$ gives $\\int_{0}^{2}(x^{2}-x-1)\\,dx=-\\tfrac43$, and reading off $\\tfrac43$ as the area. But $f$ changes sign inside the interval ($f(0)=-1<0$, $f(2)=1>0$), so the bare integral cancels the two lobes against each other. The deeper danger is that the crossing is the irrational golden ratio $\\varphi=\\tfrac{1+\\sqrt5}{2}\\approx1.618$, not a nice integer; splitting at a guessed rational point (or not splitting at all) corrupts the area.",
    "solutions": [
      {
        "name": "Split at the golden ratio",
        "steps": [
          "Roots of $x^{2}-x-1=0$ are $\\tfrac{1\\pm\\sqrt5}{2}$; only $\\varphi=\\tfrac{1+\\sqrt5}{2}\\approx1.618$ lies in $[0,2]$.",
          "$f<0$ on $(0,\\varphi)$ and $f>0$ on $(\\varphi,2)$, so area $=-\\int_{0}^{\\varphi}f+\\int_{\\varphi}^{2}f$ with $F(x)=\\tfrac{x^{3}}{3}-\\tfrac{x^{2}}{2}-x$.",
          "Using $\\varphi^{2}=\\varphi+1$ to simplify $F(\\varphi)$, the below-axis lobe is $\\tfrac{7+5\\sqrt5}{12}$ and the above-axis lobe is $\\tfrac{5\\sqrt5-9}{12}$.",
          "Sum $=\\dfrac{7+5\\sqrt5}{12}+\\dfrac{5\\sqrt5-9}{12}=\\dfrac{10\\sqrt5-2}{12}=\\dfrac{5\\sqrt5-1}{6}$."
        ]
      },
      {
        "name": "Net integral plus twice the below-lobe",
        "steps": [
          "Net integral $\\int_{0}^{2}(x^{2}-x-1)\\,dx=\\big[\\tfrac{x^3}{3}-\\tfrac{x^2}{2}-x\\big]_{0}^{2}=\\tfrac83-2-2=-\\tfrac43$.",
          "The below-axis lobe lives on $(0,\\varphi)$ with signed value $\\int_{0}^{\\varphi}f=F(\\varphi)=-\\tfrac{7+5\\sqrt5}{12}$.",
          "Area $=$ net $+\\,2\\,\\lvert\\text{below lobe}\\rvert=-\\tfrac43+2\\cdot\\tfrac{7+5\\sqrt5}{12}=-\\tfrac43+\\tfrac{7+5\\sqrt5}{6}$.",
          "Combine: $\\dfrac{-8+7+5\\sqrt5}{6}=\\dfrac{5\\sqrt5-1}{6}$."
        ]
      }
    ],
    "remark": "Insight: the crossing being $\\varphi$ rather than an integer is the whole trap. There is no clean root to read off, and the relation $\\varphi^{2}=\\varphi+1$ is the lever that keeps the algebra finite. Always solve for the actual zero, however irrational, and split there before adding the lobes in absolute value."
  },
  {
    "theme": "areaxaxis",
    "themeLabel": "Area Under a Curve & the x-axis",
    "title": "Minimising a Split Area",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "parameter",
      "optimization",
      "sign-change",
      "calculus",
      "definite-integral"
    ],
    "statement": "For a constant $a$ with $0<a<4$, let $A(a)$ be the area bounded by $y=x^{2}-a$, the $x$-axis, and the lines $x=0,\\ x=2$. Determine the value of $a$ that minimises $A(a)$, and the minimum area.",
    "answer": "\\[\\boxed{a=1,\\quad A_{\\min}=2}\\]",
    "trap": "Minimising the signed integral $\\int_{0}^{2}(x^{2}-a)\\,dx=\\tfrac83-2a$, which decreases without bound as $a$ grows, suggesting 'take $a$ as large as possible'. That ignores the split at $x=\\sqrt a$: for $0<a<4$ the curve is below the axis on $(0,\\sqrt a)$ and above on $(\\sqrt a,2)$, so the true area is $A(a)=\\tfrac43a^{3/2}-2a+\\tfrac83$, with an interior minimum.",
    "solutions": [
      {
        "name": "Differentiate the correct area",
        "steps": [
          "For $0<a<4$, $x^{2}-a=0$ at $x=\\sqrt a\\in(0,2)$; below on $(0,\\sqrt a)$, above on $(\\sqrt a,2)$.",
          "$A(a)=\\int_{0}^{\\sqrt a}(a-x^{2})\\,dx+\\int_{\\sqrt a}^{2}(x^{2}-a)\\,dx=\\tfrac43a^{3/2}-2a+\\tfrac83$.",
          "$A'(a)=2\\sqrt a-2=0\\Rightarrow a=1$; and $A''(a)=a^{-1/2}>0$, a genuine minimum.",
          "$A(1)=\\tfrac43-2+\\tfrac83=2$, so $a=1$ gives minimum area $2$."
        ]
      },
      {
        "name": "Leibniz / endpoint reasoning",
        "steps": [
          "Differentiate $A(a)$ under the integral: only the explicit $a$ matters since the integrand vanishes at the moving limit $x=\\sqrt a$, so $A'(a)=\\int_{0}^{\\sqrt a}1\\,dx-\\int_{\\sqrt a}^{2}1\\,dx=\\sqrt a-(2-\\sqrt a)=2\\sqrt a-2$.",
          "Set $A'(a)=0\\Rightarrow\\sqrt a=1\\Rightarrow a=1$; sign of $A'$ goes $-$ then $+$, confirming a minimum.",
          "Check the boundaries: $A(0^{+})=\\tfrac83\\approx2.67$ and $A(4)=\\tfrac{16}{3}\\approx5.33$, both exceed $A(1)$.",
          "Therefore the minimum area is $A(1)=2$ at $a=1$."
        ]
      }
    ],
    "remark": "Insight: optimising 'area' is fundamentally different from optimising the signed integral — the latter has no interior minimum here, the former does, precisely because the moving root $\\sqrt a$ creates a below-axis lobe whose growth eventually outpaces the shrinking upper lobe. The split is what makes the problem have an answer at all."
  },
  {
    "theme": "areayaxis",
    "themeLabel": "Area w.r.t. the y-axis",
    "title": "The Lens Between Two Parabolas",
    "difficulty": 3,
    "task": "Evaluate",
    "tags": [
      "horizontal strips",
      "parabola",
      "x as function of y",
      "symmetry"
    ],
    "statement": "Find the area of the region enclosed between the curves $x = y^{2}$ and $x = 2 - y^{2}$.",
    "answer": "\\[\\boxed{\\dfrac{8}{3}}\\]",
    "trap": "Switching to vertical strips and integrating in $x$. Each parabola solves to $y=\\pm\\sqrt{x}$ or $y=\\pm\\sqrt{2-x}$, so the top boundary changes form at $x=1$ and the region must be split there, then doubled for the lower half. Students who write a single $\\int(\\sqrt{x}-\\dots)\\,dx$ usually drop the symmetry factor of $2$ or misplace the split point, landing on $\\tfrac{4}{3}$ instead of $\\tfrac{8}{3}$. The region is single-valued in $x$ for each $y$, so horizontal strips need no splitting at all.",
    "solutions": [
      {
        "name": "Horizontal strips (right minus left)",
        "steps": [
          "For a fixed $y$, the strip runs from the left curve $x_L=y^{2}$ to the right curve $x_R=2-y^{2}$.",
          "They meet where $y^{2}=2-y^{2}\\Rightarrow y^{2}=1\\Rightarrow y=\\pm1$, so $y\\in[-1,1]$.",
          "$A=\\displaystyle\\int_{-1}^{1}\\big[(2-y^{2})-y^{2}\\big]\\,dy=\\int_{-1}^{1}(2-2y^{2})\\,dy$.",
          "$=\\big[2y-\\tfrac{2}{3}y^{3}\\big]_{-1}^{1}=\\big(2-\\tfrac23\\big)-\\big(-2+\\tfrac23\\big)=\\dfrac{8}{3}$."
        ]
      },
      {
        "name": "Exploit even symmetry",
        "steps": [
          "The integrand $2-2y^{2}$ is even in $y$, so $A=2\\displaystyle\\int_{0}^{1}(2-2y^{2})\\,dy$.",
          "$=2\\big[2y-\\tfrac23 y^{3}\\big]_{0}^{1}=2\\big(2-\\tfrac23\\big)=2\\cdot\\tfrac43=\\dfrac{8}{3}$."
        ]
      },
      {
        "name": "Area under the width-parabola",
        "steps": [
          "The strip width is $w(y)=x_R-x_L=2-2y^{2}=2(1-y^{2})$, a downward parabola in $y$ with roots $\\pm1$ and peak value $w(0)=2$.",
          "By the parabolic-segment formula, the area between a parabola and the chord across its roots is $\\tfrac23\\cdot(\\text{base})\\cdot(\\text{height})$.",
          "Here base $=2$ (from $y=-1$ to $y=1$) and height $=2$, giving $A=\\tfrac23\\cdot2\\cdot2=\\dfrac{8}{3}$."
        ]
      }
    ],
    "remark": "Insight: when both boundaries are naturally written as $x=g(y)$, the area is $\\int (x_{\\text{right}}-x_{\\text{left}})\\,dy$ in one stroke. Horizontal strips skip the split-at-$x=1$ and the $\\pm\\sqrt{\\;}$ bookkeeping that vertical strips force on you."
  },
  {
    "theme": "areayaxis",
    "themeLabel": "Area w.r.t. the y-axis",
    "title": "The Cubic That Hugs the Axis",
    "difficulty": 3,
    "task": "Find the total area",
    "tags": [
      "signed vs unsigned area",
      "odd symmetry",
      "cubic",
      "sign change"
    ],
    "statement": "The curve $x = y^{3} - 4y$ crosses the $y$-axis three times. Find the total area of the region(s) enclosed between this curve and the $y$-axis.",
    "answer": "\\[\\boxed{8}\\]",
    "trap": "Writing $A=\\int_{-2}^{2}(y^{3}-4y)\\,dy$ and getting $0$. Because $x=y^{3}-4y$ is odd, the two lobes lie on opposite sides of the $y$-axis and the signed integral cancels exactly. Area is the integral of $|x|$, not of $x$: you must split at every zero and add absolute values.",
    "solutions": [
      {
        "name": "Locate zeros, then add |lobes|",
        "steps": [
          "$x=y(y-2)(y+2)=0\\Rightarrow y=-2,0,2$, giving two lobes on $[-2,0]$ and $[0,2]$.",
          "On $(-2,0)$, $x>0$ (right of axis); on $(0,2)$, $x<0$ (left of axis).",
          "$\\int_{-2}^{0}(y^{3}-4y)\\,dy=\\big[\\tfrac{y^{4}}{4}-2y^{2}\\big]_{-2}^{0}=0-(4-8)=4$.",
          "$\\int_{0}^{2}(y^{3}-4y)\\,dy=(4-8)-0=-4$, so $|{-4}|=4$.",
          "Total area $=4+4=8$."
        ]
      },
      {
        "name": "Use odd symmetry of |x|",
        "steps": [
          "$|x(-y)|=|x(y)|$ since $x$ is odd, so the two lobes have equal area.",
          "Total $=2\\int_{0}^{2}|y^{3}-4y|\\,dy=2\\int_{0}^{2}(4y-y^{3})\\,dy$ (on $(0,2)$, $4y-y^{3}>0$).",
          "$=2\\big[2y^{2}-\\tfrac{y^{4}}{4}\\big]_{0}^{2}=2(8-4)=8$."
        ]
      }
    ],
    "remark": "Insight: 'area' is $\\int|x|\\,dy$. Odd $x(y)$ makes the naive signed integral vanish — the whole point is that geometric area never cancels."
  },
  {
    "theme": "areayaxis",
    "themeLabel": "Area w.r.t. the y-axis",
    "title": "Left of the Exponential",
    "difficulty": 3,
    "task": "Evaluate",
    "tags": [
      "exponential",
      "x as function of y",
      "region orientation",
      "logarithm trap"
    ],
    "statement": "Find the area of the region bounded by the curve $x = e^{y}$, the $y$-axis, the $x$-axis, and the line $y=\\ln 3$.",
    "answer": "\\[\\boxed{2}\\]",
    "trap": "Rewriting $x=e^{y}$ as $y=\\ln x$ and computing $\\int_{1}^{3}\\ln x\\,dx=3\\ln3-2$. That measures the area trapped between the curve and the $x$-axis, a completely different region. Here the region lies between the curve and the $y$-axis, so each horizontal strip has width $x=e^{y}$ measured from the $y$-axis.",
    "solutions": [
      {
        "name": "Horizontal strips from the y-axis",
        "steps": [
          "For $y\\in[0,\\ln3]$ the strip runs from the $y$-axis $(x=0)$ to the curve $x=e^{y}$, so its width is $e^{y}$.",
          "$A=\\displaystyle\\int_{0}^{\\ln 3} e^{y}\\,dy=\\big[e^{y}\\big]_{0}^{\\ln 3}=e^{\\ln 3}-e^{0}$.",
          "$=3-1=2$."
        ]
      },
      {
        "name": "Rectangle minus the x-axis region",
        "steps": [
          "As $y$ runs $0\\to\\ln3$, the curve sweeps $x=e^{0}=1$ to $x=e^{\\ln3}=3$, so the region sits inside the rectangle $[0,3]\\times[0,\\ln3]$ of area $3\\ln3$.",
          "The part of that rectangle lying between the curve and the $x$-axis is $\\int_{1}^{3}\\ln x\\,dx=3\\ln3-2$.",
          "Subtract: $3\\ln3-(3\\ln3-2)=2$."
        ]
      }
    ],
    "remark": "Insight: the choice of axis decides the strip. 'Bounded by the $y$-axis' means widths are read horizontally as $x(y)$ — converting to $y=\\ln x$ silently swaps to the wrong region."
  },
  {
    "theme": "areayaxis",
    "themeLabel": "Area w.r.t. the y-axis",
    "title": "Parabola Meets a Slanted Chord",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "parabola",
      "line",
      "horizontal strips",
      "split-free integration"
    ],
    "statement": "Find the area of the region enclosed between the parabola $x = y^{2}$ and the line $x = y + 2$.",
    "answer": "\\[\\boxed{\\dfrac{9}{2}}\\]",
    "trap": "Integrating in $x$ forces the curve $x=y^{2}$ to be read as $y=\\pm\\sqrt{x}$, so the region must be split at $x=1$ (where the line meets the lower arc): for $0\\le x\\le 1$ the strip runs from $y=-\\sqrt{x}$ to $y=+\\sqrt{x}$, while for $1\\le x\\le 4$ it runs from the line $y=x-2$ up to $y=+\\sqrt{x}$ — three boundary pieces, easy to mis-order. Dropping the cap on $[0,1]$ and keeping only $\\int_{1}^{4}\\!\\big(\\sqrt{x}-(x-2)\\big)\\,dx=\\tfrac{19}{6}$ gives the wrong answer. In $y$ both boundaries are single-valued, so the whole area is one clean integral.",
    "solutions": [
      {
        "name": "Right boundary minus left, in y",
        "steps": [
          "Intersections: $y^{2}=y+2\\Rightarrow y^{2}-y-2=0\\Rightarrow (y-2)(y+1)=0\\Rightarrow y=-1,\\,2$.",
          "On $[-1,2]$ test $y=\\tfrac12$: line $x=\\tfrac52$ versus parabola $x=\\tfrac14$, so the line $x=y+2$ lies to the right of the parabola $x=y^{2}$ throughout.",
          "$A=\\displaystyle\\int_{-1}^{2}\\big[(y+2)-y^{2}\\big]\\,dy=\\Big[\\tfrac{y^{2}}{2}+2y-\\tfrac{y^{3}}{3}\\Big]_{-1}^{2}$.",
          "$=\\big(2+4-\\tfrac83\\big)-\\big(\\tfrac12-2+\\tfrac13\\big)=\\tfrac{10}{3}-\\big(-\\tfrac76\\big)=\\dfrac{9}{2}$."
        ]
      },
      {
        "name": "Chord-segment formula",
        "steps": [
          "The signed strip width $f(y)=(y+2)-y^{2}=-\\,(y+1)(y-2)$ is a downward quadratic in $y$ with leading coefficient $a=-1$ and roots $y=-1,\\,2$, gap $\\Delta=2-(-1)=3$.",
          "For a quadratic $a(y-r_1)(y-r_2)$ the area between its zeros equals $\\dfrac{|a|\\,\\Delta^{3}}{6}$.",
          "$A=\\dfrac{1\\cdot 3^{3}}{6}=\\dfrac{27}{6}=\\dfrac{9}{2}$."
        ]
      },
      {
        "name": "Verification by the x-split (the hard way)",
        "steps": [
          "In $x$ the cap $0\\le x\\le 1$ contributes $\\displaystyle\\int_{0}^{1}\\big(\\sqrt{x}-(-\\sqrt{x})\\big)\\,dx=\\int_{0}^{1}2\\sqrt{x}\\,dx=\\tfrac{4}{3}$.",
          "The slanted part $1\\le x\\le 4$ contributes $\\displaystyle\\int_{1}^{4}\\big(\\sqrt{x}-(x-2)\\big)\\,dx=\\Big[\\tfrac{2}{3}x^{3/2}-\\tfrac{x^{2}}{2}+2x\\Big]_{1}^{4}=\\tfrac{19}{6}$.",
          "$A=\\tfrac{4}{3}+\\tfrac{19}{6}=\\tfrac{8}{6}+\\tfrac{19}{6}=\\dfrac{27}{6}=\\dfrac{9}{2}$, matching the $y$-integral."
        ]
      }
    ],
    "remark": "Insight: a parabola of the form $x=y^{2}$ is a genuine function of $y$, so a horizontal-strip ($y$) integral never needs the $\\pm\\sqrt{\\;}$ split — and never needs splitting at the curve's vertex — that a vertical-strip ($x$) integral is forced into. Choosing the strip direction in which both boundaries are single-valued collapses three pieces into one."
  },
  {
    "theme": "areayaxis",
    "themeLabel": "Area w.r.t. the y-axis",
    "title": "The Sideways Parabola and a Wall",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "sideways parabola",
      "vertical line",
      "double-valued in x",
      "horizontal strips"
    ],
    "statement": "Find the area of the region bounded by the parabola $y^{2} = x$ and the vertical line $x = 4$.",
    "answer": "\\[\\boxed{\\dfrac{32}{3}}\\]",
    "trap": "Computing $\\int_{0}^{4}\\sqrt{x}\\,dx=\\tfrac{16}{3}$ and stopping. That captures only the upper half ($y\\ge0$); the parabola is symmetric about the $x$-axis, so the true region runs $y\\in[-2,2]$. Because $y^{2}=x$ is double-valued in $x$, the $x$-integral secretly drops the lower branch.",
    "solutions": [
      {
        "name": "Horizontal strips (line minus parabola)",
        "steps": [
          "Solve the parabola for $x$: $x=y^{2}$; it meets $x=4$ at $y=\\pm2$.",
          "For $y\\in[-2,2]$ the strip runs from $x=y^{2}$ (left) to $x=4$ (right).",
          "$A=\\displaystyle\\int_{-2}^{2}(4-y^{2})\\,dy=2\\int_{0}^{2}(4-y^{2})\\,dy=2\\big[4y-\\tfrac{y^{3}}{3}\\big]_{0}^{2}$.",
          "$=2\\big(8-\\tfrac83\\big)=2\\cdot\\tfrac{16}{3}=\\dfrac{32}{3}$."
        ]
      },
      {
        "name": "Vertical strips, both branches",
        "steps": [
          "In $x$, each strip has height $2\\sqrt{x}$ (top branch minus bottom branch).",
          "$A=\\displaystyle\\int_{0}^{4}2\\sqrt{x}\\,dx=2\\cdot\\tfrac{2}{3}x^{3/2}\\Big|_{0}^{4}=\\tfrac{4}{3}\\cdot8=\\dfrac{32}{3}$.",
          "The factor $2$ for both branches is exactly what the naive single-branch $x$-integral forgets."
        ]
      }
    ],
    "remark": "Insight: $y^{2}=x$ is one curve but two functions of $x$. Switching to $x=y^{2}$ as a function of $y$ makes the symmetric height automatic."
  },
  {
    "theme": "areayaxis",
    "themeLabel": "Area w.r.t. the y-axis",
    "title": "Parabola Carved from a Disc",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "circle",
      "parabola",
      "horizontal strips",
      "sector plus segment",
      "y-natural"
    ],
    "statement": "Find the area of the region that lies inside the circle $x^{2}+y^{2}=8$ and to the right of the parabola $y^{2}=2x$.",
    "answer": "\\[\\boxed{2\\pi+\\dfrac{4}{3}}\\]",
    "trap": "Setting it up in $x$: the right boundary switches from the parabola to the circle as $x$ grows, and both are double-valued in $x$, so you must split at the intersection abscissa and track upper/lower arcs separately — a four-piece mess where the circular part is easily mis-bounded. In $y$ each strip is a single clean span from parabola to circle.",
    "solutions": [
      {
        "name": "Horizontal strips: circle minus parabola",
        "steps": [
          "Intersection: $y^{2}=2x$ and $x^{2}+y^{2}=8\\Rightarrow x^{2}+2x-8=0\\Rightarrow x=2$, so $y^{2}=4,\\ y=\\pm2$.",
          "For $y\\in[-2,2]$ the strip runs from the parabola $x=\\tfrac{y^{2}}{2}$ (left) to the circle $x=\\sqrt{8-y^{2}}$ (right).",
          "$A=\\displaystyle\\int_{-2}^{2}\\Big(\\sqrt{8-y^{2}}-\\tfrac{y^{2}}{2}\\Big)\\,dy$.",
          "$\\int_{-2}^{2}\\sqrt{8-y^{2}}\\,dy=\\big[\\tfrac{y}{2}\\sqrt{8-y^{2}}+4\\arcsin\\tfrac{y}{2\\sqrt2}\\big]_{-2}^{2}=2\\cdot2+8\\cdot\\tfrac{\\pi}{4}=4+2\\pi$.",
          "$\\int_{-2}^{2}\\tfrac{y^{2}}{2}\\,dy=\\tfrac12\\cdot\\tfrac{2\\cdot8}{3}=\\tfrac{8}{3}$, so $A=(4+2\\pi)-\\tfrac83=2\\pi+\\dfrac{4}{3}$."
        ]
      },
      {
        "name": "Sector + segment decomposition",
        "steps": [
          "The chord $y=\\pm2$ at $x=2$ and radius $2\\sqrt2$ subtend a half-angle $\\theta$ with $\\sin\\theta=\\tfrac{2}{2\\sqrt2}=\\tfrac1{\\sqrt2}$, so $\\theta=\\tfrac{\\pi}{4}$ and full angle $\\tfrac{\\pi}{2}$.",
          "Circular cap right of $x=2$: sector $\\tfrac12 r^{2}(2\\theta)=\\tfrac12\\cdot8\\cdot\\tfrac{\\pi}{2}=2\\pi$ minus triangle $\\tfrac12\\cdot4\\cdot2=4$, giving cap $=2\\pi-4$.",
          "Region between parabola and the line $x=2$ (a parabolic segment): $\\int_{-2}^{2}(2-\\tfrac{y^{2}}{2})\\,dy=8-\\tfrac83=\\tfrac{16}{3}$.",
          "Total $=(2\\pi-4)+\\tfrac{16}{3}=2\\pi+\\dfrac{4}{3}$."
        ]
      }
    ],
    "remark": "Insight: a circle and a sideways parabola are both single-valued as $x(y)=\\sqrt{r^{2}-y^{2}}$ and $x=y^{2}/2$. One horizontal-strip integral fuses a circular sector with a parabolic segment without any case-splitting."
  },
  {
    "theme": "areayaxis",
    "themeLabel": "Area w.r.t. the y-axis",
    "title": "The Bell Pressed Against the Axis",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "rational curve",
      "arctangent",
      "x as function of y",
      "awkward x-integral"
    ],
    "statement": "A region is bounded by the $y$-axis, the line $y=1$, and the curve $x=\\dfrac{1}{1+y^{2}}$. Find its exact area.",
    "answer": "\\[\\boxed{\\dfrac{\\pi}{4}}\\]",
    "trap": "Trying to integrate in $x$ first. Inverting the curve gives $y=\\sqrt{\\tfrac{1-x}{x}}$, valid only on $x\\in[\\tfrac12,1]$, and the region must then be split into a rectangle (for $x\\in[0,\\tfrac12]$) plus a curved piece — an ugly $\\int\\sqrt{(1-x)/x}\\,dx$. Read as $x(y)$, every strip is the single clean width $1/(1+y^{2})$, and the integral is an instant arctangent.",
    "solutions": [
      {
        "name": "Horizontal strips (width = x of the curve)",
        "steps": [
          "For $y\\in[0,1]$ each strip runs from the $y$-axis $(x=0)$ to the curve $x=\\tfrac{1}{1+y^{2}}$.",
          "$A=\\displaystyle\\int_{0}^{1}\\frac{dy}{1+y^{2}}=\\big[\\arctan y\\big]_{0}^{1}$.",
          "$=\\arctan 1-\\arctan 0=\\dfrac{\\pi}{4}$."
        ]
      },
      {
        "name": "Trigonometric substitution",
        "steps": [
          "Let $y=\\tan\\theta$, $dy=\\sec^{2}\\theta\\,d\\theta$, so $\\tfrac{dy}{1+y^{2}}=d\\theta$.",
          "As $y:0\\to1$, $\\theta:0\\to\\tfrac{\\pi}{4}$.",
          "$A=\\displaystyle\\int_{0}^{\\pi/4} d\\theta=\\dfrac{\\pi}{4}$."
        ]
      }
    ],
    "remark": "Insight: when a curve is naturally $x=g(y)$, integrating along $y$ can collapse a multi-piece $x$-problem into a single elementary antiderivative."
  },
  {
    "theme": "areayaxis",
    "themeLabel": "Area w.r.t. the y-axis",
    "title": "A Sine Wave Lying on Its Side",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "trigonometric curve",
      "x as function of y",
      "horizontal strips",
      "sign of width"
    ],
    "statement": "Find the area of the region enclosed between the $y$-axis and the curve $x=\\sin 2y$ for $y\\in\\big[0,\\tfrac{\\pi}{2}\\big]$.",
    "answer": "\\[\\boxed{1}\\]",
    "trap": "The reflex is to invert $x=\\sin 2y$ to $y=\\tfrac12\\arcsin x$ and compute $\\int_{0}^{1} y\\,dx=\\int_{0}^{1}\\tfrac12\\arcsin x\\,dx=\\tfrac{\\pi}{4}-\\tfrac12\\approx0.285$. This is wrong on two counts. First, as $y$ runs $0\\to\\tfrac{\\pi}{2}$, $x=\\sin 2y$ rises from $0$ to $1$ (at $y=\\tfrac{\\pi}{4}$) and falls back to $0$, so the single branch $y=\\tfrac12\\arcsin x$ traces only the rising half $y\\in[0,\\tfrac{\\pi}{4}]$ and misses the descending half entirely. Second, $\\int y\\,dx$ measures area against the $x$-axis (vertical strips), not against the $y$-axis as the problem asks. Both flaws pull the value down to $\\tfrac{\\pi}{4}-\\tfrac12$ instead of the true $1$. Because $\\sin 2y\\ge0$ on the whole interval $[0,\\tfrac{\\pi}{2}]$ (here $2y\\in[0,\\pi]$), the honest computation is a single horizontal-strip integral in $y$ with no sign-splitting needed.",
    "solutions": [
      {
        "name": "Horizontal strips in $y$",
        "steps": [
          "Since $2y\\in[0,\\pi]$ for $y\\in[0,\\tfrac{\\pi}{2}]$, we have $\\sin 2y\\ge0$, so each horizontal strip runs from the $y$-axis ($x=0$) to the curve ($x=\\sin 2y$) with width $\\sin 2y$.",
          "$A=\\displaystyle\\int_{0}^{\\pi/2}\\sin 2y\\,dy=\\Big[-\\tfrac12\\cos 2y\\Big]_{0}^{\\pi/2}$.",
          "$=-\\tfrac12(\\cos\\pi-\\cos 0)=-\\tfrac12(-1-1)=1$."
        ]
      },
      {
        "name": "Split at the peak and double",
        "steps": [
          "The width $\\sin 2y$ is symmetric about $y=\\tfrac{\\pi}{4}$ (where $x$ peaks at $1$), so $A=2\\displaystyle\\int_{0}^{\\pi/4}\\sin 2y\\,dy$.",
          "$=2\\Big[-\\tfrac12\\cos 2y\\Big]_{0}^{\\pi/4}=2\\cdot\\tfrac12\\big(\\cos 0-\\cos\\tfrac{\\pi}{2}\\big)=2\\cdot\\tfrac12(1-0)=1$.",
          "The factor $2$ explicitly restores the descending half that the $\\arcsin$ inversion would silently drop."
        ]
      },
      {
        "name": "Substitution $t=2y$",
        "steps": [
          "Let $t=2y$, so $dt=2\\,dy$ and $t$ runs $0\\to\\pi$ as $y$ runs $0\\to\\tfrac{\\pi}{2}$.",
          "$A=\\displaystyle\\int_{0}^{\\pi/2}\\sin 2y\\,dy=\\tfrac12\\int_{0}^{\\pi}\\sin t\\,dt=\\tfrac12\\big[-\\cos t\\big]_{0}^{\\pi}$.",
          "$=\\tfrac12\\big(-\\cos\\pi+\\cos 0\\big)=\\tfrac12(1+1)=1$."
        ]
      }
    ],
    "remark": "Insight: a curve $x=f(y)$ that turns around in $x$ is still single-valued in $y$. Integrating along $y$ (horizontal strips) sidesteps both traps at once - the branch loss from inverting to $y(x)$, and the wrong reference axis from using $\\int y\\,dx$. Whenever the boundary is given as $x=f(y)$ and the region hugs the $y$-axis, integrate in $y$ directly and only check the sign of the width $f(y)$."
  },
  {
    "theme": "areayaxis",
    "themeLabel": "Area w.r.t. the y-axis",
    "title": "The Parabola and the Secant Line",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "sideways parabola",
      "secant line",
      "horizontal strips",
      "avoid splitting"
    ],
    "statement": "Find the area of the region enclosed between the parabola $y^{2}=4x$ and the line $y=2x-4$.",
    "answer": "\\[\\boxed{9}\\]",
    "trap": "Integrating in $x$. The line meets the parabola at $x=1$ and $x=4$, but the lower arc of the parabola dips below the line, so the $x$-setup forces a split at $x=1$: for $x\\in[0,1]$ the region is between the two parabola arcs, while for $x\\in[1,4]$ it is between the line and the upper arc. Most attempts forget the small left lobe and report only the right piece, $\\int_{1}^{4}\\big(2\\sqrt{x}-(2x-4)\\big)\\,dx=\\tfrac{19}{3}$, missing the lobe's $\\tfrac{8}{3}$. In $y$ the boundaries are single-valued and one integral does it.",
    "solutions": [
      {
        "name": "Horizontal strips (line minus parabola)",
        "steps": [
          "Write both as $x(y)$: parabola $x=\\tfrac{y^{2}}{4}$, line $x=\\tfrac{y+4}{2}$.",
          "Intersections: $\\tfrac{y^{2}}{4}=\\tfrac{y+4}{2}\\Rightarrow y^{2}-2y-8=0\\Rightarrow y=-2,\\,4$.",
          "On $[-2,4]$ the line lies to the right of the parabola: $A=\\displaystyle\\int_{-2}^{4}\\Big(\\tfrac{y+4}{2}-\\tfrac{y^{2}}{4}\\Big)\\,dy$.",
          "$=\\Big[\\tfrac{y^{2}}{4}+2y-\\tfrac{y^{3}}{12}\\Big]_{-2}^{4}=\\big(4+8-\\tfrac{16}{3}\\big)-\\big(1-4+\\tfrac23\\big)=\\tfrac{20}{3}-(-\\tfrac73)=\\dfrac{27}{3}=9$."
        ]
      },
      {
        "name": "Parabolic-segment shortcut",
        "steps": [
          "The strip width $\\tfrac{y+4}{2}-\\tfrac{y^{2}}{4}=-\\tfrac14(y^{2}-2y-8)=-\\tfrac14(y+2)(y-4)$ is a downward parabola in $y$.",
          "Leading coefficient magnitude $a=\\tfrac14$, root gap $\\Delta=4-(-2)=6$.",
          "Enclosed area $=\\dfrac{a\\,\\Delta^{3}}{6}=\\dfrac{(1/4)\\cdot216}{6}=\\dfrac{54}{6}=9$."
        ]
      },
      {
        "name": "Honest x-integration (split, both pieces)",
        "steps": [
          "Line and parabola meet at $x=1,4$; the parabola also touches the $y$-axis at $x=0$, forcing a split at $x=1$.",
          "Left lobe $x\\in[0,1]$, between the two arcs: $\\displaystyle\\int_{0}^{1}\\big(2\\sqrt{x}-(-2\\sqrt{x})\\big)\\,dx=\\int_{0}^{1}4\\sqrt{x}\\,dx=\\tfrac{8}{3}$.",
          "Right piece $x\\in[1,4]$, upper arc minus line: $\\displaystyle\\int_{1}^{4}\\big(2\\sqrt{x}-(2x-4)\\big)\\,dx=\\tfrac{19}{3}$.",
          "Total $=\\tfrac{8}{3}+\\tfrac{19}{3}=\\dfrac{27}{3}=9$, matching the single $y$-integral and exposing the forgotten lobe."
        ]
      }
    ],
    "remark": "Insight: when one boundary is a sideways parabola, $x(y)$ is single-valued, so the $y$-integral collapses the two-piece $x$-region (and its easily-forgotten lobe) into a single clean strip. The strip width is itself a quadratic in $y$, so the segment formula $\\dfrac{a\\,\\Delta^{3}}{6}$ finishes it in one line."
  },
  {
    "theme": "areayaxis",
    "themeLabel": "Area w.r.t. the y-axis",
    "title": "Where Arcsine Meets Arccosine",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "inverse trig",
      "horizontal strips",
      "piecewise inner boundary",
      "grand hybrid"
    ],
    "statement": "Find the area of the region bounded by the $y$-axis and the two curves $x=\\arcsin y$ and $x=\\arccos y$ (with $y\\in[0,1]$), lying to the left of both curves.",
    "answer": "\\[\\boxed{\\sqrt{2}-1}\\]",
    "trap": "Treating the inner boundary as a single curve. The two arcs cross at $y=\\tfrac{1}{\\sqrt2}$ (where $\\arcsin y=\\arccos y=\\tfrac{\\pi}{4}$): below the crossing $\\arcsin y$ is the inner (smaller-$x$) curve, above it $\\arccos y$ is. Integrating $\\arcsin y$ over all of $[0,1]$ gives $\\tfrac{\\pi}{2}-1\\approx0.571$ and integrating $\\arccos y$ over all of $[0,1]$ gives $1$ \\textemdash{} both measure the wrong region, since the left boundary switches curve at the crossing. A second trap is to assume the two pieces have equal area; they do not (the lower piece is $\\approx0.262$, the upper $\\approx0.152$), because the swap $y\\mapsto\\sqrt{1-y^2}$ that exchanges the two arcs is not area-preserving.",
    "solutions": [
      {
        "name": "Horizontal strips with the piecewise inner curve",
        "steps": [
          "Lying to the left of both curves means $0\\le x\\le\\min(\\arcsin y,\\arccos y)$, so each horizontal strip runs from the $y$-axis to the nearer curve.",
          "The curves cross where $\\arcsin y=\\arccos y$, i.e. $y=\\tfrac{1}{\\sqrt2}$. For $0\\le y\\le\\tfrac{1}{\\sqrt2}$ the inner curve is $\\arcsin y$; for $\\tfrac{1}{\\sqrt2}\\le y\\le1$ it is $\\arccos y$.",
          "$A=\\displaystyle\\int_{0}^{1/\\sqrt2}\\arcsin y\\,dy+\\int_{1/\\sqrt2}^{1}\\arccos y\\,dy$.",
          "Using $\\int\\arcsin y\\,dy=y\\arcsin y+\\sqrt{1-y^{2}}$, the first piece is $\\big[\\tfrac{1}{\\sqrt2}\\cdot\\tfrac{\\pi}{4}+\\tfrac{1}{\\sqrt2}\\big]-[0+1]=\\tfrac{\\pi}{4\\sqrt2}+\\tfrac{1}{\\sqrt2}-1$.",
          "Using $\\int\\arccos y\\,dy=y\\arccos y-\\sqrt{1-y^{2}}$, the second piece is $[0-0]-\\big[\\tfrac{1}{\\sqrt2}\\cdot\\tfrac{\\pi}{4}-\\tfrac{1}{\\sqrt2}\\big]=-\\tfrac{\\pi}{4\\sqrt2}+\\tfrac{1}{\\sqrt2}$.",
          "The $\\pm\\tfrac{\\pi}{4\\sqrt2}$ terms cancel, leaving $A=\\tfrac{2}{\\sqrt2}-1=\\sqrt2-1$."
        ]
      },
      {
        "name": "Vertical strips \\textemdash{} integrate in $x$ instead",
        "steps": [
          "Recast the constraints in $x$. Since $\\arcsin$ is increasing, $x\\le\\arcsin y\\iff y\\ge\\sin x$; since $\\arccos$ is decreasing, $x\\le\\arccos y\\iff y\\le\\cos x$.",
          "Thus for a fixed $x$ the region's $y$ runs over $[\\sin x,\\cos x]$, which is non-empty exactly when $\\sin x\\le\\cos x$, i.e. $0\\le x\\le\\tfrac{\\pi}{4}$ (the strip pinches shut at the crossing $x=\\tfrac{\\pi}{4}$).",
          "$A=\\displaystyle\\int_{0}^{\\pi/4}\\big(\\cos x-\\sin x\\big)\\,dx$.",
          "$=\\big[\\sin x+\\cos x\\big]_{0}^{\\pi/4}=\\big(\\tfrac{1}{\\sqrt2}+\\tfrac{1}{\\sqrt2}\\big)-(0+1)=\\sqrt2-1$.",
          "No $\\pi$ ever appears in this route \\textemdash{} a clean confirmation that the answer is the algebraic number $\\sqrt2-1$."
        ]
      }
    ],
    "remark": "Insight: $\\arcsin$ and $\\arccos$ are tailor-made as $x(y)$, and the crossing at $y=\\tfrac{1}{\\sqrt2}$ forces a genuinely piecewise inner boundary. Integrating in $y$ makes the $\\pi$-terms cancel; integrating in $x$ never produces a $\\pi$ at all. Both confirm the clean value $\\sqrt2-1$. Beware the false symmetry shortcut: the two horizontal pieces are unequal, so you cannot just double one of them."
  },
  {
    "theme": "betweencurves",
    "themeLabel": "Area Between Two Curves",
    "title": "Two Parabolas in a Lens",
    "difficulty": 3,
    "task": "Evaluate",
    "tags": [
      "parabolas",
      "enclosed region",
      "intersection",
      "definite integral"
    ],
    "statement": "Find the area of the region enclosed between the curves $y = x^2$ and $y = 2x - x^2$.",
    "answer": "\\[\\boxed{\\dfrac{1}{3}}\\]",
    "trap": "Integrating $\\int (2x-x^2)\\,dx$ over the wrong limits (e.g. $[0,2]$) by guessing where they meet. The curves intersect where $x^2 = 2x - x^2 \\Rightarrow 2x^2-2x=0 \\Rightarrow x=0,1$ — not $x=0,2$; using $[0,2]$ counts a phantom strip where the order has already reversed and inflates the area.",
    "solutions": [
      {
        "name": "Top minus bottom",
        "steps": [
          "Set $x^2 = 2x - x^2$, so $2x^2 - 2x = 0$, giving intersection abscissae $x=0$ and $x=1$.",
          "On $(0,1)$ test $x=\\tfrac12$: $2x-x^2 = \\tfrac34 > \\tfrac14 = x^2$, so $y=2x-x^2$ is the upper curve.",
          "Area $= \\int_0^1 \\big[(2x-x^2)-x^2\\big]\\,dx = \\int_0^1 (2x - 2x^2)\\,dx$.",
          "$= \\big[x^2 - \\tfrac{2}{3}x^3\\big]_0^1 = 1 - \\tfrac23 = \\boxed{\\tfrac13}$."
        ]
      },
      {
        "name": "Shift to a single parabola",
        "steps": [
          "The vertical gap is $g(x) = (2x-x^2) - x^2 = 2x - 2x^2 = 2x(1-x)$, a downward parabola with roots $0,1$.",
          "Area $= \\int_0^1 2x(1-x)\\,dx$.",
          "Use $\\int_0^1 x^k(1-x)^m\\,dx = B(k+1,m+1)$: here $2\\cdot B(2,2) = 2\\cdot \\tfrac{1!\\,1!}{3!} = 2\\cdot\\tfrac16 = \\boxed{\\tfrac13}$."
        ]
      }
    ],
    "remark": "Insight: the only data you need are the correct roots of the difference $g(x)=\\text{top}-\\text{bottom}$; the area is $\\int g$ between consecutive roots, and $g$ itself is the cleanest object to integrate."
  },
  {
    "theme": "betweencurves",
    "themeLabel": "Area Between Two Curves",
    "title": "Where Sine Overtakes Cosine",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "trigonometric curves",
      "sign change",
      "split interval",
      "crossing",
      "zero signed integral"
    ],
    "statement": "Find the total area of the region bounded by $y = \\sin x$, $y = \\cos x$, and the vertical lines $x = 0$ and $x = \\tfrac{\\pi}{2}$.",
    "answer": "\\[\\boxed{2\\sqrt{2}-2}\\]",
    "trap": "Writing the area as $\\int_0^{\\pi/2}(\\cos x - \\sin x)\\,dx$, which equals $0$. The curves cross at $x=\\tfrac{\\pi}{4}$ where $\\cos x = \\sin x$; cosine is on top only on $[0,\\tfrac\\pi4]$ and sine on top on $[\\tfrac\\pi4,\\tfrac\\pi2]$, so a single signed integral cancels the two equal pieces to zero — the value $0$ is the diagnostic that a split is mandatory.",
    "solutions": [
      {
        "name": "Split at the crossing",
        "steps": [
          "Solve $\\sin x = \\cos x$ on $[0,\\tfrac\\pi2]$: $\\tan x = 1 \\Rightarrow x = \\tfrac\\pi4$.",
          "On $[0,\\tfrac\\pi4]$, $\\cos x \\ge \\sin x$; on $[\\tfrac\\pi4,\\tfrac\\pi2]$, $\\sin x \\ge \\cos x$.",
          "Area $= \\int_0^{\\pi/4}(\\cos x-\\sin x)\\,dx + \\int_{\\pi/4}^{\\pi/2}(\\sin x-\\cos x)\\,dx$.",
          "Each integral equals $\\sqrt2 - 1$, so the total is $2(\\sqrt2-1) = \\boxed{2\\sqrt2-2}$."
        ]
      },
      {
        "name": "Symmetry of the two lobes",
        "steps": [
          "The map $x\\mapsto \\tfrac\\pi2 - x$ swaps $\\sin x$ and $\\cos x$ and sends $[0,\\tfrac\\pi4]$ to $[\\tfrac\\pi4,\\tfrac\\pi2]$, so the two lobes are congruent.",
          "Area $= 2\\int_0^{\\pi/4}(\\cos x - \\sin x)\\,dx = 2\\big[\\sin x + \\cos x\\big]_0^{\\pi/4}$.",
          "$= 2\\big[(\\tfrac{\\sqrt2}{2}+\\tfrac{\\sqrt2}{2}) - (0+1)\\big] = 2(\\sqrt2 - 1) = \\boxed{2\\sqrt2-2}$."
        ]
      },
      {
        "name": "Absolute value via |cos x - sin x|",
        "steps": [
          "Write $\\cos x - \\sin x = \\sqrt2\\cos\\!\\big(x+\\tfrac\\pi4\\big)$, which changes sign at $x=\\tfrac\\pi4$ on $[0,\\tfrac\\pi2]$.",
          "Area $= \\int_0^{\\pi/2}\\sqrt2\\,\\big|\\cos(x+\\tfrac\\pi4)\\big|\\,dx = \\sqrt2\\Big[\\int_0^{\\pi/4}\\cos(x+\\tfrac\\pi4)\\,dx - \\int_{\\pi/4}^{\\pi/2}\\cos(x+\\tfrac\\pi4)\\,dx\\Big]$.",
          "Each bracketed piece equals $1-\\tfrac{1}{\\sqrt2}$, giving $\\sqrt2\\cdot 2\\big(1-\\tfrac1{\\sqrt2}\\big) = 2\\sqrt2-2 = \\boxed{2\\sqrt2-2}$."
        ]
      }
    ],
    "remark": "Insight: whenever two curves cross inside the interval, the area is $\\int|\\,f-g\\,|$, not $\\big|\\int (f-g)\\big|$. Collapsing $f-g$ into a single sinusoid pinpoints the crossing and forces the honest split."
  },
  {
    "theme": "betweencurves",
    "themeLabel": "Area Between Two Curves",
    "title": "The Cubic and Its Line of Symmetry",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "cubic",
      "odd function",
      "double crossing",
      "split interval"
    ],
    "statement": "Find the total area of the region enclosed between the curves $y = x^3$ and $y = x$.",
    "answer": "\\[\\boxed{\\dfrac{1}{2}}\\]",
    "trap": "Treating the picture as one region on $[-1,1]$ and computing $\\int_{-1}^{1}(x - x^3)\\,dx = 0$, or even $\\int_{-1}^{1}(x^3-x)\\,dx=0$. The curves meet at three points $x=-1,0,1$ and the upper/lower roles swap at $x=0$: $x^3 \\ge x$ on $[-1,0]$ but $x \\ge x^3$ on $[0,1]$. The two enclosed loops have signed areas that cancel, so a single straight integral returns $0$. Both loops must be counted as positive areas.",
    "solutions": [
      {
        "name": "Two loops, then add",
        "steps": [
          "Solve $x^3 = x \\Rightarrow x(x^2-1)=0 \\Rightarrow x=-1,0,1$.",
          "On $(-1,0)$ test $x=-\\tfrac12$: $x^3=-\\tfrac18 > -\\tfrac12 = x$, so $x^3$ is on top; on $(0,1)$ the line $x$ is on top (at $x=\\tfrac12$, $x=\\tfrac12 > \\tfrac18 = x^3$).",
          "Area $= \\int_{-1}^{0}(x^3-x)\\,dx + \\int_{0}^{1}(x-x^3)\\,dx$.",
          "$\\int_{-1}^{0}(x^3-x)\\,dx = \\big[\\tfrac{x^4}{4}-\\tfrac{x^2}{2}\\big]_{-1}^{0} = 0-\\big(\\tfrac14-\\tfrac12\\big)=\\tfrac14$ and $\\int_{0}^{1}(x-x^3)\\,dx=\\big[\\tfrac{x^2}{2}-\\tfrac{x^4}{4}\\big]_0^1=\\tfrac14$.",
          "Total $= \\tfrac14 + \\tfrac14 = \\boxed{\\tfrac12}$."
        ]
      },
      {
        "name": "Use odd symmetry",
        "steps": [
          "The difference $x^3-x$ is an odd function, so the loop on $[-1,0]$ is congruent to the loop on $[0,1]$: total area $= 2\\int_0^1 (x - x^3)\\,dx$.",
          "$\\int_0^1(x-x^3)\\,dx = \\big[\\tfrac{x^2}{2} - \\tfrac{x^4}{4}\\big]_0^1 = \\tfrac12-\\tfrac14 = \\tfrac14$.",
          "Total $= 2\\cdot\\tfrac14 = \\boxed{\\tfrac12}$."
        ]
      }
    ],
    "remark": "Insight: an odd difference $f-g$ guarantees a signed integral of $0$ over an interval symmetric about the origin. That vanishing is the give-away that there are two congruent loops to be added, never subtracted."
  },
  {
    "theme": "betweencurves",
    "themeLabel": "Area Between Two Curves",
    "title": "Sine versus Its Double",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "trigonometric curves",
      "double angle",
      "interior crossing",
      "split interval",
      "advanced"
    ],
    "statement": "Find the total area of the region enclosed between $y = \\sin x$ and $y = \\sin 2x$ for $0 \\le x \\le \\pi$.",
    "answer": "\\[\\boxed{\\dfrac{5}{2}}\\]",
    "trap": "Computing $\\int_0^{\\pi}(\\sin 2x - \\sin x)\\,dx = -2$ (or its absolute value) as if one curve stayed above the other. They intersect at $x=0,\\tfrac\\pi3,\\pi$: $\\sin 2x \\ge \\sin x$ on $[0,\\tfrac\\pi3]$ but $\\sin x \\ge \\sin 2x$ on $[\\tfrac\\pi3,\\pi]$ (the larger second lobe). A single signed integral lets the big positive lobe partly cancel the small one.",
    "solutions": [
      {
        "name": "Factor and split",
        "steps": [
          "$\\sin 2x - \\sin x = \\sin x(2\\cos x - 1)$, which vanishes at $\\sin x=0$ ($x=0,\\pi$) and $\\cos x=\\tfrac12$ ($x=\\tfrac\\pi3$).",
          "On $(0,\\tfrac\\pi3)$ both factors are positive, so $\\sin 2x \\ge \\sin x$; on $(\\tfrac\\pi3,\\pi)$ the factor $2\\cos x-1<0$, so $\\sin x \\ge \\sin 2x$.",
          "Area $= \\int_0^{\\pi/3}(\\sin 2x - \\sin x)\\,dx + \\int_{\\pi/3}^{\\pi}(\\sin x - \\sin 2x)\\,dx$.",
          "First $=\\big[-\\tfrac{\\cos2x}{2}+\\cos x\\big]_0^{\\pi/3} = \\tfrac14$; second $=\\big[-\\cos x+\\tfrac{\\cos2x}{2}\\big]_{\\pi/3}^{\\pi} = \\tfrac94$. Total $=\\tfrac14+\\tfrac94=\\boxed{\\tfrac52}$."
        ]
      },
      {
        "name": "Antiderivative of the absolute value",
        "steps": [
          "Let $F(x) = -\\tfrac{\\cos 2x}{2} + \\cos x$ be an antiderivative of $\\sin 2x - \\sin x$.",
          "Required area $= |F(\\tfrac\\pi3)-F(0)| + |F(\\pi)-F(\\tfrac\\pi3)|$ using the sign on each subinterval.",
          "Compute $F(0)=\\tfrac12$, $F(\\tfrac\\pi3)=\\tfrac34$, $F(\\pi)=-\\tfrac32$.",
          "Area $= |\\tfrac34-\\tfrac12| + |\\,-\\tfrac32-\\tfrac34| = \\tfrac14 + \\tfrac94 = \\boxed{\\tfrac52}$."
        ]
      }
    ],
    "remark": "Insight: factoring the difference $\\sin x(2\\cos x-1)$ exposes every crossing at once and the sign of each factor tells you which curve leads on each piece — far cleaner than plotting."
  },
  {
    "theme": "betweencurves",
    "themeLabel": "Area Between Two Curves",
    "title": "Sideways Parabola Meets a Line",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "integrate in y",
      "sideways parabola",
      "right minus left",
      "split avoidance"
    ],
    "statement": "Find the area of the region enclosed between the parabola $x = y^2$ and the line $x = y + 2$.",
    "answer": "\\[\\boxed{\\dfrac{9}{2}}\\]",
    "trap": "Insisting on integrating in $x$ and writing one integral $\\int(\\text{line minus parabola})\\,dx$. In $x$ the upper boundary is $y=\\sqrt x$ but the lower boundary changes from $-\\sqrt x$ to $x-2$ at $x=1$, forcing a two-piece split; doing it as a single $x$-integral with the wrong lower curve mis-bounds the region (for instance $\\int_0^4(\\sqrt x-(x-2))\\,dx=\\tfrac{16}{3}\\neq\\tfrac92$). Integrating in $y$ avoids the split entirely.",
    "solutions": [
      {
        "name": "Horizontal strips (integrate in y)",
        "steps": [
          "Intersect: $y^2 = y+2 \\Rightarrow y^2-y-2=0 \\Rightarrow (y-2)(y+1)=0$, so $y=-1,2$.",
          "For $y\\in(-1,2)$ the line $x=y+2$ is to the right of the parabola $x=y^2$.",
          "Area $= \\int_{-1}^{2}\\big[(y+2)-y^2\\big]\\,dy = \\big[\\tfrac{y^2}{2}+2y-\\tfrac{y^3}{3}\\big]_{-1}^{2}$.",
          "$= \\big(2+4-\\tfrac83\\big) - \\big(\\tfrac12-2+\\tfrac13\\big) = \\tfrac{10}{3} - \\big(-\\tfrac76\\big) = \\boxed{\\tfrac92}$."
        ]
      },
      {
        "name": "Vertical strips with the necessary split (check)",
        "steps": [
          "In $x$: for $x\\in[0,1]$ the strip runs between $y=-\\sqrt x$ and $y=\\sqrt x$ (height $2\\sqrt x$); for $x\\in[1,4]$ between $y=x-2$ and $y=\\sqrt x$.",
          "Area $= \\int_0^1 2\\sqrt x\\,dx + \\int_1^4\\big(\\sqrt x-(x-2)\\big)\\,dx$.",
          "$= \\tfrac43 + \\big[\\tfrac{2}{3}x^{3/2} - \\tfrac{x^2}{2}+2x\\big]_1^4 = \\tfrac43 + \\tfrac{19}{6} = \\boxed{\\tfrac92}$, confirming the $y$-integral."
        ]
      }
    ],
    "remark": "Insight: choose the variable of integration that makes each boundary a single function across the whole range. Integrating in $y$ here turns a two-piece job into one clean integral."
  },
  {
    "theme": "betweencurves",
    "themeLabel": "Area Between Two Curves",
    "title": "A Cubic Crossing a Line Thrice",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "cubic vs line",
      "three intersections",
      "split interval",
      "sign analysis"
    ],
    "statement": "Find the total area of the finite region(s) enclosed between $y = x^3 - 3x$ and $y = x$.",
    "answer": "\\[\\boxed{8}\\]",
    "trap": "Computing the single signed integral $\\int_{-2}^{2}\\big(x - (x^3-3x)\\big)\\,dx = 0$ and concluding the area is $0$, or taking its absolute value. The curves meet at $x=-2,0,2$ and the upper/lower roles swap at $x=0$, so the two enclosed loops must be added separately.",
    "solutions": [
      {
        "name": "Find all three crossings, split at the middle",
        "steps": [
          "Solve $x^3-3x = x \\Rightarrow x^3-4x=0 \\Rightarrow x(x-2)(x+2)=0$, so $x=-2,0,2$.",
          "On $(-2,0)$ test $x=-1$: cubic $=2 > -1=$ line, so cubic on top; on $(0,2)$ the line is on top.",
          "Area $= \\int_{-2}^{0}\\big[(x^3-3x)-x\\big]\\,dx + \\int_{0}^{2}\\big[x-(x^3-3x)\\big]\\,dx$.",
          "Each loop $= \\int_0^2(4x-x^3)\\,dx = \\big[2x^2-\\tfrac{x^4}{4}\\big]_0^2 = 4$; total $=4+4=\\boxed{8}$."
        ]
      },
      {
        "name": "Odd symmetry",
        "steps": [
          "$g(x) = (x^3-3x)-x = x^3-4x$ is odd, so the two loops are congruent.",
          "Total area $= 2\\int_0^2 |x^3-4x|\\,dx = 2\\int_0^2 (4x-x^3)\\,dx$ (since $x^3-4x<0$ on $(0,2)$).",
          "$= 2\\big[2x^2 - \\tfrac{x^4}{4}\\big]_0^2 = 2(8-4) = \\boxed{8}$."
        ]
      }
    ],
    "remark": "Insight: a cubic-minus-line is an odd-degree polynomial; when it has roots symmetric about the swap point its signed integral vanishes, which is precisely why the area must be assembled loop-by-loop."
  },
  {
    "theme": "betweencurves",
    "themeLabel": "Area Between Two Curves",
    "title": "Parabola Caged by Its Tangents",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "tangent lines",
      "parabola",
      "external point",
      "split at apex",
      "fusion"
    ],
    "statement": "From the point $P=(0,-1)$ two tangent lines are drawn to the parabola $y = x^2$. Find the area of the region enclosed between the parabola and these two tangent lines.",
    "answer": "\\[\\boxed{\\dfrac{2}{3}}\\]",
    "trap": "Using a single integral with one tangent as the lower boundary across the whole span $[-1,1]$. The lower boundary of the region is the tangent on that side: it is $y=-2x-1$ on $[-1,0]$ and switches to $y=2x-1$ on $[0,1]$, the two tangents meeting at the apex point $P$. Treating one tangent as valid throughout double-counts on one half and misses area on the other.",
    "solutions": [
      {
        "name": "Find the tangents, then split at P",
        "steps": [
          "A tangent at $(t,t^2)$ is $y = 2tx - t^2$; through $(0,-1)$: $-1 = -t^2 \\Rightarrow t=\\pm 1$, giving lines $y=2x-1$ and $y=-2x-1$.",
          "They touch the parabola at $(1,1)$ and $(-1,1)$ and meet each other at $P=(0,-1)$.",
          "By symmetry, area $= 2\\int_0^1\\big[x^2 - (2x-1)\\big]\\,dx = 2\\int_0^1 (x-1)^2\\,dx$.",
          "$= 2\\cdot\\big[\\tfrac{(x-1)^3}{3}\\big]_0^1 = 2\\cdot\\tfrac13 = \\boxed{\\tfrac23}$."
        ]
      },
      {
        "name": "Triangle minus parabolic area",
        "steps": [
          "The three vertices are $(-1,1),(1,1),(0,-1)$; the triangle they form has base $2$ (along $y=1$) and height $2$, area $=\\tfrac12\\cdot2\\cdot2 = 2$.",
          "The parabolic segment cut by the chord $y=1$ between $x=-1,1$ has area $\\int_{-1}^{1}(1-x^2)\\,dx = \\tfrac43$.",
          "Desired region $=$ triangle $-$ segment $= 2 - \\tfrac43 = \\boxed{\\tfrac23}$."
        ]
      }
    ],
    "remark": "Insight: tangents from an external point to $y=x^2$ meet at that point, so the region's lower boundary is genuinely piecewise and must split at the apex. The triangle-minus-segment view turns the integral into pure geometry."
  },
  {
    "theme": "betweencurves",
    "themeLabel": "Area Between Two Curves",
    "title": "Tune the Parabolas to Area 72",
    "difficulty": 4,
    "task": "Find all",
    "tags": [
      "parameter",
      "reflected parabolas",
      "area equation",
      "cube root"
    ],
    "statement": "For a constant $a>0$ the curves $y = a - x^2$ and $y = x^2 - a$ enclose a region. Find all $a$ for which this enclosed area equals $72$.",
    "answer": "\\[\\boxed{a = 9}\\]",
    "trap": "Setting up the area as a function of $a$ but forgetting that the intersection limits $x=\\pm\\sqrt a$ themselves depend on $a$, then solving a wrong linear-in-$a$ equation. The area scales as $a^{3/2}$ (limits $\\propto a^{1/2}$ and integrand $\\propto a$), so the equation is $\\tfrac{8}{3}a^{3/2}=72$, a cube-root relation, not $\\propto a$.",
    "solutions": [
      {
        "name": "Area as a function of a",
        "steps": [
          "The curves are reflections of each other in the $x$-axis; they meet where $a-x^2 = x^2-a \\Rightarrow x^2=a \\Rightarrow x=\\pm\\sqrt a$, with $y=a-x^2$ on top.",
          "Area$(a) = \\int_{-\\sqrt a}^{\\sqrt a}\\big[(a-x^2)-(x^2-a)\\big]\\,dx = \\int_{-\\sqrt a}^{\\sqrt a}(2a-2x^2)\\,dx$.",
          "$= 2\\big[2a x - \\tfrac{2}{3}x^3\\big]_0^{\\sqrt a} = 4a\\sqrt a - \\tfrac43 a\\sqrt a = \\tfrac{8}{3}a^{3/2}$.",
          "Set $\\tfrac{8}{3}a^{3/2}=72 \\Rightarrow a^{3/2}=27 \\Rightarrow a = 27^{2/3} = \\boxed{9}$."
        ]
      },
      {
        "name": "Scaling argument",
        "steps": [
          "Substitute $x = \\sqrt a\\,u$: the region maps to the fixed region between $y=a(1-u^2)$ and $y=a(u^2-1)$ over $u\\in[-1,1]$.",
          "Then $dx=\\sqrt a\\,du$ and the integrand scales by $a$, so Area$(a) = a\\sqrt a\\cdot\\text{Area}(1) = a^{3/2}\\cdot\\tfrac83$.",
          "Solve $\\tfrac83 a^{3/2}=72$: $a^{3/2}=27$, hence $a=\\boxed{9}$."
        ]
      }
    ],
    "remark": "Insight: when a parameter stretches both the limits and the height of a region, the area is a power law in the parameter ($a^{3/2}$ here). Spotting the exponent by dimensional/scaling reasoning beats brute-force integration."
  },
  {
    "theme": "betweencurves",
    "themeLabel": "Area Between Two Curves",
    "title": "A Horizontal Knife that Halves the Cap",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "bisecting area",
      "horizontal line",
      "cube root",
      "parameter"
    ],
    "statement": "The region $R$ is bounded above by the line $y=1$ and below by the parabola $y=x^2$. A horizontal line $y=c$ (with $0<c<1$) divides $R$ into two parts of equal area. Determine $c$.",
    "answer": "\\[\\boxed{c = \\dfrac{1}{\\sqrt[3]{4}}}\\]",
    "trap": "Assuming $c$ is the midpoint $y=\\tfrac12$, or that equal areas means equal heights. The area of $R$ below $y=c$ is the parabolic cap $\\tfrac43 c^{3/2}$, which is not linear in $c$; setting it equal to half of $\\tfrac43$ gives $c^{3/2}=\\tfrac12$, so $c=2^{-2/3}=1/\\sqrt[3]{4}\\approx0.630$, well above $\\tfrac12$. Plugging $c=\\tfrac12$ instead yields a lower-part area of only $\\tfrac{\\sqrt2}{3}\\approx0.471$, far short of the required $\\tfrac23$.",
    "solutions": [
      {
        "name": "Cap area equals half",
        "steps": [
          "Total area of $R$: the curves meet where $x^2=1$, i.e. $x=\\pm1$, so $\\int_{-1}^{1}(1-x^2)\\,dx = \\tfrac43$.",
          "The part of $R$ below $y=c$ is bounded above by $y=c$ and below by $y=x^2$ for $|x|\\le\\sqrt c$: its area is $\\int_{-\\sqrt c}^{\\sqrt c}(c-x^2)\\,dx = 2\\bigl(c\\sqrt c-\\tfrac13 c^{3/2}\\bigr)=\\tfrac{4}{3}c^{3/2}$.",
          "Bisection requires this cap to be half of $R$: $\\tfrac43 c^{3/2} = \\tfrac12\\cdot\\tfrac43 \\Rightarrow c^{3/2}=\\tfrac12$.",
          "$c = \\left(\\tfrac12\\right)^{2/3} = 2^{-2/3} = \\dfrac{1}{\\sqrt[3]{4}} = \\boxed{\\dfrac{1}{\\sqrt[3]{4}}}\\approx0.630.$"
        ]
      },
      {
        "name": "Top slab equals half",
        "steps": [
          "Equivalently, the slab of $R$ between $y=c$ and $y=1$ must also have area $\\tfrac23$. Subtracting the cap from the whole, its area is $\\tfrac43 - \\tfrac43 c^{3/2}$.",
          "Set $\\tfrac43 - \\tfrac43 c^{3/2} = \\tfrac23 \\Rightarrow c^{3/2} = \\tfrac12$, exactly the same equation as before.",
          "Hence $c = 2^{-2/3} = \\dfrac{1}{\\sqrt[3]{4}} = \\boxed{\\dfrac{1}{\\sqrt[3]{4}}}.$"
        ]
      },
      {
        "name": "Scaling argument (no slab integral)",
        "steps": [
          "A parabolic cap of height $h$ cut from $y=x^2$ is self-similar: the map $x\\mapsto\\lambda x,\\ y\\mapsto\\lambda^2 y$ preserves $y=x^2$, scales areas by $\\lambda\\cdot\\lambda^2=\\lambda^3$ and heights by $\\lambda^2$.",
          "Hence the cap area is proportional to (height)$^{3/2}$: writing $A(c)=A(1)\\,c^{3/2}$ with $A(1)=\\tfrac43$ recovers $A(c)=\\tfrac43 c^{3/2}$ without integrating again.",
          "Bisection demands $A(c)=\\tfrac12 A(1)$, i.e. $c^{3/2}=\\tfrac12$, giving $c=2^{-2/3}=\\dfrac{1}{\\sqrt[3]{4}}=\\boxed{\\dfrac{1}{\\sqrt[3]{4}}}.$"
        ]
      }
    ],
    "remark": "Insight: a parabolic cap's area grows like (height)$^{3/2}$, so a bisecting horizontal line sits well above the midline at $c=2^{-2/3}\\approx0.63$. Equal areas almost never mean equal heights for a curved region, the same reason the median of an area-weighted distribution is pulled away from the geometric midpoint."
  },
  {
    "theme": "betweencurves",
    "themeLabel": "Area Between Two Curves",
    "title": "The Tent and the Dome",
    "difficulty": 3,
    "task": "Evaluate",
    "tags": [
      "absolute value",
      "parabola",
      "piecewise boundary",
      "symmetry"
    ],
    "statement": "Find the area of the region enclosed between the curves $y = |x|$ and $y = 2 - x^2$.",
    "answer": "\\[\\boxed{\\dfrac{7}{3}}\\]",
    "trap": "Treating the lower boundary as the single line $y=x$ and computing one integral $\\int_{-1}^{1}\\big[(2-x^2)-x\\big]\\,dx = \\tfrac{10}{3}$. The lower curve is $y=|x|$, which is $-x$ on $[-1,0]$ and $+x$ on $[0,1]$; using $y=x$ throughout wrongly lowers the boundary on the left half and overstates the area.",
    "solutions": [
      {
        "name": "Use the V symmetry",
        "steps": [
          "Intersect: on $x\\ge0$, $|x|=x$ gives $x = 2-x^2 \\Rightarrow x^2+x-2=0 \\Rightarrow x=1$ (the root $x=-2$ is rejected since $x\\ge0$); by the even symmetry of both curves the other crossing is $x=-1$.",
          "Both boundaries are even in $x$, so area $= 2\\int_0^1\\big[(2-x^2)-x\\big]\\,dx$.",
          "$= 2\\big[2x - \\tfrac{x^3}{3} - \\tfrac{x^2}{2}\\big]_0^1 = 2\\big(2 - \\tfrac13 - \\tfrac12\\big) = 2\\cdot\\tfrac76$.",
          "$= \\boxed{\\tfrac73}$."
        ]
      },
      {
        "name": "Split the V explicitly",
        "steps": [
          "Area $= \\int_{-1}^{0}\\big[(2-x^2)-(-x)\\big]\\,dx + \\int_{0}^{1}\\big[(2-x^2)-x\\big]\\,dx$.",
          "First integral $= \\big[2x-\\tfrac{x^3}{3}+\\tfrac{x^2}{2}\\big]_{-1}^{0} = \\tfrac76$; second $= \\big[2x-\\tfrac{x^3}{3}-\\tfrac{x^2}{2}\\big]_{0}^{1} = \\tfrac76$.",
          "Total $= \\tfrac76+\\tfrac76 = \\boxed{\\tfrac73}$."
        ]
      }
    ],
    "remark": "Insight: an absolute-value boundary is two different curves glued at a corner. Replacing $|x|$ by $x$ silently changes one half of the region — always honour the kink with a split (or exploit symmetry)."
  },
  {
    "theme": "intersection",
    "themeLabel": "Finding the Limits — Points of Intersection",
    "title": "The Parabola and the Valley of $|x|$",
    "difficulty": 3,
    "task": "Evaluate",
    "tags": [
      "area",
      "absolute value",
      "symmetry",
      "extraneous root"
    ],
    "statement": "Find the area of the region enclosed between the curve $y=6-x^{2}$ and the curve $y=|x|$.",
    "answer": "\\[\\boxed{\\dfrac{44}{3}}\\]",
    "trap": "Solving $6-x^2=x$ gives $x=2,\\,-3$ and a careless solver pairs $x=-3$ (from the right branch $y=x$) as a left limit; but on $x<0$ the lower curve is $y=-x$, so the real left intersection is $x=-2$, not $-3$. Using $x=-3$ inflates the limits and yields the wrong area $\\tfrac{125}{6}$ instead of $\\tfrac{44}{3}$.",
    "solutions": [
      {
        "name": "Exploit the symmetry",
        "steps": [
          "Both $y=6-x^2$ and $y=|x|$ are even, so the region is symmetric about the $y$-axis; compute the right half and double.",
          "On $x\\ge 0$ the boundaries are $y=6-x^2$ (top) and $y=x$ (bottom); set $6-x^2=x\\Rightarrow x^2+x-6=0\\Rightarrow x=2$ (reject $x=-3$, outside $x\\ge0$).",
          "Area $=2\\displaystyle\\int_{0}^{2}\\big[(6-x^2)-x\\big]\\,dx =2\\Big[6x-\\tfrac{x^3}{3}-\\tfrac{x^2}{2}\\Big]_0^2$",
          "Evaluate: $2\\big(12-\\tfrac83-2\\big)=2\\cdot\\tfrac{22}{3}=\\boxed{\\tfrac{44}{3}}$."
        ]
      },
      {
        "name": "Branch the absolute value honestly",
        "steps": [
          "Write $|x|=x$ for $x\\ge0$ and $|x|=-x$ for $x<0$; find each genuine crossing.",
          "Right branch: $6-x^2=x\\Rightarrow x=2$. Left branch: $6-x^2=-x\\Rightarrow x^2-x-6=0\\Rightarrow x=-2$.",
          "Split: $A=\\int_{-2}^{0}\\!\\big[(6-x^2)+x\\big]dx+\\int_{0}^{2}\\!\\big[(6-x^2)-x\\big]dx$.",
          "Each integral equals $\\tfrac{22}{3}$, so $A=\\boxed{\\tfrac{44}{3}}$."
        ]
      }
    ],
    "remark": "Insight: with $|x|$ the lower boundary changes formula at $x=0$, so an algebraic root from the wrong branch ($x=-3$) is never a boundary of the region. Always test a candidate root against the branch actually in force there."
  },
  {
    "theme": "intersection",
    "themeLabel": "Finding the Limits — Points of Intersection",
    "title": "A Triangle Hidden Among Three Lines",
    "difficulty": 3,
    "task": "Determine",
    "tags": [
      "area",
      "three lines",
      "piecewise limits",
      "triangle"
    ],
    "statement": "Three lines $y=x$, $y=2x$ and $x+y=6$ enclose a triangular region. Determine its area.",
    "answer": "\\[\\boxed{3}\\]",
    "trap": "Treating $y=x$ as the lower boundary all the way from $x=0$ to $x=3$ and $y=2x$ as the upper boundary to $x=3$ ignores that the apex of the wedge is cut off by $x+y=6$: above $x=2$ the upper boundary switches from $y=2x$ to $y=6-x$. Forgetting to split at $x=2$ integrates $\\int_0^3 (2x-x)\\,dx=\\tfrac92$, counting area that lies outside the triangle.",
    "solutions": [
      {
        "name": "Find all three vertices, then split the strip",
        "steps": [
          "Pairwise intersections give the vertices: $y=x\\,\\&\\,y=2x\\Rightarrow(0,0)$; $\\;y=2x\\,\\&\\,x+y=6\\Rightarrow 3x=6\\Rightarrow(2,4)$; $\\;y=x\\,\\&\\,x+y=6\\Rightarrow 2x=6\\Rightarrow(3,3)$.",
          "The lower boundary is $y=x$ throughout. The upper boundary changes: from $x=0$ to $x=2$ it is $y=2x$, and from $x=2$ to $x=3$ it is the cap $y=6-x$.",
          "$A=\\displaystyle\\int_0^2(2x-x)\\,dx+\\int_2^3\\big[(6-x)-x\\big]\\,dx=\\Big[\\tfrac{x^2}{2}\\Big]_0^2+\\big[6x-x^2\\big]_2^3.$",
          "$=2+\\big[(18-9)-(12-4)\\big]=2+1=\\boxed{3}.$"
        ]
      },
      {
        "name": "Shoelace on the vertices",
        "steps": [
          "Take the vertices in order $(x_1,y_1)=(0,0),\\;(x_2,y_2)=(2,4),\\;(x_3,y_3)=(3,3)$.",
          "Shoelace: $A=\\tfrac12\\big|x_1(y_2-y_3)+x_2(y_3-y_1)+x_3(y_1-y_2)\\big|$.",
          "$=\\tfrac12\\big|0\\,(4-3)+2\\,(3-0)+3\\,(0-4)\\big|=\\tfrac12\\,|0+6-12|=\\tfrac12\\cdot 6=\\boxed{3}.$"
        ]
      },
      {
        "name": "Base on the cap, height from the opposite vertex",
        "steps": [
          "Use the segment of the cap $x+y=6$ between $(2,4)$ and $(3,3)$ as the base; its length is $\\sqrt{(3-2)^2+(3-4)^2}=\\sqrt2$.",
          "The opposite vertex is the origin $(0,0)$. Its distance to the line $x+y-6=0$ is $\\dfrac{|0+0-6|}{\\sqrt{1^2+1^2}}=\\dfrac{6}{\\sqrt2}=3\\sqrt2$.",
          "$A=\\tfrac12\\cdot\\text{base}\\cdot\\text{height}=\\tfrac12\\cdot\\sqrt2\\cdot 3\\sqrt2=\\tfrac12\\cdot 6=\\boxed{3}.$"
        ]
      }
    ],
    "remark": "Insight: the lines $y=x$ and $y=2x$ both pass through the origin, so they alone form only an unbounded wedge; only the third line $x+y=6$ caps that wedge into a finite triangle, and that cap is exactly what forces the boundary description to switch at $x=2$. Locating every vertex first tells you precisely where the upper edge changes, so the integral must be split there."
  },
  {
    "theme": "intersection",
    "themeLabel": "Finding the Limits — Points of Intersection",
    "title": "Between the Hyperbola, the Diagonal and the Wall",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "area",
      "reciprocal curve",
      "vertical boundary",
      "logarithm"
    ],
    "statement": "Evaluate the area of the region in the first quadrant bounded by $y=\\dfrac1x$, $y=x$ and the vertical line $x=3$.",
    "answer": "\\[\\boxed{4-\\ln 3}\\]",
    "trap": "Solving $\\tfrac1x=x$ gives $x=\\pm1$; importing $x=-1$ as a left limit is fatal — the region lives in $x>0$, so only $x=1$ bounds it. Equally, starting the integral at $x=0$ (where $y=1/x$ blows up) instead of the true crossing $x=1$ produces a divergent, meaningless area.",
    "solutions": [
      {
        "name": "Vertical strips with the correct lower limit",
        "steps": [
          "For $x>1$ the line $y=x$ lies above $y=\\tfrac1x$; they cross at $x=1$ (reject $x=-1$, not in $x>0$).",
          "The right wall is $x=3$, so the limits are $x=1$ to $x=3$.",
          "$A=\\displaystyle\\int_1^3\\Big(x-\\tfrac1x\\Big)dx=\\Big[\\tfrac{x^2}{2}-\\ln x\\Big]_1^3$.",
          "$=\\big(\\tfrac92-\\ln3\\big)-\\big(\\tfrac12-0\\big)=\\boxed{4-\\ln 3}$."
        ]
      },
      {
        "name": "Subtract two simpler areas",
        "steps": [
          "Area under $y=x$ from $1$ to $3$: $\\displaystyle\\int_1^3 x\\,dx=\\tfrac{9}{2}-\\tfrac12=4$.",
          "Area under $y=\\tfrac1x$ from $1$ to $3$: $\\displaystyle\\int_1^3\\tfrac1x\\,dx=\\ln 3$.",
          "The region is the first minus the second (both share base $[1,3]$ and the same right wall).",
          "$A=4-\\ln 3=\\boxed{4-\\ln 3}$."
        ]
      }
    ],
    "remark": "Insight: a reciprocal curve has a phantom intersection at $x=-1$ and a singularity at $x=0$; the genuine left limit is the first-quadrant crossing $x=1$. The vertical line, not a curve crossing, supplies the right limit."
  },
  {
    "theme": "intersection",
    "themeLabel": "Finding the Limits — Points of Intersection",
    "title": "Slicing the Parabola Sideways",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "area",
      "parabola",
      "integrate in y",
      "chord"
    ],
    "statement": "Evaluate the area of the region enclosed by the parabola $y^{2}=4x$ and the chord $y=2x-4$.",
    "answer": "\\[\\boxed{9}\\]",
    "trap": "Integrating in $x$ and solving $\\sqrt{4x}=2x-4$ by squaring introduces the spurious root $x=1$ (there the line sits at $y=-2$ while $\\sqrt{4x}=+2$, so it lies on the lower branch, not the upper one). Worse, the chord dips below the $x$-axis, so a single $\\int(\\text{line}-\\text{upper branch})\\,dx$ in $x$ mis-orders the boundaries. Switching to $y$ avoids the double-valued parabola entirely.",
    "solutions": [
      {
        "name": "Horizontal strips (integrate in $y$)",
        "steps": [
          "Write both curves with $x$ as a function of $y$: parabola $x=\\tfrac{y^2}{4}$, line $x=\\tfrac{y+4}{2}$.",
          "Intersect: $\\tfrac{y^2}{4}=\\tfrac{y+4}{2}\\Rightarrow y^2-2y-8=0\\Rightarrow (y-4)(y+2)=0\\Rightarrow y=4,\\,-2$ — both real limits, no squaring needed.",
          "For each $y\\in[-2,4]$ the strip runs from the parabola $x=\\tfrac{y^2}{4}$ (left) to the line $x=\\tfrac{y+4}{2}$ (right).",
          "$A=\\displaystyle\\int_{-2}^{4}\\Big(\\tfrac{y+4}{2}-\\tfrac{y^2}{4}\\Big)dy=\\Big[\\tfrac{y^2}{4}+2y-\\tfrac{y^3}{12}\\Big]_{-2}^{4}$",
          "$=\\big(4+8-\\tfrac{16}{3}\\big)-\\big(1-4+\\tfrac{2}{3}\\big)=\\tfrac{20}{3}-\\big(-\\tfrac{7}{3}\\big)=\\boxed{9}$."
        ]
      },
      {
        "name": "Chord–segment via the gap polynomial",
        "steps": [
          "Endpoints of the chord on the parabola: $(1,-2)$ and $(4,4)$.",
          "The horizontal gap is $g(y)=\\tfrac{y+4}{2}-\\tfrac{y^2}{4}=-\\tfrac14(y-4)(y+2)$, vanishing exactly at the two crossings.",
          "Integrating a quadratic $-k(y-a)(y-b)$ between its own roots gives $k\\,\\tfrac{(b-a)^3}{6}$, with $k=\\tfrac14,\\;a=-2,\\;b=4$.",
          "$A=\\displaystyle\\int_{-2}^{4}-\\tfrac14(y-4)(y+2)\\,dy=\\tfrac14\\cdot\\tfrac{(4-(-2))^3}{6}=\\tfrac14\\cdot\\tfrac{216}{6}$",
          "$=\\tfrac{216}{24}=\\boxed{9}$."
        ]
      }
    ],
    "remark": "Insight: for a sideways parabola, taking $y$ as the variable turns the double-valued boundary into two single-valued limits $y=-2,4$ and kills the squaring-induced spurious root $x=1$. The factored gap $-\\tfrac14(y-4)(y+2)$ exposes both true crossings at once, and the $\\tfrac{(b-a)^3}{6}$ shortcut bypasses the antiderivative entirely."
  },
  {
    "theme": "intersection",
    "themeLabel": "Finding the Limits — Points of Intersection",
    "title": "The Root That Lies When You Square It",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "area",
      "square root curve",
      "extraneous root",
      "integrate in y"
    ],
    "statement": "A region is bounded by the curve $y=\\sqrt{x}$, the line $y=x-2$, and the $x$-axis. Evaluate its area.",
    "answer": "\\[\\boxed{\\dfrac{10}{3}}\\]",
    "trap": "Solving $\\sqrt{x}=x-2$ by squaring gives $x^2-5x+4=0\\Rightarrow x=1,4$. The root $x=1$ is extraneous: there $\\sqrt{1}=1$ but $1-2=-1$, so the curves do NOT meet. A student who treats $x=1$ as a left limit and integrates the vertical gap $\\int_{1}^{4}\\big(\\sqrt{x}-(x-2)\\big)\\,dx=\\tfrac{19}{6}$ gets the wrong area, having both invented a crossing and ignored that the $x$-axis is the real third boundary closing the region.",
    "solutions": [
      {
        "name": "Horizontal strips, keep only the true crossing",
        "steps": [
          "The genuine intersection of $y=\\sqrt{x}$ and $y=x-2$ is $x=4,\\ y=2$. The algebraic root $x=1$ fails the sign check ($\\sqrt{1}=1\\neq -1=1-2$), so discard it.",
          "Read the region in $y$. The $x$-axis fixes the bottom at $y=0$; for $y\\in[0,2]$ the left boundary is the curve $x=y^2$ and the right boundary is the line $x=y+2$.",
          "$A=\\displaystyle\\int_{0}^{2}\\big[(y+2)-y^2\\big]\\,dy=\\Big[\\tfrac{y^2}{2}+2y-\\tfrac{y^3}{3}\\Big]_0^2.$",
          "$A=2+4-\\tfrac{8}{3}=\\dfrac{10}{3}.$"
        ]
      },
      {
        "name": "Decompose into area-under-curve minus a triangle (in $x$)",
        "steps": [
          "Locate the three vertices: the curve meets the $x$-axis at $(0,0)$, the line meets the $x$-axis at $(2,0)$, and the curve meets the line at $(4,2)$.",
          "The region equals everything under $y=\\sqrt{x}$ from $x=0$ to $x=4$, with the right-hand triangle below the line removed. $\\displaystyle\\int_0^4\\sqrt{x}\\,dx=\\Big[\\tfrac{2}{3}x^{3/2}\\Big]_0^4=\\tfrac{16}{3}.$",
          "The removed triangle has vertices $(2,0),(4,0),(4,2)$, hence legs $2$ and $2$ and area $\\tfrac12\\cdot 2\\cdot 2=2$.",
          "$A=\\tfrac{16}{3}-2=\\dfrac{10}{3},$ matching the horizontal-strip value and confirming $x=4$ (not $x=1$) is the operative crossing."
        ]
      }
    ],
    "remark": "Insight: squaring an equation can manufacture intersections that do not exist, so every algebraic root must be re-substituted into the ORIGINAL un-squared equation. Here the $x$-axis is the silent third boundary that actually closes the region, and forgetting it (or trusting the phantom root $x=1$) is precisely what makes the wrong answer $\\tfrac{19}{6}$ look plausible."
  },
  {
    "theme": "intersection",
    "themeLabel": "Finding the Limits — Points of Intersection",
    "title": "Where the Sine Meets Its Double",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "area",
      "trigonometric curves",
      "two lobes",
      "double angle"
    ],
    "statement": "Evaluate the total area enclosed between $y=\\sin x$ and $y=\\sin 2x$ over $0\\le x\\le\\pi$.",
    "answer": "\\[\\boxed{\\dfrac{5}{2}}\\]",
    "trap": "Writing $A=\\int_0^{\\pi}(\\sin 2x-\\sin x)\\,dx=\\big[-\\tfrac12\\cos 2x+\\cos x\\big]_0^{\\pi}=-2$ is the seductive blunder: a single signed integral over $[0,\\pi]$. Because the curves cross at the interior point $x=\\tfrac{\\pi}{3}$, the roles of top and bottom swap, so the two lobes partly cancel. The bare integral is not even positive (it returns $-2$), and even its magnitude $2$ is wrong for an area. The true area needs the two lobes summed in absolute value; missing the interior crossing collapses two genuine regions into one cancelling integral.",
    "solutions": [
      {
        "name": "Find every crossing in $[0,\\pi]$, sum the lobes",
        "steps": [
          "$\\sin x=\\sin 2x=2\\sin x\\cos x\\Rightarrow \\sin x(1-2\\cos x)=0$, so $\\sin x=0\\Rightarrow x=0,\\pi$ or $\\cos x=\\tfrac12\\Rightarrow x=\\tfrac{\\pi}{3}$. The three crossings are $0,\\tfrac{\\pi}{3},\\pi$.",
          "Sign test: for $0<x<\\tfrac{\\pi}{3}$ we have $\\cos x>\\tfrac12$, so $1-2\\cos x<0$ and $\\sin 2x>\\sin x$; for $\\tfrac{\\pi}{3}<x<\\pi$ the sign flips and $\\sin x>\\sin 2x$.",
          "$A=\\displaystyle\\int_0^{\\pi/3}(\\sin 2x-\\sin x)\\,dx+\\int_{\\pi/3}^{\\pi}(\\sin x-\\sin 2x)\\,dx.$",
          "First $=\\big[-\\tfrac12\\cos 2x+\\cos x\\big]_0^{\\pi/3}=\\big(\\tfrac14+\\tfrac12\\big)-\\big(-\\tfrac12+1\\big)=\\tfrac14$; second $=\\big[-\\cos x+\\tfrac12\\cos 2x\\big]_{\\pi/3}^{\\pi}=\\big(1+\\tfrac12\\big)-\\big(-\\tfrac12-\\tfrac14\\big)=\\tfrac94$; total $=\\tfrac14+\\tfrac94=\\boxed{\\tfrac52}$."
        ]
      },
      {
        "name": "Integrate the absolute difference",
        "steps": [
          "$A=\\displaystyle\\int_0^{\\pi}|\\sin 2x-\\sin x|\\,dx=\\int_0^{\\pi}|\\sin x\\,(2\\cos x-1)|\\,dx$; on $[0,\\pi]$ the factor $\\sin x$ stays nonnegative, so the only sign change comes from $2\\cos x-1$, vanishing at $x=\\tfrac{\\pi}{3}$.",
          "Let $F(x)=-\\tfrac12\\cos 2x+\\cos x$ be an antiderivative of $\\sin 2x-\\sin x$.",
          "Lobe 1 magnitude $=|F(\\tfrac{\\pi}{3})-F(0)|=\\big|\\tfrac34-\\tfrac12\\big|=\\tfrac14.$",
          "Lobe 2 magnitude $=|F(\\pi)-F(\\tfrac{\\pi}{3})|=\\big|-\\tfrac12-\\tfrac34\\big|=\\tfrac94$; sum $=\\tfrac14+\\tfrac94=\\boxed{\\tfrac52}$. Sanity check: the signed total $F(\\pi)-F(0)=-\\tfrac12-\\tfrac12=-2$ is exactly the trap value, confirming the cancellation."
        ]
      },
      {
        "name": "Sum-to-product split",
        "steps": [
          "Write $\\sin 2x-\\sin x=2\\cos\\tfrac{3x}{2}\\sin\\tfrac{x}{2}$. On $(0,\\pi)$, $\\sin\\tfrac{x}{2}>0$, so the sign is that of $\\cos\\tfrac{3x}{2}$, which is positive for $\\tfrac{3x}{2}<\\tfrac{\\pi}{2}$ i.e. $x<\\tfrac{\\pi}{3}$ and negative afterward — recovering the same split at $x=\\tfrac{\\pi}{3}$.",
          "Lobe 1: $\\displaystyle\\int_0^{\\pi/3}2\\cos\\tfrac{3x}{2}\\sin\\tfrac{x}{2}\\,dx=\\int_0^{\\pi/3}(\\sin 2x-\\sin x)\\,dx=\\tfrac14.$",
          "Lobe 2: $\\displaystyle\\int_{\\pi/3}^{\\pi}\\big(-2\\cos\\tfrac{3x}{2}\\sin\\tfrac{x}{2}\\big)\\,dx=\\int_{\\pi/3}^{\\pi}(\\sin x-\\sin 2x)\\,dx=\\tfrac94.$",
          "Total area $=\\tfrac14+\\tfrac94=\\boxed{\\tfrac52}$."
        ]
      }
    ],
    "remark": "Insight: an interior intersection silently reverses the top/bottom roles, so a single signed integral over $[0,\\pi]$ does not measure the enclosed area — here it returns $-2$, neither positive nor the right magnitude. The factored form $\\sin x(1-2\\cos x)$ (equivalently $2\\cos\\tfrac{3x}{2}\\sin\\tfrac{x}{2}$) exposes all three crossings $0,\\tfrac{\\pi}{3},\\pi$, hence the two lobes whose absolute areas $\\tfrac14$ and $\\tfrac94$ add to $\\tfrac52$."
  },
  {
    "theme": "intersection",
    "themeLabel": "Finding the Limits — Points of Intersection",
    "title": "Parabola, Slant and the Ground",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "area",
      "three boundaries",
      "piecewise top",
      "discard root"
    ],
    "statement": "Evaluate the area of the region in the half-plane $x\\ge0$ bounded above by $y=x^{2}$ and $y=2-x$, and below by the $x$-axis.",
    "answer": "\\[\\boxed{\\dfrac{5}{6}}\\]",
    "trap": "Solving $x^2=2-x$ gives $x=1,\\,-2$; using $x=-2$ violates $x\\ge0$. The deeper trap: assuming a single upper curve. The roof is $y=x^2$ only up to the crossing $x=1$, then $y=2-x$ down to where it hits the axis at $x=2$. Treating $y=x^2$ as the roof all the way to $x=2$ gives $\\int_0^2 x^2\\,dx=\\tfrac83$, and ignoring that the line (not the parabola) reaches the ground produces the wrong region.",
    "solutions": [
      {
        "name": "Split the roof at the crossing",
        "steps": [
          "Parabola meets the axis at $(0,0)$; line meets the axis at $(2,0)$; parabola meets line where $x^2=2-x\\Rightarrow x=1$ (reject $x=-2$ since $x\\ge0$).",
          "On $0\\le x\\le1$ the lower of the two upper curves is $y=x^2$; on $1\\le x\\le2$ it is $y=2-x$; the floor is $y=0$ throughout.",
          "$A=\\displaystyle\\int_0^1 x^2\\,dx+\\int_1^2(2-x)\\,dx=\\Big[\\tfrac{x^3}{3}\\Big]_0^1+\\Big[2x-\\tfrac{x^2}{2}\\Big]_1^2.$",
          "$=\\tfrac13+\\big(2-\\tfrac32\\big)=\\tfrac13+\\tfrac12=\\boxed{\\tfrac56}.$"
        ]
      },
      {
        "name": "Triangle minus parabolic overhang",
        "steps": [
          "The line $y=2-x$, the $x$-axis and the $y$-axis bound the triangle $(0,0),(2,0),(0,2)$ of area $\\tfrac12\\cdot2\\cdot2=2$.",
          "But the region is capped by $y=x^2$ for $0\\le x\\le1$, so subtract the sliver between the line and the parabola there: $\\int_0^1\\big[(2-x)-x^2\\big]dx=2-\\tfrac12-\\tfrac13=\\tfrac76$.",
          "$A=2-\\tfrac76=\\boxed{\\tfrac56}.$",
          "Agreement with the direct split confirms $x=1$ is the unique interior switch and the roof is genuinely piecewise."
        ]
      }
    ],
    "remark": "Insight: when two curves jointly form the upper boundary, the region's roof is their pointwise minimum, and their crossing is the hinge where the integrand changes. The lower boundary (here the $x$-axis) is supplied by where each upper curve meets the ground, $x=0$ for the parabola and $x=2$ for the line."
  },
  {
    "theme": "intersection",
    "themeLabel": "Finding the Limits — Points of Intersection",
    "title": "The W and the Level Line",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "area",
      "absolute value parabola",
      "multiple branches",
      "symmetry"
    ],
    "statement": "Evaluate the total area of the region enclosed between $y=\\bigl|x^{2}-1\\bigr|$ and the horizontal line $y=1$.",
    "answer": "\\[\\boxed{\\dfrac{8\\left(\\sqrt{2}-1\\right)}{3}}\\]",
    "trap": "Solving $|x^2-1|=1$ only through $x^2-1=1$ gives $x=\\pm\\sqrt2$ and misses the inner root of $1-x^2=1$, namely $x=0$, the contact point of the central hump. Worse, treating $|x^2-1|$ as the single formula $x^2-1$ across all of $[-\\sqrt2,\\sqrt2]$ ignores the branch switch (kink) at $x=\\pm1$; that gives $\\int_{-\\sqrt2}^{\\sqrt2}\\!\\bigl[1-(x^2-1)\\bigr]\\,dx=\\dfrac{8\\sqrt2}{3}\\approx3.77$, which is the wrong area.",
    "solutions": [
      {
        "name": "Branch by branch with all crossings",
        "steps": [
          "Solve $|x^2-1|=1$. From $x^2-1=1$ we get $x=\\pm\\sqrt2$; from $1-x^2=1$ we get $x=0$. So the curve touches the line at $x=0$ and crosses it at $x=\\pm\\sqrt2$, and on $(-\\sqrt2,\\sqrt2)$ the line lies above (or on) the curve.",
          "By symmetry compute the area on $[0,\\sqrt2]$ and double. On $[0,1]$, $|x^2-1|=1-x^2$; on $[1,\\sqrt2]$, $|x^2-1|=x^2-1$.",
          "$A=2\\Big(\\displaystyle\\int_0^1\\!\\big[1-(1-x^2)\\big]\\,dx+\\int_1^{\\sqrt2}\\!\\big[1-(x^2-1)\\big]\\,dx\\Big)=2\\Big(\\int_0^1 x^2\\,dx+\\int_1^{\\sqrt2}(2-x^2)\\,dx\\Big).$",
          "The first integral $=\\tfrac13$; the second $=\\big[2x-\\tfrac{x^3}{3}\\big]_1^{\\sqrt2}=\\tfrac{4\\sqrt2}{3}-\\tfrac53$. Hence $A=2\\big(\\tfrac13+\\tfrac{4\\sqrt2}{3}-\\tfrac53\\big)=2\\cdot\\tfrac{4\\sqrt2-4}{3}=\\boxed{\\dfrac{8(\\sqrt2-1)}{3}}.$"
        ]
      },
      {
        "name": "Rectangle minus the area under the W",
        "steps": [
          "Between the outer crossings $x=\\pm\\sqrt2$ the line $y=1$ caps a rectangle of width $2\\sqrt2$ and height $1$, so its area is $2\\sqrt2$. The required region is this rectangle with the part lying under the curve removed.",
          "Area under $y=|x^2-1|$ on $[-\\sqrt2,\\sqrt2]$, by symmetry: $2\\Big(\\displaystyle\\int_0^1(1-x^2)\\,dx+\\int_1^{\\sqrt2}(x^2-1)\\,dx\\Big)$, again splitting at the kink $x=1$.",
          "Here $\\int_0^1(1-x^2)\\,dx=\\tfrac23$ and $\\int_1^{\\sqrt2}(x^2-1)\\,dx=\\big[\\tfrac{x^3}{3}-x\\big]_1^{\\sqrt2}=\\tfrac23-\\tfrac{\\sqrt2}{3}$, so the area under the W is $2\\big(\\tfrac23+\\tfrac23-\\tfrac{\\sqrt2}{3}\\big)=\\tfrac{8}{3}-\\tfrac{2\\sqrt2}{3}.$",
          "Therefore $A=2\\sqrt2-\\Big(\\tfrac{8}{3}-\\tfrac{2\\sqrt2}{3}\\Big)=\\tfrac{6\\sqrt2}{3}+\\tfrac{2\\sqrt2}{3}-\\tfrac83=\\tfrac{8\\sqrt2}{3}-\\tfrac83=\\boxed{\\dfrac{8(\\sqrt2-1)}{3}}$, matching the branch computation."
        ]
      }
    ],
    "remark": "Insight: $|x^2-1|$ is a W-shape with kinks at $x=\\pm1$ and a central hump that just touches $y=1$ at $x=0$. The level line meets the curve at three abscissae — a tangential contact at the origin and two transversal crossings — and the integrand $1-|x^2-1|$ changes formula at each kink. The first method (split at every kink and crossing) is the reliable one; the rectangle method is a clean cross-check."
  },
  {
    "theme": "intersection",
    "themeLabel": "Finding the Limits — Points of Intersection",
    "title": "The Curvilinear Triangle of Three Curves",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "area",
      "three curves",
      "all pairwise intersections",
      "piecewise top"
    ],
    "statement": "The curve $y=x^{2}$ and the lines $y=x$ and $x+y=6$ together bound a single curvilinear triangle. Determine its area.",
    "answer": "\\[\\boxed{\\dfrac{11}{6}}\\]",
    "trap": "Solving $x^2=6-x$ gives $x=2,\\,-3$; importing $x=-3$ as a vertex is wrong — at $x=-3$ the point $(-3,9)$ is not on the boundary of this region. One must compute all THREE pairwise intersections, keep $(1,1),(2,4),(3,3)$, and recognise the upper boundary switches from the parabola to the line $x+y=6$ at the vertex $(2,4)$. Using a single top curve (parabola throughout) gives the wrong value $\\tfrac{14}{3}$.",
    "solutions": [
      {
        "name": "All three vertices, split the cap",
        "steps": [
          "Pairwise: $y=x\\,\\&\\,y=x^2\\Rightarrow(0,0),(1,1)$; $y=x^2\\,\\&\\,x+y=6\\Rightarrow x^2+x-6=0\\Rightarrow x=2$ giving $(2,4)$ (reject $x=-3$); $y=x\\,\\&\\,x+y=6\\Rightarrow(3,3).$",
          "The closed curvilinear triangle has vertices $(1,1),(2,4),(3,3)$ with lower boundary $y=x$ throughout.",
          "Upper boundary: $y=x^2$ on $[1,2]$, then $y=6-x$ on $[2,3]$ (the two upper curves cross exactly at the apex $(2,4)$).",
          "$A=\\displaystyle\\int_1^2(x^2-x)\\,dx+\\int_2^3\\big[(6-x)-x\\big]dx=\\big(\\tfrac73-\\tfrac32\\big)+\\big[6x-x^2\\big]_2^3=\\tfrac{5}{6}+1=\\boxed{\\tfrac{11}{6}}.$"
        ]
      },
      {
        "name": "Big region minus the parabolic cut",
        "steps": [
          "The triangle with vertices $(1,1),(2,4),(3,3)$ (straight edges) has area by shoelace $=\\tfrac12|1(4-3)+2(3-1)+3(1-4)|=\\tfrac12|1+4-9|=2.$",
          "The true left-upper edge is the parabola $y=x^2$, which must be compared with the straight chord from $(1,1)$ to $(2,4)$, namely $y=3x-2$.",
          "$\\displaystyle\\int_1^2\\big[x^2-(3x-2)\\big]dx=\\int_1^2(x^2-3x+2)\\,dx=\\big[\\tfrac{x^3}{3}-\\tfrac{3x^2}{2}+2x\\big]_1^2=-\\tfrac16$, i.e. the parabola lies BELOW that chord, so the true region is smaller; subtract $\\tfrac16$.",
          "$A=2-\\tfrac16=\\boxed{\\tfrac{11}{6}}.$"
        ]
      },
      {
        "name": "Integrate in $y$ (horizontal strips)",
        "steps": [
          "Solve for $x$ along each boundary: line $y=x\\Rightarrow x=y$; parabola $y=x^2\\Rightarrow x=\\sqrt y$ (right branch); line $x+y=6\\Rightarrow x=6-y$.",
          "For $1\\le y\\le 3$ the strip runs from the parabola $x=\\sqrt y$ on the left to the line $x=y$ on the right; for $3\\le y\\le 4$ the right edge becomes $x=6-y$. Splitting at $y=3$:",
          "$\\displaystyle A=\\int_1^3\\big(y-\\sqrt y\\big)\\,dy+\\int_3^4\\big((6-y)-\\sqrt y\\big)\\,dy.$",
          "$\\int_1^3(y-\\sqrt y)\\,dy=\\big[\\tfrac{y^2}{2}-\\tfrac{2}{3}y^{3/2}\\big]_1^3=\\tfrac{25}{6}-2\\sqrt3,\\qquad \\int_3^4(6-y-\\sqrt y)\\,dy=\\big[6y-\\tfrac{y^2}{2}-\\tfrac23y^{3/2}\\big]_3^4=2\\sqrt3-\\tfrac{7}{3}.$",
          "$A=\\big(\\tfrac{25}{6}-2\\sqrt3\\big)+\\big(2\\sqrt3-\\tfrac73\\big)=\\tfrac{25}{6}-\\tfrac{14}{6}=\\boxed{\\tfrac{11}{6}}.$"
        ]
      }
    ],
    "remark": "Insight: a region bounded by three curves needs all three pairwise intersections; the apex where two of them cross, here $(2,4)$, is exactly where the boundary description changes. The spurious parabola–line root $x=-3$ is geometrically irrelevant. The independent $y$-integration, in which the $2\\sqrt3$ terms cancel, confirms the value and guards against the single-top-curve error."
  },
  {
    "theme": "intersection",
    "themeLabel": "Finding the Limits — Points of Intersection",
    "title": "The Cubic's Two Lobes",
    "difficulty": 5,
    "task": "Find the total area",
    "tags": [
      "area",
      "cubic and line",
      "sign cancellation",
      "multiple roots"
    ],
    "statement": "Find the total area of the region enclosed between the cubic $y=x^{3}-3x$ and the line $y=x$.",
    "answer": "\\[\\boxed{8}\\]",
    "trap": "Solving $x^3-3x=x$ gives $x=0,\\pm2$; a student who keeps only the outer roots and computes $\\displaystyle\\int_{-2}^{2}\\big[(x^3-3x)-x\\big]\\,dx$ gets $0$, because the missed interior root $x=0$ separates two lobes where the cubic and line swap order. The signed integral cancels by odd symmetry; the true total area is twice one lobe.",
    "solutions": [
      {
        "name": "Locate all three crossings, sum the lobes",
        "steps": [
          "$x^3-3x=x\\Rightarrow x^3-4x=0\\Rightarrow x(x-2)(x+2)=0\\Rightarrow x=-2,\\,0,\\,2$.",
          "Test a point: at $x=-1$, $f-g=x^3-4x=3>0$ so the cubic is above the line on $(-2,0)$; at $x=1$, $f-g=-3<0$ so the line is above the cubic on $(0,2)$. The region splits into two congruent lobes.",
          "By odd symmetry of $x^3-4x$, total $A=2\\displaystyle\\int_0^2\\big[x-(x^3-3x)\\big]\\,dx=2\\int_0^2(4x-x^3)\\,dx=2\\Big[2x^2-\\tfrac{x^4}{4}\\Big]_0^2$.",
          "$=2\\,(8-4)=\\boxed{8}$."
        ]
      },
      {
        "name": "Absolute-value integral split at every crossing",
        "steps": [
          "$A=\\displaystyle\\int_{-2}^{2}\\big|(x^3-3x)-x\\big|\\,dx=\\int_{-2}^{2}\\big|x^3-4x\\big|\\,dx$.",
          "The integrand changes sign at the interior root $x=0$, so split there: $A=\\displaystyle\\int_{-2}^0(x^3-4x)\\,dx+\\int_0^2(4x-x^3)\\,dx$.",
          "With antiderivative $\\tfrac{x^4}{4}-2x^2$: on $[-2,0]$ the value is $0-(4-8)=4$, and on $[0,2]$ it is $-(4-8)-0=4$.",
          "$A=4+4=\\boxed{8}$ — whereas the un-split signed integral would have collapsed to $0$."
        ]
      }
    ],
    "remark": "Insight: when a cubic meets a line at three points, the middle intersection is the one that flips the integrand's sign; skip it and the signed integral cancels to a deceptive zero. Always integrate the absolute value of the difference, splitting at every interior crossing — not just the outer endpoints."
  },
  {
    "theme": "symmetry",
    "themeLabel": "Symmetry & Even/Odd Shortcuts",
    "title": "The Decoy in the Numerator",
    "difficulty": 3,
    "task": "Evaluate",
    "tags": [
      "even-odd",
      "symmetric-interval",
      "odd-vanishing",
      "rational"
    ],
    "statement": "Evaluate \\[\\int_{-1}^{1}\\frac{x^{3}\\cos x+x^{2}+1}{1+x^{2}}\\,dx.\\]",
    "answer": "$2$",
    "trap": "The term $\\dfrac{x^{3}\\cos x}{1+x^{2}}$ is a decoy: $x^{3}\\cos x$ is odd and $1+x^{2}$ is even, so this piece is odd and contributes $0$ on the symmetric interval. Students who don't spot this attack it with integration by parts or a substitution and hit a dead end. A second, sneakier slip survives even after seeing $\\dfrac{x^{2}+1}{1+x^{2}}=1$: integrating that $1$ over a half-window or forgetting that $[-1,1]$ has length $2$ gives the wrong value $1$ instead of $2$.",
    "solutions": [
      {
        "name": "Odd/even decomposition",
        "steps": [
          "Split the integrand: $\\dfrac{x^{3}\\cos x+x^{2}+1}{1+x^{2}}=\\dfrac{x^{3}\\cos x}{1+x^{2}}+\\dfrac{x^{2}+1}{1+x^{2}}$.",
          "First term: $x^{3}\\cos x$ is odd (product of odd $x^{3}$ and even $\\cos x$) and $1+x^{2}$ is even, so the quotient is odd; over the symmetric interval $[-1,1]$ it integrates to $0$.",
          "Second term simplifies exactly: $\\dfrac{x^{2}+1}{1+x^{2}}=1$.",
          "Hence the integral $=\\int_{-1}^{1}1\\,dx=\\big[x\\big]_{-1}^{1}=1-(-1)=2$, giving $\\boxed{2}$."
        ]
      },
      {
        "name": "Direct symmetry (reflection) test",
        "steps": [
          "Let $g(x)$ be the full integrand and form $g(x)+g(-x)$.",
          "Since $\\cos(-x)=\\cos x$ and $(-x)^{3}=-x^{3}$, the piece $\\dfrac{x^{3}\\cos x}{1+x^{2}}$ flips sign, while $\\dfrac{x^{2}+1}{1+x^{2}}=1$ is unchanged; therefore $g(x)+g(-x)=2$.",
          "Writing $I=\\int_{-1}^{1}g(x)\\,dx$ and substituting $x\\mapsto -x$ in a copy gives $2I=\\int_{-1}^{1}\\big(g(x)+g(-x)\\big)\\,dx=\\int_{-1}^{1}2\\,dx=4$.",
          "Thus $I=2$, i.e. $\\boxed{2}$."
        ]
      }
    ],
    "remark": "On a symmetric interval you never integrate the odd part — only the even part survives. Identifying the odd quotient at a glance, and then resisting the length-$1$-versus-length-$2$ slip, turns a would-be calculation into a ten-second answer."
  },
  {
    "theme": "symmetry",
    "themeLabel": "Symmetry & Even/Odd Shortcuts",
    "title": "Four-Fold Star",
    "difficulty": 3,
    "task": "Determine",
    "tags": [
      "astroid",
      "both-axes-symmetry",
      "parametric-area",
      "quadrant-halving"
    ],
    "statement": "The curve $x^{2/3}+y^{2/3}=a^{2/3}$ (with $a>0$) is symmetric about both coordinate axes. Determine the total area of the region it encloses, in terms of $a$.",
    "answer": "\\[\\boxed{\\dfrac{3\\pi a^{2}}{8}}\\]",
    "trap": "Trying to set up $\\int (a^{2/3}-x^{2/3})^{3/2}\\,dx$ directly in Cartesian form and grinding through it, or — worse — assuming the four-fold symmetry lets you take one quadrant and multiply by $4$ WITHOUT noticing the parametrisation already covers all four quadrants, leading to multiplying by $4$ twice (which gives the wrong $\\tfrac{3\\pi a^{2}}{2}$). The correct halving is: compute one quadrant, multiply by $4$, once.",
    "solutions": [
      {
        "name": "Parametric (one quadrant ×4)",
        "steps": [
          "Parametrise the first-quadrant arc by $x=a\\cos^{3}t,\\;y=a\\sin^{3}t,\\;t\\in[0,\\tfrac{\\pi}{2}]$.",
          "First-quadrant area $=\\int_{0}^{a}y\\,dx=\\int_{\\pi/2}^{0}a\\sin^{3}t\\cdot 3a\\cos^{2}t(-\\sin t)\\,dt=3a^{2}\\!\\int_{0}^{\\pi/2}\\sin^{4}t\\cos^{2}t\\,dt$.",
          "Using $\\int_0^{\\pi/2}\\sin^4t\\cos^2t\\,dt=\\dfrac{\\pi}{32}$, the quadrant area $=\\dfrac{3\\pi a^{2}}{32}$.",
          "By the both-axes symmetry, total area $=4\\cdot\\dfrac{3\\pi a^{2}}{32}=\\boxed{\\dfrac{3\\pi a^{2}}{8}}$."
        ]
      },
      {
        "name": "Green's theorem",
        "steps": [
          "Area $=\\dfrac12\\oint(x\\,dy-y\\,dx)$ around the closed astroid, $t\\in[0,2\\pi]$.",
          "With $x=a\\cos^3t,\\,y=a\\sin^3t$ one gets $x\\,dy-y\\,dx=3a^{2}\\sin^{2}t\\cos^{2}t\\,dt$.",
          "So Area $=\\dfrac{3a^{2}}{2}\\int_{0}^{2\\pi}\\sin^{2}t\\cos^{2}t\\,dt=\\dfrac{3a^{2}}{2}\\cdot\\dfrac{\\pi}{4}$.",
          "This equals $\\boxed{\\dfrac{3\\pi a^{2}}{8}}$."
        ]
      }
    ],
    "remark": "Insight: when a curve has both-axes symmetry, do ONE quadrant and multiply by four — but make sure your integral/parametrisation isn't already sweeping the whole figure, or you double-count. A quick numeric check seals it: $4\\int_0^1(1-x^{2/3})^{3/2}\\,dx\\approx 1.17810 = \\tfrac{3\\pi}{8}$."
  },
  {
    "theme": "symmetry",
    "themeLabel": "Symmetry & Even/Odd Shortcuts",
    "title": "The Mirror Cosine",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "kings-property",
      "reflection",
      "log-sine",
      "definite-integral"
    ],
    "statement": "Evaluate \\[\\int_{0}^{\\pi/2}\\ln(\\sin x)\\,dx\\] by exploiting the symmetry of the interval under $x\\mapsto \\tfrac{\\pi}{2}-x$.",
    "answer": "\\[\\boxed{-\\dfrac{\\pi}{2}\\ln 2}\\]",
    "trap": "Assuming $\\int_0^{\\pi/2}\\ln(\\sin x)\\,dx$ and $\\int_0^{\\pi/2}\\ln(\\cos x)\\,dx$ are 'obviously different' and trying to attack $\\ln\\sin$ alone (it looks divergent at $0$, tempting a panic). The reflection $x\\mapsto\\frac{\\pi}{2}-x$ shows the two are EQUAL, and adding them creates $\\ln(\\tfrac12\\sin 2x)$, which is what cracks it. Skipping the reflection step leaves the integral intractable by elementary means.",
    "solutions": [
      {
        "name": "Reflection + doubling",
        "steps": [
          "Let $I=\\int_0^{\\pi/2}\\ln(\\sin x)\\,dx$. Substituting $x\\to\\frac{\\pi}{2}-x$ gives $I=\\int_0^{\\pi/2}\\ln(\\cos x)\\,dx$.",
          "Add the two forms: $2I=\\int_0^{\\pi/2}\\ln(\\sin x\\cos x)\\,dx=\\int_0^{\\pi/2}\\ln\\!\\big(\\tfrac12\\sin 2x\\big)\\,dx$.",
          "Split off the constant: $2I=-\\tfrac{\\pi}{2}\\ln 2+\\int_0^{\\pi/2}\\ln(\\sin 2x)\\,dx$. With $u=2x$, $\\int_0^{\\pi/2}\\ln(\\sin 2x)\\,dx=\\tfrac12\\int_0^{\\pi}\\ln(\\sin u)\\,du=\\int_0^{\\pi/2}\\ln(\\sin u)\\,du=I$ (the last step uses $\\sin u$'s symmetry about $u=\\tfrac{\\pi}{2}$).",
          "Thus $2I=-\\tfrac{\\pi}{2}\\ln2+I\\Rightarrow I=\\boxed{-\\dfrac{\\pi}{2}\\ln 2}$."
        ]
      },
      {
        "name": "Fourier/series cross-check",
        "steps": [
          "Use the expansion $\\ln(\\sin x)=-\\ln 2-\\sum_{k\\ge1}\\dfrac{\\cos 2kx}{k}$, valid for $0<x<\\pi$.",
          "Integrate term by term on $[0,\\pi/2]$: $\\int_0^{\\pi/2}\\cos 2kx\\,dx=\\dfrac{\\sin k\\pi}{2k}=0$ for every integer $k$.",
          "Only the constant term survives: $I=\\int_0^{\\pi/2}(-\\ln2)\\,dx=-\\tfrac{\\pi}{2}\\ln2$.",
          "Hence $I=\\boxed{-\\dfrac{\\pi}{2}\\ln 2}$."
        ]
      }
    ],
    "remark": "Insight: interval symmetry under $x\\mapsto a+b-x$ (King's property) is a reflection — it equates the $\\sin$ and $\\cos$ integrals so their sum factorises via $\\sin x\\cos x=\\tfrac12\\sin 2x$. This is the area-halving idea applied to a transcendental integrand."
  },
  {
    "theme": "symmetry",
    "themeLabel": "Symmetry & Even/Odd Shortcuts",
    "title": "The Point of Balance",
    "difficulty": 4,
    "task": "Find",
    "tags": [
      "point-symmetry",
      "functional-equation",
      "reflection",
      "mean-value"
    ],
    "statement": "A continuous function $f$ on $[0,2]$ satisfies $f(x)+f(2-x)=4$ for all $x\\in[0,2]$. Find $\\displaystyle\\int_{0}^{2}f(x)\\,dx$, and state the geometric reason that makes the value independent of the particular $f$.",
    "answer": "\\[\\boxed{\\,4\\,}\\]",
    "trap": "Concluding the integral is $0$ by misreading the condition as odd symmetry about $x=1$, i.e. $f(x)=-f(2-x)$. But $f(x)=-f(2-x)$ together with $f(x)+f(2-x)=4$ would force $4=0$, so that reading is impossible for any continuous $f$. The true relation $f(x)+f(2-x)=4$ is point symmetry about the centre $(1,2)$, not oddness about the line $x=1$; the signed area equals half the $2\\times 4$ box, namely $4$, never $0$.",
    "solutions": [
      {
        "name": "Reflection substitution",
        "steps": [
          "Let $I=\\int_0^2 f(x)\\,dx$. The substitution $x\\to 2-x$ (with $dx\\to -dx$ and the limits swapping) gives $I=\\int_0^2 f(2-x)\\,dx$.",
          "Add the two expressions for $I$: $2I=\\int_0^2\\big(f(x)+f(2-x)\\big)\\,dx=\\int_0^2 4\\,dx=8$.",
          "Therefore $I=4$, i.e. $\\boxed{4}$. Notice nothing about the shape of $f$ was used — only the additive constraint."
        ]
      },
      {
        "name": "Centre symmetry forces average height $2$",
        "steps": [
          "Write $g(x)=f(x)-2$. The condition becomes $g(x)+g(2-x)=0$, i.e. $g$ is odd about the point $x=1$: $g(1+t)=-g(1-t)$.",
          "An odd-about-$1$ function integrates to $0$ over the symmetric interval, so $\\int_0^2 g(x)\\,dx=0$: every dip below the centre line $y=2$ is matched by an equal rise above it.",
          "Hence $\\int_0^2 f(x)\\,dx=\\int_0^2 \\big(2+g(x)\\big)\\,dx=2\\cdot 2+0=4$.",
          "Geometrically the graph is symmetric about the centre $(1,2)$, so its mean height over $[0,2]$ is exactly $2$; the area is mean height times width $=2\\times 2=\\boxed{4}$."
        ]
      }
    ],
    "remark": "Insight: $f(x)+f(2-x)=c$ on an interval whose endpoints sum to $2$ encodes point symmetry about the centre $\\big(1,\\tfrac{c}{2}\\big)$, which pins the integral to $\\tfrac{c}{2}\\cdot(\\text{width})$ regardless of $f$. The classic blunder is reading the plus sign as a minus and invoking odd symmetry about the line $x=1$ to get $0$ — but with a continuous $f$ that reading contradicts the very equation it claims to use, since it demands $4=0$."
  },
  {
    "theme": "symmetry",
    "themeLabel": "Symmetry & Even/Odd Shortcuts",
    "title": "Across the Diagonal",
    "difficulty": 4,
    "task": "Determine",
    "tags": [
      "y=x-symmetry",
      "inverse-functions",
      "area-halving",
      "reflection"
    ],
    "statement": "Let $R$ be the region in the first quadrant bounded by $y=x^{2}$ and $x=y^{2}$. Using the reflection symmetry of $R$ about the line $y=x$, determine the area of $R$.",
    "answer": "\\[\\boxed{\\dfrac13}\\]",
    "trap": "Computing the area between the curve $y=\\sqrt{x}$ and the diagonal $y=x$, getting $\\tfrac16$, and reporting that as the answer — forgetting it is only HALF of $R$. Conversely, doubling without first checking that $y=x$ genuinely bisects $R$ into two congruent pieces. Here the two halves ARE congruent (one is the mirror of the other), so doubling is valid; the trap is forgetting the factor of $2$.",
    "solutions": [
      {
        "name": "Reflection halving",
        "steps": [
          "$R$ is symmetric about $y=x$ because swapping $x\\leftrightarrow y$ maps $y=x^2$ to $x=y^2$ and vice versa.",
          "The diagonal $y=x$ splits $R$ into two mirror-image halves; take the lower half, between $y=\\sqrt{x}$ (upper) and $y=x$ (lower) for $x\\in[0,1]$.",
          "Half-area $=\\int_0^1(\\sqrt{x}-x)\\,dx=\\big[\\tfrac23x^{3/2}-\\tfrac12x^2\\big]_0^1=\\tfrac23-\\tfrac12=\\tfrac16$.",
          "By symmetry, total area $=2\\cdot\\tfrac16=\\boxed{\\dfrac13}$."
        ]
      },
      {
        "name": "Direct vertical strips",
        "steps": [
          "For $x\\in[0,1]$ the upper boundary is $y=\\sqrt{x}$ and the lower is $y=x^2$ (since $\\sqrt{x}\\ge x^2$ there).",
          "Area $=\\int_0^1(\\sqrt{x}-x^2)\\,dx=\\big[\\tfrac23x^{3/2}-\\tfrac13x^3\\big]_0^1=\\tfrac23-\\tfrac13$.",
          "This equals $\\tfrac13$.",
          "So the area of $R$ is $\\boxed{\\dfrac13}$."
        ]
      }
    ],
    "remark": "Insight: a region symmetric about $y=x$ can be measured by one half against the diagonal, then doubled. The mechanism is a reflection isometry — but only count one half before doubling."
  },
  {
    "theme": "symmetry",
    "themeLabel": "Symmetry & Even/Odd Shortcuts",
    "title": "Odd Hidden, Even Counted",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "even-odd",
      "absolute-value",
      "symmetric-interval",
      "trig"
    ],
    "statement": "Evaluate \\[\\int_{-2}^{2}\\Big(x^{5}\\sin^{2}x+|x|+\\arctan x\\Big)\\,dx.\\]",
    "answer": "$4$",
    "trap": "Treating $|x|$ as if it were odd-and-therefore-zero-contributing the way the genuine odd terms are, or jumping straight to ``symmetric interval, so the whole integral is $0$.'' Two distinct symmetry facts are needed: the odd integrands $x^5\\sin^2x$ and $\\arctan x$ vanish, while the EVEN integrand $|x|$ doubles. Confusing ``symmetric interval'' with ``integral is zero'' is the trap.",
    "solutions": [
      {
        "name": "Term-by-term parity",
        "steps": [
          "$x^5\\sin^2x$ is odd (odd $\\times$ even), so $\\int_{-2}^2 x^5\\sin^2x\\,dx=0$.",
          "$\\arctan x$ is odd, so $\\int_{-2}^2\\arctan x\\,dx=0$.",
          "$|x|$ is even, so $\\int_{-2}^2|x|\\,dx=2\\int_0^2 x\\,dx=2\\cdot 2=4$.",
          "Sum: $0+0+4=\\boxed{4}$."
        ]
      },
      {
        "name": "Average with reflected copy",
        "steps": [
          "Let $h(x)$ be the full integrand and consider $h(x)+h(-x)$.",
          "The two odd parts cancel ($x^5\\sin^2x$ and $\\arctan x$ are odd), and $|x|$ is even, so $h(x)+h(-x)=2|x|$.",
          "Then $2I=\\int_{-2}^2\\big(h(x)+h(-x)\\big)\\,dx=\\int_{-2}^2 2|x|\\,dx=4\\int_0^2 x\\,dx=8$.",
          "So $I=\\boxed{4}$."
        ]
      },
      {
        "name": "Direct split of $|x|$",
        "steps": [
          "Discard the two odd transcendental terms (they integrate to $0$ over the symmetric interval).",
          "Split the absolute value: $\\int_{-2}^2|x|\\,dx=\\int_{-2}^0(-x)\\,dx+\\int_0^2 x\\,dx$.",
          "Each piece equals $2$ in magnitude (antiderivative $\\tfrac{x^2}{2}$ evaluated over a length-$2$ interval), so the total is $2+2=4$.",
          "Hence $I=\\boxed{4}$."
        ]
      }
    ],
    "remark": "Insight: on a symmetric interval, parity sorts the integrand --- odd parts die, even parts double. The non-differentiable $|x|$ is still even, so it counts (twice), unlike the odd transcendental decoys $x^5\\sin^2x$ and $\\arctan x$."
  },
  {
    "theme": "symmetry",
    "themeLabel": "Symmetry & Even/Odd Shortcuts",
    "title": "The Self-Reflecting Weight",
    "difficulty": 5,
    "task": "Prove that",
    "tags": [
      "even-odd",
      "reflection-trick",
      "weighted-symmetry",
      "general-result"
    ],
    "statement": "Let $\\phi$ be even and continuous on $[-a,a]$. Prove that \\[\\int_{-a}^{a}\\frac{\\phi(x)}{1+e^{\\,x}}\\,dx=\\frac12\\int_{-a}^{a}\\phi(x)\\,dx,\\] and use it to evaluate $\\displaystyle\\int_{-1}^{1}\\frac{x^{2}}{1+e^{x}}\\,dx$.",
    "answer": "\\[\\boxed{\\dfrac13}\\]",
    "trap": "Declaring the integrand $\\dfrac{x^2}{1+e^x}$ 'even-over-symmetric so split and double the half' — but $\\dfrac{1}{1+e^x}$ is NEITHER even nor odd, so the integrand has no naive parity. Halving works only because $\\dfrac{1}{1+e^x}+\\dfrac{1}{1+e^{-x}}=1$; assuming ordinary even symmetry and writing the answer as $2\\int_{0}^{1}\\dfrac{x^2}{1+e^x}\\,dx\\approx0.2148$ gives a wrong value.",
    "solutions": [
      {
        "name": "Reflection identity",
        "steps": [
          "Let $I=\\int_{-a}^a\\dfrac{\\phi(x)}{1+e^x}\\,dx$. Substitute $x\\to -x$ (which maps $[-a,a]$ onto itself with the orientation restored) and use $\\phi(-x)=\\phi(x)$: $I=\\int_{-a}^a\\dfrac{\\phi(x)}{1+e^{-x}}\\,dx$.",
          "Add the two expressions for $I$: $2I=\\int_{-a}^a\\phi(x)\\Big(\\dfrac{1}{1+e^x}+\\dfrac{1}{1+e^{-x}}\\Big)dx$.",
          "The bracket equals $\\dfrac{(1+e^{-x})+(1+e^{x})}{(1+e^x)(1+e^{-x})}=\\dfrac{2+e^x+e^{-x}}{2+e^x+e^{-x}}=1$, so $2I=\\int_{-a}^a\\phi(x)\\,dx$, proving the identity.",
          "Apply with $\\phi(x)=x^2,\\,a=1$: $I=\\tfrac12\\int_{-1}^1 x^2\\,dx=\\tfrac12\\cdot\\tfrac23=\\boxed{\\dfrac13}$."
        ]
      },
      {
        "name": "Direct verification of the value",
        "steps": [
          "By the proven identity, $\\int_{-1}^1\\dfrac{x^2}{1+e^x}\\,dx=\\tfrac12\\int_{-1}^1 x^2\\,dx$.",
          "Since $x^2$ is even, $\\int_{-1}^1 x^2\\,dx=2\\int_0^1 x^2\\,dx=2\\cdot\\tfrac13=\\tfrac23$.",
          "Half of $\\tfrac23$ is $\\tfrac13$.",
          "Therefore $\\int_{-1}^1\\dfrac{x^2}{1+e^x}\\,dx=\\boxed{\\dfrac13}$."
        ]
      }
    ],
    "remark": "Insight: even-symmetry of the WEIGHT $\\phi$ plus the complementary identity $\\frac{1}{1+e^x}+\\frac{1}{1+e^{-x}}=1$ lets a non-parity integrand be halved. The symmetry lives in the pairing $x\\leftrightarrow-x$, not in the integrand itself — the same add-back trick handles any kernel $g(x)$ with $g(x)+g(-x)$ constant."
  },
  {
    "theme": "symmetry",
    "themeLabel": "Symmetry & Even/Odd Shortcuts",
    "title": "The Figure-Eight's Domain",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "lemniscate",
      "polar-area",
      "both-axes-symmetry",
      "domain-restriction"
    ],
    "statement": "The lemniscate $r^{2}=a^{2}\\cos 2\\theta$ (with $a>0$) is symmetric about both axes and about the origin. Determine the total area it encloses, being careful about the range of $\\theta$ for which the curve exists.",
    "answer": "\\[\\boxed{a^{2}}\\]",
    "trap": "Writing Area $=\\tfrac12\\int_0^{2\\pi}r^2\\,d\\theta=\\tfrac12\\int_0^{2\\pi}a^2\\cos2\\theta\\,d\\theta=0$. The integrand $\\cos2\\theta$ is negative on the intervals where the curve does NOT exist (there $r^2<0$); the curve only lives where $\\cos2\\theta\\ge0$. Blindly integrating over a full turn lets the phantom negative regions cancel the real ones and yields a nonsensical $0$.",
    "solutions": [
      {
        "name": "Single loop ×2 with valid domain",
        "steps": [
          "The curve exists only when $\\cos2\\theta\\ge0$, i.e. $\\theta\\in[-\\tfrac{\\pi}{4},\\tfrac{\\pi}{4}]$ (right loop) and $\\theta\\in[\\tfrac{3\\pi}{4},\\tfrac{5\\pi}{4}]$ (left loop).",
          "Right-loop area $=\\tfrac12\\int_{-\\pi/4}^{\\pi/4}a^2\\cos2\\theta\\,d\\theta=\\tfrac{a^2}{2}\\Big[\\tfrac12\\sin2\\theta\\Big]_{-\\pi/4}^{\\pi/4}=\\tfrac{a^2}{4}\\big(\\sin\\tfrac{\\pi}{2}-\\sin(-\\tfrac{\\pi}{2})\\big)=\\tfrac{a^2}{2}$.",
          "By the symmetry about both axes the left loop ($\\theta\\in[\\tfrac{3\\pi}{4},\\tfrac{5\\pi}{4}]$) is congruent, contributing another $\\tfrac{a^2}{2}$.",
          "Total area $=\\tfrac{a^2}{2}+\\tfrac{a^2}{2}=\\boxed{a^{2}}$."
        ]
      },
      {
        "name": "Quarter-loop ×4",
        "steps": [
          "Use symmetry about the $x$-axis: the upper half of the right loop is traced for $\\theta\\in[0,\\tfrac{\\pi}{4}]$.",
          "Quarter area $=\\tfrac12\\int_0^{\\pi/4}a^2\\cos2\\theta\\,d\\theta=\\tfrac{a^2}{4}\\sin2\\theta\\Big|_0^{\\pi/4}=\\tfrac{a^2}{4}(1-0)=\\tfrac{a^2}{4}$.",
          "The full figure is made of four such congruent quarter-pieces (two loops, each cut in half by the $x$-axis).",
          "Total $=4\\cdot\\tfrac{a^2}{4}=\\boxed{a^{2}}$."
        ]
      },
      {
        "name": "Substitution cross-check ($u=\\sin2\\theta$)",
        "steps": [
          "On the right loop, area $A=\\tfrac12\\int_{-\\pi/4}^{\\pi/4}a^2\\cos2\\theta\\,d\\theta$. The integrand is even in $\\theta$, so $A=a^2\\int_0^{\\pi/4}\\cos2\\theta\\,d\\theta$.",
          "Let $u=\\sin2\\theta$, so $du=2\\cos2\\theta\\,d\\theta$; as $\\theta:0\\to\\tfrac{\\pi}{4}$, $u:0\\to1$. Then $A=a^2\\cdot\\tfrac12\\int_0^1 du=\\tfrac{a^2}{2}$, the right-loop area.",
          "Doubling for the congruent left loop gives total $=2\\cdot\\tfrac{a^2}{2}=\\boxed{a^{2}}$, independently confirming the polar computation."
        ]
      }
    ],
    "remark": "Insight: symmetry tells you to integrate one piece and multiply — but in polar form you must first restrict $\\theta$ to where $r^2\\ge0$. The 'symmetry over a full turn' shortcut silently sweeps through the gaps between the two loops, where $\\cos2\\theta<0$ has no geometric meaning, and the bogus negative contribution cancels the real area to zero."
  },
  {
    "theme": "symmetry",
    "themeLabel": "Symmetry & Even/Odd Shortcuts",
    "title": "Tilting the Sine",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "kings-property",
      "reflection",
      "weighted-trig",
      "arctan"
    ],
    "statement": "Evaluate \\[\\int_{0}^{\\pi}\\frac{x\\sin x}{1+\\cos^{2}x}\\,dx\\] using the symmetry of $[0,\\pi]$ under $x\\mapsto\\pi-x$.",
    "answer": "\\[\\boxed{\\dfrac{\\pi^{2}}{4}}\\]",
    "trap": "Pulling the factor $x$ out as 'roughly its average $\\pi/2$' and writing $I\\approx\\tfrac{\\pi}{2}\\int_0^\\pi\\frac{\\sin x}{1+\\cos^2x}\\,dx$. The weight $x$ is not constant, so replacing it by a number is not a legal step; here it lands on the right value only by accident, because King's reflection happens to make $2I=\\pi\\int_0^\\pi\\frac{\\sin x}{1+\\cos^2x}\\,dx$ exactly. The same 'average' trick on $\\int_0^\\pi\\frac{x^2\\sin x}{1+\\cos^2x}\\,dx$ gives $4.458\\ldots$ versus the wrong $\\tfrac{\\pi^2}{4}\\cdot\\tfrac{\\pi}{2}=3.876\\ldots$ The legitimate move is the reflection $x\\mapsto\\pi-x$, which turns $x$ into $\\pi-x$ and lets you solve for $I$.",
    "solutions": [
      {
        "name": "King's reflection",
        "steps": [
          "Let $I=\\int_0^\\pi\\dfrac{x\\sin x}{1+\\cos^2x}\\,dx$. Apply $x\\mapsto\\pi-x$, using $\\sin(\\pi-x)=\\sin x$ and $\\cos(\\pi-x)=-\\cos x$, so the denominator $1+\\cos^2x$ is unchanged.",
          "This gives $I=\\int_0^\\pi\\dfrac{(\\pi-x)\\sin x}{1+\\cos^2x}\\,dx$.",
          "Add the two forms: $2I=\\int_0^\\pi\\dfrac{\\big(x+(\\pi-x)\\big)\\sin x}{1+\\cos^2x}\\,dx=\\pi\\int_0^\\pi\\dfrac{\\sin x}{1+\\cos^2x}\\,dx$.",
          "Substitute $u=\\cos x,\\ du=-\\sin x\\,dx$; as $x:0\\to\\pi$, $u:1\\to-1$, so $\\int_0^\\pi\\dfrac{\\sin x}{1+\\cos^2x}\\,dx=\\int_{-1}^{1}\\dfrac{du}{1+u^2}=\\big[\\arctan u\\big]_{-1}^{1}=\\tfrac{\\pi}{4}-\\left(-\\tfrac{\\pi}{4}\\right)=\\tfrac{\\pi}{2}$.",
          "Hence $2I=\\pi\\cdot\\tfrac{\\pi}{2}=\\tfrac{\\pi^2}{2}$, so $I=\\boxed{\\dfrac{\\pi^{2}}{4}}$."
        ]
      },
      {
        "name": "Reflection plus even-symmetry of the reduced integral",
        "steps": [
          "The reflection step gives $2I=\\pi J$, where $J=\\int_0^\\pi\\dfrac{\\sin x}{1+\\cos^2x}\\,dx$.",
          "Set $u=\\cos x$ to get $J=\\int_{-1}^{1}\\dfrac{du}{1+u^2}$. The integrand $\\dfrac{1}{1+u^2}$ is even in $u$, so $J=2\\int_0^1\\dfrac{du}{1+u^2}=2\\big[\\arctan u\\big]_0^1=2\\cdot\\tfrac{\\pi}{4}=\\tfrac{\\pi}{2}$.",
          "Substitute back: $2I=\\pi J=\\pi\\cdot\\tfrac{\\pi}{2}=\\tfrac{\\pi^2}{2}$, hence $I=\\tfrac12\\cdot\\tfrac{\\pi^2}{2}=\\dfrac{\\pi^2}{4}$.",
          "Therefore $I=\\boxed{\\dfrac{\\pi^{2}}{4}}$."
        ]
      }
    ],
    "remark": "Insight: the $x\\mapsto\\pi-x$ reflection neutralises the awkward linear weight $x$, replacing it by the constant $\\pi$ and reducing the problem to an even-integrand arctan. Symmetry, not averaging, is what removes the variable coefficient — and the $x^2$ variant shows the averaging shortcut is a genuine fallacy, not a valid shortcut."
  },
  {
    "theme": "symmetry",
    "themeLabel": "Symmetry & Even/Odd Shortcuts",
    "title": "The Loop That Lies",
    "difficulty": 5,
    "task": "Find",
    "tags": [
      "axis-symmetry",
      "false-symmetry",
      "loop-area",
      "nodal-cubic"
    ],
    "statement": "Find the area enclosed by the closed loop of the curve $y^{2}=x^{2}(1-x)$.",
    "answer": "\\[\\boxed{\\dfrac{8}{15}}\\]",
    "trap": "Seeing the curve is symmetric about the $x$-axis and ALSO assuming symmetry about the $y$-axis (because of the $x^2$), then computing $2\\int_{-1}^{1}$ or doubling about the $y$-axis. The curve is NOT symmetric in $x$: replacing $x\\to-x$ changes $1-x$ to $1+x$, so $f(-x)=x^{3}+x^{2}\\ne f(x)$. The closed loop lives only on $0\\le x\\le1$; only the $x$-axis halving is valid.",
    "solutions": [
      {
        "name": "Correct (x-axis) halving",
        "steps": [
          "For real $y$ we need $x^2(1-x)\\ge0$, so $x\\le1$. The node is at the origin and the loop closes at $(1,0)$, existing only for $0\\le x\\le1$.",
          "The curve is symmetric about the $x$-axis, with upper branch $y=x\\sqrt{1-x}$ on $[0,1]$.",
          "Area $=2\\int_0^1 x\\sqrt{1-x}\\,dx$. Let $u=1-x$: $=2\\int_0^1(1-u)\\sqrt{u}\\,du=2\\big[\\tfrac23-\\tfrac25\\big]=2\\cdot\\tfrac{4}{15}$.",
          "Hence the loop area $=\\boxed{\\dfrac{8}{15}}$."
        ]
      },
      {
        "name": "Beta-function form",
        "steps": [
          "Area $=2\\int_0^1 x(1-x)^{1/2}\\,dx=2\\,B(2,\\tfrac32)$ where $B$ is the Beta function.",
          "$B(2,\\tfrac32)=\\dfrac{\\Gamma(2)\\Gamma(3/2)}{\\Gamma(7/2)}=\\dfrac{1\\cdot\\tfrac{\\sqrt\\pi}{2}}{\\tfrac{15\\sqrt\\pi}{8}}=\\dfrac{4}{15}$.",
          "So Area $=2\\cdot\\tfrac{4}{15}=\\tfrac{8}{15}$.",
          "Therefore the enclosed loop has area $\\boxed{\\dfrac{8}{15}}$."
        ]
      }
    ],
    "remark": "Insight: an $x^2$ in the equation does NOT guarantee $y$-axis symmetry — here the linear $(1-x)$ breaks it, and the closed loop is one-sided. Always verify a claimed symmetry against the actual region before halving or doubling."
  },
  {
    "theme": "parametricpolar",
    "themeLabel": "Parametric & Polar Areas",
    "title": "The Circle That Draws Itself Twice",
    "difficulty": 3,
    "task": "Evaluate",
    "tags": [
      "polar area",
      "tracing",
      "period",
      "double counting",
      "circle"
    ],
    "statement": "The polar curve $r=\\cos\\theta$ is a circle. A student writes its area as $\\dfrac12\\displaystyle\\int_{0}^{2\\pi}\\cos^2\\theta\\,d\\theta$. Determine the \\emph{correct} area of the region enclosed by the curve, and explain (by your choice of limits) why the student's set-up is wrong.",
    "answer": "\\[\\boxed{\\dfrac{\\pi}{4}}\\]",
    "trap": "Integrating $\\tfrac12\\int_0^{2\\pi}r^2\\,d\\theta=\\tfrac{\\pi}{2}$. The curve $r=\\cos\\theta$ is fully traced once as $\\theta$ runs over $[-\\tfrac\\pi2,\\tfrac\\pi2]$ (equivalently $[0,\\pi]$): for $\\theta\\in(\\tfrac\\pi2,\\tfrac{3\\pi}2)$ one has $r<0$, so each point is plotted in the opposite direction and the SAME circle is retraced. Sweeping $[0,2\\pi]$ covers every area element twice, doubling the answer to $\\tfrac\\pi2$.",
    "solutions": [
      {
        "name": "Correct half-period limits",
        "steps": [
          "$r=\\cos\\theta$ vanishes at $\\theta=\\pm\\tfrac\\pi2$; between these the radius is $\\ge0$ and the closed circle is traced exactly once.",
          "$A=\\dfrac12\\displaystyle\\int_{-\\pi/2}^{\\pi/2}\\cos^2\\theta\\,d\\theta=\\dfrac12\\int_{-\\pi/2}^{\\pi/2}\\dfrac{1+\\cos2\\theta}{2}\\,d\\theta.$",
          "$=\\dfrac14\\Big[\\theta+\\tfrac12\\sin2\\theta\\Big]_{-\\pi/2}^{\\pi/2}=\\dfrac14\\cdot\\pi=\\boxed{\\dfrac{\\pi}{4}}.$"
        ]
      },
      {
        "name": "Recognise the geometry",
        "steps": [
          "$r=\\cos\\theta\\Rightarrow r^2=r\\cos\\theta\\Rightarrow x^2+y^2=x$, i.e. $\\left(x-\\tfrac12\\right)^2+y^2=\\tfrac14$, a circle of radius $\\tfrac12$.",
          "Its area is $\\pi\\left(\\tfrac12\\right)^2=\\boxed{\\dfrac{\\pi}{4}}$, confirming the half-period integral and exposing the doubling in the student's $\\tfrac\\pi2$."
        ]
      }
    ],
    "remark": "Insight: in polar area the limits must trace the boundary exactly once. Curves like $r=\\cos n\\theta$ silently retrace when $r$ changes sign, so $[0,2\\pi]$ is a trap, not a default."
  },
  {
    "theme": "parametricpolar",
    "themeLabel": "Parametric & Polar Areas",
    "title": "One Roll of the Wheel",
    "difficulty": 3,
    "task": "Evaluate",
    "tags": [
      "parametric area",
      "cycloid",
      "Jacobian",
      "orientation"
    ],
    "statement": "A point on the rim of a wheel of radius $a$ rolling along the $x$-axis traces the cycloid $x=a(t-\\sin t),\\;y=a(1-\\cos t)$. Find the area of the region bounded by one complete arch of the cycloid and the $x$-axis.",
    "answer": "\\[\\boxed{3\\pi a^{2}}\\]",
    "trap": "The deadly slip is forgetting the Jacobian. The arch sweeps $t$ from $0$ to $2\\pi$, but $A=\\int y\\,dx$ needs $dx=\\frac{dx}{dt}\\,dt=a(1-\\cos t)\\,dt$, not $dx=dt$. Writing $A=\\int_0^{2\\pi} y\\,dt=\\int_0^{2\\pi} a(1-\\cos t)\\,dt=2\\pi a^{2}$ drops the second factor and lands on a dimensionally wrong $2\\pi a^{2}$ (and it is exactly twice the generating circle's area, which feels seductively plausible). The correct integrand carries $(1-\\cos t)$ twice, giving $3\\pi a^{2}$.",
    "solutions": [
      {
        "name": "Parametric area formula",
        "steps": [
          "Since $\\dfrac{dx}{dt}=a(1-\\cos t)$ and the arch runs $x:0\\to 2\\pi a$ as $t:0\\to 2\\pi$, $A=\\displaystyle\\int_{x=0}^{x=2\\pi a} y\\,dx=\\int_{0}^{2\\pi} a(1-\\cos t)\\cdot a(1-\\cos t)\\,dt=a^{2}\\int_0^{2\\pi}(1-\\cos t)^2\\,dt.$ The factor $(1-\\cos t)$ appears twice: once from $y$, once from the Jacobian $dx/dt$.",
          "Expand using the power-reduction identity: $(1-\\cos t)^2=1-2\\cos t+\\cos^2 t=\\tfrac32-2\\cos t+\\tfrac12\\cos 2t.$",
          "Over a full period the $\\cos t$ and $\\cos 2t$ terms integrate to $0$, so $\\displaystyle\\int_0^{2\\pi}\\Big(\\tfrac32-2\\cos t+\\tfrac12\\cos 2t\\Big)dt=\\tfrac32\\cdot 2\\pi=3\\pi.$ Hence $A=a^{2}\\cdot 3\\pi=\\boxed{3\\pi a^{2}}.$"
        ]
      },
      {
        "name": "Green's theorem (shoelace line integral)",
        "steps": [
          "Close the region with the segment of the $x$-axis from $(2\\pi a,0)$ back to $(0,0)$; there $y=0$ and $dy=0$, so that piece contributes nothing. The arch, parametrized by $t:0\\to 2\\pi$, traverses the boundary clockwise (it runs left to right along the top of the region), so $A=-\\tfrac12\\displaystyle\\oint(x\\,dy-y\\,dx)$ evaluated along $t:0\\to 2\\pi.$",
          "Compute the integrand with $dy=a\\sin t\\,dt$ and $dx=a(1-\\cos t)\\,dt$: $x\\,dy-y\\,dx=a^{2}\\big[(t-\\sin t)\\sin t-(1-\\cos t)^2\\big]\\,dt.$",
          "Integrating over $[0,2\\pi]$ gives $\\int_0^{2\\pi}(t-\\sin t)\\sin t\\,dt=-2\\pi-\\pi=-3\\pi$ and $\\int_0^{2\\pi}(1-\\cos t)^2\\,dt=3\\pi$, so the bracket integrates to $-6\\pi$. Thus $\\tfrac12\\oint(x\\,dy-y\\,dx)=\\tfrac{a^2}{2}(-6\\pi)=-3\\pi a^{2}$, and $A=-(-3\\pi a^{2})=\\boxed{3\\pi a^{2}}.$"
        ]
      }
    ],
    "remark": "Insight: the famous \"three times the generating circle\" result, $3\\pi a^{2}$ versus the circle's own $\\pi a^{2}$. The conceptual heart is that $\\int y\\,dx$ in parametric form picks up the Jacobian $dx=\\frac{dx}{dt}\\,dt$, so the rolling speed $a(1-\\cos t)$ enters the integrand a second time and squares the $(1-\\cos t)$ factor. The arch closes over exactly one full period $t\\in[0,2\\pi]$, the two cusps sitting at $t=0$ and $t=2\\pi$."
  },
  {
    "theme": "parametricpolar",
    "themeLabel": "Parametric & Polar Areas",
    "title": "Just One Petal",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "polar area",
      "rose curve",
      "petal limits",
      "sign of r"
    ],
    "statement": "The four-petalled rose is $r=a\\cos2\\theta$. Find the area of a \\emph{single} petal, and compare it with $\\dfrac12\\displaystyle\\int_0^{2\\pi}r^2\\,d\\theta$; state how many petals that full-range integral actually accounts for.",
    "answer": "\\[\\boxed{\\dfrac{\\pi a^{2}}{8}}\\]",
    "trap": "Taking the petal limits as $\\theta\\in[0,\\tfrac\\pi2]$. The number it returns, $\\tfrac12\\int_0^{\\pi/2}a^2\\cos^2 2\\theta\\,d\\theta=\\tfrac{\\pi a^2}{8}$, is right only by accident: on $[0,\\tfrac\\pi4]$ one sweeps the right half-petal with $r\\ge0$, but on $[\\tfrac\\pi4,\\tfrac\\pi2]$ one has $r<0$, so the plotted point flips by $\\pi$ and traces the \\emph{bottom} petal instead. So $[0,\\tfrac\\pi2]$ is two half-petals, not one petal; the integrand $r^2$ is symmetric, so the area coincides while the geometry is wrong. The other trap is asserting one petal is $\\tfrac14$ of $\\tfrac12\\int_0^{2\\pi}$ \"because there are four petals\" without checking for double-counting. A single petal is the connected arc on which $r\\ge0$ throughout: $\\cos2\\theta\\ge0\\Rightarrow\\theta\\in[-\\tfrac\\pi4,\\tfrac\\pi4]$.",
    "solutions": [
      {
        "name": "Correct petal limits ($r\\ge0$ throughout)",
        "steps": [
          "A genuine petal is the connected arc where $r=a\\cos2\\theta\\ge0$ with no sign change. Now $\\cos2\\theta\\ge0\\iff 2\\theta\\in[-\\tfrac\\pi2,\\tfrac\\pi2]\\iff\\theta\\in[-\\tfrac\\pi4,\\tfrac\\pi4]$, with $r=a$ at $\\theta=0$ (the tip) and $r=0$ at both ends.",
          "$A=\\dfrac12\\displaystyle\\int_{-\\pi/4}^{\\pi/4}a^2\\cos^2 2\\theta\\,d\\theta=\\dfrac{a^2}{2}\\int_{-\\pi/4}^{\\pi/4}\\dfrac{1+\\cos4\\theta}{2}\\,d\\theta.$",
          "$=\\dfrac{a^2}{4}\\Big[\\theta+\\tfrac14\\sin4\\theta\\Big]_{-\\pi/4}^{\\pi/4}=\\dfrac{a^2}{4}\\Big(\\dfrac\\pi2+0\\Big)=\\boxed{\\dfrac{\\pi a^{2}}{8}}.$"
        ]
      },
      {
        "name": "Consistency with the full sweep",
        "steps": [
          "Because $r^2=a^2\\cos^2 2\\theta\\ge0$ for every $\\theta$, the full-range integral $\\tfrac12\\int_0^{2\\pi}r^2\\,d\\theta$ never double-counts: each petal is swept exactly once as $\\theta$ runs over $2\\pi$, so this integral is the honest total of all four petals.",
          "$\\dfrac12\\displaystyle\\int_0^{2\\pi}a^2\\cos^2 2\\theta\\,d\\theta=\\dfrac{a^2}{2}\\int_0^{2\\pi}\\dfrac{1+\\cos4\\theta}{2}\\,d\\theta=\\dfrac{a^2}{2}\\cdot\\pi=\\dfrac{\\pi a^2}{2},$ which is exactly $4\\times\\dfrac{\\pi a^2}{8}.$",
          "Hence the full-range integral accounts for all four petals, and one petal is $\\boxed{\\dfrac{\\pi a^{2}}{8}}.$ For this even-$n$ rose the naive \"one quarter of the full sweep\" does land on the right answer, but only because there is no double-counting here."
        ]
      }
    ],
    "remark": "Insight: for $r=a\\cos n\\theta$ with $n$ even the rose has $2n$ petals and $\\tfrac12\\int_0^{2\\pi}r^2$ counts every petal once; for $n$ odd it has $n$ petals and the same integral double-counts (each petal is traced twice, once with $r<0$). The decisive habit is to locate a petal by the condition $r\\ge0$ on a connected arc, not by slicing $2\\pi$ into equal pieces: here $[0,\\tfrac\\pi2]$ gives the right number for the wrong reason, while $[-\\tfrac\\pi4,\\tfrac\\pi4]$ gives it for the right one."
  },
  {
    "theme": "parametricpolar",
    "themeLabel": "Parametric & Polar Areas",
    "title": "Three Petals, Counted Twice",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "polar area",
      "odd rose",
      "double counting",
      "period",
      "tracing"
    ],
    "statement": "Find the total area enclosed by the three-petalled rose $r=a\\sin3\\theta$. Show explicitly why the natural-looking computation $\\dfrac12\\displaystyle\\int_{0}^{2\\pi}r^2\\,d\\theta$ gives the wrong number, and state by what factor it is off.",
    "answer": "\\[\\boxed{\\dfrac{\\pi a^{2}}{4}}\\]",
    "trap": "Writing $\\tfrac12\\int_0^{2\\pi}a^2\\sin^2 3\\theta\\,d\\theta=\\tfrac{\\pi a^2}{2}$. For an ODD rose $r=a\\sin3\\theta$ the entire 3-petal figure is already traced once as $\\theta$ goes from $0$ to $\\pi$; over $[\\pi,2\\pi]$ each point reappears (with $r<0$) and every petal is drawn a SECOND time, so the full-range integral is exactly twice the true area.",
    "solutions": [
      {
        "name": "Petal-by-petal",
        "steps": [
          "A petal where $r\\ge0$: $\\sin3\\theta\\ge0$ on $\\theta\\in[0,\\tfrac\\pi3]$, giving one full petal.",
          "One petal: $\\dfrac12\\displaystyle\\int_0^{\\pi/3}a^2\\sin^2 3\\theta\\,d\\theta=\\dfrac{a^2}{2}\\int_0^{\\pi/3}\\dfrac{1-\\cos6\\theta}{2}\\,d\\theta=\\dfrac{a^2}{4}\\cdot\\dfrac{\\pi}{3}=\\dfrac{\\pi a^2}{12}.$",
          "All three petals are congruent, so $A=3\\cdot\\dfrac{\\pi a^2}{12}=\\boxed{\\dfrac{\\pi a^{2}}{4}}.$"
        ]
      },
      {
        "name": "Trace once over $[0,\\pi]$",
        "steps": [
          "As $\\theta$ runs $0\\to\\pi$, $3\\theta$ runs $0\\to3\\pi$, producing the three lobes of $\\sin$ that are exactly the three petals — the full rose, traced once.",
          "$A=\\dfrac12\\displaystyle\\int_0^{\\pi}a^2\\sin^2 3\\theta\\,d\\theta=\\dfrac{a^2}{2}\\cdot\\dfrac{\\pi}{2}=\\boxed{\\dfrac{\\pi a^{2}}{4}}.$",
          "Extending to $[0,2\\pi]$ would add an identical $\\tfrac{\\pi a^2}{4}$ of retraced petals, giving $\\tfrac{\\pi a^2}{2}$ — off by a factor of $2$."
        ]
      }
    ],
    "remark": "Insight: an odd $n$-petalled rose ($r=a\\sin n\\theta$ or $a\\cos n\\theta$, $n$ odd) is fully drawn over an interval of length $\\pi$, not $2\\pi$. Over $[\\pi,2\\pi]$ the direction angle has rotated by $\\pi$ while $r$ has flipped sign, returning each point to itself — that is the source of the exact factor-of-$2$ overcount."
  },
  {
    "theme": "parametricpolar",
    "themeLabel": "Parametric & Polar Areas",
    "title": "The Loop Within the Loop",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "polar area",
      "limaçon",
      "inner loop",
      "r negative",
      "limits"
    ],
    "statement": "The limaçon $r=1+2\\cos\\theta$ has an inner loop. Find the area enclosed by the \\emph{inner loop alone}.",
    "answer": "\\[\\boxed{\\pi-\\dfrac{3\\sqrt3}{2}}\\]",
    "trap": "Computing the area between the two loops (or the whole outer region) by integrating over $[0,2\\pi]$ — that mixes the loops and just gives $\\tfrac12\\int_0^{2\\pi}(1+2\\cos\\theta)^2\\,d\\theta=3\\pi$. The inner loop is exactly the part traced while $r<0$: $1+2\\cos\\theta<0\\Rightarrow\\cos\\theta<-\\tfrac12\\Rightarrow\\theta\\in\\big(\\tfrac{2\\pi}{3},\\tfrac{4\\pi}{3}\\big)$. Squaring $r$ keeps the integrand positive, so the loop's area is the half-integral over exactly that range.",
    "solutions": [
      {
        "name": "Isolate the $r<0$ range",
        "steps": [
          "$r=0$ at $\\cos\\theta=-\\tfrac12$, i.e. $\\theta=\\tfrac{2\\pi}{3},\\tfrac{4\\pi}{3}$; between them $r<0$, tracing the inner loop.",
          "$A=\\dfrac12\\displaystyle\\int_{2\\pi/3}^{4\\pi/3}(1+2\\cos\\theta)^2\\,d\\theta,\\quad (1+2\\cos\\theta)^2=1+4\\cos\\theta+4\\cos^2\\theta=3+4\\cos\\theta+2\\cos2\\theta.$",
          "$\\dfrac12\\Big[3\\theta+4\\sin\\theta+\\sin2\\theta\\Big]_{2\\pi/3}^{4\\pi/3}=\\dfrac12\\Big(2\\pi-4\\sqrt3+\\sqrt3\\,\\big)=\\pi-\\dfrac{3\\sqrt3}{2}=\\boxed{\\pi-\\dfrac{3\\sqrt3}{2}}.$"
        ]
      },
      {
        "name": "Symmetry about the polar axis",
        "steps": [
          "The inner loop is symmetric about $\\theta=\\pi$; take twice the slice from $\\theta=\\tfrac{2\\pi}{3}$ to $\\pi$: $A=2\\cdot\\dfrac12\\displaystyle\\int_{2\\pi/3}^{\\pi}(1+2\\cos\\theta)^2\\,d\\theta.$",
          "Using the antiderivative $3\\theta+4\\sin\\theta+\\sin2\\theta$, evaluate $\\big[\\,\\cdot\\,\\big]_{2\\pi/3}^{\\pi}=\\Big(3\\pi\\Big)-\\Big(2\\pi+\\tfrac{3\\sqrt3}{2}\\Big)=\\pi-\\tfrac{3\\sqrt3}{2}.$",
          "So $A=\\boxed{\\pi-\\dfrac{3\\sqrt3}{2}}\\approx0.5435.$"
        ]
      }
    ],
    "remark": "Insight: for $r=a+b\\cos\\theta$ with $b>a$, the inner loop is precisely the arc where $r<0$. The boundaries are the $\\theta$-values that make $r=0$, never the whole circle. A geometric shoelace/Monte-Carlo check on the traced curve confirms the same $0.5435\\ldots$"
  },
  {
    "theme": "parametricpolar",
    "themeLabel": "Parametric & Polar Areas",
    "title": "Inside the Disc, Beyond the Heart",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "polar area",
      "circle vs cardioid",
      "intersection",
      "outer minus inner"
    ],
    "statement": "Find the area of the region lying \\emph{inside} the circle $r=3\\cos\\theta$ and \\emph{outside} the cardioid $r=1+\\cos\\theta$.",
    "answer": "\\[\\boxed{\\pi}\\]",
    "trap": "Taking the limits to be $[-\\tfrac\\pi2,\\tfrac\\pi2]$ (the circle's full sweep) for the difference $\\tfrac12\\int(r_{\\text{circ}}^2-r_{\\text{card}}^2)$. That is wrong because the circle is outside the cardioid only between the intersection rays $\\theta=\\pm\\tfrac\\pi3$; beyond them the cardioid is the larger radius, so the integrand $r_{\\text{circ}}^2-r_{\\text{card}}^2$ goes negative and would subtract phantom area, yielding the spurious value $\\tfrac{3\\pi}{2}-2$.",
    "solutions": [
      {
        "name": "Find crossings, then difference of squares",
        "steps": [
          "Intersection: $3\\cos\\theta=1+\\cos\\theta\\Rightarrow\\cos\\theta=\\tfrac12\\Rightarrow\\theta=\\pm\\tfrac\\pi3.$ On $|\\theta|<\\tfrac\\pi3$ the circle is outside the cardioid.",
          "$A=\\dfrac12\\displaystyle\\int_{-\\pi/3}^{\\pi/3}\\!\\big[(3\\cos\\theta)^2-(1+\\cos\\theta)^2\\big]d\\theta=\\dfrac12\\int_{-\\pi/3}^{\\pi/3}\\!\\big(8\\cos^2\\theta-2\\cos\\theta-1\\big)d\\theta.$",
          "$8\\cos^2\\theta-2\\cos\\theta-1=3+4\\cos2\\theta-2\\cos\\theta$; integrating, $\\dfrac12\\big[3\\theta+2\\sin2\\theta-2\\sin\\theta\\big]_{-\\pi/3}^{\\pi/3}=\\dfrac12\\big(2\\pi+2\\sqrt3-2\\sqrt3\\big)=\\boxed{\\pi}.$"
        ]
      },
      {
        "name": "Two simple regions subtracted",
        "steps": [
          "Area inside circle on $|\\theta|<\\tfrac\\pi3$: $\\dfrac12\\displaystyle\\int_{-\\pi/3}^{\\pi/3}9\\cos^2\\theta\\,d\\theta=\\dfrac94\\Big[\\theta+\\tfrac12\\sin2\\theta\\Big]_{-\\pi/3}^{\\pi/3}=\\dfrac94\\Big(\\tfrac{2\\pi}{3}+\\tfrac{\\sqrt3}{2}\\Big)=\\dfrac{3\\pi}{2}+\\dfrac{9\\sqrt3}{8}.$",
          "Area inside cardioid on the same wedge: $\\dfrac12\\displaystyle\\int_{-\\pi/3}^{\\pi/3}(1+\\cos\\theta)^2d\\theta=\\dfrac{\\pi}{2}+\\dfrac{9\\sqrt3}{8}.$",
          "Subtract: $\\Big(\\dfrac{3\\pi}{2}+\\dfrac{9\\sqrt3}{8}\\Big)-\\Big(\\dfrac{\\pi}{2}+\\dfrac{9\\sqrt3}{8}\\Big)=\\boxed{\\pi}.$"
        ]
      }
    ],
    "remark": "Insight: \"inside A and outside B\" equals $\\tfrac12\\int(r_A^2-r_B^2)$ only over the $\\theta$-range where $r_A\\ge r_B$. The crossing angles, not the natural domain of either curve, set the limits. The $9\\sqrt3/8$ pieces cancelling cleanly between the two wedges is the signal that the bookkeeping is honest."
  },
  {
    "theme": "parametricpolar",
    "themeLabel": "Parametric & Polar Areas",
    "title": "Half of a Lemniscate",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "polar area",
      "lemniscate",
      "r-squared",
      "domain restriction",
      "one loop"
    ],
    "statement": "Find the area enclosed by a \\emph{single} loop of the lemniscate $r^2=a^2\\cos2\\theta$.",
    "answer": "\\[\\boxed{\\dfrac{a^{2}}{2}}\\]",
    "trap": "Writing $A=\\tfrac12\\int_0^{2\\pi}a^2\\cos2\\theta\\,d\\theta=0$ (which is wrong on two counts) or forgetting that $r^2<0$ is forbidden. The curve only exists where $\\cos2\\theta\\ge0$; one loop is $\\theta\\in[-\\tfrac\\pi4,\\tfrac\\pi4]$. Outside that range there is NO curve, so those angles must be excluded, not integrated through.",
    "solutions": [
      {
        "name": "Restrict to where $r^2\\ge0$",
        "steps": [
          "$r^2=a^2\\cos2\\theta\\ge0\\Rightarrow\\cos2\\theta\\ge0\\Rightarrow\\theta\\in[-\\tfrac\\pi4,\\tfrac\\pi4]$ for the right loop.",
          "$A=\\dfrac12\\displaystyle\\int_{-\\pi/4}^{\\pi/4}r^2\\,d\\theta=\\dfrac12\\int_{-\\pi/4}^{\\pi/4}a^2\\cos2\\theta\\,d\\theta=\\dfrac{a^2}{2}\\cdot\\dfrac12\\Big[\\sin2\\theta\\Big]_{-\\pi/4}^{\\pi/4}.$",
          "$=\\dfrac{a^2}{4}\\big(1-(-1)\\big)=\\boxed{\\dfrac{a^{2}}{2}}.$"
        ]
      },
      {
        "name": "Symmetry of the loop",
        "steps": [
          "The right loop is symmetric about the polar axis, so $A=2\\cdot\\dfrac12\\displaystyle\\int_{0}^{\\pi/4}a^2\\cos2\\theta\\,d\\theta.$",
          "$=a^2\\cdot\\dfrac12\\Big[\\sin2\\theta\\Big]_{0}^{\\pi/4}=a^2\\cdot\\dfrac12(1-0)=\\boxed{\\dfrac{a^{2}}{2}}.$",
          "(The two loops together have area $a^2$; the lemniscate is one of the rare curves whose area is rational in $a^2$ with no $\\pi$.)"
        ]
      }
    ],
    "remark": "Insight: when the equation gives $r^2$, the very existence of the curve constrains the $\\theta$-domain. Integrating $r^2$ over angles where $r^2$ would be negative is meaningless — there is simply no boundary there."
  },
  {
    "theme": "parametricpolar",
    "themeLabel": "Parametric & Polar Areas",
    "title": "The Figure-Eight's Vanishing Area",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "parametric area",
      "lissajous",
      "signed area",
      "self-intersection",
      "one lobe"
    ],
    "statement": "The Lissajous curve $x=\\sin t,\\;y=\\sin 2t$ ($0\\le t\\le2\\pi$) is a figure-eight through the origin. Find the area enclosed by \\emph{one} of its two lobes. (Note that $\\displaystyle\\int_0^{2\\pi}y\\,\\frac{dx}{dt}\\,dt$ for this curve equals $0$.)",
    "answer": "\\[\\boxed{\\dfrac{4}{3}}\\]",
    "trap": "Concluding from $\\oint_0^{2\\pi}y\\,dx=0$ that the \"area is zero,\" or trying to take a single integral over all of $[0,2\\pi]$. Because the curve self-intersects at the origin and the two lobes are traced with opposite orientation, their signed contributions cancel. One must integrate over exactly one lobe — $t\\in[0,\\pi]$ traces the right lobe as a simple closed loop.",
    "solutions": [
      {
        "name": "Integrate over one lobe",
        "steps": [
          "The origin is reached at $t=0,\\pi,2\\pi$. For $t\\in[0,\\pi]$ the point starts and ends at the origin tracing the right lobe (e.g. $t=\\tfrac\\pi4\\to(\\tfrac{\\sqrt2}{2},1)$ upper-right, $t=\\tfrac{3\\pi}4\\to(\\tfrac{\\sqrt2}{2},-1)$ lower-right) — one simple closed loop with $x\\ge0$ throughout.",
          "$\\dfrac{dx}{dt}=\\cos t$, so the lobe area is $\\Big|\\displaystyle\\int_0^{\\pi}\\sin2t\\,\\cos t\\,dt\\Big|=\\Big|\\int_0^{\\pi}2\\sin t\\cos^2 t\\,dt\\Big|.$",
          "Let $u=\\cos t$, $du=-\\sin t\\,dt$: $\\displaystyle\\int_0^{\\pi}2\\sin t\\cos^2 t\\,dt=\\int_{1}^{-1}-2u^2\\,du=\\Big[-\\tfrac{2}{3}u^3\\Big]_{1}^{-1}=\\dfrac{4}{3}.$ Lobe area $=\\boxed{\\dfrac{4}{3}}.$"
        ]
      },
      {
        "name": "Shoelace / Green on the loop",
        "steps": [
          "By $A=\\tfrac12\\oint(x\\,dy-y\\,dx)$ on $t\\in[0,\\pi]$ with $dy=2\\cos2t\\,dt$ and $dx=\\cos t\\,dt$:",
          "$A=\\dfrac12\\displaystyle\\int_0^{\\pi}\\big(2\\sin t\\cos2t-\\sin2t\\cos t\\big)dt$; using $\\cos2t=1-2\\sin^2t$ and $\\sin2t=2\\sin t\\cos t$, the integrand simplifies to $-2\\sin^3 t$.",
          "Then $\\displaystyle\\int_0^{\\pi}-2\\sin^3 t\\,dt=-2\\cdot\\tfrac{4}{3}=-\\tfrac{8}{3}$, so $A=\\tfrac12\\big(-\\tfrac{8}{3}\\big)=-\\tfrac{4}{3}$, giving lobe magnitude $\\boxed{\\dfrac{4}{3}}.$ Each lobe has area $\\tfrac43$, yet over $[0,2\\pi]$ their oppositely-oriented signed sum is $0$."
        ]
      }
    ],
    "remark": "Insight: $\\oint y\\,dx$ returns SIGNED area. For a self-intersecting figure-eight the lobes are traced with opposite orientation and their signed areas cancel; a zero answer signals you must split at the crossing point, not that the region is empty."
  },
  {
    "theme": "parametricpolar",
    "themeLabel": "Parametric & Polar Areas",
    "title": "Where Two Hearts Overlap",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "polar area",
      "two cardioids",
      "intersection",
      "min radius",
      "split angle"
    ],
    "statement": "Find the area of the region lying inside \\emph{both} cardioids $r=1+\\cos\\theta$ and $r=1+\\sin\\theta$.",
    "answer": "\\[\\boxed{\\dfrac{3\\pi}{2}-2\\sqrt2}\\]",
    "trap": "Setting the only intersection from $1+\\cos\\theta=1+\\sin\\theta$ (giving $\\theta=\\tfrac\\pi4,\\tfrac{5\\pi}4$) and then integrating one cardioid over the whole circle, or forgetting the curves also both pass through the pole. Inside-both means integrating $\\tfrac12\\,r_{\\min}^2$, and the curve providing $r_{\\min}$ SWITCHES at $\\theta=\\tfrac\\pi4$ and $\\theta=\\tfrac{5\\pi}4$. Using one cardioid throughout gives $\\tfrac{3\\pi}{2}$ (just one cardioid's area) and overcounts the overlap.",
    "solutions": [
      {
        "name": "Integrate the inner (smaller) radius",
        "steps": [
          "The common region's boundary at each $\\theta$ is the smaller radius. $1+\\cos\\theta\\le1+\\sin\\theta\\Leftrightarrow\\cos\\theta\\le\\sin\\theta\\Leftrightarrow\\theta\\in(\\tfrac\\pi4,\\tfrac{5\\pi}4)$, where $r_{\\min}=1+\\cos\\theta$; elsewhere $r_{\\min}=1+\\sin\\theta$.",
          "$A=\\dfrac12\\displaystyle\\int_{\\pi/4}^{5\\pi/4}(1+\\cos\\theta)^2\\,d\\theta+\\dfrac12\\int_{5\\pi/4}^{\\,9\\pi/4}(1+\\sin\\theta)^2\\,d\\theta.$",
          "Each integral uses $(1+\\cos\\theta)^2=\\tfrac32+2\\cos\\theta+\\tfrac12\\cos2\\theta$. Evaluating, $A=\\Big(\\tfrac{3\\pi}{4}-\\sqrt2\\Big)+\\Big(\\tfrac{3\\pi}{4}-\\sqrt2\\Big)=\\boxed{\\dfrac{3\\pi}{2}-2\\sqrt2}.$"
        ]
      },
      {
        "name": "Exploit the $\\theta\\!\\to\\!\\tfrac\\pi2-\\theta$ symmetry",
        "steps": [
          "The map $\\theta\\mapsto\\tfrac\\pi2-\\theta$ sends $1+\\cos\\theta\\leftrightarrow1+\\sin\\theta$, so the two cardioids are reflections of each other in the line $\\theta=\\tfrac\\pi4$ and the overlap is symmetric about that line; compute the contribution from $r=1+\\cos\\theta$ over its binding arc and double.",
          "On $\\theta\\in[\\tfrac\\pi4,\\tfrac{5\\pi}4]$ the binding (inner) curve is $r=1+\\cos\\theta$: $\\dfrac12\\displaystyle\\int_{\\pi/4}^{5\\pi/4}(1+\\cos\\theta)^2\\,d\\theta=\\dfrac{3\\pi}{4}-\\sqrt2.$",
          "By the reflection symmetry the contribution of $r=1+\\sin\\theta$ over the complementary arc equals it, $\\dfrac{3\\pi}{4}-\\sqrt2$. Total $=2\\Big(\\tfrac{3\\pi}{4}-\\sqrt2\\Big)=\\boxed{\\dfrac{3\\pi}{2}-2\\sqrt2}.$"
        ]
      }
    ],
    "remark": "Insight: \"inside both\" curves means $\\tfrac12\\int r_{\\min}^2\\,d\\theta$, and $r_{\\min}$ is a piecewise function of $\\theta$. The intersection angles $\\tfrac\\pi4$ and $\\tfrac{5\\pi}4$ are the seams where the inner boundary swaps from one curve to the other — miss a seam and you integrate the wrong curve. Both cardioids also pass through the pole (at $\\theta=\\pi$ and $\\theta=\\tfrac{3\\pi}2$), but there the inner radius vanishes so the integrand is $0$ and no extra term arises."
  },
  {
    "theme": "parametricpolar",
    "themeLabel": "Parametric & Polar Areas",
    "title": "The Loop of a Wandering Curve",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "parametric area",
      "self-intersection",
      "loop",
      "green's theorem",
      "t-limits"
    ],
    "statement": "The parametric curve $x=t^2-1,\\;y=t^3-t$ crosses itself, forming a single loop. Find the area enclosed by that loop.",
    "answer": "\\[\\boxed{\\dfrac{8}{15}}\\]",
    "trap": "Guessing the loop corresponds to $t\\in[0,1]$ or some half-range, or integrating from $t=-\\infty$. The self-crossing must be found from $\\big(x(t_1),y(t_1)\\big)=\\big(x(t_2),y(t_2)\\big)$ with $t_1\\ne t_2$: this forces $t_2=-t_1$ and $y=0$, giving the crossing at the origin for $t=\\pm1$. The loop is exactly $t\\in[-1,1]$ — a half-range such as $t\\in[0,1]$ only sweeps an open arc (it returns $\\tfrac{4}{15}$, not the enclosed region).",
    "solutions": [
      {
        "name": "Locate the loop, then $\\oint y\\,dx$",
        "steps": [
          "Self-intersection: $x(t)=x(s)\\Rightarrow t^2=s^2\\Rightarrow s=-t$; then $y(-t)=-y(t)$, so $y(t)=0\\Rightarrow t(t^2-1)=0\\Rightarrow t=\\pm1$ (both map to $(0,0)$). The loop is traced for $t\\in[-1,1]$.",
          "Area $=\\Big|\\displaystyle\\int_{-1}^{1}y\\,\\dfrac{dx}{dt}\\,dt\\Big|=\\Big|\\int_{-1}^{1}(t^3-t)(2t)\\,dt\\Big|=\\Big|\\int_{-1}^{1}(2t^4-2t^2)\\,dt\\Big|.$",
          "$\\displaystyle\\int_{-1}^{1}(2t^4-2t^2)\\,dt=2\\Big[\\tfrac{t^5}{5}-\\tfrac{t^3}{3}\\Big]_{-1}^{1}=4\\Big(\\tfrac15-\\tfrac13\\Big)=-\\tfrac{8}{15};\\;\\text{area}=\\boxed{\\dfrac{8}{15}}.$"
        ]
      },
      {
        "name": "Symmetry about the $x$-axis",
        "steps": [
          "Since $y(-t)=-y(t)$ and $x(-t)=x(t)$, the loop is symmetric about the $x$-axis; the upper half corresponds to $t\\in[-1,0]$ (where $y\\ge0$).",
          "Area $=2\\Big|\\displaystyle\\int_{-1}^{0}y\\,\\dfrac{dx}{dt}\\,dt\\Big|=2\\Big|\\int_{-1}^{0}(t^3-t)(2t)\\,dt\\Big|=2\\Big|\\big[\\tfrac{2t^5}{5}-\\tfrac{2t^3}{3}\\big]_{-1}^{0}\\Big|.$",
          "$=2\\Big|0-\\big(-\\tfrac25+\\tfrac23\\big)\\Big|=2\\cdot\\dfrac{4}{15}=\\boxed{\\dfrac{8}{15}}.$"
        ]
      },
      {
        "name": "Green's theorem $\\tfrac12\\oint(x\\,dy-y\\,dx)$",
        "steps": [
          "The signed area bounded by the closed loop $t\\in[-1,1]$ is $A=\\tfrac12\\displaystyle\\oint(x\\,dy-y\\,dx)=\\tfrac12\\int_{-1}^{1}\\big(x\\,\\dot y-y\\,\\dot x\\big)\\,dt$, with $\\dot x=2t,\\ \\dot y=3t^2-1$.",
          "$x\\dot y-y\\dot x=(t^2-1)(3t^2-1)-(t^3-t)(2t)=(3t^4-4t^2+1)-(2t^4-2t^2)=t^4-2t^2+1=(t^2-1)^2.$",
          "$A=\\tfrac12\\displaystyle\\int_{-1}^{1}(t^2-1)^2\\,dt=\\tfrac12\\cdot\\tfrac{16}{15}=\\boxed{\\dfrac{8}{15}}$ — matching both methods above."
        ]
      }
    ],
    "remark": "Insight: for a self-intersecting parametric curve the loop is bounded by the two parameter values giving the SAME point. Finding those values (here the symmetry $s=-t$) is the real work; the integral is routine once the limits are right. The Green's-theorem form is the cleanest — the integrand collapses to the perfect square $(t^2-1)^2\\ge0$, so no absolute value is even needed."
  },
  {
    "theme": "moduluspiece",
    "themeLabel": "Modulus, Greatest-Integer & Piecewise Areas",
    "title": "The Vanishing Net Signed Area",
    "difficulty": 3,
    "task": "Evaluate",
    "tags": [
      "modulus",
      "area",
      "sign-change",
      "split-at-root",
      "definite-integral"
    ],
    "statement": "Find the area of the region bounded by the curve $y=\\left|x^{2}-2x\\right|$, the $x$-axis, and the vertical lines $x=0$ and $x=3$.",
    "answer": "\\[\\boxed{\\dfrac{8}{3}}\\]",
    "trap": "Writing $\\int_0^3 (x^2-2x)\\,dx$ in one stroke. That integral equals $0$ because the dip below the axis on $(0,2)$ exactly cancels the rise on $(2,3)$ — so the careless solver concludes the area is $0$. Area demands $|x^2-2x|$, which forces a split at the root $x=2$ where the bracket changes sign.",
    "solutions": [
      {
        "name": "Split at the sign-change root",
        "steps": [
          "Factor $x^2-2x=x(x-2)$; it is $\\le 0$ on $[0,2]$ and $\\ge 0$ on $[2,3]$, so $|x^2-2x|=2x-x^2$ on $[0,2]$ and $x^2-2x$ on $[2,3]$.",
          "$\\int_0^2 (2x-x^2)\\,dx=\\left[x^2-\\tfrac{x^3}{3}\\right]_0^2=4-\\tfrac{8}{3}=\\tfrac{4}{3}.$",
          "$\\int_2^3 (x^2-2x)\\,dx=\\left[\\tfrac{x^3}{3}-x^2\\right]_2^3=(9-9)-(\\tfrac{8}{3}-4)=\\tfrac{4}{3}.$",
          "Add: $\\tfrac{4}{3}+\\tfrac{4}{3}=\\boxed{\\dfrac{8}{3}}.$"
        ]
      },
      {
        "name": "Reflect-and-add (geometry of the dip)",
        "steps": [
          "The signed integral $\\int_0^3(x^2-2x)\\,dx=\\left[\\tfrac{x^3}{3}-x^2\\right]_0^3=9-9=0$, confirming the below-axis and above-axis signed pieces are negatives of each other.",
          "Let $N=\\int_0^2(x^2-2x)\\,dx=\\left[\\tfrac{x^3}{3}-x^2\\right]_0^2=\\tfrac{8}{3}-4=-\\tfrac{4}{3}$ (the negative piece) and $P=\\int_2^3(x^2-2x)\\,dx=\\tfrac{4}{3}$ (since $N+P=0$).",
          "Area $=|N|+P=\\tfrac{4}{3}+\\tfrac{4}{3}=\\boxed{\\dfrac{8}{3}}.$"
        ]
      }
    ],
    "remark": "Insight: net signed area and geometric area are different animals. A vanishing definite integral is a red flag, not a green light — it screams 'the curve crossed the axis; split there.'"
  },
  {
    "theme": "moduluspiece",
    "themeLabel": "Modulus, Greatest-Integer & Piecewise Areas",
    "title": "A Staircase Stopped Mid-Step",
    "difficulty": 3,
    "task": "Evaluate",
    "tags": [
      "greatest-integer",
      "step-function",
      "piecewise-constant",
      "fractional-endpoint",
      "area"
    ],
    "statement": "Evaluate $\\displaystyle\\int_{0}^{9/2}\\lfloor x\\rfloor\\,dx$, where $\\lfloor x\\rfloor$ is the greatest integer not exceeding $x$.",
    "answer": "\\[\\boxed{8}\\]",
    "trap": "Treating $\\lfloor x\\rfloor$ as if it were $x$ (which would give $\\int_0^{9/2}x\\,dx=\\tfrac{81}{8}$), or using the tidy formula $\\tfrac{n(n-1)}{2}$ meant only for an integer upper limit $n$. The upper limit $\\tfrac{9}{2}$ is not an integer, so the last unit step from $4$ to $\\tfrac92$ is a partial step: $\\lfloor x\\rfloor=4$ there, contributing $4\\cdot\\tfrac12$, not a full unit. Dropping that partial step entirely (stopping at $4$) gives the equally-wrong $6$.",
    "solutions": [
      {
        "name": "Sum of rectangles, last one partial",
        "steps": [
          "On each $[k,k+1)$, $\\lfloor x\\rfloor=k$ is constant, so its integral over a full unit width is the rectangle area $k\\cdot 1$.",
          "Full unit steps cover $[0,4)$: $\\sum_{k=0}^{3}k=0+1+2+3=6.$",
          "On the final piece $[4,\\tfrac92]$, $\\lfloor x\\rfloor=4$ over width $\\tfrac12$: contribution $4\\cdot\\tfrac12=2.$",
          "Total: $6+2=\\boxed{8}.$"
        ]
      },
      {
        "name": "Via the fractional part identity",
        "steps": [
          "Use $\\lfloor x\\rfloor=x-\\{x\\}$, so $\\int_0^{9/2}\\lfloor x\\rfloor\\,dx=\\int_0^{9/2}x\\,dx-\\int_0^{9/2}\\{x\\}\\,dx.$",
          "$\\int_0^{9/2}x\\,dx=\\tfrac12\\left(\\tfrac92\\right)^2=\\tfrac{81}{8}.$",
          "$\\int_0^{9/2}\\{x\\}\\,dx$: four full sawtooth teeth on $[0,4)$, each of area $\\tfrac12$, give $2$; plus $\\int_4^{9/2}(x-4)\\,dx=\\tfrac12\\cdot\\left(\\tfrac12\\right)^2=\\tfrac18$; total $\\tfrac{17}{8}.$",
          "Subtract: $\\tfrac{81}{8}-\\tfrac{17}{8}=\\tfrac{64}{8}=\\boxed{8}.$"
        ]
      }
    ],
    "remark": "Insight: the greatest-integer integral is a Riemann sum made exact, but only because each step is genuinely flat. The closed formula $\\tfrac{n(n-1)}{2}$ is a special case that silently assumes an integer endpoint; here the half-open final step contributes $4\\cdot\\tfrac12=2$, lifting $6$ to $8$."
  },
  {
    "theme": "moduluspiece",
    "themeLabel": "Modulus, Greatest-Integer & Piecewise Areas",
    "title": "Slope Times the Staircase",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "greatest-integer",
      "x-floor-x",
      "piecewise-linear",
      "summation",
      "area"
    ],
    "statement": "Evaluate $\\displaystyle\\int_{0}^{4} x\\,\\lfloor x\\rfloor\\,dx$.",
    "answer": "\\[\\boxed{17}\\]",
    "trap": "Pulling $\\lfloor x\\rfloor$ out as if it equalled $x$ and computing $\\int_0^4 x^2\\,dx=\\tfrac{64}{3}\\approx 21.3$. The factor $\\lfloor x\\rfloor$ is a different constant on each unit interval; on $[k,k+1)$ the integrand is the straight line $kx$, not the parabola $x^2$. You must integrate $kx$ piece by piece and sum.",
    "solutions": [
      {
        "name": "Integrate $kx$ on each unit cell",
        "steps": [
          "Split $[0,4)$ into the cells $[k,k+1)$ for $k=0,1,2,3$. On each cell $\\lfloor x\\rfloor=k$, so the integrand is the line $kx$.",
          "$\\displaystyle\\int_k^{k+1}kx\\,dx=k\\cdot\\frac{(k+1)^2-k^2}{2}=\\frac{k(2k+1)}{2}.$",
          "Sum for $k=0,1,2,3$: $\\dfrac{0}{2}+\\dfrac{1\\cdot 3}{2}+\\dfrac{2\\cdot 5}{2}+\\dfrac{3\\cdot 7}{2}=0+\\dfrac32+5+\\dfrac{21}{2}.$",
          "Combine: $\\dfrac32+\\dfrac{21}{2}=12$, then $12+5=\\boxed{17}.$"
        ]
      },
      {
        "name": "Subtract the fractional-part contribution",
        "steps": [
          "Write $x\\lfloor x\\rfloor=x\\bigl(x-\\{x\\}\\bigr)=x^2-x\\{x\\}$, so $\\displaystyle\\int_0^4 x\\lfloor x\\rfloor\\,dx=\\int_0^4 x^2\\,dx-\\int_0^4 x\\{x\\}\\,dx.$",
          "The smooth part is $\\displaystyle\\int_0^4 x^2\\,dx=\\frac{64}{3}.$",
          "On $[k,k+1)$, $\\{x\\}=x-k$, so $\\displaystyle\\int_k^{k+1}x\\{x\\}\\,dx=\\int_k^{k+1}(x^2-kx)\\,dx=\\frac{(k+1)^3-k^3}{3}-\\frac{k(2k+1)}{2}.$ Summing $k=0,1,2,3$ gives $\\displaystyle\\int_0^4 x\\{x\\}\\,dx=\\frac{13}{3}.$",
          "Hence $\\displaystyle\\int_0^4 x\\lfloor x\\rfloor\\,dx=\\frac{64}{3}-\\frac{13}{3}=\\frac{51}{3}=\\boxed{17}.$"
        ]
      }
    ],
    "remark": "Insight: $\\lfloor x\\rfloor$ is piecewise constant, but $x\\lfloor x\\rfloor$ is piecewise linear with a fresh slope $k$ on each cell. The trap of factoring $\\lfloor x\\rfloor$ out confuses a multiplier that is constant on each cell with one that is constant overall, replacing a staircase of lines by a single parabola and overcounting by exactly $\\tfrac{13}{3}$."
  },
  {
    "theme": "moduluspiece",
    "themeLabel": "Modulus, Greatest-Integer & Piecewise Areas",
    "title": "The Periodic Tooth",
    "difficulty": 3,
    "task": "Evaluate",
    "tags": [
      "fractional-part",
      "periodicity",
      "piecewise",
      "sawtooth",
      "area"
    ],
    "statement": "Evaluate $\\displaystyle\\int_{0}^{3}\\{x\\}^{2}\\,dx$, where $\\{x\\}=x-\\lfloor x\\rfloor$ denotes the fractional part of $x$.",
    "answer": "\\[\\boxed{1}\\]",
    "trap": "Replacing $\\{x\\}$ by $x$ and computing $\\int_0^3 x^2\\,dx=9$. The fractional part resets to $0$ at every integer; it never reaches $x$'s growing values. The graph of $\\{x\\}^2$ is the same little arch repeated on each $[k,k+1)$, so the integral is just three copies of one cell.",
    "solutions": [
      {
        "name": "Exploit unit periodicity",
        "steps": [
          "$\\{x\\}$ has period $1$, hence $\\{x\\}^2$ has period $1$, so $\\int_0^3\\{x\\}^2\\,dx=3\\int_0^1\\{x\\}^2\\,dx.$",
          "On $[0,1)$, $\\{x\\}=x$, so $\\int_0^1 x^2\\,dx=\\tfrac13.$",
          "Therefore $3\\cdot\\tfrac13=\\boxed{1}.$"
        ]
      },
      {
        "name": "Shift each cell to the origin",
        "steps": [
          "On $[k,k+1)$ substitute $t=x-k$, so $\\{x\\}=t$ with $t\\in[0,1)$ and $\\int_k^{k+1}\\{x\\}^2\\,dx=\\int_0^1 t^2\\,dt=\\tfrac13.$",
          "There are three such cells ($k=0,1,2$).",
          "Sum: $3\\cdot\\tfrac13=\\boxed{1}.$"
        ]
      }
    ],
    "remark": "Insight: anything built only from $\\{x\\}$ is unit-periodic, so an integral over $[0,n]$ collapses to $n$ times the single-cell value. Spotting the periodicity turns a 'hard' integral into one easy arch."
  },
  {
    "theme": "moduluspiece",
    "themeLabel": "Modulus, Greatest-Integer & Piecewise Areas",
    "title": "Two Towns and a Ceiling",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "modulus",
      "sum-of-absolutes",
      "flat-bottom",
      "piecewise",
      "area"
    ],
    "statement": "Let $g(x)=|x-1|+|x-2|$. Find the area of the region enclosed between the graph of $y=g(x)$ and the horizontal line $y=2$.",
    "answer": "\\[\\boxed{\\dfrac{3}{2}}\\]",
    "trap": "Forgetting that $g$ is flat (equal to $1$) on the whole middle interval $[1,2]$ and treating it as a single V with one vertex. A sum of two absolute values has TWO kinks (at $x=1$ and $x=2$) with a flat trough between them. If you model it as a pure V of minimum $1$ at $x=\\tfrac32$, namely $h(x)=1+2\\bigl|x-\\tfrac32\\bigr|$, then $h=2$ at $x=1$ and $x=2$ and you get just a triangle of base $1$, height $1$, area $\\tfrac12$ — missing the central rectangle entirely and arriving at the wrong value $\\tfrac12$.",
    "solutions": [
      {
        "name": "Three-piece split at both kinks",
        "steps": [
          "Write $g$ piecewise: $g(x)=3-2x$ for $x<1$, $g(x)=1$ for $1\\le x\\le 2$, and $g(x)=2x-3$ for $x>2$. Solve $g=2$ on the slanted pieces: $3-2x=2\\Rightarrow x=\\tfrac12$ and $2x-3=2\\Rightarrow x=\\tfrac52$; on the flat piece $g=1<2$ throughout. So $g\\le 2$ exactly on $\\bigl[\\tfrac12,\\tfrac52\\bigr]$.",
          "The enclosed area is $\\displaystyle\\int_{1/2}^{5/2}\\bigl(2-g(x)\\bigr)\\,dx$. On $\\bigl[\\tfrac12,1\\bigr]$: $\\int\\bigl(2-(3-2x)\\bigr)dx=\\int(2x-1)\\,dx=\\bigl[x^2-x\\bigr]_{1/2}^{1}=0-\\bigl(-\\tfrac14\\bigr)=\\tfrac14.$",
          "On $[1,2]$: $\\int(2-1)\\,dx=1.$  On $\\bigl[2,\\tfrac52\\bigr]$: $\\int\\bigl(2-(2x-3)\\bigr)dx=\\int(5-2x)\\,dx=\\bigl[5x-x^2\\bigr]_{2}^{5/2}=\\tfrac{25}{4}-6=\\tfrac14.$",
          "Total area $=\\tfrac14+1+\\tfrac14=\\boxed{\\dfrac32}.$"
        ]
      },
      {
        "name": "Rectangle minus area under the trapezium",
        "steps": [
          "Over $\\bigl[\\tfrac12,\\tfrac52\\bigr]$ the line $y=2$ caps a rectangle of width $\\tfrac52-\\tfrac12=2$ and height $2$, so its area is $2\\times 2=4$.",
          "Below it, $y=g(x)$ traces an isosceles trapezium: two slanted sides over $\\bigl[\\tfrac12,1\\bigr]$ and $\\bigl[2,\\tfrac52\\bigr]$ plus the flat top $g=1$ over $[1,2]$. The two slanted strips are each a trapezoid with parallel heights $2$ and $1$ over width $\\tfrac12$, giving $\\tfrac12\\cdot\\tfrac12(2+1)=\\tfrac34$ apiece; the flat middle contributes a rectangle $1\\times 1=1$. Hence $\\displaystyle\\int_{1/2}^{5/2}g\\,dx=\\tfrac34+1+\\tfrac34=\\tfrac52.$",
          "The enclosed region is the rectangle minus the area under $g$: $4-\\tfrac52=\\boxed{\\dfrac32}.$"
        ]
      }
    ],
    "remark": "Insight: a sum of absolute values has a flat trough exactly between its breakpoints, where the two distances trade off so their sum stays constant. Spotting that plateau (here $g\\equiv 1$ on $[1,2]$) is what separates the correct trapezium from the classic single-V blunder."
  },
  {
    "theme": "moduluspiece",
    "themeLabel": "Modulus, Greatest-Integer & Piecewise Areas",
    "title": "Where the Squares Cross Integers",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "greatest-integer",
      "composed-floor",
      "irrational-breakpoints",
      "quadratic",
      "area"
    ],
    "statement": "Evaluate $\\displaystyle\\int_{0}^{2}\\lfloor x^{2}\\rfloor\\,dx$, and present the answer in closed form.",
    "answer": "\\[\\boxed{5-\\sqrt{2}-\\sqrt{3}}\\]",
    "trap": "Splitting at the integers $x=1$ (and the endpoint $x=2$) as one does for $\\lfloor x\\rfloor$. But $\\lfloor x^2\\rfloor$ jumps where $x^2$ crosses an integer, i.e. at $x=1,\\sqrt2,\\sqrt3$ — not at the integers of $x$. Splitting at $x=1$ alone makes $\\lfloor x^2\\rfloor$ wrong on $(1,2)$, where it takes the three different values $1,2,3$.",
    "solutions": [
      {
        "name": "Split at the true jump points $x=\\sqrt{k}$",
        "steps": [
          "$\\lfloor x^2\\rfloor=k$ exactly when $k\\le x^2<k+1$, i.e. $\\sqrt{k}\\le x<\\sqrt{k+1}$. On $[0,2]$ the jumps occur at $x=1,\\sqrt2,\\sqrt3$.",
          "$[0,1)$: value $0$. $[1,\\sqrt2)$: value $1$, length $\\sqrt2-1$. $[\\sqrt2,\\sqrt3)$: value $2$, length $\\sqrt3-\\sqrt2$. $[\\sqrt3,2)$: value $3$, length $2-\\sqrt3.$",
          "Integral $=1(\\sqrt2-1)+2(\\sqrt3-\\sqrt2)+3(2-\\sqrt3).$",
          "Expand: $\\sqrt2-1+2\\sqrt3-2\\sqrt2+6-3\\sqrt3=\\boxed{5-\\sqrt2-\\sqrt3}.$"
        ]
      },
      {
        "name": "Layer-cake (distribution) summation",
        "steps": [
          "For a nonnegative integer-valued step function, $\\int_0^2\\lfloor x^2\\rfloor\\,dx=\\sum_{k\\ge 1}\\text{measure}\\{x\\in[0,2]:\\lfloor x^2\\rfloor\\ge k\\}.$",
          "$\\{x^2\\ge k\\}\\cap[0,2]=[\\sqrt k,2]$ for $k=1,2,3$ (and empty for $k\\ge4$ since $x^2<4$), with lengths $2-1,\\,2-\\sqrt2,\\,2-\\sqrt3.$",
          "Sum: $(2-1)+(2-\\sqrt2)+(2-\\sqrt3)=6-1-\\sqrt2-\\sqrt3.$",
          "This equals $\\boxed{5-\\sqrt2-\\sqrt3}.$"
        ]
      }
    ],
    "remark": "Insight: a composed floor $\\lfloor f(x)\\rfloor$ jumps where $f$ — not $x$ — meets an integer. For $\\lfloor x^2\\rfloor$ the breakpoints are the square roots, and the answer is unavoidably irrational."
  },
  {
    "theme": "moduluspiece",
    "themeLabel": "Modulus, Greatest-Integer & Piecewise Areas",
    "title": "The Logarithmic Staircase",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "greatest-integer",
      "logarithm",
      "composed-floor",
      "exponential-breakpoints",
      "area"
    ],
    "statement": "Evaluate $\\displaystyle\\int_{1}^{e^{2}}\\lfloor \\ln x\\rfloor\\,dx$.",
    "answer": "\\[\\boxed{e^{2}-e}\\]",
    "trap": "Approximating $\\lfloor\\ln x\\rfloor$ by $\\ln x$ and computing $\\int_1^{e^2}\\ln x\\,dx=e^2+1$, or splitting at integer values of $x$. The step function $\\lfloor\\ln x\\rfloor$ jumps where $\\ln x$ hits an integer, i.e. at $x=e,e^2$ — exponentially spaced, not at integer $x$. It equals $0$ on $[1,e)$ and $1$ on $[e,e^2)$.",
    "solutions": [
      {
        "name": "Split at exponential jump points",
        "steps": [
          "$\\lfloor\\ln x\\rfloor=k\\iff k\\le\\ln x<k+1\\iff e^k\\le x<e^{k+1}.$ On $[1,e^2]$ this gives value $0$ on $[1,e)$ and value $1$ on $[e,e^2).$",
          "$\\int_1^{e}0\\,dx=0.$",
          "$\\int_{e}^{e^2}1\\,dx=e^2-e.$",
          "Total $=\\boxed{e^{2}-e}.$"
        ]
      },
      {
        "name": "Layer-cake over the level sets",
        "steps": [
          "Since $\\lfloor\\ln x\\rfloor\\ge1$ only on $[e,e^2]$ and $\\ge2$ nowhere in $[1,e^2)$, $\\int_1^{e^2}\\lfloor\\ln x\\rfloor\\,dx=\\text{length}\\{x:\\lfloor\\ln x\\rfloor\\ge1\\}.$",
          "That set is $[e,e^2]$, of length $e^2-e.$",
          "Hence the integral is $\\boxed{e^{2}-e}.$"
        ]
      }
    ],
    "remark": "Insight: an inner increasing function stretches the breakpoints. For $\\lfloor\\ln x\\rfloor$ the steps live at $e^k$; reading them as integer $x$-values is the same composed-floor error as $\\lfloor x^2\\rfloor$, but disguised by the logarithm."
  },
  {
    "theme": "moduluspiece",
    "themeLabel": "Modulus, Greatest-Integer & Piecewise Areas",
    "title": "Floor of the Absolute, Not the Other Way",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "greatest-integer",
      "modulus",
      "order-of-operations",
      "even-symmetry",
      "area"
    ],
    "statement": "Evaluate $\\displaystyle\\int_{-2}^{2}\\lfloor |x|\\rfloor\\,dx$, and contrast it with the value one would get by integrating $|\\lfloor x\\rfloor|$ instead.",
    "answer": "\\[\\boxed{2}\\]",
    "trap": "Swapping $\\lfloor|x|\\rfloor$ for $|\\lfloor x\\rfloor|$. They disagree on every interval $(k,k+1)$ with $k$ negative: e.g. for $x\\in(-1,0)$, $|x|\\in(0,1)$ so $\\lfloor|x|\\rfloor=0$, whereas $\\lfloor x\\rfloor=-1$ gives $|\\lfloor x\\rfloor|=1$. The two operations do not commute, and $|\\lfloor x\\rfloor|$ would give $4$, not $2$.",
    "solutions": [
      {
        "name": "Use even symmetry then step-sum",
        "steps": [
          "$\\lfloor|x|\\rfloor$ is even, so $\\int_{-2}^{2}\\lfloor|x|\\rfloor\\,dx=2\\int_0^2\\lfloor x\\rfloor\\,dx.$",
          "$\\int_0^2\\lfloor x\\rfloor\\,dx=0\\cdot1+1\\cdot1=1$ (value $0$ on $[0,1)$, value $1$ on $[1,2)$).",
          "Therefore $2\\cdot1=\\boxed{2}.$"
        ]
      },
      {
        "name": "Direct four-cell evaluation",
        "steps": [
          "On $[-2,-1)$, $|x|\\in(1,2]$ so $\\lfloor|x|\\rfloor=1$; on $[-1,0)$, $|x|\\in(0,1]$ so $\\lfloor|x|\\rfloor=0$; on $[0,1)$ it is $0$; on $[1,2)$ it is $1.$",
          "Contributions: $1\\cdot1+0\\cdot1+0\\cdot1+1\\cdot1=2.$",
          "For contrast, $|\\lfloor x\\rfloor|$ gives $2,1,0,1$ on those cells, summing to $4$ — different, confirming non-commutativity.",
          "Hence the required value is $\\boxed{2}.$"
        ]
      }
    ],
    "remark": "Insight: $\\lfloor\\,\\cdot\\,\\rfloor$ and $|\\,\\cdot\\,|$ do not commute. On the negative side, taking the absolute value first 'folds' the staircase symmetrically, whereas flooring first leaves a steeper negative tread."
  },
  {
    "theme": "moduluspiece",
    "themeLabel": "Modulus, Greatest-Integer & Piecewise Areas",
    "title": "When Staircase Meets Sawtooth",
    "difficulty": 5,
    "task": "Find all",
    "tags": [
      "greatest-integer",
      "fractional-part",
      "parameter",
      "quadratic-in-fraction",
      "equal-areas"
    ],
    "statement": "Find all real $a>0$ for which $\\displaystyle\\int_{0}^{a}\\lfloor x\\rfloor\\,dx=\\int_{0}^{a}\\{x\\}\\,dx$, where $\\{x\\}=x-\\lfloor x\\rfloor$.",
    "answer": "\\[\\boxed{a=2}\\]",
    "trap": "Assuming the equality holds at every integer $a$ (or solving only the 'full-cells' part and ignoring the partial last cell). At $a=1$, for instance, $\\int_0^1\\lfloor x\\rfloor=0$ but $\\int_0^1\\{x\\}=\\tfrac12$, so the integrals are unequal. Because $\\lfloor x\\rfloor+\\{x\\}=x$, the condition is equivalent to each integral equalling $\\tfrac{a^2}{4}$; the partial last cell makes the fractional-part integral a quadratic in the leftover $\\{a\\}$, so the breakpoint must be tracked, not glossed over.",
    "solutions": [
      {
        "name": "Reduce via $\\lfloor x\\rfloor+\\{x\\}=x$",
        "steps": [
          "Adding the two integrals: $\\int_0^a\\lfloor x\\rfloor\\,dx+\\int_0^a\\{x\\}\\,dx=\\int_0^a x\\,dx=\\tfrac{a^2}{2}.$ Equality of the two means each equals $\\tfrac{a^2}{4}.$",
          "Write $a=n+f$ with $n=\\lfloor a\\rfloor$, $f=\\{a\\}\\in[0,1)$. Then $\\int_0^a\\{x\\}\\,dx=n\\cdot\\tfrac12+\\tfrac{f^2}{2}$ ($n$ full teeth, each of area $\\tfrac12$, plus a partial tooth of area $\\tfrac{f^2}{2}$).",
          "Set $\\tfrac{n}{2}+\\tfrac{f^2}{2}=\\tfrac{(n+f)^2}{4}\\Rightarrow 2n+2f^2=n^2+2nf+f^2\\Rightarrow f^2-2nf+(2n-n^2)=0.$",
          "Solving, $f=n\\pm\\sqrt{2n^2-2n}$. The $+$ branch gives $f\\ge n\\ge 1$ for $n\\ge1$, never in $[0,1)$; the $-$ branch $f=n-\\sqrt{2n(n-1)}$ equals $1$ at $n=1$ and is negative for $n\\ge3$. The constraint $0\\le f<1$ thus forces $n=2,\\,f=0$ (and $n=0$ yields only $a=0$). Hence $\\boxed{a=2}.$"
        ]
      },
      {
        "name": "Monotone-difference / sign argument",
        "steps": [
          "Let $D(a)=\\int_0^a\\{x\\}\\,dx-\\int_0^a\\lfloor x\\rfloor\\,dx=2\\int_0^a\\{x\\}\\,dx-\\tfrac{a^2}{2}.$",
          "For $0<a<2$, the staircase $\\lfloor x\\rfloor$ is $0$ on most of $[0,a]$ while $\\{x\\}>0$, so $D(a)>0$ (e.g. $D(1)=\\tfrac12$).",
          "At $a=2$, $\\int_0^2\\{x\\}\\,dx=1$ and $\\int_0^2\\lfloor x\\rfloor\\,dx=1$, so $D(2)=0$; for $a>2$ the growing staircase dominates and $D(a)<0$ (e.g. $D(3)=-\\tfrac32$).",
          "Differentiating, $D'(a)=2\\{a\\}-a<0$ for all $a>2$ (since $\\{a\\}<1<\\tfrac a2$), so once $D$ turns negative it stays negative; being continuous, $D$ crosses zero only once. The unique positive root is $\\boxed{a=2}.$"
        ]
      }
    ],
    "remark": "Insight: the elegant constraint is that the sawtooth area and the staircase area each be exactly a quarter of the triangle $\\tfrac{a^2}{2}$. The partial last tooth turns the balance into a quadratic in $\\{a\\}$, and it tips to equality at precisely $a=2$ and nowhere else."
  },
  {
    "theme": "moduluspiece",
    "themeLabel": "Modulus, Greatest-Integer & Piecewise Areas",
    "title": "Tent Over a Bowl",
    "difficulty": 4,
    "task": "Determine",
    "tags": [
      "modulus",
      "parabola",
      "kink-at-vertex",
      "enclosed-area",
      "piecewise"
    ],
    "statement": "Determine the area of the region enclosed between the curves $y=2-|x-1|$ and $y=(x-1)^{2}$.",
    "answer": "\\[\\boxed{\\dfrac{7}{3}}\\]",
    "trap": "Treating the tent $y=2-|x-1|$ as a single straight line across the whole region and integrating $\\bigl((2-(x-1))-(x-1)^2\\bigr)$ from $x=0$ to $x=2$ — which gives $\\tfrac{10}{3}$. The tent has a kink at its peak $x=1$; the upper boundary is $1+x$ on $[0,1]$ but $3-x$ on $[1,2]$, so the integral must split there. Dropping the modulus (or forgetting the split) inflates the answer.",
    "solutions": [
      {
        "name": "Shift to the axis of symmetry and split at the kink",
        "steps": [
          "Let $t=x-1$. The curves become $y=2-|t|$ (tent) and $y=t^2$ (bowl), both even in $t$. Intersections: $2-|t|=t^2\\Rightarrow t^2+|t|-2=0\\Rightarrow(|t|+2)(|t|-1)=0\\Rightarrow|t|=1$, so $t=\\pm1$ (i.e. $x=0,2$).",
          "On $[-1,1]$ the tent lies above the bowl (at $t=0$: $2>0$), and by the even symmetry Area $=2\\displaystyle\\int_0^1\\bigl((2-t)-t^2\\bigr)\\,dt.$",
          "$\\displaystyle\\int_0^1(2-t-t^2)\\,dt=\\left[2t-\\tfrac{t^2}{2}-\\tfrac{t^3}{3}\\right]_0^1=2-\\tfrac12-\\tfrac13=\\tfrac76.$",
          "Area $=2\\cdot\\tfrac76=\\boxed{\\dfrac73}.$"
        ]
      },
      {
        "name": "Two-piece integral in $x$",
        "steps": [
          "Upper boundary: $2-|x-1|=1+x$ on $[0,1]$ and $3-x$ on $[1,2]$; lower boundary $(x-1)^2$ throughout.",
          "$\\displaystyle\\int_0^1\\bigl((1+x)-(x-1)^2\\bigr)dx=\\int_0^1\\bigl(1+x-(x^2-2x+1)\\bigr)dx=\\int_0^1(3x-x^2)\\,dx=\\tfrac32-\\tfrac13=\\tfrac76.$",
          "$\\displaystyle\\int_1^2\\bigl((3-x)-(x-1)^2\\bigr)dx$: the substitution $u=2-x$ maps it onto the previous integral, giving $\\tfrac76$ again (direct computation confirms it).",
          "Sum: $\\tfrac76+\\tfrac76=\\boxed{\\dfrac73}.$"
        ]
      }
    ],
    "remark": "Insight: the modulus puts the kink precisely at the parabola's vertex — the most tempting place to forget to split, since the two arcs of the tent meet smoothly to the eye right where the bowl bottoms out. Exploiting the shared axis of symmetry $x=1$ both halves the work and exposes the kink that the single-line trap silently ignores."
  },
  {
    "theme": "variableparam",
    "themeLabel": "Variable Boundaries & Parameters",
    "title": "The Bisecting Curtain",
    "difficulty": 3,
    "task": "Determine",
    "tags": [
      "area",
      "bisection",
      "moving boundary",
      "power rule"
    ],
    "statement": "A region $R$ is bounded by the curve $y=\\sqrt{x}$, the $x$-axis, and the vertical line $x=4$. A vertical line $x=c$ (with $0<c<4$) divides $R$ into two pieces of equal area. Determine the value of $c$.",
    "answer": "$c = 2\\sqrt[3]{2}$",
    "trap": "Assuming the line that bisects the *base* (i.e. $c=2$) also bisects the *area*. Since the height grows like $\\sqrt{x}$, area accumulates faster on the right, so the area-bisector sits left of the midpoint; equal areas force $c^{3/2}=4$, not $c=2$.",
    "solutions": [
      {
        "name": "FTC on the left piece",
        "steps": [
          "Total area $=\\int_0^4\\sqrt{x}\\,dx=\\tfrac23 x^{3/2}\\big|_0^4=\\tfrac{16}{3}$.",
          "Left piece $=\\int_0^c\\sqrt{x}\\,dx=\\tfrac23 c^{3/2}$; set equal to half the total: $\\tfrac23 c^{3/2}=\\tfrac{8}{3}$.",
          "So $c^{3/2}=4\\Rightarrow c=4^{2/3}=2\\sqrt[3]{2}$, giving $\\boxed{c=2\\sqrt[3]{2}}$."
        ]
      },
      {
        "name": "Self-similarity of $\\sqrt{x}$",
        "steps": [
          "The area under $\\sqrt{x}$ from $0$ to $b$ scales as $b^{3/2}$, so the area ratio of $[0,c]$ to $[0,4]$ is $(c/4)^{3/2}$.",
          "Demanding this ratio equal $\\tfrac12$ gives $(c/4)^{3/2}=\\tfrac12$, i.e. $c/4=2^{-2/3}$.",
          "Hence $c=4\\cdot 2^{-2/3}=2^{2}\\cdot 2^{-2/3}=2^{4/3}=2\\sqrt[3]{2}$, so $\\boxed{c=2\\sqrt[3]{2}}$."
        ]
      }
    ],
    "remark": "Insight: under $y=x^{p}$ the area-bisector is $c=b\\,2^{-1/(p+1)}$, never the midpoint unless $p\\to\\infty$. The accumulation-rate of area, not the width, decides the cut."
  },
  {
    "theme": "variableparam",
    "themeLabel": "Variable Boundaries & Parameters",
    "title": "The Waterline of a Dome",
    "difficulty": 3,
    "task": "Determine",
    "tags": [
      "parabola",
      "horizontal cut",
      "area",
      "leibniz"
    ],
    "statement": "The region $R$ under the parabola $y=4-x^{2}$ and above the $x$-axis (so $-2\\le x\\le 2$) is cut by the horizontal line $y=t$ with $0<t<4$. The part of $R$ lying *above* the line has exactly half the area of $R$. Determine $t$.",
    "answer": "$t = 4-2\\sqrt[3]{2}$",
    "trap": "Setting $t=2$ because it is the midpoint of the height range $[0,4]$. The parabolic cap above $y=t$ has area $\\tfrac43(4-t)^{3/2}$, which is *not* linear in $t$, so the area-halving height is far below the mid-height.",
    "solutions": [
      {
        "name": "Cap area as a $3/2$-power",
        "steps": [
          "The line $y=t$ meets the parabola where $4-x^{2}=t$, i.e. $x=\\pm\\sqrt{4-t}$.",
          "Area above the line $=\\int_{-\\sqrt{4-t}}^{\\sqrt{4-t}}\\big((4-x^{2})-t\\big)\\,dx=\\tfrac43(4-t)^{3/2}$.",
          "Total area $=\\int_{-2}^{2}(4-x^{2})\\,dx=\\tfrac{32}{3}$; set $\\tfrac43(4-t)^{3/2}=\\tfrac{16}{3}$, so $(4-t)^{3/2}=4$.",
          "Thus $4-t=4^{2/3}=2\\sqrt[3]{2}$, giving $\\boxed{t=4-2\\sqrt[3]{2}}$."
        ]
      },
      {
        "name": "Scaling of the upper cap",
        "steps": [
          "Shifting $y$ by $-t$, the cap above $y=t$ is congruent to the full region under $y=(4-t)-x^{2}$, whose area scales as $(4-t)^{3/2}$.",
          "The full region has $4-t$ replaced by $4$, area $\\propto 4^{3/2}$; the ratio cap:total $=\\big((4-t)/4\\big)^{3/2}$.",
          "Halving: $\\big((4-t)/4\\big)^{3/2}=\\tfrac12\\Rightarrow (4-t)/4=2^{-2/3}\\Rightarrow 4-t=2^{4/3}=2\\sqrt[3]{2}$.",
          "Hence $\\boxed{t=4-2\\sqrt[3]{2}}$."
        ]
      }
    ],
    "remark": "Insight: every horizontal slice of a parabolic cap is itself a scaled parabolic cap, so areas obey a $3/2$-power law. The mid-height cut leaves the upper cap only $2^{-3/2}\\approx 35\\%$ of the area."
  },
  {
    "theme": "variableparam",
    "themeLabel": "Variable Boundaries & Parameters",
    "title": "When Both Ends Run",
    "difficulty": 4,
    "task": "Find all",
    "tags": [
      "leibniz rule",
      "moving limits",
      "extrema",
      "logarithm"
    ],
    "statement": "For $a>0$ define $\\displaystyle A(a)=\\int_{a}^{a^{2}}\\ln x\\,dx.$ Find all critical points of $A$ on $(0,\\infty)$ and classify each as a local maximum or minimum.",
    "answer": "$\\left[\\begin{array}{l}a=\\tfrac14:\\ \\text{local max},\\ A=\\tfrac{3}{16}+\\tfrac14\\ln 2\\\\\\  a=1:\\ \\text{local min},\\ A=0\\end{array}\\right]$",
    "trap": "Differentiating as if only the integrand mattered, or forgetting the chain-rule factors on the moving limits: the correct expression is $A'(a)=\\ln(a^{2})\\cdot 2a-\\ln(a)\\cdot 1$. Dropping the $2a$ from the upper limit (or the lower-limit term) destroys the factor $(4a-1)$ and loses the critical point $a=\\tfrac14$.",
    "solutions": [
      {
        "name": "Leibniz differentiation",
        "steps": [
          "By the Leibniz rule, $A'(a)=\\ln(a^{2})\\dfrac{d}{da}(a^{2})-\\ln(a)\\dfrac{d}{da}(a)=2\\ln(a)\\cdot 2a-\\ln a=(4a-1)\\ln a$.",
          "Set $A'(a)=0$: either $\\ln a=0\\Rightarrow a=1$, or $4a-1=0\\Rightarrow a=\\tfrac14$.",
          "Second derivative test: $A''(a)=4\\ln a+4-\\tfrac1a$; then $A''(\\tfrac14)=4\\ln\\tfrac14+4-4=-8\\ln 2<0$ (local max) and $A''(1)=0+4-1=3>0$ (local min).",
          "Evaluating $A(a)=\\big[x\\ln x-x\\big]_{a}^{a^{2}}$ gives $A(1)=0$ and $A(\\tfrac14)=\\tfrac{3}{16}+\\tfrac14\\ln 2$, so $\\boxed{a=\\tfrac14\\ (\\max),\\ a=1\\ (\\min)}$."
        ]
      },
      {
        "name": "Closed form then calculus",
        "steps": [
          "Antiderivative: $A(a)=\\big[x\\ln x-x\\big]_{a}^{a^{2}}=\\big(2a^{2}\\ln a-a^{2}\\big)-\\big(a\\ln a-a\\big)$.",
          "Differentiate directly: $A'(a)=(4a\\ln a+2a-2a)-(\\ln a+1-1)=4a\\ln a-\\ln a=(4a-1)\\ln a$, matching the Leibniz result.",
          "Roots $a=\\tfrac14,1$; a sign chart of $(4a-1)\\ln a$ shows $A'$ goes $+,-,+$ across them, so $a=\\tfrac14$ is a local max and $a=1$ a local min.",
          "Thus $\\boxed{a=\\tfrac14\\ (\\max,\\ A=\\tfrac{3}{16}+\\tfrac14\\ln2),\\ a=1\\ (\\min,\\ A=0)}$."
        ]
      }
    ],
    "remark": "Insight: with two moving limits the derivative carries two chain-rule weights, here $2a$ and $1$. Their imbalance manufactures the extra critical point $a=\\tfrac14$ that pure integrand-thinking never sees."
  },
  {
    "theme": "variableparam",
    "themeLabel": "Variable Boundaries & Parameters",
    "title": "The Tangent's Best Triangle",
    "difficulty": 4,
    "task": "Determine",
    "tags": [
      "tangent line",
      "moving point",
      "area extremum",
      "exponential"
    ],
    "statement": "At the point $\\big(t,\\,e^{-t}\\big)$ with $t\\ge 0$, the tangent line to $y=e^{-x}$ meets the positive $x$- and $y$-axes, forming a right triangle with the axes. Determine the value of $t$ for which this triangle has the largest possible area, and state that area.",
    "answer": "$t=1,\\quad \\text{area}=\\dfrac{2}{e}$",
    "trap": "Assuming \"extremize\" means minimize and chasing a vanishing triangle, or differentiating the intercepts without accounting for both moving intercepts. The area $\\tfrac12(t+1)^{2}e^{-t}$ has its only interior critical point at $t=1$, and the second-derivative (or sign) test shows it is a maximum, not a minimum.",
    "solutions": [
      {
        "name": "Intercepts then optimize",
        "steps": [
          "The tangent at $(t,e^{-t})$ has slope $-e^{-t}$: $y-e^{-t}=-e^{-t}(x-t)$.",
          "$x$-intercept $(y=0)$: $x=t+1$; $y$-intercept $(x=0)$: $y=e^{-t}(t+1)$. Both depend on the moving point.",
          "Area $S(t)=\\tfrac12(t+1)\\cdot e^{-t}(t+1)=\\tfrac12(t+1)^{2}e^{-t}$.",
          "$S'(t)=\\tfrac12 e^{-t}\\big(2(t+1)-(t+1)^{2}\\big)=\\tfrac12(t+1)(1-t)e^{-t}$, zero at $t=1$ (for $t\\ge0$); $S'$ changes $+\\to-$, a maximum, with $S(1)=\\tfrac12\\cdot4\\cdot e^{-1}=\\boxed{\\dfrac{2}{e}}$ at $t=1$."
        ]
      },
      {
        "name": "Substitution $u=t+1$",
        "steps": [
          "Write $S=\\tfrac12 u^{2}e^{-(u-1)}=\\tfrac{e}{2}u^{2}e^{-u}$ with $u=t+1\\ge1$.",
          "$\\dfrac{d}{du}\\big(u^{2}e^{-u}\\big)=u(2-u)e^{-u}=0$ gives $u=2$ (interior), i.e. $t=1$.",
          "Since $u^{2}e^{-u}$ rises then falls, $u=2$ is the maximum; $S=\\tfrac{e}{2}\\cdot4e^{-2}=\\dfrac{2}{e}$.",
          "Therefore $\\boxed{t=1,\\ \\text{area}=2/e}$."
        ]
      }
    ],
    "remark": "Insight: both axis-intercepts slide as the tangent point moves, so the area is a genuine function of the boundary parameter. The product of two moving lengths peaks where $u^2e^{-u}$ does, at $u=2$."
  },
  {
    "theme": "variableparam",
    "themeLabel": "Variable Boundaries & Parameters",
    "title": "The Sweep That Hides Its Own Limit",
    "difficulty": 5,
    "task": "Find all",
    "tags": [
      "leibniz rule",
      "parameter in integrand",
      "swept area",
      "trigonometric"
    ],
    "statement": "For $t>0$ a region is swept out with (signed) area $\\displaystyle A(t)=\\int_{0}^{t}(t-x)\\sin x\\,dx.$ Find all $t\\in(0,2\\pi)$ at which the instantaneous rate of growth $A'(t)$ is greatest, and the value of that greatest rate.",
    "answer": "$t=\\pi,\\qquad A'(\\pi)=2$",
    "trap": "Because the upper limit's integrand $(t-x)\\sin x$ vanishes at $x=t$, the Leibniz boundary term is $0$ — but the parameter $t$ also sits \\emph{inside} the integrand. Treating $t$ as constant inside (so that $A'(t)=0$) is the fatal error; the real derivative comes entirely from differentiating the integrand, giving $A'(t)=\\int_0^t\\sin x\\,dx=1-\\cos t$.",
    "solutions": [
      {
        "name": "Leibniz with both effects",
        "steps": [
          "By the Leibniz rule, $A'(t)=\\underbrace{(t-t)\\sin t}_{0}\\cdot 1+\\int_{0}^{t}\\frac{\\partial}{\\partial t}\\big[(t-x)\\sin x\\big]\\,dx=\\int_{0}^{t}\\sin x\\,dx=1-\\cos t.$",
          "So $A'(t)=1-\\cos t$, which is maximal exactly when $\\cos t=-1$, i.e. $t=\\pi$ on $(0,2\\pi)$.",
          "The greatest rate is $A'(\\pi)=1-(-1)=2$, giving $\\boxed{t=\\pi,\\ A'(\\pi)=2}.$"
        ]
      },
      {
        "name": "Closed form first",
        "steps": [
          "Split off the parameter: $A(t)=t\\!\\int_0^t\\!\\sin x\\,dx-\\!\\int_0^t\\! x\\sin x\\,dx=t(1-\\cos t)-(\\sin t-t\\cos t)=t-\\sin t.$",
          "Then $A'(t)=1-\\cos t$ and $A''(t)=\\sin t$; setting $A''(t)=0$ on $(0,2\\pi)$ gives $t=\\pi$, where $A'''(\\pi)=\\cos\\pi=-1<0$, confirming a strict maximum of $A'$.",
          "Hence the maximal rate is $A'(\\pi)=2$, so $\\boxed{t=\\pi,\\ A'(\\pi)=2}.$"
        ]
      },
      {
        "name": "Reduction to a known area",
        "steps": [
          "Differentiating the swept area once, $A'(t)=\\int_0^t\\sin x\\,dx$, which is just the accumulated area under $y=\\sin x$ from $0$ to $t$, equal to $1-\\cos t.$",
          "Equivalently $A(t)=\\int_0^t(1-\\cos x)\\,dx=t-\\sin t$, recovering the same $A'(t)=1-\\cos t.$",
          "Since $0\\le 1-\\cos t\\le 2$ with the upper bound attained only at $\\cos t=-1$, its maximum on $(0,2\\pi)$ is at $t=\\pi$ with value $2$, so $\\boxed{t=\\pi,\\ A'(\\pi)=2}.$"
        ]
      }
    ],
    "remark": "Insight: the cancelling boundary term is the whole trap. The parameter lives in two places at once — in the limit and in the integrand; here the limit contributes nothing and the integrand contributes everything, the exact reverse of the naive guess. The clean closed form $A(t)=t-\\sin t$ has derivative $1-\\cos t$, bounded above by $2$ and pinned at $t=\\pi$."
  },
  {
    "theme": "variableparam",
    "themeLabel": "Variable Boundaries & Parameters",
    "title": "Mirror Curves and the Even Split",
    "difficulty": 4,
    "task": "Find all",
    "tags": [
      "parameter as exponent",
      "area between curves",
      "reflection",
      "inverse functions"
    ],
    "statement": "For a real parameter $a>1$ let $R_a$ be the region of the unit square bounded by $y=x^{1/a}$ and $y=x^{a}$ for $0\\le x\\le 1$. Find all values of $a$ for which the area of $R_a$ equals $\\tfrac12$.",
    "answer": "$a=3$",
    "trap": "Believing the area can never reach $\\tfrac12$ \"because the curves only fill the square as $a\\to\\infty$,\" or mis-ordering the curves. On $(0,1)$ with $a>1$ one has $x^{1/a}>x^{a}$, and the lens area is exactly $\\dfrac{a-1}{a+1}$, which hits $\\tfrac12$ at a finite $a$.",
    "solutions": [
      {
        "name": "Direct integration",
        "steps": [
          "On $(0,1)$, $x^{1/a}\\ge x^{a}$ for $a>1$, so area $=\\int_0^1\\big(x^{1/a}-x^{a}\\big)\\,dx=\\dfrac{a}{a+1}-\\dfrac{1}{a+1}=\\dfrac{a-1}{a+1}$.",
          "Set $\\dfrac{a-1}{a+1}=\\dfrac12\\Rightarrow 2(a-1)=a+1\\Rightarrow a=3$, hence $\\boxed{a=3}$."
        ]
      },
      {
        "name": "Reflection symmetry",
        "steps": [
          "The curves $y=x^{1/a}$ and $y=x^{a}$ are reflections across $y=x$, so each contributes equally; the area between them is twice the area between $y=x^{1/a}$ and $y=x$.",
          "Area between $x^{1/a}$ and $x$ on $[0,1]$ is $\\dfrac{a}{a+1}-\\dfrac12=\\dfrac{a-1}{2(a+1)}$; doubling gives $\\dfrac{a-1}{a+1}$.",
          "Equating to $\\tfrac12$ yields $a=3$, so $\\boxed{a=3}$."
        ]
      }
    ],
    "remark": "Insight: the parameter is the exponent itself. The clean form $\\frac{a-1}{a+1}$ rises monotonically from $0$ to $1$, so each target area in $(0,1)$ is met at exactly one $a$, here $a=3$."
  },
  {
    "theme": "variableparam",
    "themeLabel": "Variable Boundaries & Parameters",
    "title": "The Speeding Floodline",
    "difficulty": 4,
    "task": "Determine",
    "tags": [
      "related rates",
      "leibniz rule",
      "moving boundary",
      "exponential"
    ],
    "statement": "A vertical line sweeps rightward across the region under $y=e^{-x}$ for $x\\ge 0$; let its position be $x=s(\\tau)$ at time $\\tau$. The swept area to the left of the line increases at the constant rate $3$ square-units per second. Determine the speed $s'(\\tau)$ of the line at the instant when it has swept exactly half of the total infinite area.",
    "answer": "$s'(\\tau)=6$",
    "trap": "Confusing the constant area-rate with the line's position-rate. Since $\\frac{dA}{d\\tau}=e^{-s}\\,s'(\\tau)$, the slim profile at large $x$ forces the line to race ahead; equating $s'$ to the area-rate $3$ ignores the shrinking height $e^{-s}$.",
    "solutions": [
      {
        "name": "Chain rule through the boundary",
        "steps": [
          "Swept area $A=\\int_0^{s}e^{-x}\\,dx=1-e^{-s}$; total area $=\\int_0^\\infty e^{-x}\\,dx=1$, so \"half swept\" means $1-e^{-s}=\\tfrac12$, i.e. $e^{-s}=\\tfrac12$ (and $s=\\ln 2$).",
          "Differentiate in time: $\\dfrac{dA}{d\\tau}=e^{-s}\\,\\dfrac{ds}{d\\tau}=3$ — the integrand at the boundary times the boundary speed, by the FTC.",
          "At the half instant $e^{-s}=\\tfrac12$, so $\\tfrac12\\,s'(\\tau)=3\\Rightarrow \\boxed{s'(\\tau)=6}$."
        ]
      },
      {
        "name": "Invert the area function",
        "steps": [
          "From $A=1-e^{-s}$ we get $s=-\\ln(1-A)$, so $\\dfrac{ds}{dA}=\\dfrac{1}{1-A}$.",
          "At $A=\\tfrac12$, $\\dfrac{ds}{dA}=2$; by the chain rule $s'(\\tau)=\\dfrac{ds}{dA}\\cdot\\dfrac{dA}{d\\tau}=2\\cdot 3=6$.",
          "Hence $\\boxed{s'(\\tau)=6}$."
        ]
      }
    ],
    "remark": "Insight: the FTC says the area's time-derivative is the integrand at the boundary times the boundary's speed. The local height $e^{-s}$ is the gear ratio between area-rate and line-rate, so as the curve thins out the line must accelerate to keep the area growing at a constant pace."
  },
  {
    "theme": "variableparam",
    "themeLabel": "Variable Boundaries & Parameters",
    "title": "The Sliding Window",
    "difficulty": 4,
    "task": "Determine",
    "tags": [
      "sliding interval",
      "both limits move",
      "ftc",
      "minimization"
    ],
    "statement": "For $t\\in\\mathbb{R}$ define the area-type function $\\displaystyle A(t)=\\int_{t}^{t+1}\\big(x^{2}-x\\big)\\,dx,$ the integral over a unit-width window starting at $t$. Determine the value of $t$ that minimizes $A(t)$ and the minimum value.",
    "answer": "$t=0,\\qquad A_{\\min}=-\\dfrac16$",
    "trap": "Setting the *integrand* $x^{2}-x$ to zero (giving $x=0$ or $1$) and reading off \"$t=0$ or $1$\" as if minimizing the integrand minimized the integral. The correct rule is FTC on *both* moving limits: $A'(t)=f(t+1)-f(t)$, which equals $2t$, vanishing only at $t=0$. The decoy $t=1$ in fact gives $A(1)=\\tfrac56$, the opposite of a minimum.",
    "solutions": [
      {
        "name": "FTC on a sliding window",
        "steps": [
          "Both limits depend on $t$, so by the Leibniz/FTC rule $A'(t)=f(t+1)\\cdot 1-f(t)\\cdot 1$ where $f(x)=x^{2}-x$.",
          "$A'(t)=\\big[(t+1)^{2}-(t+1)\\big]-\\big[t^{2}-t\\big]=\\big[t^{2}+t\\big]-\\big[t^{2}-t\\big]=2t$.",
          "Thus $A'(t)=0\\Rightarrow t=0$, and $A''(t)=2>0$, confirming a minimum.",
          "Evaluate $A(0)=\\int_0^1(x^{2}-x)\\,dx=\\tfrac13-\\tfrac12=-\\tfrac16$, so $\\boxed{t=0,\\ A_{\\min}=-\\tfrac16}$."
        ]
      },
      {
        "name": "Closed form",
        "steps": [
          "Antiderivative $F(x)=\\tfrac{x^{3}}{3}-\\tfrac{x^{2}}{2}$ gives $A(t)=F(t+1)-F(t)$.",
          "Expanding, $A(t)=t^{2}-\\tfrac16$ (a clean upward parabola in $t$), whose vertex is at $t=0$.",
          "Since the parabola opens upward, $t=0$ is the unique global minimizer and the minimum value is $A(0)=-\\tfrac16$, so $\\boxed{t=0,\\ A_{\\min}=-\\tfrac16}$."
        ]
      }
    ],
    "remark": "Insight: for a fixed-width window $A'(t)=f(t+1)-f(t)$ depends only on the *endpoint difference* of $f$, never on the interior. The extremum sits where the entering and leaving heights balance, not where the integrand vanishes."
  },
  {
    "theme": "variableparam",
    "themeLabel": "Variable Boundaries & Parameters",
    "title": "The Moment's Unit Rate",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "leibniz rule",
      "moment integral",
      "logarithm",
      "rate condition"
    ],
    "statement": "For $t>0$ define $\\displaystyle A(t)=\\int_{0}^{t}\\frac{t-x}{1+x}\\,dx.$ Determine the value of $t$ at which the rate of change $A'(t)$ first equals $1$.",
    "answer": "$t=e-1$",
    "trap": "Differentiating only the upper limit (which gives the boundary term $\\frac{t-t}{1+t}=0$) and concluding $A'(t)=0$, OR pulling $t$ out as a constant. The parameter $t$ also sits inside the integrand; the genuine derivative is $A'(t)=\\int_0^t\\frac{1}{1+x}\\,dx=\\ln(1+t)$.",
    "solutions": [
      {
        "name": "Leibniz on the moment",
        "steps": [
          "The parameter $t$ appears both in the upper limit and inside the integrand, so Leibniz gives $A'(t)=\\dfrac{t-t}{1+t}\\cdot 1+\\int_{0}^{t}\\dfrac{\\partial}{\\partial t}\\!\\left(\\dfrac{t-x}{1+x}\\right)dx=0+\\int_{0}^{t}\\dfrac{1}{1+x}\\,dx=\\ln(1+t).$",
          "Set $A'(t)=1$: $\\ln(1+t)=1\\Rightarrow 1+t=e\\Rightarrow \\boxed{t=e-1}.$ Since $\\ln(1+t)$ is strictly increasing on $t>0$, this is the first (and only) such value."
        ]
      },
      {
        "name": "Reduce to an iterated integral",
        "steps": [
          "Write the weight as an inner integral, $\\dfrac{t-x}{1+x}=\\int_x^t\\dfrac{du}{1+x}$, and swap the order of integration over the region $0\\le x\\le u\\le t$: $A(t)=\\int_0^t\\!\\!\\int_0^u\\frac{dx}{1+x}\\,du=\\int_0^t\\ln(1+u)\\,du.$",
          "By the Fundamental Theorem of Calculus, $A'(t)=\\ln(1+t)$ directly.",
          "Solving $\\ln(1+t)=1$ gives $\\boxed{t=e-1}.$"
        ]
      },
      {
        "name": "Closed form, then differentiate",
        "steps": [
          "Split the integral: $A(t)=t\\!\\int_0^t\\!\\frac{dx}{1+x}-\\int_0^t\\!\\frac{x}{1+x}\\,dx=t\\ln(1+t)-\\big(t-\\ln(1+t)\\big)=(1+t)\\ln(1+t)-t.$",
          "Differentiate: $A'(t)=\\ln(1+t)+(1+t)\\cdot\\frac{1}{1+t}-1=\\ln(1+t)+1-1=\\ln(1+t).$",
          "Set equal to $1$: $\\ln(1+t)=1$, so $\\boxed{t=e-1}.$"
        ]
      }
    ],
    "remark": "Insight: a moment integral $\\int_0^t(t-x)\\,g(x)\\,dx$ has the magical property $A'(t)=\\int_0^t g$ — the boundary term self-destructs and one differentiation simply 'undoes' the weighting $(t-x)$. Here $g(x)=\\frac{1}{1+x}$, so $A'(t)=\\ln(1+t)$, forcing $t=e-1$."
  },
  {
    "theme": "variableparam",
    "themeLabel": "Variable Boundaries & Parameters",
    "title": "The Cap Whose Limits Lie",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "leibniz rule",
      "vanishing boundary term",
      "parameter in integrand",
      "rate of area"
    ],
    "statement": "For $c>\\sqrt{3}$ let $A(c)$ be the area of the region enclosed between the parabola $y=c^{2}-x^{2}$ and the horizontal line $y=3$. Determine the value of $c$ at which the area grows at the rate $\\dfrac{dA}{dc}=8$.",
    "answer": "$c=2$",
    "trap": "Either forgetting that the intersection limits $x=\\pm\\sqrt{c^{2}-3}$ move with $c$ (so one must check the Leibniz boundary terms), or — having remembered them — wrongly assuming those boundary terms dominate. In fact the integrand $c^{2}-x^{2}-3$ is exactly $0$ at $x=\\pm\\sqrt{c^{2}-3}$, so the boundary terms vanish and the entire derivative comes from $\\partial_c$ of the integrand.",
    "solutions": [
      {
        "name": "Leibniz with a vanishing boundary",
        "steps": [
          "The curves meet where $c^{2}-x^{2}=3$, i.e. $x=\\pm w$ with $w=\\sqrt{c^{2}-3}$, so $A(c)=\\int_{-w}^{w}\\big(c^{2}-x^{2}-3\\big)\\,dx$.",
          "Leibniz: $A'(c)=\\big[(c^{2}-w^{2}-3)\\big]\\,w'(c)\\cdot 2_{\\,(\\text{both ends})}+\\int_{-w}^{w}2c\\,dx$. The bracket is $c^{2}-(c^{2}-3)-3=0$, so the boundary terms drop out.",
          "Thus $A'(c)=\\int_{-w}^{w}2c\\,dx=2c\\cdot 2w=4c\\sqrt{c^{2}-3}$.",
          "Set $4c\\sqrt{c^{2}-3}=8\\Rightarrow c\\sqrt{c^{2}-3}=2\\Rightarrow c^{2}(c^{2}-3)=4$; with $u=c^{2}$, $u^{2}-3u-4=0\\Rightarrow u=4$, so $\\boxed{c=2}$."
        ]
      },
      {
        "name": "Closed form then differentiate",
        "steps": [
          "Compute $A(c)=\\int_{-w}^{w}\\big((c^{2}-3)-x^{2}\\big)\\,dx=\\tfrac43(c^{2}-3)^{3/2}$.",
          "Differentiate: $A'(c)=\\tfrac43\\cdot\\tfrac32(c^{2}-3)^{1/2}\\cdot 2c=4c\\sqrt{c^{2}-3}$, matching the Leibniz computation.",
          "Solve $4c\\sqrt{c^{2}-3}=8$: square to get $c^{2}(c^{2}-3)=4$, factoring $(c^{2}-4)(c^{2}+1)=0$, so $c^{2}=4$ and $\\boxed{c=2}$."
        ]
      }
    ],
    "remark": "Insight: the chapter's whole moral in one problem — you must write down the Leibniz boundary terms to discover they vanish (integrand zero at the moving ends), leaving the parameter-in-the-integrand piece as the sole source of $A'(c)$."
  },
  {
    "theme": "minimizearea",
    "themeLabel": "Optimising an Area",
    "title": "The Most Frugal Cut",
    "difficulty": 3,
    "task": "Determine",
    "tags": [
      "intercept triangle",
      "fixed point",
      "am-gm",
      "first quadrant"
    ],
    "statement": "A straight line of negative slope passes through the fixed point $P=(2,3)$ and meets the positive $x$-axis at $A$ and the positive $y$-axis at $B$. Determine the least possible area of triangle $OAB$, where $O$ is the origin.",
    "answer": "$\\boxed{12}$",
    "trap": "Minimising the sum of intercepts $OA+OB$ (the line's \"size\") instead of the area $\\tfrac12\\,OA\\cdot OB$: those two objectives have different optimal lines, so the intercept-sum optimum gives a strictly larger triangle (area $\\approx 12.12 > 12$).",
    "solutions": [
      {
        "name": "Intercept form + AM-GM",
        "steps": [
          "Write the line as $\\dfrac{x}{p}+\\dfrac{y}{q}=1$ with $p,q>0$; passing through $(2,3)$ gives $\\dfrac{2}{p}+\\dfrac{3}{q}=1$.",
          "Area $=\\tfrac12 pq$. By AM-GM, $1=\\dfrac{2}{p}+\\dfrac{3}{q}\\ge 2\\sqrt{\\dfrac{6}{pq}}$, so $pq\\ge 24$ and area $\\ge 12$.",
          "Equality when $\\dfrac{2}{p}=\\dfrac{3}{q}=\\tfrac12$, i.e. $p=4,\\ q=6$; the minimum area is $\\boxed{12}$."
        ]
      },
      {
        "name": "Single-variable calculus",
        "steps": [
          "From $\\dfrac{2}{p}+\\dfrac{3}{q}=1$ solve $q=\\dfrac{3p}{p-2}$ ($p>2$); area $S(p)=\\tfrac12 pq=\\dfrac{3p^2}{2(p-2)}$.",
          "$S'(p)=\\dfrac{3p(p-4)}{2(p-2)^2}=0\\Rightarrow p=4$, and $S'$ changes $-\\to+$ there, so it is a minimum.",
          "$p=4\\Rightarrow q=6\\Rightarrow S=\\tfrac12\\cdot4\\cdot6=\\boxed{12}$."
        ]
      }
    ],
    "remark": "Insight: for the minimum-area cut through a fixed interior point $(h,k)$, that point bisects the segment $AB$ ($p=2h,\\,q=2k$). The minimum area is then exactly $2hk$, independent of all else; here $2\\cdot2\\cdot3=12$."
  },
  {
    "theme": "minimizearea",
    "themeLabel": "Optimising an Area",
    "title": "The Thriftiest Tangent",
    "difficulty": 3,
    "task": "Determine",
    "tags": [
      "ellipse tangent",
      "intercept triangle",
      "parametrisation",
      "double angle"
    ],
    "statement": "A tangent is drawn to the ellipse $\\dfrac{x^2}{9}+\\dfrac{y^2}{4}=1$ at a point in the open first quadrant, cutting the positive $x$- and $y$-axes. Determine the minimum area of the triangle the tangent forms with the coordinate axes.",
    "answer": "\\[\\boxed{6}\\]",
    "trap": "Two seductive wrong turns. (1) Minimising the SUM of intercepts $\\dfrac{3}{\\cos t}+\\dfrac{2}{\\sin t}$ instead of their product — that is a different optimisation, and its critical point $\\tan^{3}t=\\tfrac{2}{3}$ does not give the smallest triangle. (2) Letting the point of tangency slide toward a vertex such as $(3,0)$ or $(0,2)$, hoping a thin triangle shrinks toward nothing — there one intercept runs off to $+\\infty$ and the area $\\dfrac{6}{\\sin 2t}$ DIVERGES rather than vanishing. The honest minimum sits at the interior balance $t=\\tfrac{\\pi}{4}$, not on the boundary and not at the sum-minimiser.",
    "solutions": [
      {
        "name": "Trigonometric parametrisation",
        "steps": [
          "Take the point of tangency $(3\\cos t,\\,2\\sin t)$ with $t\\in(0,\\tfrac{\\pi}{2})$; the tangent line is $\\dfrac{x\\cos t}{3}+\\dfrac{y\\sin t}{2}=1$.",
          "Its intercepts are $x=\\dfrac{3}{\\cos t}$ and $y=\\dfrac{2}{\\sin t}$, both positive on $(0,\\tfrac{\\pi}{2})$, so the area is $A=\\dfrac{1}{2}\\cdot\\dfrac{3}{\\cos t}\\cdot\\dfrac{2}{\\sin t}=\\dfrac{6}{2\\sin t\\cos t}=\\dfrac{6}{\\sin 2t}$.",
          "Since $0<\\sin 2t\\le 1$ with equality exactly at $2t=\\tfrac{\\pi}{2}$, i.e. $t=\\tfrac{\\pi}{4}$, the area is smallest there: $A_{\\min}=\\dfrac{6}{1}=\\boxed{6}$. Toward either vertex $\\sin 2t\\to 0^{+}$ and $A\\to+\\infty$, so the boundary is the worst case, not the best."
        ]
      },
      {
        "name": "AM-GM on intercepts",
        "steps": [
          "Write the intercepts as $p=\\dfrac{3}{\\cos t}$ and $q=\\dfrac{2}{\\sin t}$. Eliminating $t$ via $\\cos^{2}t+\\sin^{2}t=1$ gives the tangency constraint $\\dfrac{9}{p^{2}}+\\dfrac{4}{q^{2}}=1$ for every admissible tangent.",
          "By AM-GM, $1=\\dfrac{9}{p^{2}}+\\dfrac{4}{q^{2}}\\ge 2\\sqrt{\\dfrac{9}{p^{2}}\\cdot\\dfrac{4}{q^{2}}}=\\dfrac{2\\cdot 6}{pq}=\\dfrac{12}{pq}$, hence $pq\\ge 12$ and the area $A=\\tfrac12 pq\\ge 6$.",
          "Equality requires $\\dfrac{9}{p^{2}}=\\dfrac{4}{q^{2}}=\\tfrac12$, i.e. $p=3\\sqrt2,\\ q=2\\sqrt2$ (the point $t=\\tfrac{\\pi}{4}$). Thus the minimum area is exactly $\\boxed{6}$."
        ]
      }
    ],
    "remark": "Insight: for any axis-tangent to $\\dfrac{x^{2}}{a^{2}}+\\dfrac{y^{2}}{b^{2}}=1$ the intercept triangle has area $\\dfrac{ab}{\\sin 2t}$, so its minimum is always exactly $ab$ — the very same $ab$ hiding inside the ellipse's own area $\\pi ab$. Note also that minimising the triangle's area (the product $pq$) is a genuinely different problem from minimising the intercept sum ($p+q$); they share neither the optimal point nor the optimal value."
  },
  {
    "theme": "minimizearea",
    "themeLabel": "Optimising an Area",
    "title": "The Leanest Focal Slice",
    "difficulty": 4,
    "task": "Find",
    "tags": [
      "parabola",
      "focal chord",
      "area between curves",
      "latus rectum"
    ],
    "statement": "A focal chord of the parabola $y^2=4x$ cuts off a region bounded by the chord and the arc of the parabola. Over all focal chords (including the vertical one), find the minimum possible area of that region.",
    "answer": "\\[\\boxed{\\dfrac{8}{3}}\\]",
    "trap": "Minimising the chord's length instead of the bounded area. Length and area are different functionals; here both happen to be extremal at the latus rectum, so a length argument lands on the right chord for the wrong reason. The coincidence is forced purely by the focus lying on the axis of symmetry, and it dissolves the instant the fixed point is moved off that axis.",
    "solutions": [
      {
        "name": "Horizontal-strip integration",
        "steps": [
          "Every chord through the focus $(1,0)$ can be written $x=my+1$ (this captures the vertical chord at $m=0$). It meets $x=\\tfrac{y^2}{4}$ where $\\tfrac{y^2}{4}=my+1$, i.e. $y^2-4my-4=0$, with roots $y_1<y_2$ and $y_2-y_1=4\\sqrt{m^2+1}$.",
          "Integrating in $y$ (the chord lies to the right of the arc on the cut-off region), $\\;A(m)=\\displaystyle\\int_{y_1}^{y_2}\\!\\Big((my+1)-\\tfrac{y^2}{4}\\Big)\\,dy=\\dfrac{(y_2-y_1)^3}{24}=\\dfrac{8}{3}\\,(m^2+1)^{3/2}.$",
          "Since $(m^2+1)^{3/2}$ is increasing in $|m|$, the minimum is at $m=0$ — the chord $x=1$, the latus rectum — giving $A(0)=\\dfrac{8}{3}=\\boxed{\\dfrac{8}{3}}$."
        ]
      },
      {
        "name": "Archimedes' parabolic-segment formula",
        "steps": [
          "Archimedes: the area of a parabolic segment equals $\\tfrac43$ the area of the inscribed triangle whose base is the chord and whose apex is the point of the arc where the tangent is parallel to the chord.",
          "For the chord $x=my+1$ the base has length $4\\sqrt{m^2+1}$ and the perpendicular offset of the apex gives triangle area $2(m^2+1)$; hence the segment area is $\\tfrac43\\cdot 2(m^2+1)\\cdot\\sqrt{m^2+1}=\\dfrac{8}{3}(1+m^2)^{3/2}$, identical to the strip integral.",
          "As $(1+m^2)^{3/2}$ is least at $m=0$, the minimum area is $\\dfrac{8}{3}\\cdot 1=\\boxed{\\dfrac{8}{3}}$."
        ]
      }
    ],
    "remark": "Insight: the shortest focal chord (the latus rectum) also bounds the smallest segment — but only because the focus sits on the parabola's axis of symmetry, which makes the symmetric chord stationary for both functionals at once. Slide the fixed point off the axis, say to $(1,1)$, and the area becomes $\\tfrac83(m^2-m+1)^{3/2}$ minimised at $m=\\tfrac12$, while the length is minimised near $m\\approx0.29$ — the two optima split apart, exposing that 'shortest' and 'leanest' are not the same problem."
  },
  {
    "theme": "minimizearea",
    "themeLabel": "Optimising an Area",
    "title": "The Rectangle in the Cap",
    "difficulty": 4,
    "task": "Find",
    "tags": [
      "parabola cap",
      "inscribed rectangle",
      "optimisation",
      "symmetry"
    ],
    "statement": "The parabola $y=8-x^2$ and the line $y=4$ enclose a parabolic cap. A rectangle is inscribed with its base on the line $y=4$ and its two upper vertices on the parabola. Find the maximum area of such a rectangle.",
    "answer": "$\\boxed{\\dfrac{32\\sqrt{3}}{9}}$",
    "trap": "Measuring the rectangle's height from the $x$-axis (i.e. using $y=8-x^2$ as the height) instead of from the chord $y=4$; that optimises the wrong region and inflates the area to $\\dfrac{64\\sqrt{6}}{9}$, ignoring the line that actually bounds the cap.",
    "solutions": [
      {
        "name": "One-variable reduction",
        "steps": [
          "By symmetry the base runs from $(-x,4)$ to $(x,4)$ with $x>0$; the upper corners $(x,\\,4+h)$ lie on the parabola, so $4+h=8-x^2$, giving height $h=4-x^2$.",
          "Area $A(x)=2x(4-x^2)=8x-2x^3$ on $0<x<2$.",
          "$A'(x)=8-6x^2=0\\Rightarrow x=\\tfrac{2}{\\sqrt3}$, where $A''=-12x<0$ (maximum); $A=2\\cdot\\tfrac{2}{\\sqrt3}\\big(4-\\tfrac43\\big)=\\dfrac{4}{\\sqrt3}\\cdot\\dfrac{8}{3}=\\boxed{\\dfrac{32\\sqrt3}{9}}$."
        ]
      },
      {
        "name": "AM-GM on the cubic",
        "steps": [
          "Maximise $A^2=4x^2(4-x^2)^2$; set $u=x^2$ and maximise $g(u)=u(4-u)^2$ on $(0,4)$.",
          "Write $g=\\tfrac12\\,(2u)(4-u)(4-u)$, whose three factors $2u,\\,4-u,\\,4-u$ sum to the constant $8$; by AM-GM their product is greatest when they are equal, $2u=4-u$, i.e. $u=\\tfrac43$.",
          "Then $x=\\tfrac{2}{\\sqrt3}$ and $A=2x(4-x^2)=\\dfrac{32\\sqrt3}{9}=\\boxed{\\dfrac{32\\sqrt3}{9}}$."
        ]
      }
    ],
    "remark": "Insight: the height must be read from the bounding chord $y=4$, not the axis. The optimal $x=2/\\sqrt3$ places the corner at $1/\\sqrt3$ of the cap's half-width, while the height $4-x^2=8/3$ is exactly $2/3$ of the cap's depth $4$ — the universal $1{:}2$ split a parabola imposes on every such inscribed rectangle."
  },
  {
    "theme": "minimizearea",
    "themeLabel": "Optimising an Area",
    "title": "The Widest Wedge",
    "difficulty": 4,
    "task": "Find",
    "tags": [
      "circle chord",
      "triangle area",
      "central triangle",
      "range constraint"
    ],
    "statement": "A chord of the circle $x^2+y^2=4$ is horizontal, lying at height $h$ with $0<h<2$, with endpoints $P$ and $Q$. Find the maximum area of triangle $OPQ$, where $O$ is the centre of the circle.",
    "answer": "$\\boxed{2}$",
    "trap": "Maximising the chord's length (which happens at $h=0$, a diameter) and reporting that as the biggest triangle. At $h=0$ the chord passes through $O$, so the triangle degenerates to zero area. Longest base does not mean largest triangle.",
    "solutions": [
      {
        "name": "Base-times-height",
        "steps": [
          "The chord runs from $(-\\sqrt{4-h^2},h)$ to $(\\sqrt{4-h^2},h)$, so its length (base) is $2\\sqrt{4-h^2}$ and the perpendicular distance from $O$ is $h$.",
          "Area $A(h)=\\tfrac12\\cdot 2\\sqrt{4-h^2}\\cdot h=h\\sqrt{4-h^2}$ for $0<h<2$.",
          "$A'(h)=\\dfrac{2(2-h^2)}{\\sqrt{4-h^2}}=0\\Rightarrow h=\\sqrt2$; the sign of $A'$ goes $+\\to-$ there (and $A''(\\sqrt2)=-4<0$), so it is a maximum, giving $A=\\sqrt2\\cdot\\sqrt2=\\boxed{2}$."
        ]
      },
      {
        "name": "Central-angle form",
        "steps": [
          "Let $2\\alpha=\\angle POQ$ be the apex angle at the centre. With $OP=OQ=R=2$, the area is $\\tfrac12 R^2\\sin 2\\alpha=2\\sin 2\\alpha$.",
          "This is maximal when $2\\alpha=\\tfrac{\\pi}{2}$, i.e. the radii $OP$ and $OQ$ are perpendicular.",
          "Maximum area $=2\\cdot 1=\\boxed{2}$; then $h=R\\cos\\alpha=2\\cos\\tfrac{\\pi}{4}=\\sqrt2$, consistent with the calculus answer."
        ]
      },
      {
        "name": "AM-GM on the squared area",
        "steps": [
          "Maximising $A=h\\sqrt{4-h^2}$ is equivalent to maximising $A^2=h^2(4-h^2)$.",
          "Put $u=h^2$ with $0<u<4$; then $A^2=u(4-u)$, and AM-GM gives $u(4-u)\\le\\left(\\tfrac{u+(4-u)}{2}\\right)^2=4$, with equality iff $u=4-u$, i.e. $u=2$, $h=\\sqrt2$.",
          "Hence $A^2\\le 4$, so $A\\le 2$, attained at $h=\\sqrt2$: the maximum area is $\\boxed{2}$."
        ]
      }
    ],
    "remark": "Insight: among isosceles triangles formed at a fixed circle's centre, the area equals $\\tfrac12 R^2\\sin(\\text{apex angle})$, which peaks at a right apex angle, not at the flattest (diameter) configuration. The flattest chord is the longest base yet gives zero height from the centre, so its triangle has zero area."
  },
  {
    "theme": "minimizearea",
    "themeLabel": "Optimising an Area",
    "title": "Archimedes' Tallest Triangle",
    "difficulty": 4,
    "task": "Find",
    "tags": [
      "parabola",
      "inscribed triangle",
      "chord",
      "tangent parallel"
    ],
    "statement": "On the parabola $y=x^2$, fix the chord joining $A=(-1,1)$ and $B=(2,4)$. A point $P=(t,t^2)$ moves along the arc of the parabola between $A$ and $B$. Find the maximum area of triangle $APB$.",
    "answer": "\\[\\boxed{\\dfrac{27}{8}}\\]",
    "trap": "Chasing the geometry of the sides instead of the height: a tempting instinct is to spread the triangle by maximising the product of the side lengths $PA\\cdot PB$, which here peaks near $t\\approx0.405$ and gives a strictly smaller area $\\approx 3.361$. Equally, taking $P$ at an endpoint of the chord collapses the triangle to zero area. Only the point where the tangent is parallel to $AB$, namely $t=\\tfrac12$, maximises the perpendicular distance to the chord and hence the area.",
    "solutions": [
      {
        "name": "Signed-area as a quadratic",
        "steps": [
          "With $\\vec{AB}=(3,3)$ and $\\vec{AP}=(t+1,\\,t^2-1)$, twice the signed area is $3(t^2-1)-3(t+1)=3t^2-3t-6$.",
          "Area $=\\tfrac12|3t^2-3t-6|=\\tfrac32|t^2-t-2|$; on $-1<t<2$ the quadratic $t^2-t-2\\le0$, with extreme magnitude at the vertex $t=\\tfrac12$.",
          "At $t=\\tfrac12$: $|t^2-t-2|=\\left|\\tfrac14-\\tfrac12-2\\right|=\\tfrac94$, so area $=\\tfrac32\\cdot\\tfrac94=\\boxed{\\dfrac{27}{8}}$."
        ]
      },
      {
        "name": "Tangent parallel to the chord",
        "steps": [
          "The chord $AB$ has slope $\\dfrac{4-1}{2-(-1)}=1$; the area is maximised where the tangent is parallel, i.e. $2t=1\\Rightarrow t=\\tfrac12$, giving $P=\\left(\\tfrac12,\\tfrac14\\right)$.",
          "The line through $A,B$ is $x-y+2=0$, so the distance from $P$ is $\\dfrac{\\left|\\tfrac12-\\tfrac14+2\\right|}{\\sqrt2}=\\dfrac{9/4}{\\sqrt2}=\\dfrac{9\\sqrt2}{8}$, while $|AB|=3\\sqrt2$.",
          "Hence area $=\\tfrac12\\cdot|AB|\\cdot\\text{dist}=\\tfrac12\\cdot 3\\sqrt2\\cdot\\dfrac{9\\sqrt2}{8}=\\boxed{\\dfrac{27}{8}}$."
        ]
      }
    ],
    "remark": "Insight: this maximal triangle is the seed of Archimedes' quadrature of the parabola — the parabolic segment cut by $AB$ has area exactly $\\tfrac43$ of it, here $\\tfrac43\\cdot\\tfrac{27}{8}=\\tfrac92$, which one can confirm directly as $\\int_{-1}^{2}\\bigl((x+2)-x^2\\bigr)\\,dx=\\tfrac92$."
  },
  {
    "theme": "minimizearea",
    "themeLabel": "Optimising an Area",
    "title": "The Tangent on a Tightrope",
    "difficulty": 4,
    "task": "Find",
    "tags": [
      "ellipse tangent",
      "hidden constraint",
      "line of tangency",
      "double angle"
    ],
    "statement": "A tangent to the ellipse $\\dfrac{x^2}{8}+\\dfrac{y^2}{2}=1$ forms a triangle with the coordinate axes, and its point of tangency lies on the line $y=x$. Find the area of this triangle.",
    "answer": "$\\boxed{5}$",
    "trap": "Ignoring the condition that the point of tangency lies on $y=x$ and quoting the unconstrained minimum $ab=4$; that minimum occurs at $t=\\tfrac{\\pi}{4}$, where the tangency point is $\\big(\\tfrac{a}{\\sqrt2},\\tfrac{b}{\\sqrt2}\\big)=(2,1)\\ne(2,2)$, so it never sits on $y=x$. The constraint pins a specific tangent whose triangle has area $5$, strictly larger than the free optimum $4$, so $4$ is impossible here.",
    "solutions": [
      {
        "name": "Apply the constraint, then the area formula",
        "steps": [
          "Write the ellipse as $\\dfrac{x^2}{a^2}+\\dfrac{y^2}{b^2}=1$ with $a=\\sqrt8,\\ b=\\sqrt2$. The point of tangency is $(a\\cos t,\\,b\\sin t)$.",
          "It lies on $y=x$, so $b\\sin t=a\\cos t\\Rightarrow \\tan t=\\dfrac{a}{b}=\\dfrac{\\sqrt8}{\\sqrt2}=2$.",
          "The tangent $\\dfrac{x\\cos t}{a}+\\dfrac{y\\sin t}{b}=1$ has intercepts $\\dfrac{a}{\\cos t}$ and $\\dfrac{b}{\\sin t}$, so the triangle area is $\\dfrac12\\cdot\\dfrac{a}{\\cos t}\\cdot\\dfrac{b}{\\sin t}=\\dfrac{ab}{\\sin 2t}=\\dfrac{4}{\\sin 2t}$.",
          "$\\sin 2t=\\dfrac{2\\tan t}{1+\\tan^2 t}=\\dfrac{4}{5}$, so area $=\\dfrac{4}{4/5}=\\boxed{5}$."
        ]
      },
      {
        "name": "Explicit intercepts",
        "steps": [
          "From $\\tan t=2$: $\\cos t=\\tfrac{1}{\\sqrt5},\\ \\sin t=\\tfrac{2}{\\sqrt5}$, giving the tangency point $\\big(\\sqrt8\\cdot\\tfrac{1}{\\sqrt5},\\ \\sqrt2\\cdot\\tfrac{2}{\\sqrt5}\\big)=\\big(\\tfrac{2\\sqrt2}{\\sqrt5},\\tfrac{2\\sqrt2}{\\sqrt5}\\big)$, which indeed satisfies $y=x$.",
          "The tangent $\\dfrac{x\\cos t}{\\sqrt8}+\\dfrac{y\\sin t}{\\sqrt2}=1$ has $x$-intercept $\\dfrac{\\sqrt8}{\\cos t}=\\sqrt8\\cdot\\sqrt5=\\sqrt{40}$ and $y$-intercept $\\dfrac{\\sqrt2}{\\sin t}=\\sqrt2\\cdot\\tfrac{\\sqrt5}{2}=\\sqrt{2.5}$.",
          "Area $=\\tfrac12\\sqrt{40}\\cdot\\sqrt{2.5}=\\tfrac12\\sqrt{100}=\\tfrac12\\cdot 10=\\boxed{5}$."
        ]
      }
    ],
    "remark": "Insight: the area $\\tfrac{ab}{\\sin 2t}$ is minimised at $t=\\tfrac{\\pi}{4}$, but the condition that the tangency point lie on $y=x$ forces $\\tan t=\\tfrac{a}{b}=2\\ne1$. The hidden constraint silently relocates the optimum, so the famous $ab=4$ minimum is unreachable and the honest answer is $5$."
  },
  {
    "theme": "minimizearea",
    "themeLabel": "Optimising an Area",
    "title": "Where Right Angles Meet",
    "difficulty": 5,
    "task": "Find",
    "tags": [
      "parabola tangents",
      "perpendicular tangents",
      "directrix",
      "tangent triangle"
    ],
    "statement": "Two tangents are drawn to the parabola $y=x^2$ at points $P=(t,t^2)$ and $Q=(s,s^2)$ such that the tangents are perpendicular. These two tangents and the chord $PQ$ bound a triangle. Find the minimum possible area of this triangle.",
    "answer": "\\[\\boxed{\\dfrac{1}{4}}\\]",
    "trap": "Forgetting that perpendicularity ties $s$ to $t$ via $ts=-\\tfrac14$ and treating $t,s$ as free. Without the constraint the area $\\tfrac14|t-s|^3$ can be driven to $0$ by letting $s\\to t$, so one wrongly concludes the triangle can be made arbitrarily small. A second pitfall is misremembering the tangent-triangle area as $\\tfrac18|t-s|^3$; the correct coefficient is $\\tfrac14$.",
    "solutions": [
      {
        "name": "Constraint, then single-variable calculus",
        "steps": [
          "The tangent to $y=x^2$ at $(a,a^2)$ is $y=2ax-a^2$. So the tangents at $P,Q$ have slopes $2t,2s$ and are perpendicular iff $(2t)(2s)=-1$, i.e. $ts=-\\tfrac14$. Solving $2tx-t^2=2sx-s^2$ gives the apex $C=\\big(\\tfrac{t+s}{2},\\,ts\\big)$, whose ordinate $ts=-\\tfrac14$ shows $C$ lies on the directrix $y=-\\tfrac14$.",
          "With $P=(t,t^2)$, $Q=(s,s^2)$, $C=\\big(\\tfrac{t+s}{2},ts\\big)$, the shoelace determinant gives the triangle area $A=\\tfrac12\\big|x_P(y_Q-y_C)+x_Q(y_C-y_P)+x_C(y_P-y_Q)\\big|=\\dfrac{|t-s|^3}{4}$. Impose the constraint by setting $s=-\\dfrac{1}{4t}$ (take $t>0$, so $s<0$ and $t-s>0$).",
          "Then $A(t)=\\dfrac{1}{4}\\Big(t+\\dfrac{1}{4t}\\Big)^3=\\dfrac{(4t^2+1)^3}{256\\,t^3}$. Setting $A'(t)=0$ yields $4t^2=1$, i.e. $t=\\tfrac12$ (so $s=-\\tfrac12$), and $A''(\\tfrac12)>0$ confirms a minimum. Hence $A_{\\min}=\\dfrac{(1+1)^3}{256\\cdot\\tfrac18}=\\boxed{\\dfrac14}$."
        ]
      },
      {
        "name": "Focal-chord symmetry and AM-GM",
        "steps": [
          "Perpendicular tangents to a parabola always meet on the directrix, and the chord of contact $PQ$ is then a focal chord (through the focus $\\big(0,\\tfrac14\\big)$). The apex-to-chord configuration makes the tangent-triangle area exactly $A=\\tfrac14|t-s|^3$.",
          "Using $ts=-\\tfrac14$, write $|t-s|^2=(t+s)^2-4ts=(t+s)^2+1\\ge 1$, with equality precisely when $t+s=0$, i.e. $t=\\tfrac12,\\,s=-\\tfrac12$ (the latus-rectum chord). Thus $|t-s|\\ge 1$, minimised at $|t-s|=1$.",
          "Since $A=\\tfrac14|t-s|^3$ is increasing in $|t-s|$, its minimum occurs at $|t-s|=1$, giving $A_{\\min}=\\tfrac14\\cdot 1^3=\\boxed{\\dfrac14}$."
        ]
      }
    ],
    "remark": "Insight: among all perpendicular-tangent pairs the symmetric one (the latus rectum, $t=-s$) is tightest. The constraint $ts=-\\tfrac14$ collapses a deceptively free two-variable area $\\tfrac14|t-s|^3$ into a one-line bound via $|t-s|^2=(t+s)^2+1\\ge1$. Note the area coefficient is $\\tfrac14$, not $\\tfrac18$ — a slip that happens to leave the final $\\tfrac14$ unchanged only because the latus-rectum chord has $|t-s|=1$."
  },
  {
    "theme": "minimizearea",
    "themeLabel": "Optimising an Area",
    "title": "The Optimum That Isn't There",
    "difficulty": 5,
    "task": "Find",
    "tags": [
      "intercept triangle",
      "feasibility",
      "endpoint extremum",
      "half-plane constraint"
    ],
    "statement": "A line passes through the fixed point $(4,1)$ and meets the positive coordinate axes at $A$ and $B$. Subject to the additional requirement that the line passes on or above the point $(2,3)$, find the minimum possible area of triangle $OAB$ with $O$ the origin.",
    "answer": "\\[\\boxed{\\dfrac{25}{2}}\\]",
    "trap": "Reporting the unconstrained minimum $2\\cdot4\\cdot1=8$ (line $\\tfrac{x}{8}+\\tfrac{y}{2}=1$): but that line passes through $(2,\\tfrac32)$, which is below $(2,3)$, so it is infeasible. The free critical point lies outside the allowed range; the true minimum is at a boundary.",
    "solutions": [
      {
        "name": "Critical point fails feasibility, fall to the boundary",
        "steps": [
          "With $\\tfrac{x}{p}+\\tfrac{y}{q}=1$ through $(4,1)$: $\\tfrac4p+\\tfrac1q=1$, area $S=\\tfrac12 pq=\\dfrac{p^2}{2(p-4)}$, whose free minimum is at $p=8$ (area $8$).",
          "The above-$(2,3)$ condition is $q\\big(1-\\tfrac2p\\big)\\ge3$; combined with $\\tfrac4p+\\tfrac1q=1$ this forces $p\\le5$, so $p=8$ is excluded — feasible $p\\in(4,5]$.",
          "On $(4,5]$, $S(p)=\\dfrac{p^2}{2(p-4)}$ is decreasing (since $S'=\\dfrac{p(p-8)}{2(p-4)^2}<0$), so the minimum is at the endpoint $p=5$: $S=\\dfrac{25}{2}$, i.e. $\\boxed{\\dfrac{25}{2}}$."
        ]
      },
      {
        "name": "Identify the boundary line directly",
        "steps": [
          "The binding constraint is the line passing exactly through both $(4,1)$ and $(2,3)$; its slope is $\\dfrac{3-1}{2-4}=-1$, giving $y=5-x$.",
          "This line has intercepts $A=(5,0)$, $B=(0,5)$, both positive, so it is feasible and on the boundary of the constraint.",
          "Area $=\\tfrac12\\cdot5\\cdot5=\\boxed{\\dfrac{25}{2}}$; any feasible line is steeper or shallower and encloses more, confirming the minimum."
        ]
      }
    ],
    "remark": "Insight: the chapter's deepest trap — when a constraint excludes the calculus critical point, the extremum jumps to the feasibility boundary. Always test whether the unconstrained optimum is even allowed."
  },
  {
    "theme": "minimizearea",
    "themeLabel": "Optimising an Area",
    "title": "The Parabola's Generous Tangent",
    "difficulty": 5,
    "task": "Find",
    "tags": [
      "implicit curve",
      "tangent triangle",
      "maximum not minimum",
      "endpoint check"
    ],
    "statement": "A tangent line is drawn to the curve $\\sqrt{x}+\\sqrt{y}=1$ at a point in the open first quadrant; it meets the $x$-axis at $A$ and the $y$-axis at $B$. As the point of tangency varies, find the maximum area of triangle $OAB$, where $O$ is the origin.",
    "answer": "$\\boxed{\\dfrac{1}{8}}$",
    "trap": "Treating the extremum as a minimum (the usual instinct for tangent-triangle problems) and ignoring the parameter's endpoints. Here the intercept sum $OA+OB$ is constant, the area peaks at the centre, and at the endpoints the triangle collapses to area $0$, so $\\tfrac18$ is a maximum, not a minimum, and there is no interior minimum at all.",
    "solutions": [
      {
        "name": "Parametrise the square-root curve",
        "steps": [
          "Let $\\sqrt x=u$ and $\\sqrt y=1-u$ with $u\\in(0,1)$, so the point of tangency is $\\big(u^2,(1-u)^2\\big)$. Differentiating $\\sqrt x+\\sqrt y=1$ implicitly gives $\\dfrac{dy}{dx}=-\\dfrac{\\sqrt y}{\\sqrt x}=-\\dfrac{1-u}{u}$.",
          "The tangent's intercepts simplify remarkably: the $x$-intercept is $A=(u,0)$ and the $y$-intercept is $B=(0,1-u)$, so $OA+OB=u+(1-u)=1$ is constant.",
          "Hence the area is $\\tfrac12\\,OA\\cdot OB=\\tfrac12 u(1-u)$. Its only critical point is $u=\\tfrac12$, where the second derivative is $-1<0$ (a maximum); the endpoints $u\\to0^+,\\,1^-$ give area $\\to0$. The maximum area is $\\tfrac12\\cdot\\tfrac12\\cdot\\tfrac12=\\boxed{\\dfrac{1}{8}}$."
        ]
      },
      {
        "name": "Constant intercept-sum via AM-GM",
        "steps": [
          "Every tangent to $\\sqrt x+\\sqrt y=1$ satisfies $OA+OB=1$ (a known property of $\\sqrt x+\\sqrt y=\\sqrt c$, here with $c=1$). Write the area as $\\tfrac12\\,OA\\cdot OB$.",
          "By AM-GM, $OA\\cdot OB\\le\\Big(\\dfrac{OA+OB}{2}\\Big)^2=\\dfrac14$, with equality exactly when $OA=OB=\\tfrac12$.",
          "Therefore the maximum area is $\\tfrac12\\cdot\\tfrac14=\\boxed{\\dfrac{1}{8}}$, attained at the symmetric point of tangency $\\big(\\tfrac14,\\tfrac14\\big)$."
        ]
      }
    ],
    "remark": "Insight: the curve $\\sqrt x+\\sqrt y=1$ forces every tangent's intercepts to sum to $1$, turning an area extremum into pure AM-GM. The optimum is a maximum because the feasible set is a bounded open segment whose ends pinch the triangle down to nothing, so the area has a single interior critical point and it must be the peak."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Level That Halves the Cap",
    "difficulty": 4,
    "task": "Find the value",
    "tags": [
      "area-between-curves",
      "bisection",
      "horizontal-strip",
      "parabola"
    ],
    "statement": "Let $R$ be the region bounded above by the line $y=1$ and below by the parabola $y=x^2$. A horizontal line $y=k$, with $0<k<1$, divides $R$ into two pieces of equal area. \\[\\text{Find } k.\\]",
    "answer": "\\[\\boxed{k=2^{-2/3}}\\]",
    "trap": "The seductive move is to set $k=\\tfrac12$, the midpoint of the height range $[0,1]$, assuming equal heights give equal areas. This fails because $R$ is WIDER near the top: its width $2\\sqrt y$ increases with $y$, so the bulk of the area sits high up. The cumulative area below $y=k$ grows like $k^{3/2}$, not linearly, and at $k=\\tfrac12$ it is only $\\tfrac{\\sqrt2}{3}\\approx0.47$ of the total — under half. To enclose half the area beneath it, the dividing level must rise ABOVE the midpoint, to $k=2^{-2/3}\\approx0.63$.",
    "solutions": [
      {
        "name": "Horizontal slicing",
        "steps": [
          "Total area $=\\int_{-1}^{1}(1-x^2)\\,dx=\\tfrac43$, so each half must be $\\tfrac23$.",
          "At height $y$ the region's width is the chord of $y=x^2$, namely $|x|\\le\\sqrt y$, so width $=2\\sqrt y$.",
          "Area below $y=k$ is $\\int_0^k 2\\sqrt y\\,dy=\\tfrac43 k^{3/2}$.",
          "Set $\\tfrac43 k^{3/2}=\\tfrac23\\Rightarrow k^{3/2}=\\tfrac12\\Rightarrow k=2^{-2/3}=\\boxed{2^{-2/3}}.$"
        ]
      },
      {
        "name": "Vertical integration of the lower piece",
        "steps": [
          "The lower piece (area below $y=k$) is the region between $y=x^2$ and $y=k$ for $|x|\\le\\sqrt k$.",
          "Its area $=\\int_{-\\sqrt k}^{\\sqrt k}(k-x^2)\\,dx=2\\!\\left(k\\sqrt k-\\tfrac{(\\sqrt k)^3}{3}\\right)=\\tfrac43 k^{3/2}.$",
          "Equate to half of $\\tfrac43$: $\\tfrac43 k^{3/2}=\\tfrac23$, giving $k=2^{-2/3}=\\boxed{2^{-2/3}}.$"
        ]
      }
    ],
    "remark": "Insight: bisecting an area by a level line is governed by the cumulative-area function, which here is $\\tfrac43 k^{3/2}$ — a $3/2$ power, not linear. The non-linearity is the whole point. Because $R$ flares out toward the top, the bisecting level $k=2^{-2/3}\\approx0.63$ sits ABOVE the naive midpoint $\\tfrac12$ — and even just above the region's centroid height $\\bar y=\\tfrac35=0.6$ — the opposite of what the equal-heights instinct suggests."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Self-Crossing Ribbon",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "parametric",
      "loop-area",
      "greens-theorem",
      "self-intersection"
    ],
    "statement": "A curve is traced by \\[x(t)=t^2-1,\\qquad y(t)=t^3-t,\\qquad t\\in\\mathbb{R}.\\] It crosses itself, enclosing a single loop. Evaluate the area enclosed by this loop.",
    "answer": "\\[\\boxed{\\dfrac{8}{15}}\\]",
    "trap": "The fatal error is integrating $\\tfrac12\\oint(x\\,dy-y\\,dx)$ over the wrong $t$-range — e.g. all of $\\mathbb{R}$, or $t\\in[0,1]$ (a half-loop), which yields the plausible-looking $\\tfrac{4}{15}$ — instead of the closed sweep $t\\in[-1,1]$. The self-intersection occurs at $t=\\pm1$ (both map to $(0,0)$); only the interval BETWEEN the two parameter values of the node closes the loop, and missing that double-counts or under-counts the region.",
    "solutions": [
      {
        "name": "Green's theorem (shoelace integral)",
        "steps": [
          "Find the node: $x(t_1)=x(t_2)$ needs $t_2=-t_1$; then $y(t_1)=y(-t_1)$ forces $t_1^3-t_1=-(t_1^3-t_1)$, i.e. $t_1=\\pm1$. The loop is $t\\in[-1,1]$, closing at $(0,0)$.",
          "Compute $x\\,y'-y\\,x'=(t^2-1)(3t^2-1)-(t^3-t)(2t)=t^4-2t^2+1=(t^2-1)^2.$",
          "Area $=\\tfrac12\\Big|\\int_{-1}^{1}(t^2-1)^2\\,dt\\Big|=\\tfrac12\\cdot\\tfrac{16}{15}=\\boxed{\\dfrac{8}{15}}.$"
        ]
      },
      {
        "name": "Cartesian band ($y$ as a function of $x$)",
        "steps": [
          "Eliminate $t$: from $x=t^2-1$, $t^2=x+1$, and $y^2=t^2(t^2-1)^2=(x+1)x^2$, so the loop is $y=\\pm x\\sqrt{x+1}$ for $-1\\le x\\le0$.",
          "By the $y\\!\\to\\!-y$ symmetry, area $=2\\int_{-1}^{0}|x|\\sqrt{x+1}\\,dx=-2\\int_{-1}^{0}x\\sqrt{x+1}\\,dx.$",
          "Substitute $u=x+1$: $-2\\int_0^1(u-1)\\sqrt u\\,du=-2\\!\\left(\\tfrac25-\\tfrac23\\right)=\\boxed{\\dfrac{8}{15}}.$"
        ]
      }
    ],
    "remark": "Insight: two genuinely different area engines — the parametric shoelace and a Cartesian $y(x)$ band — must agree, and they pin the loop's parameter interval. The whole difficulty is locating the node $t=\\pm1$; choose the wrong limits and every method gives a wrong, often plausible-looking, number."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Snail With Two Hearts",
    "difficulty": 5,
    "task": "Find the area",
    "tags": [
      "polar",
      "limacon",
      "inner-loop",
      "annular-region"
    ],
    "statement": "Consider the limaçon $r=1+2\\cos\\theta$. It has a large outer loop and a small inner loop. \\[\\text{Find the area of the region lying inside the outer loop but outside the inner loop.}\\]",
    "answer": "\\[\\boxed{\\pi+3\\sqrt{3}}\\]",
    "trap": "The classic blunder is to compute $\\tfrac12\\int_0^{2\\pi}(1+2\\cos\\theta)^2\\,d\\theta=3\\pi$ and call it the area. Sweeping the full $2\\pi$ retraces the small inner loop while the radius is negative, so its area gets silently overlaid on the outer-loop interior rather than removed. The annular region you actually want is (outer-loop interior) $-$ (inner-loop interior), each integrated over its own $\\theta$-range. Numerically $3\\pi\\approx9.42$, while the true answer $\\pi+3\\sqrt3\\approx8.34$.",
    "solutions": [
      {
        "name": "Separate the two sweeps",
        "steps": [
          "$r=0$ when $\\cos\\theta=-\\tfrac12$, i.e. $\\theta=\\tfrac{2\\pi}{3},\\tfrac{4\\pi}{3}$. For $\\theta\\in(-\\tfrac{2\\pi}{3},\\tfrac{2\\pi}{3})$ the radius is positive and the pen traces the big outer loop; for $\\theta\\in(\\tfrac{2\\pi}{3},\\tfrac{4\\pi}{3})$ the radius is negative and the pen traces the small inner loop.",
          "Outer-loop interior: $A_{\\text{out}}=\\tfrac12\\int_{-2\\pi/3}^{2\\pi/3}(1+2\\cos\\theta)^2\\,d\\theta=2\\pi+\\tfrac{3\\sqrt3}{2}.$",
          "Inner-loop area: $A_{\\text{in}}=\\tfrac12\\int_{2\\pi/3}^{4\\pi/3}(1+2\\cos\\theta)^2\\,d\\theta=\\pi-\\tfrac{3\\sqrt3}{2}.$",
          "Required area $=A_{\\text{out}}-A_{\\text{in}}=\\big(2\\pi+\\tfrac{3\\sqrt3}{2}\\big)-\\big(\\pi-\\tfrac{3\\sqrt3}{2}\\big)=\\boxed{\\pi+3\\sqrt3}.$"
        ]
      },
      {
        "name": "Expand and use a single antiderivative",
        "steps": [
          "$(1+2\\cos\\theta)^2=1+4\\cos\\theta+4\\cos^2\\theta=3+4\\cos\\theta+2\\cos2\\theta$, so an antiderivative of the integrand $\\tfrac12(1+2\\cos\\theta)^2$ is $G(\\theta)=\\tfrac12\\big(3\\theta+4\\sin\\theta+\\sin2\\theta\\big).$",
          "$A_{\\text{out}}=G(\\tfrac{2\\pi}{3})-G(-\\tfrac{2\\pi}{3})=2\\Big[\\tfrac12\\big(3\\cdot\\tfrac{2\\pi}{3}+4\\cdot\\tfrac{\\sqrt3}{2}+(-\\tfrac{\\sqrt3}{2})\\big)\\Big]=2\\pi+\\tfrac{3\\sqrt3}{2}.$",
          "$A_{\\text{in}}=G(\\tfrac{4\\pi}{3})-G(\\tfrac{2\\pi}{3})=\\pi-\\tfrac{3\\sqrt3}{2}$, since the $\\sin$ and $\\sin2\\theta$ contributions cancel by symmetry about $\\theta=\\pi$, leaving only the $3\\theta$ part.",
          "Difference $=\\big(2\\pi+\\tfrac{3\\sqrt3}{2}\\big)-\\big(\\pi-\\tfrac{3\\sqrt3}{2}\\big)=\\boxed{\\pi+3\\sqrt3}.$"
        ]
      },
      {
        "name": "Outer minus inner, read off the naive integral",
        "steps": [
          "The full-period integral $\\tfrac12\\int_0^{2\\pi}(1+2\\cos\\theta)^2\\,d\\theta=3\\pi$ is not the area: because the integrand is squared, the negative-radius inner sweep still contributes $+A_{\\text{in}}$, so this number equals $A_{\\text{out}}+A_{\\text{in}}.$",
          "Compute only the inner sweep: $A_{\\text{in}}=\\tfrac12\\int_{2\\pi/3}^{4\\pi/3}(1+2\\cos\\theta)^2\\,d\\theta=\\pi-\\tfrac{3\\sqrt3}{2}.$",
          "Then $A_{\\text{out}}=3\\pi-A_{\\text{in}}=2\\pi+\\tfrac{3\\sqrt3}{2}.$",
          "Required area $=A_{\\text{out}}-A_{\\text{in}}=3\\pi-2A_{\\text{in}}=3\\pi-2\\big(\\pi-\\tfrac{3\\sqrt3}{2}\\big)=\\boxed{\\pi+3\\sqrt3}.$"
        ]
      }
    ],
    "remark": "Insight: for a polar curve that passes through the pole twice, the phrase the area is genuinely ambiguous, because the full $2\\pi$ integral overlays the inner loop onto the outer-loop interior instead of carving it out. Splitting at the pole angles $\\theta=\\tfrac{2\\pi}{3},\\tfrac{4\\pi}{3}$ is the conceptual key, and the answer cleanly separates into the genuine annulus piece $\\pi$ plus the algebraic piece $3\\sqrt3$. The third method is the sanity bridge: the naive $3\\pi$ is not garbage but exactly $A_{\\text{out}}+A_{\\text{in}}$, so the correct annular area is $3\\pi-2A_{\\text{in}}$."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Cheapest Chord",
    "difficulty": 4,
    "task": "Find the area",
    "tags": [
      "area-between-curves",
      "optimisation",
      "parabola",
      "cubic-power"
    ],
    "statement": "Through the fixed point $P=(0,3)$ a line is drawn meeting the parabola $y=x^2$ at two points, cutting off a region between line and parabola. Among all such lines, \\[\\text{find the minimum possible area of this region.}\\]",
    "answer": "\\[\\boxed{4\\sqrt{3}}\\]",
    "trap": "The tempting shortcut is to think a steeper or cleverly tilted chord could shrink the area, or to minimise by chasing a single intersection toward tangency (which gives area $\\to0$, but tangent lines through $(0,3)$ don't exist since $P$ is inside the parabola's interior). The chord-area depends on slope $m$ through $(m^2+12)^{3/2}$, an increasing function of $m^2$, so the minimum is the HORIZONTAL chord, not a tilted one.",
    "solutions": [
      {
        "name": "Chord-area formula plus minimisation",
        "steps": [
          "Line $y=mx+3$ meets $y=x^2$ where $x^2-mx-3=0$; the roots satisfy $(x_2-x_1)^2=m^2+12.$",
          "Area between a line and a parabola over roots $x_1,x_2$ is $\\tfrac16(x_2-x_1)^3=\\tfrac16(m^2+12)^{3/2}.$",
          "This is increasing in $m^2$, so it is minimised at $m=0$: area $=\\tfrac16\\cdot12^{3/2}=\\tfrac16\\cdot24\\sqrt3=4\\sqrt3.$",
          "Minimum area $=\\boxed{4\\sqrt3}$ (achieved by the horizontal chord $y=3$)."
        ]
      },
      {
        "name": "Direct integration of the horizontal chord",
        "steps": [
          "Guided by symmetry, test the horizontal line $y=3$: it meets $y=x^2$ at $x=\\pm\\sqrt3.$",
          "Area $=\\int_{-\\sqrt3}^{\\sqrt3}(3-x^2)\\,dx=2\\!\\left(3\\sqrt3-\\tfrac{(\\sqrt3)^3}{3}\\right)=2(3\\sqrt3-\\sqrt3)=4\\sqrt3.$",
          "Since the general chord-area $\\tfrac16(m^2+12)^{3/2}$ only grows with $|m|$, this horizontal case is the global minimum, $\\boxed{4\\sqrt3}.$"
        ]
      }
    ],
    "remark": "Insight: fusing the $\\tfrac16(\\Delta x)^3$ parabolic-segment formula with an optimisation reveals a clean monotonicity in $m^2$. The trap-killer is realising $P=(0,3)$ lies inside the parabola, so no tangent (zero-area) line exists — the extremum is interior to the family and is the symmetric chord."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Caved-In Diamond",
    "difficulty": 5,
    "task": "Find the area",
    "tags": [
      "astroid",
      "parametric",
      "chord",
      "symmetry"
    ],
    "statement": "The astroid is given parametrically by $x=\\cos^3 t,\\ y=\\sin^3 t$. In the first quadrant its arc runs from $(1,0)$ to $(0,1)$. Let $S$ be the region in the first quadrant lying between the straight chord joining $(1,0)$ to $(0,1)$ and the astroid arc. \\[\\text{Find the area of } S.\\]",
    "answer": "\\[\\boxed{\\dfrac12-\\dfrac{3\\pi}{32}}\\]",
    "trap": "A natural slip is to assume the astroid arc bulges OUTSIDE the chord (like a circular arc) and write area $=$ (quarter-astroid) $-$ (triangle), giving the negative number $\\tfrac{3\\pi}{32}-\\tfrac12$. The astroid is concave toward the origin: the arc lies INSIDE the triangle, so $S=$ (triangle) $-$ (region under the arc). Reading the subtraction order from the geometry, not from reflex, is the whole battle.",
    "solutions": [
      {
        "name": "Triangle minus arc-region",
        "steps": [
          "The chord $x+y=1$ closes off a triangle with vertices $(0,0),(1,0),(0,1)$ of area $\\tfrac12.$",
          "Area under one quadrant of the astroid: the total astroid area is $\\tfrac12\\oint(x\\,dy-y\\,dx)=\\tfrac{3\\pi}{8}$, so one quadrant is $\\tfrac14\\cdot\\tfrac{3\\pi}{8}=\\tfrac{3\\pi}{32}.$",
          "Since $x^{2/3}+y^{2/3}=1$ is concave toward the origin, the arc dips below the chord, so the gap is $S=\\tfrac12-\\tfrac{3\\pi}{32}.$",
          "$\\;\\boxed{\\dfrac12-\\dfrac{3\\pi}{32}}.$"
        ]
      },
      {
        "name": "Single parametric integral for the gap",
        "steps": [
          "Area under the arc $=\\displaystyle\\int_{x=0}^{1}y\\,dx=\\int_{t=\\pi/2}^{0}\\sin^3 t\\,d(\\cos^3 t)=\\int_0^{\\pi/2}3\\sin^4 t\\cos^2 t\\,dt.$",
          "By the Beta integral, $\\displaystyle\\int_0^{\\pi/2}\\sin^4 t\\cos^2 t\\,dt=\\tfrac12 B(\\tfrac52,\\tfrac32)=\\dfrac{\\Gamma(\\tfrac52)\\Gamma(\\tfrac32)}{2\\,\\Gamma(4)}=\\dfrac{(\\tfrac34\\sqrt\\pi)(\\tfrac12\\sqrt\\pi)}{2\\cdot6}=\\tfrac{\\pi}{32},$ so the arc area is $3\\cdot\\tfrac{\\pi}{32}=\\tfrac{3\\pi}{32}.$",
          "Triangle area $-$ arc area $=\\tfrac12-\\tfrac{3\\pi}{32}=\\boxed{\\dfrac12-\\dfrac{3\\pi}{32}}.$"
        ]
      }
    ],
    "remark": "Insight: two area mechanisms collide — a straight-line triangle and a parametric arc integral — and the concavity of the astroid (it caves toward the centre) dictates which is subtracted from which. The clean $\\tfrac{3\\pi}{32}$ quarter-area is a satisfying fingerprint of the astroid's total $\\tfrac{3\\pi}{8}$."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Widest Box Under the Dome",
    "difficulty": 4,
    "task": "Find the maximum",
    "tags": [
      "optimisation",
      "inscribed-rectangle",
      "parabola",
      "area-under-curve"
    ],
    "statement": "A rectangle has its base on the $x$-axis and its two upper vertices on the parabola $y=1-x^2$ (so it is inscribed symmetrically under the parabolic dome). \\[\\text{Find the maximum possible area of such a rectangle.}\\]",
    "answer": "\\[\\boxed{\\dfrac{4\\sqrt{3}}{9}}\\]",
    "trap": "A common error is to maximise the rectangle's HEIGHT (which pushes $x\\to 0$ and makes the area collapse to $0$), or to confuse this with the area UNDER the curve, $\\int_{-1}^1(1-x^2)\\,dx=\\tfrac43$, and report some guessed fraction of $\\tfrac43$. The objective is width $\\times$ height $=2x(1-x^2)$, whose maximiser $x=1/\\sqrt3$ is not where the height is largest; only calculus on the product gives the right vertex.",
    "solutions": [
      {
        "name": "Maximise the area product",
        "steps": [
          "By symmetry put the upper-right vertex at $(x,\\,1-x^2)$ with $0<x<1$. The width is $2x$ and the height is $1-x^2$, so the area is $A(x)=2x(1-x^2)=2x-2x^3.$",
          "$A'(x)=2-6x^2=0\\Rightarrow x^2=\\tfrac13\\Rightarrow x=\\tfrac{1}{\\sqrt3}.$ Since $A''(x)=-12x<0$ there, this is a maximum.",
          "$A_{\\max}=2\\cdot\\tfrac{1}{\\sqrt3}\\Big(1-\\tfrac13\\Big)=\\tfrac{2}{\\sqrt3}\\cdot\\tfrac23=\\tfrac{4}{3\\sqrt3}=\\boxed{\\dfrac{4\\sqrt3}{9}}.$"
        ]
      },
      {
        "name": "Reduce via the substitution $u=x^2$",
        "steps": [
          "Maximising $A=2x(1-x^2)$ for $x>0$ is the same as maximising $A^2=4x^2(1-x^2)^2$. Put $u=x^2\\in(0,1)$ to get $A^2=4u(1-u)^2.$",
          "$\\dfrac{d}{du}\\big[u(1-u)^2\\big]=(1-u)^2-2u(1-u)=(1-u)(1-3u)=0\\Rightarrow u=\\tfrac13$ (the root $u=1$ is the degenerate flat rectangle).",
          "Then $A^2=4\\cdot\\tfrac13\\cdot\\big(\\tfrac23\\big)^2=4\\cdot\\tfrac13\\cdot\\tfrac49=\\tfrac{16}{27},$ so $A=\\sqrt{\\tfrac{16}{27}}=\\tfrac{4}{3\\sqrt3}=\\boxed{\\dfrac{4\\sqrt3}{9}}.$"
        ]
      }
    ],
    "remark": "Insight: the inscribed-area optimisation (a max-area mechanism) lives in dialogue with the fixed area under the dome, $\\tfrac43.$ The ratio $\\dfrac{4\\sqrt3/9}{4/3}=\\dfrac{\\sqrt3}{3}\\approx0.577$ shows the optimal box captures about $58\\%$ of the dome — a memorable benchmark, and a guard against the 'maximise height' trap, which instead drives the area to $0.$"
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Ray That Splits the Lens",
    "difficulty": 5,
    "task": "Find the slope",
    "tags": [
      "area-between-curves",
      "bisection",
      "variable-line",
      "sub-interval"
    ],
    "statement": "The curves $y=x^2$ and $y=2x$ bound a lens-shaped region between $x=0$ and $x=2$. A line $y=mx$ through the origin, with $0<m<2$, splits this region into two parts of equal area. \\[\\text{Find } m.\\]",
    "answer": "\\[\\boxed{m=2^{2/3}}\\]",
    "trap": "The deadly mistake is to integrate $\\int_0^2\\big[(2x-mx)-(x^2-mx)\\big]\\,dx$ or to treat the line as the new upper or lower bound across the WHOLE interval $[0,2]$. In the first form the $mx$ terms cancel and $m$ disappears entirely, leaving the useless identity $\\tfrac43=\\tfrac43$; in the second form one gets the spurious $m=\\tfrac53$. The line $y=mx$ meets the parabola at $x=m$ but only touches $y=2x$ at the origin, so the boundary of the upper part switches at $x=m$: it is capped by the line $y=mx$ on $[0,m]$ and by the parabola $y=x^2$ on $[m,2]$. Missing this sub-interval switch corrupts the integral.",
    "solutions": [
      {
        "name": "Split the upper part at the crossing point",
        "steps": [
          "The whole lens has area $\\displaystyle\\int_0^2(2x-x^2)\\,dx=\\Big[x^2-\\tfrac{x^3}{3}\\Big]_0^2=\\tfrac43$, so each part must measure $\\tfrac23.$",
          "The line $y=mx$ meets $y=x^2$ where $x^2=mx$, i.e. at $x=m$. For the part ABOVE the line: on $[0,m]$ it lies between $y=mx$ and $y=2x$ with height $(2-m)x$; on $[m,2]$ it lies between $y=x^2$ and $y=2x$ with height $2x-x^2$.",
          "$A_{\\text{above}}=\\displaystyle\\int_0^m(2-m)x\\,dx+\\int_m^2(2x-x^2)\\,dx.$ The first integral equals $\\tfrac{(2-m)m^2}{2}$; the second equals $\\Big[x^2-\\tfrac{x^3}{3}\\Big]_m^2=\\tfrac43-\\big(m^2-\\tfrac{m^3}{3}\\big).$",
          "Adding and simplifying, $A_{\\text{above}}=\\big(m^2-\\tfrac{m^3}{2}\\big)+\\tfrac43-m^2+\\tfrac{m^3}{3}=\\tfrac43-\\tfrac{m^3}{6}.$",
          "Set $\\tfrac43-\\tfrac{m^3}{6}=\\tfrac23\\Rightarrow \\tfrac{m^3}{6}=\\tfrac23\\Rightarrow m^3=4\\Rightarrow m=\\boxed{2^{2/3}}.$"
        ]
      },
      {
        "name": "Measure the lower part directly",
        "steps": [
          "The part BELOW the line lies between the parabola $y=x^2$ and the line $y=mx$, and it exists only where $mx\\ge x^2$, namely on $x\\in[0,m].$",
          "$A_{\\text{below}}=\\displaystyle\\int_0^m(mx-x^2)\\,dx=\\Big[\\tfrac{mx^2}{2}-\\tfrac{x^3}{3}\\Big]_0^m=\\tfrac{m^3}{2}-\\tfrac{m^3}{3}=\\tfrac{m^3}{6}.$",
          "For a bisection this lower part must equal half the lens: $\\tfrac{m^3}{6}=\\tfrac23\\Rightarrow m^3=4\\Rightarrow m=\\boxed{2^{2/3}}.$"
        ]
      }
    ],
    "remark": "Insight: the bisecting ray cuts off a sliver of the strikingly simple area $\\tfrac{m^3}{6}$ — a hidden $\\tfrac16(\\Delta x)^3$ parabolic-segment law in disguise, since the chord $y=mx$ and the parabola $y=x^2$ between $x=0$ and $x=m$ enclose exactly that. Once you notice the boundary switches at $x=m$, the cubic $m^3=4$ falls straight out and $m=2^{2/3}$ echoes the flavour of the level-line bisection problems."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Lens Between the Sinusoids",
    "difficulty": 4,
    "task": "Find a, the area",
    "tags": [
      "trig-area",
      "area-between-curves",
      "vertical-bisector",
      "symmetry"
    ],
    "statement": "Between two consecutive intersections the curves $y=\\sin x$ and $y=\\cos x$ enclose a region $R$. \\[\\text{Find the area of } R,\\text{ and find the vertical line } x=a\\text{ that bisects it.}\\]",
    "answer": "\\[\\boxed{\\text{area}=2\\sqrt2,\\quad a=\\tfrac{3\\pi}{4}}\\]",
    "trap": "Two traps lurk. First, taking the intersections as $x=\\tfrac{\\pi}{4}$ and the NEXT one at $x=\\tfrac{5\\pi}{4}$ but integrating $\\cos x-\\sin x$ (wrong sign, since on this interval $\\sin x>\\cos x$), yielding $-2\\sqrt2$. Second, assuming the bisector sits at the arithmetic mean of the endpoints only by luck; here it does, $a=\\tfrac34\\pi$, but one must verify via the symmetry of $\\sin x-\\cos x$ about its peak, not assume it.",
    "solutions": [
      {
        "name": "Integrate the gap, then exploit symmetry",
        "steps": [
          "$\\sin x=\\cos x$ at $x=\\tfrac{\\pi}{4}$ and $x=\\tfrac{5\\pi}{4}$; between them $\\sin x>\\cos x.$",
          "Area $=\\int_{\\pi/4}^{5\\pi/4}(\\sin x-\\cos x)\\,dx=[-\\cos x-\\sin x]_{\\pi/4}^{5\\pi/4}=2\\sqrt2.$",
          "$\\sin x-\\cos x=\\sqrt2\\sin\\!\\big(x-\\tfrac{\\pi}{4}\\big)$ is symmetric about its maximum at $x=\\tfrac{3\\pi}{4}$, the midpoint of $[\\tfrac{\\pi}{4},\\tfrac{5\\pi}{4}].$",
          "By that symmetry the vertical line $x=\\tfrac{3\\pi}{4}$ splits the area equally; check $\\int_{\\pi/4}^{3\\pi/4}\\sqrt2\\sin(x-\\tfrac{\\pi}{4})\\,dx=\\sqrt2.$ Hence $\\boxed{\\text{area}=2\\sqrt2,\\ a=\\tfrac{3\\pi}{4}}.$"
        ]
      },
      {
        "name": "Amplitude form throughout",
        "steps": [
          "Write the gap as $g(x)=\\sqrt2\\sin\\!\\big(x-\\tfrac{\\pi}{4}\\big)$, zero at $x=\\tfrac{\\pi}{4},\\tfrac{5\\pi}{4}.$",
          "Area $=\\int_{\\pi/4}^{5\\pi/4}\\sqrt2\\sin\\!\\big(x-\\tfrac{\\pi}{4}\\big)\\,dx=\\sqrt2\\,[-\\cos(x-\\tfrac{\\pi}{4})]_{\\pi/4}^{5\\pi/4}=\\sqrt2\\cdot2=2\\sqrt2.$",
          "Since $g$ is an even hump about $x=\\tfrac{3\\pi}{4}$, the bisector is $a=\\tfrac{3\\pi}{4}$, giving $\\boxed{\\text{area}=2\\sqrt2,\\ a=\\tfrac{3\\pi}{4}}.$"
        ]
      },
      {
        "name": "Cumulative-area equation for the bisector",
        "steps": [
          "Let $A(a)=\\int_{\\pi/4}^{a}(\\sin x-\\cos x)\\,dx=\\sqrt2\\bigl(1-\\sin(a+\\tfrac{\\pi}{4})\\bigr)$ be the area to the left of $x=a.$",
          "The bisector solves $A(a)=\\tfrac12\\cdot2\\sqrt2=\\sqrt2$, i.e. $\\sin(a+\\tfrac{\\pi}{4})=0.$",
          "On $[\\tfrac{\\pi}{4},\\tfrac{5\\pi}{4}]$ the only root is $a+\\tfrac{\\pi}{4}=\\pi$, so $a=\\tfrac{3\\pi}{4}$ (the value $a=-\\tfrac{\\pi}{4}$ lies outside the interval and is rejected). Hence $\\boxed{\\text{area}=2\\sqrt2,\\ a=\\tfrac{3\\pi}{4}}.$"
        ]
      }
    ],
    "remark": "Insight: rewriting $\\sin x-\\cos x$ in amplitude-phase form $\\sqrt2\\sin(x-\\tfrac{\\pi}{4})$ simultaneously fixes the sign (killing trap one) and exposes the reflection symmetry that places the bisector exactly at the peak, a clean fusion of a trig-area computation with a symmetry-driven bisection. The cumulative-area equation gives the same $a=\\tfrac{3\\pi}{4}$ uniquely, confirming the mean is not a coincidence."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "Where the Heart Meets the Circle",
    "difficulty": 5,
    "task": "Find the area",
    "tags": [
      "polar",
      "cardioid",
      "circle",
      "intersection-of-regions"
    ],
    "statement": "Find the area of the region lying inside BOTH the cardioid $r=1+\\cos\\theta$ and the circle $r=3\\cos\\theta$.",
    "answer": "\\[\\boxed{\\dfrac{5\\pi}{4}}\\]",
    "trap": "The seductive error is to integrate one curve over the full range or to use a single curve as the boundary everywhere. The two regions' common boundary switches at the intersection angle $\\theta=\\tfrac{\\pi}{3}$: for $0\\le\\theta\\le\\tfrac{\\pi}{3}$ the cardioid is the inner (smaller $r$) curve, while for $\\tfrac{\\pi}{3}\\le\\theta\\le\\tfrac{\\pi}{2}$ the circle is. Using the wrong curve on a sub-range — or forgetting the circle only exists for $|\\theta|<\\tfrac{\\pi}{2}$ — wrecks the count. Taking the full cardioid gives $\\tfrac{3\\pi}{2}$ and the full circle gives $\\tfrac{9\\pi}{4}$; both miss the true $\\tfrac{5\\pi}{4}$.",
    "solutions": [
      {
        "name": "Switch boundaries at the intersection angle",
        "steps": [
          "Intersect: $1+\\cos\\theta=3\\cos\\theta\\Rightarrow\\cos\\theta=\\tfrac12\\Rightarrow\\theta=\\pm\\tfrac{\\pi}{3}.$ The circle $r=3\\cos\\theta$ is defined for $\\theta\\in[-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2}].$",
          "For $0\\le\\theta\\le\\tfrac{\\pi}{3}$ the inner radius is the cardioid (smaller $r$); for $\\tfrac{\\pi}{3}\\le\\theta\\le\\tfrac{\\pi}{2}$ it is the circle. Use symmetry about the $x$-axis (factor $2$).",
          "$A=2\\Big[\\tfrac12\\!\\int_0^{\\pi/3}(1+\\cos\\theta)^2\\,d\\theta+\\tfrac12\\!\\int_{\\pi/3}^{\\pi/2}(3\\cos\\theta)^2\\,d\\theta\\Big].$",
          "Evaluating: the cardioid half-integral $=\\tfrac{\\pi}{4}+\\tfrac{9\\sqrt3}{16}$ and the circle half-integral $=\\tfrac{3\\pi}{8}-\\tfrac{9\\sqrt3}{16}$; the $\\sqrt3$ pieces cancel and $A=2\\big(\\tfrac{\\pi}{4}+\\tfrac{3\\pi}{8}\\big)=\\boxed{\\dfrac{5\\pi}{4}}.$"
        ]
      },
      {
        "name": "Direct min-radius integral",
        "steps": [
          "Inside both means $r\\le\\min(1+\\cos\\theta,\\,3\\cos\\theta)$ on $[-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2}]$; the min is the cardioid on $|\\theta|\\le\\tfrac{\\pi}{3}$ and the circle on $\\tfrac{\\pi}{3}\\le|\\theta|\\le\\tfrac{\\pi}{2}.$",
          "$A=\\int_{-\\pi/3}^{\\pi/3}\\tfrac12(1+\\cos\\theta)^2\\,d\\theta+2\\!\\int_{\\pi/3}^{\\pi/2}\\tfrac12(3\\cos\\theta)^2\\,d\\theta.$",
          "Using $\\int(1+\\cos\\theta)^2\\,d\\theta=\\tfrac32\\theta+2\\sin\\theta+\\tfrac14\\sin2\\theta$ and $\\int 9\\cos^2\\theta\\,d\\theta=\\tfrac92\\theta+\\tfrac94\\sin2\\theta$, evaluate at the limits.",
          "The cardioid term gives $\\tfrac{\\pi}{2}+\\tfrac{9\\sqrt3}{8}$ and the circle term gives $\\tfrac{3\\pi}{4}-\\tfrac{9\\sqrt3}{8}$; the $\\sqrt3$ terms cancel and $A=\\boxed{\\dfrac{5\\pi}{4}}.$"
        ]
      }
    ],
    "remark": "Insight: the intersection-of-two-polar-regions is a genuine two-mechanism problem — you must know which curve is the binding constraint on each angular sub-interval. The miraculous cancellation of all $\\sqrt3$ pieces, leaving the pure $\\tfrac{5\\pi}{4}$, is the reward for getting the switch at $\\theta=\\tfrac{\\pi}{3}$ exactly right."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Loop and Its Widest Reach",
    "difficulty": 5,
    "task": "Find the area, then the maximum",
    "tags": [
      "parametric",
      "loop-area",
      "optimisation",
      "vertical-chord"
    ],
    "statement": "The curve $x=t^2,\\ y=t^3-3t$ crosses itself and bounds one loop. \\[\\text{Find the area enclosed by the loop, and the maximum length of a vertical chord of the loop.}\\]",
    "answer": "\\[\\boxed{\\text{area}=\\dfrac{24\\sqrt3}{5},\\quad \\ell_{\\max}=4}\\]",
    "trap": "Two genuine hazards, both about pinning the geometry down before any algebra. (1) The self-intersection is at $t=\\pm\\sqrt3$ (both map to $(3,0)$); the leftmost point $(0,0)$ at $t=0$ is an ordinary point, not the node. A student who mistakes $t=0$ for the crossing integrates over $t\\in[0,\\sqrt3]$ and gets $\\tfrac{12\\sqrt3}{5}$, exactly HALF the loop. (2) The vertical chord spans BOTH branches across the $x$-axis, so its length is $2\\,|y|=2\\sqrt x\\,(3-x)$; reporting the upper-branch height alone gives $\\max|y|=2$ at $x=1$ and answers $2$ instead of the true full chord $4$. The missing factor of $2$ — not the location of the maximum — is the whole point.",
    "solutions": [
      {
        "name": "Parametric shoelace area, then Cartesian chord",
        "steps": [
          "Node: $x(t_1)=x(t_2)$ forces $t_2=-t_1$, and $y(-t_1)=y(t_1)$ gives $-t_1^3+3t_1=t_1^3-3t_1$, i.e. $t_1(t_1^2-3)=0$. The distinct-parameter crossing is $t=\\pm\\sqrt3\\to(3,0)$, so the loop is $t\\in[-\\sqrt3,\\sqrt3]$ (the point $t=0\\to(0,0)$ is just its leftmost tip).",
          "Green's theorem: $\\text{area}=\\tfrac12\\Big|\\int_{-\\sqrt3}^{\\sqrt3}(x\\,y'-y\\,x')\\,dt\\Big|$. Here $x\\,y'-y\\,x'=t^2(3t^2-3)-(t^3-3t)(2t)=t^4+3t^2=t^2(t^2+3)$, so $\\text{area}=\\tfrac12\\int_{-\\sqrt3}^{\\sqrt3}(t^4+3t^2)\\,dt=\\tfrac{24\\sqrt3}{5}.$",
          "Eliminate $t$: from $x=t^2$, $y=t(t^2-3)$ gives $y^2=x(x-3)^2$. So at each $x\\in[0,3]$ the loop carries the two ordinates $y=\\pm\\sqrt x\\,(3-x)$, and the vertical chord between them has length $\\ell(x)=2\\sqrt x\\,(3-x).$",
          "$\\dfrac{d}{dx}\\big[\\sqrt x(3-x)\\big]=\\dfrac{3-3x}{2\\sqrt x}=0\\Rightarrow x=1$ (interior; $\\ell=0$ at $x=0,3$), giving $\\ell_{\\max}=2\\cdot1\\cdot2=4.$ Hence $\\boxed{\\text{area}=\\tfrac{24\\sqrt3}{5},\\ \\ell_{\\max}=4}.$"
        ]
      },
      {
        "name": "Cartesian band for area and chord together",
        "steps": [
          "The relation $y^2=x(x-3)^2$ describes the loop on $x\\in[0,3]$ as two arcs $y=\\pm\\sqrt x\\,(3-x)$ symmetric about the $x$-axis, meeting at the node $(3,0)$ and the tip $(0,0)$.",
          "Area $=2\\displaystyle\\int_0^3\\sqrt x\\,(3-x)\\,dx=2\\Big[3\\cdot\\tfrac{2}{3}x^{3/2}-\\tfrac{2}{5}x^{5/2}\\Big]_0^3=2\\Big(2\\cdot3^{3/2}-\\tfrac25\\,3^{5/2}\\Big)=\\tfrac{24\\sqrt3}{5}.$",
          "By symmetry the vertical chord at abscissa $x$ is $\\ell(x)=2\\sqrt x\\,(3-x)$. Maximise $\\ell^2=4x(3-x)^2$: $\\dfrac{d}{dx}\\big[x(3-x)^2\\big]=(3-x)(3-3x)=0\\Rightarrow x=1$ (the root $x=3$ gives the degenerate $\\ell=0$).",
          "Thus $\\ell_{\\max}=2\\sqrt1\\,(3-1)=4.$ Therefore $\\boxed{\\text{area}=\\tfrac{24\\sqrt3}{5},\\ \\ell_{\\max}=4}.$"
        ]
      }
    ],
    "remark": "Insight: the capstone fuses three mechanisms — a parametric shoelace integral, the Cartesian band $y^2=x(x-3)^2$, and a chord optimisation. The two judgement calls are both pre-algebraic: correctly placing the node at $t=\\pm\\sqrt3$ (so the loop is $t\\in[-\\sqrt3,\\sqrt3]$, not $[0,\\sqrt3]$, which would halve the area to $\\tfrac{12\\sqrt3}{5}$), and reading the vertical chord as the FULL span $2\\sqrt x(3-x)$ across both branches (peak $4$ at $x=1$), not the single-branch height $2$. Here the height-extremum and the chord-extremum happen to share $x=1$, so the optimisation is easy once the factor of $2$ is honoured — the trap is the factor, not the location."
  }
];
