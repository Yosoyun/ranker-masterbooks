/* problems.js — DATA. 100 original olympiad/JEE-Advanced differentiability problems for f′ · The Derivative & Where It Fails. Adversarially verified in Python (sympy/numpy/mpmath). statement/answer raw LaTeX (app auto-detects prose+math); steps use $...$ and $$...$$. */
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
  "answer": "$g'(0)=0$, $g'(x)=2|x|$ so $g'(2)=4$, and $g''(0)$ \\textbf{does not exist}. Triple: $\\big(0,\\ 4,\\ \\text{does not exist}\\big)$.",
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
  "statement": "Define $f:\\mathbb{R}\\to\\mathbb{R}$ by \\[ f(x)=\\begin{cases}\\cos x,& x\\in\\mathbb{Q},\\\\[2pt] 1-\\dfrac{x^2}{2},& x\\notin\\mathbb{Q}.\\end{cases}\\] Find all points at which $f$ is differentiable, and give the value of the derivative there.",
  "answer": "$f$ is differentiable \\emph{only} at $x=0$, with $f'(0)=0$. (At every other point it is not even continuous.)",
  "trap": "Concluding $f$ is differentiable on a whole interval because both branches are individually smooth and ``$\\cos x\\approx 1-x^2/2$ for small $x$''. Differentiability at $a$ forces both branches to share the same \\emph{value and slope} at $a$; that simultaneous tangency happens only at $x=0$.",
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
  "answer": "$f_\\alpha$ is differentiable at $0$ \\emph{iff} $\\alpha>1$, and then $f_\\alpha'(0)=0$. For $\\alpha=1$ the one-sided derivatives are $+1$ and $-1$; for $0<\\alpha<1$ the difference quotient is unbounded.",
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
  "statement": "Let \\[ f(x)=\\begin{cases} a x^2 + b x + 1, & x\\le 1,\\\\[2pt] \\sqrt{x}, & x>1, \\end{cases}\\] where $a,b$ are real constants. Find the unique pair $(a,b)$ for which $f$ is differentiable at $x=1$, computing the right derivative of $\\sqrt{x}$ from first principles.",
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
  "trap": "Reasoning ``$p$ is a smooth polynomial, so $f$ inherits differentiability wherever $p$ is nice''. Off the rationals $f\\equiv 0$, so $f$ can be continuous only where $p(a)=0$, and differentiable only where additionally $p'(a)=0$ — i.e. at \\emph{double roots} of $p$, not at all roots.",
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
  "remark": "Insight: ``differentiable on $\\mathbb{Q}$, zero elsewhere'' converts each requirement into an algebraic order-of-vanishing condition. Differentiability counts \\emph{double} roots; mere continuity counts simple roots."
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
  "answer": "$f$ is differentiable \\emph{only} at $x=0$, and $f'(0)=1$ — a \\emph{nonzero} derivative at the single point of differentiability.",
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
  "title": "The Lie of the Symmetric Quotient",
  "difficulty": 4,
  "task": "Prove that",
  "tags": [
   "absolute-value",
   "symmetric-difference",
   "one-sided",
   "counterexample",
   "first-principles"
  ],
  "statement": "For $f(x)=|x|$, the \\emph{symmetric difference quotient} $S(h)=\\dfrac{f(0+h)-f(0-h)}{2h}$ satisfies $\\lim_{h\\to0}S(h)=0$. A student concludes $f'(0)=0$. Prove that this conclusion is false: show carefully, from the one-sided limit definition, that $f'(0)$ does not exist, and explain precisely why the symmetric quotient gave a misleading answer.",
  "answer": "proved: $f'(0)$ does not exist (right derivative $+1$, left derivative $-1$); since $f(x)=|x|$ is even, $S(h)\\equiv0$ for all $h\\ne0$, so $\\lim_{h\\to0}S(h)=0$ carries no information about $f'(0)$. The symmetric quotient is the average of a forward and a backward quotient, and that average can converge even when the genuine two-sided derivative fails — so its limit does not certify differentiability.",
  "trap": "Treating $\\lim_{h\\to0}\\frac{f(h)-f(-h)}{2h}$ as if it were $f'(0)$. The symmetric quotient can converge even when the ordinary derivative fails; it averages two opposing one-sided slopes and is blind to a genuine corner. Here it equals $0$ identically while $f'(0)$ does not exist at all.",
  "solutions": [
   {
    "name": "Compute both one-sided derivatives directly",
    "steps": [
     "By definition $f'(0)=\\lim_{h\\to0}\\dfrac{f(0+h)-f(0)}{h}=\\lim_{h\\to0}\\dfrac{|h|}{h}$, and this two-sided limit exists iff the two one-sided limits exist and agree.",
     "Right derivative: $\\lim_{h\\to0^+}\\dfrac{|h|}{h}=\\lim_{h\\to0^+}\\dfrac{h}{h}=1$.",
     "Left derivative: $\\lim_{h\\to0^-}\\dfrac{|h|}{h}=\\lim_{h\\to0^-}\\dfrac{-h}{h}=-1$.",
     "Since $+1\\ne-1$, the two one-sided limits disagree, so $\\lim_{h\\to0}\\dfrac{|h|}{h}$ does not exist and therefore $f'(0)$ does not exist.",
     "Yet $S(h)=\\dfrac{|h|-|-h|}{2h}=\\dfrac{|h|-|h|}{2h}=0$ for every $h\\ne0$, hence $\\lim_{h\\to0}S(h)=0$. The value $0$ is exactly the average $\\tfrac12\\big(1+(-1)\\big)$ of the two unequal one-sided slopes, so it masks the corner rather than measuring a derivative. Hence $f'(0)$ does not exist. $\\blacksquare$"
    ]
   },
   {
    "name": "Decompose the symmetric quotient as an average",
    "steps": [
     "Add and subtract $f(0)$ in the numerator: $S(h)=\\dfrac{f(h)-f(-h)}{2h}=\\dfrac12\\left(\\dfrac{f(h)-f(0)}{h}+\\dfrac{f(0)-f(-h)}{h}\\right)$, the average of a forward quotient and a backward quotient.",
     "Evaluate each piece as $h\\to0^+$ for $f=|\\cdot|$: the forward quotient $\\dfrac{|h|-0}{h}\\to+1$, while the backward piece $\\dfrac{0-|-h|}{h}=\\dfrac{-h}{h}\\to-1$. Their average is $\\tfrac12(1-1)=0$, so $\\lim_{h\\to0^+}S(h)=0$; evenness of $|x|$ gives the same value from the left, so $\\lim_{h\\to0}S(h)=0$.",
     "Convergence of an average never implies convergence of its summands: here the two pieces tend to the distinct values $+1$ and $-1$, which happen to cancel. The genuine derivative $f'(0)$ requires the single quotient $\\dfrac{f(h)-f(0)}{h}$ to have a two-sided limit, and that limit fails because its one-sided values are $+1$ and $-1$.",
     "Therefore $S(h)\\to0$ does not establish differentiability, and indeed $f'(0)$ does not exist. $\\blacksquare$"
    ]
   }
  ],
  "remark": "Insight: the symmetric difference quotient is a smoother, more forgiving object than the true derivative. For any even function $g$ one has $g(h)=g(-h)$, so $S(h)\\equiv0$ at the origin and $\\lim_{h\\to0}S(h)=0$ automatically — whether or not $g$ is differentiable there (try $g(x)=\\sqrt{|x|}$). A convergent symmetric quotient only detects the symmetric, even part of the local behaviour; it cancels the antisymmetric jump in slope that a corner creates. Always return to the one-sided definitions when a corner is suspected."
 },
 {
  "theme": "firstprinciples",
  "themeLabel": "Derivatives from First Principles",
  "title": "The Reciprocal Decoded",
  "difficulty": 4,
  "task": "Prove that",
  "tags": [
   "reciprocal",
   "first-principles",
   "quotient-trick",
   "differentiable-implies-continuous",
   "limit"
  ],
  "statement": "Let $f(x)=\\dfrac{1}{x}$ on $\\mathbb{R}\\setminus\\{0\\}$. (a) Prove from the definition that $f'(a)=-\\dfrac{1}{a^2}$ for every $a\\ne0$. (b) Use the limit you obtained to evaluate $f'(-\\tfrac13)$. (c) Quoting the theorem ``differentiable $\\Rightarrow$ continuous'', explain in one line why $f$ being differentiable on $\\mathbb{R}\\setminus\\{0\\}$ says nothing about behaviour at $0$.",
  "answer": "(a) proved: $f'(a)=-1/a^2$. (b) $f'(-\\tfrac13)=-9$. (c) The implication only certifies continuity at points where $f$ is defined and differentiable; $0\\notin\\operatorname{dom}f$, so no claim is made there.",
  "trap": "Combining the fraction incorrectly, e.g. writing $\\frac{1}{a+h}-\\frac1a=\\frac{1}{h}$ or dropping the sign, and getting $+1/a^2$. The correct common-denominator step gives a numerator $-h$, hence the minus sign.",
  "solutions": [
   {
    "name": "Common denominator in the difference quotient",
    "steps": [
     "$\\dfrac{f(a+h)-f(a)}{h}=\\dfrac{1}{h}\\left(\\dfrac{1}{a+h}-\\dfrac1a\\right)=\\dfrac{1}{h}\\cdot\\dfrac{a-(a+h)}{a(a+h)}=\\dfrac{-h}{h\\,a(a+h)}.$",
     "Cancel $h$: $=\\dfrac{-1}{a(a+h)}\\xrightarrow[h\\to0]{}-\\dfrac{1}{a^2}$, proving $f'(a)=-1/a^2$.",
     "(b) At $a=-\\tfrac13$: $f'(-\\tfrac13)=-\\dfrac{1}{(-1/3)^2}=-9$.",
     "(c) ``Differentiable $\\Rightarrow$ continuous'' is a statement about points of the domain; $0$ is not in the domain, so the theorem is silent there. $\\boxed{f'(a)=-1/a^2,\\ f'(-\\tfrac13)=-9}$"
    ]
   },
   {
    "name": "Series/linearization sanity check",
    "steps": [
     "For small $h$, $\\frac{1}{a+h}=\\frac{1}{a}\\cdot\\frac{1}{1+h/a}=\\frac1a\\big(1-\\tfrac{h}{a}+\\tfrac{h^2}{a^2}-\\cdots\\big)$.",
     "So $\\frac{1}{a+h}-\\frac1a=-\\frac{h}{a^2}+O(h^2)$, and dividing by $h$ gives $-\\frac{1}{a^2}+O(h)\\to-\\frac{1}{a^2}$.",
     "Evaluating at $a=-1/3$ gives $-9$; the domain remark in (c) follows since the theorem presupposes $f$ is defined at the point. $\\boxed{-9}$"
    ]
   }
  ],
  "remark": "Insight: the reciprocal's first-principles derivative is the prototype of the ``combine-then-cancel-$h$'' move. The domain caveat in (c) is a quiet but real subtlety students skip."
 },
 {
  "theme": "firstprinciples",
  "themeLabel": "Derivatives from First Principles",
  "title": "Differentiable, Yet the Slope Won't Settle",
  "difficulty": 4,
  "task": "Prove that",
  "tags": [
   "squeeze",
   "oscillation",
   "derivative-not-continuous",
   "first-principles",
   "sin(1/x)"
  ],
  "statement": "Let \\[ f(x)=\\begin{cases} x^2\\sin\\!\\left(\\dfrac{1}{x}\\right), & x\\ne0,\\\\[4pt] 0,& x=0.\\end{cases}\\] (a) Prove from the definition that $f'(0)$ exists and find its value. (b) Show that $\\lim_{x\\to0}f'(x)$ does \\emph{not} exist, so $f'$ is not continuous at $0$. State the boxed pair $\\big(f'(0),\\ \\lim_{x\\to0}f'(x)\\big)$ with the second entry as ``DNE''.",
  "answer": "$f'(0)=0$, while $\\lim_{x\\to0}f'(x)$ does not exist. Pair: $\\big(0,\\ \\text{DNE}\\big)$.",
  "trap": "Arguing ``$f$ is differentiable at $0$, so $f'$ must be continuous there, hence $f'(0)=\\lim_{x\\to0}f'(x)$''. Differentiability at a point does \\emph{not} force the derivative to be continuous; here $f'$ oscillates between values near $-1$ and $+1$ as $x\\to0$, so its limit fails to exist even though $f'(0)=0$.",
  "solutions": [
   {
    "name": "Squeeze for $f'(0)$, oscillation for the limit",
    "steps": [
     "At $0$ the difference quotient is $\\dfrac{f(h)-f(0)}{h}=\\dfrac{h^2\\sin(1/h)}{h}=h\\sin(1/h)$. Since $0\\le|h\\sin(1/h)|\\le|h|\\to0$, the squeeze theorem gives $f'(0)=0$.",
     "For $x\\ne0$ the ordinary product and chain rules apply, giving $f'(x)=2x\\sin(1/x)+x^2\\cos(1/x)\\cdot(-1/x^2)=2x\\sin(1/x)-\\cos(1/x)$.",
     "As $x\\to0$ the term $2x\\sin(1/x)\\to0$ (again by squeezing, since $|2x\\sin(1/x)|\\le2|x|$), but $\\cos(1/x)$ oscillates over $[-1,1]$ without settling: $x=\\frac{1}{2n\\pi}$ gives $\\cos(1/x)=1$, while $x=\\frac{1}{(2n+1)\\pi}$ gives $\\cos(1/x)=-1$.",
     "Hence $f'(x)$ accumulates near both $-1$ and $+1$, so $\\lim_{x\\to0}f'(x)$ does not exist even though $f'(0)=0$. Pair: $\\boxed{(0,\\ \\text{DNE})}$."
    ]
   },
   {
    "name": "Two sequences pin the discontinuity",
    "steps": [
     "From the definition, $f'(0)=\\lim_{h\\to0}h\\sin(1/h)=0$ by the squeeze $|h\\sin(1/h)|\\le|h|$, exactly as above.",
     "Away from $0$, $f'(x)=2x\\sin(1/x)-\\cos(1/x)$. Take $a_n=\\frac{1}{2n\\pi}\\to0$: then $\\sin(1/a_n)=\\sin(2n\\pi)=0$ and $\\cos(1/a_n)=\\cos(2n\\pi)=1$, so $f'(a_n)=2a_n\\cdot0-1=-1$. Take $b_n=\\frac{1}{(2n+1)\\pi}\\to0$: then $\\sin(1/b_n)=0$ and $\\cos(1/b_n)=\\cos((2n+1)\\pi)=-1$, so $f'(b_n)=0-(-1)=+1$.",
     "Two sequences tending to $0$ produce derivative values constantly equal to $-1$ and $+1$, so no single limit can exist; combined with $f'(0)=0$ this shows $f'$ is discontinuous at $0$. Pair: $\\boxed{(0,\\ \\text{DNE})}$."
    ]
   }
  ],
  "remark": "Insight: this is the canonical counterexample to ``derivatives must be continuous''. Differentiability everywhere does not imply $f\\in C^1$. Darboux's theorem still applies, so $f'$ has the intermediate value property near $0$ (it sweeps all of $[-1,1]$), yet continuity fails because the values never settle to a single limit."
 },
 {
  "theme": "firstprinciples",
  "themeLabel": "Derivatives from First Principles",
  "title": "A Cauchy Twist",
  "difficulty": 4,
  "task": "Find all",
  "tags": [
   "functional-equation",
   "first-principles",
   "cauchy",
   "derivative-everywhere",
   "polynomial"
  ],
  "statement": "A function $f:\\mathbb{R}\\to\\mathbb{R}$ satisfies $f(x+y)=f(x)+f(y)+xy(x+y)$ for all real $x,y$, and is differentiable at $0$ with $f'(0)=2$. Find $f'(x)$ for all $x$, and evaluate $f'(3)$.",
  "answer": "$f'(x)=x^2+2$ for all $x$; in particular $f'(3)=11$.",
  "trap": "Assuming the functional equation alone (a Cauchy-type relation) makes $f$ linear, hence $f'$ constant. The cross term $xy(x+y)$ injects a cubic, so $f$ is \\emph{not} linear and $f'$ depends on $x$.",
  "solutions": [
   {
    "name": "Differentiate from the definition using the relation",
    "steps": [
     "Put $y=0$: $f(x)=f(x)+f(0)+0$, so $f(0)=0$.",
     "For fixed $x$, $\\frac{f(x+h)-f(x)}{h}=\\frac{f(x)+f(h)+xh(x+h)-f(x)}{h}=\\frac{f(h)}{h}+x(x+h)$.",
     "Let $h\\to0$: $\\frac{f(h)}{h}=\\frac{f(0+h)-f(0)}{h}\\to f'(0)=2$, and $x(x+h)\\to x^2$. Hence $f'(x)=x^2+2$, valid for every $x$ (so $f$ is differentiable everywhere).",
     "Therefore $f'(3)=9+2=\\boxed{11}$."
    ]
   },
   {
    "name": "Reduce to a Cauchy equation, then guess-and-verify",
    "steps": [
     "Let $g(x)=f(x)-\\tfrac{x^3}{3}$. Substituting $f=g+\\tfrac{x^3}{3}$ collapses the cubic cross term and the relation becomes $g(x+y)=g(x)+g(y)$, i.e. $g$ is additive (Cauchy).",
     "Since $\\tfrac{x^3}{3}$ is smooth and $f$ is differentiable at $0$, so is $g$; an additive function differentiable at one point is linear, giving $g(x)=g'(0)\\,x$.",
     "Then $f'(0)=g'(0)+0=2$, so $g(x)=2x$ and $f(x)=\\tfrac{x^3}{3}+2x$. Differentiating: $f'(x)=x^2+2$.",
     "Thus $f'(3)=11$. (Differentiability at one point plus the relation upgrades to differentiability everywhere.) $\\boxed{f'(x)=x^2+2,\\ f'(3)=11}$"
    ]
   }
  ],
  "remark": "Insight: a single differentiability hypothesis at $0$ propagates to all of $\\mathbb{R}$ through the functional equation — the term $f(h)/h$ becomes $f'(0)$ regardless of $x$. The cubic cross term $xy(x+y)$ is exactly what bends the derivative away from a constant, and the substitution $g=f-x^3/3$ exposes the hidden Cauchy skeleton."
 },
 {
  "theme": "nondiff",
  "themeLabel": "Points of Non-Differentiability",
  "title": "The Weighted Toll Gates",
  "difficulty": 3,
  "task": "Find the number of …",
  "tags": [
   "absolute-value",
   "corners",
   "piecewise-linear",
   "sum-of-abs"
  ],
  "statement": "A traveller's accumulated toll is modelled by \\[ f(x) \\;=\\; |x-1| \\;+\\; |2x-3| \\;+\\; |3x-6|, \\qquad x\\in\\mathbb{R}. \\] Determine the number of points at which $f$ fails to be differentiable.",
  "answer": "$3$ points, at $x=1,\\ x=\\tfrac{3}{2},\\ x=2$.",
  "trap": "Reading off the constants $1,3,6$ and answering '3 corners at $x=1,3,6$'. The kink of $|2x-3|$ sits where $2x-3=0$, i.e. $x=\\tfrac32$, and that of $|3x-6|$ where $3x-6=0$, i.e. $x=2$ — NOT at the bare constants. You must solve each inner linear expression for zero.",
  "solutions": [
   {
    "name": "Corner of each summand",
    "steps": [
     "A term $|ax+b|$ (with $a\\neq0$) is differentiable everywhere except where its argument vanishes, i.e. at $x=-b/a$, where its slope jumps by $2|a|\\neq0$.",
     "Solve each argument: $x-1=0\\Rightarrow x=1$; $2x-3=0\\Rightarrow x=\\tfrac32$; $3x-6=0\\Rightarrow x=2$.",
     "These three abscissae are distinct, so no two kinks coincide and none can cancel (each slope jump is strictly positive).",
     "Hence $f$ has corners at exactly $x=1,\\tfrac32,2$ and is differentiable elsewhere. \\[\\boxed{3}\\]"
    ]
   },
   {
    "name": "Slope-jump accounting",
    "steps": [
     "Write $f'(x)=\\operatorname{sgn}(x-1)+2\\,\\operatorname{sgn}(2x-3)+3\\,\\operatorname{sgn}(3x-6)$ for $x\\notin\\{1,\\tfrac32,2\\}$.",
     "Reading the slope across the four open intervals gives $-6,\\ -4,\\ 0,\\ 6$: at $x=1$ only the first $\\operatorname{sgn}$ flips, changing $f'$ by $2$; at $x=\\tfrac32$ the second flips, change $4$; at $x=2$ the third flips, change $6$.",
     "Every flip changes $f'$ by a non-zero amount, so each is a genuine corner; the points are distinct.",
     "Total non-differentiable points $=\\boxed{3}$."
    ]
   },
   {
    "name": "Convexity argument",
    "steps": [
     "Each $|ax+b|$ is convex and piecewise linear with a single breakpoint; a finite sum of such functions is convex and piecewise linear.",
     "The breakpoints of the sum are precisely the union of the individual breakpoints (no breakpoint can disappear since all summands are convex, so left/right slopes never decrease across a kink).",
     "Breakpoints: $\\{1,\\tfrac32,2\\}$, three distinct values.",
     "$\\boxed{3}$ corners."
    ]
   }
  ],
  "remark": "Insight: in $|ax+b|$ the slope jump is $2|a|$, so heavily weighted terms make sharper corners but the COUNT depends only on distinct roots of the arguments — coefficients relocate kinks, they never create or destroy them unless two roots collide."
 },
 {
  "theme": "nondiff",
  "themeLabel": "Points of Non-Differentiability",
  "title": "Absolute Parabola",
  "difficulty": 3,
  "task": "Find the number of …",
  "tags": [
   "absolute-value",
   "quadratic",
   "corners",
   "sign-change"
  ],
  "statement": "Let \\[ g(x) \\;=\\; \\bigl| x^{2}-3x+2 \\bigr|, \\qquad x\\in\\mathbb{R}. \\] Find the number of points where $g$ is not differentiable, and state them.",
  "answer": "$2$ points, at $x=1$ and $x=2$.",
  "trap": "Concluding $g$ is smooth everywhere because $x^2-3x+2$ is a polynomial. Taking the absolute value reflects the part of the parabola below the axis; at each simple root the graph develops a corner. The folding—not the polynomial inside—is what kills differentiability.",
  "solutions": [
   {
    "name": "Roots are simple, so each folds",
    "steps": [
     "Factor: $x^{2}-3x+2=(x-1)(x-2)$, with simple roots $x=1,2$ (derivative $2x-3$ equals $-1,+1$ there, both non-zero).",
     "For $|u(x)|$ with $u$ smooth, non-differentiability can occur only where $u=0$; if additionally $u'\\neq0$ there, the graph crosses the axis transversally and $|u|$ has a corner.",
     "At $x=1$: $u'(1)=-1\\neq0$; at $x=2$: $u'(2)=+1\\neq0$—both are corners.",
     "Between/outside the roots $u$ keeps a constant sign, so $g=\\pm u$ is smooth. \\[\\boxed{2}\\]"
    ]
   },
   {
    "name": "One-sided derivatives",
    "steps": [
     "Near $x=1$, $u(x)\\approx u'(1)(x-1)=-(x-1)$, so $g\\approx|x-1|$, giving left slope $+1$, right slope $-1$ (after the chain)—they differ, a corner.",
     "Near $x=2$, $u(x)\\approx (x-2)$, so $g\\approx|x-2|$, again a corner with slope jump $2$.",
     "No other zero of $u$ exists, and $g$ is a composition of smooth functions away from the zeros.",
     "Therefore exactly $\\boxed{2}$ non-differentiable points."
    ]
   }
  ],
  "remark": "Insight: $|{\\rm polynomial}|$ breaks only at sign changes of the polynomial. Simple (odd-order) roots fold into corners; this problem is the clean baseline that the double-root trap later weaponises."
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
  "trap": "Two seductive errors. First, declaring $h$ non-differentiable wherever $\\sin x=\\cos x$ \\emph{regardless of slopes}, or at endpoints/extrema where the active branch peaks: $\\max(f,g)$ can only break where $f=g$ \\textbf{and} the one-sided slopes differ (a transversal crossing); a tangential meeting keeps $\\max$ smooth, and an interior extremum of a single branch is irrelevant. Second, padding the count with phantom solutions of $\\sin x=\\cos x$: on $[0,2\\pi]$ there are exactly two, $\\tfrac{\\pi}{4}$ and $\\tfrac{5\\pi}{4}$, both genuine corners — so the answer is $2$, not $4$ or some inflated count.",
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
  "title": "The Point That Refuses the Middle",
  "difficulty": 4,
  "task": "Find the value of c",
  "tags": [
   "mvt",
   "cubic",
   "secant slope",
   "off-center c"
  ],
  "statement": "Let $f(x)=x^{3}-3x+1$ on the interval $[0,2]$. The Mean Value Theorem guarantees a point $c\\in(0,2)$ at which the tangent is parallel to the chord joining the endpoints. Find every such $c$, and state whether any of them is the midpoint $x=1$.",
  "answer": "The unique valid point is $c=\\dfrac{2}{\\sqrt{3}}=\\dfrac{2\\sqrt{3}}{3}\\approx1.1547$. It is NOT the midpoint: the midpoint $x=1$ gives $f'(1)=0\\neq1$, so the seductive guess fails.",
  "trap": "Assuming the MVT point sits at the midpoint $x=1$ (or that it is unique by symmetry). The chord slope is $1$, but $f'(1)=0$; the actual $c$ is irrational and off-center, and the second algebraic root $-2/\\sqrt3$ lies outside $(0,2)$ and must be discarded.",
  "solutions": [
   {
    "name": "Direct MVT equation",
    "steps": [
     "Compute the chord slope: $\\dfrac{f(2)-f(0)}{2-0}=\\dfrac{3-1}{2}=1$.",
     "Set $f'(c)=3c^{2}-3=1$, so $3c^{2}=4$ and $c=\\pm\\tfrac{2}{\\sqrt3}$.",
     "Keep only $c\\in(0,2)$: $c=\\tfrac{2}{\\sqrt3}=\\tfrac{2\\sqrt3}{3}\\approx1.1547$, discarding $-\\tfrac{2}{\\sqrt3}$.",
     "Check the midpoint: $f'(1)=3-3=0\\neq1$, so $x=1$ is rejected. $\\boxed{c=\\tfrac{2\\sqrt3}{3}}$"
    ]
   },
   {
    "name": "Geometric / monotonicity argument",
    "steps": [
     "$f'(x)=3x^{2}-3$ is strictly increasing on $(0,2)$, so $f'(c)=1$ has at most one solution there.",
     "$f'(0)=-3<1$ and $f'(2)=9>1$, so by IVT exactly one $c$ exists in $(0,2)$.",
     "Solving $3c^{2}-3=1$ gives that unique value $c=\\tfrac{2\\sqrt3}{3}$, confirming uniqueness and that it differs from $1$. $\\boxed{c=\\tfrac{2\\sqrt3}{3}}$"
    ]
   }
  ],
  "remark": "Insight: MVT only asserts existence; the point is almost never the midpoint and need not be rational. Symmetry intuition is a trap — always solve $f'(c)=\\text{slope}$ and intersect with the open interval."
 },
 {
  "theme": "mvt",
  "themeLabel": "Mean Value & Rolle",
  "title": "Two Functions, One Secret Ratio",
  "difficulty": 4,
  "task": "Find the value of c",
  "tags": [
   "cauchy mvt",
   "generalized mvt",
   "ratio",
   "power functions"
  ],
  "statement": "Cauchy's Mean Value Theorem states that for $f,g$ continuous on $[a,b]$, differentiable on $(a,b)$ with $g'\\neq0$, there is a $c\\in(a,b)$ with $\\dfrac{f'(c)}{g'(c)}=\\dfrac{f(b)-f(a)}{g(b)-g(a)}$. Take $f(x)=x^{2}$, $g(x)=x^{3}$ on $[1,2]$. Find the value of $c$.",
  "answer": "$c=\\dfrac{14}{9}\\approx1.5556$, which lies in $(1,2)$.",
  "trap": "Treating the Cauchy point as the arithmetic mean $\\tfrac32$, or applying ordinary MVT to $f$ and $g$ separately and naively dividing the two midpoints. The correct ratio collapses to $2/(3c)$, giving $c=14/9\\neq 3/2$.",
  "solutions": [
   {
    "name": "Direct Cauchy computation",
    "steps": [
     "Right side: $\\dfrac{f(2)-f(1)}{g(2)-g(1)}=\\dfrac{4-1}{8-1}=\\dfrac{3}{7}$.",
     "Left side: $\\dfrac{f'(c)}{g'(c)}=\\dfrac{2c}{3c^{2}}=\\dfrac{2}{3c}$.",
     "Solve $\\dfrac{2}{3c}=\\dfrac{3}{7}\\Rightarrow 14=9c\\Rightarrow c=\\dfrac{14}{9}$.",
     "Since $1<\\tfrac{14}{9}<2$, it is valid: $\\boxed{c=\\tfrac{14}{9}}$"
    ]
   },
   {
    "name": "Auxiliary-function (Rolle) derivation",
    "steps": [
     "Let $h(x)=\\big(g(2)-g(1)\\big)f(x)-\\big(f(2)-f(1)\\big)g(x)=7x^{2}-3x^{3}$.",
     "Check $h(1)=7-3=4$ and $h(2)=28-24=4$, so $h(1)=h(2)$; $h$ is a polynomial, hence Rolle applies.",
     "Rolle gives $c$ with $h'(c)=14c-9c^{2}=0\\Rightarrow c(14-9c)=0$.",
     "Discard $c=0\\notin(1,2)$; take $c=\\tfrac{14}{9}\\in(1,2)$. $\\boxed{c=\\tfrac{14}{9}}$"
    ]
   }
  ],
  "remark": "Insight: Cauchy MVT is Rolle applied to the linear combination $h$ above — it is the engine behind L'Hopital's rule. The point depends jointly on both functions and is generally neither midpoint."
 },
 {
  "theme": "mvt",
  "themeLabel": "Mean Value & Rolle",
  "title": "Pinning an Arctangent Gap",
  "difficulty": 4,
  "task": "Prove that",
  "tags": [
   "mvt",
   "arctangent",
   "inequality",
   "bounds"
  ],
  "statement": "Using the Mean Value Theorem applied to $f(x)=\\arctan x$ on $[1,2]$, prove the two-sided estimate \\[\\frac{1}{5}<\\arctan 2-\\arctan 1<\\frac{1}{2}.\\]",
  "answer": "Proved. (Numerically $\\arctan2-\\arctan1\\approx0.3218$, which indeed lies strictly between $0.2$ and $0.5$.)",
  "trap": "Bounding $f'$ over the whole real line, where $0<f'(x)\\le1$ with the maximum value $1$ attained at $x=0$, gives only the weak estimate $0<\\text{gap}<1$. The sharp bound requires using the strict monotonicity of $f'(x)=1/(1+x^2)$ ON the interval $[1,2]$ and evaluating it at the endpoints, not the loose global maximum at $x=0$.",
  "solutions": [
   {
    "name": "MVT plus endpoint bounds on f'",
    "steps": [
     "Since $f(x)=\\arctan x$ is continuous on $[1,2]$ and differentiable on $(1,2)$ with $f'(x)=\\dfrac{1}{1+x^{2}}$, the Mean Value Theorem gives a point $c\\in(1,2)$ with $\\arctan2-\\arctan1=f'(c)\\cdot(2-1)=\\dfrac{1}{1+c^{2}}$.",
     "On $(1,2)$ the map $x\\mapsto\\dfrac{1}{1+x^{2}}$ is strictly decreasing, because $\\dfrac{d}{dx}\\dfrac{1}{1+x^{2}}=\\dfrac{-2x}{(1+x^{2})^{2}}<0$ for $x>0$; hence $\\dfrac{1}{1+2^{2}}<\\dfrac{1}{1+c^{2}}<\\dfrac{1}{1+1^{2}}$.",
     "That is exactly $\\dfrac{1}{5}<\\arctan2-\\arctan1<\\dfrac{1}{2}$. $\\blacksquare$"
    ]
   },
   {
    "name": "Integral comparison (equivalent form)",
    "steps": [
     "By the Fundamental Theorem of Calculus, $\\arctan2-\\arctan1=\\displaystyle\\int_{1}^{2}\\dfrac{dx}{1+x^{2}}$, the integral version of the same mean-value statement.",
     "For $x\\in[1,2]$ we have $\\dfrac{1}{5}\\le\\dfrac{1}{1+x^{2}}\\le\\dfrac{1}{2}$, with equality only at the single endpoints $x=2$ and $x=1$ respectively, so each inequality is strict on a subinterval of positive length.",
     "Integrating over the length-$1$ interval $[1,2]$ therefore yields strict inequalities, $\\dfrac15<\\displaystyle\\int_1^2\\dfrac{dx}{1+x^2}<\\dfrac12$, which is the claim. $\\blacksquare$"
    ]
   }
  ],
  "remark": "Insight: MVT turns a difference of function values into a single derivative value, and sharp inequalities come from bounding that derivative over the SMALL interval $[1,2]$ rather than globally. The exact gap is $\\arctan2-\\tfrac{\\pi}{4}\\approx0.32175$, comfortably between $0.2$ and $0.5$; this is exactly how one hand-estimates transcendental gaps without a calculator."
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
  "title": "The Cosine Cannot Outrun Its Input",
  "difficulty": 3,
  "task": "Prove that",
  "tags": [
   "mvt",
   "lipschitz",
   "cosine",
   "inequality"
  ],
  "statement": "Prove that for all real $a,b$, \\[|\\cos a-\\cos b|\\le |a-b|,\\] and use this to show $|\\cos 1-\\cos 2|<1$ (angles in radians). State whether equality $|\\cos a-\\cos b|=|a-b|$ can ever hold for $a\\neq b$.",
  "answer": "The inequality holds for all $a,b$ (cosine is $1$-Lipschitz); $|\\cos1-\\cos2|\\approx0.9564<1$. Equality for $a\\neq b$ is impossible: it would force $|\\sin t|=|t|$ for $t=\\tfrac{a-b}{2}\\neq0$, but $|\\sin t|<|t|$ for every $t\\neq0$. Hence the inequality is strict whenever $a\\neq b$.",
  "trap": "Claiming equality is attainable because $|\\sin c|$ can equal $1$ at isolated points (e.g. $c=\\pi/2$). MVT gives ONE point $c$ with $|\\cos a-\\cos b|=|\\sin c|\\,|a-b|$, but to reach equality you would need that single $c$ to satisfy $|\\sin c|=1$ for the slope of the secant. Even taking the interval symmetric about $\\pi/2$, the secant slope is $\\approx0.959<1$, so $|\\sin c|<1$ at the actual mean-value point. Equality never occurs for distinct $a,b$.",
  "solutions": [
   {
    "name": "MVT / Lipschitz bound",
    "steps": [
     "For $a\\neq b$, apply the Mean Value Theorem to $f(x)=\\cos x$ (differentiable everywhere) on the interval with endpoints $a,b$: there is a $c$ strictly between $a$ and $b$ with $\\cos a-\\cos b=f'(c)\\,(a-b)=-\\sin c\\,(a-b)$.",
     "Take absolute values: $|\\cos a-\\cos b|=|\\sin c|\\,|a-b|\\le|a-b|$, since $|\\sin c|\\le1$. The case $a=b$ is trivial (both sides $0$). This proves the inequality for all real $a,b$.",
     "For $a=1,b=2$: the mean-value point $c$ lies in $(1,2)$. On this open interval $\\sin c=1$ only at $c=\\pi/2\\approx1.571$, but the actual $c$ is one fixed point and the secant slope is $|\\cos1-\\cos2|/|1-2|$. Whatever $c$ is, $|\\sin c|<1$ unless $c=\\pi/2$ exactly; and even centering the data about $\\pi/2$ gives slope $\\approx0.959<1$. So $|\\cos1-\\cos2|=|\\sin c|<1$.",
     "Numerically $|\\cos1-\\cos2|\\approx0.9564<1$, confirming the bound is strict here. $\\blacksquare$"
    ]
   },
   {
    "name": "Sum-to-product identity",
    "steps": [
     "$\\cos a-\\cos b=-2\\sin\\!\\frac{a+b}{2}\\sin\\!\\frac{a-b}{2}$, so $|\\cos a-\\cos b|=2\\big|\\sin\\tfrac{a+b}{2}\\big|\\,\\big|\\sin\\tfrac{a-b}{2}\\big|\\le2\\big|\\sin\\tfrac{a-b}{2}\\big|$, using $|\\sin\\tfrac{a+b}{2}|\\le1$.",
     "Apply $|\\sin t|\\le|t|$ (itself the Lipschitz/MVT fact for $\\sin$, with equality only at $t=0$): $2\\big|\\sin\\tfrac{a-b}{2}\\big|\\le2\\cdot\\big|\\tfrac{a-b}{2}\\big|=|a-b|$. For $a=1,b=2$ this gives $|\\cos1-\\cos2|=2|\\sin\\tfrac32|\\,|\\sin\\tfrac12|\\approx0.9564<1$.",
     "Equality throughout would require BOTH $|\\sin\\tfrac{a+b}{2}|=1$ AND $|\\sin\\tfrac{a-b}{2}|=\\big|\\tfrac{a-b}{2}\\big|$. The second forces $\\tfrac{a-b}{2}=0$, i.e. $a=b$. Hence for $a\\neq b$ the inequality is strict. $\\blacksquare$"
    ]
   }
  ],
  "remark": "Insight: a bounded derivative is a Lipschitz constant. Since $|\\cos'|=|\\sin|\\le1$, cosine is $1$-Lipschitz; and because $|\\sin|<1$ except at isolated points, it is a strict contraction of differences. The trap mistakes a pointwise fact ($|\\sin|=1$ somewhere) for a global one (equality needs $|f'|=1$ to govern the whole secant) — the rigorous version of 'the graph is never steeper than slope $1$, and only momentarily that steep.'"
 },
 {
  "theme": "mvt",
  "themeLabel": "Mean Value & Rolle",
  "title": "Trapping the Sinc Between a Cosine and One",
  "difficulty": 4,
  "task": "Prove that",
  "tags": [
   "cauchy mvt",
   "sinc",
   "inequality",
   "trigonometry"
  ],
  "statement": "Let $0<t<\\pi/2$. Using Cauchy's Mean Value Theorem with $f(x)=\\sin x$ and $g(x)=x$ on $[0,t]$, prove the double inequality \\[\\cos t<\\frac{\\sin t}{t}<1.\\]",
  "answer": "Proved. (E.g. at $t=1$: $\\cos1\\approx0.5403<\\sin1\\approx0.8415<1$.)",
  "trap": "Asserting $\\sin t/t<1$ and $>\\cos t$ from a Taylor series and calling it MVT, or applying ordinary MVT to $\\sin$ alone (which only gives $\\sin t=t\\cos c$). The clean two-sided bound comes from one Cauchy-MVT point $c\\in(0,t)$ and then using that $\\cos$ is strictly decreasing on $(0,t)$ — assuming $c=t/2$ would give a wrong middle expression $\\cos(t/2)$.",
  "solutions": [
   {
    "name": "Cauchy MVT on (sin, id)",
    "steps": [
     "Cauchy MVT on $[0,t]$: there is $c\\in(0,t)$ with $\\dfrac{f'(c)}{g'(c)}=\\dfrac{\\sin t-\\sin0}{t-0}$, i.e. $\\cos c=\\dfrac{\\sin t}{t}$.",
     "On $(0,t)\\subset(0,\\pi/2)$, $\\cos$ is strictly decreasing, so $\\cos t<\\cos c<\\cos 0=1$.",
     "Substituting $\\cos c=\\sin t/t$ gives $\\cos t<\\dfrac{\\sin t}{t}<1$. $\\blacksquare$"
    ]
   },
   {
    "name": "Monotonicity of two auxiliary functions",
    "steps": [
     "Upper bound: $u(t)=\\sin t-t$ has $u(0)=0$, $u'(t)=\\cos t-1<0$ on $(0,\\pi/2)$, so $\\sin t<t$, i.e. $\\sin t/t<1$.",
     "Lower bound: $v(t)=\\sin t-t\\cos t$ has $v(0)=0$ and $v'(t)=\\cos t-\\cos t+t\\sin t=t\\sin t>0$ on $(0,\\pi/2)$, so $v(t)>0$, i.e. $\\sin t>t\\cos t$.",
     "Dividing by $t>0$: $\\sin t/t>\\cos t$. Combining gives $\\cos t<\\sin t/t<1$. $\\blacksquare$"
    ]
   }
  ],
  "remark": "Insight: the famous limit $\\lim_{t\\to0}\\sin t/t=1$ is squeezed by exactly this inequality; Cauchy MVT produces it in one stroke since $\\sin t/t$ is literally a value of $\\cos$ at an intermediate point."
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
  "title": "The Oscillator That Forgot to Be Continuous",
  "difficulty": 4,
  "task": "Evaluate",
  "tags": [
   "x^2sin(1/x)",
   "derivative at a point",
   "oscillation",
   "ivp"
  ],
  "statement": "Let \\[ f(x)=\\begin{cases} x^{2}\\sin\\!\\frac{1}{x}, & x\\neq 0,\\\\[4pt] 0, & x=0.\\end{cases} \\] (a) Compute $f'(0)$ from the definition. (b) Write $f'(x)$ for $x\\neq 0$ and show that $\\displaystyle\\lim_{x\\to 0}f'(x)$ does not exist, so $f'$ is discontinuous at $0$. (c) Despite this, explain in one line why $f'$ still maps every interval onto an interval. Report the value $f'(0)$ and the limit superior and limit inferior of $f'(x)$ as $x\\to 0$.",
  "answer": "$f'(0)=0$; for $x\\ne0$, $f'(x)=2x\\sin\\frac1x-\\cos\\frac1x$. As $x\\to0$, $\\limsup f'=1$ and $\\liminf f'=-1$, so $\\lim_{x\\to0}f'(x)$ does not exist; yet $f'$ exists everywhere, so by Darboux's theorem it has the intermediate value property.",
  "trap": "Computing $f'(0)$ by taking $\\lim_{x\\to0}f'(x)$. That limit does not exist, but $f'(0)$ does — it must be found from the difference quotient $\\lim_{h\\to0}\\frac{h^2\\sin(1/h)}{h}=\\lim h\\sin(1/h)=0$. Conflating the derivative-at-a-point with the limit of the derivative is exactly the error Darboux exposes.",
  "solutions": [
   {
    "name": "Direct difference quotient + product rule",
    "steps": [
     "At $0$: $\\frac{f(h)-f(0)}{h}=\\frac{h^2\\sin(1/h)}{h}=h\\sin\\frac1h$, and $|h\\sin\\frac1h|\\le|h|\\to0$, so $f'(0)=0$.",
     "For $x\\ne0$, product/chain rule: $f'(x)=2x\\sin\\frac1x+x^2\\cos\\frac1x\\cdot(-\\frac1{x^2})=2x\\sin\\frac1x-\\cos\\frac1x$.",
     "Along $x_n=\\frac1{2n\\pi}$: $f'(x_n)=0-\\cos(2n\\pi)=-1$; along $x_n=\\frac1{(2n+1)\\pi}$: $f'=-\\cos((2n+1)\\pi)=+1$. Thus $\\liminf=-1,\\ \\limsup=1$ and the limit fails to exist.",
     "Since $f$ is differentiable on all of $\\mathbb R$, Darboux's theorem applies to $f'$: it has the IVP though discontinuous at $0$. $\\boxed{f'(0)=0,\\ \\limsup=1,\\ \\liminf=-1}$"
    ]
   },
   {
    "name": "Squeeze for the value, sequences for the oscillation",
    "steps": [
     "The $2x\\sin\\frac1x$ part is bounded by $2|x|\\to0$, so near $0$ the behaviour of $f'$ is governed entirely by $-\\cos\\frac1x$, which densely fills $[-1,1]$ on every $(0,\\delta)$.",
     "Hence in any neighbourhood of $0$, $f'$ takes values arbitrarily close to both $-1$ and $1$: limit DNE.",
     "The squeeze on the difference quotient gives the genuine value $f'(0)=0$, which lies inside $[-1,1]$ — consistent with (and forced by) the IVP across $0$. $\\boxed{0,\\ \\pm1}$"
    ]
   }
  ],
  "remark": "Insight: the single most famous example of a derivative that is not continuous. The graph of $f$ is squeezed between $\\pm x^2$, smooth enough to be differentiable at $0$, but the slope $f'$ inherits the wild oscillation of $\\cos(1/x)$. Darboux guarantees $f'$ still never 'jumps', even though it has no limit at $0$."
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
  "title": "Engineering a Discontinuous Slope Through One Half",
  "difficulty": 5,
  "task": "Find a,b",
  "tags": [
   "construction",
   "prescribed derivative",
   "x^2sin(1/x)",
   "ivp"
  ],
  "statement": "You must construct a function $g:\\mathbb R\\to\\mathbb R$, differentiable everywhere, whose derivative $g'$ is discontinuous at $x=0$ yet satisfies $g'(0)=\\tfrac12$ and takes every value in the open interval $\\bigl(-\\tfrac12,\\tfrac32\\bigr)$ within every neighbourhood of $0$. Using the template $g(x)=x^{2}\\sin\\frac1x+\\beta x$ (with $g(0)=0$), find the constant $\\beta$, and find the two real values $a<b$ that are the infimum and supremum of $g'$ on every punctured neighbourhood of $0$.",
  "answer": "$\\beta=\\tfrac12$; then $g'(0)=\\tfrac12$ and near $0$, $g'(x)=2x\\sin\\frac1x-\\cos\\frac1x+\\tfrac12$ oscillates with $\\liminf=a=-\\tfrac12$ and $\\limsup=b=\\tfrac32$. So $(a,b)=\\bigl(-\\tfrac12,\\tfrac32\\bigr)$.",
  "trap": "Trying to make $g'$ continuous at $0$ by tuning $\\beta$. No choice of $\\beta$ removes the $-\\cos(1/x)$ oscillation; you can only shift its centre. Believing a 'nice formula' must yield a continuous derivative is the Darboux trap in reverse.",
  "solutions": [
   {
    "name": "Compute derivative and read off the shift",
    "steps": [
     "At $0$: $\\frac{g(h)-g(0)}{h}=h\\sin\\frac1h+\\beta\\to\\beta$, so $g'(0)=\\beta$. Setting $g'(0)=\\tfrac12$ gives $\\beta=\\tfrac12$.",
     "For $x\\ne0$: $g'(x)=2x\\sin\\frac1x-\\cos\\frac1x+\\tfrac12$.",
     "Near $0$, $2x\\sin\\frac1x\\to0$ and $-\\cos\\frac1x$ ranges over $[-1,1]$ densely, so $g'$ ranges densely over $[\\tfrac12-1,\\tfrac12+1]=[-\\tfrac12,\\tfrac32]$.",
     "Hence $\\liminf=-\\tfrac12$, $\\limsup=\\tfrac32$, and $g'$ hits every value of $(-\\tfrac12,\\tfrac32)$ in each neighbourhood of $0$, while $g'(0)=\\tfrac12$. $\\boxed{\\beta=\\tfrac12,\\ (a,b)=(-\\tfrac12,\\tfrac32)}$"
    ]
   },
   {
    "name": "Superposition of base example and linear part",
    "steps": [
     "Let $h(x)=x^2\\sin\\frac1x$ ($h(0)=0$); we know $h'(0)=0$ and $h'(x)=2x\\sin\\frac1x-\\cos\\frac1x$ has $\\liminf=-1,\\limsup=1$ at $0$.",
     "Adding $\\beta x$ shifts the derivative by the constant $\\beta$: $g'=h'+\\beta$, so $g'(0)=\\beta$ and the oscillation window becomes $[-1+\\beta,1+\\beta]$.",
     "Demanding $g'(0)=\\tfrac12$ fixes $\\beta=\\tfrac12$ and window $[-\\tfrac12,\\tfrac32]$. $\\boxed{\\beta=\\tfrac12}$"
    ]
   }
  ],
  "remark": "Insight: you can dial the centre of a derivative's oscillation freely, but never kill the oscillation itself. This is how one builds derivatives realizing a prescribed Darboux behaviour to order — translating the canonical $x^2\\sin(1/x)$ example."
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
  "title": "Rational Slopes Everywhere",
  "difficulty": 5,
  "task": "Prove that",
  "tags": [
   "rational-valued derivative",
   "constant",
   "darboux",
   "interval image",
   "totally disconnected target"
  ],
  "statement": "Let $f$ be differentiable on an interval $I$ and suppose $f'(x)\\in\\mathbb Q$ for every $x\\in I$. Prove that $f'$ is constant on $I$, and hence that $f$ is affine, $f(x)=qx+c$ with $q\\in\\mathbb Q$.",
  "answer": "Proved. There is a single rational $q$ with $f'\\equiv q$ on $I$, so $f(x)=qx+c$ for some constant $c$.",
  "trap": "Trying to build a differentiable $f$ whose slope takes two different rational values (say $1$ on one part, $2$ on another) by gluing line segments. At every join the one-sided derivatives disagree ($1\\ne 2$), so $f$ has a corner and is not differentiable there; and any smooth bridge between slopes $1$ and $2$ must, by Darboux, pass through irrational intermediate slopes such as $\\sqrt2$, violating $f'\\in\\mathbb Q$. No such $f$ exists.",
  "solutions": [
   {
    "name": "Darboux + an irrational between two rationals",
    "steps": [
     "Suppose, for contradiction, that $f'$ is not constant. Then there exist $x_1,x_2\\in I$ with $f'(x_1)\\ne f'(x_2)$; relabel so that $f'(x_1)<f'(x_2)$.",
     "The reals $f'(x_1)$ and $f'(x_2)$ are distinct, so the open interval $\\bigl(f'(x_1),\\,f'(x_2)\\bigr)$ is nonempty and therefore contains an irrational number $\\xi$ (the irrationals are dense): $f'(x_1)<\\xi<f'(x_2)$.",
     "By Darboux's theorem, the derivative $f'$ has the intermediate value property on $I$ even without being continuous; hence $f'$ attains the value $\\xi$ at some point between $x_1$ and $x_2$.",
     "But then $f'$ takes the irrational value $\\xi$, contradicting $f'(x)\\in\\mathbb Q$ for all $x$. So no such $x_1,x_2$ exist: $f'\\equiv q$ is constant.",
     "The constant $q=f'(x_1)\\in\\mathbb Q$. Integrating $f'\\equiv q$ gives $f(x)=qx+c$. $\\boxed{f'\\equiv q\\in\\mathbb Q,\\quad f(x)=qx+c}$"
    ]
   },
   {
    "name": "Interval-image argument",
    "steps": [
     "By Darboux's theorem the image $f'(I)$ is an interval (the continuous-image-of-an-interval intuition holds for derivatives via the IVP, not via continuity).",
     "Every nondegenerate interval contains an irrational number — e.g. for $a<b$ the point $a+\\tfrac{b-a}{\\sqrt2}$ lies strictly inside $(a,b)$ and is irrational.",
     "Since $f'(I)\\subseteq\\mathbb Q$, the interval $f'(I)$ contains no irrationals, so it cannot be nondegenerate; it must be a single point $\\{q\\}$ with $q\\in\\mathbb Q$.",
     "Thus $f'\\equiv q$, and integrating gives $f(x)=qx+c$. $\\boxed{f(x)=qx+c,\\ q\\in\\mathbb Q}$"
    ]
   }
  ],
  "remark": "The argument never uses that $f'$ is continuous — Darboux supplies the intermediate value property for any derivative. The real engine is topological: $\\mathbb Q$ is totally disconnected, so the only intervals it contains are single points. Replace $\\mathbb Q$ by any totally disconnected set (the integers, a finite set, the Cantor set, or even $\\mathbb R\\setminus\\mathbb Q$) and the same proof collapses $f'$ to a constant. This is Darboux's theorem wearing a topology hat: an honest derivative cannot sample a 'thin' set without sitting on one point of it."
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
  "title": "Infinitely Many Critical Whispers",
  "difficulty": 5,
  "task": "Find the number of",
  "tags": [
   "rolle",
   "x^2 sin",
   "infinitely many zeros",
   "critical points"
  ],
  "statement": "Let $f(x)=x^{2}\\sin\\dfrac{\\pi}{x}$ for $x\\ne0$ and $f(0)=0$. Find the number of points $c\\in(0,1)$ at which $f'(c)=0$ is GUARANTEED to exist by Rolle's theorem applied between consecutive zeros of $f$ in $(0,1)$. Then explain how this shows that $f'$, although it has no limit at $0$, attains the value $0$ arbitrarily close to $0$ — in keeping with Darboux's intermediate-value property for derivatives.",
  "answer": "Infinitely many (countably infinite). The zeros of $f$ in $(0,1)$ are $x_k=\\tfrac1k$ for $k=2,3,4,\\dots$; on each consecutive pair $\\bigl[\\tfrac1{k+1},\\tfrac1k\\bigr]$ Rolle's theorem produces a $c_k\\in\\bigl(\\tfrac1{k+1},\\tfrac1k\\bigr)$ with $f'(c_k)=0$. There is exactly one such gap for every integer $k\\ge2$, so there are countably infinitely many guaranteed critical points. Since $c_k\\in\\bigl(\\tfrac1{k+1},\\tfrac1k\\bigr)$ forces $c_k\\to0$, the value $0$ is attained by $f'$ in every neighbourhood of $0$.",
  "trap": "Trying to solve $f'(x)=2x\\sin\\frac{\\pi}{x}-\\pi\\cos\\frac{\\pi}{x}=0$ explicitly as a trigonometric equation and reporting a finite count, or believing that because $\\lim_{x\\to0}f'(x)$ fails to exist, $f'$ cannot equal $0$ near $0$. Rolle sidesteps the messy equation and manufactures infinitely many guaranteed critical points clustering at the origin.",
  "solutions": [
   {
    "name": "Zeros of f, then Rolle on each gap",
    "steps": [
     "For $x\\ne0$, $f(x)=0\\iff\\sin\\frac{\\pi}{x}=0\\iff\\frac{\\pi}{x}=k\\pi\\iff x=\\frac1k$ with $k\\in\\mathbb Z\\setminus\\{0\\}$. Inside the open interval $(0,1)$ these are $x=\\tfrac12,\\tfrac13,\\tfrac14,\\dots$, i.e. $x_k=\\tfrac1k$ for every integer $k\\ge2$ (the value $x=1$ is the endpoint, not interior).",
     "On each closed gap $\\bigl[\\tfrac1{k+1},\\tfrac1k\\bigr]\\subset(0,1)$ the function $f$ is continuous, differentiable, and vanishes at both endpoints. Rolle's theorem therefore yields a point $c_k\\in\\bigl(\\tfrac1{k+1},\\tfrac1k\\bigr)$ with $f'(c_k)=0$.",
     "There is exactly one such gap for each integer $k\\ge2$, and all of them lie inside $(0,1)$. Hence the number of Rolle-guaranteed critical points is $\\boxed{\\text{countably infinite}}$.",
     "Because $c_k\\in\\bigl(\\tfrac1{k+1},\\tfrac1k\\bigr)$ we have $0<c_k<\\tfrac1k\\to0$, so $f'$ takes the value $0$ at points arbitrarily close to $0$. This holds even though $f'(x)=2x\\sin\\frac{\\pi}{x}-\\pi\\cos\\frac{\\pi}{x}$ has no limit as $x\\to0$ (the $\\cos\\frac{\\pi}{x}$ term oscillates), illustrating Darboux's intermediate-value property in the absence of continuity of $f'$."
    ]
   },
   {
    "name": "Fermat at interior extrema + accumulation",
    "steps": [
     "On each gap $\\bigl(\\tfrac1{k+1},\\tfrac1k\\bigr)$ the continuous function $f$ does not vanish, so it keeps one sign there and, being zero at both endpoints, must attain an interior maximum or minimum. By Fermat's theorem $f'=0$ at that interior extremum, giving at least one critical point per gap.",
     "The gaps $\\bigl(\\tfrac1{k+1},\\tfrac1k\\bigr)$ for $k=2,3,4,\\dots$ are disjoint and tile $\\bigl(0,\\tfrac12\\bigr)$; there are infinitely many of them, so there are infinitely many critical points, and they accumulate at $0$ since the gaps shrink toward the origin.",
     "Consequently $f'$ realises the value $0$ in every neighbourhood of $0$: the count is $\\boxed{\\infty}$ (countably infinite)."
    ]
   },
   {
    "name": "Differentiability at 0 plus discontinuity of f'",
    "steps": [
     "First confirm $f$ is differentiable at $0$: $f'(0)=\\lim_{h\\to0}\\frac{h^{2}\\sin(\\pi/h)}{h}=\\lim_{h\\to0}h\\sin\\frac{\\pi}{h}=0$, since $|h\\sin\\frac{\\pi}{h}|\\le|h|$. Thus $f$ is differentiable on all of $[0,1]$, with $f'(0)=0$.",
     "Yet $f'(x)=2x\\sin\\frac{\\pi}{x}-\\pi\\cos\\frac{\\pi}{x}$ has no limit as $x\\to0$: the first term tends to $0$ but $\\pi\\cos\\frac{\\pi}{x}$ oscillates in $[-\\pi,\\pi]$. So $f'$ is discontinuous at $0$ despite existing everywhere.",
     "Applying Rolle (or Fermat) between the consecutive zeros $\\tfrac1{k+1},\\tfrac1k$ gives one $c_k\\to0$ with $f'(c_k)=0$ for every $k\\ge2$ — countably infinitely many. The derivative therefore passes through $0$ infinitely often near the origin, honouring the intermediate-value property even where it is not continuous. $\\boxed{\\text{infinitely many}}$"
    ]
   }
  ],
  "remark": "Insight: Rolle is a finite tool deployed infinitely many times. The zero-spacing of $x^{2}\\sin(\\pi/x)$ collapses like $\\tfrac1k-\\tfrac1{k+1}=\\tfrac1{k(k+1)}$, packing infinitely many guaranteed critical points toward the origin. This is a tactile picture of Darboux's theorem: a derivative need not be continuous, yet it can never skip a value — here $f'$ keeps oscillating through $0$ near $0$ even though $\\lim_{x\\to0}f'(x)$ never settles."
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
  "title": "Exponential by Decree",
  "difficulty": 4,
  "task": "Find all",
  "tags": [
   "multiplicative",
   "exponential",
   "trivial-solution",
   "logarithmic-derivative"
  ],
  "statement": "Find all differentiable functions $f:\\mathbb{R}\\to\\mathbb{R}$ satisfying \\[ f(x+y)=f(x)\\,f(y)\\qquad\\text{for all }x,y, \\] and among the nonzero solutions, identify the one with $f'(0)=\\ln 2$ and report $f(10)$.",
  "answer": "All solutions are $f\\equiv 0$ or $f(x)=e^{cx}$ ($c\\in\\mathbb{R}$); the one with $f'(0)=\\ln 2$ is $f(x)=2^{x}$, so $f(10)=1024$.",
  "trap": "Dividing the equation by $f(x)$ to get $f'(x)/f(x)=f'(0)$ without first ruling out $f(x)=0$. If $f$ vanishes anywhere it vanishes everywhere (the trivial solution), which the division silently drops, costing the $f\\equiv0$ family.",
  "solutions": [
   {
    "name": "Logarithmic derivative (after handling zeros)",
    "steps": [
     "Setting $y=0$: $f(x)=f(x)f(0)$, so $f(x)\\bigl(1-f(0)\\bigr)=0$ for all $x$; hence either $f\\equiv0$ or $f(0)=1$.",
     "If $f(a)=0$ for some $a$, then $f(x)=f\\bigl(a+(x-a)\\bigr)=f(a)f(x-a)=0$ for all $x$; so a nonzero solution never vanishes and, being continuous with $f(0)=1$, stays positive.",
     "Differentiate in $y$ at $y=0$: $f'(x)=f(x)f'(0)$, hence $f'(x)/f(x)=f'(0)=:c$.",
     "Integrating $\\bigl(\\ln f\\bigr)'=c$ from $0$: $\\ln f(x)=cx$, i.e. $f(x)=e^{cx}$.",
     "With $c=\\ln 2$, $f(x)=e^{(\\ln 2)x}=2^{x}$ and $f(10)=2^{10}=\\boxed{1024}$."
    ]
   },
   {
    "name": "Difference quotient",
    "steps": [
     "For a nonzero solution $f(0)=1$ and $f>0$. Then $\\dfrac{f(x+h)-f(x)}{h}=f(x)\\dfrac{f(h)-1}{h}=f(x)\\dfrac{f(h)-f(0)}{h}.$",
     "Let $h\\to0$: the right factor tends to $f'(0)$, so $f'(x)=f(x)f'(0)$, a linear first-order ODE.",
     "The initial value problem $f'=f'(0)\\,f$, $f(0)=1$ has a unique solution (the right side is Lipschitz in $f$), namely $f(x)=e^{f'(0)x}$; the dropped trivial $f\\equiv0$ is recovered separately.",
     "For $f'(0)=\\ln2$: $f(x)=2^x$, giving $f(10)=\\boxed{1024}$."
    ]
   },
   {
    "name": "Reduce to Cauchy via logarithm",
    "steps": [
     "For a nonzero (hence positive) solution set $g=\\ln f$; then $g(x+y)=g(x)+g(y)$ with $g$ differentiable.",
     "Additive Cauchy plus differentiability gives $g(x)=g'(0)x$, and $g'(0)=f'(0)/f(0)=f'(0)$.",
     "So $f(x)=e^{f'(0)x}$; the trivial solution $f\\equiv0$ is recovered separately, completing the full family.",
     "$f'(0)=\\ln2\\Rightarrow f(x)=2^x\\Rightarrow f(10)=\\boxed{1024}$."
    ]
   }
  ],
  "remark": "Insight: the multiplicative Cauchy equation has TWO solution families. Forgetting $f\\equiv0$ is the classic point-losing omission; on the nonzero branch the equation forces a pure exponential whose growth rate is exactly $f'(0)$, so the prescribed slope $\\ln 2$ pins down base $2$."
 },
 {
  "theme": "functionaleqdiff",
  "themeLabel": "Differentiable Functional Equations",
  "title": "Turning Products into Sums",
  "difficulty": 4,
  "task": "Determine",
  "tags": [
   "logarithmic-cauchy",
   "domain-positive-reals",
   "derivative-at-1"
  ],
  "statement": "Let $f:(0,\\infty)\\to\\mathbb{R}$ be differentiable with \\[ f(xy)=f(x)+f(y)\\qquad\\text{for all }x,y>0, \\] and $f'(1)=5$. Determine $f(e^{2})$.",
  "answer": "$f(x)=5\\ln x$, so $f(e^{2})=10$.",
  "trap": "Differentiating in $x$ and then setting $x=0$ to invoke $f'(0)$ — but $0$ is not in the domain $(0,\\infty)$, so $f'(0)$ does not exist. The correct anchor here is $x=1$, the multiplicative identity, where $f(1)=0$, not $x=0$.",
  "solutions": [
   {
    "name": "Differentiate in $x$, fix the multiplier",
    "steps": [
     "Set $x=y=1$: $f(1)=2f(1)\\Rightarrow f(1)=0$.",
     "Differentiate $f(xy)=f(x)+f(y)$ with respect to $x$ (treat $y$ as a constant): $y\\,f'(xy)=f'(x)$.",
     "Put $x=1$: $y\\,f'(y)=f'(1)=5$, so $f'(y)=5/y$ for every $y>0$.",
     "Integrate with the initial value $f(1)=0$: $f(y)=5\\ln y$.",
     "Hence $f(e^2)=5\\cdot 2=\\boxed{10}$."
    ]
   },
   {
    "name": "Reduce to additive Cauchy by substitution",
    "steps": [
     "Let $g(t)=f(e^{t})$ for $t\\in\\mathbb{R}$; then $g(s+t)=f(e^{s}e^{t})=f(e^{s})+f(e^{t})=g(s)+g(t)$.",
     "$g$ is differentiable and additive, so $g$ is linear: $g(t)=g'(0)\\,t$.",
     "Here $g'(0)=\\dfrac{d}{dt}f(e^{t})\\big|_{t=0}=e^{0}f'(e^{0})=f'(1)=5$.",
     "Thus $f(e^{t})=5t$, i.e. $f(x)=5\\ln x$, and $f(e^2)=5\\cdot 2=\\boxed{10}$."
    ]
   },
   {
    "name": "Direct difference quotient anchored at $1$",
    "steps": [
     "For $h$ small write $f(x+h)=f\\!\\left(x\\cdot\\bigl(1+\\tfrac{h}{x}\\bigr)\\right)=f(x)+f\\!\\left(1+\\tfrac{h}{x}\\right)$.",
     "Therefore $\\dfrac{f(x+h)-f(x)}{h}=\\dfrac{f(1+h/x)-f(1)}{h}=\\dfrac{1}{x}\\cdot\\dfrac{f(1+h/x)-f(1)}{h/x}$.",
     "As $h\\to 0$ the last factor $\\to f'(1)=5$, so $f'(x)=\\dfrac{5}{x}$.",
     "Integrate using $f(1)=0$ to get $f(x)=5\\ln x$, whence $f(e^2)=\\boxed{10}$."
    ]
   }
  ],
  "remark": "Insight: on $(0,\\infty)$ the natural base point is $1$, the multiplicative identity, where $f$ vanishes — the exact analogue of $f(0)=0$ for additive Cauchy. Differentiability is essential: without it, additive solutions $g(t)=f(e^{t})$ can be wildly non-linear (Hamel-basis pathologies), so the answer $f(x)=5\\ln x$ would no longer be forced."
 },
 {
  "theme": "functionaleqdiff",
  "themeLabel": "Differentiable Functional Equations",
  "title": "A Parabola in Disguise",
  "difficulty": 4,
  "task": "Find all",
  "tags": [
   "cauchy-plus-bilinear",
   "quadratic",
   "differentiate-the-equation"
  ],
  "statement": "Find all differentiable functions $f:\\mathbb{R}\\to\\mathbb{R}$ obeying \\[ f(x+y)=f(x)+f(y)+2xy\\qquad\\text{for all }x,y, \\] and for the solution with $f'(0)=3$ compute $f(5)$.",
  "answer": "$f(x)=x^{2}+cx$ ($c=f'(0)$); with $c=3$, $f(x)=x^{2}+3x$ and $f(5)=40$.",
  "trap": "Concluding $f$ is quadratic but writing $f(x)=ax^2+bx+e$ with a free constant $e$. Setting $x=y=0$ forces $f(0)=0$, killing the constant term; sloppy bookkeeping leaves a phantom intercept.",
  "solutions": [
   {
    "name": "Differentiate in $y$ at $0$",
    "steps": [
     "$x=y=0$ gives $f(0)=0$.",
     "Differentiate in $y$: $f'(x+y)=f'(y)+2x$; set $y=0$: $f'(x)=f'(0)+2x$.",
     "Integrate with $f(0)=0$: $f(x)=f'(0)x+x^2$.",
     "With $f'(0)=3$: $f(x)=x^2+3x$, so $f(5)=25+15=\\boxed{40}$."
    ]
   },
   {
    "name": "Subtract the known quadratic",
    "steps": [
     "Let $g(x)=f(x)-x^2$. Then $g(x+y)=f(x+y)-(x+y)^2=f(x)+f(y)+2xy-x^2-2xy-y^2=g(x)+g(y)$.",
     "So $g$ is additive and differentiable, hence $g(x)=g'(0)x=f'(0)x$.",
     "Therefore $f(x)=x^2+f'(0)x$.",
     "For $f'(0)=3$, $f(5)=25+15=\\boxed{40}$."
    ]
   },
   {
    "name": "Second difference",
    "steps": [
     "From $f(x+y)+f(0)=f(x)+f(y)+2xy$ and $f(0)=0$, compute $f(x+h)-2f(x)+f(x-h)=2h^2$ (the cross terms collapse).",
     "Dividing by $h^2$ and letting $h\\to0$ shows $f''(x)=2$, constant; with $f'(0)=3,\\ f(0)=0$ this integrates to $f(x)=x^2+3x$.",
     "Hence $f(5)=\\boxed{40}$."
    ]
   }
  ],
  "remark": "Insight: a bilinear correction $2xy$ on the right is the signature of a $+x^2$ term, since $(x+y)^2$ generates exactly the cross term $2xy$."
 },
 {
  "theme": "functionaleqdiff",
  "themeLabel": "Differentiable Functional Equations",
  "title": "Jensen's Straight Line",
  "difficulty": 4,
  "task": "Find all",
  "tags": [
   "jensen",
   "midpoint-convexity",
   "affine",
   "two-data"
  ],
  "statement": "Find all differentiable functions $f:\\mathbb{R}\\to\\mathbb{R}$ satisfying the midpoint relation \\[ f\\!\\left(\\frac{x+y}{2}\\right)=\\frac{f(x)+f(y)}{2}\\qquad\\text{for all }x,y, \\] and determine the unique one with $f(0)=1$ and $f'(0)=4$; report $f(2)$.",
  "answer": "All solutions are affine, $f(x)=ax+b$; the specified one is $f(x)=4x+1$, so $f(2)=9$.",
  "trap": "Differentiating in $y$ and then setting $y=x$ gives $\\tfrac12 f'(x)=\\tfrac12 f'(x)$, a useless tautology. To extract information you must differentiate and then fix $y$ at a constant (e.g. $y=0$), not set $y=x$.",
  "solutions": [
   {
    "name": "Differentiate in $y$, fix $y=0$",
    "steps": [
     "Differentiate both sides in $y$: $\\tfrac12 f'\\!\\big(\\tfrac{x+y}{2}\\big)=\\tfrac12 f'(y)$, i.e. $f'\\!\\big(\\tfrac{x+y}{2}\\big)=f'(y)$.",
     "Set $y=0$: $f'(x/2)=f'(0)$ for all $x$, so $f'$ is the constant $f'(0)=4$.",
     "Integrate: $f(x)=4x+f(0)=4x+1$.",
     "Thus $f(2)=8+1=\\boxed{9}$."
    ]
   },
   {
    "name": "Reduce to Cauchy",
    "steps": [
     "Let $h(x)=f(x)-f(0)$. Putting $y=0$ in the relation gives $f(x/2)=\\tfrac{f(x)+f(0)}{2}$, so $h(x/2)=h(x)/2$.",
     "The midpoint identity then yields $h(x+y)=h(x)+h(y)$ (additive); differentiable Cauchy gives $h(x)=h'(0)\\,x=f'(0)\\,x$.",
     "So $f(x)=f'(0)\\,x+f(0)=4x+1$.",
     "Hence $f(2)=\\boxed{9}$."
    ]
   },
   {
    "name": "Constant second derivative",
    "steps": [
     "The relation says the value at a midpoint equals the average of the endpoints, exactly the affine condition on every interval.",
     "Differentiating twice (using differentiability) gives $f''\\equiv0$, so $f(x)=ax+b$.",
     "Matching $f(0)=1$ and $f'(0)=4$ gives $f(x)=4x+1$, so $f(2)=\\boxed{9}$."
    ]
   }
  ],
  "remark": "Insight: Jensen's midpoint equation together with mere continuity already forces affinity; differentiability makes $f''\\equiv0$ transparent. The pitfall is choosing a substitution that self-cancels."
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
  "title": "The Area That Fixes the Rate",
  "difficulty": 5,
  "task": "Find all",
  "tags": [
   "multiplicative",
   "integral-constraint",
   "exponential",
   "grand-hybrid"
  ],
  "statement": "Find all differentiable functions $f:\\mathbb{R}\\to\\mathbb{R}$, not identically zero, satisfying \\[ f(x+y)=f(x)f(y)\\quad\\text{for all }x,y,\\qquad \\int_{0}^{1} f(x)\\,dx=\\frac{e^{2}-1}{2}. \\] Determine the value of $f'(0)$.",
  "answer": "$f(x)=e^{2x}$ is forced, so $f'(0)=2$.",
  "trap": "Solving $\\int_0^1 e^{cx}dx=\\frac{e^c-1}{c}=\\frac{e^2-1}{2}$ and concluding $c$ could be many values. The function $\\frac{e^c-1}{c}$ is strictly increasing, so $c=2$ is the unique root — don't assume nonuniqueness.",
  "solutions": [
   {
    "name": "Classify, then pin the constant by the integral",
    "steps": [
     "A nonzero differentiable solution of $f(x+y)=f(x)f(y)$ is $f(x)=e^{cx}$ with $c=f'(0)$ (multiplicative Cauchy + differentiability, $f(0)=1$).",
     "Compute $\\int_0^1 e^{cx}dx=\\frac{e^c-1}{c}$ (and $=1$ if $c=0$).",
     "The map $c\\mapsto\\frac{e^c-1}{c}$ is strictly increasing on $\\mathbb{R}$ (its derivative is positive), so the equation $\\frac{e^c-1}{c}=\\frac{e^2-1}{2}$ has the unique solution $c=2$.",
     "Hence $f(x)=e^{2x}$ and $f'(0)=\\boxed{2}$."
    ]
   },
   {
    "name": "Match the antiderivative form directly",
    "steps": [
     "For $f(x)=e^{cx}$, $\\int_0^1 f=\\frac{e^c-1}{c}$. We need this to equal $\\frac{e^2-1}{2}$.",
     "Rewrite the target: $\\frac{e^2-1}{2}=\\frac{e^{c}-1}{c}$ with the pattern '$c$ in the denominator, $e^c$ in the numerator' — comparing forms gives $c=2$ as a solution.",
     "By strict monotonicity of $\\frac{e^c-1}{c}$ no other $c$ works, so $f(x)=e^{2x}$.",
     "Thus $f'(0)=c=\\boxed{2}$."
    ]
   },
   {
    "name": "Use $f' = cf$ and the Fundamental Theorem",
    "steps": [
     "From $f(x)=e^{cx}$ we have $f'=cf$, so $\\int_0^1 f\\,dx=\\frac1c\\int_0^1 f'\\,dx=\\frac{f(1)-f(0)}{c}=\\frac{e^c-1}{c}$.",
     "Set equal to $\\frac{e^2-1}{2}$; uniqueness (monotonicity) gives $c=2$.",
     "Therefore $f(x)=e^{2x}$ and $f'(0)=\\boxed{2}$."
    ]
   }
  ],
  "remark": "Insight: the functional equation supplies the family ($e^{cx}$) and the integral supplies the one missing parameter. Monotonicity of $\\frac{e^c-1}{c}$ guarantees the datum picks out a single rate."
 },
 {
  "theme": "smoothness",
  "themeLabel": "Higher Derivatives & Smoothness",
  "title": "The Oscillator That Climbs One Step",
  "difficulty": 4,
  "task": "Determine",
  "tags": [
   "c1-class",
   "oscillation",
   "derivative-continuity",
   "twice-differentiable"
  ],
  "statement": "Define $f:\\mathbb{R}\\to\\mathbb{R}$ by\n\\[\nf(x)=\\begin{cases} x^{4}\\sin\\!\\frac{1}{x}, & x\\neq 0,\\\\[2mm] 0, & x=0.\\end{cases}\n\\]\nDetermine the largest integer $k$ such that $f\\in C^{k}(\\mathbb{R})$ (i.e. $f$ has continuous derivatives up to order $k$ everywhere), and state whether $f$ is twice differentiable at $0$.",
  "answer": "The largest $k$ is $\\boxed{k=1}$: $f$ is $C^{1}$ on all of $\\mathbb{R}$ but $f''$ is not continuous at $0$, so $f\\notin C^{2}$. Nevertheless $f$ IS twice differentiable at $0$, with $f''(0)=0$. The obstruction at order $2$ is not the existence of $f''(0)$ but the discontinuity of $f''$ there: $\\lim_{x\\to0}f''(x)$ fails because $f''(x)=12x^{2}\\sin\\frac1x-6x\\cos\\frac1x-\\sin\\frac1x$ contains the bounded-but-non-vanishing term $-\\sin\\frac1x$. So $f$ is twice differentiable everywhere yet only once continuously differentiable.",
  "trap": "There are two seductive wrong turns. (1) ``High power $x^4$ means more smoothness, surely $C^2$ or better'' --- false, because the $\\sin\\frac1x$ that survives in $f''$ kills continuity. (2) The opposite over-correction: ``$f$ is not even twice differentiable at $0$.'' This is the more subtle trap: one writes the difference quotient for $f''(0)$ as $4h^{2}\\sin\\frac1h-\\cos\\frac1h$ (dropping a factor of $h$ on the cosine term) and concludes the $-\\cos\\frac1h$ oscillates. But the correct quotient is $\\frac{f'(h)-f'(0)}{h}=4h^{2}\\sin\\frac1h-h\\cos\\frac1h$, and $h\\cos\\frac1h\\to0$, so $f''(0)=0$ exists. The function $x^{4}\\sin\\frac1x$ is the textbook example of ``twice differentiable everywhere but not $C^{2}$'': differentiability of $f''$ at a point and continuity of $f''$ are genuinely different conditions.",
  "solutions": [
   {
    "name": "Direct difference quotients, computed honestly",
    "steps": [
     "For $x\\neq0$, the product rule gives $f'(x)=4x^{3}\\sin\\frac1x-x^{2}\\cos\\frac1x$.",
     "At $0$: $f'(0)=\\lim_{h\\to0}\\frac{h^{4}\\sin(1/h)}{h}=\\lim_{h\\to0}h^{3}\\sin\\frac1h=0$, since $|h^{3}\\sin\\frac1h|\\le|h|^{3}$.",
     "$f'$ is continuous at $0$: $|f'(x)|\\le4|x|^{3}+|x|^{2}\\to0=f'(0)$. Combined with smoothness away from $0$, this gives $f\\in C^{1}(\\mathbb{R})$.",
     "Now test second differentiability at $0$. The correct difference quotient is $\\frac{f'(h)-f'(0)}{h}=\\frac{4h^{3}\\sin\\frac1h-h^{2}\\cos\\frac1h}{h}=4h^{2}\\sin\\frac1h-h\\cos\\frac1h$. Both terms are bounded by $4h^{2}$ and $|h|$ respectively, so the limit is $0$. Hence $f''(0)=0$ EXISTS; $f$ is twice differentiable at $0$.",
     "Finally test continuity of $f''$. For $x\\neq0$, $f''(x)=12x^{2}\\sin\\frac1x-6x\\cos\\frac1x-\\sin\\frac1x$. The first two terms vanish as $x\\to0$, but $-\\sin\\frac1x$ does not: along $x_n=\\tfrac{2}{(4n+1)\\pi}$ it tends to $-1$, along $x_n=\\tfrac{2}{(4n+3)\\pi}$ to $+1$. So $\\lim_{x\\to0}f''(x)$ does not exist and cannot equal $f''(0)=0$.",
     "Therefore $f''$ is discontinuous at $0$, $f\\notin C^{2}$, and the largest $k$ with $f\\in C^{k}(\\mathbb{R})$ is $\\boxed{k=1}$ --- while $f$ is nonetheless twice differentiable everywhere."
    ]
   },
   {
    "name": "Power-counting bookkeeping",
    "steps": [
     "Differentiating $g_n(x)=x^{n}\\sin\\frac1x$ once produces $n x^{n-1}\\sin\\frac1x-x^{n-2}\\cos\\frac1x$: each derivative lowers the leading exponent by $1$ and reintroduces a bounded oscillating factor.",
     "For $f=g_4$: $f'$ has lowest-order term $-x^{2}\\cos\\frac1x\\to0$, so $f'$ is continuous --- order $1$ survives cleanly.",
     "Differentiating again, the lowest-order term becomes $\\sim x^{0}\\sin\\frac1x=-\\sin\\frac1x$. An $x^{0}$ oscillating term is bounded, so the $f''(0)$ difference quotient (which carries an extra $1/h\\cdot h^{?}$ factor making the offending term $\\sim h^{1}\\cos\\frac1h$) still tends to $0$: $f''(0)$ exists.",
     "But that same $x^{0}\\sin\\frac1x$ term sits in $f''(x)$ for $x\\neq0$ with constant amplitude, so $f''$ cannot be continuous at $0$. Smoothness therefore stops at $k=1$, confirming $\\boxed{k=1}$ while leaving $f$ twice differentiable at $0$.",
     "General dial: $x^{2m}\\sin\\frac1x$ is $m$-times differentiable everywhere with $f^{(m)}(0)=0$, yet $f^{(m)}$ is discontinuous at $0$ --- so it is exactly $C^{m-1}$. Here $2m=4\\Rightarrow m=2$: twice differentiable, $C^{1}$, not $C^{2}$."
    ]
   }
  ],
  "remark": "Insight: the family $x^{2m}\\sin\\frac1x$ is the universal dial for ``barely smooth.'' It is $m$-times differentiable on all of $\\mathbb{R}$ with $f^{(m)}(0)=0$, but $f^{(m)}$ fails to be continuous at $0$, so the function lands in $C^{m-1}\\setminus C^{m}$. The deep lesson is the gap between two notions: \\emph{$f^{(m)}(0)$ existing} (a one-point limit of difference quotients, helped by the extra power of $h$) versus \\emph{$f^{(m)}$ being continuous} (a limit of nearby derivative values, with no such help). For $2m=4$ this is the classic counterexample: twice differentiable everywhere, yet only once continuously differentiable."
 },
 {
  "theme": "smoothness",
  "themeLabel": "Higher Derivatives & Smoothness",
  "title": "A Velocity Without Monotonicity",
  "difficulty": 5,
  "task": "Prove that",
  "tags": [
   "c1-class",
   "positive-derivative",
   "not-monotone",
   "oscillation"
  ],
  "statement": "Let\n\\[\nf(x)=\\begin{cases}\\dfrac{x}{2}+x^{2}\\sin\\!\\dfrac{1}{x}, & x\\neq0,\\\\[3mm] 0, & x=0.\\end{cases}\n\\]\nProve that $f$ is differentiable everywhere with $f'(0)=\\tfrac12>0$, yet $f$ is NOT monotonically increasing on any interval $(0,\\delta)$ no matter how small. Conclude that $f'$ is discontinuous at $0$.",
  "answer": "proved",
  "trap": "Assuming $f'(0)>0$ forces $f$ to be increasing in some neighbourhood of $0$. That implication needs $f'$ to be CONTINUOUS at $0$ (or $f'\\ge0$ on a whole interval). Here $f'(0)=\\tfrac12$ but $f'$ itself takes negative values arbitrarily close to $0$, so positivity of the derivative AT a point gives no neighbourhood of monotonicity.",
  "solutions": [
   {
    "name": "Compute the derivative and exhibit negative slopes",
    "steps": [
     "$f'(0)=\\lim_{h\\to0}\\frac{f(h)}{h}=\\lim_{h\\to0}\\big(\\tfrac12+h\\sin\\tfrac1h\\big)=\\tfrac12$, since $|h\\sin\\tfrac1h|\\le|h|\\to0$.",
     "For $x\\neq0$, $f'(x)=\\tfrac12+2x\\sin\\tfrac1x-\\cos\\tfrac1x$.",
     "At $x_n=\\frac1{2n\\pi}$ we have $\\sin\\tfrac1{x_n}=0,\\ \\cos\\tfrac1{x_n}=1$, so $f'(x_n)=\\tfrac12+0-1=-\\tfrac12<0$.",
     "By continuity of $f'$ away from $0$, $f'<0$ on a whole open interval $I_n\\ni x_n$, and $x_n\\to0^{+}$; thus every $(0,\\delta)$ contains some $I_n$ on which $f$ is strictly decreasing.",
     "Therefore $f$ is not monotone increasing on any $(0,\\delta)$. $\\blacksquare$"
    ]
   },
   {
    "name": "Discontinuity of $f'$ as the obstruction",
    "steps": [
     "From $f'(x)=\\tfrac12+2x\\sin\\tfrac1x-\\cos\\tfrac1x$, the term $\\cos\\tfrac1x$ oscillates in $[-1,1]$ as $x\\to0$, so $\\lim_{x\\to0}f'(x)$ does not exist; thus $f'$ is discontinuous at $0$ (an essential, oscillatory discontinuity).",
     "The theorem ``$f'(c)>0\\Rightarrow f$ increasing near $c$'' fails precisely because it presumes $f'$ keeps its sign near $c$, which requires continuity of $f'$.",
     "Concretely $f'$ dips to $\\tfrac12-1=-\\tfrac12$ infinitely often near $0$, producing infinitely many local descents.",
     "Hence no one-sided neighbourhood of $0$ is a monotonicity interval, and $f'$ is discontinuous at $0$. $\\blacksquare$"
    ]
   }
  ],
  "remark": "Insight: ``positive derivative at a point'' and ``increasing near that point'' are distinct claims; the bridge between them is continuity of $f'$. This is the canonical counterexample dismantling that confusion."
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
  "title": "Leibniz Counts to Twenty",
  "difficulty": 4,
  "task": "Evaluate",
  "tags": [
   "leibniz",
   "nth-derivative",
   "product-rule",
   "exponential"
  ],
  "statement": "Let $f(x)=x^{2}e^{x}$. Using the Leibniz rule for the $n$-th derivative of a product, find a closed form for $f^{(n)}(x)$, and hence evaluate $f^{(20)}(0)$.",
  "answer": "$f^{(n)}(x)=\\big(x^{2}+2n\\,x+n(n-1)\\big)e^{x}$, so $f^{(20)}(0)=20\\cdot19=380$.",
  "trap": "Applying the ordinary product rule once and then ``raising to the $n$'' or forgetting that the binomial sum truncates. Because $\\frac{d^k}{dx^k}x^2=0$ for $k\\ge3$, only $k=0,1,2$ survive — a common slip is to keep spurious higher terms or to mis-weight the $\\binom n1,\\binom n2$ coefficients.",
  "solutions": [
   {
    "name": "Leibniz rule with truncation",
    "steps": [
     "Leibniz: $f^{(n)}=\\sum_{k=0}^{n}\\binom nk\\,(x^2)^{(k)}\\,(e^x)^{(n-k)}$, and $(e^x)^{(n-k)}=e^x$.",
     "Only $k=0,1,2$ give nonzero $(x^2)^{(k)}$: namely $x^2,\\ 2x,\\ 2$ respectively.",
     "So $f^{(n)}=e^x\\Big[\\binom n0 x^2+\\binom n1(2x)+\\binom n2(2)\\Big]=e^x\\big[x^2+2nx+n(n-1)\\big]$.",
     "At $x=0$: $f^{(n)}(0)=n(n-1)$, hence $f^{(20)}(0)=20\\cdot19=\\boxed{380}$."
    ]
   },
   {
    "name": "Maclaurin coefficient read-off",
    "steps": [
     "$x^2e^x=x^2\\sum_{j\\ge0}\\frac{x^j}{j!}=\\sum_{j\\ge0}\\frac{x^{j+2}}{j!}$, so the coefficient of $x^{20}$ corresponds to $j+2=20$, i.e. $j=18$, giving $\\frac{1}{18!}$.",
     "By Taylor's theorem the coefficient of $x^{20}$ equals $\\frac{f^{(20)}(0)}{20!}$.",
     "Thus $\\frac{f^{(20)}(0)}{20!}=\\frac1{18!}\\Rightarrow f^{(20)}(0)=\\frac{20!}{18!}=20\\cdot19=\\boxed{380}$.",
     "This matches the Leibniz formula's $n(n-1)$ at $n=20$."
    ]
   }
  ],
  "remark": "Insight: multiplying $e^x$ by a degree-$d$ polynomial truncates the Leibniz sum to $d+1$ terms — the whole spectrum of derivatives lives in a fixed-width window, which is why $f^{(n)}(0)=n(n-1)$ is a clean quadratic in $n$."
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
  "title": "Reading a Derivative Off the Series",
  "difficulty": 4,
  "task": "Evaluate",
  "tags": [
   "maclaurin",
   "geometric-series",
   "nth-derivative",
   "coefficient-readoff"
  ],
  "statement": "Let $f(x)=\\dfrac{x^{3}}{1-2x}$, analytic near $0$. Without differentiating ten times by hand, evaluate $f^{(10)}(0)$.",
  "answer": "$f^{(10)}(0)=10!\\cdot 2^{7}=128\\cdot 3628800=464486400$.",
  "trap": "Reaching for the quotient rule and grinding through ten derivatives — error-prone and slow. Worse, forgetting the factor $n!$ that converts a Maclaurin coefficient $a_n$ into $f^{(n)}(0)=n!\\,a_n$.",
  "solutions": [
   {
    "name": "Geometric expansion and coefficient extraction",
    "steps": [
     "For $|x|<\\tfrac12$, $\\frac1{1-2x}=\\sum_{k\\ge0}(2x)^k$, so $f(x)=x^3\\sum_{k\\ge0}2^k x^k=\\sum_{k\\ge0}2^k x^{k+3}$.",
     "The coefficient of $x^{10}$ comes from $k+3=10\\Rightarrow k=7$, giving $a_{10}=2^{7}=128$.",
     "Taylor's theorem: $f^{(10)}(0)=10!\\,a_{10}=3628800\\cdot128$.",
     "Hence $f^{(10)}(0)=\\boxed{464486400}$."
    ]
   },
   {
    "name": "Recursion via the functional relation",
    "steps": [
     "From $(1-2x)f(x)=x^3$, write $f(x)=\\sum a_n x^n$; matching coefficients gives $a_n-2a_{n-1}=[n=3]$.",
     "For $n\\ge4$: $a_n=2a_{n-1}$, with $a_3=1$ (from the $x^3$ on the right).",
     "Thus $a_n=2^{n-3}$ for $n\\ge3$, so $a_{10}=2^{7}=128$.",
     "$f^{(10)}(0)=10!\\cdot128=\\boxed{464486400}$."
    ]
   }
  ],
  "remark": "Insight: a rational function's Taylor coefficients obey a linear recursion read straight from the denominator; the $n!$ bridge turns ``coefficient hunting'' into ``derivative evaluation'' instantly."
 },
 {
  "theme": "smoothness",
  "themeLabel": "Higher Derivatives & Smoothness",
  "title": "The Removable Singularity's Hidden Curvature",
  "difficulty": 4,
  "task": "Find a,b",
  "tags": [
   "removable-singularity",
   "maclaurin",
   "analytic-extension",
   "higher-derivative"
  ],
  "statement": "Define $g(x)=\\dfrac{e^{x}-1-x}{x^{2}}$ for $x\\neq0$. Find the value $g(0)$ that makes $g$ continuous at $0$, prove that the resulting $g$ is in fact $C^{\\infty}$ near $0$, and evaluate $g''(0)$ and $g^{(4)}(0)$.",
  "answer": "$g(0)=\\tfrac12$ makes $g$ analytic (hence $C^{\\infty}$) at $0$; $g''(0)=\\tfrac1{12}$ and $g^{(4)}(0)=\\tfrac1{30}$.",
  "trap": "Treating $g$ as merely ``continuous after patching'' and trying to compute $g''(0)$ from raw difference quotients of the messy quotient. The clean route is recognizing the numerator's series starts at $x^2$, so $g$ extends to an entire function and its derivatives are just $k!$ times Maclaurin coefficients.",
  "solutions": [
   {
    "name": "Maclaurin series of the patched function",
    "steps": [
     "$e^x-1-x=\\sum_{k\\ge2}\\frac{x^k}{k!}$, so $g(x)=\\sum_{k\\ge2}\\frac{x^{k-2}}{k!}=\\frac1{2!}+\\frac{x}{3!}+\\frac{x^2}{4!}+\\frac{x^3}{5!}+\\cdots$.",
     "The constant term is $\\frac1{2!}=\\tfrac12$, so $g(0)=\\tfrac12$ removes the singularity; the series is everywhere convergent, so $g$ is entire, hence $C^\\infty$.",
     "Coefficient of $x^2$ is $\\frac1{4!}=\\frac1{24}$, so $g''(0)=2!\\cdot\\frac1{24}=\\frac1{12}$.",
     "Coefficient of $x^4$ is $\\frac1{6!}=\\frac1{720}$, so $g^{(4)}(0)=4!\\cdot\\frac1{720}=\\frac{24}{720}=\\frac1{30}$.",
     "Thus $g(0)=\\tfrac12,\\ g''(0)=\\boxed{\\tfrac1{12}},\\ g^{(4)}(0)=\\boxed{\\tfrac1{30}}$."
    ]
   },
   {
    "name": "General coefficient formula",
    "steps": [
     "From $g(x)=\\sum_{k\\ge2}\\frac{x^{k-2}}{k!}=\\sum_{n\\ge0}\\frac{x^{n}}{(n+2)!}$, the $n$-th Maclaurin coefficient is $a_n=\\frac1{(n+2)!}$.",
     "Therefore $g^{(n)}(0)=n!\\,a_n=\\frac{n!}{(n+2)!}=\\frac1{(n+1)(n+2)}$.",
     "At $n=0$: $g(0)=\\frac1{1\\cdot2}=\\tfrac12$; at $n=2$: $g''(0)=\\frac1{3\\cdot4}=\\frac1{12}$; at $n=4$: $g^{(4)}(0)=\\frac1{5\\cdot6}=\\frac1{30}$.",
     "All values confirmed: $\\boxed{g''(0)=\\tfrac1{12},\\ g^{(4)}(0)=\\tfrac1{30}}$."
    ]
   }
  ],
  "remark": "Insight: a removable singularity is invisible to the power series — if the numerator's expansion starts high enough, dividing just shifts indices, turning a scary quotient into an entire function with a tidy closed form $g^{(n)}(0)=\\frac1{(n+1)(n+2)}$."
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
  "title": "The Curve of Constant Subnormal",
  "difficulty": 3,
  "task": "Classify",
  "tags": [
   "subnormal",
   "subtangent",
   "differential equation",
   "classification"
  ],
  "statement": "For a curve $y=f(x)$, recall the **subtangent** $y/y'$ and the **subnormal** $y\\,y'$.\n(a) Classify all curves whose subnormal is the constant $k$, and all curves whose subtangent is the constant $k$ ($k\\neq0$).\n(b) Find the particular curve with constant subnormal $2$ passing through $(0,3)$, and state where it crosses the $x$-axis.",
  "answer": "(a) Constant subnormal $\\Rightarrow$ **parabolas** $y^{2}=2kx+C$; constant subtangent $\\Rightarrow$ **exponentials** $y=Ce^{x/k}$.\n(b) $y^{2}=4x+9$, a parabola crossing the $x$-axis at $\\left(-\\tfrac{9}{4},\\,0\\right)$.",
  "trap": "Swapping the two: setting $y\\,y'=k$ for the *subtangent* (it is actually the subnormal) gives a parabola where the problem wanted an exponential, and vice versa. The defining ratios $y/y'$ (subtangent) and $y\\,y'$ (subnormal) must be kept straight, including the sign/branch when taking the square root in (b).",
  "solutions": [
   {
    "name": "Separable ODEs",
    "steps": [
     "Constant subnormal: $y\\,y'=k\\Rightarrow y\\,dy=k\\,dx\\Rightarrow \\tfrac{y^{2}}{2}=kx+\\text{const}$, i.e. $y^{2}=2kx+C$ — a family of parabolas.",
     "Constant subtangent: $y/y'=k\\Rightarrow \\dfrac{dy}{y}=\\dfrac{dx}{k}\\Rightarrow \\ln|y|=\\tfrac{x}{k}+\\text{const}$, i.e. $y=Ce^{x/k}$ — exponentials.",
     "For (b) take $k=2$: $y^{2}=4x+C$. Impose $(0,3)$: $9=C$, so $y^{2}=4x+9$.",
     "Set $y=0$: $x=-9/4$. $\\boxed{y^{2}=4x+9,\\ \\text{crossing at }(-9/4,0).}$"
    ]
   },
   {
    "name": "Direct check of the candidate",
    "steps": [
     "Guess $y^{2}=4x+9$. Differentiate: $2yy'=4\\Rightarrow y\\,y'=2$, constant — so the subnormal is indeed $2$.",
     "It passes through $(0,3)$ since $9=0+9$.",
     "The general constant-subnormal curve is therefore $y^{2}=2kx+C$ (parabola); the constant-subtangent analogue $y/y'=k$ integrates to $y=Ce^{x/k}$ (exponential).",
     "Axis crossing: $0=4x+9\\Rightarrow x=-9/4$. $\\boxed{(-9/4,0)}$"
    ]
   }
  ],
  "remark": "Constant subnormal and constant subtangent are the two cleanest geometric constraints in the whole subject — one bends every curve into a parabola, the other into an exponential. Knowing which is which is half the battle."
 },
 {
  "theme": "tangent",
  "themeLabel": "Tangents, Normals & Curves",
  "title": "Where a Tangent Strikes the Curve Again",
  "difficulty": 3,
  "task": "Prove that",
  "tags": [
   "tangent",
   "cubic",
   "meets again",
   "double root",
   "vieta"
  ],
  "statement": "Let $\\mathcal{C}:\\;y=x^{3}-x$. The tangent to $\\mathcal{C}$ at a point with abscissa $a$ meets the curve again at a point with abscissa $b$.\n\\[\\text{Prove that } b=-2a \\text{ for every } a, \\text{ and find the contact and second-meeting points when } a=2.\\]",
  "answer": "$b=-2a$ for all $a$. For $a=2$: the tangent touches at $(2,6)$ and meets the curve again at $(-4,-60)$.",
  "trap": "Solving the intersection cubic as if all three roots are unknown and free. In fact $x=a$ is a double root of the contact equation (tangency), so the cubic factors as $(x-a)^{2}(x-b)$; Vieta on the (absent) $x^{2}$-term forces $2a+b=0$ instantly. Forgetting the double root makes the algebra needlessly heavy and invites errors.",
  "solutions": [
   {
    "name": "Double root + Vieta",
    "steps": [
     "With $f(x)=x^{3}-x$, the tangent at $a$ is $T(x)=f(a)+f'(a)(x-a)$. Intersections solve $f(x)-T(x)=0$, a cubic with leading term $x^{3}$ and zero $x^{2}$-coefficient (subtracting a linear function cannot create an $x^{2}$ term).",
     "Tangency means $x=a$ is a repeated root, so $f(x)-T(x)=(x-a)^{2}(x-b)$.",
     "The sum of the three roots equals minus the $x^{2}$-coefficient, which is $0$, so $a+a+b=0\\Rightarrow b=-2a$.",
     "For $a=2$: contact $(2,\\,2^{3}-2)=(2,6)$; second point at $b=-4$, namely $(-4,\\,(-4)^{3}-(-4))=(-4,-60)$. $\\boxed{b=-2a}$"
    ]
   },
   {
    "name": "Direct factorization",
    "steps": [
     "$f(x)-T(x)=x^{3}-x-\\big[(a^{3}-a)+(3a^{2}-1)(x-a)\\big]=x^{3}-3a^{2}x+2a^{3}$.",
     "Check $x=a$ is a double root: both the expression and its derivative $3x^{2}-3a^{2}$ vanish at $x=a$.",
     "Factor: $x^{3}-3a^{2}x+2a^{3}=(x-a)^{2}(x+2a)$, so the third intersection is $x=-2a$.",
     "Hence $b=-2a$; at $a=2$ this gives the contact point $(2,6)$ and second meeting $(-4,-60)$. $\\boxed{b=-2a}$"
    ]
   }
  ],
  "remark": "The slope drops out entirely: the relation $b=-2a$ is identical to the one for $y=x^{3}$, because adding the linear term $-x$ shifts the curve without changing the $x^{2}$-coefficient of the contact cubic. The only degenerate case is $a=0$ (the inflection point), where $b=-2a=0=a$ and the tangent meets the curve nowhere else."
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
  "statement": "The parabolas $y=x^{2}$ and $x=y^{2}$ intersect at two points.\n\\[\\text{Find the angle of intersection at } \\textbf{each} \\text{ crossing point.}\\]",
  "answer": "At the origin $(0,0)$ the curves meet at $90^{\\circ}$ (orthogonally). At $(1,1)$ the acute angle is $\\arctan\\dfrac{3}{4}\\approx36.87^{\\circ}$.",
  "trap": "Computing only one angle (usually at $(1,1)$) and assuming the intersection is the same everywhere — or mishandling the origin, where one curve has a horizontal tangent and the other a \\textbf{vertical} tangent, so the slope formula $\\tan\\theta=\\left|\\frac{m_1-m_2}{1+m_1m_2}\\right|$ breaks down (the product $m_1m_2$ in the denominator is undefined). The angle there is exactly $90^{\\circ}$, not $\\arctan\\tfrac34$.",
  "solutions": [
   {
    "name": "Slopes at each point",
    "steps": [
     "Solve $x^{2}=y$ and $y^{2}=x$ simultaneously: substituting $y=x^2$ into $x=y^2$ gives $x=x^{4}$, so $x(x^{3}-1)=0$, giving the crossing points $(0,0)$ and $(1,1)$.",
     "Differentiate each curve: for $y=x^{2}$, $y'=2x$; for $x=y^{2}$, $1=2yy'\\Rightarrow y'=\\dfrac{1}{2y}$.",
     "At $(1,1)$: $m_1=2$ and $m_2=\\tfrac12$, so $\\tan\\theta=\\left|\\dfrac{2-\\tfrac12}{1+2\\cdot\\tfrac12}\\right|=\\dfrac{3/2}{2}=\\dfrac{3}{4}$, giving $\\theta=\\arctan\\tfrac34\\approx36.87^{\\circ}$.",
     "At $(0,0)$: $y=x^{2}$ has slope $0$ (a horizontal tangent, the $x$-axis), while $x=y^{2}$ has $\\dfrac{dx}{dy}=2y=0$, i.e. a \\textbf{vertical} tangent (the $y$-axis). A horizontal line and a vertical line meet at $90^{\\circ}$. $\\boxed{90^{\\circ}\\text{ and }\\arctan\\tfrac34}$"
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
  "statement": "The \\textbf{length of the normal} at a point $(x,y)$ of a curve $y=f(x)$ is the length of the normal segment from the point to where it meets the $x$-axis, namely $|y|\\sqrt{1+y'^{2}}$.\n\\[\\text{Find every curve whose normal length equals a fixed constant } a>0 \\text{ at all of its points.}\\]",
  "answer": "$y^{2}(1+y'^{2})=a^{2}$. The general (regular) solutions are the circles $(x-c)^{2}+y^{2}=a^{2}$ of radius $a$ centred on the $x$-axis; in addition there are the two \\textbf{singular} solutions $y=a$ and $y=-a$ (horizontal lines), which form the envelope of that circle family. These are all of them.",
  "trap": "Concluding that the circles $(x-c)^{2}+y^{2}=a^{2}$ are the \\textbf{only} solutions. The separable integration delivers the one-parameter family of circles but silently loses the two horizontal lines $y=\\pm a$: putting $y'=0$ in $y^{2}(1+y'^{2})=a^{2}$ already forces $y=\\pm a$, and those lines satisfy the equation identically without belonging to the circle family. They are genuine \\textbf{singular solutions} — the envelope along which all the circles are tangent — so 'only circles' is incomplete.",
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
  "remark": "A first-order ODE can hide a solution that no value of the integration constant reproduces: the \\textbf{singular solution}, which here is the envelope $y=\\pm a$ of the circle family. The circle earns its 'constant normal length' the obvious way — the normal segment is literally a radius of length $a$ at every point — while the two horizontal lines earn it the sneaky way, with a vertical normal of height $a$. Dividing by $y'$ during separation is exactly the step that drops them, a standard trap in normal/tangent-length differential equations."
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
  "answer": "Let $g(a)=e^{a}(1-a)$, the $y$-intercept of the tangent touching $\\mathcal{C}$ at $x=a$; it has maximum value $1$ (at $a=0$). Hence the number of tangents from $(0,c)$ is\n\\[\\begin{cases}0,& c>1,\\\\[2pt]1,& c=1\\ \\text{or}\\ c\\le 0,\\\\[2pt]2,& 0<c<1.\\end{cases}\\]",
  "trap": "Assuming a convex curve like $y=e^{x}$ admits at most one tangent from any external point. The contact condition $c=e^{a}(1-a)$ is transcendental and \\textbf{non-monotonic} (it rises to $1$ at $a=0$, then falls), so for $0<c<1$ there are two tangents, and for $c>1$ there are none — the naive 'always one' answer is wrong on both ends.",
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
  "title": "The Cubic That Pauses but Never Turns",
  "difficulty": 3,
  "task": "Prove that",
  "tags": [
   "cubic",
   "monotonicity",
   "inflection",
   "derivative-sign"
  ],
  "statement": "Let $f(x)=x^{3}-3x^{2}+3x+7$. Prove that $f$ is strictly increasing on all of $\\mathbb{R}$, and determine the nature of the point $x=1$ where $f'(1)=0$.",
  "answer": "$f$ is strictly increasing on $\\mathbb{R}$; $x=1$ is a (horizontal) inflection point, NOT an extremum. (Exactly one real root, at $x=-1$.)",
  "trap": "Seeing $f'(1)=0$ and declaring $x=1$ a local max or min. It is not: $f'(x)=3(x-1)^2\\ge 0$ keeps the same sign on both sides, so $f$ keeps rising and $x=1$ is merely a flat inflection (like $x^3$ at $0$).",
  "solutions": [
   {
    "name": "Sign of the derivative",
    "steps": [
     "Differentiate: $f'(x)=3x^{2}-6x+3=3(x-1)^{2}$.",
     "Since a square is $\\ge 0$, $f'(x)\\ge 0$ for all $x$, with $f'(x)=0$ only at the isolated point $x=1$.",
     "A function whose derivative is $\\ge 0$ everywhere and $=0$ only at isolated points is strictly increasing; hence $f$ is strictly increasing on $\\mathbb{R}$.",
     "Because $f'$ does not change sign at $x=1$, the first-derivative test gives neither a max nor a min there: $\\boxed{x=1\\text{ is an inflection, not an extremum}}$."
    ]
   },
   {
    "name": "Reduction to a perfect cube",
    "steps": [
     "Complete the cube: $x^3-3x^2+3x = (x-1)^3+1$, so $f(x)=(x-1)^{3}+8$.",
     "The map $t\\mapsto t^{3}$ is strictly increasing on $\\mathbb{R}$; composing with the increasing shift $t=x-1$ keeps it strictly increasing, then adding $8$ does not change monotonicity.",
     "Hence $f$ is strictly increasing, and at $x=1$ (i.e. $t=0$) we have the flat point of $t^3$, a horizontal inflection, $\\boxed{\\text{not an extremum}}$."
    ]
   },
   {
    "name": "Root count corollary",
    "steps": [
     "A strictly increasing continuous function is injective, so $f(x)=0$ has at most one real solution; since a cubic has at least one real root, it has exactly one.",
     "This is consistent with $f(x)=(x-1)^3+8=0\\Rightarrow x-1=-2\\Rightarrow x=-1$, the unique real root.",
     "The single root and the flat point at $x=1$ together confirm the curve never turns: $\\boxed{\\text{strictly increasing, } x=1 \\text{ an inflection}}$."
    ]
   }
  ],
  "remark": "Insight: $f'(c)=0$ is necessary but not sufficient for an extremum. What matters is whether $f'$ changes sign at $c$ — for $(x-1)^2$ it does not, so the slope dips to zero and recovers, producing a plateau rather than a peak. Confirmation via the second-derivative trail: $f''(x)=6x-6$ vanishes at $x=1$ while $f'''(1)=6\\ne 0$, the textbook signature of an inflection."
 },
 {
  "theme": "monotonic",
  "themeLabel": "Monotonicity & Extrema",
  "title": "Tuning a Cubic to Never Decrease",
  "difficulty": 4,
  "task": "Find all",
  "statement": "Find all real values of the parameter $a$ for which $f(x)=x^{3}+ax^{2}+3x+1$ is increasing on the whole real line.",
  "answer": "$a\\in[-3,\\,3]$.",
  "trap": "Demanding the strict inequality $f'(x)>0$ for ALL $x$ and therefore requiring the discriminant to be strictly negative, which would wrongly drop the endpoints $a=\\pm 3$. At $a=\\pm3$, $f'$ is a perfect square touching $0$ at one isolated point, which still leaves $f$ (strictly) increasing.",
  "tags": [
   "parameter",
   "quadratic-discriminant",
   "monotone",
   "endpoints"
  ],
  "solutions": [
   {
    "name": "Discriminant condition",
    "steps": [
     "$f'(x)=3x^{2}+2ax+3$. For $f$ increasing on $\\mathbb{R}$ we need $f'(x)\\ge 0$ for all $x$.",
     "An upward parabola is $\\ge 0$ everywhere iff its discriminant is $\\le 0$: $(2a)^{2}-4\\cdot 3\\cdot 3\\le 0$.",
     "This gives $4a^{2}\\le 36$, i.e. $a^{2}\\le 9$, so $-3\\le a\\le 3$.",
     "Check endpoints: at $a=3$, $f'(x)=3(x+1)^2\\ge 0$ (zero only at $x=-1$), still increasing; similarly $a=-3$. Hence $\\boxed{a\\in[-3,3]}$."
    ]
   },
   {
    "name": "Minimum-of-derivative view",
    "steps": [
     "The minimum value of $f'(x)=3x^{2}+2ax+3$ occurs at $x=-a/3$ and equals $3-\\dfrac{a^{2}}{3}$.",
     "Requiring this minimum $\\ge 0$ gives $3-\\dfrac{a^{2}}{3}\\ge 0\\Rightarrow a^{2}\\le 9$.",
     "Thus $\\boxed{a\\in[-3,3]}$, with the boundary cases giving an isolated zero of $f'$ that does not break monotonicity."
    ]
   }
  ],
  "remark": "Insight: 'increasing' tolerates isolated zeros of $f'$; only a sign change breaks it. That is exactly why the closed interval (including $a=\\pm3$) is correct, not the open one."
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
  "title": "A Quintic With a Hidden Saddle",
  "difficulty": 4,
  "task": "Classify",
  "statement": "For $f(x)=3x^{5}-5x^{3}$, find every critical point and classify each as a local maximum, local minimum, or neither.",
  "answer": "$x=-1$: local maximum $(f=2)$; $x=1$: local minimum $(f=-2)$; $x=0$: neither (a flat inflection / saddle point).",
  "trap": "Plugging the critical point $x=0$ into the second-derivative test, getting $f''(0)=0$, and either declaring it a minimum 'because the test is inconclusive so assume the obvious' or forgetting it entirely. The second-derivative test is silent at $x=0$; the first-derivative test reveals no sign change, so it is neither.",
  "tags": [
   "quintic",
   "critical-points",
   "first-derivative-test",
   "saddle"
  ],
  "solutions": [
   {
    "name": "First-derivative test throughout",
    "steps": [
     "$f'(x)=15x^{4}-15x^{2}=15x^{2}(x-1)(x+1)$, so the critical points are $x=-1,0,1$.",
     "Sign of $f'$: for $x<-1$, $f'>0$; on $(-1,0)$, $f'<0$; on $(0,1)$, $f'<0$; for $x>1$, $f'>0$.",
     "At $x=-1$ the sign goes $+\\to-$: local maximum, $f(-1)=2$. At $x=1$ the sign goes $-\\to+$: local minimum, $f(1)=-2$.",
     "At $x=0$ the sign stays $-$ on both sides (no change), so $x=0$ is neither — a flat inflection: $\\boxed{\\max\\text{ at }-1,\\ \\min\\text{ at }1,\\ \\text{saddle at }0}$."
    ]
   },
   {
    "name": "Second-derivative test + fallback",
    "steps": [
     "$f''(x)=60x^{3}-30x=30x(2x^{2}-1)$. Then $f''(-1)=-30<0\\Rightarrow$ local max at $x=-1$; $f''(1)=30>0\\Rightarrow$ local min at $x=1$.",
     "At $x=0$, $f''(0)=0$, so the test is inconclusive there.",
     "Fall back to the factor $15x^2$ in $f'$: near $0$, $(x-1)(x+1)<0$ dominates and $x^2\\ge0$, so $f'<0$ on both sides of $0$ — no sign change.",
     "Therefore $x=0$ is neither max nor min: $\\boxed{\\max(-1)=2,\\ \\min(1)=-2,\\ x=0\\text{ neither}}$."
    ]
   }
  ],
  "remark": "Insight: The even multiplicity of the factor $x^2$ in $f'$ is the tell — a critical point coming from a squared factor produces a tangent-to-axis touch in $f'$, hence no sign change and no extremum."
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
  "title": "Pin the Peak and the Valley",
  "difficulty": 3,
  "task": "Find a,b",
  "statement": "Find real numbers $a,b$ so that $f(x)=x^{3}+ax^{2}+bx$ has a local maximum at $x=-1$ and a local minimum at $x=3$.",
  "answer": "$a=-3,\\ b=-9$.",
  "trap": "Imposing only $f'(-1)=0$ and $f'(3)=0$ and stopping — that fixes $a,b$, but one must still confirm which critical point is the max and which is the min (it could be reversed). Here the second-derivative test confirms the assignment is consistent, but the check is essential.",
  "tags": [
   "parameter-fitting",
   "critical-points",
   "second-derivative-test",
   "cubic"
  ],
  "solutions": [
   {
    "name": "Roots of the derivative",
    "steps": [
     "$f'(x)=3x^{2}+2ax+b$. The critical points $-1$ and $3$ must be its roots.",
     "Vieta: sum of roots $-1+3=2=-\\dfrac{2a}{3}\\Rightarrow a=-3$; product $(-1)(3)=-3=\\dfrac{b}{3}\\Rightarrow b=-9$.",
     "Check classification: $f''(x)=6x+2a=6x-6$, so $f''(-1)=-12<0$ (max) and $f''(3)=12>0$ (min), matching the requirement.",
     "Hence $\\boxed{a=-3,\\ b=-9}$."
    ]
   },
   {
    "name": "Direct equations",
    "steps": [
     "Set $f'(-1)=3-2a+b=0$ and $f'(3)=27+6a+b=0$.",
     "Subtract: $24+8a=0\\Rightarrow a=-3$; back-substitute: $3+6+b=0\\Rightarrow b=-9$.",
     "Since the leading coefficient of the cubic is positive, the graph rises–falls–rises, so the smaller critical $x=-1$ is the max and $x=3$ the min, as desired.",
     "Therefore $\\boxed{a=-3,\\ b=-9}$."
    ]
   }
  ],
  "remark": "Insight: Vieta's formulas turn 'where are the turning points' into instant relations between coefficients — but a sign check on $f''$ (or the cubic's shape) is what guarantees you placed the max and min on the correct sides."
 },
 {
  "theme": "monotonic",
  "themeLabel": "Monotonicity & Extrema",
  "title": "A Bump That Behaves on a Closed Box",
  "difficulty": 4,
  "task": "Determine",
  "statement": "Let $f(x)=\\dfrac{x}{1+x^{2}}$. Determine the global maximum and global minimum of $f$ on all of $\\mathbb{R}$, and also on the closed interval $[0,2]$.",
  "answer": "On $\\mathbb{R}$: global max $=\\tfrac12$ at $x=1$, global min $=-\\tfrac12$ at $x=-1$. On $[0,2]$: max $=\\tfrac12$ at $x=1$, min $=0$ at $x=0$.",
  "trap": "On $[0,2]$, reporting the min as $-\\tfrac12$ (the global min on $\\mathbb{R}$, which sits at $x=-1$, outside the interval), or forgetting to test the endpoints. On a closed interval the extrema must be sought among interior critical points AND the endpoints.",
  "tags": [
   "rational-function",
   "global-extrema",
   "closed-interval",
   "endpoints"
  ],
  "solutions": [
   {
    "name": "Critical points then compare",
    "steps": [
     "$f'(x)=\\dfrac{(1+x^{2})-x(2x)}{(1+x^{2})^{2}}=\\dfrac{1-x^{2}}{(1+x^{2})^{2}}$, so $f'=0$ at $x=\\pm1$.",
     "On $\\mathbb{R}$: $f'>0$ on $(-1,1)$ and $f'<0$ outside; with $f(\\pm\\infty)=0$, the max is $f(1)=\\tfrac12$ and min is $f(-1)=-\\tfrac12$.",
     "On $[0,2]$ the only interior critical point is $x=1$. Compare values: $f(0)=0$, $f(1)=\\tfrac12$, $f(2)=\\tfrac25$.",
     "Largest is $\\tfrac12$ (at $x=1$), smallest is $0$ (at $x=0$): $\\boxed{[0,2]:\\ \\max=\\tfrac12,\\ \\min=0}$."
    ]
   },
   {
    "name": "Range bound via AM-GM",
    "steps": [
     "For $x>0$, $f(x)=\\dfrac{1}{x+1/x}$, and $x+\\tfrac1x\\ge 2$ by AM-GM with equality at $x=1$, so $0<f(x)\\le\\tfrac12$ on $(0,\\infty)$, attaining $\\tfrac12$ at $x=1$.",
     "By oddness $f(-x)=-f(x)$, so on $\\mathbb{R}$ the min is $-\\tfrac12$ at $x=-1$; global max/min are $\\pm\\tfrac12$.",
     "Restricting to $[0,2]$: $f\\ge 0$ there with $f(0)=0$ the only place equality at $0$, and the peak $\\tfrac12$ at $x=1$ lies inside.",
     "Hence on $[0,2]$, $\\boxed{\\max=\\tfrac12\\ (x=1),\\ \\min=0\\ (x=0)}$."
    ]
   }
  ],
  "remark": "Insight: Global extrema on a closed interval live in the finite candidate list {interior critical points} ∪ {endpoints}. The deeper valley at $x=-1$ is irrelevant the moment it falls outside the box."
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
  "title": "Slicing the W at Every Height",
  "difficulty": 5,
  "task": "Find all",
  "statement": "Consider $f(x)=3x^{4}-8x^{3}-6x^{2}+24x$. Find all real values of $k$ for which the equation $f(x)=k$ has exactly two distinct real solutions.",
  "answer": "$k\\in(-19,\\,8)\\ \\cup\\ (13,\\,\\infty)$.",
  "trap": "Treating $f$ as having a single valley and concluding 'two solutions for all large enough $k$'. The quartic is a genuine 'W' with two unequal local minima ($-19$ and $8$) straddling a local maximum ($13$); counting must track the line $y=k$ against all three critical values, not just one.",
  "tags": [
   "quartic",
   "level-sets",
   "root-counting",
   "local-extrema",
   "graph-shape"
  ],
  "solutions": [
   {
    "name": "Critical values and the W-shape",
    "steps": [
     "$f'(x)=12x^{3}-24x^{2}-12x+24=12(x-2)(x-1)(x+1)$, so critical points are $x=-1,1,2$.",
     "Critical values: $f(-1)=-19$ (local min), $f(1)=13$ (local max), $f(2)=8$ (local min). With positive leading coefficient, the shape is a 'W' rising to $+\\infty$ on both ends.",
     "Slide $y=k$ upward and count intersections: $k<-19\\!:0$; $k=-19\\!:1$; $-19<k<8\\!:2$; $k=8\\!:3$; $8<k<13\\!:4$; $k=13\\!:3$; $k>13\\!:2$.",
     "Exactly two distinct solutions occur on $\\boxed{(-19,8)\\cup(13,\\infty)}$."
    ]
   },
   {
    "name": "Branch-by-branch monotone analysis",
    "steps": [
     "From $f'=12(x+1)(x-1)(x-2)$: $f$ decreases on $(-\\infty,-1)$, increases on $(-1,1)$, decreases on $(1,2)$, increases on $(2,\\infty)$ — four monotone branches.",
     "A horizontal line meets each monotone branch at most once; the local extreme values $-19,13,8$ are the 'gates' that decide which branches a given $k$ can hit.",
     "For $-19<k<8$: only the outer falling branch (left of $-1$) and the inner rising branch (between $-1$ and $1$) reach down that low / up that high — exactly $2$ hits. For $k>13$: only the two outermost branches reach that high — exactly $2$ hits.",
     "All other ranges give $0,1,3,$ or $4$. Hence two distinct roots iff $\\boxed{k\\in(-19,8)\\cup(13,\\infty)}$."
    ]
   },
   {
    "name": "Boundary tangency check",
    "steps": [
     "At a critical value the line is tangent, merging two roots into one: $k=-19$ gives $1$ root, $k=8$ gives $3$ (a double root at $x=2$ plus two simple), $k=13$ gives $3$ (double at $x=1$ plus two simple).",
     "Just above $8$ the double root splits into two, raising the count from $3$ to $4$; just above $13$ two real roots collide and leave the reals, dropping $4$ to $2$.",
     "Therefore the open intervals strictly between/above these tangency heights that give a count of $2$ are $(-19,8)$ and $(13,\\infty)$; the endpoints themselves are excluded.",
     "$\\boxed{k\\in(-19,8)\\cup(13,\\infty)}$."
    ]
   }
  ],
  "remark": "Insight: The number of solutions of $f(x)=k$ is read off the staircase of critical values. Two unequal minima create an asymmetric W, so the 'exactly two' set splits into a low band (between the deeper and the shallower minimum) and a high tail (above the central maximum)."
 },
 {
  "theme": "derivlimits",
  "themeLabel": "Derivative-driven Limits",
  "title": "Twin Powers at the Crossing",
  "difficulty": 4,
  "task": "Evaluate",
  "tags": [
   "difference quotient",
   "derivative as limit",
   "power functions",
   "factoring trap"
  ],
  "statement": "Evaluate \\[ \\lim_{x\\to 2}\\frac{x^{10}-2^{10}}{x^{5}-2^{5}}. \\]",
  "answer": "$64$",
  "trap": "Cancelling $x^5-2^5$ against $x^{10}-2^{10}=(x^5-2^5)(x^5+2^5)$ is fine and gives $x^5+2^5\\to 64$ — but students who instead try to \"apply L'Hopital to the powers\" sometimes write $\\frac{10x^9}{5x^4}=2x^5$ and forget to substitute $x=2$, or mis-evaluate $2\\cdot 2^5$ as $2^6/?$. The seductive error is reading the answer as $2^{10}/2^5=2^5=32$ by naively cancelling exponents, which ignores the sum factor entirely.",
  "solutions": [
   {
    "name": "Divide both as derivative-style difference quotients",
    "steps": [
     "Write the ratio as $\\dfrac{(x^{10}-2^{10})/(x-2)}{(x^{5}-2^{5})/(x-2)}$, valid for $x\\ne 2$.",
     "As $x\\to 2$ each bracket is the difference quotient of $t\\mapsto t^{10}$ and $t\\mapsto t^5$ at $t=2$, tending to the derivatives $10\\cdot 2^{9}$ and $5\\cdot 2^{4}$.",
     "Hence the limit is $\\dfrac{10\\cdot 2^{9}}{5\\cdot 2^{4}}=2\\cdot 2^{5}=\\boxed{64}$."
    ]
   },
   {
    "name": "Algebraic factorisation",
    "steps": [
     "Factor $x^{10}-2^{10}=(x^{5}-2^{5})(x^{5}+2^{5})$.",
     "Cancel the common factor $x^5-2^5\\ (\\ne 0$ for $x\\ne 2)$ to leave $x^5+2^5$.",
     "Let $x\\to 2$: $2^5+2^5=2\\cdot 32=\\boxed{64}$."
    ]
   },
   {
    "name": "L'Hopital (legitimately a 0/0 form)",
    "steps": [
     "At $x=2$ both numerator and denominator vanish, so the form is genuinely $0/0$ and L'Hopital applies.",
     "Differentiate: $\\dfrac{10x^{9}}{5x^{4}}=2x^{5}$.",
     "Evaluate at $x=2$: $2\\cdot 2^{5}=\\boxed{64}$."
    ]
   }
  ],
  "remark": "Insight: the ratio of two difference quotients sharing the same base point is the ratio of derivatives — this is exactly why L'Hopital works here, and it lets you read $64$ off without any series."
 },
 {
  "theme": "derivlimits",
  "themeLabel": "Derivative-driven Limits",
  "title": "The Wobble That Doesn't Matter",
  "difficulty": 4,
  "task": "Evaluate",
  "tags": [
   "lhopital fine print",
   "oscillation",
   "squeeze",
   "nonexistent ratio"
  ],
  "statement": "A student computes \\[ L=\\lim_{x\\to\\infty}\\frac{x+\\sin x}{x} \\] by L'Hopital, differentiating top and bottom to get $\\dfrac{1+\\cos x}{1}$, which oscillates and has no limit, and concludes that $L$ does not exist. Evaluate $L$ correctly and explain the flaw.",
  "answer": "$L=1$ (the original limit exists even though the L'Hopital ratio does not).",
  "trap": "The seductive move is the converse error: \"if $\\lim \\frac{f'}{g'}$ does not exist, then $\\lim\\frac{f}{g}$ does not exist.\" L'Hopital is a one-way implication — existence of the derivative-ratio limit implies the original, never the reverse. Here $\\frac{1+\\cos x}{1}$ fails to converge, but that says nothing about $\\frac{x+\\sin x}{x}$, which is perfectly tame.",
  "solutions": [
   {
    "name": "Direct split",
    "steps": [
     "Write $\\dfrac{x+\\sin x}{x}=1+\\dfrac{\\sin x}{x}$.",
     "Since $|\\sin x|\\le 1$, $\\left|\\dfrac{\\sin x}{x}\\right|\\le \\dfrac1{x}\\to 0$.",
     "Therefore $L=1+0=\\boxed{1}$, and the L'Hopital ratio's nonexistence is simply irrelevant."
    ]
   },
   {
    "name": "Squeeze",
    "steps": [
     "For $x>0$, $\\dfrac{x-1}{x}\\le \\dfrac{x+\\sin x}{x}\\le \\dfrac{x+1}{x}$.",
     "Both bounds $1-\\frac1x$ and $1+\\frac1x$ tend to $1$ as $x\\to\\infty$.",
     "By the squeeze theorem $L=\\boxed{1}$."
    ]
   }
  ],
  "remark": "Insight: L'Hopital's hypothesis is that the *derivative* ratio converges. When it oscillates, the test is silent — you must fall back to honest estimation. This is the single most misused corner of the rule."
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
  "trap": "Treating the base as $\\to 1$ and the exponent as $\\to\\infty$ and declaring the answer $1$ or $\\infty$ is wrong: this is a $1^{\\infty}$ indeterminate form. One must take logs and find the \\emph{rate} at which the base approaches $1$, governed by $\\tan x-\\sin x\\sim x^3/2$.",
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
  "title": "Differentiable, Yet the Slope Refuses to Settle",
  "difficulty": 5,
  "task": "Prove that",
  "tags": [
   "derivative at a point",
   "limit of derivative",
   "discontinuous derivative",
   "oscillation"
  ],
  "statement": "Let \\[ f(x)=\\begin{cases} x^{2}\\sin\\!\\dfrac1x, & x\\ne 0,\\\\[2mm] 0, & x=0.\\end{cases} \\] Prove that $f'(0)$ exists and find it, yet show that $\\displaystyle\\lim_{x\\to 0}f'(x)$ does not exist. (This separates \"the derivative at a point\" from \"the limit of the derivative function.\")",
  "answer": "$f'(0)=0$ exists, but $\\lim_{x\\to0}f'(x)$ does not exist (so $f'$ is discontinuous at $0$).",
  "trap": "The seductive shortcut is to compute $f'(x)$ for $x\\ne0$, take $\\lim_{x\\to0}f'(x)$, find it oscillates, and conclude \"$f$ is not differentiable at $0$.\" That conflates two different limits: $f'(0)$ is defined by the difference quotient at $0$, not by the limit of $f'$ near $0$. The latter equals $f'(0)$ only when $f'$ happens to be continuous — which is precisely what fails here.",
  "solutions": [
   {
    "name": "Difference quotient vs. derivative formula",
    "steps": [
     "By definition $f'(0)=\\lim_{h\\to0}\\dfrac{h^2\\sin(1/h)-0}{h}=\\lim_{h\\to0}h\\sin\\tfrac1h$.",
     "Since $|h\\sin\\tfrac1h|\\le|h|\\to0$, the squeeze gives $f'(0)=0$.",
     "For $x\\ne0$, $f'(x)=2x\\sin\\tfrac1x-\\cos\\tfrac1x$. As $x\\to0$ the term $2x\\sin\\tfrac1x\\to0$ but $\\cos\\tfrac1x$ oscillates in $[-1,1]$ without limit, so $\\lim_{x\\to0}f'(x)$ does not exist. $\\blacksquare$"
    ]
   },
   {
    "name": "Sequential witnesses for nonexistence of $\\lim f'$",
    "steps": [
     "Take $x_n=\\dfrac{1}{2\\pi n}$: then $\\cos\\tfrac1{x_n}=\\cos(2\\pi n)=1$ and $2x_n\\sin\\tfrac1{x_n}=0$, so $f'(x_n)=-1\\to-1$.",
     "Take $y_n=\\dfrac{1}{(2n+1)\\pi}$: then $\\cos\\tfrac1{y_n}=-1$ and $2y_n\\sin\\tfrac1{y_n}=0$, so $f'(y_n)=+1\\to+1$.",
     "Two subsequences give different limits, so $\\lim_{x\\to0}f'(x)$ does not exist; meanwhile $f'(0)=0$ from the first solution. $\\blacksquare$"
    ]
   }
  ],
  "remark": "Insight: a function can be differentiable everywhere yet have a discontinuous derivative. The rule \"$\\lim_{x\\to a}f'(x)$ computes $f'(a)$\" is valid only under the extra hypothesis that $f'$ is continuous at $a$ — a quietly assumed premise that this example destroys. (Darboux's theorem still applies: $f'$ has the intermediate-value property even though it is discontinuous, which is why the oscillation fills the whole interval $[-1,1]$.)"
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
  "remark": "Insight: the very first L'Hopital obligation is to confirm the form is $0/0$ or $\\infty/\\infty$. Skipping that check is the most common olympiad-grader's red flag — a $1/0$ quotient can yield any answer when you illegitimately differentiate."
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
  "title": "The Arctangent Sandwich",
  "difficulty": 5,
  "task": "Prove that",
  "tags": [
   "mean-value-theorem",
   "monotonicity",
   "inverse-trig",
   "inequality"
  ],
  "statement": "Let $0 < a < b$. Prove that\n\\[\n\\frac{b-a}{1+b^{2}} \\;<\\; \\arctan b - \\arctan a \\;<\\; \\frac{b-a}{1+a^{2}},\n\\]\nand deduce, by taking $a=\\tfrac15$ and $b=\\tfrac14$, the explicit estimate\n\\[\n\\frac{4}{85} \\;<\\; \\arctan\\frac{1}{4} - \\arctan\\frac{1}{5} \\;<\\; \\frac{5}{104},\n\\]\nwhich is consistent with the closed form $\\arctan\\dfrac{1}{4}-\\arctan\\dfrac{1}{5}=\\arctan\\dfrac{1}{21}$.",
  "answer": "Proved. The Mean Value Theorem gives a point $c\\in(a,b)$ with $\\arctan b-\\arctan a=\\dfrac{b-a}{1+c^{2}}$, and since $t\\mapsto \\dfrac{1}{1+t^{2}}$ is strictly decreasing on $(0,\\infty)$, $\\dfrac{1}{1+b^{2}}<\\dfrac{1}{1+c^{2}}<\\dfrac{1}{1+a^{2}}$, yielding the strict two-sided bound. With $a=\\tfrac15,\\,b=\\tfrac14$ this reads $\\dfrac{4}{85}<\\arctan\\tfrac14-\\arctan\\tfrac15<\\dfrac{5}{104}$, and indeed $\\arctan\\tfrac14-\\arctan\\tfrac15=\\arctan\\tfrac1{21}\\approx 0.047583$, which lies strictly between $\\tfrac{4}{85}\\approx 0.047059$ and $\\tfrac{5}{104}\\approx 0.048077$.",
  "trap": "Trying to prove it by differentiating both sides of the inequality and comparing, or by replacing $c$ with an endpoint without justification. The seductive move is to write $\\arctan b-\\arctan a \\approx \\frac{b-a}{1+a^2}$ (linearization at $a$) and call it an equality; this destroys the strict inequality and hides exactly where the strictness comes from. Concretely, the linearization at $a=\\tfrac15$ gives the value $\\tfrac{5}{104}\\approx 0.048077$, but the true difference is $\\arctan\\tfrac1{21}\\approx 0.047583$, which is strictly smaller. The gap is forced by the strict monotonicity of $1/(1+t^2)$, which makes $c$ lie strictly inside $(a,b)$, so the upper bound is never attained.",
  "solutions": [
   {
    "name": "Mean Value Theorem plus monotonicity",
    "steps": [
     "Let $f(t)=\\arctan t$, continuous on $[a,b]$ and differentiable on $(a,b)$ with $f'(t)=\\dfrac{1}{1+t^{2}}$.",
     "By the MVT there exists $c\\in(a,b)$ with $\\dfrac{f(b)-f(a)}{b-a}=f'(c)=\\dfrac{1}{1+c^{2}}$, i.e. $\\arctan b-\\arctan a=\\dfrac{b-a}{1+c^{2}}$.",
     "The function $g(t)=\\dfrac{1}{1+t^{2}}$ has $g'(t)=\\dfrac{-2t}{(1+t^{2})^{2}}<0$ for $t>0$, so $g$ is strictly decreasing; since $a<c<b$, $g(b)<g(c)<g(a)$.",
     "Multiplying the strict inequalities by $b-a>0$ gives $\\dfrac{b-a}{1+b^{2}}<\\arctan b-\\arctan a<\\dfrac{b-a}{1+a^{2}}$.",
     "Specialize to $a=\\tfrac15,\\ b=\\tfrac14$: here $b-a=\\tfrac1{20}$, $1+b^{2}=\\tfrac{17}{16}$ and $1+a^{2}=\\tfrac{26}{25}$, so $\\dfrac{b-a}{1+b^{2}}=\\dfrac{1/20}{17/16}=\\dfrac{4}{85}$ and $\\dfrac{b-a}{1+a^{2}}=\\dfrac{1/20}{26/25}=\\dfrac{5}{104}$, giving $\\dfrac{4}{85}<\\arctan\\tfrac14-\\arctan\\tfrac15<\\dfrac{5}{104}$.",
     "As a consistency check, the addition formula gives $\\arctan\\tfrac14-\\arctan\\tfrac15=\\arctan\\dfrac{\\tfrac14-\\tfrac15}{1+\\tfrac1{20}}=\\arctan\\dfrac{1/20}{21/20}=\\arctan\\dfrac{1}{21}\\approx 0.047583$, which the bounds $\\tfrac{4}{85}\\approx 0.047059$ and $\\tfrac{5}{104}\\approx 0.048077$ bracket strictly. $\\blacksquare$"
    ]
   },
   {
    "name": "Monotone integrand bound",
    "steps": [
     "By the Fundamental Theorem of Calculus, $\\arctan b-\\arctan a=\\displaystyle\\int_{a}^{b}\\frac{dt}{1+t^{2}}$.",
     "On $[a,b]$ the integrand satisfies $\\dfrac{1}{1+b^{2}}\\le\\dfrac{1}{1+t^{2}}\\le\\dfrac{1}{1+a^{2}}$, with equality only at the single endpoints; integrating a non-constant continuous function over a nondegenerate interval turns these into strict inequalities.",
     "Integrating across $[a,b]$ of length $b-a$ gives $\\dfrac{b-a}{1+b^{2}}<\\arctan b-\\arctan a<\\dfrac{b-a}{1+a^{2}}$.",
     "Putting $a=\\tfrac15,\\ b=\\tfrac14$ yields $\\dfrac{4}{85}<\\arctan\\tfrac14-\\arctan\\tfrac15<\\dfrac{5}{104}$, consistent with the closed form $\\arctan\\tfrac1{21}$. $\\blacksquare$"
    ]
   }
  ],
  "remark": "Insight: the MVT converts a difference into a single derivative value $f'(c)$; monotonicity of that derivative then pins $c$ strictly between the endpoints, automatically producing both bounds with strict inequalities. The same machine also explains why the naive linearization $\\arctan b-\\arctan a=\\tfrac{b-a}{1+a^{2}}$ overshoots: it pretends $c=a$, the one place the bound is never reached. This 'MVT to localize, monotonicity to bound' pattern is the workhorse behind countless one-line inequality proofs."
 },
 {
  "theme": "hybrid",
  "themeLabel": "The Grand Hybrids",
  "title": "Pinned by Its Slope at the Origin",
  "difficulty": 5,
  "task": "Find all",
  "tags": [
   "functional-equation",
   "derivative",
   "extremum",
   "monotonicity"
  ],
  "statement": "Suppose $f:\\mathbb{R}\\to\\mathbb{R}$ is differentiable and satisfies\n\\[\nf(x+y)=f(x)+f(y)+2xy\\qquad\\text{for all }x,y\\in\\mathbb{R},\n\\]\nwith $f'(0)=3$. Find $f$ explicitly, then determine the global minimum value of $f$ on $\\mathbb{R}$ and the range of $f$ on $[-4,2]$.",
  "answer": "$f(x)=x^{2}+3x$. Its global minimum is $f\\!\\left(-\\tfrac32\\right)=-\\dfrac{9}{4}$, attained at $x=-\\tfrac32$. On $[-4,2]$ the range is $\\left[-\\dfrac{9}{4},\\,10\\right]$.",
  "trap": "Guessing $f(x)=cx$ from the additive look of the equation. The $+2xy$ term breaks additivity, so a linear solution cannot work; assuming linearity makes $f'(0)=3$ force $f(x)=3x$, which fails the functional equation (its two sides differ by $2xy$). The correct route differentiates the equation in $x$ at fixed $y$ (or sets up the difference quotient) to recover the quadratic.",
  "solutions": [
   {
    "name": "Differentiate the functional equation",
    "steps": [
     "Set $x=y=0$: $f(0)=2f(0)$, so $f(0)=0$.",
     "Fix $y$ and differentiate the identity $f(x+y)=f(x)+f(y)+2xy$ with respect to $x$: $f'(x+y)=f'(x)+2y$.",
     "Put $x=0$: $f'(y)=f'(0)+2y=3+2y$ for all $y$.",
     "Integrate: $f(y)=3y+y^{2}+C$; since $f(0)=0$, $C=0$, giving $f(x)=x^{2}+3x$ (one checks it satisfies the original equation).",
     "$f'(x)=2x+3=0\\Rightarrow x=-\\tfrac32$; $f''(x)=2>0$, so this is the global minimum, value $f(-\\tfrac32)=\\tfrac94-\\tfrac92=-\\tfrac94$.",
     "On $[-4,2]$ compare the interior minimum $-\\tfrac94$ with endpoints $f(-4)=16-12=4$ and $f(2)=4+6=10$; the range is $\\left[-\\tfrac94,10\\right]$. $\\boxed{f(x)=x^2+3x,\\ \\min=-\\tfrac94}$"
    ]
   },
   {
    "name": "Difference-quotient from first principles",
    "steps": [
     "With $f(0)=0$, form $\\dfrac{f(x+h)-f(x)}{h}=\\dfrac{f(h)+2xh}{h}=\\dfrac{f(h)}{h}+2x$ using the functional equation.",
     "Let $h\\to0$: the left side is $f'(x)$ and $\\dfrac{f(h)}{h}=\\dfrac{f(h)-f(0)}{h}\\to f'(0)=3$, so $f'(x)=2x+3$.",
     "Integrate with $f(0)=0$ to get $f(x)=x^{2}+3x$.",
     "Complete the square: $f(x)=\\left(x+\\tfrac32\\right)^{2}-\\tfrac94\\ge-\\tfrac94$, equality at $x=-\\tfrac32$, confirming the global minimum $-\\tfrac94$ and (by evaluating endpoints) the range $[-\\tfrac94,10]$ on $[-4,2]$. $\\blacksquare$"
    ]
   }
  ],
  "remark": "Insight: a differentiable functional equation is solved by differentiating it into an ODE that the equation itself feeds the initial data for, here $f'(0)=3$ pins the constant. Once $f$ is known explicitly, the second-derivative test and an endpoint sweep finish the optimization. Three instruments, functional equation, derivative, extremum, handed off in sequence."
 },
 {
  "theme": "hybrid",
  "themeLabel": "The Grand Hybrids",
  "title": "A Derivative That Refuses to Be Continuous",
  "difficulty": 5,
  "task": "Prove that",
  "tags": [
   "darboux",
   "differentiability",
   "corner-count",
   "oscillation"
  ],
  "statement": "Define $F:\\mathbb{R}\\to\\mathbb{R}$ by $F(x)=x^{2}\\sin\\!\\frac1x$ for $x\\neq0$ and $F(0)=0$.\n(a) Prove that $F$ is differentiable everywhere, yet $F'$ is discontinuous at $0$.\n(b) Prove that $F'$ nevertheless has the Intermediate Value (Darboux) property, and that on every interval $(0,\\delta)$ the equation $F'(x)=0$ has infinitely many solutions.\n(c) State the number of points in the open interval $(-1,1)$ at which the related function $G(x)=\\lvert 4x^{2}-1\\rvert$ fails to be differentiable.",
  "answer": "(a) $F'(x)=2x\\sin\\frac1x-\\cos\\frac1x$ for $x\\neq0$ and $F'(0)=0$; $F'$ is discontinuous at $0$ because $\\cos\\frac1x$ has no limit there. (b) $F'$ is a derivative, so it satisfies Darboux's theorem; moreover $F'(x)=0$ infinitely often near $0$. (c) $G$ fails to be differentiable at exactly $\\boxed{2}$ points of $(-1,1)$, namely $x=\\pm\\tfrac12$.",
  "trap": "Concluding that because $F'$ is discontinuous at $0$ it cannot have the intermediate-value property. That confuses continuity with the Darboux property: every derivative satisfies the IVP (Darboux's theorem) whether or not it is continuous. The discontinuity at $0$ is genuine, but it does not cost $F'$ the IVP.",
  "solutions": [
   {
    "name": "Direct differentiation and Darboux's theorem",
    "steps": [
     "For $x\\neq0$, the product and chain rules give $F'(x)=2x\\sin\\frac1x-\\cos\\frac1x$.",
     "At $0$, $F'(0)=\\lim_{h\\to0}\\dfrac{h^{2}\\sin\\frac1h-0}{h}=\\lim_{h\\to0}h\\sin\\frac1h=0$ by squeezing $\\lvert h\\sin\\frac1h\\rvert\\le\\lvert h\\rvert$, so $F$ is differentiable everywhere.",
     "As $x\\to0$, $2x\\sin\\frac1x\\to0$ but $\\cos\\frac1x$ oscillates throughout $[-1,1]$ with no limit, so $\\lim_{x\\to0}F'(x)$ does not exist: $F'$ is discontinuous at $0$ (an essential, non-removable discontinuity).",
     "Since $F'$ is the derivative of $F$, Darboux's theorem guarantees that $F'$ takes every value between any two of its values; thus $F'$ has the intermediate-value property despite the discontinuity.",
     "Take $a_n=\\frac{1}{2\\pi n}$: then $\\cos\\frac1{a_n}=\\cos(2\\pi n)=1$ and $2a_n\\sin(2\\pi n)=0$, so $F'(a_n)=-1<0$. Take $b_n=\\frac{1}{(2n+1)\\pi}$: then $\\cos\\frac1{b_n}=\\cos((2n+1)\\pi)=-1$ and $2b_n\\sin((2n+1)\\pi)=0$, so $F'(b_n)=+1>0$.",
     "Between any consecutive sign-opposite pair $a_n,b_n$ the IVP forces a root of $F'$; since infinitely many such pairs lie inside any $(0,\\delta)$, the equation $F'(x)=0$ has infinitely many solutions there.",
     "For (c), $G(x)=\\lvert4x^{2}-1\\rvert$ is non-differentiable exactly where $4x^{2}-1=0$ and the inside changes sign, i.e. $x=\\pm\\tfrac12$, both in $(-1,1)$: a count of $2$. $\\boxed{2}$"
    ]
   },
   {
    "name": "Sign-change localization and first-principles Darboux",
    "steps": [
     "Establish differentiability of $F$ at $0$ via the squeeze $\\lvert h\\sin\\frac1h\\rvert\\le\\lvert h\\rvert\\to0$, and elsewhere by ordinary calculus, obtaining $F'(x)=2x\\sin\\frac1x-\\cos\\frac1x$.",
     "To see the IVP without invoking the named theorem, fix $p<q$ and a value $\\gamma$ strictly between $F'(p)$ and $F'(q)$. The function $\\varphi(x)=F(x)-\\gamma x$ is continuous on $[p,q]$, so it attains an interior extremum (its endpoint slopes $F'(p)-\\gamma$ and $F'(q)-\\gamma$ have opposite signs), and at that interior critical point Fermat gives $\\varphi'=0$, i.e. $F'=\\gamma$. So $F'$ attains every intermediate value.",
     "Discontinuity at $0$ follows from two subsequential limits: $F'\\!\\left(\\tfrac{1}{2\\pi n}\\right)=-1$ for all $n$, while $F'\\!\\left(\\tfrac{1}{(2n+1)\\pi}\\right)=+1$ for all $n$, so no single limit can exist as $x\\to0$.",
     "These same two families have opposite signs and both accumulate at $0$, so each gap $\\left(\\tfrac{1}{(2n+1)\\pi},\\tfrac{1}{2\\pi n}\\right)\\subset(0,\\delta)$ contains a zero of $F'$ by the IVP: infinitely many zeros in every $(0,\\delta)$.",
     "For (c), $4x^{2}-1$ is smooth and crosses zero transversally (nonzero slope) at $x=\\pm\\tfrac12$, so the absolute value produces corners precisely there and nowhere else; both lie in $(-1,1)$, giving $2$ non-differentiable points. $\\blacksquare$"
    ]
   }
  ],
  "remark": "Insight: this fuses Darboux's theorem (a derivative can never have a jump, yet may be wildly discontinuous and still obey the IVP) with the elementary skill of counting corners of an absolute-value composition. The lesson is that 'has the intermediate-value property' is strictly weaker than 'continuous' — derivatives live in exactly that gap, and $F'$ here is the canonical witness."
 },
 {
  "theme": "hybrid",
  "themeLabel": "The Grand Hybrids",
  "title": "From the Limit Definition to the Second-Derivative Test",
  "difficulty": 5,
  "task": "Determine",
  "tags": [
   "first-principles",
   "second-derivative-test",
   "extremum",
   "exponential"
  ],
  "statement": "Let $f(x)=x^{2}e^{-x}$ on $\\mathbb{R}$.\n(a) Using only the limit definition of the derivative (no differentiation rules), compute $f'(0)$.\n(b) Find every local extremum of $f$, classify each by the second-derivative test, and determine the absolute maximum value of $f$ on $[0,\\infty)$.",
  "answer": "(a) $f'(0)=0$. (b) Critical points $x=0$ (local minimum, $f''(0)=2>0$, value $0$) and $x=2$ (local maximum, $f''(2)=-2e^{-2}<0$). The absolute maximum of $f$ on $[0,\\infty)$ is $f(2)=\\dfrac{4}{e^{2}}$.",
  "trap": "Declaring $x=0$ a maximum because $f$ rises from there, or skipping the second-derivative test and mislabeling $x=2$ since $f\\to0$ at both $0^{+}$ and $+\\infty$. The seductive shortcut is to assume the unique interior critical point on $(0,\\infty)$ is automatically the absolute max without confirming $f''<0$ and without checking the boundary behavior $f(0)=0,\\ f(\\infty)=0$.",
  "solutions": [
   {
    "name": "First principles then second-derivative test",
    "steps": [
     "$f'(0)=\\lim_{h\\to0}\\dfrac{f(h)-f(0)}{h}=\\lim_{h\\to0}\\dfrac{h^{2}e^{-h}}{h}=\\lim_{h\\to0}h\\,e^{-h}=0$, established purely from the definition.",
     "By the product rule for $x\\neq0$, $f'(x)=e^{-x}(2x-x^{2})=x(2-x)e^{-x}$, vanishing at $x=0$ and $x=2$ (consistent with part (a)).",
     "$f''(x)=e^{-x}(x^{2}-4x+2)$; then $f''(0)=2>0$ marks $x=0$ a local minimum, and $f''(2)=e^{-2}(4-8+2)=-2e^{-2}<0$ marks $x=2$ a local maximum.",
     "On $[0,\\infty)$: $f(0)=0$, $f\\to0$ as $x\\to\\infty$, and the only interior critical value is $f(2)=4e^{-2}$; since it is positive while the boundary values are $0$, the absolute maximum is $f(2)=\\dfrac{4}{e^{2}}$. $\\boxed{4/e^{2}}$"
    ]
   },
   {
    "name": "Monotonicity sign chart",
    "steps": [
     "Compute $f'(x)=x(2-x)e^{-x}$ (with $f'(0)=0$ confirmed from the definition in part (a)).",
     "The factor $e^{-x}>0$ always, so the sign of $f'$ equals the sign of $x(2-x)$: on $(0,2)$ it is positive and on $(2,\\infty)$ it is negative (and on $(-\\infty,0)$ it is negative).",
     "Thus $f$ decreases into $x=0$ from the left, increases on $(0,2)$, and decreases on $(2,\\infty)$: $x=0$ is a local minimum and $x=2$ a local maximum, agreeing with the second-derivative test.",
     "On $[0,\\infty)$, $f$ rises from $0$ to its single peak at $x=2$ then falls back toward $0$, so the absolute maximum value is $f(2)=4e^{-2}=\\dfrac{4}{e^{2}}$. $\\blacksquare$"
    ]
   }
  ],
  "remark": "Insight: part (a) forces the limit definition (no rules allowed), then the second-derivative test classifies the critical points, and a boundary-behavior check upgrades a local maximum to a global one. The two endpoints both tending to $0$ are what make the interior peak the absolute maximum, a detail the sign chart and the boundary scan each confirm independently."
 },
 {
  "theme": "hybrid",
  "themeLabel": "The Grand Hybrids",
  "title": "A Cubic-Order Cancellation",
  "difficulty": 5,
  "task": "Evaluate",
  "tags": [
   "taylor-series",
   "mean-value-theorem",
   "limit",
   "asymptotic"
  ],
  "statement": "Evaluate\n\\[\nL=\\lim_{x\\to0}\\frac{e^{x}\\sin x - x - x^{2}}{x^{3}},\n\\]\nand justify the cancellation of the lower-order terms rigorously (not merely by L'Hôpital applied blindly).",
  "answer": "$L=\\dfrac{1}{3}$.",
  "trap": "Reaching for L'Hôpital three times without tracking remainders, or truncating each factor's Taylor series too early (keeping only up to $x^{2}$ in $e^x$ and $\\sin x$), which silently drops the very $x^{3}$ term that survives. The numerator's leading nonzero term is order $x^{3}$, so any expansion stopped before $x^{3}$ throws away the answer.",
  "solutions": [
   {
    "name": "Taylor expansion with Peano remainder",
    "steps": [
     "Expand to third order: $e^{x}=1+x+\\tfrac{x^{2}}{2}+\\tfrac{x^{3}}{6}+o(x^{3})$ and $\\sin x=x-\\tfrac{x^{3}}{6}+o(x^{3})$.",
     "Multiply: $e^{x}\\sin x=\\left(1+x+\\tfrac{x^{2}}{2}+\\tfrac{x^{3}}{6}\\right)\\!\\left(x-\\tfrac{x^{3}}{6}\\right)+o(x^{3})=x+x^{2}+\\left(\\tfrac12-\\tfrac16\\right)x^{3}+o(x^{3})=x+x^{2}+\\tfrac{x^{3}}{3}+o(x^{3}).$",
     "Subtract: $e^{x}\\sin x-x-x^{2}=\\tfrac{x^{3}}{3}+o(x^{3}).$",
     "Divide by $x^{3}$ and let $x\\to0$: $L=\\dfrac13$. $\\boxed{1/3}$"
    ]
   },
   {
    "name": "Repeated L'Hôpital with verified $0/0$ at each stage",
    "steps": [
     "Let $N(x)=e^{x}\\sin x-x-x^{2}$, $D(x)=x^{3}$. Check $N(0)=0,\\ D(0)=0$.",
     "$N'(x)=e^{x}(\\sin x+\\cos x)-1-2x$, with $N'(0)=1\\cdot1-1-0=0$, and $D'(x)=3x^{2}\\to0$, so apply L'Hôpital again.",
     "$N''(x)=2e^{x}\\cos x-2$, $N''(0)=2-2=0$; $D''(x)=6x\\to0$, apply once more.",
     "$N'''(x)=2e^{x}(\\cos x-\\sin x)$, $N'''(0)=2$; $D'''(x)=6$. Hence $L=\\dfrac{N'''(0)}{D'''(0)}=\\dfrac{2}{6}=\\dfrac13$. $\\blacksquare$"
    ]
   },
   {
    "name": "MVT-style remainder control",
    "steps": [
     "Write $N(x)=\\tfrac{x^{3}}{3}+R(x)$ where, by Taylor's theorem with the Lagrange remainder, $R(x)=\\dfrac{N^{(4)}(\\xi)}{4!}x^{4}$ for some $\\xi$ between $0$ and $x$.",
     "Since $N^{(4)}$ is continuous, it is bounded near $0$, so $\\lvert R(x)\\rvert\\le C\\lvert x\\rvert^{4}$ for small $x$.",
     "Therefore $\\dfrac{N(x)}{x^{3}}=\\dfrac13+\\dfrac{R(x)}{x^{3}}$ with $\\left\\lvert\\dfrac{R(x)}{x^{3}}\\right\\rvert\\le C\\lvert x\\rvert\\to0$.",
     "Hence $L=\\dfrac13$. $\\blacksquare$"
    ]
   }
  ],
  "remark": "Insight: the problem is engineered so that the $x$ and $x^{2}$ terms of $e^x\\sin x$ exactly match the subtracted $x+x^2$, leaving the genuine signal at order $x^3$. Taylor finds the surviving coefficient $\\tfrac12-\\tfrac16=\\tfrac13$ in one line, while the MVT/Lagrange remainder is what makes 'the rest is negligible' a theorem rather than a hope."
 },
 {
  "theme": "hybrid",
  "themeLabel": "The Grand Hybrids",
  "title": "The Equation That Builds Its Own Solution",
  "difficulty": 5,
  "task": "Find a,b",
  "tags": [
   "functional-equation",
   "differential-equation",
   "monotonicity",
   "trigonometry"
  ],
  "statement": "A differentiable function $f$ defined on its maximal interval about $0$ satisfies $f(0)=0$ and the derivative relation $f'(x)=1+f(x)^{2}$ for all $x$ in that interval.\n(a) Identify $f$ in closed form and the maximal open interval $(a,b)$ on which it exists.\n(b) Prove that $f$ is strictly increasing on $(a,b)$, and evaluate $f\\!\\left(\\dfrac{\\pi}{4}\\right)$.",
  "answer": "$f(x)=\\tan x$, with maximal interval $(a,b)=\\left(-\\dfrac{\\pi}{2},\\,\\dfrac{\\pi}{2}\\right)$ (so $a=-\\tfrac{\\pi}{2}$, $b=\\tfrac{\\pi}{2}$). It is strictly increasing throughout, and $f\\!\\left(\\dfrac{\\pi}{4}\\right)=1$.",
  "trap": "Separating variables but forgetting that $\\arctan$ has range $\\left(-\\tfrac\\pi2,\\tfrac\\pi2\\right)$, so the solution is only defined on that finite interval — claiming $f=\\tan x$ exists on all of $\\mathbb{R}$. The relation $f'=1+f^{2}$ forces $f'\\ge1$, so $f$ races to $\\pm\\infty$ in finite time; the domain is not all of $\\mathbb{R}$.",
  "solutions": [
   {
    "name": "Separation of variables plus monotonicity",
    "steps": [
     "From $f'=1+f^{2}>0$, the right side never vanishes, so we may divide and write $\\dfrac{f'(x)}{1+f(x)^{2}}=1$.",
     "Integrate both sides from $0$ to $x$: $\\arctan f(x)-\\arctan f(0)=x$, and since $f(0)=0$, $\\arctan f(x)=x$.",
     "Applying $\\tan$ gives $f(x)=\\tan x$. This inversion of $\\arctan f(x)=x$ is valid only while $x$ lies in the range of $\\arctan$, namely $\\left(-\\tfrac\\pi2,\\tfrac\\pi2\\right)$, which is therefore the maximal interval $(a,b)=\\left(-\\tfrac\\pi2,\\tfrac\\pi2\\right)$.",
     "Because $f'(x)=1+f(x)^{2}\\ge1>0$ on this interval, $f$ is strictly increasing there.",
     "Finally $f\\!\\left(\\tfrac\\pi4\\right)=\\tan\\tfrac\\pi4=1$. $\\boxed{a=-\\tfrac\\pi2,\\ b=\\tfrac\\pi2,\\ f(\\pi/4)=1}$"
    ]
   },
   {
    "name": "Verification with a uniqueness argument",
    "steps": [
     "Observe $g(x)=\\tan x$ satisfies $g'(x)=\\sec^{2}x=1+\\tan^{2}x=1+g(x)^{2}$ and $g(0)=0$, so it is a solution on $\\left(-\\tfrac\\pi2,\\tfrac\\pi2\\right)$.",
     "The right-hand side $y\\mapsto1+y^{2}$ is continuously differentiable, hence locally Lipschitz in $y$, so by the Picard–Lindelöf theorem the initial value problem has a unique solution; thus $f=\\tan x$ is the only one.",
     "Maximality: as $x\\to\\tfrac\\pi2^{-}$, $\\tan x\\to+\\infty$, so the solution cannot be extended past $\\tfrac\\pi2$ (and symmetrically past $-\\tfrac\\pi2$); the maximal interval is $\\left(-\\tfrac\\pi2,\\tfrac\\pi2\\right)$.",
     "Monotonicity follows from $f'=1+f^{2}\\ge1>0$, and $f\\!\\left(\\tfrac\\pi4\\right)=1$. $\\blacksquare$"
    ]
   }
  ],
  "remark": "Insight: a derivative relation $f'=1+f^2$ is a functional/differential constraint that determines $f$ once a single value ($f(0)=0$) is supplied. The same inequality $f'\\ge1$ that proves strict monotonicity also explains the finite domain — the solution increases so fast it blows up at $\\pm\\tfrac\\pi2$. One relation, three conclusions: identity, monotonicity, and maximal domain."
 },
 {
  "theme": "hybrid",
  "themeLabel": "The Grand Hybrids",
  "title": "Where the Curve Kisses Its Tangent",
  "difficulty": 5,
  "task": "Determine",
  "tags": [
   "monotonicity",
   "convexity",
   "root-count",
   "mean-value-theorem"
  ],
  "statement": "(a) Prove that $e^{x}\\ge 1+x$ for all real $x$, with equality only at $x=0$, by a monotonicity argument.\n(b) Determine the exact number of real solutions of $e^{x}=2x+1$, and prove your count using the Mean Value Theorem / Rolle's theorem (no numerical solving).",
  "answer": "(a) Proved: $e^{x}-1-x\\ge0$ with equality iff $x=0$. (b) The equation $e^{x}=2x+1$ has exactly $\\boxed{2}$ real solutions (one of which is $x=0$).",
  "trap": "Concluding from convexity of $e^{x}$ that a line can meet it in at most one point. A convex curve meets a non-tangent secant line in up to two points; $y=2x+1$ is a secant (not the tangent $y=1+x$ at $0$), so it crosses twice. Confusing 'tangent line touches once' with 'every line meets at most once' undercounts the roots.",
  "solutions": [
   {
    "name": "Monotonicity for (a), Rolle for the count in (b)",
    "steps": [
     "(a) Let $g(x)=e^{x}-1-x$. Then $g'(x)=e^{x}-1$, which is negative for $x<0$ and positive for $x>0$, so $g$ has a strict global minimum at $x=0$ with $g(0)=0$; hence $g(x)\\ge0$ with equality only at $x=0$.",
     "(b) Let $h(x)=e^{x}-2x-1$. Then $h(0)=0$, so $x=0$ is one root; $h'(x)=e^{x}-2$, vanishing only at $x=\\ln2$.",
     "$h$ is strictly decreasing on $(-\\infty,\\ln2)$ and strictly increasing on $(\\ln2,\\infty)$, with a single global minimum at $x=\\ln2$ where $h(\\ln2)=2-2\\ln2-1=1-2\\ln2<0$.",
     "As $x\\to\\pm\\infty$, $h(x)\\to+\\infty$; a strictly-decreasing-then-strictly-increasing continuous function with negative minimum and $+\\infty$ tails crosses zero exactly twice — once on each side of $\\ln2$.",
     "If there were a third root, Rolle's theorem would force a second critical point of $h$, contradicting that $h'$ vanishes only at $\\ln2$. Hence exactly $2$ solutions. $\\boxed{2}$"
    ]
   },
   {
    "name": "Integral/MVT proof of (a) and sign analysis for (b)",
    "steps": [
     "(a) For $x>0$, $e^{x}-1=\\int_{0}^{x}e^{t}\\,dt>\\int_{0}^{x}1\\,dt=x$; for $x<0$, $1-e^{x}=\\int_{x}^{0}e^{t}\\,dt<\\int_{x}^{0}1\\,dt=-x$, i.e. $e^{x}>1+x$; equality only at $x=0$.",
     "(b) The two roots are characterized by the sign chart of $h(x)=e^x-2x-1$: $h(0)=0$ and $h(\\ln2)<0$ means $0$ lies on the decreasing branch, so a second root sits to the right of $\\ln2$.",
     "By the MVT applied to $h$ between the two roots $r_1<r_2$, there is $c\\in(r_1,r_2)$ with $h'(c)=0$, i.e. $c=\\ln2$; uniqueness of this critical point shows no further roots can exist (a third root would yield a second such $c$).",
     "Therefore the count is exactly $2$. $\\blacksquare$"
    ]
   }
  ],
  "remark": "Insight: the tangent line $y=1+x$ touches $e^x$ exactly once (part (a)'s strict global min), but the steeper secant $y=2x+1$ cuts through twice. Rolle's theorem turns 'derivative has one zero' into 'function has at most two zeros' — the cleanest way to certify a root count without ever locating a root."
 },
 {
  "theme": "hybrid",
  "themeLabel": "The Grand Hybrids",
  "title": "Sandwiching the Sine",
  "difficulty": 5,
  "task": "Prove that",
  "tags": [
   "taylor-series",
   "mean-value-theorem",
   "inequality",
   "monotonicity"
  ],
  "statement": "Prove that for all $x>0$,\n\\[\nx-\\frac{x^{3}}{6}\\;<\\;\\sin x\\;<\\;x,\n\\]\nand use the result to prove the limit $\\displaystyle\\lim_{x\\to0^{+}}\\frac{x-\\sin x}{x^{3}}=\\frac{1}{6}$.",
  "answer": "Proved. Both bounds hold strictly for all $x>0$, and they squeeze $\\dfrac{x-\\sin x}{x^{3}}$ to the limit $\\dfrac{1}{6}$.",
  "trap": "Believing that $x-\\frac{x^{3}}{6}<\\sin x$ holds only for small $x$ (since polynomial bounds on transcendental functions are often merely local) and so attaching an unnecessary restriction such as $0<x<1$. In fact the lower bound is global: it holds for every $x>0$ because the helper function's derivative chain $v'''\\ge0\\Rightarrow v'\\uparrow\\Rightarrow v\\uparrow$ never breaks. Weakening it to a neighborhood needlessly discards the global strength of the statement (though for computing the limit only behavior near $0$ is required).",
  "solutions": [
   {
    "name": "Ladder of derivatives (monotonicity tower)",
    "steps": [
     "Upper bound. Let $u(x)=x-\\sin x$. Then $u'(x)=1-\\cos x\\ge0$, with equality only at the isolated points $x=2k\\pi$, so $u$ is strictly increasing. Hence $u(x)>u(0)=0$ for every $x>0$, i.e. $\\sin x<x$.",
     "Lower bound. Let $v(x)=\\sin x-x+\\frac{x^{3}}{6}$. Then $v'(x)=\\cos x-1+\\frac{x^{2}}{2}$ and $v''(x)=-\\sin x+x=x-\\sin x$. By the upper bound just proved, $v''(x)>0$ for all $x>0$, so $v'$ is strictly increasing from $v'(0)=0$; therefore $v'(x)>0$ for $x>0$.",
     "Since $v'(x)>0$ for $x>0$, $v$ is strictly increasing from $v(0)=0$, so $v(x)>0$ for $x>0$, i.e. $x-\\frac{x^{3}}{6}<\\sin x$.",
     "Combining the two bounds gives $x-\\frac{x^{3}}{6}<\\sin x<x$ for all $x>0$. (Note the dependency: the lower bound literally consumes the upper one, since $v''=x-\\sin x>0$ is exactly the upper inequality.)",
     "Limit. Subtracting $x$ from $x-\\frac{x^{3}}{6}<\\sin x<x$ gives $0<x-\\sin x<\\frac{x^{3}}{6}$ for $x>0$. Dividing by $x^{3}>0$ yields $0<\\dfrac{x-\\sin x}{x^{3}}<\\dfrac16$, so the ratio is trapped in $(0,\\tfrac16)$. $\\blacksquare$"
    ]
   },
   {
    "name": "Taylor with Lagrange remainder, then squeeze",
    "steps": [
     "Apply Taylor's theorem to $\\sin x$ about $0$ with Lagrange remainder. The degree-$1$ expansion gives $\\sin x=x-\\frac{\\cos\\zeta}{6}\\,x^{3}$ for some $\\zeta\\in(0,x)$ (since $f'''=-\\cos$), and the degree-$3$ expansion gives $\\sin x=x-\\frac{x^{3}}{6}+\\frac{\\cos\\eta}{120}\\,x^{5}$ for some $\\eta\\in(0,x)$ (since $f^{(5)}=\\cos$).",
     "From $\\sin x=x-\\frac{\\cos\\zeta}{6}\\,x^{3}$ with $0<\\cos\\zeta\\le1$ for $\\zeta\\in(0,\\tfrac{\\pi}{2})$ one gets $x-\\frac{x^{3}}{6}\\le\\sin x<x$ for $0<x\\le\\tfrac{\\pi}{2}$, recovering the bounds near $0$; the strict, global versions follow from the monotonicity tower of Solution 1.",
     "Rewrite the squeeze in difference form: from $x-\\frac{x^{3}}{6}<\\sin x<x$ we obtain $0<x-\\sin x<\\frac{x^{3}}{6}$ for $x>0$, hence $0<\\dfrac{x-\\sin x}{x^{3}}<\\dfrac16$.",
     "Pin the exact value with the fifth-order expansion: $x-\\sin x=\\frac{x^{3}}{6}-\\frac{\\cos\\eta}{120}\\,x^{5}$, so $\\dfrac{x-\\sin x}{x^{3}}=\\dfrac16-\\dfrac{\\cos\\eta}{120}\\,x^{2}$. As $x\\to0^{+}$ we have $\\eta\\in(0,x)\\to0$, so $\\cos\\eta\\to1$ and the correction term $\\to0$; therefore $\\dfrac{x-\\sin x}{x^{3}}\\to\\dfrac16$. $\\boxed{1/6}$"
    ]
   }
  ],
  "remark": "Insight: a 'tower' of derivatives, each non-negativity feeding the next, manufactures polynomial bounds on $\\sin x$, and Taylor's Lagrange remainder names the exact limiting coefficient $\\tfrac16$. The lower inequality literally consumes the upper one ($v''>0$ needs $\\sin x<x$), so the two bounds must be proved in dependency order. Monotonicity certifies the squeeze; the Lagrange remainder supplies the precise value."
 },
 {
  "theme": "hybrid",
  "themeLabel": "The Grand Hybrids",
  "title": "Two Travelers, One Instant",
  "difficulty": 5,
  "task": "Prove that",
  "tags": [
   "rolle",
   "mean-value-theorem",
   "word-problem",
   "existence"
  ],
  "statement": "Two cyclists race along the same straight road. Their positions at time $x$ are $f(x)$ and $g(x)$, where $f,g$ are continuous on $[0,1]$ and differentiable on $(0,1)$. They start together and finish together: $f(0)=g(0)$ and $f(1)=g(1)$.\n\n(a) Prove there is an instant $c\\in(0,1)$ at which the two cyclists have exactly the same instantaneous velocity, i.e. $f'(c)=g'(c)$.\n\n(b) Suppose in addition that each rider covers the whole course at average velocity $5$. Prove that there is an instant $c_1\\in(0,1)$ with $f'(c_1)=5$ and an instant $c_2\\in(0,1)$ with $g'(c_2)=5$. Show by an explicit example, however, that one cannot in general force a single instant at which both riders have velocity $5$ simultaneously, i.e. the conclusion $f'(c)=g'(c)=5$ at one common $c$ can fail.",
  "answer": "Proved. (a) With $h=f-g$ one has $h(0)=h(1)=0$, so Rolle's theorem yields $c\\in(0,1)$ with $h'(c)=0$, i.e. $f'(c)=g'(c)$. (b) Average velocity $5$ means $f(1)-f(0)=g(1)-g(0)=5$; the Mean Value Theorem applied to $f$ and to $g$ separately gives $c_1,c_2\\in(0,1)$ with $f'(c_1)=5$ and $g'(c_2)=5$. These instants need not coincide: for $f(x)=5x+1.3\\sin(\\pi x)$ and $g(x)=5x+0.9\\sin(2\\pi x)$ (both satisfying all hypotheses with average velocity $5$) one has $f'(x)=5$ only at $x=\\tfrac12$ while $g'(x)=5$ only at $x=\\tfrac14,\\tfrac34$, so no common instant has $f'=g'=5$ — even though part (a) still supplies an instant with $f'=g'$.",
  "trap": "Two seductive errors. First, concluding the riders are at the same position at some interior instant: the data equalize positions only at the endpoints, and Rolle applied to $h=f-g$ delivers a zero of $h'$ (equal velocities), not a zero of $h$ (equal positions). Indeed $f(x)=x,\\ g(x)=x+\\tfrac12\\sin(\\pi x)$ start and finish together yet never meet on $(0,1)$. Second, in part (b), believing the two velocity-$5$ instants can always be merged into one common instant where $f'(c)=g'(c)=5$. MVT only locates them independently; the explicit pair above keeps the $f'=5$ instant and the $g'=5$ instants disjoint.",
  "solutions": [
   {
    "name": "Rolle on the difference, MVT on each rider",
    "steps": [
     "(a) Set $h(x)=f(x)-g(x)$; as a difference of functions continuous on $[0,1]$ and differentiable on $(0,1)$, $h$ has the same regularity.",
     "From the hypotheses $h(0)=f(0)-g(0)=0$ and $h(1)=f(1)-g(1)=0$, so $h(0)=h(1)$.",
     "Rolle's theorem gives $c\\in(0,1)$ with $h'(c)=0$, i.e. $f'(c)=g'(c)$: a shared instantaneous velocity.",
     "(b) Average velocity $5$ for rider $f$ means $\\dfrac{f(1)-f(0)}{1-0}=5$. The MVT applied to $f$ on $[0,1]$ produces $c_1\\in(0,1)$ with $f'(c_1)=5$; applied to $g$ it produces $c_2\\in(0,1)$ with $g'(c_2)=5$.",
     "To see these cannot always be merged, take $f(x)=5x+1.3\\sin(\\pi x)$ and $g(x)=5x+0.9\\sin(2\\pi x)$. Both satisfy $f(0)=g(0)=0$, $f(1)=g(1)=5$, so all hypotheses (including average velocity $5$) hold.",
     "Here $f'(x)=5+1.3\\pi\\cos(\\pi x)=5$ only when $\\cos(\\pi x)=0$, i.e. $x=\\tfrac12$, whereas $g'(x)=5+1.8\\pi\\cos(2\\pi x)=5$ only when $\\cos(2\\pi x)=0$, i.e. $x=\\tfrac14$ or $\\tfrac34$. These instant sets are disjoint, so no single $c$ has $f'(c)=g'(c)=5$. Part (a) is unaffected: $h=f-g$ still vanishes at both endpoints, so some interior $c$ has $f'(c)=g'(c)$. $\\blacksquare$"
    ]
   },
   {
    "name": "Auxiliary chord subtraction",
    "steps": [
     "Write $p=f(0)=g(0)$ and $q=f(1)=g(1)$, and let $\\ell(x)=p+(q-p)x$ be the common chord; both $f$ and $g$ agree with $\\ell$ at the two endpoints.",
     "(a) The function $h=f-g=(f-\\ell)-(g-\\ell)$ vanishes at $0$ and $1$. Equivalently, by the MVT, $h'(c)=\\dfrac{h(1)-h(0)}{1-0}=0$ for some $c\\in(0,1)$, hence $f'(c)=g'(c)$.",
     "(b) Average velocity $5$ forces $q-p=5$, so the chord has slope $5$. Applying the MVT to $f$ realizes this slope as an instantaneous value: $f'(c_1)=q-p=5$ for some $c_1\\in(0,1)$; identically $g'(c_2)=5$ for some $c_2$.",
     "The MVT pins each slope independently, with no link between $c_1$ and $c_2$. Subtracting the chord from the explicit pair $f(x)=5x+1.3\\sin(\\pi x)$, $g(x)=5x+0.9\\sin(2\\pi x)$ leaves $1.3\\sin(\\pi x)$ and $0.9\\sin(2\\pi x)$, whose derivatives vanish at $x=\\tfrac12$ and at $x=\\tfrac14,\\tfrac34$ respectively — disjoint sets — so $f'=g'=5$ never holds at one instant. Yet $h=f-g$ vanishes at both endpoints, so an equal-velocity instant of part (a) survives. $\\blacksquare$"
    ]
   }
  ],
  "remark": "Insight: the workhorse is to subtract. Replacing the pair $f,g$ by their difference $h=f-g$ turns the equal-endpoint data into $h(0)=h(1)$, and Rolle converts that into a shared-velocity instant — a statement about $h'$, never about $h$, which is exactly why equal positions cannot be concluded. The MVT is the complementary tool: it realizes the common average velocity as an instantaneous value for each rider. The trap of merging the two velocity-$5$ instants reveals the boundary of these theorems: existence results locate a point but say nothing about where, so two independently located instants need not coincide."
 },
 {
  "theme": "hybrid",
  "themeLabel": "The Grand Hybrids",
  "title": "The Half That Survives",
  "difficulty": 5,
  "task": "Evaluate",
  "tags": [
   "taylor-series",
   "limit",
   "mean-value-theorem",
   "asymptotic"
  ],
  "statement": "Evaluate the two limits and show they are equal:\n\\[\nL_1=\\lim_{x\\to0}\\left(\\frac{1}{x}-\\frac{1}{e^{x}-1}\\right),\\qquad L_2=\\lim_{n\\to\\infty}\\Big(n-n^{2}\\ln\\!\\big(1+\\tfrac1n\\big)\\Big).\n\\]\nIdentify the common value.",
  "answer": "$L_1=L_2=\\dfrac{1}{2}$.",
  "trap": "For $L_1$, combining the fractions and applying L'Hôpital once: $\\dfrac{e^{x}-1-x}{x(e^{x}-1)}$ is $0/0$ but a single L'Hôpital leaves another $0/0$, and stopping early gives $0$ or a wrong value. For $L_2$, using $\\ln(1+\\tfrac1n)\\approx\\tfrac1n$ (first order only) gives $n-n^{2}\\cdot\\tfrac1n=0$, missing the surviving $\\tfrac12$ that lives in the second-order term.",
  "solutions": [
   {
    "name": "Taylor expansion of both",
    "steps": [
     "For $L_1$: combine to $\\dfrac{e^{x}-1-x}{x(e^{x}-1)}$. Expand $e^{x}-1=x+\\tfrac{x^{2}}{2}+\\tfrac{x^{3}}{6}+o(x^3)$, so the numerator is $\\tfrac{x^{2}}{2}+\\tfrac{x^{3}}{6}+o(x^3)$ and the denominator is $x\\left(x+\\tfrac{x^{2}}{2}+\\cdots\\right)=x^{2}+\\tfrac{x^{3}}{2}+o(x^3)$.",
     "Hence $\\dfrac{\\frac{x^{2}}{2}+o(x^{2})}{x^{2}+o(x^{2})}\\to\\dfrac12$, so $L_1=\\tfrac12$.",
     "For $L_2$: put $t=\\tfrac1n\\to0^{+}$. Then $n-n^{2}\\ln(1+t)=\\dfrac{1}{t}-\\dfrac{1}{t^{2}}\\ln(1+t)=\\dfrac{t-\\ln(1+t)}{t^{2}}$.",
     "Expand $\\ln(1+t)=t-\\tfrac{t^{2}}{2}+o(t^{2})$, so the numerator is $\\tfrac{t^{2}}{2}+o(t^{2})$ and the ratio $\\to\\tfrac12$; thus $L_2=\\tfrac12=L_1$. $\\boxed{1/2}$"
    ]
   },
   {
    "name": "L'Hôpital with bookkeeping",
    "steps": [
     "For $L_1$, write $\\dfrac{e^{x}-1-x}{x(e^{x}-1)}$; both top and bottom $\\to0$. Differentiate: top $\\to e^{x}-1$, bottom $\\to e^{x}-1+xe^{x}$, still $0/0$ at $x=0$.",
     "Differentiate again: top $\\to e^{x}$, bottom $\\to 2e^{x}+xe^{x}$; at $x=0$ this is $\\dfrac{1}{2}$, so $L_1=\\tfrac12$.",
     "For $L_2$, the substitution $t=1/n$ turns it into $\\dfrac{t-\\ln(1+t)}{t^{2}}$ ($0/0$); L'Hôpital gives $\\dfrac{1-\\frac{1}{1+t}}{2t}=\\dfrac{t/(1+t)}{2t}=\\dfrac{1}{2(1+t)}\\to\\dfrac12$.",
     "Both limits equal $\\dfrac12$. $\\blacksquare$"
    ]
   },
   {
    "name": "MVT/remainder for $L_2$",
    "steps": [
     "By Taylor with Lagrange remainder, $\\ln(1+t)=t-\\dfrac{t^{2}}{2(1+\\theta)^{2}}$ for some $\\theta\\in(0,t)$.",
     "Then $\\dfrac{t-\\ln(1+t)}{t^{2}}=\\dfrac{1}{2(1+\\theta)^{2}}$, and as $t\\to0^{+}$ (so $\\theta\\to0$) this $\\to\\dfrac12$.",
     "Translating back via $t=1/n$ gives $L_2=\\dfrac12$, matching $L_1$. $\\blacksquare$"
    ]
   }
  ],
  "remark": "Insight: both expressions are first-order indeterminate ($\\infty-\\infty$ or a vanishing leading term), and the answer $\\tfrac12$ is exactly the second-order Taylor coefficient that 'survives' after the first-order terms cancel. The discrete limit $L_2$ is just the continuous $L_1$ in disguise via $t=1/n$ — a reminder that sequence limits and function limits are the same Taylor machine."
 }
];
