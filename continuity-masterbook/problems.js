/* problems.js — DATA. 100 original olympiad/JEE-Advanced continuity problems for C⁰ · The Continuous & the Broken. Adversarially verified in Python. statement/answer raw LaTeX (app auto-detects prose+math); steps use $...$ and $$...$$. */
window.PROBLEMS = [
 {
  "theme": "epsilondelta",
  "themeLabel": "The ε–δ Definition",
  "title": "The Tightest Tube Around a Parabola",
  "difficulty": 4,
  "task": "Find the largest",
  "tags": [
   "epsilon-delta",
   "quadratic",
   "largest-delta",
   "continuity"
  ],
  "statement": "Consider $f(x)=x^2$ at the point $c=3$. For the challenge value $\\varepsilon=\\tfrac{1}{100}$, find the \\emph{largest} number $\\delta>0$ such that\n\\[\n|x-3|<\\delta \\;\\Longrightarrow\\; |x^2-9|<\\tfrac{1}{100}.\n\\]\nGive the exact value of this optimal $\\delta$.",
  "answer": "The largest such $\\delta$ is $\\displaystyle \\delta=\\sqrt{\\tfrac{901}{100}}-3=\\tfrac{\\sqrt{901}}{10}-3=\\sqrt{9.01}-3\\approx 0.00166620$. The two one-sided gaps are unequal: the left gap $3-\\sqrt{8.99}\\approx0.00166713$ is larger, while the \\emph{right} gap $\\sqrt{9.01}-3\\approx0.00166620$ is smaller, so the right side is binding and fixes $\\delta$ at the smaller value.",
  "trap": "Taking the left one-sided gap $\\delta=3-\\sqrt{8.99}=3-\\tfrac{\\sqrt{899}}{10}\\approx0.00166713$ (or, equivalently, the lazy textbook value $\\delta=\\varepsilon/6=\\tfrac{1}{600}\\approx0.00166667$ from the approximation $|x+3|\\approx6$). Both are \\emph{too large}: because $|x+3|$ grows above $6$ to the right of $c=3$, the point $x=3+\\delta$ already escapes the tube. For instance $x=3+\\tfrac{1}{600}$ gives $|x^2-9|=\\tfrac{6}{600}+\\tfrac{1}{360000}>\\tfrac{1}{100}$. The correct $\\delta$ must be the \\emph{smaller} (right-side) gap.",
  "solutions": [
   {
    "name": "Solve the defining interval exactly, take the smaller gap",
    "steps": [
     "The condition $|x^2-9|<\\tfrac1{100}$ is equivalent to $\\tfrac{899}{100}<x^2<\\tfrac{901}{100}$, i.e. $8.99<x^2<9.01$.",
     "We work near $x=3>0$, so taking positive square roots gives the exact solution set $\\sqrt{8.99}<x<\\sqrt{9.01}$.",
     "The largest symmetric interval $(3-\\delta,\\,3+\\delta)$ that fits inside is limited by the \\emph{closer} endpoint. Left gap $=3-\\sqrt{8.99}\\approx0.00166713$; right gap $=\\sqrt{9.01}-3\\approx0.00166620$.",
     "The right gap is smaller (the parabola steepens to the right), so $\\boxed{\\delta=\\sqrt{9.01}-3=\\dfrac{\\sqrt{901}}{10}-3}$, the largest $\\delta$ that keeps \\emph{both} sides inside the tube."
    ]
   },
   {
    "name": "Optimize the factored bound on the worst (right) side",
    "steps": [
     "Factor $|x^2-9|=|x-3|\\,|x+3|$. Write $|x-3|=t\\ge0$. On the right side $x=3+t$ gives $|x+3|=6+t$, the larger of the two products.",
     "The worst (largest) value of the product on $(3-\\delta,3+\\delta)$ occurs at the right end, so the binding requirement is $t(6+t)<\\tfrac1{100}$ as $t\\to\\delta^-$.",
     "Solve $t(6+t)=\\tfrac1{100}\\Rightarrow t^2+6t-\\tfrac1{100}=0\\Rightarrow t=\\dfrac{-6+\\sqrt{36+\\tfrac{4}{100}}}{2}=\\dfrac{-6+\\sqrt{36.04}}{2}.$",
     "Now $\\sqrt{36.04}=\\sqrt{4\\cdot 9.01}=2\\sqrt{9.01}$, so $t=\\dfrac{-6+2\\sqrt{9.01}}{2}=\\sqrt{9.01}-3\\approx0.00166620$, confirming $\\boxed{\\delta=\\dfrac{\\sqrt{901}}{10}-3}$ and that the right side is binding. (The left side requires $t(6-t)<\\tfrac1{100}$, which permits the larger value $0.00166713$, so it is not the active constraint.)"
    ]
   },
   {
    "name": "Verify optimality by testing the endpoints",
    "steps": [
     "Set $\\delta=\\sqrt{9.01}-3$. At the right endpoint $x=3+\\delta=\\sqrt{9.01}$ we get $x^2=9.01$, so $|x^2-9|=\\tfrac1{100}$ exactly — the tube is touched but (with the strict inequality $|x-3|<\\delta$) never exceeded.",
     "At the left endpoint $x=3-\\delta=6-\\sqrt{9.01}\\approx2.99833$ we get $x^2=(6-\\sqrt{9.01})^2\\approx8.99001$, so $|x^2-9|\\approx0.0099944<\\tfrac1{100}$ — strictly inside, with room to spare.",
     "Any larger $\\delta'>\\delta$ would admit some $x$ with $\\sqrt{9.01}<x<3+\\delta'$, where $x^2>9.01$ and the implication fails. Hence $\\delta=\\sqrt{9.01}-3$ is exactly the supremum, and it works, so it is the largest valid value."
    ]
   }
  ],
  "remark": "Insight: 'largest $\\delta$' problems are not about clever bounding — they are about inverting the function. Solve $f(x)=f(c)\\pm\\varepsilon$ to get the exact solution interval $(\\sqrt{8.99},\\sqrt{9.01})$, then take the \\emph{smaller} one-sided gap. Because $x^2$ is convex, it climbs faster on the right of $c=3$, so the right endpoint is closer to $c$ and binds first. The lazy estimate $\\delta=\\varepsilon/6$ uses $|x+3|\\approx6$, but $|x+3|$ actually exceeds $6$ on the binding side, making $\\varepsilon/6$ too large and hence invalid — a reminder that the linearized slope $f'(c)=6$ only describes the tangent, not the secant the tube actually rides on."
 },
 {
  "theme": "epsilondelta",
  "themeLabel": "The ε–δ Definition",
  "title": "Taming the Reciprocal Without Touching Zero",
  "difficulty": 4,
  "task": "Prove that",
  "tags": [
   "epsilon-delta",
   "reciprocal",
   "continuity",
   "clamping"
  ],
  "statement": "Let $f(x)=\\dfrac1x$ on $(0,\\infty)$. Prove directly from the $\\varepsilon$–$\\delta$ definition that $f$ is continuous at $c=2$, by producing an explicit $\\delta(\\varepsilon)$ that depends only on $\\varepsilon$ (and the fixed point $c=2$) — never on the running variable $x$.",
  "answer": "Proved. An explicit choice is $\\delta(\\varepsilon)=\\min\\!\\left\\{1,\\;2\\varepsilon\\right\\}$. Then $|x-2|<\\delta\\Rightarrow\\left|\\tfrac1x-\\tfrac12\\right|<\\varepsilon$.",
  "trap": "Stopping at $\\left|\\tfrac1x-\\tfrac12\\right|=\\dfrac{|x-2|}{2|x|}$ and declaring '$\\delta=2\\varepsilon$ works.' That hides a $\\dfrac1{|x|}$ that blows up as $x\\to0$: the candidate $\\delta$ secretly depends on $x$. You MUST first clamp $|x|$ away from $0$ (here via $|x-2|<1\\Rightarrow x>1$) before choosing $\\delta$.",
  "solutions": [
   {
    "name": "Clamp then bound",
    "steps": [
     "Compute $\\left|\\dfrac1x-\\dfrac12\\right|=\\dfrac{|2-x|}{2|x|}=\\dfrac{|x-2|}{2|x|}$.",
     "First constrain $|x-2|<1$, which forces $1<x<3$, hence $|x|>1$ and $\\dfrac1{|x|}<1$.",
     "Under that constraint $\\left|\\dfrac1x-\\dfrac12\\right|<\\dfrac{|x-2|}{2}$.",
     "Choose $\\delta=\\min\\{1,2\\varepsilon\\}$. If $|x-2|<\\delta$ then $\\left|\\dfrac1x-\\dfrac12\\right|<\\dfrac{|x-2|}{2}<\\dfrac{2\\varepsilon}{2}=\\varepsilon.$ $\\boxed{\\text{Continuous at }2.}$"
    ]
   },
   {
    "name": "Geometric interval inversion",
    "steps": [
     "Solve $\\left|\\dfrac1x-\\dfrac12\\right|<\\varepsilon$ directly: $\\dfrac12-\\varepsilon<\\dfrac1x<\\dfrac12+\\varepsilon$.",
     "For small $\\varepsilon$ ($\\varepsilon<\\tfrac12$) all terms positive, invert: $\\dfrac{1}{\\tfrac12+\\varepsilon}<x<\\dfrac{1}{\\tfrac12-\\varepsilon}$, i.e. $\\dfrac{2}{1+2\\varepsilon}<x<\\dfrac{2}{1-2\\varepsilon}$.",
     "This open interval contains $2$; its smaller one-sided gap is the left gap $2-\\dfrac{2}{1+2\\varepsilon}=\\dfrac{4\\varepsilon}{1+2\\varepsilon}$.",
     "Any $\\delta\\le\\dfrac{4\\varepsilon}{1+2\\varepsilon}$ works; since $\\dfrac{4\\varepsilon}{1+2\\varepsilon}>\\varepsilon\\ge\\min\\{1,2\\varepsilon\\}$ for the relevant range too, the simple $\\boxed{\\delta=\\min\\{1,2\\varepsilon\\}}$ is rigorously valid."
    ]
   }
  ],
  "remark": "Insight: every continuity proof for an unbounded-derivative function (reciprocals, roots, logs) splits into two acts — Act I clamps the domain to control the 'amplification factor', Act II chooses $\\delta$ proportional to $\\varepsilon$. Skipping Act I is the single most common $\\varepsilon$–$\\delta$ sin."
 },
 {
  "theme": "epsilondelta",
  "themeLabel": "The ε–δ Definition",
  "title": "The Square Root's Vertical Tangent",
  "difficulty": 4,
  "task": "Prove that",
  "tags": [
   "epsilon-delta",
   "square-root",
   "continuity",
   "one-sided"
  ],
  "statement": "Let $f(x)=\\sqrt{x}$ on $[0,\\infty)$. Prove from the definition that:\n\\begin{enumerate}\n\\item[(a)] $f$ is (right-)continuous at $c=0$, exhibiting $\\delta(\\varepsilon)$;\n\\item[(b)] $f$ is continuous at a general point $c>0$, exhibiting $\\delta(\\varepsilon,c)$.\n\\end{enumerate}\nIn each case the $\\delta$ must be explicit and may depend only on $\\varepsilon$ and $c$.",
  "answer": "Proved. (a) At $c=0$: take $\\delta(\\varepsilon)=\\varepsilon^2$. (b) At $c>0$: take $\\delta(\\varepsilon,c)=\\varepsilon\\sqrt{c}$ (equivalently $\\min\\{c,\\varepsilon\\sqrt c\\}$ if one wants to also guarantee $x>0$).",
  "trap": "At $c=0$ choosing $\\delta=\\varepsilon$ 'because $\\sqrt{}$ is increasing.' That fails: $|\\sqrt{x}-0|<\\varepsilon$ requires $x<\\varepsilon^2$, not $x<\\varepsilon$. The square root's vertical tangent at $0$ means $\\delta$ must shrink \\emph{quadratically} in $\\varepsilon$, while at $c>0$ it grows linearly.",
  "solutions": [
   {
    "name": "At 0: invert; at c>0: conjugate",
    "steps": [
     "(a) $|\\sqrt x-0|<\\varepsilon\\iff \\sqrt x<\\varepsilon\\iff 0\\le x<\\varepsilon^2$. So $\\delta=\\varepsilon^2$ makes $|x-0|<\\delta\\Rightarrow\\sqrt x<\\varepsilon$. $\\boxed{\\delta=\\varepsilon^2}$.",
     "(b) For $c>0$, rationalize: $|\\sqrt x-\\sqrt c|=\\dfrac{|x-c|}{\\sqrt x+\\sqrt c}\\le\\dfrac{|x-c|}{\\sqrt c}$ (since $\\sqrt x\\ge0$).",
     "Choose $\\delta=\\varepsilon\\sqrt c$. Then $|x-c|<\\delta\\Rightarrow|\\sqrt x-\\sqrt c|\\le\\dfrac{|x-c|}{\\sqrt c}<\\dfrac{\\varepsilon\\sqrt c}{\\sqrt c}=\\varepsilon.$ $\\boxed{\\delta=\\varepsilon\\sqrt c}$."
    ]
   },
   {
    "name": "Uniform-looking bound via |√x−√c|≤√|x−c|",
    "steps": [
     "Use the elementary inequality $|\\sqrt a-\\sqrt b|\\le\\sqrt{|a-b|}$ for $a,b\\ge0$ (square both sides to verify).",
     "Then $|\\sqrt x-\\sqrt c|\\le\\sqrt{|x-c|}$, valid for ALL $c\\ge0$ including $c=0$.",
     "To force $\\sqrt{|x-c|}<\\varepsilon$ pick $\\delta=\\varepsilon^2$; this single rule proves continuity everywhere on $[0,\\infty)$ at once.",
     "Note the linear-$\\varepsilon$ bound of Solution 1 is sharper for fixed $c>0$, but this $\\boxed{\\delta=\\varepsilon^2}$ rule is the honest uniformly-valid one — illustrating $\\sqrt{}$ is uniformly continuous."
    ]
   }
  ],
  "remark": "Insight: the SHAPE of $\\delta(\\varepsilon)$ encodes the steepness of $f$. Linear $\\delta$ ($\\propto\\varepsilon$) means bounded slope; the quadratic $\\delta=\\varepsilon^2$ at $0$ is the analytic fingerprint of the vertical tangent. The inequality $|\\sqrt a-\\sqrt b|\\le\\sqrt{|a-b|}$ is the key that simultaneously handles the pathological point and proves uniform continuity."
 },
 {
  "theme": "epsilondelta",
  "themeLabel": "The ε–δ Definition",
  "title": "The Largest Delta the Reciprocal Allows",
  "difficulty": 5,
  "task": "Find the largest",
  "tags": [
   "epsilon-delta",
   "reciprocal",
   "largest-delta",
   "interval-inversion"
  ],
  "statement": "For $f(x)=\\dfrac1x$ at $c=2$ and challenge value $\\varepsilon=\\dfrac1{10}$, determine the \\emph{largest} $\\delta>0$ for which\n\\[\n|x-2|<\\delta\\;\\Longrightarrow\\;\\left|\\tfrac1x-\\tfrac12\\right|<\\tfrac1{10}.\n\\]\nState the exact optimal $\\delta$ and explain which side of $c$ is binding.",
  "answer": "The largest such $\\delta$ is $\\boxed{\\dfrac13}$. The condition gives the solution set $\\left(\\tfrac53,\\tfrac52\\right)$; the left gap $2-\\tfrac53=\\tfrac13$ is smaller than the right gap $\\tfrac52-2=\\tfrac12$, so the LEFT side is binding.",
  "trap": "Symmetrizing too early: using $\\left|\\tfrac1x-\\tfrac12\\right|\\le\\tfrac{|x-2|}{2}$ gives the safe $\\delta=\\tfrac15$, but that is far from largest. Worse, a student may take the half-width of $(\\tfrac53,\\tfrac52)$, namely $\\tfrac{1}{2}\\cdot(\\tfrac52-\\tfrac53)=\\tfrac{5}{12}$, as $\\delta$ — illegal, because the interval is NOT centered at $2$, so that $\\delta$ would let $x$ exceed $\\tfrac52$.",
  "solutions": [
   {
    "name": "Invert the inequality, take the smaller gap",
    "steps": [
     "$\\left|\\dfrac1x-\\dfrac12\\right|<\\dfrac1{10}\\iff \\dfrac12-\\dfrac1{10}<\\dfrac1x<\\dfrac12+\\dfrac1{10}\\iff \\dfrac{2}{5}<\\dfrac1x<\\dfrac35.$",
     "All quantities positive, so invert (reversing inequalities): $\\dfrac53<x<\\dfrac52$.",
     "The point $c=2$ lies inside; the symmetric ball $(2-\\delta,2+\\delta)$ fits iff $\\delta\\le 2-\\tfrac53=\\tfrac13$ AND $\\delta\\le\\tfrac52-2=\\tfrac12$.",
     "The binding (smaller) constraint is the left one: $\\boxed{\\delta_{\\max}=\\tfrac13}$. At $x=\\tfrac53$ we get exactly $\\left|\\tfrac1x-\\tfrac12\\right|=\\tfrac1{10}$, confirming optimality."
    ]
   },
   {
    "name": "Sharp factor bound, both directions",
    "steps": [
     "Write $\\left|\\dfrac1x-\\dfrac12\\right|=\\dfrac{|x-2|}{2x}$ (valid for $x>0$).",
     "Right side $x=2+t$: need $\\dfrac{t}{2(2+t)}<\\tfrac1{10}\\Rightarrow 10t<4+2t\\Rightarrow t<\\tfrac12$.",
     "Left side $x=2-t$: need $\\dfrac{t}{2(2-t)}<\\tfrac1{10}\\Rightarrow 10t<4-2t\\Rightarrow t<\\tfrac13$.",
     "The two-sided requirement is $t<\\min\\{\\tfrac12,\\tfrac13\\}=\\tfrac13$, so $\\boxed{\\delta_{\\max}=\\tfrac13}$, with the LEFT side binding because shrinking $x$ pushes $\\tfrac1x$ up faster."
    ]
   }
  ],
  "remark": "Insight: the asymmetry is the whole point. Because $\\tfrac1x$ is convex and steeper for smaller $x$, equal moves of $x$ left vs. right produce unequal moves of $\\tfrac1x$ — so the largest centered $\\delta$ is always governed by the side where the function is steeper. Never center a ball on a non-centered solution interval."
 },
 {
  "theme": "epsilondelta",
  "themeLabel": "The ε–δ Definition",
  "title": "A Pin Through the Origin: x·sin(1/x)",
  "difficulty": 4,
  "task": "Prove that",
  "tags": [
   "epsilon-delta",
   "squeeze",
   "oscillation",
   "continuity-at-a-point"
  ],
  "statement": "Define\n\\[\nf(x)=\\begin{cases}x\\,\\sin\\!\\dfrac1x,&x\\neq0,\\\\[4pt]0,&x=0.\\end{cases}\n\\]\nProve, strictly from the $\\varepsilon$–$\\delta$ definition, that $f$ is continuous at $c=0$, giving an explicit $\\delta(\\varepsilon)$.",
  "answer": "Proved. The choice $\\delta(\\varepsilon)=\\varepsilon$ works: $|x-0|<\\varepsilon\\Rightarrow|f(x)-f(0)|=\\left|x\\sin(1/x)\\right|\\le|x|<\\varepsilon.$",
  "trap": "Trying to control $\\sin(1/x)$ by 'making $1/x$ large so $\\sin$ is small' — false, since $\\sin(1/x)$ oscillates between $\\pm1$ no matter how small $x$ is and never settles. Indeed, taking $x_k=1/(\\tfrac{\\pi}{2}+2k\\pi)\\to0$ gives $\\sin(1/x_k)=1$ for every $k$, so the sine has no limit at $0$. The function is NOT eventually small because of the sine; it is small because the \\emph{amplitude} $|x|$ crushes the bounded oscillation. Do not seek a $\\delta$ from the sine.",
  "solutions": [
   {
    "name": "Direct amplitude bound",
    "steps": [
     "For $x\\ne0$, $|f(x)-f(0)|=\\left|x\\sin\\tfrac1x\\right|=|x|\\cdot\\left|\\sin\\tfrac1x\\right|\\le|x|\\cdot1=|x|.$ For $x=0$ the difference is $0$.",
     "So for ALL $x$, $|f(x)-f(0)|\\le|x|=|x-0|$.",
     "Given $\\varepsilon>0$, set $\\delta=\\varepsilon$. Then $0<|x-0|<\\delta\\Rightarrow|f(x)-f(0)|\\le|x-0|<\\varepsilon$, and the case $x=0$ is trivial.",
     "Hence $f$ is continuous at $0$. $\\boxed{\\delta=\\varepsilon.}$"
    ]
   },
   {
    "name": "Squeeze converted to ε–δ",
    "steps": [
     "Note $-|x|\\le x\\sin(1/x)\\le|x|$ for $x\\ne0$, and the value at $0$ is $0$, which also lies in $[-|x|,|x|]$ trivially.",
     "Thus $f(x)$ is squeezed between $g(x)=-|x|$ and $h(x)=|x|$, both of which satisfy $|g(x)-0|=|h(x)-0|=|x|$.",
     "Continuity of the squeezing functions at $0$ with $\\delta=\\varepsilon$ transfers: whenever $|x|<\\varepsilon$, both $g(x),h(x)\\in(-\\varepsilon,\\varepsilon)$, hence so does $f(x)$.",
     "Therefore $|f(x)-f(0)|<\\varepsilon$, proving continuity with $\\boxed{\\delta=\\varepsilon}$ — the squeeze theorem made fully $\\varepsilon$–$\\delta$ explicit."
    ]
   }
  ],
  "remark": "Insight: $x\\sin(1/x)$ is the textbook reminder that continuity does NOT require the function to 'calm down' near the point. Wild oscillation is fine as long as a vanishing envelope ($|x|$) pins it to the limit. Contrast with $\\sin(1/x)$ (no envelope), where the same oscillation has no limit at $0$ and continuity collapses."
 },
 {
  "theme": "epsilondelta",
  "themeLabel": "The ε–δ Definition",
  "title": "The Oscillation No Delta Can Cure",
  "difficulty": 4,
  "task": "Prove that",
  "tags": [
   "epsilon-delta",
   "discontinuity",
   "oscillation",
   "witness-epsilon"
  ],
  "statement": "Let $L\\in\\mathbb{R}$ be arbitrary and define\n\\[\ng(x)=\\begin{cases}\\sin\\dfrac1x,&x\\neq0,\\\\[4pt]L,&x=0.\\end{cases}\n\\]\nProve, directly from the $\\varepsilon$–$\\delta$ definition, that $g$ is discontinuous at $0$ \\emph{no matter how} $L$ is chosen, by exhibiting a single $\\varepsilon>0$ for which no $\\delta$ works.",
  "answer": "Proved. The witness is $\\varepsilon=\\dfrac12$. For every $\\delta>0$ there exist points $x_+, x_-\\in(0,\\delta)$ with $g(x_+)=1$ and $g(x_-)=-1$; at least one of $|1-L|,|-1-L|$ is $\\ge1>\\tfrac12=\\varepsilon$, so the $\\varepsilon$–$\\delta$ condition fails for $\\varepsilon=\\tfrac12$.",
  "trap": "Believing you can 'fix' the discontinuity by defining $g(0)=L$ for some clever $L$ (e.g. $L=0$). No value of $L$ helps: the function attains BOTH $+1$ and $-1$ in every neighborhood of $0$, so $L$ cannot be within $\\tfrac12$ of both. A removable discontinuity requires the limit to exist—here $\\lim_{x\\to0}\\sin\\tfrac1x$ does not exist (the values fill $[-1,1]$ in every punctured neighborhood), so the discontinuity is essential, not removable.",
  "solutions": [
   {
    "name": "Two sequences, one witness epsilon",
    "steps": [
     "Fix $\\varepsilon=\\tfrac12$ (independent of $\\delta$, as a discontinuity witness must be). Let $\\delta>0$ be arbitrary.",
     "Choose an integer $n$ with $n>\\dfrac{1}{2\\pi}\\!\\left(\\dfrac1\\delta-\\dfrac\\pi2\\right)$, and set $x_+=\\dfrac{1}{2\\pi n+\\pi/2}$. Then $0<x_+<\\delta$ and $g(x_+)=\\sin\\!\\left(2\\pi n+\\tfrac\\pi2\\right)=1$.",
     "Likewise pick an integer $m$ with $m>\\dfrac{1}{2\\pi}\\!\\left(\\dfrac1\\delta+\\dfrac\\pi2\\right)$, and set $x_-=\\dfrac{1}{2\\pi m-\\pi/2}$. Then $0<x_-<\\delta$ and $g(x_-)=\\sin\\!\\left(2\\pi m-\\tfrac\\pi2\\right)=-1$.",
     "By the triangle inequality $2=|g(x_+)-g(x_-)|\\le|g(x_+)-L|+|L-g(x_-)|$, so $\\max\\{|g(x_+)-L|,|g(x_-)-L|\\}\\ge1>\\tfrac12$. Hence some point within $\\delta$ of $0$ violates $|g(x)-L|<\\tfrac12$. Since $\\delta>0$ was arbitrary, no $\\delta$ works for $\\varepsilon=\\tfrac12$, and $\\boxed{g\\text{ is discontinuous at }0}$ for every $L$."
    ]
   },
   {
    "name": "Contradiction via the would-be limit",
    "steps": [
     "Suppose for contradiction $g$ is continuous at $0$. Then for $\\varepsilon=\\tfrac12$ some $\\delta>0$ gives $|g(x)-L|<\\tfrac12$ for all $|x|<\\delta$.",
     "Consequently, for any two such points $x_1,x_2\\in(-\\delta,\\delta)$ we get $|g(x_1)-g(x_2)|\\le|g(x_1)-L|+|L-g(x_2)|<\\tfrac12+\\tfrac12=1$.",
     "But by the construction in Method 1 there are points $x_+,x_-\\in(0,\\delta)$ with $g(x_+)=1$, $g(x_-)=-1$, so $|g(x_+)-g(x_-)|=|1-(-1)|=2\\not<1$.",
     "This contradiction shows no $\\delta$ works for $\\varepsilon=\\tfrac12$; therefore $\\boxed{g\\text{ is discontinuous at }0}$ for every $L$."
    ]
   }
  ],
  "remark": "Insight: to PROVE discontinuity you must produce the $\\varepsilon$ FIRST and keep it fixed while $\\delta$ ranges over all positives—the exact logical mirror of continuity. The oscillation of $g$ at $0$, namely $\\limsup_{x\\to0}g-\\liminf_{x\\to0}g=1-(-1)=2$, is precisely twice the largest workable witness: any $\\varepsilon\\le1$ serves, since $\\max\\{|1-L|,|-1-L|\\}\\ge1\\ge\\varepsilon$ for all $L$. A positive oscillation is the structural certificate that no choice of $g(0)=L$ can heal the gap."
 },
 {
  "theme": "epsilondelta",
  "themeLabel": "The ε–δ Definition",
  "title": "Continuous at One Point, Nowhere Else",
  "difficulty": 5,
  "task": "Determine",
  "tags": [
   "epsilon-delta",
   "rational-irrational",
   "continuity-set",
   "witness-epsilon"
  ],
  "statement": "Define $h:\\mathbb{R}\\to\\mathbb{R}$ by\n\\[\nh(x)=\\begin{cases}x,&x\\in\\mathbb{Q},\\\\ -x,&x\\notin\\mathbb{Q}.\\end{cases}\n\\]\nDetermine the exact set of points at which $h$ is continuous, and justify both the continuity and every discontinuity strictly via $\\varepsilon$–$\\delta$ (with explicit $\\delta$ where continuous, explicit witness $\\varepsilon$ where not).",
  "answer": "$h$ is continuous \\emph{only} at $x=0$. Continuity at $0$: $\\delta(\\varepsilon)=\\varepsilon$ works since $|h(x)|=|x|$ for all $x$. At any $c\\neq0$: the witness $\\varepsilon=|c|$ defeats every $\\delta$, so $h$ is discontinuous there. Continuity set $=\\{0\\}$.",
  "trap": "Assuming a function this 'broken' can't be continuous anywhere, or conversely that it's continuous wherever $x=-x$ accidentally — i.e. only $0$ but via faulty reasoning. The subtle point: at $c\\ne0$ the two branches differ by $|x-(-x)|=2|x|\\approx2|c|$, and BOTH rationals and irrationals are dense, so every ball around $c$ holds values near $c$ and near $-c$.",
  "solutions": [
   {
    "name": "Continuity at 0 plus density witness elsewhere",
    "steps": [
     "At $c=0$: for every $x$, $|h(x)-h(0)|=|h(x)|=|x|$ (both branches give $|{\\pm}x|=|x|$). So $\\delta=\\varepsilon$ yields $|x|<\\delta\\Rightarrow|h(x)-0|<\\varepsilon$. Continuous at $0$. $\\boxed{\\delta=\\varepsilon.}$",
     "At $c\\ne0$: set $\\varepsilon=|c|>0$. Let $\\delta>0$ be arbitrary. WLOG say $c\\in\\mathbb{Q}$ so $h(c)=c$.",
     "By density of irrationals pick irrational $x$ with $|x-c|<\\min\\{\\delta,\\tfrac{|c|}{2}\\}$; then $h(x)=-x$ and $|h(x)-h(c)|=|-x-c|=|x+c|\\ge2|c|-|x-c|>2|c|-\\tfrac{|c|}2=\\tfrac{3|c|}2>|c|=\\varepsilon.$",
     "So the $\\varepsilon$-condition fails for every $\\delta$; the same argument with rationals handles irrational $c$. Hence $\\boxed{h\\text{ is continuous exactly on }\\{0\\}.}$"
    ]
   },
   {
    "name": "Sequential characterization, made ε–δ",
    "steps": [
     "Take any $c\\ne0$. Build a sequence $x_n\\to c$ of the type OPPOSITE to $c$ (irrationals if $c$ rational, vice versa); density guarantees this.",
     "Then $h(x_n)=-x_n\\to-c$, while $h(c)=c$, and $-c\\ne c$ since $c\\ne0$. So $h(x_n)\\not\\to h(c)$: discontinuity.",
     "Converting to $\\varepsilon$–$\\delta$: the gap $|{-c}-c|=2|c|$ means any $\\varepsilon\\le 2|c|$ — in particular $\\varepsilon=|c|$ — is unbeatable, since infinitely many $x_n$ land in every $\\delta$-ball with $|h(x_n)-h(c)|\\to2|c|>\\varepsilon$.",
     "At $c=0$ both branches collapse to magnitude $|x|$, giving $\\delta=\\varepsilon$; thus the continuity set is precisely $\\boxed{\\{0\\}}$."
    ]
   }
  ],
  "remark": "Insight: $h$ is continuous only where its two branches AGREE in the limit, i.e. where $x=-x$, namely $x=0$. The branches' agreement at a point, combined with the squeeze $|h(x)|=|x|$, gives one lonely point of continuity — a clean instance of 'continuous at a point but on no interval'."
 },
 {
  "theme": "epsilondelta",
  "themeLabel": "The ε–δ Definition",
  "title": "Thomae's Function: Continuity Hiding in the Irrationals",
  "difficulty": 5,
  "task": "Determine",
  "tags": [
   "epsilon-delta",
   "thomae",
   "continuity-set",
   "finiteness-argument"
  ],
  "statement": "Let Thomae's function $T:(0,1)\\to\\mathbb{R}$ be\n\\[\nT(x)=\\begin{cases}\\dfrac1q,&x=\\dfrac pq\\text{ in lowest terms},\\;q\\ge1,\\\\[6pt]0,&x\\text{ irrational}.\\end{cases}\n\\]\nDetermine the set of continuity points of $T$. Prove discontinuity at $x=\\tfrac13$ with an explicit witness $\\varepsilon$, and prove continuity at $x=\\dfrac1{\\sqrt2}$ by producing an explicit $\\delta$ for a general $\\varepsilon$.",
  "answer": "$T$ is continuous at every irrational and discontinuous at every rational. At $\\tfrac13$: $T(\\tfrac13)=\\tfrac13$, witness $\\varepsilon=\\tfrac16$. At $\\alpha=\\tfrac1{\\sqrt2}$ (irrational): for given $\\varepsilon>0$, with $N=\\lfloor1/\\varepsilon\\rfloor$, take $\\delta=\\min\\{\\,\\text{dist}(\\alpha,\\,p/q):1\\le q\\le N,\\;p/q\\in(0,1)\\,\\}>0$; then $|x-\\alpha|<\\delta\\Rightarrow|T(x)-0|<\\varepsilon.$",
  "trap": "Thinking continuity needs a single formula-based $\\delta$. Here $\\delta$ comes from a FINITENESS argument: only finitely many rationals in $(0,1)$ have denominator $\\le N$, so their finite minimal distance to the irrational $\\alpha$ is positive and serves as $\\delta$. A student who hand-waves 'rationals are dense so it must be discontinuous everywhere' misses that the bad values $1/q$ become rare and small.",
  "solutions": [
   {
    "name": "Discontinuity at 1/3 via dense irrationals",
    "steps": [
     "$T(\\tfrac13)=\\tfrac13$. Choose witness $\\varepsilon=\\tfrac16$.",
     "For any $\\delta>0$, density of irrationals gives an irrational $x$ with $|x-\\tfrac13|<\\delta$ and $T(x)=0$.",
     "Then $|T(x)-T(\\tfrac13)|=|0-\\tfrac13|=\\tfrac13>\\tfrac16=\\varepsilon$.",
     "So no $\\delta$ works for $\\varepsilon=\\tfrac16$: $\\boxed{T\\text{ is discontinuous at }\\tfrac13}$ (the same with $\\varepsilon=\\tfrac1{2q}$ at any $p/q$)."
    ]
   },
   {
    "name": "Continuity at the irrational 1/√2 by finiteness",
    "steps": [
     "Let $\\alpha=\\tfrac1{\\sqrt2}$ (irrational, $T(\\alpha)=0$) and fix $\\varepsilon>0$. Set $N=\\lfloor1/\\varepsilon\\rfloor$.",
     "A rational $p/q\\in(0,1)$ has $T=1/q\\ge\\varepsilon$ ONLY if $q\\le N$. There are finitely many such $p/q$ (at most $\\sum_{q\\le N}q$), and none equals $\\alpha$.",
     "Let $\\delta=\\min$ over these finitely many points of $|\\alpha-p/q|>0$ (a positive minimum of a finite set).",
     "If $|x-\\alpha|<\\delta$: either $x$ is irrational so $T(x)=0<\\varepsilon$, or $x=p/q$ with $q>N$ so $T(x)=1/q<1/N\\le\\varepsilon$ (and $x$ avoids all the $q\\le N$ points by choice of $\\delta$). Either way $|T(x)-0|<\\varepsilon$, so $\\boxed{T\\text{ is continuous at }\\tfrac1{\\sqrt2}.}$"
    ]
   },
   {
    "name": "Limit-is-zero everywhere argument",
    "steps": [
     "Claim $\\lim_{x\\to c}T(x)=0$ for EVERY $c\\in(0,1)$, rational or not, by the same finiteness $\\delta$ as above (the value at $c$ itself is excluded in the limit).",
     "Continuity at $c$ holds iff $T(c)=\\lim_{x\\to c}T(x)=0$, i.e. iff $c$ is irrational.",
     "At rational $c=p/q$, $T(c)=1/q\\ne0=\\lim$, giving discontinuity (witness $\\varepsilon=\\tfrac1{2q}$).",
     "Therefore the continuity set is exactly the irrationals in $(0,1)$; in particular continuous at $\\tfrac1{\\sqrt2}$, discontinuous at $\\tfrac13$. $\\boxed{\\text{Continuity set}=\\text{irrationals}.}$"
    ]
   }
  ],
  "remark": "Insight: Thomae's function is the crown jewel of $\\varepsilon$–$\\delta$ pedagogy — its $\\delta$ is not algebraic but combinatorial, born from the fact that 'large-denominator' rationals are simultaneously dense AND have tiny values. It exhibits a function continuous on an uncountable dense set and discontinuous on a countable dense set."
 },
 {
  "theme": "epsilondelta",
  "themeLabel": "The ε–δ Definition",
  "title": "A Limit Earned Honestly",
  "difficulty": 4,
  "task": "Find a δ",
  "tags": [
   "epsilon-delta",
   "limit",
   "quadratic",
   "clamping"
  ],
  "statement": "Using only the $\\varepsilon$–$\\delta$ definition of a limit, prove that\n\\[\n\\lim_{x\\to1}\\bigl(x^2+2x\\bigr)=3,\n\\]\nby producing an explicit $\\delta(\\varepsilon)$ depending only on $\\varepsilon$. Then state the $\\delta$ that corresponds to the specific tolerance $\\varepsilon=\\tfrac1{10}$.",
  "answer": "Proved with $\\delta(\\varepsilon)=\\min\\!\\left\\{1,\\dfrac{\\varepsilon}{5}\\right\\}$. For $\\varepsilon=\\tfrac1{10}$ this gives $\\delta=\\min\\{1,\\tfrac1{50}\\}=\\dfrac1{50}$.",
  "trap": "Bounding $|x+3|$ by something that still contains $x$, e.g. writing '$\\delta=\\varepsilon/|x+3|$'. That makes $\\delta$ depend on the running variable $x$, which is forbidden — $\\delta$ may depend only on $\\varepsilon$ (and the fixed center $1$). You must first clamp $x$ to a fixed window to replace $|x+3|$ by a constant.",
  "solutions": [
   {
    "name": "Factor, clamp, choose",
    "steps": [
     "$|(x^2+2x)-3|=|x^2+2x-3|=|x-1|\\,|x+3|$.",
     "Pre-clamp $|x-1|<1$, so $0<x<2$ and hence $3<x+3<5$, giving $|x+3|<5$.",
     "Then under that clamp $|(x^2+2x)-3|<5\\,|x-1|$.",
     "Choose $\\delta=\\min\\{1,\\varepsilon/5\\}$. If $0<|x-1|<\\delta$ then $|(x^2+2x)-3|<5\\cdot\\tfrac\\varepsilon5=\\varepsilon.$ For $\\varepsilon=\\tfrac1{10}$, $\\boxed{\\delta=\\tfrac1{50}.}$"
    ]
   },
   {
    "name": "Complete-the-square interval inversion",
    "steps": [
     "Note $x^2+2x-3=(x+1)^2-4$, so $|(x+1)^2-4|<\\varepsilon\\iff 4-\\varepsilon<(x+1)^2<4+\\varepsilon$.",
     "Near $x=1$, $x+1>0$, so $\\sqrt{4-\\varepsilon}<x+1<\\sqrt{4+\\varepsilon}$, i.e. $\\sqrt{4-\\varepsilon}-2<x-1<\\sqrt{4+\\varepsilon}-2.$",
     "The smaller one-sided gap is $2-\\sqrt{4-\\varepsilon}$; one may take $\\delta=2-\\sqrt{4-\\varepsilon}$ (the exact largest), which exceeds $\\tfrac\\varepsilon5$ for small $\\varepsilon$.",
     "Thus the simple sufficient rule $\\boxed{\\delta=\\min\\{1,\\varepsilon/5\\}}$ is valid, and for $\\varepsilon=\\tfrac1{10}$ gives $\\delta=\\tfrac1{50}$; the sharper exact value is $2-\\sqrt{3.9}\\approx0.02516$."
    ]
   }
  ],
  "remark": "Insight: the universal recipe for polynomial limits is FACTOR–CLAMP–CHOOSE. The clamp ($|x-1|<1$) freezes the unbounded factor into a constant, restoring the legality of an $x$-free $\\delta$. Completing the square reveals the exact optimal $\\delta$ for the curious, but the min-rule is what graders want."
 },
 {
  "theme": "epsilondelta",
  "themeLabel": "The ε–δ Definition",
  "title": "The Cubic's Three-Term Companion",
  "difficulty": 4,
  "task": "Prove that",
  "tags": [
   "epsilon-delta",
   "cubic",
   "continuity",
   "clamping"
  ],
  "statement": "Prove from the $\\varepsilon$–$\\delta$ definition that $f(x)=x^3$ is continuous at an arbitrary point $c\\in\\mathbb{R}$, by exhibiting an explicit $\\delta(\\varepsilon,c)$ that depends only on $\\varepsilon$ and $c$. Verify your formula at $c=2$ with $\\varepsilon=\\tfrac1{10}$.",
  "answer": "Proved. With $M=(|c|+1)^2+|c|(|c|+1)+c^2=3c^2+3|c|+1$, the choice $\\delta(\\varepsilon,c)=\\min\\!\\left\\{1,\\dfrac{\\varepsilon}{M}\\right\\}$ works. At $c=2$: $M=9+6+4=19$, so for $\\varepsilon=\\tfrac1{10}$, $\\delta=\\min\\{1,\\tfrac1{190}\\}=\\dfrac1{190}\\approx0.005263.$",
  "trap": "Bounding the factor $|x^2+cx+c^2|$ using $|x|$ without clamping, or assuming $|x^2+cx+c^2|\\le3c^2$ (true only at $x=c$). The cofactor grows with $|x|$, so on $|x-c|<1$ it can reach $3c^2+3|c|+1>3c^2$ (e.g. at $c=2$ it hits $19>12$). You must clamp $|x-c|<1\\Rightarrow|x|<|c|+1$ first, THEN bound each of the three terms by a constant.",
  "solutions": [
   {
    "name": "Factor the difference of cubes",
    "steps": [
     "$|x^3-c^3|=|x-c|\\,|x^2+cx+c^2|$.",
     "Clamp $|x-c|<1\\Rightarrow|x|<|c|+1$. Bound each term: $|x^2|<(|c|+1)^2$, $|cx|<|c|(|c|+1)$, $|c^2|=c^2$.",
     "Hence $|x^2+cx+c^2|\\le(|c|+1)^2+|c|(|c|+1)+c^2=:M$.",
     "Choose $\\delta=\\min\\{1,\\varepsilon/M\\}$; then $|x-c|<\\delta\\Rightarrow|x^3-c^3|<M\\cdot\\tfrac\\varepsilon M=\\varepsilon.$ At $c=2$, $M=19$, $\\varepsilon=\\tfrac1{10}\\Rightarrow\\boxed{\\delta=\\tfrac1{190}.}$"
    ]
   },
   {
    "name": "Telescoping with the algebraic identity a³−b³",
    "steps": [
     "Use $x^3-c^3=(x-c)(x^2+cx+c^2)$ and the substitution $x=c+t$ with $|t|=|x-c|<1$.",
     "Expand the cofactor: $x^2+cx+c^2=(c+t)^2+c(c+t)+c^2=3c^2+3ct+t^2$.",
     "Bound: $|3c^2+3ct+t^2|\\le3c^2+3|c|\\,|t|+t^2\\le3c^2+3|c|+1=:M'$ (using $|t|<1$).",
     "Take $\\delta=\\min\\{1,\\varepsilon/M'\\}$. At $c=2$: $M'=12+6+1=19$, matching, so $\\boxed{\\delta=\\tfrac1{190}}$ for $\\varepsilon=\\tfrac1{10}$ — the two bounds coincide here."
    ]
   }
  ],
  "remark": "Insight: continuity of every polynomial follows from this single template — difference-of-powers factoring plus a clamp that caps the cofactor. The constant $M=3c^2+3|c|+1\\approx3c^2$ for large $|c|$ is exactly $|f'(c)|$, foreshadowing that the local Lipschitz constant IS the derivative; the $\\varepsilon$–$\\delta$ proof secretly computes a crude bound on $f'$."
 },
 {
  "theme": "types",
  "themeLabel": "Classifying Discontinuities",
  "title": "The Factor That Vanishes",
  "difficulty": 3,
  "task": "Classify and redefine",
  "tags": [
   "removable",
   "rational-function",
   "limit",
   "redefine"
  ],
  "statement": "Let \\[ f(x)=\\frac{x^{3}-1}{x^{2}-1},\\qquad x\\neq\\pm 1. \\] Classify the discontinuity of $f$ at each of the points $x=1$ and $x=-1$. For every removable discontinuity, state the single value to which $f$ should be (re)defined so that the patched function is continuous there.",
  "answer": "At $x=1$: removable; redefine $f(1)=\\tfrac{3}{2}$. At $x=-1$: essential (infinite) discontinuity — the one-sided limits are $+\\infty$ on the right and $-\\infty$ on the left, so it cannot be removed.",
  "trap": "Cancelling $\\frac{x^3-1}{x^2-1}=\\frac{x^2+x+1}{x+1}$ and treating BOTH points the same. The cancellation only kills the $(x-1)$ factor; the surviving $(x+1)$ in the denominator still blows up at $x=-1$, which is therefore NOT removable.",
  "solutions": [
   {
    "name": "Factor and cancel",
    "steps": [
     "Factor: $x^3-1=(x-1)(x^2+x+1)$ and $x^2-1=(x-1)(x+1)$.",
     "For $x\\neq 1$, $f(x)=\\dfrac{x^2+x+1}{x+1}$.",
     "At $x=1$ this reduced form is continuous with value $\\dfrac{1+1+1}{2}=\\dfrac{3}{2}$, a finite limit absent from the original domain $\\Rightarrow$ removable; set $f(1)=\\tfrac32$.",
     "At $x=-1$ the numerator $x^2+x+1=1$ while the denominator $x+1\\to0$, so $|f|\\to\\infty$ $\\Rightarrow$ infinite (essential), not removable. $\\boxed{f(1)=\\tfrac32;\\ x=-1\\text{ essential}}$"
    ]
   },
   {
    "name": "One-sided limits at $x=-1$",
    "steps": [
     "Near $x=-1$, $\\dfrac{x^2+x+1}{x+1}\\to\\dfrac{1}{0}$.",
     "As $x\\to-1^{+}$, $x+1\\to0^{+}$, so $f\\to+\\infty$; as $x\\to-1^{-}$, $x+1\\to0^{-}$, so $f\\to-\\infty$.",
     "Limits are infinite (and unequal in sign), so the discontinuity is essential/infinite and cannot be repaired by any finite value.",
     "Combined with the finite limit $\\tfrac32$ at $x=1$: $\\boxed{x=1\\text{ removable }(\\tfrac32),\\ x=-1\\text{ essential}}$"
    ]
   }
  ],
  "remark": "A single algebraic simplification can hide two completely different fates: the factor you cancel becomes removable, the factor that survives in the denominator becomes a pole. Always check both roots of the original denominator separately."
 },
 {
  "theme": "types",
  "themeLabel": "Classifying Discontinuities",
  "title": "Twin Floors at War",
  "difficulty": 3,
  "task": "Determine the type and count",
  "tags": [
   "floor",
   "removable",
   "count",
   "piecewise"
  ],
  "statement": "Define $g(x)=\\lfloor x\\rfloor+\\lfloor -x\\rfloor$ for all real $x$. Determine the type of discontinuity of $g$ at a typical integer, and find the number of points of $(-2,\\,3)$ at which $g$ is discontinuous.",
  "answer": "For non-integer $x$, $g(x)=-1$; for integer $x$, $g(x)=0$. At every integer $n$ both one-sided limits equal $-1$, so the two-sided limit $\\lim_{x\\to n}g(x)=-1$ exists but differs from $g(n)=0$. Hence each integer is a removable discontinuity. The integers inside $(-2,3)$ are $-1,0,1,2$, giving $\\boxed{4}$ discontinuities, each removable.",
  "trap": "Believing $\\lfloor x\\rfloor+\\lfloor -x\\rfloor=0$ for all $x$ (the 'odd-function' reflex). That holds only at integers; for non-integers $\\lfloor -x\\rfloor=-\\lfloor x\\rfloor-1$, giving $-1$. Missing this makes you declare $g\\equiv0$ continuous. A second, subtler trap is to call the integer discontinuities 'jumps': a jump needs the two one-sided limits to be unequal, but here they coincide at $-1$, so the break is removable, not a jump.",
  "solutions": [
   {
    "name": "Identity for the floor of a negative",
    "steps": [
     "For non-integer $x$, $\\lfloor -x\\rfloor=-\\lceil x\\rceil=-\\lfloor x\\rfloor-1$, so $g(x)=\\lfloor x\\rfloor+(-\\lfloor x\\rfloor-1)=-1$.",
     "For integer $x$, $\\lfloor -x\\rfloor=-x$ and $\\lfloor x\\rfloor=x$, so $g(x)=0$.",
     "Thus $g\\equiv-1$ on a punctured neighbourhood of any integer $n$ while $g(n)=0$. Both one-sided limits equal $-1$, so the two-sided limit $\\lim_{x\\to n}g(x)=-1$ exists; since it differs from $g(n)=0$, the discontinuity is removable (redefining $g(n):=-1$ would heal it).",
     "Integers inside $(-2,3)$ are $-1,0,1,2$: $\\boxed{4}$ removable discontinuities."
    ]
   },
   {
    "name": "Direct one-sided evaluation",
    "steps": [
     "At any integer $n$: for $x\\to n^{-}$ and $x\\to n^{+}$, $x$ is non-integer, so $g\\to-1$ from both sides.",
     "Because the left and right limits are equal ($-1=-1$), the limit exists; a jump would require them to differ, which never happens here.",
     "But $g(n)=0\\neq-1$, so the function value disagrees with the (existing) limit: this is precisely a removable discontinuity, never a jump or an essential singularity.",
     "Counting integers strictly between $-2$ and $3$: $\\{-1,0,1,2\\}\\Rightarrow\\boxed{4}$."
    ]
   }
  ],
  "remark": "The graph sits at level $-1$ everywhere except for isolated points lifted to $0$ at every integer, a comb of identical punctures. Each puncture is removable because the surrounding values close in on a single height $-1$; the lone mismatch is the function value itself. The lesson: $\\lfloor -x\\rfloor\\neq-\\lfloor x\\rfloor$ off the integers, and when both one-sided limits agree, the break is removable, not a jump."
 },
 {
  "theme": "types",
  "themeLabel": "Classifying Discontinuities",
  "title": "The Oscillator and Its Tamed Cousin",
  "difficulty": 4,
  "task": "Classify each",
  "tags": [
   "oscillatory",
   "essential",
   "removable",
   "sin-reciprocal",
   "squeeze"
  ],
  "statement": "For $x\\neq0$ let \\[ p(x)=\\sin\\!\\frac1x,\\qquad q(x)=x\\sin\\!\\frac1x,\\qquad r(x)=\\frac1x\\sin\\!\\frac1x. \\] Classify the discontinuity of each of $p,q,r$ at $x=0$ as removable, jump, or essential (oscillatory/infinite). For any that are removable, give the value that removes them.",
  "answer": "$p$: essential (oscillatory) — no one-sided limit exists. $q$: removable, set $q(0)=0$. $r$: essential (the amplitude $1/x$ is unbounded, so it oscillates with growing magnitude — no finite limit). Only $q$ is removable, with value $0$.",
  "trap": "Calling $p$ a 'jump' because it 'flips between $-1$ and $1$'. A jump requires both one-sided limits to EXIST and be finite-but-unequal; $\\sin(1/x)$ has no one-sided limit at all (it sweeps all of $[-1,1]$ infinitely often), so it is oscillatory-essential, not a jump.",
  "solutions": [
   {
    "name": "Squeeze for $q$, sequences for $p,r$",
    "steps": [
     "For $q$: $0\\le|x\\sin(1/x)|\\le|x|\\to0$, so $\\lim_{x\\to0}q(x)=0$ exists $\\Rightarrow$ removable, $q(0)=0$.",
     "For $p$: take $x_n=\\frac{1}{n\\pi}\\to0$ giving $p=0$, and $y_n=\\frac{1}{2n\\pi+\\pi/2}\\to0$ giving $p=1$; two subsequential limits differ, so no limit $\\Rightarrow$ essential (oscillatory).",
     "For $r$: on $x_n=\\frac{1}{2n\\pi+\\pi/2}$, $r=\\frac{1}{x_n}\\cdot1=2n\\pi+\\pi/2\\to+\\infty$; on $z_n=\\frac{1}{2n\\pi-\\pi/2}$, $r=-(2n\\pi-\\pi/2)\\to-\\infty$. Unbounded with no limit $\\Rightarrow$ essential.",
     "$\\boxed{p\\text{ essential},\\ q\\text{ removable }(0),\\ r\\text{ essential}}$"
    ]
   },
   {
    "name": "Amplitude reasoning",
    "steps": [
     "Write each as (amplitude)$\\times\\sin(1/x)$: amplitudes are $1$, $x$, $1/x$.",
     "$\\sin(1/x)$ has no limit at $0$; multiplying by an amplitude $\\to0$ (the $x$ case) forces the product to $0$ by squeeze — removable.",
     "Amplitude $\\equiv1$ leaves the oscillation intact and bounded but limitless — oscillatory essential.",
     "Amplitude $1/x\\to\\infty$ makes the oscillation unbounded — essential. Hence only $q$ is tamed: $\\boxed{q(0)=0}$."
    ]
   }
  ],
  "remark": "The amplitude decides everything. A shrinking amplitude squeezes oscillation into a point (removable); a constant amplitude leaves a bounded-but-limitless oscillation (essential); a growing amplitude gives unbounded oscillation (essential). None of the three is ever a jump."
 },
 {
  "theme": "types",
  "themeLabel": "Classifying Discontinuities",
  "title": "Continuous at a Single Pinhole",
  "difficulty": 4,
  "task": "Find all points of continuity",
  "tags": [
   "dirichlet",
   "rational-irrational",
   "squeeze",
   "continuity-set"
  ],
  "statement": "Let $\\mathbb{D}(x)=1$ if $x$ is rational and $\\mathbb{D}(x)=0$ if $x$ is irrational, and define \\[ h(x)=(x^{2}-4)\\,\\mathbb{D}(x). \\] Find all real numbers at which $h$ is continuous, and classify the discontinuity of $h$ at every other point.",
  "answer": "$h$ is continuous exactly at $x=2$ and $x=-2$. At every other real point $h$ has an essential (oscillatory, everywhere-dense two-valued) discontinuity, with no one-sided limit existing there.",
  "trap": "Concluding $h$ is continuous wherever $x^2-4$ is well behaved, or that it is nowhere continuous like the bare Dirichlet function. The factor $x^2-4$ creates exactly two points where the rational and irrational approaches both collapse to $0$; ignoring those zeros loses the answer.",
  "solutions": [
   {
    "name": "Compare rational and irrational approaches",
    "steps": [
     "Fix any $a$. Along rationals $x\\to a$ we get $h(x)=x^2-4\\to a^2-4$; along irrationals $x\\to a$ we get $h(x)=0\\to0$. Both sequences exist because $\\mathbb{Q}$ and $\\mathbb{R}\\setminus\\mathbb{Q}$ are dense.",
     "For $\\lim_{x\\to a}h(x)$ to exist these two subsequential limits must agree: $a^2-4=0$, i.e. $a=\\pm2$.",
     "At $a=\\pm2$ the common limit is $0$, and since $\\pm2\\in\\mathbb{Q}$ we have $h(\\pm2)=\\big((\\pm2)^2-4\\big)\\cdot\\mathbb{D}(\\pm2)=0\\cdot1=0$, which matches the limit, so $h$ is continuous there.",
     "For $a\\neq\\pm2$ the two dense approaches give the distinct values $a^2-4\\neq0$ and $0$, so $\\lim_{x\\to a}h$ does not exist and no one-sided limit exists either; the discontinuity is essential. $\\boxed{\\text{continuous only at }x=\\pm2}$"
    ]
   },
   {
    "name": "Squeeze bound at the envelope zeros",
    "steps": [
     "Since $\\mathbb{D}(x)\\in\\{0,1\\}$, for every $x$ we have $0\\le|h(x)|\\le|x^2-4|$.",
     "As $x\\to2$, $|x^2-4|\\to0$, so the squeeze theorem forces $h(x)\\to0=h(2)$; the identical bound at $x=-2$ gives $h(x)\\to0=h(-2)$. Hence $h$ is continuous at $\\pm2$.",
     "For $a\\neq\\pm2$, every neighbourhood of $a$ contains rationals where $|h(x)|=|x^2-4|$ stays near $|a^2-4|>0$ and irrationals where $h(x)=0$, so $h$ oscillates and cannot have a limit.",
     "$\\boxed{\\text{continuity set}=\\{-2,2\\}}$"
    ]
   },
   {
    "name": "Sequential criterion test",
    "steps": [
     "Continuity at $a$ is equivalent to: for every sequence $x_n\\to a$, $h(x_n)\\to h(a)$.",
     "Take $r_n\\to a$ with $r_n\\in\\mathbb{Q}$ and $s_n\\to a$ with $s_n\\notin\\mathbb{Q}$; then $h(r_n)\\to a^2-4$ while $h(s_n)\\to0$.",
     "Both limits equal $h(a)$ only when $a^2-4=0$ and $a$ is rational, i.e. $a=\\pm2$, where indeed $h(a)=0$; the sequential criterion is then satisfied for all sequences by the squeeze bound.",
     "When $a\\neq\\pm2$ the witnesses $r_n,s_n$ produce two different limits, so $h$ fails continuity essentially. $\\boxed{\\text{continuity set}=\\{-2,2\\}}$"
    ]
   }
  ],
  "remark": "A Dirichlet-type function inherits continuity exactly at the zeros of its envelope. Multiplying $\\mathbb{D}$ by $x^2-4$ punches two pinholes of continuity into an otherwise totally discontinuous function, a clean way to prescribe any prescribed finite continuity set as the zero set of a continuous multiplier."
 },
 {
  "theme": "types",
  "themeLabel": "Classifying Discontinuities",
  "title": "Floors Riding a Sine Wave",
  "difficulty": 5,
  "task": "Classify and count",
  "tags": [
   "floor",
   "trig",
   "jump",
   "removable",
   "count",
   "tangency-trap"
  ],
  "statement": "Consider \\[ F(x)=\\big\\lfloor 2\\sin x\\big\\rfloor,\\qquad x\\in(0,\\,2\\pi). \\] Find the number of points of $(0,2\\pi)$ at which $F$ is discontinuous, classify the type of each one, and identify any point where the discontinuity is removable rather than a jump.",
  "answer": "There are $6$ discontinuities. Five are jumps, at $x=\\tfrac{\\pi}{6},\\tfrac{5\\pi}{6},\\pi,\\tfrac{7\\pi}{6},\\tfrac{11\\pi}{6}$; one is removable, at $x=\\tfrac{\\pi}{2}$ (where $2\\sin x$ touches its maximum $2$, so $F=2$ only at that single point while both one-sided limits equal $1$). Note $x=\\tfrac{3\\pi}{2}$ is NOT a discontinuity. So $\\boxed{6\\text{ total: }5\\text{ jumps}+1\\text{ removable}}$.",
  "trap": "Treating both turning points $x=\\tfrac{\\pi}{2}$ and $x=\\tfrac{3\\pi}{2}$ alike, and assuming every integer-crossing of $2\\sin x$ gives a jump. At the maximum, $2\\sin x=2$ is attained once so $F$ spikes to $2$ (removable); at the minimum, $2\\sin x=-2$ with $\\lfloor\\cdot\\rfloor=-2$ on both sides, so $F$ is continuous there. Symmetry intuition fails because the floor is not symmetric about its argument's extrema.",
  "solutions": [
   {
    "name": "Track integer crossings of $2\\sin x$",
    "steps": [
     "$2\\sin x$ ranges over $[-2,2]$; $F$ can only change when $2\\sin x$ passes an integer level $-2,-1,0,1,2$.",
     "Solve $2\\sin x=1\\Rightarrow x=\\tfrac\\pi6,\\tfrac{5\\pi}6$; $2\\sin x=0\\Rightarrow x=\\pi$ (interior); $2\\sin x=-1\\Rightarrow x=\\tfrac{7\\pi}6,\\tfrac{11\\pi}6$. Each is a transversal crossing where $2\\sin x$ passes strictly through the level, so the two one-sided limits of $F$ differ by $1\\Rightarrow$ five jumps (the value $F(c)$ equals whichever side keeps $\\lfloor\\cdot\\rfloor$ on the level, but the limits still disagree).",
     "Level $2$: $2\\sin x=2$ only at $x=\\tfrac\\pi2$. Just off $\\tfrac\\pi2$, $2\\sin x<2$ so $F=1$ on both sides, but $F(\\tfrac\\pi2)=\\lfloor2\\rfloor=2$. Limits agree (both $=1$) yet differ from the value $\\Rightarrow$ removable.",
     "Level $-2$: $2\\sin x=-2$ only at $x=\\tfrac{3\\pi}2$, where $\\lfloor2\\sin x\\rfloor=-2$ and for nearby $x$ one has $2\\sin x>-2$ which still gives $\\lfloor\\cdot\\rfloor=-2\\Rightarrow$ value and both limits all equal $-2$, no discontinuity. Total $\\boxed{6}$: 5 jumps + 1 removable."
    ]
   },
   {
    "name": "One-sided limit table",
    "steps": [
     "Compute $(\\lim^-,\\,F,\\,\\lim^+)$ at each candidate: $\\tfrac\\pi6:(0,1,1)$, $\\tfrac{5\\pi}6:(1,1,0)$, $\\pi:(0,0,-1)$, $\\tfrac{7\\pi}6:(-1,-1,-2)$, $\\tfrac{11\\pi}6:(-2,-1,-1)$. In every case the two one-sided limits are unequal finite integers $\\Rightarrow$ jumps, regardless of the value $F(c)$.",
     "$\\tfrac\\pi2:(1,2,1)$ — equal one-sided limits, value mismatched $\\Rightarrow$ removable.",
     "$\\tfrac{3\\pi}2:(-2,-2,-2)$ — value and both limits equal $\\Rightarrow$ continuous, discard.",
     "Tally: 5 jumps + 1 removable $=\\boxed{6}$ discontinuities."
    ]
   }
  ],
  "remark": "Composing the floor with a smooth bump produces a jump at every transversal level-crossing, a lone removable spike at a maximum that hits an integer exactly, and nothing at a minimum that sits at an integer from above. A subtle point: at $\\tfrac\\pi6$ the value $F=\\lfloor 2\\sin\\tfrac\\pi6\\rfloor=\\lfloor1\\rfloor=1$ since $2\\sin\\tfrac\\pi6=1$ exactly; numerical evaluation of $2\\sin\\tfrac\\pi6$ as $0.999\\ldots$ can wrongly suggest $F=0$, but this does not change the classification since the one-sided limits already differ. Tangency to an integer level is the case classifiers miss."
 },
 {
  "theme": "types",
  "themeLabel": "Classifying Discontinuities",
  "title": "Two Knobs to Heal a Pole",
  "difficulty": 4,
  "task": "Find a,b",
  "tags": [
   "removable",
   "parameters",
   "rational-function",
   "redefine"
  ],
  "statement": "The function \\[ f(x)=\\frac{a\\,x^{2}+b\\,x-3}{x-1},\\qquad x\\neq1, \\] has a removable discontinuity at $x=1$, and after the removal the patched value equals $5$. Find $a$ and $b$, and state the patched value of $f(1)$.",
  "answer": "$a=2,\\ b=1$, and the patched value is $f(1)=5$. (So $a+b=3$.)",
  "trap": "Setting the limit to $5$ before forcing the numerator to vanish at $x=1$. If $a+b-3\\neq0$ the numerator is nonzero at $x=1$ while the denominator is zero, so $f$ blows up: the one-sided limits are $+\\infty$ and $-\\infty$, an infinite pole, not a removable discontinuity. No patched value can fix that. Removability is a constraint that must be imposed first.",
  "solutions": [
   {
    "name": "Vanish then divide",
    "steps": [
     "Removability at $x=1$ requires the numerator to vanish there (otherwise a nonzero numerator over a zero denominator gives an infinite pole): $a(1)^2+b(1)-3=0\\Rightarrow a+b=3$.",
     "Then $(x-1)$ divides the numerator: $ax^2+bx-3=(x-1)(ax+3)$, since expanding gives leading coefficient $a$, constant $-3$, and middle coefficient $3-a=b$ (consistent with $a+b=3$).",
     "The removed value is $\\lim_{x\\to1}f=\\lim_{x\\to1}(ax+3)=a+3$; set $a+3=5\\Rightarrow a=2$, hence $b=3-a=1$.",
     "Check: $\\dfrac{2x^2+x-3}{x-1}=\\dfrac{(x-1)(2x+3)}{x-1}=2x+3\\to5$. $\\boxed{a=2,\\ b=1,\\ f(1)=5}$"
    ]
   },
   {
    "name": "Linear system via L'Hopital",
    "steps": [
     "Condition 1 (removable): the numerator must vanish at $x=1$, i.e. $a+b-3=0$.",
     "Condition 2: once the numerator $\\to0$ the limit is $\\tfrac00$, so L'Hopital applies: $\\lim_{x\\to1}\\dfrac{ax^2+bx-3}{x-1}=\\dfrac{2ax+b}{1}\\Big|_{x=1}=2a+b$. Setting the patched value to $5$ gives $2a+b=5$.",
     "Solve $a+b=3$ and $2a+b=5$: subtracting yields $a=2$, then $b=1$.",
     "Patched value $=5$. $\\boxed{a=2,\\ b=1}$"
    ]
   }
  ],
  "remark": "Removability is a two-step gate: first kill the numerator at the pole (an algebraic condition, $a+b=3$), then read off the finite limit and match it ($a+3=5$). Skipping step one and 'solving for the value' is how students manufacture impossible answers, since with $a+b\\neq3$ the singularity is an unremovable infinite pole."
 },
 {
  "theme": "types",
  "themeLabel": "Classifying Discontinuities",
  "title": "Same Reciprocal, Different Souls",
  "difficulty": 4,
  "task": "Classify each",
  "tags": [
   "essential",
   "jump",
   "one-sided-limits",
   "exponential",
   "arctan"
  ],
  "statement": "At $x=0$, classify the discontinuity of each function: \\[ u(x)=e^{1/x},\\qquad v(x)=\\arctan\\!\\frac1x,\\qquad w(x)=\\frac{1}{1+e^{1/x}}. \\] For each, decide removable / jump / essential, justifying with one-sided limits.",
  "answer": "$u$: essential — $\\lim_{x\\to0^-}u=0$ but $\\lim_{x\\to0^+}u=+\\infty$ (one side infinite). $v$: jump — $\\lim_{x\\to0^-}v=-\\tfrac\\pi2$, $\\lim_{x\\to0^+}v=+\\tfrac\\pi2$ (both finite, unequal). $w$: jump — $\\lim_{x\\to0^-}w=1$, $\\lim_{x\\to0^+}w=0$ (both finite, unequal).",
  "trap": "Lumping all three together because they share the term $1/x$. The behaviour depends on the OUTER function: $e^{(\\cdot)}$ sends $+\\infty\\mapsto\\infty$ (essential), while $\\arctan$ and the logistic squash $\\pm\\infty$ to finite values (jumps). Assuming '$1/x$ inside $\\Rightarrow$ essential' is wrong.",
  "solutions": [
   {
    "name": "One-sided limits of $1/x$ pushed through",
    "steps": [
     "As $x\\to0^+$, $1/x\\to+\\infty$; as $x\\to0^-$, $1/x\\to-\\infty$.",
     "$u$: $e^{+\\infty}=+\\infty$, $e^{-\\infty}=0$ — one side infinite $\\Rightarrow$ essential.",
     "$v$: $\\arctan(+\\infty)=\\tfrac\\pi2$, $\\arctan(-\\infty)=-\\tfrac\\pi2$ — finite and unequal $\\Rightarrow$ jump of size $\\pi$.",
     "$w$: $\\frac{1}{1+e^{+\\infty}}=0$, $\\frac{1}{1+e^{-\\infty}}=\\frac1{1+0}=1$ — finite and unequal $\\Rightarrow$ jump. $\\boxed{u\\text{ essential},\\ v\\text{ jump},\\ w\\text{ jump}}$"
    ]
   },
   {
    "name": "Boundedness test",
    "steps": [
     "A discontinuity is a jump iff BOTH one-sided limits exist finitely; it is essential if some one-sided limit is infinite or fails to exist.",
     "$\\arctan$ and the logistic are bounded, so feeding them $1/x$ yields finite one-sided limits — both $v,w$ are jumps.",
     "$e^{1/x}$ is unbounded as $x\\to0^+$, breaking finiteness on the right — $u$ is essential.",
     "$\\boxed{u\\text{ essential},\\ v\\text{ jump},\\ w\\text{ jump}}$"
    ]
   }
  ],
  "remark": "The reciprocal $1/x$ only supplies the divergent input $\\pm\\infty$; the outer function decides the fate. Bounded outer functions convert a pole into a finite jump; an unbounded one keeps it essential. Always classify by the limit of the whole composite, never by an inner factor."
 },
 {
  "theme": "types",
  "themeLabel": "Classifying Discontinuities",
  "title": "A Comb With No Last Tooth",
  "difficulty": 4,
  "task": "Determine the count and type",
  "tags": [
   "sin-reciprocal",
   "sign",
   "accumulation",
   "essential",
   "count"
  ],
  "statement": "Let \\[ s(x)=\\operatorname{sgn}\\!\\Big(\\sin\\frac{\\pi}{x}\\Big),\\qquad x\\in(0,1], \\] where $\\operatorname{sgn}(0)=0$. Find every point of $(0,1]$ at which $s$ is discontinuous, classify each (removable / jump / essential), being careful at the right endpoint $x=1$, and classify the behaviour at the missing endpoint $x=0$.",
  "answer": "$s$ has countably (infinitely) many discontinuities in $(0,1]$, exactly the points $x=\\tfrac1n$ for $n=1,2,3,\\dots$ At each \\emph{interior} crossing $x=\\tfrac1n$ with $n\\ge 2$ the function $\\sin(\\pi/x)$ changes sign, so the two one-sided limits are $+1$ and $-1$ (finite, unequal) while $s(\\tfrac1n)=0$: these are jump discontinuities, and there are infinitely many of them. The right endpoint $x=1$ is special: only the left limit exists, $\\lim_{x\\to1^-}s(x)=-1$, yet $s(1)=\\operatorname{sgn}(\\sin\\pi)=0$; since the (one-sided) limit exists but differs from the value, $x=1$ is a \\emph{removable} discontinuity, not a jump. Finally, at the limit point $x=0\\notin(0,1]$ the behaviour is essential/oscillatory: along $x\\to0^+$ the value $s(x)$ takes $+1$ and $-1$ infinitely often, so no one-sided limit exists.",
  "trap": "Two traps. First, answering a finite count by forgetting that the zeros of $\\sin(\\pi/x)$ at $x=1/n$ accumulate at $0$ — there are infinitely many, and $x=0$ is essential, not a jump. Second, the lazier fix of declaring all the $x=1/n$ jumps: that over-counts the type at the right endpoint $x=1$, where only one side of the domain exists, so the one-sided limit exists and the point is removable rather than a jump.",
  "solutions": [
   {
    "name": "Locate the sign changes, then split off the endpoint",
    "steps": [
     "$\\sin(\\pi/x)=0\\iff \\pi/x=n\\pi\\iff x=1/n$, $n\\in\\mathbb{N}$, all lying in $(0,1]$; there are infinitely many of them, accumulating at $0$.",
     "For an interior zero $x=1/n$ with $n\\ge 2$, $\\sin$ has a simple zero, so $\\sin(\\pi/x)$ changes sign as $x$ crosses $1/n$. Both one-sided limits of $s$ exist and equal $+1$ and $-1$ (finite, unequal) while $s(1/n)=0$, so $x=1/n$ is a jump discontinuity. Infinitely many such $n\\ge2$ give infinitely many jumps.",
     "At the right endpoint $x=1$ the domain lies only to the left, so only the left limit is defined: just below $1$, $\\pi/x>\\pi$ gives $\\sin(\\pi/x)<0$, hence $\\lim_{x\\to1^-}s(x)=-1$. But $s(1)=\\operatorname{sgn}(\\sin\\pi)=\\operatorname{sgn}(0)=0\\ne-1$. A one-sided limit that exists but disagrees with the value is a removable discontinuity — there is no second side to make it a jump.",
     "As $x\\to0^+$ the crossings $1/n$ pile up, so $s$ keeps flipping $\\pm1$ and $\\lim_{x\\to0^+}s$ fails to exist: $x=0$ is essential. $\\boxed{\\infty\\text{ jumps at }1/n\\,(n\\ge2),\\ x=1\\text{ removable},\\ x=0\\text{ essential}}$"
    ]
   },
   {
    "name": "Sequence argument at 0 and a direct endpoint check",
    "steps": [
     "Take $a_n=\\dfrac{1}{n+1/2}\\to0^+$. Then $\\sin(\\pi/a_n)=\\sin\\!\\big((n+\\tfrac12)\\pi\\big)=(-1)^n$, so $s(a_n)=(-1)^n$ alternates $+1,-1$.",
     "The even and odd subsequences give limits $+1$ and $-1$, so no limit exists at $0$: the behaviour at the missing endpoint is essential/oscillatory.",
     "On any open interval between consecutive zeros, $1/(n+1)<x<1/n$, the sine keeps one sign, so $s$ is the constant $\\pm1$ there; at each interior endpoint $1/n$ ($n\\ge2$) it dips to $0$ with opposite constants on the two sides — a jump. Infinitely many zeros give infinitely many jumps.",
     "Checking the boundary tooth directly: at $x=1$ there is no right side inside $(0,1]$, the single available limit $\\lim_{x\\to1^-}s=-1$ exists, and $s(1)=0$, so the lone discontinuity here is removable. $\\boxed{\\text{infinitely many jumps}+\\text{removable at }1+\\text{essential at }0}$"
    ]
   }
  ],
  "remark": "Zeros that accumulate turn a sequence of ordinary jumps into an essential singularity at the accumulation point, so \"how many discontinuities?\" can legitimately be infinite. But type depends on how much of the domain surrounds the point: an interior crossing has two one-sided limits and jumps, whereas the right endpoint $x=1$ has only one side, so its existing one-sided limit makes it merely removable. Counting is not the same as classifying."
 },
 {
  "theme": "types",
  "themeLabel": "Classifying Discontinuities",
  "title": "Three Signs Multiplied",
  "difficulty": 4,
  "task": "Find the number and classify",
  "tags": [
   "sign",
   "product",
   "jump",
   "count",
   "polynomial"
  ],
  "statement": "Let \\[ \\Phi(x)=\\operatorname{sgn}\\!\\big(x^{2}-3x+2\\big)\\cdot\\operatorname{sgn}\\!\\big(x-4\\big), \\] with $\\operatorname{sgn}(0)=0$. Find the number of discontinuities of $\\Phi$ on $\\mathbb{R}$ and classify each.",
  "answer": "$\\Phi$ has exactly $3$ discontinuities, at $x=1,\\ 2,\\ 4$, and each is a jump (at each point $\\Phi=0$ while the one-sided limits are $+1$ and $-1$). So $\\boxed{3\\text{ jumps}}$.",
  "trap": "Expecting a sign-product to possibly 'cancel' a discontinuity where two sign factors flip simultaneously — but the roots $1,2$ (of the quadratic) and $4$ are all distinct, so each flip is isolated and survives. Also forgetting that $\\operatorname{sgn}(0)=0$ gives the mismatched value at each root.",
  "solutions": [
   {
    "name": "Roots and sign chart",
    "steps": [
     "$x^2-3x+2=(x-1)(x-2)$ has simple roots $1,2$; $x-4$ has root $4$. Sign factors can only change at $\\{1,2,4\\}$.",
     "At each simple root, exactly one factor flips sign, so the product $\\Phi$ flips between $+1$ and $-1$ across that point.",
     "At the root itself one factor is $0$, so $\\Phi=0$: the value differs from both one-sided limits $\\pm1$ $\\Rightarrow$ jump.",
     "No two roots coincide, so all three flips are genuine $\\Rightarrow\\boxed{3\\text{ jump discontinuities}}$."
    ]
   },
   {
    "name": "One-sided evaluation",
    "steps": [
     "Near $x=1$: $(x-2)<0,(x-4)<0$ fixed; $(x-1)$ flips, so $\\Phi$ goes $(-)(-)\\cdot(\\text{flip of }+/-)$, i.e. $+1\\to$ different sign — unequal finite limits, $\\Phi(1)=0$: jump.",
     "Same analysis at $x=2$ (the other quadratic root) and $x=4$ (linear root): one factor flips, product changes sign, value $0$: jump each.",
     "Away from $\\{1,2,4\\}$ all factors are locally constant, so $\\Phi$ is locally constant — continuous.",
     "Total $\\boxed{3}$ jumps."
    ]
   }
  ],
  "remark": "A product of sign functions is piecewise $\\pm1$ and discontinuous exactly at the simple zeros of its arguments, with a $0$-valued spike at each. Discontinuities only merge or cancel when zeros coincide — distinct roots always give distinct jumps."
 },
 {
  "theme": "types",
  "themeLabel": "Classifying Discontinuities",
  "title": "The Grand Triple Break",
  "difficulty": 5,
  "task": "Classify the discontinuity at each marked point",
  "tags": [
   "piecewise",
   "removable",
   "jump",
   "essential",
   "grand-hybrid",
   "sin-reciprocal"
  ],
  "statement": "Define \\[ G(x)=\\begin{cases} x^{2}\\sin\\dfrac1x, & x<0,\\\\[4pt] 7, & x=0,\\\\[4pt] \\sin\\dfrac1x, & 0<x<\\dfrac{1}{\\pi},\\\\[6pt] \\dfrac{x^{2}-4}{x-2}, & x\\ge\\dfrac{1}{\\pi},\\ x\\neq2,\\\\[6pt] 11, & x=2. \\end{cases} \\] Classify the discontinuity of $G$ at $x=0$ and at $x=2$. For each, give the type, and where removable state the correct value.",
  "answer": "At $x=0$: essential (oscillatory). The left limit is $0$ (by squeeze) but the right limit does not exist because $\\sin(1/x)$ oscillates; a function value of $7$ cannot repair a one-sided limit that fails to exist. At $x=2$: removable; the limit is $\\lim_{x\\to2}\\tfrac{x^2-4}{x-2}=4$, so $G$ should be redefined as $G(2)=4$ (the given value $11$ is the wrong patch). $\\boxed{x=0\\text{ essential};\\ x=2\\text{ removable, value }4}$.",
  "trap": "Seeing that the LEFT limit at $0$ exists ($=0$) and concluding the discontinuity is removable or a jump. Removable/jump require BOTH one-sided limits to exist; here the right side $\\sin(1/x)$ has no limit, so the point is essential regardless of how nicely the left side behaves. Separately, accepting $G(2)=11$ as 'the value' instead of recomputing the true limit $4$.",
  "solutions": [
   {
    "name": "Two one-sided analyses at 0; factor at 2",
    "steps": [
     "Left of $0$: $|x^2\\sin(1/x)|\\le x^2\\to0$, so $\\lim_{x\\to0^-}G=0$.",
     "Right of $0$: $\\sin(1/x)$ on $(0,1/\\pi)$ takes values $0$ at $x=1/(n\\pi)$ and $1$ at $x=1/(2n\\pi+\\pi/2)$, both $\\to0$; the two subsequential limits differ $\\Rightarrow$ no right limit. A nonexistent one-sided limit $\\Rightarrow$ essential at $0$ (value $7$ irrelevant).",
     "At $2$: for $x\\ge1/\\pi$, $\\dfrac{x^2-4}{x-2}=\\dfrac{(x-2)(x+2)}{x-2}=x+2$ for $x\\neq2$, so $\\lim_{x\\to2}G=4$, a finite two-sided limit $\\Rightarrow$ removable.",
     "Since $G(2)=11\\neq4$, redefine $G(2)=4$. $\\boxed{0\\text{ essential},\\ 2\\text{ removable }(4)}$"
    ]
   },
   {
    "name": "Definition-of-each-type check",
    "steps": [
     "Type test at $0$: removable needs $\\lim$ to exist; jump needs both one-sided limits finite and unequal; essential otherwise. Right limit DNE $\\Rightarrow$ essential immediately.",
     "Type test at $2$: both one-sided limits of $x+2$ at $2$ equal $4$, so the two-sided limit exists and is finite but $\\neq G(2)=11$ $\\Rightarrow$ removable with correct value $4$.",
     "The left-side value $0$ at $0$ and the wrong patch $11$ at $2$ are distractors that do not change the classification.",
     "$\\boxed{x=0:\\text{ essential};\\ x=2:\\text{ removable, }G(2)=4}$"
    ]
   }
  ],
  "remark": "This is the full taxonomy in one function: a one-sided limit that exists, paired with one that doesn't, forces 'essential'; a clean cancellable factor with a deliberately-wrong stated value is the textbook 'removable.' The discipline is to test each one-sided limit on its own and never let a tidy value or a tidy side fool the classification."
 },
 {
  "theme": "functionaleq",
  "themeLabel": "Continuous Functional Equations",
  "title": "The Bilinear Bonus",
  "difficulty": 4,
  "task": "Determine",
  "tags": [
   "cauchy",
   "substitution",
   "continuity",
   "shifted-additive"
  ],
  "statement": "Let $f:\\mathbb{R}\\to\\mathbb{R}$ be continuous and satisfy \\[ f(x+y)=f(x)+f(y)+xy \\qquad\\text{for all } x,y\\in\\mathbb{R}, \\] with $f(1)=2$. Determine $f(x)$ explicitly, and hence find $f(4)$.",
  "answer": "$f(x)=\\dfrac{x^2}{2}+\\dfrac{3x}{2}$, so $f(4)=14$.",
  "trap": "Seeing $f(x+y)=f(x)+f(y)+\\dots$ and immediately declaring 'Cauchy, so $f$ is linear, $f(x)=2x$.' The $xy$ term is not additive, so $f$ is NOT additive; the genuine additive object is $g(x)=f(x)-\\tfrac{x^2}{2}$. Forgetting the quadratic correction gives $f(4)=8$ instead of $14$.",
  "solutions": [
   {
    "name": "Reduce to Cauchy via a quadratic shift",
    "steps": [
     "Define $g(x)=f(x)-\\tfrac{x^2}{2}$ to absorb the bilinear term.",
     "Compute $g(x+y)=f(x+y)-\\tfrac{(x+y)^2}{2}=f(x)+f(y)+xy-\\tfrac{x^2+2xy+y^2}{2}=g(x)+g(y)$.",
     "So $g$ is additive and continuous, hence $g(x)=cx$ for some constant $c$ (continuity kills the pathological non-measurable additive solutions).",
     "Thus $f(x)=\\tfrac{x^2}{2}+cx$; from $f(1)=\\tfrac12+c=2$ we get $c=\\tfrac32$.",
     "Therefore $f(x)=\\tfrac{x^2}{2}+\\tfrac{3x}{2}$ and $f(4)=8+6=\\boxed{14}$."
    ]
   },
   {
    "name": "Differentiate the parameter (assuming the regularity continuity grants)",
    "steps": [
     "Continuity plus the additive-type relation forces differentiability; fix $x$ and differentiate $f(x+y)=f(x)+f(y)+xy$ in $y$: $f'(x+y)=f'(y)+x$.",
     "Set $y=0$: $f'(x)=f'(0)+x$, so $f'(x)=x+a$ with $a=f'(0)$.",
     "Integrate: $f(x)=\\tfrac{x^2}{2}+ax+b$; the original equation at $x=y=0$ gives $f(0)=2f(0)$, so $b=f(0)=0$.",
     "Use $f(1)=\\tfrac12+a=2\\Rightarrow a=\\tfrac32$, giving $f(x)=\\tfrac{x^2}{2}+\\tfrac{3x}{2}$.",
     "Hence $f(4)=\\boxed{14}$."
    ]
   },
   {
    "name": "Telescoping on integers, then extend by continuity",
    "steps": [
     "From the equation, $f(n+1)=f(n)+f(1)+n=f(n)+2+n$.",
     "Summing from $0$ to $n-1$ with $f(0)=0$ gives $f(n)=2n+\\tfrac{n(n-1)}{2}=\\tfrac{n^2}{2}+\\tfrac{3n}{2}$, matching $\\tfrac{x^2}{2}+\\tfrac{3x}{2}$ on integers.",
     "The same shift $g=f-\\tfrac{x^2}{2}$ is additive, so by continuity $g(x)=cx$ agrees with $g(1)=\\tfrac32$ everywhere.",
     "Thus $f(x)=\\tfrac{x^2}{2}+\\tfrac{3x}{2}$ for all real $x$, and $f(4)=\\boxed{14}$."
    ]
   }
  ],
  "remark": "Insight: whenever an additive-looking equation has an extra symmetric bilinear term $\\lambda xy$, subtract $\\tfrac{\\lambda}{2}x^2$ to recover pure Cauchy. The square completes precisely because $(x+y)^2-x^2-y^2=2xy$."
 },
 {
  "theme": "functionaleq",
  "themeLabel": "Continuous Functional Equations",
  "title": "Exponential in Disguise",
  "difficulty": 4,
  "task": "Determine",
  "tags": [
   "exponential-cauchy",
   "positivity",
   "continuity",
   "evaluation"
  ],
  "statement": "A continuous function $f:\\mathbb{R}\\to\\mathbb{R}$, not identically zero, satisfies \\[ f(x+y)=f(x)\\,f(y)\\qquad\\text{for all } x,y\\in\\mathbb{R}, \\] and $f(2)=9$. Determine $f$, and evaluate $f\\!\\left(\\tfrac12\\right)+f(-1)$.",
  "answer": "$f(x)=3^{x}$, and $f\\!\\left(\\tfrac12\\right)+f(-1)=\\sqrt{3}+\\dfrac13$.",
  "trap": "Concluding $f(x)=a^x$ without first proving $f>0$ everywhere. If you allow $f$ to vanish somewhere, then $f(x)=f(\\tfrac{x}{2})^2\\ge 0$ forces non-negativity, and a single zero propagates to $f\\equiv 0$ — contradicting that $f$ is not identically zero. Skipping this lets people wrongly admit sign-changing solutions such as a putative $(-3)^x$, which is not even real-valued at $x=\\tfrac12$.",
  "solutions": [
   {
    "name": "Positivity then logarithm reduces to Cauchy",
    "steps": [
     "Since $f(x)=f(\\tfrac{x}{2})^2\\ge 0$ and $f\\not\\equiv 0$, suppose $f(a)=0$ for some $a$; then $f(x)=f(a)\\,f(x-a)=0$ for all $x$, contradicting that $f$ is not identically zero. Hence $f(x)>0$ everywhere.",
     "Let $h(x)=\\ln f(x)$, which is continuous and satisfies $h(x+y)=h(x)+h(y)$, the additive Cauchy equation.",
     "Continuity forces $h(x)=cx$ for a constant $c$, hence $f(x)=e^{cx}$.",
     "From $f(2)=e^{2c}=9$ we get $e^{c}=3$, so $f(x)=3^{x}$.",
     "Then $f(\\tfrac12)+f(-1)=3^{1/2}+3^{-1}=\\boxed{\\sqrt{3}+\\tfrac13}$."
    ]
   },
   {
    "name": "Build the base from integers and roots",
    "steps": [
     "Positivity (as above) gives $f>0$; then $f(1)^2=f(2)=9$ forces $f(1)=3$, and induction yields $f(n)=3^{n}$ for every integer $n$.",
     "For a positive integer $q$, $f(\\tfrac1q)^q=f(1)=3$ with $f(\\tfrac1q)>0$ gives $f(\\tfrac1q)=3^{1/q}$; combining, $f(\\tfrac{p}{q})=3^{p/q}$ for all rationals $\\tfrac{p}{q}$.",
     "Since the rationals are dense and $f$ is continuous, $f(x)=3^{x}$ for all real $x$.",
     "Hence $f(\\tfrac12)+f(-1)=\\sqrt3+\\tfrac13=\\boxed{\\sqrt{3}+\\tfrac13}$."
    ]
   }
  ],
  "remark": "Insight: the multiplicative Cauchy equation enjoys the SAME continuity rescue as the additive one, because $\\ln$ is a continuous isomorphism from $((0,\\infty),\\times)$ to $(\\mathbb{R},+)$. The positivity lemma $f(x)=f(\\tfrac{x}{2})^2\\ge 0$ is the gatekeeper that makes taking the logarithm legal and rules out any sign-changing pretender."
 },
 {
  "theme": "functionaleq",
  "themeLabel": "Continuous Functional Equations",
  "title": "The Logarithm's Fingerprint",
  "difficulty": 4,
  "task": "Determine",
  "tags": [
   "additive-over-multiplicative",
   "logarithm",
   "continuity",
   "domain-positive"
  ],
  "statement": "Let $f:(0,\\infty)\\to\\mathbb{R}$ be continuous and satisfy \\[ f(xy)=f(x)+f(y)\\qquad\\text{for all } x,y>0, \\] with $f(2)=1$. Determine $f$, and find $f(64)$.",
  "answer": "$f(x)=\\log_2 x$, so $f(64)=6$.",
  "trap": "Asserting $f(x)=c\\ln x$ \"because that is the only solution\" without using continuity. On $(0,\\infty)$ the equation transports to Cauchy on $\\mathbb{R}$ via $t=\\ln x$, which has wild non-measurable solutions; only continuity (or monotonicity, boundedness, etc.) forces $f=c\\ln x$.",
  "solutions": [
   {
    "name": "Change of variable to Cauchy",
    "steps": [
     "Set $g(t)=f(e^{t})$ for $t\\in\\mathbb{R}$; then $g$ is continuous and $g(s+t)=f(e^{s}e^{t})=f(e^{s})+f(e^{t})=g(s)+g(t)$.",
     "By the continuous Cauchy theorem, $g(t)=ct$, so $f(x)=c\\ln x$.",
     "From $f(2)=c\\ln 2=1$ we get $c=1/\\ln 2$, hence $f(x)=\\log_2 x$.",
     "Therefore $f(64)=\\log_2 64=\\boxed{6}$."
    ]
   },
   {
    "name": "Exploit powers of $2$ directly",
    "steps": [
     "$f(2^{n})=nf(2)=n$ by repeated use of the equation, so $f(64)=f(2^6)=6$ immediately.",
     "To confirm uniqueness of the function, the substitution $x=y$ gives $f(x^2)=2f(x)$, and continuity pins $f(x^{r})=rf(x)$ for all real $r$.",
     "Writing $x=2^{\\log_2 x}$ gives $f(x)=(\\log_2 x)\\,f(2)=\\log_2 x$.",
     "Thus $f(64)=\\boxed{6}$."
    ]
   }
  ],
  "remark": "Insight: $f(xy)=f(x)+f(y)$ is Cauchy wearing a logarithmic mask. The substitution $x=e^t$ is the canonical unmasking, and continuity is exactly what survives the change of variable to legitimize $c\\ln x$."
 },
 {
  "theme": "functionaleq",
  "themeLabel": "Continuous Functional Equations",
  "title": "D'Alembert's Trichotomy",
  "difficulty": 5,
  "task": "Classify",
  "tags": [
   "dalembert",
   "cosine-cosh",
   "classification",
   "continuity",
   "trichotomy"
  ],
  "statement": "Classify all continuous functions $f:\\mathbb{R}\\to\\mathbb{R}$ satisfying \\[ f(x+y)+f(x-y)=2\\,f(x)\\,f(y)\\qquad\\text{for all } x,y\\in\\mathbb{R}. \\]",
  "answer": "Exactly three families: $f\\equiv 0$; $f(x)=\\cos(kx)$ for some $k\\ge 0$ (which includes $f\\equiv 1$ at $k=0$); and $f(x)=\\cosh(kx)$ for some $k>0$.",
  "trap": "Stopping at $f(x)=\\cos(kx)$ and forgetting the hyperbolic branch $\\cosh(kx)$. The equation does not pin the sign of $f''(0)$: if $f''(0)>0$ the solution is $\\cosh$, if $f''(0)<0$ it is $\\cos$. Also forgetting the degenerate $f\\equiv 0$ and the trivial $f\\equiv 1$.",
  "solutions": [
   {
    "name": "Extract f(0), parity, and a second-order ODE",
    "steps": [
     "Put $x=y=0$: $2f(0)=2f(0)^2$, so $f(0)\\in\\{0,1\\}$. If $f(0)=0$, set $y=0$ to get $2f(x)=2f(x)f(0)=0$, so $f\\equiv 0$.",
     "Assume $f(0)=1$. Put $x=0$: $f(y)+f(-y)=2f(0)f(y)=2f(y)$, so $f(-y)=f(y)$ and $f$ is even.",
     "Continuity upgrades to smoothness (continuous d'Alembert solutions are analytic). Differentiate the identity twice in $y$ and set $y=0$: $f''(x)+f''(x)=2f(x)f''(0)$, i.e. with $g:=f''(0)$ we obtain $f''(x)=g\\,f(x)$ together with $f(0)=1,\\ f'(0)=0$.",
     "Solve the initial value problem. If $g=-k^2<0$: $f(x)=\\cos(kx)$. If $g=0$: $f\\equiv 1$. If $g=k^2>0$: $f(x)=\\cosh(kx)$.",
     "Each candidate satisfies the original identity by the standard sum-to-product formulas, so the full list is $f\\equiv 0,\\ \\cos(kx),\\ \\cosh(kx)$. $\\boxed{}$"
    ]
   },
   {
    "name": "Recognize the cosine/cosh addition law and propagate by continuity",
    "steps": [
     "The identity $f(x+y)+f(x-y)=2f(x)f(y)$ is precisely the addition law obeyed by $\\cos$ and by $\\cosh$ (and by the constants $0$ and $1$).",
     "For a nonzero solution, $f(0)=1$ and evenness follow as in the first method; let $c=f(1)$. Setting $y=x$ gives the doubling relation $f(2x)=2f(x)^2-1$, which fixes $f$ on all dyadic multiples of $1$ from $c$ alone.",
     "If $|c|\\le 1$ write $c=\\cos k$ with $k\\ge 0$ to get $f=\\cos(kx)$; if $c>1$ write $c=\\cosh k$ with $k>0$ to get $f=\\cosh(kx)$. These determine $f$ on a dense set, and continuity then forces them everywhere.",
     "Conversely all listed functions verify the equation, completing the classification: $\\boxed{f\\equiv 0,\\ \\cos(kx),\\ \\cosh(kx)}$."
    ]
   }
  ],
  "remark": "Insight: this is the d'Alembert functional equation. Over the reals it has a clean trichotomy, circular or hyperbolic or degenerate, governed entirely by the sign of $f''(0)$. Allowing complex $k$ unifies the two analytic branches as $\\cos(kx)$ with $k\\in i\\mathbb{R}$ recovering $\\cosh$."
 },
 {
  "theme": "functionaleq",
  "themeLabel": "Continuous Functional Equations",
  "title": "Jensen's Straight Line",
  "difficulty": 4,
  "task": "Determine",
  "tags": [
   "jensen",
   "midpoint-convex",
   "affine",
   "continuity",
   "two-points"
  ],
  "statement": "Let $f:\\mathbb{R}\\to\\mathbb{R}$ be continuous and satisfy the midpoint (Jensen) equation \\[ f\\!\\left(\\frac{x+y}{2}\\right)=\\frac{f(x)+f(y)}{2}\\qquad\\text{for all } x,y\\in\\mathbb{R}, \\] with $f(0)=1$ and $f(2)=7$. Determine $f$, and find $f(5)$.",
  "answer": "$f(x)=3x+1$, so $f(5)=16$.",
  "trap": "Claiming Jensen 'obviously' forces $f$ affine without continuity. Midpoint-affine functions form the same wild class as additive ones (set $g(x)=f(x)-f(0)$, which is midpoint-additive); only continuity (or measurability, monotonicity, or local boundedness) collapses them to genuine straight lines $ax+b$.",
  "solutions": [
   {
    "name": "Subtract the value at 0 to get Cauchy",
    "steps": [
     "Let $g(x)=f(x)-1$, so $g(0)=0$ and $g$ inherits the Jensen equation.",
     "Setting $y=0$ in Jensen for $g$: $g(\\tfrac{x}{2})=\\tfrac{g(x)}{2}$, hence the Jensen equation becomes $g(\\tfrac{x+y}{2})=g(\\tfrac{x}{2})+g(\\tfrac{y}{2})$, i.e. $g(x+y)=g(x)+g(y)$ after replacing $x,y$ by $2x,2y$, so $g$ is additive.",
     "Continuous additive functions are linear: $g(x)=ax$, so $f(x)=ax+1$.",
     "From $f(2)=2a+1=7$ we get $a=3$, giving $f(x)=3x+1$.",
     "Therefore $f(5)=16$. $\\boxed{f(5)=16}$"
    ]
   },
   {
    "name": "Direct two-point interpolation",
    "steps": [
     "Jensen says the value at any midpoint is the average of the endpoint values, the defining property of an affine function on its dyadic grid.",
     "Through $(0,1)$ and $(2,7)$ the unique line is $f(x)=1+\\tfrac{7-1}{2-0}x=3x+1$; Jensen plus continuity forces $f$ to equal this line on all dyadic midpoints, hence everywhere by density.",
     "Evaluate: $f(5)=3\\cdot5+1=\\boxed{16}$."
    ]
   }
  ],
  "remark": "Insight: Jensen is 'affine Cauchy.' Pinning two points fixes the slope and intercept, but the line is only legitimate after continuity (or convexity) rules out the dense, graph-everywhere pathological midpoint solutions."
 },
 {
  "theme": "functionaleq",
  "themeLabel": "Continuous Functional Equations",
  "title": "Additive With Interest",
  "difficulty": 4,
  "task": "Determine",
  "tags": [
   "cauchy",
   "constant-shift",
   "fixed-point",
   "continuity"
  ],
  "statement": "Let $f:\\mathbb{R}\\to\\mathbb{R}$ be continuous and satisfy \\[ f(x+y)=f(x)+f(y)+2\\qquad\\text{for all } x,y\\in\\mathbb{R}, \\] with $f(3)=4$. Determine $f$, and find $f(10)$.",
  "answer": "$f(x)=2x-2$, so $f(10)=18$.",
  "trap": "Treating it as plain Cauchy and concluding $f(x)=cx$, which fails because of the $+2$. Indeed any $f(x)=cx$ leaves a residual $f(x+y)-\\bigl(f(x)+f(y)+2\\bigr)=-2\\ne 0$, and it would force $f(0)=0$, contradicting the value $f(0)=-2$ forced by $x=y=0$. The correct fix is the shift $g(x)=f(x)+2$; forgetting to recover $f(0)=-2$ is the slip that breaks the affine constant.",
  "solutions": [
   {
    "name": "Shift to absorb the constant",
    "steps": [
     "Set $x=y=0$: $f(0)=2f(0)+2$, so $f(0)=-2$.",
     "Define $g(x)=f(x)+2$; then $g(x+y)=f(x+y)+2=f(x)+f(y)+4=g(x)+g(y)$, so $g$ is additive.",
     "Since $f$ is continuous, so is $g$; a continuous additive function is linear, $g(x)=cx$, hence $f(x)=cx-2$.",
     "From $f(3)=3c-2=4$ we get $c=2$, so $f(x)=2x-2$.",
     "Therefore $f(10)=2\\cdot10-2=\\boxed{18}$."
    ]
   },
   {
    "name": "Integer scaffold plus continuity",
    "steps": [
     "From the relation, $f(n+1)=f(n)+f(1)+2$. With $f(0)=-2$, this is an arithmetic progression with common difference $f(1)+2$.",
     "So $f(n)=-2+n\\bigl(f(1)+2\\bigr)$; the shift $g=f+2$ satisfies $g(x+y)=g(x)+g(y)$, so by continuity $g(x)=g(1)\\,x$ for all real $x$.",
     "Thus $f(x)=\\bigl(f(1)+2\\bigr)x-2$; using $f(3)=4$ gives $3\\bigl(f(1)+2\\bigr)-2=4$, i.e. $f(1)+2=2$, so $f(x)=2x-2$.",
     "Hence $f(10)=2\\cdot10-2=\\boxed{18}$."
    ]
   }
  ],
  "remark": "Insight: any 'Cauchy + constant' equation $f(x+y)=f(x)+f(y)+k$ is solved by $f(x)=cx-k$; the shift $g=f+k$ restores pure additivity, and continuity then forces $g$ to be linear (uniqueness). The forced value $f(0)=-k$ is a free sanity check that immediately rules out the bare $f(x)=cx$ guess."
 },
 {
  "theme": "functionaleq",
  "themeLabel": "Continuous Functional Equations",
  "title": "The Exponentially Weighted Cauchy",
  "difficulty": 5,
  "task": "Determine",
  "tags": [
   "disguised-cauchy",
   "exponential-weight",
   "normalization",
   "continuity"
  ],
  "statement": "Let $f:\\mathbb{R}\\to\\mathbb{R}$ be continuous and satisfy \\[ f(x+y)=f(x)\\,e^{y}+f(y)\\,e^{x}\\qquad\\text{for all } x,y\\in\\mathbb{R}, \\] with $f(1)=e$. Determine $f$, and find $f(2)$.",
  "answer": "$f(x)=x\\,e^{x}$, so $f(2)=2e^{2}$.",
  "trap": "Trying to force an exponential $f(x)=a^x$ or guessing $f(x)=ce^x$ directly. Neither fits: dividing by $e^{x+y}$ reveals the hidden additive function $g(x)=f(x)e^{-x}$, which is Cauchy. Skipping the normalization by $e^{x}$ hides the linear factor $x$ and produces wrong forms.",
  "solutions": [
   {
    "name": "Normalize by the exponential weight",
    "steps": [
     "Divide the equation by $e^{x+y}$: $\\dfrac{f(x+y)}{e^{x+y}}=\\dfrac{f(x)}{e^{x}}+\\dfrac{f(y)}{e^{y}}$.",
     "So $g(x):=f(x)e^{-x}$ is continuous and additive, giving $g(x)=cx$.",
     "Hence $f(x)=cx\\,e^{x}$; from $f(1)=c e=e$ we get $c=1$.",
     "Thus $f(x)=x e^{x}$ and $f(2)=2e^{2}$. $\\boxed{f(2)=2e^2}$"
    ]
   },
   {
    "name": "Differentiate after checking smoothness",
    "steps": [
     "Continuity and the structure force differentiability; differentiate in $y$ then set $y=0$ (note $f(0)=0$ from $x=y=0$): $f'(x)=f(x)+f'(0)e^{x}$.",
     "This linear ODE has integrating factor $e^{-x}$: $(f e^{-x})'=f'(0)$, so $f(x)e^{-x}=f'(0)x+C$.",
     "$f(0)=0$ gives $C=0$, so $f(x)=f'(0)\\,x\\,e^{x}$; $f(1)=f'(0)e=e\\Rightarrow f'(0)=1$.",
     "Therefore $f(x)=xe^{x}$ and $f(2)=\\boxed{2e^{2}}$."
    ]
   }
  ],
  "remark": "Insight: a multiplicative weight $e^{x}$ wrapped around an additive skeleton is unmasked by dividing through by that weight. The leftover Cauchy core $g=fe^{-x}$ contributes the linear factor $x$, producing the signature $x e^{x}$."
 },
 {
  "theme": "functionaleq",
  "themeLabel": "Continuous Functional Equations",
  "title": "Power Law From a Single Value",
  "difficulty": 4,
  "task": "Determine",
  "tags": [
   "multiplicative-cauchy",
   "power-function",
   "positivity",
   "continuity"
  ],
  "statement": "Let $f:(0,\\infty)\\to(0,\\infty)$ be continuous and satisfy \\[ f(xy)=f(x)\\,f(y)\\qquad\\text{for all } x,y>0, \\] with $f(2)=8$. Determine $f$, and find $f(3)$.",
  "answer": "$f(x)=x^{3}$, so $f(3)=27$.",
  "trap": "Concluding $f(x)=x^c$ without invoking continuity. The equation $f(xy)=f(x)f(y)$ on $(0,\\infty)$ becomes Cauchy after a double logarithm and admits non-measurable solutions; only continuity (here also positivity, ensuring $\\ln f$ is defined) pins the power law.",
  "solutions": [
   {
    "name": "Double logarithm reduces to Cauchy",
    "steps": [
     "Since $f>0$, set $h(t)=\\ln f(e^{t})$; continuity gives $h(s+t)=h(s)+h(t)$, so $h(t)=ct$.",
     "Then $\\ln f(x)=c\\ln x$, i.e. $f(x)=x^{c}$.",
     "From $f(2)=2^{c}=8=2^{3}$ we get $c=3$, so $f(x)=x^{3}$.",
     "Therefore $f(3)=27$. $\\boxed{f(3)=27}$"
    ]
   },
   {
    "name": "Rational exponents then density",
    "steps": [
     "$f(x^{n})=f(x)^{n}$ and $f(x^{1/q})^{q}=f(x)$ give $f(x^{r})=f(x)^{r}$ for all rational $r$.",
     "With $f(2)=8$, $f(2^{r})=8^{r}=2^{3r}=(2^{r})^{3}$, so $f(t)=t^{3}$ on the dense set of powers of $2$ with rational exponent.",
     "Continuity extends $f(x)=x^{3}$ to all $x>0$.",
     "Hence $f(3)=3^{3}=\\boxed{27}$."
    ]
   }
  ],
  "remark": "Insight: multiplicative-to-multiplicative on $(0,\\infty)$ is Cauchy after taking $\\ln$ of both the input ($x=e^t$) and the output. The two logarithms collapse the four classical Cauchy variants into the single power-law family $x^c$."
 },
 {
  "theme": "functionaleq",
  "themeLabel": "Continuous Functional Equations",
  "title": "The Pexider Triplet",
  "difficulty": 5,
  "task": "Find a,b",
  "tags": [
   "pexider",
   "system",
   "affine",
   "continuity",
   "three-functions"
  ],
  "statement": "Let $f,g,h:\\mathbb{R}\\to\\mathbb{R}$ be continuous and satisfy the Pexider equation \\[ f(x+y)=g(x)+h(y)\\qquad\\text{for all } x,y\\in\\mathbb{R}, \\] with $g(0)=1$, $h(0)=2$, and $f(1)=6$. Determine all three functions, and find $f(5)$.",
  "answer": "$f(x)=3x+3$, $g(x)=3x+1$, $h(x)=3x+2$; and $f(5)=18$.",
  "trap": "Assuming $f,g,h$ are the SAME function or that all are linear with no constant term. Pexider's equation forces a common slope but three different intercepts tied by $f(0)=g(0)+h(0)$; ignoring that constraint (here $f(0)=3$) yields an inconsistent system.",
  "solutions": [
   {
    "name": "Reduce the triplet to one Cauchy function",
    "steps": [
     "Set $y=0$: $f(x)=g(x)+h(0)=g(x)+2$, so $g(x)=f(x)-2$. Set $x=0$: $f(y)=g(0)+h(y)=1+h(y)$, so $h(y)=f(y)-1$.",
     "Substitute back: $f(x+y)=[f(x)-2]+[f(y)-1]=f(x)+f(y)-3$.",
     "Let $F(x)=f(x)-3$; then $F(x+y)=F(x)+F(y)$ is Cauchy, so continuity gives $F(x)=cx$ and $f(x)=cx+3$ (consistent with $f(0)=g(0)+h(0)=3$).",
     "From $f(1)=c+3=6$ we get $c=3$: $f(x)=3x+3$, $g(x)=3x+1$, $h(x)=3x+2$.",
     "Therefore $f(5)=18$. $\\boxed{f(5)=18}$"
    ]
   },
   {
    "name": "Difference out the constants",
    "steps": [
     "For any $x$, $f(x+1)-f(x)=[g(x)+h(1)]-[g(x)+h(0)]=h(1)-h(0)$, a constant; likewise $f(x+1)-f(x)=g(1)-g(0)$. So $f$ has constant increments, forcing affinity $f(x)=cx+d$ under continuity.",
     "Then $g(x)=f(x)-h(0)=cx+d-2$ and $h(y)=f(y)-g(0)=cy+d-1$; the conditions $g(0)=d-2=1$ and $h(0)=d-1=2$ both give $d=3$.",
     "$f(1)=c+3=6\\Rightarrow c=3$, so $f(x)=3x+3$, $g(x)=3x+1$, $h(x)=3x+2$.",
     "Hence $f(5)=3\\cdot5+3=\\boxed{18}$."
    ]
   }
  ],
  "remark": "Insight: the Pexider equation is Cauchy with three unknown functions; collapsing it via $g=f-h(0)$, $h=f-g(0)$ always recovers a single additive core plus the bookkeeping identity $f(0)=g(0)+h(0)$."
 },
 {
  "theme": "functionaleq",
  "themeLabel": "Continuous Functional Equations",
  "title": "The Parallelogram Law",
  "difficulty": 5,
  "task": "Determine",
  "tags": [
   "quadratic-functional",
   "parallelogram-law",
   "jordan-von-neumann",
   "continuity"
  ],
  "statement": "Let $f:\\mathbb{R}\\to\\mathbb{R}$ be continuous and satisfy the quadratic (parallelogram) equation \\[ f(x+y)+f(x-y)=2f(x)+2f(y)\\qquad\\text{for all } x,y\\in\\mathbb{R}, \\] with $f(3)=18$. Determine $f$, and find $f(5)$.",
  "answer": "$f(x)=2x^{2}$, so $f(5)=50$.",
  "trap": "Allowing a linear term, i.e. guessing $f(x)=ax^2+bx$. Substituting gives residual $-2by$, which forces $b=0$ (the equation tolerates no odd part), and a constant term must vanish since $f(0)=0$. The continuous solution is purely $cx^2$; admitting a linear or constant piece is the seductive error.",
  "solutions": [
   {
    "name": "Force quadratic homogeneity",
    "steps": [
     "Put $x=y=0$: $2f(0)=4f(0)$, so $f(0)=0$. Put $x=0$: $f(y)+f(-y)=2f(y)$, so $f$ is even.",
     "Put $y=x$: $f(2x)+f(0)=4f(x)$, so $f(2x)=4f(x)$; inductively $f(nx)=n^2 f(x)$, and with rationals $f(rx)=r^2 f(x)$.",
     "Taking $x=1$ gives $f(r)=r^2 f(1)$ on the rationals; continuity extends this to $f(x)=c x^2$ with $c=f(1)$.",
     "From $f(3)=9c=18$ we get $c=2$, so $f(x)=2x^2$ and $f(5)=50$. $\\boxed{f(5)=50}$"
    ]
   },
   {
    "name": "Strip the linear hypothesis by parity",
    "steps": [
     "Any solution splits as $f=f_{\\text{even}}+f_{\\text{odd}}$. Substituting and using that the right side $2f(x)+2f(y)$ is even in $y$ forces the odd part to satisfy $f_{\\text{odd}}(x+y)+f_{\\text{odd}}(x-y)=2f_{\\text{odd}}(x)$, whose continuous solutions are linear $bx$; but plugging $f=bx$ into the original gives $2bx=2bx+2by$, so $b=0$.",
     "Thus $f$ is even and satisfies $f(2x)=4f(x)$, giving $f(x)=cx^2$ by the rational scaling above plus continuity.",
     "$f(3)=9c=18\\Rightarrow c=2$, so $f(x)=2x^2$.",
     "Therefore $f(5)=2\\cdot25=\\boxed{50}$."
    ]
   }
  ],
  "remark": "Insight: this is the Jordan-von Neumann quadratic functional equation, whose continuous solutions are exactly $cx^2$ — the algebraic shadow of an inner-product norm $\\lVert x\\rVert^2$. Unlike Cauchy, it tolerates no linear term, because $f(2x)=4f(x)$ is incompatible with first-degree growth."
 },
 {
  "theme": "ivt",
  "themeLabel": "The Intermediate Value Theorem",
  "title": "The Reluctant Crossing",
  "difficulty": 4,
  "task": "Find the number of …",
  "tags": [
   "root-counting",
   "sign-change",
   "polynomial",
   "brackets"
  ],
  "statement": "Let $p(x)=x^{5}-5x+3$. \\[\\textbf{Find the number of real roots of } p,\\] and for each one exhibit a pair of integers $a<b$ with $p(a)$ and $p(b)$ of opposite sign that traps it. (You may not use a calculator; argue only from integer/half-integer values and the IVT.)",
  "answer": "$3$ real roots, trapped in $(-2,-1)$, $(0,1)$, and $(1,2)$. (Indeed $p=(x^{2}+x-1)(x^{3}-x^{2}+2x-3)$, so two roots are $\\tfrac{-1\\pm\\sqrt5}{2}$ and the third is the unique real root of the cubic factor.)",
  "trap": "Concluding that because $p$ has degree $5$ it must have $5$ real roots, or counting a sign change of opposite parity twice. IVT guarantees a root inside each sign-changing bracket but says nothing about the total count; the other two roots here are complex.",
  "solutions": [
   {
    "name": "Bracketing by integer values",
    "steps": [
     "Compute $p(-2)=-32+10+3=-19<0$, $p(-1)=-1+5+3=7>0$: a root in $(-2,-1)$ by IVT (polynomials are continuous).",
     "$p(0)=3>0$, $p(1)=1-5+3=-1<0$: a root in $(0,1)$.",
     "$p(1)=-1<0$, $p(2)=32-10+3=25>0$: a root in $(1,2)$. Three sign changes give at least $3$ real roots.",
     "To rule out more: $p'(x)=5x^{4}-5=5(x^{2}-1)(x^{2}+1)$ vanishes only at $x=\\pm1$, so $p$ has at most $2$ turning points, hence at most $3$ real roots. Therefore exactly $\\boxed{3}$."
    ]
   },
   {
    "name": "Explicit factorisation",
    "steps": [
     "Guess the quadratic factor $x^{2}+x-1$ (golden-ratio minimal polynomial); divide: $p(x)=(x^{2}+x-1)(x^{3}-x^{2}+2x-3)$.",
     "$x^{2}+x-1$ has the two real roots $\\tfrac{-1\\pm\\sqrt5}{2}\\approx-1.618,\\,0.618$.",
     "For the cubic $q(x)=x^{3}-x^{2}+2x-3$: $q(1)=-1<0$, $q(2)=5>0$ give one real root in $(1,2)$; $q'(x)=3x^{2}-2x+2$ has discriminant $4-24<0$, so $q$ is strictly increasing and has exactly one real root.",
     "Total real roots $=2+1=\\boxed{3}$."
    ]
   },
   {
    "name": "Descartes + sign survey",
    "steps": [
     "Signs of $p(x)=x^{5}-5x+3$: $+,-,+$ gives $2$ sign changes, so $0$ or $2$ positive roots.",
     "$p(-x)=-x^{5}+5x+3$: signs $-,+,+$ give $1$ change, so exactly $1$ negative root.",
     "From the brackets $(0,1)$ and $(1,2)$ we actually exhibit $2$ positive roots, matching the upper bound, and $(-2,-1)$ gives the lone negative root.",
     "Hence the real-root count is exactly $1+2=\\boxed{3}$."
    ]
   }
  ],
  "remark": "Insight: IVT is a one-way street — sign changes manufacture roots but never cap their number. Pairing it with the derivative (Rolle's bound: between two roots of $p$ lies a root of $p'$) turns a lower bound into the exact count."
 },
 {
  "theme": "ivt",
  "themeLabel": "The Intermediate Value Theorem",
  "title": "Noon on the Mountain",
  "difficulty": 4,
  "task": "Prove that",
  "tags": [
   "fixed-point",
   "self-map",
   "auxiliary-function",
   "closed-interval"
  ],
  "statement": "A hiker leaves the trailhead at $8{:}00$ and reaches the summit at $20{:}00$ along a single path; the next day she descends the same path, again leaving at $8{:}00$ and arriving at $20{:}00$. Model her position as a continuous function of clock time on each day, with the path parametrised by $s\\in[0,1]$ ($0=$ trailhead, $1=$ summit). \\[\\textbf{Prove there is a clock time at which she stands at the exact same point on both days.}\\]",
  "answer": "proved",
  "trap": "Trying to compare the two motions on different time-axes or assuming she moves monotonically (no resting, no backtracking). Monotonicity is never needed — only continuity of each day's position on the closed interval $[8,20]$. Superimposing the two days and using IVT on the difference is what works.",
  "solutions": [
   {
    "name": "Difference function",
    "steps": [
     "Let $u(t)$ and $d(t)$ be the ascent and descent positions ($s$-coordinates) at clock time $t\\in[8,20]$; both are continuous, with $u(8)=0,\\,u(20)=1$ and $d(8)=1,\\,d(20)=0$.",
     "Define $g(t)=u(t)-d(t)$, continuous on $[8,20]$ as a difference of continuous functions.",
     "$g(8)=0-1=-1<0$ and $g(20)=1-0=+1>0$, so $g$ changes sign across the interval.",
     "By IVT there is $t^{*}\\in(8,20)$ with $g(t^{*})=0$, i.e. $u(t^{*})=d(t^{*})$: same point on the path at the same clock time. $\\blacksquare$"
    ]
   },
   {
    "name": "Two phantom hikers",
    "steps": [
     "Imagine both journeys happening on one day: an upward hiker at $u(t)$ and a downward hiker at $d(t)$, moving on the same path over $[8,20]$.",
     "At $t=8$ the downward hiker is strictly above the upward one ($d(8)=1>0=u(8)$); at $t=20$ the order is reversed ($d(20)=0<1=u(20)$).",
     "Position-along-path is continuous in $t$, so the gap $h(t)=d(t)-u(t)$ is continuous with $h(8)>0$ and $h(20)<0$.",
     "IVT applied to $h$ on the closed interval yields a meeting instant $t^{*}$ where $h(t^{*})=0$, so the two phantoms coincide — exactly the claimed common time and place. $\\blacksquare$"
    ]
   }
  ],
  "remark": "Insight: this is the classic 'monk on the mountain' puzzle. The decisive move is to overlay the two trips on a common time axis so the desired statement becomes a single sign change of one continuous function. Crucially the argument uses only continuity on a closed interval — the hiker may rest or backtrack arbitrarily, and the meeting point need not occur at noon despite the title's hint."
 },
 {
  "theme": "ivt",
  "themeLabel": "The Intermediate Value Theorem",
  "title": "Antipodes of the Equator",
  "difficulty": 4,
  "task": "Prove that",
  "tags": [
   "antipodal",
   "circle",
   "periodic",
   "sign-flip"
  ],
  "statement": "Let $g:\\mathbb{R}\\to\\mathbb{R}$ be continuous and $2\\pi$-periodic (think: temperature around a circular wall). \\[\\textbf{Prove that there exists an angle } \\theta \\text{ with } g(\\theta)=g(\\theta+\\pi),\\] i.e. some pair of diametrically opposite points have equal temperature.",
  "answer": "proved",
  "trap": "Claiming the antipodal point with equal value is unique, or trying to locate it explicitly. Uniqueness is false (a constant $g$ works everywhere, and $g(\\theta)=\\cos\\theta+\\cos 2\\theta$ has several such angles). The argument only delivers existence, via the sign-flip identity $h(\\theta+\\pi)=-h(\\theta)$.",
  "solutions": [
   {
    "name": "Sign-flipping auxiliary",
    "steps": [
     "Set $h(\\theta)=g(\\theta+\\pi)-g(\\theta)$, which is continuous everywhere as a difference of continuous functions.",
     "Then $h(\\theta+\\pi)=g(\\theta+2\\pi)-g(\\theta+\\pi)=g(\\theta)-g(\\theta+\\pi)=-h(\\theta)$, using the $2\\pi$-periodicity $g(\\theta+2\\pi)=g(\\theta)$.",
     "In particular $h(\\pi)=-h(0)$, so $h(0)\\,h(\\pi)=-h(0)^2\\le 0$: the values $h(0)$ and $h(\\pi)$ have opposite signs (or both vanish).",
     "By the Intermediate Value Theorem on $[0,\\pi]$ there is a $\\theta^{*}$ with $h(\\theta^{*})=0$, i.e. $g(\\theta^{*})=g(\\theta^{*}+\\pi)$. $\\blacksquare$"
    ]
   },
   {
    "name": "Extreme-value contradiction",
    "steps": [
     "By periodicity, $g$ on the compact circle attains a maximum at some $\\alpha$; since $g(\\alpha)\\ge g(\\alpha+\\pi)$, the function $h(\\theta)=g(\\theta+\\pi)-g(\\theta)$ satisfies $h(\\alpha)\\le 0$.",
     "At a minimum point $\\beta$ we have $g(\\beta)\\le g(\\beta+\\pi)$, so $h(\\beta)\\ge 0$.",
     "Thus the continuous function $h$ takes a value $\\le 0$ and a value $\\ge 0$.",
     "The Intermediate Value Theorem then forces a zero of $h$, i.e. an antipodal pair $\\{\\theta,\\theta+\\pi\\}$ with equal temperature. $\\blacksquare$"
    ]
   }
  ],
  "remark": "This is the $1$-dimensional Borsuk–Ulam theorem. The engine is the antisymmetry $h(\\theta+\\pi)=-h(\\theta)$: any continuous function that is odd about a half-period must cross zero. Note uniqueness genuinely fails — a constant $g$ realizes equality at every angle — so only existence is claimed."
 },
 {
  "theme": "ivt",
  "themeLabel": "The Intermediate Value Theorem",
  "title": "Where Exponential Meets the Line",
  "difficulty": 4,
  "task": "Determine",
  "tags": [
   "transcendental",
   "root-counting",
   "exponential",
   "convexity"
  ],
  "statement": "\\[\\textbf{Determine the number of real solutions of } 2^{x}=3x,\\] and locate each in an interval of length $1$ between consecutive integers, justifying existence purely by IVT.",
  "answer": "Exactly $2$ solutions, one in $(0,1)$ and one in $(3,4)$.",
  "trap": "Assuming a single intersection because $2^x$ eventually beats any line, or assuming three because the curve is convex. Convexity of $f(x)=2^{x}-3x$ forces at most two roots, exactly the count IVT then confirms by exhibiting two sign changes.",
  "solutions": [
   {
    "name": "Sign survey + convexity bound",
    "steps": [
     "Let $f(x)=2^{x}-3x$, continuous on $\\mathbb{R}$.",
     "$f(0)=1>0$, $f(1)=2-3=-1<0$: a root in $(0,1)$. $f(3)=8-9=-1<0$, $f(4)=16-12=4>0$: a root in $(3,4)$.",
     "$f''(x)=(\\ln2)^{2}2^{x}>0$, so $f$ is strictly convex and crosses any horizontal level (here $0$) at most twice.",
     "Two roots found, at most two possible: exactly $\\boxed{2}$ solutions, in $(0,1)$ and $(3,4)$."
    ]
   },
   {
    "name": "Monotone-piece analysis",
    "steps": [
     "$f'(x)=2^{x}\\ln2-3$ vanishes once, at $x_{0}=\\log_{2}\\!\\frac{3}{\\ln2}\\approx2.11$; $f$ decreases on $(-\\infty,x_{0}]$, increases after.",
     "On the decreasing branch $f(0)=1>0$ and $f(x_0)<0$ (since $f(2)=4-6=-2<0<f(0)$ already shows a crossing before $x_0$), giving exactly one root there.",
     "On the increasing branch $f(x_0)<0$ and $f(4)=4>0$ give exactly one more root.",
     "A continuous function strictly monotone on each of two pieces has at most one root per piece; both occur, so the total is $\\boxed{2}$."
    ]
   }
  ],
  "remark": "Insight: for $a^{x}=mx+b$, the count is decided by combining IVT (to find crossings) with strict convexity of $a^{x}-mx-b$ (to cap them at two). The same machine handles $e^{x}=x^{2}$, $2^{x}=x^{10}$, etc."
 },
 {
  "theme": "ivt",
  "themeLabel": "The Intermediate Value Theorem",
  "title": "The Self-Map's Mirror",
  "difficulty": 4,
  "task": "Prove that",
  "tags": [
   "self-map",
   "fixed-point",
   "anti-diagonal",
   "boundary-values"
  ],
  "statement": "Let $f:[0,1]\\to[0,1]$ be continuous. \\[\\textbf{Prove that the equation } f(x)=1-x \\textbf{ has a solution in } [0,1].\\] (Geometrically: the graph of $f$ must meet the anti-diagonal joining $(0,1)$ to $(1,0)$.)",
  "answer": "proved",
  "trap": "Invoking the Brouwer/IVT fixed-point statement '$f(x)=x$' and thinking it is the same thing, or assuming $f$ is monotone so the crossing is unique. The target line is $y=1-x$, not $y=x$, and the two equations have genuinely different solution sets: for $f(x)=x^2$ the fixed points are $\\{0,1\\}$ while the unique anti-diagonal crossing sits at $x=\\tfrac{\\sqrt5-1}{2}\\approx0.618$, which is not a fixed point. The crossing also need not be unique (e.g. $f(x)=\\tfrac12+\\tfrac12\\cos 2\\pi x$ meets the anti-diagonal twice). What actually does the work is that $f$ maps INTO $[0,1]$, which pins the boundary signs of $f(x)-(1-x)$.",
  "solutions": [
   {
    "name": "Endpoint sign pinning",
    "steps": [
     "Define $h(x)=f(x)-(1-x)=f(x)+x-1$, a difference of continuous functions, hence continuous on the closed interval $[0,1]$.",
     "At $x=0$: $h(0)=f(0)-1$. Since $f(0)\\in[0,1]$ we have $f(0)\\le1$, so $h(0)\\le0$.",
     "At $x=1$: $h(1)=f(1)-0=f(1)$. Since $f(1)\\in[0,1]$ we have $f(1)\\ge0$, so $h(1)\\ge0$.",
     "If $h(0)=0$ or $h(1)=0$ the corresponding endpoint already solves $f(x)=1-x$. Otherwise $h(0)<0<h(1)$, and the Intermediate Value Theorem applied to the continuous $h$ on $[0,1]$ yields some $c\\in(0,1)$ with $h(c)=0$, i.e. $f(c)=1-c$. $\\blacksquare$"
    ]
   },
   {
    "name": "Reduction to a fixed point",
    "steps": [
     "Let $g(x)=1-f(x)$. Since $f(x)\\in[0,1]$ we have $1-f(x)\\in[0,1]$, so $g$ is again a continuous self-map of $[0,1]$.",
     "Every continuous self-map of $[0,1]$ has a fixed point: set $\\phi(x)=g(x)-x$, which is continuous, with $\\phi(0)=g(0)\\ge0$ and $\\phi(1)=g(1)-1\\le0$ because $g(0),g(1)\\in[0,1]$.",
     "By the Intermediate Value Theorem there is $c\\in[0,1]$ with $\\phi(c)=0$, i.e. $g(c)=c$, i.e. $1-f(c)=c$.",
     "Rearranging gives $f(c)=1-c$, exactly the required solution. $\\blacksquare$"
    ]
   }
  ],
  "remark": "The 'maps into $[0,1]$' hypothesis is doing all the work: it forces $h(x)=f(x)-(1-x)$ to be $\\le0$ at the left end and $\\ge0$ at the right end, which is precisely the sign change IVT needs. This is robust, not a quirk of the anti-diagonal: any continuous self-map of the square's domain $[0,1]$ whose values stay in $[0,1]$ must meet every continuous curve $y=\\gamma(x)$ that runs from the top edge $\\gamma(0)=1$ down to the bottom edge $\\gamma(1)=0$, since then $f(x)-\\gamma(x)$ is $\\le0$ at $x=0$ and $\\ge0$ at $x=1$. The classical fixed-point statement $f(x)=x$ is just the special case $\\gamma(x)=x$, the main diagonal."
 },
 {
  "theme": "ivt",
  "themeLabel": "The Intermediate Value Theorem",
  "title": "A Tunable Cubic",
  "difficulty": 4,
  "task": "Find all",
  "tags": [
   "parameter",
   "odd-degree",
   "root-counting",
   "critical-values"
  ],
  "statement": "For a real parameter $c$, consider $x^{3}-3x=c$. \\[\\textbf{Find all } c \\textbf{ for which this equation has exactly three distinct real solutions,}\\] and state how many solutions occur for the remaining values of $c$.",
  "answer": "Three distinct real roots iff $-2<c<2$. For $c=\\pm2$ there are exactly two (a double and a simple root); for $|c|>2$ exactly one.",
  "trap": "Asserting that an odd-degree equation always has three real roots, or forgetting that at $c=\\pm2$ a root becomes double so the count drops to two distinct. IVT guarantees at least one real root for every $c$ (odd degree), but the full trichotomy needs the local max/min values $\\pm2$.",
  "solutions": [
   {
    "name": "Critical values + IVT brackets",
    "steps": [
     "Let $f(x)=x^{3}-3x$. Then $f'(x)=3(x^{2}-1)$ gives a local max $f(-1)=2$ and a local min $f(1)=-2$.",
     "For $-2<c<2$ the horizontal line $y=c$ sits strictly between the min and max, so $f-c$ is positive then negative then positive across $-1$ and $1$: IVT gives one root in each of $(-\\infty,-1),(-1,1),(1,\\infty)$ — three distinct roots.",
     "For $|c|>2$ the line lies entirely above the max or below the min on the bounded hump, so $f-c$ is monotone-signed except for one crossing on the outer branch: exactly one real root (still guaranteed nonempty since odd degree).",
     "At $c=\\pm2$ the line is tangent at a turning point, producing a double root plus one simple root: $\\boxed{-2<c<2}$ for three distinct."
    ]
   },
   {
    "name": "Discriminant of the depressed cubic",
    "steps": [
     "Write $x^{3}-3x-c=0$; with $p=-3,q=-c$ the discriminant is $\\Delta=-4p^{3}-27q^{2}=108-27c^{2}$.",
     "Three distinct real roots iff $\\Delta>0\\iff c^{2}<4\\iff -2<c<2$.",
     "$\\Delta=0\\iff c=\\pm2$ gives a repeated root (two distinct reals); $\\Delta<0\\iff|c|>2$ gives one real root.",
     "Hence exactly three distinct real solutions precisely for $\\boxed{-2<c<2}$."
    ]
   }
  ],
  "remark": "Insight: a cubic's real-root count is governed by where the target level falls relative to the local extreme values. IVT supplies existence on each monotone branch; the extreme values $\\pm2$ are the thresholds where roots merge."
 },
 {
  "theme": "ivt",
  "themeLabel": "The Intermediate Value Theorem",
  "title": "The Two-Thirds Chord",
  "difficulty": 4,
  "task": "Prove that",
  "tags": [
   "horizontal-chord",
   "periodic-loop",
   "telescoping",
   "auxiliary-function"
  ],
  "statement": "Let $f$ be continuous on $[0,3]$ with $f(0)=f(3)$. \\[\\textbf{Prove there exists } x\\in[0,2] \\text{ with } f(x)=f(x+1).\\] (A unit-length horizontal chord must exist somewhere.)",
  "answer": "proved",
  "trap": "Assuming the chord can be anchored at the endpoint, i.e. that $f(0)=f(1)$ must hold, or that the chord is unique. Both fail: for $f(x)=\\sin\\!\\big(\\tfrac{2\\pi x}{3}\\big)$ we have $f(0)=f(3)=0$ yet $f(1)=\\tfrac{\\sqrt3}{2}\\neq f(0)$, so no chord sits at $x=0$; and for $f(x)=\\sin(2\\pi x)$ every $x$ works, so uniqueness is false. The slick proof instead uses that the three increments over $[0,1],[1,2],[2,3]$ sum to $f(3)-f(0)=0$, so they cannot all be strictly positive nor all strictly negative — forcing a sign change of the sliding gap.",
  "solutions": [
   {
    "name": "Telescoping increments",
    "steps": [
     "Define $g(x)=f(x+1)-f(x)$ on $[0,2]$; it is continuous as a difference of continuous functions.",
     "Compute the three discrete values and telescope: $g(0)+g(1)+g(2)=\\big(f(1)-f(0)\\big)+\\big(f(2)-f(1)\\big)+\\big(f(3)-f(2)\\big)=f(3)-f(0)=0.$",
     "Three real numbers summing to $0$ cannot all be strictly positive nor all strictly negative. Hence either some $g(k)=0$ for $k\\in\\{0,1,2\\}$ — and we are done immediately — or two of $g(0),g(1),g(2)$ have strictly opposite signs.",
     "In the latter case those two values occur at consecutive integer points $k,k+1\\in[0,2]$; since $g$ is continuous on $[k,k+1]\\subseteq[0,2]$, the IVT yields $x^{\\ast}\\in[k,k+1]$ with $g(x^{\\ast})=0$, i.e. $f(x^{\\ast})=f(x^{\\ast}+1)$. $\\blacksquare$"
    ]
   },
   {
    "name": "Straddle via partial values",
    "steps": [
     "With $a=f(0),\\,b=f(1),\\,c=f(2)$ and $f(3)=a$, the sliding gap $g(x)=f(x+1)-f(x)$ takes the values $g(0)=b-a,\\;g(1)=c-b,\\;g(2)=a-c$.",
     "These three values sum to $(b-a)+(c-b)+(a-c)=0$.",
     "A zero-sum triple must contain a value $\\ge 0$ and a value $\\le 0$; therefore the continuous function $g$ attains a nonnegative value and a nonpositive value among $g(0),g(1),g(2)$.",
     "By the IVT, $g$ takes the intermediate value $0$ somewhere on $[0,2]$, giving the required unit chord $f(x^{\\ast})=f(x^{\\ast}+1)$. $\\blacksquare$"
    ]
   }
  ],
  "remark": "Insight: this is the Universal Chord Theorem for chord length $L/n$ with $L=3,\\ n=3$. Because $1=3/3$ with $n$ an integer, a horizontal chord of length $1$ is forced; for non-integer ratios it can fail. The 'increments telescope to $0$' trick is the canonical way to defeat the temptation to anchor the chord at an endpoint."
 },
 {
  "theme": "ivt",
  "themeLabel": "The Intermediate Value Theorem",
  "title": "The Weighted Average is Hit",
  "difficulty": 4,
  "task": "Prove that",
  "tags": [
   "intermediate-value",
   "convex-combination",
   "attained-value",
   "level-set"
  ],
  "statement": "Let $f$ be continuous on $[0,1]$.\n\\[\n\\textbf{Prove that there exists } c\\in[0,1]\\text{ such that }\\ f(c)=\\frac{f(0)+2\\,f\\!\\left(\\tfrac12\\right)+f(1)}{4}.\n\\]",
  "answer": "Proved. Set $w=\\dfrac{f(0)+2f(1/2)+f(1)}{4}$. Since the weights $\\tfrac14,\\tfrac12,\\tfrac14$ are nonnegative and sum to $1$, $w$ is a convex combination of $f(0),f(\\tfrac12),f(1)$, hence $\\min\\{f(0),f(\\tfrac12),f(1)\\}\\le w\\le\\max\\{f(0),f(\\tfrac12),f(1)\\}$. Picking the sample points $u,v\\in\\{0,\\tfrac12,1\\}$ that realise this min and max gives $f(u)\\le w\\le f(v)$, and the IVT on the interval between $u$ and $v$ yields $c$ with $f(c)=w$. No monotonicity and no special role for the midpoint are needed.",
  "trap": "Two tempting errors. First, assuming the weighted average equals $f$ at the midpoint, i.e. $w=f(\\tfrac12)$ so that $c=\\tfrac12$ works—false already for $f(x)=x^2$, where $f(\\tfrac12)=\\tfrac14$ but $w=\\tfrac38$. Second, believing $f$ must be monotone for a value to lie 'in between' two others. Neither matters: $w$ is a convex combination of three genuine values of $f$, so it sits between their min and max, and the IVT realises every value in that range for any continuous $f$. The weight $2$ on the middle term is a red herring; any nonnegative weights summing to $1$ would do.",
  "solutions": [
   {
    "name": "Convex combination is between the sampled extremes",
    "steps": [
     "Write $w:=\\dfrac{f(0)+2f(\\tfrac12)+f(1)}{4}=\\tfrac14 f(0)+\\tfrac12 f(\\tfrac12)+\\tfrac14 f(1)$. The coefficients $\\tfrac14,\\tfrac12,\\tfrac14$ are nonnegative and sum to $1$, so $w$ is a convex combination of the three values $f(0),f(\\tfrac12),f(1)$.",
     "Let $\\mu=\\min\\{f(0),f(\\tfrac12),f(1)\\}$ and $M=\\max\\{f(0),f(\\tfrac12),f(1)\\}$. Replacing each value by $\\mu$ gives $w\\ge\\tfrac14\\mu+\\tfrac12\\mu+\\tfrac14\\mu=\\mu$, and replacing each by $M$ gives $w\\le M$. Hence $\\mu\\le w\\le M$.",
     "Let $u\\in\\{0,\\tfrac12,1\\}$ be a point with $f(u)=\\mu$ and $v\\in\\{0,\\tfrac12,1\\}$ a point with $f(v)=M$. Then $f(u)\\le w\\le f(v)$, and $u,v\\in[0,1]$.",
     "If $w=f(u)$ or $w=f(v)$ we are done with $c=u$ or $c=v$. Otherwise $f(u)<w<f(v)$; apply the Intermediate Value Theorem to the continuous function $f$ on the closed interval with endpoints $u$ and $v$ to obtain $c$ strictly between them with $f(c)=w$. In all cases such a $c\\in[0,1]$ exists. $\\blacksquare$"
    ]
   },
   {
    "name": "Extreme Value Theorem then IVT",
    "steps": [
     "Since $f$ is continuous on the compact interval $[0,1]$, the Extreme Value Theorem gives points $p,q\\in[0,1]$ at which $f$ attains its global minimum $m=f(p)$ and global maximum $M=f(q)$, so $m\\le f(x)\\le M$ for every $x\\in[0,1]$.",
     "In particular $f(0),f(\\tfrac12),f(1)\\in[m,M]$. As $w$ is a convex combination of these three values (weights nonnegative, summing to $1$), and $[m,M]$ is convex, we get $w\\in[m,M]$, i.e. $f(p)\\le w\\le f(q)$.",
     "Apply the Intermediate Value Theorem to $f$ on the closed interval with endpoints $p$ and $q$: every value between $f(p)=m$ and $f(q)=M$ is attained there, and $w$ is such a value.",
     "Therefore there is $c$ between $p$ and $q$ (hence $c\\in[0,1]$) with $f(c)=w=\\dfrac{f(0)+2f(\\tfrac12)+f(1)}{4}$. $\\blacksquare$"
    ]
   }
  ],
  "remark": "Insight: any weighted average of attained values of a continuous function is itself attained, because the IVT realises every value between the function's minimum and maximum. Nothing depends on the particular weights $\\tfrac14,\\tfrac12,\\tfrac14$—the '$2$ in the middle' is decorative; the same argument works for any nonnegative weights summing to $1$, and even for a weighted average of finitely many samples. The key structural fact is that a level set $\\{x:f(x)=w\\}$ is nonempty for every $w$ in the range, and the range of a continuous function on an interval is itself an interval."
 },
 {
  "theme": "ivt",
  "themeLabel": "The Intermediate Value Theorem",
  "title": "Every Slope of 1/n Occurs",
  "difficulty": 5,
  "task": "Prove that",
  "tags": [
   "horizontal-chord",
   "equal-slope",
   "telescoping",
   "sliding-window"
  ],
  "statement": "Let $f$ be continuous on $[0,1]$ with $f(0)=0$ and $f(1)=1$. Let $n\\ge1$ be an integer. \\[\\textbf{Prove there exist } a,b \\text{ with } 0\\le a<b\\le1,\\ b-a=\\tfrac1n,\\ \\text{and}\\ f(b)-f(a)=\\tfrac1n.\\] That is, somewhere the graph has a chord of horizontal width $1/n$ and vertical rise exactly $1/n$ (average slope $1$).",
  "answer": "proved",
  "trap": "Trying to anchor the window at $a=0$ (then $f(1/n)$ need not equal $1/n$ \\textemdash{} e.g. a continuous $f$ with $f(0)=0,f(1)=1$ can have $f(1/3)\\approx0.63$), or claiming it works for arbitrary widths $w\\in(0,1)$. The result is special to widths $1/n$: there exist continuous $f$ with $f(0)=0,f(1)=1$ having NO chord of slope $1$ and width, say, $2/5$. The telescoping sum is what privileges $1/n$.",
  "solutions": [
   {
    "name": "Telescoping over a uniform partition",
    "steps": [
     "Define $g(x)=f\\!\\left(x+\\tfrac1n\\right)-f(x)-\\tfrac1n$ on $\\left[0,\\,1-\\tfrac1n\\right]$. It is continuous (difference of continuous functions), and a zero of $g$ is exactly the desired chord: $g(a)=0\\iff f(a+\\tfrac1n)-f(a)=\\tfrac1n$.",
     "Evaluate at the partition points $x_k=\\tfrac{k}{n}$, $k=0,\\dots,n-1$, and telescope: \\[\\sum_{k=0}^{n-1} g(x_k)=\\sum_{k=0}^{n-1}\\!\\Big(f(\\tfrac{k+1}{n})-f(\\tfrac{k}{n})\\Big)-n\\cdot\\tfrac1n=\\big(f(1)-f(0)\\big)-1=1-1=0.\\]",
     "Since the $n$ numbers $g(x_0),\\dots,g(x_{n-1})$ sum to $0$, they cannot all be strictly positive nor all strictly negative; so either some $g(x_j)=0$ or two of them have opposite signs.",
     "If some $g(x_j)=0$ we are done with $a=x_j$. Otherwise apply IVT to $g$ on the subinterval between two partition points of opposite sign to get $a$ with $g(a)=0$, i.e. $f(a+\\tfrac1n)-f(a)=\\tfrac1n$. Take $b=a+\\tfrac1n$. $\\blacksquare$"
    ]
   },
   {
    "name": "Mean-zero pigeonhole, then IVT",
    "steps": [
     "With $g$ as above, the arithmetic mean of $g$ over the $n$ equally spaced points is $\\tfrac1n\\sum_{k=0}^{n-1} g(x_k)=0$ by the same telescoping computation.",
     "A finite list with mean $0$ must contain a member that is $\\ge0$ and a member that is $\\le0$ (otherwise the mean would be strictly positive or strictly negative).",
     "Hence $g$ attains a value $\\ge0$ and a value $\\le0$ on $\\left[0,\\,1-\\tfrac1n\\right]$.",
     "By continuity of $g$ and the Intermediate Value Theorem, $g$ has a zero $a$, which yields the width-$1/n$ chord of rise $1/n$ with $b=a+\\tfrac1n$. $\\blacksquare$"
    ]
   },
   {
    "name": "Why non-1/n widths can fail (sharpness)",
    "steps": [
     "Fix a width $w\\in(0,1)$ that is NOT of the form $1/n$, so $\\sin\\tfrac{\\pi}{w}\\ne0$. Set \\[f(x)=x+\\sin^{2}\\!\\tfrac{\\pi x}{w}-x\\,\\sin^{2}\\!\\tfrac{\\pi}{w},\\] which is continuous with $f(0)=0$ and $f(1)=1$ (the two correction terms cancel at $x=1$ since $\\sin^2\\tfrac{\\pi}{w}=\\sin^2\\tfrac{\\pi}{w}$).",
     "A direct computation gives the constant $f(x+w)-f(x)-w=-w\\,\\sin^{2}\\!\\tfrac{\\pi}{w}$, which is a nonzero constant because $\\sin\\tfrac{\\pi}{w}\\ne0$ for $w\\ne1/n$.",
     "Hence this $f$ has no chord of width $w$ and slope $1$, since $f(x+w)-f(x)-w$ never vanishes \\textemdash{} so the telescoping argument genuinely needs $w=1/n$ (where $\\sin\\tfrac{\\pi}{w}=\\sin n\\pi=0$ collapses the obstruction to $0$).",
     "Therefore the statement is exactly true for widths $1/n$ and can fail for every other width. $\\blacksquare$"
    ]
   }
  ],
  "remark": "This is the Universal Chord Theorem of P. L\\'evy. The case $f(b)-f(a)=1/n$ for $f$ running from $0$ to $1$ is equivalent to a horizontal chord (width $1/n$) of the auxiliary function $h(x)=f(x)-x$, and the partition sum collapses precisely because $n$ steps of width $1/n$ tile $[0,1]$. For any width not of the form $1/n$, the sliding-block construction in Method 3 shows the conclusion can fail \\textemdash{} the rationals $1/n$ are exactly the universal chord lengths."
 },
 {
  "theme": "ivt",
  "themeLabel": "The Intermediate Value Theorem",
  "title": "The Septic Dial",
  "difficulty": 5,
  "task": "Find all",
  "tags": [
   "parameter",
   "root-counting",
   "odd-degree",
   "critical-values",
   "ivt"
  ],
  "statement": "For a real parameter $k$, let $P_k(x)=x^{7}-7x+k$. \\[\\textbf{Find all } k \\text{ for which } P_k \\text{ has exactly three distinct real roots,}\\] and determine the number of distinct real roots for every other real $k$.",
  "answer": "Exactly three distinct real roots iff $-6<k<6$. At $k=\\pm6$ there are exactly two distinct real roots (one double); for $|k|>6$ exactly one real root. (Every $k$ gives at least one root, since the degree is odd.)",
  "trap": "Believing a degree-$7$ equation can show $5$ or $7$ real roots here, or that an odd-degree polynomial having a real root means three. $P_k$ has only two real critical points, so it can have at most $3$ real roots; the thresholds are the critical VALUES $\\pm6$, not the critical points $\\pm1$.",
  "solutions": [
   {
    "name": "Critical values control the count",
    "steps": [
     "$P_k'(x)=7x^{6}-7=7(x^{6}-1)$ vanishes at the real points $x=\\pm1$ only, so $P_k$ has at most two turning points and hence at most three real roots.",
     "Local max at $x=-1$: value $(-1)-7(-1)+k=-1+7+k=6+k$. Local min at $x=1$: value $1-7+k=k-6$.",
     "Three distinct real roots occur exactly when the local max is positive and the local min is negative: $6+k>0$ and $k-6<0$, i.e. $-6<k<6$ (then IVT gives one root left of $-1$, one between $-1,1$, one right of $1$).",
     "At $k=6$: local min value $=0$ (double root) plus one simple root $\\Rightarrow$ two distinct; at $k=-6$: local max value $=0$, likewise two distinct. For $|k|>6$ both extreme values share a sign, leaving one crossing on an outer monotone branch $\\Rightarrow$ one real root. Answer: $\\boxed{-6<k<6}$."
    ]
   },
   {
    "name": "Shifting a fixed graph",
    "steps": [
     "Real roots of $P_k$ are the $x$ with $x^{7}-7x=-k$, i.e. intersections of the fixed curve $y=x^{7}-7x$ with the horizontal line $y=-k$.",
     "That curve has local max $6$ at $x=-1$ and local min $-6$ at $x=1$ (from $\\tfrac{d}{dx}(x^7-7x)=7(x^6-1)$), and is strictly monotone on each of the three branches.",
     "A horizontal line meets the curve three times iff it lies strictly between the min and max: $-6<-k<6\\iff-6<k<6$ (here using IVT on each monotone branch to guarantee a crossing).",
     "Tangency at $-k=\\pm6$ gives a double root (two distinct reals); outside, one crossing. Hence three distinct roots iff $\\boxed{-6<k<6}$."
    ]
   },
   {
    "name": "Discriminant sign check at the thresholds (corroboration)",
    "steps": [
     "The transition values of $k$ are where $P_k$ has a repeated root, i.e. $P_k(x)=P_k'(x)=0$ simultaneously.",
     "$P_k'(x)=0\\Rightarrow x=\\pm1$; substituting into $P_k(x)=0$ gives $k=-(\\pm1)^7+7(\\pm1)=\\mp1\\pm7$, namely $k=6$ (at $x=1$) and $k=-6$ (at $x=-1$).",
     "Between these thresholds the number of real roots is constant; testing $k=0$: $x^7-7x=0\\Rightarrow x(x^6-7)=0$ has the three real roots $0,\\pm7^{1/6}$.",
     "Equivalently the discriminant of $P_k$ in $x$ factors as $-7^{7}(k-6)(k+6)(k^{2}-6k+36)(k^{2}+6k+36)$, whose only real zeros are $k=\\pm6$. So the open interval $-6<k<6$ is exactly the three-distinct-root regime, confirming $\\boxed{-6<k<6}$."
    ]
   }
  ],
  "remark": "Insight: 'shift a rigid graph past a horizontal line' converts a parameter problem into reading off critical VALUES. IVT guarantees the crossings on each monotone branch; the extreme values $\\pm6$ are precisely where two roots collide. For $x^{2m+1}-(2m+1)x+k$ the same logic gives thresholds $\\pm2m$."
 },
 {
  "theme": "pathological",
  "themeLabel": "Pathological Functions",
  "title": "The Mirror at the Origin",
  "difficulty": 4,
  "task": "Determine",
  "tags": [
   "dirichlet",
   "continuity-set",
   "density",
   "two-sided-limit",
   "irrationals"
  ],
  "statement": "Define $f:\\mathbb{R}\\to\\mathbb{R}$ by\n\\[ f(x)=\\begin{cases} x, & x\\in\\mathbb{Q},\\\\ -x, & x\\notin\\mathbb{Q}. \\end{cases} \\]\nDetermine the exact set of points at which $f$ is continuous.",
  "answer": "$f$ is continuous at exactly one point: $\\{0\\}$.",
  "trap": "Concluding that $f$ is continuous wherever the two formulas 'happen to be close', or claiming continuity on some interval. Both $\\mathbb{Q}$ and its complement are dense, so near any point $a$ there are inputs giving values arbitrarily close to BOTH $a$ and $-a$; continuity forces $a=-a$, leaving only $a=0$.",
  "solutions": [
   {
    "name": "Two dense sequences",
    "steps": [
     "Fix any $a\\in\\mathbb{R}$. By density of $\\mathbb{Q}$, choose rationals $r_n\\to a$; then $f(r_n)=r_n\\to a$.",
     "By density of the irrationals, choose irrationals $t_n\\to a$; then $f(t_n)=-t_n\\to -a$.",
     "If $f$ is continuous at $a$ both sequences must give the same limit $f(a)$, so $a=-a$, i.e. $a=0$.",
     "At $a=0$: for every $x$, $|f(x)|=|x|\\to 0=f(0)$, so $f$ IS continuous there. Hence the continuity set is $\\boxed{\\{0\\}}$."
    ]
   },
   {
    "name": "Epsilon-delta directly",
    "steps": [
     "At $a=0$, given $\\varepsilon>0$ take $\\delta=\\varepsilon$: $|x|<\\delta\\Rightarrow |f(x)-f(0)|=|f(x)|=|x|<\\varepsilon$, so $f$ is continuous at $0$.",
     "For $a\\neq 0$, set $\\varepsilon=|a|>0$. Any $\\delta$-neighborhood of $a$ contains both a rational $r$ (with $f(r)=r\\approx a$) and an irrational $t$ (with $f(t)=-t\\approx -a$).",
     "These two values differ by $\\approx 2|a|>\\varepsilon$, so no single $L$ can keep $|f(x)-L|<\\tfrac{\\varepsilon}{2}$ throughout the neighborhood; the continuity criterion fails at $a$.",
     "Therefore continuity holds only at $\\boxed{\\{0\\}}$."
    ]
   },
   {
    "name": "Pieces-agreement principle",
    "steps": [
     "Write $f=g\\cdot \\mathbf{1}_{\\mathbb{Q}}+h\\cdot \\mathbf{1}_{\\mathbb{Q}^c}$ with $g(x)=x$ and $h(x)=-x$, both continuous on $\\mathbb{R}$.",
     "Since $\\mathbb{Q}$ and $\\mathbb{Q}^c$ are both dense, the continuity set of such an $f$ is exactly $\\{x: g(x)=h(x)\\}$.",
     "Solve $g(a)=h(a)$: $a=-a\\Rightarrow 2a=0\\Rightarrow a=0$.",
     "Thus the continuity set is $\\boxed{\\{0\\}}$, and at $a\\neq 0$ the jump in oscillation is $|a-(-a)|=2|a|>0$ — an essential discontinuity, never removable."
    ]
   }
  ],
  "remark": "The reflection $x\\mapsto -x$ acts as a 'mirror'; continuity survives only at the fixed point of the reflection, namely $0$. The general principle: for $f=g\\cdot \\mathbf{1}_{\\mathbb{Q}}+h\\cdot \\mathbf{1}_{\\mathbb{Q}^c}$ with $g,h$ continuous, density of both sets makes the continuity set exactly $\\{x: g(x)=h(x)\\}$. Here that locus is the single point where the line and its mirror image cross."
 },
 {
  "theme": "pathological",
  "themeLabel": "Pathological Functions",
  "title": "Where the Parabola Meets Its Square",
  "difficulty": 4,
  "task": "Find the number of …",
  "tags": [
   "dirichlet",
   "continuity-set",
   "polynomial-roots",
   "density",
   "counting"
  ],
  "statement": "Let\n\\[ g(x)=\\begin{cases} x^{2}, & x\\in\\mathbb{Q},\\\\ x^{4}, & x\\notin\\mathbb{Q}. \\end{cases} \\]\nFind the number of points at which $g$ is continuous, and list them.",
  "answer": "There are exactly $3$ such points: $\\{-1,\\,0,\\,1\\}$.",
  "trap": "Thinking $g$ is continuous on the whole interval $[-1,1]$ because $x^2$ and $x^4$ are 'both small' there. Closeness is not equality: continuity requires the two continuous pieces to be EQUAL at the point, i.e. $x^2=x^4$, which holds only at $0,\\pm1$.",
  "solutions": [
   {
    "name": "Reduce to where pieces agree",
    "steps": [
     "Write $g=x^2\\cdot \\mathbf{1}_{\\mathbb{Q}}+x^4\\cdot \\mathbf{1}_{\\mathbb{Q}^c}$, where both $x^2$ and $x^4$ are continuous on $\\mathbb{R}$.",
     "Because $\\mathbb{Q}$ and $\\mathbb{Q}^c$ are each dense, near any $a$ there are both rationals and irrationals; hence $g$ is continuous at $a$ iff the two continuous pieces agree at $a$: $a^2=a^4$.",
     "Solve $a^4-a^2=0\\Rightarrow a^2(a^2-1)=0\\Rightarrow a\\in\\{0,1,-1\\}$.",
     "At each such $a$ the common value equals $g(a)$ regardless of whether $a$ is rational, and every sequence $x\\to a$ gives $g(x)\\to a^2=a^4$; so $g$ is genuinely continuous there.",
     "Count $=\\boxed{3}$, at $\\{-1,0,1\\}$."
    ]
   },
   {
    "name": "Sequential criterion",
    "steps": [
     "Fix $a$. Choose rationals $r_n\\to a$; then $g(r_n)=r_n^2\\to a^2$. Choose irrationals $t_n\\to a$; then $g(t_n)=t_n^4\\to a^4$.",
     "For $g$ to be continuous at $a$, every sequential limit must coincide and equal $g(a)$; in particular $a^2=a^4$.",
     "This forces $a\\in\\{0,\\pm1\\}$. Conversely, at these points $a^2=a^4$, so for ANY sequence $x_n\\to a$ we get $g(x_n)\\to a^2=g(a)$, and continuity holds.",
     "Hence exactly $\\boxed{3}$ points of continuity: $\\{-1,0,1\\}$."
    ]
   }
  ],
  "remark": "A 'closeness' intuition is the classic killer: $x^2$ and $x^4$ are close on $[-1,1]$ but the discontinuity jump at an interior rational $a$ is $|a^2-a^4|>0$, not zero (e.g. at $a=\\tfrac12$ it is $\\tfrac{3}{16}$). These are essential (oscillating) discontinuities, not removable. Equality of the two pieces is the only currency for continuity."
 },
 {
  "theme": "pathological",
  "themeLabel": "Pathological Functions",
  "title": "Popcorn on the Unit Interval",
  "difficulty": 4,
  "task": "Determine",
  "tags": [
   "thomae",
   "popcorn",
   "irrationals",
   "lowest-terms",
   "density"
  ],
  "statement": "Define Thomae's function on $(0,1)$ by\n\\[ T(x)=\\begin{cases} \\dfrac{1}{q}, & x=\\dfrac{p}{q}\\text{ in lowest terms},\\ q\\ge 1,\\\\[4pt] 0, & x\\notin\\mathbb{Q}. \\end{cases} \\]\nDetermine the exact set of points in $(0,1)$ at which $T$ is continuous.",
  "answer": "$T$ is continuous at exactly the irrational points of $(0,1)$ (and discontinuous at every rational).",
  "trap": "Declaring $T$ nowhere continuous because it is defined by cases like Dirichlet. Unlike Dirichlet, the rational spikes $1/q$ shrink as denominators grow, so the limit at every point is $0$; continuity then holds precisely where the value is $0$, i.e. at the irrationals.",
  "solutions": [
   {
    "name": "Limit is zero everywhere",
    "steps": [
     "Fix $a\\in(0,1)$ and $\\varepsilon>0$. Only finitely many rationals $p/q\\in(0,1)$ have $q\\le N:=\\lceil 1/\\varepsilon\\rceil$ (for each such $q$ there are at most $q-1$ numerators, so the count is at most $\\sum_{q\\le N}(q-1)$, finite).",
     "Choose $\\delta>0$ small enough that the punctured interval $(a-\\delta,a+\\delta)\\setminus\\{a\\}$ avoids all of those finitely many rationals.",
     "Then every $x\\neq a$ in that interval is either irrational ($T=0$) or has denominator $q>N$, giving $T(x)=1/q<\\varepsilon$. So $\\lim_{x\\to a}T(x)=0$.",
     "Continuity at $a$ means $T(a)=\\lim_{x\\to a}T(x)=0$, which holds iff $a$ is irrational. Thus the continuity set is $\\boxed{\\{a\\in(0,1):a\\notin\\mathbb{Q}\\}}$."
    ]
   },
   {
    "name": "Separate the two cases",
    "steps": [
     "At a rational $a=p/q$: $T(a)=1/q>0$, but irrationals $t_n\\to a$ give $T(t_n)=0\\not\\to 1/q$; so $T$ is discontinuous there.",
     "At an irrational $a$: $T(a)=0$. The level set $\\{x:T(x)\\ge\\varepsilon\\}$ is finite for every $\\varepsilon>0$, so a small enough neighbourhood of $a$ misses all of it; every nearby value is then $<\\varepsilon$, giving $T(x)\\to 0=T(a)$. Hence $T$ is continuous there.",
     "Combining: continuity holds exactly at the irrationals of $(0,1)$.",
     "$\\boxed{\\text{continuity set}=\\text{irrationals in }(0,1)}$"
    ]
   }
  ],
  "remark": "Thomae's function is the canonical proof that a function can be continuous on a dense, full-measure set yet discontinuous on another dense set. The shrinking $1/q$ spikes are what separate it from Dirichlet, whose two limit values $0$ and $1$ persist in every neighbourhood, leaving it nowhere continuous."
 },
 {
  "theme": "pathological",
  "themeLabel": "Pathological Functions",
  "title": "The Rational Veil",
  "difficulty": 4,
  "task": "Find all",
  "tags": [
   "dirichlet",
   "indicator",
   "polynomial-zeros",
   "continuity-set",
   "density"
  ],
  "statement": "Let $a<b$ be real constants and define\n\\[ h(x)=\\begin{cases} (x-a)(x-b), & x\\in\\mathbb{Q},\\\\ 0, & x\\notin\\mathbb{Q}. \\end{cases} \\]\nFind all points at which $h$ is continuous (in terms of $a,b$).",
  "answer": "$h$ is continuous exactly at $x=a$ and $x=b$.",
  "trap": "Believing $h\\equiv 0$ 'almost everywhere' makes it continuous on a large set. The irrational part is $0$, but the rational part $(x-a)(x-b)$ is nonzero except at $a,b$; since rationals are dense, the function jumps near every other point. In fact $h$ is discontinuous at every point of $\\mathbb{R}\\setminus\\{a,b\\}$ (a co-countable, full-measure set), the exact opposite of 'continuous almost everywhere'.",
  "solutions": [
   {
    "name": "Indicator times polynomial",
    "steps": [
     "Write $h(x)=P(x)\\cdot \\mathbf{1}_{\\mathbb{Q}}(x)$ with $P(x)=(x-a)(x-b)$ continuous.",
     "At any $c$: rationals $r_n\\to c$ give $h(r_n)=P(r_n)\\to P(c)$; irrationals $t_n\\to c$ give $h(t_n)=0\\to 0$.",
     "Since both $\\mathbb{Q}$ and $\\mathbb{R}\\setminus\\mathbb{Q}$ are dense, a limit at $c$ exists iff these two values agree, i.e. iff $P(c)=0$; then continuity also needs the common value $0$ to equal $h(c)$, which holds (if $c$ rational, $h(c)=P(c)=0$; if irrational, $h(c)=0$).",
     "$P(c)=0\\iff c\\in\\{a,b\\}$. Hence the continuity set is $\\boxed{\\{a,b\\}}$."
    ]
   },
   {
    "name": "Direct estimate at the zeros",
    "steps": [
     "Sandwich for every $x$: regardless of rationality, $|h(x)|\\le |(x-a)(x-b)|$, because the irrational branch is $0\\le |(x-a)(x-b)|$ and the rational branch equals $(x-a)(x-b)$.",
     "At $c=a$: $|h(x)-h(a)|=|h(x)|\\le |x-a|\\,|x-b|\\to 0$ as $x\\to a$, so $h$ is continuous at $a$; identically at $c=b$.",
     "At any other $c$: $P(c)\\neq 0$, and rationals near $c$ give values $\\approx P(c)\\neq 0$ while irrationals give $0$, so no limit exists — the oscillation is $|P(c)|>0$ (an essential discontinuity).",
     "Therefore $h$ is continuous exactly at $\\boxed{\\{a,b\\}}$."
    ]
   }
  ],
  "remark": "The zero set of the polynomial coefficient is the continuity set when the other piece is the constant $0$. More generally, for any continuous $P$, the function $P\\cdot\\mathbf{1}_{\\mathbb{Q}}$ is continuous exactly on $P^{-1}(0)$: density forces the rational-limit $P(c)$ and irrational-limit $0$ to coincide, and where they do, the value matches. Here that zero set is the finite set $\\{a,b\\}$, so $h$ is discontinuous on a full-measure set yet continuous at precisely two points."
 },
 {
  "theme": "pathological",
  "themeLabel": "Pathological Functions",
  "title": "Continuity on a Prescribed Triple",
  "difficulty": 5,
  "task": "Find a,b",
  "tags": [
   "construction",
   "dirichlet",
   "cubic-roots",
   "continuity-set",
   "reflection"
  ],
  "statement": "You must construct a function continuous at exactly the three points $0,\\sqrt7,-\\sqrt7$ and nowhere else. Consider\n\\[ f(x)=\\begin{cases} c\\,(x^{3}-bx), & x\\in\\mathbb{Q},\\\\ -c\\,(x^{3}-bx), & x\\notin\\mathbb{Q}, \\end{cases} \\]\nwith real constants $b,c$ and $c\\neq 0$. Find $b$ (and the resulting continuity set) so that the continuity set is exactly $\\{0,\\sqrt7,-\\sqrt7\\}$.",
  "answer": "$b=7$ (any $c\\neq 0$ works); the continuity set is then exactly $\\{0,\\sqrt7,-\\sqrt7\\}$.",
  "trap": "Trying to engineer the single point $\\sqrt7$ by tuning $c$. The value of $c\\neq0$ is irrelevant to the continuity set; what matters is the zero set of $x^3-bx$, since the rational and irrational pieces are negatives of each other and agree only where the polynomial vanishes.",
  "solutions": [
   {
    "name": "Match the two pieces",
    "steps": [
     "Write $f=g\\cdot\\mathbf{1}_{\\mathbb{Q}}+(-g)\\cdot\\mathbf{1}_{\\mathbb{Q}^c}$ with $g(x)=c(x^3-bx)$ continuous everywhere. Since both $\\mathbb{Q}$ and $\\mathbb{Q}^c$ are dense, at any point $a$ the rational sequences drive $f$ toward $g(a)$ and the irrational sequences toward $-g(a)$.",
     "The two-sided limit exists (and equals $f(a)$) iff $g(a)=-g(a)$, i.e. $g(a)=0$. So the continuity set equals the real zero set of $g$.",
     "Since $c\\neq0$, $g(x)=0\\iff x^3-bx=0\\iff x(x^2-b)=0$. For three distinct real zeros we need $b>0$, giving $\\{0,\\pm\\sqrt b\\}$.",
     "We need $\\{0,\\pm\\sqrt b\\}=\\{0,\\pm\\sqrt7\\}$, so $\\sqrt b=\\sqrt7\\Rightarrow b=7$, and the continuity set is exactly $\\boxed{\\{0,\\sqrt7,-\\sqrt7\\}}$ for every $c\\neq0$."
    ]
   },
   {
    "name": "Sequential check at each point",
    "steps": [
     "At a root $a$ of $x^3-7x$ we have $g(a)=0$, so $|f(x)|=|g(x)|\\to0=f(a)$ for every $x\\to a$ (rational or irrational). Hence $f$ is continuous at $a$.",
     "At a non-root $a$, rational sequences give $f\\to g(a)\\neq0$ while irrational sequences give $f\\to -g(a)\\neq0$; the two limits differ by $2|g(a)|>0$, so $f$ is discontinuous (an essential, non-removable break).",
     "Thus the continuity set is precisely the zero set $\\{0,\\sqrt7,-\\sqrt7\\}$ of $x^3-7x$, which matches the target.",
     "$\\boxed{b=7,\\ \\text{continuity set}=\\{0,\\sqrt7,-\\sqrt7\\}}$"
    ]
   }
  ],
  "remark": "Reflection-type pathologies localize continuity onto the zero set of the coefficient function. To prescribe ANY finite set $\\{a_1,\\dots,a_k\\}$ as a continuity set, take $g(x)=\\prod_i(x-a_i)$ and reflect it on the irrationals; the function is then continuous exactly on that set."
 },
 {
  "theme": "pathological",
  "themeLabel": "Pathological Functions",
  "title": "A Single Tangent Point",
  "difficulty": 5,
  "task": "Find b",
  "tags": [
   "construction",
   "double-root",
   "one-point-continuity",
   "quadratic",
   "dirichlet"
  ],
  "statement": "Let\n\\[\nf(x)=\\begin{cases} x, & x\\in\\mathbb{Q},\\\\[2pt] x+(x-b)^{2}, & x\\notin\\mathbb{Q}, \\end{cases}\n\\]\nwhere $b\\in\\mathbb{R}$ is a constant. It is required that $f$ be continuous at exactly one point and that this point be $x=2$. Find the value of $b$, and prove that the continuity set is the single point $\\{2\\}$.",
  "answer": "$b=2$. With this value the continuity set of $f$ is exactly $\\{2\\}$.",
  "trap": "The fatal error is to treat the matching equation $x=x+(x-b)^2$ as a generic quadratic and \\emph{expect two intersection points}, then try to merge or balance them. In fact $(x-b)^2=0$ has the \\emph{double} root $x=b$, so there is only one agreement point for every $b$ — the count is one, not two. A second tempting-but-misguided idea is to make the irrational piece cross the line transversally, e.g. offset $x+(x-b)$ (linear): this also gives exactly one continuity point, so it does \\emph{not} solve a different problem — but it is the wrong instrument here, because the problem's data ($(x-b)^2$) is already fixed and the perfect square is what guarantees a single, tangential agreement. The clean reading is: continuity occurs precisely on the zero set of the offset, and a perfect square has a one-point zero set.",
  "solutions": [
   {
    "name": "Continuity set = zero set of the offset",
    "steps": [
     "Both $\\mathbb{Q}$ and $\\mathbb{R}\\setminus\\mathbb{Q}$ are dense, so for any $a$ there are rationals $r_n\\to a$ with $f(r_n)=r_n\\to a$, and irrationals $t_n\\to a$ with $f(t_n)=t_n+(t_n-b)^2\\to a+(a-b)^2$.",
     "A two-sided limit of $f$ at $a$ exists iff these two subsequential limits coincide: $a=a+(a-b)^2$, i.e. $(a-b)^2=0$. When it exists, its common value $a$ also equals $f(a)$ (whether $a$ is rational, giving $f(a)=a$, or irrational, giving $f(a)=a+(a-b)^2=a$). So $f$ is continuous at $a$ iff $(a-b)^2=0$.",
     "Thus the continuity set equals the zero set $\\{a:(a-b)^2=0\\}=\\{b\\}$: a perfect square vanishes only at its double root, giving exactly one point for every $b$.",
     "To place that single point at $2$, set $b=2$. Hence $b=2$ and the continuity set is $\\boxed{\\{2\\}}$."
    ]
   },
   {
    "name": "Direct epsilon estimate at 2 and explicit jump elsewhere",
    "steps": [
     "Take $b=2$. At $x=2$: for every $x$, $|f(x)-2|\\le|x-2|+(x-2)^2$ (the rational branch contributes $|x-2|$, the irrational branch at most $|x-2|+(x-2)^2$). As $x\\to2$ this bound $\\to0$, so $\\lim_{x\\to2}f(x)=2=f(2)$: continuous at $2$.",
     "At any $a\\neq2$: put $\\eta=(a-2)^2>0$. In every neighborhood of $a$ there are rationals with $f$-value near $a$ and irrationals with $f$-value near $a+\\eta$. The oscillation of $f$ near $a$ is at least $\\eta>0$, so the limit cannot exist — discontinuous (an essential/non-removable break created by the dense disagreement).",
     "Therefore continuity holds at $2$ and fails at every other real number.",
     "Conclusion: $b=2$ and continuity set $=\\boxed{\\{2\\}}$."
    ]
   }
  ],
  "remark": "The governing principle is that for a function defined by different formulas on $\\mathbb{Q}$ and its complement (both dense), continuity at $a$ forces the two formulas to agree at $a$ — so the continuity set is exactly the zero set of their difference. Here that difference is the perfect square $(x-b)^2$, whose zero set is the single double root $\\{b\\}$. Choosing $(x-b)^2$ rather than a generic quadratic with two distinct roots is the whole trick: tangency, not transversality, is what manufactures a continuity set of size exactly one, and shifting $b$ slides that lone tangent point to any prescribed location, here $x=2$."
 },
 {
  "theme": "pathological",
  "themeLabel": "Pathological Functions",
  "title": "Popcorn Times x",
  "difficulty": 5,
  "task": "Determine",
  "tags": [
   "thomae",
   "product",
   "irrationals",
   "lowest-terms",
   "continuity-set"
  ],
  "statement": "Let $T$ be Thomae's function on $\\mathbb{R}$ (with $T(x)=1/q$ for $x=p/q$ in lowest terms with $q\\ge1$, and $T(x)=0$ for irrational $x$), and define $F(x)=x\\,T(x)$. Determine the exact set of points at which $F$ is continuous.",
  "answer": "$F$ is continuous exactly at every irrational point and at $x=0$; that is, on $(\\mathbb{R}\\setminus\\mathbb{Q})\\cup\\{0\\}$.",
  "trap": "Assuming multiplying by $x$ kills all the rational spikes so $F$ is continuous everywhere, or that it changes nothing so $F$ matches Thomae exactly. In fact $x=0$ is the one rational where $x\\,T(x)=0$ equals its limit, so $0$ joins the irrationals — but no other rational does.",
  "solutions": [
   {
    "name": "Limit equals zero, value decides",
    "steps": [
     "Fix any $a\\in\\mathbb{R}$ and a bounded window, say $|x-a|<1$, so $|x|\\le M:=|a|+1$. Then $0\\le |F(x)|=|x|\\,T(x)\\le M\\,T(x)$.",
     "Thomae's classical limit gives $\\lim_{x\\to a}T(x)=0$: for any $\\varepsilon>0$ only finitely many $x$ in the window have $T(x)\\ge \\varepsilon/M$ (those with denominator $q\\le M/\\varepsilon$), so they can be excluded from a small punctured neighbourhood. Hence $\\lim_{x\\to a}F(x)=0$.",
     "Continuity at $a$ therefore holds iff $F(a)=0$, i.e. iff $a\\,T(a)=0$. If $a$ is irrational, $T(a)=0$ so $F(a)=0$: continuous. If $a=0$, $F(0)=0\\cdot T(0)=0$: continuous.",
     "If $a=p/q\\neq0$ is rational in lowest terms, $F(a)=\\tfrac{p}{q}\\cdot\\tfrac{1}{q}=\\tfrac{p}{q^2}\\neq0$, so $F(a)\\neq\\lim_{x\\to a}F(x)=0$: discontinuous. Continuity set $=\\boxed{(\\mathbb{R}\\setminus\\mathbb{Q})\\cup\\{0\\}}$."
    ]
   },
   {
    "name": "Concrete witness at a nonzero rational",
    "steps": [
     "At $a=3/7$: $F(3/7)=\\tfrac37\\cdot\\tfrac17=\\tfrac{3}{49}\\neq0$.",
     "Pick irrationals $t_n\\to 3/7$ (e.g. $t_n=\\tfrac37+\\tfrac{\\sqrt2}{n}$); then $F(t_n)=t_n\\cdot0=0\\not\\to \\tfrac{3}{49}$, so $F$ is discontinuous there. The identical argument applies to every nonzero rational, where the jump equals $|p/q^2|>0$.",
     "At $0$: for every $x$, $|F(x)|=|x|\\,T(x)\\le|x|\\to0=F(0)$, so $F$ is continuous — the multiplication by $x$ 'rescues' the origin by pinning the value to $0$.",
     "At an irrational $a$: $F(a)=0$ and $F(x)\\to0$, so continuous. Hence the continuity set is $\\boxed{(\\mathbb{R}\\setminus\\mathbb{Q})\\cup\\{0\\}}$."
    ]
   }
  ],
  "remark": "Multiplying Thomae by $x$ adds exactly one new continuity point — the origin — by forcing the value there to be $0$. It is a vivid demonstration that the continuity set of any such spiky function is precisely the locus where its (here, zero) limit meets its value."
 },
 {
  "theme": "pathological",
  "themeLabel": "Pathological Functions",
  "title": "The Folded Sawtooth",
  "difficulty": 4,
  "task": "Find the number of points at which $f$ is continuous, and identify them.",
  "tags": [
   "fractional-part",
   "reflection",
   "continuity-set",
   "counting",
   "density"
  ],
  "statement": "On $[0,1]$ let $\\{x\\}=x-\\lfloor x\\rfloor$ denote the fractional part, and define\n\\[ f(x)=\\begin{cases} \\{x\\}, & x\\in\\mathbb{Q},\\\\ 1-\\{x\\}, & x\\notin\\mathbb{Q}. \\end{cases} \\]\nFind the number of points of $[0,1]$ at which $f$ is continuous, and identify them.",
  "answer": "Exactly one point: $x=\\tfrac12$.",
  "trap": "Treating $\\{x\\}$ and $1-\\{x\\}$ as a smooth 'fold' and claiming continuity at the symmetric endpoints $0$ and $1$, or on a whole interval. Closeness is not equality. On $[0,1)$ we have $\\{x\\}=x$, so the two pieces are $x$ and $1-x$, which are equal only at $x=\\tfrac12$; at the endpoint $1$ the value $\\{1\\}=0$ jumps, and at $0$ the irrational branch tends to $1\\neq f(0)=0$, so both endpoints fail.",
  "solutions": [
   {
    "name": "Agreement of the two branches",
    "steps": [
     "On $[0,1)$ we have $\\{x\\}=x$, so $f=x\\cdot\\mathbf{1}_{\\mathbb{Q}}+(1-x)\\cdot\\mathbf{1}_{\\mathbb{Q}^c}$, a blend of the two continuous functions $x$ and $1-x$.",
     "Since $\\mathbb{Q}$ and $\\mathbb{Q}^c$ are each dense, near any $a\\in[0,1)$ there are both rationals and irrationals; hence $f$ is continuous at $a$ iff the two continuous pieces agree there: $a=1-a$.",
     "Solve $a=1-a\\Rightarrow a=\\tfrac12$. At $a=\\tfrac12$ the common value $\\tfrac12$ equals $f(\\tfrac12)=\\{\\tfrac12\\}=\\tfrac12$, so for ANY sequence $x_n\\to\\tfrac12$ we get $f(x_n)\\to\\tfrac12$: genuinely continuous.",
     "Endpoint $x=1$: here $1\\in\\mathbb{Q}$ so $f(1)=\\{1\\}=0$. Rationals $r_n\\uparrow1$ give $\\{r_n\\}=r_n\\to1$, while irrationals $t_n\\uparrow1$ give $1-\\{t_n\\}=1-t_n\\to0$; the rational limit $1\\neq f(1)=0$, so it is discontinuous.",
     "Hence exactly one continuity point: $\\boxed{x=\\tfrac12}$, count $1$."
    ]
   },
   {
    "name": "Two-sequence (sequential) test",
    "steps": [
     "Fix $a\\in[0,1)$. Rationals $r_n\\to a$ give $f(r_n)=\\{r_n\\}=r_n\\to a$; irrationals $t_n\\to a$ give $f(t_n)=1-\\{t_n\\}=1-t_n\\to 1-a$.",
     "Continuity at $a$ forces every sequential limit to coincide and equal $f(a)$; in particular $a=1-a$, i.e. $a=\\tfrac12$.",
     "Conversely at $a=\\tfrac12$ both limits and the value equal $\\tfrac12$, so for ANY $x_n\\to\\tfrac12$ we get $f(x_n)\\to\\tfrac12=f(\\tfrac12)$: continuity holds.",
     "Check the endpoints separately. At $a=0$: $f(0)=\\{0\\}=0$, but irrationals $t_n\\downarrow0$ give $1-t_n\\to1\\neq0$, discontinuous. At $a=1$: the rational branch tends to $1$ while $f(1)=0$, discontinuous.",
     "Number of continuity points $=\\boxed{1}$ (only $x=\\tfrac12$)."
    ]
   }
  ],
  "remark": "The 'fold' $1-\\{x\\}$ creates continuity only at the symmetry center $\\tfrac12$, the fixed point of the reflection $x\\mapsto1-x$. At any other interior rational the jump is $|a-(1-a)|=|2a-1|>0$, an essential (oscillating) discontinuity, not removable. Endpoints are a favorite hiding place for failure because $\\{x\\}$ itself jumps at integers: at $1$ the fractional part drops from near $1$ to $0$. Equality of the two pieces is the only currency for continuity."
 },
 {
  "theme": "pathological",
  "themeLabel": "Pathological Functions",
  "title": "Continuity on the Integers",
  "task": "Determine",
  "difficulty": 5,
  "tags": [
   "dirichlet",
   "indicator",
   "sine",
   "integer-zeros",
   "continuity-set"
  ],
  "statement": "Define $\\Phi:\\mathbb{R}\\to\\mathbb{R}$ by\n\\[ \\Phi(x)=\\begin{cases} \\sin(\\pi x), & x\\in\\mathbb{Q},\\\\ 0, & x\\notin\\mathbb{Q}. \\end{cases} \\]\nDetermine the exact set of points at which $\\Phi$ is continuous.",
  "answer": "$\\Phi$ is continuous exactly at the integers: $\\{x:\\Phi\\text{ continuous}\\}=\\mathbb{Z}$.",
  "trap": "Claiming a finite continuity set (as with polynomial-coefficient examples) or claiming continuity wherever $\\sin(\\pi x)$ is small. Because $\\sin(\\pi x)$ has infinitely many zeros — exactly the integers — the continuity set is the infinite discrete set $\\mathbb{Z}$, not a handful of points; and $\\sin(\\pi x)$ being merely small is not the same as being zero, so off the integers the jump $|\\sin(\\pi x)|>0$ survives.",
  "solutions": [
   {
    "name": "Zero set of the coefficient",
    "steps": [
     "Write $\\Phi(x)=\\sin(\\pi x)\\cdot \\mathbf{1}_{\\mathbb{Q}}(x)$, where $g(x)=\\sin(\\pi x)$ is continuous everywhere.",
     "Fix $a\\in\\mathbb{R}$. Since $\\mathbb{Q}$ is dense, a sequence of rationals $q_n\\to a$ gives $\\Phi(q_n)=\\sin(\\pi q_n)\\to\\sin(\\pi a)$; since the irrationals are dense, a sequence of irrationals $r_n\\to a$ gives $\\Phi(r_n)=0\\to 0$.",
     "The two-sided limit at $a$ exists iff these agree, i.e. iff $\\sin(\\pi a)=0$. And $\\sin(\\pi a)=0\\iff a\\in\\mathbb{Z}$.",
     "At an integer $n$ the common limit is $0$, and $\\Phi(n)=\\sin(\\pi n)=0$ matches it, so $\\Phi$ is continuous there. Hence the continuity set is $\\boxed{\\mathbb{Z}}$."
    ]
   },
   {
    "name": "Direct check at integers vs non-integers",
    "steps": [
     "At an integer $n$: for every $x$, $|\\Phi(x)|\\le|\\sin(\\pi x)|$, and $|\\sin(\\pi x)|\\to|\\sin(\\pi n)|=0$ as $x\\to n$. By squeezing $\\Phi(x)\\to 0=\\Phi(n)$, so $\\Phi$ is continuous at $n$.",
     "At a non-integer $a$: here $\\sin(\\pi a)\\neq 0$. Rationals near $a$ give $\\Phi$-values near $\\sin(\\pi a)\\neq 0$, while irrationals near $a$ give $0$; the oscillation of $\\Phi$ in every neighbourhood is at least $|\\sin(\\pi a)|>0$, so the limit cannot exist.",
     "Thus $\\Phi$ is discontinuous at every non-integer (a jump-type discontinuity of size $|\\sin(\\pi a)|$) and continuous at every integer.",
     "$\\boxed{\\text{continuity set}=\\mathbb{Z}}$"
    ]
   }
  ],
  "remark": "Replacing a polynomial coefficient with a periodic one (here $\\sin\\pi x$) turns a finite continuity set into an infinite, discrete one. The slogan persists: for $g\\cdot\\mathbf{1}_{\\mathbb{Q}}$ with $g$ continuous, the continuity set is exactly the zero set $g^{-1}(0)$, because density of $\\mathbb{Q}$ and of its complement forces the limit to be both $g(a)$ and $0$."
 },
 {
  "theme": "pathological",
  "themeLabel": "Pathological Functions",
  "title": "The Tangent Parabola Trick",
  "difficulty": 5,
  "task": "Determine",
  "tags": [
   "dirichlet",
   "parabola-line",
   "double-root",
   "one-point-continuity",
   "density"
  ],
  "statement": "Let\n\\[ \\psi(x)=\\begin{cases} x^{2}, & x\\in\\mathbb{Q},\\\\ 2x-1, & x\\notin\\mathbb{Q}. \\end{cases} \\]\nDetermine all points at which $\\psi$ is continuous, and decide whether $\\psi$ is differentiable at any such point.",
  "answer": "$\\psi$ is continuous at exactly one point, $x=1$, and it is differentiable there with $\\psi'(1)=2$.",
  "trap": "Expecting a line and a parabola to cross at two points and hence give two continuity points. Here $x^2=2x-1$ is a perfect square $(x-1)^2=0$: the line is TANGENT to the parabola, so they meet (and $\\psi$ is continuous) at the single point $x=1$. Also tempting but wrong: assuming continuity at a point automatically denies differentiability for such a pathological function.",
  "solutions": [
   {
    "name": "Continuity then differentiability",
    "steps": [
     "Both $\\mathbb{Q}$ and $\\mathbb{Q}^c$ are dense, so as $x\\to a$ the rational sub-sequences force $\\psi(x)\\to a^2$ while the irrational sub-sequences force $\\psi(x)\\to 2a-1$. A limit exists only when these agree, i.e. $a^2=2a-1$.",
     "Solve $a^2-2a+1=0\\Rightarrow(a-1)^2=0\\Rightarrow a=1$ (a double root: the line is tangent to the parabola), so the only candidate is $a=1$, and there $\\psi(1)=1^2=1=2\\cdot1-1$, so $\\psi$ is indeed continuous at $1$.",
     "Differentiability at $1$: note $\\psi(1)=1$, and on rationals $\\dfrac{\\psi(x)-1}{x-1}=\\dfrac{x^2-1}{x-1}=x+1\\to2$, while on irrationals $\\dfrac{\\psi(x)-1}{x-1}=\\dfrac{(2x-1)-1}{x-1}=2$.",
     "Both sub-limits of the difference quotient equal $2$, so $\\psi$ is continuous only at $\\boxed{x=1}$ and differentiable there with $\\psi'(1)=2$."
    ]
   },
   {
    "name": "Squeeze about the tangency",
    "steps": [
     "Write each branch as $\\psi(x)=2x-1+e(x)$, where $e(x)=x^2-(2x-1)=(x-1)^2$ on $\\mathbb{Q}$ and $e(x)=0$ on $\\mathbb{Q}^c$; in all cases $0\\le e(x)\\le(x-1)^2$.",
     "Continuity: $\\psi(x)-\\psi(1)=(2x-2)+e(x)$ with $0\\le e(x)\\le(x-1)^2\\to0$, so $\\psi(x)\\to1=\\psi(1)$ as $x\\to1$. At any $a\\ne1$ the rational and irrational sub-limits $a^2$ and $2a-1$ differ, giving a jump, so $1$ is the sole continuity point.",
     "Difference quotient: $\\dfrac{\\psi(x)-1}{x-1}=2+\\dfrac{e(x)}{x-1}$, and $\\left|\\dfrac{e(x)}{x-1}\\right|\\le\\dfrac{(x-1)^2}{|x-1|}=|x-1|\\to0$.",
     "Hence the derivative exists and equals $2$: $\\boxed{\\text{continuous only at }x=1,\\ \\psi'(1)=2}$."
    ]
   }
  ],
  "remark": "This is the surprise finale: a function continuous at just one point can still be differentiable there. The tangency $(x-1)^2$ makes the error vanish to second order, so the single point of continuity is also a point of differentiability, a striking hybrid of the chapter's themes."
 },
 {
  "theme": "sequential",
  "themeLabel": "Sequential & Composite Continuity",
  "title": "The Oscillator That Refuses to Settle",
  "difficulty": 4,
  "task": "Prove that",
  "tags": [
   "sequential criterion",
   "oscillation",
   "two-sequence test",
   "discontinuity"
  ],
  "statement": "Define $g:\\mathbb{R}\\to\\mathbb{R}$ by \\[ g(x)=\\begin{cases}\\cos\\!\\left(\\dfrac{\\pi}{x}\\right), & x\\neq 0,\\\\[2mm] L, & x=0,\\end{cases} \\] where $L$ is any real constant. Prove that $g$ is discontinuous at $0$ no matter what value $L$ is assigned.",
  "answer": "proved (no choice of $L$ makes $g$ continuous at $0$, since $g(1/(2n))\\to 1$ while $g(1/(2n+1))\\to -1$).",
  "trap": "Trying to 'patch' continuity by computing a single limit (e.g. along $x_n=1/n$, which gives $\\cos(n\\pi)=(-1)^n$ and tempts you to declare 'no limit'): the rigorous disproof needs TWO sequences with DIFFERENT limits, not one inconclusive sequence. A single divergent sequence shows the value oscillates but the clean two-sequence argument is what actually disproves the limit.",
  "solutions": [
   {
    "name": "Two sequences, two limits",
    "steps": [
     "By the sequential criterion, $g$ is continuous at $0$ iff $g(x_n)\\to g(0)=L$ for EVERY sequence $x_n\\to 0$.",
     "Take $x_n=\\dfrac{1}{2n}\\to 0$: then $g(x_n)=\\cos(2n\\pi)=1$ for all $n$, so $g(x_n)\\to 1$.",
     "Take $y_n=\\dfrac{1}{2n+1}\\to 0$: then $g(y_n)=\\cos((2n+1)\\pi)=-1$ for all $n$, so $g(y_n)\\to -1$.",
     "Two sequences converging to $0$ yield image-limits $1$ and $-1$; they cannot both equal $L$. Hence $\\lim_{x\\to 0}g(x)$ does not exist, and $g$ is discontinuous at $0$ for every $L$. $\\blacksquare$"
    ]
   },
   {
    "name": "Negation of the $\\varepsilon$-$\\delta$ definition",
    "steps": [
     "Suppose, for contradiction, $g$ were continuous at $0$ with value $L$. Then for $\\varepsilon=\\tfrac12$ there is $\\delta>0$ with $|g(x)-L|<\\tfrac12$ whenever $0<|x|<\\delta$.",
     "Choose $n$ so large that both $\\tfrac{1}{2n}<\\delta$ and $\\tfrac{1}{2n+1}<\\delta$; this is possible since both shrink to $0$.",
     "Then $|1-L|<\\tfrac12$ and $|-1-L|<\\tfrac12$, so by the triangle inequality $2=|1-(-1)|\\le|1-L|+|L-(-1)|<1$, a contradiction.",
     "Therefore no $L$ makes $g$ continuous at $0$. $\\blacksquare$"
    ]
   }
  ],
  "remark": "Insight: a function can be perfectly defined and finite everywhere yet have no limit at a point. The single sequence $1/n$ is a red herring — it merely oscillates. The decisive tool is producing two sequences whose images converge to provably different numbers; that is the sequential criterion used as a wrecking ball."
 },
 {
  "theme": "sequential",
  "themeLabel": "Sequential & Composite Continuity",
  "title": "Squeezed onto Two Islands",
  "difficulty": 4,
  "task": "Find all",
  "tags": [
   "dirichlet function",
   "sequential criterion",
   "squeeze",
   "continuity set"
  ],
  "statement": "Let $D(x)=1$ if $x\\in\\mathbb{Q}$ and $D(x)=0$ if $x\\notin\\mathbb{Q}$. Define \\[ f(x)=(x^2-4)\\,D(x). \\] Find all points at which $f$ is continuous.",
  "answer": "$f$ is continuous exactly at $x=2$ and $x=-2$.",
  "trap": "Assuming the Dirichlet factor makes $f$ discontinuous EVERYWHERE. The polynomial coefficient $x^2-4$ vanishes at $\\pm2$, and there a squeeze forces continuity even though $D$ is wildly discontinuous: the product of a nowhere-continuous function with something tending to $0$ can still be continuous.",
  "solutions": [
   {
    "name": "Two-sequence disproof off the zeros, squeeze at the zeros",
    "steps": [
     "Fix $a$ with $a^2-4\\neq0$. Because both $\\mathbb{Q}$ and its complement are dense, pick rationals $r_n\\to a$ and irrationals $s_n\\to a$. Then $f(r_n)=(r_n^2-4)\\cdot1\\to a^2-4$ while $f(s_n)=(s_n^2-4)\\cdot0=0\\to0$.",
     "Since $a^2-4\\neq0$, these two subsequential limits differ, so $\\lim_{x\\to a}f(x)$ does not exist. By the sequential criterion $f$ is discontinuous at every such $a$ (an essential discontinuity).",
     "Now let $a\\in\\{2,-2\\}$, so $f(a)=(a^2-4)\\cdot D(a)=0$. For every $x$ we have $|f(x)-f(a)|=|f(x)|=|x^2-4|\\,|D(x)|\\le|x^2-4|$ because $0\\le D(x)\\le1$.",
     "As $x\\to a$ the continuous cofactor gives $|x^2-4|\\to|a^2-4|=0$, so by squeeze $\\lim_{x\\to a}f(x)=0=f(a)$. Hence $f$ is continuous at $\\pm2$ and nowhere else: the continuity set is $\\{2,-2\\}$."
    ]
   },
   {
    "name": "Direct $\\varepsilon$-$\\delta$ at $\\pm2$",
    "steps": [
     "At $a=2$: $f(2)=0$. Factor $x^2-4=(x-2)(x+2)$. If $|x-2|<1$ then $|x+2|<5$, so $|x^2-4|=|x-2|\\,|x+2|<5\\,|x-2|$.",
     "Given $\\varepsilon>0$ choose $\\delta=\\min\\{1,\\varepsilon/5\\}$. Then $|x-2|<\\delta$ gives $|f(x)-0|=|x^2-4|\\,|D(x)|\\le|x^2-4|<5\\,|x-2|<5\\delta\\le\\varepsilon$, proving continuity at $2$; the argument at $-2$ is identical with $|x-2|<5$ replaced by the corresponding bound on $|x-2|$ near $-2$.",
     "Off $\\pm2$, take any $a$ with $a^2-4\\neq0$. Rationals approaching $a$ push $f$ toward $a^2-4$, while irrationals approaching $a$ keep $f=0$; the two image limits $a^2-4$ and $0$ are distinct, so the limit fails to exist and $f$ is discontinuous.",
     "Therefore $f$ is continuous precisely at $x=\\pm2$."
    ]
   }
  ],
  "remark": "Insight: multiplying by the Dirichlet function is not automatically fatal. Continuity is salvaged exactly where the smooth cofactor vanishes, because $0$ times bounded chaos is squeezed to $0$. In general, for a continuous $g$ the continuity set of $g\\cdot D$ is precisely the zero set of $g$."
 },
 {
  "theme": "sequential",
  "themeLabel": "Sequential & Composite Continuity",
  "title": "Two Wrongs Make a Right",
  "difficulty": 4,
  "task": "Classify",
  "tags": [
   "sum of discontinuous",
   "product",
   "sequential criterion",
   "sin(1/x)"
  ],
  "statement": "Define on $\\mathbb{R}$ \\[ f(x)=\\begin{cases}\\sin\\!\\frac1x,&x\\neq0\\\\0,&x=0\\end{cases}\\qquad g(x)=\\begin{cases}-\\sin\\!\\frac1x,&x\\neq0\\\\0,&x=0.\\end{cases} \\] Each of $f,g$ is discontinuous at $0$. Classify the continuity at $0$ of $f+g$ and of $fg$, deciding in each case whether the result is continuous there.",
  "answer": "$f+g\\equiv0$ is continuous at $0$; $fg=-\\sin^2(1/x)$ (with value $0$ at $0$) is discontinuous at $0$.",
  "trap": "Believing that a sum or product of two discontinuous functions must be discontinuous. There is no such rule: the discontinuities of $f$ and $g$ cancel in the sum but reinforce in the product. (Theorems only guarantee continuity when the PARTS are continuous.)",
  "solutions": [
   {
    "name": "Compute the combinations explicitly",
    "steps": [
     "For $x\\neq0$, $(f+g)(x)=\\sin\\frac1x-\\sin\\frac1x=0$, and $(f+g)(0)=0$. So $f+g$ is the zero function, which is continuous everywhere, in particular at $0$.",
     "For $x\\neq0$, $(fg)(x)=-\\sin^2\\frac1x$, and $(fg)(0)=0$.",
     "Test $fg$ with the sequential criterion: let $x_n=\\dfrac{1}{(2n+\\frac12)\\pi}\\to0$, so $\\sin\\frac1{x_n}=\\sin((2n+\\tfrac12)\\pi)=1$ and $(fg)(x_n)=-1\\to-1\\neq0=(fg)(0)$.",
     "Hence $fg$ is discontinuous at $0$. Classification: $f+g$ continuous, $fg$ discontinuous."
    ]
   },
   {
    "name": "Second sequence for the product, and a sanity sequence for the sum",
    "steps": [
     "Sum: any $x_n\\to0$ gives $(f+g)(x_n)=0\\to0=(f+g)(0)$, confirming continuity directly from the sequential criterion.",
     "Product: take $y_n=\\dfrac{1}{n\\pi}\\to0$. Then $\\sin\\frac1{y_n}=\\sin(n\\pi)=0$, so $(fg)(y_n)=0\\to0$ — this sequence is inconclusive (matches the value).",
     "Take instead $x_n=\\dfrac{1}{(2n+\\frac12)\\pi}$ giving $(fg)(x_n)=-1\\to-1$. The two sequences $\\{y_n\\},\\{x_n\\}$ give image limits $0$ and $-1$, so the limit fails to exist.",
     "Therefore $fg$ is discontinuous at $0$ while $f+g$ is continuous there."
    ]
   }
  ],
  "remark": "Insight: continuity of $f+g$, $fg$, $f/g$ is GUARANTEED only when $f$ and $g$ are themselves continuous (and the denominator nonzero). When they are not, anything can happen — the same two discontinuous building blocks give a continuous sum and a discontinuous product."
 },
 {
  "theme": "sequential",
  "themeLabel": "Sequential & Composite Continuity",
  "title": "The Mirror Function",
  "difficulty": 4,
  "task": "Find all",
  "tags": [
   "sequential criterion",
   "rational vs irrational",
   "continuity set",
   "piecewise"
  ],
  "statement": "Define $h:\\mathbb{R}\\to\\mathbb{R}$ by \\[ h(x)=\\begin{cases} x, & x\\in\\mathbb{Q},\\\\ -x, & x\\notin\\mathbb{Q}. \\end{cases} \\] Find all points at which $h$ is continuous.",
  "answer": "$h$ is continuous only at $x=0$.",
  "trap": "Concluding $h$ is continuous on all of $\\mathbb{Q}$ (or all of the irrationals) because 'on each piece it is the continuous function $\\pm x$'. Continuity is a LOCAL property tested against ALL nearby points, not just same-type points; every neighborhood mixes rationals and irrationals, so the two formulas must agree in the limit, forcing $x=-x$.",
  "solutions": [
   {
    "name": "Two-sequence test at a general point",
    "steps": [
     "By density, for any $a$ choose rationals $r_n\\to a$ and irrationals $s_n\\to a$.",
     "Then $h(r_n)=r_n\\to a$ and $h(s_n)=-s_n\\to -a$.",
     "For continuity at $a$ both image-limits must equal $h(a)$, hence we need $a=-a$, i.e. $a=0$.",
     "At $a=0$: $h(0)=0$, and for any $x_n\\to0$, $|h(x_n)|=|x_n|\\to0$, so $h(x_n)\\to0=h(0)$. Thus $h$ is continuous exactly at $0$."
    ]
   },
   {
    "name": "Squeeze at $0$, contradiction elsewhere",
    "steps": [
     "At $0$: $|h(x)|=|x|$ for all $x$, so $-|x|\\le h(x)\\le|x|$; squeezing as $x\\to0$ gives $h(x)\\to0=h(0)$. Continuous at $0$.",
     "At $a\\neq0$: suppose $h$ continuous at $a$. Continuity forces $\\lim_{x\\to a}h(x)=h(a)$ regardless of how $x$ approaches.",
     "Approaching through rationals gives limit $a$; approaching through irrationals gives limit $-a$. These are unequal since $a\\neq0$, contradicting existence of the limit.",
     "Hence the only continuity point is $x=0$."
    ]
   }
  ],
  "remark": "Insight: 'continuous on each piece' is meaningless when the pieces are dense in each other. The mirror function literally reflects irrational inputs; the two formulas reconcile only where $x$ and $-x$ coincide. The continuity set is the fixed-point set of the reflection."
 },
 {
  "theme": "sequential",
  "themeLabel": "Sequential & Composite Continuity",
  "title": "A Continuous Mask over a Broken Floor",
  "difficulty": 4,
  "task": "Determine",
  "tags": [
   "composition",
   "floor function",
   "range avoidance",
   "f-of-g continuity"
  ],
  "statement": "Let $\\lfloor\\cdot\\rfloor$ denote the floor function (discontinuous at every integer). Define $g(x)=\\dfrac12+\\dfrac1\\pi\\arctan x$ and consider\n\\[\nF(x)=\\big\\lfloor g(x)\\big\\rfloor.\n\\]\nDetermine whether $F$ is continuous on all of $\\mathbb{R}$, and prove your claim. Then state precisely which hypothesis lets the composition be continuous despite the outer floor being discontinuous everywhere.",
  "answer": "$F\\equiv0$ on $\\mathbb{R}$, hence continuous everywhere. It works because the range of $g$ is the open interval $(0,1)$, which contains no integer, so $g$ never lands on a discontinuity of $\\lfloor\\cdot\\rfloor$. The relevant hypothesis is that the outer function need only be continuous AT each value $g(x)$, not everywhere.",
  "trap": "Two opposite traps. (1) Declaring $F$ discontinuous because the outer floor is discontinuous at every integer; the composition theorem only requires the outer function to be continuous at the POINTS $g$ actually visits, and those are all non-integers. (2) Asserting $F$ is continuous by a blanket composition-of-nice-functions rule without checking that $g$ avoids the integers; that rule would fail outright if, say, the inner map could reach an integer value.",
  "solutions": [
   {
    "name": "Pin the range, then read off the floor",
    "steps": [
     "Since $\\arctan x\\in\\left(-\\tfrac\\pi2,\\tfrac\\pi2\\right)$ for all real $x$, we get $\\dfrac1\\pi\\arctan x\\in\\left(-\\tfrac12,\\tfrac12\\right)$, hence $g(x)=\\tfrac12+\\dfrac1\\pi\\arctan x\\in(0,1)$. The endpoints $0$ and $1$ are approached as $x\\to-\\infty$ and $x\\to+\\infty$ but never attained.",
     "For every real $x$ we therefore have $0<g(x)<1$, so $\\lfloor g(x)\\rfloor=0$. Thus $F$ is the constant function $0$.",
     "A constant function is continuous on $\\mathbb{R}$, so $F$ is continuous everywhere.",
     "The mechanism: $\\lfloor\\cdot\\rfloor$ is continuous on the open interval $(0,1)$ (where it equals $0$), and $g(\\mathbb{R})\\subseteq(0,1)$, so the outer map is continuous at every value $g$ produces."
    ]
   },
   {
    "name": "Composition theorem with the correct local hypothesis",
    "steps": [
     "Recall the local composition theorem: if $g$ is continuous at $a$ and the outer function $h$ is continuous at the single point $g(a)$, then $h\\circ g$ is continuous at $a$. Only continuity of $h$ AT $g(a)$ is needed, not on all of $\\mathbb{R}$.",
     "Here $g$ is continuous on $\\mathbb{R}$, being the sum of a constant and $\\tfrac1\\pi\\arctan$, both continuous.",
     "Since $g(a)\\in(0,1)$ for every $a$, and $\\lfloor\\cdot\\rfloor$ is continuous at every non-integer, the outer floor is continuous at $g(a)$.",
     "Both hypotheses hold at every $a$, so $F=\\lfloor g\\rfloor$ is continuous on all of $\\mathbb{R}$ (and indeed identically $0$)."
    ]
   }
  ],
  "remark": "Insight: composition continuity is a LOCAL contract. The outer function only has to be continuous where the inner function actually delivers values. A function with a discontinuity at every integer can still feed a perfectly continuous composite if its inputs are quarantined inside an integer-free gap. Range control is the hidden hero. Contrast this with $h(x)=\\lfloor x+\\tfrac12\\rfloor$, whose inner map sweeps across integers and so is genuinely discontinuous: here the image $(0,1)$ is the entire reason the broken floor is masked."
 },
 {
  "theme": "sequential",
  "themeLabel": "Sequential & Composite Continuity",
  "title": "Reverse-Engineering the Inner Map",
  "difficulty": 4,
  "task": "Find a,b",
  "tags": [
   "composition",
   "deduce inner function",
   "bijection",
   "f-of-g"
  ],
  "statement": "Suppose $f(t)=2t+3$ and $(f\\circ g)(x)=2x^2-2x+5$ for all real $x$. (a) Find the explicit formula for $g(x)$. (b) Prove that $g$ is continuous on $\\mathbb{R}$, and identify the value of the ordered pair $(a,b)=(g(0),\\,g(1))$.",
  "answer": "$g(x)=x^2-x+1$; it is a polynomial, hence continuous on $\\mathbb{R}$; and $(a,b)=(g(0),g(1))=(1,1)$.",
  "trap": "Trying to invert the composition by informally 'cancelling' $f$, or assuming $g$ inherits continuity automatically from $f\\circ g$ being continuous. The continuity of $g$ does NOT follow from $f\\circ g$ being continuous on its own: if $f$ were not injective this can fail. For instance, with $f_0(u)=u^2$ and the discontinuous $g_0(x)=\\operatorname{sgn}(x)+[x=0]$ (i.e. $+1$ for $x\\ge 0$, $-1$ for $x<0$), the composite $f_0(g_0(x))=1$ is continuous while $g_0$ jumps at $0$. The clean route here is that the given $f$ is a continuous bijection of $\\mathbb{R}$ with continuous inverse, so $g=f^{-1}\\circ(f\\circ g)$; invertibility, not mere continuity of the composite, is what licenses stripping off $f$.",
  "solutions": [
   {
    "name": "Solve the linear relation",
    "steps": [
     "Since $f(t)=2t+3$, substituting $t=g(x)$ gives $f(g(x))=2g(x)+3$.",
     "Set $2g(x)+3=2x^2-2x+5$, so $2g(x)=2x^2-2x+2$ and hence $g(x)=x^2-x+1$.",
     "$g$ is a polynomial, so it is continuous on all of $\\mathbb{R}$.",
     "Evaluate: $g(0)=0-0+1=1$ and $g(1)=1-1+1=1$, so $(a,b)=(1,1)$."
    ]
   },
   {
    "name": "Use the inverse of $f$",
    "steps": [
     "$f(t)=2t+3$ is a bijection $\\mathbb{R}\\to\\mathbb{R}$ with inverse $f^{-1}(s)=\\dfrac{s-3}{2}$, which is itself continuous.",
     "Because $f$ is invertible, $g=f^{-1}\\circ(f\\circ g)$, so $g(x)=\\dfrac{(2x^2-2x+5)-3}{2}=\\dfrac{2x^2-2x+2}{2}=x^2-x+1$.",
     "As a composition of the continuous $f^{-1}$ with the continuous composite $f\\circ g$, $g$ is continuous on $\\mathbb{R}$.",
     "Therefore $g(0)=1$ and $g(1)=1$, giving $(a,b)=(1,1)$."
    ]
   }
  ],
  "remark": "Insight: knowing $f\\circ g$ is continuous tells you nothing about $g$ in general -- a non-injective $f$ can wash out a discontinuity (e.g. $f(u)=u^2$ kills the jump of $\\operatorname{sgn}$). But when $f$ is a continuous bijection with continuous inverse, you may legitimately strip it off via $g=f^{-1}\\circ(f\\circ g)$. Invertibility, not mere continuity, is what licenses the cancellation."
 },
 {
  "theme": "sequential",
  "themeLabel": "Sequential & Composite Continuity",
  "title": "A Limit That Forgets to Stay Smooth",
  "difficulty": 4,
  "task": "Determine",
  "tags": [
   "pointwise limit",
   "continuity not preserved",
   "sequence of functions",
   "jump"
  ],
  "statement": "For each integer $n\\ge1$ let $f_n:[0,\\infty)\\to\\mathbb{R}$ be $f_n(x)=\\dfrac{x^n}{1+x^n}$, a continuous function. Determine the pointwise limit function $f(x)=\\lim_{n\\to\\infty}f_n(x)$ on $[0,\\infty)$, and determine all points where $f$ is continuous. Conclude whether a pointwise limit of continuous functions must be continuous.",
  "answer": "$f(x)=0$ for $0\\le x<1$, $f(1)=\\tfrac12$, $f(x)=1$ for $x>1$; $f$ is continuous on $[0,1)\\cup(1,\\infty)$ and discontinuous at $x=1$. Hence a pointwise limit of continuous functions need NOT be continuous.",
  "trap": "Assuming $f$ is continuous because every $f_n$ is continuous (and each is even infinitely smooth). Pointwise convergence does not transmit continuity; the limit develops a jump at $x=1$. Only uniform convergence would preserve continuity, and convergence here is non-uniform near $x=1$.",
  "solutions": [
   {
    "name": "Evaluate the limit by cases",
    "steps": [
     "If $0\\le x<1$: $x^n\\to0$, so $f_n(x)=\\dfrac{x^n}{1+x^n}\\to\\dfrac{0}{1+0}=0$.",
     "If $x=1$: $f_n(1)=\\dfrac{1}{1+1}=\\dfrac12$ for all $n$, so the limit is $\\tfrac12$.",
     "If $x>1$: write $f_n(x)=\\dfrac{1}{x^{-n}+1}$; since $x^{-n}\\to0$, the limit is $\\dfrac{1}{0+1}=1$.",
     "So $f$ takes values $0,\\tfrac12,1$ on $[0,1),\\{1\\},(1,\\infty)$. Each branch is locally constant hence continuous; the left limit $0$, value $\\tfrac12$, right limit $1$ at $x=1$ all differ, so $f$ is discontinuous exactly at $1$."
    ]
   },
   {
    "name": "Two-sequence confirmation of the jump",
    "steps": [
     "Continuous $f_n$: each $f_n$ is a quotient of polynomials with denominator $1+x^n\\ge1>0$, so $f_n$ is continuous on $[0,\\infty)$.",
     "Apply the sequential criterion to $f$ at $x=1$: take $x_k=1-\\tfrac1k\\to1$, then $f(x_k)=0\\to0$.",
     "Take $y_k=1+\\tfrac1k\\to1$, then $f(y_k)=1\\to1$. The two image-limits $0\\neq1$ show $\\lim_{x\\to1}f(x)$ does not exist.",
     "Hence $f$ is discontinuous at $1$ though each $f_n$ is continuous — pointwise limits do not preserve continuity."
    ]
   }
  ],
  "remark": "Insight: the family $f_n$ is a 'smooth staircase' that sharpens into a step. The continuity of the limit is broken precisely where convergence is non-uniform (near $x=1$): along $x_n=2^{-1/n}\\to1^-$ one has $f_n(x_n)=\\tfrac13$ while $f(x_n)=0$, so $\\sup_x|f_n-f|\\ge\\tfrac13\\not\\to0$. This is the canonical warning: $\\lim_n$ and $\\lim_x$ cannot be freely interchanged without uniformity."
 },
 {
  "theme": "sequential",
  "themeLabel": "Sequential & Composite Continuity",
  "title": "Cancelling Two Catastrophes by Composition",
  "difficulty": 4,
  "task": "Find all",
  "tags": [
   "composition trap",
   "dirichlet function",
   "f-of-g continuity",
   "nowhere continuous inner"
  ],
  "statement": "Let $g(x)=1$ if $x\\in\\mathbb{Q}$ and $g(x)=0$ if $x\\notin\\mathbb{Q}$ (the Dirichlet function, discontinuous at every point). Let $f(t)=t^2-t$. (a) Show $f\\circ g$ is continuous on all of $\\mathbb{R}$. (b) For the family $f_c(t)=t^2-t+c$, find all real constants $c$ for which $f_c\\circ g$ is continuous on $\\mathbb{R}$.",
  "answer": "(a) $f\\circ g\\equiv0$, continuous everywhere. (b) Every real $c$ works: $f_c\\circ g\\equiv c$ is constant, hence continuous for all $c\\in\\mathbb{R}$.",
  "trap": "Concluding $f\\circ g$ is discontinuous because $g$ is nowhere continuous (the composition theorem requires $g$ continuous, which fails everywhere). But that theorem gives only a SUFFICIENT condition; its failure does not force discontinuity. Here $f$ takes the SAME value on both outputs $0$ and $1$ of $g$, so the composite is constant.",
  "solutions": [
   {
    "name": "Track the two possible values",
    "steps": [
     "$g$ outputs only $0$ (on irrationals) or $1$ (on rationals).",
     "Compute $f$ on these: $f(0)=0^2-0=0$ and $f(1)=1^2-1=0$. Both give $0$.",
     "Hence $(f\\circ g)(x)=0$ for every $x$, a constant, so $f\\circ g$ is continuous on $\\mathbb{R}$.",
     "For $f_c$: $f_c(0)=c$ and $f_c(1)=1-1+c=c$, equal for all $c$. So $f_c\\circ g\\equiv c$, constant and continuous for every real $c$. Answer: all $c\\in\\mathbb{R}$."
    ]
   },
   {
    "name": "Sequential criterion on the composite",
    "steps": [
     "Fix any $a$ and any sequence $x_n\\to a$. Each $g(x_n)\\in\\{0,1\\}$ depending on rationality, so $f(g(x_n))\\in\\{f(0),f(1)\\}=\\{0,0\\}=\\{0\\}$.",
     "Thus $f(g(x_n))=0$ for all $n$, so $f(g(x_n))\\to0=f(g(a))$, verifying continuity at $a$ directly.",
     "For $f_c$: $f_c(g(x_n))\\in\\{f_c(0),f_c(1)\\}=\\{c\\}$, so $f_c(g(x_n))\\to c=f_c(g(a))$ for every $a$ and every $c$.",
     "Hence $f_c\\circ g$ is continuous for all $c$, regardless of the total discontinuity of $g$."
    ]
   }
  ],
  "remark": "Insight: the composition theorem is one-directional. A nowhere-continuous inner function can still produce a continuous composite if the outer function is constant on the inner function's range. Here $0$ and $1$ are roots of $t^2-t$, so $f$ flattens both Dirichlet values to the same height — and an additive constant just slides the plateau."
 },
 {
  "theme": "sequential",
  "themeLabel": "Sequential & Composite Continuity",
  "title": "The Map That Tears Cauchy Sequences Apart",
  "difficulty": 5,
  "task": "Prove that",
  "tags": [
   "cauchy sequences",
   "uniform continuity",
   "preservation",
   "counterexample"
  ],
  "statement": "A function $\\varphi$ defined on a set $S\\subseteq\\mathbb{R}$ is said to PRESERVE CAUCHY SEQUENCES if for every Cauchy sequence $(x_n)$ in $S$, the image sequence $(\\varphi(x_n))$ is Cauchy. Consider the open interval $S=(0,1)$. (a) Prove that $u(x)=1/x$ does NOT preserve Cauchy sequences on $(0,1)$. (b) Prove that $v(x)=x^2$ DOES preserve Cauchy sequences on $(0,1)$. State the general principle distinguishing the two.",
  "answer": "Proved. (a) $u(x)=1/x$ fails: the Cauchy sequence $x_n=1/(n+1)\\in(0,1)$ is mapped to $u(x_n)=n+1$, which is unbounded and hence not Cauchy. (b) $v(x)=x^2$ succeeds: it is Lipschitz with constant $2$ on $(0,1)$ (equivalently, it extends to a continuous function on the compact $[0,1]$, hence is uniformly continuous), so it sends Cauchy sequences to Cauchy sequences. General principle: a function preserves Cauchy sequences on $S$ if and only if it is uniformly continuous on $S$; $v$ is uniformly continuous on $(0,1)$ while $u$, being unbounded near the deleted endpoint $0$, is not.",
  "trap": "Assuming that mere continuity (which both $u$ and $v$ have on $(0,1)$) is enough to preserve Cauchy sequences. It is not. Cauchy-preservation is equivalent to UNIFORM continuity, and $u(x)=1/x$ is continuous but not uniformly continuous on $(0,1)$. Pointwise continuity transports limits that actually live inside the domain, but it can shred a Cauchy sequence whose limit has been deleted from the domain (here, the endpoint $0$).",
  "solutions": [
   {
    "name": "Explicit counterexample and a uniform-continuity argument",
    "steps": [
     "(a) Let $x_n=\\dfrac{1}{n+1}$ for $n\\ge 1$, so every term lies strictly in $(0,1)$. The sequence is Cauchy: for $m,n\\ge N$, $|x_m-x_n|\\le \\frac{1}{m+1}+\\frac{1}{n+1}\\le \\frac{2}{N+1}\\to 0$. (It converges to $0$ in $\\mathbb{R}$, but $0\\notin(0,1)$.)",
     "(a) Now $u(x_n)=n+1$, so $|u(x_{2n+1})-u(x_n)|=|(2n+2)-(n+1)|=n+1\\to\\infty$. An unbounded sequence cannot be Cauchy, so $(u(x_n))$ is not Cauchy. Hence $u$ does NOT preserve Cauchy sequences.",
     "(b) The function $\\tilde v(x)=x^2$ is continuous on the compact interval $[0,1]$, and a continuous function on a compact set is uniformly continuous; restricting to $(0,1)$ shows $v$ is uniformly continuous on $(0,1)$.",
     "(b) Uniform continuity preserves Cauchy sequences: given $\\varepsilon>0$, pick $\\delta>0$ with $|x-y|<\\delta\\Rightarrow|v(x)-v(y)|<\\varepsilon$. If $(x_n)$ is Cauchy, choose $N$ with $|x_m-x_n|<\\delta$ for all $m,n\\ge N$; then $|v(x_m)-v(x_n)|<\\varepsilon$ for $m,n\\ge N$, so $(v(x_n))$ is Cauchy.",
     "Principle: on a set $S$, $\\varphi$ preserves Cauchy sequences $\\iff$ $\\varphi$ is uniformly continuous on $S$. Here $u$ is not uniformly continuous (it is unbounded near the missing endpoint $0$) while $v$ is."
    ]
   },
   {
    "name": "Direct Cauchy estimate for $v$, oscillation argument for $u$",
    "steps": [
     "(b) For all $x,y\\in(0,1)$, $|v(x)-v(y)|=|x^2-y^2|=|x+y|\\,|x-y|\\le 2|x-y|$, because $x+y<2$. Thus $v$ is Lipschitz on $(0,1)$ with constant $2$.",
     "(b) If $(x_n)$ is Cauchy, then $|v(x_m)-v(x_n)|\\le 2|x_m-x_n|\\to 0$, so $(v(x_n))$ is Cauchy. Hence $v$ preserves Cauchy sequences.",
     "(a) For $u$, take $x_n=\\dfrac{1}{n+1}\\in(0,1)$, which is Cauchy. Then $u(x_n)=n+1$ is unbounded, and every Cauchy sequence is bounded (Cauchy $\\Rightarrow$ bounded); the contrapositive shows $(u(x_n))$ is not Cauchy.",
     "(a) Equivalently, $u$ fails uniform continuity directly: taking $x_n=\\frac1n$ and $y_n=\\frac1{2n}$ in $(0,1)$ gives $|x_n-y_n|=\\frac{1}{2n}\\to 0$ while $|u(x_n)-u(y_n)|=|n-2n|=n\\to\\infty$, so no single $\\delta$ can work.",
     "Conclusion: $v$ preserves Cauchy sequences and $u$ does not; the obstruction for $u$ is the absence of any Lipschitz/uniform bound near the deleted endpoint $0$. $\\blacksquare$"
    ]
   }
  ],
  "remark": "Convergent and Cauchy coincide in the complete space $\\mathbb{R}$, but on a non-closed domain like $(0,1)$ a Cauchy sequence may chase a limit that has been deleted from the domain. Continuous functions faithfully transport limits that exist inside the domain; only uniformly continuous functions also honor these phantom boundary limits, which is exactly what Cauchy-preservation demands. Equivalently, $\\varphi$ preserves Cauchy sequences on $S$ iff $\\varphi$ extends to a continuous function on the completion $\\overline{S}$, i.e. iff $\\varphi$ is uniformly continuous on $S$."
 },
 {
  "theme": "sequential",
  "themeLabel": "Sequential & Composite Continuity",
  "title": "Passing the Limit Through the Square Root",
  "difficulty": 5,
  "task": "Evaluate",
  "tags": [
   "recursive sequence",
   "continuity passes limit",
   "fixed point",
   "monotone bounded"
  ],
  "statement": "A sequence is defined by $a_1=\\dfrac12$ and $a_{n+1}=\\sqrt{2+a_n}$ for $n\\ge1$. (a) Prove the sequence converges. (b) Evaluate its limit, justifying carefully the step where continuity of $\\sqrt{2+x}$ is used to pass the limit inside.",
  "answer": "The sequence converges to $L=2$.",
  "trap": "Writing $L=\\sqrt{2+L}$ by 'taking limits of both sides' WITHOUT first proving the limit exists and WITHOUT invoking continuity. The identity $\\lim_n\\sqrt{2+a_n}=\\sqrt{2+\\lim_n a_n}$ is legitimate only because $\\sqrt{2+x}$ is continuous at the limit point — and only after convergence is established (otherwise $L$ is undefined). Skipping the existence proof or the continuity justification is the seductive error.",
  "solutions": [
   {
    "name": "Monotone bounded, then continuity to solve the fixed point",
    "steps": [
     "Boundedness above by $2$: $a_1=\\tfrac12<2$, and if $a_n<2$ then $a_{n+1}=\\sqrt{2+a_n}<\\sqrt{2+2}=2$. By induction $a_n<2$ for all $n$.",
     "Monotone increasing: $a_{n+1}-a_n=\\sqrt{2+a_n}-a_n$; since for $0\\le a_n<2$ one has $\\sqrt{2+a_n}>a_n$ (square both nonnegative sides: $2+a_n>a_n^2\\iff a_n^2-a_n-2<0\\iff(a_n-2)(a_n+1)<0$, true for $a_n<2$). So $(a_n)$ is strictly increasing and bounded above, hence convergent to some $L$ with $L\\le2$.",
     "Pass the limit using continuity: $a_{n+1}=\\sqrt{2+a_n}$. The function $\\phi(x)=\\sqrt{2+x}$ is continuous at $x=L\\ge\\tfrac12$, so by the sequential criterion $\\lim_n\\phi(a_n)=\\phi(\\lim_n a_n)=\\phi(L)=\\sqrt{2+L}$. Also $\\lim_n a_{n+1}=L$. Hence $L=\\sqrt{2+L}$.",
     "Solve: $L^2=2+L\\Rightarrow L^2-L-2=0\\Rightarrow(L-2)(L+1)=0$. Since $L\\ge a_1>0$, $L=2$."
    ]
   },
   {
    "name": "Contraction-style convergence and the same fixed-point equation",
    "steps": [
     "The map $\\phi(x)=\\sqrt{2+x}$ on $[0,2]$ has $\\phi'(x)=\\dfrac{1}{2\\sqrt{2+x}}\\le\\dfrac{1}{2\\sqrt2}<1$, so $\\phi$ is a contraction with constant $k=\\tfrac{1}{2\\sqrt2}$ on $[0,2]$, and $\\phi([0,2])\\subseteq[\\sqrt2,2]\\subseteq[0,2]$.",
     "By the contraction property, $|a_{n+1}-a_n|=|\\phi(a_n)-\\phi(a_{n-1})|\\le k|a_n-a_{n-1}|$, so distances shrink geometrically and $(a_n)$ is Cauchy, hence convergent to some $L\\in[0,2]$.",
     "Because $\\phi$ is continuous at $L$, take limits in $a_{n+1}=\\phi(a_n)$ to get $L=\\phi(L)=\\sqrt{2+L}$ (continuity is what lets the limit move inside $\\phi$).",
     "Then $L^2-L-2=0$ gives $L=2$ (rejecting $L=-1$ as the sequence is positive). $\\boxed{L=2}$."
    ]
   }
  ],
  "remark": "Insight: the elegant 'set $L=\\phi(L)$' move is not algebra — it is the sequential criterion in disguise. It is valid in two steps: first PROVE convergence (monotone-bounded or contraction), then INVOKE continuity of $\\phi$ at the limit to slide $\\lim$ through. Both halves are mandatory; the continuity of $\\sqrt{2+x}$ is the engine that makes the fixed-point equation legitimate."
 },
 {
  "theme": "parametric",
  "themeLabel": "Parametric Continuity",
  "title": "The Vanishing Denominator",
  "difficulty": 3,
  "task": "Determine",
  "tags": [
   "single-join",
   "removable-form",
   "one-sided-limit",
   "two-piece"
  ],
  "statement": "Let $a$ be a real constant and define\n\\[ f(x)=\\begin{cases} \\dfrac{x^{2}-9}{x-3}, & x<3,\\\\[2ex] a x+1, & x\\ge 3. \\end{cases} \\]\nDetermine the value of $a$ for which $f$ is continuous at $x=3$.",
  "answer": "$a=\\dfrac{5}{3}$.",
  "trap": "Plugging $x=3$ into $\\frac{x^2-9}{x-3}$ gives $\\frac00$ and tempts you to declare the left side undefined and hence $f$ discontinuous regardless of $a$. But continuity depends on the LIMIT, not the (nonexistent) value: the left limit is the finite number $6$, so a suitable $a$ exists.",
  "solutions": [
   {
    "name": "Factor and match limits",
    "steps": [
     "For $x<3$, $\\dfrac{x^2-9}{x-3}=\\dfrac{(x-3)(x+3)}{x-3}=x+3$.",
     "Left limit: $\\lim_{x\\to3^-}(x+3)=6$.",
     "Right value/limit: $f(3)=\\lim_{x\\to3^+}(ax+1)=3a+1$ (this piece is continuous and defined at $3$).",
     "Continuity requires $3a+1=6$, so $a=\\boxed{\\tfrac{5}{3}}$."
    ]
   },
   {
    "name": "L'Hopital sanity check",
    "steps": [
     "The left piece is $\\frac{0}{0}$ at $3$; differentiating top and bottom gives $\\lim_{x\\to3^-}\\frac{2x}{1}=6$.",
     "Set the polynomial piece equal at the join: $3a+1=6$.",
     "Solve: $a=\\boxed{\\tfrac{5}{3}}$."
    ]
   }
  ],
  "remark": "Insight: a removable singularity in one piece is no obstacle to continuity. You match the limit of the broken piece to the value of the good piece."
 },
 {
  "theme": "parametric",
  "themeLabel": "Parametric Continuity",
  "title": "Filling the Hole",
  "difficulty": 3,
  "task": "Find a,b",
  "tags": [
   "removable",
   "redefinition",
   "sine-ratio",
   "value-at-point"
  ],
  "statement": "The function $g(x)=\\dfrac{\\sin 5x}{\\sin 3x}$ is undefined at $x=0$. Suppose we redefine $g(0):=c$ to make $g$ continuous at the origin, and we write that removable value as a reduced fraction $\\dfrac{p}{q}$. Find $c$ (equivalently, find $p$ and $q$).",
  "answer": "$c=\\dfrac{5}{3}$ (so $p=5,\\ q=3$).",
  "trap": "Substituting $x=0$ to get $\\dfrac{\\sin(5\\cdot 0)}{\\sin(3\\cdot 0)}=\\dfrac{0}{0}=1$, i.e. assuming the ratio is $1$ because numerator and denominator both vanish. The two infinitesimals vanish at DIFFERENT rates; the limit is the ratio of those rates, $5/3$, not $1$.",
  "solutions": [
   {
    "name": "Standard limit scaling",
    "steps": [
     "For continuity we need $c=\\displaystyle\\lim_{x\\to0}\\dfrac{\\sin 5x}{\\sin 3x}$.",
     "Rewrite $\\dfrac{\\sin 5x}{\\sin 3x}=\\dfrac{\\sin 5x}{5x}\\cdot\\dfrac{3x}{\\sin 3x}\\cdot\\dfrac{5x}{3x}$.",
     "As $x\\to0$, $\\dfrac{\\sin 5x}{5x}\\to1$ and $\\dfrac{3x}{\\sin 3x}\\to1$, while $\\dfrac{5x}{3x}=\\dfrac53$ is constant.",
     "Hence the limit is $\\dfrac53$, so define $g(0)=c=\\boxed{\\tfrac{5}{3}}$ to remove the discontinuity."
    ]
   },
   {
    "name": "Taylor expansion",
    "steps": [
     "$\\sin 5x = 5x-\\dfrac{(5x)^3}{6}+\\cdots$ and $\\sin 3x = 3x-\\dfrac{(3x)^3}{6}+\\cdots$.",
     "So $\\dfrac{\\sin 5x}{\\sin 3x}=\\dfrac{5x\\,(1+O(x^2))}{3x\\,(1+O(x^2))}=\\dfrac{5}{3}\\,(1+O(x^2))$.",
     "Letting $x\\to0$ kills the $O(x^2)$ terms, giving $c=\\boxed{\\tfrac{5}{3}}$."
    ]
   },
   {
    "name": "L'Hopital's rule",
    "steps": [
     "Both $\\sin 5x\\to0$ and $\\sin 3x\\to0$ as $x\\to0$, an indeterminate $\\tfrac00$ form.",
     "Differentiate top and bottom: $\\dfrac{d}{dx}\\sin 5x=5\\cos 5x$, $\\dfrac{d}{dx}\\sin 3x=3\\cos 3x$.",
     "The limit equals $\\displaystyle\\lim_{x\\to0}\\dfrac{5\\cos 5x}{3\\cos 3x}=\\dfrac{5\\cdot1}{3\\cdot1}=\\boxed{\\tfrac{5}{3}}=c$."
    ]
   }
  ],
  "remark": "Insight: $\\tfrac00$ is not a number but an instruction to compare growth rates. Since $\\sin 5x$ and $\\sin 3x$ are both first-order zeros at the origin, the ratio approaches the ratio of their leading coefficients, $5/3$. The single value $c=5/3$ plugs the hole, turning a removable discontinuity into a continuous function; any other value would leave a jump-free but discontinuous point."
 },
 {
  "theme": "parametric",
  "themeLabel": "Parametric Continuity",
  "title": "Bridge Between Two Curves",
  "difficulty": 4,
  "task": "Find a,b",
  "tags": [
   "two-joins",
   "two-constants",
   "exponential-glue",
   "three-piece"
  ],
  "statement": "Two constants $a,b$ are to be chosen so that\n\\[ f(x)=\\begin{cases} 2^{x}, & x\\le 1,\\\\[1ex] a x+b, & 1<x<2,\\\\[1ex] \\dfrac{8}{x}, & x\\ge 2, \\end{cases} \\]\nis continuous on all of $\\mathbb{R}$. Find $a$ and $b$.",
  "answer": "$a=2,\\ b=0$.",
  "trap": "Equating the middle piece's value to the outer pieces' values at the same $x$ while choosing the wrong side of each join, e.g. pairing the value $2^1=2$ (forced at $x=1$) with the line evaluated at $x=2$, and pairing $8/2=4$ (forced at $x=2$) with the line at $x=1$. That yields $2a+b=2$ and $a+b=4$, hence $a=-2,\\ b=6$, which is wrong. Each join must compare the line to the piece that actually owns the boundary point, and from the correct side.",
  "solutions": [
   {
    "name": "Match both joins",
    "steps": [
     "At $x=1$: the left piece owns the point, so $f(1)=2^{1}=2$; the line approaches $a(1)+b$ as $x\\to1^{+}$. Continuity forces $a+b=2$.",
     "At $x=2$: the right piece owns the point, so $f(2)=8/2=4$; the line approaches $a(2)+b$ as $x\\to2^{-}$. Continuity forces $2a+b=4$.",
     "Subtract the first from the second: $(2a+b)-(a+b)=4-2\\Rightarrow a=2$.",
     "Back-substitute into $a+b=2$: $b=2-a=0$. So $a=\\boxed{2},\\ b=\\boxed{0}$."
    ]
   },
   {
    "name": "Linear interpolation (secant) view",
    "steps": [
     "The middle line must connect to the outer curves continuously, so it must pass through the endpoint values $(1,2)$ and $(2,4)$ forced by the outer pieces.",
     "A line through two points has slope $a=\\dfrac{4-2}{2-1}=2$.",
     "Using point $(1,2)$: $y-2=2(x-1)$, so at $x=0$ the intercept is $b=2-2\\cdot1=0$.",
     "Hence $a=\\boxed{2},\\ b=\\boxed{0}$, and one checks both joins close exactly: $2(1)+0=2$ and $2(2)+0=4$."
    ]
   }
  ],
  "remark": "Insight: with two joins and two unknowns the line is uniquely the secant through the two forced endpoints $(1,2)$ and $(2,4)$; continuity becomes 'connect the dots.' Note the outer pieces conveniently agree at the endpoints anyway $\\bigl(2^1=2,\\ 8/2=4\\bigr)$, so the bridge exists and is unique."
 },
 {
  "theme": "parametric",
  "themeLabel": "Parametric Continuity",
  "title": "Tuning the Cosine",
  "difficulty": 4,
  "task": "Find all",
  "tags": [
   "trig-glue",
   "parameter-inside",
   "positive-root",
   "removable"
  ],
  "statement": "Let $k>0$ and define\n\\[ h(x)=\\begin{cases} \\dfrac{1-\\cos(kx)}{x^{2}}, & x\\ne 0,\\\\[2ex] 8, & x=0. \\end{cases} \\]\nFind all values of $k>0$ for which $h$ is continuous at $x=0$.",
  "answer": "$k=4$.",
  "trap": "Substituting $x=0$ to get $\\dfrac{1-\\cos 0}{0}=\\dfrac00$ and guessing the limit is $0$ (because the numerator $\\to0$) or $\\infty$ (because the denominator $\\to0$). The numerator and denominator are BOTH of second order in $x$, so the indeterminate form resolves to the finite value $k^2/2$ — neither $0$ nor $\\infty$.",
  "solutions": [
   {
    "name": "Half-angle identity",
    "steps": [
     "Continuity at $x=0$ means $\\displaystyle\\lim_{x\\to0}h(x)=h(0)=8$, so we must evaluate $\\displaystyle\\lim_{x\\to0}\\dfrac{1-\\cos(kx)}{x^2}$.",
     "Use the half-angle identity $1-\\cos(kx)=2\\sin^2\\!\\big(\\tfrac{kx}{2}\\big)$.",
     "Then $\\dfrac{1-\\cos(kx)}{x^2}=2\\cdot\\dfrac{\\sin^2(kx/2)}{x^2}=\\dfrac{k^2}{2}\\left(\\dfrac{\\sin(kx/2)}{kx/2}\\right)^2$.",
     "As $x\\to0$ the argument $kx/2\\to0$, so the bracket $\\to1$ and the limit equals $\\dfrac{k^2}{2}$. (The expression is even in $x$, so the left and right limits agree.)",
     "Set $\\dfrac{k^2}{2}=8\\Rightarrow k^2=16$; since $k>0$, $k=\\boxed{4}$."
    ]
   },
   {
    "name": "Taylor expansion",
    "steps": [
     "Expand the cosine about $0$: $\\cos(kx)=1-\\dfrac{(kx)^2}{2}+\\dfrac{(kx)^4}{24}-\\cdots$, so $1-\\cos(kx)=\\dfrac{k^2x^2}{2}+O(x^4)$.",
     "Divide by $x^2$: $\\dfrac{1-\\cos(kx)}{x^2}=\\dfrac{k^2}{2}+O(x^2)\\to\\dfrac{k^2}{2}$ as $x\\to0$.",
     "For continuity this limit must equal the assigned value $h(0)=8$: $\\dfrac{k^2}{2}=8$, i.e. $k^2=16$.",
     "The constraint $k>0$ forces $k=\\boxed{4}$."
    ]
   },
   {
    "name": "L'Hopital (twice)",
    "steps": [
     "Both numerator and denominator of $\\dfrac{1-\\cos(kx)}{x^2}$ tend to $0$, a $\\tfrac00$ form, so apply L'Hopital: $\\displaystyle\\lim_{x\\to0}\\dfrac{k\\sin(kx)}{2x}$.",
     "This is again $\\tfrac00$; differentiate once more: $\\displaystyle\\lim_{x\\to0}\\dfrac{k^2\\cos(kx)}{2}=\\dfrac{k^2}{2}$.",
     "Continuity requires $\\dfrac{k^2}{2}=8\\Rightarrow k^2=16$, and with $k>0$ we get $k=\\boxed{4}$."
    ]
   }
  ],
  "remark": "Insight: the domain restriction $k>0$ is doing real work — it discards the spurious root $k=-4$ of $k^2=16$. Note also that $h$ is even, so the one-sided limits automatically agree; the only thing that can break continuity here is a value mismatch, never a jump. Always honor stated parameter constraints."
 },
 {
  "theme": "parametric",
  "themeLabel": "Parametric Continuity",
  "title": "Where Exponential Meets Radical",
  "difficulty": 4,
  "task": "Find a,b",
  "tags": [
   "exponential-glue",
   "radical-glue",
   "single-join",
   "two-constants"
  ],
  "statement": "Determine constants $a,b$ so that\n\\[ f(x)=\\begin{cases} \\dfrac{e^{a x}-1}{x}, & x<0,\\\\[2ex] b, & x=0,\\\\[2ex] \\dfrac{\\sqrt{1+x}-1}{x}, & x>0, \\end{cases} \\]\nis continuous at $x=0$. Find $a$ and $b$.",
  "answer": "$a=\\dfrac12,\\ b=\\dfrac12$.",
  "trap": "Checking only ONE side — e.g. computing the right limit $\\tfrac12$, setting $b=\\tfrac12$, and stopping. Continuity at $0$ also pins the LEFT limit (which equals $a$) to that same value, so $a$ is not free.",
  "solutions": [
   {
    "name": "Compute both one-sided limits",
    "steps": [
     "Right limit: rationalize, $\\dfrac{\\sqrt{1+x}-1}{x}=\\dfrac{1}{\\sqrt{1+x}+1}\\to\\dfrac12$ as $x\\to0^+$.",
     "Left limit: $\\dfrac{e^{ax}-1}{x}=a\\cdot\\dfrac{e^{ax}-1}{ax}\\to a\\cdot1=a$ as $x\\to0^-$.",
     "For the two-sided limit to exist: $a=\\tfrac12$.",
     "For continuity the common limit must equal $f(0)=b$, so $b=\\tfrac12$. Thus $a=\\boxed{\\tfrac12},\\,b=\\boxed{\\tfrac12}$."
    ]
   },
   {
    "name": "Taylor expansions",
    "steps": [
     "$e^{ax}-1=ax+O(x^2)\\Rightarrow \\dfrac{e^{ax}-1}{x}\\to a$.",
     "$\\sqrt{1+x}=1+\\tfrac{x}{2}+O(x^2)\\Rightarrow \\dfrac{\\sqrt{1+x}-1}{x}\\to\\tfrac12$.",
     "Continuity forces $a=\\tfrac12$ (left = right) and $b=\\tfrac12$ (value = limit).",
     "Answer: $a=\\boxed{\\tfrac12},\\,b=\\boxed{\\tfrac12}$."
    ]
   }
  ],
  "remark": "Insight: a single join with three pieces imposes TWO equations — left=right and limit=value. One free-looking constant is actually forced."
 },
 {
  "theme": "parametric",
  "themeLabel": "Parametric Continuity",
  "title": "The Parameter That Moves the Seam",
  "difficulty": 5,
  "task": "Find the number of",
  "tags": [
   "movable-join",
   "classification",
   "perfect-square",
   "everywhere-continuous"
  ],
  "statement": "For a real parameter $k$, consider\n\\[ f_k(x)=\\begin{cases} x^{2}, & x\\le k,\\\\[1ex] 2x-1, & x> k. \\end{cases} \\]\nThe seam between the two pieces sits at the very point $x=k$ that the parameter controls. Find the number of values of $k$ for which $f_k$ is continuous on all of $\\mathbb{R}$.",
  "answer": "Exactly $1$ value, namely $k=1$.",
  "trap": "Treating the join location as fixed and only asking 'do the formulas agree somewhere?' — they agree wherever $x^2=2x-1$, i.e. at $x=1$. But the join is AT $x=k$, so you must demand agreement precisely at $x=k$, giving $k^2=2k-1$, not merely 'somewhere.'",
  "solutions": [
   {
    "name": "Continuity at the moving seam",
    "steps": [
     "Both pieces are continuous on their own domains, so the only possible break is at $x=k$.",
     "Left value/limit: $f_k(k)=k^2$ and $\\lim_{x\\to k^-}x^2=k^2$. Right limit: $\\lim_{x\\to k^+}(2x-1)=2k-1$.",
     "Continuity at $k$ requires $k^2=2k-1$, i.e. $(k-1)^2=0$.",
     "This has the unique solution $k=1$. Hence the count is $\\boxed{1}$."
    ]
   },
   {
    "name": "Discriminant of the gap",
    "steps": [
     "Define the jump $J(k)=k^2-(2k-1)=k^2-2k+1$.",
     "$f_k$ is continuous iff $J(k)=0$ (the left and right values at the seam coincide).",
     "$J(k)=(k-1)^2$ is a perfect square with discriminant $0$, so it has a single (double) root $k=1$.",
     "Therefore exactly $\\boxed{1}$ value of $k$ works."
    ]
   },
   {
    "name": "Geometric tangency",
    "steps": [
     "The two graphs are the parabola $y=x^2$ and the line $y=2x-1$. Continuity at the seam means the seam point $(k,k^2)$ must lie on the line as well.",
     "Substituting: $k^2=2k-1$, equivalently $(k-1)^2=0$.",
     "The line $y=2x-1$ is in fact the tangent to $y=x^2$ at $x=1$, so it meets the parabola only at the single point $x=1$ — a tangency rather than a crossing.",
     "Thus there is exactly one seam location $k=1$ that joins the pieces continuously, giving $\\boxed{1}$."
    ]
   }
  ],
  "remark": "Insight: when the parameter is the join location itself, continuity becomes an equation in $k$. The tangency $(k-1)^2=0$ — equivalently, the line $2x-1$ being tangent to the parabola $x^2$ — is exactly why the answer is a single value rather than two."
 },
 {
  "theme": "parametric",
  "themeLabel": "Parametric Continuity",
  "title": "Sine on the Left, Log on the Right",
  "difficulty": 4,
  "task": "Find a,b",
  "tags": [
   "sine-glue",
   "log-glue",
   "single-join",
   "three-piece"
  ],
  "statement": "Find constants $a,b$ making\n\\[ f(x)=\\begin{cases} \\dfrac{\\sin(a x)}{x}, & x<0,\\\\[2ex] b, & x=0,\\\\[2ex] \\dfrac{\\ln(1+3x)}{x}, & x>0, \\end{cases} \\]\ncontinuous at $x=0$. Find $a$ and $b$.",
  "answer": "$a=3,\\ b=3$.",
  "trap": "The seductive error is to claim $\\dfrac{\\sin(ax)}{x}\\to 1$ regardless of $a$, forgetting the inner scaling. That would force the left limit to be $1$, clashing with the right limit $3$ and making $f$ impossible to glue. In truth $\\dfrac{\\sin(ax)}{x}\\to a$, so the join is governed by $a=3$, and only then does $b=3$ follow.",
  "solutions": [
   {
    "name": "Match both one-sided limits to the value",
    "steps": [
     "Left limit: $\\dfrac{\\sin(ax)}{x}=a\\cdot\\dfrac{\\sin(ax)}{ax}\\to a\\cdot 1=a$ as $x\\to0^-$ (the inner constant $a$ survives).",
     "Right limit: $\\dfrac{\\ln(1+3x)}{x}=3\\cdot\\dfrac{\\ln(1+3x)}{3x}\\to 3\\cdot 1=3$ as $x\\to0^+$.",
     "Continuity needs the two one-sided limits to agree: $a=3$.",
     "Continuity also needs the common limit to equal $f(0)=b$, so $b=3$. Hence $a=\\boxed{3},\\,b=\\boxed{3}$."
    ]
   },
   {
    "name": "Series expansion",
    "steps": [
     "$\\sin(ax)=ax-\\dfrac{(ax)^3}{6}+O(x^5)\\Rightarrow \\dfrac{\\sin(ax)}{x}=a-\\dfrac{a^3x^2}{6}+O(x^4)\\to a$.",
     "$\\ln(1+3x)=3x-\\dfrac{(3x)^2}{2}+O(x^3)\\Rightarrow \\dfrac{\\ln(1+3x)}{x}=3-\\dfrac{9x}{2}+O(x^2)\\to 3$.",
     "Equality of the one-sided limits gives $a=3$.",
     "Continuity then forces $b=3$. Answer: $a=\\boxed{3},\\,b=\\boxed{3}$."
    ]
   }
  ],
  "remark": "Insight: $\\dfrac{\\sin(ax)}{x}\\to a$, not $1$ — the inner constant is exactly what pins down $a$. Once $a=3$ matches the right-hand value $3$, the removable discontinuity is plugged by setting $b$ to that common one-sided limit, not to any average."
 },
 {
  "theme": "parametric",
  "themeLabel": "Parametric Continuity",
  "title": "A Factor in Disguise",
  "difficulty": 4,
  "task": "Determine",
  "tags": [
   "removable",
   "parameter-in-formula",
   "factoring",
   "value-at-point"
  ],
  "statement": "Let $k$ be a real parameter and\n\\[ F(x)=\\begin{cases} \\dfrac{x^{2}-(k+1)x+k}{x-1}, & x\\ne 1,\\\\[2ex] m, & x=1. \\end{cases} \\]\nDetermine the value of $m$ (in terms of $k$) that makes $F$ continuous at $x=1$, and state for which $k$ no such finite $m$ is needed because the point was never a genuine discontinuity for the formula.",
  "answer": "$m=1-k$ for every real $k$; the singularity is always removable (when $k=1$ the numerator vanishes to second order but the limit is still $1-k=0$).",
  "trap": "Assuming the parameter $k$ could make the numerator NOT factor through $(x-1)$, creating a nonremovable pole. In fact $x=1$ is always a root of the numerator (since $1-(k+1)+k=0$), so $(x-1)$ always cancels and the limit is finite for every $k$.",
  "solutions": [
   {
    "name": "Factor the quadratic",
    "steps": [
     "Note $x^2-(k+1)x+k=(x-1)(x-k)$ (check: roots $1$ and $k$).",
     "For $x\\ne1$, $F(x)=\\dfrac{(x-1)(x-k)}{x-1}=x-k$.",
     "Limit as $x\\to1$: $1-k$.",
     "Continuity requires $m=\\boxed{1-k}$, valid for all $k$."
    ]
   },
   {
    "name": "Root test then L'Hopital",
    "steps": [
     "Plug $x=1$ into the numerator: $1-(k+1)+k=0$, so $x=1$ is always a root — the form is $\\frac00$ for every $k$.",
     "Apply L'Hopital: $\\lim_{x\\to1}\\dfrac{2x-(k+1)}{1}=2-(k+1)=1-k$.",
     "Thus the (always finite) limit is $1-k$, so $m=\\boxed{1-k}$.",
     "No choice of $k$ produces a nonremovable pole at $1$."
    ]
   }
  ],
  "remark": "Insight: a parameter sitting inside the formula can look threatening, but here $x=1$ is a structural root for all $k$, so the discontinuity is removable throughout the family."
 },
 {
  "theme": "parametric",
  "themeLabel": "Parametric Continuity",
  "title": "The Seam That Will Not Close",
  "difficulty": 5,
  "task": "Prove that",
  "tags": [
   "absolute-value",
   "jump-discontinuity",
   "no-parameter-works",
   "one-sided-limits"
  ],
  "statement": "For real constants $a,b$ define\n\\[ G(x)=\\begin{cases} \\dfrac{|x-2|+a(x-2)}{x-2}, & x\\ne 2,\\\\[2ex] b, & x=2. \\end{cases} \\]\nProve that there is NO choice of $a$ and $b$ that makes $G$ continuous at $x=2$.",
  "answer": "Proved: for every $a$ the right limit is $a+1$ and the left limit is $a-1$, which always differ by $2$, so the two-sided limit never exists and no $b$ can repair continuity.",
  "trap": "Choosing $a=0$ and then $b=0$ from $\\frac{|x-2|}{x-2}$ 'averaging to $0$,' or picking $b$ equal to one side's limit. Continuity needs BOTH one-sided limits to agree; $|x-2|/(x-2)$ contributes $+1$ on the right and $-1$ on the left, a gap no $a$ can erase.",
  "solutions": [
   {
    "name": "Compute the one-sided limits",
    "steps": [
     "For $x>2$: $|x-2|=x-2$, so $G(x)=\\dfrac{(x-2)+a(x-2)}{x-2}=1+a$. Right limit $=a+1$.",
     "For $x<2$: $|x-2|=-(x-2)$, so $G(x)=\\dfrac{-(x-2)+a(x-2)}{x-2}=a-1$. Left limit $=a-1$.",
     "The difference is $(a+1)-(a-1)=2\\ne0$ for every $a$.",
     "Since the one-sided limits never coincide, $\\lim_{x\\to2}G(x)$ does not exist, so no $b=G(2)$ can make $G$ continuous. $\\blacksquare$"
    ]
   },
   {
    "name": "Sign-function decomposition",
    "steps": [
     "Write $G(x)=\\operatorname{sgn}(x-2)+a$ for $x\\ne2$, since $\\frac{|x-2|}{x-2}=\\operatorname{sgn}(x-2)$.",
     "$\\operatorname{sgn}$ jumps from $-1$ to $+1$ at $0$, so $G$ jumps from $a-1$ to $a+1$ at $x=2$.",
     "A constant shift by $a$ cannot remove a jump; the jump height $2$ is independent of $a$.",
     "Hence continuity at $2$ is impossible for all $a,b$. $\\blacksquare$"
    ]
   }
  ],
  "remark": "Insight: $\\operatorname{sgn}$ baked into a piece creates a fixed jump that no additive parameter can cancel. Recognize the irreparable join before hunting for constants."
 },
 {
  "theme": "parametric",
  "themeLabel": "Parametric Continuity",
  "title": "Grand Junction: Cosine, Value, Radical",
  "difficulty": 5,
  "task": "Find a,b",
  "tags": [
   "grand-hybrid",
   "trig-glue",
   "radical-glue",
   "parameter-in-denominator",
   "single-join"
  ],
  "statement": "Constants $a,b$ (with $a\\ne0$) are chosen so that\n\\[ f(x)=\\begin{cases} \\dfrac{1-\\cos 2x}{a\\,x^{2}}, & x<0,\\\\[2.2ex] 3, & x=0,\\\\[2.2ex] \\dfrac{\\sqrt{1+bx}-1}{x}, & x>0, \\end{cases} \\]\nis continuous at $x=0$. Find $a$ and $b$.",
  "answer": "$a=\\dfrac{2}{3},\\ b=6$.",
  "trap": "Reading off the left limit as $\\frac{1}{a}$ (treating $\\frac{1-\\cos 2x}{x^2}\\to1$) instead of $\\frac{2}{a}$, and reading the right limit as $b$ instead of $\\frac{b}{2}$. Both pieces have nontrivial leading coefficients ($2$ and $\\tfrac12$) that must be tracked exactly.",
  "solutions": [
   {
    "name": "Limits with correct leading constants",
    "steps": [
     "Left: $\\dfrac{1-\\cos 2x}{a x^2}=\\dfrac{2\\sin^2 x}{a x^2}=\\dfrac{2}{a}\\left(\\dfrac{\\sin x}{x}\\right)^2\\to\\dfrac{2}{a}$ as $x\\to0^-$.",
     "Right: $\\dfrac{\\sqrt{1+bx}-1}{x}=\\dfrac{b}{\\sqrt{1+bx}+1}\\to\\dfrac{b}{2}$ as $x\\to0^+$.",
     "Continuity forces both one-sided limits to equal $f(0)=3$: $\\dfrac{2}{a}=3$ and $\\dfrac{b}{2}=3$.",
     "Solve: $a=\\dfrac{2}{3}$ and $b=6$. Thus $a=\\boxed{\\tfrac23},\\,b=\\boxed{6}$."
    ]
   },
   {
    "name": "Taylor route",
    "steps": [
     "$1-\\cos2x=2x^2+O(x^4)\\Rightarrow \\dfrac{1-\\cos2x}{ax^2}\\to\\dfrac{2}{a}$.",
     "$\\sqrt{1+bx}=1+\\tfrac{b}{2}x+O(x^2)\\Rightarrow \\dfrac{\\sqrt{1+bx}-1}{x}\\to\\dfrac{b}{2}$.",
     "Set each equal to the value $3$: $\\frac{2}{a}=3\\Rightarrow a=\\tfrac23$; $\\frac{b}{2}=3\\Rightarrow b=6$.",
     "Answer: $a=\\boxed{\\tfrac23},\\,b=\\boxed{6}$."
    ]
   }
  ],
  "remark": "Insight: the hardest single-join problems hide their difficulty in leading coefficients ($1-\\cos2x\\sim 2x^2$, $\\sqrt{1+bx}\\sim1+\\tfrac{b}{2}x$). Continuity is three numbers agreeing: left limit, value, right limit."
 },
 {
  "theme": "evt",
  "themeLabel": "Boundedness & Extreme Values",
  "title": "The Hospitable Square",
  "difficulty": 3,
  "task": "Find all",
  "tags": [
   "closed interval",
   "evt",
   "rational function",
   "am-gm"
  ],
  "statement": "Let $f(x)=x+\\dfrac{4}{x}$ on the closed bounded interval $[1,4]$. Find the maximum and minimum values of $f$ on $[1,4]$, and state the point(s) at which each is attained.",
  "answer": "Minimum value $4$, attained at $x=2$; maximum value $5$, attained at both endpoints $x=1$ and $x=4$.",
  "trap": "Applying AM-GM to get $f\\ge 4$ and declaring $4$ to be \\emph{both} the answer for the extremes, or computing only the interior critical point and forgetting that on a closed interval the maximum may sit at an endpoint. AM-GM gives the global minimum but says nothing about the maximum on $[1,4]$, which the Extreme Value Theorem guarantees exists and which here lives at the boundary.",
  "solutions": [
   {
    "name": "Calculus on a closed interval",
    "steps": [
     "$f$ is continuous on the closed bounded interval $[1,4]$, so by the Extreme Value Theorem it attains a max and a min; candidates are interior critical points and the two endpoints.",
     "$f'(x)=1-\\dfrac{4}{x^2}=0\\Rightarrow x^2=4\\Rightarrow x=2$ (the root $x=-2$ is outside $[1,4]$).",
     "Evaluate: $f(2)=2+2=4$, $f(1)=1+4=5$, $f(4)=4+1=5$.",
     "Comparing the three values, the minimum is $\\boxed{4}$ at $x=2$ and the maximum is $5$ at $x=1$ and $x=4$."
    ]
   },
   {
    "name": "AM-GM plus endpoint check",
    "steps": [
     "For $x>0$, AM-GM gives $x+\\dfrac4x\\ge 2\\sqrt{x\\cdot\\frac4x}=4$, with equality iff $x=\\frac4x$, i.e. $x=2\\in[1,4]$; hence the minimum is $4$ at $x=2$.",
     "AM-GM gives no upper bound, but EVT promises a maximum on $[1,4]$; since $f$ is strictly convex ($f''=8/x^3>0$), its maximum over an interval occurs at an endpoint.",
     "$f(1)=f(4)=5$, so the maximum is $\\boxed{5}$, attained at both endpoints."
    ]
   }
  ],
  "remark": "Insight: convexity is the tidy explanation — a convex function on $[a,b]$ takes its maximum at an endpoint and its minimum at the unique stationary point, so the endpoint tie $f(1)=f(4)=5$ is no coincidence (the vertex $x=2$ is the geometric centre in the multiplicative sense, $\\sqrt{1\\cdot4}=2$)."
 },
 {
  "theme": "evt",
  "themeLabel": "Boundedness & Extreme Values",
  "title": "The Vanishing Supremum",
  "difficulty": 3,
  "task": "Determine",
  "tags": [
   "open interval",
   "counterexample",
   "supremum",
   "attainment"
  ],
  "statement": "Consider the function $f(x)=\\dfrac14-\\left(x-\\tfrac12\\right)^2$ defined on the \\emph{open} interval $(0,1)$. Determine whether $f$ attains a maximum on $(0,1)$ and whether it attains a minimum (infimum) on $(0,1)$; give the values of $\\sup f$ and $\\inf f$.",
  "answer": "$\\sup_{(0,1)} f=\\tfrac14$, attained at $x=\\tfrac12$ (maximum IS attained). $\\inf_{(0,1)} f=0$, but it is NOT attained.",
  "trap": "Invoking the Extreme Value Theorem to claim that, because $f$ is continuous, it must attain both its max and min. EVT requires a \\emph{closed bounded} interval; on the open $(0,1)$ the theorem gives no guarantee, and indeed the infimum $0$ is approached only as $x\\to0^+$ or $x\\to1^-$ — points that are missing from the domain.",
  "solutions": [
   {
    "name": "Vertex analysis and limits",
    "steps": [
     "$f$ is a downward parabola with vertex at $x=\\tfrac12$, and $\\tfrac12\\in(0,1)$, so $f$ attains its maximum value $f(\\tfrac12)=\\tfrac14$ there — the supremum IS attained.",
     "On $(0,1)$, $f(x)=\\tfrac14-(x-\\tfrac12)^2$ decreases toward the endpoints; $\\lim_{x\\to0^+}f=\\tfrac14-\\tfrac14=0$ and $\\lim_{x\\to1^-}f=0$.",
     "Thus $\\inf_{(0,1)}f=0$, but $f(x)=0$ would force $x=0$ or $x=1$, neither in $(0,1)$; the infimum is not attained.",
     "Conclusion: maximum $=\\boxed{\\tfrac14}$ attained at $x=\\tfrac12$; infimum $=0$ NOT attained."
    ]
   },
   {
    "name": "Direct inequality",
    "steps": [
     "For all $x\\in(0,1)$, $(x-\\tfrac12)^2\\ge0$ gives $f(x)\\le\\tfrac14$, with equality at $x=\\tfrac12$: maximum attained.",
     "For all $x\\in(0,1)$, $0<x<1$ gives $|x-\\tfrac12|<\\tfrac12$ so $(x-\\tfrac12)^2<\\tfrac14$, hence $f(x)>0$: $0$ is a strict lower bound never met.",
     "Taking $x=\\varepsilon\\to0^+$ shows $f(\\varepsilon)=\\varepsilon-\\varepsilon^2\\to0$, so $0$ is the greatest lower bound — the infimum $0$ is genuinely not attained. $\\boxed{\\sup=\\tfrac14\\text{ attained},\\ \\inf=0\\text{ not attained}}$"
    ]
   }
  ],
  "remark": "Insight: this is the cleanest possible separation — a continuous bounded function on an open interval can attain its sup yet miss its inf. EVT is an all-or-nothing guarantee only on closed bounded intervals; drop closedness and the two extremes become independent fates."
 },
 {
  "theme": "evt",
  "themeLabel": "Boundedness & Extreme Values",
  "title": "Coercion at Infinity",
  "difficulty": 4,
  "task": "Evaluate",
  "tags": [
   "coercive",
   "unbounded domain",
   "global minimum",
   "calculus"
  ],
  "statement": "Let $f(x)=x^2+\\dfrac{16}{x^2+4}$ for $x\\in\\mathbb R$. First explain why $f$ attains a global minimum on the (unbounded) real line, then evaluate that minimum value.",
  "answer": "The global minimum value is $4$, attained at $x=0$.",
  "trap": "Saying \"the domain $\\mathbb R$ is not closed and bounded, so the Extreme Value Theorem does not apply and we cannot conclude a minimum exists.\" EVT is only a \\emph{sufficient} condition. Coercivity ($f(x)\\to+\\infty$ as $|x|\\to\\infty$) lets you confine the search to a large closed bounded interval, where EVT does apply, so a global minimum genuinely exists despite the unbounded domain.",
  "solutions": [
   {
    "name": "Coercivity then EVT on a box",
    "steps": [
     "As $|x|\\to\\infty$, $x^2\\to\\infty$ while $\\tfrac{16}{x^2+4}>0$, so $f(x)\\to+\\infty$ (f is coercive); also $f(0)=0+\\tfrac{16}{4}=4$.",
     "Choose $R$ with $f(x)>4$ whenever $|x|>R$ (possible since $f(x)\\ge x^2\\to\\infty$; e.g. $x^2>4\\Rightarrow f(x)>4$, so $R=2$ works). Any global minimizer lies in $[-2,2]$.",
     "On the closed bounded interval $[-2,2]$, $f$ is continuous, so EVT gives a minimum there, which is the global minimum on $\\mathbb R$.",
     "$f'(x)=2x-\\dfrac{32x}{(x^2+4)^2}=2x\\!\\left(1-\\dfrac{16}{(x^2+4)^2}\\right)$. Since $(x^2+4)^2\\ge16$, the bracket is $\\ge0$, so $f'$ has the sign of $x$; the only critical point in $[-2,2]$ is $x=0$.",
     "Hence the minimum is $f(0)=\\boxed{4}$."
    ]
   },
   {
    "name": "Substitution and AM-GM",
    "steps": [
     "Let $u=x^2+4\\ge4$. Then $f=x^2+\\dfrac{16}{x^2+4}=(u-4)+\\dfrac{16}{u}=u+\\dfrac{16}{u}-4$.",
     "For $u>0$, AM-GM gives $u+\\dfrac{16}{u}\\ge2\\sqrt{16}=8$, equality iff $u=4$, i.e. $x^2+4=4$, i.e. $x=0$ — which is in range since $u\\ge4$.",
     "Therefore $f\\ge8-4=4$, with equality at $x=0$, so the global minimum is $\\boxed{4}$.",
     "(Existence is automatic: the bound is achieved, so the infimum is a minimum.)"
    ]
   }
  ],
  "remark": "Insight: \"continuous + coercive on $\\mathbb R$\" is the workhorse upgrade of EVT for unbounded domains. Coercivity traps the action inside a compact box; the substitution $u=x^2+4$ then turns a two-term clash into a textbook AM-GM, and the equality case $u=4$ landing exactly at the boundary $x=0$ is what makes the answer come out clean."
 },
 {
  "theme": "evt",
  "themeLabel": "Boundedness & Extreme Values",
  "title": "The Drifting Wave",
  "difficulty": 4,
  "task": "Find all",
  "tags": [
   "periodic",
   "linear drift",
   "global minimum",
   "boundedness"
  ],
  "statement": "Let $h:\\mathbb R\\to\\mathbb R$ be continuous and periodic with period $1$. For a real constant $k$, define $g(x)=h(x)+kx$. Find all values of $k$ for which $g$ is \\emph{guaranteed} to attain a global minimum on $\\mathbb R$, no matter which such $h$ is chosen.",
  "answer": "$k=0$ (and only $k=0$).",
  "trap": "Reasoning \"$h$ is bounded, so adding the line $kx$ just tilts a bounded wiggle and a minimum still exists.\" The line is unbounded: for $k\\ne0$ the drift $kx$ overwhelms the bounded oscillation, driving $g\\to-\\infty$ in one direction, so $g$ is not even bounded below and no minimum can exist.",
  "solutions": [
   {
    "name": "Boundedness of the periodic part",
    "steps": [
     "Since $h$ is continuous on the closed bounded interval $[0,1]$, by EVT it is bounded there: $m\\le h\\le M$. By periodicity these bounds hold on all of $\\mathbb R$, so $|h(x)|\\le C:=\\max(|m|,|M|)$.",
     "If $k>0$: as $x\\to-\\infty$, $g(x)=h(x)+kx\\le C+kx\\to-\\infty$, so $g$ is unbounded below — no minimum. Symmetrically if $k<0$, take $x\\to+\\infty$.",
     "If $k=0$: $g=h$ is continuous and periodic; on $[0,1]$ EVT gives a minimum $h(x_0)=m$, and by periodicity $h\\ge m$ everywhere with equality at $x_0$ — a global minimum.",
     "Hence the minimum is guaranteed exactly when $\\boxed{k=0}$."
    ]
   },
   {
    "name": "Sandwich estimate",
    "steps": [
     "With $|h|\\le C$ (from EVT on one period), we get $kx-C\\le g(x)\\le kx+C$ for all $x$.",
     "For $k\\ne0$ the outer bounds $kx\\pm C$ both tend to $-\\infty$ on the appropriate side, so by the squeeze $g\\to-\\infty$ there; an unbounded-below function has no minimum.",
     "For $k=0$, $g=h$ is periodic continuous; a continuous periodic function attains its bounds (its values are determined by those on a compact period, where EVT applies).",
     "Therefore the answer is $\\boxed{k=0}$."
    ]
   },
   {
    "name": "Pinning down with the constant test function",
    "steps": [
     "The word \\emph{guaranteed} means we need the minimum to exist for \\emph{every} admissible $h$, so a single bad $h$ rules out a value of $k$.",
     "Take the simplest admissible choice $h\\equiv0$ (continuous, period $1$). Then $g(x)=kx$.",
     "For any $k\\ne0$, $g(x)=kx$ is strictly monotone and ranges over all of $\\mathbb R$, so it has no minimum — this lone counterexample defeats every nonzero $k$.",
     "For $k=0$ the minimum always exists by EVT on one period (previous methods), so only $\\boxed{k=0}$ survives."
    ]
   }
  ],
  "remark": "Insight: a continuous periodic function is the prototype of a continuous function on an \\emph{unbounded} domain that still attains its extremes — because all its information lives on one compact period. The instant you break periodicity with even the gentlest nonzero linear drift, boundedness (and hence the minimum) is lost — and the constant test function $h\\equiv0$ shows the failure is total, not a fixable edge case."
 },
 {
  "theme": "evt",
  "themeLabel": "Boundedness & Extreme Values",
  "title": "The Best Lipschitz Slope",
  "difficulty": 3,
  "task": "Determine",
  "tags": [
   "lipschitz",
   "uniform continuity",
   "heine-cantor",
   "derivative bound"
  ],
  "statement": "On the closed interval $[-2,1]$, consider $f(x)=x^3$. Determine the smallest constant $L$ such that $|f(x)-f(y)|\\le L\\,|x-y|$ holds for all $x,y\\in[-2,1]$. (Such an $L$ exists because $f$ is continuously differentiable on a closed bounded interval.)",
  "answer": "$L=12$.",
  "trap": "Reading off the Lipschitz constant from the \\emph{right} endpoint $f'(1)=3$ (the more 'visible' end) instead of maximizing $|f'(x)|=3x^2$ over the whole interval — its largest value occurs at $x=-2$, giving $3\\cdot4=12$. The mean value theorem ties the optimal $L$ to $\\max|f'|$, which here lives at the far left endpoint, not where the function value is biggest.",
  "solutions": [
   {
    "name": "Mean Value Theorem bound",
    "steps": [
     "$f'(x)=3x^2$ is continuous on the closed bounded interval $[-2,1]$, so by EVT it attains a maximum of $|f'|$; here $|f'(x)|=3x^2$ is maximized at $x=-2$, giving $\\max_{[-2,1]}|f'|=3\\cdot4=12$.",
     "For any $x,y$, the MVT gives $f(x)-f(y)=f'(c)(x-y)$ for some $c$ between them, so $|f(x)-f(y)|\\le12\\,|x-y|$: thus $L=12$ works.",
     "No smaller $L$ works: take $x=-2$, $y=-2+t$ with $t\\to0^+$; then $\\dfrac{|f(x)-f(y)|}{|x-y|}\\to|f'(-2)|=12$, so the ratio reaches $12$ in the limit.",
     "Hence the least Lipschitz constant is $\\boxed{12}$."
    ]
   },
   {
    "name": "Difference factorization",
    "steps": [
     "For $x,y\\in[-2,1]$, $x^3-y^3=(x-y)(x^2+xy+y^2)$, so the optimal $L$ equals $\\max_{x,y\\in[-2,1]}|x^2+xy+y^2|$.",
     "The quadratic form $x^2+xy+y^2$ is positive (its value is $\\tfrac12(x^2+y^2)+\\tfrac12(x+y)^2\\ge0$), so we maximize it over the square $[-2,1]^2$; being convex, the max is at a corner.",
     "Checking corners: $(-2,-2)\\mapsto4+4+4=12$, $(-2,1)\\mapsto4-2+1=3$, $(1,1)\\mapsto3$. The maximum is $12$ at $(-2,-2)$.",
     "Therefore the smallest Lipschitz constant is $\\boxed{12}$."
    ]
   }
  ],
  "remark": "Insight: on a closed bounded interval a $C^1$ function is automatically Lipschitz (hence uniformly continuous, the Heine–Cantor conclusion), and the \\emph{sharp} Lipschitz constant is exactly $\\max|f'|$ — which EVT guarantees is attained. The factorization view confirms it by turning the slope into a corner-maximization of a quadratic form."
 },
 {
  "theme": "evt",
  "themeLabel": "Boundedness & Extreme Values",
  "title": "Two Cosines in Concert",
  "difficulty": 4,
  "task": "Determine",
  "tags": [
   "periodic",
   "trigonometric",
   "extrema",
   "double angle"
  ],
  "statement": "Let $g(x)=\\cos x+\\cos 2x$ for $x\\in\\mathbb R$. Determine the maximum and minimum values of $g$ on the whole real line, justifying that both are actually attained.",
  "answer": "Maximum value $2$ (attained, e.g. at $x=0$); minimum value $-\\tfrac98$ (attained where $\\cos x=-\\tfrac14$).",
  "trap": "Bounding crudely as $g\\le\\cos x|_{\\max}+\\cos2x|_{\\max}=1+1=2$ for the max (which happens to be right because both terms peak together at $x=0$) and then doing the SAME for the min: $-1+(-1)=-2$. But $\\cos x$ and $\\cos2x$ cannot both equal $-1$ at the same $x$, so $-2$ is never reached; the true minimum is the strictly larger $-\\tfrac98$.",
  "solutions": [
   {
    "name": "Reduce to one variable",
    "steps": [
     "$g$ is continuous and $2\\pi$-periodic, so its values on $\\mathbb R$ equal those on the compact interval $[0,2\\pi]$, where EVT guarantees the max and min are attained.",
     "Write $t=\\cos x\\in[-1,1]$ and use $\\cos2x=2t^2-1$: $g=2t^2+t-1=:\\phi(t)$ on $[-1,1]$.",
     "$\\phi$ is an upward parabola with vertex at $t=-\\tfrac14$: $\\phi(-\\tfrac14)=2\\cdot\\tfrac1{16}-\\tfrac14-1=\\tfrac18-\\tfrac54=-\\tfrac98$ — the minimum, attained since $\\cos x=-\\tfrac14$ has solutions.",
     "On $[-1,1]$ the max of the parabola is at an endpoint: $\\phi(1)=2$, $\\phi(-1)=0$, so the max is $2$ at $t=1$ (i.e. $x=0$). Thus $\\max=\\boxed{2}$, $\\min=\\boxed{-\\tfrac98}$."
    ]
   },
   {
    "name": "Calculus and critical points",
    "steps": [
     "By periodicity it suffices to extremize $g$ on $[0,2\\pi]$ (compact, so EVT applies).",
     "$g'(x)=-\\sin x-2\\sin2x=-\\sin x-4\\sin x\\cos x=-\\sin x(1+4\\cos x)=0$.",
     "Case $\\sin x=0$: $x=0,\\pi,2\\pi$ give $g=1+1=2$, $-1+1=0$, $2$. Case $\\cos x=-\\tfrac14$: then $g=2\\cos^2x+\\cos x-1=2\\cdot\\tfrac1{16}-\\tfrac14-1=-\\tfrac98$.",
     "Comparing $\\{2,0,-\\tfrac98\\}$: maximum $=\\boxed{2}$, minimum $=\\boxed{-\\tfrac98}$, both attained."
    ]
   }
  ],
  "remark": "Insight: continuity plus periodicity hands you compactness for free, so the extremes are guaranteed attained; the analytic punchline is that the naive $-2$ lower bound ignores the algebraic coupling $\\cos2x=2\\cos^2x-1$, which forbids both terms from bottoming out together and lifts the true minimum to $-\\tfrac98$."
 },
 {
  "theme": "evt",
  "themeLabel": "Boundedness & Extreme Values",
  "title": "The Damped Ripple's Verdict",
  "difficulty": 4,
  "task": "Prove that",
  "tags": [
   "limit at infinity",
   "attainment",
   "compactification",
   "sign argument"
  ],
  "statement": "Let $f(x)=\\dfrac{\\sin x}{x}$ for $x\\ne0$ and $f(0)=1$, so that $f:\\mathbb R\\to\\mathbb R$ is continuous with $f(x)\\to0$ as $x\\to\\pm\\infty$. Prove that $f$ attains BOTH a global maximum and a global minimum on $\\mathbb R$, even though its domain is unbounded.",
  "answer": "proved (global max $=1$ at $x=0$; a global min exists and equals some value $<0$, both attained)",
  "trap": "Concluding that because $\\mathbb R$ is not closed and bounded, the Extreme Value Theorem does not apply, so one cannot decide whether the extremes are attained. The vanishing of $f$ at infinity acts as a compactification: it traps each extreme inside a closed bounded interval where EVT does apply, so attainment is provable without any formula for the minimizer.",
  "solutions": [
   {
    "name": "Trap each extreme in a compact set",
    "steps": [
     "$f$ is continuous on $\\mathbb R$ and $f(0)=1>0$, while $f(x)\\to0$ as $|x|\\to\\infty$. By the definition of the limit there is $R>0$ with $|f(x)|<\\tfrac12$ for all $|x|>R$.",
     "On the closed bounded interval $[-R,R]$, EVT supplies a point $x_*$ where $f$ attains its maximum over $[-R,R]$. Since $0\\in[-R,R]$ we get $f(x_*)\\ge f(0)=1>\\tfrac12$. For $|x|>R$ we have $f(x)<\\tfrac12<f(x_*)$, and for $|x|\\le R$ we have $f(x)\\le f(x_*)$. Hence $f(x_*)$ is the GLOBAL maximum. In fact $|\\sin x|\\le|x|$ gives $f(x)\\le1$ for all $x$ with equality only at $x=0$, so the global maximum equals $1$ and $x_*=0$.",
     "For the minimum, note $f$ takes a negative value: $f\\!\\left(\\tfrac{3\\pi}{2}\\right)=\\dfrac{\\sin(3\\pi/2)}{3\\pi/2}=-\\dfrac{2}{3\\pi}<0$. Put $m:=f\\!\\left(\\tfrac{3\\pi}{2}\\right)<0$ and choose $R'>0$ with $|f(x)|<\\tfrac12|m|$ for $|x|>R'$, enlarging $R'$ if needed so that $\\tfrac{3\\pi}{2}\\in[-R',R']$.",
     "EVT on $[-R',R']$ gives a point $y_*$ where $f$ attains its minimum over $[-R',R']$, so $f(y_*)\\le m<0$. For $|x|>R'$ we have $f(x)>-\\tfrac12|m|=\\tfrac12 m>m\\ge f(y_*)$, and for $|x|\\le R'$ we have $f(x)\\ge f(y_*)$. Hence $f(y_*)$ is the GLOBAL minimum.",
     "Thus both the global maximum and the global minimum are attained at finite real points. $\\blacksquare$"
    ]
   },
   {
    "name": "One-point compactification made rigorous",
    "steps": [
     "Extend $f$ to $X:=\\mathbb R\\cup\\{\\infty\\}$ by setting $f(\\infty):=0$. Equip $X$ with the topology making it the one-point compactification of $\\mathbb R$; the basic neighbourhoods of $\\infty$ are the sets $\\{\\infty\\}\\cup\\{x:|x|>R\\}$. Because $f(x)\\to0$ as $|x|\\to\\infty$, the extended map $\\widehat f$ is continuous at $\\infty$ as well, hence continuous on the compact space $X$.",
     "A continuous real-valued function on a compact space attains its maximum and its minimum. Let $p,q\\in X$ be points where $\\widehat f$ attains its max and min respectively.",
     "Since $\\widehat f(0)=1>0=\\widehat f(\\infty)$, the maximum value is at least $1>0$, so $p\\ne\\infty$, i.e. $p\\in\\mathbb R$. Since $\\widehat f\\!\\left(\\tfrac{3\\pi}{2}\\right)=-\\tfrac{2}{3\\pi}<0=\\widehat f(\\infty)$, the minimum value is at most $-\\tfrac{2}{3\\pi}<0$, so $q\\ne\\infty$, i.e. $q\\in\\mathbb R$.",
     "Therefore $f$ attains both extremes at the finite real points $p,q$. $\\blacksquare$"
    ]
   }
  ],
  "remark": "Insight: a continuous $f$ on $\\mathbb R$ with finite limit $L$ at both ends behaves like a function on a compact circle. The governing lemma is: if $f$ is continuous with $\\lim_{x\\to\\pm\\infty}f(x)=L$, then $f$ attains its maximum whenever $\\sup f>L$ and attains its minimum whenever $\\inf f<L$. Here $L=0$ and $f$ peeks both above its limit (value $1$ at $0$) and below it (a negative dip), so it captures both extremes; the actual minimizer sits at the first positive solution of $\\tan x=x$ (near $4.4934$, value $\\approx-0.2172$), but the attainment proof never needs that number."
 },
 {
  "theme": "evt",
  "themeLabel": "Boundedness & Extreme Values",
  "title": "A Tale of Sup and Inf",
  "difficulty": 3,
  "task": "Find a,b",
  "tags": [
   "construction",
   "open interval",
   "supremum",
   "attainment"
  ],
  "statement": "Construct an explicit continuous function $\\varphi:(0,1)\\to\\mathbb R$ that is bounded, attains its supremum, but does NOT attain its infimum; report the constants $a=\\sup\\varphi$ and $b=\\inf\\varphi$ that your construction achieves.",
  "answer": "Such a $\\varphi$ exists; e.g. $\\varphi(x)=\\tfrac14-\\bigl(x-\\tfrac12\\bigr)^2$ gives $a=\\sup\\varphi=\\tfrac14$ (attained at $x=\\tfrac12$) and $b=\\inf\\varphi=0$ (not attained).",
  "trap": "Believing no such function can exist, reasoning that a bounded continuous function must attain at least one of its extremes and surely both or neither. On a closed bounded interval EVT forces both; on an open interval the two extremes are completely decoupled, so attaining one while missing the other is perfectly possible.",
  "solutions": [
   {
    "name": "Downward parabola construction",
    "steps": [
     "Take $\\varphi(x)=\\tfrac14-\\bigl(x-\\tfrac12\\bigr)^2$ on $(0,1)$; it is a polynomial, hence continuous, and since $0<\\bigl(x-\\tfrac12\\bigr)^2<\\tfrac14$ for $x\\in(0,1)$ we get $0<\\varphi(x)\\le\\tfrac14$, so $\\varphi$ is bounded.",
     "The maximum value $\\tfrac14$ is achieved precisely when $\\bigl(x-\\tfrac12\\bigr)^2=0$, i.e. at the interior point $x=\\tfrac12\\in(0,1)$; hence $\\sup\\varphi=a=\\tfrac14$ is attained.",
     "Solving $\\varphi(x)=0$ gives $x\\in\\{0,1\\}$, neither of which lies in $(0,1)$, so $\\varphi(x)>0$ throughout; yet $\\varphi(x)\\to0$ as $x\\to0^+$ and as $x\\to1^-$. Thus $0$ is a lower bound and no smaller bound works, so $\\inf\\varphi=b=0$, never reached.",
     "Hence $\\varphi$ has the required properties with $\\boxed{a=\\tfrac14,\\ b=0}$ (sup attained, inf not)."
    ]
   },
   {
    "name": "Sine-bump construction",
    "steps": [
     "Take $\\psi(x)=\\sin(\\pi x)$ on $(0,1)$, which is continuous and bounded since $|\\psi|\\le1$.",
     "On $(0,1)$ the argument $\\pi x$ lies in $(0,\\pi)$, so $\\psi(x)>0$; the unique maximiser of $\\sin$ there is $\\pi x=\\tfrac\\pi2$, i.e. $x=\\tfrac12\\in(0,1)$, giving $\\psi\\bigl(\\tfrac12\\bigr)=1$. Hence $\\sup\\psi=1$ is attained.",
     "As $x\\to0^+$ or $x\\to1^-$ we have $\\psi(x)\\to\\sin0=\\sin\\pi=0$, while $\\psi(x)>0$ inside; so $\\inf\\psi=0$ is the greatest lower bound but is not attained.",
     "This is another valid construction with $a=1,\\ b=0$; either example settles the question. $\\boxed{\\text{sup attained, inf not}}$"
    ]
   }
  ],
  "remark": "Insight: the existence question is really about which hypothesis of EVT you drop. Removing closedness of the domain frees the infimum to escape to a missing endpoint while the supremum stays safely at an interior point, so the two extremes no longer rise or fall together. (Swapping signs, $-\\varphi$ attains its infimum but not its supremum, and a strictly monotone example like $x$ itself attains neither.)"
 },
 {
  "theme": "evt",
  "themeLabel": "Boundedness & Extreme Values",
  "title": "The Quasi-Periodic Mirage",
  "difficulty": 5,
  "task": "Prove that",
  "tags": [
   "quasiperiodic",
   "supremum not attained",
   "dense orbit",
   "irrational"
  ],
  "statement": "Let $F(x)=\\sin x+\\cos\\!\\big(\\sqrt2\\,x\\big)$ for $x\\in\\mathbb R$. Prove that $F$ is bounded with $\\sup_{x\\in\\mathbb R}F(x)=2$, yet $F$ NEVER attains the value $2$; conclude that $F$ has no global maximum on $\\mathbb R$.",
  "answer": "proved: $\\sup F=2$ but the supremum is not attained, so no global maximum exists.",
  "trap": "Treating $F$ as if it were periodic (\"a sum of two sinusoids must be periodic\"), then invoking the periodic-function principle to claim the bound $2$ is attained. The two frequencies $1$ and $\\sqrt2$ are incommensurable, so $F$ is only quasi-periodic, not periodic, and the would-be maximum $2$ is approached arbitrarily closely but never reached.",
  "solutions": [
   {
    "name": "Equioscillation forces incommensurability",
    "steps": [
     "Upper bound. Since $\\sin x\\le1$ and $\\cos(\\sqrt2 x)\\le1$ for all $x$, we have $F(x)=\\sin x+\\cos(\\sqrt2 x)\\le 2$. Thus $F$ is bounded above by $2$ (and likewise $F\\ge-2$, so $F$ is bounded).",
     "Equality is forced to be exact. Because each term is at most $1$, $F(x)=2$ can hold only if $\\sin x=1$ AND $\\cos(\\sqrt2 x)=1$ simultaneously, i.e. $x=\\tfrac\\pi2+2\\pi m$ and $\\sqrt2\\,x=2\\pi n$ for some integers $m,n$.",
     "Contradiction via irrationality. Substituting the first relation into the second gives $\\sqrt2\\big(\\tfrac\\pi2+2\\pi m\\big)=2\\pi n$, hence $\\sqrt2=\\dfrac{2n}{\\tfrac12+2m}=\\dfrac{4n}{1+4m}\\in\\mathbb Q$. This contradicts the irrationality of $\\sqrt2$. Therefore $F(x)=2$ is impossible, and indeed $F(x)<2$ for every real $x$.",
     "The bound is sharp. Take the points $x_m=\\tfrac\\pi2+2\\pi m$, where $\\sin x_m=1$ exactly, so $F(x_m)=1+\\cos(\\sqrt2 x_m)$. By Kronecker–Weyl equidistribution, the numbers $\\tfrac{\\sqrt2 x_m}{2\\pi}=\\sqrt2\\big(\\tfrac14+m\\big)$ are equidistributed mod $1$ (since $\\sqrt2$ is irrational), so $\\cos(\\sqrt2 x_m)$ comes within any $\\varepsilon>0$ of its maximum $1$. Hence $F(x_m)$ gets within $\\varepsilon$ of $2$.",
     "Conclusion. Combining the strict bound $F<2$ with the approximation $\\sup_m F(x_m)=2$ gives $\\sup_{x\\in\\mathbb R}F(x)=2$, attained nowhere. A global maximum would be a point where the supremum is achieved; none exists, so $F$ has no global maximum on $\\mathbb R$. $\\blacksquare$"
    ]
   },
   {
    "name": "Approach via simultaneous Diophantine approximation",
    "steps": [
     "Bound. As above $F(x)\\le\\sin x+1\\le2$ and $F(x)\\le1+\\cos(\\sqrt2 x)\\le2$, so $F\\le2$ on $\\mathbb R$.",
     "Why $2$ is never reached. Equality needs $\\sin x=1$ and $\\cos(\\sqrt2 x)=1$ at the SAME $x$, an exact commensurability between the periods $2\\pi$ and $2\\pi/\\sqrt2$. That would force a rational relation between $1$ and $\\sqrt2$, impossible since $\\sqrt2\\notin\\mathbb Q$; so $F<2$ pointwise.",
     "An explicit approximating sequence. Fix $x_m=\\tfrac\\pi2+2\\pi m$ so that $\\sin x_m=1$ exactly; then $F(x_m)=1+\\cos(\\sqrt2 x_m)$. Because $\\sqrt2$ is irrational, the sequence $m\\mapsto\\{\\sqrt2\\,m\\}$ of fractional parts is dense in $[0,1)$ (a classical consequence of the three-distance / equidistribution theorem), hence $\\{\\sqrt2(\\tfrac14+m)\\}$ is dense in $[0,1)$ as well.",
     "Pumping the value up. Density gives integers $m_k$ with $\\{\\sqrt2(\\tfrac14+m_k)\\}\\to0$, so $\\sqrt2 x_{m_k}$ is arbitrarily close to a multiple of $2\\pi$ and $\\cos(\\sqrt2 x_{m_k})\\to1$. Therefore $F(x_{m_k})\\to2$, giving $\\sup_m F(x_m)=2$.",
     "Conclusion. We have $F<2$ everywhere yet $F$ takes values within every $\\varepsilon$ of $2$; thus $\\sup_{x\\in\\mathbb R}F(x)=2$ is approached but never reached, and $F$ admits no global maximum. $\\blacksquare$"
    ]
   }
  ],
  "remark": "Insight: the sum of sinusoids with incommensurable frequencies is the canonical bounded continuous function on $\\mathbb R$ whose supremum is NOT attained, exactly the failure the EVT/periodic principle is meant to rule out. The Extreme Value Theorem rescues periodic functions because one full period is a compact (closed and bounded) set, so the continuous $F$ attains its max there; quasi-periodicity offers no such period to compactify, and the bound $2$ survives only as an unreached limit along a dense orbit."
 },
 {
  "theme": "evt",
  "themeLabel": "Boundedness & Extreme Values",
  "title": "The Upper Envelope's Floor",
  "difficulty": 5,
  "task": "Evaluate",
  "tags": [
   "max of functions",
   "coercive",
   "piecewise",
   "global minimum"
  ],
  "statement": "Define $f(x)=\\max\\{\\,x^2-4,\\ 2-x\\,\\}$ for $x\\in\\mathbb R$ (the pointwise larger of the two). Prove that $f$ attains a global minimum on $\\mathbb R$, and evaluate that minimum value together with the point(s) where it occurs.",
  "answer": "The global minimum value is $0$, attained uniquely at $x=2$.",
  "trap": "Minimizing each branch separately — vertex of $x^2-4$ gives $-4$ at $x=0$, vertex of the line is at infinity — and then taking the smaller, concluding $-4$. But $f$ is the \\emph{upper} envelope: at $x=0$ the line gives $2-0=2>-4$, so $f(0)=2$, not $-4$. The minimum of a max-of-functions is generally NOT the min of either piece; it sits where the two graphs cross on the way up.",
  "solutions": [
   {
    "name": "Crossing analysis on the envelope",
    "steps": [
     "Each piece is continuous, so $f=\\max\\{x^2-4,\\,2-x\\}$ is continuous; as $|x|\\to\\infty$, $x^2-4\\to\\infty$ dominates, so $f$ is coercive and (continuous + coercive) attains a global minimum on $\\mathbb R$.",
     "Find where the pieces are equal: $x^2-4=2-x\\Rightarrow x^2+x-6=0\\Rightarrow x=2$ or $x=-3$. Test a middle point $x=0$: $x^2-4=-4<2=2-x$, so on $(-3,2)$ the line $2-x$ is the larger piece, hence $f(x)=2-x$ there.",
     "On $(-3,2)$, $f=2-x$ is decreasing, so it bottoms out as $x\\to2^-$ at $f\\to0$. For $x\\ge2$, $x^2-4\\ge2-x$ (check $x=2$: both $0$), so $f=x^2-4$, which increases from $0$. Thus the minimum of $f$ over $[-3,\\infty)$ is $0$ at $x=2$.",
     "For $x\\le-3$, $f=x^2-4\\ge5>0$. Comparing all regions, the global minimum is $\\boxed{0}$, attained only at $x=2$. $\\blacksquare$"
    ]
   },
   {
    "name": "Minimize the max via the crossing principle",
    "steps": [
     "For an upper envelope of two continuous functions $u,v$ with $u$ eventually dominating both ways and the relevant minimum interior, the minimum of $\\max\\{u,v\\}$ occurs either at a stationary point of the active branch or at a crossing $u=v$.",
     "Stationary points: vertex of $x^2-4$ is $x=0$, but there the active branch is the line ($f(0)=2$), so it's irrelevant; the line has no stationary point.",
     "Crossings are $x=2$ (value $0$) and $x=-3$ (value $5$). The smaller crossing value is $0$ at $x=2$.",
     "Since coercivity guarantees a global minimum and the only competitive candidate is the crossing $x=2$, the minimum is $\\boxed{0}$ at $x=2$. $\\blacksquare$"
    ]
   }
  ],
  "remark": "Insight: the minimum of a maximum of functions lives at a 'kink' — a crossing of the active branches — not at any branch's own vertex. Coercivity supplies existence (an EVT-on-a-box argument), and the crossing principle pins down the location; here both the value and the minimizer come out perfectly clean at $(2,0)$."
 },
 {
  "theme": "monotone",
  "themeLabel": "Monotonic & Inverse Functions",
  "title": "The Squashed Line and Its Echo",
  "difficulty": 3,
  "task": "Determine",
  "tags": [
   "strictly increasing",
   "bijection",
   "inverse function",
   "continuity"
  ],
  "statement": "Define $f:\\mathbb{R}\\to\\mathbb{R}$ by \\[ f(x)=\\frac{x}{1+|x|}. \\] (a) Show $f$ is a strictly increasing continuous bijection from $\\mathbb{R}$ onto the open interval $(-1,1)$. (b) Give an explicit formula for $f^{-1}:(-1,1)\\to\\mathbb{R}$ and state, with reason, whether $f^{-1}$ is continuous. (c) Compute $f^{-1}(\\tfrac{3}{5})$.",
  "answer": "$f$ is a continuous strictly increasing bijection of $\\mathbb{R}$ onto $(-1,1)$; its inverse is \\[ f^{-1}(y)=\\frac{y}{1-|y|},\\qquad y\\in(-1,1), \\] which is continuous (the continuous inverse of a strictly monotone continuous bijection). Finally $f^{-1}\\!\\left(\\tfrac35\\right)=\\dfrac{3/5}{1-3/5}=\\dfrac{3}{2}.$",
  "trap": "Declaring $f$ is 'onto $\\mathbb{R}$' because its domain is all of $\\mathbb{R}$: the squashing makes the range only $(-1,1)$, so $f^{-1}$ is defined only there, and forgetting this leads to plugging in $y=1$ where the formula blows up.",
  "solutions": [
   {
    "name": "Branch-split monotonicity and direct inversion",
    "steps": [
     "For $x\\ge 0$, $f(x)=\\dfrac{x}{1+x}$ with $f'(x)=\\dfrac{1}{(1+x)^2}>0$; for $x<0$, $f(x)=\\dfrac{x}{1-x}$ with $f'(x)=\\dfrac{1}{(1-x)^2}>0$. Both pieces increase and agree at $x=0$ (value $0$), so $f$ is strictly increasing on all of $\\mathbb{R}$ and continuous.",
     "As $x\\to+\\infty$, $f\\to 1^-$; as $x\\to-\\infty$, $f\\to-1^+$. By the Intermediate Value Theorem the range is exactly $(-1,1)$, so $f$ is a continuous strictly increasing bijection onto $(-1,1)$.",
     "Since $f$ is a strictly monotone continuous bijection between intervals, the inverse-function theorem for monotone maps gives that $f^{-1}$ is continuous (and strictly increasing).",
     "Solve $y=\\dfrac{x}{1+|x|}$: for $y\\ge 0$ then $x\\ge 0$ and $y(1+x)=x\\Rightarrow x=\\dfrac{y}{1-y}$; by the odd symmetry $f(-x)=-f(x)$ the general formula is $f^{-1}(y)=\\dfrac{y}{1-|y|}$.",
     "Hence $f^{-1}(3/5)=\\dfrac{3/5}{1-3/5}=\\dfrac{3/5}{2/5}=\\boxed{\\tfrac32}.$"
    ]
   },
   {
    "name": "Verify by composition",
    "steps": [
     "Guess $g(y)=\\dfrac{y}{1-|y|}$ on $(-1,1)$ and check $f(g(y))=y$: for $0\\le y<1$, $g(y)=\\dfrac{y}{1-y}\\ge0$, so $f(g(y))=\\dfrac{g}{1+g}=\\dfrac{y/(1-y)}{1/(1-y)}=y$.",
     "The map $g$ is continuous on $(-1,1)$ (denominator nonzero) and strictly increasing, and $f\\circ g=\\mathrm{id}$, $g\\circ f=\\mathrm{id}$, so $g=f^{-1}$ is the continuous inverse.",
     "Evaluate at $y=3/5$: $g(3/5)=\\dfrac{3/5}{2/5}=\\boxed{\\tfrac32}.$"
    ]
   }
  ],
  "remark": "Insight: $x/(1+|x|)$ is the canonical 'homeomorphism of $\\mathbb{R}$ onto a bounded interval'. Strict monotonicity plus continuity is precisely what guarantees a continuous inverse; the range being open, not all of $\\mathbb{R}$, is the whole point."
 },
 {
  "theme": "monotone",
  "themeLabel": "Monotonic & Inverse Functions",
  "title": "A Staircase Built from Two Floors",
  "difficulty": 3,
  "task": "Find the number of points of discontinuity (and each jump size).",
  "tags": [
   "floor function",
   "monotone",
   "jump discontinuity",
   "counting"
  ],
  "statement": "Let \\[ f(x)=\\lfloor x\\rfloor+\\lfloor 3x\\rfloor,\\qquad x\\in[0,1]. \\] (a) Show $f$ is nondecreasing on $[0,1]$. (b) Find the number of points of $[0,1]$ at which $f$ is discontinuous, and the size of the jump at each.",
  "answer": "$f$ is nondecreasing, and it is discontinuous at exactly the three points $x=\\tfrac13,\\ \\tfrac23,\\ 1$ in $[0,1]$. The jumps are of size $1$ at $x=\\tfrac13$ and $x=\\tfrac23$, and of size $2$ at $x=1$ (where both floors jump). So the number of discontinuities is $\\boxed{3}$.",
  "trap": "Treating $\\lfloor x\\rfloor$ and $\\lfloor 3x\\rfloor$ as if they always jump at separate points and concluding the jumps are all size $1$: at the shared point $x=1$ both increase together, producing a single jump of size $2$ — the jump sizes must be added where the discontinuities coincide.",
  "solutions": [
   {
    "name": "Locate each floor's jumps",
    "steps": [
     "$\\lfloor x\\rfloor$ is constant ($=0$) on $[0,1)$ and equals $1$ at $x=1$, so it has a single jump (of size $1$) at $x=1$.",
     "$\\lfloor 3x\\rfloor$ jumps where $3x$ is an integer, i.e. at $x=\\tfrac13,\\tfrac23,1$ on $(0,1]$, each jump of size $1$.",
     "A sum of two nondecreasing functions is nondecreasing, so $f$ is nondecreasing; its discontinuity set is the union $\\{\\tfrac13,\\tfrac23\\}\\cup\\{1\\}$.",
     "At $x=\\tfrac13,\\tfrac23$ only $\\lfloor 3x\\rfloor$ jumps (size $1$); at $x=1$ both jump, total jump $1+1=2$. Number of discontinuities $=\\boxed{3}.$"
    ]
   },
   {
    "name": "Tabulate values",
    "steps": [
     "On $[0,\\tfrac13)$: $f=0$. On $[\\tfrac13,\\tfrac23)$: $\\lfloor 3x\\rfloor=1$, so $f=1$. On $[\\tfrac23,1)$: $\\lfloor 3x\\rfloor=2$, so $f=2$. At $x=1$: $\\lfloor 1\\rfloor+\\lfloor 3\\rfloor=1+3=4$.",
     "The value sequence $0\\to1\\to2\\to4$ shows upward jumps $+1,+1,+2$ at $x=\\tfrac13,\\tfrac23,1$ respectively, and the function is constant between, hence nondecreasing with exactly $\\boxed{3}$ jumps."
    ]
   }
  ],
  "remark": "Insight: every jump of a monotone step function sits at a point where at least one constituent floor crosses an integer; coincident crossings add their jump sizes. This is the discrete shadow of the general fact that a monotone function's discontinuities are all jumps."
 },
 {
  "theme": "monotone",
  "themeLabel": "Monotonic & Inverse Functions",
  "title": "Counting the Cracks of an Inverse Clock",
  "difficulty": 4,
  "task": "Count the discontinuities of a floor-of-reciprocal step function and match the total jump to the net drop.",
  "tags": [
   "floor function",
   "monotone decreasing",
   "jump discontinuity",
   "total variation",
   "endpoint continuity"
  ],
  "statement": "Consider \\[ g(x)=\\left\\lfloor \\frac{1}{x}\\right\\rfloor,\\qquad x\\in\\left[\\tfrac{1}{10},\\,1\\right]. \\] (a) Show $g$ is nonincreasing on $[\\tfrac1{10},1]$. (b) Find the number of points of $[\\tfrac1{10},1]$ at which $g$ is discontinuous (using one-sided continuity at the endpoints), find the total $\\sum|\\text{jump}|$ of the absolute jump sizes, and verify it equals $g(\\tfrac1{10})-g(1)$.",
  "answer": "$g$ is nonincreasing. Reading left to right, $g$ drops by $1$ each time $x$ passes through a point $x=\\tfrac1k$ with $1/x$ an integer $\\ge 2$, i.e. at $x=\\tfrac12,\\tfrac13,\\dots,\\tfrac19$ (eight interior points) and at the left endpoint $x=\\tfrac1{10}$ (where the in-domain right limit $9$ differs from $g(\\tfrac1{10})=10$, a one-sided discontinuity). The right endpoint $x=1$ is continuous. Thus the number of discontinuities is $\\boxed{9}$, each a downward jump of size $1$, so the total absolute jump is $9=g(\\tfrac1{10})-g(1)=10-1$.",
  "trap": "Counting $x=1$ as a discontinuity. At $x=1$ we have $1/x=1$, an integer, so it looks like a crossing point; but $x=1$ is the right endpoint, and continuity there uses only the in-domain left limit $\\lim_{x\\to1^-}g(x)=1=g(1)$. So $g$ is (one-sidedly) continuous at $x=1$ and it must not be counted. A subtler companion error is calling all nine discontinuities interior: $x=\\tfrac1{10}$ is the left endpoint, contributing a one-sided (right-hand) discontinuity, so only eight of the nine are interior.",
  "solutions": [
   {
    "name": "Pull jumps back through the reciprocal",
    "steps": [
     "The map $t\\mapsto\\lfloor t\\rfloor$ is nondecreasing and jumps by $+1$ exactly as $t$ crosses an integer from below. Substituting $t=1/x$, which is a decreasing function of $x$ on $(0,\\infty)$, the composition $g(x)=\\lfloor 1/x\\rfloor$ is nonincreasing in $x$; this proves (a).",
     "On $[\\tfrac1{10},1]$ we have $1/x\\in[1,10]$. As $x$ increases through a value $x=\\tfrac1k$ the quantity $1/x$ decreases through the integer $k$, so $g$ drops from $k$ to $k-1$: a downward jump of size $1$. These crossing values are $k=2,3,\\dots,10$, i.e. $x=\\tfrac12,\\tfrac13,\\dots,\\tfrac19,\\tfrac1{10}$.",
     "Classify by location. The eight points $x=\\tfrac12,\\dots,\\tfrac19$ are interior, so two-sided limits apply and each is a genuine jump discontinuity. The point $x=\\tfrac1{10}$ is the left endpoint: the only in-domain approach is from the right, and $\\lim_{x\\to(1/10)^+}g(x)=9\\ne 10=g(\\tfrac1{10})$, so it is a one-sided discontinuity that counts. The value $k=1$ gives $x=1$, the right endpoint, where $\\lim_{x\\to1^-}g(x)=1=g(1)$, so $g$ is continuous there and $x=1$ does not count.",
     "Hence the discontinuity count is $8+1=\\boxed{9}$. Each jump has magnitude $1$, so $\\sum|\\text{jump}|=9$. Since $g(\\tfrac1{10})=\\lfloor10\\rfloor=10$ and $g(1)=\\lfloor1\\rfloor=1$, indeed $g(\\tfrac1{10})-g(1)=9$, matching the jump total, as it must for a pure step function with no continuous descent."
    ]
   },
   {
    "name": "List the level sets, then count transitions",
    "steps": [
     "For a positive integer $n$, $g(x)=n\\iff n\\le \\tfrac1x<n+1\\iff \\tfrac{1}{n+1}<x\\le\\tfrac1n.$ Restricting to $[\\tfrac1{10},1]$, the value $g=1$ occupies $(\\tfrac12,1]$, $g=2$ occupies $(\\tfrac13,\\tfrac12]$, and so on down to $g=9$ on $(\\tfrac1{10},\\tfrac19]$ and the isolated left-endpoint value $g(\\tfrac1{10})=10$.",
     "Walking left to right, the constant value drops by exactly $1$ at the right edge of each level set strictly inside the domain. Those drop locations are $x=\\tfrac12,\\tfrac13,\\dots,\\tfrac19$ (eight interior jumps) together with the jump at the very start: just to the right of $x=\\tfrac1{10}$ the value already fell from $10$ to $9$, making $x=\\tfrac1{10}$ a one-sided discontinuity (a ninth jump).",
     "There is no jump at $x=1$: the rightmost level set $(\\tfrac12,1]$ includes its right endpoint, so $g\\equiv1$ on a left-neighborhood of $1$ and $g$ is continuous there. Total discontinuities $=9$, each of magnitude $1$, giving $\\sum|\\text{jump}|=9=10-1=g(\\tfrac1{10})-g(1).$ Thus the number of discontinuities is $\\boxed{9}.$"
    ]
   }
  ],
  "remark": "Insight: pulling a floor through a strictly monotone change of variable preserves the 'every discontinuity is a unit jump' structure, and for a pure step function the sum of jump magnitudes equals the net drop $f(a)-f(b)$ exactly (the function is its own total variation). The endpoint bookkeeping is the real subtlety: on a closed interval, continuity at $a$ and $b$ is one-sided, so an integer crossing sitting exactly at the right endpoint does not count, while one sitting at the left endpoint can count as a one-sided discontinuity. Here $x=1$ is harmless but $x=\\tfrac1{10}$ is not."
 },
 {
  "theme": "monotone",
  "themeLabel": "Monotonic & Inverse Functions",
  "title": "The Continuous Curtain with a Treacherous Lining",
  "difficulty": 4,
  "task": "Prove that",
  "tags": [
   "bijection",
   "inverse function",
   "non-interval domain",
   "discontinuous inverse"
  ],
  "statement": "Let $D=[0,1]\\cup(2,3]$ and define $f:D\\to[0,2]$ by \\[ f(x)=\\begin{cases} x, & x\\in[0,1],\\\\[2pt] x-1, & x\\in(2,3]. \\end{cases} \\] Prove that $f$ is a continuous bijection of $D$ onto $[0,2]$, but that $f^{-1}:[0,2]\\to D$ is discontinuous at exactly one point; identify that point and describe the jump.",
  "answer": "$f$ is a continuous bijection $D\\to[0,2]$, yet $f^{-1}(y)=\\begin{cases} y,&y\\in[0,1],\\\\ y+1,&y\\in(1,2],\\end{cases}$ is discontinuous at exactly the single point $y=1$. There $f^{-1}(1)=1$ but $\\lim_{y\\to1^+}f^{-1}(y)=2$, so the inverse jumps from $1$ to values just above $2$ as $y$ crosses $1$ from the right. The unique discontinuity of the inverse is $\\boxed{y=1}$.",
  "trap": "Invoking 'a continuous bijection has a continuous inverse': that theorem requires the domain to be an interval (or compact), which forces monotonicity. Here $D$ is not an interval, so the conclusion fails — the gap $(1,2)$ in the domain is exactly what lets the forward map 'teleport' across the gap and breaks inverse-continuity. (Note the jump in $f^{-1}$ lands just above $2$, not near $3$: the right-branch $y\\mapsto y+1$ sends $y\\to1^+$ to outputs $\\to2^+$; values near $3$ correspond to $y$ near $2$, where $f^{-1}$ is perfectly continuous.)",
  "solutions": [
   {
    "name": "Build the inverse explicitly",
    "steps": [
     "On $[0,1]$, $f(x)=x$ ranges over $[0,1]$; on $(2,3]$, $f(x)=x-1$ ranges over $(1,2]$. These two images are disjoint and their union is $[0,1]\\cup(1,2]=[0,2]$, so $f$ is a bijection onto $[0,2]$ (each branch is strictly increasing, hence injective, and the disjoint images rule out any cross-branch collision).",
     "$f$ is continuous on each piece of its domain (each branch is linear). The two pieces $[0,1]$ and $(2,3]$ are separated by the gap $(1,2)\\subset\\mathbb{R}\\setminus D$, so neither piece has a limit point of $D$ belonging to the other; hence in the subspace topology of $D$ there is no point where continuity could fail, and $f$ is continuous on $D$.",
     "Invert each branch: $f^{-1}(y)=y$ for $y\\in[0,1]$ and $f^{-1}(y)=y+1$ for $y\\in(1,2]$.",
     "At $y=1$: $f^{-1}(1)=1$, but $\\lim_{y\\to 1^+}f^{-1}(y)=\\lim_{y\\to1^+}(y+1)=2$. So for $y$ just above $1$ the inverse takes values just above $2$, while $f^{-1}(1)=1$; the right limit ($2$) disagrees with the value ($1$), giving a jump discontinuity. Everywhere else each linear branch is continuous, so $f^{-1}$ is discontinuous at $\\boxed{y=1}$ only."
    ]
   },
   {
    "name": "Sequential criterion",
    "steps": [
     "Take $y_n=1+\\tfrac1n\\to 1^+$. Then $f^{-1}(y_n)=2+\\tfrac1n\\to 2$, while $f^{-1}(1)=1$.",
     "Since $f^{-1}(y_n)\\not\\to f^{-1}(1)$ (the limit $2$ differs from the value $1$), the inverse fails the sequential continuity test at $y=1$. On $[0,1)$ the branch $y\\mapsto y$ is continuous, and on $(1,2]$ the branch $y\\mapsto y+1$ is continuous (and matches the value at every interior point and at $y=2$), so $y=1$ is the only failure, giving $\\boxed{y=1}$."
    ]
   }
  ],
  "remark": "Insight: monotonicity, not mere bijectivity, is the engine behind continuous inverses. Drill a hole in the domain so the map can 'teleport' across it, and the inverse develops a jump even though the forward map is perfectly continuous. The jump size here is exactly the width $1$ of the gap $(2,3]$'s shift: $f^{-1}$ leaps from $1$ up to $2^+$ as $y$ passes $1$."
 },
 {
  "theme": "monotone",
  "themeLabel": "Monotonic & Inverse Functions",
  "title": "Where Two Curved Floors Disagree",
  "difficulty": 4,
  "task": "Find the number of …",
  "tags": [
   "floor function",
   "monotone",
   "irrational jumps",
   "counting"
  ],
  "statement": "Let \\[ h(x)=\\lfloor x\\rfloor+\\lfloor x^2\\rfloor,\\qquad x\\in[0,2]. \\] (a) Show $h$ is nondecreasing. (b) Find the number of points of $[0,2]$ at which $h$ is discontinuous, list them, and give the jump size at each.",
  "answer": "$h$ is nondecreasing and discontinuous at exactly the four points $x=1,\\ \\sqrt2,\\ \\sqrt3,\\ 2$. The jumps are: size $2$ at $x=1$ (both floors jump), size $1$ at $x=\\sqrt2$ and $x=\\sqrt3$, and size $2$ at $x=2$ (both floors jump). The number of discontinuities is $\\boxed{4}$.",
  "trap": "Assuming all the jumps of $\\lfloor x^2\\rfloor$ occur at integer $x$: in fact $\\lfloor x^2\\rfloor$ jumps wherever $x^2$ is an integer, i.e. at the irrationals $\\sqrt2,\\sqrt3$ too. Missing these undercounts the discontinuities.",
  "solutions": [
   {
    "name": "Find each floor's jump set",
    "steps": [
     "$\\lfloor x\\rfloor$ jumps at $x=1$ and $x=2$ on $(0,2]$, each by $1$.",
     "$\\lfloor x^2\\rfloor$ jumps where $x^2\\in\\{1,2,3,4\\}$, i.e. at $x=1,\\sqrt2,\\sqrt3,2$ on $(0,2]$, each by $1$.",
     "Both summands are nondecreasing, so $h$ is nondecreasing; the discontinuity set is the union $\\{1,2\\}\\cup\\{1,\\sqrt2,\\sqrt3,2\\}=\\{1,\\sqrt2,\\sqrt3,2\\}$, which has $4$ elements.",
     "Add coincident jumps: at $x=1$ and $x=2$ both floors jump (total $2$ each); at $x=\\sqrt2,\\sqrt3$ only $\\lfloor x^2\\rfloor$ jumps (size $1$). Hence $\\boxed{4}$ discontinuities."
    ]
   },
   {
    "name": "Walk the values",
    "steps": [
     "On $[0,1)$: $h=0$. On $[1,\\sqrt2)$: $\\lfloor x\\rfloor=1,\\lfloor x^2\\rfloor=1$, so $h=2$. On $[\\sqrt2,\\sqrt3)$: $h=1+2=3$. On $[\\sqrt3,2)$: $h=1+3=4$. At $x=2$: $h=2+4=6$.",
     "The value sequence $0\\to2\\to3\\to4\\to6$ shows upward jumps $+2,+1,+1,+2$ at $x=1,\\sqrt2,\\sqrt3,2$, constant in between, so $h$ is a nondecreasing step function with exactly $\\boxed{4}$ jumps."
    ]
   }
  ],
  "remark": "Insight: composing a floor with $x^2$ scatters the discontinuities onto $\\sqrt{\\text{integers}}$ — irrational jump locations are perfectly normal. What is forced is only that each discontinuity is a jump and the set is countable."
 },
 {
  "theme": "monotone",
  "themeLabel": "Monotonic & Inverse Functions",
  "title": "The Generous Floor Tax",
  "difficulty": 4,
  "task": "Evaluate",
  "tags": [
   "monotone",
   "jump discontinuity",
   "sum of jumps",
   "bounded variation"
  ],
  "statement": "On $[0,3]$ define the increasing function \\[ F(x)=\\lfloor x\\rfloor+\\tfrac12\\lfloor 2x\\rfloor+\\tfrac{x}{3}. \\] (a) Compute $F(3)-F(0)$. (b) Evaluate $S=\\displaystyle\\sum_{\\text{jumps}}\\bigl(F(x^+)-F(x^-)\\bigr)$, the total of all jump sizes, and verify the inequality $S\\le F(3)-F(0)$, accounting for the difference.",
  "answer": "$F(3)-F(0)=7$. The jumps occur at $x=\\tfrac12,1,\\tfrac32,2,\\tfrac52,3$, with sizes $\\tfrac12,\\,\\tfrac32,\\,\\tfrac12,\\,\\tfrac32,\\,\\tfrac12,\\,\\tfrac32$ respectively, summing to $S=6$. Indeed $S=6\\le 7=F(3)-F(0)$, the slack $7-6=1$ being exactly the rise contributed by the continuous term $x/3$ over $[0,3]$. So $\\boxed{F(3)-F(0)=7,\\ S=6}$.",
  "trap": "Believing the sum of jumps equals $F(3)-F(0)$: that holds only for a pure step function. Here the continuous term $x/3$ also raises $F$, so the jump sum is strictly less than the total rise — equality becomes the inequality $S\\le F(b)-F(a)$.",
  "solutions": [
   {
    "name": "Total rise minus continuous part",
    "steps": [
     "$F(3)=\\lfloor3\\rfloor+\\tfrac12\\lfloor6\\rfloor+1=3+3+1=7$ and $F(0)=0$, so $F(3)-F(0)=7.$",
     "$\\lfloor x\\rfloor$ jumps (size $1$) at $x=1,2,3$; $\\tfrac12\\lfloor 2x\\rfloor$ jumps (size $\\tfrac12$) at $x=\\tfrac12,1,\\tfrac32,2,\\tfrac52,3$. Adding coincident jumps gives sizes $\\tfrac12$ at $x=\\tfrac12,\\tfrac32,\\tfrac52$ and $1+\\tfrac12=\\tfrac32$ at $x=1,2,3$.",
     "Total jump sum $S=3\\cdot\\tfrac12+3\\cdot\\tfrac32=\\tfrac32+\\tfrac92=6.$",
     "The continuous term $x/3$ rises by $3/3=1$ over $[0,3]$; total rise $=$ jumps $+$ continuous rise $=6+1=7$, confirming $S=6\\le7=F(3)-F(0)$ with slack exactly the continuous rise. $\\boxed{F(3)-F(0)=7,\\ S=6}.$"
    ]
   },
   {
    "name": "Telescoping the saltus",
    "steps": [
     "Write $F=J+C$ where $J=\\lfloor x\\rfloor+\\tfrac12\\lfloor 2x\\rfloor$ (pure jump, increasing) and $C=x/3$ (continuous, increasing).",
     "For the step part $J$, the sum of all jumps over $[0,3]$ equals $J(3)-J(0)=(3+3)-0=6$, since $J$ is constant between jumps; this is exactly $S=6$.",
     "Because $C$ is continuous it contributes $0$ to the jump sum but $C(3)-C(0)=1$ to the total rise, so $F(3)-F(0)=S+1=7$ and $S=6\\le 7.$ $\\boxed{F(3)-F(0)=7,\\ S=6}.$"
    ]
   }
  ],
  "remark": "Insight: for a monotone $F$, the sum of jumps equals the total rise of its pure-jump (saltus) part, and the gap up to $F(b)-F(a)$ is the rise of the continuous part. The bound $\\sum\\text{jumps}\\le F(b)-F(a)$ is the additive decomposition made visible."
 },
 {
  "theme": "monotone",
  "themeLabel": "Monotonic & Inverse Functions",
  "title": "A Jump at Every Rational",
  "difficulty": 5,
  "task": "Prove that",
  "tags": [
   "dense discontinuities",
   "countable set",
   "pure jump function",
   "monotone"
  ],
  "statement": "Enumerate the rationals of $(0,1)$ as $q_1,q_2,q_3,\\dots$ and define, for $x\\in[0,1]$, \\[ \\Phi(x)=\\sum_{n:\\,q_n\\le x}\\frac{1}{2^{\\,n}}. \\] Prove that $\\Phi$ is nondecreasing on $[0,1]$ with $\\Phi(0)=0,\\ \\Phi(1)=1$; that $\\Phi$ is discontinuous at every rational of $(0,1)$ and continuous at every irrational; and conclude that, although its discontinuity set is dense in $[0,1]$, it is countable. State the total of all jump sizes.",
  "answer": "$\\Phi$ is a nondecreasing function with $\\Phi(0)=0$, $\\Phi(1)=1$, right-continuous everywhere; it has a jump of size $2^{-n}$ at each rational $q_n\\in(0,1)$ and is continuous at every irrational of $(0,1)$. Its discontinuity set is exactly $\\mathbb{Q}\\cap(0,1)$, which is dense yet countable, and the total of all jump sizes is $\\sum_{n\\ge1}2^{-n}=1$. Hence: proved, with total jump $\\boxed{1}$.",
  "trap": "Reasoning 'the discontinuities are dense, so they must be uncountable / $\\Phi$ must be wildly discontinuous on a fat set': density does not imply uncountability. For ANY monotone function the discontinuity set is countable, because the open jump intervals $(\\Phi(x^-),\\Phi(x^+))$ are pairwise disjoint and each catches a distinct rational. Here it is precisely the (countable) rationals, despite being dense.",
  "solutions": [
   {
    "name": "Monotonicity, jumps, and the saltus sum",
    "steps": [
     "If $x<y$, every index $n$ with $q_n\\le x$ also has $q_n\\le y$, so the defining sum gains only nonnegative extra terms: $\\Phi(x)\\le\\Phi(y)$; thus $\\Phi$ is nondecreasing. $\\Phi(0)=0$ (no rational $q_n\\le 0$) and $\\Phi(1)=\\sum_{n\\ge1}2^{-n}=1$. The series converges absolutely, with tail $\\sum_{n>N}2^{-n}=2^{-N}$.",
     "Fix a rational $q_m\\in(0,1)$. For $x<q_m$ the index $m$ is excluded; for $x\\ge q_m$ it is included. Writing $\\Phi(q_m^-)=\\sum_{q_n<q_m}2^{-n}$ and $\\Phi(q_m)=\\sum_{q_n\\le q_m}2^{-n}$, the only term that switches on is the $m$-th, so $\\Phi(q_m)-\\Phi(q_m^-)=2^{-m}>0$: $\\Phi$ has a jump discontinuity at $q_m$ of size exactly $2^{-m}$. Moreover $\\Phi(q_m^+)=\\Phi(q_m)$, so $\\Phi$ is right-continuous there.",
     "At an irrational $\\alpha\\in(0,1)$, given $\\varepsilon>0$ choose $N$ with $\\sum_{n>N}2^{-n}=2^{-N}<\\varepsilon$. The finitely many points $q_1,\\dots,q_N$ all differ from $\\alpha$, so pick $\\delta>0$ with no $q_n$ ($n\\le N$) in $(\\alpha-\\delta,\\alpha+\\delta)$. For $x,y$ in that interval the sums $\\Phi(x),\\Phi(y)$ differ only by terms with index $>N$, hence $|\\Phi(y)-\\Phi(x)|\\le\\sum_{n>N}2^{-n}<\\varepsilon$. Thus the oscillation of $\\Phi$ at $\\alpha$ is $0$ and $\\Phi$ is continuous at every irrational.",
     "The discontinuity set is therefore exactly $\\mathbb{Q}\\cap(0,1)$: dense in $[0,1]$ but countable. Summing the jumps gives the saltus $\\sum_{n\\ge1}2^{-n}=\\boxed{1}$, equal to $\\Phi(1)-\\Phi(0)$ since $\\Phi$ is a pure jump function (its continuous part is constant)."
    ]
   },
   {
    "name": "General monotone discontinuity theorem",
    "steps": [
     "Any nondecreasing $\\Phi$ has, at each interior point, finite left and right limits $\\Phi(x^-)\\le\\Phi(x)\\le\\Phi(x^+)$; a discontinuity is necessarily a jump $\\Phi(x^+)-\\Phi(x^-)>0$. To each such jump assign a distinct rational $r_x\\in(\\Phi(x^-),\\Phi(x^+))$. If $x<y$ are two discontinuities then monotonicity forces $\\Phi(x^+)\\le\\Phi(y^-)$, so the open intervals $(\\Phi(x^-),\\Phi(x^+))$ and $(\\Phi(y^-),\\Phi(y^+))$ are disjoint; hence $x\\mapsto r_x$ injects the discontinuity set into $\\mathbb{Q}$, which is countable — no matter how dense the jumps are.",
     "Applied here, the jump at $q_n$ is $2^{-n}$ (the single term switched on), and by the irrational-continuity argument these are the only discontinuities; so the discontinuity set is exactly $\\mathbb{Q}\\cap(0,1)$. The saltus (sum of jumps) is $\\sum_n 2^{-n}=1=\\Phi(1)-\\Phi(0)$, confirming $\\Phi$ is purely a jump function with total jump $\\boxed{1}$. This refutes the 'dense $\\Rightarrow$ uncountable' reflex: the disjoint-interval injection caps the count at $|\\mathbb{Q}|$."
    ]
   }
  ],
  "remark": "Insight: this is the cleanest demonstration that 'dense' and 'countable' coexist. The disjoint-jump-interval injection into the rationals works for every monotone function, so a monotone function can never have uncountably many discontinuities. The same construction shows that for any prescribed countable set $S$ and any summable positive weights $w_n>0$ there is a monotone function whose jumps sit exactly on $S$ with exactly those sizes, total jump $\\sum_n w_n$."
 },
 {
  "theme": "monotone",
  "themeLabel": "Monotonic & Inverse Functions",
  "title": "The Bijection That Fills Every Gap",
  "difficulty": 5,
  "task": "Prove that",
  "tags": [
   "intermediate value property",
   "monotone",
   "continuity criterion",
   "surjectivity"
  ],
  "statement": "Let $f:[a,b]\\to\\mathbb{R}$ be nondecreasing. Prove that $f$ is continuous on $[a,b]$ if and only if its image $f([a,b])$ is exactly the closed interval $[f(a),f(b)]$; equivalently, $f$ attains every value between $f(a)$ and $f(b)$. Then show by an explicit example that dropping the \"attains every intermediate value\" hypothesis allows a nondecreasing function to be discontinuous, and pinpoint exactly which values are skipped.",
  "answer": "For nondecreasing $f$: $f$ is continuous on $[a,b]$ $\\iff$ $f([a,b])=[f(a),f(b)]$. Dropping the intermediate-value hypothesis, the nondecreasing function $f(x)=x$ on $[0,\\tfrac12)$ and $f(x)=x+1$ on $[\\tfrac12,1]$ is discontinuous at $x=\\tfrac12$ (jump of size $1$, since $f(\\tfrac12^-)=\\tfrac12$ while $f(\\tfrac12)=\\tfrac32$) and its image is $[0,\\tfrac12)\\cup[\\tfrac32,2]$, missing precisely the values in $\\bigl[\\tfrac12,\\tfrac32\\bigr)$. Skipped set $\\boxed{[\\tfrac12,\\tfrac32)}$.",
  "trap": "Asserting that monotonicity alone forces the intermediate value property, so that every monotone function is automatically continuous. In fact a monotone function can leap over a whole interval of values at a jump; it is precisely the absence of such skipped values (the Darboux property) that, combined with monotonicity, yields continuity.",
  "solutions": [
   {
    "name": "Two-way proof via one-sided limits",
    "steps": [
     "($\\Rightarrow$) Suppose $f$ is continuous on the compact connected set $[a,b]$. Then $f([a,b])$ is a compact connected subset of $\\mathbb{R}$, i.e. a closed bounded interval. Since $f$ is nondecreasing its minimum is $f(a)$ and its maximum is $f(b)$, so $f([a,b])=[f(a),f(b)]$.",
     "($\\Leftarrow$) We prove the contrapositive. Suppose $f$ is discontinuous at some $c\\in[a,b]$. A nondecreasing function has one-sided limits everywhere: $L^-=\\lim_{x\\to c^-}f(x)=\\sup_{x<c}f(x)$ and $L^+=\\lim_{x\\to c^+}f(x)=\\inf_{x>c}f(x)$, with $L^-\\le f(c)\\le L^+$. Discontinuity means $L^-<L^+$, so at least one of these inequalities is strict.",
     "Pick a value $v$ with $L^-<v<L^+$ and $v\\ne f(c)$ (possible since $(L^-,L^+)$ is a nondegenerate interval, hence not a single point). Monotonicity gives $f(x)\\le L^-<v$ for all $x<c$ and $f(x)\\ge L^+>v$ for all $x>c$, while $f(c)\\ne v$. Hence $v\\notin f([a,b])$.",
     "Taking $c$ in the interior shows $v\\in(f(a),f(b))$ is missed, so $f([a,b])\\ne[f(a),f(b)]$. Contrapositively, $f([a,b])=[f(a),f(b)]$ forces continuity. Combined with ($\\Rightarrow$), continuity $\\iff$ image $=[f(a),f(b)]$.",
     "Example showing the hypothesis is essential: $f(x)=x$ on $[0,\\tfrac12)$ and $f(x)=x+1$ on $[\\tfrac12,1]$ is nondecreasing with $f(\\tfrac12^-)=\\tfrac12$ and $f(\\tfrac12)=\\tfrac32$, so it has a jump of size $1$ and is discontinuous. Its image is $[0,\\tfrac12)\\cup[\\tfrac32,2]$, missing exactly $\\boxed{[\\tfrac12,\\tfrac32)}$ inside $[f(0),f(1)]=[0,2]$."
    ]
   },
   {
    "name": "Contrapositive through the saltus interval",
    "steps": [
     "For a nondecreasing $f$, define the saltus (jump) at $c$ as $\\sigma(c)=f(c^+)-f(c^-)\\ge 0$; $f$ is continuous at $c$ iff $\\sigma(c)=0$. At a discontinuity $\\sigma(c)>0$, so the open interval $\\bigl(f(c^-),f(c^+)\\bigr)$ has positive length.",
     "No point of that open interval is attained except possibly $f(c)$ itself: for $x<c$ we have $f(x)\\le f(c^-)$, and for $x>c$ we have $f(x)\\ge f(c^+)$. Thus every $v\\in\\bigl(f(c^-),f(c^+)\\bigr)\\setminus\\{f(c)\\}$ lies outside $f([a,b])$, carving a gap out of $[f(a),f(b)]$.",
     "Hence discontinuity $\\Rightarrow$ the image has a gap inside $[f(a),f(b)]$; contrapositively, $f([a,b])=[f(a),f(b)]$ $\\Rightarrow$ $f$ is continuous. The forward direction is the compact-connected image argument of Method 1.",
     "The displayed example realizes such a gap: at $c=\\tfrac12$ the saltus interval is $\\bigl(\\tfrac12,\\tfrac32\\bigr)$, and since $f(\\tfrac12)=\\tfrac32$ is attained as the right endpoint while $\\tfrac12=\\sup_{x<1/2}f(x)$ is not, the un-attained set is the half-open interval $\\boxed{[\\tfrac12,\\tfrac32)}$."
    ]
   }
  ],
  "remark": "The principle \"monotone plus Darboux implies continuous\" is a deep little theorem: for general functions the Darboux (intermediate-value) property does not imply continuity, but adding monotonicity tames it, because a monotone function can only fail continuity by jumping, and every jump literally cuts a missing interval out of the range. The half-open shape $[\\tfrac12,\\tfrac32)$ of the skipped set records which endpoint the function chooses to attain at the jump."
 },
 {
  "theme": "monotone",
  "themeLabel": "Monotonic & Inverse Functions",
  "title": "The Tame Twin of a Wild Slope",
  "difficulty": 5,
  "task": "Find a,b",
  "tags": [
   "strictly increasing",
   "continuous inverse",
   "inverse derivative",
   "bijection"
  ],
  "statement": "Let $f(x)=x+\\arctan x$ for $x\\in\\mathbb{R}$. (a) Prove $f$ is a strictly increasing continuous bijection of $\\mathbb{R}$ onto $\\mathbb{R}$, so that $f^{-1}$ exists and is continuous. (b) With $g=f^{-1}$, find the ordered pair $(a,b)=\\bigl(g(0),\\,g'(0)\\bigr)$, and also evaluate $g'\\!\\bigl(1+\\tfrac{\\pi}{4}\\bigr)$.",
  "answer": "$f$ is a strictly increasing continuous bijection of $\\mathbb{R}$ onto $\\mathbb{R}$ (since $f'(x)=1+\\frac{1}{1+x^2}>0$ and $f(\\pm\\infty)=\\pm\\infty$), so $g=f^{-1}$ is continuous and differentiable. Then $g(0)=0$ and $g'(0)=1/f'(0)=1/2$, i.e. $(a,b)=\\bigl(0,\\tfrac12\\bigr)$. Also $f(1)=1+\\tfrac{\\pi}{4}$, so $g'\\!\\bigl(1+\\tfrac{\\pi}{4}\\bigr)=1/f'(1)=1/(1+\\tfrac12)=\\tfrac23$. Final: $\\boxed{(a,b)=\\left(0,\\tfrac12\\right),\\ g'\\!\\left(1+\\tfrac{\\pi}{4}\\right)=\\tfrac23}$.",
  "trap": "Computing $g'(y)$ as $f'(y)$ or $1/f'(y)$ evaluated at the wrong point: the inverse-derivative rule is $g'(y)=1/f'(g(y))$, so one must first find the $x=g(y)$ with $f(x)=y$ (here $x=0$ and $x=1$), not plug $y$ into $f'$.",
  "solutions": [
   {
    "name": "Monotone bijection then inverse-derivative rule",
    "steps": [
     "$f'(x)=1+\\dfrac{1}{1+x^2}>0$ for all $x$, so $f$ is strictly increasing; it is continuous, and $\\lim_{x\\to-\\infty}f=-\\infty,\\ \\lim_{x\\to+\\infty}f=+\\infty$, so by the IVT $f$ is a continuous strictly increasing bijection of $\\mathbb{R}$ onto $\\mathbb{R}$. Hence $g=f^{-1}$ is continuous (continuous inverse of a strictly monotone continuous bijection) and differentiable where $f'\\ne0$.",
     "Since $f(0)=0+\\arctan0=0$, we get $g(0)=0$, so $a=0.$",
     "By $g'(y)=\\dfrac{1}{f'(g(y))}$: at $y=0$, $g'(0)=\\dfrac{1}{f'(0)}=\\dfrac{1}{1+1}=\\tfrac12$, so $b=\\tfrac12$ and $(a,b)=\\bigl(0,\\tfrac12\\bigr).$",
     "For $y=1+\\tfrac{\\pi}{4}$: solve $f(x)=1+\\tfrac{\\pi}{4}$. Since $f(1)=1+\\arctan1=1+\\tfrac{\\pi}{4}$, we have $g(1+\\tfrac{\\pi}{4})=1$; then $g'(1+\\tfrac{\\pi}{4})=\\dfrac{1}{f'(1)}=\\dfrac{1}{1+\\tfrac12}=\\tfrac23.$ Final: $\\boxed{(0,\\tfrac12),\\ \\tfrac23}.$"
    ]
   },
   {
    "name": "Implicit differentiation of the inverse relation",
    "steps": [
     "From $y=g(x)+\\arctan g(x)$ (the relation $x=f(g(x))$ written out), differentiate in $x$: $1=g'(x)\\Bigl(1+\\dfrac{1}{1+g(x)^2}\\Bigr).$",
     "Thus $g'(x)=\\dfrac{1}{1+\\frac{1}{1+g(x)^2}}=\\dfrac{1+g(x)^2}{2+g(x)^2}.$",
     "At $x=0$, $g(0)=0$ gives $g'(0)=\\dfrac{1}{2}$, so $(a,b)=(0,\\tfrac12).$",
     "At $x=1+\\tfrac{\\pi}{4}$, $g=1$ gives $g'=\\dfrac{1+1}{2+1}=\\dfrac23.$ Hence $\\boxed{(0,\\tfrac12),\\ \\tfrac23}.$"
    ]
   }
  ],
  "remark": "Insight: $x+\\arctan x$ is the textbook example where strict monotonicity (from a strictly positive derivative) plus the right limits at $\\pm\\infty$ delivers a globally continuous, differentiable inverse — and the inverse's slope is read off cleanly by locating the matching $x$ first."
 },
 {
  "theme": "monotone",
  "themeLabel": "Monotonic & Inverse Functions",
  "title": "The Auctioneer's Discontinuous Ladder",
  "difficulty": 4,
  "task": "Determine",
  "tags": [
   "monotone",
   "jump discontinuity",
   "sum of jumps",
   "left and right limits",
   "word problem"
  ],
  "statement": "At a sealed-bid auction the clearing price, as a function of the quantity released $q\\in[0,4]$, is the nonincreasing 'demand-ladder' \\[ P(q)=10-\\lfloor q\\rfloor-\\Bigl\\lceil \\tfrac{q}{2}\\Bigr\\rceil, \\] where $\\lfloor\\cdot\\rfloor$ is the floor and $\\lceil\\cdot\\rceil$ is the ceiling. (a) Show $P$ is nonincreasing on $[0,4]$. (b) Find every $q\\in[0,4]$ at which the ladder is discontinuous; at each give the left limit $P(q^-)$, the right limit $P(q^+)$ and the downward jump $P(q^-)-P(q^+)$ (use the one available side at the endpoints $q=0,4$). (c) Compute the total drop $\\sum|\\text{jump}|$ and verify it equals $P(0)-P(4)$. Beware: $\\lceil\\cdot\\rceil$ and $\\lfloor\\cdot\\rfloor$ do not step at the same instants, nor on the same side.",
  "answer": "$P$ is nonincreasing. It is discontinuous (jump discontinuities) at $q=0,1,2,3,4$ with downward jumps of sizes $1,1,2,1,1$. The floor $\\lfloor q\\rfloor$ contributes a $+1$ step at each of $q=1,2,3,4$ (so $P$ drops $1$ there), while the ceiling $\\lceil q/2\\rceil$ contributes a $+1$ step only as $q$ leaves the even values $0$ and $2$ (it equals $0$ at $q=0$, then $1$ on $(0,2]$, then $2$ on $(2,4]$), so $P$ drops $1$ at $q=0$ and an extra $1$ at $q=2$. Hence the per-point drops are $q=0\\!:1,\\ q=1\\!:1,\\ q=2\\!:2,\\ q=3\\!:1,\\ q=4\\!:1$. The total drop is $1+1+2+1+1=6$, and $P(0)-P(4)=10-4=6$, matching. (A subtlety: at $q=2$ the value $P(2)=7$ lies strictly between $P(2^-)=8$ and $P(2^+)=6$, because the right-continuous floor has already stepped at $q=2$ while the left-continuous ceiling has not.) So $\\boxed{\\text{jumps at }q=0,1,2,3,4\\text{ of sizes }1,1,2,1,1;\\ \\text{total }=6}$.",
  "trap": "The seductive error is to read the ceiling like an offset floor and put its extra unit drops at $q=2$ and $q=4$ while ignoring $q=0$ — giving the bogus list 'jumps at $q=1,2,3,4$ of sizes $1,2,1,2$, total $6$'. The total $6$ even coincides, which makes the mistake look right. But $\\lceil q/2\\rceil$ does NOT step at $q=4$: it already reached its value $2$ on the whole interval $(2,4]$, so $\\lceil q/2\\rceil$ is continuous at $q=4$ and the only drop there is the floor's $1$, not $2$. Symmetrically the ceiling DOES step out of $q=0$ (from $\\lceil 0\\rceil=0$ to $1$), creating a real jump at $q=0$ that the bogus list omits. Correct placements: ceiling jumps as $q$ leaves the even points $0,2$, never at $q=4$.",
  "solutions": [
   {
    "name": "Separate the two staircases",
    "steps": [
     "Both $\\lfloor q\\rfloor$ and $\\lceil q/2\\rceil$ are nondecreasing on $[0,4]$, so $P=10-\\lfloor q\\rfloor-\\lceil q/2\\rceil$ is nonincreasing. This proves (a).",
     "Locate the steps of each piece. The floor $\\lfloor q\\rfloor$ is right-continuous and steps up by $1$ at each integer $q=1,2,3,4$. The ceiling $\\lceil q/2\\rceil$ is left-continuous: $\\lceil q/2\\rceil=n$ exactly when $q/2\\in(n-1,n]$, i.e. $q\\in(2n-2,2n]$. Thus $\\lceil q/2\\rceil=0$ at $q=0$, $=1$ on $(0,2]$, $=2$ on $(2,4]$ — its only upward steps occur as $q$ leaves the even values $0$ and $2$ (never at $q=4$).",
     "Combine the contributions of the two pieces at each candidate point. At $q=0$ only the ceiling steps (drop $1$). At $q=1$ and $q=3$ only the floor steps (drop $1$ each). At $q=2$ both step (drop $1+1=2$). At $q=4$ only the floor steps (drop $1$).",
     "So the discontinuities are exactly $q=0,1,2,3,4$ with downward jumps $1,1,2,1,1$. The total drop is $1+1+2+1+1=6$. Endpoints: $P(0)=10-0-0=10$, $P(4)=10-4-2=4$, so $P(0)-P(4)=6$, matching the jump total (as it must for a nonincreasing pure step function). $\\boxed{\\text{jumps at }0,1,2,3,4:\\ 1,1,2,1,1;\\ \\text{total }6}.$"
    ]
   },
   {
    "name": "Tabulate, then read one-sided limits",
    "steps": [
     "Evaluate $\\lfloor q\\rfloor$ and $\\lceil q/2\\rceil$ on each open unit block and hence $P$. On $(0,1)$: $0,1\\Rightarrow P=9$. On $(1,2)$: $1,1\\Rightarrow P=8$. On $(2,3)$: $2,2\\Rightarrow P=6$. On $(3,4)$: $3,2\\Rightarrow P=5$. The constant block values are $9,8,6,5$.",
     "Add the boundary values: $P(0)=10-0-0=10$ and $P(4)=10-4-2=4$. The right-limit profile as $q$ runs from $0$ to $4$ is therefore $10,\\,9,\\,8,\\,6,\\,5,\\,4$ (the value at $q=0$ followed by the four block values and the value at $q=4$).",
     "Read each jump as left limit minus right limit, $P(q^-)-P(q^+)$ (one-sided at the ends). $q=0$: $10\\to 9$, drop $1$. $q=1$: $9\\to 8$, drop $1$. $q=2$: $8\\to 6$, drop $2$. $q=3$: $6\\to 5$, drop $1$. $q=4$: $5\\to 4$, drop $1$. Every discontinuity is a genuine jump (finite one-sided limits), and the drops are $1,1,2,1,1$.",
     "Telescoping the consecutive drops gives $1+1+2+1+1=6$, which equals $P(0)-P(4)=10-4=6$. Note the half-step at $q=2$: $P(2)=10-2-1=7$ sits strictly between $P(2^-)=8$ and $P(2^+)=6$, since the floor (right-continuous) has stepped at $q=2$ but the ceiling (left-continuous) has not — this does not change the jump size $|8-6|=2$. $\\boxed{6}.$"
    ]
   }
  ],
  "remark": "Insight: a real-world 'ladder' price is a monotone step function, so all its discontinuities are jumps and the cumulative drop is forced to equal $P(0)-P(4)$ no matter how the steps are arranged. The genuine subtlety is timing and sidedness. A floor steps as $q$ passes each integer and is right-continuous; a ceiling of $q/2$ steps as $q$ leaves each even integer and is left-continuous. They coincide only at $q=2$, where the mismatch in continuity side leaves the function value $P(2)=7$ stranded strictly between its two one-sided limits. Matching totals can hide a wrong per-point breakdown, so always pin each jump to the side and instant where the relevant staircase actually moves."
 },
 {
  "theme": "hybrid",
  "themeLabel": "The Grand Hybrids",
  "title": "The Cosine Conspiracy",
  "difficulty": 5,
  "task": "Determine",
  "tags": [
   "functional-equation",
   "ivt",
   "continuity",
   "monotonicity",
   "dalembert"
  ],
  "statement": "Let $f:\\mathbb{R}\\to\\mathbb{R}$ be continuous with $f(0)=1$ and \\[ f(x+y)+f(x-y)=2\\,f(x)\\,f(y)\\qquad\\text{for all }x,y\\in\\mathbb{R}. \\] Suppose in addition that $f$ is (weakly) decreasing on $[0,1]$ and that $f(1)=\\tfrac12$. Determine $f\\!\\left(\\tfrac12\\right)$.",
  "answer": "\\[ f\\!\\left(\\tfrac12\\right)=\\boxed{\\dfrac{\\sqrt3}{2}}. \\] The single substitution $x=y=\\tfrac12$ in the functional equation gives $f(1)+f(0)=2f(\\tfrac12)^2$, i.e. $\\tfrac12+1=2f(\\tfrac12)^2$, so $f(\\tfrac12)^2=\\tfrac34$ and $f(\\tfrac12)=\\pm\\tfrac{\\sqrt3}{2}$. The decreasing-on-$[0,1]$ hypothesis forces $f(\\tfrac12)\\ge f(1)=\\tfrac12>0$, selecting the positive root $\\tfrac{\\sqrt3}{2}$. (Consistently, the d'Alembert classification gives $f(x)=\\cos(bx)$ with $\\cos b=\\tfrac12$, and monotonicity pins $b=\\pi/3$, whence $f(\\tfrac12)=\\cos\\tfrac{\\pi}{6}=\\tfrac{\\sqrt3}{2}$.)",
  "trap": "Stopping at $f(\\tfrac12)^2=\\tfrac34$ and reporting $\\pm\\tfrac{\\sqrt3}{2}$, or worse picking the negative root $-\\tfrac{\\sqrt3}{2}$. Both square roots are algebraically admissible and BOTH arise from genuine continuous solutions of the equation (the branch $\\cos(\\tfrac{\\pi}{3}x)$ versus the branch $\\cos(\\tfrac{5\\pi}{3}x)$, each satisfying $f(0)=1,f(1)=\\tfrac12$). Only the monotonicity hypothesis on $[0,1]$ breaks the tie: a function decreasing from $f(0)=1$ to $f(1)=\\tfrac12$ must have $f(\\tfrac12)\\in[\\tfrac12,1]$, eliminating $-\\tfrac{\\sqrt3}{2}$. Without that hypothesis the value is genuinely undetermined.",
  "solutions": [
   {
    "name": "One substitution + monotone sign selection",
    "steps": [
     "Set $x=0$ in the equation: $f(y)+f(-y)=2f(0)f(y)=2f(y)$, so $f(-y)=f(y)$ and $f$ is even. (Not needed below, but it confirms the symmetric structure.)",
     "Set $x=y=\\tfrac12$: $f(1)+f(0)=2f(\\tfrac12)^2$. With $f(1)=\\tfrac12$ and $f(0)=1$ this reads $\\tfrac32=2f(\\tfrac12)^2$, hence $f(\\tfrac12)^2=\\tfrac34$ and $f(\\tfrac12)=\\pm\\tfrac{\\sqrt3}{2}$.",
     "Resolve the sign by monotonicity. Since $f$ is (weakly) decreasing on $[0,1]$ and $0\\le\\tfrac12\\le 1$, we have $f(0)\\ge f(\\tfrac12)\\ge f(1)$, i.e. $1\\ge f(\\tfrac12)\\ge\\tfrac12$. The candidate $-\\tfrac{\\sqrt3}{2}\\approx-0.87$ violates $f(\\tfrac12)\\ge\\tfrac12$, so it is rejected.",
     "Therefore $f(\\tfrac12)=\\tfrac{\\sqrt3}{2}$. $\\boxed{\\tfrac{\\sqrt3}{2}}$. Note that no classification of all solutions was needed: the functional equation plus the order hypothesis settles the value directly."
    ]
   },
   {
    "name": "d'Alembert classification + IVT pinning",
    "steps": [
     "For continuous solutions of $f(x+y)+f(x-y)=2f(x)f(y)$ with $f(0)=1$, the standard d'Alembert classification gives $f(x)=\\cos(bx)$ (values dip below $1$), or $f(x)=\\cosh(bx)$, or $f\\equiv1$. Since $f(1)=\\tfrac12<1$, the hyperbolic and constant cases are excluded, leaving $f(x)=\\cos(bx)$ with $b>0$ and $\\cos b=\\tfrac12$.",
     "The decreasing-on-$[0,1]$ hypothesis means $-b\\sin(bx)\\le0$ for all $x\\in[0,1]$, i.e. $\\sin(bx)\\ge0$ on $[0,1]$, which holds iff $bx\\in[0,\\pi]$ for all such $x$, i.e. $b\\le\\pi$. So $b\\in(0,\\pi]$.",
     "On $(0,\\pi]$ the map $b\\mapsto\\cos b$ is continuous and strictly decreasing from $1$ to $-1$; by this strict monotonicity (a one-to-one IVT argument) there is a unique $b\\in(0,\\pi]$ with $\\cos b=\\tfrac12$, namely $b=\\tfrac{\\pi}{3}$. All other roots $b=\\tfrac{5\\pi}{3},\\tfrac{7\\pi}{3},\\dots$ exceed $\\pi$ and are killed by the monotonicity hypothesis.",
     "Hence $f(x)=\\cos\\!\\big(\\tfrac{\\pi}{3}x\\big)$ and $f(\\tfrac12)=\\cos\\tfrac{\\pi}{6}=\\tfrac{\\sqrt3}{2}$. (As a cross-check, the recurrence $y=1$ gives $f(x+1)+f(x-1)=f(x)$ with characteristic roots $e^{\\pm i\\pi/3}$, matching $b=\\tfrac{\\pi}{3}$; this also yields the period $6$, so $f(2025)=f(3)=-1$.) $\\boxed{\\tfrac{\\sqrt3}{2}}$"
    ]
   }
  ],
  "remark": "Insight: d'Alembert's equation is the parent of $\\cos$ and $\\cosh$; the single inequality $f(1)<1$ chooses the trigonometric branch. The value asked here is deliberately at a half-integer, where the competing roots of $\\cos b=\\tfrac12$ genuinely disagree ($\\cos\\tfrac{\\pi}{6}=+\\tfrac{\\sqrt3}{2}$ versus $\\cos\\tfrac{5\\pi}{6}=-\\tfrac{\\sqrt3}{2}$). That is why the monotonicity hypothesis is not decoration but the load-bearing IVT-style selector: it converts the two-valued $f(\\tfrac12)^2=\\tfrac34$ into a single answer. Contrast this with integer arguments such as $2025$, where the recurrence $f(n+1)=f(n)-f(n-1)$ forces the same value on every branch regardless of monotonicity."
 },
 {
  "theme": "hybrid",
  "themeLabel": "The Grand Hybrids",
  "title": "The Two Faces of the Rationals",
  "difficulty": 5,
  "task": "Find all",
  "tags": [
   "pathological",
   "sequential-criterion",
   "epsilon-delta",
   "continuity",
   "dirichlet"
  ],
  "statement": "Define $f:\\mathbb{R}\\to\\mathbb{R}$ by \\[ f(x)=\\begin{cases} x, & x\\in\\mathbb{Q},\\\\[2pt] 1-x, & x\\notin\\mathbb{Q}. \\end{cases} \\] Find all points at which $f$ is continuous. At each such point give an honest $\\varepsilon$\\nobreakdash-$\\delta$ proof of continuity, and at every other point exhibit a sequence witnessing the failure.",
  "answer": "$f$ is continuous at exactly one point: \\[ \\boxed{\\;x=\\tfrac12\\;}. \\] (At $x_0$, approaching through rationals gives limit $x_0$ and through irrationals gives limit $1-x_0$; both must equal $f(x_0)$, which forces $x_0=1-x_0$, i.e. $x_0=\\tfrac12$.)",
  "trap": "Declaring $f$ nowhere continuous because it 'jumps between two formulas.' Both branches $x$ and $1-x$ are themselves continuous, and they agree precisely where $x=1-x$; at that crossing the two limiting values coincide, so the oscillation collapses and continuity holds at $x=\\tfrac12$.",
  "solutions": [
   {
    "name": "Forcing the point + epsilon-delta",
    "steps": [
     "Suppose $f$ is continuous at $x_0$. Take rationals $q_n\\to x_0$: $f(q_n)=q_n\\to x_0$, so $f(x_0)=x_0$ (sequential criterion). Take irrationals $r_n\\to x_0$: $f(r_n)=1-r_n\\to 1-x_0$, so $f(x_0)=1-x_0$.",
     "Hence $x_0=1-x_0\\Rightarrow x_0=\\tfrac12$. At any $x_0\\ne\\tfrac12$, the two sequences above give different limits, so $f$ is discontinuous (sequential failure exhibited).",
     "Now prove continuity at $\\tfrac12$ by $\\varepsilon$-$\\delta$. Note $f(\\tfrac12)=\\tfrac12$. For rational $x$: $|f(x)-\\tfrac12|=|x-\\tfrac12|$. For irrational $x$: $|f(x)-\\tfrac12|=|1-x-\\tfrac12|=|\\tfrac12-x|=|x-\\tfrac12|$.",
     "In both cases $|f(x)-f(\\tfrac12)|=|x-\\tfrac12|$. Given $\\varepsilon>0$ choose $\\delta=\\varepsilon$; then $|x-\\tfrac12|<\\delta\\Rightarrow|f(x)-f(\\tfrac12)|<\\varepsilon$. Continuity at $\\tfrac12$ holds. $\\boxed{\\{1/2\\}}$"
    ]
   },
   {
    "name": "Curve-crossing picture",
    "steps": [
     "Plot the two graphs $y=x$ (sampled at rationals) and $y=1-x$ (sampled at irrationals). Every vertical line $x=x_0$ carries $f(x_0)$ on one curve while points arbitrarily near $x_0$ scatter densely onto BOTH curves.",
     "The cluster set of $f$ near $x_0$ is therefore $\\{x_0,\\,1-x_0\\}$. Continuity requires this two-point cluster set to be the single value $f(x_0)$, i.e. $x_0=1-x_0$.",
     "The lines $y=x$ and $y=1-x$ intersect only at $(\\tfrac12,\\tfrac12)$; there the dense scatter is squeezed (since $|x-\\tfrac12|$ controls both branches), giving continuity exactly at $x=\\tfrac12$. $\\boxed{\\{1/2\\}}$"
    ]
   }
  ],
  "remark": "Insight: a function glued from two continuous pieces over $\\mathbb{Q}$ and its complement is continuous exactly where the pieces agree as functions, because the density of $\\mathbb{Q}$ and of its complement forces both limiting values to compete at every point. The lone survivor here is the fixed point of the symmetry $x\\mapsto1-x$."
 },
 {
  "theme": "hybrid",
  "themeLabel": "The Grand Hybrids",
  "title": "The Mirror Forces a Fixed Point",
  "difficulty": 5,
  "task": "Prove that",
  "tags": [
   "ivt",
   "functional-equation",
   "fixed-point",
   "symmetry",
   "continuity"
  ],
  "statement": "Let $f:[0,1]\\to[0,1]$ be continuous with $f(0)=1$, $f(1)=0$, and \\[ f(x)+f(1-x)=1\\qquad\\text{for all }x\\in[0,1]. \\] Prove that $f$ has at least one fixed point, and identify a fixed point that the hypotheses pin down explicitly. Then prove that $f$ takes the value $\\tfrac12$.",
  "answer": "$f$ has a fixed point; in fact \\[ f\\!\\left(\\tfrac12\\right)=\\tfrac12, \\] so $\\boxed{x=\\tfrac12}$ is a guaranteed fixed point, and since $\\tfrac12$ is a value of $f$ the second claim follows immediately. (Existence of \\emph{some} fixed point also follows from IVT applied to $h(x)=f(x)-x$, which has $h(0)=1>0$, $h(1)=-1<0$.) Answer: proved.",
  "trap": "Reaching for Brouwer's fixed-point theorem or an elaborate IVT estimate while overlooking that the symmetry relation, evaluated at the single point $x=\\tfrac12$, hands you the fixed point for free. The symmetry does the heavy lifting; IVT is only needed if you ignore it.",
  "solutions": [
   {
    "name": "Symmetry at the center",
    "steps": [
     "Put $x=\\tfrac12$ in $f(x)+f(1-x)=1$: since $1-\\tfrac12=\\tfrac12$, the two terms coincide and we get $2f(\\tfrac12)=1$, hence $f(\\tfrac12)=\\tfrac12$.",
     "Therefore $x=\\tfrac12$ satisfies $f(x)=x$: it is a fixed point. This also shows $\\tfrac12$ is a value of $f$, proving the last claim.",
     "Conclusion: a fixed point exists and equals $\\tfrac12$, no theorem invoked. $\\blacksquare$ (proved)"
    ]
   },
   {
    "name": "IVT on the displacement (existence, no symmetry)",
    "steps": [
     "Let $h(x)=f(x)-x$, continuous on $[0,1]$ as a difference of continuous functions.",
     "$h(0)=f(0)-0=1>0$ and $h(1)=f(1)-1=0-1=-1<0$.",
     "By the Intermediate Value Theorem there is some $c\\in(0,1)$ with $h(c)=0$, i.e. $f(c)=c$: a fixed point exists. (This $c$ need not equal $\\tfrac12$ in general; the symmetry of Solution 1 is what singles out the canonical fixed point $x=\\tfrac12$ and gives $f(\\tfrac12)=\\tfrac12$.) $\\blacksquare$ (proved)"
    ]
   },
   {
    "name": "Averaging argument for the value 1/2",
    "steps": [
     "Define $g(x)=f(x)-\\tfrac12$. The relation becomes $g(x)+g(1-x)=0$, so $g$ is odd about $x=\\tfrac12$; in particular $g(0)=\\tfrac12$ and $g(1)=-\\tfrac12$ have opposite signs.",
     "Since $g$ is continuous on $[0,1]$ with $g(0)>0>g(1)$, IVT yields a point where $g=0$, i.e. $f=\\tfrac12$. The point $x=\\tfrac12$ itself gives $g(\\tfrac12)=0$ directly.",
     "Thus $f$ attains $\\tfrac12$ and $x=\\tfrac12$ is a fixed point. $\\blacksquare$ (proved)"
    ]
   }
  ],
  "remark": "Insight: a symmetry relation evaluated at its own center of symmetry frequently produces the answer with no analysis at all; IVT is the safety net for existence when the explicit value is not handed to you. Note that $f$ may possess additional fixed points (e.g. a wiggly admissible $f$ can be fixed at $0.3548$, $0.5$, $0.6452$), but $x=\\tfrac12$ is the one the hypotheses guarantee. Both routes converge on the symmetry's fixed center $x=\\tfrac12$."
 },
 {
  "theme": "hybrid",
  "themeLabel": "The Grand Hybrids",
  "title": "The Removable Disguise and the Extreme Value",
  "difficulty": 5,
  "task": "Determine",
  "tags": [
   "parametric",
   "discontinuity",
   "continuity",
   "evt",
   "removable"
  ],
  "statement": "For a real parameter $a$ define $f_a:\\mathbb{R}\\to\\mathbb{R}$ by \\[ f_a(x)=\\frac{x^2-(a+1)x+a}{x-1}\\ \\ (x\\ne1),\\qquad f_a(1)=a. \\] (i) Classify the discontinuity of $f_a$ at $x=1$ for each $a$. (ii) Find the value of $a$ making $f_a$ continuous on all of $\\mathbb{R}$. (iii) For that value, use the Extreme Value Theorem to find the maximum and minimum of $f_a$ on $[0,2]$.",
  "answer": "(i) For $x\\ne1$, $f_a(x)=x-a$, and $\\lim_{x\\to1}f_a(x)=1-a$ while $f_a(1)=a$; so for $a\\ne\\tfrac12$ there is a \\textbf{removable discontinuity} at $x=1$ (limit exists but $\\ne$ value), and $f_a$ is continuous elsewhere. (ii) Continuity everywhere $\\iff a=1-a\\iff \\boxed{a=\\tfrac12}$. (iii) Then $f(x)=x-\\tfrac12$ on $[0,2]$, so by EVT \\[ \\min=f(0)=-\\tfrac12,\\qquad \\max=f(2)=\\tfrac32. \\]",
  "trap": "Calling the discontinuity at $x=1$ a 'pole'/infinite discontinuity because the denominator vanishes. The numerator factors as $(x-1)(x-a)$, so the singularity cancels: the true gap at $x=1$ is removable (a finite mismatch $1-a$ vs $a$), not a blow-up. Also, forgetting to check endpoints in (iii) — EVT's extrema for a monotone line sit at the endpoints, not the interior.",
  "solutions": [
   {
    "name": "Factor, then EVT",
    "steps": [
     "Factor the numerator: $x^2-(a+1)x+a=(x-1)(x-a)$. Hence for $x\\ne1$, $f_a(x)=x-a$.",
     "The limit as $x\\to1$ is $1-a$ (finite), while the assigned value is $f_a(1)=a$. So the discontinuity is removable for $a\\ne\\tfrac12$ and absent when $a=\\tfrac12$. Setting $1-a=a$ gives $a=\\tfrac12$ for global continuity.",
     "With $a=\\tfrac12$, $f(x)=x-\\tfrac12$ is continuous on the compact interval $[0,2]$, so EVT guarantees a max and min. Being strictly increasing, $f$ attains its minimum at $x=0$ and maximum at $x=2$: $\\min=-\\tfrac12$, $\\max=\\tfrac32$. $\\boxed{a=\\tfrac12,\\ \\min=-\\tfrac12,\\ \\max=\\tfrac32}$"
    ]
   },
   {
    "name": "Limit matching + monotonicity",
    "steps": [
     "For continuity at $1$ we need $\\lim_{x\\to1}f_a(x)=f_a(1)$. Compute $\\lim_{x\\to1}\\frac{(x-1)(x-a)}{x-1}=\\lim_{x\\to1}(x-a)=1-a$.",
     "Equate to $f_a(1)=a$: $1-a=a\\Rightarrow a=\\tfrac12$. For $a\\ne\\tfrac12$ the limit still exists finitely, certifying a removable discontinuity (redefining $f_a(1):=1-a$ would repair it).",
     "On $[0,2]$ with $a=\\tfrac12$, $f'(x)=1>0$, so $f$ is increasing; its range is $[f(0),f(2)]=[-\\tfrac12,\\tfrac32]$. The EVT extrema are therefore $\\min=-\\tfrac12$ (at $0$), $\\max=\\tfrac32$ (at $2$). $\\boxed{a=\\tfrac12,\\ [-\\tfrac12,\\tfrac32]}$"
    ]
   }
  ],
  "remark": "Insight: a vanishing denominator is not automatically a pole — always factor first. Once the disguise is removed the function is a line, and EVT for a strictly monotone function always delivers its extrema at the endpoints of a closed interval."
 },
 {
  "theme": "hybrid",
  "themeLabel": "The Grand Hybrids",
  "title": "The Exponential Born from Addition",
  "difficulty": 5,
  "task": "Find all",
  "tags": [
   "functional-equation",
   "monotone",
   "continuity",
   "exponential-cauchy",
   "injectivity"
  ],
  "statement": "Let $f:\\mathbb{R}\\to\\mathbb{R}$ be continuous, not identically zero, and satisfy \\[ f(x+y)=f(x)\\,f(y)\\qquad\\text{for all }x,y\\in\\mathbb{R},\\qquad f(1)=4. \\] Prove that $f$ is strictly increasing, and find all real $x$ with $f(x)=8$. Also evaluate $f\\!\\left(\\tfrac12\\right)$.",
  "answer": "The only continuous nonzero solution is \\[ f(x)=4^{x}=2^{2x}, \\] which is strictly increasing. Then $4^{x}=8\\iff 2^{2x}=2^{3}\\iff x=\\tfrac32$, so the unique solution is \\[ \\boxed{x=\\tfrac32},\\qquad f\\!\\left(\\tfrac12\\right)=4^{1/2}=\\boxed{2}. \\]",
  "trap": "Admitting the spurious solution $f\\equiv0$ or claiming $f$ could be negative/oscillatory. Setting $y=x$ gives $f(2x)=f(x)^2\\ge0$, and 'not identically zero' forces $f>0$ everywhere; the constraint $f(1)=4$ then rules out $f\\equiv1$. Forgetting positivity also tempts one to write $4^x$ as possibly multi-valued, manufacturing extra roots of $f(x)=8$.",
  "solutions": [
   {
    "name": "Positivity then logarithm",
    "steps": [
     "From $f(x)=f(\\tfrac{x}{2}+\\tfrac{x}{2})=f(\\tfrac{x}{2})^2\\ge0$, $f$ is nonnegative. If $f(c)=0$ for some $c$, then $f(x)=f(c)f(x-c)=0$ for all $x$, contradicting nonzero. Hence $f>0$ everywhere.",
     "Let $g=\\ln f$, continuous, with $g(x+y)=g(x)+g(y)$ (additive). Continuous additive functions are linear: $g(x)=kx$, so $f(x)=e^{kx}$. From $f(1)=4$, $e^k=4\\Rightarrow k=\\ln4>0$.",
     "Thus $f(x)=4^x$, strictly increasing because $k>0$. Solve $4^x=8$: $2^{2x}=2^3\\Rightarrow 2x=3\\Rightarrow x=\\tfrac32$ (unique by injectivity). And $f(\\tfrac12)=4^{1/2}=2$. $\\boxed{x=\\tfrac32,\\ f(\\tfrac12)=2}$"
    ]
   },
   {
    "name": "Dyadic ladder + continuity",
    "steps": [
     "By induction $f(n)=f(1)^n=4^n$ for integers $n$, and $f(\\tfrac1n)^n=f(1)=4$ gives $f(\\tfrac1n)=4^{1/n}$ (positive root, since $f>0$). Hence $f(q)=4^q$ for all rationals $q$.",
     "$x\\mapsto4^x$ is continuous and agrees with $f$ on the dense set $\\mathbb{Q}$; two continuous functions equal on a dense set are equal, so $f(x)=4^x$ on $\\mathbb{R}$.",
     "$4^x$ is strictly increasing; $4^x=8\\Rightarrow x\\log_2 4=\\log_2 8\\Rightarrow 2x=3\\Rightarrow x=\\tfrac32$, and $f(\\tfrac12)=2$. $\\boxed{x=\\tfrac32,\\ f(\\tfrac12)=2}$"
    ]
   }
  ],
  "remark": "Insight: the multiplicative Cauchy equation $f(x+y)=f(x)f(y)$ is the additive one in disguise — take logs after proving positivity. Monotonicity is a free byproduct of the sign of the slope $k$, and it is precisely what makes $f(x)=8$ have a unique root."
 },
 {
  "theme": "hybrid",
  "themeLabel": "The Grand Hybrids",
  "title": "The Slope Pinned by a Sequence",
  "difficulty": 5,
  "task": "Find all",
  "tags": [
   "functional-equation",
   "sequence",
   "fixed-point-iteration",
   "continuity",
   "cauchy"
  ],
  "statement": "Let $f:\\mathbb{R}\\to\\mathbb{R}$ be \\emph{continuous} and additive, i.e.\n\\[\nf(x+y)=f(x)+f(y)\\qquad\\text{for all }x,y\\in\\mathbb{R}.\n\\]\nDefine a sequence by $a_0=0$ and $a_{n+1}=f(a_n)+1$. It is given that $a_n\\to 2$ as $n\\to\\infty$. Find $f$ explicitly, and compute $f(10)$.",
  "answer": "Continuity upgrades the Cauchy equation to linearity: $f(x)=cx$ with $c=f(1)$. The recursion becomes the affine iteration $a_{n+1}=c\\,a_n+1$, whose closed form is $a_n=\\dfrac{1-c^{\\,n}}{1-c}$ (for $c\\ne1$). This converges \\emph{iff} $|c|<1$, with limit $\\dfrac{1}{1-c}$. Matching the limit, $\\dfrac{1}{1-c}=2\\Rightarrow c=\\tfrac12$, and indeed $|\\tfrac12|<1$, so the hypothesis $a_n\\to2$ is genuinely realizable (not merely a formal fixed point). Hence\n\\[\nf(x)=\\tfrac{x}{2},\\qquad f(10)=\\boxed{5}.\n\\]",
  "trap": "Two errors masquerade as solutions. First, dropping the convergence test $|c|<1$: a single sign slip in $\\frac{1}{1-c}=2$ gives $1-c=-\\tfrac12$, hence $c=\\tfrac32$ and a tempting $f(10)=15$ -- but for $c=\\tfrac32$ the iteration $a_{n+1}=\\tfrac32 a_n+1$ \\emph{diverges} ($a_n\\to+\\infty$), so $a_n\\to2$ is impossible and the value is spurious. The inequality $|c|<1$ is exactly what filters such phantom slopes. Second, forgetting that continuity is what forces linearity: additivity \\emph{alone} admits pathological Hamel-basis solutions that are unbounded on every interval, for which the sequence need not converge and $f(10)$ is not even determined. Only with the given continuity does $f(x)=cx$, and only with $|c|<1$ does the data hold -- both hypotheses are load-bearing.",
  "solutions": [
   {
    "name": "Cauchy + contraction (closed form)",
    "steps": [
     "A continuous additive function is linear. From additivity, $f(qx)=qf(x)$ for all rationals $q$; continuity extends this to all reals, giving $f(x)=cx$ with $c=f(1)$. (Without continuity this fails: Hamel-basis solutions exist.)",
     "Substituting, the recursion is the affine iteration $a_{n+1}=c\\,a_n+1$. With $a_0=0$ its closed form is $a_n=\\dfrac{1-c^{\\,n}}{1-c}$ for $c\\ne1$ (and $a_n=n$ if $c=1$).",
     "The factor $c^{\\,n}\\to0$ iff $|c|<1$; then $a_n\\to\\dfrac{1}{1-c}$. If $|c|\\ge1$ the sequence diverges or oscillates, so no finite limit exists.",
     "Matching the given limit: $\\dfrac{1}{1-c}=2\\Rightarrow 1-c=\\tfrac12\\Rightarrow c=\\tfrac12$, which satisfies $|c|<1$. Thus the hypotheses are consistent, $f(x)=\\tfrac{x}{2}$, and $f(10)=5$. $\\boxed{5}$"
    ]
   },
   {
    "name": "Fixed point of the limit (with stability check)",
    "steps": [
     "As above, continuity forces $f(x)=cx$, so $a_{n+1}=c\\,a_n+1$. Assume the limit $a_n\\to L$ exists; passing to the limit in the recursion (the map $t\\mapsto ct+1$ is continuous) gives the fixed-point relation $L=cL+1$.",
     "With $L=2$: $2=2c+1\\Rightarrow c=\\tfrac12$. But a fixed point alone is not enough -- we must confirm it is \\emph{attracting}, else assuming the limit exists is unjustified.",
     "The iteration map $\\phi(t)=ct+1$ has constant derivative $|\\phi'(t)|=|c|=\\tfrac12<1$, so $\\phi$ is a contraction; by Banach the iterates converge to the unique fixed point from any start, in particular from $a_0=0$. The assumed convergence is therefore genuine.",
     "Hence $f(x)=\\tfrac{x}{2}$ and $f(10)=5$. $\\boxed{5}$"
    ]
   },
   {
    "name": "Direct telescoping bound (no closed form)",
    "steps": [
     "With $f(x)=cx$, subtract the fixed point $L=\\tfrac{1}{1-c}$: let $e_n=a_n-L$. Then $e_{n+1}=a_{n+1}-L=(c\\,a_n+1)-(cL+1)=c\\,e_n$, so $e_n=c^{\\,n}e_0$.",
     "Thus $|a_n-L|=|c|^{\\,n}\\,|a_0-L|$, which tends to $0$ precisely when $|c|<1$, and then $a_n\\to L=\\tfrac{1}{1-c}$; for $|c|\\ge1$ the error never shrinks, so convergence to $2$ would be impossible.",
     "Setting $L=2$ forces $\\tfrac{1}{1-c}=2$, i.e. $c=\\tfrac12$ (which obeys $|c|<1$). The error then decays as $|a_n-2|=\\tfrac12^{\\,n}\\cdot 2=2^{1-n}\\to0$, confirming the rate. Therefore $f(x)=\\tfrac{x}{2}$ and $f(10)=5$. $\\boxed{5}$"
    ]
   }
  ],
  "remark": "Insight: a functional equation supplies the \\emph{form} of $f$ -- here a one-parameter family $cx$, but only after continuity rules out the wild additive solutions -- while the auxiliary sequence supplies the \\emph{equation} that pins the parameter. The limit relation $L=cL+1$ is exactly the fixed-point equation of the affine iteration, and the contraction condition $|c|<1$ is what makes the data self-consistent: it both selects the true slope $c=\\tfrac12$ and rejects phantom slopes such as the sign-slipped $c=\\tfrac32$, for which the iteration runs off to infinity and the stated limit could never occur."
 },
 {
  "theme": "hybrid",
  "themeLabel": "The Grand Hybrids",
  "title": "Thomae's Sieve",
  "difficulty": 5,
  "task": "Find all",
  "tags": [
   "thomae",
   "pathological",
   "sequential-criterion",
   "epsilon-delta",
   "continuity"
  ],
  "statement": "Let $f:(0,1)\\to\\mathbb{R}$ be Thomae's function \\[ f(x)=\\begin{cases} \\dfrac1q, & x=\\dfrac{p}{q}\\text{ in lowest terms},\\ q\\ge1,\\\\[6pt] 0, & x\\text{ irrational}. \\end{cases} \\] Find all points of $(0,1)$ at which $f$ is continuous. Prove discontinuity at the rationals via a sequence, and continuity at the irrationals via an $\\varepsilon$\\nobreakdash-$\\delta$ argument.",
  "answer": "$f$ is continuous at \\textbf{every irrational} in $(0,1)$ and discontinuous at \\textbf{every rational}: \\[ \\boxed{\\text{continuity set}=(0,1)\\setminus\\mathbb{Q}.} \\]",
  "trap": "Believing that because $f$ is discontinuous on the dense set $\\mathbb{Q}$ it must be discontinuous 'almost everywhere' or nowhere continuous. In fact it is continuous on the (denser, full-measure) set of irrationals: the values $1/q$ shrink to $0$ as denominators grow, so near any irrational only large-denominator rationals appear, and they carry tiny values.",
  "solutions": [
   {
    "name": "Two-sided proof",
    "steps": [
     "Discontinuity at rationals (sequential): let $x_0=p/q$ in lowest terms, so $f(x_0)=1/q>0$. Choose irrationals $r_n\\to x_0$ (the irrationals are dense). Then $f(r_n)=0\\not\\to1/q$. The sequential criterion fails, so $f$ is discontinuous at $x_0$.",
     "Continuity at irrationals ($\\varepsilon$-$\\delta$): fix irrational $x_0$, so $f(x_0)=0$. Given $\\varepsilon>0$, pick $N$ with $1/N<\\varepsilon$. There are only finitely many rationals $p/q\\in(0,1)$ with $q\\le N$ (at most $N^2$ of them); let $\\delta$ be the (positive) distance from $x_0$ to this finite set.",
     "If $0<|x-x_0|<\\delta$: when $x$ is irrational, $f(x)=0$; when $x=p/q$ is rational it must have $q>N$ (it avoided the finite low-denominator set), so $f(x)=1/q<1/N<\\varepsilon$. In all cases $|f(x)-0|<\\varepsilon$.",
     "Hence $f$ is continuous at $x_0$ iff $x_0$ is irrational; the continuity set is $(0,1)\\setminus\\mathbb{Q}$. $\\boxed{(0,1)\\setminus\\mathbb{Q}}$"
    ]
   },
   {
    "name": "Oscillation viewpoint",
    "steps": [
     "The oscillation of $f$ at $x_0$ is $\\omega(x_0)=\\lim_{\\delta\\to0^+}\\big(\\sup_{|x-x_0|<\\delta}f-\\inf_{|x-x_0|<\\delta}f\\big)$; $f$ is continuous at $x_0$ iff $\\omega(x_0)=0$.",
     "Since irrationals are dense and $f=0$ there, $\\inf_{|x-x_0|<\\delta}f=0$ for every $\\delta$. So $\\omega(x_0)=\\lim_{\\delta\\to0}\\sup_{|x-x_0|<\\delta}f$.",
     "For irrational $x_0$: the finitely-many-low-denominators argument (Solution 1) gives $\\sup\\to0$, so $\\omega(x_0)=0$ — continuous. For rational $x_0=p/q$: $f(x_0)=1/q$ is itself in every neighborhood, so $\\sup\\ge1/q$ and $\\omega(x_0)\\ge1/q>0$ — discontinuous.",
     "Continuity set $=(0,1)\\setminus\\mathbb{Q}$. $\\boxed{(0,1)\\setminus\\mathbb{Q}}$"
    ]
   }
  ],
  "remark": "Insight: Thomae's function is the canonical example of a function continuous on a dense (indeed full-measure) set yet discontinuous on another dense set. The decisive structural fact is that 'small values cluster': for any tolerance only finitely many points exceed it, so isolation by a $\\delta$ is always possible around irrationals."
 },
 {
  "theme": "hybrid",
  "themeLabel": "The Grand Hybrids",
  "title": "The Cosine Crater",
  "difficulty": 5,
  "task": "Determine",
  "tags": [
   "parametric",
   "removable",
   "continuity",
   "evt",
   "limits"
  ],
  "statement": "For a real parameter $a$ define \\[ g_a(x)=\\frac{\\cos x-1}{x^{2}}\\ \\ (x\\ne0),\\qquad g_a(0)=a. \\] (i) Classify the discontinuity of $g_a$ at $0$ and find the unique $a$ making $g_a$ continuous at $0$. (ii) For that $a$, $g_a$ is continuous on $[-\\pi,\\pi]$; use the Extreme Value Theorem to find its maximum and minimum there.",
  "answer": "(i) $\\displaystyle\\lim_{x\\to0}\\frac{\\cos x-1}{x^2}=-\\tfrac12$, a finite limit, so the discontinuity at $0$ is \\textbf{removable} for $a\\ne-\\tfrac12$, and $g_a$ is continuous at $0$ exactly when $\\boxed{a=-\\tfrac12}$. (ii) With $a=-\\tfrac12$, on $[-\\pi,\\pi]$ the function is even and increasing in $|x|$, so by EVT \\[ \\min=g\\,(0)=-\\tfrac12,\\qquad \\max=g(\\pm\\pi)=-\\frac{2}{\\pi^{2}}. \\]",
  "trap": "Guessing the limit is $0$ (numerator $\\to0$) or applying l'Hopital only once and stopping at the indeterminate $\\frac{-\\sin x}{2x}$. The correct value $-\\tfrac12$ needs the Taylor estimate $\\cos x-1\\sim-\\tfrac{x^2}{2}$ (or two applications of l'Hopital). Also, mislocating the EVT extrema: since the function is monotone in $|x|$, its max is at the endpoints $\\pm\\pi$ and its min at $0$, not the reverse.",
  "solutions": [
   {
    "name": "Taylor + monotonicity + EVT",
    "steps": [
     "Taylor: $\\cos x-1=-\\tfrac{x^2}{2}+\\tfrac{x^4}{24}-\\cdots$, so $\\dfrac{\\cos x-1}{x^2}=-\\tfrac12+\\tfrac{x^2}{24}-\\cdots\\to-\\tfrac12$. The limit is finite, so the discontinuity is removable; continuity needs $a=-\\tfrac12$.",
     "Set $g(x)=\\dfrac{\\cos x-1}{x^2}$ for $x\\ne0$, $g(0)=-\\tfrac12$. Then $g$ is even and continuous on the compact set $[-\\pi,\\pi]$, so EVT applies.",
     "From the series $g(x)=-\\tfrac12+\\tfrac{x^2}{24}-\\cdots$, and a derivative check ($g'(x)=\\frac{-x\\sin x-2\\cos x+2}{x^3}>0$ on $(0,\\pi)$), $g$ is strictly increasing in $|x|$ on $[0,\\pi]$.",
     "Hence the minimum is at $x=0$: $g(0)=-\\tfrac12$; the maximum is at the endpoints $x=\\pm\\pi$: $g(\\pm\\pi)=\\dfrac{\\cos\\pi-1}{\\pi^2}=\\dfrac{-2}{\\pi^2}$. $\\boxed{a=-\\tfrac12,\\ \\min=-\\tfrac12,\\ \\max=-\\tfrac{2}{\\pi^2}}$"
    ]
   },
   {
    "name": "Double l'Hopital + endpoint scan",
    "steps": [
     "$\\lim_{x\\to0}\\frac{\\cos x-1}{x^2}\\stackrel{H}{=}\\lim\\frac{-\\sin x}{2x}\\stackrel{H}{=}\\lim\\frac{-\\cos x}{2}=-\\tfrac12$. Finite limit $\\Rightarrow$ removable; continuity $\\iff a=-\\tfrac12$.",
     "Using the half-angle identity $\\cos x-1=-2\\sin^2(x/2)$, $g(x)=-\\dfrac{2\\sin^2(x/2)}{x^2}=-\\tfrac12\\Big(\\dfrac{\\sin(x/2)}{x/2}\\Big)^2$. Since $\\frac{\\sin t}{t}$ decreases in $|t|$ on $(0,\\pi/2]$, the squared factor decreases, so $g$ (with its minus sign) increases in $|x|$.",
     "Therefore on $[-\\pi,\\pi]$: $\\min g=g(0)=-\\tfrac12$ (where $\\frac{\\sin t}{t}=1$) and $\\max g=g(\\pm\\pi)=-\\tfrac12\\big(\\frac{\\sin(\\pi/2)}{\\pi/2}\\big)^2=-\\tfrac12\\cdot\\frac{4}{\\pi^2}=-\\tfrac{2}{\\pi^2}$. $\\boxed{a=-\\tfrac12,\\ [-\\tfrac12,-\\tfrac{2}{\\pi^2}]}$"
    ]
   }
  ],
  "remark": "Insight: the elegant identity $g(x)=-\\tfrac12\\,\\mathrm{sinc}^2(x/2)$ exposes both the removable value at $0$ (where $\\mathrm{sinc}=1$) and the monotonicity that EVT needs. The 'crater' is deepest at the center $x=0$ and shallowest at the rim $x=\\pm\\pi$."
 },
 {
  "theme": "hybrid",
  "themeLabel": "The Grand Hybrids",
  "title": "The Logarithm and the Single Crossing",
  "difficulty": 5,
  "task": "Determine",
  "tags": [
   "functional-equation",
   "monotone",
   "ivt",
   "logarithmic-cauchy",
   "root-counting"
  ],
  "statement": "Let $f:(0,\\infty)\\to\\mathbb{R}$ be continuous and satisfy \\[ f(xy)=f(x)+f(y)\\quad\\text{for all }x,y>0,\\qquad f(3)=1. \\] (a) Identify $f$ and prove it is strictly increasing. (b) Determine the exact number of solutions $x>0$ of the equation $f(x)+x=2$, and evaluate $f(81)+f\\!\\left(\\tfrac19\\right)$.",
  "answer": "(a) $f(x)=\\log_3 x$, strictly increasing (its derivative $1/(x\\ln3)>0$). (b) The function $h(x)=\\log_3 x+x-2$ is strictly increasing on $(0,\\infty)$ with $h(1)=-1<0$ and $h(3)=2>0$, so by IVT there is \\textbf{exactly one} root: \\[ \\#\\{x:f(x)+x=2\\}=\\boxed{1}. \\] Also $f(81)+f(\\tfrac19)=\\log_3 81+\\log_3\\tfrac19=4+(-2)=\\boxed{2}$.",
  "trap": "Trying to solve $\\log_3 x+x=2$ in closed form (it has no elementary solution) and then either inventing a bogus exact value or concluding 'no solution.' The point is to COUNT, not solve: strict monotonicity of $h$ makes it injective, so IVT (one sign change) yields exactly one crossing — no algebra needed.",
  "solutions": [
   {
    "name": "Cauchy log + monotone IVT count",
    "steps": [
     "Substituting $x=e^u$, $y=e^v$ and $F(u)=f(e^u)$ turns the equation into $F(u+v)=F(u)+F(v)$, additive and continuous, so $F(u)=ku$, i.e. $f(x)=k\\ln x$. From $f(3)=1$, $k\\ln3=1\\Rightarrow k=1/\\ln3$, giving $f(x)=\\log_3 x$, which is strictly increasing.",
     "For counting, let $h(x)=\\log_3 x+x-2$. Both $\\log_3 x$ and $x$ are strictly increasing, so $h$ is strictly increasing, hence injective: at most one root.",
     "$h(1)=0+1-2=-1<0$ and $h(3)=1+3-2=2>0$; $h$ is continuous on $[1,3]$, so by IVT it has a root there. With injectivity, the root is unique on all of $(0,\\infty)$: exactly $1$ solution.",
     "Finally $f(81)+f(\\tfrac19)=\\log_3 3^4+\\log_3 3^{-2}=4-2=2$. $\\boxed{\\#=1,\\ \\ f(81)+f(\\tfrac19)=2}$"
    ]
   },
   {
    "name": "Direct identification + sign analysis",
    "steps": [
     "The integer/rational ladder: $f(3^n)=n$ and $f(3^{p/q})=p/q$ follow from the equation; continuity extends this to $f(3^t)=t$, i.e. $f(x)=\\log_3 x$ for all $x>0$. Strictly increasing since $\\log_3$ is.",
     "Define $h(x)=\\log_3 x+x-2$. As $x\\to0^+$, $h\\to-\\infty$; as $x\\to\\infty$, $h\\to+\\infty$; and $h$ is strictly increasing throughout. A strictly increasing continuous function going from $-\\infty$ to $+\\infty$ crosses $0$ exactly once.",
     "Therefore the equation $f(x)+x=2$ has exactly one solution. And $f(81)+f(\\tfrac19)=4+(-2)=2$. $\\boxed{\\#=1,\\ \\ =2}$"
    ]
   }
  ],
  "remark": "Insight: the logarithmic Cauchy equation is the multiplicative-to-additive bridge, and once $f$ is identified as a strictly increasing logarithm, root-counting becomes a one-line IVT-plus-monotonicity argument. Counting beats solving when the equation is transcendental."
 },
 {
  "theme": "hybrid",
  "themeLabel": "The Grand Hybrids",
  "title": "The Doubling Map's Unique Heartbeat",
  "difficulty": 5,
  "task": "Find all",
  "tags": [
   "functional-equation",
   "iteration",
   "monotone",
   "fixed-point",
   "continuity"
  ],
  "statement": "Let $f:\\mathbb{R}\\to\\mathbb{R}$ be continuous and satisfy both \\[ f(x+y)=f(x)+f(y)\\ \\ \\text{for all }x,y,\\qquad\\text{and}\\qquad f\\bigl(f(x)\\bigr)=4x\\ \\ \\text{for all }x, \\] and suppose $f$ is increasing. Find $f$ explicitly, determine all fixed points of $f$, and compute $f\\bigl(f(f(1))\\bigr)$.",
  "answer": "Continuity + additivity gives $f(x)=cx$; the relation $f(f(x))=4x$ forces $c^2=4$, and increasing forces $c=2$. Hence \\[ f(x)=2x. \\] Fixed points: $2x=x\\Rightarrow x=0$, so the unique fixed point is $\\boxed{x=0}$, and \\[ f\\bigl(f(f(1))\\bigr)=2\\cdot2\\cdot2\\cdot1=\\boxed{8}. \\]",
  "trap": "Accepting $c=-2$ from $c^2=4$. While $f(x)=-2x$ also satisfies both functional equations (since $(-2)(-2)=4$), it is decreasing, so the monotonicity hypothesis rules it out. Dropping 'increasing' would wrongly produce two functions and a different value $f(f(f(1)))$.",
  "solutions": [
   {
    "name": "Linearize then select the sign",
    "steps": [
     "A continuous additive function is linear: $f(x)=cx$ with $c=f(1)$.",
     "Compute $f(f(x))=c(cx)=c^2x$. The hypothesis $f(f(x))=4x$ gives $c^2=4$, so $c=2$ or $c=-2$.",
     "'Increasing' means $c>0$, hence $c=2$ and $f(x)=2x$. Fixed points solve $2x=x\\Rightarrow x=0$ (unique).",
     "Finally $f(f(f(1)))=f(f(2))=f(4)=8$. $\\boxed{f(x)=2x,\\ \\text{fixed pt }0,\\ 8}$"
    ]
   },
   {
    "name": "Iterate and use monotone injectivity",
    "steps": [
     "Additivity + continuity $\\Rightarrow f(x)=cx$. Then $f$ is injective (as $c\\ne0$, forced because $f(f(x))=4x$ is a bijection).",
     "Apply $f$ to $f(f(x))=4x$: $f(4x)=f(f(f(x)))=4f(x)$, consistent with linearity and giving no new constraint; the binding equation remains $c^2=4$.",
     "Increasing $\\Rightarrow c=2$. Fixed points: $f(x)=x\\Leftrightarrow 2x=x\\Leftrightarrow x=0$. Compute $f^{3}(1)=2^3\\cdot1=8$ since $f^{n}(x)=2^n x$. $\\boxed{8}$"
    ]
   }
  ],
  "remark": "Insight: this is the additive Cauchy equation reinforced by an iterative constraint $f\\circ f=4\\,\\mathrm{id}$ that pins $|c|$, with monotonicity acting as a sign-selector, the same selector pattern as in the d'Alembert and doubling-exponential problems. Three instruments (FE, iteration/fixed point, monotonicity) fuse to force a single clean linear map."
 }
];
