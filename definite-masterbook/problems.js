/* DEFINITE INTEGRATION — The Definite Integral · 100 original problems across 10 chapters, adversarially Python-verified. */
window.PROBLEMS = [
  {
    "theme": "properties",
    "themeLabel": "Properties of the Definite Integral",
    "title": "The Exponent That Never Mattered",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "king-property",
      "reflection",
      "tangent",
      "invariance"
    ],
    "statement": "Evaluate \\[ I=\\int_{0}^{\\pi/2}\\frac{dx}{1+\\tan^{2026} x}. \\] (And convince yourself the exponent $2026$ could be replaced by ANY positive real number $t$ without changing the answer.)",
    "answer": "$I=\\dfrac{\\pi}{4}$.",
    "trap": "Trying to find an antiderivative of $1/(1+\\tan^{2026}x)$, or assuming the gigantic exponent forces the value toward $0$ or toward the full $\\pi/2$. The integrand stays strictly between $0$ and $1$, and the King reflection makes the exponent irrelevant; chasing an antiderivative or estimating by the size of the exponent both miss the symmetry entirely.",
    "solutions": [
      {
        "name": "King property (reflect $x\\mapsto \\tfrac{\\pi}{2}-x$)",
        "steps": [
          "Write $\\tan^{t}x=\\dfrac{\\sin^{t}x}{\\cos^{t}x}$, so $\\dfrac{1}{1+\\tan^{t}x}=\\dfrac{\\cos^{t}x}{\\sin^{t}x+\\cos^{t}x}$ with $t=2026$.",
          "Apply $\\int_0^{a}f(x)\\,dx=\\int_0^{a}f(a-x)\\,dx$ with $a=\\tfrac{\\pi}{2}$. Since $\\tan\\!\\big(\\tfrac{\\pi}{2}-x\\big)=\\cot x$, the reflected integrand is $\\dfrac{\\sin^{t}x}{\\sin^{t}x+\\cos^{t}x}$.",
          "Call the original $I$ and the reflected copy $I'$. Then $I=I'$ and $I+I'=\\int_0^{\\pi/2}\\dfrac{\\cos^t x+\\sin^t x}{\\sin^t x+\\cos^t x}\\,dx=\\int_0^{\\pi/2}1\\,dx=\\tfrac{\\pi}{2}.$",
          "Hence $2I=\\tfrac{\\pi}{2}$, giving $\\boxed{I=\\dfrac{\\pi}{4}}$, independent of $t$."
        ]
      },
      {
        "name": "Pairing the interval halves",
        "steps": [
          "Split at the midpoint: $I=\\int_0^{\\pi/4}+\\int_{\\pi/4}^{\\pi/2}$. On the second piece substitute $x=\\tfrac{\\pi}{2}-u$, $dx=-du$, which maps it to $\\int_0^{\\pi/4}\\dfrac{du}{1+\\cot^{t}u}$.",
          "Note $\\dfrac{1}{1+\\tan^t u}+\\dfrac{1}{1+\\cot^t u}=\\dfrac{1}{1+\\tan^t u}+\\dfrac{\\tan^t u}{\\tan^t u+1}=1.$",
          "Therefore $I=\\int_0^{\\pi/4}\\Big(\\dfrac{1}{1+\\tan^t u}+\\dfrac{1}{1+\\cot^t u}\\Big)du=\\int_0^{\\pi/4}1\\,du=\\boxed{\\dfrac{\\pi}{4}}.$"
        ]
      }
    ],
    "remark": "Insight: the King property $\\int_a^b f=\\int_a^b f(a{+}b{-}x)$ turns a fearsome-looking integrand into the trivial identity $g+g(\\text{reflected})=1$. The exponent is a decoy; the answer is $\\pi/4$ for every $t>0$, a one-line consequence of symmetry."
  },
  {
    "theme": "properties",
    "themeLabel": "Properties of the Definite Integral",
    "title": "Borrowing the Factor of x",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "king-property",
      "symmetry",
      "trig",
      "weighted-average"
    ],
    "statement": "Evaluate \\[ I=\\int_{0}^{\\pi}\\frac{x\\sin x}{1+\\cos^{2}x}\\,dx. \\]",
    "answer": "$I=\\dfrac{\\pi^{2}}{4}$.",
    "trap": "Attempting integration by parts on the explicit $x$, which spawns an even uglier integral. The factor $x$ is not meant to be integrated away — it is meant to be reflected via $x\\mapsto\\pi-x$ so that it collapses to a constant $\\pi/2$.",
    "solutions": [
      {
        "name": "King property to kill the linear factor",
        "steps": [
          "Apply $x\\mapsto\\pi-x$. Then $\\sin(\\pi-x)=\\sin x$ and $\\cos(\\pi-x)=-\\cos x$, so the weight $\\dfrac{\\sin x}{1+\\cos^2 x}$ is invariant, while $x\\mapsto \\pi-x$.",
          "Thus $I=\\int_0^\\pi\\dfrac{(\\pi-x)\\sin x}{1+\\cos^2x}\\,dx$. Adding to the original: $2I=\\pi\\int_0^\\pi\\dfrac{\\sin x}{1+\\cos^2x}\\,dx.$",
          "Substitute $u=\\cos x$, $du=-\\sin x\\,dx$: the remaining integral is $\\int_{-1}^{1}\\dfrac{du}{1+u^2}=\\big[\\arctan u\\big]_{-1}^{1}=\\tfrac{\\pi}{2}.$",
          "Hence $2I=\\pi\\cdot\\tfrac{\\pi}{2}$, so $\\boxed{I=\\dfrac{\\pi^2}{4}}.$"
        ]
      },
      {
        "name": "Weighted-average viewpoint",
        "steps": [
          "Let $w(x)=\\dfrac{\\sin x}{1+\\cos^2x}\\ge 0$ on $[0,\\pi]$; it is symmetric about $x=\\tfrac{\\pi}{2}$ since $w(\\pi-x)=w(x)$.",
          "For any weight symmetric about the midpoint $m=\\tfrac{\\pi}{2}$, the centroid satisfies $\\int_0^\\pi x\\,w(x)\\,dx=m\\int_0^\\pi w(x)\\,dx.$",
          "Here $m=\\tfrac{\\pi}{2}$ and $\\int_0^\\pi w=\\tfrac{\\pi}{2}$ (by $u=\\cos x$ as above), so $I=\\tfrac{\\pi}{2}\\cdot\\tfrac{\\pi}{2}=\\boxed{\\dfrac{\\pi^2}{4}}.$"
        ]
      }
    ],
    "remark": "Insight: whenever a weight is symmetric about the interval's midpoint, the factor $x$ averages to the midpoint. The King property is just the mechanical face of this centroid fact."
  },
  {
    "theme": "properties",
    "themeLabel": "Properties of the Definite Integral",
    "title": "The Honest Half of an Odd Integrand",
    "difficulty": 3,
    "task": "Evaluate",
    "tags": [
      "odd-even",
      "symmetry",
      "trig",
      "cancellation"
    ],
    "statement": "Evaluate \\[ I=\\int_{-\\pi/2}^{\\pi/2}\\big(x^{2}\\sin^{3}x+\\cos x\\big)\\,dx. \\]",
    "answer": "$I=2$.",
    "trap": "Declaring the whole integrand odd and writing $I=0$. Only the first piece $x^2\\sin^3 x$ is odd; the term $\\cos x$ is EVEN and contributes the entire value. Sorting which summand has which parity is the whole game.",
    "solutions": [
      {
        "name": "Split by parity",
        "steps": [
          "The interval $[-\\tfrac\\pi2,\\tfrac\\pi2]$ is symmetric about $0$, so split $I=\\int_{-\\pi/2}^{\\pi/2}x^2\\sin^3x\\,dx+\\int_{-\\pi/2}^{\\pi/2}\\cos x\\,dx.$",
          "First integrand: $x^2$ is even and $\\sin^3 x$ is odd, so the product is odd and integrates to $0$ over the symmetric interval.",
          "Second integrand $\\cos x$ is even, so $\\int_{-\\pi/2}^{\\pi/2}\\cos x\\,dx=2\\int_0^{\\pi/2}\\cos x\\,dx=2\\big[\\sin x\\big]_0^{\\pi/2}=2.$",
          "Therefore $\\boxed{I=2}.$"
        ]
      },
      {
        "name": "Fold the interval directly",
        "steps": [
          "Use $\\int_{-a}^{a}f(x)\\,dx=\\int_0^a\\big(f(x)+f(-x)\\big)dx$ with $f(x)=x^2\\sin^3x+\\cos x.$",
          "Compute $f(x)+f(-x)$: the $x^2\\sin^3x$ terms cancel (odd), while $\\cos x+\\cos(-x)=2\\cos x.$",
          "Thus $I=\\int_0^{\\pi/2}2\\cos x\\,dx=2\\big[\\sin x\\big]_0^{\\pi/2}=\\boxed{2}.$"
        ]
      }
    ],
    "remark": "Insight: parity is a per-term property, not a per-integral one. Always decompose into odd and even parts first; the odd part vanishes for free and you only ever integrate the even survivor."
  },
  {
    "theme": "properties",
    "themeLabel": "Properties of the Definite Integral",
    "title": "The Forbidden Cancellation",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "odd-even",
      "additivity",
      "trap",
      "interval-symmetry"
    ],
    "statement": "Evaluate \\[ I=\\int_{-1}^{2}\\big(x^{3}+x\\sqrt{1-x^{2}}\\,\\mathbf{1}_{[-1,1]}(x)\\big)\\,dx, \\] where $\\mathbf{1}_{[-1,1]}$ is $1$ on $[-1,1]$ and $0$ outside. (Equivalently: integrate $x^3$ over $[-1,2]$, plus $x\\sqrt{1-x^2}$ over $[-1,1]$ only.)",
    "answer": "$I=\\dfrac{15}{4}$.",
    "trap": "Seeing two odd integrands and announcing $I=0$. The interval $[-1,2]$ is NOT symmetric about $0$, so oddness of $x^3$ buys you nothing there — only the genuinely symmetric portion $[-1,1]$ cancels. Confusing 'odd function' with 'symmetric interval' is the fatal step.",
    "solutions": [
      {
        "name": "Split off the symmetric core",
        "steps": [
          "For the $x\\sqrt{1-x^2}$ term the domain IS $[-1,1]$, which is symmetric; the integrand is odd, so that whole piece is $0$.",
          "For $x^3$ over $[-1,2]$, use additivity: $\\int_{-1}^{2}x^3\\,dx=\\int_{-1}^{1}x^3\\,dx+\\int_{1}^{2}x^3\\,dx.$",
          "The symmetric piece $\\int_{-1}^{1}x^3\\,dx=0$ (odd over symmetric interval). The remainder is the only survivor: $\\int_1^2 x^3\\,dx=\\big[\\tfrac{x^4}{4}\\big]_1^2=\\tfrac{16-1}{4}=\\tfrac{15}{4}.$",
          "Hence $\\boxed{I=\\dfrac{15}{4}}.$"
        ]
      },
      {
        "name": "Direct antiderivative as a sanity audit",
        "steps": [
          "The $x\\sqrt{1-x^2}$ part over $[-1,1]$: with $u=1-x^2$ it is $\\big[-\\tfrac13(1-x^2)^{3/2}\\big]_{-1}^{1}=0.$",
          "The $x^3$ part: $\\int_{-1}^{2}x^3\\,dx=\\big[\\tfrac{x^4}{4}\\big]_{-1}^{2}=\\tfrac{16}{4}-\\tfrac{1}{4}=\\tfrac{15}{4}.$",
          "Total $\\boxed{I=\\dfrac{15}{4}}$ — confirming only the asymmetric tail $[1,2]$ contributes."
        ]
      }
    ],
    "remark": "Insight: the odd-function rule is two conditions, not one — odd integrand AND interval symmetric about the centre. Strip out the symmetric sub-interval, cancel there, and integrate the leftover honestly."
  },
  {
    "theme": "properties",
    "themeLabel": "Properties of the Definite Integral",
    "title": "A Thousand Sawtooth Triangles",
    "difficulty": 3,
    "task": "Evaluate",
    "tags": [
      "periodic",
      "fractional-part",
      "additivity",
      "area"
    ],
    "statement": "Let $\\{x\\}=x-\\lfloor x\\rfloor$ denote the fractional part. Evaluate \\[ I=\\int_{0}^{2026}\\{x\\}\\,dx. \\]",
    "answer": "$I=1013$.",
    "trap": "Trying to treat $\\lfloor x\\rfloor$ as a single antiderivative across the whole range, or forgetting that $\\{x\\}$ jumps back to $0$ at every integer (so $I$ is NOT $\\int_0^{2026}x\\,dx=\\tfrac{2026^2}{2}$ minus something simple). The integrand is periodic with period $1$; evaluate one tooth and multiply.",
    "solutions": [
      {
        "name": "Periodicity over an integer number of periods",
        "steps": [
          "The fractional part $\\{x\\}$ has period $T=1$, so for any integer $n$, $\\int_0^{nT}\\{x\\}\\,dx=n\\int_0^{1}\\{x\\}\\,dx$. Here $n=2026.$",
          "On $[0,1)$ we have $\\lfloor x\\rfloor=0$, hence $\\{x\\}=x$ and $\\int_0^1\\{x\\}\\,dx=\\int_0^1 x\\,dx=\\tfrac12.$",
          "Therefore $I=2026\\cdot\\tfrac12=\\boxed{1013}.$"
        ]
      },
      {
        "name": "Additivity over unit blocks",
        "steps": [
          "By additivity, $I=\\sum_{k=0}^{2025}\\int_{k}^{k+1}\\{x\\}\\,dx.$",
          "On each block put $x=k+t$ with $t\\in[0,1)$; then $\\lfloor x\\rfloor=k$, so $\\{x\\}=t$ and $\\int_k^{k+1}\\{x\\}\\,dx=\\int_0^1 t\\,dt=\\tfrac12$ — the same triangular area in every block.",
          "Summing $2026$ identical areas: $I=2026\\cdot\\tfrac12=\\boxed{1013}.$"
        ]
      }
    ],
    "remark": "Insight: a periodic integrand over a whole number of periods is just 'one period, repeated.' The fractional part is a sawtooth of triangles, each of area $\\tfrac12$, so the integral is exactly half the length of the range. Numerically $\\int_0^{2026}\\{x\\}\\,dx=1013.000$, confirming the closed form."
  },
  {
    "theme": "properties",
    "themeLabel": "Properties of the Definite Integral",
    "title": "Splitting the Root in Two",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "reflection",
      "king-property",
      "self-complementary",
      "roots"
    ],
    "statement": "Evaluate \\[ I=\\int_{2}^{3}\\frac{\\sqrt{x}}{\\sqrt{x}+\\sqrt{\\,5-x\\,}}\\,dx. \\]",
    "answer": "$I=\\dfrac{1}{2}$.",
    "trap": "Rationalising or hunting for an antiderivative of the radical fraction. None is needed: the reflection $x\\mapsto a+b-x=5-x$ swaps the two roots, and adding the reflected copy collapses everything to $1$. Algebraic brute force buries this one-line symmetry.",
    "solutions": [
      {
        "name": "Reflection $x\\mapsto a+b-x$",
        "steps": [
          "Here $a=2,b=3$, so $a+b-x=5-x$. Apply $\\int_a^b f(x)\\,dx=\\int_a^b f(a+b-x)\\,dx$: the substitution sends $\\sqrt{x}\\leftrightarrow\\sqrt{5-x}$.",
          "Thus the reflected integrand is $\\dfrac{\\sqrt{5-x}}{\\sqrt{5-x}+\\sqrt{x}}$. Call the original $I$ and the reflected one $I'$; then $I=I'.$",
          "Add: $I+I'=\\int_2^3\\dfrac{\\sqrt{x}+\\sqrt{5-x}}{\\sqrt{x}+\\sqrt{5-x}}\\,dx=\\int_2^3 1\\,dx=1.$",
          "So $2I=1$, giving $\\boxed{I=\\dfrac12}.$"
        ]
      },
      {
        "name": "Center the interval first",
        "steps": [
          "Shift $x=\\tfrac52+t$ so the interval becomes $t\\in[-\\tfrac12,\\tfrac12]$, with $\\sqrt{x}=\\sqrt{\\tfrac52+t}$ and $\\sqrt{5-x}=\\sqrt{\\tfrac52-t}.$",
          "Let $g(t)=\\dfrac{\\sqrt{5/2+t}}{\\sqrt{5/2+t}+\\sqrt{5/2-t}}$. Then $g(t)+g(-t)=1$ identically.",
          "Hence $I=\\int_{-1/2}^{1/2}g(t)\\,dt=\\int_0^{1/2}\\big(g(t)+g(-t)\\big)dt=\\int_0^{1/2}1\\,dt=\\boxed{\\dfrac12}.$"
        ]
      }
    ],
    "remark": "Insight: a fraction of the form $\\dfrac{u}{u+v}$ where the reflection swaps $u\\leftrightarrow v$ is 'self-complementary' — it and its mirror sum to $1$. The value is always half the interval length, regardless of the roots."
  },
  {
    "theme": "properties",
    "themeLabel": "Properties of the Definite Integral",
    "title": "Where the Parabola Overtakes the Line",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "additivity",
      "piecewise",
      "max",
      "breakpoints"
    ],
    "statement": "Evaluate \\[ I=\\int_{-1}^{2}\\max\\!\\big(x,\\;x^{2}\\big)\\,dx. \\]",
    "answer": "$I=\\dfrac{19}{6}$.",
    "trap": "Replacing $\\max(x,x^2)$ by a single formula such as $x^2$ (giving $3$) or $x$ (giving $\\tfrac32$) across the whole interval. The two graphs cross, so the maximum switches between $x^2$ and $x$; using one branch everywhere ignores part of the region. You must locate the crossover points and apply additivity.",
    "solutions": [
      {
        "name": "Locate crossings, then add over pieces",
        "steps": [
          "Solve $x=x^2\\Rightarrow x(x-1)=0\\Rightarrow x=0,1.$ Test signs: for $x<0$, $x^2>x$; for $0<x<1$, $x>x^2$; for $x>1$, $x^2>x.$",
          "So $\\max=x^2$ on $[-1,0]$, $\\max=x$ on $[0,1]$, $\\max=x^2$ on $[1,2].$ By additivity, $I=\\int_{-1}^{0}x^2\\,dx+\\int_0^1 x\\,dx+\\int_1^2 x^2\\,dx.$",
          "Evaluate each: $\\int_{-1}^{0}x^2\\,dx=\\tfrac13,\\quad \\int_0^1 x\\,dx=\\tfrac12,\\quad \\int_1^2 x^2\\,dx=\\tfrac{8-1}{3}=\\tfrac73.$",
          "Sum: $\\tfrac13+\\tfrac73=\\tfrac83$, and $\\tfrac83+\\tfrac12=\\tfrac{16+3}{6}=\\boxed{\\dfrac{19}{6}}.$"
        ]
      },
      {
        "name": "Average plus half the gap",
        "steps": [
          "Use the identity $\\max(a,b)=\\dfrac{a+b}{2}+\\dfrac{|a-b|}{2}$ with $a=x,\\ b=x^2$, so $I=\\int_{-1}^{2}\\dfrac{x+x^2}{2}\\,dx+\\dfrac12\\int_{-1}^{2}|x^2-x|\\,dx.$",
          "First part: $\\dfrac12\\int_{-1}^{2}(x+x^2)\\,dx=\\dfrac12\\Big[\\tfrac{x^2}{2}+\\tfrac{x^3}{3}\\Big]_{-1}^{2}=\\dfrac12\\Big((2+\\tfrac83)-(\\tfrac12-\\tfrac13)\\Big)=\\dfrac12\\cdot\\dfrac{27}{6}=\\dfrac{9}{4}.$",
          "Second part: $|x^2-x|=x^2-x$ on $[-1,0]\\cup[1,2]$ and $=x-x^2$ on $[0,1]$, giving pieces $\\tfrac56,\\ \\tfrac16,\\ \\tfrac56$; so $\\dfrac12\\int_{-1}^{2}|x^2-x|\\,dx=\\dfrac12\\cdot\\dfrac{11}{6}=\\dfrac{11}{12}.$",
          "Total: $\\dfrac94+\\dfrac{11}{12}=\\dfrac{27+11}{12}=\\dfrac{38}{12}=\\boxed{\\dfrac{19}{6}}.$"
        ]
      }
    ],
    "remark": "Insight: an integrand built from $\\max$, $\\min$, or $|\\cdot|$ is piecewise, and its breakpoints are exactly where the inside changes sign. Find them, split by additivity, and never let a single formula stand in for the whole graph."
  },
  {
    "theme": "properties",
    "themeLabel": "Properties of the Definite Integral",
    "title": "The Cubed Sine Tamed",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "king-property",
      "reduction",
      "substitution",
      "trig"
    ],
    "statement": "Evaluate \\[ I=\\int_{0}^{\\pi}\\frac{x\\sin^{3}x}{1+\\cos^{2}x}\\,dx. \\]",
    "answer": "$I=\\dfrac{\\pi(\\pi-2)}{2}=\\dfrac{\\pi^2-2\\pi}{2}.$",
    "trap": "Integrating by parts on $x$, or substituting $u=\\cos x$ before removing the linear factor — both lead nowhere because $x$ does not survive a $\\cos x$ substitution. The order matters: reflect first to kill $x$, only then substitute.",
    "solutions": [
      {
        "name": "King property, then $u=\\cos x$",
        "steps": [
          "Under $x\\mapsto\\pi-x$: $\\sin^3(\\pi-x)=\\sin^3x$ and $\\cos^2(\\pi-x)=\\cos^2x$, so the weight is invariant while $x\\mapsto\\pi-x.$ Adding gives $2I=\\pi\\int_0^\\pi\\dfrac{\\sin^3x}{1+\\cos^2x}\\,dx.$",
          "Substitute $u=\\cos x$, $du=-\\sin x\\,dx$, and $\\sin^2x=1-u^2$: $\\int_0^\\pi\\dfrac{\\sin^3x}{1+\\cos^2x}\\,dx=\\int_{-1}^{1}\\dfrac{1-u^2}{1+u^2}\\,du.$",
          "Compute $\\int_{-1}^{1}\\dfrac{1-u^2}{1+u^2}\\,du=\\int_{-1}^{1}\\Big(\\dfrac{2}{1+u^2}-1\\Big)du=\\big[2\\arctan u-u\\big]_{-1}^{1}=\\big(\\tfrac{\\pi}{2}-1\\big)-\\big(-\\tfrac{\\pi}{2}+1\\big)=\\pi-2.$",
          "Hence $2I=\\pi(\\pi-2)$, so $\\boxed{I=\\dfrac{\\pi(\\pi-2)}{2}}.$"
        ]
      },
      {
        "name": "Even-weight centroid shortcut",
        "steps": [
          "Let $w(x)=\\dfrac{\\sin^3x}{1+\\cos^2x}\\ge0$ on $[0,\\pi]$; since $w(\\pi-x)=w(x)$ it is symmetric about the midpoint $\\tfrac\\pi2.$",
          "For a midpoint-symmetric weight, $\\int_0^\\pi x\\,w(x)\\,dx=\\tfrac{\\pi}{2}\\int_0^\\pi w(x)\\,dx.$",
          "With $\\int_0^\\pi w=\\pi-2$ (via $u=\\cos x$, as above), $I=\\tfrac\\pi2(\\pi-2)=\\boxed{\\dfrac{\\pi(\\pi-2)}{2}}.$"
        ]
      }
    ],
    "remark": "Insight: the King reflection is a 'linear-factor eraser.' Once $x$ is replaced by the constant midpoint, the surviving trig integral is a routine $u=\\cos x$ rational integral yielding $\\pi-2$."
  },
  {
    "theme": "properties",
    "themeLabel": "Properties of the Definite Integral",
    "title": "An Arbitrary Year, One Clean Arch",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "periodic",
      "absolute-value",
      "shift-invariance",
      "trig"
    ],
    "statement": "Evaluate \\[ I=\\int_{2024}^{\\,2024+\\pi}\\big|\\sin x\\big|\\,dx. \\]",
    "answer": "$I=2$.",
    "trap": "Treating $2024$ as a meaningful phase and trying to evaluate the integral by computing $\\sin(2024)$ and chasing the sign of $\\sin x$ from $x=2024$. The function $|\\sin x|$ has period $\\pi$, and the interval has length exactly $\\pi$ — one full period — so the lower limit is irrelevant. A second trap is forgetting the bars: $\\int_{2024}^{2024+\\pi}\\sin x\\,dx=-\\cos(2024+\\pi)+\\cos(2024)=2\\cos(2024)\\approx 0.745$, a phase-dependent value that is not the area and not equal to $2$.",
    "solutions": [
      {
        "name": "Period-shift invariance",
        "steps": [
          "$|\\sin x|$ has period $T=\\pi$ because $|\\sin(x+\\pi)|=|-\\sin x|=|\\sin x|.$",
          "For a $T$-periodic function, $\\int_{a}^{a+T}f=\\int_{0}^{T}f$ for every $a.$ Here $a=2024$, $T=\\pi$, so $I=\\int_0^\\pi|\\sin x|\\,dx.$",
          "On $[0,\\pi]$, $\\sin x\\ge0$, so $I=\\int_0^\\pi\\sin x\\,dx=\\big[-\\cos x\\big]_0^\\pi=2.$ Thus $\\boxed{I=2}.$"
        ]
      },
      {
        "name": "Reduce the phase modulo the period",
        "steps": [
          "Write $2024=k\\pi+r$ with $0\\le r<\\pi$ (here $k=\\lfloor 2024/\\pi\\rfloor=644$, $r\\approx0.814$). Substitute $x=k\\pi+t$; since $|\\sin(k\\pi+t)|=|\\sin t|$, the integral becomes $\\int_{r}^{r+\\pi}|\\sin t|\\,dt.$",
          "Split at $\\pi$: $\\int_r^{\\pi}\\sin t\\,dt+\\int_\\pi^{r+\\pi}(-\\sin t)\\,dt$ (on $[r,\\pi]$ the sine is $\\ge0$, on $[\\pi,r+\\pi]$ it is $\\le0$). These two pieces are $(1+\\cos r)+(1-\\cos r)=2.$",
          "Therefore $\\boxed{I=2}$, independent of the starting year."
        ]
      }
    ],
    "remark": "Insight: an integral of a periodic function over an interval whose length equals the period is phase-blind — slide it anywhere and the answer is fixed. The arbitrary bound $2024$ is pure misdirection; one arch of $|\\sin|$ has area $2$."
  },
  {
    "theme": "properties",
    "themeLabel": "Properties of the Definite Integral",
    "title": "The e^x Mirror Trick",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "symmetrization",
      "odd-even",
      "king-property",
      "grand-hybrid"
    ],
    "statement": "Evaluate \\[ I=\\int_{-\\pi}^{\\pi}\\frac{x\\sin x+\\cos^{2}x}{1+e^{x}}\\,dx. \\]",
    "answer": "$I=\\dfrac{3\\pi}{2}.$",
    "trap": "Two seductive errors. First, calling the whole thing odd or even — the factor $1/(1+e^x)$ is NEITHER, so naive parity gives nothing (calling it odd would force $I=0$, calling it even would give $2\\int_0^\\pi\\frac{g(x)}{1+e^x}\\,dx\\approx1.655$, both wrong). Second, fixating on the $e^x$ as something to integrate. The correct move is the symmetrization identity for $1/(1+e^x)$ over a symmetric interval, which is invisible if you only think 'odd/even' or 'find an antiderivative.'",
    "solutions": [
      {
        "name": "Symmetrization identity for $1/(1+e^x)$",
        "steps": [
          "Let $g(x)=x\\sin x+\\cos^2x.$ Both $x\\sin x$ and $\\cos^2x$ are EVEN, so $g(-x)=g(x).$",
          "Use $\\int_{-a}^{a}\\dfrac{g(x)}{1+e^{x}}\\,dx=\\int_0^a\\Big(\\dfrac{g(x)}{1+e^x}+\\dfrac{g(-x)}{1+e^{-x}}\\Big)dx.$ With $g$ even and $\\dfrac{1}{1+e^x}+\\dfrac{1}{1+e^{-x}}=1$, this collapses to $\\int_0^a g(x)\\,dx.$",
          "Thus $I=\\int_0^\\pi\\big(x\\sin x+\\cos^2x\\big)\\,dx.$ Compute $\\int_0^\\pi x\\sin x\\,dx=\\big[-x\\cos x+\\sin x\\big]_0^\\pi=\\pi$ and $\\int_0^\\pi\\cos^2x\\,dx=\\tfrac{\\pi}{2}.$",
          "Add: $I=\\pi+\\tfrac{\\pi}{2}=\\boxed{\\dfrac{3\\pi}{2}}.$"
        ]
      },
      {
        "name": "Reflection $x\\mapsto -x$ added to the original",
        "steps": [
          "Apply $x\\mapsto -x$ on the symmetric interval: $I=\\int_{-\\pi}^{\\pi}\\dfrac{g(-x)}{1+e^{-x}}\\,dx=\\int_{-\\pi}^{\\pi}\\dfrac{g(x)\\,e^{x}}{1+e^{x}}\\,dx$ using $g$ even and $\\dfrac{1}{1+e^{-x}}=\\dfrac{e^x}{1+e^x}.$",
          "Add this to the original: $2I=\\int_{-\\pi}^{\\pi}g(x)\\cdot\\dfrac{1+e^x}{1+e^x}\\,dx=\\int_{-\\pi}^{\\pi}g(x)\\,dx.$",
          "Since $g$ is even, $\\int_{-\\pi}^{\\pi}g=2\\int_0^\\pi g=2\\big(\\pi+\\tfrac\\pi2\\big)=3\\pi.$ Hence $2I=3\\pi$ and $\\boxed{I=\\dfrac{3\\pi}{2}}.$"
        ]
      },
      {
        "name": "Decompose, then symmetrize term by term",
        "steps": [
          "Split $I=\\int_{-\\pi}^{\\pi}\\dfrac{x\\sin x}{1+e^x}\\,dx+\\int_{-\\pi}^{\\pi}\\dfrac{\\cos^2x}{1+e^x}\\,dx.$ Each numerator is even, so each obeys $\\int_{-a}^{a}\\tfrac{(\\text{even})}{1+e^x}=\\int_0^a(\\text{even}).$",
          "First term $\\to\\int_0^\\pi x\\sin x\\,dx=\\pi$; second term $\\to\\int_0^\\pi\\cos^2x\\,dx=\\tfrac\\pi2.$",
          "Total $\\boxed{I=\\dfrac{3\\pi}{2}}.$"
        ]
      }
    ],
    "remark": "Insight: $\\dfrac{1}{1+e^x}+\\dfrac{1}{1+e^{-x}}=1$ is the workhorse identity — over any symmetric interval it converts $\\int_{-a}^{a}\\tfrac{(\\text{even})}{1+e^{x}}$ into the honest half-integral $\\int_0^a(\\text{even}).$ The $e^x$ is a curtain; pull it aside and a clean trig integral remains."
  },
  {
    "theme": "kingrule",
    "themeLabel": "The Reflection (King) Property",
    "title": "The Irrational Exponent That Doesn't Care",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "king-property",
      "tan-power",
      "complementary-angle",
      "definite-integral"
    ],
    "statement": "Evaluate \\[ I=\\int_{0}^{\\pi/2}\\frac{dx}{1+\\tan^{\\sqrt{2}}x}. \\]",
    "answer": "$I=\\dfrac{\\pi}{4}$.",
    "trap": "Trying to attack the bizarre exponent $\\sqrt 2$ head-on (expansions, $u=\\tan x$, beta functions). The exponent is a deliberate decoy: it is never actually used. Any attempt to evaluate the antiderivative drowns; only the reflection $x\\to \\tfrac\\pi2-x$ kills it, and the value is independent of the exponent.",
    "solutions": [
      {
        "name": "King reflection",
        "steps": [
          "Apply $x\\mapsto a+b-x=\\tfrac\\pi2-x$ on $[0,\\tfrac\\pi2]$, so $\\tan x\\to\\cot x=1/\\tan x$: $I=\\int_0^{\\pi/2}\\frac{dx}{1+\\tan^{-\\sqrt2}x}=\\int_0^{\\pi/2}\\frac{\\tan^{\\sqrt2}x}{1+\\tan^{\\sqrt2}x}\\,dx.$",
          "Add to the original: $2I=\\int_0^{\\pi/2}\\frac{1+\\tan^{\\sqrt2}x}{1+\\tan^{\\sqrt2}x}\\,dx=\\int_0^{\\pi/2}1\\,dx=\\tfrac\\pi2.$",
          "Hence $\\boxed{I=\\dfrac\\pi4}$, with no dependence on the exponent."
        ]
      },
      {
        "name": "Sine/cosine form",
        "steps": [
          "Write $\\tan^{\\sqrt2}x=\\sin^{\\sqrt2}x/\\cos^{\\sqrt2}x$, so the integrand is $\\dfrac{\\cos^{\\sqrt2}x}{\\sin^{\\sqrt2}x+\\cos^{\\sqrt2}x}$.",
          "This is the classic $\\dfrac{g(\\cos x)}{g(\\sin x)+g(\\cos x)}$ with $g(t)=t^{\\sqrt2}$; reflection swaps $\\sin\\leftrightarrow\\cos$, sending the integrand to its complement.",
          "Summing the integral and its reflection gives $2I=\\tfrac\\pi2$, so $\\boxed{I=\\dfrac\\pi4}$."
        ]
      }
    ],
    "remark": "Insight: in $\\int_0^{\\pi/2}\\frac{g(\\cos x)}{g(\\sin x)+g(\\cos x)}dx=\\frac\\pi4$ the function $g$ is irrelevant — the King property launders away every detail of $g$. The scary exponent is there only to tempt you into computation."
  },
  {
    "theme": "kingrule",
    "themeLabel": "The Reflection (King) Property",
    "title": "Pulling the x Off the Symmetric Weight",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "king-property",
      "x-times-f-sin",
      "reduction",
      "definite-integral"
    ],
    "statement": "Evaluate \\[ I=\\int_{0}^{\\pi}\\frac{x\\sin x}{1+\\cos^{2}x}\\,dx. \\]",
    "answer": "$I=\\dfrac{\\pi^{2}}{4}$.",
    "trap": "Substituting $u=\\cos x$ at the very start (or integrating by parts in $x$ first) before removing the $x$. Because $\\cos^{2}x$ is symmetric about $x=\\tfrac{\\pi}{2}$ but $\\cos x$ is antisymmetric, a premature $u=\\cos x$ scrambles the limits and strands the explicit factor $x=\\arccos u$, turning a clean integral into an intractable one. You must first peel the $x$ off using the King reflection $x\\to\\pi-x$.",
    "solutions": [
      {
        "name": "King to strip the x",
        "steps": [
          "Let $f(x)=\\dfrac{\\sin x}{1+\\cos^{2}x}$, so $I=\\int_0^\\pi x\\,f(x)\\,dx$. Under $x\\to\\pi-x$, both $\\sin x$ and $\\cos^{2}x$ are unchanged, hence $f(\\pi-x)=f(x)$.",
          "Apply the King property: $I=\\int_0^\\pi (\\pi-x)\\,f(\\pi-x)\\,dx=\\int_0^\\pi(\\pi-x)f(x)\\,dx=\\pi\\int_0^\\pi f(x)\\,dx-I$. Thus $2I=\\pi\\int_0^\\pi f(x)\\,dx$ and $I=\\dfrac{\\pi}{2}\\int_0^\\pi\\dfrac{\\sin x}{1+\\cos^{2}x}\\,dx$.",
          "Now the $x$ is gone, so $u=\\cos x$ is safe: $du=-\\sin x\\,dx$, and as $x:0\\to\\pi$, $u:1\\to-1$. Hence $\\int_0^\\pi\\dfrac{\\sin x}{1+\\cos^{2}x}\\,dx=\\int_{-1}^{1}\\dfrac{du}{1+u^{2}}=\\big[\\arctan u\\big]_{-1}^{1}=\\dfrac{\\pi}{2}$.",
          "Therefore $I=\\dfrac{\\pi}{2}\\cdot\\dfrac{\\pi}{2}=\\boxed{\\dfrac{\\pi^{2}}{4}}$."
        ]
      },
      {
        "name": "Split-and-reflect halves",
        "steps": [
          "Split at $\\tfrac{\\pi}{2}$: $I=\\int_0^{\\pi/2}x f(x)\\,dx+\\int_{\\pi/2}^{\\pi}x f(x)\\,dx$. On the second piece put $x=\\pi-t$, $dx=-dt$; since $f(\\pi-t)=f(t)$ it becomes $\\int_0^{\\pi/2}(\\pi-t)f(t)\\,dt$.",
          "Recombining, $I=\\int_0^{\\pi/2}\\big[x+(\\pi-x)\\big]f(x)\\,dx=\\pi\\int_0^{\\pi/2}f(x)\\,dx$. By the same $f(\\pi-x)=f(x)$ symmetry, $\\int_0^{\\pi/2}f=\\tfrac12\\int_0^{\\pi}f$, so $I=\\dfrac{\\pi}{2}\\int_0^\\pi f(x)\\,dx$, matching Method 1.",
          "Since $\\dfrac{d}{dx}\\big[-\\arctan(\\cos x)\\big]=\\dfrac{\\sin x}{1+\\cos^{2}x}=f(x)$, we get $\\int_0^\\pi f(x)\\,dx=\\big[-\\arctan(\\cos x)\\big]_0^{\\pi}=-\\arctan(-1)+\\arctan(1)=\\dfrac{\\pi}{2}$.",
          "Hence $I=\\dfrac{\\pi}{2}\\cdot\\dfrac{\\pi}{2}=\\boxed{\\dfrac{\\pi^{2}}{4}}$."
        ]
      }
    ],
    "remark": "Insight: whenever the weight is symmetric about $x=\\tfrac{\\pi}{2}$, i.e. $f(\\pi-x)=f(x)$, the King property collapses the moment integral $\\int_0^\\pi x\\,f(x)\\,dx=\\tfrac{\\pi}{2}\\int_0^\\pi f(x)\\,dx$. It trades a hard $x$-weighted integral for a plain one; only after the $x$ disappears is the substitution $u=\\cos x$ legitimate."
  },
  {
    "theme": "kingrule",
    "themeLabel": "The Reflection (King) Property",
    "title": "Putnam's Logarithm in Disguise",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "king-property",
      "logarithm",
      "substitution",
      "arctan-substitution"
    ],
    "statement": "Evaluate \\[ I=\\int_{0}^{1}\\frac{\\ln(1+x)}{1+x^{2}}\\,dx. \\]",
    "answer": "$I=\\dfrac{\\pi\\ln 2}{8}$.",
    "trap": "Expanding $\\ln(1+x)=\\sum_{n\\ge 1}\\frac{(-1)^{n-1}}{n}x^{n}$ or splitting $\\frac{1}{1+x^2}$ by partial fractions drags in $\\int_0^1\\frac{\\arctan x}{1+x}dx$ and lands you on Catalan's constant $G=0.91596\\ldots$, a genuine dead end (the answer is $\\tfrac{\\pi\\ln2}{8}=0.27219\\ldots$, not $G$, $G/2$, or any Catalan combination). The clean route is to read $1+x^2$ as $\\sec^2\\theta$: substitute $x=\\tan\\theta$ to reach $[0,\\tfrac\\pi4]$, then apply the King reflection.",
    "solutions": [
      {
        "name": "Tangent substitution then King",
        "steps": [
          "Let $x=\\tan\\theta$, so $dx=\\sec^2\\theta\\,d\\theta$ and $1+x^2=\\sec^2\\theta$. As $x:0\\to1$, $\\theta:0\\to\\tfrac\\pi4$, hence $I=\\int_0^{\\pi/4}\\ln(1+\\tan\\theta)\\,d\\theta.$",
          "Apply King on $[0,\\tfrac\\pi4]$ via $\\theta\\to\\tfrac\\pi4-\\theta$. Using $\\tan(\\tfrac\\pi4-\\theta)=\\frac{1-\\tan\\theta}{1+\\tan\\theta}$ gives $1+\\tan(\\tfrac\\pi4-\\theta)=1+\\frac{1-\\tan\\theta}{1+\\tan\\theta}=\\frac{2}{1+\\tan\\theta}.$",
          "Add the original and reflected integrals: $2I=\\int_0^{\\pi/4}\\Big[\\ln(1+\\tan\\theta)+\\ln\\tfrac{2}{1+\\tan\\theta}\\Big]d\\theta=\\int_0^{\\pi/4}\\ln 2\\,d\\theta=\\tfrac\\pi4\\ln2,$ so $\\boxed{I=\\dfrac{\\pi\\ln2}{8}}.$"
        ]
      },
      {
        "name": "Feynman parameter (cross-check)",
        "steps": [
          "Define $I(a)=\\int_0^1\\frac{\\ln(1+ax)}{1+x^2}\\,dx$ with $I(0)=0$ and target $I(1)=I$. Differentiating under the integral sign, $I'(a)=\\int_0^1\\frac{x}{(1+ax)(1+x^2)}\\,dx.$",
          "Partial fractions in $x$ give $\\frac{x}{(1+ax)(1+x^2)}=\\frac{1}{1+a^2}\\Big[\\frac{-a}{1+ax}+\\frac{a+x}{1+x^2}\\Big]$. Evaluating each piece on $[0,1]$ yields $I'(a)=\\dfrac{1}{1+a^2}\\Big[-\\ln(1+a)+\\tfrac{a\\pi}{4}+\\tfrac{\\ln 2}{2}\\Big].$",
          "Integrate $a:0\\to1$. The term $\\int_0^1\\frac{-\\ln(1+a)}{1+a^2}\\,da$ is exactly $-I$ again, so the equation self-references: $I=-I+\\int_0^1\\frac{a\\pi/4+\\ln2/2}{1+a^2}\\,da=-I+\\tfrac{\\pi\\ln2}{4}.$ Hence $2I=\\tfrac{\\pi\\ln2}{4}$, giving $\\boxed{I=\\dfrac{\\pi\\ln2}{8}}$ — the same collapse the King route achieves in one line."
        ]
      }
    ],
    "remark": "The cosmetic map $x=\\tan\\theta$ converts an algebraic integral into the iconic King integral $\\int_0^{\\pi/4}\\ln(1+\\tan\\theta)\\,d\\theta=\\tfrac{\\pi\\ln2}{8}$. Recognizing the $1+x^2$ denominator as $\\sec^2\\theta$ — which simultaneously cancels $dx$ and folds the domain onto $[0,\\tfrac\\pi4]$ where the reflection symmetry lives — is the whole game."
  },
  {
    "theme": "kingrule",
    "themeLabel": "The Reflection (King) Property",
    "title": "The Half-Length Theorem, Square-Root Edition",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "king-property",
      "self-complementary",
      "square-root",
      "definite-integral"
    ],
    "statement": "Evaluate \\[ I=\\int_{0}^{\\pi/2}\\frac{\\sqrt{\\sin x}}{\\sqrt{\\sin x}+\\sqrt{\\cos x}}\\,dx. \\]",
    "answer": "$I=\\dfrac{\\pi}{4}$.",
    "trap": "Rationalizing the denominator or substituting $u=\\sin x$. Both create asymmetric square-root tangles (the rationalized form even develops a fake singularity at $x=\\tfrac\\pi4$ where $\\sin x-\\cos x=0$). The denominator is engineered so that the reflection $x\\to\\tfrac\\pi2-x$ swaps the numerator and the complementary piece, collapsing the integrand and its mirror to the constant $1$.",
    "solutions": [
      {
        "name": "King reflection",
        "steps": [
          "Apply the King rule $\\int_0^a f(x)\\,dx=\\int_0^a f(a-x)\\,dx$ with $a=\\tfrac\\pi2$. Since $\\sin(\\tfrac\\pi2-x)=\\cos x$ and $\\cos(\\tfrac\\pi2-x)=\\sin x$, the roles of $\\sqrt{\\sin x}$ and $\\sqrt{\\cos x}$ swap: $I=\\int_0^{\\pi/2}\\frac{\\sqrt{\\cos x}}{\\sqrt{\\cos x}+\\sqrt{\\sin x}}\\,dx.$",
          "Add this to the original $I$. The two fractions share the common denominator $\\sqrt{\\sin x}+\\sqrt{\\cos x}$, and their numerators sum to exactly that denominator: $2I=\\int_0^{\\pi/2}\\frac{\\sqrt{\\sin x}+\\sqrt{\\cos x}}{\\sqrt{\\sin x}+\\sqrt{\\cos x}}\\,dx=\\int_0^{\\pi/2}1\\,dx=\\tfrac\\pi2.$",
          "Therefore $\\boxed{I=\\dfrac\\pi4}.$"
        ]
      },
      {
        "name": "General $g$ principle",
        "steps": [
          "Write the integrand as $\\dfrac{g(\\sin x)}{g(\\sin x)+g(\\cos x)}$ with $g(t)=\\sqrt t$, and call this integral $I(g)$.",
          "Reflection $x\\to\\tfrac\\pi2-x$ sends $I(g)$ to $\\int_0^{\\pi/2}\\dfrac{g(\\cos x)}{g(\\cos x)+g(\\sin x)}\\,dx$, and the two add to $\\int_0^{\\pi/2}1\\,dx=\\tfrac\\pi2$. Hence $I(g)=\\tfrac\\pi4$ for every $g$ (no positivity or continuity of $g$ is needed beyond making the integrand integrable).",
          "The square root is a red herring: $\\boxed{I=\\dfrac\\pi4}$ independently of $g$."
        ]
      },
      {
        "name": "Pointwise complementary collapse",
        "steps": [
          "Let $F(x)=\\dfrac{\\sqrt{\\sin x}}{\\sqrt{\\sin x}+\\sqrt{\\cos x}}$. Direct computation at the reflected point gives $F\\!\\left(\\tfrac\\pi2-x\\right)=\\dfrac{\\sqrt{\\cos x}}{\\sqrt{\\cos x}+\\sqrt{\\sin x}}$, so $F(x)+F\\!\\left(\\tfrac\\pi2-x\\right)=1$ identically on $(0,\\tfrac\\pi2)$.",
          "Integrate this pointwise identity over $[0,\\tfrac\\pi2]$ and use $\\int_0^{\\pi/2}F(\\tfrac\\pi2-x)\\,dx=\\int_0^{\\pi/2}F(x)\\,dx=I$ to get $2I=\\tfrac\\pi2$.",
          "Thus $\\boxed{I=\\dfrac\\pi4}.$"
        ]
      }
    ],
    "remark": "Insight: this is the half-length theorem $\\int_a^b\\frac{f(x)}{f(x)+f(a+b-x)}\\,dx=\\frac{b-a}{2}$ in trigonometric disguise. With $f(x)=\\sqrt{\\sin x}$, the complementary partner $f(\\tfrac\\pi2-x)=\\sqrt{\\cos x}$ is built into the denominator, so the answer is forced to be half the interval length, $\\tfrac12\\cdot\\tfrac\\pi2=\\tfrac\\pi4$. Numerical integration confirms $I=0.78539816\\ldots=\\tfrac\\pi4$ to 40 digits."
  },
  {
    "theme": "kingrule",
    "themeLabel": "The Reflection (King) Property",
    "title": "A Moment Against a Singular Weight",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "king-property",
      "x-times-f-sin",
      "weierstrass",
      "definite-integral"
    ],
    "statement": "Evaluate \\[ I=\\int_{0}^{\\pi}\\frac{x}{1+\\sin x}\\,dx. \\]",
    "answer": "$I=\\pi$.",
    "trap": "Charging straight into the Weierstrass substitution $t=\\tan\\tfrac x2$ while dragging the factor $x=2\\arctan t$ along. The integral becomes $\\int_0^\\infty\\frac{4\\arctan t}{(1+t)^2}\\,dt$, which is no longer elementary by inspection and demands a delicate integration by parts plus a boundary limit at $t\\to\\infty$; one slip in those steps and the clean answer is lost. The factor $x$ must be peeled off first: $\\sin x$ is symmetric about $\\tfrac\\pi2$, so $x\\to\\pi-x$ removes the linear weight cleanly before any $t$-substitution.",
    "solutions": [
      {
        "name": "King then reduce",
        "steps": [
          "Since $\\sin(\\pi-x)=\\sin x$, the reflection $x\\to\\pi-x$ gives $I=\\int_0^\\pi\\frac{\\pi-x}{1+\\sin x}\\,dx$. Adding this to the original removes the linear factor: $2I=\\pi\\int_0^\\pi\\frac{dx}{1+\\sin x}$.",
          "Compute $J=\\int_0^\\pi\\frac{dx}{1+\\sin x}$ with $t=\\tan\\tfrac x2$: here $1+\\sin x=\\dfrac{(1+t)^2}{1+t^2}$ and $dx=\\dfrac{2\\,dt}{1+t^2}$, and as $x:0\\to\\pi$, $t:0\\to\\infty$. Thus $J=\\int_0^\\infty\\frac{2\\,dt}{(1+t)^2}=\\Big[-\\frac{2}{1+t}\\Big]_0^\\infty=2.$",
          "Therefore $2I=\\pi\\cdot 2=2\\pi$, so $\\boxed{I=\\pi}$."
        ]
      },
      {
        "name": "Cofunction algebra for J",
        "steps": [
          "After the same reflection $2I=\\pi J$, evaluate $J$ without $t$. Rationalize: $\\dfrac{1}{1+\\sin x}=\\dfrac{1-\\sin x}{\\cos^2x}=\\sec^2x-\\sec x\\tan x$, whose antiderivative is $F(x)=\\tan x-\\sec x=\\dfrac{\\sin x-1}{\\cos x}$.",
          "The integrand has a removable singularity at $x=\\tfrac\\pi2$, where $\\displaystyle\\lim_{x\\to\\pi/2}F(x)=0$. Splitting there, $J=\\big[F(x)\\big]_0^{\\pi/2}+\\big[F(x)\\big]_{\\pi/2}^{\\pi}=(0-(-1))+(1-0)=2.$",
          "Hence $2I=\\pi J=2\\pi$, giving $\\boxed{I=\\pi}$ once more."
        ]
      }
    ],
    "remark": "Insight: the King property turns any $\\int_0^\\pi x\\,w(x)\\,dx$ with $w$ symmetric about $\\tfrac\\pi2$ into $\\tfrac\\pi2\\int_0^\\pi w(x)\\,dx$ — the linear weight averages to its midpoint value $\\tfrac\\pi2$. Here $w=1/(1+\\sin x)$ integrates to exactly $2$, so $I=\\tfrac\\pi2\\cdot 2=\\pi$, pleasingly clean."
  },
  {
    "theme": "kingrule",
    "themeLabel": "The Reflection (King) Property",
    "title": "Logarithms Reflected on an Off-Center Interval",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "king-property",
      "self-complementary",
      "logarithm",
      "shifted-interval"
    ],
    "statement": "Evaluate \\[ I=\\int_{2}^{4}\\frac{\\sqrt{\\ln(9-x)}}{\\sqrt{\\ln(9-x)}+\\sqrt{\\ln(3+x)}}\\,dx. \\]",
    "answer": "$I=1$.",
    "trap": "Assuming the King reflection here is $x\\to 9-x$ (matching the numerator) or $x\\to3+x$. Neither maps $[2,4]$ to itself: both send $[2,4]$ to $[5,7]$, so each illegally changes the domain of integration. The only legal reflection is dictated by the limits, $x\\to a+b-x=6-x$; under it $9-x\\to 3+x$ and $3+x\\to 9-x$, which is exactly what swaps the two square roots.",
    "solutions": [
      {
        "name": "King with the right midpoint",
        "steps": [
          "Here $a=2,b=4$, so the legal reflection is $x\\to a+b-x=6-x$. Then $9-x\\to 9-(6-x)=3+x$ and $3+x\\to 3+(6-x)=9-x$.",
          "Replacing $x$ by $6-x$ leaves the limits $[2,4]$ unchanged and swaps the two logarithms: $I=\\int_2^4\\frac{\\sqrt{\\ln(3+x)}}{\\sqrt{\\ln(3+x)}+\\sqrt{\\ln(9-x)}}\\,dx.$",
          "Adding this to the original, the two numerators sum to the common denominator, so the integrand becomes $1$: $2I=\\int_2^4 1\\,dx=2$, hence $\\boxed{I=1}$."
        ]
      },
      {
        "name": "Half-length theorem",
        "steps": [
          "Set $f(x)=\\sqrt{\\ln(9-x)}$. Since $a+b=6$, we have $f(6-x)=\\sqrt{\\ln(9-(6-x))}=\\sqrt{\\ln(3+x)}$, so the denominator is exactly $f(x)+f(a+b-x)$.",
          "By the standard self-complementary identity $\\int_a^b\\frac{f(x)}{f(x)+f(a+b-x)}\\,dx=\\frac{b-a}{2}$, valid for any $f$ keeping the denominator positive on $[a,b]$ (true here, as $\\ln$ stays in $[\\ln 5,\\ln 7]>0$).",
          "With $a=2,b=4$ this gives $I=\\frac{4-2}{2}=\\boxed{1}$."
        ]
      }
    ],
    "remark": "Insight: the seductive '$9-x$' in the numerator is a trap to lure you into the wrong reflection. The legal reflection is fixed only by the limits $a,b$ — here $x\\to6-x$ — and the integrand was reverse-engineered so that this midpoint, not the numerator's $9-x$, swaps the two logs. Numerically $I=1$ to 40 digits, confirming the half-length value $(b-a)/2$."
  },
  {
    "theme": "kingrule",
    "themeLabel": "The Reflection (King) Property",
    "title": "Which Exponents Survive the Reflection?",
    "difficulty": 5,
    "task": "Find all",
    "tags": [
      "king-property",
      "classification",
      "tan-power",
      "parameter"
    ],
    "statement": "Find all real numbers $c$ for which \\[ I(c)=\\int_{0}^{\\pi/2}\\frac{dx}{1+\\tan^{c}x} \\] is defined and equals $\\dfrac{\\pi}{4}$, and prove your answer is complete.",
    "answer": "Every real $c$ works: $I(c)=\\dfrac{\\pi}{4}$ for all $c\\in\\mathbb{R}$ (including $c=0$, where the integrand is identically $\\tfrac12$). The solution set is all of $\\mathbb{R}$.",
    "trap": "Believing the reflection trick needs $c>0$ (or $c\\neq0$) for convergence, and excluding edge cases. In fact the integrand stays in $[0,1]$ for every real $c$ — as $x\\to\\tfrac{\\pi}{2}^-$, $\\tan^c x\\to\\infty$ for $c>0$ (integrand $\\to0$) and $\\to0$ for $c<0$ (integrand $\\to1$), both bounded and integrable — so no $c$ is lost.",
    "solutions": [
      {
        "name": "Reflection independent of c",
        "steps": [
          "For any real $c$, apply the King substitution $x\\to\\tfrac{\\pi}{2}-x$. Since $\\tan\\!\\left(\\tfrac{\\pi}{2}-x\\right)=\\cot x=\\tan^{-1}x$ (reciprocal), we get $\\tan^c\\!\\left(\\tfrac{\\pi}{2}-x\\right)=\\tan^{-c}x$, hence $I(c)=\\int_0^{\\pi/2}\\frac{dx}{1+\\tan^{-c}x}=\\int_0^{\\pi/2}\\frac{\\tan^c x}{1+\\tan^c x}\\,dx.$",
          "Add this to the original definition: $2I(c)=\\int_0^{\\pi/2}\\frac{1+\\tan^c x}{1+\\tan^c x}\\,dx=\\int_0^{\\pi/2}1\\,dx=\\tfrac{\\pi}{2}$, so $I(c)=\\tfrac{\\pi}{4}$ for every real $c$.",
          "At $c=0$ the integrand equals $\\tfrac12$ directly, giving $\\tfrac{\\pi}{2}\\cdot\\tfrac12=\\tfrac{\\pi}{4}$ — consistent with the formula. Nothing in the argument used a sign or nonvanishing of $c$, so the solution set is $\\boxed{c\\in\\mathbb{R}}$."
        ]
      },
      {
        "name": "Boundedness check for completeness",
        "steps": [
          "Completeness needs that $I(c)$ exists for every $c$. Write $h_c(x)=\\frac{1}{1+\\tan^c x}$. On $\\left(0,\\tfrac{\\pi}{2}\\right)$ we have $\\tan^c x>0$, so $0<h_c(x)<1$ for all real $c$; the integrand is bounded, and the only possible issues are the endpoints.",
          "Endpoint behaviour is finite either way: as $x\\to0^+$, $h_c\\to1$ if $c>0$ and $h_c\\to0$ if $c<0$; as $x\\to\\tfrac{\\pi}{2}^-$, $h_c\\to0$ if $c>0$ and $h_c\\to1$ if $c<0$ (and $h_0\\equiv\\tfrac12$). In all cases the integrand extends to a bounded function, so $I(c)$ converges for every $c$ — no exponent is excluded.",
          "Combined with the reflection identity $h_c(x)+h_c\\!\\left(\\tfrac{\\pi}{2}-x\\right)=1$, integrating gives $2I(c)=\\tfrac{\\pi}{2}$, i.e. $I(c)=\\tfrac{\\pi}{4}$ identically. There is no $c$ producing a different value, so the complete answer set is $\\boxed{\\mathbb{R}}$."
        ]
      }
    ],
    "remark": "The classification answer is simply 'all of them,' and the real content is proving completeness — confirming that no exponent breaks convergence or escapes the swap. The King property collapses $I(c)$ to a constant function of $c$, because the substitution sends $\\tan^c x$ to its reciprocal $\\tan^{-c}x$ and the two copies of the integral add to $\\int_0^{\\pi/2}1\\,dx$, with the sign of $c$ never entering."
  },
  {
    "theme": "kingrule",
    "themeLabel": "The Reflection (King) Property",
    "title": "The x Over a Twisted Sum",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "king-property",
      "x-times-weight",
      "harmonic-addition",
      "definite-integral"
    ],
    "statement": "Evaluate \\[ I=\\int_{0}^{\\pi/2}\\frac{x}{\\sin x+\\cos x}\\,dx. \\]",
    "answer": "$I=\\dfrac{\\pi\\sqrt{2}}{4}\\,\\ln\\!\\big(1+\\sqrt{2}\\big)$.",
    "trap": "Trying integration by parts on $x$ against the awkward $1/(\\sin x+\\cos x)$, or substituting $t=\\tan\\tfrac x2$ with the $x$ still attached. The weight $\\sin x+\\cos x$ is symmetric under $x\\to\\tfrac\\pi2-x$ (which swaps $\\sin\\leftrightarrow\\cos$), so reflect first to strip the $x$.",
    "solutions": [
      {
        "name": "King then standard integral",
        "steps": [
          "Under $x\\to\\tfrac\\pi2-x$ the denominator $\\sin x+\\cos x$ is invariant, so $I=\\int_0^{\\pi/2}\\frac{\\tfrac\\pi2-x}{\\sin x+\\cos x}dx$ and thus $2I=\\tfrac\\pi2\\int_0^{\\pi/2}\\frac{dx}{\\sin x+\\cos x}.$",
          "Write $\\sin x+\\cos x=\\sqrt2\\sin(x+\\tfrac\\pi4)$, so $\\int_0^{\\pi/2}\\frac{dx}{\\sin x+\\cos x}=\\frac{1}{\\sqrt2}\\int_{\\pi/4}^{3\\pi/4}\\csc u\\,du=\\frac{1}{\\sqrt2}\\big[\\ln\\tan\\tfrac u2\\big]_{\\pi/4}^{3\\pi/4}=\\sqrt2\\,\\ln(1+\\sqrt2).$",
          "Hence $2I=\\tfrac\\pi2\\cdot\\sqrt2\\ln(1+\\sqrt2)$, giving $\\boxed{I=\\dfrac{\\pi\\sqrt2}{4}\\ln(1+\\sqrt2)}.$"
        ]
      },
      {
        "name": "Phase shift before reflecting",
        "steps": [
          "Let $u=x+\\tfrac\\pi4$ so the denominator becomes $\\sqrt2\\sin u$ on $[\\tfrac\\pi4,\\tfrac{3\\pi}4]$, an interval symmetric about $\\tfrac\\pi2$.",
          "The linear factor $x=u-\\tfrac\\pi4$ splits into a symmetric-weight moment; King on $[\\tfrac\\pi4,\\tfrac{3\\pi}4]$ reduces the moment to $\\tfrac\\pi2\\int\\frac{du}{\\sqrt2\\sin u}$.",
          "Evaluating $\\int_{\\pi/4}^{3\\pi/4}\\csc u\\,du=\\ln(3+2\\sqrt2)=2\\ln(1+\\sqrt2)$ yields the same $\\boxed{I=\\dfrac{\\pi\\sqrt2}{4}\\ln(1+\\sqrt2)}.$"
        ]
      }
    ],
    "remark": "Insight: $\\sin x+\\cos x=\\sqrt2\\sin(x+\\tfrac\\pi4)$ is the bridge: it is both King-symmetric about $\\tfrac\\pi2$ and a clean cosecant. The reflection extracts $\\tfrac\\pi2$, the phase shift finishes it."
  },
  {
    "theme": "kingrule",
    "themeLabel": "The Reflection (King) Property",
    "title": "The Moment of the Log-Sine",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "king-property",
      "log-sine",
      "x-moment",
      "nested-reflection"
    ],
    "statement": "Evaluate \\[ I=\\int_{0}^{\\pi} x\\,\\ln(\\sin x)\\,dx. \\]",
    "answer": "$I=-\\dfrac{\\pi^{2}\\ln 2}{2}$.",
    "trap": "Trying to integrate $\\ln(\\sin x)$ against $x$ by parts directly, or splitting $\\ln(\\sin x)=\\ln 2+\\ln\\sin\\tfrac x2+\\ln\\cos\\tfrac x2$ before removing the $x$. Both leave the linear weight tangled in the new integrand and lead nowhere clean. The clean path needs TWO King moves: first $x\\to\\pi-x$ to strip the $x$, then the classic reflection to evaluate $\\int_0^\\pi\\ln(\\sin x)\\,dx$.",
    "solutions": [
      {
        "name": "Double King",
        "steps": [
          "Since $\\sin(\\pi-x)=\\sin x$, the weight $\\ln\\sin x$ is symmetric about $\\tfrac\\pi2$. Substituting $x\\to\\pi-x$ gives $I=\\int_0^\\pi(\\pi-x)\\ln(\\sin x)\\,dx=\\pi\\!\\int_0^\\pi\\ln(\\sin x)\\,dx-I$, hence $2I=\\pi\\int_0^\\pi\\ln(\\sin x)\\,dx.$",
          "Evaluate $J=\\int_0^\\pi\\ln(\\sin x)\\,dx=2\\int_0^{\\pi/2}\\ln(\\sin x)\\,dx$. The King move $x\\to\\tfrac\\pi2-x$ shows $\\int_0^{\\pi/2}\\ln\\sin=\\int_0^{\\pi/2}\\ln\\cos$; adding them gives $\\int_0^{\\pi/2}\\ln(\\sin x\\cos x)\\,dx=\\int_0^{\\pi/2}\\ln\\!\\big(\\tfrac12\\sin2x\\big)\\,dx=-\\tfrac\\pi2\\ln2+\\tfrac12\\!\\int_0^{\\pi}\\ln(\\sin u)\\,du.$ Writing $A=\\int_0^{\\pi/2}\\ln\\sin$, this reads $2A=-\\tfrac\\pi2\\ln2+A$, so $A=-\\tfrac\\pi2\\ln2$ and $J=2A=-\\pi\\ln2.$",
          "Therefore $2I=\\pi(-\\pi\\ln2)$, i.e. $\\boxed{I=-\\dfrac{\\pi^2\\ln2}{2}}.$"
        ]
      },
      {
        "name": "Fourier series of log-sine",
        "steps": [
          "Use the classical expansion $\\ln(\\sin x)=-\\ln2-\\sum_{k\\ge1}\\dfrac{\\cos2kx}{k}$, valid on $(0,\\pi)$.",
          "Then $I=-\\ln2\\!\\int_0^\\pi x\\,dx-\\sum_{k\\ge1}\\dfrac1k\\!\\int_0^\\pi x\\cos2kx\\,dx$. Each cosine moment vanishes: integrating by parts, $\\int_0^\\pi x\\cos2kx\\,dx=\\big[\\tfrac{x\\sin2kx}{2k}\\big]_0^\\pi+\\tfrac{1}{(2k)^2}\\big[\\cos2kx\\big]_0^\\pi=0$ for every integer $k\\ge1$.",
          "So only the constant term survives: $I=-\\ln2\\cdot\\dfrac{\\pi^2}{2}=\\boxed{-\\dfrac{\\pi^2\\ln2}{2}}$, matching the King computation."
        ]
      }
    ],
    "remark": "Insight: the King property handles the $x$-moment and the log-sine in two strokes — one reflection strips the linear weight, a second evaluates the bare log-sine integral. Beautifully, the Fourier route shows WHY only the constant term $-\\ln2$ survives: every oscillatory term $\\cos2kx$ has zero first moment on $[0,\\pi]$, so the answer is exactly $-\\ln2$ times $\\int_0^\\pi x\\,dx=\\tfrac{\\pi^2}{2}$."
  },
  {
    "theme": "kingrule",
    "themeLabel": "The Reflection (King) Property",
    "title": "The Power That Vanishes at Infinity",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "king-property",
      "high-power",
      "self-complementary",
      "limit-trap"
    ],
    "statement": "Evaluate \\[ I=\\int_{0}^{\\pi/2}\\frac{\\sin^{2024}x}{\\sin^{2024}x+\\cos^{2024}x}\\,dx, \\] and state whether the value changes if the exponent $2024$ is replaced by any other positive even integer.",
    "answer": "$I=\\dfrac{\\pi}{4}$; the value is $\\dfrac\\pi4$ for every positive exponent, even or odd, so replacing $2024$ changes nothing.",
    "trap": "Reasoning by pointwise limits: as the exponent $n\\to\\infty$, $\\frac{\\sin^n x}{\\sin^n x+\\cos^n x}\\to\\mathbf 1_{[\\pi/4,\\pi/2]}$, tempting you to guess the integral $\\to\\tfrac\\pi4$ only in the limit. In fact it equals $\\tfrac\\pi4$ for EVERY $n$ exactly, by reflection — the limit heuristic accidentally lands on the right number but is not a proof.",
    "solutions": [
      {
        "name": "King reflection",
        "steps": [
          "Reflect $x\\to\\tfrac\\pi2-x$, swapping $\\sin\\leftrightarrow\\cos$: $I=\\int_0^{\\pi/2}\\frac{\\cos^{2024}x}{\\cos^{2024}x+\\sin^{2024}x}\\,dx.$",
          "Adding to the original gives $2I=\\int_0^{\\pi/2}1\\,dx=\\tfrac\\pi2$, so $I=\\tfrac\\pi4$ exactly.",
          "The argument used nothing about the exponent except symmetry, so $\\boxed{I=\\dfrac\\pi4}$ for every positive power."
        ]
      },
      {
        "name": "Symmetry about x = pi/4 (cross-check)",
        "steps": [
          "Let $g(x)=\\frac{\\sin^{2024}x}{\\sin^{2024}x+\\cos^{2024}x}$. Then $g(x)+g(\\tfrac\\pi2-x)=1$ pointwise, so $g$ is antisymmetric about the value $\\tfrac12$ across $x=\\tfrac\\pi4$.",
          "Pairing each point with its reflection contributes exactly $\\tfrac12$ on average over $[0,\\tfrac\\pi2]$.",
          "Hence $I=\\tfrac12\\cdot\\tfrac\\pi2=\\boxed{\\dfrac\\pi4}$, independent of the exponent — the limit picture is only a heuristic for the same exact value."
        ]
      }
    ],
    "remark": "Insight: the dramatic exponent $2024$ is pure theatre — the King property gives $\\tfrac\\pi4$ for any power instantly. The limit-to-indicator picture is a lovely sanity check, but the reflection makes the answer exact, not asymptotic."
  },
  {
    "theme": "riemann",
    "themeLabel": "The Integral as a Limit of Sums",
    "title": "The Arctangent Hidden in a Doubled Range",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "riemann sum",
      "arctangent",
      "index range",
      "limit"
    ],
    "statement": "Evaluate \\[ L=\\lim_{n\\to\\infty}\\sum_{r=1}^{2n}\\frac{n}{n^{2}+r^{2}}. \\] Note carefully that the upper index is $2n$, not $n$.",
    "answer": "$L=\\arctan 2$.",
    "trap": "Seeing $\\dfrac{n}{n^2+r^2}=\\dfrac1n\\cdot\\dfrac{1}{1+(r/n)^2}$ and reflexively writing $\\int_0^1\\frac{dx}{1+x^2}=\\frac\\pi4$. That ignores the upper limit $r=2n$: as $r$ runs $1\\to 2n$, $x=r/n$ runs $0\\to 2$, so the integral is over $[0,2]$, giving $\\arctan2$ — not $\\pi/4$.",
    "solutions": [
      {
        "name": "Riemann sum on [0,2]",
        "steps": [
          "Write $\\sum_{r=1}^{2n}\\frac{n}{n^2+r^2}=\\frac1n\\sum_{r=1}^{2n}\\frac{1}{1+(r/n)^2}$ with sample points $x_r=r/n$ and mesh $1/n$.",
          "Since $r$ ranges from $1$ to $2n$, the points $x_r$ tile $(0,2]$, so the sum is a Riemann sum for $f(x)=\\frac1{1+x^2}$ on $[0,2]$.",
          "Hence $L=\\int_0^2\\frac{dx}{1+x^2}=\\big[\\arctan x\\big]_0^2=\\boxed{\\arctan 2}$."
        ]
      },
      {
        "name": "Split at r=n",
        "steps": [
          "Split $\\sum_{r=1}^{2n}=\\sum_{r=1}^{n}+\\sum_{r=n+1}^{2n}$.",
          "The first block $\\frac1n\\sum_{r=1}^{n}\\frac1{1+(r/n)^2}\\to\\int_0^1\\frac{dx}{1+x^2}=\\frac\\pi4$.",
          "For the second, substitute $r=n+s$, $s=1..n$: $\\frac1n\\sum_{s=1}^{n}\\frac{1}{1+(1+s/n)^2}\\to\\int_0^1\\frac{dx}{1+(1+x)^2}=\\int_1^2\\frac{du}{1+u^2}=\\arctan2-\\frac\\pi4$.",
          "Adding: $L=\\frac\\pi4+(\\arctan2-\\frac\\pi4)=\\boxed{\\arctan 2}$."
        ]
      }
    ],
    "remark": "Insight: the $\\frac1n$ tells you the mesh; the index range tells you the interval. A factor of $\\frac1n$ with index $1..kn$ always integrates over $[0,k]$. (Check: index $1..n$ would give $\\int_0^1\\frac{dx}{1+x^2}=\\frac\\pi4$, the value the trap reflexively quotes.)"
  },
  {
    "theme": "riemann",
    "themeLabel": "The Integral as a Limit of Sums",
    "title": "Climbing the Quarter Circle's Edge",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "riemann sum",
      "arcsine",
      "singular endpoint",
      "limit"
    ],
    "statement": "Evaluate \\[ L=\\lim_{n\\to\\infty}\\sum_{r=1}^{n-1}\\frac{1}{\\sqrt{\\,n^{2}-r^{2}\\,}}. \\]",
    "answer": "$L=\\dfrac{\\pi}{2}$.",
    "trap": "Worrying that the $r=n$ term $\\frac1{\\sqrt{n^2-n^2}}$ blows up and concluding the limit diverges. The sum deliberately stops at $r=n-1$, whose largest term $\\frac1{\\sqrt{2n-1}}\\to0$; the integrand $\\frac1{\\sqrt{1-x^2}}$ is improperly integrable at $x=1$, so $\\int_0^1\\frac{dx}{\\sqrt{1-x^2}}=\\frac\\pi2$ converges despite the endpoint singularity.",
    "solutions": [
      {
        "name": "Riemann sum for arcsine",
        "steps": [
          "Factor $n$ out of the root: $\\frac{1}{\\sqrt{n^2-r^2}}=\\frac1n\\cdot\\frac{1}{\\sqrt{1-(r/n)^2}}$.",
          "Then $L=\\lim_{n\\to\\infty}\\frac1n\\sum_{r=1}^{n-1}\\frac{1}{\\sqrt{1-(r/n)^2}}$, a Riemann sum for $f(x)=\\frac1{\\sqrt{1-x^2}}$ on $[0,1]$ (dropping the single near-endpoint term $r=n$ does not affect the limit).",
          "Therefore $L=\\int_0^1\\frac{dx}{\\sqrt{1-x^2}}=\\big[\\arcsin x\\big]_0^1=\\boxed{\\tfrac\\pi2}$."
        ]
      },
      {
        "name": "Squeeze with a tame cutoff",
        "steps": [
          "For fixed $\\varepsilon\\in(0,1)$, the partial sum over $r\\le (1-\\varepsilon)n$ is a Riemann sum on $[0,1-\\varepsilon]$, converging to $\\arcsin(1-\\varepsilon)$.",
          "Since $f$ is increasing, the tail $r>(1-\\varepsilon)n$ is bounded by a comparison: $\\frac1n\\sum_{r>(1-\\varepsilon)n}\\frac{1}{\\sqrt{1-(r/n)^2}}\\le\\int_{1-\\varepsilon}^{1}\\frac{dx}{\\sqrt{1-x^2}}+o(1)=\\arcsin1-\\arcsin(1-\\varepsilon)+o(1)$, which $\\to0$ as $\\varepsilon\\to0$.",
          "Letting $\\varepsilon\\to0$ pins $L=\\arcsin1=\\boxed{\\tfrac\\pi2}$."
        ]
      }
    ],
    "remark": "Insight: an integrable endpoint singularity is harmless for the Riemann-sum limit. The trick is to stop the index one short and treat the tail by monotone comparison; convergence is genuine but slow, with error of order $1/\\sqrt{n}$."
  },
  {
    "theme": "riemann",
    "themeLabel": "The Integral as a Limit of Sums",
    "title": "The Area Under a Discrete Arc",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "riemann sum",
      "area",
      "quarter circle",
      "limit"
    ],
    "statement": "Evaluate \\[ L=\\lim_{n\\to\\infty}\\frac{1}{n^{2}}\\sum_{r=1}^{n}\\sqrt{\\,n^{2}-r^{2}\\,}. \\]",
    "answer": "$L=\\dfrac{\\pi}{4}$.",
    "trap": "Pulling only one factor of $n$ out of the root, $\\sqrt{n^2-r^2}=n\\sqrt{1-(r/n)^2}$, and then writing the prefactor as $\\frac1n$ instead of $\\frac1{n^2}$ — i.e. keeping a stray $\\frac1n$ as mesh while the leftover $n$ from the root is forgotten. That gives $\\frac1n\\sum n\\sqrt{1-(r/n)^2}=n\\cdot\\frac1n\\sum\\sqrt{1-(r/n)^2}\\to n\\cdot\\frac\\pi4$, which diverges (numerically $\\approx 78,\\,785,\\,7853$ for $n=10^2,10^3,10^4$) rather than converging. Count powers of $n$ first: $\\frac1{n^2}\\sqrt{n^2-r^2}=\\frac1n\\sqrt{1-(r/n)^2}$ is *exactly* one $\\frac1n$ of mesh.",
    "solutions": [
      {
        "name": "Riemann sum for the unit quarter-disk",
        "steps": [
          "Combine the powers of $n$ carefully: $\\dfrac{1}{n^{2}}\\sqrt{n^{2}-r^{2}}=\\dfrac{1}{n^{2}}\\cdot n\\sqrt{1-(r/n)^{2}}=\\dfrac1n\\sqrt{1-(r/n)^{2}}$.",
          "Hence $L=\\lim_{n\\to\\infty}\\dfrac1n\\sum_{r=1}^{n}\\sqrt{1-(r/n)^{2}}$, the Riemann sum of $f(x)=\\sqrt{1-x^{2}}$ on $[0,1]$ with the right-endpoint partition $x_r=r/n$ and mesh $\\tfrac1n$, so $L=\\displaystyle\\int_{0}^{1}\\sqrt{1-x^{2}}\\,dx$.",
          "This integral is the area of one quarter of the unit disk, hence $L=\\boxed{\\dfrac{\\pi}{4}}$."
        ]
      },
      {
        "name": "Trig substitution on the limiting integral",
        "steps": [
          "Reduce as above to $L=\\displaystyle\\int_{0}^{1}\\sqrt{1-x^{2}}\\,dx$.",
          "Put $x=\\sin\\theta$, $dx=\\cos\\theta\\,d\\theta$; as $x:0\\to1$, $\\theta:0\\to\\tfrac\\pi2$, and $\\sqrt{1-x^2}=\\cos\\theta$: $L=\\displaystyle\\int_{0}^{\\pi/2}\\cos^{2}\\theta\\,d\\theta=\\int_{0}^{\\pi/2}\\frac{1+\\cos2\\theta}{2}\\,d\\theta$.",
          "Evaluate: $\\dfrac12\\Big[\\theta+\\tfrac12\\sin2\\theta\\Big]_{0}^{\\pi/2}=\\dfrac12\\cdot\\dfrac\\pi2+0=\\boxed{\\dfrac{\\pi}{4}}$."
        ]
      }
    ],
    "remark": "Insight: count the powers of $n$ before you pull them inside the root. The clean bookkeeping $\\frac1{n^2}\\sqrt{n^2-r^2}=\\frac1n\\sqrt{1-(r/n)^2}$ leaves exactly one $\\frac1n$ as the mesh; the geometric meaning — the area of a quarter circle — gives an instant sanity check that $L$ must lie between $0$ and $1$, ruling out any divergent or oversized answer."
  },
  {
    "theme": "riemann",
    "themeLabel": "The Integral as a Limit of Sums",
    "title": "The Factorial's Geometric Heart",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "riemann sum",
      "logarithm",
      "product",
      "factorial"
    ],
    "statement": "Evaluate \\[ L=\\lim_{n\\to\\infty}\\left(\\frac{n!}{n^{n}}\\right)^{1/n}. \\]",
    "answer": "$L=\\dfrac{1}{e}$.",
    "trap": "Reasoning that since $n!\\ll n^{n}$ the ratio $\\frac{n!}{n^{n}}\\to0$, and concluding that its $n$-th root must also tend to $0$ (or, conversely, that the root \"undoes\" the smallness and gives $1$). Both guesses ignore that the $n$-th root of a quantity decaying like $c^{n}$ tends to $c$, not to $0$ or $1$. Writing $\\frac{n!}{n^{n}}=\\prod_{r=1}^{n}\\frac{r}{n}$ and taking logs gives $\\frac1n\\sum_{r=1}^{n}\\ln\\frac rn\\to\\int_0^1\\ln x\\,dx=-1$, so $L=e^{-1}\\approx0.3679$, a finite value strictly between $0$ and $1$.",
    "solutions": [
      {
        "name": "Logarithm to Riemann sum",
        "steps": [
          "Write $\\dfrac{n!}{n^{n}}=\\dfrac{1\\cdot2\\cdots n}{n\\cdot n\\cdots n}=\\prod_{r=1}^{n}\\dfrac{r}{n}$, so $\\ln L=\\lim_{n\\to\\infty}\\dfrac1n\\sum_{r=1}^{n}\\ln\\!\\dfrac rn$.",
          "The right side is the Riemann sum (right endpoints, mesh $1/n$) for $\\displaystyle\\int_0^1\\ln x\\,dx$.",
          "Evaluate the improper integral: $\\displaystyle\\int_0^1\\ln x\\,dx=\\bigl[x\\ln x-x\\bigr]_0^1=(0-1)-\\lim_{x\\to0^+}(x\\ln x-x)=-1$, since $x\\ln x\\to0$ as $x\\to0^+$.",
          "Hence $\\ln L=-1$, giving $L=\\boxed{e^{-1}}$."
        ]
      },
      {
        "name": "Stirling cross-check",
        "steps": [
          "Stirling's formula: $n!\\sim\\sqrt{2\\pi n}\\,\\bigl(n/e\\bigr)^{n}$ as $n\\to\\infty$.",
          "Divide by $n^{n}$: $\\dfrac{n!}{n^{n}}\\sim\\sqrt{2\\pi n}\\,e^{-n}$, so $\\left(\\dfrac{n!}{n^{n}}\\right)^{1/n}\\sim(2\\pi n)^{1/(2n)}\\,e^{-1}$.",
          "Since $(2\\pi n)^{1/(2n)}=\\exp\\!\\Bigl(\\tfrac{\\ln(2\\pi n)}{2n}\\Bigr)\\to e^{0}=1$, the prefactor vanishes in the limit.",
          "Therefore $L=\\boxed{e^{-1}}$, in agreement with the Riemann-sum computation."
        ]
      },
      {
        "name": "Cesaro-Stolz on the ratio",
        "steps": [
          "Let $a_n=\\dfrac{n!}{n^{n}}>0$. The Cesaro\\u2013Stolz (root\\u2013ratio) theorem gives $\\lim a_n^{1/n}=\\lim\\dfrac{a_{n+1}}{a_n}$ whenever the latter exists.",
          "Compute $\\dfrac{a_{n+1}}{a_n}=\\dfrac{(n+1)!}{(n+1)^{n+1}}\\cdot\\dfrac{n^{n}}{n!}=\\dfrac{(n+1)\\,n^{n}}{(n+1)^{n+1}}=\\dfrac{n^{n}}{(n+1)^{n}}=\\left(\\dfrac{n}{n+1}\\right)^{n}.",
          "As $n\\to\\infty$, $\\left(\\dfrac{n}{n+1}\\right)^{n}=\\left(1+\\dfrac1n\\right)^{-n}\\to e^{-1}$.",
          "Hence $L=\\lim a_n^{1/n}=\\boxed{e^{-1}}$."
        ]
      }
    ],
    "remark": "Insight: any $1/n$-th power of a product $\\prod_{r=1}^{n}f\\!\\bigl(\\tfrac rn\\bigr)$ becomes $\\exp\\!\\int_0^1\\ln f(x)\\,dx$, converting a geometric mean into an integral. Here $f(x)=x$ and the improper integral $\\int_0^1\\ln x\\,dx=-1$ converges despite the singularity at $0$. The three routes\\u2014Riemann sum, Stirling, and Cesaro\\u2013Stolz\\u2014all land on $e^{-1}$, a finite value the crude $n!\\ll n^{n}$ heuristic could never predict."
  },
  {
    "theme": "riemann",
    "themeLabel": "The Integral as a Limit of Sums",
    "title": "From n+1 to 2n, the Root of a Window",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "riemann sum",
      "logarithm",
      "product",
      "window",
      "limit"
    ],
    "statement": "Evaluate \\[ L=\\lim_{n\\to\\infty}\\frac{1}{n}\\Big[(n+1)(n+2)\\cdots(2n)\\Big]^{1/n}. \\]",
    "answer": "$L=\\dfrac{4}{e}$.",
    "trap": "Absorbing the leading $\\frac1n$ incorrectly: writing $\\big[(n+1)\\cdots(2n)\\big]^{1/n}=\\prod_{r=1}^{n}(n+r)^{1/n}$ and forgetting that the outer $\\frac1n$ must be folded in as $\\prod_{r=1}^{n}\\big(\\frac{n+r}{n}\\big)^{1/n}=\\prod_{r=1}^{n}(1+\\frac rn)^{1/n}$. Without distributing the $\\frac1n$ across all $n$ factors you keep $\\big[\\prod(n+r)\\big]^{1/n}$, whose every factor is of order $n$, so it grows like $n$ and the expression diverges instead of settling at $\\frac4e$.",
    "solutions": [
      {
        "name": "Fold the 1/n into the product",
        "steps": [
          "Since there are $n$ factors, $\\frac1n=\\Big(\\frac1{n^n}\\Big)^{1/n}$, so $L=\\lim_{n\\to\\infty}\\left[\\prod_{r=1}^{n}\\frac{n+r}{n}\\right]^{1/n}=\\lim_{n\\to\\infty}\\left[\\prod_{r=1}^n\\Big(1+\\tfrac rn\\Big)\\right]^{1/n}.$",
          "Take logarithms: $\\ln L=\\lim_{n\\to\\infty}\\frac1n\\sum_{r=1}^{n}\\ln\\!\\Big(1+\\frac rn\\Big)=\\int_0^1\\ln(1+x)\\,dx,$ the Riemann sum of $\\ln(1+x)$ on $[0,1]$.",
          "Integrate by parts: $\\int_0^1\\ln(1+x)\\,dx=\\big[(1+x)\\ln(1+x)-(1+x)\\big]_0^1=(2\\ln2-2)-(0-1)=2\\ln2-1.$",
          "Thus $\\ln L=2\\ln2-1$ and $L=e^{2\\ln2-1}=\\dfrac{e^{\\ln4}}{e}=\\boxed{\\dfrac4e}.$"
        ]
      },
      {
        "name": "Stirling on the ratio (2n)!/n!",
        "steps": [
          "The window is a falling block: $(n+1)(n+2)\\cdots(2n)=\\dfrac{(2n)!}{n!}$, so $L=\\lim_{n\\to\\infty}\\frac1n\\Big(\\frac{(2n)!}{n!}\\Big)^{1/n}.$",
          "Stirling $m!\\sim\\sqrt{2\\pi m}\\,(m/e)^{m}$ gives $\\dfrac{(2n)!}{n!}\\sim\\dfrac{\\sqrt{4\\pi n}\\,(2n/e)^{2n}}{\\sqrt{2\\pi n}\\,(n/e)^{n}}=\\sqrt2\\,\\dfrac{(2n)^{2n}}{e^{2n}}\\cdot\\dfrac{e^{n}}{n^{n}}=\\sqrt2\\,\\dfrac{4^{n}n^{n}}{e^{n}}.$",
          "Take the $n$-th root: $\\Big(\\dfrac{(2n)!}{n!}\\Big)^{1/n}\\sim 2^{1/(2n)}\\cdot\\dfrac{4n}{e}$, and the prefactor $2^{1/(2n)}\\to1$.",
          "Dividing by $n$ cancels the lone $n$: $\\dfrac1n\\cdot\\dfrac{4n}{e}\\to\\dfrac4e$, so $L=\\boxed{\\dfrac4e}.$"
        ]
      }
    ],
    "remark": "Insight: a stray $\\frac1n$ in front of an $n$-fold product is really $\\frac1{n^n}$ raised to $1/n$ — distribute it so every factor becomes $1+\\frac rn$ and the geometric-mean log turns into $\\int_0^1\\ln(1+x)\\,dx$. The two routes agree because Stirling is exactly the asymptotic shadow of that Riemann integral."
  },
  {
    "theme": "riemann",
    "themeLabel": "The Integral as a Limit of Sums",
    "title": "The Root-Mean-Square of the First n Integers",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "riemann sum",
      "power mean",
      "polynomial",
      "limit"
    ],
    "statement": "Evaluate \\[ L=\\lim_{n\\to\\infty}\\frac{1}{n}\\sqrt{\\,\\frac{1^{2}+2^{2}+\\cdots+n^{2}}{n}\\,}. \\]",
    "answer": "$L=\\dfrac{1}{\\sqrt{3}}=\\dfrac{\\sqrt{3}}{3}$.",
    "trap": "Reading the single outer square root as a sum of roots — i.e. replacing $\\frac1n\\sqrt{\\frac1n\\sum r^2}$ by the Riemann sum $\\frac1n\\sum\\sqrt{(r/n)^2}=\\frac1n\\sum\\frac rn\\to\\int_0^1 x\\,dx=\\frac12$. That value $\\tfrac12$ is wrong: the root acts on the whole sum, not term by term. The other slip is mismatching powers of $n$ — pulling the leading $\\frac1n$ inside the root makes it $\\frac1{n^2}$, so the radicand is $\\frac{1}{n^2}\\cdot\\frac{\\sum r^2}{n}=\\frac1n\\sum_{r=1}^n(r/n)^2$, the root of a Riemann sum whose limit is $\\int_0^1 x^2\\,dx=\\frac13$.",
    "solutions": [
      {
        "name": "Root of a Riemann sum",
        "steps": [
          "Pull the leading $\\frac1n$ under the root as $\\frac1{n^2}$: $L=\\sqrt{\\,\\frac{1}{n^2}\\cdot\\frac{1^2+\\cdots+n^2}{n}\\,}=\\sqrt{\\,\\frac1n\\sum_{r=1}^{n}\\Big(\\frac rn\\Big)^2\\,}$.",
          "By continuity of $\\sqrt{\\cdot}$ the limit passes inside the root: $L=\\sqrt{\\,\\lim_{n\\to\\infty}\\frac1n\\sum_{r=1}^n(r/n)^2\\,}=\\sqrt{\\,\\int_0^1 x^2\\,dx\\,}$.",
          "Since $\\int_0^1 x^2\\,dx=\\tfrac13$, we get $L=\\sqrt{1/3}=\\boxed{\\dfrac{1}{\\sqrt3}}=\\dfrac{\\sqrt3}{3}$."
        ]
      },
      {
        "name": "Closed-form sum",
        "steps": [
          "Use $\\sum_{r=1}^n r^2=\\dfrac{n(n+1)(2n+1)}{6}$, so the radicand is $\\dfrac{1}{n^2}\\cdot\\dfrac{1}{n}\\cdot\\dfrac{n(n+1)(2n+1)}{6}=\\dfrac{(n+1)(2n+1)}{6n^2}$.",
          "As $n\\to\\infty$, $\\dfrac{(n+1)(2n+1)}{6n^2}=\\dfrac{2n^2+3n+1}{6n^2}\\to\\dfrac{2}{6}=\\dfrac13$.",
          "Taking the root: $L=\\sqrt{1/3}=\\boxed{\\dfrac{1}{\\sqrt3}}=\\dfrac{\\sqrt3}{3}$."
        ]
      }
    ],
    "remark": "Insight: this is the continuous root-mean-square (quadratic mean) of $f(x)=x$ on $[0,1]$, namely $\\sqrt{\\int_0^1 x^2\\,dx}=1/\\sqrt3\\approx0.5774$. It sits strictly above the arithmetic mean $\\tfrac12$ of the same $f$ — exactly the gap the term-by-term trap collapses — a concrete instance of RMS $\\ge$ mean. The outer root commutes with the limit only because $\\sqrt{\\cdot}$ is continuous at $\\tfrac13$."
  },
  {
    "theme": "riemann",
    "themeLabel": "The Integral as a Limit of Sums",
    "title": "The Inverse Hyperbolic Surprise",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "riemann sum",
      "inverse hyperbolic",
      "square root",
      "logarithm"
    ],
    "statement": "Evaluate \\[ L=\\lim_{n\\to\\infty}\\sum_{r=1}^{n}\\frac{1}{\\sqrt{\\,n^{2}+r^{2}\\,}}, \\] and express the answer as a logarithm.",
    "answer": "$L=\\sinh^{-1}(1)=\\ln\\!\\left(1+\\sqrt{2}\\right)$.",
    "trap": "Guessing the limit is $\\frac\\pi4$ by analogy with $\\sum\\frac{n}{n^2+r^2}\\to\\arctan1$ (arctangent), confusing $\\frac1{\\sqrt{n^2+r^2}}$ with $\\frac{n}{n^2+r^2}$. The correct integrand is $\\frac1{\\sqrt{1+x^2}}$ whose antiderivative is $\\sinh^{-1}x$, giving a logarithm, not an arctangent. Numerically the partial sums march to $0.88137\\ldots=\\ln(1+\\sqrt2)$, never to $\\frac\\pi4=0.78540\\ldots$",
    "solutions": [
      {
        "name": "Riemann sum for the arcsinh integral",
        "steps": [
          "Factor $n$ from the root: $\\frac1{\\sqrt{n^2+r^2}}=\\frac1n\\cdot\\frac1{\\sqrt{1+(r/n)^2}}$.",
          "So $L=\\lim_{n\\to\\infty}\\frac1n\\sum_{r=1}^n\\frac1{\\sqrt{1+(r/n)^2}}=\\int_0^1\\frac{dx}{\\sqrt{1+x^2}}$, a right-endpoint Riemann sum on $[0,1]$ for the continuous integrand $\\frac1{\\sqrt{1+x^2}}$.",
          "This equals $\\big[\\sinh^{-1}x\\big]_0^1=\\sinh^{-1}1=\\boxed{\\ln(1+\\sqrt2)}$."
        ]
      },
      {
        "name": "Direct trig substitution via the secant integral",
        "steps": [
          "Reduce to $L=\\int_0^1\\frac{dx}{\\sqrt{1+x^2}}$ as above.",
          "Substitute $x=\\tan\\theta$, $dx=\\sec^2\\theta\\,d\\theta$, $\\sqrt{1+x^2}=\\sec\\theta$: the integral becomes $\\int_0^{\\pi/4}\\sec\\theta\\,d\\theta=\\big[\\ln|\\sec\\theta+\\tan\\theta|\\big]_0^{\\pi/4}$.",
          "Evaluate at $\\theta=\\pi/4$: $\\ln(\\sqrt2+1)-\\ln1=\\boxed{\\ln(1+\\sqrt2)}$."
        ]
      },
      {
        "name": "Endpoint squeeze without antiderivative tricks",
        "steps": [
          "With $f(x)=\\frac1{\\sqrt{1+x^2}}$ decreasing on $[0,1]$, the right-endpoint sum $\\frac1n\\sum_{r=1}^n f(r/n)$ under-estimates and the left-endpoint sum $\\frac1n\\sum_{r=0}^{n-1} f(r/n)$ over-estimates $\\int_0^1 f$.",
          "The two sums differ by $\\frac1n\\big(f(0)-f(1)\\big)=\\frac1n\\big(1-\\tfrac1{\\sqrt2}\\big)\\to0$, so the squeeze pins $L=\\int_0^1\\frac{dx}{\\sqrt{1+x^2}}$.",
          "Evaluating the integral gives $\\sinh^{-1}1=\\boxed{\\ln(1+\\sqrt2)}$."
        ]
      }
    ],
    "remark": "Insight: $\\frac{n}{n^2+r^2}$ gives arctan; $\\frac{1}{\\sqrt{n^2+r^2}}$ gives arcsinh. One missing square root changes the whole transcendental family of the answer. Numerically the partial sums approach $0.881373587\\ldots=\\ln(1+\\sqrt2)$ at rate $O(1/n)$, while staying a fixed $0.096$ away from the tempting $\\frac\\pi4$."
  },
  {
    "theme": "riemann",
    "themeLabel": "The Integral as a Limit of Sums",
    "title": "The Harmonic Window That Hides a Logarithm",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "riemann sum",
      "harmonic sum",
      "logarithm",
      "window"
    ],
    "statement": "Evaluate \\[ L=\\lim_{n\\to\\infty}\\left(\\frac{1}{n+1}+\\frac{1}{n+2}+\\cdots+\\frac{1}{n+n}\\right). \\]",
    "answer": "$L=\\ln 2$.",
    "trap": "Concluding the sum vanishes because each of the $n$ terms is $O(1/n)\\to0$. Each term is tiny but there are $n$ of them; their total is $\\frac1n\\sum_{r=1}^n\\frac1{1+r/n}\\to\\int_0^1\\frac{dx}{1+x}=\\ln2$, a positive constant, not $0$.",
    "solutions": [
      {
        "name": "Recognize the hidden 1/n (Riemann sum)",
        "steps": [
          "Factor out $\\frac1n$ from the $r$-th term: $\\frac1{n+r}=\\frac1n\\cdot\\frac1{1+r/n}$, so $L=\\lim_{n\\to\\infty}\\frac1n\\sum_{r=1}^n\\frac1{1+r/n}$.",
          "This is the Riemann sum of $f(x)=\\frac1{1+x}$ on $[0,1]$ with the partition $x_r=r/n$ and equal width $\\frac1n$; since $f$ is continuous, the sum converges to the integral.",
          "Hence $L=\\int_0^1\\frac{dx}{1+x}=\\big[\\ln(1+x)\\big]_0^1=\\boxed{\\ln2}$."
        ]
      },
      {
        "name": "Harmonic-number identity",
        "steps": [
          "Write the sum as a difference of harmonic numbers: $\\sum_{r=1}^n\\frac1{n+r}=\\sum_{k=1}^{2n}\\frac1k-\\sum_{k=1}^{n}\\frac1k=H_{2n}-H_n$.",
          "Use the asymptotics $H_m=\\ln m+\\gamma+o(1)$: then $H_{2n}-H_n=\\big(\\ln(2n)+\\gamma\\big)-\\big(\\ln n+\\gamma\\big)+o(1)=\\ln 2+o(1)$.",
          "Therefore $L=\\boxed{\\ln2}$."
        ]
      }
    ],
    "remark": "Insight: a sum of $n$ terms each $\\sim c/n$ need not vanish, since their total stays $O(1)$. The window $n+1,\\dots,2n$ is the classic Riemann sum for $\\int_0^1\\frac{dx}{1+x}$, and equivalently $H_{2n}-H_n\\to\\ln2$. Numerically the partial sums climb $0.6688,\\,0.6907,\\,0.6929,\\dots$ toward $\\ln2=0.693147\\ldots$"
  },
  {
    "theme": "riemann",
    "themeLabel": "The Integral as a Limit of Sums",
    "title": "Two Instruments, One Symphony",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "riemann sum",
      "hybrid",
      "arctangent",
      "harmonic sum"
    ],
    "statement": "Evaluate \\[ L=\\lim_{n\\to\\infty}\\left[\\;\\sum_{r=1}^{n}\\frac{n}{n^{2}+r^{2}}\\;+\\;\\sum_{r=1}^{n}\\frac{1}{n+r}\\;\\right]. \\]",
    "answer": "$L=\\dfrac{\\pi}{4}+\\ln 2$.",
    "trap": "Because the index $r$ runs all the way to $n$, it is tempting to imagine the sample points $x=r/n$ sweeping out $[0,\\infty)$ and to integrate the arctangent piece as $\\int_0^{\\infty}\\frac{dx}{1+x^2}=\\frac{\\pi}{2}$, giving the wrong total $\\frac{\\pi}{2}+\\ln 2$. But the mesh is $\\frac1n$ and the largest node is $x=n/n=1$, so the correct window is $[0,1]$ and the first sum tends to $\\arctan 1=\\frac{\\pi}{4}$, not $\\frac{\\pi}{2}$.",
    "solutions": [
      {
        "name": "Evaluate each Riemann sum",
        "steps": [
          "First sum: factor $\\frac1n$ out to expose the mesh, $\\sum_{r=1}^n\\frac{n}{n^2+r^2}=\\frac1n\\sum_{r=1}^n\\frac1{1+(r/n)^2}\\to\\int_0^1\\frac{dx}{1+x^2}=\\big[\\arctan x\\big]_0^1=\\frac\\pi4$.",
          "Second sum: similarly $\\sum_{r=1}^n\\frac1{n+r}=\\frac1n\\sum_{r=1}^n\\frac1{1+r/n}\\to\\int_0^1\\frac{dx}{1+x}=\\big[\\ln(1+x)\\big]_0^1=\\ln2$.",
          "Both limits exist, so the limit of the sum is the sum of the limits: $L=\\frac\\pi4+\\ln2=\\boxed{\\frac\\pi4+\\ln2}$."
        ]
      },
      {
        "name": "Single combined integrand",
        "steps": [
          "Both sums share the same mesh $\\frac1n$ and the same node $x=r/n$, so they may be merged term by term: $L=\\lim_{n\\to\\infty}\\frac1n\\sum_{r=1}^n\\Big[\\frac1{1+(r/n)^2}+\\frac1{1+r/n}\\Big]$.",
          "This is a single Riemann sum for $g(x)=\\frac1{1+x^2}+\\frac1{1+x}$ on $[0,1]$, whose antiderivative is $\\arctan x+\\ln(1+x)$.",
          "Hence $L=\\int_0^1 g(x)\\,dx=\\big[\\arctan x+\\ln(1+x)\\big]_0^1=\\frac\\pi4+\\ln2=\\boxed{\\frac\\pi4+\\ln2}$."
        ]
      }
    ],
    "remark": "Insight: two sums built on the same $\\frac1n$ mesh and the same node $r/n$ live under one integral sign, because the limit of a sum is the sum of limits. The whole subtlety is the window, the nodes $r/n$ fill $[0,1]$ and not $[0,\\infty)$, which pins the arctangent piece to $\\arctan 1=\\frac\\pi4$."
  },
  {
    "theme": "riemann",
    "themeLabel": "The Integral as a Limit of Sums",
    "title": "The Numerator That Splits Two Ways",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "riemann sum",
      "hybrid",
      "arctangent",
      "logarithm",
      "rational"
    ],
    "statement": "Evaluate \\[ L=\\lim_{n\\to\\infty}\\sum_{r=1}^{n}\\frac{n+r}{n^{2}+r^{2}}. \\]",
    "answer": "$L=\\dfrac{\\pi}{4}+\\dfrac{1}{2}\\ln 2$.",
    "trap": "Cancelling $\\frac{n+r}{n^2+r^2}$ to something like $\\frac{1}{n}$ or $\\frac{1}{n-r}$ by a false factorization (there is no factor of $n+r$ in $n^2+r^2$). The correct normalization is $\\frac{n+r}{n^2+r^2}=\\frac1n\\cdot\\frac{1+r/n}{1+(r/n)^2}$, and the integrand $\\frac{1+x}{1+x^2}$ must be split into $\\frac1{1+x^2}+\\frac{x}{1+x^2}$ — giving arctan plus a log, not a single elementary term.",
    "solutions": [
      {
        "name": "Normalize then split the integrand",
        "steps": [
          "Divide top and bottom by $n^2$: $\\frac{n+r}{n^2+r^2}=\\frac1n\\cdot\\frac{1+r/n}{1+(r/n)^2}$.",
          "So $L=\\int_0^1\\frac{1+x}{1+x^2}\\,dx=\\int_0^1\\frac{dx}{1+x^2}+\\int_0^1\\frac{x\\,dx}{1+x^2}$.",
          "First piece $=\\arctan1=\\frac\\pi4$; second $=\\big[\\tfrac12\\ln(1+x^2)\\big]_0^1=\\tfrac12\\ln2$.",
          "Therefore $L=\\boxed{\\frac\\pi4+\\frac12\\ln2}$."
        ]
      },
      {
        "name": "Two separate Riemann sums",
        "steps": [
          "Write the sum as $\\sum_{r=1}^n\\frac{n}{n^2+r^2}+\\sum_{r=1}^n\\frac{r}{n^2+r^2}$.",
          "The first $\\to\\int_0^1\\frac{dx}{1+x^2}=\\frac\\pi4$ (each term is $\\frac1n\\cdot\\frac1{1+(r/n)^2}$).",
          "The second is $\\frac1n\\sum\\frac{r/n}{1+(r/n)^2}\\to\\int_0^1\\frac{x\\,dx}{1+x^2}=\\frac12\\ln2$.",
          "Sum: $L=\\boxed{\\frac\\pi4+\\frac12\\ln2}$."
        ]
      }
    ],
    "remark": "Insight: a rational Riemann integrand of the form $\\frac{a+bx}{1+x^2}$ always separates into an $\\arctan$ part and a $\\frac12\\ln(1+x^2)$ part — recognize the split rather than fighting the algebra."
  },
  {
    "theme": "reduction",
    "themeLabel": "Reduction Formulae & Wallis",
    "title": "The Seven-Four Split",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "wallis",
      "sin-cos powers",
      "reduction",
      "beta function",
      "definite integral"
    ],
    "statement": "Evaluate \\[\\int_0^{\\pi/2}\\sin^7 x\\,\\cos^4 x\\,dx.\\]",
    "answer": "$\\dfrac{16}{1155}$",
    "trap": "Trying to apply the symmetric Wallis double-factorial formula $\\frac{(m-1)!!\\,(n-1)!!}{(m+n)!!}$ blindly: that closed form carries an extra factor of $\\frac{\\pi}{2}$ ONLY when both $m$ and $n$ are even. Here $m=7$ is odd, so no $\\pi$ should appear; inserting one yields $\\frac{8\\pi}{1155}\\approx 0.0218$, an irrational value that is plainly wrong (the true integral is $\\approx 0.0139$).",
    "solutions": [
      {
        "name": "Peel the odd sine power by substitution",
        "steps": [
          "Since the sine exponent $7$ is odd, write $\\sin^7x=\\sin x\\,(1-\\cos^2x)^3$ and set $u=\\cos x$, $du=-\\sin x\\,dx$, with $u:1\\to0$.",
          "The integral becomes $\\int_0^1 u^4(1-u^2)^3\\,du=\\int_0^1\\bigl(u^4-3u^6+3u^8-u^{10}\\bigr)\\,du$.",
          "Integrate termwise: $\\tfrac15-\\tfrac37+\\tfrac39-\\tfrac1{11}=\\tfrac15-\\tfrac37+\\tfrac13-\\tfrac1{11}$.",
          "Over the common denominator $1155$: $231-495+385-105=16$, giving $\\boxed{\\dfrac{16}{1155}}$."
        ]
      },
      {
        "name": "Beta-function reduction",
        "steps": [
          "Use $\\int_0^{\\pi/2}\\sin^m x\\cos^n x\\,dx=\\tfrac12 B\\!\\left(\\tfrac{m+1}{2},\\tfrac{n+1}{2}\\right)=\\dfrac{\\Gamma(\\frac{m+1}{2})\\,\\Gamma(\\frac{n+1}{2})}{2\\,\\Gamma(\\frac{m+n+2}{2})}$ with $m=7,\\,n=4$.",
          "This is $\\dfrac{\\Gamma(4)\\,\\Gamma(5/2)}{2\\,\\Gamma(13/2)}$, where $\\Gamma(4)=6$, $\\Gamma(5/2)=\\tfrac{3\\sqrt\\pi}{4}$, $\\Gamma(13/2)=\\tfrac{10395\\sqrt\\pi}{64}$.",
          "The $\\sqrt\\pi$ cancels (the odd exponent guarantees it): $\\dfrac{6\\cdot\\frac34\\cdot 64}{2\\cdot 10395}=\\dfrac{288}{20790}=\\boxed{\\dfrac{16}{1155}}$."
        ]
      }
    ],
    "remark": "Insight: parity decides everything. One odd exponent kills the $\\pi$ via a clean $u$-substitution; you only meet $\\pi$ when BOTH exponents are even and the whole quarter-circle's worth of symmetry survives. Equivalently, in the Beta form $\\frac12 B(\\frac{m+1}{2},\\frac{n+1}{2})$ a stray $\\sqrt\\pi$ in the numerator is cancelled by one in the denominator exactly when at least one of $m,n$ is odd."
  },
  {
    "theme": "reduction",
    "themeLabel": "Reduction Formulae & Wallis",
    "title": "Wallis at the Tenth Floor",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "wallis",
      "reduction",
      "double factorial",
      "definite integral",
      "integration by parts"
    ],
    "statement": "Let $I_n=\\displaystyle\\int_0^{\\pi/2}\\sin^n x\\,dx$. Using the recursion $I_n=\\dfrac{n-1}{n}I_{n-2}$, evaluate $I_{10}$ and $I_9$ in closed form.",
    "answer": "$I_{10}=\\dfrac{63\\pi}{512}$ and $I_9=\\dfrac{128}{315}$",
    "trap": "Forgetting that the recursion bottoms out at DIFFERENT base cases for the two parities: $I_0=\\frac{\\pi}{2}$ for even $n$ but $I_1=1$ for odd $n$. Driving $I_{10}$ down to $I_1$ (or $I_9$ down to $I_0$) mismatches the parity and contaminates a rational answer with $\\pi$ or vice versa.",
    "solutions": [
      {
        "name": "Iterate the recursion to the correct base",
        "steps": [
          "Derive $I_n=\\frac{n-1}{n}I_{n-2}$ by parts on $\\int\\sin^{n-1}x\\cdot\\sin x\\,dx$; the boundary term $[-\\sin^{n-1}x\\cos x]_0^{\\pi/2}$ vanishes at both ends for $n\\ge2$.",
          "Even chain to $I_0=\\frac\\pi2$: $I_{10}=\\frac{9}{10}\\cdot\\frac78\\cdot\\frac56\\cdot\\frac34\\cdot\\frac12\\cdot\\frac\\pi2=\\frac{9!!}{10!!}\\cdot\\frac\\pi2$.",
          "Numerically $9!!=945$, $10!!=3840$, so $I_{10}=\\frac{945}{3840}\\cdot\\frac\\pi2=\\boxed{\\dfrac{63\\pi}{512}}$.",
          "Odd chain to $I_1=1$: $I_9=\\frac{8}{9}\\cdot\\frac67\\cdot\\frac45\\cdot\\frac23\\cdot1=\\frac{8!!}{9!!}=\\frac{384}{945}=\\boxed{\\dfrac{128}{315}}$."
        ]
      },
      {
        "name": "Double-factorial formulas directly",
        "steps": [
          "For even $n=2k$: $I_{2k}=\\dfrac{(2k-1)!!}{(2k)!!}\\cdot\\dfrac\\pi2$; for odd $n=2k+1$: $I_{2k+1}=\\dfrac{(2k)!!}{(2k+1)!!}$.",
          "With $2k=10$: $I_{10}=\\frac{9!!}{10!!}\\frac\\pi2=\\frac{945}{3840}\\frac\\pi2=\\dfrac{63\\pi}{512}$.",
          "With $2k+1=9$ (so $k=4$): $I_9=\\frac{8!!}{9!!}=\\frac{384}{945}=\\dfrac{128}{315}$."
        ]
      }
    ],
    "remark": "Insight: the two parities live in different number systems — even $n$ inherits the $\\pi/2$ from $I_0$ (an honest area), odd $n$ inherits the bare $1$ from $I_1$. The book-keeping of where you stop is the whole game."
  },
  {
    "theme": "reduction",
    "themeLabel": "Reduction Formulae & Wallis",
    "title": "Tangent's Telescoping Ladder",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "tangent reduction",
      "telescoping",
      "definite integral",
      "reduction",
      "trig"
    ],
    "statement": "Using the reduction formula $T_n=\\displaystyle\\int_0^{\\pi/4}\\tan^n x\\,dx=\\dfrac{1}{n-1}-T_{n-2}$, evaluate $T_6=\\displaystyle\\int_0^{\\pi/4}\\tan^6 x\\,dx.$",
    "answer": "$\\dfrac{13}{15}-\\dfrac{\\pi}{4}$",
    "trap": "Reading the reduction as $T_n=\\frac{1}{n-1}+T_{n-2}$ (a plus sign). The correct identity has a MINUS: $\\tan^n=\\tan^{n-2}(\\sec^2-1)$, so the $-T_{n-2}$ comes from subtracting the lower power. A plus sign destroys the alternating telescope and the $\\pi/4$ would acquire the wrong sign, giving the bogus $\\frac{23}{15}+\\frac{\\pi}{4}$.",
    "solutions": [
      {
        "name": "Establish the reduction, then climb",
        "steps": [
          "Write $\\tan^n x=\\tan^{n-2}x(\\sec^2x-1)$. The first piece integrates to $\\frac{\\tan^{n-1}x}{n-1}$, evaluated on $[0,\\pi/4]$ giving $\\frac{1}{n-1}$ (since $\\tan\\frac\\pi4=1$).",
          "Hence $T_n=\\frac{1}{n-1}-T_{n-2}$ with base $T_0=\\int_0^{\\pi/4}dx=\\frac\\pi4$.",
          "Climb: $T_2=1-\\frac\\pi4$, then $T_4=\\frac13-T_2=\\frac13-1+\\frac\\pi4=-\\frac23+\\frac\\pi4$.",
          "Finally $T_6=\\frac15-T_4=\\frac15+\\frac23-\\frac\\pi4=\\frac{3+10}{15}-\\frac\\pi4=\\boxed{\\dfrac{13}{15}-\\dfrac\\pi4}$."
        ]
      },
      {
        "name": "Direct polynomial-in-tangent expansion",
        "steps": [
          "Substitute $t=\\tan x$, $dx=\\frac{dt}{1+t^2}$, so $T_6=\\int_0^1\\frac{t^6}{1+t^2}\\,dt$.",
          "Polynomial-divide: $\\frac{t^6}{1+t^2}=t^4-t^2+1-\\frac{1}{1+t^2}$.",
          "Integrate on $[0,1]$: $\\frac15-\\frac13+1-\\frac\\pi4=\\frac{3-5+15}{15}-\\frac\\pi4=\\frac{13}{15}-\\frac\\pi4=\\boxed{\\dfrac{13}{15}-\\dfrac\\pi4}$."
        ]
      }
    ],
    "remark": "Insight: the alternating minus sign makes $\\tan^n$ telescope so that exactly ONE copy of $T_0=\\frac\\pi4$ survives (with sign $(-1)^{n/2}$), while the rational part is a finite harmonic-like tail."
  },
  {
    "theme": "reduction",
    "themeLabel": "Reduction Formulae & Wallis",
    "title": "The Beta Bridge Over the Unit Interval",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "beta function",
      "reduction",
      "integration by parts",
      "factorial",
      "definite integral"
    ],
    "statement": "For integers $m,n\\ge0$ let $B_{m,n}=\\displaystyle\\int_0^1 x^m(1-x)^n\\,dx$. Prove the reduction $B_{m,n}=\\dfrac{n}{m+1}B_{m+1,n-1}$ and use it to evaluate $\\displaystyle\\int_0^1 x^4(1-x)^6\\,dx.$",
    "answer": "$\\dfrac{1}{2310}$",
    "trap": "Integrating by parts but mishandling the boundary term $\\left[\\frac{x^{m+1}}{m+1}(1-x)^n\\right]_0^1$. It vanishes only because $n\\ge1$ kills the $x=1$ end and $x^{m+1}$ kills the $x=0$ end; asserting it is nonzero, or writing the factor as $\\frac{m+1}{n}$ with the indices/ratio inverted, breaks the recursion. The inverted ratio multiplies the climbing chain $\\frac{5}{6}\\cdot\\frac{6}{5}\\cdot\\frac{7}{4}\\cdot\\frac{8}{3}\\cdot\\frac{9}{2}\\cdot\\frac{10}{1}$ against $B_{10,0}=\\frac1{11}$ and lands on $\\frac{1}{462}$, off by a factor of $5$.",
    "solutions": [
      {
        "name": "Integration by parts, then cascade",
        "steps": [
          "By parts with $u=(1-x)^n$, $dv=x^m\\,dx$: the boundary $\\left[\\frac{x^{m+1}}{m+1}(1-x)^n\\right]_0^1=0$ for $n\\ge1$ (at $x=1$ the factor $(1-x)^n$ vanishes, at $x=0$ the factor $x^{m+1}$ vanishes), leaving $B_{m,n}=\\frac{n}{m+1}\\int_0^1 x^{m+1}(1-x)^{n-1}\\,dx=\\frac{n}{m+1}B_{m+1,n-1}$.",
          "Iterate from $(m,n)=(4,6)$ down to $n=0$: $B_{4,6}=\\frac{6}{5}\\cdot\\frac{5}{6}\\cdot\\frac{4}{7}\\cdot\\frac{3}{8}\\cdot\\frac{2}{9}\\cdot\\frac{1}{10}\\,B_{10,0}.$",
          "The product of the six fractions telescopes to $\\frac{6!}{5\\cdot6\\cdot7\\cdot8\\cdot9\\cdot10}=\\frac{720}{151200}=\\frac{1}{210}$, and $B_{10,0}=\\int_0^1 x^{10}\\,dx=\\frac1{11}.$",
          "Multiply: $B_{4,6}=\\frac{1}{210}\\cdot\\frac{1}{11}=\\boxed{\\dfrac{1}{2310}}.$"
        ]
      },
      {
        "name": "Beta–factorial closed form",
        "steps": [
          "Recognize $B_{m,n}=B(m+1,n+1)=\\dfrac{m!\\,n!}{(m+n+1)!}$, the Euler Beta integral; the reduction above is exactly the recurrence that produces this formula.",
          "Plug $m=4,n=6$: $\\dfrac{4!\\,6!}{11!}=\\dfrac{24\\cdot720}{39916800}=\\dfrac{17280}{39916800}.$",
          "Reduce $\\dfrac{17280}{39916800}=\\boxed{\\dfrac{1}{2310}}$, matching the cascade."
        ]
      }
    ],
    "remark": "Insight: this single reduction is the engine behind the entire Beta/Gamma machine — repeatedly shifting a power from the $(1-x)$ factor onto the $x$ factor walks you straight to $\\dfrac{m!\\,n!}{(m+n+1)!}$. The symmetry $B_{m,n}=B_{n,m}$ is a free sanity check: swapping the roles of the two ends must give the same number, and $\\frac{4!\\,6!}{11!}=\\frac{6!\\,4!}{11!}$ confirms it."
  },
  {
    "theme": "reduction",
    "themeLabel": "Reduction Formulae & Wallis",
    "title": "Both Powers Even — Where the Pi Hides",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "wallis",
      "sin-cos powers",
      "even powers",
      "definite integral",
      "reduction"
    ],
    "statement": "Evaluate \\[\\int_0^{\\pi/2}\\cos^6 x\\,\\sin^2 x\\,dx.\\]",
    "answer": "$\\dfrac{5\\pi}{256}$",
    "trap": "Substituting $u=\\sin x$ as if a power were odd. Both exponents here are EVEN, so no single substitution linearizes the integrand — you must use the double-even Wallis formula (which carries $\\frac\\pi2$). Forcing a $u$-substitution leaves a stubborn even residual power and a wrong rational answer with no $\\pi$.",
    "solutions": [
      {
        "name": "Reduce to pure cosine powers",
        "steps": [
          "Write $\\sin^2x=1-\\cos^2x$, so the integral is $\\int_0^{\\pi/2}\\cos^6x\\,dx-\\int_0^{\\pi/2}\\cos^8x\\,dx=J_6-J_8$.",
          "By the even-Wallis formula $J_{2k}=\\frac{(2k-1)!!}{(2k)!!}\\frac\\pi2$: $J_6=\\frac{5!!}{6!!}\\frac\\pi2=\\frac{15}{48}\\frac\\pi2=\\frac{5\\pi}{32}$.",
          "$J_8=\\frac{7!!}{8!!}\\frac\\pi2=\\frac{105}{384}\\frac\\pi2=\\frac{35\\pi}{256}$.",
          "Subtract: $\\frac{5\\pi}{32}-\\frac{35\\pi}{256}=\\frac{40\\pi-35\\pi}{256}=\\boxed{\\dfrac{5\\pi}{256}}$."
        ]
      },
      {
        "name": "Double-even Beta formula",
        "steps": [
          "For both exponents even, $\\int_0^{\\pi/2}\\sin^m x\\cos^n x\\,dx=\\dfrac{(m-1)!!\\,(n-1)!!}{(m+n)!!}\\cdot\\dfrac\\pi2$ with $m=2,n=6$.",
          "This is $\\dfrac{1!!\\cdot5!!}{8!!}\\cdot\\dfrac\\pi2=\\dfrac{1\\cdot15}{384}\\cdot\\dfrac\\pi2$.",
          "Compute $\\dfrac{15}{384}\\cdot\\dfrac\\pi2=\\dfrac{15\\pi}{768}=\\boxed{\\dfrac{5\\pi}{256}}$."
        ]
      }
    ],
    "remark": "Insight: the lone $\\frac\\pi2$ in the double-even formula is the fingerprint of two surviving even base cases. The $\\sin^2=1-\\cos^2$ trick is the cleanest way to see why the answer is a difference of two Wallis constants."
  },
  {
    "theme": "reduction",
    "themeLabel": "Reduction Formulae & Wallis",
    "title": "The Secant Staircase",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "secant reduction",
      "integration by parts",
      "definite integral",
      "reduction",
      "trig"
    ],
    "statement": "The secant reduction is $S_n=\\displaystyle\\int\\sec^n x\\,dx=\\dfrac{\\sec^{n-2}x\\,\\tan x}{n-1}+\\dfrac{n-2}{n-1}\\int\\sec^{n-2}x\\,dx$. Use it to evaluate $\\displaystyle\\int_0^{\\pi/4}\\sec^4 x\\,dx.$",
    "answer": "$\\dfrac{4}{3}$",
    "trap": "Mishandling the boundary/coefficient: writing the recursion with $\\frac{n-1}{n-2}$ in front of the lower integral instead of $\\frac{n-2}{n-1}$, or evaluating $\\sec^{n-2}\\tan$ at $\\pi/4$ as if $\\sec\\frac\\pi4=1$. In fact $\\sec\\frac\\pi4=\\sqrt2$ so $\\sec^2\\frac\\pi4=2$, and getting this wrong yields $\\frac{2}{3}$ instead of $\\frac43$.",
    "solutions": [
      {
        "name": "Apply the reduction once",
        "steps": [
          "With $n=4$: $\\int_0^{\\pi/4}\\sec^4x\\,dx=\\left[\\frac{\\sec^2x\\,\\tan x}{3}\\right]_0^{\\pi/4}+\\frac{2}{3}\\int_0^{\\pi/4}\\sec^2x\\,dx$.",
          "At $x=\\frac\\pi4$: $\\sec^2\\frac\\pi4=2$, $\\tan\\frac\\pi4=1$, so the boundary term is $\\frac{2\\cdot1}{3}-0=\\frac23$.",
          "The remaining $\\int_0^{\\pi/4}\\sec^2x\\,dx=[\\tan x]_0^{\\pi/4}=1$, contributing $\\frac23\\cdot1=\\frac23$.",
          "Total: $\\frac23+\\frac23=\\boxed{\\dfrac43}$."
        ]
      },
      {
        "name": "Pythagorean expansion",
        "steps": [
          "Write $\\sec^4x=\\sec^2x\\cdot\\sec^2x=\\sec^2x(1+\\tan^2x)$.",
          "Substitute $t=\\tan x$, $dt=\\sec^2x\\,dx$, limits $0\\to1$: $\\int_0^1(1+t^2)\\,dt$.",
          "Evaluate: $\\left[t+\\frac{t^3}{3}\\right]_0^1=1+\\frac13=\\boxed{\\dfrac43}$."
        ]
      }
    ],
    "remark": "Insight: unlike $\\sin/\\cos$, the secant reduction keeps a nonzero boundary term every step (because $\\sec^{n-2}\\tan$ does not vanish at the upper limit), so you must actually plug in $\\sec\\frac\\pi4=\\sqrt2$ rather than reflexively using $1$."
  },
  {
    "theme": "reduction",
    "themeLabel": "Reduction Formulae & Wallis",
    "title": "The Reciprocal Handshake",
    "difficulty": 5,
    "task": "Prove that",
    "tags": [
      "wallis",
      "by-parts identity",
      "product formula",
      "definite integral",
      "reduction"
    ],
    "statement": "Let $I_n=\\displaystyle\\int_0^{\\pi/2}\\sin^n x\\,dx$ for $n\\ge0$. Prove that $n\\,I_n\\,I_{n-1}=\\dfrac{\\pi}{2}$ for all $n\\ge1$, and hence evaluate $I_8\\,I_7$.",
    "answer": "The identity $n\\,I_n I_{n-1}=\\dfrac\\pi2$ is proved; consequently $I_8 I_7=\\dfrac{\\pi}{16}$.",
    "trap": "Trying to prove the identity by plugging in the explicit double-factorial formulas and chasing parities separately — workable but error-prone, and it obscures why the product is parity-independent. Worse, assuming $I_nI_{n-1}$ depends on parity (it does not): the $\\pi$ from the even factor and the rational odd factor always combine to the SAME constant $\\frac{\\pi}{2n}$.",
    "solutions": [
      {
        "name": "Telescoping the recursion (slick)",
        "steps": [
          "Define $P_n=n\\,I_n I_{n-1}$. Using $I_n=\\frac{n-1}{n}I_{n-2}$, compute the ratio $\\frac{P_n}{P_{n-1}}=\\frac{n\\,I_nI_{n-1}}{(n-1)I_{n-1}I_{n-2}}=\\frac{n}{n-1}\\cdot\\frac{I_n}{I_{n-2}}=\\frac{n}{n-1}\\cdot\\frac{n-1}{n}=1$.",
          "Hence $P_n=P_{n-1}=\\cdots=P_1$, a constant independent of $n$.",
          "Evaluate $P_1=1\\cdot I_1 I_0=1\\cdot1\\cdot\\frac\\pi2=\\frac\\pi2$. Therefore $n\\,I_nI_{n-1}=\\frac\\pi2$ for all $n\\ge1$.",
          "Set $n=8$: $8\\,I_8 I_7=\\frac\\pi2$, so $I_8 I_7=\\boxed{\\dfrac{\\pi}{16}}$."
        ]
      },
      {
        "name": "Direct double-factorial check",
        "steps": [
          "Take $n=8$ (even): $I_8=\\frac{7!!}{8!!}\\frac\\pi2=\\frac{105}{384}\\frac\\pi2=\\frac{35\\pi}{256}$ and $I_7=\\frac{6!!}{7!!}=\\frac{48}{105}=\\frac{16}{35}$.",
          "Product $I_8 I_7=\\frac{35\\pi}{256}\\cdot\\frac{16}{35}=\\frac{16\\pi}{256}=\\frac{\\pi}{16}$, matching $\\frac{\\pi}{2\\cdot8}$.",
          "In general the even/odd double factorials interlock as $I_{2k}I_{2k-1}=\\frac{(2k-1)!!}{(2k)!!}\\frac\\pi2\\cdot\\frac{(2k-2)!!}{(2k-1)!!}=\\frac{(2k-2)!!}{(2k)!!}\\frac\\pi2=\\frac{1}{2k}\\frac\\pi2$, confirming $n\\,I_nI_{n-1}=\\frac\\pi2$, so $\\boxed{I_8I_7=\\dfrac\\pi{16}}$."
        ]
      }
    ],
    "remark": "Insight: the product $I_nI_{n-1}$ is where the irrational (even) and rational (odd) Wallis values shake hands and cancel into a clean $\\frac{\\pi}{2n}$ — this very identity is the squeeze that proves the Wallis product converges to $\\pi/2$."
  },
  {
    "theme": "reduction",
    "themeLabel": "Reduction Formulae & Wallis",
    "title": "Twelfth Power, Single Stroke",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "wallis",
      "high power",
      "double factorial",
      "definite integral",
      "reduction"
    ],
    "statement": "Evaluate \\[\\int_0^{\\pi/2}\\sin^{12}x\\,dx\\] in exact closed form.",
    "answer": "$\\dfrac{231\\pi}{2048}$",
    "trap": "Stopping the recursion one step too early at $I_2=\\frac\\pi4$ and forgetting the final $\\times\\frac12$ that takes $I_2$ to $I_0$ — or miscounting the chain length so a factor like $\\frac{11}{12}$ is dropped. Either off-by-one corrupts the numerator $231$.",
    "solutions": [
      {
        "name": "Full even Wallis chain",
        "steps": [
          "$I_{12}=\\frac{11}{12}\\cdot\\frac{9}{10}\\cdot\\frac{7}{8}\\cdot\\frac{5}{6}\\cdot\\frac{3}{4}\\cdot\\frac{1}{2}\\cdot I_0$ with $I_0=\\frac\\pi2$.",
          "Numerator of fractions: $11\\cdot9\\cdot7\\cdot5\\cdot3\\cdot1=11!!=10395$. Denominator: $12\\cdot10\\cdot8\\cdot6\\cdot4\\cdot2=12!!=46080$.",
          "So $I_{12}=\\frac{10395}{46080}\\cdot\\frac\\pi2=\\frac{10395\\pi}{92160}$.",
          "Reduce by $\\gcd=45$: $\\frac{231\\pi}{2048}$, i.e. $\\boxed{\\dfrac{231\\pi}{2048}}$."
        ]
      },
      {
        "name": "Central-binomial form",
        "steps": [
          "For $n=2k$, $I_{2k}=\\dfrac{\\binom{2k}{k}}{4^{k}}\\cdot\\dfrac\\pi2$. Here $k=6$.",
          "$\\binom{12}{6}=924$ and $4^{6}=4096$, so $I_{12}=\\frac{924}{4096}\\cdot\\frac\\pi2=\\frac{924\\pi}{8192}$.",
          "Simplify: $\\frac{924}{8192}=\\frac{231}{2048}$, giving $\\boxed{\\dfrac{231\\pi}{2048}}$."
        ]
      }
    ],
    "remark": "Insight: the central binomial coefficient $\\binom{2k}{k}/4^k$ is just $(2k-1)!!/(2k)!!$ in disguise — recognizing it turns a six-step recursion into a single lookup."
  },
  {
    "theme": "reduction",
    "themeLabel": "Reduction Formulae & Wallis",
    "title": "Eight by Six, Both Even",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "wallis",
      "sin-cos powers",
      "double-even formula",
      "definite integral",
      "reduction"
    ],
    "statement": "Evaluate \\[\\int_0^{\\pi/2}\\sin^8 x\\,\\cos^6 x\\,dx.\\]",
    "answer": "$\\dfrac{5\\pi}{4096}$",
    "trap": "Applying $\\frac{(m-1)!!(n-1)!!}{(m+n)!!}$ WITHOUT the $\\frac\\pi2$ factor. With both $m=8,n=6$ even, the double-even rule mandates the $\\frac\\pi2$; omitting it gives a purely rational (and wrong) answer $\\frac{5}{2048}$.",
    "solutions": [
      {
        "name": "Double-even Beta formula",
        "steps": [
          "Both exponents even: $\\int_0^{\\pi/2}\\sin^m x\\cos^n x\\,dx=\\dfrac{(m-1)!!\\,(n-1)!!}{(m+n)!!}\\cdot\\dfrac\\pi2$ with $m=8,n=6$.",
          "$(8-1)!!=7!!=105$, $(6-1)!!=5!!=15$, $(8+6)!!=14!!=645120$.",
          "So the value is $\\dfrac{105\\cdot15}{645120}\\cdot\\dfrac\\pi2=\\dfrac{1575}{645120}\\cdot\\dfrac\\pi2$.",
          "Simplify $\\frac{1575}{645120}=\\frac{5}{2048}$, then $\\times\\frac\\pi2=\\boxed{\\dfrac{5\\pi}{4096}}$."
        ]
      },
      {
        "name": "Gamma evaluation",
        "steps": [
          "Use $\\tfrac12B\\!\\left(\\tfrac{m+1}{2},\\tfrac{n+1}{2}\\right)=\\dfrac{\\Gamma(9/2)\\Gamma(7/2)}{2\\,\\Gamma(8)}$ for $m=8,n=6$.",
          "$\\Gamma(9/2)=\\tfrac{105\\sqrt\\pi}{16}$, $\\Gamma(7/2)=\\tfrac{15\\sqrt\\pi}{8}$, $\\Gamma(8)=5040$.",
          "Product of Gammas $=\\frac{105\\cdot15}{128}\\pi=\\frac{1575\\pi}{128}$; divide by $2\\cdot5040=10080$: $\\frac{1575\\pi}{128\\cdot10080}=\\frac{1575\\pi}{1290240}=\\boxed{\\dfrac{5\\pi}{4096}}$."
        ]
      }
    ],
    "remark": "Insight: with two even powers the integrand never reduces to a single substitution; the $\\sqrt\\pi$ from each half-integer Gamma multiplies to a full $\\pi$ — geometrically, the full two-fold symmetry of the quarter-circle is what 'pays out' the $\\pi$."
  },
  {
    "theme": "reduction",
    "themeLabel": "Reduction Formulae & Wallis",
    "title": "The Trig Disguise of an Algebraic Integral",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "substitution",
      "wallis",
      "beta function",
      "reduction",
      "hybrid",
      "definite integral"
    ],
    "statement": "By recognizing it as a sine–cosine power integral in disguise, evaluate \\[\\int_0^1 x^5\\,(1-x^2)^{7/2}\\,dx.\\]",
    "answer": "$\\dfrac{8}{1287}$",
    "trap": "Substituting $x=\\sin t$ but botching the differential or the new exponents: $(1-x^2)^{7/2}=\\cos^7 t$ and $dx=\\cos t\\,dt$ together give $\\cos^8 t$, NOT $\\cos^7 t$. Dropping the extra $\\cos t$ from $dx$ turns the integral into $\\int\\sin^5\\cos^7$ and yields the wrong value $\\frac{1}{120}$.",
    "solutions": [
      {
        "name": "Trig substitution to a Wallis-type integral",
        "steps": [
          "Let $x=\\sin t$, $dx=\\cos t\\,dt$, with $x:0\\to1$ matching $t:0\\to\\frac\\pi2$; then $(1-x^2)^{7/2}=\\cos^7 t$.",
          "The integral becomes $\\int_0^{\\pi/2}\\sin^5 t\\,\\cos^7 t\\cdot\\cos t\\,dt=\\int_0^{\\pi/2}\\sin^5 t\\,\\cos^8 t\\,dt$.",
          "Sine exponent $5$ is odd, so no $\\pi$: reduce directly via $u=\\cos t$, $du=-\\sin t\\,dt$, writing $\\sin^4 t=(1-u^2)^2$: $\\int_0^1 u^8(1-u^2)^2\\,du=\\int_0^1(u^8-2u^{10}+u^{12})\\,du=\\frac19-\\frac{2}{11}+\\frac1{13}$.",
          "Common denominator $1287$: $143-234+99=8$, so the value is $\\boxed{\\dfrac{8}{1287}}$."
        ]
      },
      {
        "name": "Direct algebraic substitution via the Beta function",
        "steps": [
          "Set $w=x^2$, $dw=2x\\,dx$, so $x^5\\,dx=\\frac12 w^2\\,dw$ and the integral is $\\frac12\\int_0^1 w^2(1-w)^{7/2}\\,dw$.",
          "This is $\\frac12 B\\!\\left(3,\\tfrac92\\right)=\\frac12\\cdot\\dfrac{\\Gamma(3)\\,\\Gamma(9/2)}{\\Gamma(15/2)}$.",
          "With $\\Gamma(3)=2$, $\\Gamma(9/2)=\\frac{105\\sqrt\\pi}{16}$, $\\Gamma(15/2)=\\frac{135135\\sqrt\\pi}{128}$: the $\\sqrt\\pi$ cancels, giving $\\frac12\\cdot\\dfrac{2\\cdot\\frac{105}{16}}{\\frac{135135}{128}}=\\frac12\\cdot\\dfrac{105\\cdot16}{135135}$.",
          "Compute $\\frac12\\cdot\\frac{1680}{135135}=\\frac{840}{135135}=\\boxed{\\dfrac{8}{1287}}$."
        ]
      }
    ],
    "remark": "Insight: a half-integer exponent on an algebraic integrand is a flashing signal for $x=\\sin t$ — and because the resulting sine power is odd, the answer is rational despite the $7/2$ that looked irrational. Either the trig route or the Beta route lands the same clean fraction."
  },
  {
    "theme": "leibniz",
    "themeLabel": "Newton–Leibniz & Variable Limits",
    "title": "The Cube-Root Whisper",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "l'hopital",
      "leibniz",
      "limit",
      "0/0",
      "taylor"
    ],
    "statement": "Evaluate \\[ \\lim_{x\\to 0}\\ \\frac{1}{x^{3}}\\int_{0}^{x}\\frac{t^{2}}{1+t^{4}}\\,dt. \\]",
    "answer": "$\\dfrac{1}{3}$",
    "trap": "Trying to find a closed form for $\\int_0^x \\frac{t^2}{1+t^4}\\,dt$ (it involves $\\arctan$ and $\\log$ of quadratics) and then expanding — a swamp. The point is that you never need the antiderivative: Leibniz gives the derivative of the numerator directly.",
    "solutions": [
      {
        "name": "L'Hôpital + Newton–Leibniz",
        "steps": [
          "As $x\\to 0$ the numerator $N(x)=\\int_0^x \\frac{t^2}{1+t^4}dt\\to 0$ and the denominator $x^3\\to 0$, so the form is $0/0$.",
          "By the Newton–Leibniz rule $N'(x)=\\dfrac{x^2}{1+x^4}$ (the upper limit is just $x$, so the chain factor is $1$).",
          "Apply L'Hôpital once: the limit equals $\\displaystyle\\lim_{x\\to0}\\frac{x^2/(1+x^4)}{3x^2}=\\lim_{x\\to0}\\frac{1}{3(1+x^4)}$.",
          "Letting $x\\to0$ gives $\\boxed{\\tfrac{1}{3}}$."
        ]
      },
      {
        "name": "Taylor of the integrand",
        "steps": [
          "Near $0$, $\\frac{t^2}{1+t^4}=t^2(1-t^4+\\cdots)=t^2 - t^6+\\cdots$.",
          "Integrate termwise: $\\int_0^x(t^2-t^6+\\cdots)\\,dt=\\frac{x^3}{3}-\\frac{x^7}{7}+\\cdots$.",
          "Divide by $x^3$: $\\frac{1}{3}-\\frac{x^4}{7}+\\cdots$.",
          "Let $x\\to0$ to get $\\boxed{\\tfrac{1}{3}}$."
        ]
      }
    ],
    "remark": "Insight: the leading behaviour of $\\int_0^x f$ is governed entirely by $f$ near $0$. Since $f(t)\\sim t^2$, the integral $\\sim x^3/3$, so dividing by $x^3$ reads off the coefficient $1/3$ instantly — the $1+t^4$ is invisible at leading order. The Taylor view even hands you the correction $-x^4/7$, matching the numerics."
  },
  {
    "theme": "leibniz",
    "themeLabel": "Newton–Leibniz & Variable Limits",
    "title": "Where the Accumulator Turns",
    "difficulty": 3,
    "task": "Classify",
    "tags": [
      "extrema",
      "integral-function",
      "monotonicity",
      "leibniz",
      "second-derivative"
    ],
    "statement": "Let $F(x)=\\displaystyle\\int_{0}^{x}(t^{2}-5t+6)\\,dt$ for $x\\in\\mathbb{R}$. Locate every local extremum of $F$ and classify each as a maximum or a minimum.",
    "answer": "Local maximum at $x=2$ (value $F(2)=\\tfrac{14}{3}$); local minimum at $x=3$ (value $F(3)=\\tfrac{9}{2}$).",
    "trap": "Computing $F(x)=\\frac{x^3}{3}-\\frac{5x^2}{2}+6x$ and then differentiating is fine — but rushing to set $F=0$ instead of $F'=0$, or mislabelling which root is the max. The accumulator $F$ rises while its integrand is positive and falls while it is negative, so the sign change of $f$ at each root decides max vs min.",
    "solutions": [
      {
        "name": "Newton–Leibniz + sign analysis",
        "steps": [
          "By Newton–Leibniz, $F'(x)=x^2-5x+6=(x-2)(x-3)$; critical points are $x=2,\\ 3$.",
          "$F'(x)>0$ for $x<2$, $F'(x)<0$ for $2<x<3$, $F'(x)>0$ for $x>3$.",
          "So $F$ increases, then decreases, then increases: $x=2$ is a local maximum and $x=3$ a local minimum.",
          "Evaluating, $F(2)=\\tfrac{14}{3}$ and $F(3)=\\tfrac{9}{2}$. $\\boxed{\\text{max at }2,\\ \\text{min at }3}$"
        ]
      },
      {
        "name": "Second-derivative test",
        "steps": [
          "$F'(x)=x^2-5x+6$, so $F''(x)=2x-5$.",
          "At $x=2$: $F''(2)=-1<0\\Rightarrow$ local maximum. At $x=3$: $F''(3)=1>0\\Rightarrow$ local minimum.",
          "Compute values $F(2)=\\tfrac{14}{3}$, $F(3)=\\tfrac{9}{2}$.",
          "$\\boxed{\\text{max at }2,\\ \\text{min at }3}$"
        ]
      }
    ],
    "remark": "Insight: you never need the explicit formula for $F$ to classify its extrema — its first and second derivatives are read straight off the integrand and its slope. The integral merely supplies the actual heights."
  },
  {
    "theme": "leibniz",
    "themeLabel": "Newton–Leibniz & Variable Limits",
    "title": "The Logarithmic Integral's Slope",
    "difficulty": 4,
    "task": "Find",
    "tags": [
      "leibniz",
      "variable-limits",
      "chain-rule",
      "derivative"
    ],
    "statement": "For $x>1$ define $\\;G(x)=\\displaystyle\\int_{x}^{x^{2}}\\frac{dt}{\\ln t}.$ Find $G'(x)$ in closed form.",
    "answer": "$G'(x)=\\dfrac{x-1}{\\ln x}$",
    "trap": "Forgetting the chain factor $g'(x)=2x$ on the upper limit $x^2$, or forgetting to weight each limit by its own derivative. Writing $G'(x)=\\frac{1}{\\ln(x^2)}-\\frac{1}{\\ln x}$ drops the $2x$; it simplifies to $-\\frac{1}{2\\ln x}$, which is even negative for $x>1$ and so cannot be the slope of an increasing $G$.",
    "solutions": [
      {
        "name": "General Leibniz formula",
        "steps": [
          "With $u(x)=x$, $v(x)=x^2$ and $f(t)=1/\\ln t$, the rule $\\frac{d}{dx}\\int_{u}^{v} f(t)\\,dt = f(v)\\,v' - f(u)\\,u'$ applies (the integrand has no explicit $x$).",
          "Here $f(v)=\\frac{1}{\\ln(x^2)}=\\frac{1}{2\\ln x}$ and $v'=2x$; also $f(u)=\\frac{1}{\\ln x}$ and $u'=1$.",
          "Thus $G'(x)=\\frac{1}{2\\ln x}\\cdot 2x-\\frac{1}{\\ln x}\\cdot 1=\\frac{x}{\\ln x}-\\frac{1}{\\ln x}$.",
          "Combine: $\\boxed{G'(x)=\\dfrac{x-1}{\\ln x}}$."
        ]
      },
      {
        "name": "Split at a fixed point",
        "steps": [
          "Pick a constant $c>1$ and write $G(x)=\\int_{c}^{x^2}\\frac{dt}{\\ln t}-\\int_{c}^{x}\\frac{dt}{\\ln t}$, valid since both pieces are finite for $x>1$.",
          "Differentiating the first via the chain rule: $\\frac{d}{dx}\\!\\int_{c}^{x^2}\\frac{dt}{\\ln t}=\\frac{1}{\\ln(x^2)}\\cdot 2x=\\frac{x}{\\ln x}$; the second gives $\\frac{1}{\\ln x}$.",
          "Subtract: $G'(x)=\\frac{x}{\\ln x}-\\frac{1}{\\ln x}$.",
          "$\\boxed{G'(x)=\\dfrac{x-1}{\\ln x}}$"
        ]
      },
      {
        "name": "Substitution to a single variable limit",
        "steps": [
          "In the upper piece set $t=s^2$, so $dt=2s\\,ds$ and $\\ln t=2\\ln s$: $\\int_{c}^{x^2}\\frac{dt}{\\ln t}=\\int_{\\sqrt c}^{x}\\frac{2s\\,ds}{2\\ln s}=\\int_{\\sqrt c}^{x}\\frac{s}{\\ln s}\\,ds$.",
          "Hence $G(x)=\\int_{\\sqrt c}^{x}\\frac{s}{\\ln s}\\,ds-\\int_{c}^{x}\\frac{ds}{\\ln s}=\\int_{\\sqrt c}^{x}\\frac{s}{\\ln s}\\,ds-\\int_{c}^{x}\\frac{ds}{\\ln s}$.",
          "Now both upper limits are simply $x$, so the Fundamental Theorem gives $G'(x)=\\frac{x}{\\ln x}-\\frac{1}{\\ln x}$ (the fixed lower limits contribute nothing).",
          "$\\boxed{G'(x)=\\dfrac{x-1}{\\ln x}}$"
        ]
      }
    ],
    "remark": "Insight: $\\ln(x^2)=2\\ln x$ conspires with the chain factor $2x$ so the two $2$'s cancel, leaving the clean $\\frac{x-1}{\\ln x}$. Note $G'(x)>0$ for all $x>1$ (both $x-1$ and $\\ln x$ are positive), so $G$ is strictly increasing — a quick sanity check the trap answer $-\\frac{1}{2\\ln x}<0$ fails outright. The integrand $1/\\ln t$ is the density behind the logarithmic-integral function $\\mathrm{li}$, whose values resist elementary closed form, yet this particular slope is perfectly elementary."
  },
  {
    "theme": "leibniz",
    "themeLabel": "Newton–Leibniz & Variable Limits",
    "title": "Solve for the Upper Limit",
    "difficulty": 3,
    "task": "Determine",
    "tags": [
      "integral-equation",
      "newton-leibniz",
      "monotonicity",
      "uniqueness"
    ],
    "statement": "Determine all real $x$ with $x>0$ satisfying \\[ \\int_{0}^{x}(2t+1)\\,dt = 12. \\]",
    "answer": "$x=3$",
    "trap": "Treating the equation as if the integral were a derivative, or differentiating both sides to get $2x+1=0$ — but the right side is the constant $12$, so differentiating both sides forces $2x+1=0$, i.e. $x=-\\tfrac12$, which is not even positive and does not satisfy the original equation. You must actually evaluate the integral, not differentiate it.",
    "solutions": [
      {
        "name": "Evaluate then solve",
        "steps": [
          "$\\int_0^x(2t+1)\\,dt=\\big[t^2+t\\big]_0^x=x^2+x$.",
          "Set $x^2+x=12$, i.e. $x^2+x-12=0$, factoring as $(x-3)(x+4)=0$.",
          "Roots $x=3$ and $x=-4$; the constraint $x>0$ keeps only $x=3$.",
          "$\\boxed{x=3}$"
        ]
      },
      {
        "name": "Monotonicity guarantees uniqueness",
        "steps": [
          "Let $F(x)=\\int_0^x(2t+1)\\,dt$. For $x>0$, $F'(x)=2x+1>0$, so $F$ is strictly increasing on $(0,\\infty)$.",
          "Hence $F(x)=12$ has at most one positive solution.",
          "Test $x=3$: $F(3)=3^2+3=12$. It works.",
          "By strict monotonicity it is the only one: $\\boxed{x=3}$."
        ]
      }
    ],
    "remark": "Insight: $F(x)=\\int_0^x f$ with $f>0$ is strictly increasing, so the equation $F(x)=c$ has a unique solution — Newton–Leibniz turns an integral equation into a routine algebra problem with a uniqueness guarantee for free."
  },
  {
    "theme": "leibniz",
    "themeLabel": "Newton–Leibniz & Variable Limits",
    "title": "A Square-Root in the Ceiling",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "l'hopital",
      "leibniz",
      "chain-rule",
      "limit",
      "substitution"
    ],
    "statement": "Evaluate \\[ \\lim_{x\\to 0^{+}}\\ \\frac{1}{x^{3}}\\int_{0}^{x^{2}}\\sin\\!\\big(\\sqrt{t}\\,\\big)\\,dt. \\]",
    "answer": "$\\dfrac{2}{3}$",
    "trap": "When applying L'Hôpital, forgetting the chain factor from the upper limit $x^2$. By Leibniz $\\frac{d}{dx}\\int_0^{x^2}\\sin\\sqrt{t}\\,dt=\\sin(\\sqrt{x^2})\\cdot 2x=2x\\sin x$ (for $x>0$), not just $\\sin(\\sqrt{x^2})=\\sin x$. Omitting the $2x$ turns the quotient into $\\frac{\\sin x}{3x^2}\\to+\\infty$, so the answer blows up instead of collapsing to a finite value.",
    "solutions": [
      {
        "name": "L'Hôpital with the chain factor",
        "steps": [
          "As $x\\to0^+$ both numerator $\\int_0^{x^2}\\sin\\sqrt t\\,dt\\to0$ and denominator $x^3\\to0$, so the form is $0/0$.",
          "By the Leibniz rule for a variable upper limit, $\\frac{d}{dx}\\int_0^{x^2}\\sin\\sqrt{t}\\,dt=\\sin\\!\\big(\\sqrt{x^2}\\big)\\cdot\\frac{d}{dx}(x^2)=2x\\sin x$, using $\\sqrt{x^2}=x$ for $x>0$.",
          "Hence the limit becomes $\\displaystyle\\lim_{x\\to0^+}\\frac{2x\\sin x}{3x^2}=\\lim_{x\\to0^+}\\frac{2}{3}\\cdot\\frac{\\sin x}{x}.$",
          "Since $\\frac{\\sin x}{x}\\to1$, the value is $\\frac{2}{3}$.",
          "$\\boxed{\\tfrac{2}{3}}$"
        ]
      },
      {
        "name": "Substitution to a clean integral",
        "steps": [
          "Substitute $t=w^2$, so $\\sqrt t=w$ and $dt=2w\\,dw$; as $t$ runs $0\\to x^2$, $w$ runs $0\\to x$. Thus $\\int_0^{x^2}\\sin\\sqrt{t}\\,dt=2\\int_0^{x}w\\sin w\\,dw$ (for $x>0$).",
          "Integrating by parts, $2\\int_0^x w\\sin w\\,dw=2\\big(\\sin w-w\\cos w\\big)\\Big|_0^x=2\\sin x-2x\\cos x.$",
          "Expand near $0$: $2\\sin x-2x\\cos x=2\\big(x-\\tfrac{x^3}{6}+\\cdots\\big)-2x\\big(1-\\tfrac{x^2}{2}+\\cdots\\big)=\\tfrac{2}{3}x^3+o(x^3).$",
          "Dividing by $x^3$ gives $\\frac{2}{3}+o(1)\\to\\frac{2}{3}.$",
          "$\\boxed{\\tfrac{2}{3}}$"
        ]
      }
    ],
    "remark": "Insight: the integrand $\\sin\\sqrt t\\sim\\sqrt t$ has a square-root profile near $0$, so $\\int_0^{x^2}\\sin\\sqrt t\\,dt\\sim\\int_0^{x^2}\\sqrt t\\,dt=\\tfrac{2}{3}(x^2)^{3/2}=\\tfrac{2}{3}x^3$. The exponent matching the $x^3$ denominator exactly is what makes the limit finite and nonzero — a heavier integrand (or a different power on the upper limit) would send it to $0$ or $\\infty$."
  },
  {
    "theme": "leibniz",
    "themeLabel": "Newton–Leibniz & Variable Limits",
    "title": "The Double Root That Isn't an Extremum",
    "difficulty": 4,
    "task": "Classify",
    "tags": [
      "extrema",
      "integral-function",
      "leibniz",
      "sign-change",
      "inflection"
    ],
    "statement": "Let $\\;F(x)=\\displaystyle\\int_{0}^{x}(t-1)(t-2)^{2}\\,dt.$ Classify each critical point of $F$ as a local maximum, local minimum, or neither.",
    "answer": "$x=1$ is a local minimum; $x=2$ is neither (a horizontal inflection of $F$).",
    "trap": "Declaring both roots $x=1$ and $x=2$ of $F'$ to be extrema. At the double root $x=2$, $F'=(x-1)(x-2)^2$ does NOT change sign (the factor $(x-2)^2\\ge0$), so $F$ has a flat spot but keeps rising — no extremum there.",
    "solutions": [
      {
        "name": "First-derivative sign test",
        "steps": [
          "By Newton–Leibniz, $F'(x)=(x-1)(x-2)^2$, vanishing at $x=1$ and $x=2$.",
          "Sign of $F'$: for $x<1$, $(x-1)<0$ and $(x-2)^2>0\\Rightarrow F'<0$; for $1<x<2$, $F'>0$; for $x>2$, $F'>0$.",
          "At $x=1$, $F'$ goes from $-$ to $+$: local minimum. At $x=2$, $F'$ stays $+$ on both sides: no extremum.",
          "$\\boxed{x=1\\text{ min},\\ x=2\\text{ neither}}$"
        ]
      },
      {
        "name": "Higher-order test at the double root",
        "steps": [
          "At $x=1$: $F''(x)=\\dfrac{d}{dx}\\big[(x-1)(x-2)^2\\big]=(x-2)(3x-4)$, so $F''(1)=(-1)(-1)=1>0\\Rightarrow$ local minimum.",
          "At $x=2$: $F'(2)=0$ and $F''(2)=0$ (the $(x-2)^2$ factor forces a double zero of $F'$), so the second-derivative test is inconclusive.",
          "Go higher: $F'''(2)=2\\ne0$, an odd-order first nonzero derivative, so $x=2$ is a horizontal inflection of $F$, not an extremum (equivalently, $F'$ has an even-order zero there and keeps its sign).",
          "$\\boxed{x=1\\text{ min},\\ x=2\\text{ neither}}$"
        ]
      }
    ],
    "remark": "Insight: extrema of $F=\\int_0^x f$ occur only where the integrand $f$ changes sign, i.e. at odd-multiplicity roots of $f$. An even-multiplicity root of the integrand gives a flat tangent that is an inflection of the accumulator, never a turning point."
  },
  {
    "theme": "leibniz",
    "themeLabel": "Newton–Leibniz & Variable Limits",
    "title": "Gaussian Meets Cosine",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "l'hopital",
      "leibniz",
      "limit",
      "0/0",
      "taylor"
    ],
    "statement": "Evaluate \\[ \\lim_{x\\to 0}\\ \\frac{\\displaystyle\\int_{0}^{x} t\\,e^{t^{2}}\\,dt}{1-\\cos x}. \\]",
    "answer": "$1$",
    "trap": "Cancelling the integral by computing it ($\\int_0^x t e^{t^2}dt=\\tfrac12(e^{x^2}-1)$) is legal but then mis-expanding $e^{x^2}-1\\approx x^2$ and $1-\\cos x\\approx x^2/2$ must both keep the leading order; dropping the $\\tfrac12$ on either side flips the answer. Equally, one round of L'Hôpital alone leaves another $0/0$ — you must continue or expand.",
    "solutions": [
      {
        "name": "Evaluate the numerator, then expand",
        "steps": [
          "The numerator has the exact antiderivative $\\int_0^x t e^{t^2}dt=\\tfrac12\\big(e^{x^2}-1\\big)$.",
          "As $x\\to0$: $e^{x^2}-1=x^2+O(x^4)$, so numerator $=\\tfrac12 x^2+O(x^4)$.",
          "Denominator $1-\\cos x=\\tfrac12 x^2+O(x^4)$.",
          "Ratio $\\to\\dfrac{\\tfrac12 x^2}{\\tfrac12 x^2}=1$, so the limit is $\\boxed{1}$."
        ]
      },
      {
        "name": "L'Hôpital twice via Leibniz",
        "steps": [
          "Form is $0/0$. Differentiate: numerator $\\to x e^{x^2}$ (Leibniz, upper limit $x$), denominator $\\to \\sin x$.",
          "New ratio $\\frac{x e^{x^2}}{\\sin x}$ is still $0/0$; rewrite as $e^{x^2}\\cdot\\frac{x}{\\sin x}$.",
          "As $x\\to0$, $e^{x^2}\\to1$ and $\\frac{x}{\\sin x}\\to1$.",
          "Product $\\to1$, so $\\boxed{1}$."
        ]
      }
    ],
    "remark": "Insight: both top and bottom vanish like $\\tfrac12 x^2$, so the limit is the ratio of their $x^2$-coefficients. The Newton–Leibniz route lets the second method sidestep the explicit antiderivative — handy when the integrand has no elementary primitive."
  },
  {
    "theme": "leibniz",
    "themeLabel": "Newton–Leibniz & Variable Limits",
    "title": "Recovering the Integrand",
    "difficulty": 3,
    "task": "Find",
    "tags": [
      "newton-leibniz",
      "integral-equation",
      "inverse-problem"
    ],
    "statement": "A continuous function $f$ satisfies \\[ \\int_{0}^{x} f(t)\\,dt = x^{2}(1+x)\\quad\\text{for all }x\\in\\mathbb{R}. \\] Find $f(2)$.",
    "answer": "$f(2)=16$",
    "trap": "Plugging $x=2$ into the right side to get $f(2)=2^2(3)=12$ — that computes $\\int_0^2 f$, the accumulated area, not the value $f(2)$. To recover $f$ you must differentiate both sides, not substitute.",
    "solutions": [
      {
        "name": "Differentiate both sides",
        "steps": [
          "By Newton–Leibniz, $\\frac{d}{dx}\\int_0^x f(t)\\,dt=f(x)$.",
          "Differentiate the right side: $\\frac{d}{dx}\\big(x^2+x^3\\big)=2x+3x^2$.",
          "Hence $f(x)=2x+3x^2$.",
          "So $f(2)=2(2)+3(4)=4+12=\\boxed{16}$."
        ]
      },
      {
        "name": "Difference-quotient / FTC limit",
        "steps": [
          "Write $f(x)=\\lim_{h\\to0}\\frac{1}{h}\\int_x^{x+h}f=\\lim_{h\\to0}\\frac{F(x+h)-F(x)}{h}$ where $F(x)=x^2(1+x)$.",
          "This is exactly $F'(x)$ by definition of the derivative.",
          "$F'(x)=2x+3x^2$, so $f(x)=2x+3x^2$.",
          "Evaluate at $x=2$: $\\boxed{16}$."
        ]
      }
    ],
    "remark": "Insight: $\\int_0^x f$ stores the accumulated value while $f$ is its instantaneous rate. Differentiation and substitution answer two different questions — $f(2)$ versus $\\int_0^2 f$ — and confusing them is the classic Newton–Leibniz pitfall."
  },
  {
    "theme": "leibniz",
    "themeLabel": "Newton–Leibniz & Variable Limits",
    "title": "The Constant That Pretends to Vary",
    "difficulty": 5,
    "task": "Find",
    "tags": [
      "leibniz",
      "parameter-integral",
      "constant-limit-trap",
      "differentiation-under-integral"
    ],
    "statement": "Define, for $x\\in\\mathbb{R}$, \\[ \\Phi(x)=\\int_{0}^{1}\\big(x^{2}+t^{2}\\big)\\,dt \\;+\\; \\int_{1}^{3}\\big(t^{2}-t\\big)\\,dt \\;+\\; \\int_{0}^{x} t\\,dt. \\] Find $\\Phi'(x)$.",
    "answer": "$\\Phi'(x)=3x$",
    "trap": "Two opposite errors lurk. (1) Treating $\\int_0^1(x^2+t^2)\\,dt$ as a constant because its limits are constant — but the integrand depends on $x$, so its $x$-derivative is $\\int_0^1 2x\\,dt=2x\\neq0$. (2) Treating $\\int_1^3(t^2-t)\\,dt$ as varying with $x$ — it is a pure number, so its derivative is $0$, not anything involving $x$.",
    "solutions": [
      {
        "name": "Differentiate each piece by its own rule",
        "steps": [
          "First term: constant limits but $x$-dependent integrand, so $\\frac{d}{dx}\\int_0^1(x^2+t^2)\\,dt=\\int_0^1\\frac{\\partial}{\\partial x}(x^2+t^2)\\,dt=\\int_0^1 2x\\,dt=2x$.",
          "Second term: $\\int_1^3(t^2-t)\\,dt$ is a constant (no $x$ anywhere), so its derivative is $0$.",
          "Third term: variable upper limit, integrand free of $x$, so $\\frac{d}{dx}\\int_0^x t\\,dt=x$ by Newton–Leibniz.",
          "Sum: $\\Phi'(x)=2x+0+x=\\boxed{3x}$."
        ]
      },
      {
        "name": "Evaluate everything first",
        "steps": [
          "$\\int_0^1(x^2+t^2)\\,dt=x^2+\\tfrac13$; $\\int_1^3(t^2-t)\\,dt=\\big[\\tfrac{t^3}{3}-\\tfrac{t^2}{2}\\big]_1^3=\\tfrac{14}{3}$; $\\int_0^x t\\,dt=\\tfrac{x^2}{2}$.",
          "So $\\Phi(x)=x^2+\\tfrac13+\\tfrac{14}{3}+\\tfrac{x^2}{2}=\\tfrac{3x^2}{2}+5$.",
          "Differentiate: $\\Phi'(x)=3x$.",
          "$\\boxed{\\Phi'(x)=3x}$"
        ]
      }
    ],
    "remark": "Insight: whether a definite integral is a function of $x$ depends on where $x$ appears — in the limits, in the integrand, both, or neither. The two middle traps are mirror images: an $x$ hidden in the integrand still counts, while a constant integral with constant limits is genuinely inert."
  },
  {
    "theme": "leibniz",
    "themeLabel": "Newton–Leibniz & Variable Limits",
    "title": "A Gaussian on a Cubic Track",
    "difficulty": 5,
    "task": "Classify",
    "tags": [
      "leibniz",
      "chain-rule",
      "extrema",
      "positive-integrand",
      "sign-change"
    ],
    "statement": "Let $\\;G(x)=\\displaystyle\\int_{0}^{\\,x^{3}-3x} e^{-t^{2}}\\,dt$ for $x\\in\\mathbb{R}$. Find all critical points of $G$ and classify each as a local maximum or local minimum.",
    "answer": "Critical points $x=-1$ (local maximum) and $x=1$ (local minimum).",
    "trap": "Looking for where the integrand $e^{-t^2}$ vanishes (it never does) and concluding $G$ has no critical points. The critical points come from the chain factor $\\frac{d}{dx}(x^3-3x)=3x^2-3$, not from the strictly positive integrand. Also, since $e^{-t^2}>0$, the sign of $G'$ is exactly the sign of that chain factor.",
    "solutions": [
      {
        "name": "Newton–Leibniz with chain factor",
        "steps": [
          "By the chain rule, $G'(x)=e^{-(x^3-3x)^2}\\cdot\\frac{d}{dx}(x^3-3x)=e^{-(x^3-3x)^2}(3x^2-3)$.",
          "The exponential factor is always positive, so $G'(x)=0\\iff 3x^2-3=0\\iff x=\\pm1$.",
          "Sign of $G'$ matches sign of $3x^2-3$: positive for $|x|>1$, negative for $|x|<1$.",
          "So $G$ rises to $x=-1$, falls on $(-1,1)$, rises after $x=1$: $x=-1$ is a local maximum, $x=1$ a local minimum. $\\boxed{-1\\text{ max},\\ 1\\text{ min}}$"
        ]
      },
      {
        "name": "Composition viewpoint",
        "steps": [
          "Let $E(u)=\\int_0^u e^{-t^2}\\,dt$ (the error-function shape); $E$ is strictly increasing since $E'(u)=e^{-u^2}>0$.",
          "Then $G(x)=E\\big(h(x)\\big)$ with $h(x)=x^3-3x$. Because $E$ is increasing, $G$ has the same monotonicity pattern as $h$.",
          "$h'(x)=3x^2-3$ gives critical points $x=\\pm1$; $h$ has a local max at $x=-1$ and local min at $x=1$.",
          "Monotone $E$ preserves the type, so $\\boxed{x=-1\\text{ max},\\ x=1\\text{ min}}$."
        ]
      },
      {
        "name": "Second-derivative confirmation",
        "steps": [
          "From $G'(x)=e^{-(x^3-3x)^2}(3x^2-3)$, differentiate: at a critical point the $3x^2-3$ factor is zero, so $G''(x)=e^{-(x^3-3x)^2}\\cdot 6x$ there.",
          "At $x=-1$: $G''(-1)=6(-1)e^{-(-1+3)^2}=-6e^{-4}<0$, confirming a local maximum.",
          "At $x=1$: $G''(1)=6(1)e^{-(1-3)^2}=6e^{-4}>0$, confirming a local minimum.",
          "Both tests agree: $\\boxed{x=-1\\text{ max},\\ x=1\\text{ min}}$."
        ]
      }
    ],
    "remark": "Insight: when the integrand is one-signed, an integral-defined function $\\int_0^{h(x)} f$ inherits its extrema entirely from the upper-limit function $h(x)$ — the positive integrand only stretches heights, never creates or destroys turning points. The $e^{-t^2}$ has no elementary antiderivative, yet the calculus question is fully solvable."
  },
  {
    "theme": "estimation",
    "themeLabel": "Estimation & Integral Inequalities",
    "title": "Squeezing the Gaussian Bell",
    "difficulty": 4,
    "task": "Prove that",
    "tags": [
      "pinching",
      "convexity",
      "power series",
      "two-sided bound"
    ],
    "statement": "The integral $\\displaystyle G=\\int_0^1 e^{x^2}\\,dx$ resists every elementary antiderivative. Without evaluating it, prove the sharp pincer \\[ \\frac{4}{3} \\;<\\; \\int_0^1 e^{x^2}\\,dx \\;<\\; e-1. \\]",
    "answer": "Proved: $\\tfrac{4}{3}<G<e-1$ (numerically $G\\approx1.46265$).",
    "trap": "Bounding $e^{x^2}$ on $[0,1]$ by its endpoint values $1$ and $e$ to write $1<G<e$. This is true but far too loose. Worse is the seductive guess that the midpoint height $e^{1/4}\\approx1.284$ approximates $G$: because $e^{x^2}$ is strictly convex its graph dips below the chord, yet the curve still outweighs that single midpoint value, so $e^{1/4}<G$ and the estimate is a genuine underestimate. The moral: set up each comparison by the proven direction of an inequality, never by eyeballing a representative value.",
    "solutions": [
      {
        "name": "Term-by-term truncation",
        "steps": [
          "Expand $e^{x^2}=1+x^2+\\tfrac{x^4}{2}+\\cdots$; every term is $\\ge 0$ on $[0,1]$.",
          "Lower bound: keep two terms, $e^{x^2}\\ge 1+x^2$, so $G\\ge\\int_0^1(1+x^2)\\,dx=1+\\tfrac13=\\tfrac43$. Strictness holds since the dropped tail $\\tfrac{x^4}2+\\cdots>0$ on $(0,1]$.",
          "Upper bound: on $[0,1]$, $x^2\\le x$, hence $e^{x^2}\\le e^{x}$ (strict for $x\\in(0,1)$).",
          "Integrate: $G<\\int_0^1 e^{x}\\,dx=e-1$.",
          "Combine: $\\boxed{\\tfrac{4}{3}<G<e-1}$."
        ]
      },
      {
        "name": "Comparison of exponents",
        "steps": [
          "Lower: since $e^{t}\\ge 1+t$ with equality only at $t=0$, put $t=x^2$ to get $e^{x^2}\\ge1+x^2$, strict on $(0,1]$; integrate to $G>\\tfrac43$.",
          "Upper: for $x\\in[0,1]$ we have $x^2\\le x$, and $u\\mapsto e^{u}$ is increasing, so $e^{x^2}\\le e^{x}$.",
          "$\\int_0^1 e^{x}\\,dx=e-1$ gives $G<e-1$.",
          "Hence $\\boxed{\\tfrac{4}{3}<G<e-1}$."
        ]
      },
      {
        "name": "Geometric–chord squeeze",
        "steps": [
          "Lower (tangent at the curve's nature): the map $t\\mapsto e^t$ lies above its tangent line at $t=0$, i.e. $e^{t}\\ge 1+t$; with $t=x^2$ this gives $e^{x^2}\\ge 1+x^2$, so $G\\ge\\int_0^1(1+x^2)\\,dx=\\tfrac43$, strict since equality fails off $x=0$.",
          "Upper (comparison function): on $[0,1]$ the exponent satisfies $x^2\\le x$, so the integrand is dominated pointwise by $e^{x}$, a function we can integrate exactly.",
          "Therefore $G\\le\\int_0^1 e^{x}\\,dx=e-1$, strict because $x^2<x$ on $(0,1)$.",
          "The two comparisons pinch $G$: $\\boxed{\\tfrac{4}{3}<G<e-1}$."
        ]
      }
    ],
    "remark": "Insight: the lower bound comes from truncating the Maclaurin series (an honest inequality because the tail is positive), while the upper bound comes from the exponent comparison $x^2\\le x$ on the unit interval. Two different mechanisms, one clean sandwich. The numerical value $G\\approx1.46265$ sits roughly two-thirds of the way up the gap, comfortably away from the naive $e^{1/4}\\approx1.284$."
  },
  {
    "theme": "estimation",
    "themeLabel": "Estimation & Integral Inequalities",
    "title": "Jordan Meets Cauchy on the Sine Arch",
    "difficulty": 4,
    "task": "Prove that",
    "tags": [
      "cauchy-schwarz",
      "jordan inequality",
      "concavity",
      "trig integral"
    ],
    "statement": "Let $\\displaystyle S=\\int_0^{\\pi/2}\\sqrt{\\sin x}\\,dx$. Prove the two-sided estimate \\[ \\frac{\\pi}{3} \\;<\\; \\int_0^{\\pi/2}\\sqrt{\\sin x}\\,dx \\;<\\; \\sqrt{\\frac{\\pi}{2}}, \\] using a concavity bound on one side and the Cauchy–Schwarz integral inequality on the other.",
    "answer": "Proved: $\\dfrac{\\pi}{3}<S<\\sqrt{\\dfrac{\\pi}{2}}$ (numerically $S\\approx1.19814$).",
    "trap": "For the upper bound, applying Cauchy–Schwarz as $\\big(\\int\\sqrt{\\sin x}\\big)^2\\le\\int 1\\cdot\\int\\sin x$ but forgetting that the first factor $\\int_0^{\\pi/2}1\\,dx=\\tfrac{\\pi}{2}$, not $1$, yields the false bound $S\\le\\sqrt{1\\cdot 1}=1$ — which is impossible since $S\\approx1.198>1$. Mis-pairing the functions $f=\\sqrt[4]{\\sin x}$ and $g$ leads to the same wrong constant. The clean pairing is $f=\\sqrt{\\sin x}$, $g=1$.",
    "solutions": [
      {
        "name": "Cauchy–Schwarz upper, Jordan lower",
        "steps": [
          "Upper: by Cauchy–Schwarz, $S=\\int_0^{\\pi/2}\\sqrt{\\sin x}\\cdot 1\\,dx\\le\\Big(\\int_0^{\\pi/2}\\sin x\\,dx\\Big)^{1/2}\\Big(\\int_0^{\\pi/2}1\\,dx\\Big)^{1/2}.$",
          "Evaluate the two elementary integrals: $\\int_0^{\\pi/2}\\sin x\\,dx=1$ and $\\int_0^{\\pi/2}1\\,dx=\\tfrac{\\pi}{2}$, giving $S\\le\\sqrt{\\pi/2}$; strict since $\\sqrt{\\sin x}$ is not proportional to the constant $1$.",
          "Lower: Jordan's inequality gives $\\sin x\\ge\\tfrac{2x}{\\pi}$ on $[0,\\tfrac{\\pi}{2}]$, so $\\sqrt{\\sin x}\\ge\\sqrt{2x/\\pi}$.",
          "Integrate: $\\int_0^{\\pi/2}\\sqrt{2x/\\pi}\\,dx=\\sqrt{2/\\pi}\\cdot\\tfrac23\\big(\\tfrac{\\pi}{2}\\big)^{3/2}=\\tfrac{\\pi}{3}$, so $S>\\tfrac{\\pi}{3}$ (strict, as $\\sin x>\\tfrac{2x}{\\pi}$ on the interior).",
          "Therefore $\\boxed{\\tfrac{\\pi}{3}<S<\\sqrt{\\pi/2}}$."
        ]
      },
      {
        "name": "Concavity (chord) lower bound",
        "steps": [
          "On $[0,\\tfrac{\\pi}{2}]$, $\\sin x$ is concave, so its graph lies above the chord joining $(0,0)$ and $(\\tfrac{\\pi}{2},1)$, i.e. $\\sin x\\ge\\tfrac{2x}{\\pi}$ — the same Jordan bound, here justified by concavity.",
          "Thus $\\sqrt{\\sin x}\\ge\\sqrt{2x/\\pi}$ and integration yields $S\\ge\\tfrac{\\pi}{3}$ (strict away from the endpoints).",
          "Upper bound exactly as in the Cauchy–Schwarz solution gives $S<\\sqrt{\\pi/2}$.",
          "Hence $\\boxed{\\tfrac{\\pi}{3}<S<\\sqrt{\\pi/2}}$."
        ]
      }
    ],
    "remark": "Insight: square-root integrands beg for Cauchy–Schwarz (pair with $1$), while a concave integrand under a square root inherits a clean linear lower bound from its chord — Jordan's inequality is exactly that chord."
  },
  {
    "theme": "estimation",
    "themeLabel": "Estimation & Integral Inequalities",
    "title": "Taming the Tail of a Rational Family",
    "difficulty": 4,
    "task": "Prove that",
    "tags": [
      "parametric family",
      "denominator bounds",
      "monotone interval",
      "squeeze"
    ],
    "statement": "For each integer $n\\ge 1$ define \\[ I_n=\\int_0^1 \\frac{x^{n}}{1+x}\\,dx. \\] Prove that for every such $n$, \\[ \\frac{1}{2(n+1)} \\;<\\; I_n \\;<\\; \\frac{1}{n+1}, \\] and deduce that $I_n\\to 0$ as $n\\to\\infty$.",
    "answer": "Proved: $\\dfrac{1}{2(n+1)}<I_n<\\dfrac{1}{n+1}$ for all $n\\ge1$; hence $I_n\\to0$.",
    "trap": "Trying to integrate $\\tfrac{x^n}{1+x}$ exactly via the alternating expansion $\\sum(-1)^k x^{n+k}$ and losing control of the sign of the remainder, then mistakenly concluding a one-sided bound goes the wrong way. The whole point is to bound the harmless factor $\\tfrac{1}{1+x}$, not to evaluate.",
    "solutions": [
      {
        "name": "Bound the denominator factor",
        "steps": [
          "On $[0,1]$ the factor $\\tfrac{1}{1+x}$ is decreasing with $\\tfrac{1}{2}\\le\\tfrac{1}{1+x}\\le 1$, and strictly so on $(0,1)$.",
          "Multiply by $x^n\\ge0$: $\\tfrac12 x^n\\le\\tfrac{x^n}{1+x}\\le x^n$ on $[0,1]$.",
          "Integrate using $\\int_0^1 x^n\\,dx=\\tfrac{1}{n+1}$: $\\tfrac{1}{2(n+1)}\\le I_n\\le\\tfrac{1}{n+1}$.",
          "Strictness: the inequalities are strict on a set of positive measure, so $\\tfrac{1}{2(n+1)}<I_n<\\tfrac{1}{n+1}$.",
          "Squeeze gives $I_n\\to0$. $\\boxed{\\tfrac{1}{2(n+1)}<I_n<\\tfrac{1}{n+1}}$"
        ]
      },
      {
        "name": "Mean Value Theorem for integrals",
        "steps": [
          "Write $I_n=\\int_0^1 x^n\\cdot\\tfrac{1}{1+x}\\,dx$ with weight $x^n\\ge0$ and continuous $g(x)=\\tfrac1{1+x}$.",
          "The weighted integral MVT gives $c\\in(0,1)$ with $I_n=\\tfrac{1}{1+c}\\int_0^1 x^n\\,dx=\\tfrac{1}{(1+c)(n+1)}$.",
          "Since $0<c<1$ forces $\\tfrac12<\\tfrac{1}{1+c}<1$, we get $\\tfrac{1}{2(n+1)}<I_n<\\tfrac{1}{n+1}$.",
          "Hence $I_n\\to0$. $\\boxed{\\tfrac{1}{2(n+1)}<I_n<\\tfrac{1}{n+1}}$"
        ]
      }
    ],
    "remark": "Insight: a product $x^n\\cdot g(x)$ with $g$ continuous and $x^n$ a nonnegative weight is exactly the setup for the weighted Mean Value Theorem — it converts the bound into a single unknown point $c$ and the estimate becomes one line."
  },
  {
    "theme": "estimation",
    "themeLabel": "Estimation & Integral Inequalities",
    "title": "Chebyshev Sorts the Exponential",
    "difficulty": 4,
    "task": "Prove that",
    "tags": [
      "chebyshev integral inequality",
      "similarly ordered",
      "correlation",
      "monotone"
    ],
    "statement": "Let $f,g$ be continuous on $[0,1]$ and both nondecreasing. The Chebyshev integral inequality states $\\int_0^1 f g\\ge\\big(\\int_0^1 f\\big)\\big(\\int_0^1 g\\big)$. Use it to prove the concrete bound \\[ \\int_0^1 x\\,e^{x}\\,dx \\;\\ge\\; \\frac{e-1}{2}, \\] then determine the exact value of $\\int_0^1 x e^x\\,dx$ and confirm the inequality is strict.",
    "answer": "Proved: $\\displaystyle\\int_0^1 x e^x\\,dx=1>\\dfrac{e-1}{2}\\approx0.8591$. Strict.",
    "trap": "Assuming Chebyshev's inequality needs $f,g$ to be similarly monotone but applying it when one factor decreases. If $g$ were decreasing the inequality reverses, giving $\\int_0^1 f g\\le(\\int_0^1 f)(\\int_0^1 g)$; a reflex from the rearrangement-by-opposite-order picture is to write the bound as $\\int_0^1 x e^x\\le\\tfrac{e-1}{2}$. That flipped claim is false here: both $x$ and $e^x$ increase, so the inequality holds as stated, and indeed $1>\\tfrac{e-1}{2}$, not $\\le$.",
    "solutions": [
      {
        "name": "Chebyshev then exact evaluation",
        "steps": [
          "Both $f(x)=x$ and $g(x)=e^x$ are continuous and increasing on $[0,1]$, so Chebyshev gives $\\int_0^1 x e^x\\,dx\\ge\\big(\\int_0^1 x\\,dx\\big)\\big(\\int_0^1 e^x\\,dx\\big)$.",
          "The factors are $\\int_0^1 x\\,dx=\\tfrac12$ and $\\int_0^1 e^x\\,dx=e-1$, so the bound is $\\tfrac{e-1}{2}\\approx0.859$.",
          "Exact value: integrate by parts, $\\int_0^1 x e^x\\,dx=[x e^x]_0^1-\\int_0^1 e^x\\,dx=e-(e-1)=1$.",
          "Since $1>\\tfrac{e-1}{2}$, the inequality is strict. Equality in Chebyshev needs one factor constant, which fails here, confirming strictness. $\\boxed{\\int_0^1 x e^x\\,dx=1}$"
        ]
      },
      {
        "name": "Covariance / double-integral proof",
        "steps": [
          "Write $2\\big[\\int_0^1 fg-(\\int_0^1 f)(\\int_0^1 g)\\big]=\\int_0^1\\!\\!\\int_0^1\\big(f(x)-f(y)\\big)\\big(g(x)-g(y)\\big)\\,dx\\,dy$, an algebraic identity after expanding the product.",
          "For increasing $f,g$ the integrand $(f(x)-f(y))(g(x)-g(y))\\ge0$ everywhere ($x>y$ makes both factors $\\ge0$; $x<y$ makes both $\\le0$), so the double integral is $\\ge0$, proving Chebyshev.",
          "Apply to $f(x)=x,\\ g(x)=e^x$ to get $\\int_0^1 x e^x\\,dx\\ge\\tfrac{e-1}{2}$.",
          "Direct integration by parts gives the exact value $1$, and since the integrand of the double integral is strictly positive on a set of positive measure, the bound is strict. $\\boxed{\\int_0^1 x e^x\\,dx=1}$"
        ]
      }
    ],
    "remark": "Insight: Chebyshev's integral inequality is a continuous correlation statement: two co-monotone functions are positively correlated. The double-integral identity makes the sign condition transparent and shows precisely why opposite monotonicity flips it. Numerically the gap is $1-\\tfrac{e-1}{2}\\approx0.141$, the 'covariance' of $x$ and $e^x$ on $[0,1]$."
  },
  {
    "theme": "estimation",
    "themeLabel": "Estimation & Integral Inequalities",
    "title": "Where the Sine Integral Peaks",
    "difficulty": 5,
    "task": "Find the value",
    "tags": [
      "monotonicity of integral function",
      "sign analysis",
      "global maximum",
      "subinterval comparison"
    ],
    "statement": "Define $\\displaystyle F(x)=\\int_0^{x}\\frac{\\sin t}{t}\\,dt$ for $x>0$ (with the continuous value $\\tfrac{\\sin t}{t}\\to1$ at $t=0$). Find the value of $x>0$ at which $F$ attains its **global maximum**, and prove (without computing $F$ in closed form) that no later peak is higher.",
    "answer": "The global maximum is at $x=\\pi$, where $F(\\pi)=\\int_0^\\pi\\tfrac{\\sin t}{t}\\,dt\\approx1.8519$.",
    "trap": "Seeing that $F'(x)=\\tfrac{\\sin x}{x}=0$ at every multiple of $\\pi$ and declaring all of them equal candidates, or assuming the *largest* peak is at infinity (where $F\\to\\tfrac{\\pi}{2}\\approx1.5708$, which is actually *below* $F(\\pi)$). The peaks alternate up/down and shrink in net contribution; one must compare the signed areas of consecutive humps, and the very first positive hump $[0,\\pi]$ dominates.",
    "solutions": [
      {
        "name": "Sign of the derivative + shrinking humps",
        "steps": [
          "$F'(x)=\\tfrac{\\sin x}{x}$, positive on $(0,\\pi)$ and negative on $(\\pi,2\\pi)$, so $x=\\pi$ is a local max and $F$ increases up to $\\pi$ then decreases — hence $F(\\pi)\\ge F(x)$ for all $x\\le2\\pi$.",
          "Let $A_k=\\int_{k\\pi}^{(k+1)\\pi}\\tfrac{\\sin t}{t}\\,dt$ be the signed hump areas; their signs alternate starting positive, and $|A_{k}|$ is strictly decreasing because $\\tfrac1t$ is strictly decreasing while $|\\sin t|$ repeats with period $\\pi$.",
          "An alternating series with strictly decreasing terms has all partial sums after the first below the first term: $F(n\\pi)=A_0+A_1+\\cdots+A_{n-1}\\le A_0=F(\\pi)$ for every $n\\ge1$.",
          "Between grid points $F$ only moves monotonically toward the next $F(n\\pi)$, so no intermediate value exceeds $\\max\\{F((n{-}1)\\pi),F(n\\pi)\\}\\le F(\\pi)$. Thus the global max is at $\\boxed{x=\\pi}$."
        ]
      },
      {
        "name": "Pairing consecutive humps",
        "steps": [
          "For $x>\\pi$, write $F(x)-F(\\pi)=\\int_\\pi^x\\tfrac{\\sin t}{t}\\,dt$.",
          "Pair the negative hump $[(2k{-}1)\\pi,2k\\pi]$ with the following positive hump $[2k\\pi,(2k{+}1)\\pi]$: substituting $t\\mapsto t+\\pi$ in the positive hump turns its integrand into $\\tfrac{-\\sin t}{t+\\pi}$, and since $\\tfrac1t>\\tfrac{1}{t+\\pi}$ the negative hump has strictly larger magnitude. So each consecutive negative+positive pair sums to a strictly negative number.",
          "Hence for every $x>\\pi$ the tail $\\int_\\pi^x\\tfrac{\\sin t}{t}\\,dt$ is a sum of such negative pairs plus at most one leftover hump that only deepens the deficit, giving $\\int_\\pi^x\\tfrac{\\sin t}{t}\\,dt<0$, i.e. $F(x)<F(\\pi)$.",
          "Combined with $F$ strictly increasing on $(0,\\pi)$, the unique global maximum is $\\boxed{x=\\pi}$."
        ]
      }
    ],
    "remark": "Insight: the location of the max of an integral-defined function is a derivative-sign question, but proving *global* dominance needs a Leibniz-style alternating-area argument — the monotone envelope $1/t$ is exactly what forces the humps to shrink, so the first positive hump on $[0,\\pi]$ wins outright. Numerically $F(\\pi)=\\operatorname{Si}(\\pi)\\approx1.8519$, comfortably above the eventual plateau $F(\\infty)=\\tfrac{\\pi}{2}\\approx1.5708$."
  },
  {
    "theme": "estimation",
    "themeLabel": "Estimation & Integral Inequalities",
    "title": "Two Windows on the Same Curve",
    "difficulty": 4,
    "task": "Prove that",
    "tags": [
      "subinterval comparison",
      "AM-GM bound",
      "decreasing integrand",
      "area inequality"
    ],
    "statement": "Consider $\\displaystyle A=\\int_0^1\\frac{dx}{1+x^4}$ and $\\displaystyle B=\\int_1^2\\frac{dx}{1+x^4}$, the areas under the same curve over two adjacent unit windows. First prove the easy comparison $A>B$. Then prove the much stronger separation $A>3B$.",
    "answer": "Proved: $A>3B$. The clean engine is $A\\ge\\tfrac45$ together with $B\\le\\tfrac14$, and $\\tfrac45>3\\cdot\\tfrac14=\\tfrac34$. (Numerically $A\\approx0.8670$, $B\\approx0.2032$, so in fact $A/B\\approx4.27$.)",
    "trap": "Concluding $A>B$ merely because the integrand is decreasing and both windows have width $1$ is fine for $A>B$, but reaching for the factor $4$ that the raw numbers $A/B\\approx4.27$ seem to invite is a trap: every clean elementary bound on $B$ (e.g. $1+x^4\\ge x^4$ giving $B\\le\\tfrac{7}{24}$, or AM-GM giving $B\\le\\tfrac14$) is too loose to close $A>4B$, because that would force an upper bound $B<\\tfrac15$ while the true value is $B\\approx0.2032>\\tfrac15$. The honest, provable separation is $A>3B$. The skill is to quantify how much smaller the integrand is on the far window with a bound that is sharp enough to multiply by $3$ yet still beat the near-window estimate.",
    "solutions": [
      {
        "name": "AM-GM on the far window",
        "steps": [
          "Warm-up $A>B$: for each $x\\in[0,1]$ the shift $x\\mapsto x+1$ lands in $[1,2]$ and strictly increases the denominator, so $\\frac{1}{1+x^4}>\\frac{1}{1+(x+1)^4}$ pointwise; integrating over $[0,1]$ gives $A>\\int_0^1\\frac{dx}{1+(x+1)^4}=\\int_1^2\\frac{dx}{1+x^4}=B$.",
          "Lower bound for $A$: since $1-(1-x^4)(1+x^4)=x^8\\ge0$ and $1+x^4>0$, we have $\\frac{1}{1+x^4}\\ge 1-x^4$ on $[0,1]$. Hence $A\\ge\\int_0^1(1-x^4)\\,dx=1-\\tfrac15=\\tfrac45$.",
          "Upper bound for $B$: by AM-GM (equivalently $(x^2-1)^2\\ge0$), $1+x^4\\ge 2x^2$, so on $[1,2]$ the integrand satisfies $\\frac{1}{1+x^4}\\le\\frac{1}{2x^2}$. Therefore $B\\le\\int_1^2\\frac{dx}{2x^2}=\\tfrac12\\Big[-\\tfrac1x\\Big]_1^2=\\tfrac12\\big(1-\\tfrac12\\big)=\\tfrac14$.",
          "Combine: $A\\ge\\tfrac45=0.8$ while $3B\\le 3\\cdot\\tfrac14=\\tfrac34=0.75$. Since $\\tfrac45>\\tfrac34$, we conclude $A\\ge\\tfrac45>\\tfrac34\\ge 3B$, i.e. $\\boxed{A>3B}$.",
          "Remark on sharpness: the same $A\\ge\\tfrac45$ paired with the looser bound $B\\le\\tfrac{7}{24}$ would give only $A>B$, and no clean bound reaches $A>4B$; the AM-GM bound $B\\le\\tfrac14$ is exactly the extra sharpness that buys the factor $3$."
        ]
      },
      {
        "name": "Square-mean bound on the far window",
        "steps": [
          "Reuse the lower bound $A\\ge\\tfrac45$ from $\\frac{1}{1+x^4}\\ge 1-x^4$ on $[0,1]$.",
          "A different upper bound for $B$: from $(x^2-1)^2\\ge0$ we get $2(1+x^4)\\ge(1+x^2)^2$, i.e. $1+x^4\\ge\\tfrac12(1+x^2)^2$, so $\\frac{1}{1+x^4}\\le\\frac{2}{(1+x^2)^2}$ on $[1,2]$.",
          "Integrate the elementary antiderivative $\\frac{d}{dx}\\!\\left[\\frac{x}{1+x^2}+\\arctan x\\right]=\\frac{2}{(1+x^2)^2}$, giving $B\\le\\left[\\frac{x}{1+x^2}+\\arctan x\\right]_1^2=\\Big(\\tfrac25+\\arctan 2\\Big)-\\Big(\\tfrac12+\\tfrac{\\pi}{4}\\Big)$.",
          "Numerically this is $\\tfrac25-\\tfrac12+\\arctan2-\\tfrac{\\pi}{4}\\approx-0.1+1.1071-0.7854=0.2218<\\tfrac{4}{15}$. Hence $3B\\le 3\\cdot0.2218=0.6654<\\tfrac45\\le A$, so once more $\\boxed{A>3B}$.",
          "Both routes share the cheap lower bound on the near window and differ only in how they cap the far window; either cap is sharp enough for the factor $3$, neither is sharp enough for $4$."
        ]
      }
    ],
    "remark": "Insight: comparing the same curve over adjacent unit windows is governed by how fast the integrand decays, and the size of the provable gap is dictated by the sharpness of the far-window bound, not by the true ratio. AM-GM ($1+x^4\\ge2x^2$) and the square-mean estimate ($1+x^4\\ge\\tfrac12(1+x^2)^2$) both upper-bound the far window, while replacing $\\tfrac{1}{1+x^4}$ by its tangent-at-$0$ lower bound $1-x^4$ handles the near one. The numbers tempt you toward $A>4B$ (since $A/B\\approx4.27$), but every elementary cap on $B$ stalls above $\\tfrac15$, so $A>3B$ is the right, rigorously reachable statement."
  },
  {
    "theme": "estimation",
    "themeLabel": "Estimation & Integral Inequalities",
    "title": "The Arc-Length-Free Lemniscatic Bound",
    "difficulty": 4,
    "task": "Prove that",
    "tags": [
      "binomial bound",
      "square-root integrand",
      "two-sided",
      "elementary majorant"
    ],
    "statement": "Prove that the lemniscate-flavoured integral satisfies \\[ \\frac{1}{\\sqrt2} \\;<\\; \\int_0^1 \\frac{dx}{\\sqrt{1+x^4}} \\;<\\; 1, \\] and identify which inequality is strict by a strict pointwise comparison.",
    "answer": "Proved: $\\dfrac{1}{\\sqrt2}<\\displaystyle\\int_0^1\\frac{dx}{\\sqrt{1+x^4}}<1$ (numerically $\\approx0.9270$); both strict.",
    "trap": "Reaching for the binomial approximation $\\tfrac{1}{\\sqrt{1+x^4}}\\approx1-\\tfrac12 x^4$ and integrating it as an upper bound. But $1-\\tfrac12 x^4$ is a $lower$ bound for $\\tfrac{1}{\\sqrt{1+x^4}}$ (since $(1+x^4)^{-1/2}\\ge1-\\tfrac12x^4$), so using it as an upper bound flips the direction and 'proves' the false claim $\\int_0^1\\frac{dx}{\\sqrt{1+x^4}}<\\int_0^1(1-\\tfrac12x^4)\\,dx=\\tfrac{9}{10}=0.9$ — yet the true value is $\\approx0.9270>0.9$.",
    "solutions": [
      {
        "name": "Monotone envelope on $[0,1]$",
        "steps": [
          "The integrand $h(x)=(1+x^4)^{-1/2}$ is continuous and strictly decreasing on $[0,1]$, with $h(0)=1$ and $h(1)=\\tfrac{1}{\\sqrt2}$.",
          "Hence $\\tfrac{1}{\\sqrt2}<h(x)<1$ for $x\\in(0,1)$, strict on the open interval.",
          "Integrate over the unit-length interval: $\\tfrac{1}{\\sqrt2}=\\int_0^1\\tfrac{1}{\\sqrt2}\\,dx<\\int_0^1 h(x)\\,dx<\\int_0^1 1\\,dx=1$.",
          "Both inequalities are strict since $h$ is non-constant (a strict pointwise inequality on a set of positive measure integrates to a strict inequality). $\\boxed{\\tfrac{1}{\\sqrt2}<\\int_0^1\\frac{dx}{\\sqrt{1+x^4}}<1}$"
        ]
      },
      {
        "name": "Correct binomial direction",
        "steps": [
          "Upper bound: $1+x^4\\ge1$ on $[0,1]$ gives $h(x)=(1+x^4)^{-1/2}\\le1$, strict on $(0,1]$, so $\\int_0^1 h<\\int_0^1 1=1$.",
          "Lower bound — the honest use of the binomial inequality: for $t\\ge0$, $\\sqrt{1+t}\\le1+\\tfrac{t}{2}$, i.e. $(1+t)^{-1/2}\\ge\\tfrac{1}{1+t/2}$. This is the bound that points the right way; the linearised form $1-\\tfrac{t}{2}$ is a lower bound for $h$, never an upper one.",
          "Sharper and cleaner: on $[0,1]$ we have $x^4\\le1$, so $1+x^4\\le2$ and $\\sqrt{1+x^4}\\le\\sqrt2$, giving $h(x)\\ge\\tfrac{1}{\\sqrt2}$ pointwise.",
          "Integrate: $\\int_0^1 h\\ge\\int_0^1\\tfrac{1}{\\sqrt2}\\,dx=\\tfrac{1}{\\sqrt2}$, and the inequality is strict because equality $\\sqrt{1+x^4}=\\sqrt2$ holds only at the single point $x=1$. $\\boxed{\\tfrac{1}{\\sqrt2}<\\int_0^1\\frac{dx}{\\sqrt{1+x^4}}<1}$"
        ]
      }
    ],
    "remark": "Insight: for a monotone integrand on a unit interval the crude $m(b-a)\\le\\int\\le M(b-a)$ already pins the value between the two endpoint heights, and strictness comes free whenever the integrand is non-constant. The binomial inequality $\\sqrt{1+t}\\le1+t/2$ (equivalently $(1+t)^{-1/2}\\ge1-t/2$) must be applied with its correct direction, or it silently flips the bound and forces a false estimate $0.9$ below the true $\\approx0.9270$."
  },
  {
    "theme": "estimation",
    "themeLabel": "Estimation & Integral Inequalities",
    "title": "The Variance Forces a Constant",
    "difficulty": 4,
    "task": "Find all",
    "tags": [
      "cauchy-schwarz equality",
      "variance",
      "rigidity",
      "constraint"
    ],
    "statement": "Find all continuous functions $f:[0,1]\\to\\mathbb{R}$ satisfying simultaneously \\[ \\int_0^1 f(x)\\,dx=1 \\qquad\\text{and}\\qquad \\int_0^1 f(x)^2\\,dx=1. \\] Prove your classification is complete using an integral inequality.",
    "answer": "The only solution is $f\\equiv 1$.",
    "trap": "Believing many functions can satisfy both constraints because a prescribed mean and mean-square sound like two independent, loose conditions. In fact the Cauchy–Schwarz (equivalently, the variance) inequality is already saturated, and its equality case pins $f$ to a constant — overlooking that rigidity invents infinitely many phantom solutions.",
    "solutions": [
      {
        "name": "Variance is zero",
        "steps": [
          "Expand the squared deviation from the mean: $\\displaystyle\\int_0^1\\big(f(x)-1\\big)^2\\,dx=\\int_0^1 f^2-2\\int_0^1 f+\\int_0^1 1=1-2(1)+1=0.$",
          "The integrand $(f(x)-1)^2$ is continuous and nonnegative, and its integral over $[0,1]$ vanishes; a nonnegative continuous function with zero integral must be identically zero, so $(f(x)-1)^2\\equiv0$.",
          "Hence $f(x)=1$ for every $x\\in[0,1]$.",
          "Check: $\\int_0^1 1\\,dx=1$ and $\\int_0^1 1^2\\,dx=1$, so both constraints hold. $\\boxed{f\\equiv1}$"
        ]
      },
      {
        "name": "Cauchy–Schwarz equality case",
        "steps": [
          "Apply Cauchy–Schwarz to $f$ and the constant $1$: $\\displaystyle\\Big(\\int_0^1 f\\cdot 1\\Big)^2\\le\\Big(\\int_0^1 f^2\\Big)\\Big(\\int_0^1 1^2\\Big)$, i.e. $1\\le 1\\cdot1=1.$",
          "Equality holds, and Cauchy–Schwarz attains equality only when $f$ and $1$ are linearly dependent, forcing $f\\equiv c$ for some constant $c$.",
          "Then $\\int_0^1 c\\,dx=c=1$, so $c=1$; the second constraint $\\int_0^1 1^2=1$ is satisfied automatically.",
          "Therefore $\\boxed{f\\equiv1}$ is the unique solution."
        ]
      },
      {
        "name": "Pointwise rigidity from continuity",
        "steps": [
          "Suppose, for contradiction, that $f(x_0)\\ne 1$ at some $x_0\\in[0,1]$; then $(f(x_0)-1)^2=\\delta>0$.",
          "By continuity of $(f-1)^2$ there is a subinterval $J\\subseteq[0,1]$ of positive length $\\ell$ on which $(f(x)-1)^2>\\delta/2$, so $\\int_0^1(f-1)^2\\ge \\tfrac{\\delta}{2}\\,\\ell>0$.",
          "But $\\int_0^1(f-1)^2=\\int_0^1 f^2-2\\int_0^1 f+1=1-2+1=0$, a contradiction.",
          "Hence no such $x_0$ exists and $f(x)=1$ everywhere, recovering $\\boxed{f\\equiv1}$."
        ]
      }
    ],
    "remark": "Insight: two scalar moments that exactly touch the Cauchy–Schwarz boundary form a rigidity statement, not a loose system. Saturating the inequality collapses the entire space of continuous functions to a single point — the deviation $\\int_0^1(f-1)^2$ is both the gap in Cauchy–Schwarz and the variance, and a zero variance leaves no room to move."
  },
  {
    "theme": "estimation",
    "themeLabel": "Estimation & Integral Inequalities",
    "title": "The Mean Value Theorem That Wasn't",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "integral mvt",
      "continuity hypothesis",
      "counterexample",
      "intermediate value"
    ],
    "statement": "The Mean Value Theorem for integrals asserts: if $f$ is continuous on $[a,b]$, there exists $c\\in[a,b]$ with $\\int_a^b f=f(c)(b-a)$. Determine whether continuity can be dropped: exhibit a bounded, integrable $f$ on $[0,2]$ for which **no** $c\\in[0,2]$ satisfies $\\int_0^2 f=f(c)\\cdot 2$, and prove that for *continuous* $f$ such a $c$ always exists.",
    "answer": "Continuity is essential. The step function $f(x)=0$ on $[0,1)$, $f(x)=2$ on $[1,2]$ has mean value $1$ but never equals $1$, so no $c$ exists; for continuous $f$ the Intermediate Value Theorem guarantees $c$.",
    "trap": "Applying the integral MVT to a piecewise-defined or discontinuous $f$ 'because it's integrable.' The theorem's engine is the Intermediate Value Theorem, which needs continuity — a jump can straddle the average value without ever attaining it. Assuming integrability alone suffices is the precise failure.",
    "solutions": [
      {
        "name": "Explicit counterexample",
        "steps": [
          "Let $f(x)=0$ on $[0,1)$ and $f(x)=2$ on $[1,2]$; $f$ is bounded and Riemann integrable with $\\int_0^2 f=0\\cdot1+2\\cdot1=2$.",
          "The required average is $\\tfrac{1}{2}\\int_0^2 f=1$.",
          "But $f$ takes only the values $0$ and $2$, so $f(c)=1$ has no solution — no $c$ works.",
          "Thus continuity cannot be dropped. $\\boxed{\\text{No such }c\\text{ exists for the step function}}$"
        ]
      },
      {
        "name": "Why continuity rescues it",
        "steps": [
          "For continuous $f$ on $[a,b]$, let $m=\\min f$, $M=\\max f$ (attained, by the extreme value theorem).",
          "Then $m(b-a)\\le\\int_a^b f\\le M(b-a)$, so the average $\\mu=\\tfrac{1}{b-a}\\int_a^b f$ lies in $[m,M]$.",
          "By the Intermediate Value Theorem, $f$ attains the value $\\mu$ at some $c\\in[a,b]$, giving $\\int_a^b f=f(c)(b-a)$.",
          "The step function fails exactly because it skips its average value — no IVT. $\\boxed{\\text{Continuity}\\Rightarrow\\exists c;\\ \\text{drop it}\\Rightarrow\\text{may fail}}$"
        ]
      }
    ],
    "remark": "Insight: the integral MVT is the IVT in disguise — the average is squeezed between min and max, and continuity is precisely what lets the function pass through every intermediate height, including its own average."
  },
  {
    "theme": "estimation",
    "themeLabel": "Estimation & Integral Inequalities",
    "title": "Boxing the Cubic Radical",
    "difficulty": 5,
    "task": "Prove that",
    "tags": [
      "binomial inequality",
      "square-root majorant",
      "tight two-sided",
      "strictness"
    ],
    "statement": "Prove the sharp two-sided estimate \\[ 1 \\;<\\; \\int_0^1 \\sqrt{1+x^{3}}\\,dx \\;<\\; \\frac{9}{8}, \\] where the upper bound is obtained from a single application of the concavity inequality for the square root, and verify the upper bound cannot be replaced by $\\tfrac{17}{16}$.",
    "answer": "Proved: $1<\\displaystyle\\int_0^1\\sqrt{1+x^3}\\,dx<\\dfrac{9}{8}$ (numerically $\\approx1.11145$); since the value exceeds $\\tfrac{17}{16}=1.0625$, the bound $\\tfrac{9}{8}$ cannot be tightened to $\\tfrac{17}{16}$.",
    "trap": "Using $\\sqrt{1+x^3}\\le 1+x^3$ (true but wasteful, giving the loose $\\tfrac54$) or, worse, $\\sqrt{1+x^3}\\ge1+\\tfrac{x^3}{2}$ as an *upper* bound — the concavity inequality $\\sqrt{1+t}\\le1+\\tfrac{t}{2}$ runs the other way, and confusing its direction sinks the proof.",
    "solutions": [
      {
        "name": "Concavity majorant for the upper bound",
        "steps": [
          "Lower bound: $\\sqrt{1+x^3}>1$ for $x\\in(0,1]$ since $x^3>0$; integrating over $[0,1]$ gives the integral $>1$ (strict).",
          "Upper bound: the square root is concave, so $\\sqrt{1+t}\\le1+\\tfrac{t}{2}$ for $t\\ge0$ (tangent line at $t=0$). Put $t=x^3$: $\\sqrt{1+x^3}\\le1+\\tfrac{x^3}{2}$.",
          "Integrate: $\\int_0^1\\sqrt{1+x^3}\\,dx\\le\\int_0^1\\big(1+\\tfrac{x^3}{2}\\big)\\,dx=1+\\tfrac{1}{2}\\cdot\\tfrac14=1+\\tfrac18=\\tfrac98$, strict since the tangent bound is strict for $x\\in(0,1]$.",
          "Hence $1<\\int_0^1\\sqrt{1+x^3}\\,dx<\\tfrac98$. Numerically the integral $\\approx1.111>\\tfrac{17}{16}=1.0625$, so $\\tfrac{17}{16}$ is *too small* to be an upper bound. $\\boxed{1<\\int_0^1\\sqrt{1+x^3}\\,dx<\\tfrac98}$"
        ]
      },
      {
        "name": "Bernoulli/AM–GM phrasing",
        "steps": [
          "By AM–GM on $1$ and $1+x^3$: $\\sqrt{1\\cdot(1+x^3)}\\le\\tfrac{1+(1+x^3)}{2}=1+\\tfrac{x^3}{2}$, the same majorant.",
          "Integrate to get the upper bound $\\tfrac98$ exactly as before.",
          "For the lower bound, $1+x^3\\ge1$ gives $\\sqrt{1+x^3}\\ge1$, strict on $(0,1]$, so the integral exceeds $1$.",
          "Since the true value $\\approx1.111$ lies above $\\tfrac{17}{16}$, the claimed bound $\\tfrac98$ is not improvable to $\\tfrac{17}{16}$. $\\boxed{1<\\int_0^1\\sqrt{1+x^3}\\,dx<\\tfrac98}$"
        ]
      }
    ],
    "remark": "Insight: a single tangent-line (concavity) inequality $\\sqrt{1+t}\\le1+t/2$ turns an intractable radical into a polynomial you can integrate exactly — and the resulting $\\tfrac98$ is tight enough to be interesting yet provably not replaceable by $\\tfrac{17}{16}$."
  },
  {
    "theme": "periodicfloor",
    "themeLabel": "Periodic & Floor Integrands",
    "title": "Floor Minus Twice the Sawtooth",
    "difficulty": 3,
    "task": "Evaluate",
    "tags": [
      "floor",
      "fractional-part",
      "sawtooth",
      "definite-integral"
    ],
    "statement": "Evaluate \\[ \\int_0^{10} \\bigl(\\lfloor x\\rfloor - 2\\{x\\}\\bigr)\\,dx, \\] where $\\lfloor x\\rfloor$ is the greatest integer $\\le x$ and $\\{x\\}=x-\\lfloor x\\rfloor$ is the fractional part.",
    "answer": "$35$",
    "trap": "Replacing $\\lfloor x\\rfloor$ by the smooth curve $x$ while keeping $\\{x\\}$ honest, i.e. writing the value as $\\int_0^{10}x\\,dx-2\\int_0^{10}\\{x\\}\\,dx=50-10=40$. The step function $\\lfloor x\\rfloor$ jumps at every integer and is strictly below $x$ on each block; you must integrate it as the constant $k$ on $[k,k+1)$, not as the continuous line $y=x$. The clean value $40$ is exactly what this slip produces, and it is wrong.",
    "solutions": [
      {
        "name": "Block decomposition",
        "steps": [
          "On $[k,k+1)$ we have $\\lfloor x\\rfloor=k$ (a constant) and $\\{x\\}=x-k$, so $\\int_k^{k+1}\\lfloor x\\rfloor\\,dx=k$ and $\\int_k^{k+1}\\{x\\}\\,dx=\\int_0^1 t\\,dt=\\tfrac12$.",
          "Summing over $k=0,\\dots,9$: $\\int_0^{10}\\lfloor x\\rfloor\\,dx=\\sum_{k=0}^{9}k=45$ and $\\int_0^{10}\\{x\\}\\,dx=10\\cdot\\tfrac12=5$.",
          "Therefore the value is $45-2\\cdot5=\\boxed{35}$."
        ]
      },
      {
        "name": "Use the identity $\\lfloor x\\rfloor=x-\\{x\\}$",
        "steps": [
          "Write $\\lfloor x\\rfloor-2\\{x\\}=(x-\\{x\\})-2\\{x\\}=x-3\\{x\\}$.",
          "$\\int_0^{10}x\\,dx=50$ and $\\int_0^{10}\\{x\\}\\,dx=\\tfrac{10}{2}=5$ (the standard fact $\\int_0^n\\{x\\}\\,dx=\\tfrac n2$, since each unit block contributes $\\tfrac12$).",
          "So the integral is $50-3\\cdot5=\\boxed{35}$."
        ]
      }
    ],
    "remark": "Insight: the two clean facts $\\int_0^n\\lfloor x\\rfloor\\,dx=\\binom n2$ and $\\int_0^n\\{x\\}\\,dx=\\tfrac n2$ combine through $\\lfloor x\\rfloor+\\{x\\}=x$ — knowing any two gives the third for free. Here $\\binom{10}{2}=45$ and $\\tfrac{10}{2}=5$ deliver $35$ instantly."
  },
  {
    "theme": "periodicfloor",
    "themeLabel": "Periodic & Floor Integrands",
    "title": "Three and a Half Arches of Cosine",
    "difficulty": 3,
    "task": "Evaluate",
    "tags": [
      "absolute-value",
      "periodic",
      "cosine",
      "partial-period"
    ],
    "statement": "Evaluate \\[ \\int_0^{7\\pi/2} \\lvert\\cos x\\rvert\\,dx. \\]",
    "answer": "$7$",
    "trap": "Dropping the absolute value and computing $\\int_0^{7\\pi/2}\\cos x\\,dx=\\sin\\!\\left(\\tfrac{7\\pi}{2}\\right)=-1$. The graph of $|\\cos x|$ is a chain of identical positive arches of period $\\pi$; signed cancellation is exactly what the absolute value forbids, so a negative answer is impossible for an integral of a nonnegative function.",
    "solutions": [
      {
        "name": "Period count plus tail",
        "steps": [
          "$|\\cos x|$ has period $\\pi$, with $\\int_0^{\\pi}|\\cos x|\\,dx=2$ (each of the two half-arches over $[0,\\tfrac{\\pi}{2}]$ and $[\\tfrac{\\pi}{2},\\pi]$ contributes $1$).",
          "$\\tfrac{7\\pi}{2}=3\\pi+\\tfrac{\\pi}{2}$, giving $3$ full periods contributing $3\\cdot2=6$.",
          "On the last stretch $[3\\pi,\\tfrac{7\\pi}{2}]$, substitute $u=x-3\\pi$: since $|\\cos(u+3\\pi)|=|\\cos u|$, $\\int_{3\\pi}^{7\\pi/2}|\\cos x|\\,dx=\\int_0^{\\pi/2}|\\cos u|\\,du=\\int_0^{\\pi/2}\\cos u\\,du=1$.",
          "Total: $6+1=\\boxed{7}$."
        ]
      },
      {
        "name": "Half-arch tiling",
        "steps": [
          "Split $[0,\\tfrac{7\\pi}{2}]$ at every multiple of $\\tfrac{\\pi}{2}$. On each interval $[\\tfrac{k\\pi}{2},\\tfrac{(k+1)\\pi}{2}]$ the function $|\\cos x|$ sweeps monotonically from a zero to a peak (or from a peak back to a zero).",
          "By periodicity and the symmetry $|\\cos x|$, every such half-arch has the same area $\\int_0^{\\pi/2}\\cos u\\,du=\\big[\\sin u\\big]_0^{\\pi/2}=1$.",
          "From $0$ to $\\tfrac{7\\pi}{2}$ there are exactly $7$ intervals of length $\\tfrac{\\pi}{2}$, each of area $1$.",
          "Hence the integral equals $7\\cdot1=\\boxed{7}$."
        ]
      }
    ],
    "remark": "Insight: for $|\\cos|$ (and $|\\sin|$) the natural tile is the half-arch of width $\\tfrac{\\pi}{2}$ and area $1$, so $\\int_0^{m\\pi/2}|\\cos x|\\,dx=m$ for every nonnegative integer $m$ — counting half-arches turns the problem into pure arithmetic, and immediately exposes why the unsigned answer cannot be the negative number the trap produces."
  },
  {
    "theme": "periodicfloor",
    "themeLabel": "Periodic & Floor Integrands",
    "title": "Stepping Through Squares",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "floor",
      "quadratic-argument",
      "irrational-breakpoints",
      "closed-form"
    ],
    "statement": "Evaluate \\[ \\int_0^{3} \\lfloor x^2\\rfloor\\,dx \\] and give the answer in closed form.",
    "answer": "$27-\\displaystyle\\sum_{k=1}^{9}\\sqrt{k}\\;=\\;27-\\bigl(1+\\sqrt2+\\sqrt3+2+\\sqrt5+\\sqrt6+\\sqrt7+2\\sqrt2+3\\bigr)\\approx 7.694$",
    "trap": "Treating the breakpoints as occurring at integer $x$ (as one does for $\\lfloor x\\rfloor$) and computing $\\sum_{k=0}^{2}k\\cdot 1=0+1+2=3$. But $\\lfloor x^2\\rfloor$ jumps where $x^2$ crosses an integer, i.e. at the *irrational* abscissae $x=\\sqrt k$, so the constant pieces have unequal widths $\\sqrt{k+1}-\\sqrt k$, and the integral is far larger than $3$.",
    "solutions": [
      {
        "name": "Layer-cake (horizontal slicing)",
        "steps": [
          "For $x\\in[0,3]$ we have $x^2\\in[0,9]$, so $\\lfloor x^2\\rfloor=\\#\\{k\\ge1:k\\le x^2\\}=\\sum_{k=1}^{9}\\mathbf 1[x^2\\ge k]=\\sum_{k=1}^{9}\\mathbf 1[x\\ge\\sqrt k]$ (using $x\\ge0$).",
          "Integrate term by term: $\\int_0^3\\mathbf 1[x\\ge\\sqrt k]\\,dx=3-\\sqrt k$ for each $k=1,\\dots,9$, since $\\sqrt k\\le 3$.",
          "Summing, $\\displaystyle\\int_0^3\\lfloor x^2\\rfloor\\,dx=\\sum_{k=1}^{9}(3-\\sqrt k)=27-\\sum_{k=1}^{9}\\sqrt k\\approx 7.694.$"
        ]
      },
      {
        "name": "Direct step-width sum (Abel summation)",
        "steps": [
          "On $[\\sqrt k,\\sqrt{k+1})$ we have $\\lfloor x^2\\rfloor=k$ for $k=0,1,\\dots,8$, a constant piece of width $\\sqrt{k+1}-\\sqrt k$.",
          "Hence $\\displaystyle\\int_0^3\\lfloor x^2\\rfloor\\,dx=\\sum_{k=0}^{8}k\\,(\\sqrt{k+1}-\\sqrt k)$. Abel summation (summation by parts) gives $\\sum_{k=0}^{8}k(a_{k+1}-a_k)=8a_9-\\sum_{k=1}^{8}a_k$ with $a_k=\\sqrt k$, i.e. $8\\cdot 3-\\sum_{k=1}^{8}\\sqrt k=24-\\sum_{k=1}^{8}\\sqrt k$.",
          "Since $\\sqrt 9=3$, write $24-\\sum_{k=1}^{8}\\sqrt k=27-\\Bigl(\\sum_{k=1}^{8}\\sqrt k+3\\Bigr)=27-\\sum_{k=1}^{9}\\sqrt k$, matching Method 1."
        ]
      }
    ],
    "remark": "Insight: for any increasing $g$, $\\int_a^b\\lfloor g(x)\\rfloor\\,dx$ is best handled by the layer-cake identity $\\lfloor g\\rfloor=\\sum_{k\\ge1}\\mathbf 1[g\\ge k]$ (valid where $g\\ge0$), which converts the staircase into a sum of preimage lengths $g^{-1}$ — here the square roots $\\sqrt k$. The lesson is that the jump abscissae of $\\lfloor g(x)\\rfloor$ live at $g^{-1}(\\mathbb Z)$, not at integer $x$."
  },
  {
    "theme": "periodicfloor",
    "themeLabel": "Periodic & Floor Integrands",
    "title": "The Sign-Weighted Ramp",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "signum",
      "periodic",
      "sine",
      "odd-even"
    ],
    "statement": "Evaluate \\[ \\int_0^{2\\pi} x\\,\\operatorname{sgn}(\\sin x)\\,dx, \\] where $\\operatorname{sgn}(t)=1,0,-1$ according as $t>0,\\,t=0,\\,t<0$.",
    "answer": "$-\\pi^2$",
    "trap": "Arguing that $\\operatorname{sgn}(\\sin x)$ averages to $0$ over a full period and concluding the integral vanishes. The weight $x$ is *not* periodic, so the negative half $(\\pi,2\\pi)$ — where $x$ is large — outweighs the positive half $(0,\\pi)$; the cancellation is incomplete and the residue is $-\\pi^2$.",
    "solutions": [
      {
        "name": "Split by the sign of $\\sin x$",
        "steps": [
          "On $(0,\\pi)$ we have $\\sin x>0$ so $\\operatorname{sgn}(\\sin x)=1$; on $(\\pi,2\\pi)$ we have $\\sin x<0$ so $\\operatorname{sgn}(\\sin x)=-1$. The single zero at $x=\\pi$ contributes nothing.",
          "Hence the integral splits as $\\int_0^{\\pi}x\\,dx-\\int_{\\pi}^{2\\pi}x\\,dx$, with $\\int_0^{\\pi}x\\,dx=\\tfrac{\\pi^2}{2}$ and $\\int_{\\pi}^{2\\pi}x\\,dx=\\tfrac{(2\\pi)^2-\\pi^2}{2}=\\tfrac{3\\pi^2}{2}$.",
          "Therefore the integral equals $\\tfrac{\\pi^2}{2}-\\tfrac{3\\pi^2}{2}=\\boxed{-\\pi^2}.$"
        ]
      },
      {
        "name": "Symmetrize about the midpoint $x=\\pi$",
        "steps": [
          "Write the integrand weight as $x=\\pi+(x-\\pi)$, splitting it into a constant (mean) part and a varying part. The step $s(x)=\\operatorname{sgn}(\\sin x)$ has zero mean over the period.",
          "The mean part gives $\\pi\\int_0^{2\\pi}s(x)\\,dx=\\pi\\bigl(\\pi\\cdot 1+\\pi\\cdot(-1)\\bigr)=0$, since the zero-mean step kills any constant weight.",
          "For the varying part, the reflection $x\\mapsto 2\\pi-x$ about $x=\\pi$ sends $s\\mapsto -s$ while $(x-\\pi)\\mapsto-(x-\\pi)$, so $(x-\\pi)s(x)$ is even about $\\pi$ and the integral doubles: $\\int_0^{2\\pi}(x-\\pi)s(x)\\,dx=2\\int_0^{\\pi}(x-\\pi)\\,dx=2\\bigl(\\tfrac{\\pi^2}{2}-\\pi^2\\bigr)=-\\pi^2.$",
          "Adding the two parts: $0+(-\\pi^2)=\\boxed{-\\pi^2}.$"
        ]
      }
    ],
    "remark": "Insight: a periodic step times a non-periodic weight does not cancel. Decompose the weight into its mean part — which the zero-mean step annihilates — and its varying part, which is what produces the residue $-\\pi^2$. The intuition that \"$\\operatorname{sgn}(\\sin x)$ averages to $0$\" is only valid against a constant weight, never against the growing ramp $x$."
  },
  {
    "theme": "periodicfloor",
    "themeLabel": "Periodic & Floor Integrands",
    "title": "Floor Times Sawtooth",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "floor",
      "fractional-part",
      "product",
      "block-integration"
    ],
    "statement": "Evaluate \\[ \\int_0^{9} \\lfloor x\\rfloor\\,\\{x\\}\\,dx. \\]",
    "answer": "$18$",
    "trap": "Replacing $\\lfloor x\\rfloor\\{x\\}$ by $x\\{x\\}$ or by $\\lfloor x\\rfloor\\cdot x$, blurring the two discontinuous factors. On each block $\\lfloor x\\rfloor$ is a \\emph{constant} multiplier while $\\{x\\}$ runs from $0$ to $1$; mixing them with $x$ double-counts the integer part (giving $21$ or $222$ instead of $18$).",
    "solutions": [
      {
        "name": "Constant-times-ramp per block",
        "steps": [
          "On $[k,k+1)$ we have $\\lfloor x\\rfloor=k$ and $\\{x\\}=x-k=t$, so $\\int_k^{k+1}\\lfloor x\\rfloor\\{x\\}\\,dx=k\\int_0^1 t\\,dt=\\tfrac k2.$",
          "Summing over $k=0,1,\\dots,8$: $\\sum_{k=0}^{8}\\tfrac k2=\\tfrac12\\cdot\\tfrac{8\\cdot9}{2}=\\tfrac{36}{2}.$",
          "Hence the integral equals $\\boxed{18}.$"
        ]
      },
      {
        "name": "Closed form then evaluate",
        "steps": [
          "The same block computation gives the general formula $\\int_0^{N}\\lfloor x\\rfloor\\{x\\}\\,dx=\\tfrac12\\sum_{k=0}^{N-1}k=\\tfrac{N(N-1)}{4}$ for any positive integer $N.$",
          "With $N=9$: $\\tfrac{9\\cdot8}{4}=18.$",
          "So the value is $\\boxed{18}.$"
        ]
      }
    ],
    "remark": "Insight: when an integrand is (integer-part)$\\times$(fractional-part), freeze the integer part as a constant on each unit block; the fractional factor always integrates to the same $\\tfrac12$, reducing the whole problem to $\\tfrac12\\sum k$."
  },
  {
    "theme": "periodicfloor",
    "themeLabel": "Periodic & Floor Integrands",
    "title": "Doubling the Floor",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "floor",
      "doubling-identity",
      "step-function",
      "periodic"
    ],
    "statement": "Evaluate \\[ \\int_0^{6} \\bigl(\\lfloor 2x\\rfloor - 2\\lfloor x\\rfloor\\bigr)\\,dx. \\]",
    "answer": "$3$",
    "trap": "Assuming $\\lfloor 2x\\rfloor=2\\lfloor x\\rfloor$ (so the integrand is $0$ and the answer is $0$). In fact $\\lfloor 2x\\rfloor-2\\lfloor x\\rfloor=\\lfloor 2\\{x\\}\\rfloor$, which equals $1$ — not $0$ — on the right half of each unit block.",
    "solutions": [
      {
        "name": "Hermite/doubling identity",
        "steps": [
          "Using $2x=2\\lfloor x\\rfloor+2\\{x\\}$, we get $\\lfloor 2x\\rfloor-2\\lfloor x\\rfloor=\\lfloor 2\\{x\\}\\rfloor$, a $1$-periodic step that is $0$ on $[0,\\tfrac12)$ and $1$ on $[\\tfrac12,1)$.",
          "Its integral over one period is $\\tfrac12$, so over $[0,6]$ (six periods) it is $6\\cdot\\tfrac12.$",
          "Therefore the value is $\\boxed{3}.$"
        ]
      },
      {
        "name": "Direct staircase difference",
        "steps": [
          "$\\int_0^6\\lfloor 2x\\rfloor\\,dx$: substitute $u=2x$, giving $\\tfrac12\\int_0^{12}\\lfloor u\\rfloor\\,du=\\tfrac12\\sum_{k=0}^{11}k=\\tfrac12\\cdot66=33.$",
          "$\\int_0^6\\lfloor x\\rfloor\\,dx=\\sum_{k=0}^{5}k=15.$",
          "Thus $33-2\\cdot15=\\boxed{3}.$"
        ]
      }
    ],
    "remark": "Insight: $\\lfloor 2x\\rfloor-2\\lfloor x\\rfloor=\\lfloor 2\\{x\\}\\rfloor$ is the simplest case of Hermite's identity $\\lfloor nx\\rfloor=\\sum_{j=0}^{n-1}\\lfloor x+\\tfrac jn\\rfloor$; it measures exactly the half-block where doubling 'carries' an extra unit."
  },
  {
    "theme": "periodicfloor",
    "themeLabel": "Periodic & Floor Integrands",
    "title": "Hermite's Triple Floor",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "floor",
      "hermite-identity",
      "staircase",
      "exact-value"
    ],
    "statement": "Evaluate \\[ \\int_0^{4}\\Bigl(\\lfloor x\\rfloor+\\bigl\\lfloor x+\\tfrac13\\bigr\\rfloor+\\bigl\\lfloor x+\\tfrac23\\bigr\\rfloor\\Bigr)\\,dx. \\]",
    "answer": "$22$",
    "trap": "Treating each shifted floor as $\\lfloor x\\rfloor$ plus a constant, as if its jumps stayed at the integers. Reading the fractional shifts as harmless gives $3\\lfloor x\\rfloor$ and the value $3\\int_0^4\\lfloor x\\rfloor\\,dx=3(0+1+2+3)=18$; smoothing the floors away instead gives $\\int_0^4(3x+1)\\,dx=28$. Both miss that the shifts relocate the jumps to $x\\equiv\\tfrac23,\\tfrac13\\pmod 1$, so the three coarse staircases interleave into the finer staircase $\\lfloor 3x\\rfloor$, and the true value is $22$.",
    "solutions": [
      {
        "name": "Collapse via Hermite's identity",
        "steps": [
          "Hermite's identity (the case $n=3$ of $\\sum_{j=0}^{n-1}\\lfloor x+\\tfrac jn\\rfloor=\\lfloor nx\\rfloor$) gives $\\lfloor x\\rfloor+\\lfloor x+\\tfrac13\\rfloor+\\lfloor x+\\tfrac23\\rfloor=\\lfloor 3x\\rfloor$ for every real $x$.",
          "Substitute $u=3x$, $du=3\\,dx$: $\\int_0^4\\lfloor 3x\\rfloor\\,dx=\\tfrac13\\int_0^{12}\\lfloor u\\rfloor\\,du=\\tfrac13\\sum_{k=0}^{11}k=\\tfrac13\\cdot66.$",
          "Hence the value is $\\boxed{22}.$"
        ]
      },
      {
        "name": "Direct step count of $\\lfloor 3x\\rfloor$",
        "steps": [
          "After collapsing to $\\lfloor 3x\\rfloor$, note that on $[\\tfrac k3,\\tfrac{k+1}3)$ the integrand equals $k$ and the subinterval has length $\\tfrac13$, contributing $k\\cdot\\tfrac13$; for $x\\in[0,4)$ the index runs $k=0,1,\\dots,11$.",
          "Summing, $\\int_0^4\\lfloor 3x\\rfloor\\,dx=\\tfrac13\\sum_{k=0}^{11}k=\\tfrac13\\cdot66=22.$",
          "More generally $\\int_0^N\\lfloor 3x\\rfloor\\,dx=\\tfrac13\\sum_{k=0}^{3N-1}k=\\tfrac{N(3N-1)}{2}$, and at $N=4$ this is $\\tfrac{4\\cdot11}{2}=22.$ So the integral equals $\\boxed{22}.$"
        ]
      }
    ],
    "remark": "Insight: a sum of equally-shifted floors is a single dilated floor. Recognizing $\\sum_{j=0}^{n-1}\\lfloor x+\\tfrac jn\\rfloor=\\lfloor nx\\rfloor$ converts three coarse staircases, whose jumps interleave at the thirds, into one fine staircase $\\lfloor 3x\\rfloor$ that integrates in a single substitution. The same collapse turns any such shifted-floor integrand into the clean closed form $\\tfrac{N(nN-1)}{2}$ on $[0,N]$."
  },
  {
    "theme": "periodicfloor",
    "themeLabel": "Periodic & Floor Integrands",
    "title": "Sine Against a Rising Staircase",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "floor",
      "step-weight",
      "sine",
      "piecewise"
    ],
    "statement": "Evaluate \\[ \\int_0^{2\\pi}\\sin x\\,\\Bigl\\lfloor\\tfrac{2x}{\\pi}\\Bigr\\rfloor\\,dx. \\]",
    "answer": "$-4$",
    "trap": "Pulling $\\lfloor 2x/\\pi\\rfloor$ outside as an 'average' or replacing it by the smooth $2x/\\pi$. The floor is a piecewise-constant weight jumping at $x=\\tfrac\\pi2,\\pi,\\tfrac{3\\pi}{2}$; you must integrate $\\sin x$ separately against each constant level $0,1,2,3$.",
    "solutions": [
      {
        "name": "Level-by-level integration",
        "steps": [
          "$\\lfloor 2x/\\pi\\rfloor$ equals $0,1,2,3$ on $[0,\\tfrac\\pi2),[\\tfrac\\pi2,\\pi),[\\pi,\\tfrac{3\\pi}2),[\\tfrac{3\\pi}2,2\\pi)$ respectively.",
          "Compute $\\int\\sin x$ on each: $\\int_{\\pi/2}^{\\pi}\\sin x\\,dx=1$, $\\int_{\\pi}^{3\\pi/2}\\sin x\\,dx=-1$, $\\int_{3\\pi/2}^{2\\pi}\\sin x\\,dx=-1$ (the first level contributes $0$).",
          "Weighted sum: $1\\cdot1+2\\cdot(-1)+3\\cdot(-1)=1-2-3=\\boxed{-4}.$"
        ]
      },
      {
        "name": "Abel summation by the jumps",
        "steps": [
          "Write the staircase as $\\lfloor 2x/\\pi\\rfloor=\\sum_{m=1}^{3}\\mathbf 1[x\\ge \\tfrac{m\\pi}{2}]$, so the integral becomes $\\sum_{m=1}^{3}\\int_{m\\pi/2}^{2\\pi}\\sin x\\,dx=\\sum_{m=1}^3\\bigl(\\cos\\tfrac{m\\pi}{2}-\\cos2\\pi\\bigr).$",
          "The terms are $(0-1)+(-1-1)+(0-1)=-1-2-1.$",
          "Hence the value is $\\boxed{-4}.$"
        ]
      }
    ],
    "remark": "Insight: against a step weight, either integrate the smooth factor on each level, or use the layer-cake form $\\lfloor g\\rfloor=\\sum_m\\mathbf 1[g\\ge m]$ to turn the weight into a sum of one-sided integrals -- both routes avoid ever 'smoothing' the floor."
  },
  {
    "theme": "periodicfloor",
    "themeLabel": "Periodic & Floor Integrands",
    "title": "Fifteen Halves of Sine",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "absolute-value",
      "sine",
      "period-counting",
      "partial-period"
    ],
    "statement": "Evaluate \\[ \\int_0^{15\\pi/2}\\lvert\\sin x\\rvert\\,dx. \\]",
    "answer": "$15$",
    "trap": "Computing $\\tfrac{15\\pi/2}{\\pi}=7.5$ and rounding to $7$ or $8$ full periods (giving $14$ or $16$). The leftover half-period is real and contributes exactly $1$, so miscounting the partial last arch is the error.",
    "solutions": [
      {
        "name": "Full periods plus exact tail",
        "steps": [
          "$|\\sin x|$ has period $\\pi$ with $\\int_0^{\\pi}|\\sin x|\\,dx=2$, and $\\tfrac{15\\pi}{2}=7\\pi+\\tfrac\\pi2$ gives $7$ complete periods: $7\\cdot2=14$.",
          "On $[7\\pi,\\tfrac{15\\pi}{2}]$ set $u=x-7\\pi$: $\\int_0^{\\pi/2}|\\sin u|\\,du=\\int_0^{\\pi/2}\\sin u\\,du=1.$",
          "Total: $14+1=\\boxed{15}.$"
        ]
      },
      {
        "name": "Half-arch tiling",
        "steps": [
          "Partition $[0,\\tfrac{15\\pi}{2}]$ at multiples of $\\tfrac\\pi2$; each half-arch of $|\\sin x|$ has area $\\int_0^{\\pi/2}\\sin u\\,du=1.$",
          "The length $\\tfrac{15\\pi}{2}$ is exactly $15$ such half-arches.",
          "So the integral equals $15\\cdot1=\\boxed{15}.$"
        ]
      }
    ],
    "remark": "Insight: write $\\int_0^{m\\pi/2}|\\sin x|\\,dx=m$ by counting half-arches — it handles 'awkward' upper limits like $\\tfrac{15\\pi}{2}$ with no risk of botching the final partial period."
  },
  {
    "theme": "periodicfloor",
    "themeLabel": "Periodic & Floor Integrands",
    "title": "The Reciprocal Sawtooth and Euler",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "fractional-part",
      "improper-integral",
      "euler-mascheroni",
      "series"
    ],
    "statement": "Show that the improper integral converges and evaluate \\[ \\int_0^{1}\\Bigl\\{\\tfrac1x\\Bigr\\}\\,dx, \\] expressing the answer in terms of the Euler–Mascheroni constant $\\gamma=\\lim_{n\\to\\infty}\\bigl(\\sum_{k=1}^n\\tfrac1k-\\ln n\\bigr)$.",
    "answer": "$1-\\gamma$",
    "trap": "Treating $\\{1/x\\}$ as if it averaged to $\\tfrac12$ near $x=0$ (where it oscillates infinitely fast) and guessing $\\tfrac12$. The oscillations do *not* average to $\\tfrac12$: the substitution $u=1/x$ weights large fractional parts more, pulling the value down to $1-\\gamma\\approx0.4228$.",
    "solutions": [
      {
        "name": "Substitute and sum over unit blocks",
        "steps": [
          "Let $u=1/x$, $dx=-u^{-2}\\,du$; then $\\int_0^1\\{1/x\\}\\,dx=\\int_1^{\\infty}\\frac{\\{u\\}}{u^2}\\,du=\\sum_{n=1}^{\\infty}\\int_n^{n+1}\\frac{u-n}{u^2}\\,du.$",
          "Each block integrates to $\\bigl[\\ln u+\\tfrac nu\\bigr]_n^{n+1}=\\ln\\tfrac{n+1}{n}-\\tfrac1{n+1}$ (positive and $O(n^{-2})$, so the sum converges).",
          "Partial sums telescope: $\\sum_{n=1}^{N}\\ln\\tfrac{n+1}{n}=\\ln(N+1)$ and $\\sum_{n=1}^{N}\\tfrac1{n+1}=H_{N+1}-1$, giving $\\ln(N+1)-H_{N+1}+1\\to 1-\\gamma.$",
          "Hence $\\int_0^1\\{1/x\\}\\,dx=\\boxed{1-\\gamma}.$"
        ]
      },
      {
        "name": "Via $\\{u\\}=u-\\lfloor u\\rfloor$ and Abel summation",
        "steps": [
          "From $\\int_1^{\\infty}\\frac{\\{u\\}}{u^2}\\,du=\\int_1^{\\infty}\\frac{u-\\lfloor u\\rfloor}{u^2}\\,du$, write it as $\\lim_{N\\to\\infty}\\Bigl(\\int_1^{N}\\tfrac1u\\,du-\\int_1^{N}\\tfrac{\\lfloor u\\rfloor}{u^2}\\,du\\Bigr).$",
          "The first piece is $\\ln N$. For the second, $\\int_1^N\\tfrac{\\lfloor u\\rfloor}{u^2}\\,du=\\sum_{k=1}^{N-1}k\\bigl(\\tfrac1k-\\tfrac1{k+1}\\bigr)=\\sum_{k=1}^{N-1}\\tfrac1{k+1}=H_N-1.$",
          "So the integral is $\\lim_{N}\\bigl(\\ln N-(H_N-1)\\bigr)=1-\\lim_N(H_N-\\ln N)=1-\\gamma=\\boxed{1-\\gamma}.$"
        ]
      }
    ],
    "remark": "Insight: the fractional part is the bridge between integrals and the harmonic series — $\\int_1^\\infty\\{u\\}u^{-2}\\,du$ is one of the cleanest integral representations of $1-\\gamma$, and the whole evaluation is just $\\lim(H_N-\\ln N)$ in disguise."
  },
  {
    "theme": "famous",
    "themeLabel": "Famous Definite Integrals",
    "title": "The Twin Logarithms",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "log-sine",
      "symmetry",
      "fourier-series",
      "beta-function"
    ],
    "statement": "Evaluate the symmetric log-product integral \\[ I=\\int_{0}^{\\pi/2}\\ln(\\sin x)\\,\\ln(\\cos x)\\,dx. \\]",
    "answer": "$\\displaystyle I=\\frac{\\pi}{2}\\ln^{2}2-\\frac{\\pi^{3}}{48}$.",
    "trap": "Writing $\\int\\ln\\sin\\,\\ln\\cos=\\big(\\int\\ln\\sin\\big)\\big(\\int\\ln\\cos\\big)$ and concluding $I=\\big(-\\tfrac{\\pi}{2}\\ln2\\big)^2=\\tfrac{\\pi^2}{4}\\ln^2 2$. The integral of a product is not the product of integrals, so this drops the genuine cross-correlation term $-\\pi^3/48$ entirely.",
    "solutions": [
      {
        "name": "Differentiating the Beta function",
        "steps": [
          "Recall $\\int_0^{\\pi/2}\\sin^{a}x\\cos^{b}x\\,dx=\\tfrac12 B\\!\\big(\\tfrac{a+1}{2},\\tfrac{b+1}{2}\\big)$.",
          "Then $I=\\partial_a\\partial_b$ of this expression evaluated at $a=b=0$, since $\\partial_a\\sin^a x=\\sin^a x\\ln\\sin x$.",
          "Let $g(a,b)=\\tfrac12B(\\tfrac{a+1}{2},\\tfrac{b+1}{2})$. Using $\\ln B=\\ln\\Gamma(\\tfrac{a+1}{2})+\\ln\\Gamma(\\tfrac{b+1}{2})-\\ln\\Gamma(\\tfrac{a+b+2}{2})$, differentiate via digamma $\\psi$.",
          "At $a=b=0$: $g(0,0)=\\tfrac{\\pi}{2}$, and the mixed derivative gives $g\\cdot\\tfrac14\\big[(\\psi(\\tfrac12)-\\psi(1))^2-\\psi'(1)\\big]$.",
          "With $\\psi(\\tfrac12)-\\psi(1)=-2\\ln2$ and $\\psi'(1)=\\pi^2/6$, obtain $I=\\tfrac{\\pi}{2}\\cdot\\tfrac14\\big[4\\ln^2 2-\\tfrac{\\pi^2}{6}\\big]=\\boxed{\\tfrac{\\pi}{2}\\ln^2 2-\\tfrac{\\pi^3}{48}}$."
        ]
      },
      {
        "name": "Fourier series of the log",
        "steps": [
          "Use $\\ln(2\\sin x)=-\\sum_{k\\ge1}\\tfrac{\\cos 2kx}{k}$ and $\\ln(2\\cos x)=\\sum_{k\\ge1}\\tfrac{(-1)^{k-1}\\cos 2kx}{k}$ on $(0,\\tfrac{\\pi}{2})$.",
          "Write $\\ln\\sin x=\\ln(2\\sin x)-\\ln2$, similarly for cos, and expand the product into four pieces.",
          "Use orthogonality $\\int_0^{\\pi/2}\\cos 2kx\\cos 2mx\\,dx=\\tfrac{\\pi}{4}\\delta_{km}$ (for $k,m\\ge1$) to collapse the double sum.",
          "The cross term yields $-\\tfrac{\\pi}{4}\\sum_k\\tfrac{(-1)^{k-1}}{k^2}=-\\tfrac{\\pi}{4}\\cdot\\tfrac{\\pi^2}{12}$; the $\\ln^2 2$ and single-sum terms assemble the rest.",
          "Summing all contributions gives $I=\\boxed{\\tfrac{\\pi}{2}\\ln^2 2-\\tfrac{\\pi^3}{48}}$."
        ]
      },
      {
        "name": "Reflection symmetry reduction",
        "steps": [
          "By $x\\mapsto\\tfrac{\\pi}{2}-x$, $I$ is symmetric in $\\sin\\leftrightarrow\\cos$, and $\\int_0^{\\pi/2}\\ln^2\\sin x\\,dx=\\int_0^{\\pi/2}\\ln^2\\cos x\\,dx=:J$.",
          "Expand $\\int_0^{\\pi/2}\\ln^2(\\sin x\\cos x)\\,dx=2J+2I$, while $\\sin x\\cos x=\\tfrac12\\sin 2x$.",
          "Compute $\\int_0^{\\pi/2}\\ln^2(\\tfrac12\\sin 2x)\\,dx=\\tfrac{\\pi}{2}\\ln^2 2-2\\ln2\\!\\int\\ln\\sin2x+\\int\\ln^2\\sin2x$; substitute $u=2x$.",
          "Known values $\\int_0^{\\pi/2}\\ln\\sin=-\\tfrac{\\pi}{2}\\ln2$ and $J=\\tfrac{\\pi}{2}\\ln^2 2+\\tfrac{\\pi^3}{24}$ feed in.",
          "Solving $2I=\\big(\\tfrac{\\pi}{2}\\ln^2 2+\\tfrac{\\pi}{2}\\ln^2 2+\\ldots\\big)-2J$ yields $I=\\boxed{\\tfrac{\\pi}{2}\\ln^2 2-\\tfrac{\\pi^3}{48}}$."
        ]
      }
    ],
    "remark": "Insight: the seductive 'product of means' answer $\\tfrac{\\pi^2}{4}\\ln^2 2$ overshoots because $\\ln\\sin$ and $\\ln\\cos$ are negatively correlated on $(0,\\tfrac{\\pi}{2})$; their Fourier covariance is exactly $-\\pi^3/48$. Beta-function differentiation is the cleanest engine for any $\\int\\sin^a\\cos^b$ moment."
  },
  {
    "theme": "famous",
    "themeLabel": "Famous Definite Integrals",
    "title": "The King's Half-Angle",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "king-property",
      "weierstrass",
      "reflection"
    ],
    "statement": "Evaluate \\[ I=\\int_{0}^{\\pi}\\frac{x}{1+\\sin x}\\,dx. \\]",
    "answer": "$I=\\pi$.",
    "trap": "Applying the king property $x\\mapsto\\pi-x$ and writing $2I=\\pi\\int_0^\\pi\\frac{dx}{1+\\sin(\\pi-x)}$, then forgetting that $\\sin(\\pi-x)=\\sin x$ already and instead 'simplifying' $1+\\sin x$ to a constant. The reflection is legitimate, but one must still evaluate $K=\\int_0^\\pi\\frac{dx}{1+\\sin x}$ honestly. The integrand $1/(1+\\sin x)$ is perfectly continuous on $[0,\\pi]$ (since $\\sin x\\ge 0$ keeps the denominator $\\ge 1$), so $K$ is a proper integral. The real pitfall is the substitution $t=\\tan(x/2)$: as $x\\to\\pi^-$ the pole $t\\to+\\infty$ must be tracked as an improper upper limit. Truncating it or stopping the antiderivative at the apparent jump of $\\tan x-\\sec x$ near $x=\\pi/2$ silently halves the answer, giving $K=1$ and the wrong $I=\\tfrac{\\pi}{2}$.",
    "solutions": [
      {
        "name": "King property then half-angle",
        "steps": [
          "With $x\\mapsto\\pi-x$, since $\\sin(\\pi-x)=\\sin x$, we get $I=\\int_0^\\pi\\frac{\\pi-x}{1+\\sin x}\\,dx=\\pi K-I$ where $K=\\int_0^\\pi\\frac{dx}{1+\\sin x}$.",
          "Hence $2I=\\pi K$, so $I=\\tfrac{\\pi}{2}K$.",
          "Compute $K$ with $t=\\tan(x/2)$: the identity $1+\\sin x=\\tfrac{(1+t)^2}{1+t^2}$ is exact, and $dx=\\tfrac{2\\,dt}{1+t^2}$. As $x$ runs over $[0,\\pi)$ the variable $t$ runs over $[0,\\infty)$, so $K=\\int_0^\\infty\\tfrac{2\\,dt}{(1+t)^2}=\\Big[-\\tfrac{2}{1+t}\\Big]_0^\\infty=2$.",
          "Therefore $I=\\tfrac{\\pi}{2}\\cdot 2=\\boxed{\\pi}$."
        ]
      },
      {
        "name": "Direct antiderivative via complementary angle",
        "steps": [
          "Multiply by the conjugate: $\\tfrac{1}{1+\\sin x}=\\tfrac{1-\\sin x}{\\cos^2 x}=\\sec^2 x-\\sec x\\tan x$, whose antiderivative is $\\tan x-\\sec x$.",
          "This antiderivative is itself $\\tan x-\\sec x=-\\tfrac{1-\\sin x}{\\cos x}=-\\tan\\!\\big(\\tfrac{\\pi}{4}-\\tfrac{x}{2}\\big)$, a single continuous expression on all of $[0,\\pi]$ — the apparent blow-up of $\\tan x$ and $\\sec x$ at $x=\\tfrac{\\pi}{2}$ cancels.",
          "Evaluating this continuous form: $-\\tan\\!\\big(\\tfrac{\\pi}{4}-\\tfrac{x}{2}\\big)$ runs from $-1$ at $x=0$ to $+1$ at $x=\\pi$, so $K=1-(-1)=2$.",
          "With $2I=\\pi K$ from the king step, $I=\\tfrac{\\pi}{2}\\cdot 2=\\boxed{\\pi}$."
        ]
      }
    ],
    "remark": "Insight: the linear numerator $x$ is annihilated by the reflection $x\\mapsto\\pi-x$, converting a weighted integral into $\\tfrac{\\pi}{2}$ times the unweighted total mass $K=\\int_0^\\pi\\frac{dx}{1+\\sin x}=2$. The clean answer $\\pi$ is exactly the midpoint $\\tfrac{\\pi}{2}$ scaled by that mass — a hallmark of king-property symmetry on a symmetric weight."
  },
  {
    "theme": "famous",
    "themeLabel": "Famous Definite Integrals",
    "title": "Putnam's Arctangent Bridge",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "feynman-trick",
      "arctan",
      "log-integral",
      "substitution"
    ],
    "statement": "Evaluate the celebrated integral \\[ I=\\int_{0}^{1}\\frac{\\ln(1+x)}{1+x^{2}}\\,dx. \\]",
    "answer": "$\\displaystyle I=\\frac{\\pi}{8}\\ln 2$.",
    "trap": "Substituting $x=\\tan\\theta$ to reach $I=\\int_{0}^{\\pi/4}\\ln(1+\\tan\\theta)\\,d\\theta$ and then claiming the integrand 'averages to zero' over $[0,\\tfrac{\\pi}{4}]$ because $\\ln(1+\\tan\\theta)$ dips negative near $\\theta=0$. It does not vanish: the correct reflection $\\theta\\mapsto\\tfrac{\\pi}{4}-\\theta$ uses $1+\\tan(\\tfrac{\\pi}{4}-\\theta)=\\tfrac{2}{1+\\tan\\theta}$, which injects a $\\ln 2$ constant rather than a cancellation, so the true value is $\\tfrac{\\pi}{8}\\ln2\\approx 0.2722$, not $0$.",
    "solutions": [
      {
        "name": "Tangent reflection",
        "steps": [
          "Let $x=\\tan\\theta$, $dx=\\sec^2\\theta\\,d\\theta$; as $x:0\\to1$, $\\theta:0\\to\\tfrac{\\pi}{4}$ and $\\tfrac{1}{1+x^2}=\\cos^2\\theta$, so $I=\\int_0^{\\pi/4}\\ln(1+\\tan\\theta)\\,d\\theta$.",
          "Reflect via $\\theta\\mapsto\\tfrac{\\pi}{4}-\\theta$. Since $\\tan(\\tfrac{\\pi}{4}-\\theta)=\\tfrac{1-\\tan\\theta}{1+\\tan\\theta}$, we get $1+\\tan(\\tfrac{\\pi}{4}-\\theta)=\\tfrac{2}{1+\\tan\\theta}$, hence $I=\\int_0^{\\pi/4}\\big[\\ln 2-\\ln(1+\\tan\\theta)\\big]\\,d\\theta$.",
          "Add the two expressions for $I$: $2I=\\int_0^{\\pi/4}\\ln 2\\,d\\theta=\\tfrac{\\pi}{4}\\ln 2$.",
          "Therefore $I=\\boxed{\\tfrac{\\pi}{8}\\ln 2}$."
        ]
      },
      {
        "name": "Feynman parameter",
        "steps": [
          "Introduce a parameter: $J(t)=\\int_0^1\\frac{\\ln(1+tx)}{1+x^2}\\,dx$, so $J(0)=0$ and the target is $I=J(1)$.",
          "Differentiate under the integral sign: $J'(t)=\\int_0^1\\frac{x}{(1+tx)(1+x^2)}\\,dx$. The partial-fraction split $\\frac{x}{(1+tx)(1+x^2)}=\\frac{1}{1+t^2}\\Big[\\frac{x+t}{1+x^2}-\\frac{t}{1+tx}\\Big]$ uses $\\int_0^1\\frac{x}{1+x^2}dx=\\tfrac{\\ln2}{2}$, $\\int_0^1\\frac{dx}{1+x^2}=\\tfrac{\\pi}{4}$, and $\\int_0^1\\frac{dx}{1+tx}=\\tfrac{\\ln(1+t)}{t}$.",
          "These give the (correct) closed form $J'(t)=\\dfrac{1}{1+t^2}\\Big(\\dfrac{\\pi}{4}\\,t+\\dfrac{\\ln 2}{2}-\\ln(1+t)\\Big)$.",
          "Integrate from $0$ to $1$: $I=\\int_0^1 J'(t)\\,dt=\\tfrac{\\pi}{4}\\!\\int_0^1\\tfrac{t\\,dt}{1+t^2}+\\tfrac{\\ln2}{2}\\!\\int_0^1\\tfrac{dt}{1+t^2}-\\int_0^1\\tfrac{\\ln(1+t)}{1+t^2}dt=\\tfrac{\\pi}{8}\\ln2+\\tfrac{\\pi}{8}\\ln2-I.$",
          "The last term is $I$ itself, so $2I=\\tfrac{\\pi}{4}\\ln 2$, giving $I=\\boxed{\\tfrac{\\pi}{8}\\ln 2}$. The self-reference is exactly the algebraic shadow of the reflection trick."
        ]
      }
    ],
    "remark": "Insight: the tangent substitution turns the algebraic reflection $1+\\tan(\\tfrac{\\pi}{4}-\\theta)=\\tfrac{2}{1+\\tan\\theta}$ into the additive identity $\\ln(1+\\tan\\theta)+\\ln(1+\\tan(\\tfrac{\\pi}{4}-\\theta))=\\ln 2$. Averaging that constant over the quarter-arc $[0,\\tfrac{\\pi}{4}]$ gives $\\tfrac{1}{2}\\cdot\\tfrac{\\pi}{4}\\ln 2=\\tfrac{\\pi}{8}\\ln 2$. The Feynman route reaches the same place because $\\int_0^1\\tfrac{\\ln(1+t)}{1+t^2}dt$ reappears as $-J'$'s tail, closing the loop on $I$."
  },
  {
    "theme": "famous",
    "themeLabel": "Famous Definite Integrals",
    "title": "Frullani's Arctangent Gate",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "frullani",
      "arctan",
      "improper-integral",
      "convergence"
    ],
    "statement": "For real $a>b>0$, evaluate \\[ I(a,b)=\\int_{0}^{\\infty}\\frac{\\arctan(ax)-\\arctan(bx)}{x}\\,dx. \\]",
    "answer": "$\\displaystyle I(a,b)=\\frac{\\pi}{2}\\ln\\frac{a}{b}$.",
    "trap": "Quoting Frullani as $(f(0)-f(\\infty))\\ln\\frac{b}{a}$ with $f(x)=\\arctan x$ but plugging $f(\\infty)=0$, as if $\\arctan$ decayed like $1/x$. That gives $(0-0)\\ln\\frac{b}{a}=0$. In truth $f(0)=0$ and $f(\\infty)=\\tfrac{\\pi}{2}$, so $(f(0)-f(\\infty))\\ln\\frac{b}{a}=-\\tfrac{\\pi}{2}\\ln\\frac{b}{a}=+\\tfrac{\\pi}{2}\\ln\\frac{a}{b}$. Using the wrong endpoint value collapses the answer to $0$; flipping the sign of the log turns it negative.",
    "solutions": [
      {
        "name": "Frullani's theorem",
        "steps": [
          "Frullani: if $f$ has finite limits $f(0)$ and $f(\\infty)$, then $\\int_0^\\infty\\frac{f(ax)-f(bx)}{x}\\,dx=(f(0)-f(\\infty))\\ln\\frac{b}{a}$.",
          "Take $f(x)=\\arctan x$, so $f(0)=0$ and $f(\\infty)=\\tfrac{\\pi}{2}$; both limits are finite, so the hypothesis holds.",
          "Convergence check: near $0$ the integrand tends to $a-b$ (finite, since $\\arctan(ax)-\\arctan(bx)\\sim(a-b)x$); near $\\infty$, $\\arctan(ax)=\\tfrac{\\pi}{2}-\\tfrac{1}{ax}+O(x^{-3})$ gives integrand $\\sim\\tfrac{(1/b-1/a)}{x^{2}}$, which is integrable. So $I$ converges.",
          "Apply the theorem: $I=(0-\\tfrac{\\pi}{2})\\ln\\tfrac{b}{a}=\\tfrac{\\pi}{2}\\ln\\tfrac{a}{b}$.",
          "Thus $I=\\boxed{\\tfrac{\\pi}{2}\\ln\\tfrac{a}{b}}$."
        ]
      },
      {
        "name": "Differentiate under the integral",
        "steps": [
          "Fix $b$ and view $I$ as a function of $a$: $\\partial_a I=\\int_0^\\infty\\frac{1}{x}\\cdot\\frac{x}{1+a^2x^2}\\,dx=\\int_0^\\infty\\frac{dx}{1+a^2x^2}=\\tfrac{\\pi}{2a}$.",
          "Integrate in $a$: $I(a,b)=\\tfrac{\\pi}{2}\\ln a + C(b)$.",
          "The integrand vanishes identically when $a=b$, so $I(b,b)=0$, forcing $C(b)=-\\tfrac{\\pi}{2}\\ln b$.",
          "Hence $I=\\tfrac{\\pi}{2}\\ln a-\\tfrac{\\pi}{2}\\ln b=\\boxed{\\tfrac{\\pi}{2}\\ln\\tfrac{a}{b}}$."
        ]
      },
      {
        "name": "Double-integral / Fubini",
        "steps": [
          "Write $\\arctan(ax)-\\arctan(bx)=\\int_b^a\\frac{x}{1+t^2x^2}\\,dt$.",
          "Then $I=\\int_0^\\infty\\frac{1}{x}\\int_b^a\\frac{x}{1+t^2x^2}\\,dt\\,dx=\\int_b^a\\!\\int_0^\\infty\\frac{dx}{1+t^2x^2}\\,dt$ by Tonelli (the integrand is positive on $[b,a]\\times[0,\\infty)$).",
          "The inner integral is $\\int_0^\\infty\\frac{dx}{1+t^2x^2}=\\tfrac{\\pi}{2t}$, so $I=\\int_b^a\\frac{\\pi}{2t}\\,dt=\\tfrac{\\pi}{2}\\ln\\tfrac{a}{b}$.",
          "Therefore $I=\\boxed{\\tfrac{\\pi}{2}\\ln\\tfrac{a}{b}}$."
        ]
      }
    ],
    "remark": "Insight: the Frullani 'gap' here is the full jump $\\tfrac{\\pi}{2}$ between $\\arctan$'s two horizontal asymptotes, scaled by the log of the frequency ratio. The differentiation method reveals why each scale $t$ between $b$ and $a$ contributes the same $\\tfrac{\\pi}{2}\\cdot\\tfrac{dt}{t}$, so the total is $\\tfrac{\\pi}{2}\\ln\\tfrac{a}{b}$."
  },
  {
    "theme": "famous",
    "themeLabel": "Famous Definite Integrals",
    "title": "Cotangent's Hidden Log",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "log-sine",
      "integration-by-parts",
      "fourier-series",
      "cot"
    ],
    "statement": "Evaluate \\[ I=\\int_{0}^{\\pi/2}x\\cot x\\,dx. \\]",
    "answer": "$\\displaystyle I=\\frac{\\pi}{2}\\ln 2$.",
    "trap": "Expanding $\\cot x=\\tfrac1x-\\tfrac{x}{3}-\\tfrac{x^3}{45}-\\dots$, so that $x\\cot x=1-\\tfrac{x^2}{3}-\\dots$, then integrating only the first term or two: $\\int_0^{\\pi/2}1\\,dx=\\tfrac{\\pi}{2}$, and claiming the rest is a 'small correction.' This gives $\\tfrac{\\pi}{2}\\approx1.571$ (or $\\tfrac{\\pi}{2}-\\tfrac{\\pi^3}{72}\\approx1.140$ with one more term), both far from the true $I=\\tfrac{\\pi}{2}\\ln 2\\approx1.089$. The Laurent tail does not give small corrections: it resums to a full logarithm, and truncating it destroys the entire $\\ln 2$ structure. (Note: $x\\cot x\\to 1$ as $x\\to 0$, so the integrand is bounded and there is no singularity to fear.)",
    "solutions": [
      {
        "name": "Integration by parts into the log-sine integral",
        "steps": [
          "Since $\\cot x\\,dx=d(\\ln\\sin x)$, integrate by parts with $u=x$, $dv=\\cot x\\,dx$: $I=\\big[x\\ln\\sin x\\big]_0^{\\pi/2}-\\int_0^{\\pi/2}\\ln\\sin x\\,dx$.",
          "Boundary term: at $x=\\tfrac{\\pi}{2}$, $\\tfrac{\\pi}{2}\\ln\\sin\\tfrac{\\pi}{2}=\\tfrac{\\pi}{2}\\ln 1=0$; as $x\\to 0^+$, $\\sin x\\sim x$ so $x\\ln\\sin x\\sim x\\ln x\\to 0$. Both endpoints vanish.",
          "Thus $I=-\\int_0^{\\pi/2}\\ln\\sin x\\,dx$, and the classical log-sine value is $\\int_0^{\\pi/2}\\ln\\sin x\\,dx=-\\tfrac{\\pi}{2}\\ln 2$.",
          "Hence $I=-\\big(-\\tfrac{\\pi}{2}\\ln 2\\big)=\\boxed{\\tfrac{\\pi}{2}\\ln 2}$."
        ]
      },
      {
        "name": "Fourier series for the log-sine integral",
        "steps": [
          "By the integration-by-parts step above, $I=-\\int_0^{\\pi/2}\\ln\\sin x\\,dx$, so it suffices to evaluate $J=\\int_0^{\\pi/2}\\ln\\sin x\\,dx$.",
          "Use the Fourier expansion $\\ln(2\\sin x)=-\\sum_{k\\ge 1}\\tfrac{\\cos 2kx}{k}$, valid on $(0,\\pi)$. Then $\\ln\\sin x=\\ln(2\\sin x)-\\ln 2=-\\ln 2-\\sum_{k\\ge 1}\\tfrac{\\cos 2kx}{k}$.",
          "Integrate term by term: $J=-\\tfrac{\\pi}{2}\\ln 2-\\sum_{k\\ge 1}\\tfrac1k\\int_0^{\\pi/2}\\cos 2kx\\,dx$. Each integral is $\\int_0^{\\pi/2}\\cos 2kx\\,dx=\\big[\\tfrac{\\sin 2kx}{2k}\\big]_0^{\\pi/2}=\\tfrac{\\sin k\\pi}{2k}=0$.",
          "So the sum vanishes, $J=-\\tfrac{\\pi}{2}\\ln 2$, and therefore $I=-J=\\boxed{\\tfrac{\\pi}{2}\\ln 2}$."
        ]
      }
    ],
    "remark": "Insight: $x\\cot x$ looks transcendental, but a single integration by parts converts it into the most famous log-sine integral $\\int_0^{\\pi/2}\\ln\\sin x\\,dx=-\\tfrac{\\pi}{2}\\ln 2$. The boundary term dies precisely because $x\\ln\\sin x\\to 0$ at both ends — the convergence check the trap ignores when it truncates the Laurent series instead of resumming it into a logarithm."
  },
  {
    "theme": "famous",
    "themeLabel": "Famous Definite Integrals",
    "title": "The Basel Companion",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "log-product",
      "dilogarithm",
      "series",
      "basel"
    ],
    "statement": "Evaluate \\[ I=\\int_{0}^{1}\\ln x\\,\\ln(1-x)\\,dx. \\]",
    "answer": "$\\displaystyle I=2-\\frac{\\pi^{2}}{6}$.",
    "trap": "Splitting as $\\big(\\int_0^1\\ln x\\,dx\\big)\\big(\\int_0^1\\ln(1-x)\\,dx\\big)=(-1)(-1)=1$. The product-of-integrals fallacy: the integral of a product is not the product of the integrals, so this gives $1$ and misses the $1-\\tfrac{\\pi^2}{6}$ correction. The $-\\tfrac{\\pi^2}{6}$ is the Basel-sum signature of the genuine correlation between the two logs.",
    "solutions": [
      {
        "name": "Series expansion of one logarithm",
        "steps": [
          "On $(0,1)$ expand $\\ln(1-x)=-\\sum_{n\\ge1}\\tfrac{x^n}{n}$, so $I=-\\sum_{n\\ge1}\\tfrac1n\\int_0^1 x^n\\ln x\\,dx$ (the series converges uniformly enough on compact subsets to justify swapping).",
          "Use $\\int_0^1 x^n\\ln x\\,dx=-\\tfrac{1}{(n+1)^2}$ (differentiate $\\int_0^1 x^n\\,dx=\\tfrac1{n+1}$ in $n$).",
          "Then $I=\\sum_{n\\ge1}\\tfrac{1}{n(n+1)^2}$. Partial fractions give $\\tfrac{1}{n(n+1)^2}=\\tfrac1n-\\tfrac{1}{n+1}-\\tfrac{1}{(n+1)^2}$.",
          "The first two terms telescope: $\\sum_{n\\ge1}\\big(\\tfrac1n-\\tfrac1{n+1}\\big)=1$. For the third, $\\sum_{n\\ge1}\\tfrac{1}{(n+1)^2}=\\zeta(2)-1=\\tfrac{\\pi^2}{6}-1$.",
          "So $I=1-\\big(\\tfrac{\\pi^2}{6}-1\\big)=\\boxed{2-\\tfrac{\\pi^2}{6}}$."
        ]
      },
      {
        "name": "Beta-function double derivative",
        "steps": [
          "Introduce $B(a,b)=\\int_0^1 x^{a-1}(1-x)^{b-1}dx$. Differentiating under the integral, $\\partial_a\\partial_b B(a,b)=\\int_0^1 x^{a-1}(1-x)^{b-1}\\ln x\\,\\ln(1-x)\\,dx$, so $I=\\partial_a\\partial_b B\\big|_{a=b=1}$.",
          "From $B(a,b)=\\tfrac{\\Gamma(a)\\Gamma(b)}{\\Gamma(a+b)}$, taking logs and differentiating with the digamma $\\psi$ gives $\\partial_a\\partial_b B=B\\big[(\\psi(a)-\\psi(a+b))(\\psi(b)-\\psi(a+b))-\\psi'(a+b)\\big]$.",
          "Evaluate at $a=b=1$: $B(1,1)=1$, $\\psi(1)-\\psi(2)=-1$, and $\\psi'(2)=\\tfrac{\\pi^2}{6}-1$.",
          "Hence $I=(-1)(-1)-\\big(\\tfrac{\\pi^2}{6}-1\\big)=2-\\tfrac{\\pi^2}{6}=\\boxed{2-\\tfrac{\\pi^2}{6}}$."
        ]
      },
      {
        "name": "Integration by parts to a known integral",
        "steps": [
          "Integrate by parts with $u=\\ln(1-x)$ and $dv=\\ln x\\,dx$, so $v=x\\ln x-x$. The boundary term $\\big[(x\\ln x-x)\\ln(1-x)\\big]_0^1$ vanishes at both ends (at $0$ the factor $x\\ln x-x\\to0$; at $1$ it is $(0-1)\\ln(1-x)\\sim-(x-1)\\cdot 0$ after pairing $du$).",
          "This leaves $I=-\\int_0^1(x\\ln x-x)\\cdot\\dfrac{-1}{1-x}\\,dx=\\int_0^1\\dfrac{x\\ln x}{1-x}\\,dx-\\int_0^1\\dfrac{x}{1-x}\\,dx$, where the two pieces are combined so the apparent singularity at $x=1$ cancels.",
          "Write $\\dfrac{x}{1-x}=\\dfrac{1}{1-x}-1$ and $\\dfrac{x\\ln x}{1-x}=\\dfrac{\\ln x}{1-x}-\\ln x$; the $\\tfrac{1}{1-x}$ pieces cancel against the boundary contribution, and $\\int_0^1\\ln x\\,dx=-1$ supplies one finite term.",
          "The remaining core is $\\int_0^1\\dfrac{x\\ln x}{1-x}\\,dx=-\\sum_{n\\ge0}\\int_0^1 x^{n+1}(-\\ln x)\\,dx\\cdot(-1)=1-\\tfrac{\\pi^2}{6}$ (expand $\\tfrac{1}{1-x}=\\sum_{n\\ge0}x^n$).",
          "Combining the finite pieces gives $I=\\boxed{2-\\tfrac{\\pi^2}{6}}$, agreeing with the other methods."
        ]
      }
    ],
    "remark": "Insight: this is the Basel problem in disguise. The series $\\sum_{n\\ge1}\\tfrac{1}{n(n+1)^2}$ unpacks into a telescoping $1$ and the tail $\\zeta(2)-1$ of the Basel sum. The naive product answer $1$ is exactly the telescoping part; the soul of the integral is the missing $\\tfrac{\\pi^2}{6}-1$, the fingerprint of $\\zeta(2)$."
  },
  {
    "theme": "famous",
    "themeLabel": "Famous Definite Integrals",
    "title": "The Weighted Arithmetic-Geometric Log",
    "difficulty": 5,
    "task": "Prove that",
    "tags": [
      "log-sine",
      "feynman-trick",
      "jensen",
      "amgm"
    ],
    "statement": "For positive reals $a,b$, prove that \\[ \\int_{0}^{\\pi/2}\\ln\\!\\big(a\\sin^{2}x+b\\cos^{2}x\\big)\\,dx=\\pi\\ln\\frac{\\sqrt{a}+\\sqrt{b}}{2}. \\]",
    "answer": "proved",
    "trap": "Using the convexity bound $\\ln(a\\sin^2 x+b\\cos^2 x)\\ge \\sin^2x\\ln a+\\cos^2x\\ln b$ (Jensen/weighted AM-GM) and integrating to claim equality $\\int_0^{\\pi/2}(\\sin^2x\\ln a+\\cos^2x\\ln b)\\,dx=\\tfrac{\\pi}{2}\\cdot\\tfrac{\\ln a+\\ln b}{2}=\\tfrac{\\pi}{4}\\ln(ab)$. That is only a one-sided bound and is strict whenever $a\\ne b$; the true value involves $\\sqrt a+\\sqrt b$, the arithmetic mean of the amplitudes $\\sqrt a,\\sqrt b$, not the average of the logs. The two agree only at $a=b$, where both equal $\\tfrac{\\pi}{2}\\ln a$.",
    "solutions": [
      {
        "name": "Differentiate in a parameter (Feynman)",
        "steps": [
          "Fix $b>0$ and set $F(a)=\\int_0^{\\pi/2}\\ln(a\\sin^2x+b\\cos^2x)\\,dx$. Differentiating under the integral sign, $F'(a)=\\int_0^{\\pi/2}\\dfrac{\\sin^2x}{a\\sin^2x+b\\cos^2x}\\,dx$.",
          "Substitute $t=\\tan x$ (so $dx=\\frac{dt}{1+t^2}$ and $\\sin^2x=\\frac{t^2}{1+t^2}$): $F'(a)=\\displaystyle\\int_0^{\\infty}\\frac{t^2}{(a t^2+b)(1+t^2)}\\,dt$.",
          "Partial fractions $\\dfrac{t^2}{(at^2+b)(1+t^2)}=\\dfrac{1}{a-b}\\!\\left(\\dfrac{1}{1+t^2}-\\dfrac{b/a}{t^2+b/a}\\right)$ give $F'(a)=\\dfrac{1}{a-b}\\Big(\\tfrac{\\pi}{2}-\\sqrt{\\tfrac{b}{a}}\\cdot\\tfrac{\\pi}{2}\\Big)=\\dfrac{\\pi}{2}\\,\\dfrac{1-\\sqrt{b/a}}{a-b}$.",
          "Since $a-b=(\\sqrt a-\\sqrt b)(\\sqrt a+\\sqrt b)$ and $1-\\sqrt{b/a}=\\frac{\\sqrt a-\\sqrt b}{\\sqrt a}$, this collapses to $F'(a)=\\dfrac{\\pi}{2}\\cdot\\dfrac{1}{\\sqrt a\\,(\\sqrt a+\\sqrt b)}$ (the apparent singularity at $a=b$ cancels).",
          "Integrate in $a$: with $s=\\sqrt a$, $ds=\\frac{da}{2\\sqrt a}$, so $\\displaystyle\\int\\frac{da}{2\\sqrt a\\,(\\sqrt a+\\sqrt b)}=\\int\\frac{ds}{s+\\sqrt b}=\\ln(\\sqrt a+\\sqrt b)$. Hence $F(a)=\\pi\\ln(\\sqrt a+\\sqrt b)+C$.",
          "Fix the constant at $a=b$: there $F(b)=\\int_0^{\\pi/2}\\ln b\\,dx=\\tfrac{\\pi}{2}\\ln b$, while the formula gives $\\pi\\ln(2\\sqrt b)+C$. Equating, $\\tfrac{\\pi}{2}\\ln b=\\pi\\ln2+\\tfrac{\\pi}{2}\\ln b+C$, so $C=-\\pi\\ln2$. Therefore $F(a)=\\pi\\ln\\dfrac{\\sqrt a+\\sqrt b}{2}$. $\\blacksquare$"
        ]
      },
      {
        "name": "Reduce to a known cosine-log integral",
        "steps": [
          "Use the double-angle form $a\\sin^2x+b\\cos^2x=\\tfrac{a+b}{2}-\\tfrac{a-b}{2}\\cos2x=\\tfrac{a+b}{2}\\big(1-r\\cos2x\\big)$ with $r=\\tfrac{a-b}{a+b}$, where $|r|<1$ since $a,b>0$.",
          "Then $F=\\tfrac{\\pi}{2}\\ln\\tfrac{a+b}{2}+\\displaystyle\\int_0^{\\pi/2}\\ln(1-r\\cos2x)\\,dx$. The substitution $u=2x$ turns the integral into $\\tfrac12\\displaystyle\\int_0^{\\pi}\\ln(1-r\\cos u)\\,du$.",
          "Invoke the classical evaluation $\\displaystyle\\int_0^{\\pi}\\ln(1-r\\cos u)\\,du=\\pi\\ln\\dfrac{1+\\sqrt{1-r^2}}{2}$ for $|r|<1$ (provable, e.g., by differentiating in $r$ or by Fourier expansion of $\\ln(1-r\\cos u)$).",
          "Here $1-r^2=1-\\tfrac{(a-b)^2}{(a+b)^2}=\\tfrac{4ab}{(a+b)^2}$, so $\\sqrt{1-r^2}=\\tfrac{2\\sqrt{ab}}{a+b}$ and the bracket becomes $\\tfrac{a+b+2\\sqrt{ab}}{2(a+b)}=\\tfrac{(\\sqrt a+\\sqrt b)^2}{2(a+b)}$.",
          "Assemble: $F=\\tfrac{\\pi}{2}\\ln\\tfrac{a+b}{2}+\\tfrac{\\pi}{2}\\ln\\tfrac{(\\sqrt a+\\sqrt b)^2}{2(a+b)}=\\tfrac{\\pi}{2}\\ln\\tfrac{(\\sqrt a+\\sqrt b)^2}{4}=\\pi\\ln\\tfrac{\\sqrt a+\\sqrt b}{2}$. $\\blacksquare$"
        ]
      }
    ],
    "remark": "Insight: the answer is $\\pi$ times the log of the arithmetic mean of the amplitudes $\\sqrt a,\\sqrt b$ — a Jensen-formula fingerprint (for the harmonic oscillator $a\\sin^2+b\\cos^2$, the geometric mean over the period of $\\ln$ is the log of the average amplitude). The naive convexity bound $\\tfrac{\\pi}{4}\\ln(ab)$ underestimates and meets the truth only at $a=b$, where both collapse to $\\tfrac{\\pi}{2}\\ln a$. A clean sanity check: at $a=b$ the value is $\\tfrac{\\pi}{2}\\ln a$, and the formula is symmetric in $a,b$ as the integrand demands."
  },
  {
    "theme": "famous",
    "themeLabel": "Famous Definite Integrals",
    "title": "The Alternating Dilogarithm",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "dilogarithm",
      "series",
      "log-integral",
      "eta-function"
    ],
    "statement": "Evaluate \\[ I=\\int_{0}^{1}\\ln x\\,\\ln(1+x)\\,dx. \\]",
    "answer": "$\\displaystyle I=2-2\\ln 2-\\frac{\\pi^{2}}{12}$.",
    "trap": "Reusing the sibling result $\\int_0^1\\ln x\\,\\ln(1-x)\\,dx=2-\\tfrac{\\pi^2}{6}$ and merely flipping a sign to guess $2+\\tfrac{\\pi^2}{6}$ or $2-\\tfrac{\\pi^2}{12}$, dropping the $-2\\ln2$ term. The $\\ln(1+x)$ series is alternating, so it produces the Dirichlet eta value $\\eta(2)=\\tfrac{\\pi^2}{12}$ together with a genuinely new $-2\\ln2$ contribution coming from the alternating harmonic part $\\sum(-1)^{n-1}\\!\\left(\\tfrac1n-\\tfrac1{n+1}\\right)=2\\ln2-1$, which the $(1-x)$ case lacks. Numerically $I=-0.20876\\dots$, while $2+\\tfrac{\\pi^2}{6}\\approx3.645$ and $2-\\tfrac{\\pi^2}{12}\\approx1.178$ — both wildly off.",
    "solutions": [
      {
        "name": "Alternating series",
        "steps": [
          "Expand $\\ln(1+x)=\\sum_{n\\ge1}\\tfrac{(-1)^{n-1}}{n}x^n$ (valid on $[0,1)$, with the boundary integrable), so $I=\\sum_{n\\ge1}\\tfrac{(-1)^{n-1}}{n}\\int_0^1 x^n\\ln x\\,dx$.",
          "Using $\\int_0^1 x^n\\ln x\\,dx=-\\tfrac{1}{(n+1)^2}$, this gives $I=-\\sum_{n\\ge1}\\tfrac{(-1)^{n-1}}{n(n+1)^2}$.",
          "Partial fractions: $\\tfrac{1}{n(n+1)^2}=\\tfrac1n-\\tfrac1{n+1}-\\tfrac{1}{(n+1)^2}$. Attaching $(-1)^{n-1}$ and summing termwise (the series converge absolutely after grouping) splits $I$ into two pieces.",
          "The telescoping-type alternating part is $\\sum_{n\\ge1}(-1)^{n-1}\\!\\left(\\tfrac1n-\\tfrac1{n+1}\\right)=2\\ln2-1$, and the square part is $\\sum_{n\\ge1}\\tfrac{(-1)^{n-1}}{(n+1)^2}=1-\\eta(2)=1-\\tfrac{\\pi^2}{12}$.",
          "Hence $-\\sum\\tfrac{(-1)^{n-1}}{n(n+1)^2}=-\\big[(2\\ln2-1)-(1-\\tfrac{\\pi^2}{12})\\big]=2-2\\ln2-\\tfrac{\\pi^2}{12}$, so $I=\\boxed{\\,2-2\\ln2-\\tfrac{\\pi^2}{12}\\,}$."
        ]
      },
      {
        "name": "Integration by parts to a dilog",
        "steps": [
          "Take $u=\\ln(1+x)$, $dv=\\ln x\\,dx$, so $v=x\\ln x-x$. Then $I=\\big[\\ln(1+x)(x\\ln x-x)\\big]_0^1-\\int_0^1\\frac{x\\ln x-x}{1+x}\\,dx$. The boundary term is $\\ln2\\cdot(0-1)-0=-\\ln2$ (at $x=0$ everything vanishes).",
          "So $I=-\\ln2-\\int_0^1\\frac{x\\ln x}{1+x}\\,dx+\\int_0^1\\frac{x}{1+x}\\,dx$.",
          "Write $\\tfrac{x}{1+x}=1-\\tfrac{1}{1+x}$. Then $\\int_0^1\\frac{x}{1+x}\\,dx=1-\\ln2$, and $\\int_0^1\\frac{x\\ln x}{1+x}\\,dx=\\int_0^1\\ln x\\,dx-\\int_0^1\\frac{\\ln x}{1+x}\\,dx=-1-\\left(-\\tfrac{\\pi^2}{12}\\right)=-1+\\tfrac{\\pi^2}{12}$, using the classical $\\int_0^1\\frac{\\ln x}{1+x}\\,dx=-\\tfrac{\\pi^2}{12}$.",
          "Assemble: $I=-\\ln2-\\left(-1+\\tfrac{\\pi^2}{12}\\right)+(1-\\ln2)=2-2\\ln2-\\tfrac{\\pi^2}{12}$.",
          "Hence $I=\\boxed{\\,2-2\\ln2-\\tfrac{\\pi^2}{12}\\,}$."
        ]
      }
    ],
    "remark": "Insight: swapping $1-x\\to1+x$ turns the harmonic $\\zeta(2)=\\tfrac{\\pi^2}{6}$ into the alternating $\\eta(2)=\\tfrac{\\pi^2}{12}$ and injects a $\\ln2$ from the alternating harmonic series. Concretely $\\int_0^1\\ln x\\,\\ln(1+x)\\,dx-\\int_0^1\\ln x\\,\\ln(1-x)\\,dx=-2\\ln2+\\tfrac{\\pi^2}{12}$ — exactly the eta-vs-zeta gap plus the new boundary $\\ln2$."
  },
  {
    "theme": "famous",
    "themeLabel": "Famous Definite Integrals",
    "title": "Frullani Without an Endpoint",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "frullani",
      "cosine-integral",
      "oscillatory",
      "cesaro-limit"
    ],
    "statement": "Evaluate the oscillatory Frullani integral \\[ I=\\int_{0}^{\\infty}\\frac{\\cos(7x)-\\cos(3x)}{x}\\,dx. \\]",
    "answer": "$\\displaystyle I=\\ln\\frac{3}{7}=-\\ln\\frac{7}{3}$.",
    "trap": "Refusing to apply Frullani because $f(x)=\\cos x$ has no limit at $\\infty$, OR applying it with a literal value $f(\\infty)$ and getting a divergent expression. A subtler trap is a sign slip giving $+\\ln\\tfrac{7}{3}$. The correct fix is that for oscillatory $f$ the Frullani constant uses the Cesàro mean $\\bar f(\\infty)=0$, giving $(f(0)-\\bar f(\\infty))\\ln\\tfrac{b}{a}=(1-0)\\ln\\tfrac{3}{7}$.",
    "solutions": [
      {
        "name": "Frullani with Cesàro limit",
        "steps": [
          "Frullani extends to oscillatory $f$ whenever the running average converges, $\\tfrac1T\\int_0^T f\\to L$: then $\\int_0^\\infty\\frac{f(ax)-f(bx)}{x}\\,dx=(f(0)-L)\\ln\\frac{b}{a}$.",
          "For $f(x)=\\cos x$ we have $f(0)=1$ and the Cesàro mean $L=\\lim_{T\\to\\infty}\\tfrac1T\\int_0^T\\cos t\\,dt=\\lim_{T\\to\\infty}\\tfrac{\\sin T}{T}=0$. Here the numerator $\\cos(7x)-\\cos(3x)$ matches $f(ax)-f(bx)$ with $a=7,\\ b=3$.",
          "Thus $I=(f(0)-L)\\ln\\tfrac{b}{a}=(1-0)\\ln\\tfrac{3}{7}=\\ln\\tfrac{3}{7}$.",
          "So $I=\\boxed{\\ln\\tfrac{3}{7}}$."
        ]
      },
      {
        "name": "Cosine-integral antiderivative",
        "steps": [
          "An antiderivative of $\\tfrac{\\cos(7x)-\\cos(3x)}{x}$ is $F(x)=\\mathrm{Ci}(7x)-\\mathrm{Ci}(3x)$, since $\\tfrac{d}{dx}\\mathrm{Ci}(cx)=\\tfrac{\\cos(cx)}{x}$, where $\\mathrm{Ci}(t)=-\\int_t^\\infty\\tfrac{\\cos u}{u}\\,du$.",
          "As $x\\to\\infty$, $\\mathrm{Ci}(7x)\\to0$ and $\\mathrm{Ci}(3x)\\to0$ (since $\\mathrm{Ci}(\\infty)=0$), so $F(\\infty)=0$.",
          "As $x\\to0^+$, the expansion $\\mathrm{Ci}(t)=\\gamma+\\ln t+O(t^2)$ gives $F(0^+)=(\\gamma+\\ln 7x)-(\\gamma+\\ln 3x)=\\ln 7-\\ln 3=\\ln\\tfrac{7}{3}$; the $\\gamma$ and $\\ln x$ cancel.",
          "By the fundamental theorem, $I=F(\\infty)-F(0^+)=0-\\ln\\tfrac{7}{3}=\\ln\\tfrac{3}{7}$.",
          "Hence $I=\\boxed{\\ln\\tfrac{3}{7}}$."
        ]
      },
      {
        "name": "Laplace regularization",
        "steps": [
          "Regularize with a decaying factor: $I(s)=\\int_0^\\infty\\frac{\\cos(7x)-\\cos(3x)}{x}e^{-sx}\\,dx$ for $s>0$, then let $s\\to0^+$.",
          "Differentiate in $s$ and use $\\int_0^\\infty\\cos(\\omega x)e^{-sx}\\,dx=\\tfrac{s}{s^2+\\omega^2}$: $I'(s)=-\\big(\\tfrac{s}{s^2+49}-\\tfrac{s}{s^2+9}\\big)$.",
          "Integrate back with the boundary condition $I(\\infty)=0$: $I(s)=\\tfrac12\\ln\\tfrac{s^2+9}{s^2+49}$.",
          "Take $s\\to0^+$: $I=\\tfrac12\\ln\\tfrac{9}{49}=\\ln\\tfrac{3}{7}$.",
          "Thus $I=\\boxed{\\ln\\tfrac{3}{7}}$."
        ]
      }
    ],
    "remark": "Insight: the cosine has no honest value at infinity, but its running average does — and that average ($0$) is exactly the constant Frullani needs. The cosine-integral $\\mathrm{Ci}$ makes the endpoint bookkeeping rigorous: all the action is the $\\gamma+\\ln t$ behaviour near $0$, with $\\gamma$ and $\\ln x$ cancelling so only $\\ln\\tfrac{7}{3}$ survives. Since the higher frequency $7$ sits in the positive term, $I$ comes out negative."
  },
  {
    "theme": "famous",
    "themeLabel": "Famous Definite Integrals",
    "title": "The Symmetric Rational Weight",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "king-property",
      "reflection",
      "arctan",
      "substitution"
    ],
    "statement": "Evaluate \\[ I=\\int_{0}^{\\pi}\\frac{x\\sin x}{1+\\cos^{2}x}\\,dx. \\]",
    "answer": "$\\displaystyle I=\\frac{\\pi^{2}}{4}$.",
    "trap": "Claiming the integrand is odd about $x=\\tfrac{\\pi}{2}$ and hence $I=0$. While $\\sin x$ and $1+\\cos^2x$ are symmetric about $\\tfrac{\\pi}{2}$, the factor $x$ is not, so there is no cancellation; the correct move is the king substitution $x\\mapsto\\pi-x$, which extracts the constant $\\pi$ rather than killing the integral.",
    "solutions": [
      {
        "name": "King property then arctan",
        "steps": [
          "Apply $x\\mapsto\\pi-x$: $\\sin(\\pi-x)=\\sin x$, $\\cos^2(\\pi-x)=\\cos^2x$, so $I=\\int_0^\\pi\\frac{(\\pi-x)\\sin x}{1+\\cos^2x}dx=\\pi K-I$, with $K=\\int_0^\\pi\\frac{\\sin x}{1+\\cos^2x}dx$.",
          "Thus $2I=\\pi K$.",
          "Compute $K$ via $u=\\cos x$, $du=-\\sin x\\,dx$: $K=\\int_{-1}^{1}\\frac{du}{1+u^2}=\\arctan u\\big|_{-1}^{1}=\\tfrac{\\pi}{2}$.",
          "Hence $I=\\tfrac{\\pi}{2}\\cdot\\tfrac{\\pi}{2}=\\boxed{\\tfrac{\\pi^2}{4}}$."
        ]
      },
      {
        "name": "Split and reflect the mass",
        "steps": [
          "Write $I=\\int_0^\\pi x\\,g(x)\\,dx$ with $g(x)=\\frac{\\sin x}{1+\\cos^2x}$, where $g(\\pi-x)=g(x)$ (genuinely symmetric).",
          "For any weight symmetric about $\\tfrac{\\pi}{2}$, $\\int_0^\\pi x\\,g(x)\\,dx=\\tfrac{\\pi}{2}\\int_0^\\pi g(x)\\,dx$ (the linear part averages to the midpoint).",
          "Here $\\int_0^\\pi g(x)\\,dx=K=\\tfrac{\\pi}{2}$ from the arctan substitution.",
          "Therefore $I=\\tfrac{\\pi}{2}\\cdot\\tfrac{\\pi}{2}=\\boxed{\\tfrac{\\pi^2}{4}}$."
        ]
      }
    ],
    "remark": "Insight: a symmetric weight forces the centroid of the mass to sit at the midpoint $\\tfrac{\\pi}{2}$, so $\\int x g = \\tfrac{\\pi}{2}\\int g$ — the same mechanism as the king property, viewed as a center-of-mass statement. The 'odd, so zero' trap confuses symmetry of $g$ with antisymmetry of $xg$."
  },
  {
    "theme": "improper",
    "themeLabel": "Improper & Limiting Integrals",
    "title": "The Singularity That Hides in the Middle",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "interior singularity",
      "p-test",
      "split",
      "improper"
    ],
    "statement": "Evaluate the improper integral\n\\[ I=\\int_{0}^{8}\\frac{dx}{(x-1)^{2/3}}, \\]\nwhere $(x-1)^{2/3}$ denotes the (positive) real value $\\big(|x-1|\\big)^{2/3}$, with the integrand understood as $+\\infty$ at its singular point.",
    "answer": "$I = 3 + 3\\sqrt[3]{7}$.",
    "trap": "Blindly applying the antiderivative $3(x-1)^{1/3}$ across all of $[0,8]$ as if nothing happened. The integrand blows up at the interior point $x=1\\in(0,8)$, so the integral is improper and MUST be split as $\\int_0^1+\\int_1^8$. Worse, $3(x-1)^{1/3}$ is the antiderivative only on $x>1$; the correct one is $3\\,\\operatorname{sgn}(x-1)|x-1|^{1/3}$. Evaluating $3(x-1)^{1/3}\\big|_0^8=3\\sqrt[3]{7}-3(-1)^{1/3}$ silently selects the principal cube root $(-1)^{1/3}=e^{i\\pi/3}$, producing the complex value $4.24-2.60i$ for what is a real, finite integral.",
    "solutions": [
      {
        "name": "Split at the interior singularity",
        "steps": [
          "Scan the whole interval: the integrand $|x-1|^{-2/3}\\to+\\infty$ as $x\\to1$, and $1\\in(0,8)$, so the integral is improper at an interior point. We must split it as $I=\\int_0^1\\frac{dx}{(1-x)^{2/3}}+\\int_1^8\\frac{dx}{(x-1)^{2/3}}$, since $|x-1|=1-x$ on $[0,1]$ and $|x-1|=x-1$ on $[1,8]$.",
          "Left piece: with $u=1-x$ (so $du=-dx$), $\\int_0^1 (1-x)^{-2/3}dx=\\int_0^1 u^{-2/3}\\,du=3u^{1/3}\\big|_0^1=3$. The exponent $p=2/3<1$ guarantees convergence at the singularity.",
          "Right piece: with $v=x-1$, $\\int_1^8 (x-1)^{-2/3}dx=\\int_0^7 v^{-2/3}\\,dv=3v^{1/3}\\big|_0^7=3\\sqrt[3]{7}$.",
          "Both one-sided improper pieces are finite, so $I=3+3\\sqrt[3]{7}=\\boxed{3+3\\sqrt[3]{7}}\\approx 8.7388.$"
        ]
      },
      {
        "name": "Limit definition (excise the singular point)",
        "steps": [
          "By definition of an improper integral with an interior singularity, $I=\\lim_{\\varepsilon\\to0^+}\\int_0^{1-\\varepsilon}(1-x)^{-2/3}dx+\\lim_{\\delta\\to0^+}\\int_{1+\\delta}^{8}(x-1)^{-2/3}dx$, where the two limits are taken independently.",
          "First limit: $\\int_0^{1-\\varepsilon}(1-x)^{-2/3}dx=3(1-(1-x))^{1/3}$... more cleanly, $=-3(1-x)^{1/3}\\big|_0^{1-\\varepsilon}=3-3\\varepsilon^{1/3}\\to3$ as $\\varepsilon\\to0^+$.",
          "Second limit: $\\int_{1+\\delta}^{8}(x-1)^{-2/3}dx=3(x-1)^{1/3}\\big|_{1+\\delta}^{8}=3\\sqrt[3]{7}-3\\delta^{1/3}\\to3\\sqrt[3]{7}$ as $\\delta\\to0^+$.",
          "Both limits exist and are finite, so $I=3+3\\sqrt[3]{7}=\\boxed{3+3\\sqrt[3]{7}}.$"
        ]
      },
      {
        "name": "p-test bookkeeping, then a single signed antiderivative",
        "steps": [
          "Near $x=1$ the integrand behaves like $|x-1|^{-2/3}$ with $p=2/3<1$, so each one-sided improper integral converges (the $p<1$ threshold for an endpoint singularity). Convergence is thus secured on both sides.",
          "The correct global antiderivative of $|x-1|^{-2/3}$ is $G(x)=3\\,\\operatorname{sgn}(x-1)\\,|x-1|^{1/3}$ — note the sign factor, which the naive $3(x-1)^{1/3}$ omits on $x<1$.",
          "Since each piece converges, the Fundamental Theorem applies on each side and $I=G(8)-G(0)=\\big(3\\cdot 7^{1/3}\\big)-\\big(-3\\cdot 1^{1/3}\\big)=3\\sqrt[3]{7}+3$.",
          "Hence $I=3+3\\sqrt[3]{7}=\\boxed{3+3\\sqrt[3]{7}}.$"
        ]
      }
    ],
    "remark": "Insight: an interior singularity is the most-missed case in improper integration. The deceptive feature here is that $p=2/3<1$ makes BOTH sides converge to finite values, so a careless one-shot antiderivative even looks plausible — yet $3(x-1)^{1/3}$ is the antiderivative only for $x>1$, and feeding it $x=0$ secretly evaluates the principal cube root of $-1$, returning a complex number. The honest antiderivative carries an $\\operatorname{sgn}(x-1)$ factor. Always scan the entire interval for blow-ups before integrating, and split at every singular point."
  },
  {
    "theme": "improper",
    "themeLabel": "Improper & Limiting Integrals",
    "title": "A Parameter's Window of Existence",
    "difficulty": 4,
    "task": "Find all",
    "tags": [
      "parameter range",
      "convergence",
      "limit comparison",
      "two thresholds"
    ],
    "statement": "Find all real numbers $p$ for which the improper integral\n\\[ J(p)=\\int_{0}^{\\infty}\\frac{x^{\\,p}}{1+x^{3}}\\,dx \\]\nconverges.",
    "answer": "Converges iff $-1<p<2$.",
    "trap": "Checking only the behavior at $\\infty$ (or only at $0$) and reporting a single inequality. The integral has TWO separate danger zones — the endpoint $0$ (where $x^p$ can blow up) and the tail $\\infty$ — and convergence needs BOTH to be fine simultaneously; using just one threshold gives a half-right, wrong answer. For instance, the tail-only verdict $p<2$ wrongly admits $p=-\\tfrac32$ (which diverges at $0$), and the origin-only verdict $p>-1$ wrongly admits $p=\\tfrac52$ (which diverges at $\\infty$).",
    "solutions": [
      {
        "name": "Split and limit-compare at each end",
        "steps": [
          "Split $J(p)=\\int_0^1+\\int_1^\\infty$; convergence of $J(p)$ requires BOTH pieces to converge.",
          "Near $x=0$: $\\dfrac{x^p}{1+x^3}\\sim x^p$ since $1+x^3\\to1$, and $\\int_0^1 x^p\\,dx$ converges iff $p>-1$ (the $\\int_0^1 x^{-q}$ test with $q=-p<1$).",
          "Near $x=\\infty$: $\\dfrac{x^p}{1+x^3}\\sim x^{p-3}$ since $1+x^3\\sim x^3$, and $\\int_1^\\infty x^{p-3}\\,dx$ converges iff $p-3<-1$, i.e. $p<2$.",
          "Both conditions hold simultaneously iff $-1<p<2$, so $J(p)$ converges $\\boxed{\\iff -1<p<2}.$"
        ]
      },
      {
        "name": "Explicit two-sided bounds make comparison conclusive",
        "steps": [
          "On $(0,1)$, $1\\le 1+x^3\\le2$, so $\\tfrac12 x^p\\le\\dfrac{x^p}{1+x^3}\\le x^p$; the upper bound gives convergence at $0$ when $p>-1$, and the lower bound forces divergence when $p\\le-1$.",
          "On $(1,\\infty)$, $x^3\\le1+x^3\\le2x^3$, so $\\tfrac12 x^{p-3}\\le\\dfrac{x^p}{1+x^3}\\le x^{p-3}$; the upper bound gives convergence at $\\infty$ when $p<2$, and the lower bound forces divergence when $p\\ge2$.",
          "These genuine two-sided bounds settle the comparison test in BOTH directions at each end (convergence and divergence), with no ambiguity.",
          "Therefore $J(p)$ converges exactly when $\\boxed{-1<p<2}.$"
        ]
      }
    ],
    "remark": "Insight: a single rational integrand on $(0,\\infty)$ secretly poses two independent $p$-tests — one inherited from $\\int_0^1 x^{-q}$ ($q<1$) at the origin and one from $\\int_1^\\infty x^{-r}$ ($r>1$) in the tail. The convergence set is their intersection, an open interval whose width equals the degree of the denominator. Spotting both endpoints is the whole game. As a sanity check, on this window the integral has the elegant closed form $J(p)=\\dfrac{\\pi/3}{\\sin\\!\\big(\\pi(p+1)/3\\big)}$, which is finite precisely for $0<p+1<3$, matching $-1<p<2$."
  },
  {
    "theme": "improper",
    "themeLabel": "Improper & Limiting Integrals",
    "title": "Eight Integrals, Which Survive?",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "convergence",
      "comparison test",
      "classification",
      "log integrals"
    ],
    "statement": "For each of the following improper integrals, determine whether it converges or diverges:\n\\[ \\text{(a)}\\ \\int_{1}^{\\infty}\\frac{2+\\sin x}{x^{2}}\\,dx,\\quad \\text{(b)}\\ \\int_{1}^{\\infty}\\frac{x}{x^{2}+1}\\,dx,\\quad \\text{(c)}\\ \\int_{0}^{1}\\frac{\\cos x}{\\sqrt{x}}\\,dx,\\quad \\text{(d)}\\ \\int_{0}^{1}\\frac{dx}{x-\\sin x}, \\]\n\\[ \\text{(e)}\\ \\int_{2}^{\\infty}\\frac{dx}{x\\,\\ln x},\\quad \\text{(f)}\\ \\int_{2}^{\\infty}\\frac{dx}{x\\,(\\ln x)^{2}},\\quad \\text{(g)}\\ \\int_{0}^{\\infty}\\frac{e^{-x}}{\\sqrt{x}}\\,dx,\\quad \\text{(h)}\\ \\int_{0}^{2}\\frac{dx}{(x-1)^{2}}. \\]\nList exactly which letters converge.",
    "answer": "Convergent: (a), (c), (f), (g). Divergent: (b), (d), (e), (h).",
    "trap": "Trusting the integrand's size at a glance: (d) looks tame (the integrand is bounded away from the endpoints and continuous on $(0,1]$) but $x-\\sin x\\sim x^3/6$ near $0$, making it behave like $6/x^3$ — a violent $p=3$ blow-up that diverges; and (h) hides an interior singularity at $x=1$ with $p=2>1$, so it diverges even though the endpoints $0$ and $2$ are perfectly finite.",
    "solutions": [
      {
        "name": "Tail and endpoint comparisons",
        "steps": [
          "(a) $0\\le\\frac{2+\\sin x}{x^2}\\le\\frac{3}{x^2}$ and $\\int_1^\\infty 3x^{-2}$ converges ($p=2>1$): CONVERGES.",
          "(b) $\\frac{x}{x^2+1}\\sim\\frac1x$ and $\\int_1^\\infty x^{-1}$ diverges ($p=1$): DIVERGES.",
          "(c) $\\big|\\frac{\\cos x}{\\sqrt x}\\big|\\le x^{-1/2}$ and $\\int_0^1 x^{-1/2}$ converges ($p=1/2<1$): CONVERGES.",
          "(g) near $0$, $\\frac{e^{-x}}{\\sqrt x}\\sim x^{-1/2}$ (converges), and the tail is dominated by $e^{-x}$ (converges): CONVERGES."
        ]
      },
      {
        "name": "Asymptotics at the singular point",
        "steps": [
          "(d) Taylor: $x-\\sin x=\\frac{x^3}{6}+O(x^5)$, so near $0$ the integrand $\\sim\\frac{6}{x^3}$; $\\int_0^1 x^{-3}$ diverges ($p=3>1$): DIVERGES.",
          "(e) Substitute $u=\\ln x$: $\\int_2^\\infty\\frac{dx}{x\\ln x}=\\int_{\\ln2}^\\infty\\frac{du}{u}=\\infty$: DIVERGES.",
          "(f) Same substitution: $\\int_{\\ln2}^\\infty\\frac{du}{u^2}=\\frac{1}{\\ln2}<\\infty$: CONVERGES.",
          "(h) Interior singularity at $x=1\\in(0,2)$ with $p=2\\ge1$; $\\int_0^1(1-x)^{-2}$ already $=\\infty$: DIVERGES. Final convergent set $\\boxed{\\{a,c,f,g\\}}.$"
        ]
      }
    ],
    "remark": "Insight: this is a stress test of every reflex — the $\\frac1{x\\ln x}$ vs $\\frac1{x(\\ln x)^2}$ pair separates the famous borderline logarithmic case, while (d) and (h) punish anyone who classifies by 'does the integrand look big?' instead of by the local exponent $p$. Convergence is governed entirely by the worst point, found via Taylor/asymptotic expansion."
  },
  {
    "theme": "improper",
    "themeLabel": "Improper & Limiting Integrals",
    "title": "A Spike That Refuses to Shrink",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "limiting integral",
      "parameter limit",
      "arctan",
      "improper"
    ],
    "statement": "Evaluate the limit of improper integrals\n\\[ \\lim_{n\\to\\infty}\\int_{0}^{\\infty}\\frac{n}{1+n^{2}x^{2}}\\,dx. \\]",
    "answer": "$\\dfrac{\\pi}{2}.$",
    "trap": "Passing the limit inside the integral. Pointwise, $\\frac{n}{1+n^2x^2}\\to0$ for every fixed $x>0$, tempting you to conclude the limit is $0$. But the family is not dominated by any integrable function: its envelope $\\sup_n \\frac{n}{1+n^2x^2}=\\frac{1}{2x}$ (peak at $n=1/x$) is non-integrable near $0$, so the interchange is illegal. The mass $\\pi/2$ is conserved as the bump narrows toward $x=0$, so each integral equals $\\pi/2$ exactly.",
    "solutions": [
      {
        "name": "Evaluate the integral first, then take the limit",
        "steps": [
          "For each fixed $n>0$, substitute $u=nx$, $du=n\\,dx$: $\\int_0^\\infty\\frac{n}{1+n^2x^2}\\,dx=\\int_0^\\infty\\frac{du}{1+u^2}$.",
          "This is the standard convergent improper integral $\\int_0^\\infty\\frac{du}{1+u^2}=\\arctan u\\big|_0^\\infty=\\frac{\\pi}{2}$.",
          "So the integral equals $\\frac\\pi2$ for every $n$, independent of $n$.",
          "Therefore the limit is $\\boxed{\\dfrac{\\pi}{2}}.$"
        ]
      },
      {
        "name": "Direct antiderivative",
        "steps": [
          "$\\int\\frac{n}{1+n^2x^2}\\,dx=\\arctan(nx)+C$.",
          "Hence $\\int_0^\\infty\\frac{n}{1+n^2x^2}\\,dx=\\lim_{R\\to\\infty}\\big(\\arctan(nR)-\\arctan 0\\big)=\\frac\\pi2$ (using $n>0$).",
          "The value is constant in $n$, so no limit work remains.",
          "The limit equals $\\boxed{\\dfrac{\\pi}{2}}.$"
        ]
      }
    ],
    "remark": "Insight: this is an approximate-identity (nascent delta) spike. The total mass $\\pi/2$ is conserved while the bump narrows toward $x=0$, so the pointwise limit ($0$) and the limit of the integrals ($\\pi/2$) disagree. It is the cleanest cautionary tale against swapping $\\lim$ and $\\int$ without an integrable dominator: here the envelope $1/(2x)$ blows up at the origin, exactly where domination is needed."
  },
  {
    "theme": "improper",
    "themeLabel": "Improper & Limiting Integrals",
    "title": "Mass Slides to the Right Edge",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "limiting integral",
      "concentration",
      "improper at zero",
      "log"
    ],
    "statement": "Evaluate\n\\[ P=\\lim_{n\\to\\infty}\\int_{0}^{1} n\\,x^{\\,n-1}\\ln(1+x)\\,dx. \\]",
    "answer": "$P=\\ln 2.$",
    "trap": "Letting $n\\to\\infty$ inside to get $\\int_0^1 0\\cdot\\ln(1+x)\\,dx=0$, since $nx^{n-1}\\to0$ for each fixed $x\\in(0,1)$. As in the spike problem, the family $nx^{n-1}$ is an approximate identity concentrating at the right endpoint $x=1$ (its integral is always $1$), so it samples $\\ln(1+x)$ at $x=1$, not $0$.",
    "solutions": [
      {
        "name": "Integration by parts (exact, then limit)",
        "steps": [
          "Note $n x^{n-1}=\\frac{d}{dx}x^n$. Integrate by parts: $\\int_0^1 (x^n)'\\ln(1+x)dx=\\big[x^n\\ln(1+x)\\big]_0^1-\\int_0^1\\frac{x^n}{1+x}dx$.",
          "The boundary term is $1\\cdot\\ln2-0=\\ln2$ for every $n$.",
          "The remaining integral satisfies $0\\le\\int_0^1\\frac{x^n}{1+x}dx\\le\\int_0^1 x^n dx=\\frac{1}{n+1}\\to0$.",
          "Therefore $P=\\ln2-0=\\boxed{\\ln2}.$"
        ]
      },
      {
        "name": "Approximate-identity / substitution",
        "steps": [
          "Substitute $t=x^n$, $x=t^{1/n}$, $n x^{n-1}dx=dt$: the integral becomes $\\int_0^1\\ln\\!\\big(1+t^{1/n}\\big)\\,dt$.",
          "For each fixed $t\\in(0,1]$, $t^{1/n}\\to1$ as $n\\to\\infty$, so the integrand $\\to\\ln2$ pointwise, and it is bounded by $\\ln2$ on $[0,1]$.",
          "By dominated convergence (dominating constant $\\ln2$), $\\int_0^1\\ln(1+t^{1/n})dt\\to\\int_0^1\\ln2\\,dt=\\ln2$.",
          "Hence $P=\\boxed{\\ln2}.$"
        ]
      }
    ],
    "remark": "Insight: $n x^{n-1}$ on $[0,1]$ is a one-sided approximate identity that herds all its mass to the right endpoint $x=1$, so $\\lim\\int n x^{n-1}g(x)dx=g(1)$ for continuous $g$. Here $g(1)=\\ln2$. The same trap as the arctan spike, dressed in a finite interval — proving the limit cannot be passed under the integral without justification."
  },
  {
    "theme": "improper",
    "themeLabel": "Improper Integrals",
    "title": "Two Decays Race to the Origin",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "frullani",
      "exponential",
      "endpoint-test",
      "logarithm"
    ],
    "statement": "Consider the improper integral\n\\[ I=\\int_0^\\infty \\frac{e^{-2x}-e^{-5x}}{x}\\,dx. \\]\nFirst justify that $I$ converges at *both* endpoints $x\\to 0^+$ and $x\\to\\infty$, then evaluate it in closed form.",
    "answer": "The integral converges, and $\\displaystyle I=\\ln\\frac{5}{2}$. (Both endpoints are fine: near $0$ the integrand $\\to 5-2=3$ is bounded, and near $\\infty$ it is dominated by $e^{-2x}$.)",
    "trap": "Splitting immediately into $\\int_0^\\infty \\frac{e^{-2x}}{x}dx-\\int_0^\\infty \\frac{e^{-5x}}{x}dx$. Each of those *diverges* at $x=0$ (the integrand $\\sim 1/x$), so the difference is an $\\infty-\\infty$ that you cannot resolve term by term — the cancellation in the numerator is exactly what makes the original integrable, and breaking it destroys that.",
    "solutions": [
      {
        "name": "Frullani's theorem",
        "steps": [
          "For $f$ continuous on $[0,\\infty)$ with finite $f(0)$ and $\\lim_{x\\to\\infty}f(x)=f(\\infty)$, Frullani's theorem gives $\\int_0^\\infty \\frac{f(ax)-f(bx)}{x}dx=\\big(f(0)-f(\\infty)\\big)\\ln\\frac{b}{a}$.",
          "Take $f(t)=e^{-t}$, so $f(0)=1$, $f(\\infty)=0$, with $a=2$, $b=5$.",
          "Then $I=(1-0)\\ln\\frac{5}{2}=\\boxed{\\ln\\frac{5}{2}}$."
        ]
      },
      {
        "name": "Differentiate under a parameter",
        "steps": [
          "Define $J(s)=\\int_0^\\infty \\frac{e^{-sx}-e^{-5x}}{x}\\,dx$ for $s>0$; we want $J(2)$, and clearly $J(5)=0$.",
          "Differentiate under the integral: $J'(s)=\\int_0^\\infty \\frac{\\partial}{\\partial s}\\frac{e^{-sx}-e^{-5x}}{x}\\,dx=\\int_0^\\infty -e^{-sx}\\,dx=-\\frac{1}{s}$.",
          "Integrate back: $J(s)=-\\ln s+C$. Using $J(5)=0$ gives $C=\\ln 5$, so $J(s)=\\ln\\frac{5}{s}$.",
          "Hence $I=J(2)=\\ln\\frac{5}{2}=\\boxed{\\ln\\frac{5}{2}}$."
        ]
      },
      {
        "name": "Integral representation of the log",
        "steps": [
          "Write the kernel as a parameter integral: $\\frac{e^{-2x}-e^{-5x}}{x}=\\int_2^5 e^{-tx}\\,dt$ (just integrate $e^{-tx}$ in $t$).",
          "Then $I=\\int_0^\\infty\\!\\!\\int_2^5 e^{-tx}\\,dt\\,dx$; the integrand is positive, so by Tonelli swap the order.",
          "$I=\\int_2^5\\!\\Big(\\int_0^\\infty e^{-tx}dx\\Big)dt=\\int_2^5 \\frac{1}{t}\\,dt=\\ln 5-\\ln 2=\\boxed{\\ln\\frac{5}{2}}$."
        ]
      }
    ],
    "remark": "Insight: the $1/x$ weight makes each exponential individually non-integrable at the origin, yet their difference is perfectly tame because the numerator vanishes to first order there. Frullani is precisely the theorem that monetizes this cancellation — the answer depends only on the endpoint *values* $f(0)$ and $f(\\infty)$, never on the shape in between."
  },
  {
    "theme": "improper",
    "themeLabel": "Improper Integrals",
    "title": "Singular at Both Ends, Yet Finite",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "beta-function",
      "gamma",
      "reflection",
      "double-singularity"
    ],
    "statement": "For the integral\n\\[ I=\\int_0^1 \\frac{dx}{x^{1/3}\\,(1-x)^{2/3}}, \\]\nthe integrand blows up at *both* endpoints $x=0$ and $x=1$. Decide whether $I$ converges, and if so give its exact value.",
    "answer": "It converges (each endpoint has exponent $<1$), and $\\displaystyle I=\\frac{2\\pi}{\\sqrt{3}}=\\frac{2\\sqrt{3}\\,\\pi}{3}$.",
    "trap": "Concluding divergence because the integrand is unbounded at two points at once. Two singularities do not double the danger — convergence is decided *locally*: near $x=0$ the integrand $\\sim x^{-1/3}$ has $p=\\tfrac13<1$, and near $x=1$ it $\\sim (1-x)^{-2/3}$ has $p=\\tfrac23<1$, so by the p-test each end is integrable independently.",
    "solutions": [
      {
        "name": "Beta function + reflection formula",
        "steps": [
          "Recognize the Beta integral $B(a,b)=\\int_0^1 x^{a-1}(1-x)^{b-1}dx$ with $a-1=-\\tfrac13$ and $b-1=-\\tfrac23$, i.e. $a=\\tfrac23$, $b=\\tfrac13$.",
          "Both exponents satisfy $a,b>0$, so the Beta integral converges; thus $I=B\\!\\left(\\tfrac23,\\tfrac13\\right)=\\dfrac{\\Gamma(2/3)\\,\\Gamma(1/3)}{\\Gamma(1)}=\\Gamma\\!\\left(\\tfrac13\\right)\\Gamma\\!\\left(\\tfrac23\\right)$.",
          "Apply Euler's reflection $\\Gamma(s)\\Gamma(1-s)=\\dfrac{\\pi}{\\sin\\pi s}$ with $s=\\tfrac13$: $I=\\dfrac{\\pi}{\\sin(\\pi/3)}=\\dfrac{\\pi}{\\sqrt{3}/2}=\\boxed{\\dfrac{2\\pi}{\\sqrt 3}}$."
        ]
      },
      {
        "name": "Map to a half-line and use the standard integral",
        "steps": [
          "Substitute $t=\\dfrac{x}{1-x}$, so $x=\\dfrac{t}{1+t}$, $1-x=\\dfrac{1}{1+t}$, $dx=\\dfrac{dt}{(1+t)^2}$, and $x:0\\to1$ becomes $t:0\\to\\infty$.",
          "Then $x^{-1/3}(1-x)^{-2/3}=t^{-1/3}(1+t)^{1/3}(1+t)^{2/3}=t^{-1/3}(1+t)$, giving $I=\\int_0^\\infty t^{-1/3}(1+t)\\cdot\\dfrac{dt}{(1+t)^2}=\\int_0^\\infty \\dfrac{t^{-1/3}}{1+t}\\,dt$.",
          "Use the classical result $\\int_0^\\infty \\dfrac{t^{s-1}}{1+t}\\,dt=\\dfrac{\\pi}{\\sin\\pi s}$, valid for $0<s<1$, with $s=\\tfrac23$.",
          "Hence $I=\\dfrac{\\pi}{\\sin(2\\pi/3)}=\\dfrac{\\pi}{\\sqrt3/2}=\\boxed{\\dfrac{2\\pi}{\\sqrt 3}}$."
        ]
      },
      {
        "name": "Convergence first, then known Beta value",
        "steps": [
          "Convergence: split at $x=\\tfrac12$. On $[0,\\tfrac12]$ the factor $(1-x)^{-2/3}$ is bounded, leaving $x^{-1/3}$ which is integrable since $\\tfrac13<1$; on $[\\tfrac12,1]$ the factor $x^{-1/3}$ is bounded, leaving $(1-x)^{-2/3}$ which is integrable since $\\tfrac23<1$. So $I$ is finite.",
          "Identify $I=B(\\tfrac23,\\tfrac13)$ as in Solution 1.",
          "Evaluate $\\Gamma(\\tfrac13)\\Gamma(\\tfrac23)=\\dfrac{\\pi}{\\sin(\\pi/3)}=\\dfrac{2\\pi}{\\sqrt3}$, so $I=\\boxed{\\dfrac{2\\pi}{\\sqrt 3}}$."
        ]
      }
    ],
    "remark": "Insight: a definite integral can be 'doubly improper' (unbounded at both limits) and still perfectly finite — convergence is always a local question at each singular point. Once you see the integrand as $x^{a-1}(1-x)^{b-1}$, the Beta function plus Euler's reflection formula turns a frightening-looking integral into a one-line evaluation."
  },
  {
    "theme": "improper",
    "themeLabel": "Improper Integrals",
    "title": "It Converges, But Only Just Barely",
    "difficulty": 5,
    "task": "Evaluate and contrast",
    "tags": [
      "dirichlet-integral",
      "conditional-convergence",
      "absolute-convergence",
      "oscillatory"
    ],
    "statement": "Let\n\\[ I=\\int_0^\\infty \\frac{\\sin x}{x}\\,dx \\qquad\\text{and}\\qquad A=\\int_0^\\infty \\frac{|\\sin x|}{x}\\,dx. \\]\nDetermine the exact value of $I$, and decide whether $A$ is finite. Comment on what this says about the *type* of convergence of $I$.",
    "answer": "$I=\\dfrac{\\pi}{2}$ (convergent), while $A=+\\infty$ (divergent). Therefore $I$ is **conditionally** convergent, not absolutely convergent.",
    "trap": "Assuming that because $I$ converges, the integrand is 'small enough' that $\\int |\\sin x|/x$ must also converge. The convergence of $I$ relies entirely on *cancellation* between the positive and negative humps of $\\sin x$; strip the sign away and the surviving positive humps each contribute on the order of $1/n$, and $\\sum 1/n$ diverges.",
    "solutions": [
      {
        "name": "Feynman parameter for $I$, harmonic lower bound for $A$",
        "steps": [
          "For $I$: introduce $J(s)=\\int_0^\\infty e^{-sx}\\dfrac{\\sin x}{x}\\,dx$ for $s\\ge 0$; differentiate to get $J'(s)=-\\int_0^\\infty e^{-sx}\\sin x\\,dx=-\\dfrac{1}{1+s^2}$.",
          "Integrate: $J(s)=C-\\arctan s$; as $s\\to\\infty$, $J(s)\\to0$, forcing $C=\\dfrac{\\pi}{2}$, so $J(s)=\\dfrac{\\pi}{2}-\\arctan s$.",
          "Let $s\\to0^+$ (justified by Abel/uniform convergence): $I=J(0)=\\dfrac{\\pi}{2}=\\boxed{\\dfrac{\\pi}{2}}$.",
          "For $A$: on the $n$-th hump $[(n-1)\\pi,\\,n\\pi]$, $\\displaystyle\\int_{(n-1)\\pi}^{n\\pi}\\frac{|\\sin x|}{x}\\,dx\\ge \\frac{1}{n\\pi}\\int_{(n-1)\\pi}^{n\\pi}|\\sin x|\\,dx=\\frac{2}{n\\pi}$.",
          "Summing, $A\\ge\\dfrac{2}{\\pi}\\sum_{n\\ge1}\\dfrac1n=+\\infty$. Hence $A$ diverges, so $I$ converges only conditionally."
        ]
      },
      {
        "name": "Dirichlet's test for $I$, alternating-series view for $A$",
        "steps": [
          "For $I$ on $[1,\\infty)$: write it as $\\int_1^\\infty \\sin x\\cdot\\dfrac1x\\,dx$. Here $\\dfrac1x$ decreases monotonically to $0$ and the partial integrals $\\big|\\int_1^T \\sin x\\,dx\\big|\\le2$ are bounded, so Dirichlet's test gives convergence; near $0$ the integrand $\\to1$ is harmless. Thus $I$ converges.",
          "Its value $\\tfrac{\\pi}{2}$ follows from the Laplace-parameter computation in Solution 1 (or any standard evaluation).",
          "For $A$: set $a_n=\\int_{(n-1)\\pi}^{n\\pi}\\dfrac{|\\sin x|}{x}\\,dx>0$. Since $\\dfrac1x\\ge\\dfrac1{n\\pi}$ on the hump, $a_n\\ge\\dfrac{2}{n\\pi}$, and $\\sum a_n\\ge \\dfrac{2}{\\pi}\\sum\\dfrac1n=\\infty$.",
          "So $\\int_0^\\infty \\dfrac{|\\sin x|}{x}\\,dx=\\sum_n a_n=+\\infty$, confirming $I=\\boxed{\\dfrac{\\pi}{2}}$ is conditionally convergent."
        ]
      }
    ],
    "remark": "Insight: this is the canonical example separating conditional from absolute convergence for improper integrals. The half-line behaves exactly like the alternating harmonic series: signs alternate and magnitudes shrink like $1/n$, so the signed integral lands on a finite value $\\pi/2$ purely through cancellation, while the absolute integral inherits the divergence of $\\sum 1/n$."
  },
  {
    "theme": "improper",
    "themeLabel": "Improper Integrals",
    "title": "A Cosine Shakes the Bell Curve",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "gaussian",
      "fourier",
      "differentiation-under-integral",
      "even-function"
    ],
    "statement": "Starting from the Gaussian fact $\\displaystyle\\int_{-\\infty}^{\\infty} e^{-x^2}\\,dx=\\sqrt{\\pi}$, evaluate the modulated improper integral\n\\[ I=\\int_{-\\infty}^{\\infty} e^{-x^2}\\cos(3x)\\,dx. \\]",
    "answer": "$\\displaystyle I=\\sqrt{\\pi}\\,e^{-9/4}$.",
    "trap": "Treating $\\cos(3x)$ as oscillating around an 'average of $0$' and concluding $I=0$, or pulling $\\cos(3x)$ out at some 'typical' value. The cosine is correlated with the Gaussian envelope: completing the square shifts the Gaussian by an imaginary amount and produces the genuinely nonzero factor $e^{-9/4}$.",
    "solutions": [
      {
        "name": "Differentiation under the integral sign",
        "steps": [
          "Define $F(b)=\\int_{-\\infty}^{\\infty} e^{-x^2}\\cos(bx)\\,dx$; we want $F(3)$, and $F(0)=\\sqrt\\pi$.",
          "Differentiate and integrate by parts: $F'(b)=-\\int_{-\\infty}^{\\infty} x\\,e^{-x^2}\\sin(bx)\\,dx=\\Big[\\tfrac12 e^{-x^2}\\sin(bx)\\Big]_{-\\infty}^{\\infty}-\\tfrac{b}{2}\\int_{-\\infty}^{\\infty} e^{-x^2}\\cos(bx)\\,dx=-\\tfrac{b}{2}F(b).$",
          "Solve the ODE $F'(b)=-\\tfrac{b}{2}F(b)$ with $F(0)=\\sqrt\\pi$: $F(b)=\\sqrt\\pi\\,e^{-b^2/4}$.",
          "Set $b=3$: $I=\\sqrt\\pi\\,e^{-9/4}=\\boxed{\\sqrt{\\pi}\\,e^{-9/4}}$."
        ]
      },
      {
        "name": "Complete the square (complex shift)",
        "steps": [
          "Write $\\cos(3x)=\\operatorname{Re}\\,e^{3ix}$, so $I=\\operatorname{Re}\\int_{-\\infty}^{\\infty} e^{-x^2+3ix}\\,dx$.",
          "Complete the square: $-x^2+3ix=-\\big(x-\\tfrac{3i}{2}\\big)^2-\\tfrac{9}{4}$.",
          "Shifting the contour back to the real axis (legitimate since $e^{-x^2}$ decays rapidly), $\\int_{-\\infty}^{\\infty} e^{-(x-3i/2)^2}\\,dx=\\sqrt\\pi$.",
          "Therefore $I=\\operatorname{Re}\\big(\\sqrt\\pi\\,e^{-9/4}\\big)=\\boxed{\\sqrt{\\pi}\\,e^{-9/4}}$."
        ]
      },
      {
        "name": "Power-series term-by-term",
        "steps": [
          "Expand $\\cos(3x)=\\sum_{k\\ge0}\\dfrac{(-1)^k 9^k}{(2k)!}x^{2k}$ and integrate against the Gaussian using $\\int_{-\\infty}^{\\infty} x^{2k}e^{-x^2}dx=\\dfrac{(2k)!}{4^k k!}\\sqrt\\pi$.",
          "Then $I=\\sqrt\\pi\\sum_{k\\ge0}\\dfrac{(-1)^k 9^k}{(2k)!}\\cdot\\dfrac{(2k)!}{4^k k!}=\\sqrt\\pi\\sum_{k\\ge0}\\dfrac{1}{k!}\\Big(-\\dfrac{9}{4}\\Big)^k.$",
          "Recognize the exponential series: $\\sum_{k\\ge0}\\dfrac{(-9/4)^k}{k!}=e^{-9/4}$.",
          "Hence $I=\\boxed{\\sqrt{\\pi}\\,e^{-9/4}}$."
        ]
      }
    ],
    "remark": "Insight: this is the Fourier transform of a Gaussian, and the punchline is that a Gaussian transforms to a Gaussian. The frequency $b$ enters only through $e^{-b^2/4}$, so higher-frequency modulation suppresses the value smoothly but never to zero — the bell curve filters, it does not cancel."
  },
  {
    "theme": "improper",
    "themeLabel": "Improper Integrals",
    "title": "Stepping Around the Pole at One",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "cauchy-principal-value",
      "internal-singularity",
      "contour",
      "cotangent"
    ],
    "statement": "The integral\n\\[ \\int_0^\\infty \\frac{x^{-2/3}}{1-x}\\,dx \\]\nhas a non-integrable pole at the interior point $x=1$, so it diverges as an ordinary improper integral. Compute its **Cauchy principal value**\n\\[ \\mathrm{PV}\\!\\int_0^\\infty \\frac{x^{-2/3}}{1-x}\\,dx=\\lim_{\\varepsilon\\to0^+}\\left(\\int_0^{1-\\varepsilon}+\\int_{1+\\varepsilon}^\\infty\\right)\\frac{x^{-2/3}}{1-x}\\,dx. \\]",
    "answer": "$\\displaystyle \\mathrm{PV}\\!\\int_0^\\infty \\frac{x^{-2/3}}{1-x}\\,dx=\\pi\\cot\\!\\frac{\\pi}{3}=\\frac{\\pi}{\\sqrt 3}=\\frac{\\sqrt 3\\,\\pi}{3}.$",
    "trap": "Reporting that the integral 'diverges' and stopping. The pole at $x=1$ is *simple*, so the two one-sided logarithmic divergences are equal and opposite; the symmetric $\\varepsilon\\to0$ limit cancels them and leaves a finite principal value. Treating the two sides with independent cutoffs (or only checking absolute integrability) misses this.",
    "solutions": [
      {
        "name": "Standard PV formula for the Mellin kernel",
        "steps": [
          "The classical result is $\\mathrm{PV}\\displaystyle\\int_0^\\infty \\frac{x^{s-1}}{1-x}\\,dx=\\pi\\cot(\\pi s)$ for $0<s<1$ (the Mellin transform of $1/(1-x)$ with a principal value at the pole).",
          "Here the exponent is $x^{-2/3}=x^{s-1}$ with $s-1=-\\tfrac23$, i.e. $s=\\tfrac13$, which lies in $(0,1)$.",
          "Substitute: $\\mathrm{PV}=\\pi\\cot\\!\\big(\\tfrac{\\pi}{3}\\big)=\\pi\\cdot\\dfrac{1}{\\sqrt3}=\\boxed{\\dfrac{\\pi}{\\sqrt3}}$."
        ]
      },
      {
        "name": "Keyhole contour around the branch cut",
        "steps": [
          "Consider $f(z)=\\dfrac{z^{s-1}}{1-z}$ with $s=\\tfrac13$, using the branch with the cut along the positive real axis, on a keyhole contour indented around the simple pole at $z=1$.",
          "The top edge ($\\arg z=0$) gives $\\mathrm{PV}\\!\\int_0^\\infty\\!\\frac{x^{s-1}}{1-x}\\,dx=\\mathrm{PV}$; the bottom edge ($\\arg z=2\\pi$) carries the phase $z^{s-1}=e^{2\\pi i(s-1)}x^{s-1}=e^{2\\pi i s}x^{s-1}$ and runs inward, contributing $-e^{2\\pi i s}\\,\\mathrm{PV}$. The big and little circles at $\\infty$ and $0$ vanish since $0<s<1$.",
          "The two small semicircular indentations skirting the pole at $z=1$ (one on each edge) each contribute a half-residue $-\\pi i\\,\\mathrm{Res}$. With $\\mathrm{Res}_{z=1}f=-1$ on the top sheet and $-e^{2\\pi i s}$ on the bottom sheet, the indentations together contribute $-\\pi i\\big[(-1)+(-e^{2\\pi i s})\\big]=\\pi i\\big(1+e^{2\\pi i s}\\big)$.",
          "Since the closed keyhole encloses no pole (it is indented past $z=1$), the total is $0$: the edges plus indentations give $\\big(1-e^{2\\pi i s}\\big)\\mathrm{PV}+\\pi i\\big(1+e^{2\\pi i s}\\big)=0$, hence $\\big(e^{2\\pi i s}-1\\big)\\mathrm{PV}=\\pi i\\big(1+e^{2\\pi i s}\\big)$.",
          "Solve: $\\mathrm{PV}=\\pi i\\,\\dfrac{1+e^{2\\pi i s}}{e^{2\\pi i s}-1}=\\pi i\\,\\dfrac{e^{-\\pi i s}+e^{\\pi i s}}{e^{\\pi i s}-e^{-\\pi i s}}=\\pi i\\,\\dfrac{2\\cos\\pi s}{2i\\sin\\pi s}=\\pi\\cot(\\pi s)$. With $s=\\tfrac13$ this is $\\pi\\cot\\tfrac{\\pi}{3}=\\boxed{\\dfrac{\\pi}{\\sqrt3}}$."
        ]
      },
      {
        "name": "Symmetrize across the pole, then reduce",
        "steps": [
          "Split off the singular pieces: on $[0,1-\\varepsilon]$ and $[1+\\varepsilon,\\infty)$, the logarithmic divergences of $\\int \\dfrac{dx}{1-x}$ are $\\ln\\tfrac1\\varepsilon$ with opposite signs and cancel as $\\varepsilon\\to0$, so the PV exists.",
          "Substitute $x\\mapsto 1/u$ on the tail $\\int_{1+\\varepsilon}^\\infty$: with $x=1/u$, $\\dfrac{x^{-2/3}}{1-x}\\,dx=\\dfrac{u^{2/3}}{1-1/u}\\cdot\\big(-\\tfrac{du}{u^2}\\big)=\\dfrac{u^{-1/3}}{u-1}\\,du$, mapping the tail to $\\int_0^{1/(1+\\varepsilon)}\\dfrac{u^{-1/3}}{u-1}\\,du$.",
          "Combining the head with the mapped tail collapses everything onto the single interval $[0,1]$ in the family $\\int_0^1 \\dfrac{x^{s-1}-x^{-s}}{1-x}\\,dx$ (with $s=\\tfrac13$, so $x^{s-1}=x^{-2/3}$ and $x^{-s}=x^{-1/3}$). This integral is exactly the difference of two Gauss digamma integrals $\\int_0^1\\dfrac{1-x^{a-1}}{1-x}\\,dx=\\psi(a)+\\gamma$, giving $\\big[\\psi(1-s)+\\gamma\\big]-\\big[\\psi(s)+\\gamma\\big]=\\psi(1-s)-\\psi(s)$.",
          "Apply the digamma reflection formula $\\psi(1-s)-\\psi(s)=\\pi\\cot(\\pi s)$. With $s=\\tfrac13$: $\\mathrm{PV}=\\pi\\cot\\tfrac{\\pi}{3}=\\boxed{\\dfrac{\\pi}{\\sqrt3}}$."
        ]
      }
    ],
    "remark": "Insight: a simple pole inside the range of integration is not a death sentence — it is an invitation to take a principal value. Because the divergence is logarithmic and symmetric, the cutoffs cancel cleanly, and the surviving finite answer $\\pi\\cot(\\pi s)$ is exactly the cotangent that the digamma reflection formula $\\psi(1-s)-\\psi(s)=\\pi\\cot\\pi s$ predicts. The careful sign in the keyhole assembly matters: the bottom edge picks up the phase $e^{2\\pi i s}$, and it is $(e^{2\\pi i s}-1)\\,\\mathrm{PV}=\\pi i(1+e^{2\\pi i s})$ — not $(1-e^{2\\pi i s})\\,\\mathrm{PV}$ — that yields the $+\\pi\\cot(\\pi s)$ with the correct sign."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Reflected Weight",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "king-property",
      "reflection",
      "substitution",
      "arctan"
    ],
    "statement": "Evaluate \\[ I=\\int_{0}^{\\pi}\\frac{x\\sin x}{1+\\cos^{2}x}\\,dx. \\] (Instruments fused: the king-property reflection $x\\mapsto\\pi-x$ together with the substitution $u=\\cos x$ feeding an $\\arctan$ antiderivative.)",
    "answer": "$\\displaystyle I=\\frac{\\pi^{2}}{4}$",
    "trap": "Attacking $\\int x\\sin x/(1+\\cos^2x)\\,dx$ directly by integration by parts. The $\\sin x/(1+\\cos^2x)$ factor integrates to $-\\arctan(\\cos x)$, but then $\\int_0^\\pi \\arctan(\\cos x)\\,dx$ must be recognized as $0$ (odd about $x=\\tfrac{\\pi}{2}$) and the IBP boundary term handled carefully — it reaches the same answer but is far slower and more error-prone than first symmetrizing.",
    "solutions": [
      {
        "name": "King property then arctan",
        "steps": [
          "Write $I=\\int_0^\\pi f(x)\\,dx$ with $f(x)=\\dfrac{x\\sin x}{1+\\cos^2x}$ and apply $x\\mapsto\\pi-x$: since $\\sin(\\pi-x)=\\sin x$ and $\\cos^2(\\pi-x)=\\cos^2x$, we get $I=\\int_0^\\pi\\dfrac{(\\pi-x)\\sin x}{1+\\cos^2x}\\,dx$.",
          "Add the two forms: $2I=\\pi\\int_0^\\pi\\dfrac{\\sin x}{1+\\cos^2x}\\,dx$, so $I=\\dfrac{\\pi}{2}\\int_0^\\pi\\dfrac{\\sin x}{1+\\cos^2x}\\,dx$.",
          "Substitute $u=\\cos x$, $du=-\\sin x\\,dx$, limits $1\\to-1$: $\\int_0^\\pi\\dfrac{\\sin x}{1+\\cos^2x}\\,dx=\\int_{-1}^{1}\\dfrac{du}{1+u^2}=\\big[\\arctan u\\big]_{-1}^{1}=\\dfrac{\\pi}{2}$.",
          "Hence $I=\\dfrac{\\pi}{2}\\cdot\\dfrac{\\pi}{2}=\\boxed{\\dfrac{\\pi^{2}}{4}}$."
        ]
      },
      {
        "name": "Symmetry split of the reduced integral",
        "steps": [
          "The reflection reduces $I$ to $\\frac{\\pi}{2}J$ with $J=\\int_0^\\pi\\frac{\\sin x}{1+\\cos^2x}\\,dx$, whose integrand is symmetric under $x\\mapsto\\pi-x$.",
          "By that symmetry, $J=2\\int_0^{\\pi/2}\\frac{\\sin x}{1+\\cos^2x}\\,dx$; substituting $u=\\cos x$ gives $J=2\\int_0^1\\frac{du}{1+u^2}=2\\cdot\\frac{\\pi}{4}=\\frac{\\pi}{2}$.",
          "Therefore $I=\\frac{\\pi}{2}\\cdot\\frac{\\pi}{2}=\\boxed{\\dfrac{\\pi^2}{4}}$, matching the numerical value $2.46740\\ldots=\\pi^2/4$."
        ]
      }
    ],
    "remark": "Insight: the reflection trick works precisely because the awkward weight $x$ is the only part that is not symmetric under $x\\mapsto\\pi-x$; averaging it away converts a transcendental weighted integral into a one-line $\\arctan$."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "A Sum Disguised as Sixth Powers",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "riemann-sum",
      "limit",
      "wallis",
      "reduction"
    ],
    "statement": "Evaluate \\[ L=\\lim_{n\\to\\infty}\\frac{\\pi}{2n}\\sum_{k=1}^{n}\\sin^{6}\\!\\Big(\\frac{k\\pi}{2n}\\Big). \\] (Instruments fused: recognising a Riemann sum as a definite integral, then finishing with the Wallis reduction formula.)",
    "answer": "$\\displaystyle L=\\frac{5\\pi}{32}$",
    "trap": "Trying to sum $\\sum\\sin^6(k\\pi/2n)$ in closed form via power-reduction and telescoping before taking the limit. The finite trigonometric sum carries lower-order correction terms that are tedious; recognising the prefactor $\\frac{\\pi}{2n}$ as the mesh width and passing straight to the integral avoids them entirely.",
    "solutions": [
      {
        "name": "Riemann sum then Wallis",
        "steps": [
          "With mesh $\\Delta x=\\frac{\\pi}{2n}$ and sample points $x_k=\\frac{k\\pi}{2n}\\in(0,\\frac{\\pi}{2}]$, the expression is a right Riemann sum for $\\sin^6 x$ on $[0,\\frac{\\pi}{2}]$, so $L=\\int_0^{\\pi/2}\\sin^6x\\,dx$.",
          "Apply Wallis' reduction for even powers: $\\int_0^{\\pi/2}\\sin^{2m}x\\,dx=\\dfrac{(2m-1)!!}{(2m)!!}\\cdot\\dfrac{\\pi}{2}$.",
          "For $2m=6$: $\\dfrac{5!!}{6!!}=\\dfrac{5\\cdot3\\cdot1}{6\\cdot4\\cdot2}=\\dfrac{15}{48}=\\dfrac{5}{16}$, so the integral equals $\\dfrac{5}{16}\\cdot\\dfrac{\\pi}{2}=\\boxed{\\dfrac{5\\pi}{32}}$."
        ]
      },
      {
        "name": "Power-reduction of the integrand",
        "steps": [
          "Use the multiple-angle identity $\\sin^6x=\\frac{1}{32}\\big(10-15\\cos2x+6\\cos4x-\\cos6x\\big)$.",
          "Then $L=\\int_0^{\\pi/2}\\sin^6x\\,dx=\\frac{1}{32}\\Big[10x-\\tfrac{15}{2}\\sin2x+\\tfrac{6}{4}\\sin4x-\\tfrac{1}{6}\\sin6x\\Big]_0^{\\pi/2}$.",
          "Every sine term vanishes at both $0$ and $\\frac{\\pi}{2}$, leaving $\\frac{1}{32}\\cdot 10\\cdot\\frac{\\pi}{2}=\\frac{1}{32}\\cdot5\\pi=\\boxed{\\dfrac{5\\pi}{32}}$, matching the Wallis value $0.490873\\ldots$."
        ]
      }
    ],
    "remark": "Insight: the deliberately placed factor $\\frac{\\pi}{2n}$ is the tell — it is exactly the width of $n$ subintervals of $[0,\\frac{\\pi}{2}]$, signalling that the sum is a Riemann sum and that Wallis, not finite-sum algebra, should finish the job."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "Where the Erf Function Dips",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "leibniz-rule",
      "extremum",
      "sign-analysis",
      "gaussian"
    ],
    "statement": "Let \\[ F(x)=\\int_{0}^{\\,x^{2}-4x} e^{-t^{2}}\\,dt,\\qquad x\\in\\mathbb{R}. \\] Determine the location and value of the global extremum of $F$, classify it, and decide whether $F$ has a global maximum. (Instruments fused: Leibniz differentiation of a variable-limit integral and a sign analysis of the derivative.)",
    "answer": "$F$ attains a strict global minimum at $x=2$, equal to $\\displaystyle F(2)=-\\frac{\\sqrt{\\pi}}{2}\\,\\mathrm{erf}(4)\\approx-0.886227$. It is the only critical point. $F$ has no global maximum: $F$ is bounded above by $\\frac{\\sqrt\\pi}{2}$, which it approaches as $x\\to\\pm\\infty$ but never attains (so the supremum $\\frac{\\sqrt\\pi}{2}$ is not a maximum).",
    "trap": "Setting the integrand $e^{-t^2}$ to zero to find critical points. The integrand never vanishes; by Leibniz $F'(x)=e^{-(x^2-4x)^2}\\cdot(2x-4)$, so the critical points come from the upper-limit's derivative $g'(x)=2x-4$, not from the integrand. A second trap is concluding ``no maximum because $F$ is unbounded above'' — $F$ is in fact bounded above by $\\tfrac{\\sqrt\\pi}{2}$; the maximum fails only because that bound is never reached.",
    "solutions": [
      {
        "name": "Leibniz then sign of g'",
        "steps": [
          "By the Leibniz rule with $g(x)=x^2-4x$: $F'(x)=e^{-g(x)^2}\\,g'(x)=e^{-(x^2-4x)^2}(2x-4)$.",
          "Since $e^{-(\\cdot)^2}>0$ always, the sign of $F'$ equals the sign of $2x-4$: negative for $x<2$, positive for $x>2$. Thus $F$ strictly decreases on $(-\\infty,2)$ and strictly increases on $(2,\\infty)$, giving a strict global minimum at $x=2$.",
          "At $x=2$, $g(2)=4-8=-4$, so $F(2)=\\int_0^{-4}e^{-t^2}\\,dt=-\\int_0^4 e^{-t^2}\\,dt=-\\dfrac{\\sqrt{\\pi}}{2}\\,\\mathrm{erf}(4)\\approx-0.886227$.",
          "For the upper extreme: as $x\\to\\pm\\infty$, $g(x)=x^2-4x\\to+\\infty$, so $F(x)\\to\\int_0^{\\infty}e^{-t^2}\\,dt=\\dfrac{\\sqrt\\pi}{2}$. But for every finite $x$, $\\dfrac{\\sqrt\\pi}{2}-F(x)=\\dfrac{\\sqrt\\pi}{2}\\,\\mathrm{erfc}\\!\\big(g(x)\\big)>0$, so $\\dfrac{\\sqrt\\pi}{2}$ is a supremum that is never attained. Hence $F$ is bounded but has no global maximum; the only extremum is the minimum $\\boxed{F(2)=-\\dfrac{\\sqrt{\\pi}}{2}\\,\\mathrm{erf}(4)}$."
        ]
      },
      {
        "name": "Composition viewpoint",
        "steps": [
          "Write $F=H\\circ g$ where $H(u)=\\int_0^u e^{-t^2}\\,dt$ is strictly increasing (since $H'(u)=e^{-u^2}>0$) and odd, with $H(\\pm\\infty)=\\pm\\dfrac{\\sqrt\\pi}{2}$.",
          "A strictly increasing $H$ preserves the location of extrema of the inner $g(x)=x^2-4x$, whose unique global minimum is at the vertex $x=2$ (upward parabola), with $g(2)=-4$. Therefore $F$ has its global minimum at $x=2$ with value $H(-4)=-\\dfrac{\\sqrt{\\pi}}{2}\\,\\mathrm{erf}(4)\\approx-0.886227$; the second-derivative check $F''(2)=2e^{-16}>0$ confirms a minimum.",
          "Since $g$ ranges over $[-4,\\infty)$ as $x$ ranges over $\\mathbb{R}$, $F=H(g)$ ranges over $\\big[H(-4),\\,\\tfrac{\\sqrt\\pi}{2}\\big)$. The right endpoint $\\tfrac{\\sqrt\\pi}{2}=\\lim_{u\\to\\infty}H(u)$ is approached but not achieved, so $F$ has a global minimum at $x=2$ and no global maximum. $\\boxed{x=2,\\ F=-\\tfrac{\\sqrt\\pi}{2}\\,\\mathrm{erf}(4),\\ \\sup F=\\tfrac{\\sqrt\\pi}{2}\\text{ (unattained)}}$"
        ]
      }
    ],
    "remark": "Insight: composing the strictly monotone, bounded integral $H(u)=\\int_0^u e^{-t^2}\\,dt$ with an inner function transfers the extremum problem entirely to the inner function. Leibniz merely confirms what monotonicity guarantees: $g$ has a minimum but no maximum, so $F$ inherits a minimum and, because $H$ is bounded with a horizontal asymptote, only a supremum (never a maximum) at the top."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Fractional Tail of the Reciprocal",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "fractional-part",
      "substitution",
      "euler-gamma",
      "integral-inequality"
    ],
    "statement": "For $\\{u\\}=u-\\lfloor u\\rfloor$ the fractional part, evaluate \\[ J=\\int_{0}^{1}\\Big\\{\\frac{1}{x}\\Big\\}\\,dx. \\] (Instruments fused: a periodic/fractional-part integrand tamed by the substitution $u=1/x$, then bounded and summed via an integral comparison defining the Euler–Mascheroni constant.)",
    "answer": "$\\displaystyle J=1-\\gamma$, where $\\gamma$ is the Euler–Mascheroni constant.",
    "trap": "Treating $\\{1/x\\}$ as if it were smooth and writing $\\int_0^1\\{1/x\\}dx\\approx\\int_0^1(1/x-\\text{const})$. Near $x=0$ the integrand oscillates between $0$ and $1$ infinitely often; only after $u=1/x$ does the structure become a clean sum over unit intervals.",
    "solutions": [
      {
        "name": "Substitution u=1/x and telescoping",
        "steps": [
          "Let $u=1/x$, $dx=-u^{-2}du$; as $x:0^+\\to1$, $u:\\infty\\to1$, giving $J=\\int_1^{\\infty}\\dfrac{\\{u\\}}{u^2}\\,du$.",
          "Split over unit intervals: $\\int_n^{n+1}\\dfrac{u-n}{u^2}\\,du=\\big[\\ln u+\\tfrac{n}{u}\\big]_n^{n+1}=\\ln\\!\\frac{n+1}{n}+\\Big(\\frac{n}{n+1}-1\\Big)=\\ln\\!\\frac{n+1}{n}-\\frac{1}{n+1}$.",
          "Sum to $N$: $\\sum_{n=1}^{N}\\big(\\ln\\frac{n+1}{n}-\\frac{1}{n+1}\\big)=\\ln(N+1)-(H_{N+1}-1)$, where $H_m=\\sum_{k=1}^m 1/k$.",
          "As $N\\to\\infty$, $H_{N+1}-\\ln(N+1)\\to\\gamma$, so $J=1-\\gamma=\\boxed{1-\\gamma\\approx0.422784}$."
        ]
      },
      {
        "name": "Euler's defining limit",
        "steps": [
          "From $J=\\int_1^\\infty\\frac{\\{u\\}}{u^2}du=\\int_1^\\infty\\frac{u-\\lfloor u\\rfloor}{u^2}du=\\int_1^\\infty\\frac{du}{u}-\\int_1^\\infty\\frac{\\lfloor u\\rfloor}{u^2}du$ understood as a regularized difference.",
          "Use the classical identity $\\int_1^\\infty\\frac{\\{u\\}}{u^2}\\,du=1-\\gamma$, equivalent to $\\gamma=\\lim_{N}\\big(H_N-\\ln N\\big)$.",
          "Hence $J=\\boxed{1-\\gamma}$; numerically $1-0.5772157=0.4227843$, matching direct convergent summation."
        ]
      }
    ],
    "remark": "Insight: the substitution $u=1/x$ turns a wild oscillation near the origin into a tame $\\{u\\}/u^2$ tail, and the resulting $\\ln(N+1)-H_{N+1}+1$ is the very expression whose limit \\emph{defines} $\\gamma$."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Logarithm of the Sine, Twice Over",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "king-property",
      "reflection",
      "famous-integral",
      "cross-check"
    ],
    "statement": "Evaluate \\[ S=\\int_{0}^{\\pi/2}\\ln(\\sin x)\\,dx \\] and confirm the value by a second independent method. (Instruments fused: the king-property reflection $x\\mapsto\\frac{\\pi}{2}-x$, a duplication/reduction step, and a Fourier-series cross-check of this famous integral.)",
    "answer": "$\\displaystyle S=-\\frac{\\pi}{2}\\ln 2$",
    "trap": "Expanding $\\ln\\sin x$ and integrating term-by-term carelessly near $x=0$, where $\\ln\\sin x\\to-\\infty$. The integral converges (the singularity is logarithmic and integrable), but a naive series swap without justification can lose the constant $-\\ln 2$ and collapse the answer to $0$.",
    "solutions": [
      {
        "name": "Reflection and self-duplication",
        "steps": [
          "By $x\\mapsto\\frac{\\pi}{2}-x$, $S=\\int_0^{\\pi/2}\\ln(\\cos x)\\,dx$, so $2S=\\int_0^{\\pi/2}\\ln(\\sin x\\cos x)\\,dx=\\int_0^{\\pi/2}\\ln\\!\\frac{\\sin 2x}{2}\\,dx$.",
          "Thus $2S=\\int_0^{\\pi/2}\\ln(\\sin 2x)\\,dx-\\frac{\\pi}{2}\\ln 2$. Substitute $t=2x$: $\\int_0^{\\pi/2}\\ln(\\sin2x)\\,dx=\\frac12\\int_0^{\\pi}\\ln(\\sin t)\\,dt=\\int_0^{\\pi/2}\\ln\\sin t\\,dt=S$ (using symmetry of $\\sin$ about $\\frac\\pi2$).",
          "Hence $2S=S-\\frac{\\pi}{2}\\ln 2$, giving $S=-\\frac{\\pi}{2}\\ln 2=\\boxed{-\\dfrac{\\pi}{2}\\ln 2}$."
        ]
      },
      {
        "name": "Fourier-series cross-check",
        "steps": [
          "Use $\\ln(\\sin x)=-\\ln 2-\\sum_{k=1}^{\\infty}\\frac{\\cos 2kx}{k}$ for $0<x<\\pi$.",
          "Integrate over $[0,\\frac{\\pi}{2}]$: $\\int_0^{\\pi/2}\\cos 2kx\\,dx=\\frac{\\sin k\\pi}{2k}=0$ for every integer $k$.",
          "Only the constant survives: $S=-\\frac{\\pi}{2}\\ln 2=\\boxed{-\\dfrac{\\pi}{2}\\ln 2}\\approx-1.0887930$, agreeing with the reflection method."
        ]
      }
    ],
    "remark": "Insight: two utterly different mechanisms — a functional equation from reflection, and the vanishing of every Fourier coefficient on $[0,\\frac\\pi2]$ — both isolate the same single constant $-\\frac\\pi2\\ln2$, the hallmark of a robustly correct value."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Invariant Quarter-Circle",
    "difficulty": 5,
    "task": "Prove that",
    "tags": [
      "king-property",
      "reflection",
      "parameter-independence",
      "symmetry"
    ],
    "statement": "Let $n>0$ be any real number. Prove that \\[ I_n=\\int_{0}^{\\pi/2}\\frac{\\cos^{n}x}{\\cos^{n}x+\\sin^{n}x}\\,dx \\] is independent of $n$, and find its value. (Instruments fused: the king-property reflection $x\\mapsto\\frac{\\pi}{2}-x$ producing a complementary integrand whose sum collapses, defeating an apparent dependence on the exponent $n$.)",
    "answer": "$\\displaystyle I_n=\\frac{\\pi}{4}$ for every $n>0$.",
    "trap": "Believing the answer must depend on $n$ and attempting to evaluate the integral for each $n$ via a reduction formula in the exponent. The exponent dependence is illusory; reflection makes it cancel exactly, so any per-$n$ reduction is wasted effort.",
    "solutions": [
      {
        "name": "King property pairing",
        "steps": [
          "Apply $x\\mapsto\\frac{\\pi}{2}-x$, which swaps $\\sin\\leftrightarrow\\cos$: $I_n=\\int_0^{\\pi/2}\\dfrac{\\sin^{n}x}{\\sin^{n}x+\\cos^{n}x}\\,dx$.",
          "Add this to the original: $2I_n=\\int_0^{\\pi/2}\\dfrac{\\cos^nx+\\sin^nx}{\\cos^nx+\\sin^nx}\\,dx=\\int_0^{\\pi/2}1\\,dx=\\frac{\\pi}{2}$.",
          "Therefore $I_n=\\frac{\\pi}{4}$ for all $n>0$, independent of $n$. $\\boxed{I_n=\\dfrac{\\pi}{4}}$"
        ]
      },
      {
        "name": "Midpoint symmetry of the integrand",
        "steps": [
          "Let $\\phi(x)=\\dfrac{\\cos^nx}{\\cos^nx+\\sin^nx}$. The reflection shows $\\phi(x)+\\phi(\\frac{\\pi}{2}-x)=1$ identically.",
          "A function whose graph is point-symmetric about $(\\frac{\\pi}{4},\\frac12)$ integrates over $[0,\\frac{\\pi}{2}]$ to (length)$\\times\\frac12=\\frac{\\pi}{2}\\cdot\\frac12=\\frac{\\pi}{4}$.",
          "Hence $I_n=\\boxed{\\dfrac{\\pi}{4}}$ regardless of $n$; numerically confirmed at $n=\\tfrac12,1,2,3,7$ all giving $0.785398$."
        ]
      }
    ],
    "remark": "Insight: the integrand and its reflection are complementary probabilities summing to $1$, so the integral is forced to the midpoint value $\\frac\\pi4$ no matter how the exponent distorts the shape."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Central Binomial's Asymptotic Whisper",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "limit",
      "wallis",
      "central-binomial",
      "reduction"
    ],
    "statement": "Evaluate \\[ \\Lambda=\\lim_{n\\to\\infty}\\sqrt{n}\\;\\frac{1}{4^{n}}\\binom{2n}{n}. \\] (Instruments fused: recognising the central binomial coefficient as a Wallis ratio $\\frac{(2n-1)!!}{(2n)!!}$ and applying the Wallis product / reduction to extract its asymptotics.)",
    "answer": "$\\displaystyle \\Lambda=\\frac{1}{\\sqrt{\\pi}}$",
    "trap": "Applying Stirling to all three factorials but dropping the $\\sqrt{2\\pi n}$ prefactors as 'lower order'. Those very prefactors carry the $\\sqrt{\\pi}$; cancelling them prematurely turns $\\binom{2n}{n}$ into $4^{n}$, so $\\sqrt{n}\\cdot\\tfrac{1}{4^n}\\binom{2n}{n}\\to\\sqrt{n}\\to\\infty$ instead of converging.",
    "solutions": [
      {
        "name": "Wallis-ratio identity",
        "steps": [
          "Note $\\dfrac{1}{4^n}\\binom{2n}{n}=\\dfrac{(2n)!}{4^n (n!)^2}=\\dfrac{(2n-1)!!}{(2n)!!}$, the Wallis double-factorial ratio (verified exactly: at $n=8$ both equal $0.196380\\ldots$).",
          "The Wallis product gives $\\dfrac{(2n)!!}{(2n-1)!!}\\sim\\sqrt{\\pi n}$ as $n\\to\\infty$, equivalently $\\dfrac{(2n-1)!!}{(2n)!!}\\sim\\dfrac{1}{\\sqrt{\\pi n}}$.",
          "Therefore $\\sqrt{n}\\cdot\\dfrac{(2n-1)!!}{(2n)!!}\\sim\\sqrt{n}\\cdot\\dfrac{1}{\\sqrt{\\pi n}}=\\dfrac{1}{\\sqrt{\\pi}}$, so $\\Lambda=\\boxed{\\dfrac{1}{\\sqrt{\\pi}}}$."
        ]
      },
      {
        "name": "Stirling kept honest",
        "steps": [
          "By Stirling $n!\\sim\\sqrt{2\\pi n}\\,(n/e)^n$, so $\\binom{2n}{n}=\\dfrac{(2n)!}{(n!)^2}\\sim\\dfrac{\\sqrt{4\\pi n}\\,(2n/e)^{2n}}{2\\pi n\\,(n/e)^{2n}}=\\dfrac{4^n}{\\sqrt{\\pi n}}$ — the surviving $\\sqrt{\\pi n}$ is exactly the prefactor the trap discards.",
          "Then $\\dfrac{1}{4^n}\\binom{2n}{n}\\sim\\dfrac{1}{\\sqrt{\\pi n}}$, and multiplying by $\\sqrt n$ gives $\\dfrac{1}{\\sqrt\\pi}$.",
          "Hence $\\Lambda=\\boxed{\\dfrac{1}{\\sqrt{\\pi}}}\\approx0.564190$, matching the numeric trend $0.55718,\\,0.56348,\\,0.564189\\ldots$ at $n=10,100,10^6$."
        ]
      }
    ],
    "remark": "Insight: the central binomial coefficient is the Wallis reduction in disguise — the same $\\frac{(2n-1)!!}{(2n)!!}$ that governs $\\int_0^{\\pi/2}\\sin^{2n}\\theta\\,d\\theta$ — so its $1/\\sqrt{\\pi n}$ decay is a direct echo of the Wallis product. The $\\sqrt{n}$ factor is precisely calibrated to cancel that decay and isolate the constant $1/\\sqrt{\\pi}$."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Best-Placed Gaussian Window",
    "difficulty": 5,
    "task": "Find",
    "tags": [
      "leibniz-rule",
      "extremum",
      "sign-analysis",
      "gaussian",
      "window"
    ],
    "statement": "Consider the sliding window \\[ \\Phi(x)=\\int_{x}^{\\,x+1} e^{-t^{2}}\\,dt. \\] Find the value of $x$ maximising $\\Phi$, and the maximum value. (Instruments fused: Leibniz differentiation with two moving limits, a sign analysis pinning the unique critical point, and the evenness of the Gaussian.)",
    "answer": "The maximum occurs at $x=-\\tfrac12$, with value $\\displaystyle \\Phi\\!\\left(-\\tfrac12\\right)=\\int_{-1/2}^{1/2}e^{-t^2}\\,dt=\\sqrt{\\pi}\\,\\mathrm{erf}\\!\\left(\\tfrac12\\right)\\approx0.922562$.",
    "trap": "Maximising by demanding the integrand be largest at an endpoint, e.g. setting $x=0$ so the window starts at the Gaussian's peak. The window of fixed width $1$ captures the most mass when centered on the peak, i.e. straddling $t=0$, not when one endpoint sits at it. Indeed $\\Phi(0)=\\int_0^1 e^{-t^2}\\,dt\\approx0.746824<0.922562$.",
    "solutions": [
      {
        "name": "Leibniz with two moving limits",
        "steps": [
          "By Leibniz, $\\Phi'(x)=e^{-(x+1)^2}\\cdot1-e^{-x^2}\\cdot1=e^{-(x+1)^2}-e^{-x^2}$.",
          "Set $\\Phi'(x)=0$: $e^{-(x+1)^2}=e^{-x^2}\\iff (x+1)^2=x^2\\iff 2x+1=0\\iff x=-\\tfrac12$.",
          "Sign check: for $x<-\\tfrac12$, $|x+1|<|x|$ so $e^{-(x+1)^2}>e^{-x^2}$, giving $\\Phi'>0$; for $x>-\\tfrac12$, $\\Phi'<0$. Thus $x=-\\tfrac12$ is the global maximum.",
          "Value: $\\Phi(-\\tfrac12)=\\int_{-1/2}^{1/2}e^{-t^2}\\,dt=\\sqrt{\\pi}\\,\\mathrm{erf}(\\tfrac12)=\\boxed{\\sqrt{\\pi}\\,\\mathrm{erf}(\\tfrac12)\\approx0.922562}$."
        ]
      },
      {
        "name": "Symmetry of the Gaussian",
        "steps": [
          "Since $e^{-t^2}$ is even and unimodal with peak at $0$, the length-$1$ window collecting maximal area is the one centred at $0$, i.e. $[-\\tfrac12,\\tfrac12]$, forcing $x=-\\tfrac12$.",
          "Any shift $\\delta\\neq0$ replaces a slab of mass near $-\\tfrac12+\\delta$ by one near $+\\tfrac12+\\delta$; by symmetry and unimodality the trade is strictly losing, confirming the centred window is optimal.",
          "Maximum value $\\int_{-1/2}^{1/2}e^{-t^2}\\,dt=\\sqrt{\\pi}\\,\\mathrm{erf}(\\tfrac12)=\\boxed{\\sqrt{\\pi}\\,\\mathrm{erf}(\\tfrac12)}$, numerically $0.922562$."
        ]
      }
    ],
    "remark": "Insight: for a fixed-width window over a unimodal symmetric bump, the calculus condition $\\Phi'=0$ is just the analytic statement that the window should be centred on the peak — the endpoint heights must match."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Weighted Odd Sine",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "king-property",
      "reflection",
      "wallis",
      "reduction",
      "odd-power"
    ],
    "statement": "Evaluate \\[ K=\\int_{0}^{\\pi} x\\,\\sin^{5}x\\,dx. \\] (Instruments fused: the king-property reflection $x\\mapsto\\pi-x$ to strip the weight $x$, then the Wallis reduction for the odd power $\\sin^5$.)",
    "answer": "$\\displaystyle K=\\frac{8\\pi}{15}$",
    "trap": "Attacking $x\\sin^5x$ by repeated integration by parts directly, expanding $\\sin^5x$ into multiple-angle sines first. This works but spawns several IBP boundary terms; reflecting first removes the weight $x$ in one stroke and leaves a pure Wallis integral. (A worse trap: forgetting the weight is odd-about-$\\tfrac\\pi2$ and concluding $K=0$.)",
    "solutions": [
      {
        "name": "Reflection then Wallis",
        "steps": [
          "Apply $x\\mapsto\\pi-x$; since $\\sin^5(\\pi-x)=\\sin^5x$, we get $K=\\int_0^\\pi(\\pi-x)\\sin^5x\\,dx$.",
          "Adding the two forms: $2K=\\pi\\int_0^\\pi\\sin^5x\\,dx$, hence $K=\\frac{\\pi}{2}\\int_0^\\pi\\sin^5x\\,dx$.",
          "By symmetry about $\\tfrac\\pi2$, $\\int_0^\\pi\\sin^5x\\,dx=2\\int_0^{\\pi/2}\\sin^5x\\,dx=2\\cdot\\frac{4!!}{5!!}=2\\cdot\\frac{4\\cdot2}{5\\cdot3\\cdot1}=2\\cdot\\frac{8}{15}=\\frac{16}{15}$.",
          "Therefore $K=\\frac{\\pi}{2}\\cdot\\frac{16}{15}=\\boxed{\\dfrac{8\\pi}{15}}$."
        ]
      },
      {
        "name": "Direct expansion check",
        "steps": [
          "Use the multiple-angle identity $\\sin^5x=\\frac{1}{16}\\big(10\\sin x-5\\sin 3x+\\sin 5x\\big)$.",
          "With $\\int_0^\\pi\\sin kx\\,dx=\\frac{1-\\cos k\\pi}{k}=\\frac{2}{k}$ for odd $k$ (so $2,\\tfrac23,\\tfrac25$ for $k=1,3,5$): $\\int_0^\\pi\\sin^5x\\,dx=\\frac{1}{16}\\big(10\\cdot2-5\\cdot\\tfrac{2}{3}+\\tfrac{2}{5}\\big)=\\frac{1}{16}\\big(20-\\tfrac{10}{3}+\\tfrac{2}{5}\\big)=\\frac{16}{15}$.",
          "Feeding this into $K=\\frac{\\pi}{2}\\int_0^\\pi\\sin^5x\\,dx$ from the reflection step gives $K=\\frac{\\pi}{2}\\cdot\\frac{16}{15}=\\boxed{\\dfrac{8\\pi}{15}}\\approx1.675516$."
        ]
      }
    ],
    "remark": "Insight: reflection converts a weighted integral $\\int_0^\\pi x\\,f(x)\\,dx$ with $f$ symmetric about $\\tfrac\\pi2$ into $\\frac\\pi2\\int_0^\\pi f$, after which the unweighted $\\int\\sin^5$ is pure Wallis — two classical instruments meeting cleanly. The odd power makes $\\int_0^\\pi\\sin^5$ nonzero (it would vanish only for an odd function about $\\tfrac\\pi2$, which $\\sin^5$ is not)."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Capstone: x-squared Meets the Cotangent",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "integration-by-parts",
      "fourier-series",
      "zeta-3",
      "ln-sin",
      "reduction"
    ],
    "statement": "Evaluate \\[ M=\\int_{0}^{\\pi/2} x^{2}\\cot x\\,dx. \\] (Instruments fused: integration by parts reducing $x^2\\cot x$ to $\\ln\\sin x$, the Fourier series of $\\ln\\sin x$ as a reduction, and the resulting Euler sums producing $\\zeta(3)$ — a genuine three-instrument capstone.)",
    "answer": "$\\displaystyle M=\\frac{\\pi^{2}}{4}\\ln 2-\\frac{7}{8}\\,\\zeta(3)$",
    "trap": "Trying to integrate $x^2\\cot x$ by parts the 'wrong way', differentiating $\\cot x$ and integrating $x^2$. That escalates the power of $x$ and never terminates; one must integrate $\\cot x$ to $\\ln\\sin x$ and differentiate $x^2$.",
    "solutions": [
      {
        "name": "IBP into ln sin, then Fourier",
        "steps": [
          "Integrate by parts with $u=x^2$, $dv=\\cot x\\,dx$, so $v=\\ln\\sin x$: $M=\\big[x^2\\ln\\sin x\\big]_0^{\\pi/2}-2\\int_0^{\\pi/2}x\\ln\\sin x\\,dx$. The boundary term vanishes at both ends, so $M=-2\\int_0^{\\pi/2}x\\ln\\sin x\\,dx$.",
          "Insert $\\ln\\sin x=-\\ln2-\\sum_{k\\ge1}\\frac{\\cos2kx}{k}$: $M=-2\\Big(-\\ln2\\int_0^{\\pi/2}x\\,dx-\\sum_{k\\ge1}\\frac1k\\int_0^{\\pi/2}x\\cos2kx\\,dx\\Big)$.",
          "Compute pieces: $\\int_0^{\\pi/2}x\\,dx=\\frac{\\pi^2}{8}$ and $\\int_0^{\\pi/2}x\\cos2kx\\,dx=\\frac{\\cos k\\pi-1}{4k^2}=\\frac{(-1)^k-1}{4k^2}$ (nonzero only for odd $k$, equal to $-\\frac{1}{2k^2}$).",
          "Thus $M=2\\ln2\\cdot\\frac{\\pi^2}{8}+2\\sum_{k\\,\\mathrm{odd}}\\frac{1}{k}\\cdot\\big(-\\frac{1}{2k^2}\\big)=\\frac{\\pi^2}{4}\\ln2-\\sum_{k\\,\\mathrm{odd}}\\frac{1}{k^3}=\\frac{\\pi^2}{4}\\ln2-\\frac{7}{8}\\zeta(3)$, since $\\sum_{k\\,\\mathrm{odd}}k^{-3}=(1-2^{-3})\\zeta(3)=\\frac78\\zeta(3)$. $\\boxed{M=\\frac{\\pi^2}{4}\\ln2-\\frac78\\zeta(3)}$"
        ]
      },
      {
        "name": "Via the known x ln sin integral",
        "steps": [
          "It is classical that $\\int_0^{\\pi/2}x\\ln\\sin x\\,dx=\\frac{7}{16}\\zeta(3)-\\frac{\\pi^2}{8}\\ln2$.",
          "From the IBP reduction $M=-2\\int_0^{\\pi/2}x\\ln\\sin x\\,dx$, substitute: $M=-2\\big(\\frac{7}{16}\\zeta(3)-\\frac{\\pi^2}{8}\\ln2\\big)=\\frac{\\pi^2}{4}\\ln2-\\frac{7}{8}\\zeta(3)$.",
          "Numerically $\\frac{\\pi^2}{4}\\ln2-\\frac78\\zeta(3)=1.710\\ldots-1.052\\ldots=0.658472\\ldots$, matching $\\int_0^{\\pi/2}x^2\\cot x\\,dx$. $\\boxed{M=\\frac{\\pi^2}{4}\\ln2-\\frac78\\zeta(3)}$"
        ]
      }
    ],
    "remark": "Insight: three instruments chain perfectly — IBP turns $\\cot$ into $\\ln\\sin$, the $\\ln\\sin$ Fourier series turns the integral into an odd-index Euler sum, and that sum is exactly $\\frac78\\zeta(3)$; the $\\pi^2\\ln2/4$ comes for free from the constant Fourier term."
  }
];
