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
    "statement": "Consider $f(x)=x^2$ at the point $c=3$. For the challenge value $\\varepsilon=\\tfrac{1}{100}$, find the largest number $\\delta>0$ such that\n\\[\n|x-3|<\\delta \\;\\Longrightarrow\\; |x^2-9|<\\tfrac{1}{100}.\n\\]\nGive the exact value of this optimal $\\delta$.",
    "answer": "The largest such $\\delta$ is $\\displaystyle \\delta=\\sqrt{\\tfrac{901}{100}}-3=\\tfrac{\\sqrt{901}}{10}-3=\\sqrt{9.01}-3\\approx 0.00166620$. The two one-sided gaps are unequal: the left gap $3-\\sqrt{8.99}\\approx0.00166713$ is larger, while the right gap $\\sqrt{9.01}-3\\approx0.00166620$ is smaller, so the right side is binding and fixes $\\delta$ at the smaller value.",
    "trap": "Taking the left one-sided gap $\\delta=3-\\sqrt{8.99}=3-\\tfrac{\\sqrt{899}}{10}\\approx0.00166713$ (or, equivalently, the lazy textbook value $\\delta=\\varepsilon/6=\\tfrac{1}{600}\\approx0.00166667$ from the approximation $|x+3|\\approx6$). Both are too large: because $|x+3|$ grows above $6$ to the right of $c=3$, the point $x=3+\\delta$ already escapes the tube. For instance $x=3+\\tfrac{1}{600}$ gives $|x^2-9|=\\tfrac{6}{600}+\\tfrac{1}{360000}>\\tfrac{1}{100}$. The correct $\\delta$ must be the smaller (right-side) gap.",
    "solutions": [
      {
        "name": "Solve the defining interval exactly, take the smaller gap",
        "steps": [
          "The condition $|x^2-9|<\\tfrac1{100}$ is equivalent to $\\tfrac{899}{100}<x^2<\\tfrac{901}{100}$, i.e. $8.99<x^2<9.01$.",
          "We work near $x=3>0$, so taking positive square roots gives the exact solution set $\\sqrt{8.99}<x<\\sqrt{9.01}$.",
          "The largest symmetric interval $(3-\\delta,\\,3+\\delta)$ that fits inside is limited by the closer endpoint. Left gap $=3-\\sqrt{8.99}\\approx0.00166713$; right gap $=\\sqrt{9.01}-3\\approx0.00166620$.",
          "The right gap is smaller (the parabola steepens to the right), so $\\boxed{\\delta=\\sqrt{9.01}-3=\\dfrac{\\sqrt{901}}{10}-3}$, the largest $\\delta$ that keeps both sides inside the tube."
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
    "remark": "Insight: 'largest $\\delta$' problems are not about clever bounding — they are about inverting the function. Solve $f(x)=f(c)\\pm\\varepsilon$ to get the exact solution interval $(\\sqrt{8.99},\\sqrt{9.01})$, then take the smaller one-sided gap. Because $x^2$ is convex, it climbs faster on the right of $c=3$, so the right endpoint is closer to $c$ and binds first. The lazy estimate $\\delta=\\varepsilon/6$ uses $|x+3|\\approx6$, but $|x+3|$ actually exceeds $6$ on the binding side, making $\\varepsilon/6$ too large and hence invalid — a reminder that the linearized slope $f'(c)=6$ only describes the tangent, not the secant the tube actually rides on."
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
    "trap": "At $c=0$ choosing $\\delta=\\varepsilon$ 'because $\\sqrt{}$ is increasing.' That fails: $|\\sqrt{x}-0|<\\varepsilon$ requires $x<\\varepsilon^2$, not $x<\\varepsilon$. The square root's vertical tangent at $0$ means $\\delta$ must shrink quadratically in $\\varepsilon$, while at $c>0$ it grows linearly.",
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
    "title": "The Side That Wins Changes Its Mind",
    "difficulty": 5,
    "task": "Find the largest delta",
    "tags": [
      "largest-delta",
      "piecewise",
      "binding-side",
      "case-split",
      "logarithm",
      "square-root"
    ],
    "statement": "Define $f:(0,\\infty)\\to\\mathbb{R}$ by \\[ f(x)=\\begin{cases}\\ln x, & 0<x\\le 1,\\\\ \\sqrt{x-1}, & x\\ge 1.\\end{cases}\\] Then $f$ is continuous at $c=1$ with $f(1)=0$. For $\\varepsilon=\\tfrac12$, find the largest $\\delta>0$ such that $|f(x)-f(1)|<\\varepsilon$ for every $x$ with $|x-1|<\\delta$. Identify which side of $c$ is the binding constraint, and explain why the binding side depends on $\\varepsilon$ in general.",
    "answer": "\\[\\boxed{\\delta_{\\max}=\\tfrac14}\\]",
    "trap": "Because the statement leads with $\\ln x$, students compute the gap the logarithm allows, $1-e^{-\\varepsilon}=1-e^{-1/2}\\approx 0.393$, and report that as $\\delta$. But the right-hand piece $\\sqrt{x-1}$ tolerates only $x-1<\\varepsilon^{2}=\\tfrac14$, a much tighter cap. The harder error is assuming the binding side is fixed: the left gap $1-e^{-\\varepsilon}$ and right gap $\\varepsilon^{2}$ cross near $\\varepsilon\\approx0.715$, so the side that wins actually flips with $\\varepsilon$ — a single “smaller-gap” rule is wrong.",
    "solutions": [
      {
        "name": "Invert each piece, then take the worse side",
        "steps": [
          "Since $f(1)=0$, the condition $|f(x)|<\\tfrac12$ must hold on a symmetric interval $(1-\\delta,1+\\delta)$, so it must hold on each side separately.",
          "Right side ($x\\ge 1$): $\\sqrt{x-1}<\\tfrac12\\iff x-1<\\tfrac14$, allowing $x$ up to $1+\\tfrac14$; the right gap is $\\tfrac14$.",
          "Left side ($x\\le 1$): $|\\ln x|<\\tfrac12\\iff e^{-1/2}<x\\le 1$, allowing $x$ down to $e^{-1/2}$; the left gap is $1-e^{-1/2}\\approx0.393$.",
          "A symmetric $\\delta$ must respect both, so $\\delta_{\\max}=\\min\\!\\big(\\tfrac14,\\;1-e^{-1/2}\\big)=\\tfrac14$, with the right ($\\sqrt{\\cdot}$) side binding. $\\boxed{\\delta_{\\max}=\\tfrac14}$"
        ]
      },
      {
        "name": "Largest by tightness: push δ until a side breaks",
        "steps": [
          "Take any $\\delta\\le\\tfrac14$. For $x\\in(1,1+\\delta)$, $\\sqrt{x-1}<\\sqrt{\\delta}\\le\\tfrac12$; for $x\\in(1-\\delta,1)$, $|\\ln x|\\le|\\ln(1-\\tfrac14)|=\\ln\\tfrac43\\approx0.288<\\tfrac12$. So $\\delta=\\tfrac14$ works.",
          "Now take any $\\delta>\\tfrac14$. The point $x=1+\\delta>1+\\tfrac14$ satisfies $\\sqrt{x-1}=\\sqrt{\\delta}>\\tfrac12$, violating $|f(x)|<\\tfrac12$.",
          "Hence no $\\delta>\\tfrac14$ is admissible, while $\\delta=\\tfrac14$ is admissible.",
          "Therefore the supremum of admissible $\\delta$ is attained: $\\boxed{\\delta_{\\max}=\\tfrac14}$."
        ]
      },
      {
        "name": "Why the binding side flips with ε",
        "steps": [
          "For a general $\\varepsilon>0$ the two gaps are $g_{R}(\\varepsilon)=\\varepsilon^{2}$ (right, $\\sqrt{x-1}<\\varepsilon$) and $g_{L}(\\varepsilon)=1-e^{-\\varepsilon}$ (left, $|\\ln x|<\\varepsilon$), and $\\delta_{\\max}=\\min(g_{R},g_{L})$.",
          "As $\\varepsilon\\to0^{+}$, $g_{R}\\sim\\varepsilon^{2}\\ll g_{L}\\sim\\varepsilon$, so the right side binds; the difference $h(\\varepsilon)=g_{L}-g_{R}=1-e^{-\\varepsilon}-\\varepsilon^{2}$ starts positive.",
          "But $h(1)=1-e^{-1}-1=-e^{-1}<0$, so $h$ changes sign: there is a crossing $\\varepsilon_{0}$ (numerically $\\varepsilon_{0}\\approx0.715$) beyond which $g_{L}<g_{R}$ and the left ($\\ln$) side binds instead.",
          "At $\\varepsilon=\\tfrac12<\\varepsilon_{0}$ we are still in the right-binding regime, confirming $\\delta_{\\max}=g_{R}(\\tfrac12)=\\big(\\tfrac12\\big)^{2}=\\boxed{\\tfrac14}$."
        ]
      }
    ],
    "remark": "Insight: the largest $\\delta$ is the minimum of the two one-sided gaps, and which gap is smaller is not a fixed property of the function — it is a property of $\\varepsilon$. Here the square-root side grows its tolerance like $\\varepsilon^{2}$ (slow near $0$) while the logarithm side grows like $1-e^{-\\varepsilon}\\sim\\varepsilon$, so the “innocent” $\\sqrt{x-1}$ is the true bottleneck for small $\\varepsilon$ even though the problem foregrounds $\\ln x$. A correct $\\delta(\\varepsilon)$ for such a function is a case-split, not a one-liner."
  },
  {
    "theme": "epsilondelta",
    "themeLabel": "The ε–δ Definition",
    "title": "The Dirichlet Lamp Dimmed by Its Own Argument",
    "difficulty": 4,
    "task": "Prove",
    "tags": [
      "dirichlet",
      "density",
      "product",
      "sequential",
      "single-point"
    ],
    "statement": "Let $D:\\mathbb{R}\\to\\mathbb{R}$ be the Dirichlet function $D(x)=1$ if $x\\in\\mathbb{Q}$ and $D(x)=0$ if $x\\notin\\mathbb{Q}$, and set\n\\[\nf(x)=x\\,D(x)=\\begin{cases}x,&x\\in\\mathbb{Q},\\\\0,&x\\notin\\mathbb{Q}.\\end{cases}\n\\]\nWorking strictly from the $\\varepsilon$–$\\delta$ (or Heine sequential) definition of continuity—squeeze/sandwich theorems are NOT admissible, since $D$ has no limit anywhere—determine the exact set of points $c$ at which $f$ is continuous. At each point of continuity exhibit an explicit $\\delta(\\varepsilon)$ depending only on $\\varepsilon$, and at each point of discontinuity produce a single $\\varepsilon_0>0$ that no $\\delta$ can satisfy.",
    "answer": "\\[\\boxed{\\{0\\}\\ \\text{with}\\ \\delta(\\varepsilon)=\\varepsilon}\\]",
    "trap": "The fatal move is to treat $f$ like the squeeze problem $x\\sin(1/x)$ and write $|f(x)|\\le|x|\\to0$ to claim continuity 'wherever $x$ is small enough,' or worse, at every $c$. The bound $|f(x)|\\le|x|$ is TRUE but only forces $f(x)\\to0$, which equals $f(c)$ ONLY when $c=0$. The hidden case is that off the origin the amplitude $|c|>0$ no longer crushes the $\\{0,1\\}$ jump of $D$: along rationals $f\\to c\\neq0$ but along irrationals $f\\to0$, so the limit fails to exist. There is no squeeze to invoke because $D(x)$ has no limit at any point—the only legitimate tool is the definition itself, exploiting that BOTH $\\mathbb{Q}$ and $\\mathbb{R}\\setminus\\mathbb{Q}$ are dense.",
    "solutions": [
      {
        "name": "Direct $\\varepsilon$–$\\delta$ at $0$; density witness elsewhere",
        "steps": [
          "Continuity at $c=0$: here $f(0)=0\\cdot D(0)=0$. For any $x$, $|f(x)-f(0)|=|x\\,D(x)|=|x|\\,D(x)\\le|x|$ because $D(x)\\in\\{0,1\\}$.",
          "Given $\\varepsilon>0$, choose $\\delta(\\varepsilon)=\\varepsilon$. Then $|x-0|<\\delta\\Rightarrow|f(x)-f(0)|\\le|x|<\\varepsilon$. This $\\delta$ depends on $\\varepsilon$ alone, so $f$ is continuous at $0$.",
          "Discontinuity at any $c\\neq0$: fix the single witness $\\varepsilon_0=\\tfrac{|c|}{2}>0$. We show no $\\delta>0$ works. The value to match is $f(c)$, which is either $c$ (if $c\\in\\mathbb{Q}$) or $0$ (if $c\\notin\\mathbb{Q}$).",
          "Case $c\\in\\mathbb{Q}$ (so $f(c)=c$): by density of the irrationals, every interval $(c-\\delta,c+\\delta)$ contains an irrational $x$ with $|x|>\\tfrac{|c|}{2}$ (shrink toward $c$); there $f(x)=0$, so $|f(x)-f(c)|=|c|>\\tfrac{|c|}{2}=\\varepsilon_0$.",
          "Case $c\\notin\\mathbb{Q}$ (so $f(c)=0$): by density of the rationals, every $(c-\\delta,c+\\delta)$ contains a rational $x$ with $|x|>\\tfrac{|c|}{2}$; there $f(x)=x$, so $|f(x)-f(c)|=|x|>\\tfrac{|c|}{2}=\\varepsilon_0$.",
          "In both cases the $\\varepsilon_0$ test fails for every $\\delta$, so $f$ is discontinuous at each $c\\neq0$. Hence the continuity set is $\\boxed{\\{0\\}}$, with $\\delta(\\varepsilon)=\\varepsilon$ at $0$."
        ]
      },
      {
        "name": "Heine sequential characterisation",
        "steps": [
          "Continuity at $0$: take any sequence $x_n\\to0$. Then $|f(x_n)|=|x_n|D(x_n)\\le|x_n|\\to0$, so $f(x_n)\\to0=f(0)$ for EVERY such sequence; by Heine's criterion $f$ is continuous at $0$.",
          "Discontinuity at $c\\neq0$: choose two sequences both converging to $c$, a rational one $q_n\\to c$ and an irrational one $\\alpha_n\\to c$ (each exists by density).",
          "Along the rationals $f(q_n)=q_n\\to c$; along the irrationals $f(\\alpha_n)=0\\to0$.",
          "Since $c\\neq0$, the two subsequential limits $c$ and $0$ differ, so $\\lim_{x\\to c}f(x)$ does not exist; Heine's criterion is violated and $f$ is discontinuous at $c$.",
          "Therefore the set of continuity points is exactly $\\boxed{\\{0\\}}$, and at $0$ the explicit modulus is $\\delta(\\varepsilon)=\\varepsilon$."
        ]
      },
      {
        "name": "Contrast with the genuine product $x\\sin(1/x)$",
        "steps": [
          "For $g(x)=x\\sin(1/x)$ the factor $\\sin(1/x)$ is bounded AND the product squeezes to a limit at $0$; one might hope to copy this to $f=x\\,D(x)$.",
          "At $0$ the copy succeeds for the SAME structural reason: $|f(x)|\\le|x|\\cdot1\\to0=f(0)$, giving $\\delta(\\varepsilon)=\\varepsilon$—the amplitude $|x|$ annihilates the bounded oscillating factor regardless of whether it is $\\sin(1/x)$ or the $\\{0,1\\}$ jump of $D$.",
          "Away from $0$ the analogy BREAKS: $\\sin(1/x)$ is continuous at every $c\\neq0$, so $g$ is continuous there, but $D$ is continuous NOWHERE, and near $c\\neq0$ the surviving amplitude $|c|>0$ exposes the jump—rationals give $f\\approx c$, irrationals give $f=0$.",
          "Quantitatively, for $c\\neq0$ pick $\\varepsilon_0=\\tfrac{|c|}{2}$: inside any $\\delta$-neighbourhood the density of $\\mathbb{Q}$ and of $\\mathbb{R}\\setminus\\mathbb{Q}$ produces points whose $f$-values straddle a gap of size $|c|>\\varepsilon_0$, so no $\\delta$ works.",
          "Thus the squeeze imitation is valid only at the single point where the amplitude vanishes, and the continuity set is $\\boxed{\\{0\\}}$."
        ]
      }
    ],
    "remark": "Insight: multiplying a wildly discontinuous bounded factor $\\phi$ (here $D$, with $0\\le\\phi\\le1$) by $x$ does not 'fix' it everywhere—continuity of $x\\,\\phi(x)$ survives exactly at the zeros of the amplitude where $\\phi$ is bounded, i.e. only at $x=0$, because there $|x\\phi(x)|\\le|x|\\to0$ pins the value irrespective of $\\phi$'s chaos. The decisive engine is DENSITY of both $\\mathbb{Q}$ and its complement (two sequences, two limits), NOT a squeeze—which is unavailable since $D$ has no limit. Contrast $x\\sin(1/x)$, continuous on all of $\\mathbb{R}$ precisely because its oscillating factor is itself continuous off $0$."
  },
  {
    "theme": "epsilondelta",
    "themeLabel": "The ε–δ Definition",
    "title": "The Reciprocal That Outruns Every Bound",
    "difficulty": 5,
    "task": "Prove that",
    "tags": [
      "epsilon-delta",
      "essential-discontinuity",
      "unbounded",
      "no-limit",
      "witness-sequence"
    ],
    "statement": "Let\n\\[\ng(x)=\\frac{\\sin(1/x)}{x}\\qquad(x\\neq0),\n\\]\nand suppose we try to extend $g$ to a function continuous at $0$ by assigning some value $g(0)=L$. Prove, strictly from the $\\varepsilon$–$\\delta$ (equivalently Heine sequential) definition, that no value $L$ makes $g$ continuous at $0$. More precisely, show that $\\displaystyle\\lim_{x\\to0}g(x)$ fails to exist as a finite number, and also fails to be $+\\infty$ or $-\\infty$ — so the discontinuity at $0$ is essential of a strictly stronger kind than bounded oscillation: $g$ is unbounded in every neighbourhood of $0$.",
    "answer": "\\[\\boxed{\\text{No such }L\\text{ exists; }g\\text{ has an essential (unbounded) discontinuity at }0.}\\]",
    "trap": "Reflexively invoking the Squeeze Theorem as for the famous pin-through-the-origin map $x\\sin(1/x)$: since $|\\sin(1/x)|\\le 1$, a hasty solver writes $|g(x)|\\le \\tfrac1{|x|}$ and either declares the bound 'controls' $g$ or, worse, mentally cancels and treats $g$ like $x\\sin(1/x)\\to0$. The reciprocal $1/x$ is an amplifier, not a damper: the factor $1/x$ blows up exactly where $\\sin(1/x)$ refuses to die down. The correct mechanism is unboundedness — a single divergent-to-$+\\infty$ branch defeats every $\\delta$ — and it must be exhibited, not bounded away.",
    "solutions": [
      {
        "name": "Unboundedness lemma kills every finite L, zeros kill ±∞",
        "steps": [
          "Lemma (a limit forces local boundedness). Suppose for contradiction $\\lim_{x\\to0}g(x)=L$ for some finite $L$. Apply the definition with the single choice $\\varepsilon=1$: there is $\\delta>0$ such that $0<|x|<\\delta\\Rightarrow|g(x)-L|<1$, hence $|g(x)|<|L|+1$ for ALL $x$ in the punctured ball $0<|x|<\\delta$. So a finite limit would make $g$ bounded near $0$.",
          "Construct the divergent branch. For $k=1,2,3,\\dots$ let $x_k=\\dfrac{1}{\\tfrac{\\pi}{2}+2\\pi k}$. Then $\\dfrac1{x_k}=\\dfrac{\\pi}{2}+2\\pi k$, so $\\sin(1/x_k)=1$ and $g(x_k)=\\dfrac{1}{x_k}=\\dfrac{\\pi}{2}+2\\pi k\\xrightarrow[k\\to\\infty]{}+\\infty$, while $x_k\\to0^{+}$.",
          "Defeat the lemma. Given the $\\delta$ above, $x_k\\to0$ guarantees some $x_K$ with $0<x_K<\\delta$, and $g(x_K)=\\tfrac{\\pi}{2}+2\\pi K$ can be made $>|L|+1$ by taking $K$ large. This contradicts $|g|<|L|+1$ on the ball. Hence no finite $L$ is the limit, and (since $g(0)=L$ would need $|g(x)-L|<\\varepsilon$) no finite assignment yields continuity.",
          "Rule out $\\pm\\infty$. The candidates $L=+\\infty$ and $L=-\\infty$ require $g(x)$ to stay large in magnitude near $0$, yet $g$ takes the value $0$ arbitrarily close to $0$: at $z_n=\\dfrac1{n\\pi}$ we have $\\sin(1/z_n)=\\sin(n\\pi)=0$, so $g(z_n)=0$ with $z_n\\to0$. Thus $g$ neither diverges to $+\\infty$ nor to $-\\infty$. \\[\\boxed{\\text{No }L\\in\\mathbb{R}\\cup\\{\\pm\\infty\\}\\text{ works.}}\\]"
        ]
      },
      {
        "name": "Heine: three sequences with three different fates",
        "steps": [
          "By the Heine (sequential) criterion, $\\lim_{x\\to0}g(x)=L$ would force $g(t_n)\\to L$ for EVERY sequence $t_n\\to0$ ($t_n\\neq0$). We exhibit three sequences with incompatible images.",
          "Plus branch: $a_k=\\dfrac1{\\tfrac{\\pi}{2}+2\\pi k}\\to0$ gives $g(a_k)=\\tfrac{\\pi}{2}+2\\pi k\\to+\\infty$.",
          "Minus branch: $b_k=\\dfrac1{\\tfrac{3\\pi}{2}+2\\pi k}\\to0$ gives $\\sin(1/b_k)=\\sin\\!\\big(\\tfrac{3\\pi}{2}\\big)=-1$, so $g(b_k)=-\\big(\\tfrac{3\\pi}{2}+2\\pi k\\big)\\to-\\infty$.",
          "Zero branch: $z_n=\\dfrac1{n\\pi}\\to0$ gives $g(z_n)=0$ for all $n$, so $g(z_n)\\to0$.",
          "A single $L$ cannot simultaneously equal $+\\infty$, $-\\infty$, and $0$. The criterion fails on three fronts at once, so no limit (finite or infinite) exists, and $g$ admits no continuous extension to $0$. \\[\\boxed{\\text{Limit does not exist; discontinuity is essential and unbounded.}}\\]"
        ]
      },
      {
        "name": "Direct (M, δ) unboundedness, the negation of every bound",
        "steps": [
          "Boundedness-near-$0$ means: $\\exists M>0,\\ \\exists\\delta>0$ with $|g(x)|\\le M$ for all $0<|x|<\\delta$. We prove the logical negation for ALL $M,\\delta$, which already forbids any finite limit (by the lemma of Solution 1).",
          "Fix arbitrary $M>0$ and $\\delta>0$. Choose an integer $k$ with $\\dfrac{\\pi}{2}+2\\pi k>\\max\\!\\Big\\{M,\\ \\dfrac1{\\delta}\\Big\\}$ (possible since the left side $\\to\\infty$).",
          "Set $x=\\dfrac1{\\tfrac{\\pi}{2}+2\\pi k}$. From $\\tfrac{\\pi}{2}+2\\pi k>\\tfrac1\\delta$ we get $0<x<\\delta$; and $g(x)=\\sin\\!\\big(\\tfrac{\\pi}{2}+2\\pi k\\big)\\cdot\\big(\\tfrac{\\pi}{2}+2\\pi k\\big)=\\tfrac{\\pi}{2}+2\\pi k>M$.",
          "So every punctured neighbourhood of $0$ contains a point where $|g|$ exceeds the proposed bound $M$: $g$ is unbounded on $(0,\\delta)$ for every $\\delta$. By the contrapositive of 'limit $\\Rightarrow$ locally bounded', $\\lim_{x\\to0}g(x)$ cannot be finite; the $0$-values at $z_n=\\tfrac1{n\\pi}$ exclude $\\pm\\infty$. \\[\\boxed{\\text{Unbounded in every neighbourhood }\\Rightarrow\\text{ no admissible }L.}\\]"
        ]
      }
    ],
    "remark": "Insight: there is a hierarchy of incurable discontinuities. The companion $x\\sin(1/x)$ has a REMOVABLE discontinuity (squeeze gives limit $0$); $\\sin(1/x)$ alone has an essential discontinuity by BOUNDED oscillation (two sequences give $+1$ and $-1$); but $\\sin(1/x)/x$ is worse still — UNBOUNDED oscillation. The decisive lever is the one-line lemma 'a finite limit forces local boundedness': you never have to estimate $g$, you only have to break a bound, and a single branch racing to $+\\infty$ does that against every $\\delta$. The zeros at $1/(n\\pi)$ are the elegant finishing touch that simultaneously rules out $+\\infty$ and $-\\infty$, certifying the discontinuity as genuinely essential rather than a vertical asymptote."
  },
  {
    "theme": "epsilondelta",
    "themeLabel": "The ε–δ Definition",
    "title": "Where the Parabola Kisses the Cosine",
    "difficulty": 5,
    "task": "Determine the exact continuity set and prove it",
    "tags": [
      "epsilon-delta",
      "dirichlet-veil",
      "dense-branches",
      "transcendental",
      "heine"
    ],
    "statement": "Let $\\mathbb{Q}$ denote the rationals and define $f:\\mathbb{R}\\to\\mathbb{R}$ by\n\\[\nf(x)=\\begin{cases} x^{2}, & x\\in\\mathbb{Q},\\\\ \\cos x, & x\\notin\\mathbb{Q}.\\end{cases}\n\\]\nDetermine the exact set $C$ of points at which $f$ is continuous. Prove, using only the $\\varepsilon$–$\\delta$ (equivalently Heine sequential) definition, both directions: (i) at each point of $C$ exhibit an explicit $\\delta(\\varepsilon)$ certifying continuity, and (ii) at every point outside $C$ produce the witnesses that destroy continuity. State how large $C$ is and why it has exactly that cardinality.",
    "answer": "$C=\\{-\\alpha,\\ \\alpha\\}$ where $\\alpha\\in(0,1)$ is the unique positive root of $x^{2}=\\cos x$ (so $|C|=2$, $\\alpha\\approx 0.8241$).",
    "trap": "Two seductive errors. (a) Both branch-formulas $x^{2}$ and $\\cos x$ are continuous everywhere, so a hasty solver declares $f$ continuous on all of $\\mathbb{R}$ — confusing continuity of the two formulas with continuity of the glued function, whose value jumps between dense rational and dense irrational inputs. The function can only be continuous where the two branch-limits agree, i.e. on the solution set of $x^{2}=\\cos x$. (b) Reflexively guessing the agreement happens at $x=0$ (the symmetry point, the cosine's crest): but $0^{2}=0\\neq 1=\\cos 0$, so $0\\notin C$. The honest answer is a transcendental coincidence set $\\{\\pm\\alpha\\}$ that must be located and counted, never read off.",
    "solutions": [
      {
        "name": "Coincidence locates C; explicit δ proves it; density destroys the rest",
        "steps": [
          "Necessity of $g(c)=h(c)$. Put $g(x)=x^{2}$, $h(x)=\\cos x$. Both $\\mathbb{Q}$ and $\\mathbb{R}\\setminus\\mathbb{Q}$ are dense, so for any $c$ there are rationals $q_{n}\\to c$ and irrationals $r_{n}\\to c$. Then $f(q_{n})=q_{n}^{2}\\to c^{2}$ and $f(r_{n})=\\cos r_{n}\\to\\cos c$ (continuity of $g,h$). If $f$ is continuous at $c$ both sequential limits must equal $f(c)$, forcing $c^{2}=\\cos c$. Thus $C\\subseteq\\{x:x^{2}=\\cos x\\}$.",
          "Locate and count the solutions. $F(x)=x^{2}-\\cos x$ is even with $F(0)=-1<0$ and $F(1)=1-\\cos 1>0$; on $(0,\\infty)$, $F'(x)=2x+\\sin x>0$ (since $2x>1\\ge|\\sin x|$ for $x\\ge\\tfrac12$, and $2x+\\sin x>0$ trivially on $(0,\\tfrac12]$), so $F$ is strictly increasing there and has exactly one positive root $\\alpha\\in(0,1)$. By evenness the full solution set is $\\{\\pm\\alpha\\}$, and $|x|\\ge1\\Rightarrow x^{2}\\ge1\\ge\\cos x$ with equality impossible, so there are no others.",
          "Explicit $\\delta$ at $c=\\pm\\alpha$. Here $c^{2}=\\cos c=:L$, so $g(c)=h(c)=L$, hence $f(c)=L$ whichever class $c$ lies in. For any $x$ with $|x-c|<1$: $|g(x)-L|=|x^{2}-c^{2}|=|x-c|\\,|x+c|\\le|x-c|\\,(2|c|+1)$, and $|h(x)-L|=|\\cos x-\\cos c|\\le|x-c|$ (mean value / $|\\cos'|\\le1$). Given $\\varepsilon>0$ choose \\[ \\delta=\\min\\!\\Big(1,\\ \\frac{\\varepsilon}{2|c|+1}\\Big). \\] If $|x-c|<\\delta$ then both $|g(x)-L|<\\varepsilon$ and $|h(x)-L|<\\varepsilon$; since $f(x)$ equals one of $g(x),h(x)$, $|f(x)-L|<\\varepsilon$. So $f$ is continuous at $\\pm\\alpha$ — note the single $\\delta$ must tame both dense branches at once.",
          "Discontinuity off $C$. If $c\\notin\\{\\pm\\alpha\\}$ then $c^{2}\\neq\\cos c$; take $\\varepsilon_{0}=\\tfrac12|c^{2}-\\cos c|>0$. Whatever $f(c)$ is, it cannot lie within $\\varepsilon_{0}$ of both $c^{2}$ and $\\cos c$. The witness from the other class — rationals $q_{n}\\to c$ if $f(c)=\\cos c$, or irrationals $r_{n}\\to c$ if $f(c)=c^{2}$ — yields $|f(\\cdot)-f(c)|\\to|c^{2}-\\cos c|>\\varepsilon_{0}$, so no $\\delta$ works. Hence $f$ is discontinuous at every such $c$. Combining, $\\boxed{C=\\{\\pm\\alpha\\}}$."
        ]
      },
      {
        "name": "Pure Heine sequential criterion, both directions",
        "steps": [
          "Heine: $f$ is continuous at $c$ iff $f(t_{n})\\to f(c)$ for every $t_{n}\\to c$. Fix any $c$ and split sequences by class.",
          "At $c=\\pm\\alpha$ (where $c^{2}=\\cos c=L$, $f(c)=L$): for an arbitrary $t_{n}\\to c$ write $f(t_{n})=t_{n}^{2}$ on the rational indices and $\\cos t_{n}$ on the irrational indices. Both $t_{n}^{2}\\to c^{2}=L$ and $\\cos t_{n}\\to\\cos c=L$, so the merged sequence $f(t_{n})\\to L=f(c)$ regardless of how the indices are interleaved. Continuity holds.",
          "At $c\\notin\\{\\pm\\alpha\\}$: by density pick rationals $q_{n}\\to c$ and irrationals $r_{n}\\to c$. Then $f(q_{n})\\to c^{2}$ but $f(r_{n})\\to\\cos c$, and $c^{2}\\neq\\cos c$. Two subsequential limits of $f$ along sequences tending to $c$ disagree, so $\\lim_{t\\to c}f(t)$ does not exist; a fortiori it cannot equal $f(c)$. Discontinuity holds.",
          "Therefore the continuity set is exactly the agreement locus $\\{x:x^{2}=\\cos x\\}$, which (Solution 1, step 2) is $\\boxed{\\{-\\alpha,\\alpha\\}}$, $\\alpha$ the unique positive root of $x^{2}=\\cos x$."
        ]
      },
      {
        "name": "Structural lemma: glued Dirichlet-veil is continuous iff branches meet",
        "steps": [
          "Lemma. If $g,h$ are continuous at $c$ and $f=g\\cdot\\mathbf 1_{\\mathbb{Q}}+h\\cdot\\mathbf 1_{\\mathbb{Q}^{c}}$, then $f$ is continuous at $c$ $\\iff g(c)=h(c)$. Proof of $\\Leftarrow$: let $L=g(c)=h(c)$; given $\\varepsilon$, continuity of $g,h$ gives $\\delta_{g},\\delta_{h}$ with $|g(x)-L|<\\varepsilon$ and $|h(x)-L|<\\varepsilon$ on $|x-c|<\\delta:=\\min(\\delta_{g},\\delta_{h})$; as $f(x)\\in\\{g(x),h(x)\\}$ and $f(c)=L$, $|f(x)-f(c)|<\\varepsilon$. Proof of $\\Rightarrow$: contrapositive — if $g(c)\\neq h(c)$, the dense rational/irrational sequences give limits $g(c)\\neq h(c)$, breaking the sequential criterion.",
          "Apply with $g(x)=x^{2}$, $h(x)=\\cos x$ (both entire/continuous): $f$ is continuous at $c$ iff $c^{2}=\\cos c$.",
          "Solve the transcendental equation by monotone counting: $F(x)=x^{2}-\\cos x$ is even, $F'(x)=2x+\\sin x>0$ on $(0,\\infty)$, $F(0)=-1<0$, $F(1)>0$, giving exactly one positive root $\\alpha\\approx0.8241$ and, by symmetry, the second root $-\\alpha$; none with $|x|\\ge1$. ",
          "Hence the continuity set has cardinality $2$: $\\boxed{C=\\{\\pm\\alpha\\},\\ \\alpha^{2}=\\cos\\alpha}$. The explicit certificate is $\\delta(\\varepsilon)=\\min\\!\\big(1,\\varepsilon/(2\\alpha+1)\\big)$ from the lemma's $\\Leftarrow$ direction."
        ]
      }
    ],
    "remark": "Insight: a Dirichlet-veiled blend of two everywhere-continuous formulas is continuous precisely on the agreement locus $\\{g=h\\}$ — nowhere else, no matter how smooth each branch is. The density of $\\mathbb{Q}$ and of its complement is the whole engine: it forces two competing one-sided-in-class limits at every point, and only where they coincide can a single $\\delta$ corral both. The lever turning a global gluing into a pointwise question is the one-line lemma 'continuous at $c$ $\\iff g(c)=h(c)$'. Here the agreement is a genuinely transcendental event located by $x^{2}=\\cos x$, and the count ($|C|=2$) follows not from the definition but from monotonicity of $F(x)=x^{2}-\\cos x$ — a clean fusion of $\\varepsilon$–$\\delta$ rigor with root-counting. The decoy $x=0$ shows the coincidence cannot be guessed from symmetry; it must be earned."
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
    "statement": "Let Thomae's function $T:(0,1)\\to\\mathbb{R}$ be\n\\[\nT(x)=\\begin{cases}\\dfrac1q,&x=\\dfrac pq\\text{ in lowest terms},\\;q\\ge1,\\\\ 0,&x\\text{ irrational}.\\end{cases}\n\\]\nDetermine the set of continuity points of $T$. Prove discontinuity at $x=\\tfrac13$ with an explicit witness $\\varepsilon$, and prove continuity at $x=\\dfrac1{\\sqrt2}$ by producing an explicit $\\delta$ for a general $\\varepsilon$.",
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
    "title": "Where the Clamp Must Bend One Way",
    "difficulty": 4,
    "task": "Prove and find the explicit",
    "tags": [
      "epsilon-delta",
      "one-sided",
      "vertical-tangent",
      "domain-restriction",
      "quadratic-delta"
    ],
    "statement": "Consider the function\n\\[\nf(x)=\\sqrt{x}\\,(x-1),\n\\]\nwhose natural (maximal real) domain is $D=[0,\\infty)$, and set $f(0)=\\sqrt{0}\\,(0-1)=0$. Working strictly from the $\\varepsilon$–$\\delta$ definition of continuity at the boundary point $c=0$, prove that $f$ is continuous at $0$ and produce an explicit admissible response $\\delta=\\delta(\\varepsilon)$ — valid for every $\\varepsilon>0$ — together with the complete verification that $0\\le x<\\delta$ forces $|f(x)-f(0)|<\\varepsilon$. Your $\\delta$ must be honest at all scales of $\\varepsilon$ (both $\\varepsilon$ small and $\\varepsilon$ large), and you must justify why the cofactor $(x-1)$ cannot simply be bounded by the constant $1$ without a side condition.",
    "answer": "\\[\\boxed{\\delta(\\varepsilon)=\\min\\{1,\\ \\varepsilon^{2}\\}}\\]",
    "trap": "Two reflexes sink the strong solver. (1) Symmetric thinking: writing the condition on a two-sided ball $0<|x|<\\delta$ and hunting for a limit from both sides — but $\\sqrt{x}$ is not real for $x<0$, so $0$ is a left endpoint and only the one-sided (right) condition $0\\le x<\\delta$ is even meaningful; the continuity here is intrinsically one-sided. (2) A linear clamp: bounding $|x-1|$ by a constant and concluding $|f(x)|\\le C\\sqrt{x}$, then carelessly demanding $C\\sqrt{x}<\\varepsilon$ but solving as though $\\sqrt{x}$ scaled like $x$, producing a LINEAR $\\delta\\sim\\varepsilon$. The vertical tangent of $\\sqrt{x}$ at $0$ makes $\\sqrt{x}$ outrun any linear rate: $\\delta=\\varepsilon$ fails outright (for $\\varepsilon=10^{-6}$, $x=5\\cdot10^{-7}<\\delta$ already gives $|f(x)|\\approx7\\cdot10^{-4}\\gg\\varepsilon$). One needs $\\delta\\sim\\varepsilon^{2}$. The bound $|x-1|\\le1$ is itself false in general (it breaks for $x>2$); it holds only after the domain restriction $0\\le x<1$, which is exactly why $\\delta$ must carry the extra factor $\\min\\{1,\\cdot\\}$ — a quadratic rate AND a domain clamp, not a plug-in linear one.",
    "solutions": [
      {
        "name": "Asymmetric clamp: restrict domain first, then beat the vertical tangent",
        "steps": [
          "Setup. Since $D=[0,\\infty)$, the point $c=0$ is a left endpoint; continuity at $0$ means: $\\forall\\varepsilon>0\\ \\exists\\delta>0$ such that $x\\in D,\\ 0\\le x<\\delta\\ \\Rightarrow\\ |f(x)-f(0)|=|\\sqrt{x}\\,(x-1)|<\\varepsilon$. No $x<0$ is ever tested — the condition is genuinely one-sided.",
          "Tame the cofactor with a side condition. The naive bound $|x-1|\\le1$ is FALSE for $x>2$, so it is not free; impose the domain clamp $x<1$ first. For $0\\le x<1$ we have $0<1-x\\le1$, hence $|x-1|=1-x\\le1$ and therefore $|f(x)|=\\sqrt{x}\\,(1-x)\\le\\sqrt{x}$.",
          "Beat the vertical tangent (quadratic rate). On $0\\le x<1$ we now need $\\sqrt{x}<\\varepsilon$, i.e. $x<\\varepsilon^{2}$ — the square is forced by $\\sqrt{x}$, not a typo for $\\varepsilon$. Combining the domain clamp with this rate, choose $\\delta=\\min\\{1,\\varepsilon^{2}\\}$.",
          "Verify both regimes. If $\\varepsilon\\le1$: then $\\delta=\\varepsilon^{2}\\le1$, so $0\\le x<\\delta$ gives $x<1$ (cofactor bound valid) and $\\sqrt{x}<\\sqrt{\\delta}=\\varepsilon$, hence $|f(x)|\\le\\sqrt{x}<\\varepsilon$. If $\\varepsilon>1$: then $\\delta=1$, and for $0\\le x<1$ we have $|f(x)|\\le\\sqrt{x}<1<\\varepsilon$. In all cases $|f(x)-f(0)|<\\varepsilon$, so $f$ is continuous at $0$ with \\[\\boxed{\\delta(\\varepsilon)=\\min\\{1,\\varepsilon^{2}\\}}.\\]"
        ]
      },
      {
        "name": "Heine sequential criterion (one-sided)",
        "steps": [
          "By the Heine criterion adapted to the boundary, $f$ is continuous at $0$ iff $f(x_n)\\to f(0)=0$ for EVERY sequence $x_n\\in D$ with $x_n\\to0$ (necessarily $x_n\\ge0$, since $D=[0,\\infty)$ — no left-approaching sequences exist).",
          "Factor the limit. For any such $x_n\\to0^{+}$, $\\sqrt{x_n}\\to0$ by continuity of the square root at $0$, while $(x_n-1)\\to-1$ is bounded. A null sequence times a bounded sequence is null: $f(x_n)=\\sqrt{x_n}\\,(x_n-1)\\to0\\cdot(-1)=0=f(0)$.",
          "Since this holds for every admissible sequence, $f$ is (right-)continuous at $0$. To match the $\\varepsilon$–$\\delta$ form, the boundedness $|x_n-1|\\le1$ used above is licensed only once $x_n<1$ (it fails past $x=2$), and the rate $\\sqrt{x_n}<\\varepsilon$ needs $x_n<\\varepsilon^2$; intersecting gives exactly \\[\\boxed{\\delta(\\varepsilon)=\\min\\{1,\\varepsilon^{2}\\}}.\\]"
        ]
      },
      {
        "name": "Exact threshold by substitution u=√x (largest δ, then a clean sufficient one)",
        "steps": [
          "Substitute $u=\\sqrt{x}\\ge0$, so $f=u(u^{2}-1)$ and $|f|=u(1-u^{2})=u-u^{3}$ for $0\\le u\\le1$ (i.e. $0\\le x\\le1$). This $h(u)=u-u^{3}$ rises from $0$, peaks at $u=1/\\sqrt3$ (value $2\\sqrt3/9\\approx0.385$), so for any target $0<\\varepsilon<2\\sqrt3/9$ the smallest positive solution $u_0$ of $u-u^{3}=\\varepsilon$ gives the LARGEST admissible $\\delta_{\\max}=u_0^{2}$.",
          "Locate $u_0$. Since $u_0-u_0^{3}=\\varepsilon$ with $0<u_0<1/\\sqrt3$, we have $u_0=\\varepsilon+u_0^{3}>\\varepsilon$, hence $\\delta_{\\max}=u_0^{2}>\\varepsilon^{2}$. The cubic correction is exactly the cofactor $(1-x)$ shaving $f$ below $\\sqrt{x}$, so the true largest $\\delta$ STRICTLY exceeds $\\varepsilon^{2}$ — proof that $\\varepsilon^{2}$ is a safe under-estimate, never an overreach.",
          "Pick the clean sufficient $\\delta$. Because $\\delta_{\\max}>\\varepsilon^{2}$ (for $\\varepsilon<2\\sqrt3/9$) and the whole analysis lives on $x<1$, the choice $\\delta=\\min\\{1,\\varepsilon^{2}\\}$ is always admissible: it never exceeds $\\delta_{\\max}$ and never leaves the region where $|x-1|\\le1$. For $\\varepsilon\\ge2\\sqrt3/9$ the supremum of $|f|$ on $[0,1)$ is $0.385<\\varepsilon$, so $\\delta=1$ works, consistent with $\\min\\{1,\\varepsilon^{2}\\}=1$. \\[\\boxed{\\delta(\\varepsilon)=\\min\\{1,\\varepsilon^{2}\\}}.\\]"
        ]
      }
    ],
    "remark": "Insight: at a vertical-tangent point the $\\varepsilon$–$\\delta$ response is governed by the LOCAL RATE of the slowest-decaying factor, not by linear intuition — $\\sqrt{x}$ forces a quadratic $\\delta\\sim\\varepsilon^{2}$, and any linear $\\delta\\sim\\varepsilon$ collapses. Two independent obstructions must be answered at once and combined by a $\\min$: the vertical tangent (handled by $\\varepsilon^{2}$) and the unbounded cofactor (handled by the domain clamp $x<1$, since $|x-1|\\le1$ is a conditional, not universal, fact). The deepest point is that the domain itself is one-sided: $0$ is an endpoint, so the symmetric $0<|x|<\\delta$ language is not merely unnecessary but meaningless, and 'two-sided continuity' is a category error rather than a computation. Continuity here is right-continuity, and the asymmetry is structural, baked into where $\\sqrt{x}$ is allowed to live."
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
    "title": "The Dirichlet Function Assembled From Continuous Bricks",
    "difficulty": 5,
    "task": "Classify and count",
    "tags": [
      "essential-discontinuity",
      "pointwise-limit",
      "dirichlet-function",
      "double-limit",
      "nowhere-continuous",
      "order-of-limits"
    ],
    "statement": "For integers $m,n\\ge 1$ define the perfectly continuous building block\n\\[\nF_{m,n}(x)=\\cos^{2n}\\!\\big(m!\\,\\pi x\\big),\\qquad x\\in\\mathbb{R}.\n\\]\nForm the iterated limit (inner limit in $n$, outer limit in $m$)\n\\[\nf(x)=\\lim_{m\\to\\infty}\\ \\Big(\\lim_{n\\to\\infty}\\cos^{2n}\\!\\big(m!\\,\\pi x\\big)\\Big).\n\\]\nFirst show this $f$ is well defined for every real $x$. Then classify the discontinuity of $f$ (removable, jump, or essential) at a rational point $a\\in\\mathbb{Q}$ and at an irrational point $a\\notin\\mathbb{Q}$, and count the discontinuities of $f$ on $\\mathbb{R}$. Finally explain the apparent paradox: every brick $F_{m,n}$ is continuous on all of $\\mathbb{R}$, yet the limit object $f$ is continuous nowhere. A tempting shortcut declares $f$ removably discontinuous at each rational (\"just lower the spike\"); decide whether that is correct.",
    "answer": "\\[\\boxed{\\;f=\\mathbf{1}_{\\mathbb{Q}};\\ \\text{essential discontinuity at every }a\\in\\mathbb{R};\\ \\#=\\text{uncountable}\\;}\\]",
    "trap": "Seeing $f(a)=1$ at a rational $a$ while $f$ is $0$ at the irrationals crowding around it, a strong student pictures an isolated upward \"spike\" and labels it removable — \"just redefine $f(a)=0$ and continuity is restored.\" This silently assumes $\\lim_{x\\to a}f(x)$ exists (equal to $0$). It does not: every punctured neighbourhood of $a$ also contains rationals where $f=1$, so the limit fails to exist on both sides. Removability requires an existing two-sided limit that merely disagrees with the value; here NO finite limit exists, so the discontinuity is essential, not removable — and editing one value (or even countably many) cannot mend a limit that fails at every point.",
    "solutions": [
      {
        "name": "Evaluate the double limit, then read off the type",
        "steps": [
          "Inner limit (in $n$, $m$ fixed). For fixed $m$ put $\\theta=m!\\,\\pi x$. If $\\cos\\theta=\\pm1$ then $\\cos^{2n}\\theta=1$ for all $n$; otherwise $0\\le\\cos^{2}\\theta<1$ and $\\cos^{2n}\\theta\\to0$. Now $\\cos(m!\\pi x)=\\pm1\\iff m!\\,x\\in\\mathbb{Z}$. Hence $h_m(x):=\\lim_{n\\to\\infty}\\cos^{2n}(m!\\pi x)=\\mathbf{1}\\{m!\\,x\\in\\mathbb{Z}\\}$, the indicator of the arithmetic \"comb\" $\\{k/m!:k\\in\\mathbb{Z}\\}$.",
          "Outer limit (in $m$). If $x=p/q\\in\\mathbb{Q}$ (lowest terms), then $q\\mid m!$ for every $m\\ge q$, so $m!\\,x\\in\\mathbb{Z}$ and $h_m(x)=1$ for all large $m$; thus $f(x)=1$. If $x\\notin\\mathbb{Q}$, then $m!\\,x$ is never an integer, so $h_m(x)=0$ for every $m$; thus $f(x)=0$. Therefore $f=\\mathbf{1}_{\\mathbb{Q}}$ is exactly the Dirichlet function, and it is well defined everywhere.",
          "Classify at any $a$. Between any two reals lie both a rational and an irrational, so every interval $(a-\\delta,a)$ and $(a,a+\\delta)$ contains points where $f=1$ and points where $f=0$. Hence neither one-sided limit exists (the values cluster at both $0$ and $1$). No one-sided limit existing rules out removable (needs a two-sided limit) and rules out jump (needs both one-sided limits to exist). What remains is essential.",
          "Count. The argument used no special feature of $a$, so $f$ is discontinuous at $every$ real number. The discontinuity set is all of $\\mathbb{R}$, an uncountable set: $f$ is nowhere continuous. $f$ has an essential discontinuity at every $a\\in\\mathbb{R}$; the discontinuity set is $\\mathbb{R}$ (uncountably many)."
        ]
      },
      {
        "name": "Oscillation criterion (quantitative essential test)",
        "steps": [
          "Recall the oscillation of $g$ at $a$: $\\omega(g,a)=\\lim_{\\delta\\to0^+}\\big(\\sup_{|x-a|<\\delta} g(x)-\\inf_{|x-a|<\\delta} g(x)\\big)$. A point $a$ is a continuity point iff $\\omega(g,a)=0$; if $\\omega(g,a)>0$ the discontinuity is essential whenever, additionally, no one-sided limit exists (oscillatory rather than a clean jump).",
          "Take $f=\\mathbf{1}_{\\mathbb{Q}}$ from Method 1. For every $\\delta>0$ and every $a$, the ball $(a-\\delta,a+\\delta)$ contains a rational (so $\\sup f=1$) and an irrational (so $\\inf f=0$). Thus $\\omega(f,a)=1$ for all $a$.",
          "Since $\\omega(f,a)=1>0$ at every $a$, $f$ is discontinuous everywhere. Moreover the supremum $1$ and infimum $0$ are attained in BOTH the left and the right half-neighbourhoods, so each one-sided limit oscillates between $0$ and $1$ and fails to exist; this is the essential (second-kind) signature, not a jump (a jump would give existing, unequal one-sided limits) and not removable ($\\omega=0$ would be required after a single redefinition, impossible here).",
          "Constant positive oscillation at every point is the maximal possible failure for a $\\{0,1\\}$-valued function. So the discontinuity is essential at all of $\\mathbb{R}$, uncountably many points. $f$ is essentially discontinuous at every real; discontinuity set $=\\mathbb{R}$."
        ]
      },
      {
        "name": "Why continuous bricks fail: order of limits and Baire",
        "steps": [
          "Each brick $F_{m,n}(x)=\\cos^{2n}(m!\\pi x)$ is a finite power of a cosine, hence continuous on $\\mathbb{R}$ for every fixed $(m,n)$. Continuity of $f$ would follow ONLY if the convergence $F_{m,n}\\to f$ were uniform; it is merely pointwise, and the uniform limit theorem does not apply — pointwise limits of continuous functions need not be continuous.",
          "The failure is genuine and is sharpened by where the breakage enters: the inner limit $h_m=\\lim_n F_{m,n}=\\mathbf{1}\\{m!x\\in\\mathbb{Z}\\}$ is already discontinuous, with essential discontinuities exactly on the comb $\\{k/m!\\}$. As $m$ grows the combs nest and their union sweeps out $\\mathbb{Q}$, so the outer limit promotes a sparse comb of breaks into a dense, everywhere essential break set. (The order matters: taking the limits in the swapped order $\\lim_n\\lim_m$ would require $\\lim_m\\cos^{2n}(m!\\pi x)$ to exist for fixed $n$, which fails at typical irrationals — so only this order yields a well-defined $f$.)",
          "A structural confirmation via Baire category: a pointwise limit of continuous functions (a Baire class $1$ function) must have a DENSE set of continuity points. If $f$ were such a limit AND essential everywhere, it would have no continuity points — contradicting Baire. Indeed $\\mathbf{1}_{\\mathbb{Q}}$ is Baire class $2$, not class $1$; it cannot be a pointwise limit of continuous functions in ONE step, which is precisely why the construction needs the DOUBLE limit $\\lim_m\\lim_n$.",
          "Thus continuity of each brick is fully compatible with $f$ being nowhere continuous, and the discontinuity is essential at every point. $f$ is nowhere continuous with an essential discontinuity at every $a\\in\\mathbb{R}$; the discontinuity set is all of $\\mathbb{R}$."
        ]
      }
    ],
    "remark": "Insight: continuity is not preserved by pointwise limits, and this example is the loudest possible witness — continuous bricks, one limit, then a second limit, and out drops the nowhere-continuous Dirichlet function. The double limit is not decoration: a single pointwise limit of continuous functions is Baire class 1 and (by Baire) must be continuous on a dense set, so it can never be essential everywhere; $\\mathbf{1}_{\\mathbb{Q}}$ is Baire class 2 and genuinely requires $\\lim_m\\lim_n$. The order of the limits is load-bearing too: only inner-$n$/outer-$m$ is well defined. The trap — \"redefine the rational spikes and it heals\" — confuses a value mismatch (removable) with a missing limit (essential): when the limit fails at every point, no countable surgery can restore continuity, because the oscillation $\\omega(f,a)=1$ persists at every $a$."
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
    "title": "The Linear Term That Refuses to Die",
    "difficulty": 5,
    "task": "Classify by parameter and find the critical value",
    "tags": [
      "removable-vs-essential",
      "infinite-pole",
      "order-of-vanishing",
      "taylor-series",
      "phase-transition",
      "parameter-dependence"
    ],
    "statement": "For a real parameter $a$ define, away from the origin,\n\\[\nf_a(x)=\\frac{e^{ax}-1-\\sin x}{1-\\cos x},\\qquad x\\neq 0 .\n\\]\nThe behaviour of $f_a$ at the single suspect point $x=0$ depends on $a$. Determine for which $a$ the discontinuity of $f_a$ at $0$ is removable, for which it is an infinite pole (an essential, second-kind discontinuity), and pinpoint the unique critical value $a_\\star$ at which the type switches. For that $a_\\star$ also state the value to which $f_{a_\\star}$ extends continuously. A confident student computes $\\lim_{x\\to0}f_a(x)=a^{2}$ for every $a$ and declares the discontinuity removable for all $a$ — decide whether that is correct.",
    "answer": "\\[\\boxed{\\ a_\\star=1:\\ \\text{removable with}\\ \\lim_{x\\to0}f_1=1;\\quad \\text{infinite pole for all}\\ a\\neq1\\ }\\]",
    "trap": "The seductive error is to expand only to second order: since $e^{ax}-1\\approx ax+\\tfrac{a^2x^2}{2}$ and $\\sin x\\approx x$, a student writes numerator $\\approx (a-1)x+\\tfrac{a^2}{2}x^2$ and denominator $\\approx \\tfrac{x^2}{2}$, then — fatally — DROPS the linear term as 'lower order' and reads off $\\lim f_a=\\tfrac{a^2/2}{1/2}=a^{2}$, concluding removable for every $a$. But $(a-1)x$ is NOT lower order than $x^2$; it is HIGHER (it vanishes more slowly). For $a\\neq1$ the numerator vanishes only to order $1$ while the denominator vanishes to order $2$, so $f_a\\sim \\dfrac{2(a-1)}{x}\\to\\pm\\infty$: an infinite pole, not removable. The 'limit $=a^2$' is the value of a DIFFERENT, order-$\\ge2$ remainder; it is the right answer only when the killer linear coefficient $a-1$ happens to be zero, i.e. exactly at $a=1$ (where indeed $a^2=1$).",
    "solutions": [
      {
        "name": "Match the orders of vanishing (Taylor)",
        "steps": [
          "Expand each piece about $0$: $e^{ax}-1=ax+\\dfrac{a^2x^2}{2}+\\dfrac{a^3x^3}{6}+\\cdots$ and $\\sin x=x-\\dfrac{x^3}{6}+\\cdots$, so the numerator is $N_a(x)=(a-1)x+\\dfrac{a^2}{2}x^2+O(x^3)$. The denominator is $1-\\cos x=\\dfrac{x^2}{2}-\\dfrac{x^4}{24}+\\cdots$, which vanishes to order exactly $2$ with leading coefficient $\\tfrac12$.",
          "Read off the order of vanishing of $N_a$. If $a\\neq1$ the linear coefficient $a-1\\neq0$, so $N_a$ vanishes to order $1$. Then $f_a=\\dfrac{N_a}{1-\\cos x}\\sim\\dfrac{(a-1)x}{x^2/2}=\\dfrac{2(a-1)}{x}\\to\\pm\\infty$ as $x\\to0^{\\pm}$, an infinite pole (the one-sided limits are $+\\infty$ and $-\\infty$, opposite signs, so the discontinuity is essential of second kind).",
          "If $a=1$ the linear term dies, $N_1(x)=\\dfrac12x^2+\\dfrac13x^3+\\cdots$ vanishes to order $2$, matching the denominator. Both numerator and denominator now have order $2$, so $\\lim_{x\\to0}f_1=\\dfrac{1/2}{1/2}=1$, a finite two-sided limit: the discontinuity is removable, healed by setting $f_1(0)=1$.",
          "Hence the type is governed entirely by the linear coefficient $a-1$: pole for $a\\neq1$, removable only at the single critical value $a_\\star=1$ with limiting value $1$. $a_\\star=1$, removable with $\\lim_{x\\to0}f_1=1$; infinite pole for all $a\\neq1$."
        ]
      },
      {
        "name": "Split off the offending term",
        "steps": [
          "Write the numerator as $e^{ax}-1-\\sin x=(a-1)x+\\big[(e^{ax}-1-ax)-(\\sin x-x)\\big]$. Both bracketed pieces vanish to order $\\ge2$, so divide through: $f_a(x)=(a-1)\\,\\dfrac{x}{1-\\cos x}+\\dfrac{(e^{ax}-1-ax)-(\\sin x-x)}{1-\\cos x}.$",
          "The second fraction has order-$\\ge2$ numerator over order-$2$ denominator, so it has a finite limit: $\\lim_{x\\to0}\\dfrac{(e^{ax}-1-ax)-(\\sin x-x)}{1-\\cos x}=\\dfrac{a^2/2-0}{1/2}=a^2$ (this is exactly the number the trap mistakes for the whole answer).",
          "The first term contains the pole: since $1-\\cos x\\sim\\dfrac{x^2}{2}$, we have $\\dfrac{x}{1-\\cos x}\\sim\\dfrac{2}{x}\\to\\pm\\infty$. Therefore $(a-1)\\dfrac{x}{1-\\cos x}\\to\\pm\\infty$ whenever $a\\neq1$, and this unbounded term dominates the finite $a^2$ remainder; $f_a$ has an infinite pole.",
          "Only when the prefactor $a-1=0$ does the pole term vanish identically, leaving $f_1\\to 0\\cdot(\\text{pole})+a^2\\big|_{a=1}=1$. So removable iff $a=1$, value $1$; pole otherwise. $a_\\star=1$, $\\lim_{x\\to0}f_1=1$; infinite pole for $a\\neq1$."
        ]
      },
      {
        "name": "L'Hopital, watching when it is licensed",
        "steps": [
          "At $x=0$ the form is $\\dfrac{0}{0}$, so apply L'Hopital once: $f_a$ has the same one-sided limits as $g_a(x)=\\dfrac{a\\,e^{ax}-\\cos x}{\\sin x}$. As $x\\to0$ the denominator $\\sin x\\to0$ while the numerator $\\to a\\cdot1-1=a-1$.",
          "If $a\\neq1$ the numerator tends to the nonzero constant $a-1$ while $\\sin x\\to0^{\\pm}$, so $g_a\\to\\pm\\infty$ — the ratio is no longer indeterminate and L'Hopital must STOP; a finite limit does not exist. Concretely the one-sided limits are $\\operatorname{sign}(a-1)\\cdot(+\\infty)$ on the right and the opposite on the left: an infinite pole.",
          "If $a=1$ the numerator also $\\to0$, restoring the $\\tfrac00$ form, so a second application is licensed: $\\dfrac{a^2e^{ax}+\\sin x}{\\cos x}\\Big|_{a=1,\\,x\\to0}=\\dfrac{1\\cdot1+0}{1}=1$. The process terminates at a finite value, confirming removability with limit $1$.",
          "Thus L'Hopital itself diagnoses the switch: it terminates (finite answer) exactly when $a=1$ and breaks (numerator settles on a nonzero constant over a vanishing denominator) for every other $a$. $a_\\star=1$, removable value $1$; infinite pole for all $a\\neq1$."
        ]
      }
    ],
    "remark": "Insight: classifying a parametrised $\\tfrac00$ is a contest between the orders of vanishing of top and bottom, and the decisive quantity is the LOWEST surviving coefficient, never the most convenient one. Here the denominator is locked at order $2$, while the numerator's order is a step function of $a$: it is $1$ (coefficient $a-1$) for almost every $a$ and jumps up to $2$ only at the single value $a=1$ that kills the linear term. So the discontinuity undergoes a genuine phase transition — infinite pole for $a\\neq1$, removable for $a=1$ — driven by one vanishing coefficient. The trap 'limit $=a^2$' is the value of the order-$\\ge2$ remainder you get AFTER the linear term is gone; quoting it for general $a$ silently assumes the very cancellation ($a=1$) that defines the critical case."
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
    "answer": "$s$ has countably (infinitely) many discontinuities in $(0,1]$, exactly the points $x=\\tfrac1n$ for $n=1,2,3,\\dots$ At each interior crossing $x=\\tfrac1n$ with $n\\ge 2$ the function $\\sin(\\pi/x)$ changes sign, so the two one-sided limits are $+1$ and $-1$ (finite, unequal) while $s(\\tfrac1n)=0$: these are jump discontinuities, and there are infinitely many of them. The right endpoint $x=1$ is special: only the left limit exists, $\\lim_{x\\to1^-}s(x)=-1$, yet $s(1)=\\operatorname{sgn}(\\sin\\pi)=0$; since the (one-sided) limit exists but differs from the value, $x=1$ is a removable discontinuity, not a jump. Finally, at the limit point $x=0\\notin(0,1]$ the behaviour is essential/oscillatory: along $x\\to0^+$ the value $s(x)$ takes $+1$ and $-1$ infinitely often, so no one-sided limit exists.",
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
    "title": "The Even Root That Pretends to Cut",
    "difficulty": 5,
    "task": "Classify and count",
    "tags": [
      "sgn",
      "even-multiplicity",
      "floor",
      "removable-vs-jump",
      "one-sided-limits",
      "discontinuity-count"
    ],
    "statement": "On the interval $(0,4)$ define\n\\[\n\\Psi(x)=\\frac{\\operatorname{sgn}\\!\\big((2x-3)^{2}(2x-5)\\big)}{\\lfloor x\\rfloor},\n\\]\nwhere $\\operatorname{sgn}(t)$ is the sign function (with $\\operatorname{sgn}(0)=0$) and $\\lfloor\\cdot\\rfloor$ is the greatest-integer function. Take the domain of $\\Psi$ to be exactly the set of $x\\in(0,4)$ at which the expression is defined. First identify that domain. Then, at every point of the domain, decide whether $\\Psi$ is continuous and, where it is not, classify the discontinuity as removable, jump, or essential. Finally report the total count of discontinuities together with how many are of each type. Treat the root $x=\\tfrac32$ of the squared factor and the root $x=\\tfrac52$ of the linear factor with care, and account for what the floor does at the integers.",
    "answer": "\\[\\boxed{4\\ \\text{discontinuities}:\\ 1\\ \\text{removable},\\ 3\\ \\text{jump},\\ 0\\ \\text{essential}}\\]",
    "trap": "The squared factor $(2x-3)^{2}$ has its zero at $x=\\tfrac32$ with EVEN multiplicity, so $(2x-3)^{2}(2x-5)$ merely touches $0$ there without changing sign: it is negative on both sides. Hence $\\operatorname{sgn}$ drops to $0$ exactly at $x=\\tfrac32$ and snaps back to $-1$ immediately, while $\\lfloor x\\rfloor=1$ is constant nearby — so the two one-sided limits of $\\Psi$ are BOTH $-1$ and the only defect is the single value $\\Psi(\\tfrac32)=0$. That is textbook removable. The seductive errors: (a) seeing $\\operatorname{sgn}=0$ flanked by $\\operatorname{sgn}=-1$ and calling it a jump (a jump needs the two one-sided limits to be unequal — here they are equal); (b) calling it essential because the sign \"vanishes\" (essential needs a one-sided limit to fail to exist — here both exist); (c) confusing it with the genuine sign flip at the ODD root $x=\\tfrac52$, where $\\operatorname{sgn}$ goes $-1\\to+1$ and the limits really do differ (a true jump). Multiplicity parity, not the mere appearance of a zero, decides removable-vs-jump. A second miscount comes from forgetting the floor's own jumps at $x=2$ and $x=3$ (the sign is locally constant there, yet $1/\\lfloor x\\rfloor$ steps), or from wrongly counting $x=1$: on $(0,1)$ the floor is $0$ so $\\Psi$ is undefined there, making $x=1$ a one-sided (left-endpoint) point of the domain where $\\Psi$ is in fact continuous.",
    "solutions": [
      {
        "name": "Locate the domain, then read each one-sided pair",
        "steps": [
          "Domain. The denominator $\\lfloor x\\rfloor$ vanishes precisely on $(0,1)$, where $\\lfloor x\\rfloor=0$; everywhere else on $(0,4)$ it is a nonzero integer. So $\\Psi$ is defined exactly on $D=[1,4)$, and $x=1$ is the left endpoint of $D$ (no points of $D$ lie immediately to its left).",
          "Numerator sign by multiplicity. Write $P(x)=(2x-3)^{2}(2x-5)$. The factor $(2x-3)^{2}\\ge0$ is zero only at $x=\\tfrac32$; the factor $(2x-5)$ is negative for $x<\\tfrac52$ and positive for $x>\\tfrac52$. Hence $\\operatorname{sgn}P(x)=-1$ on $(1,\\tfrac32)\\cup(\\tfrac32,\\tfrac52)$, equals $0$ at the touch point $x=\\tfrac32$ and at the crossing point $x=\\tfrac52$, and equals $+1$ on $(\\tfrac52,4)$. The even root does NOT flip the sign; the odd root does.",
          "Continuity at the endpoint $x=1$. Only the right side is in $D$. As $x\\to1^{+}$, $\\operatorname{sgn}P\\to-1$ and $\\lfloor x\\rfloor=1$, so $\\Psi\\to-1=\\Psi(1)$. Thus $\\Psi$ is continuous at $x=1$; it is not a discontinuity.",
          "The even root $x=\\tfrac32$ (floor $=1$ on both sides). Left and right limits are both $\\dfrac{-1}{1}=-1$, so $\\lim_{x\\to3/2}\\Psi=-1$ EXISTS; but $\\Psi(\\tfrac32)=\\dfrac{0}{1}=0\\ne-1$. A two-sided limit that exists and disagrees with the value is the definition of a removable discontinuity. One removable.",
          "The floor jump $x=2$ (sign constant $-1$). $\\lim_{x\\to2^{-}}\\Psi=\\dfrac{-1}{1}=-1$ while $\\lim_{x\\to2^{+}}\\Psi=\\dfrac{-1}{2}=-\\tfrac12$. Both one-sided limits exist and are unequal: a jump (gap $\\tfrac12$).",
          "The odd root $x=\\tfrac52$ (floor $=2$ on both sides). $\\lim_{x\\to5/2^{-}}\\Psi=\\dfrac{-1}{2}=-\\tfrac12$ and $\\lim_{x\\to5/2^{+}}\\Psi=\\dfrac{+1}{2}=+\\tfrac12$; existing and unequal, so a jump (gap $1$). This is the genuine sign flip, contrasting with the touch at $\\tfrac32$.",
          "The floor jump $x=3$ (sign constant $+1$). $\\lim_{x\\to3^{-}}\\Psi=\\dfrac{+1}{2}=+\\tfrac12$ and $\\lim_{x\\to3^{+}}\\Psi=\\dfrac{+1}{3}$; existing and unequal, so a jump. On the rest of $D$, $\\Psi$ is locally constant hence continuous. Tally: discontinuities at $\\tfrac32,2,\\tfrac52,3$, i.e. $4$ in total \\[\\boxed{4\\ \\text{discontinuities}:\\ 1\\ \\text{removable},\\ 3\\ \\text{jump},\\ 0\\ \\text{essential}}.\\]"
        ]
      },
      {
        "name": "Piecewise-constant normal form (every limit becomes obvious)",
        "steps": [
          "Because $\\operatorname{sgn}P$ is constant on each open piece and $1/\\lfloor x\\rfloor$ is constant on each unit interval, $\\Psi$ is a step function on $D=[1,4)$. Reduce it to its blocks: on $[1,\\tfrac32)\\cup(\\tfrac32,2)$ the sign is $-1$ and $\\lfloor x\\rfloor=1$, giving $\\Psi=-1$; on $(2,\\tfrac52)$ the sign is $-1$, $\\lfloor x\\rfloor=2$, giving $\\Psi=-\\tfrac12$; on $(\\tfrac52,3)$ the sign is $+1$, $\\lfloor x\\rfloor=2$, giving $\\Psi=+\\tfrac12$; on $(3,4)$ the sign is $+1$, $\\lfloor x\\rfloor=3$, giving $\\Psi=+\\tfrac13$. The only off-block values are $\\Psi(\\tfrac32)=0$ and $\\Psi(\\tfrac52)=0$ (the sign is $0$ there).",
          "Continuity occurs exactly where consecutive blocks agree in limit. Reading the block values $-1,\\ -1,\\ -\\tfrac12,\\ +\\tfrac12,\\ +\\tfrac13$ across the breakpoints $\\tfrac32,2,\\tfrac52,3$: at $\\tfrac32$ the neighbouring blocks are both $-1$ (no gap in the limit, only the isolated value $0$); at $2$ the blocks are $-1$ then $-\\tfrac12$ (gap); at $\\tfrac52$ they are $-\\tfrac12$ then $+\\tfrac12$ (gap); at $3$ they are $+\\tfrac12$ then $+\\tfrac13$ (gap).",
          "Classify by the gap test. A breakpoint where the two surrounding blocks share the same value has an existing two-sided limit; if the function value there differs, it is removable. That is exactly $x=\\tfrac32$ (limit $-1$, value $0$): one removable. The three breakpoints with unequal neighbouring block values are jumps: $x=2,\\ \\tfrac52,\\ 3$. No block ever fails to have a finite one-sided limit, so no essential discontinuity can occur (a step function's one-sided limits always exist).",
          "Hence the discontinuity set is $\\{\\tfrac32,2,\\tfrac52,3\\}$ and \\[\\boxed{4\\ \\text{discontinuities}:\\ 1\\ \\text{removable},\\ 3\\ \\text{jump},\\ 0\\ \\text{essential}}.\\]"
        ]
      },
      {
        "name": "Oscillation/jump-functional bookkeeping",
        "steps": [
          "For a function with finite one-sided limits, define the oscillation $\\omega(a)=\\big|\\Psi(a^{+})-\\Psi(a^{-})\\big|$ measuring the size of the limit-gap, and separately compare $\\Psi(a)$ with the common limit when $\\Psi(a^{+})=\\Psi(a^{-})$. Since $\\Psi$ is built from $\\operatorname{sgn}$ (a step) over $\\lfloor x\\rfloor$ (a step), every one-sided limit exists and is finite on $D=[1,4)$; this alone forbids essential discontinuities outright — essential requires a one-sided limit to fail to exist.",
          "Compute the one-sided limits at the four interior breakpoints (using $\\operatorname{sgn}P=-1,-1,+1$ on the consecutive open pieces and $\\lfloor x\\rfloor=1,2,2,3$): $\\Psi(\\tfrac32^{\\mp})=-1$, so $\\omega(\\tfrac32)=0$; $\\Psi(2^{-})=-1,\\ \\Psi(2^{+})=-\\tfrac12$, so $\\omega(2)=\\tfrac12$; $\\Psi(\\tfrac52^{-})=-\\tfrac12,\\ \\Psi(\\tfrac52^{+})=+\\tfrac12$, so $\\omega(\\tfrac52)=1$; $\\Psi(3^{-})=+\\tfrac12,\\ \\Psi(3^{+})=+\\tfrac13$, so $\\omega(3)=\\tfrac16$. The endpoint $x=1$ has $\\omega$ undefined on the left (outside $D$) and right-limit $=\\Psi(1)=-1$, so it is continuous.",
          "Decision rule. $\\omega(a)>0\\Rightarrow$ jump (finite limits, unequal): this fires at $2,\\tfrac52,3$, giving three jumps. $\\omega(a)=0$ with $\\Psi(a)\\ne$ common limit $\\Rightarrow$ removable: at $\\tfrac32$, $\\omega=0$ but $\\Psi(\\tfrac32)=0\\ne-1$, giving one removable. The vanishing oscillation at $\\tfrac32$ is precisely the fingerprint of the even multiplicity — the sign returns to the same branch — whereas the strictly positive $\\omega$ at $\\tfrac52$ is the fingerprint of the odd multiplicity sign flip.",
          "Summing the ledger: zero points with a missing one-sided limit (no essential), one point with $\\omega=0$ and a value defect (removable), three points with $\\omega>0$ (jumps). \\[\\boxed{4\\ \\text{discontinuities}:\\ 1\\ \\text{removable},\\ 3\\ \\text{jump},\\ 0\\ \\text{essential}}.\\]"
        ]
      }
    ],
    "remark": "Insight: with the sign function, the parity of a root's multiplicity is the whole story. An even-multiplicity zero makes $\\operatorname{sgn}$ dip to $0$ and return to the SAME branch, so the two-sided limit survives and the break is merely removable (a one-point value defect); an odd-multiplicity zero genuinely flips the branch, so the one-sided limits split and you get a true jump. The squared factor at $x=\\tfrac32$ and the linear factor at $x=\\tfrac52$ are the controlled experiment isolating exactly this contrast. Layered on top, the floor contributes its own honest jumps at the integers $2,3$ even where the sign is locally constant, while the integer $x=1$ is a red herring: the function is simply undefined on $(0,1)$, making $x=1$ a continuous left endpoint rather than a discontinuity. Nothing here is essential, because a quotient of step functions always has finite one-sided limits, so the only live question is removable-vs-jump, settled by multiplicity parity."
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
    "statement": "Define \\[ G(x)=\\begin{cases} x^{2}\\sin\\dfrac1x, & x<0,\\\\  7, & x=0,\\\\  \\sin\\dfrac1x, & 0<x<\\dfrac{1}{\\pi},\\\\  \\dfrac{x^{2}-4}{x-2}, & x\\ge\\dfrac{1}{\\pi},\\ x\\neq2,\\\\  11, & x=2. \\end{cases} \\] Classify the discontinuity of $G$ at $x=0$ and at $x=2$. For each, give the type, and where removable state the correct value.",
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
    "title": "The Exponential Caged by a Single Bounded Window",
    "difficulty": 5,
    "task": "Determine all such f and prove the boundedness hypothesis is what forces uniqueness",
    "tags": [
      "multiplicative-cauchy",
      "local-boundedness",
      "hamel-pathology",
      "regularity-from-boundedness",
      "positivity",
      "uniqueness"
    ],
    "statement": "A function $f:\\mathbb{R}\\to\\mathbb{R}$ satisfies, for all real $x,y$,\n\\[\nf(x+y)=f(x)\\,f(y),\\qquad f(x)\\,f(-x)=1,\n\\]\nand is bounded on some nondegenerate interval $(\\alpha,\\beta)$ — that is, there exist a real constant $M$ with $|f(t)|\\le M$ for every $t\\in(\\alpha,\\beta)$. Continuity is not assumed anywhere. You are also told $f(1)=\\tfrac13$.\n\nDetermine $f$ completely. In your argument you must (i) use $f(x)f(-x)=1$ to settle the sign and non-vanishing of $f$; (ii) reduce the equation to additive Cauchy and show that boundedness on the single window $(\\alpha,\\beta)$ propagates to a neighbourhood of $0$, forcing continuity and hence linearity of the additive function; and (iii) explain precisely why dropping the boundedness clause would make the answer non-unique, exhibiting the kind of solution that then sneaks in. Could $f$ ever take a negative value?",
    "answer": "\\[\\boxed{\\,f(x)=3^{-x}\\,}\\]",
    "trap": "The fatal shortcut is to treat $f(x+y)=f(x)f(y)$ together with $f(1)=\\tfrac13$ as if the equation alone pins $f(x)=3^{-x}$ — pattern-matching to \"the exponential equation\" and never spending the boundedness hypothesis. It does not: take any non-linear additive (Hamel) function $L:\\mathbb{R}\\to\\mathbb{R}$ with $L(1)=\\ln\\tfrac13$ and set $f(x)=e^{L(x)}$. This $f$ satisfies $f(x+y)=f(x)f(y)$, satisfies $f(x)f(-x)=e^{L(x)+L(-x)}=e^{0}=1$, and even hits $f(1)=\\tfrac13$ — yet it is a wild, everywhere-discontinuous monster. The ONLY thing that murders it is local boundedness: a non-linear additive map has graph dense in the plane, hence is unbounded on every interval, so it cannot survive the clause $|f|\\le M$ on $(\\alpha,\\beta)$. A second, subtler slip is to imagine the bound must live on a large or symmetric interval — any nondegenerate window suffices, because boundedness there transfers to a neighbourhood of $0$ via $g(x)-g(y)$. (A third decoy: guessing $f$ might be negative because $\\tfrac13<1$ \"looks like\" it could flip — but $f(x)=f(x/2)^2\\ge0$ and $f$ never vanishes force $f>0$ outright.)",
    "solutions": [
      {
        "name": "Sign-pin, logarithm, then boundedness forces linearity",
        "steps": [
          "Non-vanishing and positivity from $f(x)f(-x)=1$. The product being $1$ shows $f(x)\\ne0$ for every $x$ (a zero would make the product $0$). Setting $x=y=0$ in $f(x+y)=f(x)f(y)$ gives $f(0)=f(0)^2$, so $f(0)\\in\\{0,1\\}$; since $f$ is nowhere $0$, $f(0)=1$. Finally $f(x)=f\\!\\left(\\tfrac{x}{2}+\\tfrac{x}{2}\\right)=f\\!\\left(\\tfrac{x}{2}\\right)^2\\ge0$, and combined with non-vanishing this gives $f(x)>0$ for all $x$. So $f$ can never be negative.",
          "Reduce to additive Cauchy. Because $f>0$ we may define $g(x)=\\ln f(x)$. Then $g(x+y)=\\ln\\!\\big(f(x)f(y)\\big)=g(x)+g(y)$, the additive Cauchy equation, with $g(1)=\\ln\\tfrac13=-\\ln 3$. The window hypothesis transfers: on $(\\alpha,\\beta)$ we have $0<f\\le M$, and also $f\\ge \\tfrac1{M'}$ for some $M'$ on a subinterval (since $f>0$ is finite there), so $g=\\ln f$ is bounded on a nondegenerate subinterval $I=(a,b)$, say $|g|\\le K$ on $I$.",
          "Boundedness on $I$ propagates to a neighbourhood of $0$. Let $L=b-a>0$. For any $t$ with $|t|<L$ choose $x,y\\in I$ with $x-y=t$ (possible because the difference set of $I$ is $(-L,L)$). Additivity gives $g(t)=g(x-y)=g(x)-g(y)$, hence $|g(t)|\\le 2K$ for all $|t|<L$. Thus $g$ is bounded on the symmetric neighbourhood $(-L,L)$ of $0$ — the single window has spread to the origin.",
          "Bounded near $0$ $\\Rightarrow$ continuous at $0$ $\\Rightarrow$ linear. Say $|g|\\le 2K$ on $(-L,L)$. We show $g$ is continuous at $0$ by a scaling argument. Take any sequence $s_k\\to0$; choose integers $m_k=\\big\\lfloor L/(2|s_k|)\\big\\rfloor\\to\\infty$, so that $m_k|s_k|<L$, hence $m_k s_k\\in(-L,L)$ and $|g(m_k s_k)|\\le 2K$. Additivity gives $g(m_k s_k)=m_k\\,g(s_k)$, so $|g(s_k)|=\\dfrac{|g(m_k s_k)|}{m_k}\\le\\dfrac{2K}{m_k}\\to0=g(0)$. Thus $g(s_k)\\to0$, i.e. $g$ is continuous at $0$. For any $a$, $g(x)-g(a)=g(x-a)\\to g(0)=0$ as $x\\to a$, so $g$ is continuous everywhere. A continuous additive function is linear: $g(q)=q\\,g(1)$ for rationals $q$, and continuity extends this to all reals, giving $g(x)=x\\,g(1)=-x\\ln3$.",
          "Assemble. $f(x)=e^{g(x)}=e^{-x\\ln3}=3^{-x}$. It indeed satisfies $f(x+y)=f(x)f(y)$, $f(x)f(-x)=3^{-x}\\,3^{x}=1$, is bounded on every bounded interval, and $f(1)=3^{-1}=\\tfrac13$. Therefore $\\boxed{f(x)=3^{-x}}$ is the unique solution."
        ]
      },
      {
        "name": "Continuity at one point, dragged everywhere by the equation",
        "steps": [
          "As in Solution 1, $f(x)f(-x)=1$ forces $f$ nowhere zero, $f(0)=1$, and $f(x)=f(x/2)^2>0$; so $f>0$ and $g=\\ln f$ is additive with $g(1)=-\\ln3$, bounded on a window $I=(a,b)$ and (by the difference trick $g(t)=g(x)-g(y)$) bounded on $(-L,L)$, $L=b-a$.",
          "Continuity of $g$ at $0$. An additive function bounded on a neighbourhood of $0$ is continuous at $0$: scale the bound. Suppose $g(t_k)\\not\\to0$ for some $t_k\\to0$; passing to a subsequence, $|g(t_k)|\\ge\\varepsilon>0$. Choose integers $N_k\\to\\infty$ with $N_k|t_k|<L$ but $N_k\\varepsilon\\to\\infty$ (possible since $t_k\\to0$, e.g. $N_k=\\lfloor L/(2|t_k|)\\rfloor$). Then $N_k t_k\\in(-L,L)$ so $|g(N_k t_k)|\\le 2K$, yet $|g(N_k t_k)|=N_k|g(t_k)|\\ge N_k\\varepsilon\\to\\infty$ — contradiction. Hence $g$ is continuous at $0$.",
          "Continuity at $0$ spreads to all of $\\mathbb{R}$ via additivity. For any $a$ and any $x\\to a$, $g(x)-g(a)=g(x-a)\\to g(0)=0$ because $x-a\\to0$ and $g$ is continuous at $0$. So $g$ is continuous everywhere.",
          "Continuous additive $\\Rightarrow$ linear. On $\\mathbb{Q}$, additivity gives $g(q)=q\\,g(1)$; continuity extends this to all reals, so $g(x)=x\\,g(1)=-x\\ln3$. Exponentiating, $f(x)=3^{-x}$, and one checks all three hypotheses hold. Thus $\\boxed{f(x)=3^{-x}}$."
        ]
      },
      {
        "name": "Why uniqueness fails without boundedness (necessity of the hypothesis)",
        "steps": [
          "Strip the boundedness clause and keep only $f(x+y)=f(x)f(y)$, $f(x)f(-x)=1$, $f(1)=\\tfrac13$. As before $f>0$ and $g=\\ln f$ is an additive function with $g(1)=-\\ln3$. Additive functions form a $\\mathbb{Q}$-vector space; using a Hamel basis $B$ of $\\mathbb{R}$ over $\\mathbb{Q}$ containing $1$, prescribe $g$ freely on $B$ subject only to $g(1)=-\\ln3$ and extend $\\mathbb{Q}$-linearly.",
          "Make it genuinely wild. Pick a basis element $\\xi\\ne1$ and set $g(\\xi)$ to any value $\\notin\\{-\\xi\\ln3\\}$, so $g$ is NOT of the form $x\\mapsto -x\\ln3$. The resulting $f=e^{g}$ satisfies $f(x+y)=f(x)f(y)$ and $f(x)f(-x)=e^{g(x)+g(-x)}=e^{0}=1$ and $f(1)=e^{-\\ln3}=\\tfrac13$ — every surviving hypothesis — yet $f\\ne3^{-x}$.",
          "Such an $f$ is forced to violate boundedness on every interval. A non-linear additive $g$ has graph $\\{(x,g(x))\\}$ dense in $\\mathbb{R}^2$ (two $\\mathbb{Q}$-independent directions $(\\,1,g(1))$ and $(\\xi,g(\\xi))$ that are not parallel span a dense $\\mathbb{Q}$-lattice), so on any interval $g$ is unbounded above and below; hence $f=e^{g}$ is unbounded on every interval. This is exactly the wall the hypothesis $|f|\\le M$ on $(\\alpha,\\beta)$ removes.",
          "Conclusion: among ALL solutions of the equation with the sign/normalization data, the maps $f=e^{g}$ ($g$ additive, $g(1)=-\\ln3$) are a vast non-measurable family; the boundedness window selects the unique continuous representative. Since $3^{-x}$ is bounded on bounded intervals and the wild ones are not, the hypothesis pins exactly one survivor: $\\boxed{f(x)=3^{-x}}$. The boundedness is not decoration — it is the entire uniqueness mechanism."
        ]
      }
    ],
    "remark": "Insight: the exponential equation $f(x+y)=f(x)f(y)$ does NOT, by itself, deliver $a^x$ — its solution set is a wilderness of $e^{(\\text{Hamel-additive})}$ functions, all everywhere discontinuous and non-measurable. Continuity (the usual textbook hypothesis) tames it, but the sharp truth is that you need far less: boundedness on one tiny interval is already a death sentence for every wild solution. The lever is a two-line transfer, $g(t)=g(x)-g(y)$ with $x-y=t$, which carries a bound from any window to a neighbourhood of $0$; an additive function bounded near $0$ is continuous at $0$, and additivity then drags continuity everywhere, collapsing to linearity. The companion clause $f(x)f(-x)=1$ does triple duty for free — it kills the trivial $f\\equiv0$, certifies $f(0)=1$, and (with $f=f(\\cdot/2)^2$) forces strict positivity so the logarithm is legal and no negative-valued branch can exist. The chosen value $f(1)=\\tfrac13<1$ is a deliberate decoy: a decreasing exponential tempts one to look for a sign flip that the positivity argument forbids. The whole problem is a referendum on a single principle — for $f(x+y)=f(x)f(y)$, local boundedness $\\Rightarrow$ continuity $\\Rightarrow$ $f=a^x$ — and on remembering that without that regularity the answer is not unique."
  },
  {
    "theme": "functionaleq",
    "themeLabel": "Continuous Functional Equations",
    "title": "The Logarithm That Hides a Double-Touch Minimum",
    "difficulty": 5,
    "task": "Pin f from continuity, then determine all c",
    "tags": [
      "log-cauchy",
      "continuity-forces-uniqueness",
      "odd-under-inversion",
      "global-vs-local-min",
      "double-root",
      "parameter-threshold"
    ],
    "statement": "Let $f:(0,\\infty)\\to\\mathbb{R}$ be continuous and satisfy, for all $x,y>0$,\n\\[\nf(xy)=f(x)+f(y),\\qquad\\text{and}\\qquad f(x)+f\\!\\left(\\tfrac1x\\right)=0 .\n\\]\nYou are given the single normalization $f(e)=1$.\n\nPart (a). Prove from continuity alone (differentiability is not assumed) that these conditions determine $f$ uniquely on $(0,\\infty)$, and identify $f$. In your argument show that the inversion identity $f(x)+f(1/x)=0$ — \"$f$ is odd under $x\\mapsto 1/x$\" — is in fact a free consequence of the multiplicative-to-additive equation, and explain what continuity rules out that the bare equation does not.\n\nPart (b). With this $f$ now fixed, and a real parameter $c$, define on the closed interval $[1,e]$ the function\n\\[\ng(x)=2\\,f(x)^{3}-3\\,f(x)^{2}+c\\,f(x)+x^{0}-1 .\n\\]\n(The harmless tail $x^{0}-1=0$ is written only to stress $g$ is built purely from $f$ and a linear-in-$f$ parameter term.) Determine all real $c$ for which $g$ attains its minimum value on $[1,e]$ at exactly one point of $[1,e]$.",
    "answer": "\\[\\boxed{\\,c\\in\\mathbb{R}\\setminus\\left\\{\\tfrac98\\right\\}\\,}\\]",
    "trap": "Part (b) is a referendum on the difference between a LOCAL interior minimum and the GLOBAL minimum. After substituting $t=f(x)=\\ln x\\in[0,1]$, the natural move is to set $h'(t)=6t^{2}-6t+c=0$, note its discriminant $36-24c\\ge0$ gives an interior critical point $t^{+}=\\tfrac12+\\tfrac{\\sqrt{36-24c}}{12}\\in(0,1)$ for $0<c<\\tfrac32$, check $h''(t^{+})>0$ to certify it is a local minimum, and then declare that this lone interior local minimum is the unique global minimizer — concluding the minimum is attained exactly once for every such $c$, and hence (gluing the monotone regimes) for ALL $c$. That is the fatal error. A local minimum need not be the global minimum on a closed interval: one must compare $h(t^{+})$ with the endpoint values $h(0)=0$ and $h(1)=c-1$. As $c$ increases through $\\tfrac98$ the interior value $h(t^{+})$ rises through $0$ and the LEFT endpoint $t=0$ (i.e. $x=1$) silently overtakes it. Exactly at $c=\\tfrac98$ the two are EQUAL — the global minimum value $0$ is hit at BOTH $x=1$ and $x=e^{3/4}$, because there $h(t)=\\tfrac18\\,t(4t-3)^{2}$ has a genuine double root at $t=\\tfrac34$ riding on top of the simple root at $t=0$. So the minimum is attained exactly once for every $c$ EXCEPT $c=\\tfrac98$. A second, subtler slip is to trust the discriminant $36-24c$ as the whole story and miss that for $c\\ge\\tfrac32$ (no interior critical point) and for $c\\le0$ the function is monotone — those regimes are fine (unique min), but they lull you into thinking 'critical-point bookkeeping' settles everything, when the tie that kills uniqueness happens at an interior $c$ where a perfectly ordinary-looking local min coincides in value with an endpoint. A third decoy: assuming the inversion identity $f(x)+f(1/x)=0$ is an extra constraint that helps pin $c$ — it constrains nothing beyond what $f(xy)=f(x)+f(y)$ already forces.",
    "solutions": [
      {
        "name": "Continuity collapses Cauchy to the logarithm; then exact factorization at the threshold",
        "steps": [
          "Part (a): identify $f$. Put $x=y=1$ in $f(xy)=f(x)+f(y)$: $f(1)=2f(1)$, so $f(1)=0$. The inversion identity is then automatic: $0=f(1)=f(x\\cdot\\tfrac1x)=f(x)+f(\\tfrac1x)$, i.e. $f(x)+f(1/x)=0$ for every $x>0$ — it is a free consequence, not an independent hypothesis. Now transport to additive Cauchy by $u=\\ln x$: define $A(u)=f(e^{u})$ for $u\\in\\mathbb{R}$. Then $A(u+v)=f(e^{u}e^{v})=f(e^{u})+f(e^{v})=A(u)+A(v)$, the additive Cauchy equation, and $A$ is continuous because $f$ and $\\exp$ are. A continuous additive function is linear: $A(u)=A(1)\\,u$, and $A(1)=f(e)=1$, so $A(u)=u$. Hence $f(x)=A(\\ln x)=\\ln x$. Continuity is exactly what rules out the pathological non-measurable additive solutions (those built from a Hamel basis), which would otherwise let $A$ — and hence $f$ — be wild; so $f(x)=\\ln x$ is the unique continuous solution.",
          "Part (b): reduce to a cubic on $[0,1]$. Since $f(x)=\\ln x$ and $x^{0}-1=0$, on $[1,e]$ set $t=\\ln x$, which sweeps $[0,1]$ continuously and strictly monotonically as $x$ runs over $[1,e]$; thus $x\\mapsto t$ is a bijection $[1,e]\\to[0,1]$ and minimizers correspond one-to-one. The objective becomes $h(t)=2t^{3}-3t^{2}+ct$ on $t\\in[0,1]$. Counting argmin points of $g$ on $[1,e]$ is identical to counting argmin points of $h$ on $[0,1]$.",
          "Locate the tie by an exact factorization. The endpoint values are $h(0)=0$ and $h(1)=c-1$. Ask when the global minimum is attained at two points. Try the candidate $c=\\tfrac98$: then $h(t)=2t^{3}-3t^{2}+\\tfrac98 t=\\tfrac18\\,t\\,(16t^{2}-24t+9)=\\tfrac18\\,t\\,(4t-3)^{2}$. On $[0,1]$ this is $\\ge0$ (product of $t\\ge0$ and a square), and equals $0$ exactly where $t=0$ or $4t-3=0$, i.e. at $t=0$ and $t=\\tfrac34$. So the minimum value is $0$, attained at BOTH $t=0$ ($x=1$) and $t=\\tfrac34$ ($x=e^{3/4}$): two points. Hence $c=\\tfrac98$ FAILS the 'exactly one' requirement.",
          "Show every other $c$ gives a unique minimizer. Write $h(t)=t\\,\\big(2t^{2}-3t+c\\big)$. The global minimum on the compact $[0,1]$ exists; we show its argmin is a singleton for $c\\ne\\tfrac98$. Consider the difference of $h$ from its minimum and use $h'(t)=6t^{2}-6t+c$, discriminant $36-24c$. (i) If $c\\ge\\tfrac32$: $36-24c\\le0$, so $h'\\ge0$ on $\\mathbb{R}$, $h$ is non-decreasing and in fact strictly increasing on $[0,1]$ except possibly at the single point $c=\\tfrac32$ where $h'$ has one zero; either way the minimum is at $t=0$ only. (ii) If $c\\le0$: on $[0,1]$, $h'(t)=6t^{2}-6t+c\\le6t^{2}-6t=6t(t-1)\\le0$, so $h$ is non-increasing, minimum at $t=1$ only. (iii) If $0<c<\\tfrac32$: there is a unique interior critical point $t^{+}=\\tfrac12+\\tfrac{\\sqrt{36-24c}}{12}\\in(0,1)$ that is a local min ($h''(t^{+})=12t^{+}-6>0$), and the interior value is $h(t^{+})$. The global min is $\\min\\{0,\\,h(t^{+})\\}$ (the right endpoint $h(1)=c-1$ is never below both: for $0<c<\\tfrac32$, $h(1)=c-1$ exceeds $h(t^{+})$, as $t^{+}$ is the strict interior min). Since $h(t)-h(t^{+})$ has $t^{+}$ as a double root, $h(t^{+})=0$ has the single solution $c=\\tfrac98$ in this range (the factorization above), with $h(t^{+})<0$ for $c<\\tfrac98$ (interior is the strict unique min) and $h(t^{+})>0$ for $c>\\tfrac98$ (endpoint $t=0$ is the strict unique min). In all sub-cases except $c=\\tfrac98$ the argmin is a single point.",
          "Conclude. The minimum of $g$ on $[1,e]$ is attained at exactly one point for every real $c$ except $c=\\tfrac98$, where it is attained at the two points $x=1$ and $x=e^{3/4}$. Therefore $\\boxed{c\\in\\mathbb{R}\\setminus\\{\\tfrac98\\}}$."
        ]
      },
      {
        "name": "Endpoint-versus-interior crossing tracked by the value gap",
        "steps": [
          "Part (a) as before gives $f(x)=\\ln x$: $f(1)=0$ makes the inversion identity free, $A(u)=f(e^{u})$ is continuous and additive hence linear with $A(1)=f(e)=1$, so $f(x)=\\ln x$ uniquely (continuity excludes the Hamel pathologies). Set $t=\\ln x\\in[0,1]$, $h(t)=2t^{3}-3t^{2}+ct$ on $[0,1]$; argmin points of $g$ on $[1,e]$ match argmin points of $h$ on $[0,1]$ bijectively.",
          "Define the value gap between the left endpoint and the interior local minimum. Only $0<c<\\tfrac32$ can produce a tie that is not at an endpoint, because outside this range $h$ is monotone (Solution 1, cases (i),(ii)) and the minimizer is a lone endpoint. For $0<c<\\tfrac32$ let $t^{+}=\\tfrac12+\\tfrac{\\sqrt{36-24c}}{12}$ be the interior local minimizer and set $D(c)=h(t^{+})-h(0)=h(t^{+})$. A tie of the global minimum between the interior point and $t=0$ occurs precisely when $D(c)=0$, and a strict unique minimizer occurs when $D(c)\\ne0$ (interior wins if $D<0$, left endpoint wins if $D>0$).",
          "Evaluate the gap and find its only zero. Since $t^{+}$ is a critical point, $h(t)-h(t^{+})$ is divisible by $(t-t^{+})^{2}$; writing $h(t)=2t^{3}-3t^{2}+ct$ and comparing leading and constant coefficients gives $h(t)=2(t-t^{+})^{2}(t-r)+h(t^{+})$ for the third root location $r$, but most cleanly one solves $h(t^{+})=0$ directly. From $6(t^{+})^{2}-6t^{+}+c=0$ we get $c=6t^{+}-6(t^{+})^{2}$, and substituting into $h(t^{+})=2(t^{+})^{3}-3(t^{+})^{2}+ct^{+}=2(t^{+})^{3}-3(t^{+})^{2}+t^{+}(6t^{+}-6(t^{+})^{2})=-4(t^{+})^{3}+3(t^{+})^{2}=(t^{+})^{2}(3-4t^{+})$. Thus $D(c)=(t^{+})^{2}(3-4t^{+})$, which (with $t^{+}>0$) vanishes iff $t^{+}=\\tfrac34$; then $c=6\\cdot\\tfrac34-6\\cdot\\tfrac9{16}=\\tfrac92-\\tfrac{27}{8}=\\tfrac98$.",
          "Read off monotonicity of the gap and conclude. For $t^{+}\\in(\\tfrac12,1)$ (the interior branch), $D(c)=(t^{+})^{2}(3-4t^{+})$ is positive when $t^{+}<\\tfrac34$ and negative when $t^{+}>\\tfrac34$; since $t^{+}$ decreases from $1$ toward $\\tfrac12$ as $c$ increases from $0$ to $\\tfrac32$, we get $D<0$ for $c<\\tfrac98$ (interior strict min) and $D>0$ for $c>\\tfrac98$ (left endpoint strict min), with equality only at $c=\\tfrac98$. There the global minimum value $0$ is shared by $t=0$ and $t=t^{+}=\\tfrac34$, two argmin points. Hence the minimum is attained at exactly one point iff $\\boxed{c\\in\\mathbb{R}\\setminus\\{\\tfrac98\\}}$."
        ]
      },
      {
        "name": "Resultant / discriminant view of when min value is hit twice",
        "steps": [
          "Part (a): $f(x)=\\ln x$ as established (continuity kills the wild additive solutions; the inversion identity is the free fact $f(x)+f(1/x)=f(1)=0$). Reduce part (b) to $h(t)=2t^{3}-3t^{2}+ct$ on $[0,1]$ via $t=\\ln x$.",
          "The minimum value $m(c)=\\min_{[0,1]}h$ is attained at two points iff the level set $\\{t\\in[0,1]:h(t)=m\\}$ has at least two elements, equivalently iff the cubic $h(t)-m$ has, inside $[0,1]$, either a double root (an interior tangency at the min level) together with a second root, or two distinct simple roots both at the minimum. For a cubic the minimum-level set on a compact interval has more than one point exactly when an interior local-min touches the level of an endpoint. So encode the candidate tie as: there is $t^{*}\\in(0,1)$ with $h(t^{*})=h(0)=0$ AND $h'(t^{*})=0$ (interior tangency at the endpoint level $0$).",
          "Solve the tangency system. $h(t^{*})=0$: $t^{*}(2(t^{*})^{2}-3t^{*}+c)=0$, and since $t^{*}\\ne0$, $2(t^{*})^{2}-3t^{*}+c=0$. $h'(t^{*})=0$: $6(t^{*})^{2}-6t^{*}+c=0$. Subtract the first (times $3$) from the second: $(6-6)(t^{*})^{2}+(-6+9)t^{*}+(c-3c)=0\\Rightarrow 3t^{*}-2c=0$, wait—do it cleanly: from $2(t^{*})^{2}-3t^{*}+c=0$ multiply by $3$: $6(t^{*})^{2}-9t^{*}+3c=0$; subtract $6(t^{*})^{2}-6t^{*}+c=0$: $(-9+6)t^{*}+(3c-c)=0\\Rightarrow -3t^{*}+2c=0\\Rightarrow t^{*}=\\tfrac{2c}{3}$. Plug into $6(t^{*})^{2}-6t^{*}+c=0$: $6\\cdot\\tfrac{4c^{2}}{9}-6\\cdot\\tfrac{2c}{3}+c=\\tfrac{8c^{2}}{3}-4c+c=\\tfrac{8c^{2}}{3}-3c=0\\Rightarrow c\\big(\\tfrac{8c}{3}-3\\big)=0\\Rightarrow c=0\\ \\text{or}\\ c=\\tfrac98$.",
          "Discard the spurious root and verify the genuine one. $c=0$ gives $t^{*}=0$, which is the endpoint itself (not an interior tangency), so it does not create a second minimizer — indeed at $c=0$, $h(t)=2t^{3}-3t^{2}=t^{2}(2t-3)<0$ on $(0,1]$ with unique min at $t=1$. The root $c=\\tfrac98$ gives $t^{*}=\\tfrac34\\in(0,1)$, a true interior point, and the factorization $h(t)=\\tfrac18 t(4t-3)^{2}$ confirms the min value $0$ is attained at $t=0$ and $t=\\tfrac34$ — two points. For all other $c$ the tangency system has no interior solution, so no second minimizer appears and the argmin is a singleton (using the monotone regimes $c\\le0$ and $c\\ge\\tfrac32$, and the strict interior min for $0<c<\\tfrac98$ or strict endpoint min for $\\tfrac98<c<\\tfrac32$).",
          "Therefore the minimum is attained exactly once for every real $c$ except $c=\\tfrac98$: $\\boxed{c\\in\\mathbb{R}\\setminus\\{\\tfrac98\\}}$."
        ]
      }
    ],
    "remark": "Insight: two ideas are fused. First, the soft-analysis half — a CONTINUOUS solution of $f(xy)=f(x)+f(y)$ is forced to be $k\\ln x$, because the substitution $u=\\ln x$ turns it into additive Cauchy $A(u+v)=A(u)+A(v)$, and continuity (not differentiability) is precisely the regularity that collapses Cauchy's wilderness of non-measurable Hamel solutions down to the single linear one; the inversion identity $f(x)+f(1/x)=0$ is a decoy 'extra hypothesis' that is really just $f(1)=0$ in disguise. Second, the calculus half is a trap about LOCAL versus GLOBAL extrema: the discriminant $36-24c$ of $g'$ faithfully reports when an interior critical point exists and the second-derivative test faithfully certifies it as a local minimum — yet none of that decides whether it is the GLOBAL minimizer on the closed interval, nor whether the minimum value is also achieved at an endpoint. The whole question turns on a single algebraic coincidence: at $c=\\tfrac98$ the objective becomes $\\tfrac18 t(4t-3)^{2}$, a simple root at the left endpoint sitting at the same height as a double root in the interior, so the minimum is touched twice. Strong students who stop at 'I found the local min, so it's the answer' miss exactly this. The honest discipline is: on a compact interval always compare every local minimum value against both endpoint values, and remember that a double root in the level set is the algebraic signature of a tied minimum."
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
    "title": "Jensen Tamed by a Whisper of Monotonicity",
    "difficulty": 5,
    "task": "Prove f is affine and count the real solutions of f(x)=f(x^2) as a function of the slope",
    "tags": [
      "jensen",
      "midpoint-convexity",
      "monotone-on-an-interval",
      "hamel-pathology",
      "affine-rigidity",
      "case-split"
    ],
    "statement": "A function $f:\\mathbb{R}\\to\\mathbb{R}$ satisfies the Jensen midpoint identity\n\\[\nf\\!\\left(\\frac{x+y}{2}\\right)=\\frac{f(x)+f(y)}{2}\\qquad\\text{for all real }x,y,\n\\]\nand is monotone (non-decreasing or non-increasing) on $(0,\\tfrac1{1000})$ — only on that one tiny interval; nothing about monotonicity is assumed anywhere else. No continuity, differentiability, rationality of values, or boundedness is assumed. You are given $f(0)=2$, and you write $m=f(1)-f(0)$ for the resulting slope.\n\nFirst prove that $f$ must be affine on all of $\\mathbb{R}$, namely $f(x)=mx+2$, arguing carefully why the lone monotonicity window rules out every pathological solution. Then determine, as a function of the parameter $m$, the number of real solutions of\n\\[\nf(x)=f(x^2).\n\\]\nState the count in each regime of $m$.",
    "answer": "\\[\\boxed{\\,\\#\\{x:\\,f(x)=f(x^2)\\}=\\begin{cases}2,&m\\neq0\\ (x=0,1)\\\\\\infty,&m=0\\end{cases}}\\]",
    "trap": "Two traps, both fatal. (1) Treating Jensen ALONE as enough to force affineness. It is not: with a Hamel basis of the reals over the rationals one builds wild additive (hence Jensen) functions that are everywhere discontinuous, unbounded on every interval, and emphatically not affine. The single monotonicity window is the entire uniqueness mechanism, because a non-affine Jensen solution differs from a non-linear additive map by a constant and such a map has graph dense in the plane, so it cannot be monotone on ANY interval, however tiny. A student who pattern-matches Jensen to a straight line skips precisely the step that is being tested, and the count question itself collapses without it: for a wild Jensen f, the equation f(x)=f(x^2) acquires extra solutions far from 0 and 1 (a concrete one sits near x=1.905), so the clean count 2 is a theorem about affineness, not about Jensen. (2) After reducing to f(x)=mx+2, blindly solving m x(1-x)=0 and answering two for every m, forgetting the degenerate slope. When m=0 the function is the constant 2, the equation f(x)=f(x^2) reduces to 2=2 and holds for every real x, giving infinitely many solutions, not two. The values x=0 and x=1 are the fixed points of squaring, so they satisfy the equation automatically for ANY f; what the slope controls is whether anything else can; the genuine case split is m=0 versus m!=0, not the sign of m.",
    "solutions": [
      {
        "name": "Jensen to additive, then monotonicity selects the linear branch",
        "steps": [
          "Normalize to a zero at the origin. Put $g(x)=f(x)-2=f(x)-f(0)$. Jensen is preserved by subtracting a constant: $g((x+y)/2)=(g(x)+g(y))/2$, and $g(0)=0$. Setting $y=0$ gives $g(x/2)=g(x)/2$, equivalently $g(2x)=2g(x)$.",
          "Upgrade Jensen to additive Cauchy. For any $u,v$ apply Jensen at the pair $(2u,2v)$: $g(u+v)=g\\!\\left(\\frac{2u+2v}{2}\\right)=\\frac{g(2u)+g(2v)}{2}=\\frac{2g(u)+2g(v)}{2}=g(u)+g(v)$. Thus $g$ is additive: $g(u+v)=g(u)+g(v)$ for all reals.",
          "Monotone on one interval kills every pathology. Suppose $g$ were not of the form $cx$. Then $g$ is a non-linear additive map; choosing two rationally independent reals $p,q$, the vectors $(p,g(p))$ and $(q,g(q))$ are non-parallel, so the rational combinations $\\{(r p+s q,\\,r g(p)+s g(q)):r,s\\in\\mathbb{Q}\\}$ form a set dense in $\\mathbb{R}^2$. Hence on the window $(0,\\tfrac1{1000})$ the graph of $g$ is dense vertically: $g$ takes arbitrarily large and arbitrarily small values, so it is monotone on no subinterval. But $f=g+2$ is assumed monotone on $(0,\\tfrac1{1000})$, and adding the constant $2$ does not change monotonicity, so $g$ is monotone there — contradiction. Therefore $g(x)=cx$ for some constant $c$.",
          "Identify the slope and assemble. From $g(x)=cx$ we get $f(x)=cx+2$, and $m=f(1)-f(0)=(c+2)-2=c$, so $c=m$ and $f(x)=mx+2$ on all of $\\mathbb{R}$. This is the unique affine solution consistent with the data.",
          "Count $f(x)=f(x^2)$. The equation becomes $mx+2=mx^2+2$, i.e. $m\\,x(1-x)=0$. If $m\\neq0$ this forces $x(1-x)=0$, so $x\\in\\{0,1\\}$: exactly two solutions. If $m=0$ then $f\\equiv2$ and the equation is $2=2$, true for every real $x$: infinitely many. Hence \\[\\#\\{x:f(x)=f(x^2)\\}=\\begin{cases}2,&m\\neq0\\\\\\infty,&m=0.\\end{cases}\\]"
        ]
      },
      {
        "name": "Rational backbone plus monotone squeeze (no Hamel language)",
        "steps": [
          "As above, $g=f-2$ is additive with $g(0)=0$. Additivity forces $\\mathbb{Q}$-linearity: by induction $g(nx)=ng(x)$ for integers $n$, then $g(x)=g(q\\cdot \\tfrac{x}{q})=q\\,g(x/q)$ gives $g(qx)=qg(x)$ for rationals $q$, so $g(r)=r\\,g(1)$ for every rational $r$. Write $c=g(1)$, so $g$ agrees with $x\\mapsto cx$ on $\\mathbb{Q}$.",
          "Use monotonicity to extend $g(x)=cx$ to all reals. Suppose WLOG $f$ is non-decreasing on $(0,\\tfrac1{1000})$; then so is $g$ there. Fix any real $t\\in(0,\\tfrac1{1000})$ and squeeze it between rationals: for rationals $r_1<t<r_2$ inside the window, monotonicity gives $g(r_1)\\le g(t)\\le g(r_2)$, i.e. $cr_1\\le g(t)\\le cr_2$ (assume $c\\ge0$; the case $c<0$ or non-increasing $f$ is symmetric). Letting $r_1\\uparrow t$ and $r_2\\downarrow t$ through rationals forces $g(t)=ct$ for every $t$ in the window.",
          "Spread the identity off the window by additivity. For arbitrary real $x$, pick a rational $r$ and a point $w\\in(0,\\tfrac1{1000})$ with $x=r+w$ when possible; more cleanly, for any real $x$ choose an integer $N$ so large that $x/2^N$ lands in the window (it does, since $x/2^N\\to0$, and we may also add a rational to enter $(0,\\tfrac1{1000})$ then subtract it back using $g$ linear on rationals). Then $g(x/2^N)=c\\,(x/2^N)$, and $g(x)=2^N g(x/2^N)=cx$. Hence $g(x)=cx$ everywhere, so $f(x)=cx+2$ and $c=m$ as before: $f(x)=mx+2$.",
          "Solve $f(x)=f(x^2)$. Subtracting, $m(x-x^2)=0$. For $m\\neq0$: $x=0$ or $x=1$, two solutions. For $m=0$: identity, all reals. \\[\\boxed{\\#=2\\ (m\\neq0),\\quad \\#=\\infty\\ (m=0)}.\\]"
        ]
      },
      {
        "name": "Fixed-point view: why only the slope, not its sign, matters",
        "steps": [
          "Granting affineness $f(x)=mx+2$ from Solution 1, observe that $x=0$ and $x=1$ are the two fixed points of the squaring map $x\\mapsto x^2$ (the real roots of $x^2=x$). At any fixed point the equation $f(x)=f(x^2)$ holds automatically for ANY function whatsoever, so $\\{0,1\\}$ is always contained in the solution set; the only question is whether non-fixed points can join.",
          "A non-fixed point $x$ (so $x^2\\neq x$) satisfies $f(x)=f(x^2)$ iff $f$ takes the same value at the two distinct inputs $x$ and $x^2$. For the strictly monotone affine map ($m\\neq0$) $f$ is injective, so $f(x)=f(x^2)\\Rightarrow x=x^2$, contradicting $x^2\\neq x$. Thus no non-fixed point qualifies and the solution set is exactly $\\{0,1\\}$: count $2$.",
          "For $m=0$, $f$ is the constant $2$, hence not injective at all; every pair of inputs shares the value $2$, so every real $x$ (fixed or not) satisfies $f(x)=f(x^2)$: infinitely many. This is the unique regime where extra solutions appear, and it is governed by $m=0$ alone, independent of any sign.",
          "Therefore the count is decided entirely by whether the slope vanishes: \\[\\#\\{x:f(x)=f(x^2)\\}=\\begin{cases}2,&m\\neq0\\\\\\infty,&m=0.\\end{cases}\\] Note the sign of $m$ is irrelevant; only its vanishing flips the answer, which is exactly the case split the trap hides."
        ]
      }
    ],
    "remark": "Insight: Jensen's midpoint identity is not the straight-line condition students remember it as. On its own it is identical in strength to additive Cauchy, whose solution set is a wilderness of everywhere-discontinuous, unbounded, non-measurable functions built from a Hamel basis. What collapses that wilderness here is astonishingly cheap: monotonicity on a single interval of length one-thousandth. The reason is geometric. A non-affine additive map has graph dense in the plane, so it oscillates without bound on every interval and can be monotone on none; demanding monotonicity anywhere, however briefly, exterminates all pathologies at once. This is the monotone-on-a-set implies affine theorem, and it is strictly weaker than assuming continuity, boundedness, or measurability, any one of which would also suffice. The payoff problem is a referendum on whether the solver actually earned affineness: only an affine f makes f(x)=f(x^2) reduce to m x(1-x)=0, whose count is governed by the fixed points of squaring (always 0 and 1) plus injectivity. The buried subtlety is the degenerate slope: when m=0 the function is constant, injectivity is lost, and the count jumps from 2 to infinity. The sign of m is a decoy; only its vanishing matters."
  },
  {
    "theme": "functionaleq",
    "themeLabel": "Continuous Functional Equations",
    "title": "Cauchy on the First Quadrant Only",
    "difficulty": 5,
    "task": "Determine f as far as the data force it, and decide exactly how much of f is pinned",
    "tags": [
      "restricted-cauchy",
      "cone-domain",
      "monotonicity",
      "tangency-pin",
      "uniqueness",
      "extension"
    ],
    "statement": "A function $f:\\mathbb{R}\\to\\mathbb{R}$ is continuous everywhere and strictly increasing, and it satisfies the additive Cauchy relation\n\\[\nf(x+y)=f(x)+f(y)\n\\]\nbut only when both $x\\ge 0$ and $y\\ge 0$ — the identity is asserted on the closed first quadrant of arguments, and is not assumed for any pair in which a coordinate is negative. You are told in addition the single sharp bound\n\\[\n|f(x)|\\le x^{2}-x+1\\qquad\\text{for every }x\\ge 0,\n\\]\nand that this bound is attained with equality at some $x_{0}>0$.\n\nDetermine $f$ as completely as the hypotheses permit. Your solution must (i) prove that the cone restriction $x,y\\ge0$ already forces $f(x)=cx$ on $[0,\\infty)$, naming exactly where continuity is spent and confirming that no negative argument is ever needed; (ii) use the tightness of the bound together with the monotonicity to fix the constant $c$, being explicit about which hypothesis kills which candidate value; and (iii) decide whether $f$ is thereby determined on all of $\\mathbb{R}$ — if not, describe precisely the freedom that remains and why the functional equation is powerless to remove it.",
    "answer": "\\[\\boxed{\\,f(x)=x\\ \\text{on}\\ [0,\\infty);\\ \\text{undetermined on}\\ (-\\infty,0)\\,}\\]",
    "trap": "The fatal reflex is to declare $f(x)=x$ for all real $x$. Two layers of overreach hide in that one line. First, on the constant: the bound is two-sided, $|f(x)|\\le x^{2}-x+1$, and \"attained with equality\" only gives $|cx_0|=x_0^{2}-x_0+1$, i.e. $|c|=1$, so $c=+1$ or $c=-1$ — both are perfectly consistent with the bound and with the cone equation. It is the word increasing, not the bound, that murders $c=-1$ (a strictly increasing additive map cannot have negative slope). A student who pins $c$ from the bound alone keeps a spurious second solution $f(x)=-x$ on $[0,\\infty)$, which is decreasing and must be thrown out by monotonicity — miss that and you either keep two answers or pick the right one for the wrong reason. Second, and deeper: the equation is asserted only on the cone $x,y\\ge0$. Every step that yields $f(x)=cx$ — the doubling $f(2x)=2f(x)$, the rational scaling $f(qx)=qf(x)$, the continuity limit — uses only nonnegative arguments. The relation NEVER touches a negative input, because $x+y\\ge0$ whenever $x,y\\ge0$. Hence on $(-\\infty,0)$ the only constraints surviving are continuity (forcing $f(0^-)=f(0)=0$) and strict monotonicity (forcing $f<0$ there): infinitely many continuous strictly increasing extensions ($f(x)=x$, $f(x)=2x$, $f(x)=e^{x}-1$, $f(x)=x^{3}$, \\dots) all agree on $[0,\\infty)$ yet differ on the negatives. Believing continuity \"glues\" the two sides into the single line $y=x$ is the conceptual error: continuity only forbids a jump at $0$, it does not propagate the slope across a half-line where no equation lives. A third, subtler slip is to think a discontinuous (Hamel) additive map could sneak back in — it cannot, since it is unbounded on every interval and non-monotone, so it fails both the bound and \"increasing\"; but that is a separate fact, not the reason the negatives are free.",
    "solutions": [
      {
        "name": "Rational scaling on the cone, then continuity, then monotonicity fixes the sign",
        "steps": [
          "Spend the cone equation. Put $x=y=0$ (legal: both $\\ge0$): $f(0)=2f(0)$, so $f(0)=0$. For $x\\ge0$ and $n\\in\\mathbb{N}$, induction with the pairs $\\big(x,(n-1)x\\big)$ — both nonnegative — gives $f(nx)=nf(x)$. Replacing $x$ by $x/n$ yields $f(x/n)=\\tfrac1n f(x)$, and combining, $f\\!\\big(\\tfrac{p}{q}x\\big)=\\tfrac{p}{q}f(x)$ for all nonnegative rationals $p/q$ and all $x\\ge0$. With $x=1$ and $c:=f(1)$ this reads $f(q)=cq$ for every rational $q\\ge0$. Crucially, every argument that appeared was $\\ge0$: the negative half-line has not been mentioned, and could not be, since $x+y\\ge0$ whenever $x,y\\ge0$.",
          "Spend continuity (on $[0,\\infty)$ only). Fix any real $t\\ge0$ and choose nonnegative rationals $q_k\\to t$. Then $f(q_k)=cq_k\\to ct$, while continuity of $f$ at $t$ gives $f(q_k)\\to f(t)$. Hence $f(t)=ct$ for all $t\\ge0$: on the half-line $f(x)=cx$. (This is exactly the classical Cauchy collapse; the only novelty is that the cone provided every relation we needed without ever evaluating $f$ at a negative point.)",
          "Use the sharp bound to size $|c|$. On $[0,\\infty)$, $|f(x)|=|c|\\,x\\le x^{2}-x+1$, i.e. $x^{2}-(|c|+1)x+1\\ge0$ for all $x\\ge0$. Since the equality $|c|\\,x_0=x_0^{2}-x_0+1$ holds at some $x_0>0$, the quadratic $q(x)=x^{2}-(|c|+1)x+1$ is $\\ge0$ on $[0,\\infty)$ yet vanishes at the interior point $x_0>0$; an upward parabola with positive product of roots ($=1$) and a positive root where it stays nonnegative must have a double root, so its discriminant vanishes: $(|c|+1)^{2}=4$, giving $|c|+1=2$, hence $|c|=1$ and $x_0=1$. Thus $c=+1$ or $c=-1$.",
          "Use monotonicity to choose the branch. The candidate $c=-1$ gives $f(x)=-x$ on $[0,\\infty)$, which is strictly decreasing — contradicting that $f$ is strictly increasing. So $c=-1$ is impossible and $c=+1$: on the half-line $f(x)=x$. (Note both hypotheses earned their keep: the bound delivered $|c|=1$, the monotonicity delivered the sign.)",
          "Decide the negatives. No hypothesis constrains $f$ on $(-\\infty,0)$ except continuity at $0$ — which forces $\\lim_{x\\to0^-}f(x)=f(0)=0$ — and strict monotonicity — which forces $f(x)<f(0)=0$ for $x<0$ and $f$ increasing there. The functional equation cannot help, since it is asserted only for nonnegative arguments. Therefore $f(x)=x$ on $[0,\\infty)$ is forced, while on $(-\\infty,0)$ any continuous strictly increasing function $h$ with $h(0^-)=0$ (for instance $x$, $2x$, $e^{x}-1$, or $x^{3}$) yields a valid $f$. So $\\boxed{f(x)=x\\ \\text{on }[0,\\infty),\\ \\text{undetermined on }(-\\infty,0)}$."
        ]
      },
      {
        "name": "AM-GM tangency for the constant, scaling for the rest",
        "steps": [
          "As in Solution 1, the cone equation plus continuity force $f(x)=cx$ on $[0,\\infty)$ for some constant $c=f(1)$, with no negative argument ever used.",
          "Read the bound through AM-GM. For $x>0$ the bound says $|c|\\,x\\le x^{2}-x+1$, equivalently $|c|+1\\le x+\\tfrac1x$. By AM-GM, $x+\\tfrac1x\\ge2$ with equality iff $x=1$. Hence $|c|+1\\le \\min_{x>0}\\big(x+\\tfrac1x\\big)=2$ only if the bound is to be tight: since equality in the original inequality is attained at some $x_0>0$, we get $|c|+1=x_0+\\tfrac1{x_0}$, and tightness can only meet the floor $2$, forcing $x_0=1$ and $|c|+1=2$. Thus $|c|=1$.",
          "Select $c=+1$ by monotonicity. A strictly increasing $f$ has $f(1)=c>f(0)=0$, so $c>0$; with $|c|=1$ this gives $c=1$. (Equivalently, $c=-1$ would make $f(x)=-x$ decreasing on $[0,\\infty)$, excluded.) Hence $f(x)=x$ for $x\\ge0$.",
          "The negatives are free. The equation is silent on negative inputs, so the only residual constraints are continuity at $0$ and strict monotonicity; these admit infinitely many distinct extensions agreeing with $x$ on $[0,\\infty)$. Therefore $f$ is pinned to $\\boxed{f(x)=x\\ \\text{on }[0,\\infty),\\ \\text{undetermined on }(-\\infty,0)}$, no more."
        ]
      },
      {
        "name": "Necessity by counterexample — exhibit the surviving freedom and the excluded impostors",
        "steps": [
          "Granting $f(x)=cx$ on $[0,\\infty)$ (cone equation + continuity, Solution 1) and $|c|=1$ with $c>0$ by monotonicity (so $f(x)=x$ on $[0,\\infty)$), we test whether more is forced by trying to break uniqueness on the negatives. Define $f_1(x)=x$ for all $x$, and $f_2(x)=x$ for $x\\ge0$ but $f_2(x)=2x$ for $x<0$. Both are continuous (each piece is continuous and they agree at $0$ with value $0$), both are strictly increasing, both satisfy $|f_i(x)|\\le x^{2}-x+1$ on $x\\ge0$ with equality at $x=1$, and both satisfy $f_i(x+y)=f_i(x)+f_i(y)$ for $x,y\\ge0$ (where each equals the identity). Yet $f_1(-1)=-1\\ne-2=f_2(-1)$. So two genuinely different functions satisfy every hypothesis: $f$ is NOT unique on $(-\\infty,0)$.",
          "Pin down exactly the freedom. Any admissible $f$ must restrict to a continuous strictly increasing map $h=f|_{(-\\infty,0]}$ with $h(0)=0$ (continuity glues to the half-line value) and $h<0$ on $(-\\infty,0)$ (monotonicity). Conversely any such $h$, pasted to $x\\mapsto x$ on $[0,\\infty)$, gives an admissible $f$: continuity holds (both sides limit to $0$ at $0$), strict monotonicity holds across $0$ since $h<0\\le x$, the bound involves only $x\\ge0$ where $f(x)=x$ satisfies it, and the cone equation involves only nonnegative arguments where $f$ is the identity. Thus the solution set is exactly $\\{\\,x\\mapsto x\\ \\text{on }[0,\\infty)\\,\\}\\times\\{\\,\\text{continuous strictly increasing }h\\le0,\\ h(0)=0\\,\\}$.",
          "Rule out the tempting wrong answers, each by its own hypothesis. $f(x)=-x$ on $[0,\\infty)$: consistent with the cone equation and the bound, killed by increasing. A discontinuous additive (Hamel) function with $g(1)=1$: satisfies the cone equation, but is unbounded on every interval, so it violates $|f|\\le x^{2}-x+1$ and is non-monotone — killed by both the bound and increasing. The single line $f(x)=x$ on all of $\\mathbb{R}$: a valid solution, but only one of infinitely many, so it cannot be the answer for the negatives.",
          "Conclusion. The data force $f(x)=x$ on $[0,\\infty)$ and nothing sharper on $(-\\infty,0)$: $\\boxed{f(x)=x\\ \\text{on }[0,\\infty),\\ \\text{undetermined on }(-\\infty,0)}$. The cone restriction is the entire reason the negative half-line escapes."
        ]
      }
    ],
    "remark": "Insight: a Cauchy equation asserted on a cone ($x,y\\ge0$) is a one-way street — because the sum of nonnegatives is nonnegative, every consequence (doubling, rational scaling, the continuity limit) lives on the half-line and never reaches across $0$. So continuity does its full classical job, collapsing the wild Hamel solutions to a single slope $cx$, but only on $[0,\\infty)$; on the negatives it can forbid a jump at $0$ and nothing more. The result is a problem where three regularity hypotheses each do a precise, non-overlapping job: continuity linearizes the half-line, the tight bound $|f|\\le x^{2}-x+1$ (touched, via a double-root / AM-GM argument, only at $x=1$) sizes $|c|=1$, and strict monotonicity breaks the residual sign ambiguity to give $c=+1$ — drop monotonicity and the impostor $f(x)=-x$ survives. The headline trap, writing $f(x)=x$ for all real $x$, is wrong not arithmetically but conceptually: it treats a relation on a half-space as if it held on all of $\\mathbb{R}$, smuggling a uniqueness that the geometry of the domain never grants. The sharp lesson for a Cauchy-style problem is to ask first where the equation lives, because that domain — not the formula — decides how much of $f$ is actually determined."
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
    "title": "The Character Hiding in the Sign",
    "difficulty": 5,
    "task": "Classify every nontrivial solution, then use the data to determine f and evaluate it",
    "tags": [
      "multiplicative-cauchy",
      "sign-character",
      "branch-trap",
      "continuity-uniqueness",
      "classification",
      "even-vs-odd"
    ],
    "statement": "Let $f:\\mathbb{R}\\setminus\\{0\\}\\to\\mathbb{R}$ be continuous on $\\mathbb{R}\\setminus\\{0\\}$ and satisfy the multiplicative Cauchy relation\n\\[\nf(xy)=f(x)\\,f(y)\\qquad\\text{for all nonzero }x,y,\n\\]\nwith $f$ not identically zero. Note carefully: $f$ is not assumed positive, so $f$ may take negative values.\n\n(a) Classify all such $f$. Your argument must run uniqueness from continuity: show that continuity collapses the wild (non-measurable) solutions on the positive half-line to a single power, and find every way the negative half-line can be filled in. State the complete solution set as a union of one-parameter families.\n\n(b) Now suppose, in addition, that $f(2)=8$ and $f(-2)=-8$. Determine $f(x)$ explicitly for every nonzero $x$, decide which family it lives in, and compute $f\\!\\left(-\\tfrac18\\right)$.",
    "answer": "\\[\\boxed{\\;f(x)=|x|^{c}\\ \\text{ or }\\ f(x)=\\operatorname{sgn}(x)\\,|x|^{c}\\ \\ (c\\in\\mathbb{R});\\quad\\text{here }f(x)=\\operatorname{sgn}(x)\\,|x|^{3},\\ \\ f\\!\\left(-\\tfrac18\\right)=-\\tfrac1{512}\\;}\\]",
    "trap": "The seductive shortcut is to declare $f>0$ \"because it equals $f(\\sqrt{x})^2$,\" linearize $\\ln f$, and announce $f(x)=|x|^{c}$ as the answer — a single even power law. That square argument is honest only for positive arguments: for $x>0$, $f(x)=f(\\sqrt x)^2\\ge0$, and continuity plus nonvanishing force $f(x)>0$ there. But for $x<0$ there is no real square root, so the positivity proof simply does not reach the negative half-line, and the whole sign question reopens. The hidden case lives at $x=-1$: from $f(1)=1$ and $f(-1)^2=f\\big((-1)(-1)\\big)=f(1)=1$, the only constraint is $f(-1)\\in\\{+1,-1\\}$ — two admissible values, not one. The choice $f(-1)=-1$ is perfectly continuous and perfectly multiplicative, and it produces the genuinely different odd solution $f(x)=\\operatorname{sgn}(x)\\,|x|^{c}$ (a nontrivial sign-character times a power), which the \"$f>0$\" reflex erases. With the data of part (b) the trap is fatal: a student who writes $f(x)=|x|^{3}$ gets $f(-2)=8$, flatly contradicting the given $f(-2)=-8$, yet may \"fix\" it by hand and still report $f(-\\tfrac18)=+\\tfrac1{512}$ with the wrong sign. The true value is $-\\tfrac1{512}$. A second, lazier slip is to allow $f(-1)$ to be any number whose square is $1$ over the complexes or to think a different exponent could serve the negative side; over $\\mathbb{R}$ the square pins $f(-1)=\\pm1$ exactly, and since $f(x)=f(-1)f(|x|)$ the same exponent $c$ governs both sides — no hybrid exists.",
    "solutions": [
      {
        "name": "Positives by continuity, negatives by the sign-character at $-1$",
        "steps": [
          "Pin the anchors. $f(1)=f(1\\cdot1)=f(1)^2$ gives $f(1)\\in\\{0,1\\}$; if $f(1)=0$ then $f(x)=f(x\\cdot1)=f(x)f(1)=0$ for all $x$, the excluded trivial map, so $f(1)=1$. Next $f(-1)^2=f\\big((-1)(-1)\\big)=f(1)=1$, hence $f(-1)\\in\\{+1,-1\\}$ — and over $\\mathbb{R}$ there is no third option. This single fork is the entire source of the two families.",
          "Linearize the positive half-line from continuity. For $x>0$, $f(x)=f(\\sqrt x)^2\\ge0$; if $f$ vanished at some $x_0>0$ then $f(x)=f(x/x_0)f(x_0)=0$ on all of $(0,\\infty)$ and then everywhere, contradiction, so $f(x)>0$ for $x>0$. Put $g(t)=\\ln f(e^{t})$: it is continuous on $\\mathbb{R}$ and $g(s+t)=\\ln f(e^{s}e^{t})=\\ln\\big(f(e^{s})f(e^{t})\\big)=g(s)+g(t)$, the additive Cauchy equation. Continuity is exactly what kills the pathological non-measurable additive maps and forces $g(t)=ct$ with $c=g(1)=\\ln f(e)$. Hence $f(x)=e^{c\\ln x}=x^{c}=|x|^{c}$ for every $x>0$.",
          "Fill the negative half-line. Any $x<0$ factors as $x=(-1)\\cdot|x|$ with $|x|>0$, so $f(x)=f(-1)\\,f(|x|)=f(-1)\\,|x|^{c}$. The two values of $f(-1)$ give exactly two outcomes: $f(-1)=+1\\Rightarrow f(x)=|x|^{c}$ (the even branch), and $f(-1)=-1\\Rightarrow f(x)=-|x|^{c}=\\operatorname{sgn}(x)\\,|x|^{c}$ (the sign-character branch). The exponent is the same $c$ on both sides — it was determined on the positives and merely carried across by the factor $f(-1)$, so no hybrid with two exponents can occur.",
          "Verify and assemble. Both candidates are continuous on $\\mathbb{R}\\setminus\\{0\\}$ and multiplicative: $|xy|^{c}=|x|^{c}|y|^{c}$, and $\\operatorname{sgn}(xy)|xy|^{c}=\\operatorname{sgn}(x)\\operatorname{sgn}(y)\\,|x|^{c}|y|^{c}$ since $\\operatorname{sgn}$ is itself multiplicative. Therefore the complete solution set is $\\{\\,f(x)=|x|^{c}\\,\\}\\cup\\{\\,f(x)=\\operatorname{sgn}(x)|x|^{c}\\,\\}$ over $c\\in\\mathbb{R}$ (the cases $c=0$ giving the constant $1$ and the pure sign $\\operatorname{sgn}(x)$). $\\boxed{f(x)=|x|^{c}\\ \\text{or}\\ \\operatorname{sgn}(x)|x|^{c}}$",
          "Apply the data of part (b). On the positives $f(2)=2^{c}=8$ forces $c=3$. The branch is decided by $f(-2)=f(-1)f(2)=8\\,f(-1)=-8$, so $f(-1)=-1$: the sign branch. Thus $f(x)=\\operatorname{sgn}(x)\\,|x|^{3}$, and $f\\!\\left(-\\tfrac18\\right)=-\\left(\\tfrac18\\right)^{3}=\\boxed{-\\tfrac1{512}}$ (the even-branch impostor would have given the contradictory $f(-2)=8$ and the wrong sign $+\\tfrac1{512}$)."
        ]
      },
      {
        "name": "Separate the magnitude and the sign as two characters",
        "steps": [
          "Define $A(x)=|f(x)|$ and observe $A(xy)=|f(x)f(y)|=A(x)A(y)$, so $A$ is a nonnegative continuous multiplicative map. Since $A(1)=|f(1)|=1$ and $A>0$ on positives (as $A(x)=f(\\sqrt x)^2$ there is nonnegative and nonvanishing), and $A(-x)=|f(-1)|\\,A(x)=A(x)$ because $|f(-1)|=1$, $A$ depends only on $|x|$. Running the continuity/Cauchy argument on $t\\mapsto\\ln A(e^{t})$ gives $A(x)=|x|^{c}$ for a unique $c\\in\\mathbb{R}$.",
          "Now isolate the sign $\\varepsilon(x)=f(x)/A(x)\\in\\{+1,-1\\}$ (well defined since $A>0$). It is multiplicative: $\\varepsilon(xy)=\\varepsilon(x)\\varepsilon(y)$. A multiplicative map $\\mathbb{R}\\setminus\\{0\\}\\to\\{\\pm1\\}$ is a real character; continuity forces $\\varepsilon\\equiv1$ on the connected positive ray (any continuous $\\pm1$-valued function on an interval is constant, and $\\varepsilon(1)=1$). On the negatives $\\varepsilon(x)=\\varepsilon(-1)\\varepsilon(|x|)=\\varepsilon(-1)$ is the single bit $\\varepsilon(-1)\\in\\{+1,-1\\}$.",
          "Combine. $f=\\varepsilon\\cdot A$ where $A(x)=|x|^{c}$ and $\\varepsilon$ is either the trivial character ($\\varepsilon\\equiv1$) or the sign character ($\\varepsilon=\\operatorname{sgn}$). Hence $f(x)=|x|^{c}$ or $f(x)=\\operatorname{sgn}(x)|x|^{c}$, and these are all. $\\boxed{f(x)=|x|^{c}\\ \\text{or}\\ \\operatorname{sgn}(x)|x|^{c}}$",
          "Use the data. $A(2)=|f(2)|=8\\Rightarrow 2^{c}=8\\Rightarrow c=3$; $\\varepsilon(2)=+1$ but $f(-2)=-8<0$ gives $\\varepsilon(-1)=-1$, the sign character. So $f(x)=\\operatorname{sgn}(x)|x|^{3}$ and $f\\!\\left(-\\tfrac18\\right)=\\operatorname{sgn}\\!\\left(-\\tfrac18\\right)\\left(\\tfrac18\\right)^{3}=\\boxed{-\\tfrac1{512}}$."
        ]
      },
      {
        "name": "Necessity by counterexample — exhibit the missed solution the trap erases",
        "steps": [
          "Suppose someone proves $f(x)=|x|^{c}$ and stops. To show this is incomplete, exhibit a second admissible map. Take $h(x)=\\operatorname{sgn}(x)\\,|x|^{c}$ for the same $c$. Then $h$ is continuous on $\\mathbb{R}\\setminus\\{0\\}$, not identically zero, and $h(xy)=\\operatorname{sgn}(xy)|xy|^{c}=\\operatorname{sgn}(x)\\operatorname{sgn}(y)|x|^{c}|y|^{c}=h(x)h(y)$, so it satisfies every hypothesis. Yet $h(-1)=-1\\ne1=|-1|^{c}$, so $h\\ne|x|^{c}$. Two genuinely different continuous solutions coexist — uniqueness on the negatives fails, exactly because $f(-1)^2=1$ has two real roots.",
          "Show no further freedom and no hybrid. Given any solution, the positives are forced to $|x|^{c}$ (Solution 1, step 2) and the negatives obey $f(x)=f(-1)|x|^{c}$ with $f(-1)\\in\\{\\pm1\\}$; there is no room for a different exponent on the negative side, since the exponent already came from the positives via $f(|x|)$. So the solution set is precisely the two families and nothing in between.",
          "Resolve the data unambiguously, ruling out the impostor by its own contradiction. The even candidate $f(x)=|x|^{3}$ gives $f(-2)=|-2|^{3}=8$, contradicting the required $f(-2)=-8$; so the data select the sign branch and reject the trap outright. The sign candidate $f(x)=\\operatorname{sgn}(x)|x|^{3}$ gives $f(2)=8$ and $f(-2)=-8$, both correct.",
          "Conclude. The full answer is $f(x)=|x|^{c}$ or $\\operatorname{sgn}(x)|x|^{c}$; the data pin $c=3$ and the sign branch, so $f\\!\\left(-\\tfrac18\\right)=-\\left(\\tfrac18\\right)^{3}=\\boxed{-\\tfrac1{512}}$, not $+\\tfrac1{512}$."
        ]
      }
    ],
    "remark": "Insight: positivity is not free here — it is a theorem only on the half-line where square roots live. For $x>0$ the identity $f(x)=f(\\sqrt x)^2$ plus continuity genuinely forces $f>0$ and then the unique power $|x|^{c}$, the classic place where continuity earns its keep by exterminating the non-measurable Cauchy solutions. But the negative half-line has no real square root, so the only thing the equation can say there is $f(-1)^2=1$, i.e. $f(-1)=\\pm1$: a one-bit choice that splits the answer into a magnitude character $|x|^{c}$ times a sign character that is either trivial or $\\operatorname{sgn}(x)$. The deep lesson is that a multiplicative function on $\\mathbb{R}\\setminus\\{0\\}$ factors as (positive multiplicative magnitude) $\\times$ (real multiplicative sign), and continuity pins the magnitude completely while leaving the sign exactly one free bit. The headline trap — assuming $f>0$ everywhere and reporting only $|x|^{c}$ — is not an arithmetic slip but a domain error: it imports the positivity proof from the positive ray onto a ray where it has no footing, silently discarding half of all solutions."
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
    "statement": "Let $p(x)=x^{5}-5x+3$. \\[Find the number of real roots of  p,\\] and for each one exhibit a pair of integers $a<b$ with $p(a)$ and $p(b)$ of opposite sign that traps it. (You may not use a calculator; argue only from integer/half-integer values and the IVT.)",
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
    "statement": "A hiker leaves the trailhead at $8{:}00$ and reaches the summit at $20{:}00$ along a single path; the next day she descends the same path, again leaving at $8{:}00$ and arriving at $20{:}00$. Model her position as a continuous function of clock time on each day, with the path parametrised by $s\\in[0,1]$ ($0=$ trailhead, $1=$ summit). \\[Prove there is a clock time at which she stands at the exact same point on both days.\\]",
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
    "statement": "Let $g:\\mathbb{R}\\to\\mathbb{R}$ be continuous and $2\\pi$-periodic (think: temperature around a circular wall). \\[Prove that there exists an angle  \\theta \\text{ with } g(\\theta)=g(\\theta+\\pi),\\] i.e. some pair of diametrically opposite points have equal temperature.",
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
    "title": "The Gap Between Two Trains Realizes a Whole Interval",
    "difficulty": 5,
    "task": "Prove the difference attains every value in a range, then pin the forced set",
    "tags": [
      "difference-function",
      "range-realization",
      "two-trains",
      "first-instant",
      "closed-preimage",
      "hidden-constraint"
    ],
    "statement": "Two automated trains $A$ and $B$ run on straight parallel tracks during a normalized journey time $t\\in[0,1]$. Let $f,g:[0,1]\\to\\mathbb{R}$ be continuous, where $f(t)$ and $g(t)$ are the positions (in km, measured along the common direction of travel) of $A$ and $B$. Define the signed gap\n\\[\nD(t)=f(t)-g(t),\\qquad\\text{(positive means }A\\text{ is ahead of }B\\text{).}\n\\]\nYou are told only two facts about the whole journey:\n\\[\nf(0)-g(0)=-5\\quad(\\text{at the start, }A\\text{ trails }B\\text{ by }5\\text{ km}),\\qquad f(1)-g(1)=3\\quad(\\text{at the finish, }A\\text{ leads }B\\text{ by }3\\text{ km}).\n\\]\n\nPart (a). Prove that the gap function realizes an entire interval of values, not merely a single crossing: for every real number $m$ with $-5\\le m\\le 3$ there is at least one instant $t\\in[0,1]$ at which the signed gap equals exactly $m$ km. (In particular the trains are level, $D=0$, at some instant.)\n\nPart (b). Prove that there is a first instant the trains draw level, i.e. the set $\\{t:D(t)=0\\}$ has a least element. Then show by an explicit continuous example (with the same two endpoint facts) that this level instant need not be unique and that $D$ need not be monotone — so \"the trains pass each other exactly once\" is not a valid conclusion from the data.\n\nPart (c). Determine the set $S$ of all real numbers $m$ for which the two endpoint facts alone (continuity of $f,g$ together with $D(0)=-5$ and $D(1)=3$) force the existence of an instant whose signed gap equals exactly $m$. Express $S$ as an interval.",
    "answer": "\\[\\boxed{\\,S=[-5,\\,3]\\,}\\]",
    "trap": "The seductive wrong answer to part (c) is $S=[-5,5]$ (or, symmetrically, \"every gap $m$ with $|m|\\le 5$ is forced\"). Two flavours of the mistake feed it. First, a magnitude conflation: the start lead has magnitude $5$ and the finish lead $3$, and a hasty solver lets the larger figure $5$ set the outer reach of guaranteed gaps, reasoning \"surely any lead between $-5$ and $+5$ is achieved.\" But IVT forces values only between the two endpoint values of $D$, namely $D(0)=-5$ and $D(1)=3$; the number $5$ is the size of a position difference, not a value of $D$ at the finish, so it has no business as an endpoint of the realized interval. The linear witness $D(t)=-5+8t$ is continuous, meets both endpoint facts, yet has range exactly $[-5,3]$ and never equals $4$ — so a lead of $4$ km is genuinely not forced, killing $S=[-5,5]$. Second, a uniqueness/monotonicity illusion: many solvers tacitly picture $D$ climbing steadily from $-5$ to $3$, conclude the trains cross exactly once, and even believe IVT hands them the crossing time. IVT does neither — it certifies that some instant has $D=m$, not how many, and not a first one. A non-monotone continuous $D$ obeying both endpoint facts can cross level three times and can even exceed $3$ or dip below $-5$ along the way; values outside $[-5,3]$ may occur for particular trains but can never be guaranteed, which is exactly why they are excluded from $S$. (The 'first level instant' of part (b) is real, but it requires the separate observation that $\\{D=0\\}$ is a closed nonempty subset of $[0,1]$ and hence attains its infimum — not anything IVT alone delivers.)",
    "solutions": [
      {
        "name": "Difference function plus IVT for the range, witnesses for the converse",
        "steps": [
          "Part (a). The map $D=f-g$ is continuous on $[0,1]$ as a difference of continuous functions, with $D(0)=f(0)-g(0)=-5$ and $D(1)=f(1)-g(1)=3$. Fix any target $m\\in[-5,3]$. Then $m$ lies between the two values $D(0)=-5$ and $D(1)=3$, so by the Intermediate Value Theorem applied to the continuous $D$ on $[0,1]$ there exists $t\\in[0,1]$ with $D(t)=m$, i.e. the signed gap equals $m$ km at that instant. Since $m$ was an arbitrary point of $[-5,3]$, the whole interval $[-5,3]$ is contained in the range of $D$ — the gap realizes an entire interval, not just the single level value. Taking $m=0$ (which lies in $[-5,3]$) gives an instant the trains are level.",
          "Part (b), existence of a first level instant. Let $Z=\\{t\\in[0,1]:D(t)=0\\}=D^{-1}(\\{0\\})$. By part (a) $Z\\neq\\varnothing$. As the preimage of the closed set $\\{0\\}$ under the continuous $D$, $Z$ is closed; it is also bounded (a subset of $[0,1]$), hence compact. A nonempty compact subset of $\\mathbb{R}$ contains its infimum, so $t^{*}:=\\inf Z\\in Z$, and $t^{*}$ is the earliest instant with $D(t^{*})=0$: the first time the trains are level. (Equivalently, $\\inf Z$ is a limit of points of $Z$ and $Z$ is closed, so $\\inf Z\\in Z$.)",
          "Part (b), non-uniqueness and non-monotonicity. Take $D(t)=-5+8t+30\\sin(3\\pi t)\\,t(1-t)$, and realize it by, say, $f(t)=D(t),\\ g(t)=0$ (both continuous). Then $D(0)=-5$ and $D(1)=3$ exactly, so the two endpoint facts hold, yet $D$ is not monotone (the oscillatory term forces sign changes of $D'$) and $D(t)=0$ at three distinct instants. Hence the trains draw level more than once: 'they pass each other exactly once' does not follow from the data. (This same $D$ rises above $3$ and falls below $-5$ in the interior, foreshadowing part (c): gaps outside $[-5,3]$ can happen, but only for special trains.)",
          "Part (c), sufficiency $[-5,3]\\subseteq S$. By part (a), every $m\\in[-5,3]$ is forced: for any continuous $D$ with $D(0)=-5,\\ D(1)=3$, IVT produces an instant with $D=m$. The endpoints themselves are in $S$ since $D(0)=-5$ and $D(1)=3$ are attained at $t=0,1$. So $[-5,3]\\subseteq S$.",
          "Part (c), necessity $S\\subseteq[-5,3]$. Suppose $m\\notin[-5,3]$. The continuous witness $D_0(t)=-5+8t$ satisfies $D_0(0)=-5,\\ D_0(1)=3$ and has range exactly $[-5,3]$ (it is increasing from $-5$ to $3$), so $D_0(t)=m$ has no solution. Realizing $D_0$ by $f=D_0,\\ g=0$ gives a legal pair of trains for which the gap never equals $m$; thus $m$ is not forced and $m\\notin S$. Combining, $S=[-5,3]$. $\\boxed{S=[-5,3]}$"
        ]
      },
      {
        "name": "Connectedness of the continuous image",
        "steps": [
          "Part (a) via connectedness. $D=f-g$ is continuous and $[0,1]$ is connected, so the image $D([0,1])$ is a connected subset of $\\mathbb{R}$, i.e. an interval. This interval contains $D(0)=-5$ and $D(1)=3$, and an interval containing $-5$ and $3$ contains the whole segment between them, so $[-5,3]\\subseteq D([0,1])$. Therefore every $m\\in[-5,3]$ equals $D(t)$ for some $t$ — the gap attains the entire interval. In particular $0\\in[-5,3]$ gives a level instant.",
          "Part (b). The level set $Z=D^{-1}(\\{0\\})$ is closed (continuous preimage of a closed set) and nonempty (by part (a)), hence compact, so $t^{*}=\\min Z$ exists: a first level instant. For non-uniqueness/non-monotonicity, the same image-interval reasoning permits the curve to revisit $0$: e.g. $D(t)=-5+8t+30\\sin(3\\pi t)t(1-t)$ (with $f=D,g=0$) keeps the endpoints $-5,3$ but the connected image is a strictly larger interval than $[-5,3]$ and $0$ is hit thrice; monotonicity fails. So 'exactly one crossing' is unjustified.",
          "Part (c). Sufficiency: for ANY admissible $D$, the connectedness argument forces $[-5,3]\\subseteq D([0,1])$, so each $m\\in[-5,3]$ is achieved — $[-5,3]\\subseteq S$. Necessity: $S$ cannot be larger, because the image interval is allowed to be exactly $[-5,3]$ — the increasing witness $D_0(t)=-5+8t$ has $D_0([0,1])=[-5,3]$, missing every $m\\notin[-5,3]$. Hence no such $m$ is forced and $S\\subseteq[-5,3]$. Together $\\boxed{S=[-5,3]}$."
        ]
      },
      {
        "name": "Explicit root-localization (constructive IVT) plus a sharp counterexample",
        "steps": [
          "Part (a), constructive form. Fix $m\\in[-5,3]$ and set $\\varphi(t)=D(t)-m=f(t)-g(t)-m$, continuous with $\\varphi(0)=-5-m\\le 0$ and $\\varphi(1)=3-m\\ge 0$. If either endpoint is $0$ we are done; otherwise $\\varphi(0)<0<\\varphi(1)$ and bisection localizes a root: maintain a nested sequence of intervals $[a_n,b_n]$ with $\\varphi(a_n)\\le 0\\le \\varphi(b_n)$ and length $2^{-n}$, whose common limit $c=\\lim a_n=\\lim b_n$ satisfies, by continuity, $\\varphi(c)\\le 0$ and $\\varphi(c)\\ge 0$, i.e. $\\varphi(c)=0$, so $D(c)=m$. This constructs an instant with gap $m$ for each $m\\in[-5,3]$.",
          "Part (b). Existence of a first level instant: the bisection (or the closed-set argument) gives the level set $Z=\\{D=0\\}$ nonempty and closed, hence $\\min Z$ exists. Sharpening: among all roots produced, the infimum is attained because $Z$ is compact; that infimum is the first level moment. Non-uniqueness: with $D(t)=-5+8t+30\\sin(3\\pi t)t(1-t)$ and $f=D,g=0$, direct sign tracking shows $\\varphi=D$ changes sign three times on $[0,1]$, so $|Z|=3$; thus a unique crossing cannot be inferred and $D$ is non-monotone.",
          "Part (c), pinning $S$. Sufficiency follows from part (a): each $m\\in[-5,3]$ admits the bisection root for every admissible $D$, so $[-5,3]\\subseteq S$, endpoints included since $D(0)=-5,D(1)=3$ are attained. Necessity by a single sharp witness: $D_0(t)=-5+8t$ is admissible and strictly increasing with range exactly $[-5,3]$; for any $m<-5$ or $m>3$ the equation $D_0(t)=m$ has no solution in $[0,1]$, so $m$ is not forced. (This also dispatches the tempting $m=4$, with $|4|\\le 5$ yet $4\\notin[-5,3]$: not forced.) Therefore $\\boxed{S=[-5,3]}$."
        ]
      }
    ],
    "remark": "Insight: the engine here is not 'a sign change yields one root' but 'a continuous function pushes a connected domain onto a connected image,' so the difference $D=f-g$ does not merely cross a single level — it sweeps out the entire interval between its endpoint values. Framing the question through $D=f-g$ converts a two-object coupled problem ('do the trains meet, and by how much can their gap differ?') into one continuous function on $[0,1]$, and IVT then certifies an interval of realized gaps, $[-5,3]$, in one stroke. The conceptual discipline lives in part (c): IVT forces values strictly between the endpoint values of $D$, so the relevant numbers are $D(0)=-5$ and $D(1)=3$ — never the magnitude $5$ of the starting lead, which tempts one to claim $[-5,5]$. The increasing witness $D_0(t)=-5+8t$ shows the guaranteed set can be no larger than $[-5,3]$, while an oscillating witness shows interior gaps beyond $[-5,3]$ are possible but not guaranteed. Finally, 'a first level instant exists' is a genuinely separate fact: IVT gives existence of some level moment, but firstness comes from $\\{D=0\\}$ being a closed (hence compact) nonempty subset that attains its infimum — and uniqueness of the crossing is simply false without monotonicity. The takeaway for a ranker: turn coupled-existence into a single difference function, read off the realized range from connectedness, and keep the guaranteed range honestly clamped to the actual endpoint values."
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
    "statement": "Let $f:[0,1]\\to[0,1]$ be continuous. \\[Prove that the equation  f(x)=1-x  has a solution in  [0,1].\\] (Geometrically: the graph of $f$ must meet the anti-diagonal joining $(0,1)$ to $(1,0)$.)",
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
    "statement": "For a real parameter $c$, consider $x^{3}-3x=c$. \\[Find all  c  for which this equation has exactly three distinct real solutions,\\] and state how many solutions occur for the remaining values of $c$.",
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
    "statement": "Let $f$ be continuous on $[0,3]$ with $f(0)=f(3)$. \\[Prove there exists  x\\in[0,2] \\text{ with } f(x)=f(x+1).\\] (A unit-length horizontal chord must exist somewhere.)",
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
    "title": "The Average Refuses the Boundary of Its Range",
    "difficulty": 5,
    "task": "Prove the average is attained, and determine the exact functions for which f never strays to both sides of it",
    "tags": [
      "integral-mean",
      "evt-bounding",
      "strict-inequality",
      "degenerate-case",
      "sign-change",
      "constant-trap"
    ],
    "statement": "Let $f:[0,1]\\to\\mathbb{R}$ be continuous, and write\n\\[\nA=\\int_{0}^{1} f(t)\\,dt\n\\]\nfor its average value over $[0,1]$ (the interval has length $1$, so the average and the integral coincide). Consider the three level sets cut out by $A$:\n\\[\nL=\\{x\\in[0,1]:f(x)<A\\},\\qquad E=\\{x\\in[0,1]:f(x)=A\\},\\qquad G=\\{x\\in[0,1]:f(x)>A\\}.\n\\]\n\nProve the following two assertions and then resolve the dichotomy precisely.\n\\begin{itemize}\n\\item[(i)] $E$ is never empty: there always exists $c\\in[0,1]$ with $f(c)=A$. (This is the mean-value statement for integrals; prove it from continuity and the extreme-value theorem rather than quoting it.)\n\\item[(ii)] One naturally expects more — that $f$ must dip strictly below its own average somewhere and rise strictly above it somewhere, i.e. that $L$ and $G$ are both nonempty, so that the level $A$ is genuinely crossed. This stronger claim is not a theorem as stated.\n\\end{itemize}\n\nDetermine the exact class of continuous $f$ for which the stronger claim fails — that is, for which $L$ and $G$ are not both nonempty — and prove your characterization is sharp (every such $f$ fails, and every other continuous $f$ succeeds, with the crossing then occurring at an interior point of $[0,1]$). State your final answer as that exceptional class of functions.",
    "answer": "\\[\\boxed{\\,L,G\\text{ both empty}\\iff f\\text{ is constant};\\ \\text{i.e. the stronger claim fails for exactly the constant }f\\,}\\]",
    "trap": "The seductive misstep is to prove (ii) outright by asserting the strict double bound $m<A<M$ \"because an average of a non-degenerate range of values must lie strictly inside it,\" then turning the IVT crank to manufacture both a sub-average and a super-average point — and never noticing that this strict bound is simply FALSE for one family of functions. When $f\\equiv k$ is constant, the extreme-value theorem still hands you $m=M=k$, but now $A=\\int_0^1 k\\,dt=k$ too, so the chain collapses to $m=A=M$. There is no slack for IVT to bite: $L=G=\\varnothing$ while $E=[0,1]$. The value $A$ is still attained (assertion (i) survives, since every point satisfies $f(c)=A$), but it is never crossed. A student who writes \"$m<A<M$ by EVT, so by IVT $f$ is below $A$ somewhere and above $A$ somewhere\" has silently divided by the very gap $M-m$ that vanishes in the constant case — a hidden non-degeneracy assumption smuggled in under the word \"average.\" The deeper trap is mistaking which hypothesis forces strictness: it is NOT continuity and it is NOT the EVT (both hold for constants); it is precisely non-constancy, and the engine that converts non-constancy into strict inequality is the fact that a continuous nonnegative function which is positive at even one point has strictly positive integral — applied to $f-m$ and to $M-f$. Get the gap to vanish only for constants, and the dichotomy is exact; assume the gap is always positive, and you have \"proved\" a false theorem. A secondary slip is to think a non-constant $f$ might still avoid an INTERIOR crossing by hitting $A$ only at an endpoint: but if $f(0)=A$ with $f$ non-constant, then $f-A$ is continuous, not identically zero, has zero integral, and vanishes at $0$, so it must change sign inside $(0,1)$ — forcing an interior crossing regardless.",
    "solutions": [
      {
        "name": "EVT bounds, then the positive-integral lemma forces strictness exactly off the constants",
        "steps": [
          "Existence of $c$ (assertion (i)). Since $f$ is continuous on the compact set $[0,1]$, the extreme-value theorem gives a minimum $m=f(p)$ and a maximum $M=f(q)$ with $m\\le f(x)\\le M$ for all $x$. Integrating over $[0,1]$ (length $1$) preserves the inequalities: $m=\\int_0^1 m\\,dt\\le \\int_0^1 f=A\\le \\int_0^1 M\\,dt=M$. Thus $m\\le A\\le M$, so $A$ lies in the range $[m,M]=f([0,1])$ (the range is an interval by IVT). Hence $A=f(c)$ for some $c\\in[0,1]$: $E\\neq\\varnothing$.",
          "The strictness lemma. Claim: $A>m$ unless $f\\equiv m$, and $A<M$ unless $f\\equiv M$. Proof for the lower bound: the function $g=f-m$ is continuous and $g\\ge0$. Then $A-m=\\int_0^1 g$. If $f$ is non-constant there is a point $x_0$ with $f(x_0)>m$, i.e. $g(x_0)=\\delta>0$; by continuity $g>\\delta/2$ on some open subinterval $(x_0-\\eta,x_0+\\eta)\\cap[0,1]$ of positive length $\\ell$, so $\\int_0^1 g\\ge \\tfrac{\\delta}{2}\\,\\ell>0$, giving $A>m$. The same argument applied to $M-f\\ge0$ (positive somewhere when $f$ is non-constant) gives $A<M$. So: $f$ non-constant $\\Rightarrow m<A<M$ strictly.",
          "Crossing for non-constant $f$. With $m<A<M$, the minimizer $p$ has $f(p)=m<A$ so $p\\in L$, and the maximizer $q$ has $f(q)=M>A$ so $q\\in G$. Hence $L\\neq\\varnothing$ and $G\\neq\\varnothing$: the level $A$ is genuinely crossed. Moreover applying IVT to $f$ on the closed interval with endpoints $p,q$ (where $f$ runs from $m$ to $M$ and $A$ is strictly between) yields a point $c$ strictly between $p$ and $q$ with $f(c)=A$; since $f(p)\\ne A\\ne f(q)$, this $c$ is interior to that interval, hence an interior crossing of $A$.",
          "The exceptional class, and why it is exactly the constants. If instead $f$ is constant, $f\\equiv k$, then $m=M=k$ and $A=\\int_0^1 k=k$, so $A=m=M$. Now $L=\\{f<k\\}=\\varnothing$ and $G=\\{f>k\\}=\\varnothing$, while $E=[0,1]$. So the stronger claim fails. Conversely the lemma showed any non-constant $f$ makes both $L,G$ nonempty. Therefore $L$ and $G$ are both empty precisely when $f$ is constant: $\\boxed{L,G\\text{ both empty}\\iff f\\text{ constant}}$. Note assertion (i) holds in every case — for constants every point lies in $E$ — so existence of $c$ is never in jeopardy; only the crossing is, and only for constants."
        ]
      },
      {
        "name": "Contrapositive: a boundary average forces a vanishing gap, hence constancy",
        "steps": [
          "Set up the contrapositive of the strictness lemma. We prove directly: if $A=m$ then $f\\equiv m$ (and symmetrically $A=M\\Rightarrow f\\equiv M$). Indeed $g=f-m$ is continuous, $g\\ge0$, and $\\int_0^1 g=A-m=0$. A continuous nonnegative function with zero integral is identically zero: if $g(x_0)>0$ at some point, continuity would give a subinterval on which $g$ exceeds a positive constant, forcing $\\int_0^1 g>0$, a contradiction. Hence $g\\equiv0$, i.e. $f\\equiv m$, a constant. The same reasoning on $M-f$ shows $A=M\\Rightarrow f\\equiv M$.",
          "Existence (assertion (i)) and the trichotomy of cases. By EVT and integration, $m\\le A\\le M$ as in Solution 1, so $A=f(c)$ for some $c$ and $E\\ne\\varnothing$ always. There are now exactly three possibilities for where $A$ sits: $A=m$, or $A=M$, or $m<A<M$. The first two, by Step 1, occur only for constant $f$ (and then $m=A=M$, so they coincide). The third occurs for every non-constant $f$.",
          "Read off $L,G$ in each case. If $f$ is constant ($A=m=M$): $L=G=\\varnothing$, $E=[0,1]$ — the stronger claim fails. If $f$ is non-constant ($m<A<M$): the minimizer sits in $L$ (value $m<A$) and the maximizer sits in $G$ (value $M>A$), so $L,G\\ne\\varnothing$ — the claim holds, and IVT between those two points delivers an interior $c$ with $f(c)=A$ since neither endpoint value equals $A$.",
          "Conclusion. The stronger claim fails exactly when $A$ touches the boundary of the range $[m,M]$, and by Step 1 that happens iff $f$ is constant. Hence the exceptional class is precisely the constant functions: $\\boxed{L,G\\text{ both empty}\\iff f\\text{ constant}}$."
        ]
      },
      {
        "name": "Auxiliary average function: the antiderivative crossing argument",
        "steps": [
          "Build an auxiliary continuous function whose sign encodes membership in $L,G$. Let $h(x)=f(x)-A$, continuous on $[0,1]$, with the defining feature $\\int_0^1 h(t)\\,dt=\\int_0^1 f-A=A-A=0$. Then $L=\\{h<0\\}$, $E=\\{h=0\\}$, $G=\\{h>0\\}$. We must show $h$ has a zero (assertion (i)) and characterize when $h$ fails to take both signs.",
          "A zero always exists. If $h$ were everywhere $>0$, then $\\int_0^1 h>0$, contradicting $\\int_0^1 h=0$; likewise $h$ cannot be everywhere $<0$. So $h$ takes a value $\\ge0$ and a value $\\le0$; being continuous on the interval $[0,1]$, IVT gives a point $c$ with $h(c)=0$, i.e. $f(c)=A$. Thus $E\\ne\\varnothing$ unconditionally.",
          "When does $h$ avoid taking both strict signs? Suppose $G=\\varnothing$, i.e. $h\\le0$ throughout. Then $-h\\ge0$ is continuous with $\\int_0^1(-h)=0$, so by the zero-integral principle $-h\\equiv0$, giving $h\\equiv0$, i.e. $f\\equiv A$ is constant. Symmetrically $L=\\varnothing$ ($h\\ge0$) forces $h\\equiv0$ and $f$ constant. Hence if EITHER of $L,G$ is empty, $f$ is constant; conversely a constant $f$ has $h\\equiv0$ so both $L,G$ are empty. Therefore $L,G$ both empty $\\iff$ at least one is empty $\\iff f$ constant.",
          "Interior crossing for non-constant $f$, and the boxed answer. If $f$ is non-constant then $h\\not\\equiv0$ with $\\int_0^1 h=0$, so $h$ is strictly positive somewhere and strictly negative somewhere (Step 3); both $L,G\\ne\\varnothing$, and IVT between a point of $G$ and a point of $L$ — neither an endpoint where $h=0$ is forced — yields an interior $c$ with $h(c)=0$. Even should $h$ vanish at an endpoint, $h\\not\\equiv0$ with mean zero forces a sign change strictly inside, hence an interior zero. Collecting: the stronger crossing claim holds for every non-constant continuous $f$ and fails only for constants, so $\\boxed{L,G\\text{ both empty}\\iff f\\text{ constant}}$."
        ]
      }
    ],
    "remark": "Insight: the mean-value theorem for integrals is really two statements wearing one coat. The weak statement — the average $A$ is attained, $f(c)=A$ for some $c$ — is robust: it survives even for constant $f$, where it degenerates into the triviality that every point hits the average. The strong statement — $A$ is strictly interior to the range, so $f$ is dragged to both sides of its own mean and the level is genuinely crossed — is the one that carries content, and it holds for non-constant $f$ only. The pivot between them is a single, easily-overlooked lemma: a continuous nonnegative function with zero integral is identically zero. Apply it to $f-m$ and to $M-f$ and you learn that $A$ can equal $m$ or $M$ only when the corresponding gap collapses, i.e. only when $f$ is constant. The instructive error is to write \"$m<A<M$ by EVT\" — EVT gives $m\\le A\\le M$, never the strict version, and assuming strictness quietly assumes the very non-constancy the problem asks you to isolate. The right reflex on any existence-by-IVT problem is to interrogate the degenerate case where the squeezing inequalities become equalities: that is exactly where the hypothesis you forgot to use is hiding."
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
    "statement": "Let $f$ be continuous on $[0,1]$ with $f(0)=0$ and $f(1)=1$. Let $n\\ge1$ be an integer. \\[Prove there exist  a,b \\text{ with } 0\\le a<b\\le1,\\ b-a=\\tfrac1n,\\ \\text{and}\\ f(b)-f(a)=\\tfrac1n.\\] That is, somewhere the graph has a chord of horizontal width $1/n$ and vertical rise exactly $1/n$ (average slope $1$).",
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
    "title": "The Charge That Must Confess a Balance Point",
    "difficulty": 5,
    "task": "Prove a continuous accumulation attains its own average at an interior instant, then locate the forced balance points and decide whether that average is pinned to zero",
    "tags": [
      "auxiliary-function",
      "average-value",
      "extreme-value-theorem",
      "fundamental-theorem",
      "balanced-net-area",
      "forced-existence"
    ],
    "statement": "A thin rod occupies the interval $[0,3]$. Its linear charge density $\\rho:[0,3]\\to\\mathbb{R}$ is continuous (the charge may be positive or negative), and the rod is electrically neutral overall:\n\\[\n\\int_{0}^{3}\\rho(t)\\,dt=0.\n\\]\nDefine the accumulated charge up to position $x$,\n\\[\nQ(x)=\\int_{0}^{x}\\rho(t)\\,dt,\\qquad x\\in[0,3],\n\\]\nso that $Q(0)=Q(3)=0$, and let $\\overline{Q}=\\dfrac{1}{3}\\displaystyle\\int_{0}^{3}Q(x)\\,dx$ denote the average accumulated charge along the rod.\n\nPart (a). Prove that for EVERY such neutral rod there is at least one interior position $c\\in(0,3)$ at which the accumulated charge equals its own average, $Q(c)=\\overline{Q}$.\n\nPart (b). Decide, with proof, whether neutrality forces $\\overline{Q}=0$, and whether it forces an interior position where the accumulated charge vanishes, $Q(c)=0$ with $0<c<3$. If either fails, exhibit an explicit continuous neutral $\\rho$ that breaks it.\n\nPart (c). For the specific neutral density $\\rho(t)=\\tfrac{3}{2}-t$, compute $\\overline{Q}$ and determine the complete set of balance positions $c\\in(0,3)$ guaranteed by part (a). Report the ordered data $\\bigl(\\overline{Q};\\ \\{\\,c\\,\\}\\bigr)$ as your final answer.",
    "answer": "\\[\\boxed{\\left(\\overline{Q}=\\tfrac{3}{4}\\,;\\ \\ c\\in\\left\\{\\tfrac{3-\\sqrt{3}}{2},\\ \\tfrac{3+\\sqrt{3}}{2}\\right\\}\\right)}\\]",
    "trap": "The problem is engineered to spring the reflex \"neutral rod, so the running charge that starts and ends at zero must return to zero somewhere inside, and its average is zero too.\" Both halves of that reflex are false, and the elegance of part (a) is that the genuine existence has nothing to do with either. Trap 1 (the phantom interior zero): a strong student reads $\\int_0^3\\rho=0$ as $Q(0)=Q(3)=0$ and, picturing the running area as a curve pinned to zero at both ends, asserts an interior crossing $Q(c)=0$ by IVT. But IVT needs a sign CHANGE of $Q$, and a neutral rod can keep $Q$ strictly one-signed in the interior: take $\\rho(t)=\\sin\\!\\frac{2\\pi t}{3}$, which is neutral, yet $Q(x)=\\frac{3}{2\\pi}\\bigl(1-\\cos\\frac{2\\pi x}{3}\\bigr)>0$ for all $x\\in(0,3)$, so the accumulated charge NEVER returns to zero before the far end. Trap 2 (the pinned average): the same student computes, or simply assumes, $\\overline{Q}=0$, reasoning that an average of something that begins and ends at $0$ should vanish. It need not: for $\\rho(t)=\\frac32-t$ one finds $\\overline{Q}=\\frac34\\neq0$, and for the sine rod $\\overline{Q}=\\frac{3}{2\\pi}\\neq0$. So the value the curve is FORCED to hit is its average $\\overline{Q}$, a generally nonzero height living strictly between $\\min Q$ and $\\max Q$ — not the height $0$ of the endpoints. Trap 3 (wrong existence engine): a student who tries to manufacture the balance point by Rolle/MVT on $Q$ (claiming $Q'(c)=\\rho(c)=0$) proves only that the density has a zero, an entirely different and weaker statement; the average-value conclusion $Q(c)=\\overline{Q}$ comes from EVT (so $Q$ attains a true max and min) plus IVT applied to the value $\\overline{Q}$, which lies in the closed range $[\\min Q,\\max Q]$ precisely because an average of a function never escapes its own range. Trap 4 (boundary leak): even the existence in (a) can be falsely \"located\" at an endpoint; but $\\overline{Q}$ equals $\\min Q$ or $\\max Q$ only if $Q$ is constant (forcing $\\rho\\equiv0$), so for any nonconstant neutral rod the balance point is genuinely interior, $c\\in(0,3)$. Finally, a numerical slip in (c): solving $Q(c)=0$ instead of $Q(c)=\\overline{Q}$ returns the endpoints $c=0,3$ (a degenerate non-answer), whereas the correct equation $\\tfrac32 c-\\tfrac12 c^2=\\tfrac34$ yields the two honest interior crossings $\\tfrac{3\\pm\\sqrt3}{2}$.",
    "solutions": [
      {
        "name": "EVT band plus IVT on the average value (the conceptual engine)",
        "steps": [
          "Part (a). The map $Q(x)=\\int_0^x\\rho$ is continuous on $[0,3]$ (an integral of a continuous integrand is continuous, indeed $C^1$ by the Fundamental Theorem of Calculus, with $Q'=\\rho$). Since $[0,3]$ is closed and bounded, the Extreme Value Theorem says $Q$ attains a genuine minimum $m=\\min_{[0,3]}Q$ and a genuine maximum $M=\\max_{[0,3]}Q$, with $m\\le Q(x)\\le M$ for all $x$. Average both sides over $[0,3]$: integrating $m\\le Q(x)\\le M$ and dividing by $3$ gives $m\\le\\overline{Q}\\le M$, where $\\overline{Q}=\\frac13\\int_0^3 Q$. Thus the average value $\\overline{Q}$ lies in the closed interval $[m,M]=[\\,Q(x_{\\min}),Q(x_{\\max})\\,]$, which is exactly the range of the continuous $Q$. By the Intermediate Value Theorem applied to $Q$ between the points where it attains $m$ and $M$, there is a position $c$ with $Q(c)=\\overline{Q}$. The accumulated charge meets its own average.",
          "That $c$ is genuinely interior. If $Q$ is nonconstant then $m<M$, and the average $\\overline{Q}$ equals an endpoint of $[m,M]$ only when $Q$ is constant; so $m<\\overline{Q}<M$, and the value $\\overline{Q}$ is taken neither at the global max nor the global min. In particular $Q(0)=Q(3)=0$ are the boundary heights, and since $\\overline{Q}$ is attained at a point where $Q$ is strictly between its extremes, any solution $c$ of $Q(c)=\\overline{Q}$ that coincides with an endpoint would force $\\overline{Q}=0=Q(0)$, i.e. $0\\in(m,M)$ is fine but then by IVT a second solution lies strictly inside; either way at least one balance position is interior, $c\\in(0,3)$. (If $Q\\equiv0$ then $\\rho\\equiv0$ and every interior point is a balance point trivially.)",
          "Part (b). Neutrality does NOT force $\\overline{Q}=0$, nor an interior zero of $Q$. Counterexample: $\\rho(t)=\\sin\\frac{2\\pi t}{3}$ is continuous with $\\int_0^3\\rho=\\bigl[-\\frac{3}{2\\pi}\\cos\\frac{2\\pi t}{3}\\bigr]_0^3=0$, so the rod is neutral. Its running charge is $Q(x)=-\\frac{3}{2\\pi}\\cos\\frac{2\\pi x}{3}+\\frac{3}{2\\pi}=\\frac{3}{2\\pi}\\bigl(1-\\cos\\frac{2\\pi x}{3}\\bigr)$, which is $\\ge0$ everywhere and $>0$ for $x\\in(0,3)$, vanishing only at the two endpoints. Hence there is NO interior $c$ with $Q(c)=0$: a neutral rod whose accumulated charge never returns to zero inside. Moreover $\\overline{Q}=\\frac13\\int_0^3\\frac{3}{2\\pi}\\bigl(1-\\cos\\frac{2\\pi x}{3}\\bigr)dx=\\frac{1}{2\\pi}\\int_0^3\\bigl(1-\\cos\\frac{2\\pi x}{3}\\bigr)dx=\\frac{1}{2\\pi}\\Bigl[x-\\frac{3}{2\\pi}\\sin\\frac{2\\pi x}{3}\\Bigr]_0^3=\\frac{1}{2\\pi}\\cdot 3=\\frac{3}{2\\pi}\\neq0$, since the sine term vanishes at both limits. (Either way $\\overline{Q}>0$ since $Q\\ge0$ and $Q\\not\\equiv0$.) Conclusion: neutrality forces only the average-value balance point of part (a); it forces neither $\\overline{Q}=0$ nor an interior zero of $Q$.",
          "Part (c). For $\\rho(t)=\\tfrac32-t$ we have $\\int_0^3\\rho=\\bigl[\\tfrac32 t-\\tfrac12 t^2\\bigr]_0^3=\\tfrac92-\\tfrac92=0$ (neutral). Then $Q(x)=\\int_0^x(\\tfrac32-t)\\,dt=\\tfrac32 x-\\tfrac12 x^2$, with $Q(0)=Q(3)=0$ and, since $Q$ is a downward parabola, a maximum $Q(\\tfrac32)=\\tfrac98$ and minimum $0$ on $[0,3]$. Compute the average: $\\overline{Q}=\\frac13\\int_0^3\\bigl(\\tfrac32 x-\\tfrac12 x^2\\bigr)dx=\\frac13\\Bigl[\\tfrac34 x^2-\\tfrac16 x^3\\Bigr]_0^3=\\frac13\\bigl(\\tfrac{27}{4}-\\tfrac{27}{6}\\bigr)=\\frac13\\cdot\\tfrac94=\\tfrac34$. Now solve $Q(c)=\\overline{Q}$: $\\tfrac32 c-\\tfrac12 c^2=\\tfrac34$, i.e. $2c^2-6c+3=0$, giving $c=\\dfrac{6\\pm\\sqrt{36-24}}{4}=\\dfrac{6\\pm2\\sqrt3}{4}=\\dfrac{3\\pm\\sqrt3}{2}$. Both roots $\\tfrac{3-\\sqrt3}{2}\\approx0.634$ and $\\tfrac{3+\\sqrt3}{2}\\approx2.366$ lie in $(0,3)$, and since $\\overline{Q}=\\tfrac34$ satisfies $0<\\tfrac34<\\tfrac98=\\max Q$, the concave $Q$ crosses the level $\\tfrac34$ exactly twice, so this set is complete. Hence $\\bigl(\\overline{Q};\\{c\\}\\bigr)=\\boxed{\\left(\\tfrac34;\\ \\bigl\\{\\tfrac{3-\\sqrt3}{2},\\tfrac{3+\\sqrt3}{2}\\bigr\\}\\right)}$."
        ]
      },
      {
        "name": "Auxiliary shifted accumulation: force a sign change of $R=Q-\\overline{Q}$",
        "steps": [
          "Part (a). Introduce the auxiliary continuous function $R(x)=Q(x)-\\overline{Q}$ on $[0,3]$, the running charge measured from its own average. By construction $\\int_0^3 R(x)\\,dx=\\int_0^3 Q-3\\overline{Q}=3\\overline{Q}-3\\overline{Q}=0$, so $R$ is a continuous function with zero net integral over $[0,3]$. A continuous function with zero integral over an interval cannot be strictly one-signed there (a strictly positive, or strictly negative, continuous function integrates to something nonzero). Hence $R$ takes both a value $\\ge0$ and a value $\\le0$; if either is exactly $0$ we already have a root, and otherwise $R$ takes a strictly positive value at some $p$ and a strictly negative value at some $q$. By the Intermediate Value Theorem on the interval between $p$ and $q$, there is $c$ with $R(c)=0$, i.e. $Q(c)=\\overline{Q}$.",
          "Interiority. The endpoints give $R(0)=R(3)=Q(0)-\\overline{Q}=-\\overline{Q}$, a single common value. If $\\overline{Q}\\neq0$ both endpoints have the SAME sign, so the sign change of $R$ (guaranteed above) must occur at an interior point, forcing $c\\in(0,3)$. If instead $\\overline{Q}=0$ then $R=Q$ has zero integral and $Q(0)=Q(3)=0$; nonconstant $Q$ then has a strict interior extremum of one sign, hence (zero integral) values of the opposite sign as well, so again an interior root exists. Thus a balance position is always interior unless $\\rho\\equiv0$.",
          "Part (b). The zero-integral property of $R$ controls exactly which naive claims survive. It does NOT say $Q$ itself has zero integral, so $\\overline{Q}$ need not vanish; and it does NOT say $Q$ changes sign, so $Q$ need not have an interior zero. The sine rod $\\rho(t)=\\sin\\frac{2\\pi t}{3}$ realizes both failures: $Q(x)=\\frac{3}{2\\pi}(1-\\cos\\frac{2\\pi x}{3})\\ge0$ stays nonnegative with interior values strictly positive (no interior zero of $Q$), while $\\overline{Q}=\\frac{1}{3}\\int_0^3 Q=\\frac{3}{2\\pi}>0$. So the shifted function $R=Q-\\frac{3}{2\\pi}$ does change sign and yields the balance point, even though $Q$ alone never returns to $0$ inside and $\\overline{Q}\\neq0$.",
          "Part (c). With $\\rho(t)=\\tfrac32-t$: $Q(x)=\\tfrac32 x-\\tfrac12 x^2$ and $\\overline{Q}=\\tfrac13\\int_0^3 Q=\\tfrac34$ (as computed by direct integration). The auxiliary $R(x)=\\tfrac32 x-\\tfrac12 x^2-\\tfrac34$ satisfies $R(0)=R(3)=-\\tfrac34<0$ and $R(\\tfrac32)=\\tfrac98-\\tfrac34=\\tfrac38>0$, exhibiting two sign changes, hence two interior roots. Solving $R(c)=0$, $\\tfrac32 c-\\tfrac12 c^2=\\tfrac34\\Rightarrow 2c^2-6c+3=0\\Rightarrow c=\\tfrac{3\\pm\\sqrt3}{2}$, both in $(0,3)$. The downward parabola meets the level $\\tfrac34<\\max Q=\\tfrac98$ in exactly these two points, so the set is complete: $\\bigl(\\overline{Q};\\{c\\}\\bigr)=\\boxed{\\left(\\tfrac34;\\ \\bigl\\{\\tfrac{3-\\sqrt3}{2},\\tfrac{3+\\sqrt3}{2}\\bigr\\}\\right)}$."
        ]
      },
      {
        "name": "Integration by parts to pin $\\overline{Q}$, then IVT against the realized range",
        "steps": [
          "Part (a). First record a clean formula for the average via integration by parts, using $Q'=\\rho$ (Fundamental Theorem) and $Q(0)=0$: $\\int_0^3 Q(x)\\,dx=\\bigl[xQ(x)\\bigr]_0^3-\\int_0^3 x\\,Q'(x)\\,dx=3\\,Q(3)-\\int_0^3 x\\,\\rho(x)\\,dx=-\\int_0^3 x\\,\\rho(x)\\,dx$, since $Q(3)=0$ by neutrality. Hence $\\overline{Q}=-\\tfrac13\\int_0^3 x\\,\\rho(x)\\,dx$, the negative of the (normalized) first moment of the charge. This is a single real number lying, like every average of a continuous function, within the range $[\\min_{[0,3]}Q,\\ \\max_{[0,3]}Q]$ (those extremes exist by EVT). Therefore $\\overline{Q}$ is an attained value of $Q$: by IVT there is $c$ with $Q(c)=\\overline{Q}$, and as in the other methods $c\\in(0,3)$ for any nonconstant neutral $\\rho$ because $\\overline{Q}$ is strictly between the extremes.",
          "Part (b). The moment formula $\\overline{Q}=-\\tfrac13\\int_0^3 x\\,\\rho(x)\\,dx$ exposes why $\\overline{Q}$ is generally nonzero: neutrality kills the zeroth moment $\\int_0^3\\rho=0$ but says nothing about the first moment $\\int_0^3 x\\rho$. For $\\rho(t)=\\sin\\frac{2\\pi t}{3}$, $\\int_0^3 x\\sin\\frac{2\\pi x}{3}\\,dx=-\\frac{9}{2\\pi}\\neq0$, so $\\overline{Q}=\\frac{3}{2\\pi}\\neq0$; and the explicit $Q(x)=\\frac{3}{2\\pi}(1-\\cos\\frac{2\\pi x}{3})>0$ on $(0,3)$ shows no interior zero of $Q$. So neither $\\overline{Q}=0$ nor an interior zero of $Q$ is forced; only the average-value balance point is.",
          "Part (c). For $\\rho(t)=\\tfrac32-t$: the first moment is $\\int_0^3 x\\bigl(\\tfrac32-t\\bigr)\\,dx=\\int_0^3\\bigl(\\tfrac32 x-x^2\\bigr)dx=\\tfrac34\\cdot9-\\tfrac{27}{3}=\\tfrac{27}{4}-9=-\\tfrac94$, so $\\overline{Q}=-\\tfrac13\\bigl(-\\tfrac94\\bigr)=\\tfrac34$, matching the direct computation. With $Q(x)=\\tfrac32 x-\\tfrac12 x^2$ having realized range $[0,\\tfrac98]$ on $[0,3]$ and $\\tfrac34$ strictly inside it, IVT guarantees crossings; solving $\\tfrac32 c-\\tfrac12 c^2=\\tfrac34$, i.e. $2c^2-6c+3=0$, gives $c=\\tfrac{3\\pm\\sqrt3}{2}\\in(0,3)$. Concavity of $Q$ caps the count at two, so both are realized and the set is exhaustive: $\\bigl(\\overline{Q};\\{c\\}\\bigr)=\\boxed{\\left(\\tfrac34;\\ \\bigl\\{\\tfrac{3-\\sqrt3}{2},\\tfrac{3+\\sqrt3}{2}\\bigr\\}\\right)}$."
        ]
      }
    ],
    "remark": "Insight: the existence here is powered not by a sign change but by the universal fact that an average never escapes the range of what it averages. Once $Q(x)=\\int_0^x\\rho$ is recognized as continuous (Fundamental Theorem), the Extreme Value Theorem pins its range to a closed interval $[\\min Q,\\max Q]$, and the average accumulated charge $\\overline{Q}$ is trapped inside that interval — so the Intermediate Value Theorem forces a position where the running charge equals its own average. The whole difficulty is resisting the two seductive shortcuts that neutrality whispers. Neutrality, $\\int_0^3\\rho=0$, says $Q(0)=Q(3)=0$; it is tempting to conclude (i) the running charge must return to zero somewhere inside, and (ii) its average must be zero. Both are false, and the same sine rod refutes both: $Q(x)=\\frac{3}{2\\pi}(1-\\cos\\frac{2\\pi x}{3})$ is strictly positive in the interior (no interior zero of $Q$) with strictly positive average. The honest forced value is $\\overline{Q}$, generally nonzero, and the cleanest way to see it is the moment identity $\\overline{Q}=-\\frac13\\int_0^3 x\\rho\\,dx$: neutrality kills the zeroth moment but leaves the first moment free, which is exactly the quantity the average measures. The transferable lesson for a ranker: when a problem hands you a balanced quantity, the existence you can guarantee is almost never 'it returns to its starting value' — that needs a sign change — but rather 'it meets its own average', which needs only EVT to bound the range and IVT to enter it. Build the right auxiliary function ($Q$, or the shifted $R=Q-\\overline{Q}$ with zero net integral), prove the value you seek lies in the realized range, and let IVT do the rest."
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
    "title": "Where the Two Wild Curves Shake Hands",
    "difficulty": 5,
    "task": "Determine, with proof, the exact set of points at which the function is continuous",
    "tags": [
      "dirichlet-gate",
      "two-branch-envelope",
      "squeeze",
      "density-argument",
      "oscillation",
      "cancellation"
    ],
    "statement": "Let $E:\\mathbb{R}\\to\\mathbb{R}$ be the function\n\\[\nE(x)=\\begin{cases}x^{2}\\sin\\dfrac1x, & x\\neq 0,\\\\[2mm] 0, & x=0,\\end{cases}\n\\]\nand define $f:\\mathbb{R}\\to\\mathbb{R}$ by\n\\[\nf(x)=\\begin{cases}x^{2}+E(x), & x\\in\\mathbb{Q},\\\\[1mm] (5x-6)+E(x), & x\\notin\\mathbb{Q}.\\end{cases}\n\\]\nThus on the rationals $f$ follows the curve $x^{2}+x^{2}\\sin\\tfrac1x$, while on the irrationals it follows $5x-6+x^{2}\\sin\\tfrac1x$; the same wildly oscillating term $E(x)$ rides on both branches. Determine, with proof, the exact set of points at which $f$ is continuous. Your argument must explain both why continuity holds where it does and why it fails everywhere else, and must address honestly the violent oscillation of $\\sin\\tfrac1x$ near the origin.",
    "answer": "\\[\\boxed{\\{2,\\,3\\}}\\]",
    "trap": "Three layered traps, each of which a strong solver can fall into. TRAP 1 (the oscillation red herring). The term $E(x)=x^{2}\\sin\\tfrac1x$ screams 'pathology at $0$', and many solvers spend their effort there, deciding that $0$ must be special and reporting an answer like $\\{0\\}$ or $\\{0\\}\\cup\\{\\dots\\}$. But $E$ is continuous on all of $\\mathbb{R}$ (the squeeze $|E(x)|\\le x^{2}$ gives $E(x)\\to 0=E(0)$), and crucially it appears identically on BOTH branches, so it cancels out of the only quantity that decides continuity: the gap between the branches. At $0$ the gap is $|0^{2}-(5\\cdot0-6)|=6\\neq 0$, so $0$ is a point of DIScontinuity, not continuity. The oscillation is pure misdirection. TRAP 2 (treating it like a single-envelope Dirichlet problem). A solver who has seen $h(x)\\mathbf{1}_{\\mathbb{Q}}(x)$ may reflexively look for 'where the envelope vanishes', i.e. solve $x^{2}+E(x)=0$ or $(5x-6)+E(x)=0$ separately. That is the wrong condition entirely: continuity here is governed by where the TWO branches AGREE, $p(c)=q(c)$, not where either branch hits zero. The zero sets of the individual branches are irrelevant and lead nowhere near $\\{2,3\\}$. TRAP 3 (the tangency miscount). The agreement condition is $x^{2}=5x-6$, i.e. $(x-2)(x-3)=0$, giving the two simple roots $2$ and $3$. A solver who slightly misreads the linear branch as $4x-4$ (a natural 'nice' choice) gets $x^{2}-4x+4=(x-2)^{2}=0$, a DOUBLE root, and may then either report only $\\{2\\}$ or wrongly believe the double root grants 'extra' smoothness or a different count. The correct branch $5x-6$ produces exactly two distinct continuity points; reporting one, or three, or attaching spurious significance to the origin, all miss the clean answer $\\{2,3\\}$.",
    "solutions": [
      {
        "name": "Subtract the branches: cancel the oscillation, then density + squeeze",
        "steps": [
          "First record that $E(x)=x^{2}\\sin\\tfrac1x$ (with $E(0)=0$) is continuous on all of $\\mathbb{R}$: for $x\\neq 0$, $|E(x)|\\le x^{2}$ since $|\\sin\\tfrac1x|\\le 1$, so $E(x)\\to 0=E(0)$ as $x\\to 0$ by the squeeze, and away from $0$ it is a product of continuous functions. Write $p(x)=x^{2}+E(x)$ and $q(x)=(5x-6)+E(x)$; both are continuous on $\\mathbb{R}$, $f=p$ on $\\mathbb{Q}$ and $f=q$ on $\\mathbb{Q}^{c}$.",
          "Fix any $c\\in\\mathbb{R}$. By density of $\\mathbb{Q}$ choose rationals $r_{n}\\to c$; since $p$ is continuous, $f(r_{n})=p(r_{n})\\to p(c)$. By density of the irrationals choose irrationals $s_{n}\\to c$; since $q$ is continuous, $f(s_{n})=q(s_{n})\\to q(c)$. Hence if $f$ is continuous at $c$ then $f(c)$ must equal both $p(c)$ and $q(c)$, forcing $p(c)=q(c)$. The oscillating $E(c)$ sits on both sides of this equation and cancels: $p(c)=q(c)\\iff c^{2}=5c-6$.",
          "Conversely, suppose $p(c)=q(c)$, i.e. $c^{2}=5c-6$. Then $f(c)$ equals this common value $p(c)=q(c)$ no matter whether $c$ is rational or irrational. For any $x$ near $c$, $f(x)$ is either $p(x)$ or $q(x)$, so $|f(x)-f(c)|\\le\\max\\{|p(x)-p(c)|,\\,|q(x)-q(c)|\\}\\to 0$ by continuity of $p$ and $q$. Thus $f$ is continuous at $c$. Therefore $f$ is continuous at $c$ iff $c^{2}=5c-6$.",
          "Solve $c^{2}-5c+6=0\\Rightarrow(c-2)(c-3)=0\\Rightarrow c\\in\\{2,3\\}$. At every other point the branch gap $|p(c)-q(c)|=|c^{2}-5c+6|>0$ and the two density-sequences above give different limits, so $f$ is discontinuous there — including at $0$, where the gap is $|{-6}|=6$. The continuity set is exactly $\\boxed{\\{2,3\\}}$."
        ]
      },
      {
        "name": "Direct $\\varepsilon$–$\\delta$ with an explicit jump witness",
        "steps": [
          "Continuity at $c\\in\\{2,3\\}$. Here $c^{2}-5c+6=0$, so $p(c)=q(c)=:L$ and $f(c)=L$. Given $\\varepsilon>0$, continuity of $p$ gives $\\delta_{1}$ with $|p(x)-L|<\\varepsilon$ for $|x-c|<\\delta_{1}$, and continuity of $q$ gives $\\delta_{2}$ with $|q(x)-L|<\\varepsilon$ for $|x-c|<\\delta_{2}$. Put $\\delta=\\min(\\delta_{1},\\delta_{2})$. For $|x-c|<\\delta$, $f(x)\\in\\{p(x),q(x)\\}$, so $|f(x)-f(c)|<\\varepsilon$. This is a complete certificate of continuity at $2$ and at $3$; the oscillating $E$ is absorbed harmlessly inside the continuity of $p$ and $q$.",
          "Discontinuity at any $c\\notin\\{2,3\\}$. Set $g(c)=p(c)-q(c)=c^{2}-5c+6\\neq 0$ and let $\\varepsilon_{0}=\\tfrac12|g(c)|>0$. We show no $\\delta$ certifies continuity. Note $f(c)$ is either $p(c)$ or $q(c)$; in either case $f(c)$ differs from the OTHER branch value at $c$ by exactly $|g(c)|=2\\varepsilon_{0}$.",
          "Fix any $\\delta>0$. If $c$ is rational then $f(c)=p(c)$; by density pick an irrational $x$ with $|x-c|<\\delta$ and (by continuity of $q$) close enough that $|q(x)-q(c)|<\\varepsilon_{0}$. Then $|f(x)-f(c)|=|q(x)-p(c)|\\ge|q(c)-p(c)|-|q(x)-q(c)|>2\\varepsilon_{0}-\\varepsilon_{0}=\\varepsilon_{0}$. If $c$ is irrational the symmetric argument with a nearby rational $x$ and continuity of $p$ gives $|f(x)-f(c)|>\\varepsilon_{0}$.",
          "So for every $\\delta$ some point within $\\delta$ of $c$ breaks the $\\varepsilon_{0}$ bound, hence $f$ is discontinuous at every $c\\neq 2,3$ (at $c=0$ one has $\\varepsilon_{0}=3$). Combined with the first step, the continuity set is exactly $\\boxed{\\{2,3\\}}$."
        ]
      },
      {
        "name": "Oscillation criterion $\\omega_f(c)=|p(c)-q(c)|$",
        "steps": [
          "Recall $f$ is continuous at $c$ iff its oscillation $\\omega_{f}(c)=\\lim_{\\delta\\to0^{+}}\\big(\\sup_{|x-c|<\\delta}f(x)-\\inf_{|x-c|<\\delta}f(x)\\big)$ equals $0$. Compute $\\omega_{f}(c)$ for our $f$.",
          "On any interval $(c-\\delta,c+\\delta)$ both rationals and irrationals are dense, so the values of $f$ there fill out (approximately) the union of $p$- and $q$-values on that interval. As $\\delta\\to0$, continuity of $p$ and $q$ pins these to $p(c)$ and $q(c)$ respectively, so $\\sup f\\to\\max\\{p(c),q(c)\\}$ and $\\inf f\\to\\min\\{p(c),q(c)\\}$. Hence $\\omega_{f}(c)=|p(c)-q(c)|=|c^{2}-5c+6|$. The shared oscillating term $E(c)$ cancels inside the absolute difference and contributes nothing to $\\omega_{f}$ — the precise statement that the $\\sin\\tfrac1x$ pathology is irrelevant to continuity here.",
          "Therefore $\\omega_{f}(c)=0\\iff c^{2}-5c+6=0\\iff(c-2)(c-3)=0$. Numerically, sampling values in shrinking neighbourhoods gives $\\omega_f\\to 6$ at $0$, $\\to 2$ at $1$, $\\to\\tfrac14$ at $\\tfrac52$, and $\\to0$ only at $2$ and $3$ — matching $|c^{2}-5c+6|$ exactly.",
          "Thus $\\{c:\\omega_{f}(c)=0\\}=\\boxed{\\{2,3\\}}$ is the complete continuity set. (Contrast the impostor branch $4x-4$: then $\\omega_{f}(c)=|(x-2)^{2}|$ vanishes only at the double root $c=2$, giving the single point $\\{2\\}$ — the genuine $5x-6$ yields two distinct hand-shake points.)"
        ]
      }
    ],
    "remark": "Insight: when a function is built from TWO continuous envelopes $p,q$ glued by the rational/irrational gate, $f=p\\,\\mathbf{1}_{\\mathbb{Q}}+q\\,\\mathbf{1}_{\\mathbb{Q}^{c}}$, density forces the oscillation at every point to equal the branch gap $|p(c)-q(c)|$; so $f$ is continuous exactly where the two curves SHAKE HANDS, $p(c)=q(c)$ — never at the zeros of either curve alone. This reframes the classic single-envelope picture ('continuous where the envelope hits zero') as a special case: there $q\\equiv 0$, and 'agreement' degenerates to 'envelope vanishes'. The engineered drama here is the shared term $E(x)=x^{2}\\sin\\tfrac1x$: it is genuinely pathological near $0$, yet because it rides identically on both branches it cancels in the difference $p-q=x^{2}-5x+6$ and is completely invisible to continuity. The lesson for a ranker is to refuse the bait of the oscillation, isolate the decisive quantity (the gap), and notice that it is a clean quadratic whose two simple roots $2,3$ — not zeros, not the origin, not a tangency — are the only places the wild graph becomes, for an instant, continuous."
  },
  {
    "theme": "pathological",
    "themeLabel": "Pathological Functions",
    "title": "The Ruler That Hangs on a Parabola",
    "difficulty": 5,
    "task": "Determine, with proof, the exact set of points at which the function is continuous",
    "tags": [
      "thomae-twist",
      "lowest-terms-parity",
      "squeeze",
      "density-argument",
      "broken-symmetry",
      "number-theory-fusion"
    ],
    "statement": "Work on the open interval $I=(0,1)$. Recall that every $x\\in I\\cap\\mathbb{Q}$ has a unique representation $x=p/q$ in lowest terms with $1\\le p<q$ and $\\gcd(p,q)=1$. Define $f:I\\to\\mathbb{R}$ by\n\\[\nf(x)=\\begin{cases}x(1-x), & x\\notin\\mathbb{Q},\\\\ x(1-x)+\\dfrac{1+(-1)^{p+1}}{2q}, & x=\\dfrac{p}{q}\\ \\text{in lowest terms}.\\end{cases}\n\\]\nThe added term is a Thomae-style \"ruler bump\": since $\\tfrac{1}{2}\\bigl(1+(-1)^{p+1}\\bigr)=1$ when $p$ is odd and $=0$ when $p$ is even, the bump equals $1/q$ exactly when the lowest-terms numerator is odd, and vanishes when it is even. Thus $f$ is the symmetric parabola $x(1-x)$ everywhere on the irrationals, while on the rationals it is that same parabola lifted by a $1/q$ spike at the odd-numerator points only. Determine, with full proof, the exact set $C\\subseteq I$ of points at which $f$ is continuous. Your argument must explain why continuity holds where it does, why it fails everywhere else, and must confront honestly the classic temptations: that $f$ \"should\" be continuous only at the irrationals, that continuity \"should\" coincide with the vanishing of $f$, and that a function built from the symmetric skeleton $x(1-x)$ \"should\" have a continuity set symmetric about $\\tfrac12$.",
    "answer": "\\[\\boxed{\\,C=\\bigl((0,1)\\setminus\\mathbb{Q}\\bigr)\\ \\cup\\ \\Bigl\\{\\tfrac{p}{q}\\in(0,1):\\ \\gcd(p,q)=1,\\ p\\ \\text{even}\\Bigr\\}\\,}\\]",
    "trap": "Four temptations, each catching a different reflex of a strong solver. TRAP 1 (the Thomae reflex 'continuous exactly at the irrationals'). The bump $\\tfrac1q\\,[p\\ \\text{odd}]$ looks like a pure popcorn term, so the muscle memory answer is 'continuous on $I\\setminus\\mathbb{Q}$, discontinuous on $I\\cap\\mathbb{Q}$.' That undercounts: at any rational with an EVEN lowest-terms numerator the bump is identically $0$, so there $f$ equals the parabola exactly and is continuous. The point $2/3$, $4/5$, $4/7,\\dots$ are all continuity points; the answer is strictly larger than the irrationals. TRAP 2 (the popcorn slogan 'continuous $\\iff$ the function value is $0$'). For the bare Thomae function continuity does coincide with the zero set, and a solver may transplant that slogan. Here it is false on BOTH sides: $f(x)=x(1-x)>0$ at every interior point (rational and irrational alike), yet the irrationals are continuity points with $f\\neq0$; and the extra continuity rationals have $f=x(1-x)\\neq0$ too. Continuity is governed by where the bump vanishes, i.e. where $f$ equals its SKELETON $x(1-x)$ — not by where $f$ equals $0$. TRAP 3 (the parity slip 'even denominator works too'). Having found that even numerators help, a solver may sloppily allow 'even $p$ or even $q$'. But in lowest terms an even $q$ forces $p$ odd (else $\\gcd\\ge2$), so every even-denominator rational has bump $1/q\\neq0$ and is DIScontinuous: $1/4,3/4,1/6,5/6,\\dots$ are all discontinuities. The correct gate is purely 'numerator even' (equivalently: $q$ odd and $p$ even). TRAP 4 (the false symmetry). The skeleton $x(1-x)$ is symmetric about $x=\\tfrac12$, tempting the claim that $C$ is symmetric too. It is not: if $p$ is even then $q$ is odd, so the mirror point $1-\\tfrac{p}{q}=\\tfrac{q-p}{q}$ has numerator $q-p=\\text{odd}-\\text{even}=$ odd — a DIScontinuity. Hence every extra continuity rational has its reflection landing on a discontinuity; no even-numerator rational has an even-numerator mirror. The only self-mirrored rational, $1/2$, has odd numerator and is itself a discontinuity. A symmetric skeleton can carry a violently asymmetric continuity set.",
    "solutions": [
      {
        "name": "The master limit $\\lim_{y\\to c}f(y)=c(1-c)$, then match the value",
        "steps": [
          "Write $g(x)=x(1-x)$ (continuous on $\\mathbb{R}$) and $\\beta(x)$ for the bump, so $f=g+\\beta$ where $\\beta(x)=0$ for $x$ irrational and $\\beta(p/q)=\\tfrac1q\\,[p\\ \\text{odd}]$ for $x=p/q$ in lowest terms. The single decisive estimate is $0\\le\\beta(x)\\le\\tfrac1q\\le$ (Thomae bound): for every $\\varepsilon>0$ only finitely many rationals in $I$ have denominator $q\\le1/\\varepsilon$, so all but finitely many points of any small interval have $\\beta<\\varepsilon$.",
          "Fix any $c\\in I$ and let $y\\to c$. If $y$ is irrational, $f(y)=g(y)\\to g(c)$ by continuity of $g$. If $y=a/b$ is rational then $f(y)=g(a/b)+\\beta(a/b)$, where $g(a/b)\\to g(c)$ and $0\\le\\beta(a/b)\\le 1/b\\to0$ because $y\\to c$ through rationals forces the denominator $b\\to\\infty$ (the finite-denominator rationals are isolated away from $c$ unless $c$ itself is one of them). Hence in all cases $f(y)\\to g(c)$, i.e. $\\lim_{y\\to c}f(y)=c(1-c)$ for EVERY $c\\in I$ — the wild bump contributes nothing to the limit.",
          "Therefore $f$ is continuous at $c$ iff $f(c)=g(c)$, i.e. iff $\\beta(c)=0$. If $c$ is irrational, $\\beta(c)=0$ automatically, so $f$ is continuous there. If $c=p/q$ in lowest terms, $\\beta(c)=\\tfrac1q[p\\ \\text{odd}]=0\\iff p$ is even. The zeros of $g$ play no role: $g(c)>0$ throughout the interior, yet that never obstructs continuity, refuting the 'continuous $\\iff f=0$' slogan.",
          "Hence the continuity set is exactly $C=\\bigl(I\\setminus\\mathbb{Q}\\bigr)\\cup\\{p/q\\in I:\\gcd(p,q)=1,\\ p\\ \\text{even}\\}$. Note $1/2$ (numerator $1$, odd) is a discontinuity, and an even denominator forces $p$ odd hence a discontinuity, so the gate is precisely 'numerator even'. $\\boxed{C=(I\\setminus\\mathbb{Q})\\cup\\{p/q:\\gcd(p,q)=1,\\ p\\ \\text{even}\\}}$."
        ]
      },
      {
        "name": "Oscillation $\\omega_f(c)=\\beta(c)$ via dense sampling",
        "steps": [
          "Use the oscillation criterion: $f$ is continuous at $c$ iff $\\omega_f(c)=\\lim_{\\delta\\to0^+}\\bigl(\\sup_{|y-c|<\\delta}f-\\inf_{|y-c|<\\delta}f\\bigr)=0$. On any interval $(c-\\delta,c+\\delta)\\subset I$ both irrationals and rationals are dense, and on it $g$ is continuous with small variation, while $\\beta\\ge0$ with $\\beta=0$ on a dense set (the irrationals).",
          "As $\\delta\\to0$, $\\sup g$ and $\\inf g$ both tend to $g(c)$, so the spread of $f$ collapses onto the spread of $\\beta$. Because $\\beta\\ge0$, vanishes on the dense irrationals, and (by the Thomae bound) its values exceeding any $\\varepsilon$ are isolated, one gets $\\inf_{(c-\\delta,c+\\delta)}f\\to g(c)$ and $\\sup_{(c-\\delta,c+\\delta)}f\\to g(c)+\\beta(c)$ (the supremum keeps the value AT $c$ when $c$ carries a bump, since neighbouring bumps shrink). Thus $\\omega_f(c)=\\beta(c)$.",
          "So $\\omega_f(c)=0\\iff\\beta(c)=0$. For irrational $c$, $\\beta(c)=0$. For $c=p/q$ lowest terms, $\\omega_f(c)=\\tfrac1q[p\\ \\text{odd}]$, which is $0$ exactly when $p$ is even and equals $1/q$ (a genuine jump) when $p$ is odd. Numerically, sampling shrinking windows gives $\\omega_f\\to0$ at $2/3,4/5$ and at every irrational, while $\\omega_f\\to\\tfrac12,\\tfrac13,\\tfrac15$ at $1/2,1/3,2/5$ respectively — matching $\\tfrac1q[p\\ \\text{odd}]$ exactly.",
          "Hence $\\{c:\\omega_f(c)=0\\}=(I\\setminus\\mathbb{Q})\\cup\\{p/q:\\gcd(p,q)=1,\\ p\\ \\text{even}\\}=\\boxed{C}$. The shared skeleton $g$ cancels out of every oscillation because it is continuous, so only the bump's parity gate survives."
        ]
      },
      {
        "name": "Direct $\\varepsilon$–$\\delta$ with explicit certificates and witnesses",
        "steps": [
          "Continuity at an irrational $a$ or an even-numerator rational $a=p_0/q_0$. In both cases $\\beta(a)=0$, so $f(a)=g(a)$. Given $\\varepsilon>0$, pick $\\delta_1$ from continuity of $g$ so that $|g(y)-g(a)|<\\varepsilon/2$ for $|y-a|<\\delta_1$, and pick $\\delta_2>0$ small enough that the only rationals within $\\delta_2$ of $a$ with denominator $\\le 2/\\varepsilon$ are none (Thomae: finitely many such rationals, so they sit at positive distance from $a$; if $a$ itself is one, exclude it — its own bump is $0$). Then for $0<|y-a|<\\min(\\delta_1,\\delta_2)$ every $y$ has $\\beta(y)\\le1/q<\\varepsilon/2$, giving $|f(y)-f(a)|\\le|g(y)-g(a)|+\\beta(y)<\\varepsilon$. This certifies continuity at every irrational and every even-numerator rational.",
          "Discontinuity at an odd-numerator rational $c=p/q$. Here $\\beta(c)=1/q>0$; set $\\varepsilon_0=\\tfrac1{2q}$. The value is $f(c)=g(c)+\\tfrac1q$. By density of the irrationals choose irrationals $y_n\\to c$; then $f(y_n)=g(y_n)\\to g(c)=f(c)-\\tfrac1q$, so $|f(y_n)-f(c)|\\to\\tfrac1q=2\\varepsilon_0>\\varepsilon_0$. No $\\delta$ can confine $f$ to within $\\varepsilon_0$ of $f(c)$, so $f$ is discontinuous at $c$. In particular every even-denominator rational (forced odd numerator) and $1/2$ itself are discontinuities.",
          "The two steps partition $I$: continuity exactly on $(I\\setminus\\mathbb{Q})\\cup\\{p/q:p\\ \\text{even}\\}$, discontinuity exactly on $\\{p/q:p\\ \\text{odd}\\}$. The irrational witness sequence in step 2 is the honest refutation of the 'continuous $\\iff f=0$' slogan: it isolates the bump, which is what actually breaks continuity, independently of the (positive) value $g(c)$.",
          "Finally, the broken symmetry: if $p$ is even then $q$ is odd, so the mirror $1-c=(q-p)/q$ has odd numerator and falls under step 2 — a discontinuity. Thus $C$ contains no mirror-pair of rationals; the symmetric skeleton carries an asymmetric continuity set. The complete answer is $\\boxed{C=(I\\setminus\\mathbb{Q})\\cup\\{p/q\\in I:\\gcd(p,q)=1,\\ p\\ \\text{even}\\}}$."
        ]
      }
    ],
    "remark": "Insight: write any rational/irrational-gated function as $f=g+\\beta$ with $g$ a CONTINUOUS skeleton shared (effectively) by both branches and $\\beta$ a Thomae-type bump supported on the rationals with $0\\le\\beta(p/q)\\le 1/q$. The squeeze forces $\\lim_{y\\to c}f(y)=g(c)$ at EVERY point, so continuity reduces to the single equation $f(c)=g(c)\\iff\\beta(c)=0$ — never to $f(c)=0$. The whole problem is then a number-theory question about WHERE the engineered bump vanishes. Here the bump is gated by the parity of the lowest-terms numerator, so the continuity set is the irrationals together with the even-numerator rationals — a set strictly larger than 'just the irrationals' yet strictly smaller than 'all of $(0,1)$'. Three traps fall out of three reflexes: the popcorn slogan 'continuous $\\iff$ value $0$' (false because the skeleton is positive), the parity slip 'even denominator helps' (false because lowest terms ties an even denominator to an odd numerator), and the symmetry assumption (false because $p$ even $\\Rightarrow q$ odd $\\Rightarrow$ the mirror numerator $q-p$ is odd, so reflection maps every continuity rational to a discontinuity). The ranker's takeaway: in pathological-function continuity, isolate the bump, ask only where it dies, and never let a symmetric-looking skeleton lull you into assuming a symmetric answer."
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
    "title": "Two Irrationals, No Conjugates",
    "difficulty": 5,
    "task": "Construct such a function, prove its continuity set is exactly the prescribed pair, and prove the rational-coefficient route is impossible",
    "tags": [
      "dirichlet-splice",
      "branch-agreement",
      "zero-set-design",
      "galois-conjugate",
      "irrational-offset",
      "inverse-design"
    ],
    "statement": "Call a function $f:\\mathbb{R}\\to\\mathbb{R}$ a splice if there are two continuous functions $R,I:\\mathbb{R}\\to\\mathbb{R}$ with\n\\[\nf(x)=\\begin{cases}R(x),&x\\in\\mathbb{Q},\\\\ I(x),&x\\notin\\mathbb{Q}.\\end{cases}\n\\]\nThe idea is Dirichlet's: $f$ glues one continuous formula onto the rationals and another onto the irrationals.\n\n(a) Show that a splice $f$ is continuous at a point $c$ if and only if $R(c)=I(c)$. Conclude that the set of continuity points of $f$ is exactly the zero set of the continuous function $D=R-I$, and that this set therefore can be any closed subset of $\\mathbb{R}$ that is the zero set of a continuous function.\n\n(b) (Inverse design.) Construct an explicit splice $f$ whose set of continuity points is exactly the two-element set $\\{\\sqrt2,\\sqrt3\\}$ — continuous at $\\sqrt2$ and at $\\sqrt3$, and discontinuous at every other real number. Note the constraint that the agreement set $\\{R=I\\}$ must contain no rational point at all. Prove your $f$ has the claimed continuity set.\n\n(c) A natural reflex is to engineer the offset $D=R-I$ from polynomials with rational coefficients, since $\\sqrt2,\\sqrt3$ are the familiar roots of $x^2-2$ and $x^2-3$. Prove this is impossible: if $R$ and $I$ are polynomials with rational coefficients (so $D\\in\\mathbb{Q}[x]$, not identically zero), the continuity set of $f$ can never equal $\\{\\sqrt2,\\sqrt3\\}$. Identify precisely what the rational-coefficient hypothesis forces, and explain why an irrational-coefficient offset is unavoidable.",
    "answer": "\\[\\boxed{\\,f(x)=x-\\bigl(x-\\sqrt2\\,\\bigr)\\bigl(x-\\sqrt3\\,\\bigr)\\,\\mathbf{1}_{\\mathbb{R}\\setminus\\mathbb{Q}}(x)\\ \\text{ is continuous exactly on }\\{\\sqrt2,\\sqrt3\\}\\,}\\]",
    "trap": "The fatal reflex in part (c) is to reach for rational-coefficient polynomials: \"$\\sqrt2$ is killed by $x^2-2$ and $\\sqrt3$ by $x^2-3$, so take the offset $D(x)=(x^2-2)(x^2-3)$ and be done.\" But the zero set of that $D$ is $\\{\\pm\\sqrt2,\\pm\\sqrt3\\}$ — four points — so the resulting splice is continuous at $-\\sqrt2$ and $-\\sqrt3$ as well, overshooting the prescribed pair. The error is not arithmetic; it is a hidden algebraic constraint. Any polynomial with rational coefficients that vanishes at $\\sqrt2$ is divisible by the minimal polynomial $x^2-2$, hence also vanishes at the conjugate $-\\sqrt2$ (concretely, writing $D(\\sqrt2)=u+v\\sqrt2$ with $u,v\\in\\mathbb{Q}$, vanishing forces $u=v=0$, and then $D(-\\sqrt2)=u-v\\sqrt2=0$ automatically). A rational-coefficient offset cannot separate $\\sqrt2$ from $-\\sqrt2$: it always drags the Galois conjugate into the zero set. So the prescribed set $\\{\\sqrt2,\\sqrt3\\}$, which omits both conjugates, is forever out of reach of $\\mathbb{Q}[x]$. The only escape is to abandon rational coefficients and write the offset factored over the prescribed roots themselves, $D(x)=(x-\\sqrt2)(x-\\sqrt3)=x^2-(\\sqrt2+\\sqrt3)x+\\sqrt6$, whose irrational coefficients are exactly what break the conjugation symmetry. A secondary slip is to forget that the agreement value must avoid rationals: a careless student writes $D=(x-\\sqrt2)(x-\\sqrt3)$ but then sets $R(x)\\equiv 0$ and $I(x)=-D(x)$, so the common value at $\\sqrt2$ is $R(\\sqrt2)=0\\in\\mathbb{Q}$ — harmless here, but the point of the constraint is that continuity is governed solely by where the two branches agree, never by the rationality of the shared value; one must check the zero set of $D$, not the values.",
    "solutions": [
      {
        "name": "Branch-agreement criterion, then a factored irrational offset, then the conjugate obstruction",
        "steps": [
          "Part (a): both rationals and irrationals are dense in $\\mathbb{R}$. Fix $c$ and let $x_n\\to c$. If $x_n\\in\\mathbb{Q}$ then $f(x_n)=R(x_n)\\to R(c)$ by continuity of $R$; if $x_n\\notin\\mathbb{Q}$ then $f(x_n)=I(x_n)\\to I(c)$. Thus along rational sequences the limit is $R(c)$ and along irrational sequences it is $I(c)$, and both kinds of sequence exist by density. The two-sided limit of $f$ at $c$ exists (and equals $f(c)$) if and only if these two sub-limits coincide and equal $f(c)$ — i.e. iff $R(c)=I(c)$, in which case the common value automatically equals $f(c)$ (whichever branch $c$ falls in). Hence $f$ is continuous at $c\\iff D(c)=0$, so the continuity set is $Z(D)=\\{x:D(x)=0\\}$. Since $D=R-I$ is continuous, $Z(D)$ is closed; conversely every zero set of a continuous function is realizable, proving the stated characterization.",
          "Part (b): we need $D$ continuous with $Z(D)=\\{\\sqrt2,\\sqrt3\\}$ and no rational in the agreement set (automatic, since neither $\\sqrt2$ nor $\\sqrt3$ is rational). Take the offset factored directly over the prescribed roots, $D(x)=(x-\\sqrt2)(x-\\sqrt3)$. Then $D(\\sqrt2)=D(\\sqrt3)=0$, and for any other $x$ both factors are nonzero so $D(x)\\neq0$; hence $Z(D)=\\{\\sqrt2,\\sqrt3\\}$ exactly. Realize it as a splice with $R(x)=x$ and $I(x)=x-D(x)=x-(x-\\sqrt2)(x-\\sqrt3)$, giving $f(x)=x-(x-\\sqrt2)(x-\\sqrt3)\\,\\mathbf{1}_{\\mathbb{R}\\setminus\\mathbb{Q}}(x)$. Both $R,I$ are polynomials, hence continuous, and $R-I=D$. By part (a), $f$ is continuous exactly on $Z(D)=\\{\\sqrt2,\\sqrt3\\}$ and discontinuous everywhere else.",
          "Part (c): suppose $R,I\\in\\mathbb{Q}[x]$, so $D=R-I\\in\\mathbb{Q}[x]$ and $D\\not\\equiv0$. The minimal polynomial of $\\sqrt2$ over $\\mathbb{Q}$ is $x^2-2$. If $\\sqrt2\\in Z(D)$ then $x^2-2\\mid D(x)$ in $\\mathbb{Q}[x]$ (the minimal polynomial divides every rational polynomial vanishing at $\\sqrt2$), and since $-\\sqrt2$ is the other root of $x^2-2$ we get $D(-\\sqrt2)=0$ as well. Concretely, write $D(\\sqrt2)=u+v\\sqrt2$ with $u,v\\in\\mathbb{Q}$ (collect the even/odd powers); $u+v\\sqrt2=0$ with $u,v$ rational and $\\sqrt2$ irrational forces $u=v=0$, whence $D(-\\sqrt2)=u-v\\sqrt2=0$. Thus the conjugate $-\\sqrt2$ is inescapably in $Z(D)$, and likewise $-\\sqrt3$. Therefore $Z(D)\\supseteq\\{\\sqrt2,-\\sqrt2,\\sqrt3,-\\sqrt3\\}\\supsetneq\\{\\sqrt2,\\sqrt3\\}$, so the continuity set can never equal $\\{\\sqrt2,\\sqrt3\\}$. The rational-coefficient hypothesis forces the zero set to be closed under Galois conjugation; isolating $\\sqrt2$ from $-\\sqrt2$ demands an offset whose coefficients lie outside $\\mathbb{Q}$, exactly as in the factored $D$ of part (b). $\\boxed{f(x)=x-(x-\\sqrt2)(x-\\sqrt3)\\,\\mathbf{1}_{\\mathbb{R}\\setminus\\mathbb{Q}}(x)}$"
        ]
      },
      {
        "name": "Oscillation viewpoint: the jump equals $|D(c)|$",
        "steps": [
          "For a splice $f$, compute the oscillation $\\omega_f(c)=\\limsup_{x\\to c}f(x)-\\liminf_{x\\to c}f(x)$. Near $c$ the values of $f$ are $R(x)$ on a dense set and $I(x)$ on a dense set, each clustering at $R(c),I(c)$ respectively as $x\\to c$ (continuity of $R,I$). Hence $\\limsup f=\\max(R(c),I(c))$ and $\\liminf f=\\min(R(c),I(c))$, so $\\omega_f(c)=|R(c)-I(c)|=|D(c)|$. A function is continuous at $c$ iff its oscillation there is $0$; therefore $f$ is continuous at $c\\iff|D(c)|=0\\iff D(c)=0$. This re-derives part (a) and quantifies the failure: away from a zero of $D$ the graph genuinely jumps by $|D(c)|$.",
          "Part (b) via the jump: with $D(x)=(x-\\sqrt2)(x-\\sqrt3)$, the jump $|D(c)|$ vanishes precisely at $c=\\sqrt2$ and $c=\\sqrt3$ and is strictly positive elsewhere (product of two nonzero reals). So $f(x)=x-(x-\\sqrt2)(x-\\sqrt3)\\,\\mathbf{1}_{\\mathbb{R}\\setminus\\mathbb{Q}}(x)$ has oscillation $0$ at exactly $\\{\\sqrt2,\\sqrt3\\}$, i.e. is continuous there and nowhere else. The shared value at those points, $f(\\sqrt2)=\\sqrt2$ and $f(\\sqrt3)=\\sqrt3$, plays no role in continuity — only the agreement $R=I$ does — which is why the constraint that the agreement set avoid the rationals is automatically met yet irrelevant to the continuity count.",
          "Part (c) via the jump: if $D\\in\\mathbb{Q}[x]\\setminus\\{0\\}$, then $|D(c)|=0$ defines $Z(D)$, a finite set closed under conjugation by Step 1 of Solution 1. The oscillation thus vanishes at $-\\sqrt2$ whenever it vanishes at $\\sqrt2$, so the zero-oscillation (continuity) set strictly contains $\\{\\sqrt2,\\sqrt3\\}$ — it can never equal it. Only an offset with irrational coefficients can make $|D|$ vanish at $\\sqrt2$ while staying positive at $-\\sqrt2$, and the factored $D=(x-\\sqrt2)(x-\\sqrt3)$ does exactly that. $\\boxed{f(x)=x-(x-\\sqrt2)(x-\\sqrt3)\\,\\mathbf{1}_{\\mathbb{R}\\setminus\\mathbb{Q}}(x)}$"
        ]
      },
      {
        "name": "Necessity by the impossibility of a rational separator, then exhibit the irrational one",
        "steps": [
          "Reduce to a pure algebra question. By part (a) the continuity set of a splice is $Z(R-I)$, so the whole problem is: build a continuous $D$ with $Z(D)=\\{\\sqrt2,\\sqrt3\\}$, and decide whether $D$ may have rational coefficients. We attack the second half first to expose what the construction must avoid.",
          "Impossibility over $\\mathbb{Q}$. Let $\\sigma$ be the field automorphism of $K=\\mathbb{Q}(\\sqrt2,\\sqrt3)$ over $\\mathbb{Q}$ sending $\\sqrt2\\mapsto-\\sqrt2$ and fixing $\\sqrt3$ (it exists since $[K:\\mathbb{Q}]=4$ with Galois group $(\\mathbb{Z}/2)^2$). For any $D\\in\\mathbb{Q}[x]$, applying $\\sigma$ to the coefficients leaves $D$ fixed, so $D(\\sigma\\alpha)=\\sigma\\bigl(D(\\alpha)\\bigr)$ for $\\alpha\\in K$. If $D(\\sqrt2)=0$ then $D(-\\sqrt2)=D(\\sigma\\sqrt2)=\\sigma(D(\\sqrt2))=\\sigma(0)=0$. Hence $\\sqrt2\\in Z(D)\\Rightarrow-\\sqrt2\\in Z(D)$, and symmetrically for $\\sqrt3$. A rational-coefficient $D$ therefore cannot have $Z(D)=\\{\\sqrt2,\\sqrt3\\}$; it always contains at least one unwanted conjugate. (Elementarily, $\\sqrt2$ being a root forces $x^2-2\\mid D$, dragging in $-\\sqrt2$.)",
          "Exhibit the irrational separator and finish. Drop the rationality requirement and take $D(x)=(x-\\sqrt2)(x-\\sqrt3)$, with coefficients $-(\\sqrt2+\\sqrt3)$ and $\\sqrt6$ lying outside $\\mathbb{Q}$ — precisely the feature that lets $D(\\sqrt2)=0$ while $D(-\\sqrt2)=(-\\sqrt2-\\sqrt2)(-\\sqrt2-\\sqrt3)=2\\sqrt2(\\sqrt2+\\sqrt3)\\neq0$. So $Z(D)=\\{\\sqrt2,\\sqrt3\\}$ exactly. Splicing with $R(x)=x,\\ I(x)=x-D(x)$ yields $f(x)=x-(x-\\sqrt2)(x-\\sqrt3)\\,\\mathbf{1}_{\\mathbb{R}\\setminus\\mathbb{Q}}(x)$, continuous on $\\{\\sqrt2,\\sqrt3\\}$ and nowhere else by part (a). $\\boxed{f(x)=x-(x-\\sqrt2)(x-\\sqrt3)\\,\\mathbf{1}_{\\mathbb{R}\\setminus\\mathbb{Q}}(x)}$"
        ]
      }
    ],
    "remark": "Insight: the splice $f=R\\cdot\\mathbf{1}_{\\mathbb{Q}}+I\\cdot\\mathbf{1}_{\\mathbb{Q}^c}$ converts a continuity question into a zero-set question — $f$ is continuous exactly on $Z(R-I)$ — which is the engine behind Dirichlet and Thomae and lets one prescribe the continuity set at will. The trap is to think the prescribed set $\\{\\sqrt2,\\sqrt3\\}$ is innocently small and reachable by the textbook polynomials $x^2-2,\\,x^2-3$; but those carry their Galois conjugates $-\\sqrt2,-\\sqrt3$ as stowaways. The deep lesson is that the field of coefficients controls which finite sets are realizable as zero sets: a polynomial in $\\mathbb{Q}[x]$ has a conjugation-closed (Galois-stable) zero set, so it cannot single out one element of a conjugate pair. To target an asymmetric irrational set you must literally factor over the targets, $(x-\\sqrt2)(x-\\sqrt3)$, paying with irrational coefficients that break the symmetry. Prescribing pathological continuity sets is thus not just analysis — it is secretly Galois theory: the symmetry you forgot to break is the symmetry that ruins the naive construction."
  },
  {
    "theme": "pathological",
    "themeLabel": "Pathological Functions",
    "title": "The Oscillation That Refuses to Touch Zero",
    "difficulty": 5,
    "task": "Determine the exact set of points at which the function is continuous",
    "tags": [
      "dirichlet-indicator",
      "squeeze",
      "topologist-sine",
      "density-of-rationals",
      "envelope",
      "two-sequence-test"
    ],
    "statement": "Define $f:\\mathbb{R}\\to\\mathbb{R}$ by\n\\[\nf(x)=\\begin{cases}x\\,\\bigl(2+\\sin\\tfrac1x\\bigr)\\,\\mathbf{1}_{\\mathbb{Q}}(x), & x\\neq 0,\\\\ 0, & x=0,\\end{cases}\n\\]\nwhere $\\mathbf{1}_{\\mathbb{Q}}$ is the indicator of the rationals (so $f(x)=x\\,(2+\\sin\\tfrac1x)$ when $x$ is a nonzero rational, and $f(x)=0$ when $x$ is irrational or $x=0$). Determine, with proof, the exact set of points at which $f$ is continuous. Your argument must explain both why continuity holds where it does and why it fails everywhere else, treating the wildly oscillating factor $\\sin\\tfrac1x$ honestly.",
    "answer": "\\[\\boxed{\\{0\\}}\\]",
    "trap": "There are two layered traps. The first is to imagine the violent oscillation of $\\sin\\tfrac1x$ near $0$ is what destroys continuity at the origin, or conversely that it somehow helps; neither is right — the oscillating factor is harmless at $0$ because it is bounded, and continuity at $0$ comes purely from the vanishing prefactor $x$ via the squeeze $|f(x)|\\le 3|x|$. The deep trap is the role of the constant $2$. A student who mentally strips it down to the simpler-looking model $g(x)=x\\sin\\tfrac1x\\cdot\\mathbf{1}_{\\mathbb{Q}}(x)$ and reports the same answer $\\{0\\}$ is wrong: for $g$ the continuous envelope $x\\sin\\tfrac1x$ vanishes not only at $0$ but at every point $c=\\tfrac1{n\\pi}$ $(n\\in\\mathbb{Z}\\setminus\\{0\\})$, where $\\sin\\tfrac1c=\\sin(n\\pi)=0$. At each such $c$ both the rational and the irrational approaches send $g$ to $0=g(c)$, so $g$ is secretly continuous on the whole countable set $\\{0\\}\\cup\\{1/(n\\pi)\\}$, not on $\\{0\\}$ alone. The shift $2+\\sin\\tfrac1x\\in[1,3]$ is exactly the device that prevents the envelope from ever touching zero off the origin, sealing the leak. Missing this means giving a correct-looking final set $\\{0\\}$ for the wrong reason — and getting it flat wrong for the natural-looking variant. A third slip is to declare $f$ discontinuous at $0$ because $f$ disagrees with the smooth curve $x(2+\\sin\\tfrac1x)$ on the irrationals; but continuity only requires $f(x)\\to f(0)=0$, and every value of $f$ near $0$ — rational or irrational — is trapped between $-3|x|$ and $3|x|$.",
    "solutions": [
      {
        "name": "Squeeze at the origin, two-sequence break elsewhere",
        "steps": [
          "Continuity at $0$. For every $x\\neq 0$, regardless of rationality, $|f(x)|=|x|\\,\\bigl(2+\\sin\\tfrac1x\\bigr)\\,\\mathbf{1}_{\\mathbb{Q}}(x)\\le |x|\\cdot 3\\cdot 1=3|x|$, because $2+\\sin\\tfrac1x\\in[1,3]$ and the indicator is at most $1$. Hence $0\\le|f(x)-f(0)|\\le 3|x|\\to 0$ as $x\\to 0$, so by the squeeze theorem $f$ is continuous at $0$. The oscillation never matters here: it is held inside the band $\\pm 3|x|$ that pinches shut.",
          "Set up the off-origin envelope. For $x\\neq 0$ write $h(x)=x\\bigl(2+\\sin\\tfrac1x\\bigr)$, a function continuous on $\\mathbb{R}\\setminus\\{0\\}$ with $f(x)=h(x)$ at rationals and $f(x)=0$ at irrationals. The crucial fact is that $h(x)\\neq 0$ for every $x\\neq 0$: indeed $2+\\sin\\tfrac1x\\ge 2-1=1>0$, so $h(x)=0$ would force $x=0$. Thus $h(c)\\neq 0$ at every candidate point $c\\neq 0$.",
          "Discontinuity at rational $c\\neq 0$. Here $f(c)=h(c)\\neq 0$. By density of the irrationals choose irrationals $x_n\\to c$; then $f(x_n)=0\\to 0\\neq h(c)=f(c)$. So the limit (if any) cannot equal $f(c)$, and $f$ is discontinuous at $c$.",
          "Discontinuity at irrational $c\\neq 0$. Here $f(c)=0$. By density of the rationals choose rationals $x_n\\to c$; since $h$ is continuous and $h(c)\\neq 0$, $f(x_n)=h(x_n)\\to h(c)\\neq 0=f(c)$. Again continuity fails. Combining, $f$ is continuous at $0$ and nowhere else, so the continuity set is $\\boxed{\\{0\\}}$."
        ]
      },
      {
        "name": "Direct $\\varepsilon$–$\\delta$ with an explicit jump witness",
        "steps": [
          "At $0$, produce $\\delta$ explicitly. Given $\\varepsilon>0$ set $\\delta=\\varepsilon/3$. If $|x|<\\delta$ then $|f(x)-f(0)|\\le 3|x|<3\\delta=\\varepsilon$ using $0\\le 2+\\sin\\tfrac1x\\le 3$ and $0\\le\\mathbf{1}_{\\mathbb{Q}}\\le 1$. This is the full $\\varepsilon$–$\\delta$ certificate of continuity at $0$.",
          "At any $c\\neq 0$, produce a fixed $\\varepsilon_0$ no $\\delta$ can beat. Let $\\varepsilon_0=\\tfrac12|h(c)|$ where $h(c)=c(2+\\sin\\tfrac1c)$; since $2+\\sin\\tfrac1c\\ge 1$ we have $|h(c)|\\ge|c|>0$, so $\\varepsilon_0>0$ is genuinely positive.",
          "Show the certificate fails. Fix any $\\delta>0$. If $c$ is rational, pick an irrational $x$ with $|x-c|<\\delta$ (possible by density); then $|f(x)-f(c)|=|0-h(c)|=2\\varepsilon_0>\\varepsilon_0$. If $c$ is irrational, pick a rational $x$ with $|x-c|<\\delta$ close enough that, by continuity of $h$, $|h(x)|>\\tfrac12|h(c)|$; then $|f(x)-f(c)|=|h(x)-0|>\\varepsilon_0$. Either way some point within $\\delta$ violates the $\\varepsilon_0$ bound.",
          "Conclude. No $\\delta$ works at any $c\\neq 0$, so $f$ is discontinuous there; it is continuous at $0$ by the first step. The continuity set is exactly $\\boxed{\\{0\\}}$."
        ]
      },
      {
        "name": "Closure-of-graph / oscillation criterion",
        "steps": [
          "Reduce continuity to a value-matching condition. At any $c\\neq 0$, density of both $\\mathbb{Q}$ and its complement means the cluster set of $f$ as $x\\to c$ contains both the limit of $f$ along irrationals, namely $0$, and the limit along rationals, namely $\\lim_{x\\to c}h(x)=h(c)$ (as $h$ is continuous at $c\\neq 0$). Thus the limit $\\lim_{x\\to c}f(x)$ exists and equals a single value only when these two cluster values coincide, i.e. when $h(c)=0$; and even then it equals $0$, which matches $f(c)$ (the value at $c$ is $0$ if $c$ irrational, and $h(c)=0$ if $c$ rational).",
          "Compute the oscillation. Equivalently, the oscillation of $f$ at $c\\neq 0$ is $\\omega_f(c)=|h(c)-0|=|h(c)|$, since arbitrarily near $c$ the function takes values as close as we like to both $0$ and $h(c)$. Continuity at $c$ is equivalent to $\\omega_f(c)=0$, i.e. to $h(c)=0$.",
          "Locate the zeros of the envelope. Because $2+\\sin\\tfrac1c\\ge 1>0$ for all $c\\neq 0$, the only zero of $h(c)=c(2+\\sin\\tfrac1c)$ on $\\mathbb{R}\\setminus\\{0\\}$ would require $c=0$ — impossible. Hence $\\omega_f(c)=|h(c)|>0$ at every $c\\neq 0$, so $f$ is discontinuous at every nonzero point. (Contrast the impostor $x\\sin\\tfrac1x$, whose envelope vanishes at every $1/(n\\pi)$ and is therefore continuous there too.)",
          "Add the origin. At $0$ the squeeze $|f|\\le 3|x|$ gives $\\omega_f(0)=0$, so $f$ is continuous at $0$. Therefore $\\{\\,c:\\omega_f(c)=0\\,\\}=\\boxed{\\{0\\}}$, the complete continuity set."
        ]
      }
    ],
    "remark": "Insight: a Dirichlet-gated function $h(x)\\mathbf{1}_{\\mathbb{Q}}(x)$ (with $h$ continuous, $h(0)=0$) is continuous at exactly the zero set of its envelope $h$ together with the squeeze point, i.e. precisely where $h(c)=0$ — because density forces the oscillation there to equal $|h(c)|$. So the entire problem is decided by one question: where does the continuous envelope touch zero? The vanishing prefactor $x$ buys continuity at the origin, but the seductive choice $h=x\\sin\\tfrac1x$ also touches zero at the discrete sequence $1/(n\\pi)$, smuggling in a whole countable set of hidden continuity points. The single innocuous-looking constant in $2+\\sin\\tfrac1x$ lifts the oscillating factor strictly off zero, so the envelope vanishes only at the origin — and the answer collapses cleanly to $\\{0\\}$. The pathology of $\\sin\\tfrac1x$ is a red herring for continuity: boundedness, not oscillation, is what the squeeze cares about."
  },
  {
    "theme": "pathological",
    "themeLabel": "Pathological Functions",
    "title": "The Half-Lit Popcorn and Its Mirror",
    "difficulty": 5,
    "task": "Determine each continuity set exactly, then pin the points that distinguish them",
    "tags": [
      "thomae",
      "one-sided-weight",
      "sign-weight",
      "weight-zero-set",
      "limit-zero-rescue",
      "continuity-set"
    ],
    "statement": "Let $T:\\mathbb{R}\\to\\mathbb{R}$ be Thomae's (popcorn) function, defined on the whole line by\n\\[\nT(x)=\\begin{cases}\\dfrac{1}{q}, & x=\\dfrac{p}{q}\\in\\mathbb{Q}\\ \\text{in lowest terms with } q\\ge 1,\\\\  0, & x\\notin\\mathbb{Q},\\end{cases}\n\\]\nso that in particular $T(n)=1$ for every integer $n$ (denominator $1$) and $T$ is even. It is classical that $T$ is continuous at every irrational and discontinuous at every rational. Now switch this popcorn on with two different weights and define\n\\[\nF(x)=T(x)\\cdot\\mathbf{1}_{\\{x>0\\}}(x),\\qquad\\qquad G(x)=T(x)\\cdot\\operatorname{sgn}(x),\n\\]\nwhere $\\mathbf{1}_{\\{x>0\\}}$ is $1$ for $x>0$ and $0$ for $x\\le 0$, and $\\operatorname{sgn}(x)$ is $+1,\\,0,\\,-1$ for $x>0,\\,x=0,\\,x<0$ respectively. Thus $F$ is the popcorn turned on only to the right of the origin, while $G$ is the popcorn reflected to a trough on the left.\n\n(a) Determine, with proof, the exact set $C_F$ of points at which $F$ is continuous.\n\n(b) Determine, with proof, the exact set $C_G$ of points at which $G$ is continuous.\n\n(c) The two weights both have a jump at the origin, yet decide rigorously whether $F$ and $G$ are continuous at $x=0$. Finally identify the set $C_F\\,\\triangle\\,C_G$ of points where exactly one of $F,G$ is continuous (here $\\triangle$ is symmetric difference), and state its cardinality.",
    "answer": "\\[\\boxed{\\,C_F=(-\\infty,0]\\cup\\big((0,\\infty)\\setminus\\mathbb{Q}\\big),\\quad C_G=\\{0\\}\\cup(\\mathbb{R}\\setminus\\mathbb{Q}),\\quad C_F\\triangle C_G=\\mathbb{Q}\\cap(-\\infty,0)\\ (\\text{countably infinite})\\,}\\]",
    "trap": "Two reflexes wreck this problem, and both are conceptual, not arithmetic. Trap 1 — \\\"a jumping weight forces a jump.\\\" Because $\\mathbf{1}_{\\{x>0\\}}$ and $\\operatorname{sgn}$ each leap at the origin, the seductive verdict is that $F$ and $G$ are discontinuous at $0$. That is wrong: continuity of a product depends on the limit, and $T$ has limit $0$ at every point, including $0$. Since $\\lim_{x\\to0}T(x)=0$ and the weights are bounded by $1$, the product is squeezed: $|F(x)|\\le T(x)\\to0=F(0)$ and likewise for $G$, so both are continuous at $0$. The popcorn's universal limit-$0$ property silently repairs the jump — the weight's discontinuity is annihilated by being multiplied against something whose limit is $0$. A subtle sub-trap hides inside this: at $x=0$ one has $T(0)=1$ (the integer spike), so a careless solver computes $F(0)=1$; but the weight is $\\mathbf{1}_{\\{0>0\\}}=0$, giving $F(0)=0$, exactly the value continuity needs. The spike is switched off precisely where it would have done damage. \\textbf{Trap 2 — \\\"$\\mathbf{1}_{\\{x>0\\}}$ and $\\operatorname{sgn}$ behave the same.\\\"} Both look like \\\"turn the popcorn off / flip it,\\\" so one is tempted to give $F$ and $G$ the same continuity set. They differ on the entire negative ray. The indicator kills $F$ on $(-\\infty,0)$, making $F\\equiv0$ there and hence continuous at every negative point, rationals included. But $\\operatorname{sgn}$ merely reflects: on $(-\\infty,0)$ one has $G=-T$, which is still nonzero at every rational and still jumps against the surrounding irrationals, so every negative rational is a discontinuity of $G$. Hence $C_F$ contains all of $(-\\infty,0)$ while $C_G$ omits the negative rationals — the difference is exactly $\\mathbb{Q}\\cap(-\\infty,0)$, not the empty set, and certainly not a finite set or the whole left ray. The lazy \\\"$C_F=C_G$\\\" or \\\"both equal the irrationals\\\" answers miss that a multiplicative zero weight (the indicator) is fundamentally different from a $\\pm1$ sign weight.",
    "solutions": [
      {
        "name": "Region-by-region squeeze on each ray and at the seam",
        "steps": [
          "Record the one fact that drives everything: for every real $a$, $\\lim_{x\\to a}T(x)=0$. Indeed, fix $\\varepsilon>0$; the points with $T(x)\\ge\\varepsilon$ are exactly the rationals of denominator $q\\le 1/\\varepsilon$, and in any bounded window around $a$ there are only finitely many such rationals, so a small deleted neighbourhood of $a$ contains none of them; thus $0\\le T(x)<\\varepsilon$ there. Consequently $T$ is continuous at $a$ iff $T(a)=0$, i.e. iff $a$ is irrational. We now multiply by the weights.",
          "Part (a), $F=T\\cdot\\mathbf{1}_{\\{x>0\\}}$. On the open left ray $x<0$, $F\\equiv0$, a constant, hence continuous at every such point. On the open right ray $x>0$, $F=T$ on a neighbourhood, so $F$ inherits Thomae's behaviour there: continuous at the positive irrationals, discontinuous at the positive rationals (at a positive rational $r$, $F(r)=T(r)>0$ but irrationals nearby give $F=0$, a jump). It remains to test the seam $x=0$.",
          "Part (a), the seam. $F(0)=T(0)\\cdot\\mathbf{1}_{\\{0>0\\}}=1\\cdot0=0$. For any $x$, $0\\le|F(x)|=T(x)\\,\\mathbf{1}_{\\{x>0\\}}\\le T(x)$, and $T(x)\\to0$ as $x\\to0$ by step 1, so by squeezing $\\lim_{x\\to0}F(x)=0=F(0)$: $F$ is continuous at $0$. Assembling the three regions, $C_F=(-\\infty,0)\\cup\\{0\\}\\cup\\big((0,\\infty)\\setminus\\mathbb{Q}\\big)=(-\\infty,0]\\cup\\big((0,\\infty)\\setminus\\mathbb{Q}\\big)$. $\\boxed{C_F=(-\\infty,0]\\cup\\big((0,\\infty)\\setminus\\mathbb{Q}\\big)}$",
          "Part (b), $G=T\\cdot\\operatorname{sgn}$. On $x>0$, $G=T$: continuous at positive irrationals, discontinuous at positive rationals — same as $F$ on the right. On $x<0$, $G=-T$: scaling by $-1$ changes no continuity, so $G$ is continuous at negative irrationals and discontinuous at negative rationals (at a negative rational $r$, $G(r)=-T(r)\\ne0$ while nearby irrationals give $0$, a jump). At the seam, $G(0)=T(0)\\cdot\\operatorname{sgn}(0)=1\\cdot0=0$, and $|G(x)|\\le T(x)\\to0$, so $\\lim_{x\\to0}G(x)=0=G(0)$: continuous at $0$. Therefore $G$ is continuous exactly at all irrationals together with the single rational point $0$: $\\boxed{C_G=\\{0\\}\\cup(\\mathbb{R}\\setminus\\mathbb{Q})}$.",
          "Part (c). Both are continuous at $0$ despite the weight jumps, because the bounded jump is multiplied against $T$, whose limit at $0$ is $0$; the integer spike $T(0)=1$ is harmless because the weight is $0$ there, forcing the correct value $F(0)=G(0)=0$. Compare the sets: on $(0,\\infty)$ both are continuous precisely at irrationals (agree); at $0$ both continuous (agree). On $(-\\infty,0)$, $F$ is continuous everywhere while $G$ is continuous only at irrationals; they differ exactly at the negative rationals. Hence $C_F\\triangle C_G=\\mathbb{Q}\\cap(-\\infty,0)$, a subset of $\\mathbb{Q}$ that is in bijection with $\\mathbb{N}$, so it is $\\boxed{\\text{countably infinite}}$."
        ]
      },
      {
        "name": "Sequential characterization through three test sequences",
        "steps": [
          "Continuity of a function $h$ at $a$ is equivalent to: $h(x_n)\\to h(a)$ for every sequence $x_n\\to a$. We probe each candidate point with three kinds of approaching sequences — irrational, rational, and (where the seam matters) one-sided — and demand all give the same limit. The engine remains $\\lim_{x\\to a}T(x)=0$ (proved as in Solution 1, step 1), so along any sequence of irrationals $T\\to0$, and along any sequence of rationals with denominators $\\to\\infty$ also $T\\to0$; only rational sequences of bounded denominator (forced to be eventually constant near $a$) can keep $T$ bounded away from $0$, and that happens iff $a$ itself is rational.",
          "Test $F$ at an arbitrary $a$. If $a<0$: every nearby $x$ eventually has $x<0$, so $F(x_n)=0\\to0=F(a)$ — continuous. If $a>0$ rational: the constant sequence-style approach by rationals equal to $a$'s reduced form is unavailable, but take irrationals $x_n\\to a$ giving $F(x_n)=0$ while $F(a)=T(a)>0$ — discontinuous. If $a>0$ irrational: any $x_n\\to a$ gives $F(x_n)=T(x_n)\\mathbf{1}_{\\{x_n>0\\}}\\to0=F(a)$ — continuous. If $a=0$: $|F(x_n)|\\le T(x_n)\\to0=F(0)$ — continuous. So $C_F=(-\\infty,0]\\cup\\big((0,\\infty)\\setminus\\mathbb{Q}\\big)$.",
          "Test $G$ at an arbitrary $a$. For $a\\ne0$ the weight $\\operatorname{sgn}$ is locally the constant $\\pm1$, so $G=\\pm T$ near $a$ and continuity of $G$ at $a$ is equivalent to continuity of $T$ at $a$, i.e. holds iff $a$ is irrational. For $a=0$: $|G(x_n)|\\le T(x_n)\\to0=G(0)$, continuous. Hence $G$ is continuous exactly at the irrationals and at $0$: $C_G=\\{0\\}\\cup(\\mathbb{R}\\setminus\\mathbb{Q})$. $\\boxed{C_F=(-\\infty,0]\\cup\\big((0,\\infty)\\setminus\\mathbb{Q}\\big),\\ \\ C_G=\\{0\\}\\cup(\\mathbb{R}\\setminus\\mathbb{Q})}$",
          "Part (c) by comparison of the membership tests. A point $a$ lies in exactly one of $C_F,C_G$ iff the two tests above disagree. They disagree only when $a<0$ and rational: there $F(x_n)\\to0=F(a)$ (continuous) but the rational-with-bounded-denominator obstruction makes $G$ discontinuous. Everywhere else (positive reals, irrationals, and $0$) the verdicts coincide. Thus $C_F\\triangle C_G=\\mathbb{Q}\\cap(-\\infty,0)$. Being an infinite subset of the countable set $\\mathbb{Q}$, it is $\\boxed{\\text{countably infinite}}$, and note $C_F\\setminus C_G$ is all of it while $C_G\\setminus C_F=\\varnothing$."
        ]
      },
      {
        "name": "Algebra of continuity sets via products and a single counterexample point",
        "steps": [
          "Use structural rules. (i) A product $u\\cdot v$ is continuous at any point where both $u,v$ are continuous. (ii) If $v$ is continuous at $a$ with $v(a)\\ne0$ and $u\\cdot v$ is continuous at $a$, then $u=(u v)/v$ is continuous at $a$ — so a nonvanishing continuous factor cannot create or hide a discontinuity. (iii) If a factor is the constant $0$ on a neighbourhood, the product is $0$ there, hence continuous. We apply these to $T$ (continuous exactly on the irrationals, limit $0$ everywhere) and the two weights.",
          "Away from $0$ both weights are locally a nonzero constant ($\\mathbf{1}_{\\{x>0\\}}=1$ on $x>0$; $\\operatorname{sgn}=\\pm1$ off $0$), except that $\\mathbf{1}_{\\{x>0\\}}\\equiv0$ on the whole open ray $x<0$. By rule (iii), $F\\equiv0$ on $(-\\infty,0)$ is continuous there. By rule (ii) applied with the nonzero constant weight, on $x>0$ both $F,G$ share $T$'s continuity set (irrationals), and on $x<0$ the function $G=-T$ shares $T$'s set (irrationals). This already gives the two sets off the origin; only the seam needs the limit argument.",
          "At $x=0$ the weights are discontinuous, so rule (i) does not apply and we argue directly. Both values are $0$ (weight $=0$ kills the spike $T(0)=1$), and $|F|,|G|\\le T\\to0$, so both are continuous at $0$ — a genuine repair that the algebra of continuous factors cannot see, because here the factor that vanishes is the discontinuous one. Collecting: $C_F=(-\\infty,0]\\cup\\big((0,\\infty)\\setminus\\mathbb{Q}\\big)$ and $C_G=\\{0\\}\\cup(\\mathbb{R}\\setminus\\mathbb{Q})$.",
          "Part (c). The only ray on which the structural verdicts differ is $x<0$: indicator gives $F\\equiv0$ (continuous at every negative point), sign gives $G=-T$ (continuous only at negative irrationals). To certify the difference is genuine, exhibit one witness: at $x=-\\tfrac12$, $F(-\\tfrac12)=0$ with $F\\equiv0$ nearby on the left (continuous), whereas $G(-\\tfrac12)=-T(-\\tfrac12)=-\\tfrac12$ while irrationals near $-\\tfrac12$ give $G=0$, a jump of $\\tfrac12$ (discontinuous). Generalizing across all negative rationals, $C_F\\triangle C_G=\\mathbb{Q}\\cap(-\\infty,0)$, which is $\\boxed{\\text{countably infinite}}$ (an infinite subset of $\\mathbb{Q}$, with $C_F\\triangle C_G=C_F\\setminus C_G$ since $C_G\\subseteq C_F$ off the right ray's rationals balance out)."
        ]
      }
    ],
    "remark": "Insight: the load-bearing property of Thomae's function is not merely \\\"continuous at irrationals\\\" but the stronger global statement $\\lim_{x\\to a}T(x)=0$ at every point $a$ — rational or not. The moment you multiply $T$ by any bounded weight, that universal limit-$0$ lets a squeeze repair any jump the weight contributes at a single point: this is exactly why both $F$ and $G$ stay continuous at the origin despite the indicator's and the sign's leap there, and why the integer spike $T(0)=1$ does no harm (the weight is $0$ precisely at $0$, pinning the value to $0$). The two weights then part ways everywhere the weight is locally constant: a zero constant (the indicator on the left ray) annihilates the popcorn outright and makes that entire ray continuous, while a $\\pm1$ sign constant only reflects it and preserves the rational discontinuities. So the contrast is the lesson: continuity of a product is governed by limits, multiplying by something with limit $0$ heals isolated jumps, multiplying by an identically-zero factor heals whole regions, and multiplying by a unit-modulus sign heals nothing. The clean separator $C_F\\triangle C_G=\\mathbb{Q}\\cap(-\\infty,0)$ is the fingerprint of \\\"zero weight versus sign weight\\\" on the half-line where the two designs disagree."
  },
  {
    "theme": "pathological",
    "themeLabel": "Pathological Functions",
    "title": "Where Two Waves Cross the Rational Divide",
    "difficulty": 5,
    "task": "Determine, with proof, the exact set of points at which the function is continuous",
    "tags": [
      "rational-irrational-clash",
      "two-oscillations",
      "density",
      "periodic-continuity-set",
      "arithmetic-progression",
      "two-sequence-test"
    ],
    "statement": "Define $f:\\mathbb{R}\\to\\mathbb{R}$ by\n\\[\nf(x)=\\begin{cases}\\sin(\\pi x), & x\\in\\mathbb{Q},\\\\ \\cos(\\pi x), & x\\notin\\mathbb{Q}.\\end{cases}\n\\]\nSo on the rationals $f$ rides the sine wave, and on the irrationals it rides the cosine wave; everywhere the two graphs interleave on a set that is dense from both sides. Both pieces are individually smooth, yet $f$ as a whole is wildly broken. Determine, with proof, the exact set of points at which $f$ is continuous. Your argument must explain both why continuity holds where it does and why it fails everywhere else, and must say clearly what kind of set the continuity set is.",
    "answer": "\\[\\boxed{\\left\\{\\,n+\\tfrac14 : n\\in\\mathbb{Z}\\,\\right\\}}\\]",
    "trap": "The fatal reflex is to import the answer from the look-alike problem $\\big(\\sin(\\pi x)$ on $\\mathbb{Q}$, $-\\sin(\\pi x)$ on the irrationals$\\big)$, whose continuity condition is $\\sin(\\pi c)=-\\sin(\\pi c)$, i.e. $\\sin(\\pi c)=0$, i.e. $c\\in\\mathbb{Z}$ — the zero set of a single sine. A solver running on autopilot looks for where one wave vanishes and reports the integers. That is exactly wrong here: continuity is governed not by a zero of one oscillation but by the equality of two different oscillations, $\\sin(\\pi c)=\\cos(\\pi c)$. At an integer $c$, the rational branch gives $\\sin(\\pi c)=0$ but the irrational branch gives $\\cos(\\pi c)=\\pm1\\neq0$, so $f$ jumps by $1$ there — the integers are among the worst discontinuities, not continuity points. A second, subtler trap is to solve $\\tan(\\pi c)=1$ mechanically and then worry that some solution might be irrational, breaking the value-matching (since $f(c)$ is defined by which side of the rational divide $c$ falls on). One must verify that every solution is rational: the equation $\\sin(\\pi c)=\\cos(\\pi c)$ forces $c=n+\\tfrac14$, and $n+\\tfrac14\\in\\mathbb{Q}$ for all integers $n$, so each candidate point is rational and $f$ there equals $\\sin(\\pi c)=\\cos(\\pi c)$ — both branch-limits and the actual value agree. A third slip is to call the answer a sparse or finite collection: it is an infinite arithmetic progression with common difference $1$, a full periodic lattice $\\tfrac14+\\mathbb{Z}$ shifted off the integers by a quarter, not the empty set and not the integers.",
    "solutions": [
      {
        "name": "Two dense sequences and the value-matching condition",
        "steps": [
          "Fix any $c\\in\\mathbb{R}$ and compute the two cluster values. Since $\\mathbb{Q}$ is dense, choose rationals $r_n\\to c$; then $f(r_n)=\\sin(\\pi r_n)\\to\\sin(\\pi c)$ because $\\sin(\\pi\\,\\cdot)$ is continuous. Since the irrationals are dense, choose irrationals $t_n\\to c$; then $f(t_n)=\\cos(\\pi t_n)\\to\\cos(\\pi c)$. Thus near $c$ the function $f$ takes values arbitrarily close to both $\\sin(\\pi c)$ and $\\cos(\\pi c)$, so the two-sided limit $\\lim_{x\\to c}f(x)$ exists if and only if these coincide, namely $\\sin(\\pi c)=\\cos(\\pi c)$.",
          "Identify continuity with that single equation. If $\\sin(\\pi c)\\neq\\cos(\\pi c)$, the two dense sequences force two distinct sublimits, so $\\lim_{x\\to c}f(x)$ does not exist and $f$ is discontinuous at $c$. Conversely if $\\sin(\\pi c)=\\cos(\\pi c)=:L$, then $every$ sequence $x_n\\to c$ has $f(x_n)$ squeezed toward $L$ (split it into its rational and irrational terms, each subsequence tends to $L$), so $\\lim_{x\\to c}f(x)=L$; and $f(c)$ equals $\\sin(\\pi c)$ or $\\cos(\\pi c)$ according to the type of $c$, but both equal $L$, so $\\lim_{x\\to c}f(x)=L=f(c)$. Hence $f$ is continuous at $c$ exactly when $\\sin(\\pi c)=\\cos(\\pi c)$.",
          "Solve the equation. $\\sin(\\pi c)=\\cos(\\pi c)$ with no need to divide: it is equivalent to $\\sin(\\pi c)-\\cos(\\pi c)=0$. Since $\\cos(\\pi c)=0$ would force $\\sin(\\pi c)=0$ too, contradicting $\\sin^2+\\cos^2=1$, we have $\\cos(\\pi c)\\neq0$ at any solution, so we may divide to get $\\tan(\\pi c)=1$, giving $\\pi c=\\tfrac{\\pi}{4}+n\\pi$, i.e. $c=\\tfrac14+n$ for $n\\in\\mathbb{Z}$.",
          "Check the value-matching is automatic. Each candidate $c=n+\\tfrac14$ is rational, so $f(c)=\\sin(\\pi c)$, and at these points $\\sin(\\pi c)=\\cos(\\pi c)=\\pm\\tfrac{\\sqrt2}{2}\\neq0$, consistent with Step 2. No solution is irrational, so no value-branch mismatch can spoil any candidate. Therefore the continuity set is exactly $\\boxed{\\{\\,n+\\tfrac14:n\\in\\mathbb{Z}\\,\\}}$, an arithmetic progression of period $1$."
        ]
      },
      {
        "name": "Oscillation via two continuous envelopes",
        "steps": [
          "Introduce the two smooth envelopes $g(x)=\\sin(\\pi x)$ and $h(x)=\\cos(\\pi x)$, both continuous on $\\mathbb{R}$, with $f=g$ on $\\mathbb{Q}$ and $f=h$ on $\\mathbb{R}\\setminus\\mathbb{Q}$. Define the oscillation of $f$ at $c$ as $\\omega_f(c)=\\limsup_{x\\to c}f(x)-\\liminf_{x\\to c}f(x)$. By density of both $\\mathbb{Q}$ and its complement, every neighbourhood of $c$ contains points where $f$ is as close as desired to $g(c)$ and points where $f$ is as close as desired to $h(c)$, so $\\omega_f(c)=|g(c)-h(c)|=|\\sin(\\pi c)-\\cos(\\pi c)|$.",
          "Use the standard fact that $f$ is continuous at $c$ iff $\\omega_f(c)=0$. Here $\\omega_f(c)=0\\iff\\sin(\\pi c)=\\cos(\\pi c)$. (When this holds, $f(c)$ also equals that common value, since $c$ is rational at every such point — verified below — so continuity is genuine and not merely a limit that misses the value.)",
          "Find the zero set of the gap. Square-free reasoning: $\\sin\\theta=\\cos\\theta$ with $\\theta=\\pi c$ means $\\tan\\theta=1$ (legitimate since $\\cos\\theta=0$ would force $\\sin\\theta=0$, impossible), so $\\theta=\\tfrac{\\pi}{4}+n\\pi$ and $c=n+\\tfrac14$. Each such $c$ is rational, so $f(c)=g(c)=h(c)$ and the oscillation truly collapses.",
          "Contrast and conclude. Off this lattice the gap $|\\sin(\\pi c)-\\cos(\\pi c)|>0$, so $\\omega_f(c)>0$ and $f$ is discontinuous; in particular at the integers the gap is $|0\\mp1|=1$, the maximal-type jump that the naive zero-of-sine answer mistakes for continuity. Hence the continuity set is exactly $\\boxed{\\{\\,n+\\tfrac14:n\\in\\mathbb{Z}\\,\\}}$."
        ]
      },
      {
        "name": "Single-wave reduction by amplitude-phase form",
        "steps": [
          "Collapse the two waves into one. For every real $x$, $\\sin(\\pi x)-\\cos(\\pi x)=\\sqrt2\\,\\sin\\!\\big(\\pi x-\\tfrac{\\pi}{4}\\big)$ by the harmonic-addition identity $a\\sin\\theta+b\\cos\\theta=\\sqrt{a^2+b^2}\\,\\sin(\\theta+\\varphi)$ with $a=1,\\,b=-1$. So the entire continuity question reduces to: where does the single continuous wave $D(x)=\\sqrt2\\,\\sin\\!\\big(\\pi x-\\tfrac{\\pi}{4}\\big)$ vanish? — because $f$ is continuous at $c$ iff the two branch-limits agree, i.e. iff $D(c)=0$.",
          "Justify the reduction. By density, $\\lim_{x\\to c}f(x)$ exists iff $\\sin(\\pi c)=\\cos(\\pi c)$, equivalently $D(c)=0$; and then the common limit equals $f(c)$ because every $c$ with $D(c)=0$ turns out rational, so $f(c)$ sits on whichever branch and both branches share the value. (If a zero of $D$ were irrational, one would still have to confirm $f(c)$ matched the limit; we check it cannot happen.)",
          "Solve $D(c)=0$. $\\sin\\!\\big(\\pi c-\\tfrac{\\pi}{4}\\big)=0\\iff \\pi c-\\tfrac{\\pi}{4}=n\\pi\\iff c=n+\\tfrac14$, $n\\in\\mathbb{Z}$. The amplitude $\\sqrt2\\neq0$ never interferes, and the phase shift $\\tfrac14$ is exactly what slides the continuity lattice off the integers — the fingerprint of using two distinct oscillations rather than one wave against its own negative.",
          "Confirm rationality and finish. Each $c=n+\\tfrac14\\in\\mathbb{Q}$, so $f(c)=\\sin(\\pi c)$, which equals $\\cos(\\pi c)$ here; the value matches the limit, so continuity is genuine, and no irrational solution exists to break the matching. The continuity set is precisely the period-$1$ progression $\\boxed{\\{\\,n+\\tfrac14:n\\in\\mathbb{Z}\\,\\}}$."
        ]
      }
    ],
    "remark": "Insight: when a function is built by gluing one continuous function $g$ on the rationals to another continuous function $h$ on the irrationals, density of both sets forces the oscillation at $c$ to equal $|g(c)-h(c)|$, so the continuity set is exactly the coincidence locus $\\{g=h\\}$ — provided that locus lands inside the set whose branch carries the matching value (automatic when those points are rational and $f$ uses $g$ there). The popular template $g=\\sin\\pi x,\\,h=-\\sin\\pi x$ makes $\\{g=h\\}$ the zero set $\\{\\sin\\pi x=0\\}=\\mathbb{Z}$, and rote memory wants to repeat that. But replacing $h$ by a genuinely different wave $\\cos\\pi x$ changes the question from $a\\,zero$ of one oscillation to an $intersection$ of two, and $\\sin\\pi x=\\cos\\pi x$ is solved by $\\sqrt2\\sin(\\pi x-\\tfrac{\\pi}{4})=0$, i.e. by the shifted lattice $\\tfrac14+\\mathbb{Z}$. The continuity set is still infinite and periodic, but the quarter-period phase shift is the visible signature that two oscillations were equated, not one cancelled — and it is the difference between the integers and the quarter-integers that separates this problem from its look-alike."
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
    "title": "Where Sine Folds the Lonely Point into a Lattice",
    "difficulty": 5,
    "task": "Determine each continuity set exactly, and explain why composition multiplies the points",
    "tags": [
      "sequential-criterion",
      "two-sequence-test",
      "dirichlet-type",
      "transcendental-equation",
      "composition",
      "bounded-substitution"
    ],
    "statement": "All arguments are in radians. Define $f:\\mathbb{R}\\to\\mathbb{R}$ by\n\\[\nf(x)=\\begin{cases}\\,x, & x\\in\\mathbb{Q},\\\\ \\sin x, & x\\notin\\mathbb{Q}.\\end{cases}\n\\]\nBoth pieces are individually continuous, yet $f$ glues them along the rationals and irrationals, which are each dense in every interval.\n\n(a) Determine, with proof, the exact set $C_f$ of points at which $f$ is continuous. Justify your answer with the sequential criterion (continuity at $a$ means $f(x_n)\\to f(a)$ for every sequence $x_n\\to a$), and show explicitly how a rational approach and an irrational approach interact.\n\n(b) Now form the composition $h=\\sin\\circ f$, i.e. $h(x)=\\sin\\!\\big(f(x)\\big)$. Determine, with proof, the exact set $C_h$ of points at which $h$ is continuous.\n\n(c) The map $f$ is continuous at only one point, yet $h=\\sin\\circ f$ is continuous at infinitely many. State $C_f$ and $C_h$, and explain in one sentence the precise mechanism by which composing with $\\sin$ converts the single continuity point into an entire lattice — even at points such as $x=\\pi$ where $f$ itself is wildly discontinuous.",
    "answer": "\\[\\boxed{\\,C_f=\\{0\\},\\qquad C_h=\\{\\,k\\pi:\\;k\\in\\mathbb{Z}\\,\\}\\,}\\]",
    "trap": "Two distinct conceptual traps, neither of them arithmetic. Trap 1 (part a) — forgetting that BOTH branch-limits must agree. A strong student correctly writes the continuity condition as $a=\\sin a$ and gets the unique root $a=0$, but the deeper subtlety is why this is the condition at all: at any $a$, a rational sequence forces the limit toward $a$ (the $x$-branch) while an irrational sequence forces it toward $\\sin a$ (the $\\sin$-branch); continuity demands these two forced limits coincide and equal $f(a)$. Skipping the two-sequence reconciliation and merely 'plugging in' misses that $f(a)$ is $a$ or $\\sin a$ depending on the rationality of $a$ — at $a=0$ both the value ($0\\in\\mathbb{Q}$, so $f(0)=0$) and both branch-limits ($0$ and $\\sin 0=0$) must be checked to coincide, and they do. Trap 2 (part b) — collapsing $\\sin a=\\sin(\\sin a)$ to $a=\\sin a$. For $h$, the rational approach gives the limit $\\sin a$ and the irrational approach gives $\\sin(\\sin a)$, so continuity requires $\\sin a=\\sin(\\sin a)$. The fatal reflex is to 'reuse part (a)' and declare this equivalent to $a=\\sin a$, yielding $C_h=\\{0\\}$ — the same lonely point. That is wrong. The correct move is the bounded substitution: put $u=\\sin a\\in[-1,1]$, so the equation becomes $u=\\sin u$, whose unique root is $u=0$, i.e. $\\sin a=0$, i.e. $a=k\\pi$. Because $\\sin$ has already compressed the argument into $[-1,1]$ before the outer $\\sin$ acts, the transcendental equation that governs $h$ is fundamentally different from the one governing $f$, and it has infinitely many solutions. Anyone who treats $\\sin\\circ f$ as 'just another copy of $f$' lands on $\\{0\\}$ and misses the entire lattice $k\\pi$.",
    "solutions": [
      {
        "name": "Two-sequence test, then a bounded substitution for the composite",
        "steps": [
          "Part (a). Fix $a\\in\\mathbb{R}$. Because $\\mathbb{Q}$ and $\\mathbb{R}\\setminus\\mathbb{Q}$ are each dense, choose a rational sequence $r_n\\to a$ and an irrational sequence $t_n\\to a$. Then $f(r_n)=r_n\\to a$ while $f(t_n)=\\sin t_n\\to\\sin a$ (each inner function is continuous). By the sequential criterion, if $f$ is continuous at $a$ these two limits must coincide and equal $f(a)$; hence a necessary condition is $a=\\sin a$.",
          "The map $\\varphi(x)=x-\\sin x$ has $\\varphi'(x)=1-\\cos x\\ge 0$, vanishing only on the isolated set $\\{2k\\pi\\}$ (never on an interval), so $\\varphi$ is strictly increasing; with $\\varphi(0)=0$ this gives the unique root $a=0$. Thus the only candidate is $a=0$.",
          "Check sufficiency at $a=0$. Since $0\\in\\mathbb{Q}$, $f(0)=0$. For any sequence $x_n\\to 0$, split into its rational terms (where $f=x_n\\to0$) and irrational terms (where $f=\\sin x_n\\to\\sin 0=0$); every subsequence tends to $0=f(0)$, so $f$ is continuous at $0$. Therefore $\\boxed{C_f=\\{0\\}}$.",
          "Part (b). Let $h=\\sin\\circ f$, so $h(x)=\\sin x$ for rational $x$ and $h(x)=\\sin(\\sin x)$ for irrational $x$. Repeat the two-sequence test at $a$: rationals give $h(r_n)=\\sin r_n\\to\\sin a$, irrationals give $h(t_n)=\\sin(\\sin t_n)\\to\\sin(\\sin a)$. Continuity forces $\\sin a=\\sin(\\sin a)$.",
          "Substitute $u=\\sin a$, which lies in $[-1,1]$. The equation becomes $u=\\sin u$; by the same strict monotonicity of $u-\\sin u$ its only root is $u=0$. Hence $\\sin a=0$, i.e. $a=k\\pi$ for some integer $k$. For sufficiency: at $a=k\\pi$, $\\sin a=0$ and $\\sin(\\sin a)=\\sin 0=0$, so both branch-limits equal $0$, and the value is $h(k\\pi)=0$ (use whichever branch applies: $k=0$ is rational with $h(0)=\\sin 0=0$; $k\\ne0$ is irrational with $h(k\\pi)=\\sin(\\sin k\\pi)=0$). Every sequence $x_n\\to k\\pi$ then yields $h(x_n)\\to 0$. Therefore $\\boxed{C_h=\\{k\\pi:k\\in\\mathbb{Z}\\}}$.",
          "Part (c). $C_f=\\{0\\}$ while $C_h=\\{k\\pi:k\\in\\mathbb{Z}\\}$: the outer $\\sin$ first folds the real line into $[-1,1]$, so the governing equation changes from $a=\\sin a$ (root $0$ only) to $\\sin a=\\sin(\\sin a)$, equivalently $\\sin a=0$, whose solutions are all the multiples of $\\pi$. $\\boxed{C_f=\\{0\\},\\ C_h=\\{k\\pi:k\\in\\mathbb{Z}\\}}$"
        ]
      },
      {
        "name": "Limit-of-two-continuous-branches and the oscillation gap",
        "steps": [
          "General principle. Suppose $F(x)=g_1(x)$ on $\\mathbb{Q}$ and $F(x)=g_2(x)$ on $\\mathbb{R}\\setminus\\mathbb{Q}$ with $g_1,g_2$ continuous. Since both $\\mathbb{Q}$ and its complement are dense, the cluster set of $F$ at $a$ is exactly $\\{g_1(a),g_2(a)\\}$; the oscillation of $F$ at $a$ equals $|g_1(a)-g_2(a)|$, and $F$ is continuous at $a$ iff this oscillation is $0$ and $F(a)$ equals the common value. So continuity holds precisely where the two continuous branches cross.",
          "Part (a): $g_1(x)=x$, $g_2(x)=\\sin x$. They cross where $x=\\sin x$. As $\\varphi(x)=x-\\sin x$ is strictly increasing with $\\varphi(0)=0$, the unique crossing is $x=0$. The value condition is automatic there ($0\\in\\mathbb{Q}$, $f(0)=0$). Hence $C_f=\\{0\\}$, and at every $a\\ne0$ the oscillation is $|a-\\sin a|>0$, certifying discontinuity. $\\boxed{C_f=\\{0\\}}$",
          "Part (b): $h$ has branches $g_1(x)=\\sin x$ and $g_2(x)=\\sin(\\sin x)$. They cross where $\\sin x=\\sin(\\sin x)$. Writing $u=\\sin x\\in[-1,1]$, this is $u=\\sin u$, with unique root $u=0$; so the crossing locus is $\\sin x=0$, i.e. $x=k\\pi$. At such points the common value is $0=h(k\\pi)$, so the value condition holds and $C_h=\\{k\\pi:k\\in\\mathbb{Z}\\}$.",
          "To see the discontinuity quantitatively away from the lattice, the oscillation of $h$ at $a$ is $\\big|\\sin a-\\sin(\\sin a)\\big|$, which is strictly positive whenever $\\sin a\\ne0$ (because $u=\\sin a\\ne0$ gives $u\\ne\\sin u$); e.g. at $a=\\tfrac{\\pi}{2}$ the oscillation is $|1-\\sin 1|\\approx0.159>0$. $\\boxed{C_h=\\{k\\pi:k\\in\\mathbb{Z}\\}}$",
          "Part (c). The branch-crossing equation is the whole story: composing with $\\sin$ replaces the unbounded right-hand side $\\sin x$ (crossing $x$ only at $0$) by the bounded right-hand side $\\sin(\\sin x)$, and a bounded perturbation of $\\sin x$ crosses it at every zero of $\\sin$, which are the points $k\\pi$. $\\boxed{C_f=\\{0\\},\\ C_h=\\{k\\pi:k\\in\\mathbb{Z}\\}}$"
        ]
      },
      {
        "name": "Composition law: track the image and where the outer map is locally injective",
        "steps": [
          "Structural view. For a two-branch Dirichlet-type map, continuity at $a$ requires the two branch values to coincide. For $h=\\sin\\circ f$, instead of analysing $h$ from scratch, note $h$'s branch values are $\\sin(\\,x\\text{-branch of }f)$ and $\\sin(\\,\\sin\\text{-branch of }f)$, i.e. $\\sin a$ and $\\sin(\\sin a)$; they agree iff $\\sin$ sends $a$ and $\\sin a$ to the same value.",
          "Now $\\sin p=\\sin q$ iff $q=p+2m\\pi$ or $q=\\pi-p+2m\\pi$ for some integer $m$. Put $p=a$, $q=\\sin a$. Case 1: $\\sin a=a+2m\\pi$. Set $e=a+2m\\pi=\\sin a\\in[-1,1]$; since $\\sin$ has period $2\\pi$, $\\sin a=\\sin e$, so the equation reads $e=\\sin e$, whose unique root is $e=0$. Thus $a=-2m\\pi$: Case 1 produces exactly the even multiples of $\\pi$. Case 2: $\\sin a=\\pi-a+2m\\pi$, i.e. $\\psi(a):=a+\\sin a=\\pi(2m+1)$. The map $\\psi$ is strictly increasing (derivative $1+\\cos a\\ge0$, zero only on isolated points) and continuous from $-\\infty$ to $\\infty$, hitting each odd multiple of $\\pi$ exactly once; since $\\psi(k\\pi)=k\\pi$, the value $\\psi(a)$ equals an odd multiple of $\\pi$ precisely at the odd multiples $a=(2m+1)\\pi$. Combining Case 1 (even multiples) and Case 2 (odd multiples) recovers exactly $a=k\\pi$, all integers $k$.",
          "Thus $C_h=\\{k\\pi:k\\in\\mathbb{Z}\\}$ and $C_f=\\{0\\}$ (the latter is just Case 1 in isolation, since for $f$ the two branch values are $a$ and $\\sin a$ directly). $\\boxed{C_f=\\{0\\},\\ C_h=\\{k\\pi:k\\in\\mathbb{Z}\\}}$",
          "Part (c). The lattice appears because the outer $\\sin$ is many-to-one: it identifies $a$ with $\\sin a$ not only when $a=\\sin a$ but whenever the two land in the same fibre of $\\sin$, and the fibres of $\\sin$ are spaced by the zero set $\\{k\\pi\\}$ — that periodicity is precisely what the single point $0$ gets folded onto, even at $x=\\pi$ where $f$ is discontinuous ($f$'s branches $\\pi$ and $\\sin\\pi=0$ disagree) yet $\\sin$ closes the gap because $\\sin\\pi=\\sin 0=0$. $\\boxed{C_f=\\{0\\},\\ C_h=\\{k\\pi:k\\in\\mathbb{Z}\\}}$"
        ]
      }
    ],
    "remark": "Insight: a two-branch function built from continuous pieces $g_1$ on $\\mathbb{Q}$ and $g_2$ on the irrationals is continuous exactly on the crossing set $\\{g_1=g_2\\}$, because density makes its oscillation equal $|g_1-g_2|$. For $f$ the crossing equation $x=\\sin x$ is rigid — the line $y=x$ meets $y=\\sin x$ only at the origin — so $f$ is continuous at the single point $0$. The lesson of part (b) is that continuity of a composition is NOT inherited from continuity of the inner map: post-composing with $\\sin$ replaces the crossing equation by $\\sin a=\\sin(\\sin a)$, and the right move is the bounded substitution $u=\\sin a\\in[-1,1]$, which reduces it to $u=\\sin u$ and hence to $\\sin a=0$. The outer $\\sin$ is many-to-one and periodic, so it folds the lone fixed point of the inner equation onto its entire zero lattice $k\\pi$ — and it does so even at $x=\\pi$, where the inner $f$ is violently discontinuous, because $\\sin$ closes the branch gap $\\pi$ vs $0$ into $\\sin\\pi=\\sin0=0$. The fingerprint to remember: an inner function continuous at one point can become, after composition, continuous at infinitely many, governed by an entirely new transcendental equation that lives in the compressed range of the outer map."
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
    "title": "The Sine That Heals the Floor, and the One That Doesn't",
    "difficulty": 5,
    "task": "Determine each continuity set exactly and pin the points where the two composites disagree",
    "tags": [
      "composition",
      "floor-function",
      "step-function",
      "two-sequence-test",
      "image-constancy",
      "sharp-hypothesis"
    ],
    "statement": "Let $\\lfloor\\,\\cdot\\,\\rfloor$ denote the floor function, so the inner map $g(x)=\\lfloor x\\rfloor$ is discontinuous at every integer and continuous nowhere on $\\mathbb{Z}$. Compose it with two continuous outer maps that both vanish at infinitely many integers:\n\\[\nF(x)=\\sin\\!\\bigl(\\pi\\lfloor x\\rfloor\\bigr),\\qquad\\qquad G(x)=\\sin\\!\\Bigl(\\tfrac{\\pi}{2}\\lfloor x\\rfloor\\Bigr).\n\\]\nHere the outer maps are $h(t)=\\sin(\\pi t)$ and $h_2(t)=\\sin(\\tfrac{\\pi}{2}t)$, each continuous on all of $\\mathbb{R}$; note $h$ vanishes at every integer, while $h_2$ vanishes at every even integer.\n\n(a) Determine, with proof, the exact set $C_F$ of points at which $F$ is continuous, and explain how a composite of a map that is discontinuous at every integer with a genuinely non-constant outer can be continuous on all of $\\mathbb{R}$.\n\n(b) Determine, with proof, the exact set $C_G$ of points at which $G$ is continuous. In particular decide whether $G$ is continuous at $x=2$, where the outer map satisfies $h_2(\\lfloor 2\\rfloor)=h_2(2)=\\sin\\pi=0$.\n\n(c) The two outer maps are both continuous and both vanish at infinitely many of the values $\\lfloor x\\rfloor$ actually attained. Yet only one composite is continuous everywhere. Identify the exact set $C_F\\,\\triangle\\,C_G$ on which precisely one of $F,G$ is continuous (here $\\triangle$ is symmetric difference), and state the single clean property of the outer map that decides continuity of $h\\circ\\lfloor\\,\\cdot\\,\\rfloor$.",
    "answer": "\\[\\boxed{\\,C_F=\\mathbb{R},\\quad C_G=\\mathbb{R}\\setminus\\mathbb{Z},\\quad C_F\\triangle C_G=\\mathbb{Z}\\,}\\]",
    "trap": "The fatal reflex is to judge the composite $h\\circ\\lfloor\\,\\cdot\\,\\rfloor$ by the value of the outer map at the landed point: \\\"$\\lfloor x\\rfloor$ is some integer $n$, and if $h(n)=0$ then the composite is $0$ there, hence continuous.\\\" By this rule a solver computes $h_2(\\lfloor 2\\rfloor)=\\sin\\pi=0$ and declares $G$ continuous at $x=2$ — wrong. Continuity of the step function $s(x)=h(\\lfloor x\\rfloor)$ at an integer $m$ is a seam condition: on $[m-1,m)$ the value is the constant $h(m-1)$, on $[m,m+1)$ it is the constant $h(m)$, so $s$ is continuous at $m$ iff $h(m-1)=h(m)$, i.e. iff the outer map takes equal values at the two consecutive integers straddling the jump. At $x=2$ the left interval $[1,2)$ carries $\\lfloor x\\rfloor=1$ with $h_2(1)=\\sin\\tfrac{\\pi}{2}=1\\ne 0=h_2(2)$, so $G$ jumps from $1$ to $0$ there and is discontinuous — even though $h_2$ vanishes at the landed value $2$. The correct hypothesis is not \\\"$h=0$ on the image\\\" nor even \\\"$h$ continuous\\\"; it is \\\"$h$ is constant on the image $\\mathbb{Z}$.\\\" For $F$ the image values are all $\\sin(\\pi n)=0$ — a constant — so $F$ is continuous on all of $\\mathbb{R}$ despite the inner map breaking at every integer. For $G$ the image values $\\sin(\\tfrac{\\pi}{2}n)$ cycle $0,1,0,-1$ and never repeat consecutively, so $G$ breaks at every integer. A second, opposite trap is to over-correct and claim $G$ is discontinuous only where $h_2(\\lfloor x\\rfloor)\\ne 0$ (the odd-floor intervals); but $G$ is locally constant, hence continuous, at every non-integer regardless of the floor's parity — e.g. at $x=1.5$ where $h_2(1)=1\\ne 0$, $G$ is perfectly continuous. The boundaries between intervals, not the interior values, are the only place anything can break.",
    "solutions": [
      {
        "name": "Seam analysis of the induced step function",
        "steps": [
          "Both composites have the form $s(x)=h(\\lfloor x\\rfloor)$ for a continuous outer $h$. Since $\\lfloor x\\rfloor=n$ for all $x\\in[n,n+1)$, the function $s$ is constant, equal to $h(n)$, on each half-open interval $[n,n+1)$. Hence $s$ is automatically continuous at every non-integer point (it is locally constant there), and the only possible failures are at the integers $m\\in\\mathbb{Z}$.",
          "Fix an integer $m$. Approaching from the right, $x\\in[m,m+1)$ gives $s(x)=h(m)=s(m)$, so the right limit and the value both equal $h(m)$. Approaching from the left, $x\\in[m-1,m)$ gives $s(x)=h(m-1)$, so the left limit is $h(m-1)$. Therefore $s$ is continuous at $m$ if and only if $h(m-1)=h(m)$: the seam closes exactly when the outer map repeats its value across consecutive integers.",
          "Apply to $F$ with $h(t)=\\sin(\\pi t)$. For every integer $m$, $h(m)=\\sin(\\pi m)=0=\\sin(\\pi(m-1))=h(m-1)$, so the seam condition holds at every integer. Combined with continuity at all non-integers, $F$ is continuous on all of $\\mathbb{R}$: $\\boxed{C_F=\\mathbb{R}}$. The inner map shatters at every integer, but the outer map is constant ($\\equiv 0$) on the image $\\mathbb{Z}$, so no jump survives the composition.",
          "Apply to $G$ with $h_2(t)=\\sin(\\tfrac{\\pi}{2}t)$. The values $h_2(n)=\\sin(\\tfrac{\\pi}{2}n)$ run through the $4$-periodic cycle $\\ldots,0,1,0,-1,0,1,\\ldots$; consecutive terms are never equal, so $h_2(m-1)\\ne h_2(m)$ for every integer $m$. Thus the seam fails at every integer while non-integers stay continuous: $\\boxed{C_G=\\mathbb{R}\\setminus\\mathbb{Z}}$. In particular at $m=2$ the left value is $h_2(1)=1$ and the right value is $h_2(2)=0$, a jump of $1$ — so $G$ is discontinuous at $x=2$ despite $h_2(2)=0$.",
          "Part (c). $F$ is continuous everywhere and $G$ is continuous exactly off $\\mathbb{Z}$, so the verdicts differ precisely on the integers: $C_F\\triangle C_G=\\mathbb{R}\\setminus(\\mathbb{R}\\setminus\\mathbb{Z})=\\mathbb{Z}$. $\\boxed{C_F\\triangle C_G=\\mathbb{Z}}$. The decisive property of the outer map is not that it is continuous, nor that it vanishes on the landed values, but that it is constant on the image $\\mathbb{Z}$ of the inner map; $\\sin(\\pi t)$ has this property, $\\sin(\\tfrac{\\pi}{2}t)$ does not."
        ]
      },
      {
        "name": "Two-sequence test at each integer",
        "steps": [
          "Recall the sequential criterion: $s$ is continuous at $a$ iff $s(x_n)\\to s(a)$ for every sequence $x_n\\to a$. To disprove continuity at $a$ it suffices to exhibit two sequences converging to $a$ along which $s$ tends to different limits. At a non-integer $a$, every sequence is eventually inside a single interval $[n,n+1)$ where $s\\equiv h(n)$ is constant, so $s(x_n)\\to h(n)=s(a)$ for all sequences — continuity is automatic off $\\mathbb{Z}$ for both composites.",
          "Now test an integer $m$. Take $x_n=m-\\tfrac1n\\uparrow m$ (so $x_n\\in[m-1,m)$, giving $s(x_n)=h(m-1)$) and $y_n=m+\\tfrac1n\\downarrow m$ (so $y_n\\in[m,m+1)$, giving $s(y_n)=h(m)$). Both $x_n,y_n\\to m$. If $h(m-1)\\ne h(m)$ these two admissible sequences yield different limits, so no single limit exists and $s$ is discontinuous at $m$; if $h(m-1)=h(m)$ both limits equal $h(m)=s(m)$ and, since every sequence is squeezed between such one-sided behaviour, $s$ is continuous at $m$.",
          "For $F$: along $x_n\\uparrow m$, $F(x_n)=\\sin(\\pi(m-1))=0$; along $y_n\\downarrow m$, $F(y_n)=\\sin(\\pi m)=0$; and $F(m)=0$. All sequences give $0=F(m)$, so $F$ is continuous at every integer, hence on all of $\\mathbb{R}$: $\\boxed{C_F=\\mathbb{R}}$.",
          "For $G$: along $x_n\\uparrow m$, $G(x_n)=\\sin(\\tfrac{\\pi}{2}(m-1))$; along $y_n\\downarrow m$, $G(y_n)=\\sin(\\tfrac{\\pi}{2}m)$. These differ for every $m$ because the sequence $\\sin(\\tfrac{\\pi}{2}n)$ never repeats consecutively. Concretely at $m=2$: $x_n\\uparrow 2$ gives $G\\to\\sin\\tfrac{\\pi}{2}=1$ while $y_n\\downarrow 2$ gives $G\\to\\sin\\pi=0$, two different limits, so $G$ is discontinuous at $2$. The same break occurs at every integer, and non-integers are continuous, so $\\boxed{C_G=\\mathbb{R}\\setminus\\mathbb{Z}}$.",
          "Part (c). The membership tests agree everywhere except on $\\mathbb{Z}$, where $F$ passes (one-sided limits coincide at $0$) and $G$ fails (one-sided limits differ). Hence $C_F\\triangle C_G=\\mathbb{Z}$. $\\boxed{C_F\\triangle C_G=\\mathbb{Z}}$"
        ]
      },
      {
        "name": "Jump-size formula via the discrete first difference",
        "steps": [
          "For a step function $s(x)=h(\\lfloor x\\rfloor)$ the only candidate discontinuities are integers, and the saltus (jump) at integer $m$ is the gap between the right and left interval values, $J(m)=s(m^{+})-s(m^{-})=h(m)-h(m-1)=(\\Delta h)(m-1)$, where $\\Delta$ is the forward difference of the restriction $h\\big|_{\\mathbb{Z}}$. Continuity at $m$ is exactly $J(m)=0$, i.e. the discrete derivative of the outer map's integer samples vanishes there.",
          "For $F$, $h(n)=\\sin(\\pi n)\\equiv 0$ on $\\mathbb{Z}$, so the integer-sample sequence is the constant $0$ and $\\Delta h\\equiv 0$. Every jump $J(m)=0$, so $F$ is continuous at all integers and at all non-integers: $\\boxed{C_F=\\mathbb{R}}$.",
          "For $G$, $h_2(n)=\\sin(\\tfrac{\\pi}{2}n)$ samples the $4$-cycle $0,1,0,-1$. Its forward difference is $h_2(n)-h_2(n-1)\\in\\{+1,-1,+1,-1\\}$, which is nonzero for every $n$. Thus $J(m)=\\pm 1\\ne 0$ at every integer $m$, so $G$ is discontinuous at every integer; at the non-integers $J$ is undefined and $G$ is locally constant, hence continuous. Therefore $\\boxed{C_G=\\mathbb{R}\\setminus\\mathbb{Z}}$. (At $m=2$, $J(2)=h_2(2)-h_2(1)=0-1=-1\\ne0$, confirming the discontinuity even though $h_2(2)=0$.)",
          "Part (c). Comparing the two jump profiles: $F$ has $J\\equiv 0$ (continuity set $\\mathbb{R}$) and $G$ has $|J|\\equiv 1$ on $\\mathbb{Z}$ (continuity set $\\mathbb{R}\\setminus\\mathbb{Z}$). They disagree exactly where one jump vanishes and the other does not, namely on all of $\\mathbb{Z}$, so $C_F\\triangle C_G=\\mathbb{Z}$. $\\boxed{C_F\\triangle C_G=\\mathbb{Z}}$"
        ]
      }
    ],
    "remark": "Insight: when a continuous outer map $h$ is composed with the floor function, the composite $h\\circ\\lfloor\\,\\cdot\\,\\rfloor$ is a step function whose only possible discontinuities sit at the integers, and the seam at integer $m$ closes precisely when $h(m)=h(m-1)$. So $h\\circ\\lfloor\\,\\cdot\\,\\rfloor$ is continuous on all of $\\mathbb{R}$ if and only if $h$ is constant on the image $\\mathbb{Z}$ of the inner map — a strictly stronger demand than \\\"$h$ is continuous\\\" and a strictly different demand from \\\"$h$ vanishes at the landed values.\\\" The vanishing condition is a decoy: $\\sin(\\tfrac{\\pi}{2}t)$ kills every even integer yet alternates $0,1,0,-1$, so it is never constant across a seam and the composite breaks at every integer; $\\sin(\\pi t)$ kills all integers to the single value $0$, a genuine constant, so its composite is the identically-zero function and the wild discontinuity of the floor is annihilated. This is the general principle of these problems: a discontinuous inner map produces a continuous composite exactly when the outer map cannot tell the inner map's jumps apart — here, when it assigns one common value to the entire landing set $\\mathbb{Z}$."
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
    "title": "The Limit That Crowds All Its Breaks Against the Origin",
    "difficulty": 5,
    "task": "Identify the pointwise limit, pin its exact continuity set, and track what the reciprocal substitution does to the breaks",
    "tags": [
      "pointwise-limit",
      "indicator-function",
      "two-sequence-test",
      "composition",
      "accumulation-point",
      "homeomorphism"
    ],
    "statement": "All arguments are in radians. On the punctured line $\\mathbb{R}\\setminus\\{0\\}$ define the sequence of continuous functions\n\\[\nf_n(x)=\\cos^{2n}\\!\\Bigl(\\frac{\\pi}{x}\\Bigr),\\qquad n=1,2,3,\\dots,\n\\]\nand let $f(x)=\\displaystyle\\lim_{n\\to\\infty}f_n(x)$ be the pointwise limit (it exists for every $x\\neq 0$, as you will verify).\n\n(a) Compute $f$ in closed form: find, with proof, the exact set $S$ on which $f=1$, and show $f=0$ off $S$. (Beware: each $f_n$ is continuous, but $f$ need not be.)\n\n(b) Determine, with proof, the exact set $C_f$ of points of $\\mathbb{R}\\setminus\\{0\\}$ at which $f$ is continuous. Decide in particular whether $f$ is continuous at the point $x=\\tfrac{2}{5}$ (which is not of the form $1/m$), and whether there is any open interval containing $0$ on which $f$ is continuous at every point.\n\n(c) Now perform the reciprocal substitution: let $r(x)=1/x$ on $\\mathbb{R}\\setminus\\{0\\}$ and form the composite $F=f\\circ r$, i.e. $F(x)=f\\!\\left(1/x\\right)$. Determine, with proof, the exact continuity set $C_F$, and explain in one sentence the precise mechanism by which composing with the (discontinuous-at-nothing, but unbounded) map $r$ converts the break set of $f$ — which piles up against the single point $0$ — into a uniformly spaced break set with no finite accumulation point at all.",
    "answer": "\\[\\boxed{\\,S=\\{\\,1/m:\\,m\\in\\mathbb{Z}\\setminus\\{0\\}\\,\\},\\quad C_f=\\bigl(\\mathbb{R}\\setminus\\{0\\}\\bigr)\\setminus S,\\quad C_F=\\mathbb{R}\\setminus\\mathbb{Z}\\,}\\]",
    "trap": "The decoy is the point $0$, and it bites two ways. Wrong move 1 (under-counting the breaks): a strong solver computes $f=\\mathbf{1}_S$ with $S=\\{1/m\\}$ and writes $C_f=(\\mathbb{R}\\setminus\\{0\\})\\setminus S$, then -- reasoning ``near $0$ the function is mostly $0$, and $0$ is not even in the domain'' -- quietly assumes $f$ behaves continuously in a whole neighbourhood of the origin. It does not: every interval $(0,\\varepsilon)$ contains $1/m$ for all $m>1/\\varepsilon$, so $f$ has infinitely many discontinuities arbitrarily close to $0$, and there is NO open interval around $0$ on which $f$ is continuous everywhere. The breaks do not stop -- they accumulate. Wrong move 2 (over-counting the breaks): over-correcting, a solver then declares $f$ discontinuous on some whole punctured interval $(0,\\varepsilon)\\setminus S$ ``because the discontinuities are dense near $0$.'' Also wrong: the points $1/m$ are isolated (the gap $1/m-1/(m+1)=1/[m(m+1)]>0$ is positive), so a non-reciprocal point such as $x=\\tfrac{2}{5}$ -- which lies strictly between $1/3$ and $1/2$ -- has a whole neighbourhood free of $S$ on which $f\\equiv 0$, hence $f$ is continuous there. The reciprocal lattice $\\{1/m\\}$ is a discrete set whose sole accumulation point is $0$: every individual non-reciprocal nonzero point is a continuity point, yet no interval reaching $0$ is clean. Wrong move 3 (part c): treating $r(x)=1/x$ as ``just a continuous relabelling'' and concluding $C_F$ has the same crowded shape near $0$. In fact $r$ sends $0$ off to infinity, so the accumulation point disappears from the finite plane and the breaks spread out to the evenly spaced lattice $\\mathbb{Z}\\setminus\\{0\\}$, giving $C_F=\\mathbb{R}\\setminus\\mathbb{Z}$ with no clustering anywhere. Finally, a purely computational trap: plugging a large finite $n$ into $f_n$ near a reciprocal point (e.g. $x=0.2500001$) returns a value close to $1$ and tempts the conclusion $f=1$ there -- but for any $x\\neq 1/m$ one has $\\cos^2(\\pi/x)<1$ strictly, so $f_n\\to 0$; the convergence is merely slow, not absent.",
    "solutions": [
      {
        "name": "Direct evaluation of the limit, then a gap argument for continuity",
        "steps": [
          "Part (a). Fix $x\\neq 0$ and set $t=\\pi/x$. Since $0\\le\\cos^2 t\\le 1$, the powers $(\\cos^2 t)^n$ converge: if $\\cos^2 t=1$ the limit is $1$, and if $\\cos^2 t<1$ the limit is $0$. Now $\\cos^2 t=1\\iff \\cos t=\\pm1\\iff t=k\\pi$ for some integer $k\\iff \\pi/x=k\\pi\\iff x=1/k$. Because $x$ is finite and nonzero, $k$ ranges over $\\mathbb{Z}\\setminus\\{0\\}$. Hence the limit exists for every $x\\neq0$ and $f(x)=1$ exactly when $x=1/m$ with $m\\in\\mathbb{Z}\\setminus\\{0\\}$, and $f(x)=0$ otherwise. Thus $f=\\mathbf{1}_S$ with $\\boxed{S=\\{1/m:m\\in\\mathbb{Z}\\setminus\\{0\\}\\}}$.",
          "Part (b), continuity off $S$. Take any $a\\in\\mathbb{R}\\setminus\\{0\\}$ with $a\\notin S$. The set $S$ has its only accumulation point at $0$ (since $1/m\\to0$ and $|1/m|\\ge|1/m_0|$ stays bounded away from $a$ for the finitely many $m$ with $1/m$ near $a$); concretely, $a$ lies strictly between two consecutive reciprocals $1/(m+1)<a<1/m$ (or symmetrically for $a<0$, or $a>1$ where no reciprocal lies), and the gap to the nearest reciprocal is positive. So there is $\\delta>0$ with $(a-\\delta,a+\\delta)\\cap S=\\varnothing$, on which $f\\equiv0=f(a)$. A locally constant function is continuous, so $f$ is continuous at $a$. In particular $a=\\tfrac25$ satisfies $1/3<\\tfrac25<1/2$ with $\\tfrac25\\notin S$, so $f$ is continuous at $\\tfrac25$.",
          "Part (b), discontinuity on $S$. Take $a=1/m\\in S$. The neighbouring reciprocals $1/(m\\pm1)$ are distinct from $1/m$, and between any two of them lie non-reciprocal points; more simply, every punctured neighbourhood of $1/m$ contains points $x\\notin S$ (the reciprocals are isolated, gap $1/[m(m+1)]>0$). At such $x$, $f(x)=0$, while $f(1/m)=1$. So $f$ does not have limit $f(1/m)=1$ at $1/m$; it is discontinuous at every point of $S$. Combining, $\\boxed{C_f=(\\mathbb{R}\\setminus\\{0\\})\\setminus S}$.",
          "Part (b), the origin. Although $0\\notin\\mathrm{dom}(f)$, examine whether some interval reaching $0$ is clean. For any $\\varepsilon>0$, choosing any integer $m>1/\\varepsilon$ gives $1/m\\in(0,\\varepsilon)\\cap S$, a discontinuity. Hence every interval $(0,\\varepsilon)$ contains infinitely many discontinuities of $f$, and there is NO open interval containing $0$ on which $f$ is continuous at every point: the break set crowds against the origin. (Each individual non-reciprocal point in $(0,\\varepsilon)$ is still a continuity point — the discontinuities are isolated, not dense — but they have no positive lower bound on spacing as $x\\to0$.)",
          "Part (c). By part (a) applied to the argument $1/x$: $F(x)=f(1/x)=\\lim_n\\cos^{2n}\\!\\bigl(\\pi/(1/x)\\bigr)=\\lim_n\\cos^{2n}(\\pi x)$, which equals $1$ iff $\\cos^2(\\pi x)=1$ iff $x\\in\\mathbb{Z}$, and $0$ otherwise; on the domain $x\\neq0$ this is $F=\\mathbf{1}_{\\mathbb{Z}\\setminus\\{0\\}}$. The integers are uniformly spaced with gap $1$, each isolated, with no finite accumulation point. By the same gap/isolation argument as in (b), $F$ is continuous at every non-integer and discontinuous at every nonzero integer, so on its domain $\\boxed{C_F=\\mathbb{R}\\setminus\\mathbb{Z}}$. The reciprocal $r$ carries the accumulation point $0$ of $S$ off to infinity, so the breaks no longer pile up anywhere in the finite plane."
        ]
      },
      {
        "name": "Sequential criterion: two competing sequences at each candidate point",
        "steps": [
          "Recall continuity at $a$ means $f(x_n)\\to f(a)$ for EVERY sequence $x_n\\to a$; to disprove it, exhibit two sequences with different limits, or one sequence whose image misses $f(a)$. We use this on $f=\\mathbf{1}_S$, $S=\\{1/m\\}$, established as in Method 1.",
          "Discontinuity on $S$. Fix $a=1/m$, so $f(a)=1$. Build $x_k\\to a$ avoiding $S$: e.g. $x_k=\\dfrac{1}{m+\\frac1k}$ for $k\\ge2$ (so $1/x_k=m+\\frac1k$ is never an integer, hence $x_k\\notin S$) and $x_k\\to 1/m=a$. Then $f(x_k)=0$ for all $k$, but $f(a)=1$; the image sequence converges to $0\\neq1=f(a)$. By the sequential criterion $f$ is discontinuous at every $a=1/m$.",
          "Continuity off $S$ and off $0$. Fix $a\\neq0$, $a\\notin S$. Any sequence $x_n\\to a$ is eventually within the positive gap-distance of $a$ to the discrete set $S$, hence eventually $x_n\\notin S$, giving $f(x_n)=0$ for all large $n$; thus $f(x_n)\\to0=f(a)$ for every such sequence. So $f$ is continuous at $a$ (e.g. $a=\\tfrac25$, with $1/3<\\tfrac25<1/2$). Therefore $C_f=(\\mathbb{R}\\setminus\\{0\\})\\setminus S$.",
          "The crowding at $0$ via sequences. Although $0$ is outside the domain, the two-sequence phenomenon shows why no interval reaching $0$ is clean: the sequence $a_m=1/m\\to0$ consists entirely of discontinuities of $f$, while the interleaved sequence $b_m=\\dfrac{1}{m+\\frac12}\\to0$ consists of continuity points with $f=0$. Two sequences tending to $0$ — one landing on breaks, one on continuity points — confirm the break set accumulates exactly at $0$ and nowhere else.",
          "Part (c). For $F(x)=f(1/x)$, the inner map $r(x)=1/x$ is a homeomorphism of $\\mathbb{R}\\setminus\\{0\\}$ onto itself, so $x_n\\to a$ (with $a\\neq0$) iff $1/x_n\\to1/a$. Continuity of $F$ at $a$ is therefore equivalent to continuity of $f$ at $1/a$. Thus $a\\in C_F\\iff 1/a\\in C_f\\iff 1/a\\notin S\\iff a\\notin\\{m:m\\in\\mathbb{Z}\\setminus\\{0\\}\\}=\\mathbb{Z}\\setminus\\{0\\}$. On the domain $\\mathbb{R}\\setminus\\{0\\}$ this is $\\boxed{C_F=\\mathbb{R}\\setminus\\mathbb{Z}}$; the homeomorphism $r$ relocates the lone accumulation point from $0$ to infinity, so the breaks spread to the evenly spaced lattice."
        ]
      },
      {
        "name": "Composition law: pull the break set back through the homeomorphism r",
        "steps": [
          "Structural setup. Write $f=\\mathbf{1}_S$ (Method 1). For an indicator $\\mathbf{1}_S$ the continuity set is exactly the complement of the topological boundary: $\\mathbf{1}_S$ is continuous at $a$ iff $a$ is an interior point of $S$ or of its complement, i.e. iff $a\\notin\\partial S$. So everything reduces to computing $\\partial S$.",
          "Compute $\\partial S$ for $S=\\{1/m:m\\in\\mathbb{Z}\\setminus\\{0\\}\\}$. Each $1/m$ is isolated (positive gap $1/[m(m+1)]$ to its neighbours), so $S$ has empty interior; hence $\\partial S=\\overline{S}\\setminus\\mathrm{int}(S)=\\overline S$. The closure adds exactly the accumulation point $0$: $\\overline S=S\\cup\\{0\\}$. Therefore the breaks of $f$ are $\\partial S=S\\cup\\{0\\}$, and on the domain $\\mathbb{R}\\setminus\\{0\\}$ the continuity set is $C_f=(\\mathbb{R}\\setminus\\{0\\})\\setminus(\\,\\partial S\\,)=(\\mathbb{R}\\setminus\\{0\\})\\setminus S$. The presence of $0\\in\\partial S$ is precisely why no interval reaching $0$ is clean, even though $0\\notin\\mathrm{dom}(f)$; at $x=\\tfrac25\\notin\\partial S$, $f$ is continuous. $\\boxed{C_f=(\\mathbb{R}\\setminus\\{0\\})\\setminus S}$",
          "Pull back through $r$. The composite $F=\\mathbf{1}_S\\circ r=\\mathbf{1}_{r^{-1}(S)}$, and $r^{-1}(S)=\\{x:1/x\\in S\\}=\\{x:1/x=1/m\\}=\\{m:m\\in\\mathbb{Z}\\setminus\\{0\\}\\}=\\mathbb{Z}\\setminus\\{0\\}=:T$. So $F=\\mathbf{1}_T$ with $T$ the nonzero integers.",
          "Compute $\\partial T$. The nonzero integers are isolated with uniform gap $1$ and no finite accumulation point, so $\\overline T=T$ and $\\partial T=T$. Hence $F$ is discontinuous exactly on $T=\\mathbb{Z}\\setminus\\{0\\}$ and continuous elsewhere on its domain: $\\boxed{C_F=\\mathbb{R}\\setminus\\mathbb{Z}}$.",
          "Mechanism (part c). The homeomorphism $r(x)=1/x$ of $\\mathbb{R}\\setminus\\{0\\}$ maps the crowded reciprocal lattice $S$ (whose closure in $\\mathbb{R}$ gains the single accumulation point $0$) bijectively onto the uniform lattice $T=\\mathbb{Z}\\setminus\\{0\\}$ (whose closure gains nothing): under $r$ the only accumulation point $0\\in\\partial S$ is sent toward $\\pm\\infty$, off the finite plane, so the inherited discontinuity set $\\partial T$ has no finite accumulation point and the breaks become evenly spaced. Continuity of the composite is governed entirely by where $\\partial S$ pulls back to — here, by $r^{-1}$ unfolding a clustering set into a uniform one."
        ]
      }
    ],
    "remark": "Insight: a pointwise limit of continuous functions, $f_n(x)=\\cos^{2n}(\\pi/x)$, lands on the indicator $\\mathbf{1}_S$ of the reciprocal lattice $S=\\{1/m\\}$, because $\\cos^{2}$ saturates to $1$ exactly when $\\pi/x$ is a multiple of $\\pi$ and otherwise decays geometrically under the $2n$-th power. The subtlety students must locate is not WHICH points are breaks (they are the isolated reciprocals) but the shape of the break set: $S$ is discrete yet its closure smuggles in one extra point, the accumulation point $0$, so although every individual non-reciprocal point is a genuine continuity point, no interval reaching the origin is ever clean. The cleanest organising principle is that an indicator $\\mathbf{1}_S$ is continuous precisely off $\\partial S=\\overline S\\setminus\\mathrm{int}(S)$, which here is $S\\cup\\{0\\}$. The composite payoff is the real lesson of this chapter: post-composing with the reciprocal homeomorphism $r(x)=1/x$ pulls the break set back to $r^{-1}(S)=\\mathbb{Z}\\setminus\\{0\\}$, and because $r$ carries the lone accumulation point $0$ off to infinity, the once-crowded breaks become uniformly spaced with no finite cluster at all — continuity of $f\\circ r$ is read off entirely from how $r^{-1}$ reshapes $\\partial S$, not from any pointwise value of $f$."
  },
  {
    "theme": "sequential",
    "themeLabel": "Sequential & Composite Continuity",
    "title": "The Outer Map That Must Forget Which Island It Landed On",
    "difficulty": 5,
    "task": "Pin the exact condition on the outer map for each part, then find the unique threshold that heals the perturbed composite",
    "tags": [
      "composition",
      "dirichlet-indicator",
      "everywhere-discontinuous-inner",
      "two-sequence-test",
      "image-constancy",
      "threshold"
    ],
    "statement": "For real parameters $a<b$ let the inner map be the two-island Dirichlet indicator\n\\[\nD_{a,b}(x)=\\begin{cases} a, & x\\in\\mathbb{Q},\\\\ b, & x\\notin\\mathbb{Q},\\end{cases}\n\\]\nwhich is discontinuous at \\text{every} real $x$ (both $\\mathbb{Q}$ and its complement are dense) and has range exactly the two-point set $\\{a,b\\}$. Throughout, $f:\\mathbb{R}\\to\\mathbb{R}$ is a \\text{continuous} outer map, and we study the composite $f\\circ D_{a,b}$.\n\n(a) Fix $g=D_{0,1}$. Prove that, although $g$ is discontinuous everywhere, the composite $f\\circ g$ is continuous on all of $\\mathbb{R}$ if and only if $f(0)=f(1)$, and that when this fails $f\\circ g$ is discontinuous at \\text{every} point of $\\mathbb{R}$.\n\n(b) Now consider the whole family $\\mathcal{G}=\\{\\,D_{a,b}\\ :\\ 0\\le a<b\\le 1\\,\\}$. Determine the exact condition on $f$ under which $f\\circ g$ is continuous on $\\mathbb{R}$ for \\text{every} $g\\in\\mathcal{G}$ simultaneously. State precisely what this forces $f$ to be on $[0,1]$, and show by an explicit example that the condition $f(0)=f(1)$ alone is \\text{not} sufficient.\n\n(c) Take the one-parameter outer map $f_t(y)=(y-t)^2$ (continuous for each real $t$) composed with the fixed inner map $g=D_{0,1}$. Find every value of $t$ for which $f_t\\circ g$ is continuous on $\\mathbb{R}$, and identify the size of the jump that the composite suffers (at every point) when $t$ is perturbed away from that value.",
    "answer": "\\[\\boxed{\\text{(a) } f(0)=f(1);\\quad \\text{(b) } f\\equiv\\text{const on }[0,1];\\quad \\text{(c) } t=\\tfrac12,\\ \\text{jump}=|2t-1|}\\]",
    "trap": "The seductive error is to carry the part-(a) verdict over to part (b) verbatim: \\\"$f\\circ g$ is continuous iff $f$ agrees at the two endpoints of the range, so for the whole family it should be enough that $f(0)=f(1)$.\\\" This silently confuses one fixed two-point range $\\{0,1\\}$ with the union of all the ranges that $\\mathcal{G}$ produces. As $(a,b)$ ranges over all pairs with $0\\le a<b\\le 1$, the two-point sets $\\{a,b\\}$ sweep out every value in $[0,1]$, and continuity of $f\\circ D_{a,b}$ requires $f(a)=f(b)$ for that particular pair; quantifying over all pairs forces $f(a)=f(b)$ for all $a,b\\in[0,1]$, i.e. $f$ \\text{constant on the entire interval} $[0,1]$ — far stronger than equality at two endpoints. The explicit demolisher is $f(y)=y(1-y)$, which satisfies $f(0)=f(1)=0$ yet is non-constant on $[0,1]$; choosing $g=D_{0,1/2}\\in\\mathcal{G}$ gives composite values $f(0)=0$ on $\\mathbb{Q}$ and $f(\\tfrac12)=\\tfrac14$ on the irrationals, so $f\\circ g$ jumps by $\\tfrac14$ at every point despite $f(0)=f(1)$. A second trap, the mirror of the first, is to imagine the discontinuities of $f\\circ g$ live only at special points (integers, or where some inner value is nonzero). They do not: because $D_{0,1}$ is locally two-valued at every $x$ — every neighbourhood meets both $\\mathbb{Q}$ and its complement — the composite, when it breaks, breaks at \\text{every single real number} at once; there is no \\\"continuity set\\\" of positive size to salvage. A third slip in part (c) is to set $f_t(0)=0$, i.e. $t=0$ (\\\"make the outer map vanish on the landed value $0$\\\"), mistaking \\\"$f$ kills one island\\\" for \\\"$f$ cannot tell the two islands apart\\\"; the correct demand is $f_t(0)=f_t(1)$, namely $t^2=(1-t)^2$, whose only solution is the midpoint $t=\\tfrac12$, not $t=0$.",
    "solutions": [
      {
        "name": "Direct value-matching: a composite that is globally two-valued",
        "steps": [
          "For any continuous $f$ and any pair $a<b$, the composite $h=f\\circ D_{a,b}$ takes only two values: $h(x)=f(a)$ for $x\\in\\mathbb{Q}$ and $h(x)=f(b)$ for $x\\notin\\mathbb{Q}$. Fix an arbitrary point $x_0\\in\\mathbb{R}$. Every neighbourhood of $x_0$ contains both rationals and irrationals (density), so $h$ takes both values $f(a)$ and $f(b)$ in every neighbourhood of $x_0$. Hence $\\lim_{x\\to x_0}h(x)$ exists iff $f(a)=f(b)$, and this single condition is independent of $x_0$.",
          "Part (a): with $g=D_{0,1}$ the two values are $f(0)$ and $f(1)$. If $f(0)=f(1)=:L$ then $h\\equiv L$ is the constant function, continuous on all of $\\mathbb{R}$. If $f(0)\\ne f(1)$, then at every $x_0$ the function takes two distinct values arbitrarily near $x_0$, so the limit fails to exist there; thus $h$ is discontinuous at every point. Therefore $f\\circ g$ is continuous on $\\mathbb{R}$ $\\iff f(0)=f(1)$. $\\boxed{f(0)=f(1)}$",
          "Part (b): for $g=D_{a,b}$ the same argument gives continuity $\\iff f(a)=f(b)$. Requiring this for every $g\\in\\mathcal{G}$ means $f(a)=f(b)$ for \\text{all} pairs $0\\le a<b\\le 1$. Picking any $a,b\\in[0,1]$ shows $f$ takes one common value on all of $[0,1]$, so $f$ must be constant on $[0,1]$; conversely a function constant on $[0,1]$ trivially has $f(a)=f(b)$ for every such pair, making every composite constant hence continuous. So the exact condition is $f\\equiv\\text{const on }[0,1]$. The endpoint-only condition is insufficient: $f(y)=y(1-y)$ has $f(0)=f(1)=0$ but $f(\\tfrac12)=\\tfrac14$, so with $g=D_{0,1/2}$ the composite is $0$ on $\\mathbb{Q}$ and $\\tfrac14$ on the irrationals — discontinuous everywhere. $\\boxed{f\\equiv\\text{const on }[0,1]}$",
          "Part (c): with $f_t(y)=(y-t)^2$ and $g=D_{0,1}$, continuity needs $f_t(0)=f_t(1)$, i.e. $t^2=(1-t)^2$. Expanding, $t^2=1-2t+t^2\\Rightarrow 2t=1\\Rightarrow t=\\tfrac12$, the unique solution. At $t=\\tfrac12$ the composite is the constant $f_{1/2}(0)=\\tfrac14$. For general $t$ the composite jumps from $t^2$ (on $\\mathbb{Q}$) to $(1-t)^2$ (on the irrationals); the jump size is $|t^2-(1-t)^2|=|(t-(1-t))(t+(1-t))|=|2t-1|$, which vanishes exactly at the threshold $t=\\tfrac12$. $\\boxed{t=\\tfrac12,\\ \\text{jump}=|2t-1|}$"
        ]
      },
      {
        "name": "Two-sequence test at an arbitrary point",
        "steps": [
          "Use the sequential criterion: $h$ is continuous at $x_0$ iff $h(x_n)\\to h(x_0)$ for every $x_n\\to x_0$, and to disprove continuity it suffices to find two sequences with different limits. Fix any $x_0\\in\\mathbb{R}$. By density choose rationals $r_n\\to x_0$ and irrationals $s_n\\to x_0$. For $h=f\\circ D_{0,1}$ we get $h(r_n)=f(0)$ for all $n$ and $h(s_n)=f(1)$ for all $n$, two constant sequences.",
          "Part (a): if $f(0)\\ne f(1)$, the sequences $r_n,s_n\\to x_0$ give $h(r_n)\\to f(0)\\ne f(1)\\leftarrow h(s_n)$, so no limit exists at $x_0$; since $x_0$ was arbitrary, $h$ is discontinuous everywhere. If $f(0)=f(1)=L$, every sequence (split into its rational and irrational terms) has $h(x_n)\\to L=h(x_0)$, so $h$ is continuous everywhere. Hence continuity $\\iff f(0)=f(1)$. $\\boxed{f(0)=f(1)}$",
          "Part (b): for $g=D_{a,b}$ the same two-sequence argument yields, at every $x_0$, limits $f(a)$ and $f(b)$; continuity for that $g$ needs $f(a)=f(b)$. Demanding it for every pair $0\\le a<b\\le 1$ forces $f$ to take a single value across $[0,1]$, i.e. constant on $[0,1]$. The counterexample $f(y)=y(1-y)$ with $g=D_{0,1/2}$ produces rational-sequence limit $0$ and irrational-sequence limit $\\tfrac14$ at every $x_0$, confirming $f(0)=f(1)$ does not suffice. $\\boxed{f\\equiv\\text{const on }[0,1]}$",
          "Part (c): with $f_t(y)=(y-t)^2$ and $g=D_{0,1}$, at any $x_0$ the rational sequence gives limit $f_t(0)=t^2$ and the irrational sequence gives $f_t(1)=(1-t)^2$. These two limits agree (so a limit exists, equal to the value, at every point) iff $t^2=(1-t)^2$, i.e. $t=\\tfrac12$, where both equal $\\tfrac14$. Off the threshold the two admissible-sequence limits differ by exactly $|t^2-(1-t)^2|=|2t-1|$, the universal jump. $\\boxed{t=\\tfrac12,\\ \\text{jump}=|2t-1|}$"
        ]
      },
      {
        "name": "Oscillation via continuous envelopes",
        "steps": [
          "Define the oscillation of $h$ at $x_0$ by $\\omega_h(x_0)=\\limsup_{x\\to x_0}h(x)-\\liminf_{x\\to x_0}h(x)$; the standard fact is $h$ continuous at $x_0$ iff $\\omega_h(x_0)=0$. For $h=f\\circ D_{a,b}$ the values $f(a)$ (on the dense set $\\mathbb{Q}$) and $f(b)$ (on the dense complement) are attained in every neighbourhood of every $x_0$, so $\\omega_h(x_0)=|f(a)-f(b)|$, a constant independent of $x_0$.",
          "Part (a): with $a=0,b=1$, $\\omega_h\\equiv|f(0)-f(1)|$. This is $0$ at every point (hence $h$ continuous everywhere) iff $f(0)=f(1)$, and otherwise it is a fixed positive number at every point (hence $h$ discontinuous everywhere). $\\boxed{f(0)=f(1)}$",
          "Part (b): for the family, $h$ has $\\omega\\equiv|f(a)-f(b)|$ for the member $D_{a,b}$. Requiring $\\omega\\equiv 0$ for all $g\\in\\mathcal{G}$ means $|f(a)-f(b)|=0$ for every $0\\le a<b\\le 1$, i.e. $f$ has zero oscillation between any two points of $[0,1]$, which is precisely $f$ being constant on $[0,1]$. Since $f(y)=y(1-y)$ has $|f(0)-f(\\tfrac12)|=\\tfrac14\\ne 0$, the member $D_{0,1/2}$ alone already forces $\\omega\\equiv\\tfrac14>0$, refuting the endpoint-only condition. $\\boxed{f\\equiv\\text{const on }[0,1]}$",
          "Part (c): for $f_t(y)=(y-t)^2$, $g=D_{0,1}$, the oscillation everywhere equals $|f_t(0)-f_t(1)|=|t^2-(1-t)^2|=|2t-1|$. It is $0$ (composite continuous) iff $|2t-1|=0$, i.e. $t=\\tfrac12$; any perturbation $t=\\tfrac12+\\varepsilon$ raises the oscillation — and the actual pointwise jump — to $|2\\varepsilon|$, linear in the perturbation and present at every real point at once. $\\boxed{t=\\tfrac12,\\ \\text{jump}=|2t-1|}$"
        ]
      }
    ],
    "remark": "Insight: composing a continuous outer $f$ with an everywhere-discontinuous, two-island inner $D_{a,b}$ gives a composite that is \\text{globally two-valued} — it equals $f(a)$ on a dense set and $f(b)$ on its dense complement — so it is either continuous \\text{everywhere} (when $f$ cannot distinguish the two islands, $f(a)=f(b)$) or discontinuous \\text{everywhere} (when it can). There is no halfway continuity set. This is the precise reverse of the usual $f\\circ g$ slogan: a wild inner map is tamed not by smoothness of $f$ but by $f$ being \\text{constant on the inner map's range}. The leap from part (a) to (b) is the heart of the trap: holding $f$ fixed and varying $g$ over a family whose ranges \\text{cover} an interval converts a two-point matching condition into the demand that $f$ be constant on that whole interval — \\text{for every} $g$ forces $f$ flat on $\\bigcup_g\\operatorname{range}(g)=[0,1]$, an enormously stronger requirement than $f(0)=f(1)$, as $f(y)=y(1-y)$ shows. Part (c) sharpens this into a threshold: the squared outer map $(y-t)^2$ heals the broken floor at the unique self-symmetric value $t=\\tfrac12$ (the only $t$ equidistant from the two islands $0$ and $1$), and the moment $t$ leaves $\\tfrac12$ the composite shatters everywhere with jump $|2t-1|$ — linear in the perturbation, with no transitional regime. The decoy $t=0$ (\\\"make $f$ vanish on the landed value\\\") is the eternal confusion of \\text{killing one island} with \\text{equating both}."
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
    "title": "The Recursion That Hides Its Own Spurious Fixed Point",
    "difficulty": 5,
    "task": "Classify all starting values by convergence and pin the limit, rejecting the spurious fixed point",
    "tags": [
      "recursion",
      "fixed-point",
      "spurious-root",
      "monotone-convergence",
      "passing-the-limit",
      "two-sequence-test"
    ],
    "statement": "Define the iteration $\\phi(x)=\\dfrac{x^{2}+6}{5}$ and, for a real seed $a_{1}$, set\n\\[\na_{n+1}=\\phi(a_{n})=\\frac{a_{n}^{2}+6}{5},\\qquad n\\ge 1 .\n\\]\nA tempting first move is to assume a limit $L$ exists and pass it through the (continuous) map $\\phi$: $L=\\dfrac{L^{2}+6}{5}$, i.e. $L^{2}-5L+6=0$, so $L\\in\\{2,3\\}$.\n\n(a) Take the seed $a_{1}=e$ (Euler's number, $e\\approx 2.718$). Prove the sequence converges and find its exact limit. Both roots $2$ and $3$ solve the fixed-point equation; show, with a genuine argument from monotonicity/boundedness, which one is actually attained and why the other is a spurious root that must be rejected.\n\n(b) Determine, with proof, the exact set $S\\subseteq\\mathbb{R}$ of seeds $a_{1}$ for which $(a_{n})$ converges, and give the limit $L(a_{1})$ as an explicit function on $S$. (Be careful at the boundary of $S$: the limit there need not be the limit obtained from just inside $S$.)\n\n(c) Regard $L:S\\to\\mathbb{R}$, the limit-of-the-sequence map, as a function of the seed. Using the sequential criterion, determine the exact set of points of $S$ at which $L$ is discontinuous, exhibiting at each such point two seed-sequences whose limit-values disagree.",
    "answer": "\\[\\boxed{\\,S=[-3,3],\\quad L=2\\ \\text{on}\\ (-3,3),\\quad L(\\pm 3)=3,\\quad L\\ \\text{discontinuous exactly at}\\ a_1=\\pm 3\\,}\\]",
    "trap": "The fatal reflex is to treat the fixed-point equation as the whole problem: solve $L^2-5L+6=0$, get $L\\in\\{2,3\\}$, and then either (i) report both as 'the limits', or (ii) pick $3$ because it is the larger / 'closer to $e$' root. Both are wrong, for the same deep reason: solving $L=\\phi(L)$ presupposes that a limit EXISTS and only lists the candidates it could equal IF it exists. It never proves existence, and it never decides which candidate is realized for a given seed. The genuine work is the dynamics. The map $\\phi$ has $\\phi'(x)=\\tfrac{2x}{5}$, so $|\\phi'(2)|=\\tfrac45<1$ (the root $2$ is attracting) while $|\\phi'(3)|=\\tfrac65>1$ (the root $3$ is repelling): a repelling fixed point can be the limit only if the seed is sent onto it exactly, never as an attracted limit from a nearby start. For $a_1=e$, one checks the orbit is trapped strictly inside $(-3,3)$, hence bounded away from $3$, and contracts to $2$; the value $3$ is a spurious root — it solves the algebra but is dynamically unreachable from $e$. The second, subtler trap lives in part (b)/(c): having found that interior seeds give limit $2$, students extend by continuity and declare $L\\equiv 2$ on all of $S$. But the endpoints are exceptional: $\\phi(3)=3$ and $\\phi(-3)=\\tfrac{9+6}{5}=3$, so the seeds $a_1=\\pm 3$ sit on (or map in one step onto) the repelling fixed point and the sequence is eventually the constant $3$, giving $L(\\pm 3)=3\\ne 2$. Thus the spurious root $3$ is NOT globally spurious; it is the realized limit on a measure-zero exceptional set, precisely the boundary of $S$. This makes the limit-map $L$ jump from $2$ (interior) to $3$ (boundary): the seed $a_1=3$ is a hidden degenerate case, and the two-sequence test ($a_1^{(k)}=3-\\tfrac1k\\to 3$ gives $L\\to 2$, while the constant seed $3$ gives $L=3$) exposes the discontinuity. Anyone who 'passes the limit through $\\phi$' and stops has done none of the three required jobs: prove existence, select the attained root, and handle the degenerate endpoints.",
    "solutions": [
      {
        "name": "Monotone-bounded existence, then select the attracting root; invariance for the classification",
        "steps": [
          "Part (a), seed $a_1=e\\in(2,3)$. First note $\\phi(x)-2=\\dfrac{x^2+6}{5}-2=\\dfrac{x^2-4}{5}=\\dfrac{(x-2)(x+2)}{5}$ and $\\phi(x)-3=\\dfrac{x^2-9}{5}=\\dfrac{(x-3)(x+3)}{5}$. For $x\\in(2,3)$ both factors of the first product are positive so $\\phi(x)>2$, and $(x-3)(x+3)<0$ so $\\phi(x)<3$; moreover $\\phi(x)-x=\\dfrac{x^2-5x+6}{5}=\\dfrac{(x-2)(x-3)}{5}<0$ on $(2,3)$, so $\\phi(x)<x$. Hence whenever $a_n\\in(2,3)$ we get $a_{n+1}\\in(2,3)$ and $a_{n+1}<a_n$. Since $a_1=e\\in(2,3)$, induction gives that $(a_n)$ stays in $(2,3)$, is strictly decreasing, and is bounded below by $2$.",
          "A decreasing sequence bounded below converges, so $L=\\lim a_n$ exists with $2\\le L\\le 3$. Now pass the limit through the continuous map $\\phi$: $L=\\lim a_{n+1}=\\lim\\phi(a_n)=\\phi(L)$, so $L\\in\\{2,3\\}$. But every term satisfies $a_n<3$ and the sequence is decreasing, so $L\\le a_1=e<3$; thus $L\\ne 3$ and $L=2$. The root $3$ is rejected because the orbit is bounded away from it from the start. $\\boxed{\\displaystyle\\lim_{n\\to\\infty}a_n=2}$ for $a_1=e$.",
          "Why $3$ is dynamically spurious here (the conceptual point): $\\phi'(x)=\\tfrac{2x}{5}$ gives $|\\phi'(3)|=\\tfrac65>1$, so $3$ is a repelling fixed point — any seed with $a_1\\ne 3$ but near $3$ is pushed away, never drawn in. Solving $L=\\phi(L)$ only lists candidates assuming convergence; it can never by itself certify which candidate (or whether any) is attained.",
          "Part (b), classification of all seeds. Observe $\\phi$ is even and, on $[-3,3]$, attains its minimum $\\phi(0)=\\tfrac65=1.2$ and its maximum $\\phi(\\pm 3)=3$; hence $\\phi([-3,3])=[1.2,3]\\subseteq[-3,3]$, so $[-3,3]$ is forward-invariant. For any seed $a_1\\in(-3,3)$, $a_2=\\phi(a_1)=\\dfrac{a_1^2+6}{5}<\\dfrac{9+6}{5}=3$ and $a_2\\ge 1.2>-3$, so $a_2\\in[1.2,3)$ — in particular $a_2\\le 2$ forces an increasing orbit and $a_2\\ge 2$ a decreasing one, but in either case the orbit lies in the interval with endpoints $2$ and $a_2$, is monotone (by the sign of $\\phi(x)-x=\\tfrac{(x-2)(x-3)}{5}$ on $[1.2,3)$), bounded, and stays $\\le a_2<3$. As in (a) the limit exists, equals $\\phi(L)$, and is $\\le a_2<3$, hence $L=2$. So every interior seed gives limit $2$.",
          "Boundary and exterior. If $a_1=3$ then $a_n\\equiv 3$ (fixed point), so $L=3$. If $a_1=-3$ then $a_2=\\dfrac{9+6}{5}=3$ and thereafter $a_n\\equiv 3$, so again $L=3$. If $|a_1|>3$, then $a_2=\\dfrac{a_1^2+6}{5}>\\dfrac{9+6}{5}=3$, and for $x>3$ one has $\\phi(x)-x=\\tfrac{(x-2)(x-3)}{5}>0$ with $\\phi(x)>3$, so the orbit is increasing and stays $>3$; it cannot converge to a finite $L$ (that $L$ would satisfy $L=\\phi(L)$ with $L\\ge a_2>3$, impossible), and in fact $a_n\\to+\\infty$. Hence convergence holds iff $a_1\\in[-3,3]$. Therefore $\\boxed{S=[-3,3]}$ with $\\boxed{L(a_1)=2\\ \\text{for }|a_1|<3,\\quad L(\\pm 3)=3.}$",
          "Part (c), continuity of $L:S\\to\\mathbb{R}$. On the open interval $(-3,3)$, $L\\equiv 2$ is constant, hence continuous; the only candidate failures are the endpoints $\\pm 3$. At $a_1=3$ take seeds $s_k=3-\\tfrac1k\\to 3$ with $s_k\\in(-3,3)$: then $L(s_k)=2$ for all $k$, while $L(3)=3$, so $L(s_k)\\to 2\\ne 3=L(3)$ — $L$ is discontinuous at $3$. By the same device (or evenness) $L$ is discontinuous at $-3$: $s_k=-3+\\tfrac1k\\to -3$ give $L(s_k)=2$ but $L(-3)=3$. Thus $\\boxed{L\\ \\text{is discontinuous exactly at }a_1=\\pm 3.}$ The spurious root $3$ is not globally spurious: it is the genuine limit precisely on the boundary $\\partial S=\\{\\pm 3\\}$, and that is exactly where $L$ tears."
        ]
      },
      {
        "name": "Error-variable contraction (geometric decay to the attracting root)",
        "steps": [
          "Track the deviation from the attracting root with $e_n=a_n-2$. Then $e_{n+1}=a_{n+1}-2=\\dfrac{a_n^2-4}{5}=\\dfrac{(a_n-2)(a_n+2)}{5}=e_n\\cdot\\dfrac{a_n+2}{5}$, so $|e_{n+1}|=|e_n|\\cdot\\dfrac{|a_n+2|}{5}$. The local multiplier is $\\dfrac{|a_n+2|}{5}$, which is $<1$ exactly when $-7<a_n<3$.",
          "Part (a), $a_1=e$. From step 1 of Solution 1 the orbit stays in $(2,3)$, where $a_n+2\\in(4,5)$ so the multiplier $\\dfrac{a_n+2}{5}\\in(0,1)$ is strictly below $1$; indeed once $a_2=\\phi(e)<3$ we have a uniform bound $\\dfrac{a_n+2}{5}\\le\\dfrac{a_2+2}{5}=:c<1$ for all $n\\ge 2$ (terms only decrease). Hence $|e_{n}|\\le c^{\\,n-2}|e_2|\\to 0$, i.e. $a_n\\to 2$. The root $3$ never enters: $|a_n-3|=|e_n+ (2-3)|$ stays near $1$, so the sequence is bounded away from $3$. $\\boxed{\\lim a_n=2}$.",
          "Part (b). For any interior seed $a_1\\in(-3,3)$, the first iterate $a_2\\in[1.2,3)$ (Solution 1), and for $n\\ge 2$ we have $a_n\\in[1.2,a_2]\\subseteq(-7,3)$, giving the uniform contraction factor $c=\\dfrac{a_2+2}{5}<1$; thus $e_n\\to 0$ and $L=2$. For $a_1=\\pm 3$ the deviation is $e_1=\\pm 3-2$ but the orbit is (eventually) the fixed point $3$, where the multiplier $\\dfrac{3+2}{5}=1$ stalls the contraction and $e_n\\to 1\\ne 0$, so $L=3$, not $2$. For $|a_1|>3$ the multiplier exceeds $1$ ($a_n+2>5$) and $|e_n|\\to\\infty$: divergence. Hence $\\boxed{S=[-3,3],\\ L=2\\text{ on }(-3,3),\\ L(\\pm3)=3.}$",
          "Part (c). The contraction picture makes the discontinuity transparent: at every interior seed the multiplier is $<1$ and the orbit is dragged to $2$, but at the two boundary seeds the multiplier is exactly $1$ at the landed point $3$, so the error freezes and $L=3$. The limit-map therefore jumps from the constant value $2$ on $(-3,3)$ to $3$ at $\\pm 3$; choosing interior seeds $s_k\\to\\pm 3$ gives $L(s_k)\\equiv 2\\not\\to 3=L(\\pm3)$. $\\boxed{L\\ \\text{discontinuous exactly at }\\pm 3.}$"
        ]
      },
      {
        "name": "Cobweb / conjugacy comparison of the two fixed points",
        "steps": [
          "Compare each candidate root by linearising. Near a fixed point $p$, $\\phi(x)\\approx p+\\phi'(p)(x-p)$ with $\\phi'(x)=\\tfrac{2x}{5}$. At $p=2$, $\\phi'(2)=\\tfrac45<1$: locally $|a_{n+1}-2|\\approx\\tfrac45|a_n-2|$, a contraction, so $2$ attracts a whole neighbourhood. At $p=3$, $\\phi'(3)=\\tfrac65>1$: locally $|a_{n+1}-3|\\approx\\tfrac65|a_n-3|$, an expansion, so $3$ repels every nearby seed except $3$ itself. This already tells us $3$ can be a limit ONLY for seeds whose orbit hits $3$ exactly.",
          "Find exactly which seeds land on the repeller. We need $a_n=3$ for some $n$. Solving $\\phi(x)=3$: $\\dfrac{x^2+6}{5}=3\\Rightarrow x^2=9\\Rightarrow x=\\pm 3$. So the only preimages of $3$ are $3$ itself and $-3$; iterating, the full set of seeds eventually equal to $3$ is exactly $\\{-3,3\\}$ (since $-3$ has preimages $\\phi(x)=-3\\Rightarrow x^2=-21$, none real). Thus the repelling root $3$ is the realized limit precisely for $a_1\\in\\{-3,3\\}$.",
          "For every other seed in the invariant interval, the cobweb between the graph $y=\\phi(x)$ and the diagonal $y=x$ on $[-3,3)$ has $\\phi(x)<x$ for $x\\in(2,3)$ and $\\phi(x)>x$ for $x\\in(-3,2)$ (sign of $\\tfrac{(x-2)(x-3)}{5}$), with all iterates trapped in $[1.2,3)$ after one step; the staircase marches monotonically to the unique attracting crossing at $x=2$. Outside $[-3,3]$, $\\phi(x)>x>3$ drives the cobweb up to $+\\infty$. Hence $S=[-3,3]$, $L=2$ on $(-3,3)$, $L(\\pm 3)=3$. $\\boxed{S=[-3,3],\\ L=2\\text{ on }(-3,3),\\ L(\\pm3)=3.}$",
          "Part (c). The continuity verdict reads straight off the dichotomy: $L$ equals the attracting value $2$ on the open interval and the repelling value $3$ only on the two exceptional preimage-seeds $\\pm 3$. Since these exceptional points are limits of interior points (where $L=2$), the sequential criterion fails there: $L(s_k)=2$ for interior $s_k\\to\\pm 3$ while $L(\\pm 3)=3$. So $\\boxed{L\\ \\text{is discontinuous exactly at }a_1=\\pm 3,}$ and continuous on all of $(-3,3)$."
        ]
      }
    ],
    "remark": "Insight: the equation $L=\\phi(L)$ obtained by 'passing the limit through the continuous map' is necessary but never sufficient — it only enumerates the values a limit could equal IF one exists, and it cannot tell an attracting root from a repelling one. The classification of the fixed points by $|\\phi'(p)|$ is what does the real work: $|\\phi'(2)|=\\tfrac45<1$ (attracting) versus $|\\phi'(3)|=\\tfrac65>1$ (repelling). A repelling fixed point is a spurious limit for almost every seed — it is attained only by seeds whose orbit is sent onto it exactly, here the two preimages $a_1\\in\\{-3,3\\}$ of $3$ under $\\phi$. The punchline for this chapter is that the seed-to-limit map $L(a_1)$ is itself a discontinuous function: it is the constant $2$ throughout the open basin $(-3,3)$ but jumps to $3$ on the boundary $\\partial S=\\{\\pm 3\\}$, and a two-sequence test at $a_1=3$ (interior seeds $3-\\tfrac1k\\to 3$ give limit $2$, the constant seed $3$ gives limit $3$) certifies the break. The general moral: when a recursion has several fixed points, continuity lets you pass the limit through the map but cannot choose the root; you must add monotonicity/boundedness (or the derivative test) to prove existence and to reject the dynamically unreachable spurious roots — and you must hunt for the degenerate boundary seeds where the 'spurious' root quietly becomes the true one."
  },
  {
    "theme": "parametric",
    "themeLabel": "Parametric Continuity",
    "title": "The Seam Heals, But the Curve Must Never Turn Back",
    "difficulty": 5,
    "task": "Glue the seam via the removable limit, then force global injectivity and count the integer parameters",
    "tags": [
      "removable-limit",
      "piecewise-glue",
      "injectivity",
      "strict-monotonicity",
      "slope-sign",
      "integer-count"
    ],
    "statement": "Let $a$ be an integer parameter. Define $f:\\mathbb{R}\\to\\mathbb{R}$ by\n\\[\nf(x)=\\begin{cases}\\dfrac{a^{2}}{2}+(6-a)\\,x, & x<0,\\\\ \\ell(a), & x=0,\\\\ \\dfrac{a^{2}}{2}+(a-2)\\,x+x^{3}, & x>0,\\end{cases}\n\\]\nwhere the seam value is \\text{not} written down directly but is fixed by the removable-limit constraint\n\\[\n\\ell(a)=\\lim_{x\\to 0}\\frac{e^{a x}-1-a x}{x^{2}} .\n\\]\n(The quotient $\\dfrac{e^{ax}-1-ax}{x^{2}}$ is a genuine $0/0$ indeterminate at $x=0$; its limit is the only value of $\\ell(a)$ that could make the seam removable, and we install exactly that value.)\n\nFind, with full justification, the number of integer values of $a$ for which $f$ is both continuous on all of $\\mathbb{R}$ \\text{and} injective (one-to-one) on all of $\\mathbb{R}$.",
    "answer": "$4$",
    "trap": "There are several deadly slips, none of them arithmetic. (1) Many students burn their energy proving continuity at $x=0$ and think the parameter is pinned there. It is not: evaluating the removable limit gives $\\ell(a)=\\dfrac{a^{2}}{2}$ (since $e^{ax}=1+ax+\\tfrac{a^2x^2}{2}+\\cdots$), and BOTH side-branches were built to pass through $\\bigl(0,\\tfrac{a^2}{2}\\bigr)$, so $f$ is continuous at $0$ for \\text{every} integer $a$. Continuity contributes \\text{no} constraint at all; the entire problem lives in the injectivity demand, which students under-weight. (2) For a continuous map on $\\mathbb{R}$, injective is equivalent to strictly monotone, so BOTH pieces must be strictly increasing (or both strictly decreasing) — here both must be strictly increasing because the right branch $x^3$ dominates. The classic error is to check only ONE piece: enforcing only the cubic's monotonicity ($a\\ge 2$) or only the line's positive slope ($a<6$), and forgetting the other, gives a wrong (often infinite) set. The real condition is the \\text{intersection} $2\\le a<6$. (3) The sharpest trap is the lower boundary $a=2$. There the right branch is $\\tfrac{a^2}{2}+x^3$ with derivative $3x^2$, which \\text{vanishes at} $x=0$; panicked students declare '$r'(0)=0\\Rightarrow$ not strictly increasing' and DROP $a=2$, getting $3$. But a zero derivative at an isolated point does not break strict monotonicity — $x^3$ is the textbook example of a strictly increasing function with $r'(0)=0$ — so $a=2$ is VALID and must be kept. (4) The mirror trap is the upper boundary $a=6$: there the left line has slope $6-a=0$, so $f$ is the \\text{constant} $\\tfrac{a^2}{2}=18$ on all of $(-\\infty,0)$ — e.g. $f(-1)=f(-2)=18$ — destroying injectivity, so $a=6$ must be EXCLUDED. Keeping $a=6$ (line 'just barely flat') gives the wrong count $5$. Only $a\\in\\{2,3,4,5\\}$ survives both endpoints correctly.",
    "solutions": [
      {
        "name": "Evaluate the seam, then split injectivity into a slope-sign test on each piece",
        "steps": [
          "Step 1 — install the seam. Using $e^{ax}=1+ax+\\tfrac{a^2x^2}{2}+\\tfrac{a^3x^3}{6}+\\cdots$, the numerator is $e^{ax}-1-ax=\\tfrac{a^2}{2}x^2+O(x^3)$, so $\\ell(a)=\\lim_{x\\to0}\\dfrac{e^{ax}-1-ax}{x^{2}}=\\dfrac{a^{2}}{2}$. Hence the seam value is $f(0)=\\tfrac{a^2}{2}$. Both branches were written with the same constant term $\\tfrac{a^2}{2}$, so $\\lim_{x\\to0^-}f=\\tfrac{a^2}{2}=\\lim_{x\\to0^+}f=f(0)$: $f$ is continuous at $0$ for EVERY integer $a$. Continuity therefore imposes no restriction, and the whole problem reduces to injectivity.",
          "Step 2 — injective $\\Leftrightarrow$ strictly monotone. $f$ is continuous on $\\mathbb{R}$; a continuous function on an interval is injective iff it is strictly monotone. Since the right branch contains $+x^3\\to+\\infty$, any monotone $f$ must be strictly increasing. So we require: the left line strictly increasing on $(-\\infty,0)$ AND the right cubic strictly increasing on $(0,\\infty)$, with the seam preserving order (the left piece feeds into the seam, the right leaves it).",
          "Step 3 — left piece. The line $\\tfrac{a^2}{2}+(6-a)x$ has constant slope $6-a$; it is strictly increasing iff $6-a>0$, i.e. $a<6$. (At $a=6$ the slope is $0$, making $f\\equiv 18$ on $(-\\infty,0)$ — not injective.)",
          "Step 4 — right piece. The cubic $r(x)=\\tfrac{a^2}{2}+(a-2)x+x^3$ has $r'(x)=(a-2)+3x^2$, which on $[0,\\infty)$ attains its minimum at $x=0$, value $a-2$. If $a-2>0$ then $r'>0$ throughout, strictly increasing. If $a-2=0$ (i.e. $a=2$) then $r'(x)=3x^2\\ge0$, vanishing only at the isolated point $x=0$, so $r$ is STILL strictly increasing ($x^3$ is the canonical example). If $a-2<0$ then $r'(0)<0$, so $r$ decreases on $(0,\\varepsilon)$ before rising — a local max/min appears and $r$ repeats values, destroying injectivity. Hence the right piece is strictly increasing iff $a\\ge 2$.",
          "Step 5 — glue and count. Both pieces strictly increasing requires $a<6$ and $a\\ge 2$, i.e. $2\\le a<6$. Continuity then makes $f$ strictly increasing across the seam: for $x_1<0<x_2$, $f(x_1)<\\tfrac{a^2}{2}=f(0)<f(x_2)$, so $f$ is strictly increasing on all of $\\mathbb{R}$, hence injective. The integers satisfying $2\\le a<6$ are $\\{2,3,4,5\\}$. Count $=4$. $\\boxed{4}$"
        ]
      },
      {
        "name": "Derivative as a single global object (one-sided derivatives at the seam)",
        "steps": [
          "After Step 1 of Solution 1 ($\\ell(a)=\\tfrac{a^2}{2}$, continuity for all $a$), differentiate piecewise: $f'(x)=6-a$ for $x<0$ and $f'(x)=(a-2)+3x^2$ for $x>0$. For a continuous $f$ to be injective on $\\mathbb{R}$ we need $f'\\ge 0$ everywhere it exists (no sign change) with the zero set having empty interior, and we must inspect the seam.",
          "On $(-\\infty,0)$: $f'=6-a$, a constant. It is $\\ge0$ with no interval of zeros iff $6-a>0$ (if $6-a=0$ the derivative is identically $0$ on a whole interval — the function is flat — which is fatal). So $a<6$.",
          "On $(0,\\infty)$: $f'=(a-2)+3x^2\\ge a-2$, with equality only at the single point $x=0^+$. The infimum $a-2$ must be $\\ge0$ for $f'$ to stay nonnegative on the whole ray; $a\\ge2$. When $a=2$ the only zero of $f'$ is the isolated point $x=0$, so monotonicity is preserved.",
          "Seam check: the left one-sided derivative is $6-a>0$ and the right one-sided derivative at $0^+$ is $a-2\\ge0$; the function value is continuous, so no folding occurs at $x=0$ (left arrives strictly increasing, right departs nondecreasing with only an isolated stationary point). Thus $f'\\ge0$ globally with isolated zeros exactly when $a<6$ and $a\\ge2$. Integers: $a\\in\\{2,3,4,5\\}$, giving $\\boxed{4}$ values."
        ]
      },
      {
        "name": "Contrapositive: hunt for a repeated value (collision test)",
        "steps": [
          "Injectivity fails iff some value is taken twice. After fixing $\\ell(a)=\\tfrac{a^2}{2}$ (Solution 1, Step 1), test each obstruction directly. Left collision: the line $\\tfrac{a^2}{2}+(6-a)x$ repeats a value on $(-\\infty,0)$ iff its slope is $0$, i.e. $a=6$ (then $f(-1)=f(-2)=18$). For $a\\ne6$ the line is one-to-one on its ray.",
          "Right collision: $r(x)=\\tfrac{a^2}{2}+(a-2)x+x^3$. A repeat needs $r(x_1)=r(x_2)$ for $0\\le x_1<x_2$, i.e. $(a-2)(x_1-x_2)+(x_1^3-x_2^3)=0\\Rightarrow (a-2)+(x_1^2+x_1x_2+x_2^2)=0$. Since $x_1^2+x_1x_2+x_2^2>0$ for $(x_1,x_2)\\ne(0,0)$, a solution with $x_1,x_2\\ge0$ exists iff $a-2<0$, i.e. $a<2$. So the right ray is injective iff $a\\ge2$ (the borderline $a=2$ forces $x_1^2+x_1x_2+x_2^2=0$, impossible for distinct nonnegative arguments — no collision, $a=2$ survives).",
          "Cross-collision (left value equals right value): left values fill $(\\tfrac{a^2}{2},\\infty)$-below, precisely $f(x)<\\tfrac{a^2}{2}$ for $x<0$ when slope $>0$, while right values are $\\ge\\tfrac{a^2}{2}$; with slope $6-a>0$ the two ranges meet only at the seam value $\\tfrac{a^2}{2}=f(0)$, attained once. So no cross-collision when $a<6$ and $a\\ge2$.",
          "Therefore collisions are absent exactly when $a\\ne6$, $a\\ge2$, and $a<6$ together, i.e. $2\\le a<6$. Combined with $a$ integer this is $\\{2,3,4,5\\}$, so the count of injectivity-preserving integers is $\\boxed{4}$."
        ]
      }
    ],
    "remark": "Insight: this problem deliberately decouples the two reflexes. The removable-limit constraint $\\ell(a)=\\lim_{x\\to0}\\tfrac{e^{ax}-1-ax}{x^2}=\\tfrac{a^2}{2}$ looks like the crux, but once you evaluate it you discover both branches were engineered to share that constant term — so continuity holds for every integer $a$ and supplies ZERO equations. All the discrimination comes from injectivity, and the bridge that makes it tractable is the theorem 'continuous + injective on an interval $\\Leftrightarrow$ strictly monotone', which converts a one-to-one demand into a slope-sign inequality on each piece. The casework then turns on two boundaries that are mirror images: $a=2$ must be KEPT because a derivative vanishing at an isolated point ($r'(x)=3x^2$ at $x=0$) does not break strict monotonicity (think $x^3$), while $a=6$ must be DROPPED because a derivative vanishing on a whole interval (the flat line) does. Confusing these two kinds of stationary behaviour is exactly the difference between the right answer $4$ and the wrong answers $3$ or $5$. The meta-lesson: 'continuity' and 'injectivity' are independent gates — solve them separately, and watch the endpoints of every inequality with a derivative-sign argument, not a reflex."
  },
  {
    "theme": "parametric",
    "themeLabel": "Parametric Continuity",
    "title": "The Largest Hole You Are Allowed to Fill",
    "difficulty": 5,
    "task": "Patch the removable discontinuity, then maximize the patched value over the constrained parameter family",
    "tags": [
      "removable-discontinuity",
      "parametric-family",
      "constrained-optimization",
      "difference-of-squares",
      "boundary-vs-interior",
      "degenerate-case"
    ],
    "statement": "For real parameters $a,b$, define\n\\[\nf_{a,b}(x)=\\frac{\\cos(ax)-\\cos(bx)}{x^{2}}\\quad (x\\neq 0),\\qquad f_{a,b}(0)=\\lambda ,\n\\]\nand let $\\lambda=\\lambda(a,b)$ be chosen so that $f_{a,b}$ is continuous at $x=0$ (i.e. $\\lambda$ fills the removable discontinuity).\n\n(a) Compute $\\lambda(a,b)$.\n\n(b) Now restrict the pair $(a,b)$ to the line $a+b=2$ while also requiring $a^{2}+b^{2}\\le 10$. Over this family, find the maximum possible value of the patched height $\\lambda$, and state every pair $(a,b)$ at which it is attained.\n\nThroughout, $f_{a,b}$ must genuinely possess a (removable) discontinuity at $0$ for the patching question to be meaningful; take care to identify any parameter pairs in your family for which this fails, and say what happens to $\\lambda$ there.",
    "answer": "\\[\\boxed{\\lambda_{\\max}=4,\\ \\text{attained only at }(a,b)=(-1,\\,3)}\\]",
    "trap": "There are three baited pits, and a strong solver typically falls into at least one. PIT 1 (the sign-blind reflex / 'coefficients are positive'). After getting $\\lambda=\\tfrac{b^2-a^2}{2}$ and the line $a+b=2$, many students silently treat $a,b$ as nonnegative 'frequencies' and search only $a,b\\ge 0$. On $a+b=2$ that forces $b\\in[0,2]$, giving $\\lambda=2b-2\\le 2$, and they confidently report $\\lambda_{\\max}=2$ at $(a,b)=(0,2)$. This is WRONG: nothing in the problem restricts the sign of $a$, and the true optimum lives at $a=-1<0$. PIT 2 (forgetting the budget makes the problem ill-posed). On the line, $\\lambda=\\tfrac{(b-a)(b+a)}{2}=\\tfrac{(b-a)\\cdot 2}{2}=b-a$, which is UNBOUNDED above as you slide along the unconstrained line ($b\\to+\\infty$). A student who drops the constraint $a^2+b^2\\le 10$ concludes 'no maximum / supremum $=+\\infty$.' The disk is precisely what caps the seam height; with $a+b=2$ it forces $|b-a|\\le 4$ (since $a^2+b^2=\\tfrac{(a+b)^2+(b-a)^2}{2}=2+\\tfrac{(b-a)^2}{2}\\le 10$), so $\\lambda=b-a\\le 4$, with equality only when $a^2+b^2=10$ exactly — the optimum is forced onto the boundary circle, not the interior. PIT 3 (the degenerate non-discontinuity, and its symmetric impostor). When $a=b$ the numerator $\\cos(ax)-\\cos(bx)\\equiv 0$, so $f_{a,b}\\equiv 0$: there is NO removable discontinuity at all (the natural value is just $0$, and $\\lambda=0$ trivially), yet $(a,b)=(1,1)$ sits right on the line $a+b=2$ and must be discussed, not optimized over as if it were a genuine seam. The mirror point $(a,b)=(3,-1)$ — the other intersection of the line with the circle — is the global MINIMUM $\\lambda=-4$, and is a tempting 'by symmetry the answer is $\\pm 4$, take $+4$ at $(3,-1)$' slip: the maximizer is $(-1,3)$, NOT $(3,-1)$ (note $\\lambda=b-a$, so big $\\lambda$ wants $b$ large and $a$ small/negative). Anyone who maximizes $a-b$, or reports the wrong intersection point, or never realizes the maximizer has a negative coefficient, gets the height right but the parameters wrong — or the height wrong entirely.",
    "solutions": [
      {
        "name": "Removable-limit via half-angle, then difference-of-squares + sum/difference substitution",
        "steps": [
          "Part (a). For continuity at $0$ we need $\\lambda=\\lim_{x\\to 0}\\dfrac{\\cos(ax)-\\cos(bx)}{x^{2}}$. Use the sum-to-product identity $\\cos(ax)-\\cos(bx)=-2\\sin\\!\\big(\\tfrac{(a+b)x}{2}\\big)\\sin\\!\\big(\\tfrac{(a-b)x}{2}\\big)$. As $x\\to 0$, $\\sin(\\theta x)\\sim \\theta x$, so the numerator $\\sim -2\\cdot\\tfrac{(a+b)x}{2}\\cdot\\tfrac{(a-b)x}{2}=-\\tfrac{(a+b)(a-b)}{2}x^{2}=-\\tfrac{a^{2}-b^{2}}{2}x^{2}=\\tfrac{b^{2}-a^{2}}{2}x^{2}$. Dividing by $x^{2}$ and taking the limit gives $\\boxed{\\lambda(a,b)=\\dfrac{b^{2}-a^{2}}{2}}$. (Equivalently, $\\cos\\theta=1-\\tfrac{\\theta^2}{2}+O(\\theta^4)$ gives $\\cos(ax)-\\cos(bx)=\\tfrac{b^2-a^2}{2}x^2+O(x^4)$, same result.)",
          "Part (b). On the line $a+b=2$, factor the patched height: $\\lambda=\\dfrac{b^{2}-a^{2}}{2}=\\dfrac{(b-a)(b+a)}{2}=\\dfrac{(b-a)\\cdot 2}{2}=b-a$. So maximizing the seam height is exactly maximizing $b-a$ along the line, subject to the budget $a^{2}+b^{2}\\le 10$.",
          "Convert the budget into a bound on $b-a$ using the algebraic identity $a^{2}+b^{2}=\\dfrac{(a+b)^{2}+(b-a)^{2}}{2}$. With $a+b=2$ this is $a^{2}+b^{2}=\\dfrac{4+(b-a)^{2}}{2}=2+\\dfrac{(b-a)^{2}}{2}$. The constraint $a^{2}+b^{2}\\le 10$ becomes $2+\\dfrac{(b-a)^{2}}{2}\\le 10$, i.e. $(b-a)^{2}\\le 16$, i.e. $-4\\le b-a\\le 4$.",
          "Hence $\\lambda=b-a\\le 4$, with equality iff $b-a=4$ AND $a+b=2$, i.e. $b=3,\\ a=-1$; this pair indeed lies on the boundary circle ($a^2+b^2=1+9=10$), so it is feasible. The maximum patched height is $\\boxed{\\lambda_{\\max}=4}$, attained only at $\\boxed{(a,b)=(-1,3)}$.",
          "Degenerate check (PIT 3). The point $(1,1)$ on the line has $a=b$, so $f\\equiv 0$ with no genuine discontinuity and $\\lambda=0$; it is not a competitor for the maximum. The other line-circle intersection $(3,-1)$ gives $\\lambda=b-a=-1-3=-4$, the global minimum — not the maximum. The maximizer $(-1,3)$ has a negative coefficient $a=-1$, which is why a 'positive-coefficients' search misses it and reports the too-small $\\lambda=2$. None of this disturbs the conclusion: $\\boxed{\\lambda_{\\max}=4\\ \\text{at}\\ (a,b)=(-1,3)}$."
        ]
      },
      {
        "name": "Single-variable reduction and monotonicity on the feasible segment",
        "steps": [
          "From part (a), $\\lambda=\\dfrac{b^{2}-a^{2}}{2}$. Eliminate $a$ using $a=2-b$: $\\lambda(b)=\\dfrac{b^{2}-(2-b)^{2}}{2}=\\dfrac{b^{2}-(4-4b+b^{2})}{2}=\\dfrac{4b-4}{2}=2b-2$. So along the line, $\\lambda$ is an increasing affine function of $b$ — its maximum sits at the largest admissible $b$.",
          "Find the admissible range of $b$ from the budget. Substituting $a=2-b$ into $a^{2}+b^{2}\\le 10$: $(2-b)^{2}+b^{2}\\le 10\\Rightarrow 2b^{2}-4b+4\\le 10\\Rightarrow 2b^{2}-4b-6\\le 0\\Rightarrow b^{2}-2b-3\\le 0\\Rightarrow (b-3)(b+1)\\le 0$, giving $b\\in[-1,3]$. Thus the feasible parameters form the closed segment of the line from $(3,-1)$ (at $b=-1$) to $(-1,3)$ (at $b=3$).",
          "Since $\\lambda(b)=2b-2$ is strictly increasing in $b$, its maximum on $b\\in[-1,3]$ occurs at the right endpoint $b=3$, where $a=2-3=-1$, giving $\\lambda=2(3)-2=4$. The minimum is at $b=-1$: $\\lambda=-4$ at $(3,-1)$. Therefore $\\boxed{\\lambda_{\\max}=4}$ at $(a,b)=(-1,3)$, attained uniquely (the function is strictly monotone, so no other point ties).",
          "Genuine-discontinuity audit. The interior point $b=1$ (i.e. $a=b=1$) makes the numerator vanish identically, $f\\equiv 0$: no removable seam, $\\lambda=0$. This sits strictly inside the segment and is consistent with $\\lambda(1)=2(1)-2=0$, but it is not an extremum and not a true discontinuity — it is exactly the parameter pair the problem warns to flag. The maximum at $b=3$ is a genuine $0/0$ removable point: there $\\cos(-x)-\\cos(3x)\\to 0$ and the patched value $4$ removes the hole, confirming $\\boxed{\\lambda_{\\max}=4\\ \\text{at}\\ (a,b)=(-1,3)}$."
        ]
      },
      {
        "name": "Symmetric line parametrization (centering the family)",
        "steps": [
          "From part (a), $\\lambda=\\dfrac{b^{2}-a^{2}}{2}$. Parametrize the line $a+b=2$ symmetrically about its midpoint $(1,1)$ by a single parameter $t$: set $a=1-t,\\ b=1+t$ (then $a+b=2$ automatically, and $t=\\tfrac{b-a}{2}$). This change of variable is the natural one because it diagonalizes the difference of squares.",
          "Compute the objective: $\\lambda=\\dfrac{(1+t)^{2}-(1-t)^{2}}{2}=\\dfrac{4t}{2}=2t$. So $\\lambda=2t$ is linear and increasing in $t$; maximizing $\\lambda$ means pushing $t$ as large as the budget allows.",
          "Impose the budget in the same variable: $a^{2}+b^{2}=(1-t)^{2}+(1+t)^{2}=2+2t^{2}\\le 10\\Rightarrow t^{2}\\le 4\\Rightarrow -2\\le t\\le 2$. Hence $\\lambda=2t\\le 4$, with equality at $t=2$, i.e. $a=1-2=-1,\\ b=1+2=3$. So $\\boxed{\\lambda_{\\max}=4}$ at $(a,b)=(-1,3)$ (and the minimum $\\lambda=-4$ is at $t=-2$, the impostor point $(3,-1)$).",
          "Lagrange cross-check on the binding boundary. The unconstrained-on-the-line height $\\lambda=2t$ has no interior critical point ($\\tfrac{d}{dt}(2t)=2\\neq 0$), so the optimum must lie on the budget boundary $a^{2}+b^{2}=10$; the two boundary points are $t=\\pm 2$, and the larger $\\lambda$ is at $t=+2$. The degenerate seamless point $t=0$ ($a=b=1$, $f\\equiv 0$) is the unique place the discontinuity disappears, lying exactly at the symmetry center — neither a maximizer nor a minimizer. The verdict stands: $\\boxed{\\lambda_{\\max}=4\\ \\text{at}\\ (a,b)=(-1,3)}$."
        ]
      }
    ],
    "remark": "Insight: the whole problem turns on the identity $\\lambda=\\dfrac{b^{2}-a^{2}}{2}=\\dfrac{(b-a)(b+a)}{2}$, which on the line $b+a=2$ collapses to the strikingly simple $\\lambda=b-a$. Once you see this, the optimization is not a calculus grind but a one-line observation: maximize the gap $b-a$ under a quadratic budget. The constraint $a^{2}+b^{2}\\le 10$ is doing real work — without it the seam height is unbounded along the line, so the problem is only well-posed because the budget caps $|b-a|$ via $a^{2}+b^{2}=2+\\tfrac{(b-a)^{2}}{2}$. The optimum is therefore forced onto the boundary circle (a max of a non-constant linear functional never lands in the interior of a convex region), landing at $(-1,3)$ with $\\lambda=4$. The three traps encode the three ways top students lose this: assuming the coefficients are positive (you miss the negative $a=-1$ and report $2$), forgetting the budget (you claim $+\\infty$), and mishandling the degenerate $a=b$ point where the function is identically zero and there is no hole to fill at all. The chapter moral: a removable-discontinuity value is a function of the parameters, and 'continuity-completion' fuses naturally with optimization — but only after you respect the family's geometry (sign-freedom, the binding budget) and quarantine the degenerate members where the discontinuity silently ceases to exist."
  },
  {
    "theme": "parametric",
    "themeLabel": "Parametric Continuity",
    "title": "Three Unknowns, Two Seams, One Missing Equation",
    "difficulty": 4,
    "task": "Determine the unique parameter triple making f continuous everywhere and differentiable at the exponential seam",
    "tags": [
      "piecewise",
      "quadratic-bridge",
      "degrees-of-freedom",
      "differentiability",
      "two-joins",
      "underdetermined"
    ],
    "statement": "A quadratic arch is to be built so that it springs smoothly from an exponential ramp on the left and lands on a hyperbolic curve on the right. Concretely, let $a,b,c\\in\\mathbb{R}$ and define\n\\[\nf(x)=\\begin{cases} e^{2x}, & x\\le 0,\\\\  a x^{2}+b x+c, & 0<x<1,\\\\  \\dfrac{6}{x+2}, & x\\ge 1.\\end{cases}\n\\]\nThe quadratic middle piece carries three unknown parameters, yet there are only two seams (at $x=0$ and $x=1$). Find all triples $(a,b,c)$ for which $f$ is continuous on all of $\\mathbb{R}$. Among these, impose the additional requirement that $f$ be differentiable at the left seam $x=0$ (where the arch meets the exponential ramp), and determine the unique resulting triple $(a,b,c)$. Finally state whether the $f$ you obtain is differentiable at the right seam $x=1$ as well.",
    "answer": "\\[\\boxed{(a,b,c)=(-1,\\,2,\\,1)}\\]",
    "trap": "The reflexive move is a parameter count gone wrong. Seeing three unknowns $a,b,c$, a strong student declares 'I need three equations' and then either (i) panics that two seams give only two equations and concludes the problem is underdetermined / has no unique answer, or (ii) manufactures a third equation by imposing differentiability at the WRONG seam, or at BOTH. Continuity does give exactly two equations: $c=e^{0}=1$ at $x=0$ and $a+b+c=\\tfrac{6}{1+2}=2$ at $x=1$, i.e. $a+b=1$ with $c=1$ — a genuine one-parameter family $(a,b,c)=(t,\\,1-t,\\,1)$, so continuity alone canNOT pin a unique answer. The single extra constraint is the prescribed differentiability at $x=0$: matching the slope of $e^{2x}$ there gives $b=\\left.\\tfrac{d}{dx}e^{2x}\\right|_{0}=2$, hence $a=-1$. That is the third equation, and it is the RIGHT one. The deeper conceptual error is to assume that 'smooth' must mean differentiable at every seam: a smart student tries to also force differentiability at $x=1$, matching $2a+b$ to the hyperbola's slope $-\\tfrac{6}{(x+2)^2}\\big|_{1}=-\\tfrac23$. That over-determines the system — three constraints ($c=1$, $a+b=1$, $b=2$) already fix all three unknowns, and the fourth condition $2a+b=-\\tfrac23$ becomes $0=-\\tfrac23$, FALSE. So no continuous $f$ here can be differentiable at both seams; demanding it yields the empty set, and a student who 'solves' the four-equation system by quietly dropping the inconsistent one lands on a different, wrong triple. Two continuity equations plus exactly one differentiability equation is the correct count: differentiability at a join is an INDEPENDENT degree of freedom from continuity at that join, and you get to spend it at one seam only.",
    "solutions": [
      {
        "name": "Count the constraints: two continuity equations leave a free parameter, one differentiability equation spends it",
        "steps": [
          "Continuity at the left seam $x=0$. The left limit is $\\lim_{x\\to 0^-}e^{2x}=1$ and the value from the middle piece is $\\lim_{x\\to0^+}(ax^2+bx+c)=c$, with $f(0)=e^0=1$. Continuity forces $c=1$.",
          "Continuity at the right seam $x=1$. The middle piece gives $\\lim_{x\\to1^-}(ax^2+bx+c)=a+b+c$ and the right piece gives $f(1)=\\tfrac{6}{1+2}=2$. Continuity forces $a+b+c=2$, i.e. with $c=1$, $a+b=1$. So far only two equations: the continuous solutions form the one-parameter family $(a,b,c)=(t,\\,1-t,\\,1)$, $t\\in\\mathbb{R}$ — continuity alone does NOT determine a unique triple.",
          "Differentiability at the left seam $x=0$. The left derivative is $\\tfrac{d}{dx}e^{2x}\\big|_{0}=2e^{0}=2$; the right (middle-piece) derivative at $0$ is $(2ax+b)\\big|_{0}=b$. Differentiability requires $b=2$. (Continuity at $x=0$, already secured, is a prerequisite — and here it is the second, independent condition this seam provides.)",
          "Combine. From $b=2$ and $a+b=1$ we get $a=-1$; and $c=1$. Thus the unique triple is $(a,b,c)=(-1,2,1)$, giving the middle piece $-x^2+2x+1=2-(x-1)^2$. $\\boxed{(a,b,c)=(-1,2,1)}$.",
          "Differentiable at $x=1$ too? The middle-piece slope there is $(2ax+b)\\big|_{1}=2a+b=2(-1)+2=0$. The hyperbola's slope is $\\tfrac{d}{dx}\\tfrac{6}{x+2}\\big|_{1}=-\\tfrac{6}{(x+2)^2}\\big|_{1}=-\\tfrac{6}{9}=-\\tfrac23\\ne 0$. So $f$ is continuous but NOT differentiable at $x=1$: continuity used up both seams, differentiability could be bought at only one."
        ]
      },
      {
        "name": "Parametrise the continuous family, then select with the slope condition",
        "steps": [
          "Impose the two continuity equations first to eliminate redundancy. From step 1–2 of Solution 1, every continuous choice is $c=1$ and $b=1-a$, so the middle piece is $g_a(x)=ax^2+(1-a)x+1$, a one-parameter family indexed by $a$. Each member already matches values at both seams; we now choose $a$ by a derivative condition.",
          "Compute the left-seam slope of $g_a$: $g_a'(x)=2ax+(1-a)$, so $g_a'(0)=1-a$. The exponential's slope at $0$ is $2$. Differentiability at $x=0$ means $1-a=2$, hence $a=-1$.",
          "Back-substitute: $b=1-a=2$, $c=1$. The unique smooth-at-the-left-seam member of the family is $g_{-1}(x)=-x^2+2x+1$. $\\boxed{(a,b,c)=(-1,2,1)}$.",
          "Sanity on the right seam: $g_{-1}'(1)=2(-1)(1)+(1-(-1))=-2+2=0$, while the hyperbola has slope $-\\tfrac23$ at $x=1$; they differ, so within this continuous family no choice of $a$ can fix the left-seam slope AND the right-seam slope simultaneously. The general right-seam slope is $g_a'(1)=2a+(1-a)=a+1$, so differentiability at $x=1$ would force $a+1=-\\tfrac23$, i.e. $a=-\\tfrac53\\ne-1$. The two slope demands ($a=-1$ at the left, $a=-\\tfrac53$ at the right) are incompatible, confirming differentiability is affordable at exactly one seam."
        ]
      },
      {
        "name": "Linear-algebra view: rank of the constraint system",
        "steps": [
          "Write the conditions as linear equations in the vector $(a,b,c)$. Continuity at $0$: $0\\cdot a+0\\cdot b+1\\cdot c=1$. Continuity at $1$: $a+b+c=2$. Differentiability at $0$ (slope match): $0\\cdot a+1\\cdot b+0\\cdot c=2$. The coefficient matrix is $\\begin{pmatrix}0&0&1\\\\ 1&1&1\\\\ 0&1&0\\end{pmatrix}$ with right-hand side $(1,2,2)^{\\!\\top}$.",
          "Its determinant is $\\det\\begin{pmatrix}0&0&1\\\\ 1&1&1\\\\ 0&1&0\\end{pmatrix}=1\\cdot\\det\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}=1\\ne0$, so the $3\\times3$ system has full rank $3$ and a unique solution — exactly three independent constraints for three unknowns.",
          "Solving: $c=1$ (row 1), $b=2$ (row 3), then $a=2-b-c=2-2-1=-1$ (row 2). $\\boxed{(a,b,c)=(-1,2,1)}$.",
          "Why a fourth equation breaks it: appending differentiability at $x=1$ adds the row $2a+b=-\\tfrac23$, giving a $4\\times3$ system. With the unique solution above, $2a+b=2(-1)+2=0\\ne-\\tfrac23$, so the augmented system is inconsistent (rank of coefficient block $3$, rank of augmented matrix $4$): no triple satisfies all four. Hence the differentiability budget is one seam, and spending it at $x=0$ yields $(-1,2,1)$ while $x=1$ stays a corner."
        ]
      }
    ],
    "remark": "Insight: continuity and differentiability at a seam are independent constraints, and the right way to read a piecewise-parameter problem is to COUNT them, not to count seams. Here three unknowns $a,b,c$ meet two seams, but the seams supply only two continuity equations, leaving a genuine one-parameter family $(t,1-t,1)$ — continuity alone is underdetermined, the missing equation is real, not an arithmetic oversight. The single differentiability condition at $x=0$ is precisely the third, independent equation (a full-rank $3\\times3$ system), collapsing the family to the unique $(-1,2,1)$. The trap that fells strong students is the unexamined belief that 'smooth' means differentiable at every join: forcing differentiability at both seams over-determines the system to inconsistency ($0=-\\tfrac23$), so the obtained $f$ is deliberately a corner at $x=1$. The transferable rule: each unknown parameter buys you one constraint; continuity at $n$ joins gives $n$ equations, and every additional smoothness requirement (matching a derivative) is one more equation you may impose only until the count reaches the number of free parameters — beyond that, the geometry of the surrounding curves decides whether it is even possible."
  },
  {
    "theme": "parametric",
    "themeLabel": "Parametric Continuity",
    "title": "The Parameter That Lives in the Base, the Exponent, and the Hole",
    "difficulty": 5,
    "task": "Find every real pair of parameters that closes the removable discontinuity at the origin",
    "tags": [
      "removable-discontinuity",
      "exp-log-expansion",
      "indeterminate",
      "two-conditions",
      "transcendental-matching",
      "casework"
    ],
    "statement": "The same real parameter $a$ is wired into three places at once \\u2014 the base of a power, the exponent of a competing exponential through a second parameter $b$, and even the value assigned to the hole. For real constants $a,b$ define\n\\[\nf(x)=\\begin{cases}\\dfrac{(1+ax)^{1/x}-e^{\\,b}}{x}, & x\\neq 0,\\\\ -\\dfrac{(3a-2)}{2}\\,e^{\\,a}, & x=0.\\end{cases}\n\\]\nDetermine all pairs $(a,b)\\in\\mathbb{R}^2$ for which $f$ is continuous at $x=0$. (Continuity here means the two-sided limit $\\lim_{x\\to 0}f(x)$ exists, is finite, and equals the prescribed value $f(0)$.)",
    "answer": "\\[\\boxed{(a,b)\\in\\{(1,1),\\,(2,2)\\}}\\]",
    "trap": "The fatal shortcut is to treat this as a single finite-limit match. A strong student writes $(1+ax)^{1/x}\\to e^{a}$, declares the numerator $\\to e^{a}-e^{b}$, equates that to the value and \"solves one equation\" \\u2014 ignoring that the denominator $x\\to 0$. The limit is $0/0$ only when the numerator also vanishes, and a nonzero numerator forces $f\\to\\pm\\infty$ (it genuinely blows up: with $a=1,b=2$ the right limit is $-\\infty$, the left $+\\infty$). So continuity has a hidden FIRST gate, $e^{a}=e^{b}\\Rightarrow b=a$, which is not an equation to solve for a value but a structural prerequisite for the limit to be finite at all; skipping it loses half the logic. The second, subtler error appears even after correctly setting $b=a$: students stop at the leading order, reasoning \"numerator $\\to 0$, denominator $\\to 0$, so by L'H\\u00f4pital or by canceling, the limit is just the next term's sign\" and never actually compute the coefficient \\u2014 yet the prescribed hole value $-\\tfrac{3a-2}{2}e^{a}$ is itself parameter-dependent, so matching it to the true second-order coefficient $-\\tfrac{a^{2}}{2}e^{a}$ is a genuine quadratic $a^{2}-3a+2=0$ with TWO roots. A student who eyeballs \"the $x^{1}$ term\" without expanding $(1+ax)^{1/x}=e^{a}\\bigl(1-\\tfrac{a^{2}}{2}x+\\cdots\\bigr)$ to the correct order will either miss a root or invent a wrong one (e.g. concluding $a=3$ \"works\", but $-\\tfrac{9}{2}e^{3}\\neq-\\tfrac{7}{2}e^{3}$). Continuity here is two independent conditions \\u2014 a finiteness gate $b=a$ and a coefficient match $a^{2}-3a+2=0$ \\u2014 not one.",
    "solutions": [
      {
        "name": "Exp\\u2013log expansion to second order (the honest route)",
        "steps": [
          "Write the base in exponential form: $(1+ax)^{1/x}=\\exp\\!\\Bigl(\\tfrac{1}{x}\\ln(1+ax)\\Bigr)$. Using $\\ln(1+ax)=ax-\\tfrac{(ax)^2}{2}+\\tfrac{(ax)^3}{3}-\\cdots$, the exponent is $\\tfrac{1}{x}\\ln(1+ax)=a-\\tfrac{a^{2}}{2}x+\\tfrac{a^{3}}{3}x^{2}-\\cdots$, which tends to $a$ as $x\\to 0$. Hence $(1+ax)^{1/x}\\to e^{a}$.",
          "Finiteness gate (Condition 1). The denominator is $x\\to 0$, so $\\lim_{x\\to0}f(x)$ can be finite only if the numerator $(1+ax)^{1/x}-e^{b}\\to 0$, i.e. $e^{a}=e^{b}$. Since $e^{(\\cdot)}$ is injective, this forces $b=a$. If instead $b\\neq a$ the numerator tends to the nonzero constant $e^{a}-e^{b}$ and $f(x)\\sim\\tfrac{e^{a}-e^{b}}{x}\\to\\pm\\infty$, so no continuity is possible.",
          "Now set $b=a$ and expand to one more order. Exponentiating, $(1+ax)^{1/x}=e^{a}\\exp\\!\\Bigl(-\\tfrac{a^{2}}{2}x+\\tfrac{a^{3}}{3}x^{2}-\\cdots\\Bigr)=e^{a}\\Bigl(1-\\tfrac{a^{2}}{2}x+O(x^{2})\\Bigr)$. Therefore $(1+ax)^{1/x}-e^{a}=e^{a}\\bigl(-\\tfrac{a^{2}}{2}x+O(x^{2})\\bigr)$, and dividing by $x$, $\\lim_{x\\to0}f(x)=-\\tfrac{a^{2}}{2}e^{a}$ (the same two-sided value from both directions, since only even/odd powers of $x$ appear symmetrically in the expansion).",
          "Coefficient match (Condition 2). Continuity demands this limit equal the prescribed hole value: $-\\tfrac{a^{2}}{2}e^{a}=-\\tfrac{3a-2}{2}e^{a}$. Cancel $e^{a}>0$ and multiply by $-2$: $a^{2}=3a-2$, i.e. $a^{2}-3a+2=0$, so $(a-1)(a-2)=0$ and $a\\in\\{1,2\\}$.",
          "Combine both gates: $b=a$ together with $a\\in\\{1,2\\}$. $\\boxed{(a,b)\\in\\{(1,1),(2,2)\\}}$."
        ]
      },
      {
        "name": "L'H\\u00f4pital after securing the finiteness gate",
        "steps": [
          "As above, $(1+ax)^{1/x}\\to e^{a}$, so a finite two-sided limit requires the numerator to vanish: $e^{b}=e^{a}\\Rightarrow b=a$. Without this the form is (nonzero)$/0$ and diverges; L'H\\u00f4pital does not even apply. Assume henceforth $b=a$, giving the indeterminate $\\tfrac{0}{0}$.",
          "Let $g(x)=(1+ax)^{1/x}$ so the numerator is $g(x)-e^{a}$ with denominator $x$. By L'H\\u00f4pital, $\\lim_{x\\to0}\\tfrac{g(x)-e^{a}}{x}=\\lim_{x\\to0}g'(x)$, provided the latter exists. Differentiate via logarithms: with $\\ln g=\\tfrac{\\ln(1+ax)}{x}$, $\\tfrac{g'(x)}{g(x)}=\\dfrac{\\tfrac{ax}{1+ax}-\\ln(1+ax)}{x^{2}}$.",
          "Evaluate the bracket as $x\\to0$ using $\\tfrac{ax}{1+ax}=ax-a^{2}x^{2}+O(x^{3})$ and $\\ln(1+ax)=ax-\\tfrac{a^{2}}{2}x^{2}+O(x^{3})$: the difference is $-\\tfrac{a^{2}}{2}x^{2}+O(x^{3})$, so $\\tfrac{g'(x)}{g(x)}\\to-\\tfrac{a^{2}}{2}$. Since $g(x)\\to e^{a}$, we get $\\lim_{x\\to0}g'(x)=-\\tfrac{a^{2}}{2}e^{a}$, hence $\\lim_{x\\to0}f(x)=-\\tfrac{a^{2}}{2}e^{a}$.",
          "Impose equality with the prescribed value $-\\tfrac{3a-2}{2}e^{a}$: dividing out $-\\tfrac{e^{a}}{2}$ gives $a^{2}=3a-2$, so $a^{2}-3a+2=0$ and $a=1$ or $a=2$. With $b=a$, $\\boxed{(a,b)\\in\\{(1,1),(2,2)\\}}$."
        ]
      },
      {
        "name": "Substitution $t=1/x$ and the parameter-as-variable view",
        "steps": [
          "Finiteness gate first: as $x\\to0$, $(1+ax)^{1/x}\\to e^{a}$, so the limit is finite only if $e^{b}=e^{a}$, i.e. $b=a$; otherwise $f\\to\\pm\\infty$. Fix $b=a$.",
          "Introduce $u=(1+ax)^{1/x}-e^{a}$, the numerator. We know $u\\to0$, and we want $\\lim u/x$. Factor $e^{a}$: $u=e^{a}\\bigl(e^{\\,h(x)}-1\\bigr)$ where $h(x)=\\tfrac{1}{x}\\ln(1+ax)-a$. As $x\\to0$, $h(x)\\to0$, so $e^{h}-1\\sim h$, giving $\\tfrac{u}{x}\\sim e^{a}\\,\\tfrac{h(x)}{x}$.",
          "Compute $\\tfrac{h(x)}{x}=\\dfrac{\\ln(1+ax)-ax}{x^{2}}$. Since $\\ln(1+ax)-ax=-\\tfrac{a^{2}}{2}x^{2}+O(x^{3})$, this ratio $\\to-\\tfrac{a^{2}}{2}$. Therefore $\\lim_{x\\to0}f(x)=\\lim_{x\\to0}\\tfrac{u}{x}=e^{a}\\cdot\\bigl(-\\tfrac{a^{2}}{2}\\bigr)=-\\tfrac{a^{2}}{2}e^{a}$, with the $O(x^{3})$ correction killing any one-sided discrepancy.",
          "Set this equal to the hole value and read it as an equation in the parameter $a$ itself: $-\\tfrac{a^{2}}{2}e^{a}=-\\tfrac{3a-2}{2}e^{a}\\iff a^{2}-3a+2=0\\iff a\\in\\{1,2\\}$. Pairing with $b=a$: $\\boxed{(a,b)\\in\\{(1,1),(2,2)\\}}$. (Sanity: at $a=1$, $f(0)=-\\tfrac12 e$; at $a=2$, $f(0)=-2e^{2}$, matching $-\\tfrac{a^2}{2}e^a$.)"
        ]
      }
    ],
    "remark": "Insight: when one parameter is woven into the base, the exponent, AND the target value, continuity is never a single equation \\u2014 it is a chain of gates, each living at a different order of vanishing. The first gate is purely structural: for an expression of the form (something $-$ constant)$/x$ to have any finite limit, the numerator must vanish, which here injects the transcendental relation $b=a$ before any numbers appear. Only after that gate opens does the problem become a real $0/0$, and only the SECOND-order term of the exp\\u2013log expansion, $(1+ax)^{1/x}=e^{a}(1-\\tfrac{a^2}{2}x+\\cdots)$, carries the information that matches the parameter-dependent hole value \\u2014 producing a quadratic with two honest roots, not the single value a one-step substitution would suggest. The transferable lesson for the ranker: identify the order at which your indeterminacy lives, expand to exactly that order (no fewer terms), and remember that a finiteness requirement is itself a continuity condition. Reading $-\\tfrac{a^2}{2}e^a=-\\tfrac{3a-2}{2}e^a$ as an equation in the parameter rather than in $x$ is what converts a limit computation into a genuine multi-solution casework."
  },
  {
    "theme": "parametric",
    "themeLabel": "Parametric Continuity",
    "title": "Two Roots Walk Up to the Seam, Only One Is Allowed In",
    "difficulty": 5,
    "task": "Find every real value of the parameter making f continuous at the join, after rejecting the candidate forbidden by the function's own domain",
    "tags": [
      "removable-limit",
      "quadratic-in-parameter",
      "logarithm-domain",
      "spurious-root",
      "one-sided-limits",
      "casework"
    ],
    "statement": "A single real parameter $a$ is to be tuned so that a piecewise function closes smoothly at the origin. Define\n\\[\nf(x)=\\begin{cases}\\dfrac{e^{ax}-1}{x}, & x<0,\\\\ a^{2}\\,\\dfrac{1-\\cos 2x}{2x^{2}}\\;-\\;6\\;+\\;x\\,\\ln a, & x>0,\\end{cases}\\qquad f(0)=a^{2}-6 .\n\\]\nNote that the formula on $x>0$ contains $\\ln a$, so the right branch is a genuine real-valued function only for those $a$ in its natural domain. Determine all real values of $a$ for which $f$ is continuous at $x=0$.\n\nYou must (i) evaluate each one-sided limit honestly as a true $0/0$ limit, not by inspection; (ii) solve the resulting equation in $a$; and (iii) decide, with reasons, which of the candidate values actually deliver a continuous real function and which must be discarded.",
    "answer": "\\[\\boxed{a=3}\\]",
    "trap": "The seam-matching equation is a QUADRATIC in $a$, and its two roots have opposite signs — the bait is to report both. Carrying out the limits, the left branch gives $\\lim_{x\\to0^-}\\frac{e^{ax}-1}{x}=a$ and the right branch gives $\\lim_{x\\to0^+}\\big(a^{2}\\frac{1-\\cos 2x}{2x^{2}}-6+x\\ln a\\big)=a^{2}-6$ (the $x\\ln a$ term vanishes in the limit, which is exactly what lulls the solver). Continuity then forces $a=a^{2}-6$, i.e. $a^{2}-a-6=0$, i.e. $(a-3)(a+2)=0$, so the bare algebra offers TWO candidates $a=3$ and $a=-2$. PIT 1 (the symmetric reflex): a strong student writes 'continuity $\\Rightarrow a\\in\\{3,-2\\}$' and stops, treating the quadratic like any continuity equation whose every root is admissible. PIT 2 (the vanishing-term fallacy): because $x\\ln a\\to0$, students conclude $\\ln a$ is 'irrelevant to the limit' and therefore irrelevant to the problem — but $\\ln a$ is not a limit issue, it is a DOMAIN issue: if $a\\le 0$ the symbol $\\ln a$ is not a real number, so the right-branch formula does not define a real function at all, and there is no right-hand limit to match. At $a=-2$, $\\ln(-2)$ is non-real, so $a=-2$ is inadmissible no matter how nicely the numbers $-2=(-2)^2-6$ line up. PIT 3 (rescue by absolute value): a clever student 'repairs' $\\ln a$ to $\\ln|a|$ and re-admits $a=-2$ — but the problem's function is as written; $\\ln a$, not $\\ln|a|$, and the strict inequality $a>0$ (logarithm, not even-root, so $a=0$ is also out, though $0$ is not a root here) is forced by the very definition of the right piece. Hence exactly one root survives, $a=3$; the student who reports $\\{3,-2\\}$, or who never realizes the negative root is killed by a non-limit domain constraint hiding behind a term that vanishes in the limit, gets the wrong answer set.",
    "solutions": [
      {
        "name": "Honest two-sided limits, quadratic in a, then domain filter",
        "steps": [
          "Left-hand limit ($x\\to0^-$). The branch $\\frac{e^{ax}-1}{x}$ is $\\frac{0}{0}$ at $x=0$. By the standard limit $\\lim_{t\\to0}\\frac{e^{t}-1}{t}=1$ with $t=ax$ (or one step of L'Hopital: $\\frac{a e^{ax}}{1}\\to a$), we get $\\lim_{x\\to0^-}\\frac{e^{ax}-1}{x}=a$. So the left limit is exactly $a$, linear in the parameter.",
          "Right-hand limit ($x\\to0^+$). In $a^{2}\\frac{1-\\cos 2x}{2x^{2}}-6+x\\ln a$, the only nontrivial part is the $\\frac{0}{0}$ factor $\\frac{1-\\cos2x}{2x^{2}}$. Using $1-\\cos2x=2\\sin^{2}x$, it equals $\\frac{2\\sin^{2}x}{2x^{2}}=\\big(\\frac{\\sin x}{x}\\big)^{2}\\to1$. The term $x\\ln a\\to0$. Hence $\\lim_{x\\to0^+}f(x)=a^{2}\\cdot1-6+0=a^{2}-6$.",
          "Match the seam. Since $f(0)=a^{2}-6$ already equals the right limit, continuity at $0$ is exactly 'left limit $=$ right limit': $a=a^{2}-6$. Rearranging, $a^{2}-a-6=0$, which factors as $(a-3)(a+2)=0$, giving the two candidates $a=3$ and $a=-2$.",
          "Apply the hidden domain constraint. The right-branch formula contains $\\ln a$, which is a real number only when $a>0$. For $a=-2$, $\\ln(-2)$ is not real, so the right branch is not a real-valued function near $0^+$ and the right-hand limit does not exist in $\\mathbb{R}$ — there is nothing to match. Thus $a=-2$ is rejected on domain grounds even though it satisfies the bare numerical equation $-2=(-2)^2-6$. The surviving value is $a=3$ (and indeed $\\ln 3$ is real), so $\\boxed{a=3}$."
        ]
      },
      {
        "name": "Taylor expansion of both branches",
        "steps": [
          "Expand the left branch. $e^{ax}=1+ax+\\frac{a^{2}x^{2}}{2}+O(x^{3})$, so $\\frac{e^{ax}-1}{x}=a+\\frac{a^{2}}{2}x+O(x^{2})\\to a$ as $x\\to0^-$. Left limit $=a$.",
          "Expand the right branch. $\\cos2x=1-2x^{2}+\\frac{2}{3}x^{4}+O(x^{6})$, hence $1-\\cos2x=2x^{2}-\\frac{2}{3}x^{4}+\\cdots$ and $\\frac{1-\\cos2x}{2x^{2}}=1-\\frac{x^{2}}{3}+O(x^{4})\\to1$. Therefore the right branch $=a^{2}\\big(1-\\tfrac{x^{2}}{3}+\\cdots\\big)-6+x\\ln a\\to a^{2}-6$ as $x\\to0^+$.",
          "Equate the leading values: $a=a^{2}-6\\Rightarrow a^{2}-a-6=0\\Rightarrow(a-3)(a+2)=0\\Rightarrow a\\in\\{3,-2\\}$ as bare roots. The expansions are legitimate only where the branch is defined; the right branch requires $\\ln a\\in\\mathbb{R}$, i.e. $a>0$.",
          "Filter by $a>0$: discard $a=-2$ (since $\\ln(-2)\\notin\\mathbb{R}$, the right-branch series is meaningless there), keep $a=3$. Hence the unique value making $f$ continuous at $0$ is $\\boxed{a=3}$."
        ]
      },
      {
        "name": "Domain-first elimination, then a one-root check",
        "steps": [
          "Read the domain before computing anything. The right-hand formula uses $\\ln a$, so for $f$ to be a real-valued function on a right-neighbourhood of $0$ we must already have $a>0$. This restricts the search to positive parameters at the outset, so $a=-2$ (or any $a\\le0$) can never be a valid answer regardless of the limit arithmetic.",
          "On $a>0$, compute the one-sided limits: left $=\\lim_{x\\to0^-}\\frac{e^{ax}-1}{x}=a$; right $=\\lim_{x\\to0^+}\\big(a^{2}\\frac{1-\\cos2x}{2x^{2}}-6+x\\ln a\\big)=a^{2}-6$ (both via the standard $0/0$ limits, the $x\\ln a$ term being a finite multiple of $x\\to0$). With $f(0)=a^{2}-6$, continuity reduces to $a=a^{2}-6$.",
          "Solve $a^{2}-a-6=0$ on the admissible set $a>0$. The roots are $a=3$ and $a=-2$; only $a=3$ lies in $(0,\\infty)$. (Quadratic-formula route: $a=\\frac{1\\pm\\sqrt{1+24}}{2}=\\frac{1\\pm5}{2}\\in\\{3,-2\\}$, same conclusion.)",
          "Verify $a=3$ closes the seam: left limit $=3$, right limit $=3^{2}-6=3$, $f(0)=3$, and $\\ln 3$ is real, so all three agree and the function is genuinely continuous at $0$. Therefore $\\boxed{a=3}$."
        ]
      }
    ],
    "remark": "Insight: matching two one-sided limits need not produce a linear equation — here it produces the quadratic $a^{2}-a-6=0$, so 'solve for the parameter' legitimately yields TWO candidates, and the real exam skill is knowing which to discard. The discriminating constraint is not in the limit at all: the term $x\\ln a$ contributes $0$ to the right-hand limit (it lulls you into thinking $\\ln a$ is decorative), yet $\\ln a$ silently demands $a>0$ for the right branch to even be a real function. That separates a domain constraint from a limit computation — a distinction top students blur. The negative root $a=-2$ satisfies the numerical seam equation perfectly ($-2=(-2)^2-6$) and is precisely the spurious solution a quadratic loves to manufacture; it dies on the domain, not on the arithmetic. The transferable lesson: when continuity yields a polynomial in the parameter, enumerate all roots, then test each against every hidden admissibility condition the pieces impose (logarithm $\\Rightarrow$ strictly positive, even root $\\Rightarrow$ nonnegative, denominator $\\Rightarrow$ nonzero) — a continuity 'solution' that places the parameter outside a branch's domain is not a solution at all."
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
    "title": "The Sawtooth Whose Teeth Keep Growing",
    "difficulty": 5,
    "task": "Find every parameter pair making the periodic-looking rule continuous on all of R, or prove none exists",
    "tags": [
      "fractional-part",
      "floor-function",
      "every-integer",
      "arithmetic-progression",
      "no-solution",
      "global-continuity"
    ],
    "statement": "Let $a,b\\in\\mathbb{R}$ and define $f:\\mathbb{R}\\to\\mathbb{R}$ by\n\\[\nf(x)=a\\,\\{x\\}+b\\,\\lfloor x\\rfloor+\\{x\\}\\,\\lfloor x\\rfloor,\n\\]\nwhere $\\lfloor x\\rfloor$ is the greatest integer $\\le x$ and $\\{x\\}=x-\\lfloor x\\rfloor$ is the fractional part. On each unit block $[n,n+1)$ the rule is an ordinary straight line, so $f$ is automatically continuous at every non-integer point; the only places continuity can fail are the integers, where the floor jumps. Determine \\text{every} pair $(a,b)$ for which $f$ is continuous on all of $\\mathbb{R}$. If no such pair exists, prove it and report the solution set.",
    "answer": "\\[\\boxed{\\varnothing}\\]",
    "trap": "The fatal move is to test continuity at one convenient integer and stop. At $x=1$: the left block is $[0,1)$ where $f(x)=a\\{x\\}+0+\\{x\\}\\cdot 0=ax$, giving left-limit $a$; the value is $f(1)=b\\cdot1=b$. Matching gives $b=a$, and a student triumphantly reports 'all $(a,b)$ with $b=a$'. But the seam condition is NOT the same equation at every integer: at integer $m$ the left block is $[m-1,m)$ where the slope is $a+(m-1)$, so the left-limit is $a+(m-1)+b(m-1)$ while the value is $bm$, and continuity forces $a-b+m-1=0$, i.e. $b=a+m-1$ — a DIFFERENT equation for each $m$. A single $(a,b)$ closes at most one seam. A second, subtler reflex is to recall the textbook fact that a pure periodic sawtooth $a\\{x\\}+b$ is continuous only when $a=0$, and to try $a=0$: but the extra term $\\{x\\}\\lfloor x\\rfloor$ makes the slope on $[n,n+1)$ equal to $a+n$, which drifts with $n$ regardless of $a$ — so even $a=0$ leaves a jump at every integer but one. The honest conclusion is that NO pair works: the solution set is empty.",
    "solutions": [
      {
        "name": "Compute the jump at integer m and notice it is an arithmetic progression",
        "steps": [
          "Fix an integer $m$. Just to the left of $m$ we are in the block $[m-1,m)$, where $\\lfloor x\\rfloor=m-1$ and $\\{x\\}=x-(m-1)$, so $f(x)=a\\bigl(x-(m-1)\\bigr)+b(m-1)+\\bigl(x-(m-1)\\bigr)(m-1)$. Letting $x\\to m^-$ (so $\\{x\\}\\to1$) gives the left-limit $L(m)=a\\cdot1+b(m-1)+1\\cdot(m-1)=a+(b+1)(m-1)$.",
          "At $x=m$ itself, $\\{m\\}=0$ and $\\lfloor m\\rfloor=m$, so $f(m)=a\\cdot0+bm+0\\cdot m=bm$; and the right-limit equals $f(m)$ because the block $[m,m+1)$ starts at $\\{x\\}=0$. Hence the only possible discontinuity at $m$ is the jump $J(m)=f(m)-L(m)=bm-\\bigl[a+(b+1)(m-1)\\bigr]=m-1+b-a=\\,(m-1)-(a-b)$.",
          "Continuity at $m$ means $J(m)=0$, i.e. $m=1+(a-b)$. As $m$ ranges over all integers, $J(m)=(m-1)-(a-b)$ is an arithmetic progression in $m$ with common difference $J(m+1)-J(m)=1$; two consecutive jumps differ by exactly $1$, so they cannot both vanish.",
          "Thus for any fixed $(a,b)$ at most one integer ($m=1+a-b$, and only if that number is an integer) is a continuous seam; every other integer is a genuine jump. Continuity on ALL of $\\mathbb{R}$ would require $J(m)=0$ for every integer $m$, which is impossible. No pair $(a,b)$ qualifies: the solution set is $\\boxed{\\varnothing}$."
        ]
      },
      {
        "name": "Slope drift: the blocks cannot align into one continuous graph",
        "steps": [
          "On the block $[n,n+1)$ we have $\\lfloor x\\rfloor=n$, so $f(x)=a(x-n)+bn+(x-n)n=(a+n)(x-n)+bn$: a segment starting at the point $(n,\\,bn)$ with slope $a+n$. The starting heights $bn$ already lie on the line $y=bx$ through the integers, so the integer 'pegs' are consistent among themselves.",
          "Continuity at the right end of the block $[n,n+1)$ requires the segment to arrive exactly at the next peg $(n+1,\\,b(n+1))$. Its arrival height is $(a+n)\\cdot1+bn=a+n+bn$, while the next peg sits at $b(n+1)=bn+b$. Equality demands $a+n+bn=bn+b$, i.e. $n=b-a$.",
          "This says the block can close only when its index $n$ equals the single number $b-a$. But $n$ runs through ALL integers; it cannot equal one fixed number for every block. Geometrically, the slope $a+n$ of successive teeth increases by $1$ each block while the gap to the next peg stays fixed, so the teeth overshoot or undershoot the pegs everywhere except (at most) the lone block with $n=b-a$.",
          "Hence at most one tooth ever meets its peg, and the graph is broken at every other integer. There is no choice of $(a,b)$ that aligns all blocks, so the set of admissible parameters is $\\boxed{\\varnothing}$."
        ]
      },
      {
        "name": "Two-equation contradiction (kill the candidate from a single seam)",
        "steps": [
          "Suppose, for contradiction, that some $(a,b)$ makes $f$ continuous everywhere. Then continuity must hold in particular at $x=1$ and at $x=2$, giving two equations from $J(m)=(m-1)-(a-b)=0$.",
          "At $m=1$: $(1-1)-(a-b)=0\\Rightarrow a-b=0\\Rightarrow b=a$. At $m=2$: $(2-1)-(a-b)=0\\Rightarrow a-b=1\\Rightarrow b=a-1$.",
          "The two requirements $b=a$ and $b=a-1$ force $a=a-1$, i.e. $0=1$, a contradiction. So no $(a,b)$ can satisfy continuity at both $x=1$ and $x=2$ simultaneously.",
          "Since continuity on $\\mathbb{R}$ entails continuity at $x=1$ and $x=2$ at once, the assumption is impossible. Therefore the solution set is $\\boxed{\\varnothing}$."
        ]
      }
    ],
    "remark": "Insight: the rule $a\\{x\\}+b\\lfloor x\\rfloor+\\{x\\}\\lfloor x\\rfloor$ is dressed up to look periodic, but the cross term $\\{x\\}\\lfloor x\\rfloor$ secretly makes the slope on the block $[n,n+1)$ equal to $a+n$ — the teeth of the sawtooth grow steeper by exactly $1$ each step. Continuity at integer $m$ is the equation $J(m)=(m-1)-(a-b)=0$, and the decisive structural fact is that $J(m)$ is an arithmetic progression with common difference $1$: shifting the seam by one integer changes the required relation by a fixed unit, so the conditions across the integers are mutually inconsistent. Two consecutive seams already contradict each other ($b=a$ versus $b=a-1$). The lesson for the global problem is that 'continuous at every integer' is not one equation you may sample at a friendly point — it is a whole family of equations indexed by $m$, and when that family has no common solution the honest answer is the empty set, not the relation you would have read off from a single seam. Even the reflex $a=0$ (borrowed from the pure sawtooth) fails, because the drift comes from the floor-times-fraction term, not from $a$."
  },
  {
    "theme": "parametric",
    "themeLabel": "Parametric Continuity",
    "title": "The Hole That Heals — Unless the Pole Lands On It",
    "difficulty": 4,
    "task": "Classify the singularity at x=1 across all parameters and report every pair making it removable",
    "tags": [
      "removable-discontinuity",
      "double-pole",
      "parameter-dependent",
      "factor-cancellation",
      "casework"
    ],
    "statement": "For real parameters $a,b$ define, on its natural domain $\\mathbb{R}\\setminus\\{1,b\\}$,\n\\[\nf(x)=\\frac{x^{2}-(a+1)x+a}{(x-1)(x-b)}.\n\\]\nThe numerator vanishes at $x=1$, so it is tempting to declare the singularity at $x=1$ harmless for every choice of parameters. Investigate honestly. Call the singularity at $x=1$ \\text{removable} if $\\lim_{x\\to 1}f(x)$ exists as a finite number (so a single re-definition of $f(1)$ restores continuity at $x=1$). Determine the complete set $S$ of pairs $(a,b)$ for which the singularity at $x=1$ is removable, distinguishing the cases where $x=1$ is a simple removable hole, where it is a genuine pole, and where it is a doubly cancelled (twice-removable) point.",
    "answer": "$S=\\{(a,b):b\\neq 1\\}\\cup\\{(1,1)\\}$",
    "trap": "The seductive error is to factor the numerator as $x^{2}-(a+1)x+a=(x-1)(x-a)$, cancel the visible $(x-1)$ against the $(x-1)$ in the denominator, and conclude that $x=1$ is removable for EVERY $(a,b)$ with limit $\\dfrac{1-a}{1-b}$. The cancellation is legitimate only while the denominator contributes a SINGLE factor of $(x-1)$ — that is, only when $b\\neq 1$. If $b=1$ the denominator is $(x-1)^{2}$, and after cancelling one $(x-1)$ the surviving function is $\\dfrac{x-a}{x-1}$, which still blows up at $x=1$ unless the numerator also vanishes there, i.e. unless $a=1$. So at $b=1$ the point $x=1$ is a genuine simple pole for every $a\\neq 1$, and the glib formula $\\dfrac{1-a}{1-b}$ secretly divides by zero. A strong student who never asks 'what if the denominator's zero at $1$ is a DOUBLE zero?' will report 'removable for all $(a,b)$' and miss the entire punctured line $\\{(a,1):a\\neq1\\}$ where the hole is actually a pole.",
    "solutions": [
      {
        "name": "Factor, then split on the multiplicity of the denominator's zero at 1",
        "steps": [
          "Factor the numerator: $x^{2}-(a+1)x+a=(x-1)(x-a)$ (the roots are $1$ and $a$, summing to $a+1$ and multiplying to $a$). Hence $f(x)=\\dfrac{(x-1)(x-a)}{(x-1)(x-b)}$, and the only question at $x=1$ is whether the $(x-1)$ in the denominator is fully cancelled.",
          "Case $b\\neq 1$. Near $x=1$ the factor $(x-b)$ is nonzero, so cancelling the common $(x-1)$ gives $f(x)=\\dfrac{x-a}{x-b}$ on a punctured neighbourhood of $1$, a function continuous at $1$. Thus $\\lim_{x\\to1}f(x)=\\dfrac{1-a}{1-b}$ is finite for EVERY $a$: $x=1$ is a (simple) removable hole, no condition on $a$ at all.",
          "Case $b=1$. Now the denominator is $(x-1)^{2}$, so $f(x)=\\dfrac{(x-1)(x-a)}{(x-1)^{2}}=\\dfrac{x-a}{x-1}$ near $1$. If $a\\neq 1$ the numerator tends to $1-a\\neq0$ while the denominator tends to $0$, giving $\\lim_{x\\to1}f=\\pm\\infty$: a genuine simple pole, NOT removable. If $a=1$ then $f(x)=\\dfrac{x-1}{x-1}=1$, so the limit is $1$ — both factors of $(x-1)$ cancelled, a doubly removable point.",
          "Collecting: $x=1$ is removable exactly when $b\\neq1$ (any $a$), or $b=1$ together with $a=1$. Hence $S=\\{(a,b):b\\neq 1\\}\\cup\\{(1,1)\\}$, i.e. every pair except the punctured line $\\{(a,1):a\\neq1\\}$, and the boxed answer is $\\boxed{S=\\{(a,b):b\\neq 1\\}\\cup\\{(1,1)\\}}$."
        ]
      },
      {
        "name": "Order-of-vanishing (multiplicity) bookkeeping",
        "steps": [
          "Write $N(x)=(x-1)(x-a)$ and $D(x)=(x-1)(x-b)$. At $x=1$ the numerator has a zero of order $\\nu_N=1$ if $a\\neq1$ and order $2$ if $a=1$. The denominator has a zero of order $\\nu_D=1$ if $b\\neq1$ and order $2$ if $b=1$.",
          "A rational function $N/D$ has a removable singularity (finite limit) at a point precisely when the order of the numerator's zero is at least the order of the denominator's zero there: $\\nu_N\\ge \\nu_D$. A pole occurs when $\\nu_N<\\nu_D$.",
          "If $b\\neq1$ then $\\nu_D=1$ and $\\nu_N\\ge1$ always, so $\\nu_N\\ge\\nu_D$ holds for every $a$: removable. If $b=1$ then $\\nu_D=2$, and we need $\\nu_N\\ge2$, i.e. $a=1$; for $a\\neq1$ we have $\\nu_N=1<2=\\nu_D$, a pole.",
          "Therefore removability holds iff ($b\\neq1$) or ($b=1$ and $a=1$), giving $\\boxed{S=\\{(a,b):b\\neq 1\\}\\cup\\{(1,1)\\}}$. The three regimes are: simple removable hole on $b\\neq1$, doubly removable at $(1,1)$, and a pole on the deleted line $b=1,\\,a\\neq1$."
        ]
      },
      {
        "name": "Direct one-sided limits at b=1 expose the pole",
        "steps": [
          "For $b\\neq1$ the computation in Solution 1 already yields the finite value $\\dfrac{1-a}{1-b}$, so removability there needs no further argument. The whole subtlety lives at $b=1$, which we test by one-sided limits.",
          "Set $b=1$, so $f(x)=\\dfrac{x-a}{x-1}$ near $1$ (after one cancellation). Suppose $a\\neq1$, say write $1-a=:c\\neq0$. As $x\\to1^{+}$, $x-1\\to0^{+}$ and $x-a\\to c$, so $f\\to+\\infty$ if $c>0$ and $-\\infty$ if $c<0$; as $x\\to1^{-}$ the sign of $x-1$ flips, so $f$ runs to the opposite infinity. The two one-sided limits are infinite and of opposite sign — unambiguously a pole, not a removable point.",
          "Now take $a=1$ (with $b=1$): $f(x)=\\dfrac{x-1}{x-1}=1$ for all $x\\neq1$, so both one-sided limits equal $1$ and the singularity is removable (in fact $f$ was already the constant $1$ off the hole).",
          "Combining with the $b\\neq1$ regime, the singularity at $x=1$ is removable exactly on $\\{b\\neq1\\}\\cup\\{(1,1)\\}$, so $\\boxed{S=\\{(a,b):b\\neq 1\\}\\cup\\{(1,1)\\}}$."
        ]
      }
    ],
    "remark": "Insight: a shared factor in numerator and denominator does not automatically heal a hole — what matters is the order of vanishing on each side. The denominator here hides a parameter-controlled multiplicity: it carries one factor of $(x-1)$ for generic $b$ but a double factor when the second root $b$ slides onto $1$. The single visible $(x-1)$ in the numerator can absorb a simple zero of the denominator but not a double one, so the very same expression realizes all three textbook behaviours of a rational singularity — removable hole, simple pole, twice-cancelled point — depending only on where the parameters sit. The discipline to extract: before declaring a factor 'cancelled', count multiplicities, and always ask whether a parameter can collapse two distinct roots into a repeated one. The naive value $\\tfrac{1-a}{1-b}$ even advertises its own failure by dividing by zero exactly on the line $b=1$ it forgot to examine."
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
    "trap": "Applying AM-GM to get $f\\ge 4$ and declaring $4$ to be both the answer for the extremes, or computing only the interior critical point and forgetting that on a closed interval the maximum may sit at an endpoint. AM-GM gives the global minimum but says nothing about the maximum on $[1,4]$, which the Extreme Value Theorem guarantees exists and which here lives at the boundary.",
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
    "title": "The Wave That Outruns Every Delta",
    "difficulty": 5,
    "task": "Compute the limiting modulus of continuity and pin down which compactness hypothesis fails",
    "tags": [
      "uniform-continuity",
      "modulus-of-continuity",
      "heine-cantor",
      "compactness",
      "oscillation",
      "open-interval"
    ],
    "statement": "For a function $f$ on an interval $I$, define its modulus of continuity \\[ \\omega_f(\\delta)=\\sup\\bigl\\{\\,|f(x)-f(y)|\\;:\\;x,y\\in I,\\ |x-y|\\le\\delta\\,\\bigr\\},\\qquad \\delta>0. \\] By definition $f$ is uniformly continuous on $I$ exactly when $\\omega_f(\\delta)\\to 0$ as $\\delta\\to 0^{+}$. Consider \\[ f(x)=\\sin\\!\\frac{1}{x}\\qquad\\text{on the open interval } I=(0,1). \\] The function is continuous at every point of $(0,1)$ and is bounded (indeed $|f|\\le 1$). Determine the value of \\[ L=\\lim_{\\delta\\to 0^{+}}\\omega_f(\\delta), \\] and, in your solution, identify precisely which hypothesis of the Heine--Cantor theorem (a continuous function on a closed bounded interval is uniformly continuous) is the one that fails here.",
    "answer": "\\[\\boxed{L=2}\\]",
    "trap": "The seductive error is to argue: \"$f$ is continuous on $(0,1)$, and continuous functions are uniformly continuous, so $\\omega_f(\\delta)\\to 0$ and $L=0$.\" That conflates pointwise continuity with uniform continuity; Heine--Cantor only delivers uniform continuity on a closed bounded (compact) interval, and $(0,1)$ is not closed. A second, subtler trap traces the failure to the wrong cause: a student recalls the chapter's earlier example $u(x)=1/x$ and concludes \"the trouble is that $f$ blows up near $0$.\" But here $f$ is perfectly bounded ($|f|\\le 1$), so unboundedness is not the mechanism at all \\u2014 the failure is the infinite-frequency oscillation as $x\\to 0^{+}$, which makes $f$ jump the full distance $2$ between values that are arbitrarily close in $x$. A third trap is to imagine that because $|x-y|\\to 0$ forces the two abscissae together, the values must also draw together \"by continuity\"; they do for each fixed pair as you shrink the gap, but the supremum over all admissible pairs never relaxes \\u2014 there is always a fresh pair, deeper toward $0$, realizing the maximal gap $2$. Hence $\\omega_f(\\delta)=2$ for every $\\delta>0$ and $L=2$, not $0$.",
    "solutions": [
      {
        "name": "Explicit peak-trough sequences force the full gap 2 at every scale",
        "steps": [
          "Pick the two sequences $a_n=\\dfrac{1}{2\\pi n+\\frac{\\pi}{2}}$ and $b_n=\\dfrac{1}{2\\pi n-\\frac{\\pi}{2}}$ for $n\\ge 1$. Both lie in $(0,1)$ (already $a_1\\approx 0.127$, $b_1\\approx 0.212$, and they decrease toward $0$). They are chosen so that $\\dfrac{1}{a_n}=2\\pi n+\\dfrac{\\pi}{2}$ and $\\dfrac{1}{b_n}=2\\pi n-\\dfrac{\\pi}{2}$ hit a crest and a trough of sine: $f(a_n)=\\sin\\!\\bigl(2\\pi n+\\tfrac{\\pi}{2}\\bigr)=+1$ and $f(b_n)=\\sin\\!\\bigl(2\\pi n-\\tfrac{\\pi}{2}\\bigr)=-1$.",
          "Hence $|f(a_n)-f(b_n)|=|1-(-1)|=2$ for every $n$, while the abscissae crowd together: $a_n-b_n=\\dfrac{1}{2\\pi n+\\frac{\\pi}{2}}-\\dfrac{1}{2\\pi n-\\frac{\\pi}{2}}=\\dfrac{-\\pi}{(2\\pi n)^2-(\\frac{\\pi}{2})^2}=\\dfrac{-4}{\\pi\\,(16n^2-1)}$, so $|a_n-b_n|=\\dfrac{4}{\\pi(16n^2-1)}\\to 0$ as $n\\to\\infty$.",
          "Now fix any $\\delta>0$. Choose $n$ large enough that $|a_n-b_n|=\\dfrac{4}{\\pi(16n^2-1)}\\le\\delta$ (possible since the left side $\\to 0$). Then $a_n,b_n\\in(0,1)$ form an admissible pair for $\\omega_f(\\delta)$ with $|f(a_n)-f(b_n)|=2$, so $\\omega_f(\\delta)\\ge 2$. On the other hand $|f(x)-f(y)|\\le |f(x)|+|f(y)|\\le 2$ always, so $\\omega_f(\\delta)\\le 2$. Therefore $\\omega_f(\\delta)=2$ for every $\\delta>0$.",
          "Consequently $L=\\lim_{\\delta\\to 0^{+}}\\omega_f(\\delta)=2\\neq 0$, so $f$ is NOT uniformly continuous on $(0,1)$. The Heine--Cantor hypothesis that fails is compactness of the domain: $(0,1)$ is bounded but not closed \\u2014 the limit point $0$ is missing, and it is exactly the accumulation of oscillations at that absent endpoint that sustains the gap. $\\boxed{L=2}$."
        ]
      },
      {
        "name": "Heine--Cantor via the obstruction to continuous extension",
        "steps": [
          "Heine--Cantor states: a continuous function on a closed bounded interval is uniformly continuous. Equivalently, $g$ is uniformly continuous on a bounded interval $(\\alpha,\\beta)$ iff it extends to a continuous function on the closure $[\\alpha,\\beta]$ (a uniformly continuous function maps Cauchy sequences to Cauchy sequences, so the one-sided limits at the endpoints exist and the extension is continuous on the compact set).",
          "Test whether $f(x)=\\sin(1/x)$ extends continuously to $[0,1]$ at the left endpoint. Along $x_n=\\dfrac{1}{2\\pi n+\\frac{\\pi}{2}}\\to 0^{+}$ we get $f(x_n)\\to +1$, while along $x_n'=\\dfrac{1}{2\\pi n-\\frac{\\pi}{2}}\\to 0^{+}$ we get $f(x_n')\\to -1$. Two sequences tending to $0$ produce two different limits, so $\\lim_{x\\to 0^{+}}f(x)$ does not exist; no value at $0$ can make $f$ continuous on $[0,1]$.",
          "Since $f$ admits no continuous extension to the compact closure $[0,1]$, it cannot be uniformly continuous on $(0,1)$. Therefore $\\omega_f(\\delta)\\not\\to 0$; as $\\omega_f$ is nonincreasing in $\\delta$ and bounded by $2$, its limit $L=\\inf_{\\delta>0}\\omega_f(\\delta)$ exists and is a strictly positive number $\\le 2$.",
          "To pin the value, note the oscillation of $f$ on every initial slice $(0,\\eta)$ is the full $[-1,1]$ (sine runs through a complete period infinitely often as $x\\to 0^{+}$), so $\\sup_{(0,\\eta)}f-\\inf_{(0,\\eta)}f=2$ for all $\\eta>0$; taking two points in such a thin slice at distance $\\le\\delta$ realizing the crest and trough gives $\\omega_f(\\delta)=2$ for every $\\delta$. Hence the failing hypothesis is precisely closedness/compactness of the domain, and $\\boxed{L=2}$."
        ]
      },
      {
        "name": "Restoring compactness pins the cause: only the endpoint 0 is to blame",
        "steps": [
          "Contrast with any shifted slice $[c,1]$ for $0<c<1$. There $f$ is continuously differentiable with $f'(x)=-\\dfrac{\\cos(1/x)}{x^2}$, so $|f'(x)|\\le\\dfrac{1}{x^2}\\le\\dfrac{1}{c^2}$ on $[c,1]$. By the Mean Value Theorem $|f(x)-f(y)|\\le\\dfrac{1}{c^2}|x-y|$, i.e. $f$ is Lipschitz, hence uniformly continuous, on the compact $[c,1]$ with $\\omega_f^{[c,1]}(\\delta)\\le\\delta/c^2\\to 0$.",
          "So for any $c>0$ the function behaves impeccably away from $0$; the entire obstruction is concentrated at the single removed limit point $0$. This isolates the mechanism: on $(0,1)$ the Lipschitz bound $1/x^2$ is unbounded as $x\\to 0^{+}$, the local wiggle accelerates without limit, and no global $\\delta$ can tame all scales at once \\u2014 yet, crucially, $f$ itself stays bounded, so the failure is oscillation, not blow-up.",
          "Quantify the residual gap on the full domain. For each $\\delta>0$, the crest/trough pair from any deep period near $0$ lies within distance $<\\delta$ once we go far enough in (the period in $x$ shrinks to $0$), and that pair differs by the maximal possible $2$. Since also $|f(x)-f(y)|\\le 2$ universally, the supremum is pinned: $\\omega_f(\\delta)=2$ independent of $\\delta$.",
          "Letting $\\delta\\to 0^{+}$ leaves the constant value untouched, so $L=2$. The Heine--Cantor theorem is not violated \\u2014 its conclusion simply does not apply, because its compactness hypothesis (a closed bounded interval) is unmet at the open endpoint $0$. $\\boxed{L=2}$."
        ]
      }
    ],
    "remark": "Insight: uniform continuity is not about each point but about a single $\\delta$ that must work everywhere at once, and the modulus of continuity $\\omega_f(\\delta)$ is the honest scoreboard \\u2014 $f$ is uniformly continuous iff $\\omega_f(\\delta)\\to 0$. For $\\sin(1/x)$ on $(0,1)$ the scoreboard never moves: $\\omega_f(\\delta)\\equiv 2$, because however small the window $\\delta$, a fresh crest-trough pair lurks deeper toward $0$ realizing the full swing of $2$. The lesson a ranker should carry away is the diagnostic: when continuity refuses to become uniform, look for the missing limit point of a non-compact domain and ask whether $f$ extends continuously across it. Here it cannot \\u2014 $\\lim_{x\\to0^{+}}\\sin(1/x)$ does not exist \\u2014 and that single absent endpoint is the whole story, as the clean behavior on every $[c,1]$ confirms. Note especially that the obstruction is oscillation, not unboundedness: a bounded continuous function can still fail to be uniformly continuous, which is exactly the case Heine--Cantor's compactness hypothesis exists to rule out."
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
    "trap": "Saying \"the domain $\\mathbb R$ is not closed and bounded, so the Extreme Value Theorem does not apply and we cannot conclude a minimum exists.\" EVT is only a sufficient condition. Coercivity ($f(x)\\to+\\infty$ as $|x|\\to\\infty$) lets you confine the search to a large closed bounded interval, where EVT does apply, so a global minimum genuinely exists despite the unbounded domain.",
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
    "statement": "Let $h:\\mathbb R\\to\\mathbb R$ be continuous and periodic with period $1$. For a real constant $k$, define $g(x)=h(x)+kx$. Find all values of $k$ for which $g$ is guaranteed to attain a global minimum on $\\mathbb R$, no matter which such $h$ is chosen.",
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
          "The word guaranteed means we need the minimum to exist for every admissible $h$, so a single bad $h$ rules out a value of $k$.",
          "Take the simplest admissible choice $h\\equiv0$ (continuous, period $1$). Then $g(x)=kx$.",
          "For any $k\\ne0$, $g(x)=kx$ is strictly monotone and ranges over all of $\\mathbb R$, so it has no minimum — this lone counterexample defeats every nonzero $k$.",
          "For $k=0$ the minimum always exists by EVT on one period (previous methods), so only $\\boxed{k=0}$ survives."
        ]
      }
    ],
    "remark": "Insight: a continuous periodic function is the prototype of a continuous function on an unbounded domain that still attains its extremes — because all its information lives on one compact period. The instant you break periodicity with even the gentlest nonzero linear drift, boundedness (and hence the minimum) is lost — and the constant test function $h\\equiv0$ shows the failure is total, not a fixable edge case."
  },
  {
    "theme": "evt",
    "themeLabel": "Boundedness & Extreme Values",
    "title": "The Diameter of a Shadow",
    "difficulty": 5,
    "task": "Prove the image-diameter is attained and equals the oscillation, then evaluate it for the given cubic",
    "tags": [
      "extreme-value-theorem",
      "compact-image",
      "oscillation",
      "attained-supremum",
      "endpoint-extremum",
      "diameter"
    ],
    "statement": "For a continuous function $f$ on the closed interval $[a,b]$ define its image-diameter \\[ D(f)=\\sup\\{\\,|f(x)-f(y)|\\;:\\;x,y\\in[a,b]\\,\\}. \\] Part (a) (the principle). Prove that the supremum $D(f)$ is in fact \\text{attained} — there exist points $p,q\\in[a,b]$ with $D(f)=|f(p)-f(q)|$ — and that $D(f)=M-m$, where $M=\\max_{[a,b]}f$ and $m=\\min_{[a,b]}f$. (Equivalently: the image $f([a,b])$ is a closed bounded interval $[m,M]$, and $D(f)$ is the length of that interval.) Part (b) (the instance). Apply this to \\[ f(x)=x^{3}-3x \\qquad\\text{on}\\qquad [-2,\\,3], \\] and compute the exact value of $D(f)$, naming a pair $(p,q)$ at which it is attained. Note carefully that the interval $[-2,3]$ is \\text{not} symmetric about the origin.",
    "answer": "\\[\\boxed{D(f)=20}\\]",
    "trap": "The headline trap is to locate $M$ and $m$ from the interior critical points alone and never test the endpoints. Setting $f'(x)=3x^{2}-3=0$ gives the local extrema $x=\\pm1$ with $f(-1)=2$ (a local max) and $f(1)=-2$ (a local min). A strong student reads these off as 'the' maximum and minimum, getting $D=f(-1)-f(1)=2-(-2)=4$ — and is completely wrong. On a COMPACT interval the Extreme Value Theorem guarantees the global extrema are attained, but it does not say they sit at critical points: they may occur at the endpoints, and here the right endpoint dominates everything. Since the interval $[-2,3]$ is asymmetric, $f(3)=27-9=18$ is the true global maximum (far above the local max $2$), while the global minimum is $m=-2$, attained at the LEFT endpoint $x=-2$ ($f(-2)=-8+6=-2$) and ALSO at the interior critical point $x=1$. Hence $D=18-(-2)=20$, not $4$. Three distinct conceptual errors feed the wrong answer of $4$: (PIT 1) believing 'extremum $\\Rightarrow$ $f'=0$', forgetting that on $[a,b]$ the EVT extremum can be a boundary point where the derivative need not vanish; (PIT 2) a phantom-symmetry reflex — because $x^{3}-3x$ is an odd function, students assume its extreme values are $\\pm$ a common number and that the symmetric pairing of critical points gives the widest spread, an assumption silently destroyed once the domain is no longer symmetric; (PIT 3) confusing the largest gap between two TURNING values with the diameter of the IMAGE — the diameter is $\\max f-\\min f$ over the whole compact set, and the maximizing pair here is the non-critical endpoint $x=3$ paired with either point of the minimum. A subtler over-correction also lurks: a student who does check endpoints but reports the minimizer as only $x=-2$ misses that $m=-2$ is attained at TWO points ($x=-2$ and $x=1$), so the attaining pair $(p,q)$ is not unique.",
    "solutions": [
      {
        "name": "Compact image is an interval; EVT attains its endpoints",
        "steps": [
          "(a) Boundedness and attainment. $[a,b]$ is closed and bounded (compact) and $f$ is continuous, so by the Extreme Value Theorem $f$ is bounded and attains a global maximum $M=f(x_{M})$ and a global minimum $m=f(x_{m})$ for some $x_{M},x_{m}\\in[a,b]$. For ANY $x,y$ we have $m\\le f(x),f(y)\\le M$, hence $|f(x)-f(y)|\\le M-m$; therefore $D(f)\\le M-m$. Conversely the specific pair $(x_{M},x_{m})$ gives $|f(x_{M})-f(x_{m})|=M-m$, so $D(f)\\ge M-m$. Combining, $D(f)=M-m$ and the supremum is ATTAINED at $(p,q)=(x_{M},x_{m})$ (one can verify $f([a,b])=[m,M]$: it lies in $[m,M]$ by the bound, contains $m,M$ by attainment, and is an interval by the Intermediate Value Theorem — so the image is the closed interval $[m,M]$ of length $M-m$).",
          "(b) Catalogue every candidate for $f(x)=x^{3}-3x$ on $[-2,3]$. The global extrema can occur only at interior critical points or at the endpoints. Critical points: $f'(x)=3x^{2}-3=0\\Rightarrow x=\\pm1$, both inside $[-2,3]$. Evaluate $f$ at the full candidate set $\\{-2,-1,1,3\\}$: $f(-2)=-8+6=-2$, $f(-1)=-1+3=2$, $f(1)=1-3=-2$, $f(3)=27-9=18$.",
          "Read off the global extremes from this finite list (EVT guarantees the extremes are among them): $M=\\max\\{-2,2,-2,18\\}=18$, attained only at the right endpoint $x=3$; $m=\\min\\{-2,2,-2,18\\}=-2$, attained at both $x=-2$ and $x=1$.",
          "Conclude. By part (a), $D(f)=M-m=18-(-2)=20$, attained at $(p,q)=(3,-2)$ (and equally at $(3,1)$). Thus $\\boxed{D(f)=20}$."
        ]
      },
      {
        "name": "Direct two-variable maximization of |f(x)-f(y)|",
        "steps": [
          "Treat $g(x,y)=f(x)-f(y)$ on the compact square $[-2,3]^{2}$; it is continuous, so it attains a maximum, and $D(f)=\\max|g|=\\max g$ (since swapping $x,y$ flips the sign). Maximizing $g$ separates: $\\max_{x,y}\\,(f(x)-f(y))=\\big(\\max_{x}f(x)\\big)-\\big(\\min_{y}f(y)\\big)$, because the two variables are independent. So the problem reduces to finding $\\max f$ and $\\min f$ separately — exactly $M$ and $m$.",
          "Maximize $f(x)=x^{3}-3x$ on $[-2,3]$. On $[1,3]$, $f'=3x^{2}-3>0$, so $f$ is increasing there and the right endpoint wins: the candidates for $\\max$ are the local max $x=-1$ ($f=2$) and the right endpoint $x=3$ ($f=18$). Hence $M=18$ at $x=3$. The endpoint beats the critical point precisely because the interval extends well past $x=1$ into the increasing region.",
          "Minimize $f$ on $[-2,3]$. Candidates are the local min $x=1$ ($f=-2$) and the left endpoint $x=-2$ ($f=-2$). Both give $-2$, so $m=-2$, attained at the two points $x=1$ and $x=-2$.",
          "Therefore $D(f)=M-m=18-(-2)=20$, with the maximizing pair $(x,y)=(3,-2)$ or $(3,1)$. Hence $\\boxed{D(f)=20}$."
        ]
      },
      {
        "name": "Monotone-piece decomposition (no calculus tables, pure EVT reasoning)",
        "steps": [
          "Split $[-2,3]$ at the critical points $x=\\pm1$ into monotone pieces, which the EVT lets us handle by endpoints alone. On a monotone piece $f$ attains its max and min exactly at the two ends of that piece, so the extremes over $[-2,3]$ lie among the breakpoints $\\{-2,-1,1,3\\}$.",
          "Piece $[-2,-1]$: $f'>0$ (since $x^{2}>1$), increasing from $f(-2)=-2$ up to $f(-1)=2$. Piece $[-1,1]$: $f'<0$, decreasing from $f(-1)=2$ down to $f(1)=-2$. Piece $[1,3]$: $f'>0$, increasing from $f(1)=-2$ up to $f(3)=18$.",
          "The running extremes across the pieces: the highest value reached is $18$ (top of the last, rising piece, at $x=3$), and the lowest value reached is $-2$ (bottom of the second and start of the third piece, at $x=1$, and equally the start of the first piece at $x=-2$). So $M=18$ and $m=-2$ over the whole interval — the last increasing piece overshoots the modest local max $2$.",
          "Since the image is the union of the three sub-images $[-2,2]\\cup[-2,2]\\cup[-2,18]=[-2,18]$, a single closed interval of length $20$, the diameter is its length: $D(f)=18-(-2)=20$, attained between $x=3$ and either $x=1$ or $x=-2$. Hence $\\boxed{D(f)=20}$."
        ]
      }
    ],
    "remark": "Insight: the load-bearing idea is that continuity on a COMPACT set turns a supremum into a maximum. The map $(x,y)\\mapsto|f(x)-f(y)|$ on $[a,b]^{2}$ is continuous on a compact square, so its supremum $D(f)$ is genuinely attained — and a one-line bound plus the EVT-attained pair $(x_{M},x_{m})$ shows $D(f)=M-m$, the length of the compact image $[m,M]$. That is EVT used as an EXISTENCE certificate ('the diameter is achieved') followed by LOCATION ('where?'). Every hypothesis earns its place: drop closedness (try $f(x)=x^{3}-3x$ on the open $(-2,3)$) and the value $18$ is approached but never reached, so $M$ — and hence the diameter — is a supremum that is no longer attained; drop boundedness (an unbounded domain) and $D$ can be infinite. The instance is engineered so the naive critical-point answer $4$ is seductive and wrong: the asymmetry of $[-2,3]$ pushes the true maximum onto the right endpoint $x=3$ (where $f'\\ne0$), a place the 'set the derivative to zero' reflex never visits. The transferable discipline: to extremize a continuous function on $[a,b]$, the candidate set is interior critical points $\\cup$ endpoints — never critical points alone — and the global extrema (whose existence EVT guarantees) may, and here do, live on the boundary."
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
    "trap": "Minimizing each branch separately — vertex of $x^2-4$ gives $-4$ at $x=0$, vertex of the line is at infinity — and then taking the smaller, concluding $-4$. But $f$ is the upper envelope: at $x=0$ the line gives $2-0=2>-4$, so $f(0)=2$, not $-4$. The minimum of a max-of-functions is generally NOT the min of either piece; it sits where the two graphs cross on the way up.",
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
    "title": "The Plateau That Tears the Inverse",
    "difficulty": 5,
    "task": "Decide invertibility and measure the jump the inverse is forced to carry",
    "tags": [
      "monotone",
      "strict-monotonicity",
      "generalized-inverse",
      "plateau",
      "jump-discontinuity",
      "injectivity"
    ],
    "statement": "Define $f:[0,1]\\to\\mathbb{R}$ by \\[ f(x)=\\begin{cases} x^{2}, & 0\\le x\\le \\tfrac12,\\\\ \\tfrac14, & \\tfrac12\\le x\\le \\tfrac34,\\\\ x-\\tfrac12, & \\tfrac34\\le x\\le 1. \\end{cases} \\] One checks that $f$ is continuous on $[0,1]$ (the three pieces agree at $x=\\tfrac12$ and $x=\\tfrac34$, both equal to $\\tfrac14$) and nondecreasing, with $f(0)=0$ and $f(1)=\\tfrac12$, so its range is the full interval $[0,\\tfrac12]$. A student claims: \\[ \\text{``} f \\text{ is a continuous monotone surjection onto } [0,\\tfrac12], \\text{ hence it is invertible and its inverse is continuous.''} \\] Decide whether $f$ is invertible as a function on $[0,1]$. Then form the canonical left-continuous generalized inverse $g(y)=\\inf\\{\\,x\\in[0,1]:f(x)\\ge y\\,\\}$ for $y\\in[0,\\tfrac12]$, and determine the magnitude $J$ of the single jump discontinuity that $g$ is forced to have, identifying the exact value of $y$ at which it occurs.",
    "answer": "\\[\\boxed{J=\\tfrac14}\\]",
    "trap": "The claim is false, and it fails for a reason strictness, not mere monotonicity, is what manufactures a continuous inverse. A continuous nondecreasing function is injective only when it is strictly increasing; here $f$ is constant on the plateau $[\\tfrac12,\\tfrac34]$, so $f(\\tfrac12)=f(\\tfrac34)=\\tfrac14$ and $f$ is not one-to-one, hence has no genuine functional inverse at all. The seductive error is to invoke ``continuous strictly monotone bijections have continuous inverses'' while quietly dropping the word strictly, concluding $J=0$ (a continuous inverse). A second, subtler trap appears once one accepts that the inverse jumps: students locate the jump at $y=\\tfrac12$, mistaking the domain coordinate where the plateau begins ($x=\\tfrac12$) for the image value the inverse is indexed by. But $g$ lives on the $y$-axis, and the plateau collapses to the single output $f\\equiv\\tfrac14$; the tear in $g$ therefore sits at $y=\\tfrac14$, not $y=\\tfrac12$. A third trap is to report the jump as the gap between the plateau endpoints measured the wrong way, e.g. $\\tfrac34-\\tfrac12$ but assigned to the limit from below; the left limit $g(\\tfrac14^{-})=\\tfrac12$ and the value/right limit $g(\\tfrac14^{+})=\\tfrac34$ must be read off the correct one-sided behaviour to get $J=\\tfrac34-\\tfrac12=\\tfrac14$.",
    "solutions": [
      {
        "name": "Direct construction of the generalized inverse and its saltus",
        "steps": [
          "First, $f$ is not invertible as a function: it is nondecreasing but not strictly so, since $f\\equiv\\tfrac14$ on the whole plateau $[\\tfrac12,\\tfrac34]$. Thus $f(\\tfrac12)=f(\\tfrac34)$ with $\\tfrac12\\neq\\tfrac34$, so $f$ is not injective and no two-sided inverse exists; the best one can do is the left-continuous generalized inverse $g(y)=\\inf\\{x:f(x)\\ge y\\}$.",
          "Compute $g$ piecewise on the range $[0,\\tfrac14]\\cup[\\tfrac14,\\tfrac12]$. For $0\\le y\\le\\tfrac14$ the condition $f(x)\\ge y$ is first met on the branch $x^{2}\\ge y$, giving $g(y)=\\sqrt{y}$ (so $g$ climbs from $0$ to $\\sqrt{\\tfrac14}=\\tfrac12$). For $\\tfrac14<y\\le\\tfrac12$ the values $f(x)\\ge y>\\tfrac14$ can only occur on the rising branch $x-\\tfrac12\\ge y$, i.e. $x\\ge y+\\tfrac12$, giving $g(y)=y+\\tfrac12$ (so $g$ jumps up and continues from $\\tfrac34$ to $1$).",
          "Read the one-sided behaviour at $y=\\tfrac14$. From below, $g(\\tfrac14^{-})=\\lim_{y\\to\\frac14^{-}}\\sqrt{y}=\\tfrac12$, and by left-continuity $g(\\tfrac14)=\\tfrac12$. From above, $g(\\tfrac14^{+})=\\lim_{y\\to\\frac14^{+}}(y+\\tfrac12)=\\tfrac34$. Hence $g$ has a genuine jump there of size $g(\\tfrac14^{+})-g(\\tfrac14^{-})=\\tfrac34-\\tfrac12$.",
          "Everywhere else $g$ is a composition/translation of continuous strictly increasing maps, so the jump at $y=\\tfrac14$ is the only discontinuity. Therefore $J=\\tfrac34-\\tfrac12=\\boxed{\\tfrac14}$, occurring at $y=\\tfrac14$."
        ]
      },
      {
        "name": "Plateau-to-jump duality for monotone functions",
        "steps": [
          "There is a clean correspondence for a continuous nondecreasing $f$: each maximal interval on which $f$ is constant (a plateau) collapses, under any generalized inverse, to a single output value at which the inverse must leap across the whole plateau. Conversely a jump of $f$ would become a plateau of the inverse. Here $f$ has no jumps (it is continuous), but it has exactly one plateau, $[\\tfrac12,\\tfrac34]$ at height $\\tfrac14$.",
          "Because the inverse must return $x$-values and the plateau occupies the $x$-interval $[\\tfrac12,\\tfrac34]$ while sharing the single $y$-value $\\tfrac14$, the inverse at $y=\\tfrac14$ is set-valued, equal to the whole $[\\tfrac12,\\tfrac34]$; selecting the left-continuous branch forces $g$ to jump from the bottom $\\tfrac12$ to the top $\\tfrac34$ of this interval as $y$ crosses $\\tfrac14$.",
          "Hence the jump magnitude equals the length of the plateau in the domain, $J=\\tfrac34-\\tfrac12=\\tfrac14$, and it is located at the plateau's common image value $y=\\tfrac14$ (not at the domain coordinate $x=\\tfrac12$).",
          "Since a continuous monotone function has no jumps and only this one plateau, the inverse has exactly one discontinuity, of size $\\boxed{\\tfrac14}$."
        ]
      },
      {
        "name": "Contrapositive via the inverse-continuity theorem",
        "steps": [
          "The correct theorem is: if $h$ is continuous and strictly monotone on an interval, then $h$ is a bijection onto its image and $h^{-1}$ is continuous. Run it in contrapositive: were our $g$ continuous, it would be a continuous nondecreasing right inverse satisfying $f(g(y))=y$ on $[0,\\tfrac12]$, and $g([0,\\tfrac12])$ would be a connected (interval) subset of $[0,1]$ by the intermediate value property.",
          "But $g$ takes the value $\\tfrac12$ (at $y=\\tfrac14$) and the value $\\tfrac34$ (as $y\\to\\tfrac14^{+}$), while it never takes any value strictly between $\\tfrac12$ and $\\tfrac34$: any such $x_0\\in(\\tfrac12,\\tfrac34)$ has $f(x_0)=\\tfrac14$, and $g$ by its infimum definition would have already returned $\\tfrac12$, not $x_0$. So the image of $g$ skips the open interval $(\\tfrac12,\\tfrac34)$ and is disconnected, contradicting continuity.",
          "Thus $g$ cannot be continuous; the obstruction is exactly the missing strictness of $f$ on $[\\tfrac12,\\tfrac34]$. The size of the gap the image skips is $\\tfrac34-\\tfrac12=\\tfrac14$, which is precisely the saltus of $g$ at the crossing value.",
          "That crossing value is the height of the plateau, $y=\\tfrac14$, so the unique jump has magnitude $J=\\boxed{\\tfrac14}$."
        ]
      }
    ],
    "remark": "Insight: monotone alone is not enough monotone-and-continuous gives you surjectivity onto an interval and a well-defined generalized inverse, but it is strict monotonicity that upgrades that inverse to a continuous function. The dictionary to memorize is the plateau-jump duality: a flat stretch of $f$ (failure of strictness) becomes a jump of the inverse, and a jump of $f$ would become a flat stretch of the inverse. Two reflexes a top ranker should drill: (1) the inverse is indexed by output values, so a domain plateau over $[\\tfrac12,\\tfrac34]$ produces a tear at the image height $\\tfrac14$, never at $x=\\tfrac12$; (2) the jump's size is the domain-length of the plateau, $\\tfrac34-\\tfrac12=\\tfrac14$, read off the correct one-sided limits $g(\\tfrac14^{-})=\\tfrac12$ and $g(\\tfrac14^{+})=\\tfrac34$. The same mechanism is why quantile functions of distributions with atoms jump, and why a CDF with a flat stretch has a discontinuous quantile inverse."
  },
  {
    "theme": "monotone",
    "themeLabel": "Monotonic & Inverse Functions",
    "title": "Three Cracks to Order, and a Floor You Cannot Touch",
    "difficulty": 5,
    "task": "Build a strictly increasing function to the prescribed discontinuity spec, find the infimum of its terminal value and decide if it is attained, then prove the positive-measure impossibility",
    "tags": [
      "monotone-jump-decomposition",
      "saltus",
      "countable-discontinuities",
      "infimum-not-attained",
      "strict-monotonicity",
      "measure-zero"
    ],
    "statement": "Fix the three points $S=\\left\\{\\tfrac14,\\ \\tfrac1\\pi,\\ \\tfrac{\\sqrt2}{2}\\right\\}\\subset(0,1)$ (note $\\tfrac14<\\tfrac1\\pi<\\tfrac{\\sqrt2}{2}$). Call a function $f:[0,1]\\to\\mathbb{R}$ \\text{admissible} if all three hold: (i) $f$ is strictly increasing on $[0,1]$ with $f(0)=0$; (ii) the set of points at which $f$ is discontinuous is \\text{exactly} $S$ (continuous everywhere else); (iii) the jump (saltus) of $f$ equals $\\tfrac12$ at $x=\\tfrac14$, equals $\\tfrac13$ at $x=\\tfrac1\\pi$, and equals $\\tfrac16$ at $x=\\tfrac{\\sqrt2}{2}$, where the saltus at an interior point $d$ is $f(d^{+})-f(d^{-})$. Part (a). Exhibit one admissible $f$ (give an explicit formula) and verify it meets (i)-(iii). Part (b). Over all admissible $f$, determine the infimum $m=\\inf f(1)$ and state, with proof, whether the infimum is attained. Part (c) (the principle behind the spec). Prove that no strictly increasing function on $[0,1]$ can have a discontinuity set of positive Lebesgue measure; in fact its discontinuity set is at most countable. Report the value $m$ from part (b) as your answer.",
    "answer": "\\[\\boxed{m=1}\\]",
    "trap": "The seductive wrong answer is to say $m=1$ and that it \\text{is} attained, achieved by the pure jump (step) function $J(x)$ that starts at $0$ and rises by $\\tfrac12,\\tfrac13,\\tfrac16$ at the three points, giving $J(1)=\\tfrac12+\\tfrac13+\\tfrac16=1$. The arithmetic of the saltus is correct and the discontinuity set is exactly $S$ — so the candidate looks perfect — but it is NOT admissible, and this is the whole point. A pure step function is CONSTANT on each gap between consecutive jump points (e.g. $J\\equiv\\tfrac56$ on the entire open interval $(\\tfrac1\\pi,\\tfrac{\\sqrt2}{2})$), so it is only non-decreasing, never strictly increasing; condition (i) is violated. The conceptual trap is conflating 'monotone' with 'strictly monotone'. By the monotone jump decomposition every admissible $f$ splits as $f=g+J$ with $g$ the continuous part and $J$ the jump part; $J$ contributes exactly the forced total saltus $1$ to $f(1)$, while strict increase forces the continuous part $g$ to be STRICTLY increasing, hence $g(1)-g(0)>0$ strictly (not merely $\\ge0$). Therefore $f(1)=g(1)+J(1)=g(1)+1>1$ for every admissible $f$, so $1$ is a strict lower bound that is approached but never reached: taking $g(x)=\\varepsilon x$ with $\\varepsilon\\downarrow0$ drives $f(1)=1+\\varepsilon\\to1^{+}$, proving $\\inf f(1)=1$ while no admissible $f$ achieves it. A second, subtler error is over-counting: writing $f(1)=g(1)+\\tfrac12+\\tfrac13+\\tfrac16$ but forgetting that a jump AT an interior point fully lands inside $[0,1]$ (it does — all three points lie in $(0,1)$, so the entire saltus $1$ is collected by $x=1$), or conversely double-counting an endpoint jump that does not exist here. The headline value $1$ is right; the claim that it is achieved is the error.",
    "solutions": [
      {
        "name": "Jump decomposition: forced saltus plus a strictly-positive continuous part",
        "steps": [
          "(a) Construction. Let $d_1=\\tfrac14,\\,d_2=\\tfrac1\\pi,\\,d_3=\\tfrac{\\sqrt2}{2}$ with jumps $c_1=\\tfrac12,\\,c_2=\\tfrac13,\\,c_3=\\tfrac16$. Define the right-continuous jump function $J(x)=\\sum_{k:\\,d_k\\le x}c_k$ and set, for any fixed $\\varepsilon>0$, $f(x)=\\varepsilon x+J(x)$ on $[0,1]$. Then $f(0)=0$. The term $\\varepsilon x$ is continuous and strictly increasing, and $J$ is non-decreasing, so $f$ is strictly increasing (a strictly increasing function plus a non-decreasing one is strictly increasing). At each $d_k$, $J$ jumps by $c_k$ and $\\varepsilon x$ is continuous, so the saltus of $f$ at $d_k$ is exactly $f(d_k^{+})-f(d_k^{-})=c_k$; away from $S$ both summands are continuous, so $f$ is continuous there. Hence the discontinuity set is exactly $S$, and (i)-(iii) hold: $f$ is admissible.",
          "(b) Lower bound. Let $f$ be ANY admissible function. By the monotone jump decomposition, write $f=g+J$ where $J(x)=\\sum_{k:\\,d_k\\le x}c_k$ collects the prescribed saltus and $g=f-J$. Then $g$ is continuous (its only candidate discontinuities are at the $d_k$, where the saltus of $f$ and of $J$ both equal $c_k$ and cancel) and $g$ is strictly increasing (between consecutive jump points $f$ is continuous and strictly increasing, and $J$ is constant there, so $g=f-J$ is strictly increasing; across a jump $g$ is continuous and still strictly increasing by checking one-sided limits). All three points lie in $(0,1)$, so $J(1)=c_1+c_2+c_3=\\tfrac12+\\tfrac13+\\tfrac16=1$ and $J(0)=0$.",
          "Therefore $f(1)=g(1)+J(1)=g(1)+1$ and $f(0)=g(0)+0=0\\Rightarrow g(0)=0$. Since $g$ is strictly increasing, $g(1)>g(0)=0$, so $f(1)=g(1)+1>1$. Thus $1$ is a lower bound and is never attained.",
          "(b) Sharpness. The family $f_\\varepsilon(x)=\\varepsilon x+J(x)$ from part (a) is admissible for every $\\varepsilon>0$ and gives $f_\\varepsilon(1)=\\varepsilon+1\\to1^{+}$ as $\\varepsilon\\downarrow0$. Hence the infimum equals $1$ but is approached only in the limit. Conclusion: $m=\\inf f(1)=1$, NOT attained, so $\\boxed{m=1}$.",
          "(c) Countability and measure zero. Let $h$ be strictly increasing on $[0,1]$ (so bounded: $h(0)\\le h(x)\\le h(1)$, total rise $L=h(1)-h(0)<\\infty$). At a discontinuity $d$ the saltus $s(d)=h(d^{+})-h(d^{-})>0$, and for $d<d'$ the open intervals $\\big(h(d^{-}),h(d^{+})\\big)$ and $\\big(h(d'^{-}),h(d'^{+})\\big)$ are disjoint (order preservation) and contained in $[h(0),h(1)]$. So any finite set of discontinuities has total saltus $\\le L$. Fix $n\\in\\mathbb{N}$: the set $D_n=\\{d:\\,s(d)>L/n\\}$ has at most $n$ elements (else the total saltus exceeds $L$). The full discontinuity set is $\\bigcup_{n\\ge1}D_n$, a countable union of finite sets, hence at most countable. A countable set is Lebesgue measurable with measure $0$, so it can never have positive measure. $\\square$"
        ]
      },
      {
        "name": "Telescoping the gaps: a direct accounting of the total rise",
        "steps": [
          "(b) Order the points $0<d_1<d_2<d_3<1$ and consider any admissible $f$. Split the rise of $f$ across $[0,1]$ into one-sided pieces. Define the continuous increments over the closed gaps and the jumps at the points; because $f$ is strictly increasing, every continuous piece contributes a STRICTLY positive amount.",
          "Concretely, $f(1)-f(0)=\\big[f(d_1^{-})-f(0)\\big]+\\big[f(d_1^{+})-f(d_1^{-})\\big]+\\big[f(d_2^{-})-f(d_1^{+})\\big]+\\big[f(d_2^{+})-f(d_2^{-})\\big]+\\big[f(d_3^{-})-f(d_2^{+})\\big]+\\big[f(d_3^{+})-f(d_3^{-})\\big]+\\big[f(1)-f(d_3^{+})\\big].$ The three bracketed saltus terms equal $\\tfrac12,\\tfrac13,\\tfrac16$ (sum $1$). The four remaining bracketed terms are the continuous increments over $[0,d_1],[d_1,d_2],[d_2,d_3],[d_3,1]$; on each such gap $f$ is continuous and strictly increasing, so each increment is $>0$.",
          "Hence with $f(0)=0$: $f(1)=\\underbrace{(\\text{4 strictly positive continuous increments})}_{>0}+\\underbrace{\\big(\\tfrac12+\\tfrac13+\\tfrac16\\big)}_{=1}>1$. So $f(1)>1$ for every admissible $f$: $1$ is a strict lower bound, never attained.",
          "To see $1$ is the greatest lower bound, distribute a tiny continuous rise $\\varepsilon$ across the four gaps (e.g. $f(x)=\\varepsilon x+J(x)$): then the four continuous increments sum to $\\varepsilon$ and $f(1)=1+\\varepsilon\\to1^{+}$. Therefore $m=1$, not attained, and $\\boxed{m=1}$.",
          "(c) The same accounting bounds discontinuities: for a strictly increasing $h$ with finite rise $L$, summing the saltus over any finite collection of jump points cannot exceed $L$ (each gap increment is nonnegative and the saltus are disjoint contributions to the total rise). So for each $n$ only finitely many ($\\le n$) jumps exceed $L/n$, and the discontinuity set is a countable union of these finite sets — countable, hence Lebesgue-null, never of positive measure. $\\square$"
        ]
      },
      {
        "name": "Inverse-image viewpoint: gaps in the range force a strictly positive continuous part",
        "steps": [
          "(b) A strictly increasing $f:[0,1]\\to\\mathbb{R}$ is a bijection onto its image $R=f([0,1])$, and its inverse is automatically continuous and strictly increasing on $R$. A jump of saltus $c_k$ at $d_k$ means $R$ omits the open interval $\\big(f(d_k^{-}),f(d_k^{+})\\big)$ of length exactly $c_k$ — these omitted 'gap' intervals are disjoint and total $\\tfrac12+\\tfrac13+\\tfrac16=1$ in length.",
          "The image $R$ is contained in $[f(0),f(1)]=[0,f(1)]$, an interval of length $f(1)$. The actual ATTAINED values form $R$; the part of $R$ that is genuinely traversed continuously (where $f$ acts like a continuous strictly increasing map onto a sub-interval) has positive total length $\\Lambda$, because on each of the four gaps between/around the jump points $f$ is continuous and strictly increasing, so it sweeps out an interval of POSITIVE length.",
          "Length bookkeeping inside $[0,f(1)]$: $f(1)=(\\text{length swept continuously})+(\\text{total gap length})=\\Lambda+1$ with $\\Lambda>0$. Hence $f(1)=\\Lambda+1>1$ for every admissible $f$, with equality impossible (it would force $\\Lambda=0$, i.e. $f$ constant on each gap — contradicting strict increase).",
          "Letting the continuously-swept length $\\Lambda\\to0^{+}$ (e.g. $f(x)=\\varepsilon x+J(x)$, where $\\Lambda=\\varepsilon$) shows the infimum is exactly $1$ and is not attained. Therefore $\\boxed{m=1}$.",
          "(c) In this language: each discontinuity of a strictly increasing $h$ punches a disjoint open gap of positive length into the bounded range $[h(0),h(1)]$. Disjoint open subintervals of a bounded interval whose lengths exceed $L/n$ number at most $n$; ranging over $n$, there are at most countably many gaps, hence at most countably many discontinuities — a measure-zero set, never of positive measure. $\\square$"
        ]
      }
    ],
    "remark": "Insight: the spec is a trap that separates 'monotone' from 'strictly monotone'. Reading off the three saltus and summing to $1$ is the easy, correct part; the hard part is realising that the pure step function realising those jumps is only weakly increasing, so the genuine constraint forces a strictly positive continuous part $g$ on top of the forced jump part $J$. The decomposition $f=g+J$ makes the answer transparent: $f(1)=g(1)+1$ with $g(1)>0$, so $1$ is an infimum that is approached ($g(x)=\\varepsilon x$, $\\varepsilon\\downarrow0$) but never attained — a textbook case of an extremum that exists as $\\inf$ yet not as $\\min$. Part (c) is the structural reason the spec can only ever name a finite (or countable) set: a strictly increasing function carves disjoint positive-length gaps into a bounded range, so at most $n$ jumps can exceed $L/n$, forcing the discontinuity set to be a countable union of finite sets — Lebesgue-null. The transferable discipline: to build a monotone function to a discontinuity specification, count the saltus to fix the jump part, then remember that strict increase demands a genuinely growing continuous part, which is exactly what obstructs the naive 'attained' answer."
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
    "statement": "Let $D=[0,1]\\cup(2,3]$ and define $f:D\\to[0,2]$ by \\[ f(x)=\\begin{cases} x, & x\\in[0,1],\\\\  x-1, & x\\in(2,3]. \\end{cases} \\] Prove that $f$ is a continuous bijection of $D$ onto $[0,2]$, but that $f^{-1}:[0,2]\\to D$ is discontinuous at exactly one point; identify that point and describe the jump.",
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
    "title": "The Inverse That Forgets How to Be Uniform",
    "difficulty": 5,
    "task": "Decide continuity, uniform continuity, and continuous extendability of the inverse, and pin down its modulus of continuity",
    "tags": [
      "inverse-function-continuity",
      "uniform-continuity",
      "non-compact-domain",
      "modulus-of-continuity",
      "strict-monotonicity"
    ],
    "statement": "Let $f:[0,\\infty)\\to[0,1)$ be given by $f(x)=1-e^{-x}$. It is continuous and strictly increasing, and one checks $f(0)=0$ with $f(x)\\to 1^{-}$ as $x\\to\\infty$, so $f$ is a continuous strictly increasing bijection of the non-compact half-line $[0,\\infty)$ onto the bounded interval $[0,1)$. Let $g=f^{-1}:[0,1)\\to[0,\\infty)$ be its inverse. A standard theorem says the inverse of a continuous strictly monotone function is again continuous, so it is tempting to conclude that $g$ inherits every good property of a 'nice' inverse. Investigate honestly and answer three questions, with proof. (a) Is $g$ continuous on $[0,1)$? (b) Does $g$ extend to a continuous function on the closed range $[0,1]$ (i.e.\\ can one define a finite value $g(1)$ making the extension continuous at $y=1$)? (c) Is $g$ uniformly continuous on $[0,1)$? Finally, for the modulus of continuity $\\omega(\\delta)=\\sup\\{\\,|g(y)-g(y')|:\\ y,y'\\in[0,1),\\ |y-y'|\\le\\delta\\,\\}$, determine $\\omega(\\delta)$ for each $\\delta>0$.",
    "answer": "\\[\\boxed{\\text{(a) yes},\\quad \\text{(b) no},\\quad \\text{(c) no},\\qquad \\omega(\\delta)=+\\infty\\ \\text{for every }\\delta>0}\\]",
    "trap": "The fatal reflex is to treat 'continuous strictly monotone $\\Rightarrow$ continuous inverse' as if it also delivered uniform continuity and a continuous extension to the closed range. It delivers neither, and the reason is the non-compactness of the domain $[0,\\infty)$, not any defect of $f$. The trap has two faces. First face (extendability): a student sees that $g$ is continuous and that the range $[0,1)$ has the single missing endpoint $1$, and assumes a continuous function on a half-open interval always extends to the closed one, so 'just set $g(1)=\\lim_{y\\to1^{-}}g(y)$'. But that limit is $+\\infty$: $g(y)=-\\ln(1-y)\\to+\\infty$, so no finite value of $g(1)$ exists and the extension fails. Extendability to a missing endpoint requires the one-sided limit to be FINITE — here it is not, precisely because $f$ takes infinitely long (an unbounded $x$) to climb the last sliver up to height $1$. Second face (uniform continuity): a student recalls that a continuous function on a compact interval is uniformly continuous, glances at the bounded interval $[0,1)$, and wrongly invokes that theorem. But $[0,1)$ is NOT compact (not closed), and $g$ is unbounded on it; an unbounded function on a bounded interval can never be uniformly continuous, because uniform continuity forces a bounded image on a bounded domain. Concretely $g'(y)=\\tfrac{1}{1-y}\\to\\infty$, so no single $\\delta$ controls $|g(y)-g(y')|$ near $y=1$: taking the fixed gap $|y-y'|=\\delta$ and pushing the pair toward $1$ makes $|g(y)-g(y')|$ grow without bound, so the modulus $\\omega(\\delta)$ is not small for small $\\delta$ — it is $+\\infty$ for every $\\delta>0$. The deeper misconception is that mapping ONTO a bounded interval should tame the inverse; in fact compressing an infinite domain into a finite length is exactly what forces the inverse to stretch ever more violently near the compressed end.",
    "solutions": [
      {
        "name": "Explicit inverse, then test each property directly",
        "steps": [
          "Solve $y=1-e^{-x}$ for $x\\ge 0$: $e^{-x}=1-y$, so $x=-\\ln(1-y)$. Hence $g(y)=-\\ln(1-y)$ for $y\\in[0,1)$, with $g(0)=0$. (a) On $[0,1)$ the map $y\\mapsto 1-y$ is continuous and positive, and $\\ln$ is continuous on $(0,\\infty)$, so $g$ is a composition of continuous functions and is continuous on $[0,1)$ — answer (a) is YES. This also re-proves, in this instance, the general theorem that the inverse of a continuous strictly monotone bijection is continuous.",
          "(b) Extendability to $y=1$. As $y\\to1^{-}$, $1-y\\to0^{+}$, so $g(y)=-\\ln(1-y)\\to+\\infty$. The one-sided limit at the missing endpoint is infinite, hence no finite value $g(1)$ can make the extension continuous at $1$: answer (b) is NO. (Geometrically, $f$ needs $x\\to\\infty$ to reach height $1$, so the inverse 'lands at infinity' there.)",
          "(c) Uniform continuity. Suppose, for contradiction, $g$ were uniformly continuous on $[0,1)$. Take any Cauchy sequence in $[0,1)$ converging to $1$, e.g.\\ $y_n=1-\\tfrac1n$; it is Cauchy. Uniform continuity sends Cauchy sequences to Cauchy sequences, so $(g(y_n))$ would be Cauchy, hence bounded. But $g(y_n)=-\\ln(1/n)=\\ln n\\to+\\infty$ is unbounded — contradiction. So $g$ is NOT uniformly continuous: answer (c) is NO.",
          "Modulus of continuity. Fix any $\\delta>0$. For a pair with fixed gap, take $y'=1-t$ and $y=1-2t$ with $0<t\\le\\delta$ small enough that $y\\ge0$, but more decisively use gap exactly $\\delta$: for $y'\\in[\\delta,1)$ set $y=y'-\\delta$, so $|y-y'|=\\delta$. Then $g(y')-g(y)=-\\ln(1-y')+\\ln(1-y)=\\ln\\dfrac{1-y}{1-y'}=\\ln\\dfrac{1-y'+\\delta}{1-y'}=\\ln\\!\\Big(1+\\dfrac{\\delta}{1-y'}\\Big)$. As $y'\\to1^{-}$ the term $\\tfrac{\\delta}{1-y'}\\to+\\infty$, so $g(y')-g(y)\\to+\\infty$. Thus the supremum over admissible pairs is unbounded: $\\boxed{\\omega(\\delta)=+\\infty}$ for every $\\delta>0$, confirming (c) and packaging the whole verdict as (a) yes, (b) no, (c) no."
        ]
      },
      {
        "name": "Coordinate-free: read everything off the geometry of f",
        "steps": [
          "Work only from the stated properties of $f$ (continuous, strictly increasing, $f([0,\\infty))=[0,1)$), to show the phenomenon is structural, not special to $1-e^{-x}$. (a) Continuity of $g$: let $y_0\\in[0,1)$ with $x_0=g(y_0)$. Strict monotonicity of $f$ makes $g$ strictly monotone, so $g$ can only have jump discontinuities; but the image of $g$ is the full interval $[0,\\infty)$ (since $f$ is a bijection onto $[0,1)$), which has no gaps. A monotone function whose image is an interval (no gaps) has no jumps, hence is continuous. So $g$ is continuous on $[0,1)$ — (a) YES.",
          "(b) Extendability: $g$ is increasing and its image is all of $[0,\\infty)$, which is unbounded above. An increasing function with unbounded image on $[0,1)$ must satisfy $\\lim_{y\\to1^{-}}g(y)=\\sup g=+\\infty$. An infinite one-sided limit cannot be patched by a finite value, so $g$ has no continuous extension to $[0,1]$ — (b) NO. The unboundedness of the domain $[0,\\infty)$ of $f$ is precisely what makes the range of $g$ unbounded.",
          "(c) Uniform continuity: a uniformly continuous function maps a bounded domain to a bounded image (it preserves Cauchy sequences, so it cannot run off to infinity along a convergent input sequence). Here the domain $[0,1)$ is bounded but the image $[0,\\infty)$ is unbounded, an outright contradiction with uniform continuity. Hence $g$ is NOT uniformly continuous — (c) NO. Note the compactness theorem 'continuous on $[a,b]\\Rightarrow$ uniformly continuous' does not apply: $[0,1)$ is not closed, so not compact.",
          "Modulus: uniform continuity is exactly the statement $\\omega(\\delta)\\to0$ as $\\delta\\to0^{+}$ with each $\\omega(\\delta)$ finite. Since $g$ is unbounded and increasing, for any $\\delta>0$ choose $y'$ near $1$ and $y=y'-\\delta$; as $g(y')\\to+\\infty$ while $g(y)\\ge0$, the gap $g(y')-g(y)$ exceeds any bound, so $\\omega(\\delta)=+\\infty$. The verdict is $\\boxed{(a)\\,\\text{yes},\\,(b)\\,\\text{no},\\,(c)\\,\\text{no},\\,\\omega\\equiv+\\infty}$."
        ]
      },
      {
        "name": "Mean-value / slope blow-up controlling the modulus",
        "steps": [
          "With $g(y)=-\\ln(1-y)$ we have $g'(y)=\\dfrac{1}{1-y}>0$ on $[0,1)$, confirming $g$ is differentiable, strictly increasing, hence continuous — (a) YES. The slope $g'(y)\\to+\\infty$ as $y\\to1^{-}$, which is the engine of everything that follows.",
          "(b) Integrate the slope: $g(y)-g(0)=\\int_{0}^{y}\\dfrac{dt}{1-t}$, and $\\int_{0}^{1}\\dfrac{dt}{1-t}$ diverges. So $g(y)\\to+\\infty$ as $y\\to1^{-}$, the one-sided limit is infinite, and no finite $g(1)$ extends $g$ continuously — (b) NO.",
          "(c) For uniform continuity one would need a single $\\delta$ with $|g(y)-g(y')|<\\varepsilon$ whenever $|y-y'|<\\delta$. By the Mean Value Theorem, $g(y')-g(y)=g'(c)\\,(y'-y)$ for some $c$ between them, and $g'(c)=\\tfrac{1}{1-c}$ is unbounded as $c\\to1$. Fix $\\delta>0$ and the gap $y'-y=\\delta/2$ with the pair near $1$: then $g(y')-g(y)=\\tfrac{\\delta/2}{1-c}\\to\\infty$, so no $\\delta$ can force the increment below a fixed $\\varepsilon$. Hence $g$ is NOT uniformly continuous — (c) NO.",
          "This same estimate computes the modulus exactly: for fixed $\\delta>0$, $\\sup_{|y-y'|\\le\\delta}|g(y)-g(y')|=\\sup_{y'\\to1^{-}}\\ln\\!\\Big(1+\\dfrac{\\delta}{1-y'}\\Big)=+\\infty$. Therefore $\\omega(\\delta)=+\\infty$ for every $\\delta>0$, and the complete verdict is $\\boxed{(a)\\,\\text{yes},\\ (b)\\,\\text{no},\\ (c)\\,\\text{no},\\ \\omega(\\delta)\\equiv+\\infty}$."
        ]
      }
    ],
    "remark": "Insight: 'continuous strictly monotone $\\Rightarrow$ continuous inverse' is a purely local/topological fact and says nothing about uniform behaviour. When a continuous increasing bijection squeezes a non-compact domain $[0,\\infty)$ onto a bounded range $[0,1)$, the inverse must accommodate the entire infinite half-line inside a finite length, so it stretches without bound as it approaches the compressed endpoint. Three otherwise-reliable theorems all fail for the SAME structural reason, and each fails because a hypothesis is quietly absent: extendability to a missing endpoint needs a finite one-sided limit (absent, since $g\\to\\infty$); the 'continuous on $[a,b]\\Rightarrow$ uniformly continuous' theorem needs a closed, hence compact, interval (absent, $[0,1)$ is not closed); and uniform continuity needs the image of a bounded domain to stay bounded (absent, the image is $[0,\\infty)$). The clean diagnostic is the modulus of continuity: $\\omega(\\delta)\\to0$ as $\\delta\\to0$ is the definition of uniform continuity, and here $\\omega(\\delta)=+\\infty$ for every $\\delta$ — the strongest possible failure. The transferable discipline for a top ranker: before promoting 'continuous' to 'uniformly continuous' or 'extendable', check whether the domain is compact and whether the function stays bounded; non-compactness on either side of a monotone bijection is exactly where these upgrades break."
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
    "title": "The Wave That Cannot Crest Above One",
    "difficulty": 5,
    "task": "Refute an existence claim by classifying the continuous solution family and extracting the only possible attained maximum",
    "tags": [
      "functional-equation",
      "dalembert",
      "extreme-value-theorem",
      "global-bound",
      "non-compact-domain",
      "doubling-recursion"
    ],
    "statement": "A student claims to have found a function $f:\\mathbb{R}\\to\\mathbb{R}$ with all of the following properties simultaneously: (1) $f$ is continuous on $\\mathbb{R}$; (2) $f$ satisfies d'Alembert's functional equation $f(x+y)+f(x-y)=2\\,f(x)\\,f(y)$ for all real $x,y$; (3) $f$ is not identically zero; (4) $f$ attains a global maximum, and that maximum value equals $f(2)=\\tfrac32$. Prove that no such function exists. More precisely, determine the set of all values that the global maximum (when attained) of a continuous, not-identically-zero solution of $f(x+y)+f(x-y)=2f(x)f(y)$ can take, and report that set as your answer.",
    "answer": "$\\{1\\}$",
    "trap": "The fatal move is to treat condition (4) as harmless and reach for the Extreme Value Theorem as if it manufactured the maximum for free. A strong student reasons: '$f$ is continuous, EVT guarantees a continuous function attains its max, so an attained value of $\\tfrac32$ is perfectly possible — I just need to build the right $f$.' But EVT requires a COMPACT domain, and here the domain is all of $\\mathbb{R}$, which is not compact; EVT says nothing, and whether a maximum is attained is exactly the live question, not a given. The deeper trap is a hidden bound that the solver never checks. Setting $y=0$ forces $f(0)=1$ (since $f\\not\\equiv0$), and setting $x=y$ gives the doubling recursion $f(2x)=2f(x)^2-1$. From here the solution family splits into a sharp dichotomy that the careless solver collapses. If $|f|\\le1$ everywhere (the cosine branch, $f(x)=\\cos(bx)$), then $\\max f=f(0)=1$ and a value of $\\tfrac32$ is flatly impossible because $\\tfrac32>1$. The student who notices this then 'rescues' the claim by jumping to the cosh branch, $f(x)=\\cosh(ax)$, whose values DO exceed $1$ — but this is precisely the missed case that destroys the claim a second time: as soon as $f$ exceeds $1$ at even one point, the doubling recursion drives $f(2^k x)\\to+\\infty$, so $f$ is unbounded above and has NO global maximum at all. So the assertion is self-defeating on both branches: bounded $\\Rightarrow$ max is exactly $1$ (never $\\tfrac32$); unbounded $\\Rightarrow$ no max exists. The conceptual error is believing that 'attains a maximum' and 'takes a value above $1$' can coexist for a continuous d'Alembert solution; the doubling map forbids it. The only attainable maximum value is $1$, so the set of possible attained maxima is $\\{1\\}$ and $\\tfrac32\\notin\\{1\\}$.",
    "solutions": [
      {
        "name": "Doubling recursion forces a clean dichotomy, then EVT cannot save the maximum",
        "steps": [
          "Normalize. Put $y=0$ in $f(x+y)+f(x-y)=2f(x)f(y)$ to get $2f(x)=2f(x)f(0)$, i.e. $f(x)\\bigl(1-f(0)\\bigr)=0$ for all $x$. Since $f\\not\\equiv0$ there is a point where $f\\ne0$, so $f(0)=1$. Putting $x=0$ gives $f(y)+f(-y)=2f(0)f(y)=2f(y)$, so $f$ is even. Now put $x=y$: $f(2x)+f(0)=2f(x)^2$, i.e. the doubling recursion $f(2x)=2f(x)^2-1$ for all $x$.",
          "Dichotomy. Claim: either $|f(x)|\\le1$ for every $x$, or $f$ is unbounded above. Suppose $f(c)>1$ for some $c$ (necessarily $c\\ne0$ since $f(0)=1$). Set $t_0=f(c)$ and, using the recursion along $c,2c,4c,\\dots$, let $t_{k}=f(2^k c)$, so $t_{k+1}=2t_k^2-1=:h(t_k)$. For $t>1$ we have $h(t)-t=2t^2-t-1=(t-1)(2t+1)>0$ and $h(t)-1=2(t-1)(t+1)>0$, so the sequence $t_k$ is strictly increasing and stays above $1$. Its limit $L\\in(1,\\infty]$ would satisfy $L=2L^2-1$ if finite, whose roots are $L=1,-\\tfrac12$, both $\\le1$ — impossible. Hence $L=+\\infty$, so $f(2^k c)\\to+\\infty$ and $f$ is unbounded above.",
          "Kill the maximum. Suppose, for contradiction, that the claimed $f$ exists and attains a global maximum $M=f(2)=\\tfrac32>1$. Then $f$ takes the value $\\tfrac32>1$, so by the dichotomy $f$ is unbounded above; thus $\\sup f=+\\infty>M$, contradicting that $M$ is the maximum (an upper bound for all values). Therefore no continuous, nonzero d'Alembert solution can have an attained maximum exceeding $1$. Note EVT is powerless here: the domain $\\mathbb{R}$ is not compact, so continuity alone never guaranteed an attained maximum in the first place.",
          "Pin the answer. The boundary value $1$ IS attainable: $f(x)=\\cos(bx)$ is a continuous nonzero solution with $f(0)=1=\\max f$ attained at $x=0$ (indeed any $|f|\\le1$ branch has $f(0)=1$ as a global max). And no value other than $1$ can be the attained maximum: if $\\max f=M<1$ then $M\\ge f(0)=1$ forces $M\\ge1$, a contradiction, while $M>1$ was just excluded. Hence the set of possible attained maxima is exactly $\\boxed{\\{1\\}}$, and since $\\tfrac32\\notin\\{1\\}$ the asserted $f$ does not exist."
        ]
      },
      {
        "name": "Full classification of the continuous solution family",
        "steps": [
          "Reduce as before: $f(0)=1$, $f$ even, and $f(2x)=2f(x)^2-1$. The classical theorem on d'Alembert's equation states that every continuous solution that is not identically zero has exactly one of the forms $f(x)=\\cos(bx)$ with $b\\ge0$, or $f(x)=\\cosh(ax)$ with $a\\ge0$ (the case $b=0$ or $a=0$ giving $f\\equiv1$). One checks directly that each satisfies the identity: $\\cos$ via the product-to-sum formula $\\cos(bx{+}by)+\\cos(bx{-}by)=2\\cos(bx)\\cos(by)$, and $\\cosh$ via $\\cosh(ax{+}ay)+\\cosh(ax{-}ay)=2\\cosh(ax)\\cosh(ay)$.",
          "Read off the supremum of each branch. For $f(x)=\\cos(bx)$ we have $|f|\\le1$ with $f(0)=1$, so $\\sup f=1$, attained at $x=0$. For $f(x)=\\cosh(ax)$ with $a>0$ we have $f(x)\\to+\\infty$ as $x\\to\\infty$, so $\\sup f=+\\infty$ and the maximum is NOT attained. For $f\\equiv1$, $\\max f=1$. Thus the only finite, attained maximum that ever occurs across the entire family equals $1$.",
          "Apply to the claim. An attained maximum equal to $\\tfrac32$ would require a branch whose attained maximum is $\\tfrac32$; but the only attained maxima available are $1$ (cosine / constant branch) — the cosh branch attains no maximum at all. Since $\\tfrac32\\ne1$, no continuous nonzero solution can satisfy condition (4).",
          "Conclude. The set of attainable global maxima of continuous nonzero d'Alembert solutions is $\\boxed{\\{1\\}}$. Because $f(2)=\\tfrac32>1$ would force the unbounded $\\cosh$ branch (where no maximum exists) yet simultaneously demand an attained maximum, the requirements are mutually exclusive and the function described cannot exist."
        ]
      },
      {
        "name": "Branch selector via the curvature at the origin",
        "steps": [
          "From $f(0)=1$, $f$ even, and the doubling identity $f(2x)=2f(x)^2-1$, the local behaviour at $0$ already decides the global branch. Since $f$ is even and continuous with the smoothing that d'Alembert solutions enjoy, write the second-order behaviour at the origin as $f(x)=1+\\tfrac{k}{2}x^2+o(x^2)$ where $k$ is the curvature $f''(0)$ (and $f'(0)=0$ by evenness). Substituting into $f(2x)=2f(x)^2-1$: the left side is $1+2k x^2+o(x^2)$ and the right side is $2\\bigl(1+\\tfrac{k}{2}x^2\\bigr)^2-1=1+2k x^2+o(x^2)$, consistent for every $k$, so $k$ is a free real parameter that labels the solution.",
          "Identify the branches by the sign of $k$. If $k<0$, the solution is $f(x)=\\cos\\!\\bigl(\\sqrt{-k}\\,x\\bigr)$, bounded with $\\sup f=f(0)=1$. If $k=0$, $f\\equiv1$ with $\\max f=1$. If $k>0$, $f(x)=\\cosh\\!\\bigl(\\sqrt{k}\\,x\\bigr)$, which is increasing in $|x|$ and unbounded, so $\\sup f=+\\infty$ and no maximum is attained. The sign of the curvature at $0$ is thus the single switch between 'bounded, max $=1$' and 'unbounded, no max'.",
          "Confront the assertion. Demanding $f(2)=\\tfrac32>1$ forces $k>0$ (the cosh branch is the only one taking values above $1$): indeed $\\cosh(\\sqrt{k}\\cdot2)=\\tfrac32$ pins $\\sqrt{k}=\\tfrac12\\operatorname{arccosh}\\tfrac32>0$. But on that branch $f$ has no global maximum at all, so condition (4) ('attains a global maximum') fails outright. Meanwhile the only branches with an attained maximum ($k\\le0$) have maximum exactly $1<\\tfrac32$, so they cannot reach $\\tfrac32$ either.",
          "Therefore no choice of curvature $k$ produces a continuous nonzero solution that both attains a maximum and has that maximum equal to $\\tfrac32$: the attained-maximum value is always $1$. The set of attainable maxima is $\\boxed{\\{1\\}}$, and the claimed function does not exist."
        ]
      }
    ],
    "remark": "Insight: this is a continuity capstone disguised as a functional equation. The single normalization $f(0)=1$ plus the doubling identity $f(2x)=2f(x)^2-1$ converts a global question about a function on all of $\\mathbb{R}$ into a one-dimensional discrete dynamical system $t\\mapsto 2t^2-1$, whose only fixed points are $1$ and $-\\tfrac12$. The interval $[-1,1]$ is the stable, bounded regime (the cosine world, where $1$ is a genuine attained ceiling); the instant a value pokes above $1$ the orbit escapes to $+\\infty$ (the cosh world, where the ceiling is removed entirely and no maximum exists). The trap fuses two reflexes that strong students trust: 'continuous functions attain their maxima' (true only on COMPACT domains — $\\mathbb{R}$ is not compact, so EVT is silent) and 'I can always build a solution hitting any prescribed value' (false here — the solution family is rigidly classified into cosine and cosh, with attainable maxima frozen at $\\{1\\}$). The transferable discipline for a top ranker: before accepting that an extremum is attained, check compactness; and before accepting a prescribed value, classify the entire solution family and extract the global bound it imposes. A functional equation can quietly install a hard ceiling that no amount of cleverness lifts."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Dirichlet Tilt and the Maximum That Refuses the Theorem",
    "difficulty": 5,
    "task": "Determine the continuity set, then decide on two closed intervals whether the supremum is an attained maximum, locating it as a limit superior",
    "tags": [
      "dirichlet-function",
      "extreme-value-theorem",
      "limsup",
      "supremum-vs-maximum",
      "pathological",
      "sequential-continuity"
    ],
    "statement": "Let $D:\\mathbb{R}\\to\\{0,1\\}$ be the Dirichlet indicator, $D(x)=1$ if $x\\in\\mathbb{Q}$ and $D(x)=0$ if $x\\notin\\mathbb{Q}$, and define the tilted Dirichlet function\n\\[ f(x)=x\\,D(x),\\qquad\\text{i.e. } f(x)=\\begin{cases} x, & x\\in\\mathbb{Q},\\\\ 0, & x\\notin\\mathbb{Q}. \\end{cases} \\]\nThis $f$ is discontinuous at all but one point, yet on the compact interval $[0,1]$ it still manages to obey the conclusion of the Extreme Value Theorem — even though the theorem's hypothesis fails almost everywhere. Investigate honestly, with proof. (a) Find, with justification, the set $C$ of points at which $f$ is continuous. (b) Decide whether $f$ attains a maximum on the closed interval $[0,1]$; if so give its value and every point where it is attained, and likewise decide whether $f$ attains a minimum on $[0,1]$. (c) Now restrict $f$ to the closed interval $J=\\left[\\tfrac12,\\tfrac{1}{\\sqrt2}\\right]$ (whose right endpoint $\\tfrac1{\\sqrt2}$ is irrational). Determine $\\displaystyle S=\\sup_{x\\in J} f(x)$, decide whether this supremum is attained (i.e.\\ is a genuine maximum), and identify $S$ as a limit superior $\\displaystyle\\limsup_{x\\to (1/\\sqrt2)^{-}} f(x)$. Explain why $J$ is compact and $f$ is bounded on $J$, yet no maximizer exists, and why this does not contradict the Extreme Value Theorem.",
    "answer": "\\[\\boxed{\\,C=\\{0\\};\\quad \\max_{[0,1]}f=1\\ \\text{at }x=1,\\ \\min_{[0,1]}f=0;\\quad S=\\tfrac1{\\sqrt2}\\ \\text{(not attained)}\\,}\\]",
    "trap": "There are two opposite, equally fatal reflexes, and the problem is engineered to spring both. The first is the false converse of the Extreme Value Theorem: a strong student computes that $f$ is discontinuous everywhere except $0$, declares 'EVT needs continuity, $f$ isn't continuous, so $f$ need not — or even cannot — attain a maximum on $[0,1]$,' and either refuses to give a max or claims none exists. This treats a SUFFICIENT hypothesis as if it were NECESSARY. EVT says continuous $\\Rightarrow$ extrema attained; it says nothing about discontinuous functions, which may or may not attain extrema. Here $f$ does attain its max: for every $x\\in[0,1]$ we have $f(x)\\le x\\le 1$ with equality only at the rational point $x=1$, so $\\max_{[0,1]}f=f(1)=1$ honestly exists — and the minimum $0$ is attained at $x=0$ and at every irrational. The discontinuity is real but irrelevant to attainment here. The second reflex is the opposite over-confidence: having been burned, the student now assumes the sup is ALWAYS attained and, on $J=[\\tfrac12,\\tfrac1{\\sqrt2}]$, writes 'sup $=\\tfrac1{\\sqrt2}$ attained at the right endpoint,' forgetting that the endpoint $\\tfrac1{\\sqrt2}$ is irrational, where $f$ equals $0$, not $\\tfrac1{\\sqrt2}$. By density of $\\mathbb{Q}$ the supremum over $J$ is still $\\tfrac1{\\sqrt2}$ (rationals creep arbitrarily close to it from below), but no point of $J$ achieves it: $f(\\tfrac1{\\sqrt2})=0$, and every rational $q<\\tfrac1{\\sqrt2}$ gives $f(q)=q<\\tfrac1{\\sqrt2}$ strictly. So $S=\\tfrac1{\\sqrt2}$ is a true supremum but NOT a maximum, and it equals the limit superior $\\limsup_{x\\to(1/\\sqrt2)^-}f(x)=\\tfrac1{\\sqrt2}$. The deepest misconception the problem targets is that the location of the supremum of a discontinuous function can be read off like the maximum of a continuous one; in reality one must locate it as a limsup and then separately ask whether any point realizes that value. There is no contradiction with EVT in part (c): EVT's hypothesis (continuity on the compact $J$) is simply absent, so the theorem makes no promise, and the promise fails.",
    "solutions": [
      {
        "name": "Sequential criterion plus the pinch $0\\le f(x)\\le x$",
        "steps": [
          "(a) Continuity set. At $x_0=0$: for every sequence $x_n\\to0$, $|f(x_n)|=|x_n|\\,D(x_n)\\le|x_n|\\to0=f(0)$ by the squeeze, so $f$ is continuous at $0$. At any $x_0\\neq0$: by density choose rationals $q_n\\to x_0$ and irrationals $t_n\\to x_0$; then $f(q_n)=q_n\\to x_0$ while $f(t_n)=0\\to0$. The two subsequential limits $x_0$ and $0$ differ (as $x_0\\neq0$), so $\\lim_{x\\to x_0}f$ does not exist and $f$ is discontinuous at $x_0$. Hence $C=\\{0\\}$.",
          "(b) Maximum on $[0,1]$. For every $x\\in[0,1]$, $f(x)$ is either $x$ (if $x\\in\\mathbb{Q}$) or $0$, so in all cases $0\\le f(x)\\le x\\le 1$. The upper bound $1$ is achieved precisely when $f(x)=x$ and $x=1$, i.e.\\ at the rational point $x=1$ where $f(1)=1$. No other point reaches $1$: an irrational gives $0$, and a rational $q<1$ gives $f(q)=q<1$. Therefore $\\max_{[0,1]}f=1$, attained only at $x=1$. For the minimum, $f(x)\\ge0$ everywhere with equality at $x=0$ and at every irrational of $[0,1]$ (an uncountable set), so $\\min_{[0,1]}f=0$, attained. Both extrema exist despite discontinuity at every nonzero point.",
          "(c) The interval $J=[\\tfrac12,\\tfrac1{\\sqrt2}]$. First, $S=\\sup_J f$. Every value of $f$ on $J$ is either a rational $q\\in J$ (giving $q\\le\\tfrac1{\\sqrt2}$) or $0$, so $S\\le\\tfrac1{\\sqrt2}$. By density of $\\mathbb{Q}$ pick rationals $q_n\\in J$ with $q_n\\to\\tfrac1{\\sqrt2}^-$ (e.g.\\ truncate the decimal expansion of $\\tfrac1{\\sqrt2}=0.70710678\\ldots$); then $f(q_n)=q_n\\to\\tfrac1{\\sqrt2}$, forcing $S\\ge\\tfrac1{\\sqrt2}$. Hence $S=\\tfrac1{\\sqrt2}$.",
          "Attainment fails. The endpoint $\\tfrac1{\\sqrt2}$ is irrational, so $f(\\tfrac1{\\sqrt2})=0\\neq S$; any rational $q\\in J$ has $q<\\tfrac1{\\sqrt2}$ strictly (equality is impossible since $\\tfrac1{\\sqrt2}\\notin\\mathbb{Q}$), so $f(q)=q<S$; and irrationals give $0<S$. No point of $J$ attains $S$, so the supremum is not a maximum. Finally, $\\limsup_{x\\to(1/\\sqrt2)^-}f(x)=\\tfrac1{\\sqrt2}$: along the rationals $q_n\\nearrow\\tfrac1{\\sqrt2}$ the values $f(q_n)=q_n\\to\\tfrac1{\\sqrt2}$ realize this limsup, while no nearby value exceeds $\\tfrac1{\\sqrt2}$. So $S=\\tfrac1{\\sqrt2}=\\limsup_{x\\to(1/\\sqrt2)^-}f(x)$, not attained. There is no clash with EVT: $J$ is compact (closed and bounded) and $f$ is bounded on $J$, but $f$ is not continuous on $J$, so the theorem's hypothesis is unmet and it predicts nothing. $\\boxed{C=\\{0\\},\\ \\max_{[0,1]}f=1\\text{ at }x=1,\\ \\min_{[0,1]}f=0,\\ S=\\tfrac1{\\sqrt2}\\text{ not attained}}$"
        ]
      },
      {
        "name": "Decompose the range: split each interval into its rational and irrational shadows",
        "steps": [
          "(a) Write $f=g\\cdot D$ with $g(x)=x$ continuous. Continuity of $f$ at $x_0$ requires the rational-side limit ($g(x_0)=x_0$) and the irrational-side limit ($0$) to agree, i.e.\\ $x_0=0$. So $C=\\{0\\}$, recovering part (a) by comparing the two 'shadows' of $f$ — its restriction to $\\mathbb{Q}$ (the line $y=x$) and to the irrationals (the constant $0$).",
          "(b) On any set $A$, the image $f(A)=\\{q:q\\in A\\cap\\mathbb{Q}\\}\\cup\\{0\\}$ (the latter present iff $A$ contains an irrational). For $A=[0,1]$: the rational shadow is $\\mathbb{Q}\\cap[0,1]$, whose supremum is $1$ and is itself rational, hence $1\\in f([0,1])$ and is the largest value; the constant shadow contributes $0$, the smallest value, which is also attained (at $x=0$, a rational, or any irrational). Thus $\\sup f([0,1])=1$ is in the image (a max at $x=1$) and $\\inf f([0,1])=0$ is in the image (a min). Both extrema attained.",
          "(c) For $A=J=[\\tfrac12,\\tfrac1{\\sqrt2}]$: the rational shadow is $\\mathbb{Q}\\cap J$, a set whose supremum is the right endpoint $\\tfrac1{\\sqrt2}$ but — crucially — $\\tfrac1{\\sqrt2}\\notin\\mathbb{Q}$, so the supremum is a limit point of the shadow that the shadow does not contain. Hence $S=\\sup f(J)=\\tfrac1{\\sqrt2}$ but $\\tfrac1{\\sqrt2}\\notin f(J)$: the supremum is not attained. The constant shadow $\\{0\\}$ supplies the minimum $0$, which is attained. The asymmetry between (b) and (c) is entirely whether the right endpoint of the interval lies in $\\mathbb{Q}$.",
          "Identify the limsup: $S$ equals the largest subsequential limit of $f$ as $x\\to\\tfrac1{\\sqrt2}^-$. Approaching through the rational shadow gives values $\\to\\tfrac1{\\sqrt2}$; approaching through irrationals gives $0$; nothing exceeds $\\tfrac1{\\sqrt2}$. So $\\limsup_{x\\to(1/\\sqrt2)^-}f(x)=\\tfrac1{\\sqrt2}=S$. Compactness of $J$ and boundedness of $f$ do not rescue attainment because the missing ingredient is continuity, not compactness. $\\boxed{C=\\{0\\},\\ \\max_{[0,1]}f=1,\\ \\min_{[0,1]}f=0,\\ S=\\tfrac1{\\sqrt2}\\text{ not attained}}$"
        ]
      },
      {
        "name": "Contrapositive stress test of EVT on a sub-interval",
        "steps": [
          "(a) Quick oscillation argument: define $\\operatorname{osc}_f(x_0)=\\limsup_{x\\to x_0}f-\\liminf_{x\\to x_0}f$. For $x_0\\neq0$, rationals push the limsup up to $x_0$ and irrationals push the liminf down to $0$, so $\\operatorname{osc}_f(x_0)=|x_0|>0$ and $f$ is discontinuous there; at $x_0=0$ the oscillation is $0$. A function is continuous exactly where its oscillation vanishes, so $C=\\{0\\}$.",
          "(b) EVT is a one-way implication: continuity on a compact set $\\Rightarrow$ extrema attained. To probe whether attainment can occur without the hypothesis, test directly. On $[0,1]$, the candidate top value is $\\sup_x f(x)$. Since $f(x)\\le x\\le1$ and $x=1$ is rational with $f(1)=1$, the bound $1$ is achieved — attainment holds even though continuity fails everywhere except $0$. So EVT's conclusion can be true while its hypothesis is false: the hypothesis is sufficient, not necessary. The minimum value $0$ is likewise achieved (at $0$ and all irrationals). Verdict for $[0,1]$: max $1$, min $0$, both attained.",
          "(c) Now construct the explicit failure on $J=[\\tfrac12,\\tfrac1{\\sqrt2}]$. Take the increasing rational sequence $q_n=\\lfloor 10^n/\\sqrt2\\rfloor/10^n$ (the $n$-decimal truncation of $\\tfrac1{\\sqrt2}$); each $q_n\\in J$, $q_n\\nearrow\\tfrac1{\\sqrt2}$, and $f(q_n)=q_n\\nearrow\\tfrac1{\\sqrt2}$. Thus the values of $f$ on $J$ come arbitrarily close to $\\tfrac1{\\sqrt2}$, so $S=\\sup_J f\\ge\\tfrac1{\\sqrt2}$; combined with $f\\le x\\le\\tfrac1{\\sqrt2}$ on $J$, we get $S=\\tfrac1{\\sqrt2}$.",
          "Show no maximizer and read off the limsup. If some $x^*\\in J$ had $f(x^*)=S=\\tfrac1{\\sqrt2}$, then $f(x^*)\\neq0$ forces $x^*\\in\\mathbb{Q}$ and $f(x^*)=x^*$, giving $x^*=\\tfrac1{\\sqrt2}$ — impossible since $\\tfrac1{\\sqrt2}$ is irrational. So the sup is unattained: $S$ is a supremum but not a maximum, realized only in the limit, $S=\\limsup_{x\\to(1/\\sqrt2)^-}f(x)=\\tfrac1{\\sqrt2}$. The interval $J$ is compact and $f$ is bounded on it, yet the conclusion of EVT fails — precisely because the missing hypothesis (continuity) is the one that matters, confirming from the other side that in part (b) the attained maximum was a gift of the function's structure, not of any theorem. $\\boxed{C=\\{0\\},\\ \\max_{[0,1]}f=1,\\ \\min_{[0,1]}f=0,\\ S=\\tfrac1{\\sqrt2}\\text{ not attained}}$"
        ]
      }
    ],
    "remark": "Insight: the Extreme Value Theorem is a one-directional gift — continuity on a compact set guarantees attained extrema, but the converse is false in both possible ways, and this single function exhibits both. On $[0,1]$ the tilted Dirichlet function $f(x)=x\\,D(x)$ is discontinuous at every nonzero point yet still attains its maximum ($1$ at $x=1$) and minimum ($0$), proving the continuity hypothesis is sufficient but not necessary; on the twin interval $J=[\\tfrac12,\\tfrac1{\\sqrt2}]$ the same function, equally compact-domained and bounded, fails to attain its supremum $\\tfrac1{\\sqrt2}$ because the only point that could realize it is irrational, where $f$ collapses to $0$. The decisive habit for a top ranker is to never read the supremum of a discontinuous function as a maximum: locate it as a limit superior ($S=\\limsup_{x\\to(1/\\sqrt2)^-}f=\\tfrac1{\\sqrt2}$) and then ask separately whether any point realizes that value. Whether the supremum becomes a maximum here turns on a single arithmetic fact — is the boundary value rational? — which is invisible to compactness and boundedness alone. EVT predicts attainment when its hypotheses hold; outside them, attainment is a coincidence of the function, to be proved by hand, never assumed."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Antisymmetric Crossing and the Phantom Fixed Point",
    "difficulty": 5,
    "task": "Prove a parity-of-crossings statement via IVT plus an antisymmetry pairing, then settle a forced-fixed-point question by exhibiting the precise obstruction",
    "tags": [
      "intermediate-value-theorem",
      "parity-of-crossings",
      "functional-symmetry",
      "fixed-point",
      "counterexample-construction"
    ],
    "statement": "Let $f:[0,1]\\to[0,1]$ be continuous with $f(0)=0$, $f(1)=1$, and the symmetry $f(x)+f(1-x)=1$ for all $x\\in[0,1]$. Write $g(x)=f(x)-(1-x)$, so the zeros of $g$ are exactly the abscissae where the graph of $f$ meets the line $y=1-x$; call such a point a \\text{crossing}. Say $f$ is \\text{transversal} if $g$ has only finitely many zeros and changes sign at each (no zero is a mere touch). Part (a). Prove that $f\\!\\left(\\tfrac12\\right)=\\tfrac12$, so that $\\left(\\tfrac12,\\tfrac12\\right)$ is always a crossing and also always a point where $f(x)=x$. Part (b). Prove that for every transversal $f$ the number of crossings of the graph of $f$ with the line $y=1-x$ is \\text{odd}; deduce that the minimum possible number of crossings, over all such $f$, is some integer $N$, and find $N$. Part (c). It is tempting to think the same symmetry forces $f$ to satisfy $f(x)=x$ at some point of the open interval $(0,1)$ \\text{other} than $\\tfrac12$. Decide whether this is true. If false, exhibit an explicit continuous $f$ obeying all the hypotheses for which $f(x)=x$ has no solution in $(0,1)$ except $x=\\tfrac12$, and prove it. Report the value of $N$ from part (b) as your final answer.",
    "answer": "\\[\\boxed{N=1}\\]",
    "trap": "Two antisymmetry illusions ambush the strong student. First illusion (parity sign error): one notices that $g(1-x)=-g(x)$, so non-central crossings come in mirror pairs $\\{x,\\,1-x\\}$, and concludes the total number of crossings is \\text{even}. That pairing is correct for the crossings away from the centre, but it silently omits the fixed point of the involution $x\\mapsto 1-x$, namely $x=\\tfrac12$, which is its own mirror and is \\text{always} a crossing (since $g(\\tfrac12)=f(\\tfrac12)-\\tfrac12=0$). So the count is (even number of paired non-central crossings) $+\\,1$, which is ODD, not even. The honest engine of the parity is not the pairing at all but the endpoint signs: $g(0)=f(0)-1=-1<0$ and $g(1)=f(1)-0=1>0$, so a transversal $g$ must switch sign an odd number of times between $0$ and $1$ — a pure Intermediate Value / sign-change argument. The symmetry merely \\text{locates} one guaranteed crossing at the centre; it does not change the parity. Second illusion (phantom fixed point): set $d(x)=f(x)-x$. One checks $d$ is also antisymmetric about $\\tfrac12$, namely $d(1-x)=-d(x)$, and that $d(0)=0$ and $d(\\tfrac12)=0$; from this it is tempting to invoke IVT on $[0,\\tfrac12]$ and claim a \\text{second} interior zero of $d$, i.e. a fixed point of $f$ in $(0,1)$ besides $\\tfrac12$. This is FALSE: IVT needs a genuine sign change, and antisymmetry forces nothing about the sign of $d$ on $(0,\\tfrac12)$ — $d$ may be strictly positive on all of $(0,\\tfrac12)$ and strictly negative on $(\\tfrac12,1)$, touching zero only at the endpoints $0,1$ and the centre $\\tfrac12$. The cubic homeomorphism $f(x)=2x^3-3x^2+2x$ realises exactly this, with $f(x)=x$ only at $x=0,\\tfrac12,1$ and no fixed point strictly inside other than $\\tfrac12$. The deeper misconception is mistaking the \\text{value} constraint $g(\\tfrac12)=0$ (a forced crossing) for a \\text{sign}-change constraint (a forced extra root): the symmetry pins down where $f$ must equal $1-x$, but it gives the experimenter complete freedom in how $f-x$ behaves between the centre and the ends.",
    "solutions": [
      {
        "name": "Endpoint signs drive the parity; antisymmetry only locates the centre",
        "steps": [
          "(a) Put $x=\\tfrac12$ in $f(x)+f(1-x)=1$: then $1-x=\\tfrac12$ too, so $2f(\\tfrac12)=1$, giving $f(\\tfrac12)=\\tfrac12$. Hence $g(\\tfrac12)=f(\\tfrac12)-(1-\\tfrac12)=\\tfrac12-\\tfrac12=0$ and also $f(\\tfrac12)=\\tfrac12$, so $(\\tfrac12,\\tfrac12)$ is simultaneously a crossing of $y=1-x$ and a point of $y=x$.",
          "(b) Compute the endpoint values of $g$: $g(0)=f(0)-(1-0)=0-1=-1<0$ and $g(1)=f(1)-(1-1)=1-0=1>0$. For a transversal $f$, $g$ is continuous with finitely many zeros and a strict sign change at each. List the zeros $0<z_1<\\dots<z_m<1$; consecutive sign-constant pieces alternate sign, and the sign flips exactly $m$ times. Since $g$ starts negative at $0$ and ends positive at $1$, the total number of flips is odd, so $m$ is odd. Thus the number of crossings is odd.",
          "Antisymmetry check that the centre is one of them: from $f(1-x)=1-f(x)$, $g(1-x)=f(1-x)-(1-(1-x))=(1-f(x))-x=-(f(x)-(1-x))=-g(x)$. So the zero set is symmetric under $x\\mapsto 1-x$, the non-central zeros split into mirror pairs $\\{z,1-z\\}$ (an even number of them), and the leftover odd one is the self-mirror $z=\\tfrac12$. This re-derives the odd count and shows the centre always contributes one crossing.",
          "Minimum: at least one crossing exists because $g(0)<0<g(1)$ forces a zero by IVT (indeed $x=\\tfrac12$ is one). To see one is achievable, the cubic of part (c) gives $g(x)=(2x-1)(x^2-x+1)$, whose only real root is $x=\\tfrac12$ (the quadratic factor has discriminant $1-4=-3<0$), so it has exactly one crossing. Therefore the minimum is $N=1$, an odd number consistent with (b): $\\boxed{N=1}$.",
          "(c) Disproof of the phantom fixed point: the same cubic $f(x)=2x^3-3x^2+2x$ has $f(x)-x=2x^3-3x^2+x=x(2x-1)(x-1)$, whose roots are exactly $0,\\tfrac12,1$. Hence $f(x)=x$ has \\text{no} solution in $(0,1)$ other than $\\tfrac12$; the claimed forced extra fixed point does not exist."
        ]
      },
      {
        "name": "Degree mod 2 of a continuous map of the interval",
        "steps": [
          "(a) As in Method 1, $x=\\tfrac12$ gives $2f(\\tfrac12)=1$, so $f(\\tfrac12)=\\tfrac12$ and $g(\\tfrac12)=0$.",
          "(b) Regard $g:[0,1]\\to\\mathbb{R}$ as a continuous path with $g(0)<0<g(1)$. For a transversal $g$, define the \\text{signed crossing count} by walking left to right and recording $+1$ each time $g$ goes $-\\!\\to\\!+$ and $-1$ each time it goes $+\\!\\to\\!-$. Because $g$ ends positive and starts negative, the signed count equals $+1$ (the net change of sign-state from $-$ to $+$). The \\text{total} (unsigned) number of crossings has the same parity as this signed count, because up-crossings and down-crossings beyond the first must alternate and thus come in $+/-$ pairs. A net of $+1$ with crossings cancelling in pairs forces an odd total. Hence the number of crossings is odd.",
          "Equivalently, reduce mod $2$: the parity of the number of zeros of a transversal continuous function on $[a,b]$ equals $\\tfrac12\\bigl|\\operatorname{sgn}g(b)-\\operatorname{sgn}g(a)\\bigr|\\pmod 2$ interpreted as $1$ when the endpoint signs differ. Here they differ, so the parity is odd. This is the one-dimensional incarnation of 'degree mod $2$', and it does not use the symmetry at all.",
          "Minimum value: at least one crossing by IVT, and the cubic of part (c) attains exactly one (its $g$ has the single real root $\\tfrac12$). So $N=1$. The symmetry's only role is to guarantee that the single forced crossing can be pinned at the centre: $\\boxed{N=1}$.",
          "(c) The map $x\\mapsto 1-x$ is an orientation-reversing involution of $[0,1]$ fixing only $\\tfrac12$; antisymmetry $g(1-x)=-g(x)$ makes the crossing set invariant but says nothing forcing an extra zero of $d(x)=f(x)-x$. The explicit homeomorphism $f(x)=2x^3-3x^2+2x$ (strictly increasing since $f'(x)=2(3x^2-3x+1)$ and $3x^2-3x+1$ has discriminant $-3<0$, so $f'>0$) satisfies every hypothesis yet meets $y=x$ only at $0,\\tfrac12,1$, killing the phantom interior fixed point."
        ]
      },
      {
        "name": "Folding to the half-interval; explicit obstruction by an odd perturbation",
        "steps": [
          "(a) Same as before: $f(\\tfrac12)=\\tfrac12$, $g(\\tfrac12)=0$.",
          "(b) Fold the problem onto $[0,\\tfrac12]$ using $g(1-x)=-g(x)$. The crossings of $f$ with $y=1-x$ on $[0,1]$ are: the centre $x=\\tfrac12$, plus, for each zero $z\\in[0,\\tfrac12)$ of $g$, its mirror $1-z\\in(\\tfrac12,1]$. Now $g(0)=-1\\ne 0$, so no zero sits at $0$; thus the zeros in $[0,\\tfrac12)$ are an arbitrary finite set $\\{z_1,\\dots,z_k\\}\\subset(0,\\tfrac12)$, contributing $2k$ mirror-paired crossings, and the centre adds one more. Total $=2k+1$, which is odd for every $k\\ge0$.",
          "The number $k$ can be any nonnegative integer (one can manufacture $k$ sign changes of $g$ on $(0,\\tfrac12)$ and odd-extend), so the achievable crossing totals are exactly $\\{1,3,5,\\dots\\}$. The smallest is $k=0$, i.e. $N=1$, realised when $g$ has no zero in $(0,\\tfrac12)$ at all: $\\boxed{N=1}$.",
          "(c) Build the extremal $f$ (and obstruction) directly via an odd perturbation. Let $d(x)=f(x)-x$; the requirements $f(0)=0,f(1)=1,f(x)+f(1-x)=1$ translate to $d(0)=0$ and $d(1-x)=-d(x)$. Choose $d(x)=x(1-x)(1-2x)$: it is a polynomial, $d(0)=0$, and $d(1-x)=(1-x)x(2x-1)=-d(x)$, so $d$ is antisymmetric about $\\tfrac12$ as required. Then $f(x)=x+d(x)=2x^3-3x^2+2x$, which is continuous, has $f(0)=0,f(1)=1$, satisfies $f(x)+f(1-x)=1$, maps $[0,1]$ into $[0,1]$ (it is strictly increasing from $0$ to $1$), and is therefore a valid instance.",
          "On $(0,\\tfrac12)$ each factor $x,\\,1-x,\\,1-2x$ is strictly positive, so $d(x)>0$ there; by antisymmetry $d(x)<0$ on $(\\tfrac12,1)$. Hence $d$ has no sign change on either open half and $f(x)=x$ holds only at $x=0,\\tfrac12,1$. So there is no interior fixed point besides $\\tfrac12$ — the phantom is disproved — and $g(x)=f(x)-(1-x)=(2x-1)(x^2-x+1)$ has its unique real root at $\\tfrac12$, confirming exactly one crossing and $N=1$."
        ]
      }
    ],
    "remark": "Insight: this capstone separates a \\text{value} constraint from a \\text{sign-change} constraint. The symmetry $f(x)+f(1-x)=1$ pins one value, $f(\\tfrac12)=\\tfrac12$, which guarantees a single crossing of $y=1-x$ at the centre and a single guaranteed fixed point there. But the parity of crossings is governed entirely by the endpoint signs of $g(x)=f(x)-(1-x)$ — $g(0)=-1<0$, $g(1)=1>0$ — so a transversal $g$ must change sign an odd number of times: this is the one-dimensional 'degree mod $2$' / Intermediate-Value parity, and the antisymmetric pairing $\\{z,1-z\\}$ of the non-central zeros is exactly what makes the total $2k+1$. The two traps are the mirror of each other: the pairing tempts you to say 'even' (forgetting the self-mirror centre), while the antisymmetry of $d(x)=f(x)-x$ tempts you to manufacture a second interior fixed point (forgetting that antisymmetry gives a forced value at $\\tfrac12$, not a forced sign change). The cubic homeomorphism $2x^3-3x^2+2x$ is the clean obstruction: a perfectly behaved increasing bijection of $[0,1]$ that obeys every hypothesis yet refuses any interior fixed point but the centre, proving $N=1$ is attained and that nothing more is forced. The transferable discipline for a top ranker: to count zeros by parity, look at endpoint signs (an IVT/degree argument), and never upgrade a symmetry-forced \\text{value} to a symmetry-forced \\text{extra root} without an actual sign change."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Healed Pole and the Valley It Hides",
    "difficulty": 5,
    "task": "Fix the parameter that heals a removable pole, then run the Extreme Value Theorem honestly on a closed interval where the unmasked function is non-monotone, and finally classify a level set",
    "tags": [
      "removable-discontinuity",
      "extreme-value-theorem",
      "interior-critical-point",
      "parametric",
      "level-set-count"
    ],
    "statement": "For a real parameter $a$ define\n\\[ f_a(x)=\\frac{x^{3}-5x^{2}+9x-a}{x-1}\\quad(x\\neq 1),\\qquad f_a(1)=L, \\]\nwhere $L\\in\\mathbb{R}$ is to be determined. The fraction has an apparent singularity at $x=1$; the point of the problem is that for exactly one value of $a$ the singularity is \\text{removable}, and once it is healed the resulting function is \\text{not} a tame monotone graph but a genuine valley. (a) Find the unique $a$ for which $\\lim_{x\\to 1}f_a(x)$ exists, and the value $L=f_a(1)$ that makes $f_a$ continuous on all of $\\mathbb{R}$. (b) With that $a$ and $L$ fixed, write $g$ for the continuous function so obtained. Determine, with proof, the maximum and minimum values of $g$ on the closed interval $[-1,4]$ and every point at which each is attained. (c) For how many real numbers $c$ does the equation $g(x)=c$ have \\text{exactly two} solutions $x\\in[-1,4]$? Give the precise set of such $c$. Report as your final answer the value of $a$, the value of $L$, and the maximum and minimum of $g$ on $[-1,4]$.",
    "answer": "\\[\\boxed{a=5,\\ L=2,\\ \\max_{[-1,4]}g=10\\ (\\text{at }x=-1),\\ \\min_{[-1,4]}g=1\\ (\\text{at }x=2)}\\]",
    "trap": "The fatal reflex is to treat the unmasked function as if it inherited the bland, end-loaded behaviour of the rational expression it came from and to run the Extreme Value Theorem only on the endpoints. After healing the pole one gets $g(x)=x^{2}-4x+5$, an UPWARD parabola, and the EVT guarantees a max and a min on the compact $[-1,4]$ but does NOT promise they sit at the ends. A strong student, having (correctly) divided $x^{3}-5x^{2}+9x-5$ by $x-1$, often slips into endpoint-only thinking: 'compare $g(-1)=10$ and $g(4)=5$, so the max is $10$ and the min is $5$.' The maximum $10$ happens to be right, which makes the error invisible — but the minimum is WRONG. The vertex $x=2$ lies strictly inside $(-1,4)$, and there $g(2)=1<5$; the true minimum is the interior turning point, not the smaller endpoint. The reason this matters and a linear $f$ would not punish it: a non-monotone $g$ has a critical point where $g'=0$ in the interior, and the EVT's candidate set is $\\{$endpoints$\\}\\cup\\{$interior stationary points$\\}$ — dropping the second set silently assumes monotonicity. A second, subtler trap lurks in part (a): some assume $x=1$ is automatically removable for every $a$ (since it 'looks like' it always cancels), but $x-1$ divides the numerator only when the numerator vanishes at $1$, i.e. $1-5+9-a=0$, which pins $a=5$ uniquely; any other $a$ leaves a genuine infinite pole. A third illusion: believing the quadratic factor might still have a real root inside the interval that drags the minimum to $0$ or below — but $x^{2}-4x+5=(x-2)^{2}+1\\ge1>0$, so the valley floor is exactly $1$, never lower. The deepest misconception the problem targets is conflating the algebraic act of cancelling a factor (which removes a discontinuity) with the analytic shape of the result (which may hide an interior extremum that the EVT forces you to check by hand).",
    "solutions": [
      {
        "name": "Heal by factoring, then EVT over endpoints plus the stationary point",
        "steps": [
          "(a) The limit $\\lim_{x\\to1}\\frac{x^{3}-5x^{2}+9x-a}{x-1}$ exists (finitely) iff the numerator vanishes at $x=1$, for otherwise the quotient blows up. Numerator at $1$: $1-5+9-a=5-a$, so removability forces $5-a=0$, i.e. $a=5$, uniquely. With $a=5$, polynomial division gives $x^{3}-5x^{2}+9x-5=(x-1)(x^{2}-4x+5)$, hence for $x\\neq1$, $f_5(x)=x^{2}-4x+5$, and $\\lim_{x\\to1}f_5(x)=1-4+5=2$. Setting $L=2$ makes $f_5$ continuous at $1$ (and it is continuous elsewhere as a quotient with nonzero denominator, now matching the polynomial), so $g(x)=x^{2}-4x+5$ on all of $\\mathbb{R}$.",
          "(b) $g$ is continuous and $[-1,4]$ is compact, so by the Extreme Value Theorem $g$ attains a maximum and a minimum, located among the endpoints and the interior stationary points. Differentiate: $g'(x)=2x-4=0$ at $x=2$, which lies strictly inside $(-1,4)$. Evaluate the full candidate set $\\{-1,2,4\\}$: $g(-1)=1+4+5=10$, $g(2)=4-8+5=1$, $g(4)=16-16+5=5$.",
          "Compare: the largest candidate value is $10$ at $x=-1$ and the smallest is $1$ at $x=2$. Because $g(x)=(x-2)^{2}+1$, the value $1$ is a global minimum (the square is $\\ge0$) attained only at $x=2$, and on $[-1,4]$ the maximum $10$ is attained only at $x=-1$ (the parabola is symmetric about $x=2$ and $-1$ is the farther endpoint, distance $3$ versus $2$). Hence $\\max_{[-1,4]}g=10$ at $x=-1$ and $\\min_{[-1,4]}g=1$ at $x=2$; the minimum is the interior turning point, not an endpoint.",
          "Final values: $a=5,\\ L=2,\\ \\max_{[-1,4]}g=10$ at $x=-1,\\ \\min_{[-1,4]}g=1$ at $x=2$: $\\boxed{a=5,\\ L=2,\\ \\max=10,\\ \\min=1}$.",
          "(c) On $[-1,2]$ $g$ strictly decreases from $10$ to $1$, and on $[2,4]$ it strictly increases from $1$ to $5$. A horizontal line $y=c$ meets the left branch once iff $1\\le c\\le10$ and the right branch once iff $1\\le c\\le5$. Two distinct solutions require one hit on each branch with the shared vertex value $c=1$ excluded (there both branches coincide at $x=2$, a single solution). Thus exactly two solutions occur iff $1<c\\le5$; at $c=5$ the two roots are $x=0$ and $x=4$ (both in the interval), still two. The precise set is $c\\in(1,5]$."
        ]
      },
      {
        "name": "Complete the square: read the valley directly",
        "steps": [
          "(a) As above, removability of the pole at $x=1$ demands numerator$(1)=0$: $1-5+9-a=0\\Rightarrow a=5$, and then $f_5(x)=\\dfrac{(x-1)(x^{2}-4x+5)}{x-1}=x^{2}-4x+5$ for $x\\neq1$, with continuous extension value $L=f_5(1)=2$. So $g(x)=x^{2}-4x+5$.",
          "(b) Complete the square: $g(x)=(x-2)^{2}+1$. For all real $x$, $(x-2)^{2}\\ge0$, so $g(x)\\ge1$ with equality exactly at $x=2$. Since $2\\in[-1,4]$, the minimum on the interval equals the global minimum $1$, attained at $x=2$ — an interior point, which is why the EVT's interior candidate cannot be skipped.",
          "For the maximum, $g(x)-1=(x-2)^{2}$ is increasing in the distance $|x-2|$. On $[-1,4]$ that distance is maximised at the endpoint farthest from $2$: $|-1-2|=3>|4-2|=2$. Hence the maximum is at $x=-1$, with $g(-1)=(-3)^{2}+1=10$, and no other point of the interval is as far from $2$, so the maximiser is unique. Therefore $\\max_{[-1,4]}g=10$ at $x=-1$, $\\min_{[-1,4]}g=1$ at $x=2$, giving $\\boxed{a=5,\\ L=2,\\ \\max=10,\\ \\min=1}$.",
          "(c) Writing $g(x)=c$ as $(x-2)^{2}=c-1$: real solutions need $c\\ge1$, and then $x=2\\pm\\sqrt{c-1}$. There are two \\text{distinct} roots iff $c>1$, located at $2-\\sqrt{c-1}$ and $2+\\sqrt{c-1}$. Both lie in $[-1,4]$ iff $\\sqrt{c-1}\\le 2$ for the right root ($2+\\sqrt{c-1}\\le4$) and $\\sqrt{c-1}\\le3$ for the left root ($2-\\sqrt{c-1}\\ge-1$); the binding constraint is the right one, $\\sqrt{c-1}\\le2$, i.e. $c\\le5$. So exactly two solutions in the interval iff $1<c\\le5$, the set $(1,5]$ (for $5<c\\le10$ only the left root survives, giving one solution)."
        ]
      },
      {
        "name": "Image of a compact connected set: compute the range, then read off extrema",
        "steps": [
          "(a) Removability $\\Rightarrow$ numerator vanishes at $1\\Rightarrow a=5$; division gives $g(x)=x^{2}-4x+5$ and $L=g(1)=2$, exactly as before. The cancelled factor $x-1$ removes the discontinuity; the surviving quadratic factor $x^{2}-4x+5$ has discriminant $16-20=-4<0$, so it never vanishes and the original numerator's only real zero is the healed point $x=1$ itself.",
          "(b) Since $g$ is continuous and $[-1,4]$ is a compact interval (connected), the image $g([-1,4])$ is a compact interval $[\\,m,\\,M\\,]$ by the Extreme Value and Intermediate Value Theorems combined; $m=\\min g$ and $M=\\max g$ are precisely the attained extrema. To find them, track $g$ monotonically: $g'(x)=2x-4<0$ on $[-1,2)$ and $>0$ on $(2,4]$, so $g$ decreases then increases, with a single interior trough at $x=2$.",
          "Therefore the smallest value on the interval is the trough $g(2)=1$ and the largest is the larger of the two end heights $g(-1)=10,\\ g(4)=5$, namely $10$ at $x=-1$. So $g([-1,4])=[1,10]$, with $\\min=1$ at the interior point $x=2$ and $\\max=10$ at the endpoint $x=-1$. The endpoint-only shortcut would have returned $\\min=g(4)=5$, contradicting $g(2)=1\\in g([-1,4])$ — a direct check that the interior critical point governs the minimum: $\\boxed{a=5,\\ L=2,\\ \\max=10,\\ \\min=1}$.",
          "(c) The map $g$ restricted to the decreasing branch $[-1,2]$ is a continuous bijection onto $[1,10]$, and on the increasing branch $[2,4]$ a continuous bijection onto $[1,5]$. A level $c$ has exactly two preimages iff it is hit once by each branch and the two preimages are distinct. The value $c=1$ is hit by both branches at the same point $x=2$ (one preimage), so it is excluded. Levels in $(1,5]$ are hit by both branches at distinct points (two preimages); levels in $(5,10]$ are hit only by the left branch (one preimage). Hence the set of $c$ with exactly two solutions is $(1,5]$."
        ]
      }
    ],
    "remark": "Insight: the algebra of removing a singularity and the analysis of the resulting shape are two different acts, and this capstone forces you to keep them apart. Healing the pole is a one-line factor cancellation that pins $a=5$ and $L=2$ — but the function it uncovers, $g(x)=(x-2)^{2}+1$, is a non-monotone valley, and that is precisely where the Extreme Value Theorem earns its keep. EVT promises that a continuous function on a compact interval attains its extrema; it does not say where, and its honest candidate set is the endpoints together with every interior stationary point. The whole trap is the habit, learned on linear and monotone examples, of comparing only the endpoints: here that returns the correct maximum ($10$ at $x=-1$) but a wrong minimum ($5$ instead of the true interior $1$ at $x=2$), and the coincidence that the max is right is exactly what camouflages the error. The discriminant of the surviving quadratic being negative is a quiet bonus — it certifies the valley floor sits at height $1$, strictly above zero, so no hidden real root can drag the minimum further down. Part (c) then rewards the student who has truly understood the shape: counting solutions of $g(x)=c$ is just reading the two monotone branches of the parabola, and the asymmetry of $[-1,4]$ about the vertex is what makes the two-solution band the half-open interval $(1,5]$ rather than a symmetric one. The transferable discipline for a top ranker: after any cancellation, re-derive the analytic shape from scratch, always add the interior critical points to the EVT candidate list, and never let a correct maximum lull you into trusting an endpoint-only minimum."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Cauchy Power and the Crossing With No Closed Form",
    "difficulty": 5,
    "task": "Identify the function forced by a continuous multiplicative Cauchy equation, then count — without solving — the real solutions of the transcendental equation it produces",
    "tags": [
      "functional-equation",
      "multiplicative-cauchy",
      "convexity",
      "intermediate-value-theorem",
      "transcendental-root-count",
      "lambert-w"
    ],
    "statement": "Let $f:\\mathbb{R}\\to\\mathbb{R}$ be continuous and strictly positive, satisfying the multiplicative Cauchy equation\n\\[ f(x+y)=f(x)\\,f(y)\\qquad\\text{for all } x,y\\in\\mathbb{R}, \\]\ntogether with the single normalization $f(1)=4$. Differentiability is \\text{not} assumed anywhere. Part (a). Prove, using continuity alone, that these conditions determine $f$ uniquely on all of $\\mathbb{R}$, and identify $f$ in closed form. Part (b). Consider the equation $f(x)=x+3$. Determine, with full proof, the exact number $N$ of real solutions $x\\in\\mathbb{R}$. You are warned that the equation has no solution expressible in elementary closed form (its roots are values of the Lambert $W$ function), so you must \\text{count} the solutions rather than display them. Part (c). One real solution is a clean integer; exhibit it. Then prove that the count $N$ you found in (b) is correct by a convexity argument that needs no formula for the remaining root(s). Report $N$ as your final answer.",
    "answer": "$N=2$",
    "trap": "The equation $f(x)=x+3$, i.e. $4^{x}=x+3$, is built to spring two opposite errors in a strong student who has correctly found $f(x)=4^{x}$. FIRST ERROR (under-count, the lethal one): the integer root $x=1$ is instantly visible because $4^{1}=4=1+3$. Having found it, and recalling that an exponential 'eventually dominates any line', the student reasons that $4^{x}$ starts below the line and then overtakes it once, concluding $N=1$ — exactly one crossing at $x=1$. This silently restricts attention to $x\\ge 0$, where indeed $4^{x}$ rises steeply through the line just once. But as $x\\to-\\infty$ the exponential does NOT stay below the line: $4^{x}\\to 0^{+}$ while the line $x+3\\to-\\infty$, so for very negative $x$ the curve $4^{x}$ sits ABOVE the line again. Concretely $h(x)=4^{x}-(x+3)$ has $h(-3)=4^{-3}-0=\\tfrac1{64}>0$, $h(0)=1-3=-2<0$, $h(2)=16-5=11>0$: the sign pattern $+,-,+$ forces a SECOND crossing in $(-3,0)$, at $x\\approx-2.984$, which has no elementary closed form and is therefore easy to overlook precisely because it cannot be 'spotted' like $x=1$. The honest answer is $N=2$. SECOND ERROR (over-count or mis-count by guessing tangency): a student who senses a hidden root may fear the line is tangent to $4^{x}$ somewhere, creating a double root that should be counted with multiplicity or merged into one — or may simply guess $N=3$ by analogy with cubic-looking pictures. Tangency would require $4^{x}=x+3$ and $(\\ln 4)4^{x}=1$ simultaneously, i.e. $4^{x}=1/\\ln4$ and hence $x+3=1/\\ln4\\approx0.721$, giving $x\\approx-2.279$; but at that $x$ one has $4^{x}=1/\\ln4\\ne x+3$, so the slopes never match at a common point and BOTH crossings are transversal — there is no tangency, no triple intersection, exactly two simple roots. The deeper misconception the problem targets is treating 'exponential beats line' as a global statement about the number of intersections. Strict convexity of $4^{x}$ gives the sharp truth: a strictly convex curve meets a straight line in AT MOST two points, and the end-behaviour ($+\\infty$ at both ends of $h$, negative in the middle) forces AT LEAST two — so the count is pinned to exactly two by convexity, not by solving anything.",
    "solutions": [
      {
        "name": "Logarithmic linearization to additive Cauchy, then convexity root-count",
        "steps": [
          "(a) Since $f>0$ everywhere, set $g(x)=\\ln f(x)$, which is continuous because $f$ is continuous and positive. Taking logs of $f(x+y)=f(x)f(y)$ gives $g(x+y)=g(x)+g(y)$ for all real $x,y$: $g$ is a continuous solution of the additive Cauchy equation. The only continuous additive functions are linear, $g(x)=cx$ for a constant $c$ (continuity rules out the pathological non-measurable solutions). Hence $f(x)=e^{cx}$. The normalization $f(1)=4$ gives $e^{c}=4$, so $c=\\ln 4$ and $f(x)=e^{(\\ln4)x}=4^{x}$. Uniqueness is automatic since $c$ is forced.",
          "(b) The equation becomes $4^{x}=x+3$. Put $h(x)=4^{x}-(x+3)$, continuous on $\\mathbb{R}$. Its zeros are exactly the solutions sought. We count them by sign analysis plus convexity. End behaviour: as $x\\to+\\infty$, $4^{x}$ dominates the line so $h\\to+\\infty$; as $x\\to-\\infty$, $4^{x}\\to0^{+}$ while $-(x+3)\\to+\\infty$, so again $h\\to+\\infty$. In between, $h(0)=1-3=-2<0$. Thus $h$ is positive at both ends and negative at $x=0$.",
          "By the Intermediate Value Theorem applied on $(-\\infty,0]$ and on $[0,\\infty)$ separately, $h$ has at least one zero in each: sample points make this explicit, $h(-3)=\\tfrac1{64}>0$ with $h(0)<0$ gives a root in $(-3,0)$, and $h(0)<0$ with $h(2)=11>0$ gives a root in $(0,2)$. So $N\\ge 2$.",
          "Upper bound by convexity: $h''(x)=(\\ln4)^{2}\\,4^{x}>0$ for all $x$, so $h$ is strictly convex. A strictly convex function has a strictly increasing derivative, hence is decreasing then increasing (or monotone), and therefore changes sign at most twice; equivalently it can have at most two real zeros. Combining, $N\\le 2$.",
          "Therefore $N=2$. $\\boxed{N=2}$"
        ]
      },
      {
        "name": "Geometric: a straight line meets a strictly convex graph in at most two points",
        "steps": [
          "(a) As above, continuity and positivity let us write $g=\\ln f$, a continuous additive function, forcing $g(x)=cx$ and $f(x)=4^{x}$ from $f(1)=4$. We use this $f$ throughout.",
          "(b)+(c) Interpret $4^{x}=x+3$ as the intersection of the curve $y=4^{x}$ with the line $L:y=x+3$. The graph of $4^{x}$ is strictly convex (it lies strictly above each of its tangent lines and below each chord). A fundamental fact: a strictly convex curve and a straight line intersect in at most two points — for if they met in three points $x_1<x_2<x_3$, the middle point $x_2$ would lie on the chord joining $(x_1,\\cdot)$ and $(x_3,\\cdot)$ of the convex curve, contradicting strict convexity (the curve is strictly below that chord at $x_2$). So there are at most two solutions.",
          "Now produce two intersections explicitly enough to guarantee they exist. The integer crossing is clean: at $x=1$, $4^{1}=4=1+3$, so $(1,4)$ lies on both curve and line — one intersection. For the second, evaluate the gap $h=4^{x}-(x+3)$ at $x=-3$: $h(-3)=4^{-3}-0=\\tfrac1{64}>0$, the curve is above the line; at $x=0$, $h(0)=1-3=-2<0$, the curve is below the line. By the IVT the curve crosses the line somewhere in $(-3,0)$ — a second, distinct intersection (it lies left of $0$, while the first is at $x=1$).",
          "Two intersections exist and at most two are possible, so exactly two occur: $N=2$. (The left crossing, near $x\\approx-2.984$, has no elementary closed form — it is $-3-W_{0}(-\\tfrac{\\ln4}{64})/\\ln4$ — which is why the count, not a formula, is the goal.) $\\boxed{N=2}$"
        ]
      },
      {
        "name": "Reduce to monotone branches via the derivative of the gap",
        "steps": [
          "(a) Identical first step: $f>0$ continuous with $f(x+y)=f(x)f(y)$ forces $\\ln f$ to be continuous additive, hence linear, so $f(x)=4^{x}$ using $f(1)=4$.",
          "(b) Let $h(x)=4^{x}-x-3$. Then $h'(x)=(\\ln4)\\,4^{x}-1$, which is strictly increasing (since $4^{x}$ is), so $h'$ has a unique zero at $x_{*}$ where $4^{x_{*}}=1/\\ln4$, i.e. $x_{*}=-\\log_{4}(\\ln4)=-\\dfrac{\\ln(\\ln4)}{\\ln4}\\approx-0.236$. Thus $h$ is strictly decreasing on $(-\\infty,x_{*})$ and strictly increasing on $(x_{*},\\infty)$: it has a single global minimum at $x_{*}$ and is unimodal.",
          "A unimodal function (strictly down then strictly up) has either $0$, $1$, or $2$ zeros according as its minimum value $h(x_{*})$ is positive, zero, or negative. Compute the sign of the minimum: at $x_{*}\\approx-0.236$, $4^{x_{*}}=1/\\ln4\\approx0.721$, so $h(x_{*})\\approx0.721-(-0.236)-3=0.721+0.236-3=-2.04<0$. The minimum is strictly negative, so there are exactly two zeros — one on each monotone branch.",
          "Existence on each branch is confirmed by the end behaviour $h(-\\infty)=+\\infty$ and $h(+\\infty)=+\\infty$ with $h(x_{*})<0$, giving one sign change on $(-\\infty,x_{*})$ and one on $(x_{*},\\infty)$ by the IVT. Since $h(x_{*})\\ne0$, neither branch contributes a tangential double root; both crossings are transversal and distinct. The clean one is $x=1$ (on the increasing branch, since $1>x_{*}$, and $4^{1}=4=1+3$); the other lies on the decreasing branch near $x\\approx-2.984$.",
          "Hence the number of real solutions is exactly two: $N=2$. $\\boxed{N=2}$"
        ]
      }
    ],
    "remark": "Insight: the problem fuses two pillars. First, a functional-equation rigidity result — a continuous positive solution of the multiplicative Cauchy equation is forced to be an exponential, with continuity (not differentiability) the exact hypothesis that excludes the pathological non-measurable solutions; the normalization $f(1)=4$ then pins $f(x)=4^{x}$. Second, a counting question with no closed-form answer: $4^{x}=x+3$ cannot be solved in elementary terms, so the real skill is to count, not to solve. The decisive tool is strict convexity. Because $4^{x}$ is strictly convex, its graph meets any straight line in at most two points; and because the gap $h(x)=4^{x}-(x+3)$ tends to $+\\infty$ at both ends while dipping negative in the middle, at least two crossings are forced. The trap is the seductive slogan 'an exponential overtakes a line once': true for large $x$, but blind to the left tail, where $4^{x}\\to0^{+}$ rises back above the falling line $x+3$ to create a second, formula-less crossing near $x\\approx-2.984$ — the mirror partner of the obvious integer root $x=1$ (the two are precisely the $W_{-1}$ and $W_{0}$ branches of the Lambert function). The transferable discipline for a top ranker: when a transcendental equation resists solving, reach for the second derivative — strict convexity caps the intersection count at two, and end-behaviour plus one interior sign supplies the matching lower bound, settling the count exactly without ever naming a root."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Average That Forces a Fixed Point",
    "difficulty": 5,
    "task": "Prove a fixed point is forced by an integral constraint alone, locate the obstruction to a seductive shortcut, and pin the sharp guaranteed count",
    "tags": [
      "intermediate-value-theorem",
      "fundamental-theorem-of-calculus",
      "rolle",
      "mean-value-for-integrals",
      "fixed-point",
      "counterexample-construction"
    ],
    "statement": "Let $f:[0,1]\\to\\mathbb{R}$ be continuous with the single constraint\n\\[ \\int_0^1 f(x)\\,dx=\\tfrac12. \\]\nNo monotonicity, no symmetry, and no bound on the endpoint values $f(0),f(1)$ are assumed. A point $c$ with $f(c)=c$ is called a \\text{fixed point} of $f$. Part (a). Prove that $f$ must have at least one fixed point in $[0,1]$; that is, the equation $f(x)=x$ always has a solution. Part (b). A student notices that every \\text{linear} $f$ satisfying the constraint (write $f(x)=ax+b$ with $\\tfrac{a}{2}+b=\\tfrac12$) has its fixed point at exactly $x=\\tfrac12$, and conjectures that the constraint forces a fixed point at the centre $x=\\tfrac12$. Decide whether this is true for all continuous $f$ obeying the constraint. If false, exhibit one explicit continuous $f$ with $\\int_0^1 f=\\tfrac12$ whose only fixed point in $[0,1]$ is a single point $c\\neq\\tfrac12$, and prove your claims about it. Part (c). Let $N$ be the largest integer such that \\text{every} continuous $f$ with $\\int_0^1 f=\\tfrac12$ is \\text{guaranteed} to have at least $N$ fixed points in $[0,1]$. Determine $N$, giving both the lower bound (part (a)) and a function that attains it. Report $N$ as your final answer.",
    "answer": "\\[\\boxed{N=1}\\]",
    "trap": "Two seductive shortcuts both fail, and the problem is built to spring each. First trap — the Mean-Value-Theorem-for-Integrals reflex. Seeing the average $\\tfrac{1}{1-0}\\int_0^1 f=\\tfrac12$, a strong student invokes the integral mean value theorem to produce a point $\\xi$ with $f(\\xi)=\\tfrac12$, then declares the fixed point found. But $f(\\xi)=\\tfrac12$ says the graph meets the horizontal line $y=\\tfrac12$, NOT the diagonal $y=x$; it is a fixed point only if it happens to land at $x=\\tfrac12$, which it generally does not. For $f(x)=x^2+\\tfrac{13}{9}x-\\tfrac59$ the average is hit at $\\xi=\\tfrac{-13+\\sqrt{511}}{18}\\approx0.5336$, whereas the genuine fixed point is $c=\\tfrac59\\approx0.5556$: two different points. Equating 'hits its mean' with 'has a fixed point' is the error. Second trap — the linear illusion, which the statement deliberately plants. Every linear $f=ax+b$ with $\\tfrac{a}{2}+b=\\tfrac12$ forces $b=\\tfrac{1-a}{2}$, and solving $ax+b=x$ gives $x=\\tfrac{b}{1-a}=\\tfrac12$ identically (and $a=1$ gives $f(x)=x$, fixed everywhere). So in the entire linear family the fixed point sits at the centre, tempting the conjecture that the constraint pins $c=\\tfrac12$. It does not: the centring is an artefact of linearity, broken by any curvature. A third, subtler mis-step is to try $h(x)=f(x)-x$ and reach for the Intermediate Value Theorem on $[0,1]$ directly — but $f(0)$ and $f(1)$ are unconstrained, so there is no endpoint sign information and IVT has nothing to bite on. The integral is the entire engine: it is exactly the statement that the SIGNED AREA of $h(x)=f(x)-x$ over $[0,1]$ is $\\int_0^1(f(x)-x)\\,dx=\\tfrac12-\\tfrac12=0$. A continuous function of zero signed area is either identically zero or takes both signs, and in either case has a zero; that zero is the fixed point. The deep misconception the problem targets is reading an averaged/integral hypothesis as a pointwise value statement ($f=\\tfrac12$ somewhere) rather than as a comparison that, after the right subtraction, becomes a sign-change / Rolle argument for $f(x)=x$.",
    "solutions": [
      {
        "name": "Signed area zero forces a sign change (IVT on $f-x$)",
        "steps": [
          "(a) Set $h(x)=f(x)-x$, continuous on $[0,1]$. The hypothesis is precisely a statement about $h$: $\\int_0^1 h(x)\\,dx=\\int_0^1 f(x)\\,dx-\\int_0^1 x\\,dx=\\tfrac12-\\tfrac12=0$. Now argue by cases. If $h\\equiv0$ then every point is a fixed point and we are done. Otherwise $h$ is not identically zero; were $h$ of one strict sign on $[0,1]$ (say $h>0$ except possibly at finitely many points, or $h\\ge0$ with $h>0$ somewhere), continuity would force $\\int_0^1 h>0$, contradicting $\\int_0^1 h=0$; likewise $h\\le0$ everywhere with $h<0$ somewhere gives $\\int_0^1 h<0$. Hence $h$ must take a strictly positive value at some $p$ and a strictly negative value at some $q$. By the Intermediate Value Theorem applied to the continuous $h$ between $p$ and $q$, there is $c$ strictly between them with $h(c)=0$, i.e. $f(c)=c$. So a fixed point always exists.",
          "(b) The centre conjecture is false. Take $f(x)=x+(x-\\tfrac59)(x+1)=x^2+\\tfrac{13}{9}x-\\tfrac59$. Then $\\int_0^1 f=\\tfrac13+\\tfrac{13}{18}-\\tfrac59=\\tfrac{6+13-10}{18}=\\tfrac12$, so the constraint holds. Its fixed points solve $h(x)=f(x)-x=(x-\\tfrac59)(x+1)=0$, whose roots are $x=\\tfrac59$ and $x=-1$; only $x=\\tfrac59\\in[0,1]$. Thus the unique fixed point in $[0,1]$ is $c=\\tfrac59\\neq\\tfrac12$. The linear computation that produced $c=\\tfrac12$ relied on $f$ being affine; curvature relocates the crossing. (The same $f$ also dismantles the integral-mean trap: $f=\\tfrac12$ at $\\xi=\\tfrac{-13+\\sqrt{511}}{18}\\approx0.534$, a different point from $c=\\tfrac59$.)",
          "(c) Lower bound $N\\ge1$ is exactly part (a). For sharpness, the function of part (b) has precisely one fixed point in $[0,1]$, since $h(x)=(x-\\tfrac59)(x+1)$ is negative on $[0,\\tfrac59)$ (both factors give a negative product there: $x-\\tfrac59<0$, $x+1>0$) and positive on $(\\tfrac59,1]$, vanishing only at $\\tfrac59$. So exactly one fixed point is attained and no theorem can guarantee a second. Therefore the guaranteed minimum is $\\boxed{N=1}$."
        ]
      },
      {
        "name": "Rolle on the antiderivative compared with $x^2/2$",
        "steps": [
          "(a) Because $f$ is continuous, the Fundamental Theorem of Calculus gives a differentiable antiderivative $F(x)=\\int_0^x f(t)\\,dt$ with $F'(x)=f(x)$, $F(0)=0$, and $F(1)=\\int_0^1 f=\\tfrac12$. Define $G(x)=F(x)-\\tfrac{x^2}{2}$, which is continuous on $[0,1]$ and differentiable on $(0,1)$. Then $G(0)=0-0=0$ and $G(1)=\\tfrac12-\\tfrac12=0$, so $G(0)=G(1)$.",
          "By Rolle's theorem there exists $c\\in(0,1)$ with $G'(c)=0$. But $G'(x)=F'(x)-x=f(x)-x$, so $G'(c)=0$ means $f(c)=c$. A fixed point is forced, and this version even places it in the open interval $(0,1)$. The whole argument is an integral-and-derivative fusion: integrate $f$, subtract the antiderivative $\\tfrac{x^2}{2}$ of the diagonal, and let Rolle do the crossing.",
          "(b) Apply this to $f(x)=x^2+\\tfrac{13}{9}x-\\tfrac59$: here $G'(x)=f(x)-x=(x-\\tfrac59)(x+1)$, whose only zero in $(0,1)$ is $x=\\tfrac59$. So Rolle's guaranteed point is $c=\\tfrac59\\neq\\tfrac12$, confirming the centre conjecture is false while the existence theorem still holds.",
          "(c) Rolle yields at least one such $c$, so $N\\ge1$; the function above has $G'$ vanishing at exactly one interior point, so it has exactly one fixed point and $N$ cannot exceed $1$. Hence $\\boxed{N=1}$."
        ]
      },
      {
        "name": "Average comparison: $f$ cannot stay on one side of the diagonal",
        "steps": [
          "(a) Compare the average of $f$ with the average of the identity. The mean value of $f$ over $[0,1]$ is $\\int_0^1 f=\\tfrac12$, and the mean value of the identity $x$ over $[0,1]$ is $\\int_0^1 x=\\tfrac12$ as well; they are equal. Suppose, for contradiction, $f$ had no fixed point. Then $h=f-x$ is continuous and never zero on the connected set $[0,1]$, so by the IVT it cannot change sign — $h$ is of one constant sign throughout. If $h>0$ everywhere then $\\int_0^1 h>0$ (a continuous positive function on $[0,1]$ has positive integral), forcing $\\int_0^1 f>\\int_0^1 x=\\tfrac12$; if $h<0$ everywhere then $\\int_0^1 f<\\tfrac12$. Either way $\\int_0^1 f\\neq\\tfrac12$, contradicting the hypothesis. Therefore $h$ vanishes somewhere: $f$ has a fixed point.",
          "This phrasing isolates the mechanism: the integral equality says $f$ and $x$ have the same average, and two continuous functions with equal averages cannot have one strictly dominate the other on the whole interval — their difference must cross zero. That crossing is the fixed point.",
          "(b) The claim that the crossing must be at $\\tfrac12$ is false. For the affine family $f=ax+b$ the constraint forces $b=\\tfrac{1-a}{2}$ and the crossing is $x=\\tfrac{b}{1-a}=\\tfrac12$ for every $a\\neq1$, which is why linear experiments always show the centre. But $f(x)=x^2+\\tfrac{13}{9}x-\\tfrac59$ obeys $\\int_0^1 f=\\tfrac12$ and crosses the diagonal only at $c=\\tfrac59$: the average-equality argument guarantees a crossing but is silent about its location, and curvature moves it off centre.",
          "(c) The argument gives at least one crossing for every admissible $f$, so $N\\ge1$; the quadratic above crosses exactly once in $[0,1]$, so $N\\le1$. Combining, $\\boxed{N=1}$."
        ]
      }
    ],
    "remark": "Insight: an integral hypothesis is most often a disguised comparison, not a pointwise value. The single condition $\\int_0^1 f=\\tfrac12$ is exactly $\\int_0^1(f(x)-x)\\,dx=0$ — the statement that $f$ and the diagonal $y=x$ have equal averages — and a continuous difference of zero signed area must either vanish identically or take both signs, hence cross zero. That is the fixed point, delivered by the Intermediate Value Theorem (Method 1, 3) or, dressed as a derivative statement after the Fundamental Theorem of Calculus, by Rolle on $G(x)=\\int_0^x f-\\tfrac{x^2}{2}$ (Method 2). The two traps teach complementary lessons. The Mean-Value-Theorem-for-Integrals shortcut produces a point where $f$ equals its average $\\tfrac12$ — a meeting with the horizontal line $y=\\tfrac12$, not the diagonal $y=x$ — and only coincides with a fixed point by accident; one must subtract $x$, not compare against the constant $\\tfrac12$. The linear illusion, planted on purpose, shows that an entire well-behaved family can centre its fixed point at $\\tfrac12$ for a structural reason (affineness) that evaporates under curvature, so empirical pattern-matching across simple cases is no substitute for proof: the quadratic $x^2+\\tfrac{13}{9}x-\\tfrac59$ obeys the constraint yet fixes only $\\tfrac59$. The transferable discipline for a top ranker is to translate every integral constraint into the right difference, recognise the existence guarantee (signed area zero $\\Rightarrow$ a zero) as separate from any location claim, and never upgrade an averaged condition to a pointwise one without an actual crossing."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Sawtooth Choir That Sings to Two-Thirds",
    "difficulty": 5,
    "task": "Prove a nowhere-differentiable series is nonetheless continuous, decide whether it attains a maximum on the compact interval, and compute that maximum exactly",
    "tags": [
      "uniform-convergence",
      "weierstrass-m-test",
      "extreme-value-theorem",
      "self-similarity",
      "nowhere-differentiable",
      "continuity"
    ],
    "statement": "For a real number $y$ let $\\langle y\\rangle$ denote the distance from $y$ to the nearest integer, so $\\langle y\\rangle=\\min_{k\\in\\mathbb{Z}}|y-k|\\in[0,\\tfrac12]$. Define\n\\[ T(x)=\\sum_{n=0}^{\\infty}\\frac{\\langle 2^{n}x\\rangle}{2^{n}} \\qquad(x\\in\\mathbb{R}). \\]\nEach term is a sawtooth of height $\\tfrac12\\cdot 2^{-n}$ and the partial sums are jagged, with corners doubling in number at every step; it is a classical fact that the limit $T$ is differentiable at no point whatsoever. \\text{Part (a).} Prove that the series defining $T$ converges for every $x$ and that $T$ is continuous on all of $\\mathbb{R}$ (in particular on $[0,1]$), despite $T$ being nowhere differentiable. \\text{Part (b).} Decide, with proof, whether $T$ attains a maximum value on the closed interval $[0,1]$ — i.e. whether there exists $x_\\star\\in[0,1]$ with $T(x_\\star)\\ge T(x)$ for all $x\\in[0,1]$. \\text{Part (c).} Determine the exact value $M=\\max_{x\\in[0,1]}T(x)$ and report $M$ as your final answer.",
    "answer": "\\[\\boxed{M=\\dfrac{2}{3}}\\]",
    "trap": "The problem is engineered to defeat two reflexes. First trap — confusing 'nowhere differentiable' with 'discontinuous' or 'pathological.' Each summand $\\langle 2^n x\\rangle$ is a sawtooth whose corners proliferate without bound, and the limit is the celebrated nowhere-differentiable Takagi (blancmange) function; a strong student, primed by Thomae and Dirichlet earlier in the book, reaches for a Baire-category or full-measure argument and suspects the maximum either fails to exist or is attained only on a measure-zero fractal he cannot pin down. But non-differentiability is irrelevant to existence of a maximum: the only hypothesis the Extreme Value Theorem needs is continuity on a compact set, and continuity here is cheap — the Weierstrass M-test applies because $\\sup_x|\\langle 2^n x\\rangle/2^n|=\\tfrac12\\cdot 2^{-n}$ and $\\sum\\tfrac12\\cdot 2^{-n}=1<\\infty$, so the series converges uniformly and its sum, a uniform limit of continuous partial sums, is continuous. Jaggedness never threatens continuity; it only kills differentiability. Second trap — the term-by-term supremum, which the same M-test makes seductive. Having computed $\\sum_n\\sup_x\\tfrac{\\langle 2^n x\\rangle}{2^n}=\\sum_n\\tfrac12\\cdot2^{-n}=1$, the student concludes $\\max T=1$, as if every sawtooth could simultaneously sit at its own peak. It cannot: $\\langle 2^nx\\rangle=\\tfrac12$ forces the binary digit string of $x$ into a pattern that the very next term $\\langle 2^{n+1}x\\rangle$ then sends to $0$, so consecutive peaks are mutually exclusive. The digits are coupled, the suprema are not independent, and the true maximum is the strictly smaller $\\tfrac23$, attained at $x=\\tfrac13$ and $x=\\tfrac23$. Reading $\\sup\\sum\\le\\sum\\sup$ as an equality — treating an upper bound from independent maximization as the actual extremum — is the error, and the gap $1$ versus $\\tfrac23$ is the price.",
    "solutions": [
      {
        "name": "M-test for continuity, EVT for existence, two-step self-similarity for the value",
        "steps": [
          "(a) Continuity. The function $\\phi(y)=\\langle y\\rangle$ (distance to nearest integer) is continuous and satisfies $0\\le\\phi(y)\\le\\tfrac12$ for all $y$, so the $n$-th term $u_n(x)=\\tfrac{1}{2^n}\\langle 2^n x\\rangle$ is continuous with $\\sup_{x\\in\\mathbb{R}}|u_n(x)|=\\tfrac12\\cdot 2^{-n}=:M_n$. Since $\\sum_{n\\ge0}M_n=\\tfrac12\\sum_{n\\ge0}2^{-n}=\\tfrac12\\cdot2=1<\\infty$, the Weierstrass M-test gives that $\\sum u_n$ converges uniformly on $\\mathbb{R}$. A uniform limit of continuous functions is continuous, so $T$ is continuous on all of $\\mathbb{R}$, hence on $[0,1]$. Nowhere-differentiability is a statement about difference quotients and is logically independent of this; it does not enter.",
          "(b) Existence of a maximum. $T$ is continuous (part (a)) and $[0,1]$ is closed and bounded, hence compact. By the Extreme Value Theorem $T$ attains both a maximum and a minimum on $[0,1]$; in particular a maximizer $x_\\star$ exists. No regularity beyond continuity is needed, so the jaggedness is no obstruction.",
          "(c) Upper bound $T\\le\\tfrac23$. Separate the first two terms and reindex the tail. Writing $\\phi(y)=\\langle y\\rangle$,\\[ T(x)=\\phi(x)+\\tfrac12\\phi(2x)+\\sum_{n\\ge2}2^{-n}\\phi(2^nx)=\\phi(x)+\\tfrac12\\phi(2x)+\\tfrac14\\,T(4x), \\]where the last equality uses $\\sum_{n\\ge2}2^{-n}\\phi(2^nx)=\\tfrac14\\sum_{m\\ge0}2^{-m}\\phi(2^m\\cdot 4x)=\\tfrac14T(4x)$. Let $S=\\sup_{x}T(x)$ (finite, since $0\\le T\\le 1$). Then $S\\le \\big(\\sup_x[\\phi(x)+\\tfrac12\\phi(2x)]\\big)+\\tfrac14 S$. The bracketed function is $1$-periodic and piecewise linear with corners only at $x\\in\\{0,\\tfrac14,\\tfrac12,\\tfrac34,1\\}$ (the points where $x$ or $2x$ crosses a half-integer); evaluating there gives values $0,\\tfrac12,\\tfrac12,\\tfrac12,0$, so its maximum is exactly $\\tfrac12$. Hence $S\\le\\tfrac12+\\tfrac14 S$, i.e. $\\tfrac34S\\le\\tfrac12$, giving $S\\le\\tfrac23$. (Note the naive one-step version $T=\\phi(x)+\\tfrac12T(2x)$ only yields $S\\le\\tfrac12+\\tfrac12S$, i.e. the useless $S\\le1$ — the trap; the two-step grouping is what tightens it.)",
          "(c) Attainment at $x=\\tfrac13$. In binary $\\tfrac13=0.010101\\ldots$, so $2^n\\cdot\\tfrac13$ has fractional part $\\tfrac13$ (for even $n$) or $\\tfrac23$ (for odd $n$); in both cases the distance to the nearest integer is $\\tfrac13$. Thus $\\langle 2^n\\cdot\\tfrac13\\rangle=\\tfrac13$ for every $n$, and\\[ T(\\tfrac13)=\\sum_{n\\ge0}2^{-n}\\cdot\\tfrac13=\\tfrac13\\cdot 2=\\tfrac23. \\]Combined with $T\\le\\tfrac23$ this proves $\\max_{[0,1]}T=\\tfrac23$, attained at $x=\\tfrac13$ (and, by $T(1-x)=T(x)$, also at $x=\\tfrac23$). Therefore $\\boxed{M=\\tfrac23}$."
        ]
      },
      {
        "name": "Dyadic modulus of continuity, and the digit-coupling that caps the sum",
        "steps": [
          "(a) Continuity by an explicit estimate (independent of the M-test). Let $S_N(x)=\\sum_{n=0}^{N}2^{-n}\\langle2^nx\\rangle$, a continuous (indeed Lipschitz) function. The tail obeys $0\\le T(x)-S_N(x)=\\sum_{n>N}2^{-n}\\langle2^nx\\rangle\\le\\sum_{n>N}2^{-n}\\cdot\\tfrac12=2^{-N-1}$, uniformly in $x$. Given $\\varepsilon>0$ choose $N$ with $2^{-N-1}<\\varepsilon/3$; since $S_N$ is continuous at any $x_0$ there is $\\delta>0$ with $|S_N(x)-S_N(x_0)|<\\varepsilon/3$ for $|x-x_0|<\\delta$. Then $|T(x)-T(x_0)|\\le|T-S_N|(x)+|S_N(x)-S_N(x_0)|+|S_N-T|(x_0)<\\varepsilon$. So $T$ is continuous everywhere; the uniform tail bound is exactly uniform convergence in disguise.",
          "(b) The image $T([0,1])$ is the continuous image of a compact connected set, hence a closed bounded interval $[m,M]$; its right endpoint $M$ is attained (closedness), so a maximum exists — the Extreme Value Theorem in interval form.",
          "(c) Why $1$ is wrong and $\\tfrac23$ is right, via binary digits. Write $x=0.b_1b_2b_3\\ldots$ in binary. Then $\\langle 2^{n}x\\rangle$ depends on the digits from position $n{+}1$ onward, and equals its peak $\\tfrac12$ exactly when $b_{n+1}=1$ and the following digits begin $b_{n+2}=0$ in the sense that the fractional part of $2^nx$ is near $\\tfrac12$. The decisive observation: $\\langle 2^nx\\rangle$ and $\\langle 2^{n+1}x\\rangle$ cannot both equal $\\tfrac12$, because fractional part $\\tfrac12$ at level $n$ doubles to fractional part $0$ at level $n+1$, where $\\langle\\cdot\\rangle=0$. So the term-by-term maximum $\\sum 2^{-n}\\cdot\\tfrac12=1$ is unattainable — the peaks are mutually exclusive across consecutive levels.",
          "(c) The sharp constant. To extract the true bound, the only periodic pattern that keeps every $\\langle2^nx\\rangle$ as large as jointly possible is the alternating digit string, which makes every fractional part land at $\\tfrac13$ or $\\tfrac23$, i.e. $\\langle2^nx\\rangle\\equiv\\tfrac13$ — precisely $x=\\tfrac13$. There $T=\\sum2^{-n}\\tfrac13=\\tfrac23$. Rigor for the inequality $T\\le\\tfrac23$ comes from the coupling made quantitative: pairing levels, $\\langle2^nx\\rangle+\\tfrac12\\langle2^{n+1}x\\rangle\\le\\tfrac12$ for every $x$ (a piecewise-linear check on the fractional part $t=\\{2^nx\\}$, where the function $\\min(t,1-t)+\\tfrac12\\min(\\{2t\\},1-\\{2t\\})$ has maximum $\\tfrac12$). Summing $2^{-2k}\\big(\\langle2^{2k}x\\rangle+\\tfrac12\\langle2^{2k+1}x\\rangle\\big)\\le 2^{-2k}\\cdot\\tfrac12$ over $k\\ge0$ telescopes to $T(x)\\le\\tfrac12\\sum_{k\\ge0}4^{-k}=\\tfrac12\\cdot\\tfrac43=\\tfrac23$. With attainment at $\\tfrac13$, $\\boxed{M=\\tfrac23}$."
        ]
      },
      {
        "name": "Fixed point of the operator: the self-similar functional equation",
        "steps": [
          "(a) $T$ is the unique bounded continuous solution of a contraction equation. Define the operator $(\\Lambda g)(x)=\\langle x\\rangle+\\tfrac12 g(2x)$ on bounded functions with the sup norm. Splitting off the $n=0$ term of the series shows $T=\\Lambda T$, i.e. $T(x)=\\langle x\\rangle+\\tfrac12 T(2x)$. Moreover $\\Lambda$ is a contraction: $\\|\\Lambda g-\\Lambda h\\|_\\infty=\\tfrac12\\|g(2\\cdot)-h(2\\cdot)\\|_\\infty=\\tfrac12\\|g-h\\|_\\infty$. By the Banach fixed-point theorem on the complete space of bounded continuous functions, $\\Lambda$ has a unique fixed point, and it is continuous because $\\Lambda$ maps continuous functions to continuous functions (sum of $\\langle x\\rangle$ and a continuous rescaling) and the closed subspace of bounded continuous functions is complete. That fixed point is $T$; hence $T$ is continuous. (This is the M-test repackaged as a contraction, and again says nothing about differentiability.)",
          "(b) Continuous on the compact $[0,1]$ $\\Rightarrow$ a maximizer exists, by the Extreme Value Theorem.",
          "(c) Bound from the fixed-point equation, two steps deep. Iterating $T(x)=\\langle x\\rangle+\\tfrac12T(2x)$ once more, $T(x)=\\langle x\\rangle+\\tfrac12\\langle 2x\\rangle+\\tfrac14T(4x)$. Taking suprema and writing $S=\\sup T\\le 1$, $S\\le\\sup_x\\big(\\langle x\\rangle+\\tfrac12\\langle2x\\rangle\\big)+\\tfrac14S=\\tfrac12+\\tfrac14S$, so $S\\le\\tfrac23$. The single-step equation alone gives only $S\\le\\tfrac12+\\tfrac12S=1$, which is exactly the false term-by-term bound; the contraction must be applied twice to feel the digit coupling.",
          "(c) Attainment. Test $x=\\tfrac13$ in the fixed-point equation: $\\langle\\tfrac13\\rangle=\\tfrac13$ and $2\\cdot\\tfrac13=\\tfrac23$ has $\\langle\\tfrac23\\rangle=\\tfrac13$, and $\\tfrac13,\\tfrac23$ map to each other under $x\\mapsto2x\\bmod1$, so $T(\\tfrac13)=\\tfrac13+\\tfrac12T(\\tfrac23)$ and $T(\\tfrac23)=\\tfrac13+\\tfrac12T(\\tfrac13)$. Solving the $2\\times2$ linear system gives $T(\\tfrac13)=T(\\tfrac23)=\\tfrac23$. Since $\\tfrac23$ meets the upper bound, the maximum is attained and equals $\\boxed{M=\\tfrac23}$."
        ]
      }
    ],
    "remark": "Insight: continuity, extremum-existence, and non-differentiability are three independent facts about the same object, and the whole problem is about not letting one masquerade as another. The Weierstrass M-test does all the heavy lifting for continuity — $\\sum\\sup|u_n|=1<\\infty$ forces uniform convergence, and a uniform limit of continuous partial sums is continuous — while the celebrated fact that $T$ (the Takagi/blancmange function) is differentiable nowhere is simply irrelevant to whether it has a maximum: the Extreme Value Theorem asks only for continuity on a compact set, which it has. The same M-test that proves continuity sets the second trap: its convergent majorant $\\sum 2^{-n}\\cdot\\tfrac12=1$ is the term-by-term supremum, and reading $\\sup\\sum\\le\\sum\\sup$ as equality predicts $\\max=1$. But the suprema are coupled — a sawtooth at its peak ($\\langle2^nx\\rangle=\\tfrac12$) drives the next one to a zero ($\\langle2^{n+1}x\\rangle=0$) — so the peaks are mutually exclusive, and the honest maximum is $\\tfrac23$, attained where every digit conspires to keep all fractional parts at distance $\\tfrac13$, namely $x=\\tfrac13$ and $x=\\tfrac23$. The mechanism that recovers the sharp constant is self-similarity: the single functional equation $T(x)=\\langle x\\rangle+\\tfrac12T(2x)$ only re-derives the loose bound $S\\le1$, but applied twice it tightens to $S\\le\\tfrac12+\\tfrac14S=\\tfrac23$. The transferable lesson for a top ranker: jaggedness never breaks continuity, a convergent M-test majorant is an upper bound and almost never the extremum, and the exact value of a self-similar object is unlocked by iterating its own scaling law just deep enough to expose the hidden coupling between scales."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Removable Floor and the Phantom Critical Point",
    "difficulty": 5,
    "task": "Patch a removable singularity, then locate the global extrema on a closed interval, proving that the seductive interior critical point is a phantom",
    "tags": [
      "removable-singularity",
      "extreme-value-theorem",
      "taylor-expansion",
      "monotonicity",
      "continuity",
      "even-function"
    ],
    "statement": "Define, for $x\\neq0$,\n\\[ g(x)=\\frac{\\sin x-x}{x^{3}}, \\]\nand extend $g$ to $x=0$ by its limiting value, so that $g$ is continuous on all of $[-\\pi,\\pi]$. Part (a). Compute $g(0)$ (the value that makes $g$ continuous), and explain why $g$ cannot be evaluated at $0$ by direct substitution. Part (b). A student, expecting the smooth even bump near the origin to bend back down, asserts that $g$ has an interior critical point in $(0,\\pi)$ where its minimum is attained, and proposes to find the extrema by solving $g'(x)=0$ inside the interval. Investigate whether any solution of $g'(x)=0$ exists in $(0,\\pi)$. Part (c). Using the Extreme Value Theorem, determine the global maximum and the global minimum of the continuous function $g$ on the closed interval $[-\\pi,\\pi]$, stating where each is attained. Report the ordered pair $\\big(\\max g,\\ \\min g\\big)$ as your final answer.",
    "answer": "\\[\\boxed{\\left(-\\tfrac{1}{\\pi^{2}},\\ -\\tfrac{1}{6}\\right)}\\]",
    "trap": "The whole problem is engineered to spring the \"phantom interior extremum\" reflex. A strong student sees a continuous even function on a symmetric closed interval, recalls that the Extreme Value Theorem guarantees a max and a min, and reaches for the standard recipe: set $g'(x)=0$, collect the interior critical points, and compare their values against the endpoints. Here $g'(x)=\\dfrac{x\\cos x+2x-3\\sin x}{x^{4}}=\\dfrac{\\varphi(x)}{x^{4}}$, so the candidate critical points are the zeros of $\\varphi(x)=x\\cos x+2x-3\\sin x$. The trap is to ASSUME, on the strength of the picture (a rounded even hump at the origin sitting at height $-\\tfrac16$, with the graph apparently dishing downward), that $\\varphi$ vanishes somewhere in $(0,\\pi)$ and that the minimum lives at that interior point. It does not: $\\varphi(0)=0$ and $\\varphi'(x)=2-2\\cos x-x\\sin x>0$ on $(0,\\pi)$, so $\\varphi(x)>0$ throughout $(0,\\pi)$, $g'(x)>0$, and $g$ is STRICTLY INCREASING on $(0,\\pi)$ with no interior critical point at all. The interior extremum is a phantom; the EVT extrema are forced to the boundary of $[0,\\pi]$, namely $x=0$ and $x=\\pi$. A second, deeper misconception the problem targets is reading $-\\tfrac16$ as a height the curve dips BELOW: the Taylor expansion $g(x)=-\\tfrac16+\\tfrac{x^{2}}{120}-\\tfrac{x^{4}}{5040}+\\cdots$ shows the leading correction is $+\\tfrac{x^{2}}{120}>0$, so the curve RISES away from $-\\tfrac16$ — the value $-\\tfrac16$ is a floor (the minimum), not a peak. A third snare is the continuity bookkeeping: a student who refuses to patch and works on the punctured interval finds $-\\tfrac16$ is only the INFIMUM of $g$ on $(0,\\pi]$, never attained, so the minimum appears not to exist; EVT is rescued precisely by the removable patch $g(0)=-\\tfrac16$, which converts an unattained infimum into an attained minimum. Finally, a careless reader may confuse the two competitors: the limit value $-\\tfrac16\\approx-0.167$ is smaller than the endpoint value $-\\tfrac1{\\pi^{2}}\\approx-0.101$, so the removable-limit point is the MINIMUM and the endpoints carry the MAXIMUM — swapping them inverts the answer.",
    "solutions": [
      {
        "name": "Patch by Taylor, prove monotonicity, then EVT on the boundary",
        "steps": [
          "(a) Direct substitution gives $\\tfrac{\\sin 0-0}{0^{3}}=\\tfrac{0}{0}$, an indeterminate form, so $g(0)$ is not defined by the formula. Use the Taylor series $\\sin x=x-\\tfrac{x^{3}}{6}+\\tfrac{x^{5}}{120}-\\tfrac{x^{7}}{5040}+\\cdots$, whence $\\sin x-x=-\\tfrac{x^{3}}{6}+\\tfrac{x^{5}}{120}-\\cdots$ and $g(x)=\\dfrac{\\sin x-x}{x^{3}}=-\\tfrac16+\\tfrac{x^{2}}{120}-\\tfrac{x^{4}}{5040}+\\cdots$. Hence $\\displaystyle\\lim_{x\\to0}g(x)=-\\tfrac16$, and the continuous extension is $g(0)=-\\tfrac16$. The same expansion already records the key fact for later: near $0$ the leading correction is $+\\tfrac{x^{2}}{120}>0$, so $g$ sits at $-\\tfrac16$ at the origin and rises as $|x|$ grows.",
          "(b) Differentiate for $x\\neq0$: $g'(x)=\\dfrac{(\\cos x-1)x^{3}-(\\sin x-x)\\,3x^{2}}{x^{6}}=\\dfrac{x\\cos x+2x-3\\sin x}{x^{4}}=\\dfrac{\\varphi(x)}{x^{4}}$, where $\\varphi(x)=x\\cos x+2x-3\\sin x$. Since $x^{4}>0$, the interior critical points are exactly the zeros of $\\varphi$ in $(0,\\pi)$. Now $\\varphi(0)=0$ and $\\varphi'(x)=\\cos x-x\\sin x+2-3\\cos x=2-2\\cos x-x\\sin x$. Write $u=\\tfrac{x}{2}\\in(0,\\tfrac{\\pi}{2})$; using $2-2\\cos x=4\\sin^{2}u$ and $x\\sin x=4u\\sin u\\cos u$ gives $\\varphi'(x)=4\\sin u\\,(\\sin u-u\\cos u)=4\\sin u\\cos u\\,(\\tan u-u)$. On $(0,\\tfrac{\\pi}{2})$ we have $\\sin u>0$, $\\cos u>0$, and $\\tan u>u$, so $\\varphi'(x)>0$ on $(0,\\pi)$. Therefore $\\varphi$ is strictly increasing from $\\varphi(0)=0$, giving $\\varphi(x)>0$ on $(0,\\pi)$, hence $g'(x)>0$ there. Conclusion: $g$ is strictly increasing on $(0,\\pi)$ and $g'(x)=0$ has NO solution in $(0,\\pi)$ — the conjectured interior critical point does not exist.",
          "(c) Because $g(-x)=\\dfrac{\\sin(-x)-(-x)}{(-x)^{3}}=\\dfrac{-(\\sin x-x)}{-x^{3}}=g(x)$, $g$ is even, so it suffices to analyse $[0,\\pi]$ and reflect. On $[0,\\pi]$, $g$ is continuous (after the patch) and strictly increasing by part (b), so its minimum is at the left endpoint $x=0$ and its maximum is at the right endpoint $x=\\pi$. Evaluate: $g(0)=-\\tfrac16$ and $g(\\pi)=\\dfrac{\\sin\\pi-\\pi}{\\pi^{3}}=\\dfrac{-\\pi}{\\pi^{3}}=-\\dfrac{1}{\\pi^{2}}$. By evenness the same two values govern $[-\\pi,0]$ (minimum at $x=0$, maximum at $x=-\\pi$). Since $-\\tfrac16\\approx-0.167<-\\tfrac1{\\pi^{2}}\\approx-0.101$, the Extreme Value Theorem yields global $\\min g=-\\tfrac16$ attained only at $x=0$ (the patched point) and global $\\max g=-\\tfrac1{\\pi^{2}}$ attained at $x=\\pm\\pi$. Hence $\\big(\\max g,\\min g\\big)=\\boxed{\\left(-\\tfrac1{\\pi^{2}},\\,-\\tfrac16\\right)}$."
        ]
      },
      {
        "name": "Sign of the second derivative of the auxiliary function (no series needed)",
        "steps": [
          "(a) The limit is computed without series by L'Hopital applied to $\\dfrac{\\sin x-x}{x^{3}}$ (a $\\tfrac00$ form): differentiating top and bottom thrice, $\\dfrac{\\cos x-1}{3x^{2}}\\to\\dfrac{-\\sin x}{6x}\\to\\dfrac{-\\cos x}{6}\\to-\\tfrac16$ as $x\\to0$. So $g(0)=-\\tfrac16$, and direct substitution fails because it produces $\\tfrac00$.",
          "(b) Set $\\varphi(x)=x\\cos x+2x-3\\sin x$, the numerator of $x^{4}g'(x)$, so interior critical points are the zeros of $\\varphi$ in $(0,\\pi)$. We show $\\varphi>0$ there by a half-angle factorisation of its derivative. Differentiating, $\\varphi'(x)=\\cos x-x\\sin x+2-3\\cos x=2-2\\cos x-x\\sin x$. Using $2-2\\cos x=4\\sin^{2}\\tfrac{x}{2}$ and $x\\sin x=2x\\sin\\tfrac{x}{2}\\cos\\tfrac{x}{2}$ gives $\\varphi'(x)=2\\sin\\tfrac{x}{2}\\big(2\\sin\\tfrac{x}{2}-x\\cos\\tfrac{x}{2}\\big)$. Put $u=\\tfrac{x}{2}\\in(0,\\tfrac{\\pi}{2})$; the bracket is $2\\sin u-2u\\cos u=2\\cos u(\\tan u-u)$, which is positive because $\\cos u>0$ and $\\tan u>u$ on $(0,\\tfrac{\\pi}{2})$. With $\\sin\\tfrac{x}{2}>0$ as well, $\\varphi'(x)>0$ on $(0,\\pi)$. Since $\\varphi(0)=0$, integrating the positive derivative yields $\\varphi(x)>0$ on $(0,\\pi)$, hence $g'(x)=\\varphi(x)/x^{4}>0$. So $g$ is strictly increasing on $(0,\\pi)$ and $g'(x)=0$ has no interior root — the student's phantom critical point is ruled out by the strict sign of $\\varphi$.",
          "(c) Strict monotonic increase on $[0,\\pi]$ plus continuity (via the patch $g(0)=-\\tfrac16$) places the extrema at the endpoints: minimum $g(0)=-\\tfrac16$, maximum $g(\\pi)=-\\tfrac1{\\pi^{2}}$. Evenness, $g(-x)=g(x)$, mirrors this to $[-\\pi,0]$ without changing the two extreme values. Comparing $-\\tfrac16<-\\tfrac1{\\pi^{2}}$, the Extreme Value Theorem gives global $\\max g=-\\tfrac1{\\pi^{2}}$ (at $x=\\pm\\pi$) and global $\\min g=-\\tfrac16$ (at $x=0$), so the answer is $\\boxed{\\left(-\\tfrac1{\\pi^{2}},\\,-\\tfrac16\\right)}$."
        ]
      },
      {
        "name": "Bounding the quotient: a sandwich that pins both extremes",
        "steps": [
          "(a) For the patch, use the known sharp bound $x-\\tfrac{x^{3}}{6}\\le\\sin x\\le x-\\tfrac{x^{3}}{6}+\\tfrac{x^{5}}{120}$ for $x\\ge0$ (alternating Taylor remainder). Subtracting $x$ and dividing by $x^{3}>0$ gives $-\\tfrac16\\le g(x)\\le-\\tfrac16+\\tfrac{x^{2}}{120}$ for $x\\in(0,\\pi]$. As $x\\to0^{+}$ both bounds tend to $-\\tfrac16$, so by the squeeze $g(x)\\to-\\tfrac16$, forcing the continuous value $g(0)=-\\tfrac16$; direct substitution is impossible because the formula is $\\tfrac00$ at $0$.",
          "(b) The left inequality $-\\tfrac16\\le g(x)$ for all $x\\in(0,\\pi]$ already shows $g$ never goes below its origin value $-\\tfrac16$, so no interior point can be a minimum lower than $-\\tfrac16$. To rule out an interior critical point altogether, work with the everywhere-convergent even series $g(x)=-\\tfrac16+\\tfrac{x^{2}}{120}-\\tfrac{x^{4}}{5040}+\\cdots=\\sum_{k\\ge0}\\frac{(-1)^{k}x^{2k+2}}{(2k+5)!}-\\tfrac16$ — equivalently $g(x)=\\sum_{k\\ge1}\\frac{(-1)^{k+1}x^{2k}}{(2k+3)!}-\\tfrac16$ — whose term-by-term derivative is $g'(x)=\\sum_{k\\ge1}\\frac{(-1)^{k+1}\\,2k\\,x^{2k-1}}{(2k+3)!}$, with positive leading term $\\tfrac{x}{60}$. This is an alternating series whose term magnitudes $a_k=\\dfrac{2k\\,x^{2k-1}}{(2k+3)!}$ satisfy $\\dfrac{a_{k+1}}{a_k}=\\dfrac{(k+1)\\,x^{2}}{k\\,(2k+4)(2k+5)}<1$ for every $x\\in(0,\\pi]$ and $k\\ge1$ (the bound is largest at $k=1$, $x=\\pi$, where it equals $\\tfrac{2\\pi^{2}}{6\\cdot7}\\approx0.47<1$). Strictly decreasing magnitudes in an alternating series force the sum to exceed its first partial pairing, hence $g'(x)\\ge a_1-a_2>0$ on $(0,\\pi)$. Therefore $g'(x)>0$ and $g'(x)=0$ has no interior solution — the conjecture fails.",
          "(c) With $g$ continuous and strictly increasing on $[0,\\pi]$, the EVT extrema sit at the endpoints. The lower bound is met with equality only in the limit at $0$: $g(0)=-\\tfrac16$, the global minimum. The maximum is $g(\\pi)=\\dfrac{0-\\pi}{\\pi^{3}}=-\\dfrac{1}{\\pi^{2}}$. Evenness extends both conclusions to $[-\\pi,\\pi]$: minimum $-\\tfrac16$ at $x=0$, maximum $-\\tfrac1{\\pi^{2}}$ at $x=\\pm\\pi$. Since $-\\tfrac16<-\\tfrac1{\\pi^{2}}$, the ordered pair is $\\big(\\max g,\\min g\\big)=\\boxed{\\left(-\\tfrac1{\\pi^{2}},\\,-\\tfrac16\\right)}$."
        ]
      }
    ],
    "remark": "Insight: this capstone fuses three ideas a top ranker must hold simultaneously — a removable singularity, a higher-order Taylor expansion, and the Extreme Value Theorem — and the difficulty is that the EVT search refuses to behave like the textbook drill. The reflex is \"continuous function on a closed interval, so set $g'=0$ and tabulate interior critical points against endpoints.\" But here the interior is empty: the numerator $\\varphi(x)=x\\cos x+2x-3\\sin x$ of $g'$ satisfies $\\varphi(0)=0$ and $\\varphi'(x)=2-2\\cos x-x\\sin x=2\\sin\\tfrac{x}{2}\\big(2\\sin\\tfrac{x}{2}-x\\cos\\tfrac{x}{2}\\big)>0$ on $(0,\\pi)$ (because $\\tan u>u$), so $\\varphi>0$, $g$ is strictly increasing, and the conjectured interior minimum is a phantom. The genuine engine is the Taylor floor $g(x)=-\\tfrac16+\\tfrac{x^{2}}{120}-\\cdots$: the value $-\\tfrac16$ is not a height the curve dips below but the height it climbs away from, so $-\\tfrac16$ is the minimum, attained only because the removable patch $g(0)=-\\tfrac16$ converts an unattained infimum into a genuine minimum — strip the patch and the EVT minimum vanishes on the punctured interval. The maximum is then forced to the endpoints, where $g(\\pi)=-\\tfrac1{\\pi^{2}}$, and the final twist is purely numerical taste: $-\\tfrac16<-\\tfrac1{\\pi^{2}}$, so the removable-limit point carries the minimum and the boundary carries the maximum — the opposite of the naive guess that the special interior point should be the extreme one. The transferable discipline: never trust a sketched 'bump' to certify an interior critical point; differentiate, reduce $g'=0$ to a clean comparator, prove its sign, and remember that for a removable singularity the patched value is a first-class candidate for the extremum, not a hole to be skipped."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Additive Logarithm Forced to Find Its Own Summit",
    "difficulty": 5,
    "task": "Identify the function pinned by a continuous additive-over-multiplication Cauchy equation, then prove its quotient attains a global maximum on a non-compact domain and find that maximum",
    "tags": [
      "functional-equation",
      "log-cauchy",
      "extreme-value-theorem",
      "non-compact-domain",
      "coercivity",
      "critical-point"
    ],
    "statement": "Let $f:(0,\\infty)\\to\\mathbb{R}$ be continuous and satisfy the Cauchy-type functional equation\n\\[ f(xy)=f(x)+f(y)\\qquad\\text{for all }x,y>0, \\]\ntogether with the single normalization $f(e)=1$. Differentiability of $f$ is \\text{not} assumed. Part (a). Using continuity alone, prove that these conditions determine $f$ uniquely on all of $(0,\\infty)$ and identify $f$ in closed form. Part (b). Define $h:(0,\\infty)\\to\\mathbb{R}$ by $h(x)=\\dfrac{f(x)}{x}$. Prove that $h$ \\text{attains} a global maximum on the open, unbounded interval $(0,\\infty)$ — note that the Extreme Value Theorem does not apply directly, since $(0,\\infty)$ is neither closed nor bounded — and find the maximizing point $x_{\\star}$ and the maximum value $M=h(x_{\\star})$. Report $M$ as your final answer.",
    "answer": "\\[\\boxed{M=\\tfrac{1}{e}}\\]",
    "trap": "The problem is engineered to spring three errors in a strong student who has correctly identified $f(x)=\\ln x$, so that $h(x)=\\dfrac{\\ln x}{x}$. FIRST ERROR (the lethal one — declaring no maximum exists): seeing the open, unbounded domain $(0,\\infty)$, the student recalls that the Extreme Value Theorem requires a closed bounded interval, observes that $h(x)\\to 0$ as $x\\to\\infty$ and $h(x)\\to-\\infty$ as $x\\to 0^{+}$, and hastily concludes that 'the function runs off the domain, so no global max is attained.' This is precisely backwards: those two limits are exactly the coercivity that \\text{rescues} EVT. Because $h(e)=\\tfrac1e>0$ while $h\\le 0$ on $(0,1]$ and $h\\to 0^{+}$ at infinity, all the competition lives inside some compact box $[a,b]\\subset(0,\\infty)$ on which $h$ is continuous and therefore does attain its max — which is then global. The maximum IS attained; the open domain is a red herring neutralized by the boundary behaviour. SECOND ERROR (locating the max at the wrong critical structure): a student who sets out to maximize may differentiate the wrong object or read the numerator's zero as the peak. Setting $\\ln x=0$ gives $x=1$, where $h(1)=0$ — but that is the \\text{root} of $h$, not its maximum; the true peak sits to its right. Others set $h'(x)=\\dfrac{1-\\ln x}{x^{2}}=0$ correctly but then forget to check it is a maximum (not a minimum or inflection) and skip the boundary/coercivity step, so the answer is unjustified even when numerically right. THIRD ERROR (mis-identifying $f$): forgetting that the substitution $x=y=1$ forces $f(1)=2f(1)$, hence $f(1)=0$, a student may admit a stray additive constant, write $f(x)=\\ln x + c$, and propagate $c\\ne 0$ — destroying both the functional equation (which has no room for a constant) and the normalization. The honest answer is $M=h(e)=\\tfrac1e$, attained uniquely at $x_{\\star}=e$.",
    "solutions": [
      {
        "name": "Linearize the log-Cauchy equation, then coerce EVT onto a compact box",
        "steps": [
          "(a) Continuity + the equation force $f=\\ln$. Put $g(t)=f(e^{t})$ for $t\\in\\mathbb{R}$; $g$ is continuous as a composition. For any $s,t$, $g(s+t)=f(e^{s+t})=f(e^{s}e^{t})=f(e^{s})+f(e^{t})=g(s)+g(t)$, so $g$ is a continuous solution of the additive Cauchy equation, hence linear: $g(t)=ct$ (continuity excludes the pathological non-measurable solutions). The normalization gives $c=g(1)=f(e)=1$, so $g(t)=t$ and $f(x)=g(\\ln x)=\\ln x$. Substituting $x=y=1$ independently confirms $f(1)=2f(1)\\Rightarrow f(1)=0=\\ln 1$, so no additive constant survives and $f$ is unique.",
          "(b) Thus $h(x)=\\dfrac{\\ln x}{x}$, continuous on $(0,\\infty)$. Establish coercivity: as $x\\to 0^{+}$, $\\ln x\\to-\\infty$ and $x\\to0^{+}$ so $h(x)\\to-\\infty$; as $x\\to+\\infty$, $h(x)=\\dfrac{\\ln x}{x}\\to0^{+}$. Also $h(e)=\\dfrac{1}{e}>0$.",
          "Confine the maximizer to a compact set. Since $h(x)\\to-\\infty$ as $x\\to0^{+}$, there is $a\\in(0,1)$ with $h(x)<0$ for $x\\le a$; since $h(x)\\to0^{+}$ as $x\\to\\infty$, there is $b>e$ with $h(x)<\\tfrac1{2e}$ for $x\\ge b$. On $[a,b]$, which is closed and bounded, the continuous $h$ attains a maximum $M=h(x_{\\star})$ by the Extreme Value Theorem, and $M\\ge h(e)=\\tfrac1e>\\tfrac1{2e}$. Outside $[a,b]$ we have $h<\\tfrac1{2e}\\le M$, so $M$ is the global maximum and it is attained — the open unbounded domain poses no obstruction.",
          "Locate $x_{\\star}$. On $(0,\\infty)$, $h'(x)=\\dfrac{1-\\ln x}{x^{2}}$, which is positive for $x<e$ and negative for $x>e$, so the unique interior critical point $x=e$ is where $h$ increases then decreases: a strict global maximum. Hence $x_{\\star}=e$ and $M=h(e)=\\dfrac{\\ln e}{e}=\\dfrac{1}{e}$. $\\boxed{M=\\tfrac1e}$"
        ]
      },
      {
        "name": "A sharp tangent-line inequality: $\\ln t\\le t/e$ with equality only at $t=e$",
        "steps": [
          "(a) As in Method 1, $g(t)=f(e^{t})$ is continuous additive, hence $g(t)=t$ from $f(e)=1$, giving $f(x)=\\ln x$ and $h(x)=\\dfrac{\\ln x}{x}$.",
          "Prove the inequality $\\ln t\\le \\dfrac{t}{e}$ for all $t>0$, with equality iff $t=e$. Let $\\varphi(t)=\\dfrac{t}{e}-\\ln t$. Then $\\varphi'(t)=\\dfrac1e-\\dfrac1t$, which vanishes only at $t=e$ and changes from negative to positive there, so $t=e$ is the unique global minimum of $\\varphi$ (confirmed by $\\varphi''(t)=1/t^{2}>0$, strict convexity). Since $\\varphi(e)=\\dfrac{e}{e}-\\ln e=1-1=0$, we get $\\varphi(t)\\ge 0$, i.e. $\\ln t\\le t/e$, with equality exactly at $t=e$.",
          "Divide by $x>0$: for every $x>0$, $h(x)=\\dfrac{\\ln x}{x}\\le\\dfrac{1}{e}$, and equality holds iff $x=e$. Thus the value $\\tfrac1e$ is both an upper bound and is actually achieved at $x=e$ — attainment is immediate from the equality case, with no separate compactness argument needed.",
          "Therefore $h$ has a global maximum, attained uniquely at $x_{\\star}=e$, of value $M=\\dfrac1e$. $\\boxed{M=\\tfrac1e}$"
        ]
      },
      {
        "name": "Substitute $x=e^{u}$ and maximize $u\\,e^{-u}$ on all of $\\mathbb{R}$",
        "steps": [
          "(a) Same identification: continuity forces $f(x)=\\ln x$, so $h(x)=\\dfrac{\\ln x}{x}$.",
          "Reparametrize by the bijection $x=e^{u}$, $u\\in\\mathbb{R}$ (continuous with continuous inverse), under which $h(e^{u})=\\dfrac{u}{e^{u}}=u\\,e^{-u}=:G(u)$. Maximizing $h$ over $(0,\\infty)$ is equivalent to maximizing $G$ over $\\mathbb{R}$.",
          "$G$ is continuous and coercive: $G(u)\\to-\\infty$ as $u\\to-\\infty$ (since $u\\to-\\infty$, $e^{-u}\\to+\\infty$) and $G(u)\\to0^{+}$ as $u\\to+\\infty$ (exponential beats linear), while $G(1)=e^{-1}>0$. Exactly as in Method 1, coercivity confines the maximizer to a compact $u$-interval, where EVT guarantees a maximum that is therefore global.",
          "$G'(u)=e^{-u}(1-u)$ vanishes only at $u=1$, positive for $u<1$ and negative for $u>1$, so $u=1$ is the unique global maximizer; $G(1)=1\\cdot e^{-1}=\\dfrac1e$. Translating back, $x_{\\star}=e^{1}=e$ and $M=\\dfrac1e$. $\\boxed{M=\\tfrac1e}$"
        ]
      }
    ],
    "remark": "Insight: the problem welds a functional-equation rigidity theorem to an optimization that lives on a forbidden domain. The rigidity half is that a continuous solution of the log-Cauchy equation $f(xy)=f(x)+f(y)$ is forced to be a logarithm — the trick is to transport it to additive Cauchy via $g=f\\circ\\exp$, where continuity (not differentiability) is the exact hypothesis that kills the pathological non-measurable solutions; $f(e)=1$ then pins $f=\\ln$ with no room for an additive constant (since $f(1)=0$ is automatic). The optimization half is the real trap: $(0,\\infty)$ is open and unbounded, so the Extreme Value Theorem cannot be quoted, and the careless reflex is to declare no maximum exists. The correct move is to read the boundary behaviour — $h\\to-\\infty$ at $0^{+}$ and $h\\to0^{+}$ at $\\infty$ — as coercivity, which traps every serious competitor inside a compact box and hands EVT back to you; the critical-point sign test then crowns $x=e$. The transferable discipline for a top ranker: on a non-compact domain, do not abandon EVT — verify the function pushes its sup-seeking values inward (coercivity), restrict to a compact sub-box, and only then differentiate. The slickest finish bypasses compactness entirely through the tangent-line inequality $\\ln x\\le x/e$, whose equality case at $x=e$ both bounds and attains the maximum in one stroke. Either way the answer is $M=h(e)=\\tfrac1e$, the famous summit of $(\\ln x)/x$ that separates the convergent from the divergent in countless ranker problems (e.g. why $a^{b}\\lessgtr b^{a}$ pivots at $e$)."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Cubic Hidden in a Cauchy Shadow",
    "difficulty": 5,
    "task": "Extract the structural skeleton of a functional equation without continuity, prove that continuity is the one hypothesis that rescues the Extreme Value Theorem, then locate the forced extremes and the guaranteed crossing",
    "tags": [
      "cauchy-functional-equation",
      "continuity-as-hypothesis",
      "extreme-value-theorem",
      "intermediate-value-theorem",
      "hamel-pathology",
      "classification"
    ],
    "statement": "A function $f:\\mathbb{R}\\to\\mathbb{R}$ satisfies the functional equation\n\\[\nf(x+y)=f(x)+f(y)+3xy(x+y)\\qquad\\text{for all } x,y\\in\\mathbb{R},\n\\]\ntogether with the single datum $f(1)=-2$.\n\n\\text{Part (a).} Using ONLY the functional equation (no continuity, no differentiability), prove that $f(0)=0$, that $f$ is odd, and that $f$ is pinned on the rationals: $f(q)=q^{3}-3q$ for every $q\\in\\mathbb{Q}$.\n\n\\text{Part (b).} A student claims part (a) already determines $f$ on all of $\\mathbb{R}$, so that $f$ certainly attains a maximum and minimum on $[0,2]$ by the Extreme Value Theorem. Decide, with proof, whether the functional equation plus the datum — WITHOUT assuming continuity — forces $f(x)=x^{3}-3x$ for every real $x$, and whether they force $f$ to attain a maximum on $[0,2]$. If not, explain precisely what extra hypothesis is the crux, and exhibit the obstruction.\n\n\\text{Part (c).} Now ADD the hypothesis that $f$ is continuous. Determine the maximum value $M$ and minimum value $m$ of $f$ on $[0,2]$, the points where they are attained, and prove that there is exactly one $r\\in(0,2)$ with $f(r)=0$ besides any endpoint, giving $r$ exactly. Report $\\bigl(M\\text{ at its point};\\ m\\text{ at its point};\\ r\\bigr)$ as your final answer.",
    "answer": "\\[\\boxed{\\left(M=2\\text{ at }x=2;\\ \\ m=-2\\text{ at }x=1;\\ \\ r=\\sqrt{3}\\right)}\\]",
    "trap": "The problem is built to spring the single most seductive error in the whole subject: believing that an algebraic functional equation, once it pins a function on a dense set, has pinned it everywhere — so that continuity is a decoration rather than the load-bearing wall. Trap 1 (the phantom classification). Part (a) is honest and powerful: setting $x=y=0$ gives $f(0)=2f(0)$, so $f(0)=0$; setting $y=-x$ gives $0=f(0)=f(x)+f(-x)+3x(-x)(0)=f(x)+f(-x)$, so $f$ is odd; and the substitution $g(x):=f(x)-x^{3}$ converts the equation into Cauchy's equation $g(x+y)=g(x)+g(y)$ because the cubic cross-term is exactly $(x+y)^3-x^3-y^3=3xy(x+y)$. Standard additive algebra then forces $g(q)=q\\,g(1)$ on rationals, and the datum $f(1)=-2$ gives $g(1)=-3$, so $f(q)=q^{3}-3q$ for ALL rationals $q$. A strong student, flushed with this, declares $f(x)=x^{3}-3x$ everywhere and applies EVT on $[0,2]$ as if the job were done. It is not. A Cauchy solution $g$ is $\\mathbb{Q}$-linear but, without a regularity hypothesis (continuity, monotonicity, boundedness on a set of positive measure, or measurability), need NOT be $g(x)=-3x$: Hamel's construction gives additive $g$ whose graph is DENSE in the plane, so $g$ — and hence $f=g+x^3$ — is unbounded on every interval, in particular on $[0,2]$. For such an $f$ the supremum on $[0,2]$ is $+\\infty$: NO maximum exists, and the Extreme Value Theorem simply does not apply, because its sole hypothesis — continuity on a compact set — is absent. Continuity is the crux, the exact extra axiom that collapses the entire Hamel zoo to the single line $g(x)=-3x$ (an additive function continuous at one point is linear), and only then does $f(x)=x^3-3x$ hold on all of $\\mathbb{R}$ and EVT bite. Trap 2 (max at the interior critical point). Granted continuity and $f(x)=x^3-3x$, the reflex is to set $f'(x)=3x^2-3=0$, find the interior critical point $x=1$ in $(0,2)$, and announce the maximum there. But $x=1$ is the MINIMUM: $f(1)=-2$, while the maximum $2$ lives at the right endpoint $x=2$, which carries no vanishing derivative. EVT promises the max exists on the compact set; it never promises it sits at an interior stationary point, and on $[0,2]$ the cubic is increasing past $x=1$, carrying its peak to the boundary. Trap 3 (the min is zero). Since $f(0)=0$ and $f$ is odd, a careless reader expects the minimum on $[0,2]$ to be $0$ at the left endpoint; in fact $f$ dips to $-2$ at the interior point $x=1$ — precisely the datum value — and $x^3-3x+2=(x-1)^2(x+2)$ shows this minimum is attained uniquely at $x=1$. Confusing the value the equation HANDS you, $f(1)=-2$, with an incidental data point rather than recognizing it as the genuine global minimum on $[0,2]$ is the last slip; symmetrically $x^3-3x-2=(x-2)(x+1)^2$ pins the maximum uniquely to $x=2$.",
    "solutions": [
      {
        "name": "Cauchy reduction: continuity collapses the Hamel zoo, then calculus EVT/IVT",
        "steps": [
          "Part (a). Put $x=y=0$ in the functional equation: $f(0)=2f(0)+0$, hence $f(0)=0$. Put $y=-x$: $f(0)=f(x)+f(-x)+3x(-x)(x-x)=f(x)+f(-x)$, so $f(x)+f(-x)=0$ and $f$ is odd. Now define $g(x)=f(x)-x^{3}$. Since $(x+y)^3-x^3-y^3=3xy(x+y)$, the equation becomes $g(x+y)+(x+y)^3=g(x)+x^3+g(y)+y^3+3xy(x+y)$, i.e. $g(x+y)=g(x)+g(y)$: $g$ satisfies Cauchy's equation. Additivity gives $g(nx)=ng(x)$ for $n\\in\\mathbb{Z}$ and $g(x)=n\\,g(x/n)$, whence $g(q)=q\\,g(1)$ for every rational $q$. The datum $f(1)=-2$ gives $g(1)=f(1)-1=-3$, so $g(q)=-3q$ and $f(q)=q^{3}-3q$ for all $q\\in\\mathbb{Q}$. No continuity was used.",
          "Part (b). The equation plus the datum do NOT force $f(x)=x^3-3x$ off the rationals, and they do NOT force a maximum on $[0,2]$. The reason is that a $\\mathbb{Q}$-linear (Cauchy) function $g$ need not be linear: choosing a Hamel basis of $\\mathbb{R}$ over $\\mathbb{Q}$ and prescribing $g$ arbitrarily on basis vectors (subject only to $g(1)=-3$) yields additive $g$ whose graph $\\{(x,g(x))\\}$ is DENSE in $\\mathbb{R}^2$; such $g$ is unbounded on every interval. Then $f=g+x^3$ is also unbounded above on $[0,2]$, so $\\sup_{[0,2]}f=+\\infty$ and NO maximum is attained — the Extreme Value Theorem cannot even be invoked, because its only hypothesis, continuity on the compact set $[0,2]$, is missing. Continuity is precisely the crux: an additive function continuous at a single point (equivalently bounded on a set of positive measure, or monotone) is linear, $g(x)=g(1)\\,x=-3x$ for all real $x$; hence with continuity $f(x)=x^3-3x$ everywhere and EVT applies. Without it, part (a)'s rational pinning is genuine but powerless to control $f$ between rationals, and the supposed maximum is a phantom.",
          "Part (c). With continuity, $f(x)=x^{3}-3x$ on $\\mathbb{R}$. On the compact interval $[0,2]$ the Extreme Value Theorem guarantees a max and min, located among the endpoints and the interior critical points. From $f'(x)=3x^{2}-3=3(x-1)(x+1)$ the only critical point in $[0,2]$ is $x=1$. Comparing $f(0)=0,\\ f(1)=-2,\\ f(2)=2$ gives $M=\\max=2$ at $x=2$ and $m=\\min=-2$ at $x=1$. Uniqueness of the locations is exact: $f(x)-2=x^3-3x-2=(x-2)(x+1)^2$ vanishes on $[0,2]$ only at $x=2$, and $f(x)+2=x^3-3x+2=(x-1)^2(x+2)$ vanishes only at $x=1$. (Note the trap: the interior critical point $x=1$ is the MINIMUM, while the maximum sits at the right endpoint $x=2$ where $f'\\ne0$.)",
          "Part (c), the IVT crossing. On $[1,2]$, $f(1)=-2<0<2=f(2)$, and $f$ is continuous, so the Intermediate Value Theorem yields some $r\\in(1,2)\\subset(0,2)$ with $f(r)=0$. Uniqueness there: $f'(x)=3(x^2-1)>0$ for $x>1$, so $f$ is strictly increasing on $[1,2]$ and crosses $0$ exactly once. Solving $x^3-3x=0=x(x^2-3)$ gives $x\\in\\{0,\\sqrt3,-\\sqrt3\\}$; the only root in $(0,2)$ other than the endpoint contribution is $r=\\sqrt3\\approx1.732$. Hence $\\bigl(M=2\\text{ at }x=2;\\ m=-2\\text{ at }x=1;\\ r=\\sqrt3\\bigr)$, i.e. $\\boxed{\\left(M=2\\text{ at }x=2;\\ m=-2\\text{ at }x=1;\\ r=\\sqrt{3}\\right)}$."
        ]
      },
      {
        "name": "Bounded-additive rigidity and a derivative-free, factored sign analysis",
        "steps": [
          "Part (a). As in the algebra above, $f(0)=0$ and oddness follow from $x=y=0$ and $y=-x$, and $g=f-x^3$ is additive with $g(q)=-3q$ on $\\mathbb{Q}$ (using $g(1)=f(1)-1=-3$). Record the consequence we will need: on the rationals $f$ already coincides with the cubic $x^3-3x$.",
          "Part (b). Here is the rigidity that continuity buys, phrased without derivatives. If $f$ is continuous then so is $g=f-x^3$, and a continuous additive function is linear: for any real $x$ pick rationals $q_n\\to x$; then $g(x)=\\lim g(q_n)=\\lim(-3q_n)=-3x$ by continuity, so $f(x)=x^3-3x$ for ALL real $x$. This is exactly the step that fails without continuity. To show it MUST fail in general, note that an additive $g$ that is bounded on some interval is automatically linear (boundedness on a set of positive measure forces linearity); contrapositively, a NONlinear additive solution is unbounded on every interval. Such solutions exist by a Hamel-basis choice consistent with $g(1)=-3$, and for them $f=g+x^3$ is unbounded on $[0,2]$, so no maximum exists and EVT is inapplicable. Thus the bridge from 'pinned on $\\mathbb{Q}$' to 'pinned on $\\mathbb{R}$' is continuity, and only continuity (or an equivalent regularity) makes the Extreme Value Theorem available.",
          "Part (c), extremes by factoring, no calculus. Assume continuity, so $f(x)=x^3-3x$. To find the max on $[0,2]$ compare $f(x)$ with the boundary value $f(2)=2$: $f(x)-2=x^3-3x-2=(x-2)(x+1)^2\\le0$ for $x\\in[0,2]$ since $x-2\\le0$ and $(x+1)^2\\ge0$. Hence $f(x)\\le 2$ throughout, with equality iff $x=2$; so $M=2$ attained uniquely at $x=2$. Likewise compare with $f(1)=-2$: $f(x)+2=x^3-3x+2=(x-1)^2(x+2)\\ge0$ for $x\\in[0,2]$ since $(x-1)^2\\ge0$ and $x+2>0$. Hence $f(x)\\ge-2$, with equality iff $x=1$; so $m=-2$ attained uniquely at $x=1$. The two factorizations replace differentiation entirely and simultaneously deliver the values, the locations, and their uniqueness.",
          "Part (c), the crossing by sign change and monotone factoring. Continuity gives $f(1)=-2<0$ and $f(2)=2>0$, so by IVT a zero $r$ lies in $(1,2)$. Factor $f(x)=x(x-\\sqrt3)(x+\\sqrt3)$; on $(0,2)$ the factors $x>0$ and $x+\\sqrt3>0$ are positive, so the sign of $f$ matches that of $x-\\sqrt3$, which is negative for $x<\\sqrt3$ and positive for $x>\\sqrt3$ — a single crossing at $r=\\sqrt3\\in(1,2)$. Therefore $\\boxed{\\left(M=2\\text{ at }x=2;\\ m=-2\\text{ at }x=1;\\ r=\\sqrt{3}\\right)}$."
        ]
      },
      {
        "name": "Third-difference operator to nail the cubic, then EVT/IVT on the compact",
        "steps": [
          "Part (a). The structural facts $f(0)=0$ and $f(-x)=-f(x)$ come from $x=y=0$ and $y=-x$ as before. To see the cubic skeleton operator-style, define the forward difference $\\Delta_h f(x)=f(x+h)-f(x)$. The functional equation gives $\\Delta_h f(x)=f(x+h)-f(x)=f(h)+3xh(x+h)$ (set $y=h$), so $\\Delta_h f(x)=f(h)+3h x^2+3h^2 x$. Differencing again in $x$ removes the dependence on $f$ entirely: $\\Delta_h(\\Delta_h f)(x)=3h\\big[(x+h)^2-x^2\\big]+3h^2\\big[(x+h)-x\\big]=6h^2x+3h^3+3h^3=6h^2x+6h^3$, and a third difference $\\Delta_h^3 f(x)=6h^3$ is constant — the signature of a cubic. In particular the equation already forces $f$ to behave like a cubic plus an additive remainder; pinning on $\\mathbb{Q}$ via $g=f-x^3$ additive with $g(1)=-3$ gives $f(q)=q^3-3q$ on rationals.",
          "Part (b). The third-difference computation is purely algebraic and holds for EVERY solution, continuous or not, so it cannot by itself eliminate the additive freedom: writing $f=x^3+g$, the operator identity is satisfied by any additive $g$ (additive functions have $\\Delta_h^3 g\\equiv0$). Hence the equation alone leaves the Cauchy term free, and nonlinear additive $g$ (Hamel) make $f$ unbounded on $[0,2]$, defeating any maximum. Continuity is the missing hypothesis that forces $g$ linear ($g(x)=-3x$) and thereby supplies the compact-set continuity the Extreme Value Theorem requires; this is the crux the student overlooked.",
          "Part (c). Under continuity $f(x)=x^3-3x$. Existence of a max and min on $[0,2]$ is the Extreme Value Theorem (continuous on compact). To evaluate, use $f'(x)=3(x^2-1)$: $f$ decreases on $[0,1]$ and increases on $[1,2]$, so the interior critical point $x=1$ is the unique minimum with $m=f(1)=-2$, and the maximum is the larger boundary value, $\\max\\{f(0),f(2)\\}=\\max\\{0,2\\}=2=f(2)$, attained at $x=2$. The increase on $[1,2]$ from $f(1)=-2$ to $f(2)=2$ passes through $0$ exactly once (strict monotonicity), and $x^3-3x=0$ gives the interior root $r=\\sqrt3$. Assembling: $\\boxed{\\left(M=2\\text{ at }x=2;\\ m=-2\\text{ at }x=1;\\ r=\\sqrt{3}\\right)}$."
        ]
      }
    ],
    "remark": "Insight: this capstone is a single sustained argument about which hypothesis is actually doing the work. The functional equation $f(x+y)=f(x)+f(y)+3xy(x+y)$ is a Cauchy equation in disguise — the substitution $g=f-x^3$ exploits $(x+y)^3-x^3-y^3=3xy(x+y)$ to turn it into $g(x+y)=g(x)+g(y)$ — and the seductive truth is that algebra alone pins $f$ on the entire rational line, $f(q)=q^3-3q$, with no analysis whatsoever. The whole difficulty, and the whole point, is recognizing that this is NOT enough: a $\\mathbb{Q}$-linear additive function is the canonical pathological object, with Hamel-basis solutions whose graphs are dense in the plane and which are unbounded on every interval, so $f=g+x^3$ can fail to attain a maximum on $[0,2]$ and the Extreme Value Theorem cannot even be quoted. Continuity is the precise extra axiom that collapses this entire zoo to the single line $g(x)=-3x$ — an additive function continuous at one point (or bounded on a set of positive measure, or monotone) is linear — and only then does $f(x)=x^3-3x$ hold on all of $\\mathbb{R}$ and EVT bite, delivering a genuine max and min on the compact $[0,2]$. The final extremal layer rewards the same habit of not trusting reflexes: the interior critical point $x=1$ is the minimum, not the maximum; the maximum hides at the right endpoint $x=2$ where the derivative does not vanish; the minimum value is the datum $-2$, not the endpoint value $0$; and the factorizations $(x-2)(x+1)^2$ and $(x-1)^2(x+2)$ deliver values, locations, and uniqueness without a single derivative. The transferable lesson for a top ranker: a functional equation hands you a skeleton on a dense set, but flesh between the bones is built by continuity, not algebra — and the Extreme Value Theorem is a promise about continuous functions on compact sets, never a license to read off extrema from stationary points alone."
  }
];
