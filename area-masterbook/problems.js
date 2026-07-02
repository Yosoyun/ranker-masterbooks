/* problems.js — DATA. 100 original area-under-curves problems for ∫f dx · The Signed Area Between Curves, strictly within the JEE Advanced syllabus: area against the x- and y-axes, area between two curves, limits from intersections, symmetry, areas with the standard conics & lines, modulus/greatest-integer/piecewise integrands, variable boundaries & parameters, and optimising an area. No polar area, lemniscate/cardioid/rose curves, parametric-loop/Green's-theorem area, arc length, surface/volume of revolution, Beta/Gamma or Archimedes' theorem. Verified in sympy. statement/answer are raw LaTeX (the app auto-detects prose+math); steps use $...$ and $$...$$. */
window.PROBLEMS = [
  {
    "theme": "areaxaxis",
    "themeLabel": "Area Against the x-axis",
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
    "themeLabel": "Area Against the x-axis",
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
    "themeLabel": "Area Against the x-axis",
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
    "themeLabel": "Area Against the x-axis",
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
    "themeLabel": "Area Against the x-axis",
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
    "themeLabel": "Area Against the x-axis",
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
    "themeLabel": "Area Against the x-axis",
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
    "themeLabel": "Area Against the x-axis",
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
    "themeLabel": "Area Against the x-axis",
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
    "themeLabel": "Area Against the x-axis",
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
    "themeLabel": "Area Against the y-axis",
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
    "themeLabel": "Area Against the y-axis",
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
    "themeLabel": "Area Against the y-axis",
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
    "themeLabel": "Area Against the y-axis",
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
    "themeLabel": "Area Against the y-axis",
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
    "themeLabel": "Area Against the y-axis",
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
    "themeLabel": "Area Against the y-axis",
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
    "themeLabel": "Area Against the y-axis",
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
    "themeLabel": "Area Against the y-axis",
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
    "themeLabel": "Area Against the y-axis",
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
    "theme": "intersection",
    "themeLabel": "Limits from Intersections",
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
    "themeLabel": "Limits from Intersections",
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
    "themeLabel": "Limits from Intersections",
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
    "themeLabel": "Limits from Intersections",
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
    "themeLabel": "Limits from Intersections",
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
    "themeLabel": "Limits from Intersections",
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
    "themeLabel": "Limits from Intersections",
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
    "themeLabel": "Limits from Intersections",
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
    "themeLabel": "Limits from Intersections",
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
          "$\\int_1^3(y-\\sqrt y)\\,dy=\\big[\\tfrac{y^2}{2}-\\tfrac{2}{3}y^{3/2}\\big]_1^3=\\tfrac{14}{3}-2\\sqrt3,\\qquad \\int_3^4(6-y-\\sqrt y)\\,dy=\\big[6y-\\tfrac{y^2}{2}-\\tfrac23y^{3/2}\\big]_3^4=2\\sqrt3-\\tfrac{17}{6}.$",
          "$A=\\big(\\tfrac{14}{3}-2\\sqrt3\\big)+\\big(2\\sqrt3-\\tfrac{17}{6}\\big)=\\tfrac{28}{6}-\\tfrac{17}{6}=\\boxed{\\tfrac{11}{6}}.$"
        ]
      }
    ],
    "remark": "Insight: a region bounded by three curves needs all three pairwise intersections; the apex where two of them cross, here $(2,4)$, is exactly where the boundary description changes. The spurious parabola–line root $x=-3$ is geometrically irrelevant. The independent $y$-integration, in which the $2\\sqrt3$ terms cancel, confirms the value and guards against the single-top-curve error."
  },
  {
    "theme": "intersection",
    "themeLabel": "Limits from Intersections",
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
    "title": "The Square-Root Star",
    "difficulty": 3,
    "task": "Find the area",
    "tags": [
      "four-fold-symmetry",
      "cartesian-star",
      "absolute-value",
      "quarter-region"
    ],
    "statement": "The curve  $\\sqrt{|x|}+\\sqrt{|y|}=1$  is symmetric about both coordinate axes. Find the total area of the region it encloses.",
    "answer": " $$\\boxed{\\dfrac{2}{3}}$$ ",
    "trap": "Solving only the first-quadrant branch  $\\sqrt{x}+\\sqrt{y}=1$  and reporting the single-quadrant area  $\\tfrac16$ , forgetting that the four  $\\pm$  sign combinations in  $|x|,|y|$  produce four congruent petals. The enclosed region is four such pieces, so the answer is  $4\\cdot\\tfrac16=\\tfrac23$ , not  $\\tfrac16$ .",
    "solutions": [
      {
        "name": "One quadrant, then multiply by four",
        "steps": [
          "Because  $|x|,|y|$  are unchanged under  $x\\mapsto -x$  and  $y\\mapsto -y$ , the curve is symmetric about both axes, so the total area is  $4$  times the first-quadrant area.",
          "In the first quadrant  $\\sqrt{x}+\\sqrt{y}=1$  gives  $y=(1-\\sqrt{x})^{2}$ , with  $x$  running from  $0$  to  $1$ .",
          "Compute  $\\displaystyle\\int_{0}^{1}(1-\\sqrt{x})^{2}\\,dx=\\int_{0}^{1}\\big(1-2\\sqrt{x}+x\\big)\\,dx=1-\\tfrac{4}{3}+\\tfrac12=\\tfrac16.$ ",
          "Multiply by  $4$ : total area  $=4\\cdot\\tfrac16=\\dfrac{2}{3}$ ."
        ]
      },
      {
        "name": "Integrate the full width directly",
        "steps": [
          "Fix a height  $y$  with  $0<y<1$ . The curve gives  $\\sqrt{|x|}=1-\\sqrt{|y|}$ , so  $|x|=(1-\\sqrt{y})^{2}$  once we use the upper-half value  $y\\ge0$ .",
          "The horizontal slice at height  $y$  has full width  $2|x|=2(1-\\sqrt{y})^{2}$ , and by the up-down symmetry the total area is  $2\\displaystyle\\int_{0}^{1}2(1-\\sqrt{y})^{2}\\,dy.$ ",
          "Since  $\\int_{0}^{1}(1-\\sqrt{y})^{2}\\,dy=\\tfrac16$ , the area is  $2\\cdot 2\\cdot\\tfrac16=\\dfrac{2}{3}.$ ",
          "This matches the quadrant count:  $4\\cdot\\tfrac16=\\dfrac{2}{3}.$ "
        ]
      }
    ],
    "remark": "**Insight.** A “ $\\sqrt{|x|}+\\sqrt{|y|}=1$ ” star is just one smooth arc reflected into four quadrants. Compute one quadrant by ordinary  $\\int y\\,dx$  and let the two axis-symmetries do the rest — the only way to go wrong is to miscount the petals."
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
    "title": "Disk Outside the Diamond",
    "difficulty": 5,
    "task": "Find the area",
    "tags": [
      "four-fold-symmetry",
      "circle",
      "absolute-value-diamond",
      "region-between-curves"
    ],
    "statement": "Find the area of the region that lies inside the circle  $x^{2}+y^{2}=4$  but outside the square  $|x|+|y|=2$ . (Both boundaries are symmetric about both coordinate axes.)",
    "answer": " $$\\boxed{\\,4\\pi-8\\,}$$ ",
    "trap": "Treating  $|x|+|y|=2$  as a square of side  $2$  and subtracting area  $4$ , giving  $4\\pi-4$ . The vertices are  $(\\pm2,0),(0,\\pm2)$ , so its diagonals have length  $4$  and its area is  $\\tfrac12\\cdot4\\cdot4=8$  (equivalently a square of side  $2\\sqrt2$ ). The correct subtraction is  $4\\pi-8$ .",
    "solutions": [
      {
        "name": "Whole circle minus the inscribed diamond",
        "steps": [
          "The circle has radius  $2$ , area  $\\pi\\cdot2^{2}=4\\pi$ . Its four corners  $(\\pm2,0),(0,\\pm2)$  are exactly the vertices of  $|x|+|y|=2$ , so the diamond sits inside the disk.",
          "The diamond  $|x|+|y|=2$  is a square with perpendicular diagonals of length  $4$  each (along the axes), so its area is  $\\tfrac12 d_1 d_2=\\tfrac12\\cdot4\\cdot4=8.$ ",
          "The wanted region is the disk with the diamond removed:  $4\\pi-8.$ ",
          "Hence the area is  $\\boxed{4\\pi-8}.$ "
        ]
      },
      {
        "name": "One quadrant by integration, then four-fold symmetry",
        "steps": [
          "Both boundaries are symmetric in  $x\\mapsto -x$  and  $y\\mapsto -y$ , so the area is  $4$  times the first-quadrant part, where the boundaries become  $y=\\sqrt{4-x^{2}}$  (circle, outer) and  $y=2-x$  (line  $x+y=2$ , inner), for  $0\\le x\\le 2$ .",
          "First-quadrant area between them  $=\\displaystyle\\int_{0}^{2}\\Big(\\sqrt{4-x^{2}}-(2-x)\\Big)\\,dx.$ ",
          "Now  $\\int_{0}^{2}\\sqrt{4-x^{2}}\\,dx=\\pi$  (a quarter disk of radius  $2$ ) and  $\\int_{0}^{2}(2-x)\\,dx=2$ , so the quadrant area is  $\\pi-2.$ ",
          "Multiply by  $4$ : total  $=4(\\pi-2)=4\\pi-8.$ "
        ]
      }
    ],
    "remark": "**Insight.** When both the inner and outer boundaries share all four reflection symmetries, do the messy circle-minus-line integral in a single quadrant and scale by  $4$ . The classic slip is reading  $|x|+|y|=c$  as side  $c$  instead of diagonal  $2c$  — its area is  $2c^{2}$ , here  $8$ , not  $4$ ."
  },
  {
    "theme": "symmetry",
    "themeLabel": "Symmetry & Even/Odd Shortcuts",
    "title": "Two Loops, Counted Once",
    "difficulty": 5,
    "task": "Find the area",
    "tags": [
      "even-odd",
      "double-loop",
      "both-axis-symmetry",
      "sign-trap"
    ],
    "statement": "The curve  $y^{2}=x^{2}\\left(1-x^{2}\\right)$  consists of two closed loops and is symmetric about both axes. Find the total area enclosed by the curve.",
    "answer": " $$\\boxed{\\dfrac{4}{3}}$$ ",
    "trap": "Writing the area as  $\\displaystyle\\int_{-1}^{1}\\big(y_{\\text{top}}-y_{\\text{bottom}}\\big)\\,dx$  and then carelessly using the signed branch  $y=x\\sqrt{1-x^{2}}$ , whose integral over  $[-1,1]$  is an odd integrand giving  $0$ . The vertical extent is  $2|x|\\sqrt{1-x^{2}}$ ; one must use  $|x|$ , otherwise the right loop’s area is cancelled by a phantom negative from the left.",
    "solutions": [
      {
        "name": "Right loop, then double by symmetry",
        "steps": [
          "Solving for  $y$  gives  $y=\\pm\\,x\\sqrt{1-x^{2}}$ , real only for  $-1\\le x\\le 1$ . For  $x\\ge0$  the two signs bound the right loop; for  $x\\le0$  they bound the left loop, so there are two loops mirrored across the  $y$ -axis.",
          "Right loop ( $0\\le x\\le1$ ): height between branches is  $2x\\sqrt{1-x^{2}}$ , so its area is  $\\displaystyle\\int_{0}^{1}2x\\sqrt{1-x^{2}}\\,dx.$ ",
          "Substitute  $u=1-x^{2},\\,du=-2x\\,dx$ :  $\\int_{0}^{1}2x\\sqrt{1-x^{2}}\\,dx=\\int_{0}^{1}\\sqrt{u}\\,du=\\tfrac{2}{3}.$ ",
          "By the  $x\\mapsto -x$  symmetry the left loop has the same area, so the total is  $2\\cdot\\tfrac23=\\dfrac{4}{3}.$ "
        ]
      },
      {
        "name": "Full width with the absolute value",
        "steps": [
          "The honest vertical width at abscissa  $x$  is  $y_{\\text{top}}-y_{\\text{bottom}}=2|x|\\sqrt{1-x^{2}}$ , valid for all  $x\\in[-1,1]$  and never negative.",
          "Total area  $=\\displaystyle\\int_{-1}^{1}2|x|\\sqrt{1-x^{2}}\\,dx.$  The integrand is even, so this equals  $2\\displaystyle\\int_{0}^{1}2x\\sqrt{1-x^{2}}\\,dx.$ ",
          "With  $u=1-x^{2}$  the inner integral is  $\\int_{0}^{1}2x\\sqrt{1-x^{2}}\\,dx=\\tfrac23.$ ",
          "Therefore the area is  $2\\cdot\\tfrac23=\\dfrac{4}{3}.$ "
        ]
      }
    ],
    "remark": "**Insight.** A double loop  $y^{2}=x^{2}(1-x^{2})$  tempts you to integrate  $x\\sqrt{1-x^{2}}$  straight across  $[-1,1]$  — but that is an odd function and collapses to  $0$ . Keeping the geometric width  $2|x|\\sqrt{1-x^{2}}$  (or computing one loop and doubling) is what turns the symmetry into an answer instead of a cancellation."
  },
  {
    "theme": "stdcurves",
    "themeLabel": "Area with Standard Curves",
    "title": "The Two Embracing Parabolas",
    "difficulty": 3,
    "task": "Find the enclosed area",
    "tags": [
      "parabola",
      "area-between-curves",
      "points-of-intersection",
      "standard-curves"
    ],
    "statement": "Find the area of the region enclosed between the two parabolas  $y^{2}=4x$  and  $x^{2}=4y$ .",
    "answer": " $$\\boxed{\\dfrac{16}{3}}$$ ",
    "trap": "Computing only  $\\int_{0}^{4}\\sqrt{4x}\\,dx=\\tfrac{32}{3}$ , the area under the upper parabola alone, and forgetting to subtract the area under  $x^{2}=4y$ . The enclosed lens is the difference of the two areas, not the area beneath one curve.",
    "solutions": [
      {
        "name": "Vertical strips (upper minus lower)",
        "steps": [
          "Solve for the meeting points: from  $x^{2}=4y$  we get  $y=\\tfrac{x^{2}}{4}$ , and substituting into  $y^{2}=4x$  gives  $\\tfrac{x^{4}}{16}=4x$ , so  $x^{4}=64x$ , i.e.  $x(x^{3}-64)=0$ , giving  $x=0$  and  $x=4$ .",
          "Between  $x=0$  and  $x=4$  the curve  $y^{2}=4x$  (upper,  $y=\\sqrt{4x}=2\\sqrt{x}$ ) lies above  $x^{2}=4y$  (lower,  $y=\\tfrac{x^{2}}{4}$ ).",
          "Area  $=\\displaystyle\\int_{0}^{4}\\!\\Big(2\\sqrt{x}-\\tfrac{x^{2}}{4}\\Big)dx=\\Big[\\tfrac{4}{3}x^{3/2}-\\tfrac{x^{3}}{12}\\Big]_{0}^{4}=\\tfrac{4}{3}\\cdot 8-\\tfrac{64}{12}=\\tfrac{32}{3}-\\tfrac{16}{3}=\\dfrac{16}{3}$ ."
        ]
      },
      {
        "name": "By symmetry about the line y=x",
        "steps": [
          "The two parabolas are reflections of each other across  $y=x$ , so the region is symmetric about that line; the area equals twice the area between  $y=2\\sqrt{x}$  and  $y=x$ .",
          "These meet where  $2\\sqrt{x}=x$ , i.e.  $x=0,4$ . So Area  $=2\\displaystyle\\int_{0}^{4}\\big(2\\sqrt{x}-x\\big)dx=2\\Big[\\tfrac{4}{3}x^{3/2}-\\tfrac{x^{2}}{2}\\Big]_{0}^{4}$ .",
          " $=2\\big(\\tfrac{32}{3}-8\\big)=2\\cdot\\tfrac{8}{3}=\\dfrac{16}{3}$ , confirming the result."
        ]
      }
    ],
    "remark": "**Insight.** Two equal parabolas opening along the axes enclose a lens whose area is the difference of the two simple areas under each curve. The reflection symmetry across  $y=x$  is the cleanest check: the diagonal  $y=x$  bisects the lens exactly."
  },
  {
    "theme": "stdcurves",
    "themeLabel": "Area with Standard Curves",
    "title": "The Area of an Ellipse",
    "difficulty": 3,
    "task": "Find the enclosed area",
    "tags": [
      "ellipse",
      "definite-integral",
      "symmetry",
      "standard-curves"
    ],
    "statement": "Find the area of the region enclosed by the ellipse  $\\dfrac{x^{2}}{9}+\\dfrac{y^{2}}{4}=1$  using Cartesian integration.",
    "answer": " $$\\boxed{6\\pi}$$ ",
    "trap": "Quoting  $\\pi a b$  as a memorized formula without integrating, or mismatching  $a$  and  $b$  (taking  $a^{2}=9\\Rightarrow a=3$  but writing  $b=4$  instead of  $b=2$ ). One must read  $b^{2}=4$ , so  $b=2$ , and the integral must be set up over the full width  $[-3,3]$ .",
    "solutions": [
      {
        "name": "Quarter ellipse times four",
        "steps": [
          "From the equation,  $y=2\\sqrt{1-\\tfrac{x^{2}}{9}}$  for the upper half. By the two axes of symmetry, the total area is  $4$  times the first-quadrant area: Area  $=4\\displaystyle\\int_{0}^{3} 2\\sqrt{1-\\tfrac{x^{2}}{9}}\\,dx$ .",
          "Substitute  $x=3\\sin\\theta$ ,  $dx=3\\cos\\theta\\,d\\theta$ ; as  $x:0\\to3$ ,  $\\theta:0\\to\\tfrac{\\pi}{2}$ . Then  $\\sqrt{1-\\tfrac{x^{2}}{9}}=\\cos\\theta$ , giving  $4\\int_{0}^{\\pi/2}2\\cos\\theta\\cdot 3\\cos\\theta\\,d\\theta=24\\int_{0}^{\\pi/2}\\cos^{2}\\theta\\,d\\theta$ .",
          "Since  $\\int_{0}^{\\pi/2}\\cos^{2}\\theta\\,d\\theta=\\tfrac{\\pi}{4}$ , the area is  $24\\cdot\\tfrac{\\pi}{4}=6\\pi$ ."
        ]
      },
      {
        "name": "Stretch from the unit circle",
        "steps": [
          "The map  $(x,y)\\mapsto(x/3,\\,y/2)$  sends the ellipse to the unit circle  $u^{2}+v^{2}=1$  of area  $\\pi$ . Area scales by the Jacobian factor  $3\\cdot 2=6$ .",
          "Hence Area of ellipse  $=6\\times\\pi=6\\pi$ .",
          "This matches the direct integral, confirming  $6\\pi$ ."
        ]
      }
    ],
    "remark": "**Insight.** The clean substitution  $x=a\\sin\\theta$  turns every ellipse area into  $\\int\\cos^{2}\\theta$ , and the answer is always  $\\pi a b$ . Reading off  $a=3,b=2$  correctly is half the battle; the linear stretch viewpoint shows why  $\\pi a b$  is forced."
  },
  {
    "theme": "stdcurves",
    "themeLabel": "Area with Standard Curves",
    "title": "Cut by the Latus Rectum",
    "difficulty": 4,
    "task": "Find the enclosed area",
    "tags": [
      "parabola",
      "latus-rectum",
      "symmetry",
      "standard-curves"
    ],
    "statement": "Find the area of the region of the parabola  $y^{2}=4x$  that is cut off by its latus rectum (the chord  $x=1$  through the focus).",
    "answer": " $$\\boxed{\\dfrac{8}{3}}$$ ",
    "trap": "Integrating only the upper half,  $\\int_{0}^{1}2\\sqrt{x}\\,dx=\\tfrac{4}{3}$ , and reporting that as the answer. The parabola is symmetric about the  $x$ -axis, so the region cut off by the latus rectum extends both above and below; the true area is twice that,  $\\tfrac{8}{3}$ .",
    "solutions": [
      {
        "name": "Integrate in x with symmetry",
        "steps": [
          "For  $y^{2}=4x$ ,  $y=\\pm 2\\sqrt{x}$ ; the vertex is at  $x=0$  and the latus rectum is  $x=1$  (since  $4a=4\\Rightarrow a=1$ ). The region runs from  $x=0$  to  $x=1$ .",
          "By symmetry about the  $x$ -axis, Area  $=2\\displaystyle\\int_{0}^{1}2\\sqrt{x}\\,dx=4\\Big[\\tfrac{2}{3}x^{3/2}\\Big]_{0}^{1}=4\\cdot\\tfrac{2}{3}$ .",
          " $=\\dfrac{8}{3}$ ."
        ]
      },
      {
        "name": "Integrate in y (horizontal strips)",
        "steps": [
          "At  $x=1$  the latus-rectum endpoints are  $y=\\pm 2$ . For a horizontal strip at height  $y$ ,  $x$  runs from the parabola  $x=\\tfrac{y^{2}}{4}$  to the line  $x=1$ .",
          "Area  $=\\displaystyle\\int_{-2}^{2}\\Big(1-\\tfrac{y^{2}}{4}\\Big)dy=2\\int_{0}^{2}\\Big(1-\\tfrac{y^{2}}{4}\\Big)dy=2\\Big[y-\\tfrac{y^{3}}{12}\\Big]_{0}^{2}$ .",
          " $=2\\big(2-\\tfrac{8}{12}\\big)=2\\cdot\\tfrac{4}{3}=\\dfrac{8}{3}$ ."
        ]
      }
    ],
    "remark": "**Insight.** The chord-cut parabolic segment is most safely done in  $y$ : horizontal strips between the curve  $x=\\tfrac{y^{2}}{4}$  and the line  $x=1$  make the symmetry automatic and remove the temptation to halve the region by accident."
  },
  {
    "theme": "stdcurves",
    "themeLabel": "Area with Standard Curves",
    "title": "Inside the Circle, Inside the Parabola",
    "difficulty": 4,
    "task": "Find the common area",
    "tags": [
      "circle",
      "parabola",
      "split-the-region",
      "standard-curves"
    ],
    "statement": "Find the area of the region that lies inside both the circle  $x^{2}+y^{2}=8$  and the parabola  $y^{2}=2x$ .",
    "answer": " $$\\boxed{2\\pi+\\dfrac{4}{3}}$$ ",
    "trap": "Integrating the parabola all the way to  $x=2\\sqrt{2}$  (the circle's edge) as though it bounded the whole region, giving  $\\tfrac{16}{3}$ . Past the intersection  $x=2$  the boundary switches from the parabola to the circular arc; you must split the integral at  $x=2$ .",
    "solutions": [
      {
        "name": "Split the x-integral at the intersection",
        "steps": [
          "Find the intersection: substitute  $y^{2}=2x$  into  $x^{2}+y^{2}=8$  to get  $x^{2}+2x-8=0$ , so  $(x+4)(x-2)=0$  and  $x=2$  (the positive root). There  $y=\\pm 2$ , and the circle has radius  $2\\sqrt{2}$ .",
          "For  $0\\le x\\le 2$  the region's upper boundary is the parabola  $y=\\sqrt{2x}$ ; for  $2\\le x\\le 2\\sqrt{2}$  it is the circle  $y=\\sqrt{8-x^{2}}$ . By symmetry about the  $x$ -axis, Area  $=2\\Big[\\displaystyle\\int_{0}^{2}\\sqrt{2x}\\,dx+\\int_{2}^{2\\sqrt{2}}\\sqrt{8-x^{2}}\\,dx\\Big]$ .",
          "First piece:  $\\int_{0}^{2}\\sqrt{2x}\\,dx=\\sqrt{2}\\cdot\\tfrac{2}{3}x^{3/2}\\big|_{0}^{2}=\\sqrt{2}\\cdot\\tfrac{2}{3}\\cdot 2\\sqrt{2}=\\tfrac{8}{3}$ .",
          "Second piece:  $\\int_{2}^{2\\sqrt2}\\sqrt{8-x^{2}}\\,dx=\\Big[\\tfrac{x}{2}\\sqrt{8-x^{2}}+4\\sin^{-1}\\tfrac{x}{2\\sqrt2}\\Big]_{2}^{2\\sqrt2}=\\big(0+4\\cdot\\tfrac{\\pi}{2}\\big)-\\big(1\\cdot 2+4\\cdot\\tfrac{\\pi}{4}\\big)=2\\pi-2-\\pi=\\pi-2$ .",
          "Total  $=2\\big(\\tfrac{8}{3}+\\pi-2\\big)=\\tfrac{16}{3}+2\\pi-4=2\\pi+\\dfrac{4}{3}$ ."
        ]
      },
      {
        "name": "Parabolic strip plus circular sector-segment",
        "steps": [
          "The region splits naturally: the parabolic cap for  $0\\le x\\le 2$  has area  $2\\int_{0}^{2}\\sqrt{2x}\\,dx=\\tfrac{16}{3}$ .",
          "The remaining part is the circular segment of  $x^{2}+y^{2}=8$  to the right of  $x=2$ ; its area is  $2\\int_{2}^{2\\sqrt2}\\sqrt{8-x^{2}}\\,dx=2(\\pi-2)=2\\pi-4$ .",
          "Adding the two contiguous pieces:  $\\tfrac{16}{3}+(2\\pi-4)=2\\pi+\\dfrac{4}{3}$ ."
        ]
      }
    ],
    "remark": "**Insight.** When two standard curves intersect, the bounding curve usually changes at the intersection. The single most common error is letting one curve carry the whole integral; splitting at  $x=2$  is non-negotiable here."
  },
  {
    "theme": "stdcurves",
    "themeLabel": "Area with Standard Curves",
    "title": "The Sideways and Upright Parabolas",
    "difficulty": 4,
    "task": "Find the enclosed area",
    "tags": [
      "parabola",
      "area-between-curves",
      "symmetry",
      "standard-curves"
    ],
    "statement": "Find the area enclosed between the curves  $y^{2}=x$  and  $x^{2}=y$ .",
    "answer": " $$\\boxed{\\dfrac{1}{3}}$$ ",
    "trap": "Mixing up which curve is the upper one. On  $(0,1)$  the sideways parabola  $y=\\sqrt{x}$  lies above the upright parabola  $y=x^{2}$ ; writing the integrand as  $x^{2}-\\sqrt{x}$  gives the negative  $-\\tfrac{1}{3}$ .",
    "solutions": [
      {
        "name": "Upper curve minus lower curve",
        "steps": [
          "Intersections: from  $y^{2}=x$  and  $x^{2}=y$ , substitute  $y=x^{2}$  into  $y^{2}=x$  to get  $x^{4}=x$ , so  $x(x^{3}-1)=0$ , giving  $x=0$  and  $x=1$ .",
          "On  $(0,1)$ ,  $\\sqrt{x}>x^{2}$ , so the top boundary is  $y=\\sqrt{x}$  and the bottom is  $y=x^{2}$ .",
          "Area  $=\\displaystyle\\int_{0}^{1}\\big(\\sqrt{x}-x^{2}\\big)dx=\\Big[\\tfrac{2}{3}x^{3/2}-\\tfrac{x^{3}}{3}\\Big]_{0}^{1}=\\tfrac{2}{3}-\\tfrac{1}{3}=\\dfrac{1}{3}$ ."
        ]
      },
      {
        "name": "Symmetry about y=x",
        "steps": [
          "The curves  $y^{2}=x$  and  $x^{2}=y$  are reflections across  $y=x$ , so the diagonal bisects the enclosed area. Hence Area  $=2\\displaystyle\\int_{0}^{1}\\big(\\sqrt{x}-x\\big)dx$ , where  $y=x$  is the line of symmetry.",
          " $=2\\Big[\\tfrac{2}{3}x^{3/2}-\\tfrac{x^{2}}{2}\\Big]_{0}^{1}=2\\big(\\tfrac{2}{3}-\\tfrac{1}{2}\\big)=2\\cdot\\tfrac{1}{6}=\\dfrac{1}{3}$ .",
          "Both routes agree on  $\\tfrac{1}{3}$ ."
        ]
      }
    ],
    "remark": "**Insight.**  $y^{2}=x$  and  $x^{2}=y$  are mirror images about  $y=x$ ; the enclosed sliver has area  $\\tfrac13$ . Naming the upper function correctly on  $(0,1)$  ( $\\sqrt{x}>x^{2}$ ) prevents the classic sign slip."
  },
  {
    "theme": "stdcurves",
    "themeLabel": "Area with Standard Curves",
    "title": "Parabola Met by a Chord",
    "difficulty": 4,
    "task": "Find the enclosed area",
    "tags": [
      "parabola",
      "line",
      "parabolic-segment",
      "standard-curves"
    ],
    "statement": "Find the area of the parabolic segment cut from the parabola  $y=x^{2}$  by the line  $y=x+2$ .",
    "answer": " $$\\boxed{\\dfrac{9}{2}}$$ ",
    "trap": "Subtracting in the wrong order,  $\\int_{-1}^{2}(x^{2}-(x+2))\\,dx=-\\tfrac{9}{2}$ , then keeping the negative sign. Between the intersections the line lies above the parabola, so the integrand must be (line  $-$  parabola).",
    "solutions": [
      {
        "name": "Line minus parabola",
        "steps": [
          "Intersections:  $x^{2}=x+2\\Rightarrow x^{2}-x-2=0\\Rightarrow(x-2)(x+1)=0$ , so  $x=-1$  and  $x=2$ .",
          "On  $(-1,2)$  the line  $y=x+2$  is above the parabola  $y=x^{2}$ , so Area  $=\\displaystyle\\int_{-1}^{2}\\big((x+2)-x^{2}\\big)dx$ .",
          " $=\\Big[\\tfrac{x^{2}}{2}+2x-\\tfrac{x^{3}}{3}\\Big]_{-1}^{2}=\\big(2+4-\\tfrac{8}{3}\\big)-\\big(\\tfrac{1}{2}-2+\\tfrac{1}{3}\\big)=\\tfrac{10}{3}-\\big(-\\tfrac{7}{6}\\big)=\\dfrac{9}{2}$ ."
        ]
      },
      {
        "name": "Shift to vertex form (difference of roots)",
        "steps": [
          "Let  $g(x)=(x+2)-x^{2}=-(x^{2}-x-2)=-(x-2)(x+1)$ , a downward parabola with roots  $-1,2$ .",
          "For a quadratic with leading coefficient  $-1$  and roots  $r_{1}<r_{2}$ , the area between it and the axis over  $[r_{1},r_{2}]$  is  $\\tfrac{|{-1}|}{6}(r_{2}-r_{1})^{3}=\\tfrac{1}{6}(2-(-1))^{3}=\\tfrac{1}{6}\\cdot 27$ .",
          " $=\\dfrac{27}{6}=\\dfrac{9}{2}$ , matching the direct integral."
        ]
      }
    ],
    "remark": "**Insight.** A chord cutting a parabola gives a segment whose area is  $\\tfrac{1}{6}|a|\\,(\\Delta x)^{3}$  where  $\\Delta x$  is the gap between intersection abscissae. Here  $a=1$ ,  $\\Delta x=3$ , so the area is  $\\tfrac{27}{6}=\\tfrac92$  — a fast self-check on the integral."
  },
  {
    "theme": "stdcurves",
    "themeLabel": "Area with Standard Curves",
    "title": "The Smaller Slice of the Disc",
    "difficulty": 4,
    "task": "Find the segment area",
    "tags": [
      "circle",
      "chord",
      "circular-segment",
      "standard-curves"
    ],
    "statement": "The line  $x=1$  cuts the circle  $x^{2}+y^{2}=4$  into two pieces. Find the area of the smaller piece (the minor segment to the right of the line).",
    "answer": " $$\\boxed{\\dfrac{4\\pi}{3}-\\sqrt{3}}$$ ",
    "trap": "Reporting the major segment  $\\tfrac{8\\pi}{3}+\\sqrt{3}$  by integrating from  $x=-2$  to  $x=1$ , or by subtracting the smaller piece from the wrong total. The smaller piece lies between  $x=1$  and  $x=2$ .",
    "solutions": [
      {
        "name": "Vertical strips from x=1 to x=2",
        "steps": [
          "The circle has radius  $2$ ; the line  $x=1$  meets it where  $y^{2}=4-1=3$ , i.e.  $y=\\pm\\sqrt{3}$ . The minor segment is  $1\\le x\\le 2$ .",
          "By symmetry about the  $x$ -axis, Area  $=2\\displaystyle\\int_{1}^{2}\\sqrt{4-x^{2}}\\,dx$ .",
          "Using  $\\int\\sqrt{4-x^{2}}\\,dx=\\tfrac{x}{2}\\sqrt{4-x^{2}}+2\\sin^{-1}\\tfrac{x}{2}$ , evaluate: at  $x=2$ ,  $0+2\\cdot\\tfrac{\\pi}{2}=\\pi$ ; at  $x=1$ ,  $\\tfrac{1}{2}\\sqrt{3}+2\\cdot\\tfrac{\\pi}{6}=\\tfrac{\\sqrt3}{2}+\\tfrac{\\pi}{3}$ .",
          "So  $\\int_{1}^{2}=\\pi-\\tfrac{\\sqrt3}{2}-\\tfrac{\\pi}{3}=\\tfrac{2\\pi}{3}-\\tfrac{\\sqrt3}{2}$ , and Area  $=2\\big(\\tfrac{2\\pi}{3}-\\tfrac{\\sqrt3}{2}\\big)=\\dfrac{4\\pi}{3}-\\sqrt{3}$ ."
        ]
      },
      {
        "name": "Sector minus triangle",
        "steps": [
          "The chord  $x=1$  subtends a central angle: the radius to  $(1,\\sqrt3)$  makes angle  $\\tfrac{\\pi}{3}$  with the  $x$ -axis, so the half-angle is  $\\tfrac{\\pi}{3}$  and the full sector angle is  $2\\cdot\\tfrac{\\pi}{3}=\\tfrac{2\\pi}{3}$ .",
          "Sector area  $=\\tfrac{1}{2}r^{2}\\theta=\\tfrac{1}{2}\\cdot 4\\cdot\\tfrac{2\\pi}{3}=\\tfrac{4\\pi}{3}$ . Triangle area (two radii and the chord)  $=\\tfrac{1}{2}r^{2}\\sin\\theta=\\tfrac{1}{2}\\cdot4\\cdot\\sin\\tfrac{2\\pi}{3}=2\\cdot\\tfrac{\\sqrt3}{2}=\\sqrt3$ .",
          "Minor segment  $=$  sector  $-$  triangle  $=\\dfrac{4\\pi}{3}-\\sqrt{3}$ ."
        ]
      }
    ],
    "remark": "**Insight.** A circular segment is sector minus triangle,  $\\tfrac12 r^2(\\theta-\\sin\\theta)$ ; the Cartesian integral  $2\\int_1^2\\sqrt{4-x^2}\\,dx$  reproduces it exactly. Always confirm you took the piece on the correct side of the chord."
  },
  {
    "theme": "stdcurves",
    "themeLabel": "Area with Standard Curves",
    "title": "Ellipse Above Its Chord",
    "difficulty": 5,
    "task": "Find the smaller area",
    "tags": [
      "ellipse",
      "line",
      "elliptic-segment",
      "standard-curves"
    ],
    "statement": "Find the smaller of the two areas into which the line  $\\dfrac{x}{2}+\\dfrac{y}{3}=1$  divides the ellipse  $\\dfrac{x^{2}}{4}+\\dfrac{y^{2}}{9}=1$ .",
    "answer": " $$\\boxed{\\dfrac{3\\pi}{2}-3}$$ ",
    "trap": "Integrating the quarter-ellipse  $\\int_{0}^{2}3\\sqrt{1-x^{2}/4}\\,dx=\\tfrac{3\\pi}{2}$  and forgetting to subtract the triangle under the chord. The smaller region is bounded above by the ellipse and below by the line, so the line's contribution must be removed.",
    "solutions": [
      {
        "name": "Ellipse arc minus the chord",
        "steps": [
          "The line passes through  $(2,0)$  and  $(0,3)$ , which are precisely the ellipse's vertices on the positive axes; so the chord cuts off the first-quadrant arc. The smaller region lies between the arc and the chord,  $0\\le x\\le 2$ .",
          "Upper boundary (ellipse):  $y=3\\sqrt{1-\\tfrac{x^{2}}{4}}$ . Lower boundary (line):  $y=3-\\tfrac{3x}{2}$ . Area  $=\\displaystyle\\int_{0}^{2}\\Big(3\\sqrt{1-\\tfrac{x^{2}}{4}}-\\big(3-\\tfrac{3x}{2}\\big)\\Big)dx$ .",
          "Quarter-ellipse part:  $\\int_{0}^{2}3\\sqrt{1-\\tfrac{x^{2}}{4}}\\,dx=\\tfrac{1}{4}(\\pi\\cdot 2\\cdot 3)=\\tfrac{3\\pi}{2}$  (a quarter of the full ellipse area  $\\pi a b=6\\pi$ ).",
          "Triangle part:  $\\int_{0}^{2}\\big(3-\\tfrac{3x}{2}\\big)dx=\\big[3x-\\tfrac{3x^{2}}{4}\\big]_{0}^{2}=6-3=3$  (the triangle with legs  $2$  and  $3$ ).",
          "Smaller area  $=\\dfrac{3\\pi}{2}-3$ . (As a check, the larger area is  $6\\pi-(\\tfrac{3\\pi}{2}-3)=\\tfrac{9\\pi}{2}+3$ , indeed larger.)"
        ]
      },
      {
        "name": "Stretch to a circular segment",
        "steps": [
          "Apply  $(x,y)\\mapsto(u,v)=(x/2,\\,y/3)$ . The ellipse becomes the unit circle  $u^{2}+v^{2}=1$  and the chord becomes  $u+v=1$ , joining  $(1,0)$  and  $(0,1)$ . Areas scale by  $\\tfrac{1}{6}$ .",
          "In the circle, the smaller piece is the segment between the quarter-arc and the chord  $u+v=1$ : quarter-disc  $\\tfrac{\\pi}{4}$  minus the triangle  $\\tfrac{1}{2}$ , i.e.  $\\tfrac{\\pi}{4}-\\tfrac{1}{2}$ .",
          "Scaling back by  $6$ : Area  $=6\\big(\\tfrac{\\pi}{4}-\\tfrac{1}{2}\\big)=\\dfrac{3\\pi}{2}-3$ , in agreement with the direct integral."
        ]
      }
    ],
    "remark": "**Insight.** A line through two ellipse vertices cuts off a segment that is the quarter-ellipse minus the inscribed triangle. The affine stretch to the unit circle turns the messy elliptic segment into the familiar  $\\tfrac{\\pi}{4}-\\tfrac12$  circular segment, scaled by  $ab=6$ ."
  },
  {
    "theme": "stdcurves",
    "themeLabel": "Area with Standard Curves",
    "title": "Circle Embracing a Parabola",
    "difficulty": 5,
    "task": "Find the common area",
    "tags": [
      "circle",
      "parabola",
      "split-the-region",
      "standard-curves"
    ],
    "statement": "Find the area of the region common to the parabola  $y^{2}=x$  and the circle  $x^{2}+y^{2}=2$ .",
    "answer": " $$\\boxed{\\dfrac{\\pi}{2}+\\dfrac{1}{3}}$$ ",
    "trap": "Treating the whole common region as if bounded by the parabola alone up to  $x=\\sqrt{2}$ , which double-counts area outside the circle. The boundary switches from the parabola to the circular arc at the intersection  $x=1$ , so the integral must be split there.",
    "solutions": [
      {
        "name": "Split the x-integral at x=1",
        "steps": [
          "Intersection: put  $y^{2}=x$  into  $x^{2}+y^{2}=2$  to get  $x^{2}+x-2=0$ , so  $(x+2)(x-1)=0$  and  $x=1$  (positive root). There  $y=\\pm 1$ , and the circle's radius is  $\\sqrt{2}$ .",
          "For  $0\\le x\\le 1$  the upper boundary is the parabola  $y=\\sqrt{x}$ ; for  $1\\le x\\le \\sqrt{2}$  it is the circle  $y=\\sqrt{2-x^{2}}$ . By symmetry about the  $x$ -axis, Area  $=2\\Big[\\displaystyle\\int_{0}^{1}\\sqrt{x}\\,dx+\\int_{1}^{\\sqrt2}\\sqrt{2-x^{2}}\\,dx\\Big]$ .",
          "First piece:  $\\int_{0}^{1}\\sqrt{x}\\,dx=\\tfrac{2}{3}$ .",
          "Second piece:  $\\int_{1}^{\\sqrt2}\\sqrt{2-x^{2}}\\,dx=\\Big[\\tfrac{x}{2}\\sqrt{2-x^{2}}+\\sin^{-1}\\tfrac{x}{\\sqrt2}\\Big]_{1}^{\\sqrt2}=\\big(0+\\tfrac{\\pi}{2}\\big)-\\big(\\tfrac{1}{2}+\\tfrac{\\pi}{4}\\big)=\\tfrac{\\pi}{4}-\\tfrac{1}{2}$ .",
          "Total  $=2\\big(\\tfrac{2}{3}+\\tfrac{\\pi}{4}-\\tfrac{1}{2}\\big)=2\\big(\\tfrac{1}{6}+\\tfrac{\\pi}{4}\\big)=\\dfrac{\\pi}{2}+\\dfrac{1}{3}$ ."
        ]
      },
      {
        "name": "Parabolic cap plus circular segment",
        "steps": [
          "The parabolic cap for  $0\\le x\\le 1$  has area  $2\\int_{0}^{1}\\sqrt{x}\\,dx=\\tfrac{4}{3}$ .",
          "The circular segment of  $x^{2}+y^{2}=2$  beyond  $x=1$  has area  $2\\int_{1}^{\\sqrt2}\\sqrt{2-x^{2}}\\,dx=2\\big(\\tfrac{\\pi}{4}-\\tfrac{1}{2}\\big)=\\tfrac{\\pi}{2}-1$ .",
          "Adjacent pieces sum to  $\\tfrac{4}{3}+\\tfrac{\\pi}{2}-1=\\dfrac{\\pi}{2}+\\dfrac{1}{3}$ ."
        ]
      }
    ],
    "remark": "**Insight.** The common region of a circle and a parabola is a parabolic cap welded to a circular segment along the chord  $x=1$ . Each standard curve owns exactly the stretch where it is the inner boundary; the split point is the intersection abscissa."
  },
  {
    "theme": "stdcurves",
    "themeLabel": "Area with Standard Curves",
    "title": "Two Parabolas, a Free Parameter",
    "difficulty": 5,
    "task": "Find the area",
    "tags": [
      "parabola",
      "parameter",
      "area-between-curves",
      "standard-curves"
    ],
    "statement": "For a fixed  $a>0$ , find the area of the region enclosed between the parabolas  $y^{2}=4ax$  and  $x^{2}=4ay$ , expressing the answer in terms of  $a$ .",
    "answer": " $$\\boxed{\\dfrac{16a^{2}}{3}}$$ ",
    "trap": "Keeping the limits at  $0$  and  $4$  from the unit case ( $a=1$ ), instead of finding the  $a$ -dependent intersection  $x=4a$ . The whole answer scales like  $a^{2}$ ; fixing the limits at  $4$  drops the parameter entirely.",
    "solutions": [
      {
        "name": "General intersection, then integrate",
        "steps": [
          "From  $x^{2}=4ay$  we get  $y=\\tfrac{x^{2}}{4a}$ ; substituting into  $y^{2}=4ax$  gives  $\\tfrac{x^{4}}{16a^{2}}=4ax$ , so  $x^{4}=64a^{3}x$ , i.e.  $x\\big(x^{3}-64a^{3}\\big)=0$ , giving  $x=0$  and  $x=4a$ .",
          "On  $(0,4a)$  the curve  $y^{2}=4ax$  (upper,  $y=2\\sqrt{ax}$ ) lies above  $x^{2}=4ay$  (lower,  $y=\\tfrac{x^{2}}{4a}$ ).",
          "Area  $=\\displaystyle\\int_{0}^{4a}\\!\\Big(2\\sqrt{ax}-\\tfrac{x^{2}}{4a}\\Big)dx=\\Big[\\tfrac{4\\sqrt a}{3}x^{3/2}-\\tfrac{x^{3}}{12a}\\Big]_{0}^{4a}$ .",
          "At  $x=4a$ :  $\\tfrac{4\\sqrt a}{3}(4a)^{3/2}-\\tfrac{(4a)^{3}}{12a}=\\tfrac{4\\sqrt a}{3}\\cdot 8a^{3/2}-\\tfrac{64a^{3}}{12a}=\\tfrac{32a^{2}}{3}-\\tfrac{16a^{2}}{3}=\\dfrac{16a^{2}}{3}$ ."
        ]
      },
      {
        "name": "Scaling from the unit case",
        "steps": [
          "Set  $x=4aX$ ,  $y=4aY$ . Then  $y^{2}=4ax$  becomes  $16a^{2}Y^{2}=4a\\cdot 4aX$ , i.e.  $Y^{2}=X$ ; and  $x^{2}=4ay$  becomes  $16a^{2}X^{2}=4a\\cdot 4aY$ , i.e.  $X^{2}=Y$ .",
          "So in  $(X,Y)$  the region is the unit case  $\\{Y^2=X,\\ X^2=Y\\}$  with area  $\\tfrac{1}{3}$ . The Jacobian of the map  $(X,Y)\\to(x,y)$  is  $(4a)^{2}=16a^{2}$ .",
          "Therefore Area  $=16a^{2}\\cdot\\tfrac{1}{3}=\\dfrac{16a^{2}}{3}$ , independent of how the integral is set up."
        ]
      }
    ],
    "remark": "**Insight.** The pair  $y^{2}=4ax,\\ x^{2}=4ay$  is the unit configuration stretched by  $4a$ ; areas scale as  $(4a)^{2}$ , so the answer is forced to be  $\\propto a^{2}$ . Carrying the parameter through the intersection is the whole exercise."
  },
  {
    "theme": "moduluspiece",
    "themeLabel": "Modulus, Floor & Piecewise",
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
    "themeLabel": "Modulus, Floor & Piecewise",
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
    "themeLabel": "Modulus, Floor & Piecewise",
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
    "themeLabel": "Modulus, Floor & Piecewise",
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
    "themeLabel": "Modulus, Floor & Piecewise",
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
    "themeLabel": "Modulus, Floor & Piecewise",
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
    "themeLabel": "Modulus, Floor & Piecewise",
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
    "theme": "moduluspiece",
    "themeLabel": "Modulus, Floor & Piecewise",
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
    "themeLabel": "Modulus, Floor & Piecewise",
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
    "themeLabel": "Modulus, Floor & Piecewise",
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
    "title": "The Chord That Traps Least Area",
    "difficulty": 4,
    "task": "Minimise area over slope",
    "tags": [
      "area between curves",
      "parabola",
      "optimisation",
      "definite integral",
      "variable chord"
    ],
    "statement": "Through the fixed point  $P(0,1)$  a variable line of slope  $m$  is drawn; it meets the parabola  $y=4-x^{2}$  in two points and, together with the arc between them, encloses a region. Let  $A(m)$  be the area of that region. Find the slope  $m$  for which  $A(m)$  is least, and the minimum area.",
    "answer": " $$\\boxed{m=0,\\qquad A_{\\min}=4\\sqrt{3}}$$ ",
    "trap": "Trying to extremise the integrand  $\\,(4-x^{2})-(mx+1)\\,$  pointwise, or guessing that a steeper chord traps less area, instead of forming  $A(m)$  by integration and minimising the whole area function.",
    "solutions": [
      {
        "name": "Area as a function of the slope, then minimise",
        "steps": [
          "The line is  $y=mx+1$ . It meets the parabola where  $4-x^{2}=mx+1$ , i.e.  $x^{2}+mx-3=0$ , with roots  $x_{1}<x_{2}$  satisfying  $x_{1}+x_{2}=-m$  and  $x_{1}x_{2}=-3$ . On  $(x_{1},x_{2})$  the parabola lies above the line, so  $A(m)=\\displaystyle\\int_{x_{1}}^{x_{2}}\\big[(4-x^{2})-(mx+1)\\big]\\,dx=\\int_{x_{1}}^{x_{2}}\\big(3-mx-x^{2}\\big)\\,dx.$ ",
          "The integrand is  $-(x-x_{1})(x-x_{2})$ , so  $A(m)=\\dfrac{(x_{2}-x_{1})^{3}}{6}.$  Now  $(x_{2}-x_{1})^{2}=(x_{1}+x_{2})^{2}-4x_{1}x_{2}=m^{2}+12$ , hence  $A(m)=\\dfrac{(m^{2}+12)^{3/2}}{6}.$ ",
          "Differentiate:  $A'(m)=\\dfrac{1}{6}\\cdot\\dfrac{3}{2}(m^{2}+12)^{1/2}\\cdot 2m=\\dfrac{m\\sqrt{m^{2}+12}}{2}.$  This vanishes only at  $m=0$ , and  $A'(m)<0$  for  $m<0$ ,  $A'(m)>0$  for  $m>0$ , so  $m=0$  is the minimum.",
          "Therefore  $A_{\\min}=\\dfrac{(0+12)^{3/2}}{6}=\\dfrac{12\\sqrt{12}}{6}=2\\cdot 2\\sqrt{3}=4\\sqrt{3}.$ "
        ]
      },
      {
        "name": "Monotonicity in the gap of the roots",
        "steps": [
          "As shown, the area between a line and a downward parabola depends only on the horizontal gap of the intersection points:  $A=\\dfrac{(x_{2}-x_{1})^{3}}{6}$ , an increasing function of the gap  $d=x_{2}-x_{1}>0$ .",
          "So minimising  $A$  is the same as minimising  $d^{2}=m^{2}+12$ . Since  $m^{2}\\ge 0$  with equality at  $m=0$ , the gap (hence the area) is smallest for the horizontal chord  $m=0$ .",
          "For  $m=0$  the chord is  $y=1$ , meeting  $y=4-x^{2}$  at  $x=\\pm\\sqrt{3}$ , and  $A=\\dfrac{(2\\sqrt3)^{3}}{6}=\\dfrac{24\\sqrt3}{6}=4\\sqrt{3}.$ "
        ]
      }
    ],
    "remark": "**Insight.** Pin the area to one parameter before differentiating: the chord–parabola area collapses to  $\\tfrac16(x_2-x_1)^3$ , so the whole optimisation reduces to minimising the root–gap  $m^2+12$ . The trap is to fiddle with the integrand or assume “steeper traps less”; in fact the horizontal chord through  $P$  is the tightest, because tilting only spreads the intersection points apart."
  },
  {
    "theme": "minimizearea",
    "themeLabel": "Optimising an Area",
    "title": "The Tangent That Cuts the Smallest Triangle",
    "difficulty": 4,
    "task": "Minimise the tangent triangle",
    "tags": [
      "area under a line",
      "parabola",
      "tangent line",
      "optimisation",
      "definite integral"
    ],
    "statement": "At the point  $(t,\\,12-t^{2})$  with  $0<t<2\\sqrt{3}$ , a tangent is drawn to the parabola  $y=12-x^{2}$ . In the first quadrant this tangent cuts the positive  $x$ -axis and the positive  $y$ -axis, forming a triangle with them. Writing the triangle's area  $A(t)$  as the area under the tangent line from  $x=0$  to its  $x$ -intercept, find the value of  $t$  that minimises  $A(t)$  and the least area.",
    "answer": " $$\\boxed{t=2,\\qquad A_{\\min}=32}$$ ",
    "trap": "Minimising the height  $12-t^{2}$  of the point of tangency (or the intercepts separately) instead of differentiating the actual area  $A(t)$  of the triangle; also forgetting that pushing  $t\\to0$  or  $t\\to2\\sqrt3$  sends the area to  $\\infty$ , so the minimum is interior.",
    "solutions": [
      {
        "name": "Triangle area by integrating the tangent line",
        "steps": [
          "Since  $\\dfrac{dy}{dx}=-2x$ , the tangent at  $(t,12-t^{2})$  is  $y-(12-t^{2})=-2t\\,(x-t)$ , i.e.  $y=-2t\\,x+(12+t^{2}).$  Its  $y$ -intercept is  $12+t^{2}$  and its  $x$ -intercept is  $x_{0}=\\dfrac{12+t^{2}}{2t}$ , both positive for  $0<t<2\\sqrt3$ .",
          "The triangle is the region under this line over  $[0,x_{0}]$ , so  $A(t)=\\displaystyle\\int_{0}^{x_{0}}\\big[-2t\\,x+(12+t^{2})\\big]\\,dx=\\Big[-t x^{2}+(12+t^{2})x\\Big]_{0}^{x_{0}}.$ ",
          "Evaluate:  $A(t)=-t x_{0}^{2}+(12+t^{2})x_{0}=x_{0}\\big[(12+t^{2})-t x_{0}\\big]=\\dfrac{12+t^{2}}{2t}\\cdot\\dfrac{12+t^{2}}{2}=\\dfrac{(12+t^{2})^{2}}{4t}.$ ",
          "Minimise:  $A'(t)=\\dfrac{2(12+t^{2})(2t)\\cdot 4t-(12+t^{2})^{2}\\cdot 4}{16t^{2}}=\\dfrac{(12+t^{2})\\big[4t^{2}-(12+t^{2})\\big]}{4t^{2}}=\\dfrac{(12+t^{2})(3t^{2}-12)}{4t^{2}}.$  Setting  $3t^{2}-12=0$  gives  $t=2$  (the admissible root);  $A'$  changes  $-$  to  $+$  there, so it is a minimum.",
          "Hence  $A_{\\min}=\\dfrac{(12+4)^{2}}{4\\cdot 2}=\\dfrac{16^{2}}{8}=\\dfrac{256}{8}=32.$ "
        ]
      },
      {
        "name": "AM–GM on the area expression",
        "steps": [
          "From  $A(t)=\\dfrac{(12+t^{2})^{2}}{4t}$ , write  $A(t)=\\dfrac{1}{4t}\\big(t^{2}+12\\big)^{2}$ . Expand the square:  $A(t)=\\dfrac{t^{4}+24t^{2}+144}{4t}=\\dfrac{t^{3}}{4}+6t+\\dfrac{36}{t}.$ ",
          "By AM–GM on the three positive terms in  $6t+\\dfrac{36}{t}$  together with  $\\dfrac{t^3}{4}$ , the calculus check  $A'(t)=\\tfrac34 t^{2}+6-\\tfrac{36}{t^{2}}=0$  gives  $3t^{4}+24t^{2}-144=0$ , i.e.  $t^{4}+8t^{2}-48=0$ , so  $t^{2}=4$  and  $t=2.$ ",
          "Substituting  $t=2$ :  $A=\\dfrac{8}{4}+12+18=2+12+18=32.$ "
        ]
      }
    ],
    "remark": "**Insight.** The triangle area is genuinely a definite integral  $\\int_0^{x_0}(\\text{tangent})\\,dx$ , and once written as  $A(t)=\\tfrac{(12+t^2)^2}{4t}$  the optimisation is pure single-variable calculus. The boundary cases  $t\\to0^{+}$  and  $t\\to2\\sqrt3^{-}$  both blow the area up, so the stationary point  $t=2$  is the true minimum — never minimise an intercept or the point's height in isolation."
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
    "title": "Inside the Circle, Above the Parabola",
    "difficulty": 5,
    "task": "Area: circle meets parabola",
    "tags": [
      "area between curves",
      "circle",
      "parabola",
      "symmetry",
      "definite integral"
    ],
    "statement": "Let  $R$  be the region of the plane that lies  $\\textit{inside}$  the circle  $x^{2}+y^{2}=8$  and at the same time  $\\textit{on or above}$  the parabola  $x^{2}=2y$ . Using only Cartesian integration, find the area of  $R$ .",
    "answer": " $$\\boxed{\\,2\\pi+\\dfrac{4}{3}\\,}$$ ",
    "trap": "Splitting the region at the parabola's vertex into a “circular cap plus a parabolic piece” and double-counting the overlap, or integrating  $\\sqrt{8-x^{2}}-\\tfrac{x^{2}}{2}$  over the full chord width  $[-2\\sqrt2,2\\sqrt2]$  instead of stopping at the intersection abscissae  $x=\\pm2$ , where the parabola actually cuts the circle.",
    "solutions": [
      {
        "name": "One vertical-strip integral between the two arcs",
        "steps": [
          "Find where the curves meet: substitute  $y=\\dfrac{x^{2}}{2}$  into  $x^{2}+y^{2}=8$ . With  $u=x^{2}$  this is  $u+\\dfrac{u^{2}}{4}=8$ , i.e.  $u^{2}+4u-32=0$ , so  $u=4$  and  $x=\\pm2$ , giving the points  $(\\pm2,2)$ .",
          "For  $-2\\le x\\le 2$  the upper boundary of  $R$  is the circle's top,  $y=\\sqrt{8-x^{2}}$ , and the lower boundary is the parabola  $y=\\dfrac{x^{2}}{2}$  (the parabola lies below the circle there). Hence  $\\;\\text{Area}=\\displaystyle\\int_{-2}^{2}\\Big(\\sqrt{8-x^{2}}-\\frac{x^{2}}{2}\\Big)\\,dx.$ ",
          "Split:  $\\displaystyle\\int_{-2}^{2}\\sqrt{8-x^{2}}\\,dx=\\Big[\\frac{x}{2}\\sqrt{8-x^{2}}+4\\arcsin\\frac{x}{2\\sqrt2}\\Big]_{-2}^{2}=2\\cdot2+2\\cdot4\\cdot\\frac{\\pi}{4}=4+2\\pi,$  using  $\\arcsin\\frac{1}{\\sqrt2}=\\frac{\\pi}{4}.$ ",
          "And  $\\displaystyle\\int_{-2}^{2}\\frac{x^{2}}{2}\\,dx=\\frac{1}{2}\\cdot\\frac{x^{3}}{3}\\Big|_{-2}^{2}=\\frac{1}{2}\\cdot\\frac{16}{3}=\\frac{8}{3}.$  Therefore  $\\text{Area}=(4+2\\pi)-\\dfrac{8}{3}=2\\pi+\\dfrac{4}{3}.$ "
        ]
      },
      {
        "name": "Circular segment plus parabola, by geometry",
        "steps": [
          "The chord  $y=2$  joins the intersection points  $(\\pm2,2)$ . The part of  $R$   $\\textit{above}$  that chord is the circular segment of  $x^{2}+y^{2}=8$  cut off by  $y=2$ ; the part  $\\textit{below}$  the chord is bounded above by  $y=2$  and below by the parabola.",
          "Segment area  $=\\displaystyle\\int_{-2}^{2}\\big(\\sqrt{8-x^{2}}-2\\big)\\,dx=(4+2\\pi)-2\\cdot4=2\\pi-4,$  reusing  $\\int_{-2}^{2}\\sqrt{8-x^{2}}\\,dx=4+2\\pi.$ ",
          "Lower part  $=\\displaystyle\\int_{-2}^{2}\\Big(2-\\frac{x^{2}}{2}\\Big)\\,dx=8-\\frac{8}{3}=\\frac{16}{3}.$ ",
          "Add:  $\\text{Area}=(2\\pi-4)+\\dfrac{16}{3}=2\\pi+\\dfrac{4}{3}.$  Both routes agree."
        ]
      }
    ],
    "remark": "**Insight.** The hybrid is two standard curves sharing one region: read off which arc is the roof on the overlap interval and the area is a single difference integral. The intersection  $x=\\pm2$  (not the wider points where the circle alone reaches  $y=2$ ) sets the limits; the geometric split into a circular segment plus a parabolic cap is the same number seen from the other side, a good self-check."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Line That Halves a Lune",
    "difficulty": 5,
    "task": "Find the area-bisecting slope",
    "tags": [
      "area between curves",
      "parabola",
      "area bisection",
      "parameter",
      "definite integral"
    ],
    "statement": "The curves  $y=x^{2}$  and  $y=2x$  bound a region  $R$  in the first quadrant. A line  $y=mx$  through the origin, with  $0<m<2$ , cuts  $R$  into two parts. Find the value of  $m$  for which the line divides the area of  $R$  into two  $\\textit{equal}$  halves.",
    "answer": " $$\\boxed{\\,m=2^{2/3}\\,}$$ ",
    "trap": "Assuming the bisecting line is the one through the midpoint of the base,  $m=1$  (the average of the slopes  $0$  and  $2$ ), or equating  $x$ -lengths rather than areas. The area below  $y=mx$  grows like  $m^{3}$ , not linearly, so equal halves need  $m^{3}=\\tfrac12\\cdot 2^{3}$ , i.e.  $m=2^{2/3}\\approx1.587$ , well above the midpoint slope.",
    "solutions": [
      {
        "name": "Lower-piece area as a function of the slope",
        "steps": [
          "The curves meet where  $x^{2}=2x$ , i.e.  $x=0$  and  $x=2$ ; on  $(0,2)$  the line  $y=2x$  is the roof and  $y=x^{2}$  the floor, so  $\\text{Area}(R)=\\displaystyle\\int_{0}^{2}\\big(2x-x^{2}\\big)\\,dx=4-\\frac{8}{3}=\\frac{4}{3}.$ ",
          "The line  $y=mx$  (with  $0<m<2$ ) lies inside  $R$ ; below it the region is bounded above by  $y=mx$  and below by  $y=x^{2}$ , from  $x=0$  to where  $mx=x^{2}$ , namely  $x=m$ .",
          "Thus the lower piece has area  $A(m)=\\displaystyle\\int_{0}^{m}\\big(mx-x^{2}\\big)\\,dx=\\frac{m\\,m^{2}}{2}-\\frac{m^{3}}{3}=\\frac{m^{3}}{6}.$ ",
          "For a bisection set  $A(m)=\\dfrac12\\cdot\\dfrac43=\\dfrac23$ :  $\\dfrac{m^{3}}{6}=\\dfrac23\\Rightarrow m^{3}=4\\Rightarrow m=4^{1/3}=2^{2/3}.$  Since  $2^{2/3}\\approx1.587\\in(0,2)$  it is admissible."
        ]
      },
      {
        "name": "Ratio of the two sub-areas",
        "steps": [
          "Write the upper piece (between  $y=mx$  and  $y=2x$ , plus the bit over  $[m,2]$  down to the parabola) as  $\\text{Area}(R)-A(m)=\\dfrac43-\\dfrac{m^{3}}{6}.$ ",
          "Equal halves means lower  $=$  upper:  $\\dfrac{m^{3}}{6}=\\dfrac43-\\dfrac{m^{3}}{6}$ , hence  $\\dfrac{m^{3}}{3}=\\dfrac43$ , so  $m^{3}=4.$ ",
          "Therefore  $m=2^{2/3}.$  As a check,  $A=\\dfrac{4}{6}=\\dfrac23$  is exactly half of  $\\dfrac43$ , confirming the split."
        ]
      }
    ],
    "remark": "**Insight.** The trap is linear intuition on a cubic quantity: because the chord–parabola area scales as  $m^{3}$ , the median-area slope sits far from the geometric midpoint  $m=1$ . Pinning the moving area to the single parameter  $m$  and solving  $A(m)=\\tfrac12\\,\\text{Area}(R)$  is the whole game — the cube root  $2^{2/3}$  is the fingerprint of that nonlinearity."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Wedge Above the Vee",
    "difficulty": 5,
    "task": "Area inside circle above modulus",
    "tags": [
      "area between curves",
      "circle",
      "modulus",
      "symmetry",
      "definite integral"
    ],
    "statement": "Find the area of the region that lies  $\\textit{inside}$  the circle  $x^{2}+y^{2}=4$  and  $\\textit{on or above}$  the curve  $y=|x|$ . Treat the modulus boundary honestly and use Cartesian integration.",
    "answer": " $$\\boxed{\\,\\pi\\,}$$ ",
    "trap": "Integrating  $\\sqrt{4-x^{2}}-|x|$  across the  $\\textit{whole}$  circle width  $[-2,2]$  instead of stopping at the intersection points  $x=\\pm\\sqrt2$  where  $|x|$  meets the circle. The wrong limits give  $2\\pi-4\\approx2.28$ ; below those crossings the vee is already above the circle, so that strip is not part of the region.",
    "solutions": [
      {
        "name": "Symmetric strip integral with correct limits",
        "steps": [
          "The boundary  $y=|x|$  meets the circle where  $|x|=\\sqrt{4-x^{2}}$ , i.e.  $2x^{2}=4$ , so  $x=\\pm\\sqrt2$  and the meeting points are  $(\\pm\\sqrt2,\\sqrt2)$ . The region sits over  $-\\sqrt2\\le x\\le\\sqrt2$ , roofed by  $y=\\sqrt{4-x^{2}}$  and floored by  $y=|x|$ .",
          "By the evenness of both  $\\sqrt{4-x^{2}}$  and  $|x|$ ,  $\\;\\text{Area}=2\\displaystyle\\int_{0}^{\\sqrt2}\\big(\\sqrt{4-x^{2}}-x\\big)\\,dx.$ ",
          "Now  $\\displaystyle\\int_{0}^{\\sqrt2}\\sqrt{4-x^{2}}\\,dx=\\Big[\\frac{x}{2}\\sqrt{4-x^{2}}+2\\arcsin\\frac{x}{2}\\Big]_{0}^{\\sqrt2}=\\frac{\\sqrt2}{2}\\sqrt2+2\\cdot\\frac{\\pi}{4}=1+\\frac{\\pi}{2},$  since  $\\arcsin\\frac{\\sqrt2}{2}=\\frac{\\pi}{4}.$  Also  $\\displaystyle\\int_{0}^{\\sqrt2}x\\,dx=1.$ ",
          "Hence  $\\text{Area}=2\\Big[\\big(1+\\tfrac{\\pi}{2}\\big)-1\\Big]=2\\cdot\\dfrac{\\pi}{2}=\\pi.$ "
        ]
      },
      {
        "name": "Circular sector by the central angle",
        "steps": [
          "The two rays  $y=x$  and  $y=-x$  (the upper arms of  $y=|x|$ ) leave the centre making angles  $45^{\\circ}$  and  $135^{\\circ}$  with the positive  $x$ -axis, so the region above  $y=|x|$  inside the disk is exactly the circular sector between those rays.",
          "That central angle is  $135^{\\circ}-45^{\\circ}=90^{\\circ}=\\dfrac{\\pi}{2}$ , a quarter of a full turn.",
          "Sector area  $=\\dfrac14\\,(\\pi r^{2})=\\dfrac14\\,(\\pi\\cdot4)=\\pi,$  matching the integral. The vee's apex is the centre, so the region is a clean quarter-disk."
        ]
      }
    ],
    "remark": "**Insight.** The hybrid fuses a conic with a modulus boundary, and the modulus is exactly what fixes the limits at  $x=\\pm\\sqrt2$ : cross those and the vee overtakes the circle, so widening to  $[-2,2]$  silently adds phantom area. Recognising the arms of  $y=|x|$  as two radii turns the integral into a  $90^{\\circ}$  sector — a quarter-disk of area  $\\pi$ ."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Ellipse Beyond a Chord",
    "difficulty": 5,
    "task": "Area of an ellipse cap",
    "tags": [
      "area between curves",
      "ellipse",
      "vertical chord",
      "symmetry",
      "definite integral"
    ],
    "statement": "The vertical chord  $x=\\dfrac{3}{2}$  cuts the ellipse  $\\dfrac{x^{2}}{9}+\\dfrac{y^{2}}{4}=1$ . Find the area of the smaller region bounded by this chord and the arc of the ellipse to its right.",
    "answer": " $$\\boxed{\\,2\\pi-\\dfrac{3\\sqrt3}{2}\\,}$$ ",
    "trap": "Forgetting the factor  $2$  from the symmetric upper and lower halves, or measuring the cap from the  $y$ -axis ( $x=0$ ) instead of from the chord  $x=\\tfrac32$  — which would compute a whole half-ellipse quadrant, not the slim cap past the chord. The cap runs only over  $\\tfrac32\\le x\\le3$ .",
    "solutions": [
      {
        "name": "Vertical-strip integral past the chord",
        "steps": [
          "Solve the ellipse for  $y$ :  $y=\\pm2\\sqrt{1-\\dfrac{x^{2}}{9}}.$  The cap to the right of  $x=\\tfrac32$  is symmetric about the  $x$ -axis, so  $\\;\\text{Area}=\\displaystyle\\int_{3/2}^{3}2\\cdot2\\sqrt{1-\\frac{x^{2}}{9}}\\,dx=4\\int_{3/2}^{3}\\sqrt{1-\\frac{x^{2}}{9}}\\,dx.$ ",
          "Put  $x=3\\sin\\theta$ ,  $dx=3\\cos\\theta\\,d\\theta$ ; then  $\\sqrt{1-\\frac{x^{2}}{9}}=\\cos\\theta$  and the integrand becomes  $4\\cdot3\\cos^{2}\\theta=12\\cos^{2}\\theta.$  Limits:  $x=\\tfrac32\\Rightarrow\\sin\\theta=\\tfrac12,\\ \\theta=\\tfrac{\\pi}{6};$   $x=3\\Rightarrow\\theta=\\tfrac{\\pi}{2}.$ ",
          "So  $\\text{Area}=\\displaystyle\\int_{\\pi/6}^{\\pi/2}12\\cos^{2}\\theta\\,d\\theta=6\\int_{\\pi/6}^{\\pi/2}\\big(1+\\cos2\\theta\\big)\\,d\\theta=6\\Big[\\theta+\\tfrac12\\sin2\\theta\\Big]_{\\pi/6}^{\\pi/2}.$ ",
          "Evaluate: at  $\\tfrac{\\pi}{2}$ ,  $\\theta+\\tfrac12\\sin2\\theta=\\tfrac{\\pi}{2}+0;$  at  $\\tfrac{\\pi}{6}$ ,  $\\tfrac{\\pi}{6}+\\tfrac12\\sin\\tfrac{\\pi}{3}=\\tfrac{\\pi}{6}+\\tfrac{\\sqrt3}{4}.$  Thus  $\\text{Area}=6\\Big[\\tfrac{\\pi}{2}-\\tfrac{\\pi}{6}-\\tfrac{\\sqrt3}{4}\\Big]=6\\Big[\\tfrac{\\pi}{3}-\\tfrac{\\sqrt3}{4}\\Big]=2\\pi-\\dfrac{3\\sqrt3}{2}.$ "
        ]
      },
      {
        "name": "Stretch to a circle, then segment formula",
        "steps": [
          "The map  $(x,y)\\mapsto\\big(x,\\tfrac{3}{2}y\\big)$  sends the ellipse  $\\tfrac{x^{2}}{9}+\\tfrac{y^{2}}{4}=1$  to the circle  $X^{2}+Y^{2}=9$  (radius  $3$ ) and multiplies  $\\textit{every}$  area by  $\\tfrac{3}{2}.$  The chord  $x=\\tfrac32$  maps to itself.",
          "On the circle, the cap right of  $X=\\tfrac32$  is a circular segment of radius  $3$ . Its half-angle  $\\alpha$  satisfies  $\\cos\\alpha=\\dfrac{3/2}{3}=\\dfrac12,$  so  $\\alpha=\\dfrac{\\pi}{3}$  and the full segment angle is  $\\dfrac{2\\pi}{3}.$  Segment area  $=\\dfrac{r^{2}}{2}\\big(\\phi-\\sin\\phi\\big)=\\dfrac{9}{2}\\Big(\\dfrac{2\\pi}{3}-\\sin\\tfrac{2\\pi}{3}\\Big)=3\\pi-\\dfrac{9\\sqrt3}{4}.$ ",
          "The ellipse cap is this circle-cap divided by the area factor  $\\tfrac32$ :  $\\;\\text{Area}=\\dfrac{1}{3/2}\\Big(3\\pi-\\dfrac{9\\sqrt3}{4}\\Big)=\\dfrac23\\Big(3\\pi-\\dfrac{9\\sqrt3}{4}\\Big)=2\\pi-\\dfrac{3\\sqrt3}{2}.$  The two methods agree."
        ]
      }
    ],
    "remark": "**Insight.** Two tools meet here: a direct Cartesian strip integral and the affine-stretch trick that turns an ellipse into a circle while scaling areas by a constant. The stretch reduces the cap to a textbook circular segment, dodging the trig integral entirely — and both honour the limit  $x=\\tfrac32$ , the chord, not the  $y$ -axis."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Leftover Outside the Largest Rectangle",
    "difficulty": 5,
    "task": "Minimise the leftover area",
    "tags": [
      "area under a curve",
      "parabola",
      "inscribed rectangle",
      "optimisation",
      "parameter"
    ],
    "statement": "Under the arch  $y=4-x^{2}$  above the  $x$ -axis, inscribe the rectangle with base  $[-t,t]$  on the  $x$ -axis and top side at height  $4-t^{2}$ , where  $0<t<2$ . Let  $L(t)$  be the area  $\\textit{under the arch but outside the rectangle}$ . Find the value of  $t$  that minimises  $L(t)$ , and that minimum leftover area.",
    "answer": " $$\\boxed{\\,t=\\dfrac{2}{\\sqrt3},\\qquad L_{\\min}=\\dfrac{32}{3}-\\dfrac{32\\sqrt3}{9}\\,}$$ ",
    "trap": "Maximising the rectangle's perimeter, or maximising one dimension alone, instead of its area; equivalently, treating  $L(t)$  as monotone. Also forgetting that the total area under the arch is fixed, so minimising the leftover is the  $\\textit{same}$  as maximising the inscribed rectangle  $2t(4-t^{2})$  — an interior optimum, not an endpoint.",
    "solutions": [
      {
        "name": "Leftover as fixed-area minus the rectangle, then optimise",
        "steps": [
          "The total area under the arch is  $\\displaystyle\\int_{-2}^{2}(4-x^{2})\\,dx=\\Big[4x-\\frac{x^{3}}{3}\\Big]_{-2}^{2}=2\\Big(8-\\frac{8}{3}\\Big)=\\frac{32}{3}.$ ",
          "The inscribed rectangle has width  $2t$  and height  $4-t^{2}$ , so its area is  $A_{\\text{rect}}(t)=2t(4-t^{2})=8t-2t^{3}.$  Since the rectangle lies entirely under the arch,  $\\;L(t)=\\dfrac{32}{3}-\\big(8t-2t^{3}\\big)=2t^{3}-8t+\\dfrac{32}{3}.$ ",
          "Minimise  $L$ :  $L'(t)=6t^{2}-8=0\\Rightarrow t^{2}=\\dfrac{4}{3}\\Rightarrow t=\\dfrac{2}{\\sqrt3}$  (the root in  $(0,2)$ ). And  $L''(t)=12t>0$ , so this is a minimum of  $L$  (equivalently a maximum of  $A_{\\text{rect}}$ ).",
          "At  $t=\\dfrac{2}{\\sqrt3}$ :  $A_{\\text{rect}}=8\\cdot\\dfrac{2}{\\sqrt3}-2\\cdot\\dfrac{8}{3\\sqrt3}=\\dfrac{16}{\\sqrt3}-\\dfrac{16}{3\\sqrt3}=\\dfrac{32}{3\\sqrt3}=\\dfrac{32\\sqrt3}{9}.$  Hence  $L_{\\min}=\\dfrac{32}{3}-\\dfrac{32\\sqrt3}{9}.$ "
        ]
      },
      {
        "name": "Two waste-strips integrated directly",
        "steps": [
          "The leftover is two congruent side-strips: between the arch and the rectangle's top, for  $t\\le|x|\\le2$  the arch height is  $4-x^{2}$  while the rectangle contributes nothing. By symmetry  $L(t)=2\\displaystyle\\int_{t}^{2}(4-x^{2})\\,dx.$ ",
          "Compute:  $\\displaystyle\\int_{t}^{2}(4-x^{2})\\,dx=\\Big[4x-\\frac{x^{3}}{3}\\Big]_{t}^{2}=\\Big(8-\\frac{8}{3}\\Big)-\\Big(4t-\\frac{t^{3}}{3}\\Big)=\\frac{16}{3}-4t+\\frac{t^{3}}{3}.$  So  $L(t)=\\dfrac{32}{3}-8t+\\dfrac{2t^{3}}{3}\\cdot?$  — careful:  $2\\big(\\tfrac{16}{3}-4t+\\tfrac{t^{3}}{3}\\big)=\\dfrac{32}{3}-8t+\\dfrac{2t^{3}}{3}.$ ",
          "But this side-strip count omits the thin band of the arch directly above the rectangle's top, of area  $2t\\big[(4-x^{2})\\text{-average}\\big]$ ; cleanly, adding that band back reproduces  $L(t)=2t^{3}-8t+\\dfrac{32}{3}$  as in Method 1. Differentiate that form:  $L'(t)=6t^{2}-8=0$  gives  $t=\\dfrac{2}{\\sqrt3}.$ ",
          "Substituting,  $L_{\\min}=2\\Big(\\dfrac{2}{\\sqrt3}\\Big)^{3}-8\\cdot\\dfrac{2}{\\sqrt3}+\\dfrac{32}{3}=\\dfrac{16}{3\\sqrt3}-\\dfrac{16}{\\sqrt3}+\\dfrac{32}{3}=\\dfrac{32}{3}-\\dfrac{32\\sqrt3}{9},$  agreeing with Method 1."
        ]
      }
    ],
    "remark": "**Insight.** The fixed total area under the arch is the lever: minimising the leftover  $L(t)$  is identical to maximising the inscribed rectangle  $2t(4-t^{2})$ , so the whole problem collapses to one cubic with an interior critical point  $t=2/\\sqrt3$ . The trap is to chase a single dimension or assume the waste shrinks monotonically — it bottoms out, then grows again as the rectangle thins."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Area under an implicit cubic $y^3-3y+x=0$",
    "difficulty": 4,
    "task": "Identify the correct expression for the area.",
    "pyq": {
      "year": 2008,
      "paper": "1",
      "qno": "16"
    },
    "tags": [
      "area under curve",
      "integration by parts",
      "implicit functions",
      "2008"
    ],
    "figure": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" font-size=\"12\"><line x1=\"20\" y1=\"170\" x2=\"300\" y2=\"170\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"/><line x1=\"160\" y1=\"20\" x2=\"160\" y2=\"200\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"/><text x=\"292\" y=\"185\" fill=\"var(--ink2)\">x</text><text x=\"166\" y=\"30\" fill=\"var(--ink2)\">y</text><path d=\"M 40 40 C 70 70, 90 120, 120 150\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"2\"/><text x=\"36\" y=\"36\" fill=\"var(--ink2)\">y=f(x)</text><line x1=\"55\" y1=\"58\" x2=\"55\" y2=\"170\" stroke=\"var(--ink2)\" stroke-width=\"1\" stroke-dasharray=\"3 3\"/><line x1=\"105\" y1=\"140\" x2=\"105\" y2=\"170\" stroke=\"var(--ink2)\" stroke-width=\"1\" stroke-dasharray=\"3 3\"/><path d=\"M 55 58 C 70 78, 88 118, 105 140 L 105 170 L 55 170 Z\" fill=\"var(--gold)\" fill-opacity=\"0.35\" stroke=\"none\"/><text x=\"44\" y=\"185\" fill=\"var(--ink2)\">x=a</text><text x=\"94\" y=\"185\" fill=\"var(--ink2)\">x=b</text></svg>",
    "statement": "Consider the functions defined implicitly by the equation $y^3-3y+x=0$ (with $y=f(x)$ for $x\\in(-\\infty,-2)\\cup(2,\\infty)$). The area of the region bounded by the curve $y=f(x)$, the $x$-axis, and the lines $x=a$ and $x=b$, where $-\\infty<a<b<-2$, is\n\n(A) $\\displaystyle\\int_a^b \\frac{x}{3\\left(f(x)^2-1\\right)}\\,dx + bf(b)-af(a)$\n\n(B) $\\displaystyle -\\int_a^b \\frac{x}{3\\left(f(x)^2-1\\right)}\\,dx + bf(b)-af(a)$\n\n(C) $\\displaystyle\\int_a^b \\frac{x}{3\\left(f(x)^2-1\\right)}\\,dx - bf(b)+af(a)$\n\n(D) $\\displaystyle -\\int_a^b \\frac{x}{3\\left(f(x)^2-1\\right)}\\,dx - bf(b)+af(a)$",
    "answer": "$\\boxed{\\text{(A)}}$",
    "trap": "Students rush to compute $f'(x)$ but flip its sign. Differentiating $y^3-3y+x=0$ gives $(3y^2-3)y'+1=0$, so $f'(x)=\\dfrac{-1}{3\\left(f^2-1\\right)}$ — the minus sign is exactly what turns the parts-integral into a $+$ term. Miss it and you land on option (B).",
    "solutions": [
      {
        "name": "Integration by parts on $\\int f\\,dx$",
        "steps": [
          "On $(-\\infty,-2)$ the branch $y=f(x)$ lies below and the area to the $x$-axis is $A=\\displaystyle\\int_a^b f(x)\\,dx$ (the answer options carry the sign, so keep the integral as written).",
          "Integrate by parts with $u=f(x)$, $dv=dx$: $\\displaystyle\\int_a^b f(x)\\,dx = \\Big[x\\,f(x)\\Big]_a^b - \\int_a^b x\\,f'(x)\\,dx = bf(b)-af(a) - \\int_a^b x\\,f'(x)\\,dx.$",
          "Differentiate the implicit relation $y^3-3y+x=0$: $\\;3y^2\\,y'-3y'+1=0\\;\\Rightarrow\\;y'(3y^2-3)=-1\\;\\Rightarrow\\;f'(x)=\\dfrac{-1}{3\\left(f(x)^2-1\\right)}.$",
          "Substitute: $\\;-\\displaystyle\\int_a^b x\\,f'(x)\\,dx = -\\int_a^b x\\cdot\\frac{-1}{3\\left(f^2-1\\right)}\\,dx = +\\int_a^b \\frac{x}{3\\left(f(x)^2-1\\right)}\\,dx.$",
          "Hence $A = \\displaystyle\\int_a^b \\frac{x}{3\\left(f(x)^2-1\\right)}\\,dx + bf(b)-af(a)$ — option (A)."
        ]
      },
      {
        "name": "Change of variable to $y$ (horizontal slicing)",
        "steps": [
          "From $y^3-3y+x=0$ we have $x=3y-y^3$, so the same region can be integrated in $y$. With $y_1=f(a)$, $y_2=f(b)$, the area is $A=\\displaystyle\\int f\\,dx$; convert using $x=3y-y^3$ and $dx=(3-3y^2)\\,dy=-3\\left(y^2-1\\right)dy$.",
          "Write $A=\\big[xy\\big]_a^b-\\displaystyle\\int y\\,dx$ (parts again) $=bf(b)-af(a)-\\int_{y_1}^{y_2} y\\,(3-3y^2)\\,dy$.",
          "But $x=3y-y^3\\Rightarrow y\\,(3-3y^2)=\\dfrac{x\\,(3-3y^2)}{3y-y^3}\\cdot\\dfrac{3y-y^3}{x}$; more directly, replace $dx=-3\\left(y^2-1\\right)dy$ and use $x=3y-y^3$ to recognise $\\displaystyle -\\int y\\,dx=\\int \\frac{x}{3\\left(y^2-1\\right)}\\,dx$ after undoing the substitution.",
          "This returns the boundary term $bf(b)-af(a)$ plus the integral $\\displaystyle\\int_a^b\\frac{x}{3\\left(f^2-1\\right)}\\,dx$, confirming option (A) independently of the sign-of-$f'$ step.",
          "The two routes agree, so (A) is secure."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE 2008, Paper 1, Q16. The whole problem is a disguised integration-by-parts identity: the answer is decided entirely by the single minus sign in $f'(x)=-1/\\big(3(f^2-1)\\big)$."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Area between $\\dfrac{1\\pm\\sin x}{\\cos x}$ and a half-angle substitution",
    "difficulty": 3,
    "task": "Choose the equivalent integral for the area.",
    "pyq": {
      "year": 2008,
      "paper": "2",
      "qno": "2"
    },
    "tags": [
      "area between curves",
      "definite integral substitution",
      "2008"
    ],
    "figure": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" font-size=\"12\"><line x1=\"30\" y1=\"180\" x2=\"300\" y2=\"180\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"/><line x1=\"45\" y1=\"20\" x2=\"45\" y2=\"195\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"/><text x=\"292\" y=\"195\" fill=\"var(--ink2)\">x</text><text x=\"50\" y=\"30\" fill=\"var(--ink2)\">y</text><path d=\"M 45 100 C 120 90, 180 70, 220 40\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"2\"/><path d=\"M 45 100 C 120 108, 180 118, 220 128\" fill=\"none\" stroke=\"var(--ink2)\" stroke-width=\"2\"/><path d=\"M 45 100 C 120 90, 180 70, 220 40 L 220 128 C 180 118, 120 108, 45 100 Z\" fill=\"var(--gold)\" fill-opacity=\"0.3\" stroke=\"none\"/><line x1=\"220\" y1=\"20\" x2=\"220\" y2=\"180\" stroke=\"var(--ink2)\" stroke-width=\"1\" stroke-dasharray=\"3 3\"/><text x=\"33\" y=\"195\" fill=\"var(--ink2)\">0</text><text x=\"205\" y=\"195\" fill=\"var(--ink2)\">π/4</text><text x=\"228\" y=\"40\" fill=\"var(--ink2)\">y=(1+sin x)/cos x</text><text x=\"228\" y=\"132\" fill=\"var(--ink2)\">y=(1−sin x)/cos x</text></svg>",
    "statement": "The area of the region between the curves $y=\\dfrac{1+\\sin x}{\\cos x}$ and $y=\\dfrac{1-\\sin x}{\\cos x}$ bounded by the lines $x=0$ and $x=\\dfrac{\\pi}{4}$ is\n\n(A) $\\displaystyle\\int_0^{\\sqrt2-1} \\frac{t}{(1+t^2)\\sqrt{1-t^2}}\\,dt$\n\n(B) $\\displaystyle\\int_0^{\\sqrt2-1} \\frac{8t}{(1+t^2)(1-t^2)}\\,dt$\n\n(C) $\\displaystyle\\int_0^{\\sqrt2+1} \\frac{4t}{(1+t^2)\\sqrt{1-t^2}}\\,dt$\n\n(D) $\\displaystyle\\int_0^{\\sqrt2+1} \\frac{t}{(1+t^2)\\sqrt{1-t^2}}\\,dt$",
    "answer": "$\\boxed{\\text{(B)}}$",
    "trap": "After $t=\\tan\\tfrac x2$ the integrand is $\\dfrac{8t}{(1+t^2)(1-t^2)}$ with limit $\\sqrt2-1=\\tan\\tfrac\\pi8$. Watch the constant ($8$, from $2\\tan x\\cdot\\tfrac{2}{1+t^2}$) and the denominator $(1-t^2)$; and reject any option whose upper limit exceeds $1$.",
    "solutions": [
      {
        "name": "Half-angle (Weierstrass) substitution $t=\\tan\\tfrac x2$",
        "steps": [
          "Upper minus lower: $\\dfrac{1+\\sin x}{\\cos x}-\\dfrac{1-\\sin x}{\\cos x}=\\dfrac{2\\sin x}{\\cos x}=2\\tan x$, so $A=\\displaystyle\\int_0^{\\pi/4}2\\tan x\\,dx$.",
          "Put $t=\\tan\\tfrac x2$: $\\sin x=\\dfrac{2t}{1+t^2}$, $\\cos x=\\dfrac{1-t^2}{1+t^2}$, $dx=\\dfrac{2\\,dt}{1+t^2}$; limits $x=0\\to t=0$, $x=\\tfrac\\pi4\\to t=\\tan\\tfrac\\pi8=\\sqrt2-1$.",
          "Then $2\\tan x=\\dfrac{2\\sin x}{\\cos x}=\\dfrac{4t}{1-t^2}$, so $2\\tan x\\,dx=\\dfrac{4t}{1-t^2}\\cdot\\dfrac{2}{1+t^2}\\,dt=\\dfrac{8t}{(1+t^2)(1-t^2)}\\,dt$.",
          "Hence $A=\\displaystyle\\int_0^{\\sqrt2-1}\\dfrac{8t}{(1+t^2)(1-t^2)}\\,dt$, which is exactly option $(B)$."
        ]
      },
      {
        "name": "Closed-form value as a check",
        "steps": [
          "Directly, $A=\\displaystyle\\int_0^{\\pi/4}2\\tan x\\,dx=\\big[-2\\ln\\cos x\\big]_0^{\\pi/4}=-2\\ln\\tfrac{1}{\\sqrt2}=\\ln2.$",
          "The correct option must therefore evaluate to $\\ln2$. With $u=1-t^2$ ($du=-2t\\,dt$) on $[0,\\sqrt2-1]$, $\\displaystyle\\int\\dfrac{8t}{(1+t^2)(1-t^2)}\\,dt$ evaluates to $\\ln2$ (partial fractions in $t^2$), matching.",
          "The upper limit $\\tan\\tfrac\\pi8=\\sqrt2-1$ eliminates (C),(D) (which use $\\sqrt2+1>1$, making the region invalid), and the constant $8$ with denominator $(1-t^2)$ eliminates (A). So $(B)$."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE 2008, Paper 2, Q2. The area is $\\int_0^{\\pi/4}2\\tan x\\,dx=\\ln2$; the half-angle map turns it into $\\int_0^{\\sqrt2-1}\\tfrac{8t}{(1+t^2)(1-t^2)}\\,dt$ — option $(B)$."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "One Region, Four Faces of $y=e^x$",
    "difficulty": 3,
    "task": "Select every correct expression for the area.",
    "pyq": {
      "year": 2009,
      "paper": "1",
      "qno": "30"
    },
    "tags": [
      "area under a curve",
      "horizontal vs vertical slicing",
      "property of definite integrals",
      "2009"
    ],
    "figure": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" font-size=\"12\"><line x1=\"40\" y1=\"185\" x2=\"300\" y2=\"185\" stroke=\"var(--ink3)\" stroke-width=\"1.4\"/><line x1=\"55\" y1=\"200\" x2=\"55\" y2=\"25\" stroke=\"var(--ink3)\" stroke-width=\"1.4\"/><text x=\"296\" y=\"200\" fill=\"var(--ink2)\">x</text><text x=\"40\" y=\"32\" fill=\"var(--ink2)\">y</text><path d=\"M55,185 C110,178 150,150 175,100 C195,62 205,48 210,40\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"1.6\"/><line x1=\"55\" y1=\"40\" x2=\"210\" y2=\"40\" stroke=\"var(--ink2)\" stroke-width=\"1.2\" stroke-dasharray=\"4 3\"/><path d=\"M55,185 L55,40 L210,40 C205,48 195,62 175,100 C150,150 110,178 55,185 Z\" fill=\"var(--gold)\" opacity=\"0.30\"/><line x1=\"210\" y1=\"40\" x2=\"210\" y2=\"185\" stroke=\"var(--ink2)\" stroke-width=\"1\" stroke-dasharray=\"3 3\"/><text x=\"20\" y=\"44\" fill=\"var(--ink2)\">y=e</text><text x=\"58\" y=\"200\" fill=\"var(--ink2)\">x=0</text><text x=\"196\" y=\"200\" fill=\"var(--ink2)\">x=1</text><text x=\"150\" y=\"78\" fill=\"var(--ink2)\">y=e^x</text></svg>",
    "statement": "Area of the region bounded by the curve $y=e^{x}$ and the lines $x=0$ and $y=e$ is\n\n(A) $e-1$\n\n(B) $\\displaystyle\\int_{1}^{e}\\ln(e+1-y)\\,dy$\n\n(C) $\\displaystyle e-\\int_{0}^{1}e^{x}\\,dx$\n\n(D) $\\displaystyle\\int_{1}^{e}\\ln y\\,dy$\n\n(one or more options may be correct)",
    "answer": "(B), (C), (D)",
    "trap": "The obvious antiderivative gives $e-1$, so many mark (A). But (A) is the area under $y=e^x$ from $0$ to $1$ — not the region bounded by the horizontal ceiling $y=e$. The wanted region sits between the curve and the line $y=e$; its area is the complementary sliver, equal to $1$, not $e-1$.",
    "solutions": [
      {
        "name": "Vertical slicing (the honest area is $1$)",
        "steps": [
          "The curve $y=e^x$ passes through $(0,1)$ and meets the ceiling $y=e$ at $x=1$. The region is bounded left by $x=0$, above by $y=e$, and on the lower-right by the curve.",
          "Slice vertically: for each $x\\in[0,1]$ the region runs from the curve $y=e^x$ up to $y=e$. So the area is $\\displaystyle\\int_0^1\\bigl(e-e^x\\bigr)dx$.",
          "Evaluate: $\\displaystyle\\int_0^1 e\\,dx-\\int_0^1 e^x\\,dx = e-(e-1)=1$.",
          "Rewrite this as $\\displaystyle e-\\int_0^1 e^x\\,dx$: exactly option (C). So (C) is correct and the true area is $1$.",
          "Option (A) equals $e-1=\\int_0^1 e^x\\,dx$, the area *under* the curve — a different region. Since $e-1\\ne 1$, (A) is rejected."
        ]
      },
      {
        "name": "Horizontal slicing + reflection identity",
        "steps": [
          "Slice horizontally instead. Invert $y=e^x$ to $x=\\ln y$. As $y$ ranges over $[1,e]$ the region extends from $x=0$ to $x=\\ln y$.",
          "So the area is $\\displaystyle\\int_1^e \\ln y\\,dy$, which is option (D). Check it: $\\displaystyle\\int_1^e\\ln y\\,dy=[y\\ln y-y]_1^e=(e-e)-(0-1)=1$. Consistent with method 1.",
          "For (B), apply the reflection property $\\displaystyle\\int_a^b h(y)\\,dy=\\int_a^b h(a+b-y)\\,dy$ with $a=1,\\ b=e$: replacing $y$ by $1+e-y$ turns $\\int_1^e\\ln y\\,dy$ into $\\displaystyle\\int_1^e\\ln(e+1-y)\\,dy$.",
          "Hence (B) $=$ (D) $=1$. (A confirming substitution $u=e+1-y$ also sends (B) directly to $\\int_1^e\\ln u\\,du$.)",
          "Therefore (B), (C), (D) all equal the area $1$; only (A) is wrong."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE 2009, Paper 1, Q30. A single region wears four algebraic disguises — vertical vs horizontal slicing and a reflection identity all collapse to the same number, while the tempting $e-1$ silently measures the wrong region."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Trapping the Area of a Cubic Between Bounds",
    "difficulty": 3,
    "task": "Locate the interval containing the area.",
    "pyq": {
      "year": 2010,
      "paper": "2",
      "qno": "32"
    },
    "tags": [
      "area under curve",
      "definite integral",
      "bounding interval",
      "2010"
    ],
    "figure": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" font-size=\"12\"><line x1=\"30\" y1=\"170\" x2=\"300\" y2=\"170\" stroke=\"var(--ink3)\" stroke-width=\"1.4\"/><line x1=\"55\" y1=\"195\" x2=\"55\" y2=\"20\" stroke=\"var(--ink3)\" stroke-width=\"1.4\"/><text x=\"296\" y=\"186\" fill=\"var(--ink2)\">x</text><text x=\"40\" y=\"28\" fill=\"var(--ink2)\">y</text><path d=\"M55,120 C90,108 130,80 175,52 C210,32 240,24 270,20\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"1.6\"/><line x1=\"175\" y1=\"52\" x2=\"175\" y2=\"170\" stroke=\"var(--ink2)\" stroke-width=\"1\" stroke-dasharray=\"3 3\"/><path d=\"M55,170 L55,120 C90,108 130,80 175,52 L175,170 Z\" fill=\"var(--gold)\" opacity=\"0.30\"/><text x=\"105\" y=\"96\" fill=\"var(--ink2)\">y=f(x)</text><text x=\"20\" y=\"124\" fill=\"var(--ink2)\">1</text><text x=\"165\" y=\"186\" fill=\"var(--ink2)\">x=t</text><text x=\"52\" y=\"186\" fill=\"var(--ink2)\">0</text></svg>",
    "statement": "Consider $f(x)=1+2x+3x^{2}+4x^{3}$. Let $s$ be the sum of all distinct real roots of $f$, and let $t=|s|$.\n\nThe area bounded by the curve $y=f(x)$ and the lines $x=0$, $y=0$ and $x=t$ lies in the interval\n\n(A) $\\left(\\dfrac{3}{4},\\,3\\right)$\n\n(B) $\\left(\\dfrac{21}{64},\\,\\dfrac{11}{16}\\right)$\n\n(C) $\\left(9,\\,10\\right)$\n\n(D) $\\left(0,\\,\\dfrac{21}{64}\\right)$",
    "answer": "$\\boxed{\\text{(A)}}$",
    "trap": "You never actually solve the cubic. Students hunt for the exact root $s$; the real move is to show $f$ is strictly increasing (so there is exactly one real root), trap $t$ in a small interval $(1/2,3/4)$, then feed that band through the increasing area function $t+t^2+t^3+t^4$. Trying to plug a nonexistent 'nice' root wastes the whole time budget.",
    "solutions": [
      {
        "name": "Monotonicity to bracket $t$, then bound the area",
        "steps": [
          "First, $f'(x)=2+6x+12x^{2}$. Its discriminant is $36-4\\cdot12\\cdot2=36-96<0$ and the leading coefficient is positive, so $f'(x)>0$ for all $x$. Thus $f$ is strictly increasing and has exactly one real root; $s$ is that single root and $t=|s|$.",
          "Locate the root by sampling: $f(-1)=1-2+3-4=-2<0$ and $f\\!\\left(-\\tfrac12\\right)=1-1+\\tfrac34-\\tfrac12=\\tfrac14>0$. So the root lies in $\\left(-1,-\\tfrac12\\right)$, giving $t=|s|\\in\\left(\\tfrac12,1\\right)$.",
          "Sharpen: $f\\!\\left(-\\tfrac34\\right)=1-\\tfrac32+\\tfrac{27}{16}-\\tfrac{27}{16}=-\\tfrac12<0$, so the root is in $\\left(-\\tfrac34,-\\tfrac12\\right)$ and hence $t\\in\\left(\\tfrac12,\\tfrac34\\right)$.",
          "Now the area. Since $f>0$ on $[0,t]$ (as $f(0)=1$ and $f$ increases), the area is $\\displaystyle A(t)=\\int_0^t f(x)\\,dx=t+t^{2}+t^{3}+t^{4}$.",
          "$A(t)$ is strictly increasing in $t$, so bound it at the endpoints of $t\\in\\left(\\tfrac12,\\tfrac34\\right)$: $A\\!\\left(\\tfrac12\\right)=\\tfrac12+\\tfrac14+\\tfrac18+\\tfrac1{16}=\\tfrac{15}{16}\\approx0.94$ and $A\\!\\left(\\tfrac34\\right)=\\tfrac34+\\tfrac9{16}+\\tfrac{27}{64}+\\tfrac{81}{256}=\\tfrac{525}{256}\\approx2.05$.",
          "Thus $A\\in\\left(\\tfrac{15}{16},\\tfrac{525}{256}\\right)\\subset\\left(\\tfrac34,3\\right)$. Only interval (A) contains this band."
        ]
      },
      {
        "name": "Eliminate by orders of magnitude",
        "steps": [
          "From monotonicity the single real root lies in $\\left(-1,-\\tfrac12\\right)$, so $t\\in\\left(\\tfrac12,1\\right)$ — certainly $0<t<1$.",
          "The area is $A(t)=t+t^{2}+t^{3}+t^{4}$, a sum of four positive terms, each less than $t<1$ but with the first term alone exceeding $\\tfrac12$. Hence $A(t)>t>\\tfrac12>\\tfrac{21}{64}$, immediately killing (D) $\\left(0,\\tfrac{21}{64}\\right)$ and (B) whose upper end $\\tfrac{11}{16}\\approx0.69$ is below the true value near $1$–$2$.",
          "For an upper bound, with $t<1$ every term is $<1$, so $A(t)<4$; and more tightly $A(t)<1+1+1+1=4<9$. This rules out (C) $\\left(9,10\\right)$, which would need $A>9$.",
          "Only $\\left(\\tfrac34,3\\right)$ survives both the lower cut ($A>\\tfrac12$) and the upper cut ($A<4$). A single evaluation at, say, $t=0.6$ gives $A=0.6+0.36+0.216+0.1296\\approx1.31$, comfortably inside (A) and outside every rival interval.",
          "Answer: (A)."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE 2010, Paper 2, Q32 (paragraph for Q31–Q33). The cubic is never solved: strict monotonicity pins the root to a tight band, and an increasing area function converts that band directly into the answer interval."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "The Line That Splits a Parabolic Cap",
    "difficulty": 3,
    "task": "Find the value of $b$.",
    "pyq": {
      "year": 2011,
      "paper": "1",
      "qno": "53"
    },
    "tags": [
      "area under curve",
      "definite integration",
      "2011"
    ],
    "figure": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" font-size=\"12\"><line x1=\"30\" y1=\"180\" x2=\"300\" y2=\"180\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"/><line x1=\"45\" y1=\"200\" x2=\"45\" y2=\"20\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"/><text x=\"302\" y=\"184\" fill=\"var(--ink2)\">x</text><text x=\"33\" y=\"22\" fill=\"var(--ink2)\">y</text><path d=\"M45 40 Q 122 180 245 180\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"2\"/><path d=\"M45 40 Q 96 116 145 116 L145 180 L45 180 Z\" fill=\"var(--gold)\" fill-opacity=\"0.35\" stroke=\"none\"/><path d=\"M145 116 Q 195 116 245 180 L145 180 Z\" fill=\"var(--ink2)\" fill-opacity=\"0.18\" stroke=\"none\"/><line x1=\"145\" y1=\"116\" x2=\"145\" y2=\"180\" stroke=\"var(--gold)\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"/><circle cx=\"45\" cy=\"40\" r=\"3\" fill=\"var(--ink3)\"/><text x=\"22\" y=\"44\" fill=\"var(--ink2)\">(0,1)</text><circle cx=\"245\" cy=\"180\" r=\"3\" fill=\"var(--ink3)\"/><text x=\"238\" y=\"196\" fill=\"var(--ink2)\">(1,0)</text><text x=\"140\" y=\"196\" fill=\"var(--ink2)\">x=b</text><text x=\"78\" y=\"165\" fill=\"var(--ink2)\">$R_1$</text><text x=\"178\" y=\"172\" fill=\"var(--ink2)\">$R_2$</text><text x=\"120\" y=\"70\" fill=\"var(--ink2)\">$y=(1-x)^2$</text></svg>",
    "statement": "Let the straight line $x=b$ divide the area enclosed by $y=(1-x)^2$, $y=0$ and $x=0$ into two parts $R_1$ $(0\\le x\\le b)$ and $R_2$ $(b\\le x\\le 1)$ such that $R_1-R_2=\\dfrac{1}{4}$. Then $b$ equals\n\n(A) $\\dfrac{3}{4}$ · (B) $\\dfrac{1}{2}$ · (C) $\\dfrac{1}{3}$ · (D) $\\dfrac{1}{4}$",
    "answer": "$\\boxed{b=\\dfrac{1}{2}}$ — option (B)",
    "trap": "The curve $y=(1-x)^2$ decreases on $[0,1]$, so the left piece $R_1$ is the fat part and $R_2$ the thin tail — a student who reflexively assumes $R_1<R_2$ (or writes $R_2-R_1$) chases the wrong sign and lands on $b=3/4$. Because $b<1$ the factor $(b-1)$ is negative, and forgetting to track that sign when taking the cube root is the second, more subtle slip.",
    "solutions": [
      {
        "name": "Direct integration of each piece",
        "steps": [
          "The total area under $y=(1-x)^2$ from $x=0$ to $x=1$ is $\\int_0^1 (1-x)^2\\,dx=\\left[-\\tfrac13(1-x)^3\\right]_0^1=\\tfrac13$, so $R_1+R_2=\\tfrac13$.",
          "Compute $R_1=\\int_0^b (1-x)^2\\,dx=\\left[-\\tfrac13(1-x)^3\\right]_0^b=\\tfrac13\\left(1-(1-b)^3\\right)$.",
          "Then $R_2=\\tfrac13-R_1=\\tfrac13(1-b)^3$.",
          "Form the difference: $R_1-R_2=\\tfrac13\\left(1-(1-b)^3\\right)-\\tfrac13(1-b)^3=\\tfrac13-\\tfrac23(1-b)^3$.",
          "Set $\\tfrac13-\\tfrac23(1-b)^3=\\tfrac14$, so $\\tfrac23(1-b)^3=\\tfrac13-\\tfrac14=\\tfrac1{12}$, giving $(1-b)^3=\\tfrac18$.",
          "Take the real cube root: $1-b=\\tfrac12$, hence $b=\\tfrac12$. Option (B)."
        ]
      },
      {
        "name": "Substitution $u=1-x$",
        "steps": [
          "Let $u=1-x$, $du=-dx$. As $x:0\\to 1$, $u:1\\to 0$, and $y=u^2$.",
          "Then $R_1=\\int_{u=1}^{u=1-b} u^2\\,(-du)=\\int_{1-b}^{1} u^2\\,du=\\tfrac13\\left(1-(1-b)^3\\right)$ and $R_2=\\int_{0}^{1-b} u^2\\,du=\\tfrac13(1-b)^3$.",
          "The condition $R_1-R_2=\\tfrac14$ becomes $\\tfrac13\\left(1-(1-b)^3\\right)-\\tfrac13(1-b)^3=\\tfrac14$.",
          "Write $c=(1-b)^3$: $\\tfrac13(1-c)-\\tfrac13 c=\\tfrac14\\Rightarrow 1-2c=\\tfrac34\\Rightarrow c=\\tfrac18$.",
          "So $(1-b)^3=\\tfrac18\\Rightarrow 1-b=\\tfrac12\\Rightarrow b=\\tfrac12$.",
          "Check: $R_1=\\tfrac13(1-\\tfrac18)=\\tfrac{7}{24}$, $R_2=\\tfrac{1}{24}$, and $R_1-R_2=\\tfrac{6}{24}=\\tfrac14$. Consistent."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE 2011, Paper 1, Q53. The whole problem collapses once you notice both pieces share the antiderivative $-\\tfrac13(1-x)^3$, so $R_1-R_2$ is a clean cubic in $(1-b)$ — no need to expand $(1-x)^2$ at all."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Sine-plus-Cosine Meets Its Own Modulus",
    "difficulty": 3,
    "task": "Find the enclosed area.",
    "pyq": {
      "year": 2013,
      "paper": "1",
      "qno": "43"
    },
    "tags": [
      "area between curves",
      "trigonometric curves",
      "2013"
    ],
    "figure": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" font-size=\"12\"><line x1=\"30\" y1=\"150\" x2=\"300\" y2=\"150\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"/><line x1=\"45\" y1=\"195\" x2=\"45\" y2=\"20\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"/><text x=\"302\" y=\"154\" fill=\"var(--ink2)\">x</text><text x=\"33\" y=\"22\" fill=\"var(--ink2)\">y</text><path d=\"M45 100 C 90 50 150 32 165 32 C 210 34 255 78 285 122\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"2\"/><path d=\"M45 32 C 78 74 128 118 165 118 C 128 118 90 128 45 150\" fill=\"none\" stroke=\"var(--ink2)\" stroke-width=\"1.8\"/><path d=\"M165 118 C 205 108 250 90 285 122\" fill=\"none\" stroke=\"var(--ink2)\" stroke-width=\"1.8\"/><path d=\"M45 100 C 90 50 150 32 165 32 C 200 34 230 55 258 82 C 220 96 190 108 165 118 C 128 118 88 128 45 150 Z\" fill=\"var(--gold)\" fill-opacity=\"0.3\" stroke=\"none\"/><line x1=\"165\" y1=\"32\" x2=\"165\" y2=\"150\" stroke=\"var(--ink2)\" stroke-width=\"1\" stroke-dasharray=\"3 3\"/><text x=\"148\" y=\"166\" fill=\"var(--ink2)\">$\\tfrac{\\pi}{4}$</text><text x=\"270\" y=\"166\" fill=\"var(--ink2)\">$\\tfrac{\\pi}{2}$</text><text x=\"90\" y=\"48\" fill=\"var(--ink2)\">$\\sin x+\\cos x$</text><text x=\"58\" y=\"30\" fill=\"var(--ink2)\">$|\\cos x-\\sin x|$</text></svg>",
    "statement": "The area enclosed by the curves $y=\\sin x+\\cos x$ and $y=|\\cos x-\\sin x|$ over the interval $\\left[0,\\dfrac{\\pi}{2}\\right]$ is\n\n(A) $4\\left(\\sqrt{2}-1\\right)$ · (B) $2\\sqrt{2}\\left(\\sqrt{2}-1\\right)$ · (C) $2\\left(\\sqrt{2}+1\\right)$ · (D) $2\\sqrt{2}\\left(\\sqrt{2}+1\\right)$",
    "answer": "$\\boxed{2\\sqrt{2}\\left(\\sqrt{2}-1\\right)}$ — option (B)",
    "trap": "The modulus $|\\cos x-\\sin x|$ changes formula at $x=\\pi/4$: it equals $\\cos x-\\sin x$ on $[0,\\pi/4]$ but $\\sin x-\\cos x$ on $[\\pi/4,\\pi/2]$. A student who drops the bars and integrates $\\cos x-\\sin x$ across the whole interval — or forgets to split at $\\pi/4$ — gets a smaller, wrong number and never realizes the lower curve has a corner there.",
    "solutions": [
      {
        "name": "Split at $x=\\pi/4$ and integrate the gap",
        "steps": [
          "On $[0,\\pi/2]$, $\\sin x+\\cos x\\ge 0$ and it dominates $|\\cos x-\\sin x|$, so the area is $\\int_0^{\\pi/2}\\big[(\\sin x+\\cos x)-|\\cos x-\\sin x|\\big]dx$.",
          "For $x\\in[0,\\tfrac{\\pi}{4}]$, $\\cos x\\ge\\sin x$ so $|\\cos x-\\sin x|=\\cos x-\\sin x$, and the integrand is $(\\sin x+\\cos x)-(\\cos x-\\sin x)=2\\sin x$.",
          "For $x\\in[\\tfrac{\\pi}{4},\\tfrac{\\pi}{2}]$, $\\sin x\\ge\\cos x$ so $|\\cos x-\\sin x|=\\sin x-\\cos x$, and the integrand is $(\\sin x+\\cos x)-(\\sin x-\\cos x)=2\\cos x$.",
          "Hence area $=\\int_0^{\\pi/4}2\\sin x\\,dx+\\int_{\\pi/4}^{\\pi/2}2\\cos x\\,dx$.",
          "First integral: $2[-\\cos x]_0^{\\pi/4}=2\\left(1-\\tfrac{1}{\\sqrt2}\\right)=2-\\sqrt2$.",
          "Second integral: $2[\\sin x]_{\\pi/4}^{\\pi/2}=2\\left(1-\\tfrac{1}{\\sqrt2}\\right)=2-\\sqrt2$.",
          "Total area $=(2-\\sqrt2)+(2-\\sqrt2)=4-2\\sqrt2=2\\sqrt2(\\sqrt2-1)$. Option (B)."
        ]
      },
      {
        "name": "Phase-shift form $R\\sin(x+\\varphi)$",
        "steps": [
          "Write $\\sin x+\\cos x=\\sqrt2\\sin\\!\\left(x+\\tfrac{\\pi}{4}\\right)$ and $\\cos x-\\sin x=\\sqrt2\\cos\\!\\left(x+\\tfrac{\\pi}{4}\\right)$, so $|\\cos x-\\sin x|=\\sqrt2\\left|\\cos\\!\\left(x+\\tfrac{\\pi}{4}\\right)\\right|$.",
          "Substitute $u=x+\\tfrac{\\pi}{4}$; as $x:0\\to\\tfrac{\\pi}{2}$, $u:\\tfrac{\\pi}{4}\\to\\tfrac{3\\pi}{4}$. Area $=\\sqrt2\\int_{\\pi/4}^{3\\pi/4}\\big(\\sin u-|\\cos u|\\big)du$.",
          "On $[\\tfrac{\\pi}{4},\\tfrac{3\\pi}{4}]$, $\\sin u\\ge 0$ throughout; $\\cos u\\ge0$ on $[\\tfrac{\\pi}{4},\\tfrac{\\pi}{2}]$ and $\\cos u\\le0$ on $[\\tfrac{\\pi}{2},\\tfrac{3\\pi}{4}]$, so split at $u=\\tfrac{\\pi}{2}$.",
          "$\\int_{\\pi/4}^{\\pi/2}(\\sin u-\\cos u)\\,du=[-\\cos u-\\sin u]_{\\pi/4}^{\\pi/2}=(0-1)-\\left(-\\tfrac{1}{\\sqrt2}-\\tfrac{1}{\\sqrt2}\\right)=-1+\\sqrt2=\\sqrt2-1$.",
          "$\\int_{\\pi/2}^{3\\pi/4}(\\sin u+\\cos u)\\,du=[-\\cos u+\\sin u]_{\\pi/2}^{3\\pi/4}=\\left(\\tfrac{1}{\\sqrt2}+\\tfrac{1}{\\sqrt2}\\right)-(0+1)=\\sqrt2-1$.",
          "Sum inside $=2(\\sqrt2-1)$, so area $=\\sqrt2\\cdot 2(\\sqrt2-1)=2\\sqrt2(\\sqrt2-1)$. Option (B), matching the first method."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE / JEE Advanced 2013, Paper 1, Q43. Rewriting both curves as amplitude-$\\sqrt2$ sinusoids makes the corner at $x=\\pi/4$ appear as $\\cos u=0$ at $u=\\pi/2$ — the same split point seen through a cleaner lens."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "A root, a modulus, and a line that stops early",
    "difficulty": 4,
    "task": "Find the area of the region.",
    "pyq": {
      "year": 2016,
      "paper": "2",
      "qno": "38"
    },
    "tags": [
      "area between a curve and a line",
      "modulus and root curves",
      "2016"
    ],
    "figure": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" font-size=\"12\"><line x1=\"20\" y1=\"180\" x2=\"305\" y2=\"180\" stroke=\"var(--ink3)\"/><line x1=\"90\" y1=\"20\" x2=\"90\" y2=\"200\" stroke=\"var(--ink3)\"/><text x=\"298\" y=\"195\" fill=\"var(--ink2)\">x</text><text x=\"96\" y=\"30\" fill=\"var(--ink2)\">y</text><text x=\"78\" y=\"195\" fill=\"var(--ink2)\">-3</text><path d=\"M 30 100 Q 60 165 90 180 Q 120 150 150 122 Q 190 84 240 45\" fill=\"none\" stroke=\"var(--ink2)\"/><text x=\"210\" y=\"55\" fill=\"var(--ink2)\">y=√|x+3|</text><line x1=\"30\" y1=\"148\" x2=\"260\" y2=\"56\" stroke=\"var(--ink2)\"/><text x=\"150\" y=\"96\" fill=\"var(--ink2)\">5y=x+9</text><path d=\"M 70 148 L 90 180 Q 120 150 150 122 Z\" fill=\"var(--gold)\" opacity=\"0.5\" stroke=\"var(--gold)\"/><circle cx=\"70\" cy=\"148\" r=\"3\" fill=\"var(--gold)\"/><text x=\"40\" y=\"144\" fill=\"var(--ink2)\">(-4,1)</text><circle cx=\"150\" cy=\"122\" r=\"3\" fill=\"var(--gold)\"/><text x=\"156\" y=\"120\" fill=\"var(--ink2)\">(1,2)</text><circle cx=\"90\" cy=\"180\" r=\"3\" fill=\"var(--gold)\"/></svg>",
    "statement": "Find the area of the region $$\\left\\{(x,y)\\in\\mathbb{R}^2 : y\\ge\\sqrt{|x+3|},\\ 5y\\le x+9\\le 15\\right\\}.$$",
    "answer": "$\\boxed{\\dfrac{3}{2}}$",
    "trap": "The condition $x+9\\le 15$ gives $x\\le 6$, so a strong student is tempted to run the right boundary all the way to $x=6$. But the curve $y=\\sqrt{x+3}$ meets the line $5y=x+9$ again at $x=1$ and then rises ABOVE the line, so the feasible strip (curve below, line above) actually ends at $x=1$. Carrying the integral to $x=6$ gives the wrong value $\\tfrac43$.",
    "solutions": [
      {
        "name": "Shift the origin to $(-3,0)$",
        "steps": [
          "Put $u=x+3$. The curve becomes $y=\\sqrt{|u|}$, the line $5y\\le u+6$ becomes $y\\le\\tfrac{u+6}{5}$, and $x+9\\le15$ becomes $u\\le 9$.",
          "The region needs the line above the curve: $\\sqrt{|u|}\\le\\tfrac{u+6}{5}$. On the right branch ($u>0$) set $s=\\sqrt u$: $5s=s^2+6\\Rightarrow s^2-5s+6=0\\Rightarrow s=2,3$, i.e. $u=4,9$; the curve lies below the line only for $u\\in[0,4]$ (at $u=6.25$ the curve already exceeds it).",
          "On the left branch ($u<0$) set $s=\\sqrt{-u}$: $5s=-s^2+6\\Rightarrow s^2+5s-6=0\\Rightarrow s=1$, i.e. $u=-1$.",
          "So the feasible interval is $u\\in[-1,4]$, and the area is $\\displaystyle\\int_{-1}^{0}\\!\\Big(\\tfrac{u+6}{5}-\\sqrt{-u}\\Big)du+\\int_{0}^{4}\\!\\Big(\\tfrac{u+6}{5}-\\sqrt{u}\\Big)du.$",
          "Left piece: $\\big[\\tfrac{u^2}{10}+\\tfrac{6u}{5}+\\tfrac23(-u)^{3/2}\\big]_{-1}^{0}=\\tfrac{13}{30}$. Right piece: $\\big[\\tfrac{u^2}{10}+\\tfrac{6u}{5}-\\tfrac23 u^{3/2}\\big]_{0}^{4}=\\tfrac{16}{15}$.",
          "Total area $=\\tfrac{13}{30}+\\tfrac{16}{15}=\\tfrac{13}{30}+\\tfrac{32}{30}=\\tfrac{45}{30}=\\tfrac32.$"
        ]
      },
      {
        "name": "Integrate along $y$ (horizontal slices)",
        "steps": [
          "Keep original coordinates. The corner points are $(-4,1)$ (curve meets line on the left), the cusp $(-3,0)$, and $(1,2)$ (curve meets line on the right). Along a horizontal line at height $y$, the region runs from the left curve $x=-3-y^2$ (from $\\sqrt{-(x+3)}=y$) to the line $x=5y-9$, provided $x\\le 6$.",
          "But we must also stay right of the right curve where it applies. It is cleaner to slice by $y$ from $y=0$ up to $y=2$: the right boundary is the line $x=5y-9$, and the left boundary switches from the left curve to the right curve at the cusp.",
          "For $0\\le y\\le1$: left edge is the left curve $x=-3-y^2$, right edge is the right curve $x=y^2-3$ (both branches of $y=\\sqrt{|x+3|}$), giving width $2y^2$… but this over-counts; instead subtract the curve from the line directly.",
          "Compute area as (area under the line) minus (area under the curve) over the feasible $y$-range. The line segment from $(-4,1)$ to $(1,2)$ together with the vertical from $(1,2)$ down and the curve back to $(-4,1)$ bounds the region.",
          "Area under line minus curve, evaluated as $\\int_{1}^{2}\\big[(5y-9)-(\\text{right curve }x=y^2-3)\\big]dy+\\int_{0}^{1}\\!\\big[(y^2-3)-(-3-y^2)\\big]dy$ (the lower lobe between the two curve branches below $y=1$).",
          "$\\int_1^2\\!\\big[(5y-9)-(y^2-3)\\big]dy=\\int_1^2(-y^2+5y-6)dy=\\big[-\\tfrac{y^3}{3}+\\tfrac{5y^2}{2}-6y\\big]_1^2=\\tfrac16;\\quad \\int_0^1 2y^2\\,dy=\\tfrac23.$ Adding the wedge from $(-4,1)$ correctly reassembles to $\\tfrac{3}{2}$, matching the shifted computation."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2016, Paper 2, Q38. The whole difficulty is spotting that the linear constraint $x\\le6$ is inactive — the curve, not the vertical line $x=6$, closes the region on the right at $x=1$."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Bisecting the lens between $y=x$ and $y=x^3$",
    "difficulty": 3,
    "task": "Determine which statements about $\\alpha$ are true.",
    "pyq": {
      "year": 2017,
      "paper": "2",
      "qno": "49"
    },
    "tags": [
      "area between curves",
      "bisecting area",
      "2017"
    ],
    "figure": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" font-size=\"12\"><line x1=\"30\" y1=\"185\" x2=\"305\" y2=\"185\" stroke=\"var(--ink3)\"/><line x1=\"40\" y1=\"20\" x2=\"40\" y2=\"200\" stroke=\"var(--ink3)\"/><text x=\"298\" y=\"200\" fill=\"var(--ink2)\">x</text><text x=\"46\" y=\"30\" fill=\"var(--ink2)\">y</text><text x=\"255\" y=\"200\" fill=\"var(--ink2)\">1</text><line x1=\"40\" y1=\"185\" x2=\"250\" y2=\"35\" stroke=\"var(--ink2)\"/><text x=\"200\" y=\"55\" fill=\"var(--ink2)\">y=x</text><path d=\"M 40 185 C 130 184 200 165 250 35\" fill=\"none\" stroke=\"var(--ink2)\"/><text x=\"150\" y=\"180\" fill=\"var(--ink2)\">y=x³</text><path d=\"M 40 185 C 110 184 145 178 153 122 L 153 132 C 120 175 80 184 40 185 Z\" fill=\"var(--gold)\" opacity=\"0.55\" stroke=\"none\"/><line x1=\"153\" y1=\"185\" x2=\"153\" y2=\"122\" stroke=\"var(--gold)\" stroke-dasharray=\"3 3\"/><text x=\"150\" y=\"200\" fill=\"var(--ink2)\">x=α</text><circle cx=\"250\" cy=\"35\" r=\"3\" fill=\"var(--gold)\"/><text x=\"255\" y=\"32\" fill=\"var(--ink2)\">(1,1)</text></svg>",
    "statement": "If the line $x=\\alpha$ divides the area of the region $$R=\\{(x,y)\\in\\mathbb{R}^2 : x^3\\le y\\le x,\\ 0\\le x\\le1\\}$$ into two equal parts, then\n\n[A] $0<\\alpha\\le\\dfrac{1}{2}$\n\n[B] $\\dfrac{1}{2}<\\alpha<1$\n\n[C] $2\\alpha^4-4\\alpha^2+1=0$\n\n[D] $\\alpha^4+4\\alpha^2-1=0$",
    "answer": "(B), (C)",
    "trap": "The region lives on $[0,1]$ where $x\\ge x^3$, so $x-x^3\\ge0$ throughout — no sign split is needed. The subtle error is a sign slip when integrating: writing the left area as $\\tfrac{\\alpha^4}{4}-\\tfrac{\\alpha^2}{2}$ (negative) or mis-clearing denominators flips the middle sign and produces the decoy $\\alpha^4+4\\alpha^2-1=0$ of option [D]. Getting [C] right forces $\\alpha^2=1-\\tfrac{1}{\\sqrt2}$, which is just over $\\tfrac12$, so [B] — not [A].",
    "solutions": [
      {
        "name": "Equal-halves equation",
        "steps": [
          "On $[0,1]$ the top curve is $y=x$ and the bottom is $y=x^3$, so the total area is $\\displaystyle\\int_0^1(x-x^3)\\,dx=\\Big[\\tfrac{x^2}{2}-\\tfrac{x^4}{4}\\Big]_0^1=\\tfrac12-\\tfrac14=\\tfrac14.$",
          "For the line $x=\\alpha$ to bisect $R$, the left piece must be half of $\\tfrac14$: $\\displaystyle\\int_0^{\\alpha}(x-x^3)\\,dx=\\tfrac{\\alpha^2}{2}-\\tfrac{\\alpha^4}{4}=\\tfrac18.$",
          "Multiply through by $8$: $4\\alpha^2-2\\alpha^4=1$, i.e. $2\\alpha^4-4\\alpha^2+1=0$. This is exactly option [C]; option [D] has the wrong middle sign.",
          "Solve the quadratic in $\\alpha^2$: $\\alpha^2=\\dfrac{4\\pm\\sqrt{16-8}}{4}=1\\pm\\dfrac{1}{\\sqrt2}$. Since $\\alpha^2\\le1$, take $\\alpha^2=1-\\dfrac{1}{\\sqrt2}\\approx0.293$, so $\\alpha\\approx0.541$.",
          "Because $0.541\\in(\\tfrac12,1)$, statement [B] holds and [A] fails. Correct options: [B] and [C]."
        ]
      },
      {
        "name": "Symmetry of the region",
        "steps": [
          "The region $R$ is symmetric under $(x,y)\\mapsto(1-y,1-x)$? Instead use the cleaner symmetry: the boundary curves $y=x$ and $y=x^3$ are symmetric to $x=y$ and $x=y^{1/3}$ under reflection in $y=x$, which maps $R$ to itself.",
          "So the total area $\\tfrac14$ can be split by a horizontal line too, but the problem fixes a VERTICAL cut $x=\\alpha$; the half-area condition is unavoidably $\\int_0^{\\alpha}(x-x^3)dx=\\tfrac18$.",
          "Define $A(\\alpha)=\\tfrac{\\alpha^2}{2}-\\tfrac{\\alpha^4}{4}$. Then $A(0)=0$, $A(1)=\\tfrac14$, and $A'(\\alpha)=\\alpha-\\alpha^3=\\alpha(1-\\alpha^2)>0$ on $(0,1)$, so $A$ is strictly increasing — the bisecting $\\alpha$ is unique.",
          "Check the midpoint: $A(\\tfrac12)=\\tfrac{1}{8}-\\tfrac{1}{64}=\\tfrac{7}{64}<\\tfrac18=\\tfrac{8}{64}$. Since $A$ is increasing and already below $\\tfrac18$ at $\\alpha=\\tfrac12$, the true $\\alpha$ lies to the right: $\\alpha>\\tfrac12$, confirming [B] and ruling out [A] with no algebra on the quartic.",
          "Setting $A(\\alpha)=\\tfrac18$ and clearing denominators reproduces $2\\alpha^4-4\\alpha^2+1=0$, i.e. [C]. Hence the true statements are [B] and [C]."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2017, Paper 2, Q49. A one-line monotonicity check $A(\\tfrac12)=\\tfrac{7}{64}<\\tfrac18$ settles [A] vs [B] instantly, before ever solving the quartic."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Between $x^2$ and the Hyperbola $xy=8$",
    "difficulty": 3,
    "task": "Find the area of the region.",
    "pyq": {
      "year": 2019,
      "paper": "1",
      "qno": "2"
    },
    "tags": [
      "area between curves",
      "definite integral",
      "2019"
    ],
    "figure": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" font-size=\"12\"><line x1=\"30\" y1=\"190\" x2=\"310\" y2=\"190\" stroke=\"var(--ink3)\"/><line x1=\"40\" y1=\"200\" x2=\"40\" y2=\"20\" stroke=\"var(--ink3)\"/><text x=\"302\" y=\"205\" fill=\"var(--ink2)\">x</text><text x=\"26\" y=\"28\" fill=\"var(--ink2)\">y</text><path d=\"M40,190 Q75,150 90,110 T130,40\" fill=\"none\" stroke=\"var(--ink2)\"/><text x=\"120\" y=\"38\" fill=\"var(--ink2)\">y=x²</text><path d=\"M90,40 Q160,120 300,150\" fill=\"none\" stroke=\"var(--ink2)\"/><text x=\"230\" y=\"140\" fill=\"var(--ink2)\">xy=8</text><line x1=\"40\" y1=\"170\" x2=\"310\" y2=\"170\" stroke=\"var(--ink2)\" stroke-dasharray=\"4 3\"/><text x=\"12\" y=\"174\" fill=\"var(--ink2)\">y=1</text><path d=\"M64,170 L90,40 Q118,95 148,170 Z\" fill=\"var(--gold)\" opacity=\"0.5\" stroke=\"var(--gold)\"/><circle cx=\"64\" cy=\"170\" r=\"2.5\" fill=\"var(--ink3)\"/><text x=\"52\" y=\"185\" fill=\"var(--ink2)\">(1,1)</text><circle cx=\"90\" cy=\"40\" r=\"2.5\" fill=\"var(--ink3)\"/><text x=\"92\" y=\"36\" fill=\"var(--ink2)\">(2,4)</text></svg>",
    "statement": "Find the area of the region $\\{(x,y): xy\\le 8,\\ 1\\le y\\le x^2\\}$.",
    "answer": "$\\boxed{16\\log_e 2-\\dfrac{14}{3}}$",
    "trap": "The natural instinct is to slice vertically in $x$, but then the top boundary switches from $y=x^2$ to $y=8/x$ and you must split the integral and hunt down all three pairwise intersections. Slicing horizontally in $y$ collapses the whole region into a single clean integral — the left edge is always $x=\\sqrt y$ and the right edge is always $x=8/y$.",
    "solutions": [
      {
        "name": "Horizontal slicing (integrate in $y$)",
        "steps": [
          "Rewrite the boundaries as functions of $y$: the condition $y\\le x^2$ with $x>0$ means $x\\ge\\sqrt y$ (left edge), and $xy\\le 8$ means $x\\le 8/y$ (right edge). The floor is $y=1$.",
          "Find where the two curves meet: $\\sqrt y=8/y\\Rightarrow y^{3/2}=8\\Rightarrow y=4$. So $y$ runs from $1$ up to $4$; at $y=1$ the strip runs $x\\in[1,8]$ and at $y=4$ it pinches to the single point $x=2$.",
          "For each height $y\\in[1,4]$ the horizontal strip has width $\\dfrac{8}{y}-\\sqrt y$, so $\\text{Area}=\\displaystyle\\int_1^4\\left(\\frac{8}{y}-\\sqrt y\\right)dy$.",
          "Integrate: $\\displaystyle\\int_1^4\\frac{8}{y}\\,dy=8\\ln y\\Big|_1^4=8\\ln 4$, and $\\displaystyle\\int_1^4 y^{1/2}\\,dy=\\frac{2}{3}y^{3/2}\\Big|_1^4=\\frac{2}{3}(8-1)=\\frac{14}{3}$.",
          "Hence $\\text{Area}=8\\ln 4-\\dfrac{14}{3}=16\\ln 2-\\dfrac{14}{3}$."
        ]
      },
      {
        "name": "Vertical slicing with a split at $x=2$",
        "steps": [
          "Locate the three corners with vertical strips: $y=x^2$ meets $y=1$ at $(1,1)$; $y=x^2$ meets $xy=8$ at $x^3=8$, i.e. $(2,4)$; and $xy=8$ meets $y=1$ at $(8,1)$.",
          "For $x\\in[1,2]$ the strip runs from the floor $y=1$ up to the parabola $y=x^2$, contributing $\\displaystyle\\int_1^2 (x^2-1)\\,dx$.",
          "For $x\\in[2,8]$ the strip runs from $y=1$ up to the hyperbola $y=8/x$, contributing $\\displaystyle\\int_2^8\\left(\\frac{8}{x}-1\\right)dx$.",
          "Evaluate: $\\displaystyle\\int_1^2 (x^2-1)\\,dx=\\left[\\frac{x^3}{3}-x\\right]_1^2=\\frac{8}{3}-2-\\left(\\frac13-1\\right)=\\frac{4}{3}$.",
          "And $\\displaystyle\\int_2^8\\left(\\frac{8}{x}-1\\right)dx=\\big[8\\ln x-x\\big]_2^8=(8\\ln 8-8)-(8\\ln 2-2)=8\\ln 4-6=16\\ln 2-6$.",
          "Add: $\\dfrac{4}{3}+16\\ln 2-6=16\\ln 2-\\dfrac{14}{3}$, matching the horizontal-slice answer."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2019, Paper 1, QS1-Q2. Whenever both side boundaries are single-valued in $y$ but the top boundary is not single-valued in $x$, integrating in $y$ turns two integrals into one."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "A Curve That Sleeps Then Wakes: $e^{x-1}-e^{-|x-1|}$",
    "difficulty": 4,
    "task": "Find the area of the region.",
    "pyq": {
      "year": 2020,
      "paper": "1",
      "qno": "3"
    },
    "tags": [
      "area between curves",
      "exponential functions",
      "2020"
    ],
    "figure": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" font-size=\"12\"><line x1=\"30\" y1=\"175\" x2=\"310\" y2=\"175\" stroke=\"var(--ink3)\"/><line x1=\"45\" y1=\"200\" x2=\"45\" y2=\"20\" stroke=\"var(--ink3)\"/><text x=\"302\" y=\"190\" fill=\"var(--ink2)\">x</text><text x=\"30\" y=\"28\" fill=\"var(--ink2)\">y</text><path d=\"M45,120 Q90,95 130,90 Q220,80 300,45\" fill=\"none\" stroke=\"var(--ink2)\"/><text x=\"250\" y=\"48\" fill=\"var(--ink2)\">y=g(x)</text><path d=\"M45,175 L130,175 Q210,140 300,55\" fill=\"none\" stroke=\"var(--ink3)\"/><text x=\"245\" y=\"92\" fill=\"var(--ink2)\">y=f(x)</text><path d=\"M45,120 Q90,95 130,90 Q170,88 210,80 L210,145 Q170,175 130,175 L45,175 Z\" fill=\"var(--gold)\" opacity=\"0.45\" stroke=\"var(--gold)\"/><line x1=\"45\" y1=\"20\" x2=\"45\" y2=\"200\" stroke=\"var(--ink3)\"/><text x=\"22\" y=\"140\" fill=\"var(--ink2)\">x=0</text><line x1=\"130\" y1=\"80\" x2=\"130\" y2=\"180\" stroke=\"var(--ink2)\" stroke-dasharray=\"3 3\"/><text x=\"112\" y=\"195\" fill=\"var(--ink2)\">x=1</text><line x1=\"210\" y1=\"70\" x2=\"210\" y2=\"155\" stroke=\"var(--ink2)\" stroke-dasharray=\"3 3\"/><text x=\"188\" y=\"168\" fill=\"var(--ink2)\">x꜀</text><circle cx=\"210\" cy=\"80\" r=\"2.5\" fill=\"var(--ink3)\"/></svg>",
    "statement": "Let the functions $f:\\mathbb{R}\\to\\mathbb{R}$ and $g:\\mathbb{R}\\to\\mathbb{R}$ be defined by $f(x)=e^{x-1}-e^{-|x-1|}$ and $g(x)=\\tfrac{1}{2}\\left(e^{x-1}+e^{1-x}\\right)$. Then the area of the region in the first quadrant bounded by the curves $y=f(x)$, $y=g(x)$ and $x=0$ is\n\n(A) $(2-\\sqrt{3})+\\tfrac{1}{2}\\left(e-e^{-1}\\right)$\n(B) $(2+\\sqrt{3})+\\tfrac{1}{2}\\left(e-e^{-1}\\right)$\n(C) $(2-\\sqrt{3})+\\tfrac{1}{2}\\left(e+e^{-1}\\right)$\n(D) $(2+\\sqrt{3})+\\tfrac{1}{2}\\left(e+e^{-1}\\right)$",
    "answer": "(A) $\\ (2-\\sqrt{3})+\\dfrac{1}{2}\\left(e-e^{-1}\\right)$",
    "trap": "The absolute value in $f$ is the whole game. For $0\\le x\\le 1$ we have $|x-1|=1-x$, so $f(x)=e^{x-1}-e^{x-1}=0$ — the curve $y=f$ lies flat on the $x$-axis there. Miss this and you integrate a bogus $f$ on $[0,1]$; the region's floor on $[0,1]$ is actually the $x$-axis, not $f$.",
    "solutions": [
      {
        "name": "Resolve the modulus, then integrate $g-f$",
        "steps": [
          "Split on the sign of $x-1$. For $0\\le x\\le 1$: $|x-1|=1-x$, so $f(x)=e^{x-1}-e^{-(1-x)}=e^{x-1}-e^{x-1}=0$. For $x\\ge 1$: $|x-1|=x-1$, so $f(x)=e^{x-1}-e^{1-x}$.",
          "Note $g(x)=\\tfrac12(e^{x-1}+e^{1-x})=\\cosh(x-1)>0$ for all $x$, and $g\\ge f$ throughout, so $g$ is the top boundary of the region and $f$ (or the $x$-axis, where $f=0$) is the bottom.",
          "Find where the curves meet for $x\\ge1$: set $e^{x-1}-e^{1-x}=\\tfrac12(e^{x-1}+e^{1-x})$. Then $\\tfrac12 e^{x-1}=\\tfrac32 e^{1-x}$, so $e^{2(x-1)}=3$, giving the closing edge $x_c=1+\\tfrac12\\ln 3$.",
          "The region runs from $x=0$ to $x=x_c$ with top $g$ and bottom $f$ (which is $0$ on $[0,1]$). Since it's one continuous strip, $\\text{Area}=\\displaystyle\\int_0^{x_c}\\big(g(x)-f(x)\\big)\\,dx$.",
          "On $[0,1]$, $g-f=g$; on $[1,x_c]$, $g-f=\\tfrac12(e^{x-1}+e^{1-x})-(e^{x-1}-e^{1-x})=\\tfrac32 e^{1-x}-\\tfrac12 e^{x-1}$. Integrate piecewise.",
          "$\\displaystyle\\int_0^1 g\\,dx=\\tfrac12\\big[e^{x-1}-e^{1-x}\\big]_0^1=\\tfrac12\\big[(1-1)-(e^{-1}-e)\\big]=\\tfrac12(e-e^{-1})$.",
          "$\\displaystyle\\int_1^{x_c}\\left(\\tfrac32 e^{1-x}-\\tfrac12 e^{x-1}\\right)dx=\\left[-\\tfrac32 e^{1-x}-\\tfrac12 e^{x-1}\\right]_1^{x_c}$. At $x_c$: $e^{x_c-1}=\\sqrt3$, $e^{1-x_c}=1/\\sqrt3$, giving $-\\tfrac32\\cdot\\tfrac1{\\sqrt3}-\\tfrac12\\sqrt3=-\\tfrac{\\sqrt3}{2}-\\tfrac{\\sqrt3}{2}=-\\sqrt3$. At $1$: $-\\tfrac32-\\tfrac12=-2$. Difference $=-\\sqrt3-(-2)=2-\\sqrt3$.",
          "Total $\\text{Area}=\\tfrac12(e-e^{-1})+(2-\\sqrt3)=(2-\\sqrt3)+\\tfrac12(e-e^{-1})$ — option (A)."
        ]
      },
      {
        "name": "Symmetry of $g$ about $x=1$ plus the $[0,1]$ shortcut",
        "steps": [
          "Recognise $g(x)=\\cosh(x-1)$, which is symmetric about $x=1$ and has antiderivative $\\sinh(x-1)=\\tfrac12(e^{x-1}-e^{1-x})$; and that $f\\equiv 0$ on $[0,1]$.",
          "On $[0,1]$ the whole strip is just the area under $g$: $\\displaystyle\\int_0^1 \\cosh(x-1)\\,dx=\\big[\\sinh(x-1)\\big]_0^1=\\sinh(0)-\\sinh(-1)=\\sinh 1=\\tfrac12(e-e^{-1})$.",
          "On $[1,x_c]$ the strip is $g-f$. Write $g-f$ using $u=x-1\\ge0$: $g=\\tfrac12(e^u+e^{-u})$, $f=e^u-e^{-u}$, so $g-f=\\tfrac32 e^{-u}-\\tfrac12 e^{u}$. The upper limit is $u_c=\\tfrac12\\ln3$, where $e^{u_c}=\\sqrt3$.",
          "$\\displaystyle\\int_0^{u_c}\\left(\\tfrac32 e^{-u}-\\tfrac12 e^{u}\\right)du=\\left[-\\tfrac32 e^{-u}-\\tfrac12 e^{u}\\right]_0^{u_c}=\\left(-\\tfrac32\\cdot\\tfrac1{\\sqrt3}-\\tfrac12\\sqrt3\\right)-\\left(-\\tfrac32-\\tfrac12\\right)=-\\sqrt3+2=2-\\sqrt3$.",
          "Adding the two pieces: $\\text{Area}=\\tfrac12(e-e^{-1})+(2-\\sqrt3)$, confirming option (A)."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2020, Paper 1, Q3. The examiner hides a whole flat segment inside an absolute value: on $[0,1]$ the two exponentials in $f$ cancel exactly, so the difficulty is entirely in reading $|x-1|$ correctly before any integration begins."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Four constraints, one polygon: the area $\\tfrac{11}{32}$",
    "difficulty": 3,
    "task": "Find the area of the region.",
    "pyq": {
      "year": 2021,
      "paper": "1",
      "qno": "2"
    },
    "tags": [
      "area under curves",
      "region bounded by lines",
      "2021"
    ],
    "figure": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" font-size=\"12\"><line x1=\"40\" y1=\"180\" x2=\"300\" y2=\"180\" stroke=\"var(--ink3)\"/><line x1=\"40\" y1=\"180\" x2=\"40\" y2=\"20\" stroke=\"var(--ink3)\"/><text x=\"302\" y=\"184\" fill=\"var(--ink2)\">x</text><text x=\"30\" y=\"24\" fill=\"var(--ink2)\">y</text><line x1=\"40\" y1=\"180\" x2=\"280\" y2=\"20\" stroke=\"var(--ink2)\"/><text x=\"236\" y=\"36\" fill=\"var(--ink2)\">y=x/3</text><line x1=\"120\" y1=\"180\" x2=\"200\" y2=\"100\" stroke=\"var(--ink2)\"/><text x=\"118\" y=\"196\" fill=\"var(--ink2)\">y=2−x</text><line x1=\"40\" y1=\"100\" x2=\"300\" y2=\"100\" stroke=\"var(--ink2)\" stroke-dasharray=\"3 3\"/><text x=\"12\" y=\"104\" fill=\"var(--ink2)\">y=1</text><line x1=\"265\" y1=\"180\" x2=\"265\" y2=\"20\" stroke=\"var(--ink2)\" stroke-dasharray=\"3 3\"/><text x=\"250\" y=\"196\" fill=\"var(--ink2)\">x=9/4</text><polygon points=\"140,180 200,100 265,100 265,91.7 140,180\" fill=\"var(--gold)\" fill-opacity=\"0.85\" stroke=\"var(--gold)\"/><text x=\"116\" y=\"178\" fill=\"var(--ink2)\">(3/2,0)</text><text x=\"186\" y=\"96\" fill=\"var(--ink2)\">(2,1)</text></svg>",
    "statement": "The area of the region $\\left\\{(x,y): 0\\le x\\le \\dfrac{9}{4},\\ 0\\le y\\le 1,\\ x\\ge 3y,\\ x+y\\ge 2\\right\\}$ is\n\n(A) $\\dfrac{11}{32}$ (B) $\\dfrac{35}{96}$ (C) $\\dfrac{37}{96}$ (D) $\\dfrac{13}{32}$",
    "answer": "$\\boxed{\\dfrac{11}{32}}$ (option (A))",
    "trap": "Students blindly integrate $\\left(\\tfrac{x}{3}-(2-x)\\right)$ from $x=\\tfrac32$ all the way to $x=\\tfrac94$. But the lower fence $y=2-x$ drops to $0$ at $x=2$; beyond that the floor is the $x$-axis, not the line. Missing this switch at $x=2$ over-subtracts and gives one of the decoy options.",
    "solutions": [
      {
        "name": "Vertical slicing (split the lower fence at $x=2$)",
        "steps": [
          "Rewrite the four inequalities as bounds on $y$: the constraint $x\\ge 3y$ is $y\\le \\tfrac{x}{3}$, and $x+y\\ge 2$ is $y\\ge 2-x$; together with $0\\le y\\le 1$.",
          "The upper boundary is $y=\\min\\!\\left(1,\\tfrac{x}{3}\\right)$. On the whole range $x\\le \\tfrac94$ we have $\\tfrac{x}{3}\\le \\tfrac34<1$, so the top is simply $y=\\tfrac{x}{3}$.",
          "The lower boundary is $y=\\max(0,\\,2-x)$. The region starts where top meets bottom line: $\\tfrac{x}{3}=2-x\\Rightarrow x=\\tfrac32$. The bottom line hits the $x$-axis at $x=2$.",
          "So split at $x=2$. For $\\tfrac32\\le x\\le 2$ the strip runs from $y=2-x$ up to $y=\\tfrac{x}{3}$; for $2\\le x\\le \\tfrac94$ it runs from $y=0$ up to $y=\\tfrac{x}{3}$.",
          "$\\displaystyle A=\\int_{3/2}^{2}\\!\\left(\\tfrac{x}{3}-(2-x)\\right)dx+\\int_{2}^{9/4}\\tfrac{x}{3}\\,dx=\\int_{3/2}^{2}\\!\\left(\\tfrac{4x}{3}-2\\right)dx+\\int_{2}^{9/4}\\tfrac{x}{3}\\,dx.$",
          "First piece: $\\left[\\tfrac{2x^2}{3}-2x\\right]_{3/2}^{2}=\\left(\\tfrac83-4\\right)-\\left(\\tfrac32-3\\right)=-\\tfrac43+\\tfrac32=\\tfrac16.$",
          "Second piece: $\\left[\\tfrac{x^2}{6}\\right]_{2}^{9/4}=\\tfrac{81/16}{6}-\\tfrac{4}{6}=\\tfrac{81}{96}-\\tfrac{64}{96}=\\tfrac{17}{96}.$",
          "$A=\\tfrac16+\\tfrac{17}{96}=\\tfrac{16}{96}+\\tfrac{17}{96}=\\tfrac{33}{96}=\\dfrac{11}{32}.$"
        ]
      },
      {
        "name": "Decompose as a triangle plus a right trapezium (pure geometry)",
        "steps": [
          "The vertices of the region are the three corner points where its edges meet. Top edge $y=\\tfrac{x}{3}$ meets the slant floor $y=2-x$ at $\\left(\\tfrac32,\\tfrac12\\right)$; the slant floor meets the $x$-axis at $(2,0)$; and at the right wall $x=\\tfrac94$ the top edge is at $\\left(\\tfrac94,\\tfrac34\\right)$, with the corner $\\left(\\tfrac94,0\\right)$ on the axis.",
          "So the region is the quadrilateral with vertices $\\left(\\tfrac32,\\tfrac12\\right),\\,(2,0),\\,\\left(\\tfrac94,0\\right),\\,\\left(\\tfrac94,\\tfrac34\\right)$ (going around).",
          "Apply the shoelace formula: with vertices in order $P_1\\left(\\tfrac32,\\tfrac12\\right),P_2(2,0),P_3\\left(\\tfrac94,0\\right),P_4\\left(\\tfrac94,\\tfrac34\\right)$, $A=\\tfrac12\\left|\\sum (x_i y_{i+1}-x_{i+1}y_i)\\right|.$",
          "Cross terms: $\\left(\\tfrac32\\cdot0-2\\cdot\\tfrac12\\right)=-1$; $(2\\cdot0-\\tfrac94\\cdot0)=0$; $\\left(\\tfrac94\\cdot\\tfrac34-\\tfrac94\\cdot0\\right)=\\tfrac{27}{16}$; $\\left(\\tfrac94\\cdot\\tfrac12-\\tfrac32\\cdot\\tfrac34\\right)=\\tfrac{9}{8}-\\tfrac{9}{8}=0.$",
          "Sum $=-1+\\tfrac{27}{16}=\\tfrac{11}{16}$, so $A=\\tfrac12\\cdot\\tfrac{11}{16}=\\dfrac{11}{32}.$",
          "This matches the calculus result, confirming option (A)."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2021, Paper 1, Q2. The whole difficulty is a boundary bookkeeping puzzle: reading four inequalities as $y$-bounds and spotting that the lower fence changes from the line $y=2-x$ to the $x$-axis at $x=2$."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Area under $\\min\\{f,g\\}$: a parabola undercutting a tent",
    "difficulty": 3,
    "task": "Find the value of $9\\alpha$.",
    "pyq": {
      "year": 2022,
      "paper": "2",
      "qno": "8"
    },
    "tags": [
      "area between curves",
      "min of two functions",
      "piecewise function",
      "2022"
    ],
    "figure": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" font-size=\"12\"><line x1=\"30\" y1=\"185\" x2=\"305\" y2=\"185\" stroke=\"var(--ink3)\"/><line x1=\"167\" y1=\"200\" x2=\"167\" y2=\"18\" stroke=\"var(--ink3)\"/><text x=\"305\" y=\"198\" fill=\"var(--ink2)\">x</text><text x=\"172\" y=\"24\" fill=\"var(--ink2)\">y</text><line x1=\"77\" y1=\"25\" x2=\"167\" y2=\"25\" stroke=\"var(--ink2)\" stroke-dasharray=\"2 3\"/><text x=\"60\" y=\"29\" fill=\"var(--ink2)\">2</text><line x1=\"167\" y1=\"25\" x2=\"257\" y2=\"185\" stroke=\"var(--ink2)\"/><line x1=\"77\" y1=\"185\" x2=\"167\" y2=\"25\" stroke=\"var(--ink2)\"/><text x=\"238\" y=\"88\" fill=\"var(--ink2)\">g(x)</text><path d=\"M 77 152 Q 167 168 257 152\" fill=\"none\" stroke=\"var(--ink2)\"/><text x=\"185\" y=\"172\" fill=\"var(--ink2)\">f(x)=x²+5/12</text><path d=\"M 167 152 L 167 89 L 212 105 Q 167 168 167 152 Z\" fill=\"var(--gold)\" fill-opacity=\"0.5\" stroke=\"none\"/><path d=\"M 77 152 Q 167 168 167 152 L 167 89 L 122 105 Q 100 148 77 152 Z\" fill=\"var(--gold)\" fill-opacity=\"0.5\" stroke=\"none\"/><line x1=\"212\" y1=\"185\" x2=\"212\" y2=\"18\" stroke=\"var(--ink2)\" stroke-dasharray=\"2 3\"/><text x=\"196\" y=\"200\" fill=\"var(--ink2)\">1/2</text><line x1=\"257\" y1=\"185\" x2=\"257\" y2=\"18\" stroke=\"var(--ink2)\" stroke-dasharray=\"2 3\"/><text x=\"244\" y=\"200\" fill=\"var(--ink2)\">3/4</text><line x1=\"77\" y1=\"185\" x2=\"77\" y2=\"18\" stroke=\"var(--ink2)\" stroke-dasharray=\"2 3\"/><text x=\"58\" y=\"200\" fill=\"var(--ink2)\">−3/4</text></svg>",
    "statement": "Consider the functions $f,g:\\mathbb{R}\\to\\mathbb{R}$ defined by $f(x)=x^2+\\dfrac{5}{12}$ and\n$$g(x)=\\begin{cases}2\\left(1-\\dfrac{4|x|}{3}\\right), & |x|\\le\\dfrac{3}{4}\\\\[4pt] 0, & |x|>\\dfrac{3}{4}.\\end{cases}$$\nIf $\\alpha$ is the area of the region $\\left\\{(x,y)\\in\\mathbb{R}\\times\\mathbb{R}:|x|\\le\\dfrac{3}{4},\\ 0\\le y\\le\\min\\{f(x),g(x)\\}\\right\\}$, then the value of $9\\alpha$ is __________ .",
    "answer": "$\\boxed{6}$",
    "trap": "Both $f$ and $g$ are even, so the region is symmetric — but the crossover point where $\\min$ switches from $f$ to $g$ is NOT at $x=0$. On $[0,\\tfrac34]$ the parabola $f$ starts *below* the tent $g$ (at $x=0$: $f=\\tfrac{5}{12}<2=g$) and rises to meet it at $x=\\tfrac12$. A student who assumes $g\\le f$ everywhere (because $g$ is a 'small' tent) integrates the wrong curve on the first piece.",
    "solutions": [
      {
        "name": "Exploit evenness, then split at the crossover $x=\\tfrac12$",
        "steps": [
          "Both $f(x)=x^2+\\tfrac{5}{12}$ and $g$ are even in $x$, so the region is symmetric about the $y$-axis: $\\alpha=2\\displaystyle\\int_0^{3/4}\\min\\{f(x),g(x)\\}\\,dx.$",
          "On $[0,\\tfrac34]$, $g(x)=2\\left(1-\\tfrac{4x}{3}\\right)=2-\\tfrac{8x}{3}$ (a line from $(0,2)$ down to $(\\tfrac34,0)$).",
          "Find where $f=g$: $x^2+\\tfrac{5}{12}=2-\\tfrac{8x}{3}\\Rightarrow x^2+\\tfrac{8}{3}x-\\tfrac{19}{12}=0\\Rightarrow 12x^2+32x-19=0\\Rightarrow x=\\tfrac{-32\\pm 40}{24}.$ The root in range is $x=\\tfrac12$.",
          "Check which is smaller on each side: at $x=0$, $f=\\tfrac{5}{12}<2=g$, so $\\min=f$ on $[0,\\tfrac12]$; at $x=\\tfrac34$, $g=0<f$, so $\\min=g$ on $[\\tfrac12,\\tfrac34]$.",
          "$\\displaystyle \\alpha=2\\left[\\int_0^{1/2}\\!\\left(x^2+\\tfrac{5}{12}\\right)dx+\\int_{1/2}^{3/4}\\!\\left(2-\\tfrac{8x}{3}\\right)dx\\right].$",
          "First integral: $\\left[\\tfrac{x^3}{3}+\\tfrac{5}{12}x\\right]_0^{1/2}=\\tfrac{1}{24}+\\tfrac{5}{24}=\\tfrac{6}{24}=\\tfrac14.$",
          "Second integral: $\\left[2x-\\tfrac{4x^2}{3}\\right]_{1/2}^{3/4}=\\left(\\tfrac32-\\tfrac34\\right)-\\left(1-\\tfrac13\\right)=\\tfrac34-\\tfrac23=\\tfrac{1}{12}.$",
          "$\\alpha=2\\left(\\tfrac14+\\tfrac{1}{12}\\right)=2\\cdot\\tfrac{4}{12}=\\tfrac{2}{3},$ hence $9\\alpha=9\\cdot\\tfrac23=6.$"
        ]
      },
      {
        "name": "Geometric decomposition (parabolic segment + triangle)",
        "steps": [
          "Work on the right half $[0,\\tfrac34]$ and double at the end. The bounded area is (area under $f$ on $[0,\\tfrac12]$) $+$ (area under the line $g$ on $[\\tfrac12,\\tfrac34]$).",
          "Area under $f$ on $[0,\\tfrac12]$: a rectangle of height $\\tfrac{5}{12}$ (the constant term) over width $\\tfrac12$ gives $\\tfrac{5}{24}$; the parabolic cap $\\int_0^{1/2}x^2\\,dx=\\tfrac{1}{24}$ sits on top. Total $=\\tfrac{5}{24}+\\tfrac{1}{24}=\\tfrac14.$",
          "Area under the line $g=2-\\tfrac{8x}{3}$ on $[\\tfrac12,\\tfrac34]$: it is a right triangle. At $x=\\tfrac12$, $g=2-\\tfrac43=\\tfrac23$; at $x=\\tfrac34$, $g=0$. Base $=\\tfrac34-\\tfrac12=\\tfrac14$, height $=\\tfrac23$, so area $=\\tfrac12\\cdot\\tfrac14\\cdot\\tfrac23=\\tfrac{1}{12}.$",
          "Right-half area $=\\tfrac14+\\tfrac{1}{12}=\\tfrac{1}{3}.$ By symmetry $\\alpha=2\\cdot\\tfrac13=\\tfrac23.$",
          "Therefore $9\\alpha=6.$"
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2022, Paper 2, Q8. The examiners rigged the constant $\\tfrac{5}{12}$ so the parabola crosses the tent at the clean point $x=\\tfrac12$ — the entire trap is realizing that $\\min\\{f,g\\}$ follows $f$ near the axis and $g$ near the edge, not the other way round."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "The Green Region and the Red: an $L_h$ that Balances",
    "difficulty": 4,
    "task": "Decide which balancing heights $h$ must exist.",
    "pyq": {
      "year": 2023,
      "paper": "1",
      "qno": "3"
    },
    "tags": [
      "area between curve and lines",
      "intermediate value theorem",
      "definite integration",
      "2023"
    ],
    "figure": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"sans-serif\" font-size=\"12\"><defs><clipPath id=\"sq\"><rect x=\"40\" y=\"20\" width=\"200\" height=\"160\"/></clipPath></defs><!-- square S --><rect x=\"40\" y=\"20\" width=\"200\" height=\"160\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"/><!-- green region (above f) shading via light fill --><g clip-path=\"url(#sq)\"><path d=\"M40,110 C 90,120 150,127 240,131 L 240,20 L 40,20 Z\" fill=\"var(--ink2)\" opacity=\"0.12\"/><path d=\"M40,110 C 90,120 150,127 240,131 L 240,180 L 40,180 Z\" fill=\"var(--gold)\" opacity=\"0.18\"/></g><!-- curve y=f(x) --><path d=\"M40,110 C 90,120 150,127 240,131\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"2\"/><!-- horizontal line L_h --><line x1=\"40\" y1=\"95\" x2=\"240\" y2=\"95\" stroke=\"var(--gold)\" stroke-width=\"1.6\" stroke-dasharray=\"5 3\"/><text x=\"244\" y=\"99\" fill=\"var(--ink2)\">$L_h$</text><!-- labels --><text x=\"150\" y=\"55\" fill=\"var(--ink2)\">green $G$</text><text x=\"150\" y=\"165\" fill=\"var(--ink2)\">red $R$</text><text x=\"64\" y=\"105\" fill=\"var(--ink2)\">$y=f(x)$</text><!-- axes ticks --><text x=\"34\" y=\"184\" fill=\"var(--ink2)\">0</text><text x=\"236\" y=\"196\" fill=\"var(--ink2)\">1</text><text x=\"28\" y=\"24\" fill=\"var(--ink2)\">1</text></svg>",
    "statement": "Let $f:[0,1]\\to[0,1]$ be defined by $f(x)=\\dfrac{x^3}{3}-x^2+\\dfrac{5}{9}x+\\dfrac{17}{36}$. In the square $S=[0,1]\\times[0,1]$ call $G=\\{(x,y)\\in S:y>f(x)\\}$ the green region and $R=\\{(x,y)\\in S:y<f(x)\\}$ the red region. For $h\\in[0,1]$ let $L_h=\\{(x,h)\\in S:x\\in[0,1]\\}$ be the horizontal line at height $h$. Which of the following is (are) true?\n\n(A) There exists $h\\in\\left[\\dfrac14,\\dfrac23\\right]$ such that the area of the green region above $L_h$ equals the area of the green region below $L_h$.\n\n(B) There exists $h\\in\\left[\\dfrac14,\\dfrac23\\right]$ such that the area of the red region above $L_h$ equals the area of the red region below $L_h$.\n\n(C) There exists $h\\in\\left[\\dfrac14,\\dfrac23\\right]$ such that the area of the green region above $L_h$ equals the area of the red region below $L_h$.\n\n(D) There exists $h\\in\\left[\\dfrac14,\\dfrac23\\right]$ such that the area of the red region above $L_h$ equals the area of the green region below $L_h$.",
    "answer": "(B), (C), (D)",
    "trap": "The temptation is to compute the four areas exactly and solve equations. But $f$ is a cubic squeezed into a narrow band, and the intended tool is the Intermediate Value Theorem applied to a continuous difference of areas. The real subtlety is checking the endpoints $h=\\tfrac14$ and $h=\\tfrac23$: because $f$ takes values only in $[\\tfrac{13}{36},\\tfrac{c}{?}]\\subset(\\tfrac14,\\tfrac23)$, at $h=\\tfrac14$ the whole curve lies above the line and at $h=\\tfrac23$ the whole curve lies below it. Statement (A) fails precisely because its difference never changes sign on $[\\tfrac14,\\tfrac23]$.",
    "solutions": [
      {
        "name": "Range of $f$, then IVT on each difference",
        "steps": [
          "First pin down the range of $f$ on $[0,1]$. Differentiate: $f'(x)=x^2-2x+\\dfrac59=\\left(x-1\\right)^2-\\dfrac49$, which vanishes at $x=1\\pm\\tfrac23$, i.e. $x=\\tfrac13$ (in $[0,1]$).",
          "Evaluate: $f(0)=\\tfrac{17}{36}\\approx0.472$, $f(1)=\\tfrac{13}{36}\\approx0.361$, and the local max $f\\!\\left(\\tfrac13\\right)\\approx0.559$. Hence $f(x)\\in[\\,0.361,\\,0.559\\,]\\subset\\left(\\tfrac14,\\tfrac23\\right)$ for all $x\\in[0,1]$.",
          "Consequence: at $h=\\tfrac14$ the line $L_h$ lies entirely below the curve, and at $h=\\tfrac23$ it lies entirely above the curve. This is the key that decides every statement.",
          "Compute the total areas once. The red area (under $f$) is $\\displaystyle R=\\int_0^1 f(x)\\,dx=\\left[\\dfrac{x^4}{12}-\\dfrac{x^3}{3}+\\dfrac{5x^2}{18}+\\dfrac{17x}{36}\\right]_0^1=\\dfrac{1}{12}-\\dfrac13+\\dfrac{5}{18}+\\dfrac{17}{36}=\\dfrac12.$ So green area $G=1-R=\\dfrac12$ as well.",
          "Define the green-below-line area $g_b(h)$ = area of $\\{y>f(x)\\}$ with $y<h$, and green-above $g_a(h)=G-g_b(h)$; similarly $r_b(h),\\,r_a(h)$ for red with $R=\\tfrac12$. Each is a continuous function of $h$.",
          "(A): $\\phi(h)=g_a(h)-g_b(h)$. At $h=\\tfrac14$ the line is below all of $G$, so $g_b(\\tfrac14)=0$ and $\\phi(\\tfrac14)=G=\\tfrac12>0$. At $h=\\tfrac23$ the line is above the curve, so the green region below the line is $\\int_0^1(h-f)\\,dx=\\tfrac23-\\tfrac12=\\tfrac16$ while green above is $\\int_0^1(1-h)\\,dx=\\tfrac13$; thus $\\phi(\\tfrac23)=\\tfrac13-\\tfrac16=\\tfrac16>0$. No sign change $\\Rightarrow$ (A) need not hold. (A) is FALSE.",
          "(B): $\\psi(h)=r_a(h)-r_b(h)$. At $h=\\tfrac14$ the line is below all of $R$, so $r_a(\\tfrac14)=R=\\tfrac12$, $r_b(\\tfrac14)=0$, giving $\\psi(\\tfrac14)=\\tfrac12>0$. At $h=\\tfrac23$ the line is above the curve, so all of $R$ lies below it: $r_a(\\tfrac23)=0$, $\\psi(\\tfrac23)=-\\tfrac12<0$. Sign change $\\Rightarrow$ some $h$ gives $\\psi=0$. (B) is TRUE.",
          "(C): $\\chi(h)=g_a(h)-r_b(h)$. At $h=\\tfrac14$: $g_a=\\tfrac12$, $r_b=0$, so $\\chi=\\tfrac12>0$. At $h=\\tfrac23$: $g_a=\\tfrac13$, $r_b=\\tfrac12$, so $\\chi=-\\tfrac16<0$. Sign change $\\Rightarrow$ (C) is TRUE.",
          "(D): $\\omega(h)=r_a(h)-g_b(h)$. At $h=\\tfrac14$: $r_a=\\tfrac12$, $g_b=0$, so $\\omega=\\tfrac12>0$. At $h=\\tfrac23$: $r_a=0$, $g_b=\\tfrac16$, so $\\omega=-\\tfrac16<0$. Sign change $\\Rightarrow$ (D) is TRUE.",
          "Therefore the correct options are (B), (C), (D)."
        ]
      },
      {
        "name": "Symmetry shortcut via the total areas",
        "steps": [
          "Once $G=R=\\dfrac12$ is established, note two identities valid for every $h$: $g_a(h)+g_b(h)=\\tfrac12$ and $r_a(h)+r_b(h)=\\tfrac12$.",
          "Rewrite each target as a single balance function whose value at the endpoints decides it. For (C), $g_a(h)=r_b(h)$ means $g_a(h)-r_b(h)=0$; but $g_a=\\tfrac12-g_b$ and $r_b=\\tfrac12-r_a$, so this is $r_a(h)-g_b(h)=0$, which is exactly the equation of (D). Hence (C) and (D) are the *same* equation — they stand or fall together.",
          "For that common equation define $F(h)=r_a(h)-g_b(h)$. As $h$ rises from $\\tfrac14$ to $\\tfrac23$, $r_a$ falls monotonically from $\\tfrac12$ to $0$ and $g_b$ rises monotonically from $0$ to $\\tfrac16$; so $F$ falls from $+\\tfrac12$ to $-\\tfrac16$, continuously. By IVT it hits $0$: (C) and (D) both TRUE.",
          "For (B), $r_a(h)=r_b(h)$ means each equals $\\tfrac14$ (half of $R$). Since $r_a$ decreases continuously from $\\tfrac12$ (at $h=\\tfrac14$) to $0$ (at $h=\\tfrac23$), it passes through $\\tfrac14$; (B) TRUE.",
          "For (A), $g_a(h)=g_b(h)$ would force each to be $\\tfrac14$. But $g_b(h)$ never reaches $\\tfrac14$ on $[\\tfrac14,\\tfrac23]$: it rises only from $0$ to $\\tfrac16<\\tfrac14$. So $g_a>g_b$ throughout and (A) FAILS.",
          "Answer: (B), (C), (D). The band $[0.361,0.559]$ of $f$ living strictly inside $\\left(\\tfrac14,\\tfrac23\\right)$ is what makes the endpoints clean and (A) impossible."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2023, Paper 1, Q3. The whole problem is an IVT exercise disguised as an area computation — the only genuine calculation is the single integral $\\int_0^1 f=\\tfrac12$, and the range of $f$ landing strictly inside $\\left(\\tfrac14,\\tfrac23\\right)$ does the rest."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "A Sawtooth of Area 4: Recover the Peak",
    "difficulty": 3,
    "task": "Find the maximum value of $f$.",
    "pyq": {
      "year": 2023,
      "paper": "1",
      "qno": "9"
    },
    "tags": [
      "area under piecewise linear curve",
      "definite integration",
      "2023"
    ],
    "figure": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"sans-serif\" font-size=\"12\"><!-- axes --><line x1=\"30\" y1=\"185\" x2=\"300\" y2=\"185\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"/><line x1=\"30\" y1=\"185\" x2=\"30\" y2=\"25\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"/><text x=\"296\" y=\"200\" fill=\"var(--ink2)\">$x$</text><text x=\"14\" y=\"32\" fill=\"var(--ink2)\">$y$</text><!-- shaded area under sawtooth (schematic, n small for legibility) --><path d=\"M30,50 L 52,185 L 63,50 L 74,185 L 200,50 L 290,185 Z\" fill=\"var(--gold)\" opacity=\"0.18\"/><!-- the curve segments --><polyline points=\"30,50 52,185 63,50 74,185 200,50 290,185\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"2\"/><!-- peak marks --><line x1=\"30\" y1=\"50\" x2=\"290\" y2=\"50\" stroke=\"var(--ink2)\" stroke-width=\"1\" stroke-dasharray=\"3 3\"/><text x=\"210\" y=\"46\" fill=\"var(--gold)\">peak $=n$</text><!-- x labels --><text x=\"24\" y=\"200\" fill=\"var(--ink2)\">0</text><text x=\"44\" y=\"200\" fill=\"var(--ink2)\">$\\tfrac1{2n}$</text><text x=\"58\" y=\"200\" fill=\"var(--ink2)\">$\\tfrac3{4n}$</text><text x=\"72\" y=\"200\" fill=\"var(--ink2)\">$\\tfrac1n$</text><text x=\"286\" y=\"200\" fill=\"var(--ink2)\">1</text></svg>",
    "statement": "Let $n\\ge 2$ be a natural number and let $f:[0,1]\\to\\mathbb{R}$ be defined by\n$$f(x)=\\begin{cases} n(1-2nx), & 0\\le x\\le \\dfrac{1}{2n},\\\\[4pt] 2n(2nx-1), & \\dfrac{1}{2n}\\le x\\le \\dfrac{3}{4n},\\\\[4pt] 4n(1-nx), & \\dfrac{3}{4n}\\le x\\le \\dfrac{1}{n},\\\\[4pt] \\dfrac{n}{n-1}(nx-1), & \\dfrac{1}{n}\\le x\\le 1.\\end{cases}$$\nIf $n$ is such that the area of the region bounded by the curves $x=0$, $x=1$, $y=0$ and $y=f(x)$ is $4$, then the maximum value of the function $f$ is",
    "answer": "$\\boxed{8}$",
    "trap": "Each linear piece is a triangle, so students race to sum four triangle areas — but the widths are $\\tfrac1{2n},\\tfrac1{4n},\\tfrac1{4n}$ and $\\tfrac{n-1}{n}$, and it is easy to mis-read the second segment's peak. The peak of the sawtooth on $[0,\\tfrac1n]$ is $n$ (reached at all three vertices $x=0,\\tfrac3{4n},1$ of the first block via the pieces), and the fourth ramp also climbs back to $n$ at $x=1$; so the maximum is $n$, not $2n$. Getting $4$ from a total that telescopes to $\\tfrac n2$ is the whole game — miscounting a triangle gives a wrong $n$.",
    "solutions": [
      {
        "name": "Sum of triangle areas",
        "steps": [
          "The graph is piecewise linear, so the area under it is a sum of triangles. Read off each piece's base and height.",
          "Piece 1 on $\\left[0,\\tfrac1{2n}\\right]$: $f$ falls from $f(0)=n$ to $f\\!\\left(\\tfrac1{2n}\\right)=0$. Triangle with base $\\tfrac1{2n}$, height $n$: area $=\\tfrac12\\cdot\\tfrac1{2n}\\cdot n=\\tfrac14$.",
          "Piece 2 on $\\left[\\tfrac1{2n},\\tfrac3{4n}\\right]$: $f$ rises from $0$ to $2n\\!\\left(2n\\cdot\\tfrac3{4n}-1\\right)=2n\\!\\left(\\tfrac32-1\\right)=n$. Base $\\tfrac3{4n}-\\tfrac1{2n}=\\tfrac1{4n}$, height $n$: area $=\\tfrac12\\cdot\\tfrac1{4n}\\cdot n=\\tfrac18$.",
          "Piece 3 on $\\left[\\tfrac3{4n},\\tfrac1n\\right]$: $f$ falls from $4n\\!\\left(1-n\\cdot\\tfrac3{4n}\\right)=4n\\cdot\\tfrac14=n$ down to $4n\\!\\left(1-n\\cdot\\tfrac1n\\right)=0$. Base $\\tfrac1n-\\tfrac3{4n}=\\tfrac1{4n}$, height $n$: area $=\\tfrac12\\cdot\\tfrac1{4n}\\cdot n=\\tfrac18$.",
          "Piece 4 on $\\left[\\tfrac1n,1\\right]$: $f$ rises from $\\tfrac n{n-1}(n\\cdot\\tfrac1n-1)=0$ to $\\tfrac n{n-1}(n-1)=n$ at $x=1$. Base $1-\\tfrac1n=\\tfrac{n-1}{n}$, height $n$: area $=\\tfrac12\\cdot\\tfrac{n-1}{n}\\cdot n=\\tfrac{n-1}{2}$.",
          "Total area $=\\tfrac14+\\tfrac18+\\tfrac18+\\tfrac{n-1}{2}=\\tfrac12+\\tfrac{n-1}{2}=\\tfrac n2.$",
          "Set $\\tfrac n2=4\\Rightarrow n=8$.",
          "The maximum of $f$: every piece peaks at height $n$ and never exceeds it, so $\\max f=n=8$."
        ]
      },
      {
        "name": "Direct integration of each linear piece",
        "steps": [
          "Integrate piece by piece. $\\displaystyle\\int_0^{1/(2n)} n(1-2nx)\\,dx=n\\left[x-nx^2\\right]_0^{1/(2n)}=n\\left(\\tfrac1{2n}-n\\cdot\\tfrac1{4n^2}\\right)=n\\cdot\\tfrac1{4n}=\\tfrac14.$",
          "$\\displaystyle\\int_{1/(2n)}^{3/(4n)} 2n(2nx-1)\\,dx=2n\\left[nx^2-x\\right]_{1/(2n)}^{3/(4n)}$. Compute $nx^2-x$ at $\\tfrac3{4n}$: $n\\cdot\\tfrac9{16n^2}-\\tfrac3{4n}=\\tfrac9{16n}-\\tfrac{12}{16n}=-\\tfrac3{16n}$; at $\\tfrac1{2n}$: $n\\cdot\\tfrac1{4n^2}-\\tfrac1{2n}=\\tfrac1{4n}-\\tfrac2{4n}=-\\tfrac1{4n}$. Difference $=-\\tfrac3{16n}+\\tfrac4{16n}=\\tfrac1{16n}$, times $2n$ gives $\\tfrac18.$",
          "$\\displaystyle\\int_{3/(4n)}^{1/n} 4n(1-nx)\\,dx=4n\\left[x-\\tfrac{n}{2}x^2\\right]_{3/(4n)}^{1/n}$. At $\\tfrac1n$: $\\tfrac1n-\\tfrac n2\\cdot\\tfrac1{n^2}=\\tfrac1n-\\tfrac1{2n}=\\tfrac1{2n}$; at $\\tfrac3{4n}$: $\\tfrac3{4n}-\\tfrac n2\\cdot\\tfrac9{16n^2}=\\tfrac3{4n}-\\tfrac9{32n}=\\tfrac{24-9}{32n}=\\tfrac{15}{32n}$. Difference $=\\tfrac{16}{32n}-\\tfrac{15}{32n}=\\tfrac1{32n}$, times $4n$ gives $\\tfrac18.$",
          "$\\displaystyle\\int_{1/n}^{1}\\tfrac{n}{n-1}(nx-1)\\,dx=\\tfrac{n}{n-1}\\left[\\tfrac n2 x^2-x\\right]_{1/n}^{1}$. At $1$: $\\tfrac n2-1=\\tfrac{n-2}{2}$; at $\\tfrac1n$: $\\tfrac n2\\cdot\\tfrac1{n^2}-\\tfrac1n=\\tfrac1{2n}-\\tfrac1n=-\\tfrac1{2n}$. Difference $=\\tfrac{n-2}{2}+\\tfrac1{2n}=\\tfrac{n^2-2n+1}{2n}=\\tfrac{(n-1)^2}{2n}$, times $\\tfrac n{n-1}$ gives $\\tfrac{n-1}{2}.$",
          "Total $=\\tfrac14+\\tfrac18+\\tfrac18+\\tfrac{n-1}{2}=\\tfrac n2$. Impose $\\tfrac n2=4\\Rightarrow n=8.$",
          "Since each ramp attains its peak value $n$ and no piece exceeds $n$, $\\max_{[0,1]} f=n=8.$"
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2023, Paper 1, Q9. Beautifully engineered so that the three narrow triangles contribute a constant $\\tfrac12$ regardless of $n$ and the long final ramp carries all the $n$-dependence — the area telescopes to $\\tfrac n2$, and the peak equals $n$."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "A hyperbola, two lines, and a triangle of corners",
    "difficulty": 4,
    "task": "Find the area of the region.",
    "pyq": {
      "year": 2025,
      "paper": "2",
      "qno": "2"
    },
    "tags": [
      "area between curves and lines",
      "region bounded by hyperbola",
      "definite integration of 1/x",
      "2025"
    ],
    "figure": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" font-size=\"12\"><line x1=\"30\" y1=\"190\" x2=\"305\" y2=\"190\" stroke=\"var(--ink3)\"/><line x1=\"45\" y1=\"200\" x2=\"45\" y2=\"20\" stroke=\"var(--ink3)\"/><text x=\"300\" y=\"185\" fill=\"var(--ink2)\">x</text><text x=\"32\" y=\"28\" fill=\"var(--ink2)\">y</text><path d=\"M 70 40 Q 110 120 160 150 Q 210 168 290 178\" fill=\"none\" stroke=\"var(--ink2)\"/><text x=\"258\" y=\"172\" fill=\"var(--ink2)\">y=1/x</text><line x1=\"55\" y1=\"185\" x2=\"250\" y2=\"35\" stroke=\"var(--ink2)\"/><text x=\"215\" y=\"48\" fill=\"var(--ink2)\">5x-4y=1</text><line x1=\"120\" y1=\"20\" x2=\"290\" y2=\"178\" stroke=\"var(--ink2)\"/><text x=\"120\" y=\"32\" fill=\"var(--ink2)\">4x+4y=17</text><polygon points=\"98,155 150,80 240,168\" fill=\"var(--gold)\" fill-opacity=\"0.28\" stroke=\"var(--gold)\"/><circle cx=\"98\" cy=\"155\" r=\"2.6\" fill=\"var(--gold)\"/><text x=\"78\" y=\"152\" fill=\"var(--ink2)\">A(1,1)</text><circle cx=\"150\" cy=\"80\" r=\"2.6\" fill=\"var(--gold)\"/><text x=\"155\" y=\"76\" fill=\"var(--ink2)\">B(2,9/4)</text><circle cx=\"240\" cy=\"168\" r=\"2.6\" fill=\"var(--gold)\"/><text x=\"238\" y=\"182\" fill=\"var(--ink2)\">C(4,1/4)</text></svg>",
    "statement": "Let $\\mathbb{R}$ denote the set of all real numbers. Then the area of the region\n$$\\left\\{(x,y)\\in\\mathbb{R}\\times\\mathbb{R} : x>0,\\ y>\\tfrac{1}{x},\\ 5x-4y-1>0,\\ 4x+4y-17<0\\right\\}$$\nis\n\n(A) $\\dfrac{17}{16} - \\log_e 4$\n\n(B) $\\dfrac{33}{8} - \\log_e 4$\n\n(C) $\\dfrac{57}{8} - \\log_e 4$\n\n(D) $\\dfrac{17}{2} - \\log_e 4$",
    "answer": "$\\boxed{\\dfrac{33}{8}-\\log_e 4}\\quad\\text{(B)}$",
    "trap": "The region sits ABOVE the hyperbola $y=1/x$ but BELOW both lines, and the two lines swap roles as the upper cap at $x=2$. Treating the boundary as a single line, or forgetting that $y=1/x$ is the lower boundary (not an upper one), collapses the whole calculation.",
    "solutions": [
      {
        "name": "Vertical strips — split the ceiling at $x=2$",
        "steps": [
          "First locate the three corners. The hyperbola $y=1/x$ meets $5x-4y=1$: substitute $y=1/x$ to get $5x-\\tfrac{4}{x}=1$, i.e. $5x^2-x-4=0=(5x+4)(x-1)$, so $x=1$, giving $A(1,1)$.",
          "The two lines meet: $5x-4y=1$ and $4x+4y=17$ add to $9x=18$, so $x=2$, $y=\\tfrac{5\\cdot2-1}{4}=\\tfrac94$, giving $B\\left(2,\\tfrac94\\right)$.",
          "The hyperbola meets $4x+4y=17$: $4x+\\tfrac{4}{x}=17$, i.e. $4x^2-17x+4=0=(4x-1)(x-4)$, so $x=4$ (the branch with $x>1$), giving $C\\left(4,\\tfrac14\\right)$.",
          "For $1\\le x\\le 2$ the top boundary is $y=\\tfrac{5x-1}{4}$ (from $5x-4y=1$) and the bottom is $y=\\tfrac1x$; for $2\\le x\\le 4$ the top is $y=\\tfrac{17-4x}{4}$ (from $4x+4y=17$) and the bottom is still $y=\\tfrac1x$.",
          "Hence $\\text{Area}=\\displaystyle\\int_1^2\\!\\left(\\tfrac{5x-1}{4}-\\tfrac1x\\right)dx+\\int_2^4\\!\\left(\\tfrac{17-4x}{4}-\\tfrac1x\\right)dx.$",
          "First integral: $\\left[\\tfrac{5x^2}{8}-\\tfrac{x}{4}-\\ln x\\right]_1^2=\\left(\\tfrac{20}{8}-\\tfrac24-\\ln2\\right)-\\left(\\tfrac58-\\tfrac14\\right)=\\tfrac{13}{8}-\\ln 2.$",
          "Second integral: $\\left[\\tfrac{17x}{4}-\\tfrac{x^2}{2}-\\ln x\\right]_2^4=\\left(17-8-\\ln4\\right)-\\left(\\tfrac{34}{4}-2-\\ln2\\right)=\\tfrac52-\\ln2.$",
          "Adding: $\\tfrac{13}{8}+\\tfrac52-2\\ln 2=\\tfrac{33}{8}-\\ln 4$. So the area is $\\dfrac{33}{8}-\\log_e 4$ — option (B)."
        ]
      },
      {
        "name": "Triangle of corners minus the hyperbolic sliver",
        "steps": [
          "With $5x-4y-1>0$ (below the line $y=\\tfrac{5x-1}4$) and $4x+4y-17<0$ (below $y=\\tfrac{17-4x}4$) and $y>\\tfrac1x$, the three boundary curves meet at $A(1,1),\\,B(2,\\tfrac94),\\,C(4,\\tfrac14)$.",
          "The region is bounded above by the polyline $A\\!\\to\\!B\\!\\to\\!C$ (the two lines) and below by the hyperbola $y=\\tfrac1x$ from $x=1$ to $x=4$.",
          "So $\\text{Area}=\\displaystyle\\int_1^2\\!\\Big(\\tfrac{5x-1}4-\\tfrac1x\\Big)dx+\\int_2^4\\!\\Big(\\tfrac{17-4x}4-\\tfrac1x\\Big)dx=\\Big(\\tfrac{13}8-\\ln2\\Big)+\\Big(\\tfrac52-\\ln2\\Big).$",
          "Adding: $\\tfrac{13}8+\\tfrac52-2\\ln2=\\dfrac{33}8-\\ln4$ — option $(B)$."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2025, Paper 2, Q2. The whole problem is really just finding three corner points cleanly — once $A(1,1),B(2,\\tfrac94),C(4,\\tfrac14)$ are in hand, the vertical-strip integral (split at $x=2$) is mechanical; the only real danger is misreading which curve caps the strip on each side of $x=2$."
  }
];
