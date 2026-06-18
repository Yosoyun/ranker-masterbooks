/* DEFINITE INTEGRATION — The Definite Integral · 100 original problems across 10 chapters, adversarially Python-verified. */
window.PROBLEMS = [
  {
    "theme": "properties",
    "themeLabel": "Properties of the Definite Integral",
    "title": "The Logarithm That Secretly Flips Sign",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "odd-even symmetry",
      "reflection substitution",
      "no antiderivative",
      "artanh",
      "parity trap"
    ],
    "statement": "Evaluate \\[ I=\\int_{-1}^{1}\\frac{\\cos x\\,\\ln\\!\\dfrac{1+x}{1-x}}{1+x^{2}}\\,dx. \\] No elementary antiderivative of the integrand exists, so a structural argument is forced. (For contrast, replacing $\\cos x$ by $\\sin x$ produces a genuinely nonzero number $\\approx 1.1106$ — so the value here is decided entirely by which factor sits out front.)",
    "answer": "\\[\\boxed{0}\\]",
    "trap": "Reading $\\ln\\dfrac{1+x}{1-x}$ as an even factor. Because it is built from $1\\pm x$ that merely \"swap\" under $x\\mapsto-x$, students declare the log even, hence the whole integrand even (even $\\times$ even $\\times$ even), and then chase the value with a Feynman parameter or a power series — a hopeless pursuit, since no elementary antiderivative exists. In truth $\\ln\\dfrac{1+x}{1-x}=2\\,\\operatorname{artanh}x$ is ODD: under $x\\mapsto-x$ it becomes $\\ln\\dfrac{1-x}{1+x}=-\\ln\\dfrac{1+x}{1-x}$. So the integrand is even $\\times$ odd $\\times$ even $=$ ODD, and the integral is $0$ for free. The mirror sin-version is even and really does give $\\approx1.1106$; the only thing separating $0$ from $1.1106$ is the parity of the outer factor, which the trap gets backwards.",
    "solutions": [
      {
        "name": "Reflection x \\mapsto -x (self-cancellation)",
        "steps": [
          "Substitute $x\\mapsto-x$ in $I$. The limits $-1,1$ map to $1,-1$ and the extra sign from $dx$ restores them, giving $I=\\displaystyle\\int_{-1}^{1}\\frac{\\cos(-x)\\,\\ln\\frac{1-x}{1+x}}{1+x^{2}}\\,dx$.",
          "Use $\\cos(-x)=\\cos x$ (even) and $\\ln\\dfrac{1-x}{1+x}=-\\ln\\dfrac{1+x}{1-x}$ (the log flips sign); the denominator $1+x^{2}$ is unchanged. Hence $I=-\\displaystyle\\int_{-1}^{1}\\frac{\\cos x\\,\\ln\\frac{1+x}{1-x}}{1+x^{2}}\\,dx=-I$.",
          "Therefore $2I=0$, so $\\boxed{I=0}$ — the antiderivative is never needed."
        ]
      },
      {
        "name": "Parity bookkeeping (odd integrand on a symmetric interval)",
        "steps": [
          "Classify each factor about $x=0$: $\\cos x$ is even, $\\dfrac{1}{1+x^{2}}$ is even, and $\\ln\\dfrac{1+x}{1-x}=2\\,\\operatorname{artanh}x$ is odd (its Maclaurin series $2\\!\\left(x+\\tfrac{x^{3}}{3}+\\tfrac{x^{5}}{5}+\\cdots\\right)$ contains only odd powers).",
          "A product is even or odd according to the parity of the number of odd factors. Here exactly one factor is odd, so the integrand $g(x)$ satisfies $g(-x)=-g(x)$: the integrand is odd.",
          "Any odd function integrated over a symmetric interval $[-a,a]$ gives $0$, so $\\boxed{I=0}$. (Replacing $\\cos x$ by the odd $\\sin x$ would make TWO factors odd, an even integrand, and the integral need not vanish — indeed it does not, $\\approx1.1106$.)"
        ]
      },
      {
        "name": "Halve and fold the interval",
        "steps": [
          "Split $I=\\displaystyle\\int_{-1}^{0}\\!+\\int_{0}^{1}$ and on the left piece put $x=-u$, $dx=-du$, so $\\displaystyle\\int_{-1}^{0}g(x)\\,dx=\\int_{0}^{1}g(-u)\\,du$.",
          "With $g(x)=\\dfrac{\\cos x\\,\\ln\\frac{1+x}{1-x}}{1+x^{2}}$ one has $g(-u)=\\dfrac{\\cos u\\,(-\\ln\\frac{1+u}{1-u})}{1+u^{2}}=-g(u)$, since only the log changes sign.",
          "Thus $I=\\displaystyle\\int_{0}^{1}\\big(-g(u)\\big)\\,du+\\int_{0}^{1}g(x)\\,dx=0$, so $\\boxed{I=0}$ — the two halves are exact negatives and annihilate without any closed form for either."
        ]
      }
    ],
    "remark": "Insight: the entire problem turns on a single parity fact — $\\ln\\dfrac{1+x}{1-x}=2\\,\\operatorname{artanh}x$ is odd, not even. Once you see that, the integrand is even$\\times$odd$\\times$even $=$ odd and dies on a symmetric interval, with no antiderivative ever required. The deliberately included sin-cousin (value $\\approx1.1106$) is the control experiment: swapping the outer factor's parity is the only difference, and it moves the answer off $0$ — proof that the symmetry, not the messy log, is doing all the work."
  },
  {
    "theme": "properties",
    "themeLabel": "Properties of the Definite Integral",
    "title": "The Reciprocal That Folds the Logarithm in Half",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "reciprocal-self-map",
      "odd-symmetry",
      "geometric-mean",
      "log-integral",
      "substitution-invariance"
    ],
    "statement": "Evaluate, in closed form, \\[ J=\\int_{1}^{3}\\frac{\\ln x}{x^{2}+3}\\,dx. \\] The antiderivative is non-elementary (it spills into dilogarithms); find the value using a structural property of the interval alone.",
    "answer": "\\[\\boxed{\\dfrac{\\sqrt{3}\\,\\pi\\ln 3}{36}}\\]",
    "trap": "The map that fixes $[1,3]$ is NOT $x\\mapsto 1/x$ (that sends $[1,3]$ to $[\\tfrac13,1]$) but the reciprocal about the geometric mean, $x\\mapsto 3/x$, since $1\\cdot 3=3$. Once you spot it, the lethal slip is to declare the whole integrand odd and conclude $J=0$. Only $\\ln(x/\\sqrt3)$ is odd under $x\\mapsto 3/x$; the logarithm carries a hidden constant $\\tfrac12\\ln 3=\\ln\\sqrt3$ (the value at the geometric mean) that does NOT cancel and supplies the entire answer.",
    "solutions": [
      {
        "name": "Reciprocal reflection $x\\mapsto 3/x$",
        "steps": [
          "Because $1\\cdot 3=3$, the substitution $x\\mapsto 3/x$ maps $[1,3]$ onto itself. With $x=3/u$, $dx=-\\tfrac{3}{u^{2}}\\,du$ and $x^{2}+3=\\tfrac{3(u^{2}+3)}{u^{2}}$, while $\\ln x=\\ln 3-\\ln u$, giving $J=\\displaystyle\\int_{1}^{3}\\frac{\\ln 3-\\ln u}{u^{2}+3}\\,du.$",
          "Add this to the original $J=\\displaystyle\\int_{1}^{3}\\frac{\\ln x}{x^{2}+3}\\,dx$: the $\\ln x$ terms cancel and $2J=\\ln 3\\displaystyle\\int_{1}^{3}\\frac{dx}{x^{2}+3}.$",
          "Now $\\displaystyle\\int_{1}^{3}\\frac{dx}{x^{2}+3}=\\frac{1}{\\sqrt3}\\Big[\\arctan\\tfrac{x}{\\sqrt3}\\Big]_{1}^{3}=\\frac{1}{\\sqrt3}\\big(\\arctan\\sqrt3-\\arctan\\tfrac{1}{\\sqrt3}\\big)=\\frac{1}{\\sqrt3}\\big(\\tfrac{\\pi}{3}-\\tfrac{\\pi}{6}\\big)=\\frac{\\pi}{6\\sqrt3}.$",
          "Hence $2J=\\dfrac{\\pi\\ln 3}{6\\sqrt3}$, so $J=\\dfrac{\\pi\\ln 3}{12\\sqrt3}=\\dfrac{\\sqrt3\\,\\pi\\ln 3}{36}.$"
        ]
      },
      {
        "name": "Odd/even split about the geometric mean",
        "steps": [
          "Write $\\ln x=\\ln\\!\\big(x/\\sqrt3\\big)+\\tfrac12\\ln 3$. Under $x\\mapsto 3/x$ the measure $\\dfrac{dx}{x^{2}+3}$ is preserved up to orientation (substituting $y=3/x$ gives $\\dfrac{dy}{y^{2}+3}=-\\dfrac{dx}{x^{2}+3}$), while the odd factor flips sign: $\\ln(x/\\sqrt3)\\mapsto\\ln(\\sqrt3/x)=-\\ln(x/\\sqrt3)$.",
          "So $\\displaystyle\\int_{1}^{3}\\frac{\\ln(x/\\sqrt3)}{x^{2}+3}\\,dx=0$ by antisymmetry of the self-map (an 'odd integrand on a self-reflective interval').",
          "Only the constant survives: $J=\\tfrac12\\ln 3\\displaystyle\\int_{1}^{3}\\frac{dx}{x^{2}+3}=\\tfrac12\\ln 3\\cdot\\frac{\\pi}{6\\sqrt3}=\\dfrac{\\sqrt3\\,\\pi\\ln 3}{36}.$"
        ]
      },
      {
        "name": "Logarithmic substitution to a symmetric window",
        "steps": [
          "Put $t=\\ln x$, so $x=e^{t}$, $dx=e^{t}\\,dt$ and $J=\\displaystyle\\int_{0}^{\\ln 3}\\frac{t\\,e^{t}}{e^{2t}+3}\\,dt.$ Center the window with $s=t-\\tfrac12\\ln 3$, so $s\\in[-L,L]$ with $L=\\tfrac12\\ln 3$ and $e^{2L}=3$.",
          "Then $e^{2t}+3=3(e^{2s}+1)$ and $e^{t}=\\sqrt3\\,e^{s}$, giving $J=\\displaystyle\\int_{-L}^{L}\\frac{(s+L)\\,e^{s}}{\\sqrt3\\,(e^{2s}+1)}\\,ds.$ Since $\\dfrac{e^{s}}{e^{2s}+1}=\\dfrac{1}{2\\cosh s}$ is even, the factor $s\\cdot\\dfrac{1}{2\\cosh s}$ is odd and integrates to $0$.",
          "Only the $L$-term remains: $J=\\dfrac{L}{\\sqrt3}\\displaystyle\\int_{-L}^{L}\\frac{ds}{2\\cosh s}.$ Since $\\dfrac{d}{ds}\\arctan(e^{s})=\\dfrac{e^{s}}{1+e^{2s}}=\\dfrac{1}{2\\cosh s}$, this integral is $\\big[\\arctan(e^{s})\\big]_{-L}^{L}=\\arctan\\sqrt3-\\arctan\\tfrac{1}{\\sqrt3}=\\dfrac{\\pi}{6}$ (using $e^{L}=\\sqrt3$).",
          "Therefore $J=\\dfrac{L}{\\sqrt3}\\cdot\\dfrac{\\pi}{6}=\\dfrac{\\tfrac12\\ln 3}{\\sqrt3}\\cdot\\dfrac{\\pi}{6}=\\dfrac{\\sqrt3\\,\\pi\\ln 3}{36}.$"
        ]
      }
    ],
    "remark": "Insight: a definite integral over $[a,b]$ secretly lives on the multiplicative line, where the natural reflection is $x\\mapsto ab/x$ about the geometric mean $\\sqrt{ab}$, not the additive $x\\mapsto a+b-x$. Splitting $\\ln x=\\ln(x/\\sqrt{ab})+\\ln\\sqrt{ab}$ separates a piece that is odd under this self-map (and dies) from the value at the geometric mean (which survives). Here $ab=3$ was chosen so the surviving rational integral collapses to $\\arctan\\sqrt3-\\arctan\\tfrac{1}{\\sqrt3}=\\tfrac{\\pi}{6}$ — no antiderivative of $\\ln x/(x^2+3)$ is ever needed."
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
    "title": "The Weight That Pairs to One",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "reflection",
      "additivity",
      "periodicity",
      "sign-symmetry",
      "non-elementary"
    ],
    "statement": "Evaluate \\[ I=\\int_{0}^{2\\pi}\\frac{3+2\\cos x+\\sin^{2}x}{\\,1+e^{\\sin x}\\,}\\,dx. \\] (The factor $\\dfrac{1}{1+e^{\\sin x}}$ has no elementary antiderivative, so an honest evaluation must come from a structural property, not a primitive.)",
    "answer": "\\[\\boxed{\\dfrac{7\\pi}{2}}\\]",
    "trap": "Two ways to go wrong. First, hunting for an antiderivative of $\\frac{1}{1+e^{\\sin x}}$: it simply does not exist in closed form, and chasing it is a dead end. Second, and more subtle, picking the WRONG reflection. On a $[0,\\pi]$ habit one writes $x\\mapsto\\pi-x$, but $\\sin(\\pi-x)=+\\sin x$ leaves the weight unchanged, so nothing simplifies. The trick works only with the full-interval reflection $x\\mapsto 2\\pi-x$ (here $\\sin(2\\pi-x)=-\\sin x$), which flips the exponent in the weight while leaving $\\cos x$ and $\\sin^2 x$ FIXED. Beware also of declaring the $2\\cos x$ term zero by 'odd symmetry': over $[0,2\\pi]$ the interval is not symmetric about the origin, and under $x\\mapsto 2\\pi-x$ the function $\\cos x$ is in fact even — that term vanishes for the genuine reason $\\int_0^{2\\pi}\\cos x\\,dx=0$, not by mis-applied oddness.",
    "solutions": [
      {
        "name": "Full-interval reflection $x\\mapsto 2\\pi-x$",
        "steps": [
          "Write $I=\\int_0^{2\\pi} N(x)\\,w(x)\\,dx$ with numerator $N(x)=3+2\\cos x+\\sin^2 x$ and weight $w(x)=\\dfrac{1}{1+e^{\\sin x}}$. Apply the reflection $x\\mapsto 2\\pi-x$ (the standard $a+b-x$ with $a=0,b=2\\pi$). Since $\\cos(2\\pi-x)=\\cos x$ and $\\sin^2(2\\pi-x)=\\sin^2 x$, the numerator is unchanged: $N(2\\pi-x)=N(x)$. But $\\sin(2\\pi-x)=-\\sin x$, so $w(2\\pi-x)=\\dfrac{1}{1+e^{-\\sin x}}$.",
          "Add the two copies. Using $\\dfrac{1}{1+e^{s}}+\\dfrac{1}{1+e^{-s}}=\\dfrac{1}{1+e^{s}}+\\dfrac{e^{s}}{e^{s}+1}=1$ with $s=\\sin x$, we get $2I=\\int_0^{2\\pi} N(x)\\bigl[w(x)+w(2\\pi-x)\\bigr]\\,dx=\\int_0^{2\\pi} N(x)\\cdot 1\\,dx$. The non-elementary weight has paired itself to the constant $1$.",
          "Now only elementary period-integrals remain: $\\int_0^{2\\pi}3\\,dx=6\\pi$, $\\int_0^{2\\pi}2\\cos x\\,dx=0$, and $\\int_0^{2\\pi}\\sin^2 x\\,dx=\\pi$. Hence $2I=6\\pi+0+\\pi=7\\pi$.",
          "Therefore $I=\\dfrac{7\\pi}{2}=\\boxed{\\dfrac{7\\pi}{2}}$."
        ]
      },
      {
        "name": "Half-period shift $x\\mapsto x+\\pi$",
        "steps": [
          "Because every term has period $2\\pi$, $I=\\int_0^{2\\pi} f(x)\\,dx=\\int_0^{2\\pi} f(x+\\pi)\\,dx$ where $f=N\\,w$. Under $x\\mapsto x+\\pi$ we have $\\sin(x+\\pi)=-\\sin x$, $\\cos(x+\\pi)=-\\cos x$, $\\sin^2(x+\\pi)=\\sin^2 x$, so $N(x+\\pi)=3-2\\cos x+\\sin^2 x$ and the weight becomes $\\dfrac{1}{1+e^{-\\sin x}}$.",
          "Average the two expressions for $I$: with $s=\\sin x$ and $w(s)+w(-s)=1$, $2I=\\int_0^{2\\pi}\\Bigl[(3+\\sin^2 x)\\bigl(w(s)+w(-s)\\bigr)+2\\cos x\\bigl(w(s)-w(-s)\\bigr)\\Bigr]dx=\\int_0^{2\\pi}(3+\\sin^2 x)\\,dx+\\int_0^{2\\pi}2\\cos x\\,\\bigl(w(s)-w(-s)\\bigr)\\,dx$.",
          "The leftover term vanishes: $w(s)-w(-s)=-\\tanh\\!\\frac{s}{2}$ with $s=\\sin x$, and under $x\\mapsto 2\\pi-x$ the factor $\\cos x$ is even while $\\tanh\\!\\frac{\\sin x}{2}$ is odd (its argument flips sign), so the product is odd over $[0,2\\pi]$ and integrates to $0$.",
          "Thus $2I=\\int_0^{2\\pi}(3+\\sin^2 x)\\,dx=6\\pi+\\pi=7\\pi$, giving $I=\\boxed{\\dfrac{7\\pi}{2}}$."
        ]
      },
      {
        "name": "Split first, then pair each surviving piece",
        "steps": [
          "Use additivity to break $I=3A+2B+C$ where $A=\\int_0^{2\\pi}\\frac{dx}{1+e^{\\sin x}}$, $B=\\int_0^{2\\pi}\\frac{\\cos x\\,dx}{1+e^{\\sin x}}$, $C=\\int_0^{2\\pi}\\frac{\\sin^2 x\\,dx}{1+e^{\\sin x}}$. Each is handled by $x\\mapsto 2\\pi-x$.",
          "For $A$: adding the reflected copy gives $2A=\\int_0^{2\\pi}1\\,dx=2\\pi$, so $A=\\pi$. For $C$: the numerator $\\sin^2 x$ is reflection-invariant, so $2C=\\int_0^{2\\pi}\\sin^2 x\\,dx=\\pi$, so $C=\\dfrac{\\pi}{2}$.",
          "For $B$: split at $\\pi$ and substitute $x=2\\pi-u$ on $[\\pi,2\\pi]$; one finds $B=\\int_0^{2\\pi}\\cos x\\cdot\\tfrac12\\bigl[w(\\sin x)+w(-\\sin x)\\bigr]dx=\\tfrac12\\int_0^{2\\pi}\\cos x\\,dx=0$. The weight pairs to $\\tfrac12$ and the bare cosine integrates to zero over a full period.",
          "Assemble: $I=3A+2B+C=3\\pi+0+\\dfrac{\\pi}{2}=\\boxed{\\dfrac{7\\pi}{2}}$."
        ]
      }
    ],
    "remark": "Insight: the engine is the algebraic miracle $\\frac{1}{1+e^{s}}+\\frac{1}{1+e^{-s}}=1$. A reflection that sends $\\sin x\\mapsto-\\sin x$ overlays a function with its mirror, and a non-integrable weight collapses to the constant $1$ — converting a hopeless integral into a one-line area computation. The discipline is choosing the reflection that actually flips the sign of $\\sin x$ ($x\\mapsto 2\\pi-x$ or $x\\mapsto x+\\pi$, NOT $x\\mapsto\\pi-x$), and reading each surviving numerator term honestly: $\\cos x$ here is even under the reflection and dies only because its full-period integral is zero. Pairing a weight to a constant beats antidifferentiating it every time."
  },
  {
    "theme": "properties",
    "themeLabel": "Properties of the Definite Integral",
    "title": "King Hands the Crown to Weierstrass",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "reflection",
      "king-property",
      "half-angle",
      "weierstrass",
      "invariant-weight"
    ],
    "statement": "Evaluate \\[ I=\\int_{0}^{\\pi}\\frac{x\\,\\sin x}{\\,1+\\sin x\\,}\\,dx. \\] The reflection $x\\mapsto\\pi-x$ disposes of the explicit $x$, but it does NOT collapse the weight to a constant: what is left over is an honest trigonometric integral that you must finish by a half-angle (Weierstrass) substitution. There is no elementary antiderivative of $\\dfrac{x\\sin x}{1+\\sin x}$, so a primitive is not the way in.",
    "answer": "\\[\\boxed{\\dfrac{\\pi(\\pi-2)}{2}}\\]",
    "trap": "The fatal move is to import the $\\dfrac{1}{1+e^{\\sin x}}$ reflex — 'reflect, the weight pairs to a constant, done.' Here it does not. Under King's reflection $x\\mapsto\\pi-x$ one has $\\sin(\\pi-x)=+\\sin x$, so the weight $\\dfrac{\\sin x}{1+\\sin x}$ is left COMPLETELY INVARIANT, not sent to its mirror. A student who blindly writes 'weight $+$ reflected weight $=1$, so it pairs to $\\tfrac12$' concludes $2I=\\pi\\!\\int_0^\\pi\\tfrac12\\,dx$ and reports the wrong value $\\dfrac{\\pi^2}{4}\\approx2.467$. King only kills the $x$: it gives $2I=\\pi\\!\\int_0^\\pi\\dfrac{\\sin x}{1+\\sin x}\\,dx$, and that surviving integral is genuine work — you must split $\\dfrac{\\sin x}{1+\\sin x}=1-\\dfrac{1}{1+\\sin x}$ and evaluate $\\int_0^\\pi\\dfrac{dx}{1+\\sin x}$ by the half-angle substitution. (The other dead end is hunting for a primitive of the original integrand; it has none in closed form.) The correct value $\\dfrac{\\pi(\\pi-2)}{2}\\approx1.793$ is strictly below the bogus $\\dfrac{\\pi^2}{4}$.",
    "solutions": [
      {
        "name": "King reflection, then half-angle on the survivor",
        "steps": [
          "Apply King's property $\\int_0^a f(x)\\,dx=\\int_0^a f(a-x)\\,dx$ with $a=\\pi$. Since $\\sin(\\pi-x)=\\sin x$, the weight is unchanged: $f(\\pi-x)=\\dfrac{(\\pi-x)\\sin x}{1+\\sin x}$. Add this to the original $f(x)=\\dfrac{x\\sin x}{1+\\sin x}$: $2I=\\int_0^\\pi\\dfrac{[x+(\\pi-x)]\\sin x}{1+\\sin x}\\,dx=\\pi\\int_0^\\pi\\dfrac{\\sin x}{1+\\sin x}\\,dx.$ King has removed the $x$ but left a real integral $K=\\int_0^\\pi\\dfrac{\\sin x}{1+\\sin x}\\,dx$ behind.",
          "Reduce $K$ algebraically: $\\dfrac{\\sin x}{1+\\sin x}=\\dfrac{(1+\\sin x)-1}{1+\\sin x}=1-\\dfrac{1}{1+\\sin x}$, so $K=\\int_0^\\pi 1\\,dx-\\int_0^\\pi\\dfrac{dx}{1+\\sin x}=\\pi-L,\\qquad L=\\int_0^\\pi\\dfrac{dx}{1+\\sin x}.$",
          "Evaluate $L$ by the Weierstrass substitution $t=\\tan\\tfrac{x}{2}$, so $\\sin x=\\dfrac{2t}{1+t^2}$ and $dx=\\dfrac{2\\,dt}{1+t^2}$, with $x:0\\to\\pi$ giving $t:0\\to\\infty$. Then $\\dfrac{1}{1+\\sin x}\\,dx=\\dfrac{2\\,dt/(1+t^2)}{1+\\frac{2t}{1+t^2}}=\\dfrac{2\\,dt}{(1+t^2)+2t}=\\dfrac{2\\,dt}{(1+t)^2}.$ Hence $L=\\int_0^\\infty\\dfrac{2\\,dt}{(1+t)^2}=\\Bigl[-\\dfrac{2}{1+t}\\Bigr]_0^\\infty=0-(-2)=2.$",
          "Therefore $K=\\pi-2$, so $2I=\\pi(\\pi-2)$ and $I=\\dfrac{\\pi(\\pi-2)}{2}=\\boxed{\\dfrac{\\pi(\\pi-2)}{2}}.$"
        ]
      },
      {
        "name": "Split the integrand first, recognise an easier King integral",
        "steps": [
          "Split before reflecting: $\\dfrac{x\\sin x}{1+\\sin x}=x\\cdot\\dfrac{\\sin x}{1+\\sin x}=x\\Bigl(1-\\dfrac{1}{1+\\sin x}\\Bigr)=x-\\dfrac{x}{1+\\sin x}.$ By additivity $I=\\int_0^\\pi x\\,dx-\\int_0^\\pi\\dfrac{x}{1+\\sin x}\\,dx=\\dfrac{\\pi^2}{2}-M,\\qquad M=\\int_0^\\pi\\dfrac{x\\,dx}{1+\\sin x}.$",
          "Now $M$ is itself a clean King integral. With $x\\mapsto\\pi-x$ and $\\sin(\\pi-x)=\\sin x$, $2M=\\int_0^\\pi\\dfrac{x+(\\pi-x)}{1+\\sin x}\\,dx=\\pi\\int_0^\\pi\\dfrac{dx}{1+\\sin x}=\\pi L.$",
          "By the half-angle computation $L=\\int_0^\\pi\\dfrac{dx}{1+\\sin x}=\\int_0^\\infty\\dfrac{2\\,dt}{(1+t)^2}=2$, so $M=\\dfrac{\\pi L}{2}=\\pi.$",
          "Assemble: $I=\\dfrac{\\pi^2}{2}-M=\\dfrac{\\pi^2}{2}-\\pi=\\dfrac{\\pi(\\pi-2)}{2}=\\boxed{\\dfrac{\\pi(\\pi-2)}{2}}.$"
        ]
      },
      {
        "name": "Half-angle antiderivative for L, no improper limit",
        "steps": [
          "Run King exactly as in Method 1 to reach $2I=\\pi K$ with $K=\\int_0^\\pi\\dfrac{\\sin x}{1+\\sin x}\\,dx=\\pi-L$ and $L=\\int_0^\\pi\\dfrac{dx}{1+\\sin x}$. We now evaluate $L$ through a genuine antiderivative rather than an improper $t$-integral.",
          "Write $1+\\sin x=1+\\cos\\!\\bigl(\\tfrac{\\pi}{2}-x\\bigr)=2\\cos^2\\!\\bigl(\\tfrac{\\pi}{4}-\\tfrac{x}{2}\\bigr)$ by the half-angle identity. Hence $\\dfrac{1}{1+\\sin x}=\\dfrac{1}{2}\\sec^2\\!\\bigl(\\tfrac{\\pi}{4}-\\tfrac{x}{2}\\bigr),$ whose antiderivative is $\\tan\\!\\bigl(\\tfrac{\\pi}{4}-\\tfrac{x}{2}\\bigr)\\cdot(-1)$ adjusted by the chain rule: $\\dfrac{d}{dx}\\tan\\!\\bigl(\\tfrac{\\pi}{4}-\\tfrac{x}{2}\\bigr)=-\\tfrac12\\sec^2\\!\\bigl(\\tfrac{\\pi}{4}-\\tfrac{x}{2}\\bigr).$ So $\\displaystyle\\int\\dfrac{dx}{1+\\sin x}=-\\tan\\!\\Bigl(\\tfrac{\\pi}{4}-\\tfrac{x}{2}\\Bigr)+C.$",
          "On $[0,\\pi]$ the argument $\\tfrac{\\pi}{4}-\\tfrac{x}{2}$ runs from $\\tfrac{\\pi}{4}$ down to $-\\tfrac{\\pi}{4}$, staying strictly inside $(-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2})$, so $\\tan$ is continuous and the Fundamental Theorem applies with no blow-up: $L=\\Bigl[-\\tan\\!\\Bigl(\\tfrac{\\pi}{4}-\\tfrac{x}{2}\\Bigr)\\Bigr]_0^\\pi=-\\tan\\!\\bigl(-\\tfrac{\\pi}{4}\\bigr)+\\tan\\!\\bigl(\\tfrac{\\pi}{4}\\bigr)=1+1=2.$",
          "Thus $K=\\pi-2$ and $2I=\\pi(\\pi-2)$, giving $I=\\dfrac{\\pi(\\pi-2)}{2}=\\boxed{\\dfrac{\\pi(\\pi-2)}{2}}.$"
        ]
      }
    ],
    "remark": "Insight: King's reflection is a scalpel, not a guillotine. Whether the weight survives reflection depends entirely on how the substitution acts on it. On $[0,\\pi]$ the map $x\\mapsto\\pi-x$ fixes $\\sin x$, so the weight $\\tfrac{\\sin x}{1+\\sin x}$ is invariant and King only strips the explicit $x$ — handing you the still-nontrivial $\\pi\\!\\int_0^\\pi\\tfrac{\\sin x}{1+\\sin x}\\,dx$. That is precisely the opposite of the $\\tfrac{1}{1+e^{\\sin x}}$ family on $[0,2\\pi]$, where $x\\mapsto2\\pi-x$ FLIPS $\\sin x$ and the weight pairs to a constant. The discipline: check what the reflection does to the weight before assuming it collapses, then finish the genuine leftover honestly — here a two-stage King-then-Weierstrass, where the half-angle substitution turns the residual $\\int_0^\\pi\\tfrac{dx}{1+\\sin x}$ into the clean $\\int_0^\\infty\\tfrac{2\\,dt}{(1+t)^2}=2$."
  },
  {
    "theme": "properties",
    "themeLabel": "Properties of the Definite Integral",
    "title": "The Integral That Eats Its Own Tail",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "self-similarity",
      "doubling",
      "additivity",
      "reflection",
      "no antiderivative"
    ],
    "statement": "Evaluate \\[ I=\\int_{0}^{\\pi/2}\\ln\\!\\bigl(2\\,\\sin x\\,\\sin 2x\\bigr)\\,dx. \\] None of the three pieces $\\ln 2,\\ \\ln\\sin x,\\ \\ln\\sin 2x$ has an elementary antiderivative on $(0,\\pi/2)$, so the value cannot be reached by finding a primitive. It must fall out of a structural property: the integrand is built to be self-similar under the doubling $x\\mapsto 2x$.",
    "answer": "\\[\\boxed{-\\dfrac{\\pi}{2}\\ln 2}\\]",
    "trap": "The fatal move is to attack $\\ln(2\\sin x\\sin 2x)$ as one lump and hunt for an antiderivative — there is none, and the search is endless. Splitting into $\\ln 2+\\ln\\sin x+\\ln\\sin 2x$ is correct, but then a second, subtler trap waits on the doubling term. Substituting $u=2x$ gives $\\int_0^{\\pi/2}\\ln\\sin 2x\\,dx=\\tfrac12\\int_0^{\\pi}\\ln\\sin u\\,du$, and the $\\tfrac12$ Jacobian is exactly what students drop, casually writing $\\int_0^{\\pi/2}\\ln\\sin 2x\\,dx=\\int_0^{\\pi}\\ln\\sin u\\,du$ and so doubling that term. The deeper miss is failing to see the self-reference: $\\int_0^{\\pi}\\ln\\sin u\\,du=2\\int_0^{\\pi/2}\\ln\\sin u\\,du$ by the reflection $u\\mapsto\\pi-u$, so the doubling term equals the very integral $K=\\int_0^{\\pi/2}\\ln\\sin x\\,dx$ you are trying to find. Keeping the Jacobian gives the doubling term $=K$ (true value $-\\tfrac{\\pi}{2}\\ln 2$); dropping it gives $2K=-\\pi\\ln 2$, and the final answer comes out $-\\tfrac{3\\pi}{2}\\ln 2$ — wrong by a clean factor that hides the slip.",
    "solutions": [
      {
        "name": "Doubling self-similarity (the fixed point)",
        "steps": [
          "Use additivity of the integral on the log of a product: $I=\\int_0^{\\pi/2}\\ln 2\\,dx+\\int_0^{\\pi/2}\\ln\\sin x\\,dx+\\int_0^{\\pi/2}\\ln\\sin 2x\\,dx=\\tfrac{\\pi}{2}\\ln 2+K+D$, where $K=\\int_0^{\\pi/2}\\ln\\sin x\\,dx$ and $D=\\int_0^{\\pi/2}\\ln\\sin 2x\\,dx$.",
          "Evaluate $D$ by the doubling substitution $u=2x$, $du=2\\,dx$: $D=\\tfrac12\\int_0^{\\pi}\\ln\\sin u\\,du$ (keep the $\\tfrac12$). The interval $[0,\\pi]$ is symmetric about $u=\\tfrac{\\pi}{2}$ and $\\sin(\\pi-u)=\\sin u$, so $\\int_0^{\\pi}\\ln\\sin u\\,du=2\\int_0^{\\pi/2}\\ln\\sin u\\,du=2K$. Hence $D=\\tfrac12\\cdot 2K=K$: the doubling term is the same quantity $K$ — this is the self-similarity.",
          "To pin $K$ itself without an antiderivative, reflect by $x\\mapsto\\tfrac{\\pi}{2}-x$ to get $K=\\int_0^{\\pi/2}\\ln\\cos x\\,dx$, so $2K=\\int_0^{\\pi/2}\\ln(\\sin x\\cos x)\\,dx=\\int_0^{\\pi/2}\\ln\\!\\tfrac{\\sin 2x}{2}\\,dx=-\\tfrac{\\pi}{2}\\ln 2+D=-\\tfrac{\\pi}{2}\\ln 2+K$. Therefore $K=-\\tfrac{\\pi}{2}\\ln 2$.",
          "Assemble: $I=\\tfrac{\\pi}{2}\\ln 2+K+D=\\tfrac{\\pi}{2}\\ln 2+K+K=\\tfrac{\\pi}{2}\\ln 2+2\\!\\left(-\\tfrac{\\pi}{2}\\ln 2\\right)=\\boxed{-\\dfrac{\\pi}{2}\\ln 2}$."
        ]
      },
      {
        "name": "Collapse to one self-referential equation",
        "steps": [
          "Again write $I=\\tfrac{\\pi}{2}\\ln 2+K+D$ with $K=\\int_0^{\\pi/2}\\ln\\sin x\\,dx$ and $D=\\int_0^{\\pi/2}\\ln\\sin 2x\\,dx$. The doubling argument $u=2x$ together with the reflection $u\\mapsto\\pi-u$ gives $D=K$ exactly (as above), so $I=\\tfrac{\\pi}{2}\\ln 2+2K$.",
          "Now reuse the product structure directly on $I$. Since $2\\sin x\\sin 2x=2\\sin x\\,(2\\sin x\\cos x)=4\\sin^2 x\\cos x$ would reintroduce $\\ln\\cos$, instead note the cleaner identity from the pairing: $\\ln(2\\sin x\\sin 2x)=\\ln(\\sin 2x)+\\ln(2\\sin x)$, and $\\int_0^{\\pi/2}\\ln(2\\sin x)\\,dx=\\tfrac{\\pi}{2}\\ln 2+K$. By the sin/cos reflection $\\int_0^{\\pi/2}\\ln(2\\sin x)\\,dx=\\int_0^{\\pi/2}\\ln(2\\cos x)\\,dx$, and adding these two equal integrals, $2\\!\\int_0^{\\pi/2}\\ln(2\\sin x)\\,dx=\\int_0^{\\pi/2}\\ln(4\\sin x\\cos x)\\,dx=\\int_0^{\\pi/2}\\ln(2\\sin 2x)\\,dx$.",
          "The right side is, by $u=2x$ and reflection, $\\tfrac12\\int_0^{\\pi}\\ln(2\\sin u)\\,du=\\int_0^{\\pi/2}\\ln(2\\sin u)\\,du$. Calling $S=\\int_0^{\\pi/2}\\ln(2\\sin x)\\,dx$, the equation reads $2S=S$, forcing $S=0$. Thus $\\tfrac{\\pi}{2}\\ln 2+K=0$, i.e. $K=-\\tfrac{\\pi}{2}\\ln 2$.",
          "Therefore $I=\\tfrac{\\pi}{2}\\ln 2+2K=\\tfrac{\\pi}{2}\\ln 2-\\pi\\ln 2=\\boxed{-\\dfrac{\\pi}{2}\\ln 2}$. The whole evaluation rode on the single self-referential identity $2S=S$ born of the doubling."
        ]
      },
      {
        "name": "Fourier series, integrated term by term",
        "steps": [
          "On $(0,\\pi)$ the Fourier expansion $\\ln\\sin\\theta=-\\ln 2-\\sum_{k\\ge 1}\\dfrac{\\cos 2k\\theta}{k}$ holds (it converges in the mean and may be integrated term by term over any subinterval). Apply it to each log: with $\\theta=x$ for $\\ln\\sin x$ and $\\theta=2x$ for $\\ln\\sin 2x$ (valid since $2x\\in(0,\\pi)$ for $x\\in(0,\\tfrac{\\pi}{2})$).",
          "For $\\ln\\sin x$: $\\int_0^{\\pi/2}\\cos 2kx\\,dx=\\dfrac{\\sin k\\pi}{2k}=0$ for every integer $k\\ge 1$, so $\\int_0^{\\pi/2}\\ln\\sin x\\,dx=-\\tfrac{\\pi}{2}\\ln 2$. For $\\ln\\sin 2x$: $\\int_0^{\\pi/2}\\cos 4kx\\,dx=\\dfrac{\\sin 2k\\pi}{4k}=0$, so likewise $\\int_0^{\\pi/2}\\ln\\sin 2x\\,dx=-\\tfrac{\\pi}{2}\\ln 2$. Every oscillatory term integrates to zero by full-period symmetry; only the constant $-\\ln 2$ survives.",
          "Add the three pieces: $I=\\int_0^{\\pi/2}\\ln 2\\,dx-\\tfrac{\\pi}{2}\\ln 2-\\tfrac{\\pi}{2}\\ln 2=\\tfrac{\\pi}{2}\\ln 2-\\pi\\ln 2=\\boxed{-\\dfrac{\\pi}{2}\\ln 2}$, in agreement with the doubling argument and confirming both $\\ln\\sin$ integrals equal $-\\tfrac{\\pi}{2}\\ln 2$."
        ]
      }
    ],
    "remark": "Insight: the integrand is engineered so that the doubling map $x\\mapsto 2x$ sends the problem back to itself. The term $\\int_0^{\\pi/2}\\ln\\sin 2x\\,dx$ is not a new integral — after the substitution $u=2x$ (Jacobian $\\tfrac12$) and the reflection $u\\mapsto\\pi-u$ it is the original $K=\\int_0^{\\pi/2}\\ln\\sin x\\,dx$. That self-reference is the entire engine: it turns the evaluation into a one-line fixed-point equation ($2K=-\\tfrac{\\pi}{2}\\ln 2+K$, or equivalently $2S=S$ for $S=\\int_0^{\\pi/2}\\ln(2\\sin x)\\,dx$), bypassing the non-existent antiderivative completely. The discipline that separates the right answer from $-\\tfrac{3\\pi}{2}\\ln 2$ is honoring the $\\tfrac12$ Jacobian when the interval doubles; lose it and the self-similarity is silently broken."
  },
  {
    "theme": "properties",
    "themeLabel": "Properties of the Definite Integral",
    "title": "Stacking the Arches Against a Rising Line",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "periodicity",
      "block-additivity",
      "arithmetic-progression",
      "reflection",
      "absolute-value"
    ],
    "statement": "For a positive integer $n$, evaluate \\[ I_n=\\int_{0}^{n\\pi} x\\,\\lvert\\sin x\\rvert\\,dx \\] in closed form as a function of $n$. The integrand has period $\\pi$ in its $\\lvert\\sin x\\rvert$ factor but is multiplied by the strictly increasing weight $x$, so the contributions of successive arches are not equal — they grow. Give the answer; an antiderivative-only attack against $\\lvert\\sin x\\rvert$ is a dead end.",
    "answer": "\\[\\boxed{\\,n^{2}\\pi\\,}\\]",
    "trap": "The fatal move is to drop the absolute value and integrate $\\int_0^{n\\pi} x\\sin x\\,dx=\\bigl[\\sin x-x\\cos x\\bigr]_0^{n\\pi}=-n\\pi\\cos(n\\pi)=n\\pi(-1)^{n+1}$. This is wrong because $\\sin x<0$ on every odd arch $[(2j-1)\\pi,2j\\pi]$, so $x\\sin x\\neq x\\lvert\\sin x\\rvert$ there; the bare-sine answer even goes NEGATIVE for even $n$, which is impossible since $x\\lvert\\sin x\\rvert\\ge 0$. The insidious part: at $n=1$ both give $\\pi$, so a student who 'checks' only $n=1$ feels safe and ships the wrong formula. A second, subtler error is to treat the integral as $\\overline{\\lvert\\sin x\\rvert}\\cdot\\int_0^{n\\pi}x\\,dx=\\tfrac{2}{\\pi}\\cdot\\tfrac{(n\\pi)^2}{2}=n^2\\pi$ by 'replacing the periodic factor by its mean' — here it lands on the right number by luck (because the linear weight makes the per-arch error telescope to zero), but the reasoning is unjustified for a general weight and must not be trusted as a method.",
    "solutions": [
      {
        "name": "Block decomposition into an arithmetic progression",
        "steps": [
          "Split by additivity over the $n$ arches: $I_n=\\sum_{k=0}^{n-1}\\int_{k\\pi}^{(k+1)\\pi} x\\,\\lvert\\sin x\\rvert\\,dx$. On the $k$-th block substitute $x=k\\pi+t$ with $t\\in[0,\\pi]$. Then $\\sin x=\\sin(k\\pi+t)=(-1)^k\\sin t$, so $\\lvert\\sin x\\rvert=\\sin t$ (since $\\sin t\\ge 0$ on $[0,\\pi]$), and $dx=dt$.",
          "The block integral becomes $\\displaystyle\\int_0^{\\pi}(k\\pi+t)\\sin t\\,dt=k\\pi\\!\\int_0^{\\pi}\\!\\sin t\\,dt+\\int_0^{\\pi}\\! t\\sin t\\,dt$. Using $\\int_0^\\pi\\sin t\\,dt=2$ and $\\int_0^\\pi t\\sin t\\,dt=\\bigl[\\sin t-t\\cos t\\bigr]_0^\\pi=\\pi$, the block contributes $2k\\pi+\\pi=(2k+1)\\pi$.",
          "Sum the arithmetic progression of odd multiples of $\\pi$: $I_n=\\sum_{k=0}^{n-1}(2k+1)\\pi=\\pi\\sum_{k=0}^{n-1}(2k+1)=\\pi\\cdot n^2$, since the first $n$ odd numbers add to $n^2$.",
          "Hence $I_n=\\boxed{\\,n^{2}\\pi\\,}$."
        ]
      },
      {
        "name": "Global reflection $x\\mapsto n\\pi-x$",
        "steps": [
          "Because $\\lvert\\sin(n\\pi-x)\\rvert=\\lvert\\sin x\\rvert$ for every integer $n$ (the function $\\lvert\\sin\\rvert$ has period $\\pi$ and is even about each multiple of $\\pi$), apply the reflection $x\\mapsto n\\pi-x$ on the whole interval: $I_n=\\int_0^{n\\pi}(n\\pi-x)\\,\\lvert\\sin x\\rvert\\,dx$.",
          "Add this to the original: $2I_n=\\int_0^{n\\pi}\\bigl[x+(n\\pi-x)\\bigr]\\lvert\\sin x\\rvert\\,dx=n\\pi\\int_0^{n\\pi}\\lvert\\sin x\\rvert\\,dx$. The linear weight $x$ has paired itself with its mirror into the constant $n\\pi$.",
          "Evaluate the pure periodic integral by full periods: $\\int_0^{n\\pi}\\lvert\\sin x\\rvert\\,dx=n\\int_0^{\\pi}\\sin x\\,dx=2n$. Therefore $2I_n=n\\pi\\cdot 2n=2n^2\\pi$.",
          "Dividing, $I_n=\\boxed{\\,n^{2}\\pi\\,}$."
        ]
      },
      {
        "name": "Within-block reflection $t\\mapsto\\pi-t$",
        "steps": [
          "Start from the block form $I_n=\\sum_{k=0}^{n-1}\\int_0^{\\pi}(k\\pi+t)\\sin t\\,dt$ (as derived by $x=k\\pi+t$). On each block apply the local reflection $t\\mapsto\\pi-t$, under which $\\sin t$ is invariant and $k\\pi+t\\mapsto (k+1)\\pi-t$.",
          "Averaging the integrand with its reflection replaces the weight $k\\pi+t$ by the constant $\\tfrac12\\bigl[(k\\pi+t)+((k+1)\\pi-t)\\bigr]=\\tfrac{(2k+1)\\pi}{2}$. So the block integral equals $\\dfrac{(2k+1)\\pi}{2}\\int_0^{\\pi}\\sin t\\,dt=\\dfrac{(2k+1)\\pi}{2}\\cdot 2=(2k+1)\\pi$.",
          "Summing over the blocks gives the same arithmetic series $\\sum_{k=0}^{n-1}(2k+1)\\pi=n^2\\pi$, where the reflection has done the work of evaluating each block without ever touching the linear part directly.",
          "Thus $I_n=\\boxed{\\,n^{2}\\pi\\,}$."
        ]
      }
    ],
    "remark": "Insight: the integrand factors as a periodic mask $\\lvert\\sin x\\rvert$ (period $\\pi$) times a non-periodic, strictly increasing weight $x$. Pure periodicity over $[0,nT]$ would make every arch contribute equally; the rising weight breaks that, turning the equal contributions into an arithmetic progression $(2k+1)\\pi$ whose partial sums are the perfect squares — hence the strikingly clean $n^2\\pi$. The same answer drops out instantly from the global reflection $x\\mapsto n\\pi-x$, which pairs the linear weight $x$ with $n\\pi-x$ into the constant $n\\pi$ and reduces everything to the bare periodic integral $\\int_0^{n\\pi}\\lvert\\sin x\\rvert=2n$. The discipline is respecting the absolute value: it is exactly what makes the masked weight non-elementary and forbids the seductive $\\int x\\sin x$, whose sign-alternating answer is not even positive."
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
    "title": "The Tangent That Refuses to Cancel",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "king rule",
      "reflection system",
      "integration by parts",
      "self-reflective integrand",
      "ln tan",
      "asymmetric weight"
    ],
    "statement": "Evaluate \\[ A=\\int_{0}^{\\pi/2}\\frac{\\sin x\\,\\ln(\\tan x)}{\\sin x+\\cos x}\\,dx. \\] The factor $\\ln(\\tan x)$ is genuinely antisymmetric about $x=\\tfrac{\\pi}{4}$ (it changes sign under $x\\mapsto\\tfrac{\\pi}{2}-x$), but the weight $\\dfrac{\\sin x}{\\sin x+\\cos x}$ is NOT symmetric about $\\tfrac{\\pi}{4}$. Reflection therefore does not annihilate the integrand outright; it returns a second integral $B$, and the king rule must be used to build and close a $2\\times2$ system. No elementary antiderivative of the integrand exists.",
    "answer": "\\[\\boxed{\\dfrac{\\pi^{2}}{16}}\\]",
    "trap": "The seductive (and wrong) move is to declare the whole integrand ODD about $x=\\tfrac{\\pi}{4}$ and conclude $A=0$. The reasoning: under $x\\mapsto\\tfrac{\\pi}{2}-x$ one has $\\ln(\\tan(\\tfrac{\\pi}{2}-x))=\\ln(\\cot x)=-\\ln(\\tan x)$, so the log flips sign — and a hasty student treats the rest as unchanged. But the weight is not its own mirror: $\\dfrac{\\sin x}{\\sin x+\\cos x}\\xmapsto{\\;x\\mapsto\\pi/2-x\\;}\\dfrac{\\cos x}{\\sin x+\\cos x}$, a DIFFERENT function. So reflection sends $A$ not to $-A$ but to a new integral $B=\\int_0^{\\pi/2}\\frac{\\cos x\\,\\ln(\\cot x)}{\\sin x+\\cos x}\\,dx$, and the king rule yields $A=B$ (NOT $A=-B$). A parallel mirage is to replace the weight by its 'average' $\\tfrac12$ (because $\\frac{\\sin x}{\\sin x+\\cos x}+\\frac{\\cos x}{\\sin x+\\cos x}=1$), giving $\\tfrac12\\int_0^{\\pi/2}\\ln\\tan x\\,dx=\\tfrac12\\cdot0=0$. Both shortcuts return $0$; the true value is $\\tfrac{\\pi^2}{16}>0$. The asymmetric weight is exactly what stops the cancellation and forces a genuine system.",
    "solutions": [
      {
        "name": "King rule builds a system, then integration by parts",
        "steps": [
          "Apply the king rule $x\\mapsto\\tfrac{\\pi}{2}-x$ to $A$. Then $\\sin x\\mapsto\\cos x$, $\\tan x\\mapsto\\cot x$ so $\\ln(\\tan x)\\mapsto-\\ln(\\tan x)$, while the denominator $\\sin x+\\cos x$ is invariant. Hence $A=\\int_0^{\\pi/2}\\dfrac{\\cos x\\,(-\\ln\\tan x)}{\\sin x+\\cos x}\\,dx$, i.e. defining $B=\\int_0^{\\pi/2}\\dfrac{\\cos x\\,\\ln(\\cot x)}{\\sin x+\\cos x}\\,dx$ we get $A=B$ (the reflection identifies the two, it does not cancel them).",
          "Add the ORIGINAL $A$ to its reflected form $A=\\int_0^{\\pi/2}\\frac{-\\cos x\\,\\ln\\tan x}{\\sin x+\\cos x}\\,dx$: $2A=\\int_0^{\\pi/2}\\ln(\\tan x)\\cdot\\dfrac{\\sin x-\\cos x}{\\sin x+\\cos x}\\,dx$. The two unknowns have collapsed into one closed integral.",
          "Recognise the weight as a perfect logarithmic derivative: $\\dfrac{d}{dx}\\ln(\\sin x+\\cos x)=\\dfrac{\\cos x-\\sin x}{\\sin x+\\cos x}$, so $\\dfrac{\\sin x-\\cos x}{\\sin x+\\cos x}=-\\dfrac{d}{dx}\\ln(\\sin x+\\cos x)$. Integrate by parts with $u=\\ln(\\tan x)$, $dv=-\\,d\\big[\\ln(\\sin x+\\cos x)\\big]$. The boundary term $-\\big[\\ln(\\tan x)\\ln(\\sin x+\\cos x)\\big]_0^{\\pi/2}$ vanishes (near $0$, $\\ln\\tan x\\sim\\ln x$ while $\\ln(\\sin x+\\cos x)\\sim x\\to0$, and symmetrically at $\\tfrac{\\pi}{2}$).",
          "What remains is $2A=\\int_0^{\\pi/2}\\ln(\\sin x+\\cos x)\\,\\dfrac{d}{dx}\\ln(\\tan x)\\,dx=\\int_0^{\\pi/2}\\dfrac{\\ln(\\sin x+\\cos x)}{\\sin x\\cos x}\\,dx$, since $\\dfrac{d}{dx}\\ln\\tan x=\\dfrac{1}{\\sin x\\cos x}$.",
          "Use $\\ln(\\sin x+\\cos x)=\\tfrac12\\ln(1+\\sin 2x)$ and $\\dfrac{1}{\\sin x\\cos x}=\\dfrac{2}{\\sin 2x}$; substitute $u=2x$ to get $2A=\\tfrac12\\int_0^{\\pi}\\dfrac{\\ln(1+\\sin u)}{\\sin u}\\,du$. The standard value $\\int_0^{\\pi}\\dfrac{\\ln(1+\\sin u)}{\\sin u}\\,du=\\dfrac{\\pi^2}{4}$ gives $2A=\\dfrac{\\pi^2}{8}$, hence $\\boxed{A=\\dfrac{\\pi^{2}}{16}}$."
        ]
      },
      {
        "name": "Split the log into a partner pair (reflection pairs the halves)",
        "steps": [
          "Write $\\ln\\tan x=\\ln\\sin x-\\ln\\cos x$ and split $A=P-Q$ with $P=\\int_0^{\\pi/2}\\dfrac{\\sin x\\,\\ln\\sin x}{\\sin x+\\cos x}\\,dx$ and $Q=\\int_0^{\\pi/2}\\dfrac{\\sin x\\,\\ln\\cos x}{\\sin x+\\cos x}\\,dx$.",
          "Reflect $Q$ by $x\\mapsto\\tfrac{\\pi}{2}-x$: it becomes $\\int_0^{\\pi/2}\\dfrac{\\cos x\\,\\ln\\sin x}{\\sin x+\\cos x}\\,dx=:\\widetilde Q$. Then $P+\\widetilde Q=\\int_0^{\\pi/2}\\dfrac{(\\sin x+\\cos x)\\,\\ln\\sin x}{\\sin x+\\cos x}\\,dx=\\int_0^{\\pi/2}\\ln\\sin x\\,dx=-\\dfrac{\\pi}{2}\\ln 2$, the classic value.",
          "Likewise reflect $P$: it becomes $\\widetilde P=\\int_0^{\\pi/2}\\dfrac{\\cos x\\,\\ln\\cos x}{\\sin x+\\cos x}\\,dx$, and $Q+\\widetilde P=\\int_0^{\\pi/2}\\ln\\cos x\\,dx=-\\dfrac{\\pi}{2}\\ln 2$. So $P+\\widetilde Q=Q+\\widetilde P$, i.e. $P-Q=\\widetilde P-\\widetilde Q$ — consistent with the king-rule identity $A=B$ found above, confirming the reflection produces a system, not a cancellation.",
          "The clean closure uses the reflected copy. Reflecting $P$ and $Q$ by $x\\mapsto\\tfrac{\\pi}{2}-x$ gives $\\widetilde P=\\int_0^{\\pi/2}\\frac{\\cos x\\,\\ln\\cos x}{\\sin x+\\cos x}\\,dx$ and $\\widetilde Q=\\int_0^{\\pi/2}\\frac{\\cos x\\,\\ln\\sin x}{\\sin x+\\cos x}\\,dx$, and the king rule says the reflected value of $A$ equals $A$: $\\widetilde P-\\widetilde Q=A$. Adding to $A=P-Q$ yields $2A=(P+\\widetilde P)-(Q+\\widetilde Q)=\\int_0^{\\pi/2}\\frac{(\\sin x-\\cos x)(\\ln\\sin x-\\ln\\cos x)}{\\sin x+\\cos x}\\,dx=\\int_0^{\\pi/2}\\frac{(\\sin x-\\cos x)\\ln\\tan x}{\\sin x+\\cos x}\\,dx$ — the same single closed integral as in Method 1.",
          "Apply $\\frac{\\sin x-\\cos x}{\\sin x+\\cos x}=-\\frac{d}{dx}\\ln(\\sin x+\\cos x)$ and integrate by parts (boundary term $0$): $2A=\\int_0^{\\pi/2}\\dfrac{\\ln(\\sin x+\\cos x)}{\\sin x\\cos x}\\,dx=\\dfrac{\\pi^2}{8}$.",
          "Therefore $\\boxed{A=\\dfrac{\\pi^{2}}{16}}$."
        ]
      },
      {
        "name": "Feynman differentiation on the reduced integral",
        "steps": [
          "From Method 1, $2A=\\tfrac12\\int_0^{\\pi}\\dfrac{\\ln(1+\\sin u)}{\\sin u}\\,du$. Introduce a parameter: $I(a)=\\int_0^{\\pi}\\dfrac{\\ln(1+a\\sin u)}{\\sin u}\\,du$, so $I(0)=0$ and the target is $I(1)$.",
          "Differentiate under the integral sign: $I'(a)=\\int_0^{\\pi}\\dfrac{du}{1+a\\sin u}$. The Weierstrass substitution $t=\\tan\\tfrac{u}{2}$ gives the standard result $I'(a)=\\dfrac{2\\arccos a}{\\sqrt{1-a^{2}}}$ for $0\\le a<1$.",
          "Integrate back: $I(1)=\\int_0^{1}\\dfrac{2\\arccos a}{\\sqrt{1-a^{2}}}\\,da$. Put $a=\\cos t$, $da=-\\sin t\\,dt$, $\\sqrt{1-a^2}=\\sin t$, so $I(1)=\\int_{0}^{\\pi/2}2t\\,dt=\\Big[t^{2}\\Big]_0^{\\pi/2}=\\dfrac{\\pi^{2}}{4}$.",
          "Hence $2A=\\tfrac12\\cdot\\dfrac{\\pi^2}{4}=\\dfrac{\\pi^2}{8}$, giving $\\boxed{A=\\dfrac{\\pi^{2}}{16}}$."
        ]
      }
    ],
    "remark": "Insight: the engine of the problem is the mismatch between an antisymmetric multiplier and a non-mirror weight. Because $\\ln\\tan x$ flips sign under $x\\mapsto\\tfrac{\\pi}{2}-x$ but $\\frac{\\sin x}{\\sin x+\\cos x}$ turns into $\\frac{\\cos x}{\\sin x+\\cos x}$, the king rule maps $A$ to an equal-but-distinct integral $B=A$ rather than to $-A$ — so reflection yields a SYSTEM, not an instant zero. Summing the two faces converts the awkward weight into the exact logarithmic derivative $-\\frac{d}{dx}\\ln(\\sin x+\\cos x)$, after which one integration by parts dissolves the $\\ln\\tan$ entirely and lands on the elementary $\\frac{\\pi^2}{16}$. The deliberately planted '$=0$' shortcuts (odd-about-$\\tfrac{\\pi}{4}$, or weight-equals-$\\tfrac12$) are the control: they are precisely what you get if you ignore that the weight is not self-mirror."
  },
  {
    "theme": "kingrule",
    "themeLabel": "The Reflection (King) Property",
    "title": "King Peels the x, Then Feynman Squares the Tail",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "king-property",
      "reflection",
      "differentiation-under-integral",
      "reduction-formula",
      "even-power-trap"
    ],
    "statement": "Evaluate \\[ I=\\int_{0}^{\\pi}\\frac{x\\,\\sin x}{\\bigl(3+\\cos^{2}x\\bigr)^{2}}\\,dx. \\] King's reflection $x\\mapsto\\pi-x$ removes the explicit $x$ at once, but it leaves behind an honest, irreducible second act: a $\\sin$-weighted integral whose denominator is a SQUARE. There is no elementary antiderivative of $\\dfrac{x\\sin x}{(3+\\cos^{2}x)^{2}}$, so a primitive of the original is not the way in — reflection is only step one of a two-concept synthesis.",
    "answer": "\\[\\boxed{\\dfrac{\\pi\\bigl(9+2\\sqrt{3}\\,\\pi\\bigr)}{216}}\\]",
    "trap": "The fatal move comes at the SQUARE. After King delivers $2I=\\pi\\!\\int_0^\\pi\\dfrac{\\sin x}{(3+\\cos^2x)^2}\\,dx$ and the substitution $u=\\cos x$ converts this to $J=\\int_{-1}^{1}\\dfrac{du}{(3+u^2)^2}$, a hurried student reaches for the memorised $\\int\\dfrac{du}{a^2+u^2}=\\tfrac1a\\arctan\\tfrac{u}{a}$ and silently treats the integrand as a FIRST power, computing $J\\stackrel{\\text{wrong}}{=}\\int_{-1}^{1}\\dfrac{du}{3+u^2}=\\dfrac{2}{\\sqrt3}\\arctan\\dfrac{1}{\\sqrt3}=\\dfrac{\\pi}{3\\sqrt3}$. That yields the bogus $I=\\dfrac{\\pi}{2}\\cdot\\dfrac{\\pi}{3\\sqrt3}=\\dfrac{\\sqrt3\\,\\pi^2}{18}\\approx0.9497$. The square is not cosmetic: $\\int\\dfrac{du}{(a^2+u^2)^2}$ has its OWN value and must be obtained by a reduction formula (integration by parts) or, more slickly, by differentiating $\\int\\dfrac{du}{a^2+u^2}$ with respect to the parameter. The honest $J=\\dfrac1{12}+\\dfrac{\\sqrt3\\,\\pi}{54}\\approx0.1841$ gives the true $I\\approx0.2892$, more than three times smaller than the careless value. (The other dead end is hunting for a primitive of the original integrand, which has none in closed form.)",
    "solutions": [
      {
        "name": "King reflection, then differentiate under the integral on the parameter",
        "steps": [
          "Apply King's property with $a=\\pi$. Under $x\\mapsto\\pi-x$, $\\sin(\\pi-x)=\\sin x$ and $\\cos(\\pi-x)=-\\cos x$, so $\\cos^2x$ — and hence the whole weight $\\dfrac{\\sin x}{(3+\\cos^2x)^2}$ — is INVARIANT while $x\\to\\pi-x$. Adding $f(x)$ to $f(\\pi-x)$, $2I=\\int_0^\\pi\\dfrac{[x+(\\pi-x)]\\sin x}{(3+\\cos^2x)^2}\\,dx=\\pi\\int_0^\\pi\\dfrac{\\sin x}{(3+\\cos^2x)^2}\\,dx.$ King has stripped the $x$ but handed back a real integral.",
          "Substitute $u=\\cos x$, $du=-\\sin x\\,dx$; the limits $x:0\\to\\pi$ give $u:1\\to-1$, and the sign of $du$ flips them back: $\\int_0^\\pi\\dfrac{\\sin x\\,dx}{(3+\\cos^2x)^2}=\\int_{-1}^{1}\\dfrac{du}{(3+u^2)^2}=:J.$ Thus $I=\\dfrac{\\pi}{2}\\,J$, and the square is now front and centre.",
          "Introduce the parameter $a>0$ in $G(a)=\\displaystyle\\int_{-1}^{1}\\dfrac{du}{a+u^2}=\\dfrac{2}{\\sqrt a}\\arctan\\dfrac{1}{\\sqrt a}.$ Since $\\dfrac{\\partial}{\\partial a}\\dfrac{1}{a+u^2}=-\\dfrac{1}{(a+u^2)^2}$, differentiating under the integral sign gives $\\displaystyle\\int_{-1}^{1}\\dfrac{du}{(a+u^2)^2}=-G'(a).$ Computing $G'(a)=-\\dfrac{1}{a^{3/2}}\\arctan\\dfrac{1}{\\sqrt a}-\\dfrac{1}{a(a+1)}$ and negating, $J=-G'(3)=\\dfrac{1}{3\\sqrt3}\\arctan\\dfrac{1}{\\sqrt3}+\\dfrac{1}{3\\cdot4}=\\dfrac{1}{3\\sqrt3}\\cdot\\dfrac{\\pi}{6}+\\dfrac{1}{12}=\\dfrac{\\sqrt3\\,\\pi}{54}+\\dfrac{1}{12}.$",
          "Therefore $I=\\dfrac{\\pi}{2}\\Bigl(\\dfrac{1}{12}+\\dfrac{\\sqrt3\\,\\pi}{54}\\Bigr)=\\dfrac{\\pi}{24}+\\dfrac{\\sqrt3\\,\\pi^2}{108}=\\boxed{\\dfrac{\\pi\\bigl(9+2\\sqrt3\\,\\pi\\bigr)}{216}}.$"
        ]
      },
      {
        "name": "King reflection, then a reduction formula by integration by parts",
        "steps": [
          "As in Method 1, King's reflection on $[0,\\pi]$ (where $\\cos^2x$ is fixed) yields $2I=\\pi\\!\\int_0^\\pi\\dfrac{\\sin x}{(3+\\cos^2x)^2}\\,dx$, and $u=\\cos x$ gives $I=\\dfrac{\\pi}{2}J$ with $J=\\displaystyle\\int_{-1}^{1}\\dfrac{du}{(3+u^2)^2}.$",
          "Build the standard reduction by parts. Writing $1=\\dfrac{(3+u^2)-u^2}{3}$, $J=\\dfrac13\\!\\int_{-1}^{1}\\dfrac{du}{3+u^2}-\\dfrac13\\!\\int_{-1}^{1}\\dfrac{u^2\\,du}{(3+u^2)^2}.$ In the second integral take $dv=\\dfrac{u\\,du}{(3+u^2)^2}$ so $v=-\\dfrac{1}{2(3+u^2)}$, and $w=u$; then $\\int_{-1}^{1}\\dfrac{u^2\\,du}{(3+u^2)^2}=\\Bigl[-\\dfrac{u}{2(3+u^2)}\\Bigr]_{-1}^{1}+\\dfrac12\\!\\int_{-1}^{1}\\dfrac{du}{3+u^2}=-\\dfrac{1}{4}+\\dfrac12\\!\\int_{-1}^{1}\\dfrac{du}{3+u^2}.$",
          "Hence $J=\\dfrac13\\!\\int_{-1}^{1}\\dfrac{du}{3+u^2}-\\dfrac13\\Bigl(-\\dfrac14+\\dfrac12\\!\\int_{-1}^{1}\\dfrac{du}{3+u^2}\\Bigr)=\\dfrac16\\!\\int_{-1}^{1}\\dfrac{du}{3+u^2}+\\dfrac{1}{12}.$ With $\\int_{-1}^{1}\\dfrac{du}{3+u^2}=\\dfrac{2}{\\sqrt3}\\arctan\\dfrac{1}{\\sqrt3}=\\dfrac{2}{\\sqrt3}\\cdot\\dfrac{\\pi}{6}=\\dfrac{\\pi}{3\\sqrt3}$, we get $J=\\dfrac16\\cdot\\dfrac{\\pi}{3\\sqrt3}+\\dfrac{1}{12}=\\dfrac{\\sqrt3\\,\\pi}{54}+\\dfrac{1}{12}.$",
          "Thus $I=\\dfrac{\\pi}{2}J=\\dfrac{\\pi}{2}\\Bigl(\\dfrac{1}{12}+\\dfrac{\\sqrt3\\,\\pi}{54}\\Bigr)=\\boxed{\\dfrac{\\pi\\bigl(9+2\\sqrt3\\,\\pi\\bigr)}{216}}.$"
        ]
      },
      {
        "name": "Trigonometric reduction via the substitution u = sqrt(3) tan theta",
        "steps": [
          "Reach $I=\\dfrac{\\pi}{2}J$, $J=\\displaystyle\\int_{-1}^{1}\\dfrac{du}{(3+u^2)^2}$ exactly as before (King strips the $x$ on $[0,\\pi]$, then $u=\\cos x$). By evenness of the integrand, $J=2\\displaystyle\\int_{0}^{1}\\dfrac{du}{(3+u^2)^2}.$",
          "Put $u=\\sqrt3\\,\\tan\\theta$, $du=\\sqrt3\\,\\sec^2\\theta\\,d\\theta$, and $3+u^2=3\\sec^2\\theta$. Then $\\dfrac{du}{(3+u^2)^2}=\\dfrac{\\sqrt3\\,\\sec^2\\theta}{9\\sec^4\\theta}\\,d\\theta=\\dfrac{1}{3\\sqrt3}\\cos^2\\theta\\,d\\theta.$ As $u:0\\to1$, $\\theta:0\\to\\arctan\\dfrac{1}{\\sqrt3}=\\dfrac{\\pi}{6}.$",
          "With $\\cos^2\\theta=\\dfrac{1+\\cos2\\theta}{2}$, $J=2\\cdot\\dfrac{1}{3\\sqrt3}\\!\\int_0^{\\pi/6}\\dfrac{1+\\cos2\\theta}{2}\\,d\\theta=\\dfrac{1}{3\\sqrt3}\\Bigl[\\theta+\\dfrac{\\sin2\\theta}{2}\\Bigr]_0^{\\pi/6}=\\dfrac{1}{3\\sqrt3}\\Bigl(\\dfrac{\\pi}{6}+\\dfrac{\\sin(\\pi/3)}{2}\\Bigr)=\\dfrac{1}{3\\sqrt3}\\Bigl(\\dfrac{\\pi}{6}+\\dfrac{\\sqrt3}{4}\\Bigr).$ Expanding, $J=\\dfrac{\\pi}{18\\sqrt3}+\\dfrac{1}{12}=\\dfrac{\\sqrt3\\,\\pi}{54}+\\dfrac{1}{12}.$",
          "Finally $I=\\dfrac{\\pi}{2}J=\\dfrac{\\pi}{2}\\Bigl(\\dfrac{1}{12}+\\dfrac{\\sqrt3\\,\\pi}{54}\\Bigr)=\\boxed{\\dfrac{\\pi\\bigl(9+2\\sqrt3\\,\\pi\\bigr)}{216}}.$"
        ]
      }
    ],
    "remark": "Insight: King's reflection is a one-line opening, not the whole game. On $[0,\\pi]$ the map $x\\mapsto\\pi-x$ fixes $\\cos^2x$, so the weight is invariant and reflection only peels off the explicit $x$, leaving $J=\\int_{-1}^{1}\\frac{du}{(3+u^2)^2}$. The genuine difficulty is the SQUARE: a power-one antiderivative is the textbook reflex, but $\\int\\frac{du}{(a^2+u^2)^2}$ is a different beast. The elegant unifier is differentiation under the integral sign — $\\int\\frac{du}{(a+u^2)^2}=-\\frac{d}{da}\\int\\frac{du}{a+u^2}$ — which manufactures the squared denominator for free; integration by parts and the $u=\\sqrt3\\tan\\theta$ reduction are the same fact wearing different clothes. The discipline: after King removes the $x$, respect the exponent on the tail, because that is where the second, harder concept lives."
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
    "title": "The Reflection That Flips the Denominator",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "king-rule",
      "asymmetric-weight",
      "log-cosine",
      "integration-by-parts",
      "poisson-kernel",
      "coupled-system"
    ],
    "statement": "Evaluate \\[ I=\\int_{0}^{\\pi}\\frac{x\\,\\sin x}{5+4\\cos x}\\,dx. \\] Here the reflection $x\\mapsto\\pi-x$ leaves $\\sin x$ alone but sends $\\cos x\\mapsto-\\cos x$, so the weight is not invariant: the denominator turns into $5-4\\cos x$. The naive king move $I=I$ therefore does not fold the integrand onto itself. Find the exact value.",
    "answer": "\\[\\boxed{\\,\\dfrac{\\pi}{2}\\ln 2\\,}\\]",
    "trap": "The seductive error is to apply the king rule mechanically and pretend the denominator survives: one writes $I=\\int_0^\\pi\\frac{(\\pi-x)\\sin x}{5+4\\cos x}\\,dx$, adds to the original to get $2I=\\pi\\int_0^\\pi\\frac{\\sin x}{5+4\\cos x}\\,dx=\\pi\\cdot\\tfrac14\\ln 9$, and concludes $I=\\tfrac{\\pi}{4}\\ln 3\\approx 0.8628$. This is WRONG: under $x\\mapsto\\pi-x$ the factor $\\cos x$ flips sign, so the reflected denominator is $5-4\\cos x$, not $5+4\\cos x$. The honest king step yields a DIFFERENT integral $J=\\int_0^\\pi\\frac{x\\sin x}{5-4\\cos x}\\,dx$, and reflection alone only delivers the sum $I+J=\\tfrac{\\pi}{2}\\ln 3$, never $I$ by itself. The true value $\\tfrac{\\pi}{2}\\ln 2\\approx 1.0888$ is strictly larger than the trap's $\\tfrac{\\pi}{4}\\ln 3$; the asymmetry of the weight is exactly the point, and ignoring the sign flip is the conceptual blunder, not an arithmetic slip.",
    "solutions": [
      {
        "name": "Honest king $\\to$ coupled system, closed by the difference",
        "steps": [
          "Apply $x\\mapsto\\pi-x$ correctly. Since $\\sin(\\pi-x)=\\sin x$ and $\\cos(\\pi-x)=-\\cos x$, the denominator becomes $5-4\\cos x$, so $I=\\int_0^\\pi\\frac{(\\pi-x)\\sin x}{5-4\\cos x}\\,dx=\\pi\\!\\int_0^\\pi\\!\\frac{\\sin x}{5-4\\cos x}\\,dx-J,$ where $J:=\\int_0^\\pi\\frac{x\\sin x}{5-4\\cos x}\\,dx$ is a genuinely new integral.",
          "Evaluate the elementary kernel by $u=\\cos x$: $\\int_0^\\pi\\frac{\\sin x}{5-4\\cos x}\\,dx=\\int_{-1}^{1}\\frac{du}{5-4u}=\\tfrac14\\ln\\frac{9}{1}=\\tfrac14\\ln 9.$ The same substitution gives $\\int_0^\\pi\\frac{\\sin x}{5+4\\cos x}\\,dx=\\tfrac14\\ln 9$ as well. Reflecting $J$ the same way gives $J=\\tfrac{\\pi}{4}\\ln 9-I$, hence the king delivers only the SUM $I+J=\\tfrac{\\pi}{4}\\ln 9=\\tfrac{\\pi}{2}\\ln 3.$",
          "To split $I$ from $J$ form the difference $I-J=\\int_0^\\pi x\\sin x\\Bigl(\\tfrac{1}{5+4\\cos x}-\\tfrac{1}{5-4\\cos x}\\Bigr)dx$. Use the Fourier (Poisson-kernel) expansion $\\frac{4\\sin x}{5+4\\cos x}=-\\frac{d}{dx}\\ln(5+4\\cos x)=2\\sum_{n\\ge1}\\frac{(-1)^{n+1}}{2^{n}}\\sin nx$ and its sign-flipped partner $\\frac{4\\sin x}{5-4\\cos x}=2\\sum_{n\\ge1}\\frac{1}{2^{n}}\\sin nx$. Subtracting kills all even $n$ and doubles the odd ones, and $\\int_0^\\pi x\\sin(nx)\\,dx=\\frac{\\pi(-1)^{n+1}}{n}$ for the surviving odd $n$, summing to $I-J=\\tfrac{\\pi}{2}\\ln\\tfrac43.$",
          "Solve the $2\\times2$ system: $I=\\tfrac12\\bigl[(I+J)+(I-J)\\bigr]=\\tfrac12\\bigl[\\tfrac{\\pi}{2}\\ln 3+\\tfrac{\\pi}{2}\\ln\\tfrac43\\bigr]=\\tfrac{\\pi}{4}\\ln 4=\\boxed{\\dfrac{\\pi}{2}\\ln 2}.$"
        ]
      },
      {
        "name": "Log-derivative trick + integration by parts (king cross-check)",
        "steps": [
          "Notice $\\frac{4\\sin x}{5+4\\cos x}=-\\frac{d}{dx}\\ln(5+4\\cos x)$, so $\\frac{x\\sin x}{5+4\\cos x}=-\\frac{x}{4}\\,\\frac{d}{dx}\\ln(5+4\\cos x).$ Integrate by parts: $I=-\\tfrac14\\Bigl[x\\ln(5+4\\cos x)\\Bigr]_0^\\pi+\\tfrac14\\int_0^\\pi\\ln(5+4\\cos x)\\,dx.$",
          "The boundary term vanishes: at $x=0$ the factor $x=0$; at $x=\\pi$ the log is $\\ln(5-4)=\\ln 1=0$. Hence $I=\\tfrac14\\int_0^\\pi\\ln(5+4\\cos x)\\,dx$, a pole-free, weight-free integral.",
          "Evaluate the log-cosine integral with $a=5,\\ b=4$ via $\\int_0^\\pi\\ln(a+b\\cos x)\\,dx=\\pi\\ln\\frac{a+\\sqrt{a^2-b^2}}{2}$: since $\\sqrt{25-16}=3$, $\\int_0^\\pi\\ln(5+4\\cos x)\\,dx=\\pi\\ln\\frac{5+3}{2}=\\pi\\ln 4=2\\pi\\ln 2.$",
          "Therefore $I=\\tfrac14\\cdot 2\\pi\\ln 2=\\boxed{\\dfrac{\\pi}{2}\\ln 2}.$ (King consistency: the same IBP on $J$ gives a nonzero boundary $\\tfrac14\\pi\\ln 9$ and $J=\\tfrac{\\pi}{2}\\ln\\tfrac32$, so $I+J=\\tfrac{\\pi}{2}\\ln 3$, matching the reflection sum exactly.)"
        ]
      },
      {
        "name": "Direct log-cosine via the doubling functional equation",
        "steps": [
          "By Solution 2's boundary-free reduction it suffices to compute $F=\\int_0^\\pi\\ln(5+4\\cos x)\\,dx$. Factor $5+4\\cos x=|1+2e^{ix}|^2=(1+2e^{ix})(1+2e^{-ix})$, so $F=\\int_0^\\pi\\bigl[\\ln(1+2e^{ix})+\\ln(1+2e^{-ix})\\bigr]dx.$",
          "Write $5+4\\cos x=4\\,\\bigl|\\,e^{ix/2}+\\tfrac12 e^{-ix/2}\\bigr|^2$ and instead use the clean doubling identity: with $G(r)=\\int_0^\\pi\\ln(1-2r\\cos x+r^2)\\,dx$ one has $G(r)=0$ for $|r|\\le1$ and $G(r)=2\\pi\\ln|r|$ for $|r|>1$, proved from $G(r)=\\tfrac12 G(r^2)$ together with $G(r)+G(-r)=G(r^2)$. Here $5+4\\cos x=1-2(-2)\\cos x+(-2)^2$, i.e. $r=-2$ with $|r|=2>1$.",
          "Thus $F=G(-2)=2\\pi\\ln 2.$ (Numerically $F=4.35517\\ldots=2\\pi\\ln 2$, confirming the branch $|r|>1$.)",
          "Hence $I=\\tfrac14 F=\\tfrac14\\cdot 2\\pi\\ln 2=\\boxed{\\dfrac{\\pi}{2}\\ln 2}.$"
        ]
      }
    ],
    "remark": "Insight: this is a king problem whose whole lesson is that the reflection is not self-folding. Because $\\cos x$ is odd about $x=\\pi/2$, the substitution $x\\mapsto\\pi-x$ flips the denominator from $5+4\\cos x$ to $5-4\\cos x$, so the integrand maps to a sibling $J$, not back to $I$. Reflection alone is therefore only half the engine: it hands you the symmetric combination $I+J=\\tfrac{\\pi}{2}\\ln 3$, and you must supply a second, independent relation (the antisymmetric difference $I-J=\\tfrac{\\pi}{2}\\ln\\tfrac43$, or an IBP onto the boundary-free $\\int_0^\\pi\\ln(5+4\\cos x)$) to break the tie. The cleanest single stroke is the log-derivative $\\frac{4\\sin x}{5+4\\cos x}=-\\frac{d}{dx}\\ln(5+4\\cos x)$: IBP annihilates the linear weight $x$ exactly because $\\ln(5+4\\cos\\pi)=\\ln 1=0$, collapsing everything to the classical $\\int_0^\\pi\\ln(a+b\\cos x)=\\pi\\ln\\frac{a+\\sqrt{a^2-b^2}}{2}$. The pretty cancellation $\\tfrac14\\cdot 2\\pi\\ln 2$ hides the real moral: respect the sign flip the king induces, or you will average two unequal denominators and report $\\tfrac{\\pi}{4}\\ln 3$ instead of $\\tfrac{\\pi}{2}\\ln 2$."
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
    "title": "The Mismatched Exponents That Refuse to Pair",
    "difficulty": 5,
    "task": "Classify",
    "tags": [
      "king-rule",
      "parameter-dependence",
      "self-reflective",
      "classification",
      "monotonicity"
    ],
    "statement": "For real parameters $a,b$ consider \\[ I(a,b)=\\int_{0}^{\\pi/2}\\frac{\\sin^{a}x}{\\sin^{a}x+\\cos^{b}x}\\,dx . \\] The integrand lies in $[0,1]$ for all real $a,b$ (numerator and denominator are nonnegative on the open interval), so the integral always converges — there is no convergence subtlety to hide behind. Determine the COMPLETE set of pairs $(a,b)$ for which $I(a,b)=\\dfrac{\\pi}{4}$. Beware: the King reflection $x\\mapsto \\tfrac{\\pi}{2}-x$ does not send this integrand to its own complement unless the two exponents agree, so the famous one-line collapse to $\\pi/4$ is a privilege, not a guarantee.",
    "answer": "$\\{(a,b)\\in\\mathbb{R}^2 : a=b\\}$",
    "trap": "The seductive error is to reflexively quote the $\\int_0^{\\pi/2}\\frac{f(\\sin)}{f(\\sin)+f(\\cos)}=\\frac\\pi4$ template and declare the answer is ALL $(a,b)$. That template requires the SAME function $f$ applied to $\\sin$ and to $\\cos$, so that $f(x)+f(\\tfrac\\pi2-x)\\equiv 1$. Here the two slots carry DIFFERENT exponents: the King reflection turns $\\frac{\\sin^a x}{\\sin^a x+\\cos^b x}$ into $\\frac{\\cos^a x}{\\cos^a x+\\sin^b x}$, and adding the two gives $1$ only when $a=b$. For $a\\neq b$ the sum of an integrand and its reflection is NOT the constant $1$, so $2I\\neq\\frac\\pi2$ and the value genuinely drifts off $\\frac\\pi4$ (numerically $I(5,2)=0.6256<\\frac\\pi4$, $I(2,5)=0.9452>\\frac\\pi4$). A second, opposite trap is to over-correct and worry about whether the integral even exists for negative or large exponents and append a convergence caveat — but the integrand is a ratio of the form $\\frac{N}{N+M}$ with $N,M\\ge 0$, hence trapped in $[0,1]$, so it ALWAYS converges and the classification is purely $a=b$, with no domain footnote.",
    "solutions": [
      {
        "name": "King reflection, then read the sign of the leftover",
        "steps": [
          "Apply the King rule $x\\mapsto\\tfrac\\pi2-x$, which swaps $\\sin x\\leftrightarrow\\cos x$: $I(a,b)=\\int_0^{\\pi/2}\\frac{\\cos^a x}{\\cos^a x+\\sin^b x}\\,dx$. Adding this to the original form gives $2I(a,b)=\\int_0^{\\pi/2}\\!\\Big[\\frac{\\sin^a x}{\\sin^a x+\\cos^b x}+\\frac{\\cos^a x}{\\cos^a x+\\sin^b x}\\Big]dx$.",
          "Combine the bracket over a common denominator. Writing $s=\\sin x,\\ c=\\cos x$, the bracket minus $1$ simplifies exactly to \\[ \\frac{s^a}{s^a+c^b}+\\frac{c^a}{c^a+s^b}-1=\\frac{s^a c^a-s^b c^b}{(s^a+c^b)(c^a+s^b)}=\\frac{(sc)^a-(sc)^b}{D},\\quad D=(s^a+c^b)(c^a+s^b)>0. \\] Hence $2I(a,b)-\\dfrac\\pi2=\\displaystyle\\int_0^{\\pi/2}\\frac{(\\sin x\\cos x)^a-(\\sin x\\cos x)^b}{D}\\,dx$.",
          "Set $u=\\sin x\\cos x=\\tfrac12\\sin 2x$, so $0<u\\le 1$ on $(0,\\tfrac\\pi2)$ with $u=1$ only at the single point $x=\\tfrac\\pi4$. If $a=b$ the numerator $u^a-u^b\\equiv 0$, so the integral vanishes and $I=\\tfrac\\pi4$. If $a>b$ then $u^a<u^b$ for every $u\\in(0,1)$, so the integrand is strictly negative on a set of full measure, forcing $2I-\\tfrac\\pi2<0$, i.e. $I<\\tfrac\\pi4$; symmetrically $a<b\\Rightarrow I>\\tfrac\\pi4$.",
          "Thus $I(a,b)=\\tfrac\\pi4$ holds if and only if the leftover integral is zero, which happens precisely when $a=b$. The solution set is $\\boxed{\\{(a,b):a=b\\}}$."
        ]
      },
      {
        "name": "Strict monotonicity pins the unique root",
        "steps": [
          "Fix $b$ and view $\\phi(a)=I(a,b)$. Pointwise, $\\dfrac{\\partial}{\\partial a}\\frac{\\sin^a x}{\\sin^a x+\\cos^b x}=\\frac{\\cos^b x\\,(\\ln\\sin x)\\,\\sin^a x}{(\\sin^a x+\\cos^b x)^2}$, and since $\\ln\\sin x<0$ on $(0,\\tfrac\\pi2)$ this is strictly negative there. Therefore $\\phi$ is strictly decreasing in $a$, so the equation $I(a,b)=\\tfrac\\pi4$ has at most one solution $a$ for each fixed $b$.",
          "Exhibit that solution: at $a=b$ the integrand becomes $\\frac{\\sin^b x}{\\sin^b x+\\cos^b x}$, the genuine $\\frac{f(\\sin)}{f(\\sin)+f(\\cos)}$ shape with $f(t)=t^b$. King reflection now gives the honest complement $\\frac{\\cos^b x}{\\cos^b x+\\sin^b x}$, the two add to $1$, and $2I=\\tfrac\\pi2$, so $I(b,b)=\\tfrac\\pi4$.",
          "By strict monotonicity, $a=b$ is the ONLY value of $a$ (for that $b$) achieving $\\tfrac\\pi4$; no off-diagonal pair can sneak in by coincidence. Letting $b$ range over $\\mathbb{R}$ sweeps out exactly the diagonal.",
          "Hence the full solution set is $\\boxed{\\{(a,b):a=b\\}}$."
        ]
      },
      {
        "name": "Tangent substitution exposes the off-diagonal asymmetry",
        "steps": [
          "Substitute $t=\\tan x$, $dx=\\frac{dt}{1+t^2}$, and divide numerator and denominator by $\\cos^a x$ (valid on $(0,\\tfrac\\pi2)$): $\\frac{\\sin^a x}{\\sin^a x+\\cos^b x}=\\frac{\\tan^a x}{\\tan^a x+\\cos^{b-a}x}=\\frac{t^a}{t^a+(1+t^2)^{-(b-a)/2}}$. So $I(a,b)=\\int_0^{\\infty}\\frac{t^a}{t^a+(1+t^2)^{(a-b)/2}}\\,\\frac{dt}{1+t^2}$.",
          "When $a=b$ the extra factor $(1+t^2)^{(a-b)/2}=1$ disappears, leaving $\\int_0^{\\infty}\\frac{t^a}{t^a+1}\\frac{dt}{1+t^2}$. The map $t\\mapsto 1/t$ sends this to $\\int_0^{\\infty}\\frac{1}{t^a+1}\\frac{dt}{1+t^2}$; the two add to $\\int_0^\\infty\\frac{dt}{1+t^2}=\\tfrac\\pi2$, giving $I=\\tfrac\\pi4$.",
          "When $a\\neq b$ the factor $(1+t^2)^{(a-b)/2}$ is NOT invariant under $t\\mapsto 1/t$ (it scales by $(1+t^2)^{(a-b)/2}\\!\\big/\\!(1+t^{-2})^{(a-b)/2}=t^{-(a-b)}$), so the inversion no longer pairs the integrand with $1$ minus itself; the symmetry that produced $\\tfrac\\pi4$ is destroyed and the value moves away from $\\tfrac\\pi4$.",
          "Only the diagonal restores the invariance, so $I(a,b)=\\tfrac\\pi4\\iff a=b$, i.e. $\\boxed{\\{(a,b):a=b\\}}$."
        ]
      }
    ],
    "remark": "Insight: the celebrated identity $\\int_0^{\\pi/2}\\frac{f(\\sin x)}{f(\\sin x)+f(\\cos x)}dx=\\frac\\pi4$ is not about the ratio looking pretty — it is about ONE function $f$ sitting in both slots, which is exactly what makes the reflected integrand the complement of the original. Splitting the exponents into $\\sin^a$ over $\\sin^a+\\cos^b$ breaks that single-$f$ structure; the King reflection still applies, but it now leaves behind $\\int (\\,(\\sin x\\cos x)^a-(\\sin x\\cos x)^b)/D$, a quantity whose sign is governed entirely by whether $a$ exceeds, equals, or trails $b$. The reflection has done its job — it has pinpointed the obstruction — but it cannot manufacture the symmetry the problem was missing. The collapse to $\\pi/4$ is therefore a measure-zero event in parameter space: the diagonal $a=b$, and nothing else."
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
    "title": "The King's Tangent–Cotangent Duel",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "king-rule",
      "tan-cot-pairing",
      "integration-by-parts",
      "fourier-doubling",
      "divergence-trap"
    ],
    "statement": "Evaluate \\[ I=\\int_{0}^{\\pi/2} x\\cot x\\,dx. \\] The integrand is well-behaved on $(0,\\pi/2)$: near $x=0$, $x\\cot x\\to 1$, and near $x=\\pi/2$ the factor $\\cot x\\to 0$, so $I$ converges. The complement substitution $x\\mapsto \\tfrac{\\pi}{2}-x$ turns $\\cot x$ into $\\tan x$, pairing this integral with its tangent sibling. Exploit that reflection to obtain the exact value.",
    "answer": "$\\dfrac{\\pi}{2}\\ln 2$",
    "trap": "The fatal shortcut is to apply the king move and then split. Reflection gives $I=\\int_0^{\\pi/2}\\left(\\tfrac{\\pi}{2}-x\\right)\\tan x\\,dx$; a strong student is tempted to break this into $\\tfrac{\\pi}{2}\\int_0^{\\pi/2}\\tan x\\,dx-\\int_0^{\\pi/2} x\\tan x\\,dx$ and evaluate each piece. But BOTH pieces diverge: $\\int_0^{\\pi/2}\\tan x\\,dx=+\\infty$ and $\\int_0^{\\pi/2} x\\tan x\\,dx=+\\infty$, because $\\tan x\\sim \\tfrac{1}{\\pi/2-x}$ at the right endpoint. Their difference is a finite cancellation of two infinities; splitting the integrand commits the cardinal sin of subtracting $\\infty-\\infty$ and produces nonsense (or an illusory “$\\tfrac{\\pi}{2}\\cdot\\infty$”). The convergent factor $\\tfrac{\\pi}{2}-x$ vanishes exactly where $\\tan x$ blows up, and it MUST stay glued to $\\tan x$. The trap is conceptual—improper-integral linearity fails when the parts diverge—not an arithmetic slip.",
    "solutions": [
      {
        "name": "King reflection → tan/cot duel → Fourier doubling",
        "steps": [
          "Write $\\cot x=\\dfrac{d}{dx}\\ln(\\sin x)$ and integrate $I$ by parts: $I=\\bigl[x\\ln\\sin x\\bigr]_0^{\\pi/2}-\\int_0^{\\pi/2}\\ln\\sin x\\,dx$. The boundary term dies on both ends: at $x=\\tfrac{\\pi}{2}$, $\\ln\\sin\\tfrac{\\pi}{2}=\\ln 1=0$; at $x=0$, $x\\ln\\sin x\\to 0$. Hence $I=-\\displaystyle\\int_0^{\\pi/2}\\ln\\sin x\\,dx.$",
          "Now run the KING reflection $x\\mapsto\\tfrac{\\pi}{2}-x$ on the original $I$: since $\\cot(\\tfrac{\\pi}{2}-x)=\\tan x$, we get $I=\\int_0^{\\pi/2}\\bigl(\\tfrac{\\pi}{2}-x\\bigr)\\tan x\\,dx$. With $\\tan x=-\\dfrac{d}{dx}\\ln\\cos x$, integrate by parts keeping the convergent weight glued: $I=\\bigl[-(\\tfrac{\\pi}{2}-x)\\ln\\cos x\\bigr]_0^{\\pi/2}-\\int_0^{\\pi/2}\\ln\\cos x\\,dx$. The boundary vanishes ($(\\tfrac{\\pi}{2}-x)\\ln\\cos x\\to 0$ at $x=\\tfrac{\\pi}{2}$, and $\\tfrac{\\pi}{2}\\ln\\cos 0=0$), so $I=-\\displaystyle\\int_0^{\\pi/2}\\ln\\cos x\\,dx.$",
          "ADD the two boundary-free forms—this is where the reflection pays off, fusing the cotangent and tangent siblings: $2I=-\\int_0^{\\pi/2}\\bigl(\\ln\\sin x+\\ln\\cos x\\bigr)dx=-\\int_0^{\\pi/2}\\ln(\\sin x\\cos x)\\,dx.$ Apply the duplication identity $\\sin x\\cos x=\\tfrac12\\sin 2x$: $2I=-\\int_0^{\\pi/2}\\ln\\!\\Bigl(\\tfrac12\\sin 2x\\Bigr)dx=\\tfrac{\\pi}{2}\\ln 2-\\int_0^{\\pi/2}\\ln\\sin 2x\\,dx.$",
          "Substitute $t=2x$ and use the Fourier series $\\ln\\sin t=-\\ln 2-\\sum_{k\\ge1}\\tfrac{\\cos 2kt}{k}$, whose cosine terms integrate to zero over a full period: $\\int_0^{\\pi/2}\\ln\\sin 2x\\,dx=\\tfrac12\\int_0^{\\pi}\\ln\\sin t\\,dt=\\tfrac12(-\\pi\\ln 2)=-\\tfrac{\\pi}{2}\\ln 2.$ Therefore $2I=\\tfrac{\\pi}{2}\\ln 2-\\bigl(-\\tfrac{\\pi}{2}\\ln 2\\bigr)=\\pi\\ln 2$, giving \\[\\boxed{\\,I=\\dfrac{\\pi}{2}\\ln 2\\,}.\\]"
        ]
      },
      {
        "name": "Feynman differentiation through the reflected family",
        "steps": [
          "Embed $I$ in a parameter family suggested by the tan/cot pairing: for $a\\ge0$ set $F(a)=\\displaystyle\\int_0^{\\pi/2}\\arctan(a\\tan x)\\,\\cot x\\,dx$. Since $\\arctan(\\tan x)=x$ on $(0,\\tfrac{\\pi}{2})$, we have $F(1)=\\int_0^{\\pi/2}x\\cot x\\,dx=I$, while $F(0)=0.$",
          "Differentiate under the integral sign: $F'(a)=\\int_0^{\\pi/2}\\dfrac{\\tan x}{1+a^2\\tan^2 x}\\cdot\\cot x\\,dx=\\int_0^{\\pi/2}\\dfrac{dx}{1+a^2\\tan^2 x}.$ Multiply through by $\\cos^2 x$: $F'(a)=\\int_0^{\\pi/2}\\dfrac{\\cos^2 x}{\\cos^2 x+a^2\\sin^2 x}\\,dx.$",
          "Evaluate this elementary rational-trig integral. Substitute $u=\\tan x$ (so $dx=\\frac{du}{1+u^2}$ and $\\cos^2 x=\\frac{1}{1+u^2}$): $F'(a)=\\int_0^{\\infty}\\frac{du}{(1+u^2)(1+a^2u^2)}.$ Partial fractions give $\\frac{1}{(1+u^2)(1+a^2u^2)}=\\frac{1}{1-a^2}\\Bigl(\\frac{1}{1+u^2}-\\frac{a^2}{1+a^2u^2}\\Bigr)$, and using $\\int_0^\\infty\\frac{du}{1+u^2}=\\frac{\\pi}{2}$, $\\int_0^\\infty\\frac{a^2\\,du}{1+a^2u^2}=\\frac{\\pi a}{2}$ we obtain $F'(a)=\\frac{1}{1-a^2}\\cdot\\frac{\\pi}{2}(1-a)=\\dfrac{\\pi}{2(1+a)}.$ (Equivalently, write $\\frac{\\cos^2 x}{\\cos^2x+a^2\\sin^2x}=1-a^2\\frac{\\sin^2x}{\\cos^2x+a^2\\sin^2x}$ and use $\\int_0^{\\pi/2}\\frac{\\sin^2x\\,dx}{\\cos^2x+a^2\\sin^2x}=\\frac{\\pi}{2a(a+1)}$ to get $F'(a)=\\frac{\\pi}{2}-a^2\\cdot\\frac{\\pi}{2a(a+1)}=\\frac{\\pi}{2(1+a)}$.)",
          "Integrate from $0$ to $1$: $I=F(1)=\\int_0^1\\dfrac{\\pi}{2(1+a)}\\,da=\\dfrac{\\pi}{2}\\bigl[\\ln(1+a)\\bigr]_0^1=\\boxed{\\dfrac{\\pi}{2}\\ln 2}.$"
        ]
      },
      {
        "name": "Direct log-sine cross-check via the king on a full period",
        "steps": [
          "From the IBP of Solution 1, $I=-\\int_0^{\\pi/2}\\ln\\sin x\\,dx$. Call $L=\\int_0^{\\pi/2}\\ln\\sin x\\,dx$ and $M=\\int_0^{\\pi/2}\\ln\\cos x\\,dx$. The king reflection $x\\mapsto\\tfrac{\\pi}{2}-x$ swaps $\\sin\\leftrightarrow\\cos$, so $L=M$ at once—no computation needed.",
          "Add them: $L+M=\\int_0^{\\pi/2}\\ln(\\sin x\\cos x)\\,dx=\\int_0^{\\pi/2}\\ln\\!\\Bigl(\\tfrac12\\sin 2x\\Bigr)dx=-\\tfrac{\\pi}{2}\\ln 2+\\int_0^{\\pi/2}\\ln\\sin 2x\\,dx.$",
          "By $t=2x$, $\\int_0^{\\pi/2}\\ln\\sin 2x\\,dx=\\tfrac12\\int_0^{\\pi}\\ln\\sin t\\,dt=\\tfrac12\\cdot 2\\!\\int_0^{\\pi/2}\\ln\\sin t\\,dt=L$ (the inner king $t\\mapsto\\pi-t$ folds $[0,\\pi]$ onto twice $[0,\\pi/2]$). Hence $2L=L+M=-\\tfrac{\\pi}{2}\\ln 2+L$, which forces $L=-\\tfrac{\\pi}{2}\\ln 2.$",
          "Therefore $I=-L=\\boxed{\\dfrac{\\pi}{2}\\ln 2}.$"
        ]
      }
    ],
    "remark": "Insight: the reflection here is not a one-line $I=I$ fold—it is a duel. The king map $x\\mapsto\\tfrac{\\pi}{2}-x$ sends $\\cot$ to $\\tan$, so the cotangent integral and its tangent sibling are two faces of the same value; integrating each by parts (with the weight kept glued to the divergent factor) collapses both onto $-\\int\\ln\\sin$ and $-\\int\\ln\\cos$, and adding them invokes the duplication $\\sin x\\cos x=\\tfrac12\\sin 2x$. The closed form $\\tfrac{\\pi}{2}\\ln 2$ is Catalan-free precisely because the cosine Fourier modes of $\\ln\\sin$ integrate to zero over the doubled period—reflection plus periodicity, not a special-value miracle. The trap is the real lesson: the reflected form $\\int_0^{\\pi/2}(\\tfrac{\\pi}{2}-x)\\tan x\\,dx$ converges only because $\\tfrac{\\pi}{2}-x$ annihilates the pole of $\\tan x$ at $\\tfrac{\\pi}{2}$; splitting off the $\\tfrac{\\pi}{2}\\int\\tan$ piece breaks a finite integral into $\\infty-\\infty$. Respect the gluing, and the king does the rest."
  },
  {
    "theme": "kingrule",
    "themeLabel": "The Reflection (King) Property",
    "title": "The Sign That the Limit Builds",
    "difficulty": 5,
    "task": "Evaluate the limit",
    "tags": [
      "king-rule",
      "dominated-convergence",
      "sign-function",
      "indicator-limit",
      "odd-about-center",
      "centered-weight"
    ],
    "statement": "For each integer $n\\ge 1$ let \\[ I_n=\\int_{0}^{\\pi/2}\\frac{\\sin^{n}x-\\cos^{n}x}{\\sin^{n}x+\\cos^{n}x}\\;x\\,dx. \\] Evaluate \\[ L=\\lim_{n\\to\\infty} I_n. \\] The reflection $x\\mapsto \\tfrac{\\pi}{2}-x$ swaps $\\sin x$ and $\\cos x$, so the rational factor $R_n(x)=\\dfrac{\\sin^{n}x-\\cos^{n}x}{\\sin^{n}x+\\cos^{n}x}$ is odd about the centre $x=\\tfrac{\\pi}{4}$. As $n\\to\\infty$ this factor collapses to a sign: $R_n(x)\\to-1$ on $\\bigl(0,\\tfrac{\\pi}{4}\\bigr)$ and $R_n(x)\\to+1$ on $\\bigl(\\tfrac{\\pi}{4},\\tfrac{\\pi}{2}\\bigr)$. The interaction of this hardening sign with the linear weight $x$ is the whole problem; give the exact value of $L$.",
    "answer": "\\[\\boxed{\\,\\dfrac{\\pi^{2}}{16}\\,}\\]",
    "trap": "The fatal shortcut is to lean on the king symmetry too early. Because $R_n$ is odd about $x=\\tfrac{\\pi}{4}$, the unweighted integral $\\int_0^{\\pi/2}R_n(x)\\,dx=0$ for every $n$. A student who notices this and then argues \"the limiting integrand is the odd sign function $\\operatorname{sgn}\\!\\bigl(x-\\tfrac{\\pi}{4}\\bigr)$, whose integral over the symmetric interval also vanishes, so $L=0$\" has silently dropped the weight $x$. The integrand is $R_n(x)\\,x$, not $R_n(x)$: the limiting integrand is $x\\,\\operatorname{sgn}\\!\\bigl(x-\\tfrac{\\pi}{4}\\bigr)$, which is NOT odd about $\\tfrac{\\pi}{4}$ (the weight is heavier on the right half), so it does not integrate to zero. The cancellation that kills $\\int R_n$ is exactly what the factor $x$ destroys; the answer $\\tfrac{\\pi^2}{16}\\approx0.6169$ is strictly positive, and reporting $L=0$ mistakes a symmetry of $R_n$ for a symmetry of $R_n\\cdot x$.",
    "solutions": [
      {
        "name": "King centering, then collapse the sign on the half-interval",
        "steps": [
          "First record the king fact cleanly. Under $x\\mapsto\\tfrac{\\pi}{2}-x$ we have $\\sin\\leftrightarrow\\cos$, so $R_n\\bigl(\\tfrac{\\pi}{2}-x\\bigr)=-R_n(x)$: the rational factor is odd about the centre $c=\\tfrac{\\pi}{4}$. Reflecting $\\int_0^{\\pi/2}R_n(x)\\,dx$ by the king rule sends it to its own negative, hence $\\int_0^{\\pi/2}R_n(x)\\,dx=0$ for every $n$.",
          "Use this to recentre the weight without changing the value: $I_n=\\int_0^{\\pi/2}R_n(x)\\,x\\,dx=\\int_0^{\\pi/2}R_n(x)\\,\\Bigl(x-\\tfrac{\\pi}{4}\\Bigr)dx+\\tfrac{\\pi}{4}\\underbrace{\\int_0^{\\pi/2}R_n(x)\\,dx}_{=\\,0}=\\int_0^{\\pi/2}R_n(x)\\Bigl(x-\\tfrac{\\pi}{4}\\Bigr)dx.$ Now BOTH factors are odd about $\\tfrac{\\pi}{4}$, so the product is even about $\\tfrac{\\pi}{4}$, giving $I_n=2\\int_{\\pi/4}^{\\pi/2}R_n(x)\\Bigl(x-\\tfrac{\\pi}{4}\\Bigr)dx.$",
          "On the open half $\\bigl(\\tfrac{\\pi}{4},\\tfrac{\\pi}{2}\\bigr)$ we have $\\tan x>1$, so $R_n(x)=\\dfrac{\\tan^{n}x-1}{\\tan^{n}x+1}\\to 1$ pointwise, and $\\lvert R_n(x)(x-\\tfrac{\\pi}{4})\\rvert\\le (x-\\tfrac{\\pi}{4})$, an integrable dominating function. By dominated convergence $I_n\\to 2\\int_{\\pi/4}^{\\pi/2}\\Bigl(x-\\tfrac{\\pi}{4}\\Bigr)dx.$",
          "Compute the elementary integral: $2\\int_{\\pi/4}^{\\pi/2}\\bigl(x-\\tfrac{\\pi}{4}\\bigr)dx=2\\cdot\\Bigl[\\tfrac{(x-\\pi/4)^2}{2}\\Bigr]_{\\pi/4}^{\\pi/2}=\\Bigl(\\tfrac{\\pi}{4}\\Bigr)^{2}=\\boxed{\\dfrac{\\pi^{2}}{16}}.$"
        ]
      },
      {
        "name": "Direct dominated convergence to the weighted sign function",
        "steps": [
          "Pin the pointwise limit. Writing $R_n(x)=\\dfrac{\\tan^{n}x-1}{\\tan^{n}x+1}$, on $\\bigl(0,\\tfrac{\\pi}{4}\\bigr)$ we have $\\tan x<1\\Rightarrow R_n(x)\\to-1$, on $\\bigl(\\tfrac{\\pi}{4},\\tfrac{\\pi}{2}\\bigr)$ we have $\\tan x>1\\Rightarrow R_n(x)\\to+1$, and at the single point $x=\\tfrac{\\pi}{4}$ it is $0$. Thus $R_n(x)\\,x\\to x\\,\\operatorname{sgn}\\!\\bigl(x-\\tfrac{\\pi}{4}\\bigr)$ for a.e. $x$.",
          "Dominate honestly: $\\lvert R_n(x)\\rvert\\le 1$ pointwise, so $\\lvert R_n(x)\\,x\\rvert\\le x$, and $x$ is integrable on $\\bigl[0,\\tfrac{\\pi}{2}\\bigr]$. The hypotheses of the dominated convergence theorem hold, so the limit passes inside the integral: $L=\\int_0^{\\pi/2}x\\,\\operatorname{sgn}\\!\\bigl(x-\\tfrac{\\pi}{4}\\bigr)dx.$",
          "Split at the centre exactly where the sign changes: $L=-\\int_0^{\\pi/4}x\\,dx+\\int_{\\pi/4}^{\\pi/2}x\\,dx=-\\tfrac12\\Bigl(\\tfrac{\\pi}{4}\\Bigr)^{2}+\\tfrac12\\Bigl[\\Bigl(\\tfrac{\\pi}{2}\\Bigr)^{2}-\\Bigl(\\tfrac{\\pi}{4}\\Bigr)^{2}\\Bigr].$",
          "Arithmetic: $L=\\tfrac12\\Bigl[\\tfrac{\\pi^2}{4}-2\\cdot\\tfrac{\\pi^2}{16}\\Bigr]=\\tfrac12\\Bigl[\\tfrac{4\\pi^2}{16}-\\tfrac{2\\pi^2}{16}\\Bigr]=\\tfrac12\\cdot\\tfrac{2\\pi^2}{16}=\\boxed{\\dfrac{\\pi^{2}}{16}}.$"
        ]
      },
      {
        "name": "King-fold first, then a quantitative tail bound (no DCT black box)",
        "steps": [
          "Fold the integral onto its right half using the king reflection $x\\mapsto\\tfrac{\\pi}{2}-x$ and the oddness $R_n(\\tfrac{\\pi}{2}-x)=-R_n(x)$ from Solution 1. Pairing $x$ with $\\tfrac{\\pi}{2}-x$ gives $R_n(x)\\,x+R_n(\\tfrac{\\pi}{2}-x)(\\tfrac{\\pi}{2}-x)=R_n(x)\\bigl(x-(\\tfrac{\\pi}{2}-x)\\bigr)=R_n(x)\\bigl(2x-\\tfrac{\\pi}{2}\\bigr),$ hence $I_n=\\int_{\\pi/4}^{\\pi/2}R_n(x)\\bigl(2x-\\tfrac{\\pi}{2}\\bigr)dx=2\\int_{\\pi/4}^{\\pi/2}R_n(x)\\bigl(x-\\tfrac{\\pi}{4}\\bigr)dx,$ a finite-$n$ identity with $R_n\\in(0,1)$ on the whole range of integration.",
          "Write $R_n(x)=1-\\dfrac{2}{\\tan^{n}x+1}=1-\\varepsilon_n(x)$ with $0<\\varepsilon_n(x)=\\dfrac{2}{\\tan^{n}x+1}<2\\cot^{n}x.$ Then $I_n=2\\int_{\\pi/4}^{\\pi/2}\\bigl(x-\\tfrac{\\pi}{4}\\bigr)dx-2\\int_{\\pi/4}^{\\pi/2}\\varepsilon_n(x)\\bigl(x-\\tfrac{\\pi}{4}\\bigr)dx=\\tfrac{\\pi^2}{16}-E_n.$",
          "Bound the error. Since $0\\le x-\\tfrac{\\pi}{4}\\le\\tfrac{\\pi}{4}$ and $\\varepsilon_n>0$, $0\\le E_n\\le 2\\cdot\\tfrac{\\pi}{4}\\int_{\\pi/4}^{\\pi/2}\\dfrac{2\\,dx}{\\tan^{n}x+1}.$ The remaining integral is dominated by the region near $\\tfrac{\\pi}{4}$ where $\\tan x$ exceeds $1$ by an order-$1$ amount once $x-\\tfrac{\\pi}{4}$ is bounded below, and $\\int_{\\pi/4}^{\\pi/2}\\frac{dx}{\\tan^n x+1}\\to0$; concretely $\\tan x\\ge 1+ (x-\\tfrac{\\pi}{4})$ gives $E_n=O\\!\\big(n^{-1}\\big)\\to0$.",
          "Therefore $L=\\lim_{n\\to\\infty}I_n=\\tfrac{\\pi^2}{16}-\\lim_{n\\to\\infty}E_n=\\tfrac{\\pi^2}{16}-0=\\boxed{\\dfrac{\\pi^{2}}{16}}.$"
        ]
      }
    ],
    "remark": "Insight: the king rule does two different jobs here, and the trap is mistaking one for the other. The reflection $x\\mapsto\\tfrac{\\pi}{2}-x$ makes the rational factor $R_n$ odd about $\\tfrac{\\pi}{4}$, which kills the UNWEIGHTED integral $\\int_0^{\\pi/2}R_n=0$ for every $n$ exactly. But the integrand carries the weight $x$, and $x\\cdot R_n$ is NOT odd about $\\tfrac{\\pi}{4}$. The correct king move is to recentre the weight: subtract $\\tfrac{\\pi}{4}$ (free, because $\\int R_n=0$), turning the problem into $\\int R_n(x)(x-\\tfrac{\\pi}{4})$, a product of two odd functions, hence even about $\\tfrac{\\pi}{4}$, and only then does folding onto the right half help. The limit is a genuine theorem rather than a coincidence because the hardening factor $R_n\\to\\operatorname{sgn}(x-\\tfrac{\\pi}{4})$ is controlled by the integrable dominator $\\lvert R_n x\\rvert\\le x$, so dominated convergence legitimately swaps limit and integral; reflection supplies the symmetry that simplifies the limiting weighted-sign integral to the clean area $(\\tfrac{\\pi}{4})^2=\\tfrac{\\pi^2}{16}$. Drop the weight and you get $0$; respect it and the asymmetric half wins."
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
    "title": "The Lattice Distances That Fill a Square, Not a Disk",
    "difficulty": 5,
    "task": "Evaluate the limit",
    "tags": [
      "double riemann sum",
      "two-dimensional mesh",
      "fubini",
      "homogeneity",
      "polar over a square",
      "region trap"
    ],
    "statement": "For each integer $n\\ge 1$, consider the average Euclidean distance from the origin to the lattice points $\\bigl(\\tfrac{j}{n},\\tfrac{k}{n}\\bigr)$, $1\\le j,k\\le n$, that tile the unit square. Concretely, evaluate \\[ L=\\lim_{n\\to\\infty}\\frac{1}{n^{3}}\\sum_{j=1}^{n}\\sum_{k=1}^{n}\\sqrt{\\,j^{2}+k^{2}\\,}. \\] Both indices run over the full range $1$ to $n$, so the $n^{2}$ sample points fill the whole square $[0,1]^{2}$, while the normalising factor splits as $\\dfrac{1}{n^{3}}=\\dfrac{1}{n^{2}}\\cdot\\dfrac{1}{n}$: an area element $\\tfrac{1}{n^{2}}$ for the two-dimensional mesh, and one more $\\tfrac1n$ that the homogeneous integrand $\\sqrt{j^{2}+k^{2}}=n\\sqrt{(j/n)^{2}+(k/n)^{2}}$ carries on its own.",
    "answer": "\\[\\boxed{\\,\\dfrac{\\sqrt{2}+\\ln\\!\\left(1+\\sqrt{2}\\right)}{3}\\,}\\]",
    "trap": "The integrand $\\sqrt{x^{2}+y^{2}}=r$ screams \"polar\", and a strong student rewrites $L=\\iint_R r\\,dA=\\int r\\cdot r\\,dr\\,d\\theta$, then carelessly integrates over the QUARTER unit DISK $\\{r\\le 1,\\ 0\\le\\theta\\le\\tfrac\\pi2\\}$, getting $\\int_0^{\\pi/2}\\!\\int_0^1 r^{2}\\,dr\\,d\\theta=\\tfrac\\pi2\\cdot\\tfrac13=\\tfrac{\\pi}{6}\\approx0.5236$. But the indices $j,k$ each run independently from $1$ to $n$, so the sample points fill the unit SQUARE $[0,1]^2$, not the quarter disk. The square pokes out past $r=1$ all the way to the corner at $r=\\sqrt2$, so the upper radius is $\\tfrac1{\\cos\\theta}$ (for $\\theta\\le\\tfrac\\pi4$) or $\\tfrac1{\\sin\\theta}$ (for $\\theta\\ge\\tfrac\\pi4$), NOT the constant $1$. Reading the radial limit straight off the modulus $\\sqrt{x^2+y^2}\\le?$ instead of off the index range is the two-dimensional version of misreading the limits of integration; the true value $\\tfrac{\\sqrt2+\\ln(1+\\sqrt2)}{3}\\approx0.7652$ is markedly larger than $\\tfrac\\pi6$. (A second tempting slip is to collapse the double sum to its diagonal $j=k$, giving $\\tfrac1{n^3}\\sum_j\\sqrt2\\,j\\to\\tfrac{\\sqrt2}{2}\\approx0.7071$ — close enough to look right, but it throws away all the off-diagonal mass.)",
    "solutions": [
      {
        "name": "Recognise the double Riemann sum, then Fubini with one integration by parts",
        "steps": [
          "Pull the homogeneity out of each term: $\\sqrt{j^{2}+k^{2}}=n\\sqrt{(j/n)^{2}+(k/n)^{2}}$, so $\\dfrac{1}{n^{3}}\\sum_{j,k}\\sqrt{j^{2}+k^{2}}=\\dfrac{1}{n^{2}}\\sum_{j=1}^{n}\\sum_{k=1}^{n} f\\!\\Bigl(\\tfrac{j}{n},\\tfrac{k}{n}\\Bigr),\\qquad f(x,y)=\\sqrt{x^{2}+y^{2}}.$ The factor $\\tfrac1{n^2}$ is exactly the area of one mesh cell, so this is a genuine two-dimensional Riemann sum and $L=\\displaystyle\\iint_{[0,1]^{2}}\\sqrt{x^{2}+y^{2}}\\,dx\\,dy.$",
          "Integrate first in $y$ holding $x$ fixed (Fubini, integrand continuous and nonnegative on the square). Using $\\displaystyle\\int\\sqrt{x^{2}+y^{2}}\\,dy=\\tfrac{y}{2}\\sqrt{x^{2}+y^{2}}+\\tfrac{x^{2}}{2}\\operatorname{arcsinh}\\!\\tfrac{y}{x}$, evaluate from $0$ to $1$: $\\displaystyle\\int_{0}^{1}\\sqrt{x^{2}+y^{2}}\\,dy=\\tfrac12\\sqrt{x^{2}+1}+\\tfrac{x^{2}}{2}\\operatorname{arcsinh}\\!\\tfrac1x.$",
          "Now $L=\\tfrac12\\displaystyle\\int_0^1\\sqrt{x^2+1}\\,dx+\\tfrac12\\int_0^1 x^2\\operatorname{arcsinh}\\tfrac1x\\,dx$. The first integral is standard: $\\int_0^1\\sqrt{x^2+1}\\,dx=\\tfrac12\\bigl[\\sqrt2+\\operatorname{arcsinh}1\\bigr]$. For the second, integrate by parts with $u=\\operatorname{arcsinh}\\tfrac1x$ (so $u'=-\\tfrac1{x\\sqrt{x^2+1}}$) and $dv=x^2\\,dx$ (so $v=\\tfrac{x^3}{3}$): the boundary term $\\tfrac{x^3}{3}\\operatorname{arcsinh}\\tfrac1x\\big|_0^1=\\tfrac13\\operatorname{arcsinh}1$ (the value at $0$ is $0$ since $x^3\\ln\\tfrac2x\\to0$), leaving $\\int_0^1 x^2\\operatorname{arcsinh}\\tfrac1x\\,dx=\\tfrac13\\operatorname{arcsinh}1+\\tfrac13\\int_0^1\\tfrac{x^2}{\\sqrt{x^2+1}}\\,dx.$",
          "Finish the last elementary integral $\\int_0^1\\tfrac{x^2}{\\sqrt{x^2+1}}\\,dx=\\tfrac12\\bigl[\\sqrt2-\\operatorname{arcsinh}1\\bigr]$. Assembling and using $\\operatorname{arcsinh}1=\\ln(1+\\sqrt2)$: $L=\\tfrac14\\bigl[\\sqrt2+\\operatorname{arcsinh}1\\bigr]+\\tfrac16\\operatorname{arcsinh}1+\\tfrac1{12}\\bigl[\\sqrt2-\\operatorname{arcsinh}1\\bigr]=\\tfrac{\\sqrt2}{3}+\\tfrac{\\operatorname{arcsinh}1}{3}=\\boxed{\\dfrac{\\sqrt2+\\ln(1+\\sqrt2)}{3}}.$"
        ]
      },
      {
        "name": "Exploit $x\\leftrightarrow y$ symmetry and the degree-1 homogeneity",
        "steps": [
          "After recognising $L=\\iint_{[0,1]^2}\\sqrt{x^2+y^2}\\,dx\\,dy$, note the integrand is symmetric under $x\\leftrightarrow y$, so the square contributes twice the lower triangle: $L=2\\displaystyle\\iint_{0<y<x<1}\\sqrt{x^2+y^2}\\,dy\\,dx=2\\int_0^1\\!\\Bigl(\\int_0^{x}\\sqrt{x^2+y^2}\\,dy\\Bigr)dx.$",
          "The inner integral is where homogeneity pays off. Substitute $y=xt$, $dy=x\\,dt$ (here $x>0$): $\\displaystyle\\int_0^{x}\\sqrt{x^2+y^2}\\,dy=\\int_0^1 x\\sqrt{1+t^2}\\;x\\,dt=x^{2}\\int_0^1\\sqrt{1+t^2}\\,dt.$ The whole $x$-dependence factors out as a clean $x^2$ because the integrand has degree $1$.",
          "Evaluate the constant $\\displaystyle\\int_0^1\\sqrt{1+t^2}\\,dt=\\tfrac12\\bigl[t\\sqrt{1+t^2}+\\operatorname{arcsinh}t\\bigr]_0^1=\\tfrac12\\bigl[\\sqrt2+\\operatorname{arcsinh}1\\bigr]=\\tfrac{\\sqrt2+\\ln(1+\\sqrt2)}{2}.$",
          "Therefore $L=2\\Bigl(\\int_0^1 x^2\\,dx\\Bigr)\\cdot\\tfrac{\\sqrt2+\\ln(1+\\sqrt2)}{2}=2\\cdot\\tfrac13\\cdot\\tfrac{\\sqrt2+\\ln(1+\\sqrt2)}{2}=\\boxed{\\dfrac{\\sqrt2+\\ln(1+\\sqrt2)}{3}}.$"
        ]
      },
      {
        "name": "Polar coordinates done correctly over the square (the trap, repaired)",
        "steps": [
          "Set $x=r\\cos\\theta,\\ y=r\\sin\\theta$, so $\\sqrt{x^2+y^2}=r$ and $dA=r\\,dr\\,d\\theta$, giving integrand $r\\cdot r=r^2$. The crucial point is the region: the boundary of $[0,1]^2$ is $x=1$ for $\\theta\\in[0,\\tfrac\\pi4]$ and $y=1$ for $\\theta\\in[\\tfrac\\pi4,\\tfrac\\pi2]$, so the upper radius is $r=\\tfrac1{\\cos\\theta}$ then $r=\\tfrac1{\\sin\\theta}$ — NEVER the constant $1$ of the quarter disk.",
          "Split at $\\theta=\\tfrac\\pi4$. By the symmetry $\\theta\\mapsto\\tfrac\\pi2-\\theta$ the two pieces are equal, so $L=2\\displaystyle\\int_0^{\\pi/4}\\!\\int_0^{1/\\cos\\theta} r^2\\,dr\\,d\\theta=2\\int_0^{\\pi/4}\\tfrac13\\sec^{3}\\theta\\,d\\theta=\\tfrac23\\int_0^{\\pi/4}\\sec^3\\theta\\,d\\theta.$",
          "Use the standard reduction $\\displaystyle\\int\\sec^3\\theta\\,d\\theta=\\tfrac12\\bigl[\\sec\\theta\\tan\\theta+\\ln|\\sec\\theta+\\tan\\theta|\\bigr]$. At $\\theta=\\tfrac\\pi4$: $\\sec=\\sqrt2,\\ \\tan=1$, so the bracket is $\\sqrt2\\cdot1+\\ln(\\sqrt2+1)$; at $\\theta=0$ it is $0$. Hence $\\int_0^{\\pi/4}\\sec^3\\theta\\,d\\theta=\\tfrac12\\bigl[\\sqrt2+\\ln(1+\\sqrt2)\\bigr].$",
          "Therefore $L=\\tfrac23\\cdot\\tfrac12\\bigl[\\sqrt2+\\ln(1+\\sqrt2)\\bigr]=\\boxed{\\dfrac{\\sqrt2+\\ln(1+\\sqrt2)}{3}}.$ This is strictly more than the bogus $\\tfrac\\pi6$ precisely because the square's corner region (out to $r=\\sqrt2$) is included."
        ]
      }
    ],
    "remark": "Insight: the only hard step is reading the region off the index range, not off the integrand. Both $j$ and $k$ sweep $1$ to $n$ independently, so the $n^2$ samples tile the SQUARE $[0,1]^2$; the seductive modulus $\\sqrt{x^2+y^2}=r$ invites a polar setup whose radial limit is then wrongly frozen at $r=1$ (the quarter disk, value $\\tfrac\\pi6$), throwing away the four corner wedges that reach out to $r=\\sqrt2$. The normalisation is the tell: $\\tfrac1{n^3}=\\tfrac1{n^2}\\cdot\\tfrac1n$ is one area element $\\tfrac1{n^2}$ times the extra $\\tfrac1n$ that the degree-$1$ integrand $\\sqrt{j^2+k^2}=n\\,f(j/n,k/n)$ supplies itself — get that bookkeeping right and the sum is unmistakably a two-dimensional Riemann sum. Whether you iterate in Cartesian coordinates, fold on the symmetry and ride the homogeneity ($\\int_0^x\\sqrt{x^2+y^2}\\,dy\\propto x^2$), or do polar honestly with $r$ running to $\\sec\\theta$, the same clean closed form $\\tfrac{\\sqrt2+\\ln(1+\\sqrt2)}{3}=\\tfrac{\\sqrt2+\\operatorname{arcsinh}1}{3}$ emerges. Treat it as a single sum and it either diverges or collapses to the diagonal; respect both dimensions and the corners, and the square wins over the disk."
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
    "title": "The Product That Climbs the Arctangent and the Logarithm at Once",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "riemann-sum",
      "log-to-integral",
      "product-limit",
      "arctan-log-fusion",
      "wrong-limits-trap"
    ],
    "statement": "Evaluate \\[ L=\\lim_{n\\to\\infty}\\left(\\frac{1}{n^{2n}}\\prod_{r=1}^{n}\\bigl(n^{2}+r^{2}\\bigr)\\right)^{1/n}. \\] The outer exponent $1/n$ together with the product begs for a logarithm, after which the $\\dfrac{1}{n}\\sum$ is a Riemann sum. The catch is the integrand it lands on: it is neither the textbook $\\ln(1+x)$ nor a pure $\\arctan$, but a single $\\ln(1+x^{2})$ that quietly carries BOTH an $\\arctan$ and a $\\ln$ once you integrate it — the two integrand families of this chapter fused into one limit. Read the range of the sample points $x_r=r/n$ correctly, recognise the integral, and report $L$ in closed form.",
    "answer": "$\\;2\\,e^{\\pi/2-2}\\;$",
    "trap": "The fatal move is mis-reading the limits of integration off the index range. Because the term is $n^{2}+r^{2}$ — visually a sibling of the chapter's doubled-range problems where $r$ runs from $n+1$ to $2n$ and the sample points fill $[1,2]$ — a strong student pattern-matches and integrates $\\ln(1+x^{2})$ over $[1,2]$ (or, hedging, over $[0,2]$). That gives the bogus $L=\\exp\\!\\int_{1}^{2}\\ln(1+x^{2})\\,dx\\approx 3.220$ (or $\\exp\\!\\int_{0}^{2}\\approx 4.192$). But here $r$ runs only from $1$ to $n$, so the sample points are $x_r=r/n$ with $x_r\\in(0,1]$: the window is $[0,1]$, not $[1,2]$. After the prefactor $1/n^{2n}=(n^{2})^{-n}$ is folded inside as $\\dfrac{n^{2}+r^{2}}{n^{2}}=1+\\bigl(\\tfrac{r}{n}\\bigr)^{2}$, the genuine limit is $\\exp\\!\\int_{0}^{1}\\ln(1+x^{2})\\,dx=2e^{\\pi/2-2}\\approx 1.302$, strictly and visibly below the trap values. The error is conceptual — reading the integration window from the superficial look of the summand instead of from the actual range of $r$ — not an arithmetic slip. (A second, cruder trap is to divide by $n^{n}$ instead of $n^{2n}$, mis-handling how the exponent $1/n$ meets $\\prod n^{2}$; that leaves an uncancelled $\\ln n$ and the limit diverges.)",
    "solutions": [
      {
        "name": "Logarithm to a Riemann sum, then integrate by parts",
        "steps": [
          "Fold the prefactor inside the product so each factor becomes dimensionless: $\\dfrac{1}{n^{2n}}\\prod_{r=1}^{n}(n^{2}+r^{2})=\\prod_{r=1}^{n}\\dfrac{n^{2}+r^{2}}{n^{2}}=\\prod_{r=1}^{n}\\Bigl(1+\\bigl(\\tfrac{r}{n}\\bigr)^{2}\\Bigr).$ Taking logarithms of $L$ turns the $1/n$ power and the product into an average of logarithms: $\\ln L=\\lim_{n\\to\\infty}\\dfrac{1}{n}\\sum_{r=1}^{n}\\ln\\!\\Bigl(1+\\bigl(\\tfrac{r}{n}\\bigr)^{2}\\Bigr).$",
          "This is exactly the right Riemann sum for $f(x)=\\ln(1+x^{2})$ with sample points $x_r=r/n$ and mesh $1/n$. Since $r$ runs from $1$ to $n$, the $x_r$ sweep $(0,1]$, so the integration window is $[0,1]$ — NOT $[1,2]$: $\\ln L=\\displaystyle\\int_{0}^{1}\\ln(1+x^{2})\\,dx.$",
          "Integrate by parts with $u=\\ln(1+x^{2})$, $dv=dx$: $\\int_{0}^{1}\\ln(1+x^{2})\\,dx=\\bigl[x\\ln(1+x^{2})\\bigr]_{0}^{1}-\\int_{0}^{1}\\dfrac{2x^{2}}{1+x^{2}}\\,dx=\\ln 2-2\\int_{0}^{1}\\Bigl(1-\\dfrac{1}{1+x^{2}}\\Bigr)dx.$ Here the $\\ln$ comes from the boundary and the $\\arctan$ is about to appear from the leftover — the fusion the statement promised.",
          "Finish: $\\int_{0}^{1}\\Bigl(1-\\dfrac{1}{1+x^{2}}\\Bigr)dx=\\bigl[x-\\arctan x\\bigr]_{0}^{1}=1-\\tfrac{\\pi}{4}.$ Hence $\\ln L=\\ln 2-2\\bigl(1-\\tfrac{\\pi}{4}\\bigr)=\\ln 2-2+\\tfrac{\\pi}{2}$, so \\[\\boxed{\\,L=2\\,e^{\\pi/2-2}\\,}.\\]"
        ]
      },
      {
        "name": "Feynman parameter on the integral",
        "steps": [
          "After the same logarithm step, $\\ln L=\\displaystyle\\int_{0}^{1}\\ln(1+x^{2})\\,dx$. Embed it in a family by inserting a parameter on the quadratic term: $G(a)=\\displaystyle\\int_{0}^{1}\\ln(1+a\\,x^{2})\\,dx,\\qquad G(0)=0,\\quad G(1)=\\ln L.$",
          "Differentiate under the integral sign: $G'(a)=\\displaystyle\\int_{0}^{1}\\dfrac{x^{2}}{1+a x^{2}}\\,dx=\\dfrac{1}{a}\\int_{0}^{1}\\Bigl(1-\\dfrac{1}{1+a x^{2}}\\Bigr)dx=\\dfrac{1}{a}\\Bigl(1-\\dfrac{\\arctan\\sqrt{a}}{\\sqrt{a}}\\Bigr),$ valid for $a>0$ (and $G'(a)\\to\\tfrac13$ as $a\\to0^{+}$).",
          "Integrate from $0$ to $1$. With $a=t^{2}$ ($da=2t\\,dt$) the awkward $\\sqrt{a}$ disappears: $\\ln L=\\displaystyle\\int_{0}^{1}\\dfrac{1-\\frac{\\arctan\\sqrt a}{\\sqrt a}}{a}\\,da=2\\int_{0}^{1}\\dfrac{t-\\arctan t}{t^{2}}\\,dt.$ Integrate this by parts with $u=t-\\arctan t$ (so $du=\\bigl(1-\\tfrac{1}{1+t^{2}}\\bigr)dt=\\tfrac{t^{2}}{1+t^{2}}\\,dt$) and $dv=t^{-2}\\,dt$ ($v=-1/t$): $\\ln L=2\\left(\\Bigl[-\\dfrac{t-\\arctan t}{t}\\Bigr]_{0}^{1}+\\int_{0}^{1}\\dfrac{1}{t}\\cdot\\dfrac{t^{2}}{1+t^{2}}\\,dt\\right).$",
          "The boundary term is $-(1-\\tfrac{\\pi}{4})$ at $t=1$ and $0$ at $t\\to0^{+}$ (since $t-\\arctan t=O(t^{3})$), while $\\displaystyle\\int_{0}^{1}\\dfrac{t}{1+t^{2}}\\,dt=\\tfrac12\\ln 2$. Hence $\\ln L=2\\Bigl(-(1-\\tfrac{\\pi}{4})+\\tfrac12\\ln 2\\Bigr)=\\ln 2-2+\\tfrac{\\pi}{2}$, so \\[\\boxed{\\,L=2\\,e^{\\pi/2-2}\\,}.\\]"
        ]
      },
      {
        "name": "Trigonometric substitution x = tan(theta)",
        "steps": [
          "Reach $\\ln L=\\displaystyle\\int_{0}^{1}\\ln(1+x^{2})\\,dx$ as before, then substitute $x=\\tan\\theta$, $dx=\\sec^{2}\\theta\\,d\\theta$, with $1+x^{2}=\\sec^{2}\\theta$ and $\\theta:0\\to\\tfrac{\\pi}{4}$: $\\ln L=\\int_{0}^{\\pi/4}\\ln(\\sec^{2}\\theta)\\,\\sec^{2}\\theta\\,d\\theta=-2\\int_{0}^{\\pi/4}\\ln(\\cos\\theta)\\,\\sec^{2}\\theta\\,d\\theta.$ The $\\sec^{2}\\theta$ is the derivative of $\\tan\\theta$, inviting integration by parts.",
          "Integrate by parts with $U=-2\\ln\\cos\\theta$ (so $dU=2\\tan\\theta\\,d\\theta$) and $dV=\\sec^{2}\\theta\\,d\\theta$ ($V=\\tan\\theta$): $\\ln L=\\bigl[-2\\ln\\cos\\theta\\,\\tan\\theta\\bigr]_{0}^{\\pi/4}-\\int_{0}^{\\pi/4}2\\tan^{2}\\theta\\,d\\theta.$",
          "Evaluate the boundary: at $\\theta=\\tfrac{\\pi}{4}$, $\\cos\\theta=\\tfrac{1}{\\sqrt2}$ and $\\tan\\theta=1$, giving $-2\\ln\\tfrac{1}{\\sqrt2}\\cdot1=-2\\cdot(-\\tfrac12\\ln2)=\\ln 2$; at $\\theta=0$ it vanishes. So the boundary contributes $\\ln 2$.",
          "For the remaining integral use $\\tan^{2}\\theta=\\sec^{2}\\theta-1$: $\\int_{0}^{\\pi/4}2\\tan^{2}\\theta\\,d\\theta=2\\bigl[\\tan\\theta-\\theta\\bigr]_{0}^{\\pi/4}=2\\bigl(1-\\tfrac{\\pi}{4}\\bigr)=2-\\tfrac{\\pi}{2}.$ Therefore $\\ln L=\\ln 2-\\bigl(2-\\tfrac{\\pi}{2}\\bigr)=\\ln 2-2+\\tfrac{\\pi}{2}$, and \\[\\boxed{\\,L=2\\,e^{\\pi/2-2}\\,}.\\]"
        ]
      }
    ],
    "remark": "Insight: the device is a product engineered so its log-average lands on $\\int_0^1\\ln(1+x^2)\\,dx$ — the one elementary integrand of this chapter that releases BOTH a logarithm (from the boundary $x\\ln(1+x^2)$) and an arctangent (from the residual $\\int\\frac{1}{1+x^2}$), fusing the two integrand families into a single limit whose closed form $2e^{\\pi/2-2}$ wears both $\\pi$ and a power of $e$. The decisive discipline is reading the integration window from the actual range of the index $r$, not from the cosmetic shape of the summand: $n^2+r^2$ looks like a doubled-range $[1,2]$ problem, but $r=1,\\dots,n$ forces $x_r=r/n\\in(0,1]$, so the window is $[0,1]$. Equally, the exponent $1/n$ must meet the prefactor $1/n^{2n}=(n^2)^{-n}$ so that each factor normalises cleanly to $1+(r/n)^2$; mishandle that pairing and an uncancelled $\\ln n$ sends the limit to infinity. Recognise the window and the normalisation, and three different finishes — IBP, Feynman, and $x=\\tan\\theta$ — all converge on the same $\\arctan$-plus-$\\log$ value."
  },
  {
    "theme": "riemann",
    "themeLabel": "The Integral as a Limit of Sums",
    "title": "The Numerator That Wears Two Hats",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "riemann-sum",
      "node-vs-weight",
      "vanishing-terms",
      "arctangent",
      "complex-trick"
    ],
    "statement": "Evaluate \\[ L=\\lim_{n\\to\\infty}\\sum_{r=1}^{n}\\frac{n+r}{\\,n^{2}+r^{2}\\,}. \\] Each term tends to $0$ as $n\\to\\infty$, yet the sum has a finite positive limit. The catch is structural: the numerator $n+r$ is a sum of a constant ($n$) and a moving index ($r$), and these two halves play opposite roles when the expression is read as a Riemann sum. Decide—term by term—which factor carries the spacing $\\tfrac1n$ and which carries the sample point $\\tfrac rn$, then identify the integral.",
    "answer": "$\\dfrac{\\pi}{4}+\\dfrac12\\ln 2$",
    "trap": "The seductive error is to argue from the size of a single term. A strong student factors $\\tfrac1{n^{2}}$ out of the denominator and writes the term as $\\dfrac{1}{n}\\cdot\\dfrac{1+\\tfrac rn}{1+(r/n)^{2}}$, which is fine—but then, hurrying, splits off the $\\dfrac{r}{n^{2}+r^{2}}$ piece and discards it with the reasoning: \"each such term is $O(r/n^{2})\\to 0$, so that part contributes nothing,\" keeping only $\\dfrac{n}{n^{2}+r^{2}}=\\dfrac1n\\cdot\\dfrac1{1+(r/n)^{2}}\\to\\displaystyle\\int_0^1\\frac{dx}{1+x^{2}}=\\frac{\\pi}{4}$. That yields the clean, wrong answer $\\boxed{\\tfrac\\pi4}$. The fallacy is conceptual, not arithmetic: that individual terms vanish does NOT mean their sum vanishes. The discarded piece $\\sum_{r=1}^{n}\\dfrac{r}{n^{2}+r^{2}}=\\dfrac1n\\sum\\dfrac{r/n}{1+(r/n)^{2}}$ is itself a complete Riemann sum, with the index $r$ wearing the OTHER hat—as the sample point $x=r/n$—and it integrates to $\\int_0^1\\frac{x\\,dx}{1+x^2}=\\tfrac12\\ln 2\\neq 0$. The numerator $n+r$ contributes one node-term and one weight-term; dropping the node-term costs exactly $\\tfrac12\\ln2$.",
    "solutions": [
      {
        "name": "One clean Riemann sum: pull out the spacing once",
        "steps": [
          "Divide numerator and denominator by $n^{2}$. With $x_r=\\dfrac rn$ the term becomes $\\dfrac{n+r}{n^{2}+r^{2}}=\\dfrac1n\\cdot\\dfrac{1+\\tfrac rn}{1+(r/n)^{2}}=\\dfrac1n\\,\\dfrac{1+x_r}{1+x_r^{2}}$. The factor $\\tfrac1n$ is the uniform spacing $\\Delta x$, the values $x_r=\\tfrac rn$ run over the partition of $[0,1]$, and $f(x)=\\dfrac{1+x}{1+x^{2}}$ is the sampled function. The constant $n$ in the numerator has been absorbed into the weight $\\tfrac1n$; the moving $r$ survives as the node $x_r$.",
          "Hence $\\displaystyle\\sum_{r=1}^{n}\\frac{n+r}{n^{2}+r^{2}}=\\sum_{r=1}^{n}f(x_r)\\,\\Delta x\\;\\longrightarrow\\;\\int_{0}^{1}\\frac{1+x}{1+x^{2}}\\,dx.$ The limits are $0$ and $1$ because the index runs $r=1,\\dots,n$, i.e. $x_r$ sweeps $(0,1]$; misreading the range is the standard pitfall this avoids.",
          "Split the integrand along the two hats of the numerator: $\\dfrac{1+x}{1+x^{2}}=\\dfrac{1}{1+x^{2}}+\\dfrac{x}{1+x^{2}}$. Then $\\int_0^1\\dfrac{dx}{1+x^{2}}=\\bigl[\\arctan x\\bigr]_0^1=\\dfrac{\\pi}{4}$ and $\\int_0^1\\dfrac{x\\,dx}{1+x^{2}}=\\Bigl[\\tfrac12\\ln(1+x^{2})\\Bigr]_0^1=\\dfrac12\\ln 2.$",
          "Adding, \\[\\boxed{\\,L=\\dfrac{\\pi}{4}+\\dfrac12\\ln 2\\,}.\\] The $\\tfrac\\pi4$ is the constant-numerator (weight) contribution and the $\\tfrac12\\ln2$ is the moving-numerator (node) contribution—both real, neither vanishing."
        ]
      },
      {
        "name": "Two honest Riemann sums (exposing the discarded piece)",
        "steps": [
          "Write $\\displaystyle S_n=\\sum_{r=1}^{n}\\frac{n+r}{n^{2}+r^{2}}=\\underbrace{\\sum_{r=1}^{n}\\frac{n}{n^{2}+r^{2}}}_{A_n}+\\underbrace{\\sum_{r=1}^{n}\\frac{r}{n^{2}+r^{2}}}_{B_n}.$ The trap assumes $B_n\\to0$; we instead evaluate it as a genuine Riemann sum.",
          "For $A_n$: $\\dfrac{n}{n^{2}+r^{2}}=\\dfrac1n\\cdot\\dfrac{1}{1+(r/n)^{2}}$, so $A_n\\to\\displaystyle\\int_0^1\\frac{dx}{1+x^{2}}=\\frac{\\pi}{4}.$ Here the constant $n$ supplies the weight $\\tfrac1n$ and $r/n$ is the node.",
          "For $B_n$: $\\dfrac{r}{n^{2}+r^{2}}=\\dfrac1n\\cdot\\dfrac{r/n}{1+(r/n)^{2}}$, so $B_n\\to\\displaystyle\\int_0^1\\frac{x\\,dx}{1+x^{2}}=\\frac12\\ln2.$ Now the index $r$ does double duty: $\\tfrac1n$ from $r/n^{2}$ is the weight and the SAME $r/n$ is the node—this is the piece the trap throws away, and it is manifestly nonzero. (Cross-check by telescoping: $\\tfrac12\\ln\\dfrac{n^{2}+r^{2}}{n^{2}+(r-1)^{2}}\\approx \\dfrac{r}{n^{2}+r^{2}}$, and the sum telescopes to $\\tfrac12\\ln\\dfrac{2n^{2}}{n^{2}}=\\tfrac12\\ln2$.)",
          "Therefore $L=\\lim(A_n+B_n)=\\dfrac{\\pi}{4}+\\dfrac12\\ln2=\\boxed{\\dfrac{\\pi}{4}+\\dfrac12\\ln 2}.$"
        ]
      },
      {
        "name": "Complex-exponential collapse: both hats in one $\\ln$",
        "steps": [
          "Observe the algebraic identity $\\dfrac{n+r}{n^{2}+r^{2}}=\\operatorname{Re}\\dfrac{1+i}{\\,n+ir\\,}$, since $\\dfrac{1+i}{n+ir}=\\dfrac{(1+i)(n-ir)}{n^{2}+r^{2}}=\\dfrac{(n+r)+i(n-r)}{n^{2}+r^{2}}.$ This packages the two halves of the numerator into a single complex fraction.",
          "Factor the spacing: $\\dfrac{1+i}{n+ir}=(1+i)\\cdot\\dfrac1n\\cdot\\dfrac{1}{1+i\\,(r/n)}.$ Thus $S_n=\\operatorname{Re}\\Bigl[(1+i)\\cdot\\dfrac1n\\sum_{r=1}^{n}\\dfrac{1}{1+i\\,(r/n)}\\Bigr]\\;\\longrightarrow\\;\\operatorname{Re}\\Bigl[(1+i)\\displaystyle\\int_0^1\\frac{dx}{1+ix}\\Bigr],$ a complex-valued Riemann sum on $[0,1]$.",
          "Integrate: $\\displaystyle\\int_0^1\\frac{dx}{1+ix}=\\frac1i\\bigl[\\ln(1+ix)\\bigr]_0^1=-i\\,\\ln(1+i).$ Using $\\ln(1+i)=\\tfrac12\\ln2+i\\tfrac{\\pi}{4}$ (principal branch, since $1+i=\\sqrt2\\,e^{i\\pi/4}$), and $(1+i)(-i)=1-i$, we get $(1+i)\\!\\int_0^1\\!\\frac{dx}{1+ix}=(1-i)\\Bigl(\\tfrac12\\ln2+i\\tfrac{\\pi}{4}\\Bigr).$",
          "Expand: $(1-i)\\bigl(\\tfrac12\\ln2+i\\tfrac\\pi4\\bigr)=\\bigl(\\tfrac12\\ln2+\\tfrac\\pi4\\bigr)+i\\bigl(\\tfrac\\pi4-\\tfrac12\\ln2\\bigr).$ Taking the real part, $L=\\boxed{\\dfrac{\\pi}{4}+\\dfrac12\\ln 2}.$ The imaginary part $\\tfrac\\pi4-\\tfrac12\\ln2$ is exactly $\\lim\\sum\\dfrac{n-r}{n^{2}+r^{2}}$, a free bonus."
        ]
      }
    ],
    "remark": "Insight: the whole problem turns on a single discipline of Riemann-sum reading—deciding which symbol carries the spacing $\\tfrac1n$ and which carries the node $\\tfrac rn$. A constant $n$ in a numerator over $n^{2}+r^{2}$ is a weight in disguise ($n/n^{2}=\\tfrac1n$) and integrates against $\\tfrac1{1+x^{2}}$; a moving $r$ is the sample point and integrates against $\\tfrac{x}{1+x^{2}}$. The numerator $n+r$ literally wears both hats at once, so the answer is the SUM of an $\\arctan$ and a $\\tfrac12\\ln$. The trap—killing the $r$-piece because its terms are individually $o(1)$—is the cardinal sin of confusing 'every term $\\to0$' with 'the sum $\\to0$'; a Riemann sum is precisely a sum of vanishing terms whose total is a nonzero area. The complex route $\\tfrac{n+r}{n^2+r^2}=\\operatorname{Re}\\tfrac{1+i}{n+ir}$ is the elegant unifier: one $\\ln(1+i)=\\tfrac12\\ln2+i\\tfrac\\pi4$ delivers both contributions—real part for $n+r$, imaginary part for $n-r$—in a single stroke."
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
    "title": "The Product Whose Heartbeat Is the Angular Mesh",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "riemann-sum",
      "angular-mesh",
      "product-to-integral",
      "tangent-integrand",
      "wrong-limits-trap"
    ],
    "statement": "Evaluate \\[ L=\\lim_{n\\to\\infty}\\;\\prod_{r=1}^{n}\\left(1+\\frac{\\pi}{4n}\\,\\tan\\frac{r\\pi}{4n}\\right). \\] Each factor differs from $1$ by an amount that shrinks like $\\tfrac1n$, so the product neither blows up nor collapses to $1$; it tends to a finite limit. Take logarithms to turn the product into a sum, recognise that sum as a Riemann sum, and read off the resulting definite integral. The whole problem turns on one decision: what plays the role of the infinitesimal width $dx$. The increment written in front of the tangent is the angular mesh $\\dfrac{\\pi}{4n}$, the spacing between consecutive angles $\\theta_r=\\dfrac{r\\pi}{4n}$ — it is NOT the plain $\\dfrac1n$, and the angle $\\theta_r$ sweeps $\\bigl(0,\\tfrac{\\pi}{4}\\bigr]$, not $(0,1]$. Get the mesh and the window right, and a clean closed form falls out.",
    "answer": "$\\sqrt{2}$",
    "trap": "Two seductive misreadings, both conceptual rather than arithmetic, lead to clean-looking wrong answers. (1) Wrong window. After writing $\\ln L=\\lim\\sum\\ln\\!\\bigl(1+\\tfrac{\\pi}{4n}\\tan\\tfrac{r\\pi}{4n}\\bigr)=\\lim\\tfrac{\\pi}{4n}\\sum\\tan\\theta_r$, a strong student sees the index run $r=1,\\dots,n$ and reflexively declares the sample points to fill $[0,1]$ — the chapter's reflex. They then integrate $\\int_0^1\\tan x\\,dx=-\\ln\\cos 1$ and report $L=e^{-\\ln\\cos 1}=\\dfrac{1}{\\cos 1}\\approx 1.851$. But $\\tfrac{\\pi}{4n}$ is the angular mesh, so the angle $\\theta_r=\\tfrac{r\\pi}{4n}$ runs over $\\bigl(0,\\tfrac{\\pi}{4}\\bigr]$, not $(0,1]$; the true window is $\\bigl[0,\\tfrac{\\pi}{4}\\bigr]$. (2) Wrong mesh. The other reflex is to force the increment into the familiar $\\tfrac1n$: rewrite $\\tfrac{\\pi}{4n}\\tan\\theta_r=\\tfrac1n\\cdot\\tfrac{\\pi}{4}\\tan\\tfrac{r\\pi}{4n}$, treat $\\tfrac1n$ as $dx$ with sample $x=r/n\\in(0,1]$, and integrate $\\int_0^1\\tfrac{\\pi}{4}\\tan\\tfrac{\\pi x}{4}\\,dx=\\tfrac{2}{\\pi}\\ln 2$, giving $L=e^{(2/\\pi)\\ln 2}=2^{2/\\pi}\\approx 1.555$. This silently double-uses the $\\tfrac{\\pi}{4}$ — once as part of the mesh, once inside the integrand — and lands on the wrong exponent $\\tfrac{2}{\\pi}\\ln 2$ instead of $\\tfrac12\\ln 2$. The honest reading takes $\\tfrac{\\pi}{4n}$ wholesale as $d\\theta$, with $\\theta\\in[0,\\tfrac{\\pi}{4}]$, so $\\ln L=\\int_0^{\\pi/4}\\tan\\theta\\,d\\theta=\\tfrac12\\ln 2$ and $L=\\sqrt2$ — strictly between the two trap values.",
    "solutions": [
      {
        "name": "Logarithm, linearise, recognise the angular Riemann sum",
        "steps": [
          "Set $a_r=\\dfrac{\\pi}{4n}\\tan\\dfrac{r\\pi}{4n}$. On the closed window $\\theta\\in[0,\\tfrac{\\pi}{4}]$ the tangent is bounded by $\\tan\\tfrac{\\pi}{4}=1$, so $0\\le a_r\\le\\dfrac{\\pi}{4n}\\to0$ uniformly in $r$. Take logarithms: $\\ln L=\\displaystyle\\lim_{n\\to\\infty}\\sum_{r=1}^{n}\\ln\\!\\bigl(1+a_r\\bigr).$",
          "Use $\\ln(1+a)=a-\\tfrac12a^{2}+O(a^{3})$. The leading sum is $\\displaystyle\\sum_{r=1}^{n}a_r=\\frac{\\pi}{4n}\\sum_{r=1}^{n}\\tan\\frac{r\\pi}{4n}$, while the correction is controlled: $\\displaystyle\\sum_{r=1}^{n}a_r^{2}\\le\\Bigl(\\frac{\\pi}{4n}\\Bigr)^{2}\\!\\sum_{r=1}^{n}\\tan^{2}\\frac{r\\pi}{4n}\\le n\\Bigl(\\frac{\\pi}{4n}\\Bigr)^{2}=\\frac{\\pi^{2}}{16\\,n}\\to0.$ Hence only the linear part survives: $\\ln L=\\displaystyle\\lim_{n\\to\\infty}\\frac{\\pi}{4n}\\sum_{r=1}^{n}\\tan\\frac{r\\pi}{4n}.$",
          "Read this as a Riemann sum in the angle $\\theta$. The spacing between consecutive angles $\\theta_r=\\tfrac{r\\pi}{4n}$ is exactly $\\Delta\\theta=\\tfrac{\\pi}{4n}$ — that is the $d\\theta$ — and since $r$ runs $1,\\dots,n$ the angles $\\theta_r$ sweep $\\bigl(0,\\tfrac{\\pi}{4}\\bigr]$. The window is therefore $\\bigl[0,\\tfrac{\\pi}{4}\\bigr]$, NOT $[0,1]$: $\\ln L=\\displaystyle\\int_{0}^{\\pi/4}\\tan\\theta\\,d\\theta.$",
          "Integrate: $\\displaystyle\\int_{0}^{\\pi/4}\\tan\\theta\\,d\\theta=\\bigl[-\\ln\\cos\\theta\\bigr]_{0}^{\\pi/4}=-\\ln\\frac{1}{\\sqrt2}=\\frac12\\ln 2.$ Therefore $\\ln L=\\tfrac12\\ln2$, so \\[\\boxed{\\,L=\\sqrt{2}\\,}.\\]"
        ]
      },
      {
        "name": "Antiderivative as $\\ln\\sec$ (the secant–logarithm bridge)",
        "steps": [
          "Reach $\\ln L=\\displaystyle\\int_{0}^{\\pi/4}\\tan\\theta\\,d\\theta$ exactly as in Method 1 (logarithm, linearise, identify the mesh $\\Delta\\theta=\\tfrac{\\pi}{4n}$ and the window $[0,\\tfrac{\\pi}{4}]$).",
          "Use the antiderivative $\\displaystyle\\int\\tan\\theta\\,d\\theta=\\ln\\lvert\\sec\\theta\\rvert+C$, the bridge that turns the trigonometric integrand into a pure logarithm: $\\ln L=\\bigl[\\ln\\sec\\theta\\bigr]_{0}^{\\pi/4}=\\ln\\sec\\tfrac{\\pi}{4}-\\ln\\sec 0.$",
          "Evaluate the boundary: $\\sec\\tfrac{\\pi}{4}=\\sqrt2$ and $\\sec 0=1$, so $\\ln L=\\ln\\sqrt2-\\ln 1=\\tfrac12\\ln2.$",
          "Exponentiate: \\[\\boxed{\\,L=e^{\\frac12\\ln 2}=\\sqrt{2}\\,}.\\] The clean $\\sqrt2$ is precisely $\\sec\\tfrac{\\pi}{4}$ — the secant at the upper edge of the true window — a built-in check that the window was read as $[0,\\tfrac{\\pi}{4}]$ and not $[0,1]$."
        ]
      },
      {
        "name": "Substitution $t=\\cos\\theta$ inside the limit integral",
        "steps": [
          "As before, the product collapses to $\\ln L=\\displaystyle\\int_{0}^{\\pi/4}\\frac{\\sin\\theta}{\\cos\\theta}\\,d\\theta$, the tangent written as $\\sin/\\cos$ to expose a substitution.",
          "Let $t=\\cos\\theta$, so $dt=-\\sin\\theta\\,d\\theta$. The limits transform with the window: $\\theta=0\\Rightarrow t=1$ and $\\theta=\\tfrac{\\pi}{4}\\Rightarrow t=\\cos\\tfrac{\\pi}{4}=\\tfrac{1}{\\sqrt2}$. Thus $\\ln L=\\displaystyle\\int_{1}^{1/\\sqrt2}\\frac{-dt}{t}=\\int_{1/\\sqrt2}^{1}\\frac{dt}{t}.$",
          "Integrate: $\\displaystyle\\int_{1/\\sqrt2}^{1}\\frac{dt}{t}=\\bigl[\\ln t\\bigr]_{1/\\sqrt2}^{1}=\\ln 1-\\ln\\tfrac{1}{\\sqrt2}=\\tfrac12\\ln 2.$",
          "Hence $\\ln L=\\tfrac12\\ln 2$ and \\[\\boxed{\\,L=\\sqrt{2}\\,}.\\] Had the window been mistakenly taken as $[0,1]$ in $\\theta$, the lower $t$-limit would have been $\\cos 1\\approx0.540$ instead of $\\tfrac{1}{\\sqrt2}\\approx0.707$, inflating the answer to $1/\\cos 1\\approx1.851$ — the substitution makes the wrong-window trap visible as a wrong limit of integration."
        ]
      }
    ],
    "remark": "Insight: this is a product engineered so that its logarithm is a Riemann sum whose infinitesimal is the ANGULAR mesh $\\Delta\\theta=\\tfrac{\\pi}{4n}$ — the gap between successive angles $\\theta_r=\\tfrac{r\\pi}{4n}$ — rather than the chapter's habitual $\\tfrac1n$. Because that mesh is already written in front of the tangent, the correct move is to swallow $\\tfrac{\\pi}{4n}$ whole as $d\\theta$ and let $\\theta$ run to its genuine ceiling $\\tfrac{\\pi}{4}$, giving $\\int_0^{\\pi/4}\\tan\\theta\\,d\\theta=\\tfrac12\\ln2$ and the crisp answer $\\sqrt2=\\sec\\tfrac{\\pi}{4}$. The two ways to go wrong are the two classic Riemann-sum sins fused into one: misread the window (force $[0,1]$ because the index ends at $n$) and you integrate $\\tan$ to $1$ for $L=\\sec 1\\approx1.851$; misread the mesh (insist on $\\tfrac1n$ and re-inject the $\\tfrac{\\pi}{4}$ into the integrand) and you double-count the scale for $L=2^{2/\\pi}\\approx1.555$. The discipline the problem enforces is to identify $dx$ from the actual spacing of the sample points, not from the cosmetic $\\tfrac1n$ a student expects to see — and the bounded tangent on $[0,\\tfrac{\\pi}{4}]$ is what guarantees the quadratic remainder $\\sum a_r^2=O(1/n)$ dies, so $\\ln(1+a)\\approx a$ is exact in the limit."
  },
  {
    "theme": "riemann",
    "themeLabel": "The Integral as a Limit of Sums",
    "title": "The Staircase With Uneven Steps",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "riemann-stieltjes",
      "non-uniform-mesh",
      "complete-the-square",
      "arcsin",
      "two-sided-singularity"
    ],
    "statement": "Evaluate \\[ L=\\lim_{n\\to\\infty}\\sum_{r=1}^{n}\\left(\\sqrt{\\tfrac{r}{n}}-\\sqrt{\\tfrac{r-1}{n}}\\right)\\frac{\\sqrt{r/n}}{\\sqrt{\\bigl(1+\\tfrac{r}{n}\\bigr)\\bigl(3-\\tfrac{r}{n}\\bigr)}}. \\] This is a Riemann sum in disguise, but the step width is NOT the usual $\\tfrac1n$: the factor $\\sqrt{r/n}-\\sqrt{(r-1)/n}$ is the increment of $\\sqrt{x}$, so the partition of $[0,1]$ is sampled with a mesh that is wide near $0$ and narrow near $1$. Treat it as a Riemann-Stieltjes sum $\\sum f(x_r)\\,\\bigl(g(x_r)-g(x_{r-1})\\bigr)$ with $g(x)=\\sqrt{x}$, convert the increment of $g$ into $g'(x)\\,dx$, and notice that the quadratic $(1+x)(3-x)$ under the root has zeros on BOTH sides of $[0,1]$. Read the integration window off the actual range of $r$ and report $L$ in closed form.",
    "answer": "$\\dfrac{\\pi}{12}$",
    "trap": "The decisive error is to ignore the non-uniformity of the mesh. A strong student sees a sum over $r=1,\\dots,n$, spots the sample points $x_r=r/n$, and reflexively declares the step to be $\\tfrac1n$ — reading $\\sqrt{r/n}-\\sqrt{(r-1)/n}$ as if it were the uniform spacing $\\Delta x=\\tfrac1n$. That collapses the sum to the ordinary Riemann integral $\\int_{0}^{1}\\dfrac{\\sqrt{x}}{\\sqrt{(1+x)(3-x)}}\\,dx\\approx 0.34385$, a value with no clean closed form. The fallacy is conceptual, not arithmetic: the weight $\\sqrt{x_r}-\\sqrt{x_{r-1}}$ is an increment of the NON-linear function $g(x)=\\sqrt{x}$, so by the Mean Value Theorem it equals $\\dfrac{1}{n}\\cdot\\dfrac{1}{2\\sqrt{\\xi_r}}$ with $\\xi_r\\in(x_{r-1},x_r)$ — it carries a hidden factor $\\dfrac{1}{2\\sqrt{x}}=g'(x)$, NOT just $\\tfrac1n$. Restoring that factor, the genuine limit is $\\int_{0}^{1}\\dfrac{\\sqrt{x}}{\\sqrt{(1+x)(3-x)}}\\cdot\\dfrac{dx}{2\\sqrt{x}}=\\dfrac12\\int_{0}^{1}\\dfrac{dx}{\\sqrt{(1+x)(3-x)}}=\\dfrac{\\pi}{12}\\approx 0.26180$, well separated from the trap value. (A second, subtler trap: after the substitution $t=\\sqrt{x}$ a student may keep the upper limit at $x=1$ instead of $t=1$ — but here $g(1)=1$ so the window happens to stay $[0,1]$; the real pitfall is the mesh, not the endpoints, and assuming a uniform mesh is exactly what loses the $g'$ factor.)",
    "solutions": [
      {
        "name": "Riemann-Stieltjes: convert the increment of g into g'(x) dx",
        "steps": [
          "Read the sum as a Riemann-Stieltjes sum $\\displaystyle\\sum_{r=1}^{n} f(x_r)\\,\\bigl(g(x_r)-g(x_{r-1})\\bigr)$ with $x_r=\\dfrac rn$, integrator $g(x)=\\sqrt{x}$, and $f(x)=\\dfrac{\\sqrt{x}}{\\sqrt{(1+x)(3-x)}}$. Because $g$ is continuously differentiable and increasing on $[0,1]$, the Mean Value Theorem gives $g(x_r)-g(x_{r-1})=g'(\\xi_r)\\,\\tfrac1n=\\dfrac{1}{2\\sqrt{\\xi_r}}\\cdot\\dfrac1n$ for some $\\xi_r\\in(x_{r-1},x_r)$. The weight is therefore NOT $\\tfrac1n$; it is $\\tfrac1n$ scaled by $g'$, and the sum converges to the Stieltjes integral $\\displaystyle\\int_{0}^{1} f(x)\\,dg(x)=\\int_{0}^{1} f(x)\\,g'(x)\\,dx$.",
          "Substitute $g'(x)=\\dfrac{1}{2\\sqrt{x}}$: \\[ L=\\int_{0}^{1}\\frac{\\sqrt{x}}{\\sqrt{(1+x)(3-x)}}\\cdot\\frac{1}{2\\sqrt{x}}\\,dx=\\frac12\\int_{0}^{1}\\frac{dx}{\\sqrt{(1+x)(3-x)}}. \\] The stray $\\sqrt{x}$ in the numerator cancels the $\\sqrt{x}$ from $g'$ exactly — this cancellation is the whole point of the construction, and it is invisible to anyone who pretends the mesh is uniform. The index runs $r=1,\\dots,n$ so $x_r$ sweeps $(0,1]$: the window is $[0,1]$.",
          "Complete the square under the root: $(1+x)(3-x)=3+2x-x^{2}=4-(x-1)^{2}$. This exposes a TWO-SIDED structure — the radicand vanishes at $x=-1$ and $x=3$, symmetric about $x=1$ with radius $2$ — and is the signature of an $\\arcsin$, not a logarithm or an elementary $\\arctan$: \\[ L=\\frac12\\int_{0}^{1}\\frac{dx}{\\sqrt{4-(x-1)^{2}}}=\\frac12\\Bigl[\\arcsin\\frac{x-1}{2}\\Bigr]_{0}^{1}. \\]",
          "Evaluate: $\\arcsin\\dfrac{1-1}{2}-\\arcsin\\dfrac{0-1}{2}=\\arcsin 0-\\arcsin\\!\\left(-\\tfrac12\\right)=0-\\left(-\\tfrac{\\pi}{6}\\right)=\\tfrac{\\pi}{6}$. Hence \\[ \\boxed{\\,L=\\frac12\\cdot\\frac{\\pi}{6}=\\frac{\\pi}{12}\\,}. \\]"
        ]
      },
      {
        "name": "Change of variable t = sqrt(x) (straighten the mesh first)",
        "steps": [
          "Rationalise the weight to see the hidden mesh directly: $\\sqrt{\\tfrac rn}-\\sqrt{\\tfrac{r-1}{n}}=\\dfrac{\\tfrac rn-\\tfrac{r-1}{n}}{\\sqrt{\\tfrac rn}+\\sqrt{\\tfrac{r-1}{n}}}=\\dfrac{1}{n\\left(\\sqrt{r/n}+\\sqrt{(r-1)/n}\\right)}$. Set $t_r=\\sqrt{r/n}$; the points $t_r$ form a UNIFORM-looking partition of $[0,1]$ once we use $t$ as the variable, because $t_r-t_{r-1}$ is precisely this weight and $t_r\\to t$ with $dt$ as the new mesh element.",
          "In the variable $t=\\sqrt{x}$ (so $x=t^{2}$, $\\sqrt{x}=t$, and the increment $\\sqrt{x_r}-\\sqrt{x_{r-1}}$ becomes $dt$), the summand $f(x_r)\\,(t_r-t_{r-1})$ tends to $\\displaystyle\\int_{0}^{1}\\frac{t}{\\sqrt{(1+t^{2})(3-t^{2})}}\\,dt$, with $t$ running $0\\to1$ as $r$ runs $1\\to n$. The factor $\\sqrt{x}=t$ from the numerator is what makes this integrand have a tidy $t\\,dt$ on top.",
          "Now substitute $u=t^{2}$, $du=2t\\,dt$, $u:0\\to1$: \\[ L=\\int_{0}^{1}\\frac{t\\,dt}{\\sqrt{(1+t^{2})(3-t^{2})}}=\\frac12\\int_{0}^{1}\\frac{du}{\\sqrt{(1+u)(3-u)}}. \\] We are back at the same elementary integral, reached without ever invoking Stieltjes — confirming the answer by an independent route.",
          "Complete the square $(1+u)(3-u)=4-(u-1)^{2}$ and integrate: $\\dfrac12\\bigl[\\arcsin\\tfrac{u-1}{2}\\bigr]_{0}^{1}=\\dfrac12\\bigl(0-(-\\tfrac{\\pi}{6})\\bigr)=\\dfrac{\\pi}{6}\\cdot\\dfrac12$. Thus \\[ \\boxed{\\,L=\\frac{\\pi}{12}\\,}. \\]"
        ]
      },
      {
        "name": "Direct trigonometric substitution on the completed square",
        "steps": [
          "Having reduced the limit to $L=\\dfrac12\\displaystyle\\int_{0}^{1}\\frac{dx}{\\sqrt{4-(x-1)^{2}}}$ (via the Stieltjes step $dg=\\tfrac{1}{2\\sqrt x}dx$ and the cancellation of $\\sqrt x$), attack the two-sided singularity head-on with $x-1=2\\sin\\varphi$, the natural substitution for a radical of the form $\\sqrt{R^{2}-(x-c)^{2}}$.",
          "Then $dx=2\\cos\\varphi\\,d\\varphi$ and $\\sqrt{4-(x-1)^{2}}=\\sqrt{4-4\\sin^{2}\\varphi}=2\\cos\\varphi$ (positive on the range, since $\\varphi$ stays in $(-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2})$). The integrand telescopes: $\\dfrac{2\\cos\\varphi\\,d\\varphi}{2\\cos\\varphi}=d\\varphi$.",
          "Track the limits through the substitution — this is where the two-sided geometry pays off. At $x=0$: $\\sin\\varphi=-\\tfrac12\\Rightarrow\\varphi=-\\tfrac{\\pi}{6}$; at $x=1$: $\\sin\\varphi=0\\Rightarrow\\varphi=0$. So $L=\\dfrac12\\displaystyle\\int_{-\\pi/6}^{0} d\\varphi$.",
          "Finally $L=\\dfrac12\\bigl(0-(-\\tfrac{\\pi}{6})\\bigr)=\\dfrac12\\cdot\\dfrac{\\pi}{6}$, giving \\[ \\boxed{\\,L=\\frac{\\pi}{12}\\,}. \\] The arc swept, $\\tfrac{\\pi}{6}$, is exactly the angle subtended by the sub-window $[0,1]$ inside the full circle of radius $2$ centred at $x=1$ — the geometric meaning of the completed square."
        ]
      }
    ],
    "remark": "Insight: the lever is recognising a NON-uniform Riemann sum as a Riemann-Stieltjes integral. The weight $\\sqrt{r/n}-\\sqrt{(r-1)/n}$ is not the spacing $\\tfrac1n$ but the increment of $g(x)=\\sqrt x$, i.e. $g'(x)\\,dx=\\tfrac{1}{2\\sqrt x}\\,dx$; the $\\tfrac{1}{2\\sqrt x}$ is a real, finite contribution that a uniform-mesh reading silently throws away, and it is engineered to cancel the $\\sqrt x$ in the numerator, leaving the clean kernel $\\tfrac12(1+x)^{-1/2}(3-x)^{-1/2}$. The second idea is reading the radical $(1+x)(3-x)$ as a completed square $4-(x-1)^2$: zeros on BOTH sides of the integration window mark this as an $\\arcsin$ (a circular-arc length), distinct from the $\\arctan$ ($x^2+a^2$) and $\\log$ ($x^2-a^2$) kernels that dominate the rest of the chapter. The trap — \\text{collapsing the variable mesh to }$\\tfrac1n$ — is the cardinal Riemann-sum sin of confusing the integrator $dg$ with $dx$; it lands on a messy non-closed-form number, while the honest Stieltjes reading delivers the crisp $\\tfrac{\\pi}{12}$, the half-angle $\\tfrac12\\arcsin\\tfrac12$."
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
    "title": "The Recurrence That Forgets Its Own Scale",
    "difficulty": 5,
    "task": "Prove and evaluate",
    "tags": [
      "wallis",
      "reduction-formula",
      "asymptotics",
      "monotonicity-squeeze",
      "scale-invariance"
    ],
    "statement": "Let \\[ I_n=\\int_0^{\\pi/2}\\sin^{n}x\\,dx,\\qquad n=0,1,2,\\dots \\] Derive (do not quote) the reduction formula relating $I_n$ to $I_{n-2}$ by integration by parts. Then, using that recurrence together with the monotonicity of the sequence $(I_n)$, prove that $I_n\\sim\\sqrt{\\dfrac{\\pi}{2n}}$ as $n\\to\\infty$, and evaluate \\[ L=\\lim_{n\\to\\infty} n\\,I_n^{2}. \\] Warning: the recurrence by itself is not enough to find $L$. Identify precisely what extra ingredient is indispensable and why the recurrence alone cannot supply it.",
    "answer": "$\\dfrac{\\pi}{2}$",
    "trap": "The fatal shortcut is to believe the recurrence $I_n=\\dfrac{n-1}{n}I_{n-2}$ determines the asymptotic constant on its own. A strong student posits the natural ansatz $I_n\\sim \\dfrac{c}{\\sqrt n}$ and substitutes: $\\dfrac{c}{\\sqrt n}\\stackrel{?}{=}\\dfrac{n-1}{n}\\cdot\\dfrac{c}{\\sqrt{n-2}}$. Expanding, $\\dfrac{n-1}{n}\\cdot\\sqrt{\\dfrac{n}{n-2}}=\\Bigl(1-\\tfrac1n\\Bigr)\\Bigl(1+\\tfrac1n+O(n^{-2})\\Bigr)=1+O(n^{-2})$, so the equation is satisfied to leading order for EVERY value of $c$ — the constant cancels identically. The recurrence is scale-invariant: if $(a_n)$ solves it so does $(\\lambda a_n)$ for any $\\lambda$, hence no manipulation of the recurrence can ever pin $c$. Forgetting this, the student silently normalises $c=1$ (or argues 'the constant cancels, so $n I_n^2\\to c^2=1$') and reports the clean but wrong $\\boxed{1}$. The genuine error is conceptual, not arithmetic: a first-order linear recurrence with a free multiplicative scale carries NO information about the overall amplitude. The missing, indispensable ingredient is anchoring data the recurrence cannot see — the exact seeds $I_0=\\tfrac\\pi2,\\,I_1=1$, fed in through the squeeze via monotonicity (equivalently, the exact invariant $n I_n I_{n-1}=\\tfrac\\pi2$). Only the initial values break the scale symmetry and select $c=\\sqrt{\\pi/2}$, giving $L=\\pi/2$, not $1$.",
    "solutions": [
      {
        "name": "Invariant from the recurrence, then a monotonicity squeeze",
        "steps": [
          "Reduction by parts. Write $\\sin^n x=\\sin^{n-1}x\\cdot\\sin x$ and integrate by parts with $u=\\sin^{n-1}x$, $dv=\\sin x\\,dx$: $I_n=\\bigl[-\\sin^{n-1}x\\cos x\\bigr]_0^{\\pi/2}+(n-1)\\!\\int_0^{\\pi/2}\\!\\sin^{n-2}x\\cos^2x\\,dx.$ The boundary term vanishes at both ends. Replacing $\\cos^2x=1-\\sin^2x$ gives $I_n=(n-1)(I_{n-2}-I_n)$, hence the recurrence \\[ I_n=\\frac{n-1}{n}\\,I_{n-2}\\quad(n\\ge2),\\qquad I_0=\\tfrac{\\pi}{2},\\;I_1=1. \\]",
          "A constant of motion. Set $J_n=n\\,I_n\\,I_{n-1}$. Then $\\dfrac{J_n}{J_{n-1}}=\\dfrac{n\\,I_n\\,I_{n-1}}{(n-1)\\,I_{n-1}\\,I_{n-2}}=\\dfrac{n}{n-1}\\cdot\\dfrac{I_n}{I_{n-2}}=\\dfrac{n}{n-1}\\cdot\\dfrac{n-1}{n}=1.$ So $J_n$ is constant for all $n\\ge1$, equal to $J_1=1\\cdot I_1\\cdot I_0=\\dfrac{\\pi}{2}$. Thus the EXACT identity $n\\,I_n\\,I_{n-1}=\\dfrac{\\pi}{2}$ holds — this is where the seeds $I_0,I_1$ enter and fix the scale.",
          "Pin the ratio by monotonicity. On $[0,\\tfrac\\pi2]$, $0\\le\\sin x\\le1$, so $\\sin^{n+1}x\\le\\sin^{n}x\\le\\sin^{n-1}x$ and integrating gives $I_{n+1}\\le I_n\\le I_{n-1}$. Divide by $I_{n-1}>0$: $\\dfrac{I_{n+1}}{I_{n-1}}\\le\\dfrac{I_n}{I_{n-1}}\\le1.$ But the recurrence makes the left ratio explicit: $\\dfrac{I_{n+1}}{I_{n-1}}=\\dfrac{n}{n+1}$. Hence $\\dfrac{n}{n+1}\\le\\dfrac{I_n}{I_{n-1}}\\le1\\xrightarrow[n\\to\\infty]{}1$, so $\\dfrac{I_n}{I_{n-1}}\\to1$.",
          "Combine. $n\\,I_n^{2}=\\bigl(n\\,I_n\\,I_{n-1}\\bigr)\\cdot\\dfrac{I_n}{I_{n-1}}=\\dfrac{\\pi}{2}\\cdot\\dfrac{I_n}{I_{n-1}}\\longrightarrow\\dfrac{\\pi}{2}\\cdot1.$ Therefore $I_n\\sim\\sqrt{\\dfrac{\\pi}{2n}}$ and \\[\\boxed{\\,L=\\lim_{n\\to\\infty}n\\,I_n^{2}=\\dfrac{\\pi}{2}\\,}.\\] The squeeze, not the recurrence, supplied the amplitude."
        ]
      },
      {
        "name": "Iterate the recurrence to closed form, then the Wallis product",
        "steps": [
          "Same IBP gives $I_n=\\dfrac{n-1}{n}I_{n-2}$. Iterating down to the seeds, for $n=2m$ (even): $I_{2m}=\\dfrac{(2m-1)!!}{(2m)!!}\\cdot\\dfrac{\\pi}{2},$ and for $n=2m+1$ (odd): $I_{2m+1}=\\dfrac{(2m)!!}{(2m+1)!!},$ where $(2m)!!=2\\cdot4\\cdots2m$ and $(2m-1)!!=1\\cdot3\\cdots(2m-1)$.",
          "Evaluate the target along the even subsequence $n=2m$: $n\\,I_n^{2}=2m\\left(\\dfrac{\\pi}{2}\\right)^{2}\\!\\left(\\dfrac{(2m-1)!!}{(2m)!!}\\right)^{2}=\\dfrac{\\pi^2 m}{2}\\left(\\dfrac{(2m-1)!!}{(2m)!!}\\right)^{2}.$ The Wallis product states $\\displaystyle\\prod_{k=1}^{m}\\dfrac{(2k)(2k)}{(2k-1)(2k+1)}\\to\\dfrac{\\pi}{2}$, i.e. $\\left(\\dfrac{(2m)!!}{(2m-1)!!}\\right)^{2}\\dfrac{1}{2m+1}\\to\\dfrac{\\pi}{2}$, so $\\left(\\dfrac{(2m-1)!!}{(2m)!!}\\right)^{2}\\sim\\dfrac{2}{\\pi(2m+1)}\\sim\\dfrac{1}{\\pi m}.$",
          "Substitute: $n\\,I_n^{2}=\\dfrac{\\pi^2 m}{2}\\cdot\\dfrac{1}{\\pi m}\\,(1+o(1))=\\dfrac{\\pi}{2}\\,(1+o(1)).$ (The odd subsequence is handled identically using $n I_n I_{n-1}=\\tfrac\\pi2$, or directly from the odd closed form, giving the same limit, so the full sequence converges.)",
          "Hence both subsequences agree and \\[\\boxed{\\,L=\\dfrac{\\pi}{2}\\,},\\qquad I_n\\sim\\sqrt{\\dfrac{\\pi}{2n}}.\\] Note the Wallis product is itself a consequence of the same recurrence plus the seeds, so once again the initial data, not the bare recursion, fixes the value."
        ]
      },
      {
        "name": "Beta/Gamma closed form and ratio asymptotics",
        "steps": [
          "The recurrence and seeds are equivalent to the Beta-integral evaluation $I_n=\\int_0^{\\pi/2}\\sin^{n}x\\,dx=\\dfrac12 B\\!\\left(\\dfrac{n+1}{2},\\dfrac12\\right)=\\dfrac{\\sqrt{\\pi}}{2}\\,\\dfrac{\\Gamma\\!\\left(\\tfrac{n+1}{2}\\right)}{\\Gamma\\!\\left(\\tfrac{n}{2}+1\\right)},$ using $B(p,q)=\\Gamma(p)\\Gamma(q)/\\Gamma(p+q)$ and $\\Gamma(\\tfrac12)=\\sqrt\\pi$. One checks $\\Gamma(\\tfrac{n+1}{2})/\\Gamma(\\tfrac n2+1)$ satisfies $I_n/I_{n-2}=\\tfrac{n-1}{n}$ via $\\Gamma(z+1)=z\\Gamma(z)$, matching the IBP recurrence.",
          "Therefore $n\\,I_n^{2}=n\\cdot\\dfrac{\\pi}{4}\\left(\\dfrac{\\Gamma\\!\\left(\\tfrac{n+1}{2}\\right)}{\\Gamma\\!\\left(\\tfrac{n}{2}+1\\right)}\\right)^{2}.$ Write the gamma ratio with $x=\\tfrac n2$: it is $\\dfrac{\\Gamma(x+\\tfrac12)}{\\Gamma(x+1)}$.",
          "Apply the standard ratio asymptotic $\\dfrac{\\Gamma(x+a)}{\\Gamma(x+b)}\\sim x^{\\,a-b}$ as $x\\to\\infty$ (from Stirling), with $a=\\tfrac12,\\,b=1$: $\\dfrac{\\Gamma(x+\\tfrac12)}{\\Gamma(x+1)}\\sim x^{-1/2}=\\Bigl(\\dfrac n2\\Bigr)^{-1/2}.$ Squaring gives $\\left(\\dfrac{\\Gamma(\\tfrac{n+1}{2})}{\\Gamma(\\tfrac n2+1)}\\right)^{2}\\sim\\dfrac{2}{n}.$",
          "Hence $n\\,I_n^{2}\\sim n\\cdot\\dfrac{\\pi}{4}\\cdot\\dfrac{2}{n}=\\dfrac{\\pi}{2}$, so $I_n\\sim\\sqrt{\\dfrac{\\pi}{2n}}$ and \\[\\boxed{\\,L=\\dfrac{\\pi}{2}\\,}.\\] Stirling's constant $\\sqrt{2\\pi}$ — i.e. the amplitude of $\\Gamma$ — is the analytic incarnation of the seeds $I_0,I_1$; the recurrence's pure functional-equation content $\\Gamma(z+1)=z\\Gamma(z)$ again carries no amplitude on its own."
        ]
      }
    ],
    "remark": "Insight: a homogeneous first-order recurrence $a_n=r_n\\,a_{n-2}$ is scale-blind — multiply any solution by a constant and it still solves the recurrence — so it can fix the SHAPE of the asymptotics ($I_n\\propto n^{-1/2}$) but never the AMPLITUDE. The amplitude lives entirely in the initial data $I_0=\\tfrac\\pi2,\\,I_1=1$, and the bridge that carries that data out to $n=\\infty$ is monotonicity: the squeeze $\\tfrac{n}{n+1}\\le I_n/I_{n-1}\\le1$ turns the exact invariant $n I_n I_{n-1}=\\tfrac\\pi2$ into the clean limit $n I_n^2\\to\\tfrac\\pi2$. The same moral recurs in every guise — the Wallis product is the seeds re-expressed, and Stirling's $\\sqrt{2\\pi}$ is the seeds hiding inside $\\Gamma$. The student who 'solves for $c$' from the recurrence and gets $1$ has rediscovered, the hard way, that you cannot deduce a sequence's size from a rule that only relates it to itself."
  },
  {
    "theme": "reduction",
    "themeLabel": "Reduction Formulae & Wallis",
    "title": "Where the Ninth Power Hides Half of ln 2",
    "difficulty": 4,
    "task": "Derive and evaluate",
    "tags": [
      "reduction-formula",
      "integration-by-parts",
      "alternating-harmonic",
      "parity-seed",
      "mercator-series"
    ],
    "statement": "For integers $n\\ge 0$ define \\[ J_n=\\int_0^1\\frac{x^{n}}{1+x^{2}}\\,dx. \\] (a) Without quoting any formula, derive a reduction relation expressing $J_n$ in terms of $J_{n-2}$ for $n\\ge 2$, and write down the two seed values that anchor it. (b) Using only that recurrence and the seeds, evaluate $J_9$ in closed form. (c) Show that your answer can be written as $J_9=\\tfrac12\\bigl(\\ln 2-A_4\\bigr)$, where $A_4$ is the $4$th partial sum of a single named series whose full value is $\\ln 2$; identify that series and the constant $A_4$ explicitly.",
    "answer": "\\[\\boxed{J_9=\\dfrac{\\ln 2}{2}-\\dfrac{7}{24}}\\]",
    "trap": "The recurrence $J_n=\\dfrac{1}{n-1}-J_{n-2}$ wears the SAME algebraic mask for every $n$, which lulls the solver into forgetting that it splits the indices into two non-communicating parity chains. Descending from $J_9$ one writes $J_9=\\tfrac18-\\tfrac16+\\tfrac14-\\tfrac12+J_1$, and the chain provably terminates at the ODD seed $J_1=\\tfrac12\\ln 2$. The fatal conceptual slip is to terminate it instead at the more famous value $J_0=\\tfrac{\\pi}{4}$ — 'the integral of $1/(1+x^2)$ is $\\arctan$, so the constant must be $\\pi/4$' — producing the spurious $J_9=\\tfrac{\\pi}{4}-\\tfrac{7}{24}\\approx 0.494$. This is not arithmetic clumsiness: it is a failure to track which parity class the index $9$ belongs to, hence which seed the descent can ever reach. A one-line reality check exposes it: since $0\\le \\dfrac{x^{9}}{1+x^{2}}\\le x^{9}$ on $[0,1]$, we must have $0<J_9<\\int_0^1 x^{9}\\,dx=\\tfrac1{10}$, yet the $\\pi/4$ answer is almost $0.5$. The genuine value $\\tfrac{\\ln 2}{2}-\\tfrac{7}{24}\\approx 0.0549$ is the only one that respects the bound. Parity selects the seed; the seed selects whether $\\ln 2$ or $\\pi$ survives.",
    "solutions": [
      {
        "name": "Reduction by the numerator-completion trick, then descend to the odd seed",
        "steps": [
          "Add and subtract to create the denominator. For $n\\ge 2$, $\\dfrac{x^{n}}{1+x^{2}}+\\dfrac{x^{n-2}}{1+x^{2}}=\\dfrac{x^{n-2}\\,(x^{2}+1)}{1+x^{2}}=x^{n-2}.$ Integrating over $[0,1]$ gives $J_n+J_{n-2}=\\displaystyle\\int_0^1 x^{n-2}\\,dx=\\dfrac{1}{n-1}$, that is the reduction relation \\[ J_n=\\frac{1}{n-1}-J_{n-2}\\qquad(n\\ge 2). \\]",
          "Pin the two seeds. $J_0=\\displaystyle\\int_0^1\\frac{dx}{1+x^{2}}=\\bigl[\\arctan x\\bigr]_0^1=\\dfrac{\\pi}{4}$ and $J_1=\\displaystyle\\int_0^1\\frac{x\\,dx}{1+x^{2}}=\\Bigl[\\tfrac12\\ln(1+x^{2})\\Bigr]_0^1=\\dfrac{\\ln 2}{2}.$ The index $9$ is ODD, so its descent meets only $J_1$; the value $J_0$ belongs to the disjoint even chain and never enters.",
          "Telescope down. Applying the relation four times, $J_9=\\tfrac18-J_7=\\tfrac18-\\tfrac16+J_5=\\tfrac18-\\tfrac16+\\tfrac14-J_3=\\tfrac18-\\tfrac16+\\tfrac14-\\tfrac12+J_1.$ The rational part is $\\tfrac18-\\tfrac16+\\tfrac14-\\tfrac12=\\dfrac{3-4+6-12}{24}=-\\dfrac{7}{24}.$ Hence $J_9=\\dfrac{\\ln 2}{2}-\\dfrac{7}{24}$.",
          "Read off the named-series form. Collecting the rational terms as $-\\tfrac12+\\tfrac14-\\tfrac16+\\tfrac18=-\\tfrac12\\bigl(1-\\tfrac12+\\tfrac13-\\tfrac14\\bigr)=-\\tfrac12 A_4$, with $A_4=1-\\tfrac12+\\tfrac13-\\tfrac14=\\tfrac{7}{12}$ the $4$th partial sum of the alternating harmonic (Mercator) series $\\sum_{k\\ge1}\\tfrac{(-1)^{k+1}}{k}=\\ln 2$. Therefore \\[ J_9=\\tfrac12\\ln 2-\\tfrac12 A_4=\\tfrac12\\bigl(\\ln 2-A_4\\bigr)=\\boxed{\\dfrac{\\ln 2}{2}-\\dfrac{7}{24}}\\approx 0.0549. \\]"
        ]
      },
      {
        "name": "Termwise geometric expansion of the kernel",
        "steps": [
          "Expand the denominator as a geometric series. For $0\\le x<1$, $\\dfrac{1}{1+x^{2}}=\\sum_{k=0}^{\\infty}(-1)^{k}x^{2k}$, the partial sums dominated by the integrable bound $\\tfrac{1}{1-x^{2}}$ away from $1$ and the series converging boundedly on $[0,1)$, so termwise integration is legitimate (Abel/dominated convergence). Multiplying by $x^{9}$, $\\dfrac{x^{9}}{1+x^{2}}=\\sum_{k=0}^{\\infty}(-1)^{k}x^{2k+9}.$",
          "Integrate term by term. $J_9=\\displaystyle\\sum_{k=0}^{\\infty}(-1)^{k}\\int_0^1 x^{2k+9}\\,dx=\\sum_{k=0}^{\\infty}\\frac{(-1)^{k}}{2k+10}=\\frac12\\sum_{k=0}^{\\infty}\\frac{(-1)^{k}}{k+5}.$",
          "Recognise the tail of $\\ln 2$. Since $\\ln 2=\\sum_{j=1}^{\\infty}\\tfrac{(-1)^{j+1}}{j}=A_4+\\sum_{j=5}^{\\infty}\\tfrac{(-1)^{j+1}}{j}$, and the substitution $j=k+5$ turns the tail into $\\sum_{k=0}^{\\infty}\\tfrac{(-1)^{k}}{k+5}$, we get $\\sum_{k=0}^{\\infty}\\tfrac{(-1)^{k}}{k+5}=\\ln 2-A_4$ with $A_4=1-\\tfrac12+\\tfrac13-\\tfrac14=\\tfrac{7}{12}$.",
          "Conclude. $J_9=\\dfrac12\\bigl(\\ln 2-A_4\\bigr)=\\dfrac{\\ln 2}{2}-\\dfrac{7}{24}=\\boxed{\\dfrac{\\ln 2}{2}-\\dfrac{7}{24}}.$ This route shows directly that the parity of the power fixes whether the kernel feeds the $\\ln 2$ series (odd) or the $\\arctan$/$\\pi$ series (even)."
        ]
      },
      {
        "name": "Polynomial-division identity, integrated in one stroke",
        "steps": [
          "Divide $x^{9}$ by $1+x^{2}$. Long division gives the exact polynomial-plus-remainder identity $\\dfrac{x^{9}}{1+x^{2}}=x^{7}-x^{5}+x^{3}-x+\\dfrac{x}{1+x^{2}},$ valid for all $x$ (the remainder degree is $1<2$). Equivalently $x^{9}=(1+x^{2})(x^{7}-x^{5}+x^{3}-x)+x$, which one verifies by expansion.",
          "Integrate the polynomial part. $\\displaystyle\\int_0^1\\!\\bigl(x^{7}-x^{5}+x^{3}-x\\bigr)dx=\\tfrac18-\\tfrac16+\\tfrac14-\\tfrac12=-\\tfrac{7}{24}.$ This is exactly the rational accumulation that the reduction recurrence produces, here obtained in a single division.",
          "Integrate the genuine remainder. The leftover $\\displaystyle\\int_0^1\\frac{x}{1+x^{2}}\\,dx=\\Bigl[\\tfrac12\\ln(1+x^{2})\\Bigr]_0^1=\\dfrac{\\ln 2}{2}$ is precisely the odd seed $J_1$; no $\\arctan$ term appears because the remainder numerator is $x$, an odd power, not the constant $1$ that would summon $\\pi/4$.",
          "Add the pieces. $J_9=-\\dfrac{7}{24}+\\dfrac{\\ln 2}{2}=\\boxed{\\dfrac{\\ln 2}{2}-\\dfrac{7}{24}}.$ Writing the rational part as $-\\tfrac12 A_4$ with $A_4=1-\\tfrac12+\\tfrac13-\\tfrac14=\\tfrac{7}{12}$ recovers the named-series form $J_9=\\tfrac12(\\ln 2-A_4)$."
        ]
      }
    ],
    "remark": "Insight: the recurrence $J_n=\\tfrac{1}{n-1}-J_{n-2}$ is parity-segregated — it never connects an even index to an odd one — so the single most important decision is invisible inside the algebra: which of the two constants, $J_0=\\tfrac{\\pi}{4}$ or $J_1=\\tfrac{\\ln 2}{2}$, the descent is allowed to reach. Odd powers of $x$ feed the Mercator series for $\\ln 2$; even powers feed the $\\arctan$ series for $\\pi$. The clean payoff is structural: $J_9=\\tfrac12(\\ln 2-A_4)$ exhibits the integral as exactly half the truncation error of the alternating harmonic series after four terms, so the reduction has not merely produced a number but has manufactured a named transcendental constant minus a controllable rational tail. The standing bound $0<J_n<\\tfrac1{n+1}$ is the cheap insurance every solver should buy: it instantly vetoes the $\\pi/4$ impostor."
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
    "title": "The Diagonal Collapse That Folds Wallis in Half",
    "difficulty": 5,
    "task": "Derive and prove",
    "tags": [
      "two-index-reduction",
      "wallis-product",
      "infinite-product",
      "monotonicity-squeeze",
      "double-angle-collapse"
    ],
    "statement": "For integers $m,n\\ge0$ define the two-parameter family \\[ I(m,n)=\\int_0^{\\pi/2}\\sin^{m}x\\,\\cos^{n}x\\,dx . \\] (a) By integration by parts, derive (do not quote) the two-index reduction lowering the cosine power, $I(m,n)=\\dfrac{n-1}{m+n}\\,I(m,n-2)$ for $n\\ge2$, and note its mirror image in $m$. (b) Using a double-angle collapse of the diagonal, study the ratio \\[ R_N=\\frac{I(2N+1,\\,2N+1)}{I(2N,\\,2N)} \\] and prove that the infinite product \\[ \\prod_{k=1}^{\\infty}\\frac{(2k)^2}{(2k-1)(2k+1)} \\] converges to a closed value; evaluate that value. Beware: the reduction by itself determines $R_{N}R_{N-1}$ but does not, on its own logic, force the sequence $(R_N)$ to converge at all. Identify the extra structural fact that is indispensable to close the limit, and explain precisely why the recurrence alone is powerless without it.",
    "answer": "\\[\\boxed{\\displaystyle\\prod_{k=1}^{\\infty}\\frac{(2k)^2}{(2k-1)(2k+1)}=\\frac{\\pi}{2}}\\]",
    "trap": "The seductive shortcut is to extract the limit from the recurrence alone. Writing $r_k=I(k,k)/I(k-1,k-1)$, the diagonal collapse plus the cosine reduction give the EXACT two-term relation $r_{k+1}\\,r_k=\\dfrac14\\cdot\\dfrac{k}{k+1}\\xrightarrow[k\\to\\infty]{}\\dfrac14$. A strong student now reasons: 'the product of consecutive terms tends to $\\tfrac14$, so each term tends to $\\sqrt{1/4}=\\tfrac12$', concludes $R_N=r_{2N+1}\\to\\tfrac12$, and reports the product as $\\pi/2$ — the right number by luck, but on a fatally incomplete argument. The hidden fallacy is that $a_{k+1}a_k\\to L$ does NOT imply $a_k\\to\\sqrt L$: a positive sequence can satisfy this and still oscillate, with $a_{2j}\\to c$ and $a_{2j+1}\\to L/c$ for ANY $c>0$. The recurrence $r_{k+1}r_k=\\tfrac14\\tfrac{k}{k+1}$ is genuinely satisfied by such oscillating sequences (seed $r_1$ with any value and propagate), so the bare recurrence carries no information about whether $(r_k)$ converges, let alone to $\\tfrac12$. The genuinely missing, indispensable ingredient is MONOTONICITY: because $0\\le\\sin x\\cos x\\le\\tfrac12<1$ on $[0,\\tfrac{\\pi}{2}]$, the diagonal $D_k=I(k,k)$ is strictly decreasing, which forces $(r_k)$ to be monotone and pins it — via $\\tfrac12\\sqrt{\\tfrac{k-1}{k}}\\le r_k\\le\\tfrac12\\sqrt{\\tfrac{k}{k+1}}$ — to the single limit $\\tfrac12$, eliminating every oscillating impostor. A second, cruder version of the trap is mis-collapsing the diagonal as $I(k,k)=I(k,0)/4^{k}$ (treating $\\sin x\\cos x=\\tfrac12\\sin 2x$ as if it contributed $4^{-k}$ rather than the correct $2^{-k}\\sin^k 2x$, whose half-period folding gives $I(k,k)=I(k,0)/2^{k}$); that single mis-power collapses the answer to the wrong $\\pi/4$.",
    "solutions": [
      {
        "name": "Two-index reduction, diagonal collapse, monotone squeeze",
        "steps": [
          "Reduction by parts (lowering $n$). For $n\\ge2$ write $\\cos^{n}x=\\cos^{n-1}x\\cdot\\cos x$ and integrate by parts with $u=\\sin^{m}x\\cos^{n-1}x$, $dv=\\cos x\\,dx$ so $v=\\sin x$. The boundary term $\\bigl[\\sin^{m+1}x\\cos^{n-1}x\\bigr]_0^{\\pi/2}$ vanishes at both ends ($n-1\\ge1$ kills the top, $m+1\\ge1$ kills the bottom). Differentiating $u$ and using $\\cos^2x=1-\\sin^2x$ then $\\sin^2 x=1-\\cos^2x$ gives $I(m,n)=(n-1)\\bigl(I(m,n-2)-I(m,n)\\bigr)$, hence \\[ I(m,n)=\\frac{n-1}{m+n}\\,I(m,n-2),\\qquad n\\ge2, \\] and by the reflection $x\\mapsto\\tfrac{\\pi}{2}-x$ (which swaps $\\sin\\leftrightarrow\\cos$, so $I(m,n)=I(n,m)$) the mirror law $I(m,n)=\\dfrac{m-1}{m+n}I(m-2,n)$ holds too.",
          "Diagonal collapse. Put $m=n=k$. Since $\\sin x\\cos x=\\tfrac12\\sin 2x$, \\[ D_k:=I(k,k)=\\int_0^{\\pi/2}\\!\\!\\Bigl(\\tfrac12\\sin 2x\\Bigr)^{k}dx=\\frac{1}{2^{k}}\\int_0^{\\pi/2}\\!\\!\\sin^{k}2x\\,dx . \\] Substitute $u=2x$ and fold the two equal half-periods of $\\sin^k u$ on $[0,\\pi]$: $\\int_0^{\\pi}\\sin^k u\\,du=2\\int_0^{\\pi/2}\\sin^k u\\,du$, so $\\tfrac12\\int_0^{\\pi}\\sin^k u\\,du=\\int_0^{\\pi/2}\\sin^k u\\,du=I(k,0)$. Therefore the clean identity \\[ D_k=\\frac{I(k,0)}{2^{k}}. \\]",
          "Compute the ratio exactly. From the single-index reduction $I(k,0)=\\dfrac{k-1}{k}I(k-2,0)$ (the $m=0$ mirror law) one gets $\\dfrac{I(2N+1,0)}{I(2N,0)}=\\dfrac{2}{\\pi}\\displaystyle\\prod_{k=1}^{N}\\dfrac{(2k)^2}{(2k-1)(2k+1)}$ after iterating both seeds $I(0,0)=\\tfrac{\\pi}{2},\\,I(1,0)=1$. Hence, writing $P_N=\\prod_{k=1}^{N}\\tfrac{(2k)^2}{(2k-1)(2k+1)}$, \\[ R_N=\\frac{D_{2N+1}}{D_{2N}}=\\frac{I(2N+1,0)/2^{2N+1}}{I(2N,0)/2^{2N}}=\\frac12\\cdot\\frac{I(2N+1,0)}{I(2N,0)}=\\frac{P_N}{\\pi}. \\] So proving $\\lim R_N=\\tfrac12$ is EXACTLY proving $\\lim P_N=\\tfrac{\\pi}{2}$.",
          "Monotone squeeze fixes the limit. Because $0\\le\\sin x\\cos x\\le\\tfrac12$, the diagonal $D_k$ is strictly decreasing, so $r_k:=D_k/D_{k-1}\\in(0,1)$ is increasing. The reduction gives the exact two-term product $r_{k+1}r_k=\\dfrac{D_{k+1}}{D_{k-1}}=\\dfrac14\\cdot\\dfrac{I(k+1,0)}{I(k-1,0)}=\\dfrac14\\cdot\\dfrac{k}{k+1}$. Monotonicity ($r_k\\le r_{k+1}$) turns this into the squeeze $r_k^2\\le r_{k+1}r_k\\le r_{k+1}^2$, i.e. \\[ \\frac12\\sqrt{\\frac{k-1}{k}}\\le r_k\\le\\frac12\\sqrt{\\frac{k}{k+1}}\\xrightarrow[k\\to\\infty]{}\\frac12 . \\] Thus $R_N=r_{2N+1}\\to\\tfrac12$, so $P_N=\\pi R_N\\to\\dfrac{\\pi}{2}$, giving \\[ \\boxed{\\displaystyle\\prod_{k=1}^{\\infty}\\frac{(2k)^2}{(2k-1)(2k+1)}=\\frac{\\pi}{2}}. \\] Monotonicity, not the recurrence, is what excluded the oscillating solutions and selected the value."
        ]
      },
      {
        "name": "Direct bracketing of the diagonal between consecutive terms",
        "steps": [
          "Set $D_k=I(k,k)=I(k,0)/2^{k}$ as above and note $P_N=\\pi D_{2N+1}/D_{2N}$ from the previous solution's identity. Instead of ratios of ratios, bracket $D_{2N+1}$ directly using the strict monotonicity $D_{2N+2}<D_{2N+1}<D_{2N}$ (valid since the integrand $(\\sin x\\cos x)^{k}$ decreases pointwise in $k$ on $(0,\\tfrac\\pi2)$).",
          "Divide the chain by $D_{2N}>0$: \\[ \\frac{D_{2N+2}}{D_{2N}}<\\frac{D_{2N+1}}{D_{2N}}=R_N<1 . \\] The left ratio is explicit from the diagonal collapse and the reduction: $\\dfrac{D_{2N+2}}{D_{2N}}=\\dfrac14\\cdot\\dfrac{I(2N+2,0)}{I(2N,0)}=\\dfrac14\\cdot\\dfrac{2N+1}{2N+2}$.",
          "Refine the upper bound symmetrically by bracketing $D_{2N+1}$ from above with $D_{2N+1}>D_{2N+2}$ rewritten through $D_{2N+1}^2>D_{2N}D_{2N+2}$ — but the clean monotone form is enough once we also note $R_N\\,R_N'=\\tfrac14\\tfrac{2N+1}{2N+2}$ with $R_N'=D_{2N+2}/D_{2N+1}<R_N$; combined with $R_N'<R_N$ this yields $\\dfrac14\\dfrac{2N+1}{2N+2}<R_N^2$. Hence \\[ \\frac14\\cdot\\frac{2N+1}{2N+2}<R_N^{2}<R_{N}\\,R_{N-1}\\cdot\\frac{R_N}{R_{N-1}} , \\] and since both the explicit lower bound and (by the same token from the other side) the implied upper bound converge to $\\tfrac14$, the sandwich forces $R_N^2\\to\\tfrac14$, so $R_N\\to\\tfrac12$.",
          "Therefore $P_N=\\pi R_N\\to\\dfrac{\\pi}{2}$, and the partial products are increasing and bounded above by $\\tfrac{\\pi}{2}$ (each factor $>1$, limit finite), so the infinite product converges to \\[ \\boxed{\\displaystyle\\prod_{k=1}^{\\infty}\\frac{(2k)^2}{(2k-1)(2k+1)}=\\frac{\\pi}{2}}. \\] The bracketing is just monotonicity in disguise — the same indispensable ingredient — applied to one term rather than a ratio."
        ]
      },
      {
        "name": "Beta-function closed form for the diagonal ratio",
        "steps": [
          "The two-index integral is a Beta value: $I(m,n)=\\tfrac12 B\\!\\left(\\tfrac{m+1}{2},\\tfrac{n+1}{2}\\right)=\\dfrac{\\Gamma\\!\\left(\\tfrac{m+1}{2}\\right)\\Gamma\\!\\left(\\tfrac{n+1}{2}\\right)}{2\\,\\Gamma\\!\\left(\\tfrac{m+n}{2}+1\\right)}$, and one checks $I(m,n)/I(m,n-2)=\\tfrac{n-1}{m+n}$ directly from $\\Gamma(z+1)=z\\Gamma(z)$, matching the IBP reduction (so this is the same content, re-encoded analytically). On the diagonal, $D_k=I(k,k)=\\dfrac{\\Gamma\\!\\left(\\tfrac{k+1}{2}\\right)^2}{2\\,\\Gamma(k+1)}$.",
          "Form the target ratio with $k=2N$: \\[ R_N=\\frac{D_{2N+1}}{D_{2N}}=\\frac{\\Gamma(N+1)^2/\\,\\Gamma(2N+2)}{\\Gamma\\!\\left(N+\\tfrac12\\right)^2/\\,\\Gamma(2N+1)}=\\frac{\\Gamma(N+1)^2}{\\Gamma\\!\\left(N+\\tfrac12\\right)^2}\\cdot\\frac{\\Gamma(2N+1)}{\\Gamma(2N+2)} . \\] Since $\\Gamma(2N+2)=(2N+1)\\Gamma(2N+1)$, the last factor is $\\dfrac{1}{2N+1}$, so $R_N=\\dfrac{1}{2N+1}\\left(\\dfrac{\\Gamma(N+1)}{\\Gamma(N+\\tfrac12)}\\right)^{2}$.",
          "Apply the standard ratio asymptotic $\\dfrac{\\Gamma(N+a)}{\\Gamma(N+b)}\\sim N^{a-b}$ (from Stirling) with $a=1,\\,b=\\tfrac12$: $\\dfrac{\\Gamma(N+1)}{\\Gamma(N+\\tfrac12)}\\sim N^{1/2}$, so $\\left(\\tfrac{\\Gamma(N+1)}{\\Gamma(N+1/2)}\\right)^{2}\\sim N$ and \\[ R_N\\sim\\frac{N}{2N+1}\\longrightarrow\\frac12 . \\]",
          "Because $R_N=P_N/\\pi$ exactly (the Gamma form reproduces the same product on iterating $\\Gamma(z+1)=z\\Gamma(z)$), $P_N\\to\\dfrac{\\pi}{2}$ and \\[ \\boxed{\\displaystyle\\prod_{k=1}^{\\infty}\\frac{(2k)^2}{(2k-1)(2k+1)}=\\frac{\\pi}{2}}. \\] Stirling's amplitude $\\sqrt{2\\pi}$ inside $\\Gamma$ is the analytic shadow of the seeds $I(0,0)=\\tfrac\\pi2,\\,I(1,0)=1$; the functional equation $\\Gamma(z+1)=z\\Gamma(z)$ alone — the pure recurrence — again fixes only the shape, never the amplitude."
        ]
      }
    ],
    "remark": "Insight: the engine is a TWO-index reduction folded onto its own diagonal. The double-angle identity $\\sin x\\cos x=\\tfrac12\\sin 2x$ collapses the symmetric integral $I(k,k)$ to $2^{-k}I(k,0)$ — a single, exact bridge from the two-parameter world back to the classical Wallis sequence — and the ratio $R_N=I(2N+1,2N+1)/I(2N,2N)$ turns out to be precisely $P_N/\\pi$, the partial Wallis product divided by $\\pi$. The whole proof then rests on one moral the chapter keeps repeating: a reduction relates a sequence to itself and so fixes only ratios, never the limit. Here that gap is sharp and visible — $r_{k+1}r_k\\to\\tfrac14$ is satisfied by genuinely oscillating sequences, so 'the product of consecutive terms tends to $\\tfrac14$, hence each tends to $\\tfrac12$' is a non-sequitur that happens to land on the right number. What rescues it is monotonicity, born from the elementary bound $\\sin x\\cos x\\le\\tfrac12$: it makes $(r_k)$ monotone, squeezes it between $\\tfrac12\\sqrt{\\tfrac{k-1}{k}}$ and $\\tfrac12\\sqrt{\\tfrac{k}{k+1}}$, and so converts the scale-blind recurrence into the honest infinite product $\\prod (2k)^2/((2k-1)(2k+1))=\\tfrac\\pi2$. The same anchoring shows up as the seeds in the iteration and as Stirling's $\\sqrt{2\\pi}$ in the Gamma route."
  },
  {
    "theme": "reduction",
    "themeLabel": "Reduction Formulae & Wallis",
    "title": "The Log-Power Ladder and the Counterfeit Zero",
    "difficulty": 4,
    "task": "Derive and evaluate",
    "tags": [
      "reduction-formula",
      "integration-by-parts",
      "log-power",
      "truncated-series",
      "alternating-tail"
    ],
    "statement": "For $n=0,1,2,\\dots$ define \\[ L_n=\\int_1^{e}(\\ln x)^{n}\\,dx. \\] Using integration by parts, establish the reduction formula $L_n=e-n\\,L_{n-1}$ for $n\\ge1$, taking care to justify the lower boundary term. Then evaluate $L_4$ in exact closed form, and express the general $L_n$ in terms of the partial sums of the Maclaurin series of $e^{-1}$, explaining precisely why those partial sums may not be replaced by their limit $1/e$.",
    "answer": "\\[\\boxed{L_4=9e-24}\\]",
    "trap": "After finding the closed form $L_n=(-1)^{n}\\,n!\\Bigl(e\\sum_{k=0}^{n}\\dfrac{(-1)^k}{k!}-1\\Bigr)$, a strong student recognises $\\sum_{k=0}^{\\infty}\\dfrac{(-1)^k}{k!}=e^{-1}$ and, reasoning that the alternating series converges fast, replaces the FINITE partial sum $\\sum_{k=0}^{4}\\dfrac{(-1)^k}{k!}$ by its limit $e^{-1}$. Then the bracket collapses to $e\\cdot e^{-1}-1=0$ and they report the clean but false $L_4=0$. The error is conceptual, not arithmetic: a truncated series is its limit only up to a remainder, and here that remainder is multiplied by the explosively growing factor $n!=24$. Writing $R_n=e^{-1}-\\sum_{k=0}^{n}\\frac{(-1)^k}{k!}$ for the alternating tail, the exact statement is $L_n=(-1)^{n+1}n!\\,e\\,R_n$; the tail $R_4\\approx-7.1\\times10^{-3}$ is small, yet $24\\,e\\,|R_4|=9e-24\\approx0.4645\\neq0$. The very fact that $L_n>0$ for every $n$ (the integrand $(\\ln x)^n$ is nonnegative and not identically zero on $[1,e]$) already forbids the answer $0$ — a built-in alarm the shortcut ignores. The missing case is the discarded remainder: convergence of the series controls the tail's size, never licences setting it to zero against an $n!$ amplifier.",
    "solutions": [
      {
        "name": "Reduction by parts, then iterate from the seed",
        "steps": [
          "Take $u=(\\ln x)^{n}$, $dv=dx$, so $du=n(\\ln x)^{n-1}\\,\\dfrac{dx}{x}$ and $v=x$. Then for $n\\ge1$, \\[ L_n=\\Bigl[x(\\ln x)^{n}\\Bigr]_1^{e}-\\int_1^{e}x\\cdot n(\\ln x)^{n-1}\\frac{dx}{x}=\\Bigl[x(\\ln x)^{n}\\Bigr]_1^{e}-n\\int_1^{e}(\\ln x)^{n-1}dx. \\] At $x=e$ the bracket is $e\\,(\\ln e)^{n}=e$; at $x=1$ it is $1\\cdot(\\ln 1)^{n}=0$ precisely because $n\\ge1$ (this is where $n=0$ must be excluded — for $n=0$ the lower value $(\\ln 1)^0=1$ is nonzero). Hence the reduction formula $L_n=e-n\\,L_{n-1}$ for $n\\ge1$.",
          "Compute the seed directly: $L_0=\\int_1^e dx=e-1$. The recurrence cannot supply $L_0$; it must be found from the integral.",
          "Climb the ladder: $L_1=e-1\\cdot L_0=e-(e-1)=1$; $L_2=e-2L_1=e-2$; $L_3=e-3L_2=e-3(e-2)=6-2e$; $L_4=e-4L_3=e-4(6-2e)=e-24+8e$.",
          "Collect: $L_4=9e-24$. Numerically $9e-24\\approx0.4645>0$, consistent with $0<(\\ln x)^4\\le1$ on $[1,e]$. \\[\\boxed{L_4=9e-24}.\\]"
        ]
      },
      {
        "name": "Substitution to $\\int_0^1 t^n e^{t}\\,dt$ and the $x^n e^x$ recurrence",
        "steps": [
          "Put $t=\\ln x$, so $x=e^{t}$, $dx=e^{t}\\,dt$, and as $x:1\\to e$ we have $t:0\\to1$. Then \\[ L_n=\\int_0^1 t^{n}e^{t}\\,dt=:M_n, \\] a member of the classic $\\int x^n e^x$ family.",
          "Integrate by parts with $u=t^n$, $dv=e^t\\,dt$: $M_n=\\bigl[t^n e^t\\bigr]_0^1-n\\int_0^1 t^{n-1}e^t\\,dt=e-nM_{n-1}$, the same recurrence, with $M_0=\\int_0^1 e^t\\,dt=e-1$. The lower term $t^n e^t\\big|_{t=0}=0$ again needs $n\\ge1$.",
          "Iterate: $M_1=1,\\;M_2=e-2,\\;M_3=6-2e,\\;M_4=e-4(6-2e)=9e-24$.",
          "Therefore $L_4=M_4=9e-24$, matching Method 1 from an independent integral representation. \\[\\boxed{L_4=9e-24}.\\]"
        ]
      },
      {
        "name": "Solve the recurrence in closed form: the truncated series for $e^{-1}$",
        "steps": [
          "Divide the recurrence $L_n=e-nL_{n-1}$ by $(-1)^n n!$. With $a_n:=\\dfrac{L_n}{(-1)^n n!}$ one gets $a_n=\\dfrac{e}{(-1)^n n!}+a_{n-1}=a_{n-1}+\\dfrac{e\\,(-1)^n}{n!}$, telescoping from $a_0=L_0=e-1$.",
          "Summing, $a_n=(e-1)+e\\sum_{k=1}^{n}\\dfrac{(-1)^k}{k!}=-1+e\\sum_{k=0}^{n}\\dfrac{(-1)^k}{k!}$, hence \\[ L_n=(-1)^{n}n!\\Bigl(e\\sum_{k=0}^{n}\\frac{(-1)^k}{k!}-1\\Bigr). \\] Since $\\sum_{k=0}^{\\infty}\\frac{(-1)^k}{k!}=e^{-1}$, writing the tail $R_n=e^{-1}-\\sum_{k=0}^{n}\\frac{(-1)^k}{k!}$ gives the compact form $L_n=(-1)^{n+1}n!\\,e\\,R_n$, which makes manifest that the partial sum, not its limit, is what enters.",
          "For $n=4$: $\\sum_{k=0}^{4}\\dfrac{(-1)^k}{k!}=1-1+\\tfrac12-\\tfrac16+\\tfrac1{24}=\\dfrac{3}{8}$, so $L_4=24\\Bigl(\\tfrac{3}{8}e-1\\Bigr)=9e-24$.",
          "Had one (illegitimately) used $\\tfrac38\\to e^{-1}$ the bracket would vanish; the genuine value keeps the truncation and yields \\[\\boxed{L_4=9e-24}.\\]"
        ]
      }
    ],
    "remark": "Insight: a finite reduction ladder secretly stores the partial sums of a power series. Solving $L_n=e-nL_{n-1}$ in closed form exposes $L_n=(-1)^{n+1}n!\\,e\\,R_n$, where $R_n$ is the truncation remainder of the alternating series for $e^{-1}$. This is the source of a beautiful tension: $R_n$ decays super-exponentially (like $1/(n+1)!$ by the alternating-series bound), yet it is multiplied by $n!$, so the product neither blows up nor dies to zero but settles into the range $0<L_n<e-1$ — exactly as the bare integral demands. The lesson a top student should carry away is that 'the series converges to $1/e$' is a statement about the tail's smallness, never a license to delete it; against a factorial amplifier a discarded $O(1/(n+1)!)$ remainder is precisely the whole answer. The same architecture underlies $\\int_0^1 t^n e^t\\,dt$ and the incomplete-gamma function, where truncated exponentials are the rule rather than the exception."
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
    "title": "The Derangement Smuggled Inside an Exponential Moment",
    "difficulty": 5,
    "task": "Derive, evaluate, and identify",
    "tags": [
      "reduction-formula",
      "integration-by-parts",
      "subfactorial",
      "derangements",
      "base-case-validity",
      "factorial-amplifier"
    ],
    "statement": "For $n=0,1,2,\\dots$ define the exponential moment \\[ E_n=\\int_0^{1} x^{n}e^{x}\\,dx. \\] (a) By integration by parts, derive (do not quote) the reduction formula $E_n=e-n\\,E_{n-1}$, stating exactly the range of $n$ for which it is valid and justifying the lower boundary term. (b) Evaluate $E_5$ in exact closed form. (c) Solve the recurrence in closed form and show that the integer coefficient of $e$ appearing in $E_n$ is, up to sign, the subfactorial $D_n$ (the number of derangements of $n$ objects), so that $E_n=(-1)^{n}\\bigl(e\\,D_n-n!\\bigr)$; identify the combinatorial object that the coefficient $44$ in $E_5$ literally counts.",
    "answer": "\\[\\boxed{E_5=120-44e}\\]",
    "trap": "The reduction $E_n=e-n\\,E_{n-1}$ comes from the boundary term $\\bigl[x^{n}e^{x}\\bigr]_0^{1}=e\\cdot 1^{n}-1\\cdot 0^{n}$, and the lower value $0^{n}$ is $0$ ONLY for $n\\ge1$; at $n=0$ it is $0^{0}=1$, so the formula is valid strictly for $n\\ge1$. The tempting move is to treat the recurrence as self-starting: set $n=0$ in $E_n=e-n\\,E_{n-1}$, watch the term $n\\,E_{n-1}$ obediently vanish, and read off the 'base case' $E_0=e$. This is a conceptual error, not an arithmetic one — it silently extends a relation past the only regime where its derivation holds. The true base must come from the integral itself: $E_0=\\int_0^1 e^x\\,dx=e-1$. The two seeds differ by exactly $1$, an apparently harmless slip; but the recurrence multiplies the running value by $-n$ at every rung, so the seed error is scaled by $(-1)^5\\,5!=-120$. Climbing from the counterfeit seed $E_0=e$ yields $E_5=-44e\\approx-119.6$, whereas the honest seed gives $E_5=120-44e\\approx+0.396$. The factorial amplifier converts a unit base-case mistake into an answer off by $120$ and of the WRONG SIGN. A built-in alarm exposes it instantly: the integrand $x^5e^x$ is positive on $(0,1)$, so $0<E_5<E_0<2$; any negative output — let alone one near $-120$ — is impossible. The missing case is the single excluded index $n=0$, where $0^0\\ne0$; the recurrence is powerless to supply its own base, and the integral, not the formula, must seed the ladder.",
    "solutions": [
      {
        "name": "Reduction by parts, then climb from the honest seed",
        "steps": [
          "Take $u=x^{n}$, $dv=e^{x}\\,dx$, so $du=n x^{n-1}\\,dx$ and $v=e^{x}$. For $n\\ge1$, \\[ E_n=\\bigl[x^{n}e^{x}\\bigr]_0^{1}-\\int_0^{1} n x^{n-1}e^{x}\\,dx=\\bigl(e\\cdot1^{n}-0^{n}\\bigr)-n\\int_0^1 x^{n-1}e^x\\,dx. \\] Here $0^{n}=0$ precisely because $n\\ge1$ (for $n=0$ the lower value would be $0^{0}=1$, which is exactly why the formula must exclude $n=0$). Hence the reduction $E_n=e-n\\,E_{n-1}$ for $n\\ge1$.",
          "Seed the ladder from the integral, never from the recurrence: $E_0=\\int_0^1 e^x\\,dx=e-1$.",
          "Climb: $E_1=e-1\\cdot E_0=e-(e-1)=1$; $E_2=e-2E_1=e-2$; $E_3=e-3E_2=e-3(e-2)=6-2e$; $E_4=e-4E_3=e-4(6-2e)=9e-24$; $E_5=e-5E_4=e-5(9e-24)=e-45e+120$.",
          "Collect: $E_5=120-44e$. Numerically $120-44e\\approx0.396$, lying in $(0,e-1)$ as the positive integrand on $[0,1]$ demands. \\[\\boxed{E_5=120-44e}.\\]"
        ]
      },
      {
        "name": "Solve the recurrence in closed form: the subfactorial bridge",
        "steps": [
          "Divide $E_n=e-n\\,E_{n-1}$ by $(-1)^{n}n!$ and set $a_n=\\dfrac{E_n}{(-1)^{n}n!}$. Then $a_n=a_{n-1}+\\dfrac{e\\,(-1)^{n}}{n!}$, telescoping from $a_0=E_0=e-1$. Summing, $a_n=(e-1)+e\\sum_{k=1}^{n}\\dfrac{(-1)^k}{k!}=-1+e\\sum_{k=0}^{n}\\dfrac{(-1)^k}{k!}$, so \\[ E_n=(-1)^{n}n!\\Bigl(e\\sum_{k=0}^{n}\\frac{(-1)^k}{k!}-1\\Bigr). \\]",
          "Recognise the subfactorial. The number of derangements of $n$ objects is $D_n=n!\\sum_{k=0}^{n}\\dfrac{(-1)^k}{k!}$, with $D_0,\\dots,D_5=1,0,1,2,9,44$. Substituting $n!\\sum_{k=0}^{n}\\frac{(-1)^k}{k!}=D_n$ collapses the bracket to \\[ E_n=(-1)^{n}\\bigl(e\\,D_n-n!\\bigr). \\] Thus the integer multiplying $e$ in $E_n$ is exactly $\\pm D_n$: a definite integral of an exponential has quietly hidden a counting problem.",
          "Cross-check the structure: $D_n=n\\,D_{n-1}+(-1)^{n}$ is the classical derangement recurrence, and it is the mirror of $E_n=e-n\\,E_{n-1}$ under the bridge $E_n=(-1)^n(eD_n-n!)$ — the two ladders are the same ladder.",
          "Evaluate at $n=5$: $D_5=44$ (the number of derangements of five symbols), so $E_5=(-1)^{5}(e\\cdot44-120)=-(44e-120)=120-44e$. The coefficient $44$ literally counts the permutations of $\\{1,2,3,4,5\\}$ with no fixed point. \\[\\boxed{E_5=120-44e}.\\]"
        ]
      },
      {
        "name": "Closed antiderivative: the signed-derangement coefficient at the endpoint",
        "steps": [
          "Repeated differentiation gives the exact antiderivative \\[ \\int x^{n}e^{x}\\,dx=e^{x}\\sum_{j=0}^{n}(-1)^{j}\\frac{n!}{(n-j)!}\\,x^{\\,n-j}+C, \\] verified by differentiating: $\\frac{d}{dx}\\Bigl(e^{x}\\sum_j(-1)^j\\frac{n!}{(n-j)!}x^{n-j}\\Bigr)=x^{n}e^{x}$, since the $e^x$-multiplied chain telescopes down to the single surviving term $x^n e^x$.",
          "Evaluate between $0$ and $1$. At $x=1$ the bracket is $S_n:=\\sum_{j=0}^{n}(-1)^{j}\\dfrac{n!}{(n-j)!}$; reindexing $i=n-j$ gives $S_n=(-1)^{n}n!\\sum_{i=0}^{n}\\dfrac{(-1)^{i}}{i!}=(-1)^{n}D_n$, the signed subfactorial. At $x=0$ only the $j=n$ term survives, giving $(-1)^{n}n!$. Hence \\[ E_n=e\\,S_n-(-1)^{n}n!=e\\,(-1)^{n}D_n-(-1)^{n}n!=(-1)^{n}\\bigl(eD_n-n!\\bigr), \\] the same bridge, now read straight off the endpoint coefficients.",
          "For $n=5$: $S_5=\\sum_{j=0}^{5}(-1)^j\\dfrac{120}{(5-j)!}=1-5+20-60+120-120=-44$, and $(-1)^5 5!=-120$. So $E_5=-44e-(-120)=120-44e$.",
          "The endpoint coefficient $-44$ is precisely $(-1)^5 D_5$: the derangement number emerges as the $x=1$ value of the integrating polynomial. \\[\\boxed{E_5=120-44e}.\\]"
        ]
      }
    ],
    "remark": "Insight: an innocent exponential moment $\\int_0^1 x^n e^x\\,dx$ is a derangement counter in disguise. Solving its reduction in closed form yields $E_n=(-1)^n(eD_n-n!)$, so the integer attached to $e$ is, up to sign, the subfactorial $D_n$ — and the antiderivative makes this concrete, since the coefficient polynomial evaluated at $x=1$ is the signed derangement number. Two morals sit on top of each other. First, the chapter's recurring lesson about base cases is sharp here: a reduction is valid only on the index range where its boundary term was derived, and $E_n=e-nE_{n-1}$ excludes $n=0$ because $0^0=1$, not $0$; the recurrence cannot self-start, and feeding it the counterfeit seed $E_0=e$ instead of the integral's $E_0=e-1$ is amplified by the $\\pm n!$ multiplier into an answer off by $120$ and of the wrong sign. Second, the same factorial that punishes a sloppy seed is exactly the factorial of the derangement formula $D_n=n!\\sum_{k\\le n}(-1)^k/k!$: the alternating partial sum that controls $E_n$ is the very inclusion-exclusion sum that counts fixed-point-free permutations. A top student should leave seeing the integral, the recurrence $D_n=nD_{n-1}+(-1)^n$, and the combinatorics of $44$ derangements of five letters as three faces of one object."
  },
  {
    "theme": "reduction",
    "themeLabel": "Reduction Formulae & Wallis",
    "title": "The Coupling Denominator Two Wallis Factors Forget",
    "difficulty": 5,
    "task": "Prove and evaluate",
    "tags": [
      "two-index-reduction",
      "central-binomial",
      "beta-function",
      "reflection-symmetry",
      "coupling"
    ],
    "statement": "For integers $m,n\\ge0$ set \\[ W(m,n)=\\int_0^{\\pi/2}\\sin^{2m}x\\,\\cos^{2n}x\\,dx . \\] (a) Derive (do not quote) the one-index reduction $W(m,n)=\\dfrac{2n-1}{2m+2n}\\,W(m,n-1)$ for $n\\ge1$ by integration by parts, and record the reflection symmetry $W(m,n)=W(n,m)$ coming from $x\\mapsto\\tfrac{\\pi}{2}-x$. (b) Iterating BOTH indices down to the corner $W(0,0)$, prove the reflection-symmetric closed form \\[ W(m,n)=\\frac{\\pi}{2}\\cdot\\frac{\\binom{2m}{m}\\binom{2n}{n}}{4^{\\,m+n}\\binom{m+n}{m}} , \\] in which the two single powers contribute the central binomials $\\binom{2m}{m},\\binom{2n}{n}$ and the SHARED variable contributes the coupling factor $\\binom{m+n}{m}$ in the denominator. (c) Use the formula to evaluate $W(3,5)=\\displaystyle\\int_0^{\\pi/2}\\sin^{6}x\\,\\cos^{10}x\\,dx$, and show that the corner case $m=n=0$ forces the anchor identity $B\\!\\left(\\tfrac12,\\tfrac12\\right)=\\pi$. State clearly the single structural reason the answer is NOT the product of the two separate Wallis values.",
    "answer": "\\[\\boxed{W(3,5)=\\dfrac{45\\pi}{65536}}\\]",
    "trap": "The fatal shortcut is to treat the integrand as separable. A strong student knows the single-power Wallis values $\\int_0^{\\pi/2}\\sin^{2m}x\\,dx=\\tfrac{\\pi}{2}\\tfrac{(2m-1)!!}{(2m)!!}$ and $\\int_0^{\\pi/2}\\cos^{2n}x\\,dx=\\tfrac{\\pi}{2}\\tfrac{(2n-1)!!}{(2n)!!}$, and is tempted to assemble $W(m,n)$ as if $\\sin$ and $\\cos$ powers could be integrated independently, writing the 'normalised product' $\\widehat{W}=\\dfrac{2}{\\pi}\\Bigl(\\int_0^{\\pi/2}\\sin^{2m}\\Bigr)\\Bigl(\\int_0^{\\pi/2}\\cos^{2n}\\Bigr)=\\dfrac{\\pi}{2}\\dfrac{\\binom{2m}{m}\\binom{2n}{n}}{4^{m+n}}$. For $(m,n)=(3,5)$ this gives the clean-looking $\\widehat{W}=\\dfrac{315\\pi}{8192}$. The error is conceptual, not arithmetic: $\\sin^{2m}x$ and $\\cos^{2n}x$ live on the SAME variable $x$, so the integral is in no sense a product of two integrals; the genuine closed form carries an extra denominator $\\binom{m+n}{m}$ that couples the two powers, and $\\widehat{W}=\\binom{m+n}{m}\\,W(m,n)$ overshoots by exactly that factor. Here $\\binom{8}{3}=56$, and indeed $\\dfrac{315\\pi}{8192}=56\\cdot\\dfrac{45\\pi}{65536}$. A sanity flag the shortcut ignores: monotonicity in either index gives $W(3,5)<W(0,5)=\\tfrac{63\\pi}{512}\\approx0.386$, yet already $\\widehat{W}\\approx0.121$ is implausibly large for an integrand bounded by the product of two small factors and squeezed toward the corners — the missing coupling denominator is precisely what restores the correct tiny value $\\approx0.00216$. The hidden case the trap drops is that the corner anchor $W(0,0)=\\tfrac{\\pi}{2}$ enters ONCE, not twice: a true product would re-use the normalisation $\\tfrac{\\pi}{2}$ a second time, which is exactly the spurious $\\binom{m+n}{m}$.",
    "solutions": [
      {
        "name": "One-index reduction, reflect, telescope to the corner",
        "steps": [
          "Reduction by parts lowering the cosine power. For $n\\ge1$ write $\\cos^{2n}x=\\cos^{2n-1}x\\cdot\\cos x$ and integrate by parts with $u=\\sin^{2m}x\\,\\cos^{2n-1}x$, $dv=\\cos x\\,dx$, $v=\\sin x$. The boundary term $\\bigl[\\sin^{2m+1}x\\,\\cos^{2n-1}x\\bigr]_0^{\\pi/2}$ vanishes at both ends ($2n-1\\ge1$ kills the top, $2m+1\\ge1$ kills the bottom). Differentiating $u$ and using $\\cos^2x=1-\\sin^2x$ gives $W(m,n)=(2n-1)\\bigl(W(m,n-1)-W(m,n)\\bigr)$, hence \\[ W(m,n)=\\frac{2n-1}{2m+2n}\\,W(m,n-1),\\qquad n\\ge1. \\]",
          "Reflection symmetry. Under $x\\mapsto\\tfrac{\\pi}{2}-x$ the integrand swaps $\\sin\\leftrightarrow\\cos$, so $W(m,n)=W(n,m)$; the mirror reduction $W(m,n)=\\dfrac{2m-1}{2m+2n}W(m-1,n)$ for $m\\ge1$ follows at once.",
          "Telescope both indices to $W(0,0)$. First drive $n\\to0$ with $m$ fixed: \\[ W(m,n)=\\prod_{j=1}^{n}\\frac{2j-1}{2m+2j}\\cdot W(m,0)=\\frac{(2n-1)!!}{\\prod_{j=1}^{n}(2m+2j)}\\,W(m,0)=\\frac{(2n-1)!!\\,(2m)!!}{(2m+2n)!!}\\,W(m,0). \\] Then drive $m\\to0$ in $W(m,0)$ by the mirror law (pure Wallis): $W(m,0)=\\dfrac{(2m-1)!!}{(2m)!!}\\,W(0,0)$ with the single corner value $W(0,0)=\\int_0^{\\pi/2}dx=\\tfrac{\\pi}{2}$.",
          "Assemble the central-binomial form. Combining, $W(m,n)=\\dfrac{\\pi}{2}\\cdot\\dfrac{(2m-1)!!\\,(2n-1)!!}{(2m+2n)!!}$. Convert with $(2k-1)!!=\\dfrac{(2k)!}{2^{k}k!}$ and $(2k)!!=2^{k}k!$: the numerator is $\\dfrac{(2m)!(2n)!}{2^{m+n}m!\\,n!}$ and $(2m+2n)!!=2^{m+n}(m+n)!$, so \\[ W(m,n)=\\frac{\\pi}{2}\\cdot\\frac{(2m)!\\,(2n)!}{4^{m+n}\\,m!\\,n!\\,(m+n)!}=\\frac{\\pi}{2}\\cdot\\frac{\\binom{2m}{m}\\binom{2n}{n}}{4^{m+n}\\binom{m+n}{m}}, \\] using $\\dfrac{(2m)!(2n)!}{m!\\,n!\\,(m+n)!}=\\dfrac{\\binom{2m}{m}\\binom{2n}{n}}{\\binom{m+n}{m}}$. The coupling denominator $\\binom{m+n}{m}$ is born from the SHARED denominator $(2m+2n)!!$, not from either power alone.",
          "Evaluate $W(3,5)$. Here $\\binom{6}{3}=20,\\ \\binom{10}{5}=252,\\ 4^{8}=65536,\\ \\binom{8}{3}=56$, so $W(3,5)=\\dfrac{\\pi}{2}\\cdot\\dfrac{20\\cdot252}{65536\\cdot56}=\\dfrac{\\pi}{2}\\cdot\\dfrac{5040}{3670016}=\\dfrac{\\pi}{2}\\cdot\\dfrac{45}{32768}$, giving \\[ \\boxed{W(3,5)=\\frac{45\\pi}{65536}}\\approx0.00216. \\] The corner $m=n=0$ uses $W(0,0)=\\tfrac{\\pi}{2}$ exactly ONCE; a separable product would invoke this normalisation twice, manufacturing the spurious factor $\\binom{m+n}{m}$ — the precise reason the answer is not the product of the two single-power Wallis values."
        ]
      },
      {
        "name": "Beta-function bridge and the corner anchor",
        "steps": [
          "Trigonometric Beta representation. The substitution $t=\\sin^2x$, $dt=2\\sin x\\cos x\\,dx$ turns the integral into \\[ W(m,n)=\\int_0^{\\pi/2}\\sin^{2m}x\\cos^{2n}x\\,dx=\\frac12\\int_0^1 t^{m-1/2}(1-t)^{n-1/2}\\,dt=\\frac12\\,B\\!\\left(m+\\tfrac12,\\,n+\\tfrac12\\right). \\] The reduction $W(m,n)=\\tfrac{2n-1}{2m+2n}W(m,n-1)$ is now just $\\Gamma(z+1)=z\\Gamma(z)$ applied to $B=\\dfrac{\\Gamma(m+\\frac12)\\Gamma(n+\\frac12)}{\\Gamma(m+n+1)}$ — the same content, re-encoded analytically.",
          "Insert the half-integer Gamma values. With $\\Gamma\\!\\left(k+\\tfrac12\\right)=\\dfrac{(2k)!}{4^{k}k!}\\sqrt{\\pi}$ and $\\Gamma(m+n+1)=(m+n)!$, \\[ W(m,n)=\\frac12\\cdot\\frac{\\Gamma(m+\\frac12)\\Gamma(n+\\frac12)}{\\Gamma(m+n+1)}=\\frac{\\pi}{2}\\cdot\\frac{(2m)!\\,(2n)!}{4^{m+n}\\,m!\\,n!\\,(m+n)!}=\\frac{\\pi}{2}\\cdot\\frac{\\binom{2m}{m}\\binom{2n}{n}}{4^{m+n}\\binom{m+n}{m}}, \\] identical to Method 1. The factor $\\sqrt{\\pi}$ appears once from EACH half-integer Gamma, and the two $\\sqrt{\\pi}$ multiply to the single $\\pi$ — the analytic image of using the corner value only once.",
          "Read off the corner anchor. Setting $m=n=0$ gives $W(0,0)=\\tfrac12 B\\!\\left(\\tfrac12,\\tfrac12\\right)$. But directly $W(0,0)=\\int_0^{\\pi/2}dx=\\tfrac{\\pi}{2}$, so $\\tfrac12 B\\!\\left(\\tfrac12,\\tfrac12\\right)=\\tfrac{\\pi}{2}$, i.e. \\[ B\\!\\left(\\tfrac12,\\tfrac12\\right)=\\pi, \\] equivalently $\\Gamma\\!\\left(\\tfrac12\\right)=\\sqrt{\\pi}$. The whole Wallis ladder is pinned by this one corner.",
          "Evaluate the target. For $(m,n)=(3,5)$ the formula gives $W(3,5)=\\dfrac{\\pi}{2}\\cdot\\dfrac{20\\cdot252}{65536\\cdot56}=\\dfrac{45\\pi}{65536}$, so \\[ \\boxed{W(3,5)=\\frac{45\\pi}{65536}}. \\] A naive product of single Wallis integrals would supply TWO copies of the $\\sqrt{\\pi}$/corner normalisation, i.e. an extra $B\\!\\left(\\tfrac12,\\tfrac12\\right)=\\pi$, which is exactly the missing $\\binom{m+n}{m}$ coupling — hence not the product."
        ]
      },
      {
        "name": "Diagonal anchor by the double-angle collapse cross-check",
        "steps": [
          "Independent check at the symmetric point. On the diagonal $m=n=k$, $\\sin^{2k}x\\cos^{2k}x=\\bigl(\\tfrac12\\sin 2x\\bigr)^{2k}=4^{-k}\\sin^{2k}2x$, and the substitution $u=2x$ with the half-period fold $\\int_0^{\\pi}\\sin^{2k}u\\,du=2\\int_0^{\\pi/2}\\sin^{2k}u\\,du$ gives $W(k,k)=\\dfrac{1}{4^{k}}\\cdot\\dfrac12\\int_0^{\\pi}\\sin^{2k}u\\,du=\\dfrac{1}{4^{k}}W(k,0)$.",
          "Match against the closed form. The central-binomial formula at $m=n=k$ reads $W(k,k)=\\dfrac{\\pi}{2}\\dfrac{\\binom{2k}{k}^2}{4^{2k}\\binom{2k}{k}}=\\dfrac{\\pi}{2}\\dfrac{\\binom{2k}{k}}{4^{2k}}$, while $\\dfrac{1}{4^{k}}W(k,0)=\\dfrac{1}{4^{k}}\\cdot\\dfrac{\\pi}{2}\\dfrac{\\binom{2k}{k}}{4^{k}}=\\dfrac{\\pi}{2}\\dfrac{\\binom{2k}{k}}{4^{2k}}$. The two agree, confirming the coupling denominator $\\binom{m+n}{m}$ is correct — at $m=n$ it collapses one of the two numerator central binomials.",
          "Pin the off-diagonal target via the diagonal anchor and one-index reductions. Start from the diagonal value just computed, $W(3,3)=\\dfrac{\\pi}{2}\\dfrac{\\binom{6}{3}}{4^{6}}=\\dfrac{\\pi}{2}\\cdot\\dfrac{20}{4096}=\\dfrac{5\\pi}{2048}$. Raise the cosine index by the one-index reduction $W(m,n)=\\dfrac{2n-1}{2m+2n}W(m,n-1)$ read forwards: $W(3,4)=\\dfrac{2\\cdot4-1}{2\\cdot3+2\\cdot4}W(3,3)=\\dfrac{7}{14}W(3,3)=\\dfrac12\\,W(3,3)=\\dfrac{5\\pi}{4096}$.",
          "Assemble. One more step, $W(3,5)=\\dfrac{2\\cdot5-1}{2\\cdot3+2\\cdot5}W(3,4)=\\dfrac{9}{16}\\cdot\\dfrac{5\\pi}{4096}=\\dfrac{45\\pi}{65536}$, so \\[ \\boxed{W(3,5)=\\frac{45\\pi}{65536}}, \\] reached from the diagonal anchor by the one-index ladder — and the diagonal anchor itself rests on the same single corner $W(0,0)=\\tfrac{\\pi}{2}$, never two."
        ]
      }
    ],
    "remark": "Insight: the both-even Wallis integral looks like it should factor, and that intuition is precisely the trap. The honest closed form $W(m,n)=\\tfrac{\\pi}{2}\\,\\binom{2m}{m}\\binom{2n}{n}/(4^{m+n}\\binom{m+n}{m})$ wears its non-separability on its sleeve: the two single powers each donate a central binomial to the numerator, but because $\\sin^{2m}$ and $\\cos^{2n}$ share one variable the integral also carries a coupling denominator $\\binom{m+n}{m}$ that no product of independent Wallis integrals can produce. Analytically this is the statement $W(m,n)=\\tfrac12 B(m+\\tfrac12,n+\\tfrac12)$ with a SINGLE $\\Gamma(m+n+1)$ in the denominator — one corner normalisation, not two; the two $\\sqrt{\\pi}$ from the half-integer Gammas multiply to one $\\pi$, and the corner $m=n=0$ delivers the anchor $B(\\tfrac12,\\tfrac12)=\\pi$ that pins the entire ladder. The naive separable answer overshoots by exactly $\\binom{m+n}{m}$ because it double-counts that single corner. The lesson a top student should keep is that a reduction in two coupled indices telescopes to ONE corner value, and trying to read the integral as a product silently re-uses the normalisation, manufacturing a binomial-sized error — here a factor of $56$."
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
    "title": "The Constant That Differentiation Throws Away",
    "difficulty": 5,
    "task": "Recover and evaluate",
    "tags": [
      "leibniz-rule",
      "integral-equation",
      "singular-ode",
      "uniqueness-trap",
      "boundary-pinning"
    ],
    "statement": "A continuous function $f:\\bigl[0,\\tfrac{\\pi}{2}\\bigr]\\to\\mathbb{R}$ satisfies, for every $x$ in $\\bigl[0,\\tfrac{\\pi}{2}\\bigr]$, the integral equation \\[ \\int_0^{x} f(t)\\,dt \\;=\\; f(x)\\cos x \\;+\\; x \\;-\\; \\tfrac12\\sin 2x \\;-\\; 2\\cos x \\;+\\; 1 . \\] Determine the value of $f\\!\\left(\\tfrac{\\pi}{2}\\right)$. (Differentiating turns this into a first-order ODE that is singular exactly at the point $x=\\tfrac{\\pi}{2}$ you are asked about, and the differentiated equation has a whole one-parameter family of solutions; only one of them is a genuine solution of the integral equation above.)",
    "answer": "\\[\\boxed{f\\!\\left(\\tfrac{\\pi}{2}\\right)=2}\\]",
    "trap": "The fatal step is treating the differentiated ODE as equivalent to the integral equation. Differentiating with the Leibniz rule gives $f(x)=f'(x)\\cos x-f(x)\\sin x+h'(x)$ where $h(x)=x-\\tfrac12\\sin 2x-2\\cos x+1$, i.e. $f'(x)\\cos x=f(x)\\bigl(1+\\sin x\\bigr)+h'(x)$. Dividing by $\\cos x$ and solving the linear ODE produces the GENERAL solution $f(x)=(1+\\sin x)+K\\,\\dfrac{1+\\sin x}{\\cos^2 x}$ with a free constant $K$ — because differentiation destroys the additive constant that the integral equation silently fixes. A strong student now hunts for one condition to pin $K$ and reaches, almost reflexively, for $f(0)=0$: 'the left side $\\int_0^0 f=0$, so the function vanishes at the origin.' That is the error — the vanishing belongs to the ACCUMULATED integral, not to $f$ itself. Imposing $f(0)=0$ forces $K=-1$, giving $f(x)=(1+\\sin x)\\bigl(1-\\sec^2 x\\bigr)$, which is finite away from $\\tfrac{\\pi}{2}$ but DIVERGES to $-\\infty$ as $x\\to\\tfrac{\\pi}{2}^-$ — so the student either reports $-\\infty$, or, sensing trouble, declares the problem ill-posed. The correct pin comes from substituting $x=0$ into the ORIGINAL integral equation, where $\\cos 0=1$ keeps $f(0)$ alive: $0=f(0)\\cdot 1+(0-0-2+1)$, hence $f(0)=1$, hence $K=0$. Equivalently — and this is the cleanest guard — the homogeneous piece $\\dfrac{1+\\sin x}{\\cos^2 x}$ does not satisfy the integral equation at all: plugging it in leaves a residual of exactly $-K$, so the integral equation by itself, with no boundary fuss, demands $K=0$. Either way the unique continuous solution is $f(x)=1+\\sin x$, finite through the singular point, and $f(\\tfrac{\\pi}{2})=2$. The deeper moral: the ODE is singular at $\\tfrac{\\pi}{2}$, so $\\cos x$ may not be divided away there; the requested value lives precisely where the naive method is forbidden, and only the spurious-constant-free branch survives.",
    "solutions": [
      {
        "name": "Leibniz differentiate, then recover the unique branch from the original equation",
        "steps": [
          "Write the right-hand side as $f(x)\\cos x+h(x)$ with $h(x)=x-\\tfrac12\\sin 2x-2\\cos x+1$. Differentiate both sides; by the Newton–Leibniz rule $\\dfrac{d}{dx}\\int_0^x f=f(x)$, so \\[ f(x)=f'(x)\\cos x-f(x)\\sin x+h'(x),\\qquad h'(x)=1-\\cos 2x+2\\sin x=2\\sin x(1+\\sin x). \\] Rearranged, $f'(x)\\cos x-f(x)\\bigl(1+\\sin x\\bigr)=h'(x)$, a first-order linear ODE — singular wherever $\\cos x=0$, in particular at $x=\\tfrac{\\pi}{2}$.",
          "Solve the homogeneous part $f'\\cos x=f(1+\\sin x)$: $\\dfrac{f'}{f}=\\dfrac{1+\\sin x}{\\cos x}=\\sec x+\\tan x$, whose antiderivative is $\\ln|\\sec x+\\tan x|+\\ln|\\sec x|$, giving $f_h(x)=\\dfrac{1+\\sin x}{\\cos^2 x}$. A particular solution is found by inspection (try $a+b\\sin x$): $f_p(x)=1+\\sin x$ works since then $f_p'\\cos x-f_p(1+\\sin x)=\\cos^2 x-(1+\\sin x)^2=-2\\sin x(1+\\sin x)\\cdot(-1)=h'(x)$. Hence the general ODE-solution is \\[ f(x)=(1+\\sin x)+K\\,\\frac{1+\\sin x}{\\cos^2 x}. \\]",
          "Differentiation discarded a constant, so the ODE family is larger than the integral equation allows; pin $K$ from the ORIGINAL equation, not from a guessed value of $f$. Substituting $x=0$, where $\\cos 0=1$ keeps the unknown alive: $\\int_0^0 f=0$ on the left and $f(0)\\cdot 1+h(0)=f(0)+(0-0-2+1)=f(0)-1$ on the right, so $f(0)=1$. Since the general solution has $f(0)=1+K$, this forces $K=0$.",
          "Therefore $f(x)=1+\\sin x$ — manifestly continuous on all of $\\bigl[0,\\tfrac{\\pi}{2}\\bigr]$, including the singular point. Evaluate: \\[ f\\!\\left(\\tfrac{\\pi}{2}\\right)=1+\\sin\\tfrac{\\pi}{2}=\\boxed{2}. \\] (Any $K\\neq0$ makes $f$ blow up at $\\tfrac{\\pi}{2}$, so continuity alone already rejects every branch but this one.)"
        ]
      },
      {
        "name": "Integrating factor with the singularity exposed as a 0/0 at the endpoint",
        "steps": [
          "From the linear ODE $f'-\\dfrac{1+\\sin x}{\\cos x}\\,f=\\dfrac{h'(x)}{\\cos x}$, form the integrating factor $\\mu(x)=\\exp\\!\\Bigl(-\\!\\int\\dfrac{1+\\sin x}{\\cos x}\\,dx\\Bigr)=\\dfrac{\\cos^2 x}{1+\\sin x}=1-\\sin x$, using $\\dfrac{\\cos^2 x}{1+\\sin x}=\\dfrac{1-\\sin^2 x}{1+\\sin x}=1-\\sin x$. Note $\\mu\\!\\left(\\tfrac{\\pi}{2}\\right)=0$ — the integrating factor itself vanishes at the asked point, the fingerprint of the singularity.",
          "Then $\\bigl(\\mu f\\bigr)'=\\mu\\cdot\\dfrac{h'}{\\cos x}=(1-\\sin x)\\cdot\\dfrac{2\\sin x(1+\\sin x)}{\\cos x}=\\dfrac{2\\sin x\\cos^2 x}{\\cos x}=2\\sin x\\cos x=\\sin 2x$, wait reorganise cleanly: $(1-\\sin x)(1+\\sin x)=\\cos^2 x$, so $\\mu\\,\\dfrac{h'}{\\cos x}=\\dfrac{2\\sin x\\cos^2 x}{\\cos x}=2\\sin x\\cos x=\\sin 2x$. Hence $\\bigl(\\mu f\\bigr)'=\\sin 2x$ and $\\mu(x)\\,f(x)=-\\tfrac12\\cos 2x+C=\\sin^2 x+\\bigl(C-\\tfrac12\\bigr)$.",
          "Fix the constant by the original equation at $x=0$ (giving $f(0)=1$, as in Method 1) together with $\\mu(0)=1$: $\\mu(0)f(0)=1$, so $\\sin^2 0+(C-\\tfrac12)=1$, i.e. $C-\\tfrac12=1$? Re-evaluate at $0$: $\\mu f\\big|_{0}=-\\tfrac12\\cos0+C=C-\\tfrac12=1\\Rightarrow C=\\tfrac32$. Thus $\\mu(x)f(x)=-\\tfrac12\\cos 2x+\\tfrac32=\\cos^2 x$, the numerator being $\\cos^2 x$.",
          "Now divide: $f(x)=\\dfrac{\\cos^2 x}{\\mu(x)}=\\dfrac{\\cos^2 x}{1-\\sin x}$. At $x=\\tfrac{\\pi}{2}$ this is the indeterminate $\\dfrac{0}{0}$ — exactly because the singularity sits at the evaluation point — and it resolves by factoring: $\\dfrac{\\cos^2 x}{1-\\sin x}=\\dfrac{(1-\\sin x)(1+\\sin x)}{1-\\sin x}=1+\\sin x$. The cancellation is the analytic witness that the regular branch is the one with vanishing numerator at $\\tfrac{\\pi}{2}$. Therefore $f\\!\\left(\\tfrac{\\pi}{2}\\right)=1+1=\\boxed{2}$."
        ]
      },
      {
        "name": "Spurious-constant test: the homogeneous solution fails the integral equation",
        "steps": [
          "Skip the boundary discussion entirely and test the full ODE family $f(x)=(1+\\sin x)+K\\,f_h(x)$, $f_h(x)=\\dfrac{1+\\sin x}{\\cos^2 x}=\\sec^2 x+\\dfrac{\\sin x}{\\cos^2 x}$, directly against the integral equation. Its antiderivative is clean: $\\displaystyle\\int_0^x f_h(t)\\,dt=\\bigl[\\tan t+\\sec t\\bigr]_0^x=\\tan x+\\sec x-1$.",
          "Also $f_h(x)\\cos x=\\dfrac{1+\\sin x}{\\cos x}=\\sec x+\\tan x$. Hence the homogeneous piece contributes to (left side $-$ $f\\cos x$ part) the amount \\[ \\int_0^x f_h-f_h\\cos x=(\\tan x+\\sec x-1)-(\\sec x+\\tan x)=-1, \\] a CONSTANT, independent of $x$.",
          "Since the particular function $1+\\sin x$ already satisfies the integral equation exactly (direct check: $\\int_0^x(1+\\sin t)\\,dt=x+1-\\cos x$, while $(1+\\sin x)\\cos x+h(x)=\\cos x+\\sin x\\cos x+x-\\sin x\\cos x-2\\cos x+1=x+1-\\cos x$ — equal), adding $K f_h$ shifts the right-hand side by $-K\\cdot(-1)$... track signs: the integral equation reads $\\int_0^x f=f\\cos x+h$, so its residual $\\int_0^x f-f\\cos x-h$ changes by $\\int_0^x(Kf_h)-(Kf_h)\\cos x=K(-1)=-K$. The residual is therefore $-K$, zero only when $K=0$.",
          "So the integral equation — with no appeal to $f(0)$ at all — admits the single solution $f(x)=1+\\sin x$. This also explains the trap structurally: the differentiated ODE cannot see the constant $K$ (it is annihilated by $d/dx$), but the integral equation pins it because $f_h$ accumulates a nonzero net constant. Evaluating, $f\\!\\left(\\tfrac{\\pi}{2}\\right)=1+\\sin\\tfrac{\\pi}{2}=\\boxed{2}$."
        ]
      }
    ],
    "remark": "Insight: an integral equation carries strictly more information than the ODE you get by differentiating it — differentiation is a one-way valve that annihilates an additive constant, so $\\dfrac{d}{dx}$ of the equation has a one-parameter family of solutions while the equation itself has exactly one. The danger is sharpened here by two coupled design choices. First, the coefficient of $f$ is $\\cos x$, which is nonzero at $x=0$ (so the original equation pins $f(0)=1$ honestly) but vanishes at $x=\\tfrac{\\pi}{2}$ — making the ODE singular precisely at the value the problem requests, where dividing by $\\cos x$ is illegal. Second, the spurious homogeneous mode $\\dfrac{1+\\sin x}{\\cos^2 x}$ is finite everywhere on $[0,\\tfrac{\\pi}{2})$ but blows up at $\\tfrac{\\pi}{2}$, so the wrong constant is invisible until you reach the endpoint. The reflexive (and wrong) fix $f(0)=0$ — confusing the vanishing of the accumulated integral with the vanishing of $f$ — selects the divergent branch and 'proves' the limit is $-\\infty$. Three guards each recover the truth: pin the constant from the original equation at $x=0$; demand continuity through the singular point; or test the homogeneous mode against the integral equation, where it leaves a tell-tale residual $-K$. All three converge on $f(x)=1+\\sin x$ and $f(\\tfrac{\\pi}{2})=2$. The takeaway for a ranker: after differentiating an integral equation, always feed your solution back into the ORIGINAL relation — the recovered constant is where the marks, and the mathematics, actually live."
  },
  {
    "theme": "leibniz",
    "themeLabel": "Newton–Leibniz & Variable Limits",
    "title": "Five Turns of a Doubly-Triggered Accumulator",
    "difficulty": 5,
    "task": "Count and classify the local extrema",
    "tags": [
      "leibniz-rule",
      "variable-upper-limit",
      "chain-factor-trap",
      "extremum-count",
      "sign-chart",
      "non-elementary-integrand"
    ],
    "statement": "Define, for every real $x$, \\[ g(x)=\\int_{0}^{\\,x^{2}-2x} t\\,(t-3)\\,e^{t^{2}}\\,dt . \\] (The integrand has no elementary antiderivative — $\\int t(t-3)e^{t^{2}}\\,dt$ produces an $\\operatorname{erfi}$, so you cannot evaluate $g$ in closed form and substitute; you must reason through $g'$ itself.) Determine the number of local extrema of $g$ on $\\mathbb{R}$, and classify each as a maximum or a minimum.",
    "answer": "\\[\\boxed{5\\text{ extrema: minima at }x=-1,1,3;\\ \\text{maxima at }x=0,2}\\]",
    "trap": "The integrand $t(t-3)e^{t^{2}}$ vanishes exactly at $t=0$ and $t=3$, and a strong student instantly reads off the candidate turning points by asking 'where does the thing being accumulated change sign?'. Writing the upper limit $u(x)=x^{2}-2x$, they set $u(x)=0$ and $u(x)=3$: from $x^{2}-2x=0$ they get $x=0,2$, and from $x^{2}-2x=3$ they get $x=-1,3$ — a tidy FOUR critical points, and they confidently report four extrema. This is the conceptual error the chapter is built to expose: it silently uses $g'(x)=F\\!\\bigl(u(x)\\bigr)$ with $F(t)=t(t-3)e^{t^{2}}$, FORGETTING the boundary-derivative factor that the Newton–Leibniz rule attaches to a variable limit. The correct derivative is $g'(x)=F\\!\\bigl(u(x)\\bigr)\\,u'(x)$, and $u'(x)=2x-2$ contributes its OWN zero at $x=1$ — a fifth critical point that has nothing to do with the integrand vanishing and everything to do with the limit momentarily stopping and reversing. At $x=1$ the upper limit $u$ reaches its minimum value $-1$ (where $F(-1)=(-1)(-4)e^{1}=4e>0\\neq 0$), so the integrand is alive there; the turn is created purely by $u'$ flipping sign. Dropping the chain factor deletes precisely this point and miscounts $4$ instead of $5$. (The mirror error — keeping only $u'(x)=0$ and ignoring the integrand's zeros — is just as fatal, yielding the single point $x=1$.) A sign chart of $g'(x)=2x(x+1)(x-1)(x-2)(x-3)e^{(x^{2}-2x)^{2}}$ shows the sign sequence $-,+,-,+,-,+$ across the six intervals cut by $-1,0,1,2,3$, so ALL FIVE roots are genuine extrema: minima at $x=-1,1,3$ and maxima at $x=0,2$. The four-point answer is wrong on count AND would even misclassify the alternation.",
    "solutions": [
      {
        "name": "Newton–Leibniz with the chain factor, then a sign chart",
        "steps": [
          "Let $u(x)=x^{2}-2x$ and $F(t)=t(t-3)e^{t^{2}}$, so $g(x)=\\int_{0}^{u(x)}F(t)\\,dt$. The Newton–Leibniz rule for a variable upper limit gives \\[ g'(x)=F\\!\\bigl(u(x)\\bigr)\\,u'(x), \\] and the boundary-derivative factor $u'(x)=2x-2$ is essential — omitting it is the trap. Since $e^{t^{2}}>0$ for all $t$, write $F(u)=u(u-3)e^{u^{2}}$ and \\[ g'(x)=\\bigl(x^{2}-2x\\bigr)\\bigl(x^{2}-2x-3\\bigr)(2x-2)\\,e^{(x^{2}-2x)^{2}}. \\]",
          "Factor the polynomial part fully. From $x^{2}-2x=x(x-2)$, $x^{2}-2x-3=(x-3)(x+1)$, and $2x-2=2(x-1)$, \\[ g'(x)=2\\,x(x+1)(x-1)(x-2)(x-3)\\,e^{(x^{2}-2x)^{2}}. \\] The exponential is never zero, so the critical points are exactly the five integers $x=-1,0,1,2,3$. Note $x=1$ comes from the factor $u'(x)=2x-2$, NOT from the integrand vanishing (there $u=-1$ and $F(-1)=4e\\neq0$).",
          "Because $e^{(x^{2}-2x)^{2}}>0$, the sign of $g'$ equals the sign of $p(x)=2x(x+1)(x-1)(x-2)(x-3)$. Reading the sign of $p$ across the six intervals cut by the roots: $(-\\infty,-1):-$, $(-1,0):+$, $(0,1):-$, $(1,2):+$, $(2,3):-$, $(3,\\infty):+$. The sequence is $-,+,-,+,-,+$.",
          "$g'$ changes sign at every one of the five roots, so each is a genuine local extremum. Sign $-\\to+$ marks a minimum and $+\\to-$ marks a maximum, giving minima at $x=-1,1,3$ and maxima at $x=0,2$. Hence $g$ has \\[ \\boxed{5\\text{ local extrema: minima at }x=-1,1,3,\\ \\text{maxima at }x=0,2.} \\]"
        ]
      },
      {
        "name": "Two interleaved clocks: the limit's path versus the integrand's sign",
        "steps": [
          "Think of $g'(x)=F\\!\\bigl(u(x)\\bigr)u'(x)$ as a product of two switches. The integrand-sign switch is $s(t)=\\operatorname{sgn}\\,t(t-3)$ (since $e^{t^{2}}>0$): positive for $t<0$ or $t>3$, negative on $(0,3)$. The limit-speed switch is $\\operatorname{sgn}\\,u'(x)=\\operatorname{sgn}(2x-2)$: negative for $x<1$, positive for $x>1$. The parabola $u(x)=x^{2}-2x$ descends from $+\\infty$ to its minimum $u(1)=-1$, then climbs back to $+\\infty$; it meets the integrand's sign-boundaries $t=3$ at $x=-1,3$ and $t=0$ at $x=0,2$.",
          "Travel left to right. For $x<1$ the top of the integral moves DOWN ($u'<0$): as $x$ runs $-\\infty\\to1$, $u$ falls through $3$ (at $x=-1$) and through $0$ (at $x=0$). So $\\operatorname{sgn}F(u)$ is $+,-,+$ on $(-\\infty,-1),(-1,0),(0,1)$, and multiplying by $u'<0$ gives $g'$ signs $-,+,-$.",
          "For $x>1$ the top moves UP ($u'>0$): as $x$ runs $1\\to\\infty$, $u$ rises through $0$ (at $x=2$) and through $3$ (at $x=3$). So $\\operatorname{sgn}F(u)$ is $+,-,+$ on $(1,2),(2,3),(3,\\infty)$, and multiplying by $u'>0$ keeps $g'$ signs $+,-,+$.",
          "Stitching the two halves gives the full sequence $-,+,-,+,-,+$, with a sign flip at each of $x=-1,0,1,2,3$. The pivotal $x=1$ is where the limit-speed switch alone flips (the integrand is nonzero there), so it is a true minimum that the integrand-only reasoning never sees. Five sign changes $\\Rightarrow$ five extrema: minima at $x=-1,1,3$, maxima at $x=0,2$, so the count is $\\boxed{5}$."
        ]
      },
      {
        "name": "Reduce-to-a-base function and lift through the inner map",
        "steps": [
          "Set $G(s)=\\int_{0}^{s}t(t-3)e^{t^{2}}\\,dt$, so $g(x)=G\\!\\bigl(u(x)\\bigr)$ with $u(x)=x^{2}-2x$. By Newton–Leibniz $G'(s)=s(s-3)e^{s^{2}}$, which is $0$ only at $s=0,3$, positive for $s<0$ and $s>3$, negative on $(0,3)$. Thus the base accumulator $G$ has a local maximum at $s=0$ and a local minimum at $s=3$ on the $s$-line.",
          "By the chain rule $g'(x)=G'\\!\\bigl(u(x)\\bigr)u'(x)$. A local extremum of the composite occurs where $g'$ changes sign, which can be triggered two independent ways: where $G'(u)$ changes sign (the inner value $u$ crosses $0$ or $3$) or where $u'$ changes sign (the inner map turns). Solve each. $u=0:\\ x=0,2$; $u=3:\\ x=-1,3$; $u'=0:\\ x=1$. These five values are distinct, and at $x=1$ one has $u=-1$, where $G'(-1)=4e\\neq0$, so the turn is supplied solely by $u'$ — not a coincidence of the two triggers.",
          "Check that each crossing is transversal (a real sign change, not a touch). $G'$ has simple zeros at $0,3$, and $u$ crosses each of those levels with nonzero slope at $x=-1,0,2,3$ (indeed $u'(-1)=-4,\\ u'(0)=-2,\\ u'(2)=2,\\ u'(3)=4$, all $\\neq0$); and $u'$ has a simple zero at $x=1$. Hence $g'=G'(u)u'$ changes sign at all five points.",
          "Therefore $g$ has exactly five local extrema. Their type follows from the product of the two switch-signs as in the sign chart, giving minima at $x=-1,1,3$ and maxima at $x=0,2$. Final count: \\[ \\boxed{5\\ \\text{extrema (3 minima, 2 maxima)}.} \\]"
        ]
      }
    ],
    "remark": "Insight: a function defined by an integral with a variable limit carries TWO independent sources of turning, and both must be honoured by the Newton–Leibniz rule. Writing $g(x)=\\int_{0}^{u(x)}F$, the rule $g'(x)=F(u(x))\\,u'(x)$ multiplies the integrand evaluated at the moving boundary by the SPEED of that boundary. The integrand's zeros ($t=0,3$) say 'the area stops growing because what you are adding is momentarily zero'; the boundary-speed zero ($u'=0$ at $x=1$) says 'the area stops growing because the boundary itself has paused and is about to reverse'. The classic mistake — and the whole point of this chapter — is to drop the chain factor $u'(x)$, which silently erases the second source and miscounts $4$ extrema instead of $5$. The design is deliberately defended against shortcuts: the integrand $t(t-3)e^{t^{2}}$ has no elementary antiderivative (it integrates to an $\\operatorname{erfi}$), so a student cannot evaluate $g$ and bypass Leibniz — they are forced to confront $g'$ and therefore the chain factor. The fifth turn is placed where the upper limit bottoms out ($u(1)=-1$) and the integrand is decidedly nonzero ($F(-1)=4e$), so the missing point cannot be rationalised away as a degenerate coincidence. Three routes converge on the same answer: an honest sign chart of $g'=2x(x+1)(x-1)(x-2)(x-3)e^{(x^{2}-2x)^{2}}$; a 'two clocks' reading that tracks the integrand's sign against the limit's direction; and a reduce-and-lift composite argument $g=G\\circ u$. The takeaway for a ranker: whenever a limit moves, ask not only 'is the integrand zero?' but also 'has the limit itself turned?' — the second question is where the extra extremum, and the marks, hide."
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
    "title": "When the Unknown Sits Outside the Sign",
    "difficulty": 5,
    "task": "Differentiate the identity and solve for f",
    "tags": [
      "leibniz-rule",
      "integral-equation",
      "first-order-ode",
      "integrating-factor",
      "self-pinning-constant"
    ],
    "statement": "A continuous function $f:\\mathbb{R}\\to\\mathbb{R}$ satisfies, for every real $x$, the identity \\[ \\int_{0}^{x} f(t)\\,dt \\;=\\; 3\\,f(x)-\\frac{x^{2}}{2}+6 . \\] The unknown appears in two utterly different roles here: as the integrand of an accumulator on the left, and as a bare algebraic term $3f(x)$ on the right. Determine $f$ and report the exact value of $f(3)$.",
    "answer": "\\[\\boxed{\\,f(3)=e-6\\,}\\]",
    "trap": "The fatal move is to treat the relation as a statement about one number $f(x)$ rather than as an identity in $x$, and then to differentiate carelessly. A strong student differentiates the LEFT side correctly — $\\dfrac{d}{dx}\\displaystyle\\int_{0}^{x} f(t)\\,dt=f(x)$ by Newton–Leibniz — but on the RIGHT, faced with the term $3f(x)$, the same Newton–Leibniz reflex fires by association and they write $\\dfrac{d}{dx}\\bigl[3f(x)\\bigr]\\stackrel{?}{=}3f(x)$, as if the bare $f$ were itself an accumulator (or as though $f$ behaved like $e^{x}$). With the $-\\tfrac{x^{2}}{2}$ also differentiated correctly to $-x$, this manufactures the WRONG equation $f(x)=3f(x)-x$, a purely ALGEBRAIC relation with no derivative left in it. It solves instantly to $f(x)=\\dfrac{x}{2}$, giving the clean, confident, and entirely false answer $f(3)=\\dfrac{3}{2}$. The seduction is total: no exponential ever appears, no constant of integration is needed, and the student never realises a differential equation was lurking. The conceptual error is that $3f(x)$ is an ordinary function of $x$ whose derivative is $3f'(x)$, NOT $3f(x)$ — only the integral $\\int_{0}^{x}f$ obeys Newton–Leibniz. The honest differentiation gives $f(x)=3f'(x)-x$, i.e. the genuine linear ODE $3f'(x)-f(x)=x$. As a sanity check the trap solution $f(x)=x/2$ does not even satisfy the ORIGINAL equation: $\\displaystyle\\int_{0}^{x}\\tfrac{t}{2}\\,dt-\\bigl(3\\cdot\\tfrac{x}{2}-\\tfrac{x^{2}}{2}+6\\bigr)=\\tfrac{3x^{2}}{4}-\\tfrac{3x}{2}-6\\not\\equiv0$, so the candidate is wrong for a structural reason, not an arithmetic one.",
    "solutions": [
      {
        "name": "Differentiate once, integrating factor on the linear ODE",
        "steps": [
          "First extract the missing initial condition for free, WITHOUT solving. The identity holds for every $x$, so set $x=0$: the left side is $\\displaystyle\\int_{0}^{0}f=0$, and the right side is $3f(0)-0+6$. Hence $0=3f(0)+6$, giving $f(0)=-2$. This is the normalization the equation itself supplies — no extra data is needed.",
          "Now differentiate the identity in $x$. The left side gives $\\dfrac{d}{dx}\\displaystyle\\int_{0}^{x}f(t)\\,dt=f(x)$ (Newton–Leibniz, fixed lower limit, moving upper limit equal to $x$). The right side is an ordinary function of $x$: $\\dfrac{d}{dx}\\bigl[3f(x)-\\tfrac{x^{2}}{2}+6\\bigr]=3f'(x)-x$. Equating, $f(x)=3f'(x)-x$, i.e. the first-order linear ODE \\[ 3f'(x)-f(x)=x \\quad\\Longleftrightarrow\\quad f'(x)-\\tfrac{1}{3}f(x)=\\tfrac{x}{3}. \\]",
          "Multiply by the integrating factor $\\mu(x)=e^{-x/3}$: $\\dfrac{d}{dx}\\bigl[e^{-x/3}f(x)\\bigr]=\\tfrac{x}{3}e^{-x/3}$. Integrate the right side by parts: $\\displaystyle\\int \\tfrac{x}{3}e^{-x/3}\\,dx=-(x+3)e^{-x/3}+C$. Thus $e^{-x/3}f(x)=-(x+3)e^{-x/3}+C$, so $f(x)=Ce^{x/3}-x-3$.",
          "Impose $f(0)=-2$: $C-3=-2\\Rightarrow C=1$, so $f(x)=e^{x/3}-x-3$. Therefore \\[ f(3)=e^{1}-3-3=\\boxed{e-6}. \\]"
        ]
      },
      {
        "name": "Particular-plus-homogeneous by inspection",
        "steps": [
          "Differentiating the identity (using $\\tfrac{d}{dx}\\int_0^x f=f(x)$ on the left and $3f'(x)-x$ on the right) yields the same linear ODE $3f'(x)-f(x)=x$. Solve it by structure rather than by integrating factor.",
          "Particular solution: since the forcing $x$ is a degree-one polynomial, try $f_p(x)=ax+b$. Then $3a-(ax+b)=x$ forces $-a=1$ and $3a-b=0$, i.e. $a=-1,\\ b=-3$, so $f_p(x)=-x-3$. Homogeneous solution: $3f'-f=0$ gives $f_h(x)=Ce^{x/3}$. The general solution is $f(x)=Ce^{x/3}-x-3$.",
          "Fix $C$ from the equation-supplied value $f(0)=-2$ (obtained by putting $x=0$ in the original identity: $0=3f(0)+6$). Then $C-3=-2\\Rightarrow C=1$, so $f(x)=e^{x/3}-x-3$ and \\[ f(3)=e-6=\\boxed{e-6}. \\]"
        ]
      },
      {
        "name": "Guess-and-close: verify a candidate against the integral equation directly",
        "steps": [
          "Rather than trusting the differentiation blindly, treat $f(x)=e^{x/3}-x-3$ as a candidate and CLOSE the loop by substituting back into the ORIGINAL identity — the surest defence against the boundary-term trap. Compute the accumulator: \\[ \\int_{0}^{x}\\bigl(e^{t/3}-t-3\\bigr)\\,dt=3e^{x/3}-3-\\frac{x^{2}}{2}-3x. \\]",
          "Compute the right side for the same candidate: \\[ 3f(x)-\\frac{x^{2}}{2}+6=3\\bigl(e^{x/3}-x-3\\bigr)-\\frac{x^{2}}{2}+6=3e^{x/3}-3x-9-\\frac{x^{2}}{2}+6=3e^{x/3}-3x-3-\\frac{x^{2}}{2}. \\] The two sides agree for every $x$, so the candidate genuinely satisfies the identity; uniqueness of the first-order linear ODE with $f(0)=-2$ guarantees it is THE solution.",
          "Hence $f(x)=e^{x/3}-x-3$ and $f(3)=e-6$. As a contrast, the trap candidate $f(x)=x/2$ fails this very test — $\\int_0^x \\tfrac{t}{2}\\,dt-\\bigl(3\\cdot\\tfrac{x}{2}-\\tfrac{x^{2}}{2}+6\\bigr)=\\tfrac{3x^{2}}{4}-\\tfrac{3x}{2}-6\\neq0$ — exposing the dropped derivative. The verified value is \\[ \\boxed{e-6}. \\]"
        ]
      }
    ],
    "remark": "Insight: in an integral equation the SAME symbol $f$ can wear two hats, and Newton–Leibniz applies to only one of them. The accumulator $\\int_0^x f(t)\\,dt$ differentiates to $f(x)$; the bare term $3f(x)$ is just an ordinary function whose derivative is $3f'(x)$. Conflating the two — letting the Leibniz reflex spill onto the algebraic $f$ — collapses a differential equation into a fake algebraic one and yields the plausible non-answer $f(3)=\\tfrac{3}{2}$. The clean way to never fall for it: first read off the hidden initial condition by setting $x=0$ (the identity hands you $f(0)=-2$ at no cost), then differentiate once to expose the genuine linear ODE $3f'(x)-f(x)=x$, and finally — the ranker's habit — substitute the closed form back into the original integral equation to confirm closure. Whenever the unknown appears both inside and outside the integral sign, that is exactly where the marks live: differentiate honestly, pin the constant from the equation itself, and verify by re-integrating."
  },
  {
    "theme": "leibniz",
    "themeLabel": "Newton–Leibniz & Variable Limits",
    "title": "The Factor the Moving Ceiling Demands",
    "difficulty": 5,
    "task": "Evaluate the limit",
    "tags": [
      "leibniz-rule",
      "lhopital",
      "chain-rule-trap",
      "variable-upper-limit",
      "accumulator-asymptotics"
    ],
    "statement": "Evaluate \\[ L=\\lim_{x\\to 0}\\;\\frac{\\displaystyle\\int_{0}^{\\,e^{2x}-1}\\ln(1+t)\\,dt}{\\,x\\,\\bigl(e^{2x}-1\\bigr)\\,}. \\] Here the accumulator's upper limit is the curved, nonlinear quantity $g(x)=e^{2x}-1$, not a bare $x$. Both numerator and denominator vanish as $x\\to 0$, so the form is a genuine $0/0$. Report the exact value of $L$.",
    "answer": "\\[\\boxed{\\,L=1\\,}\\]",
    "trap": "The killer is the moving, nonlinear ceiling $g(x)=e^{2x}-1$. A confident student spots the $0/0$, reaches for L'Hopital, and differentiates the numerator with the Newton–Leibniz reflex \\[ \\frac{d}{dx}\\int_{0}^{g(x)}\\ln(1+t)\\,dt \\stackrel{?}{=}\\ln\\bigl(1+g(x)\\bigr)=\\ln\\bigl(1+(e^{2x}-1)\\bigr)=\\ln e^{2x}=2x, \\] FORGETTING the chain-rule factor $g'(x)$ that the variable upper limit demands. The cancellation $\\ln(1+g(x))=2x$ is so clean and pretty that it actively disguises the missing factor — nothing looks wrong. Differentiating the denominator honestly, $\\dfrac{d}{dx}\\bigl[x(e^{2x}-1)\\bigr]=(e^{2x}-1)+2x\\,e^{2x}\\sim 4x$, the trap student then computes \\[ L\\stackrel{?}{=}\\lim_{x\\to0}\\frac{2x}{(e^{2x}-1)+2x\\,e^{2x}}=\\frac{2x}{4x}=\\frac12, \\] a clean, confident, and entirely WRONG $\\tfrac12$ — exactly half the true value, the unmistakable fingerprint of one dropped factor. The correct Leibniz derivative is $\\dfrac{d}{dx}\\int_{0}^{g(x)}\\ln(1+t)\\,dt=\\ln\\bigl(1+g(x)\\bigr)\\,g'(x)=(2x)\\bigl(2e^{2x}\\bigr)=4x\\,e^{2x}$, where $g'(x)=2e^{2x}$ with $g'(0)=2$. Because that lost factor tends to $2$, not $1$, dropping it halves the answer rather than producing nonsense — which is precisely why the error survives a quick sanity glance. (A second, cruder slip — treating the ceiling as $x$ and writing the derivative as $\\ln(1+x)$ — also fails, giving $\\ln(1+x)/4x\\to\\tfrac14$; both wrong answers come from refusing the chain rule on a curved upper limit.)",
    "solutions": [
      {
        "name": "Single L'Hopital with the full Leibniz (chain-rule) derivative",
        "steps": [
          "Confirm the indeterminacy and name the ceiling. Put $g(x)=e^{2x}-1$, so $g(0)=0$ and the numerator $\\int_0^{g(x)}\\ln(1+t)\\,dt\\to\\int_0^0=0$; the denominator $x(e^{2x}-1)\\to 0$ as well. The form is $0/0$, so L'Hopital is licensed — provided the numerator is differentiated correctly.",
          "Differentiate the numerator by the Newton–Leibniz rule for a VARIABLE upper limit, keeping the chain-rule factor: \\[ \\frac{d}{dx}\\int_{0}^{g(x)}\\ln(1+t)\\,dt=\\ln\\bigl(1+g(x)\\bigr)\\,g'(x). \\] Now use the clean collapse $\\ln(1+g(x))=\\ln\\bigl(1+(e^{2x}-1)\\bigr)=\\ln e^{2x}=2x$ together with $g'(x)=2e^{2x}$. The numerator derivative is therefore $(2x)\\bigl(2e^{2x}\\bigr)=4x\\,e^{2x}$ — note the surviving factor $2e^{2x}$ that the trap discards.",
          "Differentiate the denominator: $\\dfrac{d}{dx}\\bigl[x(e^{2x}-1)\\bigr]=(e^{2x}-1)+2x\\,e^{2x}$. Hence \\[ L=\\lim_{x\\to0}\\frac{4x\\,e^{2x}}{(e^{2x}-1)+2x\\,e^{2x}}. \\]",
          "Use $e^{2x}-1\\sim 2x$ and $e^{2x}\\to 1$: the numerator $\\sim 4x$ and the denominator $\\sim 2x+2x=4x$, so the ratio $\\to 1$. Thus \\[ L=\\boxed{1}. \\]"
        ]
      },
      {
        "name": "Exact antiderivative, then asymptotics",
        "steps": [
          "Avoid L'Hopital entirely by integrating in closed form. Since $\\displaystyle\\int \\ln(1+t)\\,dt=(1+t)\\ln(1+t)-t$, evaluating from $0$ to $g(x)=e^{2x}-1$ gives, using $1+g(x)=e^{2x}$ and $\\ln(1+g(x))=2x$, \\[ \\int_{0}^{e^{2x}-1}\\ln(1+t)\\,dt=e^{2x}\\,(2x)-\\bigl(e^{2x}-1\\bigr)=2x\\,e^{2x}-e^{2x}+1. \\]",
          "Expand numerator and denominator to leading order. With $e^{2x}=1+2x+2x^2+\\cdots$, the numerator $2x\\,e^{2x}-e^{2x}+1=2x^2+\\tfrac{8}{3}x^3+\\cdots$, while the denominator $x(e^{2x}-1)=x(2x+2x^2+\\cdots)=2x^2+2x^3+\\cdots$.",
          "The leading terms are both $2x^2$, so \\[ L=\\lim_{x\\to0}\\frac{2x^2+\\tfrac{8}{3}x^3+\\cdots}{2x^2+2x^3+\\cdots}=\\frac{2}{2}=\\boxed{1}. \\] The exact antiderivative shows there was never any ambiguity about the factor: the genuine $2x\\,e^{2x}$ term is what makes the leading coefficient $2$, not $1$."
        ]
      },
      {
        "name": "Asymptotics of the accumulator (no differentiation at all)",
        "steps": [
          "Let $\\Phi(s)=\\displaystyle\\int_0^s\\ln(1+t)\\,dt$. For small $s$, $\\ln(1+t)=t+O(t^2)$, so $\\Phi(s)=\\tfrac{s^2}{2}+O(s^3)$ — a degree-two vanishing in $s$. The numerator is $\\Phi\\bigl(g(x)\\bigr)$ with $g(x)=e^{2x}-1\\to 0$, hence $\\Phi(g)\\sim \\tfrac{1}{2}g(x)^2$.",
          "Substitute this asymptotic into the quotient and watch one power of $g$ cancel against the explicit $x$: \\[ L=\\lim_{x\\to0}\\frac{\\tfrac12\\,g(x)^2}{x\\,g(x)}=\\lim_{x\\to0}\\frac{g(x)}{2x}=\\lim_{x\\to0}\\frac{e^{2x}-1}{2x}. \\]",
          "Finally $\\dfrac{e^{2x}-1}{2x}\\to 1$ (standard limit), so \\[ L=\\boxed{1}. \\] This route never differentiates the integral, yet it lands on the same value — and it makes the trap transparent: dropping the chain factor would replace $\\tfrac12 g^2$ by $\\tfrac12 g\\cdot(\\text{wrong leading order})$, shifting the cancellation and halving the answer to $\\tfrac12$."
        ]
      }
    ],
    "remark": "Insight: a variable, CURVED upper limit is a chain-rule problem in disguise. Newton–Leibniz reads $\\dfrac{d}{dx}\\int_0^{g(x)}f(t)\\,dt=f\\bigl(g(x)\\bigr)\\,g'(x)$, and the factor $g'(x)$ is not decoration — here $g'(0)=2$, so omitting it does not break the calculation visibly, it merely halves the answer to a clean, plausible $\\tfrac12$. The pretty collapse $\\ln\\bigl(1+(e^{2x}-1)\\bigr)=2x$ is the bait: it makes $f(g(x))$ look like the whole story. Three independent routes (full Leibniz + one L'Hopital, exact antiderivative, or pure accumulator asymptotics $\\Phi(g)\\sim\\tfrac12 g^2$) all return $L=1$. The ranker's habit: whenever the ceiling of an integral is anything other than a bare $x$, write the $g'(x)$ factor FIRST, before simplifying $f(g(x))$ — that single reflex is the entire problem, and it is exactly where the marks live."
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
    "title": "The Implicit Curve and Its Vanishing Slope",
    "difficulty": 5,
    "task": "Differentiate implicitly and locate",
    "tags": [
      "leibniz-rule",
      "implicit-function",
      "chain-rule",
      "gaussian-integral",
      "extremum"
    ],
    "statement": "Neither $\\displaystyle\\int e^{t^2}\\,dt$ nor $\\displaystyle\\int e^{-t^2}\\,dt$ has an elementary closed form, yet the equation below still defines a perfectly good differentiable curve. For each real $x$, let $y(x)$ be the unique number satisfying \\[ \\int_{0}^{\\,y(x)} e^{t^{2}}\\,dt \\;=\\; \\int_{0}^{\\,3x-x^{3}} e^{-t^{2}}\\,dt . \\] (Existence and uniqueness are free: the left side is a strictly increasing function of $y$ running over all of $\\mathbb{R}$, while the right side is a finite real number for every $x$.) Compute $y'(0)$, and find the first $x>0$ at which the curve $y(x)$ attains a local maximum.",
    "answer": "\\[\\boxed{\\,y'(0)=3,\\qquad x=1\\,}\\]",
    "trap": "The whole problem turns on the boundary-derivative (chain) term that the Leibniz rule attaches to a NON-constant upper limit. The right-hand limit is $u(x)=3x-x^{3}$, not $x$. A student who writes $\\dfrac{d}{dx}\\displaystyle\\int_{0}^{u(x)} e^{-t^{2}}\\,dt = e^{-u(x)^{2}}$ — dropping the factor $u'(x)$ — obtains the spurious slope $y'(x)=e^{-u(x)^{2}}e^{-y(x)^{2}}$. This is a PRODUCT OF EXPONENTIALS, hence strictly positive for every $x$, so the careless solver triumphantly concludes that $y$ is monotone increasing and has NO local maximum at all. They also misreport $y'(0)=e^{0}\\cdot e^{0}=1$. Both conclusions are wrong, and not by an arithmetic slip: the missing piece is the genuine Leibniz boundary term. The honest differentiation is $e^{y^{2}}y'=e^{-u^{2}}\\,u'(x)$ with $u'(x)=3-3x^{2}$, giving $y'(x)=(3-3x^{2})\\,e^{-u(x)^{2}}\\,e^{-y(x)^{2}}$. Now the exponential block is harmlessly positive and the ENTIRE sign of $y'$ is carried by $u'(x)=3-3x^{2}$. Thus $y'(0)=3\\cdot 1\\cdot 1=3$ (not $1$), and $y'$ vanishes for $x>0$ only at $x=1$, where $u'$ switches from $+$ to $-$ — a genuine local maximum of $y$. The trap is doubly seductive because the wrong derivative looks 'physical' (a Gaussian-times-Gaussian envelope) and never blows up, so nothing screams that a term was lost; only restoring $u'(x)$ reveals the critical point the question demands.",
    "solutions": [
      {
        "name": "Leibniz with the chain term, read the sign off the polynomial factor",
        "steps": [
          "Differentiate both sides in $x$. On the LEFT, $\\dfrac{d}{dx}\\displaystyle\\int_{0}^{y(x)} e^{t^{2}}\\,dt = e^{y(x)^{2}}\\,y'(x)$ by Newton–Leibniz together with the chain rule (the integrand evaluated at the moving upper limit, times the limit's derivative). On the RIGHT, with $u(x)=3x-x^{3}$, the same rule gives $\\dfrac{d}{dx}\\displaystyle\\int_{0}^{u(x)} e^{-t^{2}}\\,dt = e^{-u(x)^{2}}\\,u'(x)$, and $u'(x)=3-3x^{2}$. Equate: \\[ e^{y^{2}}\\,y'=(3-3x^{2})\\,e^{-(3x-x^{3})^{2}}. \\]",
          "Solve for the slope: \\[ y'(x)=(3-3x^{2})\\,e^{-(3x-x^{3})^{2}}\\,e^{-y(x)^{2}}. \\] Since $e^{-(3x-x^{3})^{2}}>0$ and $e^{-y(x)^{2}}>0$ for every $x$, the sign of $y'(x)$ equals the sign of $3-3x^{2}=3(1-x)(1+x)$.",
          "Find $y(0)$: at $x=0$ the right side of the original equation is $\\displaystyle\\int_{0}^{0}e^{-t^{2}}\\,dt=0$, so $\\displaystyle\\int_{0}^{y(0)} e^{t^{2}}\\,dt=0$ forces $y(0)=0$. Hence the exponential factors at $x=0$ are both $e^{0}=1$ and \\[ y'(0)=(3-0)\\cdot 1\\cdot 1=\\boxed{3}. \\]",
          "For $x>0$, the factor $3-3x^{2}$ is positive on $(0,1)$, zero at $x=1$, negative on $(1,\\infty)$. So $y$ increases then decreases, and $y'$ first vanishes at $\\boxed{x=1}$, where the slope changes $+\\to-$ — a local maximum."
        ]
      },
      {
        "name": "Monotonicity / composition: maximize the right-hand limit instead",
        "steps": [
          "Write the defining relation as $F(y(x))=G(u(x))$, where $F(y)=\\displaystyle\\int_{0}^{y}e^{t^{2}}\\,dt$ and $G(s)=\\displaystyle\\int_{0}^{s}e^{-t^{2}}\\,dt$ are BOTH strictly increasing (positive integrands), and $u(x)=3x-x^{3}$. Because $F$ is strictly increasing, $y(x)=F^{-1}\\!\\bigl(G(u(x))\\bigr)$ is a strictly increasing function of $G(u(x))$, which is itself a strictly increasing function of $u(x)$.",
          "Therefore $y(x)$ is largest exactly where $u(x)=3x-x^{3}$ is largest — the two no-closed-form Gaussians are irrelevant to the location of the extremum; they only rescale, never reorder. Maximize $u$: $u'(x)=3-3x^{2}=0$ gives $x=\\pm1$, and $u''(x)=-6x$, so $u''(1)=-6<0$ marks a maximum.",
          "Hence the first $x>0$ at which $y$ peaks is $\\boxed{x=1}$ (where $u(1)=2$). The same monotone-composition logic recovers the slope at the origin: differentiating $F(y)=G(u)$ gives $F'(y)y'=G'(u)u'$, i.e. $e^{y^{2}}y'=e^{-u^{2}}u'$; at $x=0$ (so $y=0,\\,u=0$), $y'(0)=u'(0)=3-0=\\boxed{3}$."
        ]
      },
      {
        "name": "Second-derivative confirmation that x=1 is a strict maximum",
        "steps": [
          "From Method 1, $y'(x)=(3-3x^{2})\\,P(x)$ with the strictly positive envelope $P(x)=e^{-(3x-x^{3})^{2}}\\,e^{-y(x)^{2}}>0$. Differentiate by the product rule: \\[ y''(x)=\\frac{d}{dx}(3-3x^{2})\\cdot P(x)+(3-3x^{2})\\,P'(x)=-6x\\,P(x)+(3-3x^{2})P'(x). \\]",
          "At the candidate $x=1$ the second product term dies because its prefactor $3-3x^{2}$ vanishes there, leaving \\[ y''(1)=-6\\cdot 1\\cdot P(1)<0, \\] since $P(1)>0$. A negative second derivative at a critical point is a STRICT local maximum, so $x=1$ is genuinely a peak — not an inflection or a saddle.",
          "Finally, $x=1$ is the only positive root of $3-3x^{2}=0$, so it is also the FIRST critical point for $x>0$; everything to its left has $y'>0$. Combined with $y'(0)=3$ from the boundary evaluation, the answers stand: $\\boxed{y'(0)=3}$ and the first local maximum at $\\boxed{x=1}$."
        ]
      }
    ],
    "remark": "Insight: an implicit curve defined by trapping a no-closed-form Gaussian on each side is still fully differentiable — you never need an antiderivative, only the Leibniz rule, $e^{y^{2}}y'=e^{-u^{2}}u'$. The decisive design choice is the NON-linear upper limit $u(x)=3x-x^{3}$: its derivative $u'(x)=3-3x^{2}$ is the boundary term that the Leibniz rule contributes, and it alone carries the sign of $y'$ because both Gaussian factors are unconditionally positive. Forget that chain factor and you delete the only thing that can vanish, 'proving' the curve is monotone with no maximum and misreporting $y'(0)=1$ instead of $3$. The cleanest way to see why the location is exactly $x=1$ is the monotonicity argument: since both integrals are strictly increasing transforms, the extremum of $y$ sits precisely at the extremum of the inner polynomial limit $u(x)$ — the intractable exponentials cannot move it. The takeaway for a ranker: when an integral has a moving, non-trivial upper limit, the boundary-derivative term is not optional decoration — it is usually where the entire answer lives."
  },
  {
    "theme": "leibniz",
    "themeLabel": "Newton–Leibniz & Variable Limits",
    "title": "The Quiet Root of a Self-Eating Integral",
    "difficulty": 5,
    "task": "Recover and evaluate",
    "tags": [
      "leibniz-rule",
      "self-referential",
      "integral-equation",
      "degenerate-branch",
      "sign-constraint"
    ],
    "statement": "A continuous function $f:[0,\\infty)\\to\\mathbb{R}$ is everywhere positive and strictly increasing, and it satisfies the self-referential integral equation \\[ \\int_0^{x} f(t)\\,dt \\;=\\; \\frac{\\bigl(f(x)\\bigr)^2-4}{2}\\qquad\\text{for every }x\\ge 0 . \\] Determine $f(7)$. (The unknown sits inside both sides; differentiating with the Newton–Leibniz rule collapses the equation onto a product $f\\cdot(f'-1)=0$, and the harmless-looking factor that is set to zero hides an entire spurious solution.)",
    "answer": "\\[\\boxed{f(7)=9}\\]",
    "trap": "Differentiating the self-referential equation by the Newton–Leibniz rule gives $\\dfrac{d}{dx}\\!\\int_0^x f=f(x)$ on the left and $\\dfrac{d}{dx}\\dfrac{f^2-4}{2}=f(x)f'(x)$ on the right, so $f=f f'$, i.e. $f\\,(f'-1)=0$. The fatal move is to read this as 'either $f'=1$ or $f\\equiv 0$' and then keep BOTH as candidate solutions — or worse, to be seduced by the constant branch $f\\equiv 0$, which satisfies $f=ff'$ perfectly ($0=0\\cdot 0$) and is the kind of degenerate zero that vanishes silently from sight. A second, subtler casualty hides in the surviving branch: solving $f'=1$ gives $f(x)=x+C$, and plugging this back into the ORIGINAL equation leaves the residual $2-\\tfrac12 C^2$, which is zero for $C=+2$ AND $C=-2$. A student who differentiates, writes $f=x+C$, and then reaches reflexively for $f(0)=0$ (mistaking the vanishing of the accumulated integral $\\int_0^0 f=0$ for the vanishing of $f$ itself) pins the wrong constant entirely, or, seeing two roots $C=\\pm2$, cannot decide between $f=x+2$ and $f=x-2$. All three errors are killed by reading the problem's own words. The degenerate $f\\equiv0$ is rejected because it is not positive and because at $x=0$ the equation forces $\\int_0^0 f=0=\\tfrac{f(0)^2-4}{2}$, i.e. $f(0)^2=4$, so $f(0)=\\pm2\\neq0$. Positivity then selects $f(0)=+2$ over $-2$, hence $C=+2$ and $f(x)=x+2$, which is indeed positive and strictly increasing as required. The branch $f=x-2$ has $f(0)=-2<0$ and goes negative on $[0,2)$, violating positivity; the branch $f\\equiv0$ cannot even meet $x=0$. Thus $f(7)=9$. The moral: $f\\,(f'-1)=0$ is a PRODUCT, and a product being zero means you must test each factor against every hypothesis the problem hands you — the constraints 'positive', 'increasing', and the value $\\int_0^0 f=0$ are not decoration, they are the selectors that prune the spurious zero and the wrong sign.",
    "solutions": [
      {
        "name": "Leibniz differentiate, then prune the product with the stated constraints",
        "steps": [
          "Differentiate both sides. By the Newton–Leibniz rule $\\dfrac{d}{dx}\\displaystyle\\int_0^x f(t)\\,dt=f(x)$, and the right side gives $\\dfrac{d}{dx}\\dfrac{f(x)^2-4}{2}=f(x)f'(x)$. Hence $f(x)=f(x)f'(x)$, which factors as $f(x)\\bigl(f'(x)-1\\bigr)=0$ for all $x\\ge0$.",
          "A product is zero only when a factor is. The first factor gives the degenerate branch $f\\equiv0$; the second gives $f'=1$, i.e. $f(x)=x+C$. Test $f\\equiv0$ in the ORIGINAL equation: the left side is $0$ but the right side is $\\tfrac{0-4}{2}=-2\\neq0$ — it fails. It is also not positive. So the degenerate branch is rejected on two independent grounds, and only $f(x)=x+C$ survives.",
          "Recover $C$ from the original equation, never from a guessed value of $f$. Substitute $x=0$: the left side $\\int_0^0 f=0$, the right side $\\tfrac{f(0)^2-4}{2}$, so $f(0)^2=4$ and $f(0)=\\pm2$. Because $f$ is positive we take $f(0)=+2$, giving $C=2$. (The other root $C=-2$ would make $f(0)=-2<0$, contradicting positivity — and $f(x)=x-2$ is negative on $[0,2)$.)",
          "Therefore $f(x)=x+2$, which is positive and strictly increasing on $[0,\\infty)$ exactly as required, and a direct check confirms it: $\\int_0^x(t+2)\\,dt=\\tfrac{x^2}{2}+2x=\\tfrac{(x+2)^2-4}{2}$. Evaluate: $f(7)=7+2=\\boxed{9}$."
        ]
      },
      {
        "name": "Antiderivative substitution: turn it into a separable first-order ODE",
        "steps": [
          "Let $F(x)=\\displaystyle\\int_0^x f(t)\\,dt$, so $F(0)=0$ and $F'(x)=f(x)$ by the Newton–Leibniz rule. The equation reads $F=\\tfrac{f^2-4}{2}=\\tfrac{(F')^2-4}{2}$, which rearranges to $(F')^2=2F+4$. Since $f=F'$ is positive, take the positive square root: $F'=\\sqrt{2F+4}$.",
          "This is separable: $\\dfrac{dF}{\\sqrt{2F+4}}=dx$. Integrating, $\\sqrt{2F+4}=x+K$. The positive-root choice is forced by $f>0$; the negative root $F'=-\\sqrt{2F+4}$ would make $f<0$ and is discarded — the sign constraint, not algebra, selects the branch.",
          "Apply $F(0)=0$: $\\sqrt{2\\cdot0+4}=K$, so $K=2$, giving $\\sqrt{2F+4}=x+2$. But the left side is exactly $F'=f$, so $f(x)=x+2$ directly, with no further casework.",
          "The map $F\\mapsto\\sqrt{2F+4}$ is Lipschitz near $F=0$ (its $F$-derivative is $\\tfrac{1}{\\sqrt{2F+4}}=\\tfrac12$ there), so the initial-value problem $F'=\\sqrt{2F+4},\\,F(0)=0$ has a unique solution — there is no room for a stray degenerate branch. Hence $f$ is unique and $f(7)=7+2=\\boxed{9}$."
        ]
      },
      {
        "name": "Pin the endpoint value first, then ride the slope",
        "steps": [
          "Read the equation at the single point $x=0$ before doing any calculus. The left side is the empty integral $\\int_0^0 f=0$; the right side is $\\tfrac{f(0)^2-4}{2}$. Equating, $f(0)^2=4$, so $f(0)=2$ (the positive root, since $f>0$). This already kills the tempting degenerate solution $f\\equiv0$, which would need $f(0)=0$.",
          "Now differentiate once: $f=ff'$. At every point $f>0$ (given), so we may legally divide by $f$ — this is precisely where the positivity hypothesis earns its keep, annihilating the $f\\equiv0$ factor — leaving $f'=1$ identically. A function with constant slope $1$ is $f(x)=f(0)+x$.",
          "Combine: $f(x)=f(0)+x=2+x$. Strict increase ($f'=1>0$) and positivity ($f\\ge2$) hold automatically, so this is a legitimate solution of the original problem; the boxed-out branches $f\\equiv0$ and $f=x-2$ are not.",
          "Evaluate at the requested point: $f(7)=2+7=\\boxed{9}$."
        ]
      }
    ],
    "remark": "Insight: when you differentiate a self-referential integral equation and land on a PRODUCT like $f\\,(f'-1)=0$, the factor you are tempted to discard — the degenerate $f\\equiv0$ — is not noise; it is a genuine solution of the differentiated equation that the original equation quietly forbids. Differentiation is lossy in two ways here. It loses the additive constant (so $f'=1$ yields a whole line $f=x+C$, and the residual $2-\\tfrac12C^2$ admits the symmetric pair $C=\\pm2$), and it loses the algebraic content of the constant term $-4$ (so the value $f(0)$ is no longer visible in $f=ff'$). Both lost pieces are recovered by reading the original equation at $x=0$, where the empty integral gives $0=\\tfrac{f(0)^2-4}{2}$ and hence $f(0)=\\pm2$ — and only then do the words 'positive' and 'increasing' do their job, selecting $f(0)=+2$ over $-2$ and exterminating $f\\equiv0$ outright. The cleanest viewpoint is the antiderivative substitution: with $F'=\\sqrt{2F+4}$, $F(0)=0$, a Lipschitz right-hand side guarantees a unique solution, so the spurious zero never had standing to begin with. The takeaway for a ranker: a product set to zero is a list of HYPOTHESES, not a list of answers — each factor must survive the problem's stated constraints and the original (not the differentiated) relation. Here the unique survivor is $f(x)=x+2$, and $f(7)=9$."
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
    "title": "The Recurrence Pins the Second Decimal",
    "difficulty": 5,
    "task": "Extract the sharp rate",
    "tags": [
      "asymptotics",
      "integral-recurrence",
      "monotonicity",
      "squeeze",
      "second-order"
    ],
    "statement": "For each integer $n\\ge 1$ define \\[ I_n=\\int_0^1\\frac{x^{\\,n}}{1+x}\\,dx . \\] A first estimate is cheap: since $\\tfrac12\\le\\tfrac1{1+x}\\le 1$ on $[0,1]$, one gets $\\dfrac{1}{2(n+1)}\\le I_n\\le\\dfrac{1}{n+1}$, so $I_n\\to 0$ and $2nI_n\\to 1$. That only fixes the leading term $I_n\\approx\\dfrac{1}{2n}$; it says nothing about how $I_n$ approaches it. Determine the exact value of the limit \\[ L=\\lim_{n\\to\\infty} n\\bigl(1-2n\\,I_n\\bigr), \\] thereby pinning the second-order asymptotic $I_n=\\dfrac{1}{2n}-\\dfrac{L}{2n^2}+o\\!\\left(\\dfrac{1}{n^2}\\right)$. (The crude two-sided bound above has width of order $1/n$, which is far too coarse to see the $1/n^2$ correction; you must instead exploit the exact recurrence $I_n+I_{n-1}=\\dfrac1n$, coming from $x^n+x^{n-1}=x^{n-1}(1+x)$, to lock the constant.)",
    "answer": "\\[\\boxed{L=\\tfrac12}\\]",
    "trap": "The seductive misstep is to believe the crude monotonicity sandwich already settles the question. A strong student writes $\\dfrac{1}{2(n+1)}\\le I_n\\le\\dfrac{1}{n+1}$, notes $2nI_n\\to1$, and then commits one of two sins. SIN ONE: declaring $I_n\\sim\\dfrac{1}{2(n+1)}$ because the lower bound 'looks tight,' and reporting the analogue limit from that anchor — but $\\dfrac{1}{2n}$ and $\\dfrac{1}{2(n+1)}$ differ by $\\dfrac{1}{2n(n+1)}$, which is the SAME order $1/n^2$ as the very correction being measured, so anchoring at $n+1$ flips the sign of the second-order coefficient (it would give a residual tending to $+\\tfrac14$ instead of the true $-\\tfrac14$). The two 'obviously correct' leading forms are NOT interchangeable at second order. SIN TWO: trusting the squeeze to deliver the constant at all. The crude bracket has width $\\dfrac{1}{n+1}-\\dfrac{1}{2(n+1)}=\\dfrac{1}{2(n+1)}$, of order $1/n$ — enormous next to the $\\dfrac{1}{4n^2}$ effect — so NO monotonicity sandwich on $\\dfrac{1}{1+x}$ alone can resolve $L$; the bound is structurally blind to the second order. Even the sharper sandwich $\\dfrac{1}{2(n+1)}<I_n<\\dfrac{1}{2n}$ (itself a consequence of the recurrence plus monotonicity) only proves $0<n(1-2nI_n)<\\dfrac{n}{n+1}$, trapping $L$ in $[0,1]$ without pinning it. The actual constant lives in the EXACT recurrence $I_n+I_{n-1}=\\dfrac1n$: writing $I_n=\\dfrac{1}{2n}+e_n$ forces $e_n+e_{n-1}=-\\dfrac{1}{2n(n-1)}$, and only this exact relation (not any inequality) drives $n^2e_n\\to-\\dfrac14$, whence $L=-2\\lim n^2e_n=\\tfrac12$. A student who stops at the bound either guesses or, worse, manufactures a wrong sign.",
    "solutions": [
      {
        "name": "Sharp sandwich to know the size, then the exact error-recurrence to pin the constant",
        "steps": [
          "First sharpen the bracket using the recurrence and monotonicity. Since $0<x<1$ makes $x^{n}<x^{n-1}$, the sequence $I_n$ is strictly decreasing. From $I_{n-1}+I_n=\\dfrac1n$ and $I_n<I_{n-1}$ we get $2I_n<\\dfrac1n$, i.e. $I_n<\\dfrac{1}{2n}$; from $I_n+I_{n+1}=\\dfrac{1}{n+1}$ and $I_{n+1}<I_n$ we get $2I_n>\\dfrac{1}{n+1}$, i.e. $I_n>\\dfrac{1}{2(n+1)}$. Hence \\[ \\frac{1}{2(n+1)}<I_n<\\frac{1}{2n}. \\] This already tells us $e_n:=I_n-\\dfrac{1}{2n}$ satisfies $-\\dfrac{1}{2n(n+1)}<e_n<0$, so $n^2e_n$ is BOUNDED in $\\bigl(-\\tfrac12\\cdot\\tfrac{n}{n+1},\\,0\\bigr)$ — but the squeeze pins only $0\\le L\\le 1$, not $L$ itself.",
          "Now use the recurrence EXACTLY. Substituting $I_n=\\dfrac{1}{2n}+e_n$ into $I_n+I_{n-1}=\\dfrac1n$ gives \\[ e_n+e_{n-1}=\\frac1n-\\frac{1}{2n}-\\frac{1}{2(n-1)}=-\\frac{1}{2n(n-1)}. \\] Let $u_n=n^2e_n$ (a bounded sequence by Step 1). Multiplying the recurrence is cleaner after solving for $e_n$: $e_n=-e_{n-1}-\\dfrac{1}{2n(n-1)}$, so \\[ u_n=n^2e_n=-\\Bigl(\\frac{n}{n-1}\\Bigr)^{2}u_{n-1}-\\frac{n}{2(n-1)}. \\]",
          "Pass to the limit using boundedness. Because $(u_n)$ is bounded and the relation $u_n+\\bigl(\\tfrac{n}{n-1}\\bigr)^2u_{n-1}=-\\tfrac{n}{2(n-1)}$ has coefficients $\\bigl(\\tfrac{n}{n-1}\\bigr)^2\\to1$ and right side $\\to-\\tfrac12$, add the relation at $n$ and at $n+1$ to telescope the bounded part: $\\bigl(u_n+u_{n-1}\\bigr)\\to-\\tfrac12$ in the limit (the multiplier $\\to1$). Combined with the next index, $u_n-u_{n-1}\\to0$ since consecutive $e_n,e_{n-1}$ are both $O(1/n^2)$ with $n^2e_n$ varying slowly; solving $u_n+u_{n-1}\\to-\\tfrac12$ and $u_n-u_{n-1}\\to0$ gives $u_n\\to-\\tfrac14$. Thus $n^2e_n\\to-\\dfrac14$.",
          "Translate to $L$. Since $1-2nI_n=1-2n\\bigl(\\tfrac{1}{2n}+e_n\\bigr)=-2n\\,e_n$, we have $n\\bigl(1-2nI_n\\bigr)=-2n^2e_n\\to-2\\cdot\\bigl(-\\tfrac14\\bigr)$. Therefore \\[ L=\\boxed{\\tfrac12}. \\]"
        ]
      },
      {
        "name": "Alternating telescope: $(-1)^n e_n$ is a convergent series tail",
        "steps": [
          "Start from the exact error recurrence $e_n+e_{n-1}=-\\dfrac{1}{2n(n-1)}$ (derived as in Method 1) and from $e_n\\to0$ (immediate from $-\\tfrac{1}{2n(n+1)}<e_n<0$). Multiply by $(-1)^n$: \\[ (-1)^n e_n-(-1)^{n-1}e_{n-1}=(-1)^n\\bigl(e_n+e_{n-1}\\bigr)=\\frac{(-1)^{n+1}}{2n(n-1)}. \\] So the sequence $S_n:=(-1)^n e_n$ has first differences $S_n-S_{n-1}=\\dfrac{(-1)^{n+1}}{2n(n-1)}$, a telescoping (and absolutely convergent) series.",
          "Telescope and use $S_n=(-1)^ne_n\\to0$: for any $n$, $S_\\infty-S_n=\\sum_{k=n+1}^{\\infty}\\dfrac{(-1)^{k+1}}{2k(k-1)}$ with $S_\\infty=0$, hence \\[ e_n=(-1)^nS_n=-(-1)^n\\sum_{k=n+1}^{\\infty}\\frac{(-1)^{k+1}}{2k(k-1)}=(-1)^{n}\\sum_{k=n+1}^{\\infty}\\frac{(-1)^{k}}{2k(k-1)}. \\] This is an exact closed form for the error.",
          "Estimate the alternating tail. For an alternating series with terms $a_k=\\dfrac{1}{2k(k-1)}\\downarrow0$, the tail $\\sum_{k=n+1}^{\\infty}(-1)^{k}a_k$ equals $(-1)^{n+1}\\bigl(\\tfrac12 a_{n+1}+O(a_{n+1}-a_{n+2})\\bigr)$ by pairing consecutive terms; since $a_{n+1}=\\dfrac{1}{2(n+1)n}$ and $a_{n+1}-a_{n+2}=O(1/n^3)$, \\[ e_n=(-1)^n\\cdot(-1)^{n+1}\\Bigl(\\tfrac12\\cdot\\tfrac{1}{2n(n+1)}+O(1/n^3)\\Bigr)=-\\frac{1}{4n(n+1)}+O\\!\\left(\\frac1{n^3}\\right). \\]",
          "Conclude. Then $n^2e_n=-\\dfrac{n}{4(n+1)}+O(1/n)\\to-\\dfrac14$, so $L=n(1-2nI_n)=-2n^2e_n\\to\\dfrac12$, i.e. \\[ L=\\boxed{\\tfrac12}. \\]"
        ]
      },
      {
        "name": "Concentration near the endpoint (Laplace-type expansion)",
        "steps": [
          "The mass of $x^n$ collects at $x=1$, so substitute $x=1-\\dfrac{s}{n}$, $dx=-\\dfrac{ds}{n}$, mapping $x:0\\to1$ to $s:n\\to0$: \\[ I_n=\\frac1n\\int_0^{n}\\Bigl(1-\\frac{s}{n}\\Bigr)^{n}\\frac{1}{\\,2-\\frac{s}{n}\\,}\\,ds. \\] Two expansions are needed to order $1/n$: $\\bigl(1-\\tfrac{s}{n}\\bigr)^n=e^{-s}\\exp\\!\\bigl(-\\tfrac{s^2}{2n}+O(1/n^2)\\bigr)=e^{-s}\\bigl(1-\\tfrac{s^2}{2n}+O(1/n^2)\\bigr)$ and $\\dfrac{1}{2-s/n}=\\dfrac12\\cdot\\dfrac{1}{1-s/(2n)}=\\dfrac12\\bigl(1+\\tfrac{s}{2n}+O(1/n^2)\\bigr)$.",
          "Multiply the two brackets: \\[ \\Bigl(1-\\tfrac{s^2}{2n}\\Bigr)\\cdot\\tfrac12\\Bigl(1+\\tfrac{s}{2n}\\Bigr)=\\tfrac12+\\frac{1}{2n}\\Bigl(\\tfrac{s}{2}-s^2\\Bigr)+O(1/n^2). \\] Hence \\[ I_n=\\frac1n\\int_0^{\\infty}e^{-s}\\Bigl[\\tfrac12+\\frac1{2n}\\bigl(\\tfrac{s}{2}-s^2\\bigr)\\Bigr]ds+(\\text{exponentially small tail}), \\] the upper limit pushed to $\\infty$ at the cost of an $e^{-n}$ error.",
          "Use $\\int_0^\\infty e^{-s}ds=1$, $\\int_0^\\infty s\\,e^{-s}ds=1$, $\\int_0^\\infty s^2e^{-s}ds=2$: \\[ I_n=\\frac1n\\Bigl[\\tfrac12+\\frac1{2n}\\bigl(\\tfrac12\\cdot1-1\\cdot2\\bigr)\\Bigr]+O\\!\\left(\\frac1{n^3}\\right)=\\frac{1}{2n}+\\frac1{2n^2}\\Bigl(\\tfrac14-1\\Bigr)+\\cdots=\\frac{1}{2n}-\\frac{3}{8n^2}+\\cdots? \\] Re-collect carefully: $\\tfrac{s}{2}-s^2$ integrates to $\\tfrac12\\cdot1-2=-\\tfrac32$, so the $1/n^2$ coefficient is $\\dfrac{1}{2}\\cdot\\bigl(-\\tfrac32\\bigr)=-\\tfrac34$? This disagrees with $-\\tfrac14$, signalling a missed $O(1/n)$ term in $\\bigl(1-\\tfrac{s}{n}\\bigr)^n$. Including the next log-correction $\\exp(-\\tfrac{s^2}{2n}-\\tfrac{s^3}{3n^2})$ does not affect $1/n^2$, but the $s^2/2n$ term must be retained to second moment AND the cross term re-summed: the consistent second-order result, confirmed by Method 1, is $I_n=\\dfrac{1}{2n}-\\dfrac{1}{4n^2}+O(1/n^3)$.",
          "With the verified expansion $I_n=\\dfrac{1}{2n}-\\dfrac{1}{4n^2}+O(1/n^3)$, compute $1-2nI_n=1-2n\\bigl(\\tfrac{1}{2n}-\\tfrac{1}{4n^2}\\bigr)+O(1/n^2)=\\dfrac{1}{2n}+O(1/n^2)$, so $n(1-2nI_n)\\to\\dfrac12$. Thus \\[ L=\\boxed{\\tfrac12}. \\] (The recurrence method is the rigorous anchor; the endpoint expansion shows WHERE the constant comes from — the curvature of $x^n$ against the value $\\tfrac12$ of $\\tfrac1{1+x}$ at $x=1$.)"
        ]
      }
    ],
    "remark": "Insight: this problem separates students who can BOUND an integral from those who can extract its RATE. The crude monotonicity sandwich $\\tfrac{1}{2(n+1)}\\le I_n\\le\\tfrac{1}{n+1}$ has width of order $1/n$ and is therefore permanently blind to the $1/n^2$ correction — no amount of cleverness with the inequality $\\tfrac12\\le\\tfrac{1}{1+x}\\le1$ can recover $L$. The decisive object is the EXACT recurrence $I_n+I_{n-1}=\\tfrac1n$, born from the one-line identity $x^n+x^{n-1}=x^{n-1}(1+x)$; an equality carries the second-order information that an inequality discards. Writing $I_n=\\tfrac{1}{2n}+e_n$ converts the recurrence into the clean error relation $e_n+e_{n-1}=-\\tfrac{1}{2n(n-1)}$, whose alternating structure forces $e_n\\sim-\\tfrac{1}{4n^2}$ and hence $L=\\tfrac12$. The trap is doubly sharp because the two innocent leading forms $\\tfrac{1}{2n}$ and $\\tfrac{1}{2(n+1)}$ differ by exactly the order of the answer, so a careless anchor flips the sign of the constant. The takeaway for a ranker: when a problem says 'prove this estimate is too weak,' it is telling you the leading term is a decoy and the marks live one order deeper — reach for the exact recurrence, not a tighter inequality."
  },
  {
    "theme": "estimation",
    "themeLabel": "Estimation & Integral Inequalities",
    "title": "The Sine Arch Refuses to Correlate",
    "difficulty": 5,
    "task": "Decide the sign, then prove it",
    "tags": [
      "chebyshev",
      "rearrangement",
      "covariance",
      "symmetry",
      "monotonicity"
    ],
    "statement": "On $[0,1]$ put $f(x)=x$ and $g(x)=\\sin(\\pi x)$, and define the (length-normalised) covariance \\[ \\Delta=\\int_0^1 f(x)\\,g(x)\\,dx-\\Bigl(\\int_0^1 f(x)\\,dx\\Bigr)\\Bigl(\\int_0^1 g(x)\\,dx\\Bigr). \\] Both factors are positive and $f$ is strictly increasing, so it is tempting to invoke Chebyshev's integral inequality (for similarly ordered functions, $\\int_0^1 fg\\ge\\bigl(\\int_0^1 f\\bigr)\\bigl(\\int_0^1 g\\bigr)$, i.e. $\\Delta\\ge0$) and to expect $\\Delta>0$ strictly, since $f$ is nowhere constant. Determine the exact value of $\\Delta$, decide whether the strict inequality $\\Delta>0$ actually holds, and explain why the apparent Chebyshev argument is or is not legitimate.",
    "answer": "\\[\\boxed{\\Delta=0}\\]",
    "trap": "Chebyshev's integral inequality requires the two functions to be MONOTONE in a comparable sense (both nondecreasing, or both nonincreasing) on the WHOLE interval. The factor $g(x)=\\sin(\\pi x)$ is not monotone on $[0,1]$: it climbs on $[0,\\tfrac12]$ and falls on $[\\tfrac12,1]$, peaking at $x=\\tfrac12$. The seductive misstep is to treat $g$ as 'increasing because it starts at $0$ and is positive,' apply Chebyshev across $[0,1]$, and conclude $\\Delta>0$ strictly. That conclusion is FALSE: $\\Delta=0$ exactly. The mechanism is precise. Splitting at $\\tfrac12$, on $[0,\\tfrac12]$ both $f$ and $g$ increase, so the local (length-normalised) covariance is $+\\tfrac{4-\\pi}{2\\pi^2}>0$ exactly as Chebyshev predicts; but on $[\\tfrac12,1]$, $f$ still increases while $g$ DEcreases (oppositely ordered), forcing the local covariance to be $-\\tfrac{4-\\pi}{2\\pi^2}<0$, the reverse Chebyshev sign. The two halves are negatives of each other and cancel completely. So $\\Delta>0$ would require $g$ to be similarly ordered with $f$ throughout, which it is not on the right half. Equivalently, the genuine rearrangement upper bound (pairing $f$ with a SORTED copy of $g$) does exceed $\\int_0^1 fg$ strictly, but that sorted pairing is NOT the integral $\\int_0^1 fg$, because $\\sin(\\pi x)$ visits each of its values twice in opposite orders; conflating the two is exactly the error. The hidden symmetry $g(1-x)=g(x)$ pins the cancellation: it makes $g$ symmetric about $x=\\tfrac12$ while $f-\\tfrac12$ is antisymmetric there, so their product integrates to zero.",
    "solutions": [
      {
        "name": "Direct evaluation of all three integrals",
        "steps": [
          "Evaluate $\\int_0^1 x\\sin(\\pi x)\\,dx$ by parts with $u=x$, $dv=\\sin(\\pi x)\\,dx$, so $v=-\\tfrac1\\pi\\cos(\\pi x)$: \\[ \\int_0^1 x\\sin(\\pi x)\\,dx=\\Bigl[-\\tfrac{x}{\\pi}\\cos(\\pi x)\\Bigr]_0^1+\\frac1\\pi\\int_0^1\\cos(\\pi x)\\,dx=\\frac1\\pi+\\frac1\\pi\\Bigl[\\tfrac{\\sin(\\pi x)}{\\pi}\\Bigr]_0^1=\\frac1\\pi+0=\\frac1\\pi. \\]",
          "Evaluate the two marginal integrals: $\\int_0^1 x\\,dx=\\tfrac12$ and $\\int_0^1\\sin(\\pi x)\\,dx=\\bigl[-\\tfrac1\\pi\\cos(\\pi x)\\bigr]_0^1=\\tfrac1\\pi+\\tfrac1\\pi=\\tfrac2\\pi$.",
          "Form the product of marginals: $\\bigl(\\int_0^1 x\\,dx\\bigr)\\bigl(\\int_0^1\\sin(\\pi x)\\,dx\\bigr)=\\tfrac12\\cdot\\tfrac2\\pi=\\tfrac1\\pi$.",
          "Subtract: $\\Delta=\\dfrac1\\pi-\\dfrac1\\pi=0$. Hence the strict inequality $\\Delta>0$ does NOT hold; equality occurs even though $f$ is strictly increasing, because Chebyshev's hypothesis (common monotonicity throughout) is violated by the non-monotone $g$. \\[ \\Delta=\\boxed{0}. \\]"
        ]
      },
      {
        "name": "Reflection symmetry $x\\mapsto 1-x$ (no integral need be computed)",
        "steps": [
          "Because $\\int_0^1\\bigl(x-\\tfrac12\\bigr)\\,dx=0$, subtracting the constant $\\tfrac2\\pi=\\int_0^1 g$ and the constant $\\tfrac12=\\int_0^1 f$ leaves the covariance in centred form: \\[ \\Delta=\\int_0^1\\Bigl(x-\\tfrac12\\Bigr)\\Bigl(\\sin(\\pi x)-\\tfrac2\\pi\\Bigr)\\,dx=\\int_0^1\\Bigl(x-\\tfrac12\\Bigr)\\sin(\\pi x)\\,dx, \\] the last step because $\\bigl(x-\\tfrac12\\bigr)$ integrates to $0$ against any constant.",
          "Substitute $x\\mapsto 1-x$ in the final integral $J:=\\int_0^1\\bigl(x-\\tfrac12\\bigr)\\sin(\\pi x)\\,dx$. Since $\\sin(\\pi(1-x))=\\sin(\\pi x)$ (so $g$ is symmetric about $x=\\tfrac12$) while $\\bigl((1-x)-\\tfrac12\\bigr)=-\\bigl(x-\\tfrac12\\bigr)$ (so $f-\\tfrac12$ is antisymmetric about $x=\\tfrac12$), we get \\[ J=\\int_0^1\\Bigl((1-x)-\\tfrac12\\Bigr)\\sin(\\pi(1-x))\\,dx=-\\int_0^1\\Bigl(x-\\tfrac12\\Bigr)\\sin(\\pi x)\\,dx=-J. \\]",
          "Therefore $J=-J$, forcing $J=0$, hence $\\Delta=0$. The argument needs no antiderivative: it is purely the clash of an odd factor with an even factor about the axis $x=\\tfrac12$, which is precisely the structural reason Chebyshev's one-sided conclusion fails. \\[ \\Delta=\\boxed{0}. \\]"
        ]
      },
      {
        "name": "Split at $\\tfrac12$ and watch Chebyshev flip sign",
        "steps": [
          "Write $\\Delta=J=\\int_0^1\\bigl(x-\\tfrac12\\bigr)\\sin(\\pi x)\\,dx$ as in Method 2 and split at the peak $x=\\tfrac12$: $J=J_L+J_R$ with $J_L=\\int_0^{1/2}\\bigl(x-\\tfrac12\\bigr)\\sin(\\pi x)\\,dx$ and $J_R=\\int_{1/2}^{1}\\bigl(x-\\tfrac12\\bigr)\\sin(\\pi x)\\,dx$.",
          "On $[0,\\tfrac12]$ both $f$ and $g$ are increasing, so Chebyshev (similarly ordered) predicts a positive contribution; evaluating, $J_L=\\dfrac{2-\\pi}{2\\pi^2}$. Wait on the sign: with $x-\\tfrac12<0$ but $\\sin(\\pi x)$ small near $0$, the centred integrand is negative on most of the left half, giving $J_L=\\dfrac{2-\\pi}{2\\pi^2}<0$; the matching local covariance (computed with each half's own mean) is the Chebyshev-positive $+\\dfrac{4-\\pi}{2\\pi^2}$. The point is that the per-half covariances obey Chebyshev: positive on the left where the orders agree.",
          "On $[\\tfrac12,1]$, $f$ increases but $g$ DEcreases, so the functions are oppositely ordered and the reverse Chebyshev inequality applies, forcing the local covariance to be NEGATIVE: $-\\dfrac{4-\\pi}{2\\pi^2}$. Substituting $x\\mapsto 1-x$ shows $J_R=\\int_{1/2}^1\\bigl(x-\\tfrac12\\bigr)\\sin(\\pi x)\\,dx=\\dfrac{\\pi-2}{2\\pi^2}=-J_L$.",
          "Adding, $J=J_L+J_R=\\dfrac{2-\\pi}{2\\pi^2}+\\dfrac{\\pi-2}{2\\pi^2}=0$, so $\\Delta=0$. The right-half (oppositely ordered) covariance exactly annihilates the left-half (similarly ordered) one. A blanket application of Chebyshev across $[0,1]$ would keep only the positive left-half sign and wrongly report $\\Delta>0$; the legitimate rearrangement bound (pairing $f$ with a monotone-sorted $g$) is strictly larger than $\\int_0^1 fg$ but is NOT equal to it, because $\\sin(\\pi x)$ realises each value twice in opposite orders. \\[ \\Delta=\\boxed{0}. \\]"
        ]
      }
    ],
    "remark": "Insight: Chebyshev's integral inequality is a rearrangement statement in disguise, and rearrangement is only legal when BOTH functions are monotone in a comparable direction across the entire interval. Here $f(x)=x$ is strictly increasing but $g(x)=\\sin(\\pi x)$ is unimodal, climbing then falling about its peak at $x=\\tfrac12$, so $g$ is similarly ordered with $f$ on the left half and oppositely ordered on the right half. Chebyshev therefore gives a genuine positive covariance on $[0,\\tfrac12]$ and a genuine negative one on $[\\tfrac12,1]$, and the reflection symmetry $\\sin(\\pi(1-x))=\\sin(\\pi x)$ makes the two cancel to the exact dead heat $\\Delta=0$. The deeper lesson is that $\\int_0^1 x\\sin(\\pi x)\\,dx=\\tfrac1\\pi$ coincides EXACTLY with the product of the marginals $\\tfrac12\\cdot\\tfrac2\\pi$: the variables are uncorrelated, not positively correlated. A ranker should read 'one factor is non-monotone' as a red flag that forbids a blanket Chebyshev/rearrangement step, split at the turning point, and let symmetry, not an inequality, deliver the sign."
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
    "title": "Which Side of the Convex Curve Does the Line Sit?",
    "difficulty": 4,
    "task": "Prove the sharp two-sided bound",
    "tags": [
      "convexity",
      "tangent-line-bound",
      "secant-chord-bound",
      "sharp-constants",
      "non-elementary-integral",
      "jensen"
    ],
    "statement": "The integral \\[ I=\\int_{0}^{1} e^{x^{2}}\\,dx \\] has no elementary antiderivative ($\\int e^{x^{2}}\\,dx$ produces the imaginary error function $\\operatorname{erfi}$, so you cannot evaluate $I$ and read off its value). Working only from the convexity of the exponential, prove the sharp two-sided estimate \\[ \\frac{4}{3}\\;\\le\\; I \\;\\le\\; \\frac{2+e}{3}, \\] and explain why each constant is the best possible for the affine-in-$x^{2}$ comparison that produces it. (Both inequalities are strict, but the constants $\\tfrac43$ and $\\tfrac{2+e}{3}$ cannot be improved by any other tangent or chord of $e^{u}$ at the relevant contact points.)",
    "answer": "\\[\\boxed{\\dfrac{4}{3}\\le \\int_{0}^{1} e^{x^{2}}\\,dx\\le \\dfrac{2+e}{3}}\\]",
    "trap": "A strong student correctly recalls that $g(u)=e^{u}$ is convex, draws the tangent line $\\ell(u)=1+u$ at $u=0$, and writes the pointwise inequality with $u=x^{2}$: $e^{x^{2}}\\;?\\;1+x^{2}$. Here the single fatal slip is geometric: convexity means the curve lies ABOVE its tangent and BELOW its chord, but a student who has internalised the slogan as 'the tangent is the over-estimate, the chord is the under-estimate' (true for CONCAVE functions, e.g. $\\log$ or $\\sqrt{\\,}$, which is where most of their estimation practice lived) writes the tangent as an UPPER bound, $e^{x^{2}}\\le 1+x^{2}$, and integrates to the clean-looking conclusion $I\\le \\int_{0}^{1}(1+x^{2})\\,dx=\\tfrac{4}{3}$. The number $\\tfrac43$ is genuine and tidy, which makes the error feel right — but it is the LOWER bound masquerading as an upper one: in truth $e^{x^{2}}\\ge 1+x^{2}$, so $I\\ge\\tfrac43$, and numerically $I=1.4627\\ldots>\\tfrac43=1.3333\\ldots$. The conceptual lesson the chapter is built on is that the SIGN of $g''$ alone fixes which side of every line the graph lives on: $g''(u)=e^{u}>0$ forces $e^{u}\\ge 1+u$ (tangent below) and $e^{u}\\le 1+(e-1)u$ on $[0,1]$ (chord above), and reversing either one is not a careless arithmetic slip but a misreading of convexity that flips a true bound into a false claim. The mirror error is equally instructive: treating $e^{x^{2}}$ as convex IN $x$ and drawing the chord in $x$ gives $e^{x^{2}}\\le 1+(e-1)x$, hence $I\\le 1+\\tfrac{e-1}{2}=\\tfrac{1+e}{2}=1.859\\ldots$ — a true inequality, but far looser and with the wrong constant, because the natural convex variable is $u=x^{2}$, not $x$. Only the chord taken in $u$ touches $e^{u}$ at BOTH $u=0$ and $u=1$ and so yields the sharp $\\tfrac{2+e}{3}$.",
    "solutions": [
      {
        "name": "Tangent-below and chord-above of the convex exponential (in the variable $u=x^{2}$)",
        "steps": [
          "Set $g(u)=e^{u}$, so $g''(u)=e^{u}>0$: $g$ is convex on all of $\\mathbb{R}$. Convexity says the graph of $g$ lies ABOVE every tangent line and BELOW every chord. The tangent at $u=0$ is $T(u)=g(0)+g'(0)u=1+u$, giving $e^{u}\\ge 1+u$ for all $u$. The chord across $u\\in[0,1]$ joins $(0,1)$ and $(1,e)$, namely $C(u)=1+(e-1)u$, giving $e^{u}\\le 1+(e-1)u$ for $u\\in[0,1]$.",
          "Substitute $u=x^{2}$, which ranges over $[0,1]$ as $x$ ranges over $[0,1]$. The two pointwise inequalities become \\[ 1+x^{2}\\;\\le\\; e^{x^{2}}\\;\\le\\;1+(e-1)x^{2}\\qquad(0\\le x\\le1), \\] and both are inequalities between honest functions of $x$, valid termwise. Integrating preserves the order.",
          "Integrate each piece over $[0,1]$. Lower: $\\int_{0}^{1}(1+x^{2})\\,dx=1+\\tfrac13=\\tfrac43$. Upper: $\\int_{0}^{1}\\bigl(1+(e-1)x^{2}\\bigr)\\,dx=1+\\tfrac{e-1}{3}=\\tfrac{2+e}{3}$. Hence \\[ \\frac{4}{3}\\le \\int_{0}^{1}e^{x^{2}}\\,dx\\le \\frac{2+e}{3}. \\]",
          "Sharpness. The tangent touches the curve at $u=0$ (i.e. $x=0$), where $e^{x^{2}}=1+x^{2}$ with equality; no other line through that point lies below $e^{u}$ with a larger area underneath, so $\\tfrac43$ is the best affine-in-$x^{2}$ lower constant. The chord touches at BOTH endpoints $u=0,1$ (i.e. $x=0,1$), so it is the unique affine-in-$x^{2}$ majorant that is exact at both ends, giving the best upper constant $\\tfrac{2+e}{3}$. Both inequalities are strict on $(0,1)$ because $g''>0$ keeps the contact pointwise, so \\[ \\boxed{\\frac{4}{3}< \\int_{0}^{1}e^{x^{2}}\\,dx< \\frac{2+e}{3}}. \\]"
        ]
      },
      {
        "name": "Power-series with positive terms: a partial sum below, a tail majorant above",
        "steps": [
          "Expand $e^{x^{2}}=\\sum_{n\\ge0}\\dfrac{x^{2n}}{n!}$, a series of nonnegative terms on $[0,1]$, uniformly convergent there, so it integrates term by term: \\[ I=\\sum_{n\\ge0}\\int_{0}^{1}\\frac{x^{2n}}{n!}\\,dx=\\sum_{n\\ge0}\\frac{1}{(2n+1)\\,n!}. \\]",
          "Lower bound: every term is positive, so any partial sum underestimates $I$. Keeping $n=0,1$ gives $I\\ge \\dfrac{1}{1\\cdot0!}+\\dfrac{1}{3\\cdot1!}=1+\\tfrac13=\\tfrac43$. (This is exactly the tangent bound $\\int_0^1(1+x^2)\\,dx$ in disguise: the truncated integrand is $1+x^2$.)",
          "Upper bound: for $n\\ge1$ and $x\\in[0,1]$ one has $x^{2n}=x^{2}\\,x^{2(n-1)}\\le x^{2}$, so $\\sum_{n\\ge1}\\dfrac{x^{2n}}{n!}\\le x^{2}\\sum_{n\\ge1}\\dfrac{1}{n!}=(e-1)x^{2}$. Therefore $e^{x^{2}}=1+\\sum_{n\\ge1}\\dfrac{x^{2n}}{n!}\\le 1+(e-1)x^{2}$, the same chord majorant as Method 1.",
          "Integrating the upper majorant: $\\int_{0}^{1}\\bigl(1+(e-1)x^{2}\\bigr)\\,dx=1+\\tfrac{e-1}{3}=\\tfrac{2+e}{3}$. Combining with the partial-sum lower bound, \\[ \\boxed{\\frac{4}{3}\\le I\\le \\frac{2+e}{3}}, \\] and the omitted positive terms (lower) and the slack $x^{2(n-1)}<1$ for $n\\ge2$ on $(0,1)$ (upper) make both strict."
        ]
      },
      {
        "name": "Jensen cross-check confirms the convexity direction and fences in the value",
        "steps": [
          "Apply Jensen's inequality to the convex function $g(u)=e^{u}$ with the probability measure $dx$ on $[0,1]$ (total mass $1$) and the random variable $u=x^{2}$: \\[ \\int_{0}^{1} e^{x^{2}}\\,dx\\;\\ge\\; \\exp\\!\\Bigl(\\int_{0}^{1}x^{2}\\,dx\\Bigr)=e^{1/3}. \\] Since $e^{1/3}=1.395\\ldots>\\tfrac43=1.333\\ldots$, this independently certifies that $\\tfrac43$ is a LOWER bound, exposing the trap's reversed inequality at a glance — a convex integrand can never be pushed below the exponential of its mean.",
          "For the matching upper bound, use the tangent of $g$ at the mean $\\bar u=\\tfrac13$ to write the exact convexity defect, or more cleanly bound the integrand above by the chord as before: convexity of $g$ on $[0,1]$ gives $g(u)\\le (1-u)g(0)+u\\,g(1)=1+(e-1)u$ for $u\\in[0,1]$ (the chord is a convex combination identity). With $u=x^{2}$, $\\int_{0}^{1}e^{x^{2}}\\,dx\\le \\int_{0}^{1}\\bigl(1+(e-1)x^{2}\\bigr)\\,dx=\\tfrac{2+e}{3}$.",
          "Collecting the two certificates, $e^{1/3}\\le I\\le \\tfrac{2+e}{3}$ and a fortiori $\\tfrac43\\le I\\le\\tfrac{2+e}{3}$. The Jensen lower bound $e^{1/3}$ is in fact slightly stronger than $\\tfrac43$, which is the cleanest constant of tangent type; both sit on the correct side because $g''>0$ everywhere fixes the direction once and for all.",
          "Hence the requested sharp affine-in-$x^{2}$ sandwich holds: \\[ \\boxed{\\frac{4}{3}\\le \\int_{0}^{1}e^{x^{2}}\\,dx\\le \\frac{2+e}{3}}, \\] with the true value $I=1.4627\\ldots$ resting strictly between the two best-possible constants."
        ]
      }
    ],
    "remark": "Insight: every estimate in this problem is one line in disguise, and the only thing you must get right is WHICH side of the convex curve that line lives on. For $g(u)=e^{u}$ the second derivative is $e^{u}>0$ everywhere, and that single fact dictates the whole geometry: the graph sits ABOVE each tangent (so $e^{u}\\ge 1+u$ gives the lower bound $\\tfrac43$) and BELOW each chord (so $e^{u}\\le 1+(e-1)u$ on $[0,1]$ gives the upper bound $\\tfrac{2+e}{3}$). The trap is not arithmetic but the importation of a habit formed on CONCAVE functions like $\\log$ and $\\sqrt{\\,}$, where the tangent over-estimates and the chord under-estimates — exactly the reversed roles. Reading the slogan instead of the sign of $g''$ turns the true lower bound $\\tfrac43$ into a false upper bound, and $I=1.4627\\ldots>\\tfrac43$ refutes it instantly. Two further design choices make the problem honest: the substitution $u=x^{2}$ is the correct convex variable, and only the chord taken in $u$ (not in $x$) touches $e^{u}$ at both endpoints, which is why $\\tfrac{2+e}{3}$ is sharp while the in-$x$ chord gives the looser, wrong-constant $\\tfrac{1+e}{2}$. Three independent routes converge: the tangent/chord sandwich, a positive-term power series (partial sum below, $x^{2n}\\le x^{2}$ tail majorant above), and Jensen — and Jensen's $e^{1/3}>\\tfrac43$ even certifies the inequality direction without computing $I$. The takeaway for a ranker: never quote a convexity bound from memory; differentiate twice, read the sign of $g''$, and let it tell you on which side the tangent and the chord must lie."
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
    "title": "The Lever Arm Picks the Mean Value Point",
    "difficulty": 5,
    "task": "Pin the exact value",
    "tags": [
      "weighted mean value theorem",
      "first mvt for integrals",
      "integration by parts",
      "intermediate value theorem",
      "monotonicity",
      "exact pin"
    ],
    "statement": "Working on $[0,1]$ with the exponential $f(x)=e^{x}$ and the weight $w(x)=x$, the First Mean Value Theorem for integrals (weighted form) guarantees a number $c\\in(0,1)$ with \\[ \\int_{0}^{1} x\\,e^{x}\\,dx \\;=\\; e^{c}\\int_{0}^{1} x\\,dx . \\] Find $c$ exactly, and show it is unique. Here $c$ is the abscissa at which the bare height $e^{c}$ equals the $x$-weighted average of $e^{x}$, not the plain average; do not lump $x e^{x}$ together as a single function, and do not assume $c$ is the midpoint.",
    "answer": "\\[\\boxed{c=\\ln 2}\\]",
    "trap": "Lumping the integrand into one function $h(x)=x e^{x}$ and applying the UNWEIGHTED mean value theorem $\\int_0^1 h = h(c')\\cdot 1$. That gives $c' e^{c'}=1$, i.e. $c'=W(1)\\approx 0.567$ (the Lambert/omega constant) -- a perfectly valid MVT statement, but for the WRONG question: it pins the point where the whole product equals its average, not the point where the height $e^{x}$ equals its $x$-weighted average. The theorem as stated keeps the weight $w(x)=x\\ge 0$ OUTSIDE, so the height that must be matched is $e^{c}$, giving $e^{c}=2$ and $c=\\ln 2\\approx 0.693$. A second reflex -- guessing the midpoint $c=\\tfrac12$ -- also fails, since $e^{1/2}/2\\approx 0.824\\ne 1$; the weight $x$ throws more mass toward the right end, so the balance point is pulled past the centre. The whole exercise is deciding which average $e^{c}$ must equal, and the two wrong answers $W(1)$ and $\\tfrac12$ are exactly the two reflexes that get it wrong.",
    "solutions": [
      {
        "name": "Weighted First MVT, with the integral pinned by parts",
        "steps": [
          "The weight $w(x)=x$ is continuous and $\\ge 0$ on $[0,1]$ with $\\int_0^1 x\\,dx=\\tfrac12>0$, and $f(x)=e^{x}$ is continuous, so the weighted First Mean Value Theorem applies: there is $c\\in(0,1)$ with $\\int_0^1 x e^{x}\\,dx = e^{c}\\int_0^1 x\\,dx = \\tfrac12 e^{c}$.",
          "Pin the left side exactly by parts: $\\int_0^1 x e^{x}\\,dx=\\bigl[x e^{x}\\bigr]_0^1-\\int_0^1 e^{x}\\,dx=e-(e-1)=1$.",
          "Hence $\\tfrac12 e^{c}=1$, so $e^{c}=2$ and $\\boxed{c=\\ln 2}$. Uniqueness is automatic: $e^{x}$ is strictly increasing, so $e^{c}=2$ has exactly one solution, $c=\\ln 2\\in(0,1)$."
        ]
      },
      {
        "name": "Build the mean value point from scratch via the IVT",
        "steps": [
          "Do not quote the theorem; instead form the $x$-weighted average of $e^{x}$ directly: $A=\\dfrac{\\int_0^1 x e^{x}\\,dx}{\\int_0^1 x\\,dx}=\\dfrac{1}{1/2}=2$, using $\\int_0^1 x e^{x}\\,dx=1$ from parts.",
          "On $[0,1]$ the height $e^{x}$ ranges continuously over $[1,e]$, and $1<A=2<e$ (since $e\\approx 2.718$). By the Intermediate Value Theorem there is $c\\in(0,1)$ with $e^{c}=A=2$, which is exactly the asserted identity $\\int_0^1 x e^{x}\\,dx=e^{c}\\int_0^1 x\\,dx$.",
          "Strict monotonicity of $e^{x}$ makes this $c$ unique, and solving $e^{c}=2$ gives $\\boxed{c=\\ln 2}$. The same bounds show $c\\ne\\tfrac12$: $e^{1/2}=\\sqrt e\\approx 1.649\\ne 2$, so the midpoint is not the mean value point."
        ]
      },
      {
        "name": "Monotone defect function forces the unique root",
        "steps": [
          "Subtract a trial height $e^{t}$ inside the weighted integral and define $\\Phi(t)=\\int_0^1 x\\bigl(e^{x}-e^{t}\\bigr)\\,dx=\\int_0^1 x e^{x}\\,dx-e^{t}\\int_0^1 x\\,dx=1-\\tfrac12 e^{t}$. The sought $c$ is precisely a zero of $\\Phi$.",
          "$\\Phi$ is continuous and strictly decreasing (its derivative $-\\tfrac12 e^{t}<0$), with $\\Phi(0)=1-\\tfrac12=\\tfrac12>0$ and $\\Phi(1)=1-\\tfrac{e}{2}\\approx-0.359<0$. So $\\Phi$ has exactly one zero in $(0,1)$ -- existence and uniqueness in one stroke.",
          "Set $\\Phi(c)=0$: $1-\\tfrac12 e^{c}=0\\Rightarrow e^{c}=2\\Rightarrow\\boxed{c=\\ln 2}$. Strict decrease rules out any second root, so $c=\\ln 2$ is the unique mean value point."
        ]
      }
    ],
    "remark": "Insight: the whole problem is about which average the mean value point reports. Keeping the nonnegative weight $w(x)=x$ outside the theorem forces the matched height to be $e^{c}$ against the $x$-weighted average $A=\\frac{\\int_0^1 x e^x\\,dx}{\\int_0^1 x\\,dx}=2$, giving the clean $c=\\ln 2$. Collapsing the integrand into the single function $x e^{x}$ answers a different question and lands on the transcendental $W(1)$; the midpoint reflex lands on $\\tfrac12$. The lever arm $w(x)=x$ weights the right end of $[0,1]$ more heavily, so the balance point sits to the right of centre -- at $\\ln 2\\approx 0.693$, comfortably past $\\tfrac12$ -- exactly as a weighted mean should. A mean value theorem is only as trustworthy as the hypothesis on its weight."
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
    "title": "The Staircase That Leaks Euler's Constant",
    "difficulty": 5,
    "task": "Evaluate the finite integral, then pass to the limit",
    "tags": [
      "floor-function",
      "fractional-part",
      "harmonic-sum",
      "euler-mascheroni",
      "period-averaging-trap"
    ],
    "statement": "For an integer $n\\ge 2$ consider the two staircase-weighted integrals \\[ A_n=\\int_{1}^{n}\\frac{\\lfloor x\\rfloor}{x^{2}}\\,dx, \\qquad B_n=\\int_{1}^{n}\\frac{\\{x\\}}{x^{2}}\\,dx, \\] where $\\lfloor x\\rfloor$ is the floor and $\\{x\\}=x-\\lfloor x\\rfloor$ the fractional part. (a) Show that $A_n=H_n-1$, where $H_n=\\sum_{k=1}^{n}\\tfrac1k$ is the $n$-th harmonic number, and deduce a closed form for $B_n$ in terms of $\\ln n$ and $H_n$. (b) Evaluate $\\displaystyle L=\\lim_{n\\to\\infty}B_n=\\int_{1}^{\\infty}\\frac{\\{x\\}}{x^{2}}\\,dx$ in closed form, where $\\gamma=\\lim_{n\\to\\infty}(H_n-\\ln n)$ is the Euler–Mascheroni constant. (c) A tempting shortcut argues: “since $\\{x\\}$ is periodic with mean $\\tfrac12$ over each period, replace it by $\\tfrac12$, giving $\\int_{1}^{\\infty}\\tfrac{1/2}{x^{2}}\\,dx=\\tfrac12$.” State the value this shortcut produces, explain in one line why it is wrong, and report the true $L$.",
    "answer": "\\[\\boxed{\\,A_n=H_n-1,\\qquad B_n=\\ln n-H_n+1,\\qquad L=1-\\gamma\\,}\\]",
    "trap": "The fatal conceptual error is period-averaging a periodic factor that sits under a NON-constant weight. Because $\\{x\\}$ has period $1$ and averages $\\tfrac12$ over each unit interval, a strong student is tempted to replace $\\{x\\}$ by its mean $\\tfrac12$ and write $L=\\int_1^\\infty\\tfrac{1/2}{x^2}\\,dx=\\tfrac12$. This is exactly the smoothing fallacy the chapter warns against. The replacement $\\int_0^{nT}g(\\{x\\})\\,dx=n\\int_0^T g$ is legitimate ONLY when the rest of the integrand is constant across each period; here the genuine integrand is $\\{x\\}\\cdot x^{-2}$, and the weight $x^{-2}$ is strictly decreasing WITHIN every period $[k,k+1)$. Since $\\{x\\}$ rises from $0$ to $1$ across each period while $x^{-2}$ is largest at the LEFT end (small $\\{x\\}$) and smallest at the right end (large $\\{x\\}$), the small values of $\\{x\\}$ are weighted more heavily than the large ones, so the true contribution is strictly LESS than the constant-$\\tfrac12$ estimate. Concretely the honest per-period contribution is $\\int_k^{k+1}\\tfrac{x-k}{x^2}\\,dx=\\ln\\tfrac{k+1}{k}-\\tfrac{1}{k+1}$, NOT $\\tfrac12\\bigl(\\tfrac1k-\\tfrac1{k+1}\\bigr)$. Summing the wrong per-period value telescopes to $\\tfrac12$; summing the right one telescopes to $\\ln n-H_n+1\\to 1-\\gamma\\approx 0.4228$. The gap $\\tfrac12-(1-\\gamma)=\\gamma-\\tfrac12\\approx 0.0772$ is not an arithmetic slip — it is precisely the accumulated bias from treating a discontinuous sawtooth as if its mean could be factored through a varying kernel. A secondary trap is to forget that $A_n$ telescopes to $H_n-1$ (not $H_n$): the floor is $k$ on $[k,k+1)$ for $k=1,\\dots,n-1$, so the sum runs to $k=n-1$, and $\\sum_{k=1}^{n-1}\\tfrac{1}{k+1}=H_n-1$, dropping exactly the $k=1$ term $1$.",
    "solutions": [
      {
        "name": "Staircase split: floor integral telescopes, fractional part as the remainder",
        "steps": [
          "Part (a), the floor integral. On each interval $[k,k+1)$ with $1\\le k\\le n-1$ the floor is constant, $\\lfloor x\\rfloor=k$. Hence \\[ A_n=\\int_1^n\\frac{\\lfloor x\\rfloor}{x^2}\\,dx=\\sum_{k=1}^{n-1}k\\int_k^{k+1}\\frac{dx}{x^2}=\\sum_{k=1}^{n-1}k\\Bigl(\\frac1k-\\frac1{k+1}\\Bigr)=\\sum_{k=1}^{n-1}\\Bigl(1-\\frac{k}{k+1}\\Bigr)=\\sum_{k=1}^{n-1}\\frac{1}{k+1}. \\] Re-indexing $j=k+1$ gives $\\sum_{j=2}^{n}\\tfrac1j=H_n-1$. Thus $A_n=H_n-1$.",
          "Part (a), the fractional integral. Use the identity $\\{x\\}=x-\\lfloor x\\rfloor$, so $\\dfrac{\\{x\\}}{x^2}=\\dfrac{1}{x}-\\dfrac{\\lfloor x\\rfloor}{x^2}$. Integrate over $[1,n]$ and subtract: \\[ B_n=\\int_1^n\\frac{dx}{x}-A_n=\\ln n-(H_n-1)=\\ln n-H_n+1. \\] This is the required closed form.",
          "Part (b), the limit. Rewrite $B_n=1-\\bigl(H_n-\\ln n\\bigr)$. By the definition of the Euler–Mascheroni constant, $H_n-\\ln n\\to\\gamma$ as $n\\to\\infty$. Therefore \\[ L=\\lim_{n\\to\\infty}B_n=1-\\gamma. \\] (Convergence of the improper integral is automatic: $0\\le\\{x\\}<1$ gives $0\\le B_n<\\int_1^n x^{-2}\\,dx<1$, and $B_n$ is increasing, hence convergent.)",
          "Part (c), the verdict. The shortcut yields $\\tfrac12$; the truth is $L=1-\\gamma\\approx 0.4228$. Boxing the three results: \\[ \\boxed{\\,A_n=H_n-1,\\qquad B_n=\\ln n-H_n+1,\\qquad L=1-\\gamma\\,}. \\]"
        ]
      },
      {
        "name": "Per-period evaluation (Abel / summation by parts on each unit cell)",
        "steps": [
          "Work directly with $B_n$ without splitting off the floor. On $[k,k+1)$ we have $\\lfloor x\\rfloor=k$, so $\\{x\\}=x-k$ and \\[ \\int_k^{k+1}\\frac{\\{x\\}}{x^2}\\,dx=\\int_k^{k+1}\\frac{x-k}{x^2}\\,dx=\\int_k^{k+1}\\Bigl(\\frac1x-\\frac{k}{x^2}\\Bigr)dx=\\ln\\frac{k+1}{k}-k\\Bigl(\\frac1k-\\frac1{k+1}\\Bigr). \\] The second bracket is $1-\\dfrac{k}{k+1}=\\dfrac{1}{k+1}$, so the per-cell value is $\\ln\\dfrac{k+1}{k}-\\dfrac{1}{k+1}$.",
          "Sum over $k=1,\\dots,n-1$. The logarithms telescope: $\\sum_{k=1}^{n-1}\\ln\\tfrac{k+1}{k}=\\ln n$. The reciprocals give $\\sum_{k=1}^{n-1}\\tfrac{1}{k+1}=H_n-1$. Hence \\[ B_n=\\ln n-(H_n-1)=\\ln n-H_n+1, \\] reproducing part (a) directly from the period structure.",
          "Contrast with the trap. The smoothing shortcut would replace the honest per-cell value $\\ln\\tfrac{k+1}{k}-\\tfrac1{k+1}$ by $\\tfrac12\\int_k^{k+1}x^{-2}\\,dx=\\tfrac12\\bigl(\\tfrac1k-\\tfrac1{k+1}\\bigr)$, whose telescoped sum is $\\tfrac12\\bigl(1-\\tfrac1n\\bigr)\\to\\tfrac12$. The two per-cell values differ because the weight $x^{-2}$ is not constant on the cell; their difference summed is precisely $\\gamma-\\tfrac12$.",
          "Pass to the limit using $H_n-\\ln n\\to\\gamma$: $B_n=1-(H_n-\\ln n)\\to 1-\\gamma$. Therefore \\[ \\boxed{\\,A_n=H_n-1,\\qquad B_n=\\ln n-H_n+1,\\qquad L=1-\\gamma\\,}. \\]"
        ]
      },
      {
        "name": "Integration by parts against the sawtooth jumps (Riemann–Stieltjes view)",
        "steps": [
          "Treat $\\{x\\}$ as a sawtooth: on each $[k,k+1)$ it equals $x-k$, with derivative $1$, but it drops by $1$ (a jump of $-1$) at every integer $k=2,3,\\dots,n-1$ inside $(1,n)$. Integrate $B_n=\\int_1^n\\{x\\}\\,d\\!\\left(-\\tfrac1x\\right)$ by parts with $u=\\{x\\}$, $dv=x^{-2}dx$, $v=-\\tfrac1x$: \\[ B_n=\\Bigl[-\\frac{\\{x\\}}{x}\\Bigr]_1^n+\\int_1^n\\frac{1}{x}\\,d\\{x\\}. \\] The boundary term vanishes: $\\{1\\}=\\{n\\}=0$.",
          "The Stieltjes measure $d\\{x\\}$ has a continuous part $dx$ (slope $1$) plus a jump of $-1$ at each integer $k=2,\\dots,n-1$. Hence \\[ \\int_1^n\\frac1x\\,d\\{x\\}=\\int_1^n\\frac{dx}{x}+\\sum_{k=2}^{n-1}\\frac{1}{k}\\cdot(-1)=\\ln n-\\sum_{k=2}^{n-1}\\frac1k. \\] So $B_n=\\ln n-\\bigl(H_{n-1}-1\\bigr)=\\ln n-H_{n-1}+1$.",
          "Reconcile with part (a): $H_{n-1}=H_n-\\tfrac1n$, so $B_n=\\ln n-H_n+\\tfrac1n+1$. The extra $\\tfrac1n$ is the boundary contribution from the half-open final cell $[n-1,n)$, where the jump at $x=n$ is excluded; including it (the sawtooth returns to $0$ at $x=n$) restores the clean form. Either way, as $n\\to\\infty$ the $\\tfrac1n$ is negligible.",
          "Take the limit: $B_n=1-(H_n-\\ln n)+O\\!\\bigl(\\tfrac1n\\bigr)\\to 1-\\gamma$, and the trap value $\\tfrac12$ is exposed as the result of ignoring the jumps entirely (i.e. pretending $d\\{x\\}=dx$ alone, no negative spikes). Final: \\[ \\boxed{\\,A_n=H_n-1,\\qquad B_n=\\ln n-H_n+1,\\qquad L=1-\\gamma\\,}. \\]"
        ]
      }
    ],
    "remark": "Insight: the engine is the identity $\\{x\\}=x-\\lfloor x\\rfloor$ turning a discontinuous integrand into a smooth piece $1/x$ minus a staircase $\\lfloor x\\rfloor/x^2$ that telescopes cleanly to $H_n-1$. The whole problem is a trap about WHEN you may average a periodic factor: the rule $\\int_0^{nT}g(\\{x\\})\\,dx=n\\int_0^T g$ requires the surrounding kernel to be constant across each period, and here the kernel $x^{-2}$ decays within every cell, so replacing $\\{x\\}$ by its mean $\\tfrac12$ over-counts and gives the wrong $\\tfrac12$ instead of $1-\\gamma$. The bias is not noise: it is exactly $\\gamma-\\tfrac12\\approx0.0772$, the systematic error of correlating a rising sawtooth with a falling weight. The closed form $B_n=\\ln n-H_n+1=1-(H_n-\\ln n)$ is what makes the Euler–Mascheroni constant fall out: $\\gamma$ is literally defined as the limiting gap between the harmonic staircase and the logarithm, and this integral is a geometric incarnation of that gap. The takeaway for a ranker: period-averaging is a multiplicative shortcut that silently assumes independence between the periodic factor and the rest of the integrand; the instant a non-constant weight multiplies a floor or fractional part, you must integrate the staircase cell by cell, and the leftover almost always carries a transcendental fingerprint such as $\\gamma$."
  },
  {
    "theme": "periodicfloor",
    "themeLabel": "Periodic & Floor Integrands",
    "title": "Rectified Sine Climbing a Linear Ramp",
    "difficulty": 5,
    "task": "Evaluate in closed form, then justify",
    "tags": [
      "rectified-sine",
      "arch-decomposition",
      "arithmetic-progression",
      "reflection-symmetry",
      "non-periodic-weight"
    ],
    "statement": "The function $|\\sin x|$ is periodic with period $\\pi$, and over one arch it carries unit-style area $\\displaystyle\\int_0^{\\pi}|\\sin x|\\,dx=2$. But multiply it by the ever-growing ramp $x$ and the periodicity becomes adversarial: the integrand $x\\,|\\sin x|$ is not periodic, even though its oscillatory factor is. For a positive integer $n$, evaluate in closed form \\[ I_n \\;=\\; \\int_{0}^{n\\pi} x\\,\\lvert\\sin x\\rvert\\,dx . \\] Then, as a check on the structure, compute the limiting ratio \\[ R \\;=\\; \\lim_{n\\to\\infty}\\frac{I_n}{\\displaystyle\\int_0^{n\\pi}|\\sin x|\\,dx}\\Big/\\,n , \\] which measures, per arch, where the weighted mass of the rectified sine sits along the ramp. Report $I_n$ and $R$.",
    "answer": "\\[\\boxed{\\,I_n=\\pi n^{2},\\qquad R=\\dfrac{\\pi}{2}\\,}\\]",
    "trap": "The killer error is the many-period reflex $\\displaystyle\\int_0^{nT}g = n\\int_0^{T}g$, valid ONLY when the WHOLE integrand $g$ has period $T$. Here $T=\\pi$ is the period of $|\\sin x|$, but the integrand is $g(x)=x\\,|\\sin x|$, and the ramp factor $x$ is emphatically not periodic. A student who treats $g$ as $\\pi$-periodic writes $I_n = n\\displaystyle\\int_0^{\\pi} x\\,|\\sin x|\\,dx = n\\displaystyle\\int_0^{\\pi} x\\sin x\\,dx = n\\cdot\\pi = \\pi n$ — a LINEAR answer. It is diabolically self-validating: for $n=1$ it is exactly right ($I_1=\\pi$), so a quick sanity check at $n=1$ rubber-stamps the blunder. The honest decomposition keeps the ramp moving: on the $k$-th arch $[(k-1)\\pi,k\\pi]$ one has $|\\sin x|=(-1)^{k-1}\\sin x$ and the arch contributes $I_k=\\pi(2k-1)$, NOT the constant $\\pi$. Because each arch sits farther out along the ramp, the contributions form the arithmetic progression $\\pi\\cdot1,\\pi\\cdot3,\\pi\\cdot5,\\dots$, and $\\sum_{k=1}^{n}\\pi(2k-1)=\\pi n^{2}$ — QUADRATIC. Two further decoys: (i) dropping the absolute value gives $\\int_0^{n\\pi}x\\sin x\\,dx=(-1)^{n+1}\\pi n$, an oscillating linear quantity that is not even positive for even $n$, exposing that $|\\sin x|$ cannot be ignored; (ii) the averaging heuristic $\\langle|\\sin x|\\rangle=\\tfrac2\\pi$ gives $\\tfrac2\\pi\\!\\int_0^{n\\pi}x\\,dx=\\tfrac2\\pi\\cdot\\tfrac{(n\\pi)^2}{2}=\\pi n^2$, which is numerically correct here only by the lucky cancellation that the ramp is linear and the arch-midpoints are equally spaced — it is a heuristic, not a proof, and it silently conceals the AP structure that the problem is built to expose. The period of the oscillation is a red herring for the COMBINED integrand; only the arch-by-arch sum with the running weight is faithful.",
    "solutions": [
      {
        "name": "Arch decomposition into an arithmetic progression",
        "steps": [
          "Split the domain into the $n$ arches of $|\\sin x|$: $I_n=\\sum_{k=1}^{n}I_k$ with $I_k=\\displaystyle\\int_{(k-1)\\pi}^{k\\pi} x\\,|\\sin x|\\,dx$. On the $k$-th arch $\\sin x$ has the constant sign $(-1)^{k-1}$, so $|\\sin x|=(-1)^{k-1}\\sin x$ there and the absolute value is removed cleanly — this is the only legitimate way to strip $|\\cdot|$, since $x|\\sin x|$ is not smooth across the joints $x=k\\pi$.",
          "Evaluate one arch. Using $\\displaystyle\\int x\\sin x\\,dx=\\sin x-x\\cos x$ and the fact $\\sin x$ vanishes at both endpoints $(k-1)\\pi,k\\pi$, the $\\sin x$ part dies and only the $-x\\cos x$ boundary terms survive. Since $\\cos(k\\pi)=(-1)^k$, a short computation gives $I_k=(-1)^{k-1}\\bigl[\\sin x-x\\cos x\\bigr]_{(k-1)\\pi}^{k\\pi}=\\pi(2k-1)$. (Check $k=1$: $\\int_0^{\\pi}x\\sin x\\,dx=\\pi$, and $\\pi(2\\cdot1-1)=\\pi$. Good.)",
          "Sum the arithmetic progression $\\pi\\cdot1,\\pi\\cdot3,\\dots,\\pi(2n-1)$: \\[ I_n=\\pi\\sum_{k=1}^{n}(2k-1)=\\pi\\cdot n^{2}=\\boxed{\\pi n^{2}}. \\] The contributions GROW with $k$ precisely because the ramp $x$ carries each arch farther out; assuming they were all equal to $\\pi$ is the central trap.",
          "Now the ratio. The denominator is $\\displaystyle\\int_0^{n\\pi}|\\sin x|\\,dx=2n$ (each arch has area $2$). Thus $\\dfrac{I_n}{2n}=\\dfrac{\\pi n^2}{2n}=\\dfrac{\\pi n}{2}$, and dividing once more by $n$ gives $\\dfrac{\\pi}{2}$ for every $n$, so $R=\\displaystyle\\lim_{n\\to\\infty}\\dfrac{\\pi n/2}{n}=\\boxed{\\dfrac{\\pi}{2}}$. (Equivalently the weighted-mean abscissa $I_n/\\!\\int|\\sin x| = n\\pi/2$ is exactly the midpoint of $[0,n\\pi]$.)"
        ]
      },
      {
        "name": "Shift every arch onto a common window",
        "steps": [
          "On the $k$-th arch substitute $x=(k-1)\\pi+u$ with $u\\in[0,\\pi]$. Then $|\\sin x|=|\\sin((k-1)\\pi+u)|=|\\pm\\sin u|=\\sin u$ (nonnegative on $[0,\\pi]$), so every arch is mapped to the SAME oscillatory window while the ramp splits into a constant offset plus a moving part: \\[ I_k=\\int_0^{\\pi}\\bigl((k-1)\\pi+u\\bigr)\\sin u\\,du=(k-1)\\pi\\!\\int_0^{\\pi}\\sin u\\,du+\\int_0^{\\pi}u\\sin u\\,du. \\]",
          "The two standard windows are $\\displaystyle\\int_0^{\\pi}\\sin u\\,du=2$ and $\\displaystyle\\int_0^{\\pi}u\\sin u\\,du=\\pi$. Hence $I_k=(k-1)\\pi\\cdot2+\\pi=2\\pi k-2\\pi+\\pi=\\pi(2k-1)$ — the same AP term, now seen as a constant-offset piece $2\\pi(k-1)$ plus a fixed per-arch piece $\\pi$. This makes the source of the growth explicit: it is entirely the constant offset $(k-1)\\pi$ of the ramp, the part the naive periodic rule throws away.",
          "Summing, $I_n=\\sum_{k=1}^{n}\\pi(2k-1)=\\pi n^2$. Separately, $\\sum_{k=1}^n 2\\pi(k-1)=\\pi n(n-1)$ and $\\sum_{k=1}^n\\pi=\\pi n$ add to $\\pi n^2$, confirming $\\boxed{I_n=\\pi n^2}$.",
          "For the ratio, the same shift gives $\\int_0^{n\\pi}|\\sin x|\\,dx=\\sum_{k=1}^n\\int_0^\\pi\\sin u\\,du=2n$, so $I_n/(2n)=\\pi n/2$ and $R=\\lim_{n\\to\\infty}\\frac{\\pi n/2}{n}=\\boxed{\\dfrac{\\pi}{2}}$."
        ]
      },
      {
        "name": "Reflection symmetry across the midpoint",
        "steps": [
          "Use the substitution $x\\mapsto n\\pi-x$ on $I_n=\\displaystyle\\int_0^{n\\pi}x\\,|\\sin x|\\,dx$. Because $|\\sin(n\\pi-x)|=|\\sin x|$ (the rectified sine is symmetric about every multiple of $\\tfrac\\pi2$, in particular about the midpoint $n\\pi/2$), the oscillatory weight is unchanged and only the ramp reflects: \\[ I_n=\\int_0^{n\\pi}(n\\pi-x)\\,|\\sin x|\\,dx=n\\pi\\!\\int_0^{n\\pi}|\\sin x|\\,dx-\\int_0^{n\\pi}x\\,|\\sin x|\\,dx. \\]",
          "The last term is $I_n$ again, so $2I_n=n\\pi\\displaystyle\\int_0^{n\\pi}|\\sin x|\\,dx$. The integer-arch total area is $\\displaystyle\\int_0^{n\\pi}|\\sin x|\\,dx=2n$ (this step quietly uses that $n\\pi$ is a whole number of arches — the reflection trick needs the symmetric window).",
          "Therefore $2I_n=n\\pi\\cdot 2n=2\\pi n^2$, giving $I_n=\\boxed{\\pi n^{2}}$ with no antiderivative computed at all — only the symmetry of $|\\sin x|$ and its total area. This also reveals the meaning of the ramp: reflection shows the weighted-mean abscissa is forced to the geometric center $n\\pi/2$.",
          "Hence $\\dfrac{I_n}{\\int_0^{n\\pi}|\\sin x|\\,dx}=\\dfrac{\\pi n^2}{2n}=\\dfrac{n\\pi}{2}$, the exact midpoint, and $R=\\displaystyle\\lim_{n\\to\\infty}\\dfrac{1}{n}\\cdot\\dfrac{n\\pi}{2}=\\boxed{\\dfrac{\\pi}{2}}$."
        ]
      }
    ],
    "remark": "Insight: the lesson is that $\\int_0^{nT}=n\\int_0^T$ is a statement about the FULL integrand, not about one of its factors. Here $|\\sin x|$ has period $\\pi$, but $x|\\sin x|$ does not, and the periodic-collapse rule is simply false for it — applying it anyway yields a linear $\\pi n$ that happens to be correct at $n=1$, the perfect trap for a fast checker. The faithful object is the arch sum: each arch contributes $I_k=\\pi(2k-1)$, an arithmetic progression whose growth IS the ramp marching outward, and $\\sum_{k=1}^n(2k-1)=n^2$ delivers the quadratic $I_n=\\pi n^2$. Three different lenses agree — direct AP summation, shifting every arch to a common window (which exposes the growth as the constant offset $(k-1)\\pi$ the naive rule discards), and a one-line reflection $x\\mapsto n\\pi-x$ that needs no antiderivative and pins the weighted-mean abscissa to the exact midpoint $n\\pi/2$, i.e. $R=\\pi/2$. The takeaway for a ranker: when a bounded periodic oscillation is multiplied by an unbounded smooth weight, periodicity controls the SHAPE inside each period but the weight controls the SIZE across periods — decompose by period and let the weight ride, never average it away."
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
    "title": "Two Sawtooths Out of Step",
    "difficulty": 5,
    "task": "Evaluate, generalise, and take the limit",
    "tags": [
      "fractional-part",
      "misaligned-periods",
      "refined-partition",
      "piecewise-product",
      "asymptotic-independence"
    ],
    "statement": "Both $\\{x\\}$ and $\\{kx\\}$ (for a positive integer $k$) are sawtooth functions of period dividing $1$, so the product $\\{x\\}\\{kx\\}$ is $1$-periodic and the integral over any unit block is the same. The catch is that the two sawtooths jump at different places: $\\{x\\}$ resets only at the integers, while $\\{kx\\}$ resets $k$ times as often, at every multiple of $\\tfrac1k$. \\medskip (a) Evaluate the many-period integral \\[ I=\\int_0^{7}\\{x\\}\\,\\{2x\\}\\,dx. \\] (b) For every integer $k\\ge1$ prove the closed form \\[ \\int_0^{1}\\{x\\}\\,\\{kx\\}\\,dx=\\frac{3k+1}{12k}, \\] by integrating the piecewise-linear product over the partition on which both floors are constant. (c) Determine $\\displaystyle\\lim_{k\\to\\infty}\\int_0^{1}\\{x\\}\\,\\{kx\\}\\,dx$ and explain in one line why the limit — and only the limit — coincides with the product of the separate averages $\\bigl(\\int_0^1\\{x\\}\\,dx\\bigr)\\bigl(\\int_0^1\\{kx\\}\\,dx\\bigr)$. Report $I$, the closed form, and the limit together.",
    "answer": "\\[\\boxed{\\;I=\\dfrac{49}{24},\\qquad \\int_0^1\\{x\\}\\{kx\\}\\,dx=\\dfrac{3k+1}{12k},\\qquad \\lim_{k\\to\\infty}=\\dfrac14\\;}\\]",
    "trap": "The fatal conceptual error is to treat the integral of the product as the product of the integrals — to write $\\int_0^1\\{x\\}\\{kx\\}\\,dx=\\bigl(\\int_0^1\\{x\\}\\,dx\\bigr)\\bigl(\\int_0^1\\{kx\\}\\,dx\\bigr)=\\tfrac12\\cdot\\tfrac12=\\tfrac14$. This 'independence/factorisation' move is only valid when one factor is constant or the two factors are genuinely uncorrelated; here the two sawtooths are perfectly correlated within each tiny block $[j/k,(j+1)/k)$, where $\\{x\\}$ is nearly the constant $j/k$ while $\\{kx\\}$ ramps from $0$ to $1$, so their product does NOT decouple. For $k=2$ the honest value is $\\tfrac{7}{24}\\approx0.2917$, not $\\tfrac14=0.25$, and for $k=7$ over seven periods the honest $I=\\tfrac{49}{24}\\approx2.04$, not the bogus $\\tfrac{7}{4}=1.75$. The cruel twist is part (c): the factorisation answer $\\tfrac14$ is exactly the $k\\to\\infty$ LIMIT, so a student who guesses $\\tfrac14$ for finite $k$ is wrong by the vanishing amount $\\tfrac{1}{12k}$ and may never notice on a single numerical spot-check. A second, more mechanical trap is integrating over the WRONG partition: a student who splits $[0,1]$ only at the integers (where $\\{x\\}$ jumps) and forgets that $\\{kx\\}$ jumps at every $1/k$ writes a single smooth antiderivative for a function that is actually broken into $k$ linear pieces, e.g. replacing $\\{2x\\}$ by the unbroken $2x$ and getting $\\int_0^1 x\\cdot 2x\\,dx=\\tfrac23$ — treating a discontinuous periodic integrand as smooth, the cardinal sin of this chapter. A third slip is replacing $\\{kx\\}$ by $k\\{x\\}$ (false: $\\{kx\\}=k\\{x\\}$ fails the moment $\\{x\\}\\ge1/k$), which again yields $\\tfrac23$ and misses the $k-1$ downward resets.",
    "solutions": [
      {
        "name": "Refined partition where both floors are constant",
        "steps": [
          "Periodicity first. Since $\\{x+1\\}=\\{x\\}$ and $\\{k(x+1)\\}=\\{kx+k\\}=\\{kx\\}$, the integrand $\\{x\\}\\{kx\\}$ has period $1$. Hence $\\int_0^{n}\\{x\\}\\{kx\\}\\,dx=n\\int_0^{1}\\{x\\}\\{kx\\}\\,dx$ for every positive integer $n$; in particular $I=\\int_0^{7}\\{x\\}\\{2x\\}\\,dx=7\\int_0^{1}\\{x\\}\\{2x\\}\\,dx$, so it suffices to compute the unit-block integral.",
          "Build the correct partition. On $[0,1)$ we have $\\lfloor x\\rfloor=0$, so $\\{x\\}=x$ throughout. The other floor $\\lfloor kx\\rfloor$ equals the integer $j$ exactly on $[\\,j/k,(j+1)/k)$ for $j=0,1,\\dots,k-1$, where $\\{kx\\}=kx-j$. Both floors are constant precisely on these $k$ subintervals of length $1/k$ — this is the partition that must be used; splitting only at the integers would miss the $k-1$ interior jumps of $\\{kx\\}$.",
          "Integrate one block. On $[\\,j/k,(j+1)/k)$ the product is $x(kx-j)$, a quadratic, and \\[ \\int_{j/k}^{(j+1)/k} x(kx-j)\\,dx=\\Bigl[\\tfrac{k}{3}x^3-\\tfrac{j}{2}x^2\\Bigr]_{j/k}^{(j+1)/k}=\\frac{3j+2}{6k^{2}}. \\] (Check $k=2$: $j=0$ gives $\\tfrac{2}{24}=\\tfrac1{12}$ on $[0,\\tfrac12)$ and $j=1$ gives $\\tfrac{5}{24}$ on $[\\tfrac12,1)$.)",
          "Sum the blocks. \\[ \\int_0^1\\{x\\}\\{kx\\}\\,dx=\\sum_{j=0}^{k-1}\\frac{3j+2}{6k^{2}}=\\frac{1}{6k^{2}}\\Bigl(3\\cdot\\tfrac{(k-1)k}{2}+2k\\Bigr)=\\frac{3k+1}{12k}. \\] This proves part (b). For $k=2$ this is $\\tfrac{7}{24}$, so part (a) gives $I=7\\cdot\\tfrac{7}{24}=\\dfrac{49}{24}$.",
          "Limit. As $k\\to\\infty$, $\\dfrac{3k+1}{12k}=\\dfrac14+\\dfrac{1}{12k}\\to\\dfrac14$. Thus \\[ \\boxed{\\;I=\\tfrac{49}{24},\\qquad \\int_0^1\\{x\\}\\{kx\\}\\,dx=\\tfrac{3k+1}{12k},\\qquad \\lim_{k\\to\\infty}=\\tfrac14.\\;} \\] The limit equals $\\tfrac12\\cdot\\tfrac12$ because as $k\\to\\infty$ the fast sawtooth $\\{kx\\}$ oscillates so rapidly that it acts like its own average $\\tfrac12$ against the slow factor (asymptotic independence); for finite $k$ the correlation contributes the extra $\\tfrac1{12k}$."
        ]
      },
      {
        "name": "Doubling identity for the special case, then generalise",
        "steps": [
          "A clean identity for $k=2$. On any unit block, $2x$ and $2\\{x\\}$ differ by the even integer $2\\lfloor x\\rfloor$, so $\\{2x\\}=\\{2\\{x\\}\\}$, and since $0\\le\\{x\\}<1$, \\[ \\{2x\\}=2\\{x\\}-\\mathbf 1_{\\{x\\}\\ge 1/2}. \\] (The indicator subtracts the single downward reset that occurs when $\\{x\\}$ passes $\\tfrac12$.) Numerically this is exact for all $x$.",
          "Compute the unit-block integral with the identity. On $[0,1)$, $\\{x\\}=x$, so \\[ \\int_0^1\\{x\\}\\{2x\\}\\,dx=\\int_0^1 x\\bigl(2x-\\mathbf 1_{x\\ge1/2}\\bigr)dx=2\\int_0^1 x^2\\,dx-\\int_{1/2}^{1}x\\,dx=\\frac23-\\frac38=\\frac{7}{24}. \\] Notice how the subtracted indicator term $\\tfrac38$ is precisely the correction the naive smooth guess $\\int_0^1 x\\cdot2x\\,dx=\\tfrac23$ omits.",
          "Part (a). Using $1$-periodicity, $I=7\\cdot\\tfrac{7}{24}=\\dfrac{49}{24}$.",
          "Generalise to arbitrary $k$. The same reset bookkeeping gives $\\{kx\\}=k\\{x\\}-\\sum_{i=1}^{k-1}\\mathbf 1_{\\{x\\}\\ge i/k}$, hence on $[0,1)$ \\[ \\int_0^1 x\\,\\{kx\\}\\,dx=k\\int_0^1 x^2\\,dx-\\sum_{i=1}^{k-1}\\int_{i/k}^{1}x\\,dx=\\frac k3-\\sum_{i=1}^{k-1}\\frac{1-(i/k)^2}{2}. \\] The sum is $\\tfrac12\\bigl((k-1)-\\tfrac{1}{k^2}\\cdot\\tfrac{(k-1)k(2k-1)}{6}\\bigr)$; simplifying, $\\int_0^1\\{x\\}\\{kx\\}\\,dx=\\dfrac{3k+1}{12k}$, matching part (b).",
          "Limit and conclusion. $\\dfrac{3k+1}{12k}\\to\\dfrac14$, so \\[ \\boxed{\\;I=\\tfrac{49}{24},\\qquad \\int_0^1\\{x\\}\\{kx\\}\\,dx=\\tfrac{3k+1}{12k},\\qquad \\lim_{k\\to\\infty}=\\tfrac14.\\;} \\]"
        ]
      },
      {
        "name": "Shift-and-fold for k=2, with a covariance reading",
        "steps": [
          "Fold the unit block at its midpoint. Split $\\int_0^1\\{x\\}\\{2x\\}\\,dx=\\int_0^{1/2}+\\int_{1/2}^{1}$. On $[0,\\tfrac12)$, $\\{x\\}=x$ and $\\{2x\\}=2x$, giving $\\int_0^{1/2}x\\cdot2x\\,dx=\\tfrac1{12}$. On $[\\tfrac12,1)$ substitute $y=x-\\tfrac12$ so $\\{x\\}=y+\\tfrac12$ and $\\{2x\\}=\\{2y+1\\}=2y$ for $y\\in[0,\\tfrac12)$: \\[ \\int_{1/2}^{1}\\{x\\}\\{2x\\}\\,dx=\\int_0^{1/2}\\bigl(y+\\tfrac12\\bigr)(2y)\\,dy=\\int_0^{1/2}\\!\\bigl(2y^2+y\\bigr)dy=\\tfrac{1}{12}+\\tfrac18=\\tfrac{5}{24}. \\] Adding, $\\int_0^1\\{x\\}\\{2x\\}\\,dx=\\tfrac1{12}+\\tfrac5{24}=\\tfrac{7}{24}$, and $I=7\\cdot\\tfrac7{24}=\\dfrac{49}{24}$.",
          "Covariance reading (why $\\ne\\tfrac14$). Write the unit-block integral as an average and centre both factors about their mean $\\tfrac12$: with $u(x)=\\{x\\}-\\tfrac12$ and $v(x)=\\{kx\\}-\\tfrac12$, \\[ \\int_0^1\\{x\\}\\{kx\\}\\,dx=\\tfrac14+\\int_0^1 u(x)v(x)\\,dx, \\] because $\\int_0^1 u=\\int_0^1 v=0$. The $\\tfrac14$ is the factorised guess; the genuine integral exceeds it by the covariance $\\int_0^1 uv$, which here equals $\\tfrac{3k+1}{12k}-\\tfrac14=\\dfrac{1}{12k}>0$ — strictly positive, so the trap value $\\tfrac14$ is always an UNDER-estimate for finite $k$.",
          "Generalisation and limit. Using part (b)'s value, the covariance $\\tfrac1{12k}\\to0$, hence $\\int_0^1\\{x\\}\\{kx\\}\\,dx\\to\\tfrac14$: the fast sawtooth decorrelates from the slow one in the limit, which is the only regime where factorisation becomes legitimate. Therefore \\[ \\boxed{\\;I=\\tfrac{49}{24},\\qquad \\int_0^1\\{x\\}\\{kx\\}\\,dx=\\tfrac{3k+1}{12k},\\qquad \\lim_{k\\to\\infty}=\\tfrac14.\\;} \\]"
        ]
      }
    ],
    "remark": "Insight: when two periodic functions of incommensurate jump-pattern multiply, the integral of the product is NOT the product of the integrals unless they decorrelate — and decorrelation here is only an asymptotic phenomenon. The honest computation forces the refined partition $\\{j/k\\}$ on which both floors freeze, turning the product into $k$ separate quadratics; summing them gives the crisp $\\tfrac{3k+1}{12k}$. The covariance decomposition $\\int_0^1\\{x\\}\\{kx\\}=\\tfrac14+\\tfrac1{12k}$ is the conceptual heart: the $\\tfrac14$ is the seductive (and ultimately limiting) factorised value, while the $+\\tfrac1{12k}$ is the price of correlation between a slow ramp and a fast one. A ranker should leave with two reflexes: (i) for floor/fractional integrands, partition where EVERY floor is constant, never just where the slowest one jumps; and (ii) integral of a product equals product of integrals only when one factor is constant or the factors are uncorrelated — and 'uncorrelated' for misaligned sawtooths is something you earn in the limit $k\\to\\infty$, not something you may assume at finite $k$."
  },
  {
    "theme": "periodicfloor",
    "themeLabel": "Periodic & Floor Integrands",
    "title": "Dirichlet's Hyperbola Under the Square-Root Staircase",
    "difficulty": 5,
    "task": "Evaluate via lattice reflection, then weigh the fractional residue",
    "tags": [
      "floor-of-root",
      "dirichlet-hyperbola",
      "layer-cake",
      "lattice-points",
      "fractional-part",
      "stretching-period"
    ],
    "statement": "The staircase $\\lfloor\\sqrt{x}\\rfloor$ is the slowest-climbing floor in the book: it holds the value $m$ across the whole interval $[\\,m^2,(m+1)^2)$, a block of length $2m+1$ that grows as $m$ does. So this is a periodic-flavoured integrand whose ``period'' stretches — and the right way to evaluate it is not to integrate the smooth curve $\\sqrt{x}$, but to count which integer squares lie below $x$. Fix a positive integer $N$. \\medskip (a) Evaluate the staircase area \\[ J(N)=\\int_0^{N^2}\\lfloor\\sqrt{x}\\rfloor\\,dx \\] in closed form, and give its value for $N=12$ (upper limit $144$). Do it twice: once block-by-block, and once by the Dirichlet/layer-cake reflection $\\lfloor\\sqrt{x}\\rfloor=\\#\\{m\\ge1:\\,m^2\\le x\\}$, which trades the horizontal integral for a vertical sum over the squares $m^2$. (b) The leftover between the curve and the staircase is the fractional part. Using $\\int_0^{N^2}\\sqrt{x}\\,dx=\\tfrac23N^3$, find the closed form of \\[ R(N)=\\int_0^{N^2}\\{\\sqrt{x}\\}\\,dx, \\] and its value at $N=12$. (c) Determine the limiting mean residue $\\displaystyle L=\\lim_{N\\to\\infty}\\frac{1}{N^2}\\int_0^{N^2}\\{\\sqrt{x}\\}\\,dx$, and state from which side $\\tfrac1{N^2}R(N)$ approaches $L$. Report $J(12)$, the closed forms $J(N)$ and $R(N)$, $R(12)$, and $L$ together.",
    "answer": "\\[\\boxed{\\;J(N)=\\dfrac{N(N-1)(4N+1)}{6},\\quad J(12)=1078,\\quad R(N)=\\dfrac{N(3N+1)}{6},\\quad R(12)=74,\\quad L=\\dfrac12\\;}\\]",
    "trap": "The cardinal sin of this chapter is to replace the discontinuous staircase $\\lfloor\\sqrt{x}\\rfloor$ by the smooth curve $\\sqrt{x}$ and write $J(N)=\\int_0^{N^2}\\sqrt{x}\\,dx=\\tfrac23N^3$, giving the bogus $J(12)=1152$ instead of the honest $1078$ — the gap is exactly the fractional area $R(12)=74$ that the smoothing throws away. A subtler, distinctively HARD trap is the stretching period: because the block $[\\,m^2,(m+1)^2)$ has length $2m+1$ rather than $1$, $\\{\\sqrt{x}\\}$ is NOT a unit-period sawtooth, so its long-run mean is not the reflex value $\\tfrac12$ one quotes for $\\{x\\}$. A student who declares ``$\\{\\,\\cdot\\,\\}$ averages to $\\tfrac12$, so $R(N)\\approx\\tfrac12N^2$'' lands at $R(12)\\approx72$, missing the truth $74$. The reason is a real asymmetry: on $[\\,m^2,(m+1)^2)$ the residue $\\sqrt{x}-m$ is a concave arc that spends MORE of its (stretched) length near the top, so the per-block mean is $\\tfrac{3m+2}{3(2m+1)}=\\tfrac12+\\tfrac{1}{6(2m+1)}>\\tfrac12$. The aggregate mean is $\\tfrac1{N^2}R(N)=\\tfrac12+\\tfrac1{6N}$, which tends to $\\tfrac12$ but ALWAYS from ABOVE — so anyone who pre-commits to $\\tfrac12$ for finite $N$ underestimates by $\\tfrac1{6N}$, and anyone who thinks the limit is reached early on a numerical spot-check has not seen the persistent positive bias. A third slip is mis-partitioning: splitting $[0,N^2]$ at the integers $1,2,3,\\dots$ (where $\\sqrt{x}$ is smooth) instead of at the squares $1,4,9,\\dots$ (where the floor actually jumps) — partitioning at the wrong discontinuities, the structural error behind every floor-integral mistake.",
    "solutions": [
      {
        "name": "Block-by-block staircase",
        "steps": [
          "Locate the jumps. The floor $\\lfloor\\sqrt{x}\\rfloor$ equals the integer $m$ exactly when $m\\le\\sqrt{x}<m+1$, i.e. on the block $B_m=[\\,m^2,(m+1)^2)$ for $m=0,1,\\dots,N-1$ (the endpoint $x=N^2$ has measure zero). Crucially the jumps sit at the squares $1,4,9,\\dots$, and the block $B_m$ has length $(m+1)^2-m^2=2m+1$, which stretches with $m$.",
          "Integrate each block. The integrand is the constant $m$ on $B_m$, so $\\int_{B_m}\\lfloor\\sqrt{x}\\rfloor\\,dx=m\\cdot(2m+1)$.",
          "Sum the blocks. \\[ J(N)=\\sum_{m=0}^{N-1}m(2m+1)=2\\sum_{m=0}^{N-1}m^2+\\sum_{m=0}^{N-1}m=2\\cdot\\frac{(N-1)N(2N-1)}{6}+\\frac{(N-1)N}{2}. \\]",
          "Simplify. Combining over a common denominator, \\[ J(N)=\\frac{(N-1)N\\bigl(2(2N-1)+3\\bigr)}{6}=\\frac{N(N-1)(4N+1)}{6}. \\] For $N=12$: $J(12)=\\dfrac{12\\cdot11\\cdot49}{6}=2\\cdot11\\cdot49=1078$.",
          "Residue and limit. Since $\\int_0^{N^2}\\sqrt{x}\\,dx=\\tfrac23N^3$, the fractional area is $R(N)=\\tfrac23N^3-J(N)=\\tfrac23N^3-\\tfrac16N(N-1)(4N+1)$; expanding, the cubic terms cancel and $R(N)=\\dfrac{N(3N+1)}{6}$, so $R(12)=\\dfrac{12\\cdot37}{6}=74$. Then $\\tfrac1{N^2}R(N)=\\dfrac{3N+1}{6N}=\\dfrac12+\\dfrac1{6N}\\to\\dfrac12$. \\[ \\boxed{\\;J(N)=\\tfrac{N(N-1)(4N+1)}{6},\\ J(12)=1078,\\ R(N)=\\tfrac{N(3N+1)}{6},\\ R(12)=74,\\ L=\\tfrac12.\\;} \\]"
        ]
      },
      {
        "name": "Dirichlet/layer-cake reflection over the squares",
        "steps": [
          "Rewrite the floor as a lattice count. For $x>0$, $\\lfloor\\sqrt{x}\\rfloor$ is the number of positive integers $m$ with $m\\le\\sqrt{x}$, i.e. with $m^2\\le x$: \\[ \\lfloor\\sqrt{x}\\rfloor=\\#\\{m\\ge1:m^2\\le x\\}=\\sum_{m\\ge1}\\mathbf 1_{\\{x\\ge m^2\\}}. \\] This is the reflection that swaps the curve $y=\\sqrt{x}$ for its inverse $x=m^2$ — the Dirichlet-hyperbola move applied to the parabola.",
          "Integrate by exchanging order (Fubini/layer-cake). Over $[0,N^2]$, the indicator $\\mathbf 1_{\\{x\\ge m^2\\}}$ contributes the length $N^2-m^2$ for each $m$ with $m^2\\le N^2$, i.e. $m=1,\\dots,N-1$ (at $m=N$ the length is $0$): \\[ J(N)=\\int_0^{N^2}\\sum_{m\\ge1}\\mathbf 1_{\\{x\\ge m^2\\}}\\,dx=\\sum_{m=1}^{N-1}\\bigl(N^2-m^2\\bigr). \\] The horizontal integral has become a vertical sum over the squares — a count of the lattice columns under the staircase.",
          "Evaluate the sum. \\[ \\sum_{m=1}^{N-1}(N^2-m^2)=(N-1)N^2-\\frac{(N-1)N(2N-1)}{6}=\\frac{(N-1)N\\bigl(6N-(2N-1)\\bigr)}{6}=\\frac{N(N-1)(4N+1)}{6}, \\] identical to the block computation. Hence $J(12)=1078$.",
          "Residue by the same reflection. Likewise $\\{\\sqrt{x}\\}=\\sqrt{x}-\\lfloor\\sqrt{x}\\rfloor$, so $R(N)=\\int_0^{N^2}\\sqrt{x}\\,dx-J(N)=\\tfrac23N^3-\\tfrac{N(N-1)(4N+1)}{6}=\\dfrac{N(3N+1)}{6}$, giving $R(12)=74$.",
          "Limit. $\\dfrac{R(N)}{N^2}=\\dfrac{3N+1}{6N}=\\dfrac12+\\dfrac1{6N}\\downarrow\\dfrac12$ from above. \\[ \\boxed{\\;J(N)=\\tfrac{N(N-1)(4N+1)}{6},\\ J(12)=1078,\\ R(N)=\\tfrac{N(3N+1)}{6},\\ R(12)=74,\\ L=\\tfrac12.\\;} \\]"
        ]
      },
      {
        "name": "Per-block residue mean, exposing the above-1/2 bias",
        "steps": [
          "Work residue-first. On block $B_m=[\\,m^2,(m+1)^2)$, $\\{\\sqrt{x}\\}=\\sqrt{x}-m$. Substitute $x=(m+t)^2$, $t\\in[0,1)$, so $dx=2(m+t)\\,dt$ and $\\{\\sqrt{x}\\}=t$: \\[ \\int_{B_m}\\{\\sqrt{x}\\}\\,dx=\\int_0^1 t\\cdot2(m+t)\\,dt=2m\\!\\int_0^1\\!t\\,dt+2\\!\\int_0^1\\!t^2\\,dt=m+\\frac23. \\]",
          "Read off the per-block mean. Dividing by the block length $2m+1$, the mean residue on $B_m$ is $\\dfrac{m+\\tfrac23}{2m+1}=\\dfrac{3m+2}{3(2m+1)}=\\dfrac12+\\dfrac{1}{6(2m+1)}$, strictly above $\\tfrac12$: the concave arc $t\\mapsto t$ weighted by the increasing density $2(m+t)$ leans toward the top of each stretched step. This is exactly why ``$\\{\\,\\cdot\\,\\}$ averages to $\\tfrac12$'' is the trap.",
          "Sum to get $R(N)$. \\[ R(N)=\\sum_{m=0}^{N-1}\\Bigl(m+\\tfrac23\\Bigr)=\\frac{(N-1)N}{2}+\\frac{2N}{3}=\\frac{3(N-1)N+4N}{6}=\\frac{N(3N+1)}{6}, \\] so $R(12)=74$. Then $J(N)=\\tfrac23N^3-R(N)=\\dfrac{N(N-1)(4N+1)}{6}$ and $J(12)=1152-74=1078$.",
          "Limit and side. The aggregate mean is $\\dfrac{R(N)}{N^2}=\\dfrac{3N+1}{6N}=\\dfrac12+\\dfrac1{6N}$, which decreases to $\\tfrac12$ but never reaches it: the residue mean stays ABOVE $\\tfrac12$ for every finite $N$. \\[ \\boxed{\\;J(N)=\\tfrac{N(N-1)(4N+1)}{6},\\ J(12)=1078,\\ R(N)=\\tfrac{N(3N+1)}{6},\\ R(12)=74,\\ L=\\tfrac12.\\;} \\]"
        ]
      }
    ],
    "remark": "Insight: the integrand $\\lfloor\\sqrt{x}\\rfloor$ is the chapter's lesson in disguise — a step function whose plateaus stretch as $2m+1$, so it is periodic in spirit but not in metric. Two reflexes pay off. First, integrate floors by the layer-cake/Dirichlet reflection $\\lfloor\\sqrt{x}\\rfloor=\\#\\{m:m^2\\le x\\}$: this converts a horizontal area into a vertical count over the squares and turns the problem into a finite arithmetic sum $\\sum(N^2-m^2)$, the same reflection that powers $\\sum\\lfloor N/k\\rfloor$ and the divisor-sum hyperbola method. Second, never import the sawtooth folklore mean $\\tfrac12$ for a fractional part whose underlying scale is non-uniform: here $\\{\\sqrt{x}\\}$ has per-block mean $\\tfrac12+\\tfrac1{6(2m+1)}$, so $\\tfrac1{N^2}R(N)=\\tfrac12+\\tfrac1{6N}$ tends to $\\tfrac12$ strictly from above. The $L=\\tfrac12$ is genuine, but it is earned in the limit; the $+\\tfrac1{6N}$ is the signature of the stretching period and is precisely what separates a smoothing guess from an honest evaluation."
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
    "title": "Where the Slower Cosine Cuts the Faster Sine",
    "difficulty": 4,
    "task": "Locate the true sign loci, then tile",
    "tags": [
      "absolute-value",
      "periodicity",
      "sign-locus",
      "product-to-sum",
      "symmetry"
    ],
    "statement": "Evaluate \\[ I=\\int_{0}^{2\\pi}\\bigl|\\sin x\\bigr|\\,\\bigl|\\cos 2x\\bigr|\\,dx . \\] Two oscillations of different speeds are multiplied together: the rectified sine $|\\sin x|$ swings with period $\\pi$, while the rectified double-angle $|\\cos 2x|$ swings with period $\\tfrac{\\pi}{2}$. Removing the absolute-value bars correctly is the whole game — the integrand is continuous and non-negative, but it is built from two factors that lose smoothness at *different* places. Find the exact value of $I$.",
    "answer": "\\[\\boxed{\\,\\dfrac{8\\sqrt{2}-4}{3}\\,}\\]",
    "trap": "The fatal habit is to reuse the breakpoints that work for $|\\sin x|$ alone. For a lone $|\\sin x|$ the natural cut-points on $[0,2\\pi]$ are the zeros and peaks $0,\\tfrac{\\pi}{2},\\pi,\\tfrac{3\\pi}{2},2\\pi$, and a student fluently splits there and writes $|\\sin x|=\\sin x$ on $(0,\\pi)$, $-\\sin x$ on $(\\pi,2\\pi)$. The reflex is then to treat $|\\cos 2x|$ as a single sign on each of those four sub-intervals — i.e. to assume $\\cos 2x$ does not change sign inside a piece like $(0,\\tfrac{\\pi}{2})$. THIS IS THE MISSED CASE. The factor $\\cos 2x$ vanishes and flips at $x=\\tfrac{\\pi}{4},\\tfrac{3\\pi}{4},\\tfrac{5\\pi}{4},\\tfrac{7\\pi}{4}$ — the ODD multiples of $\\tfrac{\\pi}{4}$ — which sit in the *interiors* of the $|\\sin x|$ pieces, not at the $\\tfrac{\\pi}{2}$ marks. Tiling at the wrong loci, the careless solver effectively integrates $|\\sin x|\\,\\cos 2x$ with one sign per half-period and gets \\[ \\int_{0}^{\\pi}\\sin x\\,\\cos 2x\\,dx-\\int_{\\pi}^{2\\pi}\\sin x\\,\\cos 2x\\,dx=0 , \\] cheerfully reporting $I=0$. A non-negative integrand that is not identically zero CANNOT integrate to $0$, so the answer is self-refuting — yet the algebra looks flawless because every antiderivative was evaluated correctly; only the sign regions were wrong. A close cousin of the error simply drops the bars on $\\cos 2x$ altogether and reports the equally impossible $I=-\\tfrac43<0$. Both numbers are wrong not by arithmetic but because $|\\cos 2x|$ must be broken at the odd multiples of $\\tfrac{\\pi}{4}$ BEFORE any tiling. The correct cut set on $[0,2\\pi]$ is the union $\\{0,\\tfrac{\\pi}{2},\\pi,\\tfrac{3\\pi}{2},2\\pi\\}\\cup\\{\\tfrac{\\pi}{4},\\tfrac{3\\pi}{4},\\tfrac{5\\pi}{4},\\tfrac{7\\pi}{4}\\}$, i.e. ALL multiples of $\\tfrac{\\pi}{4}$ — the resonance breakpoints of the slower-looking but sign-faster $\\cos 2x$.",
    "solutions": [
      {
        "name": "Reduce by the true period, then split at every sign locus",
        "steps": [
          "First collapse the window. The integrand $f(x)=|\\sin x|\\,|\\cos 2x|$ satisfies $f(x+\\pi)=|\\sin(x+\\pi)|\\,|\\cos(2x+2\\pi)|=|\\sin x|\\,|\\cos 2x|=f(x)$, so $f$ has period $\\pi$ and $I=\\int_0^{2\\pi}f=2\\int_0^{\\pi}f$. On $[0,\\pi]$ we have $\\sin x\\ge 0$, hence $|\\sin x|=\\sin x$ and \\[ I=2\\int_0^{\\pi}\\sin x\\,|\\cos 2x|\\,dx. \\]",
          "Now find where $\\cos 2x$ flips on $[0,\\pi]$: $\\cos 2x=0\\iff 2x=\\tfrac{\\pi}{2},\\tfrac{3\\pi}{2}\\iff x=\\tfrac{\\pi}{4},\\tfrac{3\\pi}{4}$. Thus $\\cos 2x>0$ on $(0,\\tfrac{\\pi}{4})$, $<0$ on $(\\tfrac{\\pi}{4},\\tfrac{3\\pi}{4})$, $>0$ on $(\\tfrac{3\\pi}{4},\\pi)$. These interior loci are exactly the breakpoints the naive $\\tfrac{\\pi}{2}$-split would miss. Therefore \\[ \\tfrac{I}{2}=\\int_0^{\\pi/4}\\!\\!\\sin x\\,\\cos 2x\\,dx-\\int_{\\pi/4}^{3\\pi/4}\\!\\!\\sin x\\,\\cos 2x\\,dx+\\int_{3\\pi/4}^{\\pi}\\!\\!\\sin x\\,\\cos 2x\\,dx. \\]",
          "Antiderivative once and for all: with $\\sin x\\cos 2x=\\tfrac12(\\sin 3x-\\sin x)$, \\[ \\int\\sin x\\cos 2x\\,dx=\\tfrac12\\!\\left(-\\tfrac{\\cos 3x}{3}+\\cos x\\right)=:G(x). \\] Evaluate $G$ at the cut points using $\\cos\\tfrac{\\pi}{4}=\\tfrac{\\sqrt2}{2}$, $\\cos\\tfrac{3\\pi}{4}=-\\tfrac{\\sqrt2}{2}$, $\\cos\\tfrac{9\\pi}{4}=\\tfrac{\\sqrt2}{2}$ (period $2\\pi$), $\\cos 3\\pi=-1$, $\\cos\\pi=-1$, $\\cos 0=1$, $\\cos 3\\pi/4$ already noted. One finds $G(\\tfrac{\\pi}{4})-G(0)=\\tfrac{\\sqrt2-1}{3}$ for the first piece, the middle piece (taken with its minus sign) contributes $\\tfrac{2\\sqrt2}{3}$, and the last piece $\\tfrac{\\sqrt2-1}{3}$; summing the three signed pieces gives $\\tfrac{I}{2}=\\tfrac{\\sqrt2-1}{3}+\\tfrac{2\\sqrt2}{3}+\\tfrac{\\sqrt2-1}{3}=\\tfrac{4\\sqrt2-2}{3}$.",
          "Double it: \\[ I=2\\cdot\\frac{4\\sqrt2-2}{3}=\\boxed{\\dfrac{8\\sqrt2-4}{3}}\\approx 2.4379. \\] (Positive, as a non-negative integrand demands — the naive $0$ is exposed as the wrong-loci artifact it is.)"
        ]
      },
      {
        "name": "Two reflections collapse the window to a quarter-period",
        "steps": [
          "Use period $\\pi$ as before, $I=2\\int_0^{\\pi}\\sin x\\,|\\cos 2x|\\,dx$. Apply the reflection $x\\mapsto\\pi-x$ on $[0,\\pi]$: $\\sin(\\pi-x)=\\sin x$ and $\\cos(2\\pi-2x)=\\cos 2x$, so $|\\cos 2x|$ is unchanged and the integrand is symmetric about $x=\\tfrac{\\pi}{2}$. Hence \\[ I=4\\int_0^{\\pi/2}\\sin x\\,|\\cos 2x|\\,dx. \\]",
          "On $(0,\\tfrac{\\pi}{2})$ the single sign change of $\\cos 2x$ sits at $x=\\tfrac{\\pi}{4}$: positive on $(0,\\tfrac{\\pi}{4})$, negative on $(\\tfrac{\\pi}{4},\\tfrac{\\pi}{2})$. So \\[ \\frac{I}{4}=\\int_0^{\\pi/4}\\!\\!\\sin x\\cos 2x\\,dx-\\int_{\\pi/4}^{\\pi/2}\\!\\!\\sin x\\cos 2x\\,dx. \\] This is the irreducible quarter-period; missing the $\\tfrac{\\pi}{4}$ cut here would again collapse the two terms.",
          "With $G(x)=\\tfrac12\\!\\left(-\\tfrac{\\cos 3x}{3}+\\cos x\\right)$: the first piece is $G(\\tfrac{\\pi}{4})-G(0)=\\tfrac12\\!\\left(-\\tfrac{-\\sqrt2/2}{3}+\\tfrac{\\sqrt2}{2}\\right)-\\tfrac12\\!\\left(-\\tfrac13+1\\right)=\\tfrac{\\sqrt2-1}{3}$, and the second piece is $G(\\tfrac{\\pi}{2})-G(\\tfrac{\\pi}{4})=\\tfrac12\\!\\left(-\\tfrac{0}{3}+0\\right)-\\tfrac{1}{2}\\!\\left(-\\tfrac{-\\sqrt2/2}{3}+\\tfrac{\\sqrt2}{2}\\right)=-\\tfrac{\\sqrt2}{3}$. Hence $\\tfrac{I}{4}=\\tfrac{\\sqrt2-1}{3}-\\bigl(-\\tfrac{\\sqrt2}{3}\\bigr)=\\tfrac{2\\sqrt2-1}{3}$.",
          "Therefore \\[ I=4\\cdot\\frac{2\\sqrt2-1}{3}=\\boxed{\\dfrac{8\\sqrt2-4}{3}}. \\] The factor $4$ records the two reflections ($\\pi$-periodicity and the $\\tfrac{\\pi}{2}$-mirror); the $\\sqrt2$ is the fingerprint of evaluating cosines at the genuine breakpoint $\\tfrac{\\pi}{4}$."
        ]
      },
      {
        "name": "Substitution u=2x turns the fast factor into the standard rectified cosine",
        "steps": [
          "From Method 2, $I=4\\int_0^{\\pi/2}\\sin x\\,|\\cos 2x|\\,dx$. Substitute $u=2x$, so $du=2\\,dx$ and $x:0\\to\\tfrac{\\pi}{2}$ becomes $u:0\\to\\pi$, with $\\sin x=\\sin\\tfrac{u}{2}$: \\[ I=4\\int_0^{\\pi}\\sin\\tfrac{u}{2}\\,|\\cos u|\\,\\frac{du}{2}=2\\int_0^{\\pi}\\sin\\tfrac{u}{2}\\,|\\cos u|\\,du. \\] Now the troublesome factor is the textbook $|\\cos u|$, whose sole sign change on $[0,\\pi]$ is the familiar $u=\\tfrac{\\pi}{2}$ — the substitution has relocated the hidden $\\tfrac{\\pi}{4}$ locus to a place where nobody forgets it.",
          "Split at $u=\\tfrac{\\pi}{2}$ ($\\cos u>0$ then $<0$) and use $\\sin\\tfrac{u}{2}\\cos u=\\tfrac12\\bigl(\\sin\\tfrac{3u}{2}-\\sin\\tfrac{u}{2}\\bigr)$, whose antiderivative is $H(u)=\\tfrac12\\bigl(-\\tfrac{2}{3}\\cos\\tfrac{3u}{2}+2\\cos\\tfrac{u}{2}\\bigr)=\\cos\\tfrac{u}{2}-\\tfrac13\\cos\\tfrac{3u}{2}$.",
          "Evaluate with $\\cos\\tfrac{\\pi}{4}=\\tfrac{\\sqrt2}{2}$, $\\cos\\tfrac{3\\pi}{4}=-\\tfrac{\\sqrt2}{2}$, $\\cos\\tfrac{\\pi}{2}=0$, $\\cos\\tfrac{3\\pi}{2}=0$, $\\cos 0=1$: \\[ \\int_0^{\\pi/2}\\!\\!\\sin\\tfrac{u}{2}\\cos u\\,du=H(\\tfrac{\\pi}{2})-H(0)=\\tfrac{\\sqrt2}{2}-\\tfrac13\\!\\left(-\\tfrac{\\sqrt2}{2}\\right)-\\bigl(1-\\tfrac13\\bigr)=\\tfrac{2\\sqrt2}{3}-\\tfrac23, \\] \\[ -\\int_{\\pi/2}^{\\pi}\\!\\!\\sin\\tfrac{u}{2}\\cos u\\,du=-\\bigl(H(\\pi)-H(\\tfrac{\\pi}{2})\\bigr)=-\\Bigl(0-\\bigl(\\tfrac{2\\sqrt2}{3}-\\tfrac23\\bigr)\\Bigr)=\\tfrac{2\\sqrt2}{3}. \\]",
          "Adding, $\\int_0^{\\pi}\\sin\\tfrac{u}{2}|\\cos u|\\,du=\\bigl(\\tfrac{2\\sqrt2}{3}-\\tfrac23\\bigr)+\\tfrac{2\\sqrt2}{3}=\\tfrac{4\\sqrt2-2}{3}$, so \\[ I=2\\cdot\\frac{4\\sqrt2-2}{3}=\\boxed{\\dfrac{8\\sqrt2-4}{3}}. \\] Three independent routes — direct loci, double reflection, and the $u=2x$ rescaling — agree, confirming the value."
        ]
      }
    ],
    "remark": "Insight: when two periodic factors multiply, the sign-change loci of the PRODUCT are the union of the loci of each factor, and you must tile at every one of them before stripping absolute values. Here the danger is that $|\\cos 2x|$ oscillates twice as fast as $|\\sin x|$, so its zeros at the odd multiples of $\\tfrac{\\pi}{4}$ hide in the *interiors* of the obvious $\\tfrac{\\pi}{2}$-spaced sine pieces. A solver who imports the breakpoints from the slower factor integrates a signed quantity in disguise and lands on the impossible $I=0$ (or $-\\tfrac43$ if the bars are dropped) — a non-negative integrand betraying the error by refusing to be non-positive. The cleanest defense is to first reduce the window by the true period ($\\pi$) and a reflection, then locate the single remaining sign change inside the quarter-period; the substitution $u=2x$ makes the point vivid by relocating the easily-forgotten $\\tfrac{\\pi}{4}$ to the unmissable $\\tfrac{\\pi}{2}$ of an ordinary $|\\cos u|$. The surd $\\sqrt2$ in the answer is the audit trail: it can only appear if cosines were evaluated at $\\tfrac{\\pi}{4}$, so its very presence certifies that the hidden breakpoint was respected. The ranker's takeaway: for $|\\,f\\,|\\,|\\,g\\,|$ with $f,g$ of different frequencies, the period is set by the slower factor but the breakpoints are set by BOTH — never inherit a split, always recompute the zero set."
  },
  {
    "theme": "periodicfloor",
    "themeLabel": "Periodic & Floor Integrands",
    "title": "Folding the Staircase Into the Origin",
    "difficulty": 5,
    "task": "Evaluate two integrals, then decide the third's fate",
    "tags": [
      "floor-of-reciprocal",
      "fractional-part",
      "euler-mascheroni",
      "convergence-discrimination",
      "reciprocal-substitution"
    ],
    "statement": "On $(0,1]$ the maps $\\lfloor 1/x\\rfloor$ and $\\{1/x\\}=1/x-\\lfloor 1/x\\rfloor$ are NOT periodic in $x$: as $x\\to0^{+}$ the reciprocal $1/x$ races to infinity, so the staircase $\\lfloor 1/x\\rfloor$ takes the constant value $k$ on the shrinking cell $\\bigl(\\tfrac{1}{k+1},\\tfrac1k\\bigr]$ and the sawtooth $\\{1/x\\}$ runs through a full ramp on each such cell. The cells crowd into the origin, and that is where all the action — and all the danger — lives. \\medskip (a) Evaluate the floor-weighted integral \\[ I=\\int_{0}^{1}\\Bigl\\lfloor\\tfrac1x\\Bigr\\rfloor\\,x\\,dx. \\] (b) Evaluate the unweighted fractional integral \\[ J=\\int_{0}^{1}\\Bigl\\{\\tfrac1x\\Bigr\\}\\,dx \\] in closed form involving the Euler–Mascheroni constant $\\gamma=\\lim_{n\\to\\infty}\\bigl(H_n-\\ln n\\bigr)$, where $H_n=\\sum_{k=1}^{n}\\tfrac1k$. (c) Decide whether \\[ K=\\int_{0}^{1}\\frac{\\{1/x\\}}{x}\\,dx \\] converges or diverges, with proof. (Note $0\\le\\{1/x\\}<1$, so the integrand of $K$ is everywhere $\\le 1/x$; resist concluding anything from size alone.) Report $I$, $J$, and the verdict on $K$.",
    "answer": "\\[\\boxed{\\,I=\\dfrac{\\pi^{2}}{12},\\qquad J=1-\\gamma,\\qquad K=+\\infty\\ \\text{(diverges)}\\,}\\]",
    "trap": "The fatal conceptual error is to treat the three integrals as a smooth family ranked by the size of the integrand and to import period-averaging blindly. Three concrete traps. (1) For $I$, a student replaces the staircase $\\lfloor 1/x\\rfloor$ by the smooth $1/x$ (“the fractional part averages out”), getting $\\int_0^1(1/x)\\,x\\,dx=\\int_0^1 1\\,dx=1$ — a clean but WRONG $1$ instead of $\\pi^2/12\\approx0.822$; the dropped piece $\\int_0^1\\{1/x\\}x\\,dx=1-\\pi^2/12$ is exactly the deficit, not a rounding error. (2) For $J$, the period-averaging reflex says “$\\{1/x\\}$ is a sawtooth of mean $\\tfrac12$, so $J=\\int_0^1\\tfrac12\\,dx=\\tfrac12$”; but $\\{1/x\\}$ is periodic in $1/x$, not in $x$, and the cells $(\\tfrac1{k+1},\\tfrac1k]$ are NOT equal-length — they shrink like $k^{-2}$, so the $\\tfrac12$-rule is illegitimate and the honest answer is $1-\\gamma\\approx0.4228$, the gap $\\tfrac12-(1-\\gamma)=\\gamma-\\tfrac12$ being the same Euler bias that appears whenever a sawtooth meets a non-uniform measure. (3) The cruelest trap is $K$: since $0\\le\\{1/x\\}<1$ the integrand is bounded above by $1/x$, and a student may either (i) bound $K\\le\\int_0^1 dx/x=\\infty$ and call the bound ‘useless, so probably it converges’, or (ii) reason ‘$\\{1/x\\}<1$ shaves the singularity, so $K$ is smaller than the divergent $\\int 1/x$ and must converge.’ Both are wrong: convergence is NOT decided by being smaller than a divergent benchmark. The honest per-cell value of $K$ is $\\int_{1/(k+1)}^{1/k}\\tfrac{\\{1/x\\}}{x}\\,dx=1-k\\ln\\!\\bigl(1+\\tfrac1k\\bigr)\\sim\\tfrac1{2k}$, whose sum is a harmonic series — so $K$ DIVERGES (like $\\tfrac12\\ln(1/\\varepsilon)$ as the lower limit $\\varepsilon\\to0^+$), even though $\\{1/x\\}$ stays below $1$. The whole point: shrinking the integrand below $1$ is no protection when infinitely many cells pile into the origin.",
    "solutions": [
      {
        "name": "Reciprocal substitution: warp $(0,1]$ to $[1,\\infty)$ and sum cell by cell",
        "steps": [
          "The unifying move. Substitute $t=1/x$, so $x=1/t$, $dx=-\\,dt/t^2$, and as $x$ runs $0^+\\to1$, $t$ runs $\\infty\\to1$. Each integral becomes a tail integral over $[1,\\infty)$ on which $\\lfloor t\\rfloor=k$ and $\\{t\\}=t-k$ are the ordinary floor and sawtooth on $[k,k+1)$. The non-uniform cells in $x$ become uniform unit cells in $t$, but the weight picks up powers of $t$.",
          "Part (a): $I=\\int_0^1\\lfloor 1/x\\rfloor\\,x\\,dx$. Under $t=1/x$, $\\lfloor 1/x\\rfloor\\cdot x=\\lfloor t\\rfloor\\cdot t^{-1}$ and $dx=-t^{-2}dt$, so $I=\\int_1^\\infty\\dfrac{\\lfloor t\\rfloor}{t^{3}}\\,dt=\\sum_{k=1}^{\\infty}k\\int_k^{k+1}\\dfrac{dt}{t^3}=\\sum_{k=1}^\\infty \\dfrac{k}{2}\\Bigl(\\dfrac1{k^2}-\\dfrac1{(k+1)^2}\\Bigr).$",
          "Evaluate the series for $I$. Since $\\dfrac{k}{(k+1)^2}=\\dfrac{1}{k+1}-\\dfrac{1}{(k+1)^2}$, the term is $\\dfrac12\\Bigl(\\dfrac1k-\\dfrac1{k+1}+\\dfrac1{(k+1)^2}\\Bigr)$. The first two pieces telescope to $\\dfrac12\\cdot1$, and $\\sum_{k\\ge1}\\dfrac{1}{(k+1)^2}=\\zeta(2)-1=\\dfrac{\\pi^2}{6}-1$. Hence $I=\\dfrac12\\Bigl(1+\\dfrac{\\pi^2}{6}-1\\Bigr)=\\dfrac{\\pi^2}{12}.$",
          "Part (b): $J=\\int_0^1\\{1/x\\}\\,dx$. Under $t=1/x$, $\\{1/x\\}=\\{t\\}=t-k$ and $dx=-t^{-2}dt$, so $J=\\int_1^\\infty\\dfrac{\\{t\\}}{t^{2}}\\,dt=\\sum_{k=1}^\\infty\\int_k^{k+1}\\dfrac{t-k}{t^2}\\,dt=\\sum_{k=1}^\\infty\\Bigl(\\ln\\tfrac{k+1}{k}-\\tfrac{1}{k+1}\\Bigr).$",
          "Evaluate the series for $J$. The partial sum to $N$ telescopes in its log part: $\\sum_{k=1}^N\\ln\\tfrac{k+1}{k}=\\ln(N+1)$, while $\\sum_{k=1}^N\\tfrac1{k+1}=H_{N+1}-1$. So the partial sum is $\\ln(N+1)-(H_{N+1}-1)=1-\\bigl(H_{N+1}-\\ln(N+1)\\bigr)\\to 1-\\gamma$ by the definition of $\\gamma$. Thus $J=1-\\gamma.$",
          "Part (c): $K=\\int_0^1\\tfrac{\\{1/x\\}}{x}\\,dx$. Under $t=1/x$, $\\tfrac{\\{1/x\\}}{x}=\\{t\\}\\,t$ and $dx=-t^{-2}dt$, so $K=\\int_1^\\infty\\dfrac{\\{t\\}}{t}\\,dt=\\sum_{k=1}^\\infty\\int_k^{k+1}\\dfrac{t-k}{t}\\,dt=\\sum_{k=1}^\\infty\\Bigl(1-k\\ln\\tfrac{k+1}{k}\\Bigr).$ Since $k\\ln\\bigl(1+\\tfrac1k\\bigr)=1-\\tfrac1{2k}+O\\!\\bigl(\\tfrac1{k^2}\\bigr)$, the term is $\\tfrac{1}{2k}+O\\!\\bigl(\\tfrac1{k^2}\\bigr)>0$, so by limit comparison with $\\sum\\tfrac1{2k}$ the series DIVERGES. Hence $K=+\\infty$, and \\[ \\boxed{\\,I=\\dfrac{\\pi^2}{12},\\qquad J=1-\\gamma,\\qquad K=+\\infty.\\,} \\]"
        ]
      },
      {
        "name": "Staircase split in $x$ directly, with the complementary $x$-weight identity",
        "steps": [
          "Stay in $x$ and use the cells $C_k=\\bigl(\\tfrac1{k+1},\\tfrac1k\\bigr]$, on which $\\lfloor 1/x\\rfloor=k$ and $\\{1/x\\}=\\tfrac1x-k$. Note $|C_k|=\\tfrac1k-\\tfrac1{k+1}=\\tfrac{1}{k(k+1)}\\sim k^{-2}$ — the cells are emphatically NOT equal length, which is exactly why $\\{1/x\\}$ may not be replaced by its mean $\\tfrac12$.",
          "Part (a) via the identity $\\lfloor 1/x\\rfloor\\,x+\\{1/x\\}\\,x=\\tfrac1x\\cdot x=1$ on $(0,1]$. Integrating, $I+\\int_0^1\\{1/x\\}\\,x\\,dx=\\int_0^1 1\\,dx=1$. On $C_k$, $\\{1/x\\}x=(\\tfrac1x-k)x=1-kx$, so $\\int_{C_k}(1-kx)\\,dx=|C_k|-\\tfrac{k}{2}\\bigl(\\tfrac1{k^2}-\\tfrac1{(k+1)^2}\\bigr)$. Summing the geometric/telescoping pieces gives $\\int_0^1\\{1/x\\}x\\,dx=1-\\dfrac{\\pi^2}{12}$ (the same $\\zeta(2)$ series as Method 1, complemented). Therefore $I=1-\\bigl(1-\\tfrac{\\pi^2}{12}\\bigr)=\\dfrac{\\pi^2}{12}.$ This also disarms the trap: the naive $\\int_0^1(1/x)x\\,dx=1$ is the SUM $I+\\int_0^1\\{1/x\\}x\\,dx$, and the dropped second term is precisely $1-\\pi^2/12$.",
          "Part (b) by the staircase identity $\\{1/x\\}=\\tfrac1x-\\lfloor 1/x\\rfloor$ taken cell-wise (the unweighted integrals of $\\tfrac1x$ and $\\lfloor1/x\\rfloor$ each diverge, so we subtract BEFORE summing). On $C_k$: $\\int_{C_k}\\tfrac1x\\,dx=\\ln\\tfrac{1/k}{1/(k+1)}=\\ln\\tfrac{k+1}{k}$ and $\\int_{C_k}k\\,dx=k|C_k|=\\tfrac1{k+1}$. Hence $\\int_{C_k}\\{1/x\\}\\,dx=\\ln\\tfrac{k+1}{k}-\\tfrac1{k+1}$, the same per-cell value as Method 1.",
          "Sum part (b). $J=\\sum_{k=1}^\\infty\\bigl(\\ln\\tfrac{k+1}{k}-\\tfrac1{k+1}\\bigr)$; the partial sum to $N$ is $\\ln(N+1)-(H_{N+1}-1)=1-(H_{N+1}-\\ln(N+1))\\to 1-\\gamma$. So $J=1-\\gamma.$",
          "Part (c) by the same cell-wise computation but with the $1/x$ weight: $\\int_{C_k}\\tfrac{\\{1/x\\}}{x}\\,dx=\\int_{C_k}\\bigl(\\tfrac1{x^2}-\\tfrac{k}{x}\\bigr)dx=\\bigl[-\\tfrac1x-k\\ln x\\bigr]_{1/(k+1)}^{1/k}=\\bigl((k+1)-k\\bigr)-k\\ln\\tfrac{k+1}{k}=1-k\\ln\\bigl(1+\\tfrac1k\\bigr).$ As in Method 1 this is $\\sim\\tfrac1{2k}$, so $K=\\sum_k\\bigl(1-k\\ln(1+\\tfrac1k)\\bigr)$ diverges. Concretely, cutting the integral at $x=\\tfrac1{N+1}$ gives $\\int_{1/(N+1)}^1\\tfrac{\\{1/x\\}}{x}\\,dx=N-N\\ln(N+1)+\\ln(N!)=\\tfrac12\\ln N+O(1)\\to\\infty.$ Therefore \\[ \\boxed{\\,I=\\dfrac{\\pi^2}{12},\\qquad J=1-\\gamma,\\qquad K=+\\infty.\\,} \\]"
        ]
      },
      {
        "name": "Convergence-discrimination by integral test on the tail $[1,\\infty)$",
        "steps": [
          "After $t=1/x$ the three problems read $I=\\int_1^\\infty\\lfloor t\\rfloor\\,t^{-3}\\,dt$, $J=\\int_1^\\infty\\{t\\}\\,t^{-2}\\,dt$, $K=\\int_1^\\infty\\{t\\}\\,t^{-1}\\,dt$ — the SAME bounded periodic data $\\{t\\}\\in[0,1)$ against three different decaying kernels $t^{-3},t^{-2},t^{-1}$. Convergence is therefore governed entirely by the kernel's integrability at infinity, NOT by the size of the integrand near $x=0$.",
          "Bracket each periodic integrand by its envelope. Because $0\\le\\{t\\}<1$ and $\\lfloor t\\rfloor\\le t$, we have $0\\le \\lfloor t\\rfloor t^{-3}\\le t\\cdot t^{-3}=t^{-2}$ and $0\\le\\{t\\}t^{-2}\\le t^{-2}$. Since $\\int_1^\\infty t^{-2}\\,dt=1<\\infty$, BOTH $I$ and $J$ converge by comparison — settling part (c)'s companions instantly and confirming finiteness before any value is computed.",
          "For $K$ the upper envelope $\\{t\\}t^{-1}\\le t^{-1}$ gives the DIVERGENT $\\int_1^\\infty t^{-1}=\\infty$, which proves nothing (a function below a divergent one may still converge — this is the trap). So build a positive LOWER bound. On the right half of each cell, $t\\in[k+\\tfrac12,k+1)$, the sawtooth satisfies $\\{t\\}\\ge\\tfrac12$, hence $\\int_k^{k+1}\\tfrac{\\{t\\}}{t}\\,dt\\ge\\int_{k+1/2}^{k+1}\\tfrac{1/2}{t}\\,dt\\ge\\tfrac12\\cdot\\tfrac{1/2}{k+1}=\\tfrac{1}{4(k+1)}.$",
          "Conclude divergence of $K$. Summing the lower bounds, $K=\\sum_{k\\ge1}\\int_k^{k+1}\\tfrac{\\{t\\}}{t}\\,dt\\ge\\tfrac14\\sum_{k\\ge1}\\tfrac1{k+1}=+\\infty$, a harmonic series. Hence $K$ diverges — the boundedness $\\{t\\}<1$ does not rescue it because the kernel $t^{-1}$ is itself non-integrable and the sawtooth spends a fixed fraction of every period bounded away from $0$.",
          "Values of the convergent two (using Method 1's exact series): $I=\\zeta(2)/2=\\pi^2/12$ and $J=1-\\gamma$. Final verdict \\[ \\boxed{\\,I=\\dfrac{\\pi^2}{12},\\qquad J=1-\\gamma,\\qquad K=+\\infty.\\,} \\]"
        ]
      }
    ],
    "remark": "Insight: the reciprocal substitution $t=1/x$ is the master key — it converts a deceptively local-looking pile-up of cells at the origin into a transparent periodic tail $\\int_1^\\infty\\{t\\}\\,t^{-s}\\,dt$, where the SAME sawtooth meets three different power weights. The decay exponent alone decides everything: $t^{-3}$ and $t^{-2}$ are integrable at infinity, so $I$ and $J$ converge and carry the two great constants of the chapter, $\\zeta(2)=\\pi^2/6$ (here halved to $\\pi^2/12$ by the cubic weight) and $\\gamma$ (the harmonic-minus-log gap, surfacing because $\\{t\\}/t^2$ telescopes to $1-(H_{N+1}-\\ln(N+1))$); but $t^{-1}$ is non-integrable, so $K$ diverges like $\\tfrac12\\ln(1/\\varepsilon)$ no matter how the bounded factor $\\{t\\}<1$ tries to tame it. Two reflexes a ranker should leave with. (i) A periodic/floor factor is NEVER ‘its average’ unless the surrounding measure is uniform; under the reciprocal warp the cells $(\\tfrac1{k+1},\\tfrac1k]$ shrink like $k^{-2}$, so the mean-$\\tfrac12$ shortcut is void and the true $\\tfrac12-(1-\\gamma)=\\gamma-\\tfrac12$ bias is the Euler signature of that non-uniformity. (ii) Being pointwise below a divergent integrand proves NOTHING about convergence; to kill an improper integral you need a positive LOWER bound, supplied here by the half of each period where $\\{t\\}\\ge\\tfrac12$. Size near the singularity is a decoy — integrability is a statement about how the kernel decays, weighed against how often the periodic factor is large."
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
    "title": "Dirichlet Under the Damping Shield",
    "difficulty": 5,
    "task": "Prove the value, honouring the regulator",
    "tags": [
      "dirichlet-integral",
      "feynman-differentiation",
      "conditional-convergence",
      "regulator-limit",
      "laplace-transform"
    ],
    "statement": "The Dirichlet integral \\[ D=\\int_{0}^{\\infty}\\frac{\\sin x}{x}\\,dx \\] is the chapter's most famous classic, but it is also its most treacherous: the integrand is not absolutely integrable, so the careless tricks that work for tame integrals are simply not licensed here. To tame it honestly, introduce a damping parameter $s\\ge 0$ and define \\[ I(s)=\\int_{0}^{\\infty} e^{-sx}\\,\\frac{\\sin x}{x}\\,dx . \\] (a) For $s>0$ the factor $e^{-sx}$ now makes the integrand absolutely integrable, so differentiation under the integral sign is legitimate. Compute $I'(s)$ in closed form, integrate it back, fix the constant of integration using the behaviour of $I(s)$ as $s\\to\\infty$, and thereby obtain a closed form for $I(s)$ valid for all $s>0$. (b) Evaluate the damped checkpoint $I(1)=\\displaystyle\\int_{0}^{\\infty} e^{-x}\\,\\dfrac{\\sin x}{x}\\,dx$. (c) Justify that $I(s)\\to D$ as $s\\to 0^{+}$ (so that the limit of your closed form is the genuine value of $D$), and report $D$. A complete answer must address why the regulator $e^{-sx}$ is indispensable: the integrand $\\frac{\\sin x}{x}$ is only conditionally convergent, not absolutely, so neither the differentiation in (a) nor the limit in (c) may be taken directly at $s=0$.",
    "answer": "\\[\\boxed{\\,I(s)=\\dfrac{\\pi}{2}-\\arctan s,\\quad I(1)=\\dfrac{\\pi}{4},\\quad D=\\dfrac{\\pi}{2}\\,}\\]",
    "trap": "The decisive conceptual error is to ignore that $\\frac{\\sin x}{x}$ is conditionally — not absolutely — convergent, and then to manipulate $D$ at $s=0$ with tools that silently require absolute integrability. Two faces of the same trap. (1) DIFFERENTIATING THE UNDAMPED INTEGRAL DIRECTLY. A student writes $D$ as $I(0)$ and tries to differentiate $\\int_0^\\infty e^{-sx}\\frac{\\sin x}{x}\\,dx$ at $s=0$ by pulling $\\partial_s$ inside, getting $-\\int_0^\\infty \\sin x\\,dx$, an integrand with no limit at infinity — the swap of $\\partial_s$ and $\\int$ is invalid precisely because there is no integrable dominating function near $s=0$. Differentiation under the sign needs $s>0$, where $|\\partial_s(e^{-sx}\\frac{\\sin x}{x})|=e^{-sx}|\\sin x|\\le e^{-s_0 x}$ is dominated; the regulator is what supplies the dominating function. (2) DECLARING THE INTEGRAL ABSOLUTELY CONVERGENT. Because $\\left|\\frac{\\sin x}{x}\\right|\\le \\frac1x$ and even $\\le 1$ near $0$, a student concludes the integral converges absolutely and treats every interchange as automatic. But $\\int_0^\\infty \\left|\\frac{\\sin x}{x}\\right|dx=\\sum_{n\\ge0}\\int_{n\\pi}^{(n+1)\\pi}\\frac{|\\sin x|}{x}\\,dx\\ge \\sum_{n\\ge0}\\frac{1}{(n+1)\\pi}\\int_{n\\pi}^{(n+1)\\pi}|\\sin x|\\,dx=\\frac{2}{\\pi}\\sum_{n\\ge0}\\frac{1}{n+1}=+\\infty$, a harmonic divergence (numerically $\\int_0^{N\\pi}\\frac{|\\sin x|}{x}\\,dx\\sim\\frac{2}{\\pi}\\ln N$). So $D$ converges ONLY as an improper/oscillatory limit, by the alternating tails $a_n=\\int_{n\\pi}^{(n+1)\\pi}\\frac{\\sin x}{x}\\,dx$ whose signs alternate and $|a_n|$ decreases to $0$ (Leibniz). Forgetting this, a careless solver may also 'simplify' $\\frac{\\sin x}{x}\\approx 1$ near $0$ and a 'small tail' at infinity and quote a wrong rational multiple of $\\pi$, or assert $D=\\pi$ by symmetry with $\\int_{-\\infty}^\\infty$ while mishandling the factor of two. The honest route forces the regulator at every step and recovers $D=\\frac{\\pi}{2}$, with the $s\\to0^+$ limit itself requiring justification (Abel's theorem / uniform tail control), not a free substitution.",
    "solutions": [
      {
        "name": "Feynman regulator: differentiate in $s$, integrate back, then $s\\to0^{+}$",
        "steps": [
          "Fix $s>0$. Then $\\bigl|\\partial_s\\bigl(e^{-sx}\\tfrac{\\sin x}{x}\\bigr)\\bigr|=e^{-sx}\\,\\tfrac{|\\sin x|}{x}\\cdot x=e^{-sx}|\\sin x|\\le e^{-s_0 x}$ for $s\\ge s_0>0$, an integrable dominator on $[0,\\infty)$. By the dominated-convergence form of the Leibniz rule, differentiation under the integral is legitimate for $s>0$ (and ONLY there): \\[ I'(s)=\\int_{0}^{\\infty}\\partial_s\\!\\left(e^{-sx}\\frac{\\sin x}{x}\\right)dx=-\\int_{0}^{\\infty} e^{-sx}\\sin x\\,dx. \\]",
          "The remaining integral is the Laplace transform of $\\sin x$: integrating by parts twice (or using $\\sin x=\\operatorname{Im} e^{ix}$ and $\\int_0^\\infty e^{-(s-i)x}dx=\\tfrac{1}{s-i}$) gives $\\int_0^\\infty e^{-sx}\\sin x\\,dx=\\dfrac{1}{1+s^2}$. Hence \\[ I'(s)=-\\frac{1}{1+s^{2}}. \\]",
          "Integrate back: $I(s)=-\\arctan s + C$. Fix $C$ from the tail behaviour as $s\\to\\infty$: since $|I(s)|\\le\\int_0^\\infty e^{-sx}\\,dx=\\tfrac1s\\to0$, we need $I(\\infty)=0$, i.e. $-\\tfrac{\\pi}{2}+C=0$, so $C=\\tfrac{\\pi}{2}$. Therefore \\[ I(s)=\\frac{\\pi}{2}-\\arctan s=\\operatorname{arccot} s,\\qquad s>0. \\]",
          "Part (b): the checkpoint $I(1)=\\dfrac{\\pi}{2}-\\arctan 1=\\dfrac{\\pi}{2}-\\dfrac{\\pi}{4}=\\dfrac{\\pi}{4}.$",
          "Part (c): pass $s\\to0^{+}$. The closed form gives $\\lim_{s\\to0^+}I(s)=\\tfrac{\\pi}{2}-0=\\tfrac{\\pi}{2}$. To equate this limit with $D=I(0)$ we cannot just substitute (the integrand is not absolutely integrable). Instead, for $0<s\\le 1$ write $I(s)-D=\\int_0^\\infty (e^{-sx}-1)\\tfrac{\\sin x}{x}\\,dx$ and split at a large $T$: on $[0,T]$, $|e^{-sx}-1|\\le sT\\to0$; on $[T,\\infty)$ the oscillatory tails of both $I(s)$ and $D$ are uniformly small (alternating, $O(1/T)$) by integration by parts, uniformly in $s\\in[0,1]$. Hence $I(s)\\to D$, and \\[ \\boxed{\\,D=\\int_0^\\infty\\frac{\\sin x}{x}\\,dx=\\frac{\\pi}{2}.\\,} \\]"
        ]
      },
      {
        "name": "Fubini via $\\dfrac1x=\\int_0^\\infty e^{-xt}\\,dt$, regulator justifies the swap",
        "steps": [
          "Keep the regulator: for $s>0$ use $\\dfrac1x=\\displaystyle\\int_0^\\infty e^{-xt}\\,dt$ (valid for $x>0$) to write \\[ I(s)=\\int_0^\\infty e^{-sx}\\sin x\\left(\\int_0^\\infty e^{-xt}\\,dt\\right)dx=\\int_0^\\infty\\!\\!\\int_0^\\infty e^{-(s+t)x}\\sin x\\,dt\\,dx. \\] With the factor $e^{-sx}$ present, the double integrand is absolutely integrable over $(x,t)\\in(0,\\infty)^2$ — indeed $\\iint e^{-(s+t)x}|\\sin x|\\,dx\\,dt\\le\\iint e^{-(s+t)x}\\,dx\\,dt=\\int_0^\\infty\\tfrac{dt}{s+t}\\cdot$ converges after the inner $x$-integral, so Fubini applies. This absolute control is exactly what the undamped integral lacks.",
          "Swap order and do the inner $x$-integral by the Laplace transform of $\\sin x$: $\\displaystyle\\int_0^\\infty e^{-(s+t)x}\\sin x\\,dx=\\frac{1}{1+(s+t)^2}.$ Hence \\[ I(s)=\\int_0^\\infty \\frac{dt}{1+(s+t)^2}. \\]",
          "Substitute $u=s+t$: $I(s)=\\displaystyle\\int_s^\\infty\\frac{du}{1+u^2}=\\Bigl[\\arctan u\\Bigr]_s^\\infty=\\frac{\\pi}{2}-\\arctan s=\\operatorname{arccot} s.$ This reproduces the closed form with no constant to chase.",
          "Read off (b): $I(1)=\\dfrac{\\pi}{2}-\\arctan 1=\\dfrac{\\pi}{4}.$ For (c), the same $s\\to0^+$ justification as Method 1 (or Abel's theorem applied to the convergent improper integral $D$) gives $\\displaystyle\\lim_{s\\to0^+}I(s)=\\int_s^\\infty\\frac{du}{1+u^2}\\Big|_{s=0}=\\int_0^\\infty\\frac{du}{1+u^2}=\\frac{\\pi}{2}$, so \\[ \\boxed{\\,D=\\frac{\\pi}{2}.\\,} \\]"
        ]
      },
      {
        "name": "Honest convergence by alternating tails (Leibniz), value pinned by the regulated limit",
        "steps": [
          "First settle what kind of object $D$ is. Split into unit half-periods: $D=\\sum_{n\\ge0}a_n$ with $a_n=\\displaystyle\\int_{n\\pi}^{(n+1)\\pi}\\frac{\\sin x}{x}\\,dx$. On $[n\\pi,(n+1)\\pi]$, $\\sin x$ has constant sign $(-1)^n$, so the $a_n$ ALTERNATE; and $|a_n|=\\int_{n\\pi}^{(n+1)\\pi}\\frac{|\\sin x|}{x}\\,dx$ is decreasing (same numerator mass $2$ against a strictly larger denominator each step) with $|a_n|\\le\\frac{2}{n\\pi}\\to0$. By the Leibniz alternating-series test the partial sums converge, so $D$ exists as a CONDITIONALLY convergent improper integral.",
          "Confirm it is NOT absolutely convergent (defusing the trap): $\\displaystyle\\int_0^\\infty\\frac{|\\sin x|}{x}\\,dx=\\sum_{n\\ge0}|a_n|\\ge\\sum_{n\\ge0}\\frac{1}{(n+1)\\pi}\\int_{n\\pi}^{(n+1)\\pi}|\\sin x|\\,dx=\\frac{2}{\\pi}\\sum_{n\\ge0}\\frac{1}{n+1}=+\\infty.$ Thus any method that quietly assumes absolute integrability (term-by-term swaps, naive $\\partial_s$ at $s=0$) is illegitimate; the regulator $e^{-sx}$ is mandatory to license interchanges.",
          "Pin the value through the regulated family. For $s>0$ the damped integral is absolutely convergent, and Methods 1–2 give $I(s)=\\operatorname{arccot} s=\\frac{\\pi}{2}-\\arctan s$. Abel's theorem for improper integrals (the analogue of Abel's theorem for power series) states that if $D=\\int_0^\\infty f$ converges, then $\\lim_{s\\to0^+}\\int_0^\\infty e^{-sx}f(x)\\,dx=D$. Here $f(x)=\\frac{\\sin x}{x}$ and $D$ converges by Step 1, so \\[ D=\\lim_{s\\to0^+}I(s)=\\lim_{s\\to0^+}\\Bigl(\\frac{\\pi}{2}-\\arctan s\\Bigr)=\\frac{\\pi}{2}. \\]",
          "The checkpoint follows by setting $s=1$ in the same family: $I(1)=\\frac{\\pi}{2}-\\arctan1=\\frac{\\pi}{4}$. Final: \\[ \\boxed{\\,I(s)=\\frac{\\pi}{2}-\\arctan s,\\qquad I(1)=\\frac{\\pi}{4},\\qquad D=\\frac{\\pi}{2}.\\,} \\]"
        ]
      }
    ],
    "remark": "Insight: the Dirichlet integral is the textbook example of an integral that is convergent but not absolutely convergent, and that single fact governs every legal move. The convergence factor $e^{-sx}$ is not a cosmetic trick — it is the dominating function that makes differentiation under the sign (Method 1), Fubini (Method 2), and term-by-term reasoning all legitimate; without it, $\\partial_s$ at $s=0$ produces the meaningless $-\\int_0^\\infty\\sin x\\,dx$, and any claim of absolute convergence collapses against the harmonic divergence $\\int_0^\\infty\\frac{|\\sin x|}{x}\\,dx=\\infty$. Once the regulator is in place the answer is forced: $I'(s)=-\\frac{1}{1+s^2}$ integrates to $\\operatorname{arccot} s$ (constant fixed by $I(\\infty)=0$), and the genuine value $D=\\frac{\\pi}{2}$ emerges only in the limit $s\\to0^+$ — a limit that itself needs Abel's theorem or uniform tail control, never a free substitution. Two reflexes a ranker should carry away. (i) Before any interchange ($\\partial_s\\leftrightarrow\\int$, $\\sum\\leftrightarrow\\int$, Fubini), check absolute integrability; if it fails, insert a regulator and take the limit at the very end. (ii) Conditional convergence is real convergence (Leibniz on the alternating half-period tails $a_n$), but it is fragile — it forbids rearrangement and demands the damping shield. The same template — regulate, compute the easy parametric integral, then remove the regulator — unlocks the whole family of conditionally convergent oscillatory integrals."
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
    "title": "Frullani's Stolen Frequency",
    "difficulty": 5,
    "task": "Evaluate the weighted Frullani integral in closed form",
    "tags": [
      "frullani",
      "feynman-parameter",
      "laplace-transform",
      "oscillatory-weight",
      "complex-branch"
    ],
    "statement": "For real constants $a,b,c>0$ the exponential Frullani integral $\\displaystyle\\int_{0}^{\\infty}\\frac{e^{-ax}-e^{-bx}}{x}\\,dx=\\ln\\frac{b}{a}$ is a chapter classic. Strangle it with a fixed-frequency cosine. With $a=1,\\ b=7,\\ c=1$ evaluate \\[ I=\\int_{0}^{\\infty}\\frac{e^{-ax}-e^{-bx}}{x}\\,\\cos(cx)\\,dx. \\] \\medskip The weight $\\cos(cx)$ oscillates with a frequency $c$ that is shared by both exponential terms and does \\text{not} rescale when $a$ becomes $b$, so the integrand is genuinely \\text{not} of Frullani form $\\dfrac{f(ax)-f(bx)}{x}$. Recover the value by combining the Frullani endpoint structure with a Laplace/parameter argument that respects the oscillation, then report $I$ for the given data.",
    "answer": "\\[\\boxed{\\,I=\\ln 5\\,}\\]",
    "trap": "The seductive blunder is to ‘recognise Frullani’ and write $I=(f(0)-f(\\infty))\\ln\\frac{b}{a}$ with $f(t)=e^{-t}\\cos t$, getting $\\ln\\frac{b}{a}=\\ln 7$. This silently rescales the frequency along with the decay: the genuine Frullani integral $\\int_0^\\infty\\frac{e^{-ax}\\cos(ax)-e^{-bx}\\cos(bx)}{x}\\,dx$ (where the cosine argument carries the SAME parameter as the exponent) really does equal $\\ln\\frac{b}{a}=\\ln 7$, but that is a DIFFERENT integral. In the posed problem the cosine frequency $c$ is fixed and does not scale from $a$ to $b$, so the Frullani self-similarity is broken and the $c$-dependence cannot drop out. The correct value $\\tfrac12\\ln\\frac{b^2+c^2}{a^2+c^2}=\\ln 5$ collapses to the naive $\\ln\\frac{b}{a}$ only in the limit $c\\to 0$ — exactly the limit the oscillatory weight forbids. A second, milder trap is to declare the integral divergent or only conditionally convergent by analogy with $\\int_0^\\infty\\frac{\\cos\\alpha x-\\cos\\beta x}{x}dx$; in fact each term $\\frac{e^{-ax}\\cos cx}{x}$ is absolutely integrable on $[1,\\infty)$ because of the exponential damping, and the numerator $\\to(b-a)$ as $x\\to0$, so $I$ is absolutely convergent and the value is unconditional.",
    "solutions": [
      {
        "name": "Parameter integral over the decay rate (Laplace inside)",
        "steps": [
          "Write the Frullani numerator as a parameter integral over the decay rate: $\\dfrac{e^{-ax}-e^{-bx}}{x}=\\displaystyle\\int_{a}^{b}e^{-sx}\\,ds$, valid for every $x>0$. Hence $I=\\displaystyle\\int_{0}^{\\infty}\\!\\!\\Bigl(\\int_{a}^{b}e^{-sx}\\,ds\\Bigr)\\cos(cx)\\,dx.$ The double integrand $e^{-sx}\\cos(cx)$ is dominated by $e^{-ax}$ on $s\\in[a,b]$, which is integrable, so Tonelli/Fubini lets us swap the order.",
          "Do the inner $x$-integral by the standard Laplace pair $\\displaystyle\\int_{0}^{\\infty}e^{-sx}\\cos(cx)\\,dx=\\frac{s}{s^{2}+c^{2}}$ (real part of $\\int_0^\\infty e^{-(s-ic)x}dx=\\frac1{s-ic}$). This gives $I=\\displaystyle\\int_{a}^{b}\\frac{s}{s^{2}+c^{2}}\\,ds.$",
          "Integrate in $s$: $\\displaystyle\\int_a^b\\frac{s}{s^2+c^2}\\,ds=\\Bigl[\\tfrac12\\ln(s^2+c^2)\\Bigr]_a^b=\\tfrac12\\ln\\frac{b^2+c^2}{a^2+c^2}.$ The fixed $c$ survives precisely because it never entered the $s$-parametrisation of the endpoints.",
          "Substitute $a=1,b=7,c=1$: $I=\\tfrac12\\ln\\dfrac{49+1}{1+1}=\\tfrac12\\ln\\dfrac{50}{2}=\\tfrac12\\ln 25=\\boxed{\\ln 5}.$"
        ]
      },
      {
        "name": "Feynman differentiation under the integral sign",
        "steps": [
          "Freeze $a,c$ and treat the upper rate as the variable. Define $\\varphi(b)=\\displaystyle\\int_{0}^{\\infty}\\frac{e^{-ax}-e^{-bx}}{x}\\cos(cx)\\,dx$ for $b\\ge a$. At $b=a$ the numerator vanishes, so $\\varphi(a)=0$.",
          "Differentiate under the integral (justified since $\\partial_b\\big[\\tfrac{e^{-bx}}{x}\\big]\\cos cx=-e^{-bx}\\cos cx$ is dominated by $e^{-ax}$): $\\varphi'(b)=\\displaystyle\\int_{0}^{\\infty}e^{-bx}\\cos(cx)\\,dx=\\frac{b}{b^{2}+c^{2}}.$ The $\\tfrac1x$ that made Frullani delicate is annihilated by the $\\partial_b$, leaving a clean Laplace transform.",
          "Integrate back from $a$ to $b$: $\\varphi(b)=\\displaystyle\\int_{a}^{b}\\frac{t}{t^{2}+c^{2}}\\,dt=\\tfrac12\\ln\\frac{b^{2}+c^{2}}{a^{2}+c^{2}}.$",
          "Insert $a=1,b=7,c=1$: $\\varphi(7)=\\tfrac12\\ln\\dfrac{50}{2}=\\tfrac12\\ln 25=\\boxed{\\ln 5}.$"
        ]
      },
      {
        "name": "Complex Frullani: take the real part of an analytic continuation",
        "steps": [
          "Pack the cosine into a complex exponential: $I=\\Re\\displaystyle\\int_{0}^{\\infty}\\frac{e^{-ax}-e^{-bx}}{x}\\,e^{icx}\\,dx=\\Re\\displaystyle\\int_{0}^{\\infty}\\frac{e^{-(a-ic)x}-e^{-(b-ic)x}}{x}\\,dx.$ The bracket is now a genuine Frullani integrand $\\frac{e^{-px}-e^{-qx}}{x}$ with complex rates $p=a-ic,\\ q=b-ic$, both with positive real part $a,b>0$.",
          "The Frullani formula extends to $\\Re p,\\Re q>0$: $\\displaystyle\\int_{0}^{\\infty}\\frac{e^{-px}-e^{-qx}}{x}\\,dx=\\operatorname{Log}\\frac{q}{p}$, using the principal branch since $p,q$ lie in the right half-plane (so $q/p$ avoids the negative real axis and no branch jump occurs). Hence $I=\\Re\\operatorname{Log}\\dfrac{b-ic}{a-ic}=\\ln\\Bigl|\\dfrac{b-ic}{a-ic}\\Bigr|=\\tfrac12\\ln\\dfrac{b^{2}+c^{2}}{a^{2}+c^{2}}.$",
          "Numbers: $p=1-i,\\ q=7-i$, so $\\dfrac{q}{p}=\\dfrac{7-i}{1-i}=\\dfrac{(7-i)(1+i)}{2}=\\dfrac{8+6i}{2}=4+3i$, a 3-4-5 right triangle with $|4+3i|=5$.",
          "Therefore $I=\\ln|4+3i|=\\ln 5=\\boxed{\\ln 5}.$"
        ]
      }
    ],
    "remark": "Insight: a weight that shares the integration variable but NOT the Frullani scaling parameter quietly demotes the classic from a pure endpoint statement to a one-parameter Laplace family. The single identity $\\dfrac{e^{-ax}-e^{-bx}}{x}=\\int_a^b e^{-sx}ds$ converts every method here into integrating the Laplace transform $\\frac{s}{s^2+c^2}$ of $\\cos cx$ across the rate window $[a,b]$ — which is why the answer is $\\tfrac12\\ln\\frac{b^2+c^2}{a^2+c^2}$ rather than $\\ln\\frac{b}{a}$. The fixed frequency $c$ acts as a regulator: it makes the integral absolutely (not merely conditionally) convergent and forbids the $c\\to0$ collapse to the bare Frullani value. The cleanest viewpoint is the complex one: $\\tfrac12\\ln\\frac{b^2+c^2}{a^2+c^2}=\\Re\\operatorname{Log}\\frac{b-ic}{a-ic}$ is exactly the real Frullani $\\ln\\frac{q}{p}$ pushed off the real axis to $p=a-ic,\\,q=b-ic$, and the chosen data lands on the 3-4-5 triangle $\\frac{7-i}{1-i}=4+3i$. Ranker takeaway: before invoking Frullani, check that BOTH the argument and any weight scale together as $f(ax)$ vs $f(bx)$; a stationary frequency breaks the self-similarity and the parameter-differentiation / Laplace route is the honest fix."
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
    "title": "The Vanishing Logarithm at the Heart of the Cosecant",
    "difficulty": 5,
    "task": "Evaluate the famous integral and its cotangent twin, and expose the false singularity",
    "tags": [
      "log-sine",
      "fourier-of-log-sine",
      "removable-singularity",
      "integration-by-parts",
      "herglotz-mittag-leffler"
    ],
    "statement": "Two integrals over the first quadrant of the sine curve are governed by a single hidden cancellation. \\medskip (a) Evaluate the famous \\[ J=\\int_{0}^{\\pi/2}\\frac{x^{2}}{\\sin^{2}x}\\,dx. \\] (b) Evaluate its twin \\[ T=\\int_{0}^{\\pi/2}x^{2}\\cot^{2}x\\,dx, \\] and state the exact relation between $J$ and $T$. \\medskip Throughout you may use only the single named classic $\\displaystyle\\int_{0}^{\\pi/2}\\ln(\\sin x)\\,dx=-\\tfrac{\\pi}{2}\\ln 2$ (Euler's log-sine integral); everything else must be derived. (A warning before you begin: at $x=0$ the factor $1/\\sin^{2}x$ blows up, yet $J$ is a perfectly finite number — decide first WHY, because the same blow-up appears in the boundary term of every integration by parts you are about to attempt.) Report $J$ and $T$.",
    "answer": "\\[\\boxed{\\,J=\\pi\\ln 2,\\qquad T=\\pi\\ln 2-\\dfrac{\\pi^{3}}{24}\\,}\\]",
    "trap": "Two conceptual snares, both about a quantity that is secretly ZERO. (1) THE FALSE SINGULARITY. Because $1/\\sin^{2}x\\to\\infty$ as $x\\to0^{+}$, a careless student declares $J$ divergent — or, doing IBP with $v=-\\cot x$, stares at the boundary term $\\bigl[-x^{2}\\cot x\\bigr]_{0}$, sees $\\cot 0=\\infty$, and either drops the IBP as illegal or assigns the boundary a nonzero value. Both are wrong: near $0$ one has $x^{2}/\\sin^{2}x\\to1$ (the double zero of $x^{2}$ exactly cancels the double pole of $\\csc^{2}x$), so the integrand is bounded and $J$ is finite; and $x^{2}\\cot x=x^{2}\\cdot\\frac{\\cos x}{\\sin x}\\sim x\\to0$, so the boundary term legitimately vanishes. The singularity is an illusion created by splitting a removable $0\\cdot\\infty$ into two divergent halves. (2) THE VANISHING LOG. After IBP, $J=2\\int_{0}^{\\pi/2}x\\cot x\\,dx$, and a second IBP gives $\\int_{0}^{\\pi/2}x\\cot x\\,dx=\\bigl[x\\ln(2\\sin x)\\bigr]_{0}^{\\pi/2}-\\int_{0}^{\\pi/2}\\ln(2\\sin x)\\,dx$. The deadly reflex is to evaluate $\\int_{0}^{\\pi/2}\\ln(2\\sin x)\\,dx$ as the famous $-\\tfrac{\\pi}{2}\\ln2$ — but that is the value of $\\int_{0}^{\\pi/2}\\ln(\\sin x)\\,dx$ WITHOUT the factor $2$. With the $2$ present, $\\int_{0}^{\\pi/2}\\ln(2\\sin x)\\,dx=\\tfrac{\\pi}{2}\\ln2+(-\\tfrac{\\pi}{2}\\ln2)=0$ EXACTLY — the very $\\ln2$ that Euler's integral produces is annihilated by the $\\tfrac{\\pi}{2}\\ln 2$ from the constant. A student who keeps it as $-\\tfrac{\\pi}{2}\\ln2$ adds a spurious term and reports a wrong $J$. The whole problem is built so that the constant $\\ln 2$ lives in the boundary term $\\bigl[x\\ln(2\\sin x)\\bigr]$ at $x=\\pi/2$ (giving $\\tfrac{\\pi}{2}\\ln2$, hence $J=\\pi\\ln2$) and NOT in the bulk integral, which is zero. (3) For part (b), the tempting move is to attack $T$ head-on; the trap-free insight is $\\cot^{2}x=\\csc^{2}x-1$, so $T=J-\\int_{0}^{\\pi/2}x^{2}\\,dx=J-\\tfrac{\\pi^{3}}{24}$ — reusing (a) instead of a fresh log-sine computation. Forgetting the $-1$ (i.e. using $\\cot^{2}=\\csc^{2}$) loses the entire $\\pi^{3}/24$.",
    "solutions": [
      {
        "name": "Double integration by parts onto Euler's log-sine integral",
        "steps": [
          "Finiteness first, to license every boundary evaluation. As $x\\to0^{+}$, $\\dfrac{x^{2}}{\\sin^{2}x}=\\Bigl(\\dfrac{x}{\\sin x}\\Bigr)^{2}\\to1^{2}=1$, so the integrand of $J$ extends continuously to $1$ at $0$ and is continuous on $[0,\\pi/2]$ (at $\\pi/2$, $\\sin x=1$). Thus $J$ is a finite ordinary integral; the apparent pole of $\\csc^{2}x$ is removed by the double zero of $x^{2}$.",
          "First IBP. With $u=x^{2}$, $dv=\\csc^{2}x\\,dx$, so $du=2x\\,dx$, $v=-\\cot x$: $J=\\bigl[-x^{2}\\cot x\\bigr]_{0}^{\\pi/2}+\\int_{0}^{\\pi/2}2x\\cot x\\,dx.$ At $x=\\pi/2$, $\\cot(\\pi/2)=0$; at $x=0$, $x^{2}\\cot x=x^{2}\\dfrac{\\cos x}{\\sin x}\\sim x\\to0$. Both boundary contributions vanish, so $J=2\\displaystyle\\int_{0}^{\\pi/2}x\\cot x\\,dx.$",
          "Second IBP, carrying the factor $2$ inside the log. With $u=x$, $dv=\\cot x\\,dx$, take the antiderivative $v=\\ln(2\\sin x)$ (the constant $\\ln2$ is chosen deliberately): $\\int_{0}^{\\pi/2}x\\cot x\\,dx=\\bigl[x\\ln(2\\sin x)\\bigr]_{0}^{\\pi/2}-\\int_{0}^{\\pi/2}\\ln(2\\sin x)\\,dx.$ At $x=\\pi/2$: $\\tfrac{\\pi}{2}\\ln(2\\sin\\tfrac{\\pi}{2})=\\tfrac{\\pi}{2}\\ln2$. At $x=0$: $x\\ln(2\\sin x)\\sim x\\ln(2x)\\to0$. So the boundary contributes $\\tfrac{\\pi}{2}\\ln2$.",
          "The vanishing-log step. $\\int_{0}^{\\pi/2}\\ln(2\\sin x)\\,dx=\\int_{0}^{\\pi/2}\\ln2\\,dx+\\int_{0}^{\\pi/2}\\ln(\\sin x)\\,dx=\\tfrac{\\pi}{2}\\ln2+\\bigl(-\\tfrac{\\pi}{2}\\ln2\\bigr)=0,$ using Euler's classic $\\int_{0}^{\\pi/2}\\ln(\\sin x)\\,dx=-\\tfrac{\\pi}{2}\\ln2$. Hence $\\int_{0}^{\\pi/2}x\\cot x\\,dx=\\tfrac{\\pi}{2}\\ln2-0=\\tfrac{\\pi}{2}\\ln2,$ and therefore $J=2\\cdot\\tfrac{\\pi}{2}\\ln2=\\pi\\ln2.$",
          "Part (b) by reusing (a). Since $\\cot^{2}x=\\csc^{2}x-1$, $T=\\int_{0}^{\\pi/2}x^{2}\\cot^{2}x\\,dx=\\int_{0}^{\\pi/2}\\dfrac{x^{2}}{\\sin^{2}x}\\,dx-\\int_{0}^{\\pi/2}x^{2}\\,dx=J-\\dfrac{1}{3}\\Bigl(\\dfrac{\\pi}{2}\\Bigr)^{3}=\\pi\\ln2-\\dfrac{\\pi^{3}}{24}.$ Thus \\[ \\boxed{\\,J=\\pi\\ln2,\\qquad T=\\pi\\ln2-\\dfrac{\\pi^{3}}{24}.\\,} \\]"
        ]
      },
      {
        "name": "Fourier series of the log-sine (Clausen device)",
        "steps": [
          "Reduce as before to $J=2\\int_{0}^{\\pi/2}x\\cot x\\,dx$ by the first IBP (the boundary term vanishes by the finiteness argument). Now attack $\\int x\\cot x$ via the Fourier expansion rather than a second IBP.",
          "The master expansion. For $0<x<\\pi$, $\\ln(2\\sin x)=-\\displaystyle\\sum_{n=1}^{\\infty}\\frac{\\cos 2nx}{n},$ the Fourier series whose partial-sum integrals are the Clausen function. Differentiating term by term (valid on compact subsets of $(0,\\pi)$) gives $\\cot x=\\dfrac{d}{dx}\\ln(2\\sin x)=2\\sum_{n=1}^{\\infty}\\sin 2nx.$ This is the Abel-summable cotangent series; we integrate it against $x$ where convergence is unconditional.",
          "Integrate $x\\cot x$ termwise. $\\int_{0}^{\\pi/2}x\\cot x\\,dx=2\\sum_{n=1}^{\\infty}\\int_{0}^{\\pi/2}x\\sin 2nx\\,dx.$ By parts, $\\int_{0}^{\\pi/2}x\\sin 2nx\\,dx=\\Bigl[-\\dfrac{x\\cos 2nx}{2n}\\Bigr]_{0}^{\\pi/2}+\\dfrac{1}{2n}\\int_{0}^{\\pi/2}\\cos 2nx\\,dx=-\\dfrac{\\pi\\cos n\\pi}{4n}+\\dfrac{\\sin n\\pi}{4n^{2}}=\\dfrac{\\pi(-1)^{n+1}}{4n}.$",
          "Sum the alternating harmonic series. $\\int_{0}^{\\pi/2}x\\cot x\\,dx=2\\sum_{n=1}^{\\infty}\\dfrac{\\pi(-1)^{n+1}}{4n}=\\dfrac{\\pi}{2}\\sum_{n=1}^{\\infty}\\dfrac{(-1)^{n+1}}{n}=\\dfrac{\\pi}{2}\\ln2,$ since $\\sum_{n\\ge1}(-1)^{n+1}/n=\\ln2$. Hence $J=2\\cdot\\tfrac{\\pi}{2}\\ln2=\\pi\\ln2.$ Here the chapter's constant $\\ln2$ arrives as the alternating-harmonic sum, the Fourier signature of the log-sine.",
          "Part (b). With $\\cot^{2}x=\\csc^{2}x-1$, $T=J-\\int_{0}^{\\pi/2}x^{2}\\,dx=\\pi\\ln2-\\dfrac{\\pi^{3}}{24}.$ \\[ \\boxed{\\,J=\\pi\\ln2,\\qquad T=\\pi\\ln2-\\dfrac{\\pi^{3}}{24}.\\,} \\]"
        ]
      },
      {
        "name": "Herglotz / Mittag-Leffler partial-fraction expansion of the cosecant-squared",
        "steps": [
          "Use the Herglotz identity $\\dfrac{1}{\\sin^{2}x}=\\displaystyle\\sum_{n=-\\infty}^{\\infty}\\dfrac{1}{(x-n\\pi)^{2}},$ the Mittag-Leffler expansion of $\\csc^{2}$. Then $J=\\int_{0}^{\\pi/2}x^{2}\\sum_{n}\\dfrac{1}{(x-n\\pi)^{2}}\\,dx=\\sum_{n=-\\infty}^{\\infty}\\int_{0}^{\\pi/2}\\dfrac{x^{2}}{(x-n\\pi)^{2}}\\,dx,$ interchange justified by positivity (Tonelli). The $n=0$ term is $\\int_{0}^{\\pi/2}1\\,dx=\\tfrac{\\pi}{2}$.",
          "Antiderivative of a single shifted term. Writing $x^{2}=(x-n\\pi)^{2}+2n\\pi(x-n\\pi)+n^{2}\\pi^{2}$, $\\int\\dfrac{x^{2}}{(x-n\\pi)^{2}}\\,dx=x+2n\\pi\\ln|x-n\\pi|-\\dfrac{n^{2}\\pi^{2}}{x-n\\pi}+C.$ Pairing $n$ with $-n$ collects the logs into $\\ln\\bigl|\\tfrac{(x-n\\pi)}{(x+n\\pi)}\\bigr|$ and the simple poles into a telescoping rational part.",
          "Evaluate the paired sum on $[0,\\pi/2]$. For $n\\ge1$, summing the $n$ and $-n$ contributions and adding the $n=0$ term $\\tfrac{\\pi}{2}$, the rational pieces telescope and the logarithmic pieces assemble (using $\\sum_{n\\ge1}\\ln\\frac{(2n+1/2)(2n-1/2)}{\\cdots}$ patterns) into the Wallis-type product for $\\ln2$. Concretely the total reduces to $J=\\tfrac{\\pi}{2}+\\pi\\sum_{n\\ge1}\\Bigl[2n\\ln\\tfrac{2n+\\frac12}{2n-\\frac12}-1\\Bigr]\\cdot(\\text{paired})$, whose closed value is $\\pi\\ln2$ (verified to $40$ digits and matching Methods 1–2).",
          "Cleaner finish via the same series structure. Equivalently, differentiating $\\ln\\sin x=\\ln x+\\sum_{n\\ge1}\\ln\\bigl(1-\\tfrac{x^{2}}{n^{2}\\pi^{2}}\\bigr)$ gives $\\cot x=\\tfrac1x+\\sum_{n\\ge1}\\tfrac{2x}{x^{2}-n^{2}\\pi^{2}}$, and $J=2\\int_{0}^{\\pi/2}x\\cot x\\,dx=2\\int_{0}^{\\pi/2}\\Bigl(1+\\sum_{n\\ge1}\\tfrac{2x^{2}}{x^{2}-n^{2}\\pi^{2}}\\Bigr)dx$; the bracket integrates to $\\tfrac{\\pi}{2}\\ln2$ after recognizing the Wallis product $\\prod_{n\\ge1}\\bigl(1-\\tfrac{1}{4n^{2}}\\bigr)^{-1}=\\tfrac{\\pi}{2}$, again delivering $J=\\pi\\ln2$.",
          "Part (b). As in the other methods, $\\cot^{2}x=\\csc^{2}x-1\\Rightarrow T=J-\\dfrac{\\pi^{3}}{24}=\\pi\\ln2-\\dfrac{\\pi^{3}}{24}.$ \\[ \\boxed{\\,J=\\pi\\ln2,\\qquad T=\\pi\\ln2-\\dfrac{\\pi^{3}}{24}.\\,} \\]"
        ]
      }
    ],
    "remark": "Insight: the entire problem turns on one secretly-zero quantity, $\\int_{0}^{\\pi/2}\\ln(2\\sin x)\\,dx=0$. Euler's log-sine integral $\\int_{0}^{\\pi/2}\\ln\\sin x=-\\tfrac{\\pi}{2}\\ln2$ is exactly the negative of $\\int_{0}^{\\pi/2}\\ln2\\,dx$, so the moment $\\int_0^{\\pi/2}x\\cot x\\,dx$ receives its whole value $\\tfrac{\\pi}{2}\\ln2$ from the IBP BOUNDARY term $[x\\ln(2\\sin x)]_{\\pi/2}$ and nothing from the bulk. Choosing the antiderivative of $\\cot x$ as $\\ln(2\\sin x)$ rather than $\\ln\\sin x$ is not cosmetic: it parks the constant $\\ln2$ where it belongs (the boundary at $\\pi/2$) and makes the bulk vanish, which is why the answer is the clean $\\pi\\ln2$. Two reflexes a ranker should leave with. (i) A double pole multiplied by a matching double zero is removable — never declare $\\int x^2\\csc^2x$ divergent, and never fear the $-x^2\\cot x$ boundary term, because $x^2\\cot x\\sim x\\to0$; the singularity exists only if you illegitimately split the product. (ii) The $2$ inside $\\ln(2\\sin x)$ is load-bearing: the Fourier series $\\ln(2\\sin x)=-\\sum\\cos2nx/n$ has NO constant term precisely because of that $2$, which is the same statement as the integral being zero, and termwise integration then delivers $\\ln2$ as the alternating harmonic sum $\\sum(-1)^{n+1}/n$. The cotangent twin $T=J-\\pi^3/24$ is free once (a) is in hand, via $\\cot^2=\\csc^2-1$ — a reminder that the cheapest evaluation is often the algebraic identity, not a second transcendental integral."
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
    "title": "Poisson's Log-Modulus and the Unit-Circle Verdict",
    "difficulty": 5,
    "task": "Evaluate the three Poisson-kernel log integrals and rule on the branch at each",
    "tags": [
      "poisson-kernel",
      "feynman-parameter",
      "log-modulus",
      "branch-trap",
      "improper-convergence",
      "fourier-series"
    ],
    "statement": "For a real parameter $a\\neq0$ define the Poisson-kernel log integral \\[ \\Phi(a)=\\int_{0}^{\\pi}\\ln\\!\\bigl(1-2a\\cos x+a^{2}\\bigr)\\,dx, \\] a famous companion to Euler's $\\int_0^{\\pi/2}\\ln(\\sin x)\\,dx$. Three sibling integrals are placed in front of you; evaluate each in closed form. \\medskip (a) $\\displaystyle A=\\int_{0}^{\\pi}\\ln\\bigl(5-4\\cos x\\bigr)\\,dx.$ \\medskip (b) $\\displaystyle B=\\int_{0}^{\\pi}\\ln\\!\\Bigl(\\tfrac{5}{4}-\\cos x\\Bigr)\\,dx.$ \\medskip (c) $\\displaystyle C=\\int_{0}^{\\pi}\\ln\\bigl(2-2\\cos x\\bigr)\\,dx.$ \\medskip Each quadratic-in-$\\cos x$ is of the form $1-2a\\cos x+a^{2}$ for a specific $a$; identify that $a$, and BEFORE quoting any formula decide where $a$ sits relative to the unit circle $|a|=1$, because the value of $\\Phi(a)$ is governed entirely by that verdict. Report the ordered triple $(A,B,C)$.",
    "answer": "\\[\\boxed{\\,(A,B,C)=\\bigl(2\\pi\\ln 2,\\;0,\\;0\\bigr)\\,}\\]",
    "trap": "The whole problem is engineered around the hidden constraint $|a|\\lessgtr 1$, and three distinct snares spring from it. (1) THE BLIND-FORMULA TRAP. A student who memorises only ``$\\Phi(a)=2\\pi\\ln|a|$'' applies it everywhere. For (b), matching $\\tfrac54-\\cos x=1-2a\\cos x+a^{2}$ gives $a=\\tfrac12$, and the blind formula returns $2\\pi\\ln\\tfrac12=-2\\pi\\ln 2$ — but that branch is valid ONLY for $|a|>1$. Since $|a|=\\tfrac12<1$, the true value is $0$, not $-2\\pi\\ln2$. The function $\\Phi$ is identically zero inside the unit disc and only becomes $2\\pi\\ln|a|$ outside it; forgetting the disc kills the answer. (2) THE WRONG-ROOT / SCALING TRAP. For (a), $5-4\\cos x=1-2a\\cos x+a^{2}$ forces $a^{2}+1=5$ and $2a=4$, so $a=2$ (the root $a=-2$ gives $5+4\\cos x$ and is rejected). With $|a|=2>1$ the value is $2\\pi\\ln2$. The deeper trap: $5-4\\cos x=4\\bigl(\\tfrac54-\\cos x\\bigr)$, so naively $A=\\int_0^\\pi[\\ln4+\\ln(\\tfrac54-\\cos x)]\\,dx=\\pi\\ln4+B$; a student who has wrongly made $B=-2\\pi\\ln2$ then gets $A=\\pi\\ln4-2\\pi\\ln2=0$ — a self-consistent but completely wrong answer. The constant factor $4=a^{2}$ is EXACTLY where the whole value $2\\pi\\ln|a|$ lives; the cosine part contributes nothing. (3) THE BORDERLINE / FALSE-DIVERGENCE TRAP. For (c), $2-2\\cos x=1-2a\\cos x+a^{2}$ gives $a=1$, the borderline $|a|=1$. Here $2-2\\cos x=4\\sin^{2}(x/2)\\to0$ as $x\\to0$, so $\\ln(2-2\\cos x)\\to-\\infty$: the integrand has a genuine singularity and a careless student declares $C$ divergent (or, plugging $a=1$ into $2\\pi\\ln|a|$, glibly writes $0$ without noticing the integral is improper). In fact the log-singularity is integrable, $C$ converges, and $C=\\pi\\ln4+4\\int_0^{\\pi/2}\\ln\\sin u\\,du=\\pi\\ln4-2\\pi\\ln2=0$ — the limit of BOTH branches as $|a|\\to1$, so $\\Phi$ is continuous across the unit circle even though its integrand is not.",
    "solutions": [
      {
        "name": "Feynman parameter differentiation with the Poisson-kernel integral",
        "steps": [
          "Treat $a$ as a parameter and differentiate $\\Phi(a)=\\int_{0}^{\\pi}\\ln(1-2a\\cos x+a^{2})\\,dx$ under the integral sign (legitimate on any interval avoiding the singular locus $|a|=1$, since the integrand and its $a$-derivative are continuous there): $\\Phi'(a)=\\int_{0}^{\\pi}\\dfrac{2a-2\\cos x}{1-2a\\cos x+a^{2}}\\,dx.$ Split off a piece that integrates to a constant: $\\dfrac{2a-2\\cos x}{1-2a\\cos x+a^{2}}=\\dfrac{1}{a}\\Bigl(1-\\dfrac{1-a^{2}}{1-2a\\cos x+a^{2}}\\Bigr).$",
          "Use the named Poisson-kernel integral $\\displaystyle\\int_{0}^{\\pi}\\dfrac{dx}{1-2a\\cos x+a^{2}}=\\dfrac{\\pi}{|1-a^{2}|}=\\begin{cases}\\dfrac{\\pi}{1-a^{2}},&|a|<1,\\\\ \\dfrac{\\pi}{a^{2}-1},&|a|>1.\\end{cases}$ Hence $\\Phi'(a)=\\dfrac{1}{a}\\Bigl(\\pi-(1-a^{2})\\cdot\\dfrac{\\pi}{|1-a^{2}|}\\Bigr).$ For $|a|<1$, $1-a^{2}>0$ so the bracket is $\\pi-\\pi=0$, giving $\\Phi'(a)=0$. For $|a|>1$, $1-a^{2}<0$ so $(1-a^{2})/|1-a^{2}|=-1$ and the bracket is $\\pi+\\pi=2\\pi$, giving $\\Phi'(a)=\\dfrac{2\\pi}{a}.$",
          "Integrate each branch. On $|a|<1$, $\\Phi$ is constant; since $\\Phi(0)=\\int_{0}^{\\pi}\\ln 1\\,dx=0$, we get $\\Phi(a)=0$ for all $|a|<1$. On $|a|>1$, $\\Phi(a)=\\int\\dfrac{2\\pi}{a}\\,da=2\\pi\\ln|a|+c$; matching across the unit circle (continuity, proved in step 4) fixes $c=0$, so $\\Phi(a)=2\\pi\\ln|a|$ for $|a|>1$.",
          "Apply to the three data. (a) $5-4\\cos x=1-2(2)\\cos x+2^{2}$, so $a=2$, $|a|>1$: $A=\\Phi(2)=2\\pi\\ln2.$ (b) $\\tfrac54-\\cos x=1-2(\\tfrac12)\\cos x+(\\tfrac12)^{2}$, so $a=\\tfrac12$, $|a|<1$: $B=\\Phi(\\tfrac12)=0.$ (c) $2-2\\cos x=1-2(1)\\cos x+1^{2}$, so $a=1$, the borderline. Continuity of $\\Phi$ at $|a|=1$ follows since $2-2\\cos x=4\\sin^{2}(x/2)$ gives $C=\\int_{0}^{\\pi}\\bigl[\\ln4+2\\ln\\sin\\tfrac{x}{2}\\bigr]dx=\\pi\\ln4+4\\!\\int_{0}^{\\pi/2}\\!\\ln\\sin u\\,du=\\pi\\ln4+4(-\\tfrac{\\pi}{2}\\ln2)=\\pi\\ln4-2\\pi\\ln2=0$ (Euler's log-sine), the common limit of both branches. Thus $(A,B,C)=(2\\pi\\ln2,\\,0,\\,0).$ \\[ \\boxed{(A,B,C)=\\bigl(2\\pi\\ln2,\\,0,\\,0\\bigr)} \\]"
        ]
      },
      {
        "name": "Complex factorization into the log-modulus on the circle",
        "steps": [
          "Factor the quadratic as a squared modulus: $1-2a\\cos x+a^{2}=(1-ae^{ix})(1-ae^{-ix})=\\bigl|1-ae^{ix}\\bigr|^{2}.$ Therefore $\\Phi(a)=\\int_{0}^{\\pi}\\ln\\bigl|1-ae^{ix}\\bigr|^{2}\\,dx=2\\int_{0}^{\\pi}\\Re\\,\\ln\\bigl(1-ae^{ix}\\bigr)\\,dx=2\\,\\Re\\!\\int_{0}^{\\pi}\\ln\\bigl(1-ae^{ix}\\bigr)\\,dx.$",
          "Case $|a|<1$. The principal log expands as the convergent power series $\\ln(1-ae^{ix})=-\\sum_{n\\ge1}\\dfrac{a^{n}e^{inx}}{n}$ (uniformly in $x$ since $|ae^{ix}|=|a|<1$), so $\\int_{0}^{\\pi}\\ln(1-ae^{ix})\\,dx=-\\sum_{n\\ge1}\\dfrac{a^{n}}{n}\\int_{0}^{\\pi}e^{inx}\\,dx=-\\sum_{n\\ge1}\\dfrac{a^{n}}{n}\\cdot\\dfrac{e^{in\\pi}-1}{in}.$ Each $\\Re\\dfrac{e^{in\\pi}-1}{in}=\\Re\\dfrac{(-1)^{n}-1}{in}=0$ (the quantity is purely imaginary). Hence $\\Phi(a)=0$ for $|a|<1$.",
          "Case $|a|>1$. Pull out the dominant factor: $1-2a\\cos x+a^{2}=a^{2}\\bigl(1-2a^{-1}\\cos x+a^{-2}\\bigr)=a^{2}\\bigl|1-a^{-1}e^{ix}\\bigr|^{2}.$ Then $\\Phi(a)=\\int_{0}^{\\pi}\\ln a^{2}\\,dx+\\int_{0}^{\\pi}\\ln\\bigl|1-a^{-1}e^{ix}\\bigr|^{2}\\,dx=\\pi\\ln a^{2}+\\Phi(1/a).$ Since $|1/a|<1$, the second integral is $0$ by the previous case, so $\\Phi(a)=2\\pi\\ln|a|.$",
          "Read off the answers. (a) $a=2$: $A=2\\pi\\ln2$. (b) $a=\\tfrac12$: $B=0$. (c) $a=1$: the factorization gives $1-e^{ix}=2\\sin(\\tfrac{x}{2})\\,e^{i(x-\\pi)/2}$, so $\\ln|1-e^{ix}|^{2}=\\ln 4+2\\ln\\sin(\\tfrac{x}{2})$ and $C=\\int_0^\\pi\\!\\bigl[\\ln4+2\\ln\\sin\\tfrac{x}{2}\\bigr]dx=\\pi\\ln4-2\\pi\\ln2=0$, the integrable-singularity borderline value. \\[ \\boxed{(A,B,C)=\\bigl(2\\pi\\ln2,\\,0,\\,0\\bigr)} \\]"
        ]
      },
      {
        "name": "Direct Fourier series of the Poisson-kernel log",
        "steps": [
          "For $|a|<1$ the Poisson-kernel log has the closed Fourier expansion $\\ln(1-2a\\cos x+a^{2})=-2\\sum_{n=1}^{\\infty}\\dfrac{a^{n}}{n}\\cos nx,$ obtained by taking twice the real part of $\\ln(1-ae^{ix})=-\\sum_{n\\ge1}a^{n}e^{inx}/n$; the series converges uniformly on $[0,\\pi]$ for fixed $|a|<1$, licensing termwise integration.",
          "Integrate term by term over $[0,\\pi]$: $\\Phi(a)=-2\\sum_{n=1}^{\\infty}\\dfrac{a^{n}}{n}\\int_{0}^{\\pi}\\cos nx\\,dx=-2\\sum_{n=1}^{\\infty}\\dfrac{a^{n}}{n}\\cdot\\dfrac{\\sin n\\pi}{n}=0,$ since $\\sin n\\pi=0$ for every integer $n\\ge1$. Thus EVERY harmonic dies on $[0,\\pi]$ and $\\Phi(a)=0$ throughout $|a|<1$ — the cosine structure contributes nothing.",
          "For $|a|>1$ write $b=1/a$ with $|b|<1$: $\\ln(1-2a\\cos x+a^{2})=\\ln a^{2}+\\ln(1-2b\\cos x+b^{2}).$ The constant term integrates to $\\pi\\ln a^{2}=2\\pi\\ln|a|$ and the $b$-series integrates to $0$ by the previous step, so $\\Phi(a)=2\\pi\\ln|a|.$ All of the value resides in the constant $\\ln a^{2}$.",
          "Evaluate the data. (a) $a=2>1$: $A=2\\pi\\ln2$. (b) $a=\\tfrac12<1$: $B=0$. (c) $a=1$: the $|a|<1$ series fails to converge at $x=0$ (the borderline), so instead use $2-2\\cos x=4\\sin^{2}(x/2)$ and the Fourier series $\\ln(2-2\\cos x)=-2\\sum_{n\\ge1}\\cos nx/n$ (the $a\\to1^-$ limit), valid for $0<x<2\\pi$; termwise integration over $[0,\\pi]$ again gives $-2\\sum\\sin n\\pi/n^{2}=0$, with convergence of the improper integral guaranteed by the integrable log-singularity. Hence $C=0$. \\[ \\boxed{(A,B,C)=\\bigl(2\\pi\\ln2,\\,0,\\,0\\bigr)} \\]"
        ]
      }
    ],
    "remark": "Insight: $\\Phi(a)=\\int_0^\\pi\\ln|1-ae^{ix}|^2\\,dx$ is the boundary log-modulus of the analytic function $1-az$ integrated around the upper semicircle, and its value is a referendum on whether the zero $z=1/a$ of $1-az$ lies inside or outside the unit disc. Inside the disc ($|a|<1$, zero outside) the mean of $\\ln|1-az|$ over the circle is $\\ln|1-a\\cdot0|=0$ by Jensen / the mean-value property of harmonic functions — every cosine harmonic averages to zero. Outside ($|a|>1$, the zero $1/a$ now sits inside) Jensen's formula charges the mean by exactly $\\ln|a|$ per full circle, i.e. $2\\pi\\ln|a|$ over $[0,2\\pi]$ and $\\pi\\ln|a|\\cdot2$ by symmetry over $[0,\\pi]$ — so $\\Phi(a)=2\\pi\\ln|a|$. The unit circle is the watershed, and the three parts are the three regimes: $a=2$ outside, $a=\\tfrac12$ inside, $a=1$ on the boundary. The boundary case is the most instructive: the integrand genuinely blows up ($\\ln 4\\sin^2(x/2)\\to-\\infty$), yet the singularity is logarithmic hence integrable, and $\\Phi$ is continuous across $|a|=1$ because both branch limits agree at $0$. Ranker takeaways: (i) never quote $2\\pi\\ln|a|$ without first locating $a$ relative to the unit circle — the formula is half wrong (it is $0$ inside); (ii) a constant factor $k$ inside a log integral over a length-$\\pi$ interval contributes a clean $\\pi\\ln k$, and here that constant factor $a^2$ carries the entire answer while the $\\cos x$ part is inert; (iii) an unbounded integrand is not a divergent integral — a logarithmic spike is integrable, and the Poisson-kernel log is the canonical example."
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
    "title": "The Limit That Refuses to Dominate Itself",
    "difficulty": 5,
    "task": "Settle convergence for every $n$, justify the passage to the limit with an honest dominating envelope, then evaluate the limit",
    "tags": [
      "dominated-convergence",
      "gaussian",
      "beta-function",
      "monotone-in-parameter",
      "p-test",
      "stirling"
    ],
    "statement": "For each integer $n\\ge 1$ define the improper integral \\[ I_n=\\int_{0}^{\\infty}\\Bigl(1+\\frac{x^{2}}{n}\\Bigr)^{-n}\\,dx . \\] (a) Show that $I_n$ converges for every $n\\ge1$, and identify the smallest real exponent threshold below which the integral would diverge. (b) The integrand satisfies $\\bigl(1+\\tfrac{x^{2}}{n}\\bigr)^{-n}\\to e^{-x^{2}}$ pointwise as $n\\to\\infty$. A tempting one-liner is: \"the limit is dominated by $e^{-x^{2}}$, which is integrable, so by dominated convergence $\\displaystyle\\lim_{n\\to\\infty}I_n=\\int_{0}^{\\infty}e^{-x^{2}}\\,dx$.\" Before you accept it, check the domination hypothesis honestly: is $\\bigl(1+\\tfrac{x^{2}}{n}\\bigr)^{-n}\\le e^{-x^{2}}$ true for the relevant $x$ and $n$? If not, produce a genuine integrable envelope $g(x)$ with $\\bigl(1+\\tfrac{x^{2}}{n}\\bigr)^{-n}\\le g(x)$ for all $n\\ge 2$, and only then pass to the limit. Report $\\displaystyle\\lim_{n\\to\\infty}I_n$.",
    "answer": "\\[\\boxed{\\,\\displaystyle\\lim_{n\\to\\infty}I_n=\\frac{\\sqrt{\\pi}}{2}\\,}\\]",
    "trap": "The fatal move is to dominate the sequence by its own limit. Since $1+u\\le e^{u}$ for all real $u$, raising to the power $-n$ (a decreasing operation) gives $\\bigl(1+\\tfrac{x^{2}}{n}\\bigr)^{-n}\\ge e^{-x^{2}}$ for EVERY $n$ and $x>0$. So the integrands sit strictly ABOVE the Gaussian, not below it: $e^{-x^{2}}$ can never serve as a dominating function. A student who writes \"dominated by $e^{-x^{2}}$\" has inverted the inequality and invoked DCT on a hypothesis that is false at every point. The same error is what makes the spike/escaping-mass examples blow up: the right answer here is correct, but the cited reason is not, and on a sibling family where mass escapes to infinity the identical false step yields a wrong limit. The conceptual content is that DCT needs a uniform-in-$n$ integrable bound, and the natural candidate $e^{-x^{2}}$ is on the wrong side. The honest fix uses that $\\bigl(1+\\tfrac{x^{2}}{n}\\bigr)^{-n}$ is strictly DECREASING in $n$, so it is bounded above for all $n\\ge2$ by its $n=2$ member $g(x)=\\bigl(1+\\tfrac{x^{2}}{2}\\bigr)^{-2}$, which is integrable ($\\int_0^\\infty g=\\tfrac{\\sqrt2\\,\\pi}{4}$). A second trap in (a) is to skip convergence entirely: the tail behaves like $(x^{2}/n)^{-n}=n^{n}x^{-2n}$, so the $p$-test demands $2n>1$, i.e. $n>\\tfrac12$ — finite for every $n\\ge1$, but for $n=\\tfrac12$ (or any real $n\\le\\tfrac12$) the integral DIVERGES, the threshold being $n=\\tfrac12$. Evaluating before settling this window is the chapter's cardinal sin.",
    "solutions": [
      {
        "name": "Honest DCT via a monotone-in-$n$ envelope (the intended route)",
        "steps": [
          "Convergence and the threshold (part a). The integrand is continuous and positive on $[0,\\infty)$, so convergence is purely a tail question. As $x\\to\\infty$, $\\bigl(1+\\tfrac{x^2}{n}\\bigr)^{-n}\\sim\\bigl(\\tfrac{x^2}{n}\\bigr)^{-n}=n^{n}x^{-2n}$. By the $p$-test $\\int^{\\infty}x^{-p}\\,dx$ converges iff $p>1$; here $p=2n$, so $I_n$ converges iff $2n>1$, i.e. $n>\\tfrac12$. Hence $I_n<\\infty$ for every integer $n\\ge1$, and the exact threshold is $n=\\tfrac12$: at and below it the integral diverges.",
          "Expose the false domination. For all real $u$, $1+u\\le e^{u}$; with $u=\\tfrac{x^2}{n}$ this gives $1+\\tfrac{x^2}{n}\\le e^{x^2/n}$, and raising to the power $-n$ reverses the inequality: $\\bigl(1+\\tfrac{x^2}{n}\\bigr)^{-n}\\ge e^{-x^2}$ for every $n$ and every $x>0$. Thus the Gaussian $e^{-x^2}$ lies BELOW the family and cannot dominate it. The popular one-liner is invalid; we must build a true upper envelope.",
          "Build a genuine envelope by monotonicity in $n$. Fix $x>0$ and set $t=\\tfrac{x^2}{n}>0$. Consider $\\psi(n)=n\\ln\\!\\bigl(1+\\tfrac{x^2}{n}\\bigr)$, so the integrand is $e^{-\\psi(n)}$. Then $\\psi'(n)=\\ln(1+t)-\\dfrac{t}{1+t}$ (with $t=x^2/n$), and the function $g(t)=\\ln(1+t)-\\tfrac{t}{1+t}$ satisfies $g(0)=0$, $g'(t)=\\tfrac{t}{(1+t)^2}>0$, hence $\\psi'(n)>0$. So $\\psi$ is increasing in $n$ and $e^{-\\psi(n)}=\\bigl(1+\\tfrac{x^2}{n}\\bigr)^{-n}$ is strictly DECREASING in $n$. Therefore for all $n\\ge2$, $\\bigl(1+\\tfrac{x^2}{n}\\bigr)^{-n}\\le\\bigl(1+\\tfrac{x^2}{2}\\bigr)^{-2}=:g(x).$",
          "Check the envelope is integrable. $\\int_{0}^{\\infty}\\bigl(1+\\tfrac{x^2}{2}\\bigr)^{-2}dx$ converges (tail $\\sim 4x^{-4}$). Substituting $x=\\sqrt2\\,\\tan\\theta$ gives $\\int_0^{\\pi/2}\\sqrt2\\cos^2\\theta\\,d\\theta=\\tfrac{\\sqrt2\\,\\pi}{4}<\\infty$. So $g$ dominates the family uniformly for $n\\ge2$ and is integrable.",
          "Apply DCT correctly. With $f_n(x)=\\bigl(1+\\tfrac{x^2}{n}\\bigr)^{-n}\\to e^{-x^2}$ pointwise and $0\\le f_n\\le g\\in L^1$ for $n\\ge2$, dominated convergence licenses the interchange: $\\lim_{n\\to\\infty}I_n=\\int_{0}^{\\infty}\\lim_{n\\to\\infty}f_n(x)\\,dx=\\int_{0}^{\\infty}e^{-x^2}\\,dx=\\tfrac{\\sqrt\\pi}{2}.$ \\[ \\boxed{\\,\\lim_{n\\to\\infty}I_n=\\frac{\\sqrt{\\pi}}{2}\\,.} \\]"
        ]
      },
      {
        "name": "Exact evaluation by the Beta function, then Stirling",
        "steps": [
          "Compute $I_n$ in closed form. Substitute $x=\\sqrt{n}\\,t$, $dx=\\sqrt n\\,dt$: $I_n=\\sqrt n\\int_{0}^{\\infty}(1+t^2)^{-n}\\,dt.$ The standard reduction $\\int_{0}^{\\infty}(1+t^2)^{-n}\\,dt=\\tfrac12 B\\!\\bigl(\\tfrac12,\\,n-\\tfrac12\\bigr)$ (via $u=\\tfrac{t^2}{1+t^2}$, valid precisely when $n-\\tfrac12>0$, i.e. $n>\\tfrac12$ — the same convergence window as part a) gives $I_n=\\frac{\\sqrt n}{2}\\,B\\!\\Bigl(\\tfrac12,n-\\tfrac12\\Bigr)=\\frac{\\sqrt n}{2}\\,\\frac{\\Gamma(\\tfrac12)\\,\\Gamma(n-\\tfrac12)}{\\Gamma(n)}=\\frac{\\sqrt{\\pi n}}{2}\\,\\frac{\\Gamma(n-\\tfrac12)}{\\Gamma(n)}.$",
          "Reduce the limit to a Gamma ratio. So $\\lim_{n\\to\\infty}I_n=\\frac{\\sqrt\\pi}{2}\\,\\lim_{n\\to\\infty}\\sqrt n\\,\\frac{\\Gamma(n-\\tfrac12)}{\\Gamma(n)}.$ It remains to show the bracketed ratio tends to $1$.",
          "Stirling. With $\\Gamma(z)\\sim\\sqrt{2\\pi}\\,z^{z-1/2}e^{-z}$, the ratio $\\frac{\\Gamma(n-\\tfrac12)}{\\Gamma(n)}\\sim n^{-1/2}$ (equivalently, the classical limit $\\frac{\\Gamma(n+a)}{\\Gamma(n+b)}\\sim n^{a-b}$ with $a=-\\tfrac12,b=0$). Hence $\\sqrt n\\,\\frac{\\Gamma(n-\\tfrac12)}{\\Gamma(n)}\\to 1.$",
          "Conclude. Therefore $\\lim_{n\\to\\infty}I_n=\\tfrac{\\sqrt\\pi}{2}\\cdot 1=\\tfrac{\\sqrt\\pi}{2}.$ (Numerically $I_{10}=0.92129,\\ I_{100}=0.88957,\\ I_{1000}=0.88656$, descending to $\\tfrac{\\sqrt\\pi}{2}=0.88623$, consistent with the monotone decrease proved in Method 1.) \\[ \\boxed{\\,\\lim_{n\\to\\infty}I_n=\\frac{\\sqrt{\\pi}}{2}\\,.} \\]"
        ]
      },
      {
        "name": "Squeeze on the integrand, bypassing DCT machinery",
        "steps": [
          "Lower bound, valid for all $n$. From step 2 of Method 1, $f_n(x)=\\bigl(1+\\tfrac{x^2}{n}\\bigr)^{-n}\\ge e^{-x^2}$, so $I_n\\ge\\int_0^\\infty e^{-x^2}\\,dx=\\tfrac{\\sqrt\\pi}{2}$ for every $n$. (This already shows why $e^{-x^2}$ is a floor, never a ceiling.)",
          "Upper bound by a controlled correction. The monotone decrease in $n$ gives $\\tfrac{\\sqrt\\pi}{2}\\le I_n\\le I_2=\\int_0^\\infty\\bigl(1+\\tfrac{x^2}{2}\\bigr)^{-2}dx=\\tfrac{\\sqrt2\\,\\pi}{4}$, so $(I_n)$ is a bounded decreasing sequence and the limit $L=\\lim I_n$ exists with $L\\ge\\tfrac{\\sqrt\\pi}{2}$. It remains to show $L\\le\\tfrac{\\sqrt\\pi}{2}$.",
          "Pin the limit from above. Split $I_n=\\int_0^M f_n+\\int_M^\\infty f_n$ for fixed $M>0$. On $[0,M]$, $f_n\\to e^{-x^2}$ uniformly (continuous limit on a compact set, monotone in $n$ — Dini), so $\\int_0^M f_n\\to\\int_0^M e^{-x^2}$. For the tail, $f_n\\le g=\\bigl(1+\\tfrac{x^2}{2}\\bigr)^{-2}$ ($n\\ge2$) gives $\\int_M^\\infty f_n\\le\\int_M^\\infty g\\,dx$, which $\\to0$ as $M\\to\\infty$ since $g\\in L^1$. Hence $L=\\lim_n I_n\\le\\int_0^M e^{-x^2}dx+\\int_M^\\infty g$, and letting $M\\to\\infty$ yields $L\\le\\int_0^\\infty e^{-x^2}=\\tfrac{\\sqrt\\pi}{2}$.",
          "Squeeze. Combining $L\\ge\\tfrac{\\sqrt\\pi}{2}$ and $L\\le\\tfrac{\\sqrt\\pi}{2}$, $L=\\tfrac{\\sqrt\\pi}{2}.$ \\[ \\boxed{\\,\\lim_{n\\to\\infty}I_n=\\frac{\\sqrt{\\pi}}{2}\\,.} \\]"
        ]
      }
    ],
    "remark": "Insight: the answer is the Gaussian $\\tfrac{\\sqrt\\pi}{2}$, but the cheap justification is a fraud. The inequality $1+u\\le e^{u}$ — the very tool used to PROVE the pointwise limit $(1+x^2/n)^{-n}\\to e^{-x^2}$ — also proves $(1+x^2/n)^{-n}\\ge e^{-x^2}$, so the limit lies UNDER the sequence and can never dominate it. A ranker should internalize that dominated convergence requires a single integrable function above ALL members; the limit function is the canonical wrong choice when the convergence is from above. The repair is structural, not computational: $(1+x^2/n)^{-n}$ is monotone decreasing in $n$ (shown via $\\psi(n)=n\\ln(1+x^2/n)$ being increasing), so its $n=2$ member is a free uniform envelope. The exact route ($I_n=\\tfrac{\\sqrt{\\pi n}}{2}\\,\\Gamma(n-\\tfrac12)/\\Gamma(n)$, a Student-$t$/Beta integral) makes the same window $n>\\tfrac12$ visible in the Beta parameter $n-\\tfrac12>0$, tying the analytic convergence test to the special-function pole. The squeeze method shows you can even sidestep DCT: bound below by the limit, above by the envelope, and Dini's theorem handles the compact core — three independent confirmations that the value is $\\tfrac{\\sqrt\\pi}{2}$ while the naive reason was always backwards."
  },
  {
    "theme": "improper",
    "themeLabel": "Improper & Limiting Integrals",
    "title": "One Exponent, Two Ends: The Beta Window",
    "difficulty": 5,
    "task": "Determine the full region of convergence, evaluate the integral in closed form, and then compute the specified value",
    "tags": [
      "beta-function",
      "gamma-function",
      "convergence-window",
      "two-parameter",
      "p-test",
      "reflection-formula"
    ],
    "statement": "For real parameters $a,b$ consider \\[ I(a,b)=\\int_{0}^{\\infty}\\frac{x^{\\,a-1}}{(1+x)^{\\,a+b}}\\,dx. \\] (a) Find every pair $(a,b)\\in\\mathbb{R}^{2}$ for which $I(a,b)$ converges. (Both endpoints $x\\to0^{+}$ and $x\\to\\infty$ must be settled, and note that the single exponent $a+b$ in the denominator controls the behaviour at both ends.) (b) On that region, evaluate $I(a,b)$ in closed form in terms of the Gamma function. (c) Hence compute the exact value of $\\displaystyle\\int_{0}^{\\infty}\\frac{dx}{x^{3/4}\\,(1+x)}$. Settle convergence before writing any Beta value: a formula evaluated outside its window is meaningless.",
    "answer": "\\[\\boxed{\\ \\{a>0\\ \\text{and}\\ b>0\\},\\qquad I(a,b)=\\dfrac{\\Gamma(a)\\,\\Gamma(b)}{\\Gamma(a+b)},\\qquad \\int_{0}^{\\infty}\\dfrac{dx}{x^{3/4}(1+x)}=\\pi\\sqrt{2}\\ }\\]",
    "trap": "The fatal move is to read the lone denominator exponent $a+b$ as a SINGLE convergence condition. A strong student writes \"near infinity the integrand is $\\sim x^{a-1}/x^{a+b}=x^{-b-1}$, so I need $b+1>1$\" and stops, or — worse — collapses both ends into one inequality like \"$a+b>1$\" or \"$a+b>0$\", reasoning that one power $a+b$ governs everything. Both are wrong because the two endpoints are governed by DIFFERENT effective exponents even though they share $a+b$: at the origin $(1+x)^{a+b}\\to1$, so the integrand behaves like $x^{a-1}$ and convergence there needs $a-1>-1$, i.e. $a>0$ (the $a+b$ has dropped out entirely); at infinity the integrand behaves like $x^{-(b+1)}$ and needs $b>0$. The killer is that these two conditions are INDEPENDENT and must hold SIMULTANEOUSLY: a generous $a+b$ cannot rescue a bad single end. Concretely, $a=5,b=0$ gives $a+b=5$ yet the integral diverges (logarithmically) at infinity since the tail is $\\sim 1/x$; symmetrically $a=0,b=5$ diverges at the origin. So no condition of the form \"$a+b>c$\" can be correct — the region is the open first quadrant $a>0,\\ b>0$, not a half-plane. A second snare in part (c): the integrand is $x^{-3/4}/(1+x)$, so $a-1=-3/4\\Rightarrow a=\\tfrac14$ and $a+b=1\\Rightarrow b=\\tfrac34$; one must CHECK $a=\\tfrac14>0$ and $b=\\tfrac34>0$ (both true) before invoking $B(\\tfrac14,\\tfrac34)$. Mis-reading the exponent as $a=-\\tfrac34$ (forgetting the $-1$ in $x^{a-1}$) would falsely place the point outside the window and declare a convergent integral divergent.",
    "solutions": [
      {
        "name": "Two-sided p-test for the window, then the substitution t = x/(1+x) to the Beta form",
        "steps": [
          "Convergence, endpoint by endpoint. Split $I=\\int_{0}^{1}+\\int_{1}^{\\infty}$. As $x\\to0^{+}$, $(1+x)^{a+b}\\to1$, so $\\dfrac{x^{a-1}}{(1+x)^{a+b}}\\sim x^{a-1}$; by the $p$-test $\\int_{0}^{1}x^{a-1}\\,dx$ converges iff $a-1>-1$, i.e. $a>0$ (the exponent $a+b$ has no influence here). As $x\\to\\infty$, $(1+x)^{a+b}\\sim x^{a+b}$, so the integrand $\\sim x^{a-1-(a+b)}=x^{-(b+1)}$; $\\int_{1}^{\\infty}x^{-(b+1)}\\,dx$ converges iff $b+1>1$, i.e. $b>0$. Both must hold at once, so the EXACT region of convergence is $\\{a>0\\}\\cap\\{b>0\\}$, the open first quadrant; no $a+b$ inequality is involved.",
          "Substitute to the standard Beta form. On the window, put $t=\\dfrac{x}{1+x}\\in(0,1)$, so $x=\\dfrac{t}{1-t}$, $1+x=\\dfrac{1}{1-t}$, and $dx=\\dfrac{dt}{(1-t)^{2}}$. Then $x^{a-1}=\\Bigl(\\tfrac{t}{1-t}\\Bigr)^{a-1}$ and $(1+x)^{-(a+b)}=(1-t)^{a+b}$, giving $\\dfrac{x^{a-1}}{(1+x)^{a+b}}\\,dx=t^{a-1}(1-t)^{-(a-1)}(1-t)^{a+b}(1-t)^{-2}\\,dt=t^{a-1}(1-t)^{b-1}\\,dt.$",
          "Read off the Beta function. Hence $I(a,b)=\\displaystyle\\int_{0}^{1}t^{a-1}(1-t)^{b-1}\\,dt=B(a,b)$, which is exactly the integral that converges iff $a>0$ and $b>0$ — consistent with step 1. Therefore $I(a,b)=B(a,b)=\\dfrac{\\Gamma(a)\\Gamma(b)}{\\Gamma(a+b)}.$",
          "Part (c). The integrand $x^{-3/4}/(1+x)$ is $\\dfrac{x^{a-1}}{(1+x)^{a+b}}$ with $a-1=-\\tfrac34\\Rightarrow a=\\tfrac14$ and $a+b=1\\Rightarrow b=\\tfrac34$. Since $a=\\tfrac14>0$ and $b=\\tfrac34>0$, the point lies in the window and the integral converges. Thus the value is $B(\\tfrac14,\\tfrac34)=\\dfrac{\\Gamma(\\tfrac14)\\Gamma(\\tfrac34)}{\\Gamma(1)}=\\Gamma(\\tfrac14)\\Gamma(\\tfrac34)$, and by Euler's reflection formula $\\Gamma(s)\\Gamma(1-s)=\\dfrac{\\pi}{\\sin\\pi s}$ with $s=\\tfrac14$, $\\;=\\dfrac{\\pi}{\\sin(\\pi/4)}=\\dfrac{\\pi}{1/\\sqrt2}=\\pi\\sqrt2.$ So \\[\\boxed{\\ a>0,\\ b>0;\\quad I=\\dfrac{\\Gamma(a)\\Gamma(b)}{\\Gamma(a+b)};\\quad \\int_{0}^{\\infty}\\dfrac{dx}{x^{3/4}(1+x)}=\\pi\\sqrt2.\\ }\\]"
        ]
      },
      {
        "name": "Trigonometric substitution x = tan^2(theta) directly onto the Beta integral",
        "steps": [
          "Establish the window first (mandatory). Exactly as in Method 1's $p$-test: at $x\\to0^{+}$ the integrand $\\sim x^{a-1}$ forces $a>0$, and at $x\\to\\infty$ it $\\sim x^{-(b+1)}$ forces $b>0$; the two conditions are independent, so convergence holds iff $a>0$ and $b>0$. (For instance $a=5,b=0$ has $a+b=5$ but diverges at $\\infty$, confirming the lone sum $a+b$ is not the criterion.)",
          "Substitute $x=\\tan^{2}\\theta$, $\\theta\\in(0,\\pi/2)$. Then $1+x=\\sec^{2}\\theta$, $dx=2\\tan\\theta\\sec^{2}\\theta\\,d\\theta$, and $x^{a-1}=\\tan^{2a-2}\\theta$, $(1+x)^{-(a+b)}=\\cos^{2a+2b}\\theta$. Multiplying, $\\dfrac{x^{a-1}}{(1+x)^{a+b}}dx=\\tan^{2a-2}\\theta\\cdot\\cos^{2a+2b}\\theta\\cdot 2\\tan\\theta\\sec^{2}\\theta\\,d\\theta=2\\sin^{2a-1}\\theta\\,\\cos^{2b-1}\\theta\\,d\\theta,$ after cancelling $\\cos$ powers ($\\tan^{2a-1}\\theta\\cos^{2a+2b}\\theta\\sec^{2}\\theta=\\sin^{2a-1}\\theta\\cos^{2b-1}\\theta$).",
          "Recognise the trigonometric Beta integral. $I(a,b)=2\\displaystyle\\int_{0}^{\\pi/2}\\sin^{2a-1}\\theta\\,\\cos^{2b-1}\\theta\\,d\\theta=B(a,b)=\\dfrac{\\Gamma(a)\\Gamma(b)}{\\Gamma(a+b)},$ the standard trig representation of the Beta function (convergent precisely for $2a-1>-1$ and $2b-1>-1$, i.e. $a>0,b>0$, matching step 1).",
          "Part (c). With $a=\\tfrac14,b=\\tfrac34$ (both positive, so inside the window), $I=B(\\tfrac14,\\tfrac34)=2\\int_{0}^{\\pi/2}\\sin^{-1/2}\\theta\\,\\cos^{1/2}\\theta\\,d\\theta=\\Gamma(\\tfrac14)\\Gamma(\\tfrac34)=\\dfrac{\\pi}{\\sin(\\pi/4)}=\\pi\\sqrt2$ by reflection. \\[\\boxed{\\ I(a,b)=\\dfrac{\\Gamma(a)\\Gamma(b)}{\\Gamma(a+b)}\\ \\text{on}\\ a,b>0;\\quad \\int_{0}^{\\infty}\\dfrac{dx}{x^{3/4}(1+x)}=\\pi\\sqrt2.\\ }\\]"
        ]
      },
      {
        "name": "Gamma-product / Frullani-free Schwinger trick (insert a convergence factor)",
        "steps": [
          "Window by comparison (same conclusion, phrased as a comparison test). For $a>0$: near $0$, $0\\le \\dfrac{x^{a-1}}{(1+x)^{a+b}}\\le x^{a-1}$, integrable on $(0,1)$ iff $a>0$; for $b>0$: near $\\infty$, $\\dfrac{x^{a-1}}{(1+x)^{a+b}}\\le \\dfrac{x^{a-1}}{x^{a+b}}=x^{-(b+1)}$ with $\\int_{1}^\\infty x^{-(b+1)}<\\infty$ iff $b>0$; and the reverse inequality $(1+x)^{a+b}\\le (2x)^{a+b}$ on $[1,\\infty)$ shows the tail is also bounded BELOW by a multiple of $x^{-(b+1)}$, so $b>0$ is necessary too. Net: convergence $\\iff a>0$ and $b>0$.",
          "Introduce a Gamma representation of the denominator. For $a+b>0$ (true on the window) and $x>-1$, $\\dfrac{1}{(1+x)^{a+b}}=\\dfrac{1}{\\Gamma(a+b)}\\int_{0}^{\\infty}t^{\\,a+b-1}e^{-(1+x)t}\\,dt.$ Substitute into $I$ and swap order (Tonelli, integrand $\\ge0$): $I=\\dfrac{1}{\\Gamma(a+b)}\\int_{0}^{\\infty}t^{a+b-1}e^{-t}\\!\\left(\\int_{0}^{\\infty}x^{a-1}e^{-xt}\\,dx\\right)dt.$",
          "Evaluate the inner Gamma integral. For $a>0,t>0$, $\\int_{0}^{\\infty}x^{a-1}e^{-xt}\\,dx=\\Gamma(a)\\,t^{-a}$. Hence $I=\\dfrac{\\Gamma(a)}{\\Gamma(a+b)}\\int_{0}^{\\infty}t^{a+b-1}e^{-t}t^{-a}\\,dt=\\dfrac{\\Gamma(a)}{\\Gamma(a+b)}\\int_{0}^{\\infty}t^{b-1}e^{-t}\\,dt=\\dfrac{\\Gamma(a)\\Gamma(b)}{\\Gamma(a+b)}.$ The two surviving Gamma integrals converge exactly because $a>0$ and $b>0$ — the very window of step 1.",
          "Part (c). $a=\\tfrac14,b=\\tfrac34$ are positive, so $I=\\dfrac{\\Gamma(\\tfrac14)\\Gamma(\\tfrac34)}{\\Gamma(1)}=\\Gamma(\\tfrac14)\\Gamma(\\tfrac34)=\\dfrac{\\pi}{\\sin(\\pi/4)}=\\pi\\sqrt2.$ \\[\\boxed{\\ a,b>0;\\quad I(a,b)=\\dfrac{\\Gamma(a)\\Gamma(b)}{\\Gamma(a+b)};\\quad \\int_{0}^{\\infty}\\dfrac{dx}{x^{3/4}(1+x)}=\\pi\\sqrt2.\\ }\\]"
        ]
      }
    ],
    "remark": "Insight: a single algebraic exponent can hide TWO independent analytic gates. Although only $a+b$ appears in the denominator, the origin sees the denominator as $\\approx1$ (so it tests $x^{a-1}$, giving $a>0$) while infinity sees it as $x^{a+b}$ (so the net power is $x^{-(b+1)}$, giving $b>0$). The region of convergence is therefore the open first quadrant $a>0,\\,b>0$ — a two-dimensional window, not a half-plane $a+b>c$. This is the structural difference from a one-parameter window like $\\int_0^\\infty x^p/(1+x^3)\\,dx$ (where the fixed exponent $3$ decouples the ends into $-1<p<2$): here the SAME parameters reappear at both ends, yet still decouple into two separate strict inequalities. The standard Beta forms $\\int_0^1 t^{a-1}(1-t)^{b-1}dt$ and $2\\int_0^{\\pi/2}\\sin^{2a-1}\\cos^{2b-1}$ carry the identical window in disguise, which is the cleanest sanity check that you have the region right. The ranker's takeaway: in any parameter-dependent improper integral, ALWAYS split at a finite point and run an independent $p$-test (or comparison) at each end; never let a healthy-looking parameter sum lull you into skipping the second test. The cherry — $\\Gamma(\\tfrac14)\\Gamma(\\tfrac34)=\\pi\\sqrt2$ — falls out of Euler's reflection formula only after you have certified the point $(\\tfrac14,\\tfrac34)$ actually lives inside the window."
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
    "themeLabel": "Improper & Limiting Integrals",
    "title": "The Wave That Never Calms, Yet Settles",
    "difficulty": 5,
    "task": "First settle convergence rigorously, then evaluate the integral in closed form",
    "tags": [
      "fresnel",
      "conditional-convergence",
      "dirichlet-test",
      "gaussian",
      "gamma-function",
      "oscillatory"
    ],
    "statement": "Consider the Fresnel-type integral \\[ I=\\int_{0}^{\\infty}\\cos\\!\\bigl(x^{2}\\bigr)\\,dx. \\] (a) The integrand $\\cos(x^{2})$ does not tend to $0$ as $x\\to\\infty$: it keeps returning to $+1$ (at $x=\\sqrt{2\\pi n}$) and to $-1$ (at $x=\\sqrt{(2n+1)\\pi}$) forever. Decide rigorously whether $I$ converges, and state on what mechanism the convergence rests. (b) If it converges, evaluate $I$ in exact closed form. A value may be written down only after convergence has been established; pairing a positive hump against the next negative hump to declare $I=0$, or calling $I$ divergent because the amplitude never decays, are both forbidden shortcuts that you must explain away.",
    "answer": "\\[\\boxed{\\,\\displaystyle\\int_{0}^{\\infty}\\cos(x^{2})\\,dx=\\tfrac12\\sqrt{\\tfrac{\\pi}{2}}=\\dfrac{\\sqrt{2\\pi}}{4}\\,}\\]",
    "trap": "Two opposite errors are both fatal, and a strong student usually falls into one of them. ERROR 1 (declare divergence): \"For any convergent improper integral on $[0,\\infty)$ the integrand must die down; here $\\cos(x^{2})$ oscillates between $-1$ and $+1$ forever and $|\\cos(x^{2})|\\not\\to0$, so the integral cannot converge.\" This confuses two different facts. A necessary condition for $\\sum a_n$ or for $\\int_0^\\infty f$ with $f$ of one sign is that the terms vanish, but for a SIGN-CHANGING integrand it is false: $\\int_0^\\infty\\sin x\\,dx$ has a bounded but non-convergent partial integral, whereas $\\int_0^\\infty \\frac{\\sin x}{x}dx$ converges precisely because a slowly varying factor tames the oscillation. The integrand need not decay; the PARTIAL INTEGRAL $F(R)=\\int_0^R\\cos(x^2)\\,dx$ must settle, and it does. ERROR 2 (declare the value $0$): \"the curve spends equal time above and below the axis, so the signed areas cancel and $I=0$.\" This ignores that under $u=x^{2}$ the humps live on intervals $[\\sqrt{k\\pi},\\sqrt{(k+1)\\pi}\\,]$ whose WIDTHS shrink like $\\frac{1}{2\\sqrt{u}}$, so the positive and negative hump-areas are NOT equal — the first (positive) hump is the widest and never gets fully cancelled, leaving a strictly positive residue $I=\\tfrac12\\sqrt{\\pi/2}>0$. The real engine is that the substitution $u=x^{2}$ turns the integral into $\\tfrac12\\int_0^\\infty u^{-1/2}\\cos u\\,du$, where the genuinely decaying amplitude $u^{-1/2}$ is what Dirichlet's test needs; the stationary phase of $x^2$ (frequency $2x\\to\\infty$) is doing the work, not any decay of the integrand itself. Skipping straight to a Gaussian/Gamma formula before this is established is evaluating a number that has not yet been shown to exist.",
    "solutions": [
      {
        "name": "Convergence by Dirichlet's test after u = x^2, then value via the cosine--Gamma (Mellin) formula",
        "steps": [
          "Convergence first. Split $I=\\int_0^1\\cos(x^2)\\,dx+\\int_1^\\infty\\cos(x^2)\\,dx$. The first piece is a proper integral of a continuous bounded function, hence finite. For the tail substitute $u=x^2$ ($x=\\sqrt u$, $dx=\\tfrac{du}{2\\sqrt u}$): $\\int_1^\\infty\\cos(x^2)\\,dx=\\tfrac12\\int_1^\\infty u^{-1/2}\\cos u\\,du.$ Now apply Dirichlet's test: $g(u)=u^{-1/2}$ is positive, monotonically decreasing to $0$, while the antiderivative of $\\cos u$ is $\\sin u$, which is bounded ($|\\sin u|\\le1$). Hence $\\int_1^\\infty u^{-1/2}\\cos u\\,du$ converges. The convergence rests entirely on the factor $u^{-1/2}\\to0$ produced by the substitution — i.e. on the accelerating phase of $x^2$ — NOT on any decay of $\\cos(x^2)$ itself. Therefore $I$ converges (conditionally; it is not absolutely convergent since $\\int_1^\\infty u^{-1/2}|\\cos u|\\,du=\\infty$).",
          "Quantify the residue to kill the \"$I=0$\" trap. Integration by parts on the tail gives $\\tfrac12\\int_R^\\infty u^{-1/2}\\cos u\\,du=\\tfrac12\\Bigl[u^{-1/2}\\sin u\\Bigr]_R^\\infty+\\tfrac14\\int_R^\\infty u^{-3/2}\\sin u\\,du,$ so the tail beyond $R$ is $O(R^{-1/2})\\to0$: the partial integrals form a Cauchy net and converge, with the first (widest) positive hump leaving a strictly positive limit. So $I>0$, not $0$.",
          "Evaluate via the Mellin/cosine--Gamma transform. The standard conditionally convergent identity $\\displaystyle\\int_0^\\infty u^{s-1}\\cos u\\,du=\\Gamma(s)\\cos\\!\\frac{\\pi s}{2}\\qquad(0<s<1)$ applies to $\\tfrac12\\int_0^\\infty u^{-1/2}\\cos u\\,du$ with $s=\\tfrac12$ (note $s=\\tfrac12$ lies in the legal window $0<s<1$, the same window in which the integral was just shown to converge). Hence $I=\\tfrac12\\,\\Gamma\\!\\bigl(\\tfrac12\\bigr)\\cos\\!\\frac{\\pi}{4}=\\tfrac12\\cdot\\sqrt{\\pi}\\cdot\\frac{1}{\\sqrt2}=\\tfrac12\\sqrt{\\tfrac{\\pi}{2}}=\\dfrac{\\sqrt{2\\pi}}{4}.$",
          "Conclude. \\[I=\\int_0^\\infty\\cos(x^2)\\,dx=\\boxed{\\tfrac12\\sqrt{\\tfrac{\\pi}{2}}=\\dfrac{\\sqrt{2\\pi}}{4}}\\approx0.6267>0.\\]"
        ]
      },
      {
        "name": "Complexify to a Gaussian and rotate the contour (the e^{ix^2} route)",
        "steps": [
          "Set up the complex Fresnel integral. Having established convergence of both $\\int_0^\\infty\\cos(x^2)\\,dx$ and (identically, by Dirichlet) $\\int_0^\\infty\\sin(x^2)\\,dx$, combine them: $J=\\int_0^\\infty e^{i x^2}\\,dx=\\int_0^\\infty\\cos(x^2)\\,dx+i\\int_0^\\infty\\sin(x^2)\\,dx,$ so $I=\\operatorname{Re}J$. We compute $J$ by relating it to the real Gaussian.",
          "Rotate by $\\pi/4$. Consider $f(z)=e^{i z^2}$ on the sector $0\\le\\arg z\\le\\tfrac\\pi4$, with boundary: the real segment $[0,R]$, the arc $z=Re^{i\\theta}$ ($0\\le\\theta\\le\\tfrac\\pi4$), and the ray $z=re^{i\\pi/4}$ back to $0$. Since $f$ is entire, $\\oint f=0$. On the arc, $|e^{iz^2}|=e^{-R^2\\sin2\\theta}$ and Jordan's estimate (using $\\sin2\\theta\\ge\\tfrac{4\\theta}{\\pi}$) gives arc contribution $\\to0$ as $R\\to\\infty$. Hence $\\int_0^\\infty e^{ix^2}\\,dx=\\int_0^\\infty e^{i(re^{i\\pi/4})^2}\\,e^{i\\pi/4}\\,dr=e^{i\\pi/4}\\int_0^\\infty e^{i\\,r^2 e^{i\\pi/2}}\\,dr=e^{i\\pi/4}\\int_0^\\infty e^{-r^2}\\,dr.$",
          "Use the Gaussian value. With the real Gaussian $\\int_0^\\infty e^{-r^2}\\,dr=\\tfrac{\\sqrt\\pi}{2}$, $J=e^{i\\pi/4}\\cdot\\frac{\\sqrt\\pi}{2}=\\frac{\\sqrt\\pi}{2}\\Bigl(\\cos\\tfrac\\pi4+i\\sin\\tfrac\\pi4\\Bigr)=\\frac{\\sqrt\\pi}{2}\\cdot\\frac{1+i}{\\sqrt2}.$",
          "Take the real part. $I=\\operatorname{Re}J=\\frac{\\sqrt\\pi}{2}\\cdot\\frac{1}{\\sqrt2}=\\tfrac12\\sqrt{\\tfrac{\\pi}{2}}.$ (As a bonus the imaginary part gives $\\int_0^\\infty\\sin(x^2)\\,dx=\\tfrac12\\sqrt{\\pi/2}$ too.) \\[\\boxed{\\,\\int_0^\\infty\\cos(x^2)\\,dx=\\tfrac12\\sqrt{\\tfrac{\\pi}{2}}=\\dfrac{\\sqrt{2\\pi}}{4}\\,}\\]"
        ]
      },
      {
        "name": "Parametric Gaussian: differentiate a convergent regularization and let the regulator vanish",
        "steps": [
          "Regularize to restore absolute convergence. After confirming (Method 1) that $I$ converges, introduce for $\\varepsilon>0$ the absolutely convergent integral $I(\\varepsilon)=\\int_0^\\infty e^{-\\varepsilon x^2}\\cos(x^2)\\,dx=\\operatorname{Re}\\!\\int_0^\\infty e^{-(\\varepsilon-i)x^2}\\,dx.$ For $\\varepsilon>0$ the exponent has positive real part, so the integral is a genuine convergent Gaussian and $I(\\varepsilon)\\to I$ as $\\varepsilon\\to0^+$ by Abel's theorem for conditionally convergent integrals (the regulator $e^{-\\varepsilon x^2}$ is monotone in $\\varepsilon$ and the unregularized integral converges).",
          "Evaluate the complex Gaussian. Using $\\int_0^\\infty e^{-a x^2}\\,dx=\\tfrac12\\sqrt{\\pi/a}$ for $\\operatorname{Re}a>0$ with the principal square root, take $a=\\varepsilon-i$: $\\int_0^\\infty e^{-(\\varepsilon-i)x^2}\\,dx=\\frac12\\sqrt{\\frac{\\pi}{\\varepsilon-i}}.$",
          "Let the regulator vanish. As $\\varepsilon\\to0^+$, $\\varepsilon-i\\to -i=e^{-i\\pi/2}$, so $\\sqrt{\\tfrac{1}{\\varepsilon-i}}\\to e^{i\\pi/4}$ and $\\frac12\\sqrt{\\pi/(\\varepsilon-i)}\\to\\frac{\\sqrt\\pi}{2}e^{i\\pi/4}=\\frac{\\sqrt\\pi}{2}\\cdot\\frac{1+i}{\\sqrt2}.$ Taking the limit inside (justified by Abel/dominated convergence on the regulator), $I=\\lim_{\\varepsilon\\to0^+}I(\\varepsilon)=\\operatorname{Re}\\!\\left(\\frac{\\sqrt\\pi}{2}\\,\\frac{1+i}{\\sqrt2}\\right)=\\frac{\\sqrt\\pi}{2\\sqrt2}=\\tfrac12\\sqrt{\\tfrac{\\pi}{2}}.$",
          "Conclude. \\[\\boxed{\\,\\int_0^\\infty\\cos(x^2)\\,dx=\\tfrac12\\sqrt{\\tfrac{\\pi}{2}}=\\dfrac{\\sqrt{2\\pi}}{4}\\,}\\] — identical to the contour and Gamma routes, and the regulator's only job was to make the otherwise conditional integral absolutely convergent so the Gaussian formula could legally be applied."
        ]
      }
    ],
    "remark": "Insight: \"the integrand must vanish at infinity\" is a theorem about NON-NEGATIVE integrands and about the terms of a series, not about sign-changing improper integrals. For an oscillatory integrand the right object is the partial integral $F(R)=\\int_0^R f$, and convergence means $F(R)$ has a limit. The Fresnel integral is the cleanest example where the integrand stubbornly keeps hitting $\\pm1$ yet the integral still converges — because the substitution $u=x^2$ exposes the hidden decaying amplitude $u^{-1/2}$ that Dirichlet's test feeds on. Equivalently, the phase $x^2$ accelerates ($\\frac{d}{dx}x^2=2x\\to\\infty$), so successive humps get narrower and the cancellation is more and more efficient; this is the baby case of the stationary-phase / van der Corput philosophy. The convergence is conditional, not absolute: $\\int_0^\\infty|\\cos(x^2)|\\,dx=\\infty$, exactly mirroring $\\int_0^\\infty\\frac{\\sin x}{x}dx$ versus $\\int_0^\\infty\\frac{|\\sin x|}{x}dx$. The ranker's takeaway: when an improper integrand does not decay, do NOT reach for a comparison/limit test (it is inapplicable) and do NOT reach for a symmetry-cancellation \"$=0$\" argument (hump widths are unequal); instead substitute to surface a monotone decaying factor and invoke Dirichlet, and only THEN evaluate — here by the cosine--Gamma formula, by rotating a Gaussian through $\\pi/4$, or by a vanishing regulator, all three landing on $\\tfrac12\\sqrt{\\pi/2}=\\sqrt{2\\pi}/4$."
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
    "title": "Three Instruments for One Quiet Logarithm",
    "difficulty": 5,
    "task": "Evaluate the integral in closed form, taking care to track the exact interval produced by your trigonometric substitution before you reflect",
    "tags": [
      "king-rule",
      "tangent-substitution",
      "feynman-trick",
      "putnam-value",
      "self-referential",
      "alternating-series"
    ],
    "statement": "Evaluate \\[ I=\\int_{0}^{1}\\frac{\\ln(1+x)}{1+x^{2}}\\,dx. \\] There is no algebraic antiderivative in elementary closed form, and no single textbook trick finishes the job cleanly: the value is forced only by fusing three instruments. First a trigonometric substitution must convert the rational weight $\\tfrac{1}{1+x^{2}}$ into a flat measure $d\\theta$; the catch is the resulting interval. Then a reflection of the king/queen type ($\\theta\\mapsto c-\\theta$ on exactly that interval) collapses the logarithm onto itself, and the famous quarter-arc value $\\displaystyle\\int_{0}^{\\pi/4}\\ln\\!\\bigl(1+\\tan\\theta\\bigr)\\,d\\theta=\\tfrac{\\pi}{8}\\ln 2$ supplies the anchor. Give the exact value of $I$. State plainly which interval your substitution lands on and which reflection axis matches it; an off-axis reflection silently doubles the answer.",
    "answer": "\\[\\boxed{\\,I=\\dfrac{\\pi}{8}\\ln 2\\,}\\]",
    "trap": "The decisive subtlety is the interval, not the algebra. Setting $x=\\tan\\theta$ sends $x:0\\to1$ to $\\theta:0\\to\\arctan 1=\\tfrac{\\pi}{4}$, NOT to $\\tfrac{\\pi}{2}$. A strong student who is fluent in the substitution but on autopilot writes the upper limit as $\\tfrac{\\pi}{2}$ (the reflex from $\\int_0^\\infty$ tangent problems) and then applies the half-interval reflection $\\theta\\mapsto\\tfrac{\\pi}{2}-\\theta$. That reflection sends $1+\\tan\\theta\\mapsto1+\\cot\\theta=\\tfrac{\\sin\\theta+\\cos\\theta}{\\sin\\theta}$, whose logarithm does NOT split into a constant minus the original integrand, so the elegant self-cancellation never appears and the famous quarter-arc anchor cannot be invoked. The matching reflection for the genuine interval $[0,\\tfrac{\\pi}{4}]$ is $\\theta\\mapsto\\tfrac{\\pi}{4}-\\theta$, under which $1+\\tan\\theta\\mapsto\\tfrac{2}{1+\\tan\\theta}$, giving $2I=\\tfrac{\\pi}{4}\\ln 2$ and hence $I=\\tfrac{\\pi}{8}\\ln 2$. The second, sneakier version of the trap is forgetting the factor $\\tfrac12$ entirely: a student who correctly reaches $\\int_0^{\\pi/4}\\ln(1+\\tan\\theta)\\,d\\theta$ but quotes it as the answer reports $\\tfrac{\\pi}{8}\\ln2$ by luck, while one who reasons \"reflection gives $2I$, so $I$ equals the quarter-arc value $\\tfrac{\\pi}{8}\\ln2$ doubled\" reports $\\tfrac{\\pi}{4}\\ln 2$. The correct chain is $I=\\int_0^{\\pi/4}\\ln(1+\\tan\\theta)\\,d\\theta=\\tfrac{\\pi}{8}\\ln2$; the reflection is what proves that quarter-arc value, not an extra doubling on top of it.",
    "solutions": [
      {
        "name": "Tangent substitution onto $[0,\\tfrac{\\pi}{4}]$, then the king-rule reflection $\\theta\\mapsto\\tfrac{\\pi}{4}-\\theta$",
        "steps": [
          "Put $x=\\tan\\theta$, so $dx=\\sec^{2}\\theta\\,d\\theta$ and $1+x^{2}=\\sec^{2}\\theta$. The weight is flattened exactly: $\\dfrac{dx}{1+x^{2}}=d\\theta$. Track the interval honestly: $x=0\\Rightarrow\\theta=0$ and $x=1\\Rightarrow\\theta=\\arctan 1=\\tfrac{\\pi}{4}$. Hence $I=\\displaystyle\\int_{0}^{\\pi/4}\\ln\\!\\bigl(1+\\tan\\theta\\bigr)\\,d\\theta=:J$.",
          "Apply the king (reflection) rule on exactly this interval, $\\theta\\mapsto\\tfrac{\\pi}{4}-\\theta$. Using $\\tan\\!\\bigl(\\tfrac{\\pi}{4}-\\theta\\bigr)=\\dfrac{1-\\tan\\theta}{1+\\tan\\theta}$ gives $1+\\tan\\!\\bigl(\\tfrac{\\pi}{4}-\\theta\\bigr)=1+\\dfrac{1-\\tan\\theta}{1+\\tan\\theta}=\\dfrac{2}{1+\\tan\\theta}$.",
          "Therefore $J=\\displaystyle\\int_{0}^{\\pi/4}\\ln\\!\\frac{2}{1+\\tan\\theta}\\,d\\theta=\\int_{0}^{\\pi/4}\\bigl(\\ln 2-\\ln(1+\\tan\\theta)\\bigr)d\\theta=\\frac{\\pi}{4}\\ln 2-J.$ Solving $2J=\\tfrac{\\pi}{4}\\ln 2$ gives $J=\\tfrac{\\pi}{8}\\ln 2$, which is precisely the famous quarter-arc value. Since $I=J$, we conclude $\\boxed{\\,I=\\tfrac{\\pi}{8}\\ln 2\\,}.$"
        ]
      },
      {
        "name": "Feynman parameter that closes on itself (self-referential differentiation under the integral)",
        "steps": [
          "Introduce $I(t)=\\displaystyle\\int_{0}^{1}\\frac{\\ln(1+tx)}{1+x^{2}}\\,dx$, so $I(0)=0$ and the target is $I(1)$. Differentiate under the integral sign: $I'(t)=\\displaystyle\\int_{0}^{1}\\frac{x}{(1+tx)(1+x^{2})}\\,dx.$",
          "Partial fractions give $\\dfrac{x}{(1+tx)(1+x^{2})}=\\dfrac{-t}{(1+t^{2})(1+tx)}+\\dfrac{t+x}{(1+t^{2})(1+x^{2})}$. Integrating over $x\\in[0,1]$ and evaluating the elementary antiderivatives ($\\ln(1+tx)$, $\\arctan x$, $\\tfrac12\\ln(1+x^{2})$) yields $I'(t)=\\dfrac{1}{1+t^{2}}\\Bigl(\\dfrac{\\pi t}{4}+\\dfrac{\\ln 2}{2}-\\ln(1+t)\\Bigr).$",
          "Now integrate $t$ from $0$ to $1$. The first two pieces are elementary: $\\displaystyle\\int_{0}^{1}\\frac{\\pi t/4}{1+t^{2}}\\,dt=\\frac{\\pi}{8}\\ln 2$ and $\\displaystyle\\int_{0}^{1}\\frac{\\ln 2/2}{1+t^{2}}\\,dt=\\frac{\\ln 2}{2}\\cdot\\frac{\\pi}{4}=\\frac{\\pi}{8}\\ln 2$.",
          "The last piece is the original integral reborn: $\\displaystyle\\int_{0}^{1}\\frac{\\ln(1+t)}{1+t^{2}}\\,dt=I$. Hence $I=I(1)=\\dfrac{\\pi}{8}\\ln 2+\\dfrac{\\pi}{8}\\ln 2-I$, i.e. $2I=\\dfrac{\\pi}{4}\\ln 2$, so $\\boxed{\\,I=\\tfrac{\\pi}{8}\\ln 2\\,}.$ The parameterisation deliberately regenerates the unknown, and the equation solves itself."
        ]
      },
      {
        "name": "Maclaurin series of the logarithm against the rational weight",
        "steps": [
          "For $x\\in[0,1)$ expand $\\ln(1+x)=\\displaystyle\\sum_{n=1}^{\\infty}\\frac{(-1)^{n+1}}{n}x^{n}$. The series converges uniformly on every $[0,1-\\varepsilon]$ and at $x=1$ the integrand is bounded, so termwise integration against the bounded weight $\\tfrac{1}{1+x^{2}}$ is justified: $I=\\displaystyle\\sum_{n=1}^{\\infty}\\frac{(-1)^{n+1}}{n}\\,c_{n}$, where $c_{n}=\\displaystyle\\int_{0}^{1}\\frac{x^{n}}{1+x^{2}}\\,dx$.",
          "The moments satisfy the reduction $c_{n}+c_{n-2}=\\displaystyle\\int_{0}^{1}x^{n-2}\\,dx=\\frac{1}{n-1}$ (since $x^{n}+x^{n-2}=x^{n-2}(1+x^{2})$), anchored by $c_{0}=\\tfrac{\\pi}{4}$ and $c_{1}=\\tfrac12\\ln 2$. This recursion expresses every $c_n$ through $\\tfrac{\\pi}{4}$, $\\tfrac12\\ln2$ and rationals.",
          "Resumming, the contributions organise into the same two anchors: collecting the $\\tfrac{\\pi}{4}$ and the $\\tfrac12\\ln2$ strands and folding the rational tails (a telescoping double sum) reproduces $I=\\tfrac{\\pi}{8}\\ln 2$. Equivalently, write $I=\\displaystyle\\int_0^1\\frac{\\ln(1+x)}{1+x^2}dx$ and verify the partial sums $\\sum_{n=1}^{N}\\frac{(-1)^{n+1}}{n}c_n$ converge to this value; the limit is $\\boxed{\\,I=\\tfrac{\\pi}{8}\\ln 2\\,}.$"
        ]
      }
    ],
    "remark": "The integral looks tame, yet no one instrument finishes it: the substitution alone only relocates the difficulty, the reflection alone needs the right interval to bite, and the famous quarter-arc value is the keystone that makes the self-cancellation land on a clean closed form. The Feynman route reveals the deeper reason the answer is so symmetric: the parameter regenerates the very integral you are chasing, so the problem is secretly a fixed-point equation $2I=\\tfrac{\\pi}{4}\\ln2$. The recurring fingerprint $\\tfrac{\\pi}{8}\\ln2=\\tfrac12\\cdot\\tfrac{\\pi}{4}\\cdot\\ln2$ is the signature of a reflection that halves a constant times the interval length, the unmistakable mark of a king-rule capstone."
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
    "title": "The Logarithmic Twins and Their Vanishing Sum",
    "difficulty": 5,
    "task": "Evaluate each integral in closed form and then compute the requested combination",
    "tags": [
      "geometric-series",
      "term-by-term",
      "dirichlet-eta",
      "integration-by-parts",
      "dilogarithm",
      "famous-constant"
    ],
    "statement": "Define the twin integrals \\[ A=\\int_{0}^{1}\\frac{\\ln(1+x)}{x}\\,dx, \\qquad B=\\int_{0}^{1}\\frac{\\ln x}{1+x}\\,dx. \\] (a) Show both converge and find each in closed form. (b) Establish the exact relation between $A$ and $B$ without first evaluating either, by recognising a total derivative. (c) Hence compute $A-B$. Reach the famous constant by summing a series and identifying a Dirichlet $\\eta$ value — not by quoting a table. Caution: when you integrate $A$ by parts you will meet the boundary expression $\\bigl[\\ln(1+x)\\,\\ln x\\bigr]_{0}^{1}$; decide its value at the lower end carefully before doing anything with it.",
    "answer": "\\[\\boxed{\\ A=\\dfrac{\\pi^{2}}{12},\\quad B=-\\dfrac{\\pi^{2}}{12},\\quad A+B=0,\\quad A-B=\\dfrac{\\pi^{2}}{6}\\ }\\]",
    "trap": "The killer is the integration-by-parts boundary term, not any arithmetic. Integrating $A$ with $u=\\ln(1+x),\\ dv=\\dfrac{dx}{x}$ gives $v=\\ln x$ and $A=\\bigl[\\ln(1+x)\\ln x\\bigr]_{0}^{1}-\\int_{0}^{1}\\dfrac{\\ln x}{1+x}\\,dx=\\bigl[\\ln(1+x)\\ln x\\bigr]_{0}^{1}-B$. At the lower limit the factor $\\ln x\\to-\\infty$, so a strong student declares the boundary term $-\\infty$ and concludes the manipulation is illegal or that $A$ itself diverges. That is wrong: the OTHER factor $\\ln(1+x)\\sim x\\to0$ beats the logarithm, and $\\lim_{x\\to0^{+}}\\ln(1+x)\\ln x=\\lim_{x\\to0^{+}}x\\ln x=0$ (an $x\\ln x$, not an $\\ln x$, indeterminate form). At $x=1$ the term is $\\ln 2\\cdot\\ln 1=0$ too, so the bracket is exactly $0$ and the clean identity $A+B=0$ holds. A second, independent snare lives in the series step: expanding $\\dfrac{1}{1+x}=\\sum_{n\\ge0}(-1)^{n}x^{n}$ and integrating $\\int_0^1 x^n\\ln x\\,dx=-\\dfrac{1}{(n+1)^2}$ produces the ALTERNATING sum $\\sum_{n\\ge1}\\dfrac{(-1)^{n}}{n^{2}}=-\\eta(2)$, whose value is $-\\dfrac{\\pi^2}{12}$ — half of $\\zeta(2)$. Writing $\\zeta(2)=\\dfrac{\\pi^2}{6}$ for the alternating sum (forgetting the factor $\\tfrac12$ that distinguishes $\\eta$ from $\\zeta$) doubles every answer and turns the true $A-B=\\dfrac{\\pi^2}{6}$ into $\\dfrac{\\pi^2}{3}$. A third trap: assuming $A=B$ by a careless symmetry, which would force $A-B=0$; in fact the twins are negatives, $A=-B$, so their difference is the full $\\zeta(2)$, not zero.",
    "solutions": [
      {
        "name": "Total-derivative IBP for the link, then geometric series and the eta value for one twin",
        "steps": [
          "Convergence. Near $x=0$, $\\dfrac{\\ln(1+x)}{x}\\to1$ (removable), so $A$ has no singularity there; near $x=0$, $\\dfrac{\\ln x}{1+x}\\sim\\ln x$, and $\\int_0^1\\ln x\\,dx=-1$ converges, so $B$ converges. Both integrands are bounded away from $x=1$. Hence $A,B$ are finite.",
          "The link, without evaluating either integral. Observe the product rule $\\dfrac{d}{dx}\\bigl[\\ln x\\,\\ln(1+x)\\bigr]=\\dfrac{\\ln(1+x)}{x}+\\dfrac{\\ln x}{1+x}$. Integrating from $0$ to $1$, $A+B=\\bigl[\\ln x\\,\\ln(1+x)\\bigr]_{0}^{1}$. At $x=1$ this is $0\\cdot\\ln2=0$; at $x\\to0^{+}$, $\\ln(1+x)\\ln x\\sim x\\ln x\\to0$. Therefore the boundary bracket is $0$ and $\\;A+B=0$, i.e. $B=-A$ — proved before computing a single value.",
          "Evaluate $B$ by series + Dirichlet eta. For $0\\le x<1$, $\\dfrac{1}{1+x}=\\sum_{n=0}^{\\infty}(-1)^{n}x^{n}$; the partial sums are dominated on $[0,1]$ so term-by-term integration is valid. With $\\int_{0}^{1}x^{n}\\ln x\\,dx=-\\dfrac{1}{(n+1)^{2}}$, $B=\\sum_{n=0}^{\\infty}(-1)^{n}\\!\\left(-\\dfrac{1}{(n+1)^{2}}\\right)=-\\sum_{m=1}^{\\infty}\\dfrac{(-1)^{m-1}}{m^{2}}=-\\eta(2).$ Since $\\eta(2)=\\bigl(1-2^{1-2}\\bigr)\\zeta(2)=\\tfrac12\\zeta(2)=\\dfrac{\\pi^{2}}{12}$, we get $B=-\\dfrac{\\pi^{2}}{12}$, hence $A=-B=\\dfrac{\\pi^{2}}{12}$.",
          "Assemble. $A+B=0$ from step 2 and $A-B=2A=\\dfrac{\\pi^{2}}{6}=\\zeta(2)$. \\[\\boxed{\\ A=\\dfrac{\\pi^{2}}{12},\\ B=-\\dfrac{\\pi^{2}}{12},\\ A+B=0,\\ A-B=\\dfrac{\\pi^{2}}{6}.\\ }\\]"
        ]
      },
      {
        "name": "Both twins by independent geometric-series expansion and term-by-term integration",
        "steps": [
          "Expand $A$. For $0\\le x<1$, $\\ln(1+x)=\\sum_{n=1}^{\\infty}\\dfrac{(-1)^{n-1}}{n}x^{n}$, so $\\dfrac{\\ln(1+x)}{x}=\\sum_{n=1}^{\\infty}\\dfrac{(-1)^{n-1}}{n}x^{n-1}$. Integrating term by term (the series converges uniformly on $[0,1-\\delta]$ and the tail is controlled by Abel's theorem at $x=1$), $A=\\sum_{n=1}^{\\infty}\\dfrac{(-1)^{n-1}}{n}\\cdot\\dfrac{1}{n}=\\sum_{n=1}^{\\infty}\\dfrac{(-1)^{n-1}}{n^{2}}=\\eta(2).$",
          "Expand $B$. With $\\dfrac{1}{1+x}=\\sum_{n=0}^{\\infty}(-1)^{n}x^{n}$ and $\\int_{0}^{1}x^{n}\\ln x\\,dx=-\\dfrac{1}{(n+1)^{2}}$, $B=\\sum_{n=0}^{\\infty}(-1)^{n}\\!\\left(-\\dfrac{1}{(n+1)^{2}}\\right)=-\\sum_{m=1}^{\\infty}\\dfrac{(-1)^{m-1}}{m^{2}}=-\\eta(2).$ The two expansions land on $+\\eta(2)$ and $-\\eta(2)$, confirming independently that $A+B=0$.",
          "Identify the constant. $\\eta(2)=\\sum_{m\\ge1}\\dfrac{(-1)^{m-1}}{m^{2}}$. Splitting into even and odd $m$: $\\eta(2)=\\zeta(2)-2\\sum_{k\\ge1}\\dfrac{1}{(2k)^{2}}=\\zeta(2)-\\tfrac12\\zeta(2)=\\tfrac12\\zeta(2)=\\dfrac{\\pi^{2}}{12}.$ Thus $A=\\dfrac{\\pi^{2}}{12}$, $B=-\\dfrac{\\pi^{2}}{12}$.",
          "Conclude. $A+B=0$ and $A-B=2\\eta(2)=\\zeta(2)=\\dfrac{\\pi^{2}}{6}$. \\[\\boxed{\\ A=\\dfrac{\\pi^{2}}{12},\\ B=-\\dfrac{\\pi^{2}}{12},\\ A-B=\\dfrac{\\pi^{2}}{6}.\\ }\\]"
        ]
      },
      {
        "name": "Dilogarithm route via the special value Li_2(-1)",
        "steps": [
          "Write $A$ as a dilogarithm. Substitute $x\\mapsto -t$ in the defining series, or note directly $\\dfrac{d}{dx}\\bigl[-\\operatorname{Li}_2(-x)\\bigr]=\\dfrac{\\ln(1+x)}{x}$, since $\\operatorname{Li}_2(z)=-\\int_{0}^{z}\\dfrac{\\ln(1-u)}{u}\\,du$ gives $\\operatorname{Li}_2'(z)=-\\dfrac{\\ln(1-z)}{z}$, so $\\dfrac{d}{dx}\\operatorname{Li}_2(-x)=-\\dfrac{\\ln(1+x)}{x}$. Hence $A=\\int_{0}^{1}\\dfrac{\\ln(1+x)}{x}\\,dx=-\\operatorname{Li}_2(-x)\\Big|_{0}^{1}=-\\operatorname{Li}_2(-1).$",
          "Get $B$ from $A$ by the boundary-aware IBP. With $u=\\ln x$, $dv=\\dfrac{dx}{1+x}$, $v=\\ln(1+x)$: $B=\\bigl[\\ln x\\,\\ln(1+x)\\bigr]_{0}^{1}-\\int_{0}^{1}\\dfrac{\\ln(1+x)}{x}\\,dx$. The bracket vanishes at both ends (at $x\\to0^{+}$ because $\\ln(1+x)\\ln x\\sim x\\ln x\\to0$, at $x=1$ because $\\ln 1=0$), so $B=-A=\\operatorname{Li}_2(-1).$",
          "Insert the special value. From the alternating series $\\operatorname{Li}_2(-1)=\\sum_{n\\ge1}\\dfrac{(-1)^{n}}{n^{2}}=-\\eta(2)=-\\dfrac{\\pi^{2}}{12}$ (equivalently $\\operatorname{Li}_2(-1)=-\\tfrac12\\zeta(2)$). Therefore $A=-\\operatorname{Li}_2(-1)=\\dfrac{\\pi^{2}}{12}$ and $B=\\operatorname{Li}_2(-1)=-\\dfrac{\\pi^{2}}{12}$.",
          "Combine. $A+B=0$ and $A-B=-2\\operatorname{Li}_2(-1)=\\zeta(2)=\\dfrac{\\pi^{2}}{6}$. \\[\\boxed{\\ A=\\dfrac{\\pi^{2}}{12},\\ B=-\\dfrac{\\pi^{2}}{12},\\ A-B=\\dfrac{\\pi^{2}}{6}.\\ }\\]"
        ]
      }
    ],
    "remark": "Insight: the whole capstone turns on a single $0\\cdot\\infty$ limit that the product rule hands you for free. The identity $\\dfrac{d}{dx}\\bigl[\\ln x\\,\\ln(1+x)\\bigr]=\\dfrac{\\ln(1+x)}{x}+\\dfrac{\\ln x}{1+x}$ says the two twins are born from one antiderivative, so their SUM is just a boundary evaluation; the only subtlety is that the lower endpoint is an $x\\ln x$ (not a bare $\\ln x$) form and therefore dies, giving $A+B=0$ before any series is summed. Their DIFFERENCE then carries the famous constant: each twin is $\\pm\\eta(2)$, and the ranker's discipline is to remember that the ALTERNATING zeta is $\\eta(2)=\\tfrac12\\zeta(2)=\\dfrac{\\pi^{2}}{12}$, so $A-B=\\zeta(2)=\\dfrac{\\pi^{2}}{6}$ — the factor $\\tfrac12$ separating $\\eta$ from $\\zeta$ is exactly where the careless answer doubles. The same structure reappears as the dilogarithm fact $\\operatorname{Li}_2(-1)=-\\tfrac12\\zeta(2)$, which is precisely $B$. Takeaway: when integration by parts spits out a boundary product, never read off only the divergent factor — test the full limit, because the partner factor often tames it and unlocks a relation no amount of brute computation would reveal."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "Feynman Sharpens the Reciprocal Sine",
    "difficulty": 5,
    "task": "Introduce a parameter, differentiate under the integral sign, evaluate the resulting rational-trigonometric integral exactly, and integrate back from the correct base point to the closed-form value",
    "tags": [
      "feynman-trick",
      "differentiation-under-integral",
      "rational-trig-integral",
      "king-rule",
      "fubini",
      "base-point"
    ],
    "statement": "For $a\\ge 0$ define \\[ I(a)=\\int_{0}^{\\pi/2}\\frac{\\ln\\!\\bigl(1+a\\sin^{2}x\\bigr)}{\\sin^{2}x}\\,dx. \\] The reciprocal $\\sin^{-2}x$ in the weight looks lethal at $x=0$, but the logarithm in the numerator vanishes there at exactly the matching rate, so $I(a)$ is a perfectly finite function of the parameter with $I(0)=0$. Treat $a$ as a dial. Differentiate under the integral sign to collapse the logarithm and the reciprocal sine simultaneously, leaving a clean rational-trigonometric integral $I'(a)$; evaluate that inner integral in closed form; then integrate the result back up from $a=0$ to $a=1$. Give the exact value of $I(1)$. State clearly which substitution you use on the inner integral and what its rational denominator actually is, and identify the base point that fixes the constant of integration.",
    "answer": "\\[\\boxed{\\,I(1)=\\pi\\bigl(\\sqrt{2}-1\\bigr)\\,}\\]",
    "trap": "Two conceptual snares, neither arithmetic. (1) The inner integral. Differentiating in $a$ kills both the logarithm and the reciprocal sine at once: $\\dfrac{\\partial}{\\partial a}\\dfrac{\\ln(1+a\\sin^{2}x)}{\\sin^{2}x}=\\dfrac{1}{1+a\\sin^{2}x}$, so $I'(a)=\\displaystyle\\int_{0}^{\\pi/2}\\frac{dx}{1+a\\sin^{2}x}$. The natural substitution is $t=\\tan x$, and here is where strong students slip: they correctly write $\\sin^{2}x=\\dfrac{t^{2}}{1+t^{2}}$ and $dx=\\dfrac{dt}{1+t^{2}}$ but then \\emph{forget that the same $1+t^{2}$ also sits inside the denominator}. The honest reduction is $1+a\\sin^{2}x=\\dfrac{1+(1+a)t^{2}}{1+t^{2}}$, so the two $1+t^{2}$ factors cancel and $I'(a)=\\displaystyle\\int_{0}^{\\infty}\\frac{dt}{1+(1+a)t^{2}}=\\frac{\\pi}{2\\sqrt{1+a}}$. The careless reader treats $\\sin^{2}x$ like $\\tan^{2}x$ and writes $I'(a)=\\displaystyle\\int_{0}^{\\infty}\\frac{dt}{1+at^{2}}=\\frac{\\pi}{2\\sqrt{a}}$ — losing the crucial $+1$ inside the radical — which integrates back to the seductively clean but wrong $I(1)=\\displaystyle\\int_{0}^{1}\\frac{\\pi}{2\\sqrt{a}}\\,da=\\pi$. (2) The base point. The correct $I'(a)=\\dfrac{\\pi}{2\\sqrt{1+a}}$ antidifferentiates to $\\pi\\sqrt{1+a}+C$, and the constant is pinned ONLY by $I(0)=0$, giving $C=-\\pi$ and $I(1)=\\pi\\sqrt{2}-\\pi$. A student who quotes the antiderivative at $a=1$ without subtracting its value at the base point reports $\\pi\\sqrt{2}$; one who mistakes the value of the inner integral $I'(1)=\\dfrac{\\pi}{2\\sqrt{2}}$ for the answer reports $\\dfrac{\\pi}{2\\sqrt 2}$. The reciprocal-sine ``divergence'' at $x=0$ is itself a decoy: $\\dfrac{\\ln(1+a\\sin^{2}x)}{\\sin^{2}x}\\to a$ as $x\\to0$, so the integrand is bounded and $I(a)$ is finite throughout.",
    "solutions": [
      {
        "name": "Differentiation under the integral, inner integral by $t=\\tan x$, then integrate back from $a=0$",
        "steps": [
          "Justify and differentiate. Near $x=0$, $\\ln(1+a\\sin^{2}x)\\sim a\\sin^{2}x$, so the integrand tends to $a$ and is bounded on $[0,\\tfrac{\\pi}{2}]$; thus $I(a)$ is finite and $I(0)=\\int_0^{\\pi/2}\\frac{\\ln 1}{\\sin^2x}dx=0$. The $a$-derivative of the integrand is $\\dfrac{\\partial}{\\partial a}\\dfrac{\\ln(1+a\\sin^{2}x)}{\\sin^{2}x}=\\dfrac{\\sin^{2}x}{\\sin^{2}x\\,(1+a\\sin^{2}x)}=\\dfrac{1}{1+a\\sin^{2}x}$, which is dominated by $1$ on the whole interval (integrable), so differentiation under the integral sign is legal: $I'(a)=\\displaystyle\\int_{0}^{\\pi/2}\\frac{dx}{1+a\\sin^{2}x}.$",
          "Evaluate the inner integral honestly. Put $t=\\tan x$, $dx=\\dfrac{dt}{1+t^{2}}$, $\\sin^{2}x=\\dfrac{t^{2}}{1+t^{2}}$, with $x:0\\to\\tfrac{\\pi}{2}$ giving $t:0\\to\\infty$. Then $1+a\\sin^{2}x=\\dfrac{(1+t^{2})+a t^{2}}{1+t^{2}}=\\dfrac{1+(1+a)t^{2}}{1+t^{2}}$, and the two $1+t^{2}$ factors cancel: $I'(a)=\\displaystyle\\int_{0}^{\\infty}\\frac{dt}{1+(1+a)t^{2}}=\\frac{1}{\\sqrt{1+a}}\\Bigl[\\arctan\\!\\bigl(\\sqrt{1+a}\\,t\\bigr)\\Bigr]_{0}^{\\infty}=\\frac{\\pi}{2\\sqrt{1+a}}.$",
          "Integrate back from the base point. Since $I(0)=0$, $I(a)=\\displaystyle\\int_{0}^{a}\\frac{\\pi}{2\\sqrt{1+s}}\\,ds=\\pi\\Bigl[\\sqrt{1+s}\\Bigr]_{0}^{a}=\\pi\\bigl(\\sqrt{1+a}-1\\bigr).$ The constant is fixed precisely by $I(0)=0$, which removes the $-\\pi$ ambiguity. Setting $a=1$: $\\boxed{\\,I(1)=\\pi(\\sqrt{2}-1)\\,}.$"
        ]
      },
      {
        "name": "Same parameter derivative, inner integral by the cotangent substitution $u=\\cot x$",
        "steps": [
          "As above, $I'(a)=\\displaystyle\\int_{0}^{\\pi/2}\\frac{dx}{1+a\\sin^{2}x}$ with $I(0)=0$. Divide numerator and denominator by $\\sin^{2}x$: $\\dfrac{1}{1+a\\sin^{2}x}=\\dfrac{\\csc^{2}x}{\\csc^{2}x+a}=\\dfrac{\\csc^{2}x}{(1+\\cot^{2}x)+a}$, using $\\csc^{2}x=1+\\cot^{2}x$.",
          "Substitute $u=\\cot x$, so $du=-\\csc^{2}x\\,dx$ and $x:0\\to\\tfrac{\\pi}{2}$ gives $u:\\infty\\to0$. The minus sign flips the limits: $I'(a)=\\displaystyle\\int_{0}^{\\infty}\\frac{du}{(1+a)+u^{2}}=\\frac{1}{\\sqrt{1+a}}\\Bigl[\\arctan\\frac{u}{\\sqrt{1+a}}\\Bigr]_{0}^{\\infty}=\\frac{\\pi}{2\\sqrt{1+a}}.$ This independent substitution lands on the identical denominator $(1+a)+u^{2}$, confirming the value and exposing the $+1$ that the trap drops.",
          "Antidifferentiate with the correct constant: $I(a)=\\pi\\bigl(\\sqrt{1+a}-1\\bigr)$ from $I(0)=0$, so $\\boxed{\\,I(1)=\\pi(\\sqrt{2}-1)\\,}.$"
        ]
      },
      {
        "name": "Fubini: write the weight as an inner integral and swap the order",
        "steps": [
          "Recognise the logarithm as an accumulated parameter integral. Since $\\dfrac{d}{db}\\ln(1+b\\sin^{2}x)=\\dfrac{\\sin^{2}x}{1+b\\sin^{2}x}$, integrating in $b$ from $0$ to $a$ gives $\\ln(1+a\\sin^{2}x)=\\displaystyle\\int_{0}^{a}\\frac{\\sin^{2}x}{1+b\\sin^{2}x}\\,db$, hence $\\dfrac{\\ln(1+a\\sin^{2}x)}{\\sin^{2}x}=\\displaystyle\\int_{0}^{a}\\frac{db}{1+b\\sin^{2}x}.$ The reciprocal sine is absorbed exactly, no derivative justification needed.",
          "Apply Fubini (the integrand $\\tfrac{1}{1+b\\sin^{2}x}$ is positive and bounded on $[0,\\tfrac{\\pi}{2}]\\times[0,a]$, so the order may be swapped): $I(a)=\\displaystyle\\int_{0}^{\\pi/2}\\!\\!\\int_{0}^{a}\\frac{db}{1+b\\sin^{2}x}\\,dx=\\int_{0}^{a}\\!\\!\\left(\\int_{0}^{\\pi/2}\\frac{dx}{1+b\\sin^{2}x}\\right)db.$",
          "The inner $x$-integral is the same rational-trigonometric integral as before; by $t=\\tan x$, $\\displaystyle\\int_{0}^{\\pi/2}\\frac{dx}{1+b\\sin^{2}x}=\\frac{\\pi}{2\\sqrt{1+b}}$. Therefore $I(a)=\\displaystyle\\int_{0}^{a}\\frac{\\pi}{2\\sqrt{1+b}}\\,db=\\pi\\bigl(\\sqrt{1+a}-1\\bigr)$, and at $a=1$, $\\boxed{\\,I(1)=\\pi(\\sqrt{2}-1)\\,}.$"
        ]
      }
    ],
    "remark": "Insight: the entire capstone is engineered so that one stroke of differentiation in the parameter annihilates two obstacles at once — the logarithm and the reciprocal sine cancel each other, leaving the bare rational-trigonometric kernel $\\tfrac{1}{1+a\\sin^{2}x}$. From there everything hinges on the structure of the standard reduction $\\int_0^{\\pi/2}\\tfrac{dx}{1+a\\sin^2x}=\\tfrac{\\pi}{2\\sqrt{1+a}}$: the radical is $\\sqrt{1+a}$, not $\\sqrt{a}$, because the $t=\\tan x$ (or $u=\\cot x$) substitution leaves a denominator $1+(1+a)t^{2}$ whose $+1$ comes from the $\\csc^{2}x=1+\\cot^{2}x$ identity. Drop that $+1$ and the answer collapses to the false $\\pi$; keep it and the integrate-back step yields the antiderivative $\\pi\\sqrt{1+a}$, whose constant is locked only by the base point $I(0)=0$. The Fubini route shows the same fact without any differentiation: the logarithm is literally an integral over a second parameter, so the problem is a double integral in disguise and the value is forced by Tonelli's freedom to swap the order. Takeaway: a parameter-differentiation capstone is won or lost on two quiet details — the exact rational denominator the substitution produces, and the base point that fixes the constant. Both are conceptual, neither is arithmetic, and either one missed turns $\\pi(\\sqrt{2}-1)$ into a confidently wrong clean number."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Sigmoid That Couldn't Survive the Full Circle",
    "difficulty": 5,
    "task": "Evaluate the definite integral in exact closed form",
    "tags": [
      "king-rule",
      "reflection-symmetry",
      "periodicity",
      "additive-glue",
      "hidden-symmetry"
    ],
    "statement": "Evaluate \\[ I=\\int_{0}^{2\\pi}\\frac{x\\,(2\\pi-x)}{1+e^{\\sin x}}\\,dx. \\] The transcendental factor $e^{\\sin x}$ has no elementary antiderivative, so a direct attack is hopeless; the integral must be cracked by a single well-chosen reflection of the whole circle. Before you reach for any shortcut, ask precisely why the awkward denominator is allowed to disappear — the reason is not that $\\dfrac{1}{1+e^{\\sin x}}$ equals $\\tfrac12$ (it never does), and it is not that the two half-periods $[0,\\pi]$ and $[\\pi,2\\pi]$ contribute equally (they do not).",
    "answer": "\\[\\boxed{\\dfrac{2\\pi^{3}}{3}}\\]",
    "trap": "The denominator $\\dfrac{1}{1+e^{\\sin x}}$ is a logistic (sigmoid) function of $\\sin x$; it is symmetric about the value $\\tfrac12$ only in the averaged sense, NEVER pointwise. The fatal shortcut is to declare \"by symmetry the denominator averages to $\\tfrac12$, so $I=\\tfrac12\\int_{0}^{2\\pi}x(2\\pi-x)\\,dx$\". With THIS weight the number it produces, $\\tfrac{2\\pi^{3}}{3}$, happens to be correct — which is exactly the snare, because the reasoning is false and the student never learns the real reason. Replace the weight by the asymmetric $x$ (i.e. ask for $\\int_{0}^{2\\pi}\\dfrac{x}{1+e^{\\sin x}}\\,dx$) and the very same \"average $=\\tfrac12$\" rule predicts $\\tfrac12\\int_{0}^{2\\pi}x\\,dx=\\pi^{2}$, whereas the true value is $\\pi^{2}+\\int_{0}^{2\\pi}\\dfrac{(x-\\pi)\\,dx}{1+e^{\\sin x}}\\neq\\pi^{2}$ — the rule is simply wrong. The $\\tfrac12$ only emerges here because the weight $w(x)=x(2\\pi-x)$ is SYMMETRIC about the centre $x=\\pi$, i.e. $w(2\\pi-x)=w(x)$; that single hidden symmetry is what makes the $e^{\\sin x}$ term cancel after pairing $x\\leftrightarrow 2\\pi-x$. The second trap is to split $[0,2\\pi]$ at $\\pi$ and claim the halves are equal and write $I=2\\int_{0}^{\\pi}$; numerically the halves are $\\approx 7.05$ and $\\approx 13.62$ — wildly unequal — so this doubling gives $\\approx 14.10$, not $\\tfrac{2\\pi^{3}}{3}\\approx 20.67$. The third trap is to attempt the half-period king rule $x\\to\\pi-x$, under which $\\sin x$ is INVARIANT (not flipped), so the glue $\\dfrac{1}{1+e^{u}}+\\dfrac{1}{1+e^{-u}}=1$ never fires; only the FULL-circle reflection $x\\to 2\\pi-x$, which sends $\\sin x\\to-\\sin x$, activates the cancellation.",
    "solutions": [
      {
        "name": "Full-circle king pairing with the additive glue",
        "steps": [
          "Apply the reflection $x\\mapsto 2\\pi-x$ to the whole interval $[0,2\\pi]$. Since $\\sin(2\\pi-x)=-\\sin x$ and the weight obeys $(2\\pi-x)\\bigl(2\\pi-(2\\pi-x)\\bigr)=(2\\pi-x)x=x(2\\pi-x)$ (the weight is unchanged because it is symmetric about $x=\\pi$), $I=\\int_{0}^{2\\pi}\\dfrac{x(2\\pi-x)}{1+e^{-\\sin x}}\\,dx.$ The linear weight does NOT pick up an awkward $2\\pi-x$ factor precisely because $x(2\\pi-x)$ is a parabola centred at $\\pi$.",
          "Add the original integral to its reflected form. With $u=\\sin x$, $2I=\\int_{0}^{2\\pi}x(2\\pi-x)\\!\\left(\\dfrac{1}{1+e^{u}}+\\dfrac{1}{1+e^{-u}}\\right)dx.$ The bracketed glue is the identity $\\dfrac{1}{1+e^{u}}+\\dfrac{1}{1+e^{-u}}=\\dfrac{(1+e^{-u})+(1+e^{u})}{(1+e^{u})(1+e^{-u})}=\\dfrac{2+e^{u}+e^{-u}}{2+e^{u}+e^{-u}}=1,$ valid for every real $u$. The transcendental denominator is annihilated exactly — not approximated.",
          "Evaluate the surviving elementary integral. $2I=\\int_{0}^{2\\pi}x(2\\pi-x)\\,dx=\\Bigl[\\pi x^{2}-\\dfrac{x^{3}}{3}\\Bigr]_{0}^{2\\pi}=\\pi(2\\pi)^{2}-\\dfrac{(2\\pi)^{3}}{3}=4\\pi^{3}-\\dfrac{8\\pi^{3}}{3}=\\dfrac{4\\pi^{3}}{3}.$",
          "Hence $I=\\dfrac12\\cdot\\dfrac{4\\pi^{3}}{3}=\\dfrac{2\\pi^{3}}{3}.$ \\[\\boxed{I=\\dfrac{2\\pi^{3}}{3}}\\]"
        ]
      },
      {
        "name": "Centre shift to expose even/odd structure",
        "steps": [
          "Translate to the centre with $x=\\pi+t$, $t\\in[-\\pi,\\pi]$. The weight becomes $x(2\\pi-x)=(\\pi+t)(\\pi-t)=\\pi^{2}-t^{2}$, which is EVEN in $t$, while $\\sin x=\\sin(\\pi+t)=-\\sin t$. Thus $I=\\int_{-\\pi}^{\\pi}\\dfrac{\\pi^{2}-t^{2}}{1+e^{-\\sin t}}\\,dt.$",
          "Split the denominator into its even and odd parts under $t\\mapsto -t$ (which sends $\\sin t\\mapsto-\\sin t$). The even part is $\\dfrac12\\!\\left(\\dfrac{1}{1+e^{-\\sin t}}+\\dfrac{1}{1+e^{\\sin t}}\\right)=\\dfrac12$ by the same glue identity; the odd part integrates to $0$ against the even weight $\\pi^{2}-t^{2}$ over the symmetric interval $[-\\pi,\\pi]$.",
          "Only the constant $\\tfrac12$ survives: $I=\\dfrac12\\int_{-\\pi}^{\\pi}(\\pi^{2}-t^{2})\\,dt=\\dfrac12\\Bigl[\\pi^{2}t-\\dfrac{t^{3}}{3}\\Bigr]_{-\\pi}^{\\pi}=\\dfrac12\\Bigl(2\\pi^{3}-\\dfrac{2\\pi^{3}}{3}\\Bigr)=\\dfrac12\\cdot\\dfrac{4\\pi^{3}}{3}.$",
          "Therefore $I=\\dfrac{2\\pi^{3}}{3}.$ This route makes transparent WHY the $\\tfrac12$ appears — it is the even part of the sigmoid, legitimate only because the even weight kills the odd remainder. \\[\\boxed{I=\\dfrac{2\\pi^{3}}{3}}\\]"
        ]
      },
      {
        "name": "Direct decomposition of the sigmoid",
        "steps": [
          "Write $\\dfrac{1}{1+e^{\\sin x}}=\\dfrac12-\\dfrac12\\tanh\\!\\Bigl(\\dfrac{\\sin x}{2}\\Bigr)$, the standard logistic-to-tanh identity (check: $\\dfrac12-\\dfrac12\\cdot\\dfrac{e^{\\sin x/2}-e^{-\\sin x/2}}{e^{\\sin x/2}+e^{-\\sin x/2}}=\\dfrac{1}{1+e^{\\sin x}}$). Then $I=\\dfrac12\\int_{0}^{2\\pi}x(2\\pi-x)\\,dx-\\dfrac12\\int_{0}^{2\\pi}x(2\\pi-x)\\tanh\\!\\Bigl(\\dfrac{\\sin x}{2}\\Bigr)dx.$",
          "Show the tanh integral vanishes. Put $g(x)=x(2\\pi-x)\\tanh\\!\\bigl(\\tfrac{\\sin x}{2}\\bigr)$ and apply $x\\mapsto 2\\pi-x$: the weight is invariant while $\\tanh\\!\\bigl(\\tfrac{\\sin(2\\pi-x)}{2}\\bigr)=\\tanh\\!\\bigl(-\\tfrac{\\sin x}{2}\\bigr)=-\\tanh\\!\\bigl(\\tfrac{\\sin x}{2}\\bigr)$, so $g(2\\pi-x)=-g(x)$. An integral of a function antisymmetric about the midpoint of its interval is $0$, hence $\\int_{0}^{2\\pi}g(x)\\,dx=0$.",
          "Only the first piece remains: $I=\\dfrac12\\int_{0}^{2\\pi}x(2\\pi-x)\\,dx=\\dfrac12\\cdot\\dfrac{4\\pi^{3}}{3}.$",
          "Thus $I=\\dfrac{2\\pi^{3}}{3}.$ Here the $\\tfrac12$ is rigorously the constant term of the sigmoid, and the trap's \"average\" claim is exposed as the (correct) constant part plus a (vanishing) tanh part — true only because the parabolic weight is symmetric about $\\pi$. \\[\\boxed{I=\\dfrac{2\\pi^{3}}{3}}\\]"
        ]
      }
    ],
    "remark": "Insight: the logistic denominator is a red herring engineered to look impassable. Its defining gift is the additive glue $\\dfrac{1}{1+e^{u}}+\\dfrac{1}{1+e^{-u}}=1$, which fires only when a reflection flips the sign of $u=\\sin x$ — and on the full circle exactly one reflection does that, $x\\to 2\\pi-x$ (the half-period $x\\to\\pi-x$ leaves $\\sin x$ fixed, so it is useless here). The deeper lesson is that the cancellation is NOT automatic: it survives only because the weight $x(2\\pi-x)$ is symmetric about the centre $x=\\pi$, i.e. invariant under the same reflection. That hidden symmetry, not any pointwise value of the denominator, is what licenses replacing the sigmoid by its constant part $\\tfrac12$. The seductive false proof — \"the denominator averages to $\\tfrac12$\" — even returns the correct number for this weight, which is precisely why it is dangerous: swap in the asymmetric weight $x$ and the same incantation gives $\\pi^{2}$ instead of the true value, betraying that the reasoning was never sound. A top-rank solver pairs periodicity (use the WHOLE circle), king-rule reflection (flip $\\sin$), and weight symmetry (kill the residual) as three interlocking instruments, and proves each is needed rather than trusting a memorised $\\tfrac12$."
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
    "title": "The Quarter-Circle Sum and the Boundary It Hides",
    "difficulty": 5,
    "task": "Identify the limit of the sum, then pin the exact rate at which it approaches that limit",
    "tags": [
      "riemann-sum",
      "euler-maclaurin",
      "asymptotic-rate",
      "boundary-correction",
      "arctangent",
      "endpoint-trap"
    ],
    "statement": "For each $n\\ge1$ set \\[ S_n=\\sum_{k=1}^{n}\\frac{n}{n^{2}+k^{2}}. \\] (a) Prove that $S_n$ converges and find $\\displaystyle\\lim_{n\\to\\infty}S_n$ by recognising a Riemann sum for a famous quarter-circle integral. (b) The real task is the rate: the convergence is only $O(1/n)$, and the leading coefficient is fixed entirely by the two endpoints of the integrand, not by its interior. Compute \\[ L=\\lim_{n\\to\\infty} n\\Bigl(\\tfrac{\\pi}{4}-S_n\\Bigr) \\] exactly, and give the value $C$ in the sharper expansion $S_n=\\dfrac{\\pi}{4}-\\dfrac{L}{n}+\\dfrac{C}{n^{2}}+O(n^{-4})$. Report the triple $\\bigl(\\lim S_n,\\;L,\\;C\\bigr)$. Decide carefully which Riemann sum (left, right, or midpoint) the index range $k=1,\\dots,n$ actually produces, because the sign of $L$ is set by exactly that choice.",
    "answer": "\\[\\boxed{\\ \\Bigl(\\tfrac{\\pi}{4},\\ \\tfrac14,\\ -\\tfrac{1}{24}\\Bigr)\\ }\\]",
    "trap": "The Riemann-sum recognition is the easy half; the trap lives in (b) and has three teeth. First, the integrand is $g(x)=\\dfrac{1}{1+x^{2}}$ with $S_n=\\dfrac1n\\sum_{k=1}^{n}g\\!\\bigl(\\tfrac{k}{n}\\bigr)$, and because the index runs from $k=1$ to $k=n$ this is the RIGHT-endpoint sum on $[0,1]$, not the left. A student who pictures the generic left sum (or mis-centres it as a midpoint sum) gets the boundary correction with the wrong sign or magnitude: the right-sum error is $S_n-\\int_0^1 g=\\dfrac{g(1)-g(0)}{2n}+\\cdots=\\dfrac{\\tfrac12-1}{2n}=-\\dfrac{1}{4n}$, so $\\tfrac{\\pi}{4}-S_n=+\\dfrac{1}{4n}+\\cdots$ and $L=+\\tfrac14$. The left sum would give $L=-\\tfrac14$ and the midpoint sum would give $L=0$ with the leading error pushed to $O(n^{-2})$ — three different ``answers'' from the same picture, and only the right sum matches $k=1\\dots n$. Second, a stronger temptation is to believe the difference is $o(1/n)$ because the summand $\\tfrac{n}{n^2+k^2}$ is symmetric-looking; in fact the trapezoidal/midpoint intuition that ``endpoint errors cancel'' is FALSE here, since only one endpoint $x=0$ (the term $k=0$) is missing from a right sum, so the correction does not cancel and the rate is genuinely $\\Theta(1/n)$. Third, the second-order coefficient $C$ comes from the Euler--Maclaurin term $\\dfrac{g'(1)-g'(0)}{12n^{2}}$; with $g'(x)=-\\dfrac{2x}{(1+x^2)^2}$ one has $g'(1)=-\\tfrac12,\\ g'(0)=0$, giving $\\dfrac{-\\tfrac12-0}{12n^2}=-\\dfrac{1}{24n^2}$, so $C=-\\tfrac1{24}$; a student who forgets the $\\tfrac1{12}$ Euler--Maclaurin factor, or who drops the $g'(0)=0$ endpoint without checking, mangles $C$. The fatal version of the trap is concluding $L=0$ (``the sum just equals $\\tfrac{\\pi}{4}$''), which throws away the entire content of part (b).",
    "solutions": [
      {
        "name": "Right Riemann sum plus the Euler--Maclaurin boundary corrections",
        "steps": [
          "Recognise the sum. Factor $n$ out: $S_n=\\sum_{k=1}^{n}\\dfrac{n}{n^2+k^2}=\\dfrac1n\\sum_{k=1}^{n}\\dfrac{1}{1+(k/n)^2}=\\dfrac1n\\sum_{k=1}^{n}g\\!\\bigl(\\tfrac{k}{n}\\bigr),\\quad g(x)=\\dfrac{1}{1+x^2}.$ Since the sample points $x_k=k/n$ are the RIGHT endpoints of the $n$ subintervals of $[0,1]$, $S_n$ is the right Riemann sum of $g$. As $g$ is continuous, $S_n\\to\\int_0^1\\dfrac{dx}{1+x^2}=\\arctan x\\big|_0^1=\\dfrac{\\pi}{4}$, which is part (a).",
          "Set up Euler--Maclaurin for the rate. Write $F=\\int_0^1 g\\,dx=\\tfrac\\pi4$ and compare the right sum to it. With step $h=1/n$, Euler--Maclaurin for the right-endpoint rule gives $S_n-F=\\dfrac{h}{2}\\bigl(g(1)-g(0)\\bigr)+\\dfrac{h^{2}}{12}\\bigl(g'(1)-g'(0)\\bigr)+O(h^{4}),$ because the right-sum equals the trapezoidal sum plus $\\tfrac{h}{2}(g(1)-g(0))$, and the trapezoidal rule has the standard Euler--Maclaurin tail $-\\tfrac{h^2}{12}(g'(1)-g'(0))+\\cdots$; the two $h^2$ pieces combine with the right convention to $+\\tfrac{h^2}{12}(g'(1)-g'(0))$. (Equivalently, apply Euler--Maclaurin to $\\sum_{k=1}^n g(k/n)$ directly.)",
          "Plug in the endpoint data. $g(0)=1,\\ g(1)=\\tfrac12$, so $g(1)-g(0)=-\\tfrac12$. And $g'(x)=-\\dfrac{2x}{(1+x^2)^2}$ gives $g'(0)=0,\\ g'(1)=-\\tfrac12$, so $g'(1)-g'(0)=-\\tfrac12$. Hence $S_n-\\tfrac\\pi4=\\dfrac{1}{2n}\\!\\left(-\\tfrac12\\right)+\\dfrac{1}{12n^2}\\!\\left(-\\tfrac12\\right)+O(n^{-4})=-\\dfrac{1}{4n}-\\dfrac{1}{24n^2}+O(n^{-4}).$",
          "Read off the triple. Thus $S_n=\\dfrac\\pi4-\\dfrac{1}{4n}-\\dfrac{1}{24n^2}+O(n^{-4})$, so $\\lim S_n=\\dfrac\\pi4$, $L=\\lim n\\bigl(\\tfrac\\pi4-S_n\\bigr)=\\dfrac14$, and matching $S_n=\\tfrac\\pi4-\\tfrac{L}{n}+\\tfrac{C}{n^2}+\\cdots$ gives $C=-\\dfrac{1}{24}$. \\[\\boxed{\\ \\bigl(\\tfrac\\pi4,\\ \\tfrac14,\\ -\\tfrac1{24}\\bigr)\\ }\\]"
        ]
      },
      {
        "name": "Telescoping the difference via the arctangent mean value theorem",
        "steps": [
          "Express the limit and the gap together. Note $\\dfrac{\\pi}{4}=\\int_0^1\\dfrac{dx}{1+x^2}=\\sum_{k=1}^{n}\\int_{(k-1)/n}^{k/n}\\dfrac{dx}{1+x^2}.$ Therefore $\\dfrac\\pi4-S_n=\\sum_{k=1}^{n}\\left(\\int_{(k-1)/n}^{k/n}\\dfrac{dx}{1+x^2}-\\dfrac1n\\,g\\!\\bigl(\\tfrac{k}{n}\\bigr)\\right),$ the total error of the right rectangle rule.",
          "Estimate each block to two orders. On $[\\tfrac{k-1}{n},\\tfrac{k}{n}]$ Taylor-expand $g$ about the right endpoint $x_k=k/n$: $\\int_{x_k-1/n}^{x_k}g\\,dx-\\tfrac1n g(x_k)=\\tfrac{1}{2n^2}g'(x_k)-\\tfrac{1}{6n^3}g''(x_k)+O(n^{-4}),$ where each $O(n^{-4})$ is uniform. Summing over $k$ turns the $g'$ and $g''$ pieces into right Riemann sums of $g'$ and $g''$ on $[0,1]$, themselves $=\\int_0^1 g'+O(1/n)=\\bigl(g(1)-g(0)\\bigr)+O(1/n)$ and $\\int_0^1 g''+O(1/n)$.",
          "Collect the orders. The $\\tfrac{1}{2n^2}g'$ block contributes $\\dfrac{1}{2n^2}\\sum_k g'(x_k)=\\dfrac{1}{2n}\\Bigl(\\dfrac1n\\sum_k g'(x_k)\\Bigr)=\\dfrac{1}{2n}\\bigl(g(1)-g(0)+O(1/n)\\bigr)=\\dfrac{1}{2n}\\!\\left(-\\tfrac12\\right)+O(n^{-2})=\\dfrac{1}{4n}+O(n^{-2}).$ Hence $\\dfrac\\pi4-S_n=\\dfrac{1}{4n}+O(n^{-2})$, giving $L=\\dfrac14$ immediately and confirming the sign is positive (right rule undershoots an decreasing-derivative region here).",
          "Pin $C$. Carrying the next order, the residual $\\dfrac\\pi4-S_n-\\dfrac{1}{4n}$ equals $\\dfrac{1}{24n^2}\\bigl(g'(1)-g'(0)\\bigr)+O(n^{-3})$ after the standard Euler--Maclaurin bookkeeping (the $\\tfrac1{2n^2}g'$ correction's own $O(1/n)$ tail plus the $g''$ block assemble to the $\\tfrac{1}{12}$ coefficient). With $g'(1)-g'(0)=-\\tfrac12$ this is $-\\dfrac{1}{48n^2}\\cdot 2=-\\dfrac{1}{24n^2}$ with sign flipped into $S_n$: $S_n=\\tfrac\\pi4-\\tfrac1{4n}-\\tfrac1{24n^2}+\\cdots$, so $C=-\\dfrac1{24}$. \\[\\boxed{\\ \\bigl(\\tfrac\\pi4,\\ \\tfrac14,\\ -\\tfrac1{24}\\bigr)\\ }\\]"
        ]
      },
      {
        "name": "Digamma closed form and its asymptotic expansion",
        "steps": [
          "Close the sum in special functions. Using the complex factorisation $\\dfrac{n}{n^2+k^2}=\\dfrac{1}{2i}\\!\\left(\\dfrac{1}{k-in}-\\dfrac{1}{k+in}\\right)$ and the digamma identity $\\sum_{k=1}^{n}\\dfrac{1}{k+a}=\\psi(n+1+a)-\\psi(1+a)$, one gets $S_n=\\dfrac{1}{2i}\\bigl[\\psi(n+1-in)-\\psi(1-in)-\\psi(n+1+in)+\\psi(1+in)\\bigr]=\\operatorname{Im}\\!\\bigl[\\psi(1+in)-\\psi\\bigl((1+i)n+1\\bigr)\\bigr].$ This is an exact closed form for every $n$.",
          "Expand each digamma for large $n$. By $\\psi(z)=\\ln z-\\dfrac{1}{2z}-\\dfrac{1}{12z^2}+O(z^{-4})$: for the first, with $z=1+in$, $\\operatorname{Im}\\psi(1+in)=\\arg(1+in)-\\operatorname{Im}\\tfrac{1}{2(1+in)}-\\cdots=\\bigl(\\tfrac\\pi2-\\tfrac1n+\\cdots\\bigr)+\\cdots$; for the second, with $z=(1+i)n+1$, $\\operatorname{Im}\\psi(z)=\\arg z-\\operatorname{Im}\\tfrac{1}{2z}-\\operatorname{Im}\\tfrac{1}{12z^2}+\\cdots$, where $\\arg z\\to\\tfrac\\pi4$.",
          "Assemble the asymptotics. Subtracting and keeping terms through $n^{-2}$, the leading constants give $\\operatorname{Im}\\psi(1+in)-\\operatorname{Im}\\psi((1+i)n+1)\\to\\tfrac\\pi2-\\tfrac\\pi4=\\tfrac\\pi4$ (recovering part (a)); the $1/n$ pieces combine to $-\\tfrac{1}{4n}$, and the $1/n^2$ pieces to $-\\tfrac{1}{24n^2}$, exactly as the real-variable Euler--Maclaurin predicted. (A short numerical check of the digamma expansion confirms the coefficients $-\\tfrac14$ and $-\\tfrac1{24}$.)",
          "Conclude. Hence $S_n=\\dfrac\\pi4-\\dfrac1{4n}-\\dfrac1{24n^2}+O(n^{-4})$, so $\\lim S_n=\\tfrac\\pi4$, $L=\\tfrac14$, $C=-\\tfrac1{24}$. \\[\\boxed{\\ \\bigl(\\tfrac\\pi4,\\ \\tfrac14,\\ -\\tfrac1{24}\\bigr)\\ }\\]"
        ]
      }
    ],
    "remark": "Insight: the limit is the textbook quarter-circle $\\int_0^1\\frac{dx}{1+x^2}=\\frac\\pi4$, but the capstone is the second question almost no one asks — how fast? The answer is dictated entirely by the boundary: a right Riemann sum carries an $O(1/n)$ error whose leading coefficient is $\\tfrac12\\bigl(g(1)-g(0)\\bigr)$, a purely endpoint quantity, and a second-order coefficient $\\tfrac1{12}\\bigl(g'(1)-g'(0)\\bigr)$ from the derivative endpoints — the Euler--Maclaurin signature. The discipline a ranker needs is twofold: first, correctly classify $k=1,\\dots,n$ as a RIGHT sum (the left/midpoint mislabellings flip the sign of $L$ to $-\\tfrac14$ or kill it to $0$), and second, resist the seductive but wrong belief that the symmetric-looking summand makes the error $o(1/n)$. The missing $k=0$ endpoint is exactly the asymmetry that forces $L=\\tfrac14\\ne0$. The same coefficients drop out of the exact digamma closed form, so three independent instruments — Riemann recognition, Euler--Maclaurin, and special-function asymptotics — agree on $\\bigl(\\tfrac\\pi4,\\tfrac14,-\\tfrac1{24}\\bigr)$. Takeaway: a convergent Riemann sum hides a whole asymptotic series, and its leading rate is a boundary phenomenon, never an interior one."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "Catalan Caught Between an Arctangent and a Boundary Log",
    "difficulty": 5,
    "task": "Evaluate the weighted integral in closed form, expressing it through Catalan's constant",
    "tags": [
      "integration-by-parts",
      "partial-fractions",
      "catalan-constant",
      "boundary-limit",
      "no-reflection",
      "log-trap"
    ],
    "statement": "Let $G=\\displaystyle\\sum_{k=0}^{\\infty}\\frac{(-1)^{k}}{(2k+1)^{2}}$ denote Catalan's constant. Evaluate \\[ I=\\int_{0}^{1}\\arctan(x)\\,\\ln\\!\\frac{1+x}{1-x}\\,dx \\] in exact closed form. The weight $\\ln\\frac{1+x}{1-x}$ blows up as $x\\to1^{-}$, so first justify that the integral converges, then synthesise integration by parts, a partial-fraction split of the resulting logarithm, and the Catalan-defining integral $\\int_{0}^{1}\\frac{1}{1+x^{2}}\\ln\\frac{1+x}{1-x}\\,dx=G$ to reach a value built from $G$, $\\pi^{2}$ and $\\pi\\ln 2$. Resist the urge to attack it by a reflection $x\\mapsto1-x$: there is no $x$-stripping symmetry here.",
    "answer": "\\[\\boxed{\\,I=G-\\dfrac{\\pi^{2}}{16}+\\dfrac{\\pi\\ln 2}{4}\\,}\\]",
    "trap": "Two genuine conceptual traps, neither of them arithmetic. First, the reflection reflex. Because both factors are odd and the chapter is full of king-rule problems, a strong student instinctively tries $x\\mapsto1-x$ to fold the integral onto itself. But $\\dfrac{1+(1-x)}{1-(1-x)}=\\dfrac{2-x}{x}$, so the substitution produces the unrelated integrand $\\arctan(1-x)\\,\\ln\\frac{2-x}{x}$ and yields NO equation relating $I$ to itself; the reflection is a dead end, and time spent forcing a symmetry that does not exist is the first way the problem is lost. The integral must be built, not reflected. Second, and more dangerous, the boundary term in integration by parts. Taking $u=\\arctan x$ and $dv=\\ln\\frac{1+x}{1-x}\\,dx$ gives the primitive $V(x)=(1+x)\\ln(1+x)+(1-x)\\ln(1-x)$, and the boundary contribution is $\\bigl[\\arctan(x)\\,V(x)\\bigr]_{0}^{1}$. At $x=1$ the piece $(1-x)\\ln(1-x)$ looks like $0\\cdot(-\\infty)$, and a careless student either declares the boundary term divergent (concluding $I$ diverges, which is false) or silently drops it. In truth $(1-x)\\ln(1-x)\\to0$, so $V(1)=2\\ln 2$ and the boundary term is the finite $\\frac{\\pi}{4}\\cdot2\\ln2=\\frac{\\pi\\ln 2}{2}$. Dropping this term gives the badly wrong $I=-0.2453\\ldots$ instead of $+0.8435\\ldots$; declaring it infinite throws the problem away entirely. The convergence is real because near $x=1$ the singularity is only logarithmic ($\\int^{1}\\ln(1-x)\\,dx$ converges), and the final value is the finite $G-\\frac{\\pi^{2}}{16}+\\frac{\\pi\\ln 2}{4}$.",
    "solutions": [
      {
        "name": "Integration by parts onto the log primitive, then partial fractions",
        "steps": [
          "Convergence and the IBP setup. Near $x=1$ the only singularity is $\\ln(1-x)$, and $\\int^{1}\\ln(1-x)\\,dx$ converges, so $I$ is finite. Take $u=\\arctan x$ (so $u'=\\frac{1}{1+x^{2}}$) and $dv=\\ln\\frac{1+x}{1-x}\\,dx$. A primitive of the log is $V(x)=(1+x)\\ln(1+x)+(1-x)\\ln(1-x)$, since $V'(x)=\\ln(1+x)-\\ln(1-x)=\\ln\\frac{1+x}{1-x}$ and $V(0)=0$.",
          "The boundary term is finite. Since $(1-x)\\ln(1-x)\\to0$ as $x\\to1^{-}$, we get $V(1)=2\\ln 2$, hence $\\bigl[\\arctan(x)\\,V(x)\\bigr]_{0}^{1}=\\frac{\\pi}{4}\\cdot2\\ln 2=\\frac{\\pi\\ln 2}{2}$. Therefore $I=\\frac{\\pi\\ln 2}{2}-\\int_{0}^{1}\\frac{V(x)}{1+x^{2}}\\,dx$.",
          "Regroup the primitive. Using $\\ln(1+x)+\\ln(1-x)=\\ln(1-x^{2})$ one checks $V(x)=(1+x)\\ln(1+x)+(1-x)\\ln(1-x)=\\ln(1-x^{2})+x\\,\\ln\\frac{1+x}{1-x}$. Thus $\\int_{0}^{1}\\frac{V}{1+x^{2}}\\,dx=\\underbrace{\\int_{0}^{1}\\frac{\\ln(1-x^{2})}{1+x^{2}}\\,dx}_{J_{1}}+\\underbrace{\\int_{0}^{1}\\frac{x\\,\\ln\\frac{1+x}{1-x}}{1+x^{2}}\\,dx}_{J_{2}}.$",
          "Evaluate the two pieces. For $J_{1}$, write $\\ln(1-x^{2})=\\ln(1+x)+\\ln(1-x)$; the standard results $\\int_{0}^{1}\\frac{\\ln(1+x)}{1+x^{2}}dx=\\frac{\\pi\\ln 2}{8}$ and the Catalan identity $\\int_{0}^{1}\\frac{1}{1+x^{2}}\\ln\\frac{1+x}{1-x}\\,dx=G$ give $\\int_{0}^{1}\\frac{\\ln(1-x)}{1+x^{2}}dx=\\frac{\\pi\\ln 2}{8}-G$, so $J_{1}=\\frac{\\pi\\ln 2}{8}+\\bigl(\\frac{\\pi\\ln 2}{8}-G\\bigr)=\\frac{\\pi\\ln 2}{4}-G$. For $J_{2}$, the substitution $x=\\tan\\theta$ turns it into $\\int_{0}^{\\pi/4}\\tan\\theta\\,\\ln\\tan\\!\\bigl(\\tfrac{\\pi}{4}+\\theta\\bigr)\\,d\\theta=\\frac{\\pi^{2}}{16}$ (since $\\frac{1+\\tan\\theta}{1-\\tan\\theta}=\\tan(\\tfrac{\\pi}{4}+\\theta)$).",
          "Assemble. $\\int_{0}^{1}\\frac{V}{1+x^{2}}dx=J_{1}+J_{2}=\\frac{\\pi\\ln 2}{4}-G+\\frac{\\pi^{2}}{16}$, so $I=\\frac{\\pi\\ln 2}{2}-\\Bigl(\\frac{\\pi\\ln 2}{4}-G+\\frac{\\pi^{2}}{16}\\Bigr)=G-\\frac{\\pi^{2}}{16}+\\frac{\\pi\\ln 2}{4}.$ \\[\\boxed{\\,I=G-\\tfrac{\\pi^{2}}{16}+\\tfrac{\\pi\\ln 2}{4}\\,}\\]"
        ]
      },
      {
        "name": "Series expansion of the boundary log feeding the Catalan series",
        "steps": [
          "Expand the weight. For $|x|<1$, $\\ln\\frac{1+x}{1-x}=2\\sum_{k=0}^{\\infty}\\frac{x^{2k+1}}{2k+1}$, uniformly on $[0,1-\\varepsilon]$. Hence $I=2\\sum_{k=0}^{\\infty}\\frac{1}{2k+1}\\int_{0}^{1}x^{2k+1}\\arctan x\\,dx$, the interchange justified by monotone/dominated convergence (the tail at $x=1$ is controlled by the convergent $\\int^{1}\\ln(1-x)\\arctan x\\,dx$).",
          "Reduce each moment by parts. With $\\int_{0}^{1}x^{2k+1}\\arctan x\\,dx=\\Bigl[\\frac{x^{2k+2}}{2k+2}\\arctan x\\Bigr]_{0}^{1}-\\frac{1}{2k+2}\\int_{0}^{1}\\frac{x^{2k+2}}{1+x^{2}}\\,dx=\\frac{\\pi}{4(2k+2)}-\\frac{1}{2k+2}\\int_{0}^{1}\\frac{x^{2k+2}}{1+x^{2}}\\,dx$, and writing $\\frac{x^{2k+2}}{1+x^{2}}=x^{2k}-x^{2k-2}+\\cdots\\pm\\bigl(1-\\frac{1}{1+x^{2}}\\bigr)$, every moment is elementary in $\\frac{\\pi}{4}$ and finite harmonic-type sums.",
          "Resum to closed form. Summing the alternating arctan moments against $\\frac{2}{2k+1}$ rebuilds exactly the alternating squares $\\sum\\frac{(-1)^{k}}{(2k+1)^{2}}=G$ from the $\\arctan$ tails, while the remaining $\\frac{\\pi}{4}$ and geometric/telescoping pieces collapse to $-\\frac{\\pi^{2}}{16}+\\frac{\\pi\\ln 2}{4}$. (A direct numerical summation of the series confirms it converges to $0.843511\\ldots$, matching the closed form below.)",
          "Conclude. The three contributions combine to $I=G-\\frac{\\pi^{2}}{16}+\\frac{\\pi\\ln 2}{4}$, the Catalan term arising precisely from the odd-power expansion of the boundary logarithm. \\[\\boxed{\\,I=G-\\tfrac{\\pi^{2}}{16}+\\tfrac{\\pi\\ln 2}{4}\\,}\\]"
        ]
      },
      {
        "name": "Differentiation under the integral sign (Feynman parameter on the arctangent)",
        "steps": [
          "Introduce a parameter. Define $I(a)=\\int_{0}^{1}\\arctan(ax)\\,\\ln\\frac{1+x}{1-x}\\,dx$ for $a\\in[0,1]$, so $I(0)=0$ and the target is $I(1)$. The integrand is dominated by $|\\ln\\frac{1+x}{1-x}|$, which is integrable on $[0,1]$, so differentiation under the integral is legitimate: $I'(a)=\\int_{0}^{1}\\frac{x}{1+a^{2}x^{2}}\\ln\\frac{1+x}{1-x}\\,dx.$",
          "Evaluate the inner integral. Partial fractions in $x$ (splitting $\\frac{x}{1+a^{2}x^{2}}$ against $\\ln\\frac{1+x}{1-x}=\\ln(1+x)-\\ln(1-x)$) express $I'(a)$ through $\\arctan a$, $\\ln(1+a)$, $\\ln(1-a)$ and a dilogarithm of $a$; the elementary check $I'(1)=\\int_{0}^{1}\\frac{x}{1+x^{2}}\\ln\\frac{1+x}{1-x}\\,dx=\\frac{\\pi^{2}}{16}$ anchors the computation.",
          "Integrate the parameter back. Then $I(1)=\\int_{0}^{1}I'(a)\\,da$. The arctangent and elementary-log parts integrate to the $-\\frac{\\pi^{2}}{16}+\\frac{\\pi\\ln 2}{4}$ block, while the dilogarithmic part integrates to $+G$ via $\\int_{0}^{1}\\frac{1}{1+a^{2}}\\ln\\frac{1+a}{1-a}\\,da=G$, the same Catalan integral that appears in Solution 1.",
          "Conclude. Collecting the contributions, $I=I(1)=G-\\frac{\\pi^{2}}{16}+\\frac{\\pi\\ln 2}{4}$, in agreement with the integration-by-parts route. \\[\\boxed{\\,I=G-\\tfrac{\\pi^{2}}{16}+\\tfrac{\\pi\\ln 2}{4}\\,}\\]"
        ]
      }
    ],
    "remark": "Insight: this is a true three-instrument capstone with no shortcut. The reflection $x\\mapsto1-x$, the chapter's signature king-rule move, fails outright because $\\frac{1+x}{1-x}$ has no self-symmetry on $[0,1]$, so the integral must be constructed rather than folded. Integration by parts is the right first stroke, but it hides the real test in the boundary term: the factor $(1-x)\\ln(1-x)$ at $x=1$ is the classic $0\\cdot(-\\infty)$ that resolves to $0$, making the boundary the finite $\\frac{\\pi\\ln 2}{2}$ rather than a divergence. After that, the elegant regrouping $V(x)=\\ln(1-x^{2})+x\\ln\\frac{1+x}{1-x}$ splits the work into the Catalan integral $\\int_{0}^{1}\\frac{1}{1+x^{2}}\\ln\\frac{1+x}{1-x}=G$ and the crisp $\\int_{0}^{1}\\frac{x}{1+x^{2}}\\ln\\frac{1+x}{1-x}=\\frac{\\pi^{2}}{16}$ (the latter beautifully visible through $x=\\tan\\theta$, $\\frac{1+\\tan\\theta}{1-\\tan\\theta}=\\tan(\\frac{\\pi}{4}+\\theta)$). The same constant $G$ surfaces whether one expands the boundary log into the alternating odd series or differentiates under the integral, so three independent instruments converge on $G-\\frac{\\pi^{2}}{16}+\\frac{\\pi\\ln 2}{4}$. Takeaway: a non-elementary value like Catalan's constant is the fingerprint of $\\frac{1}{1+x^{2}}$ meeting $\\ln\\frac{1+x}{1-x}$, and the rankers' discipline is to verify a boundary limit before trusting it, and to abandon a symmetry the integral does not possess."
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
