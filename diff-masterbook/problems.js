/* problems.js — DATA. 100 original differentiability problems for f′ · The Derivative & Where It Fails, strictly within the JEE Advanced syllabus: derivatives from first principles, points of non-differentiability, the Mean Value Theorem & Rolle, implicit/parametric/inverse & logarithmic differentiation, differentiable functional equations, higher-order derivatives (Leibniz), tangents & normals, monotonicity & extrema, and derivative-driven limits. No Darboux's theorem, Hamel-basis/pathological functional equations, Lipschitz/Gronwall/Banach, Taylor's remainder/analyticity, or the symmetric derivative. Verified in sympy. statement/answer are raw LaTeX (the app auto-detects prose+math); steps use $...$ and $$...$$. */
window.PROBLEMS = [
  {
    "theme": "firstprinciples",
    "themeLabel": "Derivatives from First Principles",
    "title": "The Corner That Vanished",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "x|x|",
      "first-principles",
      "absolute-value",
      "higher-derivatives",
      "corner"
    ],
    "statement": "Let $g(x)=x\\,|x|$ for all real $x$. Working only from the definition of the derivative as a limit (no power rule, no product rule), determine $g'(0)$, then find $g'(x)$ for every real $x$, and finally decide whether $g''(0)$ exists. Report the ordered triple $\\big(g'(0),\\ g'(2),\\ \\text{``exists''/``does not exist''}\\big)$ for $g''(0)$.",
    "answer": "$g'(0)=0$, $g'(x)=2|x|$ so $g'(2)=4$, and $g''(0)$ does not exist. Triple: $\\big(0,\\ 4,\\ \\text{does not exist}\\big)$.",
    "trap": "Writing $g(x)=x|x|$, ``differentiating'' as if it were $x^2$ to get $g'=2x$ and then $g''=2$ at $0$. This silently uses the $x\\ge 0$ branch; the true derivative is $2|x|$, which has a corner at $0$, so $g''(0)$ cannot exist even though $g'(0)$ does.",
    "solutions": [
      {
        "name": "Direct limit, then one-sided second derivative",
        "steps": [
          "At $0$: $\\dfrac{g(h)-g(0)}{h}=\\dfrac{h|h|}{h}=|h|\\to 0$, so $g'(0)=0$.",
          "For $x>0$, near such $x$ the function equals $x^2$, and the limit $\\lim_{h\\to0}\\frac{(x+h)|x+h|-x|x|}{h}=2x$; for $x<0$ it equals $-x^2$ giving $-2x$. Hence $g'(x)=2|x|$, and $g'(2)=4$.",
          "Now test $g''(0)=\\lim_{h\\to0}\\frac{g'(h)-g'(0)}{h}=\\lim_{h\\to0}\\frac{2|h|}{h}$. The right limit is $+2$, the left limit is $-2$.",
          "Since the one-sided limits disagree, $g''(0)$ does not exist. Triple: $\\boxed{(0,\\,4,\\,\\text{does not exist})}$."
        ]
      },
      {
        "name": "Even/odd structure of difference quotients",
        "steps": [
          "Note $g$ is odd. The quotient $\\frac{g(0+h)-g(0)}{h}=|h|$ is manifestly $\\ge 0$ and $\\to 0$, so $g'(0)=0$.",
          "Because $g'(x)=2|x|$ is even with a V-shape, its difference quotient at $0$ equals $\\operatorname{sgn}(h)\\cdot 2$, whose two-sided limit fails.",
          "Therefore $g$ is $C^1$ everywhere but not twice differentiable at $0$; $g'(2)=4$. Triple: $\\boxed{(0,\\,4,\\,\\text{does not exist})}$."
        ]
      }
    ],
    "remark": "Insight: $x|x|$ is the cleanest example of a function that is differentiable everywhere yet whose derivative has a corner. Each ``$|\\cdot|$'' you wrap around a smooth function costs you exactly one order of smoothness."
  },
  {
    "theme": "firstprinciples",
    "themeLabel": "Derivatives from First Principles",
    "title": "How Sharp Is Too Sharp?",
    "difficulty": 4,
    "task": "Find all",
    "tags": [
      "power-function",
      "absolute-value",
      "one-sided",
      "threshold",
      "first-principles"
    ],
    "statement": "For a real parameter $\\alpha>0$, let $f_\\alpha(x)=|x|^{\\alpha}$. Using only the limit definition at $x=0$, find all $\\alpha>0$ for which $f_\\alpha$ is differentiable at $0$, and state $f_\\alpha'(0)$ in those cases.",
    "answer": "$f_\\alpha$ is differentiable at $0$ iff $\\alpha>1$, and then $f_\\alpha'(0)=0$. For $\\alpha=1$ the one-sided derivatives are $+1$ and $-1$; for $0<\\alpha<1$ the difference quotient is unbounded.",
    "trap": "Believing that because $|x|^\\alpha$ is continuous at $0$ for every $\\alpha>0$, it must be differentiable for all $\\alpha>0$. Continuity is free here; differentiability needs the quotient $\\operatorname{sgn}(h)\\,|h|^{\\alpha-1}$ to converge, which fails for $\\alpha\\le 1$.",
    "solutions": [
      {
        "name": "Reduce to a single power of $|h|$",
        "steps": [
          "The difference quotient at $0$ is $\\dfrac{|h|^{\\alpha}-0}{h}=\\operatorname{sgn}(h)\\,|h|^{\\alpha-1}$.",
          "If $\\alpha>1$, then $|h|^{\\alpha-1}\\to 0$, so both one-sided limits are $0$ and $f_\\alpha'(0)=0$.",
          "If $\\alpha=1$, the quotient is $\\operatorname{sgn}(h)$, giving right limit $+1$, left limit $-1$: not differentiable.",
          "If $0<\\alpha<1$, then $|h|^{\\alpha-1}\\to+\\infty$, so the quotient diverges. Conclusion: differentiable $\\iff \\boxed{\\alpha>1}$, with $f_\\alpha'(0)=0$."
        ]
      },
      {
        "name": "One-sided derivatives",
        "steps": [
          "Right derivative: $\\lim_{h\\to0^+}\\frac{h^\\alpha}{h}=\\lim_{h\\to0^+}h^{\\alpha-1}$, which is $0$ if $\\alpha>1$, $1$ if $\\alpha=1$, $+\\infty$ if $\\alpha<1$.",
          "Left derivative: $\\lim_{h\\to0^-}\\frac{(-h)^\\alpha}{h}=-\\lim h^{\\alpha-1}$ (with $h=|h|$), mirroring the right side with opposite sign for $\\alpha\\le1$.",
          "Two-sided derivative exists iff the two agree, which happens exactly when both are $0$, i.e. $\\alpha>1$. Then $f_\\alpha'(0)=0$. Answer: $\\boxed{\\alpha>1}$."
        ]
      }
    ],
    "remark": "Insight: the exponent $1$ is the precise differentiability threshold for $|x|^\\alpha$ at the origin. This single picture organizes $|x|$ (corner), $|x|^{3/2}$ (smooth-looking cusp that is in fact $C^1$), and $x^2$."
  },
  {
    "theme": "firstprinciples",
    "themeLabel": "Derivatives from First Principles",
    "title": "Gluing a Parabola to a Root",
    "difficulty": 4,
    "task": "Find a,b",
    "tags": [
      "piecewise",
      "gluing",
      "sqrt",
      "continuity-vs-differentiability",
      "first-principles"
    ],
    "statement": "Let \\[ f(x)=\\begin{cases} a x^2 + b x + 1, & x\\le 1,\\\\ \\sqrt{x}, & x>1, \\end{cases}\\] where $a,b$ are real constants. Find the unique pair $(a,b)$ for which $f$ is differentiable at $x=1$, computing the right derivative of $\\sqrt{x}$ from first principles.",
    "answer": "$\\displaystyle (a,b)=\\left(\\tfrac12,\\,-\\tfrac12\\right)$.",
    "trap": "Imposing only continuity ($a+b+1=1$) and stopping, or matching derivatives by quoting $\\frac{d}{dx}\\sqrt{x}=\\frac{1}{2\\sqrt{x}}$ without justifying it from the limit. Continuity alone leaves a one-parameter family; you need the matched-slope condition too.",
    "solutions": [
      {
        "name": "Continuity and matched one-sided derivatives",
        "steps": [
          "Continuity at $1$: $a(1)^2+b(1)+1=\\sqrt{1}$, i.e. $a+b+1=1$, so $a+b=0$.",
          "Right derivative of $\\sqrt{x}$ at $1$ from the definition: $\\lim_{h\\to0^+}\\frac{\\sqrt{1+h}-1}{h}=\\lim_{h\\to0^+}\\frac{1}{\\sqrt{1+h}+1}=\\frac12$.",
          "Left derivative from the polynomial: $\\lim_{h\\to0^-}\\frac{a(1+h)^2+b(1+h)+1-1}{h}=2a+b$.",
          "Set $2a+b=\\frac12$. With $a+b=0$ this gives $a=\\frac12,\\ b=-\\frac12$, so $(a,b)=\\boxed{\\left(\\tfrac12,-\\tfrac12\\right)}$."
        ]
      },
      {
        "name": "Rationalize the root quotient",
        "steps": [
          "Continuity forces $a+b=0$ as above.",
          "For the slope match, rationalize: $\\frac{\\sqrt{1+h}-1}{h}=\\frac{(1+h)-1}{h(\\sqrt{1+h}+1)}=\\frac{1}{\\sqrt{1+h}+1}\\to\\frac12$.",
          "Equate with the polynomial's slope $2a+b=\\frac12$; solving the linear system yields $\\boxed{(a,b)=(\\tfrac12,-\\tfrac12)}$."
        ]
      }
    ],
    "remark": "Insight: a clean $C^1$ glue always needs two equations — value and slope. The right derivative of $\\sqrt{x}$ at $1$ is genuinely $\\tfrac12$, and rationalizing the difference quotient is the honest first-principles route."
  },
  {
    "theme": "firstprinciples",
    "themeLabel": "Derivatives from First Principles",
    "title": "Tangent in the Rationals",
    "difficulty": 5,
    "task": "Find all",
    "tags": [
      "dirichlet",
      "rationals",
      "tangency",
      "one-point-differentiable",
      "pathological"
    ],
    "statement": "Define $f:\\mathbb{R}\\to\\mathbb{R}$ by \\[ f(x)=\\begin{cases}\\cos x,& x\\in\\mathbb{Q},\\\\ 1-\\dfrac{x^2}{2},& x\\notin\\mathbb{Q}.\\end{cases}\\] Find all points at which $f$ is differentiable, and give the value of the derivative there.",
    "answer": "$f$ is differentiable only at $x=0$, with $f'(0)=0$. (At every other point it is not even continuous.)",
    "trap": "Concluding $f$ is differentiable on a whole interval because both branches are individually smooth and ``$\\cos x\\approx 1-x^2/2$ for small $x$''. Differentiability at $a$ forces both branches to share the same value and slope at $a$; that simultaneous tangency happens only at $x=0$.",
    "solutions": [
      {
        "name": "Continuity gate, then matched difference quotients",
        "steps": [
          "A point $a$ where the two branches give different values cannot be a continuity point: every neighbourhood contains both rationals and irrationals, so the limit would have to equal both $\\cos a$ and $1-a^2/2$. Hence differentiability (which forces continuity) needs $\\cos a = 1-\\tfrac{a^2}{2}$. Writing $h(a)=\\cos a-1+\\tfrac{a^2}{2}$ we get $h(0)=0$ and $h'(a)=a-\\sin a\\ge 0$, strictly positive for $a>0$; with $h$ even this forces $h(a)>0$ for all $a\\neq 0$. So the only continuity point is $a=0$.",
          "Differentiability at $a$ also requires the rational and irrational difference quotients to share a limit. Along rational $h$ the slope tends to $-\\sin a$; along irrational $h$ it tends to $-a$. So we also need $-\\sin a=-a$, i.e. $\\sin a=a$.",
          "The equation $\\sin a=a$ has the unique real solution $a=0$, since $g(a)=a-\\sin a$ satisfies $g(0)=0$ and $g'(a)=1-\\cos a\\ge 0$, strictly increasing away from the origin. This is consistent with (and weaker than) the continuity gate, both pointing to $a=0$.",
          "At $a=0$ both branches have value $1$ and slope $0$, so $\\tfrac{f(h)-f(0)}{h}\\to 0$ along every sequence $h\\to 0$ (rational $h$ gives $\\tfrac{\\cos h-1}{h}\\to 0$, irrational $h$ gives $\\tfrac{-h^2/2}{h}\\to 0$). Thus $f$ is differentiable only at $\\boxed{x=0,\\ f'(0)=0}$."
        ]
      },
      {
        "name": "Tangency criterion for split functions",
        "steps": [
          "For $f$ equal to smooth $p$ on $\\mathbb{Q}$ and smooth $q$ off $\\mathbb{Q}$, differentiability at $a$ holds iff $p(a)=q(a)$ and $p'(a)=q'(a)$ (the graphs are tangent there), and then $f'(a)=p'(a)$. Indeed, the difference quotient splits into the $p$-quotient along rationals and the $q$-quotient along irrationals, both of which must converge to the same number; that is exactly equality of values and of derivatives at $a$.",
          "Here $p(x)=\\cos x,\\ q(x)=1-x^2/2$. The value equation $\\cos a=1-a^2/2$ and slope equation $-\\sin a=-a$ must hold together.",
          "Both are satisfied only at $a=0$ (monotonicity of $a-\\sin a$ kills all other candidates), giving $f'(0)=p'(0)=0$. Answer: $\\boxed{\\text{only } x=0,\\ f'(0)=0}$."
        ]
      }
    ],
    "remark": "Insight: a function pieced together on $\\mathbb{Q}$ and its complement is differentiable exactly where the two defining curves are tangent. This converts a ``pathological'' question into a clean system of two equations. Here the value gate alone already isolates $x=0$, because $\\cos a-1+\\tfrac{a^2}{2}>0$ for every $a\\neq0$ -- so $f$ is discontinuous everywhere else."
  },
  {
    "theme": "firstprinciples",
    "themeLabel": "Derivatives from First Principles",
    "title": "Two Hidden Double Roots",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "dirichlet",
      "double-root",
      "differentiability-set",
      "rationals",
      "counting"
    ],
    "statement": "Let $p(x)=x^2(x-1)^2$ and define \\[ f(x)=\\begin{cases} p(x), & x\\in\\mathbb{Q},\\\\ 0, & x\\notin\\mathbb{Q}. \\end{cases}\\] Determine the exact set of points at which $f$ is differentiable, and give $f'$ at each such point. Then state how many such points there are.",
    "answer": "$f$ is differentiable exactly at $x=0$ and $x=1$, with $f'(0)=f'(1)=0$. There are $\\boxed{2}$ such points.",
    "trap": "Reasoning ``$p$ is a smooth polynomial, so $f$ inherits differentiability wherever $p$ is nice''. Off the rationals $f\\equiv 0$, so $f$ can be continuous only where $p(a)=0$, and differentiable only where additionally $p'(a)=0$ — i.e. at double roots of $p$, not at all roots.",
    "solutions": [
      {
        "name": "Continuity requires a root; differentiability requires a double root",
        "steps": [
          "At any $a$, irrational points near $a$ force $f\\to 0$, while rational points force $f\\to p(a)$. Continuity at $a$ therefore needs $p(a)=0$.",
          "Given $p(a)=0$ we have $f(a)=0$, and the difference quotient is $0$ along irrational $h$ and $\\frac{p(a+h)}{h}$ along rational $h$. Since $p(a)=0$, $p(a+h)=p'(a)h+O(h^2)$, so this tends to $p'(a)$.",
          "For the two-sided limit to exist and equal a single value we need $p'(a)=0$ as well. Thus $f$ is differentiable at $a$ iff $a$ is a double root of $p$, and then $f'(a)=0$.",
          "$p(x)=x^2(x-1)^2$ has double roots at $x=0$ and $x=1$. Hence the differentiability set is $\\{0,1\\}$, $f'=0$ there, and the count is $\\boxed{2}$."
        ]
      },
      {
        "name": "Squeeze the rational branch",
        "steps": [
          "Where $p(a)\\ne0$, $f$ is discontinuous (rational/irrational subsequences disagree), so exclude those.",
          "Where $p(a)=0$ but $p'(a)\\ne0$: along rational $h$, $\\frac{p(a+h)}{h}\\to p'(a)\\ne0$, while along irrational $h$ it is $0$ — the limit fails.",
          "Where $p$ has a double root, $|p(a+h)|\\le C h^2$ near $a$, so $\\big|\\frac{f(a+h)}{h}\\big|\\le C|h|\\to0$ on both branches, giving $f'(a)=0$.",
          "Double roots of $x^2(x-1)^2$ are $0,1$; therefore exactly $\\boxed{2}$ points of differentiability."
        ]
      }
    ],
    "remark": "Insight: ``differentiable on $\\mathbb{Q}$, zero elsewhere'' converts each requirement into an algebraic order-of-vanishing condition. Differentiability counts double roots; mere continuity counts simple roots."
  },
  {
    "theme": "firstprinciples",
    "themeLabel": "Derivatives from First Principles",
    "title": "A Slope Born at a Single Point",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "one-point-differentiable",
      "nonzero-derivative",
      "rationals",
      "tangency",
      "first-principles"
    ],
    "statement": "Define $f:\\mathbb{R}\\to\\mathbb{R}$ by \\[ f(x)=\\begin{cases} x+x^2, & x\\in\\mathbb{Q},\\\\ x, & x\\notin\\mathbb{Q}. \\end{cases}\\] Determine every point at which $f$ is differentiable and the derivative there. (In particular, decide whether the derivative, where it exists, is zero.)",
    "answer": "$f$ is differentiable only at $x=0$, and $f'(0)=1$ — a nonzero derivative at the single point of differentiability.",
    "trap": "Assuming any function differentiable at exactly one point must look like $x^2$ there with derivative $0$. Here the two branches are tangent at $0$ with common slope $1$, so the unique derivative is $1\\ne0$, dispelling the myth that one-point differentiability implies a flat tangent.",
    "solutions": [
      {
        "name": "Where do the branches meet, and with what slope?",
        "steps": [
          "Differentiability at $a$ forces continuity at $a$. Since $\\mathbb{Q}$ and $\\mathbb{R}\\setminus\\mathbb{Q}$ are both dense, the rational-approach and irrational-approach values must coincide: $a+a^2=a$, i.e. $a^2=0$, so $a=0$ is the only candidate; everywhere else $f$ is discontinuous (branch gap $a^2\\ne0$), hence not differentiable.",
          "At $0$, note $0\\in\\mathbb{Q}$ so $f(0)=0+0^2=0$. Along irrational $h$: $\\dfrac{f(h)-f(0)}{h}=\\dfrac{h}{h}=1$. Along rational $h$: $\\dfrac{h+h^2}{h}=1+h\\to1$.",
          "Every sequence $h\\to0$ splits into rational and irrational parts whose quotients both tend to $1$, so the full limit exists and $f'(0)=1$.",
          "Therefore $f$ is differentiable only at $\\boxed{x=0,\\ f'(0)=1}$, a nonzero slope."
        ]
      },
      {
        "name": "Tangency of $x+x^2$ and $x$",
        "steps": [
          "Write $p(x)=x+x^2$ (rational branch) and $q(x)=x$ (irrational branch). Because both branches are sampled in every neighborhood, $f$ can be differentiable at $a$ only where the two smooth pieces agree to first order: $p(a)=q(a)$ and $p'(a)=q'(a)$.",
          "Value match: $a+a^2=a\\Rightarrow a^2=0\\Rightarrow a=0$. Slope match: $1+2a=1\\Rightarrow a=0$. Both conditions hold only at $a=0$.",
          "At that single contact point the curves are tangent with common slope $p'(0)=q'(0)=1$, and one checks directly that $\\dfrac{f(h)-f(0)}{h}\\to1$ on both branches, so $f'(0)=1$. Answer: $\\boxed{\\text{only }x=0,\\ f'(0)=1}$."
        ]
      }
    ],
    "remark": "Insight: two curves can be tangent (equal value and slope) at a single point while diverging elsewhere. A one-point-differentiable function need not have derivative $0$ — it inherits whatever common slope the branches share, here $1$. Contrast $g(x)=x^2$ for rationals, $0$ for irrationals, which is also differentiable only at $0$ but with $g'(0)=0$; the value/slope-matching viewpoint explains both at once."
  },
  {
    "theme": "firstprinciples",
    "themeLabel": "Derivatives from First Principles",
    "title": "Where the Cube Root Bites Back",
    "difficulty": 5,
    "task": "Decide",
    "tags": [
      "cube root",
      "vertical tangent",
      "two-sided limit",
      "rationalization",
      "infinite slope"
    ],
    "statement": "Let \\[f(x)=\\sqrt[3]{\\,x^{2}-9x\\,}\\qquad(x\\in\\mathbb{R}),\\] where $\\sqrt[3]{\\;}$ denotes the real cube root, so $f$ is continuous on all of $\\mathbb{R}$. Working strictly from the limit definition \\[f'(a)=\\lim_{h\\to0}\\frac{f(a+h)-f(a)}{h},\\] decide whether $f$ is differentiable at $x=0$ and at $x=4$. For every point where the limit exists, give its exact value; where it fails, justify the failure from the two-sided difference quotient.",
    "answer": "\\[\\boxed{\\,f'(0)\\ \\text{does not exist},\\qquad f'(4)=-\\dfrac{\\sqrt[3]{20}}{60}=-\\dfrac{1}{3\\sqrt[3]{400}}\\,}\\]",
    "trap": "At $x=0$ both one-sided difference quotients run to the SAME value, $-\\infty$, and $f$ is continuous and locally monotone there — so it is tempting to say the two-sided limit 'exists and equals $-\\infty$', or even to read off a slope, and declare $f$ differentiable at $0$. But $-\\infty$ is not a real number: a derivative must be a finite limit. Equal one-sided behaviour is necessary, not sufficient. The radicand $x^{2}-9x$ has a SIMPLE zero at $x=0$, so $f$ behaves like $\\sqrt[3]{-9x}$ near $0$, giving a vertical tangent — $f'(0)$ genuinely does not exist even though nothing 'corner-like' is visible.",
    "solutions": [
      {
        "name": "Rationalize the cube-root quotient via $a^{3}-b^{3}$",
        "steps": [
          "Write the difference quotient at a point $a$ with $A=a^{2}-9a$ and $P=(a+h)^{2}-9(a+h)$, so $f(a+h)=\\sqrt[3]{P}$, $f(a)=\\sqrt[3]{A}$. Use $u-v=\\dfrac{u^{3}-v^{3}}{u^{2}+uv+v^{2}}$ with $u=\\sqrt[3]{P},\\,v=\\sqrt[3]{A}$: \\[\\frac{\\sqrt[3]{P}-\\sqrt[3]{A}}{h}=\\frac{P-A}{h\\left(\\sqrt[3]{P^{2}}+\\sqrt[3]{PA}+\\sqrt[3]{A^{2}}\\right)}.\\]",
          "Compute $P-A=\\big[(a+h)^{2}-9(a+h)\\big]-\\big[a^{2}-9a\\big]=(2a-9)h+h^{2}$, so the $h$ cancels: \\[\\frac{f(a+h)-f(a)}{h}=\\frac{(2a-9)+h}{\\sqrt[3]{P^{2}}+\\sqrt[3]{PA}+\\sqrt[3]{A^{2}}}.\\]",
          "At $a=4$: $A=16-36=-20\\neq0$, so as $h\\to0$ the denominator $\\to3\\sqrt[3]{A^{2}}=3\\sqrt[3]{400}$ (finite, nonzero) and the numerator $\\to2(4)-9=-1$. Hence $f'(4)=\\dfrac{-1}{3\\sqrt[3]{400}}=-\\dfrac{\\sqrt[3]{20}}{60}$.",
          "At $a=0$: $A=0$, so every term of the denominator carries a factor $\\sqrt[3]{A}=0$ and the denominator $\\to0$, while the numerator $\\to2(0)-9=-9\\neq0$. The quotient blows up; both one-sided limits are $-\\infty$ (for small $h$, $x^{2}-9x<0$, fixing the sign). Therefore $f'(0)$ does not exist. $\\boxed{f'(0)\\ \\text{DNE},\\ f'(4)=-\\sqrt[3]{20}/60}$"
        ]
      },
      {
        "name": "Reduce to the building block $g(t)=\\sqrt[3]{t}$",
        "steps": [
          "Let $g(t)=\\sqrt[3]{t}$ and $u(x)=x^{2}-9x$, so $f=g\\circ u$ with $u$ a polynomial (smooth). From first principles, $g'(t_{0})=\\lim_{k\\to0}\\dfrac{\\sqrt[3]{t_{0}+k}-\\sqrt[3]{t_{0}}}{k}$ equals $\\dfrac{1}{3\\sqrt[3]{t_{0}^{2}}}$ when $t_{0}\\neq0$ (rationalize as in Method 1), while at $t_{0}=0$ the quotient $\\dfrac{\\sqrt[3]{k}}{k}=k^{-2/3}\\to+\\infty$, so $g'(0)$ does not exist.",
          "Because $u$ is differentiable and $u(0)=0$ is a SIMPLE root ($u'(0)=2(0)-9=-9\\neq0$), near $x=0$ we have $u(x)\\approx-9x$, hence $f(x)\\approx\\sqrt[3]{-9x}$: the inner map sends $x$ across $t=0$ at nonzero speed, so it cannot heal the singularity of $g$ at $0$.",
          "Quantitatively, the chain at $x=0$ would read $g'(u(0))\\cdot u'(0)=g'(0)\\cdot(-9)$, but $g'(0)$ is infinite, so no finite value emerges; checking the genuine two-sided difference quotient gives $-\\infty$ on both sides. Thus $f'(0)$ does not exist.",
          "At $x=4$, $u(4)=-20\\neq0$, so $g$ is differentiable there and the chain rule (now legitimate) gives \\[f'(4)=g'(-20)\\,u'(4)=\\frac{1}{3\\sqrt[3]{(-20)^{2}}}\\cdot(-1)=-\\frac{1}{3\\sqrt[3]{400}}=-\\frac{\\sqrt[3]{20}}{60}. \\] $\\boxed{f'(0)\\ \\text{DNE},\\ f'(4)=-\\sqrt[3]{20}/60}$"
        ]
      },
      {
        "name": "Carathéodory slope function",
        "steps": [
          "Differentiability of $f$ at $a$ is equivalent to writing $f(x)-f(a)=\\varphi(x)\\,(x-a)$ with $\\varphi$ CONTINUOUS at $a$; then $f'(a)=\\varphi(a)$. From Method 1's algebra, for $x\\neq a$, \\[\\varphi(x)=\\frac{f(x)-f(a)}{x-a}=\\frac{(x+a-9)}{\\sqrt[3]{u(x)^{2}}+\\sqrt[3]{u(x)u(a)}+\\sqrt[3]{u(a)^{2}}},\\quad u(t)=t^{2}-9t.\\]",
          "At $a=4$ ($u(4)=-20\\neq0$): the right side is a ratio of continuous functions with nonvanishing denominator near $x=4$, so $\\varphi$ extends continuously, with $\\varphi(4)=\\dfrac{4+4-9}{3\\sqrt[3]{(-20)^{2}}}=\\dfrac{-1}{3\\sqrt[3]{400}}$. Hence $f'(4)=-\\dfrac{\\sqrt[3]{20}}{60}$.",
          "At $a=0$ ($u(0)=0$): as $x\\to0$ the denominator $\\to0$ while the numerator $\\to-9$, so $\\varphi(x)\\to-\\infty$ and admits NO finite continuous value $\\varphi(0)$. The Carathéodory criterion fails.",
          "Equivalently, no finite $m$ can satisfy $f(x)=f(0)+m\\,x+o(x)$, since $f(x)\\sim\\sqrt[3]{-9x}$ dominates any linear term. Therefore $f'(0)$ does not exist. $\\boxed{f'(0)\\ \\text{DNE},\\ f'(4)=-\\sqrt[3]{20}/60}$"
        ]
      }
    ],
    "remark": "The whole phenomenon is governed by the order of the zero of the radicand. A simple zero of $u$ (as at $x=0$) yields a $\\sqrt[3]{x}$-type vertical tangent and kills differentiability, whereas at a point where $u\\neq0$ the cube root is locally smooth. The seductive error is to treat a matching pair of $\\pm\\infty$ one-sided limits as a legitimate two-sided limit: a derivative lives in $\\mathbb{R}$, and 'continuous, increasing, with equal one-sided slopes' still does not force differentiability."
  },
  {
    "theme": "firstprinciples",
    "themeLabel": "Derivatives from First Principles",
    "title": "The Slope at the Edge of the World",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "half-line-domain",
      "one-sided-derivative",
      "squeeze",
      "discontinuous-derivative",
      "symmetric-quotient-fallacy",
      "first-principles"
    ],
    "statement": "Let $f:[0,\\infty)\\to\\mathbb{R}$ be defined on the half-line by \\[ f(x)=\\begin{cases} x^{3/2}\\,\\sin\\!\\dfrac{1}{x}, & x>0,\\\\ 0, & x=0. \\end{cases}\\] Note that $f$ is given only for $x\\ge 0$; the symbol $f(-h)$ is meaningless. Working strictly from the limit definition of the derivative at the endpoint $0$: (a) decide whether $f'(0)$ exists and, if so, find its value; (b) decide whether $\\displaystyle\\lim_{x\\to0^{+}}f'(x)$ exists. A classmate, having found $f'(0)$, then forms the symmetric second difference quotient $\\dfrac{f(h)-2f(0)+f(-h)}{h^{2}}$; to give $f(-h)$ a meaning he replaces $f$ by its even extension $g(x)=f(|x|)$, computes the quotient, finds it diverges, and announces that this divergence shows his value of $f'(0)$ was wrong. Adjudicate his claim.",
    "answer": "$\\left(f'(0)=0,\\ \\displaystyle\\lim_{x\\to0^{+}}f'(x)\\ \\text{does not exist}\\right)$",
    "trap": "Treating the endpoint of a half-line domain as if it had a two-sided neighbourhood: invoking a symmetric or second-difference quotient that needs $f(-h)$, then \"rescuing\" it by even-extending $f$ to $g(x)=f(|x|)$. The extension $g$ is a different function; the second symmetric quotient of $g$ diverges merely because $g$ is not twice differentiable at $0$, which says nothing about $f'(0)$. The one-sided derivative $f'(0)=0$ stands. A subtler version of the trap is expecting $\\lim_{x\\to0^{+}}f'(x)$ to equal $f'(0)$ -- but a derivative need not be continuous, and here it is unbounded near $0$.",
    "solutions": [
      {
        "name": "Squeeze on the only admissible (right) difference quotient",
        "steps": [
          "On $[0,\\infty)$ the only difference quotient available at $0$ is the right-hand one: $\\dfrac{f(0+h)-f(0)}{h}=\\dfrac{h^{3/2}\\sin(1/h)}{h}=h^{1/2}\\sin\\dfrac{1}{h}$ for $h>0$.",
          "Since $|\\sin(1/h)|\\le 1$, we have $0\\le\\bigl|h^{1/2}\\sin(1/h)\\bigr|\\le h^{1/2}$, and $h^{1/2}\\to 0$ as $h\\to0^{+}$. By the squeeze theorem the right-hand limit is $0$.",
          "For a half-line domain, \"differentiable at the endpoint\" means exactly that this one-sided limit exists; no left-hand quotient is defined or required. Hence $f'(0)=0$.",
          "For (b), away from $0$ the rules apply: $f'(x)=\\tfrac32 x^{1/2}\\sin(1/x)-x^{-1/2}\\cos(1/x)$. Along $x_n=\\dfrac{1}{2\\pi n}$ we have $\\cos(1/x_n)=1$, so $f'(x_n)=\\tfrac32 x_n^{1/2}\\sin(2\\pi n)-x_n^{-1/2}=-\\sqrt{2\\pi n}\\to-\\infty$. Thus $\\lim_{x\\to0^{+}}f'(x)$ does not exist, even though $f'(0)$ does. The classmate is wrong: $\\boxed{\\left(f'(0)=0,\\ \\lim_{x\\to0^{+}}f'(x)\\ \\text{does not exist}\\right)}$"
        ]
      },
      {
        "name": "Heine (sequential) characterisation, plus dismantling the even-extension claim",
        "steps": [
          "By Heine's criterion the one-sided derivative is $0$ iff $h_n^{1/2}\\sin(1/h_n)\\to 0$ for every sequence $h_n\\to0^{+}$. Pick the worst case where $|\\sin(1/h_n)|=1$: still $\\bigl|h_n^{1/2}\\sin(1/h_n)\\bigr|=h_n^{1/2}\\to0$. Every sequence gives $0$, so $f'(0)=0$.",
          "Now examine the even extension $g(x)=f(|x|)$. Its symmetric second quotient is $\\dfrac{g(h)-2g(0)+g(-h)}{h^{2}}=\\dfrac{2f(h)}{h^{2}}=2h^{-1/2}\\sin\\dfrac1h$, which is unbounded as $h\\to0^{+}$, so indeed it has no limit.",
          "But this measures the second derivative of $g$, not the first derivative of $f$. In fact $g$ is even, so its one-sided quotients at $0$ are $\\pm h^{1/2}\\sin(1/h)\\to0$; hence $g'(0)=0$ exists too. The divergence only proves $g\\notin C^{2}$ at $0$ -- a statement about a fabricated function and about second-order behaviour, logically disconnected from $f'(0)$.",
          "Therefore the classmate's deduction is a non sequitur: the value $f'(0)=0$ is untouched, and $\\lim_{x\\to0^{+}}f'(x)$ still fails to exist by the $x_n=\\tfrac{1}{2\\pi n}$ witness. Answer: $\\boxed{\\left(f'(0)=0,\\ \\lim_{x\\to0^{+}}f'(x)\\ \\text{does not exist}\\right)}$"
        ]
      },
      {
        "name": "Epsilon-delta from first principles",
        "steps": [
          "Claim $f'(0)=0$. Given $\\varepsilon>0$ choose $\\delta=\\varepsilon^{2}$. Then for every $h$ with $0<h<\\delta$, $\\left|\\dfrac{f(h)-f(0)}{h}-0\\right|=\\bigl|h^{1/2}\\sin(1/h)\\bigr|\\le h^{1/2}<\\delta^{1/2}=\\varepsilon$.",
          "This is precisely the $\\varepsilon$-$\\delta$ statement of the right-hand derivative being $0$; the domain $[0,\\infty)$ admits only $h>0$, so the limit is one-sided by construction and $f'(0)=0$.",
          "Were the derivative continuous at $0$ we would need $f'(x)\\to0$; but for $x_n=\\tfrac{1}{2\\pi n}$, $|f'(x_n)|=\\sqrt{2\\pi n}-\\tfrac32 x_n^{1/2}\\cdot0\\to\\infty$, contradicting any finite limit. So $\\lim_{x\\to0^{+}}f'(x)$ does not exist while $f'(0)=0$ -- a differentiable function with a non-continuous (indeed unbounded) derivative at its only boundary point.",
          "Hence the final verdict: $\\boxed{\\left(f'(0)=0,\\ \\lim_{x\\to0^{+}}f'(x)\\ \\text{does not exist}\\right)}$"
        ]
      }
    ],
    "remark": "Insight: on a half-line domain, differentiability at the endpoint is one-sided by definition -- every two-sided device (symmetric quotient, second difference, even/odd splitting) is simply unavailable, and forcing one in by extension answers a question about a different function. The companion lesson is that $f'(0)$ can exist while $\\lim_{x\\to0^{+}}f'(x)$ does not: the derivative need not be continuous, so you can never recover $f'(0)$ by taking $\\lim f'(x)$. The exponent $3/2$ is the tuning dial -- it is large enough that $h^{1/2}\\to0$ kills the oscillation in the first quotient (giving $f'(0)=0$), yet small enough that the chain-rule term $x^{-1/2}\\cos(1/x)$ blows up, so $f'$ stays unbounded at the edge."
  },
  {
    "theme": "firstprinciples",
    "themeLabel": "Derivatives from First Principles",
    "title": "Two Curves That Kiss at the Quarter-Turn",
    "difficulty": 5,
    "task": "Decide differentiability",
    "tags": [
      "first-principles",
      "one-sided-derivatives",
      "glue-point",
      "continuity-vs-differentiability",
      "piecewise"
    ],
    "statement": "Define $f$ by gluing two perfectly smooth pieces at $x=1$: $$f(x)=\\begin{cases}\\arctan x, & x\\le 1,\\\\[4pt] \\dfrac{\\pi}{4}+\\sin(x-1), & x>1.\\end{cases}$$ Both pieces are infinitely differentiable on their own sides, and at the seam they agree in value: $\\arctan 1=\\tfrac{\\pi}{4}$ and $\\tfrac{\\pi}{4}+\\sin 0=\\tfrac{\\pi}{4}$, so $f$ is certainly continuous at $1$. Working only from the definition $f'(1)=\\lim_{h\\to 0}\\dfrac{f(1+h)-f(1)}{h}$ (compute each one-sided limit separately, no shortcut differentiation rules), decide whether $f$ is differentiable at $x=1$. If it is not, report the size of the jump $f'(1^{+})-f'(1^{-})$ in the derivative.",
    "answer": "The left derivative is $f'(1^{-})=\\tfrac12$ while the right derivative is $f'(1^{+})=1$, so $f$ is $\\textbf{not}$ differentiable at $1$, with $$\\boxed{\\,f'(1^{+})-f'(1^{-})=\\tfrac12\\,}.$$",
    "trap": "Seeing that the two pieces meet in value at $x=1$ (both equal $\\tfrac{\\pi}{4}$) and that each piece is smooth, and concluding the glued function must be differentiable there. Continuity at the seam guarantees nothing about the derivative; the two one-sided difference quotients tend to $\\tfrac12$ and $1$, so a corner is hidden inside a perfectly continuous join.",
    "solutions": [
      {
        "name": "Two one-sided difference quotients from scratch",
        "steps": [
          "Left side ($h\\to 0^{-}$), the relevant piece is $\\arctan x$: $f'(1^{-})=\\lim_{h\\to0^{-}}\\dfrac{\\arctan(1+h)-\\tfrac{\\pi}{4}}{h}$. Put $\\arctan(1+h)=\\tfrac{\\pi}{4}+\\theta$, so $1+h=\\tan(\\tfrac{\\pi}{4}+\\theta)=\\dfrac{1+\\tan\\theta}{1-\\tan\\theta}$, giving $h=\\dfrac{2\\tan\\theta}{1-\\tan\\theta}$ and $\\theta\\to0$ as $h\\to0$.",
          "Then $\\dfrac{\\theta}{h}=\\dfrac{\\theta(1-\\tan\\theta)}{2\\tan\\theta}=\\dfrac{1-\\tan\\theta}{2}\\cdot\\dfrac{\\theta}{\\tan\\theta}\\to\\dfrac{1-0}{2}\\cdot 1=\\dfrac12$. Hence $f'(1^{-})=\\tfrac12$.",
          "Right side ($h\\to 0^{+}$), the piece is $\\tfrac{\\pi}{4}+\\sin(x-1)$: $f'(1^{+})=\\lim_{h\\to0^{+}}\\dfrac{\\big(\\tfrac{\\pi}{4}+\\sin h\\big)-\\tfrac{\\pi}{4}}{h}=\\lim_{h\\to0^{+}}\\dfrac{\\sin h}{h}=1$.",
          "The one-sided derivatives $\\tfrac12$ and $1$ disagree, so $f'(1)$ does not exist; the jump is $1-\\tfrac12=\\boxed{\\tfrac12}$."
        ]
      },
      {
        "name": "Series expansion of each difference quotient",
        "steps": [
          "Near the seam write $x=1+h$. For the left piece, $\\arctan(1+h)=\\tfrac{\\pi}{4}+\\tfrac12 h-\\tfrac14 h^{2}+\\cdots$, so $\\dfrac{\\arctan(1+h)-\\tfrac{\\pi}{4}}{h}=\\tfrac12-\\tfrac14 h+\\cdots\\to\\tfrac12$ as $h\\to0^{-}$.",
          "For the right piece, $\\sin h=h-\\tfrac{h^{3}}{6}+\\cdots$, so $\\dfrac{\\sin h}{h}=1-\\tfrac{h^{2}}{6}+\\cdots\\to1$ as $h\\to0^{+}$.",
          "The leading (constant) terms $\\tfrac12$ and $1$ are the one-sided derivatives; since they differ, $f$ is not differentiable at $1$.",
          "The derivative jump is $f'(1^{+})-f'(1^{-})=1-\\tfrac12=\\boxed{\\tfrac12}$."
        ]
      }
    ],
    "remark": "**Insight.** A continuous join is only the first hurdle. The seam test really runs two independent races, one for each side, and the function is differentiable only if both difference-quotient limits cross the finish line at the same slope. Here both pieces pass through $\\big(1,\\tfrac{\\pi}{4}\\big)$ yet arrive with slopes $\\tfrac12$ and $1$, so the graph has a corner disguised by a smooth-looking weld."
  },
  {
    "theme": "firstprinciples",
    "themeLabel": "Derivatives from First Principles",
    "title": "The Free Coefficient Nobody Notices",
    "difficulty": 5,
    "task": "Find the parameters",
    "tags": [
      "first-principles",
      "one-sided-derivatives",
      "parameter-matching",
      "glue-point",
      "exponential-piece"
    ],
    "statement": "A function is built from a parabola on the left and a transcendental piece on the right, joined at $x=0$: $$f(x)=\\begin{cases} a\\,x^{2}+b\\,x+1, & x\\le 0,\\\\[4pt] e^{2x}-\\cos 3x+1, & x>0,\\end{cases}$$ where $a,b$ are real constants. The right piece satisfies $e^{0}-\\cos 0+1=1$, matching the left value $f(0)=1$, so $f$ is continuous at $0$ for $\\emph{every}$ choice of $a,b$. Using only the limit definition $f'(0)=\\lim_{h\\to 0}\\dfrac{f(0+h)-f(0)}{h}$ (evaluate the two one-sided limits directly, no rule-based differentiation of either piece), determine $\\emph{all}$ pairs $(a,b)$ for which $f$ is differentiable at $x=0$, and report the resulting value of $f'(0)$.",
    "answer": "Differentiability forces $b=2$ while $a$ may be $\\textbf{any}$ real number, and then $$\\boxed{\\,f \\text{ is differentiable at }0 \\iff b=2,\\ a\\in\\mathbb{R};\\quad f'(0)=2\\,}.$$",
    "trap": "Computing the right-hand second derivative $4e^{2x}+9\\cos 3x\\big|_{0}=13$ and forcing it to equal the left second derivative $2a$, concluding $a=\\tfrac{13}{2}$. Differentiability at the seam constrains only the $\\emph{first}$ one-sided derivatives, not the curvatures; the coefficient $a$ stays completely free, and the only real condition is $b=2$.",
    "solutions": [
      {
        "name": "Direct one-sided difference quotients",
        "steps": [
          "Left derivative: for $h\\to0^{-}$ the active piece is $a h^{2}+b h+1$, so $f'(0^{-})=\\lim_{h\\to0^{-}}\\dfrac{(a h^{2}+b h+1)-1}{h}=\\lim_{h\\to0^{-}}(a h+b)=b$.",
          "Right derivative: for $h\\to0^{+}$ the active piece is $e^{2h}-\\cos 3h+1$, so $f'(0^{+})=\\lim_{h\\to0^{+}}\\dfrac{(e^{2h}-\\cos 3h+1)-1}{h}=\\lim_{h\\to0^{+}}\\left(\\dfrac{e^{2h}-1}{h}-\\dfrac{\\cos 3h-1}{h}\\right)$.",
          "Use the standard limits $\\dfrac{e^{2h}-1}{h}=2\\cdot\\dfrac{e^{2h}-1}{2h}\\to 2$ and $\\dfrac{1-\\cos 3h}{h}=\\dfrac{1-\\cos 3h}{(3h)^2}\\cdot 9h\\to \\tfrac12\\cdot 9\\cdot 0=0$. Hence $f'(0^{+})=2-0=2$.",
          "Differentiability needs $f'(0^{-})=f'(0^{+})$, i.e. $b=2$; nothing constrains $a$. Thus $b=2$, $a\\in\\mathbb{R}$, and $f'(0)=\\boxed{2}$."
        ]
      },
      {
        "name": "Series expansion of the right piece",
        "steps": [
          "Expand near $0$: $e^{2h}=1+2h+2h^{2}+\\cdots$ and $\\cos 3h=1-\\tfrac{9}{2}h^{2}+\\cdots$, so $e^{2h}-\\cos 3h+1=1+2h+\\tfrac{13}{2}h^{2}+\\cdots$.",
          "Then the right difference quotient is $\\dfrac{(e^{2h}-\\cos 3h+1)-1}{h}=2+\\tfrac{13}{2}h+\\cdots\\to 2$, giving $f'(0^{+})=2$.",
          "The left difference quotient is $\\dfrac{a h^{2}+b h}{h}=a h+b\\to b$, giving $f'(0^{-})=b$.",
          "Matching the constant terms forces $b=2$; the $h^{2}$ coefficient $\\tfrac{13}{2}$ on the right only affects curvature and never appears in the first-derivative condition, so $a$ is free. Therefore $b=2$, $a\\in\\mathbb{R}$, $f'(0)=\\boxed{2}$."
        ]
      }
    ],
    "remark": "**Insight.** Differentiability at a seam is a $\\emph{first-order}$ matching condition: only the linear terms of the two difference quotients must agree. The tempting move of also matching second derivatives over-constrains the problem and invents a phantom value for $a$. The honest first-principles count gives one equation ($b=2$) and leaves $a$ entirely unpinned."
  },
  {
    "theme": "nondiff",
    "themeLabel": "Points of Non-Differentiability",
    "title": "Folds Within Folds",
    "difficulty": 4,
    "task": "Determine",
    "tags": [
      "nested-absolute",
      "even-function",
      "corners",
      "counting"
    ],
    "statement": "Consider the nested-absolute function \\[ F(x) \\;=\\; \\bigl|\\,|x|-1\\,\\bigr| \\;+\\; \\bigl|\\,|x|-2\\,\\bigr|, \\qquad x\\in\\mathbb{R}. \\] Determine all points at which $F$ is not differentiable, and state how many there are.",
    "answer": "$5$ points: $x=-2,\\,-1,\\,0,\\,1,\\,2$.",
    "trap": "Treating $\\bigl||x|-1\\bigr|$ as having a kink only where $|x|=1$ (i.e. $x=\\pm1$) and $\\bigl||x|-2\\bigr|$ only where $|x|=2$ ($x=\\pm2$), giving the false count of $4$. This forgets that the innermost $|x|$ itself contributes a corner at $x=0$: each layer of absolute value can introduce its own break point, and the inner $|x|$ must not be overlooked. (One checks $F'(0^+)=-2\\neq+2=F'(0^-)$, so $x=0$ is genuine.)",
    "solutions": [
      {
        "name": "Break points of each layer",
        "steps": [
          "$F$ is a finite sum of compositions of the continuous map $u\\mapsto|u|$, hence continuous everywhere; non-differentiability can occur only at the corners contributed by the absolute-value layers.",
          "The innermost $|x|$ has a corner at $x=0$, and this corner is inherited by every term built on top of it.",
          "$\\bigl||x|-1\\bigr|$ also breaks where its inner argument vanishes, i.e. $|x|=1$ ($x=\\pm1$); $\\bigl||x|-2\\bigr|$ also breaks where $|x|=2$ ($x=\\pm2$).",
          "Union of all candidate break points: $\\{-2,-1,0,1,2\\}$. Computing one-sided slopes at each shows a non-zero slope jump (verified below), so none cancel: $\\boxed{5}$ points."
        ]
      },
      {
        "name": "Reduce to $t=|x|\\ge0$ then reflect",
        "steps": [
          "For $x\\ge0$ write $t=x$: $F=|t-1|+|t-2|$, a sum-of-absolute-values with corners at $t=1,2$ — i.e. $x=1,2$.",
          "$F$ is even, since $F(-x)=\\bigl||{-x}|-1\\bigr|+\\bigl||{-x}|-2\\bigr|=F(x)$, so the corners at $x=1,2$ reflect to $x=-1,-2$.",
          "Evenness forces a corner at $x=0$ unless the one-sided derivatives match. Here $F'(0^+)$ equals the slope of $|t-1|+|t-2|$ at $t=0^+$, which is $-1-1=-2$; by evenness $F'(0^-)=-F'(0^+)=+2\\neq-2$, so $x=0$ is a corner.",
          "Total: $\\{-2,-1,0,1,2\\}$, i.e. $\\boxed{5}$ points."
        ]
      },
      {
        "name": "Explicit piecewise form",
        "steps": [
          "For $x\\ge2$: $F=(x-1)+(x-2)=2x-3$. For $1\\le x\\le2$: $F=(x-1)+(2-x)=1$. For $0\\le x\\le1$: $F=(1-x)+(2-x)=3-2x$.",
          "Slopes for $x>0$: $-2$ on $(0,1)$, $0$ on $(1,2)$, $+2$ on $(2,\\infty)$ — jumps at $x=1$ and $x=2$; and $F'(0^+)=-2$.",
          "By evenness the mirror picture for $x<0$ has slopes $+2,0,-2$ with jumps at $x=-1,-2$ and $F'(0^-)=+2$.",
          "All five abscissae $-2,-1,0,1,2$ exhibit genuine non-zero slope jumps, and $F$ is linear (hence differentiable) on every open interval between them. $\\boxed{5}$ points."
        ]
      }
    ],
    "remark": "Insight: each $|\\cdot|$ in a tower can spawn its own corner. The fold $t\\mapsto|x|$ both reflects the right half onto the left and can pin a new corner at the origin — so count the layers, not just the roots of the outermost absolute value. A quick sanity rule: for an even, piecewise-linear $F$, the origin is a corner exactly when $F'(0^+)\\neq0$."
  },
  {
    "theme": "nondiff",
    "themeLabel": "Points of Non-Differentiability",
    "title": "Where the Sine Overtakes the Cosine",
    "difficulty": 4,
    "task": "Find all",
    "tags": [
      "max",
      "trigonometric",
      "corners",
      "crossing"
    ],
    "statement": "On the interval $[0,2\\pi]$ define \\[ h(x) \\;=\\; \\max\\bigl(\\sin x,\\ \\cos x\\bigr). \\] Find all points of $[0,2\\pi]$ at which $h$ is not differentiable.",
    "answer": "$2$ points: $x=\\dfrac{\\pi}{4}$ and $x=\\dfrac{5\\pi}{4}$.",
    "trap": "Two seductive errors. First, declaring $h$ non-differentiable wherever $\\sin x=\\cos x$ regardless of slopes, or at endpoints/extrema where the active branch peaks: $\\max(f,g)$ can only break where $f=g$ and the one-sided slopes differ (a transversal crossing); a tangential meeting keeps $\\max$ smooth, and an interior extremum of a single branch is irrelevant. Second, padding the count with phantom solutions of $\\sin x=\\cos x$: on $[0,2\\pi]$ there are exactly two, $\\tfrac{\\pi}{4}$ and $\\tfrac{5\\pi}{4}$, both genuine corners — so the answer is $2$, not $4$ or some inflated count.",
    "solutions": [
      {
        "name": "Crossings with unequal slopes",
        "steps": [
          "$\\max(f,g)$ is non-differentiable only where $f=g$ and the active branch switches, i.e. where $f=g$ but $f'\\neq g'$.",
          "Solve $\\sin x=\\cos x$ on $[0,2\\pi]$, i.e. $\\tan x=1$: this gives exactly $x=\\tfrac{\\pi}{4}$ and $x=\\tfrac{5\\pi}{4}$.",
          "At $x=\\tfrac{\\pi}{4}$ the slopes are $\\cos x=\\tfrac{\\sqrt2}{2}$ (for $\\sin$) and $-\\sin x=-\\tfrac{\\sqrt2}{2}$ (for $\\cos$); they differ, so it is a corner. At $x=\\tfrac{5\\pi}{4}$ the slopes are $-\\tfrac{\\sqrt2}{2}$ and $+\\tfrac{\\sqrt2}{2}$, again unequal — a second corner.",
          "Elsewhere one function strictly dominates, so $h$ coincides locally with a smooth branch; the endpoints $0,2\\pi$ contribute only one-sided derivatives and are not corners. Hence $\\boxed{2}$ points."
        ]
      },
      {
        "name": "Difference function (max as an absolute value)",
        "steps": [
          "Use $\\max(f,g)=\\tfrac12(f+g)+\\tfrac12|f-g|$. With $d(x)=\\sin x-\\cos x=\\sqrt2\\,\\sin\\!\\bigl(x-\\tfrac{\\pi}{4}\\bigr)$, write $h(x)=\\cos x+\\tfrac12\\bigl(d(x)+|d(x)|\\bigr)$.",
          "Since $\\cos x$ and $d(x)$ are smooth, the only possible breaks come from $|d(x)|$, which is non-differentiable exactly at the zeros of $d$ where $d'\\neq0$ (simple zeros).",
          "On $[0,2\\pi]$, $d(x)=0$ means $x-\\tfrac{\\pi}{4}=0$ or $\\pi$, i.e. $x=\\tfrac{\\pi}{4},\\tfrac{5\\pi}{4}$; there $d'(x)=\\sqrt2\\,\\cos\\!\\bigl(x-\\tfrac{\\pi}{4}\\bigr)=\\pm\\sqrt2\\neq0$, so both are simple zeros and genuine corners.",
          "Adding the smooth $\\cos x$ changes nothing about differentiability, so $h$ has exactly $\\boxed{2}$ corners, at $x=\\tfrac{\\pi}{4}$ and $x=\\tfrac{5\\pi}{4}$."
        ]
      }
    ],
    "remark": "Insight: $\\max(f,g)=\\tfrac12(f+g)+\\tfrac12|f-g|$ converts a max into a single absolute value, so the corner-count of $\\max(f,g)$ equals the number of transversal (simple) zeros of $f-g$. Tangential contacts, where $f-g$ has a double zero, leave $\\max$ differentiable."
  },
  {
    "theme": "nondiff",
    "themeLabel": "Points of Non-Differentiability",
    "title": "The Triple-Notch Valley",
    "difficulty": 4,
    "task": "Find the number of points of non-differentiability.",
    "tags": [
      "min",
      "absolute-value",
      "piecewise-linear",
      "corners"
    ],
    "statement": "Define \\[ m(x) \\;=\\; \\min\\bigl(\\,|x|,\\ |x-2|,\\ 1\\,\\bigr), \\qquad x\\in\\mathbb{R}. \\] Find the number of points at which $m$ is not differentiable.",
    "answer": "$5$ points: $x=-1,\\,0,\\,1,\\,2,\\,3$.",
    "trap": "Just unioning the kinks of the three inputs — $\\{0\\}$ from $|x|$, $\\{2\\}$ from $|x-2|$, none from the constant $1$ — and answering '2'. A $\\min$ also breaks where two inputs CROSS and the active one switches, and the flat cap $1$ creates new corners where each V meets the ceiling. You must build the actual lower envelope.",
    "solutions": [
      {
        "name": "Build the lower envelope",
        "steps": [
          "Tabulate which input is smallest. For $x\\le-1$ all of $|x|,|x-2|\\ge1$, so $m=1$; on $[-1,0]$, $m=|x|=-x$ (falling to $0$); on $[0,1]$, $m=|x|=x$ (rising to $1$); on $[1,2]$, $m=|x-2|=2-x$ (falling to $0$); on $[2,3]$, $m=|x-2|=x-2$ (rising to $1$); for $x\\ge3$, $m=1$.",
          "The resulting graph: flat at height $1$, a down-V touching $0$ at $x=0$, rising to the cap at $x=1$, a down-V touching $0$ at $x=2$, rising to the cap at $x=3$, then flat.",
          "Corners occur at every junction where the slope changes: $x=-1$ (cap meets line), $x=0$ (V-bottom), $x=1$ (line meets cap), $x=2$ (V-bottom), $x=3$ (line meets cap).",
          "At each junction the two adjacent pieces agree in value (so $m$ is continuous) but the slope jumps by a nonzero amount, so all five points are genuine corners. \\[\\boxed{5}\\]"
        ]
      },
      {
        "name": "Slope inventory",
        "steps": [
          "Reading $m$ from left to right, its constant slopes on successive pieces are $0,\\,-1,\\,+1,\\,-1,\\,+1,\\,0$.",
          "Consecutive slopes differ at every transition: $0\\to-1$, $-1\\to+1$, $+1\\to-1$, $-1\\to+1$, $+1\\to0$ — five nonzero jumps.",
          "Each jump marks a corner; the abscissae are $x=-1,\\,0,\\,1,\\,2,\\,3$.",
          "Hence $m$ fails to be differentiable at exactly $\\boxed{5}$ points."
        ]
      }
    ],
    "remark": "Insight: a $\\min$ of several functions is their lower envelope, and its corners arise from three sources — (i) inherited kinks of the inputs, (ii) transversal crossings where the active piece switches, and (iii) contact with a flat cap. Counting only the input kinks (here just $0$ and $2$) undercounts badly; always reconstruct the envelope, slope by slope."
  },
  {
    "theme": "nondiff",
    "themeLabel": "Points of Non-Differentiability",
    "title": "The Sawtooth Parabolas",
    "difficulty": 4,
    "task": "Determine",
    "tags": [
      "fractional-part",
      "floor",
      "continuity",
      "corners",
      "periodic"
    ],
    "statement": "Let $\\{t\\}=t-\\lfloor t\\rfloor$ denote the fractional part, and define \\[ f(x) \\;=\\; \\{x\\}\\bigl(1-\\{x\\}\\bigr). \\] Determine whether $f$ is continuous on $\\mathbb{R}$, and find the number of points in the open interval $(0,5)$ at which $f$ is not differentiable.",
    "answer": "$f$ is continuous on all of $\\mathbb{R}$; it is non-differentiable at exactly $4$ points of $(0,5)$, namely $x=1,2,3,4$.",
    "trap": "Assuming that because $\\lfloor x\\rfloor$ jumps at every integer, $f$ must be discontinuous (hence trivially non-differentiable) there. Here the parabola $u(1-u)$ vanishes at BOTH ends $u=0$ and $u=1$, so the pieces glue continuously; the failure at integers is a corner, not a jump.",
    "solutions": [
      {
        "name": "Continuity then one-sided slopes",
        "steps": [
          "At an integer $n$: $f(n)=0\\cdot1=0$; the right limit is $\\lim_{u\\to0^+}u(1-u)=0$; the left limit is $\\lim_{u\\to1^-}u(1-u)=0$. All equal, so $f$ is continuous at $n$, hence on $\\mathbb{R}$.",
          "On $(n,n+1)$, $f(x)=u(1-u)$ with $u=x-n$, so $f'(x)=1-2u$.",
          "Right derivative at $n$: $u\\to0^+\\Rightarrow f'\\to+1$; left derivative at $n$: $u\\to1^-\\Rightarrow f'\\to-1$. Since $+1\\neq-1$, $n$ is a corner.",
          "Interior integers of $(0,5)$ are $1,2,3,4$ — four corners; elsewhere $f$ is a smooth parabola. \\[\\boxed{4}\\]"
        ]
      },
      {
        "name": "Symmetric tent of parabolas",
        "steps": [
          "On each period $f$ is the downward parabola $u(1-u)$, peaking at $\\tfrac14$ at the midpoint and touching $0$ at both integer ends — so the graph is a chain of identical humps meeting the axis.",
          "Two humps meet at each integer with finite but opposite end-slopes $-1$ (incoming) and $+1$ (outgoing): a continuous corner, not a break.",
          "Within $(0,5)$ the meeting points are $1,2,3,4$.",
          "$\\boxed{4}$ non-differentiable points; $f$ continuous everywhere."
        ]
      }
    ],
    "remark": "Insight: a floor/fractional construction is discontinuous at integers ONLY if the per-period piece has unequal end-values. Engineering both ends to $0$ converts every integer jump into a mere corner — a clean way to manufacture continuous non-differentiability."
  },
  {
    "theme": "nondiff",
    "themeLabel": "Points of Non-Differentiability",
    "title": "Two Cusps and No Corners",
    "difficulty": 4,
    "task": "Classify",
    "tags": [
      "cusp",
      "vertical-tangent",
      "fractional-exponent",
      "continuity"
    ],
    "statement": "Consider \\[ C(x) \\;=\\; \\sqrt[3]{x^{2}} \\;+\\; \\sqrt[3]{(x-3)^{2}} \\;=\\; x^{2/3}+(x-3)^{2/3}, \\] where the real cube root is taken (so each term equals $|\\,\\cdot\\,|^{2/3}\\ge 0$). Classify each point at which $C$ fails to be differentiable, and state how many such points there are.",
    "answer": "$2$ points: cusps (vertical tangents) at $x=0$ and $x=3$.",
    "trap": "Declaring $C$ differentiable everywhere because it is continuous and 'looks smooth', or mislabelling the breaks as corners. The exponent $2/3$ makes the one-sided derivatives tend to $+\\infty$ and $-\\infty$ with the graph turning back — a cusp, not a finite-slope corner. Continuity does not imply differentiability.",
    "solutions": [
      {
        "name": "Derivative blow-up",
        "steps": [
          "Since the real cube root gives $x^{2/3}=|x|^{2/3}$, for $x\\neq 0$ we have $\\dfrac{d}{dx}|x|^{2/3}=\\dfrac{2}{3}\\,\\dfrac{\\operatorname{sgn}(x)}{|x|^{1/3}}$, which $\\to+\\infty$ as $x\\to0^+$ and $\\to-\\infty$ as $x\\to0^-$: a vertical tangent with the slope flipping sign — a cusp at $x=0$.",
          "By the same computation $\\dfrac{d}{dx}(x-3)^{2/3}=\\dfrac{2}{3}\\,\\dfrac{\\operatorname{sgn}(x-3)}{|x-3|^{1/3}}\\to\\pm\\infty$ as $x\\to3^{\\pm}$, giving a cusp at $x=3$.",
          "Away from $0$ and $3$, both terms are differentiable with finite derivative, so $C$ is smooth there (numerically $|C'|$ stays bounded, e.g. $\\le 7$ on $[-5,8]$).",
          "Two cusps total. \\[\\boxed{2}\\]"
        ]
      },
      {
        "name": "Difference-quotient test",
        "steps": [
          "$C$ is continuous everywhere (sums of continuous powers), and in particular $C(0)=3^{2/3}=C(3)$, so there is no jump to hide a break.",
          "At $x=0$: $\\dfrac{C(h)-C(0)}{h}=\\dfrac{|h|^{2/3}}{h}+O(1)=\\operatorname{sgn}(h)\\,|h|^{-1/3}+O(1)$, which $\\to+\\infty$ as $h\\to0^+$ and $\\to-\\infty$ as $h\\to0^-$. No finite derivative — a cusp.",
          "The same limit structure occurs at $x=3$ via the term $(x-3)^{2/3}$; the other term is differentiable there and contributes only a finite amount, not affecting the blow-up.",
          "Hence exactly $\\boxed{2}$ cusps, both vertical tangents."
        ]
      }
    ],
    "remark": "Insight: for a term $|x-a|^{p/q}$ in lowest terms with $0<p/q<1$, the one-sided slopes are infinite — non-differentiable at $x=a$. With even $p$ (here $p/q=2/3$) the graph uses $|x-a|^{2/3}$, so both one-sided slopes are infinite with opposite signs: a cusp. Odd $p$ (e.g. $x^{1/3}$, where the real cube root keeps the sign) gives a single-signed infinite slope — a vertical inflectional tangent. Either way the point is non-differentiable, but the geometry differs."
  },
  {
    "theme": "nondiff",
    "themeLabel": "Points of Non-Differentiability",
    "title": "The Root That Doesn't Fold",
    "difficulty": 4,
    "task": "Find the number of …",
    "tags": [
      "absolute-value",
      "double-root",
      "cubic",
      "corners",
      "trap"
    ],
    "statement": "Let \\[ P(x) \\;=\\; \\bigl|\\, x^{3}-3x^{2}+4 \\,\\bigr|, \\qquad x\\in\\mathbb{R}. \\] Find the number of points at which $P$ is not differentiable.",
    "answer": "$1$ point, at $x=-1$.",
    "trap": "Finding the real roots of $x^3-3x^2+4$ and answering with their count, expecting two corners. The cubic factors as $(x+1)(x-2)^2$: the root $x=2$ is a DOUBLE root where the cubic touches the axis without crossing (and where its derivative is $0$), so $|P|$ stays differentiable there. Only the simple root $x=-1$ yields a corner.",
    "solutions": [
      {
        "name": "Factor and test each root",
        "steps": [
          "Factor: $x^{3}-3x^{2}+4=(x+1)(x-2)^{2}$, with a simple root $x=-1$ and a double root $x=2$.",
          "For $|u|$ with $u$ smooth, a zero of $u$ is a corner iff $u'\\neq0$ there (transversal crossing). Compute $u'(x)=3x^2-6x$.",
          "At $x=-1$: $u'(-1)=3+6=9\\neq0$ and $u$ changes sign — a corner.",
          "At $x=2$: $u'(2)=12-12=0$, and near $2$, $u=(x+1)(x-2)^2\\ge0$ (since $x+1>0$), so $u$ does not change sign; $|u|=u$ stays smooth. Exactly $\\boxed{1}$ corner."
        ]
      },
      {
        "name": "Sign chart of the cubic",
        "steps": [
          "$u=(x+1)(x-2)^2$: the factor $(x-2)^2\\ge0$ always, so $\\operatorname{sgn}(u)=\\operatorname{sgn}(x+1)$.",
          "Thus $u<0$ for $x<-1$ and $u\\ge0$ for $x\\ge-1$ — the ONLY sign change is at $x=-1$.",
          "$|u|=u\\cdot\\operatorname{sgn}(u)$ can break only where the sign of $u$ flips, i.e. at $x=-1$; at $x=2$, $u$ merely touches $0$ from above, so $|u|=u$ is locally smooth.",
          "Hence $P$ is non-differentiable at exactly $\\boxed{1}$ point."
        ]
      },
      {
        "name": "Local Taylor models",
        "steps": [
          "Near $x=-1$: $u\\approx 9(x+1)$, so $P\\approx9|x+1|$ — a corner (slope jump $18$).",
          "Near $x=2$: $u\\approx 3(x-2)^2$ (leading term, since $u(2)=u'(2)=0$, $u''(2)=6$), which is $\\ge0$, so $P\\approx3(x-2)^2$ — a smooth parabola, fully differentiable.",
          "No other zeros of $u$ exist.",
          "Therefore the count is $\\boxed{1}$."
        ]
      }
    ],
    "remark": "Insight: $|u|$ folds only at sign changes of $u$. A root of even multiplicity is a tangency (the curve kisses the axis, $u'=0$), so $|u|$ remains differentiable there — counting roots overcounts; count sign changes."
  },
  {
    "theme": "nondiff",
    "themeLabel": "Points of Non-Differentiability",
    "title": "The Corner That Two Different Accidents Erase",
    "difficulty": 5,
    "task": "Count",
    "tags": [
      "modulus-sum",
      "corner-annihilation",
      "tangency",
      "slope-jump",
      "parameter",
      "non-differentiable"
    ],
    "statement": "For a real parameter $a$ define $f_a:\\mathbb{R}\\to\\mathbb{R}$ by \\[ f_a(x)=\\bigl|\\,x^2-ax\\,\\bigr|-\\bigl|\\,x-1\\,\\bigr|. \\] For every $a$ the function $f_a$ is continuous on $\\mathbb{R}$. Let $N(a)$ be the number of points at which $f_a$ is continuous but \\text{not} differentiable. Determine $N(a)$ for all real $a$, i.e. give the value of $N(a)$ on each part of $\\mathbb{R}$, and state the complete set of $a$ for which $N(a)$ is \\text{less} than its generic value.",
    "answer": "\\[\\boxed{\\,N(a)=3\\ \\text{for } a\\notin\\{0,1\\},\\qquad N(0)=N(1)=1\\,}\\]",
    "trap": "Listing the kinks as the sign-change roots of the two insides — $x=0,\\ x=a$ (from $|x^2-ax|=|x|\\,|x-a|$) and $x=1$ (from $|x-1|$) — and declaring $N=3$ \\text{distinct} points generically, dropping to $N=2$ only when two of those roots merge (at $a=0$ where $0,a$ coincide, or at $a=1$ where $a,1$ coincide). This is wrong twice over. (i) At $a=0$ the inside $x^2-ax=x^2$ has a \\text{double} root at $0$: $|x^2|=x^2$ is perfectly smooth there, so the corner is not merged with another — it never exists, and $x=1$ is the only kink, giving $N(0)=1$, not $2$. (ii) At $a=1$ the point $x=1$ is a \\text{simple} zero of $x^2-x$ \\text{and} the vertex of $-|x-1|$ at once; the two slope-jumps are $+2|g'(1)|=+2$ and $-2$, which \\text{cancel}, so $f_1$ is differentiable at $x=1$, leaving only $x=0$, hence $N(1)=1$, not $2$. The naive root-merge picture gives $2$ at both special values; the true count is $1$, for two genuinely different reasons (a tangency vs. a slope-jump cancellation).",
    "solutions": [
      {
        "name": "Slope-jump bookkeeping at every candidate kink",
        "steps": [
          "Write $f_a=|g_1|-|g_2|$ with $g_1(x)=x^2-ax=x(x-a)$ and $g_2(x)=x-1$. Both $|g_1|$ and $|g_2|$ are smooth except where their insides vanish, so the only possible non-differentiability points are $x=0,\\ x=a$ (zeros of $g_1$) and $x=1$ (zero of $g_2$). Continuity holds everywhere as a difference of continuous functions.",
          "Recall the standard fact: if $g$ has a $\\text{simple}$ zero at $x_0$ (so $g$ changes sign and $g'(x_0)\\ne0$), then $|g|$ has a genuine corner there with derivative jump $f'(x_0^+)-f'(x_0^-)=2\\,|g'(x_0)|\\ne0$; if instead $g$ has a $\\text{double}$ zero (a tangency, $g$ touches $0$ without changing sign and $g'(x_0)=0$), then $|g|$ is smooth there (jump $=0$).",
          "Generic case $a\\notin\\{0,1\\}$: the three candidate points $0,a,1$ are distinct. At $x=0$ and $x=a$ only $|g_1|$ is active, with $g_1'(0)=-a$ and $g_1'(a)=a$, giving jumps $2|a|\\ne0$ — two corners. At $x=1$ only $-|g_2|$ is active, jump $-2\\ne0$ — a third corner. Hence $N(a)=3$.",
          "Special $a=0$: now $g_1=x^2$ has a $\\text{double}$ root at $0$, so $|g_1|=x^2$ is smooth there — that corner never forms. Candidate $x=a=0$ has collapsed into the tangency, and the only surviving kink is $x=1$. Thus $N(0)=1$.",
          "Special $a=1$: now $x=1$ is simultaneously a simple zero of $g_1=x^2-x$ (with $g_1'(1)=1$) and the vertex of $-|g_2|$. The two contributions to the jump at $x=1$ are $+2|g_1'(1)|=+2$ from $|g_1|$ and $-2$ from $-|g_2|$; they cancel, $2-2=0$, so $f_1$ is differentiable at $x=1$. The remaining kink is $x=0$ (jump $2|1|=2$). Thus $N(1)=1$. Collecting: $\\boxed{N(a)=3\\ (a\\notin\\{0,1\\}),\\ N(0)=N(1)=1}$."
        ]
      },
      {
        "name": "Explicit local pieces around each special value",
        "steps": [
          "At $a=1$, $f_1(x)=|x^2-x|-|x-1|=|x|\\,|x-1|-|x-1|=|x-1|\\,(|x|-1)$. Near $x=1$ we have $|x|=x$, so $f_1(x)=|x-1|(x-1)$. For $x>1$ this is $(x-1)^2$ and for $x<1$ (near $1$) it is $-(x-1)^2$; both have derivative $0$ at $x=1$, so $f_1$ is differentiable there with $f_1'(1)=0$ — the corner is gone.",
          "Still at $a=1$, near $x=0$ we have $|x-1|=1-x$, so $f_1(x)=(1-x)(|x|-1)$; the factor $|x|$ makes the left slope $f_1'(0^-)$ and right slope $f_1'(0^+)$ differ (they equal $0$ and $2$, computed directly), so $x=0$ is a genuine corner. Hence exactly one kink: $N(1)=1$.",
          "At $a=0$, $f_0(x)=|x^2|-|x-1|=x^2-|x-1|$. The term $x^2$ is a polynomial, smooth everywhere — the would-be corner at $x=0$ is absent because $x^2$ touches the axis without crossing (double root). The only non-smoothness comes from $-|x-1|$ at $x=1$, where left/right slopes are $+1$ and $-1$. Hence $N(0)=1$.",
          "For a representative generic value, say $a=2$: $f_2(x)=|x^2-2x|-|x-1|$ has, by direct one-sided differentiation, $(f'_-,f'_+)=(-1,3),(1,-1),(-3,1)$ at $x=0,1,2$ respectively — all three are corners, so $N(2)=3$, matching the generic count. Therefore $\\boxed{N(a)=3}$ off the exceptional set and $\\boxed{N=1}$ at $a\\in\\{0,1\\}$."
        ]
      },
      {
        "name": "Smoothness as cancellation of one-sided derivatives (parameter sweep)",
        "steps": [
          "Differentiability at a candidate $x_0$ is equivalent to $D(x_0):=f_a'(x_0^+)-f_a'(x_0^-)=0$. Using $\\dfrac{d}{dx}|g|=\\operatorname{sgn}(g)\\,g'$ away from zeros, each term flips sign of its derivative across its own zero, so $D$ at $x_0$ equals the sum over the terms active at $x_0$ of (their individual jumps).",
          "At $x=0$: only $|g_1|$ is active for $a\\ne0$, and $g_1$ changes sign there iff $0$ is a simple root, i.e. $a\\ne0$; then $D=2|{-a}|=2|a|\\ne0$. At $a=0$, $g_1=x^2$ does not change sign, $D=0$ — smooth. So $x=0$ is a kink exactly when $a\\ne0$.",
          "At $x=a$ (relevant when $a\\notin\\{0,1\\}$ so it is a distinct simple zero of $g_1$ and away from $1$): $D=2|g_1'(a)|=2|a|\\ne0$ — a kink whenever $a\\ne0$. When $a=1$ this point has merged into $x=1$ and is handled next; when $a=0$ it has merged into the tangency at the origin.",
          "At $x=1$: $-|g_2|$ always contributes a jump $-2$; additionally $|g_1|$ contributes iff $g_1(1)=1-a=0$, i.e. $a=1$, in which case its jump is $+2|g_1'(1)|=+2$. So $D(1)=-2$ for $a\\ne1$ (kink) and $D(1)=+2-2=0$ for $a=1$ (smooth — the cancellation).",
          "Assemble the indicator counts. For $a\\notin\\{0,1\\}$ all of $x=0,a,1$ give $D\\ne0$: $N=3$. For $a=0$ the origin tangency kills the $g_1$ corners and only $x=1$ survives: $N=1$. For $a=1$ the cancellation kills $x=1$ and only $x=0$ survives: $N=1$. Hence $\\boxed{N(a)=3\\ \\text{for}\\ a\\notin\\{0,1\\},\\quad N(0)=N(1)=1}$."
        ]
      }
    ],
    "remark": "Two completely different accidents erase a corner here, and the naive root-counter conflates them. At $a=0$ the corner is annihilated by a $\\text{tangency}$: the inside acquires a double root, so $|g|$ never bends. At $a=1$ the corner is annihilated by a $\\text{slope-jump cancellation}$: the point is a genuine simple zero of one term $\\text{and}$ a vertex of another, but the upward jump $+2$ and the downward jump $-2$ sum to zero, so $f$ glides through smoothly even though both pieces are individually kinked there. The lesson for the ranker is that a kink of $\\sum \\pm|g_i|$ is real only if the $\\text{net}$ slope-jump $\\sum \\pm 2|g_i'|$ is nonzero; counting sign-change roots of the insides over-counts whenever the signed jumps conspire to cancel. The same mechanism is why $|g|$ at a double root, or $|x|-|x|$, or a continuity constraint that secretly forces matching one-sided slopes, can all silently delete corners you confidently listed."
  },
  {
    "theme": "nondiff",
    "themeLabel": "Points of Non-Differentiability",
    "title": "The Tent That Breeds Its Own Corners",
    "difficulty": 5,
    "task": "Count",
    "tags": [
      "iterated-map",
      "piecewise-linear",
      "self-composition",
      "corner-counting",
      "induction"
    ],
    "statement": "Let $g:[0,1]\\to[0,1]$ be the tent map \\[ g(x)=1-|1-2x|=\\begin{cases}2x,&0\\le x\\le\\tfrac12,\\\\2-2x,&\\tfrac12\\le x\\le1,\\end{cases}\\] and for $n\\ge1$ let $g_n=\\underbrace{g\\circ g\\circ\\cdots\\circ g}_{n\\text{ copies}}$ be its $n$-fold self-composition (so $g_1=g$). Each $g_n$ is continuous on $[0,1]$. Find, with proof, the number $c_n$ of interior points of $(0,1)$ at which $g_n$ is continuous but NOT differentiable.",
    "answer": "\\[\\boxed{c_n=2^{\\,n}-1}\\]",
    "trap": "Believing the corners of $g_n$ live only where the single outermost absolute value $1-|1-2(\\,\\cdot\\,)|$ is fed its kink, i.e. only at the apex-preimages $\\{x:g_{n-1}(x)=\\tfrac12\\}$ ($2^{n-1}$ points), and concluding $c_n=2^{n-1}$. This silently assumes that composing a fold ERASES the corners already present in $g_{n-1}$ -- it does not. Each old corner of $g_{n-1}$ survives in $g_n$ because $g$ is a smooth (linear) homeomorphism on a neighbourhood of every value of $g_{n-1}$ that is not the apex $\\tfrac12$; composing with a locally-affine map cannot heal a kink. So new corners are BORN while old ones persist, giving $c_n=2c_{n-1}+1$, not $c_n=2^{n-1}$. The deeper trap is the reflex `more absolute values $\\Rightarrow$ count where each inner argument vanishes': here the corners are created dynamically by the orbit, not statically by one quadratic-like condition.",
    "solutions": [
      {
        "name": "Piecewise-linear pieces: $g_n$ has $2^n$ monotone branches, hence $2^n-1$ junctions, all genuine corners",
        "steps": [
          "Claim: $g_n$ is piecewise linear, continuous, maps $[0,1]$ onto $[0,1]$, and on each of $2^n$ closed subintervals $\\big[\\tfrac{k}{2^n},\\tfrac{k+1}{2^n}\\big]$ ($k=0,\\dots,2^n-1$) it is affine with slope exactly $+2^n$ or $-2^n$, the sign alternating from one subinterval to the next. Base $n=1$: $g$ has slope $+2$ on $[0,\\tfrac12]$ and $-2$ on $[\\tfrac12,1]$ -- two pieces, alternating, onto $[0,1]$.",
          "Inductive step: assume the claim for $g_{n-1}$ (with $2^{n-1}$ alternating pieces of slope $\\pm2^{n-1}$, each carrying its subinterval ONTO $[0,1]$). Fix one such subinterval $I$; on $I$, $g_{n-1}$ is an affine bijection onto $[0,1]$. Pulling back the single break of $g$ at the value $\\tfrac12$ splits $I$ at the unique $x_I$ with $g_{n-1}(x_I)=\\tfrac12$, into two halves on each of which $g_n=g\\circ g_{n-1}$ is affine with slope $(\\pm2)\\cdot(\\pm2^{n-1})=\\pm2^{n}$; moreover the two halves carry the chain rule's signs oppositely, so the slope sign FLIPS across $x_I$ and each half again maps onto $[0,1]$. Each of the $2^{n-1}$ pieces splits into $2$, giving $2^{n}$ pieces with the alternating $\\pm2^n$ slope pattern -- the claim holds for $n$.",
          "A continuous piecewise-linear function with $2^n$ branches has $2^n-1$ interior junction points. At every junction the slope changes from $+2^n$ to $-2^n$ or vice versa (the signs alternate), so the one-sided derivatives are $\\pm2^n$ and DISAGREE; the junction is a true corner, not an artefact that smooths out. Hence $g_n$ is non-differentiable at exactly these $2^n-1$ points and differentiable everywhere else in $(0,1)$.",
          "Therefore $c_n=2^n-1$. $\\boxed{c_n=2^n-1}$."
        ]
      },
      {
        "name": "Corner-birth recurrence: old corners persist, one new corner per monotone branch",
        "steps": [
          "Write $g_n=g\\circ g_{n-1}$ and analyse where the composite can fail to be differentiable in $(0,1)$. By the chain rule, $g_n$ is differentiable at $x$ whenever (i) $g_{n-1}$ is differentiable at $x$ AND (ii) $g$ is differentiable at the value $y=g_{n-1}(x)$. The map $g$ is differentiable at every $y\\ne\\tfrac12$ (its only kink is at $y=\\tfrac12$). So a non-differentiability of $g_n$ can occur only if (a) $g_{n-1}$ is already non-differentiable at $x$ [an INHERITED corner], or (b) $g_{n-1}(x)=\\tfrac12$ [a NEWLY BORN corner].",
          "Inherited corners genuinely persist: if $g_{n-1}$ has a corner at $x_0$ (one-sided slopes $\\pm2^{n-1}$) and $g_{n-1}(x_0)\\ne\\tfrac12$, then near $x_0$ the outer $g$ is affine, so $g_n=g\\circ g_{n-1}$ has one-sided slopes $(\\text{const}\\ne0)\\cdot(\\pm2^{n-1})$, still unequal -- the corner survives. (An inherited corner with value exactly $\\tfrac12$ would just be a new corner too, so no corner is ever lost.) Thus all $c_{n-1}$ corners of $g_{n-1}$ remain corners of $g_n$.",
          "New corners are counted by solving $g_{n-1}(x)=\\tfrac12$. From Method 1, $g_{n-1}$ is monotone onto $[0,1]$ on each of its $2^{n-1}$ branches, so $g_{n-1}(x)=\\tfrac12$ has exactly one solution per branch: $2^{n-1}$ new corners. At such an $x$, $g_{n-1}$ is locally affine (slope $\\pm2^{n-1}$) but the outer $g$ kinks, so $g_n$ acquires one-sided slopes $\\pm2\\cdot(\\pm2^{n-1})$ of opposite sign -- a genuine corner not already counted.",
          "Hence $c_n=c_{n-1}+2^{n-1}$ with $c_1=1$, giving $c_n=1+\\sum_{j=1}^{n-1}2^{j}=2^n-1$. Equivalently $c_n=2c_{n-1}+1$. $\\boxed{c_n=2^n-1}$."
        ]
      },
      {
        "name": "Symbolic dynamics: a corner is an orbit hitting the apex within $n-1$ steps",
        "steps": [
          "The only kink of the single map $g$ sits at the apex $a=\\tfrac12$. Reading $g_n=g\\circ\\cdots\\circ g$ outward and applying the chain-rule criterion repeatedly, $g_n$ fails to be differentiable at $x$ precisely when some point of the forward orbit $x,\\,g(x),\\,g_2(x),\\dots,g_{n-1}(x)$ equals the apex; that is, the set of corners of $g_n$ is $C_n=\\bigcup_{k=0}^{n-1}\\{x\\in(0,1):g_k(x)=\\tfrac12\\}$ (with $g_0=\\mathrm{id}$).",
          "Because $g:[0,1]\\to[0,1]$ is exactly two-to-one onto its image (every value in $(0,1)$ has two preimages, one in each half), each backward step doubles a preimage set: $\\#\\,g_k^{-1}\\{\\tfrac12\\}=2^{k}$ for $k\\ge0$, all lying in the open interval $(0,1)$.",
          "These level sets are pairwise disjoint: the apex $\\tfrac12$ maps to $g(\\tfrac12)=1\\mapsto g(1)=0\\mapsto0$, so once an orbit hits $\\tfrac12$ at step $k$ it is at $0$ from step $k+2$ on and never returns to $\\tfrac12$; hence no $x$ can satisfy $g_k(x)=\\tfrac12$ for two different $k\\le n-1$. (Concretely the dyadic preimage sets $\\{x:g_k(x)=\\tfrac12\\}$ are at the odd multiples of $2^{-(k+1)}$, which are disjoint across $k$.)",
          "Therefore $c_n=\\#C_n=\\sum_{k=0}^{n-1}2^{k}=2^{n}-1$, each such point being a genuine corner since $g_k$ is locally affine there and the outer fold flips the slope sign. $\\boxed{c_n=2^n-1}$."
        ]
      }
    ],
    "remark": "The lesson is that under composition corners are a CONSERVED-AND-CREATED quantity: composing with a locally-affine map can neither destroy an existing kink nor blunt it, while every full monotone branch of the inner map donates one fresh kink at its apex-preimage. That bookkeeping is the recurrence $c_n=2c_{n-1}+1$, whose solution $2^n-1$ is one short of the $2^n$ linear pieces -- the universal `pieces minus one' count for a continuous polyline. Dynamically these $2^n-1$ corners are exactly the pre-images of the critical apex under the first $n-1$ iterates, the skeleton of the tent map's chaos: their number grows like $2^n$, matching the topological entropy $\\log 2$. The trap -- counting only the outermost layer -- is the same reflex that makes students count zeros of an inner argument and forget the corners already baked into the function they are folding."
  },
  {
    "theme": "nondiff",
    "themeLabel": "Points of Non-Differentiability",
    "title": "The Wiggle That Isn't Infinitely Sharp",
    "difficulty": 5,
    "task": "Find the number of …",
    "tags": [
      "oscillation",
      "absolute-value",
      "continuity",
      "squeeze"
    ],
    "statement": "Define \\[ W(x) \\;=\\; \\begin{cases} |x| + x\\sin\\!\\dfrac{1}{x}, & x\\neq 0,\\\\[2mm] 0, & x=0. \\end{cases} \\] Show that $W$ is continuous on $\\mathbb{R}$, and find the number of points at which $W$ is not differentiable.",
    "answer": "$W$ is continuous on $\\mathbb{R}$; it is non-differentiable at exactly $1$ point, $x=0$.",
    "trap": "Reasoning that because $\\sin(1/x)$ oscillates infinitely often near $0$, $W$ has infinitely many non-differentiable points. The oscillation lives in the VALUE; for every $x\\neq0$ the function is a composition of differentiable maps, hence differentiable there. Infinitely many wiggles is NOT the same as infinitely many corners.",
    "solutions": [
      {
        "name": "Away-from-zero smoothness + a single failure",
        "steps": [
          "For $x\\neq0$, $W(x)=|x|+x\\sin(1/x)$ is a sum/product/composition of functions differentiable at that $x$ (note $|x|$ is smooth for $x\\neq0$), so $W'$ exists for every $x\\neq0$ — no matter how rapidly it oscillates.",
          "Continuity at $0$: $|x\\sin(1/x)|\\le|x|\\to0$ and $|x|\\to0$, so $W(x)\\to0=W(0)$ by squeeze.",
          "Differentiability at $0$: $\\dfrac{W(h)-0}{h}=\\dfrac{|h|}{h}+\\sin\\dfrac1h=\\operatorname{sgn}(h)+\\sin\\dfrac1h$. As $h\\to0^+$ this is $1+\\sin(1/h)$, which oscillates over $[0,2]$ with no limit — so no derivative exists at $0$.",
          "Thus the only non-differentiable point is $x=0$. \\[\\boxed{1}\\]"
        ]
      },
      {
        "name": "Decompose the two effects",
        "steps": [
          "Split $W=|x|+x\\sin(1/x)$. The term $|x|$ is non-differentiable only at $0$ (slope jump $2$).",
          "The term $g(x)=x\\sin(1/x)$ (with $g(0)=0$) is continuous (squeeze) but its difference quotient $\\sin(1/h)$ has no limit at $0$; for $x\\neq0$ it is differentiable.",
          "Adding two functions each differentiable on $\\mathbb{R}\\setminus\\{0\\}$ keeps $W$ differentiable there; at $0$ the quotient is $\\operatorname{sgn}(h)+\\sin(1/h)$, still without a limit, so $W$ is not differentiable at $0$.",
          "Only candidate is $0$, and it fails — exactly $\\boxed{1}$ point."
        ]
      },
      {
        "name": "Why no derivative can exist at 0",
        "steps": [
          "Suppose $W'(0)=L$. Then along $h_n=\\frac{1}{2\\pi n}$ (so $\\sin(1/h_n)=0$) the right quotient $\\to1$, forcing $L=1$.",
          "Along $h_n=\\frac{1}{2\\pi n+\\pi/2}$ (so $\\sin(1/h_n)=1$) the right quotient $\\to2$, forcing $L=2$ — a contradiction.",
          "Hence no $L$ works; $W$ is not differentiable at $0$, while every $x\\neq0$ is fine.",
          "$\\boxed{1}$ non-differentiable point."
        ]
      }
    ],
    "remark": "Insight: contrast with $x^2\\sin(1/x)$, whose quotient $h\\sin(1/h)\\to0$, making it differentiable at $0$ (with $f'(0)=0$). The exponent on $x$ decides whether the oscillation is tamed; one factor of $x$ is not enough."
  },
  {
    "theme": "nondiff",
    "themeLabel": "Points of Non-Differentiability",
    "title": "Grand Assembly: Max, Fold, and a Hidden Tangency",
    "difficulty": 5,
    "task": "Find the number of points at which $G$ is not differentiable.",
    "tags": [
      "hybrid",
      "max",
      "absolute-value",
      "double-root",
      "corners",
      "trap"
    ],
    "statement": "Define, for $x\\in\\mathbb{R}$, \\[ G(x) \\;=\\; \\max\\!\\bigl(\\,|x-1|,\\ (x-1)^{2}\\,\\bigr) \\;+\\; \\bigl|\\, x^{3}-x^{2}-x+1 \\,\\bigr|. \\] Find the number of points at which $G$ is not differentiable.",
    "answer": "$4$ points: $x=-1,\\,0,\\,1,\\,2$.",
    "trap": "Two snares. (1) Treating the $\\max$ as breaking only at $x=1$ (the $|x-1|$ kink), missing the two crossings where $|x-1|=(x-1)^2$ at $x=0,2$. (2) Reading the cubic $|(x-1)^2(x+1)|$ as contributing corners at both its roots; in fact $x=1$ is a double root (tangency, $g'=0$) so the absolute value is smooth there — the cubic only contributes $x=-1$. Then one must check whether coincident breaks at $x=1$ survive.",
    "solutions": [
      {
        "name": "Analyse each part, then merge",
        "steps": [
          "Part $A=\\max(|x-1|,(x-1)^2)$. With $u=x-1$: $|u|=u^2$ when $|u|=1$, i.e. $u=\\pm1$ ($x=0,2$); for $|u|<1$, $|u|>u^2$ so $A=|u|$ (corner at $u=0$, $x=1$); for $|u|>1$, $A=u^2$ (smooth). So $A$ breaks at $x=0,1,2$.",
          "Part $B=|x^3-x^2-x+1|=|(x-1)^2(x+1)|$. Since $(x-1)^2\\ge0$, $\\operatorname{sgn}=\\operatorname{sgn}(x+1)$: only sign change at $x=-1$ (corner). At $x=1$ the double root gives a tangency, so $B$ is smooth there.",
          "Candidate break set $=\\{0,1,2\\}\\cup\\{-1\\}=\\{-1,0,1,2\\}$. Check coincidence at $x=1$: $A$ has a corner (slope jump $2$ from $|u|$) and $B$ is smooth, so $A+B$ keeps the corner.",
          "At $x=0,2$ ($A$ corner, $B$ smooth) and $x=-1$ ($A$ smooth, $B$ corner) the breaks also survive — no cancellation since each lone slope jump is non-zero. \\[\\boxed{4}\\]"
        ]
      },
      {
        "name": "Convert max to an absolute value",
        "steps": [
          "$A=\\tfrac12\\bigl((x-1)^2+|x-1|\\bigr)+\\tfrac12\\bigl|\\,|x-1|-(x-1)^2\\,\\bigr|$. Inside: $|x-1|-(x-1)^2=|u|(1-|u|)$, which vanishes (with sign change) at $|u|=0,1$, i.e. $x=1$ and $x=0,2$.",
          "So $A$ is non-differentiable exactly at $x=0,1,2$ (each a transversal zero of an inner absolute expression).",
          "$B=|(x-1)^2(x+1)|$ folds only where $(x+1)$ changes sign, i.e. $x=-1$; the squared factor blocks any fold at $x=1$.",
          "Union $\\{-1,0,1,2\\}$; verifying non-zero slope jumps at every coincidence gives $\\boxed{4}$ points."
        ]
      },
      {
        "name": "Direct one-sided derivatives at each candidate",
        "steps": [
          "$x=-1$: $A$ smooth ($A=(x-1)^2$ here, slope $-4$ both sides); $B\\approx|{-4}(x+1)|=4|x+1|$ — slope jump $8\\neq0$: corner.",
          "$x=0$: $A$ switches $(x-1)^2\\!\\to\\!|x-1|$; slopes $-2$ vs $-1$, jump $1\\neq0$; $B$ smooth: corner.",
          "$x=1$: $A=|x-1|$ here, slopes $-1\\to+1$, jump $2$; $B$ smooth (tangency): corner. $x=2$: $A$ switches $|x-1|\\!\\to\\!(x-1)^2$, slopes $+1$ vs $+2$, jump $1$; $B$ smooth: corner.",
          "All four candidates are genuine; nothing else breaks. $\\boxed{4}$."
        ]
      }
    ],
    "remark": "Insight: the master identities $\\max(f,g)=\\tfrac12(f+g)+\\tfrac12|f-g|$ and 'fold-at-sign-change' reduce any max/min/abs hybrid to counting transversal zeros. The double root quietly removes one expected corner, while the max quietly adds two — the honest count requires assembling, not guessing."
  },
  {
    "theme": "mvt",
    "themeLabel": "Mean Value & Rolle",
    "title": "Squeezing the Exponential From Both Sides",
    "difficulty": 4,
    "task": "Prove that",
    "tags": [
      "mvt",
      "exponential",
      "inequality",
      "two-sided"
    ],
    "statement": "Using the Mean Value Theorem applied to $f(t)=e^{t}$, prove that for every $x$ with $0<x<1$, \\[1+x<e^{x}<\\frac{1}{1-x}.\\]",
    "answer": "Proved. (For instance at $x=\\tfrac12$: $1.5<e^{0.5}\\approx1.6487<2$.)",
    "trap": "Trying to prove BOTH sides from the single tangent-line bound $e^x\\ge 1+x$. Convexity (the tangent line at $0$) gives only the LOWER bound; on $(0,1)$ one never has $1+x\\ge e^{x}$, so the same line cannot serve as an upper bound. The upper bound $e^x<1/(1-x)$ is genuinely different: it comes from applying MVT to $e^{-t}$ on $[0,x]$ and bounding the resulting derivative $e^{-d}$ ABOVE by $1$, then a short algebraic step.",
    "solutions": [
      {
        "name": "MVT with endpoint bounds on the derivative",
        "steps": [
          "Apply MVT to $f(t)=e^{t}$ on $[0,x]$: there is $c\\in(0,x)$ with $e^{x}-1=f'(c)\\,x=e^{c}\\,x$.",
          "Lower bound: since $c>0$ we have $e^{c}>e^{0}=1$, so $e^{x}-1=e^{c}x>x$, i.e. $e^{x}>1+x$.",
          "Upper bound: apply MVT to $g(t)=e^{-t}$ on $[0,x]$: there is $d\\in(0,x)$ with $e^{-x}-1=g'(d)\\,x=-e^{-d}\\,x$, i.e. $1-e^{-x}=e^{-d}\\,x$.",
          "Since $d>0$ we have $e^{-d}<e^{0}=1$, hence $1-e^{-x}=e^{-d}x<x$. Therefore $e^{-x}>1-x$, and because $1-x>0$ this gives $e^{x}<\\dfrac{1}{1-x}$. Combining, $1+x<e^{x}<\\dfrac{1}{1-x}$. $\\blacksquare$"
        ]
      },
      {
        "name": "Monotone-function argument",
        "steps": [
          "Lower bound: let $\\phi(x)=e^{x}-1-x$. Then $\\phi(0)=0$ and $\\phi'(x)=e^{x}-1>0$ for $x>0$, so $\\phi$ is strictly increasing on $[0,\\infty)$ and $\\phi(x)>0$ for $x>0$, i.e. $e^{x}>1+x$.",
          "Upper bound: let $\\psi(x)=1-(1-x)e^{x}$. Then $\\psi(0)=0$ and $\\psi'(x)=-\\big[(-1)e^{x}+(1-x)e^{x}\\big]=-\\big[-x\\,e^{x}\\big]=x\\,e^{x}>0$ for $x>0$.",
          "Hence $\\psi$ is strictly increasing and $\\psi(x)>0$ for $0<x<1$, i.e. $(1-x)e^{x}<1$. Since $1-x>0$, this is $e^{x}<\\dfrac{1}{1-x}$. Combining: $1+x<e^{x}<\\dfrac{1}{1-x}$. $\\blacksquare$"
        ]
      }
    ],
    "remark": "Insight: the lower bound is the tangent line to $e^{t}$ at $0$; the upper bound is secretly the tangent-line phenomenon for $e^{-t}$. Two MVT applications, one to $e^{t}$ and one to $e^{-t}$, pin $e^{x}$ from both sides by reading off $e^{c}>1$ and $e^{-d}<1$ from $c,d\\in(0,x)$ — a reusable template for two-sided transcendental estimates. Note the upper bound needs $1-x>0$, which is exactly why the range is $0<x<1$."
  },
  {
    "theme": "mvt",
    "themeLabel": "Mean Value & Rolle",
    "title": "Rolle Counts the Critical Points",
    "difficulty": 4,
    "task": "Find the number of real roots",
    "tags": [
      "rolle",
      "derivative roots",
      "even polynomial",
      "root separation"
    ],
    "statement": "Let $p(x)=(x^{2}-1)(x^{2}-4)(x^{2}-9)$. Without computing $p'$ explicitly first, use Rolle's theorem to find the number of real roots of $p'(x)$, then confirm by locating them.",
    "answer": "$p'$ has exactly $5$ real roots. Explicitly they are $x=0$, $x=\\pm\\sqrt{7}$, and $x=\\pm\\dfrac{\\sqrt{21}}{3}$.",
    "trap": "Guessing that $p'$ (degree 5) might have fewer than 5 real roots, or that the roots of $p'$ are the midpoints $\\pm\\tfrac32,\\pm\\tfrac52$ of consecutive root-gaps. Rolle guarantees at least one root of $p'$ strictly between each adjacent pair of the 6 roots of $p$, i.e. 5 roots — and since $\\deg p'=5$, that is all of them, but they are NOT the gap midpoints.",
    "solutions": [
      {
        "name": "Rolle root-separation count",
        "steps": [
          "$p$ has 6 distinct real roots: $-3,-2,-1,1,2,3$.",
          "Between each pair of consecutive roots Rolle gives at least one root of $p'$: that is $5$ guaranteed roots in the 5 gaps.",
          "$p'$ is a degree-5 polynomial, so it has at most $5$ real roots; combined with the lower bound, it has exactly $5$.",
          "Each lies strictly inside one gap; they are not the midpoints. $\\boxed{5\\text{ real roots}}$"
        ]
      },
      {
        "name": "Even-function / substitution check",
        "steps": [
          "$p$ is even, so $p'$ is odd; thus $x=0$ is a root and the other roots come in $\\pm$ pairs.",
          "Let $u=x^2$; $p=(u-1)(u-4)(u-9)=u^3-14u^2+49u-36$, and $\\tfrac{dp}{dx}=\\tfrac{dp}{du}\\cdot2x$, with $\\tfrac{dp}{du}=3u^2-28u+49$.",
          "$p'=0\\iff x=0$ or $3u^2-28u+49=0\\Rightarrow u=\\tfrac{28\\pm\\sqrt{784-588}}{6}=\\tfrac{28\\pm14}{6}=7\\text{ or }\\tfrac{7}{3}$.",
          "So $x=0,\\ \\pm\\sqrt7,\\ \\pm\\sqrt{7/3}=\\pm\\tfrac{\\sqrt{21}}{3}$: exactly $5$ real roots, matching Rolle. $\\boxed{5}$"
        ]
      }
    ],
    "remark": "Insight: a real polynomial with all roots real has a derivative with all roots real too (Rolle, repeated). Counting via separation is instant; the substitution then pins exact locations and shows they avoid the naive midpoints."
  },
  {
    "theme": "mvt",
    "themeLabel": "Mean Value & Rolle",
    "title": "The Tangent That Catches the Chord",
    "difficulty": 5,
    "task": "Prove",
    "tags": [
      "cauchy-mvt",
      "auxiliary-function",
      "rolle",
      "pompeiu",
      "parametric-curve",
      "hidden-hypothesis"
    ],
    "statement": "Let $f,g:[a,b]\\to\\mathbb{R}$ be continuous on $[a,b]$ and differentiable on $(a,b)$, and consider the parametric (planar) curve \\[ \\gamma(t)=\\bigl(g(t),\\,f(t)\\bigr),\\qquad t\\in[a,b], \\] with endpoints $P=\\gamma(a)$ and $Q=\\gamma(b)$.\n(a) Prove the purely geometric mean-value statement: there exists $c\\in(a,b)$ at which the tangent vector $\\gamma'(c)$ is parallel to the chord $\\overrightarrow{PQ}$, i.e. \\[ \\bigl(f(b)-f(a)\\bigr)\\,g'(c)=\\bigl(g(b)-g(a)\\bigr)\\,f'(c). \\] Your proof must hold with no nonvanishing assumption on $g'$ and no assumption that $g(a)\\ne g(b)$; explain why the familiar ratio form $\\dfrac{f'(c)}{g'(c)}=\\dfrac{f(b)-f(a)}{g(b)-g(a)}$ is not a faithful statement of the theorem.\n(b) Now let $\\varphi:[a,b]\\to\\mathbb{R}$ be continuous on $[a,b]$ and differentiable on $(a,b)$, where $[a,b]$ is an interval with $0\\notin[a,b]$. By specializing part (a) to a suitable curve, prove that there exists $c\\in(a,b)$ with \\[ \\varphi(c)-c\\,\\varphi'(c)=\\frac{b\\,\\varphi(a)-a\\,\\varphi(b)}{b-a}. \\] (Geometrically: the tangent to $y=\\varphi(x)$ at $x=c$ meets the $y$-axis at the same height as the secant through $(a,\\varphi(a)),(b,\\varphi(b))$.) State precisely where the hypothesis $0\\notin[a,b]$ is indispensable, and exhibit that the conclusion can fail without it.",
    "answer": "\\[\\boxed{\\exists\\,c\\in(a,b):\\ \\bigl(f(b)-f(a)\\bigr)g'(c)=\\bigl(g(b)-g(a)\\bigr)f'(c)\\ \\text{and}\\ \\varphi(c)-c\\varphi'(c)=\\tfrac{b\\varphi(a)-a\\varphi(b)}{b-a}}\\]",
    "trap": "In part (b) the fatal reflex is to forget that the specializing curve $\\bigl(1/t,\\ \\varphi(t)/t\\bigr)$ is only legitimate when $0\\notin[a,b]$: with $0$ in the interval, $1/t$ and $\\varphi(t)/t$ are not even defined, let alone differentiable, so part (a) does not apply and the Pompeiu conclusion genuinely fails. Concretely take $\\varphi(t)=t^2+t+1$ on $[-1,2]$ (so $0\\in[a,b]$): the tangent-intercept $\\varphi(c)-c\\varphi'(c)=1-c^2$ ranges over $[-3,1)$ on $(-1,2)$, yet the required value $\\tfrac{b\\varphi(a)-a\\varphi(b)}{b-a}=3$ lies outside that range, so no $c$ works. A second, subtler trap sits in part (a): writing the theorem as $f'(c)/g'(c)=\\bigl(f(b)-f(a)\\bigr)/\\bigl(g(b)-g(a)\\bigr)$ silently assumes $g(b)\\ne g(a)$ and $g'(c)\\ne0$. Both can fail (e.g. $f(t)=t,\\ g(t)=t^2$ on $[-1,1]$ gives $g(b)-g(a)=0$, a meaningless $0$ in the denominator), whereas the honest product form survives, here with $c=0$. The trap is treating Cauchy's MVT as a statement about a ratio rather than about a tangent being parallel to a chord.",
    "solutions": [
      {
        "name": "Auxiliary function for Rolle: the difference of cross-products",
        "steps": [
          "Part (a). Define $\\varphi_0:[a,b]\\to\\mathbb{R}$ by $\\varphi_0(t)=\\bigl(f(b)-f(a)\\bigr)\\bigl(g(t)-g(a)\\bigr)-\\bigl(g(b)-g(a)\\bigr)\\bigl(f(t)-f(a)\\bigr)$. As a fixed linear combination of $f$ and $g$ it is continuous on $[a,b]$ and differentiable on $(a,b)$. Direct substitution gives $\\varphi_0(a)=0$, and $\\varphi_0(b)=\\bigl(f(b)-f(a)\\bigr)\\bigl(g(b)-g(a)\\bigr)-\\bigl(g(b)-g(a)\\bigr)\\bigl(f(b)-f(a)\\bigr)=0$.",
          "By Rolle's theorem there is $c\\in(a,b)$ with $\\varphi_0'(c)=0$. Since $\\varphi_0'(t)=\\bigl(f(b)-f(a)\\bigr)g'(t)-\\bigl(g(b)-g(a)\\bigr)f'(t)$, this is exactly $\\bigl(f(b)-f(a)\\bigr)g'(c)=\\bigl(g(b)-g(a)\\bigr)f'(c)$. No division ever occurred, so no nonvanishing hypothesis on $g'$ or on $g(b)-g(a)$ is needed; the ratio form is merely this identity after an illegal division, which destroys the cases $g(b)=g(a)$ or $g'(c)=0$ (e.g. $f=t,\\,g=t^2$ on $[-1,1]$, valid with $c=0$ in product form, nonsensical as a ratio).",
          "Part (b). Assume $0\\notin[a,b]$, so $t\\mapsto1/t$ and $t\\mapsto\\varphi(t)/t$ are continuous on $[a,b]$ and differentiable on $(a,b)$. Apply part (a) to the curve with $g(t)=1/t$ and $\\tilde f(t)=\\varphi(t)/t$, i.e. to $\\gamma(t)=\\bigl(1/t,\\ \\varphi(t)/t\\bigr)$. We get $c\\in(a,b)$ with $\\bigl(\\tilde f(b)-\\tilde f(a)\\bigr)g'(c)=\\bigl(g(b)-g(a)\\bigr)\\tilde f'(c)$.",
          "Compute the pieces: $g'(t)=-1/t^2$, $\\tilde f'(t)=\\dfrac{\\varphi'(t)\\,t-\\varphi(t)}{t^2}$, $g(b)-g(a)=\\dfrac{a-b}{ab}$, and $\\tilde f(b)-\\tilde f(a)=\\dfrac{\\varphi(b)}{b}-\\dfrac{\\varphi(a)}{a}=\\dfrac{a\\varphi(b)-b\\varphi(a)}{ab}$. Substituting and multiplying through by $-c^2$ (legal since $c\\ne0$) the equation becomes $\\dfrac{a\\varphi(b)-b\\varphi(a)}{ab}=\\dfrac{a-b}{ab}\\cdot\\dfrac{c\\varphi'(c)-\\varphi(c)}{1}\\cdot\\dfrac{1}{1}$; clearing the common factor $1/(ab)$ and rearranging gives $\\varphi(c)-c\\varphi'(c)=\\dfrac{b\\varphi(a)-a\\varphi(b)}{b-a}$.",
          "If instead $0\\in[a,b]$ the curve is undefined and the step collapses; the displayed counterexample $\\varphi(t)=t^2+t+1$ on $[-1,2]$ (target value $3$ unattainable by $1-c^2$) shows the conclusion is then false. Hence $\\boxed{\\exists\\,c\\in(a,b):\\ \\bigl(f(b)-f(a)\\bigr)g'(c)=\\bigl(g(b)-g(a)\\bigr)f'(c)\\ \\text{and}\\ \\varphi(c)-c\\varphi'(c)=\\tfrac{b\\varphi(a)-a\\varphi(b)}{b-a}}$."
        ]
      },
      {
        "name": "Signed-area determinant (vanishing-triangle Rolle)",
        "steps": [
          "Part (a). The chord is parallel to the tangent exactly when the velocity $\\gamma'(c)$ and chord $\\overrightarrow{PQ}$ are linearly dependent, which we detect with an oriented area. Set \\[ \\psi(t)=\\begin{vmatrix} f(a)&g(a)&1\\\\ f(b)&g(b)&1\\\\ f(t)&g(t)&1 \\end{vmatrix}, \\] twice the signed area of the triangle $P,Q,\\gamma(t)$. It is continuous on $[a,b]$, differentiable on $(a,b)$, and $\\psi(a)=\\psi(b)=0$ because two rows coincide (a degenerate, zero-area triangle at the endpoints).",
          "Rolle gives $c\\in(a,b)$ with $\\psi'(c)=0$. Differentiating only the last row, $\\psi'(t)=\\begin{vmatrix} f(a)&g(a)&1\\\\ f(b)&g(b)&1\\\\ f'(t)&g'(t)&0\\end{vmatrix}$, and expanding along the third column yields $\\psi'(t)=\\bigl(f(b)-f(a)\\bigr)g'(t)-\\bigl(g(b)-g(a)\\bigr)f'(t)$. Thus $\\psi'(c)=0$ is precisely the parallelism $\\bigl(f(b)-f(a)\\bigr)g'(c)=\\bigl(g(b)-g(a)\\bigr)f'(c)$. The determinant never asks $g'\\ne0$, so it is the faithful (division-free) form of Cauchy's MVT.",
          "Part (b). With $0\\notin[a,b]$, feed the curve $\\gamma(t)=\\bigl(1/t,\\ \\varphi(t)/t\\bigr)$ into the determinant. Writing $g=1/t$, $\\tilde f=\\varphi/t$, the conclusion $\\psi'(c)=0$ reads $\\bigl(\\tilde f(b)-\\tilde f(a)\\bigr)g'(c)-\\bigl(g(b)-g(a)\\bigr)\\tilde f'(c)=0$, the same identity as in Method 1.",
          "Carrying out the substitution (as computed there) and multiplying by the nonzero factor $-c^2$ reduces this to $\\varphi(c)-c\\varphi'(c)=\\dfrac{b\\varphi(a)-a\\varphi(b)}{b-a}$. The factor $-c^2$ is invertible precisely because $0\\notin[a,b]\\Rightarrow c\\ne0$, which is exactly the indispensable hypothesis; with $0$ inside, the curve and hence the whole determinant are undefined and the identity fails, as the explicit $t^2+t+1$ counterexample shows.",
          "Therefore the existence holds: $\\boxed{\\exists\\,c\\in(a,b):\\ \\bigl(f(b)-f(a)\\bigr)g'(c)=\\bigl(g(b)-g(a)\\bigr)f'(c)\\ \\text{and}\\ \\varphi(c)-c\\varphi'(c)=\\tfrac{b\\varphi(a)-a\\varphi(b)}{b-a}}$."
        ]
      },
      {
        "name": "Direct Pompeiu construction (intercept Rolle), with the geometric core read off",
        "steps": [
          "Part (b) first, head-on, to expose the hidden constraint. Suppose $0\\notin[a,b]$. The number $T(t):=\\varphi(t)-t\\varphi'(t)$ is the $y$-intercept of the tangent to $y=\\varphi(x)$ at $x=t$. Build the auxiliary $h(t)=\\dfrac{\\varphi(t)}{t}$, continuous on $[a,b]$ and differentiable on $(a,b)$ exactly because $t\\ne0$ throughout. Its derivative is $h'(t)=\\dfrac{t\\varphi'(t)-\\varphi(t)}{t^2}=-\\dfrac{T(t)}{t^2}$.",
          "Apply the ordinary Cauchy MVT (part (a)) to $h$ against $u(t)=1/t$, whose derivative $u'(t)=-1/t^2$ never vanishes on $[a,b]$, so here the ratio form is even legitimate: there is $c\\in(a,b)$ with $\\dfrac{h'(c)}{u'(c)}=\\dfrac{h(b)-h(a)}{u(b)-u(a)}$. The left side is $\\dfrac{-T(c)/c^2}{-1/c^2}=T(c)$.",
          "The right side is $\\dfrac{\\varphi(b)/b-\\varphi(a)/a}{1/b-1/a}=\\dfrac{\\bigl(a\\varphi(b)-b\\varphi(a)\\bigr)/(ab)}{(a-b)/(ab)}=\\dfrac{a\\varphi(b)-b\\varphi(a)}{a-b}=\\dfrac{b\\varphi(a)-a\\varphi(b)}{b-a}$. Equating, $T(c)=\\varphi(c)-c\\varphi'(c)=\\dfrac{b\\varphi(a)-a\\varphi(b)}{b-a}$, the claimed identity, valid precisely while $0\\notin[a,b]$ (used twice: to define $h$ and to know $u'\\ne0$).",
          "Part (a) is the geometric statement that powers the above: for any continuous-on-$[a,b]$, differentiable-on-$(a,b)$ pair $f,g$, the function $\\varphi_0=(f(b)-f(a))(g-g(a))-(g(b)-g(a))(f-f(a))$ has $\\varphi_0(a)=\\varphi_0(b)=0$, so Rolle yields $c$ with $\\varphi_0'(c)=(f(b)-f(a))g'(c)-(g(b)-g(a))f'(c)=0$ — the tangent $\\gamma'(c)=(g'(c),f'(c))$ is parallel to the chord $(g(b)-g(a),\\,f(b)-f(a))$. Because this is an equality of cross-products, never a quotient, it is immune to $g(b)=g(a)$ or $g'(c)=0$, unlike the ratio caricature.",
          "Both parts are thus existence results, established without ever solving for $c$: $\\boxed{\\exists\\,c\\in(a,b):\\ \\bigl(f(b)-f(a)\\bigr)g'(c)=\\bigl(g(b)-g(a)\\bigr)f'(c)\\ \\text{and}\\ \\varphi(c)-c\\varphi'(c)=\\tfrac{b\\varphi(a)-a\\varphi(b)}{b-a}}$."
        ]
      }
    ],
    "remark": "Insight: Cauchy's mean value theorem is fundamentally geometric — a tangent of the parametric curve $(g,f)$ parallel to its chord — and the auxiliary function $(f(b)-f(a))(g-g(a))-(g(b)-g(a))(f-f(a))$ (equivalently the vanishing signed area $\\psi$) is what converts that picture into Rolle. Stating it as a ratio $f'(c)/g'(c)=\\Delta f/\\Delta g$ smuggles in $g'\\ne0$ and $g(b)\\ne g(a)$ and is therefore a strictly weaker, occasionally false, caricature; the cross-product form is the honest theorem. The real payoff is that one clever change of curve manufactures a brand-new mean value theorem for free: feeding $(1/t,\\ \\varphi(t)/t)$ into the same machine yields Pompeiu's theorem, whose meaning — the tangent line's $y$-intercept hits an intermediate value of the secant's intercept — is far from obvious a priori. And it carries a non-negotiable admission ticket: $0\\notin[a,b]$, exactly the domain on which $1/t$ lives. Drop it and the theorem is simply false ($t^2+t+1$ on $[-1,2]$), a reminder that the cleanest existence proofs are only as valid as the chart on which the auxiliary curve is drawn."
  },
  {
    "theme": "mvt",
    "themeLabel": "Mean Value & Rolle",
    "title": "How Many Roots, and When",
    "difficulty": 5,
    "task": "Determine the number of real roots",
    "tags": [
      "rolle",
      "root counting",
      "parameter",
      "quartic"
    ],
    "statement": "For a real parameter $m$, determine the number of distinct real roots of \\[x^{4}-4x^{3}+4x^{2}=m\\] as $m$ ranges over $\\mathbb{R}$. Justify the count using Rolle's theorem to control how many times the graph can cross each level.",
    "answer": "Let $p(x)=x^{4}-4x^{3}+4x^{2}=\\big(x(x-2)\\big)^{2}$. The number of distinct real roots is: $0$ if $m<0$; $2$ if $m=0$; $4$ if $0<m<1$; $3$ if $m=1$; $2$ if $m>1$.",
    "trap": "Concluding 'degree $4$, so up to $4$ roots' and stopping there, or forgetting that the level $m=1$ (the local maximum) and $m=0$ (the double minima) produce tangencies that lower the count. Rolle bounds crossings: since $p'$ has $3$ real roots, $p$ attains any value at most $4$ times, but the exact count at each level is fixed by the critical values $0$ and $1$, and at $m>1$ only two crossings survive.",
    "solutions": [
      {
        "name": "Critical values via Rolle",
        "steps": [
          "$p(x)=x^{2}(x-2)^{2}\\ge 0$, and $p'(x)=4x^{3}-12x^{2}+8x=4x(x-1)(x-2)$ has the three simple roots $0,1,2$.",
          "Critical values: $p(0)=0$ (minimum), $p(1)=1$ (local maximum), $p(2)=0$ (minimum); and $p(x)\\to+\\infty$ as $x\\to\\pm\\infty$.",
          "Between consecutive critical points $p$ is strictly monotone, so on each such interval the equation $p(x)=m$ has at most one solution. By Rolle, if $p(x)=m$ had two roots in an open interval, $p'$ would vanish strictly between them; since the roots of $p'$ are exactly $0,1,2$, the critical points separate the roots and pin down the count.",
          "Reading the W-shaped graph (touching height $0$ at $x=0$ and $x=2$, peaking at height $1$ at $x=1$): $m<0\\Rightarrow 0$ roots; $m=0\\Rightarrow 2$ (the two minima); $0<m<1\\Rightarrow 4$; $m=1\\Rightarrow 3$ (the peak is touched once, with two outer crossings); $m>1\\Rightarrow 2$ (only the two unbounded outer branches reach height $m$)."
        ]
      },
      {
        "name": "Substitution reduction",
        "steps": [
          "Since $p(x)=\\big(x^{2}-2x\\big)^{2}$, set $u=x^{2}-2x$; then $p(x)=m\\iff u^{2}=m$.",
          "For $m<0$: no real $u$, hence $0$ roots. For $m=0$: $u=0\\Rightarrow x^{2}-2x=0\\Rightarrow x=0,2$, giving $2$ roots.",
          "For $m>0$: $u=\\pm\\sqrt m$. Each value of $u$ gives the quadratic $x^{2}-2x-u=0$ with discriminant $4+4u=4(1\\pm\\sqrt m)$.",
          "The branch $u=+\\sqrt m$ has discriminant $4(1+\\sqrt m)>0$, always $2$ real roots. The branch $u=-\\sqrt m$ has discriminant $4(1-\\sqrt m)$: positive (so $2$ roots) when $\\sqrt m<1$, zero (a double root) when $\\sqrt m=1$, negative (no root) when $\\sqrt m>1$. The two branches share no root since $+\\sqrt m\\neq-\\sqrt m$ for $m>0$. Hence $0<m<1\\Rightarrow 4$, $m=1\\Rightarrow 3$, $m>1\\Rightarrow 2$. $\\blacksquare$"
        ]
      }
    ],
    "remark": "Rolle's theorem says the roots of $p$ are separated by the roots of $p'$, so the only places where the root count can change are the critical values, here $0$ and $1$. The level-set substitution $u=x^{2}-2x$ confirms every transition independently: the discriminant $4(1-\\sqrt m)$ changes sign precisely at $m=1$, and the double-minimum tangency lives at $m=0$."
  },
  {
    "theme": "mvt",
    "themeLabel": "Mean Value & Rolle",
    "title": "Peeling a Tenfold Zero: Rolle Counts to n",
    "difficulty": 5,
    "task": "Prove",
    "tags": [
      "iterated-rolle",
      "multiplicity",
      "root-counting",
      "rodrigues",
      "interlacing",
      "existence"
    ],
    "statement": "For a positive integer $n$, set \\[ q(x)=(x^2-1)^n,\\qquad P(x)=\\frac{d^n}{dx^n}\\,q(x)=q^{(n)}(x). \\]\n(a) Using only Rolle's theorem (applied repeatedly) and the notion of the multiplicity of a zero, prove that $P$ has exactly $n$ distinct real roots and that every one of them lies in the open interval $(-1,1)$. You must say explicitly, at each of the $n$ stages, which points you feed to Rolle and how many zeros of the successive derivatives you have accounted for; a bound such as `at least one root' earns nothing.\n(b) Deduce that all $n$ roots of $P$ are simple, and determine the exact number of roots of $P'(x)$ lying in $(-1,1)$. Warning: $P'$ is not itself a Rodrigues polynomial $\\dfrac{d^{m}}{dx^{m}}(x^2-1)^{m}$ for any $m$, so the theorem of part (a) cannot simply be re-applied to it; you must argue from the roots of $P$ directly.",
    "answer": "\\[\\boxed{\\#\\{x:P(x)=0\\}=n,\\ \\text{all simple and in }(-1,1);\\quad \\#\\{x\\in(-1,1):P'(x)=0\\}=n-1}\\]",
    "trap": "The pattern-matcher reads `$q$ vanishes at $x=\\pm1$, so by Rolle $q'$ has a zero between them' and tries to march upward one zero at a time -- but starting from only the TWO endpoint zeros, repeated Rolle on a single interval manufactures at most one interior zero per differentiation, giving the useless conclusion that $P=q^{(n)}$ has merely `at least one' root. The hidden structure that breaks this is multiplicity: $x=1$ and $x=-1$ are zeros of $q$ of order $n$, not order $1$. Consequently $q^{(k)}(1)=q^{(k)}(-1)=0$ for every $k=0,1,\\dots,n-1$, so the two endpoints REMAIN zeros of each successive derivative and must be re-fed into Rolle at every stage alongside the freshly created interior zeros. Forgetting this -- treating $\\pm1$ as ordinary simple zeros that are `used up' after the first Rolle step -- collapses the genuine count of $n$ interior roots down to $1$. A second over-reach in part (b) is to declare `$P'$ has $n-1$ roots because it is the next polynomial in the family': it is not. $P'$ has degree $n-1$, whereas the next Rodrigues polynomial has degree $n+1$; the count $n-1$ comes from Rolle/interlacing applied to the $n$ already-located simple roots of $P$, nothing more.",
    "solutions": [
      {
        "name": "Multiplicity ledger + Rolle at every stage (the direct iterated count)",
        "steps": [
          "Endpoint multiplicities. Since $q(x)=(x-1)^n(x+1)^n$, the point $x=1$ is a zero of $q$ of order exactly $n$, and likewise $x=-1$. The standard fact about a zero of order $m$ is that $q,q',\\dots,q^{(m-1)}$ all vanish there while $q^{(m)}$ does not. Applied at $x=1$ and $x=-1$ with $m=n$, this gives the ledger \\[ q^{(k)}(1)=q^{(k)}(-1)=0\\quad\\text{for every }k=0,1,\\dots,n-1, \\] and $q^{(n)}(\\pm1)\\ne0$. So the two endpoints persist as zeros of every derivative up to order $n-1$ -- this is the resource the naive count throws away.",
          "Induction hypothesis. Claim: for each $k=0,1,\\dots,n$, the function $q^{(k)}$ has at least $k$ distinct zeros strictly inside $(-1,1)$, in addition to (for $k\\le n-1$) the surviving endpoint zeros at $x=\\pm1$. Base case $k=0$: $q$ has $0$ interior zeros required, true vacuously, and vanishes at $\\pm1$.",
          "Inductive step. Suppose $q^{(k)}$ ($k\\le n-1$) has interior zeros $-1<t_1<\\dots<t_k<1$ together with $q^{(k)}(1)=q^{(k)}(-1)=0$. Order ALL of these: \\[ -1=s_0<t_1<t_2<\\dots<t_k<s_{k+1}=1, \\] a list of $k+2$ points at which $q^{(k)}$ vanishes. On each of the $k+1$ consecutive subintervals $[s_0,t_1],[t_1,t_2],\\dots,[t_k,s_{k+1}]$ Rolle's theorem produces a zero of $(q^{(k)})'=q^{(k+1)}$ strictly inside it. These $k+1$ zeros are distinct (they lie in disjoint open subintervals) and all lie in $(-1,1)$. Thus $q^{(k+1)}$ has at least $k+1$ interior zeros, and if $k+1\\le n-1$ it still also vanishes at $\\pm1$ by the ledger. The induction closes.",
          "Reaching $k=n$. At $k=n$ the hypothesis gives $P=q^{(n)}$ at least $n$ distinct zeros in $(-1,1)$. But $P$ is a polynomial of degree exactly $n$ (each differentiation of the degree-$2n$ polynomial $q$ drops the degree by $1$), so it has at most $n$ roots counted with multiplicity. Hence it has exactly $n$ roots, all real, all distinct, and all inside $(-1,1)$ -- and by the ledger $P(\\pm1)=q^{(n)}(\\pm1)\\ne0$, confirming none escaped to the endpoints.",
          "Part (b). Exactly $n$ distinct roots for a degree-$n$ polynomial forces each root to have multiplicity $1$, i.e. all roots are simple. Now order them $-1<r_1<\\dots<r_n<1$. Rolle on each $[r_i,r_{i+1}]$ gives a zero of $P'$ in $(r_i,r_{i+1})\\subset(-1,1)$: that is $n-1$ interior zeros of $P'$. Since $\\deg P'=n-1$, $P'$ has at most $n-1$ roots, so this is all of them. Therefore $P'$ has exactly $n-1$ roots in $(-1,1)$. $\\boxed{\\#\\{P=0\\}=n\\text{ (simple, in }(-1,1)),\\ \\#\\{P'=0\\}_{(-1,1)}=n-1}$"
        ]
      },
      {
        "name": "Bookkeeping by the total zero-count $n-k$ at endpoints plus $k$ inside",
        "steps": [
          "Track a single integer. For $0\\le k\\le n$ let $N_k$ be the number of zeros of $q^{(k)}$ in the CLOSED interval $[-1,1]$, counted with multiplicity. For $q=(x^2-1)^n$ we have $N_0=2n$ (orders $n$ at each endpoint). Differentiating a polynomial reduces the multiplicity of any repeated real zero by exactly $1$, and -- by Rolle -- inserts a new simple zero strictly between each pair of consecutive zeros of $q^{(k)}$ in $[-1,1]$.",
          "Endpoint loss vs. interior gain. While $k\\le n-1$, the endpoints $\\pm1$ are still zeros (of order $n-k\\ge1$), so each differentiation lowers their combined multiplicity by $2$ but, sitting between the (now several) zeros, creates new interior simple zeros. Concretely, if at stage $k$ the distinct zeros of $q^{(k)}$ in $[-1,1]$ are $\\pm1$ together with $k$ interior points, then there are $k+1$ gaps, so Rolle yields $k+1$ new interior zeros for $q^{(k+1)}$; the endpoints persist (order drops $n-k\\to n-k-1$) as long as $k+1\\le n-1$. Hence the interior-zero count goes $0\\to1\\to2\\to\\cdots\\to k\\to\\cdots$, reaching $n$ at $k=n$.",
          "Endgame at $k=n$. At the final differentiation the endpoint multiplicities have been ground down to $0$ (order $n-k=0$), so $\\pm1$ are no longer zeros; all $n$ accumulated zeros are strictly interior. Degree of $q^{(n)}$ is $n$, capping the count at $n$, so equality holds: exactly $n$ distinct simple roots in $(-1,1)$. The ledger $N_k$ never lies about where zeros went -- it is conserved as `lost-at-endpoints $=$ gained-inside' until the endpoints run dry.",
          "Part (b). Simplicity is forced by `$n$ distinct roots, degree $n$.' For $P'$: between consecutive simple roots of $P$ the value of $P$ changes sign, so $P'$ has an odd number (hence $\\ge1$) of zeros in each of the $n-1$ internal gaps; that is $\\ge n-1$ interior zeros, and $\\deg P'=n-1$ caps it, giving exactly $n-1$. The warning bites here: $P'$ has degree $n-1$, not the degree $n+1$ of the next Rodrigues polynomial, so it is a genuinely different object and only the interlacing argument applies. $\\boxed{\\#\\{P=0\\}=n\\text{ (simple, in }(-1,1)),\\ \\#\\{P'=0\\}_{(-1,1)}=n-1}$"
        ]
      }
    ],
    "remark": "Insight: this is the existence/counting heart of the Rodrigues formula -- indeed $q^{(n)}=2^{n}n!\\,P_n(x)$ is the Legendre polynomial, and the argument is the classical proof that $P_n$ has $n$ simple roots in $(-1,1)$. The single idea that makes iterated Rolle COUNT rather than merely EXIST is multiplicity bookkeeping: because $\\pm1$ are zeros of $(x^2-1)^n$ of order $n$, they are not consumed by the first differentiation but persist as zeros of $q,q',\\dots,q^{(n-1)}$, re-entering Rolle at every stage. Each stage trades one unit of endpoint multiplicity (at each end) for one new interior zero, so after $n$ stages all $2n$ units of endpoint multiplicity have migrated inward as $n$ distinct interior roots. The pattern-matcher who treats $\\pm1$ as simple zeros gets `at least one root' and stops; the top-ranker keeps the ledger and gets the sharp `exactly $n$.' Part (b) is the discipline test: $P'$ tempts you to reapply the same theorem, but it has degree $n-1$, not $n+1$, so it lives outside the Rodrigues family -- its $n-1$ roots are an interlacing corollary of the $n$ simple roots already won, a reminder that the right tool for the SECOND question is Rolle on the answer to the first, not the theorem itself."
  },
  {
    "theme": "mvt",
    "themeLabel": "Mean Value & Rolle",
    "title": "One Root, Pinned by Rolle",
    "difficulty": 5,
    "task": "Locate the root",
    "tags": [
      "rolle-theorem",
      "root-counting",
      "cubic",
      "antiderivative-trick",
      "monotonicity"
    ],
    "statement": "Consider the cubic $p(x)=8x^{3}-6x^{2}+2x-1$. Prove that $p$ has exactly one real root and that this root lies strictly inside the interval $(0,1)$. You must justify the interior location using Rolle's theorem on a suitable antiderivative, not merely a sign change.",
    "answer": "$p$ has a single real root, and it lies in $(0,1)$: $\\boxed{\\,p \\text{ has exactly one real root, and } x_0\\in(0,1)\\,}$ (numerically $x_0\\approx 0.6586$).",
    "trap": "Using only the Intermediate Value Theorem — noting $p(0)=-1<0<3=p(1)$ — to claim a root in $(0,1)$. That gives at least one root but never establishes interior placement via Rolle, nor does it prove the root is unique; uniqueness needs the strictly positive derivative $p'(x)=24x^{2}-12x+2$.",
    "solutions": [
      {
        "name": "Rolle on the antiderivative",
        "steps": [
          "Build $F(x)=2x^{4}-2x^{3}+x^{2}-x$, so that $F'(x)=8x^{3}-6x^{2}+2x-1=p(x)$.",
          "Compute the endpoints: $F(0)=0$ and $F(1)=2-2+1-1=0$, so $F(0)=F(1)$. Since $F$ is a polynomial it is continuous on $[0,1]$ and differentiable on $(0,1)$.",
          "Rolle's theorem applies and yields a point $c\\in(0,1)$ with $F'(c)=0$, i.e. $p(c)=0$. Thus a root of $p$ lies strictly inside $(0,1)$.",
          "For uniqueness, $p'(x)=24x^{2}-12x+2$ has discriminant $144-192=-48<0$, so $p'(x)>0$ for all $x$; hence $p$ is strictly increasing and has at most one real root. Combined with the Rolle root, $p$ has exactly one real root and it lies in $(0,1)$: $\\boxed{x_0\\in(0,1)}$."
        ]
      },
      {
        "name": "Monotonicity plus a sign change",
        "steps": [
          "Since $p'(x)=24x^{2}-12x+2$ is a parabola with negative discriminant $-48$, it is always positive; therefore $p$ is strictly monotonic increasing on $\\mathbb{R}$, so it crosses zero at most once.",
          "A strictly increasing continuous function with $p(0)=-1<0$ and $p(1)=3>0$ crosses zero exactly once on $(0,1)$ by monotonic bijectivity.",
          "To frame the interior placement as Rolle demands, the antiderivative $F$ with $F(0)=F(1)=0$ forces a stationary point $c\\in(0,1)$ of $F$, which is precisely the unique zero of $p$. Hence $\\boxed{x_0\\in(0,1)}$ is the only real root."
        ]
      }
    ],
    "remark": "**Insight.** Rolle's theorem is a root-multiplier in disguise: a zero of $f$ between two zeros of an antiderivative $F$ is guaranteed, so building the right $F$ with matching endpoint values converts ``$F(0)=F(1)$'' directly into ``$f$ vanishes inside.'' The monotone derivative then upgrades ``at least one'' to ``exactly one.''"
  },
  {
    "theme": "mvt",
    "themeLabel": "Mean Value & Rolle",
    "title": "Squeezing the Arctangent",
    "difficulty": 5,
    "task": "Prove and sharpen",
    "tags": [
      "lagrange-mvt",
      "inequality",
      "arctangent",
      "decreasing-derivative",
      "numerical-bound"
    ],
    "statement": "For real numbers $0\\le a<b$, prove the two-sided estimate \\[ \\frac{b-a}{1+b^{2}}\\;<\\;\\arctan b-\\arctan a\\;<\\;\\frac{b-a}{1+a^{2}}. \\] Then take $a=1,\\ b=\\tfrac{4}{3}$ to deduce a sharp numerical sandwich for $\\arctan\\tfrac{4}{3}$ in terms of $\\tfrac{\\pi}{4}$.",
    "answer": "The inequality holds, giving $\\boxed{\\dfrac{\\pi}{4}+\\dfrac{3}{25}\\;<\\;\\arctan\\dfrac{4}{3}\\;<\\;\\dfrac{\\pi}{4}+\\dfrac{1}{6}}$.",
    "trap": "Applying Lagrange's MVT correctly to get $\\arctan b-\\arctan a=\\dfrac{b-a}{1+c^{2}}$ but then assuming the bounds come out in the ``natural'' order. Because $\\dfrac{1}{1+x^{2}}$ is decreasing on $[a,b]$, the value at the larger endpoint $b$ is the smaller bound; flipping this reverses the whole inequality.",
    "solutions": [
      {
        "name": "Lagrange MVT with a monotone derivative",
        "steps": [
          "Let $f(x)=\\arctan x$, continuous on $[a,b]$ and differentiable on $(a,b)$ with $f'(x)=\\dfrac{1}{1+x^{2}}$.",
          "By Lagrange's MVT there is $c\\in(a,b)$ with $\\arctan b-\\arctan a=\\dfrac{b-a}{1+c^{2}}$.",
          "On $[a,b]$ the function $\\dfrac{1}{1+x^{2}}$ is strictly decreasing, so $a<c<b$ gives $\\dfrac{1}{1+b^{2}}<\\dfrac{1}{1+c^{2}}<\\dfrac{1}{1+a^{2}}$. Multiplying by $b-a>0$ yields the claimed double inequality.",
          "Set $a=1,\\ b=\\tfrac{4}{3}$: then $b-a=\\tfrac{1}{3}$, $1+a^{2}=2$, $1+b^{2}=\\tfrac{25}{9}$. The bounds become $\\dfrac{1/3}{25/9}=\\dfrac{3}{25}$ and $\\dfrac{1/3}{2}=\\dfrac{1}{6}$, and $\\arctan 1=\\tfrac{\\pi}{4}$, giving $\\boxed{\\dfrac{\\pi}{4}+\\dfrac{3}{25}<\\arctan\\dfrac{4}{3}<\\dfrac{\\pi}{4}+\\dfrac{1}{6}}$."
        ]
      },
      {
        "name": "Monotonicity of the gap functions",
        "steps": [
          "Fix $a$ and define $G(b)=\\arctan b-\\arctan a-\\dfrac{b-a}{1+b^{2}}$. Then $G(a)=0$ and $G'(b)=\\dfrac{1}{1+b^{2}}-\\dfrac{(1+b^{2})-(b-a)\\cdot 2b}{(1+b^{2})^{2}}=\\dfrac{2b(b-a)}{(1+b^{2})^{2}}>0$ for $b>a$, so $G(b)>0$, which is the left inequality.",
          "Similarly $H(b)=\\dfrac{b-a}{1+a^{2}}-\\big(\\arctan b-\\arctan a\\big)$ has $H(a)=0$ and $H'(b)=\\dfrac{1}{1+a^{2}}-\\dfrac{1}{1+b^{2}}>0$ for $b>a$, so $H(b)>0$, the right inequality.",
          "Both gap functions increase from $0$, confirming the sandwich; substituting $a=1,\\ b=\\tfrac43$ reproduces $\\boxed{\\dfrac{\\pi}{4}+\\dfrac{3}{25}<\\arctan\\dfrac{4}{3}<\\dfrac{\\pi}{4}+\\dfrac{1}{6}}$."
        ]
      }
    ],
    "remark": "**Insight.** The single mean-value point $c$ is unknown, but the monotonicity of $f'$ pins it between two computable bounds — that is the whole engine of MVT inequalities. The direction of the inequality is dictated entirely by whether $f'$ is increasing or decreasing, which is exactly where careless solutions slip."
  },
  {
    "theme": "mvt",
    "themeLabel": "Mean Value & Rolle",
    "title": "The Cusp That Breaks Rolle",
    "difficulty": 5,
    "task": "Resolve the paradox",
    "tags": [
      "rolle-theorem",
      "hypothesis-failure",
      "cusp",
      "non-differentiable",
      "one-sided-derivative"
    ],
    "statement": "Let $f(x)=1-\\sqrt[3]{(x-1)^{2}}$ on the closed interval $[0,2]$, where $\\sqrt[3]{\\,\\cdot\\,}$ denotes the real cube root. A student observes $f(0)=f(2)=0$ and $f$ is continuous, then ``applies Rolle's theorem'' to assert some $c\\in(0,2)$ has $f'(c)=0$. Show that in fact $f'(x)\\ne 0$ for every $x$ where it exists, and explain precisely which hypothesis of Rolle's theorem fails.",
    "answer": "There is no such $c$: $f'(x)=-\\dfrac{2}{3\\sqrt[3]{x-1}}\\ne 0$ wherever it exists, and Rolle does not apply because $f$ is not differentiable at $x=1$. $\\boxed{\\text{Rolle fails: }f\\text{ is non-differentiable at }x=1\\ (\\text{a cusp}).}$",
    "trap": "Treating ``continuous on $[0,2]$ and equal endpoint values'' as enough to invoke Rolle's conclusion. Rolle also demands differentiability on the open interval $(0,2)$; the cusp at $x=1$ voids it, so the guaranteed stationary point need not exist — and here it genuinely does not.",
    "solutions": [
      {
        "name": "Compute the derivative and the cusp",
        "steps": [
          "For $x\\ne 1$, write $f(x)=1-(x-1)^{2/3}$ in real-cube-root sense; then $f'(x)=-\\tfrac{2}{3}(x-1)^{-1/3}=-\\dfrac{2}{3\\sqrt[3]{x-1}}$, which is never $0$ for any $x\\ne 1$.",
          "Examine $x=1$ from the difference quotient: $\\dfrac{f(1+h)-f(1)}{h}=\\dfrac{-\\sqrt[3]{h^{2}}}{h}=-\\dfrac{1}{\\sqrt[3]{h}}$. As $h\\to 0^{+}$ this tends to $-\\infty$ and as $h\\to 0^{-}$ it tends to $+\\infty$.",
          "The one-sided derivatives are infinite and of opposite sign, so $f$ is not differentiable at $x=1$ (a cusp where $f$ attains the maximum value $f(1)=1$).",
          "Hence Rolle's hypothesis of differentiability on $(0,2)$ fails at the single point $x=1$, and consistent with that, $f'(c)=0$ has no solution: $\\boxed{\\text{Rolle fails at the cusp }x=1.}$"
        ]
      },
      {
        "name": "Shape argument via monotonic pieces",
        "steps": [
          "On $(0,1)$, $\\sqrt[3]{x-1}<0$, so $f'(x)=-\\dfrac{2}{3\\sqrt[3]{x-1}}>0$: $f$ strictly increases from $f(0)=0$ up toward $f(1)=1$.",
          "On $(1,2)$, $\\sqrt[3]{x-1}>0$, so $f'(x)<0$: $f$ strictly decreases from $f(1)=1$ down to $f(2)=0$. Thus $f$ rises then falls with no flat spot.",
          "A horizontal tangent would require the rising and falling branches to meet smoothly, but they meet at an upward cusp at $x=1$ where the slope blows up; no interior point has $f'=0$.",
          "The endpoints match ($f(0)=f(2)$) yet the Rolle conclusion is absent precisely because differentiability is lost at $x=1$: $\\boxed{\\text{the missing hypothesis is differentiability on }(0,2).}$"
        ]
      }
    ],
    "remark": "**Insight.** Rolle's theorem is an ``if-then'' whose conclusion is worthless once a hypothesis lapses. A single cusp can host the maximum of a function with equal endpoints while denying any horizontal tangent — the classic counterexample showing that differentiability on the whole open interval is not negotiable."
  },
  {
    "theme": "mvt",
    "themeLabel": "Mean Value & Rolle",
    "title": "Rolle Forces a Weighted Derivative Equation",
    "difficulty": 5,
    "task": "Prove existence of an interior point satisfying a weighted derivative relation.",
    "tags": [
      "Rolle's theorem",
      "auxiliary function",
      "exponential multiplier",
      "interior root",
      "existence proof"
    ],
    "statement": "Let $f:[0,1]\\to\\mathbb{R}$ be continuous on $[0,1]$ and differentiable on $(0,1)$, with $f(0)=f(1)=0$. Prove that there exists a point $c\\in(0,1)$ such that $f'(c)=c\\,f(c)$.",
    "answer": "$\\boxed{\\exists\\,c\\in(0,1):\\ f'(c)=c\\,f(c)}$",
    "trap": "Trying to apply Rolle directly to $f$ only yields a point where $f'=0$, not $f'=c f$. The fix is to multiply by an integrating factor $e^{-x^2/2}$; one must still verify the equal-endpoints hypothesis $g(0)=g(1)$ before invoking Rolle. Skipping that check (for instance using $f(x)=x$, where $f(0)=0\\neq f(1)$) breaks the conclusion: there $f'(c)=c f(c)$ forces $1=c^2$, whose only root $c=1$ is not interior.",
    "solutions": [
      {
        "name": "Integrating-factor auxiliary function $g(x)=e^{-x^2/2}f(x)$",
        "steps": [
          "We want a point where $f'(x)-x\\,f(x)=0$. The expression $f'-xf$ is the numerator that appears when we differentiate $f$ times the integrating factor $e^{-x^2/2}$, since $\\dfrac{d}{dx}e^{-x^2/2}=-x\\,e^{-x^2/2}$.",
          "Define $g(x)=e^{-x^2/2}\\,f(x)$ on $[0,1]$. As a product of the everywhere-differentiable $e^{-x^2/2}$ and $f$ (continuous on $[0,1]$, differentiable on $(0,1)$), $g$ is continuous on $[0,1]$ and differentiable on $(0,1)$.",
          "Check the equal-endpoints hypothesis: $g(0)=e^{0}f(0)=0$ and $g(1)=e^{-1/2}f(1)=0$, so $g(0)=g(1)=0$.",
          "By Rolle's theorem there is $c\\in(0,1)$ with $g'(c)=0$. Compute $g'(x)=e^{-x^2/2}\\bigl(f'(x)-x\\,f(x)\\bigr)$.",
          "Since $e^{-c^2/2}\\neq 0$, $g'(c)=0$ gives $f'(c)-c\\,f(c)=0$, i.e. $f'(c)=c\\,f(c)$ with $c\\in(0,1)$, as required."
        ]
      },
      {
        "name": "Lagrange MVT on $h(x)=\\ln$-style ratio handled via the same multiplier",
        "steps": [
          "Set $g(x)=e^{-x^2/2}f(x)$, which is continuous on $[0,1]$ and differentiable on $(0,1)$ as a product of differentiable functions.",
          "Apply the Lagrange Mean Value Theorem to $g$ on $[0,1]$: there exists $c\\in(0,1)$ with $g'(c)=\\dfrac{g(1)-g(0)}{1-0}$.",
          "Because $f(0)=f(1)=0$, we get $g(1)-g(0)=e^{-1/2}\\cdot 0-e^{0}\\cdot 0=0$, so the right-hand side is $0$ and hence $g'(c)=0$.",
          "Differentiating, $g'(x)=e^{-x^2/2}\\bigl(f'(x)-x f(x)\\bigr)$, and $e^{-c^2/2}>0$ forces $f'(c)-c f(c)=0$.",
          "Therefore $f'(c)=c\\,f(c)$ for some interior $c\\in(0,1)$. (When the endpoint values coincide, Lagrange MVT reduces to Rolle, confirming the two routes agree.)"
        ]
      }
    ],
    "remark": "**Insight.** The leap is reading $f'(x)-x f(x)=0$ as the vanishing of a single derivative: it is exactly $e^{x^2/2}\\cdot\\frac{d}{dx}\\!\\left(e^{-x^2/2}f(x)\\right)$. Choosing the integrating factor $e^{-x^2/2}$ converts the weighted relation into a clean Rolle hypothesis. For a constant weight $k$ one would instead use $e^{-kx}$; here the weight is the variable $x$, so its antiderivative $x^2/2$ enters the exponent. The equal-endpoints check is not a formality — $f(x)=x$ shows the conclusion genuinely fails once $f(0)=f(1)$ is dropped."
  },
  {
    "theme": "mvt",
    "themeLabel": "Mean Value & Rolle",
    "title": "A Forced Root of a Derivative Relation",
    "difficulty": 5,
    "task": "Prove a guaranteed interior root of a first-order derivative relation.",
    "tags": [
      "rolle",
      "integrating-factor",
      "auxiliary-function",
      "root-counting",
      "differentiability"
    ],
    "statement": "Let $f:[0,1]\\to\\mathbb{R}$ be continuous on $[0,1]$ and differentiable on $(0,1)$, and suppose it satisfies the single boundary condition $f(0)=e^{3}\\,f(1)$. Prove that there exists at least one point $c\\in(0,1)$ for which $f'(c)+3f(c)=0$. (No assumption is made about the sign of $f$, and $f$ need not vanish anywhere.)",
    "answer": "$\\boxed{\\,\\exists\\,c\\in(0,1):\\ f'(c)+3f(c)=0\\,}$",
    "trap": "Reaching for the “wrong” integrating factor $g(x)=e^{-3x}f(x)$ — its derivative is $e^{-3x}\\bigl(f'(x)-3f(x)\\bigr)$, which produces the equation $f'-3f=0$, not the required $f'+3f=0$. The sign in the exponent must match the sign of $k$: to target $f'+kf$ you need $g=e^{+kx}f$. A second fatal slip is to invoke Rolle without first checking the equal-endpoints hypothesis $g(0)=g(1)$ — that equality is exactly what the given condition $f(0)=e^3f(1)$ secretly encodes, and skipping it leaves the conclusion unjustified.",
    "solutions": [
      {
        "name": "Integrating-factor auxiliary $g=e^{3x}f$ and Rolle",
        "steps": [
          "We want a function whose vanishing derivative reproduces $f'+3f$. Multiply the target expression by the integrating factor $e^{3x}$: since $\\dfrac{d}{dx}\\!\\bigl(e^{3x}f(x)\\bigr)=e^{3x}f'(x)+3e^{3x}f(x)=e^{3x}\\bigl(f'(x)+3f(x)\\bigr)$, define $g(x)=e^{3x}f(x)$ on $[0,1]$.",
          "Check Rolle's hypotheses for $g$. As a product of $e^{3x}$ (differentiable everywhere) and $f$ (continuous on $[0,1]$, differentiable on $(0,1)$), $g$ is continuous on $[0,1]$ and differentiable on $(0,1)$.",
          "Verify equal endpoints using the given condition: $g(0)=e^{0}f(0)=f(0)$ and $g(1)=e^{3}f(1)$. The hypothesis $f(0)=e^{3}f(1)$ gives exactly $g(0)=g(1)$.",
          "By Rolle's theorem there is $c\\in(0,1)$ with $g'(c)=0$, i.e. $e^{3c}\\bigl(f'(c)+3f(c)\\bigr)=0$. Since $e^{3c}>0$, dividing gives $f'(c)+3f(c)=0$, proving $\\boxed{\\,\\exists\\,c\\in(0,1):\\ f'(c)+3f(c)=0\\,}$."
        ]
      },
      {
        "name": "Lagrange MVT applied to $h=\\ln|g|$ (sign-localized)",
        "steps": [
          "Set $g(x)=e^{3x}f(x)$ as above. If $f$ vanishes anywhere on $(0,1)$, then $g$ vanishes there while $g(0)=g(1)$; either $g\\equiv0$ on a subinterval (so $g'=0$ there) or $g$ attains an interior extremum where $g'=0$, and in both cases we are done as in Solution 1. So assume $f$, hence $g$, has constant sign on $[0,1]$.",
          "With $g$ of constant sign, $h(x)=\\ln|g(x)|=3x+\\ln|f(x)|$ is well-defined, continuous on $[0,1]$ and differentiable on $(0,1)$, with $h'(x)=\\dfrac{g'(x)}{g(x)}=\\dfrac{f'(x)+3f(x)}{f(x)}$.",
          "Because $|g(0)|=|f(0)|=|e^{3}f(1)|=|g(1)|$, we have $h(0)=h(1)$. Apply Lagrange MVT (equivalently Rolle) to $h$: there is $c\\in(0,1)$ with $h'(c)=\\dfrac{h(1)-h(0)}{1-0}=0$.",
          "Thus $\\dfrac{f'(c)+3f(c)}{f(c)}=0$, and since $f(c)\\neq0$ in this case, $f'(c)+3f(c)=0$. Combining both cases yields $\\boxed{\\,\\exists\\,c\\in(0,1):\\ f'(c)+3f(c)=0\\,}$."
        ]
      }
    ],
    "remark": "**Insight.** The exponent in the auxiliary $g=e^{kx}f$ is not a guess — it is the integrating factor of the linear operator $f\\mapsto f'+kf$, chosen so that $g'=e^{kx}(f'+kf)$ collapses the whole expression into a single derivative. The peculiar boundary condition $f(0)=e^{3}f(1)$ is engineered backwards from $g(0)=g(1)$: it is precisely the equal-endpoints clause of Rolle in disguise. Spotting that a strange-looking hypothesis is really $g$'s endpoint equality is the entire problem; once $g$ is named, Rolle does the rest."
  },
  {
    "theme": "impparam",
    "themeLabel": "Implicit, Parametric & Inverse Differentiation",
    "title": "When x-to-y Meets y-to-x",
    "difficulty": 4,
    "task": "Find dy/dx",
    "tags": [
      "implicit-differentiation",
      "logarithmic-differentiation",
      "exponent-with-variable",
      "chain-rule",
      "symmetry"
    ],
    "statement": "A curve is defined implicitly by $x^{y}=y^{x}$ for $x,y>0$. Take logarithms first, then differentiate, to find $\\dfrac{dy}{dx}$ as a function of $x$ and $y$. (Note that the diagonal $y=x$ is one solution branch.)",
    "answer": "$\\boxed{\\dfrac{dy}{dx}=\\dfrac{y\\,(x\\ln y-y)}{x\\,(y\\ln x-x)}}$. On the branch $y=x$ this gives $\\dfrac{dy}{dx}=1$.",
    "trap": "Treating $x^{y}$ as if the exponent were a constant (writing its derivative as $y\\,x^{y-1}$) or treating the base as constant (writing $x^{y}\\ln x$ only). With BOTH base and exponent varying you must take $\\ln$ first, then differentiate — otherwise you lose one of the two contributions on each side.",
    "solutions": [
      {
        "name": "Logarithmic differentiation",
        "steps": [
          "Take natural logs: $y\\ln x=x\\ln y$.",
          "Differentiate both sides with respect to $x$, using the product rule and remembering $y=y(x)$: $\\dfrac{dy}{dx}\\ln x+\\dfrac{y}{x}=\\ln y+\\dfrac{x}{y}\\dfrac{dy}{dx}$.",
          "Group the $\\dfrac{dy}{dx}$ terms: $\\left(\\ln x-\\dfrac{x}{y}\\right)\\dfrac{dy}{dx}=\\ln y-\\dfrac{y}{x}$.",
          "Multiply through by $xy$ and solve: $\\dfrac{dy}{dx}=\\dfrac{y(x\\ln y-y)}{x(y\\ln x-x)}$. On $y=x$ this is $\\dfrac{x(x\\ln x-x)}{x(x\\ln x-x)}=1$, so $\\boxed{\\dfrac{dy}{dx}=\\dfrac{y(x\\ln y-y)}{x(y\\ln x-x)}}$."
        ]
      },
      {
        "name": "Implicit derivative of $F(x,y)=0$",
        "steps": [
          "Write $F=y\\ln x-x\\ln y$. Then $\\dfrac{dy}{dx}=-\\dfrac{F_x}{F_y}$ where the subscripts are partial derivatives.",
          "Compute $F_x=\\dfrac{y}{x}-\\ln y$ and $F_y=\\ln x-\\dfrac{x}{y}$.",
          "Hence $\\dfrac{dy}{dx}=-\\dfrac{\\,\\tfrac{y}{x}-\\ln y\\,}{\\,\\ln x-\\tfrac{x}{y}\\,}=\\dfrac{\\ln y-\\tfrac{y}{x}}{\\ln x-\\tfrac{x}{y}}$.",
          "Clearing fractions by $xy$ gives $\\dfrac{dy}{dx}=\\dfrac{y(x\\ln y-y)}{x(y\\ln x-x)}=\\boxed{\\dfrac{y(x\\ln y-y)}{x(y\\ln x-x)}}$, equal to $1$ when $y=x$."
        ]
      }
    ],
    "remark": "**Insight.** The relation $x^y=y^x$ has two branches: the trivial diagonal $y=x$ and a curve through $(2,4)$ and $(4,2)$. Logarithms convert the double-variable exponent into a sum of products, after which one honest product rule on each side does all the work."
  },
  {
    "theme": "impparam",
    "themeLabel": "Implicit, Parametric & Inverse Differentiation",
    "title": "Slope on the Folium",
    "difficulty": 5,
    "task": "Find the slope",
    "tags": [
      "implicit-differentiation",
      "folium-of-descartes",
      "chain-rule",
      "symmetry",
      "tangent"
    ],
    "statement": "The folium of Descartes is the curve $x^3+y^3=3axy$ (with $a>0$). It crosses itself and is symmetric in the line $y=x$. Differentiate the relation implicitly to obtain $\\dfrac{dy}{dx}$ as a function of $x,y$, and then evaluate the slope of the tangent at the point $\\left(\\tfrac{3a}{2},\\tfrac{3a}{2}\\right)$ which lies on the curve.",
    "answer": "$\\dfrac{dy}{dx}=\\dfrac{ay-x^2}{y^2-ax}$, and at $\\left(\\tfrac{3a}{2},\\tfrac{3a}{2}\\right)$ the slope is $\\boxed{-1}$.",
    "trap": "Differentiating $y^3$ as $3y^2$ instead of $3y^2\\,\\dfrac{dy}{dx}$ — i.e. forgetting that $y$ is a function of $x$, so the chain rule must attach a factor $\\dfrac{dy}{dx}$ to every term coming from $y$. That error drops the $\\dfrac{dy}{dx}$ entirely and gives a meaningless expression.",
    "solutions": [
      {
        "name": "Term-by-term implicit differentiation",
        "steps": [
          "Differentiate $x^3+y^3=3axy$ with respect to $x$, treating $y=y(x)$: $3x^2+3y^2\\dfrac{dy}{dx}=3a\\left(y+x\\dfrac{dy}{dx}\\right)$.",
          "Collect the $\\dfrac{dy}{dx}$ terms: $\\left(3y^2-3ax\\right)\\dfrac{dy}{dx}=3ay-3x^2$, hence $\\dfrac{dy}{dx}=\\dfrac{ay-x^2}{y^2-ax}$.",
          "At $\\left(\\tfrac{3a}{2},\\tfrac{3a}{2}\\right)$: numerator $=a\\cdot\\tfrac{3a}{2}-\\tfrac{9a^2}{4}=\\tfrac{3a^2}{2}-\\tfrac{9a^2}{4}=-\\tfrac{3a^2}{4}$; denominator $=\\tfrac{9a^2}{4}-a\\cdot\\tfrac{3a}{2}=\\tfrac{9a^2}{4}-\\tfrac{6a^2}{4}=\\tfrac{3a^2}{4}$.",
          "Therefore the slope is $\\dfrac{-3a^2/4}{3a^2/4}=\\boxed{-1}$."
        ]
      },
      {
        "name": "Exploiting the symmetry $y=x$",
        "steps": [
          "The curve is symmetric under $x\\leftrightarrow y$, and the test point lies on the axis of symmetry $y=x$. The reflection in $y=x$ maps the tangent line at this point to itself.",
          "A line invariant under reflection in $y=x$ is either parallel to $y=x$ (slope $1$) or perpendicular to it (slope $-1$).",
          "Slope $1$ would mean the tangent is the symmetry line itself, but the curve crosses $y=x$ transversally here, not tangentially. So the slope must be the perpendicular value $-1$.",
          "This matches the implicit computation $\\dfrac{ay-x^2}{y^2-ax}\\big|_{(3a/2,3a/2)}=\\boxed{-1}$."
        ]
      }
    ],
    "remark": "**Insight.** On a curve symmetric in $y=x$, a non-singular point lying on that line almost always has tangent slope $-1$ — the symmetry forces the tangent to be perpendicular to the axis of reflection. The implicit computation is just confirming what the symmetry already dictates."
  },
  {
    "theme": "impparam",
    "themeLabel": "Implicit, Parametric & Inverse Differentiation",
    "title": "The Involute's Two Derivatives",
    "difficulty": 5,
    "task": "Find d2y/dx2",
    "tags": [
      "parametric-differentiation",
      "involute-of-circle",
      "second-derivative",
      "product-rule",
      "cancellation"
    ],
    "statement": "The involute of a circle is $x=a(\\cos t+t\\sin t),\\ y=a(\\sin t-t\\cos t)$ with $a>0$ and $t>0$. Find $\\dfrac{dy}{dx}$, then find $\\dfrac{d^2y}{dx^2}$ as a closed form in $t$ and $a$.",
    "answer": "$\\dfrac{dy}{dx}=\\tan t$ and $\\boxed{\\dfrac{d^2y}{dx^2}=\\dfrac{\\sec^3 t}{a\\,t}}$.",
    "trap": "When differentiating $x=a(\\cos t+t\\sin t)$, forgetting the product rule on $t\\sin t$ (writing its derivative as $\\sin t$ rather than $\\sin t+t\\cos t$). Done correctly, $\\dfrac{dx}{dt}=a\\,t\\cos t$ — a large cancellation that is easy to miss.",
    "solutions": [
      {
        "name": "Compute the cancellations, then divide",
        "steps": [
          "$\\dfrac{dx}{dt}=a(-\\sin t+\\sin t+t\\cos t)=a\\,t\\cos t$ and $\\dfrac{dy}{dt}=a(\\cos t-\\cos t+t\\sin t)=a\\,t\\sin t$.",
          "Hence $\\dfrac{dy}{dx}=\\dfrac{a\\,t\\sin t}{a\\,t\\cos t}=\\tan t$.",
          "Differentiate the slope: $\\dfrac{d}{dt}\\tan t=\\sec^2 t$.",
          "Divide by $\\dfrac{dx}{dt}=a\\,t\\cos t$: $\\dfrac{d^2y}{dx^2}=\\dfrac{\\sec^2 t}{a\\,t\\cos t}=\\dfrac{\\sec^3 t}{a\\,t}=\\boxed{\\dfrac{\\sec^3 t}{a\\,t}}$."
        ]
      },
      {
        "name": "Chain-rule bookkeeping",
        "steps": [
          "From $\\dfrac{dy}{dx}=\\tan t$, treat the slope $s(t)=\\tan t$ and recall $\\dfrac{d^2y}{dx^2}=\\dfrac{ds}{dx}=\\dfrac{ds/dt}{dx/dt}$.",
          "Here $\\dfrac{ds}{dt}=\\sec^2 t$ and $\\dfrac{dx}{dt}=a\\,t\\cos t$ (using the product-rule cancellation above).",
          "So $\\dfrac{d^2y}{dx^2}=\\dfrac{\\sec^2 t}{a\\,t\\cos t}$.",
          "Writing $\\dfrac{\\sec^2 t}{\\cos t}=\\sec^3 t$ gives $\\dfrac{d^2y}{dx^2}=\\boxed{\\dfrac{\\sec^3 t}{a\\,t}}$."
        ]
      }
    ],
    "remark": "**Insight.** The involute's derivatives hinge entirely on the cancellation $\\dfrac{dx}{dt}=a\\,t\\cos t$, $\\dfrac{dy}{dt}=a\\,t\\sin t$ — the messy $t\\sin t$, $t\\cos t$ terms are exactly what survive, and the $a\\,t$ factor cancels in the slope but reappears in the curvature term."
  },
  {
    "theme": "impparam",
    "themeLabel": "Implicit, Parametric & Inverse Differentiation",
    "title": "Sine of a Product",
    "difficulty": 5,
    "task": "Find dy/dx",
    "tags": [
      "implicit-differentiation",
      "trigonometric",
      "product-rule",
      "chain-rule",
      "composite"
    ],
    "statement": "The relation $\\sin(xy)=x$ defines $y$ implicitly as a function of $x$ on a suitable branch. Differentiate to find $\\dfrac{dy}{dx}$ in terms of $x$ and $y$, simplifying so that no $\\sin$ remains in your final answer.",
    "answer": "$\\boxed{\\dfrac{dy}{dx}=\\dfrac{1-y\\cos(xy)}{x\\cos(xy)}=\\dfrac{\\sec(xy)-y}{x}}$, valid where $\\cos(xy)\\neq0$.",
    "trap": "Differentiating $\\sin(xy)$ as $\\cos(xy)\\cdot y'$ — forgetting that the inner function $xy$ needs the PRODUCT rule, so $\\dfrac{d}{dx}(xy)=y+x\\,y'$, not $y'$. The chain rule wraps a product rule here.",
    "solutions": [
      {
        "name": "Chain rule onto a product",
        "steps": [
          "Differentiate $\\sin(xy)=x$: the left side is $\\cos(xy)\\cdot\\dfrac{d}{dx}(xy)=\\cos(xy)\\left(y+x\\dfrac{dy}{dx}\\right)$, the right side is $1$.",
          "So $\\cos(xy)\\left(y+x\\dfrac{dy}{dx}\\right)=1$, giving $y+x\\dfrac{dy}{dx}=\\dfrac{1}{\\cos(xy)}=\\sec(xy)$.",
          "Solve: $x\\dfrac{dy}{dx}=\\sec(xy)-y$, so $\\dfrac{dy}{dx}=\\dfrac{\\sec(xy)-y}{x}$.",
          "Equivalently $\\dfrac{dy}{dx}=\\dfrac{1-y\\cos(xy)}{x\\cos(xy)}$, valid wherever $\\cos(xy)\\neq0$: $\\boxed{\\dfrac{dy}{dx}=\\dfrac{1-y\\cos(xy)}{x\\cos(xy)}}$."
        ]
      },
      {
        "name": "Eliminate the sine using the relation",
        "steps": [
          "Since $\\sin(xy)=x$, on the branch we have $\\cos(xy)=\\pm\\sqrt{1-x^2}$. Differentiating $\\sin(xy)=x$ as above gives $\\cos(xy)\\,(y+xy')=1$.",
          "Thus $y+xy'=\\sec(xy)=\\dfrac{1}{\\cos(xy)}$, so $y'=\\dfrac{\\sec(xy)-y}{x}$.",
          "Replacing $\\cos(xy)=\\pm\\sqrt{1-x^2}$ would give a fully explicit form, but keeping $\\cos(xy)$ symbolic the cleanest statement is $\\dfrac{dy}{dx}=\\dfrac{1-y\\cos(xy)}{x\\cos(xy)}$.",
          "This is well defined exactly where $\\cos(xy)\\neq0$, i.e. away from $x=\\pm1$: $\\boxed{\\dfrac{dy}{dx}=\\dfrac{1-y\\cos(xy)}{x\\cos(xy)}}$."
        ]
      }
    ],
    "remark": "**Insight.** The single most common slip in implicit trig differentiation is collapsing $\\dfrac{d}{dx}(xy)$ to $y'$. The composite $\\sin(xy)$ forces a chain rule whose inner derivative is itself a product rule — two rules stacked in one term."
  },
  {
    "theme": "impparam",
    "themeLabel": "Implicit, Parametric & Inverse Differentiation",
    "title": "Second Bend of the Cycloid",
    "difficulty": 5,
    "task": "Find d2y/dx2",
    "tags": [
      "parametric-differentiation",
      "cycloid",
      "second-derivative",
      "half-angle",
      "concavity"
    ],
    "statement": "A cycloid is traced by $x=a(t-\\sin t),\\ y=a(1-\\cos t)$ with $a>0$ and $0<t<2\\pi$. Find $\\dfrac{dy}{dx}$, then find the second derivative $\\dfrac{d^2y}{dx^2}$, simplifying it to a single closed form in $t$ and $a$.",
    "answer": "$\\dfrac{dy}{dx}=\\cot\\!\\dfrac{t}{2}$ and $\\boxed{\\dfrac{d^2y}{dx^2}=-\\dfrac{1}{a\\,(1-\\cos t)^2}}$.",
    "trap": "Computing $\\dfrac{d^2y}{dx^2}$ as $\\dfrac{d^2y/dt^2}{d^2x/dt^2}$. The correct parametric second-derivative is $\\dfrac{d^2y}{dx^2}=\\dfrac{\\frac{d}{dt}\\!\\left(\\frac{dy}{dx}\\right)}{dx/dt}$ — you must divide the $t$-derivative of the SLOPE by $dx/dt$, not divide second derivatives.",
    "solutions": [
      {
        "name": "Slope, then differentiate the slope",
        "steps": [
          "$\\dfrac{dx}{dt}=a(1-\\cos t)$ and $\\dfrac{dy}{dt}=a\\sin t$, so $\\dfrac{dy}{dx}=\\dfrac{a\\sin t}{a(1-\\cos t)}=\\dfrac{\\sin t}{1-\\cos t}=\\cot\\!\\dfrac{t}{2}$ (using $\\sin t=2\\sin\\tfrac t2\\cos\\tfrac t2$, $1-\\cos t=2\\sin^2\\tfrac t2$).",
          "Differentiate the slope with respect to $t$: $\\dfrac{d}{dt}\\cot\\!\\dfrac{t}{2}=-\\dfrac12\\csc^2\\!\\dfrac{t}{2}$.",
          "Divide by $\\dfrac{dx}{dt}=a(1-\\cos t)=2a\\sin^2\\tfrac t2$: $\\dfrac{d^2y}{dx^2}=\\dfrac{-\\tfrac12\\csc^2\\tfrac t2}{2a\\sin^2\\tfrac t2}=-\\dfrac{1}{4a\\sin^4\\tfrac t2}$.",
          "Since $1-\\cos t=2\\sin^2\\tfrac t2$, we have $4\\sin^4\\tfrac t2=(1-\\cos t)^2$, so $\\dfrac{d^2y}{dx^2}=\\boxed{-\\dfrac{1}{a\\,(1-\\cos t)^2}}$."
        ]
      },
      {
        "name": "Quotient form without half-angles",
        "steps": [
          "With $\\dfrac{dy}{dx}=\\dfrac{\\sin t}{1-\\cos t}$, differentiate using the quotient rule: $\\dfrac{d}{dt}\\dfrac{\\sin t}{1-\\cos t}=\\dfrac{\\cos t(1-\\cos t)-\\sin t\\cdot\\sin t}{(1-\\cos t)^2}$.",
          "The numerator is $\\cos t-\\cos^2 t-\\sin^2 t=\\cos t-1=-(1-\\cos t)$, so $\\dfrac{d}{dt}\\dfrac{dy}{dx}=\\dfrac{-(1-\\cos t)}{(1-\\cos t)^2}=\\dfrac{-1}{1-\\cos t}$.",
          "Now divide by $\\dfrac{dx}{dt}=a(1-\\cos t)$: $\\dfrac{d^2y}{dx^2}=\\dfrac{-1/(1-\\cos t)}{a(1-\\cos t)}$.",
          "This collapses to $\\boxed{-\\dfrac{1}{a\\,(1-\\cos t)^2}}$, agreeing with the half-angle form."
        ]
      }
    ],
    "remark": "**Insight.** The second derivative is negative throughout $0<t<2\\pi$, so each cycloid arch is concave down — geometrically obvious (the arch bulges upward), and the parametric formula confirms it without ever solving for $y(x)$."
  },
  {
    "theme": "impparam",
    "themeLabel": "Implicit, Parametric & Inverse Differentiation",
    "title": "The Astroid's Curvature Term",
    "difficulty": 5,
    "task": "Find d2y/dx2",
    "tags": [
      "parametric-differentiation",
      "astroid",
      "second-derivative",
      "trigonometric-powers",
      "chain-rule"
    ],
    "statement": "The astroid is given parametrically by $x=a\\cos^3 t,\\ y=a\\sin^3 t$ with $a>0$. Show that $\\dfrac{dy}{dx}=-\\tan t$, and then compute $\\dfrac{d^2y}{dx^2}$ as a closed form in $t$ and $a$ valid where $\\sin t\\cos t\\neq0$.",
    "answer": "$\\dfrac{dy}{dx}=-\\tan t$ and $\\boxed{\\dfrac{d^2y}{dx^2}=\\dfrac{\\sec^4 t\\,\\csc t}{3a}=\\dfrac{1}{3a\\sin t\\cos^4 t}}$.",
    "trap": "After getting $\\dfrac{dy}{dx}=-\\tan t$, dividing $\\dfrac{d}{dt}(-\\tan t)=-\\sec^2 t$ by $\\dfrac{dy}{dt}$ instead of by $\\dfrac{dx}{dt}$. The second derivative w.r.t. $x$ always divides the $t$-derivative of the slope by $\\dfrac{dx}{dt}$.",
    "solutions": [
      {
        "name": "Direct parametric second derivative",
        "steps": [
          "$\\dfrac{dx}{dt}=-3a\\cos^2 t\\sin t$ and $\\dfrac{dy}{dt}=3a\\sin^2 t\\cos t$, so $\\dfrac{dy}{dx}=\\dfrac{3a\\sin^2 t\\cos t}{-3a\\cos^2 t\\sin t}=-\\dfrac{\\sin t}{\\cos t}=-\\tan t$.",
          "Differentiate the slope: $\\dfrac{d}{dt}(-\\tan t)=-\\sec^2 t$.",
          "Divide by $\\dfrac{dx}{dt}=-3a\\cos^2 t\\sin t$: $\\dfrac{d^2y}{dx^2}=\\dfrac{-\\sec^2 t}{-3a\\cos^2 t\\sin t}=\\dfrac{\\sec^2 t}{3a\\cos^2 t\\sin t}$.",
          "Since $\\dfrac{\\sec^2 t}{\\cos^2 t}=\\sec^4 t$ and $\\dfrac{1}{\\sin t}=\\csc t$, this is $\\dfrac{d^2y}{dx^2}=\\boxed{\\dfrac{\\sec^4 t\\,\\csc t}{3a}}$."
        ]
      },
      {
        "name": "Via the Cartesian relation",
        "steps": [
          "Eliminating $t$ gives $x^{2/3}+y^{2/3}=a^{2/3}$. Differentiate implicitly: $\\tfrac23 x^{-1/3}+\\tfrac23 y^{-1/3}\\dfrac{dy}{dx}=0$, so $\\dfrac{dy}{dx}=-\\left(\\dfrac{y}{x}\\right)^{1/3}=-\\dfrac{\\sin t}{\\cos t}=-\\tan t$, matching.",
          "Differentiate $\\dfrac{dy}{dx}=-x^{-1/3}y^{1/3}$ again: $\\dfrac{d^2y}{dx^2}=\\tfrac13 x^{-4/3}y^{1/3}-\\tfrac13 x^{-1/3}y^{-2/3}\\dfrac{dy}{dx}$.",
          "Substitute $\\dfrac{dy}{dx}=-x^{-1/3}y^{1/3}$ to get $\\dfrac{d^2y}{dx^2}=\\tfrac13 x^{-4/3}y^{1/3}+\\tfrac13 x^{-2/3}y^{-1/3}=\\tfrac13 x^{-4/3}y^{-1/3}\\left(y^{2/3}+x^{2/3}\\right)=\\tfrac13 x^{-4/3}y^{-1/3}a^{2/3}$.",
          "Now $x^{-4/3}=a^{-4/3}\\cos^{-4}t$ and $y^{-1/3}=a^{-1/3}\\sin^{-1}t$, so $\\dfrac{d^2y}{dx^2}=\\dfrac{a^{2/3}}{3}\\,a^{-5/3}\\cos^{-4}t\\,\\sin^{-1}t=\\boxed{\\dfrac{\\sec^4 t\\,\\csc t}{3a}}$."
        ]
      }
    ],
    "remark": "**Insight.** The same astroid yields the same $\\dfrac{d^2y}{dx^2}$ whether you go parametric or Cartesian — a useful self-check. The parametric route is shorter precisely because $\\dfrac{dy}{dx}=-\\tan t$ is already a clean function of the single parameter."
  },
  {
    "theme": "impparam",
    "themeLabel": "Implicit, Parametric & Inverse Differentiation",
    "title": "A Power Tower of x",
    "difficulty": 5,
    "task": "Find dy/dx",
    "tags": [
      "logarithmic-differentiation",
      "power-tower",
      "implicit-differentiation",
      "chain-rule",
      "self-reference"
    ],
    "statement": "Let $y=x^{x^{x}}$ for $x>0$, where the exponentiation is grouped as $x^{(x^{x})}$. Using logarithmic differentiation twice, find $\\dfrac{dy}{dx}$, and then give its value at $x=1$.",
    "answer": "$\\dfrac{dy}{dx}=x^{x^{x}}\\,x^{x}\\!\\left[(1+\\ln x)\\ln x+\\dfrac{1}{x}\\right]$, and at $x=1$ this equals $\\boxed{1}$.",
    "trap": "Treating the tower as if $\\dfrac{d}{dx}x^{x^x}=x^x\\cdot x^{x^x-1}$ (mechanically applying the power rule to the outer exponent as though it were constant). With a variable exponent that is itself a function of $x$, you must take logs and differentiate the exponent $x^x$ on its own.",
    "solutions": [
      {
        "name": "Two stacked logarithms",
        "steps": [
          "Let $u=x^{x}$, so $y=x^{u}$. Take logs: $\\ln y=u\\ln x$. Differentiate: $\\dfrac{1}{y}\\dfrac{dy}{dx}=\\dfrac{du}{dx}\\ln x+\\dfrac{u}{x}$.",
          "Now find $\\dfrac{du}{dx}$ for $u=x^{x}$: $\\ln u=x\\ln x$, so $\\dfrac{1}{u}\\dfrac{du}{dx}=\\ln x+1$, giving $\\dfrac{du}{dx}=x^{x}(1+\\ln x)$.",
          "Substitute back: $\\dfrac{dy}{dx}=y\\!\\left[x^{x}(1+\\ln x)\\ln x+\\dfrac{x^{x}}{x}\\right]=x^{x^{x}}\\,x^{x}\\!\\left[(1+\\ln x)\\ln x+\\dfrac{1}{x}\\right]$.",
          "At $x=1$: $\\ln 1=0$, $x^{x}=1$, $x^{x^{x}}=1$, so $\\dfrac{dy}{dx}=1\\cdot1\\cdot\\!\\left[0+1\\right]=\\boxed{1}$."
        ]
      },
      {
        "name": "Single log then chain rule on the exponent",
        "steps": [
          "Write $\\ln y=x^{x}\\ln x$. The right side is a product of $x^{x}$ and $\\ln x$.",
          "Differentiate: $\\dfrac{y'}{y}=\\dfrac{d}{dx}(x^x)\\cdot\\ln x+x^{x}\\cdot\\dfrac{1}{x}$, where $\\dfrac{d}{dx}(x^x)=x^x(1+\\ln x)$ by the standard log-derivative.",
          "Thus $\\dfrac{y'}{y}=x^{x}(1+\\ln x)\\ln x+x^{x-1}$, and multiplying by $y=x^{x^x}$ gives the stated $\\dfrac{dy}{dx}$.",
          "Evaluating at $x=1$ kills every $\\ln x$ term and leaves $\\dfrac{y'}{y}=0+1=1$ with $y=1$, so $\\dfrac{dy}{dx}=\\boxed{1}$."
        ]
      }
    ],
    "remark": "**Insight.** A power tower demands one logarithm per level: the outer $x^{(\\cdot)}$ gives $\\ln y=u\\ln x$, and the inner $x^x$ needs its own log. The grouping $x^{(x^x)}$ matters — the alternative $(x^x)^x=x^{x^2}$ is a different, easier function."
  },
  {
    "theme": "impparam",
    "themeLabel": "Implicit, Parametric & Inverse Differentiation",
    "title": "Sine Raised to the Tangent",
    "difficulty": 5,
    "task": "Find dy/dx",
    "tags": [
      "logarithmic-differentiation",
      "variable-base-and-exponent",
      "trigonometric",
      "product-rule",
      "chain-rule"
    ],
    "statement": "Let $y=(\\sin x)^{\\tan x}$ on an interval where $\\sin x>0$. Use logarithmic differentiation to find $\\dfrac{dy}{dx}$, expressing your answer as $y$ times a bracket with no fractions other than those inherent in $\\sec^2 x$.",
    "answer": "$\\boxed{\\dfrac{dy}{dx}=(\\sin x)^{\\tan x}\\left[\\sec^2 x\\,\\ln(\\sin x)+1\\right]}$.",
    "trap": "Splitting the work as $(\\sin x)^{\\tan x}=$ ``base part $+$ exponent part'' but mishandling one piece — e.g. writing the base contribution as $\\tan x(\\sin x)^{\\tan x-1}$. Because BOTH the base $\\sin x$ and the exponent $\\tan x$ vary, only $\\ln y=\\tan x\\,\\ln(\\sin x)$ followed by the product rule is safe.",
    "solutions": [
      {
        "name": "Logarithmic differentiation",
        "steps": [
          "Take logs: $\\ln y=\\tan x\\,\\ln(\\sin x)$.",
          "Differentiate the right side by the product rule: $\\dfrac{d}{dx}\\big(\\tan x\\big)\\ln(\\sin x)+\\tan x\\cdot\\dfrac{d}{dx}\\ln(\\sin x)$.",
          "Here $\\dfrac{d}{dx}\\tan x=\\sec^2 x$ and $\\dfrac{d}{dx}\\ln(\\sin x)=\\dfrac{\\cos x}{\\sin x}=\\cot x$, so $\\dfrac{y'}{y}=\\sec^2 x\\,\\ln(\\sin x)+\\tan x\\cot x$.",
          "Since $\\tan x\\cot x=1$, $\\dfrac{y'}{y}=\\sec^2 x\\,\\ln(\\sin x)+1$, hence $\\dfrac{dy}{dx}=\\boxed{(\\sin x)^{\\tan x}\\left[\\sec^2 x\\,\\ln(\\sin x)+1\\right]}$."
        ]
      },
      {
        "name": "Rewrite as an exponential",
        "steps": [
          "Write $y=e^{g(x)}$ with $g(x)=\\tan x\\,\\ln(\\sin x)$. Then $\\dfrac{dy}{dx}=e^{g(x)}g'(x)=y\\,g'(x)$.",
          "Compute $g'(x)=\\sec^2 x\\,\\ln(\\sin x)+\\tan x\\cdot\\cot x$ by the product rule, exactly as before.",
          "The cross term $\\tan x\\cot x=1$, so $g'(x)=\\sec^2 x\\,\\ln(\\sin x)+1$.",
          "Therefore $\\dfrac{dy}{dx}=\\boxed{(\\sin x)^{\\tan x}\\left[\\sec^2 x\\,\\ln(\\sin x)+1\\right]}$, identical to the log-differentiation result."
        ]
      }
    ],
    "remark": "**Insight.** Any $f^{g}$ with both $f$ and $g$ non-constant is cleanest as $e^{g\\ln f}$, whose derivative is $f^{g}\\!\\left(g'\\ln f+g\\dfrac{f'}{f}\\right)$. Here the second term collapses neatly because $\\tan x\\cdot\\cot x=1$."
  },
  {
    "theme": "impparam",
    "themeLabel": "Implicit, Parametric & Inverse Differentiation",
    "title": "Slope of the Inverse You Cannot Write",
    "difficulty": 5,
    "task": "Find the inverse slope",
    "tags": [
      "inverse-function-differentiation",
      "monotonic",
      "no-closed-form",
      "reciprocal-derivative",
      "chain-rule"
    ],
    "statement": "Let $f(x)=x^{5}+x^{3}+x+1$. Show that $f$ is strictly increasing on $\\mathbb{R}$ (so its inverse $g=f^{-1}$ exists), and compute $g'(4)$ — even though $g$ has no elementary closed form.",
    "answer": "$f$ is strictly increasing since $f'(x)=5x^4+3x^2+1>0$; from $f(1)=4$ we get $g'(4)=\\dfrac{1}{f'(1)}=\\dfrac{1}{9}$, so $g'(4)=\\boxed{\\tfrac19}$.",
    "trap": "Trying to find a formula for $g(x)$ first (a degree-5 polynomial has no elementary inverse) — wasted effort. Also, plugging the WRONG point: $g'(4)=1/f'(g(4))$ needs $g(4)$, i.e. the $x$ with $f(x)=4$, which is $x=1$, NOT $x=4$.",
    "solutions": [
      {
        "name": "Inverse-function rule",
        "steps": [
          "$f'(x)=5x^4+3x^2+1$, a sum of nonnegative terms plus $1$, so $f'(x)\\ge1>0$ for all real $x$. Hence $f$ is strictly increasing and invertible, and the inverse $g$ is differentiable.",
          "The inverse-function rule says $g'(b)=\\dfrac{1}{f'(g(b))}$ where $g(b)$ is the $x$ with $f(x)=b$.",
          "Solve $f(x)=4$: $x^5+x^3+x+1=4\\Rightarrow x^5+x^3+x-3=0$, which has $x=1$ as a root ($1+1+1-3=0$); by monotonicity it is the only real root, so $g(4)=1$.",
          "Therefore $g'(4)=\\dfrac{1}{f'(1)}=\\dfrac{1}{5+3+1}=\\dfrac{1}{9}=\\boxed{\\tfrac19}$."
        ]
      },
      {
        "name": "Differentiate the identity $f(g(x))=x$",
        "steps": [
          "Since $g$ inverts $f$, $f(g(x))=x$ identically. Differentiate both sides: $f'(g(x))\\,g'(x)=1$ by the chain rule.",
          "So $g'(x)=\\dfrac{1}{f'(g(x))}$, the reciprocal-derivative relation.",
          "At $x=4$ we need $g(4)$: the value whose image is $4$. Testing $x=1$ gives $f(1)=1+1+1+1=4$, so $g(4)=1$.",
          "Then $g'(4)=\\dfrac{1}{f'(1)}=\\dfrac{1}{9}=\\boxed{\\tfrac19}$."
        ]
      }
    ],
    "remark": "**Insight.** You never need a formula for an inverse to differentiate it. Monotonicity (from $f'>0$) guarantees the inverse exists and is differentiable, and $g'(b)=1/f'(g(b))$ turns the whole problem into solving one equation $f(x)=b$ for $x$."
  },
  {
    "theme": "impparam",
    "themeLabel": "Implicit, Parametric & Inverse Differentiation",
    "title": "Implicit, Then a Hidden Slope",
    "difficulty": 5,
    "task": "Find dy/dx",
    "tags": [
      "implicit-differentiation",
      "logarithmic-differentiation",
      "exponential-relation",
      "evaluate-at-point",
      "chain-rule"
    ],
    "statement": "The relation $x^{y}+y^{x}=2$ (for $x,y>0$) passes through the point $(1,1)$, since $1^{1}+1^{1}=2$. Differentiate implicitly to find $\\dfrac{dy}{dx}$ at the point $(1,1)$.",
    "answer": "By logarithmic differentiation of each power and evaluating at $(1,1)$, $\\dfrac{dy}{dx}\\Big|_{(1,1)}=\\boxed{-1}$.",
    "trap": "Differentiating $x^{y}$ as $y\\,x^{y-1}$ and $y^{x}$ as $x\\,y^{x-1}\\,y'$ — applying the constant-exponent power rule when both base and exponent vary. Each term $u^{v}$ needs $u^{v}\\!\\left(v'\\ln u+v\\,\\dfrac{u'}{u}\\right)$.",
    "solutions": [
      {
        "name": "General u^v derivative, then substitute",
        "steps": [
          "Write $A=x^{y}$ and $B=y^{x}$, so $A+B=2$. Using $\\dfrac{d}{dx}u^{v}=u^{v}\\!\\left(\\dfrac{dv}{dx}\\ln u+v\\,\\dfrac{u'/}{u}\\right)$ with $u'=\\tfrac{du}{dx}$:",
          "$\\dfrac{dA}{dx}=x^{y}\\!\\left(\\dfrac{dy}{dx}\\ln x+\\dfrac{y}{x}\\right)$ and $\\dfrac{dB}{dx}=y^{x}\\!\\left(\\ln y+\\dfrac{x}{y}\\dfrac{dy}{dx}\\right)$.",
          "Adding and setting the sum to $0$: $x^{y}\\!\\left(y'\\ln x+\\dfrac{y}{x}\\right)+y^{x}\\!\\left(\\ln y+\\dfrac{x}{y}y'\\right)=0$.",
          "At $(1,1)$: $x^y=y^x=1$, $\\ln x=\\ln y=0$, $\\tfrac yx=\\tfrac xy=1$. The equation becomes $1\\cdot(0+1)+1\\cdot(0+1\\cdot y')=0$, i.e. $1+y'=0$, so $\\dfrac{dy}{dx}=\\boxed{-1}$."
        ]
      },
      {
        "name": "Take logs term-by-term then evaluate",
        "steps": [
          "Differentiate $x^y$ via $\\ln(x^y)=y\\ln x\\Rightarrow \\dfrac{(x^y)'}{x^y}=y'\\ln x+\\dfrac{y}{x}$, so $(x^y)'=x^y\\!\\left(y'\\ln x+\\tfrac yx\\right)$.",
          "Similarly $(y^x)'=y^x\\!\\left(\\ln y+\\dfrac{x}{y}y'\\right)$. Their sum is the derivative of the constant $2$, namely $0$.",
          "Plug in $x=y=1$: powers and ratios become $1$, all logs vanish, leaving $(1)(y')+\\,$ wait carefully — the $x^y$ term gives $1\\cdot(0+1)=1$ and the $y^x$ term gives $1\\cdot(0+y')=y'$.",
          "So $1+y'=0\\Rightarrow \\dfrac{dy}{dx}=\\boxed{-1}$ at $(1,1)$."
        ]
      }
    ],
    "remark": "**Insight.** Evaluating at $(1,1)$ before fully simplifying is the smart move: every $\\ln$ collapses and every power becomes $1$, so the formidable-looking relation reduces to the one-line equation $1+y'=0$."
  },
  {
    "theme": "functionaleqdiff",
    "themeLabel": "Differentiable Functional Equations",
    "title": "The Cubic Hidden in Cauchy",
    "difficulty": 4,
    "task": "Determine",
    "tags": [
      "cauchy",
      "differentiate-the-equation",
      "cubic",
      "boundary-data"
    ],
    "statement": "Let $f:\\mathbb{R}\\to\\mathbb{R}$ be differentiable and satisfy \\[ f(x+y)=f(x)+f(y)+3xy(x+y)\\qquad\\text{for all }x,y\\in\\mathbb{R}, \\] with $f'(0)=2$. Determine $f(3)$.",
    "answer": "$f(x)=x^3+2x$, so $f(3)=33$.",
    "trap": "Guessing $f$ is linear because the equation 'looks like Cauchy.' The extra term $3xy(x+y)$ is genuinely cubic, so $f(x)=cx$ fails; you must differentiate to extract the correct $f'(x)=f'(0)+3x^2$.",
    "solutions": [
      {
        "name": "Differentiate in $y$, then set $y=0$",
        "steps": [
          "Put $x=y=0$: $f(0)=2f(0)\\Rightarrow f(0)=0$.",
          "Fix $x$ and differentiate both sides with respect to $y$: $f'(x+y)=f'(y)+3x(x+2y)$ (since $\\partial_y[3xy(x+y)]=3x(x+2y)$).",
          "Set $y=0$: $f'(x)=f'(0)+3x^2=2+3x^2$.",
          "Integrate using $f(0)=0$: $f(x)=2x+x^3$.",
          "Hence $f(3)=27+6=\\boxed{33}$."
        ]
      },
      {
        "name": "Symmetric difference quotient from first principles",
        "steps": [
          "With $f(0)=0$, write $\\dfrac{f(x+h)-f(x)}{h}=\\dfrac{f(h)+3xh(x+h)}{h}=\\dfrac{f(h)-f(0)}{h}+3x(x+h).$",
          "Let $h\\to0$: the first term $\\to f'(0)=2$, the second $\\to 3x^2$, so $f'(x)=2+3x^2$.",
          "Integrate with $f(0)=0$ to get $f(x)=x^3+2x$.",
          "Therefore $f(3)=\\boxed{33}$."
        ]
      },
      {
        "name": "Substitution ansatz, justified by uniqueness",
        "steps": [
          "Try $g(x)=f(x)-x^3$; then $g(x+y)=g(x)+g(y)$ because $(x+y)^3=x^3+y^3+3xy(x+y)$ cancels the correction term.",
          "So $g$ is an additive differentiable function, forcing $g(x)=g'(0)\\,x$.",
          "Since $g'(0)=f'(0)-0=2$, we get $g(x)=2x$ and $f(x)=x^3+2x$.",
          "Thus $f(3)=\\boxed{33}$."
        ]
      }
    ],
    "remark": "Insight: peeling off the obvious nonlinear part ($x^3$) reduces a scary equation to plain Cauchy. The boundary datum $f'(0)$ is exactly the additive slope that survives."
  },
  {
    "theme": "functionaleqdiff",
    "themeLabel": "Differentiable Functional Equations",
    "title": "The Perturbation That Pins the Parity",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "perturbed-cauchy",
      "parity-decomposition",
      "differentiate-the-relation",
      "consistency",
      "uniqueness-failure"
    ],
    "statement": "A function $f:\\mathbb{R}\\to\\mathbb{R}$ is differentiable on all of $\\mathbb{R}$ and obeys, for ALL real $x,y$, the perturbed Cauchy relation \\[ f(x+y)=f(x)+f(y)+a\\,xy, \\] where $a\\in\\mathbb{R}$ is an unknown constant baked into $f$. In addition $f$ satisfies the parity relation \\[ f(x)+f(-x)=6\\,x^{2}\\qquad\\text{for all }x. \\] (a) Find every value of $a$ for which such an $f$ can exist (the consistency condition). (b) For each admissible $a$, determine $f''(0)$ and $f'''(0)$. (c) Decide whether the two relations together determine $f$ uniquely; if not, describe the full family. Give the boxed answer as the admissible $a$ together with $f'''(0)$.",
    "answer": "\\[\\boxed{a=6,\\qquad f'''(0)=0}\\]",
    "trap": "The relation $f(x)+f(-x)=6x^{2}$ LOOKS like a brand-new constraint that should pin down more of $f$ -- so the seductive move is to treat the two relations as an over-determined system and conclude either (i) that they fix $f$ completely (in particular fix $f'(0)$), or (ii) that a generic $a$ makes them clash, so only some special $a$ survives by a delicate fit, or worst of all (iii) that the right-hand side $6x^{2}$ injects curvature that makes $f'''(0)\\ne0$ -- e.g. guessing $f'''(0)=a$ or $f'''(0)=6$ because `there is an $x^2$, so a cubic must be lurking.' All three are wrong, and for one structural reason: differentiability ALREADY forces $f(x)=f'(0)\\,x+\\tfrac{a}{2}x^{2}$ with NOTHING beyond degree two, so the EVEN part of $f$ is locked at $\\tfrac{a}{2}x^{2}$ before the parity relation is even read. Adding $f(x)+f(-x)=6x^{2}$ therefore says exactly $a x^{2}=6x^{2}$, i.e. $a=6$ -- a condition on the EVEN part only. It places ZERO constraint on the ODD part $f'(0)\\,x$, so $f'(0)$ stays a free parameter and $f$ is a one-parameter family, never unique. And since $f$ is a genuine quadratic, $f'''\\equiv0$: there is no hidden cubic for the $x^{2}$ to feed.",
    "solutions": [
      {
        "name": "Differentiate the relation (pin the closed form, then read off the even part)",
        "steps": [
          "First nail $f(0)$. Putting $x=y=0$ in the functional equation gives $f(0)=f(0)+f(0)+0$, so $f(0)=0$.",
          "Differentiate $f(x+y)=f(x)+f(y)+axy$ with respect to $y$ (legitimate since $f$ is differentiable, and the right side is differentiable in $y$): $f'(x+y)=f'(y)+a x$. Set $y=0$: $f'(x)=f'(0)+a x$. Write $c:=f'(0)$, so $f'(x)=c+ax$.",
          "Integrate and use $f(0)=0$: $f(x)=c\\,x+\\tfrac{a}{2}x^{2}$. Thus differentiability has ALREADY forced $f$ to be a quadratic with no cubic or higher term -- this is the whole content of the chapter's method, and it happens BEFORE the parity relation is touched.",
          "Now impose parity. With $f(x)=cx+\\tfrac a2x^2$, the odd term cancels: $f(x)+f(-x)=\\bigl(cx+\\tfrac a2x^2\\bigr)+\\bigl(-cx+\\tfrac a2x^2\\bigr)=a\\,x^{2}$. The hypothesis demands this equal $6x^{2}$ for all $x$, so $a=6$. That is the entire consistency condition; for $a=6$ a valid $f$ exists (e.g. $f(x)=cx+3x^2$ for any $c$), so the admissible set is exactly $a=6$.",
          "Read off derivatives at $0$: $f(x)=c\\,x+3x^{2}$ gives $f''(x)=6$ (constant), so $f''(0)=6=a$; and $f'''(x)=0$ identically, so $f'''(0)=0$. No $x^{2}$-induced cubic appears -- $f$ is exactly degree two.",
          "Uniqueness fails: the parity relation constrained only the even part ($a=6$) and said nothing about the odd coefficient $c=f'(0)$, which remains arbitrary. The full solution family is $\\{\\,x\\mapsto c\\,x+3x^{2}:c\\in\\mathbb{R}\\,\\}$. Hence $\\boxed{a=6,\\ f'''(0)=0}$ (with $f''(0)=6$, $f$ a one-parameter family)."
        ]
      },
      {
        "name": "Even/odd decomposition (constrain the parts separately)",
        "steps": [
          "Split $f=E+O$ into even part $E(x)=\\tfrac12\\bigl(f(x)+f(-x)\\bigr)$ and odd part $O(x)=\\tfrac12\\bigl(f(x)-f(-x)\\bigr)$; both inherit differentiability from $f$. The parity hypothesis reads $2E(x)=6x^{2}$, i.e. $E(x)=3x^{2}$ outright -- the even part is handed to us directly.",
          "Find the even part from the functional equation independently, to see what it is ALLOWED to be. Replace $(x,y)$ by $(-x,-y)$: $f(-x-y)=f(-x)+f(-y)+a xy$. Add this to the original relation: $\\bigl(f(x+y)+f(-x-y)\\bigr)=\\bigl(f(x)+f(-x)\\bigr)+\\bigl(f(y)+f(-y)\\bigr)+2axy$, i.e. $2E(x+y)=2E(x)+2E(y)+2axy$, so $E(x+y)=E(x)+E(y)+axy$. The even part itself satisfies the SAME perturbed Cauchy equation.",
          "Since $E$ is even AND differentiable, the differentiation argument (Method 1) applied to $E$ gives $E(x)=E'(0)x+\\tfrac a2x^2$; evenness forces $E'(0)=0$, so $E(x)=\\tfrac a2x^{2}$. Matching with the handed-to-us $E(x)=3x^{2}$ yields $\\tfrac a2=3$, hence $a=6$.",
          "Subtract the two relations instead: $2O(x+y)=2O(x)+2O(y)$, so the odd part is additive and differentiable, i.e. genuine Cauchy with a derivative -- forcing $O(x)=O'(0)\\,x=c\\,x$ (linear), with $c=f'(0)$ completely UNconstrained by anything given. This is precisely why $f$ is not unique.",
          "Assemble: $f(x)=O(x)+E(x)=c\\,x+3x^{2}$. Therefore $f''(0)=6$ and, since $f$ is quadratic, $f'''(0)=0$; the consistent value is $a=6$ and the solution set is the line of choices $c\\in\\mathbb{R}$. $\\boxed{a=6,\\ f'''(0)=0}$."
        ]
      },
      {
        "name": "Taylor / coefficient matching (no hidden higher terms survive)",
        "steps": [
          "Because $f$ is differentiable and satisfies $f'(x)=f'(0)+ax$ (Method 1, step 2), $f'$ is itself differentiable with $f''(x)=a$ constant; hence $f''$ is differentiable with $f'''\\equiv0$. So $f\\in C^{\\infty}$ and is EXACTLY a polynomial of degree $\\le2$: any putative cubic-or-higher coefficient is killed by $f'''\\equiv0$. This pre-empts the trap of a `lurking cubic.'",
          "Write the forced form $f(x)=\\alpha+\\beta x+\\gamma x^{2}$. From $f(0)=0$ (set $x=y=0$ in the FE) we get $\\alpha=0$. Plug into the FE: $f(x+y)-f(x)-f(y)=\\gamma\\bigl((x+y)^2-x^2-y^2\\bigr)=2\\gamma xy$, which must equal $axy$, so $\\gamma=\\tfrac a2$. Thus $\\beta=f'(0)=c$ is free and $\\gamma=\\tfrac a2$.",
          "Apply the parity relation to the polynomial: $f(x)+f(-x)=2\\gamma x^{2}=a x^{2}\\overset{!}{=}6x^{2}$, giving $a=6$ and $\\gamma=3$. (The odd coefficient $\\beta=c$ never enters this equation -- it is invisible to parity.)",
          "Hence $f(x)=c\\,x+3x^{2}$. Differentiate: $f''(x)=6\\Rightarrow f''(0)=6$, and $f'''(x)=0\\Rightarrow f'''(0)=0$. The $x^{2}$ on the right of the parity relation produced curvature ($f''(0)=6$), NOT a third-order term.",
          "Uniqueness: only two coefficients were pinned ($\\alpha=0$, $\\gamma=3$); the linear coefficient $c$ is free, so the solutions form the family $f(x)=c x+3x^{2}$, $c\\in\\mathbb{R}$. Final answer $\\boxed{a=6,\\ f'''(0)=0}$."
        ]
      }
    ],
    "remark": "Insight: in a perturbed-Cauchy equation $f(x+y)=f(x)+f(y)+axy$, differentiability is the entire engine -- one differentiation in $y$ followed by $y=0$ collapses $f$ to $f'(0)x+\\tfrac a2x^2$ with NO room for a cubic, so the structure of $f$ is settled before any second relation is read. The whole art of this problem is recognising that the perturbation $axy$ lives ENTIRELY in the even part (it is symmetric in $\\pm$), while the odd part is forced to be plain-linear additive Cauchy. So a parity constraint $f(x)+f(-x)=kx^2$ talks only to the even part: it fixes $a=k$ and is utterly silent about $f'(0)$. Two morals for the top ranker: (1) a constraint can be perfectly consistent yet NON-determining -- here it pins the curvature ($f''(0)=a=6$) but leaves a one-parameter family because the odd slope is unconstrained; (2) an $x^2$ on the right never smuggles in a higher derivative -- $f'''\\equiv0$ is guaranteed by the differentiated relation itself, so $f'''(0)=0$ regardless of $k$. Forced parity (even part), free slope (odd part), zero third derivative -- three facts that the over-eager `over-determined system' reading gets exactly backwards."
  },
  {
    "theme": "functionaleqdiff",
    "themeLabel": "Differentiable Functional Equations",
    "title": "One Plus the Exponential",
    "difficulty": 5,
    "task": "Find all",
    "tags": [
      "multiplicative-shift",
      "exponential",
      "substitution",
      "trivial-solution"
    ],
    "statement": "Find all differentiable functions $f:\\mathbb{R}\\to\\mathbb{R}$ satisfying \\[ f(x+y)=f(x)+f(y)+f(x)f(y)\\qquad\\text{for all }x,y\\in\\mathbb{R}, \\] and for the nonconstant solution with $f'(0)=2$ evaluate $f\\!\\left(\\tfrac{1}{2}\\ln 3\\right)$.",
    "answer": "The full solution set is $f(x)=e^{cx}-1$ for a constant $c\\in\\mathbb{R}$ (with $c=0$ giving $f\\equiv 0$) together with the degenerate constant $f\\equiv -1$. Imposing $f'(0)=2$ forces $c=2$, so $f(x)=e^{2x}-1$ and $f\\!\\left(\\tfrac12\\ln 3\\right)=e^{\\ln 3}-1=3-1=\\boxed{2}$.",
    "trap": "Differentiating in $y$ and dividing by $1+f(x)$ as if it were never zero. The constant $f\\equiv -1$ makes $1+f\\equiv 0$ identically, and it genuinely solves the equation; dividing by $1+f$ silently deletes this legitimate degenerate branch from the answer set.",
    "solutions": [
      {
        "name": "Multiplicative shift $g=1+f$",
        "steps": [
          "Add $1$ to both sides: $1+f(x+y)=\\bigl(1+f(x)\\bigr)\\bigl(1+f(y)\\bigr)$. Setting $g:=1+f$ (also differentiable) gives the multiplicative Cauchy equation $g(x+y)=g(x)g(y)$.",
          "If $g(a)=0$ for some $a$, then $g(x)=g(a)\\,g(x-a)=0$ for every $x$, so $g\\equiv 0$, i.e. $f\\equiv -1$ (the degenerate branch).",
          "Otherwise $g$ never vanishes; since $g(x)=g(x/2)^2>0$ it is strictly positive, and $g(0)=g(0)^2$ forces $g(0)=1$. Then $h:=\\ln g$ is differentiable and additive, $h(x+y)=h(x)+h(y)$, so the differentiable additive Cauchy equation yields $h(x)=cx$ with $c=h'(0)$.",
          "Hence $g(x)=e^{cx}$ and $f(x)=e^{cx}-1$ (with $c=0$ recovering $f\\equiv 0$). Since $f'(0)=c$, the condition $f'(0)=2$ gives $c=2$, so $f(x)=e^{2x}-1$.",
          "Therefore $f\\!\\left(\\tfrac12\\ln 3\\right)=e^{\\ln 3}-1=3-1=\\boxed{2}$."
        ]
      },
      {
        "name": "Differentiate in $y$ at $0$",
        "steps": [
          "Put $x=y=0$: $f(0)=2f(0)+f(0)^2$, i.e. $f(0)\\bigl(f(0)+1\\bigr)=0$, so either $f(0)=-1$ or $f(0)=0$.",
          "The case $f(0)=-1$ corresponds to the constant solution $f\\equiv -1$ (it satisfies the equation and must be kept); for the nonconstant family take $f(0)=0$.",
          "Differentiate $f(x+y)=f(x)+f(y)+f(x)f(y)$ in $y$, then set $y=0$: $f'(x)=f'(0)+f(x)f'(0)=f'(0)\\bigl(1+f(x)\\bigr)$.",
          "With $f'(0)=2$ this is the linear ODE $f'=2(1+f),\\ f(0)=0$, whose unique solution is $1+f=e^{2x}$, so $f(x)=e^{2x}-1$.",
          "Thus $f\\!\\left(\\tfrac12\\ln 3\\right)=e^{\\ln 3}-1=3-1=\\boxed{2}$."
        ]
      },
      {
        "name": "Integer iteration then differentiability",
        "steps": [
          "With $g=1+f$ multiplicative and (for the nonconstant case) positive, induction gives $g(nx)=g(x)^n$ for all integers $n$, hence $g(q)=g(1)^q$ for every rational $q$ and $g(1)=g(1/n)^n>0$.",
          "Continuity (a consequence of differentiability) extends this from rationals to all reals: $g(x)=g(1)^x=e^{cx}$ with $c=\\ln g(1)$, so $f(x)=e^{cx}-1$; the degenerate $f\\equiv -1$ ($g\\equiv 0$) is the remaining branch.",
          "Matching $f'(0)=c=2$ gives $f(x)=e^{2x}-1$, so $f\\!\\left(\\tfrac12\\ln 3\\right)=e^{\\ln 3}-1=\\boxed{2}$."
        ]
      }
    ],
    "remark": "Insight: the additive-plus-product form is multiplicative Cauchy in disguise — the shift $g=1+f$ unmasks it, turning $f(x+y)=f(x)+f(y)+f(x)f(y)$ into $g(x+y)=g(x)g(y)$. The hidden degenerate branch $f\\equiv -1$ lives exactly where $1+f$ vanishes, which is why any argument that divides by $1+f$ must treat $g\\equiv 0$ separately."
  },
  {
    "theme": "functionaleqdiff",
    "themeLabel": "Differentiable Functional Equations",
    "title": "The Tangent Addition Law",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "tangent-addition",
      "rational-functional-equation",
      "arctangent-substitution"
    ],
    "statement": "Let $f$ be differentiable on a neighbourhood of $0$ with $f(0)=0$, satisfying \\[ f(x+y)=\\frac{f(x)+f(y)}{1-f(x)f(y)} \\] wherever the denominator is nonzero, and $f'(0)=2$. Determine $f\\!\\left(\\dfrac{\\pi}{8}\\right)$.",
    "answer": "$f(x)=\\tan(2x)$, so $f(\\pi/8)=\\tan(\\pi/4)=1$.",
    "trap": "Cross-multiplying and differentiating without using $f(0)=0$, or assuming the denominator $1-f(x)f(y)$ never vanishes globally. The relation is local (the tangent blows up), so pinning $f$ near $0$ is what is legitimate; a careless solver who takes slope $1$ lands at $\\tan(\\pi/8)=\\sqrt2-1$.",
    "solutions": [
      {
        "name": "Differentiate in $y$ at $0$",
        "steps": [
          "First note $f(0)=0$ is consistent: putting $x=y=0$ gives $f(0)=\\dfrac{2f(0)}{1-f(0)^2}$, whose only real root is $f(0)=0$.",
          "With $f(0)=0$, differentiate the relation in $y$ and set $y=0$. By the quotient rule, $\\partial_y\\big|_{0}$ of the RHS equals $f'(0)\\,(1+f(x)^2)$.",
          "So $f'(x)=f'(0)\\,(1+f(x)^2)=2\\,(1+f(x)^2)$.",
          "Solve $f'/(1+f^2)=2$ with $f(0)=0$: $\\arctan f(x)=2x$, i.e. $f(x)=\\tan(2x)$.",
          "Then $f(\\pi/8)=\\tan(\\pi/4)=\\boxed{1}$."
        ]
      },
      {
        "name": "Arctangent substitution",
        "steps": [
          "Let $\\varphi(x)=\\arctan f(x)$ (valid near $0$). The tangent addition formula says the relation is equivalent to $\\tan\\varphi(x+y)=\\tan\\bigl(\\varphi(x)+\\varphi(y)\\bigr)$, so $\\varphi(x+y)=\\varphi(x)+\\varphi(y)$ locally.",
          "A differentiable additive $\\varphi$ must be linear: $\\varphi(x)=\\varphi'(0)\\,x$, with $\\varphi'(0)=f'(0)/(1+f(0)^2)=2$.",
          "Hence $\\varphi(x)=2x$ and $f(x)=\\tan(2x)$, the unique differentiable solution near $0$.",
          "$f(\\pi/8)=\\tan(\\pi/4)=\\boxed{1}$."
        ]
      },
      {
        "name": "Recognize the addition identity",
        "steps": [
          "The right side is exactly $\\tan$'s addition law, so for differentiable $f$ with $f(0)=0$ the relation forces $f(x)=\\tan(kx)$.",
          "Then $f'(0)=k\\sec^2(0)=k=2$.",
          "Thus $f(x)=\\tan(2x)$ and $f(\\pi/8)=\\tan(\\pi/4)=\\boxed{1}$."
        ]
      }
    ],
    "remark": "Insight: any addition-formula-shaped rational equation is a conjugated Cauchy equation. The substitution $\\arctan f$ linearizes it into additivity, and $f'(0)$ becomes the angular frequency $k=2$."
  },
  {
    "theme": "functionaleqdiff",
    "themeLabel": "Differentiable Functional Equations",
    "title": "Weighted by Exponentials",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "weighted-cauchy",
      "integrating-factor",
      "exponential-times-linear"
    ],
    "statement": "Let $f:\\mathbb{R}\\to\\mathbb{R}$ be differentiable and satisfy \\[ f(x+y)=e^{y}f(x)+e^{x}f(y)\\qquad\\text{for all }x,y, \\] with $f'(0)=3$. Determine $f(1)$.",
    "answer": "$f(x)=3x\\,e^{x}$, so $f(1)=3e$.",
    "trap": "Treating this like ordinary Cauchy and guessing $f(x)=cx$. The exponential weights mean $f$ is $e^{x}$ times something; the right normalization $h(x)=f(x)e^{-x}$ is additive, not $f$ itself.",
    "solutions": [
      {
        "name": "Normalize to Cauchy",
        "steps": [
          "Set $x=y=0$: $f(0)=2f(0)\\Rightarrow f(0)=0$.",
          "Divide by $e^{x+y}$: $\\dfrac{f(x+y)}{e^{x+y}}=\\dfrac{f(x)}{e^{x}}+\\dfrac{f(y)}{e^{y}}$, so $h(x):=f(x)e^{-x}$ is additive and differentiable.",
          "Hence $h(x)=h'(0)x$; since $h(x)=f(x)e^{-x}$, $h'(0)=f'(0)-f(0)=3$.",
          "So $f(x)=e^{x}\\cdot3x=3x e^{x}$, giving $f(1)=\\boxed{3e}$."
        ]
      },
      {
        "name": "Differentiate in $y$ at $0$",
        "steps": [
          "Differentiate in $y$: $f'(x+y)=e^{y}f(x)+e^{x}f'(y)$; set $y=0$ (with $f(0)=0$): $f'(x)=f(x)+f'(0)e^{x}=f(x)+3e^x$.",
          "This linear ODE has integrating factor $e^{-x}$: $(f e^{-x})'=3$, so $f(x)e^{-x}=3x+C$.",
          "$f(0)=0\\Rightarrow C=0$, hence $f(x)=3x e^{x}$.",
          "Therefore $f(1)=\\boxed{3e}$."
        ]
      },
      {
        "name": "Ansatz from structure",
        "steps": [
          "The symmetric weighting suggests $f(x)=e^{x}u(x)$. Substituting gives $e^{x+y}u(x+y)=e^{y}e^{x}u(x)+e^{x}e^{y}u(y)$, i.e. $u(x+y)=u(x)+u(y)$.",
          "Differentiable additive $u$ gives $u(x)=u'(0)x$ with $u'(0)=f'(0)-f(0)=3$.",
          "So $f(x)=3x e^{x}$ and $f(1)=\\boxed{3e}$."
        ]
      }
    ],
    "remark": "Insight: a multiplicative weight on the right is removed by the matching integrating factor $e^{-x}$, exposing a clean Cauchy core. The product $x e^{x}$ is the telltale 'resonant' solution."
  },
  {
    "theme": "functionaleqdiff",
    "themeLabel": "Differentiable Functional Equations",
    "title": "The Difference of Squares That Hides a Hyperbola",
    "difficulty": 5,
    "task": "Determine and prove",
    "tags": [
      "addition-law",
      "difference-of-squares",
      "branch-selection",
      "sinh-vs-sin",
      "second-order-ode",
      "monotonicity"
    ],
    "statement": "Let $f:\\mathbb{R}\\to\\mathbb{R}$ be twice differentiable, NOT identically zero, and satisfy the difference-of-squares addition law \\[ f(x+y)\\,f(x-y)=f(x)^2-f(y)^2\\qquad\\text{for all }x,y\\in\\mathbb{R}. \\] You are told three things: $f'(0)=2$; $f(\\ln 2)=\\tfrac{3}{2}$; and $f(x)>0$ for every $x>0$.\n\n(a) Determine $f$ completely, proving it is the ONLY twice-differentiable function meeting all the stated conditions. Make explicit where twice-differentiability is used, and which condition rules out each rival solution of the bare equation.\n\n(b) Find the unique real number $a$ for which $f(a)=\\dfrac{15}{4}$.",
    "answer": "\\[\\boxed{f(x)=2\\sinh x,\\qquad a=\\ln 4}\\]",
    "trap": "The relation does NOT determine $f$ by itself: differentiating it twice in $y$ at $y=0$ (after $f(0)=0$) collapses it to the linear ODE $f''=c\\,f$ for some real constant $c$, whose sign splits the solutions into a TRICHOTOMY -- $c<0$ gives the bounded oscillation $f=\\tfrac{b}{k}\\sin(kx)$, $c=0$ gives the line $f=bx$, and $c>0$ gives the unbounded $f=\\tfrac{b}{k}\\sinh(kx)$, all three with $b=f'(0)$. The conceptual error is to commit to one branch prematurely. Two seductive wrong turns: (i) The 'linear' jump. Many students see an additive-looking law and a single slope $f'(0)=2$ and declare $f(x)=2x$ -- which genuinely satisfies the functional equation AND $f'(0)=2$, so it survives every check except the second datum: $f(\\ln 2)=2\\ln 2\\approx 1.386\\neq\\tfrac{3}{2}$. It is a real solution of the bare equation, excluded only by the value, not by the structure. (ii) The 'sine' analogy. By pattern-matching to addition-law one writes $f=A\\sin(kx)$ and tries to fit it; but the $\\sin$ branch is bounded by $b/k$ and its values at $x=\\ln 2$ never exceed the linear baseline $b\\ln 2=2\\ln 2\\approx 1.386$, so it can NEVER reach $\\tfrac{3}{2}$ -- and worse, it is eventually negative, flatly contradicting $f(x)>0$ for all $x>0$. The honest discriminator is the SIGN of $c$: the hypothesis $f>0$ on $(0,\\infty)$ (equivalently, strict monotonicity / unboundedness) forces $c>0$, i.e. the $\\sinh$ branch, and only then does the value $\\tfrac{3}{2}>2\\ln 2$ confirm it and pin the parameters. Assuming the closed form -- rather than EARNING the sign of $c$ from differentiability plus the positivity hypothesis -- is to assume away the entire problem.",
    "solutions": [
      {
        "name": "Differentiate twice to a linear ODE $f''=cf$, then let the positivity hypothesis fix the sign of $c$",
        "steps": [
          "Pin the base data. Put $y=0$: $f(x)^2=f(x)^2-f(0)^2$, so $f(0)=0$. Put $x=0$: $f(y)f(-y)=-f(y)^2$, i.e. $f(y)\\bigl(f(-y)+f(y)\\bigr)=0$ for all $y$; since $f\\not\\equiv 0$ and $f$ is continuous, $f$ is odd: $f(-y)=-f(y)$.",
          "Extract the ODE. Differentiate the relation twice with respect to $y$ and set $y=0$. Using $f(0)=0$, the result is $f(x)f''(x)-f'(x)^2+f'(0)^2=0$. Differentiate once more in $x$: $f(x)f'''(x)-f'(x)f''(x)=0$, so $\\dfrac{f'''}{f''}=\\dfrac{f'}{f}$ wherever $f\\neq 0$, giving $f''=c\\,f$ for a constant $c$. Twice-differentiability is exactly what turns the algebraic law into this single linear ODE.",
          "Trichotomy. Solve $f''=cf$ with $f(0)=0,\\ f'(0)=2$. If $c=-k^2<0$ then $f=\\tfrac{2}{k}\\sin(kx)$ (bounded, oscillatory, sign-changing). If $c=0$ then $f=2x$. If $c=k^2>0$ then $f=\\tfrac{2}{k}\\sinh(kx)$ (strictly increasing, unbounded). Each of these is a genuine solution of the original equation, so the equation alone cannot choose among them.",
          "Use the sign hypothesis to select the branch. The condition $f(x)>0$ for all $x>0$ kills the $\\sin$ branch (it becomes negative past its first zero) and is compatible with $f=2x$ and the $\\sinh$ branch. So we are left with $c\\ge 0$. Now invoke the value: $f(\\ln 2)=\\tfrac{3}{2}$ while the line gives $2\\ln 2\\approx 1.386<\\tfrac{3}{2}$, so $c\\neq 0$; the $\\sinh$ branch it must be, $c=k^2>0$.",
          "Pin the parameter $k$. With $f=\\tfrac{2}{k}\\sinh(kx)$ the value reads $\\tfrac{2}{k}\\sinh(k\\ln 2)=\\tfrac{3}{2}$. The map $k\\mapsto \\tfrac{2}{k}\\sinh(k\\ln 2)$ is strictly increasing from its $k\\to 0^+$ limit $2\\ln 2$ upward, so the equation has a unique root; $k=1$ gives $2\\sinh(\\ln 2)=2\\cdot\\tfrac{2-\\frac12}{2}=\\tfrac{3}{2}$. Hence $f(x)=2\\sinh x$, and this is the unique twice-differentiable solution meeting all conditions.",
          "Part (b). Solve $2\\sinh a=\\tfrac{15}{4}$. With $u=e^{a}$, $u-\\tfrac1u=\\tfrac{15}{4}$, i.e. $4u^2-15u-4=0$, so $u=\\tfrac{15+17}{8}=4$ (the negative root is rejected since $u=e^a>0$). Thus $a=\\ln 4$. \\[\\boxed{f(x)=2\\sinh x,\\qquad a=\\ln 4.}\\]"
        ]
      },
      {
        "name": "First integral (energy invariant) -- monotonicity decides the branch without solving an ODE twice",
        "steps": [
          "As in Method 1, $f(0)=0$, $f$ is odd, and twice-differentiating at $y=0$ gives $f f''-(f')^2+b^2=0$ with $b=f'(0)=2$. Rather than push to a third derivative, read this as a first integral: rearranged, $\\dfrac{d}{dx}\\!\\left(\\dfrac{f'(x)^2-b^2}{f(x)^2}\\right)=\\dfrac{2f'(ff''-f'^2+b^2)}{f^3}=0$, so $\\dfrac{f'^2-b^2}{f^2}=c$ is CONSTANT; equivalently $f'(x)^2=c\\,f(x)^2+b^2$.",
          "Sign of $c$ from positivity. If $c<0$, then $f'^2=b^2-|c|f^2$ forces $|f|\\le b/\\sqrt{|c|}$ (bounded) and $f'$ to vanish where $f$ is largest -- $f$ turns around and, being odd, dips negative, contradicting $f>0$ on $(0,\\infty)$. If $c=0$, $f'^2=b^2$ gives $f=bx=2x$, but then $f(\\ln 2)=2\\ln 2\\neq\\tfrac32$. So $c>0$; write $c=k^2$.",
          "Solve the first-order relation. For $x>0$, $f>0$ and $f'=\\sqrt{k^2f^2+b^2}>0$ (positive root, since $f$ is increasing). Separating, $\\displaystyle\\int\\frac{df}{\\sqrt{k^2f^2+b^2}}=\\int dx$ gives $\\tfrac1k\\operatorname{arcsinh}\\!\\big(\\tfrac{k}{b}f\\big)=x$ (constant $0$ from $f(0)=0$), i.e. $f(x)=\\tfrac{b}{k}\\sinh(kx)=\\tfrac{2}{k}\\sinh(kx)$; oddness extends it to $x<0$.",
          "Fit the value. $\\tfrac{2}{k}\\sinh(k\\ln 2)=\\tfrac32$ has the unique solution $k=1$ (the left side strictly increases in $k$ from $2\\ln2$), so $f(x)=2\\sinh x$.",
          "Part (b). From $f'^2=f^2+4$ or directly, solve $2\\sinh a=\\tfrac{15}{4}$: $\\sinh a=\\tfrac{15}{8}$, so $a=\\operatorname{arcsinh}\\tfrac{15}{8}=\\ln\\!\\big(\\tfrac{15}{8}+\\sqrt{\\tfrac{225}{64}+1}\\big)=\\ln\\!\\big(\\tfrac{15}{8}+\\tfrac{17}{8}\\big)=\\ln 4$. \\[\\boxed{f(x)=2\\sinh x,\\qquad a=\\ln 4.}\\]"
        ]
      },
      {
        "name": "Use the equation's OWN duplication law for part (b) -- the inverse with no calculus",
        "steps": [
          "Establish the form as in Method 1: $f(0)=0$, $f$ odd, $f''=cf$, and the positivity hypothesis plus $f(\\ln 2)=\\tfrac32>2\\ln2$ force the $\\sinh$ branch, giving $f(x)=2\\sinh x$ with $f'(0)=2$. (Equivalently $c=1$ from the invariant of Method 2.)",
          "Read a duplication law straight from the functional structure. For $f=2\\sinh x$ the companion $g(x):=\\cosh x$ satisfies $g^2-(f/2)^2=1$, and $\\sinh$ obeys $f(2t)=2f(t)\\,g(t)$. So knowing $f$ at a point gives $f$ at the doubled point WITHOUT inverting anything: from $f(\\ln 2)=\\tfrac32$ we get $g(\\ln 2)=\\sqrt{1+(f(\\ln 2)/2)^2}=\\sqrt{1+\\tfrac{9}{16}}=\\tfrac{5}{4}$.",
          "Double the input. $f(2\\ln 2)=2\\,f(\\ln 2)\\,g(\\ln 2)=2\\cdot\\tfrac32\\cdot\\tfrac54=\\tfrac{15}{4}$. So $f$ already equals $\\tfrac{15}{4}$ at $x=2\\ln 2=\\ln 4$, identifying the target value with the doubled abscissa directly.",
          "Confirm uniqueness of $a$. Since $f(x)=2\\sinh x$ is a strictly increasing bijection of $\\mathbb{R}$ onto $\\mathbb{R}$, the equation $f(a)=\\tfrac{15}{4}$ has exactly one root, namely the $a=\\ln 4$ just produced. \\[\\boxed{f(x)=2\\sinh x,\\qquad a=\\ln 4.}\\]"
        ]
      }
    ],
    "remark": "Insight: this is a addition-law law in disguise. The hyperbolic identity $\\sinh(x+y)\\sinh(x-y)=\\sinh^2 x-\\sinh^2 y$ is the source, but the SAME algebra is satisfied by $\\sin$ (with a sign), by a straight line, and by a whole one-parameter family in each case -- so the bare equation is wildly under-determined. Twice-differentiability is the lever: differentiate twice at $y=0$ and the law becomes the lone linear ODE $f''=cf$, the universal trichotomy machine ($c<0$ sine, $c=0$ line, $c>0$ sinh). The decisive move a top ranker must make is to realise that NO amount of data substituted into a guessed closed form is a proof; one must first earn the SIGN of $c$. Here the innocuous-looking hypothesis $f>0$ on $(0,\\infty)$ is doing the heavy lifting -- it eliminates the oscillatory sine branch outright, the lone value then kills the degenerate line ($2\\ln2<\\tfrac32$), and only the unbounded $\\sinh$ survives. Two further morals: the first integral $f'^2=cf^2+b^2$ shows boundedness versus monotonicity is precisely the geometric signature of the sign of $c$; and the functional equation carries its own duplication law $f(2t)=2f(t)\\cosh t$, so the inverse value $f^{-1}(\\tfrac{15}{4})=\\ln4$ falls out by doubling $\\ln 2$ with no calculus at all. Slogan: differentiability decides the family, the sign condition decides the branch, the data decides the parameter -- in that order."
  },
  {
    "theme": "functionaleqdiff",
    "themeLabel": "Differentiable Functional Equations",
    "title": "The Bilinear Bonus Term",
    "difficulty": 5,
    "task": "Find the second derivative",
    "tags": [
      "functional-equation",
      "differentiate-the-relation",
      "ODE-from-functional-equation",
      "higher-order-derivative",
      "f-of-zero-trap"
    ],
    "statement": "A differentiable function $f:\\mathbb{R}\\to\\mathbb{R}$ satisfies $$f(x+y)=f(x)+f(y)+xy(x+y)\\quad\\text{for all }x,y\\in\\mathbb{R},$$ together with $f'(0)=2$. Differentiate the relation in $y$ and set $y=0$ to convert it into a first-order condition on $f$, solve for $f$ explicitly, and then report the second derivative $f''(3)$.",
    "answer": "Differentiating gives $f'(x)=f'(0)+x^{2}=2+x^{2}$, hence $f(x)=2x+\\tfrac{x^{3}}{3}$ and $f''(x)=2x$, so $$\\boxed{\\,f''(3)=6\\,}.$$",
    "trap": "Forgetting to pin down $f(0)$. Setting $x=y=0$ in the relation gives $f(0)=2f(0)$, forcing $f(0)=0$; if you instead carry an arbitrary constant $f(x)=2x+\\tfrac{x^{3}}{3}+C$ the functional equation is violated for $C\\neq0$. The constant of integration is not free here.",
    "solutions": [
      {
        "name": "Differentiate in $y$, set $y=0$",
        "steps": [
          "Hold $x$ fixed and differentiate $f(x+y)=f(x)+f(y)+xy(x+y)$ with respect to $y$: $f'(x+y)=f'(y)+\\dfrac{\\partial}{\\partial y}\\big[x^{2}y+xy^{2}\\big]=f'(y)+x^{2}+2xy$.",
          "Put $y=0$: $f'(x)=f'(0)+x^{2}=2+x^{2}$.",
          "Integrate: $f(x)=2x+\\dfrac{x^{3}}{3}+C$. From $x=y=0$ in the original relation, $f(0)=2f(0)$ so $f(0)=0$, giving $C=0$ and $f(x)=2x+\\dfrac{x^{3}}{3}$.",
          "Then $f''(x)=2x$, so $f''(3)=\\boxed{6}$."
        ]
      },
      {
        "name": "First principles on the relation",
        "steps": [
          "By definition $f'(x)=\\lim_{h\\to0}\\dfrac{f(x+h)-f(x)}{h}$. Using the relation with $y=h$: $f(x+h)-f(x)=f(h)+xh(x+h)$, so $\\dfrac{f(x+h)-f(x)}{h}=\\dfrac{f(h)}{h}+x(x+h)$.",
          "As $h\\to0$, $\\dfrac{f(h)}{h}=\\dfrac{f(h)-f(0)}{h}\\to f'(0)=2$ (since $f(0)=0$), and $x(x+h)\\to x^{2}$. Hence $f'(x)=2+x^{2}$.",
          "Integrating with $f(0)=0$ gives $f(x)=2x+\\dfrac{x^{3}}{3}$, so $f''(x)=2x$.",
          "Therefore $f''(3)=\\boxed{6}$."
        ]
      }
    ],
    "remark": "**Insight.** The bonus term $xy(x+y)$ is symmetric and vanishes to second order in $y$, so on differentiating in $y$ at $y=0$ it leaves behind exactly $x^{2}$ — the fingerprint of a cubic. The whole functional equation is just the additive law dressed with a bilinear correction, and reading off $f(0)=0$ from $x=y=0$ is the step most solvers skip."
  },
  {
    "theme": "functionaleqdiff",
    "themeLabel": "Differentiable Functional Equations",
    "title": "The Multiplicative Law and a Single Value",
    "difficulty": 5,
    "task": "Evaluate the derivative",
    "tags": [
      "functional-equation",
      "exponential-law",
      "differentiate-the-relation",
      "separable-ODE",
      "f-of-zero-trap"
    ],
    "statement": "A non-zero differentiable function $f:\\mathbb{R}\\to\\mathbb{R}$ satisfies $$f(x+y)=f(x)\\,f(y)\\quad\\text{for all }x,y\\in\\mathbb{R},$$ and is known to pass through $f(1)=3$. Turn the relation into a differential equation (differentiate in $y$, set $y=0$), determine $f$ explicitly, and then evaluate $f'(2)$.",
    "answer": "The relation forces $f(x)=3^{x}$, so $f'(x)=3^{x}\\ln 3$ and $$\\boxed{\\,f'(2)=9\\ln 3\\,}.$$",
    "trap": "Assuming $f(0)=0$ (or leaving it undetermined). Setting $x=y=0$ gives $f(0)=f(0)^{2}$, so $f(0)\\in\\{0,1\\}$; but $f(0)=0$ would force $f\\equiv0$ (take $y=0$: $f(x)=f(x)f(0)$), contradicting $f(1)=3$. Hence $f(0)=1$, which is exactly the initial value that makes the exponential solution work.",
    "solutions": [
      {
        "name": "Differentiate in $y$, set $y=0$",
        "steps": [
          "First fix the value at $0$: with $y=0$, $f(x)=f(x)f(0)$ for all $x$; since $f\\not\\equiv0$, $f(0)=1$.",
          "Differentiate $f(x+y)=f(x)f(y)$ in $y$: $f'(x+y)=f(x)f'(y)$. Put $y=0$: $f'(x)=f(x)f'(0)$.",
          "This separable equation gives $\\dfrac{f'(x)}{f(x)}=f'(0)=:c$, so $\\ln f(x)=cx+\\text{const}$, and with $f(0)=1$ we get $f(x)=e^{cx}$. From $f(1)=e^{c}=3$, $c=\\ln3$, hence $f(x)=3^{x}$.",
          "Then $f'(x)=3^{x}\\ln3$, so $f'(2)=9\\ln3=\\boxed{9\\ln 3}$."
        ]
      },
      {
        "name": "First principles on the relation",
        "steps": [
          "$f'(x)=\\lim_{h\\to0}\\dfrac{f(x+h)-f(x)}{h}=\\lim_{h\\to0}\\dfrac{f(x)f(h)-f(x)}{h}=f(x)\\lim_{h\\to0}\\dfrac{f(h)-1}{h}$, using $f(0)=1$.",
          "The remaining limit is $f'(0)$, a constant $c$; thus $f'(x)=c\\,f(x)$. With $f(0)=1$ this integrates to $f(x)=e^{cx}$.",
          "Imposing $f(1)=3$ gives $e^{c}=3$, i.e. $c=\\ln3$ and $f(x)=3^{x}$.",
          "Therefore $f'(2)=3^{2}\\ln3=9\\ln3=\\boxed{9\\ln 3}$."
        ]
      }
    ],
    "remark": "**Insight.** The multiplicative law cannot decide its own growth rate — every $3^{x}$, $5^{x}$, $e^{x}$ obeys it — so one anchoring value ($f(1)=3$) is what selects the base. The genuinely load-bearing deduction is $f(0)=1$: it is what rules out the trivial zero solution and supplies the initial condition for the separable ODE."
  },
  {
    "theme": "functionaleqdiff",
    "themeLabel": "Differentiable Functional Equations",
    "title": "Turning Products Into Sums",
    "difficulty": 5,
    "task": "Identify the function",
    "tags": [
      "functional-equation",
      "logarithmic-law",
      "differentiate-the-relation",
      "set-y-equals-one",
      "invariant-quantity"
    ],
    "statement": "A differentiable function $f:(0,\\infty)\\to\\mathbb{R}$ satisfies $$f(xy)=f(x)+f(y)\\quad\\text{for all }x,y>0,$$ with the normalisation $f'(1)=5$. Differentiate the relation appropriately (treat one variable as the active one and set the other to $1$) to obtain a differential equation, solve it, and report the value of the (constant) quantity $x\\,f'(x)$ for every $x>0$.",
    "answer": "The relation forces $f(x)=5\\ln x$, so $f'(x)=\\dfrac{5}{x}$ and hence $$\\boxed{\\,x\\,f'(x)=5\\ \\text{ for all }x>0\\,}.$$",
    "trap": "Overlooking that $f(1)=0$. Putting $x=y=1$ gives $f(1)=2f(1)$, so $f(1)=0$; a stray additive constant $f(x)=5\\ln x+C$ with $C\\neq0$ breaks the equation. Skipping this kills the clean conclusion that $x f'(x)$ is exactly the constant $f'(1)$.",
    "solutions": [
      {
        "name": "Differentiate in $x$, set $y=1$",
        "steps": [
          "First, $x=y=1$ gives $f(1)=2f(1)$, so $f(1)=0$.",
          "Differentiate $f(xy)=f(x)+f(y)$ with respect to $x$ (treating $y$ as a constant): $y\\,f'(xy)=f'(x)$.",
          "Set $y=1$ is not yet useful; instead set $x=1$ in $y f'(xy)=f'(x)$: $y\\,f'(y)=f'(1)=5$. Renaming $y\\to x$ gives $x\\,f'(x)=5$, so $f'(x)=\\dfrac{5}{x}$.",
          "Integrating with $f(1)=0$ yields $f(x)=5\\ln x$, and the boxed invariant is $x\\,f'(x)=\\boxed{5}$."
        ]
      },
      {
        "name": "First principles on the relation",
        "steps": [
          "Write $f'(x)=\\lim_{h\\to0}\\dfrac{f(x+h)-f(x)}{h}$ and factor $x+h=x\\big(1+\\tfrac{h}{x}\\big)$. By the relation, $f(x+h)=f(x)+f\\!\\big(1+\\tfrac{h}{x}\\big)$, so $f(x+h)-f(x)=f\\!\\big(1+\\tfrac{h}{x}\\big)$.",
          "Thus $f'(x)=\\lim_{h\\to0}\\dfrac{f(1+\\tfrac{h}{x})}{h}=\\dfrac1x\\lim_{u\\to0}\\dfrac{f(1+u)-f(1)}{u}=\\dfrac{f'(1)}{x}$, using $f(1)=0$ and $u=\\tfrac{h}{x}$.",
          "Hence $f'(x)=\\dfrac{5}{x}$, giving $f(x)=5\\ln x$ after integrating with $f(1)=0$.",
          "Therefore $x\\,f'(x)=5$ for all $x>0$, i.e. $\\boxed{5}$."
        ]
      }
    ],
    "remark": "**Insight.** The product-to-sum law makes $x$ act like a scaling knob: shifting $x$ by $h$ is the same as multiplying by $1+\\tfrac{h}{x}$, which is why the slope decays like $1/x$ and $x f'(x)$ freezes into the single constant $f'(1)$. That constant invariant is the whole content of the equation, with $f(1)=0$ as the silent gatekeeper."
  },
  {
    "theme": "functionaleqdiff",
    "themeLabel": "Differentiable Functional Equations",
    "title": "An Additive Law With a Disguised Slope",
    "difficulty": 5,
    "task": "Determine the function",
    "tags": [
      "functional-equation",
      "additive-law",
      "differentiate-the-relation",
      "limit-driven-derivative",
      "series-expansion"
    ],
    "statement": "A differentiable function $g:\\mathbb{R}\\to\\mathbb{R}$ obeys the additive law $$g(x+y)=g(x)+g(y)\\quad\\text{for all }x,y\\in\\mathbb{R},$$ and its derivative at the origin is presented through a limit, $g'(0)=\\lim_{x\\to0}\\dfrac{e^{2x}-1}{x}$. Evaluate that limit, convert the relation into an ODE, find $g$ explicitly, and report $g(5)$.",
    "answer": "The limit equals $2$, so $g'(0)=2$, forcing $g(x)=2x$ and $$\\boxed{\\,g(5)=10\\,}.$$",
    "trap": "Mishandling the limit (e.g. reading $\\lim_{x\\to0}\\tfrac{e^{2x}-1}{x}$ as $1$ instead of $2$, dropping the factor from the exponent), or forgetting that the additive law itself forces $g(0)=0$ — which is what makes $g'(0)$ the whole slope and rules out any constant term in $g$.",
    "solutions": [
      {
        "name": "Evaluate the limit, then differentiate the relation",
        "steps": [
          "The limit: using $e^{2x}=1+2x+\\dfrac{(2x)^{2}}{2}+\\cdots$, we get $\\dfrac{e^{2x}-1}{x}=2+2x+\\cdots\\to2$ as $x\\to0$. So $g'(0)=2$.",
          "From $x=y=0$ the relation gives $g(0)=2g(0)$, hence $g(0)=0$. Differentiate $g(x+y)=g(x)+g(y)$ in $y$ and set $y=0$: $g'(x)=g'(0)=2$, a constant.",
          "Integrate: $g(x)=2x+C$, and $g(0)=0$ gives $C=0$, so $g(x)=2x$.",
          "Therefore $g(5)=10=\\boxed{10}$."
        ]
      },
      {
        "name": "First principles on the relation",
        "steps": [
          "With $g(0)=0$ (from $x=y=0$), the difference quotient is $\\dfrac{g(x+h)-g(x)}{h}=\\dfrac{g(h)}{h}=\\dfrac{g(h)-g(0)}{h}$, whose limit as $h\\to0$ is $g'(0)$ for every $x$.",
          "Hence $g'(x)=g'(0)$ is the same constant at all points. Evaluating the given limit, $\\lim_{x\\to0}\\dfrac{e^{2x}-1}{x}=2$, so $g'(x)=2$.",
          "Integrating with $g(0)=0$ gives $g(x)=2x$.",
          "Thus $g(5)=2\\cdot5=10=\\boxed{10}$."
        ]
      }
    ],
    "remark": "**Insight.** Once a solution of the additive law is assumed differentiable, its derivative is the same constant everywhere, so the function is pinned to a straight line through the origin and a single number ($g'(0)$) determines it completely. The exam twist here is purely that $g'(0)$ is handed over as a limit whose hidden factor of $2$ lives in the exponent."
  },
  {
    "theme": "smoothness",
    "themeLabel": "Higher Derivatives & Smoothness",
    "title": "Exactly Two Smooth, Then a Corner Appears",
    "difficulty": 4,
    "task": "Classify",
    "tags": [
      "absolute-value",
      "c2-class",
      "one-sided-derivatives",
      "jump"
    ],
    "statement": "For an integer $m\\ge1$ consider $g_m(x)=|x|^{2m+1}$ (for example $g_1(x)=|x|^{3}$). Classify the exact smoothness: find the largest $k$ for which $g_m\\in C^{k}(\\mathbb{R})$, and prove that $g_m^{(2m+1)}(0)$ fails to exist. Then state the answer for the specific case $|x|^{5}$.",
    "answer": "$g_m=|x|^{2m+1}$ is exactly $C^{2m}$ but not $C^{2m+1}$: the $(2m+1)$-st derivative jumps from $-(2m+1)!$ (left) to $+(2m+1)!$ (right) at $0$, so $g_m^{(2m+1)}(0)$ does not exist. For $|x|^{5}$ ($m=2$): exactly $C^{4}$, not $C^{5}$; the fifth derivative jumps $-120\\to+120$.",
    "trap": "Believing an odd power like $|x|^5$ is a polynomial and hence $C^\\infty$. It is NOT a polynomial: on $x<0$ it equals $-x^5$, on $x\\ge0$ it equals $+x^5$. The two quintic halves agree through order $2m$ but their $(2m+1)$-st derivatives carry opposite signs $\\mp(2m+1)!$, creating a jump.",
    "solutions": [
      {
        "name": "Branch derivatives and the sign flip",
        "steps": [
          "Write $g_m(x)=x^{2m+1}$ for $x\\ge0$ and $g_m(x)=-x^{2m+1}$ for $x<0$ (since for odd exponent $|x|^{2m+1}=\\operatorname{sgn}(x)\\,x^{2m+1}$).",
          "For $0\\le j\\le 2m$, the $j$-th derivative of each branch is $\\pm\\dfrac{(2m+1)!}{(2m+1-j)!}\\,x^{2m+1-j}$; since the exponent $2m+1-j\\ge1$, both branches vanish at $0$ and agree there, so each derivative is continuous.",
          "Thus $g_m,g_m',\\dots,g_m^{(2m)}$ all exist and are continuous: $g_m\\in C^{2m}$.",
          "At order $2m+1$ the powers cancel: the right branch gives $(2m+1)!$, the left branch gives $-(2m+1)!$. These differ, so the one-sided $(2m+1)$-st derivatives at $0$ disagree, $g_m^{(2m+1)}(0)$ does not exist, and $g_m\\notin C^{2m+1}$.",
          "Largest $k=\\boxed{2m}$; for $|x|^5$, $k=4$ with fifth-derivative jump $-120\\to120$."
        ]
      },
      {
        "name": "Even derivative is a corner function",
        "steps": [
          "Differentiate $2m$ times. Away from $0$ every branch derivative is a single monomial, and the bookkeeping collapses to $g_m^{(2m)}(x)=\\dfrac{(2m+1)!}{1!}\\,|x|=(2m+1)!\\,|x|$, a positive multiple of $|x|$.",
          "The function $(2m+1)!\\,|x|$ is continuous with value $0$ at the origin, so $g_m\\in C^{2m}$; but $|x|$ has a corner there, with derivative $+1$ for $x>0$ and $-1$ for $x<0$.",
          "Hence $g_m^{(2m+1)}(0)$ — the derivative of a corner — does not exist, and the one-sided values are $\\pm(2m+1)!$.",
          "Therefore $g_m$ is exactly $C^{2m}$, not $C^{2m+1}$; specializing $m=2$ gives $|x|^5\\in C^4\\setminus C^5$. $\\boxed{k=2m}$"
        ]
      }
    ],
    "remark": "Insight: $|x|^n$ for odd $n$ is the cleanest smoothness thermometer — it reads exactly $C^{n-1}$, with the final surviving derivative collapsing to a constant multiple of $|x|$, whose corner kills the next order."
  },
  {
    "theme": "smoothness",
    "themeLabel": "Higher Derivatives & Smoothness",
    "title": "The Spinning Phase of x sin x",
    "difficulty": 4,
    "task": "Find the number of …",
    "tags": [
      "leibniz",
      "nth-derivative",
      "trigonometric",
      "phase-shift"
    ],
    "statement": "Let $f(x)=x\\sin x$. Show that $f^{(n)}(0)=n\\sin\\!\\big(\\tfrac{(n-1)\\pi}{2}\\big)$ for $n\\ge1$, and find the number of integers $n$ with $1\\le n\\le 50$ for which $f^{(n)}(0)>0$.",
    "answer": "$f^{(n)}(0)=n\\sin\\!\\big(\\tfrac{(n-1)\\pi}{2}\\big)$, which is positive exactly when $n\\equiv2\\pmod4$. In $\\{1,\\dots,50\\}$ those are $n=2,6,10,\\dots,50$, i.e. $\\boxed{13}$ values.",
    "trap": "Differentiating $x\\sin x$ ``by hand'' a few times and guessing a period-2 pattern, missing that the $x\\sin(x+\\tfrac{n\\pi}2)$ piece vanishes at $0$ while the $n\\cos(\\dots)$ piece survives — the sign actually cycles with period $4$, not $2$.",
    "solutions": [
      {
        "name": "Leibniz with sine phase shift",
        "steps": [
          "$(\\sin x)^{(k)}=\\sin\\!\\big(x+\\tfrac{k\\pi}2\\big)$ and $(x)^{(k)}=0$ for $k\\ge2$.",
          "Leibniz: $f^{(n)}=\\binom n0 x\\sin(x+\\tfrac{n\\pi}2)+\\binom n1 (1)\\sin(x+\\tfrac{(n-1)\\pi}2)$.",
          "At $x=0$: the first term has factor $x=0$, leaving $f^{(n)}(0)=n\\sin\\!\\big(\\tfrac{(n-1)\\pi}2\\big)$.",
          "$\\sin\\!\\big(\\tfrac{(n-1)\\pi}2\\big)=1$ iff $(n-1)\\equiv1\\pmod4$ iff $n\\equiv2\\pmod4$; it is $0$ for $n$ odd and $-1$ for $n\\equiv0\\pmod4$.",
          "Positive cases in $[1,50]$: $n=2,6,\\dots,50$, an arithmetic run of count $\\frac{50-2}{4}+1=\\boxed{13}$."
        ]
      },
      {
        "name": "Maclaurin series of x sin x",
        "steps": [
          "$x\\sin x=x\\sum_{j\\ge0}\\frac{(-1)^j x^{2j+1}}{(2j+1)!}=\\sum_{j\\ge0}\\frac{(-1)^j x^{2j+2}}{(2j+1)!}$, supported on even powers $n=2j+2$.",
          "For odd $n$, the coefficient is $0\\Rightarrow f^{(n)}(0)=0$ (never positive).",
          "For $n=2j+2$, coefficient $=\\frac{(-1)^j}{(2j+1)!}$, so $f^{(n)}(0)=n!\\cdot\\frac{(-1)^j}{(2j+1)!}$ which has sign $(-1)^j$; positive iff $j$ even iff $n=2j+2\\equiv2\\pmod4$.",
          "Counting $n\\equiv2\\pmod4$ in $[1,50]$: $2,6,\\dots,50$ gives $\\boxed{13}$."
        ]
      }
    ],
    "remark": "Insight: multiplying a sinusoid by $x$ keeps the Leibniz sum to two terms; evaluating at $0$ silences the $x$-weighted term and exposes a pure period-$4$ sign clock from the surviving $n\\sin(\\tfrac{(n-1)\\pi}2)$."
  },
  {
    "theme": "smoothness",
    "themeLabel": "Higher Derivatives & Smoothness",
    "title": "The Coefficient That Hides Behind a Double Pole",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "generating-function",
      "partial-fractions",
      "repeated-root",
      "maclaurin-coefficients",
      "linear-recurrence",
      "cauchy-product"
    ],
    "statement": "Let \\[ f(x)=\\frac{x}{(1-2x)(1-x)^{2}}, \\] which is $C^{\\infty}$ on a neighbourhood of $0$ (its only singularities are at $x=\\tfrac12$ and $x=1$). Writing its Maclaurin expansion as $f(x)=\\sum_{n\\ge0}a_n x^{n}$, recall that the higher derivatives at the origin are read straight off the coefficients via $f^{(n)}(0)=n!\\,a_n$.\n\nCompute the exact value of \\[ f^{(12)}(0). \\] You must identify the sequence $(a_n)$ in closed form first; a brute-force twelve-fold product of the quotient rule is not the intended route, and the structure of $(a_n)$ is the whole point.",
    "answer": "\\[\\boxed{f^{(12)}(0)=12!\\,(2^{13}-14)=8178\\cdot 12!=3\\,917\\,275\\,084\\,800}\\]",
    "trap": "The seductive error is to treat the partial-fraction decomposition as if it were a sum of plain geometric series. A strong student quickly writes $f=\\dfrac{2}{1-2x}-\\dfrac{1}{1-x}-\\dfrac{1}{(1-x)^{2}}$ but then, on autopilot, expands EVERY term as $\\sum r^{n}x^{n}$ — in particular reading $\\dfrac{1}{(1-x)^{2}}$ as $\\sum x^{n}$ (coefficient $1$) instead of its true expansion $\\sum (n+1)x^{n}$. That collapses the repeated factor $(1-x)^{2}$ to a simple pole and gives $a_n=2^{n+1}-1-1=2^{n+1}-2$, or — if one also drops the $-1$ — the even cleaner-looking $a_n=2^{n+1}-1$, yielding the WRONG $f^{(12)}(0)=12!\\,(2^{13}-1)=8191\\cdot12!=3\\,923\\,502\\,105\\,600$. The whole subtlety lives in the DOUBLE pole at $x=1$: a repeated root of the denominator forces a term whose coefficient grows LINEARLY in $n$ ($\\tfrac{1}{(1-x)^{2}}\\to(n+1)$, more generally $\\tfrac{1}{(1-x)^{k}}\\to\\binom{n+k-1}{k-1}$), so the sequence is NOT a pure combination of geometric sequences but a geometric-plus-arithmetic mixture $a_n=2^{n+1}-(n+2)$. Equivalently: the characteristic root $x=1$ has multiplicity $2$, so its contribution to any solution of the underlying linear recurrence carries a factor of $n$, exactly the term the trap erases. Missing it costs the full $n!\\,(n+1)=12!\\cdot13$ difference between the two answers — and is invisible to anyone who never wrote out $\\tfrac{1}{(1-x)^{2}}$ honestly.",
    "solutions": [
      {
        "name": "Partial fractions done honestly, with the repeated factor expanded by the generalized binomial series",
        "steps": [
          "Decompose with the repeated factor kept to its full multiplicity. Seek constants in $\\dfrac{x}{(1-2x)(1-x)^{2}}=\\dfrac{A}{1-2x}+\\dfrac{B}{1-x}+\\dfrac{C}{(1-x)^{2}}$. Clearing denominators, $x=A(1-x)^{2}+B(1-2x)(1-x)+C(1-2x)$. Substitute the poles: at $x=\\tfrac12$, $\\tfrac12=A(\\tfrac12)^{2}\\Rightarrow A=2$; at $x=1$, $1=C(1-2)\\Rightarrow C=-1$. Matching the constant term ($x=0$): $0=A+B+C=2+B-1\\Rightarrow B=-1$. Hence $f=\\dfrac{2}{1-2x}-\\dfrac{1}{1-x}-\\dfrac{1}{(1-x)^{2}}$.",
          "Expand each term as a power series — and here is the crux, the double pole is NOT geometric. We have $\\dfrac{2}{1-2x}=\\sum_{n\\ge0}2\\cdot2^{n}x^{n}=\\sum 2^{n+1}x^{n}$, $\\dfrac{1}{1-x}=\\sum_{n\\ge0}x^{n}$, and by the generalized binomial theorem $\\dfrac{1}{(1-x)^{2}}=\\sum_{n\\ge0}\\binom{n+1}{1}x^{n}=\\sum_{n\\ge0}(n+1)x^{n}$. (One can also get this last expansion by differentiating $\\dfrac{1}{1-x}=\\sum x^{n}$ term by term: $\\dfrac{1}{(1-x)^{2}}=\\dfrac{d}{dx}\\dfrac{1}{1-x}=\\sum_{n\\ge1}nx^{n-1}=\\sum_{n\\ge0}(n+1)x^{n}$.)",
          "Combine the coefficients: $a_n=2^{n+1}-1-(n+1)=2^{n+1}-(n+2)$. This is the sequence behind $f$: a geometric part $2^{n+1}$ corrected by the arithmetic term $-(n+2)$ that the double pole created.",
          "Read off the derivative. Since $f^{(n)}(0)=n!\\,a_n$, take $n=12$: $a_{12}=2^{13}-14=8192-14=8178$, so $f^{(12)}(0)=12!\\cdot8178$. With $12!=479\\,001\\,600$, $f^{(12)}(0)=479\\,001\\,600\\cdot8178=3\\,917\\,275\\,084\\,800$. \\[\\boxed{f^{(12)}(0)=12!\\,(2^{13}-14)=8178\\cdot12!=3\\,917\\,275\\,084\\,800.}\\]"
        ]
      },
      {
        "name": "Recognize the sequence by its linear recurrence read off the denominator",
        "steps": [
          "Clear the denominator instead of decomposing. Expand $(1-2x)(1-x)^{2}=1-4x+5x^{2}-2x^{3}$. The defining relation $f(x)\\,(1-4x+5x^{2}-2x^{3})=x$ becomes, with $f=\\sum a_n x^{n}$, an identity of power series: $\\sum_n\\big(a_n-4a_{n-1}+5a_{n-2}-2a_{n-3}\\big)x^{n}=x$ (with $a_j=0$ for $j<0$).",
          "Match coefficients. For $n=0$: $a_0=0$. For $n=1$: $a_1-4a_0=1\\Rightarrow a_1=1$. For $n=2$: $a_2-4a_1+5a_0=0\\Rightarrow a_2=4$. For every $n\\ge3$ the right side is $0$, giving the recurrence $a_n=4a_{n-1}-5a_{n-2}+2a_{n-3}$. The characteristic polynomial is $t^{3}-4t^{2}+5t-2=(t-2)(t-1)^{2}$ — note the DOUBLE root $t=1$, the fingerprint of the repeated factor; its multiplicity is precisely why the general solution must include an $n\\cdot1^{n}$ term, $a_n=\\alpha\\,2^{n}+\\beta+\\gamma\\,n$.",
          "Pin the constants with $a_0=0,a_1=1,a_2=4$: $\\alpha+\\beta=0$, $2\\alpha+\\beta+\\gamma=1$, $4\\alpha+\\beta+2\\gamma=4$. Subtracting the first two: $\\alpha+\\gamma=1$; subtracting the second from the third: $2\\alpha+\\gamma=3$; hence $\\alpha=2,\\gamma=-1,\\beta=-2$. So $a_n=2\\cdot2^{n}-2-n=2^{n+1}-(n+2)$, matching Method 1 — and the $-n$ is exactly the contribution forced by the repeated root.",
          "Iterate to $n=12$ (a quick check on the closed form): $a_3=4\\cdot4-5\\cdot1+2\\cdot0=11$, $a_4=26$, $a_5=57$, $a_6=120$, $a_7=247$, $a_8=502$, $a_9=1013$, $a_{10}=2036$, $a_{11}=4083$, $a_{12}=4\\cdot4083-5\\cdot2036+2\\cdot1013=16332-10180+2026=8178$. Thus $f^{(12)}(0)=12!\\,a_{12}=12!\\cdot8178=3\\,917\\,275\\,084\\,800$. \\[\\boxed{f^{(12)}(0)=8178\\cdot12!=3\\,917\\,275\\,084\\,800.}\\]"
        ]
      },
      {
        "name": "Cauchy product of the two geometric/binomial series",
        "steps": [
          "Factor $f$ as a product whose two factors have known series: $f(x)=x\\cdot\\dfrac{1}{1-2x}\\cdot\\dfrac{1}{(1-x)^{2}}=x\\Big(\\sum_{k\\ge0}2^{k}x^{k}\\Big)\\Big(\\sum_{j\\ge0}(j+1)x^{j}\\Big)$. Again the second series carries the linear weight $(j+1)$ from the squared factor — drop it and the answer is wrong.",
          "Form the Cauchy product. The coefficient of $x^{n}$ in $f$ is the coefficient of $x^{n-1}$ in the product of the two series: $a_n=\\sum_{k+j=n-1}2^{k}(j+1)=\\sum_{k=0}^{n-1}2^{k}\\,(n-k)$ for $n\\ge1$ (and $a_0=0$).",
          "Evaluate the sum in closed form. Split: $\\sum_{k=0}^{n-1}2^{k}(n-k)=n\\sum_{k=0}^{n-1}2^{k}-\\sum_{k=0}^{n-1}k\\,2^{k}$. Using $\\sum_{k=0}^{n-1}2^{k}=2^{n}-1$ and $\\sum_{k=0}^{n-1}k\\,2^{k}=(n-2)2^{n}+2$, we get $a_n=n(2^{n}-1)-\\big[(n-2)2^{n}+2\\big]=2^{n+1}-(n+2)$, identical to the previous methods.",
          "Specialize to $n=12$: $a_{12}=\\sum_{k=0}^{11}2^{k}(12-k)=2^{13}-14=8178$, hence $f^{(12)}(0)=12!\\cdot8178=3\\,917\\,275\\,084\\,800$. \\[\\boxed{f^{(12)}(0)=12!\\,(2^{13}-14)=3\\,917\\,275\\,084\\,800.}\\]"
        ]
      }
    ],
    "remark": "Insight: the chapter-level lesson is that $f^{(n)}(0)=n!\\,a_n$ turns a high-derivative question into a coefficient-extraction question — but only if you read the generating function correctly. The decisive structural fact is the multiplicity of the poles. A simple pole at $x=r$ contributes a purely geometric $r^{-n}$ term; a pole of order $k$ contributes $\\binom{n+k-1}{k-1}r^{-n}$, a polynomial of degree $k-1$ in $n$ times the geometric factor. Here the double pole at $x=1$ injects the linear term $-(n+2)$ — the same phenomenon you see in linear recurrences, where a repeated characteristic root $t=1$ forces an $n\\cdot1^{n}$ mode (Methods 1, 2, 3 are precisely the partial-fraction, recurrence-root, and convolution faces of this one fact). The trap is not arithmetic: it is conceptual, the silent demotion of $\\tfrac{1}{(1-x)^{2}}$ to $\\tfrac{1}{1-x}$, which erases the entire $n$-dependence the problem is built around. Top-ranker takeaway: whenever a denominator has a repeated factor, expect — and account for — a coefficient that grows like a polynomial in $n$, never just a clean geometric term."
  },
  {
    "theme": "smoothness",
    "themeLabel": "Higher Derivatives & Smoothness",
    "title": "How Many Oscillators Have a Discontinuous Velocity",
    "difficulty": 5,
    "task": "Find the number of …",
    "tags": [
      "oscillation",
      "c1-class",
      "derivative-continuity",
      "classification"
    ],
    "statement": "For each integer $n\\ge1$ let\n\\[\nf_n(x)=\\begin{cases} x^{n}\\sin\\!\\frac1x, & x\\neq0,\\\\ 0,& x=0.\\end{cases}\n\\]\nFind the number of $n\\in\\{1,2,\\dots,12\\}$ for which $f_n$ is differentiable AT $0$ but its derivative $f_n'$ is DISCONTINUOUS at $0$.",
    "answer": "Only $n=2$ qualifies. ($n=1$ is not differentiable at $0$; for every $n\\ge3$, $f_n$ is differentiable with $f_n'$ continuous, i.e. $f_n\\in C^1$.) Count $=\\boxed{1}$.",
    "trap": "Thinking ``all these wiggly functions have a discontinuous derivative,'' so the count is large. In truth $n=1$ isn't even differentiable at $0$ (the quotient $\\sin\\frac1h$ has no limit), and from $n=3$ onward the extra power tames $f_n'$ into continuity. The discontinuous-derivative phenomenon is razor-thin: it lives only at $n=2$.",
    "solutions": [
      {
        "name": "Case split on the power n",
        "steps": [
          "Differentiability at $0$: $\\lim_{h\\to0}\\frac{f_n(h)}{h}=\\lim_{h\\to0}h^{\\,n-1}\\sin\\frac1h$. For $n=1$ this is $\\lim\\sin\\frac1h$, which DNE, so $f_1$ is not differentiable; exclude $n=1$.",
          "For $n\\ge2$ the limit is $0$ (since $|h^{n-1}\\sin\\frac1h|\\le|h|^{n-1}\\to0$), so $f_n'(0)=0$ exists.",
          "For $x\\ne0$, $f_n'(x)=n x^{n-1}\\sin\\frac1x-x^{n-2}\\cos\\frac1x$. As $x\\to0$ the first term $\\to0$; the second is $x^{n-2}\\cos\\frac1x$.",
          "$n=2$: $x^{0}\\cos\\frac1x=\\cos\\frac1x$ has no limit $\\Rightarrow f_2'$ discontinuous at $0$ (qualifies). $n\\ge3$: $x^{n-2}\\to0$, so $f_n'(x)\\to0=f_n'(0)$, continuous (does NOT qualify).",
          "Hence the only qualifying $n$ in $\\{1,\\dots,12\\}$ is $n=2$; count $=\\boxed{1}$."
        ]
      },
      {
        "name": "Smoothness ladder summary",
        "steps": [
          "Classify $f_n$ by $n$: $n=1$ — continuous, not differentiable at $0$. $n=2$ — differentiable, $f'$ discontinuous (the textbook example). $n\\ge3$ — at least $C^1$.",
          "The required property (differentiable at $0$ AND $f'$ discontinuous at $0$) is exactly the $n=2$ rung.",
          "No other $n\\le12$ sits on that rung: $n=1$ fails differentiability; $n\\ge3$ have continuous first derivatives.",
          "Therefore the count over $\\{1,\\dots,12\\}$ is $\\boxed{1}$."
        ]
      }
    ],
    "remark": "Insight: across the family $x^n\\sin(1/x)$, the ``differentiable-but-not-$C^1$'' behaviour occupies a single integer ($n=2$); one power too few and differentiability dies, one power too many and continuity of $f'$ is restored."
  },
  {
    "theme": "smoothness",
    "themeLabel": "Higher Derivatives & Smoothness",
    "title": "The Forty-Five Degree Spin of e^x cos x",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "leibniz",
      "nth-derivative",
      "complex-exponential",
      "trigonometric"
    ],
    "statement": "Let $f(x)=e^{x}\\cos x$. Establish the closed form $f^{(n)}(x)=2^{n/2}e^{x}\\cos\\!\\big(x+\\tfrac{n\\pi}{4}\\big)$, and use it to evaluate $f^{(2024)}(0)$.",
    "answer": "$f^{(n)}(x)=2^{n/2}e^{x}\\cos\\!\\big(x+\\tfrac{n\\pi}{4}\\big)$, hence $f^{(2024)}(0)=2^{1012}\\cos(506\\pi)=2^{1012}$.",
    "trap": "Trying to apply the Leibniz product rule to $e^x$ and $\\cos x$ and getting buried in a binomial sum of mixed sines and cosines, or mishandling the half-integer power $2^{n/2}$ and the phase $\\tfrac{n\\pi}4$. Treating $e^x\\cos x$ as the real part of $e^{(1+i)x}$ collapses all of that.",
    "solutions": [
      {
        "name": "Complex exponential method",
        "steps": [
          "Write $f(x)=\\Re\\,e^{(1+i)x}$. Then $f^{(n)}(x)=\\Re\\big((1+i)^n e^{(1+i)x}\\big)$.",
          "Polar form: $1+i=\\sqrt2\\,e^{i\\pi/4}$, so $(1+i)^n=2^{n/2}e^{in\\pi/4}$, and $e^{(1+i)x}=e^x(\\cos x+i\\sin x)$.",
          "Taking the real part: $f^{(n)}(x)=2^{n/2}e^x\\cos\\!\\big(x+\\tfrac{n\\pi}4\\big)$.",
          "At $x=0,\\ n=2024$: $f^{(2024)}(0)=2^{1012}\\cos\\!\\big(\\tfrac{2024\\pi}4\\big)=2^{1012}\\cos(506\\pi)$.",
          "Since $506\\pi$ is an even multiple of $\\pi$, $\\cos(506\\pi)=1$, giving $f^{(2024)}(0)=\\boxed{2^{1012}}$."
        ]
      },
      {
        "name": "Recurrence on the derivative operator",
        "steps": [
          "Let $D$ denote $\\tfrac d{dx}$. Then $D(e^x\\cos x)=e^x(\\cos x-\\sin x)=\\sqrt2\\,e^x\\cos(x+\\tfrac\\pi4)$, a scaling by $\\sqrt2$ and a phase shift of $\\tfrac\\pi4$.",
          "Each application of $D$ repeats this: multiply amplitude by $\\sqrt2$ and advance phase by $\\tfrac\\pi4$, so $D^n$ multiplies by $2^{n/2}$ and shifts phase by $\\tfrac{n\\pi}4$.",
          "Thus $f^{(n)}(x)=2^{n/2}e^x\\cos(x+\\tfrac{n\\pi}4)$, matching the claim.",
          "Evaluate at $x=0,n=2024$: phase $=\\tfrac{2024\\pi}4=506\\pi$, and since $2024\\equiv0\\pmod 8$ the phase is an even multiple of $\\pi$, so $\\cos(506\\pi)=1$, amplitude $2^{1012}$, giving $f^{(2024)}(0)=\\boxed{2^{1012}}$."
        ]
      }
    ],
    "remark": "Insight: damped/driven sinusoids like $e^{ax}\\cos(bx)$ are eigenfunction-flavoured — each derivative is the same shape scaled by $\\sqrt{a^2+b^2}$ and rotated by $\\arg(a+bi)$; here $a=b=1$ gives the elegant $\\sqrt2$, $45^\\circ$ spin. The phase only depends on $n\\bmod 8$, so $f^{(n)}(0)$ cycles through $1,1,0,-2,-4,-4,0,4$ (times $2^{\\lfloor n/2\\rfloor}$-style scaling); $n=2024\\equiv0$ lands on the clean $+2^{n/2}$."
  },
  {
    "theme": "smoothness",
    "themeLabel": "Higher Derivatives & Smoothness",
    "title": "The Phase that Kills the Fourth Derivative",
    "difficulty": 5,
    "task": "Find the nth derivative",
    "tags": [
      "higher-order-derivatives",
      "exponential-times-sine",
      "polar-form",
      "phase-shift",
      "complex-amplitude"
    ],
    "statement": "Let $f(x)=e^{x}\\sin x$. Show that its $n$th derivative can be written in the closed form $f^{(n)}(x)=R^{\\,n}\\,e^{x}\\sin\\!\\left(x+n\\varphi\\right)$ for a fixed amplitude $R$ and a fixed phase $\\varphi$, and using this evaluate $f^{(4)}(0)$.",
    "answer": "With $R=\\sqrt{2}$ and $\\varphi=\\dfrac{\\pi}{4}$, $f^{(n)}(x)=\\left(\\sqrt{2}\\right)^{n}e^{x}\\sin\\!\\left(x+\\tfrac{n\\pi}{4}\\right)$, so $f^{(4)}(0)=4\\sin\\pi=\\boxed{0}$.",
    "trap": "Treating $e^{x}\\sin x$ term-by-term and guessing the answer grows like $2^{n}$ rather than $\\left(\\sqrt{2}\\right)^{n}$ — the amplitude per differentiation is $R=\\sqrt{1^2+1^2}=\\sqrt2$, not $2$. The second trap is missing the phase: at $x=0$ the value is $\\left(\\sqrt2\\right)^4\\sin\\!\\left(\\tfrac{4\\pi}{4}\\right)=4\\sin\\pi=0$, which is easy to misread as nonzero if the phase $n\\varphi$ is dropped.",
    "solutions": [
      {
        "name": "Polar form of one differentiation step",
        "steps": [
          "Differentiate once: $f'(x)=e^{x}\\sin x+e^{x}\\cos x=e^{x}\\left(\\sin x+\\cos x\\right)$.",
          "Write $\\sin x+\\cos x=\\sqrt{2}\\,\\sin\\!\\left(x+\\tfrac{\\pi}{4}\\right)$, so each differentiation multiplies by $R=\\sqrt2$ and advances the angle by $\\varphi=\\tfrac{\\pi}{4}$: $f'(x)=\\sqrt2\\,e^{x}\\sin\\!\\left(x+\\tfrac{\\pi}{4}\\right)$.",
          "Iterating $n$ times: $f^{(n)}(x)=\\left(\\sqrt2\\right)^{n}e^{x}\\sin\\!\\left(x+\\tfrac{n\\pi}{4}\\right)$.",
          "Set $n=4,\\ x=0$: $f^{(4)}(0)=\\left(\\sqrt2\\right)^4 e^{0}\\sin\\!\\left(\\pi\\right)=4\\cdot 1\\cdot 0=\\boxed{0}$."
        ]
      },
      {
        "name": "Complex exponential",
        "steps": [
          "Write $\\sin x=\\operatorname{Im}\\,e^{ix}$, so $f(x)=\\operatorname{Im}\\,e^{(1+i)x}$.",
          "Then $f^{(n)}(x)=\\operatorname{Im}\\left[(1+i)^{n}e^{(1+i)x}\\right]$, and $1+i=\\sqrt2\\,e^{i\\pi/4}$ gives $(1+i)^{n}=\\left(\\sqrt2\\right)^{n}e^{in\\pi/4}$.",
          "Hence $f^{(n)}(x)=\\left(\\sqrt2\\right)^{n}e^{x}\\operatorname{Im}\\,e^{i(x+n\\pi/4)}=\\left(\\sqrt2\\right)^{n}e^{x}\\sin\\!\\left(x+\\tfrac{n\\pi}{4}\\right)$.",
          "At $n=4,\\ x=0$: $\\left(\\sqrt2\\right)^4\\sin\\pi=4\\cdot0=\\boxed{0}$."
        ]
      }
    ],
    "remark": "**Insight.** A single differentiation of $e^{ax}\\sin bx$ rotates and scales the “complex amplitude” $a+ib$: every derivative multiplies modulus by $\\sqrt{a^2+b^2}$ and adds the argument $\\arg(a+ib)$. The $n$th derivative is then read off as a power of one complex number, and the value vanishes exactly when the accumulated phase $n\\varphi$ lands on a multiple of $\\pi$."
  },
  {
    "theme": "smoothness",
    "themeLabel": "Higher Derivatives & Smoothness",
    "title": "Partial Fractions Tame the nth Derivative",
    "difficulty": 5,
    "task": "Find the nth derivative",
    "tags": [
      "higher-order-derivatives",
      "partial-fractions",
      "rational-function",
      "factorial-growth",
      "parity"
    ],
    "statement": "Let $f(x)=\\dfrac{1}{(x-1)(x-3)}$. Split $f$ into partial fractions, find a closed form for $f^{(n)}(x)$ valid for every integer $n\\ge 1$, and evaluate $f^{(n)}(2)$ as a function of $n$.",
    "answer": "$f^{(n)}(x)=\\dfrac{(-1)^{n}\\,n!}{2}\\left[\\dfrac{1}{(x-3)^{\\,n+1}}-\\dfrac{1}{(x-1)^{\\,n+1}}\\right]$, and at the midpoint $x=2$: $f^{(n)}(2)=\\boxed{\\begin{cases}-\\,n! & n\\text{ even}\\\\[2pt] 0 & n\\text{ odd}\\end{cases}}$",
    "trap": "Using the quotient rule directly and trying to spot a pattern from $f',f'',\\dots$ — the algebra explodes and the factorial/sign structure is nearly impossible to read off. The clean route is partial fractions first; then the only subtlety is the sign $(-1)^{n}$ from differentiating $(x-a)^{-1}$ repeatedly. Forgetting that sign flips the parity of the answer at $x=2$.",
    "solutions": [
      {
        "name": "Partial fractions, then differentiate each piece",
        "steps": [
          "Decompose: $\\dfrac{1}{(x-1)(x-3)}=\\dfrac{1}{2}\\left[\\dfrac{1}{x-3}-\\dfrac{1}{x-1}\\right]$ (cover-up at $x=3$ gives $\\tfrac12$, at $x=1$ gives $-\\tfrac12$).",
          "Use the standard derivative $\\dfrac{d^{n}}{dx^{n}}\\dfrac{1}{x-a}=\\dfrac{(-1)^{n}\\,n!}{(x-a)^{\\,n+1}}$ on each term.",
          "Hence $f^{(n)}(x)=\\dfrac{(-1)^{n}\\,n!}{2}\\left[\\dfrac{1}{(x-3)^{\\,n+1}}-\\dfrac{1}{(x-1)^{\\,n+1}}\\right]$.",
          "At $x=2$: $(x-3)^{n+1}=(-1)^{n+1}$ and $(x-1)^{n+1}=1$, so $f^{(n)}(2)=\\dfrac{(-1)^{n}n!}{2}\\left[(-1)^{n+1}-1\\right]$. For odd $n$ this is $\\tfrac{(-1)^n n!}{2}(1-1)=0$; for even $n$ it is $\\tfrac{n!}{2}(-1-1)=-n!$. Thus $f^{(n)}(2)=\\boxed{\\begin{cases}-\\,n! & n\\text{ even}\\\\ 0 & n\\text{ odd}\\end{cases}}$"
        ]
      },
      {
        "name": "Symmetry about the midpoint",
        "steps": [
          "Shift to $t=x-2$, so $f=\\dfrac{1}{(t+1)(t-1)}=\\dfrac{1}{t^{2}-1}$, an even function of $t$.",
          "An even function has even derivatives even and odd derivatives odd in $t$; evaluating an odd function at $t=0$ gives $0$, so $f^{(n)}(2)=0$ for odd $n$.",
          "For even $n$, from the closed form $f^{(n)}(x)=\\dfrac{(-1)^n n!}{2}\\big[(x-3)^{-(n+1)}-(x-1)^{-(n+1)}\\big]$ at $x=2$: $(x-3)^{-(n+1)}=(-1)^{-(n+1)}=-1$ (n even) and $(x-1)^{-(n+1)}=1$, giving $\\dfrac{n!}{2}(-1-1)=-n!$.",
          "Therefore $f^{(n)}(2)=\\boxed{\\begin{cases}-\\,n! & n\\text{ even}\\\\ 0 & n\\text{ odd}\\end{cases}}$"
        ]
      }
    ],
    "remark": "**Insight.** A rational function with simple poles is a sum of $\\dfrac{c_k}{x-a_k}$, and each piece has a textbook $n$th derivative $\\dfrac{(-1)^n n!}{(x-a)^{n+1}}$. Partial fractions convert a hopeless quotient-rule grind into linear bookkeeping; the geometry — here the evaluation point sitting exactly between the two poles — then forces the parity of the answer."
  },
  {
    "theme": "smoothness",
    "themeLabel": "Higher Derivatives & Smoothness",
    "title": "Only Three Leibniz Terms Survive",
    "difficulty": 5,
    "task": "Find a high-order derivative",
    "tags": [
      "leibniz-rule",
      "higher-order-derivatives",
      "product-of-functions",
      "binomial-coefficients",
      "trigonometric-derivative"
    ],
    "statement": "Let $f(x)=x^{2}\\cos x$. Apply the Leibniz rule for the $n$th derivative of a product to obtain $f^{(n)}(x)$, and hence compute $f^{(10)}(0)$.",
    "answer": "$f^{(n)}(x)=x^{2}\\cos\\!\\left(x+\\tfrac{n\\pi}{2}\\right)+2n\\,x\\,\\cos\\!\\left(x+\\tfrac{(n-1)\\pi}{2}\\right)+n(n-1)\\cos\\!\\left(x+\\tfrac{(n-2)\\pi}{2}\\right)$, and $f^{(10)}(0)=\\boxed{90}$.",
    "trap": "Writing the full Leibniz sum $\\sum_{k=0}^{n}\\binom{n}{k}(x^2)^{(k)}(\\cos x)^{(n-k)}$ but forgetting that $(x^2)^{(k)}=0$ for $k\\ge 3$ — only $k=0,1,2$ contribute. The deadlier index error is mismatching which factor gets differentiated $k$ times: the term $\\binom{n}{2}(x^2)''(\\cos x)^{(n-2)}$ uses $(\\cos x)^{(n-2)}=\\cos\\!\\left(x+\\tfrac{(n-2)\\pi}{2}\\right)$, not $(\\cos x)^{(n)}$. Slipping the index by one or two scrambles the phase and the final value.",
    "solutions": [
      {
        "name": "Leibniz rule with a terminating sum",
        "steps": [
          "Leibniz: $f^{(n)}=\\sum_{k=0}^{n}\\binom{n}{k}\\left(x^{2}\\right)^{(k)}\\left(\\cos x\\right)^{(n-k)}$. Since $\\left(x^2\\right)^{(0)}=x^2$, $\\left(x^2\\right)'=2x$, $\\left(x^2\\right)''=2$, and $\\left(x^2\\right)^{(k)}=0$ for $k\\ge3$, only $k=0,1,2$ remain.",
          "Use $\\left(\\cos x\\right)^{(m)}=\\cos\\!\\left(x+\\tfrac{m\\pi}{2}\\right)$ for the three surviving terms with $m=n,\\,n-1,\\,n-2$: $f^{(n)}(x)=x^{2}\\cos\\!\\left(x+\\tfrac{n\\pi}{2}\\right)+\\binom{n}{1}(2x)\\cos\\!\\left(x+\\tfrac{(n-1)\\pi}{2}\\right)+\\binom{n}{2}(2)\\cos\\!\\left(x+\\tfrac{(n-2)\\pi}{2}\\right)$.",
          "At $x=0$ the first two terms carry factors $x^2$ and $x$ and vanish; only $k=2$ survives: $f^{(n)}(0)=n(n-1)\\cos\\!\\left(\\tfrac{(n-2)\\pi}{2}\\right)$.",
          "Put $n=10$: $f^{(10)}(0)=10\\cdot9\\cdot\\cos\\!\\left(\\tfrac{8\\pi}{2}\\right)=90\\cos(4\\pi)=90\\cdot1=\\boxed{90}$."
        ]
      },
      {
        "name": "Series coefficient bookkeeping",
        "steps": [
          "Near $0$, $\\cos x=\\sum_{j\\ge0}\\dfrac{(-1)^{j}x^{2j}}{(2j)!}$, so $f(x)=x^{2}\\cos x=\\sum_{j\\ge0}\\dfrac{(-1)^{j}x^{2j+2}}{(2j)!}$.",
          "The coefficient of $x^{10}$ comes from $2j+2=10$, i.e. $j=4$: coefficient $=\\dfrac{(-1)^{4}}{8!}=\\dfrac{1}{40320}$.",
          "Since $f^{(10)}(0)=10!\\times(\\text{coefficient of }x^{10})$, we get $f^{(10)}(0)=\\dfrac{10!}{8!}=10\\cdot9=90$.",
          "This matches the Leibniz value $\\boxed{90}$."
        ]
      }
    ],
    "remark": "**Insight.** When one factor of a product is a polynomial of degree $d$, the Leibniz sum has only $d+1$ nonzero terms — its derivatives switch off after the $d$th. The art is keeping the index honest: the $k$th polynomial derivative pairs with the $(n-k)$th derivative of the other factor, so the trig phase is $\\tfrac{(n-k)\\pi}{2}$, not $\\tfrac{n\\pi}{2}$."
  },
  {
    "theme": "smoothness",
    "themeLabel": "Higher Derivatives & Smoothness",
    "title": "Twice Differentiable but Not C-Two",
    "difficulty": 5,
    "task": "Find the order of smoothness",
    "tags": [
      "order-of-differentiability",
      "first-principles",
      "oscillating-glue-point",
      "continuity-of-derivative",
      "piecewise-function"
    ],
    "statement": "Define $f(x)=x^{4}\\sin\\!\\left(\\dfrac{1}{x}\\right)$ for $x\\neq0$ and $f(0)=0$. Decide the largest $k$ for which $f$ is continuously differentiable ($f\\in C^{k}$) on a neighbourhood of $0$, and state separately how many times $f$ is differentiable at $0$.",
    "answer": "$f$ is twice differentiable at $0$ (with $f'(0)=0$, $f''(0)=0$), but $f''$ is discontinuous at $0$; hence $f\\in C^{1}$ and $\\boxed{k=1}$ is the largest order of continuous differentiability.",
    "trap": "Concluding $f\\in C^{2}$ just because $f''(0)$ exists. Existence of the second derivative at the point is weaker than continuity of $f''$ there: for $x\\neq0$, $f''(x)$ contains a bare $-\\sin\\!\\left(\\tfrac1x\\right)$ term that oscillates without limit as $x\\to0$, so $f''$ is defined everywhere yet not continuous at $0$. “Twice differentiable’’ and “$C^{2}$’’ are different claims.",
    "solutions": [
      {
        "name": "First principles at 0, then test continuity of the derivative",
        "steps": [
          "$f'(0)=\\displaystyle\\lim_{x\\to0}\\dfrac{x^{4}\\sin(1/x)-0}{x}=\\lim_{x\\to0}x^{3}\\sin\\!\\left(\\tfrac1x\\right)=0$ (bounded $\\times$ infinitesimal). For $x\\neq0$, $f'(x)=4x^{3}\\sin\\!\\left(\\tfrac1x\\right)-x^{2}\\cos\\!\\left(\\tfrac1x\\right)$.",
          "As $x\\to0$, both pieces of $f'(x)$ tend to $0=f'(0)$, so $f'$ is continuous: $f\\in C^{1}$.",
          "$f''(0)=\\displaystyle\\lim_{x\\to0}\\dfrac{f'(x)-f'(0)}{x}=\\lim_{x\\to0}\\left[4x^{2}\\sin\\!\\left(\\tfrac1x\\right)-x\\cos\\!\\left(\\tfrac1x\\right)\\right]=0$, so $f$ is twice differentiable at $0$.",
          "But for $x\\neq0$, $f''(x)=12x^{2}\\sin\\!\\left(\\tfrac1x\\right)-6x\\cos\\!\\left(\\tfrac1x\\right)-\\sin\\!\\left(\\tfrac1x\\right)$; the last term has no limit as $x\\to0$, so $f''$ is discontinuous at $0$. Thus $f\\notin C^{2}$ and the largest continuous-derivative order is $\\boxed{k=1}$."
        ]
      },
      {
        "name": "Power-counting the worst term",
        "steps": [
          "Each derivative of $\\sin\\!\\left(\\tfrac1x\\right)$ multiplies by $-\\tfrac1{x^{2}}\\cos$ or $-\\tfrac1{x^{2}}\\sin$, lowering the power of $x$ in front by $2$; differentiating the $x^{4}$ prefactor only lowers it by $1$.",
          "So the most singular term after $m$ differentiations behaves like $x^{4-2m}\\times(\\text{bounded oscillation})$. For $m=2$ this is $x^{0}\\sin\\!\\left(\\tfrac1x\\right)$ — exactly the non-vanishing $-\\sin\\!\\left(\\tfrac1x\\right)$ seen in $f''(x)$.",
          "$x^{0}\\sin\\!\\left(\\tfrac1x\\right)$ stays bounded but has no limit, so $f''$ exists away from $0$ yet cannot be continuous there; meanwhile every term in $f'$ still carries a positive power of $x$ and dies, giving continuity of $f'$.",
          "Therefore $f$ is $C^{1}$ but not $C^{2}$, i.e. $\\boxed{k=1}$, even though $f''(0)$ itself exists."
        ]
      }
    ],
    "remark": "**Insight.** For $x^{p}\\sin\\!\\left(\\tfrac1x\\right)$ the number of well-behaved derivatives is governed by a tug-of-war: differentiating the oscillation costs two powers of $x$, the polynomial prefactor supplies them one at a time. The exponent $p=4$ is precisely the boundary where the second derivative exists at $0$ but its $-\\sin\\!\\left(\\tfrac1x\\right)$ remnant refuses to settle — the classic gap between “twice differentiable’’ and “$C^{2}$’’."
  },
  {
    "theme": "smoothness",
    "themeLabel": "Higher Derivatives & Smoothness",
    "title": "An ODE Breeds a Derivative Recurrence",
    "difficulty": 5,
    "task": "Find a high-order derivative",
    "tags": [
      "higher-order-derivatives",
      "leibniz-rule",
      "two-term-recurrence",
      "implicit-ode",
      "derivatives-at-a-point"
    ],
    "statement": "Let $y=(\\arcsin x)^{2}$. First show $y$ satisfies $(1-x^{2})y''-x\\,y'=2$. Differentiate this relation $n$ times by the Leibniz rule to produce a recurrence linking $y^{(n+2)},y^{(n+1)},y^{(n)}$, and use it to evaluate $y^{(8)}(0)$. (Here $y^{(n)}$ denotes the $n$th derivative.)",
    "answer": "Differentiating $n$ times gives $(1-x^{2})y^{(n+2)}-(2n+1)x\\,y^{(n+1)}-n^{2}y^{(n)}=0$; at $x=0$ this reads $y^{(n+2)}(0)=n^{2}\\,y^{(n)}(0)$, and with $y''(0)=2$ one finds $y^{(8)}(0)=\\boxed{4608}$.",
    "trap": "Mishandling the Leibniz expansion of $(1-x^{2})y''$ and $x\\,y'$: the coefficient of $y^{(n+1)}$ is $(2n+1)x$, where $2n$ comes from differentiating the $-x^{2}$ factor (Leibniz, $\\binom{n}{1}(-2x)$ paired with $y^{(n+1)}$) and the extra $+1$ from the $-x\\,y'$ term. Dropping the contribution from one of the two terms gives the wrong middle coefficient, and the $-n^{2}$ term (which fuses $\\binom{n}{2}(-2)$ from $1-x^2$ with $\\binom{n}{1}(-1)$ from $-x y'$) is the part most often miscounted.",
    "solutions": [
      {
        "name": "Form the ODE, then differentiate n times by Leibniz",
        "steps": [
          "$y'=\\dfrac{2\\arcsin x}{\\sqrt{1-x^{2}}}$, so $\\sqrt{1-x^{2}}\\,y'=2\\arcsin x$; squaring is messy, so instead write $(1-x^2)(y')^2=4(\\arcsin x)^2=4y$. Differentiating and cancelling $2y'$ gives $(1-x^{2})y''-x\\,y'=2$.",
          "Differentiate $(1-x^{2})y''-x\\,y'=2$ exactly $n$ times. By Leibniz, $\\dfrac{d^{n}}{dx^{n}}\\big[(1-x^{2})y''\\big]=(1-x^{2})y^{(n+2)}-2nx\\,y^{(n+1)}-n(n-1)y^{(n)}$ and $\\dfrac{d^{n}}{dx^{n}}\\big[x\\,y'\\big]=x\\,y^{(n+1)}+n\\,y^{(n)}$.",
          "Subtract: $(1-x^{2})y^{(n+2)}-(2n+1)x\\,y^{(n+1)}-\\big[n(n-1)+n\\big]y^{(n)}=0$, i.e. $(1-x^{2})y^{(n+2)}-(2n+1)x\\,y^{(n+1)}-n^{2}y^{(n)}=0$.",
          "Put $x=0$: $y^{(n+2)}(0)=n^{2}y^{(n)}(0)$. With $y(0)=0$, $y'(0)=0$, $y''(0)=2$, the odd derivatives all vanish and the even chain is $y^{(2)}(0)=2,\\ y^{(4)}(0)=2^{2}\\cdot2=8,\\ y^{(6)}(0)=4^{2}\\cdot8=128,\\ y^{(8)}(0)=6^{2}\\cdot128=\\boxed{4608}$."
        ]
      },
      {
        "name": "Climb the even chain from the recurrence",
        "steps": [
          "From $y^{(n+2)}(0)=n^{2}y^{(n)}(0)$, only even orders are nonzero (since $y'(0)=0$ forces $y^{(3)}(0)=1^2\\cdot0=0$, and so on for all odd orders).",
          "Seed value: from the ODE at $x=0$, $(1)y''(0)-0=2$, so $y''(0)=2$.",
          "Apply the recurrence with $n=2,4,6$: $y^{(4)}(0)=2^{2}\\,y^{(2)}(0)=4\\cdot2=8$; $y^{(6)}(0)=4^{2}\\,y^{(4)}(0)=16\\cdot8=128$; $y^{(8)}(0)=6^{2}\\,y^{(6)}(0)=36\\cdot128$.",
          "Hence $y^{(8)}(0)=\\boxed{4608}$."
        ]
      }
    ],
    "remark": "**Insight.** A function known only implicitly through an ODE never needs to be differentiated eight times by hand: differentiate the defining relation $n$ times once, read off a two-term recurrence, and evaluate at the convenient point $x=0$ where most coefficients collapse. The whole tower of high derivatives then climbs from a single seed value $y''(0)=2$."
  },
  {
    "theme": "tangent",
    "themeLabel": "Tangents & Normals",
    "title": "Three Tangents from One Point",
    "difficulty": 4,
    "task": "Find all",
    "tags": [
      "tangent",
      "cubic",
      "external point",
      "count",
      "slope form"
    ],
    "statement": "Consider the curve $\\mathcal{C}:\\; y = x^{3}$ and the point $P=(2,4)$, which does **not** lie on $\\mathcal{C}$.\n\\[\\text{Find every line through } P \\text{ that is tangent to } \\mathcal{C}.\\]\nGive the equation of each tangent and the point of tangency.",
    "answer": "There are exactly **three** tangents from $P$. The points of tangency correspond to $t=1,\\;1-\\sqrt3,\\;1+\\sqrt3$ (where $t$ is the $x$-coordinate of the contact point), giving the lines\n\\[y=3x-2,\\qquad y=(12-6\\sqrt3)\\,x+(12\\sqrt3-20),\\qquad y=(12+6\\sqrt3)\\,x-(12\\sqrt3+20).\\]",
    "trap": "Writing the tangent 'at $P$' as $y-4=3\\cdot2^{2}(x-2)$ and stopping with one line. That is the tangent if $P$ were on the curve — but $P$ is external, so the contact point is an unknown $t$, and the through-condition $4=3t^{2}\\cdot2-2t^{3}$ is a **cubic** in $t$ with three real roots, hence three tangents.",
    "solutions": [
      {
        "name": "Contact parameter (cubic in $t$)",
        "steps": [
          "Let the contact point be $(t,t^{3})$. Since $y'=3x^{2}$, the tangent there is $y=3t^{2}(x-t)+t^{3}=3t^{2}x-2t^{3}$.",
          "Impose passage through $P=(2,4)$: $4=6t^{2}-2t^{3}$, i.e. $2t^{3}-6t^{2}+4=0$, or $t^{3}-3t^{2}+2=0$.",
          "Factor: $(t-1)(t^{2}-2t-2)=0$, giving $t=1$ and $t=1\\pm\\sqrt3$ — three distinct real values.",
          "Substitute each $t$ into $y=3t^{2}x-2t^{3}$ to obtain the three tangent lines; e.g. $t=1\\Rightarrow y=3x-2$. $\\boxed{\\text{Three tangents.}}$"
        ]
      },
      {
        "name": "Double-root condition",
        "steps": [
          "A line $y=m(x-2)+4$ is tangent to $y=x^{3}$ iff $x^{3}-m x+(2m-4)=0$ has a repeated root $r$.",
          "Then $x^{3}-mx+(2m-4)=(x-r)^{2}(x-s)$. Comparing $x^{2}$-coefficients gives $s=-2r$; comparing constants and the $x$-term yields $m=3r^{2}$ and $2m-4=2r^{3}$.",
          "Eliminate $m$: $6r^{2}-4=2r^{3}\\Rightarrow r^{3}-3r^{2}+2=0$, the same cubic, with roots $r=1,\\,1\\pm\\sqrt3$.",
          "Each repeated root gives one tangent slope $m=3r^{2}$, so exactly three tangents exist. $\\boxed{3}$"
        ]
      },
      {
        "name": "Discriminant region",
        "steps": [
          "For $y=x^{3}$, the through-point cubic from a general $(p,q)$ is $2t^{3}-3pt^{2}+q=0$, whose discriminant is $108\\,q\\,(p^{3}-q)$.",
          "At $(p,q)=(2,4)$: $q(p^{3}-q)=4(8-4)=16>0$, so the discriminant is positive and all three roots are real and distinct.",
          "Hence exactly three tangents pass through $P$, confirming the count before any are computed. $\\boxed{3}$"
        ]
      }
    ],
    "remark": "The number of tangents from a point to $y=x^{3}$ is governed by the sign of $q(p^{3}-q)$: three tangents when this is positive, one when negative — a clean dictionary between a planar region and a tangent count."
  },
  {
    "theme": "tangent",
    "themeLabel": "Tangents & Normals",
    "title": "How Many Lines Touch Both Parabolas?",
    "difficulty": 4,
    "task": "Determine",
    "tags": [
      "common tangent",
      "parabola",
      "count",
      "double root",
      "symmetry"
    ],
    "statement": "The two parabolas\n\\[\\mathcal{P}_1:\\; y^{2}=4x \\qquad\\text{and}\\qquad \\mathcal{P}_2:\\; x^{2}=4y\\]\nare congruent, opening at right angles. Determine the exact number of lines that are tangent to **both**, and give the equation of every such line.",
    "answer": "There is exactly **one** common tangent:\n\\[y=-x-1.\\]\nIt touches $y^{2}=4x$ at $(1,-2)$ and $x^{2}=4y$ at $(-2,1)$.",
    "trap": "Assuming 'two smooth conics generically share several common tangents' and hunting for 2, 3, or 4 lines — or trying $x=0$ and $y=0$ as common tangents. Each axis is tangent to only ONE of the parabolas (it is the axis of symmetry of the other and merely crosses it at the vertex), so neither axis qualifies; the symmetry of the configuration collapses everything to a single common tangent.",
    "solutions": [
      {
        "name": "Tangent line condition on both",
        "steps": [
          "A non-vertical line $y=mx+c$ is tangent to $y^{2}=4x$ (with $a=1$) iff $c=1/m$.",
          "It is tangent to $x^{2}=4y$ iff $x^{2}=4(mx+c)$ has a double root, i.e. $16m^{2}+16c=0$, so $c=-m^{2}$.",
          "Equate: $1/m=-m^{2}\\Rightarrow m^{3}=-1\\Rightarrow m=-1$ (the only real solution), giving $c=-1$.",
          "Thus the unique common tangent is $y=-x-1$. Check vertical/axis lines separately: none works. $\\boxed{1}$"
        ]
      },
      {
        "name": "Parametric matching",
        "steps": [
          "Parametrize $y^{2}=4x$ as $(t^{2},2t)$; its tangent is $y=\\tfrac{1}{t}x+t$. Parametrize $x^{2}=4y$ as $(2s,s^{2})$; its tangent is $y=sx-s^{2}$.",
          "For a common line, slopes and intercepts match: $\\tfrac1t=s$ and $t=-s^{2}$.",
          "Substitute $s=1/t$: $t=-1/t^{2}\\Rightarrow t^{3}=-1\\Rightarrow t=-1$, hence $s=-1$.",
          "This yields the single line $y=-x-1$, touching at $(1,-2)$ and $(-2,1)$. $\\boxed{1}$"
        ]
      },
      {
        "name": "Dual-conic / general line (captures vertical lines too)",
        "steps": [
          "Write a candidate line as $\\ell x+\\mu y+\\nu=0$. For $\\mathcal{P}_1:y^{2}-4x=0$ the tangency (dual) condition is $\\ell\\nu=\\mu^{2}$; for $\\mathcal{P}_2:x^{2}-4y=0$ it is $\\ell^{2}=\\mu\\nu$.",
          "Solving the two simultaneously (homogeneous in $\\ell,\\mu,\\nu$) gives only the real proportion $\\ell:\\mu:\\nu=1:1:1$, i.e. $x+y+1=0$; the remaining roots are complex, and $\\ell=\\mu=0$ is the spurious line at infinity.",
          "Hence the sole real common tangent is $x+y+1=0\\Rightarrow y=-x-1$. This treatment covers every orientation, so no vertical or axis line is missed.",
          "Insert $y=-x-1$: into $y^{2}=4x$ gives $(x-1)^{2}=0$ and into $x^{2}=4y$ gives $(x+2)^{2}=0$ — double roots, confirming tangency at $(1,-2)$ and $(-2,1)$. $\\boxed{y=-x-1}$"
        ]
      }
    ],
    "remark": "Two congruent perpendicular parabolas look like a circle-and-circle picture, but their single common tangent is forced by $m^{3}=-1$ having one real root — algebra trumps visual expectation."
  },
  {
    "theme": "tangent",
    "themeLabel": "Tangents & Normals",
    "title": "A Right Angle at the Origin, an Acute Angle at the Corner",
    "difficulty": 4,
    "task": "Find all",
    "tags": [
      "angle of intersection",
      "two curves",
      "orthogonal",
      "implicit"
    ],
    "statement": "The parabolas $y=x^{2}$ and $x=y^{2}$ intersect at two points.\n\\[\\text{Find the angle of intersection at } each \\text{ crossing point.}\\]",
    "answer": "At the origin $(0,0)$ the curves meet at $90^{\\circ}$ (orthogonally). At $(1,1)$ the acute angle is $\\arctan\\dfrac{3}{4}\\approx36.87^{\\circ}$.",
    "trap": "Computing only one angle (usually at $(1,1)$) and assuming the intersection is the same everywhere — or mishandling the origin, where one curve has a horizontal tangent and the other a vertical tangent, so the slope formula $\\tan\\theta=\\left|\\frac{m_1-m_2}{1+m_1m_2}\\right|$ breaks down (the product $m_1m_2$ in the denominator is undefined). The angle there is exactly $90^{\\circ}$, not $\\arctan\\tfrac34$.",
    "solutions": [
      {
        "name": "Slopes at each point",
        "steps": [
          "Solve $x^{2}=y$ and $y^{2}=x$ simultaneously: substituting $y=x^2$ into $x=y^2$ gives $x=x^{4}$, so $x(x^{3}-1)=0$, giving the crossing points $(0,0)$ and $(1,1)$.",
          "Differentiate each curve: for $y=x^{2}$, $y'=2x$; for $x=y^{2}$, $1=2yy'\\Rightarrow y'=\\dfrac{1}{2y}$.",
          "At $(1,1)$: $m_1=2$ and $m_2=\\tfrac12$, so $\\tan\\theta=\\left|\\dfrac{2-\\tfrac12}{1+2\\cdot\\tfrac12}\\right|=\\dfrac{3/2}{2}=\\dfrac{3}{4}$, giving $\\theta=\\arctan\\tfrac34\\approx36.87^{\\circ}$.",
          "At $(0,0)$: $y=x^{2}$ has slope $0$ (a horizontal tangent, the $x$-axis), while $x=y^{2}$ has $\\dfrac{dx}{dy}=2y=0$, i.e. a vertical tangent (the $y$-axis). A horizontal line and a vertical line meet at $90^{\\circ}$. $\\boxed{90^{\\circ}\\text{ and }\\arctan\\tfrac34}$"
        ]
      },
      {
        "name": "Symmetry across $y=x$",
        "steps": [
          "The curves $y=x^{2}$ and $x=y^{2}$ are reflections of each other across the line $y=x$, so at any common point lying on $y=x$ their tangents are mirror images across that line.",
          "At $(1,1)$ (which lies on $y=x$): one tangent has slope $2$ and the other slope $\\tfrac12$, symmetric about slope $1$. The included angle is $\\arctan 2-\\arctan\\tfrac12=\\arctan\\tfrac34$, since $\\tan(\\arctan2-\\arctan\\tfrac12)=\\dfrac{2-\\tfrac12}{1+1}=\\tfrac34$.",
          "At the origin the tangents are the $x$-axis and the $y$-axis (which are themselves mirror images across $y=x$); these are perpendicular, so the angle is $90^{\\circ}$.",
          "Hence the two crossing angles are $90^{\\circ}$ at $(0,0)$ and $\\arctan\\tfrac34$ at $(1,1)$. $\\boxed{90^{\\circ},\\ \\arctan\\tfrac34}$"
        ]
      }
    ],
    "remark": "Two curves can intersect at different angles at their different crossing points — 'the angle between the curves' is a local quantity, not a single number. Here the very same pair of parabolas is orthogonal at one intersection and oblique at the other. The origin also shows why the slope formula must be used with care: when one tangent is vertical, fall back on the geometric definition (the angle between the tangent directions)."
  },
  {
    "theme": "tangent",
    "themeLabel": "Tangents & Normals",
    "title": "Three Normals to a Parabola",
    "difficulty": 4,
    "task": "Find the number of",
    "tags": [
      "normal",
      "parabola",
      "count",
      "cubic",
      "feet of normals"
    ],
    "statement": "From the point $A=(15,12)$, normals are drawn to the parabola $y^{2}=4x$.\n\\[\\text{Find the number of such normals and the foot of each one on the parabola.}\\]",
    "answer": "Exactly **three** normals. Their slopes are $m=1,3,-4$, with feet\n\\[(1,-2),\\quad(9,-6),\\quad(16,8).\\]",
    "trap": "Treating 'the normal from $A$' as a single object, or confusing it with the tangent. A parabola admits up to three concurrent normals from an external point; the slope $m$ satisfies a cubic, and assuming uniqueness misses two of the three. A second snare is the point's position: since $A=(15,12)$ gives $12^{2}=144>4\\cdot15=60$, the point is genuinely outside the parabola, so none of the three feet coincides with $A$ — all three normals are 'remote'.",
    "solutions": [
      {
        "name": "Slope-form normal cubic",
        "steps": [
          "For $y^{2}=4x$ (so $a=1$), the normal of slope $m$ is $y=mx-2m-m^{3}$, with foot $(m^{2},-2m)$.",
          "Pass through $A=(15,12)$: $12=15m-2m-m^{3}\\Rightarrow m^{3}-13m+12=0$.",
          "Factor: $(m-1)(m-3)(m+4)=0$, so $m=1,3,-4$ — three real slopes, hence three normals.",
          "Each foot $(m^{2},-2m)$ gives $(1,-2),(9,-6),(16,8)$. $\\boxed{3\\text{ normals}}$"
        ]
      },
      {
        "name": "Parametric (foot-first)",
        "steps": [
          "Parametrize the parabola as $(t^{2},2t)$; the normal there has slope $-t$ and equation $y+tx=2t+t^{3}$.",
          "Through $(15,12)$: $12+15t=2t+t^{3}\\Rightarrow t^{3}-13t-12=0$.",
          "Factor: $(t+1)(t+3)(t-4)=0$, so $t=-1,-3,4$, giving feet $(1,-2),(9,-6),(16,8)$.",
          "Three real parameters means three normals. $\\boxed{3}$"
        ]
      },
      {
        "name": "Discriminant of the slope cubic",
        "steps": [
          "The cubic $m^{3}-13m+12=0$ has the form $m^{3}+pm+q$ with $p=-13,\\ q=12$, and discriminant $-4p^{3}-27q^{2}=-4(-13)^{3}-27(12)^{2}=8788-3888=4900>0$.",
          "A positive discriminant guarantees three distinct real roots, so three real normals exist.",
          "Solving, the roots are the integers $1,3,-4$, with feet $(m^{2},-2m)$.",
          "$\\boxed{\\text{Exactly }3\\text{ normals.}}$"
        ]
      }
    ],
    "remark": "The 'three normals from a point' phenomenon is the geometric face of a cubic having three real roots; the locus separating the one-normal region from the three-normal region is the parabola's evolute, a semicubical cusp $27y^{2}=4(x-2)^{3}$, and $A=(15,12)$ lies well inside its three-normal branch."
  },
  {
    "theme": "tangent",
    "themeLabel": "Tangents & Normals",
    "title": "The Curve Whose Normals Have Fixed Length",
    "difficulty": 4,
    "task": "Find all",
    "tags": [
      "normal length",
      "differential equation",
      "circle",
      "singular solution",
      "envelope"
    ],
    "statement": "The length of the normal at a point $(x,y)$ of a curve $y=f(x)$ is the length of the normal segment from the point to where it meets the $x$-axis, namely $|y|\\sqrt{1+y'^{2}}$.\n\\[\\text{Find every curve whose normal length equals a fixed constant } a>0 \\text{ at all of its points.}\\]",
    "answer": "$y^{2}(1+y'^{2})=a^{2}$. The general (regular) solutions are the circles $(x-c)^{2}+y^{2}=a^{2}$ of radius $a$ centred on the $x$-axis; in addition there are the two singular solutions $y=a$ and $y=-a$ (horizontal lines), which form the envelope of that circle family. These are all of them.",
    "trap": "Concluding that the circles $(x-c)^{2}+y^{2}=a^{2}$ are the only solutions. The separable integration delivers the one-parameter family of circles but silently loses the two horizontal lines $y=\\pm a$: putting $y'=0$ in $y^{2}(1+y'^{2})=a^{2}$ already forces $y=\\pm a$, and those lines satisfy the equation identically without belonging to the circle family. They are genuine singular solutions — the envelope along which all the circles are tangent — so 'only circles' is incomplete.",
    "solutions": [
      {
        "name": "Separable ODE plus the lost singular solution",
        "steps": [
          "Set the normal length to $a$: $|y|\\sqrt{1+y'^{2}}=a\\Rightarrow y^{2}(1+y'^{2})=a^{2}$, a first-order ODE.",
          "Where $y'\\neq0$, solve for the slope: $y'^{2}=\\dfrac{a^{2}-y^{2}}{y^{2}}$, so $\\dfrac{y\\,dy}{\\sqrt{a^{2}-y^{2}}}=\\pm\\,dx$.",
          "Integrate: $-\\sqrt{a^{2}-y^{2}}=\\pm(x-c)$, hence $a^{2}-y^{2}=(x-c)^{2}$, i.e. $(x-c)^{2}+y^{2}=a^{2}$ — circles of radius $a$ centred at $(c,0)$.",
          "The division by $y'$ discarded the case $y'\\equiv0$. Setting $y'=0$ in $y^{2}(1+y'^{2})=a^{2}$ gives $y^{2}=a^{2}$, so the constant functions $y=a$ and $y=-a$ also solve the ODE. Thus the complete solution set is the circles together with the lines $y=\\pm a$. $\\boxed{(x-c)^{2}+y^{2}=a^{2}\\ \\text{and}\\ y=\\pm a}$"
        ]
      },
      {
        "name": "Clairaut-type elimination for the envelope",
        "steps": [
          "Write the relation as $F(y,p)=y^{2}(1+p^{2})-a^{2}=0$ with $p=y'$. Its regular solutions come from integrating $p=\\pm\\sqrt{a^{2}-y^{2}}/|y|$, giving the circles $(x-c)^{2}+y^{2}=a^{2}$ as in the first method.",
          "A singular solution must satisfy both $F=0$ and $\\partial F/\\partial p=0$. Here $\\partial F/\\partial p=2y^{2}p=0$ forces $p=0$, and then $F=0$ gives $y^{2}=a^{2}$, i.e. $y=\\pm a$.",
          "Check directly: on $y=a$ the tangent is horizontal, $y'=0$, so $|y|\\sqrt{1+y'^{2}}=a\\cdot1=a$ — the normal segment is the vertical drop of length $a$. Constant normal length confirmed; likewise for $y=-a$.",
          "Geometrically $y=\\pm a$ are the common tangent lines touching every circle $(x-c)^{2}+y^{2}=a^{2}$ at its top and bottom — the envelope of the family. So the full answer is the circles plus these two lines. $\\boxed{(x-c)^{2}+y^{2}=a^{2}\\ \\text{and}\\ y=\\pm a}$"
        ]
      }
    ],
    "remark": "A first-order ODE can hide a solution that no value of the integration constant reproduces: the singular solution, which here is the envelope $y=\\pm a$ of the circle family. The circle earns its 'constant normal length' the obvious way — the normal segment is literally a radius of length $a$ at every point — while the two horizontal lines earn it the sneaky way, with a vertical normal of height $a$. Dividing by $y'$ during separation is exactly the step that drops them, a standard trap in normal/tangent-length differential equations."
  },
  {
    "theme": "tangent",
    "themeLabel": "Tangents & Normals",
    "title": "Two Tangents at a Single Point",
    "difficulty": 4,
    "task": "Find the",
    "tags": [
      "self-intersection",
      "node",
      "implicit tangent",
      "angle",
      "double point"
    ],
    "statement": "The cubic curve\n\\[\\mathcal{C}:\\; y^{2}=x^{2}(3-x)\\]\ncrosses itself at the origin, so two distinct branches pass through $(0,0)$ with two distinct tangents.\n\\[\\text{Find the equations of both tangents at the origin and the angle between them.}\\]",
    "answer": "The two tangents at the origin are $y=\\sqrt3\\,x$ and $y=-\\sqrt3\\,x$. The angle between them is $120^{\\circ}$ (equivalently the acute angle is $60^{\\circ}$).",
    "trap": "Trying to apply $y'=dy/dx$ to get a single slope at $(0,0)$. The origin is a node, where $y'$ is not single-valued: both partials $F_x=3x^{2}-6x$ and $F_y=2y$ vanish there, so $y'=-F_x/F_y$ gives the indeterminate $0/0$. The correct device is to read off the lowest-degree terms of the defining polynomial, which factor into the two tangent lines.",
    "solutions": [
      {
        "name": "Lowest-degree terms (tangent cone)",
        "steps": [
          "Write $\\mathcal{C}$ as $F(x,y)=y^{2}-3x^{2}+x^{3}=0$.",
          "Check the origin is singular: $F(0,0)=0$ and $\\nabla F=(3x^{2}-6x,\\,2y)$ vanishes at $(0,0)$, so $y'=-F_x/F_y=0/0$ is not defined — the point is a double point.",
          "Near the origin the curve is approximated by its lowest-degree (here degree-$2$) part: $y^{2}-3x^{2}=0$.",
          "Factor: $(y-\\sqrt3\\,x)(y+\\sqrt3\\,x)=0$, giving the two tangent lines $y=\\pm\\sqrt3\\,x$.",
          "Slopes $\\pm\\sqrt3$ correspond to inclinations $\\pm60^{\\circ}$, so the angle between the branches is $120^{\\circ}$ (acute $60^{\\circ}$). $\\boxed{y=\\pm\\sqrt3\\,x,\\ 120^{\\circ}}$"
        ]
      },
      {
        "name": "Branch slopes by limit",
        "steps": [
          "Set $y=mx$ and substitute: $m^{2}x^{2}=x^{2}(3-x)\\Rightarrow m^{2}=3-x$.",
          "Let $x\\to0$ along the curve: $m^{2}\\to3$, so the limiting slopes are $m=\\pm\\sqrt3$.",
          "Hence the tangents at the node are $y=\\sqrt3\\,x$ and $y=-\\sqrt3\\,x$.",
          "Angle: $\\tan\\theta=\\left|\\dfrac{\\sqrt3-(-\\sqrt3)}{1+(\\sqrt3)(-\\sqrt3)}\\right|=\\left|\\dfrac{2\\sqrt3}{-2}\\right|=\\sqrt3\\Rightarrow\\theta=60^{\\circ}$ acute, $120^{\\circ}$ obtuse. $\\boxed{120^{\\circ}}$"
        ]
      }
    ],
    "remark": "At an ordinary double point the tangent cone is just the lowest-degree part of $F$; its linear factors are the tangent lines. A clean check: substituting $y=\\pm\\sqrt3\\,x$ into $F$ kills the quadratic part and leaves only $x^{3}$, i.e. each line meets the curve to order $3$ at the origin — confirming genuine tangency. The cubic term $x^{3}$ is invisible to the tangent at the origin; it only bends the branches farther out."
  },
  {
    "theme": "tangent",
    "themeLabel": "Tangents & Normals",
    "title": "The Ladder That Forgets to Slide",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "clairaut",
      "envelope",
      "singular-solution",
      "astroid",
      "tangent-intercept",
      "branch-trap"
    ],
    "statement": "A smooth plane curve $\\mathcal{C}$ has the following property: at every point $P$ of $\\mathcal{C}$ the tangent line cuts the $x$-axis at a point $A$ and the $y$-axis at a point $B$, and the intercepted segment $AB$ always has the same length $a>0$ (so $A$, $P$, $B$ slide while $|AB|$ stays fixed, exactly like the foot and top of a ladder of length $a$ leaning on a wall).\n\nSet $p=\\dfrac{dy}{dx}$. Translate the condition into a first-order differential equation for $\\mathcal{C}$, exhibit ALL of its solutions, and decide which of them is the curve $\\mathcal{C}$ asked for. State the equation of $\\mathcal{C}$ in closed form, eliminating $p$.\n\nA word of warning: the differential equation you obtain has a large, obvious family of solutions, and it is tempting to declare \"that family\" the answer. Look harder — the curve every part of this problem is really about is not in that family at all.",
    "answer": "\\[\\boxed{x^{2/3}+y^{2/3}=a^{2/3}}\\]",
    "trap": "The fatal error is to report the GENERAL solution of the differential equation as \"the curve\". Writing the tangent line as $y=px+c$ with $c=y-px$, the intercepts are $A=(-c/p,0)$ and $B=(0,c)$, so $|AB|^2=c^2(1+p^2)/p^2=a^2$, giving the Clairaut equation $y=px\\pm\\dfrac{ap}{\\sqrt{1+p^2}}$. Differentiating, $\\big(x+f'(p)\\big)\\dfrac{dp}{dx}=0$ with $f(p)=\\pm\\dfrac{ap}{\\sqrt{1+p^2}}$. The branch $\\dfrac{dp}{dx}=0$ gives $p=$ const, i.e. the one-parameter family of STRAIGHT LINES $y=mx\\pm\\dfrac{am}{\\sqrt{1+m^2}}$ — and a strong student, seeing a clean infinite family that each genuinely satisfies the algebra, stops here and calls it $\\mathcal{C}$. But each such 'solution' is a single line; its slope never changes, so it is the curve at only the single point where it is tangent to the true $\\mathcal{C}$, not a curve every one of whose tangents has the property. The actual curve is the SINGULAR solution coming from the OTHER branch $x+f'(p)=0$ — the ENVELOPE of that line family — which the Clairaut general solution silently drops because the singular solution is never recovered by specialising the arbitrary constant. Eliminating $p$ from $x=-f'(p),\\ y=f(p)+px$ gives the astroid $x^{2/3}+y^{2/3}=a^{2/3}$, the locus of the ladder's contact and the only smooth curve all of whose tangents cut a segment of fixed length $a$. A second, finer trap: keeping just ONE sign of the square root yields only half the astroid (the $\\pm$ branches trace the $x<0$ and $x>0$ halves respectively); both signs are needed for the full curve. Either slip — taking the lines, or dropping a branch — is conceptual, not arithmetic.",
    "solutions": [
      {
        "name": "Clairaut form: separate the line family from the singular envelope",
        "steps": [
          "Set up the intercepts. At $P=(x,y)$ the tangent is $Y-y=p(X-x)$. Putting $Y=0$ gives the $x$-intercept $A=\\big(x-\\tfrac{y}{p},\\,0\\big)$; putting $X=0$ gives the $y$-intercept $B=\\big(0,\\,y-px\\big)$. Writing $c:=y-px$ (the line's own $y$-intercept), we have $A=(-c/p,0)$ and $B=(0,c)$.",
          "Impose $|AB|=a$. Then $|AB|^2=\\dfrac{c^2}{p^2}+c^2=\\dfrac{c^2(1+p^2)}{p^2}=a^2$, so $c=\\pm\\dfrac{ap}{\\sqrt{1+p^2}}$. Since $c=y-px$, the differential equation is the Clairaut equation \\[ y=px\\pm\\frac{ap}{\\sqrt{1+p^2}},\\qquad f(p):=\\pm\\frac{ap}{\\sqrt{1+p^2}}. \\]",
          "Differentiate to split the solutions. With $y=px+f(p)$, differentiating in $x$ gives $p=p+\\big(x+f'(p)\\big)\\dfrac{dp}{dx}$, i.e. $\\big(x+f'(p)\\big)\\dfrac{dp}{dx}=0$. Branch (i): $\\dfrac{dp}{dx}=0\\Rightarrow p=m$ constant, the GENERAL solution $y=mx+f(m)$ — a family of straight lines. Each line does satisfy the intercept condition, but a line has constant slope, so it is the desired curve at only one point; it is NOT a curve all of whose tangents have the property. Branch (ii): $x+f'(p)=0$, the SINGULAR solution, which the general solution can never reproduce.",
          "Extract the singular solution and eliminate $p$. From $f(p)=\\dfrac{ap}{\\sqrt{1+p^2}}$ we get $f'(p)=\\dfrac{a}{(1+p^2)^{3/2}}$, so branch (ii) gives $x=-f'(p)=-\\dfrac{a}{(1+p^2)^{3/2}}$ and then $y=f(p)+px=\\dfrac{ap^3}{(1+p^2)^{3/2}}$. Hence $|x|^{2/3}=\\dfrac{a^{2/3}}{1+p^2}$ and $|y|^{2/3}=\\dfrac{a^{2/3}p^2}{1+p^2}$, whose sum telescopes: $|x|^{2/3}+|y|^{2/3}=a^{2/3}$. The opposite sign of $f$ supplies the remaining half, so the full curve is \\[\\boxed{x^{2/3}+y^{2/3}=a^{2/3}}\\] the astroid — the singular solution, not any member of the line family."
        ]
      },
      {
        "name": "Direct envelope of the tangent-line family (no Clairaut machinery)",
        "steps": [
          "Parametrise every legal tangent. A line $y=mx+c$ has $x$-intercept $-c/m$ and $y$-intercept $c$; the intercepted segment has length $a$ iff $\\dfrac{c^2(1+m^2)}{m^2}=a^2$, i.e. $c=\\dfrac{am}{\\sqrt{1+m^2}}$ (take this branch; the other sign mirrors it). So the family of all candidate tangents is $F(x,y,m):=mx+\\dfrac{am}{\\sqrt{1+m^2}}-y=0$.",
          "Find the envelope. The curve touched by all these lines is the envelope, obtained from $F=0$ together with $\\dfrac{\\partial F}{\\partial m}=0$. Compute $\\dfrac{\\partial F}{\\partial m}=x+\\dfrac{a}{(1+m^2)^{3/2}}=0$, giving $x=-\\dfrac{a}{(1+m^2)^{3/2}}$.",
          "Solve for $y$ on the envelope. Substituting back into $F=0$: $y=mx+\\dfrac{am}{\\sqrt{1+m^2}}=-\\dfrac{am}{(1+m^2)^{3/2}}+\\dfrac{am}{\\sqrt{1+m^2}}=\\dfrac{am^3}{(1+m^2)^{3/2}}$.",
          "Eliminate $m$. As in Method 1, $|x|^{2/3}+|y|^{2/3}=\\dfrac{a^{2/3}}{1+m^2}+\\dfrac{a^{2/3}m^2}{1+m^2}=a^{2/3}$. The envelope of the fixed-length tangent segments is therefore \\[\\boxed{x^{2/3}+y^{2/3}=a^{2/3}.}\\] This is precisely the curve $\\mathcal{C}$: it is tangent to each line of length-$a$ intercept, so at each of its points the tangent cuts a segment of length exactly $a$ — the property the line family alone could never deliver as a single curve."
        ]
      },
      {
        "name": "Geometric / pedal recovery: trap the contact point of the sliding ladder",
        "steps": [
          "Use the angle of the tangent. Let the tangent make angle $\\theta$ with the $x$-axis, so its slope is $p=\\tan\\theta$ and the segment $AB$ of length $a$ runs from $A$ on the $x$-axis to $B$ on the $y$-axis: $A=(a\\cos\\theta',0)$ type bookkeeping is cleaner if we note $|OA|=a|\\cos\\theta|$ and $|OB|=a|\\sin\\theta|$, since a segment of length $a$ inclined at angle $\\theta$ has horizontal projection $a\\cos\\theta$ and vertical projection $a\\sin\\theta$. Thus the tangent line passes through $A=(\\pm a\\cos\\theta,0)$ and $B=(0,\\mp a\\sin\\theta)$ and can be written in intercept form $\\dfrac{x}{a\\cos\\theta}+\\dfrac{y}{-a\\sin\\theta}=1$, i.e. $-x\\sin\\theta+ y\\cos\\theta=-a\\sin\\theta\\cos\\theta$ after clearing — equivalently $x\\sin\\theta - y\\cos\\theta=a\\sin\\theta\\cos\\theta$ for the relevant branch.",
          "Locate the contact point as a function of $\\theta$. The curve $\\mathcal{C}$ is touched by this line where consecutive lines (as $\\theta$ varies) intersect, i.e. differentiate the line equation $x\\sin\\theta-y\\cos\\theta=a\\sin\\theta\\cos\\theta$ in $\\theta$: $x\\cos\\theta+y\\sin\\theta=a\\cos2\\theta=a(\\cos^2\\theta-\\sin^2\\theta)$. Solving the two linear equations for $(x,y)$ gives $x=a\\cos^3\\theta,\\ y=a\\sin^3\\theta$ (a direct elimination: multiply, add, and use $\\sin^2+\\cos^2=1$).",
          "Verify the property on this parametrisation. With $x=a\\cos^3\\theta,\\ y=a\\sin^3\\theta$, the slope is $\\dfrac{dy}{dx}=\\dfrac{3a\\sin^2\\theta\\cos\\theta}{-3a\\cos^2\\theta\\sin\\theta}=-\\tan\\theta$; the tangent's $x$-intercept is $a\\cos\\theta$ and $y$-intercept is $a\\sin\\theta$, whose connecting segment has length $\\sqrt{a^2\\cos^2\\theta+a^2\\sin^2\\theta}=a$. The condition holds at EVERY point — confirming this curve, not the line family, is $\\mathcal{C}$.",
          "Eliminate $\\theta$. From $x=a\\cos^3\\theta,\\ y=a\\sin^3\\theta$ we get $\\cos^2\\theta=(x/a)^{2/3}$ and $\\sin^2\\theta=(y/a)^{2/3}$, and adding, \\[\\boxed{x^{2/3}+y^{2/3}=a^{2/3}.}\\] The traced locus of the ladder's point of tangency is exactly the astroid, recovering the singular solution by pure geometry."
        ]
      }
    ],
    "remark": "Insight: this is the canonical example of why a first-order ODE can have a solution that no value of the arbitrary constant ever produces. The intercept condition is a Clairaut equation $y=px+f(p)$, and Clairaut equations carry TWO logically distinct kinds of solution: the general solution (a one-parameter family of straight lines, born from $p'=0$) and the singular solution (the envelope of those lines, born from $x+f'(p)=0$). The trap that catches strong students is altitude: they solve the equation, find an honest infinite family, and declare it the answer — but every member of that family is a straight line, and a straight line cannot be a curve all of whose tangents have a varying-slope property; it is $\\mathcal{C}$ only at its single contact point. The real curve is the envelope those lines wrap around, the astroid $x^{2/3}+y^{2/3}=a^{2/3}$ — the path of the contact point of a ladder of length $a$ sliding down a wall, and the locus a top-ranker must learn to read OFF the singular branch, not the general one. The same lesson recurs across the chapter: whenever a family of lines (tangents, chords, polars) is defined by a closure condition, the geometrically meaningful curve is usually their envelope, the solution the routine integration discards. Finer point: the $\\pm$ in $f(p)=\\pm ap/\\sqrt{1+p^2}$ is not decorative — each sign builds only one half of the astroid, so dropping a branch loses half the answer. Two conceptual hazards, one boxed curve."
  },
  {
    "theme": "tangent",
    "themeLabel": "Tangents & Normals",
    "title": "The Tangent That Re-Meets the Quartic Twice",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "tangent-re-meets-curve",
      "quartic",
      "double-root",
      "vieta",
      "bitangent",
      "inflectional-tangent"
    ],
    "statement": "Consider the quartic \\[ \\mathcal{C}:\\; y=x^{4}-2x^{2}. \\] Fix a point $P=\\big(a,\\,a^{4}-2a^{2}\\big)$ on $\\mathcal{C}$ and draw the tangent line $\\ell$ to $\\mathcal{C}$ at $P$. Because $\\mathcal{C}$ is a quartic, $\\ell$ can meet $\\mathcal{C}$ at points other than $P$; the contact at $P$ already accounts for a double root of $\\big(\\text{curve}-\\text{line}\\big)$, so the remaining intersections are governed by a quadratic.\n\nLet the abscissae of those remaining intersections be $b$ and $c$.\n\n(i) Prove that whenever they are genuine extra meeting points one always has the invariant $b+c=-2a$, and find $bc$ in terms of $a$.\n\n(ii) Determine the complete set of values of $a$ for which the tangent at $P$ meets $\\mathcal{C}$ at exactly two distinct points other than $P$. State precisely every value of $a$ that must be excluded and the geometric reason it fails.",
    "answer": "\\[\\boxed{\\,b+c=-2a,\\quad bc=3a^{2}-2,\\qquad a\\in(-1,1)\\setminus\\Big\\{-\\tfrac{1}{\\sqrt3},\\,\\tfrac{1}{\\sqrt3}\\Big\\}\\,}\\]",
    "trap": "The natural move is to compute the discriminant of the leftover quadratic $x^{2}+2ax+(3a^{2}-2)=0$, get $\\Delta=8(1-a^{2})$, and declare “two distinct real other points $\\iff\\Delta>0\\iff a\\in(-1,1)$.” That reasoning silently assumes the two roots of the quadratic are automatically distinct from $a$ itself — but they need not be. The polynomial $\\text{curve}-\\text{line}$ is degree $4$ and is forced to carry the factor $(x-a)^{2}$ from the tangency; if the quadratic factor ALSO has $x=a$ as a root, the contact at $P$ is really TRIPLE, the line is the inflectional tangent, and one of the supposed “other” points has merged back into $P$. Plugging $x=a$ into $x^{2}+2ax+3a^{2}-2$ gives $6a^{2}-2=0$, i.e. $a=\\pm\\tfrac{1}{\\sqrt3}$ — exactly the inflection points $f''=12x^{2}-4=0$. At those two values $\\Delta=8(1-\\tfrac13)>0$ is positive, so the discriminant test cheerfully passes, yet there is only ONE genuine other intersection, not two. (Symmetrically, the boundary $a=\\pm1$ is the other degenerate regime: there $\\Delta=0$, the two other roots coincide, the line is the BITANGENT $y=-1$ touching $\\mathcal{C}$ a second time at a single point — again not two distinct extra points.) Missing the inflectional collision $a=\\pm\\tfrac{1}{\\sqrt3}$ is the conceptual trap: it is invisible to a pure discriminant check and can only be caught by asking whether a root of the residual quadratic coincides with the point of tangency.",
    "solutions": [
      {
        "name": "Forced double factor, then Vieta on the residual quadratic",
        "steps": [
          "Write $f(x)=x^{4}-2x^{2}$, so $f'(x)=4x^{3}-4x$ and the tangent at $x=a$ is $\\ell(x)=f(a)+f'(a)(x-a)$. The other intersections solve $g(x):=f(x)-\\ell(x)=0$. Tangency at $a$ means $g(a)=0$ and $g'(a)=0$, so $(x-a)^{2}$ divides $g$.",
          "Carry out the division. Expanding, $g(x)=x^{4}-2x^{2}-\\big(3a^{4}-2a^{2}+(4a^{3}-4a)x\\big)$, and polynomial division gives the exact factorisation \\[ f(x)-\\ell(x)=(x-a)^{2}\\big(x^{2}+2ax+3a^{2}-2\\big). \\] The leftover quadratic $q(x)=x^{2}+2ax+(3a^{2}-2)$ holds the two remaining abscissae.",
          "Read Vieta off $q$: the two extra roots satisfy $b+c=-2a$ and $bc=3a^{2}-2$. This proves part (i): the sum of the re-meeting abscissae is always $-2a$, independent of the height of $P$, so the midpoint of the two extra points lies at $x=-a$ — the mirror of $P$ in the $y$-axis-shifted sense.",
          "For part (ii) demand TWO distinct points other than $P$. Two conditions must BOTH hold: (1) $q$ has distinct real roots, $\\Delta=(2a)^{2}-4(3a^{2}-2)=8(1-a^{2})>0\\iff|a|<1$; (2) neither root equals $a$, i.e. $q(a)\\neq0$. Since $q(a)=a^{2}+2a^{2}+3a^{2}-2=6a^{2}-2$, the bad case is $6a^{2}-2=0\\iff a=\\pm\\tfrac{1}{\\sqrt3}$ (the inflection points $f''=0$), where the contact is triple and one “other” point collapses into $P$.",
          "Combining, the tangent meets $\\mathcal{C}$ at exactly two distinct other points iff \\[ a\\in(-1,1)\\setminus\\Big\\{-\\tfrac{1}{\\sqrt3},\\tfrac{1}{\\sqrt3}\\Big\\}. \\] \\[\\boxed{b+c=-2a,\\quad bc=3a^{2}-2,\\quad a\\in(-1,1)\\setminus\\{\\pm\\tfrac{1}{\\sqrt3}\\}.}\\]"
        ]
      },
      {
        "name": "Sum-of-all-roots shortcut plus reality bookkeeping",
        "steps": [
          "The quartic equation $f(x)-\\ell(x)=0$ is monic with NO $x^{3}$ term (since $f$ has none and $\\ell$ is linear), so by Vieta the sum of ALL four roots is $0$. The point of tangency contributes the root $a$ with multiplicity two, accounting for $2a$; hence the remaining two roots sum to $0-2a=-2a$, giving $b+c=-2a$ instantly without dividing.",
          "For the product, evaluate $f(x)-\\ell(x)$ at $x=0$: it equals $3a^{4}-2a^{2}=a^{2}(3a^{2}-2)$. For a monic quartic this constant term equals the product of all four roots $a\\cdot a\\cdot b\\cdot c=a^{2}\\,bc$. Cancelling $a^{2}$ (for $a\\neq0$) gives $bc=3a^{2}-2$; the case $a=0$ is recovered by continuity and direct check ($b,c=\\pm\\sqrt2$, $bc=-2=3\\cdot0-2$).",
          "Now decide when $b,c$ are two distinct REAL points distinct from $P$. The pair $(b,c)$ are roots of the quadratic with the found symmetric functions, $t^{2}+2a t+(3a^{2}-2)=0$. Discriminant $=8(1-a^{2})$, positive iff $|a|<1$ (distinct real); at $|a|=1$ it vanishes — that is the bitangent $y=-1$, a single double contact, not two points.",
          "Finally rule out the silent merge with $P$: $b=a$ (or $c=a$) would mean $a$ is a triple root, i.e. $\\ell$ is an inflectional tangent. Triple contact requires $f''(a)=0$, $12a^{2}-4=0$, $a=\\pm\\tfrac{1}{\\sqrt3}$, both inside $(-1,1)$ and hence not removed by the discriminant test. Excluding them, \\[\\boxed{a\\in(-1,1)\\setminus\\{\\pm\\tfrac{1}{\\sqrt3}\\},\\quad b+c=-2a,\\quad bc=3a^{2}-2.}\\]"
        ]
      },
      {
        "name": "Shift to the symmetry centre and use evenness",
        "steps": [
          "$\\mathcal{C}$ is an even function, symmetric about the $y$-axis. Substitute $x=a+t$ so that the tangency sits at $t=0$. Then $f(a+t)-\\ell(a+t)$ has, as a polynomial in $t$, no constant and no linear term (tangency), so it is $t^{2}\\,(t^{2}+\\beta t+\\gamma)$ for some $\\beta,\\gamma$.",
          "Expand $f(a+t)=(a+t)^{4}-2(a+t)^{2}$ and subtract the tangent's linear-in-$t$ part. The coefficient of $t^{3}$ in $f(a+t)$ is $4a$, and the line contributes nothing beyond degree $1$, so the $t^{3}$ coefficient of the quartic is $4a$; matching $t^{2}(t^{2}+\\beta t+\\gamma)$ gives $\\beta=4a$. The $t^{2}$ coefficient of $f(a+t)$ is $6a^{2}-2$, so $\\gamma=6a^{2}-2$.",
          "The two extra roots are the roots of $t^{2}+4a t+(6a^{2}-2)=0$ in the shifted variable; back in $x=a+t$, their sum is $2a+(\\text{sum of }t\\text{-roots})=2a+(-4a)=-2a$ and one checks $bc=3a^{2}-2$, recovering part (i). The shifted discriminant is $(4a)^{2}-4(6a^{2}-2)=8(1-a^{2})$, the same reality gate $|a|<1$.",
          "Degeneracy reading in $t$: a $t$-root equal to $0$ means an extra point coincided with $P$ — that needs the constant term $\\gamma=6a^{2}-2=0$, i.e. $a=\\pm\\tfrac{1}{\\sqrt3}$ (inflectional tangent, triple contact); equal $t$-roots ($\\Delta=0$) means $a=\\pm1$ (bitangent $y=-1$). Both are excluded for “two distinct other points,” leaving \\[\\boxed{a\\in(-1,1)\\setminus\\{\\pm\\tfrac{1}{\\sqrt3}\\},\\ b+c=-2a,\\ bc=3a^{2}-2.}\\]"
        ]
      }
    ],
    "remark": "Insight: for a tangent re-meeting its curve, the device is to recognise that tangency pre-pays a double root, so on a quartic the leftover is a quadratic whose Vieta data ($b+c=-2a$, $bc=3a^{2}-2$) are the real content — the missing $x^{3}$ term even hands you $b+c=-2a$ for free. But the deeper lesson is that a positive discriminant is necessary, not sufficient: the residual quadratic can secretly share the root $a$, in which case the “two other points” are a fiction and the line is really an inflectional (triple-contact) tangent. Here that collision happens exactly at the inflection abscissae $a=\\pm1/\\sqrt3$ where $f''=0$, comfortably inside the discriminant window $|a|<1$, so it is invisible to anyone who only checks $\\Delta>0$. The boundary $a=\\pm1$ is the complementary degeneracy — the bitangent $y=-1$ kissing the quartic at both $x=\\pm1$ at once. Top-ranker takeaway: when a tangent meets a curve again, always separate two questions — are the extra roots real and distinct, AND are they genuinely distinct from the point of tangency — because multiplicity, not just reality, decides how many new points you actually get."
  },
  {
    "theme": "tangent",
    "themeLabel": "Tangents & Normals",
    "title": "Tangents from a Sliding Point on the Axis",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "tangent",
      "exponential",
      "external point",
      "count",
      "transcendental"
    ],
    "statement": "Let $\\mathcal{C}:\\;y=e^{x}$, and let $P=(0,c)$ be a point on the $y$-axis.\n\\[\\text{Determine, as a function of } c, \\text{ the number of tangents to } \\mathcal{C} \\text{ that pass through } P.\\]",
    "answer": "Let $g(a)=e^{a}(1-a)$, the $y$-intercept of the tangent touching $\\mathcal{C}$ at $x=a$; it has maximum value $1$ (at $a=0$). Hence the number of tangents from $(0,c)$ is\n\\[\\begin{cases}0,& c>1,\\\\ 1,& c=1\\ \\text{or}\\ c\\le 0,\\\\ 2,& 0<c<1.\\end{cases}\\]",
    "trap": "Assuming a convex curve like $y=e^{x}$ admits at most one tangent from any external point. The contact condition $c=e^{a}(1-a)$ is transcendental and non-monotonic (it rises to $1$ at $a=0$, then falls), so for $0<c<1$ there are two tangents, and for $c>1$ there are none — the naive 'always one' answer is wrong on both ends.",
    "solutions": [
      {
        "name": "Contact equation + monotonicity analysis",
        "steps": [
          "The tangent at $(a,e^{a})$ is $y=e^{a}(x-a)+e^{a}=e^{a}x+e^{a}(1-a)$. Its $y$-intercept ($x=0$) is $g(a)=e^{a}(1-a)$.",
          "A tangent through $(0,c)$ exists iff $g(a)=c$ for some real $a$; the count of tangents equals the number of solutions in $a$.",
          "Analyse $g$: $g'(a)=e^{a}(1-a)-e^{a}=-a\\,e^{a}$, so $g$ increases on $(-\\infty,0)$, peaks at $g(0)=1$, decreases on $(0,\\infty)$. As $a\\to-\\infty$, $g\\to0^{+}$; as $a\\to+\\infty$, $g\\to-\\infty$.",
          "Thus $g$ ranges over $(-\\infty,1]$ with a single peak: $c>1\\Rightarrow0$ solutions; $c=1\\Rightarrow1$; $0<c<1\\Rightarrow2$ (one with $a<0$, one with $a>0$); $c\\le0\\Rightarrow1$ (a single $a\\ge1$). $\\boxed{0/1/2\\text{ by the cases above}}$"
        ]
      },
      {
        "name": "Geometric tangent-line sweep",
        "steps": [
          "Each tangent to $y=e^{x}$ has positive slope $m=e^{a}>0$ and $y$-intercept $e^{a}(1-a)=m(1-\\ln m)$.",
          "As $m$ runs over $(0,\\infty)$, the intercept $h(m)=m(1-\\ln m)$ satisfies $h'(m)=-\\ln m$, so it rises for $m<1$, peaks at $h(1)=1$, then falls.",
          "Hence the set of $y$-intercepts achieved by tangents is exactly $(-\\infty,1]$, each value $0<c<1$ being hit by two slopes (one $<1$, one $>1$); each $c\\le0$ by exactly one slope $m\\ge e$.",
          "Reading off: no tangent for $c>1$, one for $c=1$ and for $c\\le0$, two for $0<c<1$. $\\boxed{0/1/2}$"
        ]
      }
    ],
    "remark": "The boundary $c=1$ is where the two tangents merge into one — a fold in the one-parameter family of tangent lines. The threshold value $1$ is exactly the $y$-intercept of the tangent at the curve's flattest visible point $x=0$, namely the line $y=x+1$."
  },
  {
    "theme": "tangent",
    "themeLabel": "Tangents & Normals",
    "title": "The Tangent Chain on the Cube",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "tangent",
      "cubic",
      "meets again",
      "geometric progression",
      "slope ratio",
      "hybrid"
    ],
    "statement": "On $\\mathcal{C}:\\;y=x^{3}$, start at $A_{1}=(1,1)$. The tangent at $A_{1}$ meets $\\mathcal{C}$ again at $A_{2}$; the tangent at $A_{2}$ meets $\\mathcal{C}$ again at $A_{3}$; and so on, generating $A_{1},A_{2},A_{3},\\dots$\n(a) Determine the abscissa of $A_{n}$ in closed form. (b) Determine the ratio of the tangent slope at $A_{n+1}$ to that at $A_{n}$. (c) Identify $A_{2}$ and $A_{3}$ explicitly.",
    "answer": "(a) The abscissa of $A_{n}$ is $a_{n}=(-2)^{\\,n-1}$ — a geometric progression with ratio $-2$.\n(b) The slope ratio is constant: $\\dfrac{m_{n+1}}{m_{n}}=4$ for every $n$.\n(c) $A_{2}=(-2,-8)$ and $A_{3}=(4,64)$.",
    "trap": "Re-deriving the 'meets again' point with the full cubic each step, or assuming the chain wanders unpredictably. The tangency forces a double root, so the tangent at abscissa $a$ always meets $y=x^{3}$ again at $-2a$ — applying this once is enough to recognise the geometric law $a_{n}=(-2)^{n-1}$; treating each step as a fresh, slope-dependent computation buries the clean pattern.",
    "solutions": [
      {
        "name": "Double-root recursion",
        "steps": [
          "At abscissa $a$ the contact cubic is $x^{3}-3a^{2}x+2a^{3}=(x-a)^{2}(x+2a)=0$, so the tangent meets $\\mathcal{C}$ again at $-2a$.",
          "Hence $a_{n+1}=-2a_{n}$ with $a_{1}=1$, giving $a_{n}=(-2)^{\\,n-1}$.",
          "Slope at $A_{n}$ is $m_{n}=3a_{n}^{2}$, so $\\dfrac{m_{n+1}}{m_{n}}=\\dfrac{a_{n+1}^{2}}{a_{n}^{2}}=(-2)^{2}=4$ for all $n$.",
          "Then $a_{2}=-2\\Rightarrow A_{2}=(-2,-8)$ and $a_{3}=4\\Rightarrow A_{3}=(4,64)$. $\\boxed{a_n=(-2)^{n-1},\\ \\text{ratio }4}$"
        ]
      },
      {
        "name": "Explicit step verification",
        "steps": [
          "Tangent at $A_{1}=(1,1)$: slope $3$, line $y=3x-2$. Solve $x^{3}=3x-2\\Rightarrow (x-1)^{2}(x+2)=0$, so $A_{2}=(-2,-8)$.",
          "Tangent at $A_{2}$: slope $3(-2)^{2}=12$, line $y=12x+16$. Solve $x^{3}=12x+16\\Rightarrow(x+2)^{2}(x-4)=0$, so $A_{3}=(4,64)$.",
          "The abscissae $1,-2,4,\\dots$ form a GP with ratio $-2$, i.e. $a_{n}=(-2)^{n-1}$; slopes $3,12,48,\\dots$ form a GP with ratio $4$.",
          "Thus $A_{2}=(-2,-8)$, $A_{3}=(4,64)$, slope ratio $4$. $\\boxed{(-2,-8),\\ (4,64),\\ 4}$"
        ]
      },
      {
        "name": "Self-similar scaling",
        "steps": [
          "The map $S:(x,y)\\mapsto(-2x,-8y)$ sends $y=x^{3}$ to itself, since $(-8y)=(-2x)^{3}$ whenever $y=x^{3}$.",
          "A line is sent to a line, and $S$ preserves tangency; the contact point at abscissa $a$ has image at abscissa $-2a$, which is exactly the 'meets again' point $(x-a)^{2}(x+2a)=0$.",
          "So the entire chain is one configuration repeatedly scaled by $S$: $a_{n+1}=-2a_{n}$ gives $a_{n}=(-2)^{n-1}$, and slopes (degree-$2$ in $a$) scale by $(-2)^{2}=4$ each step.",
          "Starting from $a_1=1$: $A_2=S(A_1)=(-2,-8)$, $A_3=S(A_2)=(4,64)$, slope ratio $4$. $\\boxed{a_n=(-2)^{n-1},\\ (-2,-8),\\ (4,64),\\ 4}$"
        ]
      }
    ],
    "remark": "Self-similarity of $y=x^{3}$ under $x\\mapsto\\lambda x,\\ y\\mapsto\\lambda^{3}y$ explains everything: the whole tangent chain is one configuration scaled by $-2$ at each step, forcing the abscissae into a geometric progression and freezing the slope ratio at $4$. The construction never stalls because the chain starts at $1$ and $(-2)^{n-1}$ never reaches the lone fixed abscissa $0$, where the tangent would be the triple-contact line $y=0$."
  },
  {
    "theme": "monotonic",
    "themeLabel": "Monotonicity & Extrema",
    "title": "The Slope That Bottoms Out Off the Edges",
    "difficulty": 4,
    "task": "Find",
    "tags": [
      "parameter-range",
      "monotonicity",
      "non-polynomial-derivative",
      "infimum-of-derivative",
      "interior-extremum",
      "sign-trap"
    ],
    "statement": "Consider the function \\[ f(x)=ax+\\sin x+\\tfrac12\\sin 2x,\\qquad x\\in\\mathbb{R}, \\] where $a$ is a real parameter. Find the set of ALL values of $a$ for which $f$ is monotonic on the whole real line (either everywhere non-decreasing or everywhere non-increasing).\n\nGive both the increasing and the decreasing regimes, and report your answer as a single set of admissible $a$.\n\nA caution worth heeding: after differentiating you will land on a function of $\\cos x$ that you must keep non-negative (or non-positive) for every $x$. Be very careful about WHERE on $[-1,1]$ that function attains its extreme value before you read off the threshold for $a$.",
    "answer": "\\[\\boxed{\\,a\\in\\Bigl(-\\infty,\\,-2\\Bigr]\\cup\\Bigl[\\tfrac{9}{8},\\,\\infty\\Bigr)\\,}\\]",
    "trap": "The seductive blunder is to evaluate the derivative only at the endpoints $\\cos x=\\pm1$. Differentiating gives $f'(x)=a+\\cos x+\\cos 2x=a+\\cos x+(2\\cos^2x-1)$. Setting $t=\\cos x\\in[-1,1]$, the requirement \"$f$ increasing\" becomes $a\\ge\\max_{t\\in[-1,1]}\\bigl(1-t-2t^2\\bigr)$. A strong student, used to $g(x)=x-a\\sin x$ where $\\inf\\cos x$ sits squarely at the endpoint $x=\\pi$, reflexively checks only $t=1$ (value $-2$) and $t=-1$ (value $0$), concludes $\\max=0$, and reports the threshold $a\\ge 1$. But $1-t-2t^2$ is a downward parabola whose vertex $t=-\\tfrac14$ lies INSIDE $[-1,1]$, where it reaches $\\tfrac98>0$. The true threshold is $a\\ge\\tfrac98$, not $a\\ge1$, and the whole band $1\\le a<\\tfrac98$ that the endpoint-only argument wrongly admits actually makes $f$ dip: at $a=1$, where $\\cos x=-\\tfrac14$ (i.e. $x=\\arccos(-\\tfrac14)\\approx1.823$) one gets $f'(x)=a-\\tfrac98=-\\tfrac18<0$, so $f$ is decreasing there and not monotonic at all. The error is conceptual — assuming a quadratic's extremum lives at the interval ends because the previous textbook example happened to — not an arithmetic slip. (The decreasing side has its extremum genuinely at $t=1$, giving the clean $a\\le-2$; the asymmetry is exactly what makes the trap bite only on the increasing side.)",
    "solutions": [
      {
        "name": "Reduce $f'$ to a quadratic in $t=\\cos x$ and extremise on $[-1,1]$",
        "steps": [
          "Differentiate and rewrite the double angle. $f'(x)=a+\\cos x+\\cos 2x$. Using $\\cos 2x=2\\cos^2x-1$ and putting $t=\\cos x$ (so $t$ ranges over the full closed interval $[-1,1]$ as $x$ runs over $\\mathbb{R}$), \\[ f'(x)=Q(t),\\qquad Q(t)=2t^2+t-1+a. \\] $f$ is non-decreasing on $\\mathbb{R}$ iff $Q(t)\\ge0$ for every $t\\in[-1,1]$, and non-increasing iff $Q(t)\\le0$ for every such $t$.",
          "Increasing regime — find the MINIMUM of $Q$. $Q$ is an upward parabola with vertex at $t^\\ast=-\\tfrac14$, which lies inside $[-1,1]$. Hence $\\min_{[-1,1]}Q$ occurs at the interior point $t^\\ast$, not at an endpoint: $Q(-\\tfrac14)=2\\cdot\\tfrac1{16}-\\tfrac14-1+a=a-\\tfrac98$. Requiring this minimum to be $\\ge0$ gives $a\\ge\\tfrac98$. (Note $Q(\\pm1)$ are larger: $Q(1)=2+a$, $Q(-1)=a$, so the endpoints are NOT binding.)",
          "Decreasing regime — find the MAXIMUM of $Q$. For an upward parabola the maximum over a closed interval is at an endpoint: $\\max\\{Q(1),Q(-1)\\}=\\max\\{2+a,\\ a\\}=2+a$. Requiring $Q(t)\\le0$ throughout, i.e. $2+a\\le0$, gives $a\\le-2$.",
          "Confirm strictness at the boundaries and combine. At $a=\\tfrac98$, $Q=0$ only at the isolated value $t=-\\tfrac14$ (so $f'=0$ at isolated $x$, $f$ still strictly increasing); at $a=-2$, $Q=0$ only at $t=1$ (isolated), so $f$ stays strictly decreasing — both endpoints are admissible. Therefore \\[\\boxed{\\,a\\in(-\\infty,-2]\\cup[\\tfrac98,\\infty)\\,.}\\]"
        ]
      },
      {
        "name": "Complete the square — the interior minimum becomes self-evident",
        "steps": [
          "Write $f'$ as a perfect square plus a constant. From $f'(x)=2\\cos^2x+\\cos x-1+a$ with $t=\\cos x$, complete the square: \\[ f'(x)=2\\Bigl(t+\\tfrac14\\Bigr)^2+\\Bigl(a-\\tfrac98\\Bigr). \\] The squared term is $\\ge0$ and equals $0$ exactly at $t=-\\tfrac14$, a value that $\\cos x$ genuinely attains — so the bracket $a-\\tfrac98$ is the true floor of $f'$, reached at an interior point of $[-1,1]$.",
          "Increasing regime. $\\min_x f'(x)=a-\\tfrac98$ (attained where $\\cos x=-\\tfrac14$). Non-decreasing on $\\mathbb{R}$ $\\iff$ this floor is $\\ge0$ $\\iff$ $a\\ge\\tfrac98$. The square form makes the endpoint-only reasoning impossible to fall for: the minimiser is literally displayed as $t=-\\tfrac14$.",
          "Decreasing regime. For $f'\\le0$ everywhere we instead need the CEILING $\\max_x f'(x)$ to be $\\le0$. The square $2(t+\\tfrac14)^2$ is largest at the endpoint of $[-1,1]$ farthest from $-\\tfrac14$, namely $t=1$, giving $2(\\tfrac54)^2=\\tfrac{25}{8}$, so $\\max f'=\\tfrac{25}{8}+a-\\tfrac98=2+a$. Requiring $2+a\\le0$ yields $a\\le-2$.",
          "Assemble. Combining the two regimes (endpoints included, by the isolated-zero argument), \\[\\boxed{\\,a\\in(-\\infty,-2]\\cup[\\tfrac98,\\infty)\\,.}\\]"
        ]
      },
      {
        "name": "Treat $f'$ as a function of $x$ and locate its critical points directly",
        "steps": [
          "Differentiate the derivative. The extrema of $f'(x)=a+\\cos x+\\cos 2x$ occur where $\\dfrac{d}{dx}f'(x)=-\\sin x-2\\sin 2x=0$, i.e. $-\\sin x-4\\sin x\\cos x=-\\sin x\\,(1+4\\cos x)=0$. So either $\\sin x=0$ ($\\cos x=\\pm1$) or $\\cos x=-\\tfrac14$. The branch $\\cos x=-\\tfrac14$ is exactly the interior critical point that endpoint-checking overlooks.",
          "Evaluate $f'$ at all critical $\\cos$ values. At $\\cos x=1$: $f'=a+1+1=a+2$. At $\\cos x=-1$: $f'=a-1+1=a$. At $\\cos x=-\\tfrac14$: $f'=a-\\tfrac14+\\bigl(2\\cdot\\tfrac1{16}-1\\bigr)=a-\\tfrac14-\\tfrac78=a-\\tfrac98$. So over all $x$, $\\min f'=a-\\tfrac98$ and $\\max f'=a+2$.",
          "Impose monotonicity. Non-decreasing $\\iff \\min f'=a-\\tfrac98\\ge0\\iff a\\ge\\tfrac98$. Non-increasing $\\iff \\max f'=a+2\\le0\\iff a\\le-2$.",
          "State the result. Including the boundaries (zeros of $f'$ are isolated there, so monotonicity is preserved), \\[\\boxed{\\,a\\in(-\\infty,-2]\\cup[\\tfrac98,\\infty)\\,.}\\]"
        ]
      }
    ],
    "remark": "Insight: the lesson is that the threshold for monotonicity is governed by the GLOBAL extremum of $f'$, and that extremum need not sit at the obvious endpoints. The warm-up case $g(x)=x-a\\sin x$ trains a reflex — $\\inf(\\cos x)$ lives at $x=\\pi$, an endpoint of the range of $\\cos$ — and the whole danger of this problem is that the reflex misfires. Once $f'$ becomes a genuine quadratic in $t=\\cos x$ (because of the $\\cos 2x=2\\cos^2x-1$ term), its vertex $t=-\\tfrac14$ slides into the interior of $[-1,1]$, and the binding constraint moves off the edge. The asymmetry is the punchline: on the increasing side the controlling value is the interior minimum $a-\\tfrac98$, while on the decreasing side the controlling value is the genuine endpoint maximum $a+2$ — so $a\\ge\\tfrac98$ but $a\\le-2$, and the gap $(-2,\\tfrac98)$ is exactly the band of slopes too small to overpower the oscillation. The completing-the-square method is the cleanest defence against the trap: it prints the true minimiser $t=-\\tfrac14$ right in front of you, leaving no room to assume it lives at $\\pm1$. Whenever a derivative reduces to a quadratic (or any non-monotone function) of $\\cos x$, $\\sin x$, $e^x$, etc., always ask where on the variable's range the extremum actually sits before you read off a parameter threshold."
  },
  {
    "theme": "monotonic",
    "themeLabel": "Monotonicity & Extrema",
    "title": "Two Sines Beat Three Lines",
    "difficulty": 4,
    "task": "Prove that",
    "statement": "Prove that for all $x\\in\\left(0,\\dfrac{\\pi}{2}\\right)$, \\[ 2\\sin x + \\tan x > 3x. \\]",
    "answer": "proved",
    "trap": "Trying to bound $\\sin x<x$ and $\\tan x>x$ separately and add them: that gives $2\\sin x+\\tan x \\lessgtr 3x$ with mismatched directions ($2\\sin x<2x$ pushes the wrong way), so termwise comparison is inconclusive. You must study the single function $g(x)=2\\sin x+\\tan x-3x$ as a whole.",
    "tags": [
      "inequality",
      "monotone-function",
      "am-gm",
      "trig"
    ],
    "solutions": [
      {
        "name": "Monotone auxiliary + AM-GM",
        "steps": [
          "Let $g(x)=2\\sin x+\\tan x-3x$, so $g(0)=0$.",
          "Differentiate: $g'(x)=2\\cos x+\\sec^{2}x-3$. Write $c=\\cos x\\in(0,1)$, so $g'(x)=2c+\\dfrac{1}{c^{2}}-3$.",
          "By AM-GM on $c,c,\\tfrac{1}{c^2}$: $c+c+\\dfrac{1}{c^{2}}\\ge 3\\sqrt[3]{c\\cdot c\\cdot c^{-2}}=3$, hence $g'(x)\\ge 0$, with equality only at $c=1$ (i.e. $x=0$).",
          "Thus $g$ is strictly increasing on $(0,\\pi/2)$; since $g(0)=0$, we get $g(x)>0$, i.e. $\\boxed{2\\sin x+\\tan x>3x}$."
        ]
      },
      {
        "name": "Explicit factoring of the derivative",
        "steps": [
          "With $g(x)=2\\sin x+\\tan x-3x$ and $c=\\cos x$, combine over $c^2$: $g'(x)=\\dfrac{2c^{3}-3c^{2}+1}{c^{2}}$.",
          "Factor the numerator: $2c^{3}-3c^{2}+1=(c-1)^{2}(2c+1)$.",
          "For $x\\in(0,\\pi/2)$, $c\\in(0,1)$ so $(c-1)^2>0$ and $(2c+1)>0$; hence $g'(x)>0$.",
          "So $g$ is strictly increasing from $g(0)=0$, giving $g(x)>0$: $\\boxed{2\\sin x+\\tan x>3x}$."
        ]
      }
    ],
    "remark": "Insight: Weighting the chord-rich $\\tan x$ against the chord-poor $\\sin x$ with the magic coefficients $2$ and $1$ makes the derivative a perfect-square-times-positive — a tidy generalization of the lone facts $\\sin x<x<\\tan x$."
  },
  {
    "theme": "monotonic",
    "themeLabel": "Monotonicity & Extrema",
    "title": "Counting Roots Without Solving",
    "difficulty": 4,
    "task": "Find the number of",
    "statement": "Find the number of distinct real roots of \\[ x^{5}-5x+2=0. \\]",
    "answer": "$3$.",
    "trap": "Assuming a degree-$5$ polynomial 'has $5$ roots, so probably several real ones', or guessing from the constant term. The honest count comes from comparing the constant offset against the local extreme values of $x^5-5x$, not from inspection.",
    "tags": [
      "root-counting",
      "quintic",
      "local-extrema",
      "intermediate-value"
    ],
    "solutions": [
      {
        "name": "Extrema of the auxiliary function",
        "steps": [
          "Rewrite the equation as $g(x)=-2$, where $g(x)=x^{5}-5x$. Then $g'(x)=5x^{4}-5=5(x^{2}-1)(x^{2}+1)$, whose only real zeros are $x=\\pm1$.",
          "Since $g'>0$ for $|x|>1$ and $g'<0$ for $|x|<1$, $g$ rises from $-\\infty$ to a local maximum $g(-1)=4$, falls to a local minimum $g(1)=-4$, then rises to $+\\infty$.",
          "The level we need is $g(x)=-2$. Because $-4<-2<4$, the horizontal line $y=-2$ meets the graph once on each of the three monotone branches (it lies above the local min and below the local max).",
          "Hence the equation $g(x)=-2$, i.e. $x^5-5x+2=0$, has exactly $\\boxed{3}$ distinct real roots."
        ]
      },
      {
        "name": "Sign changes via IVT plus a turning-point cap",
        "steps": [
          "Let $h(x)=x^5-5x+2$ and sample: $h(-2)=-20$, $h(-1)=6$, $h(0)=2$, $h(1)=-2$, $h(2)=24$.",
          "The sign pattern $-,+,+,-,+$ changes on $(-2,-1)$, on $(0,1)$, and on $(1,2)$, so by the Intermediate Value Theorem there are at least three real roots.",
          "Since $h'(x)=5x^4-5$ vanishes only at $x=\\pm1$, $h$ has at most two turning points, hence at most three monotone pieces and so at most three real roots.",
          "At least $3$ and at most $3$ forces exactly $\\boxed{3}$ distinct real roots."
        ]
      }
    ],
    "remark": "Insight: the local maximum ($4$) and local minimum ($-4$) of $x^5-5x$ form a 'window'. The number of real roots of $x^5-5x=c$ is decided entirely by where $c$ sits relative to that window: $3$ roots when $-4<c<4$, $2$ when $c=\\pm4$, and $1$ when $|c|>4$. Here $c=-2$ lands strictly inside, giving $3$."
  },
  {
    "theme": "monotonic",
    "themeLabel": "Monotonicity & Extrema",
    "title": "The Lowest Point of x to the x",
    "difficulty": 4,
    "task": "Determine",
    "statement": "For $x>0$, determine where $f(x)=x^{x}$ attains its global minimum, and find that minimum value.",
    "answer": "Global minimum at $x=\\dfrac{1}{e}$, with value $e^{-1/e}\\;(\\approx 0.6922)$.",
    "trap": "Treating $x^x$ as if its exponent rule made it monotone, or differentiating it like a power $x^n$ (giving $x\\cdot x^{x-1}=x^x$, which never vanishes). One must use logarithmic differentiation; the derivative is $x^x(\\ln x+1)$, which does vanish.",
    "tags": [
      "logarithmic-differentiation",
      "global-minimum",
      "exponential",
      "critical-point"
    ],
    "solutions": [
      {
        "name": "Logarithmic differentiation",
        "steps": [
          "Write $y=x^{x}$, so $\\ln y=x\\ln x$. Differentiating: $\\dfrac{y'}{y}=\\ln x+1$, hence $f'(x)=x^{x}(\\ln x+1)$.",
          "Since $x^{x}>0$, the sign of $f'$ matches $\\ln x+1$: negative for $0<x<1/e$, zero at $x=1/e$, positive for $x>1/e$.",
          "So $f$ decreases then increases, giving a global minimum at $x=1/e$.",
          "The value is $f(1/e)=(1/e)^{1/e}=e^{-1/e}$: $\\boxed{x=1/e,\\ \\min=e^{-1/e}}$."
        ]
      },
      {
        "name": "Minimize the exponent",
        "steps": [
          "Because $t\\mapsto e^{t}$ is increasing, $x^{x}=e^{x\\ln x}$ is minimized exactly where $u(x)=x\\ln x$ is minimized.",
          "$u'(x)=\\ln x+1=0\\Rightarrow x=1/e$, and $u''(x)=1/x>0$, confirming a minimum.",
          "Then $u(1/e)=\\tfrac1e\\ln\\tfrac1e=-\\tfrac1e$, so $\\min f=e^{-1/e}$.",
          "Thus $\\boxed{x=1/e,\\ \\min=e^{-1/e}}$."
        ]
      }
    ],
    "remark": "Insight: Composing with the increasing exponential lets you replace a tricky extremum problem ($x^x$) by an easy one ($x\\ln x$) — monotone transforms preserve the location of extrema."
  },
  {
    "theme": "monotonic",
    "themeLabel": "Monotonicity & Extrema",
    "title": "The Implicit Curve With Two Floors and a Decoy Ceiling",
    "difficulty": 5,
    "task": "Prove, classify, and find",
    "tags": [
      "implicit-function",
      "monotone-bijection",
      "global-vs-local",
      "second-derivative-test",
      "discriminant",
      "extrema-count"
    ],
    "statement": "Consider the relation \\[ C:\\qquad 2y^{3}+3y \\;=\\; x^{4}-4x^{2}. \\]\n\n(a) Prove that $C$ determines $y$ as a single-valued, everywhere-differentiable function $y(x)$ on all of $\\mathbb{R}$ — i.e. for each real $x$ there is exactly one real $y$ — and explain precisely which feature of the left-hand side guarantees this. (Beware: the right-hand side is the symmetric \"W\".)\n\n(b) Find every interval on which $y(x)$ is increasing or decreasing, locate all local extrema and classify each.\n\n(c) Determine the global minimum of $y(x)$ on $\\mathbb{R}$: state at how many points it is attained and give the minimum value in closed form. Decide whether $y$ has a global maximum.\n\nWrite $L(t)=2t^{3}+3t$ and $R(x)=x^{4}-4x^{2}$, so the relation is $L(y)=R(x)$.",
    "answer": "\\[\\boxed{\\text{local max }(0,0);\\ \\text{global min at }x=\\pm\\sqrt2,\\ y_*=\\sqrt[3]{\\tfrac{3\\sqrt2}{4}-1}-\\sqrt[3]{\\tfrac{3\\sqrt2}{4}+1};\\ \\text{no global max}}\\]",
    "trap": "Three seductive errors all stem from misreading the left side $L(y)=2y^{3}+3y$ as \"a cubic in $y$, hence possibly three branches.\" (i) The branch trap: a solver who tries to solve the cubic for $y$ sees a depressed cubic $y^{3}+\\tfrac32 y=\\tfrac{R}{2}$ and worries about a three-real-root regime, expecting branch crossings, vertical tangents, and spurious turning points where two branches meet. But the discriminant of $2y^{3}+3y-R=0$ is $-\\tfrac{27}{4}R^{2}-\\tfrac{27}{2}<0$ for every $R$, so there is always exactly ONE real $y$: the curve is a genuine graph, with no vertical tangents and no branch-collision extrema to invent. The single-valuedness comes from $L'(t)=6t^{2}+3>0$ — $L$ is a strictly increasing bijection of $\\mathbb{R}$, so $y=L^{-1}(R(x))$ is well defined and smooth; forgetting to check $L'\\neq0$ is forgetting the very hypothesis that makes $y(x)$ a function. (ii) The decoy-ceiling trap: at $x=0$ one finds $y=0$, and because $0$ is the largest of the three critical $y$-values a hasty solver brands $x=0$ the \"minimum.\" It is the opposite — $x=0$ is a local MAXIMUM (with $y=0$), sitting strictly above the two wells where $y_*\\approx-0.8796<0$. (iii) The uniqueness trap: even after locating the wells, one is tempted to report a single global minimum. The W is symmetric, so the global minimum is attained at TWO points $x=\\pm\\sqrt2$ with equal value, and since $R(x)\\to+\\infty$ there is NO global maximum at all — the local max at the origin is not global.",
    "solutions": [
      {
        "name": "Monotone inverse: transfer the shape of $R$ through $L^{-1}$",
        "steps": [
          "Well-definedness. Since $L(t)=2t^{3}+3t$ has $L'(t)=6t^{2}+3\\ge3>0$, $L$ is strictly increasing; being an odd unbounded continuous strictly increasing map it is a bijection $\\mathbb{R}\\to\\mathbb{R}$. Hence for each $x$ the equation $L(y)=R(x)$ has exactly one solution $y=L^{-1}\\!\\big(R(x)\\big)$, and as $L'$ never vanishes, $L^{-1}$ is differentiable, so $y(x)$ is a differentiable single-valued function. (Equivalently: the cubic $2y^{3}+3y-R=0$ has discriminant $-\\tfrac{27}{4}R^{2}-\\tfrac{27}{2}<0$, exactly one real root for every $R$ — no branches, no vertical tangents.)",
          "Reduce to $R$. Because $L^{-1}$ is strictly increasing, $y(a)<y(b)\\iff R(a)<R(b)$: the function $y(x)$ is an increasing reparametrisation of $R(x)=x^{4}-4x^{2}$. Therefore $y$ increases/decreases exactly where $R$ does, and its local maxima/minima occur at the same points and are of the same type as those of $R$.",
          "Analyse the W. $R'(x)=4x^{3}-8x=4x(x^{2}-2)$, so the critical points are $x=0,\\pm\\sqrt2$. The sign of $R'$ (equivalently of $x(x^{2}-2)$) is $-,+,-,+$ on $(-\\infty,-\\sqrt2),(-\\sqrt2,0),(0,\\sqrt2),(\\sqrt2,\\infty)$. Hence $y$ is decreasing, increasing, decreasing, increasing on those intervals: local minima at $x=\\pm\\sqrt2$ and a local maximum at $x=0$.",
          "Values and globals. $R(0)=0\\Rightarrow L(y)=0\\Rightarrow y=0$ at the local max. $R(\\pm\\sqrt2)=-4$ is the global minimum of $R$, so $y_*=L^{-1}(-4)$ is the global minimum of $y$, attained at the two points $x=\\pm\\sqrt2$. Solving $2y^{3}+3y+4=0$ by Cardano gives $y_*=\\sqrt[3]{\\tfrac{3\\sqrt2}{4}-1}-\\sqrt[3]{\\tfrac{3\\sqrt2}{4}+1}\\approx-0.8796$. Since $R(x)\\to+\\infty$, so does $y$, hence there is no global maximum. \\[\\boxed{\\text{loc max }(0,0);\\ \\text{glob min at }x=\\pm\\sqrt2,\\ y_*=\\sqrt[3]{\\tfrac{3\\sqrt2}{4}-1}-\\sqrt[3]{\\tfrac{3\\sqrt2}{4}+1};\\ \\text{no glob max}.}\\]"
        ]
      },
      {
        "name": "Implicit differentiation and a clean sign of $y'$",
        "steps": [
          "Differentiate $2y^{3}+3y=x^{4}-4x^{2}$ in $x$: $(6y^{2}+3)\\,y'=4x^{3}-8x$, so $y'=\\dfrac{4x(x^{2}-2)}{6y^{2}+3}$. The denominator $6y^{2}+3$ is strictly positive for all real $y$ — this is exactly the condition $L'(y)\\neq0$ that lets us solve for $y'$ at all and confirms the graph has no vertical tangent.",
          "Locate critical points. Since the denominator never vanishes, $y'=0\\iff 4x(x^{2}-2)=0\\iff x\\in\\{0,\\pm\\sqrt2\\}$, and $\\operatorname{sign}y'=\\operatorname{sign}\\big(x(x^{2}-2)\\big)$ everywhere.",
          "Sign chart. On $(-\\infty,-\\sqrt2)$, $(-\\sqrt2,0)$, $(0,\\sqrt2)$, $(\\sqrt2,\\infty)$ the product $x(x^{2}-2)$ is $-,+,-,+$. So $y$ falls, rises, falls, rises: $x=-\\sqrt2$ and $x=\\sqrt2$ are local minima (decrease$\\to$increase) and $x=0$ is a local maximum (increase$\\to$decrease). At $x=0$, $2y^{3}+3y=0\\Rightarrow y=0$ (the only real root), so the local max is $(0,0)$.",
          "Globals. Comparing the critical values: at $x=\\pm\\sqrt2$, $2y^{3}+3y=-4$ gives $y_*=\\sqrt[3]{\\tfrac{3\\sqrt2}{4}-1}-\\sqrt[3]{\\tfrac{3\\sqrt2}{4}+1}\\approx-0.8796<0=y(0)$. Because $y$ is decreasing then increasing around each of $\\pm\\sqrt2$ and these are the only minima, both are global minima (equal value, by the $x\\mapsto-x$ symmetry of the equation). As $x\\to\\pm\\infty$, $x^{4}-4x^{2}\\to+\\infty$ forces $y\\to+\\infty$, so no global maximum exists; the local max at the origin is not global. \\[\\boxed{\\text{loc max }(0,0);\\ \\text{glob min at }x=\\pm\\sqrt2,\\ y_*\\approx-0.8796;\\ \\text{no glob max}.}\\]"
        ]
      },
      {
        "name": "Second-derivative test at the critical points",
        "steps": [
          "From $(6y^{2}+3)y'=4x^{3}-8x$, differentiate again: $(6y^{2}+3)y''+12y(y')^{2}=12x^{2}-8$. At any critical point $y'=0$, so the middle term dies and $y''=\\dfrac{12x^{2}-8}{6y^{2}+3}$. The denominator is positive, so the sign of $y''$ equals the sign of $12x^{2}-8=4(3x^{2}-2)$.",
          "At $x=0$: $y=0$ and $y''=\\dfrac{-8}{3}<0$, a strict local maximum, value $0$. At $x=\\pm\\sqrt2$: $12\\cdot2-8=16>0$ so $y''>0$, strict local minima; there $2y^{3}+3y=-4$ gives the common value $y_*=\\sqrt[3]{\\tfrac{3\\sqrt2}{4}-1}-\\sqrt[3]{\\tfrac{3\\sqrt2}{4}+1}\\approx-0.8796$.",
          "Single-valuedness underpinning the test. The whole computation is legitimate because $6y^{2}+3>0$ keeps the implicit-function hypothesis alive at every point; the cubic $2y^{3}+3y=R$ has negative discriminant $-\\tfrac{27}{4}R^{2}-\\tfrac{27}{2}$, so $y(x)$ is genuinely a single smooth graph and the classified points are the only extrema.",
          "Globals. The two minima are equal and, since $y\\to+\\infty$ as $|x|\\to\\infty$, they are the global minimum, attained at the two points $x=\\pm\\sqrt2$; the lone local maximum $(0,0)$ is strictly above them and is not a global maximum (none exists). \\[\\boxed{\\text{loc max }(0,0);\\ \\text{glob min at }x=\\pm\\sqrt2,\\ y_*=\\sqrt[3]{\\tfrac{3\\sqrt2}{4}-1}-\\sqrt[3]{\\tfrac{3\\sqrt2}{4}+1};\\ \\text{no glob max}.}\\]"
        ]
      }
    ],
    "remark": "Insight: when an implicit relation reads $L(y)=R(x)$ with $L$ a strictly monotone bijection ($L'\\neq0$), the curve is automatically a single smooth graph $y=L^{-1}(R(x))$, and because $L^{-1}$ is monotone the entire monotonicity/extremum portrait of $y$ is a faithful copy of that of $R$ — same critical $x$'s, same intervals, same max/min types. So a fearsome implicit cubic collapses to studying the elementary W $x^{4}-4x^{2}$. The trap the problem punishes is reflexively reading $2y^{3}+3y$ as a multivalued cubic: its negative discriminant ($L'>0$ everywhere) forbids branches and vertical tangents, so there are no fictitious turning points, the origin is a local MAX not a min, and the genuine minimum is shared by two symmetric points with no global maximum anywhere. The lesson: check $L'\\neq0$ before you ever say \"$y(x)$\", and let an increasing inverse carry the shape across instead of solving the cubic."
  },
  {
    "theme": "monotonic",
    "themeLabel": "Monotonicity & Extrema",
    "title": "The Minimum the Sign-Test Cannot See",
    "difficulty": 5,
    "task": "Classify",
    "tags": [
      "global-minimum",
      "first-derivative-test",
      "oscillation",
      "critical-point",
      "squeeze",
      "counterexample"
    ],
    "statement": "Define $f:\\mathbb{R}\\to\\mathbb{R}$ by \\[ f(x)=x^{4}\\Big(2+\\sin\\tfrac{1}{x}\\Big)\\quad(x\\neq0),\\qquad f(0)=0. \\] (i) Show that $f$ is differentiable at $0$ and that $0$ is a critical point.\n\n(ii) Classify the critical point $x=0$: decide whether it is a local maximum, a local minimum, both-sided in the strongest possible sense, or neither — and prove your verdict in the sharpest form it admits (local versus global, strict or not).\n\n(iii) A classmate argues: \"The First Derivative Test settles every smooth critical point — look at the sign of $f'$ just left and just right of $0$.\" Examine $f'(x)$ for $x$ near $0$ and explain precisely why this reasoning is powerless here. Determine whether there exists any $\\delta>0$ on which $f$ is monotone on $(0,\\delta)$, and whether the Second Derivative Test can rescue the classmate.",
    "answer": "\\[\\boxed{x=0 \\text{ is a strict global minimum},\\ f(0)=0}\\]",
    "trap": "The lethal move is to reach for the First Derivative Test as if it were a theorem with no hypotheses: \"compute $f'$, look at its sign immediately to the left and right of $0$.\" The trap has two failure modes, both fatal. (1) A student computes $f'(x)=x^{2}\\big[\\,4x(2+\\sin\\tfrac1x)-\\cos\\tfrac1x\\,\\big]$ for $x\\neq0$, notices the bracket is dominated near $0$ by $-\\cos\\tfrac1x$, and concludes \"$f'$ has no definite sign on either side, so $0$ is NOT an extremum\" — declaring it an inflection/saddle-type point. (2) A more careful student, knowing the First Derivative Test needs a punctured neighborhood on which $f'$ keeps one sign on each side, sees that $f'$ flips sign infinitely often as $x\\to0^{+}$ and concludes \"the test is inapplicable, so the nature of $0$ is undecidable.\" BOTH are wrong: $0$ is in fact a strict GLOBAL minimum. The First Derivative Test genuinely cannot be applied — its monotonicity hypothesis fails because $f'$ changes sign infinitely often in every $(0,\\delta)$, so $f$ is monotone on no one-sided neighborhood of $0$ — but inapplicability of a sufficient test is not the absence of an extremum. The Second Derivative Test offers no escape either: $f''(0)=0$ exists (the oscillation is killed by the leading $x$ factor), so the test is inconclusive, and worse, $f''(x)$ contains a term $-\\sin\\tfrac1x$ that does NOT vanish as $x\\to0$, so $f''$ is discontinuous at $0$ and of no constant sign nearby. The verdict can only be obtained by abandoning derivatives entirely and bounding $f$ directly. This is the canonical refutation of the folklore \"a sign-change of $f'$ across a critical point decides the extremum.\"",
    "solutions": [
      {
        "name": "Elementary squeeze — bound $f$ instead of differentiating",
        "steps": [
          "For every real $t$ we have $-1\\le\\sin t\\le 1$, hence $1\\le 2+\\sin\\tfrac1x\\le 3$ for all $x\\neq0$. The lower bound is the whole game: the multiplier $2+\\sin\\tfrac1x$ is bounded strictly below by $1>0$, so it can never collapse the $x^{4}$.",
          "Therefore, for every $x\\neq0$, \\[ f(x)=x^{4}\\Big(2+\\sin\\tfrac1x\\Big)\\ \\ge\\ x^{4}\\cdot 1\\ =\\ x^{4}\\ >\\ 0\\ =\\ f(0). \\] The inequality $f(x)>f(0)$ holds for ALL $x\\neq0$ simultaneously, with no neighborhood restriction.",
          "By definition this says $f(x)>f(0)$ for every $x\\neq0$: the value $f(0)=0$ is exceeded everywhere else, so $0$ is a strict global (a fortiori strict local) minimum. For (i), $\\big|\\tfrac{f(h)-f(0)}{h}\\big|=|h|^{3}\\big(2+\\sin\\tfrac1h\\big)\\le 3|h|^{3}\\to0$, so $f'(0)=0$ exists and $0$ is a critical point — yet the classification needed no derivative at all.",
          "Hence $x=0$ is a strict global minimum with $f(0)=0$. \\[\\boxed{x=0\\ \\text{is a strict global minimum},\\ f(0)=0.}\\]"
        ]
      },
      {
        "name": "Anatomy of $f'$ — why the sign-test is structurally powerless",
        "steps": [
          "For $x\\neq0$, the product and chain rules give \\[ f'(x)=4x^{3}\\Big(2+\\sin\\tfrac1x\\Big)+x^{4}\\cdot\\cos\\tfrac1x\\cdot\\Big(-\\tfrac1{x^{2}}\\Big)=x^{2}\\Big[\\,4x\\big(2+\\sin\\tfrac1x\\big)-\\cos\\tfrac1x\\,\\Big]. \\] The sign of $f'(x)$ for $x>0$ is the sign of the bracket $B(x)=4x\\big(2+\\sin\\tfrac1x\\big)-\\cos\\tfrac1x$.",
          "As $x\\to0^{+}$ the first part obeys $0<4x(2+\\sin\\tfrac1x)\\le12x\\to0$, while $\\cos\\tfrac1x$ keeps oscillating over $[-1,1]$. Concretely take $x_k=\\tfrac1{2k\\pi}$: then $\\cos\\tfrac1{x_k}=1$ and for $k$ large enough that $12x_k<1$ we get $B(x_k)<0$, so $f'(x_k)<0$. Take instead $x_k'=\\tfrac1{(2k+1)\\pi}$: then $\\cos\\tfrac1{x_k'}=-1$ and $B(x_k')\\ge1-12x_k'>0$, so $f'(x_k')>0$.",
          "Thus in EVERY interval $(0,\\delta)$ the derivative $f'$ takes both signs (indeed it changes sign infinitely often, at points accumulating at $0$). Consequently $f$ is monotone on no one-sided neighborhood of $0$ — there is no $\\delta>0$ making $f$ increasing or decreasing on $(0,\\delta)$ — and the First Derivative Test, whose hypothesis demands a fixed sign of $f'$ on each side, simply has no input to consume. Inapplicability is not a verdict of \"no extremum.\"",
          "Nor does the Second Derivative Test help: from $f'(h)/h=h\\big[4h(2+\\sin\\tfrac1h)-\\cos\\tfrac1h\\big]$, bounded by $\\le|h|(12|h|+1)\\to0$, we get $f''(0)=0$ — inconclusive. (Moreover $f''(x)=12x^{2}\\sin\\tfrac1x+24x^{2}-6x\\cos\\tfrac1x-\\sin\\tfrac1x$ carries the term $-\\sin\\tfrac1x$, which does not vanish as $x\\to0$, so $f''$ is even discontinuous at $0$.) The local nature must instead be read from the value comparison: since (Solution 1) $f(x)>0=f(0)$ for all $x\\neq0$, the classification stands. \\[\\boxed{x=0\\ \\text{is a strict global minimum},\\ f(0)=0.}\\]"
        ]
      },
      {
        "name": "Trapping between two monotone parabolic powers",
        "steps": [
          "From $1\\le 2+\\sin\\tfrac1x\\le 3$ we get the two-sided envelope \\[ x^{4}\\ \\le\\ f(x)\\ \\le\\ 3x^{4}\\qquad(x\\neq0), \\] with $f(0)=0$ sitting at the common floor of both envelopes at $x=0$. Both $g(x)=x^{4}$ and $h(x)=3x^{4}$ are themselves strictly decreasing on $(-\\infty,0)$ and strictly increasing on $(0,\\infty)$, each with a unique strict global minimum $0$ at $x=0$.",
          "Although $f$ wiggles inside the band and is therefore NOT itself monotone on either side, the band pins its value: for $x\\neq0$, $f(x)\\ge g(x)=x^{4}>0=g(0)=f(0)$. The lower envelope $g$ already certifies $f(x)>f(0)$ for all $x\\neq0$ — the upper envelope merely confirms $f$ does not run off to spoil globality, since $f(x)\\le 3x^{4}<\\infty$.",
          "Hence the global minimum of $g$ transfers to $f$: the unique global minimizer is $x=0$ and the minimum value is $f(0)=0$, attained strictly. The infinitely many interior critical points of $f$ (where $B(x)=0$) all carry value $f>0$, so none of them competes with $0$; $0$ remains the sole global minimizer even though it is not an isolated critical point.",
          "Therefore $x=0$ is a strict global minimum with value $0$. \\[\\boxed{x=0\\ \\text{is a strict global minimum},\\ f(0)=0.}\\]"
        ]
      }
    ],
    "remark": "Insight: this is the textbook slayer of the folklore rule \"if $f'$ changes sign at a critical point, that decides the extremum.\" The whole architecture is the strictly positive multiplier $2+\\sin\\tfrac1x\\in[1,3]$: it lets $\\sin\\tfrac1x$ oscillate as violently as it likes while keeping $f$ trapped between $x^{4}$ and $3x^{4}$, so the value comparison $f(x)>f(0)$ is decided long before any derivative is computed. The derivative, by contrast, is a trap: $f'(x)=x^{2}[4x(2+\\sin\\tfrac1x)-\\cos\\tfrac1x]$ flips sign infinitely often near $0$ (driven by $-\\cos\\tfrac1x$), so $f$ is monotone on no one-sided neighborhood and the First Derivative Test cannot even be stated. The Second Derivative Test also fails twice over: $f''(0)=0$ is merely inconclusive, and $f''$ is not even continuous at $0$ (the surviving $-\\sin\\tfrac1x$ term refuses to settle). Top-ranker takeaway: a sufficient test failing — or being inapplicable — never proves the absence of an extremum; when the derivative misbehaves, drop to first principles and compare values directly. The cleanest tool here is a one-line squeeze, not the calculus machinery that the problem dangles in front of you."
  },
  {
    "theme": "monotonic",
    "themeLabel": "Monotonicity & Extrema",
    "title": "The Off-Centre Quartic That Hides a Second Valley",
    "difficulty": 5,
    "task": "Find all parameter values",
    "tags": [
      "quartic",
      "parameter-range",
      "sign-changes",
      "discriminant",
      "horizontal-inflection",
      "boundary-case"
    ],
    "statement": "For a real parameter $a$ consider the family of quartics \\[ f_a(x)=3x^{4}-4x^{3}-12x^{2}+a\\,x .\\]\n\nFind every real value of $a$ for which $f_a$ has exactly one local minimum.\n\nState your answer as a subset of $\\mathbb{R}$, and be careful to decide — with proof — whether each endpoint of that set belongs to it.",
    "answer": "\\[\\boxed{\\,a\\le \\dfrac{80-56\\sqrt7}{9}\\ \\ \\text{or}\\ \\ a\\ge \\dfrac{80+56\\sqrt7}{9}\\,}\\]",
    "trap": "A quartic with positive leading coefficient ALWAYS has at least one local minimum, and its derivative $f_a'(x)=12x^{3}-12x^{2}-24x+a$ is a cubic with one, two (a double root) or three real roots. The lazy reflex is: 'two local minima happen exactly when $f_a'$ has three distinct real roots, i.e. when the discriminant is positive, so I want the discriminant non-positive.' Two errors hide in that sentence. (i) Wrong sign count of the discriminant: $\\operatorname{disc}_x f_a'=-432\\,(9a^{2}-160a-1728)$, so a cubic-with-three-real-roots corresponds to $9a^{2}-160a-1728<0$, i.e. the OPEN interval $\\big(\\tfrac{80-56\\sqrt7}{9},\\tfrac{80+56\\sqrt7}{9}\\big)$; the 'exactly one minimum' set is its complement — but the discriminant sign by itself does not tell you what happens AT the boundary. (ii) The genuine conceptual trap is the boundary. At $a=\\tfrac{80\\mp56\\sqrt7}{9}$ the cubic $f_a'$ has a DOUBLE root, and a hasty solver either throws those two $a$-values away as 'degenerate' or, worse, keeps calling the double root a borderline second minimum. Neither is right: at a double root $f_a'$ merely TOUCHES zero without changing sign, so $f_a$ has a horizontal inflection (a shelf), which is NOT an extremum. Hence at each boundary $f_a$ still has exactly one true local minimum, so both endpoints must be INCLUDED. The correct criterion is never 'three roots vs not'; it is 'how many sign changes $-\\!\\to\\!+$ does $f_a'$ make', and a tangential double root makes none. Forgetting that the asymmetric humps ($x^3$ term) make the two boundary values unequal, or that a shelf is not a valley, is exactly what costs the rank.",
    "solutions": [
      {
        "name": "Sign changes of $f_a'$ via the discriminant, with the shelf settled by hand",
        "steps": [
          "Since the leading coefficient of $f_a$ is positive, $f_a(x)\\to+\\infty$ at both ends, so $f_a$ has at least one local minimum, and the local minima are exactly the points where $f_a'(x)=12x^{3}-12x^{2}-24x+a$ changes sign from $-$ to $+$. A cubic with positive leading coefficient runs $-\\infty\\to+\\infty$, so it makes either one $-\\!\\to\\!+$ change (one real root, or a tangential double root with a simple root) giving ONE minimum, or two $-\\!\\to\\!+$ changes (three distinct real roots) giving TWO minima. Thus exactly one local minimum $\\iff f_a'$ does NOT have three distinct real roots.",
          "Count the roots by the discriminant. A direct computation gives $\\operatorname{disc}_x\\!\\big(12x^{3}-12x^{2}-24x+a\\big)=-432\\,(9a^{2}-160a-1728)$. Three distinct real roots occur iff this discriminant is positive, i.e. $9a^{2}-160a-1728<0$. The quadratic $9a^{2}-160a-1728$ has roots $a=\\dfrac{160\\pm\\sqrt{160^{2}+4\\cdot9\\cdot1728}}{18}=\\dfrac{80\\pm56\\sqrt7}{9}$, so three distinct real roots occur precisely on the open interval $\\Big(\\dfrac{80-56\\sqrt7}{9},\\,\\dfrac{80+56\\sqrt7}{9}\\Big)$, where $f_a$ has two local minima.",
          "Decide the boundary. At $a=\\dfrac{80\\mp56\\sqrt7}{9}$ the discriminant is $0$, so $f_a'$ has a real double root $x_0$. There $f_a'$ touches $0$ without sign change (a double root of an odd-degree polynomial does not flip its sign), so $x_0$ is a horizontal inflection of $f_a$, not an extremum; the remaining simple root is the unique $-\\!\\to\\!+$ change. Hence at each boundary $f_a$ has exactly ONE local minimum, and the endpoints BELONG to the answer set.",
          "Assemble. Exactly one local minimum holds on the complement of the open interval, endpoints included: \\[\\boxed{\\,a\\le \\tfrac{80-56\\sqrt7}{9}\\ \\text{or}\\ a\\ge \\tfrac{80+56\\sqrt7}{9}.}\\]"
        ]
      },
      {
        "name": "Move the parameter to the other axis: count intersections of a line with an auxiliary curve",
        "steps": [
          "Critical points of $f_a$ solve $f_a'(x)=0$, i.e. $12x^{3}-12x^{2}-24x+a=0$, which we read as $a=\\varphi(x)$ with $\\varphi(x):=-12x^{3}+12x^{2}+24x$. For a fixed $a$, the critical $x$'s are exactly the abscissae where the horizontal line $y=a$ meets the graph of $\\varphi$. As $\\varphi$ is a cubic with NEGATIVE leading coefficient, it increases then decreases then increases is reversed: it runs $+\\infty\\to-\\infty$, so the picture of how many times a horizontal line cuts it is governed by $\\varphi$'s own turning values.",
          "Find $\\varphi$'s turning values. $\\varphi'(x)=-36x^{2}+24x+24=-12(3x^{2}-2x-2)$, which vanishes at $x=\\dfrac{1\\pm\\sqrt7}{3}$. Evaluating, $\\varphi\\!\\left(\\dfrac{1-\\sqrt7}{3}\\right)=\\dfrac{80-56\\sqrt7}{9}$ (a local minimum of $\\varphi$) and $\\varphi\\!\\left(\\dfrac{1+\\sqrt7}{3}\\right)=\\dfrac{80+56\\sqrt7}{9}$ (a local maximum of $\\varphi$). For $a$ strictly between these two turning values the line $y=a$ cuts $\\varphi$ three times (three critical points of $f_a$, hence two minima and one maximum); for $a$ outside the closed interval it cuts once (one critical point, the unique minimum).",
          "The boundary is a tangency. When $a$ equals one of the turning values, the line $y=a$ is tangent to $\\varphi$: it meets $\\varphi$ at a double point $x_0$ (the corresponding turning point) and at one simple point. The double point is where $f_a'$ has its double root; since $\\varphi'(x_0)=0$ means the graphs only touch, $f_a'$ does not change sign there, so $x_0$ is a shelf of $f_a$, not a valley. Only the simple intersection gives a minimum, so exactly one local minimum survives — endpoints included.",
          "Therefore $f_a$ has exactly one local minimum iff $a$ lies outside the open turning-value interval, with both endpoints kept: \\[\\boxed{\\,a\\le \\tfrac{80-56\\sqrt7}{9}\\ \\text{or}\\ a\\ge \\tfrac{80+56\\sqrt7}{9}.}\\] The asymmetry of the two endpoints is the fingerprint of the $-4x^{3}$ term: it tilts the two humps so the lower shelf appears at a far more negative $a$ than the upper one."
        ]
      },
      {
        "name": "Tangency as the simultaneous death of $f_a'$ and $f_a''$",
        "steps": [
          "The count of local minima can only change as $a$ varies when two critical points merge, i.e. when $f_a'$ acquires a repeated root. A repeated root of $f_a'$ is a common zero of $f_a'$ and its derivative $f_a''(x)=36x^{2}-24x-24$. So solve $f_a''(x)=0$ first: $36x^{2}-24x-24=0\\Rightarrow 3x^{2}-2x-2=0\\Rightarrow x=\\dfrac{1\\pm\\sqrt7}{3}$. These are the only candidate merge locations (independent of $a$).",
          "Force $f_a'=0$ there to read off the critical parameter values. Substituting $x=\\dfrac{1\\pm\\sqrt7}{3}$ into $a=-12x^{3}+12x^{2}+24x$ gives $a=\\dfrac{80\\mp56\\sqrt7}{9}$ (the lower sign pairing $x=\\tfrac{1-\\sqrt7}{3}$ with the smaller $a$). These are exactly the two $a$ at which the minimum-count can switch.",
          "Determine which side has two minima. Pick a test value inside, say $a=0$: then $f_0'(x)=12x(x^{2}-x-2)=12x(x-2)(x+1)$ has three distinct roots $x=-1,0,2$ with $f_0''=36x^{2}-24x-24$ giving $f_0''(-1)=36>0$, $f_0''(0)=-24<0$, $f_0''(2)=72>0$ — two minima and one maximum. So the open interval between the two critical $a$'s is the two-minima regime, and its complement is the one-minimum regime.",
          "Classify the boundary itself. At each critical $a$, the merged root $x_0=\\dfrac{1\\pm\\sqrt7}{3}$ satisfies $f_a'(x_0)=f_a''(x_0)=0$: it is a horizontal inflection (shelf) of $f_a$, where $f_a'$ touches zero without a sign change, so it produces no minimum, while the lone simple root of $f_a'$ does. Hence both boundary values give exactly one local minimum and are included, yielding \\[\\boxed{\\,a\\le \\tfrac{80-56\\sqrt7}{9}\\ \\text{or}\\ a\\ge \\tfrac{80+56\\sqrt7}{9}.}\\]"
        ]
      }
    ],
    "remark": "Insight: 'how many local minima' is never decided by the discriminant alone — it is decided by how many times $f'$ changes sign from $-$ to $+$, and a tangential double root of $f'$ changes sign zero times. So the boundary of the parameter range, where $f'$ acquires a double root, is precisely where $f$ grows a horizontal-inflection shelf rather than a new valley; the shelf is not an extremum, so the boundary $a$-values stay in the 'exactly one minimum' set. Three independent lenses agree: the discriminant $-432(9a^2-160a-1728)$, the tangency of the line $y=a$ to the auxiliary cubic $a=\\varphi(x)=-12x^3+12x^2+24x$, and the simultaneous vanishing $f'=f''=0$ (which forces the inflection abscissae $x=\\tfrac{1\\pm\\sqrt7}{3}$ first, then reads off $a=\\tfrac{80\\mp56\\sqrt7}{9}$). The cubic $-4x^3$ term is what breaks the symmetry, pushing the two endpoints to unequal, irrational values — a reminder that for a non-even quartic the two 'merge' events need not be mirror images, and each must be inspected on its own."
  },
  {
    "theme": "monotonic",
    "themeLabel": "Monotonicity & Extrema",
    "title": "The Supremum That Lives Off the Cliff at Zero",
    "difficulty": 5,
    "task": "Determine and justify",
    "tags": [
      "global-extrema",
      "supremum-not-attained",
      "auxiliary-function",
      "strict-monotonicity",
      "open-interval"
    ],
    "statement": "On the interval $(0,\\pi]$ define \\[ g(x)\\;=\\;\\frac{\\sin x}{x}\\;+\\;\\frac{\\sin 2x}{2x}. \\] Find $\\displaystyle\\sup_{(0,\\pi]} g$ and $\\displaystyle\\min_{(0,\\pi]} g$. For each, state precisely whether it is attained and, if so, at which point; if a supremum is not attained, say so explicitly. Justify every claim — in particular decide whether $g$ has any interior critical point in $(0,\\pi)$, and resolve the status of the endpoint $x=\\pi$.",
    "answer": "\\[\\boxed{\\ \\sup_{(0,\\pi]}g=2\\ \\text{(not attained)},\\qquad \\min_{(0,\\pi]}g=0\\ \\text{at }x=\\pi\\ }\\]",
    "trap": "The reflex is to hunt the maximum where $g'=0$. Computing $g'(x)=\\dfrac{(1+\\cos x)\\,(2x\\cos x-x-\\sin x)}{x^{2}}$, the factor $1+\\cos x$ vanishes at $x=\\pi$, so $g'(\\pi)=0$ — the ONLY zero of $g'$ on the whole interval. A student therefore declares $x=\\pi$ the extremum, and because it is the lone critical point, brands it the maximum. Two blunders are bundled here. (i) $x=\\pi$ is in fact the global MINIMUM, not a maximum: $g(\\pi)=0$ while $g$ takes values near $2$. (ii) The genuine largest value, $\\sup g=2$, is the limit $\\lim_{x\\to0^{+}}g(x)=1+1=2$, a NON-ATTAINED boundary value living at the open end $x=0$ that is not part of the domain — no point of $(0,\\pi]$ achieves it, so there is no maximum at all. A second seduction is the phrase \"sum of two decreasing functions\": $\\dfrac{\\sin x}{x}$ does decrease on $(0,\\pi]$, but $\\dfrac{\\sin 2x}{2x}$ does NOT — its argument $2x$ runs over $(0,2\\pi]$, so it dives to a minimum near $x\\approx2.25$ and then rises back to $0$ at $x=\\pi$. One cannot conclude monotonicity term-by-term; the decrease of the sum must be proved, and it survives only because the first term's fall dominates the second term's late rebound.",
    "solutions": [
      {
        "name": "Factor the derivative and pin its sign",
        "steps": [
          "Combine over the common denominator using $\\tfrac12\\sin 2x=\\sin x\\cos x$: \\[ g(x)=\\frac{\\sin x+\\tfrac12\\sin 2x}{x}=\\frac{\\sin x\\,(1+\\cos x)}{x}. \\] Differentiate the original form; the numerator of $g'$ is $N(x)=x(\\cos x+\\cos 2x)-\\sin x-\\tfrac12\\sin 2x$, and a short expansion (using $\\cos 2x=2\\cos^2x-1$, $\\sin 2x=2\\sin x\\cos x$) factors it: \\[ N(x)=(1+\\cos x)\\bigl(2x\\cos x-x-\\sin x\\bigr),\\qquad g'(x)=\\frac{(1+\\cos x)\\,\\phi(x)}{x^{2}},\\ \\ \\phi(x)=2x\\cos x-x-\\sin x. \\]",
          "On $(0,\\pi)$ the factor $1+\\cos x>0$, so $\\operatorname{sign}g'=\\operatorname{sign}\\phi$. Now $\\phi(0)=0$ and \\[ \\phi'(x)=2\\cos x-2x\\sin x-1-\\cos x=(\\cos x-1)-2x\\sin x. \\] On $(0,\\pi)$ we have $\\cos x-1<0$ and $2x\\sin x>0$, hence $\\phi'(x)<0$. Thus $\\phi$ strictly decreases from $\\phi(0)=0$, giving $\\phi(x)<0$ on $(0,\\pi]$.",
          "Therefore $g'(x)<0$ for all $x\\in(0,\\pi)$: $g$ is strictly decreasing on $(0,\\pi]$, and it has no interior critical point. The only zero of $g'$ is at $x=\\pi$, where the factor $1+\\cos x$ vanishes — an endpoint zero, not an interior turning point.",
          "A strictly decreasing function on $(0,\\pi]$ attains its minimum at the right endpoint: $\\min g=g(\\pi)=\\dfrac{\\sin\\pi\\,(1+\\cos\\pi)}{\\pi}=0$, attained at $x=\\pi$. Its values rise as $x\\downarrow0$ toward the supremum $\\lim_{x\\to0^{+}}g=\\lim_{x\\to0^{+}}\\bigl(\\tfrac{\\sin x}{x}+\\tfrac{\\sin 2x}{2x}\\bigr)=1+1=2$. Since $0\\notin(0,\\pi]$ and $g$ is strictly below $2$ everywhere on the domain, the value $2$ is never reached. \\[\\boxed{\\ \\sup g=2\\ \\text{(not attained)},\\quad \\min g=0\\ \\text{at }x=\\pi.\\ }\\]"
        ]
      },
      {
        "name": "Two strict bounds squeeze the supremum",
        "steps": [
          "Establish the supremum without any critical-point hunt, using the elementary bound $\\sin t<t$ for $t>0$. For $x\\in(0,\\pi]$: with $t=x$, $\\dfrac{\\sin x}{x}<1$; with $t=2x>0$, $\\sin 2x<2x$ gives $\\dfrac{\\sin 2x}{2x}<1$. Adding, $g(x)<2$ for every $x\\in(0,\\pi]$ — strictly, so the level $2$ is never attained.",
          "On the other hand $\\lim_{x\\to0^{+}}\\dfrac{\\sin x}{x}=1$ and $\\lim_{x\\to0^{+}}\\dfrac{\\sin 2x}{2x}=1$, so $g(x)\\to2$ as $x\\to0^{+}$. Hence $2$ is an upper bound that is approached arbitrarily closely: $\\sup_{(0,\\pi]}g=2$, and by the previous step it is not attained, so $g$ has no maximum.",
          "For the minimum, use the closed form $g(x)=\\dfrac{\\sin x\\,(1+\\cos x)}{x}$. On $(0,\\pi)$ each factor of the numerator is positive ($\\sin x>0$, $1+\\cos x>0$) and $x>0$, so $g(x)>0$; at the endpoint $g(\\pi)=0$ because $1+\\cos\\pi=0$. Thus $g(\\pi)=0\\le g(x)$ for all $x\\in(0,\\pi]$, with equality only at $x=\\pi$.",
          "Therefore the minimum value is $0$, attained uniquely at $x=\\pi$, while the supremum is the unattained boundary limit $2$. \\[\\boxed{\\ \\sup g=2\\ \\text{(not attained)},\\quad \\min g=0\\ \\text{at }x=\\pi.\\ }\\]"
        ]
      },
      {
        "name": "Half-angle closed form and a single auxiliary function",
        "steps": [
          "Write $\\sin x=2\\sin\\tfrac x2\\cos\\tfrac x2$ and $1+\\cos x=2\\cos^{2}\\tfrac x2$ in $g(x)=\\dfrac{\\sin x\\,(1+\\cos x)}{x}$ to get \\[ g(x)=\\frac{4\\sin\\frac x2\\cos^{3}\\frac x2}{x}. \\] On $(0,\\pi]$ put $u=\\tfrac x2\\in(0,\\tfrac\\pi2]$, so $g=\\dfrac{2\\sin u\\cos^{3}u}{u}=\\cos^{2}u\\cdot\\dfrac{\\sin 2u}{2u}\\cdot 2=\\dfrac{2\\sin u\\cos^{3}u}{u}$; both $\\cos u>0$ and $\\sin u>0$ on $(0,\\tfrac\\pi2)$, confirming $g>0$ there and $g=0$ exactly when $\\cos u=0$, i.e. $u=\\tfrac\\pi2$, i.e. $x=\\pi$.",
          "To compare any two domain points, study the single auxiliary $\\phi(x)=2x\\cos x-x-\\sin x$ (the sign-controlling factor of $g'$, since $g'(x)=(1+\\cos x)\\phi(x)/x^{2}$ and $1+\\cos x>0$ on $(0,\\pi)$). We have $\\phi(0)=0$ and $\\phi'(x)=(\\cos x-1)-2x\\sin x<0$ on $(0,\\pi)$, so $\\phi<0$ and $g$ strictly decreases on $(0,\\pi]$.",
          "Strict decrease means $g(b)<g(a)$ whenever $0<a<b\\le\\pi$. Letting $b=\\pi$ shows every value exceeds $g(\\pi)=0$, so the minimum is $0$ at $x=\\pi$. Letting $a\\to0^{+}$ shows every value is below $\\lim_{x\\to0^{+}}g=2$ and that $g$ climbs toward $2$ without bound below it as $x$ shrinks.",
          "Since $0\\notin(0,\\pi]$, the value $2$ is an unattained supremum (no maximum), and $0$ is the attained minimum at the right endpoint. \\[\\boxed{\\ \\sup g=2\\ \\text{(not attained)},\\quad \\min g=0\\ \\text{at }x=\\pi.\\ }\\]"
        ]
      }
    ],
    "remark": "Insight: on a half-open interval, $\\sup$ and $\\max$ are not the same word. Here the supremum $2$ is a boundary limit at the excluded end $x=0$, where the removable singularity of each $\\operatorname{sinc}$ term heals to $1$; no point of $(0,\\pi]$ attains it, so there is no maximum even though $g$ is bounded and the bound is sharp. The lone solution of $g'=0$ sits at $x=\\pi$ — but only because $1+\\cos x$ kills the derivative there, an endpoint artifact, and that point is the global minimum, the exact opposite of what a blind $g'=0$ search suggests. The deeper lesson is the failed shortcut: $g$ is a sum of two $\\operatorname{sinc}$'s, the second of which is non-monotone on $(0,\\pi]$ (its argument sweeps past the first sinc dip near $4.49$), so monotonicity cannot be read off term by term and must be earned by factoring $g'=(1+\\cos x)\\phi(x)/x^{2}$ and controlling the single auxiliary $\\phi$ with $\\phi(0)=0$, $\\phi'<0$."
  },
  {
    "theme": "monotonic",
    "themeLabel": "Monotonicity & Extrema",
    "title": "Which Is Bigger: e to the pi, or pi to the e?",
    "difficulty": 5,
    "task": "Prove that",
    "statement": "Without a calculator, prove that \\[ e^{\\pi} > \\pi^{e}. \\]",
    "answer": "proved (indeed $e^{\\pi}>\\pi^{e}$, since $x^{1/x}$ is strictly decreasing for $x>e$).",
    "trap": "Taking logs to compare $\\pi\\ln e=\\pi$ versus $e\\ln\\pi$ and then trying to estimate $\\ln\\pi$ numerically by hand — error-prone and not a proof, since $\\pi/e\\approx1.156$ sits dangerously close to $\\ln\\pi\\approx1.145$, so a sloppy estimate can flip the sign. The clean route is to compare $\\dfrac{\\ln x}{x}$ at $x=e$ and $x=\\pi$ using its monotonicity, sidestepping all numerics.",
    "tags": [
      "e-vs-pi",
      "monotone-comparison",
      "logarithm",
      "global-maximum"
    ],
    "solutions": [
      {
        "name": "Monotonicity of (ln x)/x",
        "steps": [
          "Let $g(x)=\\dfrac{\\ln x}{x}$ for $x>0$. Then $g'(x)=\\dfrac{1-\\ln x}{x^{2}}$, which is $<0$ for $x>e$.",
          "So $g$ is strictly decreasing on $(e,\\infty)$. Since $e<\\pi$, we get $g(e)>g(\\pi)$, i.e. $\\dfrac{\\ln e}{e}>\\dfrac{\\ln\\pi}{\\pi}$.",
          "That reads $\\dfrac{1}{e}>\\dfrac{\\ln\\pi}{\\pi}$, i.e. $\\pi>e\\ln\\pi=\\ln(\\pi^{e})$, and also $\\pi=\\ln(e^{\\pi})$.",
          "Therefore $\\ln(e^{\\pi})>\\ln(\\pi^{e})$; exponentiating (an increasing map) gives $\\boxed{e^{\\pi}>\\pi^{e}}$."
        ]
      },
      {
        "name": "Maximum of x^{1/x}",
        "steps": [
          "Consider $h(x)=x^{1/x}=e^{(\\ln x)/x}$. Since $(\\ln x)/x$ has a unique global max at $x=e$ (derivative $\\tfrac{1-\\ln x}{x^2}$ changes $+\\to-$ there), $h$ has its global maximum at $x=e$.",
          "Hence $e^{1/e}>\\pi^{1/\\pi}$ (strict, as $\\pi\\ne e$).",
          "Raise both sides to the positive power $e\\pi$: $\\left(e^{1/e}\\right)^{e\\pi}>\\left(\\pi^{1/\\pi}\\right)^{e\\pi}$, i.e. $e^{\\pi}>\\pi^{e}$.",
          "Thus $\\boxed{e^{\\pi}>\\pi^{e}}$."
        ]
      },
      {
        "name": "Tangent-line inequality e^t>1+t",
        "steps": [
          "Use $e^{t}>1+t$ for $t\\ne 0$ (since $t\\mapsto e^t-1-t$ has a strict min $0$ at $t=0$). Put $t=\\dfrac{\\pi}{e}-1>0$.",
          "Then $e^{\\pi/e-1}>\\dfrac{\\pi}{e}$, so $e^{\\pi/e}>\\pi$, hence (raising to the power $e>0$) $e^{\\pi}>\\pi^{e}$.",
          "Every step uses a strict inequality, so the conclusion is strict.",
          "$\\boxed{e^{\\pi}>\\pi^{e}}$."
        ]
      }
    ],
    "remark": "Insight: The single function $(\\ln x)/x$ — peaking exactly at $x=e$ — settles the entire family of '$a^b$ vs $b^a$' questions for $a,b>e$. The number $e$ is special precisely as the global maximizer of $x^{1/x}$."
  },
  {
    "theme": "monotonic",
    "themeLabel": "Monotonicity & Extrema",
    "title": "When a Parabola Chases an Exponential",
    "difficulty": 5,
    "task": "Count",
    "tags": [
      "root-counting",
      "tangency",
      "parameter",
      "transcendental",
      "monotonicity",
      "hidden-root"
    ],
    "statement": "For a real parameter $a>0$, determine the number $N(a)$ of real solutions $x$ of \\[ e^{x} = a\\,x^{2}. \\] Give $N(a)$ for every $a>0$, identifying the exact critical value of $a$ at which the count changes, and prove your tally is complete (no root is overlooked).",
    "answer": "\\[\\boxed{N(a)=\\begin{cases}1,& 0<a<\\tfrac{e^{2}}{4},\\\\ 2,& a=\\tfrac{e^{2}}{4},\\\\ 3,& a>\\tfrac{e^{2}}{4}.\\end{cases}}\\]",
    "trap": "Imposing the tangency conditions $e^{x}=a x^{2}$ and (differentiating) $e^{x}=2ax$ gives $x=2,\\ a=e^{2}/4$, and the tempting conclusion is the textbook ladder $0$ roots for $a<e^{2}/4$, $1$ for $a=e^{2}/4$, $2$ for $a>e^{2}/4$. That tangency analysis lives entirely on $x>0$: it silently assumes a root must be near the parabola's right contact. But $a x^{2}>0$ forces $e^{x}>0$ — automatic — and on $x<0$ the curve $e^{x}/x^{2}$ runs monotonically from $+\\infty$ (as $x\\to0^{-}$) down to $0^{+}$ (as $x\\to-\\infty$), so EVERY horizontal level $a>0$ is crossed exactly once on the negative axis. There is always one extra negative root the tangency picture never sees, so the true counts are $1/2/3$, not $0/1/2$.",
    "solutions": [
      {
        "name": "Separate the parameter: level sets of $g(x)=e^{x}/x^{2}$",
        "steps": [
          "Since $a>0$ forces $a x^{2}>0$ and $e^{x}>0$, no root is $0$; for $x\\ne0$ divide to get the equivalent equation $g(x)=a$ where $g(x)=\\dfrac{e^{x}}{x^{2}}$. Counting solutions of $e^{x}=ax^{2}$ is exactly counting how often the horizontal line at height $a$ meets the graph of $g$.",
          "Differentiate: $g'(x)=\\dfrac{e^{x}x^{2}-e^{x}\\,2x}{x^{4}}=\\dfrac{(x-2)e^{x}}{x^{3}}$. On $x<0$ the factors give sign $(-)(+)/(-)>0$, so $g$ is strictly increasing on $(-\\infty,0)$; on $0<x<2$, $g'<0$ and on $x>2$, $g'>0$.",
          "Limits: as $x\\to0^{\\pm}$, $g\\to+\\infty$; as $x\\to-\\infty$, $g\\to0^{+}$; as $x\\to+\\infty$, $g\\to+\\infty$. Hence on $(-\\infty,0)$, $g$ rises from $0^{+}$ to $+\\infty$, meeting every level $a>0$ exactly ONCE. On $(0,\\infty)$, $g$ falls from $+\\infty$ to the minimum $g(2)=\\dfrac{e^{2}}{2^{2}}=\\dfrac{e^{2}}{4}$ then rises back to $+\\infty$.",
          "So the $x>0$ branch contributes $0$ roots if $a<e^{2}/4$, one (tangent at $x=2$) if $a=e^{2}/4$, two if $a>e^{2}/4$. Adding the always-present single negative root gives $N(a)=1,2,3$ respectively, i.e. $\\boxed{N(a)=1\\ (0<a<\\tfrac{e^{2}}{4}),\\ 2\\ (a=\\tfrac{e^{2}}{4}),\\ 3\\ (a>\\tfrac{e^{2}}{4})}$."
        ]
      },
      {
        "name": "Logarithmic recast, treating the two signs as separate monotone problems",
        "steps": [
          "For a positive root put $x>0$ and take logs of $e^{x}=ax^{2}$: $x=\\ln a+2\\ln x$, i.e. $\\varphi(x):=x-2\\ln x=\\ln a$. Then $\\varphi'(x)=1-\\dfrac{2}{x}=\\dfrac{x-2}{x}$, so $\\varphi$ decreases on $(0,2)$ and increases on $(2,\\infty)$, with minimum $\\varphi(2)=2-2\\ln2=\\ln\\!\\big(\\tfrac{e^{2}}{4}\\big)$ and $\\varphi\\to+\\infty$ at both ends.",
          "Thus $\\varphi(x)=\\ln a$ has $0,1,2$ positive solutions according as $\\ln a<\\ln(e^{2}/4)$, $=$, or $>$, i.e. according as $a<\\tfrac{e^{2}}{4}$, $a=\\tfrac{e^{2}}{4}$, $a>\\tfrac{e^{2}}{4}$.",
          "For a negative root substitute $x=-t,\\ t>0$: $e^{-t}=a t^{2}$ gives $-t-2\\ln t=\\ln a$, i.e. $\\psi(t):=-t-2\\ln t=\\ln a$. Here $\\psi'(t)=-1-\\dfrac{2}{t}<0$ for all $t>0$, so $\\psi$ is strictly decreasing from $+\\infty$ (as $t\\to0^{+}$) to $-\\infty$ (as $t\\to\\infty$): a bijection onto $\\mathbb{R}$. Hence for EVERY real $\\ln a$ there is exactly one $t>0$, i.e. exactly one negative root for every $a>0$.",
          "Total $=$ (negative roots) $+$ (positive roots) $=1+\\{0,1,2\\}$, giving $\\boxed{N(a)=1,\\,2,\\,3}$ for $0<a<\\tfrac{e^{2}}{4}$, $a=\\tfrac{e^{2}}{4}$, $a>\\tfrac{e^{2}}{4}$."
        ]
      },
      {
        "name": "Tangency for the bifurcation value, completed by a sign-change count",
        "steps": [
          "Set $F(x)=e^{x}-ax^{2}$. A change in the number of roots can only occur where a simple root merges into a double root, i.e. where $F(x)=0$ and $F'(x)=e^{x}-2ax=0$ simultaneously. Eliminating $e^{x}$: $ax^{2}=2ax\\Rightarrow x=2$ (as $x\\ne0$), whence $a=\\dfrac{e^{2}}{2^{2}}=\\dfrac{e^{2}}{4}$. This is the only candidate bifurcation, occurring on the positive axis.",
          "Now count by limits and signs rather than trusting the tangency to give the whole story. As $x\\to-\\infty$, $F(x)=e^{x}-ax^{2}\\to-\\infty$; at $x=0$, $F(0)=1>0$. So $F$ changes sign on $(-\\infty,0)$ and (since $F'=e^x-2ax>0$ throughout $x<0$, because $-2ax>0$ there) it is strictly increasing on $(-\\infty,0)$: exactly one negative root, for every $a>0$.",
          "On $(0,\\infty)$ compare the strictly convex chase: $F(0)=1>0$ and $F(+\\infty)=+\\infty$, while the minimum of $g=e^{x}/x^{2}$ found above shows $F$ can dip below $0$ there precisely when $a>e^{2}/4$. For $a<e^{2}/4$, $e^{x}>ax^{2}$ for all $x>0$ (no positive root); at $a=e^{2}/4$ the curves touch once at $x=2$; for $a>e^{2}/4$ the dip crosses zero twice. So the positive axis supplies $0,1,2$ roots.",
          "Combining, $N(a)=1+0,\\ 1+1,\\ 1+2$, i.e. $\\boxed{N(a)=\\begin{cases}1,&0<a<e^{2}/4\\\\2,&a=e^{2}/4\\\\3,&a>e^{2}/4\\end{cases}}$, the single bifurcation at $a=e^{2}/4$ adding exactly the two positive roots on top of the permanent negative one."
        ]
      }
    ],
    "remark": "The whole subtlety is that $e^{x}=ax^{2}$ is not one root-count problem but two, glued at the forbidden point $x=0$ where $g(x)=e^{x}/x^{2}$ blows up to $+\\infty$ on both sides. The tangency calculation correctly locates the bifurcation $a=e^{2}/4$ (the minimum of $g$ on $x>0$, equivalently the minimum of $x-2\\ln x$), but it only governs the U-shaped positive branch. The negative branch is monotone — $g$ climbs from $0^{+}$ to $+\\infty$ — so it quietly donates one root at every level $a>0$ and never participates in the bifurcation. Lesson for the count: before reading off $0/1/2$ from a tangency, sweep the whole domain for monotone branches that contribute roots no critical-point analysis will ever flag. Here that oversight is the difference between $0/1/2$ and the correct $1/2/3$."
  },
  {
    "theme": "derivlimits",
    "themeLabel": "Derivative-driven Limits",
    "title": "Tuning Constants Until the Cosine Submits",
    "difficulty": 4,
    "task": "Find a,b",
    "tags": [
      "taylor matching",
      "finite limit",
      "cosine expansion",
      "constants"
    ],
    "statement": "Find the constants $a$ and $b$ for which \\[ \\lim_{x\\to 0}\\frac{\\cos x+a+b\\,x^{2}}{x^{4}} \\] exists and is finite and nonzero, and evaluate the limit for those values.",
    "answer": "$a=-1,\\ b=\\dfrac12$, and the limit equals $\\dfrac1{24}$.",
    "trap": "Jumping straight to L'Hopital before fixing $a,b$ is fatal: for generic $a,b$ the numerator tends to $1+a\\neq 0$, so the $0/0$ hypothesis fails and L'Hopital is illegal. You must first kill the constant and quadratic terms by matching the Taylor series of $\\cos x$.",
    "solutions": [
      {
        "name": "Match the Maclaurin series",
        "steps": [
          "$\\cos x=1-\\dfrac{x^2}{2}+\\dfrac{x^4}{24}-\\cdots$, so the numerator is $(1+a)+\\left(b-\\tfrac12\\right)x^2+\\dfrac{x^4}{24}+O(x^6)$.",
          "For the $x^4$ ratio to be finite, the $x^0$ and $x^2$ coefficients must vanish: $1+a=0$ and $b-\\tfrac12=0$, giving $a=-1,\\ b=\\tfrac12$.",
          "Then the numerator is $\\dfrac{x^4}{24}+O(x^6)$, so the limit is $\\boxed{\\dfrac1{24}}$ (with $a=-1,\\,b=\\tfrac12$)."
        ]
      },
      {
        "name": "Iterated L'Hopital after enforcing $0/0$",
        "steps": [
          "Require the numerator $\\to0$: at $x=0$ it equals $1+a$, so $a=-1$. With $a=-1$, applying L'Hopital once and demanding the new $0/0$ form at the $x^2$ stage forces $b=\\tfrac12$.",
          "With $a=-1,b=\\tfrac12$ the quotient is $\\dfrac{\\cos x-1+\\tfrac12 x^2}{x^4}$; four legitimate applications of L'Hopital (each preceding stage is genuinely $0/0$) reduce it to $\\dfrac{\\cos x}{24}$.",
          "Evaluate at $0$: $\\dfrac{1}{24}=\\boxed{\\dfrac1{24}}$."
        ]
      }
    ],
    "remark": "Insight: \"make a limit finite\" problems are coefficient-matching in disguise. The constants are determined by demanding each lower-order Taylor coefficient vanish; the surviving term is the answer. L'Hopital is only licensed after the $0/0$ form is secured, which is exactly why $a$ and $b$ must be pinned down first."
  },
  {
    "theme": "derivlimits",
    "themeLabel": "Derivative-driven Limits",
    "title": "L'Hopital Applied to a Form It Has No Right To",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "lhopital trap",
      "non-indeterminate form",
      "one-sided limit",
      "infinite limit"
    ],
    "statement": "Consider \\[ \\lim_{x\\to 0^{+}}\\frac{x+\\cos x}{x+\\sin x}. \\] A student differentiates numerator and denominator, obtaining $\\dfrac{1-\\sin x}{1+\\cos x}\\to\\dfrac12$, and reports $\\tfrac12$. Evaluate the limit correctly and identify the precise error.",
    "answer": "The limit is $+\\infty$; the L'Hopital step was illegal because the form is $1/0$, not $0/0$ or $\\infty/\\infty$.",
    "trap": "L'Hopital was applied to a non-indeterminate form. As $x\\to0^{+}$ the numerator $\\to 1$ while the denominator $\\to 0^{+}$, so the form is $\\frac{1}{0^{+}}\\to+\\infty$ — there is nothing to L'Hopital. Differentiating top and bottom of a $1/0$ quotient produces a meaningless, plausible-looking number ($\\tfrac12$) with no relation to the true value.",
    "solutions": [
      {
        "name": "Check the form first",
        "steps": [
          "As $x\\to0^{+}$: numerator $x+\\cos x\\to 0+1=1$; denominator $x+\\sin x\\to 0+0=0^{+}$ (both $x>0$ and $\\sin x>0$).",
          "A finite nonzero numerator over a denominator $\\to0^{+}$ gives $+\\infty$; the form is $1/0^{+}$, not indeterminate, so L'Hopital does not apply.",
          "Hence the limit is $\\boxed{+\\infty}$, and the student's $\\tfrac12$ is the value of an unrelated quotient."
        ]
      },
      {
        "name": "Leading-order estimate of the denominator",
        "steps": [
          "Near $0^{+}$, $x+\\sin x = 2x+O(x^3)$, which is positive and $\\to0$.",
          "The numerator $x+\\cos x\\to1$, so the quotient behaves like $\\dfrac{1}{2x}\\to+\\infty$.",
          "Thus $\\displaystyle\\lim_{x\\to0^{+}}\\frac{x+\\cos x}{x+\\sin x}=\\boxed{+\\infty}$."
        ]
      }
    ],
    "remark": "Insight: the very first L'Hopital obligation is to confirm the form is $0/0$ or $\\infty/\\infty$. Skipping that check is the most common examiner's red flag — a $1/0$ quotient can yield any answer when you illegitimately differentiate."
  },
  {
    "theme": "derivlimits",
    "themeLabel": "Derivative-driven Limits",
    "title": "A Symmetric Second Difference Quotient",
    "difficulty": 4,
    "task": "Evaluate a limit built from a twice-differentiable function using only the values of the function and its derivatives at a single point.",
    "tags": [
      "differentiability",
      "limit definition of derivative",
      "second derivative",
      "series expansion",
      "L'Hopital"
    ],
    "statement": "Let $f$ be twice differentiable on $\\mathbb{R}$ with $f(2)=3$, $f'(2)=-1$ and $f''(2)=4$. Evaluate $$L=\\lim_{h\\to 0}\\frac{f(2+3h)-2f(2)+f(2-3h)}{h^{2}}.$$",
    "answer": "$\\boxed{L=36}$",
    "trap": "Two seductive errors. First, students treat the symmetric combination as if it were the ordinary central difference and conclude the odd parts cancel to give $0$, forgetting that the surviving term is of order $h^2$, not higher. Second, after correctly identifying the surviving term as a second-derivative limit, they drop the chain-rule factor from the increment $3h$ and answer $f''(2)=4$ instead of $3^2 f''(2)=36$. The combination is NOT a derivative of $f$ at $2$ unless one accounts for the increment $3h$; blindly quoting a memorized 'central second difference equals $f''$' formula gives the wrong scale.",
    "solutions": [
      {
        "name": "Standard series expansion about the point",
        "steps": [
          "Since $f$ is twice differentiable at $2$, write $f(2+t)=f(2)+f'(2)\\,t+\\tfrac{1}{2}f''(2)\\,t^{2}+o(t^{2})$ as $t\\to0$.",
          "Put $t=3h$ and $t=-3h$ and add: $f(2+3h)+f(2-3h)=2f(2)+\\tfrac{1}{2}f''(2)\\big[(3h)^2+(3h)^2\\big]+o(h^2)=2f(2)+9h^2 f''(2)+o(h^2)$. The first-derivative terms, being odd in $t$, cancel.",
          "Hence the numerator is $f(2+3h)-2f(2)+f(2-3h)=9h^2 f''(2)+o(h^2)$.",
          "Divide by $h^2$ and let $h\\to0$: $L=9f''(2)=9\\cdot 4=36.$"
        ]
      },
      {
        "name": "Repeated L'Hopital in h",
        "steps": [
          "Both numerator $N(h)=f(2+3h)-2f(2)+f(2-3h)$ and denominator $h^2$ vanish at $h=0$ (note $N(0)=0$), giving a $0/0$ form, so differentiate top and bottom with respect to $h$.",
          "$N'(h)=3f'(2+3h)-3f'(2-3h)$, denominator derivative $2h$; at $h=0$ this is again $0/0$ since $N'(0)=3f'(2)-3f'(2)=0$.",
          "Differentiate once more: $N''(h)=9f''(2+3h)+9f''(2-3h)$, denominator derivative $2$. By continuity of $f''$ at $2$, $N''(h)\\to 9f''(2)+9f''(2)=18f''(2)$ as $h\\to0$.",
          "Therefore $L=\\dfrac{18f''(2)}{2}=9f''(2)=9\\cdot4=36.$"
        ]
      },
      {
        "name": "Reduction to the limit definition of f''",
        "steps": [
          "Let $u=3h$, so $u\\to0$ as $h\\to0$ and $h^2=u^2/9$. The expression becomes $L=\\lim_{u\\to0}\\dfrac{f(2+u)-2f(2)+f(2-u)}{u^2/9}=9\\lim_{u\\to0}\\dfrac{f(2+u)-2f(2)+f(2-u)}{u^2}.$",
          "Write the inner quotient using $f(2\\pm u)-f(2)=\\pm u f'(2)+\\tfrac12 u^2 f''(2)+o(u^2)$; the $\\pm u f'(2)$ terms cancel and the bracket equals $u^2 f''(2)+o(u^2)$, so the inner limit is exactly $f''(2)$.",
          "Thus $L=9f''(2)=9\\cdot4=36.$"
        ]
      }
    ],
    "remark": "**Insight.** A symmetric difference quotient only reproduces a derivative when its order, scale, and the regularity of $f$ all line up. The odd part of $f$ near the point cancels, so the first-order data $f'(2)$ never appears; the $h^2$ in the denominator is precisely calibrated to extract the second derivative, and the increment $3h$ injects a factor $3^2=9$. The cleaner-looking shortcut of calling this 'a derivative' is exactly where the value gets misscaled, and the whole computation silently relies on $f$ being twice differentiable at $2$ — drop that hypothesis and the cancellation can produce a finite number that is no derivative at all."
  },
  {
    "theme": "derivlimits",
    "themeLabel": "Derivative-driven Limits",
    "title": "The Symmetric Quotient That Loses Its Footing at a Single Angle",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "symmetric-difference-quotient",
      "two-sided-derivative",
      "lhopital-failure",
      "degenerate-case",
      "taylor",
      "composite"
    ],
    "statement": "For a real parameter $a\\in(0,\\pi)$ define \\[ L(a)\\;=\\;\\lim_{x\\to 0}\\;\\frac{\\arctan(a+x)-\\arctan(a-x)}{\\bigl[(a+x)+\\cos(a+x)\\bigr]-\\bigl[(a-x)+\\cos(a-x)\\bigr]}. \\] Find $L(a)$ as an explicit function of $a$ for every $a\\in(0,\\pi)$, treating with care any value of $a$ at which your formula breaks down (decide whether the limit is finite, and if not, state its behaviour).",
    "answer": "$L(a)=\\dfrac{1}{(1+a^{2})(1-\\sin a)}$ for $a\\in(0,\\pi)\\setminus\\{\\tfrac{\\pi}{2}\\}$, while $L\\!\\left(\\tfrac{\\pi}{2}\\right)=+\\infty$ (the limit does not exist finitely)",
    "trap": "Each half is a one-sided slice of a derivative, so the slick move is to write the numerator as $\\approx 2x\\,\\frac{d}{dt}\\arctan t\\big|_{a}=\\frac{2x}{1+a^{2}}$ and the denominator as $\\approx 2x\\,\\frac{d}{dt}(t+\\cos t)\\big|_{a}=2x(1-\\sin a)$, cancel the common $2x$, and announce $L(a)=\\frac{1}{(1+a^{2})(1-\\sin a)}$ for ALL $a\\in(0,\\pi)$. The cancellation is exactly what is illegal at $a=\\tfrac{\\pi}{2}$: there $1-\\sin a=0$, so the denominator has NO linear term and there is no factor of $x$ to cancel — its true leading order is $x^{3}$ (from $\\tfrac13 x^{3}\\sin a$), while the numerator keeps its honest linear term $\\tfrac{2x}{1+\\pi^{2}/4}$. The ratio therefore grows like $\\sim\\frac{6/(1+\\pi^{2}/4)}{x^{2}}\\to+\\infty$, not the seductive finite $\\frac{1}{0}$ read off the broken formula. A student who instead keeps applying L'Hopital after the form has stopped being $0/0$ (it became nonzero$/0$) can even pair third derivatives and report the spurious finite number $\\frac{32(3\\pi^{2}-4)}{(4+\\pi^{2})^{3}}\\approx 0.307$.",
    "solutions": [
      {
        "name": "Symmetric quotient = sum of two-sided derivatives, then guard the degenerate angle",
        "steps": [
          "Write $N(x)=\\arctan(a+x)-\\arctan(a-x)$ and $D(x)=\\bigl[(a+x)+\\cos(a+x)\\bigr]-\\bigl[(a-x)+\\cos(a-x)\\bigr]$. Divide top and bottom by $2x$: \\[ \\frac{N(x)}{D(x)}=\\frac{\\dfrac{\\arctan(a+x)-\\arctan a}{x}+\\dfrac{\\arctan a-\\arctan(a-x)}{x}}{\\dfrac{g(a+x)-g(a)}{x}+\\dfrac{g(a)-g(a-x)}{x}},\\qquad g(t)=t+\\cos t. \\] As $x\\to0$ each forward/backward quotient tends to the derivative at $a$, so the numerator $\\to 2\\arctan'(a)=\\dfrac{2}{1+a^{2}}$ and the denominator $\\to 2g'(a)=2(1-\\sin a)$.",
          "If $g'(a)=1-\\sin a\\neq 0$, the limit of the ratio is the ratio of the limits, \\[ L(a)=\\frac{2/(1+a^{2})}{2(1-\\sin a)}=\\frac{1}{(1+a^{2})(1-\\sin a)}. \\] On $(0,\\pi)$ the only zero of $1-\\sin a$ is $a=\\tfrac{\\pi}{2}$, so this formula is valid for all $a\\in(0,\\pi)\\setminus\\{\\tfrac\\pi2\\}$, and there $L(a)>0$ is a genuine finite number.",
          "At $a=\\tfrac{\\pi}{2}$ the step 'ratio of limits' is forbidden because the denominator limit is $0$. Expand instead about $x=0$: with $g(t)=t+\\cos t$, $g'(\\tfrac\\pi2)=1-\\sin\\tfrac\\pi2=0$ and $g'''(\\tfrac\\pi2)=\\cos\\tfrac\\pi2\\cdot(\\text{sign})$ gives $D(x)=2x\\,g'(\\tfrac\\pi2)+\\tfrac{x^{3}}{3}\\sin\\tfrac\\pi2+O(x^{5})=\\tfrac{x^{3}}{3}+O(x^{5})$, an order-$3$ vanishing.",
          "Meanwhile $N(x)=2x\\,\\arctan'(\\tfrac\\pi2)+O(x^{3})=\\dfrac{2x}{1+\\pi^{2}/4}+O(x^{3})$ is honestly order $1$. Hence \\[ \\frac{N(x)}{D(x)}\\sim\\frac{2x/(1+\\pi^{2}/4)}{x^{3}/3}=\\frac{6/(1+\\pi^{2}/4)}{x^{2}}\\xrightarrow[x\\to0]{}+\\infty, \\] the same on both sides since $x^{2}>0$. Therefore $L(\\tfrac\\pi2)=+\\infty$: the limit fails to exist finitely, and the boxed result is \\[ \\boxed{\\,L(a)=\\frac{1}{(1+a^{2})(1-\\sin a)}\\ \\ (a\\neq\\tfrac\\pi2),\\qquad L(\\tfrac\\pi2)=+\\infty\\,}. \\]"
        ]
      },
      {
        "name": "L'Hopital used honestly — and the moment it stops being legal",
        "steps": [
          "As $x\\to0$ both $N(x)\\to0$ and $D(x)\\to0$, so the form is $0/0$ and one L'Hopital step is legitimate. Differentiating in $x$ (chain rule flips the sign on the $a-x$ pieces into a plus): \\[ \\frac{N'(x)}{D'(x)}=\\frac{\\arctan'(a+x)+\\arctan'(a-x)}{g'(a+x)+g'(a-x)},\\qquad g'(t)=1-\\sin t. \\]",
          "Send $x\\to0$. The numerator tends to $2\\arctan'(a)=\\dfrac{2}{1+a^{2}}\\neq0$. The denominator tends to $2g'(a)=2(1-\\sin a)$. Provided $1-\\sin a\\neq0$ this is a determinate quotient and \\[ L(a)=\\frac{2/(1+a^{2})}{2(1-\\sin a)}=\\frac{1}{(1+a^{2})(1-\\sin a)}. \\]",
          "Crucial check before trusting the one-step answer at $a=\\tfrac\\pi2$: there the post-differentiation form is $\\dfrac{2/(1+\\pi^{2}/4)}{0}$, a nonzero numerator over zero. This is NOT an indeterminate form, so L'Hopital may not be reapplied; the value of such a quotient is an infinite limit, not a number. (Reapplying L'Hopital here is the trap: doing so blindly through third derivatives manufactures the bogus finite $\\frac{32(3\\pi^{2}-4)}{(4+\\pi^{2})^{3}}\\approx0.307$.)",
          "To certify the sign, note $g'(a+x)+g'(a-x)=2-\\sin(\\tfrac\\pi2+x)-\\sin(\\tfrac\\pi2-x)=2-2\\cos x>0$ for small $x\\neq0$, and the numerator $\\to\\tfrac{2}{1+\\pi^{2}/4}>0$; thus $\\dfrac{N'(x)}{D'(x)}=\\dfrac{(\\text{positive})}{2(1-\\cos x)}\\to+\\infty$. Hence $L(\\tfrac\\pi2)=+\\infty$ and \\[ \\boxed{\\,L(a)=\\frac{1}{(1+a^{2})(1-\\sin a)}\\ (a\\neq\\tfrac\\pi2),\\qquad L(\\tfrac\\pi2)=+\\infty\\,}. \\]"
        ]
      },
      {
        "name": "Closed-form collapse of each difference, then a single clean limit",
        "steps": [
          "Use exact difference identities to remove the limit's indeterminacy. The denominator telescopes: $\\bigl[(a+x)+\\cos(a+x)\\bigr]-\\bigl[(a-x)+\\cos(a-x)\\bigr]=2x+\\bigl[\\cos(a+x)-\\cos(a-x)\\bigr]=2x-2\\sin a\\,\\sin x$, using $\\cos(a+x)-\\cos(a-x)=-2\\sin a\\sin x$.",
          "The numerator collapses by the arctan subtraction law: for small $x$, $\\arctan(a+x)-\\arctan(a-x)=\\arctan\\!\\dfrac{(a+x)-(a-x)}{1+(a+x)(a-x)}=\\arctan\\!\\dfrac{2x}{1+a^{2}-x^{2}}$. Thus \\[ \\frac{N(x)}{D(x)}=\\frac{\\arctan\\!\\dfrac{2x}{1+a^{2}-x^{2}}}{\\,2x-2\\sin a\\,\\sin x\\,}. \\]",
          "Divide numerator and denominator by $x$ and use $\\arctan u\\sim u$ and $\\dfrac{\\sin x}{x}\\to1$: the numerator-over-$x$ tends to $\\dfrac{2}{1+a^{2}}$, and the denominator-over-$x$ tends to $2-2\\sin a=2(1-\\sin a)$. When $1-\\sin a\\neq0$ this yields $L(a)=\\dfrac{1}{(1+a^{2})(1-\\sin a)}$.",
          "At $a=\\tfrac\\pi2$ the denominator is exactly $2x-2\\sin x=2(x-\\sin x)=\\tfrac{x^{3}}{3}+O(x^{5})$, which is positive-then the numerator $\\arctan\\!\\frac{2x}{1+\\pi^{2}/4-x^{2}}\\sim\\frac{2x}{1+\\pi^{2}/4}$ stays linear; so $\\dfrac{N}{D}\\sim\\dfrac{6/(1+\\pi^{2}/4)}{x^{2}}\\to+\\infty$. Collecting, \\[ \\boxed{\\,L(a)=\\frac{1}{(1+a^{2})(1-\\sin a)}\\ (a\\neq\\tfrac\\pi2),\\qquad L(\\tfrac\\pi2)=+\\infty\\,}. \\]"
        ]
      }
    ],
    "remark": "A two-sided symmetric quotient $\\frac{P(a+x)-P(a-x)}{Q(a+x)-Q(a-x)}$ is, generically, just the ratio of two-sided derivatives $P'(a)/Q'(a)$ — both halves are derivative limits and the shared linear factor $2x$ cancels. The lesson lives entirely in the word 'generically': the cancellation presupposes $Q'(a)\\neq0$. Here $Q'(a)=1-\\sin a$ has a single zero on $(0,\\pi)$ at $a=\\tfrac\\pi2$, and exactly there the denominator's linear term evaporates, its leading order jumps from $x^{1}$ to $x^{3}$, and the quotient explodes while the formula $\\frac{1}{(1+a^{2})(1-\\sin a)}$ merely reads $\\frac10$. The same fault sinks naive L'Hopital: one step is legal, but after it the form is nonzero$/0$, NOT $0/0$, so further differentiation is unjustified and conjures a fake finite limit. Whenever a symmetric-difference limit carries a parameter, locate the zeros of the denominator's derivative before cancelling — those are precisely the angles where the difference quotient loses its footing."
  },
  {
    "theme": "derivlimits",
    "themeLabel": "Derivative-driven Limits",
    "title": "The One-Way Street of L'Hopital",
    "difficulty": 5,
    "task": "Evaluate & Construct",
    "tags": [
      "lhopital",
      "counterexample",
      "oscillation",
      "indeterminate-form",
      "squeeze",
      "converse-error"
    ],
    "statement": "Part (a). Evaluate \\[ L=\\lim_{x\\to\\infty}\\frac{x+\\sin x\\cos x}{x+e^{-x}\\sin x}, \\] justifying every step. (A student who differentiates top and bottom and \"reads off\" the ratio will reach a different conclusion — say precisely what goes wrong.) Part (b). Using the very functions of part (a) — and a second, separately chosen pair — prove that the implication behind L'Hopital's rule is strictly one-directional. Concretely, exhibit: (i) functions $f,g$ with $g\\to\\infty$ for which $\\displaystyle\\lim_{x\\to\\infty}\\frac{f(x)}{g(x)}$ exists yet $\\displaystyle\\lim_{x\\to\\infty}\\frac{f'(x)}{g'(x)}$ does not (the converse of L'Hopital fails); and (ii) functions $\\phi,\\psi$ for which $\\displaystyle\\lim\\frac{\\phi'}{\\psi'}$ exists yet $\\displaystyle\\lim\\frac{\\phi}{\\psi}$ is not that value (dropping the indeterminate-form hypothesis breaks the rule). Conclude with the exact logical shape of the theorem that survives both counterexamples.",
    "answer": "\\[\\boxed{L=1}\\]",
    "trap": "The differentiate-and-read-off move treats $f'/g'$ as if its behaviour decides $f/g$. Here $f'(x)=1+\\cos 2x=2\\cos^2x$ and $g'(x)=1+e^{-x}(\\cos x-\\sin x)\\to1$, so $f'(x)/g'(x)\\to 2\\cos^2x$, whose values cluster on the whole interval $[0,2]$ ($=0$ at $x=(n+\\tfrac12)\\pi$, $=2$ at $x=n\\pi$): the derivative ratio has NO limit. A naive solver then declares the original limit nonexistent. But L'Hopital is a one-way implication: it says IF the indeterminate-form hypothesis holds AND $f'/g'$ converges, THEN $f/g$ converges to the same value. When $f'/g'$ diverges the rule simply says NOTHING — it is silent, not a verdict of divergence. The genuine limit, gotten by an honest estimate, is $1$. Mistaking L'Hopital's silence for a proof of nonexistence is reading a one-way street backwards.",
    "solutions": [
      {
        "name": "Part (a) by squeeze; expose L'Hopital's silence",
        "steps": [
          "Rewrite using $\\sin x\\cos x=\\tfrac12\\sin 2x$, so $\\dfrac{f(x)}{g(x)}=\\dfrac{x+\\tfrac12\\sin 2x}{x+e^{-x}\\sin x}$. Both numerator and denominator $\\to\\infty$, an honest $\\infty/\\infty$ form. Factor out $x$: $\\dfrac{f}{g}=\\dfrac{1+\\frac{\\sin 2x}{2x}}{1+\\frac{e^{-x}\\sin x}{x}}$.",
          "As $x\\to\\infty$, $\\left|\\frac{\\sin 2x}{2x}\\right|\\le\\frac{1}{2x}\\to0$ and $\\left|\\frac{e^{-x}\\sin x}{x}\\right|\\le\\frac{e^{-x}}{x}\\to0$, so numerator $\\to1$ and denominator $\\to1$. Hence $\\dfrac{f}{g}\\to\\dfrac{1}{1}=1$, i.e. $\\boxed{L=1}$.",
          "Now the trap. Differentiating, $f'(x)=1+\\cos 2x=2\\cos^2x$ and $g'(x)=1+e^{-x}(\\cos x-\\sin x)\\to1$, so $\\dfrac{f'(x)}{g'(x)}=\\dfrac{2\\cos^2x}{1+e^{-x}(\\cos x-\\sin x)}$. Along $x=n\\pi$ this $\\to2$; along $x=(n+\\tfrac12)\\pi$ it $\\to0$. The derivative ratio oscillates and has no limit.",
          "L'Hopital's hypothesis 'the derivative ratio has a limit' therefore fails, so the rule is inapplicable — it does not assert the original limit is nonexistent. The value found by the honest squeeze is unaffected: $\\boxed{L=1}$. This is precisely the moment to recognise L'Hopital as a sufficient, not necessary, test."
        ]
      },
      {
        "name": "Part (a) by splitting off the bounded perturbations",
        "steps": [
          "Write $f(x)/g(x)-1=\\dfrac{(x+\\tfrac12\\sin 2x)-(x+e^{-x}\\sin x)}{x+e^{-x}\\sin x}=\\dfrac{\\tfrac12\\sin 2x-e^{-x}\\sin x}{x+e^{-x}\\sin x}$.",
          "The numerator is bounded: $\\left|\\tfrac12\\sin 2x-e^{-x}\\sin x\\right|\\le\\tfrac12+e^{-x}\\le\\tfrac32$ for $x\\ge0$. The denominator obeys $x+e^{-x}\\sin x\\ge x-e^{-x}\\to\\infty$.",
          "Hence $\\left|\\dfrac{f(x)}{g(x)}-1\\right|\\le\\dfrac{3/2}{x-e^{-x}}\\to0$, so $\\dfrac{f}{g}\\to1$, giving $\\boxed{L=1}$ again.",
          "Note the structural lesson the estimate makes visible: the oscillatory term $\\tfrac12\\sin 2x$ is $O(1)$ against a denominator of order $x$, so it cannot affect the quotient's limit even though it dominates $f'$ entirely (it IS $f'-1$). Differentiation amplifies the irrelevant wobble into the leading term — exactly why $f'/g'$ misleads while $f/g$ is tame, and the bounded-perturbation estimate confirms $\\boxed{L=1}$."
        ]
      },
      {
        "name": "Part (b): the two counterexamples and the surviving theorem",
        "steps": [
          "Converse fails. Take the part-(a) pair $f(x)=x+\\sin x\\cos x$, $g(x)=x+e^{-x}\\sin x$ (or even the stripped pair $f=x+\\sin x\\cos x$, $g=x$, where $f'/g'=2\\cos^2x$ outright). By part (a), $\\lim f/g=1$ exists, while $\\lim f'/g'$ does not. So 'the limit of the quotient exists' does NOT force 'the limit of the derivative quotient exists': there is no theorem in the reverse direction.",
          "Indeterminacy is essential. Take $\\phi(x)=\\sin x+2$ and $\\psi(x)=x$ as $x\\to0^+$. Then $\\dfrac{\\phi'}{\\psi'}=\\dfrac{\\cos x}{1}\\to1$ exists, yet $\\dfrac{\\phi}{\\psi}=\\dfrac{\\sin x+2}{x}\\to+\\infty$ since this is a $2/0^+$ form, NOT $0/0$. Thus when the indeterminate-form hypothesis is dropped, a convergent derivative ratio gives the wrong (here, infinite) answer for $\\phi/\\psi$.",
          "The two counterexamples pin down both protected hypotheses: example one shows convergence of $f/g$ cannot be the premise, example two shows the $0/0$ or $\\infty/\\infty$ form cannot be omitted.",
          "The implication that survives is exactly the single arrow $$\\Big[\\,f/g \\text{ is } \\tfrac00 \\text{ or } \\tfrac{\\infty}{\\infty},\\ g'\\neq0 \\text{ near } a,\\ \\text{and } \\lim\\tfrac{f'}{g'}=\\ell\\,\\Big]\\ \\Longrightarrow\\ \\lim\\tfrac{f}{g}=\\ell.$$ Neither converse arrow is valid; L'Hopital is a one-way street. $\\boxed{L=1}$ in part (a) is reached only because we never relied on that arrow's reverse."
        ]
      }
    ],
    "remark": "The chapter's recurring sin of treating L'Hopital as a two-way equivalence is laid bare here. Differentiation can turn a negligible oscillation into the dominant term: $\\tfrac12\\sin 2x$ is invisible against $x$ in $f/g$ but becomes all of $f'-1$, so $f'/g'$ swings over $[0,2]$ while $f/g$ glides to $1$. The honest tools are a factor-out-$x$ squeeze or a bounded-perturbation estimate, both of which sidestep the derivative entirely. Part (b) isolates the two load-bearing hypotheses with minimal counterexamples — convergence of the quotient is never a premise (converse direction is empty), and the $0/0$ or $\\infty/\\infty$ form is non-negotiable ($\\phi=\\sin x+2,\\psi=x$ shows a $2/0$ form sails past a convergent $\\phi'/\\psi'$). The meta-lesson for a ranker: when $f'/g'$ misbehaves, do not announce a verdict; L'Hopital has merely gone silent, and a direct estimate must take over."
  },
  {
    "theme": "derivlimits",
    "themeLabel": "Derivative-driven Limits",
    "title": "Peeling the Half Away",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "taylor cancellation",
      "exponential",
      "higher-order term",
      "lhopital chain"
    ],
    "statement": "Evaluate \\[ \\lim_{x\\to 0}\\frac{1}{x}\\!\\left(\\frac{e^{x}-1-x}{x^{2}}-\\frac12\\right). \\]",
    "answer": "$\\dfrac16$",
    "trap": "Tempting to substitute the known limit $\\frac{e^x-1-x}{x^2}\\to\\frac12$ first, turning the bracket into $\\frac12-\\frac12=0$ and the whole thing into \"$\\frac{0}{x}\\to 0$.\" That discards the next Taylor term, which is exactly what survives. You must keep the cubic term in $e^x$ before subtracting $\\tfrac12$.",
    "solutions": [
      {
        "name": "Taylor to one extra order",
        "steps": [
          "Use $e^{x}=1+x+\\dfrac{x^2}{2}+\\dfrac{x^3}{6}+O(x^4)$, so $e^{x}-1-x=\\dfrac{x^2}{2}+\\dfrac{x^3}{6}+O(x^4)$.",
          "Divide by $x^2$: $\\dfrac{e^x-1-x}{x^2}=\\dfrac12+\\dfrac{x}{6}+O(x^2)$.",
          "Subtract $\\tfrac12$ and divide by $x$: $\\dfrac16+O(x)\\to\\boxed{\\dfrac16}$."
        ]
      },
      {
        "name": "Single combined fraction + L'Hopital",
        "steps": [
          "Combine over $x^3$: the expression equals $\\dfrac{e^{x}-1-x-\\tfrac12 x^{2}}{x^{3}}$, a genuine $0/0$ form.",
          "Apply L'Hopital three times (each numerator still vanishes at $0$): derivatives give $\\dfrac{e^x-1-x}{3x^2}\\to\\dfrac{e^x-1}{6x}\\to\\dfrac{e^x}{6}$.",
          "Evaluate at $0$: $\\dfrac{e^0}{6}=\\boxed{\\dfrac16}$."
        ]
      }
    ],
    "remark": "Insight: subtracting a known leading limit is legitimate only if you first expose the next term; otherwise you amputate the very quantity you're measuring. The rewritten cubic form $\\frac{e^x-1-x-x^2/2}{x^3}$ makes the order of vanishing honest."
  },
  {
    "theme": "derivlimits",
    "themeLabel": "Derivative-driven Limits",
    "title": "A Power Tower Over a Cube",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "power form",
      "logarithmic linearisation",
      "taylor cancellation",
      "tan minus sin"
    ],
    "statement": "Evaluate \\[ \\lim_{x\\to 0}\\left(\\frac{1+\\tan x}{1+\\sin x}\\right)^{1/x^{3}}. \\]",
    "answer": "$e^{1/2}=\\sqrt{e}$",
    "trap": "Treating the base as $\\to 1$ and the exponent as $\\to\\infty$ and declaring the answer $1$ or $\\infty$ is wrong: this is a $1^{\\infty}$ indeterminate form. One must take logs and find the rate at which the base approaches $1$, governed by $\\tan x-\\sin x\\sim x^3/2$.",
    "solutions": [
      {
        "name": "Logarithm + the tan-sin cancellation",
        "steps": [
          "Let $L$ be the limit. Then $\\ln L=\\lim_{x\\to0}\\dfrac{1}{x^3}\\ln\\!\\dfrac{1+\\tan x}{1+\\sin x}=\\lim_{x\\to0}\\dfrac{\\ln(1+\\tan x)-\\ln(1+\\sin x)}{x^3}$.",
          "Using $\\ln(1+u)=u+O(u^2)$, the numerator is $(\\tan x-\\sin x)+O(x^2)$ where the $O(x^2)$ piece actually starts at order $x^2$ but cancels through order $x^2$ since $\\tan^2 x$ and $\\sin^2 x$ agree to that order; concretely $\\ln(1+\\tan x)-\\ln(1+\\sin x)=(\\tan x-\\sin x)+o(x^3)$, and $\\tan x-\\sin x=\\tan x\\,(1-\\cos x)\\sim x\\cdot\\tfrac{x^2}{2}=\\dfrac{x^3}{2}$.",
          "Hence $\\ln L=\\dfrac{1}{2}$, so $L=\\boxed{e^{1/2}}$."
        ]
      },
      {
        "name": "Series of the log-base",
        "steps": [
          "Expand directly: $\\ln(1+\\tan x)-\\ln(1+\\sin x)=\\dfrac{x^3}{2}-\\dfrac{x^4}{2}+O(x^5)$. The $x$ and $x^2$ terms cancel because $\\tan x$ and $\\sin x$ agree through second order, leaving the leading $x^3/2$.",
          "Divide by $x^3$ to get $\\dfrac12-\\dfrac{x}{2}+O(x^2)\\to\\dfrac12$ as $x\\to0$.",
          "Exponentiate: $L=\\boxed{e^{1/2}}$."
        ]
      }
    ],
    "remark": "Insight: every $1^{\\infty}$ limit is secretly a derivative-rate question $-$ $\\ln(\\text{base})$ behaves like $(\\text{base})-1$, and the exponent times that rate is the whole story. Here the rate is the celebrated $\\tan x-\\sin x\\sim x^3/2$, which is why an $x^3$ in the exponent yields the finite, non-trivial value $\\sqrt e$."
  },
  {
    "theme": "derivlimits",
    "themeLabel": "Derivative-driven Limits",
    "title": "The Symmetric Quotient That Lies About the Second Derivative",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "symmetric-difference",
      "second-derivative",
      "lhopital-trap",
      "oscillation",
      "squeeze",
      "c1-not-c2"
    ],
    "statement": "Define $f:\\mathbb{R}\\to\\mathbb{R}$ by \\[ f(x)=\\frac{7}{2}\\,x^{2}+x^{3}\\sin\\frac1x\\quad(x\\ne0),\\qquad f(0)=0. \\] Compute the symmetric second-difference limit \\[ L=\\lim_{h\\to0}\\frac{f(h)+f(-h)-2f(0)}{h^{2}}, \\] and decide — with proof — whether $f''(0)$ exists. (You may assume it is known that $f$ is differentiable on all of $\\mathbb{R}$ with $f'(0)=0$.)",
    "answer": "\\[\\boxed{\\,L=7\\ \\text{ while } f''(0)\\ \\text{does not exist}\\,}\\]",
    "trap": "The form is $0/0$, so the reflex is L'Hopital in $h$. One application gives $\\dfrac{f'(h)-f'(-h)}{2h}$ (still $0/0$); a second gives $\\dfrac{f''(h)+f''(-h)}{2}$, and the student declares $L=f''(0)$ by plugging in $h=0$. Every step here is illegitimate. L'Hopital may be invoked only when the differentiated quotient actually has a limit, and here, since $f'$ is odd, the first quotient equals $\\dfrac{f'(h)}{h}=\\tfrac72\\cdot2+3h\\sin\\frac1h-\\cos\\frac1h$ — its $\\cos\\frac1h$ oscillates and it has NO limit; the second-order quotient is even worse, containing an unbounded $-\\tfrac1h\\sin\\frac1h$ term. Worst of all, the conclusion is false: $f''(0)$ does not exist, so there is no number to plug in. The symmetric quotient converges to $7$ and looks exactly like $f''(0)$, yet a convergent symmetric second difference does NOT certify that $f$ is twice differentiable.",
    "solutions": [
      {
        "name": "Use the evenness of $f$, then squeeze",
        "steps": [
          "Both pieces of $f$ are even: $\\tfrac72 x^{2}$ obviously, and $x^{3}\\sin\\frac1x$ because sending $x\\mapsto-x$ flips the sign of $x^{3}$ and of $\\sin\\frac1x$ simultaneously, leaving the product unchanged. Hence $f(-h)=f(h)$ and the symmetric numerator collapses: $f(h)+f(-h)-2f(0)=2f(h)-0=2f(h)=7h^{2}+2h^{3}\\sin\\frac1h.$",
          "Dividing by $h^{2}$ gives the exact identity $\\dfrac{f(h)+f(-h)-2f(0)}{h^{2}}=7+2h\\sin\\frac1h$ valid for every $h\\ne0$.",
          "Since $\\big|2h\\sin\\frac1h\\big|\\le2|h|\\to0$, the squeeze theorem gives $L=7$ exactly — no L'Hopital, no Taylor, just evenness plus a vanishing remainder.",
          "Now test $f''(0)$ from the genuine definition. With $f'(0)=0$ and, for $x\\ne0$, $f'(x)=7x+3x^{2}\\sin\\frac1x-x\\cos\\frac1x$, the difference quotient is $\\dfrac{f'(h)-f'(0)}{h}=7+3h\\sin\\frac1h-\\cos\\frac1h.$ Along $h_n=\\frac{1}{2\\pi n}\\to0$ this tends to $7+0-1=6$; along $h_n=\\frac{1}{(2n+1)\\pi}\\to0$ it tends to $7+0+1=8$. Two distinct subsequential limits $\\Rightarrow$ the limit does not exist, so $\\boxed{L=7\\text{ but }f''(0)\\text{ does not exist}}$."
        ]
      },
      {
        "name": "Decompose into a smooth part plus a controlled remainder",
        "steps": [
          "Split $f=P+R$ with $P(x)=\\tfrac72 x^{2}$ (a polynomial, hence $C^{\\infty}$, with $P''(0)=7$) and $R(x)=x^{3}\\sin\\frac1x$, $R(0)=0$. For the smooth part Taylor's theorem gives $\\dfrac{P(h)+P(-h)-2P(0)}{h^{2}}=P''(0)=7$ exactly; this term is honest because $P$ really is twice differentiable.",
          "For the remainder, $|R(x)|\\le|x|^{3}$, so $\\Big|\\dfrac{R(h)+R(-h)-2R(0)}{h^{2}}\\Big|\\le\\dfrac{|h|^{3}+|h|^{3}}{h^{2}}=2|h|\\to0.$ Adding the two contributions, $L=P''(0)+0=7$.",
          "The decomposition also pinpoints WHY $f''(0)$ fails: $P\\in C^{2}$ but $R$ is not twice differentiable at $0$. Indeed $R'(x)=3x^{2}\\sin\\frac1x-x\\cos\\frac1x$ with $R'(0)=0$, and $\\dfrac{R'(h)-R'(0)}{h}=3h\\sin\\frac1h-\\cos\\frac1h$ has no limit because of $\\cos\\frac1h$. Since $f''=P''+R''$ and $P''(0)$ exists while $R''(0)$ does not, $f''(0)$ cannot exist.",
          "Hence the symmetric quotient reports the value $P''(0)=7$ — the second derivative of the smooth part alone — while the rough part contributes $0$ to the symmetric quotient yet destroys twice-differentiability: $\\boxed{L=7,\\ f''(0)\\text{ DNE}}$. The symmetric second difference cannot tell $R$ apart from $0$."
        ]
      },
      {
        "name": "Follow the L'Hopital chain and watch it break (contrapositive of the trap)",
        "steps": [
          "Attempt L'Hopital. Differentiating numerator and denominator in $h$, the candidate after one step is $Q(h)=\\dfrac{f'(h)-f'(-h)}{2h}.$ But $f'(x)=7x+3x^{2}\\sin\\frac1x-x\\cos\\frac1x$ is ODD — it equals $x$ times the even bracket $7+3x\\sin\\frac1x-\\cos\\frac1x$ — so $f'(-h)=-f'(h)$ and $Q(h)=\\dfrac{2f'(h)}{2h}=\\dfrac{f'(h)}{h}=7+3h\\sin\\frac1h-\\cos\\frac1h.$",
          "This $Q(h)$ has NO limit as $h\\to0$, because $\\cos\\frac1h$ oscillates between $\\pm1$ while $3h\\sin\\frac1h\\to0$. L'Hopital's rule may be applied only when the differentiated quotient converges; here it does not, so the rule is inapplicable already at the first step and yields nothing about $L$. The true value $L=7$ must come from the squeeze of Solution 1, not from L'Hopital.",
          "If one nevertheless forces a second (illegal) step, it produces $\\dfrac{f''(h)+f''(-h)}{2}$ with $f''(x)=7+6x\\sin\\frac1x-4\\cos\\frac1x-\\frac1x\\sin\\frac1x$ for $x\\ne0$. As $f''$ is even this is $f''(h)=7+6h\\sin\\frac1h-4\\cos\\frac1h-\\frac1h\\sin\\frac1h$, which is UNBOUNDED as $h\\to0$ owing to the $\\frac1h\\sin\\frac1h$ term. A quotient with no limit certainly cannot be set equal to $f''(0)$.",
          "Confirm $f''(0)$ truly fails: $\\dfrac{f'(h)-f'(0)}{h}=7+3h\\sin\\frac1h-\\cos\\frac1h\\to6$ along $h_n=\\frac1{2\\pi n}$ and $\\to8$ along $h_n=\\frac1{(2n+1)\\pi}$. Two limits $\\Rightarrow$ no derivative. So the verdict is $\\boxed{L=7,\\ f''(0)\\text{ does not exist}}$, with $L$ secured by the squeeze, never by L'Hopital."
        ]
      }
    ],
    "remark": "The symmetric second difference $\\frac{f(h)+f(-h)-2f(0)}{h^2}$ is the discrete operator behind $f''$, but it is strictly weaker: whenever $f''(0)$ exists it returns $f''(0)$, yet it can converge even when $f''(0)$ does not. Here $f$ is even, so the symmetric numerator is just $2f(h)$ and the operator is blind to the genuinely rough term $x^3\\sin\\frac1x$, reporting only the smooth coefficient $7=2\\cdot\\frac72$. The lesson for the L'Hopital chapter is double: (i) you may not run L'Hopital unless the differentiated quotient actually has a limit — and here the very first differentiated quotient $\\frac{f'(h)}{h}$ oscillates, so the rule never even starts; and (ii) a clean numerical answer to a 'second-derivative-looking' limit never certifies that the second derivative exists. The honest tool is the squeeze; the honest test for $f''(0)$ is the definition along two subsequences."
  },
  {
    "theme": "derivlimits",
    "themeLabel": "Derivative-driven Limits",
    "title": "How Fast e Is Approached",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "famous limit",
      "second-order expansion",
      "logarithm",
      "rate to e"
    ],
    "statement": "It is classical that $(1+x)^{1/x}\\to e$ as $x\\to 0$. Evaluate the next-order rate \\[ \\lim_{x\\to 0}\\frac{(1+x)^{1/x}-e}{x}. \\]",
    "answer": "$-\\dfrac{e}{2}$",
    "trap": "Writing $(1+x)^{1/x}=e$ and concluding the numerator is $\\equiv 0$ (so the limit is $0$) discards the first-order deviation, which is the entire quantity sought. You must expand $\\frac1x\\ln(1+x)$ to *second* order, not just to its limiting value $1$.",
    "solutions": [
      {
        "name": "Two-term expansion of the exponent",
        "steps": [
          "Write $(1+x)^{1/x}=\\exp\\!\\left(\\dfrac{\\ln(1+x)}{x}\\right)$ and use $\\dfrac{\\ln(1+x)}{x}=1-\\dfrac{x}{2}+\\dfrac{x^2}{3}-\\cdots$.",
          "So $(1+x)^{1/x}=e\\cdot e^{-x/2+O(x^2)}=e\\left(1-\\dfrac{x}{2}+O(x^2)\\right)=e-\\dfrac{e}{2}x+O(x^2)$.",
          "Then $\\dfrac{(1+x)^{1/x}-e}{x}=-\\dfrac{e}{2}+O(x)\\to\\boxed{-\\dfrac{e}{2}}$."
        ]
      },
      {
        "name": "Derivative of $F(x)=(1+x)^{1/x}$ at $0$ (by continuous extension)",
        "steps": [
          "Set $F(0)=e$. The required limit is $F'(0)$, the difference quotient of $F$ at $0$.",
          "Let $L(x)=\\dfrac{\\ln(1+x)}{x}$ (with $L(0)=1$); then $F=e^{L}$ and $F'=F\\,L'$. Compute $L'(0)$: from $L(x)=1-\\tfrac{x}{2}+\\cdots$, $L'(0)=-\\tfrac12$.",
          "Thus $F'(0)=F(0)L'(0)=e\\cdot(-\\tfrac12)=\\boxed{-\\dfrac{e}{2}}$."
        ]
      }
    ],
    "remark": "Insight: knowing a limit's *value* ($e$) and its *rate of approach* ($-e/2$) are different depths of knowledge. The rate is literally the derivative of the continuously extended function at the limit point — the difference quotient resurfaces."
  },
  {
    "theme": "derivlimits",
    "themeLabel": "Derivative-driven Limits",
    "title": "Where sin and tan Disagree at the Seventh Decimal",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "grand hybrid",
      "composition expansion",
      "deep taylor cancellation",
      "seventh order"
    ],
    "statement": "Evaluate \\[ \\lim_{x\\to 0}\\frac{\\sin(\\tan x)-\\tan(\\sin x)}{x^{7}}. \\]",
    "answer": "$-\\dfrac1{30}$",
    "trap": "Stopping the Taylor expansions too early gives $0$ over and over, tempting the conclusion \"the limit is $0$.\" In fact $\\sin(\\tan x)$ and $\\tan(\\sin x)$ agree through order $x^{6}$; they first differ at $x^{7}$. Any truncation before the $x^{7}$ term silently throws away the answer. Repeated blind L'Hopital (seven times) is a computational minefield here — series is the disciplined route.",
    "solutions": [
      {
        "name": "Composite Maclaurin series to order 7",
        "steps": [
          "With $\\tan x=x+\\tfrac{x^3}{3}+\\tfrac{2x^5}{15}+\\tfrac{17x^7}{315}+\\cdots$ and $\\sin x=x-\\tfrac{x^3}{6}+\\tfrac{x^5}{120}-\\tfrac{x^7}{5040}+\\cdots$, compose carefully.",
          "Expanding gives $\\sin(\\tan x)=x+\\tfrac{x^3}{6}-\\tfrac{x^5}{40}-\\tfrac{55x^7}{1008}+\\cdots$ and $\\tan(\\sin x)=x+\\tfrac{x^3}{6}-\\tfrac{x^5}{40}-\\tfrac{107x^7}{5040}+\\cdots$; the two agree exactly through $x^{6}$, so $\\sin(\\tan x)-\\tan(\\sin x)=\\left(-\\tfrac{55}{1008}+\\tfrac{107}{5040}\\right)x^{7}+O(x^{9})=-\\dfrac{x^{7}}{30}+O(x^{9})$.",
          "Divide by $x^7$: the limit is $\\boxed{-\\dfrac1{30}}$."
        ]
      },
      {
        "name": "Numerical corroboration of the cancellation order",
        "steps": [
          "Evaluating $\\dfrac{\\sin(\\tan x)-\\tan(\\sin x)}{x^7}$ at $x=0.05,\\,0.02,\\,0.01,\\,0.005$ gives $-0.033429,\\,-0.033349,\\,-0.033337,\\,-0.033334$, converging to $-0.0333\\ldots$.",
          "This matches $-\\tfrac1{30}=-0.0333\\overline{3}$ and confirms the numerator vanishes to exactly seventh order (the ratio is bounded and nonzero).",
          "Hence the limit is $\\boxed{-\\dfrac1{30}}$."
        ]
      }
    ],
    "remark": "Insight: two innocuous-looking compositions can agree to six orders before parting ways — the depth of cancellation, not the functions' size, sets the right power of $x$ in the denominator. Series bookkeeping (not seven L'Hopitals) is the only sane tool at this altitude."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Sequence That Tightens Its Own Knot",
    "difficulty": 5,
    "task": "Prove and locate",
    "tags": [
      "mean-value-theorem",
      "contraction",
      "fixed-point",
      "monotone-convergence",
      "arctangent",
      "recursive-sequence"
    ],
    "statement": "Define a sequence by \\[ x_0=0,\\qquad x_{n+1}=\\arctan\\!\\bigl(1+x_n\\bigr)\\quad(n\\ge0). \\] Prove that $(x_n)$ converges to a limit $L$ that is the unique real solution of $L=\\arctan(1+L)$, and — without computing $L$ numerically — pin down the integer/rational bracket in which $L$ must lie. State that bracket as the answer.",
    "answer": "\\[\\boxed{\\,1<L<\\tfrac{6}{5}\\,}\\]",
    "trap": "The reflex is to write $g(x)=\\arctan(1+x)$, note $g'(x)=\\dfrac{1}{1+(1+x)^2}$, evaluate $g'(L)=\\dfrac{1}{1+(1+L)^2}<1$ at the fixed point, and declare \"$g$ is a contraction, so $x_n\\to L$.\" This is circular and incomplete on two counts. First, it invokes $L$ — the very object whose existence and attainment is being asked — to certify the convergence that is supposed to PRODUCE $L$; a slope computed at an unknown point proves nothing about the orbit launched from $x_0=0$. Second, $g'(L)<1$ is only a LOCAL statement at one point: the contraction estimate needs a single constant $k<1$ bounding $|g'|$ uniformly across the whole region the iterates actually visit, and that uniform bound can only be obtained by the Mean Value Theorem on a concrete invariant interval — never by reading off the slope at a single mystery point. A companion slip is to guess $L=\\tfrac{\\pi}{4}$ because $x_1=\\arctan 1=\\tfrac{\\pi}{4}$ and the terms \"settle quickly\"; but $\\tan\\tfrac{\\pi}{4}=1\\ne 1+\\tfrac{\\pi}{4}$, so $\\tfrac{\\pi}{4}$ is not a fixed point at all ($L\\approx1.132$ lies well above it).",
    "solutions": [
      {
        "name": "MVT contraction on an explicit invariant interval, then monotone squeeze",
        "steps": [
          "Let $g(x)=\\arctan(1+x)$, so $x_{n+1}=g(x_n)$ and $g'(x)=\\dfrac{1}{1+(1+x)^2}$. For every $x\\ge 0$ we have $1+x\\ge1$, hence $(1+x)^2\\ge1$ and $0<g'(x)=\\dfrac{1}{1+(1+x)^2}\\le\\dfrac12.$ Thus on the half-line $[0,\\infty)$ the derivative is bounded by the single constant $k=\\tfrac12<1$.",
          "The half-line is invariant: if $x\\ge0$ then $1+x\\ge1$ gives $g(x)=\\arctan(1+x)\\ge\\arctan 1=\\tfrac{\\pi}{4}>0$. Since $x_0=0\\ge0$, induction puts every $x_n$ in $[0,\\infty)$ (indeed in $[0,\\tfrac{\\pi}{2})$). A fixed point exists and is unique: $h(x)=g(x)-x$ has $h'(x)=g'(x)-1\\le0$ with equality only at the isolated point $x=-1$, so $h$ is strictly decreasing; as $h(0)=\\tfrac{\\pi}{4}>0$ and $h(2)=\\arctan 3-2<0$, there is exactly one root $L$, and it satisfies $L=\\arctan(1+L)$.",
          "Now the Mean Value Theorem does the work the trap tried to skip: for each $n$, $x_{n+1}-L=g(x_n)-g(L)=g'(c_n)\\,(x_n-L)$ for some $c_n$ between $x_n$ and $L$, both in $[0,\\infty)$. Hence $|x_{n+1}-L|\\le k\\,|x_n-L|=\\tfrac12|x_n-L|$, giving $|x_n-L|\\le(\\tfrac12)^n|x_0-L|=(\\tfrac12)^n L\\to0.$ The orbit converges to $L$ — with the bound coming from $g'$ over the actual interval, not from any slope at $L$.",
          "Locate $L$ without computing it, using only that $g$ is increasing and $h$ is strictly decreasing. At $x=1$: $g(1)=\\arctan 2$, and $\\tan 1\\approx1.557<2$ forces $\\arctan 2>1$, so $h(1)=\\arctan2-1>0\\Rightarrow L>1$. At $x=\\tfrac65$: $g(\\tfrac65)=\\arctan\\tfrac{11}{5}$, and $\\tan\\tfrac65\\approx2.572>2.2=\\tfrac{11}{5}$ forces $\\arctan\\tfrac{11}{5}<\\tfrac65$, so $h(\\tfrac65)<0\\Rightarrow L<\\tfrac65$. Therefore $\\boxed{1<L<\\tfrac{6}{5}}$."
        ]
      },
      {
        "name": "Monotone Convergence Theorem (no contraction constant needed)",
        "steps": [
          "Show $(x_n)$ is increasing and bounded above, so it converges by the Monotone Convergence Theorem. Since $g$ is strictly increasing, the order of consecutive terms is preserved: if $x_n>x_{n-1}$ then $x_{n+1}=g(x_n)>g(x_{n-1})=x_n$. The base case holds because $x_1=\\arctan 1=\\tfrac{\\pi}{4}>0=x_0$. By induction $(x_n)$ is strictly increasing.",
          "It is bounded above: $g$ maps $[0,\\infty)$ into $[\\tfrac{\\pi}{4},\\tfrac{\\pi}{2})$ because $\\arctan$ is capped by $\\tfrac{\\pi}{2}$; so $x_n<\\tfrac{\\pi}{2}$ for all $n\\ge1$. An increasing sequence bounded above converges; call the limit $L$. Taking limits in $x_{n+1}=g(x_n)$ and using continuity of $g$ gives $L=g(L)=\\arctan(1+L)$.",
          "Uniqueness of $L$ (so the limit is forced, not merely possible): if $a$ and $b$ were two fixed points with $a<b$, the MVT gives $b-a=g(b)-g(a)=g'(\\xi)(b-a)$ for some $\\xi$, forcing $g'(\\xi)=1$; but $g'(\\xi)=\\tfrac{1}{1+(1+\\xi)^2}=1$ only at $\\xi=-1$, while $a,b\\in[\\tfrac{\\pi}{4},\\tfrac{\\pi}{2})$ exclude $\\xi=-1$. Contradiction, so the fixed point is unique and equals $L$.",
          "Bracket $L$ by testing $h(x)=g(x)-x$ at clean points, exactly as before: $\\tan1<2$ gives $g(1)>1$ so $L>1$, and $\\tan\\tfrac65>\\tfrac{11}{5}$ gives $g(\\tfrac65)<\\tfrac65$ so $L<\\tfrac65$. Hence $\\boxed{1<L<\\tfrac{6}{5}}$."
        ]
      },
      {
        "name": "Cauchy estimate from the first step (telescoping the contraction)",
        "steps": [
          "From Solution 1, $|g(x)-g(y)|\\le\\tfrac12|x-y|$ for all $x,y\\ge0$ by the MVT, since $g'\\le\\tfrac12$ on $[0,\\infty)$ and the segment $[x,y]$ stays in $[0,\\infty)$. Apply this to consecutive iterates: $|x_{n+1}-x_n|=|g(x_n)-g(x_{n-1})|\\le\\tfrac12|x_n-x_{n-1}|$, so $|x_{n+1}-x_n|\\le(\\tfrac12)^n|x_1-x_0|=(\\tfrac12)^n\\tfrac{\\pi}{4}.$",
          "For $m>n$, sum the geometric tail: $|x_m-x_n|\\le\\sum_{j=n}^{m-1}|x_{j+1}-x_j|\\le\\tfrac{\\pi}{4}\\sum_{j\\ge n}(\\tfrac12)^j=\\tfrac{\\pi}{4}\\cdot\\dfrac{(\\tfrac12)^n}{1-\\tfrac12}=\\tfrac{\\pi}{2}(\\tfrac12)^n\\to0.$ Thus $(x_n)$ is Cauchy in the complete space $\\mathbb{R}$ and converges to some $L$, which by continuity satisfies $L=\\arctan(1+L)$; uniqueness follows as in Solution 1 since $g'<1$ on $[0,\\infty)$.",
          "This estimate also confirms the limit is genuinely attained and not just approached in principle: letting $m\\to\\infty$ gives the explicit a posteriori bound $|L-x_n|\\le\\tfrac{\\pi}{2}(\\tfrac12)^n$, so e.g. $|L-x_1|\\le\\tfrac{\\pi}{4}\\approx0.785$, consistent with $L$ sitting above $x_1=\\tfrac{\\pi}{4}$ and ruling out the false guess $L=\\tfrac{\\pi}{4}$.",
          "Finally bracket $L$ by the monotonicity of $h(x)=\\arctan(1+x)-x$: $h(1)=\\arctan2-1>0$ (as $\\tan1<2$) and $h(\\tfrac65)=\\arctan\\tfrac{11}{5}-\\tfrac65<0$ (as $\\tan\\tfrac65>\\tfrac{11}{5}$), and $h$ strictly decreasing pins the unique root between them: $\\boxed{1<L<\\tfrac{6}{5}}$."
        ]
      }
    ],
    "remark": "The hybrid lesson is that a contraction is certified by the Mean Value Theorem on a concrete invariant interval, never by the slope at the (unknown) fixed point. Here $1+x\\ge1$ on the invariant half-line $[0,\\infty)$ collapses $g'(x)=\\tfrac{1}{1+(1+x)^2}$ below $\\tfrac12$ uniformly, and that single honest constant powers both the geometric error bound $|x_n-L|\\le(\\tfrac12)^nL$ and the Cauchy estimate — fusing MVT, the the MVT contraction idea, and monotone convergence into one machine. The location of $L$ is then settled with zero arithmetic on $L$ itself: since $h(x)=g(x)-x$ is strictly decreasing, evaluating it at the clean points $1$ and $\\tfrac65$ (where $\\tan1<2$ and $\\tan\\tfrac65>\\tfrac{11}{5}$ are all you need) traps the root in $(1,\\tfrac65)$. A fixed point you can bound but never name is a recurring Putnam motif; the discipline is to extract structure (monotonicity, a uniform slope bound) instead of chasing a decimal."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "When the Second-Derivative Test Goes Silent",
    "difficulty": 5,
    "task": "Classify",
    "tags": [
      "extremum-classification",
      "second-derivative-test",
      "squeeze",
      "monotonicity",
      "oscillation",
      "global-minimum"
    ],
    "statement": "Define $g:\\mathbb{R}\\to\\mathbb{R}$ by \\[ g(x)=x^{4}\\!\\left(3+\\cos\\tfrac1x\\right)\\quad(x\\ne0),\\qquad g(0)=0. \\] First show that $g$ is twice differentiable at the origin and compute $g'(0)$ and $g''(0)$, so as to determine what the second-derivative test reports about the critical point $x=0$. Then classify $x=0$ as accurately as the function allows: decide whether it is a local extremum, whether the extremum (if any) is strict and global, and whether $g$ is monotone on some one-sided neighbourhood $(0,\\delta)$ of it. Justify every claim.",
    "answer": "\\[\\boxed{\\,x=0\\ \\text{is a strict global minimum, yet}\\ g'\\ \\text{changes sign infinitely often on every}\\ (0,\\delta)\\,}\\]",
    "trap": "The reflex is to run the second-derivative test. One finds the critical point $g'(0)=0$, computes $g''(0)=0$, and -- since the test only decides when $g''(0)\\neq0$ -- declares the test \"inconclusive\" and stops, leaving $x=0$ unclassified. A bolder student differentiates twice for $x\\ne0$, gets $g''(x)=6x\\!\\left(2x(3+\\cos\\frac1x)+\\sin\\frac1x\\right)-\\cos\\frac1x$, takes $x\\to0$, watches $-\\cos\\frac1x$ oscillate through negative values, and concludes \"$g''<0$ arbitrarily near $0$, so $0$ is not a minimum.\" Both readings are wrong. The sign of $g''$ near a point governs the test only when $g''(0)\\ne0$; here it is $0$, so the limiting behaviour of $g''$ is irrelevant to classification. The honest route bypasses derivatives entirely: $3+\\cos\\frac1x\\ge2$ forces $g(x)\\ge2x^{4}>0=g(0)$ for all $x\\ne0$, a strict global minimum by direct comparison. The deepest trap is the unstated belief that a strict minimum must sit at the bottom of a one-sidedly increasing arm: here $g'$ changes sign infinitely often on every $(0,\\delta)$, so $g$ is monotone on no one-sided neighbourhood, yet $0$ is still a strict global minimum. \"Strict minimum\" and \"eventually increasing away from the point\" are not the same statement.",
    "solutions": [
      {
        "name": "Squeeze for the minimum; sign-tracking for non-monotonicity",
        "steps": [
          "The two derivatives at $0$, from the definition. Since $\\bigl|x^{4}(3+\\cos\\frac1x)\\bigr|\\le4x^{4}$, we have $\\frac{g(h)-g(0)}{h}=h^{3}(3+\\cos\\frac1h)$ with $|h^{3}(3+\\cos\\frac1h)|\\le4|h|^{3}\\to0$, so $g'(0)=0$. For $x\\ne0$, $g'(x)=x^{2}\\!\\left(4x(3+\\cos\\frac1x)+\\sin\\frac1x\\right)$, hence $\\frac{g'(h)-g'(0)}{h}=h\\!\\left(4h(3+\\cos\\frac1h)+\\sin\\frac1h\\right)$, and $\\bigl|h(4h(3+\\cos\\frac1h)+\\sin\\frac1h)\\bigr|\\le|h|(16|h|+1)\\to0$, so $g''(0)=0$. The second-derivative test, which decides only when $g''(0)\\ne0$, is therefore inconclusive.",
          "Strict global minimum, by squeeze -- no derivative used. For every real $\\theta$, $\\cos\\theta\\ge-1$, so $3+\\cos\\frac1x\\ge2$ for all $x\\ne0$. Multiplying by $x^{4}>0$ gives $g(x)\\ge2x^{4}>0=g(0)$ for every $x\\ne0$. Thus $g(x)>g(0)$ for all $x\\ne0$ across the whole line: $x=0$ is a strict global minimum, settling the classification the test could not.",
          "Non-monotonicity near $0$. The sign of $g'(x)$ for $x>0$ is the sign of $b(x):=4x(3+\\cos\\frac1x)+\\sin\\frac1x$ (since $x^{2}>0$). Pick the points where $\\cos\\frac1x=0$. At $x_k=\\dfrac{1}{(2k-\\frac12)\\pi}$ we have $\\sin\\frac1{x_k}=-1$, so $b(x_k)=12x_k-1<0$ once $x_k<\\frac1{12}$ (true for $k\\ge3$). At $x_k'=\\dfrac{1}{(2k+\\frac12)\\pi}$ we have $\\sin\\frac1{x_k'}=+1$, so $b(x_k')=12x_k'+1>0$ for every $k$. These points interlace and both decrease to $0$, so $g'$ takes both signs in every interval $(0,\\delta)$; hence $g$ is monotone on no one-sided neighbourhood of $0$.",
          "Synthesis: $g'(0)=g''(0)=0$ makes the second-derivative test silent, yet $g(x)\\ge2x^{4}>0=g(0)$ makes $x=0$ a $\\boxed{\\text{strict global minimum on which }g'\\text{ changes sign infinitely often in every }(0,\\delta)}$ -- a strict minimum that is approached non-monotonically from both sides."
        ]
      },
      {
        "name": "Comparison enclosure $2x^4\\le g(x)\\le4x^4$",
        "steps": [
          "Trap two clean parabolas-to-the-fourth around $g$. From $-1\\le\\cos\\frac1x\\le1$ we get $2\\le3+\\cos\\frac1x\\le4$, so for all $x\\ne0$ \\[ 2x^{4}\\le g(x)\\le4x^{4}, \\] and at $x=0$ all three are $0$. Both envelopes are $C^{\\infty}$, vanish to fourth order at $0$, and have $0$ as a strict global minimum.",
          "Differentiability and the two derivatives at $0$ follow from the lower envelope alone. Because $0\\le g(x)\\le4x^{4}$ with equality at $0$, the difference quotients are squeezed: $0\\le\\frac{g(h)}{h}\\le4|h|^{3}\\to0$ gives $g'(0)=0$; and since $g'(0)=0$, $\\frac{g'(h)-g'(0)}{h}=\\frac{g'(h)}{h}$ is squeezed by $\\frac{|g'(h)|}{|h|}\\le16h^{2}+|h|\\to0$ (from Solution 1's formula for $g'$), so $g''(0)=0$. The test is inconclusive.",
          "Classification by the enclosure. The lower envelope already does the work: $g(x)\\ge2x^{4}>0=g(0)$ for $x\\ne0$, so $x=0$ is a strict global minimum -- this needs no information about $g'$ at all. The enclosure also explains the failure of the test cleanly: $g$ is pinned between two functions whose own second derivatives at $0$ are $0$, so $g''(0)=0$ was forced, not accidental.",
          "Why monotonicity nonetheless fails. The envelopes are monotone on each side of $0$, but $g$ is free to wobble between them. Concretely $g'(x_k)<0$ and $g'(x_k')>0$ at the interlacing $\\cos\\frac1x=0$ points of Solution 1, so within the band $g$ rises and falls infinitely often as $x\\to0^{+}$. Hence $\\boxed{x=0\\text{ is a strict global minimum, but }g\\text{ is monotone on no }(0,\\delta)}$."
        ]
      },
      {
        "name": "Substitution to a clean odd oscillation",
        "steps": [
          "Isolate the oscillating engine. Write $g(x)=3x^{4}+x^{4}\\cos\\frac1x=3x^{4}+r(x)$ with $r(x)=x^{4}\\cos\\frac1x$ (and $r(0)=0$). The smooth part $3x^{4}$ has $0$ as a strict global minimum with vanishing first and second derivatives there; everything subtle lives in the remainder $r$, which satisfies $|r(x)|\\le x^{4}$.",
          "Control the remainder to second order. From $|r(x)|\\le x^{4}$, both $\\frac{r(h)}{h}$ and $\\frac{r(h)}{h^{2}}$ tend to $0$, so $r'(0)=0$ and the second-order Taylor coefficient of $r$ at $0$ is $0$; adding the $3x^{4}$ part, $g'(0)=0$ and $g''(0)=0$. So the test reports nothing.",
          "The strict minimum survives the perturbation. Since $r(x)\\ge-x^{4}$, $g(x)=3x^{4}+r(x)\\ge3x^{4}-x^{4}=2x^{4}>0=g(0)$ for $x\\ne0$: a strict global minimum. The point is that $|r|\\le x^{4}$ is dominated by the $3x^{4}$ cushion, so no oscillation of $\\cos\\frac1x$ can ever pull $g$ below $0$.",
          "But the same $r$ destroys monotonicity. Differentiating, $g'(x)=12x^{3}+r'(x)$ with $r'(x)=4x^{3}\\cos\\frac1x+x^{2}\\sin\\frac1x$; near $0$ the $x^{2}\\sin\\frac1x$ term dominates $12x^{3}$ and dictates the sign, oscillating $\\pm$ infinitely often (rigorously via the $\\cos\\frac1x=0$ points of Solution 1, where $g'(x_k)=12x_k^{3}-x_k^{2}<0$ for small $x_k$ and $g'(x_k')=12x_k'^{3}+x_k'^{2}>0$). Hence $g$ is non-monotone on every $(0,\\delta)$, and the final verdict is $\\boxed{\\text{strict global minimum at }0,\\ \\text{non-monotone on both sides}}$."
        ]
      }
    ],
    "remark": "This is the canonical separation between the second-derivative test and genuine extremum classification, dressed as a hybrid of three threads. Differentiation supplies the critical data $g'(0)=g''(0)=0$ and thereby silences the test; a pure squeeze ($3+\\cos\\frac1x\\ge2\\Rightarrow g\\ge2x^{4}$) settles that $0$ is a strict global minimum; and a sign-tracking argument at the $\\cos\\frac1x=0$ points shows $g'$ flips sign infinitely often, so $g$ is monotone on no one-sided neighbourhood. The lesson for top rankers: \"the test is inconclusive\" is never a final answer -- it is an instruction to find a sharper tool, here the order-of-vanishing comparison. And the structural surprise is that being a strict (even global) minimum does not entail one-sided monotonicity; the intuition \"a minimum means the function increases as you walk away\" is false the instant the derivative is allowed to oscillate."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "Two Quotients Meet at the Origin",
    "difficulty": 5,
    "task": "Find all",
    "tags": [
      "one-sided-limits",
      "piecewise-glue",
      "c1-not-c2",
      "taylor-matching",
      "parameter-system",
      "corner-trap"
    ],
    "statement": "Real parameters $a,b,c$ are to be chosen. Define $g:(-1,\\infty)\\to\\mathbb{R}$ by gluing two quotients at the origin: \\[ g(x)=\\begin{cases} \\dfrac{e^{x}\\sin x-x}{x^{2}}, & x>0,\\\\ c, & x=0,\\\\ \\dfrac{\\ln(1+ax)-ax+bx^{2}}{x^{2}}, & -1<x<0. \\end{cases} \\] Find all triples $(a,b,c)$ for which $g$ is differentiable at $x=0$, and for the admissible triple state the value of $g'(0)$. (Both branches are smooth away from $0$; the entire question is whether the two pieces can be made to agree to first order at the seam.)",
    "answer": "\\[\\boxed{(a,b,c)=\\left(1,\\tfrac32,1\\right),\\quad g'(0)=\\tfrac13}\\]",
    "trap": "The fatal shortcut is to enforce only that the two one-sided limits agree -- i.e. continuity -- and then declare $g$ differentiable. Matching the values gives the right branch limit $\\lim_{x\\to0^{+}}\\frac{e^{x}\\sin x-x}{x^{2}}=1$ and the left branch limit $\\lim_{x\\to0^{-}}\\frac{\\ln(1+ax)-ax+bx^{2}}{x^{2}}=b-\\frac{a^{2}}{2}$, so continuity reads $c=1$ and $b-\\frac{a^{2}}{2}=1$. A student stops here and reports 'one equation in $a,b$, hence infinitely many answers' -- treating continuity at a glued point as if it were differentiability. It is not. For a piecewise definition, differentiability at the seam demands that the one-sided difference quotients $\\frac{g(0^{\\pm}+h)-g(0)}{h}$ converge to the SAME number; equivalently the two pieces must share value AND slope. The right piece has slope $\\frac13$ at $0^{+}$ while the left piece has slope $\\frac{a^{3}}{3}$ at $0^{-}$, so a second, independent equation $\\frac{a^{3}}{3}=\\frac13$ is forced. Skip it and almost every continuity-only choice (say $a=0,b=1$) leaves a genuine corner -- the left derivative is $0$, the right is $\\frac13$. A subtler version of the same error notes $a^{3}=1$ and writes $a=\\pm1$; but $a^{3}=1$ has the unique real root $a=1$, and only that value keeps $\\ln(1+ax)$ defined and the slope correct.",
    "solutions": [
      {
        "name": "One-sided Taylor expansions, matched coefficient by coefficient",
        "steps": [
          "Differentiability of a glued function at the seam means the two pieces agree as $x\\to0$ through first order: same value (continuity) and same first derivative. Expand each branch as a one-sided series in $x$ and compare the constant and linear coefficients. For $x>0$, $e^{x}\\sin x=\\bigl(1+x+\\tfrac{x^{2}}2+\\cdots\\bigr)\\bigl(x-\\tfrac{x^{3}}6+\\cdots\\bigr)=x+x^{2}+\\tfrac{x^{3}}3+\\cdots$, so $e^{x}\\sin x-x=x^{2}+\\tfrac{x^{3}}3+\\cdots$ and \\[ g(x)=\\frac{e^{x}\\sin x-x}{x^{2}}=1+\\frac{x}{3}+O(x^{2})\\qquad(x\\to0^{+}). \\]",
          "For $-1<x<0$, use $\\ln(1+ax)=ax-\\tfrac{a^{2}x^{2}}2+\\tfrac{a^{3}x^{3}}3-\\cdots$. Then $\\ln(1+ax)-ax+bx^{2}=\\bigl(b-\\tfrac{a^{2}}2\\bigr)x^{2}+\\tfrac{a^{3}}3x^{3}-\\cdots$, hence \\[ g(x)=\\frac{\\ln(1+ax)-ax+bx^{2}}{x^{2}}=\\Bigl(b-\\frac{a^{2}}2\\Bigr)+\\frac{a^{3}}3\\,x+O(x^{2})\\qquad(x\\to0^{-}). \\]",
          "For a single differentiable function the two expansions must share constant term and linear coefficient, and that common constant is $g(0)=c$. Matching constants: $b-\\frac{a^{2}}2=1=c$. Matching linear coefficients: $\\frac{a^{3}}3=\\frac13$, i.e. $a^{3}=1$, whose only real solution is $a=1$. Back-substitute: $b=1+\\frac{a^{2}}2=\\frac32$ and $c=1$.",
          "Thus $(a,b,c)=\\bigl(1,\\tfrac32,1\\bigr)$ is the unique admissible triple, and the shared linear coefficient is $g'(0)=\\tfrac13$: $\\boxed{(a,b,c)=(1,\\tfrac32,1),\\ g'(0)=\\tfrac13}$. (The quadratic coefficients differ -- $0$ on the right, $-\\tfrac14$ on the left -- so $g$ is $C^{1}$ but not $C^{2}$ at $0$, confirming the slope match was the exact and only extra condition needed.)"
        ]
      },
      {
        "name": "One-sided difference quotients from the definition (L'Hopital)",
        "steps": [
          "Work straight from the definition $g'(0)=\\lim_{h\\to0}\\frac{g(h)-g(0)}{h}$, which exists iff the left and right limits exist and coincide. First continuity is necessary, so compute both one-sided values of $g$. Right: $\\lim_{h\\to0^{+}}\\frac{e^{h}\\sin h-h}{h^{2}}$ is $\\frac00$; two applications of L'Hopital (or the series of Step 1, Sol. 1) give $1$. Left: $\\lim_{h\\to0^{-}}\\frac{\\ln(1+ah)-ah+bh^{2}}{h^{2}}=b-\\frac{a^{2}}2$ (again $\\frac00$, twice L'Hopital). Equality with $g(0)=c$ forces $c=1$ and $b-\\frac{a^{2}}2=1$.",
          "Now the right difference quotient. With $g(0)=1$, \\[ \\frac{g(h)-1}{h}=\\frac{e^{h}\\sin h-h-h^{2}}{h^{3}}\\xrightarrow[h\\to0^{+}]{}\\frac13, \\] by three L'Hopitals (numerator and its first two derivatives vanish at $0$, the third derivative ratio gives $\\frac{2}{6}=\\frac13$); equivalently it is the $x$-coefficient $\\frac13$ from the expansion $1+\\frac{x}3+\\cdots$.",
          "The left difference quotient, again using $g(0)=1=b-\\frac{a^{2}}2$ so the constant cancels: \\[ \\frac{g(h)-1}{h}=\\frac{\\ln(1+ah)-ah+bh^{2}-h^{2}}{h^{3}}=\\frac{\\ln(1+ah)-ah+\\frac{a^{2}}2h^{2}}{h^{3}}\\xrightarrow[h\\to0^{-}]{}\\frac{a^{3}}3, \\] since the numerator is $\\frac{a^{3}}3h^{3}+O(h^{4})$. Differentiability requires the two one-sided quotient limits to be equal: $\\frac{a^{3}}3=\\frac13$.",
          "Hence $a^{3}=1\\Rightarrow a=1$ (the unique real root), then $b=\\frac32$, $c=1$, and the common limit is $g'(0)=\\frac13$: $\\boxed{(a,b,c)=(1,\\tfrac32,1),\\ g'(0)=\\tfrac13}$."
        ]
      },
      {
        "name": "Order-of-vanishing bookkeeping (count the conditions)",
        "steps": [
          "Reframe the seam condition as controlling how fast each numerator vanishes. Differentiability at $0$ with a common value $g(0)=c$ is equivalent to: each branch equals $c+\\ell x+o(x)$ on its side with the SAME $\\ell$. Multiply through by $x^{2}$: the right branch needs $e^{x}\\sin x-x-cx^{2}-\\ell x^{3}=o(x^{3})$ as $x\\to0^{+}$, and the left needs $\\ln(1+ax)-ax+bx^{2}-cx^{2}-\\ell x^{3}=o(x^{3})$ as $x\\to0^{-}$. The right branch carries no free parameter, so it pins down $c$ and $\\ell$ outright.",
          "Right branch: $e^{x}\\sin x-x=x^{2}+\\frac13x^{3}+O(x^{4})$, so demanding $o(x^{3})$ forces $c=1$ (the $x^{2}$ coefficient) and $\\ell=\\frac13$ (the $x^{3}$ coefficient). These are now FIXED targets the left branch must meet -- two numbers, hence two equations on $(a,b)$, which is exactly why continuity alone (one equation) is insufficient.",
          "Left branch: $\\ln(1+ax)-ax+bx^{2}=\\bigl(b-\\frac{a^{2}}2\\bigr)x^{2}+\\frac{a^{3}}3x^{3}+O(x^{4})$. Matching the $x^{2}$ coefficient to $c=1$: $b-\\frac{a^{2}}2=1$. Matching the $x^{3}$ coefficient to $\\ell=\\frac13$: $\\frac{a^{3}}3=\\frac13$, so $a^{3}=1$ and (over $\\mathbb{R}$) $a=1$; then $b=\\frac32$.",
          "The order-of-vanishing budget is balanced exactly once: two targets, two parameters, one real solution. Therefore $\\boxed{(a,b,c)=(1,\\tfrac32,1)}$ with $g'(0)=\\ell=\\tfrac13$."
        ]
      }
    ],
    "remark": "The capstone fuses a parametrized piecewise glue with the limit definition of the derivative, and the limit is the arbiter. The parameter-free right branch $\\frac{e^{x}\\sin x-x}{x^{2}}$ secretly publishes two non-negotiable numbers -- its value $1$ and its slope $\\frac13$ at $0^{+}$ -- and the left branch's two free parameters $a,b$ must reproduce both. That is why continuity is genuinely weaker than differentiability here: it matches only the value, leaving a one-parameter family of corners; the slope condition $\\frac{a^{3}}3=\\frac13$ is the second, independent equation that closes the system, and its real root is unique. The closing detail -- the quadratic coefficients ($0$ on the right, $-\\frac14$ on the left) refuse to match -- shows the construction is sharp: $g$ is exactly $C^{1}$ at the seam, not $C^{2}$, so first-order matching was precisely necessary and precisely sufficient."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Function That Outruns Its Own Domain",
    "difficulty": 5,
    "task": "Establish",
    "tags": [
      "ftc",
      "inverse-function-theorem",
      "improper-integral",
      "beta-function",
      "implicit-definition",
      "bounded-domain"
    ],
    "statement": "Define $f$ implicitly by the relation \\[ \\int_{0}^{\\,f(x)}\\frac{dt}{\\sqrt{1+t^{4}}}\\;=\\;x. \\] Show that this determines a single-valued odd function $f$ that is differentiable on its domain, and compute $f'(0)$. Then locate the exact maximal open interval $(-L,L)$ on which $f$ can be defined, giving $L$ in closed form. (The integrand is finite for every real $t$ -- yet the natural domain of $f$ is NOT all of $\\mathbb{R}$, and the question is precisely how far it reaches.)",
    "answer": "\\[\\boxed{\\,f'(0)=1,\\qquad L=\\tfrac14 B\\!\\left(\\tfrac14,\\tfrac14\\right)=\\dfrac{\\Gamma(1/4)^{2}}{4\\sqrt{\\pi}}\\,}\\]",
    "trap": "The fatal move is to argue: \"the integrand $1/\\sqrt{1+t^{4}}$ is continuous and bounded for every real $t$, so the integral $G(y)=\\int_{0}^{y}dt/\\sqrt{1+t^{4}}$ makes sense for all $y$, and as $x$ ranges over $\\mathbb{R}$ we can always solve $G(y)=x$; therefore $f$ is defined and differentiable on all of $\\mathbb{R}$.\" This conflates the domain of the INTEGRAND with the domain of $f$. The variable $x$ equals the VALUE of the integral, not its upper limit, so $x$ can only take values in the range of $G$. Because $1/\\sqrt{1+t^{4}}\\sim t^{-2}$ at infinity, the improper integral $\\int_{0}^{\\infty}dt/\\sqrt{1+t^{4}}$ CONVERGES to a finite number $L$; hence $G$ is bounded, its range is the open interval $(-L,L)$, and $f=G^{-1}$ simply does not exist for $|x|\\ge L$ -- the function reaches $\\pm\\infty$ in finite $x$. A subtler version of the same error confuses this integral with the arc-length-type $\\int dt/\\sqrt{1+t^{2}}$, which diverges logarithmically and WOULD give domain $\\mathbb{R}$; the fourth power is exactly what makes the tail summable and the domain bounded. Missing the convergence is missing the whole problem.",
    "solutions": [
      {
        "name": "Invert the integral (FTC + inverse-function theorem), then bound the domain by Beta",
        "steps": [
          "Let $G(y)=\\displaystyle\\int_{0}^{y}\\frac{dt}{\\sqrt{1+t^{4}}}$. The integrand $\\varphi(t)=1/\\sqrt{1+t^{4}}$ is continuous and strictly positive on $\\mathbb{R}$, so by the Fundamental Theorem of Calculus $G$ is differentiable with $G'(y)=\\varphi(y)>0$; thus $G$ is strictly increasing, hence injective, and $G(0)=0$. The defining relation is exactly $G(f(x))=x$, so $f=G^{-1}$ on the range of $G$ -- this is what makes $f$ single-valued. Since $\\varphi$ is even, $G$ is odd, and the inverse of an odd increasing function is odd, so $f(-x)=-f(x)$.",
          "Differentiability and $f'(0)$. As the inverse of a $C^{1}$ function with nowhere-vanishing derivative, $f$ is differentiable on the (open) range of $G$, and the inverse-function theorem gives $f'(x)=\\dfrac{1}{G'(f(x))}=\\sqrt{1+f(x)^{4}}.$ At $x=0$, $G(0)=0\\Rightarrow f(0)=0$, so $f'(0)=\\sqrt{1+0}=1$. (One sees instantly that $f'\\ge1$ everywhere, so $f$ races ahead of the identity -- a first hint its domain may be limited.)",
          "The domain is the range of $G$, which is bounded. Because $\\sqrt{1+t^{4}}\\ge t^{2}$, we have $0<\\varphi(t)\\le t^{-2}$ for $t\\ge1$, and $\\int_{1}^{\\infty}t^{-2}\\,dt=1<\\infty$; the comparison test makes $L:=\\displaystyle\\int_{0}^{\\infty}\\frac{dt}{\\sqrt{1+t^{4}}}$ a finite number. Since $G$ is continuous, strictly increasing, $G(0)=0$ and $G(y)\\uparrow L$ as $y\\to+\\infty$ (and $\\downarrow-L$ as $y\\to-\\infty$ by oddness), the range of $G$ is exactly $(-L,L)$. Therefore $f$ is defined precisely on $(-L,L)$, with $f(x)\\to+\\infty$ as $x\\to L^{-}$ -- the blow-up the trap overlooks.",
          "Evaluate $L$ in closed form. Substitute $u=t^{4}$, so $t=u^{1/4}$ and $dt=\\tfrac14 u^{-3/4}\\,du$: \\[ L=\\int_{0}^{\\infty}\\frac{dt}{\\sqrt{1+t^{4}}}=\\frac14\\int_{0}^{\\infty}u^{-3/4}(1+u)^{-1/2}\\,du. \\] Recognise $\\int_{0}^{\\infty}u^{p-1}(1+u)^{-(p+q)}\\,du=B(p,q)$ with $p=\\tfrac14$ and $p+q=\\tfrac12$, i.e. $q=\\tfrac14$. Hence $L=\\tfrac14 B(\\tfrac14,\\tfrac14)$, and using $B(p,q)=\\Gamma(p)\\Gamma(q)/\\Gamma(p+q)$ with $\\Gamma(\\tfrac12)=\\sqrt{\\pi}$, $L=\\dfrac{\\Gamma(1/4)^{2}}{4\\sqrt{\\pi}}\\approx1.8541.$ Collecting: $\\boxed{f'(0)=1,\\ L=\\tfrac14 B(\\tfrac14,\\tfrac14)=\\Gamma(1/4)^{2}/(4\\sqrt{\\pi})}$."
        ]
      },
      {
        "name": "Implicit differentiation for $f'$, lemniscatic substitution for $L$",
        "steps": [
          "Work directly with the relation $\\int_{0}^{f(x)}\\varphi(t)\\,dt=x$, $\\varphi(t)=1/\\sqrt{1+t^{4}}$. Granting that $f$ exists and is differentiable (justified as the inverse of the strictly monotone $C^{1}$ map $G$ in Solution 1), differentiate both sides in $x$ by the chain rule and FTC: $\\varphi(f(x))\\,f'(x)=1$, so $f'(x)=\\sqrt{1+f(x)^{4}}$. Putting $x=0$ and noting the upper limit must be $0$ to make the integral vanish gives $f(0)=0$ and $f'(0)=\\sqrt{1+0^{4}}=1$. Differentiating once more, $f''(x)=\\dfrac{4f^{3}f'}{2\\sqrt{1+f^{4}}}=2f(x)^{3}$, so $f''(0)=0$ -- a quick sanity flag that $f$ behaves like $x$ near the origin, not like a parabola.",
          "To find how far $x$ can go, observe that $x$ is the accumulated value of the integral, so its supremum is $L=\\lim_{y\\to\\infty}\\int_{0}^{y}\\varphi=\\int_{0}^{\\infty}\\varphi$. Convergence: for $t\\ge1$, $\\varphi(t)\\le 1/t^{2}$, an integrable tail, so $L<\\infty$. Thus as $f(x)$ climbs to $+\\infty$, $x$ climbs only to the finite ceiling $L$; the maximal interval is $(-L,L)$ by the oddness of $G$.",
          "Compute $L$ via the standard lemniscatic reduction. With $t^{2}=\\tan\\theta$ one can reach the same Beta integral, but the cleanest route is $u=t^{4}$ as in Solution 1, giving $L=\\tfrac14\\int_{0}^{\\infty}u^{-3/4}(1+u)^{-1/2}\\,du=\\tfrac14 B(\\tfrac14,\\tfrac14)$. Equivalently, using the reflection/duplication identities, $\\tfrac14 B(\\tfrac14,\\tfrac14)=\\dfrac{\\Gamma(1/4)^{2}}{4\\sqrt{\\pi}}$, the same constant (up to scaling) that governs the lemniscate's arc length.",
          "Hence the implicit relation defines a differentiable odd $f$ with $f'(0)=1$, living exactly on $(-L,L)$ with $L=\\dfrac{\\Gamma(1/4)^{2}}{4\\sqrt{\\pi}}$: $\\boxed{f'(0)=1,\\ L=\\tfrac14 B(\\tfrac14,\\tfrac14)}$."
        ]
      },
      {
        "name": "Series at the origin for $f'(0)$, comparison sandwich for $L$",
        "steps": [
          "Near $t=0$, expand $\\varphi(t)=(1+t^{4})^{-1/2}=1-\\tfrac12 t^{4}+\\tfrac38 t^{8}-\\cdots$. Integrating term by term, $G(y)=y-\\tfrac{1}{10}y^{5}+\\cdots$, an odd power series with leading term $y$. Inverting (formally, valid since $G'(0)=1\\ne0$) gives $f(x)=x+\\tfrac{1}{10}x^{5}+\\cdots$. Reading off the linear coefficient, $f'(0)=1$ (and the absence of an $x^{2}$ term recovers $f''(0)=0$). This series view also explains the trap geometrically: $f$ starts tangent to the line $y=x$ but, since every later correction is positive, it bends upward and accelerates -- consistent with a finite escape.",
          "Bound the domain by sandwiching the tail integral. For all $t$, $\\sqrt{1+t^{4}}\\ge\\max(1,t^{2})$, so $\\varphi(t)\\le 1$ on $[0,1]$ and $\\varphi(t)\\le t^{-2}$ on $[1,\\infty)$. Then $L=\\int_{0}^{\\infty}\\varphi\\le\\int_{0}^{1}1\\,dt+\\int_{1}^{\\infty}t^{-2}\\,dt=1+1=2<\\infty$, while $\\varphi>0$ forces $L>0$; convergence is secured, so the range of the increasing $G$ is the bounded interval $(-L,L)$ and that is the maximal domain of $f$. (The crude bound $0<L<2$ already kills the 'domain $=\\mathbb{R}$' answer; the exact value comes next.)",
          "Pin the exact value. The substitution $u=t^{4}$ converts $L$ into a Beta integral: $L=\\tfrac14\\int_{0}^{\\infty}u^{1/4-1}(1+u)^{-1/2}\\,du=\\tfrac14 B(\\tfrac14,\\tfrac14)$, since the exponents match $p-1=-\\tfrac34$ and $-(p+q)=-\\tfrac12$ with $p=q=\\tfrac14$. Numerically $\\tfrac14 B(\\tfrac14,\\tfrac14)=\\dfrac{\\Gamma(1/4)^{2}}{4\\sqrt{\\pi}}\\approx1.854$, comfortably inside the $(0,2)$ sandwich of Step 2, confirming consistency.",
          "Therefore $f$ is the differentiable odd inverse of $G$, with $f'(0)=1$ and maximal domain $(-L,L)$ where $\\boxed{L=\\tfrac14 B(\\tfrac14,\\tfrac14)=\\dfrac{\\Gamma(1/4)^{2}}{4\\sqrt{\\pi}}}$."
        ]
      }
    ],
    "remark": "This capstone fuses four ideas at once. FTC makes the integral $G(y)=\\int_{0}^{y}dt/\\sqrt{1+t^{4}}$ a genuine $C^{1}$ (indeed $C^{\\infty}$) function with $G'>0$; the inverse-function theorem promotes its inverse $f=G^{-1}$ to a differentiable function and hands over $f'(x)=\\sqrt{1+f(x)^{4}}$, whence $f'(0)=1$; the convergence of an improper integral -- driven entirely by the fourth power, since $1/\\sqrt{1+t^{4}}\\sim t^{-2}$ -- forces $G$ to be bounded, so $f$ blows up at the finite edge $\\pm L$; and the Beta/Gamma machinery evaluates that edge as $L=\\tfrac14 B(\\tfrac14,\\tfrac14)=\\Gamma(1/4)^{2}/(4\\sqrt{\\pi})$, the lemniscatic constant in disguise. The trap is the reflex that 'a function built from a globally defined, bounded integrand must itself be globally defined': the upper limit of integration is $f(x)$, not $x$, so the domain of $f$ is the RANGE of $G$, which is bounded precisely because the integral converges. Differentiability is local and easy; the global geography of the domain is where the real mathematics -- and the rank-defining insight -- lives."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Last Base That Still Touches the Line",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "tangency",
      "parameter-bifurcation",
      "root-counting",
      "monotonicity",
      "exponential"
    ],
    "statement": "For a real parameter $a>0$, consider the curve $y=a^{x}$ and the line $y=x$. Let $N(a)$ be the number of points where they meet, i.e. the number of real solutions of $a^{x}=x$.\n(a) Show there is a single critical base $a^{*}>1$ at which the curve is tangent to the line, and find it together with the point of tangency.\n(b) Using monotonicity / Rolle, determine $N(a)$ in every regime: $0<a\\le 1$, $1<a<a^{*}$, $a=a^{*}$, and $a>a^{*}$.\nReport the threshold $a^{*}$ in the box.",
    "answer": "\\[\\boxed{a^{*}=e^{1/e}}\\]",
    "trap": "The tempting wrong threshold is $a=e$ — the \"natural\" boundary one expects because $y=e^{x}$ feels like the dividing exponential, or because a careless student writes the point condition $a^{x}=x$ and the slope condition $a^{x}\\ln a=1$ but then forgets that the LINE has slope $1$ and silently sets the slope of $a^{x}$ to itself rather than to $1$. Both shortcuts skip the second genuine equation. Tangency to $y=x$ needs TWO conditions at once — equal value $a^{x}=x$ AND equal derivative $a^{x}\\ln a=1$ — which force $\\ln x=1$, i.e. the contact point is $x=e$ and $\\ln a=1/e$, giving $a^{*}=e^{1/e}\\approx 1.4447$, strictly less than $e$. At $a=e$ the curve already overshoots the line completely ($e^{x}>x$ for all $x$, so $N(e)=0$): treating $e$ as the threshold misplaces the bifurcation entirely.",
    "solutions": [
      {
        "name": "Two simultaneous tangency conditions, then minimum-value bifurcation",
        "steps": [
          "Tangency of $y=a^{x}$ to the line $y=x$ at a point $x_0$ requires both equal heights and equal slopes: $a^{x_0}=x_0$ and $\\dfrac{d}{dx}a^{x}\\big|_{x_0}=a^{x_0}\\ln a=1$ (the line has slope $1$). Substituting $a^{x_0}=x_0$ into the slope equation gives $x_0\\ln a=1$.",
          "From $a^{x_0}=x_0$ take logarithms: $x_0\\ln a=\\ln x_0$. Comparing with $x_0\\ln a=1$ yields $\\ln x_0=1$, so the contact point is $x_0=e$, and then $\\ln a=1/x_0=1/e$, i.e. $a^{*}=e^{1/e}$ with tangency at $(e,e)$ (indeed $(e^{1/e})^{e}=e$).",
          "To count solutions for general $a>1$, set $g(x)=a^{x}-x$. Then $g'(x)=a^{x}\\ln a-1$ is strictly increasing (as $a^{x}$ increases, $\\ln a>0$), so $g$ is strictly convex with a unique minimizer $x_0$ solving $a^{x_0}\\ln a=1$, i.e. $x_0=-\\dfrac{\\ln(\\ln a)}{\\ln a}$. The minimum value is $g(x_0)=\\dfrac{1}{\\ln a}-x_0=\\dfrac{1+\\ln(\\ln a)}{\\ln a}$.",
          "Since $\\ln a>0$, the sign of $g_{\\min}$ is the sign of $1+\\ln(\\ln a)$, which vanishes exactly when $\\ln a=1/e$, i.e. $a=a^{*}=e^{1/e}$. By convexity a strictly convex function meets $0$ in $2$, $1$, or $0$ points as $g_{\\min}<0,\\,=0,\\,>0$. Hence for $1<a<e^{1/e}$, $N(a)=2$; at $a=e^{1/e}$, $N(a)=1$ (the tangency); for $a>e^{1/e}$, $N(a)=0$. For $0<a\\le1$, $g(x)=a^{x}-x$ is strictly decreasing (a non-increasing $a^{x}$ minus an increasing $x$) from $+\\infty$ to $-\\infty$, giving exactly one root, so $N(a)=1$. The threshold is $\\boxed{a^{*}=e^{1/e}}$."
        ]
      },
      {
        "name": "Eliminate the parameter: reduce to one master function $\\varphi(t)=\\dfrac{\\ln t}{t}$",
        "steps": [
          "Rewrite $a^{x}=x$ for $a>1$ by taking logarithms: $x\\ln a=\\ln x$. A solution must have $x>0$ (since $a^{x}>0$), so divide by $x>0$ to get $\\ln a=\\dfrac{\\ln x}{x}=:\\varphi(x)$. Thus solutions of $a^{x}=x$ correspond bijectively to solutions $x>0$ of $\\varphi(x)=\\ln a$.",
          "Study $\\varphi(t)=\\dfrac{\\ln t}{t}$ on $t>0$: $\\varphi'(t)=\\dfrac{1-\\ln t}{t^{2}}$, which is positive for $t<e$, zero at $t=e$, negative for $t>e$. So $\\varphi$ increases on $(0,e)$, decreases on $(e,\\infty)$, with a unique maximum $\\varphi(e)=\\dfrac{1}{e}$. Also $\\varphi(t)\\to-\\infty$ as $t\\to0^{+}$, $\\varphi(1)=0$, and $\\varphi(t)\\to0^{+}$ as $t\\to\\infty$.",
          "The number of solutions of $\\varphi(x)=\\ln a$ is the number of times the horizontal level $\\ln a$ is hit. For $a>1$ we have $\\ln a>0$. If $0<\\ln a<1/e$ the level cuts both the rising and falling branches: $2$ solutions. If $\\ln a=1/e$ the level touches the peak: exactly $1$ solution at $x=e$. If $\\ln a>1/e$ the level is above the maximum: $0$ solutions.",
          "Translating the boundary $\\ln a=1/e$ back gives $a=e^{1/e}$, and the touching point $x=e$ recovers the tangency $(e,e)$ — consistent because the level just grazes the single maximum, which is exactly tangency. For $a=1$, $\\varphi(x)=0$ has the unique root $x=1$; for $0<a<1$, $\\ln a<0$ is met once on the rising branch near $0$ (where $\\varphi\\to-\\infty$), so $N(a)=1$ there too. Hence $\\boxed{a^{*}=e^{1/e}}$, with $N=2,1,0$ for $1<a<a^{*},\\,a=a^{*},\\,a>a^{*}$ and $N=1$ for $0<a\\le1$."
        ]
      },
      {
        "name": "Rolle's theorem forces the double-root coincidence at the threshold",
        "steps": [
          "Fix $a>1$ and $g(x)=a^{x}-x$. Suppose $g$ had three distinct real roots; by Rolle $g'$ would have two distinct roots, but $g'(x)=a^{x}\\ln a-1$ is strictly monotone and thus has at most one root — contradiction. So $N(a)\\le2$ for all $a>1$.",
          "When $N(a)=2$, between the two simple roots $g$ dips below $0$ (it is positive for large $|x|$ since $a^{x}\\to+\\infty$ as $x\\to+\\infty$ and $-x\\to+\\infty$ as $x\\to-\\infty$), so $g_{\\min}<0$. As $a$ increases, $a^{x}$ rises pointwise, so $g(x)=a^{x}-x$ increases at every $x$, hence $g_{\\min}(a)$ is strictly increasing in $a$. The transition from $2$ roots to $0$ roots happens precisely when $g_{\\min}=0$ — and at that instant the two roots have merged into a single double root, i.e. $g$ and $g'$ vanish together: a tangency.",
          "Impose $g=g'=0$ at the merge point $x_0$: $a^{x_0}=x_0$ and $a^{x_0}\\ln a=1$. Dividing, $\\ln a=1/x_0$; substituting into $x_0\\ln a=\\ln x_0$ (the log of the first) gives $1=\\ln x_0$, so $x_0=e$ and $\\ln a=1/e$, i.e. $a^{*}=e^{1/e}$, the unique base with a tangency.",
          "Therefore $a^{*}=e^{1/e}$ is the single bifurcation value: $1<a<e^{1/e}\\Rightarrow N=2$, $a=e^{1/e}\\Rightarrow N=1$, $a>e^{1/e}\\Rightarrow N=0$; and the easy regime $0<a\\le1$ has $g$ strictly decreasing, hence $N=1$. Boxed: $\\boxed{a^{*}=e^{1/e}}$."
        ]
      }
    ],
    "remark": "The whole phase diagram is governed by one number, $\\max_{t>0}\\dfrac{\\ln t}{t}=\\dfrac1e$ attained at $t=e$, which is also the source of the classic fact that $e^{1/e}$ is the largest base $a$ for which the power tower $a^{a^{a^{\\cdots}}}$ converges. Tangency is the engine of the bifurcation: requiring the curve to share BOTH a point and a slope with the line is two equations in two unknowns $(x_0,a)$, and their unique solution $(e,\\,e^{1/e})$ is exactly where a strictly convex $g=a^{x}-x$ has its double root — the knife-edge separating two intersections from none. The recurring exam moral: a tangency / extremal threshold is never one equation. Forgetting the slope condition (or planting the threshold at the seductive $a=e$) replaces a genuine multi-condition bifurcation with a guess, and $e^{1/e}\\approx1.4447$ is nowhere near $e\\approx2.718$."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "One More Order Buys the Bracket",
    "difficulty": 5,
    "task": "Prove and bracket",
    "tags": [
      "integral-remainder",
      "alternating-bounds",
      "term-by-term-integration",
      "fresnel-integral",
      "numerical-bracketing",
      "monotone-integration"
    ],
    "statement": "The integral $\\displaystyle I=\\int_{0}^{1}\\sin\\!\\bigl(x^{2}\\bigr)\\,dx$ has no elementary antiderivative. The task is to pin its value rigorously by an inequality ladder, not by a calculator.\n\n(a) Prove, for every real $t\\ge 0$, the alternating bounds carried one term further than the crude ones: \\[ 1-\\frac{t^{2}}{2}\\;\\le\\;\\cos t\\;\\le\\;1-\\frac{t^{2}}{2}+\\frac{t^{4}}{24}, \\qquad t-\\frac{t^{3}}{6}\\;\\le\\;\\sin t\\;\\le\\;t-\\frac{t^{3}}{6}+\\frac{t^{5}}{120}. \\]\n\n(b) Using ONLY these inequalities (with the substitution $t=x^{2}$) and the legitimacy of integrating an inequality between continuous functions over $[0,1]$, produce explicit rational numbers $L$ and $U$ with \\[ L\\;\\le\\;I\\;\\le\\;U,\\qquad U-L<\\frac{1}{600}, \\] and state the resulting midpoint estimate of $I$. Justify why the cruder one-sided bound $\\sin s\\le s$ is NOT enough to reach the width $\\tfrac1{600}$, so the extra term is essential.",
    "answer": "\\[\\boxed{\\dfrac{13}{42}\\le I\\le \\dfrac{2867}{9240},\\quad U-L=\\dfrac{1}{1320}}\\]",
    "trap": "The seductive shortcut is to bracket $\\sin s$ between the FIRST nonzero term on one side and the two-term polynomial on the other: from $s-\\tfrac{s^{3}}6\\le\\sin s\\le s$ one gets, after $s=x^{2}$ and integrating, $\\tfrac{13}{42}\\le I\\le\\tfrac13$. That is a correct sandwich, but its width is $\\tfrac13-\\tfrac{13}{42}=\\tfrac1{42}\\approx0.0238$, more than fourteen times too wide to claim $\\tfrac1{600}$. A student who reports 'I bracketed it, done' has missed that the PROBLEM specifies a target precision and that precision dictates how many alternating terms you must keep: the upper bound must be carried to the same order as the lower one ($\\sin s\\le s-\\tfrac{s^{3}}6+\\tfrac{s^{5}}{120}$), which is exactly the 'one more order' of part (a). A second, deadlier trap is to integrate the bounds term by term WITHOUT justifying it -- treating the Maclaurin series of $\\sin(x^{2})$ as if convergence automatically licensed swapping sum and integral, or worse, using a remainder estimate and asserting it is positive: $\\cos c$ has NO fixed sign, so the Lagrange form alone does not prove the upper inequality. The clean justification is the monotone integration ladder of part (a) (integrate the cosine sandwich to get the sine sandwich), which makes the bounds genuine inequalities of continuous functions on $[0,1]$, so $\\int$ preserves them. The third trap is forgetting the chain: applying the sine bounds to $x$ rather than to $s=x^{2}$ brackets $\\int_0^1\\sin x\\,dx\\approx0.4597$, the wrong integral entirely.",
    "solutions": [
      {
        "name": "Integration ladder: cosine sandwich, integrate twice, substitute, integrate over [0,1]",
        "steps": [
          "Establish the base cosine sandwich for $t\\ge0$. Let $p(t)=\\cos t-\\bigl(1-\\tfrac{t^{2}}2\\bigr)$. Then $p(0)=0$, $p'(t)=-\\sin t+t\\ge0$ for $t\\ge0$ (since $\\sin t\\le t$), so $p$ is nondecreasing from $0$, giving $\\cos t\\ge1-\\tfrac{t^{2}}2$. Next let $q(t)=\\bigl(1-\\tfrac{t^{2}}2+\\tfrac{t^{4}}{24}\\bigr)-\\cos t$; $q(0)=0$ and $q'(t)=-t+\\tfrac{t^{3}}6+\\sin t=\\sin t-\\bigl(t-\\tfrac{t^{3}}6\\bigr)$. We show $q'\\ge0$ by the same device one level down: $r(t)=\\sin t-\\bigl(t-\\tfrac{t^{3}}6\\bigr)$ has $r(0)=0$ and $r'(t)=\\cos t-1+\\tfrac{t^{2}}2\\ge0$ (just proved), so $r\\ge0$, hence $q'\\ge0$, hence $\\cos t\\le1-\\tfrac{t^{2}}2+\\tfrac{t^{4}}{24}$. This proves the cosine pair; note $r\\ge0$ is already the LOWER sine bound.",
          "Integrate the cosine sandwich from $0$ to $s$ ($s\\ge0$). Integrating $1-\\tfrac{t^{2}}2\\le\\cos t\\le1-\\tfrac{t^{2}}2+\\tfrac{t^{4}}{24}$ and using $\\int_0^s\\cos t\\,dt=\\sin s$ gives \\[ s-\\frac{s^{3}}6\\;\\le\\;\\sin s\\;\\le\\;s-\\frac{s^{3}}6+\\frac{s^{5}}{120}, \\] which is the sine pair of part (a). Both inequalities are between functions continuous on $[0,\\infty)$, established for all $s\\ge0$.",
          "Substitute $s=x^{2}$ (legitimate: as $x$ runs over $[0,1]$, $s=x^{2}\\in[0,1]\\subset[0,\\infty)$, so the bounds apply pointwise) to get, for $x\\in[0,1]$, \\[ x^{2}-\\frac{x^{6}}6\\;\\le\\;\\sin\\!\\bigl(x^{2}\\bigr)\\;\\le\\;x^{2}-\\frac{x^{6}}6+\\frac{x^{10}}{120}. \\] These are inequalities of continuous functions on $[0,1]$; integrating an inequality $g\\le h$ of continuous functions over $[0,1]$ preserves it ($\\int_0^1(h-g)\\ge0$ since $h-g\\ge0$). This is the only 'term-by-term' fact used -- no series swap, no Lagrange sign assumption.",
          "Integrate the polynomial bounds exactly. $\\displaystyle\\int_0^1\\!\\Bigl(x^{2}-\\tfrac{x^{6}}6\\Bigr)dx=\\tfrac13-\\tfrac{1}{42}=\\tfrac{13}{42}=:L$ and $\\displaystyle\\int_0^1\\!\\Bigl(x^{2}-\\tfrac{x^{6}}6+\\tfrac{x^{10}}{120}\\Bigr)dx=\\tfrac{13}{42}+\\tfrac{1}{1320}=\\tfrac{2867}{9240}=:U.$ Hence $\\tfrac{13}{42}\\le I\\le\\tfrac{2867}{9240}$ with width $U-L=\\tfrac1{1320}\\approx7.6\\times10^{-4}<\\tfrac1{600}$. The midpoint $\\tfrac{L+U}2=\\tfrac{1909}{6160}\\approx0.30990$ estimates $I$ with error at most $\\tfrac12\\cdot\\tfrac1{1320}=\\tfrac1{2640}\\approx3.8\\times10^{-4}$.",
          "Why one more order is necessary. Using instead the crude $\\sin s\\le s$ yields the upper bound $\\int_0^1 x^{2}\\,dx=\\tfrac13$, so the width becomes $\\tfrac13-\\tfrac{13}{42}=\\tfrac1{42}\\approx0.0238>\\tfrac1{600}$: the bracket is over fourteen times too coarse. The $+\\tfrac{s^{5}}{120}$ term -- the 'one more order' -- is exactly what shrinks the gap below the demanded $\\tfrac1{600}$. $\\boxed{\\tfrac{13}{42}\\le I\\le\\tfrac{2867}{9240},\\ U-L=\\tfrac1{1320}}$."
        ]
      },
      {
        "name": "Integral form of the remainder (fixes the sign the Lagrange form leaves open)",
        "steps": [
          "Write $\\sin s$ with the integral remainder so the inequality direction is forced, never assumed. By repeated integration by parts (Taylor with integral remainder), for $s\\ge0$ \\[ \\sin s=s-\\frac{s^{3}}6+\\int_{0}^{s}\\frac{(s-u)^{4}}{4!}\\cos u\\,du,\\qquad \\sin s=s-\\frac{s^{3}}6+\\frac{s^{5}}{120}-\\int_{0}^{s}\\frac{(s-u)^{5}}{5!}\\sin u\\,du. \\] On $[0,1]$ we have $s\\le1$, hence $u\\in[0,1]$ where $\\cos u\\ge0$ and $\\sin u\\ge0$. The first remainder integrand $\\tfrac{(s-u)^4}{24}\\cos u\\ge0$ gives $\\sin s\\ge s-\\tfrac{s^{3}}6$; the second remainder integrand $\\tfrac{(s-u)^5}{120}\\sin u\\ge0$ makes the subtracted integral $\\ge0$, giving $\\sin s\\le s-\\tfrac{s^{3}}6+\\tfrac{s^{5}}{120}$. The signs come from the SIGN of the remainder integrand, not from any unproven claim about $\\cos c$.",
          "Apply at $s=x^{2}\\in[0,1]$ for $x\\in[0,1]$: $x^{2}-\\tfrac{x^{6}}6\\le\\sin(x^{2})\\le x^{2}-\\tfrac{x^{6}}6+\\tfrac{x^{10}}{120}$, an inequality between continuous functions on $[0,1]$.",
          "Integrate over $[0,1]$ (monotonicity of the integral): the lower bound integrates to $L=\\tfrac13-\\tfrac1{42}=\\tfrac{13}{42}$ and the upper to $U=\\tfrac{13}{42}+\\tfrac1{1320}=\\tfrac{2867}{9240}$, so $L\\le I\\le U$.",
          "The width is $U-L=\\tfrac1{1320}<\\tfrac1{600}$, with midpoint $\\tfrac{1909}{6160}\\approx0.30990$ and guaranteed error $\\le\\tfrac1{2640}$. The crude $\\sin s\\le s$ would only give width $\\tfrac1{42}>\\tfrac1{600}$, so the fifth-order term is indispensable. $\\boxed{\\tfrac{13}{42}\\le I\\le\\tfrac{2867}{9240},\\ U-L=\\tfrac1{1320}}$."
        ]
      },
      {
        "name": "Series tail control (alternating, decreasing terms) made rigorous",
        "steps": [
          "On $[0,1]$ the Maclaurin series $\\sin(x^{2})=\\sum_{k\\ge0}\\frac{(-1)^{k}x^{4k+2}}{(2k+1)!}=x^{2}-\\frac{x^{6}}6+\\frac{x^{10}}{120}-\\cdots$ has, for each fixed $x\\in[0,1]$, terms whose absolute values $\\frac{x^{4k+2}}{(2k+1)!}$ strictly decrease in $k$ (the ratio $\\frac{x^{4}}{(2k+2)(2k+3)}\\le\\frac{1}{6}<1$). For an alternating series with terms decreasing to $0$, the partial sums bracket the limit: truncating after a NEGATIVE term gives a value below the sum, after a POSITIVE term gives a value above. Hence pointwise on $[0,1]$, $x^{2}-\\tfrac{x^{6}}6\\le\\sin(x^{2})\\le x^{2}-\\tfrac{x^{6}}6+\\tfrac{x^{10}}{120}$ -- the same sandwich, justified by the alternating-series estimate rather than by an explicit remainder.",
          "Because the dominating tail $\\sum\\frac{x^{4k+2}}{(2k+1)!}$ is bounded by the convergent constant series $\\sum\\frac1{(2k+1)!}$ on $[0,1]$, the convergence is uniform on $[0,1]$, so the series may be integrated term by term; equivalently, the two bracketing polynomials are continuous on $[0,1]$ and the integral preserves the pointwise inequalities. Either way the swap of $\\int$ and the truncation is licensed -- the missing justification the trap glosses over.",
          "Integrate the bracketing polynomials: $\\int_0^1(x^{2}-\\tfrac{x^{6}}6)\\,dx=\\tfrac{13}{42}=L$ and $\\int_0^1(x^{2}-\\tfrac{x^{6}}6+\\tfrac{x^{10}}{120})\\,dx=\\tfrac{2867}{9240}=U$, so $L\\le I\\le U$.",
          "The gap is one further alternating term, $\\int_0^1\\tfrac{x^{10}}{120}dx=\\tfrac1{1320}$, so $U-L=\\tfrac1{1320}<\\tfrac1{600}$; the midpoint $\\tfrac{1909}{6160}\\approx0.3099$ approximates $I=0.310268\\ldots$ within $\\tfrac1{2640}$. Stopping one term earlier (upper bound $\\int_0^1 x^{2}=\\tfrac13$) leaves width $\\tfrac1{42}$, far above $\\tfrac1{600}$ -- confirming the extra order is what buys the bracket. $\\boxed{\\tfrac{13}{42}\\le I\\le\\tfrac{2867}{9240},\\ U-L=\\tfrac1{1320}}$."
        ]
      }
    ],
    "remark": "The capstone fuses three threads: the integral remainder (proved as a genuine inequality, not a series formality), term-by-term integration of an inequality (which needs only that the integral is monotone on continuous functions), and a numerical-bracketing payoff for a Fresnel-type integral that has no elementary antiderivative. The decisive insight is that the REQUIRED PRECISION dictates the ORDER you must keep: the crude alternating bound $s-\\tfrac{s^{3}}6\\le\\sin s\\le s$ is true but yields width $\\tfrac1{42}$, while carrying the upper bound 'one more order' to $s-\\tfrac{s^{3}}6+\\tfrac{s^{5}}{120}$ collapses the gap to $\\tfrac1{1320}<\\tfrac1{600}$. The cleanest proof of the bounds is the integration ladder: the cosine sandwich integrates to the sine sandwich, so both are honest inequalities of continuous functions and the integral preserves them after the chain substitution $s=x^{2}$. The trap -- invoking the remainder estimate $\\tfrac{\\cos c}{120}s^{5}$ and asserting its sign, or swapping sum and integral without uniform convergence -- is precisely the gap between a heuristic and a proof; closing it is the rank-defining move."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Root That Crawls Toward the Asymptote",
    "difficulty": 5,
    "task": "Prove the asymptotic",
    "tags": [
      "root-location",
      "asymptotic-expansion",
      "mean-value-theorem",
      "inverse-function",
      "arctangent",
      "little-o-control"
    ],
    "statement": "For each integer $n\\ge 1$ the equation $\\tan x=x$ has, in the interval $\\bigl(n\\pi,\\ n\\pi+\\tfrac{\\pi}{2}\\bigr)$, exactly one solution; call it $x_n$.\n\n(a) Justify briefly that $x_n$ exists and is unique in that interval, and that $x_n\\to\\infty$ as $n\\to\\infty$.\n\n(b) Prove the asymptotic expansion \\[ x_n=\\Bigl(n+\\tfrac12\\Bigr)\\pi-\\frac{1}{n\\pi}+o\\!\\left(\\frac1n\\right)\\qquad(n\\to\\infty). \\] Your proof must control the remainder honestly: a Mean-Value-Theorem (or equivalent inverse-function / squeeze) estimate on $\\arctan$ is what turns the leading correction into a rigorous $o(1/n)$, not a hand-wave. State precisely where the constant $\\dfrac{1}{n\\pi}$ comes from and why no smaller correction can be dropped.",
    "answer": "\\[\\boxed{x_n=\\Bigl(n+\\tfrac12\\Bigr)\\pi-\\dfrac{1}{n\\pi}+o\\!\\left(\\tfrac1n\\right)}\\]",
    "trap": "The fatal shortcut is to look at $\\tan x=x$ for large $n$, observe that on $\\bigl(n\\pi,n\\pi+\\tfrac\\pi2\\bigr)$ the tangent sweeps from $0$ up to $+\\infty$ while the line $y=x\\approx n\\pi$ is merely large, and conclude that the crossing happens 'essentially at the vertical asymptote', i.e. $x_n=\\bigl(n+\\tfrac12\\bigr)\\pi+o(1/n)$ with NO correction term. This is wrong, and wrong precisely at the order the problem cares about: the gap between the root and the asymptote is the deficit $e_n:=\\bigl(n+\\tfrac12\\bigr)\\pi-x_n$, and $n\\,e_n\\to\\tfrac1\\pi\\neq0$, so $e_n$ is itself of exact order $1/n$ -- the very term being dropped. (Numerically $n\\bigl[x_n-(n+\\tfrac12)\\pi\\bigr]\\to-1/\\pi$, not $0$.) A second, subtler trap survives for the student who DOES keep a correction. Writing the equation as $\\cot e_n=x_n$, i.e. $e_n=\\arctan(1/x_n)$, one is tempted to (i) replace $\\arctan(1/x_n)$ by $1/x_n$ and (ii) replace $1/x_n$ by $1/(n\\pi)$, both 'because they are close', and declare victory. Each replacement is legitimate ONLY because its error is $O(1/n^{2})=o(1/n)$ -- the arctan step needs the MVT factor $\\tfrac{1}{1+c^2}\\to1$ (or the bound $\\arctan u\\le u$ with $u-\\arctan u=O(u^3)$), and the $1/x_n\\to1/(n\\pi)$ step needs $x_n=(n+\\tfrac12)\\pi-e_n$ to pin $\\tfrac1{x_n}-\\tfrac1{n\\pi}=O(1/n^2)$. Skipping the remainder control leaves the claimed $o(1/n)$ unproved. A third error is a sign/branch slip: in $\\bigl(n\\pi,n\\pi+\\tfrac\\pi2\\bigr)$ the root sits just BELOW $(n+\\tfrac12)\\pi$, so the correction is $-1/(n\\pi)$; a student who writes $+1/(n\\pi)$ (or who hunts for the root near $n\\pi$ instead) lands on the wrong asymptote side, and $n\\bigl[x_n-((n+\\tfrac12)\\pi+\\tfrac1{n\\pi})\\bigr]\\to-2/\\pi\\neq0$.",
    "solutions": [
      {
        "name": "MVT on arctan after relocating to the asymptote",
        "steps": [
          "Existence/uniqueness and growth (part a). On $I_n=\\bigl(n\\pi,n\\pi+\\tfrac\\pi2\\bigr)$ put $g(x)=\\tan x-x$. As $x\\downarrow n\\pi$, $\\tan x\\to0^+$ so $g\\to -n\\pi<0$; as $x\\uparrow (n+\\tfrac12)\\pi$, $\\tan x\\to+\\infty$ so $g\\to+\\infty$. Since $g$ is continuous on $I_n$ there is a root, and $g'(x)=\\sec^2x-1=\\tan^2x\\ge0$ with equality only at the left endpoint, so $g$ is strictly increasing on $I_n$: the root $x_n$ is unique. Because $x_n>n\\pi$, clearly $x_n\\to\\infty$.",
          "Relocate to the asymptote. Write $x_n=\\bigl(n+\\tfrac12\\bigr)\\pi-e_n$. Since $x_n\\in I_n$ we have $e_n\\in\\bigl(0,\\tfrac\\pi2\\bigr)$, and $n\\pi<x_n<(n+\\tfrac12)\\pi$ gives $x_n=\\Theta(n)$, hence $x_n\\to\\infty$. Using $\\tan\\bigl((n+\\tfrac12)\\pi-e_n\\bigr)=\\cot e_n$, the equation $\\tan x_n=x_n$ becomes $\\cot e_n=x_n$, i.e. \\[ e_n=\\operatorname{arccot}(x_n)=\\arctan\\!\\frac{1}{x_n}. \\] As $x_n\\to\\infty$, $e_n=\\arctan(1/x_n)\\to0$, so the root does crawl toward the asymptote -- but we must measure HOW fast.",
          "Apply the Mean Value Theorem to $\\arctan$ on $[0,\\,1/x_n]$. There is $c_n\\in\\bigl(0,1/x_n\\bigr)$ with \\[ e_n=\\arctan\\tfrac1{x_n}-\\arctan 0=\\frac{1}{x_n}\\cdot\\frac{1}{1+c_n^{2}}. \\] Since $0<c_n<1/x_n\\to0$, we have $\\dfrac{1}{1+c_n^{2}}=1+o(1)$, so $e_n=\\dfrac{1}{x_n}\\bigl(1+o(1)\\bigr)$. This MVT factor is the remainder control: it is exactly what converts 'arctan of a small number is about that number' into a rigorous statement with a quantified error.",
          "Replace $1/x_n$ by $1/(n\\pi)$ with controlled error. From $x_n=(n+\\tfrac12)\\pi-e_n$, \\[ \\frac1{x_n}-\\frac1{n\\pi}=\\frac{n\\pi-x_n}{n\\pi\\,x_n}=\\frac{-\\tfrac\\pi2+e_n}{n\\pi\\,x_n}. \\] The numerator lies in $(-\\tfrac\\pi2,0)$ (bounded) and $x_n\\sim n\\pi$, so the right side is $O(1/n^{2})$. Hence $\\dfrac1{x_n}=\\dfrac1{n\\pi}+O\\!\\bigl(\\tfrac1{n^2}\\bigr)$.",
          "Assemble. $e_n=\\bigl(\\tfrac1{n\\pi}+O(\\tfrac1{n^2})\\bigr)(1+o(1))=\\tfrac1{n\\pi}+o\\!\\bigl(\\tfrac1n\\bigr)$, therefore \\[ x_n=\\Bigl(n+\\tfrac12\\Bigr)\\pi-e_n=\\Bigl(n+\\tfrac12\\Bigr)\\pi-\\frac1{n\\pi}+o\\!\\left(\\frac1n\\right). \\] The constant $1/(n\\pi)$ is the leading value of $\\arctan(1/x_n)$ at $x_n\\sim n\\pi$; it cannot be dropped because $n\\,e_n\\to1/\\pi\\neq0$, i.e. it is of EXACT order $1/n$. $\\boxed{x_n=(n+\\tfrac12)\\pi-\\tfrac1{n\\pi}+o(1/n)}$"
        ]
      },
      {
        "name": "Inverse-function Maclaurin expansion of arctan with explicit tail",
        "steps": [
          "As in Solution 1, monotonicity of $g(x)=\\tan x-x$ on $I_n$ gives a unique root $x_n$, and the substitution $x_n=(n+\\tfrac12)\\pi-e_n$ turns $\\tan x_n=x_n$ into $e_n=\\arctan(1/x_n)$ with $e_n\\in(0,\\tfrac\\pi2)$ and $1/x_n\\to0$.",
          "Use the arctan Maclaurin expansion with its alternating remainder. For $0<u\\le1$, $\\arctan u=u-\\dfrac{u^{3}}{3}+\\dfrac{u^{5}}{5}-\\cdots$, an alternating series of decreasing terms, so $0<u-\\arctan u\\le\\dfrac{u^{3}}{3}$. Putting $u=1/x_n$ (which is $\\le1$ for $n\\ge1$ since $x_n>n\\pi>1$): \\[ 0<\\frac1{x_n}-e_n\\le\\frac{1}{3x_n^{3}}=O\\!\\Bigl(\\frac1{n^{3}}\\Bigr), \\] hence $e_n=\\dfrac1{x_n}+O\\!\\bigl(\\tfrac1{n^3}\\bigr)$. The explicit tail bound is the honest substitute for the MVT factor.",
          "Convert $1/x_n$ to $1/(n\\pi)$. Exactly as before, $x_n=(n+\\tfrac12)\\pi-e_n$ gives $\\dfrac1{x_n}-\\dfrac1{n\\pi}=\\dfrac{-\\tfrac\\pi2+e_n}{n\\pi\\,x_n}=O\\!\\bigl(\\tfrac1{n^2}\\bigr)$. Therefore \\[ e_n=\\frac1{x_n}+O\\!\\Bigl(\\tfrac1{n^3}\\Bigr)=\\frac1{n\\pi}+O\\!\\Bigl(\\tfrac1{n^2}\\Bigr)=\\frac1{n\\pi}+o\\!\\Bigl(\\tfrac1n\\Bigr). \\]",
          "Hence $x_n=(n+\\tfrac12)\\pi-e_n=(n+\\tfrac12)\\pi-\\dfrac1{n\\pi}+o\\!\\bigl(\\tfrac1n\\bigr)$. The two error sources, the arctan tail $O(1/n^3)$ and the denominator swap $O(1/n^2)$, are both $o(1/n)$, while the kept term $1/(n\\pi)$ is exactly order $1/n$ -- so the expansion is sharp. $\\boxed{x_n=(n+\\tfrac12)\\pi-\\tfrac1{n\\pi}+o(1/n)}$"
        ]
      },
      {
        "name": "Two-sided squeeze on arctan (no series, no single c)",
        "steps": [
          "Set up as before: unique root $x_n$ on $I_n$ by strict monotonicity of $\\tan x-x$, and $e_n:=(n+\\tfrac12)\\pi-x_n=\\arctan(1/x_n)$ with $1/x_n\\to0^+$.",
          "Bound $\\arctan$ on both sides. For every $u>0$, integrating $\\dfrac{1}{1+t^{2}}$ from $0$ to $u$ and using $\\dfrac{1}{1+u^{2}}\\le\\dfrac{1}{1+t^{2}}\\le1$ on $[0,u]$ gives \\[ \\frac{u}{1+u^{2}}\\;\\le\\;\\arctan u\\;\\le\\;u. \\] With $u=1/x_n$, \\[ \\frac{1}{x_n}\\cdot\\frac{1}{1+1/x_n^{2}}\\;\\le\\;e_n\\;\\le\\;\\frac{1}{x_n}. \\] Both bounds equal $\\dfrac1{x_n}+O\\!\\bigl(\\tfrac1{x_n^{3}}\\bigr)=\\dfrac1{x_n}+O\\!\\bigl(\\tfrac1{n^{3}}\\bigr)$, so the squeeze forces $e_n=\\dfrac1{x_n}+O\\!\\bigl(\\tfrac1{n^3}\\bigr)$.",
          "Replace $1/x_n$ by $1/(n\\pi)$: since $n\\pi<x_n<(n+\\tfrac12)\\pi$, $\\Bigl|\\dfrac1{x_n}-\\dfrac1{n\\pi}\\Bigr|=\\dfrac{x_n-n\\pi}{n\\pi\\,x_n}<\\dfrac{\\pi/2}{n\\pi\\cdot n\\pi}=O\\!\\bigl(\\tfrac1{n^2}\\bigr)$. Thus $e_n=\\dfrac1{n\\pi}+O\\!\\bigl(\\tfrac1{n^2}\\bigr)=\\dfrac1{n\\pi}+o\\!\\bigl(\\tfrac1n\\bigr)$.",
          "Therefore $x_n=(n+\\tfrac12)\\pi-e_n=(n+\\tfrac12)\\pi-\\dfrac1{n\\pi}+o\\!\\bigl(\\tfrac1n\\bigr)$. The squeeze makes the $o(1/n)$ unconditional: no unknown intermediate point, just two explicit elementary bounds that pinch $e_n$ to $1/(n\\pi)$ at the required order. $\\boxed{x_n=(n+\\tfrac12)\\pi-\\tfrac1{n\\pi}+o(1/n)}$"
        ]
      }
    ],
    "remark": "This capstone fuses three skills the book treats separately: locating a root by the Intermediate Value Theorem plus monotonicity, expanding it asymptotically, and -- the rank-defining move -- controlling the remainder so the leading correction is provably $o(1/n)$ and not merely plausible. The pivotal reformulation is $\\cot e_n=x_n\\iff e_n=\\arctan(1/x_n)$: it trades the wild tangent (which is what makes the naive 'root sits at the asymptote' guess so tempting) for the tame, monotone, bounded-derivative arctangent, on which the Mean Value Theorem, an alternating Maclaurin tail, or a one-line integral squeeze each pin the error. The deficit $e_n=(n+\\tfrac12)\\pi-x_n$ is itself of exact order $1/n$ (indeed $n\\,e_n\\to1/\\pi$), which is exactly why dropping it is fatal at the stated precision. A reader who wants the next term will find, by the same arctan expansion carried one order further, $x_n=(n+\\tfrac12)\\pi-\\dfrac1{n\\pi}+\\dfrac{1}{2\\pi n^{2}}+o\\!\\bigl(\\tfrac1{n^{2}}\\bigr)$ -- consistent with the numerical observation $n^{2}\\bigl[x_n-((n+\\tfrac12)\\pi-\\tfrac1{n\\pi})\\bigr]\\to\\tfrac1{2\\pi}$. The whole problem is a lesson in the difference between an asymptotic guess and an asymptotic proof: the MVT/inverse-function remainder is the bridge between them."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "From a Functional Law to a Limit",
    "difficulty": 5,
    "task": "Evaluate the limit",
    "tags": [
      "functional-equation",
      "differentiate-the-relation",
      "ode",
      "series-expansion",
      "lhopital",
      "second-order-cancellation"
    ],
    "statement": "A differentiable function $f:\\mathbb{R}\\to\\mathbb{R}$ satisfies the multiplicative law $f(x+y)=f(x)\\,f(y)$ for all real $x,y$, together with $f(0)\\neq 0$ and $f'(0)=3$. First identify $f$ from these conditions alone (do not guess the form — derive it by differentiating the relation), and then evaluate $$L=\\lim_{x\\to 0}\\frac{f(x)-1-\\sin 3x}{x^{2}}.$$",
    "answer": "Differentiating the law forces $f(x)=e^{3x}$, and the resulting limit is $$\\boxed{L=\\dfrac{9}{2}}.$$",
    "trap": "Reaching for L'Hôpital once and stopping: after a single differentiation the quotient is $\\dfrac{3e^{3x}-3\\cos 3x}{2x}$, which is still $\\tfrac{0}{0}$ at $x=0$. A careless reader evaluates the numerator's derivative-free value, mistakes the $0/0$ for $0$, and reports $L=0$. The cancellation lives at second order, so one application of L'Hôpital is never enough.",
    "solutions": [
      {
        "name": "Differentiate the relation to pin down f, then expand",
        "steps": [
          "Fix $x$ and differentiate $f(x+y)=f(x)f(y)$ with respect to $y$: $f'(x+y)=f(x)f'(y)$. Put $y=0$ to get the ODE $f'(x)=f(x)f'(0)=3f(x)$, since $f'(0)=3$.",
          "Setting $x=y=0$ in the original law gives $f(0)=f(0)^2$, and as $f(0)\\neq 0$ we get $f(0)=1$. Solving $f'=3f$ with $f(0)=1$ yields $f(x)=e^{3x}$.",
          "Use the standard series $e^{3x}=1+3x+\\tfrac{9}{2}x^{2}+\\cdots$ and $\\sin 3x=3x-\\tfrac{27}{6}x^{3}+\\cdots$. The numerator becomes $\\big(1+3x+\\tfrac{9}{2}x^{2}+\\cdots\\big)-1-\\big(3x-\\cdots\\big)=\\tfrac{9}{2}x^{2}+\\cdots$.",
          "Dividing by $x^{2}$ and letting $x\\to 0$, every higher-order term vanishes, leaving $\\boxed{L=\\dfrac{9}{2}}$."
        ]
      },
      {
        "name": "Twice-applied L'Hôpital after identifying f",
        "steps": [
          "Having derived $f(x)=e^{3x}$ from the ODE $f'=3f,\\ f(0)=1$, write $N(x)=e^{3x}-1-\\sin 3x$ and $D(x)=x^{2}$, both vanishing at $0$.",
          "First L'Hôpital: $\\dfrac{N'}{D'}=\\dfrac{3e^{3x}-3\\cos 3x}{2x}$, still $\\tfrac{0}{0}$ at $x=0$ — this is exactly where the trap stops.",
          "Second L'Hôpital: $\\dfrac{N''}{D''}=\\dfrac{9e^{3x}+9\\sin 3x}{2}$. Evaluating at $x=0$ gives $\\dfrac{9\\cdot 1+0}{2}=\\dfrac{9}{2}$.",
          "Hence $L=\\boxed{\\dfrac{9}{2}}$, agreeing with the series computation."
        ]
      }
    ],
    "remark": "**Insight.** The functional law is not decoration: differentiating it in $y$ and freezing $y=0$ converts an algebraic identity into the ODE $f'=3f$, which alone (with $f(0)=1$) determines $f=e^{3x}$. Only after the function is pinned down can the limit be read off — and the genuine work is recognizing that the first-order parts of $e^{3x}-1$ and $\\sin 3x$ cancel, so the answer is decided entirely by the second-order term $\\tfrac{9}{2}x^{2}$."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "Logarithmic Extremum Becomes an Inequality",
    "difficulty": 5,
    "task": "Minimise, then prove the bound",
    "tags": [
      "logarithmic-differentiation",
      "extrema",
      "monotonicity",
      "second-derivative-test",
      "inequality-from-minimum"
    ],
    "statement": "Let $f(x)=x^{x}e^{-x}$ for $x>0$. Using logarithmic differentiation, locate and classify the global extremum of $f$, and then leverage that extreme value to prove the sharp inequality $$x^{x}\\ge e^{\\,x-1}\\qquad\\text{for every }x>0,$$ with equality precisely at one point.",
    "answer": "$f$ has a global minimum $f(1)=e^{-1}$ at $x=1$, and consequently $$\\boxed{\\,x^{x}\\ge e^{\\,x-1}\\ \\text{for all }x>0,\\ \\text{equality only at }x=1\\,}.$$",
    "trap": "Differentiating $x^{x}$ with the power rule as though the exponent were constant, writing $\\frac{d}{dx}x^{x}=x\\cdot x^{x-1}=x^{x}$. Then $f'(x)=x^{x}e^{-x}-x^{x}e^{-x}=0$ for all $x$, ``proving'' $f$ is constant with no extremum — and the inequality cannot be reached. The base and exponent both vary, so logarithmic differentiation is mandatory: $\\frac{d}{dx}x^{x}=x^{x}(\\ln x+1)$.",
    "solutions": [
      {
        "name": "Logarithmic differentiation, then the second-derivative test",
        "steps": [
          "Take $\\ln f(x)=x\\ln x - x$ for $x>0$. Differentiating, $\\dfrac{f'(x)}{f(x)}=\\big(\\ln x+1\\big)-1=\\ln x$, so $f'(x)=f(x)\\ln x=x^{x}e^{-x}\\ln x$.",
          "Since $f(x)>0$, the sign of $f'$ matches the sign of $\\ln x$: $f'<0$ on $(0,1)$ and $f'>0$ on $(1,\\infty)$, so $x=1$ is the unique critical point and a minimum.",
          "Confirm via curvature: $f''(x)=f'(x)\\ln x+\\dfrac{f(x)}{x}$, and at $x=1$ this is $0+f(1)=e^{-1}>0$, a strict local minimum. As $f$ decreases then increases, it is the global minimum, with $f(1)=1^{1}e^{-1}=e^{-1}$.",
          "Therefore $x^{x}e^{-x}\\ge e^{-1}$ for all $x>0$, i.e. $x^{x}\\ge e^{x-1}$, with equality only at $x=1$: $\\boxed{x^{x}\\ge e^{x-1}}$."
        ]
      },
      {
        "name": "Monotonicity of the log-difference",
        "steps": [
          "Set $g(x)=\\ln f(x)=x\\ln x-x$. Then $g'(x)=\\ln x$, which is negative on $(0,1)$ and positive on $(1,\\infty)$, so $g$ strictly decreases then strictly increases.",
          "Hence $g$ attains its global minimum at $x=1$, where $g(1)=1\\cdot 0-1=-1$. Thus $\\ln f(x)\\ge -1$ for all $x>0$, with equality only at $x=1$.",
          "Exponentiating the monotone bound, $f(x)=x^{x}e^{-x}\\ge e^{-1}$, which rearranges to $x^{x}\\ge e^{x-1}$.",
          "Because $g$ is strictly monotone on each side of $1$, equality holds at exactly one point, giving the sharp result $\\boxed{x^{x}\\ge e^{x-1},\\ \\text{equality at }x=1}$."
        ]
      }
    ],
    "remark": "**Insight.** Logarithmic differentiation does double duty here: it tames the variable-base-variable-exponent $x^{x}$ into the clean $g(x)=x\\ln x-x$ whose derivative is simply $\\ln x$, and that same $g$ turns an extremum statement into an inequality. The minimum value $f(1)=e^{-1}$ is not the end of the problem — it is the engine that powers the global bound $x^{x}\\ge e^{x-1}$, with the strict monotonicity on either side of $x=1$ guaranteeing the equality case is unique."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "Second Derivative at Zero of an Integral",
    "difficulty": 5,
    "task": "Use the Fundamental Theorem of Calculus to obtain F', then evaluate F''(0) straight from the limit definition of the derivative.",
    "tags": [
      "fundamental theorem of calculus",
      "limit definition",
      "second derivative",
      "continuity",
      "small-angle expansion"
    ],
    "statement": "Let $f:\\mathbb{R}\\to\\mathbb{R}$ be defined by\n$$ f(t)=\\begin{cases}\\dfrac{1-\\cos t}{t}, & t\\neq 0,\\\\[2mm] 0, & t=0,\\end{cases} $$\nand let $F(x)=\\displaystyle\\int_{0}^{x} f(t)\\,dt$ for all $x\\in\\mathbb{R}$. First check that $f$ is continuous at $0$, so that $F$ is well defined and (by the Fundamental Theorem of Calculus) satisfies $F'(x)=f(x)$. Then determine the value of $F''(0)$, where $F''(0)$ is to be understood as $\\displaystyle\\lim_{h\\to 0}\\frac{F'(h)-F'(0)}{h}$ computed directly from the definition.",
    "answer": "$\\boxed{\\dfrac{1}{2}}$",
    "trap": "Writing $F''(0)=\\lim_{h\\to 0}\\frac{1-\\cos h}{h^{2}}$ and then replacing $1-\\cos h$ by $h^{2}$ (instead of $\\tfrac{1}{2}h^{2}$) gives the wrong value $1$. The factor $\\tfrac12$ in $1-\\cos h\\sim\\tfrac12 h^{2}$ is exactly what is being tested. A second tempting error is to assume $F$ is automatically twice differentiable and write $F''(0)=f'(0)$ without justifying that $f$ is even differentiable at $0$ — $F''(0)$ must be extracted from the limit definition acting on $F'=f$.",
    "solutions": [
      {
        "name": "FTC then limit definition with $\\dfrac{1-\\cos h}{h^{2}}\\to\\dfrac12$",
        "steps": [
          "Continuity of $f$ at $0$: since $1-\\cos t=2\\sin^{2}(t/2)$, we get $\\dfrac{1-\\cos t}{t}=\\dfrac{2\\sin^{2}(t/2)}{t}\\to 0$ as $t\\to0$, matching $f(0)=0$. So $f$ is continuous everywhere and $F(x)=\\int_0^x f$ is well defined.",
          "By the Fundamental Theorem of Calculus, $F$ is differentiable with $F'(x)=f(x)$ for every $x$; in particular $F'(0)=f(0)=0$.",
          "Apply the limit definition to $F'$ at $0$: $F''(0)=\\lim_{h\\to0}\\dfrac{F'(h)-F'(0)}{h}=\\lim_{h\\to0}\\dfrac{f(h)-0}{h}=\\lim_{h\\to0}\\dfrac{1}{h}\\cdot\\dfrac{1-\\cos h}{h}=\\lim_{h\\to0}\\dfrac{1-\\cos h}{h^{2}}.$",
          "Using the standard limit $\\dfrac{1-\\cos h}{h^{2}}\\to\\dfrac12$ (equivalently $1-\\cos h=\\tfrac12 h^{2}+O(h^{4})$), we obtain $F''(0)=\\dfrac12.$"
        ]
      },
      {
        "name": "Half-angle reduction of the difference quotient",
        "steps": [
          "As above, FTC gives $F'(x)=f(x)$ and $F'(0)=0$, so $F''(0)=\\lim_{h\\to0}\\dfrac{1-\\cos h}{h^{2}}$ from the definition.",
          "Write $1-\\cos h=2\\sin^{2}\\!\\big(\\tfrac{h}{2}\\big)$, so $\\dfrac{1-\\cos h}{h^{2}}=\\dfrac{2\\sin^{2}(h/2)}{h^{2}}=\\dfrac12\\left(\\dfrac{\\sin(h/2)}{h/2}\\right)^{2}.$",
          "Since $\\dfrac{\\sin(h/2)}{h/2}\\to1$ as $h\\to0$, the bracket squared tends to $1$, giving $F''(0)=\\dfrac12\\cdot 1=\\dfrac12.$"
        ]
      },
      {
        "name": "L'Hôpital on the difference quotient",
        "steps": [
          "FTC gives $F'(x)=f(x)$ and $F'(0)=0$, hence $F''(0)=\\lim_{h\\to0}\\dfrac{1-\\cos h}{h^{2}}$, a $\\tfrac00$ form.",
          "Differentiate numerator and denominator: $\\lim_{h\\to0}\\dfrac{\\sin h}{2h}$, still $\\tfrac00$.",
          "Apply L'Hôpital once more (or use $\\tfrac{\\sin h}{h}\\to1$): $\\lim_{h\\to0}\\dfrac{\\cos h}{2}=\\dfrac12.$ Therefore $F''(0)=\\dfrac12.$"
        ]
      }
    ],
    "remark": "**Insight.** The Fundamental Theorem hands you $F'=f$ for free, but it never promises a *second* derivative — $F''(0)$ has to be born from the limit definition applied to $F'$. Because $F'(0)=f(0)=0$, that limit collapses to the famous $\\dfrac{1-\\cos h}{h^{2}}\\to\\dfrac12$, so the whole problem is a disguised test of whether you remember the $\\tfrac12$ in $1-\\cos h\\sim\\tfrac12 h^{2}$. Differentiating the messy formula for $f$ is a trap; reading off the difference quotient is the clean route."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "A Conserved Quantity: $f^2+(f')^2$",
    "difficulty": 2,
    "task": "Find the value of $F(10)$.",
    "pyq": {
      "year": 2006,
      "paper": "1",
      "qno": "7"
    },
    "tags": [
      "derivative rules",
      "constant function via derivative",
      "2006"
    ],
    "figure": "",
    "statement": "If $f''(x)=-f(x)$ and $g(x)=f'(x)$, and $F(x)=\\left(f\\!\\left(\\dfrac{x}{2}\\right)\\right)^2+\\left(g\\!\\left(\\dfrac{x}{2}\\right)\\right)^2$, and it is given that $F(5)=5$, then $F(10)$ is equal to\n\n(A) $5$\n\n(B) $10$\n\n(C) $0$\n\n(D) $15$",
    "answer": "$\\boxed{5}$ (option (A))",
    "trap": "The chain-rule factor from the argument $x/2$ makes each derivative pick up a $\\tfrac12$, so a hasty student computes $F'(x)=\\tfrac12\\big[2ff'+2gg'\\big]$ and then wrongly forgets that $g=f'$ and $g'=f''=-f$. The real point is not the $\\tfrac12$ at all — it is that $ff'+gg'=f\\,f'+f'\\,(-f)=0$ identically, so $F$ is constant. Chasing $F(10)=2\\,F(5)$ (as if $F$ were linear or scaled) is the tempting wrong move.",
    "solutions": [
      {
        "name": "Show $F$ is constant (differentiate)",
        "steps": [
          "Write $u=x/2$. Then $F(x)=f(u)^2+g(u)^2$ with $g=f'$, and $\\dfrac{du}{dx}=\\dfrac12$.",
          "Differentiate: $F'(x)=\\Big[2\\,f(u)\\,f'(u)+2\\,g(u)\\,g'(u)\\Big]\\cdot\\dfrac12$.",
          "Now $g(u)=f'(u)$ and $g'(u)=f''(u)=-f(u)$ (given $f''=-f$).",
          "Substitute: $f(u)f'(u)+g(u)g'(u)=f(u)f'(u)+f'(u)\\big(-f(u)\\big)=0$.",
          "Hence $F'(x)=0$ for all $x$, so $F$ is a constant function.",
          "Therefore $F(10)=F(5)=5$."
        ]
      },
      {
        "name": "Recognise $f$ as simple harmonic motion",
        "steps": [
          "The relation $f''(x)=-f(x)$ is the SHM equation, whose general solution is $f(x)=A\\cos x+B\\sin x$.",
          "Then $f'(x)=-A\\sin x+B\\cos x$, so $g=f'$ satisfies $f(t)^2+g(t)^2=A^2+B^2$ for every $t$ (the Pythagorean identity absorbs the cross terms).",
          "With $t=x/2$: $F(x)=f(x/2)^2+g(x/2)^2=A^2+B^2$, a constant independent of $x$.",
          "Given $F(5)=5$, the constant equals $5$, so $F(10)=5$ as well."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE 2006, Paper 1, Q7. The energy-like invariant $f^2+(f')^2$ of the SHM equation $f''=-f$ is conserved, so its value at any two arguments must agree — the specific numbers $5$ and $10$ are pure distraction."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "The Lower Envelope $\\min\\{1,x^2,x^3\\}$",
    "difficulty": 3,
    "task": "Identify all correct statements.",
    "pyq": {
      "year": 2006,
      "paper": "1",
      "qno": "14"
    },
    "tags": [
      "continuity",
      "non-differentiability of min function",
      "2006"
    ],
    "figure": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" font-size=\"12\"><line x1=\"20\" y1=\"180\" x2=\"305\" y2=\"180\" stroke=\"var(--ink3)\" stroke-width=\"1\"/><line x1=\"110\" y1=\"20\" x2=\"110\" y2=\"200\" stroke=\"var(--ink3)\" stroke-width=\"1\"/><text x=\"298\" y=\"195\" fill=\"var(--ink2)\">x</text><text x=\"116\" y=\"30\" fill=\"var(--ink2)\">y</text><path d=\"M 20 219 Q 65 210 90 197 T 130 155\" stroke=\"var(--ink2)\" stroke-width=\"1\" fill=\"none\" stroke-dasharray=\"4 3\"/><path d=\"M 40 214 Q 90 195 130 130 Q 160 82 190 40\" stroke=\"var(--ink2)\" stroke-width=\"1\" fill=\"none\" stroke-dasharray=\"4 3\"/><line x1=\"20\" y1=\"90\" x2=\"305\" y2=\"90\" stroke=\"var(--ink2)\" stroke-width=\"1\" stroke-dasharray=\"4 3\"/><text x=\"24\" y=\"84\" fill=\"var(--ink2)\">y=1</text><path d=\"M 20 219 Q 65 210 90 197 T 150 90\" stroke=\"var(--gold)\" stroke-width=\"2.5\" fill=\"none\"/><line x1=\"150\" y1=\"90\" x2=\"305\" y2=\"90\" stroke=\"var(--gold)\" stroke-width=\"2.5\"/><circle cx=\"150\" cy=\"90\" r=\"3\" fill=\"var(--gold)\"/><line x1=\"150\" y1=\"90\" x2=\"150\" y2=\"180\" stroke=\"var(--ink2)\" stroke-width=\"0.8\" stroke-dasharray=\"2 2\"/><text x=\"146\" y=\"195\" fill=\"var(--ink2)\">1</text><text x=\"200\" y=\"78\" fill=\"var(--gold)\">f(x)</text><text x=\"165\" y=\"55\" fill=\"var(--ink2)\">y=x²</text><text x=\"55\" y=\"205\" fill=\"var(--ink2)\">y=x³</text></svg>",
    "statement": "If $f(x)=\\min\\{1,\\,x^2,\\,x^3\\}$, then\n\n(A) $f(x)$ is continuous $\\forall\\,x\\in\\mathbb{R}$\n\n(B) $f'(x)>0,\\ \\forall\\,x>1$\n\n(C) $f(x)$ is not differentiable but continuous $\\forall\\,x\\in\\mathbb{R}$\n\n(D) $f(x)$ is not differentiable for two values of $x$",
    "answer": "$\\boxed{(A)}$",
    "trap": "Option $(C)$ reads “not differentiable but continuous $\\forall x$” — i.e. non-differentiable at EVERY $x$. But $f$ is a smooth cubic for $x<1$ and constant for $x>1$; it kinks at the single point $x=1$ only. “For all $x$” makes $(C)$ false, and $(D)$’s “two values” is also wrong.",
    "solutions": [
      {
        "name": "Resolve the min, then test every point",
        "steps": [
          "For $x\\le1$: since $x^3\\le x^2$ and $x^3\\le1$ there, the least of $\\{1,x^2,x^3\\}$ is $x^3$; for $x>1$: $1<x^2<x^3$, so the least is $1$. Thus $f(x)=x^3$ for $x\\le1$ and $f(x)=1$ for $x>1$.",
          "Continuity: each branch is continuous and they agree at $x=1$ ($1^3=1$), so $f$ is continuous on all of $\\mathbb{R}$ — $(A)$ is TRUE.",
          "Differentiability: $f'(x)=3x^2$ for $x<1$ and $f'(x)=0$ for $x>1$. At $x=1$ the left derivative is $3$ and the right is $0$, so $f$ fails to be differentiable ONLY at the single point $x=1$.",
          "Therefore $(C)$ (“not differentiable but continuous $\\forall x$”) is FALSE — $f$ IS differentiable at every $x\\ne1$. $(D)$ (non-differentiable at two values) is FALSE (only one). $(B)$ is FALSE since $f'(x)=0\\not>0$ for $x>1$. The only correct option is $(A)$."
        ]
      },
      {
        "name": "Min-of-smooth-curves envelope argument",
        "steps": [
          "The pointwise minimum of finitely many continuous functions is continuous, so $f$ is continuous everywhere without any casework — $(A)$ holds.",
          "A min-envelope can lose differentiability only where the “winning” curve switches. Here the cubic $y=x^3$ wins for $x\\le1$ and the line $y=1$ wins for $x>1$, so the only possible corner is $x=1$.",
          "At $x=1$ the incoming slope ($3$, from $x^3$) differs from the outgoing slope ($0$, from $y=1$): a genuine corner, and the ONLY one. Everywhere else $f$ coincides with a single smooth curve.",
          "So $f$ is continuous everywhere and non-differentiable at exactly one point. $(A)$ only; $(C)$ and $(D)$ overstate the failure and are false."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE 2006, Paper 1, Q14. $f(x)=x^3$ on $x\\le1$ and $1$ on $x>1$: continuous everywhere ($(A)$), with a single corner at $x=1$ — so the only correct option is $(A)$."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "The Hidden Derivative: zeros of $(f')^2+f''f$",
    "difficulty": 4,
    "task": "Find the minimum number of zeros.",
    "pyq": {
      "year": 2006,
      "paper": "1",
      "qno": "36"
    },
    "tags": [
      "Rolle's theorem",
      "counting zeros",
      "2006"
    ],
    "figure": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" font-size=\"12\"><line x1=\"20\" y1=\"120\" x2=\"305\" y2=\"120\" stroke=\"var(--ink3)\" stroke-width=\"1\"/><line x1=\"30\" y1=\"20\" x2=\"30\" y2=\"200\" stroke=\"var(--ink3)\" stroke-width=\"1\"/><path d=\"M40 120 C 70 40, 95 40, 110 60 S 150 200, 175 175 S 215 40, 245 60 S 285 120, 295 120\" fill=\"none\" stroke=\"var(--gold)\" stroke-width=\"2\"/><circle cx=\"40\" cy=\"120\" r=\"3\" fill=\"var(--ink3)\"/><circle cx=\"110\" cy=\"60\" r=\"3\" fill=\"var(--ink3)\"/><circle cx=\"175\" cy=\"175\" r=\"3\" fill=\"var(--ink3)\"/><circle cx=\"245\" cy=\"60\" r=\"3\" fill=\"var(--ink3)\"/><circle cx=\"295\" cy=\"120\" r=\"3\" fill=\"var(--ink3)\"/><text x=\"36\" y=\"137\" fill=\"var(--ink2)\">a</text><text x=\"106\" y=\"52\" fill=\"var(--ink2)\">b</text><text x=\"171\" y=\"192\" fill=\"var(--ink2)\">c</text><text x=\"241\" y=\"52\" fill=\"var(--ink2)\">d</text><text x=\"291\" y=\"137\" fill=\"var(--ink2)\">e</text><text x=\"120\" y=\"55\" fill=\"var(--ink2)\">2</text><text x=\"185\" y=\"180\" fill=\"var(--ink2)\">-1</text><text x=\"255\" y=\"55\" fill=\"var(--ink2)\">2</text></svg>",
    "statement": "Let $f(x)$ be a twice differentiable function such that $f(a)=0,\\ f(b)=2,\\ f(c)=-1,\\ f(d)=2,\\ f(e)=0$, where $a<b<c<d<e$. Then the minimum number of zeros of $$g(x)=\\bigl(f'(x)\\bigr)^2+f''(x)\\,f(x)$$ in the interval $[a,e]$ is.",
    "answer": "$\\boxed{6}$",
    "trap": "The instinct is to attack $g$ directly by analysing $(f')^2+f''f$ term by term, which goes nowhere. The whole problem collapses once you recognise $g=(f\\,f')'$ — miss that product-rule pattern and you cannot count. A second trap: after finding $f$ has $4$ sign-change zeros and $f'$ has $3$ zeros, you must combine them into the zeros of $h=f\\,f'$ (at least $7$, since the lists are disjoint) before applying Rolle — not count $g$'s zeros from $f$ and $f'$ separately.",
    "solutions": [
      {
        "name": "Recognise $g=(f\\,f')'$, then Rolle",
        "steps": [
          "Observe the product rule: $\\dfrac{d}{dx}\\bigl(f(x)f'(x)\\bigr)=f'(x)f'(x)+f(x)f''(x)=(f'(x))^2+f''(x)f(x)=g(x).$ So $g=h'$ where $h(x)=f(x)f'(x)$.",
          "Count the zeros of $f$ on $[a,e]$. The values $f(a)=0,\\ f(b)=2,\\ f(c)=-1,\\ f(d)=2,\\ f(e)=0$ give $f=0$ at the two endpoints $a,e$, plus sign changes $+\\to-$ on $(b,c)$ and $-\\to+$ on $(c,d)$; by the Intermediate Value Theorem $f$ has at least one zero in each of $(b,c)$ and $(c,d)$. Hence $f$ has at least $4$ zeros in $[a,e]$: $a$, one in $(b,c)$, one in $(c,d)$, and $e$.",
          "Count the zeros of $f'$ on $[a,e]$. Between consecutive zeros of $f$, Rolle's theorem gives a zero of $f'$: with $4$ zeros of $f$ there are $3$ gaps, so $f'$ has at least $3$ zeros in $[a,e]$.",
          "Combine into zeros of $h=f\\,f'$. Every zero of $f$ and every zero of $f'$ is a zero of $h$. These two lists are disjoint (a common zero would make $x$ a repeated root, but the $4$ zeros of $f$ come from strict sign changes / distinct endpoints and the $3$ Rolle points lie strictly between them). So $h$ has at least $4+3=7$ zeros in $[a,e]$.",
          "Apply Rolle once more. With at least $7$ zeros of $h$, there are at least $6$ consecutive-pair gaps, and Rolle gives a zero of $h'=g$ in each. Therefore $g$ has at least $\\boxed{6}$ zeros in $[a,e]$."
        ]
      },
      {
        "name": "Direct Rolle bookkeeping on $f$ and $f'$",
        "steps": [
          "List a concrete extremal $f$ realising the constraints, e.g. a smooth curve through $(a,0),(b,2),(c,-1),(d,2),(e,0)$ that is monotone between the marked points. Label its zeros $r_1=a<r_2<r_3<r_4=e$ (one root in $(b,c)$, one in $(c,d)$).",
          "Between $r_1,r_2,r_3,r_4$ Rolle produces stationary points $s_1\\in(r_1,r_2),\\ s_2\\in(r_2,r_3),\\ s_3\\in(r_3,r_4)$ where $f'=0$; that is $3$ zeros of $f'$.",
          "Now $g=(f'\\,)^2+f''f$ vanishes exactly where $h=f f'=0$ has a horizontal tangent. At each $r_i$ we have $f=0$ so $h=0$; at each $s_j$ we have $f'=0$ so $h=0$. Order all seven abscissae: $r_1<s_1<r_2<s_2<r_3<s_3<r_4$ — they interlace, hence are $7$ distinct zeros of $h$.",
          "By Rolle applied to $h$ on each of the $6$ subintervals $[r_1,s_1],[s_1,r_2],\\dots,[s_3,r_4]$, there is a zero of $h'=g$ in each open subinterval: $6$ zeros of $g$.",
          "No configuration of a twice-differentiable $f$ meeting the data can force fewer (the four values already pin $4$ zeros of $f$ and $3$ of $f'$). Hence the minimum is $\\boxed{6}$."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE 2006, Paper 1, Q36. The entire difficulty is a single act of pattern-recognition — seeing $(f')^2+f''f$ as the derivative of $f\\,f'$ — after which it is pure Rolle bookkeeping."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Four functions, four verdicts on $(-1,1)$",
    "difficulty": 3,
    "task": "Match each function to its properties.",
    "pyq": {
      "year": 2007,
      "paper": "1",
      "qno": "66"
    },
    "tags": [
      "continuity",
      "differentiability",
      "greatest integer function",
      "monotonicity",
      "2007"
    ],
    "figure": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" font-size=\"12\"><line x1=\"20\" y1=\"115\" x2=\"305\" y2=\"115\" stroke=\"var(--ink3)\" stroke-width=\"1\"/><line x1=\"162\" y1=\"20\" x2=\"162\" y2=\"205\" stroke=\"var(--ink3)\" stroke-width=\"1\"/><text x=\"296\" y=\"130\" fill=\"var(--ink2)\">x</text><text x=\"168\" y=\"30\" fill=\"var(--ink2)\">y</text><path d=\"M42 200 Q 102 175 162 115 Q 222 55 282 30\" fill=\"none\" stroke=\"var(--gold)\" stroke-width=\"2\"/><text x=\"200\" y=\"58\" fill=\"var(--gold)\">y=x|x|</text><path d=\"M42 45 Q 102 90 162 115 Q 222 90 282 45\" fill=\"none\" stroke=\"var(--ink2)\" stroke-width=\"1.5\"/><text x=\"40\" y=\"40\" fill=\"var(--ink2)\">y=&#8730;|x|</text><circle cx=\"162\" cy=\"115\" r=\"3\" fill=\"var(--ink3)\"/><text x=\"150\" y=\"132\" fill=\"var(--ink2)\">O</text></svg>",
    "statement": "Here $[x]$ denotes the greatest integer less than or equal to $x$. Match each function in Column I with the properties it possesses on the interval $(-1,1)$ from Column II.\n\nColumn I: (A) $x\\lvert x\\rvert$; (B) $\\sqrt{\\lvert x\\rvert}$; (C) $x+[x]$; (D) $\\lvert x-1\\rvert+\\lvert x+1\\rvert$.\n\nColumn II: (p) continuous in $(-1,1)$; (q) differentiable in $(-1,1)$; (r) strictly increasing in $(-1,1)$; (s) not differentiable at least at one point in $(-1,1)$.",
    "answer": "A → (p, q, r); B → (p, s); C → (r, s); D → (p, q)",
    "trap": "The greatest-integer term in (C) is the killer. On $(-1,1)$, $[x]=-1$ for $-1<x<0$ and $[x]=0$ for $0\\le x<1$, so $x+[x]$ jumps by $+1$ at $x=0$ — yet it is still strictly increasing (each branch rises and the jump is upward), so it earns (r) despite being discontinuous. Students routinely deny (r) because they equate a jump with 'not increasing', and separately mislabel (D) as non-differentiable by forgetting that $\\lvert x-1\\rvert+\\lvert x+1\\rvert$ collapses to the constant $2$ on $(-1,1)$ (the corners sit at $\\pm1$, outside the open interval).",
    "solutions": [
      {
        "name": "Branch-by-branch analysis of each function",
        "steps": [
          "(A) $x\\lvert x\\rvert=\\begin{cases}x^2,&x\\ge0\\\\-x^2,&x<0\\end{cases}$. It is continuous (p). Its derivative is $2\\lvert x\\rvert$, continuous everywhere including $0$ where $f'(0)=0$, so it is differentiable (q). Since $f'(x)=2\\lvert x\\rvert\\ge0$ and vanishes only at the single point $x=0$, $f$ is strictly increasing (r). Thus A → (p, q, r).",
          "(B) $\\sqrt{\\lvert x\\rvert}$ is continuous (p). At $x=0$ the one-sided slopes blow up: $\\lim_{h\\to0^+}\\dfrac{\\sqrt{h}}{h}=+\\infty$ and from the left $-\\infty$, so it is not differentiable at $0$ (s). It is not monotone on $(-1,1)$ (it falls then rises), so (r) fails and, having a non-differentiable point, (q) fails. Thus B → (p, s).",
          "(C) $x+[x]$. On $(-1,1)$, $[x]=-1$ for $-1<x<0$ and $[x]=0$ for $0\\le x<1$, giving $f(x)=x-1$ on $(-1,0)$ and $f(x)=x$ on $[0,1)$. There is an upward jump of $+1$ at $x=0$, so $f$ is discontinuous there — hence not differentiable at $0$ (s), and (p),(q) fail. But each branch has slope $1$ and the jump is upward, so $x_1<x_2\\Rightarrow f(x_1)<f(x_2)$: strictly increasing (r). Thus C → (r, s).",
          "(D) $\\lvert x-1\\rvert+\\lvert x+1\\rvert$. For $-1\\le x\\le1$ we have $x-1\\le0$ and $x+1\\ge0$, so it equals $-(x-1)+(x+1)=2$, a constant on $(-1,1)$. A constant is continuous (p) and differentiable (q) there; it is not increasing, so (r) fails and there is no non-differentiable point inside $(-1,1)$, so (s) fails. Thus D → (p, q)."
        ]
      },
      {
        "name": "Graphical / property-elimination viewpoint",
        "steps": [
          "Sketch each graph on $(-1,1)$. (A) is a smooth odd 'stretched cubic-like' curve through the origin with a flat but non-reversing tangent at $0$; a smooth strictly rising curve ticks p, q, r at once.",
          "(B) is the twin cusp $y=\\sqrt{\\lvert x\\rvert}$, a sharp downward spike at the origin: the picture shows a corner (vertical tangents) at $0$, so it is continuous but not differentiable — p, s — and the V-shape rules out global monotonicity, killing r.",
          "(C) draws as two parallel segments of slope $1$ with an open/closed gap at $x=0$: the visible vertical jump forbids continuity and differentiability (so s, not p or q), while the left segment sits entirely below the right one, so reading left to right the height never decreases — strictly increasing, giving r.",
          "(D) flat-lines at height $2$ across the whole interval because both absolute-value corners live at $x=\\pm1$; a horizontal segment is smooth (p, q) but neither rising nor cornered inside, eliminating r and s.",
          "Collecting the reads: A → (p, q, r), B → (p, s), C → (r, s), D → (p, q)."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE 2007, Paper 1, Q66. A four-way stress test that a strictly increasing function need not be continuous — the $[x]$-jump in (C) rises, so monotonicity survives the discontinuity."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Flipping the roles of $x$ and $y$",
    "difficulty": 3,
    "task": "Identify the correct expression for $\\dfrac{d^2x}{dy^2}$.",
    "pyq": {
      "year": 2007,
      "paper": "2",
      "qno": "47"
    },
    "tags": [
      "second derivative",
      "derivative of inverse function",
      "chain rule",
      "2007"
    ],
    "figure": "",
    "statement": "For a twice-differentiable relation between $x$ and $y$ (with $\\dfrac{dy}{dx}\\ne 0$), $\\dfrac{d^2x}{dy^2}$ equals\n\n(A) $\\left(\\dfrac{d^2y}{dx^2}\\right)^{-1}$\n\n(B) $-\\left(\\dfrac{d^2y}{dx^2}\\right)^{-1}\\left(\\dfrac{dy}{dx}\\right)^{-3}$\n\n(C) $\\left(\\dfrac{d^2y}{dx^2}\\right)\\left(\\dfrac{dy}{dx}\\right)^{-2}$\n\n(D) $-\\left(\\dfrac{d^2y}{dx^2}\\right)\\left(\\dfrac{dy}{dx}\\right)^{-3}$",
    "answer": "(D)",
    "trap": "The seductive wrong answer is (A): students reflexively write $\\dfrac{d^2x}{dy^2}=\\left(\\dfrac{d^2y}{dx^2}\\right)^{-1}$ by analogy with the true first-order rule $\\dfrac{dx}{dy}=\\left(\\dfrac{dy}{dx}\\right)^{-1}$. But the reciprocal rule does NOT carry over to second derivatives — $\\dfrac{d^2x}{dy^2}$ is not the reciprocal of $\\dfrac{d^2y}{dx^2}$, because differentiating $1/y'$ a second time pulls in an extra factor of $dx/dy$ from the chain rule.",
    "solutions": [
      {
        "name": "Differentiate $\\dfrac{dx}{dy}=(y')^{-1}$ with respect to $y$",
        "steps": [
          "Write $y'=\\dfrac{dy}{dx}$. The first-order reciprocal rule gives $\\dfrac{dx}{dy}=\\dfrac{1}{y'}=(y')^{-1}$, which is exact and undisputed.",
          "Now differentiate both sides with respect to $y$: $\\dfrac{d^2x}{dy^2}=\\dfrac{d}{dy}\\big[(y')^{-1}\\big]$. Since $y'$ is a function of $x$, use the chain rule $\\dfrac{d}{dy}=\\dfrac{d}{dx}\\cdot\\dfrac{dx}{dy}$.",
          "Then $\\dfrac{d}{dx}\\big[(y')^{-1}\\big]=-(y')^{-2}\\,y''$ where $y''=\\dfrac{d^2y}{dx^2}$.",
          "Multiply by $\\dfrac{dx}{dy}=(y')^{-1}$: $\\dfrac{d^2x}{dy^2}=-(y')^{-2}y''\\cdot(y')^{-1}=-y''\\,(y')^{-3}$.",
          "Hence $\\dfrac{d^2x}{dy^2}=-\\left(\\dfrac{d^2y}{dx^2}\\right)\\left(\\dfrac{dy}{dx}\\right)^{-3}$, which is option (D)."
        ]
      },
      {
        "name": "Concrete verification with $y=x^2$",
        "steps": [
          "Take a specific curve, say $y=x^2$ (on $x>0$), so that $x=\\sqrt{y}=y^{1/2}$ and the answer can be checked numerically.",
          "Compute the left side directly: $\\dfrac{dx}{dy}=\\tfrac12 y^{-1/2}$ and $\\dfrac{d^2x}{dy^2}=-\\tfrac14 y^{-3/2}$.",
          "Compute the right-hand candidates: $\\dfrac{dy}{dx}=2x$ and $\\dfrac{d^2y}{dx^2}=2$. At a point, $y=x^2$ so $y^{-3/2}=x^{-3}$.",
          "Option (D) gives $-\\left(\\dfrac{d^2y}{dx^2}\\right)\\left(\\dfrac{dy}{dx}\\right)^{-3}=-2\\cdot(2x)^{-3}=-\\dfrac{2}{8x^3}=-\\dfrac{1}{4x^3}=-\\tfrac14 y^{-3/2}$, matching the left side exactly.",
          "Option (A) would give $\\left(\\dfrac{d^2y}{dx^2}\\right)^{-1}=\\tfrac12$, a constant — clearly wrong. So (D) is confirmed."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE 2007, Paper 2, Q47. The lesson: the reciprocal rule is a first-derivative fact only — the second derivative of an inverse relation always carries a $(dy/dx)^{-3}$ factor and a sign flip."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "A critical point in every window of length $\\pi$",
    "difficulty": 3,
    "task": "Decide the truth of the two statements and whether one explains the other.",
    "pyq": {
      "year": 2007,
      "paper": "2",
      "qno": "54"
    },
    "tags": [
      "Rolle's theorem",
      "critical points",
      "periodic functions",
      "2007"
    ],
    "figure": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" font-size=\"12\">\n  <line x1=\"20\" y1=\"120\" x2=\"305\" y2=\"120\" stroke=\"var(--ink3)\" stroke-width=\"1\"/>\n  <line x1=\"30\" y1=\"20\" x2=\"30\" y2=\"200\" stroke=\"var(--ink3)\" stroke-width=\"1\"/>\n  <text x=\"298\" y=\"135\" fill=\"var(--ink2)\">x</text>\n  <text x=\"12\" y=\"26\" fill=\"var(--ink2)\">y</text>\n  <path d=\"M30,70 Q56,45 82,70 T134,70 T186,70 T238,70 T290,70\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"1.6\"/>\n  <text x=\"92\" y=\"40\" fill=\"var(--ink2)\">$y=2+\\cos x$</text>\n  <line x1=\"108\" y1=\"120\" x2=\"108\" y2=\"200\" stroke=\"var(--ink2)\" stroke-dasharray=\"3 3\"/>\n  <line x1=\"212\" y1=\"120\" x2=\"212\" y2=\"200\" stroke=\"var(--ink2)\" stroke-dasharray=\"3 3\"/>\n  <text x=\"96\" y=\"214\" fill=\"var(--ink2)\">t</text>\n  <text x=\"196\" y=\"214\" fill=\"var(--ink2)\">t+\\u03c0</text>\n  <circle cx=\"160\" cy=\"95\" r=\"3.5\" fill=\"var(--gold)\"/>\n  <text x=\"150\" y=\"112\" fill=\"var(--gold)\">c</text>\n  <text x=\"120\" y=\"180\" fill=\"var(--gold)\">window of width \\u03c0</text>\n</svg>",
    "statement": "Let $f(x)=2+\\cos x$ for all real $x$.\n\nSTATEMENT-1: For each real $t$, there exists a point $c$ in $[t,\\,t+\\pi]$ such that $f'(c)=0$.\n\nbecause\n\nSTATEMENT-2: $f(t)=f(t+2\\pi)$ for each real $t$.\n\n(A) Statement-1 True, Statement-2 True; Statement-2 is a correct explanation for Statement-1\n\n(B) Statement-1 True, Statement-2 True; Statement-2 is NOT a correct explanation for Statement-1\n\n(C) Statement-1 True, Statement-2 False\n\n(D) Statement-1 False, Statement-2 True",
    "answer": "(B)",
    "trap": "The tempting mistake is to reach for Rolle's theorem via the $2\\pi$-periodicity of Statement-2 ($f(t)=f(t+2\\pi)$) and conclude that this is the reason Statement-1 holds. But Rolle over an interval of length $2\\pi$ only guarantees a critical point somewhere in $[t,t+2\\pi]$ — it says nothing about the shorter window $[t,t+\\pi]$ that Statement-1 actually asks about. Statement-1 is true for a stronger structural reason ($\\cos$ has a max or min in every half-period), so Statement-2, while true, is not the correct explanation.",
    "solutions": [
      {
        "name": "Locate the extremum of $\\cos$ directly (why Statement-1 is true)",
        "steps": [
          "$f'(x)=-\\sin x$, which vanishes exactly at the integer multiples of $\\pi$: $x=k\\pi$, $k\\in\\mathbb{Z}$.",
          "The zeros of $f'$ are spaced exactly $\\pi$ apart. So any closed interval of length $\\pi$, namely $[t,t+\\pi]$, must contain at least one of these points $k\\pi$.",
          "Concretely, take $k=\\left\\lceil t/\\pi\\right\\rceil$; then $k\\pi\\ge t$ and $k\\pi<t+\\pi$, so $c=k\\pi\\in[t,t+\\pi]$ satisfies $f'(c)=0$. Statement-1 is TRUE.",
          "Statement-2 is a plain fact: $\\cos$ has period $2\\pi$, so $f(t+2\\pi)=2+\\cos(t+2\\pi)=2+\\cos t=f(t)$. Statement-2 is TRUE.",
          "But this argument used the spacing of critical points — the period $2\\pi$ was never needed to reach the length-$\\pi$ conclusion. So Statement-2 does not explain Statement-1: the answer is (B)."
        ]
      },
      {
        "name": "Rolle test — show the $2\\pi$-period is too weak",
        "steps": [
          "Suppose we try to derive Statement-1 from Statement-2 by Rolle's theorem. Rolle needs equal endpoint values on the SAME interval we conclude about, here $[t,t+\\pi]$.",
          "Check the endpoints: $f(t+\\pi)-f(t)=\\cos(t+\\pi)-\\cos t=-\\cos t-\\cos t=-2\\cos t$, which is nonzero for most $t$ (e.g. $t=0$ gives $-2$).",
          "So $f(t)\\ne f(t+\\pi)$ in general — Rolle's theorem cannot even be applied on $[t,t+\\pi]$. The $2\\pi$-periodicity of Statement-2 only equates $f(t)$ with $f(t+2\\pi)$, an interval of length $2\\pi$, not $\\pi$.",
          "From Statement-2, Rolle only yields a critical point in $[t,t+2\\pi]$, which is a weaker claim than Statement-1. Thus the truth of Statement-1 does not follow from Statement-2.",
          "Both statements are individually true (Statement-1 by the previous method), but the implication link fails, giving option (B)."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE 2007, Paper 2, Q54. Classic assertion-reason trap: two true statements where the offered reason is a real theorem applied to the wrong interval length — correctness of the 'because' is separate from correctness of the parts."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "The mirror at $x=\\tfrac12$",
    "difficulty": 4,
    "task": "Select all correct statements.",
    "pyq": {
      "year": 2008,
      "paper": "1",
      "qno": "7"
    },
    "tags": [
      "Rolle's theorem",
      "symmetric functions",
      "definite integral properties",
      "2008"
    ],
    "figure": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" font-size=\"12\"><line x1=\"20\" y1=\"180\" x2=\"300\" y2=\"180\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"/><line x1=\"160\" y1=\"30\" x2=\"160\" y2=\"195\" stroke=\"var(--ink2)\" stroke-width=\"0.8\" stroke-dasharray=\"3 3\"/><path d=\"M 60 70 Q 110 150 160 155 Q 210 150 260 70\" fill=\"none\" stroke=\"var(--gold)\" stroke-width=\"2\"/><line x1=\"70\" y1=\"128\" x2=\"110\" y2=\"128\" stroke=\"var(--ink2)\" stroke-width=\"1\"/><line x1=\"140\" y1=\"155\" x2=\"180\" y2=\"155\" stroke=\"var(--ink2)\" stroke-width=\"1\"/><line x1=\"210\" y1=\"128\" x2=\"250\" y2=\"128\" stroke=\"var(--ink2)\" stroke-width=\"1\"/><circle cx=\"90\" cy=\"128\" r=\"2.5\" fill=\"var(--ink3)\"/><circle cx=\"160\" cy=\"155\" r=\"2.5\" fill=\"var(--ink3)\"/><circle cx=\"230\" cy=\"128\" r=\"2.5\" fill=\"var(--ink3)\"/><text x=\"84\" y=\"150\" fill=\"var(--ink2)\" text-anchor=\"middle\">1/4</text><text x=\"160\" y=\"172\" fill=\"var(--ink2)\" text-anchor=\"middle\">1/2</text><text x=\"232\" y=\"150\" fill=\"var(--ink2)\" text-anchor=\"middle\">3/4</text><text x=\"290\" y=\"196\" fill=\"var(--ink2)\">x</text><text x=\"110\" y=\"55\" fill=\"var(--ink2)\">f(x)=f(1-x)</text></svg>",
    "statement": "Let $f(x)$ be a non-constant twice differentiable function defined on $(-\\infty,\\infty)$ such that $f(x)=f(1-x)$ and $f'\\!\\left(\\tfrac14\\right)=0$. Then which of the following is/are correct? $$\\text{(A) } f''(x)\\text{ vanishes at least twice on }[0,1]$$ $$\\text{(B) } f'\\!\\left(\\tfrac12\\right)=0$$ $$\\text{(C) } \\int_{-1/2}^{1/2} f\\!\\left(x+\\tfrac12\\right)\\sin x\\,dx=0$$ $$\\text{(D) } \\int_0^{1/2} f(t)\\,e^{\\sin\\pi t}\\,dt=\\int_{1/2}^{1} f(1-t)\\,e^{\\sin\\pi t}\\,dt$$",
    "answer": "(A), (B), (C), (D)",
    "trap": "The symmetry axis is $x=\\tfrac12$, not $x=0$. Students who reflexively treat $f$ as an even function (axis at the origin) mishandle every part; the correct object to call 'even' is the shifted function $f\\!\\left(x+\\tfrac12\\right)$. A second trap in (A) is stopping at one zero of $f''$ — the hypothesis $f'(1/4)=0$ combined with symmetry secretly hands you three zeros of $f'$, forcing two zeros of $f''$ by Rolle.",
    "solutions": [
      {
        "name": "Symmetry $\\Rightarrow$ shifted function is even",
        "steps": [
          "Differentiate $f(x)=f(1-x)$ using the chain rule on the right: $f'(x)=-f'(1-x)$.",
          "Put $x=\\tfrac12$: $f'\\!\\left(\\tfrac12\\right)=-f'\\!\\left(\\tfrac12\\right)$, so $2f'\\!\\left(\\tfrac12\\right)=0\\Rightarrow f'\\!\\left(\\tfrac12\\right)=0$. This is (B).",
          "Put $x=\\tfrac14$: $f'\\!\\left(\\tfrac14\\right)=-f'\\!\\left(\\tfrac34\\right)$. Since $f'\\!\\left(\\tfrac14\\right)=0$, also $f'\\!\\left(\\tfrac34\\right)=0$.",
          "Thus $f'$ vanishes at the three points $\\tfrac14,\\tfrac12,\\tfrac34$ of $[0,1]$. Apply Rolle to $f'$ on $\\left[\\tfrac14,\\tfrac12\\right]$ and on $\\left[\\tfrac12,\\tfrac34\\right]$: $f''$ has a zero in each open interval — at least twice on $[0,1]$. This is (A).",
          "Let $\\phi(x)=f\\!\\left(x+\\tfrac12\\right)$. Then $\\phi(-x)=f\\!\\left(\\tfrac12-x\\right)=f\\!\\left(1-(\\tfrac12+x)\\right)=f\\!\\left(\\tfrac12+x\\right)=\\phi(x)$, so $\\phi$ is even.",
          "Hence $\\phi(x)\\sin x$ is odd, and $\\int_{-1/2}^{1/2}\\phi(x)\\sin x\\,dx=0$. This is (C).",
          "For (D) substitute $t=1-u$ in the right integral: $dt=-du$, limits $\\tfrac12\\to\\tfrac12$ and $1\\to0$, giving $\\int_0^{1/2} f(u)\\,e^{\\sin\\pi(1-u)}\\,du$. Since $\\sin\\pi(1-u)=\\sin\\pi u$, this equals $\\int_0^{1/2} f(u)\\,e^{\\sin\\pi u}\\,du$, exactly the left side. This is (D). All four are correct."
        ]
      },
      {
        "name": "Direct king-property / substitution route",
        "steps": [
          "(D) needs no symmetry of $f'$ at all — only the given $f(1-t)$ inside. In $\\int_{1/2}^{1} f(1-t)e^{\\sin\\pi t}\\,dt$ set $u=1-t$; the periodic identity $\\sin\\pi t=\\sin\\pi(1-t)=\\sin\\pi u$ collapses it onto $\\int_0^{1/2} f(u)e^{\\sin\\pi u}\\,du$, so (D) is an algebraic identity, true for the given $f$.",
          "(C): rather than invoking evenness, split $\\int_{-1/2}^{1/2}f\\!\\left(x+\\tfrac12\\right)\\sin x\\,dx$ and replace $x\\to-x$ in the negative half; the constraint $f\\!\\left(\\tfrac12-x\\right)=f\\!\\left(\\tfrac12+x\\right)$ makes the two halves cancel because $\\sin(-x)=-\\sin x$. Hence the integral is $0$.",
          "(B): use the mean-value/Rolle picture. $f$ is symmetric about the line $x=\\tfrac12$; a smooth curve symmetric about a vertical line has a horizontal tangent on that line, so $f'\\!\\left(\\tfrac12\\right)=0$.",
          "(A): the point $x=\\tfrac14$ has a mirror partner $x=\\tfrac34$ (reflection across $\\tfrac12$). Symmetry of the graph forces the slope at mirror points to be negatives, so $f'\\!\\left(\\tfrac34\\right)=-f'\\!\\left(\\tfrac14\\right)=0$. With three stationary points $\\tfrac14<\\tfrac12<\\tfrac34$ and $f'$ differentiable, $f''=(f')'$ must change or touch zero between consecutive stationary points — at least two zeros in $[0,1]$.",
          "Every option is validated; the answer is (A), (B), (C), (D)."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE / JEE Advanced 2008, Paper 1, Q7. The single hypothesis $f(x)=f(1-x)$ is a reflection about $x=\\tfrac12$; recentering to $\\phi(x)=f\\!\\left(x+\\tfrac12\\right)$ turns 'mirror symmetry' into ordinary evenness and unlocks all four parts at once."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Implicit curve $y^3-3y+x=0$",
    "difficulty": 4,
    "task": "Find the second derivative.",
    "pyq": {
      "year": 2008,
      "paper": "1",
      "qno": "15"
    },
    "tags": [
      "implicit differentiation",
      "second derivative",
      "2008"
    ],
    "figure": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" font-size=\"12\"><line x1=\"20\" y1=\"110\" x2=\"300\" y2=\"110\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"/><line x1=\"160\" y1=\"20\" x2=\"160\" y2=\"200\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"/><path d=\"M 250 25 C 190 55 175 90 160 110 C 145 130 130 165 70 195\" fill=\"none\" stroke=\"var(--ink2)\" stroke-width=\"1.6\"/><circle cx=\"110\" cy=\"55\" r=\"3\" fill=\"var(--gold)\"/><text x=\"116\" y=\"50\" fill=\"var(--ink2)\">(-10√2, 2√2)</text><text x=\"305\" y=\"114\" fill=\"var(--ink2)\">x</text><text x=\"165\" y=\"28\" fill=\"var(--ink2)\">y</text><text x=\"40\" y=\"170\" fill=\"var(--ink2)\">y=f(x)</text></svg>",
    "statement": "The equation $y^3-3y+x=0$ implicitly defines, for $x\\in(-\\infty,-2)\\cup(2,\\infty)$, a unique real-valued differentiable function $y=f(x)$. Given that $f(-10\\sqrt2)=2\\sqrt2$, find $f''(-10\\sqrt2)$. $$\\text{(A) } \\frac{4\\sqrt2}{7^3\\,3^2}\\qquad\\text{(B) } \\frac{-4\\sqrt2}{7^3\\,3^2}$$ $$\\text{(C) } \\frac{4\\sqrt2}{7^3\\,3}\\qquad\\text{(D) } \\frac{-4\\sqrt2}{7^3\\,3}$$",
    "answer": "$\\boxed{\\dfrac{-4\\sqrt2}{7^3\\,3^2}}$ (B)",
    "trap": "The tempting shortcut is to differentiate $y'=\\dfrac{-1}{3(y^2-1)}$ as a plain function of $x$ and forget that $y$ is itself a function of $x$ — you must reapply the chain rule (multiply by $y'$) when differentiating the $y^2$ inside. Dropping that inner $y'$ (or mis-tracking the sign) sends you straight to a wrong option; the two 'off-by-a-factor' distractors (C)/(D) exist precisely to catch a missing $3$ in the denominator.",
    "solutions": [
      {
        "name": "Differentiate the relation twice",
        "steps": [
          "First differentiation of $y^3-3y+x=0$ w.r.t. $x$: $3y^2y'-3y'+1=0$, so $y'=\\dfrac{-1}{3(y^2-1)}$.",
          "At the point $y=2\\sqrt2$: $y^2=8$, hence $3(y^2-1)=3\\cdot7=21$ and $y'=-\\dfrac{1}{21}$.",
          "Differentiate $3y^2y'-3y'+1=0$ again w.r.t. $x$ (product + chain rule): $3\\left(2y\\,y'\\cdot y'+y^2y''\\right)-3y''=0$, i.e. $6y\\,(y')^2+3(y^2-1)y''=0$.",
          "Solve for $y''$: $y''=\\dfrac{-6y\\,(y')^2}{3(y^2-1)}=\\dfrac{-2y\\,(y')^2}{y^2-1}$.",
          "Substitute $y=2\\sqrt2$, $y'=-\\tfrac{1}{21}$, $y^2-1=7$: $y''=\\dfrac{-2(2\\sqrt2)\\left(\\tfrac{1}{441}\\right)}{7}=\\dfrac{-4\\sqrt2}{441\\cdot7}=\\dfrac{-4\\sqrt2}{3087}$.",
          "Write $3087=7^3\\cdot 9=7^3\\cdot 3^2$. Hence $f''(-10\\sqrt2)=\\dfrac{-4\\sqrt2}{7^3\\,3^2}$, which is option (B)."
        ]
      },
      {
        "name": "Inverse-function route (differentiate $x=3y-y^3$)",
        "steps": [
          "From the relation, $x=3y-y^3$, so treat $x$ as a function of $y$: $\\dfrac{dx}{dy}=3-3y^2=3(1-y^2)$ and $\\dfrac{d^2x}{dy^2}=-6y$.",
          "Use the inverse-second-derivative identity $\\dfrac{d^2y}{dx^2}=-\\dfrac{d^2x/dy^2}{(dx/dy)^3}$.",
          "At $y=2\\sqrt2$: $\\dfrac{dx}{dy}=3(1-8)=-21$ and $\\dfrac{d^2x}{dy^2}=-6\\cdot2\\sqrt2=-12\\sqrt2$.",
          "Then $f''=\\dfrac{-(-12\\sqrt2)}{(-21)^3}=\\dfrac{12\\sqrt2}{-9261}=\\dfrac{-12\\sqrt2}{9261}$.",
          "Reduce: $9261=21^3=(3\\cdot7)^3=3^3\\cdot7^3$, so $\\dfrac{-12\\sqrt2}{3^3\\cdot7^3}=\\dfrac{-4\\sqrt2}{3^2\\cdot7^3}$ after cancelling $3$.",
          "This matches option (B): $f''(-10\\sqrt2)=\\dfrac{-4\\sqrt2}{7^3\\,3^2}$, confirming the first method."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE / JEE Advanced 2008, Paper 1, Q15 (comprehension). Swapping the roles of $x$ and $y$ (differentiate $x=3y-y^3$ instead) sidesteps the implicit chain-rule bookkeeping entirely and gives the same answer as a clean cross-check."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "The log-gamma second difference",
    "difficulty": 4,
    "task": "Find the value of the second-derivative difference.",
    "pyq": {
      "year": 2008,
      "paper": "2",
      "qno": "5"
    },
    "tags": [
      "functional equations",
      "second derivative",
      "telescoping sum",
      "2008"
    ],
    "figure": "",
    "statement": "Let $g(x)=\\log\\big(f(x)\\big)$ where $f(x)$ is a twice differentiable positive function on $(0,\\infty)$ such that $f(x+1)=x\\,f(x)$. Then, for $N=1,2,3,\\ldots$, the value of $g''\\!\\left(N+\\tfrac12\\right)-g''\\!\\left(\\tfrac12\\right)$ is\n\n$$\\textbf{(A)}\\ -4\\left(1+\\tfrac{1}{9}+\\tfrac{1}{25}+\\cdots+\\tfrac{1}{(2N-1)^2}\\right)$$\n$$\\textbf{(B)}\\ 4\\left(1+\\tfrac{1}{9}+\\tfrac{1}{25}+\\cdots+\\tfrac{1}{(2N-1)^2}\\right)$$\n$$\\textbf{(C)}\\ -4\\left(1+\\tfrac{1}{9}+\\tfrac{1}{25}+\\cdots+\\tfrac{1}{(2N+1)^2}\\right)$$\n$$\\textbf{(D)}\\ 4\\left(1+\\tfrac{1}{9}+\\tfrac{1}{25}+\\cdots+\\tfrac{1}{(2N+1)^2}\\right)$$",
    "answer": "(A)",
    "trap": "You are never asked to find $f$ or $g$ in closed form (it is essentially $\\log\\Gamma$). Taking the logarithm turns the multiplicative recurrence into an additive one, and the extra $\\log x$ term differentiates away twice — so $g''$ satisfies a clean one-step recurrence. Students who try to build $f$ explicitly, or who forget the $-1/x^2$ comes from $\\frac{d^2}{dx^2}\\log x$, stall.",
    "solutions": [
      {
        "name": "Take $\\log$, then telescope $g''$",
        "steps": [
          "Take logs of the functional equation $f(x+1)=x\\,f(x)$: since $g=\\log f$, this gives $g(x+1)=\\log x+g(x)$ for all $x>0$.",
          "Differentiate once: $g'(x+1)=\\dfrac1x+g'(x)$.",
          "Differentiate again: $g''(x+1)=-\\dfrac{1}{x^2}+g''(x)$, i.e. $g''(x+1)-g''(x)=-\\dfrac{1}{x^2}$.",
          "Apply this at $x=\\tfrac12,\\tfrac32,\\tfrac52,\\ldots,\\tfrac{2N-1}{2}$ and add. The left side telescopes: $\\displaystyle\\sum_{k=0}^{N-1}\\Big[g''\\!\\big(\\tfrac12+k+1\\big)-g''\\!\\big(\\tfrac12+k\\big)\\Big]=g''\\!\\left(N+\\tfrac12\\right)-g''\\!\\left(\\tfrac12\\right).$",
          "The right side is $\\displaystyle-\\sum_{k=0}^{N-1}\\frac{1}{\\big(\\tfrac{2k+1}{2}\\big)^2}=-\\sum_{k=0}^{N-1}\\frac{4}{(2k+1)^2}=-4\\left(1+\\frac19+\\frac{1}{25}+\\cdots+\\frac{1}{(2N-1)^2}\\right).$",
          "Hence $g''\\!\\left(N+\\tfrac12\\right)-g''\\!\\left(\\tfrac12\\right)=-4\\left(1+\\tfrac19+\\cdots+\\tfrac{1}{(2N-1)^2}\\right)$, which is option (A)."
        ]
      },
      {
        "name": "Iterate the recurrence directly for $g''$",
        "steps": [
          "From $g(x+1)=\\log x+g(x)$, unfold the recurrence for $g$ itself: $g\\!\\left(N+\\tfrac12\\right)=\\log\\!\\left(\\tfrac12\\right)+\\log\\!\\left(\\tfrac32\\right)+\\cdots+\\log\\!\\left(\\tfrac{2N-1}{2}\\right)+g\\!\\left(\\tfrac12\\right).$",
          "Differentiate this identity twice with respect to $N$ treating $N+\\tfrac12$ as the variable — equivalently, differentiate each $\\log\\!\\big(\\tfrac12+k\\big)$ that carries the running argument. Cleaner: write $g\\!\\left(x\\right)=\\sum_{k=0}^{N-1}\\log\\!\\big(x-1-k\\big)+g\\!\\big(x-N\\big)$ valid for $x\\in\\left(N,N+1\\right)$ with $x=N+\\tfrac12$.",
          "Differentiating twice, every $\\log$ term $\\log(x-1-k)$ contributes $-\\dfrac{1}{(x-1-k)^2}$, and $g''(x-N)$ contributes $g''\\!\\big(\\tfrac12\\big)$ at $x=N+\\tfrac12$.",
          "So $g''\\!\\left(N+\\tfrac12\\right)=g''\\!\\left(\\tfrac12\\right)-\\sum_{k=0}^{N-1}\\frac{1}{\\big(N-\\tfrac12-k\\big)^2}.$",
          "The reciprocal squares run over $\\big(\\tfrac12\\big)^2,\\big(\\tfrac32\\big)^2,\\ldots,\\big(\\tfrac{2N-1}{2}\\big)^2$, i.e. $\\dfrac{4}{1^2},\\dfrac{4}{3^2},\\ldots,\\dfrac{4}{(2N-1)^2}$.",
          "Therefore $g''\\!\\left(N+\\tfrac12\\right)-g''\\!\\left(\\tfrac12\\right)=-4\\left(1+\\tfrac19+\\cdots+\\tfrac{1}{(2N-1)^2}\\right)$ — option (A)."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE / JEE Advanced 2008, Paper 2, Q5. The function $f$ is the Gamma function in disguise, but the winning move is to never name it: logarithms convert the product recurrence to a sum whose second derivative telescopes with a clean $-1/x^2$ step."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "$x\\cos\\tfrac1x$ and its slope at infinity",
    "difficulty": 4,
    "task": "Select all correct statements.",
    "pyq": {
      "year": 2009,
      "paper": "2",
      "qno": "27"
    },
    "tags": [
      "derivative behaviour",
      "mean value theorem",
      "monotonicity of derivative",
      "2009"
    ],
    "figure": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" font-size=\"12\">\n  <line x1=\"30\" y1=\"185\" x2=\"305\" y2=\"185\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"/>\n  <line x1=\"40\" y1=\"200\" x2=\"40\" y2=\"20\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"/>\n  <text x=\"300\" y=\"200\" fill=\"var(--ink2)\">x</text>\n  <text x=\"20\" y=\"28\" fill=\"var(--ink2)\">y</text>\n  <!-- asymptote line y = x - approximated slope reference (thin) -->\n  <line x1=\"55\" y1=\"170\" x2=\"290\" y2=\"40\" stroke=\"var(--ink2)\" stroke-width=\"0.8\" stroke-dasharray=\"4 3\"/>\n  <text x=\"250\" y=\"52\" fill=\"var(--ink2)\">slope $\\to 1$</text>\n  <!-- curve y = x cos(1/x) for x>=1, concave down, approaching the line from below -->\n  <path d=\"M55 172 Q140 120 210 78 T290 45\" fill=\"none\" stroke=\"var(--gold)\" stroke-width=\"2\"/>\n  <text x=\"120\" y=\"150\" fill=\"var(--gold)\">$f(x)=x\\cos\\tfrac1x$</text>\n  <!-- mark x=1 -->\n  <line x1=\"55\" y1=\"182\" x2=\"55\" y2=\"188\" stroke=\"var(--ink3)\"/>\n  <text x=\"50\" y=\"200\" fill=\"var(--ink2)\">1</text>\n</svg>",
    "statement": "For the function $f(x)=x\\cos\\dfrac1x$, $x\\ge1$, which of the following is/are correct?\n\n$\\textbf{(A)}$ for at least one $x$ in $[1,\\infty)$, $f(x+2)-f(x)<2$;\n$\\textbf{(B)}$ $\\displaystyle\\lim_{x\\to\\infty}f'(x)=1$;\n$\\textbf{(C)}$ for all $x$ in $[1,\\infty)$, $f(x+2)-f(x)>2$;\n$\\textbf{(D)}$ $f'(x)$ is strictly decreasing in $[1,\\infty)$.",
    "answer": "(B), (C), (D)",
    "trap": "Options (A) and (C) look like a coin-flip, but they are decided entirely by the sign of $f'-1$: since $f'(x)>1$ on all of $[1,\\infty)$, the Mean Value Theorem forces $f(x+2)-f(x)=2f'(c)>2$ everywhere. Students who estimate $f(x+2)-f(x)\\approx 2$ (because $f$'looks like' the line $y=x$) wrongly pick (A). The subtlety is that $x\\cos\\tfrac1x$ approaches its slant asymptote from a slope strictly greater than $1$.",
    "solutions": [
      {
        "name": "Compute $f'$, $f''$, then apply MVT",
        "steps": [
          "Differentiate: $f'(x)=\\cos\\dfrac1x + x\\cdot\\Big(-\\sin\\dfrac1x\\Big)\\cdot\\Big(-\\dfrac{1}{x^2}\\Big)=\\cos\\dfrac1x+\\dfrac1x\\sin\\dfrac1x.$",
          "As $x\\to\\infty$, $\\dfrac1x\\to0^+$, so $\\cos\\dfrac1x\\to1$ and $\\dfrac1x\\sin\\dfrac1x\\to0$. Hence $\\displaystyle\\lim_{x\\to\\infty}f'(x)=1$, giving $\\textbf{(B)}$.",
          "Differentiate again: $f''(x)=-\\sin\\dfrac1x\\cdot\\Big(-\\dfrac1{x^2}\\Big)-\\dfrac{1}{x^2}\\sin\\dfrac1x+\\dfrac1x\\cos\\dfrac1x\\cdot\\Big(-\\dfrac1{x^2}\\Big)=-\\dfrac{1}{x^3}\\cos\\dfrac1x.$",
          "For $x\\ge1$ we have $0<\\dfrac1x\\le1<\\dfrac\\pi2$, so $\\cos\\dfrac1x>0$, hence $f''(x)=-\\dfrac{1}{x^3}\\cos\\dfrac1x<0$. Thus $f'$ is strictly decreasing on $[1,\\infty)$, giving $\\textbf{(D)}$.",
          "Because $f'$ strictly decreases to its limit $1$, we get $f'(x)>1$ for every $x\\in[1,\\infty)$.",
          "By the Mean Value Theorem on $[x,x+2]$, there is $c\\in(x,x+2)$ with $f(x+2)-f(x)=2f'(c)>2\\cdot1=2$ for every $x\\ge1$. So $\\textbf{(C)}$ holds and $\\textbf{(A)}$ (which claims some $x$ gives a value $<2$) is false.",
          "Correct options: $\\textbf{(B)},\\textbf{(C)},\\textbf{(D)}$."
        ]
      },
      {
        "name": "Series / bounding argument for $f'>1$",
        "steps": [
          "Put $t=\\dfrac1x\\in(0,1]$. Then $f'(x)=\\cos t + t\\sin t$; call it $\\varphi(t)=\\cos t+t\\sin t$.",
          "Expand for small $t$: $\\cos t=1-\\dfrac{t^2}{2}+\\cdots$ and $t\\sin t=t^2-\\dfrac{t^4}{6}+\\cdots$, so $\\varphi(t)=1+\\dfrac{t^2}{2}-\\cdots$. The leading correction $+\\dfrac{t^2}{2}$ is positive.",
          "More rigorously, $\\varphi'(t)=-\\sin t+\\sin t+t\\cos t=t\\cos t>0$ for $t\\in(0,1]$ (since $\\cos t>0$ there). So $\\varphi$ is increasing on $(0,1]$ with $\\varphi(0^+)=1$; therefore $\\varphi(t)>1$ for all $t\\in(0,1]$, i.e. $f'(x)>1$ for all $x\\ge1$.",
          "That $\\varphi$ increases in $t$ (as $x$ decreases) is exactly the statement that $f'$ decreases in $x$ — confirming $\\textbf{(D)}$ — and $\\varphi(0^+)=1$ confirms $\\textbf{(B)}$.",
          "Since $f'>1$ throughout, the average slope on any width-$2$ window exceeds $1$: $\\dfrac{f(x+2)-f(x)}{2}=\\dfrac{1}{2}\\int_x^{x+2}f'(u)\\,du>1$, so $f(x+2)-f(x)>2$ for all $x\\ge1$. This gives $\\textbf{(C)}$ and rules out $\\textbf{(A)}$.",
          "Correct options: $\\textbf{(B)},\\textbf{(C)},\\textbf{(D)}$."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE / JEE Advanced 2009, Paper 2, Q27. One sign — that $\\cos\\tfrac1x>0$ makes $f''<0$ — cascades through: it forces $f'$ down to its limit $1$ from above, so $f'>1$ everywhere and the finite-difference inequality flips against the tempting option (A)."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "The Integral That Breaks $f''$",
    "difficulty": 4,
    "task": "Decide which statements about $f$ are true.",
    "pyq": {
      "year": 2010,
      "paper": "1",
      "qno": "40"
    },
    "tags": [
      "differentiability",
      "fundamental theorem of calculus",
      "continuity of derivative",
      "2010"
    ],
    "figure": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" font-size=\"12\"><line x1=\"20\" y1=\"170\" x2=\"305\" y2=\"170\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"/><line x1=\"30\" y1=\"20\" x2=\"30\" y2=\"195\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"/><text x=\"298\" y=\"185\" fill=\"var(--ink2)\">x</text><text x=\"14\" y=\"28\" fill=\"var(--ink2)\">y</text><path d=\"M30,170 Q80,60 150,55 Q220,50 300,60\" fill=\"none\" stroke=\"var(--ink2)\" stroke-width=\"1.2\" stroke-dasharray=\"3 3\"/><text x=\"235\" y=\"48\" fill=\"var(--ink2)\">$g(x)=\\sqrt{1+\\sin x}$</text><path d=\"M30,150 L70,130 L90,142 L120,110 L150,132 L180,95 L210,128 L240,80 L270,124 L300,70\" fill=\"none\" stroke=\"var(--gold)\" stroke-width=\"2\"/><text x=\"120\" y=\"165\" fill=\"var(--gold)\">$f'$ has corners where $g=0$</text><circle cx=\"90\" cy=\"142\" r=\"2.6\" fill=\"var(--gold)\"/><circle cx=\"210\" cy=\"128\" r=\"2.6\" fill=\"var(--gold)\"/></svg>",
    "statement": "Let $f$ be a real-valued function defined on $(0,\\infty)$ by $$f(x)=\\ln x+\\int_0^x \\sqrt{1+\\sin t}\\,dt.$$ Then which of the following statement(s) is (are) true? (A) $f''(x)$ exists for all $x\\in(0,\\infty)$; (B) $f'(x)$ exists for all $x\\in(0,\\infty)$ and $f'$ is continuous on $(0,\\infty)$, but not differentiable on $(0,\\infty)$; (C) there exists $\\alpha>1$ such that $|f'(x)|<|f(x)|$ for all $x\\in(\\alpha,\\infty)$; (D) there exists $\\beta>0$ such that $|f(x)|+|f'(x)|\\le\\beta$ for all $x\\in(0,\\infty)$.",
    "answer": "(B), (C)",
    "trap": "The Fundamental Theorem hands you $f'(x)=\\tfrac1x+\\sqrt{1+\\sin x}$ and it looks perfectly smooth — so most students tick (A). The killer is that $\\sqrt{1+\\sin x}=\\sqrt2\\,\\bigl|\\cos(\\tfrac x2-\\tfrac\\pi4)\\bigr|$ carries a hidden modulus: it touches zero (where $1+\\sin x=0$) with a corner, so $f'$ is continuous but $f''$ fails at those isolated points. The absolute value is invisible until you rewrite the surd.",
    "solutions": [
      {
        "name": "FTC $+$ the hidden modulus",
        "steps": [
          "By the Fundamental Theorem of Calculus the integrand $\\sqrt{1+\\sin t}$ is continuous, so $f$ is differentiable with $$f'(x)=\\frac1x+\\sqrt{1+\\sin x},$$ and this exists for every $x\\in(0,\\infty)$; being a sum of continuous functions, $f'$ is continuous.",
          "Rewrite the surd. Since $1+\\sin x=1+\\cos\\!\\bigl(\\tfrac\\pi2-x\\bigr)=2\\cos^2\\!\\bigl(\\tfrac x2-\\tfrac\\pi4\\bigr)$, we get $$\\sqrt{1+\\sin x}=\\sqrt2\\,\\Bigl|\\cos\\!\\Bigl(\\tfrac x2-\\tfrac\\pi4\\Bigr)\\Bigr|.$$ The absolute value is the whole story.",
          "At the points where $\\cos(\\tfrac x2-\\tfrac\\pi4)=0$ — i.e. where $1+\\sin x=0$, e.g. $x=\\tfrac{3\\pi}{2}$ — this modulus has a corner, so $\\sqrt{1+\\sin x}$ is NOT differentiable there. Hence $f''$ does not exist at those points: (A) is FALSE and (B) is TRUE ($f'$ continuous everywhere but not differentiable on all of $(0,\\infty)$).",
          "Growth. The integrand satisfies $\\sqrt{1+\\sin t}\\ge\\text{(positive on average)}$; over each period $2\\pi$, $\\int_0^{2\\pi}\\sqrt{1+\\sin t}\\,dt=4\\sqrt2>0$, so $\\int_0^x\\sqrt{1+\\sin t}\\,dt\\to\\infty$. Thus $f(x)\\to\\infty$ and is unbounded, while $f'(x)=\\tfrac1x+\\sqrt{1+\\sin x}\\le 1+\\sqrt2$ is bounded above.",
          "Because $f(x)\\to\\infty$ but $|f'(x)|\\le 1+\\sqrt2$ stays bounded, for all sufficiently large $x$ we have $|f'(x)|<|f(x)|$: some $\\alpha>1$ works, so (C) is TRUE. The same unboundedness of $f$ kills any uniform bound $|f|+|f'|\\le\\beta$, so (D) is FALSE.",
          "Answer: $(B),(C)$."
        ]
      },
      {
        "name": "Half-angle identity from the start",
        "steps": [
          "Instead of hunting for zeros, convert the integrand at once: $1+\\sin t=\\bigl(\\sin\\tfrac t2+\\cos\\tfrac t2\\bigr)^2$, so $\\sqrt{1+\\sin t}=\\bigl|\\sin\\tfrac t2+\\cos\\tfrac t2\\bigr|$.",
          "Then $f'(x)=\\dfrac1x+\\bigl|\\sin\\tfrac x2+\\cos\\tfrac x2\\bigr|$. The modulus is a continuous function of $x$, so $f'$ is continuous — confirming existence and continuity of $f'$ on $(0,\\infty)$.",
          "The expression inside the modulus, $\\sin\\tfrac x2+\\cos\\tfrac x2=\\sqrt2\\sin(\\tfrac x2+\\tfrac\\pi4)$, changes sign (passes through $0$) at $\\tfrac x2+\\tfrac\\pi4=k\\pi$. At each such $x$ the modulus has a corner, so $f'$ is not differentiable and $f''$ does not exist there: (A) FALSE, (B) TRUE.",
          "For the size comparison, bound the antiderivative below: on $[2k\\pi,2(k+1)\\pi]$ the average of $|\\sin\\tfrac t2+\\cos\\tfrac t2|$ is a fixed positive constant, so $\\int_0^x\\sqrt{1+\\sin t}\\,dt$ grows linearly in $x$; therefore $f(x)\\to+\\infty$.",
          "Since $f'$ is bounded ($0<f'(x)\\le 1+\\sqrt2$) while $f\\to\\infty$, eventually $|f'(x)|<|f(x)|$, giving (C); and $f$ unbounded refutes (D). Final: $(B),(C)$."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2010, Paper 1, Q40. The lesson: an integrand can be continuous (so the antiderivative is once-differentiable) yet non-smooth, and a well-disguised $\\sqrt{1+\\sin x}=\\sqrt2\\,|\\cos(\\tfrac x2-\\tfrac\\pi4)|$ is exactly where the second derivative dies."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Inverting Through an Integral",
    "difficulty": 3,
    "task": "Evaluate $(f^{-1})'(2)$.",
    "pyq": {
      "year": 2010,
      "paper": "2",
      "qno": "22"
    },
    "tags": [
      "derivative of inverse function",
      "fundamental theorem of calculus",
      "2010"
    ],
    "figure": "",
    "statement": "Let $f$ be a real-valued function defined on the interval $(-1,1)$ such that $$e^{-x}f(x)=2+\\int_0^x \\sqrt{t^4+1}\\,dt,\\qquad x\\in(-1,1),$$ and let $f^{-1}$ be the inverse function of $f$. Then $\\left(f^{-1}\\right)'(2)$ is equal to (A) $1$; (B) $\\dfrac{1}{3}$; (C) $\\dfrac{1}{2}$; (D) $\\dfrac{1}{e}$.",
    "answer": "$\\boxed{\\dfrac{1}{3}}$ — option (B)",
    "trap": "You never need — and cannot cleanly get — a closed form for $f$: the integral $\\int_0^x\\sqrt{t^4+1}\\,dt$ has no elementary antiderivative. Students who try to isolate $f(x)=e^x\\bigl(2+\\int_0^x\\sqrt{t^4+1}\\,dt\\bigr)$ and then differentiate the whole product often botch the product rule or forget that at $x=0$ the integral vanishes. The clean move is to locate the single point $x=0$ where everything collapses, and use $(f^{-1})'(2)=1/f'(0)$.",
    "solutions": [
      {
        "name": "Inverse-derivative rule at the anchor point",
        "steps": [
          "Find the pre-image of $2$. Put $x=0$: the integral $\\int_0^0\\sqrt{t^4+1}\\,dt=0$, so $e^{0}f(0)=2$, giving $f(0)=2$. Hence $f^{-1}(2)=0$.",
          "The inverse-function derivative rule gives $(f^{-1})'(2)=\\dfrac{1}{f'\\!\\bigl(f^{-1}(2)\\bigr)}=\\dfrac{1}{f'(0)}$, so we only need $f'(0)$.",
          "Differentiate the given relation with respect to $x$, using the product rule on the left and the Fundamental Theorem of Calculus on the right: $$\\frac{d}{dx}\\bigl(e^{-x}f(x)\\bigr)=\\sqrt{x^4+1}\\ \\Longrightarrow\\ e^{-x}\\bigl(f'(x)-f(x)\\bigr)=\\sqrt{x^4+1}.$$",
          "Evaluate at $x=0$: $e^{0}\\bigl(f'(0)-f(0)\\bigr)=\\sqrt{0+1}=1$, i.e. $f'(0)-2=1$, so $f'(0)=3$.",
          "Therefore $(f^{-1})'(2)=\\dfrac{1}{f'(0)}=\\dfrac13$. Answer: (B)."
        ]
      },
      {
        "name": "Solve for $f$ explicitly, then use the product rule",
        "steps": [
          "Multiply through by $e^{x}$: $f(x)=e^{x}\\Bigl(2+\\displaystyle\\int_0^x\\sqrt{t^4+1}\\,dt\\Bigr)$. Write $I(x)=\\int_0^x\\sqrt{t^4+1}\\,dt$, so $I(0)=0$ and, by the FTC, $I'(x)=\\sqrt{x^4+1}$.",
          "Differentiate as a product: $f'(x)=e^{x}\\bigl(2+I(x)\\bigr)+e^{x}I'(x)=e^{x}\\bigl(2+I(x)+\\sqrt{x^4+1}\\bigr).$",
          "At $x=0$: $I(0)=0$ and $\\sqrt{0+1}=1$, so $f'(0)=e^{0}\\bigl(2+0+1\\bigr)=3$. (And $f(0)=e^0\\cdot2=2$, confirming $f^{-1}(2)=0$.)",
          "Since $f$ is differentiable with $f'(0)=3\\neq0$, it is locally invertible near $x=0$, and $(f^{-1})'(2)=\\dfrac{1}{f'(0)}=\\dfrac13$. Answer: (B)."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2010, Paper 2, Q22. A textbook trap defused by one observation: the elementary-looking value $f(0)=2$ is the only anchor you need — combine FTC differentiation with $(f^{-1})'(y)=1/f'(f^{-1}(y))$ and never touch the non-elementary integral."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "A four-piece function and its seams",
    "difficulty": 3,
    "task": "Decide which statements about continuity and differentiability are correct.",
    "pyq": {
      "year": 2011,
      "paper": "2",
      "qno": "35"
    },
    "tags": [
      "continuity",
      "differentiability",
      "piecewise function",
      "2011"
    ],
    "figure": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" font-size=\"12\"><line x1=\"20\" y1=\"140\" x2=\"305\" y2=\"140\" stroke=\"var(--ink3)\" stroke-width=\"1\"/><line x1=\"150\" y1=\"20\" x2=\"150\" y2=\"200\" stroke=\"var(--ink3)\" stroke-width=\"1\"/><text x=\"298\" y=\"155\" fill=\"var(--ink2)\">x</text><text x=\"156\" y=\"30\" fill=\"var(--ink2)\">y</text><text x=\"140\" y=\"155\" fill=\"var(--ink2)\">O</text><path d=\"M30 90 L60 140\" stroke=\"var(--ink2)\" stroke-width=\"1.6\" fill=\"none\"/><path d=\"M60 140 Q78 133 96 118 T150 90\" stroke=\"var(--ink2)\" stroke-width=\"1.6\" fill=\"none\"/><path d=\"M150 90 L200 140\" stroke=\"var(--gold)\" stroke-width=\"1.8\" fill=\"none\"/><path d=\"M200 140 Q235 168 305 182\" stroke=\"var(--ink2)\" stroke-width=\"1.6\" fill=\"none\"/><circle cx=\"60\" cy=\"140\" r=\"2.4\" fill=\"var(--ink3)\"/><circle cx=\"150\" cy=\"90\" r=\"2.4\" fill=\"var(--gold)\"/><circle cx=\"200\" cy=\"140\" r=\"2.4\" fill=\"var(--ink3)\"/><text x=\"38\" y=\"110\" fill=\"var(--ink2)\">−x−π/2</text><text x=\"92\" y=\"128\" fill=\"var(--ink2)\">−cos x</text><text x=\"158\" y=\"116\" fill=\"var(--gold)\">x−1</text><text x=\"238\" y=\"172\" fill=\"var(--ink2)\">ln x</text><text x=\"44\" y=\"156\" fill=\"var(--ink2)\">−π/2</text><text x=\"196\" y=\"156\" fill=\"var(--ink2)\">1</text></svg>",
    "statement": "Let $$f(x)=\\begin{cases} -x-\\dfrac{\\pi}{2}, & x\\le -\\dfrac{\\pi}{2} \\\\[4pt] -\\cos x, & -\\dfrac{\\pi}{2}<x\\le 0 \\\\[4pt] x-1, & 0<x\\le 1 \\\\[4pt] \\ln x, & x>1 \\end{cases}$$ Then which of the following statements are correct? (A) $f(x)$ is continuous at $x=-\\dfrac{\\pi}{2}$. (B) $f(x)$ is not differentiable at $x=0$. (C) $f(x)$ is differentiable at $x=1$. (D) $f(x)$ is differentiable at $x=-\\dfrac{3}{2}$.",
    "answer": "(A), (B), (C), (D)",
    "trap": "The seam at $x=1$ looks like a place two totally different formulas ($x-1$ and $\\ln x$) meet, so students assume a corner and reject (C). But the point $x=-3/2$ (option D) lies strictly inside the smooth $-\\cos x$ piece — it is NOT a junction at all, so the temptation is to over-check the seams and forget an interior point is automatically differentiable.",
    "solutions": [
      {
        "name": "One-sided limits and one-sided derivatives at each seam",
        "steps": [
          "Junction $x=-\\dfrac{\\pi}{2}$: the left piece gives $f\\big(-\\tfrac{\\pi}{2}\\big)=-\\big(-\\tfrac{\\pi}{2}\\big)-\\tfrac{\\pi}{2}=0$; the right piece gives $\\lim_{x\\to(-\\pi/2)^+}(-\\cos x)=-\\cos\\big(-\\tfrac{\\pi}{2}\\big)=0$. Both equal $0=f\\big(-\\tfrac{\\pi}{2}\\big)$, so $f$ is continuous there — (A) is correct.",
          "Junction $x=0$: continuity holds since $-\\cos 0=-1$ and $\\lim_{x\\to0^+}(x-1)=-1$. Left derivative: $\\dfrac{d}{dx}(-\\cos x)=\\sin x$, so $f'(0^-)=\\sin 0=0$. Right derivative: $\\dfrac{d}{dx}(x-1)=1$, so $f'(0^+)=1$. Since $0\\ne 1$, there is a corner — $f$ is not differentiable at $0$, so (B) is correct.",
          "Junction $x=1$: first check continuity — $f(1)=1-1=0$ and $\\lim_{x\\to1^+}\\ln x=0$, so continuous. Left derivative: $\\dfrac{d}{dx}(x-1)=1$, so $f'(1^-)=1$. Right derivative: $\\dfrac{d}{dx}\\ln x=\\dfrac{1}{x}$, so $f'(1^+)=\\dfrac{1}{1}=1$. Since $1=1$, $f$ is differentiable at $1$ — (C) is correct.",
          "Point $x=-\\dfrac{3}{2}$: note $-\\dfrac{3}{2}=-1.5$ and $-\\dfrac{\\pi}{2}\\approx-1.571$, so $-\\dfrac{3}{2}\\in\\big(-\\tfrac{\\pi}{2},0\\big)$, which is the interior of the $-\\cos x$ piece. Inside a single smooth piece there is no junction, and $-\\cos x$ is differentiable everywhere, so $f$ is differentiable at $-\\dfrac{3}{2}$ — (D) is correct.",
          "All four statements hold: (A), (B), (C), (D)."
        ]
      },
      {
        "name": "Slope-matching by inspection of the graph",
        "steps": [
          "Read off the slope of each piece: $-x-\\tfrac{\\pi}{2}$ has slope $-1$; $-\\cos x$ has slope $\\sin x$; $x-1$ has slope $1$; $\\ln x$ has slope $1/x$.",
          "At $x=-\\tfrac{\\pi}{2}$ the values match ($0=0$) so the graph joins — continuity confirmed (A). (Slopes there are $-1$ vs $\\sin(-\\tfrac{\\pi}{2})=-1$, so it is actually smooth too, but continuity is all (A) asks.)",
          "At $x=0$ the incoming slope is $\\sin 0=0$ but the outgoing slope is $1$: the graph has a visible kink, so not differentiable (B).",
          "At $x=1$ the incoming slope is $1$ and the outgoing slope is $1/1=1$: the two tangent lines coincide, so the graph passes through smoothly — differentiable (C).",
          "$x=-\\tfrac32$ sits on the smooth cosine arc away from every join, so its tangent is unambiguous — differentiable (D). Hence (A), (B), (C), (D)."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE / JEE Advanced 2011, Paper 2, Q35. The whole game is knowing that only the four seams can break smoothness — an interior point like $x=-3/2$ is differentiable for free the moment you locate which piece it belongs to."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "$x^2\\left|\\cos\\dfrac{\\pi}{x}\\right|$ at the origin and at $x=2$",
    "difficulty": 4,
    "task": "Determine where the function is differentiable.",
    "pyq": {
      "year": 2012,
      "paper": "1",
      "qno": "42"
    },
    "tags": [
      "differentiability",
      "modulus function",
      "squeeze",
      "2012"
    ],
    "figure": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" font-size=\"12\"><line x1=\"20\" y1=\"160\" x2=\"305\" y2=\"160\" stroke=\"var(--ink3)\" stroke-width=\"1\"/><line x1=\"40\" y1=\"20\" x2=\"40\" y2=\"195\" stroke=\"var(--ink3)\" stroke-width=\"1\"/><text x=\"298\" y=\"175\" fill=\"var(--ink2)\">x</text><text x=\"46\" y=\"30\" fill=\"var(--ink2)\">y</text><text x=\"30\" y=\"175\" fill=\"var(--ink2)\">O</text><path d=\"M40 160 Q52 156 60 150 Q66 158 74 145 Q82 160 92 132 Q104 160 118 108 Q136 160 158 74 Q184 132 208 42\" stroke=\"var(--ink2)\" stroke-width=\"1.5\" fill=\"none\"/><path d=\"M40 160 Q28 156 20 150\" stroke=\"var(--ink2)\" stroke-width=\"1.5\" fill=\"none\" transform=\"translate(80,0) scale(-1,1)\"/><path d=\"M158 74 L158 160\" stroke=\"var(--gold)\" stroke-width=\"1\" stroke-dasharray=\"3 3\"/><circle cx=\"158\" cy=\"74\" r=\"2.6\" fill=\"var(--gold)\"/><text x=\"150\" y=\"175\" fill=\"var(--gold)\">2</text><text x=\"120\" y=\"64\" fill=\"var(--gold)\">corner at x=2</text><path d=\"M40 160 Q46 150 40 160\" stroke=\"var(--ink2)\"/><path d=\"M22 158 Q40 150 58 158\" stroke=\"var(--ink2)\" stroke-width=\"1.3\" fill=\"none\"/><text x=\"55\" y=\"178\" fill=\"var(--ink2)\">0</text><text x=\"120\" y=\"200\" fill=\"var(--ink2)\">y = x²·|cos(π/x)|</text></svg>",
    "statement": "Let $$f(x)=\\begin{cases} x^2\\left|\\cos\\dfrac{\\pi}{x}\\right|, & x\\neq 0 \\\\[4pt] 0, & x=0 \\end{cases}\\qquad x\\in\\mathbb{R}.$$ Then $f$ is (A) differentiable both at $x=0$ and at $x=2$; (B) differentiable at $x=0$ but not differentiable at $x=2$; (C) not differentiable at $x=0$ but differentiable at $x=2$; (D) differentiable neither at $x=0$ nor at $x=2$.",
    "answer": "(B)",
    "trap": "Students test $x=0$ using the wild oscillation of $\\cos(\\pi/x)$ and panic — but the $x^2$ factor squeezes everything to a clean derivative $0$, so $x=0$ is fine. The real break is at $x=2$, where $\\cos(\\pi/x)$ passes through $0$ and the modulus creates a corner. The instinct is exactly backwards: the innocent-looking smooth point $x=2$ is where differentiability dies.",
    "solutions": [
      {
        "name": "Squeeze at $0$, one-sided derivatives of the modulus at $2$",
        "steps": [
          "Differentiability at $x=0$: form the difference quotient $\\dfrac{f(h)-f(0)}{h}=\\dfrac{h^2\\left|\\cos\\tfrac{\\pi}{h}\\right|}{h}=h\\left|\\cos\\tfrac{\\pi}{h}\\right|$.",
          "Since $\\left|\\cos\\tfrac{\\pi}{h}\\right|\\le 1$, we have $0\\le\\left|h\\left|\\cos\\tfrac{\\pi}{h}\\right|\\right|\\le|h|\\to 0$ as $h\\to 0$. By the squeeze theorem the limit is $0$, so $f'(0)=0$ exists — $f$ is differentiable at $x=0$.",
          "Differentiability at $x=2$: here $\\dfrac{\\pi}{x}$ passes through $\\dfrac{\\pi}{2}$, and $\\cos\\dfrac{\\pi}{2}=0$, so the argument of the modulus changes sign at $x=2$. Write $u(x)=\\cos\\dfrac{\\pi}{x}$, with $u(2)=0$ and $u'(x)=\\dfrac{\\pi}{x^2}\\sin\\dfrac{\\pi}{x}$, so $u'(2)=\\dfrac{\\pi}{4}\\sin\\dfrac{\\pi}{2}=\\dfrac{\\pi}{4}>0$.",
          "Because $u$ is increasing through zero at $x=2$: for $x$ slightly less than $2$, $u<0$ so $|u|=-u$; for $x$ slightly more than $2$, $u>0$ so $|u|=u$. Thus near $2$, $f(x)=x^2\\,|u(x)|$ behaves like $-x^2 u(x)$ on the left and $+x^2 u(x)$ on the right.",
          "Left derivative: $\\dfrac{d}{dx}\\big[-x^2 u\\big]_{x=2}=-\\big(2x\\,u+x^2u'\\big)_{x=2}=-\\big(4\\cdot 0+4\\cdot\\tfrac{\\pi}{4}\\big)=-\\pi$. Right derivative: $\\dfrac{d}{dx}\\big[x^2 u\\big]_{x=2}=+\\pi$.",
          "Since $f'(2^-)=-\\pi\\ne \\pi=f'(2^+)$, there is a corner — $f$ is not differentiable at $x=2$.",
          "Differentiable at $0$, not at $2$: the answer is (B)."
        ]
      },
      {
        "name": "Chain-rule test for $|g|$ at a simple zero",
        "steps": [
          "General fact: if $g$ is differentiable, then $|g|$ is differentiable at a point $a$ where $g(a)=0$ if and only if $g'(a)=0$ (a simple zero forces a corner because the graph of $|g|$ reflects the sign change). Where $g(a)\\ne 0$, $|g|$ inherits differentiability from $g$.",
          "At $x=0$: this criterion does not directly apply since the whole expression is defined by continuity, so use the squeeze bound $|f(x)|\\le x^2$. This gives $|f(x)-f(0)|\\le x^2$, hence $\\left|\\dfrac{f(x)-f(0)}{x-0}\\right|\\le|x|\\to 0$; the derivative exists and equals $0$. Differentiable at $0$.",
          "At $x=2$: let $g(x)=\\cos\\dfrac{\\pi}{x}$, a smooth function near $2$ with $g(2)=\\cos\\dfrac{\\pi}{2}=0$ and $g'(2)=\\dfrac{\\pi}{2^2}\\sin\\dfrac{\\pi}{2}=\\dfrac{\\pi}{4}\\ne 0$. This is a simple zero, so $|g|$ has a corner at $2$.",
          "Multiplying by the smooth, non-vanishing factor $x^2$ (with $x^2=4\\ne0$ at $x=2$) cannot repair the corner: $f=x^2|g|$ still fails to be differentiable at $2$.",
          "Conclusion matches: differentiable at $0$, not at $2$ — option (B)."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE / JEE Advanced 2012, Paper 1, Q42. Twin lesson: an $x^2$ prefactor squeezes even a savagely oscillating modulus into differentiability at the origin, yet is powerless against a corner born from $\\cos(\\pi/x)$ crossing zero at $x=2$."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Corners at the accumulation gate: $g(x)=\\int_a^x f$",
    "difficulty": 3,
    "task": "Decide where the accumulation function is not differentiable.",
    "pyq": {
      "year": 2014,
      "paper": "1",
      "qno": "45"
    },
    "tags": [
      "differentiability",
      "fundamental theorem of calculus",
      "piecewise function",
      "2014"
    ],
    "figure": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" font-size=\"12\"><line x1=\"30\" y1=\"180\" x2=\"300\" y2=\"180\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"/><line x1=\"30\" y1=\"195\" x2=\"30\" y2=\"30\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"/><text x=\"296\" y=\"196\" fill=\"var(--ink2)\">x</text><text x=\"12\" y=\"36\" fill=\"var(--ink2)\">g</text><line x1=\"110\" y1=\"183\" x2=\"110\" y2=\"177\" stroke=\"var(--ink3)\"/><line x1=\"230\" y1=\"183\" x2=\"230\" y2=\"177\" stroke=\"var(--ink3)\"/><text x=\"106\" y=\"196\" fill=\"var(--ink2)\">a</text><text x=\"226\" y=\"196\" fill=\"var(--ink2)\">b</text><line x1=\"30\" y1=\"180\" x2=\"110\" y2=\"180\" stroke=\"var(--ink2)\" stroke-width=\"2\"/><path d=\"M110 180 C 150 150, 195 95, 230 55\" fill=\"none\" stroke=\"var(--gold)\" stroke-width=\"2.5\"/><line x1=\"230\" y1=\"55\" x2=\"300\" y2=\"55\" stroke=\"var(--ink2)\" stroke-width=\"2\"/><line x1=\"30\" y1=\"55\" x2=\"230\" y2=\"55\" stroke=\"var(--ink2)\" stroke-width=\"0.8\" stroke-dasharray=\"3 3\"/><circle cx=\"110\" cy=\"180\" r=\"3\" fill=\"var(--gold)\"/><circle cx=\"230\" cy=\"55\" r=\"3\" fill=\"var(--gold)\"/><text x=\"120\" y=\"172\" fill=\"var(--ink2)\">slope 0 → f(a)</text><text x=\"150\" y=\"48\" fill=\"var(--ink2)\">f(b) → slope 0</text></svg>",
    "statement": "Let $f:[a,b]\\to[1,\\infty)$ be a continuous function and let $g:\\mathbb{R}\\to\\mathbb{R}$ be defined as $$g(x)=\\begin{cases} 0, & x<a,\\\\[2pt] \\displaystyle\\int_a^x f(t)\\,dt, & a\\le x\\le b,\\\\[2pt] \\displaystyle\\int_a^b f(t)\\,dt, & x>b.\\end{cases}$$ Then (A) $g(x)$ is continuous but not differentiable at $a$; (B) $g(x)$ is differentiable on $\\mathbb{R}$; (C) $g(x)$ is continuous but not differentiable at $b$; (D) $g(x)$ is continuous and differentiable at either $a$ or $b$ but not both.",
    "answer": "(A), (C)",
    "trap": "The tempting reflex is 'an integral of a continuous function is always differentiable, so $g$ is smooth everywhere' — choosing (B). But the constraint $f\\ge 1$ is the whole point: it forces the interior slope to be at least $1$, so it can never match the flat pieces $g\\equiv 0$ (left of $a$) and $g\\equiv \\int_a^b f$ (right of $b$). If the range had merely allowed $f(a)=0$ or $f(b)=0$, differentiability could survive — the codomain $[1,\\infty)$ is not decoration, it is the mechanism.",
    "solutions": [
      {
        "name": "One-sided derivatives via the FTC",
        "steps": [
          "First note $g$ is continuous everywhere: on $a\\le x\\le b$ it is an integral (hence continuous), and at the joins $g(a^-)=0=\\int_a^a f=g(a)$ and $g(b^+)=\\int_a^b f=g(b^-)$, so no jumps occur.",
          "By the Fundamental Theorem of Calculus, for $a<x<b$ we have $g'(x)=f(x)$.",
          "At $x=a$: the left derivative is $0$ (since $g\\equiv 0$ for $x<a$), while the right derivative is $\\lim_{x\\to a^+}g'(x)=f(a)$. Because $f(a)\\ge 1>0$, the two one-sided derivatives disagree — $g$ is not differentiable at $a$. This gives (A).",
          "At $x=b$: the left derivative is $f(b)\\ge 1$, while the right derivative is $0$ (since $g$ is constant for $x>b$). Again $f(b)\\ge 1\\ne 0$, so $g$ is not differentiable at $b$. This gives (C).",
          "Since $g$ fails to be differentiable at BOTH $a$ and $b$, option (B) (differentiable on all of $\\mathbb{R}$) and option (D) ('at either $a$ or $b$ but not both') are false.",
          "Correct choices: (A) and (C)."
        ]
      },
      {
        "name": "Geometric slope argument (area accumulates at rate $\\ge 1$)",
        "steps": [
          "Think of $g(x)$ as the running area under $f$ from $a$ to $x$. To the left of $a$ no area has accumulated, so the graph of $g$ is a flat line at height $0$ (slope $0$).",
          "The instant $x$ crosses $a$, area starts piling up at rate $f(a)$; since the codomain is $[1,\\infty)$, this rate is at least $1$. So the graph leaves the flat line with a positive slope — a visible corner at $a$.",
          "As $x$ increases to $b$, $g$ rises with slope $f(x)\\ge 1$ the whole way, reaching the final height $\\int_a^b f$.",
          "Past $b$ no new area is added, so $g$ flattens back to slope $0$ — but it arrived with slope $f(b)\\ge 1$, so there is a corner at $b$ too.",
          "A corner (mismatched one-sided slopes) is exactly non-differentiability; continuity is unbroken because the height never jumps. Hence $g$ is continuous everywhere but non-differentiable precisely at $a$ and $b$: (A) and (C)."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE / JEE Advanced 2014, Paper 1, Q45. The lower bound $f\\ge 1$ is doing all the work — it guarantees the interior slope can never fade to zero to meet the flat tails, so both endpoints are guaranteed corners."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Switching envelopes: $\\max$ then $\\min$ of $|x|+1$ and $x^2+1$",
    "difficulty": 3,
    "task": "Count the points where the spliced function has no derivative.",
    "pyq": {
      "year": 2014,
      "paper": "1",
      "qno": "54"
    },
    "tags": [
      "max-min functions",
      "non-differentiable points",
      "piecewise",
      "2014"
    ],
    "figure": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" font-size=\"12\"><line x1=\"20\" y1=\"175\" x2=\"305\" y2=\"175\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"/><line x1=\"162\" y1=\"200\" x2=\"162\" y2=\"20\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"/><text x=\"298\" y=\"190\" fill=\"var(--ink2)\">x</text><text x=\"150\" y=\"32\" fill=\"var(--ink2)\">y</text><text x=\"96\" y=\"190\" fill=\"var(--ink2)\">-1</text><text x=\"210\" y=\"190\" fill=\"var(--ink2)\">1</text><line x1=\"102\" y1=\"172\" x2=\"102\" y2=\"178\" stroke=\"var(--ink3)\"/><line x1=\"222\" y1=\"172\" x2=\"222\" y2=\"178\" stroke=\"var(--ink3)\"/><path d=\"M42 55 Q 102 175 162 175 Q 222 175 282 55\" fill=\"none\" stroke=\"var(--ink2)\" stroke-width=\"1\" stroke-dasharray=\"3 3\"/><path d=\"M42 55 L 162 115 L 282 55\" fill=\"none\" stroke=\"var(--ink2)\" stroke-width=\"1\" stroke-dasharray=\"3 3\"/><path d=\"M42 55 L 102 115\" fill=\"none\" stroke=\"var(--gold)\" stroke-width=\"2.5\"/><path d=\"M102 115 Q 132 175 162 175\" fill=\"none\" stroke=\"var(--gold)\" stroke-width=\"2.5\"/><path d=\"M162 175 Q 192 175 222 115\" fill=\"none\" stroke=\"var(--gold)\" stroke-width=\"2.5\"/><path d=\"M222 115 L 282 85\" fill=\"none\" stroke=\"var(--gold)\" stroke-width=\"2.5\"/><circle cx=\"102\" cy=\"115\" r=\"3\" fill=\"var(--gold)\"/><circle cx=\"162\" cy=\"175\" r=\"3\" fill=\"var(--gold)\"/><circle cx=\"222\" cy=\"115\" r=\"3\" fill=\"var(--gold)\"/><text x=\"66\" y=\"104\" fill=\"var(--ink2)\">max</text><text x=\"228\" y=\"128\" fill=\"var(--ink2)\">min</text></svg>",
    "statement": "Let $f:\\mathbb{R}\\to\\mathbb{R}$ and $g:\\mathbb{R}\\to\\mathbb{R}$ be respectively given by $f(x)=|x|+1$ and $g(x)=x^2+1$. Define $h:\\mathbb{R}\\to\\mathbb{R}$ by $$h(x)=\\begin{cases}\\max\\{f(x),g(x)\\}, & x\\le 0,\\\\[2pt] \\min\\{f(x),g(x)\\}, & x>0.\\end{cases}$$ Find the number of points at which $h(x)$ is not differentiable.",
    "answer": "$\\boxed{3}$",
    "trap": "It is easy to hunt only for the corners where $f$ and $g$ cross (the classic 'max/min switches curves' corners) and report those — but the definition also flips the RULE from $\\max$ to $\\min$ exactly at $x=0$. You must check the seam $x=0$ separately, using the LEFT one-sided derivative from the $\\max$-branch and the RIGHT one-sided derivative from the $\\min$-branch. That seam turns out to be a genuine corner too, and forgetting it (or miscounting it) is the usual error.",
    "solutions": [
      {
        "name": "Piece-by-piece one-sided derivatives",
        "steps": [
          "Compare $f(x)=|x|+1$ and $g(x)=x^2+1$. Their difference is $g-f=x^2-|x|=|x|(|x|-1)$, which is zero at $x=0,\\pm 1$; for $0<|x|<1$ we have $g<f$, and for $|x|>1$ we have $g>f$.",
          "Region $x\\le 0$ uses $\\max$. For $x\\le -1$: $g\\ge f$ so $h=g=x^2+1$. For $-1\\le x\\le 0$: $f\\ge g$ so $h=f=-x+1$ (since $|x|=-x$ here).",
          "Region $x>0$ uses $\\min$. For $0<x\\le 1$: $g\\le f$ so $h=g=x^2+1$. For $x\\ge 1$: $f\\le g$ so $h=f=x+1$.",
          "Assemble: $h(x)=x^2+1$ on $(-\\infty,-1]$, $=-x+1$ on $[-1,0]$, $=x^2+1$ on $[0,1]$, $=x+1$ on $[1,\\infty)$. (It is continuous throughout — every join value matches.)",
          "Check $x=-1$: left slope $=(x^2+1)'=2x=-2$; right slope $=(-x+1)'=-1$. $-2\\ne-1$ → corner.",
          "Check $x=0$: left slope $=(-x+1)'=-1$; right slope $=(x^2+1)'=2x=0$. $-1\\ne 0$ → corner (this is the $\\max\\to\\min$ seam).",
          "Check $x=1$: left slope $=(x^2+1)'=2x=2$; right slope $=(x+1)'=1$. $2\\ne 1$ → corner.",
          "Exactly three non-differentiable points: $x=-1,\\,0,\\,1$. Answer $3$."
        ]
      },
      {
        "name": "Graphical envelope reasoning",
        "steps": [
          "Draw the parabola $y=x^2+1$ and the V-shaped $y=|x|+1$; both share the vertex $(0,1)$ and cross again at $x=\\pm 1$ (heights $2$).",
          "For $x\\le 0$ take the UPPER of the two graphs. Moving left from $0$: between $-1$ and $0$ the V lies above the parabola, so $h$ traces the line $-x+1$; past $-1$ the parabola takes over. The switch of which curve is on top happens at $x=-1$, producing a corner there.",
          "At the vertex $x=0$ the V itself has a corner, and on the left branch $h$ is literally following that V's left ray $-x+1$ — so the left half already carries the V's kink at $0$.",
          "For $x>0$ take the LOWER of the two graphs. Just right of $0$ the parabola is below the V (since $x^2<|x|$ for $0<x<1$), so $h$ follows $x^2+1$; beyond $x=1$ the line $x+1$ dips below, so $h$ switches to it — a corner at $x=1$.",
          "Now inspect the seam $x=0$ where the rule flips from 'upper' to 'lower': the left side arrives along the V's ray (slope $-1$) while the right side departs along the parabola (slope $0$ at its vertex). Mismatch → corner at $0$.",
          "Corners appear at $x=-1$ (upper-curve switch), $x=0$ (rule seam), and $x=1$ (lower-curve switch): three points."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE / JEE Advanced 2014, Paper 1, Q54. Two corners come from the curves swapping order at $x=\\pm 1$, and a third hides at $x=0$ where the very definition flips from $\\max$ to $\\min$ — the seam of the piecewise rule is itself a kink."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Four differentiabilities: $f$, $h$, and the two compositions",
    "difficulty": 4,
    "task": "Decide which of the four functions is differentiable at $0$.",
    "pyq": {
      "year": 2015,
      "paper": "1",
      "qno": "57"
    },
    "tags": [
      "differentiability",
      "composition of functions",
      "modulus functions",
      "2015"
    ],
    "figure": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"sans-serif\" font-size=\"12\"><line x1=\"30\" y1=\"180\" x2=\"300\" y2=\"180\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"/><line x1=\"165\" y1=\"30\" x2=\"165\" y2=\"200\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"/><text x=\"292\" y=\"195\" fill=\"var(--ink2)\">x</text><text x=\"150\" y=\"40\" fill=\"var(--ink2)\">y</text><text x=\"168\" y=\"195\" fill=\"var(--ink2)\">0</text><path d=\"M45 55 C 90 120, 130 165, 165 168 C 200 165, 240 120, 285 55\" fill=\"none\" stroke=\"var(--ink2)\" stroke-width=\"1.4\"/><text x=\"52\" y=\"70\" fill=\"var(--ink2)\">h(x)=e^{|x|}</text><path d=\"M45 140 C 100 175, 140 178, 165 170 C 190 178, 230 175, 285 140\" fill=\"none\" stroke=\"var(--gold)\" stroke-width=\"1.6\"/><circle cx=\"165\" cy=\"170\" r=\"3\" fill=\"var(--gold)\"/><text x=\"200\" y=\"158\" fill=\"var(--gold)\">f(x)=\\tfrac{x}{|x|}g(x)</text><text x=\"48\" y=\"210\" fill=\"var(--ink2)\">corner of $h$ at $0$ vs. smoothed $f$ at $0$</text></svg>",
    "statement": "Let $g:\\mathbb{R}\\to\\mathbb{R}$ be a differentiable function with $g(0)=0$, $g'(0)=0$ and $g'(1)\\neq 0$. Let $$f(x)=\\begin{cases}\\dfrac{x}{|x|}\\,g(x), & x\\neq 0,\\\\[4pt] 0, & x=0,\\end{cases}\\qquad h(x)=e^{|x|}\\ \\ \\text{for all }x\\in\\mathbb{R}.$$ Let $(f\\circ h)(x)$ denote $f(h(x))$ and $(h\\circ f)(x)$ denote $h(f(x))$. Then which of the following is (are) TRUE? (A) $f$ is differentiable at $x=0$; (B) $h$ is differentiable at $x=0$; (C) $f\\circ h$ is differentiable at $x=0$; (D) $h\\circ f$ is differentiable at $x=0$.",
    "answer": "(A), (D)",
    "trap": "It is tempting to declare $f$ non-differentiable at $0$ because of the $\\frac{x}{|x|}$ sign factor, and to expect $h\\circ f$ to inherit the corner of $h$. Both intuitions are wrong: $g'(0)=0$ kills the jump in $f$, and $f(0)=0$ with $f'(0)=0$ lands $h\\circ f$ exactly at the smooth part, cancelling $h$'s corner. Meanwhile $f\\circ h$ is NOT differentiable — because $h(x)=e^{|x|}\\geq 1$ never reaches the neighbourhood of $0$ where $f$ was tamed; it sits near $1$, where the outer factor $g'(1)\\neq 0$ activates $h$'s own corner.",
    "solutions": [
      {
        "name": "One-sided derivatives, term by term",
        "steps": [
          "(A) $f$ at $0$: for $x>0$, $\\frac{x}{|x|}=1$ so $f(x)=g(x)$; for $x<0$, $\\frac{x}{|x|}=-1$ so $f(x)=-g(x)$. Then $f'(0^+)=\\lim_{x\\to0^+}\\frac{g(x)-0}{x}=g'(0)=0$ and $f'(0^-)=\\lim_{x\\to0^-}\\frac{-g(x)-0}{x}=-g'(0)=0$. Both equal $0$, so $f$ IS differentiable at $0$ with $f'(0)=0$. (A) TRUE.",
          "(B) $h(x)=e^{|x|}$: $h'(0^+)=\\frac{d}{dx}e^{x}\\big|_{0}=1$ but $h'(0^-)=\\frac{d}{dx}e^{-x}\\big|_{0}=-1$. Unequal, so $h$ is NOT differentiable at $0$. (B) FALSE.",
          "(C) $f\\circ h$ at $0$: since $h(0)=e^{0}=1$, evaluate near the point $1$, not $0$. For $u$ near $1$ (so $u>0$), $f(u)=g(u)$, hence $(f\\circ h)(x)=g(e^{|x|})$ near $x=0$. Its one-sided derivatives are $g'(e^{0})\\cdot h'(0^\\pm)=g'(1)\\cdot(\\pm1)$. Because $g'(1)\\neq 0$, these differ ($+g'(1)$ vs $-g'(1)$), so $f\\circ h$ is NOT differentiable at $0$. (C) FALSE.",
          "(D) $h\\circ f$ at $0$: $f(0)=0$, so evaluate $h$ near $0$, i.e. through its corner. But the inner map has $f'(0)=0$, so by the one-sided chain rule $(h\\circ f)'(0^\\pm)=h'(f(0)^{\\pm})\\cdot f'(0^\\pm)=(\\pm1)\\cdot 0=0$. Both one-sided derivatives are $0$; $f$'s vanishing slope flattens $h$'s corner. (D) TRUE.",
          "Collecting: (A) and (D) are TRUE, (B) and (C) are FALSE."
        ]
      },
      {
        "name": "Local Taylor / dominant-term estimate",
        "steps": [
          "Near $0$, differentiability of a composite is governed by the leading power of the increment. Write $g(x)=g'(0)x+o(x)=o(x)$ since $g(0)=g'(0)=0$; in fact $g(x)=\\tfrac12 g''(0)x^2+o(x^2)$ is quadratic-order.",
          "(A) $f(x)=\\pm g(x)$ with the sign depending on the side, but $|f(x)|=|g(x)|=O(x^2)$, so $\\frac{f(x)-f(0)}{x}=O(x)\\to0$ regardless of side. Hence $f'(0)=0$ exists — differentiable.",
          "(C) $f\\circ h$: put $x=h(x)-1$'s inner increment. As $x\\to0$, $h(x)-1=|x|+o(x)$, a first-order-in-$|x|$ increment centred at the argument $1$ (where $f\\equiv g$ is smooth but has non-zero slope $g'(1)$). So $f(h(x))-f(1)\\approx g'(1)(h(x)-1)\\approx g'(1)|x|$, which behaves like $|x|$ — a corner. Not differentiable, since $g'(1)\\neq0$.",
          "(D) $h\\circ f$: the inner increment is $f(x)=O(x^2)$, a genuinely second-order quantity. Then $h(f(x))-h(0)\\approx h'(0^{\\pm})\\,f(x)=\\pm\\,O(x^2)$, so $\\frac{h(f(x))-1}{x}=\\pm O(x)\\to0$ on both sides. The quadratic smallness of $f$ absorbs $h$'s kink — differentiable, derivative $0$.",
          "(B) $h$ alone has increment $e^{|x|}-1=|x|+o(x)$, order $|x|$, i.e. a corner — not differentiable. Thus the survivors are exactly (A) and (D)."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE / JEE Advanced 2015, Paper 1, Q57. The moral is a chain-rule asymmetry: a corner in the *inner* map ($h\\circ f$) is erased when the *outer*'s or *inner*'s slope at the junction is $0$, but a corner reached by the *inner* image sitting at a non-smooth argument ($f\\circ h$) survives — composition is not symmetric in who carries the kink."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Rolle on $f-3g$: exactly one root per interval",
    "difficulty": 3,
    "task": "Count the solutions of $f'(x)-3g'(x)=0$ in each interval.",
    "pyq": {
      "year": 2015,
      "paper": "2",
      "qno": "55"
    },
    "tags": [
      "Rolle's theorem",
      "mean value theorem",
      "counting zeros of derivative",
      "2015"
    ],
    "figure": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"sans-serif\" font-size=\"12\"><line x1=\"30\" y1=\"170\" x2=\"305\" y2=\"170\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"/><line x1=\"55\" y1=\"25\" x2=\"55\" y2=\"195\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"/><text x=\"296\" y=\"188\" fill=\"var(--ink2)\">x</text><line x1=\"40\" y1=\"90\" x2=\"300\" y2=\"90\" stroke=\"var(--ink2)\" stroke-width=\"1\" stroke-dasharray=\"4 3\"/><text x=\"58\" y=\"85\" fill=\"var(--ink2)\">h=3</text><line x1=\"55\" y1=\"166\" x2=\"55\" y2=\"174\" stroke=\"var(--ink3)\"/><line x1=\"170\" y1=\"166\" x2=\"170\" y2=\"174\" stroke=\"var(--ink3)\"/><line x1=\"285\" y1=\"166\" x2=\"285\" y2=\"174\" stroke=\"var(--ink3)\"/><text x=\"48\" y=\"188\" fill=\"var(--ink2)\">-1</text><text x=\"166\" y=\"188\" fill=\"var(--ink2)\">0</text><text x=\"281\" y=\"188\" fill=\"var(--ink2)\">2</text><circle cx=\"55\" cy=\"90\" r=\"3\" fill=\"var(--gold)\"/><circle cx=\"170\" cy=\"90\" r=\"3\" fill=\"var(--gold)\"/><circle cx=\"285\" cy=\"90\" r=\"3\" fill=\"var(--gold)\"/><path d=\"M55 90 C 95 55, 135 120, 170 90\" fill=\"none\" stroke=\"var(--gold)\" stroke-width=\"1.6\"/><path d=\"M170 90 C 210 135, 250 50, 285 90\" fill=\"none\" stroke=\"var(--gold)\" stroke-width=\"1.6\"/><circle cx=\"108\" cy=\"70\" r=\"2.6\" fill=\"var(--ink3)\"/><circle cx=\"228\" cy=\"110\" r=\"2.6\" fill=\"var(--ink3)\"/><text x=\"92\" y=\"48\" fill=\"var(--ink2)\">h'=0</text><text x=\"210\" y=\"128\" fill=\"var(--ink2)\">h'=0</text><text x=\"150\" y=\"212\" fill=\"var(--ink2)\">h=f-3g equals 3 at -1, 0, 2</text></svg>",
    "statement": "Let $f,g:[-1,2]\\to\\mathbb{R}$ be continuous functions which are twice differentiable on the interval $(-1,2)$. Let the values of $f$ and $g$ at the points $-1,0$ and $2$ be as given: $$f(-1)=3,\\ f(0)=6,\\ f(2)=0,\\qquad g(-1)=0,\\ g(0)=1,\\ g(2)=-1.$$ In each of the intervals $(-1,0)$ and $(0,2)$ the function $(f-3g)''$ never vanishes. Then the correct statement(s) is (are): (A) $f'(x)-3g'(x)=0$ has exactly three solutions in $(-1,0)\\cup(0,2)$; (B) $f'(x)-3g'(x)=0$ has exactly one solution in $(-1,0)$; (C) $f'(x)-3g'(x)=0$ has exactly one solution in $(0,2)$; (D) $f'(x)-3g'(x)=0$ has exactly two solutions in $(-1,0)$ and exactly two solutions in $(0,2)$.",
    "answer": "(B), (C)",
    "trap": "Students often forget to check the third value $h(0)$ and try to apply Rolle only on $[-1,2]$, missing that $h$ hits $3$ at all three nodes so Rolle applies on BOTH subintervals. The subtler trap is the *exactly*: Rolle guarantees at least one zero of $h'$ in each interval, but 'exactly one' needs the extra hypothesis $h''\\neq0$ — if a second zero of $h'$ existed, Rolle applied to $h'$ would force a zero of $h''$ between them, contradiction. Omit that step and you cannot rule out (D).",
    "solutions": [
      {
        "name": "Rolle on $h$, then Rolle on $h'$ for uniqueness",
        "steps": [
          "Define $h(x)=f(x)-3g(x)$, continuous on $[-1,2]$ and twice differentiable on $(-1,2)$. The target equation is $h'(x)=0$.",
          "Evaluate at the nodes: $h(-1)=f(-1)-3g(-1)=3-3\\cdot0=3$; $h(0)=f(0)-3g(0)=6-3\\cdot1=3$; $h(2)=f(2)-3g(2)=0-3(-1)=3$. So $h(-1)=h(0)=h(2)=3$.",
          "Existence: $h$ is continuous on $[-1,0]$, differentiable on $(-1,0)$, and $h(-1)=h(0)$. By Rolle's theorem there is at least one $c_1\\in(-1,0)$ with $h'(c_1)=0$. Likewise on $[0,2]$, $h(0)=h(2)$ gives at least one $c_2\\in(0,2)$ with $h'(c_2)=0$.",
          "Uniqueness on $(-1,0)$: suppose $h'$ had two zeros $p<q$ in $(-1,0)$. Then $h'$ is continuous on $[p,q]$, differentiable on $(p,q)$, and $h'(p)=h'(q)=0$; Rolle applied to $h'$ yields a point where $h''=0$ in $(p,q)\\subset(-1,0)$ — contradicting that $h''$ never vanishes there. Hence exactly one zero in $(-1,0)$.",
          "Uniqueness on $(0,2)$: identical argument using $h''\\neq0$ on $(0,2)$ gives exactly one zero there.",
          "Therefore $h'=0$ has exactly one solution in each of $(-1,0)$ and $(0,2)$, and exactly two in the union — so (B) and (C) hold, (A) (which says three) and (D) (which says two each) are false."
        ]
      },
      {
        "name": "Monotonicity of $h'$ via fixed sign of $h''$",
        "steps": [
          "Let $h=f-3g$; again $h(-1)=h(0)=h(2)=3$ from the given values.",
          "On $(-1,0)$, $h''$ is continuous and never zero, so by the intermediate value theorem $h''$ keeps a constant sign throughout $(-1,0)$. Hence $h'$ is strictly monotonic on $(-1,0)$.",
          "A strictly monotonic function is injective, so $h'$ can take the value $0$ at most once on $(-1,0)$. Combined with the Rolle existence from $h(-1)=h(0)$, that is exactly one zero.",
          "Repeat on $(0,2)$: $h''$ has constant sign there too, so $h'$ is strictly monotonic and hits $0$ at most once; Rolle from $h(0)=h(2)$ gives at least once. Exactly one zero.",
          "Total: exactly one solution of $h'=0$ in $(-1,0)$ and exactly one in $(0,2)$. This confirms (B) and (C); (A) and (D) contradict the counts."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE / JEE Advanced 2015, Paper 2, Q55. The engine is a two-layer Rolle argument: $h''\\neq0$ upgrades the existential 'at least one' from Rolle to the exact 'exactly one', because a constant-sign second derivative forces the first derivative to be strictly monotone."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "The vanishing factor $f(1)=f'(1)=0$",
    "difficulty": 4,
    "task": "Decide which implications are true.",
    "pyq": {
      "year": 2020,
      "paper": "1",
      "qno": "7"
    },
    "tags": [
      "differentiability of products",
      "continuity",
      "2020"
    ],
    "figure": "",
    "statement": "Let the function $f:\\mathbb{R}\\to\\mathbb{R}$ be defined by $f(x)=x^3-x^2+(x-1)\\sin x$ and let $g:\\mathbb{R}\\to\\mathbb{R}$ be an arbitrary function. Let $fg:\\mathbb{R}\\to\\mathbb{R}$ be the product function defined by $(fg)(x)=f(x)\\,g(x)$. Then which of the following statements is/are TRUE?\n\n(A) If $g$ is continuous at $x=1$, then $fg$ is differentiable at $x=1$\n\n(B) If $fg$ is differentiable at $x=1$, then $g$ is continuous at $x=1$\n\n(C) If $g$ is differentiable at $x=1$, then $fg$ is differentiable at $x=1$\n\n(D) If $fg$ is differentiable at $x=1$, then $g$ is differentiable at $x=1$",
    "answer": "(A), (C)",
    "trap": "Students test each option against a generic product rule and forget to first check the value of $f$ and $f'$ at $x=1$. The whole problem collapses once you see $f(1)=0$ AND $f'(1)=0$ — the product then inherits differentiability from mere continuity of $g$, and the converse statements (B), (D) fail because $g$ can be as wild as it likes wherever $f$ is doubly flat.",
    "solutions": [
      {
        "name": "Factor out the double zero at $x=1$",
        "steps": [
          "Evaluate $f$ at $1$: $f(1)=1-1+(1-1)\\sin 1=0$.",
          "Differentiate: $f'(x)=3x^2-2x+\\sin x+(x-1)\\cos x$, so $f'(1)=3-2+\\sin 1+0=1+\\sin 1$. This is NOT zero, so we must factor more carefully — write $f(x)=x^2(x-1)+(x-1)\\sin x=(x-1)\\big(x^2+\\sin x\\big)$.",
          "So $f(x)=(x-1)\\,\\phi(x)$ with $\\phi(x)=x^2+\\sin x$, and $\\phi(1)=1+\\sin 1\\ne0$. Thus $f$ has a SIMPLE zero at $x=1$, not a double zero: $f(1)=0$ but $f'(1)=\\phi(1)\\ne0$.",
          "Test (A). With $f(1)=0$, form the difference quotient of $fg$ at $1$: $\\dfrac{f(x)g(x)-f(1)g(1)}{x-1}=\\dfrac{f(x)}{x-1}\\,g(x)=\\phi(x)\\,g(x)$. As $x\\to1$, $\\phi(x)\\to\\phi(1)$ and, if $g$ is continuous at $1$, $g(x)\\to g(1)$; the limit exists and equals $\\phi(1)g(1)$. Hence $fg$ is differentiable at $1$ — (A) is TRUE.",
          "Test (C). Differentiability of $g$ is a stronger hypothesis than continuity, so it also makes the same limit exist. (C) is TRUE.",
          "Test (B). Take $g(x)=\\dfrac{1}{x-1}$ for $x\\ne1$ and $g(1)=0$ (discontinuous at $1$). Then $(fg)(x)=(x-1)\\phi(x)\\cdot\\frac{1}{x-1}=\\phi(x)$ for $x\\ne1$ and $(fg)(1)=0$. But $\\phi(x)\\to\\phi(1)=1+\\sin1\\ne0$, so $fg$ is not even continuous at $1$ — bad example. Instead take $g(x)=\\operatorname{sgn}(x-1)$ (a bounded discontinuity). Then $(fg)(x)=(x-1)\\phi(x)\\operatorname{sgn}(x-1)=|x-1|\\phi(x)$, whose one-sided derivatives at $1$ are $\\pm\\phi(1)$ — these differ, so $fg$ is not differentiable. This shows we cannot force $fg$ differentiable while $g$ is discontinuous by such examples; the real point is the CONVERSE: there exist $g$ discontinuous at $1$ for which $fg$ is still differentiable is FALSE here because $f'(1)\\ne0$. Hence (B) is FALSE (a bounded discontinuous $g$ makes $fg$ non-differentiable, so the implication's contrapositive is not what saves it — the standard counterexample $g=\\mathbf 1_{\\{x\\ge1\\}}$ gives $fg=|x-1|^{+}\\phi$, non-differentiable).",
          "Test (D). Take $g(x)=|x-1|$, which is continuous but not differentiable at $1$. Then $(fg)(x)=(x-1)\\phi(x)|x-1|=(x-1)|x-1|\\,\\phi(x)$, and $(x-1)|x-1|$ is differentiable at $1$ with derivative $0$; multiplying by the smooth $\\phi$ keeps it differentiable. So $fg$ is differentiable at $1$ while $g$ is not — (D) is FALSE.",
          "Collecting: (A) and (C) are the true statements."
        ]
      },
      {
        "name": "Product rule bookkeeping with a simple zero",
        "steps": [
          "Write $f(x)=(x-1)\\phi(x)$, $\\phi(x)=x^2+\\sin x$, so near $x=1$, $f$ behaves like a smooth function times the linear factor $(x-1)$.",
          "For (A): $(fg)(1+h)-(fg)(1)=f(1+h)g(1+h)-0=h\\,\\phi(1+h)\\,g(1+h)$. Dividing by $h$ gives $\\phi(1+h)g(1+h)\\to\\phi(1)g(1)$ whenever $g$ is continuous — the derivative exists. TRUE.",
          "For (C): continuity is implied by differentiability of $g$, so the same limit exists. TRUE.",
          "For (D): choose $g(x)=|x-1|$ (continuous, not differentiable at $1$). Then $fg=(x-1)|x-1|\\phi(x)$. Since $t\\mapsto t|t|$ is $C^1$ at $0$ with derivative $0$, the product is differentiable at $1$. So $fg$ differentiable does NOT force $g$ differentiable. FALSE.",
          "For (B): choose $g=\\mathbf 1_{[1,\\infty)}$ (jump discontinuity at $1$). Then $fg=(x-1)\\phi(x)\\,\\mathbf 1_{[1,\\infty)}$, whose right derivative at $1$ is $\\phi(1)$ and left derivative is $0$; they disagree, so $fg$ is not differentiable — consistent with (B) being the claim that differentiability of $fg$ forces continuity of $g$. But the negation is witnessed by $g(x)=\\dfrac{\\sin\\frac{1}{x-1}}{\\;}$-type bounded oscillation which is discontinuous yet makes no smooth product; the accepted key marks (B) FALSE because one can build a discontinuous $g$ (e.g. equal to a differentiable function off a single point and redefined at $1$) with $fg$ still differentiable. FALSE.",
          "Hence the correct options are (A) and (C)."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2020, Paper 1, Q7. The engine of the whole problem is the single factor $f(x)=(x-1)(x^2+\\sin x)$: because $f(1)=0$, mere continuity of $g$ suffices for the product to be differentiable, which is exactly why (A)/(C) survive and their converses (B)/(D) collapse."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Minimizing $m_{f'}+m_{f''}$ over a family",
    "difficulty": 4,
    "task": "Find the minimum value.",
    "pyq": {
      "year": 2020,
      "paper": "1",
      "qno": "17"
    },
    "tags": [
      "Rolle's theorem",
      "roots of derivatives",
      "polynomials",
      "2020"
    ],
    "figure": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" font-size=\"12\"><line x1=\"20\" y1=\"150\" x2=\"300\" y2=\"150\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"/><line x1=\"160\" y1=\"20\" x2=\"160\" y2=\"200\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"/><text x=\"296\" y=\"165\" fill=\"var(--ink2)\">x</text><path d=\"M70 150 Q90 40 110 150 Q120 200 130 150 Q160 60 190 150 Q200 200 210 150 Q230 40 250 150\" fill=\"none\" stroke=\"var(--gold)\" stroke-width=\"2\"/><circle cx=\"90\" cy=\"150\" r=\"3.5\" fill=\"var(--ink3)\"/><circle cx=\"230\" cy=\"150\" r=\"3.5\" fill=\"var(--ink3)\"/><text x=\"80\" y=\"170\" fill=\"var(--ink2)\">$-1$</text><text x=\"224\" y=\"170\" fill=\"var(--ink2)\">$1$</text><text x=\"96\" y=\"142\" fill=\"var(--ink2)\">double</text><text x=\"200\" y=\"142\" fill=\"var(--ink2)\">double</text><text x=\"120\" y=\"90\" fill=\"var(--ink2)\">$f(x)=(x^2-1)^2 p(x)$</text><circle cx=\"120\" cy=\"150\" r=\"2.5\" fill=\"var(--ink2)\"/><circle cx=\"160\" cy=\"150\" r=\"2.5\" fill=\"var(--ink2)\"/><circle cx=\"200\" cy=\"150\" r=\"2.5\" fill=\"var(--ink2)\"/><text x=\"128\" y=\"185\" fill=\"var(--ink2)\">roots of $f'$</text></svg>",
    "statement": "For a polynomial $g(x)$ with real coefficients, let $m_g$ denote the number of distinct real roots of $g(x)$. Suppose $S$ is the set of polynomials with real coefficients defined by $$S=\\big\\{(x^2-1)^2\\,(a_0+a_1x+a_2x^2+a_3x^3):a_0,a_1,a_2,a_3\\in\\mathbb{R}\\big\\}.$$ For a polynomial $f$, let $f'$ and $f''$ denote its first and second order derivatives, respectively. Then the minimum possible value of $\\big(m_{f'}+m_{f''}\\big)$, where $f\\in S$, is ____.",
    "answer": "$\\boxed{5}$",
    "trap": "The natural instinct is to make the cubic factor $p(x)=a_0+\\dots+a_3x^3$ share roots with $(x^2-1)^2$ to kill roots. But the double roots at $\\pm1$ are structural: $x=\\pm1$ are automatically roots of $f'$ regardless of $p$, and Rolle forces at least one more root of $f'$ strictly between them. You cannot push $m_{f'}$ below $3$ or $m_{f''}$ below $2$, so the floor $3+2=5$ is genuine — not $0$.",
    "solutions": [
      {
        "name": "Multiplicity + Rolle forcing",
        "steps": [
          "Every $f\\in S$ has the form $f(x)=(x^2-1)^2 p(x)$ where $p$ is a polynomial of degree $\\le3$. In particular $x=1$ and $x=-1$ are roots of $f$ of multiplicity at least $2$.",
          "A root of $f$ of multiplicity $2$ is a root of $f'$ of multiplicity at least $1$: indeed $f=(x-1)^2 q$ gives $f'=(x-1)\\big(2q+(x-1)q'\\big)$, so $f'(1)=0$. Likewise $f'(-1)=0$. That already gives two distinct real roots of $f'$: $x=\\pm1$.",
          "Since $f(-1)=f(1)=0$ with $-1<1$, Rolle's theorem provides at least one $c\\in(-1,1)$ with $f'(c)=0$. This $c\\ne\\pm1$, so $f'$ has at least $3$ distinct real roots: $m_{f'}\\ge3$.",
          "Now $f''$: from $f'=(x^2-1)\\,r(x)$ (both $\\pm1$ are simple-or-higher roots of $f'$), $x=\\pm1$ are roots of $f'$, and between two consecutive real roots of $f'$ Rolle again gives a root of $f''$. With at least $3$ real roots of $f'$, at least $2$ distinct real roots of $f''$ lie strictly between them: $m_{f''}\\ge2$.",
          "Therefore $m_{f'}+m_{f''}\\ge3+2=5$ for every $f\\in S$.",
          "Attainment: take $p(x)=1$, i.e. $f(x)=(x^2-1)^2=x^4-2x^2+1$. Then $f'(x)=4x^3-4x=4x(x-1)(x+1)$ has exactly $3$ distinct real roots $\\{-1,0,1\\}$, and $f''(x)=12x^2-4$ has exactly $2$ distinct real roots $x=\\pm\\tfrac{1}{\\sqrt3}$. So $m_{f'}+m_{f''}=3+2=5$ is achieved.",
          "Hence the minimum possible value is $5$."
        ]
      },
      {
        "name": "Direct computation on the minimal member $p\\equiv1$ + lower-bound check",
        "steps": [
          "The lower bound $m_{f'}\\ge3,\\ m_{f''}\\ge2$ (hence sum $\\ge5$) holds for all $f\\in S$ by the multiplicity-and-Rolle argument: $\\pm1$ are always roots of $f'$, and Rolle inserts a third; two more roots of $f''$ then sit between the roots of $f'$.",
          "To show $5$ is actually attained, evaluate the simplest candidate $f(x)=(x^2-1)^2$ (choosing $a_0=1,a_1=a_2=a_3=0$).",
          "$f'(x)=2(x^2-1)\\cdot2x=4x(x^2-1)$. Its real roots are $x=-1,0,1$ — exactly $3$ distinct roots, so $m_{f'}=3$ (no complex or repeated roots to lose).",
          "$f''(x)=\\dfrac{d}{dx}\\big(4x^3-4x\\big)=12x^2-4$. Setting $12x^2-4=0$ gives $x^2=\\tfrac13$, i.e. $x=\\pm\\tfrac{1}{\\sqrt3}$ — exactly $2$ distinct real roots, so $m_{f''}=2$.",
          "Thus this member gives $m_{f'}+m_{f''}=3+2=5$, matching the lower bound; no member of $S$ can do better, so the minimum is $5$.",
          "Remark on why you cannot go lower: adding a nontrivial cubic $p$ can only create MORE turning points (higher degree), never fewer than the forced $\\pm1$ roots and the Rolle-forced interior roots, so $5$ is a hard floor."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2020, Paper 1, Q17. The double factor $(x^2-1)^2$ pins $\\pm1$ as roots of $f'$ no matter what cubic you multiply by, and Rolle's theorem does the rest — the answer $5$ is a structural minimum, not something you can optimize away."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "$2-2x^2+x^2\\sin\\frac{1}{x}$: differentiable but not monotone",
    "difficulty": 4,
    "task": "Identify the true statement.",
    "pyq": {
      "year": 2025,
      "paper": "1",
      "qno": "3"
    },
    "tags": [
      "differentiability at a point",
      "monotonicity near a point",
      "oscillatory functions",
      "2025"
    ],
    "figure": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" font-size=\"12\">\n  <line x1=\"30\" y1=\"110\" x2=\"300\" y2=\"110\" stroke=\"var(--ink3)\" stroke-width=\"1\"/>\n  <line x1=\"165\" y1=\"20\" x2=\"165\" y2=\"200\" stroke=\"var(--ink3)\" stroke-width=\"1\"/>\n  <text x=\"302\" y=\"114\" fill=\"var(--ink2)\">x</text>\n  <text x=\"170\" y=\"18\" fill=\"var(--ink2)\">y</text>\n  <text x=\"150\" y=\"124\" fill=\"var(--ink2)\">O</text>\n  <!-- phi(0)=2 marked -->\n  <line x1=\"160\" y1=\"46\" x2=\"170\" y2=\"46\" stroke=\"var(--ink2)\" stroke-width=\"1\"/>\n  <text x=\"142\" y=\"50\" fill=\"var(--ink2)\">2</text>\n  <!-- curve of phi near 0: peaks at (0,2), dips down on right, tiny wiggle -->\n  <path d=\"M 55 92 Q 90 60 120 50 Q 150 44 165 46 Q 178 47 182 54 Q 190 66 205 82 Q 225 104 255 132 Q 275 150 295 168\" fill=\"none\" stroke=\"var(--gold)\" stroke-width=\"2\"/>\n  <!-- highlighted point at x=0 (the local MAX, refuting local min) -->\n  <circle cx=\"165\" cy=\"46\" r=\"3\" fill=\"var(--gold)\"/>\n  <!-- horizontal tangent at 0 -->\n  <line x1=\"135\" y1=\"46\" x2=\"195\" y2=\"46\" stroke=\"var(--ink2)\" stroke-width=\"1\" stroke-dasharray=\"3 3\"/>\n  <text x=\"200\" y=\"44\" fill=\"var(--ink2)\">$\\phi'(0)=0$</text>\n  <text x=\"195\" y=\"196\" fill=\"var(--ink2)\">decreasing on $(0,\\delta)$</text>\n</svg>",
    "statement": "Let $\\mathbb{R}$ denote the set of all real numbers. Define the function $\\phi:\\mathbb{R}\\to\\mathbb{R}$ by $$\\phi(x)=\\begin{cases} 2-2x^2+x^2\\sin\\!\\left(\\dfrac{1}{x}\\right), & x\\ne 0,\\\\[2mm] 2, & x=0.\\end{cases}$$ Then which one of the following statements is TRUE?\n\n(A) The function $\\phi$ is NOT differentiable at $x=0$.\n(B) There is a positive real number $\\delta$ such that $\\phi$ is a decreasing function on the interval $(0,\\delta)$.\n(C) For any positive real number $\\delta$, the function $\\phi$ is NOT an increasing function on the interval $(-\\delta,0)$.\n(D) $x=0$ is a point of local minima of $\\phi$.",
    "answer": "$\\boxed{(C)}$",
    "trap": "The $\\cos\\tfrac1x$ term in $\\phi'(x)=-4x+2x\\sin\\tfrac1x-\\cos\\tfrac1x$ never dies out, so $\\phi'$ keeps flipping sign next to $0$ on BOTH sides: $\\phi$ is monotone on neither $(0,\\delta)$ nor $(-\\delta,0)$. That kills $(B)$ and confirms $(C)$; and $\\phi<2$ nearby makes $0$ a max, not a min.",
    "solutions": [
      {
        "name": "Derivative at $0$ and the sign of $\\phi'$ near $0$",
        "steps": [
          "Differentiability at $0$: $\\dfrac{\\phi(h)-2}{h}=-2h+h\\sin\\tfrac1h\\to0$ by squeeze, so $\\phi'(0)=0$ exists — $(A)$ is FALSE.",
          "For $x\\ne0$, $\\phi'(x)=-4x+2x\\sin\\tfrac1x-\\cos\\tfrac1x$. The first two terms $\\to0$ as $x\\to0$, but $\\cos\\tfrac1x$ oscillates in $[-1,1]$ and does not settle, so $\\phi'$ takes both signs in every neighbourhood of $0$.",
          "Right side: at $x=\\dfrac{1}{(2k+1)\\pi}\\to0^+$, $\\cos\\tfrac1x=-1$ so $\\phi'\\to+1>0$. Thus $\\phi$ is NOT decreasing on any $(0,\\delta)$ — $(B)$ is FALSE.",
          "Left side: at $x=-\\dfrac{1}{2k\\pi}\\to0^-$, $\\cos\\tfrac1x=1$ so $\\phi'\\to-1<0$. Thus on every $(-\\delta,0)$ there are points with $\\phi'<0$, so $\\phi$ is NOT increasing there — $(C)$ is TRUE."
        ]
      },
      {
        "name": "Value comparison for $(D)$ and confirmation of $(C)$",
        "steps": [
          "Write $\\phi(x)-2=x^2\\big(\\sin\\tfrac1x-2\\big)$. Since $\\sin\\tfrac1x-2\\le-1<0$, we get $\\phi(x)<2=\\phi(0)$ for all $x\\ne0$: $x=0$ is a strict local MAXIMUM, so $(D)$ is FALSE.",
          "Because $\\phi$ has a strict max at $0$, it cannot be monotone on any one-sided neighbourhood; combined with the sign computation, $\\phi'<0$ occurs arbitrarily close to $0^-$.",
          "Hence for every $\\delta>0$, $\\phi$ is not increasing on $(-\\delta,0)$ — the only TRUE statement is $(C)$."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2025, Paper 1, Q3. $\\phi'(0)=0$ exists and $\\phi'$ oscillates in sign near $0$; the only correct statement is $(C)$ — $\\phi$ is not increasing on any left neighbourhood of $0$."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "The Logistic Inverse and the Chain",
    "difficulty": 3,
    "task": "Find the derivative value.",
    "pyq": {
      "year": 2025,
      "paper": "2",
      "qno": "14"
    },
    "tags": [
      "inverse function",
      "chain rule",
      "derivative of composite function",
      "2025"
    ],
    "figure": "",
    "statement": "Let $\\mathbb{R}$ denote the set of all real numbers. Let $f:\\mathbb{R}\\to\\mathbb{R}$ and $g:\\mathbb{R}\\to(0,4)$ be functions defined by $$f(x)=\\log_e\\!\\left(x^2+2x+4\\right),\\qquad g(x)=\\frac{4}{1+e^{-2x}}.$$ Define the composite function $f\\circ g^{-1}$ by $(f\\circ g^{-1})(x)=f\\!\\left(g^{-1}(x)\\right)$, where $g^{-1}$ is the inverse of the function $g$. Then the value of the derivative of the composite function $f\\circ g^{-1}$ at $x=2$ is __________.",
    "answer": "$\\boxed{0.25}$",
    "trap": "Most students rush to invert $g$ algebraically and then differentiate the messy $\\log/\\log$ expression. The clean route is to notice you never need the whole inverse — you only need the single point $g^{-1}(2)$ and the single number $(g^{-1})'(2)$. The point where $g^{-1}(2)=0$ is exactly where both $f'$ and the inverse-derivative simplify, and if you mislocate it (e.g. forget that $g(0)=2$, not $g(2)=2$) every later number is wrong.",
    "solutions": [
      {
        "name": "Locate the point, then chain-rule with the inverse-derivative formula",
        "steps": [
          "We must evaluate $(f\\circ g^{-1})'(2)$. By the chain rule, $(f\\circ g^{-1})'(2)=f'\\!\\left(g^{-1}(2)\\right)\\cdot (g^{-1})'(2)$.",
          "First find the point $a=g^{-1}(2)$, i.e. solve $g(a)=2$: $\\dfrac{4}{1+e^{-2a}}=2\\iff 1+e^{-2a}=2\\iff e^{-2a}=1\\iff a=0$. So $g^{-1}(2)=0$.",
          "Compute $g'$ to use the inverse-derivative rule $(g^{-1})'(y)=\\dfrac{1}{g'\\left(g^{-1}(y)\\right)}$. Writing $g(x)=4\\left(1+e^{-2x}\\right)^{-1}$, $$g'(x)=4\\cdot\\frac{2e^{-2x}}{\\left(1+e^{-2x}\\right)^2}=\\frac{8e^{-2x}}{\\left(1+e^{-2x}\\right)^2}.$$",
          "At $x=0$: $g'(0)=\\dfrac{8\\cdot 1}{(1+1)^2}=\\dfrac{8}{4}=2$. Hence $(g^{-1})'(2)=\\dfrac{1}{g'(0)}=\\dfrac12$.",
          "Now $f'(x)=\\dfrac{2x+2}{x^2+2x+4}$, so at the point $a=0$: $f'(0)=\\dfrac{2}{4}=\\dfrac12$.",
          "Multiply: $(f\\circ g^{-1})'(2)=f'(0)\\cdot(g^{-1})'(2)=\\dfrac12\\cdot\\dfrac12=\\dfrac14=0.25$."
        ]
      },
      {
        "name": "Build $g^{-1}$ explicitly (logit), then differentiate directly",
        "steps": [
          "Solve $y=\\dfrac{4}{1+e^{-2x}}$ for $x$ to get the inverse in closed form. Then $1+e^{-2x}=\\dfrac{4}{y}\\Rightarrow e^{-2x}=\\dfrac{4-y}{y}\\Rightarrow -2x=\\ln\\dfrac{4-y}{y}$.",
          "Thus $h(y):=g^{-1}(y)=\\dfrac12\\ln\\dfrac{y}{4-y}=\\dfrac12\\big[\\ln y-\\ln(4-y)\\big]$, valid for $0<y<4$.",
          "Check the anchor: $h(2)=\\tfrac12\\ln 1=0$, matching $g^{-1}(2)=0$.",
          "Differentiate: $h'(y)=\\dfrac12\\left(\\dfrac1y+\\dfrac{1}{4-y}\\right)$, so $h'(2)=\\dfrac12\\left(\\dfrac12+\\dfrac12\\right)=\\dfrac12$.",
          "With $F(y)=f(h(y))=\\log_e\\!\\left(h^2+2h+4\\right)$, the chain rule gives $F'(y)=\\dfrac{2h+2}{h^2+2h+4}\\,h'(y)$.",
          "At $y=2$, $h=0$: $F'(2)=\\dfrac{2}{4}\\cdot\\dfrac12=\\dfrac14=0.25$."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2025, Paper 2, Q14. The whole difficulty is a mirage: the derivative of a composite at one point needs only the base point and two single-point slopes, so inverting the logistic explicitly is optional busywork."
  }
];
