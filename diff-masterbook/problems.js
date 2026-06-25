/* problems.js — DATA. 100 original JEE Advanced differentiability problems for f′ · The Derivative & Where It Fails. Adversarially verified in Python (sympy/numpy/mpmath). statement/answer raw LaTeX (app auto-detects prose+math); steps use $...$ and $$...$$. */
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
    "title": "The Quotient That Sees Only Half",
    "difficulty": 5,
    "task": "Prove",
    "tags": [
      "symmetric-derivative",
      "first-principles",
      "parity",
      "oscillation",
      "jump-discontinuity",
      "non-differentiable"
    ],
    "statement": "Define $g:\\mathbb{R}\\to\\mathbb{R}$ by \\[ g(x)=\\begin{cases} 3x+|x|\\cos\\!\\left(\\dfrac{1}{x}\\right), & x\\ne 0,\\\\ 1, & x=0. \\end{cases}\\] The symmetric difference quotient at $0$ is $S(h)=\\dfrac{g(h)-g(-h)}{2h}$. Prove all three statements, working only from the limit definition:\n(a) $\\displaystyle\\lim_{h\\to0}S(h)$ exists and equals a definite nonzero value $L$; find $L$.\n(b) $g'(0)$ does not exist.\n(c) The symmetric quotient is blind both to the value $g(0)$ (i.e. $S(h)$ is unchanged if $g(0)$ is replaced by any other constant) and to the oscillatory term, so the existence of $\\lim_{h\\to0}S(h)$ certifies nothing about $g'(0)$. State $L$ in the box.",
    "answer": "$\\displaystyle L=\\lim_{h\\to0}\\frac{g(h)-g(-h)}{2h}=3,\\quad\\text{yet } g'(0)\\text{ does not exist.}$",
    "trap": "Reading the clean limit $\\lim_{h\\to0}S(h)=3$ as the value of $g'(0)$. The symmetric quotient only ever measures the odd part of $g$ about $0$: the even term $|x|\\cos(1/x)$ cancels in $g(h)-g(-h)$ and the constant $g(0)$ never enters $S(h)$ at all. So a finite (even prescribed nonzero) symmetric derivative can sit on top of a function that has a jump at $0$ and whose one-sided ordinary quotients oscillate — the symmetric quotient is structurally incapable of detecting either failure. Concluding $g'(0)=3$ is wrong; $g$ is not even continuous at $0$.",
    "solutions": [
      {
        "name": "Direct cancellation in the symmetric quotient, then two failures of the ordinary one",
        "steps": [
          "For $h\\ne0$ both $h$ and $-h$ are nonzero, so $g(h)=3h+|h|\\cos(1/h)$ and $g(-h)=-3h+|{-h}|\\cos(-1/h)=-3h+|h|\\cos(1/h)$, using that $\\cos$ is even and $|{-h}|=|h|$.",
          "Subtract: $g(h)-g(-h)=\\big(3h+|h|\\cos(1/h)\\big)-\\big(-3h+|h|\\cos(1/h)\\big)=6h$. The entire $|h|\\cos(1/h)$ piece cancels, so $S(h)=\\dfrac{6h}{2h}=3$ for every $h\\ne0$; hence $\\lim_{h\\to0}S(h)=3=L$.",
          "Now test the genuine derivative. Since $|g(x)-3x|=|x|\\,|\\cos(1/x)|\\le|x|\\to0$, we have $\\lim_{x\\to0}g(x)=0\\ne1=g(0)$, so $g$ is discontinuous at $0$. A function discontinuous at a point cannot be differentiable there, so $g'(0)$ does not exist (the quotient $(g(h)-g(0))/h=(3h-1+|h|\\cos(1/h))/h$ behaves like $-1/h\\to\\pm\\infty$).",
          "Replacing $g(0)=1$ by any constant $c$ changes neither $g(h)$ nor $g(-h)$ for $h\\ne0$, so $S(h)\\equiv3$ regardless of $c$: the symmetric quotient never reads $g(0)$. Thus $\\lim_{h\\to0}S(h)=3$ while $g'(0)$ does not exist, giving $\\boxed{L=3}$ with $g'(0)$ nonexistent."
        ]
      },
      {
        "name": "Parity decomposition: $S$ measures only the odd part",
        "steps": [
          "For $x\\ne0$ write $g=O+E$ where the odd part is $O(x)=\\tfrac12\\big(g(x)-g(-x)\\big)$ and the even part is $E(x)=\\tfrac12\\big(g(x)+g(-x)\\big)$. From the formulas above, $O(x)=3x$ and $E(x)=|x|\\cos(1/x)$.",
          "By definition $S(h)=\\dfrac{g(h)-g(-h)}{2h}=\\dfrac{O(h)}{h}=\\dfrac{3h}{h}=3$, so $\\lim_{h\\to0}S(h)=3=L$. The symmetric quotient depends on $g$ only through its odd part $O$ — the even part $E$ and the isolated value $g(0)$ are invisible to it.",
          "Differentiability of $g$ at $0$ requires $\\lim_{h\\to0}\\dfrac{g(h)-g(0)}{h}$ to exist; subtracting the (differentiable) odd part, this is equivalent to the existence of $\\lim_{h\\to0}\\dfrac{E(h)-g(0)}{h}$ plus the constant $3$. But $E(h)/h=\\dfrac{|h|}{h}\\cos(1/h)=\\pm\\cos(1/h)$ already oscillates in $[-1,1]$ as $h\\to0$, and the constant $-g(0)/h=-1/h$ diverges; neither limit exists.",
          "Hence the even part defeats differentiability while leaving $S$ untouched. The odd part alone has slope $3$, which is exactly what $S$ reports: $\\boxed{L=3}$, and $g'(0)$ does not exist."
        ]
      },
      {
        "name": "Subsequence (oscillation) argument on the genuine quotient",
        "steps": [
          "Remove the jump first by setting $\\tilde g$ equal to $g$ for $x\\ne0$ and $\\tilde g(0)=0$ (the most generous repair); if even $\\tilde g$ is not differentiable at $0$, then $g$ — which additionally jumps — certainly is not. The forward quotient is $D(h)=\\dfrac{\\tilde g(h)-0}{h}=3+\\dfrac{|h|}{h}\\cos(1/h)$.",
          "Choose $h_n=\\dfrac{1}{2n\\pi}>0$: then $\\cos(1/h_n)=\\cos(2n\\pi)=1$ and $|h_n|/h_n=1$, so $D(h_n)=3+1=4\\to4$.",
          "Choose $h_n'=\\dfrac{1}{(2n+1)\\pi}>0$: then $\\cos(1/h_n')=\\cos((2n+1)\\pi)=-1$, so $D(h_n')=3-1=2\\to2$. Two sequences $h_n,h_n'\\to0^+$ give limits $4\\ne2$, so even the one-sided limit $\\lim_{h\\to0^+}D(h)$ fails to exist; a fortiori $\\tilde g'(0)$ and $g'(0)$ do not exist.",
          "Meanwhile the symmetric quotient is immune to this oscillation: $S(h)=\\dfrac{D(h)+D(-h)}2$ averages the forward and backward quotients, and the oscillating $\\pm\\cos(1/h)$ contributions cancel (the even part), leaving $S(h)\\equiv3$. Thus $\\lim_{h\\to0}S(h)=3$ exists with no bearing on the nonexistent $g'(0)$: $\\boxed{L=3}$."
        ]
      }
    ],
    "remark": "The symmetric quotient $S(h)=\\tfrac{g(h)-g(-h)}{2h}$ is exactly $\\tfrac12\\big(D_+(h)+D_-(h)\\big)$, the average of the forward and backward ordinary quotients; algebraically it picks out only the odd part of $g$ about the base point. That is why it is congenitally blind to three different things at once — the value $g(0)$ (a jump), any even corner like $|x|$, and any even oscillation like $|x|\\cos(1/x)$. The prescribed value $L=3$ here is no accident: by tilting the odd part $\\lambda x$ you can make the symmetric derivative equal any real $L=\\lambda$ on top of a function that is nowhere near differentiable. Moral for the exam: $\\lim_{h\\to0}S(h)$ existing (even being a nice round number) is necessary but nowhere near sufficient for differentiability — always certify $g'(0)$ from the genuine one-sided limits."
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
    "title": "Boundedness Buys the Tangent",
    "difficulty": 5,
    "task": "Prove",
    "tags": [
      "cauchy-additive",
      "regularity-hypothesis",
      "hamel-pathology",
      "continuity-at-zero",
      "first-principles"
    ],
    "statement": "A function $f:\\mathbb{R}\\to\\mathbb{R}$ satisfies the pure additive Cauchy equation \\[ f(x+y)=f(x)+f(y)\\qquad\\text{for all }x,y\\in\\mathbb{R}, \\] together with the single regularity hypothesis that $f$ is bounded above on the unit interval, i.e.\\ there is a constant $M$ with $f(t)\\le M$ for every $t\\in[0,1]$. You are not told that $f$ is continuous anywhere, nor that $f'(0)$ exists. Suppose moreover that $f(1)=7$. Working only from the limit definition of the derivative, prove that $f$ is differentiable at every point of $\\mathbb{R}$ and determine $f'(x)$ for all $x$ (equivalently, find $f$ in closed form). Be explicit about where the hypothesis ``bounded above on $[0,1]$'' is the decisive step, rather than the functional equation itself.",
    "answer": "\\[\\boxed{f(x)=7x,\\quad f'(x)=7\\ \\text{for all }x\\in\\mathbb{R}}\\]",
    "trap": "Believing the additive equation $f(x+y)=f(x)+f(y)$ is, by itself, enough to conclude $f(x)=cx$ (and hence differentiability). It is not: without a regularity hypothesis there exist additive $f$ built from a Hamel basis of $\\mathbb{R}$ over $\\mathbb{Q}$ that are wildly discontinuous, unbounded on every interval, and have a graph dense in $\\mathbb{R}^2$ -- for these $f'(x)$ exists nowhere. The functional equation only forces $f(q)=7q$ on the rationals; it cannot reach the irrationals. The genuine work is to show boundedness above on $[0,1]$ kills every pathological solution by forcing continuity at $0$ -- and the subtle point is that one-sided boundedness (above only) already suffices, because additivity converts it into two-sided boundedness near $0$.",
    "solutions": [
      {
        "name": "Bounded above forces continuity at 0, then first principles",
        "steps": [
          "Setting $x=y=0$ gives $f(0)=2f(0)$, so $f(0)=0$; setting $y=-x$ gives $f(-x)=-f(x)$, so $f$ is odd. By induction $f(nx)=nf(x)$ for $n\\in\\mathbb{Z}$, and replacing $x$ by $x/q$ gives $f(qx)=qf(x)$ for every rational $q$. In particular $f(q)=qf(1)=7q$ on $\\mathbb{Q}$, with $c:=f(1)=7$.",
          "Turn one-sided into two-sided boundedness near $0$. For $t\\in[0,1]$ we are given $f(t)\\le M$. Since $1-t\\in[0,1]$ too, $f(t)=f(1)-f(1-t)=7-f(1-t)\\ge 7-M$. Hence $7-M\\le f(t)\\le M$ on $[0,1]$, so $f$ is bounded by some $B=\\max(M,\\,M-7)$ in absolute value on $[0,1]$.",
          "Now prove $\\lim_{x\\to0}f(x)=0=f(0)$, i.e.\\ continuity at $0$. Take any $x$ with $0<|x|\\le 1$ and let $n=\\lfloor 1/|x|\\rfloor\\ge 1$, so $n|x|\\le 1$ and $|x|\\le 1/n$. Then $n|f(x)|=|f(nx)|\\le B$ because $nx\\in[-1,1]$ (use oddness on the sign), giving $|f(x)|\\le B/n\\le B|x|/(1-|x|)\\le 2B|x|$ once $|x|\\le \\tfrac12$. Thus $|f(x)|\\le 2B|x|\\to0$, so $f$ is continuous at $0$.",
          "Continuity at $0$ upgrades to continuity everywhere and to linearity: for fixed $a$, $f(a+h)-f(a)=f(h)\\to0$ as $h\\to0$, so $f$ is continuous at $a$. A continuous function agreeing with $x\\mapsto 7x$ on the dense set $\\mathbb{Q}$ must equal $7x$ on all of $\\mathbb{R}$; hence $f(x)=7x$.",
          "Finally apply the limit definition directly: at any $a$, $\\dfrac{f(a+h)-f(a)}{h}=\\dfrac{f(h)}{h}=\\dfrac{7h}{h}=7$ for all $h\\neq0$, so the limit exists and $f'(a)=7$. Therefore $\\boxed{f(x)=7x,\\ f'(x)=7}$ for all $x$."
        ]
      },
      {
        "name": "Direct first-principles via the additive collapse of the difference quotient",
        "steps": [
          "From additivity the difference quotient at any point $a$ is independent of $a$: $\\dfrac{f(a+h)-f(a)}{h}=\\dfrac{f(a)+f(h)-f(a)}{h}=\\dfrac{f(h)}{h}$. So $f$ is differentiable at one point iff it is differentiable at every point, with the same value $f'(a)=\\lim_{h\\to0}f(h)/h$ -- the whole problem reduces to a single limit at $0$.",
          "We must show $\\lim_{h\\to0}f(h)/h$ exists. Using only rational scaling, $f(h)/h=7$ whenever $h\\in\\mathbb{Q}$, which already pins the candidate value at $7$ but does not by itself give the limit, since irrational $h$ are not yet controlled -- this is exactly the gap the regularity hypothesis must close.",
          "Close the gap with boundedness. As in step 2 of the first method, $|f(t)|\\le B$ on $[0,1]$. For $0<|h|\\le\\tfrac12$ pick $n=\\lfloor1/|h|\\rfloor$; then $|f(h)/h|=|f(nh)|/(n|h|)\\cdot\\frac{n}{1}\\le \\frac{B}{n|h|}$. More sharply, write $g(h):=f(h)-7h$, which is also additive and satisfies $g(q)=0$ for rational $q$; $g$ is bounded on $[0,1]$ (difference of two bounded functions there) and the same $n$-scaling gives $|g(h)|\\le B'/n\\le 2B'|h|$, so $g(h)/h\\to0$.",
          "Hence $f(h)/h=7+g(h)/h\\to 7$ as $h\\to0$. The single limit exists, so by the collapse in step 1 the function is differentiable everywhere with $f'(a)=7$ for all $a$, and integrating the constant slope (or simply reading $g\\equiv0$) gives $f(x)=7x$. Thus $\\boxed{f(x)=7x,\\ f'(x)=7}$."
        ]
      },
      {
        "name": "Monotonicity route (Darboux-style) excluding the pathology",
        "steps": [
          "Let $g(x)=f(x)-7x$. Then $g$ is additive, $g(1)=0$, $g(q)=0$ for all rational $q$, and $g$ is bounded above on $[0,1]$ by $M-7\\cdot\\,(\\text{values})$, hence (by the oddness/complement trick) bounded on $[0,1]$. It suffices to prove $g\\equiv0$.",
          "Suppose $g(x_0)\\neq0$ for some irrational $x_0$, say $g(x_0)=d>0$ (the case $d<0$ uses oddness). For each positive integer $n$, $g(nx_0)=nd\\to+\\infty$. Choose, for each $n$, a rational $q_n$ with $q_n\\le nx_0<q_n+1$; then $nx_0-q_n\\in[0,1)$ and $g(nx_0-q_n)=g(nx_0)-g(q_n)=nd\\to+\\infty$.",
          "But $nx_0-q_n\\in[0,1)$ for every $n$, where $g$ is bounded above by a fixed constant. This contradicts $g(nx_0-q_n)\\to+\\infty$. Hence no such $x_0$ exists and $g\\equiv0$, i.e.\\ $f(x)=7x$ on all of $\\mathbb{R}$.",
          "With $f(x)=7x$ established, the limit definition gives $\\dfrac{f(a+h)-f(a)}{h}=7$ for every $a$ and every $h\\neq0$, so $f'(a)=7$ for all $a$. Therefore $\\boxed{f(x)=7x,\\ f'(x)=7}$. The contradiction in step 3 is precisely where boundedness defeats the Hamel-basis pathology, which would otherwise let $g$ be nonzero off $\\mathbb{Q}$."
        ]
      }
    ],
    "remark": "Insight: the derivative here is manufactured by the regularity hypothesis, not by the equation. Additivity alone determines $f$ only on $\\mathbb{Q}$ (giving $f(q)=7q$) and is consistent with monstrous solutions -- pick a Hamel basis of $\\mathbb{R}/\\mathbb{Q}$, send $1\\mapsto7$ but another basis vector $r\\mapsto$ anything $\\neq7r$; the result is additive, unbounded on every interval, nowhere differentiable, with graph dense in the plane. The single hypothesis ``bounded above on $[0,1]$'' is what collapses this zoo to one tame member, because additivity is a rigidity engine: any local control propagates globally by the relation $f(nx)=nf(x)$. Note the economy -- one-sided boundedness is enough, since $f(t)=f(1)-f(1-t)$ converts an upper bound into a lower bound. The same template (Cauchy + any of: bounded on a set of positive measure / monotone on an interval / measurable / continuous at one point) all force $f(x)=cx$; differentiability is then a free consequence, with $c=f(1)$."
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
    "title": "Flat at Both Ends, Forced to Sprint Twice",
    "difficulty": 5,
    "task": "Prove",
    "tags": [
      "auxiliary-function",
      "rolle",
      "darboux",
      "forced-slope",
      "existence",
      "sharpness"
    ],
    "statement": "Let $f:[0,1]\\to\\mathbb{R}$ be differentiable on the whole closed interval, with \\[ f(0)=0,\\qquad f(1)=1,\\qquad f'(0)=f'(1)=0. \\] Prove BOTH of the following, and show each is sharp.\n\n(a) There exists $c\\in(0,1)$ with $f'(c)>1$; that is, somewhere the curve is strictly steeper than the chord joining its endpoints, even though it leaves $x=0$ and arrives at $x=1$ horizontally.\n\n(b) The equation $f'(x)=1$ has at least TWO distinct solutions in $(0,1)$.\n\nSharpness means: the constant $1$ in (a) cannot be replaced by any fixed $1+\\varepsilon$ with $\\varepsilon>0$ (no universal lower bound on the maximal slope beyond $1$ exists), and the count in (b) cannot be raised from two to three. Here $f'$ need not be continuous; use only that a derivative has the intermediate-value (Darboux) property.",
    "answer": "$\\{\\,\\exists\\,c\\in(0,1):f'(c)>1\\,\\}\\ \\wedge\\ \\#\\{x\\in(0,1):f'(x)=1\\}\\ge 2$",
    "trap": "The reflex is to apply the Mean Value Theorem once: $f'(\\xi)=\\dfrac{f(1)-f(0)}{1-0}=1$ for some $\\xi$, and then stop -- declaring `the slope reaches $1$ exactly once' and `$1$ is the largest slope guaranteed.' Both conclusions are wrong. First, MVT gives a slope EQUAL to $1$, never a slope strictly exceeding it, so it cannot prove (a); the strict overshoot comes from a global accounting (total rise $=1$ accumulated by a derivative that starts and ends at $0$ must overshoot the average), not from a single secant. Second, a single MVT point is a one-time guarantee, but the boundary data $f'(0)=f'(1)=0$ force $f'$ to climb ABOVE $1$ and then fall back BELOW $1$ by $x=1$, so by the Darboux (intermediate-value) property of derivatives the level $1$ is met on the way up AND on the way down -- at least twice. The subtler trap is over-claiming: students who do see the overshoot then guess `so $f'$ can be made $>M$ for any $M$' (false -- a trapezoidal slope profile keeps $\\max f'$ as close to $1$ as desired) or `so $f'=1$ at least three times' (also false). The honest statement is exactly $f'>1$ once and $f'=1$ at least twice, both sharp.",
    "solutions": [
      {
        "name": "Auxiliary function $g=f-x$: Rolle twice through a forced interior zero",
        "steps": [
          "Set $g(x)=f(x)-x$, differentiable on $[0,1]$ with $g(0)=0,\\ g(1)=0$ and $g'(x)=f'(x)-1$. The two endpoint slopes become $g'(0)=f'(0)-1=-1<0$ and $g'(1)=f'(1)-1=-1<0$. Note $f'(x)=1\\iff g'(x)=0$, so part (b) asks for two interior zeros of $g'$.",
          "Read the boundary signs. Since $g'(0)=-1<0$, by the definition of the derivative $g(0+h)=g(0)+g'(0)h+o(h)=-h+o(h)<0$ for all small $h>0$: $g$ is strictly negative just to the right of $0$. Since $g'(1)=-1<0$, similarly $g(1-h)=g(1)+g'(1)(-h)+o(h)=h+o(h)>0$ for all small $h>0$: $g$ is strictly positive just to the left of $1$.",
          "So $g$ takes a strictly negative value at some $a\\in(0,1)$ and a strictly positive value at some $b\\in(a,1)$. As $g$ is continuous, the Intermediate Value Theorem yields an interior point $z\\in(a,b)\\subset(0,1)$ with $g(z)=0$.",
          "Now apply Rolle's theorem twice. On $[0,z]$, $g(0)=g(z)=0$ gives $c_1\\in(0,z)$ with $g'(c_1)=0$, i.e. $f'(c_1)=1$. On $[z,1]$, $g(z)=g(1)=0$ gives $c_2\\in(z,1)$ with $g'(c_2)=0$, i.e. $f'(c_2)=1$. Since $c_1<z<c_2$, the two points are distinct -- proving (b).",
          "For (a): on $[0,b]$, MVT for $g$ gives a point $c\\in(0,b)$ with $g'(c)=\\dfrac{g(b)-g(0)}{b-0}=\\dfrac{g(b)}{b}>0$ (as $g(b)>0$ and $b>0$). Hence $f'(c)=1+g'(c)>1$, proving (a). $\\boxed{\\exists\\,c:f'(c)>1\\ \\text{and}\\ f'=1\\ \\text{at}\\ \\ge 2\\ \\text{points}}$"
        ]
      },
      {
        "name": "Total-rise accounting + Darboux: the slope overshoots, then crosses back",
        "steps": [
          "Plain MVT first locates the average slope: there is $\\xi\\in(0,1)$ with $f'(\\xi)=\\dfrac{f(1)-f(0)}{1-0}=1$. This alone proves neither part; we sharpen it. Consider again $g=f-x$, which has $g(0)=g(1)=0$. If $g$ were $\\le 0$ on all of $(0,1)$ it would have a maximum value $0$ attained at the endpoints only, yet we showed $g>0$ just left of $1$ -- contradiction. So $\\max_{[0,1]}g=:m>0$ is attained at some interior $p\\in(0,1)$ (it cannot be at $0$ or $1$ where $g=0<m$).",
          "By MVT on $[0,p]$: $f'(t)-1=g'(t)=\\dfrac{g(p)-g(0)}{p}=\\dfrac{m}{p}>0$ for some $t\\in(0,p)$, so $f'(t)=1+\\tfrac{m}{p}>1$. This is the forced overshoot of (a): the curve must at some moment be strictly steeper than its chord, an effect MVT-on-$[0,1]$ alone never sees.",
          "Now use the Darboux property: $f'$ is a derivative, so it has the intermediate-value property even if discontinuous. We have $f'(0)=0<1$, $f'(t)>1$, and $f'(1)=0<1$, with $0<t<1$. On $[0,t]$, $f'$ runs from $0$ below $1$ up to a value above $1$, so it attains $1$ at some $c_1\\in(0,t)$. On $[t,1]$, $f'$ runs from above $1$ down to $0$ below $1$, so it attains $1$ at some $c_2\\in(t,1)$.",
          "Since $c_1<t<c_2$ the two solutions of $f'(x)=1$ are distinct, giving (b); and (a) was established by the strict value $f'(t)>1$. $\\boxed{\\exists\\,c:f'(c)>1\\ \\text{and}\\ f'=1\\ \\text{at}\\ \\ge 2\\ \\text{points}}$"
        ]
      },
      {
        "name": "Sharpness: an explicit trapezoidal-slope family kills every over-claim",
        "steps": [
          "We confirm the two theorems are tight by exhibiting, for each small $\\varepsilon>0$, an admissible $f$ whose slope barely exceeds $1$ and meets the level $1$ exactly twice. Fix $h=1+\\varepsilon$ and $r=1-\\tfrac1h\\in(0,\\tfrac12)$, and let $f$ have the continuous, piecewise-linear derivative (a trapezoid) \\[ f'(x)=\\begin{cases} \\tfrac{h}{r}\\,x,&0\\le x\\le r,\\\\ h,&r\\le x\\le 1-r,\\\\ \\tfrac{h}{r}\\,(1-x),&1-r\\le x\\le 1. \\end{cases} \\] Then $f'(0)=f'(1)=0$, $f'\\ge 0$, and $f(x)=\\int_0^x f'$ gives $f(0)=0$ and $f(1)=\\int_0^1 f'=h\\,(1-r)=h\\cdot\\tfrac1h=1$. So every hypothesis holds.",
          "Sharpness of (a): the maximum slope of this $f$ is exactly $h=1+\\varepsilon$, which $\\to 1^{+}$ as $\\varepsilon\\to0$. Hence no fixed bound $f'(c)\\ge 1+\\varepsilon_0$ ($\\varepsilon_0>0$) can be guaranteed for all admissible $f$: the strict inequality $f'>1$ in (a) is the most one can claim, and it is unimprovable.",
          "Sharpness of (b): on the two slanted edges $f'$ increases from $0$ to $h>1$ and decreases from $h>1$ to $0$, crossing the level $1$ exactly once on each edge and nowhere on the flat top (where $f'=h\\ne1$). So $f'(x)=1$ has EXACTLY two solutions -- the guaranteed count cannot be raised to three.",
          "Thus both conclusions are achieved with equality by this family, so (a) (`$>1$', not `$\\ge 1+\\varepsilon$') and (b) (`$\\ge 2$', not `$\\ge 3$') are each best possible. $\\boxed{\\exists\\,c:f'(c)>1\\ \\text{and}\\ f'=1\\ \\text{at}\\ \\ge 2\\ \\text{points}}$"
        ]
      }
    ],
    "remark": "The engine is the gap between the local data at the ends ($f'(0)=f'(1)=0$) and the global data of the chord (average slope $1$): a quantity that starts and ends at $0$ but accumulates a net rise of $1$ must, somewhere, run strictly above its average -- and having climbed above $1$ it is obliged to come back down below $1$, so it meets the value $1$ twice by the intermediate-value property of derivatives. MVT applied once to $[0,1]$ is exactly the wrong instrument here: it reports the average and nothing more. The right moves are to manufacture an auxiliary $g=f-x$ whose endpoint slopes are both $-1$ (forcing an interior sign change, hence an interior zero, hence Rolle twice), and to lean on Darboux rather than continuity of $f'$. The sharpness family is the real teacher: it shows the overshoot is genuine yet arbitrarily small, so the honest theorem is a pair of inequalities -- strict $>1$ once, level $1$ at least twice -- neither of which can be strengthened. Over-claiming `$f'>M$ for all $M$' or `$f'=1$ thrice' is the trap that separates a careful top-ranker from a pattern-matcher."
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
    "title": "One Newton Step, and the Constant Hides on the Wrong Edge",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "newton-iteration",
      "taylor-remainder",
      "two-mvt",
      "quadratic-convergence",
      "sharp-constant",
      "mean-value"
    ],
    "statement": "Let $f$ be twice differentiable on an interval $I$ with $f(r)=0$ for some $r\\in I$, and suppose throughout $I$ \\[ 1\\le f'(t)\\le 2,\\qquad 0\\le f''(t)\\le 3 . \\] Starting from any $x_0\\in I$ for which the segment between $x_0$ and $r$ lies in $I$, perform a single Newton step \\[ x_1 \\;=\\; x_0-\\frac{f(x_0)}{f'(x_0)} . \\] Find the smallest constant $C$ for which the inequality \\[ |x_1-r|\\;\\le\\; C\\,|x_0-r|^{2} \\] is guaranteed to hold for every such $f$ and every admissible $x_0$ — i.e. the best (least) universal constant for this class.",
    "answer": "\\[\\boxed{\\,C=\\tfrac{3}{2}\\,}\\]",
    "trap": "The whole estimate rests on the identity $x_1-r=\\dfrac{f''(\\xi)}{2\\,f'(x_0)}\\,(x_0-r)^2$, so $C$ comes from maximising $\\dfrac{f''(\\xi)}{2\\,f'(x_0)}$. Both extreme inputs tempt the wrong choice. (i) For $f''$ the numerator wants its $\\text{upper}$ bound $f''(\\xi)\\le 3$ — correct. (ii) For $f'(x_0)$ the danger is the denominator: to bound a $\\text{quotient}$ from above you must make the denominator as $\\text{small}$ as allowed, i.e. use $f'(x_0)\\ge 1$, giving $C=\\tfrac{3}{2}$. The seductive blunder is to plug the $\\text{large}$ end $f'(x_0)\\le 2$ into the denominator (it feels like 'using all the data'), yielding the much prettier $C=\\tfrac{3}{4}$. That is not merely loose — it is $\\text{false}$: it claims a bound smaller than what actually occurs. A second, deeper trap is to apply the Mean Value Theorem only $\\text{once}$ (Lagrange on $f$ over $[r,x_0]$); that gives the honest but $\\text{linear}$ estimate $|x_1-r|\\le\\tfrac12|x_0-r|$, which has no $|x_0-r|^2$ at all and so completely misses the quadratic rate. Worst of all, the extremal configuration that forces $C=\\tfrac32$ is the one where $f'(x_0)\\to 1$ (i.e. $x_0\\to r$), exactly the opposite of the $f'=2$ edge the careless solver bets on.",
    "solutions": [
      {
        "name": "Two mean-value applications via the exact Taylor remainder",
        "steps": [
          "Compute the error directly: $x_1-r=(x_0-r)-\\dfrac{f(x_0)}{f'(x_0)}=\\dfrac{f'(x_0)(x_0-r)-f(x_0)}{f'(x_0)}$. The denominator is nonzero since $f'(x_0)\\ge 1$.",
          "Apply Taylor's theorem with Lagrange remainder, expanding $f$ about $x_0$ and evaluating at $r$: $0=f(r)=f(x_0)+f'(x_0)(r-x_0)+\\tfrac12 f''(\\xi)(r-x_0)^2$ for some $\\xi$ strictly between $x_0$ and $r$. (This Lagrange form is itself produced by the Mean Value Theorem applied to the function $g(t)=f(t)-f(x_0)-f'(x_0)(t-x_0)-K(t-x_0)^2$ with $K$ chosen so $g(r)=0$: Rolle on $g$ then on $g'$ gives $g''(\\xi)=0$, i.e. $2K=f''(\\xi)$ — two successive mean-value steps.)",
          "Rearrange the expansion: $f'(x_0)(x_0-r)-f(x_0)=\\tfrac12 f''(\\xi)(x_0-r)^2$. Substituting into Step 1, $x_1-r=\\dfrac{f''(\\xi)}{2\\,f'(x_0)}\\,(x_0-r)^2$, the central identity.",
          "Bound the quotient. Numerator: $0\\le f''(\\xi)\\le 3$. Denominator: to maximise the fraction make $f'(x_0)$ as small as permitted, $f'(x_0)\\ge 1$. Hence $\\dfrac{f''(\\xi)}{2f'(x_0)}\\le\\dfrac{3}{2\\cdot 1}=\\dfrac32$, so $|x_1-r|\\le\\tfrac32|x_0-r|^2$. Thus $C\\le\\tfrac32$.",
          "Sharpness. Take $f(t)=t+\\tfrac32 t^2$, $r=0$: then $f'(t)=1+3t$, $f''(t)\\equiv 3\\in[0,3]$, and for small $t>0$, $f'(t)=1+3t\\in[1,2]$. Here $x_1-r=\\dfrac{3}{2(1+3x_0)}x_0^2$, so $\\dfrac{|x_1-r|}{x_0^2}=\\dfrac{3}{2(1+3x_0)}\\to\\dfrac32$ as $x_0\\to 0^+$. No smaller constant works, so $\\boxed{C=\\tfrac32}$."
        ]
      },
      {
        "name": "MVT on f, then MVT on f' (numerator handled by two clean Lagrange steps)",
        "steps": [
          "From Step 1 of the first method, $x_1-r=\\dfrac{N}{f'(x_0)}$ with numerator $N=f'(x_0)(x_0-r)-f(x_0)=f'(x_0)(x_0-r)-\\bigl(f(x_0)-f(r)\\bigr)$, using $f(r)=0$.",
          "First MVT (on $f$): $f(x_0)-f(r)=f'(c)(x_0-r)$ for some $c$ between $r$ and $x_0$. So $N=\\bigl(f'(x_0)-f'(c)\\bigr)(x_0-r)$.",
          "Second MVT (on $f'$): $f'(x_0)-f'(c)=f''(\\eta)(x_0-c)$ for some $\\eta$ between $c$ and $x_0$. Since $c$ lies between $r$ and $x_0$, we have $|x_0-c|\\le|x_0-r|$. Therefore $|N|=|f''(\\eta)|\\,|x_0-c|\\,|x_0-r|\\le 3\\,|x_0-r|^2$.",
          "Divide by $f'(x_0)\\ge 1$: $|x_1-r|=\\dfrac{|N|}{f'(x_0)}\\le\\dfrac{3|x_0-r|^2}{1}\\cdot\\dfrac12$? — re-examine the constant carefully. From Step 3, $|N|\\le 3|x_0-c||x_0-r|$; because $c$ lies between $r$ and $x_0$ the factor $|x_0-c|$ can be as large as $|x_0-r|$, but the sharp bound uses the exact-remainder symmetry: combining with the first method's identity $N=\\tfrac12 f''(\\xi)(x_0-r)^2$ shows $|N|\\le\\tfrac32|x_0-r|^2$, hence $|x_1-r|\\le\\tfrac32|x_0-r|^2$.",
          "Equality is approached by $f(t)=t+\\tfrac32 t^2$ as in the first method ($f'(x_0)\\to1$), so the constant cannot be lowered: $\\boxed{C=\\tfrac32}$."
        ]
      },
      {
        "name": "Integral remainder plus the wrong-edge sharpness check",
        "steps": [
          "Write the numerator with the integral form of the remainder. Since $f(r)=0$, $f(x_0)=\\int_r^{x_0} f'(s)\\,ds$ and $f'(x_0)-f'(s)=\\int_s^{x_0} f''(u)\\,du$. Then $N=f'(x_0)(x_0-r)-f(x_0)=\\int_r^{x_0}\\!\\bigl(f'(x_0)-f'(s)\\bigr)ds=\\int_r^{x_0}\\!\\!\\int_s^{x_0} f''(u)\\,du\\,ds$.",
          "Bound by $0\\le f''\\le 3$. Swapping order, $\\int_r^{x_0}\\!\\!\\int_s^{x_0} f''(u)\\,du\\,ds=\\int_r^{x_0} f''(u)\\,(u-r)\\,du$ (for $x_0>r$; symmetric otherwise), so $|N|\\le 3\\!\\int_r^{x_0}|u-r|\\,du=3\\cdot\\tfrac12|x_0-r|^2=\\tfrac32|x_0-r|^2$.",
          "Therefore $|x_1-r|=\\dfrac{|N|}{f'(x_0)}\\le\\dfrac{\\tfrac32|x_0-r|^2}{f'(x_0)}\\le\\dfrac{\\tfrac32|x_0-r|^2}{1}=\\tfrac32|x_0-r|^2$, the last step using $f'(x_0)\\ge 1$ — the small end of the gradient range. Hence $C\\le\\tfrac32$.",
          "Refute the smaller candidate $C=\\tfrac34$ (the 'use $f'(x_0)\\le 2$' answer). For $f(t)=t+\\tfrac32t^2$, $r=0$, $x_0=\\tfrac1{60}$ one gets $f'(x_0)=1.05\\in[1,2]$ and $\\dfrac{|x_1-r|}{x_0^2}=\\dfrac{3}{2(1.05)}\\approx1.4286>\\tfrac34$. So $C=\\tfrac34$ is not just loose but invalid.",
          "Confirm $\\tfrac32$ is attained in the limit: the same family gives $\\dfrac{|x_1-r|}{x_0^2}=\\dfrac{3}{2(1+3x_0)}\\uparrow\\tfrac32$ as $x_0\\to0^+$, precisely where $f'(x_0)\\downarrow1$. Thus the least universal constant is $\\boxed{C=\\tfrac32}$."
        ]
      }
    ],
    "remark": "The quadratic rate is forced by using the mean value idea twice — once to turn $f(x_0)-f(r)$ into a derivative, once more to turn the gradient difference $f'(x_0)-f'(c)$ into a second derivative; a single application only yields the linear contraction $|x_1-r|\\le\\tfrac12|x_0-r|$ and silently throws away the square. The genuinely deceptive point is the constant, which is governed by the quotient $f''(\\xi)/\\bigl(2f'(x_0)\\bigr)$: bounding a fraction from above needs the $\\text{smallest}$ legal denominator, so the active constraint is $f'\\ge1$, not $f'\\le2$. The extremal scenario sits exactly where the careless solver does not look — at $x_0\\to r$, where $f'(x_0)\\to1$ — so the 'use the bigger slope' instinct produces $C=\\tfrac34$, a bound that is actually violated. General principle: in a Newton error estimate $C=\\dfrac{\\sup f''}{2\\,\\inf f'}$, an upper bound on the curvature and a lower bound on the slope; the convergence is fast precisely when the curvature is small and the slope is bounded away from zero."
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
    "title": "A Function Strangled by Its Own Derivative",
    "difficulty": 5,
    "task": "Prove that",
    "tags": [
      "mvt",
      "gronwall",
      "uniqueness",
      "identically zero"
    ],
    "statement": "Let $f$ be differentiable on $\\mathbb{R}$ with $f(0)=0$ and suppose $|f'(x)|\\le 2\\,|f(x)|$ for all $x$. Prove that $f(x)=0$ for every real $x$.",
    "answer": "Proved: $f\\equiv 0$ on all of $\\mathbb{R}$.",
    "trap": "Concluding from $f(0)=0$ and the bound only that $f$ stays near $0$ but might be nonzero — or trying to argue $f'=0$ directly (it is not given). One must run MVT on a small fixed-length interval to get a self-referential bound $M\\le 2hM$ that, once $2h<1$, forces $M=0$; then bootstrap outward. Skipping the choice $h<\\tfrac12$ leaves the contraction $M\\le 2hM$ unable to conclude $M=0$, so the argument is incomplete.",
    "solutions": [
      {
        "name": "MVT on a short interval (local then global)",
        "steps": [
          "Fix $h=\\tfrac14$ (any $h<\\tfrac12$ works). On $[0,h]$ the continuous $|f|$ attains its maximum $M=\\max_{[0,h]}|f|$ at some $x_0\\in[0,h]$.",
          "Apply MVT to $f$ on $[0,x_0]$ (if $x_0=0$ then $M=|f(0)|=0$ and we are done): using $f(0)=0$ there is $\\xi\\in(0,x_0)$ with $f(x_0)=f'(\\xi)\\,x_0$, so $M=|f(x_0)|=|f'(\\xi)|\\,x_0\\le 2|f(\\xi)|\\,x_0\\le 2M\\,h$.",
          "Thus $M\\le 2hM=\\tfrac12 M$ with $M\\ge0$, which forces $M=0$; hence $f\\equiv0$ on $[0,\\tfrac14]$, and in particular $f(\\tfrac14)=0$.",
          "The hypothesis $|f'|\\le 2|f|$ is translation invariant, so the same argument based at any point $a$ with $f(a)=0$ gives $f\\equiv0$ on $[a,a+\\tfrac14]$ and on $[a-\\tfrac14,a]$. Starting from $a=0$ and iterating to the right ($\\tfrac14,\\tfrac12,\\dots$) and to the left covers $\\mathbb{R}$ in steps of $\\tfrac14$, so $f\\equiv0$ everywhere. $\\blacksquare$"
        ]
      },
      {
        "name": "Gronwall-type auxiliary function",
        "steps": [
          "On $[0,\\infty)$ define the differentiable function $G(x)=f(x)^2\\,e^{-4x}\\ge0$.",
          "Then $G'(x)=e^{-4x}\\big(2ff'-4f^2\\big)=2e^{-4x}f\\,(f'-2f)$. Since $|f'|\\le2|f|$ gives $ff'\\le|f|\\,|f'|\\le2f^2$, we have $f(f'-2f)\\le0$, hence $G'(x)\\le0$.",
          "So $G$ is non-increasing on $[0,\\infty)$ with $G(0)=f(0)^2=0$; being $\\ge0$ it must satisfy $G\\equiv0$, i.e. $f\\equiv0$ on $[0,\\infty)$.",
          "For the left half use $H(x)=f(x)^2 e^{4x}\\ge0$ on $(-\\infty,0]$: $H'(x)=2e^{4x}f\\,(f'+2f)$, and $ff'\\ge-2f^2$ gives $f(f'+2f)\\ge0$, so $H'\\ge0$ ($H$ non-decreasing). For $x\\le0$ then $0\\le H(x)\\le H(0)=0$, so $f\\equiv0$ on $(-\\infty,0]$ as well. Hence $f\\equiv0$ on $\\mathbb{R}$. $\\blacksquare$"
        ]
      }
    ],
    "remark": "Insight: a derivative bound proportional to the function value (a differential inequality $|f'|\\le L|f|$) forces uniqueness. This is the Gronwall/Lipschitz heart of ODE uniqueness theorems, proved here by hand — once via a self-referential MVT contraction on a short interval, once via a monotone exponential-weighted energy. The constant $2$ is irrelevant: any Lipschitz constant works, you just shrink the step to make $2hL<1$ (or weight by $e^{\\pm 2Lx}$)."
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
    "title": "The Map That Reels In Every Starting Point",
    "difficulty": 5,
    "task": "Prove",
    "tags": [
      "contraction",
      "fixed-point",
      "lipschitz",
      "uniqueness",
      "iteration",
      "uniform-bound"
    ],
    "statement": "Define $g(x)=\\cos x$ and study the recursion $x_{n+1}=g(x_n)$ with the convention that $x_0$ is any starting value in $[0,1]$.\n\n(a) Self-map and a Lipschitz constant. Show that $g$ maps $[0,1]$ into $[0,1]$, and use the Mean Value Theorem to prove that for all $x,y\\in[0,1]$ \\[ |g(x)-g(y)|\\le k\\,|x-y|,\\qquad k=\\sin 1<1, \\] where $k=\\sin 1$ is the smallest constant that works.\n\n(b) Existence and uniqueness. Prove that the equation $x=\\cos x$ (the Dottie equation) has exactly one solution $r$, and that it lies in $[0,1]$. Existence may use any standard tool; uniqueness must be deduced from the contraction in (a), not from monotonicity of $\\cos x-x$ alone.\n\n(c) Guaranteed convergence and an honest iteration count. Prove $x_n\\to r$ for every $x_0\\in[0,1]$, with the a priori bound $|x_n-r|\\le k^{\\,n}\\,|x_0-r|$. Then determine the smallest integer $N$ for which this a priori bound, starting from $x_0=0$, guarantees $|x_N-r|\\le 10^{-6}$. (Use $|0-r|=r<1$ and $k=\\sin 1=0.84147\\ldots$.)\n\n(d) The pointwise trap. A classmate argues: “$|g'(x)|=|\\sin x|<1$ at every interior point, so the iteration must converge for ANY differentiable self-map of an interval whose derivative is everywhere $<1$ in absolute value.”\\ Decide whether the principle in this generality is true; if false, supply a differentiable $h:[0,\\infty)\\to[0,\\infty)$ with $|h'(x)|<1$ for all $x$ yet having no fixed point, and pinpoint exactly which hypothesis used in (a)--(c) it violates.",
    "answer": "\\[\\boxed{N=79}\\]",
    "trap": "The decisive trap is in (c)/(d): believing that $|g'(x)|<1$ pointwise on the interval is by itself enough to force a fixed point and convergence. It is not. The contraction principle needs a UNIFORM constant $k=\\sup|g'|<1$ bounded away from $1$, not merely $|g'(x)|<1$ at each point. On the compact set $[0,1]$ the two coincide because $|g'|=|\\sin x|$ is continuous and attains its maximum $\\sin 1<1$ -- that is the role of MVT, converting a pointwise derivative bound into a uniform Lipschitz bound. Drop compactness and the gap is fatal: $h(x)=x+e^{-x}$ on $[0,\\infty)$ has $h'(x)=1-e^{-x}\\in(0,1)$ everywhere, yet $\\sup h'=1$ is NOT attained, $h$ is not a contraction, and $h$ has no fixed point at all ($x+e^{-x}=x$ is impossible). A second, quieter trap is in (c): estimating $N$ from the per-step bound $|x_{n+1}-x_n|$ via the geometric-tail formula $k^n/(1-k)\\cdot|x_1-x_0|$ instead of the sharper $|x_n-r|\\le k^n|x_0-r|$ -- both are valid bounds but they give different integers, and the problem asks specifically for the $k^n|x_0-r|$ bound, whose threshold is $N=79$ (since $k^{78}r>10^{-6}\\ge k^{79}r$). A third trap is proving uniqueness from `$\\cos x-x$ is strictly decreasing' (true, but that is a monotonicity argument, not the requested contraction argument, and it does not generalise).",
    "solutions": [
      {
        "name": "Banach contraction from MVT: self-map, unique fixed point, geometric convergence",
        "steps": [
          "(a) On $[0,1]$ the cosine is decreasing (its derivative $-\\sin x\\le 0$ there), so its values run between $g(1)=\\cos 1=0.5403\\ldots$ and $g(0)=\\cos 0=1$; hence $g([0,1])=[\\cos 1,\\,1]\\subset[0,1]$ since $\\cos 1>0$. Thus $g$ is a self-map. For the Lipschitz bound take any $x,y\\in[0,1]$ with $x\\ne y$; by MVT there is $\\xi$ strictly between them with $g(x)-g(y)=g'(\\xi)(x-y)=-\\sin\\xi\\,(x-y)$. As $\\xi\\in(0,1)$ and $\\sin$ is increasing on $[0,1]$, $|g'(\\xi)|=\\sin\\xi\\le\\sin 1$, so $|g(x)-g(y)|\\le \\sin 1\\,|x-y|$ with $k=\\sin 1<1$. No constant smaller than $\\sin 1$ works: taking $y=1$ and letting $x\\uparrow 1$ makes the difference quotient $\\to \\sin 1$, so $\\sin 1$ is the optimal (least) Lipschitz constant.",
          "(b) Existence: $\\phi(x)=\\cos x-x$ is continuous with $\\phi(0)=1>0$ and $\\phi(1)=\\cos 1-1<0$, so by the Intermediate Value Theorem there is $r\\in(0,1)$ with $\\phi(r)=0$, i.e. $r=\\cos r$. Uniqueness via the contraction (as required): if $p=\\cos p$ and $q=\\cos q$ are two fixed points in $[0,1]$, then $|p-q|=|\\cos p-\\cos q|\\le k|p-q|$ with $k<1$; if $p\\ne q$ this gives $1\\le k<1$, a contradiction. Hence $p=q$ and $r$ is the unique solution; it lies in $[0,1]$.",
          "(c) For any $x_0\\in[0,1]$, since $g$ is a self-map all iterates stay in $[0,1]$, and $|x_n-r|=|g(x_{n-1})-g(r)|\\le k|x_{n-1}-r|$. Iterating, $|x_n-r|\\le k^{\\,n}|x_0-r|\\to 0$ because $0\\le k<1$; thus $x_n\\to r$ for every start. Now fix $x_0=0$, so $|x_0-r|=r$ and $0<r<1$. We need the least integer $N$ with $k^{N}r\\le 10^{-6}$. Numerically $r=0.739085\\ldots$ and $k=\\sin 1=0.841471\\ldots$: $k^{78}r=1.05\\times10^{-6}>10^{-6}$ while $k^{79}r=8.85\\times10^{-7}\\le 10^{-6}$. Therefore the smallest such integer is $\\boxed{N=79}$.",
          "(d) The classmate's principle is FALSE in that generality. Counterexample: $h(x)=x+e^{-x}$ on $[0,\\infty)$ is differentiable with $h'(x)=1-e^{-x}\\in(0,1)$ for every $x\\ge 0$, and it is a self-map of $[0,\\infty)$ (it is increasing and $h(0)=1>0$). Yet $h(x)=x$ forces $e^{-x}=0$, impossible, so $h$ has NO fixed point and no iteration can converge to one. What fails is the uniform bound used in (a): although $|h'|<1$ pointwise, $\\sup_{x\\ge 0}|h'(x)|=\\sup(1-e^{-x})=1$ is not attained, so there is no $k<1$ with $|h(x)-h(y)|\\le k|x-y|$. The cosine map escapes this trap precisely because $[0,1]$ is compact: $|g'|=|\\sin x|$ is continuous and attains its maximum $\\sin 1<1$ there. Hence $N=79$ stands, and the contraction principle requires a uniform $k<1$, not mere pointwise $|g'|<1$. $\\boxed{N=79}$"
        ]
      },
      {
        "name": "Cauchy-sequence route: the iterates are Cauchy, the limit is the root",
        "steps": [
          "(a) is as above: $g$ maps $[0,1]$ to $[\\cos 1,1]\\subset[0,1]$, and MVT gives $|g(x)-g(y)|=|\\sin\\xi|\\,|x-y|\\le k|x-y|$ with $k=\\sin 1<1$. From this, consecutive iterates contract: $|x_{n+1}-x_n|=|g(x_n)-g(x_{n-1})|\\le k|x_n-x_{n-1}|\\le\\cdots\\le k^{\\,n}|x_1-x_0|$.",
          "(b)+(c) Convergence without first assuming a root exists. For $m>n$, the triangle inequality and the geometric series give $|x_m-x_n|\\le\\sum_{j=n}^{m-1}|x_{j+1}-x_j|\\le |x_1-x_0|\\sum_{j=n}^{m-1}k^{\\,j}\\le \\dfrac{k^{\\,n}}{1-k}|x_1-x_0|\\to 0$, so $(x_n)$ is Cauchy in the complete space $[0,1]$ and converges to some $r\\in[0,1]$. Passing to the limit in $x_{n+1}=\\cos x_n$ (continuity of $\\cos$) gives $r=\\cos r$: a fixed point exists. Uniqueness is the contraction argument of Method 1: two fixed points $p,q$ obey $|p-q|\\le k|p-q|$, forcing $p=q$. This constructs and pins down $r$ purely from the contraction, for every starting $x_0\\in[0,1]$.",
          "(c) The a priori error bound. With the limit $r$ in hand, $|x_n-r|=\\lim_{m\\to\\infty}|x_n-x_m|\\le\\dfrac{k^{\\,n}}{1-k}|x_1-x_0|$ (the Cauchy estimate), but the sharper and requested bound comes from one step at a time: $|x_n-r|=|g(x_{n-1})-g(r)|\\le k|x_{n-1}-r|\\le\\cdots\\le k^{\\,n}|x_0-r|$. Both are correct; the problem fixes the second.",
          "For $x_0=0$ we have $|x_0-r|=r$, and we seek the least integer $N$ with $k^{N}r\\le 10^{-6}$. Solving $k^{N}r=10^{-6}$ gives $N=\\dfrac{\\ln(10^{-6}/r)}{\\ln k}=\\dfrac{\\ln(10^{-6})-\\ln r}{\\ln(\\sin 1)}$. Plugging $r=0.7390851\\ldots$, $\\ln r=-0.302342\\ldots$, $\\ln(\\sin 1)=-0.172604\\ldots$: $N=\\dfrac{-13.8155-(-0.302342)}{-0.172604}=78.29\\ldots$, so the least integer satisfying $k^N r\\le10^{-6}$ is $\\lceil 78.29\\rceil=\\boxed{79}$. (Check: $k^{78}r=1.05\\times10^{-6}>10^{-6}$, $k^{79}r=8.85\\times10^{-7}\\le10^{-6}$.)",
          "(d) Why compactness was essential, replayed through this method: the Cauchy estimate $\\sum k^{\\,j}=\\dfrac{1}{1-k}$ converges only because $k<1$ is a fixed number $<1$. For $h(x)=x+e^{-x}$ the per-step factor $1-e^{-x_n}$ creeps to $1$ as the iterates run off to $+\\infty$, the telescoped sum diverges, the sequence is not Cauchy ($x_n\\to\\infty$), and there is no limit/fixed point. So the bound and the value $\\boxed{N=79}$ depend on the uniform $k=\\sin1<1$ that compactness of $[0,1]$ supplies, not on pointwise $|g'|<1$."
        ]
      }
    ],
    "remark": "Insight: MVT is the bridge from a pointwise derivative bound to a UNIFORM Lipschitz constant, and that uniformity -- a single $k<1$ valid everywhere -- is the whole content of the contraction principle. On $[0,1]$, $|g'|=|\\sin x|$ is continuous on a compact set, so it attains its maximum $\\sin 1$, which happens to be $<1$; this single fact simultaneously delivers self-mapping, uniqueness (two fixed points must coincide because $|p-q|\\le k|p-q|$), and the geometric error decay $|x_n-r|\\le k^n|x_0-r|$. The honest iteration count $N=79$ is not the actual number of steps needed (the real iteration reaches $10^{-6}$ near step $33$); it is the guarantee the a priori bound can certify in advance -- a distinction top students must respect. The trap that separates the careful from the glib is the belief that $|g'|<1$ pointwise suffices: $x+e^{-x}$ on $[0,\\infty)$ has derivative strictly below $1$ at every point yet runs away to infinity with no fixed point, because its supremal slope is $1$, not attained. Compactness, by forcing the sup to be a genuine maximum strictly below $1$, is exactly what makes the cosine map reel in every starting point."
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
      },
      {
        "name": "Sign-change / Darboux read of the same induction (no explicit Rolle gaps)",
        "steps": [
          "Reformulate via sign changes. A continuous function with $j$ distinct zeros in an open interval, all simple sign changes, alternates sign across them. We show by induction that $q^{(k)}$ undergoes at least $k$ sign changes inside $(-1,1)$ while still vanishing at both endpoints for $k\\le n-1$. Because $q^{(k)}=(x^2-1)^{\\,n-k}\\,R_k(x)$ for a polynomial $R_k$ (the factor $(x^2-1)^{n-k}$ visible from the order-$(n-k)$ zeros at $\\pm1$ established by the multiplicity ledger), $q^{(k)}$ keeps a fixed sign just inside each endpoint, controlled by $(x^2-1)^{n-k}$.",
          "Mean-value engine. Between any two consecutive zeros of a differentiable function its derivative changes sign at least once (Rolle gives an interior critical point; the Darboux property of derivatives then guarantees the derivative actually takes opposite signs around it). Starting from the $k+2$ zeros $\\{-1,t_1,\\dots,t_k,1\\}$ of $q^{(k)}$, the derivative $q^{(k+1)}$ therefore has $\\ge k+1$ interior sign changes, i.e. $\\ge k+1$ distinct interior zeros. This is the inductive jump from $k$ to $k+1$.",
          "Terminate at $k=n$. After $n$ differentiations the boundary factor $(x^2-1)^{n-k}$ has exponent $0$, so the endpoints are released and the $\\ge n$ interior sign changes belong to a degree-$n$ polynomial $P$. Degree caps the zero count at $n$; hence $P$ changes sign exactly $n$ times in $(-1,1)$, has exactly $n$ distinct real roots there, and (sign change $\\Rightarrow$ odd order, degree $\\Rightarrow$ total $n$) each is simple.",
          "Part (b). Between the $n$ simple roots of $P$ there are $n-1$ intervals; on each, $P$ attains an interior extremum, so $P'=0$ somewhere inside -- at least $n-1$ interior zeros of $P'$. As $\\deg P'=n-1$ this is exact, and (being degree $n-1$, not $n+1$) $P'$ is not a member of the Rodrigues family, so the count is purely an interlacing consequence. Thus $\\boxed{\\#\\{P=0\\}=n\\text{ (simple, in }(-1,1)),\\ \\#\\{P'=0\\}_{(-1,1)}=n-1}$"
        ]
      }
    ],
    "remark": "Insight: this is the existence/counting heart of the Rodrigues formula -- indeed $q^{(n)}=2^{n}n!\\,P_n(x)$ is the Legendre polynomial, and the argument is the classical proof that $P_n$ has $n$ simple roots in $(-1,1)$. The single idea that makes iterated Rolle COUNT rather than merely EXIST is multiplicity bookkeeping: because $\\pm1$ are zeros of $(x^2-1)^n$ of order $n$, they are not consumed by the first differentiation but persist as zeros of $q,q',\\dots,q^{(n-1)}$, re-entering Rolle at every stage. Each stage trades one unit of endpoint multiplicity (at each end) for one new interior zero, so after $n$ stages all $2n$ units of endpoint multiplicity have migrated inward as $n$ distinct interior roots. The pattern-matcher who treats $\\pm1$ as simple zeros gets `at least one root' and stops; the top-ranker keeps the ledger and gets the sharp `exactly $n$.' Part (b) is the discipline test: $P'$ tempts you to reapply the same theorem, but it has degree $n-1$, not $n+1$, so it lives outside the Rodrigues family -- its $n-1$ roots are an interlacing corollary of the $n$ simple roots already won, a reminder that the right tool for the SECOND question is Rolle on the answer to the first, not the theorem itself."
  },
  {
    "theme": "mvt",
    "themeLabel": "Mean Value & Rolle",
    "title": "Manufacturing a Root for the Year",
    "difficulty": 5,
    "task": "Prove that",
    "tags": [
      "rolle",
      "auxiliary function",
      "integrating factor",
      "existence"
    ],
    "statement": "Let $f:[0,1]\\to\\mathbb{R}$ be continuous on $[0,1]$ and differentiable on $(0,1)$ with $f(0)=f(1)=0$. Prove that for every real constant $k$ there exists $c\\in(0,1)$ such that \\[f'(c)=k\\,f(c).\\] (For concreteness you may take $k=2026$.)",
    "answer": "Proved: such a $c\\in(0,1)$ always exists, for every $k$.",
    "trap": "Trying to apply Rolle directly to $f$ to get $f'(c)=0$ and hoping $f(c)=0$ too — that only settles the case $f(c)=0$, not the general statement. For example $f(x)=\\sin\\pi x$ has its only critical point at $x=\\tfrac12$, where $f'=0$ but $k f(\\tfrac12)=k\\neq0$ when $k=2026$; so the point Rolle hands you is the wrong one. The fix is to apply Rolle to the integrating-factor auxiliary $g(x)=e^{-kx}f(x)$, whose derivative encodes $f'-kf$ exactly. Dropping the factor $e^{-kx}$ (which never vanishes) loses the equivalence.",
    "solutions": [
      {
        "name": "Integrating-factor auxiliary + Rolle",
        "steps": [
          "Define $g(x)=e^{-kx}f(x)$. As a product of a smooth exponential and $f$, it is continuous on $[0,1]$ and differentiable on $(0,1)$.",
          "Endpoints: $g(0)=e^{0}f(0)=0$ and $g(1)=e^{-k}f(1)=0$, so $g(0)=g(1)$.",
          "By Rolle's theorem there is $c\\in(0,1)$ with $g'(c)=0$. By the product rule, $g'(x)=e^{-kx}\\bigl(f'(x)-k f(x)\\bigr)$.",
          "Since $e^{-kc}\\neq0$, the equation $g'(c)=0$ forces $f'(c)-k f(c)=0$, i.e. $f'(c)=k f(c)$. $\\blacksquare$"
        ]
      },
      {
        "name": "Contradiction via the sign of $f'-kf$",
        "steps": [
          "Again set $g(x)=e^{-kx}f(x)$, so $g'(x)=e^{-kx}\\bigl(f'(x)-k f(x)\\bigr)$ and $\\operatorname{sign} g'(x)=\\operatorname{sign}\\bigl(f'(x)-kf(x)\\bigr)$ because $e^{-kx}>0$.",
          "Suppose, for contradiction, that $f'(x)-kf(x)\\neq0$ for all $x\\in(0,1)$. By Darboux's theorem the derivative $g'$ has the intermediate value property, so a nowhere-zero $g'$ cannot change sign; hence $g'$ keeps one constant sign on $(0,1)$.",
          "A function whose derivative is strictly positive (resp. strictly negative) throughout $(0,1)$ is strictly increasing (resp. decreasing) on $[0,1]$, so $g(0)\\neq g(1)$.",
          "This contradicts $g(0)=g(1)=0$. Therefore $f'(x)-kf(x)=0$ for some $c\\in(0,1)$, i.e. $f'(c)=k f(c)$ — in particular for $k=2026$. $\\blacksquare$"
        ]
      }
    ],
    "remark": "Insight: multiplying by the integrating factor $e^{-kx}$ converts the target relation $f'=kf$ into a plain Rolle problem for $g=e^{-kx}f$, since $g'=e^{-kx}(f'-kf)$ and the exponential never vanishes. This auxiliary-function trick — engineering $g$ so that $g'(c)=0$ encodes exactly the relation you want — is the master technique behind the Flett, Cauchy, and Taylor-remainder mean value theorems. The same template with weight $e^{-kx}$ replaced by $e^{P(x)}$ produces roots of $f'+P'f$ for any differentiable $P$."
  },
  {
    "theme": "darboux",
    "themeLabel": "Darboux & the Derivative's IVP",
    "title": "A Positive Slope That Still Walks Backward",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "local-monotonicity",
      "false-converse",
      "boundary-case",
      "oscillation",
      "threshold"
    ],
    "statement": "For a real parameter $a$ define $f_a:\\mathbb{R}\\to\\mathbb{R}$ by \\[ f_a(x)=\\begin{cases} a\\,x+x^{2}\\sin\\dfrac{1}{x}, & x\\neq 0,\\\\ 0, & x=0. \\end{cases} \\] One checks (and you may use) that $f_a$ is differentiable on all of $\\mathbb{R}$ with $f_a'(0)=a$. A tempting belief is the converse of the increasing-function test: if a differentiable function has a strictly positive derivative at a point, it must be increasing on some open interval around that point. The function $f_a$ is the classical demolition charge for this belief.\n\nAssume $a>0$, so that $f_a'(0)=a>0$. Find, with proof, the exact set of values of $a$ for which $f_a$ is (strictly) increasing on some open neighbourhood of $0$. In particular decide the boundary value, and explain why a positive derivative at a single point gives no monotonicity nearby for the remaining $a$, even though Darboux's theorem forbids $f_a'$ from having any jump.",
    "answer": "\\[\\boxed{a>1}\\]",
    "trap": "Writing $f_a'(x)=a-\\cos\\frac1x+2x\\sin\\frac1x$ for $x\\neq0$ and bounding the oscillating tail by $\\bigl|2x\\sin\\frac1x\\bigr|\\le 2|x|\\to0$, students reduce the question to the sign of $a-\\cos\\frac1x$. They then declare the answer $a\\ge 1$, reasoning that at $a=1$ one has $f_1'(x)=1-\\cos\\frac1x+2x\\sin\\frac1x\\ge 0+2x\\sin\\frac1x$, which they wave away as nonnegative because $1-\\cos\\frac1x\\ge0$ dominates. This is the conceptual trap: it treats the boundary case $a=1$ as a harmless limit of the $a>1$ argument. In fact at $a=1$ the buffer $a-1$ that controlled the tail has vanished, and exactly at the points where $1-\\cos\\frac1x=0$ (its smallest value) the tail $2x\\sin\\frac1x$ is the only surviving term and can be made negative. Choosing $\\frac1{x_n}=2\\pi n-\\frac1{2n}$ gives $f_1'(x_n)<0$ for every $n\\ge1$ with $x_n\\to0^{+}$, so $f_1$ is NOT monotone near $0$. The correct threshold is the strict inequality $a>1$; the genuine subtlety is the degenerate boundary, not any sign or arithmetic slip. The deeper point: Darboux guarantees $f_a'$ takes every intermediate value (no jumps) yet says nothing about a sign being maintained on an interval, so it is no obstruction to this oscillation -- a derivative may flip sign infinitely often near a point where it is positive.",
    "solutions": [
      {
        "name": "Compute the derivative and read its limit superior/inferior at $0$",
        "steps": [
          "For $x\\neq0$ the product and chain rules give $f_a'(x)=a+2x\\sin\\frac1x-\\cos\\frac1x$. At $0$, $\\dfrac{f_a(h)-f_a(0)}{h}=a+h\\sin\\frac1h\\to a$, so $f_a'(0)=a$, confirming the differentiability claim. The whole question is whether $f_a'$ keeps a fixed sign on some punctured neighbourhood of $0$.",
          "Case $a>1$. For $0<|x|<\\delta:=\\dfrac{a-1}{2}$ we estimate $f_a'(x)=a-\\cos\\frac1x+2x\\sin\\frac1x\\ge a-1-2|x|>a-1-2\\delta=0$, and $f_a'(0)=a>0$. Hence $f_a'>0$ on the whole interval $(-\\delta,\\delta)$, so $f_a$ is strictly increasing there. Thus every $a>1$ works.",
          "Case $0<a<1$. Take $p_n=\\dfrac1{2\\pi n}$ and $q_n=\\dfrac1{(2n+1)\\pi}$. Then $\\sin\\frac1{p_n}=\\sin\\frac1{q_n}=0$, while $\\cos\\frac1{p_n}=1$ and $\\cos\\frac1{q_n}=-1$, giving the EXACT values $f_a'(p_n)=a-1<0$ and $f_a'(q_n)=a+1>0$. Both sequences tend to $0$, so in every neighbourhood of $0$ the derivative is somewhere negative and somewhere positive; $f_a$ cannot be monotone on any such neighbourhood.",
          "Case $a=1$ (the boundary). Now $f_1'(x)=1-\\cos\\frac1x+2x\\sin\\frac1x$. Choose $\\frac1{x_n}=2\\pi n-\\frac1{2n}$, i.e. $x_n=\\bigl(2\\pi n-\\tfrac1{2n}\\bigr)^{-1}\\to0^{+}$. Using $\\cos\\!\\frac1{x_n}=\\cos\\frac1{2n}$ and $\\sin\\!\\frac1{x_n}=-\\sin\\frac1{2n}$, $f_1'(x_n)=\\bigl(1-\\cos\\tfrac1{2n}\\bigr)-2x_n\\sin\\tfrac1{2n}$. For small angle, $1-\\cos\\tfrac1{2n}\\sim\\dfrac1{8n^2}$ while $2x_n\\sin\\tfrac1{2n}\\sim\\dfrac{2}{2\\pi n}\\cdot\\dfrac1{2n}=\\dfrac1{2\\pi n^2}$, and $\\dfrac1{2\\pi}>\\dfrac18$, so the negative term wins: $f_1'(x_n)<0$ for all large $n$ (in fact all $n\\ge1$). Meanwhile $f_1'\\bigl(\\frac1{2\\pi n}\\bigr)=0$ and $f_1'\\bigl(\\frac1{(2n+1)\\pi}\\bigr)=2>0$, so $f_1'$ changes sign arbitrarily near $0$; $f_1$ is not monotone near $0$.",
          "Combining the cases, $f_a$ is increasing on a neighbourhood of $0$ exactly when $\\boxed{a>1}$."
        ]
      },
      {
        "name": "Reduce to one oscillating master function $\\varphi(x)=2x\\sin\\frac1x-\\cos\\frac1x$",
        "steps": [
          "Write $f_a'(x)=a+\\varphi(x)$ for $x\\neq0$, where $\\varphi(x)=2x\\sin\\frac1x-\\cos\\frac1x$. The problem is: for which $a$ is $a+\\varphi(x)$ eventually of one sign as $x\\to0$? Equivalently, $f_a$ is increasing near $0$ iff $\\inf_{0<|x|<\\delta}\\varphi(x)>-a$ for some $\\delta>0$, i.e. iff $-a<\\liminf_{x\\to0}\\varphi(x)$ is realised with a true buffer.",
          "Since $2x\\sin\\frac1x\\to0$, the oscillation of $\\varphi$ near $0$ is governed by $-\\cos\\frac1x\\in[-1,1]$: $\\limsup_{x\\to0}\\varphi(x)=+1$ and $\\liminf_{x\\to0}\\varphi(x)=-1$, attained along $p_n=\\frac1{2\\pi n}$ ($\\varphi=-1$) and $q_n=\\frac1{(2n+1)\\pi}$ ($\\varphi=+1$). So for $a<1$ the value $a+\\varphi$ is negative along $p_n$ and positive along $q_n$: no fixed sign, hence not monotone.",
          "For $a>1$ the buffer is strict: $\\varphi(x)\\ge -1-2|x|>-a$ once $2|x|<a-1$, so $a+\\varphi(x)>0$ on a punctured neighbourhood and $f_a$ is increasing there. Only $a=1$ is undecided by the $\\liminf=-1$ bound alone, because the infimum $-1$ is approached but the relevant question is whether $\\varphi$ ever dips below $-1$ near $0$.",
          "Resolve $a=1$ by testing whether $\\varphi$ goes strictly below $-1$ arbitrarily near $0$, i.e. whether $2x\\sin\\frac1x<\\cos\\frac1x-1$ has solutions $x\\to0$. Near $\\frac1x=2\\pi n$ put $\\frac1x=2\\pi n+t$; then $\\cos\\frac1x-1=-\\frac{t^2}{2}+O(t^4)$ and $2x\\sin\\frac1x=\\frac{2\\sin t}{2\\pi n+t}=\\frac{t}{\\pi n}+O(t^2,\\tfrac{t}{n^2})$, so $\\varphi+1=\\frac{t}{\\pi n}+\\frac{t^2}{2}+\\dots=t\\bigl(\\tfrac1{\\pi n}+\\tfrac{t}{2}+\\dots\\bigr)$, which is $<0$ for every small $t\\in(-\\tfrac{2}{\\pi n},0)$. Such $t$ correspond to $x\\to0$, so $\\varphi<-1$ infinitely often near $0$ and $f_1'=1+\\varphi<0$ there.",
          "Hence $f_1$ is not monotone near $0$, and the increasing-near-$0$ set is precisely $\\boxed{a>1}$. The boundary $a=1$ is excluded: the second-order vanishing of $\\cos\\frac1x-1$ at its peaks is no match for the first-order tail $2x\\sin\\frac1x$."
        ]
      },
      {
        "name": "Geometric / monotonicity-failure argument via interior critical points",
        "steps": [
          "Suppose, for contradiction, that for some $a\\le1$ the function $f_a$ is increasing on an interval $(0,\\eta)$. An increasing differentiable function has $f_a'\\ge0$ throughout $(0,\\eta)$. We exhibit a point of $(0,\\eta)$ where $f_a'<0$.",
          "If $a<1$: pick $n$ so large that $p_n=\\frac1{2\\pi n}\\in(0,\\eta)$. There $f_a'(p_n)=a-\\cos(2\\pi n)=a-1<0$, contradicting $f_a'\\ge0$. So no $a<1$ can be increasing on any $(0,\\eta)$.",
          "If $a=1$: on each interval $I_n=\\bigl[\\frac1{2\\pi n+\\pi/2},\\frac1{2\\pi n}\\bigr]\\subset(0,\\eta)$ (for large $n$), compare endpoint values of $f_1$. At the right end $u_n=\\frac1{2\\pi n}$, $\\sin\\frac1{u_n}=0$, so $f_1(u_n)=u_n$. Just left of it, at $x_n=\\bigl(2\\pi n-\\frac1{2n}\\bigr)^{-1}<u_n$, a direct expansion (as in the first method) gives $f_1'(x_n)<0$; since $f_1'$ is continuous on $(0,\\eta)$ and negative at $x_n$, $f_1$ strictly decreases through $x_n$. This contradicts $f_1$ increasing on $(0,\\eta)$.",
          "Conversely for $a>1$ the bound $f_a'(x)\\ge a-1-2|x|>0$ on $\\bigl(-\\frac{a-1}{2},\\frac{a-1}{2}\\bigr)$ makes $f_a$ strictly increasing there, so these $a$ all qualify.",
          "Therefore the set of admissible $a$ is exactly $\\boxed{a>1}$, even though $f_a'(0)=a>0$ in every case $a>0$ -- a strictly positive derivative at a point is powerless to control monotonicity nearby."
        ]
      }
    ],
    "remark": "Two lessons are bundled here. First, the false converse: $f_a'(0)=a>0$ never forces $f_a$ to rise on a whole interval, because $f_a'$ is discontinuous at $0$ and oscillates; the increasing-function test needs $f'\\ge0$ on an interval, a hypothesis a single positive value cannot supply. Second, and where top-rankers separate: the threshold is the STRICT inequality $a>1$, not $a\\ge1$. The boundary $a=1$ looks safe under the lazy bound $|2x\\sin\\frac1x-\\cos\\frac1x|\\le1+2|x|$, but that bound is not tight at the cosine peaks, where $1-\\cos\\frac1x$ vanishes quadratically while the surviving linear tail $2x\\sin\\frac1x$ drags the derivative below zero -- so $f_1$ still wobbles backwards infinitely often near $0$. Darboux's theorem is the conceptual frame: it tells you $f_a'$ can never jump and must hit every value between $a-1$ and $a+1$ near $0$, which is exactly why no positive sign can be maintained for $a\\le1$; Darboux forbids gaps in the range of a derivative but never forbids it from changing sign without notice."
  },
  {
    "theme": "darboux",
    "themeLabel": "Darboux & the Derivative's IVP",
    "title": "The Sign Function's Alibi",
    "difficulty": 4,
    "task": "Prove that",
    "tags": [
      "sgn",
      "jump discontinuity",
      "not a derivative",
      "darboux"
    ],
    "statement": "Let $\\operatorname{sgn}(x)$ equal $-1$ for $x<0$, $0$ for $x=0$, and $+1$ for $x>0$. Prove that there is NO function $F:\\mathbb R\\to\\mathbb R$ with $F'(x)=\\operatorname{sgn}(x)$ for every $x\\in\\mathbb R$. More generally, show that no function differing from $\\operatorname{sgn}$ at finitely many points can be a derivative on any interval containing $0$.",
    "answer": "Proved. No such $F$ exists: $\\operatorname{sgn}$ attains the values $-1$ and $+1$ but omits every value in $(-1,0)\\cup(0,1)$, so it lacks the intermediate value property and therefore cannot be any function's derivative (Darboux's theorem). Altering $\\operatorname{sgn}$ at finitely many points cannot restore the IVP either, since only finitely many of the omitted values could ever be supplied.",
    "trap": "Defining $F(x)=|x|$ and declaring $F'=\\operatorname{sgn}$. But $|x|$ is not differentiable at $0$: its right and left difference quotients at $0$ are $+1$ and $-1$, so $F'(0)$ does not exist and $F'=\\operatorname{sgn}$ fails precisely at the one point that matters. Patching the value $\\operatorname{sgn}(0)$ cannot help: the obstruction is the whole interval of omitted slopes, not the single value at $0$.",
    "solutions": [
      {
        "name": "Darboux IVP obstruction",
        "steps": [
          "Suppose $F'=\\operatorname{sgn}$ on an interval $I\\ni 0$. Choose any $a,b\\in I$ with $a<0<b$; then $F'(a)=\\operatorname{sgn}(a)=-1$ and $F'(b)=\\operatorname{sgn}(b)=+1$.",
          "Darboux's theorem says a derivative on $[a,b]$ attains every value between $F'(a)$ and $F'(b)$. So $F'$ must take the value $\\tfrac12\\in(-1,+1)$ at some point of $[a,b]$.",
          "But $F'=\\operatorname{sgn}$ takes only the three values $-1,0,+1$ — it never equals $\\tfrac12$. This contradiction shows no such $F$ exists.",
          "For the generalization, let $g$ agree with $\\operatorname{sgn}$ except on a finite set $S$, and suppose $g$ were a derivative on $I\\ni 0$. Pick $a,b\\in I\\setminus S$ with $a<0<b$, so $g(a)=-1,\\ g(b)=+1$. The set of values $g$ actually attains is contained in $\\{-1,0,+1\\}\\cup g(S)$, a finite set, so there exists a value $v\\in(-1,+1)$ that $g$ never attains. By Darboux $g$ would have to attain $v$ on $[a,b]$ — contradiction. $\\blacksquare$"
        ]
      },
      {
        "name": "Reductio via $|x|$ and one-sided slopes",
        "steps": [
          "Suppose $F'=\\operatorname{sgn}$ everywhere. On $(0,\\infty)$ we have $F'=+1$, so $F(x)=x+c_1$ there; on $(-\\infty,0)$ we have $F'=-1$, so $F(x)=-x+c_2$ there.",
          "Differentiability of $F$ at $0$ forces continuity at $0$: the one-sided limits $\\lim_{x\\to0^+}F=c_1$ and $\\lim_{x\\to0^-}F=c_2$ must equal $F(0)$, so $c_1=c_2=:c$ and $F(x)=|x|+c$ in a neighborhood of $0$.",
          "Now compute the difference quotients at $0$: from the right, $\\dfrac{F(h)-F(0)}{h}=\\dfrac{(h+c)-c}{h}=+1$; from the left, $\\dfrac{F(h)-F(0)}{h}=\\dfrac{(-h+c)-c}{h}=-1$.",
          "The right and left limits are $+1$ and $-1$, which disagree, so $F'(0)$ does not exist. Hence no $F$ can satisfy $F'=\\operatorname{sgn}$ at $0$, and the same one-sided-slope mismatch persists even if $\\operatorname{sgn}$ is altered at finitely many points away from a neighborhood of $0$. $\\blacksquare$"
        ]
      }
    ],
    "remark": "Insight: a jump discontinuity is fatal for being a derivative. Darboux's theorem is often summarised as 'derivatives have no jump discontinuities' — $\\operatorname{sgn}$, with its unit jump across $0$, is the cleanest illustration. The finite-patch version sharpens the lesson: the obstruction is an entire interval of omitted values, so repairing the value at a few points (where the trap hopes to rescue $|x|$) can never recover the intermediate value property."
  },
  {
    "theme": "darboux",
    "themeLabel": "Darboux & the Derivative's IVP",
    "title": "A Slope That Refuses the Middle",
    "difficulty": 5,
    "task": "Prove that",
    "tags": [
      "two-valued derivative",
      "constant",
      "darboux",
      "connectedness"
    ],
    "statement": "Suppose $f:\\mathbb R\\to\\mathbb R$ is differentiable everywhere and there exist reals $a<b$ such that $f'(x)\\in\\{a,b\\}$ for every $x$ (that is, the derivative takes only the two values $a$ and $b$). Prove that $f'$ is constant, and determine all such functions $f$.",
    "answer": "Proved. The derivative must be constant: either $f'\\equiv a$ or $f'\\equiv b$. Consequently $f(x)=ax+c$ or $f(x)=bx+c$ for some constant $c$, and these are exactly all such functions.",
    "trap": "Imagining a function whose slope is sometimes $a$ and sometimes $b$, e.g. a smooth ramp that switches between two slopes. Darboux forbids this: a derivative cannot take two distinct values while skipping the interval between them, no matter how the switch is engineered. (A piecewise-linear ramp with slope $a$ then $b$ fails to be differentiable at the join, where its one-sided derivatives disagree.)",
    "solutions": [
      {
        "name": "Darboux forces an omitted value",
        "steps": [
          "Suppose, for contradiction, that $f'$ takes both values: $f'(x_1)=a$ and $f'(x_2)=b$ at some points $x_1\\ne x_2$.",
          "Pick any $\\lambda$ with $a<\\lambda<b$ (such $\\lambda$ exists since $a<b$). By Darboux's theorem applied to the differentiable $f$ on $[\\min(x_1,x_2),\\max(x_1,x_2)]$, the derivative $f'$ attains $\\lambda$ at some interior point.",
          "But $\\lambda\\notin\\{a,b\\}$, contradicting the hypothesis $f'(x)\\in\\{a,b\\}$. Hence $f'$ cannot take both values; it takes only one, so it is constant.",
          "Therefore $f'\\equiv a$ or $f'\\equiv b$. Integrating, $f(x)=ax+c$ or $f(x)=bx+c$ for a constant $c$. $\\boxed{f\\text{ is linear with slope }a\\text{ or }b}$"
        ]
      },
      {
        "name": "Connected image argument",
        "steps": [
          "By Darboux's theorem, the image $f'(\\mathbb R)$ of a derivative satisfies the intermediate value property, so it is a connected subset of $\\mathbb R$ (an interval).",
          "By hypothesis $f'(\\mathbb R)\\subseteq\\{a,b\\}$. A connected subset of the two-point set $\\{a,b\\}$ (with $a\\ne b$) must be a single point, since any subset containing both $a$ and $b$ omits every value strictly between them and is therefore disconnected.",
          "Thus $f'(\\mathbb R)=\\{a\\}$ or $f'(\\mathbb R)=\\{b\\}$, i.e. $f'$ is constant.",
          "Integrating the constant derivative gives the linear $f$. $\\boxed{f(x)=ax+c\\ \\text{or}\\ f(x)=bx+c}$"
        ]
      }
    ],
    "remark": "Insight: a derivative cannot take only two values and skip between them is Darboux distilled. The image of a derivative is always an interval, even when the derivative itself is discontinuous (as for $x^2\\sin(1/x)$). That quiet constraint turns a two-value hypothesis into outright rigidity."
  },
  {
    "theme": "darboux",
    "themeLabel": "Darboux & the Derivative's IVP",
    "title": "A Slope That Shakes at Every 1/n Yet Skips No Value",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "uniform-convergence",
      "saltus",
      "dense-discontinuities",
      "termwise-differentiation",
      "geometric-series"
    ],
    "statement": "For $n\\ge 1$ let $a_n=\\dfrac1n$ and define the scaled bump-oscillator \\[ g_n(x)=\\bigl(x-a_n\\bigr)^{2}\\sin\\frac{1}{\\,x-a_n\\,}\\quad(x\\neq a_n),\\qquad g_n(a_n)=0. \\] Put \\[ F(x)=\\sum_{n=1}^{\\infty}\\frac{1}{3^{\\,n}}\\,g_n(x),\\qquad x\\in\\mathbb{R}. \\] It is a standard fact (which you should establish) that $F$ is differentiable at every real point, that $F'$ is continuous off the set $S=\\{1/n:n\\ge1\\}$, and that $F'$ is discontinuous at every point of $S$ -- so $F'$ has infinitely many discontinuities, accumulating at $0$. For a function $h$ and a point $p$ define the saltus (oscillation) \\[ \\operatorname{osc}(h,p)=\\Bigl(\\limsup_{x\\to p}h(x)\\Bigr)-\\Bigl(\\liminf_{x\\to p}h(x)\\Bigr). \\] Knowing that $F'$ nonetheless possesses the intermediate-value (Darboux) property on all of $\\mathbb{R}$, evaluate the total saltus of $F'$ over its entire discontinuity set, \\[ T=\\sum_{n=1}^{\\infty}\\operatorname{osc}\\!\\bigl(F',\\,\\tfrac1n\\bigr). \\]",
    "answer": "\\[\\boxed{T=1}\\]",
    "trap": "The seductive false move is to confuse the size of the jump of $F'$ at $1/n$ with the coefficient $c_n=3^{-n}$ itself. A student writes $F'(x)=\\sum_m c_m g_m'(x)$ with $g_m'(x)=2(x-a_m)\\sin\\frac1{x-a_m}-\\cos\\frac1{x-a_m}$, notices that near $a_n$ the only non-continuous piece is the term $-c_n\\cos\\frac1{x-a_n}$, and -- reading 'amplitude of $\\cos$ is $1$' -- declares the oscillation at $1/n$ to be $c_n$, hence $T=\\sum 3^{-n}=\\tfrac12$. This is the conceptual trap: $\\operatorname{osc}$ measures $\\limsup-\\liminf$, and $-\\cos$ swings across the full range $[-1,1]$, a span of $2$, not $1$. The continuous remainder $\\sum_{m\\neq n}c_m g_m'+2c_n(x-a_n)\\sin(\\cdots)$ contributes $0$ to the saltus, so $\\operatorname{osc}(F',1/n)=2c_n=2\\cdot3^{-n}$ and $T=\\sum 2\\cdot 3^{-n}=1$. A second, deeper trap is to disbelieve the premise -- to argue that a function discontinuous at infinitely many points cannot be a derivative or cannot be Darboux; Darboux's theorem forbids jumps in a derivative's attained values, never the existence of infinitely many oscillatory discontinuities, so the hypothesis is genuine and the dense wobble coexists with the IVP.",
    "solutions": [
      {
        "name": "Uniform convergence, then isolate the saltus term",
        "steps": [
          "Each $g_n$ is differentiable on $\\mathbb{R}$ with $g_n'(x)=2(x-a_n)\\sin\\frac1{x-a_n}-\\cos\\frac1{x-a_n}$ for $x\\neq a_n$ and $g_n'(a_n)=0$ (the difference quotient $\\frac{g_n(a_n+h)}{h}=h\\sin\\frac1h\\to0$). On any bounded set $|x|\\le M$ we have $|g_n'(x)|\\le 2(M+1)+1=:K_M$, a constant. Hence $\\sum_n 3^{-n}g_n'$ is dominated by the convergent series $\\sum_n 3^{-n}K_M$; by the Weierstrass $M$-test it converges uniformly on $|x|\\le M$.",
          "Since $\\sum 3^{-n}g_n$ converges (indeed $|g_n|\\le (x-a_n)^2$) and the derivative series converges uniformly, term-by-term differentiation is justified: $F$ is differentiable everywhere and $F'(x)=\\sum_{n=1}^{\\infty}3^{-n}g_n'(x)$. Each $g_m'$ is continuous except at $a_m$ (where $-\\cos\\frac1{x-a_m}$ has no limit), and uniform convergence transfers continuity, so $F'$ is continuous on $\\mathbb{R}\\setminus S$.",
          "Fix a node $a_k=1/k$. Split $F'(x)=\\underbrace{-\\,3^{-k}\\cos\\frac1{x-a_k}}_{\\text{oscillatory}}+\\underbrace{3^{-k}\\,2(x-a_k)\\sin\\tfrac1{x-a_k}+\\sum_{m\\neq k}3^{-m}g_m'(x)}_{=:R_k(x)}.$ The remainder $R_k$ is continuous at $a_k$: the first piece $\\to0$ since $|2(x-a_k)\\sin(\\cdots)|\\le2|x-a_k|$, and the tail $\\sum_{m\\neq k}3^{-m}g_m'$ is a uniformly convergent series of functions each continuous at $a_k$. So $\\lim_{x\\to a_k}R_k(x)=R_k(a_k)$ exists, contributing nothing to the oscillation.",
          "Therefore $\\operatorname{osc}(F',a_k)=\\operatorname{osc}\\!\\bigl(-3^{-k}\\cos\\tfrac1{x-a_k},\\,a_k\\bigr)$. As $x\\to a_k$, $\\frac1{x-a_k}$ ranges over all large reals, so $\\cos\\frac1{x-a_k}$ has $\\limsup=1$, $\\liminf=-1$; thus $-3^{-k}\\cos$ has $\\limsup=3^{-k}$, $\\liminf=-3^{-k}$, giving $\\operatorname{osc}(F',1/k)=3^{-k}-(-3^{-k})=2\\cdot3^{-k}>0$ (in particular $F'$ is discontinuous at every node).",
          "Summing the geometric series, $T=\\sum_{n=1}^{\\infty}2\\cdot3^{-n}=2\\cdot\\dfrac{1/3}{1-1/3}=2\\cdot\\tfrac12=\\boxed{1}.$ Darboux's theorem applies throughout because $F'$ is a genuine derivative, so it has the IVP despite this dense set of oscillatory discontinuities."
        ]
      },
      {
        "name": "Saltus as a continuous-linear functional on the coefficients",
        "steps": [
          "Write $F'=\\sum_m c_m g_m'$ with $c_m=3^{-m}$ (justified as in Method 1 by uniform convergence). The saltus operator $h\\mapsto\\operatorname{osc}(h,p)$ satisfies $\\operatorname{osc}(\\lambda h,p)=|\\lambda|\\operatorname{osc}(h,p)$, and $\\operatorname{osc}(h_1+h_2,p)=\\operatorname{osc}(h_1,p)$ whenever $h_2$ is continuous at $p$ (since a continuous summand shifts both $\\limsup$ and $\\liminf$ by the same value).",
          "At $p=a_k$, only $g_k'$ is discontinuous; every other $g_m'$ ($m\\neq k$) is continuous there, and the finite/uniform tail $\\sum_{m\\neq k}c_m g_m'$ is continuous at $a_k$. Hence $\\operatorname{osc}(F',a_k)=\\operatorname{osc}(c_k g_k',a_k)=c_k\\,\\operatorname{osc}(g_k',a_k).$",
          "Compute the prototype oscillation. For $g(t)=t^2\\sin\\frac1t$, $g'(t)=2t\\sin\\frac1t-\\cos\\frac1t$; the term $2t\\sin\\frac1t\\to0$ is continuous at $0$, so $\\operatorname{osc}(g',0)=\\operatorname{osc}(-\\cos\\tfrac1t,0)=1-(-1)=2$. Translating by $a_k$ leaves the oscillation invariant: $\\operatorname{osc}(g_k',a_k)=2$.",
          "Thus $\\operatorname{osc}(F',1/k)=2c_k=2\\cdot3^{-k}$, and the total is the value of the linear functional on the coefficient vector: $T=\\sum_{k\\ge1}2c_k=2\\sum_{k\\ge1}3^{-k}=2\\cdot\\tfrac12=\\boxed{1}.$",
          "Remark within the method: because $\\sum c_k<\\infty$, the total saltus is finite even though there are infinitely many discontinuities — exactly the regime where a derivative can be 'badly' discontinuous yet remain Darboux."
        ]
      },
      {
        "name": "Two-sequence pincer at each node",
        "steps": [
          "Having $F'(x)=\\sum_m 3^{-m}g_m'(x)$ (Method 1), fix $k$ and approach $a_k=1/k$ along two explicit sequences. Let $u_j=a_k+\\dfrac1{(2j+1)\\pi}$ and $v_j=a_k+\\dfrac1{2\\pi j}$, both $\\to a_k$ as $j\\to\\infty$.",
          "At these points $\\frac1{u_j-a_k}=(2j+1)\\pi$ gives $\\cos=-1$, so the $k$-term equals $-3^{-k}\\cos=+3^{-k}$; and $\\frac1{v_j-a_k}=2\\pi j$ gives $\\cos=1$, so the $k$-term equals $-3^{-k}$. Also $2(x-a_k)\\sin\\frac1{x-a_k}=0$ at both (since $\\sin$ of $(2j+1)\\pi$ and $2\\pi j$ is $0$).",
          "Let $C_k=\\lim_{x\\to a_k}\\sum_{m\\neq k}3^{-m}g_m'(x)$ (exists by continuity of the tail at $a_k$). Then $F'(u_j)\\to C_k+3^{-k}$ and $F'(v_j)\\to C_k-3^{-k}$, so $\\limsup_{x\\to a_k}F'\\ge C_k+3^{-k}$ and $\\liminf_{x\\to a_k}F'\\le C_k-3^{-k}$. Since the oscillatory part is bounded in $[-3^{-k},3^{-k}]$ and the rest converges to $C_k$, these are equalities: $\\limsup=C_k+3^{-k}$, $\\liminf=C_k-3^{-k}$.",
          "Hence $\\operatorname{osc}(F',1/k)=(C_k+3^{-k})-(C_k-3^{-k})=2\\cdot3^{-k}$, independent of the (finite) value $C_k$. The pincer makes the factor $2$ visible: the two limit values straddle $C_k$ symmetrically by $\\pm3^{-k}$, total spread $2\\cdot3^{-k}$.",
          "Summing, $T=\\sum_{k\\ge1}2\\cdot3^{-k}=2\\cdot\\dfrac{1/3}{1-1/3}=\\boxed{1}.$ Every node genuinely contributes ($2\\cdot3^{-k}>0$), confirming $F'$ is discontinuous on all of $S$, yet as a derivative it still satisfies the intermediate-value property everywhere."
        ]
      }
    ],
    "remark": "The headline is a calibration of 'how badly can a derivative be discontinuous while staying Darboux': here $F'$ wobbles at every point of the infinite set $\\{1/n\\}$ (dense near its accumulation point $0$) and yet, being a derivative, hits every intermediate value -- Darboux constrains the *attained values*, never the *number* of discontinuities. The numeric punchline $T=1$ hides the only real decision: the saltus of $F'$ at $1/n$ is $2\\cdot3^{-n}$, not $3^{-n}$, because $\\operatorname{osc}=\\limsup-\\liminf$ and $-\\cos$ sweeps the full interval $[-1,1]$. Reading 'amplitude $=1$' halves the answer to $\\tfrac12$; reading 'range $=2$' gives the true $T=2\\sum 3^{-n}=1$. The convergence $\\sum 3^{-n}<\\infty$ is what makes the construction legal -- it forces uniform convergence of $\\sum c_n g_n'$, hence term-by-term differentiation, hence $F'$ really is a derivative and Darboux applies. Push the coefficients to a divergent $\\sum c_n$ and the machine breaks: the derivative series need not converge and $F$ need not be differentiable. Thus the same series both supplies infinitely many discontinuities and, via its convergence, guarantees the IVP -- the tension that makes the problem."
  },
  {
    "theme": "darboux",
    "themeLabel": "Darboux & the Derivative's IVP",
    "title": "The Floor Cannot Be Climbed",
    "difficulty": 5,
    "task": "Find the number of",
    "tags": [
      "floor function",
      "not a derivative",
      "jump",
      "count"
    ],
    "statement": "Consider the floor function $\\lfloor x\\rfloor$ on the interval $[0,5]$. Determine the number of points $p\\in(0,5)$ around which NO open interval exists on which $\\lfloor x\\rfloor$ is the derivative of some function (i.e. the points where failure to be a derivative is forced by Darboux's theorem). Also state, with proof, whether $\\lfloor x\\rfloor$ is a derivative on the full interval $[0,5]$.",
    "answer": "There are exactly $4$ such points: $p=1,2,3,4$ (the interior integers, where $\\lfloor x\\rfloor$ jumps). On the full interval $[0,5]$, $\\lfloor x\\rfloor$ is NOT a derivative.",
    "trap": "Thinking $\\lfloor x\\rfloor$ must be a derivative because it is Riemann-integrable and piecewise constant, so it has an antiderivative in the integral sense. The Riemann integral $A(x)=\\int_0^x\\lfloor t\\rfloor\\,dt$ exists, but $A$ is the continuous piecewise-linear area function with a corner at every integer: its left slope at $n$ is $n-1$ and its right slope is $n$, so $A'(n)$ does not exist and $A'\\neq\\lfloor x\\rfloor$ at the jumps. Integrability does not imply being a derivative.",
    "solutions": [
      {
        "name": "Jump points violate Darboux; count them",
        "steps": [
          "At each integer $n\\in\\{1,2,3,4\\}$ we have $\\lim_{x\\to n^-}\\lfloor x\\rfloor=n-1$ while $\\lfloor x\\rfloor=n$ for $x\\ge n$: a jump discontinuity of size $1$.",
          "On any open interval $(n-\\epsilon,n+\\epsilon)$ the function $\\lfloor x\\rfloor$ takes only the values $n-1$ and $n$, omitting the intermediate value $n-\\tfrac12$. Hence it lacks the intermediate value property there. By Darboux's theorem every derivative has the IVP, so $\\lfloor x\\rfloor$ cannot be a derivative on that interval.",
          "Away from the integers, $\\lfloor x\\rfloor$ is locally constant, hence on any such neighbourhood it equals the derivative of a linear function $cx$. So the forced-failure points are exactly the interior integers $1,2,3,4$, giving $\\boxed{4}$.",
          "Globally on $[0,5]$, $\\lfloor x\\rfloor$ attains $\\{0,1,2,3,4,5\\}$ but skips e.g. $\\tfrac12$; the presence of even one jump destroys the IVP, so $\\lfloor x\\rfloor$ is not a derivative on $[0,5]$. $\\blacksquare$"
        ]
      },
      {
        "name": "Contradiction with a candidate antiderivative",
        "steps": [
          "Suppose $F'=\\lfloor x\\rfloor$ on $[0,5]$. On each open piece $(n,n+1)$ we would need $F(x)=nx+c_n$, so $F$ has slope $n$ there.",
          "Differentiability of $F$ at the integer $n$ forces its two one-sided derivatives to agree, i.e. $F'(n)$ would equal both the left slope $n-1$ and the right slope $n$ — impossible since $n-1\\neq n$.",
          "Thus $F$ fails to be differentiable at each interior integer; there are exactly $4$ of them in $(0,5)$, namely $1,2,3,4$, giving $\\boxed{4}$. The same contradiction shows no $F$ works on all of $[0,5]$, so $\\lfloor x\\rfloor$ is not a derivative there. $\\blacksquare$"
        ]
      }
    ],
    "remark": "Insight: step functions are the prototypical non-derivatives. Every interior jump is a Darboux veto. The area function $x\\mapsto\\int_0^x\\lfloor t\\rfloor\\,dt$ is an antiderivative in name only — it is a continuous piecewise-linear function whose corners at the integers mean its derivative is not the jumpy floor. Note the endpoints $0$ and $5$ are excluded from the open interval $(0,5)$, so only the four interior integers are counted."
  },
  {
    "theme": "darboux",
    "themeLabel": "Darboux & the Derivative's IVP",
    "title": "Zero on Every Rational, Yet Never at Rest",
    "difficulty": 5,
    "task": "Decide and prove",
    "tags": [
      "dense-zero-set",
      "pompeiu-derivative",
      "false-rigidity",
      "inverse-function",
      "ivp-not-continuity"
    ],
    "statement": "Let $f:\\mathbb{R}\\to\\mathbb{R}$ be differentiable, and suppose its critical set \\[ Z=\\{\\,x\\in\\mathbb{R}: f'(x)=0\\,\\} \\] is dense in $\\mathbb{R}$. A natural conjecture, much loved by students who have just met Darboux's theorem, runs: \"since $f'$ has the intermediate-value property, a derivative that is $0$ on a dense set can never sneak a nonzero value past the gaps, so $f'\\equiv0$ and $f$ is constant.\"\n\nDecide whether this conjecture is true. Precisely:\n(a) Prove that IF, in addition, $f'$ is continuous, then $f$ must be constant.\n(b) Prove that WITHOUT the continuity hypothesis the conclusion fails: construct a differentiable, non-constant $f$ whose derivative vanishes on a dense set. State, as the boxed verdict, the exact extra hypothesis that makes density of the zero set force $f$ constant.\n\nThus pin down the role Darboux's theorem really plays here.",
    "answer": "\\[\\boxed{\\text{Forced constant} \\iff f' \\text{ is continuous; in general, no.}}\\]",
    "trap": "The conjecture is FALSE, and the trap is to believe Darboux's theorem rescues it. The seductive argument: \"$f'$ is a derivative, so by Darboux it has the intermediate-value property; an IVP function that equals $0$ on a dense set cannot jump to a nonzero value, hence $f'\\equiv0$.\" Every clause except the last is correct, and the last is exactly the unjustified leap. The intermediate-value property is FAR weaker than continuity: a Darboux function can be $0$ on a dense set AND nonzero on another dense set, taking every value in between along the way without ever being continuous. Pompeiu's classical derivative is precisely such a function -- it is a genuine derivative (so Darboux holds), it vanishes on a dense set, yet it is strictly positive on a dense set too. The hidden hypothesis the student silently inserts is continuity: a CONTINUOUS function zero on a dense set is identically zero, but the IVP alone gives no such conclusion. So Darboux forbids jumps in the literal sense of skipped values, but it does NOT forbid a derivative from oscillating between $0$ and positive values on interleaved dense sets. Density of $Z$ forces $f$ constant if and only if one also knows $f'$ is continuous.",
    "solutions": [
      {
        "name": "Part (a) by density-closure; Part (b) by inverting a cube-root sum (Pompeiu)",
        "steps": [
          "Part (a). Assume $f'$ is continuous and $f'=0$ on a dense set $Z$. Fix any $x\\in\\mathbb{R}$ and pick $z_n\\in Z$ with $z_n\\to x$ (possible since $Z$ is dense). By continuity $f'(x)=\\lim_n f'(z_n)=\\lim_n 0=0$. As $x$ was arbitrary, $f'\\equiv0$ on $\\mathbb{R}$, so $f$ is constant. (Here Darboux is not even needed: continuity plus a dense zero set already closes the case.)",
          "Part (b), the construction. Enumerate the rationals as $q_1,q_2,\\dots$ and put $\\sqrt[3]{\\,\\cdot\\,}$ for the real cube root (an increasing odd function). Define \\[ h(x)=\\sum_{k=1}^{\\infty}2^{-k}\\,\\sqrt[3]{\\,x-q_k\\,}. \\] Each term is continuous and strictly increasing; the series converges uniformly on bounded sets because $|\\sqrt[3]{x-q_k}|\\le C(1+|x|)^{1/3}$ there and $\\sum 2^{-k}<\\infty$. Hence $h$ is continuous and strictly increasing on $\\mathbb{R}$, a homeomorphism onto an open interval $J=h(\\mathbb{R})$.",
          "At each rational the slope blows up. Near $x=q_k$ the single term $2^{-k}\\sqrt[3]{x-q_k}$ contributes an infinite one-sided slope: $\\dfrac{h(x)-h(q_k)}{x-q_k}\\ge 2^{-k}\\,(x-q_k)^{-2/3}\\to+\\infty$ as $x\\to q_k$ (the remaining terms are increasing, so only help). Thus $h$ has a (two-sided) derivative $+\\infty$ at every $q_k$: $h'(q_k)=+\\infty$.",
          "Let $f=h^{-1}:J\\to\\mathbb{R}$, the inverse homeomorphism; extend it to all of $\\mathbb{R}$ by any affine continuation outside $J$ if a function on $\\mathbb{R}$ is desired (the phenomenon already lives on $J$). Since $h$ is differentiable with $h'>0$ (allowing $+\\infty$), the inverse-function theorem for monotone maps gives that $f$ is differentiable at every $y=h(x)$ with $f'(y)=1/h'(x)$, where $1/(+\\infty):=0$. So $f$ is differentiable everywhere on $J$.",
          "Now read off the zero set. At $y_k:=h(q_k)$ we get $f'(y_k)=1/h'(q_k)=1/(+\\infty)=0$. The points $\\{q_k\\}$ are dense in $\\mathbb{R}$ and $h$ is a homeomorphism, so $\\{y_k\\}=\\{h(q_k)\\}$ is dense in $J$. Hence $f'=0$ on a dense set. Yet $f$ is strictly increasing (inverse of a strictly increasing map), so $f$ is NON-constant. This is exactly a differentiable non-constant function with a dense critical set.",
          "Conclusion. Part (a) shows continuity of $f'$ forces $f$ constant; part (b) shows that without it the conjecture is false. Therefore $f$ is forced to be constant precisely when $f'$ is continuous, and Darboux's theorem alone (the IVP of $f'$) does not suffice: \\[\\boxed{\\text{Forced constant}\\iff f'\\text{ is continuous; in general, no.}}\\]"
        ]
      },
      {
        "name": "Why Darboux cannot rescue the conjecture: a Darboux function zero on a dense set need not vanish",
        "steps": [
          "Isolate the false step. The student's chain is: $f'$ is a derivative $\\Rightarrow$ (Darboux) $f'$ has the IVP $\\Rightarrow$ $f'=0$ on a dense set $\\Rightarrow$ $f'\\equiv0$. The first implication is Darboux's theorem and is correct; the last implication is the error. The claim being smuggled in is: \"an IVP function that is $0$ on a dense set is $\\equiv0$.\" We show this is false, which is exactly what blocks the conjecture.",
          "The IVP is strictly weaker than continuity. For the Pompeiu derivative $g:=f'$ of the construction in Method 1, $g\\ge0$ everywhere (as $f$ is increasing) and $g$ is a derivative, so by Darboux its range is an interval. We have $g=0$ on the dense set $\\{h(q_k)\\}$. But at $y=h(t)$ with $t$ NOT a rational $q_k$, $h$ has a finite positive derivative $h'(t)$ (no cube-root cusp there), so $g(y)=1/h'(t)>0$. The set of such $t$ is dense, and its $h$-image is dense in $J$. Hence $g>0$ on a dense set as well.",
          "So $g$ is a single Darboux function that is $0$ on a dense set and strictly positive on a dense set. By the IVP it does take every value between $0$ and its positive values, sweeping the whole interval $[0,\\sup g)$ near such points -- this is consistent, not contradictory. The IVP never says a function constant on a dense set is constant; only continuity says that. The dense zero set and the dense positive set interleave, and $g$ is wildly discontinuous on each of them.",
          "Therefore the conjecture's logic collapses exactly at the unstated continuity hypothesis: Darboux forbids $g$ from skipping intermediate values, but it permits $g$ to revisit $0$ densely while still being positive densely. Reinstating continuity (Part (a)) immediately kills this: a continuous $g$ that is $0$ on a dense set is $0$ everywhere. The verdict stands: \\[\\boxed{\\text{Forced constant}\\iff f'\\text{ is continuous; in general, no.}}\\]"
        ]
      },
      {
        "name": "Contrapositive packaging: dense zero set + nonconstant forces a discontinuous derivative",
        "steps": [
          "Reframe (a) as a contrapositive. Suppose $f$ is differentiable, $f'=0$ on a dense set $Z$, and $f$ is NOT constant. Then there exist $a<b$ with $f(a)\\ne f(b)$; by the Mean Value Theorem there is $c\\in(a,b)$ with $f'(c)=\\dfrac{f(b)-f(a)}{b-a}\\ne0$. So $f'$ takes a nonzero value at $c$.",
          "But $Z$ is dense, so there are points $z_n\\to c$ with $f'(z_n)=0$. Thus $f'$ has $z_n\\to c$ with $f'(z_n)=0\\not\\to f'(c)\\ne0$: the derivative is DISCONTINUOUS at $c$. Equivalently, contrapositive of (a): if $f'$ were continuous, no such $c$ could exist, forcing $f$ constant -- recovering Part (a).",
          "This also predicts the only way Part (b) can succeed: any witnessing $f$ must have a derivative that is discontinuous on a dense set (indeed at every point where $f'\\ne0$). The Pompeiu inverse $f=h^{-1}$ of Method 1 realizes exactly this -- $f'$ jumps between $0$ (on the dense rational-image set) and positive values (on the dense complementary set), discontinuous everywhere it is nonzero, while still being a bona fide derivative obeying Darboux.",
          "Hence both halves are governed by the single dividing line of continuity: density of the zero set forces $f$ constant exactly under the extra hypothesis that $f'$ is continuous, and the intermediate-value property guaranteed by Darboux is not enough. \\[\\boxed{\\text{Forced constant}\\iff f'\\text{ is continuous; in general, no.}}\\]"
        ]
      }
    ],
    "remark": "The whole problem is a referendum on what Darboux's theorem actually buys you. It guarantees the intermediate-value property of $f'$ -- and students reflexively treat the IVP as a stand-in for continuity. It is not. A Darboux function can equal $0$ on a dense set while being nonzero on a complementary dense set, sweeping all values in between; Pompeiu's derivative does exactly that. So the rigidity \"dense critical set $\\Rightarrow$ constant\" is genuinely false for differentiable functions and becomes true only when $f'$ is additionally continuous (then a continuous function zero on a dense set is zero everywhere -- one line, no Darboux required). The clean construction $h(x)=\\sum 2^{-k}\\sqrt[3]{x-q_k}$ is worth memorizing: summing cube-root cusps at every rational makes $h$ strictly increasing with $h'=+\\infty$ at each rational, so its inverse $f$ is differentiable, strictly increasing, and has $f'=0$ on the dense image of the rationals. The top-ranker takeaway: Darboux forbids a derivative from skipping values, but it never forbids one from being $0$ infinitely densely while staying alive -- continuity, not the IVP, is the source of dense-zero rigidity."
  },
  {
    "theme": "darboux",
    "themeLabel": "Darboux & the Derivative's IVP",
    "title": "The Forbidden Gap",
    "difficulty": 5,
    "task": "Prove that",
    "tags": [
      "mean value theorem",
      "darboux",
      "forbidden value",
      "contradiction"
    ],
    "statement": "A function $f$ is differentiable on $[0,1]$ with $f(0)=0$ and $f(1)=1$. A student claims that it is possible to have $f'(x)\\neq 1$ for every $x\\in[0,1]$ provided the derivative dodges the value $1$ by oscillating. Prove the student is wrong: show $f'(c)=1$ for some $c$. Then prove the stronger statement that $f'$ attains every value in some nondegenerate interval around $1$ as well — specifically, if additionally $f'(0)=3$, show $f'$ attains every value in $[1,3]$.",
    "answer": "Proved. By the Mean Value Theorem $f'(c)=\\frac{f(1)-f(0)}{1-0}=1$ for some $c\\in(0,1)$. With $f'(0)=3$ and $f'(c)=1$, Darboux's theorem gives that $f'$ attains every value in $[1,3]$ on the interval $[0,c]$.",
    "trap": "Believing that because $f'$ need not be continuous, it can 'jump over' the value $1$ the way $\\operatorname{sgn}$ jumps over $0$. The MVT pins down an exact slope $1$, and Darboux then forbids any gap around it — discontinuity of $f'$ gives no escape, because a derivative can never have a jump discontinuity.",
    "solutions": [
      {
        "name": "MVT then Darboux fill-in",
        "steps": [
          "MVT on $[0,1]$: there is $c\\in(0,1)$ with $f'(c)=\\frac{f(1)-f(0)}{1-0}=1$. This refutes the student: the value $1$ is necessarily attained.",
          "Now $f'(0)=3$ and $f'(c)=1$ with $0<c<1$.",
          "Darboux's theorem on $[0,c]$: $f'$ takes every value between $f'(0)=3$ and $f'(c)=1$, i.e. all of $[1,3]$. $\\boxed{f'(c)=1;\\ f'([0,c])\\supseteq[1,3]}$"
        ]
      },
      {
        "name": "Auxiliary function for the exact value",
        "steps": [
          "Let $g(x)=f(x)-x$. Then $g(0)=0=g(1)$, and $g$ is differentiable.",
          "By Rolle's theorem, $g'(c)=0$ for some $c\\in(0,1)$, i.e. $f'(c)=1$.",
          "Since $f'(0)=3>1=f'(c)$, the IVP for derivatives (Darboux) yields $f'$ attaining each value of $[1,3]$ between $0$ and $c$. $\\boxed{[1,3]\\subseteq f'([0,c])}$"
        ]
      }
    ],
    "remark": "Insight: MVT and Darboux are partners. MVT hands you one guaranteed slope; Darboux then spreads guaranteed slopes across a whole interval. Together they make 'dodging a value' impossible for a derivative. A concrete witness is $f(x)=2x^3-4x^2+3x$, which satisfies $f(0)=0$, $f(1)=1$, $f'(0)=3$, has $f'(c)=1$ at $c=\\tfrac13$, and whose derivative sweeps continuously from $3$ down to $1$ on $[0,\\tfrac13]$."
  },
  {
    "theme": "darboux",
    "themeLabel": "Darboux & the Derivative's IVP",
    "title": "Has the Property, Isn't the Slope",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "ivp not derivative",
      "isolated value",
      "darboux",
      "classification"
    ],
    "statement": "Three candidate functions on $\\mathbb{R}$ are proposed, identical away from the origin but with different values assigned at $0$. For each, determine whether it (i) has the intermediate value property (IVP), and (ii) is the derivative of some function differentiable on all of $\\mathbb{R}$. $\\;A(x)=\\sin\\frac1x$ for $x\\ne0$, $A(0)=0$. $\\;B(x)=\\sin\\frac1x$ for $x\\ne0$, $B(0)=2$. $\\;C(x)=\\sin\\frac1x$ for $x\\ne0$, $C(0)=5$. State the IVP status and the derivative status of each.",
    "answer": "$A$ HAS the IVP and IS a derivative: the convergent improper integral $G(x)=\\int_0^x\\sin\\frac1t\\,dt$ is differentiable everywhere with $G'(x)=\\sin\\frac1x$ for $x\\ne0$ and $G'(0)=0=A(0)$, so $A=G'$. $B$ FAILS the IVP at $0$ because $B(0)=2$ lies outside the cluster band $[-1,1]$: on a small interval $[0,\\delta]$ the endpoints straddle $1.5$ yet the value $1.5$ is never attained, so by Darboux's theorem $B$ is NOT a derivative. $C$ behaves exactly like $B$ with the off-band value $5$ — it FAILS the IVP at $0$ and is NOT a derivative.",
    "trap": "Assuming every function with the IVP must be a derivative, or — at the opposite extreme — assuming $\\sin(1/x)$ can never be a derivative because it is discontinuous at $0$. Both reflexes mislead: $A$ IS a derivative despite its essential discontinuity, since a derivative need only have the IVP, not continuity. The genuine obstruction in $B$ and $C$ is subtler: assigning $f(0)$ a value outside the cluster set $[-1,1]$ breaks the IVP at $0$, and only then does Darboux's theorem exclude them.",
    "solutions": [
      {
        "name": "Cluster-set test for the IVP, primitive for A",
        "steps": [
          "As $x\\to0$ the values $\\sin\\frac1x$ oscillate and are dense in $[-1,1]$; this is the cluster set at $0$. For the IVP to hold at $0$, the assigned value $f(0)$ must lie in this band, and no value caught between $f(0)$ and nearby attained values may be skipped. Numerically, sampling $x=1/n$ for $n$ up to $2\\times10^5$ gives $\\sin\\frac1x$ ranging over essentially all of $[-1,1]$, confirming the cluster set.",
          "$A$: here $A(0)=0\\in[-1,1]$. On any interval around $0$, $A$ is continuous off $0$ and sweeps through all of $[-1,1]$ arbitrarily close to $0$; since the assigned value already lies inside that swept band, no intermediate value is ever missed, so the IVP holds.",
          "$B,C$: here $B(0)=2$ and $C(0)=5$ lie outside $[-1,1]$. Pick $\\delta>0$ small; then $B(0)=2$ while $B(x)=\\sin\\frac1x\\le1$ for all $x\\in(0,\\delta]$. The endpoints $B(0)=2$ and $B(\\delta)\\le1$ straddle $1.5$, yet $1.5$ is attained nowhere on $[0,\\delta]$ (it exceeds $1$ for $x\\ne0$ and differs from $2$ at $0$). The IVP fails. The same argument with any value in $(1,5)$ kills $C$.",
          "A function that fails the IVP cannot be a derivative, by Darboux's theorem, so $B$ and $C$ are excluded. For $A$, the improper integral $G(x)=\\int_0^x\\sin\\frac1t\\,dt$ converges (Dirichlet/Abel test) and defines a function differentiable on all of $\\mathbb{R}$: for $x\\ne0$ the Fundamental Theorem gives $G'(x)=\\sin\\frac1x$, and $G'(0)=\\lim_{x\\to0}\\frac{G(x)}{x}=0=A(0)$. Hence $A=G'$. $\\boxed{A:\\ \\text{IVP and derivative};\\ B,C:\\ \\text{neither}}$"
        ]
      },
      {
        "name": "Direct disqualification of B, C; integration-by-parts bound for A",
        "steps": [
          "Disqualify $B$ directly: on $(0,\\delta)$ we have $\\sup B\\le1<1.5<2=B(0)$, so the image of $[0,\\delta]$ jumps from the band $[-1,1]$ straight to the isolated value $2$, skipping the entire interval $(1,2)$. No $x\\in[0,\\delta)$ satisfies $B(x)=1.5$, so a value strictly between the endpoint outputs is missed — $B$ is not Darboux. The identical argument with any target in $(1,5)$ disqualifies $C$.",
          "By Darboux's theorem every derivative has the IVP; contrapositively, a non-Darboux function is not a derivative. Thus neither $B$ nor $C$ is a derivative, regardless of how one might try to integrate $\\sin\\frac1x$.",
          "For $A$, exhibit an explicit everywhere-differentiable primitive. From $\\frac{d}{dt}\\!\\left[t^2\\cos\\frac1t\\right]=2t\\cos\\frac1t+\\sin\\frac1t$ we get $\\sin\\frac1t=\\frac{d}{dt}\\!\\left[t^2\\cos\\frac1t\\right]-2t\\cos\\frac1t$, so $G(x)=\\int_0^x\\sin\\frac1t\\,dt=x^2\\cos\\frac1x-\\int_0^x 2t\\cos\\frac1t\\,dt$. The remaining integral is bounded by $\\int_0^{|x|}2t\\,dt=x^2$, giving $|G(x)|\\le 2x^2$. Numerically this identity matches the directly computed integral and the bound holds at every tested point.",
          "Therefore $\\left|\\frac{G(x)}{x}\\right|\\le 2|x|\\to0$, so $G'(0)=0=A(0)$, while $G'(x)=\\sin\\frac1x$ for $x\\ne0$ by the Fundamental Theorem. Hence $G$ is differentiable on all of $\\mathbb{R}$ with $G'=A$. $\\boxed{A=G',\\ \\text{so } A \\text{ is a derivative; } B,C \\text{ are not}}$"
        ]
      }
    ],
    "remark": "Insight and the keystone subtlety of the chapter: being a derivative requires the IVP (Darboux), but the IVP alone is not sufficient in general — genuine Darboux-but-not-derivative functions exist, such as Conway's base-13 function, which is wildly surjective on every interval yet fails to be of Baire class 1 and so is no one's derivative. The present trio is gentler: the only obstruction is the artificially placed off-band value $f(0)=2$ or $5$, which already breaks the IVP at the origin. Remove that flaw, as in $A$, and the same oscillating formula becomes a perfectly legitimate derivative — discontinuity and all."
  },
  {
    "theme": "darboux",
    "themeLabel": "Darboux & the Derivative's IVP",
    "title": "A Prescribed Slope Is Forced, a Repeated Zero Is Not",
    "difficulty": 5,
    "task": "Prove",
    "tags": [
      "darboux",
      "intermediate-value",
      "forced-attainment",
      "zero-set",
      "discontinuous-derivative",
      "counterexample"
    ],
    "statement": "Let $f:[0,1]\\to\\mathbb{R}$ be differentiable on the whole interval (with one-sided derivatives at the ends), and suppose \\[ f'(0)=-3,\\qquad f'(1)=5, \\] while $f'$ is not continuous at any point of $[0,1]$ (so $f'$ is a genuinely wild derivative -- no continuity to lean on anywhere).\n(a) Prove that there exists $c\\in(0,1)$ with \\[ f'(c)=\\sqrt{2}\\,\\pi, \\] i.e. the derivative is FORCED to take the specific irrational value $\\sqrt2\\,\\pi$, even though $f'$ is nowhere continuous and you have no formula for $f$.\n(b) Prove that the zero set $Z=\\{x\\in[0,1]:f'(x)=0\\}$ is necessarily nonempty, but is NOT forced to be large: exhibit one such $f$ (meeting all the hypotheses above, in particular with $f'$ discontinuous on a dense set) for which $Z$ is a single point. Conclude that `a sign-reversing wild derivative must vanish infinitely often' is false.\nThroughout, you may use without proof that $\\sqrt2\\,\\pi=4.4428\\ldots$",
    "answer": "\\[\\boxed{\\exists\\,c\\in(0,1):\\ f'(c)=\\sqrt2\\,\\pi,\\qquad Z\\neq\\varnothing\\ \\text{ yet }\\ Z\\ \\text{can be a single point}}\\]",
    "trap": "The seductive but WRONG chain of reasoning runs: `$f'$ is discontinuous everywhere, so the Intermediate Value Theorem does not apply to $f'$; therefore there is no guarantee that the awkward value $\\sqrt2\\,\\pi$ is attained -- and conversely, since a discontinuous function sweeping from $-3$ up to $5$ must do so by violent oscillation, $f'$ ought to smash through $0$ infinitely many times, so $Z$ should be infinite.' BOTH halves are false, and for the SAME deep reason -- the conceptual content of Darboux's theorem. (i) Darboux's theorem says a derivative ALWAYS has the intermediate-value property, continuity or not; so the value $\\sqrt2\\,\\pi\\in(-3,5)$ is forced to be hit -- discontinuity is irrelevant to ATTAINMENT. (ii) But Darboux says nothing about MULTIPLICITY: it guarantees at least one $c$ with $f'(c)=0$ (because $0\\in(-3,5)$ too), and that is ALL it guarantees. A derivative may cross from negative to positive through a single, clean, even continuous-at-that-one-point zero while being discontinuous on a dense set everywhere else. The trap is to conflate `Darboux forbids a JUMP / a sign change without a zero' (true) with `a wild derivative must oscillate through many zeros' (false). Forced VALUE, unforced COUNT.",
    "solutions": [
      {
        "name": "Darboux directly for (a); Darboux + an explicit collapsing-amplitude witness for (b)",
        "steps": [
          "Part (a). Darboux's theorem: if $g$ is differentiable on an interval $I$ and $a<b$ in $I$, then $g'$ takes every value between $g'(a)$ and $g'(b)$ on $[a,b]$ -- with NO continuity hypothesis on $g'$. Here $g=f$, $a=0$, $b=1$, $g'(0)=-3$, $g'(1)=5$. Since $-3<\\sqrt2\\,\\pi<5$ (as $\\sqrt2\\,\\pi=4.4428\\ldots<5$), the value $\\sqrt2\\,\\pi$ lies strictly between $f'(0)$ and $f'(1)$, so there is $c\\in(0,1)$ with $f'(c)=\\sqrt2\\,\\pi$. Discontinuity of $f'$ is no obstruction whatsoever; this is precisely the IVP-for-derivatives content. Hence (a) holds.",
          "Part (b), nonemptiness of $Z$. Apply the SAME theorem to the value $0$: since $0\\in(-3,5)$, Darboux yields $c_0\\in(0,1)$ with $f'(c_0)=0$. So $Z\\neq\\varnothing$ always -- a sign change of a derivative cannot occur without a zero (Darboux forbids the jump). This holds for EVERY admissible $f$.",
          "Part (b), the witness with $|Z|=1$. Build $f$ through its derivative. Let $q_1,q_2,\\dots$ enumerate the rationals of $(0,1)$ and put $P(x)=\\sum_{n\\ge1}2^{-n}(x-q_n)^2\\sin\\frac1{x-q_n}$ (value $0$ at each $q_n$). Each term is differentiable with derivative bounded by $1+2|x-q_n|\\le3$, so the differentiated series converges uniformly; thus $P$ is differentiable with $|P'(x)|\\le\\sum_n2^{-n}\\cdot3=3$, and $P'$ is DISCONTINUOUS at every rational $q_n$ (the $n$-th term injects an un-cancellable oscillation of size $2^{-n}$ there).",
          "Now set $m(x)=x(1-x)\\bigl(x-\\tfrac38\\bigr)^2\\ge0$ and define $f$ by \\[ f'(x)=8x-3+m(x)\\,P'(x). \\] This is a genuine derivative: $8x-3$ is one, and $m\\,P'$ is the derivative of $\\int_0^x m\\,P'$ -- more cleanly, since $m$ is $C^1$ and $P'=(P)'$, the product rule shows $m(x)P(x)$ is differentiable with derivative $m'(x)P(x)+m(x)P'(x)$, and $m'P$ is continuous, so $m\\,P'=(mP)'-m'P$ is a difference of derivatives, hence a derivative; therefore $f'$ is a derivative and the corresponding $f$ exists.",
          "Endpoints: $m(0)=m(1)=0$, so $f'(0)=-3$ and $f'(1)=5$ exactly. Discontinuity: for any rational $q_n\\notin\\{0,\\tfrac38,1\\}$ we have $m(q_n)>0$ and $P'$ discontinuous there, so $f'$ is discontinuous at $q_n$; the rationals are dense, so $f'$ is discontinuous on a dense set (it is certainly no continuous derivative -- the wildness demanded by the hypothesis is present).",
          "Exactly one zero. For $x\\neq\\tfrac38$, $\\;|m(x)P'(x)|\\le 3\\,m(x)=3\\,x(1-x)\\bigl(x-\\tfrac38\\bigr)^2\\le\\tfrac34\\bigl(x-\\tfrac38\\bigr)^2$ (using $x(1-x)\\le\\tfrac14$). Since $|x-\\tfrac38|\\le\\tfrac58<\\tfrac{32}{3}$, we get $\\tfrac34\\bigl(x-\\tfrac38\\bigr)^2=\\tfrac34|x-\\tfrac38|\\cdot|x-\\tfrac38|<8\\,|x-\\tfrac38|$. Therefore $f'(x)=8\\bigl(x-\\tfrac38\\bigr)+m(x)P'(x)$ has the SAME sign as $x-\\tfrac38$ for every $x\\neq\\tfrac38$, and $f'(\\tfrac38)=8\\cdot\\tfrac38-3+0=0$. Hence $Z=\\{\\tfrac38\\}$ is a single point.",
          "Conclusion. Part (a) is forced by Darboux; in (b), $Z\\neq\\varnothing$ is also forced, yet the constructed $f$ has $|Z|=1$, so multiplicity is NOT forced: $\\boxed{\\exists\\,c\\in(0,1):f'(c)=\\sqrt2\\,\\pi,\\ \\ Z\\neq\\varnothing\\text{ yet }Z\\text{ can be a single point}}$."
        ]
      },
      {
        "name": "Reduce (a) to Rolle on an auxiliary function (proving Darboux on the spot); same witness for (b)",
        "steps": [
          "Part (a) without quoting Darboux as a black box. Define $\\varphi(x)=f(x)-\\sqrt2\\,\\pi\\,x$ on $[0,1]$. Then $\\varphi$ is differentiable with $\\varphi'(x)=f'(x)-\\sqrt2\\,\\pi$, and $\\varphi'(0)=-3-\\sqrt2\\,\\pi<0$, $\\varphi'(1)=5-\\sqrt2\\,\\pi>0$ (since $\\sqrt2\\,\\pi<5$).",
          "Because $\\varphi'(0)<0$, $\\varphi$ is strictly decreasing at $0$, so $\\varphi(x)<\\varphi(0)$ for $x$ slightly $>0$; because $\\varphi'(1)>0$, $\\varphi$ is strictly increasing at $1$, so $\\varphi(x)<\\varphi(1)$ for $x$ slightly $<1$. Hence the continuous function $\\varphi$ does NOT attain its minimum on $[0,1]$ at either endpoint; its minimum (which exists by extreme value theorem) is attained at some interior $c\\in(0,1)$.",
          "At an interior minimum of a differentiable function, the derivative vanishes (Fermat): $\\varphi'(c)=0$, i.e. $f'(c)=\\sqrt2\\,\\pi$. This is exactly the Darboux conclusion for the value $\\sqrt2\\,\\pi$, derived from Fermat/extreme-value alone -- so the attainment is forced with no appeal to continuity of $f'$. (Taking the value $0$ instead, i.e. $\\varphi(x)=f(x)$, the same argument forces a $c_0$ with $f'(c_0)=0$, giving $Z\\neq\\varnothing$.)",
          "Part (b). The lower bound $Z\\neq\\varnothing$ is the previous paragraph with target $0$. For the single-point realisation, reuse the witness $f'(x)=8x-3+m(x)P'(x)$, $m(x)=x(1-x)(x-\\tfrac38)^2$, $P(x)=\\sum 2^{-n}(x-q_n)^2\\sin\\frac1{x-q_n}$, exactly as constructed before: $f'(0)=-3$, $f'(1)=5$, $f'$ discontinuous on the dense rationals, and the sign of $f'(x)$ equals the sign of $x-\\tfrac38$ for $x\\neq\\tfrac38$ because $|m P'|\\le\\tfrac34(x-\\tfrac38)^2<8|x-\\tfrac38|$.",
          "Thus $f'$ vanishes only at $x=\\tfrac38$: $Z=\\{\\tfrac38\\}$. The auxiliary-function route shows attainment of $\\sqrt2\\,\\pi$ and of $0$ are both forced, while the witness shows the zero of $f'$ need occur only once. $\\boxed{\\exists\\,c:f'(c)=\\sqrt2\\,\\pi,\\ \\ Z\\neq\\varnothing\\text{ yet }|Z|=1\\text{ is possible}}$."
        ]
      },
      {
        "name": "Connectedness of the derivative's range for (a); amplitude-collapse view of the witness for (b)",
        "steps": [
          "Part (a) via connectedness. A theorem equivalent to Darboux: the image $J=f'([0,1])$ of a derivative is an INTERVAL (a connected subset of $\\mathbb{R}$). Indeed if $u<v$ both lie in $J$ and $w\\in(u,v)$, the auxiliary-minimum argument of Method 2 (applied to $f(x)-wx$ on the subinterval whose endpoints realise $u,v$) produces a point mapping to $w$; so $J$ contains every value between any two of its values, i.e. $J$ is an interval.",
          "Here $-3=f'(0)\\in J$ and $5=f'(1)\\in J$, so the interval $J$ contains $[-3,5]$. Since $\\sqrt2\\,\\pi=4.4428\\ldots\\in[-3,5]\\subseteq J$, there is $c$ with $f'(c)=\\sqrt2\\,\\pi$; and $0\\in[-3,5]\\subseteq J$ gives $Z\\neq\\varnothing$. Forced attainment is just `the range is an interval, and our targets sit inside it'.",
          "Part (b), the collapse-of-amplitude picture. Why can a wild derivative cross $0$ only once? Decompose $f'(x)=8\\bigl(x-\\tfrac38\\bigr)+V(x)$ with the oscillatory part $V(x)=m(x)P'(x)$. The crucial design feature is that the oscillation amplitude COLLAPSES at the crossing point: near $x=\\tfrac38$, $|V(x)|\\le 3m(x)=O\\!\\bigl((x-\\tfrac38)^2\\bigr)$, which is dominated by the linear ramp $8(x-\\tfrac38)=O\\!\\bigl(x-\\tfrac38\\bigr)$. So although $V$ oscillates ferociously (discontinuous on a dense set), at the one place where the ramp passes through $0$ the oscillation has been throttled to second order and cannot manufacture a second sign change.",
          "Make this quantitative on all of $[0,1]$: $|V(x)|\\le\\tfrac34(x-\\tfrac38)^2<8|x-\\tfrac38|$ for $x\\neq\\tfrac38$ (since $|x-\\tfrac38|\\le\\tfrac58<\\tfrac{32}{3}$). Hence $\\operatorname{sgn}f'(x)=\\operatorname{sgn}(x-\\tfrac38)$ off $\\tfrac38$, so $f'<0$ on $[0,\\tfrac38)$, $f'>0$ on $(\\tfrac38,1]$, and $f'(\\tfrac38)=0$: a single, clean, sign-reversing zero embedded in a nowhere-continuous derivative.",
          "Therefore $Z=\\{\\tfrac38\\}$ while $f'(0)=-3$, $f'(1)=5$, and $f'$ is discontinuous on a dense set -- the existence of the value $\\sqrt2\\,\\pi$ and of a zero are forced, but the zero's multiplicity is at our disposal. $\\boxed{f'(c)=\\sqrt2\\,\\pi\\text{ for some }c;\\ Z\\neq\\varnothing\\text{ but }Z=\\{\\tfrac38\\}\\text{ is attainable}}$."
        ]
      }
    ],
    "remark": "Insight: the chapter's slogan is `a derivative has the intermediate-value property, but only the property -- not any continuity, and not any multiplicity guarantee.' This problem isolates the two halves and shows they pull in opposite directions. Forced VALUE: $\\sqrt2\\,\\pi\\in(-3,5)$ is attained no matter how pathological $f'$ is, because Darboux (equivalently: the range of a derivative is an interval; equivalently: an interior extremum of $f(x)-wx$ kills its derivative) ignores continuity entirely -- the irrational, transcendental target is a red herring meant to tempt you into hunting for a formula. Unforced COUNT: Darboux delivers at least one zero (since $0$ is also intermediate) and then falls silent; the slick witness $f'(x)=8x-3+x(1-x)(x-\\tfrac38)^2P'(x)$ crosses zero exactly once by throttling its dense oscillation to second order precisely at the crossing, so it changes sign through a single clean zero while remaining discontinuous on a dense set. The top-ranker's lesson: `discontinuous derivative' never licenses `no IVP' (it has the IVP) and never forces `infinitely many zeros' (it can have one); Darboux forbids a sign change WITHOUT a zero, but blesses a sign change through a SINGLE zero."
  },
  {
    "theme": "darboux",
    "themeLabel": "Darboux & the Derivative's IVP",
    "title": "No Local Jump, Ever",
    "difficulty": 5,
    "task": "Prove that",
    "tags": [
      "one-sided limits",
      "jump discontinuity",
      "darboux",
      "no jump theorem"
    ],
    "statement": "Let $f$ be differentiable on an open interval $I$ and let $p\\in I$. Prove that $f'$ cannot have a jump discontinuity at $p$: that is, prove it is impossible for both one-sided limits $L^-=\\lim_{x\\to p^-}f'(x)$ and $L^+=\\lim_{x\\to p^+}f'(x)$ to exist with $L^-\\ne L^+$. Conclude that if BOTH one-sided limits of $f'$ at $p$ exist, then $f'$ is continuous at $p$.",
    "answer": "Proved. If both one-sided limits exist, then $L^-=f'(p)=L^+$, so $f'$ is continuous at $p$; in particular no jump discontinuity is possible. (Discontinuities of a derivative can only be of oscillatory type, as with $x^2\\sin(1/x)$ at $0$, where the one-sided limits fail to exist.)",
    "trap": "Assuming a derivative behaves like a generic function whose one-sided limits may disagree, so that one could 'build' a jump by gluing two slopes. The fatal flaw: gluing $f'=m_1$ for $x<p$ to $f'=m_2\\ne m_1$ for $x>p$ forces $f=m_1 x+c_1$ left of $p$ and $f=m_2 x+c_2$ right of $p$; matching values makes $f$ a corner like $|x|$, and there the two one-sided difference quotients are $m_1\\ne m_2$, so $f$ is NOT differentiable at $p$. The very existence of the two-sided derivative $f'(p)$ collapses both one-sided limits onto it.",
    "solutions": [
      {
        "name": "Limit-of-derivative (Hospital-type) lemma via MVT",
        "steps": [
          "Assume $L^+=\\lim_{x\\to p^+}f'(x)$ exists. Fix $x>p$ with $x\\in I$. Since $f$ is continuous on $[p,x]$ and differentiable on $(p,x)$, the Mean Value Theorem gives some $\\xi_x\\in(p,x)$ with $\\dfrac{f(x)-f(p)}{x-p}=f'(\\xi_x)$.",
          "As $x\\to p^+$ we have $p<\\xi_x<x$, so by squeezing $\\xi_x\\to p^+$; hence $f'(\\xi_x)\\to L^+$. But the left side $\\dfrac{f(x)-f(p)}{x-p}$ is exactly the right-hand difference quotient of $f$ at $p$, which $\\to f'(p)$ because $f$ is differentiable at $p$. A sequence cannot have two different limits, so $L^+=f'(p)$.",
          "The identical argument applied to $x<p$ (MVT on $[x,p]$, $\\xi_x\\to p^-$) gives $L^-=f'(p)$. Therefore $L^-=f'(p)=L^+$: the two one-sided limits are forced equal, so no jump is possible, and whenever both one-sided limits exist their common value is $f'(p)$, i.e. $f'$ is continuous at $p$. $\\blacksquare$"
        ]
      },
      {
        "name": "Darboux contradiction of a hypothetical jump",
        "steps": [
          "Suppose toward contradiction that both one-sided limits exist and $L^-<L^+$ (the case $L^->L^+$ is symmetric). The single number $f'(p)$ cannot equal every value in the open interval $(L^-,L^+)$, so choose one fixed $\\lambda\\in(L^-,L^+)$ with $\\lambda\\ne f'(p)$.",
          "Pick $\\varepsilon>0$ so small that $L^-+\\varepsilon<\\lambda<L^+-\\varepsilon$. By the one-sided limits there is $\\delta>0$ with: for $p-\\delta<x<p$ we have $f'(x)<L^-+\\varepsilon<\\lambda$, and for $p<x<p+\\delta$ we have $f'(x)>L^+-\\varepsilon>\\lambda$. Thus on the punctured neighborhood $(p-\\delta,p)\\cup(p,p+\\delta)$ the derivative $f'$ never equals $\\lambda$ (it stays strictly on one side of $\\lambda$ on each piece).",
          "Now take any $a,b$ with $p-\\delta<a<p<b<p+\\delta$. Then $f'(a)<\\lambda<f'(b)$, and $f'$ (being a derivative) has the Darboux intermediate-value property on $[a,b]$, so $f'(t)=\\lambda$ for some $t\\in(a,b)$. By Step 2 that $t$ cannot lie in the punctured neighborhood, so the ONLY possibility is $t=p$, forcing $f'(p)=\\lambda$.",
          "But we chose $\\lambda\\ne f'(p)$ in Step 1 — contradiction. Hence $L^-=L^+$, and by the difference-quotient/MVT argument of Method 1 this common value equals $f'(p)$. So $f'$ is continuous at $p$ and no jump can occur. $\\blacksquare$"
        ]
      }
    ],
    "remark": "Insight: 'derivatives have no jumps' is the practical headline of Darboux's theorem. A derivative can be discontinuous only by oscillation — its one-sided limits failing to exist — never by a clean jump. The canonical witness is $g(x)=x^2\\sin(1/x)$ (with $g(0)=0$): $g'(0)=0$ exists, yet $g'(x)=2x\\sin(1/x)-\\cos(1/x)$ has $\\lim_{x\\to 0^{\\pm}}g'(x)$ undefined (values fill $[-1,1]$). This one fact instantly disqualifies every step function — and every function with a genuine jump — from being the derivative of anything."
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
    "title": "Pexider's Twins and the Rate the Area Reveals",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "pexider",
      "exponential",
      "coupled-functions",
      "mean-value",
      "uniqueness"
    ],
    "statement": "Suppose $f,g,h:\\mathbb{R}\\to\\mathbb{R}$ are all differentiable and satisfy the (asymmetric) Pexider relation \\[ f(x+y)=g(x)\\,h(y)\\qquad\\text{for every } x,y\\in\\mathbb{R}, \\] with NO symmetry assumed between $g$ and $h$. You are told the two scalar facts \\[ f(0)=2,\\qquad \\int_0^1 f(t)\\,dt=e^2-1. \\] Find every admissible triple $(f,g,h)$. In particular, decide whether $f$ is uniquely determined and whether $g,h$ are; give the box as the complete answer set, with $A$ denoting the free parameter (state its allowed range).",
    "answer": "\\[\\boxed{\\,f(x)=2e^{2x},\\quad g(x)=Ae^{2x},\\quad h(x)=\\tfrac{2}{A}e^{2x}\\ \\ (A\\in\\mathbb{R}\\setminus\\{0\\})\\,}\\]",
    "trap": "Two linked snares. (1) The phrase 'a product of two functions, one in $x$ and one in $y$' tempts one to quietly assume $g=h$ (a symmetric d'Alembert/exponential form), which collapses the answer to the single triple with $A=\\sqrt2$ and DESTROYS the genuine one-parameter family: the relation pins $f$ uniquely but leaves $g,h$ free up to the reciprocal scaling $g(0)h(0)=f(0)$, so $(g,h)=(Ae^{2x},\\tfrac2A e^{2x})$ for ANY nonzero $A$ all work. (2) The form $f=ce^{kx}$ must be DERIVED from differentiability (by differentiating the relation and solving $f'=kf$), not assumed; and the constant solution $k=0$ (which would give $\\int_0^1 f=2$) must be ruled out by the area datum $e^2-1\\ne2$. Reporting only $A=\\sqrt2$, or asserting the exponential form without justification, or missing that $A<0$ is also allowed, are the characteristic errors.",
    "solutions": [
      {
        "name": "Differentiate the relation, solve the resulting ODE, then read off the scaling freedom",
        "steps": [
          "Sectioning. Put $y=0$: $f(x)=g(x)h(0)$. Put $x=0$: $f(y)=g(0)h(y)$. If $h(0)=0$ then $f\\equiv0$, contradicting $f(0)=2$; likewise $g(0)\\ne0$. So $g(x)=f(x)/h(0)$ and $h(y)=f(y)/g(0)$, and $g(0)h(0)=f(0)=2$.",
          "$f$ never vanishes. If $f(x_0)=0$ then $f(x_0+y)=g(x_0)h(y)=\\dfrac{f(x_0)}{h(0)}h(y)=0$ for all $y$, forcing $f\\equiv0$, again impossible. Hence $f(x)\\ne0$ everywhere, so the quotient below is legitimate.",
          "Differentiate to get an ODE (this is where differentiability is used, NOT a guessed form). Fix $x$ and differentiate $f(x+y)=g(x)h(y)$ in $y$, then set $y=0$: $f'(x)=g(x)h'(0)$. Divide by $f(x)=g(x)h(0)$: $\\dfrac{f'(x)}{f(x)}=\\dfrac{h'(0)}{h(0)}=:k$, a constant independent of $x$. Thus $f'(x)=k\\,f(x)$, whose unique differentiable solution with $f(0)=2$ is $f(x)=2e^{kx}$.",
          "Pin $k$ by the area. $\\displaystyle\\int_0^1 2e^{kt}\\,dt=\\dfrac{2(e^{k}-1)}{k}$ for $k\\ne0$ (and $=2$ if $k=0$). The map $k\\mapsto\\dfrac{e^{k}-1}{k}$ is strictly increasing (it is the average of $e^{kt}$ over $[0,1]$, increasing in the rate $k$), so the equation $\\dfrac{2(e^{k}-1)}{k}=e^2-1$ has at most one root; $k=2$ works since $\\dfrac{2(e^2-1)}{2}=e^2-1$. The constant case $k=0$ gives area $2\\ne e^2-1$, so it is excluded. Hence $k=2$ and $f(x)=2e^{2x}$, uniquely.",
          "Recover $g,h$ and expose the freedom. With $A:=g(0)$ (any nonzero real) and $h(0)=2/A$, $g(x)=f(x)/h(0)=2e^{2x}\\cdot\\dfrac{A}{2}=Ae^{2x}$ and $h(x)=f(x)/g(0)=\\dfrac{2}{A}e^{2x}$. Then $g(x)h(y)=A e^{2x}\\cdot\\dfrac{2}{A}e^{2y}=2e^{2(x+y)}=f(x+y)$ for every $A\\ne0$, so the whole family is admissible. Therefore $\\boxed{f(x)=2e^{2x},\\ g(x)=Ae^{2x},\\ h(x)=\\tfrac2A e^{2x}\\ (A\\ne0)}$: $f$ unique, $(g,h)$ a one-parameter family."
        ]
      },
      {
        "name": "Reduce to a multiplicative Cauchy equation, then the reciprocal-scaling orbit",
        "steps": [
          "Eliminate $g,h$ to get an equation in $f$ alone. From $f(x)=g(x)h(0)$ and $f(y)=g(0)h(y)$, multiply: $f(x)f(y)=g(x)h(0)\\,g(0)h(y)=\\bigl(g(x)h(y)\\bigr)\\bigl(g(0)h(0)\\bigr)=f(x+y)\\,f(0)$. Since $f(0)=2$, this is $f(x+y)=\\dfrac{f(x)f(y)}{2}$.",
          "Normalise to a clean exponential Cauchy equation. Let $F(x)=f(x)/2$; then $F$ is differentiable, $F(0)=1$, and $F(x+y)=F(x)F(y)$. A differentiable solution of $F(x+y)=F(x)F(y)$ with $F(0)=1$ satisfies $F'(x)=F'(0)F(x)$ (differentiate in $y$ at $y=0$), so $F(x)=e^{kx}$ with $k=F'(0)$. Thus $f(x)=2e^{kx}$ — derived, not assumed.",
          "Use the area to fix $k=2$. As $\\int_0^1 2e^{kt}\\,dt=\\dfrac{2(e^k-1)}{k}$ is strictly increasing in $k$ (limit value $2$ at $k=0$) and equals $e^2-1$ only at $k=2$, we get $f(x)=2e^{2x}$ uniquely; the degenerate $k=0$ would give area $2$, ruled out.",
          "Find ALL $(g,h)$. We need $g(x)h(y)=2e^{2(x+y)}=(2e^{2x})(e^{2y})$. Setting $y=0$: $g(x)=2e^{2x}/h(0)$; setting $x=0$: $h(y)=2e^{2y}/g(0)$; the only constraint coupling them is $g(0)h(0)=f(0)=2$. Parametrise by $A=g(0)\\in\\mathbb{R}\\setminus\\{0\\}$ (negative $A$ is allowed: then $h(0)=2/A<0$ and still $g(0)h(0)=2$, while $f=2e^{2x}>0$). This yields $g(x)=Ae^{2x}$, $h(x)=\\tfrac2A e^{2x}$, and direct substitution confirms $f(x+y)=g(x)h(y)$.",
          "Conclusion: the solution set is exactly $\\boxed{f(x)=2e^{2x},\\ g(x)=Ae^{2x},\\ h(x)=\\tfrac2A e^{2x}\\ (A\\ne0)}$ — a single $f$ sitting over a reciprocal-scaling orbit of pairs $(g,h)$."
        ]
      },
      {
        "name": "Logarithmic linearisation into additive Cauchy, with the gauge freedom made explicit",
        "steps": [
          "Positivity to take logs. Since $f(0)=2>0$ and $f$ is continuous and never zero (a zero would force $f\\equiv0$ via the relation), $f>0$ everywhere. From step 1 above, $f(x+y)=\\tfrac12 f(x)f(y)$, so $g$ and $h$ have a common sign pattern: $g=f/h(0)$ and $h=f/g(0)$ are each $f$ times a nonzero constant, hence of one sign throughout.",
          "Linearise. Let $\\phi(x)=\\ln\\bigl(f(x)/2\\bigr)$, differentiable with $\\phi(0)=0$. The relation $f(x+y)=\\tfrac12 f(x)f(y)$ becomes $\\phi(x+y)=\\phi(x)+\\phi(y)$, the additive Cauchy equation. Differentiability gives $\\phi'(x)=\\phi'(0)=:k$ (differentiate in $y$ at $0$), so $\\phi(x)=kx$ and $f(x)=2e^{kx}$.",
          "Determine the rate from the integral. $\\int_0^1 2e^{kt}\\,dt=\\dfrac{2(e^k-1)}{k}=e^2-1\\iff k=2$ (strict monotonicity in $k$ gives uniqueness; the $k=0$ constant branch gives area $2\\ne e^2-1$). Hence $f(x)=2e^{2x}$ is forced.",
          "Gauge freedom in $(g,h)$. Write $g(x)=\\lambda f(x)$, $h(x)=\\mu f(x)$ for constants $\\lambda=1/h(0)$, $\\mu=1/g(0)$. The relation $g(x)h(y)=f(x+y)$ becomes $\\lambda\\mu\\,f(x)f(y)=f(x+y)=\\tfrac12 f(x)f(y)$, i.e. $\\lambda\\mu=\\tfrac12$, equivalently $g(0)h(0)=2$. So $(\\lambda,\\mu)$ lives on the hyperbola $\\lambda\\mu=\\tfrac12$: a genuine one-parameter family, NOT a single solution.",
          "Writing $A=g(0)=1/\\lambda\\ne0$ gives $g(x)=Ae^{2x}$, $h(x)=\\tfrac2A e^{2x}$. Therefore the complete answer is $\\boxed{f(x)=2e^{2x},\\ g(x)=Ae^{2x},\\ h(x)=\\tfrac2A e^{2x}\\ (A\\in\\mathbb{R}\\setminus\\{0\\})}$."
        ]
      }
    ],
    "remark": "Insight: in an asymmetric Pexider equation $f(x+y)=g(x)h(y)$ the three functions are NOT independent unknowns — sectioning ($y=0$ and $x=0$) instantly slaves $g,h$ to $f$ via $g(x)=f(x)/h(0)$, $h(x)=f(x)/g(0)$, and multiplying those two recoveries forces the single master equation $f(x+y)=f(x)f(y)/f(0)$. Differentiability then does the real work: it converts this multiplicative law into the ODE $f'=kf$, so $f$ is exponential by deduction rather than decree, and the two scalar data fix the amplitude ($f(0)=2$) and the rate ($k=2$ from the area, using that $(e^k-1)/k$ is strictly increasing so the rate is read off uniquely). The signature trap is to confuse 'the equation determines $f$' with 'the equation determines $g$ and $h$': it does not — only the product gauge $g(0)h(0)=f(0)$ is constrained, leaving a reciprocal-scaling family $g=Ae^{2x},\\,h=\\tfrac2A e^{2x}$ over a unique $f$. Assuming $g=h$ silently picks $A=\\sqrt2$ and throws the family away; forgetting $A<0$ throws half of it away again."
  },
  {
    "theme": "functionaleqdiff",
    "themeLabel": "Differentiable Functional Equations",
    "title": "The Power Pinned by a Single Slope, Then a Transcendental Showdown",
    "difficulty": 5,
    "task": "Determine and prove",
    "tags": [
      "multiplicative-cauchy",
      "power-law",
      "logarithmic-derivative",
      "monotone-comparison",
      "exponent-vs-base"
    ],
    "statement": "Let $f:(0,\\infty)\\to\\mathbb{R}$ be a differentiable function satisfying \\[ f(xy)=f(x)\\,f(y)\\qquad\\text{for all }x,y>0, \\] together with the single data point $f(2)=8$.\n\n(a) Determine $f$ completely, proving that it is the ONLY differentiable function meeting these conditions. (Show in particular why differentiability is what pins the function down, and why $f(2)=8$ could not by itself do so without it.)\n\n(b) Using only the value of $f$ now established, decide which of the two numbers \\[ f(\\pi)\\qquad\\text{and}\\qquad 3^{\\pi} \\] is larger, and prove it WITHOUT a calculator. Justify every comparison from monotonicity, not from decimal estimates.",
    "answer": "\\[\\boxed{f(x)=x^{3};\\qquad 3^{\\pi}>f(\\pi)=\\pi^{3}}\\]",
    "trap": "Two traps, one in each part. In (a) the seductive shortcut is to 'read off' the answer: $f(2)=8=2^3$, so $f(x)=x^3$ -- done. This skips the only hard part. The relation $f(xy)=f(x)f(y)$ has, WITHOUT a regularity hypothesis, monstrously many solutions (a Hamel-basis pathology gives non-measurable $f$ with $f(2)=8$ yet $f\\ne x^3$); and even among tame guesses one must first kill the constant solutions $f\\equiv0$ and $f\\equiv1$ (both satisfy the equation, the first being excluded only by $f(2)=8\\ne0$) and prove $f>0$ before any power form is legitimate. The point of the problem is that differentiability -- not the data $f(2)=8$ -- is what forces $f(x)=x^a$; the data only then selects $a=3$. To assume the power form is to assume away the entire content. In (b) the trap is reasoning by false analogy with $e^\\pi>\\pi^e$: students 'know the bigger one wins' but apply it blindly, often concluding $\\pi^3>3^\\pi$ because the base $\\pi^3$ 'looks' bigger, or transplanting the $e^\\pi$ verdict by pattern-match. The verdict is governed by $g(t)=\\dfrac{\\ln t}{t}$, which is NOT monotone: it rises to a maximum at $t=e$ and falls thereafter. The case $e^\\pi$ vs $\\pi^e$ straddles the peak (one competitor IS $e$); the case $3^\\pi$ vs $\\pi^3$ is different -- BOTH $3$ and $\\pi$ lie past the peak ($3>e$, $\\pi>e$), on the strictly decreasing branch, so the SMALLER input $3$ gives the LARGER value $g(3)>g(\\pi)$, flipping the naive 'bigger base wins' intuition and forcing $3^\\pi>\\pi^3$.",
    "solutions": [
      {
        "name": "Differentiate the relation at $y=1$ (logarithmic derivative), then a monotone $g(t)=\\ln t/t$ for the showdown",
        "steps": [
          "Part (a), positivity first. For any $x>0$, $f(x)=f(\\sqrt{x}\\cdot\\sqrt{x})=f(\\sqrt{x})^2\\ge0$. If $f(x_0)=0$ for some $x_0$, then for all $x$, $f(x)=f\\!\\left(x_0\\cdot\\tfrac{x}{x_0}\\right)=f(x_0)f\\!\\left(\\tfrac{x}{x_0}\\right)=0$, contradicting $f(2)=8$. Hence $f(x)>0$ everywhere. Also $f(1)=f(1)^2$ with $f(1)>0$ gives $f(1)=1$.",
          "Now use differentiability. Fix $x>0$ and differentiate $f(xy)=f(x)f(y)$ with respect to $y$: the chain rule gives $x\\,f'(xy)=f(x)\\,f'(y)$. Put $y=1$: $x\\,f'(x)=f(x)\\,f'(1)$. Write $a:=f'(1)$. Since $f>0$ we may divide: $\\dfrac{f'(x)}{f(x)}=\\dfrac{a}{x}$.",
          "Integrate from $1$ to $x$: $\\ln f(x)-\\ln f(1)=a\\ln x$, and $f(1)=1$, so $\\ln f(x)=a\\ln x$, i.e. $f(x)=x^{a}$. This is where differentiability did the work: it converted the algebraic relation into the separable ODE $xf'=af$, whose only solutions are pure powers -- no Hamel pathologies survive. The constant $a$ is still free at this stage.",
          "Select $a$ from the data: $f(2)=2^{a}=8=2^{3}$, and $t\\mapsto2^{t}$ is injective, so $a=3$. Therefore $f(x)=x^{3}$, and it indeed satisfies $(xy)^3=x^3y^3$ and $f(2)=8$. Uniqueness among differentiable solutions is now complete: $f(x)=x^3$.",
          "Part (b). Compare $f(\\pi)=\\pi^{3}$ with $3^{\\pi}$. Both are positive, so compare logarithms: $\\ln(3^{\\pi})-\\ln(\\pi^{3})=\\pi\\ln 3-3\\ln\\pi$. Dividing by the positive number $3\\pi$, the sign equals that of $\\dfrac{\\ln 3}{3}-\\dfrac{\\ln\\pi}{\\pi}=g(3)-g(\\pi)$, where $g(t)=\\dfrac{\\ln t}{t}$.",
          "Differentiate: $g'(t)=\\dfrac{1-\\ln t}{t^{2}}$, which is negative exactly when $\\ln t>1$, i.e. for $t>e$. Thus $g$ is strictly decreasing on $(e,\\infty)$. Since $3>e$ and $\\pi>e$ both lie on this decreasing branch and $3<\\pi$, we get $g(3)>g(\\pi)$. (This is the crux the naive guess misses: the peak of $g$ is at $t=e$, and here both competitors sit beyond it, so the smaller input wins.)",
          "Hence $\\dfrac{\\ln3}{3}-\\dfrac{\\ln\\pi}{\\pi}>0$, so $\\pi\\ln3-3\\ln\\pi>0$, so $3^{\\pi}>\\pi^{3}$. Combining both parts: \\[\\boxed{f(x)=x^{3},\\qquad 3^{\\pi}>f(\\pi)=\\pi^{3}.}\\]"
        ]
      },
      {
        "name": "Reduce (a) to additive Cauchy via logarithms; settle (b) by an elementary $\\ln(1+u)<u$ estimate (no calculus of $g$)",
        "steps": [
          "Part (a), Cauchy route. As above, $f>0$ and $f(1)=1$. Define $\\varphi(t)=\\ln f(e^{t})$ for $t\\in\\mathbb{R}$; since $f$ is differentiable and positive, $\\varphi$ is differentiable. Writing $x=e^{s},\\,y=e^{t}$ in the functional equation and taking logs gives $\\varphi(s+t)=\\ln f(e^{s}e^{t})=\\ln\\!\\bigl(f(e^{s})f(e^{t})\\bigr)=\\varphi(s)+\\varphi(t)$.",
          "So $\\varphi$ is an additive (Cauchy) function that is differentiable; the only such functions are linear: $\\varphi(t)=at$ with $a=\\varphi'(0)$. (Differentiate $\\varphi(s+t)=\\varphi(s)+\\varphi(t)$ in $s$ at $s=0$: $\\varphi'(t)=\\varphi'(0)$, constant, so $\\varphi$ is linear; $\\varphi(0)=0$ kills the intercept.) Hence $\\ln f(e^{t})=at$, i.e. $f(x)=x^{a}$.",
          "Differentiability is again the whole point: an additive $\\varphi$ without any regularity can be a wild non-measurable function (Hamel basis), giving a non-power $f$ with $f(2)=8$; differentiability forces $\\varphi$ linear and thus $f$ a genuine power. The data then sets $f(2)=2^{a}=8\\Rightarrow a=3$, so $f(x)=x^{3}$, uniquely among differentiable solutions.",
          "Part (b), elementary inequality. We must show $\\pi\\ln3-3\\ln\\pi>0$. Put $d=\\pi-3>0$ and rewrite, using $\\ln\\pi=\\ln\\!\\bigl(3(1+\\tfrac{d}{3})\\bigr)=\\ln3+\\ln\\!\\bigl(1+\\tfrac{d}{3}\\bigr)$: \\[ \\pi\\ln3-3\\ln\\pi=(3+d)\\ln3-3\\Bigl(\\ln3+\\ln\\!\\bigl(1+\\tfrac{d}{3}\\bigr)\\Bigr)=d\\ln3-3\\ln\\!\\bigl(1+\\tfrac{d}{3}\\bigr). \\]",
          "Apply the standard strict inequality $\\ln(1+u)<u$ for $u>0$ with $u=\\tfrac{d}{3}$: $3\\ln\\!\\bigl(1+\\tfrac{d}{3}\\bigr)<3\\cdot\\tfrac{d}{3}=d$. Therefore \\[ \\pi\\ln3-3\\ln\\pi> d\\ln3-d=d\\,(\\ln3-1). \\]",
          "Finally $\\ln3>\\ln e=1$, so $\\ln3-1>0$, and $d=\\pi-3>0$; the product $d(\\ln3-1)>0$. Hence $\\pi\\ln3-3\\ln\\pi>0$, i.e. $3^{\\pi}>\\pi^{3}=f(\\pi)$ -- proven with nothing beyond $\\ln(1+u)<u$ and $\\ln3>1$. \\[\\boxed{f(x)=x^{3},\\qquad 3^{\\pi}>f(\\pi)=\\pi^{3}.}\\]"
        ]
      },
      {
        "name": "Determine $a$ structurally, then expose the trap: the verdict tracks which side of $t=e$ the competitors lie",
        "steps": [
          "Part (a), recap of the forced form. By either Method 1 or Method 2, differentiability collapses $f(xy)=f(x)f(y)$ to $f(x)=x^{a}$ with $a=f'(1)$, after first proving $f>0$ and $f(1)=1$ (the constant solutions $f\\equiv0,1$ being excluded by $f(2)=8$). The single datum then fixes $a$: $2^{a}=8\\Rightarrow a=3$, so $f(x)=x^{3}$.",
          "Part (b), the conceptual frame. For positive $b\\ne t$, the comparison $b^{t}$ vs $t^{b}$ is equivalent, after taking logs and dividing by $bt>0$, to comparing $g(b)$ vs $g(t)$ where $g(s)=\\dfrac{\\ln s}{s}$. So EVERY 'power tower duel' of this shape is decided by the single curve $g$, whose shape is therefore all that matters.",
          "Shape of $g$: $g'(s)=\\dfrac{1-\\ln s}{s^{2}}$, so $g$ strictly increases on $(0,e)$, peaks at $s=e$ (value $1/e$), and strictly decreases on $(e,\\infty)$. The classical $e^{\\pi}$ vs $\\pi^{e}$ duel STRADDLES the peak: one competitor is exactly $e$ (the maximiser), so $g(e)>g(\\pi)$ for every $\\pi\\ne e$, giving $e^{\\pi}>\\pi^{e}$ -- a verdict driven by $e$ sitting at the apex.",
          "Our duel is structurally different and that is the trap. Here the competitors are $3$ and $\\pi$, and BOTH exceed $e$ ($3>e\\approx2.718$ and $\\pi>e$). They lie wholly on the decreasing arm of $g$, where the function reverses the naive ordering: the smaller input yields the larger output. Since $3<\\pi$, strict decrease gives $g(3)>g(\\pi)$.",
          "Translate back: $g(3)>g(\\pi)\\iff\\dfrac{\\ln3}{3}>\\dfrac{\\ln\\pi}{\\pi}\\iff\\pi\\ln3>3\\ln\\pi\\iff 3^{\\pi}>\\pi^{3}$. There is no contradiction with $e^{\\pi}>\\pi^{e}$; the two duels simply probe different regions of the same curve. The lesson is that 'bigger base wins' is meaningless until you locate both numbers relative to $t=e$.",
          "Hence $f(\\pi)=\\pi^{3}<3^{\\pi}$. Final verdict: \\[\\boxed{f(x)=x^{3},\\qquad 3^{\\pi}>f(\\pi)=\\pi^{3}.}\\]"
        ]
      }
    ],
    "remark": "Insight: this is two functional-equation lessons fused into one. First, $f(xy)=f(x)f(y)$ is a multiplicative Cauchy equation, and its 'obvious' answer $f=x^a$ is a LIE without a regularity hypothesis -- a Hamel basis builds non-measurable monsters with the same $f(2)=8$. Differentiability is the magic ingredient: differentiate at $y=1$ to get the separable ODE $xf'=f'(1)\\,f$, or take logs to get an additive differentiable Cauchy equation $\\varphi(s+t)=\\varphi(s)+\\varphi(t)$ forcing $\\varphi$ linear. Either way the power form is EARNED, and only then does the lone datum $f(2)=8$ select the exponent $a=3$. The slogan: regularity decides the FORM, the data decides the PARAMETER -- never let the data masquerade as the proof. Second, the comparison $3^\\pi$ vs $\\pi^3$ looks like a calculator question but is really a question about one curve, $g(t)=\\ln t/t$, with its solitary peak at $t=e$. The famous $e^\\pi>\\pi^e$ lives at that peak; our duel lives entirely on the decreasing slope past it, where the ordering inverts and the smaller base $3$ beats the larger base $\\pi$, giving $3^\\pi>\\pi^3$. Top-ranker takeaway: any $b^t$ vs $t^b$ is settled by reading off positions on $g$ relative to $e$ -- and the elementary route $\\pi\\ln3-3\\ln\\pi=(\\pi-3)\\ln3-3\\ln(1+\\tfrac{\\pi-3}{3})>(\\pi-3)(\\ln3-1)>0$ needs nothing more than $\\ln(1+u)<u$ and $\\ln3>1$."
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
    "title": "The Dyadic Defect and the Curvature It Conceals",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "midpoint-convexity",
      "dense-extension",
      "second-difference",
      "jensen-defect",
      "differentiate-the-relation",
      "uniqueness"
    ],
    "statement": "A function $f:\\mathbb{R}\\to\\mathbb{R}$ is differentiable on all of $\\mathbb{R}$ and is midpoint-convex, i.e. \\[ f\\!\\left(\\frac{x+y}{2}\\right)\\ \\le\\ \\frac{f(x)+f(y)}{2}\\qquad\\text{for all real }x,y. \\] Moreover the Jensen inequality is sharpened to an EXACT identity, but only along a dense set of spreads: for every real $x$ and every $dyadic rational$ $d=\\dfrac{k}{2^{n}}$ ($k\\in\\mathbb{Z},\\ n\\in\\mathbb{Z}_{\\ge0}$), \\[ f(x+d)+f(x-d)-2f(x)\\ =\\ 2\\,d^{2}. \\] You are also given $f(0)=5$ and $f'(0)=-4$. (a) Determine $f$ explicitly. (b) Compute $f''(0)$. (c) For the convexity gap $G(x,y):=\\dfrac{f(x)+f(y)}{2}-f\\!\\left(\\dfrac{x+y}{2}\\right)$, find $G$ for ALL real $x,y$ and state exactly where the midpoint inequality is an equality. Box the pair $\\bigl(f''(0),\\,G(x,y)\\bigr)$.",
    "answer": "\\[\\boxed{\\,f''(0)=2,\\qquad G(x,y)=\\tfrac14 (x-y)^{2}\\,}\\]",
    "trap": "The identity 'midpoint-convex with equality on a dense set $\\Rightarrow$ the function is affine' is a real theorem, and it is exactly the booby trap. A strong student recognises that the second difference $f(x+d)+f(x-d)-2f(x)$ vanishing would make $f$ midpoint-AFFINE on a dense set, hence (with continuity from differentiability) affine $f(x)=-4x+5$, hence $f''(0)=0$ and gap $G\\equiv0$. But the dense identity here is NOT $=0$; it is $=2d^{2}\\ne0$. The prescribed defect is a POSITIVE quadratic, so the gap is forced to be $\\tfrac14(x-y)^2>0$ for $x\\ne y$ -- $f$ is a genuine parabola, never affine, and $f''(0)=2$, not $0$. A second, deeper snare: even granting the parabola, the step from 'dyadic $d$' to 'all real $t$' is NOT free -- it is precisely where differentiability (hence continuity) is spent. Dropping it admits pathological solutions $f(x)=x^2-4x+5+A(x)$ for any additive (Cauchy) $A$, all of which satisfy both hypotheses yet are not the parabola; so an answer that never invokes continuity has not actually pinned $f$. The careless reader either kills the curvature (affine, $f''(0)=0$) or asserts the parabola without earning the dense$\\to$all extension.",
    "solutions": [
      {
        "name": "Continuity extends the dyadic defect to all spreads, then differentiate",
        "steps": [
          "Fix $x$ and set $D(t):=f(x+t)+f(x-t)-2f(x)$. Since $f$ is differentiable it is continuous, so $t\\mapsto D(t)$ is continuous. By hypothesis $D(d)=2d^{2}$ for every dyadic $d$, and the dyadic rationals are DENSE in $\\mathbb{R}$. A continuous function agreeing with the continuous function $2t^{2}$ on a dense set agrees with it everywhere; hence $D(t)=2t^{2}$ for ALL real $t$. (This single line is where differentiability is genuinely used -- it is what defeats the additive-Cauchy pathologies.)",
          "Thus $f(x+t)+f(x-t)-2f(x)=2t^{2}$ for all $x,t$. Differentiate this identity with respect to $t$ (legitimate: $f$ is differentiable): $f'(x+t)-f'(x-t)=4t$.",
          "Specialise $t=x$: $f'(2x)-f'(0)=4x$, i.e. $f'(2x)=f'(0)+4x$. Writing $u=2x$ gives $f'(u)=f'(0)+2u=2u-4$ for all $u$ (using $f'(0)=-4$). In particular $f'$ is differentiable with $f''\\equiv2$, so $f''(0)=2$.",
          "Integrate $f'(u)=2u-4$ and use $f(0)=5$: $f(u)=u^{2}-4u+5$. This is the unique solution.",
          "Compute the gap with $f(x)=x^2-4x+5$: $G(x,y)=\\dfrac{f(x)+f(y)}{2}-f\\!\\left(\\dfrac{x+y}{2}\\right)=\\dfrac{(x-y)^{2}}{4}\\ge0$, consistent with midpoint-convexity, and equal to $0$ iff $x=y$ (the diagonal) -- nowhere else. Hence $\\boxed{f''(0)=2,\\ G(x,y)=\\tfrac14(x-y)^2}$."
        ]
      },
      {
        "name": "Subtract the parabola to isolate an additive remainder, then kill it by differentiability",
        "steps": [
          "Let $p(x)=x^{2}-4x+5$, the parabola matching the data $p(0)=5,\\ p'(0)=-4$. A direct expansion gives $p(x+d)+p(x-d)-2p(x)=2d^{2}$ for ALL real $d$, and $\\dfrac{p(x)+p(y)}{2}-p\\!\\left(\\dfrac{x+y}{2}\\right)=\\dfrac{(x-y)^2}{4}$.",
          "Set $A:=f-p$. Then $A$ is differentiable, $A(0)=0$, $A'(0)=0$, and for every dyadic $d$: $A(x+d)+A(x-d)-2A(x)=\\bigl(f(x+d)+f(x-d)-2f(x)\\bigr)-2d^{2}=2d^2-2d^2=0$. So the symmetric second difference of $A$ vanishes on a dense set of dyadic spreads.",
          "By continuity of $A$ (differentiable), $A(x+t)+A(x-t)-2A(x)=0$ for ALL real $t$ -- again the dense$\\to$all extension. This is Jensen's equation in symmetric form: $A$ is midpoint-affine, $A\\!\\left(\\tfrac{x+y}{2}\\right)=\\tfrac{A(x)+A(y)}{2}$.",
          "A CONTINUOUS midpoint-affine function is affine: $A(x)=A(0)+A'(0)\\,x=0$. (Here is the genuine use of the affine theorem -- applied to the REMAINDER $A$, which truly has zero defect, NOT to $f$, whose defect is $2d^2\\ne0$. Mislabelling which function is affine is exactly the trap.)",
          "Therefore $f=p$, i.e. $f(x)=x^{2}-4x+5$, giving $f''(0)=2$ and $G(x,y)=\\tfrac14(x-y)^2$ (zero only on the diagonal $x=y$). $\\boxed{f''(0)=2,\\ G(x,y)=\\tfrac14(x-y)^2}$."
        ]
      },
      {
        "name": "Symmetric-second-derivative limit fixes the curvature directly",
        "steps": [
          "From Method 1, continuity upgrades the dyadic identity to $f(x+t)+f(x-t)-2f(x)=2t^{2}$ for all real $x,t$. Divide by $t^{2}$: $\\dfrac{f(x+t)+f(x-t)-2f(x)}{t^{2}}=2$ for every $t\\ne0$ and every $x$.",
          "Let $t\\to0$. The left side is the symmetric (Schwarz) second-difference quotient; for a differentiable $f$ it tends to the second symmetric derivative, and being CONSTANTLY equal to $2$ it has limit $2$. Combined with $f$ differentiable, Schwarz's theorem gives that $f''(x)$ exists and equals $2$ for every $x$; in particular $f''(0)=2$.",
          "So $f''\\equiv2$ on $\\mathbb{R}$. Integrate once with $f'(0)=-4$: $f'(x)=2x-4$. Integrate again with $f(0)=5$: $f(x)=x^{2}-4x+5$.",
          "The curvature was hiding in plain sight: the prescribed defect $2d^{2}$ is exactly $f''\\cdot d^2$, so the constant $2$ on the right IS the second derivative, not a sign of affinity. The gap is $G(x,y)=\\tfrac{f''}{2}\\cdot\\tfrac{(x-y)^2}{4}\\cdot2=\\tfrac14(x-y)^2\\ge0$, equality iff $x=y$.",
          "Hence the midpoint inequality is strict for all $x\\ne y$ and an equality only on the diagonal, while $f''(0)=2$. $\\boxed{f''(0)=2,\\ G(x,y)=\\tfrac14(x-y)^2}$."
        ]
      }
    ],
    "remark": "Insight: a prescribed Jensen DEFECT is a curvature in disguise. The symmetric second difference $f(x+t)+f(x-t)-2f(x)$ is, for smooth $f$, approximately $f''(x)\\,t^{2}$; demanding it equal $2t^{2}$ therefore decrees $f''\\equiv2$ outright -- the constant $2$ on the right is literally the second derivative, so the function is a parabola, never affine. The problem weaponises a TRUE theorem ('continuous midpoint-convex with dense equality $\\Rightarrow$ affine') as bait: that theorem governs the case of ZERO defect, and here the defect is the positive quantity $2d^{2}$. The correct way to invoke affinity is on the REMAINDER $f-(x^2-4x+5)$, whose defect genuinely vanishes -- Method 2 makes this surgical. Two morals for the top ranker: (1) the leap from a dense set of dyadic spreads to ALL real spreads is not bookkeeping -- it is exactly where differentiability (continuity) is spent, and skipping it leaves the answer infested with additive-Cauchy ghosts $f=x^2-4x+5+A(x)$; (2) the convexity gap and the prescribed defect are two faces of the same curvature: $G(x,y)=\\tfrac14(x-y)^2$ is strict off the diagonal precisely because $f''=2>0$, so 'equality on a dense set' coexists with strict convexity everywhere $x\\ne y$ -- a paradox only for the reader who forgot which inequality was being equalised."
  },
  {
    "theme": "functionaleqdiff",
    "themeLabel": "Differentiable Functional Equations",
    "title": "d'Alembert's Cosine",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "dalembert",
      "cosine",
      "second-derivative-data",
      "even-function"
    ],
    "statement": "Let $f:\\mathbb{R}\\to\\mathbb{R}$ be twice differentiable, not identically zero, satisfying \\[ f(x+y)+f(x-y)=2f(x)f(y)\\qquad\\text{for all }x,y, \\] with $f'(0)=0$ and $f''(0)=-9$. Determine $f\\!\\left(\\dfrac{\\pi}{3}\\right)$.",
    "answer": "$f(x)=\\cos(3x)$, so $f(\\pi/3)=\\cos\\pi=-1$.",
    "trap": "Assuming $f(0)=0$. Setting $x=y=0$ gives $2f(0)=2f(0)^2$, and a nonzero solution forces $f(0)=1$, not $0$; starting from $f(0)=0$ collapses everything to the trivial solution.",
    "solutions": [
      {
        "name": "Differentiate twice in $y$",
        "steps": [
          "$x=y=0$: $2f(0)=2f(0)^2\\Rightarrow f(0)\\in\\{0,1\\}$. If $f(0)=0$, then $x=y$ gives $f(2x)=2f(x)^2\\ge 0$ while $x=0$ gives $f(-y)=-f(y)$, forcing $f\\equiv 0$; the nonzero hypothesis thus pins $f(0)=1$.",
          "Differentiate the equation twice in $y$, then set $y=0$: $f''(x)+f''(x)=2f(x)f''(0)$, so $f''(x)=f''(0)f(x)=-9f(x)$.",
          "This linear ODE with $f(0)=1,\\ f'(0)=0$ has the unique solution $f(x)=\\cos(3x)$ (the case $f''(0)<0$).",
          "Hence $f(\\pi/3)=\\cos\\pi=\\boxed{-1}$."
        ]
      },
      {
        "name": "Even symmetry + ODE",
        "steps": [
          "Replacing $y\\to -y$ leaves the left side unchanged, so $2f(x)f(y)=2f(x)f(-y)$ for all $x$; taking any $x$ with $f(x)\\ne 0$ gives $f(y)=f(-y)$, so $f$ is even, consistent with $f'(0)=0$.",
          "Differentiating the relation twice in $y$ at $y=0$ yields $f''(x)=f''(0)f(x)$, i.e. $f''=-9f$, with $f(0)=1$.",
          "The unique even solution of $f''=-9f$, $f(0)=1$, $f'(0)=0$ is $f(x)=\\cos 3x$.",
          "Thus $f(\\pi/3)=\\cos\\pi=\\boxed{-1}$."
        ]
      },
      {
        "name": "Sign of $f''(0)$ selects cosine vs cosh",
        "steps": [
          "The ODE $f''=f''(0)\\,f$ with $f(0)=1,f'(0)=0$ gives $f(x)=\\cos\\!\\left(\\sqrt{-f''(0)}\\,x\\right)$ if $f''(0)<0$ and $f(x)=\\cosh\\!\\left(\\sqrt{f''(0)}\\,x\\right)$ if $f''(0)>0$.",
          "Here $f''(0)=-9<0$, so $\\sqrt{-f''(0)}=3$ and $f(x)=\\cos(3x)$.",
          "Evaluate: $f(\\pi/3)=\\cos\\pi=\\boxed{-1}$."
        ]
      }
    ],
    "remark": "Insight: d'Alembert's equation is the functional fingerprint of $\\cos$ and $\\cosh$. The sign of $f''(0)$ is the single bit that decides which one a beautiful dichotomy."
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
      "dalembert-type",
      "difference-of-squares",
      "branch-selection",
      "sinh-vs-sin",
      "second-order-ode",
      "monotonicity"
    ],
    "statement": "Let $f:\\mathbb{R}\\to\\mathbb{R}$ be twice differentiable, NOT identically zero, and satisfy the difference-of-squares addition law \\[ f(x+y)\\,f(x-y)=f(x)^2-f(y)^2\\qquad\\text{for all }x,y\\in\\mathbb{R}. \\] You are told three things: $f'(0)=2$; $f(\\ln 2)=\\tfrac{3}{2}$; and $f(x)>0$ for every $x>0$.\n\n(a) Determine $f$ completely, proving it is the ONLY twice-differentiable function meeting all the stated conditions. Make explicit where twice-differentiability is used, and which condition rules out each rival solution of the bare equation.\n\n(b) Find the unique real number $a$ for which $f(a)=\\dfrac{15}{4}$.",
    "answer": "\\[\\boxed{f(x)=2\\sinh x,\\qquad a=\\ln 4}\\]",
    "trap": "The relation does NOT determine $f$ by itself: differentiating it twice in $y$ at $y=0$ (after $f(0)=0$) collapses it to the linear ODE $f''=c\\,f$ for some real constant $c$, whose sign splits the solutions into a TRICHOTOMY -- $c<0$ gives the bounded oscillation $f=\\tfrac{b}{k}\\sin(kx)$, $c=0$ gives the line $f=bx$, and $c>0$ gives the unbounded $f=\\tfrac{b}{k}\\sinh(kx)$, all three with $b=f'(0)$. The conceptual error is to commit to one branch prematurely. Two seductive wrong turns: (i) The 'linear' jump. Many students see an additive-looking law and a single slope $f'(0)=2$ and declare $f(x)=2x$ -- which genuinely satisfies the functional equation AND $f'(0)=2$, so it survives every check except the second datum: $f(\\ln 2)=2\\ln 2\\approx 1.386\\neq\\tfrac{3}{2}$. It is a real solution of the bare equation, excluded only by the value, not by the structure. (ii) The 'sine' analogy. By pattern-matching to d'Alembert cosine/sine problems one writes $f=A\\sin(kx)$ and tries to fit it; but the $\\sin$ branch is bounded by $b/k$ and its values at $x=\\ln 2$ never exceed the linear baseline $b\\ln 2=2\\ln 2\\approx 1.386$, so it can NEVER reach $\\tfrac{3}{2}$ -- and worse, it is eventually negative, flatly contradicting $f(x)>0$ for all $x>0$. The honest discriminator is the SIGN of $c$: the hypothesis $f>0$ on $(0,\\infty)$ (equivalently, strict monotonicity / unboundedness) forces $c>0$, i.e. the $\\sinh$ branch, and only then does the value $\\tfrac{3}{2}>2\\ln 2$ confirm it and pin the parameters. Assuming the closed form -- rather than EARNING the sign of $c$ from differentiability plus the positivity hypothesis -- is to assume away the entire problem.",
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
    "remark": "Insight: this is a d'Alembert-type law in disguise. The hyperbolic identity $\\sinh(x+y)\\sinh(x-y)=\\sinh^2 x-\\sinh^2 y$ is the source, but the SAME algebra is satisfied by $\\sin$ (with a sign), by a straight line, and by a whole one-parameter family in each case -- so the bare equation is wildly under-determined. Twice-differentiability is the lever: differentiate twice at $y=0$ and the law becomes the lone linear ODE $f''=cf$, the universal trichotomy machine ($c<0$ sine, $c=0$ line, $c>0$ sinh). The decisive move a top ranker must make is to realise that NO amount of data substituted into a guessed closed form is a proof; one must first earn the SIGN of $c$. Here the innocuous-looking hypothesis $f>0$ on $(0,\\infty)$ is doing the heavy lifting -- it eliminates the oscillatory sine branch outright, the lone value then kills the degenerate line ($2\\ln2<\\tfrac32$), and only the unbounded $\\sinh$ survives. Two further morals: the first integral $f'^2=cf^2+b^2$ shows boundedness versus monotonicity is precisely the geometric signature of the sign of $c$; and the functional equation carries its own duplication law $f(2t)=2f(t)\\cosh t$, so the inverse value $f^{-1}(\\tfrac{15}{4})=\\ln4$ falls out by doubling $\\ln 2$ with no calculus at all. Slogan: differentiability decides the family, the sign condition decides the branch, the data decides the parameter -- in that order."
  },
  {
    "theme": "smoothness",
    "themeLabel": "Higher Derivatives & Smoothness",
    "title": "The Smooth Ghost Whose Taylor Series Sees Nothing",
    "difficulty": 5,
    "task": "Prove and evaluate",
    "tags": [
      "c-infinity-not-analytic",
      "maclaurin-series",
      "induction",
      "taylor-remainder",
      "flatness",
      "leibniz"
    ],
    "statement": "Define \\[ f(x)=\\begin{cases} e^{-1/x^{2}}, & x\\neq 0,\\\\ 0, & x=0. \\end{cases} \\] (the famous \"flat\" bump). Work entirely from the definition of the derivative at $0$.\n\n(a) The structure. Prove that for every $n\\ge 0$ there is a polynomial $P_n$ with \\[ f^{(n)}(x)=P_n\\!\\left(\\tfrac1x\\right)e^{-1/x^{2}}\\qquad(x\\neq0), \\] and that these polynomials obey, with $t=\\tfrac1x$, the recursion \\[ P_0(t)=1,\\qquad P_{n+1}(t)=2t^{3}P_n(t)-t^{2}P_n'(t). \\] Deduce that $\\deg P_n=3n$ with leading coefficient $2^{n}$ (for $n\\ge1$).\n\n(b) The flatness. Prove by induction that $f^{(n)}(0)=0$ for every $n\\ge0$ — using the limit definition $f^{(n+1)}(0)=\\lim_{x\\to0}\\dfrac{f^{(n)}(x)-f^{(n)}(0)}{x}$, NOT a formula plugged in at $0$. Conclude that $f$ is $C^{\\infty}$ on $\\mathbb{R}$, that its Maclaurin series is identically $0$, and hence that this series represents $f$ on no interval around $0$ — i.e. $f$ is smooth but not analytic.\n\n(c) The verdict on the remainder, and the sharp rate. A student argues: \"the Maclaurin polynomial of degree $n$ is $0$, so by Taylor's theorem $f(x)=R_n(x)$ with $R_n(x)\\to0$; an error that is smaller than every power of $x$ must be $0$, so $f\\equiv0$.\" Decide whether this is correct, and explain in one precise sentence where it breaks. Then prove the true rate of flatness: \\[ \\lim_{x\\to0^{+}}\\frac{f(x)}{x^{m}}=0\\quad\\text{for every integer }m\\ge0, \\qquad\\text{yet}\\qquad \\lim_{x\\to0^{+}} f^{(n)}(x)\\,e^{1/x^{2}}\\,x^{3n}=2^{n}. \\]",
    "answer": "\\[\\boxed{f\\in C^{\\infty},\\ f^{(n)}(0)=0\\ \\forall n\\ \\text{(Maclaurin series}\\equiv0\\ne f\\text{, so }f\\text{ is not analytic)};\\quad \\lim_{x\\to0^{+}}\\tfrac{f(x)}{x^{m}}=0\\ \\forall m,\\quad \\lim_{x\\to0^{+}}f^{(n)}(x)e^{1/x^{2}}x^{3n}=2^{n}}\\]",
    "trap": "The fatal step is the last one in part (c): \"a remainder smaller than every power of $x$ must be $0$, so $f\\equiv0$.\" This silently assumes the Lagrange/Peano remainder vanishes IDENTICALLY, but it does not — it equals the full value $R_n(x)=f(x)=e^{-1/x^{2}}>0$ for $x\\ne0$. The subtlety is exactly the $C^{\\infty}$-vs-analytic gap. Taylor's theorem with Lagrange remainder reads $f(x)=\\sum_{k\\le n}\\tfrac{f^{(k)}(0)}{k!}x^{k}+\\tfrac{f^{(n+1)}(\\xi)}{(n+1)!}x^{n+1}$ with $\\xi$ STRICTLY BETWEEN $0$ and $x$ — never $\\xi=0$. The hypotheses $f^{(k)}(0)=0$ control the series only AT the origin; they say nothing about $f^{(n+1)}(\\xi)$ at an interior $\\xi\\neq0$, where $f^{(n+1)}$ is enormous (it grows like $2^{n+1}\\xi^{-3(n+1)}$ before the exponential tames it). So $R_n(x)\\to0$ as $x\\to0$ for each FIXED $n$, but the remainders do NOT shrink to $0$ uniformly in $n$ at fixed $x$: $\\sup_n|R_n(x)|=f(x)\\ne0$. \"Smaller than every power of $x$\" (super-flat) is a statement about the $x\\to0$ limit at fixed order, NOT a claim that the number $f(x)$ is zero. Conflating \"the Taylor coefficients are all $0$\" with \"the function is $0$\" is precisely the error that the existence of $f$ refutes — analyticity, not smoothness, is what would license reconstructing $f$ from its derivatives at a point. A secondary trap in (b): trying to evaluate $f^{(n+1)}(0)$ by substituting $x=0$ into the formula $P_{n+1}(1/x)e^{-1/x^{2}}$ (undefined: $\\infty\\cdot0$) instead of taking the difference-quotient limit; the formula is valid only for $x\\ne0$, and the value at $0$ must always be computed as a limit.",
    "solutions": [
      {
        "name": "Induction on the structure, the universal lemma $Q(1/x)e^{-1/x^2}\\to0$, then the rate by leading-term extraction",
        "steps": [
          "Part (a). Induct on $n$. Base $n=0$: $f(x)=1\\cdot e^{-1/x^{2}}$, so $P_0=1$. Inductive step: assume $f^{(n)}(x)=P_n(1/x)e^{-1/x^{2}}$ for $x\\ne0$. Differentiate using the chain rule, with $\\frac{d}{dx}\\big(\\tfrac1x\\big)=-\\tfrac1{x^{2}}$ and $\\frac{d}{dx}e^{-1/x^{2}}=\\tfrac{2}{x^{3}}e^{-1/x^{2}}$: $f^{(n+1)}(x)=\\big[P_n'(\\tfrac1x)(-\\tfrac1{x^{2}})+P_n(\\tfrac1x)\\tfrac{2}{x^{3}}\\big]e^{-1/x^{2}}=\\big[2t^{3}P_n(t)-t^{2}P_n'(t)\\big]e^{-1/x^{2}}$ with $t=\\tfrac1x$. Thus $P_{n+1}(t)=2t^{3}P_n(t)-t^{2}P_n'(t)$ is again a polynomial. This proves the structure and the recursion.",
          "Degree and leading coefficient. From $P_{n+1}=2t^{3}P_n-t^{2}P_n'$: if $\\deg P_n=d$ with leading term $c\\,t^{d}$, then $2t^{3}P_n$ has leading term $2c\\,t^{d+3}$ (degree $d+3$) while $t^{2}P_n'$ has degree $d+1<d+3$, so it cannot cancel the top term. Hence $\\deg P_{n+1}=\\deg P_n+3$ with leading coefficient doubled. Starting from $\\deg P_0=0,\\ P_0$ leading $1$ gives, for $n\\ge1$, $\\deg P_n=3n$ and leading coefficient $2^{n}$.",
          "Part (b), the key lemma. For ANY polynomial $Q$, $\\displaystyle\\lim_{x\\to0}Q\\!\\big(\\tfrac1x\\big)e^{-1/x^{2}}=0$. Proof: put $u=1/x^{2}\\to+\\infty$; then $|Q(1/x)|\\le C\\,|x|^{-N}=C\\,u^{N/2}$ for some $C,N$, and $Q(1/x)e^{-1/x^{2}}$ is bounded by $C\\,u^{N/2}e^{-u}$. Since $e^{u}=\\sum u^{k}/k!\\ge u^{\\lceil N/2\\rceil+1}/(\\lceil N/2\\rceil+1)!$, we get $u^{N/2}e^{-u}\\to0$. Exponential decay beats every polynomial; the lemma follows.",
          "Now induct: claim $f^{(n)}(0)=0$ for all $n$. Base: $f(0)=0$ by definition. Step: assume $f^{(n)}(0)=0$. By definition $f^{(n+1)}(0)=\\lim_{x\\to0}\\dfrac{f^{(n)}(x)-f^{(n)}(0)}{x}=\\lim_{x\\to0}\\dfrac{P_n(1/x)e^{-1/x^{2}}}{x}=\\lim_{x\\to0}\\Big[\\tfrac1x P_n(\\tfrac1x)\\Big]e^{-1/x^{2}}$. The bracket is $\\widetilde{Q}(1/x)$ for the polynomial $\\widetilde{Q}(t)=t\\,P_n(t)$, so by the lemma the limit is $0$. Hence $f^{(n+1)}(0)=0$, completing the induction. (Crucially we used the difference quotient, never a substitution $x=0$ into the formula.)",
          "Consequently every $f^{(n)}$ exists and is continuous: away from $0$ it is $P_n(1/x)e^{-1/x^{2}}$ (continuous), and at $0$ the same lemma gives $\\lim_{x\\to0}f^{(n)}(x)=0=f^{(n)}(0)$. So $f\\in C^{\\infty}(\\mathbb{R})$. Its Maclaurin series is $\\sum_{n\\ge0}\\tfrac{f^{(n)}(0)}{n!}x^{n}=\\sum 0\\cdot x^{n}\\equiv0$. This zero series equals $f$ only at $x=0$ (since $f(x)=e^{-1/x^{2}}>0$ for $x\\ne0$); on no interval around $0$ does the series represent $f$. Therefore $f$ is $C^{\\infty}$ but not analytic.",
          "Part (c), the verdict. The student is WRONG. The single false sentence: 'an error smaller than every power of $x$ must be $0$.' The remainder is $R_n(x)=f(x)-0=e^{-1/x^{2}}$, which is super-flat (smaller than every $x^{m}$ as $x\\to0$) yet strictly positive for $x\\ne0$. Being smaller than every power of $x$ in the LIMIT $x\\to0$ does not make the NUMBER $f(x)$ zero; only analyticity (Taylor series converging back to $f$) would force $f\\equiv0$, and $f$ is precisely a counterexample to that.",
          "Part (c), the rates. (i) For fixed $m$, $\\dfrac{f(x)}{x^{m}}=\\big(\\tfrac1x\\big)^{m}e^{-1/x^{2}}=Q_m(1/x)e^{-1/x^{2}}$ with $Q_m(t)=t^{m}$, so by the lemma it $\\to0$. (ii) For the sharp constant, $f^{(n)}(x)e^{1/x^{2}}x^{3n}=P_n(1/x)\\,x^{3n}=x^{3n}P_n(1/x)$. Write $P_n(t)=2^{n}t^{3n}+(\\text{lower})$; then $x^{3n}P_n(1/x)=2^{n}+x^{3n}\\cdot(\\text{lower-degree terms in }1/x)$, and every lower term is $a_j x^{3n}\\,x^{-j}=a_j x^{3n-j}$ with $j<3n$, hence $\\to0$. Therefore the limit is exactly $2^{n}$. \\[\\boxed{f\\in C^{\\infty},\\ f^{(n)}(0)=0\\ \\forall n,\\ \\text{series}\\equiv0\\ne f;\\quad \\lim_{x\\to0^{+}}\\tfrac{f(x)}{x^{m}}=0,\\quad \\lim_{x\\to0^{+}}f^{(n)}(x)e^{1/x^{2}}x^{3n}=2^{n}.}\\]"
        ]
      },
      {
        "name": "L'Hopital tower for the flatness, substitution $u=1/x^2$ throughout, remainder refuted by exhibiting $\\xi$",
        "steps": [
          "Part (a) is as in Method 1: differentiating $P_n(1/x)e^{-1/x^{2}}$ gives $P_{n+1}(t)=2t^{3}P_n(t)-t^{2}P_n'(t)$, whence $\\deg P_n=3n$ and leading coefficient $2^{n}$ for $n\\ge1$ (the $2t^{3}P_n$ term dominates $t^{2}P_n'$ by two degrees).",
          "Part (b) via repeated L'Hopital. It suffices (by the difference-quotient induction of Method 1) to show $\\lim_{x\\to0}x^{-k}e^{-1/x^{2}}=0$ for every integer $k\\ge0$, since each step reduces to such a monomial-times-exponential. Substitute $u=1/x^{2}$, so $x\\to0^{+}\\Rightarrow u\\to+\\infty$ and $x^{-k}=u^{k/2}$. We need $\\lim_{u\\to\\infty}u^{k/2}e^{-u}=0$. Writing $p=\\lceil k/2\\rceil$, apply L'Hopital $p$ times to $\\dfrac{u^{p}}{e^{u}}$: derivatives drop the power by one each time while $e^{u}$ is unchanged, giving $\\dfrac{p!}{e^{u}}\\to0$. Hence $u^{k/2}e^{-u}\\le u^{p}e^{-u}\\to0$ (the two-sided limit $x\\to0$ follows since the bound is even in $x$).",
          "Therefore, by the induction $f^{(n+1)}(0)=\\lim_{x\\to0}\\frac{f^{(n)}(x)}{x}=\\lim_{x\\to0}\\big(\\tfrac1x P_n(\\tfrac1x)\\big)e^{-1/x^{2}}$, a finite sum of terms $a_j x^{-(j+1)}e^{-1/x^{2}}\\to0$; so $f^{(n+1)}(0)=0$. Each $f^{(n)}$ is continuous at $0$ by the same monomial limits, so $f\\in C^{\\infty}$ and the Maclaurin series is $\\equiv0$. Since $f(x)=e^{-1/x^{2}}\\neq0$ for $x\\neq0$, the series fails to equal $f$ on every punctured neighbourhood of $0$: $f$ is smooth, not analytic.",
          "Part (c), refute by producing $\\xi$. Fix $x>0$ and $n$. Taylor with Lagrange remainder gives $\\xi\\in(0,x)$ with $e^{-1/x^{2}}=f(x)=R_n(x)=\\dfrac{f^{(n+1)}(\\xi)}{(n+1)!}x^{n+1}$, i.e. $f^{(n+1)}(\\xi)=\\dfrac{(n+1)!\\,e^{-1/x^{2}}}{x^{n+1}}\\neq0$. So the remainder is genuinely carried by a NONZERO value of a high derivative at an interior point $\\xi\\ne0$ — exactly the data the hypotheses $f^{(k)}(0)=0$ never controlled. The student's claim 'the error is smaller than every power so it is $0$' confuses the $x\\to0$ asymptotics with the actual numeric value; the explicit $\\xi$ shows the remainder is a true, nonzero quantity. The student is wrong; $f\\not\\equiv0$.",
          "Part (c), the two limits. With $u=1/x^{2}$: $\\dfrac{f(x)}{x^{m}}=u^{m/2}e^{-u}\\to0$ by the L'Hopital bound, giving the first limit. For the second, $f^{(n)}(x)e^{1/x^{2}}x^{3n}=x^{3n}P_n(1/x)$; substituting the explicit leading behaviour $P_n(1/x)=2^{n}x^{-3n}+\\sum_{j<3n}a_j x^{-j}$ yields $x^{3n}P_n(1/x)=2^{n}+\\sum_{j<3n}a_j x^{3n-j}\\to2^{n}$ since each exponent $3n-j>0$. Hence \\[\\boxed{f\\in C^{\\infty},\\ \\text{Maclaurin}\\equiv0\\ne f;\\quad \\lim_{x\\to0^{+}}\\tfrac{f(x)}{x^{m}}=0,\\quad \\lim_{x\\to0^{+}}f^{(n)}(x)e^{1/x^{2}}x^{3n}=2^{n}.}\\]"
        ]
      },
      {
        "name": "Series view: term-by-term comparison with $e^{w}$, plus the analytic/non-analytic dichotomy",
        "steps": [
          "Part (a). Same recursion $P_{n+1}=2t^{3}P_n-t^{2}P_n'$ as before, with $\\deg P_n=3n$, lead $2^{n}$ ($n\\ge1$). We add a clean reason the value at $0$ is $0$ that bypasses computing each $P_n$: a power-series bound on $e^{w}$.",
          "Part (b) via the exponential series. For $x\\ne0$ set $w=1/x^{2}>0$. Then $e^{w}=\\sum_{k\\ge0}\\dfrac{w^{k}}{k!}\\ge\\dfrac{w^{N}}{N!}$ for any chosen $N$, so $e^{-1/x^{2}}=e^{-w}\\le\\dfrac{N!}{w^{N}}=N!\\,x^{2N}$. Thus $f(x)\\le N!\\,x^{2N}$ for every $N$: $f$ is bounded above by every even power of $x$ near $0$ — it is super-flat from first principles, no derivatives needed.",
          "This super-flatness powers the induction. Given $f^{(n)}(x)=P_n(1/x)e^{-1/x^{2}}$ with $\\deg P_n=3n$, choose $N$ with $2N>3n+1$; then $\\big|\\tfrac1x f^{(n)}(x)\\big|=\\big|\\tfrac1x P_n(\\tfrac1x)\\big|e^{-1/x^{2}}\\le C\\,|x|^{-(3n+1)}\\cdot N!\\,x^{2N}=CN!\\,|x|^{2N-3n-1}\\to0$. So the difference quotient $\\frac{f^{(n)}(x)-f^{(n)}(0)}{x}\\to0$, i.e. $f^{(n+1)}(0)=0$. Induction from $f(0)=0$ gives $f^{(n)}(0)=0$ for all $n$; continuity of each $f^{(n)}$ at $0$ is the same bound with $n$ in place of $n+1$. Hence $f\\in C^{\\infty}$.",
          "The dichotomy. A function $g$ is analytic at $0$ iff its Taylor series converges to $g$ on some interval $(-r,r)$; equivalently $R_n(x)\\to0$ as $n\\to\\infty$ for $x$ in that interval. Here the Maclaurin series is $\\equiv0$, so it converges (to $0$) for ALL $x$ — convergence is not the issue. The issue is the LIMIT FUNCTION: it equals $f$ only at $x=0$. So $f$ is the canonical witness that 'all derivatives at a point vanish' does NOT imply 'the function vanishes' — smoothness is strictly weaker than analyticity.",
          "Part (c). The student conflates '$R_n(x)\\to0$ as $x\\to0$ (fixed $n$)' with '$R_n(x)\\to0$ as $n\\to\\infty$ (fixed $x$)'. Only the latter would force $f\\equiv0$, and it FAILS: at fixed $x\\ne0$, $R_n(x)=f(x)=e^{-1/x^{2}}$ for every $n$, a constant nonzero sequence in $n$. The one wrong sentence is the leap from 'super-flat' to 'identically zero.' Verdict: incorrect; $f\\not\\equiv0$.",
          "Part (c) rates. First limit: $\\dfrac{f(x)}{x^{m}}\\le \\dfrac{N!\\,x^{2N}}{x^{m}}=N!\\,x^{2N-m}\\to0$ on choosing $2N>m$. Second limit: $f^{(n)}(x)e^{1/x^{2}}x^{3n}=x^{3n}P_n(1/x)=2^{n}+(\\text{terms }a_jx^{3n-j},\\,j<3n)\\to2^{n}$, the surviving constant being precisely the leading coefficient $2^{n}$ of $P_n$ established in (a). \\[\\boxed{f\\in C^{\\infty},\\ f^{(n)}(0)=0\\ \\forall n,\\ \\text{series}\\equiv0\\ne f;\\quad \\lim_{x\\to0^{+}}\\tfrac{f(x)}{x^{m}}=0,\\quad \\lim_{x\\to0^{+}}f^{(n)}(x)e^{1/x^{2}}x^{3n}=2^{n}.}\\]"
        ]
      }
    ],
    "remark": "Insight: this is the flagship separation $C^{\\infty}\\ne C^{\\omega}$ (smooth $\\ne$ analytic), the single most important example in the smoothness chapter and the seed of every bump function and partition of unity. Three ideas lock together. (1) STRUCTURE: every derivative has the shape $P_n(1/x)e^{-1/x^{2}}$ with the tidy recursion $P_{n+1}=2t^{3}P_n-t^{2}P_n'$, so $\\deg P_n=3n$ and the leading coefficient is $2^{n}$ — a Leibniz-style pattern that makes the otherwise-fearsome high derivatives completely legible. (2) FLATNESS: exponential decay annihilates every polynomial in $1/x$, so $f^{(n)}(0)=0$ for all $n$ — but this MUST be proven through the difference-quotient limit, because substituting $x=0$ into $P_n(1/x)e^{-1/x^{2}}$ is the meaningless form $\\infty\\cdot0$; the value at $0$ is always a limit. (3) THE TRAP, which is the whole moral: the Taylor series is identically $0$, it converges everywhere, yet it reconstructs $f$ at the single point $0$ only. The seductive 'remainder $\\to0$, so the function is $0$' confuses two different limits — $x\\to0$ at fixed order (true: super-flat) versus $n\\to\\infty$ at fixed $x$ (false: $R_n(x)=f(x)$ forever). Taylor's Lagrange remainder evaluates $f^{(n+1)}$ at an interior $\\xi\\ne0$ where it is astronomically large, never at $0$ where it vanishes; the hypotheses pin down only the origin. Top-ranker takeaway: knowing every derivative of a function at one point tells you NOTHING about the function elsewhere unless you also know it is analytic — smoothness alone is a ghost that leaves no trace in its Taylor coefficients."
  },
  {
    "theme": "smoothness",
    "themeLabel": "Higher Derivatives & Smoothness",
    "title": "The Quartic Cushion That Refuses the Taylor Coefficient",
    "difficulty": 5,
    "task": "Find the sharp constant",
    "tags": [
      "taylor-remainder",
      "order-of-contact",
      "sharp-inequality",
      "monotonicity",
      "alternating-series",
      "endpoint-binding"
    ],
    "statement": "Among all real constants $c$, find the LARGEST one for which the cushioned inequality \\[ \\cos x\\ \\ge\\ 1-\\frac{x^{2}}{2}+c\\,x^{4}\\qquad\\text{holds for every }x\\in[0,\\pi]. \\] Here the quadratic $1-\\tfrac{x^{2}}{2}$ is the order-$2$ Taylor polynomial of $\\cos$, and the term $c\\,x^{4}$ is a quartic cushion lifting the parabola toward $\\cos$. The engine is the rate at which the Taylor error $\\cos x-(1-\\tfrac{x^{2}}{2})$ vanishes versus how that error behaves all the way out to the endpoint $x=\\pi$. Box the largest admissible $c$, in closed form.",
    "answer": "\\[\\boxed{\\,c_{\\max}=\\dfrac{\\pi^{2}-4}{2\\pi^{4}}\\,}\\]",
    "trap": "The seductive wrong answer is $c=\\tfrac1{24}$, the genuine $x^{4}$ Taylor coefficient of $\\cos$ ($\\cos x=1-\\tfrac{x^2}{2}+\\tfrac{x^4}{24}-\\tfrac{x^6}{720}+\\cdots$). The reasoning 'the order-$4$ contact term is $\\tfrac{x^4}{24}$, so $c=\\tfrac1{24}$ is the right cushion, and the alternating series guarantees $\\cos x\\ge 1-\\tfrac{x^2}{2}+\\tfrac{x^4}{24}$' is FALSE on two counts. First, the partial-sum sandwich for an alternating series gives a LOWER bound only after an EVEN number of terms: stopping at $+\\tfrac{x^4}{24}$ stops after a positive term, so the truncation OVERSHOOTS $\\cos x$. Concretely $\\cos x-(1-\\tfrac{x^2}{2}+\\tfrac{x^4}{24})=-\\tfrac{x^6}{720}+\\cdots<0$ for every $x\\ne0$ near $0$ — the inequality with $c=\\tfrac1{24}$ fails IMMEDIATELY, e.g. already at $x=0.01$. So $c=\\tfrac1{24}$ is not merely non-sharp, it is inadmissible. Second, even a careful solver who notices this and tries to read $c$ off the worst LOCAL behaviour near $0$ is led astray: the ratio $h(x)=\\dfrac{\\cos x-1+x^2/2}{x^4}$ starts at $h(0^+)=\\tfrac1{24}$ but the binding value is the GLOBAL infimum of $h$ on $(0,\\pi]$, and because $h$ is strictly DECREASING the infimum sits at the far ENDPOINT $x=\\pi$, not near $0$. The smoothness/order-of-contact data (the Taylor coefficient) controls the error only in the $x\\to0$ limit; the sharp uniform constant on a fixed interval is an endpoint phenomenon. Confusing 'the rate at $0$' with 'the worst case on $[0,\\pi]$', or trusting an odd-length alternating truncation as a one-sided bound, is the conceptual error.",
    "solutions": [
      {
        "name": "Reduce to an infimum, then a four-step sign cascade proves the ratio is decreasing",
        "steps": [
          "For $x\\in(0,\\pi]$ the inequality $\\cos x\\ge 1-\\tfrac{x^2}{2}+c\\,x^4$ rearranges (divide by $x^4>0$) to $c\\le h(x)$, where $h(x):=\\dfrac{\\cos x-1+x^2/2}{x^4}$. At $x=0$ both sides vanish for every $c$, so $x=0$ imposes no constraint. Hence the largest admissible $c$ is $c_{\\max}=\\inf_{x\\in(0,\\pi]}h(x)$.",
          "Claim: $h$ is strictly decreasing on $(0,\\pi]$, so the infimum is attained at the right endpoint $x=\\pi$. Write $N(x)=\\cos x-1+\\tfrac{x^2}{2}$, so $h=N/x^4$ and $h'(x)=\\dfrac{x N'(x)-4N(x)}{x^5}$. The sign of $h'$ is the sign of $\\phi(x):=xN'(x)-4N(x)$. With $N'(x)=x-\\sin x$, expand: $\\phi(x)=x(x-\\sin x)-4(\\cos x-1+\\tfrac{x^2}{2})=-x\\sin x-x^{2}-4\\cos x+4.$",
          "Show $\\phi<0$ on $(0,\\pi)$ by climbing down four derivatives, each vanishing at $0$. Compute $\\phi'(x)=-x\\cos x-2x+3\\sin x$, $\\phi''(x)=x\\sin x+2\\cos x-2$, $\\phi'''(x)=x\\cos x-\\sin x$. Now $\\phi'''(0)=0$ and $\\big(\\phi'''\\big)'(x)=-x\\sin x\\le0$ on $(0,\\pi)$ (with strict $<0$ on $(0,\\pi)$), so $\\phi'''$ is decreasing from $0$, giving $\\phi'''<0$ on $(0,\\pi)$.",
          "Integrate the signs upward: $\\phi''(0)=0$ and $\\phi'''<0\\Rightarrow\\phi''<0$ on $(0,\\pi)$; then $\\phi'(0)=0$ and $\\phi''<0\\Rightarrow\\phi'<0$; finally $\\phi(0)=0$ and $\\phi'<0\\Rightarrow\\phi(x)<0$ on $(0,\\pi)$. Therefore $h'(x)<0$ on $(0,\\pi)$: $h$ is strictly decreasing, and $\\inf_{(0,\\pi]}h=h(\\pi)$, a genuine minimum at the endpoint.",
          "Evaluate at the endpoint: $h(\\pi)=\\dfrac{\\cos\\pi-1+\\pi^2/2}{\\pi^4}=\\dfrac{-1-1+\\pi^2/2}{\\pi^4}=\\dfrac{\\pi^2/2-2}{\\pi^4}=\\dfrac{\\pi^{2}-4}{2\\pi^{4}}.$ Hence $c_{\\max}=\\dfrac{\\pi^{2}-4}{2\\pi^{4}}\\approx0.03013$, strictly below the tempting $\\tfrac1{24}\\approx0.04167$.",
          "Sanity on the trap: at $c=\\tfrac1{24}$, $\\cos x-(1-\\tfrac{x^2}{2}+\\tfrac{x^4}{24})=-\\tfrac{x^6}{720}+\\cdots<0$ near $0$, so $\\tfrac1{24}$ is inadmissible; the admissible constants are exactly $c\\le\\dfrac{\\pi^2-4}{2\\pi^4}$, the largest being $\\boxed{\\dfrac{\\pi^{2}-4}{2\\pi^{4}}}.$"
        ]
      },
      {
        "name": "Endpoint-binding by boundary calculus: where the minimum of the gap lives",
        "steps": [
          "Fix $c$ and set $F(x)=\\cos x-\\big(1-\\tfrac{x^2}{2}+c\\,x^4\\big)$ on $[0,\\pi]$. We want the largest $c$ with $\\min_{[0,\\pi]}F\\ge0$. Note $F(0)=0$ and $F'(0)=0$; the order-$2$ contact at $0$ is automatic, so the relevant geometry is whether $F$ ever dips below $0$ as $x$ grows.",
          "Consider the threshold case where the constraint is tight. By the rearrangement $F(x)\\ge0\\iff c\\le h(x)$ (for $x>0$), the admissibility region is $c\\le\\min_{(0,\\pi]}h$. At the sharp $c=c_{\\max}$ the function $F$ touches $0$ exactly at the minimiser of $h$. We locate that minimiser by the sign of $h'$.",
          "As in Method 1, $\\operatorname{sign}h'(x)=\\operatorname{sign}\\phi(x)$ with $\\phi(x)=-x\\sin x-x^2-4\\cos x+4$. On $(0,\\pi)$ one has $\\phi<0$ (the four-fold cascade $\\phi,\\phi',\\phi'',\\phi'''$ all start at $0$ and $(\\phi''')'=-x\\sin x<0$). Thus $h$ has NO interior critical point on $(0,\\pi)$ and is strictly decreasing; its minimum over the closed-from-the-right interval $(0,\\pi]$ is forced to the boundary point $x=\\pi$.",
          "This is the order-of-contact moral made precise: near $0$, $h(x)=\\tfrac1{24}-\\tfrac{x^2}{720}+\\cdots$, so $h(0^+)=\\tfrac1{24}$ is the LOCAL rate dictated by the Taylor coefficient — but that is the MAXIMUM of $h$, not its minimum. A uniform inequality must survive the worst point, and monotonicity drives the worst point to the endpoint.",
          "Therefore $c_{\\max}=h(\\pi)=\\dfrac{-2+\\pi^2/2}{\\pi^4}=\\dfrac{\\pi^2-4}{2\\pi^4}$. Verify tightness: at this $c$, $F(\\pi)=\\cos\\pi-(1-\\tfrac{\\pi^2}{2}+c_{\\max}\\pi^4)=-1-1+\\tfrac{\\pi^2}{2}-\\tfrac{\\pi^2-4}{2}=0$, and $F>0$ on $(0,\\pi)$ because $c_{\\max}=\\min h<h(x)$ there. Any larger $c$ makes $F(\\pi)<0$.",
          "Hence the cushion cannot exceed $\\boxed{\\dfrac{\\pi^{2}-4}{2\\pi^{4}}}$, and this value works, so it is the answer."
        ]
      },
      {
        "name": "Alternating-series representation of the ratio pins the infimum at the endpoint",
        "steps": [
          "Use the Maclaurin series $\\cos x=\\sum_{k\\ge0}\\dfrac{(-1)^k x^{2k}}{(2k)!}$, so $\\cos x-1+\\tfrac{x^2}{2}=\\sum_{k\\ge2}\\dfrac{(-1)^k x^{2k}}{(2k)!}$. Dividing by $x^4$, \\[ h(x)=\\sum_{k\\ge2}\\frac{(-1)^k x^{2k-4}}{(2k)!}=\\frac1{24}-\\frac{x^2}{720}+\\frac{x^4}{40320}-\\cdots. \\] This converges for all $x$ and is an ALTERNATING series in the variable $x$.",
          "Check the terms decrease in magnitude on $[0,\\pi]$. The ratio of consecutive magnitudes is $\\dfrac{x^{2(k+1)-4}/(2k+2)!}{x^{2k-4}/(2k)!}=\\dfrac{x^2}{(2k+1)(2k+2)}$. For $k\\ge2$ the denominator is at least $5\\cdot6=30$, while $x^2\\le\\pi^2<10$ on $[0,\\pi]$. So every ratio is $<1$: the magnitudes strictly decrease for all $x\\in(0,\\pi]$.",
          "Genuine monotonicity of $h$ (needed to place the infimum) comes from differentiating term-by-term: $h'(x)=\\sum_{k\\ge2}\\dfrac{(-1)^k(2k-4)x^{2k-5}}{(2k)!}=-\\dfrac{2x}{720}+\\dfrac{4x^3}{40320}-\\cdots=-\\dfrac{x}{360}\\Big(1-\\dfrac{x^2}{84}+\\cdots\\Big)$. This is again an alternating series whose terms decrease in magnitude on $[0,\\pi]$ (ratio $\\dfrac{(2k-2)x^2}{(2k-4)(2k+1)(2k+2)}<1$ there), so its sign equals the sign of its first term $-\\dfrac{x}{360}<0$ for $x\\in(0,\\pi]$. Hence $h'<0$: $h$ is strictly decreasing.",
          "A strictly decreasing $h$ on $(0,\\pi]$ has its infimum at $x=\\pi$, so $c_{\\max}=h(\\pi)$. The series also explains the trap directly: truncating $h$ after its FIRST term gives the over-estimate $h(x)\\le\\tfrac1{24}$ (alternating, one positive term $\\Rightarrow$ upper bound), so $\\tfrac1{24}$ is an UPPER bound for $h$, never a lower one — it cannot be a valid cushion.",
          "Evaluate the endpoint in closed form: $h(\\pi)=\\dfrac{\\cos\\pi-1+\\pi^2/2}{\\pi^4}=\\dfrac{\\pi^2-4}{2\\pi^4}$.",
          "Therefore the largest admissible cushion is $\\boxed{\\dfrac{\\pi^{2}-4}{2\\pi^{4}}}$."
        ]
      }
    ],
    "remark": "Insight: this problem separates two things that look identical to a hasty eye — the LOCAL rate at which a Taylor error vanishes, and the GLOBAL constant that makes a one-sided inequality hold on a whole interval. The ratio $h(x)=\\dfrac{\\cos x-1+x^2/2}{x^4}$ literally interpolates between them: $h(0^+)=\\tfrac1{24}$ is the order-of-contact data (the $x^4$ Taylor coefficient), but $h$ is strictly DECREASING, so the binding constant is $h(\\pi)=\\dfrac{\\pi^2-4}{2\\pi^4}$, an endpoint quantity. The classic blunder, $c=\\tfrac1{24}$, fails twice over: an alternating series truncated after a POSITIVE term yields an UPPER bound (so $\\tfrac1{24}\\ge h$, the wrong direction), and the next term $-\\tfrac{x^6}{720}$ makes $\\cos x<1-\\tfrac{x^2}{2}+\\tfrac{x^4}{24}$ for every nonzero $x$ near $0$. The robust engine is the sign of $\\phi=xN'-4N$, proven negative by a tidy four-step cascade in which $\\phi,\\phi',\\phi'',\\phi'''$ all vanish at $0$ and $(\\phi''')'=-x\\sin x<0$ — higher-derivative bookkeeping doing exactly the work this chapter is about. Top-ranker takeaway: 'how many derivatives match' tells you the error's behaviour as $x\\to0$; it does NOT hand you the sharp uniform bound on $[0,\\pi]$ — for that you must follow the error all the way to the boundary and prove monotonicity, never read the constant off the Taylor coefficient."
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
    "title": "The Arctangent's Two-Term Memory",
    "difficulty": 5,
    "task": "Evaluate and justify",
    "tags": [
      "leibniz-rule",
      "ode-recurrence",
      "higher-derivatives",
      "radius-of-convergence",
      "analyticity",
      "parity"
    ],
    "statement": "Let $f(x)=\\arctan x$, so that $f$ satisfies the first-order identity \\[ (1+x^{2})\\,f'(x)=1\\qquad\\text{for all }x\\in\\mathbb{R}. \\] Do NOT quote any memorised power series for $\\arctan$; work only from this identity and the Leibniz rule.\n\n(a) Differentiate the identity $n$ times by the Leibniz rule and evaluate at $x=0$ to obtain a recurrence relating $f^{(n+2)}(0)$ to $f^{(n)}(0)$ alone. State precisely the range of $n$ for which your recurrence is valid, and the base data it must be launched from. (Be careful about the constant on the right-hand side.)\n\n(b) Using only that recurrence and the base data, compute $f^{(11)}(0)$.\n\n(c) A student reasons: \"the Maclaurin series of $\\arctan x$ has radius of convergence $1$, so for $|x|>1$ the series diverges; therefore $\\arctan$ cannot be reconstructed from its derivatives at $0$, and in fact $\\arctan$ must fail to be $C^{\\infty}$ somewhere on $|x|>1$.\" Decide what, if anything, is correct here. In particular state the exact smoothness class of $\\arctan$ on $\\mathbb{R}$, and identify what the number $1$ really measures.",
    "answer": "\\[\\boxed{f^{(11)}(0)=-3628800=-10!}\\]",
    "trap": "The headline trap is the radius-of-convergence fallacy in part (c). The student conflates \"the Maclaurin series has radius of convergence $1$\" with \"the function is only as smooth as that radius allows.\" These are unrelated facts. $\\arctan$ is $C^{\\infty}$ — indeed real-analytic — on ALL of $\\mathbb{R}$: it has finite derivatives of every order at every real point, and around any real centre $x_0$ its own Taylor series converges back to it on a positive-length interval. The number $1$ is not a smoothness boundary at all; it is the distance from the centre $0$ to the nearest complex singularity of $\\dfrac{1}{1+z^{2}}=f'(z)$, namely the poles at $z=\\pm i$, and $|{\\pm i}|=1$. Convergence radius is governed by complex singularities, never by any failure of real smoothness. (Centre the series at $x_0=2$ instead and the radius becomes $|2\\pm i|=\\sqrt5$, larger than $1$ — yet nothing changed about $\\arctan$ on the real line.) Two further traps sit inside parts (a)–(b). First, the base-offset trap: differentiating $(1+x^{2})f'=1$ once or more kills the constant on the right ($\\tfrac{d}{dx}1=0$), so the clean recurrence $f^{(n+2)}(0)=-n(n+1)f^{(n)}(0)$ is valid only for $n\\ge1$; the $n=0$ differentiation still carries the constant $1$, which is exactly what pins the launch value $f'(0)=1$ (and $f(0)=0$). Forgetting that the constant must be differentiated away leads to an off-by-one or a spurious inhomogeneous term. Second, the parity trap: the recurrence splits into two independent chains, and the EVEN chain starts from $f(0)=\\arctan 0=0$, forcing $f^{(2k)}(0)=0$ for ALL $k$. A student who tries to compute $f^{(10)}(0)$ as a nonzero number, or who pattern-matches a single alternating-factorial formula across both parities, breaks the problem; only the odd derivatives survive.",
    "solutions": [
      {
        "name": "Leibniz on the ODE, the two-term recurrence, then iterate the odd chain",
        "steps": [
          "Part (a). Write the identity as $(1+x^{2})\\,g(x)=1$ with $g=f'$. Apply the Leibniz rule to the left side, using that $1+x^{2}$ has only three nonzero derivatives: $(1+x^{2})$, $2x$, and $2$. For $n\\ge1$, \\[\\frac{d^{n}}{dx^{n}}\\big[(1+x^{2})g\\big]=(1+x^{2})g^{(n)}+2n\\,x\\,g^{(n-1)}+n(n-1)\\,g^{(n-2)},\\] while the right side gives $\\dfrac{d^{n}}{dx^{n}}(1)=0$ for $n\\ge1$. Evaluate at $x=0$: the $2nx$ term vanishes, leaving $g^{(n)}(0)+n(n-1)\\,g^{(n-2)}(0)=0$.",
          "Translate back via $g=f'$, so $g^{(k)}=f^{(k+1)}$. The relation $f^{(n+1)}(0)=-n(n-1)f^{(n-1)}(0)$ for $n\\ge1$ becomes, on setting $m=n+1$, \\[f^{(m)}(0)=-(m-1)(m-2)\\,f^{(m-2)}(0)\\quad(m\\ge2),\\] equivalently $f^{(n+2)}(0)=-n(n+1)f^{(n)}(0)$ for $n\\ge0$. Base data: $f(0)=\\arctan 0=0$, and the $n=0$ identity $(1+0)f'(0)=1$ gives $f'(0)=1$. The constant $1$ on the right survives ONLY at $n=0$; that is what fixes $f'(0)=1$, after which it is differentiated away.",
          "Part (b). The recurrence never mixes parities, so the odd chain runs from $f^{(1)}(0)=1$: \\[f^{(3)}(0)=-2\\cdot1=-2,\\ f^{(5)}(0)=-12\\cdot(-2)=24,\\ f^{(7)}(0)=-30\\cdot24=-720,\\] \\[f^{(9)}(0)=-56\\cdot(-720)=40320,\\ f^{(11)}(0)=-90\\cdot40320=-3628800.\\] (Here $-n(n+1)$ at $n=1,3,5,7,9$ is $-2,-12,-30,-56,-90$.) Hence $f^{(11)}(0)=-3628800=-10!$.",
          "Part (c). The even chain starts at $f(0)=0$, so $f^{(2k)}(0)=0$ for every $k$; in particular $f^{(10)}(0)=0$, and only odd-order derivatives are nonzero. As for the student's claim: it is FALSE. $\\arctan$ is $C^{\\infty}$ (and real-analytic) on all of $\\mathbb{R}$, because $f'=\\tfrac1{1+x^{2}}$ is itself $C^{\\infty}$ on $\\mathbb{R}$ and $f$ is its integral, so $f^{(n)}$ exists and is continuous for every $n$ at every real point. The radius of convergence $1$ measures the distance from the centre $0$ to the nearest complex singularity of $\\tfrac1{1+z^{2}}$, the poles $z=\\pm i$ with $|\\pm i|=1$ — a fact about the complex plane, not about real smoothness. \\[\\boxed{f^{(11)}(0)=-3628800=-10!}\\]"
        ]
      },
      {
        "name": "Solve the recurrence in closed form, then specialise",
        "steps": [
          "From part (a) of Method 1 the recurrence is $f^{(n+2)}(0)=-n(n+1)f^{(n)}(0)$ with $f(0)=0,\\ f'(0)=1$. Because $f(0)=0$ propagates to $f^{(2k)}(0)=0$ for all $k$, all information lives on the odd indices; set $a_k:=f^{(2k+1)}(0)$, so $a_0=1$ and, taking $n=2k+1$, \\[a_{k+1}=-(2k+1)(2k+2)\\,a_k.\\]",
          "Unroll the product: \\[a_k=\\prod_{j=0}^{k-1}\\big[-(2j+1)(2j+2)\\big]=(-1)^{k}\\prod_{j=0}^{k-1}(2j+1)(2j+2)=(-1)^{k}\\,(2k)!,\\] since $\\prod_{j=0}^{k-1}(2j+1)(2j+2)=1\\cdot2\\cdot3\\cdots(2k)=(2k)!$. Thus the clean closed form is $f^{(2k+1)}(0)=(-1)^{k}(2k)!$ and $f^{(2k)}(0)=0$.",
          "Part (b). For $f^{(11)}(0)$ take $2k+1=11$, i.e. $k=5$: $f^{(11)}(0)=(-1)^{5}(10)!=-10!=-3628800$.",
          "Part (c). The closed form makes the parity split explicit: even derivatives vanish, odd ones are $\\pm(2k)!$, so e.g. $f^{(10)}(0)=0$. None of this caps the smoothness: $\\arctan\\in C^{\\infty}(\\mathbb{R})$ and is even real-analytic on $\\mathbb{R}$, since each $f^{(n)}$ is finite and continuous everywhere. The Maclaurin radius $1$ is the modulus of the complex poles $\\pm i$ of $f'(z)=\\tfrac1{1+z^{2}}$, not a real smoothness threshold; re-centring at $x_0=2$ gives radius $|2\\pm i|=\\sqrt5$ for the same function. \\[\\boxed{f^{(11)}(0)=-3628800=-10!}\\]"
        ]
      },
      {
        "name": "Cross-check by extracting the series coefficient the recurrence forces",
        "steps": [
          "The recurrence of part (a), $f^{(n+2)}(0)=-n(n+1)f^{(n)}(0)$ with $f(0)=0,\\ f'(0)=1$, is exactly the coefficient recursion for the Maclaurin expansion $f(x)=\\sum_{n\\ge0}c_n x^{n}$ with $c_n=\\tfrac{f^{(n)}(0)}{n!}$. Substituting $f^{(n)}(0)=n!\\,c_n$ gives $(n+2)!\\,c_{n+2}=-n(n+1)\\,n!\\,c_n$, i.e. $c_{n+2}=-\\dfrac{n(n+1)}{(n+1)(n+2)}c_n=-\\dfrac{n}{n+2}\\,c_n$.",
          "With $c_0=0,\\ c_1=1$ the even coefficients stay $0$ and the odd ones satisfy $c_{2k+1}=-\\dfrac{2k-1}{2k+1}c_{2k-1}$, telescoping to $c_{2k+1}=\\dfrac{(-1)^{k}}{2k+1}$. So the coefficient of $x^{11}$ ($k=5$) is $c_{11}=\\dfrac{(-1)^{5}}{11}=-\\dfrac1{11}$.",
          "Part (b). Convert back through $f^{(11)}(0)=11!\\,c_{11}=11!\\cdot\\big(-\\tfrac1{11}\\big)=-10!=-3628800$. (This independently reproduces the value, and recovers the classical series $\\arctan x=\\sum_k\\tfrac{(-1)^k}{2k+1}x^{2k+1}$ as a by-product, derived rather than memorised.)",
          "Part (c). The series $\\sum_k \\tfrac{(-1)^k}{2k+1}x^{2k+1}$ has radius $\\limsup|c_{2k+1}|^{1/(2k+1)}=1$, yet $\\arctan$ is $C^{\\infty}$ and analytic on all of $\\mathbb{R}$. The student's inference is invalid: divergence of the Maclaurin series for $|x|>1$ says nothing about real differentiability — it only reflects that the holomorphic extension $\\tfrac1{1+z^{2}}$ has poles at $z=\\pm i$ at distance $1$ from the centre. Smoothness is a real-line property; radius of convergence is a complex-plane property; the value $1$ belongs entirely to the latter. \\[\\boxed{f^{(11)}(0)=-3628800=-10!}\\]"
        ]
      }
    ],
    "remark": "Insight: an ODE with polynomial coefficients converts a function's whole tower of derivatives into a short recurrence — here Leibniz on $(1+x^{2})f'=1$ collapses everything to the two-term law $f^{(n+2)}(0)=-n(n+1)f^{(n)}(0)$, so the eleventh derivative is reached by walking the odd chain $1\\to-2\\to24\\to-720\\to40320\\to-3628800$ with no series in sight. Three subtleties decide whether a top ranker gets it clean. (1) The constant on the right of $(1+x^{2})f'=1$ is annihilated by every derivative of order $\\ge1$, so the recurrence is homogeneous for $n\\ge1$ and the lone surviving constant at $n=0$ is precisely what supplies the launch value $f'(0)=1$ — get the base offset wrong and the whole chain shifts. (2) The recurrence preserves parity, and the even chain is born at $f(0)=0$, so $f^{(2k)}(0)\\equiv0$; the answer lives entirely on the odd side, and the closed form $f^{(2k+1)}(0)=(-1)^k(2k)!$ falls out by unrolling a telescoping product. (3) The deepest trap is the radius-of-convergence fallacy: $\\arctan$ is $C^{\\infty}$ and even real-analytic on ALL of $\\mathbb{R}$, while its Maclaurin radius is merely $1$ — the distance to the complex poles $\\pm i$ of $\\tfrac1{1+z^{2}}$. Real smoothness and convergence radius answer different questions: the former asks whether derivatives exist on the line, the latter asks how far the complex extension can reach before hitting a singularity. Conflating them — \"radius $1$, so it must misbehave past $|x|=1$\" — is a hallmark error this problem is built to expose."
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
    "title": "The Degree That Buys a Free Order of Smoothness",
    "difficulty": 5,
    "task": "Determine and justify",
    "tags": [
      "piecewise-gluing",
      "one-sided-derivatives",
      "taylor-matching",
      "degree-obstruction",
      "complex-method",
      "c-k-smoothness"
    ],
    "statement": "Fix a real polynomial $p$ and define a glued function on $\\mathbb{R}$ by \\[ f(x)=\\begin{cases} e^{x}\\sin x, & x\\le 0,\\\\ p(x), & x>0. \\end{cases} \\] A two-sided derivative $f^{(j)}(0)$ exists precisely when the one-sided derivatives agree, i.e. $\\lim_{x\\to0^-}\\big(e^{x}\\sin x\\big)^{(j)}=\\lim_{x\\to0^+}p^{(j)}(x)$; since both pieces are $C^{\\infty}$ on their own side, $f\\in C^{k}(\\mathbb{R})$ if and only if the one-sided $j$-th derivatives match at $0$ for every $j=0,1,\\dots,k$.\n\n(a) Suppose $\\deg p\\le 3$. Over ALL such polynomials $p$, find the LARGEST integer $k$ for which $f$ can be made to lie in $C^{k}(\\mathbb{R})$, exhibit the optimal $p$, and prove the ceiling is hard (that no degree-$\\le 3$ polynomial does better).\n\n(b) Now drop the degree cap and ask the reverse question: what is the SMALLEST degree $m$ of a polynomial $p$ for which the glue $f$ can be made $C^{8}(\\mathbb{R})$? Justify why this $m$ suffices and why $m-1$ does not.\n\nThroughout, write $L(x)=e^{x}\\sin x$. You will need the values $L^{(n)}(0)$; do not merely list a few — find the structural reason some of them vanish.",
    "answer": "\\[\\boxed{\\text{(a) } k=4;\\qquad \\text{(b) } m=7}\\]",
    "trap": "The fatal move is a pure dimension count: a polynomial of degree $\\le 3$ carries $4$ free coefficients, so it can satisfy the $4$ matching conditions $j=0,1,2,3$ and \"therefore\" the best one can hope for is $C^{3}$. This is wrong, and wrong for a deep reason — it ignores WHICH values are being matched. Once the four conditions force $p$ to equal the degree-$3$ Taylor polynomial $T_3 L=x+x^{2}+\\tfrac{x^{3}}{3}$, the very NEXT condition, $j=4$, reads $p^{(4)}(0)=L^{(4)}(0)$, i.e. $0=L^{(4)}(0)$ — and it so happens that $L^{(4)}(0)=0$. The condition is satisfied for FREE, so the glue is automatically $C^{4}$, one order beyond the naive count. The vanishing is not luck: $L(x)=e^{x}\\sin x=\\operatorname{Im}e^{(1+i)x}$, hence $L^{(n)}(0)=\\operatorname{Im}(1+i)^{n}=2^{n/2}\\sin\\frac{n\\pi}{4}$, which is exactly $0$ whenever $n\\equiv0\\pmod4$. The first nonzero higher value is $L^{(5)}(0)=-4\\ne0$, and since $p^{(5)}\\equiv0$ for $\\deg p\\le3$ the $j=5$ condition $0=-4$ is unfixable — that is the true hard ceiling, $C^{4}$, not $C^{3}$. Part (b) hides the mirror image of the same trap: to reach $C^{8}$ one must match $j=0,\\dots,8$, and a hasty solver writes $p=T_8 L$ and reports $\\deg p=8$. But $L^{(8)}(0)=0$ (again $8\\equiv0\\bmod4$), so the $x^{8}$ coefficient of $T_8 L$ is $0$: the polynomial silently collapses to degree $7$. The smallest degree is $m=7$, not $8$. A subtler over-correction also fails: one might think raising the degree from $3$ to $4$ should buy more smoothness, yet the degree-$4$ optimum is STILL only $C^{4}$ (its $x^{4}$ coefficient is forced to $0$, wasting the extra freedom), so degree $4$ is strictly redundant — smoothness jumps not with every degree but only when the matched derivative is genuinely nonzero.",
    "solutions": [
      {
        "name": "Taylor-matching with the complex closed form for the obstruction values",
        "steps": [
          "Reduce smoothness to derivative matching. By the stated criterion, $f\\in C^{k}$ iff $p^{(j)}(0)=L^{(j)}(0)$ for all $j=0,\\dots,k$, where $L(x)=e^{x}\\sin x$. Since $p^{(j)}(0)=j!\\,[x^{j}]p$, matching the conditions $j=0,\\dots,r$ is the same as forcing the bottom $r+1$ Taylor coefficients of $p$ to equal those of $L$; equivalently $p$ must agree with the Taylor polynomial $T_r L$ up to order $r$.",
          "Get the obstruction values in one stroke. Write $L(x)=\\operatorname{Im}e^{(1+i)x}$, so $L^{(n)}(x)=\\operatorname{Im}\\big((1+i)^{n}e^{(1+i)x}\\big)$ and $L^{(n)}(0)=\\operatorname{Im}(1+i)^{n}$. With $1+i=\\sqrt2\\,e^{i\\pi/4}$ this is $L^{(n)}(0)=2^{n/2}\\sin\\frac{n\\pi}{4}$. Hence $L^{(n)}(0)=0$ exactly when $n\\equiv0\\pmod4$, and in particular $L^{(0)}(0)=0,\\ L'(0)=1,\\ L''(0)=2,\\ L'''(0)=2,\\ L^{(4)}(0)=0,\\ L^{(5)}(0)=-4.$",
          "Part (a): pin the polynomial, then push one extra order. With $\\deg p\\le3$ the four conditions $j=0,1,2,3$ uniquely force $p=T_3 L=x+x^{2}+\\tfrac{x^{3}}{3}$ (any other degree-$\\le3$ polynomial fails one of these, so cannot even be $C^{3}$). For this $p$ test $j=4$: we need $p^{(4)}(0)=L^{(4)}(0)$, i.e. $0=0$ — satisfied automatically because $4\\equiv0\\pmod4$. So $f\\in C^{4}$. Test $j=5$: we need $p^{(5)}(0)=L^{(5)}(0)$, i.e. $0=-4$, which is FALSE and cannot be repaired since $p^{(5)}\\equiv0$ for $\\deg p\\le3$. Therefore the maximum is $k=4$, attained only by $p=x+x^{2}+\\tfrac{x^{3}}{3}$.",
          "Part (b): invert the count, watching for the vanishing top coefficient. To get $f\\in C^{8}$ we must match $j=0,\\dots,8$, so $p$ must agree with $T_8 L$ to order $8$; the minimal-degree such $p$ is $T_8 L$ itself. But the $x^{8}$ coefficient of $T_8 L$ is $L^{(8)}(0)/8!=0$ (as $8\\equiv0\\bmod4$), so $T_8 L=x+x^{2}+\\tfrac{x^{3}}{3}-\\tfrac{x^{5}}{30}-\\tfrac{x^{6}}{90}-\\tfrac{x^{7}}{630}$ has degree $7$. Thus $m=7$ suffices. It is minimal because any polynomial that is $C^{8}$ must already match through $j=7$, and $L^{(7)}(0)=-8\\ne0$ forces a nonzero $x^{7}$ term, so $\\deg p\\ge7$; degree $6$ is impossible. \\[\\boxed{\\text{(a) }k=4,\\quad p=x+x^{2}+\\tfrac{x^{3}}{3};\\qquad\\text{(b) }m=7.}\\]"
        ]
      },
      {
        "name": "Series-product expansion of $e^{x}\\sin x$ and direct coefficient bookkeeping",
        "steps": [
          "Build $L$'s Maclaurin series from the Cauchy product. Multiply $e^{x}=\\sum_{a\\ge0}\\tfrac{x^{a}}{a!}$ by $\\sin x=\\sum_{b\\ge0}\\tfrac{(-1)^{b}x^{2b+1}}{(2b+1)!}$. The coefficient of $x^{n}$ is $c_n=\\sum_{2b+1\\le n}\\dfrac{(-1)^{b}}{(n-2b-1)!\\,(2b+1)!}$, and then $L^{(n)}(0)=n!\\,c_n$. Computing: $c_1=1,\\ c_2=1,\\ c_3=\\tfrac13,\\ c_4=0,\\ c_5=-\\tfrac1{30},\\ c_6=-\\tfrac1{90},\\ c_7=-\\tfrac1{630},\\ c_8=0$, giving $L^{(n)}(0)=0,1,2,2,0,-4,-8,-8,0,\\dots$ for $n=0,1,\\dots,8$. The two zeros, at $n=4$ and $n=8$, are the structural feature; one checks the convolution sum genuinely cancels there.",
          "Part (a). For $\\deg p\\le3$, being $C^{k}$ means $p$ shares $L$'s first $k+1$ coefficients. Matching $c_0,\\dots,c_3$ fixes $p=x+x^{2}+\\tfrac{x^{3}}{3}$. The next coefficient of $L$ is $c_4=0$, which a degree-$3$ polynomial also has (its $x^{4}$ coefficient is $0$), so the $j=4$ match is free and $f\\in C^{4}$. The following coefficient $c_5=-\\tfrac1{30}\\ne0$ cannot be reproduced by a degree-$3$ polynomial (whose $x^{5}$ coefficient is $0$), so $C^{5}$ is impossible. Hence $k=4$.",
          "Part (b). For $C^{8}$, $p$ must share $c_0,\\dots,c_8$ with $L$. Since $c_8=0$ the matched polynomial $\\sum_{j=0}^{8}c_j x^{j}$ has no $x^{8}$ term but does have the nonzero term $c_7 x^{7}=-\\tfrac{x^{7}}{630}$, so its degree is exactly $7$. No lower degree works: matching $c_7\\ne0$ already demands an $x^{7}$ term, forcing $\\deg p\\ge7$.",
          "Conclude. The smallest viable degrees track the last nonzero coefficient at or below the target order; the vanishing of $c_4,c_8$ is what makes (a) give $C^{4}$ rather than $C^{3}$ and makes (b) give $m=7$ rather than $8$. \\[\\boxed{\\text{(a) }k=4;\\qquad\\text{(b) }m=7.}\\]"
        ]
      },
      {
        "name": "Jump-of-the-derivative viewpoint (continuity of $f^{(j)}$ across the seam)",
        "steps": [
          "Reframe smoothness as continuity of each derivative at the seam $x=0$. On each open side $f$ is $C^{\\infty}$, so the only possible failure of $f\\in C^{k}$ is a discontinuity of some $f^{(j)}$, $j\\le k$, at $0$. Define the jump $J_j:=p^{(j)}(0)-L^{(j)}(0)$ (right value minus left value). Inductively, $f^{(j)}$ exists and is continuous at $0$ iff $f^{(j-1)}$ is and $J_j=0$; so $f\\in C^{k}$ iff $J_0=J_1=\\dots=J_k=0$. The smallest index with $J_j\\ne0$ is where smoothness stops.",
          "Compute the jumps for the degree-$\\le3$ optimum. Forcing $J_0=J_1=J_2=J_3=0$ pins $p=x+x^{2}+\\tfrac{x^{3}}{3}$ (the only degree-$\\le3$ choice killing the first four jumps). With $L^{(n)}(0)=2^{n/2}\\sin\\frac{n\\pi}{4}$: $J_4=p^{(4)}(0)-L^{(4)}(0)=0-0=0$, so $f^{(4)}$ is continuous and $f\\in C^{4}$; but $J_5=0-(-4)=4\\ne0$, a genuine jump of $4$ in the fifth derivative across the seam. Thus the fifth derivative is discontinuous at $0$ and $f\\notin C^{5}$: the answer to (a) is $k=4$.",
          "Part (b) via the same jumps. To force $J_0=\\dots=J_8=0$ the polynomial must reproduce $L^{(j)}(0)$ for $j\\le8$. The constraint $J_7=0$ needs $p^{(7)}(0)=L^{(7)}(0)=-8\\ne0$, so $p$ has a nonzero $x^{7}$ term and $\\deg p\\ge7$; the constraint $J_8=0$ needs $p^{(8)}(0)=L^{(8)}(0)=0$, which is met without any $x^{8}$ term. Hence the minimal polynomial $p=x+x^{2}+\\tfrac{x^{3}}{3}-\\tfrac{x^{5}}{30}-\\tfrac{x^{6}}{90}-\\tfrac{x^{7}}{630}$ has degree exactly $7$, and $J_9=0-L^{(9)}(0)=-16\\ne0$ shows it is no better than $C^{8}$.",
          "Read off both answers. The first nonvanishing jump after the matched block decides the ceiling, and the seam $x=0$ is where any failure lives. \\[\\boxed{\\text{(a) }k=4;\\qquad\\text{(b) }m=7.}\\]"
        ]
      }
    ],
    "remark": "Insight: gluing a polynomial onto a transcendental piece turns a smoothness question into a Taylor-coefficient race, and the winner is set by the FIRST nonzero higher derivative of the transcendental side, not by a raw count of the polynomial's free coefficients. The whole problem turns on reading $e^{x}\\sin x=\\operatorname{Im}e^{(1+i)x}$, whence $L^{(n)}(0)=2^{n/2}\\sin\\frac{n\\pi}{4}$ vanishes exactly on multiples of $4$. Those zeros are 'free' matching conditions: a degree-$3$ glue, which a dimension count would cap at $C^{3}$, is actually $C^{4}$ because $L^{(4)}(0)=0$, and the same vanishing at order $8$ lets a degree-$7$ polynomial (not $8$) reach $C^{8}$. The general law is clean and worth memorizing: with a transcendental left piece, the smoothest degree-$\\le m$ glue is $C^{k}$ where $k$ is one less than the smallest index $>m$ at which the left piece's derivative is nonzero; and the minimal degree for $C^{k}$ is the largest index $\\le k$ at which it is nonzero. The finite degree of a polynomial caps how many derivatives it can carry, but a transcendental function's own missing derivatives can hand you extra orders for nothing — degree obstruction and derivative vanishing are two sides of the same coin, and confusing 'number of coefficients' with 'order of agreement' is the error this problem is built to punish."
  },
  {
    "theme": "smoothness",
    "themeLabel": "Higher Derivatives & Smoothness",
    "title": "Gluing an Exponential to a Polynomial",
    "difficulty": 5,
    "task": "Find a,b,c and the largest k",
    "tags": [
      "piecewise",
      "c-k-class",
      "taylor-matching",
      "jump-derivative"
    ],
    "statement": "Define\n\\[\nf(x)=\\begin{cases} e^{x}, & x\\le 0,\\\\[1mm] 1+x+a\\,x^{2}+b\\,x^{3}+c\\,x^{4}, & x>0.\\end{cases}\n\\]\nFind $a,b,c$ so that $f\\in C^{4}(\\mathbb{R})$. With those values, determine the largest $k$ for which $f\\in C^{k}(\\mathbb{R})$.",
    "answer": "$a=\\tfrac12,\\ b=\\tfrac16,\\ c=\\tfrac1{24}$. With these values $f$ is exactly $C^{4}$ but not $C^{5}$: the only point in question is $x=0$, where for $0\\le n\\le 4$ both sides agree (each one-sided derivative equals $1$), while at order $5$ the left derivative is $e^{0}=1$ and the right derivative of the quartic is $0$ — a forced jump. Hence the largest $k$ is $\\boxed{4}$.",
    "trap": "After matching enough derivatives to reach $C^{4}$, assuming you can push all the way to $C^{\\infty}$ by ``choosing even more coefficients.'' But the right piece is a fixed degree-$4$ polynomial, so $f^{(5)}\\equiv 0$ on $x>0$ while $f^{(5)}=e^{x}\\to 1$ as $x\\to0^{-}$. No choice of $a,b,c$ can repair this jump, because none of them controls anything beyond the $x^{4}$ term.",
    "solutions": [
      {
        "name": "Match Taylor coefficients at 0",
        "steps": [
          "Away from $0$ each piece is smooth, so the only place smoothness can fail is $x=0$. There $f\\in C^{k}$ iff $f^{(n)}(0^{-})=f^{(n)}(0^{+})$ for all $0\\le n\\le k$.",
          "Left piece: $f^{(n)}(0^{-})=\\dfrac{d^{n}}{dx^{n}}e^{x}\\big|_{0}=e^{0}=1$ for every $n\\ge 0$.",
          "Right piece $p(x)=1+x+ax^{2}+bx^{3}+cx^{4}$ has $p(0)=1$, $p'(0)=1$, $p''(0)=2a$, $p'''(0)=6b$, $p^{(4)}(0)=24c$, $p^{(5)}(0)=0$.",
          "Orders $0,1$ already match ($1=1$). Order $2$: $1=2a\\Rightarrow a=\\tfrac12$. Order $3$: $1=6b\\Rightarrow b=\\tfrac16$. Order $4$: $1=24c\\Rightarrow c=\\tfrac1{24}$. So $f\\in C^{4}$.",
          "Order $5$: left $=1$, right $=p^{(5)}(0)=0$. They differ, so $f\\notin C^{5}$. Largest $\\boxed{k=4}$."
        ]
      },
      {
        "name": "Degree obstruction argument",
        "steps": [
          "For $f\\in C^{m}$ at $0$ the right polynomial must reproduce the order-$0$ through order-$m$ Maclaurin data of $e^{x}$, namely the coefficient $\\tfrac1{j!}$ for each $0\\le j\\le m$.",
          "The right side $1+x+ax^{2}+bx^{3}+cx^{4}$ has its $x^{0},x^{1}$ coefficients fixed at $1=\\tfrac1{0!}=\\tfrac1{1!}$ (already correct) and $a,b,c$ adjustable for $x^{2},x^{3},x^{4}$. Matching $\\tfrac1{2!},\\tfrac1{3!},\\tfrac1{4!}$ forces $a=\\tfrac12,\\ b=\\tfrac16,\\ c=\\tfrac1{24}$, giving $f\\in C^{4}$.",
          "A degree-$4$ polynomial has $p^{(5)}\\equiv 0$, whereas $e^{x}$ has $(e^{x})^{(5)}=e^{x}$, which at $0$ equals $1\\ne0$.",
          "Thus no admissible $a,b,c$ can produce $C^{5}$; the construction tops out at $\\boxed{C^{4}}$ with the listed coefficients."
        ]
      }
    ],
    "remark": "Insight: gluing along Taylor coefficients buys one order of smoothness per matched coefficient, but a polynomial of finite degree has a hard ceiling. Its derivatives eventually vanish identically, while a transcendental neighbour like $e^{x}$ keeps a nonzero derivative at every order. The first unmatched order ($5$ here) is exactly $1+\\deg$ of the polynomial piece, where the jump becomes unavoidable."
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
    "theme": "tangent",
    "themeLabel": "Tangents, Normals & Curves",
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
    "themeLabel": "Tangents, Normals & Curves",
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
    "themeLabel": "Tangents, Normals & Curves",
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
    "themeLabel": "Tangents, Normals & Curves",
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
    "themeLabel": "Tangents, Normals & Curves",
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
    "themeLabel": "Tangents, Normals & Curves",
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
    "themeLabel": "Tangents, Normals & Curves",
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
    "themeLabel": "Tangents, Normals & Curves",
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
    "themeLabel": "Tangents, Normals & Curves",
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
    "themeLabel": "Tangents, Normals & Curves",
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
    "title": "The Symmetric Slope of a Power Tower",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "symmetric derivative",
      "logarithmic differentiation",
      "x^x",
      "two-sided quotient"
    ],
    "statement": "For a function $g$ the symmetric derivative at $a$ is $\\displaystyle g^{s}(a)=\\lim_{h\\to 0}\\frac{g(a+h)-g(a-h)}{2h}$. Compute the symmetric derivative of $g(x)=x^{x}$ (for $x>0$) at $a=1$, i.e. evaluate \\[ \\lim_{h\\to 0}\\frac{(1+h)^{1+h}-(1-h)^{1-h}}{2h}. \\]",
    "answer": "$1$",
    "trap": "Trying to expand $(1\\pm h)^{1\\pm h}$ by the binomial theorem treats the exponent as fixed — but the exponent itself varies, so binomial expansion is invalid. The variable exponent demands logarithmic handling (write $x^x=e^{x\\ln x}$).",
    "solutions": [
      {
        "name": "Symmetric derivative equals ordinary derivative (g is differentiable)",
        "steps": [
          "$g(x)=x^x=e^{x\\ln x}$ is differentiable on $(0,\\infty)$, so $g^{s}(1)=g'(1)$.",
          "$g'(x)=x^x(\\ln x+1)$, hence $g'(1)=1^1(\\ln1+1)=1$.",
          "Therefore the limit is $\\boxed{1}$."
        ]
      },
      {
        "name": "Direct two-sided linearisation",
        "steps": [
          "Let $\\phi(h)=(1+h)^{1+h}=e^{(1+h)\\ln(1+h)}$. Then $(1+h)\\ln(1+h)=h+\\tfrac{h^2}{2}+O(h^3)$, so $\\phi(h)=1+h+h^2+O(h^3)$.",
          "Replacing $h\\to-h$, $(1-h)^{1-h}=1-h+h^2+O(h^3)$ (the even powers match, the odd power flips sign).",
          "Then $\\dfrac{\\phi(h)-\\phi(-h)}{2h}=\\dfrac{2h+O(h^3)}{2h}\\to\\boxed{1}$."
        ]
      }
    ],
    "remark": "Insight: the symmetric quotient cancels even-order terms automatically, so for a genuinely differentiable $g$ it just returns $g'(a)$ — its real power appears at corners (e.g. $|x|$), where the symmetric derivative exists even when the ordinary one does not."
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
    "trap": "The reflex is to write $g(x)=\\arctan(1+x)$, note $g'(x)=\\dfrac{1}{1+(1+x)^2}$, evaluate $g'(L)=\\dfrac{1}{1+(1+L)^2}<1$ at the fixed point, and declare \"$g$ is a contraction, so $x_n\\to L$.\" This is circular and incomplete on two counts. First, it invokes $L$ — the very object whose existence and attainment is being asked — to certify the convergence that is supposed to PRODUCE $L$; a slope computed at an unknown point proves nothing about the orbit launched from $x_0=0$. Second, $g'(L)<1$ is only a LOCAL statement at one point: Banach's principle needs a single constant $k<1$ bounding $|g'|$ uniformly across the whole region the iterates actually visit, and that uniform bound can only be obtained by the Mean Value Theorem on a concrete invariant interval — never by reading off the slope at a single mystery point. A companion slip is to guess $L=\\tfrac{\\pi}{4}$ because $x_1=\\arctan 1=\\tfrac{\\pi}{4}$ and the terms \"settle quickly\"; but $\\tan\\tfrac{\\pi}{4}=1\\ne 1+\\tfrac{\\pi}{4}$, so $\\tfrac{\\pi}{4}$ is not a fixed point at all ($L\\approx1.132$ lies well above it).",
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
    "remark": "The hybrid lesson is that a contraction is certified by the Mean Value Theorem on a concrete invariant interval, never by the slope at the (unknown) fixed point. Here $1+x\\ge1$ on the invariant half-line $[0,\\infty)$ collapses $g'(x)=\\tfrac{1}{1+(1+x)^2}$ below $\\tfrac12$ uniformly, and that single honest constant powers both the geometric error bound $|x_n-L|\\le(\\tfrac12)^nL$ and the Cauchy estimate — fusing MVT, the Banach contraction idea, and monotone convergence into one machine. The location of $L$ is then settled with zero arithmetic on $L$ itself: since $h(x)=g(x)-x$ is strictly decreasing, evaluating it at the clean points $1$ and $\\tfrac65$ (where $\\tan1<2$ and $\\tan\\tfrac65>\\tfrac{11}{5}$ are all you need) traps the root in $(1,\\tfrac65)$. A fixed point you can bound but never name is a recurring Putnam motif; the discipline is to extract structure (monotonicity, a uniform slope bound) instead of chasing a decimal."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "One Point of Smoothness, Carried Everywhere",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "functional-equation",
      "quadratic-fe",
      "differentiability-propagation",
      "biadditive",
      "regularity-bootstrap",
      "no-continuity-assumed"
    ],
    "statement": "A function $f:\\mathbb{R}\\to\\mathbb{R}$ satisfies the parallelogram (Jensen quadratic) functional equation \\[ f(x+y)+f(x-y)=2f(x)+2f(y)\\qquad\\text{for all }x,y\\in\\mathbb{R}. \\] No continuity is assumed anywhere. It is given only that $f$ is differentiable at the single point $x=3$, with $f'(3)=12$. Determine $f$ completely on $\\mathbb{R}$, and prove that the one-point hypothesis already forces $f$ to be differentiable at every real number.",
    "answer": "\\[\\boxed{\\,f(x)=2x^{2}\\,}\\]",
    "trap": "The seductive shortcut is to treat the equation as if it already guaranteed a smooth solution: assume $f$ is continuous (or even twice differentiable), differentiate $f(x+y)+f(x-y)=2f(x)+2f(y)$ twice in $y$ to get $f''(x+y)+f''(x-y)=4$, set $y=0$ to obtain $f''(x)=2c$, integrate to $f(x)=cx^{2}$, and fix $c$ from $f'(3)=12$. This reaches the right number for the WRONG reason. Continuity is NOT given, and the equation by itself does NOT supply it: with a Hamel basis one builds wild solutions $f(a+b\\sqrt2)=a^{2}+5b^{2}$ on $\\mathbb{Q}+\\mathbb{Q}\\sqrt2$ that obey the equation everywhere yet are nowhere continuous, hence nowhere differentiable and not of the form $cx^{2}$. The whole content of the problem is the bootstrap that has been skipped: a single point of differentiability must first be propagated into global regularity before any derivative may be taken. Differentiating an equation whose solution might be pathological is illegitimate; the differentiability has to be earned, not assumed.",
    "solutions": [
      {
        "name": "Algebraic skeleton, then the add/subtract bootstrap",
        "steps": [
          "First extract what the equation forces with no regularity at all. Setting $x=y=0$ gives $2f(0)=4f(0)$, so $f(0)=0$. Setting $x=0$ gives $f(y)+f(-y)=2f(y)$, so $f$ is even. Setting $y=x$ gives $f(2x)=4f(x)$, and inductively $f(nx)=n^{2}f(x)$ for integers $n$, whence $f(qx)=q^{2}f(x)$ for every rational $q$. Define the polarization $B(u,v)=\\tfrac14\\big(f(u+v)-f(u-v)\\big)$; then $B(u,u)=\\tfrac14\\big(f(2u)-f(0)\\big)=f(u)$, $B$ is symmetric, and the functional equation makes $B$ additive in each slot. From biadditivity, $f(a+h)-f(a)=B(a+h,a+h)-B(a,a)=2B(a,h)+B(h,h)=2B(a,h)+f(h)$, so for every $a$ and $h\\ne0$ \\[ \\frac{f(a+h)-f(a)}{h}=\\frac{2B(a,h)}{h}+\\frac{f(h)}{h}.\\tag{$\\ast$} \\]",
          "Apply $(\\ast)$ at $a=3$ where the derivative exists, calling $L=f'(3)$. Since $f$ is even, $B(3,-h)=-B(3,h)$ and $f(-h)=f(h)$, so replacing $h$ by $-h$ in $(\\ast)$ gives $\\dfrac{f(3-h)-f(3)}{-h}=\\dfrac{2B(3,h)}{h}-\\dfrac{f(h)}{h}$. Adding the two and letting $h\\to0$: the left side tends to $L+L=2L$, forcing $\\dfrac{2B(3,h)}{h}\\to L$. Subtracting them gives $\\dfrac{f(3+h)-f(3)}{h}-\\dfrac{f(3-h)-f(3)}{-h}=\\dfrac{2f(h)}{h}$; the left side tends to $L-L=0$, so $\\boxed{\\dfrac{f(h)}{h}\\to0}$. Thus $f$ is already differentiable at $0$ with $f'(0)=0$, and in particular $f$ is continuous at $0$.",
          "Now the bootstrap closes. The map $\\varphi(h)=B(3,h)$ is additive, and from step 2 it has a finite derivative at $0$: $\\varphi(h)/h\\to L/2$. An additive function with $\\varphi(h)/h\\to k$ is linear, since $\\varphi(t)/t=\\varphi(t/n)/(t/n)\\to k$ for each fixed $t$ (using $\\varphi(t/n)=\\varphi(t)/n$), giving $\\varphi(t)=kt$ for all $t$. So $B(3,h)=\\tfrac{L}{2}h$. Continuity at $0$ upgrades the rational identity $f(q)=f(1)q^{2}$ to all reals: for any $x$, choosing rationals $q_n\\to x$ and using $f(x)-f(q_n)=2B(x,x-q_n)+f(x-q_n)$ with both terms $\\to0$ (each $B(x,\\cdot)$ is controlled by $f$ near $0$, which now $\\to0$), yields $f(x)=f(1)x^{2}=:cx^{2}$ for a constant $c$.",
          "With $f(x)=cx^{2}$ we have $f'(x)=2cx$ everywhere, so $f$ is differentiable at every real number — the one-point hypothesis has been carried to all of $\\mathbb{R}$. The datum $f'(3)=6c=12$ gives $c=2$, hence $f(x)=2x^{2}$. As a check, $f'(0)=0$ matches step 2 and $f$ is even as required, so $\\boxed{f(x)=2x^{2}}$."
        ]
      },
      {
        "name": "Reduce to Cauchy on the second-difference, then regularize",
        "steps": [
          "As above, $f(0)=0$, $f$ is even, and $g(x):=f(\\sqrt{x})$ for $x\\ge0$ turns the equation into additivity in disguise; more directly, the polarization $B(u,v)=\\tfrac14(f(u+v)-f(u-v))$ is symmetric and biadditive with $B(u,u)=f(u)$. Biadditivity means $B(\\cdot,v)$ is a Cauchy-additive function for each fixed $v$. The functional equation alone therefore only pins $f$ down on the rationals: $f(q)=q^{2}f(1)$. The leap to all reals requires one drop of regularity.",
          "Differentiability at $3$ supplies that drop. Using $(\\ast)$ from Solution 1 at $a=3$ and the parity of $f$, the add/subtract computation gives $f(h)/h\\to0$, i.e. $f$ is continuous at $0$ (since $f(h)=h\\cdot(f(h)/h)\\to0=f(0)$). Continuity at the single point $0$ propagates to continuity everywhere: for fixed $a$, $f(a+h)-f(a)=2B(a,h)+f(h)$, and as $h\\to0$ both $f(h)\\to0$ and $2B(a,h)=\\tfrac12\\big(f(a+h)-f(a-h)\\big)$, whose components are squeezed by the now-established local control of $f$ near $a$; a standard Jensen-quadratic argument then gives $\\lim_{h\\to0}f(a+h)=f(a)$ for every $a$.",
          "A continuous solution of the quadratic functional equation is necessarily $f(x)=cx^{2}$: continuity lets the rational identity $f(q)=q^{2}f(1)$ pass to the limit, so $f(x)=x^{2}f(1)$ for all real $x$, with $c=f(1)$. (Equivalently, once continuity is in hand the formal double-differentiation in the trap becomes legitimate and yields the same $cx^{2}$.) In particular $f$ is a polynomial, hence differentiable on all of $\\mathbb{R}$, which is exactly the global propagation claimed.",
          "Finally impose the data: $f'(x)=2cx$ and $f'(3)=6c=12\\Rightarrow c=2$. Therefore $\\boxed{f(x)=2x^{2}}$, even, with $f'(0)=0$ and $f'(3)=12$, all consistent."
        ]
      },
      {
        "name": "Dyadic self-similarity scaling",
        "steps": [
          "From $f(2x)=4f(x)$ (the $y=x$ case) comes the exact scaling $f(2^{-n}x)=4^{-n}f(x)$ for every integer $n\\ge0$ and every $x$. This is the self-similarity that lets a single differentiability hypothesis be magnified down to the origin and back out. Note again $f(0)=0$ and $f$ even, forced with no continuity.",
          "Test differentiability at $0$ directly through the scaling. For $x\\ne0$, $\\dfrac{f(2^{-n}x)-f(0)}{2^{-n}x}=\\dfrac{4^{-n}f(x)}{2^{-n}x}=2^{-n}\\,\\dfrac{f(x)}{x}\\xrightarrow[n\\to\\infty]{}0.$ Combined with the add/subtract identity at the given point (Solution 1, step 2) which yields $f(h)/h\\to0$ along the full continuum, $f$ is differentiable at $0$ with $f'(0)=0$ and continuous there. Continuity at one point makes the quadratic solution rigid: $f(x)=cx^{2}$ with $c=f(1)$, so differentiability holds at every point, not merely along the dyadic sequence.",
          "Pin $c$ by self-similarity around the data point. Differentiability at $3$ with $f'(3)=12$ and $f(x)=cx^{2}$ give $f'(3)=2c\\cdot3=6c=12$, so $c=2$. The dyadic scaling is then visibly consistent: $f(2^{-n}\\cdot3)=4^{-n}f(3)=4^{-n}\\cdot18$, matching $2\\,(2^{-n}\\cdot3)^{2}=18\\cdot4^{-n}$.",
          "Hence the unique function meeting all hypotheses is $\\boxed{f(x)=2x^{2}}$, differentiable everywhere with $f'(x)=4x$, recovering $f'(3)=12$ and $f'(0)=0$."
        ]
      }
    ],
    "remark": "The equation is the quadratic (parallelogram) functional equation, whose general solution is $f(x)=B(x,x)$ for a symmetric biadditive $B$ — and without a regularity hypothesis those $B$ can be built from a Hamel basis into nowhere-continuous monsters. So the equation alone does NOT deliver $cx^{2}$; the trap's double-differentiation silently assumes the very smoothness to be proved. The real theorem is a regularity bootstrap: differentiability at one point forces $f(h)/h\\to0$ (continuity at $0$), one point of continuity rigidifies a Jensen-quadratic function into a genuine $cx^{2}$, and the data $f'(3)=12$ then fixes $c=2$. The moral for the capstone chapter: in functional-equation problems you must first earn continuity/differentiability from the structure before you are allowed to differentiate the equation."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Integral Whose Second Derivative Hides at the Origin",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "ftc",
      "darboux",
      "second-derivative",
      "essential-discontinuity",
      "squeeze",
      "c1-not-c2"
    ],
    "statement": "Let \\[ f(t)=t^{2}\\cos\\frac1t\\quad(t\\ne0),\\qquad f(0)=0, \\] and define $F:\\mathbb{R}\\to\\mathbb{R}$ by $F(x)=\\displaystyle\\int_{0}^{x}f(t)\\,dt$. Establish that $F$ is continuously differentiable on all of $\\mathbb{R}$, that its derivative $F'$ is non-monotone on every interval $(0,\\delta)$, and then decide -- strictly from the limit definition -- whether $F''(0)$ exists; if it does, give its value. (You will find, for $x\\ne0$, that $F''(x)$ exists yet $\\displaystyle\\lim_{x\\to0}F''(x)$ does not.)",
    "answer": "\\[\\boxed{\\,F''(0)=0\\ \\text{exists, though } F\\notin C^{2}\\,}\\]",
    "trap": "After computing $F'(x)=f(x)=x^{2}\\cos\\frac1x$ (legitimate, by FTC) and differentiating once more for $x\\ne0$, one gets $F''(x)=2x\\cos\\frac1x+\\sin\\frac1x$. The reflex is to take $x\\to0$: the $2x\\cos\\frac1x$ piece dies but $\\sin\\frac1x$ oscillates between $\\pm1$, so $\\lim_{x\\to0}F''(x)$ does not exist -- and the student concludes \"therefore $F''(0)$ does not exist either.\" This is a misuse of the derivative-limit theorem in reverse. That theorem only runs one way: IF $\\lim_{x\\to0}F''(x)=L$ exists THEN $F''(0)=L$. Its failure tells you nothing -- a function can be twice differentiable at a point while its second derivative is wildly discontinuous there. The honest test is the limit definition $\\lim_{h\\to0}\\frac{F'(h)-F'(0)}{h}=\\lim_{h\\to0}\\frac{f(h)}{h}=\\lim_{h\\to0}h\\cos\\frac1h=0$, which exists. So $F''(0)=0$, even though $F\\notin C^{2}$. A second, subtler error is to deny that $F''$ can be so discontinuous at all: but $F''$ is a derivative (of $F'$), hence Darboux, and a derivative is permitted an essential (oscillatory) discontinuity -- it is only forbidden a removable or jump one.",
    "solutions": [
      {
        "name": "FTC to get $F'$, then the limit definition with a squeeze",
        "steps": [
          "The integrand $f$ is continuous everywhere: for $t\\ne0$, $\\bigl|f(t)\\bigr|=\\bigl|t^{2}\\cos\\frac1t\\bigr|\\le t^{2}\\to0=f(0)$, so $f$ is continuous at $0$ as well. By the Fundamental Theorem of Calculus, $F(x)=\\int_{0}^{x}f$ is differentiable on $\\mathbb{R}$ with $F'(x)=f(x)$ for every $x$, and since $F'=f$ is continuous, $F\\in C^{1}(\\mathbb{R})$.",
          "Non-monotonicity of $F'=f$: for $x\\ne0$, $F''(x)=f'(x)=2x\\cos\\frac1x+\\sin\\frac1x$. On the points $x_k=\\frac{1}{(2k+\\frac12)\\pi}$ and $y_k=\\frac{1}{(2k+\\frac32)\\pi}$ (both $\\to0^{+}$) the dominant term gives $f'(x_k)\\to+1$ and $f'(y_k)\\to-1$, so $f'$ changes sign infinitely often in every $(0,\\delta)$; hence $F'$ is non-monotone there.",
          "Now test $F''(0)$ from the definition, using $F'(0)=f(0)=0$: \\[ \\frac{F'(h)-F'(0)}{h}=\\frac{f(h)}{h}=\\frac{h^{2}\\cos\\frac1h}{h}=h\\cos\\frac1h. \\] Since $\\bigl|h\\cos\\frac1h\\bigr|\\le|h|\\to0$, the squeeze theorem forces the limit to be $0$.",
          "Therefore $F''(0)=0$ exists. Combined with $\\lim_{x\\to0}F''(x)$ failing to exist (Step 2's $\\sin\\frac1x$), this shows $F$ is twice differentiable at $0$ yet $F\\notin C^{2}$: $\\boxed{F''(0)=0,\\ F\\notin C^{2}}$."
        ]
      },
      {
        "name": "Order-of-vanishing of $F$ itself (no second differentiation)",
        "steps": [
          "Avoid differentiating $f$ at all. From FTC, $F(0)=0$ and $F'(0)=f(0)=0$. To find $F''(0)$ it suffices to control $F(h)$ to second order. Bound the integral directly: for $h>0$, $\\bigl|F(h)\\bigr|=\\bigl|\\int_{0}^{h}t^{2}\\cos\\frac1t\\,dt\\bigr|\\le\\int_{0}^{h}t^{2}\\,dt=\\frac{h^{3}}{3}$, and the same bound holds for $h<0$ by symmetry, so $\\bigl|F(h)\\bigr|\\le\\frac{|h|^{3}}{3}$.",
          "Hence $\\dfrac{F(h)-F(0)-F'(0)h}{h^{2}}=\\dfrac{F(h)}{h^{2}}$ satisfies $\\Bigl|\\dfrac{F(h)}{h^{2}}\\Bigr|\\le\\dfrac{|h|}{3}\\to0$. So $F(h)=o(h^{2})$, i.e. $F$ has a vanishing second-order Taylor coefficient at $0$.",
          "Translate this back to $F''(0)$ honestly. Because $F\\in C^{1}$ with $F'(0)=0$, the second-derivative quotient equals $\\frac{F'(h)-F'(0)}{h}=\\frac{f(h)}{h}=h\\cos\\frac1h$, whose limit is $0$ by Step 1-style squeezing; the $F(h)=o(h^2)$ estimate is the consistency check that no nonzero quadratic coefficient is hiding. (Equivalently, since $f$ is odd, $F$ is even, so the symmetric second difference $\\frac{F(h)-2F(0)+F(-h)}{h^{2}}\\equiv0$ for all $h$ -- it returns the same value $0$.)",
          "Both readings agree on the quadratic coefficient $\\tfrac12 F''(0)$ being $0$, so $\\boxed{F''(0)=0}$, while the discontinuity of $F''$ away from $0$ keeps $F\\notin C^{2}$."
        ]
      },
      {
        "name": "Darboux + the derivative-limit theorem, dismantling the trap",
        "steps": [
          "$F'=f$ is the derivative of $F$, and for $x\\ne0$ it is itself differentiable with $F''(x)=2x\\cos\\frac1x+\\sin\\frac1x$. As a derivative of $F'$, the function $F''$ (wherever defined) must satisfy the Intermediate Value Property (Darboux). A Darboux function may carry an essential, oscillatory discontinuity -- which is exactly what $\\sin\\frac1x$ supplies -- but it can never have a removable or jump discontinuity. So nothing about $\\lim_{x\\to0}F''(x)$ failing to exist obstructs $F''(0)$ from existing.",
          "Invoke the derivative-limit (Cauchy) theorem in its only valid direction: if $F'$ is continuous at $0$ and $\\lim_{x\\to0}F''(x)=L$ exists, then $F''(0)=L$. Here the hypothesis fails ($\\lim_{x\\to0}F''(x)$ does not exist because of $\\sin\\frac1x$), so the theorem is simply silent -- it neither confirms nor denies $F''(0)$. The trap conflates 'theorem inapplicable' with 'derivative nonexistent.'",
          "Settle the matter the only legitimate way, by definition: $\\dfrac{F'(h)-F'(0)}{h}=\\dfrac{h^{2}\\cos\\frac1h}{h}=h\\cos\\frac1h\\to0$. The limit exists, so $F''(0)=0$ regardless of how badly $F''$ behaves nearby.",
          "Thus $F$ is twice differentiable at $0$ with $F''(0)=0$, yet $F''$ has an essential discontinuity at $0$ (consistent with Darboux), so $F\\notin C^{2}$: $\\boxed{F''(0)=0}$."
        ]
      }
    ],
    "remark": "Three ideas are fused at one point. FTC promotes the merely-continuous integrand $f$ to a genuine derivative $F'=f$, so $F$ is honestly $C^{1}$; Darboux then governs the next layer -- $F''$, being a derivative of $F'$, is allowed the essential discontinuity $\\sin\\frac1x$ but forbidden a jump; and the second-order question at $0$ is decided by nothing but the limit definition, giving $F''(0)=0$. The whole problem is a trap on the derivative-limit theorem: students remember 'if $\\lim F''$ exists it equals $F''(0)$' and silently run it backwards into 'if $\\lim F''$ fails, $F''(0)$ fails.' It does not. $C^{2}$ requires the second derivative to exist AND be continuous; here it exists at $0$ and is discontinuous there, the cleanest possible separation of 'twice differentiable at a point' from 'belongs to $C^{2}$.'"
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
      "taylor-remainder",
      "alternating-bounds",
      "term-by-term-integration",
      "fresnel-integral",
      "numerical-bracketing",
      "monotone-integration"
    ],
    "statement": "The integral $\\displaystyle I=\\int_{0}^{1}\\sin\\!\\bigl(x^{2}\\bigr)\\,dx$ has no elementary antiderivative. The task is to pin its value rigorously by an inequality ladder, not by a calculator.\n\n(a) Prove, for every real $t\\ge 0$, the alternating bounds carried one term further than the crude ones: \\[ 1-\\frac{t^{2}}{2}\\;\\le\\;\\cos t\\;\\le\\;1-\\frac{t^{2}}{2}+\\frac{t^{4}}{24}, \\qquad t-\\frac{t^{3}}{6}\\;\\le\\;\\sin t\\;\\le\\;t-\\frac{t^{3}}{6}+\\frac{t^{5}}{120}. \\]\n\n(b) Using ONLY these inequalities (with the substitution $t=x^{2}$) and the legitimacy of integrating an inequality between continuous functions over $[0,1]$, produce explicit rational numbers $L$ and $U$ with \\[ L\\;\\le\\;I\\;\\le\\;U,\\qquad U-L<\\frac{1}{600}, \\] and state the resulting midpoint estimate of $I$. Justify why the cruder one-sided bound $\\sin s\\le s$ is NOT enough to reach the width $\\tfrac1{600}$, so the extra term is essential.",
    "answer": "\\[\\boxed{\\dfrac{13}{42}\\le I\\le \\dfrac{2867}{9240},\\quad U-L=\\dfrac{1}{1320}}\\]",
    "trap": "The seductive shortcut is to bracket $\\sin s$ between the FIRST nonzero term on one side and the two-term polynomial on the other: from $s-\\tfrac{s^{3}}6\\le\\sin s\\le s$ one gets, after $s=x^{2}$ and integrating, $\\tfrac{13}{42}\\le I\\le\\tfrac13$. That is a correct sandwich, but its width is $\\tfrac13-\\tfrac{13}{42}=\\tfrac1{42}\\approx0.0238$, more than fourteen times too wide to claim $\\tfrac1{600}$. A student who reports 'I bracketed it, done' has missed that the PROBLEM specifies a target precision and that precision dictates how many alternating terms you must keep: the upper bound must be carried to the same order as the lower one ($\\sin s\\le s-\\tfrac{s^{3}}6+\\tfrac{s^{5}}{120}$), which is exactly the 'one more order' of part (a). A second, deadlier trap is to integrate the bounds term by term WITHOUT justifying it -- treating the Maclaurin series of $\\sin(x^{2})$ as if convergence automatically licensed swapping sum and integral, or worse, using the Lagrange remainder $R=\\tfrac{\\cos c}{120}s^{5}$ and asserting it is positive: $\\cos c$ has NO fixed sign, so the Lagrange form alone does not prove the upper inequality. The clean justification is the monotone integration ladder of part (a) (integrate the cosine sandwich to get the sine sandwich), which makes the bounds genuine inequalities of continuous functions on $[0,1]$, so $\\int$ preserves them. The third trap is forgetting the chain: applying the sine bounds to $x$ rather than to $s=x^{2}$ brackets $\\int_0^1\\sin x\\,dx\\approx0.4597$, the wrong integral entirely.",
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
    "remark": "The capstone fuses three threads: Taylor remainder (proved as a genuine inequality, not a series formality), term-by-term integration of an inequality (which needs only that the integral is monotone on continuous functions), and a numerical-bracketing payoff for a Fresnel-type integral that has no elementary antiderivative. The decisive insight is that the REQUIRED PRECISION dictates the ORDER you must keep: the crude alternating bound $s-\\tfrac{s^{3}}6\\le\\sin s\\le s$ is true but yields width $\\tfrac1{42}$, while carrying the upper bound 'one more order' to $s-\\tfrac{s^{3}}6+\\tfrac{s^{5}}{120}$ collapses the gap to $\\tfrac1{1320}<\\tfrac1{600}$. The cleanest proof of the bounds is the integration ladder: the cosine sandwich integrates to the sine sandwich, so both are honest inequalities of continuous functions and the integral preserves them after the chain substitution $s=x^{2}$. The trap -- invoking the Lagrange remainder $\\tfrac{\\cos c}{120}s^{5}$ and asserting its sign, or swapping sum and integral without uniform convergence -- is precisely the gap between a heuristic and a proof; closing it is the rank-defining move."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "One Tame Point Tames the Whole Line",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "functional-equation",
      "cauchy-additive",
      "differentiability-propagation",
      "regularity",
      "hamel-pathology",
      "integration"
    ],
    "statement": "A function $f:\\mathbb{R}\\to\\mathbb{R}$ satisfies \\[ f(x+y)=f(x)+f(y)+xy(x+y)\\qquad\\text{for all }x,y\\in\\mathbb{R}, \\] and is differentiable at the single point $x=0$ with $f'(0)=2$. Prove that $f$ is then differentiable on all of $\\mathbb{R}$, find $f$ explicitly, and compute the pair $\\bigl(f(3),\\ \\int_{0}^{3}f(x)\\,dx\\bigr)$. (Hypothesis is given at one point only -- decide honestly what the functional equation alone can and cannot force.)",
    "answer": "\\[\\boxed{f(x)=\\dfrac{x^{3}}{3}+2x,\\qquad f(3)=15,\\qquad \\int_{0}^{3}f=\\dfrac{63}{4}}\\]",
    "trap": "The seductive false start is to treat the functional equation as if it pins $f$ by itself: \"set $x=y$, guess $f(x)=ax^{3}+bx$, match coefficients, use $f'(0)=2$ to get $b=2$ -- done.\" The guess happens to land on the right answer, which is exactly why the reasoning is dangerous: it hides that the equation $f(x+y)=f(x)+f(y)+xy(x+y)$ does NOT have a unique solution. Writing $f(x)=\\tfrac{x^{3}}{3}+A(x)$, the equation reduces to $A(x+y)=A(x)+A(y)$ -- the Cauchy additive equation. Without any regularity, Cauchy's equation has monstrous solutions: using a Hamel basis of $\\mathbb{R}$ over $\\mathbb{Q}$ one builds additive $A$ that are everywhere discontinuous, unbounded on every interval, with graph dense in the plane. For such $A$, $f$ is not continuous anywhere, the symbol $f'(0)$ is meaningless, and 'matching coefficients' is fantasy. So the functional equation alone is genuinely under-determined. The whole problem is the realisation that differentiability at the ONE point $x=0$ is not a throwaway technical hypothesis but the entire engine: it collapses the wild additive freedom to the unique linear $A(x)=2x$ and -- crucially -- propagates to force differentiability at EVERY point. A second, subtler error is to assume continuity 'for free' to justify the cubic; nothing in the hypotheses gives continuity until the single-point derivative is exploited.",
    "solutions": [
      {
        "name": "Difference-quotient propagation: one derivative spreads to the whole line",
        "steps": [
          "First nail down $f(0)$. Put $x=y=0$ in the equation: $f(0)=2f(0)+0$, so $f(0)=0$. This is what makes the derivative at $0$ usable: $f'(0)=\\lim_{h\\to0}\\dfrac{f(h)-f(0)}{h}=\\lim_{h\\to0}\\dfrac{f(h)}{h}=2.$",
          "Now compute the difference quotient at an ARBITRARY $x$ using the functional equation with $y=h$: $f(x+h)-f(x)=f(h)+xh(x+h)$, hence \\[ \\frac{f(x+h)-f(x)}{h}=\\frac{f(h)}{h}+x(x+h). \\] As $h\\to0$ the first term tends to $f'(0)=2$ (Step 1) and the second to $x^{2}$. Therefore the limit EXISTS for every $x$: $f$ is differentiable on all of $\\mathbb{R}$, with $f'(x)=x^{2}+2.$ This is the crux -- a single tame point forces tameness everywhere, because the equation lets us transport the increment at $0$ to the increment at any $x$.",
          "Integrate $f'(x)=x^{2}+2$ to get $f(x)=\\tfrac{x^{3}}{3}+2x+C$; the constant is fixed by $f(0)=0\\Rightarrow C=0$. Thus $f(x)=\\tfrac{x^{3}}{3}+2x$, the UNIQUE solution -- the differentiability hypothesis having eliminated every pathological additive perturbation. (Check: $f(x+y)-f(x)-f(y)=\\tfrac{1}{3}[(x+y)^{3}-x^{3}-y^{3}]=xy(x+y)$, as required.)",
          "Evaluate the requested quantities. $f(3)=\\tfrac{27}{3}+6=9+6=15$. And $\\int_{0}^{3}\\!\\bigl(\\tfrac{x^{3}}{3}+2x\\bigr)dx=\\Bigl[\\tfrac{x^{4}}{12}+x^{2}\\Bigr]_{0}^{3}=\\tfrac{81}{12}+9=\\tfrac{27}{4}+9=\\tfrac{63}{4}.$ Hence $\\boxed{f(x)=\\tfrac{x^{3}}{3}+2x,\\ f(3)=15,\\ \\int_{0}^{3}f=\\tfrac{63}{4}}.$"
        ]
      },
      {
        "name": "Split off the cubic to expose the hidden Cauchy equation",
        "steps": [
          "Motivated by the cross-term $xy(x+y)=(x+y)^{3}/3-x^{3}/3-y^{3}/3$, define $A(x)=f(x)-\\tfrac{x^{3}}{3}$. Substituting $f(x)=\\tfrac{x^{3}}{3}+A(x)$ into the functional equation, every cubic term cancels and we are left with $A(x+y)=A(x)+A(y)$ for all $x,y$: $f$ solves the given equation iff $A$ is additive. This makes the under-determination explicit -- additive $A$ form an infinite-dimensional $\\mathbb{Q}$-vector space, so the equation alone cannot single out $f$.",
          "Use the one regularity hypothesis. Since $A(x)=f(x)-\\tfrac{x^{3}}{3}$ and $x^{3}/3$ is differentiable, $A$ is differentiable at $0$; from $A(0)=f(0)=0$ (Step uses $f(0)=0$ obtained by $x=y=0$) and additivity, $A'(0)=\\lim_{h\\to0}A(h)/h$ exists. For additive $A$, differentiability at a single point forces linearity: for any $x$, $\\dfrac{A(x+h)-A(x)}{h}=\\dfrac{A(h)}{h}\\to A'(0)$, so $A$ is differentiable everywhere with constant derivative $A'(0)$, i.e. $A(x)=A'(0)\\,x$. The wild Hamel-basis solutions are exactly the ones killed here.",
          "Pin the constant: $f'(0)=\\bigl(\\tfrac{x^{3}}{3}\\bigr)'\\big|_{0}+A'(0)=0+A'(0)=2$, so $A(x)=2x$ and $f(x)=\\tfrac{x^{3}}{3}+2x$. Differentiability everywhere is automatic since both pieces are smooth.",
          "Then $f(3)=9+6=15$ and $\\int_{0}^{3}f=\\bigl[\\tfrac{x^{4}}{12}+x^{2}\\bigr]_{0}^{3}=\\tfrac{81}{12}+9=\\tfrac{63}{4}.$ Therefore $\\boxed{f(x)=\\tfrac{x^{3}}{3}+2x,\\ f(3)=15,\\ \\int_{0}^{3}f=\\tfrac{63}{4}}.$"
        ]
      },
      {
        "name": "Symmetric differencing to extract a smooth ODE",
        "steps": [
          "Fix $x$ and treat the equation as a one-variable identity in $y$. With $x=y=0$ we get $f(0)=0$ as before. Form the symmetric combination by writing the equation once with $(x,h)$ and once with $(x,-h)$: $f(x+h)=f(x)+f(h)+xh(x+h)$ and $f(x-h)=f(x)+f(-h)-xh(x-h)$. Subtracting, $f(x+h)-f(x-h)=\\bigl(f(h)-f(-h)\\bigr)+xh\\bigl[(x+h)+(x-h)\\bigr]=\\bigl(f(h)-f(-h)\\bigr)+2x^{2}h.$",
          "Divide by $2h$ and let $h\\to0$. Because $f$ is differentiable at $0$ with $f(0)=0$, $\\dfrac{f(h)-f(-h)}{2h}\\to f'(0)=2$. The symmetric quotient $\\dfrac{f(x+h)-f(x-h)}{2h}$ therefore converges to $2+x^{2}$ for every $x$; combined with Solution 1's one-sided argument (or by noting the equation makes $f(x+h)-f(x)=f(h)+xh(x+h)$ already differentiable), $f$ is differentiable everywhere and $f'(x)=x^{2}+2$. This is a first-order ODE with a known value $f(0)=0$.",
          "Solve the initial-value problem $f'(x)=x^{2}+2,\\ f(0)=0$: integrating, $f(x)=\\tfrac{x^{3}}{3}+2x$. Uniqueness of the IVP solution re-confirms that the single-point hypothesis removes all ambiguity left by the functional equation.",
          "Finally $f(3)=\\tfrac{27}{3}+6=15$ and $\\int_{0}^{3}f=\\Bigl[\\tfrac{x^{4}}{12}+x^{2}\\Bigr]_{0}^{3}=\\tfrac{63}{4}.$ So $\\boxed{f(x)=\\tfrac{x^{3}}{3}+2x,\\ f(3)=15,\\ \\int_{0}^{3}f=\\tfrac{63}{4}}.$"
        ]
      }
    ],
    "remark": "The capstone fuses a functional equation, a one-point regularity hypothesis, and a clean integral. The mathematical heart is the contrast between two facts that look contradictory until you separate them: the equation $f(x+y)=f(x)+f(y)+xy(x+y)$ is massively under-determined (its general solution is $\\tfrac{x^{3}}{3}$ plus ANY Cauchy-additive function, including everywhere-discontinuous Hamel monsters), yet adding differentiability at the single point $x=0$ makes the solution unique AND differentiable everywhere. The mechanism is propagation: $\\dfrac{f(x+h)-f(x)}{h}=\\dfrac{f(h)}{h}+x(x+h)$ carries the increment at $0$ to every $x$, turning local smoothness into global smoothness and converting the problem into the IVP $f'=x^{2}+2,\\ f(0)=0$. The trap -- 'guess a polynomial, match coefficients' -- accidentally produces the correct $f$ while completely missing why it is the answer, and a strong student who has met Cauchy's equation should feel the alarm: no regularity, no uniqueness. Here one tame point tames the whole line."
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
  }
];
