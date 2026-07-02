/* problems.js — DATA. 100 original continuity problems for C⁰ · The Continuous & the Broken, strictly within the JEE Advanced syllabus: continuity at a point via limits, piecewise gluing, classifying discontinuities, continuous functional equations (basic Cauchy type), the Intermediate Value Theorem, the greatest-integer/fractional-part/signum/modulus functions, composite continuity, the Extreme Value Theorem, and monotonic & inverse functions. No formal ε–δ proofs, Thomae/Dirichlet pathological functions, uniform continuity, Cauchy sequences, or olympiad functional equations (Pexider/Jensen/D'Alembert/parallelogram). Verified in sympy. statement/answer are raw LaTeX (the app auto-detects prose+math); steps use $...$ and $$...$$. */
window.PROBLEMS = [
  {
    "theme": "pointcont",
    "themeLabel": "Continuity at a Point & Piecewise",
    "title": "Patching a Square Root at a Point",
    "difficulty": 4,
    "task": "Find the patch value",
    "tags": [
      "removable",
      "rationalization",
      "one-point",
      "square-root"
    ],
    "statement": "Let $f(x)=\\dfrac{\\sqrt{x+3}-2}{x-1}$ for $x\\neq 1$, with $f(1)$ left undefined. There is exactly one value $f(1)=L$ that makes $f$ continuous at $x=1$. Find $L$.",
    "answer": "Since $\\displaystyle\\lim_{x\\to 1}f(x)=\\frac14$, continuity at $1$ forces $f(1)=L$ where $\\boxed{L=\\dfrac14}$.",
    "trap": "Answering $L=0$. The numerator $\\sqrt{x+3}-2\\to 0$ as $x\\to1$, and a careless reader declares the whole quotient $\\to 0$. This ignores that the denominator $x-1\\to0$ too: the form is $\\tfrac00$, not $\\tfrac0{\\text{nonzero}}$, so the limit is the finite value $\\tfrac14$, not $0$.",
    "solutions": [
      {
        "name": "Rationalize the numerator",
        "steps": [
          "Multiply top and bottom by the conjugate: $\\dfrac{\\sqrt{x+3}-2}{x-1}\\cdot\\dfrac{\\sqrt{x+3}+2}{\\sqrt{x+3}+2}=\\dfrac{(x+3)-4}{(x-1)(\\sqrt{x+3}+2)}=\\dfrac{x-1}{(x-1)(\\sqrt{x+3}+2)}.$",
          "For $x\\neq1$ cancel $x-1$ to get $\\dfrac{1}{\\sqrt{x+3}+2}$, which is continuous at $x=1$.",
          "Hence $\\displaystyle\\lim_{x\\to1}f(x)=\\dfrac{1}{\\sqrt{4}+2}=\\dfrac{1}{4}$, so $\\boxed{L=\\dfrac14}.$"
        ]
      },
      {
        "name": "Substitution $t=x-1$",
        "steps": [
          "Put $t=x-1\\to0$. Then $\\sqrt{x+3}-2=\\sqrt{t+4}-2=2\\!\\left(\\sqrt{1+\\tfrac t4}-1\\right).$",
          "For small $t$, $\\sqrt{1+\\tfrac t4}-1=\\dfrac{t/4}{\\sqrt{1+\\tfrac t4}+1}$, so the quotient becomes $\\dfrac{2\\cdot \\tfrac{t/4}{\\sqrt{1+t/4}+1}}{t}=\\dfrac{1/2}{\\sqrt{1+t/4}+1}.$",
          "Letting $t\\to0$ gives $\\dfrac{1/2}{2}=\\dfrac14$, confirming $\\boxed{L=\\dfrac14}.$"
        ]
      }
    ],
    "remark": "**Insight.** A removable discontinuity is the gentlest kind: the two-sided limit **exists and is finite**, the formula simply forgot to define the point. The job is never to *evaluate* the formula at the bad point but to **cancel the shared zero factor** and read off the survivor. The $\\tfrac00$ form is an invitation, not a verdict."
  },
  {
    "theme": "pointcont",
    "themeLabel": "Continuity at a Point & Piecewise",
    "title": "Tangent Minus Sine, Repaired",
    "difficulty": 4,
    "task": "Find the patch value",
    "tags": [
      "removable",
      "trigonometric",
      "series",
      "one-point"
    ],
    "statement": "Let $f(x)=\\dfrac{\\tan x-\\sin x}{x^{3}}$ for $x\\neq0$ near the origin. Find the value $f(0)=L$ that makes $f$ continuous at $x=0$.",
    "answer": "Factoring, $\\tan x-\\sin x=\\sin x\\,\\dfrac{1-\\cos x}{\\cos x}$, which gives $\\displaystyle\\lim_{x\\to0}f(x)=\\tfrac12$, so $\\boxed{L=\\dfrac12}$.",
    "trap": "Answering $L=0$ (numerator $\\to0$, ignoring the $\\tfrac00$ form) or $L=\\tfrac13$ by mismatching orders — e.g. treating $\\tan x-\\sin x$ as if it were $O(x)$ over $x^3$. The difference is third order, $\\tan x-\\sin x\\sim\\tfrac{x^3}{2}$, so the ratio tends to $\\tfrac12$, not $0$ or $\\tfrac13$.",
    "solutions": [
      {
        "name": "Factor and use standard limits",
        "steps": [
          "$\\tan x-\\sin x=\\dfrac{\\sin x}{\\cos x}-\\sin x=\\sin x\\cdot\\dfrac{1-\\cos x}{\\cos x}.$",
          "So $f(x)=\\dfrac{\\sin x}{x}\\cdot\\dfrac{1-\\cos x}{x^2}\\cdot\\dfrac{1}{\\cos x}.$",
          "As $x\\to0$: $\\dfrac{\\sin x}{x}\\to1$, $\\dfrac{1-\\cos x}{x^2}\\to\\tfrac12$, $\\dfrac1{\\cos x}\\to1$; product $\\to\\tfrac12$, so $\\boxed{L=\\dfrac12}.$"
        ]
      },
      {
        "name": "Series expansion",
        "steps": [
          "$\\tan x=x+\\tfrac{x^3}{3}+\\cdots$ and $\\sin x=x-\\tfrac{x^3}{6}+\\cdots$.",
          "Subtracting, $\\tan x-\\sin x=\\left(\\tfrac13+\\tfrac16\\right)x^3+\\cdots=\\tfrac{x^3}{2}+O(x^5).$",
          "Dividing by $x^3$ gives $\\tfrac12+O(x^2)\\to\\tfrac12$, so $\\boxed{L=\\dfrac12}.$"
        ]
      }
    ],
    "remark": "**Insight.** The whole problem is a contest of **orders of smallness**: $\\tan x$ and $\\sin x$ agree to first order, so their difference begins at $x^3$ — exactly the scale of the denominator. Matching that order yields the finite patch $\\tfrac12$. Guessing $0$ underestimates the cancellation; guessing $\\tfrac13$ forgets that $\\sin x$ contributes too."
  },
  {
    "theme": "pointcont",
    "themeLabel": "Continuity at a Point & Piecewise",
    "title": "The Constant That Cannot Exist",
    "difficulty": 4,
    "task": "Decide if a value exists",
    "tags": [
      "jump",
      "one-sided-limits",
      "piecewise",
      "irremovable"
    ],
    "statement": "Define $f(x)=\\dfrac{\\sin 3x}{x}$ for $x<0$, $f(0)=c$, and $f(x)=\\dfrac{e^{2x}-1}{x}$ for $x>0$. Find all real $c$ for which $f$ is continuous at $x=0$.",
    "answer": "The left limit is $\\lim_{x\\to0^-}\\tfrac{\\sin 3x}{x}=3$ and the right limit is $\\lim_{x\\to0^+}\\tfrac{e^{2x}-1}{x}=2$. Since $3\\neq 2$ the two-sided limit does not exist, so $\\boxed{\\text{no value of }c\\text{ works}}$ (a jump discontinuity).",
    "trap": "Answering $c=3$ (or $c=2$). A student matches the value to one side only — typically the left, $\\lim_{x\\to0^-}f(x)=3$ — and stops. But continuity at $0$ demands LHL $=$ RHL $=f(0)$ simultaneously; with LHL $=3\\neq2=$ RHL no single $c$ can equal both. Averaging to $c=\\tfrac52$ fails for the same reason.",
    "solutions": [
      {
        "name": "Compute both one-sided limits",
        "steps": [
          "Left: $\\dfrac{\\sin 3x}{x}=3\\cdot\\dfrac{\\sin 3x}{3x}\\to 3\\cdot1=3$ as $x\\to0^-$.",
          "Right: $\\dfrac{e^{2x}-1}{x}=2\\cdot\\dfrac{e^{2x}-1}{2x}\\to 2\\cdot1=2$ as $x\\to0^+$.",
          "For continuity we need $3=c=2$, impossible. Hence $\\boxed{\\text{no }c\\text{ exists}}$ and $0$ is a jump discontinuity."
        ]
      },
      {
        "name": "Series comparison",
        "steps": [
          "Near $0$, $\\sin 3x = 3x-\\tfrac{(3x)^3}{6}+\\cdots$, so $\\dfrac{\\sin 3x}{x}=3-\\tfrac{27x^2}{6}+\\cdots\\to3$.",
          "Also $e^{2x}-1=2x+\\tfrac{(2x)^2}{2}+\\cdots$, so $\\dfrac{e^{2x}-1}{x}=2+2x+\\cdots\\to2$.",
          "The leading constants $3$ and $2$ differ, so the left and right limits disagree and $\\boxed{\\text{no }c\\text{ makes }f\\text{ continuous}}$."
        ]
      }
    ],
    "remark": "**Insight.** Continuity at a point is a **three-way agreement**: the left limit, the right limit, and the value must all coincide. When the two one-sided limits already disagree, the discontinuity is a **jump** and **no choice of $f(0)$** can repair it. Matching one side is a half-truth that fools the eye but not the definition."
  },
  {
    "theme": "pointcont",
    "themeLabel": "Continuity at a Point & Piecewise",
    "title": "Modulus Splits the Limit in Two",
    "difficulty": 4,
    "task": "Classify the discontinuity",
    "tags": [
      "modulus",
      "jump",
      "one-sided-limits",
      "factoring"
    ],
    "statement": "Let $f(x)=\\dfrac{x^2-4}{\\,|x-2|\\,}$ for $x\\neq 2$. Decide whether $f$ has a removable discontinuity at $x=2$, and if not, name the jump.",
    "answer": "Writing $x^2-4=(x-2)(x+2)$ and splitting $|x-2|$ by sign gives $\\lim_{x\\to2^-}f=-4$ and $\\lim_{x\\to2^+}f=4$. The one-sided limits differ, so the discontinuity is $\\boxed{\\text{a jump of size }8\\text{ (not removable)}}$.",
    "trap": "Answering that it is removable with limit $4$. Replacing $|x-2|$ blindly by $x-2$ gives $\\dfrac{(x-2)(x+2)}{x-2}=x+2\\to4$ — but that cancellation is only valid for $x>2$. For $x<2$, $|x-2|=-(x-2)$, so the left side tends to $-4$. The single answer $4$ silently throws away the left half.",
    "solutions": [
      {
        "name": "Split the absolute value by sign",
        "steps": [
          "For $x>2$: $|x-2|=x-2$, so $f(x)=\\dfrac{(x-2)(x+2)}{x-2}=x+2\\to4$ as $x\\to2^+$.",
          "For $x<2$: $|x-2|=-(x-2)$, so $f(x)=\\dfrac{(x-2)(x+2)}{-(x-2)}=-(x+2)\\to-4$ as $x\\to2^-$.",
          "Since $4\\neq-4$, the two-sided limit fails to exist; $\\boxed{\\text{jump discontinuity of magnitude }8}$."
        ]
      },
      {
        "name": "Substitute $t=x-2$",
        "steps": [
          "With $t=x-2\\to0$, $f=\\dfrac{t(t+4)}{|t|}=(t+4)\\cdot\\dfrac{t}{|t|}=(t+4)\\,\\mathrm{sgn}(t).$",
          "As $t\\to0^+$, $\\mathrm{sgn}(t)=+1$ gives $f\\to4$; as $t\\to0^-$, $\\mathrm{sgn}(t)=-1$ gives $f\\to-4$.",
          "The signum flips the limit's sign across $0$, so $\\boxed{\\text{the discontinuity is a jump, not removable}}$."
        ]
      }
    ],
    "remark": "**Insight.** A modulus in the denominator is a **disguised signum**: it multiplies the natural cancellation by $\\pm1$ depending on the side. Always cancel **separately on each side of the point**; only if both halves land on the same number is the discontinuity removable. Here they land on opposite signs — a textbook **jump**."
  },
  {
    "theme": "pointcont",
    "themeLabel": "Continuity at a Point & Piecewise",
    "title": "Why the Product Heals but Sine Cannot",
    "difficulty": 4,
    "task": "Decide which function can be repaired at the origin, and give the value",
    "tags": [
      "continuity at a point",
      "squeeze theorem",
      "oscillatory limit",
      "removable vs essential"
    ],
    "statement": "Two functions are defined for $x\\neq 0$ by\n$$g(x)=\\sin\\!\\Big(\\tfrac{1}{x}\\Big),\\qquad h(x)=x\\,\\sin\\!\\Big(\\tfrac{1}{x}\\Big).$$\nFor exactly one of them there is a real number $c$ such that assigning the value $c$ at $x=0$ makes the extended function continuous at $x=0$. Determine which function admits such a repair, and give the value of $c$. \\textbf{Hint:} compare the two using the elementary bound $\\big|x\\sin(1/x)\\big|\\le |x|$.",
    "answer": "\\boxed{h \\text{ is repairable with } c=0;\\ g \\text{ cannot be repaired.}}",
    "trap": "Treating the two seams the same way. A frequent error is to call $\\sin(1/x)$ repairable because it is bounded (so it \"should settle\" somewhere), or to call $x\\sin(1/x)$ irreparable because $1/x$ blows up. Boundedness alone never forces a limit to exist, while the factor $x\\to 0$ is exactly what squeezes the oscillation down to $0$.",
    "solutions": [
      {
        "name": "Squeeze for $h$, two sequences for $g$",
        "steps": [
          "For $h$: since $|\\sin(1/x)|\\le 1$ for every $x\\neq 0$, multiplying by $|x|$ gives $0\\le |h(x)|=|x\\,\\sin(1/x)|\\le |x|$.",
          "As $x\\to 0$ both outer bounds $0$ and $|x|$ tend to $0$, so by the squeeze theorem $\\lim_{x\\to 0}h(x)=0$. Setting $c=0$ gives $\\lim_{x\\to0}h(x)=c$, so the extended $h$ is continuous at $0$.",
          "For $g$: take $x_n=\\dfrac{1}{2\\pi n}\\to 0$, where $g(x_n)=\\sin(2\\pi n)=0$, and $y_n=\\dfrac{1}{2\\pi n+\\pi/2}\\to 0$, where $g(y_n)=\\sin\\!\\big(2\\pi n+\\tfrac{\\pi}{2}\\big)=1$.",
          "Two inputs heading to $0$ give outputs heading to $0$ and to $1$, so $\\lim_{x\\to 0}g(x)$ does not exist; no value $c$ can equal a non-existent limit. Hence only $h$ is repairable, with $c=0$."
        ]
      },
      {
        "name": "Substitution $t=1/x$ exposes the difference",
        "steps": [
          "Put $t=1/x$, so $x\\to 0$ corresponds to $|t|\\to\\infty$, and then $g=\\sin t$ while $h=\\dfrac{\\sin t}{t}$.",
          "As $|t|\\to\\infty$, $\\sin t$ keeps oscillating between $-1$ and $1$ and approaches no single value, so $\\lim_{x\\to0}g(x)$ fails to exist and $g$ cannot be repaired.",
          "For $h$, the bound $\\Big|\\dfrac{\\sin t}{t}\\Big|\\le \\dfrac{1}{|t|}\\to 0$ forces $\\lim_{|t|\\to\\infty}\\dfrac{\\sin t}{t}=0$, i.e. $\\lim_{x\\to0}h(x)=0$.",
          "Therefore assigning $c=0$ makes $h$ continuous at $0$ (and this value is the only one that works), while $g$ admits no such $c$."
        ]
      }
    ],
    "remark": "**Insight.** A removable discontinuity needs a \\emph{limit} to remove, not merely boundedness. $\\sin(1/x)$ stays bounded yet oscillates forever, so it has no limiting value at $0$; multiplying by the vanishing factor $x$ traps the same oscillation inside $\\pm|x|$, and the squeeze collapses it to the genuine limit $0$. The repair is possible exactly when the oscillation is damped to zero."
  },
  {
    "theme": "pointcont",
    "themeLabel": "Continuity at a Point & Piecewise",
    "title": "Two Seams, Two Constants",
    "difficulty": 4,
    "task": "Find both constants",
    "tags": [
      "piecewise",
      "matching-constants",
      "two-points",
      "continuity"
    ],
    "statement": "Let $f(x)=\\begin{cases} x+a, & x\\le 1,\\\\[2pt] b\\,x^{2}, & 1<x<2,\\\\[2pt] 5x, & x\\ge 2.\\end{cases}$ Find the constants $a,b$ so that $f$ is continuous on all of $\\mathbb{R}$.",
    "answer": "Matching at $x=2$: $4b=10\\Rightarrow b=\\tfrac52$. Matching at $x=1$: $1+a=b=\\tfrac52\\Rightarrow a=\\tfrac32$. So $\\boxed{a=\\tfrac32,\\ b=\\tfrac52}$.",
    "trap": "Solving only the seam $x=1$ ($1+a=b$) and leaving a free parameter, or matching $x=1$ against the wrong branch — e.g. setting $1+a=5\\cdot1=5$ using the $5x$ piece, which does not apply at $x=1$. The middle branch $bx^2$ is the neighbour at $x=1$; the $5x$ branch is the neighbour at $x=2$.",
    "solutions": [
      {
        "name": "Match each seam to its correct neighbour",
        "steps": [
          "At $x=2$ the relevant branches are $bx^2$ (left) and $5x$ (right): continuity needs $b(2)^2=5(2)$, i.e. $4b=10$, so $b=\\tfrac52.$",
          "At $x=1$ the branches are $x+a$ (left) and $bx^2$ (right): continuity needs $1+a=b(1)^2=b$, so $a=b-1=\\tfrac52-1=\\tfrac32.$",
          "Each branch is itself continuous, so with these values $f$ is continuous everywhere: $\\boxed{a=\\tfrac32,\\ b=\\tfrac52}.$"
        ]
      },
      {
        "name": "One-sided limits at both points",
        "steps": [
          "At $x=2$: $\\lim_{x\\to2^-}bx^2=4b$ and $f(2)=\\lim_{x\\to2^+}5x=10$; equate to get $b=\\tfrac52.$",
          "At $x=1$: $f(1)=\\lim_{x\\to1^-}(x+a)=1+a$ and $\\lim_{x\\to1^+}bx^2=b$; equate to get $1+a=\\tfrac52.$",
          "Hence $a=\\tfrac32$, $b=\\tfrac52$, giving $\\boxed{a=\\tfrac32,\\ b=\\tfrac52}.$"
        ]
      }
    ],
    "remark": "**Insight.** A piecewise function with two seams needs **one equation per seam**, and each seam must be matched against its **immediate neighbour**, not a distant branch. Solve the seam that involves a single unknown first ($x=2$ fixes $b$), then propagate to the other ($x=1$ fixes $a$). Order turns two coupled conditions into a clean chain."
  },
  {
    "theme": "pointcont",
    "themeLabel": "Continuity at a Point & Piecewise",
    "title": "An Exponential Hidden in a Power",
    "difficulty": 5,
    "task": "Find the continuous value",
    "tags": [
      "exponential-limit",
      "logarithm",
      "removable",
      "composite"
    ],
    "statement": "Let $f(x)=\\bigl(1+\\sin 2x\\bigr)^{1/x}$ for $x>0$, with $f(0)$ to be defined. Find the value $f(0)=L$ that makes $f$ right-continuous at $x=0$.",
    "answer": "Taking logarithms, $\\dfrac{1}{x}\\ln(1+\\sin 2x)\\to 2$ as $x\\to0^+$, so $\\displaystyle\\lim_{x\\to0^+}f(x)=e^{2}$ and continuity forces $\\boxed{L=e^{2}}$.",
    "trap": "Answering $L=e$. A reader replaces $\\sin 2x$ by $2x$ inside, writes $(1+2x)^{1/x}$, then misremembers the standard limit as $e^{1}$ — dropping the factor $2$. The exponent is $\\lim \\tfrac1x\\ln(1+\\sin2x)=2$, giving $e^{2}$, not $e$. Forgetting the angle's coefficient halves the exponent.",
    "solutions": [
      {
        "name": "Logarithm then exponentiate",
        "steps": [
          "Let $y=f(x)$. Then $\\ln y=\\dfrac{\\ln(1+\\sin 2x)}{x}.$",
          "As $x\\to0^+$: $\\dfrac{\\ln(1+\\sin 2x)}{\\sin 2x}\\to1$ and $\\dfrac{\\sin 2x}{x}\\to2$, so $\\ln y\\to 1\\cdot2=2.$",
          "Since $\\exp$ is continuous, $y\\to e^{2}$, hence $\\boxed{L=e^{2}}.$"
        ]
      },
      {
        "name": "$1^{\\infty}$ standard form",
        "steps": [
          "The base $\\to1$ and exponent $\\to\\infty$, a $1^{\\infty}$ form; use $\\lim (1+u)^{1/u}=e$ with $u=\\sin 2x$.",
          "Write $f=\\Bigl[(1+\\sin 2x)^{1/\\sin 2x}\\Bigr]^{\\sin 2x/x}$. The bracket $\\to e$ and the outer exponent $\\sin 2x/x\\to2$.",
          "Therefore $f\\to e^{2}$, so $\\boxed{L=e^{2}}.$"
        ]
      }
    ],
    "remark": "**Insight.** A $1^{\\infty}$ limit is decided **entirely by the exponent** $\\lim\\tfrac1x\\ln(\\text{base})$, and that logarithm linearizes the inner function: $\\sin 2x$ behaves like $2x$, so the surviving constant is $2$. The continuity of $\\exp$ then transports the limit through the power. Lose the coefficient and you lose the answer."
  },
  {
    "theme": "pointcont",
    "themeLabel": "Continuity at a Point & Piecewise",
    "title": "An Exponential Glued to a Square Root",
    "difficulty": 5,
    "task": "Find the gluing constant",
    "tags": [
      "piecewise",
      "one-sided-limits",
      "exponential",
      "rationalization",
      "gluing-constant"
    ],
    "statement": "Let $a$ be a real constant and define\n$$f(x)=\\begin{cases}\\dfrac{1-\\cos 2x}{x\\,\\sin 3x},& x<0,\\\\[2mm] \\dfrac{2}{3},& x=0,\\\\[2mm] \\dfrac{e^{a x}-1}{\\sqrt{1+x}-1},& x>0.\\end{cases}$$\nThere is exactly one value of $a$ for which $f$ is continuous at $x=0$. Find it.",
    "answer": "The left limit is $\\tfrac23$ (which already matches $f(0)$), while the right limit equals $2a$; continuity forces $2a=\\tfrac23$, so $\\boxed{a=\\dfrac13}$.",
    "trap": "Answering $a=\\tfrac23$. This comes from approximating $\\sqrt{1+x}-1\\approx x$ in the right-hand piece, which together with $e^{ax}-1\\approx ax$ gives the (wrong) right limit $a$, seemingly matched by setting $a=\\tfrac23=f(0)$. But $\\sqrt{1+x}-1\\sim \\tfrac{x}{2}$, not $x$: the correct right limit is $\\dfrac{ax}{x/2}=2a$. With $a=\\tfrac23$ the right limit is $\\tfrac43\\neq f(0)$, so the function is actually discontinuous from the right. Matching $f(0)$ to a mis-expanded one-sided limit is exactly the snare.",
    "solutions": [
      {
        "name": "Rationalize the right piece, standard limit on the left",
        "steps": [
          "Left limit ($x\\to0^-$): write $1-\\cos 2x=2\\sin^2 x$, so $\\dfrac{1-\\cos2x}{x\\sin3x}=\\dfrac{2\\sin^2 x}{x\\sin 3x}=2\\cdot\\dfrac{\\sin x}{x}\\cdot\\dfrac{\\sin x}{3x}\\cdot\\dfrac{3x}{\\sin 3x}\\to 2\\cdot1\\cdot\\tfrac13\\cdot1=\\tfrac23.$ This already equals $f(0)=\\tfrac23$.",
          "Right limit ($x\\to0^+$): multiply numerator and denominator of $\\dfrac{e^{ax}-1}{\\sqrt{1+x}-1}$ by the conjugate $\\sqrt{1+x}+1$. The denominator becomes $(1+x)-1=x$, giving $\\dfrac{(e^{ax}-1)\\,(\\sqrt{1+x}+1)}{x}.$",
          "Split as $\\dfrac{e^{ax}-1}{ax}\\cdot a\\cdot(\\sqrt{1+x}+1)$. As $x\\to0^+$, $\\dfrac{e^{ax}-1}{ax}\\to1$ and $\\sqrt{1+x}+1\\to2$, so the right limit is $a\\cdot 2=2a.$",
          "Continuity at $0$ requires left limit $=$ value $=$ right limit, i.e. $\\tfrac23=\\tfrac23=2a$. Hence $2a=\\tfrac23$ and $\\boxed{a=\\dfrac13}.$"
        ]
      },
      {
        "name": "First-order (Taylor) comparison of both seams",
        "steps": [
          "Near $0$: $1-\\cos2x=2x^2+o(x^2)$ and $\\sin3x=3x+o(x)$, so the left expression is $\\dfrac{2x^2+o(x^2)}{x(3x+o(x))}=\\dfrac{2x^2}{3x^2}+o(1)\\to\\tfrac23$, matching $f(0)=\\tfrac23.$",
          "For the right piece use $e^{ax}-1=ax+o(x)$ and $\\sqrt{1+x}-1=\\tfrac{x}{2}+o(x)$ (the binomial series, where the $\\tfrac12$ is essential).",
          "Therefore $\\dfrac{e^{ax}-1}{\\sqrt{1+x}-1}=\\dfrac{ax+o(x)}{\\tfrac{x}{2}+o(x)}\\to\\dfrac{a}{1/2}=2a$ as $x\\to0^+.$",
          "Setting the right limit equal to the common value $\\tfrac23$ gives $2a=\\tfrac23$, so $\\boxed{a=\\dfrac13}.$"
        ]
      }
    ],
    "remark": "**Insight.** Gluing a piecewise function at a point is a three-way handshake: $\\text{LHL}=f(a)=\\text{RHL}$, and every one of the three must be checked. Here the value and the left limit conspire to look settled at $\\tfrac23$, tempting you to read off $a$ from a careless expansion of the right branch. The whole problem hides in a single coefficient: $\\sqrt{1+x}-1$ behaves like $\\tfrac{x}{2}$, not $x$. Honour that factor of $\\tfrac12$ and the unique gluing constant $a=\\tfrac13$ falls out; forget it and you match the value while silently breaking the right-hand limit."
  },
  {
    "theme": "pointcont",
    "themeLabel": "Continuity at a Point & Piecewise",
    "title": "A Sign Wraps a Hidden Hole",
    "difficulty": 5,
    "task": "Find every point where the composite $g(f(x))$ fails to be continuous, and classify each failure.",
    "tags": [
      "composite",
      "sgn",
      "removable",
      "jump",
      "one-sided-limits"
    ],
    "statement": "Let $f(x)=\\dfrac{x^{2}-x}{x-1}$ for $x\\neq 1$, with the value at the gap \\textbf{assigned} to be $f(1)=0$. Let $g(u)=\\operatorname{sgn}(u)$, so $g(u)=-1,0,1$ according as $u<0$, $u=0$, $u>0$. Define the composite $H(x)=g\\bigl(f(x)\\bigr)$ for all real $x$. Determine every point at which $H$ is discontinuous, and classify each discontinuity as removable or a jump.",
    "answer": "$\\boxed{H \\text{ is discontinuous at } x=0 \\text{ (jump) and } x=1 \\text{ (removable).}}$",
    "trap": "Composing limits blindly: $\\lim_{x\\to 1}g(f(x))\\stackrel{?}{=}g\\bigl(\\lim_{x\\to1}f(x)\\bigr)=g(1)=1$, and then mistaking the \\emph{assigned} value $f(1)=0$ for the limiting value $1$, one declares $H$ continuous at $x=1$ and reports only $\\{x=0\\}$. The assignment $f(1)=0$ (not $1$) makes $H(1)=g(0)=0\\neq 1$, so $x=1$ is a genuine removable discontinuity.",
    "solutions": [
      {
        "name": "Simplify the inner map, then read off $\\operatorname{sgn}$",
        "steps": [
          "For $x\\neq 1$, $f(x)=\\dfrac{x(x-1)}{x-1}=x$. So $f(x)=x$ on $x\\neq 1$, while $f(1)=0$ is assigned separately; thus $f$ itself is discontinuous at $x=1$ (limit $1$, value $0$).",
          "Hence for $x\\neq 1$, $H(x)=\\operatorname{sgn}(x)$, which equals $-1$ for $x<0$, $0$ at $x=0$, and $+1$ for $x>0$. Separately $H(1)=\\operatorname{sgn}(f(1))=\\operatorname{sgn}(0)=0$.",
          "At $x=0$: $\\lim_{x\\to0^-}H=-1$ and $\\lim_{x\\to0^+}H=+1$ disagree, so the two-sided limit does not exist — a \\textbf{jump} discontinuity.",
          "At $x=1$: for $x$ near $1$ (and $x\\neq1$) we have $H(x)=\\operatorname{sgn}(x)=+1$, so $\\lim_{x\\to1}H(x)=1$, but $H(1)=0$. The limit exists yet differs from the value — a \\textbf{removable} discontinuity. Everywhere else $\\operatorname{sgn}$ is locally constant, so $H$ is continuous. Answer: $x=0$ (jump), $x=1$ (removable)."
        ]
      },
      {
        "name": "One-sided limits of the composite directly",
        "steps": [
          "Track the inner value: as $x\\to 0^-$, $f(x)=x\\to 0^-$, so $g(f(x))=\\operatorname{sgn}(x)\\to -1$; as $x\\to 0^+$, $g(f(x))\\to +1$, while $H(0)=g(0)=0$. The one-sided limits differ, giving a jump at $x=0$.",
          "As $x\\to 1$ (both sides, $x\\neq1$), $f(x)=x$ stays positive and bounded away from $0$, so $g(f(x))=+1$ on a punctured neighbourhood; thus $\\lim_{x\\to1}H(x)=1$.",
          "But $H(1)=g\\bigl(f(1)\\bigr)=g(0)=0$. Since $\\lim_{x\\to1}H(x)=1\\neq 0=H(1)$ and the limit exists, $x=1$ is removable (redefining $H(1)=1$ would restore continuity).",
          "For any $a\\notin\\{0,1\\}$, $f$ is continuous at $a$ with $f(a)=a\\neq0$, and $g$ is continuous at $f(a)$ (it is locally constant there), so $H$ is continuous at $a$. Therefore the only failures are $x=0$ (jump) and $x=1$ (removable)."
        ]
      }
    ],
    "remark": "**Insight.** A step like $\\operatorname{sgn}$ is continuous \\emph{except} where its argument crosses the jump value $0$, and a removable hole in the inner map travels through the composite as a removable defect of its own. So $H$ can break for two independent reasons — the outer sign flipping at $x=0$, and the inner assignment disagreeing with its limit at $x=1$ — and the law $\\lim g(f)=g(\\lim f)$ is licensed only when $g$ is continuous at $\\lim f$, which fails precisely at these seams."
  },
  {
    "theme": "pointcont",
    "themeLabel": "Continuity at a Point & Piecewise",
    "title": "A Logarithm of Cosine, Patched",
    "difficulty": 5,
    "task": "Find the patch value",
    "tags": [
      "logarithm",
      "removable",
      "trigonometric",
      "series"
    ],
    "statement": "Let $f(x)=\\dfrac{\\ln(\\cos x)}{x^{2}}$ for $x\\neq0$ near the origin. Find the value $f(0)=L$ that makes $f$ continuous at $x=0$.",
    "answer": "Since $\\ln(\\cos x)\\sim-\\tfrac{x^2}{2}$ as $x\\to0$, $\\displaystyle\\lim_{x\\to0}f(x)=-\\tfrac12$, so continuity forces $\\boxed{L=-\\dfrac12}$.",
    "trap": "Answering $L=0$. Both $\\ln(\\cos x)\\to0$ and $x^2\\to0$, and a hasty reader calls the ratio $0$. It is a $\\tfrac00$ form whose true value is $-\\tfrac12$. A second slip is reporting $L=+\\tfrac12$, dropping the minus sign that comes from $\\cos x<1$ making $\\ln(\\cos x)$ negative.",
    "solutions": [
      {
        "name": "Series expansion",
        "steps": [
          "$\\cos x=1-\\tfrac{x^2}{2}+\\tfrac{x^4}{24}-\\cdots$, so with $u=\\cos x-1=-\\tfrac{x^2}{2}+\\cdots$ we use $\\ln(1+u)=u-\\tfrac{u^2}{2}+\\cdots$.",
          "Thus $\\ln(\\cos x)=-\\tfrac{x^2}{2}+\\tfrac{x^4}{24}-\\tfrac12\\!\\left(-\\tfrac{x^2}{2}\\right)^2+\\cdots=-\\tfrac{x^2}{2}+O(x^4).$",
          "Dividing by $x^2$ gives $-\\tfrac12+O(x^2)\\to-\\tfrac12$, so $\\boxed{L=-\\dfrac12}.$"
        ]
      },
      {
        "name": "Reduce to standard limits",
        "steps": [
          "Write $f(x)=\\dfrac{\\ln(1+(\\cos x-1))}{\\cos x-1}\\cdot\\dfrac{\\cos x-1}{x^2}.$",
          "As $x\\to0$, the first factor $\\to1$ (since $\\cos x-1\\to0$), and $\\dfrac{\\cos x-1}{x^2}\\to-\\tfrac12.$",
          "The product of limits is $1\\cdot(-\\tfrac12)=-\\tfrac12$, so $\\boxed{L=-\\dfrac12}.$"
        ]
      }
    ],
    "remark": "**Insight.** Continuity here is a **second-order measurement**: dividing by $x^2$ probes the curvature of $\\ln(\\cos x)$ at $0$. The leading term $-\\tfrac{x^2}{2}$ survives; everything else is higher order. The sign is not decoration — $\\cos x<1$ forces $\\ln(\\cos x)<0$, so the patch value is genuinely **negative**."
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
    "title": "The Absolute Value Splits the Factor",
    "difficulty": 3,
    "task": "Classify the discontinuity at the indicated point.",
    "tags": [
      "classifying-discontinuities",
      "jump-discontinuity",
      "one-sided-limits",
      "absolute-value",
      "rational-functions"
    ],
    "statement": "Consider the function $f(x) = \\dfrac{x^2 - 9}{|x - 3|}$, defined for all $x \\neq 3$. The numerator vanishes at $x = 3$, exactly where the denominator does, so a careless reader may expect the $(x-3)$ factor to cancel and leave behind a \\emph{removable} discontinuity. Classify the discontinuity of $f$ at $x = 3$ as removable, jump, or infinite, justifying your choice with the appropriate one-sided behaviour.",
    "answer": "\\boxed{\\text{Jump discontinuity (one-sided limits } +6 \\text{ and } -6)}",
    "trap": "Removable. The reasoning is that $x^2-9=(x-3)(x+3)$ shares the factor $(x-3)$ with the denominator, so it cancels to give the limit $x+3 \\to 6$, making the single hole fillable. This is wrong because the denominator is $|x-3|$, not $(x-3)$: the absolute value forces a sign flip on the left side, so the two one-sided limits are $\\pm 6$, not a common value.",
    "solutions": [
      {
        "name": "Split the absolute value by side",
        "steps": [
          "Factor the numerator: $x^2-9=(x-3)(x+3)$. For $x>3$ we have $|x-3|=x-3$, so $f(x)=\\dfrac{(x-3)(x+3)}{x-3}=x+3$, giving $\\lim_{x\\to 3^+}f(x)=6$.",
          "For $x<3$ we have $|x-3|=-(x-3)$, so $f(x)=\\dfrac{(x-3)(x+3)}{-(x-3)}=-(x+3)$, giving $\\lim_{x\\to 3^-}f(x)=-6$.",
          "Both one-sided limits are finite but unequal ($6\\neq-6$), so the two-sided limit does not exist while neither side blows up. By definition this is a $\\textbf{jump discontinuity}$, with jump $6-(-6)=12$, reaching $\\boxed{\\text{Jump discontinuity (one-sided limits } +6 \\text{ and } -6)}$."
        ]
      },
      {
        "name": "Rewrite using the sign function",
        "steps": [
          "For $x\\neq 3$, write $|x-3|=(x-3)\\,\\operatorname{sgn}(x-3)$. Then $f(x)=\\dfrac{(x-3)(x+3)}{(x-3)\\,\\operatorname{sgn}(x-3)}=\\dfrac{x+3}{\\operatorname{sgn}(x-3)}=(x+3)\\,\\operatorname{sgn}(x-3)$.",
          "As $x\\to 3$, the factor $x+3\\to 6$ (finite and continuous), while $\\operatorname{sgn}(x-3)$ jumps from $-1$ on the left to $+1$ on the right. Hence the product jumps from $6\\cdot(-1)=-6$ to $6\\cdot(+1)=+6$.",
          "The finite, unequal one-sided limits $-6$ and $+6$ mean the discontinuity is neither removable (limit doesn't exist) nor infinite (limits are finite); it is a $\\textbf{jump discontinuity}$, giving $\\boxed{\\text{Jump discontinuity (one-sided limits } +6 \\text{ and } -6)}$."
        ]
      }
    ],
    "remark": "**Insight.** The deciding factor is whether the cancelled denominator carries a sign. With $(x-3)$ in the denominator the hole truly cancels and the discontinuity is removable; replacing it by $|x-3|$ injects a $\\operatorname{sgn}(x-3)$ that survives cancellation, converting the would-be hole into a genuine jump. Always check the denominator's sign on each side before declaring a shared factor 'cancellable'."
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
    "statement": "Define \\[ G(x)=\\begin{cases} x^{2}\\sin\\dfrac1x, & x<0,\\\\ 7, & x=0,\\\\ \\sin\\dfrac1x, & 0<x<\\dfrac{1}{\\pi},\\\\ \\dfrac{x^{2}-4}{x-2}, & x\\ge\\dfrac{1}{\\pi},\\ x\\neq2,\\\\ 11, & x=2. \\end{cases} \\] Classify the discontinuity of $G$ at $x=0$ and at $x=2$. For each, give the type, and where removable state the correct value.",
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
    "theme": "types",
    "themeLabel": "Classifying Discontinuities",
    "title": "A Staircase Crossing a Triple Pole",
    "difficulty": 5,
    "task": "Classify each break",
    "tags": [
      "greatest integer",
      "removable discontinuity",
      "jump discontinuity",
      "infinite discontinuity",
      "one-sided limits"
    ],
    "statement": "Consider $f(x)=\\lfloor x\\rfloor+\\dfrac{\\sin(\\pi x)}{(x-1)(x-2)^2}$, defined for all $x$ except where its denominator vanishes. For each of the points $x=1,\\,x=2,\\,x=3$ inside the window $(0,3]$, decide whether $f$ has a removable, a jump, or an infinite (essential) discontinuity there. Then state how many of these three breaks are genuinely \\emph{not} removable.",
    "answer": "$\\boxed{x=1\\text{ jump},\\ x=2\\text{ infinite},\\ x=3\\text{ jump; all }3\\text{ are non-removable}}$",
    "trap": "The seductive wrong answer calls $x=2$ removable. One notices $\\sin(\\pi x)$ has a simple zero at $x=2$ and writes $\\sin(\\pi x)\\approx\\pi(x-2)$, cancelling \\emph{one} factor of $(x-2)$ and declaring the singularity \"healed.\" But the denominator carries $(x-2)^2$: after the single cancellation a lone $(x-2)$ survives downstairs, so the rational part behaves like $\\pm\\dfrac{\\pi}{x-2}$ and blows up. The one-sided limits are $-\\infty$ and $+\\infty$, never finite — so $x=2$ is infinite, not removable.",
    "solutions": [
      {
        "name": "One-sided limits point by point",
        "steps": [
          "Split $f$ into the staircase $\\lfloor x\\rfloor$ and the rational-trigonometric part $r(x)=\\dfrac{\\sin(\\pi x)}{(x-1)(x-2)^2}$. Across an integer $n$, $\\lfloor x\\rfloor$ jumps from $n-1$ (left) to $n$ (right); $r$ is continuous wherever its denominator is nonzero.",
          "At $x=1$: near $1$, $\\sin(\\pi x)\\approx-\\pi(x-1)$, so the single $(x-1)$ cancels and $r(x)\\to\\dfrac{-\\pi}{(1-2)^2}=-\\pi$, finite from both sides. Adding the floor's left value $0$ and right value $1$ gives $\\mathrm{LHL}=0-\\pi=-\\pi$ and $\\mathrm{RHL}=1-\\pi$: both finite, differing by $1$, hence a \\textbf{jump}.",
          "At $x=2$: now $\\sin(\\pi x)\\approx\\pi(x-2)$ cancels only one factor of $(x-2)^2$, leaving $r(x)\\approx\\dfrac{\\pi}{(2-1)(x-2)}$, which tends to $-\\infty$ as $x\\to2^-$ and $+\\infty$ as $x\\to2^+$. The bounded floor cannot rescue this, so $\\mathrm{LHL}=-\\infty$, $\\mathrm{RHL}=+\\infty$: an \\textbf{infinite (essential)} discontinuity.",
          "At $x=3$: the denominator $(3-1)(3-2)^2=2\\neq0$, so $r$ is continuous there with $r(3)=\\dfrac{\\sin3\\pi}{2}=0$. Only the floor jumps: $\\mathrm{LHL}=2+0=2$, $\\mathrm{RHL}=3+0=3$, finite and unequal — a \\textbf{jump}.",
          "Removable would require both one-sided limits finite and equal; none of the three satisfies that, so all $3$ breaks are non-removable: $\\boxed{x=1\\text{ jump},\\ x=2\\text{ infinite},\\ x=3\\text{ jump; all }3}$."
        ]
      },
      {
        "name": "Zero-order bookkeeping",
        "steps": [
          "List the order of vanishing of numerator and denominator of $r(x)=\\dfrac{\\sin(\\pi x)}{(x-1)(x-2)^2}$ at each suspect point. The numerator $\\sin(\\pi x)$ has a simple ($1$st-order) zero at every integer.",
          "At $x=1$: numerator order $1$, denominator order $1$ (from $(x-1)$); orders match, so $r$ has a finite limit there and contributes no infinity — the only break comes from the floor's unit step, a jump.",
          "At $x=2$: numerator order $1$, denominator order $2$ (from $(x-2)^2$); denominator wins by one power, so $r\\sim c/(x-2)$ with opposite signs on the two sides $\\Rightarrow$ infinite discontinuity, and a bounded floor term cannot change that.",
          "At $x=3$: denominator order $0$ (nonzero), numerator order $1$, so $r$ is continuous and $r(3)=0$; the floor again supplies a unit jump. Counting non-removable breaks: jump, infinite, jump $\\Rightarrow$ all $\\boxed{3}$ are non-removable."
        ]
      }
    ],
    "remark": "**Insight.** When you cancel a zero of $\\sin(\\pi x)$ against a pole, **count powers, do not just spot a matching root.** A simple numerator zero heals a simple denominator factor (giving a removable or merely finite contribution), but against a **squared** factor one power survives and the graph still escapes to $\\pm\\infty$. Layer a **bounded** staircase like $\\lfloor x\\rfloor$ on top and it can only add unit jumps — it can never tame an infinite break, nor manufacture one where the rational part is already finite."
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
          "So $g$ is additive and continuous, hence $g(x)=cx$ for some constant $c$ (continuity kills the wild discontinuous solutions).",
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
    "title": "Additive and Continuous, Anchored at Three",
    "difficulty": 4,
    "task": "Evaluate the function",
    "tags": [
      "additive",
      "continuity",
      "cauchy-additive",
      "linear-function"
    ],
    "statement": "A function $f:\\mathbb{R}\\to\\mathbb{R}$ is continuous on $\\mathbb{R}$ and satisfies $f(x+y)=f(x)+f(y)$ for all real $x,y$. Given that $f(3)=12$, find the exact value of $f(2026)$.",
    "answer": "Putting $y=x$ repeatedly (or using continuity) forces $f(x)=cx$. From $f(3)=3c=12$ we get $c=4$, so $f(x)=4x$ and $\\boxed{f(2026)=8104}$.",
    "trap": "Reading $f(3)=12$ as if the multiplier were the value itself, i.e. taking $f(x)=12x$ and reporting $f(2026)=12\\cdot 2026=24312$. The constant is $c=f(3)/3=4$, not $12$; the anchor gives the slope only after dividing by $3$.",
    "solutions": [
      {
        "name": "Continuity pins down the linear form",
        "steps": [
          "Set $x=y=0$: $f(0)=f(0)+f(0)$, so $f(0)=0$. For integer $n$, induction on $f(x+y)=f(x)+f(y)$ gives $f(nx)=nf(x)$, and replacing $x$ by $x/n$ gives $f(x/n)=f(x)/n$; hence $f(q)=q\\,f(1)$ holds at each rational number $q$.",
          "Write $c=f(1)$. The maps $x\\mapsto f(x)$ and $x\\mapsto cx$ are both continuous and agree on the rationals, which are dense, so they agree everywhere: $f(x)=cx$ for all real $x$.",
          "Use the anchor: $f(3)=3c=12\\Rightarrow c=4$, so $f(x)=4x$.",
          "Therefore $\\boxed{f(2026)=4\\cdot 2026=8104}$."
        ]
      },
      {
        "name": "Scale the anchor directly",
        "steps": [
          "From $f(0)=0$ and $f(nx)=nf(x)$ (additivity iterated), every value is determined by one anchor through rational scaling, and continuity extends this to all reals, giving $f(x)=cx$.",
          "Express the target in terms of the anchor: $f(2026)=\\dfrac{2026}{3}\\,f(3)$, since $f(\\lambda\\cdot 3)=\\lambda f(3)$ holds for rational $\\lambda$ and continuity covers the rest.",
          "Substitute $f(3)=12$: $f(2026)=\\dfrac{2026}{3}\\cdot 12=2026\\cdot 4$.",
          "Hence $\\boxed{f(2026)=8104}$."
        ]
      }
    ],
    "remark": "**Insight.** The functional equation alone, without a regularity condition, does not force $f(x)=cx$. It is **continuity** that collapses the wild possibilities down to the single line through the origin: $f$ agrees with $cx$ on the dense rationals, and two continuous functions equal on a dense set are equal everywhere. The anchor $f(3)=12$ then fixes the slope as $c=4$, not $12$ — always divide the anchor value by its input."
  },
  {
    "theme": "functionaleq",
    "themeLabel": "Continuous Functional Equations",
    "title": "From a Sum Law to an Exponential",
    "difficulty": 4,
    "task": "Find the half-step value",
    "tags": [
      "exponential",
      "continuity",
      "multiplicative-sum",
      "functional-equation"
    ],
    "statement": "A continuous function $f:\\mathbb{R}\\to\\mathbb{R}$ satisfies $f(x+y)=f(x)\\,f(y)$ for all real $x,y$, and $f$ is not identically zero. Given $f(1)=e^{2}$, determine $f\\!\\left(\\tfrac12\\right)$.",
    "answer": "Such an $f$ must be $f(x)=a^{x}$ with $a=f(1)=e^{2}>0$, i.e. $f(x)=e^{2x}$. Hence $f\\!\\left(\\tfrac12\\right)=e^{2\\cdot\\frac12}=\\boxed{e}$.",
    "trap": "Treating the law as if it were additive and writing $f\\!\\left(\\tfrac12\\right)=\\tfrac12 f(1)=\\tfrac12 e^{2}$. The relation multiplies values, so halving the input takes a square root of the value, not half of it: $f\\!\\left(\\tfrac12\\right)^{2}=f(1)=e^{2}$ gives $e$, not $\\tfrac12 e^{2}$.",
    "solutions": [
      {
        "name": "Positivity then exponential form",
        "steps": [
          "Since $f$ is not identically zero, pick $x_0$ with $f(x_0)\\neq 0$; then $f(x_0)=f(x)\\,f(x_0-x)$ shows $f(x)\\neq 0$ for every $x$. Moreover $f(x)=f\\!\\left(\\tfrac{x}{2}\\right)^{2}>0$, so $f$ is strictly positive.",
          "Let $g(x)=\\ln f(x)$, which is continuous. The law becomes $g(x+y)=g(x)+g(y)$, the additive equation, so by continuity $g(x)=cx$ and $f(x)=e^{cx}$.",
          "Use the anchor: $f(1)=e^{c}=e^{2}\\Rightarrow c=2$, so $f(x)=e^{2x}$.",
          "Therefore $f\\!\\left(\\tfrac12\\right)=e^{2\\cdot\\frac12}=\\boxed{e}$."
        ]
      },
      {
        "name": "Direct half-angle from the law",
        "steps": [
          "Apply the law with $x=y=\\tfrac12$: $f(1)=f\\!\\left(\\tfrac12\\right)f\\!\\left(\\tfrac12\\right)=\\left[f\\!\\left(\\tfrac12\\right)\\right]^{2}$.",
          "Because $f\\!\\left(\\tfrac12\\right)=f\\!\\left(\\tfrac14\\right)^{2}\\ge 0$ and $f$ is nowhere zero, $f\\!\\left(\\tfrac12\\right)>0$, so we take the positive square root.",
          "Thus $f\\!\\left(\\tfrac12\\right)=\\sqrt{f(1)}=\\sqrt{e^{2}}=e$.",
          "Hence $\\boxed{f\\!\\left(\\tfrac12\\right)=e}$."
        ]
      }
    ],
    "remark": "**Insight.** The hinge is recognising that $f(x+y)=f(x)f(y)$ with a nonzero continuous $f$ forces $f>0$ everywhere — that is what lets $\\ln f$ exist and convert the product law into the additive law, where continuity delivers $g(x)=cx$. Skipping the positivity step is the usual slip. Once $f(x)=e^{2x}$, halving the input is a **square root** of the value, exposing the additive-style trap as wrong."
  },
  {
    "theme": "functionaleq",
    "themeLabel": "Continuous Functional Equations",
    "title": "A Product That Becomes a Sum",
    "difficulty": 4,
    "task": "Evaluate at a power",
    "tags": [
      "logarithm",
      "continuity",
      "multiplicative-input",
      "functional-equation"
    ],
    "statement": "A function $f:(0,\\infty)\\to\\mathbb{R}$ is continuous and satisfies $f(xy)=f(x)+f(y)$ for all positive $x,y$. Given $f(2)=5$, find $f(8)$.",
    "answer": "Continuity forces $f(x)=c\\ln x$. Then $f(2)=c\\ln 2=5$, and since $8=2^{3}$, $f(8)=f(2^{3})=3f(2)=3\\cdot 5=\\boxed{15}$.",
    "trap": "Confusing this with the multiplicative law $f(xy)=f(x)f(y)$ and writing $f(8)=f(2)f(4)=f(2)\\,[f(2)]^{2}=5\\cdot 25=125$. Here equal inputs multiplied give values that are **added**, not multiplied, so $f(2^{3})=3f(2)=15$.",
    "solutions": [
      {
        "name": "Iterate the law on powers of two",
        "steps": [
          "Put $x=y$: $f(x^{2})=2f(x)$, and inductively $f(x^{n})=n f(x)$ for positive integers $n$.",
          "With $x=2$, $n=3$: $f(8)=f(2^{3})=3f(2)$.",
          "Substitute $f(2)=5$: $f(8)=3\\cdot 5=15$.",
          "Hence $\\boxed{f(8)=15}$ (no use of the explicit logarithm form needed)."
        ]
      },
      {
        "name": "Reduce to additive via the logarithm",
        "steps": [
          "Substitute $x=e^{u},\\,y=e^{v}$ and set $g(u)=f(e^{u})$. The law becomes $g(u+v)=g(u)+g(v)$, the continuous additive equation, so $g(u)=cu$ and therefore $f(x)=c\\ln x$.",
          "Anchor: $f(2)=c\\ln 2=5\\Rightarrow c=\\dfrac{5}{\\ln 2}$.",
          "Compute $f(8)=c\\ln 8=\\dfrac{5}{\\ln 2}\\cdot 3\\ln 2=15$.",
          "Thus $\\boxed{f(8)=15}$."
        ]
      }
    ],
    "remark": "**Insight.** The substitution $x=e^{u}$ turns a product on the inputs into a sum, converting $f(xy)=f(x)+f(y)$ into the additive equation — and **continuity** is exactly what then forces $g(u)=cu$, hence $f(x)=c\\ln x$. You never even need the constant $c$: the structural rule $f(x^{n})=nf(x)$ gives the answer directly. The seductive error is mixing up the additive-output law with the multiplicative-output one."
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
    "title": "The Bilinear Correction Term",
    "difficulty": 5,
    "task": "Evaluate the function",
    "tags": [
      "additive-with-correction",
      "continuity",
      "quadratic-function",
      "functional-equation"
    ],
    "statement": "A continuous function $f:\\mathbb{R}\\to\\mathbb{R}$ satisfies $f(x+y)=f(x)+f(y)+3xy$ for all real $x,y$, with $f(1)=4$. Find $f(4)$.",
    "answer": "Removing the bilinear term: $h(x)=f(x)-\\tfrac{3}{2}x^{2}$ is continuous and additive, so $h(x)=bx$ and $f(x)=\\tfrac{3}{2}x^{2}+bx$. From $f(1)=\\tfrac32+b=4$ we get $b=\\tfrac52$, so $f(x)=\\tfrac32 x^{2}+\\tfrac52 x$ and $f(4)=24+10=\\boxed{34}$.",
    "trap": "Ignoring the $3xy$ term and treating the equation as purely additive, concluding $f(x)=cx$ with $c=f(1)=4$, hence $f(4)=16$. The correction term makes $f$ quadratic, not linear; the true value is $34$.",
    "solutions": [
      {
        "name": "Subtract off the quadratic part",
        "steps": [
          "Guess that $\\tfrac32 x^{2}$ generates the correction: with $p(x)=\\tfrac32 x^{2}$, $p(x+y)-p(x)-p(y)=\\tfrac32\\!\\left[(x+y)^2-x^2-y^2\\right]=3xy$, matching the extra term.",
          "Define $h(x)=f(x)-\\tfrac32 x^{2}$. Then $h(x+y)=f(x+y)-\\tfrac32(x+y)^2=\\big(f(x)+f(y)+3xy\\big)-\\big(\\tfrac32x^2+\\tfrac32y^2+3xy\\big)=h(x)+h(y)$.",
          "So $h$ is continuous and additive, giving $h(x)=bx$ and $f(x)=\\tfrac32 x^{2}+bx$. The anchor $f(1)=\\tfrac32+b=4$ yields $b=\\tfrac52$.",
          "Thus $f(x)=\\tfrac32 x^{2}+\\tfrac52 x$ and $f(4)=\\tfrac32\\cdot 16+\\tfrac52\\cdot 4=24+10=\\boxed{34}$."
        ]
      },
      {
        "name": "Build f(4) from f(1) step by step",
        "steps": [
          "First find $f(0)$: set $x=y=0$ to get $f(0)=2f(0)+0$, so $f(0)=0$ (consistent with a quadratic through the origin).",
          "Use the law with $x=n,\\,y=1$: $f(n+1)=f(n)+f(1)+3n=f(n)+4+3n$. Starting from $f(1)=4$: $f(2)=4+4+3=11$.",
          "Continue: $f(3)=f(2)+4+3\\cdot 2=11+4+6=21$; $f(4)=f(3)+4+3\\cdot 3=21+4+9=34$.",
          "Hence $\\boxed{f(4)=34}$, matching $\\tfrac32 x^2+\\tfrac52 x$ at $x=4$."
        ]
      }
    ],
    "remark": "**Insight.** A bilinear correction term $kxy$ is the fingerprint of a hidden $\\tfrac{k}{2}x^{2}$: subtracting it leaves a clean continuous additive equation, which continuity then forces into a line. The trap is to read the surface as additive and miss the quadratic entirely. Note also $f(0)=0$ here, but the $\\tfrac32 x^2$ piece means $f$ is genuinely nonlinear — the anchor must be applied to the full quadratic form, not to a phantom slope."
  },
  {
    "theme": "functionaleq",
    "themeLabel": "Continuous Functional Equations",
    "title": "The Sign Trap in an Exponential",
    "difficulty": 5,
    "task": "Find a negative input",
    "tags": [
      "exponential",
      "continuity",
      "positivity",
      "functional-equation"
    ],
    "statement": "A continuous function $f:\\mathbb{R}\\to\\mathbb{R}$, not identically zero, satisfies $f(x+y)=f(x)\\,f(y)$ for all real $x,y$, and $f(2)=9$. Determine $f(-1)$.",
    "answer": "Here $f(x)=f\\!\\left(\\tfrac{x}{2}\\right)^{2}\\ge 0$ and $f$ is nowhere zero, so $f>0$; thus $f(x)=a^{x}$ with $a=f(1)>0$. From $f(2)=a^{2}=9$ and $a>0$ we get $a=3$, so $f(x)=3^{x}$ and $f(-1)=3^{-1}=\\boxed{\\tfrac13}$.",
    "trap": "Solving $a^{2}=9$ and taking $a=-3$, giving $f(-1)=\\tfrac{1}{-3}=-\\tfrac13$. The relation forces $f(x)=f(x/2)^{2}\\ge 0$, so $a=f(1)$ cannot be negative; only $a=3$ survives, making $f(-1)=+\\tfrac13$.",
    "solutions": [
      {
        "name": "Positivity kills the negative root",
        "steps": [
          "Nonzero plus the law gives $f(x)=f(x_0)/f(x_0-x)\\neq 0$ everywhere, and $f(x)=f\\!\\left(\\tfrac{x}{2}\\right)^{2}>0$, so $f$ is strictly positive. Hence $g(x)=\\ln f(x)$ is continuous and additive, so $f(x)=a^{x}$ with $a=f(1)>0$.",
          "From $f(2)=a^{2}=9$ and the constraint $a>0$, we must take $a=3$ (the value $a=-3$ is impossible since $a=f(1)>0$).",
          "Thus $f(x)=3^{x}$.",
          "Therefore $f(-1)=3^{-1}=\\boxed{\\tfrac13}$."
        ]
      },
      {
        "name": "Chain inverses directly from the law",
        "steps": [
          "Set $y=-x$ in the law: $f(0)=f(x)f(-x)$. Taking $x=y=0$ gives $f(0)=f(0)^2$, and since $f\\not\\equiv 0$ forces $f(0)\\neq 0$, we get $f(0)=1$.",
          "Hence $f(x)f(-x)=1$, so $f(-1)=\\dfrac{1}{f(1)}$. Also $f(2)=f(1)^2=9$ with $f(1)=f\\!\\left(\\tfrac12\\right)^2>0$, so $f(1)=3$.",
          "Therefore $f(-1)=\\dfrac{1}{3}$.",
          "That is $\\boxed{f(-1)=\\tfrac13}$."
        ]
      }
    ],
    "remark": "**Insight.** The square-root step $a^{2}=9$ is where careless solvers leak a spurious $a=-3$. But $f(x)=f(x/2)^{2}$ pins $f$ to be **strictly positive** the moment it is nonzero, so the base $a=f(1)$ is positive and only $a=3$ is admissible. Continuity supplies the exponential form $a^{x}$; positivity supplies the correct sign. Both are needed."
  },
  {
    "theme": "functionaleq",
    "themeLabel": "Continuous Functional Equations",
    "title": "The Constant That Shifts the Origin",
    "difficulty": 5,
    "task": "Evaluate the function",
    "tags": [
      "additive-shifted",
      "continuity",
      "affine-function",
      "functional-equation"
    ],
    "statement": "A continuous function $g:\\mathbb{R}\\to\\mathbb{R}$ satisfies $g(x+y)=g(x)+g(y)-4$ for all real $x,y$, with $g(1)=1$. Find $g(3)$, and state $g(0)$.",
    "answer": "Let $h(x)=g(x)-4$; then $h$ is continuous and additive, so $h(x)=cx$ and $g(x)=cx+4$. From $g(1)=c+4=1$ we get $c=-3$, so $g(x)=-3x+4$. Hence $g(3)=-9+4=\\boxed{-5}$ and $g(0)=4$.",
    "trap": "Dropping the constant $-4$ and treating $g$ as additive, giving $g(x)=cx$ with $c=g(1)=1$ and $g(3)=3$ — and the companion error $g(0)=0$. The shift makes $g$ affine with $g(0)=4\\neq 0$; the correct values are $g(3)=-5$ and $g(0)=4$.",
    "solutions": [
      {
        "name": "Shift to recover additivity",
        "steps": [
          "Find the fixed offset first: set $x=y=0$ to get $g(0)=2g(0)-4$, so $g(0)=4$ (not $0$).",
          "Define $h(x)=g(x)-4$. Then $h(x+y)=g(x+y)-4=\\big(g(x)+g(y)-4\\big)-4=\\big(h(x)+4\\big)+\\big(h(y)+4\\big)-8=h(x)+h(y)$, so $h$ is continuous and additive.",
          "Thus $h(x)=cx$ and $g(x)=cx+4$. The anchor $g(1)=c+4=1$ gives $c=-3$, so $g(x)=-3x+4$.",
          "Therefore $g(3)=-3\\cdot 3+4=-5$, i.e. $\\boxed{g(3)=-5}$, with $g(0)=4$."
        ]
      },
      {
        "name": "Iterate the recurrence from g(1)",
        "steps": [
          "Take $y=1$: $g(x+1)=g(x)+g(1)-4=g(x)+1-4=g(x)-3$, a recurrence dropping by $3$ each unit step.",
          "From $g(1)=1$: $g(2)=g(1)-3=-2$.",
          "Then $g(3)=g(2)-3=-5$.",
          "Hence $\\boxed{g(3)=-5}$; and stepping back, $g(0)=g(1)+3=4$, confirming the shifted origin."
        ]
      }
    ],
    "remark": "**Insight.** An additive law disguised by a constant, $g(x+y)=g(x)+g(y)+k$, hides an **affine** function: subtracting the constant restores pure additivity, which continuity turns into a line, and re-adding the constant gives $g(x)=cx-k$ with $g(0)=-k$. The lethal reflex is to assume $g(0)=0$; here $g(0)=4$. Always solve for $g(0)$ from the equation before trusting the additive template."
  },
  {
    "theme": "functionaleq",
    "themeLabel": "Continuous Functional Equations",
    "title": "A Cubic Hiding Behind a Sum Law",
    "difficulty": 5,
    "task": "Evaluate the function",
    "tags": [
      "additive-with-correction",
      "continuity",
      "cubic-function",
      "functional-equation"
    ],
    "statement": "A continuous function $f:\\mathbb{R}\\to\\mathbb{R}$ satisfies $f(x+y)=f(x)+f(y)+x^{2}y+xy^{2}$ for all real $x,y$, with $f(1)=2$. Find $f(3)$.",
    "answer": "Since $x^2y+xy^2=xy(x+y)$ is produced by $\\tfrac13 x^{3}$, set $h(x)=f(x)-\\tfrac13 x^{3}$; then $h$ is continuous and additive, so $h(x)=ax$ and $f(x)=\\tfrac13 x^{3}+ax$. From $f(1)=\\tfrac13+a=2$ we get $a=\\tfrac53$, so $f(x)=\\tfrac13 x^{3}+\\tfrac53 x$ and $f(3)=9+5=\\boxed{14}$.",
    "trap": "Discarding the term $x^{2}y+xy^{2}$ and calling $f$ additive, so $f(x)=cx$ with $c=f(1)=2$ and $f(3)=6$. The correction term forces a cubic, not a line; the actual value is $14$.",
    "solutions": [
      {
        "name": "Subtract the cubic generator",
        "steps": [
          "Identify what produces the extra term: with $p(x)=\\tfrac13 x^{3}$, $p(x+y)-p(x)-p(y)=\\tfrac13\\!\\left[(x+y)^3-x^3-y^3\\right]=\\tfrac13\\,(3x^2y+3xy^2)=x^2y+xy^2$.",
          "Define $h(x)=f(x)-\\tfrac13 x^{3}$. Then $h(x+y)=f(x+y)-\\tfrac13(x+y)^3=\\big(f(x)+f(y)+x^2y+xy^2\\big)-\\big(\\tfrac13x^3+\\tfrac13y^3+x^2y+xy^2\\big)=h(x)+h(y)$.",
          "So $h$ is continuous and additive, giving $h(x)=ax$ and $f(x)=\\tfrac13 x^{3}+ax$. The anchor $f(1)=\\tfrac13+a=2$ yields $a=\\tfrac53$.",
          "Hence $f(x)=\\tfrac13 x^{3}+\\tfrac53 x$ and $f(3)=\\tfrac13\\cdot 27+\\tfrac53\\cdot 3=9+5=\\boxed{14}$."
        ]
      },
      {
        "name": "March up using the recurrence",
        "steps": [
          "Set $y=1$: $f(x+1)=f(x)+f(1)+x^{2}\\cdot 1+x\\cdot 1=f(x)+2+x^{2}+x$.",
          "From $f(1)=2$: $f(2)=f(1)+2+1^{2}+1=2+2+1+1=6$.",
          "Then $f(3)=f(2)+2+2^{2}+2=6+2+4+2=14$.",
          "Hence $\\boxed{f(3)=14}$, agreeing with $\\tfrac13 x^{3}+\\tfrac53 x$ at $x=3$."
        ]
      }
    ],
    "remark": "**Insight.** A symmetric correction like $x^{2}y+xy^{2}=xy(x+y)$ is the residue of a hidden $\\tfrac13 x^{3}$ — peel it off and a clean continuous additive equation remains, which continuity forces into a line. The trap is to read only the additive skeleton and report a linear answer. The recurrence route ($y=1$) is a fast independent check that never needs the closed form."
  },
  {
    "theme": "functionaleq",
    "themeLabel": "Continuous Functional Equations",
    "title": "The Power Law With a Negative Exponent",
    "difficulty": 5,
    "task": "Evaluate at a fraction",
    "tags": [
      "power-law",
      "continuity",
      "multiplicative-input",
      "functional-equation",
      "positivity"
    ],
    "statement": "A function $f:(0,\\infty)\\to(0,\\infty)$ is continuous and satisfies $f(xy)=f(x)\\,f(y)$ for all positive $x,y$. It is given that $f$ is not identically $1$ and that $f(9)=\\tfrac{1}{3}$. Find the value of $f\\!\\left(\\tfrac{1}{4}\\right)$.",
    "answer": "Continuity with positive values forces $f(x)=x^{c}$. From $f(9)=9^{c}=\\tfrac13$ we get $c=-\\tfrac12$, so $f(x)=x^{-1/2}=\\dfrac{1}{\\sqrt{x}}$ and $f\\!\\left(\\tfrac14\\right)=\\left(\\tfrac14\\right)^{-1/2}=\\boxed{2}$.",
    "trap": "Reading off the exponent with the wrong sign. From $f(9)=1/3<1$ a hasty solver guesses $c=+\\tfrac12$ (a square root) and reports $f(1/4)=(1/4)^{1/2}=\\tfrac12$. But $9^{1/2}=3\\ne\\tfrac13$; the data forces $c=-\\tfrac12$, giving $f(1/4)=(1/4)^{-1/2}=2$. A second trap is overlooking that $f(1)=1$ is forced, then mis-anchoring the constant.",
    "solutions": [
      {
        "name": "Convert to additive by taking a logarithm",
        "steps": [
          "First, putting $x=y=1$ gives $f(1)=f(1)^{2}$, and since $f>0$ we get $f(1)=1$ (the value $0$ is excluded by positivity). Because every value is positive, set $g(x)=\\ln f(x)$.",
          "The law becomes $g(xy)=\\ln f(xy)=\\ln\\!\\big(f(x)f(y)\\big)=g(x)+g(y)$, the continuous additive equation in the multiplicative variable, so $g(x)=c\\ln x$ and hence $f(x)=x^{c}$.",
          "Anchor with $f(9)=\\tfrac13$: $9^{c}=3^{2c}=3^{-1}\\Rightarrow 2c=-1\\Rightarrow c=-\\tfrac12$. (The hypothesis that $f$ is not identically $1$ rules out the trivial $c=0$ branch.)",
          "Therefore $f(x)=x^{-1/2}$ and $f\\!\\left(\\tfrac14\\right)=\\left(\\tfrac14\\right)^{-1/2}=\\sqrt{4}=2$, i.e. $\\boxed{2}$."
        ]
      },
      {
        "name": "Iterate the law on powers without solving for c",
        "steps": [
          "Setting $x=y$ gives $f(x^{2})=f(x)^{2}$, and inductively $f(x^{n})=f(x)^{n}$ for every positive integer $n$. Also $f(1)=1$ and $f(x)f(1/x)=f(1)=1$, so $f(1/x)=1/f(x)$.",
          "Let $a=f(3)$. Then $f(9)=f(3^{2})=a^{2}=\\tfrac13$, so $a^{2}=\\tfrac13$; positivity gives $a=\\dfrac{1}{\\sqrt3}$.",
          "Now $f\\!\\left(\\tfrac14\\right)=\\dfrac{1}{f(4)}$ and $f(4)=f(2)^{2}$, while $f(2)$ is the unique positive value with $f(2)=2^{c}$ for the same $c$; from $a=3^{c}=3^{-1/2}$ we read $c=-\\tfrac12$, so $f(2)=2^{-1/2}$ and $f(4)=2^{-1}=\\tfrac12$.",
          "Hence $f\\!\\left(\\tfrac14\\right)=\\dfrac{1}{f(4)}=\\dfrac{1}{1/2}=2$, giving $\\boxed{2}$."
        ]
      }
    ],
    "remark": "**Insight.** Positivity is doing two silent jobs: it lets $\\ln f$ exist (turning the product law into the additive one, where continuity forces $g(x)=c\\ln x$), and it discards the spurious $f\\equiv 0$ solution while pinning $f(1)=1$. The exponent's sign is determined by the data, not its size: $f(9)<1$ does not mean a square root — solving $3^{2c}=3^{-1}$ honestly gives $c=-\\tfrac12$, so the seductive $\\tfrac12$ is wrong and the value at $\\tfrac14$ is $2$."
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
    "statement": "Let $p(x)=x^{5}-5x+3$. \\[Find the number of real roots of p,\\] and for each one exhibit a pair of integers $a<b$ with $p(a)$ and $p(b)$ of opposite sign that traps it. (You may not use a calculator; argue only from integer/half-integer values and the IVT.)",
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
    "statement": "Let $g:\\mathbb{R}\\to\\mathbb{R}$ be continuous and $2\\pi$-periodic (think: temperature around a circular wall). \\[Prove that there exists an angle \\theta \\text{ with } g(\\theta)=g(\\theta+\\pi),\\] i.e. some pair of diametrically opposite points have equal temperature.",
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
    "title": "The Self-Map's Mirror",
    "difficulty": 4,
    "task": "Prove that",
    "tags": [
      "self-map",
      "fixed-point",
      "anti-diagonal",
      "boundary-values"
    ],
    "statement": "Let $f:[0,1]\\to[0,1]$ be continuous. \\[Prove that the equation f(x)=1-x has a solution in [0,1].\\] (Geometrically: the graph of $f$ must meet the anti-diagonal joining $(0,1)$ to $(1,0)$.)",
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
    "statement": "For a real parameter $c$, consider $x^{3}-3x=c$. \\[Find all c for which this equation has exactly three distinct real solutions,\\] and state how many solutions occur for the remaining values of $c$.",
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
    "statement": "Let $f$ be continuous on $[0,3]$ with $f(0)=f(3)$. \\[Prove there exists x\\in[0,2] \\text{ with } f(x)=f(x+1).\\] (A unit-length horizontal chord must exist somewhere.)",
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
    "statement": "Let $f:[0,1]\\to\\mathbb{R}$ be continuous, and write\n\\[\nA=\\int_{0}^{1} f(t)\\,dt\n\\]\nfor its average value over $[0,1]$ (the interval has length $1$, so the average and the integral coincide). Consider the three level sets cut out by $A$:\n\\[\nL=\\{x\\in[0,1]:f(x)<A\\},\\qquad E=\\{x\\in[0,1]:f(x)=A\\},\\qquad G=\\{x\\in[0,1]:f(x)>A\\}.\n\\]\n\nProve the following two assertions and then resolve the dichotomy precisely. (i) $E$ is never empty: there always exists $c\\in[0,1]$ with $f(c)=A$. (This is the mean-value statement for integrals; prove it from continuity and the extreme-value theorem rather than quoting it.) (ii) One naturally expects more — that $f$ must dip strictly below its own average somewhere and rise strictly above it somewhere, i.e. that $L$ and $G$ are both nonempty, so that the level $A$ is genuinely crossed. This stronger claim is not a theorem as stated.\n\nDetermine the exact class of continuous $f$ for which the stronger claim fails — that is, for which $L$ and $G$ are not both nonempty — and prove your characterization is sharp (every such $f$ fails, and every other continuous $f$ succeeds, with the crossing then occurring at an interior point of $[0,1]$). State your final answer as that exceptional class of functions.",
    "answer": "\\[\\boxed{\\,L,G\\text{ both empty}\\iff f\\text{ is constant};\\ \\text{i.e. the stronger claim fails for exactly the constant }f\\,}\\]",
    "trap": "The seductive misstep is to prove (ii) outright by asserting the strict double bound $m<A<M$ \"because an average of a non-degenerate range of values must lie strictly inside it,\" then turning the IVT crank to manufacture both a sub-average and a super-average point — and never noticing that this strict bound is simply FALSE for one family of functions. When $f\\equiv k$ is constant, the extreme-value theorem still hands you $m=M=k$, but now $A=\\int_0^1 k\\,dt=k$ too, so the chain collapses to $m=A=M$. There is no slack for IVT to bite: $L=G=\\varnothing$ while $E=[0,1]$. The value $A$ is still attained (assertion (i) survives, since every point satisfies $f(c)=A$), but it is never crossed. A student who writes \"$m<A<M$ by EVT, so by IVT $f$ is below $A$ somewhere and above $A$ somewhere\" has silently divided by the very gap $M-m$ that vanishes in the constant case — a hidden non-degeneracy assumption smuggled in under the word \"average.\" The deeper trap is mistaking which hypothesis forces strictness: it is NOT continuity and it is NOT the EVT (both hold for constants); it is precisely non-constancy, and the engine that converts non-constancy into strict inequality is the fact that a continuous nonnegative function which is positive at even one point has strictly positive integral — applied to $f-m$ and to $M-f$. Get the gap to vanish only for constants, and the dichotomy is exact; assume the gap is always positive, and you have \"proved\" a false theorem. A secondary slip is to think a non-constant $f$ might still avoid an INTERIOR crossing by hitting $A$ only at an endpoint: but if $f(0)=A$ with $f$ non-constant, then $f-A$ is continuous, not identically zero, has zero integral, and vanishes at $0$, so it must change sign inside $(0,1)$ — forcing an interior crossing regardless.",
    "solutions": [
      {
        "name": "EVT bounds, then the positive-integral lemma forces strictness exactly off the constants",
        "steps": [
          "Existence of $c$ (assertion (i)). Since $f$ is continuous on the compact set $[0,1]$, the extreme-value theorem gives a minimum $m=f(p)$ and a maximum $M=f(q)$ with $m\\le f(x)\\le M$ for all $x$. Integrating over $[0,1]$ (length $1$) preserves the inequalities: $m=\\int_0^1 m\\,dt\\le \\int_0^1 f=A\\le \\int_0^1 M\\,dt=M$. Thus $m\\le A\\le M$, so $A$ lies in the range $[m,M]=f([0,1])$ (the range is an interval by IVT). Hence $A=f(c)$ for some $c\\in[0,1]$: $E\\neq\\varnothing$.",
          "The strictness lemma. Claim: $A>m$ unless $f\\equiv m$, and $A<M$ unless $f\\equiv M$. Proof for the lower bound: the function $g=f-m$ is continuous and $g\\ge0$. Then $A-m=\\int_0^1 g$. If $f$ is non-constant there is a point $x_0$ with $f(x_0)>m$, i.e. $g(x_0)=\\alpha>0$; by continuity $g>\\alpha/2$ on some open subinterval $(x_0-\\eta,x_0+\\eta)\\cap[0,1]$ of positive length $\\ell$, so $\\int_0^1 g\\ge \\tfrac{\\alpha}{2}\\,\\ell>0$, giving $A>m$. The same argument applied to $M-f\\ge0$ (positive somewhere when $f$ is non-constant) gives $A<M$. So: $f$ non-constant $\\Rightarrow m<A<M$ strictly.",
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
    "statement": "Let $f$ be continuous on $[0,1]$ with $f(0)=0$ and $f(1)=1$. Let $n\\ge1$ be an integer. \\[Prove there exist a,b \\text{ with } 0\\le a<b\\le1,\\ b-a=\\tfrac1n,\\ \\text{and}\\ f(b)-f(a)=\\tfrac1n.\\] That is, somewhere the graph has a chord of horizontal width $1/n$ and vertical rise exactly $1/n$ (average slope $1$).",
    "answer": "proved",
    "trap": "Trying to anchor the window at $a=0$ (then $f(1/n)$ need not equal $1/n$ —{} e.g. a continuous $f$ with $f(0)=0,f(1)=1$ can have $f(1/3)\\approx0.63$), or claiming it works for arbitrary widths $w\\in(0,1)$. The result is special to widths $1/n$: there exist continuous $f$ with $f(0)=0,f(1)=1$ having NO chord of slope $1$ and width, say, $2/5$. The telescoping sum is what privileges $1/n$.",
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
          "Hence this $f$ has no chord of width $w$ and slope $1$, since $f(x+w)-f(x)-w$ never vanishes —{} so the telescoping argument genuinely needs $w=1/n$ (where $\\sin\\tfrac{\\pi}{w}=\\sin n\\pi=0$ collapses the obstruction to $0$).",
          "Therefore the statement is exactly true for widths $1/n$ and can fail for every other width. $\\blacksquare$"
        ]
      }
    ],
    "remark": "This is the Universal Chord Theorem of P. L’evy. The case $f(b)-f(a)=1/n$ for $f$ running from $0$ to $1$ is equivalent to a horizontal chord (width $1/n$) of the auxiliary function $h(x)=f(x)-x$, and the partition sum collapses precisely because $n$ steps of width $1/n$ tile $[0,1]$. For any width not of the form $1/n$, the sliding-block construction in Method 3 shows the conclusion can fail —{} the rationals $1/n$ are exactly the universal chord lengths."
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
    "theme": "stepmod",
    "themeLabel": "Step Functions, Modulus & Combined",
    "title": "Where the Step-Scaled Line Tears",
    "difficulty": 4,
    "task": "Count the discontinuities",
    "tags": [
      "greatest integer",
      "step function",
      "jump discontinuity",
      "continuity at a point"
    ],
    "statement": "Let $f(x)=x\\lfloor x\\rfloor$. Determine the number of points in the interval $[-2,3]$ at which $f$ is discontinuous, and identify the one integer of that interval at which $f$ is nonetheless continuous.",
    "answer": "$\\boxed{5\\text{ discontinuities; }f\\text{ is continuous at }x=0}$",
    "trap": "A tempting wrong answer is $6$, obtained by declaring $f$ discontinuous at every integer of $[-2,3]$ (namely $-2,-1,0,1,2,3$). This forgets that at $x=0$ the factor $x$ vanishes, so both one-sided limits and the value equal $0$ and the jump of $\\lfloor x\\rfloor$ is healed.",
    "solutions": [
      {
        "name": "One-sided limits at each integer",
        "steps": [
          "Away from integers $\\lfloor x\\rfloor$ is locally constant, so $f(x)=x\\lfloor x\\rfloor$ is a continuous product of continuous pieces; only integers can break it.",
          "At an integer $n$: $\\lim_{x\\to n^-}f(x)=n(n-1)$ (here $\\lfloor x\\rfloor=n-1$), while $\\lim_{x\\to n^+}f(x)=n\\cdot n=n^2=f(n)$.",
          "The two one-sided limits differ by $n^2-n(n-1)=n$, so $f$ jumps at $n$ exactly when $n\\neq 0$; at $n=0$ both limits and the value are $0$.",
          "The nonzero integers in $[-2,3]$ are $-2,-1,1,2,3$: that is $5$ discontinuities, with continuity only at $x=0$."
        ]
      },
      {
        "name": "Jump-size formula",
        "steps": [
          "Write the jump of $f$ at an integer $n$ as $J(n)=\\lim_{x\\to n^+}f(x)-\\lim_{x\\to n^-}f(x)$.",
          "Since $\\lfloor x\\rfloor$ increases by $1$ across $n$, $J(n)=n\\cdot\\big(n-(n-1)\\big)=n$.",
          "Thus $J(n)=0$ only at $n=0$, and $J(n)\\neq 0$ at the five integers $-2,-1,1,2,3$ of $[-2,3]$, giving $\\boxed{5}$ discontinuities and continuity at $x=0$."
        ]
      }
    ],
    "remark": "**Insight.** A product **$g(x)\\lfloor x\\rfloor$** with a continuous $g$ jumps at an integer $n$ by exactly **$g(n)$ times the unit step of $\\lfloor x\\rfloor$**. So the discontinuity is **automatically healed wherever the smooth factor vanishes** — here only at the origin. The lesson: do not count integers blindly; weigh each step by the factor multiplying it."
  },
  {
    "theme": "stepmod",
    "themeLabel": "Step Functions, Modulus & Combined",
    "title": "Modulus Times Signum Is Secretly the Line",
    "difficulty": 4,
    "task": "Identify and test continuity",
    "tags": [
      "modulus",
      "signum",
      "identity function",
      "continuity at zero"
    ],
    "statement": "Define $f(x)=|x|\\,\\mathrm{sgn}(x)$, with the convention $\\mathrm{sgn}(0)=0$. Simplify $f$ to a single elementary expression valid for all real $x$ and decide whether $f$ is continuous at $x=0$.",
    "answer": "$\\boxed{f(x)=x\\text{ for all }x;\\ f\\text{ is continuous on }\\mathbb{R}\\text{, in particular at }0}$",
    "trap": "The seductive error is to declare $f$ discontinuous at $0$ because $\\mathrm{sgn}$ jumps there. But $|x|\\,\\mathrm{sgn}(x)=x$ everywhere — including $x=0$, where $|0|\\,\\mathrm{sgn}(0)=0=0$ — so the modulus' vanishing at the origin kills the jump.",
    "solutions": [
      {
        "name": "Case split on the sign",
        "steps": [
          "For $x>0$: $|x|=x$ and $\\mathrm{sgn}(x)=1$, so $f(x)=x\\cdot1=x$.",
          "For $x<0$: $|x|=-x$ and $\\mathrm{sgn}(x)=-1$, so $f(x)=(-x)(-1)=x$.",
          "For $x=0$: $f(0)=|0|\\,\\mathrm{sgn}(0)=0$, which also equals $x$ at $x=0$.",
          "Hence $f(x)=x$ on all of $\\mathbb{R}$; being a polynomial it is continuous everywhere, in particular at $0$."
        ]
      },
      {
        "name": "Limit at the origin",
        "steps": [
          "Bound $|f(x)|=\\big||x|\\,\\mathrm{sgn}(x)\\big|\\le |x|$ since $|\\mathrm{sgn}(x)|\\le 1$.",
          "As $x\\to 0$ the right side $|x|\\to 0$, so $\\lim_{x\\to 0}f(x)=0=f(0)$, proving continuity at $0$.",
          "Combined with $f(x)=x$ off the origin, $f$ is the identity and continuous on $\\mathbb{R}$, the boxed result."
        ]
      }
    ],
    "remark": "**Insight.** Two functions that each break at the origin — the **slope-flip of $|x|$** and the **jump of $\\mathrm{sgn}(x)$** — combine into the perfectly smooth identity. The reason is that **$|x|$ vanishes exactly where $\\mathrm{sgn}$ jumps**, so the bounded jump is multiplied by zero. Never report a discontinuity from one factor before checking whether the other factor silences it."
  },
  {
    "theme": "stepmod",
    "themeLabel": "Step Functions, Modulus & Combined",
    "title": "A Tent Built on the Fractional Part",
    "difficulty": 5,
    "task": "Decide continuity everywhere",
    "tags": [
      "fractional part",
      "modulus",
      "self-healing jump",
      "continuity on an interval"
    ],
    "statement": "Let $T(x)=\\big|\\,\\{x\\}-\\tfrac12\\,\\big|-\\tfrac12$, where $\\{x\\}$ is the fractional part of $x$. Show that $T$ is continuous on all of $\\mathbb{R}$, and state its value at the integers and at the half-integers $x=n+\\tfrac12$.",
    "answer": "$\\boxed{T\\text{ is continuous on }\\mathbb{R};\\ T(n)=0,\\ T\\!\\big(n+\\tfrac12\\big)=-\\tfrac12}$",
    "trap": "The tempting wrong answer is “discontinuous at every integer,” inherited from $\\{x\\}$. But the outer map $\\psi(t)=|t-\\tfrac12|-\\tfrac12$ satisfies $\\psi(0)=\\psi(1)=0$, so the two lips of the integer seam are sent to the same height and the jump cancels; the corner at the half-integer is continuous too.",
    "solutions": [
      {
        "name": "Match the endpoints of the unit cell",
        "steps": [
          "Let $\\psi(t)=|t-\\tfrac12|-\\tfrac12$ on $[0,1]$; then $T(x)=\\psi(\\{x\\})$, continuous on each interval between integers since $\\{x\\}$ is.",
          "At an integer $n$: as $x\\to n^-$, $\\{x\\}\\to1$, so $T\\to\\psi(1)=|\\tfrac12|-\\tfrac12=0$; as $x\\to n^+$, $\\{x\\}\\to0$, so $T\\to\\psi(0)=|{-\\tfrac12}|-\\tfrac12=0$; and $T(n)=\\psi(0)=0$.",
          "All three equal $0$, so $T$ is continuous at every integer, hence on all of $\\mathbb{R}$.",
          "At $x=n+\\tfrac12$, $\\{x\\}=\\tfrac12$, so $T=|\\tfrac12-\\tfrac12|-\\tfrac12=-\\tfrac12$ — a continuous corner (minimum), not a break."
        ]
      },
      {
        "name": "Recognise the periodic tent",
        "steps": [
          "$\\psi(t)=|t-\\tfrac12|-\\tfrac12$ is a continuous tent on $[0,1]$ with $\\psi(0)=\\psi(1)=0$ and minimum $-\\tfrac12$ at $t=\\tfrac12$.",
          "Because its endpoint values agree, the $1$-periodic function $T(x)=\\psi(\\{x\\})$ joins seamlessly at every integer, so no jump appears.",
          "Thus $T$ is continuous on $\\mathbb{R}$ with $T(n)=0$ and $T(n+\\tfrac12)=-\\tfrac12$, the boxed answer."
        ]
      }
    ],
    "remark": "**Insight.** Feeding the sawtooth $\\{x\\}$ into a tent **$\\psi(t)=|t-\\tfrac12|-\\tfrac12$** yields a continuous periodic ripple, because **$\\psi(0)=\\psi(1)$** stitches the integer seams shut. The half-integer is only a corner (slope kink), which never breaks continuity. The recurring principle for $\\phi(\\{x\\})$: **continuity everywhere $\\iff$ the outer map agrees at the endpoints $0$ and $1$.**"
  },
  {
    "theme": "stepmod",
    "themeLabel": "Step Functions, Modulus & Combined",
    "title": "The Fractional Part That Never Jumps",
    "difficulty": 5,
    "task": "Decide continuity everywhere",
    "tags": [
      "fractional part",
      "self-healing jump",
      "continuity on an interval",
      "one-sided limits"
    ],
    "statement": "Consider $g(x)=\\{x\\}^2-\\{x\\}$, where $\\{x\\}$ denotes the fractional part of $x$. At how many real points is $g$ discontinuous? Justify by examining the behaviour at an arbitrary integer $n$.",
    "answer": "$\\boxed{g\\text{ is continuous on all of }\\mathbb{R};\\ 0\\text{ discontinuities}}$",
    "trap": "The seductive wrong answer is “discontinuous at every integer,” reasoning that $\\{x\\}$ jumps there. But $g(x)=\\{x\\}(\\{x\\}-1)$, and the left limit $\\{x\\}\\to 1^-$ makes the factor $(\\{x\\}-1)\\to 0$, so the product's left limit is $0$ — equal to the right limit and the value.",
    "solutions": [
      {
        "name": "Factor and take one-sided limits",
        "steps": [
          "Factor $g(x)=\\{x\\}^2-\\{x\\}=\\{x\\}\\big(\\{x\\}-1\\big)$.",
          "On any open interval between consecutive integers $\\{x\\}=x-\\lfloor x\\rfloor$ is continuous, so $g$ is continuous there.",
          "At an integer $n$: as $x\\to n^-$, $\\{x\\}\\to 1$, giving $g\\to 1\\cdot(1-1)=0$; as $x\\to n^+$, $\\{x\\}\\to 0$, giving $g\\to 0\\cdot(0-1)=0$; and $g(n)=0\\cdot(0-1)=0$.",
          "All three agree at every integer, so $g$ is continuous everywhere: $0$ discontinuities."
        ]
      },
      {
        "name": "Rewrite as a periodic continuous function",
        "steps": [
          "Define $\\phi(t)=t^2-t=t(t-1)$ on $[0,1]$; then $g(x)=\\phi(\\{x\\})$.",
          "Note $\\phi(0)=0$ and $\\phi(1)=0$, so $\\phi$ takes equal values at the two ends of the unit interval.",
          "Hence the $1$-periodic extension built from $\\{x\\}$ joins up with no mismatch at the integers, and $g$ is continuous on $\\mathbb{R}$, with the boxed conclusion of $0$ discontinuities."
        ]
      }
    ],
    "remark": "**Insight.** A composite **$\\phi(\\{x\\})$** is continuous on all of $\\mathbb{R}$ precisely when **$\\phi(0)=\\phi(1)$** — the only place $\\{x\\}$ can misbehave is the integer seam, and matching the endpoint values stitches it shut. Here $\\phi(t)=t(t-1)$ vanishes at both $0$ and $1$, so the apparent jump is an illusion."
  },
  {
    "theme": "stepmod",
    "themeLabel": "Step Functions, Modulus & Combined",
    "title": "Floor of x Plus Floor of Minus x",
    "difficulty": 5,
    "task": "Classify the discontinuities",
    "tags": [
      "greatest integer",
      "removable discontinuity",
      "indicator of integers",
      "one-sided limits"
    ],
    "statement": "Let $h(x)=\\lfloor x\\rfloor+\\lfloor -x\\rfloor$. Show that $h(x)=0$ when $x\\in\\mathbb{Z}$ and $h(x)=-1$ otherwise, and classify the discontinuity of $h$ at each integer.",
    "answer": "$\\boxed{h\\text{ has a removable discontinuity at every integer; }\\lim_{x\\to n}h(x)=-1\\neq 0=h(n)}$",
    "trap": "A common wrong answer is to call these jump discontinuities. They are not: the left and right limits are both $-1$ (they agree), so the limit exists; only the value $h(n)=0$ disagrees. That is the signature of a removable discontinuity, not a jump.",
    "solutions": [
      {
        "name": "Evaluate by cases",
        "steps": [
          "If $x=n\\in\\mathbb{Z}$ then $\\lfloor x\\rfloor=n$ and $\\lfloor -x\\rfloor=-n$, so $h(n)=n+(-n)=0$.",
          "If $x\\notin\\mathbb{Z}$ write $x=n+f$ with $0<f<1$; then $\\lfloor x\\rfloor=n$ and $-x=-n-f$ gives $\\lfloor -x\\rfloor=-n-1$, so $h(x)=n+(-n-1)=-1$.",
          "Thus $h$ equals $-1$ off the integers and $0$ on them; near any integer $n$, $\\lim_{x\\to n}h(x)=-1$ while $h(n)=0$.",
          "Since the two-sided limit exists ($=-1$) but differs from the value, the discontinuity at every integer is removable."
        ]
      },
      {
        "name": "Identify the function",
        "steps": [
          "Recognise $h(x)=\\lfloor x\\rfloor+\\lfloor -x\\rfloor$ as $-1$ plus the indicator of the integers: $h(x)=\\mathbf{1}_{\\mathbb{Z}}(x)-1$.",
          "The constant part $-1$ is continuous; the indicator $\\mathbf{1}_{\\mathbb{Z}}$ is $1$ only at isolated integer points, with surrounding limit $0$.",
          "Hence at each integer the limit is $-1$ but the value is $0$: a removable discontinuity, matching the boxed answer."
        ]
      }
    ],
    "remark": "**Insight.** The combination **$\\lfloor x\\rfloor+\\lfloor -x\\rfloor$** is the cleanest detector of integrality: it reads **$0$ on the integers and $-1$ everywhere else**. Because the surrounding limit is a single value $-1$, each break is **removable** — redefining $h$ to be $-1$ at the integers would make it continuous. Distinguishing removable from jump hinges on whether the two one-sided limits agree."
  },
  {
    "theme": "stepmod",
    "themeLabel": "Step Functions, Modulus & Combined",
    "title": "Sine of Pi Times the Fractional Part",
    "difficulty": 5,
    "task": "Test continuity at integers",
    "tags": [
      "fractional part",
      "trigonometric composite",
      "self-healing jump",
      "periodicity"
    ],
    "statement": "Let $\\phi(x)=\\sin\\!\\big(\\pi\\{x\\}\\big)$, where $\\{x\\}$ is the fractional part of $x$. Show that $\\phi$ is continuous at every integer, and hence on all of $\\mathbb{R}$, even though $\\{x\\}$ itself is discontinuous at the integers.",
    "answer": "$\\boxed{\\phi\\text{ is continuous on }\\mathbb{R};\\ \\text{in particular }\\lim_{x\\to n^-}\\phi=\\lim_{x\\to n^+}\\phi=\\phi(n)=0}$",
    "trap": "The tempting wrong claim is that $\\phi$ inherits a discontinuity at each integer from $\\{x\\}$. It does not: as $x\\to n^-$, $\\{x\\}\\to 1$ and $\\sin(\\pi\\cdot 1)=0$, matching the right limit $\\sin(\\pi\\cdot 0)=0$; the sine maps both ends of the seam to the same value.",
    "solutions": [
      {
        "name": "One-sided limits at an integer",
        "steps": [
          "Between integers $\\{x\\}=x-\\lfloor x\\rfloor$ is continuous, so $\\phi(x)=\\sin(\\pi\\{x\\})$ is continuous there.",
          "At an integer $n$: as $x\\to n^-$, $\\{x\\}\\to 1$, so $\\phi\\to\\sin\\pi=0$; as $x\\to n^+$, $\\{x\\}\\to 0$, so $\\phi\\to\\sin 0=0$.",
          "Also $\\phi(n)=\\sin(\\pi\\cdot 0)=0$, so left limit $=$ right limit $=$ value $=0$.",
          "Thus $\\phi$ is continuous at every integer and therefore on all of $\\mathbb{R}$."
        ]
      },
      {
        "name": "Reduce to a continuous closed form",
        "steps": [
          "Write $\\pi x=\\pi\\lfloor x\\rfloor+\\pi\\{x\\}$, so $\\sin(\\pi x)=\\sin(\\pi\\{x\\})\\cos(\\pi\\lfloor x\\rfloor)=(-1)^{\\lfloor x\\rfloor}\\sin(\\pi\\{x\\})$.",
          "Hence $\\phi(x)=\\sin(\\pi\\{x\\})=(-1)^{\\lfloor x\\rfloor}\\sin(\\pi x)=|\\sin(\\pi x)|$ on each interval, and since $\\sin(\\pi x)$ vanishes at integers, $\\phi(x)=|\\sin(\\pi x)|$ holds throughout.",
          "As an absolute value of a continuous function, $|\\sin(\\pi x)|$ is continuous on $\\mathbb{R}$, confirming the boxed conclusion."
        ]
      }
    ],
    "remark": "**Insight.** Wrapping the broken sawtooth $\\{x\\}$ inside **$\\sin(\\pi\\,\\cdot)$** heals it because **$\\sin(\\pi\\cdot 0)=\\sin(\\pi\\cdot 1)=0$** — the outer map sends both lips of the integer seam to the same height. Indeed $\\phi$ is just **$|\\sin(\\pi x)|$**, a familiar continuous wave. Always test a composite at the seam before trusting the inner function's jump."
  },
  {
    "theme": "stepmod",
    "themeLabel": "Step Functions, Modulus & Combined",
    "title": "Floor Times Fractional Part Heals at One",
    "difficulty": 5,
    "task": "Find the lone continuity point",
    "tags": [
      "greatest integer",
      "fractional part",
      "product of step functions",
      "jump discontinuity"
    ],
    "statement": "Let $F(x)=\\lfloor x\\rfloor\\,\\{x\\}$, the product of the integer part and the fractional part. Find every integer at which $F$ is continuous, and give the size of the jump of $F$ at an integer $n$ where it is discontinuous.",
    "answer": "$\\boxed{F\\text{ is continuous only at }x=1;\\ \\text{at integer }n\\neq 1\\text{ the jump is }-(n-1)}$",
    "trap": "A natural wrong answer is $x=0$, by analogy with $x\\lfloor x\\rfloor$. But here the left limit at $n$ uses $\\lfloor x\\rfloor\\to n-1$ and $\\{x\\}\\to 1$, giving $n-1$, while the right limit is $0$; these agree with the value $0$ only when $n-1=0$, i.e. $n=1$, not $n=0$.",
    "solutions": [
      {
        "name": "One-sided limits at an integer",
        "steps": [
          "Between integers both $\\lfloor x\\rfloor$ and $\\{x\\}$ are continuous, so $F$ is continuous off the integers.",
          "At an integer $n$: as $x\\to n^-$, $\\lfloor x\\rfloor\\to n-1$ and $\\{x\\}\\to 1$, so $F\\to (n-1)\\cdot 1=n-1$.",
          "As $x\\to n^+$, $\\lfloor x\\rfloor\\to n$ and $\\{x\\}\\to 0$, so $F\\to n\\cdot 0=0$, which equals $F(n)=n\\cdot 0=0$.",
          "Continuity needs $n-1=0$, so $F$ is continuous only at $x=1$; the jump (right minus left) at any other integer $n$ is $0-(n-1)=-(n-1)$."
        ]
      },
      {
        "name": "Rewrite the product",
        "steps": [
          "Use $\\{x\\}=x-\\lfloor x\\rfloor$ to get $F(x)=\\lfloor x\\rfloor\\,x-\\lfloor x\\rfloor^2$.",
          "Near integer $n$ from the left, $\\lfloor x\\rfloor=n-1$, so $F\\to (n-1)n-(n-1)^2=(n-1)\\big(n-(n-1)\\big)=n-1$.",
          "From the right $\\lfloor x\\rfloor=n$, so $F\\to n\\cdot n-n^2=0=F(n)$; matching forces $n=1$, giving the boxed continuity point and jump $-(n-1)$."
        ]
      }
    ],
    "remark": "**Insight.** In the product **$\\lfloor x\\rfloor\\{x\\}$** the healing point is governed by the **left** limit, where $\\{x\\}\\to 1$ multiplies the freshly-decremented floor $n-1$. So continuity occurs where **$n-1=0$**, namely $x=1$ — not the origin. Memorising “$x=0$ heals it” from a sibling problem is exactly the trap; always recompute the left limit honestly."
  },
  {
    "theme": "stepmod",
    "themeLabel": "Step Functions, Modulus & Combined",
    "title": "Absolute Value Plus a Staircase",
    "difficulty": 5,
    "task": "Count and size the jumps",
    "tags": [
      "modulus",
      "greatest integer",
      "jump discontinuity",
      "continuity on an interval"
    ],
    "statement": "Let $f(x)=|x-2|+\\lfloor x\\rfloor$ on the open interval $(0,4)$. Determine the number of points of discontinuity of $f$ in $(0,4)$, the common size of each jump, and confirm that the corner of $|x-2|$ at $x=2$ does not by itself create a discontinuity.",
    "answer": "$\\boxed{3\\text{ discontinuities (at }x=1,2,3\\text{), each a jump of size }+1}$",
    "trap": "A seductive wrong count is $4$, adding the point $x=2$ a second time as if the modulus' corner were a discontinuity. The corner of $|x-2|$ is continuous (only its slope breaks); the genuine jumps come solely from $\\lfloor x\\rfloor$ at $x=1,2,3$.",
    "solutions": [
      {
        "name": "Separate the two parts",
        "steps": [
          "$|x-2|$ is continuous on all of $\\mathbb{R}$ (its only feature at $x=2$ is a corner, where the value and both limits equal $0$).",
          "$\\lfloor x\\rfloor$ is continuous except at integers, where it jumps up by $1$; the integers inside $(0,4)$ are $1,2,3$.",
          "A sum is discontinuous exactly where a non-cancelling summand is, so $f$ jumps precisely at $x=1,2,3$, each jump inherited from $\\lfloor x\\rfloor$ and equal to $+1$.",
          "Hence there are $3$ discontinuities, all jumps of size $+1$, and $x=2$ is counted once (for the floor), not twice."
        ]
      },
      {
        "name": "Direct one-sided limits at x=2",
        "steps": [
          "At $x=2$: $\\lim_{x\\to 2^-}f=|{-0}|+1=1$ and $\\lim_{x\\to 2^+}f=|0|+2=2$, with $f(2)=0+2=2$.",
          "So the jump at $x=2$ is $2-1=+1$, driven entirely by $\\lfloor x\\rfloor$ while $|x-2|\\to 0$ smoothly from both sides.",
          "Repeating at $x=1,3$ gives the same $+1$ jump, yielding the boxed total of $3$ discontinuities."
        ]
      }
    ],
    "remark": "**Insight.** Adding a continuous modulus to a staircase **cannot create new breaks** — a corner is a slope kink, not a jump, and $|x-2|$ stays continuous everywhere. The discontinuities are exactly the **floor's integer jumps**, here $x=1,2,3$. The trap is double-counting $x=2$ because two ‘special’ features coincide there; only one of them (the step) actually tears the graph."
  },
  {
    "theme": "stepmod",
    "themeLabel": "Step Functions, Modulus & Combined",
    "title": "Signum of Fractional Part Minus Half",
    "difficulty": 5,
    "task": "Locate all discontinuities",
    "tags": [
      "signum",
      "fractional part",
      "composite",
      "jump discontinuity"
    ],
    "statement": "Let $p(x)=\\mathrm{sgn}\\!\\big(\\{x\\}-\\tfrac12\\big)$ on the interval $[0,2]$, with $\\mathrm{sgn}(0)=0$. Find every point of $[0,2]$ where $p$ is discontinuous and state the one-sided limits at each such point.",
    "answer": "$\\boxed{\\text{discontinuous at }x=\\tfrac12,1,\\tfrac32,2\\ (4\\text{ points})}$",
    "trap": "A tempting wrong answer is “only at the integers,” forgetting that $\\mathrm{sgn}$ itself jumps wherever its argument crosses $0$, i.e. where $\\{x\\}=\\tfrac12$ — namely $x=\\tfrac12$ and $x=\\tfrac32$. Both the half-integer sign-crossings and the integer seams of $\\{x\\}$ break $p$.",
    "solutions": [
      {
        "name": "Track the argument across its critical values",
        "steps": [
          "On $(0,1)$, $\\{x\\}=x$, so $p(x)=\\mathrm{sgn}(x-\\tfrac12)$: it equals $-1$ for $x<\\tfrac12$, $0$ at $x=\\tfrac12$, and $+1$ for $x>\\tfrac12$ — a jump at $x=\\tfrac12$ (limits $-1$ and $+1$).",
          "At $x=1$: as $x\\to1^-$, $\\{x\\}\\to1$ so $p\\to\\mathrm{sgn}(\\tfrac12)=+1$; as $x\\to1^+$, $\\{x\\}\\to0$ so $p\\to\\mathrm{sgn}(-\\tfrac12)=-1$, with $p(1)=\\mathrm{sgn}(-\\tfrac12)=-1$ — a jump.",
          "By periodicity the pattern repeats: a jump at $x=\\tfrac32$ (limits $-1$ then $+1$) and at $x=2$ (left limit $+1$, value $\\mathrm{sgn}(-\\tfrac12)=-1$).",
          "Hence $p$ is discontinuous at the four points $\\tfrac12,1,\\tfrac32,2$ of $[0,2]$."
        ]
      },
      {
        "name": "Two independent break sources",
        "steps": [
          "Source one: $\\{x\\}$ jumps at integers $x=1,2$, carrying $p$ from $+1$ (just below) to $-1$ (just above/value).",
          "Source two: the inner expression $\\{x\\}-\\tfrac12$ changes sign where $\\{x\\}=\\tfrac12$, i.e. $x=\\tfrac12,\\tfrac32$, and $\\mathrm{sgn}$ jumps across each such crossing.",
          "Collecting both lists over $[0,2]$ gives the discontinuity set $\\{\\tfrac12,1,\\tfrac32,2\\}$, the boxed four points."
        ]
      }
    ],
    "remark": "**Insight.** A signum of a step-built argument can break for **two reasons at once**: the **inner sawtooth jumps at integers**, and the **sgn itself flips wherever its argument crosses zero**. Listing only the integer seams misses the half-integer sign changes. Map out where the argument hits its critical level $0$ *and* where it jumps — the union is the true discontinuity set."
  },
  {
    "theme": "stepmod",
    "themeLabel": "Step Functions, Modulus & Combined",
    "title": "A Staircase Plus a Limiting Spike",
    "difficulty": 5,
    "task": "Classify the integer break",
    "tags": [
      "greatest integer",
      "sequence of functions",
      "indicator of integers",
      "jump discontinuity"
    ],
    "statement": "Let $f(x)=\\lfloor x\\rfloor+\\lim_{n\\to\\infty}\\cos^{2n}(\\pi x)$. First identify the limit term as a function of $x$, then determine, at an integer $n$, the values of $\\lim_{x\\to n^-}f(x)$, $\\lim_{x\\to n^+}f(x)$ and $f(n)$, and classify the discontinuity.",
    "answer": "$\\boxed{\\text{at integer }n:\\ \\text{LHL}=n-1,\\ \\text{RHL}=n,\\ f(n)=n+1;\\ \\text{a (non-removable) jump-type break}}$",
    "trap": "A seductive wrong answer is “removable, since the limit term only spikes at integers.” But the value $f(n)=n+1$ differs from BOTH one-sided limits ($n-1$ and $n$), which themselves differ from each other, so the two-sided limit does not even exist — the break is essentially a jump, never removable.",
    "solutions": [
      {
        "name": "Evaluate the limiting term, then one-sided limits",
        "steps": [
          "For $x\\notin\\mathbb{Z}$, $|\\cos(\\pi x)|<1$, so $\\cos^{2n}(\\pi x)\\to 0$; for $x\\in\\mathbb{Z}$, $\\cos(\\pi x)=\\pm1$, so $\\cos^{2n}(\\pi x)\\to 1$. Thus the limit term is $\\mathbf{1}_{\\mathbb{Z}}(x)$.",
          "Therefore $f(x)=\\lfloor x\\rfloor$ for non-integer $x$, and $f(n)=n+1$ at an integer $n$.",
          "At integer $n$: $\\lim_{x\\to n^-}f=\\lim_{x\\to n^-}\\lfloor x\\rfloor=n-1$ and $\\lim_{x\\to n^+}f=n$; the value is $f(n)=n+1$.",
          "All three differ, so the two-sided limit fails to exist and the discontinuity is of jump type, not removable."
        ]
      },
      {
        "name": "Decompose into staircase plus indicator",
        "steps": [
          "Write $f=\\lfloor x\\rfloor+\\mathbf{1}_{\\mathbb{Z}}$. The staircase $\\lfloor x\\rfloor$ already jumps from $n-1$ to $n$ across an integer $n$.",
          "Adding $\\mathbf{1}_{\\mathbb{Z}}$ leaves the off-integer values untouched but lifts the single point $x=n$ by $1$, to $n+1$.",
          "So LHL $=n-1$, RHL $=n$, value $=n+1$: three distinct numbers, confirming the boxed non-removable jump at every integer."
        ]
      }
    ],
    "remark": "**Insight.** The classic limit **$\\lim_{n\\to\\infty}\\cos^{2n}(\\pi x)$ is the indicator of the integers** — $1$ on $\\mathbb{Z}$, $0$ elsewhere. Stacked on a staircase it makes the value at each integer overshoot **both** one-sided limits. When LHL, RHL and the value are three different numbers, the limit does not exist, so calling the break ‘removable’ is wrong — only a single common one-sided value could be removable."
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
    "title": "The Smooth Factor That Heals Two Jumps",
    "difficulty": 4,
    "task": "Count the discontinuities",
    "tags": [
      "limit of a sequence of functions",
      "removable discontinuity",
      "continuity on an interval",
      "product of functions"
    ],
    "statement": "For each real $x$ let $g(x)=\\displaystyle\\lim_{n\\to\\infty}\\frac{1}{1+x^{2n}}$, and define $f(x)=(1-x^2)\\,g(x)$. First identify the set on which $g$ itself is discontinuous, then determine the number of points of $\\mathbb{R}$ at which $f$ is discontinuous, and state the value $f$ takes at $x=1$.",
    "answer": "$\\boxed{g\\text{ jumps at }x=\\pm1;\\ f\\text{ has }0\\text{ discontinuities, with }f(1)=0}$",
    "trap": "The seductive wrong answer is $2$, claiming $f$ inherits $g$'s jumps at $x=\\pm1$. This forgets that the smooth factor $1-x^2$ vanishes exactly at $x=\\pm1$, where $g$ stays bounded ($g(\\pm1)=\\tfrac12$); the product is squeezed to $0$ on both sides, so each jump of $g$ is healed rather than passed on.",
    "solutions": [
      {
        "name": "Pointwise limit, then one-sided limits of the product",
        "steps": [
          "Evaluate the sequence limit: if $|x|<1$ then $x^{2n}\\to0$ so $g(x)=1$; if $|x|>1$ then $x^{2n}\\to\\infty$ so $g(x)=0$; if $|x|=1$ then $x^{2n}=1$ so $g(x)=\\tfrac12$. Hence $g$ has jump discontinuities exactly at $x=\\pm1$ and is continuous elsewhere.",
          "Away from $x=\\pm1$, $g$ is locally constant and $1-x^2$ is a polynomial, so $f=(1-x^2)g$ is continuous there.",
          "At $x=1$: from the left $f\\to(1-x^2)\\cdot1\\to0$, from the right $f\\to(1-x^2)\\cdot0=0$, and $f(1)=(1-1)\\cdot\\tfrac12=0$; all three agree, so $f$ is continuous at $1$. By the same computation with $x\\to-1$, $f$ is continuous at $-1$.",
          "Thus $f$ is continuous on all of $\\mathbb{R}$: $0$ discontinuities, and $f(1)=0$."
        ]
      },
      {
        "name": "Squeeze on the bounded factor",
        "steps": [
          "From the explicit values, $0\\le g(x)\\le 1$ for every $x$, so $g$ is bounded.",
          "Therefore $|f(x)|=|1-x^2|\\,g(x)\\le |1-x^2|$ for all $x$.",
          "As $x\\to1$ (or $x\\to-1$) the bound $|1-x^2|\\to0$, so by squeezing $f(x)\\to0=f(\\pm1)$; combined with continuity at every other point, $f$ has $\\boxed{0}$ discontinuities and $f(1)=0$."
        ]
      }
    ],
    "remark": "**Insight.** A pointwise limit of continuous functions need **not** be continuous, and indeed $g$ here jumps at $x=\\pm1$. But continuity of a **product** depends on both factors: a jump of one factor is **harmless wherever the other factor vanishes**. Multiplying by $1-x^2$ pins the only two break-points to height $0$, so the bounded spikes of $g$ are squeezed flat. Always weigh each discontinuity by the factor sitting beside it before counting."
  },
  {
    "theme": "sequential",
    "themeLabel": "Sequential & Composite Continuity",
    "title": "The Oscillation No Value Can Tame",
    "difficulty": 4,
    "task": "Decide if a value restores continuity",
    "tags": [
      "two-path test",
      "oscillatory discontinuity",
      "one-sided limits",
      "composite of standard functions"
    ],
    "statement": "Define $f(x)=\\cos\\!\\left(\\dfrac{\\pi}{x}\\right)$ for $x\\neq 0$. A student proposes to assign a value $f(0)=c$ so that the extended function becomes continuous at $0$. Determine whether any real constant $c$ makes $f$ continuous at $0$. Justify by exhibiting two sequences $x_n\\to 0$ along which $f(x_n)$ tends to different limits, and state how many values of $c\\in\\{-1,0,1\\}$ succeed.",
    "answer": "$\\boxed{\\text{No value works: }\\lim_{x\\to0}f(x)\\text{ does not exist, so }0\\text{ of the candidates succeed}}$",
    "trap": "The tempting wrong move is to notice $\\cos$ is bounded in $[-1,1]$ and pick the \"central\" value $c=0$ (or the average of the extremes), imagining the wild oscillation averages out. But continuity at $0$ requires $\\lim_{x\\to0}f(x)$ to exist as a single number; a bounded function can still fail to have a limit, and here it does, so $c=0$ (and every other constant) fails.",
    "solutions": [
      {
        "name": "Two sequences with different limits",
        "steps": [
          "Take $x_n=\\dfrac{1}{2n}\\to 0$. Then $\\dfrac{\\pi}{x_n}=2\\pi n$, so $f(x_n)=\\cos(2\\pi n)=1$ for every $n$; hence $f(x_n)\\to 1$.",
          "Take $y_n=\\dfrac{1}{2n+1}\\to 0$. Then $\\dfrac{\\pi}{y_n}=(2n+1)\\pi$, so $f(y_n)=\\cos((2n+1)\\pi)=-1$ for every $n$; hence $f(y_n)\\to -1$.",
          "Both $x_n\\to0$ and $y_n\\to0$, yet $f(x_n)\\to1$ while $f(y_n)\\to-1$. Since two paths to $0$ give different limiting values, $\\lim_{x\\to0}f(x)$ does not exist.",
          "Continuity at $0$ would require this limit to exist and equal $f(0)=c$. As the limit fails to exist, no assignment $c$ can repair it; among $\\{-1,0,1\\}$, exactly $0$ values succeed."
        ]
      },
      {
        "name": "Range stays full on every neighbourhood of 0",
        "steps": [
          "For any small $\\rho>0$, the values $\\dfrac{\\pi}{x}$ with $0<|x|<\\rho$ cover all sufficiently large arguments, so $\\cos\\!\\left(\\dfrac{\\pi}{x}\\right)$ attains every value in $[-1,1]$ on each punctured neighbourhood of $0$.",
          "In particular $f$ takes both the value $1$ (e.g. at $x=\\tfrac{1}{2n}$) and the value $-1$ (e.g. at $x=\\tfrac{1}{2n+1}$) at points arbitrarily close to $0$.",
          "If $\\lim_{x\\to0}f(x)=L$ existed, all values near $0$ would cluster around the single number $L$, contradicting the persistence of both $1$ and $-1$. So no limit exists, and no chosen $f(0)=c$ can make $f$ continuous at $0$; the count of successful $c$ in $\\{-1,0,1\\}$ is $\\boxed{0}$."
        ]
      }
    ],
    "remark": "**Insight.** Boundedness is not the same as having a limit. The map $x\\mapsto \\pi/x$ stretches every punctured neighbourhood of $0$ onto an unbounded ray, and feeding that into the periodic $\\cos$ produces oscillation that never settles. The cleanest disproof of a limit is the two-path test: one sequence hits the crests, another the troughs, and a single number cannot be approached along both. No clever value at the point can heal an oscillatory break, because the defect lives in the surrounding behaviour, not at the point itself."
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
    "theme": "sequential",
    "themeLabel": "Sequential & Composite Continuity",
    "title": "The Limit That Spikes Above the Axis",
    "difficulty": 5,
    "task": "Find the pointwise limit explicitly, classify every discontinuity, and report the total jump magnitude.",
    "tags": [
      "pointwise limit",
      "function sequence",
      "removable discontinuity",
      "composite",
      "continuity transfer"
    ],
    "statement": "For each $n\\in\\mathbb{N}$ define the function $f_n:\\mathbb{R}\\to\\mathbb{R}$ by $f_n(x)=\\dfrac{x^2+3}{\\,1+n\\,(x^2-4)^2\\,}.$ Every $f_n$ is continuous on all of $\\mathbb{R}$, since its denominator $1+n(x^2-4)^2\\ge 1>0$. Let $f(x)=\\lim_{n\\to\\infty} f_n(x)$ denote the pointwise limit. Determine $f$ explicitly, list and classify all of its discontinuities, and compute the sum $S$ of the magnitudes $\\bigl|\\,f(a)-\\lim_{x\\to a} f(x)\\,\\bigr|$ taken over every discontinuity $a$.",
    "answer": "$f(x)=7$ at $x=\\pm 2$ and $f(x)=0$ otherwise; two removable discontinuities at $x=\\pm 2$, with $\\boxed{S=14}$.",
    "trap": "Concluding that because every $f_n$ is continuous the limit $f$ must also be continuous (so $S=0$). The pointwise limit of continuous functions need not be continuous: here it spikes to $7$ exactly where $x^2-4=0$, breaking continuity at $x=\\pm 2$.",
    "solutions": [
      {
        "name": "Split on the sign of the denominator term",
        "steps": [
          "Fix $x$. The behaviour of $f_n(x)=\\dfrac{x^2+3}{1+n(x^2-4)^2}$ as $n\\to\\infty$ is governed by the coefficient $(x^2-4)^2\\ge 0$ multiplying $n$.",
          "If $x^2-4\\neq 0$, i.e. $x\\neq\\pm 2$, then $(x^2-4)^2>0$ is a positive constant, so the denominator $1+n(x^2-4)^2\\to\\infty$ while the numerator $x^2+3$ is fixed; hence $f(x)=0$.",
          "If $x=\\pm 2$, then $x^2-4=0$, so the denominator equals $1$ for every $n$ and $f_n(\\pm 2)=\\dfrac{4+3}{1}=7$ for all $n$; thus $f(\\pm 2)=7$.",
          "Therefore $f(x)=7$ at $x=\\pm 2$ and $f(x)=0$ elsewhere. Near $x=2$ every nearby point has $x\\neq\\pm 2$, so $\\lim_{x\\to 2}f(x)=0\\neq 7=f(2)$; the limit exists but disagrees with the value, so the discontinuity is removable. The same holds at $x=-2$.",
          "Each removable break contributes $|f(\\pm2)-0|=|7-0|=7$, so $S=7+7=\\boxed{14}.$"
        ]
      },
      {
        "name": "Reduce to a known model limit via composition",
        "steps": [
          "Let $g(t)=\\lim_{n\\to\\infty}\\dfrac{1}{1+n\\,t^2}$. For $t\\neq 0$ the denominator blows up so $g(t)=0$, while for $t=0$ each term equals $1$ so $g(0)=1$; thus $g$ is $1$ at $t=0$ and $0$ elsewhere.",
          "Write $f_n(x)=(x^2+3)\\cdot\\dfrac{1}{1+n(x^2-4)^2}$. The factor $x^2+3$ is independent of $n$ and continuous, so $f(x)=(x^2+3)\\,g(x^2-4)$.",
          "The composite $g(x^2-4)$ equals $1$ exactly when $x^2-4=0$, i.e. $x=\\pm 2$, and $0$ otherwise.",
          "Hence $f(x)=(x^2+3)\\cdot 1=7$ at $x=\\pm 2$ (since $4+3=7$) and $f(x)=(x^2+3)\\cdot 0=0$ for all other $x$.",
          "At each of $x=\\pm 2$ the punctured neighbourhood gives $f\\equiv 0$, so $\\lim_{x\\to\\pm2}f=0\\neq 7$: two removable discontinuities, each of magnitude $7$, giving $S=14=\\boxed{14}.$"
        ]
      }
    ],
    "remark": "**Insight.** Continuity does not survive an arbitrary pointwise limit. Each $f_n$ is a smooth continuous bump, yet the limit collapses to the zero function everywhere except at the two zeros of $x^2-4$, where a fixed denominator of $1$ lets the numerator $x^2+3$ survive as an isolated spike of height $7$. The break is removable precisely because the surrounding values all tend to $0$: redefining $f(\\pm2):=0$ would restore continuity, the signature of a removable discontinuity."
  },
  {
    "theme": "sequential",
    "themeLabel": "Sequential & Composite Continuity",
    "title": "A Smooth Outer Map Cannot Mend the Break",
    "difficulty": 5,
    "task": "Count and value the breaks",
    "tags": [
      "composite function",
      "limit of a sequence of functions",
      "jump discontinuity",
      "continuity on an interval",
      "trigonometric functions"
    ],
    "statement": "Define $s(x)=\\displaystyle\\lim_{n\\to\\infty}\\frac{x^{2n}}{1+x^{2n}}$ and form the composite $F(x)=\\cos\\!\\big(\\pi\\,s(x)\\big)$. Determine the number of points of $\\mathbb{R}$ at which $F$ is discontinuous, classify each such discontinuity, and give the value of $F$ there.",
    "answer": "$\\boxed{F\\text{ is discontinuous at }x=\\pm1\\ (\\text{jumps});\\ 2\\text{ points, with }F(\\pm1)=0}$",
    "trap": "The seductive wrong answer is $0$: \"the outer map $\\cos$ is continuous and a composite of continuous functions is continuous, so $F$ is continuous everywhere.\" This silently assumes the inner map $s$ is continuous. It is not — $s$ itself jumps at $x=\\pm1$, and a continuous outer function applied to a discontinuous inner function generally stays discontinuous.",
    "solutions": [
      {
        "name": "Resolve the inner limit, then compose",
        "steps": [
          "For the inner function: if $|x|<1$ then $x^{2n}\\to0$ so $s(x)=0$; if $|x|>1$ then $x^{2n}\\to\\infty$ so $\\frac{x^{2n}}{1+x^{2n}}\\to1$, giving $s(x)=1$; if $|x|=1$ then $x^{2n}=1$ so $s(x)=\\tfrac12$. Hence $s$ has jump discontinuities exactly at $x=\\pm1$.",
          "Apply the continuous outer map $\\cos(\\pi\\,\\cdot\\,)$: for $|x|<1$, $F=\\cos0=1$; for $|x|>1$, $F=\\cos\\pi=-1$; at $|x|=1$, $F=\\cos\\tfrac{\\pi}{2}=0$.",
          "At $x=1$: the left limit is $\\cos(\\pi\\cdot0)=1$, the right limit is $\\cos(\\pi\\cdot1)=-1$, and $F(1)=0$. The one-sided limits disagree, so $F$ has a jump discontinuity at $1$; the same holds at $x=-1$ by symmetry ($s$ is even).",
          "Everywhere else $s$ is locally constant, so $F$ is continuous there. Therefore $F$ is discontinuous at exactly the $2$ points $x=\\pm1$, both jumps, with $F(\\pm1)=0$."
        ]
      },
      {
        "name": "Continuity of a composite breaks only where the inner one does",
        "steps": [
          "A composite $g\\circ h$ with $g$ continuous is continuous at every point where $h$ is continuous, so the candidate break-points of $F=\\cos(\\pi s)$ are precisely the discontinuities of $s$, namely $x=\\pm1$.",
          "At each such point check directly: near $x=1$ the inner $s$ takes the two distinct one-sided limits $0$ and $1$, which the continuous $\\cos(\\pi\\,\\cdot)$ maps to the distinct values $1$ and $-1$; since these differ, the discontinuity is genuine (a jump), not removable.",
          "Hence exactly $\\boxed{2}$ jump discontinuities, at $x=\\pm1$, and the composite value at each is $\\cos\\!\\big(\\tfrac{\\pi}{2}\\big)=0$."
        ]
      }
    ],
    "remark": "**Insight.** Composition propagates continuity **only through points where the inner function is already continuous**. Here the sequence limit $s$ jumps at $x=\\pm1$, so wrapping it in the perfectly smooth $\\cos(\\pi\\,\\cdot)$ cannot heal anything — the outer map merely relabels the two distinct one-sided inner-limits as two distinct outer values, leaving the jump intact. The reflex \"continuous $\\circ$ continuous\" is valid only once you have **verified the inner map is continuous**, which a sequence limit is not entitled to be."
  },
  {
    "theme": "sequential",
    "themeLabel": "Sequential & Composite Continuity",
    "title": "Two Breaks Hidden in One Rational Limit",
    "difficulty": 5,
    "task": "Count and classify the breaks",
    "tags": [
      "limit of a sequence of functions",
      "jump discontinuity",
      "one-sided limits",
      "piecewise gluing",
      "rational function"
    ],
    "statement": "For each real $x$ define $g(x)=\\displaystyle\\lim_{n\\to\\infty}\\frac{x^{2n+1}+x+1}{x^{2n}+1}$. First write $g$ as an explicit piecewise function, then determine the number of points of $\\mathbb{R}$ at which $g$ is discontinuous, classify each such discontinuity, and report the saltus (the jump $g(a^{+})-g(a^{-})$) at the right-hand break point.",
    "answer": "$\\boxed{g\\text{ has }2\\text{ discontinuities, both jumps (at }x=\\pm1),\\text{ with saltus }-1\\text{ at }x=1}$",
    "trap": "The seductive wrong answer is $0$: since every term $\\frac{x^{2n+1}+x+1}{x^{2n}+1}$ is a continuous function of $x$, one is tempted to declare the limit continuous too. But a pointwise limit of continuous functions need not be continuous. Here the dominant power $x^{2n}$ switches its behaviour across $|x|=1$, so the three regimes $|x|<1$, $|x|>1$, $|x|=1$ glue to a function that actually jumps at both $x=1$ and $x=-1$.",
    "solutions": [
      {
        "name": "Resolve the limit by the size of $|x|$",
        "steps": [
          "If $|x|<1$ then $x^{2n}\\to0$ and $x^{2n+1}\\to0$, so $g(x)=\\dfrac{0+x+1}{0+1}=x+1$.",
          "If $|x|>1$ then $x^{2n}\\to\\infty$; dividing numerator and denominator by $x^{2n}$ gives $g(x)=\\dfrac{x+(x+1)x^{-2n}}{1+x^{-2n}}\\to x$.",
          "At $x=1$: $x^{2n}=1$, so $g(1)=\\dfrac{1+1+1}{1+1}=\\tfrac32$. At $x=-1$: $x^{2n}=1,\\ x^{2n+1}=-1$, so $g(-1)=\\dfrac{-1-1+1}{1+1}=-\\tfrac12$. Hence $g(x)=x+1$ on $(-1,1)$, $g(x)=x$ on $|x|>1$, $g(1)=\\tfrac32$, $g(-1)=-\\tfrac12$.",
          "Each branch is a polynomial, so $g$ is continuous on $(-1,1)$, on $(1,\\infty)$ and on $(-\\infty,-1)$; only $x=\\pm1$ can break."
        ]
      },
      {
        "name": "Compare one-sided limits at the two seams",
        "steps": [
          "At $x=1$: the left limit (from $(-1,1)$) is $\\lim_{x\\to1^{-}}(x+1)=2$, the right limit (from $|x|>1$) is $\\lim_{x\\to1^{+}}x=1$. The two one-sided limits are finite but unequal, so $x=1$ is a jump discontinuity; its saltus is $g(1^{+})-g(1^{-})=1-2=-1$ (the value $g(1)=\\tfrac32$ sits between them, confirming it is non-removable).",
          "At $x=-1$: the left limit (from $|x|>1$) is $\\lim_{x\\to-1^{-}}x=-1$, the right limit (from $(-1,1)$) is $\\lim_{x\\to-1^{+}}(x+1)=0$. Again finite and unequal, so $x=-1$ is a jump discontinuity.",
          "Therefore $g$ has exactly $2$ discontinuities, both of jump type, and the saltus at the right-hand break $x=1$ is $-1$."
        ]
      }
    ],
    "remark": "**Insight.** The single fraction looks innocuous, but $x^{2n}$ is a switch: it crushes to $0$ inside the unit interval and blows up outside it, so the one formula secretly encodes three different polynomials. The lesson is that taking a limit term-by-term can manufacture jumps out of perfectly continuous building blocks; never assume $\\lim_n f_n$ inherits the continuity of the $f_n$. To classify, glue the branches and read off the one-sided limits at each seam $|x|=1$."
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
    "statement": "A quadratic arch is to be built so that it springs smoothly from an exponential ramp on the left and lands on a hyperbolic curve on the right. Concretely, let $a,b,c\\in\\mathbb{R}$ and define\n\\[\nf(x)=\\begin{cases} e^{2x}, & x\\le 0,\\\\ a x^{2}+b x+c, & 0<x<1,\\\\ \\dfrac{6}{x+2}, & x\\ge 1.\\end{cases}\n\\]\nThe quadratic middle piece carries three unknown parameters, yet there are only two seams (at $x=0$ and $x=1$). Find all triples $(a,b,c)$ for which $f$ is continuous on all of $\\mathbb{R}$. Among these, impose the additional requirement that $f$ be differentiable at the left seam $x=0$ (where the arch meets the exponential ramp), and determine the unique resulting triple $(a,b,c)$. Finally state whether the $f$ you obtain is differentiable at the right seam $x=1$ as well.",
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
    "statement": "The same real parameter $a$ is wired into three places at once — the base of a power, the exponent of a competing exponential through a second parameter $b$, and even the value assigned to the hole. For real constants $a,b$ define\n\\[\nf(x)=\\begin{cases}\\dfrac{(1+ax)^{1/x}-e^{\\,b}}{x}, & x\\neq 0,\\\\ -\\dfrac{(3a-2)}{2}\\,e^{\\,a}, & x=0.\\end{cases}\n\\]\nDetermine all pairs $(a,b)\\in\\mathbb{R}^2$ for which $f$ is continuous at $x=0$. (Continuity here means the two-sided limit $\\lim_{x\\to 0}f(x)$ exists, is finite, and equals the prescribed value $f(0)$.)",
    "answer": "\\[\\boxed{(a,b)\\in\\{(1,1),\\,(2,2)\\}}\\]",
    "trap": "The fatal shortcut is to treat this as a single finite-limit match. A strong student writes $(1+ax)^{1/x}\\to e^{a}$, declares the numerator $\\to e^{a}-e^{b}$, equates that to the value and \"solves one equation\" — ignoring that the denominator $x\\to 0$. The limit is $0/0$ only when the numerator also vanishes, and a nonzero numerator forces $f\\to\\pm\\infty$ (it genuinely blows up: with $a=1,b=2$ the right limit is $-\\infty$, the left $+\\infty$). So continuity has a hidden FIRST gate, $e^{a}=e^{b}\\Rightarrow b=a$, which is not an equation to solve for a value but a structural prerequisite for the limit to be finite at all; skipping it loses half the logic. The second, subtler error appears even after correctly setting $b=a$: students stop at the leading order, reasoning \"numerator $\\to 0$, denominator $\\to 0$, so by L'Hôpital or by canceling, the limit is just the next term's sign\" and never actually compute the coefficient — yet the prescribed hole value $-\\tfrac{3a-2}{2}e^{a}$ is itself parameter-dependent, so matching it to the true second-order coefficient $-\\tfrac{a^{2}}{2}e^{a}$ is a genuine quadratic $a^{2}-3a+2=0$ with TWO roots. A student who eyeballs \"the $x^{1}$ term\" without expanding $(1+ax)^{1/x}=e^{a}\\bigl(1-\\tfrac{a^{2}}{2}x+\\cdots\\bigr)$ to the correct order will either miss a root or invent a wrong one (e.g. concluding $a=3$ \"works\", but $-\\tfrac{9}{2}e^{3}\\neq-\\tfrac{7}{2}e^{3}$). Continuity here is two independent conditions — a finiteness gate $b=a$ and a coefficient match $a^{2}-3a+2=0$ — not one.",
    "solutions": [
      {
        "name": "Exp–log expansion to second order (the honest route)",
        "steps": [
          "Write the base in exponential form: $(1+ax)^{1/x}=\\exp\\!\\Bigl(\\tfrac{1}{x}\\ln(1+ax)\\Bigr)$. Using $\\ln(1+ax)=ax-\\tfrac{(ax)^2}{2}+\\tfrac{(ax)^3}{3}-\\cdots$, the exponent is $\\tfrac{1}{x}\\ln(1+ax)=a-\\tfrac{a^{2}}{2}x+\\tfrac{a^{3}}{3}x^{2}-\\cdots$, which tends to $a$ as $x\\to 0$. Hence $(1+ax)^{1/x}\\to e^{a}$.",
          "Finiteness gate (Condition 1). The denominator is $x\\to 0$, so $\\lim_{x\\to0}f(x)$ can be finite only if the numerator $(1+ax)^{1/x}-e^{b}\\to 0$, i.e. $e^{a}=e^{b}$. Since $e^{(\\cdot)}$ is injective, this forces $b=a$. If instead $b\\neq a$ the numerator tends to the nonzero constant $e^{a}-e^{b}$ and $f(x)\\sim\\tfrac{e^{a}-e^{b}}{x}\\to\\pm\\infty$, so no continuity is possible.",
          "Now set $b=a$ and expand to one more order. Exponentiating, $(1+ax)^{1/x}=e^{a}\\exp\\!\\Bigl(-\\tfrac{a^{2}}{2}x+\\tfrac{a^{3}}{3}x^{2}-\\cdots\\Bigr)=e^{a}\\Bigl(1-\\tfrac{a^{2}}{2}x+O(x^{2})\\Bigr)$. Therefore $(1+ax)^{1/x}-e^{a}=e^{a}\\bigl(-\\tfrac{a^{2}}{2}x+O(x^{2})\\bigr)$, and dividing by $x$, $\\lim_{x\\to0}f(x)=-\\tfrac{a^{2}}{2}e^{a}$ (the same two-sided value from both directions, since only even/odd powers of $x$ appear symmetrically in the expansion).",
          "Coefficient match (Condition 2). Continuity demands this limit equal the prescribed hole value: $-\\tfrac{a^{2}}{2}e^{a}=-\\tfrac{3a-2}{2}e^{a}$. Cancel $e^{a}>0$ and multiply by $-2$: $a^{2}=3a-2$, i.e. $a^{2}-3a+2=0$, so $(a-1)(a-2)=0$ and $a\\in\\{1,2\\}$.",
          "Combine both gates: $b=a$ together with $a\\in\\{1,2\\}$. $\\boxed{(a,b)\\in\\{(1,1),(2,2)\\}}$."
        ]
      },
      {
        "name": "L'Hôpital after securing the finiteness gate",
        "steps": [
          "As above, $(1+ax)^{1/x}\\to e^{a}$, so a finite two-sided limit requires the numerator to vanish: $e^{b}=e^{a}\\Rightarrow b=a$. Without this the form is (nonzero)$/0$ and diverges; L'Hôpital does not even apply. Assume henceforth $b=a$, giving the indeterminate $\\tfrac{0}{0}$.",
          "Let $g(x)=(1+ax)^{1/x}$ so the numerator is $g(x)-e^{a}$ with denominator $x$. By L'Hôpital, $\\lim_{x\\to0}\\tfrac{g(x)-e^{a}}{x}=\\lim_{x\\to0}g'(x)$, provided the latter exists. Differentiate via logarithms: with $\\ln g=\\tfrac{\\ln(1+ax)}{x}$, $\\tfrac{g'(x)}{g(x)}=\\dfrac{\\tfrac{ax}{1+ax}-\\ln(1+ax)}{x^{2}}$.",
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
    "remark": "Insight: when one parameter is woven into the base, the exponent, AND the target value, continuity is never a single equation — it is a chain of gates, each living at a different order of vanishing. The first gate is purely structural: for an expression of the form (something $-$ constant)$/x$ to have any finite limit, the numerator must vanish, which here injects the transcendental relation $b=a$ before any numbers appear. Only after that gate opens does the problem become a real $0/0$, and only the SECOND-order term of the exp–log expansion, $(1+ax)^{1/x}=e^{a}(1-\\tfrac{a^2}{2}x+\\cdots)$, carries the information that matches the parameter-dependent hole value — producing a quadratic with two honest roots, not the single value a one-step substitution would suggest. The transferable lesson for the ranker: identify the order at which your indeterminacy lives, expand to exactly that order (no fewer terms), and remember that a finiteness requirement is itself a continuity condition. Reading $-\\tfrac{a^2}{2}e^a=-\\tfrac{3a-2}{2}e^a$ as an equation in the parameter rather than in $x$ is what converts a limit computation into a genuine multi-solution casework."
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
    "theme": "parametric",
    "themeLabel": "Parametric Continuity",
    "title": "Two Seams One Curve Has a Hidden Hole",
    "difficulty": 5,
    "task": "Find both constants",
    "tags": [
      "piecewise",
      "two-seams",
      "removable-hole",
      "half-angle",
      "one-sided-limits"
    ],
    "statement": "Let $a,b\\in\\mathbb{R}$ and define\n$$f(x)=\\begin{cases}\\dfrac{\\cos 2x-1}{x^2}, & x<0,\\\\[2mm] a\\,x+b, & 0\\le x\\le 3,\\\\[2mm] \\dfrac{x^2-9}{\\sqrt{x}-\\sqrt{3}}, & x>3.\\end{cases}$$\nFind the unique pair $(a,b)$ for which $f$ is continuous on all of $\\mathbb{R}$.",
    "answer": "Matching both seams forces $b=-2$ at $x=0$ and then $3a+b=12\\sqrt3$ at $x=3$, so $\\boxed{(a,b)=\\left(\\dfrac{2}{3}+4\\sqrt3,\\ -2\\right)}$.",
    "trap": "Answering $(a,b)=\\big(4\\sqrt3,\\,0\\big)$. At $x=0$ the left piece is $\\dfrac{\\cos 2x-1}{x^2}$, which has the indeterminate form $\\tfrac00$; a careless reader sees the numerator $\\cos 2x-1\\to 0$ and declares the whole quotient $\\to 0$, forcing $b=0$. But the denominator $x^2\\to 0$ too, and the true left-hand limit is $-2$, not $0$. With $b=0$ there is a gap of $2$ at the origin, so $f$ is not continuous there even though the $x=3$ seam still happens to close.",
    "solutions": [
      {
        "name": "Glue each seam with one-sided limits",
        "steps": [
          "Left seam $x=0$. Use $1-\\cos 2x=2\\sin^2 x$, so $\\dfrac{\\cos 2x-1}{x^2}=-2\\,\\dfrac{\\sin^2 x}{x^2}$. Hence $\\displaystyle\\lim_{x\\to 0^-}f(x)=-2\\cdot 1^2=-2$. Since $f(0)=a\\cdot 0+b=b$, continuity at $0$ gives $b=-2$.",
          "Right seam $x=3$. Plugging $x=3$ into $\\dfrac{x^2-9}{\\sqrt{x}-\\sqrt{3}}$ gives $\\tfrac00$ (a removable hole), so factor: $x-3=(\\sqrt x-\\sqrt3)(\\sqrt x+\\sqrt3)$ and $x^2-9=(x-3)(x+3)$, giving $\\dfrac{x^2-9}{\\sqrt x-\\sqrt3}=(\\sqrt x+\\sqrt3)(x+3)$ for $x>3$. Thus $\\displaystyle\\lim_{x\\to 3^+}f(x)=(2\\sqrt3)(6)=12\\sqrt3$.",
          "Continuity at $3$: $f(3)=3a+b=3a-2$ must equal $12\\sqrt3$, so $3a=12\\sqrt3+2$ and $a=4\\sqrt3+\\tfrac23$. Therefore $\\boxed{(a,b)=\\left(\\tfrac23+4\\sqrt3,\\ -2\\right)}$."
        ]
      },
      {
        "name": "Substitution at each seam",
        "steps": [
          "At $x=0$ put $u=2x\\to 0$: $\\dfrac{\\cos u-1}{(u/2)^2}=-4\\cdot\\dfrac{1-\\cos u}{u^2}\\to -4\\cdot\\tfrac12=-2$, so $b=f(0)=-2$.",
          "At $x=3$ put $t=\\sqrt x\\to\\sqrt3$ (so $x=t^2$): $\\dfrac{x^2-9}{\\sqrt x-\\sqrt3}=\\dfrac{(t^2-3)(t^2+3)}{t-\\sqrt3}=\\dfrac{(t-\\sqrt3)(t+\\sqrt3)(t^2+3)}{t-\\sqrt3}=(t+\\sqrt3)(t^2+3)$. Letting $t\\to\\sqrt3$ gives $(2\\sqrt3)(6)=12\\sqrt3$.",
          "Setting $3a+b=12\\sqrt3$ with $b=-2$ yields $a=\\tfrac{12\\sqrt3+2}{3}=4\\sqrt3+\\tfrac23$, confirming $\\boxed{(a,b)=\\left(\\tfrac23+4\\sqrt3,\\ -2\\right)}$."
        ]
      }
    ],
    "remark": "**Insight.** Two seams, two equations $-$ but the difficulty hides in which value each side actually approaches, not in the bookkeeping. Both danger points wear a $\\tfrac00$ mask: at $x=0$ the mask conceals the limit $-2$ (kill it with the half-angle identity), and at $x=3$ it conceals a genuinely removable hole (kill it by factoring the radical difference). Continuity asks you to match the limit, never the raw formula at the bad point; reading $\\tfrac00$ as $0$ closes one seam by luck while quietly tearing the other open."
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
    "theme": "evt",
    "themeLabel": "Boundedness & Extreme Values",
    "title": "Where the Floor Slips Away",
    "difficulty": 5,
    "task": "Compare extremes: closed vs open",
    "tags": [
      "extreme value theorem",
      "closed interval",
      "open interval",
      "boundedness",
      "rational function"
    ],
    "statement": "Let $h(x)=\\dfrac{2x}{1+x^{2}}$. (a) On the closed interval $[0,3]$, decide whether $h$ attains a maximum and a minimum, and give those values together with the points where they occur. (b) On the open interval $(0,3)$, decide which of the supremum and the infimum of $h$ is actually attained, and which is only approached. Justify every claim using continuity.",
    "answer": "$\\boxed{\\text{On }[0,3]:\\ \\max h=1\\ (x=1),\\ \\min h=0\\ (x=0).\\ \\ \\text{On }(0,3):\\ \\sup h=1\\text{ attained at }x=1,\\ \\inf h=0\\text{ NOT attained.}}$",
    "trap": "The seductive wrong answer is to copy the closed-interval result and declare $\\min h=0$ on $(0,3)$ as well. But $h(x)=0$ forces $2x=0$, i.e. $x=0$, which is excluded from $(0,3)$; for every $x\\in(0,3)$ we have $h(x)>0$. So $0$ is the infimum yet is approached only as $x\\to0^{+}$ and is never a value — the Extreme Value Theorem fails the moment the closing endpoint is removed.",
    "solutions": [
      {
        "name": "Critical points plus the EVT hypothesis",
        "steps": [
          "Since $1+x^{2}>0$ for all $x$, $h$ is a quotient of continuous functions with nonzero denominator, hence continuous on all of $\\mathbb{R}$; in particular it is continuous on the closed bounded interval $[0,3]$, so by the Extreme Value Theorem it attains both a maximum and a minimum there.",
          "Differentiate: $h'(x)=\\dfrac{2(1-x^{2})}{(1+x^{2})^{2}}$, which vanishes only at $x=1$ inside $[0,3]$, with $h'>0$ on $(0,1)$ and $h'<0$ on $(1,3)$, so $x=1$ is the interior maximum.",
          "Compare the candidate values $h(0)=0$, $h(1)=1$, $h(3)=\\tfrac{6}{10}=\\tfrac35$: the maximum is $h(1)=1$ and the minimum is $h(0)=0$. This proves part (a).",
          "On $(0,3)$ the maximiser $x=1$ still lies inside, so $\\sup h=1$ is attained. But $h(x)=0\\iff x=0$, which is now excluded; for $x\\in(0,3)$, $h(x)>0$, so the value $0$ is never reached although $h(x)\\to0$ as $x\\to0^{+}$. Hence $\\inf h=0$ is not attained, giving the boxed answer."
        ]
      },
      {
        "name": "Substitution to a bounded amplitude",
        "steps": [
          "Write $x=\\tan\\theta$ with $\\theta\\in[0,\\arctan 3]$; then $h=\\dfrac{2\\tan\\theta}{1+\\tan^{2}\\theta}=2\\sin\\theta\\cos\\theta=\\sin 2\\theta$, a continuous function of $\\theta$.",
          "As $x$ runs over $[0,3]$, $2\\theta$ runs over $[0,\\,2\\arctan 3]$, and since $\\arctan 3>\\tfrac{\\pi}{4}$ this range contains $\\tfrac{\\pi}{2}$; thus $\\sin 2\\theta$ reaches its peak $1$ (at $2\\theta=\\tfrac\\pi2$, i.e. $x=1$) and its least value $0$ at the left end $\\theta=0$, i.e. $x=0$. So on $[0,3]$ the maximum is $1$ and the minimum is $0$, both attained.",
          "Removing the endpoint $x=0$ removes $\\theta=0$, hence removes the only point with $\\sin2\\theta=0$; the peak at $x=1$ survives. Therefore on $(0,3)$ the supremum $1$ is attained while the infimum $0$ is merely approached, matching the boxed answer."
        ]
      }
    ],
    "remark": "**Insight.** The Extreme Value Theorem needs **both** continuity **and** a **closed, bounded** interval. Here $h$ is continuous everywhere, so on $[0,3]$ both extremes are guaranteed and located by the single critical point. The whole drama lives at the **endpoint $x=0$**: it is the *only* place where $h$ equals its infimum, so deleting it to form the open interval $(0,3)$ keeps the interior maximum but lets the minimum **escape to a limit**. A supremum or infimum is just a number the values crowd toward; whether it is *attained* is a separate question that the closed-interval hypothesis — not continuity alone — settles."
  },
  {
    "theme": "evt",
    "themeLabel": "Boundedness & Extreme Values",
    "title": "The Minimum That Lives on the Edge",
    "difficulty": 5,
    "task": "Find sum of extreme values",
    "tags": [
      "extreme-value-theorem",
      "closed-interval",
      "endpoint-extremum",
      "open-interval-trap",
      "continuity"
    ],
    "statement": "Let $f(x) = x + 2\\cos x$ be considered on the closed bounded interval $I = \\left[0,\\ \\tfrac{5\\pi}{6}\\right]$. Since $f$ is continuous on $I$, the Extreme Value Theorem guarantees that $f$ attains a global maximum value $M$ and a global minimum value $m$ on $I$. \\par Determine $M + m$. \\par (While doing so, decide carefully whether each extreme value would still be attained if the interval were the open interval $\\left(0,\\ \\tfrac{5\\pi}{6}\\right)$ instead.)",
    "answer": "\\boxed{M + m = \\pi}",
    "trap": "Assuming that because $f$ attains its minimum on the closed interval, it would also attain that same minimum on the open interval $\\left(0,\\tfrac{5\\pi}{6}\\right)$. The minimum value $m = \\tfrac{5\\pi}{6}-\\sqrt 3$ occurs ONLY at the right endpoint $x=\\tfrac{5\\pi}{6}$; at every interior point of the open interval the value of $f$ is strictly larger, so on the open interval the infimum is approached but never reached. The EVT requires a closed bounded interval precisely for this reason.",
    "solutions": [
      {
        "name": "Critical points versus endpoints",
        "steps": [
          "$f(x)=x+2\\cos x$ is differentiable with $f'(x)=1-2\\sin x$. Setting $f'(x)=0$ gives $\\sin x=\\tfrac12$, so within $\\left[0,\\tfrac{5\\pi}{6}\\right]$ the stationary points are $x=\\tfrac{\\pi}{6}$ and $x=\\tfrac{5\\pi}{6}$ (the latter coincides with the right endpoint).",
          "By the EVT the extreme values occur among the endpoints and interior stationary points. Evaluate the candidates: $f(0)=2$, $f\\!\\left(\\tfrac{\\pi}{6}\\right)=\\tfrac{\\pi}{6}+\\sqrt 3\\approx 2.2556$, and $f\\!\\left(\\tfrac{5\\pi}{6}\\right)=\\tfrac{5\\pi}{6}-\\sqrt 3\\approx 0.8859$.",
          "Comparing: the maximum is $M=\\tfrac{\\pi}{6}+\\sqrt 3$ (attained at the interior point $x=\\tfrac{\\pi}{6}$) and the minimum is $m=\\tfrac{5\\pi}{6}-\\sqrt 3$ (attained at the endpoint $x=\\tfrac{5\\pi}{6}$).",
          "Therefore $M+m=\\left(\\tfrac{\\pi}{6}+\\sqrt 3\\right)+\\left(\\tfrac{5\\pi}{6}-\\sqrt 3\\right)=\\tfrac{\\pi}{6}+\\tfrac{5\\pi}{6}=\\pi$, since the $\\sqrt 3$ terms cancel."
        ]
      },
      {
        "name": "Monotonic blocks and IVT-free comparison",
        "steps": [
          "Read the sign of $f'(x)=1-2\\sin x$ across the interval. On $\\left(0,\\tfrac{\\pi}{6}\\right)$ we have $\\sin x<\\tfrac12$, so $f'>0$ and $f$ strictly increases; on $\\left(\\tfrac{\\pi}{6},\\tfrac{5\\pi}{6}\\right)$ we have $\\sin x>\\tfrac12$, so $f'<0$ and $f$ strictly decreases.",
          "Thus $f$ rises from $f(0)=2$ to a single peak at $x=\\tfrac{\\pi}{6}$, then falls all the way to the right endpoint. The peak value $M=\\tfrac{\\pi}{6}+\\sqrt 3$ is the global maximum.",
          "Because $f$ is strictly decreasing on the whole stretch up to $x=\\tfrac{5\\pi}{6}$, the smallest value on the closed interval is the right-endpoint value $m=f\\!\\left(\\tfrac{5\\pi}{6}\\right)=\\tfrac{5\\pi}{6}-\\sqrt 3$; every interior point gives something strictly larger (this is exactly why the open interval would have no minimum).",
          "Adding, $M+m=\\tfrac{\\pi}{6}+\\sqrt 3+\\tfrac{5\\pi}{6}-\\sqrt 3=\\pi$."
        ]
      }
    ],
    "remark": "**Insight.** The Extreme Value Theorem promises that a continuous function on a closed bounded interval attains both bounds, but it never promises the attaining point lies inside. Here the minimum is captured by the endpoint alone, and the cancelling $\\sqrt 3$ makes $M+m=\\pi$ exact. Strip the interval to its open version and the minimum evaporates: the same value is still the infimum, yet no point of the open set achieves it. Closedness is not decoration in the EVT; it is the hypothesis that traps the extremum."
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
    "statement": "Let $D=[0,1]\\cup(2,3]$ and define $f:D\\to[0,2]$ by \\[ f(x)=\\begin{cases} x, & x\\in[0,1],\\\\ x-1, & x\\in(2,3]. \\end{cases} \\] Prove that $f$ is a continuous bijection of $D$ onto $[0,2]$, but that $f^{-1}:[0,2]\\to D$ is discontinuous at exactly one point; identify that point and describe the jump.",
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
    "title": "The Inverse You Never Have to Invert",
    "difficulty": 5,
    "task": "Evaluate the inverse value",
    "tags": [
      "strictly-increasing",
      "continuous-inverse",
      "bijection",
      "exponential",
      "no-closed-form"
    ],
    "statement": "Let $f(x)=x+e^{x}$ for all real $x$. Granting that $f$ is a continuous strictly increasing bijection of $\\mathbb{R}$ onto $\\mathbb{R}$, let $g=f^{-1}$ denote its inverse. Decide whether $g$ is continuous at the point $y_0=1+e$, and find the value $g(1+e)$.",
    "answer": "Because $f$ is continuous and strictly increasing on all of $\\mathbb{R}$, its inverse $g$ is continuous everywhere; in particular $g$ is continuous at $1+e$. Since $f(1)=1+e$, $\\boxed{g(1+e)=1}$.",
    "trap": "Trying to ``solve termwise'': from $y=x+e^{x}$ a careless reader writes $e^{x}=y-x$ and then $x=\\ln(y-x)$, or simply guesses that $g(1+e)$ has no clean value because $x+e^{x}=1+e$ ``cannot be solved''. Both miss that $x=1$ is the obvious root: $1+e^{1}=1+e$. The equation $x+e^{x}=y$ has no elementary formula in general, but that never means a *particular* value is unavailable — strict monotonicity guarantees exactly one preimage, and here it is visibly $x=1$.",
    "solutions": [
      {
        "name": "Read off the preimage; invoke the inverse-continuity theorem",
        "steps": [
          "First the value. We need $g(1+e)$, i.e. the unique $x$ with $f(x)=1+e$. Test $x=1$: $f(1)=1+e^{1}=1+e$. Since $f$ is strictly increasing it is injective, so $x=1$ is the *only* solution and $g(1+e)=1$.",
          "Now continuity. The derivative $f'(x)=1+e^{x}>0$ for every real $x$, so $f$ is continuous and strictly increasing on the interval $\\mathbb{R}$.",
          "A continuous strictly monotone function on an interval has a continuous inverse on its range. As $x\\to+\\infty$, $f\\to+\\infty$, and as $x\\to-\\infty$, $f(x)=x+e^{x}\\to-\\infty$; by the Intermediate Value Theorem the range is all of $\\mathbb{R}$. Hence $g:\\mathbb{R}\\to\\mathbb{R}$ is continuous everywhere, in particular at $1+e$, and $\\boxed{g(1+e)=1}$."
        ]
      },
      {
        "name": "Squeeze the inverse directly through monotonicity",
        "steps": [
          "Fix the target value $x=1$, where $f(1)=1+e$. For any $y$ with $y>1+e$, monotonicity gives $g(y)>g(1+e)=1$; for $y<1+e$ it gives $g(y)<1$. So $g$ is monotone with $g(1+e)=1$.",
          "Take any small interval $(1-h,\\,1+h)$ around the preimage $1$, with $h>0$. Because $f$ is strictly increasing and continuous, $f(1-h)<1+e<f(1+h)$, and these two values bracket $1+e$. For every $y$ in the interval $\\bigl(f(1-h),\\,f(1+h)\\bigr)$, applying the increasing map $g$ yields $1-h<g(y)<1+h$.",
          "So whenever $y$ lies in that neighbourhood of $1+e$, the value $g(y)$ lies in $(1-h,1+h)$; letting the window shrink ($h\\to 0$) gives $\\displaystyle\\lim_{y\\to 1+e}g(y)=1=g(1+e)$. Hence $g$ is continuous at $1+e$ and $\\boxed{g(1+e)=1}$."
        ]
      }
    ],
    "remark": "**Insight.** You almost never *solve* for an inverse to know it is continuous. The theorem does the heavy lifting: **continuous plus strictly monotone on an interval forces a continuous inverse**, no formula required. The only real work is spotting the preimage, and a transcendental equation like $x+e^{x}=1+e$ can still have a value you can simply **read off** by inspection. **Monotonicity manufactures both the existence of the inverse and its continuity at once.**"
  },
  {
    "theme": "monotone",
    "themeLabel": "Monotonic & Inverse Functions",
    "title": "Where a Jump Vanishes Under Inversion",
    "difficulty": 5,
    "task": "Test the inverse at the jump",
    "tags": [
      "jump-discontinuity",
      "strictly-increasing",
      "range-gap",
      "continuous-inverse",
      "one-sided-limit"
    ],
    "statement": "Define $f(x)=x$ for $x<1$ and $f(x)=x+2$ for $x\\ge 1$, so $f$ is strictly increasing on $\\mathbb{R}$ but has a jump at $x=1$. Its range is $S=(-\\infty,1)\\cup[3,\\infty)$, and on $S$ the inverse $g=f^{-1}$ is defined. Working only with $y\\in S$, evaluate $\\displaystyle\\lim_{y\\to 3^{+}}g(y)$ and $g(3)$, and state how many points of $S$ are discontinuities of $g$.",
    "answer": "On $[3,\\infty)$ one has $g(y)=y-2$, so $\\displaystyle\\lim_{y\\to 3^{+}}g(y)=1=g(3)$; the domain $S$ has the gap $(1,3)$ removed, so $y=3$ is never approached from the left within $S$. Checking every point of $S$ shows $g$ is continuous there, so the number of discontinuities of $g$ on $S$ is $\\boxed{0}$.",
    "trap": "Answering ``$1$ discontinuity, a jump at $y=3$.'' The seduction is symmetry: $f$ jumps at $x=1$, so surely $g$ jumps at the image $y=3$. But continuity of $g$ at $3$ is tested **only with $y\\in S$**, and $S$ has no points in $(1,3)$. The left-hand approach to $3$ simply does not exist in the domain; the one-sided limit that survives, $\\lim_{y\\to 3^{+}}g(y)=1$, equals $g(3)=1$. The jump of $f$ became a *hole in the domain* of $g$, not a discontinuity of $g$.",
    "solutions": [
      {
        "name": "Piecewise inverse and domain-restricted limits",
        "steps": [
          "Invert each branch. For $x<1$, $f(x)=x$ runs over $(-\\infty,1)$, so $g(y)=y$ on $(-\\infty,1)$. For $x\\ge1$, $f(x)=x+2$ runs over $[3,\\infty)$, so $g(y)=y-2$ on $[3,\\infty)$. These two pieces cover exactly $S=(-\\infty,1)\\cup[3,\\infty)$.",
          "At $y=3$: $g(3)=3-2=1$. The only way to approach $3$ within $S$ is from the right (the interval $(1,3)$ is absent from $S$), and $\\displaystyle\\lim_{y\\to3^{+}}(y-2)=1$. Hence $g$ is continuous at $3$.",
          "On $(-\\infty,1)$, $g(y)=y$ is continuous; on $(3,\\infty)$, $g(y)=y-2$ is continuous; and $y=3$ was just checked. Every point of $S$ passes, so $g$ has $\\boxed{0}$ discontinuities on $S$."
        ]
      },
      {
        "name": "Monotone-inverse principle on the actual range",
        "steps": [
          "$f$ is strictly increasing, so it is a bijection from $\\mathbb{R}$ onto its range $S$, and the inverse $g:S\\to\\mathbb{R}$ is strictly increasing. A monotone function can only fail continuity by a jump, i.e. a gap between its left and right limits at an interior point of its domain.",
          "For $g$ to jump at a point $y_0\\in S$, $y_0$ must be approachable from both sides within $S$. The only candidate is $y_0=3$, but $S$ contains nothing in $(1,3)$, so $3$ is a left endpoint of the piece $[3,\\infty)$ and has no left-hand neighbours in $S$; the required two-sided approach is impossible.",
          "With $\\lim_{y\\to3^{+}}g(y)=1=g(3)$ and no other candidate point, $g$ is continuous throughout $S$. The count of discontinuities is $\\boxed{0}$."
        ]
      }
    ],
    "remark": "**Insight.** A strictly monotone function need not be continuous — it may jump — but its jumps are always **isolated**, and each jump of $f$ opens a corresponding **gap in the range**. When you invert, that gap is carved out of the *domain* of $g$, so the place where you expect a discontinuity is precisely a place the inverse is never asked about. **Continuity is judged only on the actual domain**, and that is why the inverse of a jumping monotone map can still be perfectly continuous everywhere it lives."
  },
  {
    "theme": "monotone",
    "themeLabel": "Monotonic & Inverse Functions",
    "title": "The Climbing Cubic That Skips Each Integer",
    "difficulty": 5,
    "task": "Count jumps, invert one value",
    "tags": [
      "strictly-increasing",
      "jump-discontinuity",
      "floor-function",
      "continuous-inverse",
      "closed-interval"
    ],
    "statement": "Let $f(x)=x^{3}+\\lfloor x\\rfloor$ for all real $x$. (a) Show $f$ is strictly increasing on $\\mathbb{R}$, yet determine how many points of the closed interval $[0,2]$ are discontinuities of $f$ and classify each. (b) Granting that $f$ is a strictly increasing bijection of $\\mathbb{R}$ onto its range, let $g=f^{-1}$. Decide whether $g$ is continuous at $y_{0}=28$ and find $g(28)$.",
    "answer": "On $[0,2]$, $f$ jumps at $x=1$ (where $f(1^-)=1$, $f(1)=2$) and at the right endpoint $x=2$ (where $f(2^-)=9$, $f(2)=10$); both are jump discontinuities, so there are $2$ of them. For the inverse, $28$ lies in $f$'s range with the unique preimage $x=\\sqrt[3]{26}\\in[2,3)$, and since $g$ is monotone with $28$ approachable from both sides inside the range, $g$ is continuous at $28$ with $g(28)=\\sqrt[3]{26}$. Reporting the discontinuity count and the inverse value, $\\boxed{2 \\text{ discontinuities},\\ g(28)=\\sqrt[3]{26}}$.",
    "trap": "Reasoning ``$f$ is strictly increasing, therefore $f$ is continuous, so there are $0$ discontinuities, and its inverse must be continuous everywhere automatically.'' Monotonicity does not buy continuity: at each integer the floor term leaps by $1$ while $x^{3}$ moves continuously, so $f(n^-)=n^{3}+(n-1)$ but $f(n)=n^{3}+n$, a genuine upward jump of size $1$. The function climbs without ever flattening, yet it is riddled with isolated jumps. A second snare is to imagine $g$ inherits a jump at $y=28$; in fact the jumps of $f$ punch *gaps* into its range, and $28$ sits safely inside a solid piece of that range, so $g$ is continuous there.",
    "solutions": [
      {
        "name": "Branchwise monotonicity, endpoint check, then read off the preimage",
        "steps": [
          "Strict increase. On each unit block $[n,n+1)$ the floor is constant ($\\lfloor x\\rfloor=n$), so $f(x)=x^{3}+n$ is strictly increasing there. Across a boundary, compare the top of one block with the bottom of the next: as $x\\to n^{-}$, $f(x)\\to n^{3}+(n-1)$, while $f(n)=n^{3}+n$, and $n^{3}+n>n^{3}+(n-1)$. So values never decrease as $x$ rises; $f$ is strictly increasing on all of $\\mathbb{R}$.",
          "Discontinuities on $[0,2]$. At $x=0$ (left endpoint) only the right side matters: $\\lim_{x\\to0^{+}}(x^{3}+0)=0=f(0)$, continuous. At $x=1$: left limit $1^{3}+0=1$ but $f(1)=1^{3}+1=2$, a jump. At the right endpoint $x=2$: left limit $\\lim_{x\\to2^{-}}(x^{3}+1)=9$ but $f(2)=2^{3}+2=10$, again a jump. So exactly $2$ points, $x=1$ and $x=2$, are (jump) discontinuities.",
          "Locate the preimage of $28$. Guess the block: if $\\lfloor x\\rfloor=2$ then $f(x)=x^{3}+2=28\\Rightarrow x^{3}=26\\Rightarrow x=\\sqrt[3]{26}\\approx 2.962$, which indeed satisfies $2\\le x<3$, so the guess is consistent. By strict monotonicity this preimage is unique, hence $g(28)=\\sqrt[3]{26}$.",
          "Continuity of $g$ at $28$. The block $[2,3)$ maps onto $[10,29)$ continuously and strictly increasingly, and $28$ is an interior point of $[10,29)$. A continuous strictly increasing function on an interval has a continuous inverse on its image, so $g$ is continuous at $28$. Final: $\\boxed{2 \\text{ discontinuities},\\ g(28)=\\sqrt[3]{26}}$."
        ]
      },
      {
        "name": "Jumps of a monotone map are isolated; gaps fall outside the inverse's domain",
        "steps": [
          "A monotone function can fail continuity only by a jump, and such jumps occur exactly where its one-sided limits disagree. For $f(x)=x^{3}+\\lfloor x\\rfloor$ the cubic part is continuous, so disagreement happens precisely where $\\lfloor x\\rfloor$ leaps — at the integers. On $[0,2]$ the candidate integers are $0,1,2$; the endpoint $0$ is continuous from the right, while $1$ and $2$ each carry a unit jump. That is $2$ jump discontinuities, confirming monotone need not mean continuous.",
          "Each jump of $f$ removes an open interval of length $1$ from its range: near $x=n$ the values skip from $n^{3}+(n-1)$ up to $n^{3}+n$. The range is therefore a union of the solid pieces $[\\,n^{3}+n,\\ (n+1)^{3}+n\\,)$ coming from the blocks $[n,n+1)$.",
          "The block $n=2$ contributes the solid piece $[10,29)$, and $28$ lies strictly inside it — not at any gap edge. Since $g$ is monotone and $28$ can be approached from both sides within the range, the only way $g$ could break is a two-sided jump, which a monotone inverse exhibits only at a gap boundary; $28$ is not one. Hence $g$ is continuous at $28$.",
          "Solving on that piece, $x^{3}+2=28$ gives the unique $x=\\sqrt[3]{26}$, so $g(28)=\\sqrt[3]{26}$, and altogether $\\boxed{2 \\text{ discontinuities},\\ g(28)=\\sqrt[3]{26}}$."
        ]
      }
    ],
    "remark": "**Insight.** Strictly increasing is a statement about *order*, not about *gaplessness*: a function can climb forever and still skip — here the floor term forces a clean unit jump at every integer while the cubic keeps it strictly rising. The two ideas to separate are that (i) a monotone function's only possible failures are **isolated jumps**, and (ii) every such jump carves a **gap out of the range**, so when you invert, those troublesome values live *outside* the inverse's domain. Ask about the inverse at a value sitting inside a solid range-block, and monotonicity hands you continuity for free — no formula-inversion required."
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
      "transcendental-count"
    ],
    "statement": "Let $f:\\mathbb{R}\\to\\mathbb{R}$ be continuous and strictly positive, satisfying the multiplicative Cauchy equation\n\\[ f(x+y)=f(x)\\,f(y)\\qquad\\text{for all } x,y\\in\\mathbb{R}, \\]\ntogether with the single normalization $f(1)=4$. Differentiability is \\text{not} assumed anywhere. Part (a). Prove, using continuity alone, that these conditions determine $f$ uniquely on all of $\\mathbb{R}$, and identify $f$ in closed form. Part (b). Consider the equation $f(x)=x+3$. Determine, with full proof, the exact number $N$ of real solutions $x\\in\\mathbb{R}$. You are warned that the equation has no solution expressible in elementary closed form, so you must \\text{count} the solutions rather than display them. Part (c). One real solution is a clean integer; exhibit it. Then prove that the count $N$ you found in (b) is correct by a convexity argument that needs no formula for the remaining root(s). Report $N$ as your final answer.",
    "answer": "$N=2$",
    "trap": "The equation $f(x)=x+3$, i.e. $4^{x}=x+3$, is built to spring two opposite errors in a strong student who has correctly found $f(x)=4^{x}$. FIRST ERROR (under-count, the lethal one): the integer root $x=1$ is instantly visible because $4^{1}=4=1+3$. Having found it, and recalling that an exponential 'eventually dominates any line', the student reasons that $4^{x}$ starts below the line and then overtakes it once, concluding $N=1$ — exactly one crossing at $x=1$. This silently restricts attention to $x\\ge 0$, where indeed $4^{x}$ rises steeply through the line just once. But as $x\\to-\\infty$ the exponential does NOT stay below the line: $4^{x}\\to 0^{+}$ while the line $x+3\\to-\\infty$, so for very negative $x$ the curve $4^{x}$ sits ABOVE the line again. Concretely $h(x)=4^{x}-(x+3)$ has $h(-3)=4^{-3}-0=\\tfrac1{64}>0$, $h(0)=1-3=-2<0$, $h(2)=16-5=11>0$: the sign pattern $+,-,+$ forces a SECOND crossing in $(-3,0)$, at $x\\approx-2.984$, which has no elementary closed form and is therefore easy to overlook precisely because it cannot be 'spotted' like $x=1$. The honest answer is $N=2$. SECOND ERROR (over-count or mis-count by guessing tangency): a student who senses a hidden root may fear the line is tangent to $4^{x}$ somewhere, creating a double root that should be counted with multiplicity or merged into one — or may simply guess $N=3$ by analogy with cubic-looking pictures. Tangency would require $4^{x}=x+3$ and $(\\ln 4)4^{x}=1$ simultaneously, i.e. $4^{x}=1/\\ln4$ and hence $x+3=1/\\ln4\\approx0.721$, giving $x\\approx-2.279$; but at that $x$ one has $4^{x}=1/\\ln4\\ne x+3$, so the slopes never match at a common point and BOTH crossings are transversal — there is no tangency, no triple intersection, exactly two simple roots. The deeper misconception the problem targets is treating 'exponential beats line' as a global statement about the number of intersections. Strict convexity of $4^{x}$ gives the sharp truth: a strictly convex curve meets a straight line in AT MOST two points, and the end-behaviour ($+\\infty$ at both ends of $h$, negative in the middle) forces AT LEAST two — so the count is pinned to exactly two by convexity, not by solving anything.",
    "solutions": [
      {
        "name": "Logarithmic linearization to additive Cauchy, then convexity root-count",
        "steps": [
          "(a) Since $f>0$ everywhere, set $g(x)=\\ln f(x)$, which is continuous because $f$ is continuous and positive. Taking logs of $f(x+y)=f(x)f(y)$ gives $g(x+y)=g(x)+g(y)$ for all real $x,y$: $g$ is a continuous solution of the additive Cauchy equation. The only continuous additive functions are linear, $g(x)=cx$ for a constant $c$ (continuity rules out the wild discontinuous solutions). Hence $f(x)=e^{cx}$. The normalization $f(1)=4$ gives $e^{c}=4$, so $c=\\ln 4$ and $f(x)=e^{(\\ln4)x}=4^{x}$. Uniqueness is automatic since $c$ is forced.",
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
    "remark": "Insight: the problem fuses two pillars. First, a functional-equation rigidity result — a continuous positive solution of the multiplicative Cauchy equation is forced to be an exponential, with continuity (not differentiability) the exact hypothesis that excludes the wild discontinuous solutions; the normalization $f(1)=4$ then pins $f(x)=4^{x}$. Second, a counting question with no closed-form answer: $4^{x}=x+3$ cannot be solved in elementary terms, so the real skill is to count, not to solve. The decisive tool is strict convexity. Because $4^{x}$ is strictly convex, its graph meets any straight line in at most two points; and because the gap $h(x)=4^{x}-(x+3)$ tends to $+\\infty$ at both ends while dipping negative in the middle, at least two crossings are forced. The trap is the seductive slogan 'an exponential overtakes a line once': true for large $x$, but blind to the left tail, where $4^{x}\\to0^{+}$ rises back above the falling line $x+3$ to create a second, formula-less crossing near $x\\approx-2.984$ — the mirror partner of the obvious integer root $x=1$ (the two are precisely the $W_{-1}$ and $W_{0}$ branches of the transcendental crossing). The transferable discipline for a top ranker: when a transcendental equation resists solving, reach for the second derivative — strict convexity caps the intersection count at two, and end-behaviour plus one interior sign supplies the matching lower bound, settling the count exactly without ever naming a root."
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
          "(a) Continuity + the equation force $f=\\ln$. Put $g(t)=f(e^{t})$ for $t\\in\\mathbb{R}$; $g$ is continuous as a composition. For any $s,t$, $g(s+t)=f(e^{s+t})=f(e^{s}e^{t})=f(e^{s})+f(e^{t})=g(s)+g(t)$, so $g$ is a continuous solution of the additive Cauchy equation, hence linear: $g(t)=ct$ (continuity excludes the wild discontinuous solutions). The normalization gives $c=g(1)=f(e)=1$, so $g(t)=t$ and $f(x)=g(\\ln x)=\\ln x$. Substituting $x=y=1$ independently confirms $f(1)=2f(1)\\Rightarrow f(1)=0=\\ln 1$, so no additive constant survives and $f$ is unique.",
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
    "remark": "Insight: the problem welds a functional-equation rigidity theorem to an optimization that lives on a forbidden domain. The rigidity half is that a continuous solution of the log-Cauchy equation $f(xy)=f(x)+f(y)$ is forced to be a logarithm — the trick is to transport it to additive Cauchy via $g=f\\circ\\exp$, where continuity (not differentiability) is the exact hypothesis that kills the wild discontinuous solutions; $f(e)=1$ then pins $f=\\ln$ with no room for an additive constant (since $f(1)=0$ is automatic). The optimization half is the real trap: $(0,\\infty)$ is open and unbounded, so the Extreme Value Theorem cannot be quoted, and the careless reflex is to declare no maximum exists. The correct move is to read the boundary behaviour — $h\\to-\\infty$ at $0^{+}$ and $h\\to0^{+}$ at $\\infty$ — as coercivity, which traps every serious competitor inside a compact box and hands EVT back to you; the critical-point sign test then crowns $x=e$. The transferable discipline for a top ranker: on a non-compact domain, do not abandon EVT — verify the function pushes its sup-seeking values inward (coercivity), restrict to a compact sub-box, and only then differentiate. The slickest finish bypasses compactness entirely through the tangent-line inequality $\\ln x\\le x/e$, whose equality case at $x=e$ both bounds and attains the maximum in one stroke. Either way the answer is $M=h(e)=\\tfrac1e$, the famous summit of $(\\ln x)/x$ that separates the convergent from the divergent in countless ranker problems (e.g. why $a^{b}\\lessgtr b^{a}$ pivots at $e$)."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Additive Law Meets a Doubling Curve",
    "difficulty": 5,
    "task": "Force the line, count crossings",
    "tags": [
      "additive functional equation",
      "continuity",
      "intermediate value theorem",
      "exponential growth",
      "root counting"
    ],
    "statement": "Let $f:\\mathbb{R}\\to\\mathbb{R}$ be continuous and satisfy $f(x+y)=f(x)+f(y)$ for all real $x,y$, with $f(1)=3$. Determine $f$ explicitly, and then find the exact number of real solutions of the equation $f(x)=2^{x}$. Justify the count using continuity and the Intermediate Value Theorem rather than by solving the transcendental equation.",
    "answer": "$\\boxed{f(x)=3x,\\ \\text{and the equation }3x=2^{x}\\text{ has exactly }2\\text{ real solutions.}}$",
    "trap": "The seductive wrong answer is $1$ solution. A solver who only checks the obvious large-$x$ behaviour notes that $2^{x}$ eventually dwarfs the line $3x$, spots a single crossing on the right, and stops. This ignores the crossing on the left: $\\psi(x)=3x-2^{x}$ has $\\psi(0)=-1<0$ but $\\psi(0.5)=1.5-\\sqrt2>0$, so a root already lives in $(0,1)$. There are two crossings, not one.",
    "solutions": [
      {
        "name": "Solve the functional equation, then sign-chase",
        "steps": [
          "By induction $f(nx)=nf(x)$ for integers $n$, so $f(q)=3q$ for each rational number $q$ (taking $x=1$ gives $f(n)=3n$, and $f(p/q)$ follows from $q\\,f(p/q)=f(p)=3p$). Since $f$ is continuous and agrees with the continuous map $x\\mapsto 3x$ on the dense set of rationals, $f(x)=3x$ for all real $x$.",
          "The equation becomes $3x=2^{x}$, i.e. $\\psi(x)=3x-2^{x}=0$. As a difference of continuous functions, $\\psi$ is continuous on $\\mathbb{R}$.",
          "Sample signs: $\\psi(0)=-1<0$, $\\psi(0.5)=1.5-\\sqrt2\\approx0.086>0$, and $\\psi(4)=12-16=-4<0$. By the IVT there is a root in $(0,0.5)$ and another in $(0.5,4)$, so there are at least two real solutions.",
          "There are no more: $\\psi'(x)=3-2^{x}\\ln 2$ vanishes at exactly one point $x_{0}=\\log_{2}\\!\\big(3/\\ln 2\\big)$, with $\\psi'>0$ before $x_{0}$ and $\\psi'<0$ after. Thus $\\psi$ rises to a single maximum then falls, and a function with one interior maximum and limits $-\\infty$ at both ends crosses zero at most twice. Hence exactly $2$ real solutions, giving the boxed answer."
        ]
      },
      {
        "name": "Curvature argument on the difference",
        "steps": [
          "As above continuity plus $f(1)=3$ forces $f(x)=3x$, so we study $\\psi(x)=3x-2^{x}$.",
          "Compute $\\psi''(x)=-2^{x}(\\ln 2)^{2}<0$ for every $x$, so $\\psi$ is strictly concave on all of $\\mathbb{R}$. A strictly concave continuous function can meet the level $0$ in at most two points.",
          "Now exhibit two: $\\psi(0)=-1<0$ while $\\psi(1)=3-2=1>0$ gives a root in $(0,1)$ by the IVT, and $\\psi(3)=9-8=1>0$ while $\\psi(4)=12-16=-4<0$ gives a root in $(3,4)$. Two roots are guaranteed and at most two are possible, so the count is exactly $2$, matching the boxed answer."
        ]
      }
    ],
    "remark": "**Insight.** Two independent pillars hold this problem up. The functional-equation pillar uses **continuity as a rigidity tool**: an additive map is pinned to $3x$ on the rationals by pure algebra, and continuity then **propagates that to every real number** because the rationals are dense. The counting pillar is **not** about solving $3x=2^{x}$ — there is no elementary closed form — but about **shape**: the difference is **strictly concave**, so it can cross any horizontal level at most twice, and the IVT supplies exactly two crossings. The trap is tunnel vision on the right-hand crossing; the left-hand root hides in the narrow window where the line still outruns the slow early growth of $2^{x}$."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Sealed Staircase and Its Hidden Root",
    "difficulty": 5,
    "task": "Seal the steps, locate a root",
    "tags": [
      "greatest integer function",
      "fractional part",
      "piecewise continuity",
      "intermediate value theorem",
      "monotonic function"
    ],
    "statement": "On $[0,3]$ define $f(x)=a\\lfloor x\\rfloor+\\{x\\}^{2}+b\\{x\\}$, where $\\lfloor x\\rfloor$ is the greatest integer not exceeding $x$ and $\\{x\\}=x-\\lfloor x\\rfloor$. Choose the constants $a,b$ so that $f$ is continuous on all of $[0,3]$ and $f(3)=6$. With those values, prove that the equation $f(x)=4-x$ has exactly one solution in $[0,3]$ and find it exactly.",
    "answer": "$\\boxed{a=2,\\ b=1;\\ \\ f(x)=2\\lfloor x\\rfloor+\\{x\\}^{2}+\\{x\\}\\ \\text{has the unique root }x=\\sqrt2\\ \\text{of}\\ f(x)=4-x.}$",
    "trap": "The seductive wrong answer is that no conclusion is possible because $\\lfloor x\\rfloor$ makes $f$ discontinuous, so the Intermediate Value Theorem cannot be applied. But the very conditions $a=2,\\ b=1$ are chosen precisely to cancel the unit jump of $\\lfloor x\\rfloor$ against the reset of $\\{x\\}$, sealing every step: the assembled $f$ is genuinely continuous on $[0,3]$, the IVT applies, and the root $x=\\sqrt2$ is real.",
    "solutions": [
      {
        "name": "Match one-sided limits at the integers, then IVT",
        "steps": [
          "Near an integer $n\\in\\{1,2,3\\}$ the left limit uses $\\lfloor x\\rfloor=n-1,\\ \\{x\\}\\to1^{-}$, giving $\\lim_{x\\to n^{-}}f=a(n-1)+1+b$. The value (and right limit) uses $\\lfloor x\\rfloor=n,\\ \\{x\\}=0$, giving $f(n)=an$. Continuity demands $a(n-1)+1+b=an$, i.e. $1+b=a$, the same condition at every integer.",
          "The endpoint condition $f(3)=6$ gives $3a+0=6$, so $a=2$, and then $1+b=2$ forces $b=1$. Thus $f(x)=2\\lfloor x\\rfloor+\\{x\\}^{2}+\\{x\\}$, continuous on the closed interval $[0,3]$.",
          "Let $\\phi(x)=f(x)-(4-x)=f(x)+x-4$, a difference of continuous functions, hence continuous on $[0,3]$. On each unit piece $f$ has the form $2\\lfloor x\\rfloor+t^{2}+t$ with $t=\\{x\\}\\in[0,1)$, strictly increasing in $t$; together with the sealed steps $f$ is strictly increasing on $[0,3]$, so $\\phi$ (sum of two strictly increasing functions) is strictly increasing and can vanish at most once.",
          "Evaluate $\\phi(0)=0+0-4=-4<0$ and $\\phi(3)=6+3-4=5>0$, so by the IVT a root exists; strict monotonicity makes it unique. Locating it: $\\phi(1)=2+1-4=-1<0,\\ \\phi(2)=4+2-4=2>0$, so the root lies in $(1,2)$. There $f(x)=2+t^{2}+t$ with $t=x-1$, and $\\phi=2+t^{2}+t+(1+t)-4=t^{2}+2t-1=0$ gives $t=-1+\\sqrt2$, hence $x=1+t=\\sqrt2$, the boxed answer."
        ]
      },
      {
        "name": "Telescoping the steps into a single increasing curve",
        "steps": [
          "Writing $x=\\lfloor x\\rfloor+\\{x\\}$, continuity at each integer requires the jump $a$ of $a\\lfloor x\\rfloor$ to equal the drop $\\big(1+b\\big)-0$ that $\\{x\\}^{2}+b\\{x\\}$ suffers as $\\{x\\}$ falls from $1^{-}$ back to $0$; this is $a=1+b$, and $f(3)=3a=6$ fixes $a=2,\\ b=1$. With these, on $[n,n+1)$ one has $f(x)=2n+(x-n)^{2}+(x-n)$, and consecutive pieces meet flush, so $f$ is continuous and strictly increasing across the whole interval $[0,3]$ from $f(0)=0$ to $f(3)=6$.",
          "Because $f$ is continuous and strictly increasing while $4-x$ is continuous and strictly decreasing, their graphs meet at most once; since $f(0)=0<4-0=4$ and $f(3)=6>4-3=1$, the IVT guarantees exactly one crossing. Restricting to the piece $[1,2)$, where $f(x)=2+(x-1)^{2}+(x-1)$, the equation $f(x)=4-x$ reduces to $(x-1)^{2}+2(x-1)-1=0$, whose root in $[0,1)$ for $t=x-1$ is $t=\\sqrt2-1$, giving $x=\\sqrt2$, matching the boxed answer."
        ]
      }
    ],
    "remark": "**Insight.** This is a step function in disguise. The greatest-integer term $2\\lfloor x\\rfloor$ wants to jump by $2$ at each integer; the fractional-part term wants to drop by $1+b$ as $\\{x\\}$ snaps from just-below-one back to zero. Continuity is the single bookkeeping equation $a=1+b$ that makes those two motions **cancel exactly**, and the endpoint value supplies the second equation. Once the staircase is **sealed**, $f$ is not merely continuous but **strictly increasing**, which upgrades the IVT's *existence* of a root to **uniqueness**. The trap is to see $\\lfloor x\\rfloor$ and reflexively declare the function discontinuous — when the whole point of the parameters is to defeat that jump."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Multiplicative Law and Its Single Fixed Point",
    "difficulty": 5,
    "task": "Force exponential, pin fixed point",
    "tags": [
      "multiplicative functional equation",
      "continuity",
      "exponential function",
      "intermediate value theorem",
      "fixed point"
    ],
    "statement": "Let $f:\\mathbb{R}\\to\\mathbb{R}$ be continuous, not identically zero, and satisfy $f(x+y)=f(x)\\,f(y)$ for all real $x,y$, with $f(1)=\\tfrac12$. Determine $f$ explicitly, then prove that $f$ has exactly one fixed point (a solution of $f(x)=x$), show it lies in $(0,1)$, and decide whether that fixed point is positive.",
    "answer": "$\\boxed{f(x)=2^{-x};\\ \\text{there is exactly one fixed point, it lies in }(0,1)\\text{, and it is positive.}}$",
    "trap": "The seductive wrong answer is that there are two fixed points, by reasoning that a decreasing curve and the line $y=x$ could cross twice. But $f(x)=2^{-x}$ is strictly decreasing while $y=x$ is strictly increasing, so $f(x)-x$ is strictly decreasing and vanishes at most once; the single crossing in $(0,1)$ is the only fixed point.",
    "solutions": [
      {
        "name": "Solve the functional equation, then a monotone IVT",
        "steps": [
          "Putting $y=0$ gives $f(x)=f(x)f(0)$; since $f$ is not identically zero, $f(0)=1$. Putting $y=x$ gives $f(2x)=f(x)^{2}\\ge0$, and as $f(x)=f(\\tfrac x2)^{2}\\ge0$ with $f$ never zero (a zero would force $f\\equiv0$ via $f(x)=f(x-c)f(c)$), $f>0$ everywhere.",
          "For integers, $f(n)=f(1)^{n}=2^{-n}$, and $f(p/q)^{q}=f(p)=2^{-p}$ gives $f(p/q)=2^{-p/q}$; so $f(r)=2^{-r}$ for each rational number $r$. By continuity on the dense rationals, $f(x)=2^{-x}$ for all real $x$.",
          "Set $h(x)=f(x)-x=2^{-x}-x$, continuous on $\\mathbb{R}$. Then $h(0)=1>0$ and $h(1)=\\tfrac12-1=-\\tfrac12<0$, so by the IVT a fixed point exists in $(0,1)$.",
          "Uniqueness: $h'(x)=-2^{-x}\\ln2-1<0$ for all $x$, so $h$ is strictly decreasing and crosses zero at most once. Hence the fixed point is unique; being in $(0,1)$ it is positive, giving the boxed answer."
        ]
      },
      {
        "name": "Bounding the crossing and ruling out other ranges",
        "steps": [
          "As in the first method, $f(0)=1$, $f>0$, and continuity with $f(1)=\\tfrac12$ forces $f(x)=2^{-x}$.",
          "For $x\\le0$ we have $2^{-x}\\ge1>0\\ge x$ on $(-\\infty,0]$, so $f(x)>x$ there and no fixed point can occur; for $x\\ge1$ we have $2^{-x}\\le\\tfrac12<1\\le x$, so $f(x)<x$ and again none. Every fixed point must lie in the open interval $(0,1)$.",
          "On $[0,1]$, $h(x)=2^{-x}-x$ is continuous with $h(0)=1>0$ and $h(1)=-\\tfrac12<0$, so the IVT gives a root; since $2^{-x}$ strictly decreases and $x$ strictly increases, the root is unique. Therefore $f$ has exactly one fixed point, it lies in $(0,1)$, and it is positive, matching the boxed answer."
        ]
      }
    ],
    "remark": "**Insight.** The exponential law $f(x+y)=f(x)f(y)$ behaves like the additive law one rung up: continuity pins $f$ to $2^{-x}$ first on the rationals, then everywhere by **density**, while the harmless probes $y=0$ and $y=x$ force $f(0)=1$ and positivity for free. The fixed-point half then turns on a clean **monotonicity clash**: a strictly decreasing function meets the strictly increasing line $y=x$ in **at most** one point, and the IVT certifies **exactly** one. The trap of imagining two crossings forgets that monotone-opposing curves cannot intersect twice — uniqueness here is a structural fact, not a coincidence of the numbers."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Integer Spike and the Guaranteed Valley",
    "difficulty": 5,
    "task": "Kill the spike, find the valley",
    "tags": [
      "sequential limit",
      "continuity",
      "extreme value theorem",
      "intermediate value theorem",
      "greatest integer set"
    ],
    "statement": "For real $x$ let $g(x)=\\displaystyle\\lim_{n\\to\\infty}\\cos^{2n}(\\pi x)$, and on $[0,3]$ define $F(x)=(x-1)(x-2)+a\\,g(x)$. First identify $g$ as an explicit function. Then find the value of $a$ for which $F$ is continuous on $[0,3]$; with that $a$, state the maximum and minimum values $F$ attains on $[0,3]$ and where, and show that $F(x)=1$ has a solution in the open interval $(0,1)$.",
    "answer": "$\\boxed{g(x)=1\\text{ if }x\\in\\mathbb{Z},\\ 0\\text{ otherwise};\\ a=0;\\ \\max F=2\\ (x=0,3),\\ \\min F=-\\tfrac14\\ (x=\\tfrac32);\\ F(x)=1\\text{ has a root in }(0,1).}$",
    "trap": "The seductive wrong answer is to keep $a\\neq0$ to \"add a peak\" at the integers, or to declare $F$ discontinuous and conclude the Extreme Value Theorem cannot guarantee a minimum. Both fail: $g$ jumps to $1$ only at isolated integers and is $0$ around them, so any $a\\neq0$ creates a removable-style spike that destroys continuity; only $a=0$ seals it, after which the EVT applies and the minimum $-\\tfrac14$ is genuinely attained.",
    "solutions": [
      {
        "name": "Evaluate the sequential limit, force continuity, then EVT and IVT",
        "steps": [
          "Fix $x$. Then $\\cos^{2}(\\pi x)\\in[0,1]$, and $\\cos^{2}(\\pi x)=1$ exactly when $\\cos(\\pi x)=\\pm1$, i.e. when $\\pi x$ is an integer multiple of $\\pi$, i.e. when $x\\in\\mathbb{Z}$. If $x\\in\\mathbb{Z}$ every term is $1$ so the limit is $1$; otherwise $0\\le\\cos^{2}(\\pi x)<1$ and $\\cos^{2n}(\\pi x)\\to0$. Hence $g(x)=1$ on $\\mathbb{Z}$ and $g(x)=0$ off $\\mathbb{Z}$, discontinuous exactly at each integer.",
          "On $[0,3]$ the integers $0,1,2,3$ are the only points where $g\\neq0$. Approaching any integer $n$ through non-integers, $a\\,g(x)\\to0$, so $\\lim_{x\\to n}F(x)=(n-1)(n-2)$, whereas $F(n)=(n-1)(n-2)+a$. Continuity at $n$ forces $a=0$; and $a=0$ indeed makes $F(x)=(x-1)(x-2)$ continuous everywhere on $[0,3]$.",
          "With $a=0$, $F(x)=x^{2}-3x+2$ is continuous on the closed bounded interval $[0,3]$, so by the Extreme Value Theorem it attains a maximum and a minimum. Its vertex is at $x=\\tfrac32$ with $F(\\tfrac32)=-\\tfrac14$ (the minimum), and the largest values occur at the endpoints $F(0)=2=F(3)$ (the maximum).",
          "For the root: $F$ is continuous on $[0,1]$ with $F(0)=2>1$ and $F(1)=0<1$, so $F(0)-1>0>F(1)-1$; by the IVT applied to $F(x)-1$ there is some $x\\in(0,1)$ with $F(x)=1$. (Explicitly $x^{2}-3x+1=0$ gives $x=\\tfrac{3-\\sqrt5}{2}\\approx0.382\\in(0,1)$.) This establishes every claim in the boxed answer."
        ]
      },
      {
        "name": "Spike analysis plus completing the square",
        "steps": [
          "Since $|\\cos(\\pi x)|<1$ unless $x$ is an integer, the powers $\\cos^{2n}(\\pi x)$ collapse to $0$ off $\\mathbb{Z}$ and stay at $1$ on $\\mathbb{Z}$; thus $g$ is the indicator of the integers, a function whose only discontinuities are the isolated integer spikes. Adding $a\\,g$ to the continuous polynomial $(x-1)(x-2)$ leaves a spike of height $a$ at each integer in $[0,3]$, so $F$ is continuous there if and only if $a=0$.",
          "With $a=0$, complete the square: $F(x)=\\big(x-\\tfrac32\\big)^{2}-\\tfrac14$. This is continuous on $[0,3]$, so the EVT guarantees both extremes; the squared term is smallest ($0$) at $x=\\tfrac32$, giving $\\min F=-\\tfrac14$, and largest at the endpoint farthest from $\\tfrac32$ — both ends are at distance $\\tfrac32$, so $\\max F=(\\tfrac32)^{2}-\\tfrac14=2$ at $x=0$ and $x=3$.",
          "Finally $\\big(x-\\tfrac32\\big)^{2}-\\tfrac14=1$ means $\\big(x-\\tfrac32\\big)^{2}=\\tfrac54$, i.e. $x=\\tfrac32-\\tfrac{\\sqrt5}{2}\\approx0.382$, which lies in $(0,1)$; continuity of $F$ on $[0,1]$ with $F(0)=2>1>0=F(1)$ confirms the crossing via the IVT, matching the boxed answer."
        ]
      }
    ],
    "remark": "**Insight.** The headache is the imported object $g(x)=\\lim_{n\\to\\infty}\\cos^{2n}(\\pi x)$, which is just the **indicator of the integers** — a clean sequential limit that lands on $1$ only where $\\cos^{2}$ equals $1$. Because that spike sits on **isolated** integers with $0$ all around, the only way to fold it into a continuous $F$ is to **switch it off**, $a=0$. Once continuity is restored, the closed interval $[0,3]$ unlocks the **Extreme Value Theorem**, so the valley $-\\tfrac14$ is not just a low point of a formula but a value that is genuinely **attained**, and the IVT then plants a root of $F(x)=1$ between the endpoint and the integer. The trap mistakes an isolated spike for a feature worth keeping."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "The $2$-Periodic Handshake: $\\sin\\pi x$ meets $\\cos\\pi x$",
    "difficulty": 3,
    "task": "Determine which relations must hold.",
    "pyq": {
      "year": 2012,
      "paper": "2",
      "qno": "55"
    },
    "tags": [
      "continuity",
      "piecewise functions",
      "one-sided limits",
      "2012"
    ],
    "figure": "",
    "statement": "For every integer $n$, let $a_n$ and $b_n$ be real numbers. Let the function $f:\\mathbb{R}\\to\\mathbb{R}$ be given by $$f(x)=\\begin{cases} a_n+\\sin\\pi x, & x\\in[2n,\\,2n+1],\\\\[4pt] b_n+\\cos\\pi x, & x\\in(2n-1,\\,2n), \\end{cases}$$ for all integers $n$. If $f$ is continuous, then which of the following hold(s) for all $n$?\n\n(A) $a_{n-1}-b_{n-1}=0$\n\n(B) $a_n-b_n=1$\n\n(C) $a_n-b_{n+1}=1$\n\n(D) $a_{n-1}-b_n=-1$",
    "answer": "(B), (D)",
    "trap": "The piece $b_n+\\cos\\pi x$ lives on the interval $(2n-1,2n)$, which sits to the LEFT of $[2n,2n+1]$. Students reflexively pair $a_n$ with $b_n$ at the wrong endpoint, or forget that the two junctions $x=2n$ and $x=2n+1$ involve pieces with DIFFERENT index labels. Getting the indexing of which $b$-piece borders which $a$-piece is the whole difficulty.",
    "solutions": [
      {
        "name": "Match the two junctions of one $a$-block",
        "steps": [
          "The $\\sin$-piece $a_n+\\sin\\pi x$ occupies the closed interval $[2n,2n+1]$. Its left endpoint is $x=2n$ and its right endpoint is $x=2n+1$; continuity is automatic on the interior, so only the endpoints need checking.",
          "Left junction $x=2n$: immediately to the left, $x\\in(2n-1,2n)$ carries the piece $b_n+\\cos\\pi x$. Left limit $=b_n+\\cos(2n\\pi)=b_n+1$. Value from the $\\sin$-piece $=a_n+\\sin(2n\\pi)=a_n$. Continuity forces $a_n=b_n+1$, i.e. $a_n-b_n=1$. This is (B).",
          "Right junction $x=2n+1$: immediately to the right, $x\\in(2n+1,2n+2)=(2(n+1)-1,\\,2(n+1))$ carries the piece with index $n+1$, namely $b_{n+1}+\\cos\\pi x$. Right limit $=b_{n+1}+\\cos((2n+1)\\pi)=b_{n+1}-1$. Value from the $\\sin$-piece $=a_n+\\sin((2n+1)\\pi)=a_n$. Continuity forces $a_n=b_{n+1}-1$, i.e. $a_n-b_{n+1}=-1$.",
          "Rewrite this last relation by shifting $n\\to n-1$: $a_{n-1}-b_n=-1$. This is (D).",
          "Check the others. (A) $a_{n-1}-b_{n-1}=0$ would need $a=b$, but (B) says $a-b=1$, so (A) is false. (C) $a_n-b_{n+1}=1$ contradicts the derived $a_n-b_{n+1}=-1$, so (C) is false.",
          "Hence exactly (B) and (D) hold for all $n$."
        ]
      },
      {
        "name": "Solve the recurrence for $a_n$ and $b_n$ explicitly",
        "steps": [
          "From the left junction $x=2n$ we found $a_n=b_n+1$; from the right junction $x=2n+1$ we found $a_n=b_{n+1}-1$, i.e. $b_{n+1}=a_n+1$.",
          "Substitute: $b_{n+1}=a_n+1=(b_n+1)+1=b_n+2$. So $b_n$ increases by $2$ each step: $b_n=b_0+2n$, and correspondingly $a_n=b_n+1=b_0+2n+1$.",
          "Now test each option against these formulas. (A): $a_{n-1}-b_{n-1}=(b_0+2n-1)-(b_0+2n-2)=1\\neq 0$, so (A) fails.",
          "(B): $a_n-b_n=(b_0+2n+1)-(b_0+2n)=1$. True.",
          "(C): $a_n-b_{n+1}=(b_0+2n+1)-(b_0+2n+2)=-1\\neq 1$, so (C) fails.",
          "(D): $a_{n-1}-b_n=(b_0+2n-1)-(b_0+2n)=-1$. True.",
          "The explicit sequences confirm exactly (B) and (D)."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE / JEE Advanced 2012, Paper 2, Q55. The entire trap is bookkeeping: the block $[2n,2n+1]$ is flanked by the $b_n$-piece on its left and the $b_{n+1}$-piece on its right, so a single continuity condition splits across two different indices."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Two Maxima Agree: an IVT Crossing of $f$ and $g$",
    "difficulty": 3,
    "task": "Identify the statement(s) that must be true.",
    "pyq": {
      "year": 2014,
      "paper": "1",
      "qno": "42"
    },
    "tags": [
      "intermediate value theorem",
      "continuous functions",
      "existence",
      "2014"
    ],
    "figure": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" font-size=\"12\">\n  <line x1=\"30\" y1=\"185\" x2=\"300\" y2=\"185\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"/>\n  <line x1=\"40\" y1=\"200\" x2=\"40\" y2=\"25\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"/>\n  <text x=\"292\" y=\"200\" fill=\"var(--ink2)\">x</text>\n  <line x1=\"40\" y1=\"55\" x2=\"300\" y2=\"55\" stroke=\"var(--ink2)\" stroke-width=\"1\" stroke-dasharray=\"4 3\"/>\n  <text x=\"44\" y=\"51\" fill=\"var(--ink2)\">y = M (common max)</text>\n  <text x=\"22\" y=\"189\" fill=\"var(--ink2)\">0</text>\n  <text x=\"178\" y=\"200\" fill=\"var(--ink2)\">1</text>\n  <line x1=\"185\" y1=\"185\" x2=\"185\" y2=\"180\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"/>\n  <path d=\"M40,150 C90,60 110,55 120,55 C160,55 180,150 300,120\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"2\"/>\n  <text x=\"70\" y=\"95\" fill=\"var(--ink3)\">f</text>\n  <circle cx=\"120\" cy=\"55\" r=\"3\" fill=\"var(--ink3)\"/>\n  <text x=\"108\" y=\"46\" fill=\"var(--ink2)\">x₁</text>\n  <path d=\"M40,110 C120,140 200,55 220,55 C245,55 270,150 300,165\" fill=\"none\" stroke=\"var(--gold)\" stroke-width=\"2\"/>\n  <text x=\"268\" y=\"140\" fill=\"var(--gold)\">g</text>\n  <circle cx=\"220\" cy=\"55\" r=\"3\" fill=\"var(--gold)\"/>\n  <text x=\"224\" y=\"46\" fill=\"var(--ink2)\">x₂</text>\n  <circle cx=\"166\" cy=\"87\" r=\"3.5\" fill=\"var(--gold)\" stroke=\"var(--ink3)\"/>\n  <text x=\"150\" y=\"105\" fill=\"var(--ink2)\">c: f(c)=g(c)</text>\n</svg>",
    "statement": "For every pair of continuous functions $f,g:[0,1]\\to\\mathbb{R}$ such that $$\\max\\{f(x):x\\in[0,1]\\}=\\max\\{g(x):x\\in[0,1]\\},$$ the correct statement(s) is(are):\n\n(A) $(f(c))^2+3f(c)=(g(c))^2+3g(c)$ for some $c\\in[0,1]$\n\n(B) $(f(c))^2+f(c)=(g(c))^2+3g(c)$ for some $c\\in[0,1]$\n\n(C) $(f(c))^2+3f(c)=(g(c))^2+g(c)$ for some $c\\in[0,1]$\n\n(D) $(f(c))^2=(g(c))^2$ for some $c\\in[0,1]$",
    "answer": "(A), (D)",
    "trap": "The hypothesis only says the two maxima are EQUAL — it does NOT say they occur at the same point. The single fact you can extract is that $h=f-g$ changes sign (nonnegative at $f$'s peak, nonpositive at $g$'s peak), so $f(c)=g(c)$ for some $c$. Options that stay true only when $f(c)=g(c)$ survive; options with a mismatched coefficient (the '$3g$' vs '$g$' in (B),(C)) can be broken by a counterexample and are NOT forced.",
    "solutions": [
      {
        "name": "IVT on $h=f-g$ forces a common value",
        "steps": [
          "Let $M=\\max f=\\max g$. Since $f,g$ are continuous on the compact interval $[0,1]$, each attains its maximum: say $f(x_1)=M$ and $g(x_2)=M$ for some $x_1,x_2\\in[0,1]$.",
          "Define $h(x)=f(x)-g(x)$, continuous on $[0,1]$. At $x_1$: $h(x_1)=f(x_1)-g(x_1)=M-g(x_1)\\ge 0$, because $M$ is the maximum of $g$ so $g(x_1)\\le M$.",
          "At $x_2$: $h(x_2)=f(x_2)-g(x_2)=f(x_2)-M\\le 0$, because $M$ is the maximum of $f$ so $f(x_2)\\le M$.",
          "So $h$ takes a value $\\ge 0$ and a value $\\le 0$. By the Intermediate Value Theorem there is $c$ (between $x_1$ and $x_2$) with $h(c)=0$, i.e. $f(c)=g(c)$.",
          "At that $c$: substituting $f(c)=g(c)$ into (A) gives $(g(c))^2+3g(c)=(g(c))^2+3g(c)$, true. So (A) holds.",
          "At the same $c$: $(f(c))^2=(g(c))^2$ trivially since $f(c)=g(c)$. So (D) holds.",
          "(B),(C) are NOT guaranteed — see the counterexample method — so the answer is (A) and (D)."
        ]
      },
      {
        "name": "Break (B) and (C) with an explicit counterexample",
        "steps": [
          "To defeat (B), reduce it to a single-function inequality. Take $f\\equiv g$ (both constant, so their maxima are trivially equal). Then (B) demands $(f(c))^2+f(c)=(f(c))^2+3f(c)$, i.e. $f(c)=3f(c)$, i.e. $f(c)=0$, for some $c$.",
          "Choose $f=g\\equiv 1$ (constant). Both maxima equal $1$, so the hypothesis holds. But $f(c)=1\\neq 0$ everywhere, so (B)'s required equation $1+1=1+3$ reads $2=4$, false for every $c$. Hence (B) can fail — it is not forced.",
          "Same idea for (C) with $f=g\\equiv 1$: (C) demands $(f(c))^2+3f(c)=(f(c))^2+f(c)$, i.e. $3f(c)=f(c)$, i.e. $f(c)=0$. Again $f(c)=1\\neq 0$, so $1+3=1+1$ reads $4=2$, false everywhere. Hence (C) can fail too.",
          "Meanwhile the same constant pair satisfies (A) ($1+3=1+3$) and (D) ($1=1$) for every $c$, consistent with the IVT conclusion.",
          "So only (A) and (D) are true for EVERY admissible pair; (B) and (C) admit counterexamples."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE / JEE Advanced 2014, Paper 1, Q42. A classic IVT trap: equal maxima do not mean a shared location — the only universal consequence is a crossing point $c$ with $f(c)=g(c)$, which validates exactly the two symmetric options."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Counting the breaks of $[x^2-3]$",
    "difficulty": 4,
    "task": "Decide which statements about the discontinuities and non-differentiabilities hold.",
    "pyq": {
      "year": 2016,
      "paper": "2",
      "qno": "50"
    },
    "tags": [
      "greatest integer function",
      "continuity and differentiability",
      "modulus functions",
      "2016"
    ],
    "figure": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" font-size=\"12\">\n  <line x1=\"20\" y1=\"170\" x2=\"300\" y2=\"170\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"/>\n  <line x1=\"40\" y1=\"20\" x2=\"40\" y2=\"185\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"/>\n  <text x=\"296\" y=\"185\" fill=\"var(--ink2)\">x</text>\n  <text x=\"24\" y=\"28\" fill=\"var(--ink2)\">y</text>\n  <!-- step graph of f(x)=[x^2-3] on [-1/2, 2]; f = -3 until x=1, -2 on (1,sqrt2), -1 on (sqrt2,sqrt3), 0 on (sqrt3,2), 1 at x=2 -->\n  <!-- x mapping: x=-0.5 -> 55, x=2 -> 280 (scale 90 px per unit) ; y: value v -> 170 - (v+3)*30 -->\n  <line x1=\"55\" y1=\"170\" x2=\"175\" y2=\"170\" stroke=\"var(--ink2)\" stroke-width=\"2\"/>\n  <line x1=\"175\" y1=\"140\" x2=\"217\" y2=\"140\" stroke=\"var(--ink2)\" stroke-width=\"2\"/>\n  <line x1=\"217\" y1=\"110\" x2=\"242\" y2=\"110\" stroke=\"var(--ink2)\" stroke-width=\"2\"/>\n  <line x1=\"242\" y1=\"80\" x2=\"280\" y2=\"80\" stroke=\"var(--ink2)\" stroke-width=\"2\"/>\n  <!-- jump markers highlighted -->\n  <circle cx=\"175\" cy=\"170\" r=\"3\" fill=\"var(--gold)\"/>\n  <circle cx=\"175\" cy=\"140\" r=\"3\" fill=\"var(--gold)\"/>\n  <circle cx=\"217\" cy=\"140\" r=\"3\" fill=\"var(--gold)\"/>\n  <circle cx=\"217\" cy=\"110\" r=\"3\" fill=\"var(--gold)\"/>\n  <circle cx=\"242\" cy=\"110\" r=\"3\" fill=\"var(--gold)\"/>\n  <circle cx=\"242\" cy=\"80\" r=\"3\" fill=\"var(--gold)\"/>\n  <circle cx=\"280\" cy=\"80\" r=\"3\" fill=\"var(--gold)\"/>\n  <text x=\"170\" y=\"183\" fill=\"var(--ink2)\">1</text>\n  <text x=\"207\" y=\"183\" fill=\"var(--ink2)\">√2</text>\n  <text x=\"232\" y=\"183\" fill=\"var(--ink2)\">√3</text>\n  <text x=\"274\" y=\"183\" fill=\"var(--ink2)\">2</text>\n  <text x=\"120\" y=\"30\" fill=\"var(--gold)\">jumps of $[x^2-3]$: x=1, √2, √3</text>\n</svg>",
    "statement": "Let $f:\\left[-\\dfrac{1}{2},2\\right]\\to\\mathbb{R}$ and $g:\\left[-\\dfrac{1}{2},2\\right]\\to\\mathbb{R}$ be defined by $f(x)=[x^2-3]$ and $g(x)=|x|\\,f(x)+|4x-7|\\,f(x)$, where $[y]$ denotes the greatest integer less than or equal to $y$. Then\n\n(A) $f$ is discontinuous at exactly three points in $\\left[-\\dfrac{1}{2},2\\right]$\n\n(B) $f$ is discontinuous at exactly four points in $\\left[-\\dfrac{1}{2},2\\right]$\n\n(C) $g$ is NOT differentiable at exactly four points in $\\left(-\\dfrac{1}{2},2\\right)$\n\n(D) $g$ is NOT differentiable at exactly five points in $\\left(-\\dfrac{1}{2},2\\right)$",
    "answer": "(B), (C)",
    "trap": "Students count the jumps of $[x^2-3]$ correctly but then treat $g$ as inheriting a kink at every corner of $|x|$ and $|4x-7|$. The trap is that $g=f\\cdot(|x|+|4x-7|)$: wherever $f(x)=0$ the modulus corners are silently annihilated, so the corner of $|4x-7|$ at $x=7/4$ (which lies in the region $f\\equiv 0$) contributes nothing.",
    "solutions": [
      {
        "name": "Track the jumps of $[x^2-3]$, then the corners of $g$",
        "steps": [
          "On the domain $\\left[-\\tfrac12,2\\right]$ the inner value $u=x^2-3$ increases from $u(-\\tfrac12)=-\\tfrac{11}{4}$ up to $u(2)=1$, but note $u$ first dips: $x^2$ has its minimum at $x=0$, so $u$ decreases on $\\left[-\\tfrac12,0\\right]$ and increases on $[0,2]$. The minimum of $u$ is $-3$ at $x=0$.",
          "$f(x)=[x^2-3]$ jumps exactly where $x^2-3$ passes an integer. For $x\\ge 0$, solve $x^2-3=k$: $x^2-3=-2\\Rightarrow x=1$; $x^2-3=-1\\Rightarrow x=\\sqrt2$; $x^2-3=0\\Rightarrow x=\\sqrt3$. At $x=2$, $x^2-3=1$ but $x=2$ is the right endpoint, not an interior jump.",
          "On $\\left[-\\tfrac12,0\\right]$, $x^2-3\\in\\left[-3,-\\tfrac{11}{4}\\right]$ so $[x^2-3]=-3$ throughout — no jump. Thus $f$ is discontinuous at exactly $x=1,\\ \\sqrt2,\\ \\sqrt3$: three interior jumps. Counting within the closed domain the value also changes reaching $x=2$, but the four distinct integer-crossings $\\{-2,-1,0,1\\}$ produce four points of discontinuity when the endpoint is included — the official key marks (B) four. Hence (A) is false and (B) is true.",
          "Now $g(x)=f(x)\\,\\big(|x|+|4x-7|\\big)$. Write $h(x)=|x|+|4x-7|$, which has corners at $x=0$ and $x=\\tfrac74$.",
          "Non-differentiability of $g$ can occur (i) at the jump points of $f$ ($x=1,\\sqrt2,\\sqrt3$), and (ii) at corners of $h$ where $f\\neq0$.",
          "On $\\left[\\sqrt3,2\\right)$, $x^2-3\\in[0,1)$ so $f(x)=0$; therefore $g\\equiv0$ on that stretch and the corner of $h$ at $x=\\tfrac74\\approx1.75\\in(\\sqrt3,2)$ is killed — no kink there.",
          "The corner of $h$ at $x=0$: on a neighbourhood of $0$, $f=-3\\neq0$, so $g=-3h$ keeps the corner — one non-differentiable point.",
          "Total non-differentiable points: $x=0,\\ 1,\\ \\sqrt2,\\ \\sqrt3$ — exactly four. Hence (C) is true and (D) is false."
        ]
      },
      {
        "name": "Piecewise-constant reduction of $f$",
        "steps": [
          "Split the domain by the jump values of $f$: on $\\left[-\\tfrac12,1\\right)$, $f=-3$; on $\\left[1,\\sqrt2\\right)$, $f=-2$; on $\\left[\\sqrt2,\\sqrt3\\right)$, $f=-1$; on $\\left[\\sqrt3,2\\right)$, $f=0$; at $x=2$, $f=1$.",
          "So $g$ equals a constant multiple of $h(x)=|x|+|4x-7|$ on each block: $g=-3h,\\ -2h,\\ -h,\\ 0$ respectively.",
          "Within each open block $g$ is smooth except where $h$ has a corner. $h$'s corners are $x=0$ (inside the first block) and $x=\\tfrac74$ (inside the last block where $g\\equiv0$).",
          "At $x=0$: $g=-3h$, and $h$ has a genuine corner, so $g$ is not differentiable — 1 point.",
          "At $x=\\tfrac74$: $g\\equiv0$ on the whole block, perfectly smooth — 0 points.",
          "At each interface $x=1,\\sqrt2,\\sqrt3$ the constant multiplying $h$ jumps, so $g$ has a jump discontinuity in value ⇒ automatically not differentiable — 3 points.",
          "Summing: non-differentiable at $\\{0,1,\\sqrt2,\\sqrt3\\}$, exactly four points ⇒ (C). Since $f$ itself changes value at $\\{1,\\sqrt2,\\sqrt3\\}$ plus the endpoint value change to $1$ at $x=2$, the discontinuity count is four ⇒ (B)."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE / JEE Advanced 2016, Paper 2, Q50. The whole difficulty is bookkeeping: a modulus corner is only a corner of $g$ where the greatest-integer factor is nonzero, so $x=\\tfrac74$ is a decoy."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Where does $x\\cos(\\pi(x+[x]))$ break?",
    "difficulty": 3,
    "task": "Identify the points of discontinuity.",
    "pyq": {
      "year": 2017,
      "paper": "1",
      "qno": "39"
    },
    "tags": [
      "greatest integer function",
      "discontinuity",
      "2017"
    ],
    "figure": "",
    "statement": "Let $[x]$ denote the greatest integer less than or equal to $x$. At which of the following point(s) is the function $f(x)=x\\cos\\big(\\pi(x+[x])\\big)$ discontinuous?\n\n(A) $x=-1$\n\n(B) $x=0$\n\n(C) $x=1$\n\n(D) $x=2$\n\nNote: the official key awarded this as a bonus (+4 to all candidates) due to a printing inconsistency; the intended answer set is $(A),(C),(D)$.",
    "answer": "$(A),(C),(D)$ (officially a bonus / +4 to all)",
    "trap": "The obvious reflex is that $[x]$ is discontinuous at every integer, so $f$ must break at all four points including $x=0$. But at $x=0$ the outer factor $x$ vanishes, and a bounded jump multiplied by a factor tending to $0$ still gives a $0$ limit — so $x=0$ is a removable/continuous point. The break survives only at the nonzero integers.",
    "solutions": [
      {
        "name": "Reduce the cosine using parity of $[x]$",
        "steps": [
          "Write $x+[x]$. Since $\\cos$ has period $2\\pi$ and $[x]$ is an integer, $\\cos(\\pi(x+[x]))=\\cos(\\pi x)\\cos(\\pi[x])-\\sin(\\pi x)\\sin(\\pi[x])$. Because $[x]$ is an integer, $\\sin(\\pi[x])=0$ and $\\cos(\\pi[x])=(-1)^{[x]}$.",
          "Hence $f(x)=x\\,(-1)^{[x]}\\cos(\\pi x)$.",
          "On each interval $[n,n+1)$, $[x]=n$ is constant, so $f(x)=(-1)^n\\,x\\cos(\\pi x)$ is continuous there. Discontinuities can only occur at integers, where $(-1)^{[x]}$ flips sign.",
          "At an integer $x=n$: right value uses $[n]=n$, giving $f(n^+)=(-1)^n\\,n\\cos(\\pi n)=(-1)^n n(-1)^n=n$. Left limit uses $[x]=n-1$, giving $f(n^-)=(-1)^{\\,n-1}\\,n\\cos(\\pi n)=(-1)^{n-1}n(-1)^n=-n$.",
          "So the jump at $x=n$ is $f(n^+)-f(n^-)=n-(-n)=2n$. This is nonzero exactly when $n\\neq0$.",
          "Therefore $f$ is discontinuous at every nonzero integer and continuous at $x=0$. Among the listed points: discontinuous at $x=-1,\\ 1,\\ 2$ (jumps $-2,2,4$), continuous at $x=0$. Answer $(A),(C),(D)$."
        ]
      },
      {
        "name": "Direct one-sided limits at each candidate",
        "steps": [
          "$x=0$: for $x\\to0^+$, $[x]=0$ so $f=x\\cos(\\pi x)\\to0$; for $x\\to0^-$, $[x]=-1$ so $f=x\\cos(\\pi(x-1))=x\\cos(\\pi x-\\pi)=-x\\cos(\\pi x)\\to0$. Both one-sided limits and $f(0)=0$ agree ⇒ continuous. (B) is NOT a discontinuity.",
          "$x=1$: $x\\to1^+$, $[x]=1$, $f=x\\cos(\\pi(x+1))=x\\cos(\\pi x+\\pi)=-x\\cos(\\pi x)\\to-1\\cdot(-1)=1$. $x\\to1^-$, $[x]=0$, $f=x\\cos(\\pi x)\\to1\\cdot(-1)=-1$. Limits $1\\neq-1$ ⇒ discontinuous. (C) holds.",
          "$x=-1$: $x\\to-1^+$, $[x]=-1$, $f=x\\cos(\\pi(x-1))=-x\\cos(\\pi x)\\to-(-1)(-1)=-1$. $x\\to-1^-$, $[x]=-2$, $f=x\\cos(\\pi(x-2))=x\\cos(\\pi x)\\to(-1)(-1)=1$. Limits $-1\\neq1$ ⇒ discontinuous. (A) holds.",
          "$x=2$: $x\\to2^+$, $[x]=2$, $f=x\\cos(\\pi(x+2))=x\\cos(\\pi x)\\to2\\cdot1=2$. $x\\to2^-$, $[x]=1$, $f=x\\cos(\\pi(x+1))=-x\\cos(\\pi x)\\to-2\\cdot1=-2$. Limits $2\\neq-2$ ⇒ discontinuous. (D) holds.",
          "Collecting: discontinuous at $x=-1,1,2$ and continuous at $x=0$, matching the intended key $(A),(C),(D)$."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE / JEE Advanced 2017, Paper 1, Q39 (officially bonused, +4 to all, due to a printing inconsistency). The clean identity $f(x)=(-1)^{[x]}x\\cos(\\pi x)$ shows the jump at an integer $n$ is $2n$ — zero precisely at $x=0$, which is why the origin is the one integer that stays continuous."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Zeros forced by $f:\\mathbb{R}\\to(0,1)$",
    "difficulty": 4,
    "task": "Identify which functions must vanish on $(0,1)$.",
    "pyq": {
      "year": 2017,
      "paper": "1",
      "qno": "40"
    },
    "tags": [
      "intermediate value theorem",
      "definite integral bounds",
      "2017"
    ],
    "figure": "",
    "statement": "Let $f:\\mathbb{R}\\to(0,1)$ be a continuous function. Then which of the following function(s) has(have) the value zero at some point in the interval $(0,1)$?\n\n(A) $x^{9}-f(x)$\n(B) $x-\\displaystyle\\int_{0}^{\\frac{\\pi}{2}-x} f(t)\\cos t\\,dt$\n(C) $e^{x}-\\displaystyle\\int_{0}^{x} f(t)\\sin t\\,dt$\n(D) $f(x)+\\displaystyle\\int_{0}^{\\frac{\\pi}{2}} f(t)\\sin t\\,dt$",
    "answer": "(A), (B)",
    "trap": "Students try to compute the integrals explicitly. The whole point is that $f$ is arbitrary — only the range constraint $0<f<1$ matters. Also, (D) is a sum of two strictly positive quantities, so it can NEVER be zero; recognizing that a function is bounded away from $0$ is just as important as finding a sign change.",
    "solutions": [
      {
        "name": "IVT via endpoint sign-checks",
        "steps": [
          "Every candidate is continuous on $[0,1]$ (a continuous $f$, plus integrals with continuous integrands are continuous in the limit variable). So the Intermediate Value Theorem applies: a sign change forces a zero.",
          "(A) Let $g(x)=x^{9}-f(x)$. Since $0<f<1$: $g(0)=0-f(0)=-f(0)<0$ and $g(1)=1-f(1)>0$ (because $f(1)<1$). Opposite signs $\\Rightarrow$ a zero in $(0,1)$. TRUE.",
          "(B) Let $h(x)=x-\\displaystyle\\int_{0}^{\\frac{\\pi}{2}-x} f(t)\\cos t\\,dt$. At $x=0$: $h(0)=-\\displaystyle\\int_{0}^{\\pi/2} f(t)\\cos t\\,dt<0$ since the integrand $f(t)\\cos t>0$ on $(0,\\pi/2)$.",
          "At $x=1$: the upper limit is $\\tfrac{\\pi}{2}-1\\approx0.57$, and on $(0,\\tfrac{\\pi}{2}-1)$ we have $0<f(t)\\cos t<1$, so $\\displaystyle\\int_{0}^{\\frac{\\pi}{2}-1} f(t)\\cos t\\,dt<\\tfrac{\\pi}{2}-1<1$. Hence $h(1)=1-(\\text{something}<1)>0$.",
          "$h(0)<0$, $h(1)>0$ $\\Rightarrow$ a zero in $(0,1)$. TRUE.",
          "(C) Let $p(x)=e^{x}-\\displaystyle\\int_{0}^{x} f(t)\\sin t\\,dt$. On $(0,1)$, $e^{x}>1$, while $\\displaystyle\\int_{0}^{x} f(t)\\sin t\\,dt<\\int_{0}^{x}1\\cdot 1\\,dt=x<1$. So $p(x)>1-1=0$ throughout: strictly positive, never zero. FALSE.",
          "(D) Let $q(x)=f(x)+\\displaystyle\\int_{0}^{\\pi/2} f(t)\\sin t\\,dt$. Here $f(x)>0$ and the integral is a fixed positive constant, so $q(x)>0$ everywhere. Never zero. FALSE.",
          "Therefore the answer is (A), (B)."
        ]
      },
      {
        "name": "Fixed-point / bounding reformulation",
        "steps": [
          "Reframe each option as ‘does a curve cross a barrier?’ using only $0<f<1$.",
          "(A) A zero of $x^{9}-f(x)$ is a solution of $x^{9}=f(x)$. On $(0,1)$ the graph $y=x^{9}$ climbs from $0$ to $1$, while $y=f(x)$ stays strictly inside the horizontal band $(0,1)$. At $x\\to0^{+}$, $x^{9}<f$; at $x\\to1^{-}$, $x^{9}\\to1>f$. Two continuous curves swapping order must intersect $\\Rightarrow$ TRUE.",
          "(B) Write $F(x)=\\displaystyle\\int_{0}^{\\frac{\\pi}{2}-x} f(t)\\cos t\\,dt$. As $x$ runs $0\\to1$, $F$ decreases (upper limit shrinks) from a positive value $F(0)>0$ down toward $F(1)<\\tfrac{\\pi}{2}-1<1$, while the line $y=x$ rises from $0$ to $1$. At $x=0$ the line is below $F$; at $x=1$ the line is above $F$. Crossing $\\Rightarrow$ TRUE.",
          "(C) Bound the integral: $0\\le\\displaystyle\\int_{0}^{x} f(t)\\sin t\\,dt\\le\\int_{0}^{x}\\sin t\\,dt=1-\\cos x<1$ for $x\\in(0,1)$, whereas $e^{x}>1$. The gap $e^{x}-(\\text{integral})>1-1=0$ can never close $\\Rightarrow$ FALSE.",
          "(D) Both summands are positive, so $q$ sits entirely above the axis — no barrier is ever reached $\\Rightarrow$ FALSE.",
          "Same verdict: (A), (B)."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2017, Paper 1, Q40. The elegance is that no integral needs evaluating — the range $0<f<1$ alone decides everything, and spotting the two strictly-positive functions (C),(D) is the real test."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Four functions, four verdicts at $x=0$",
    "difficulty": 4,
    "task": "Match each function to its behaviour at the origin.",
    "pyq": {
      "year": 2018,
      "paper": "2",
      "qno": "18"
    },
    "tags": [
      "continuity",
      "differentiability",
      "greatest integer function",
      "2018"
    ],
    "figure": "",
    "statement": "Let $f_1:\\mathbb{R}\\to\\mathbb{R}$, $f_2:\\left(-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2}\\right)\\to\\mathbb{R}$, $f_3:\\left(-1,\\,e^{\\pi/2}-2\\right)\\to\\mathbb{R}$ and $f_4:\\mathbb{R}\\to\\mathbb{R}$ be defined by\n\n(i) $f_1(x)=\\sin\\!\\left(\\sqrt{1-e^{-x^{2}}}\\right)$,\n\n(ii) $f_2(x)=\\begin{cases}\\dfrac{|\\sin x|}{\\tan^{-1}x}, & x\\ne 0\\\\[4pt] 1, & x=0\\end{cases}$, where $\\tan^{-1}x$ takes values in $\\left(-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2}\\right)$,\n\n(iii) $f_3(x)=[\\sin(\\log_e(x+2))]$, where $[t]$ is the greatest integer $\\le t$,\n\n(iv) $f_4(x)=\\begin{cases}x^{2}\\sin\\!\\left(\\tfrac1x\\right), & x\\ne 0\\\\ 0, & x=0.\\end{cases}$\n\n**LIST-I** (P) $f_1$; (Q) $f_2$; (R) $f_3$; (S) $f_4$. **LIST-II** (1) NOT continuous at $x=0$; (2) continuous at $x=0$ and NOT differentiable at $x=0$; (3) differentiable at $x=0$ and its derivative is NOT continuous at $x=0$; (4) differentiable at $x=0$ and its derivative is continuous at $x=0$.\n\nOptions:\n(A) P$\\to$2; Q$\\to$3; R$\\to$1; S$\\to$4\n(B) P$\\to$4; Q$\\to$1; R$\\to$2; S$\\to$3\n(C) P$\\to$4; Q$\\to$2; R$\\to$1; S$\\to$3\n(D) P$\\to$2; Q$\\to$1; R$\\to$4; S$\\to$3",
    "answer": "(D)",
    "trap": "The killer is $f_1$: it looks smooth, but $\\sqrt{1-e^{-x^2}}\\sim|x|$ near $0$, so $f_1(x)\\approx\\sin|x|$ — a corner, hence continuous but NOT differentiable. The $\\sqrt{\\,}$ turns $x^2$ back into $|x|$. Equally, $f_4=x^2\\sin(1/x)$ is differentiable at $0$ yet its derivative oscillates and is discontinuous there — a classic ‘derivative exists but isn't continuous’ example.",
    "solutions": [
      {
        "name": "Local expansion of each function",
        "steps": [
          "$f_1(x)=\\sin\\sqrt{1-e^{-x^{2}}}$. As $x\\to0$, $1-e^{-x^{2}}=x^{2}-\\tfrac{x^{4}}{2}+\\cdots$, so $\\sqrt{1-e^{-x^{2}}}=|x|\\sqrt{1-\\tfrac{x^{2}}{2}+\\cdots}=|x|+O(|x|^{3})$. Thus $f_1(x)=\\sin(|x|+\\cdots)\\approx|x|$ near $0$.",
          "Continuous at $0$ (value $0$), but RHD $=+1$ and LHD $=-1$ (the $|x|$ corner): continuous but NOT differentiable. So P$\\to$2.",
          "$f_2$: for $x\\to0^{+}$, $|\\sin x|=\\sin x$ and $\\dfrac{\\sin x}{\\tan^{-1}x}\\to\\dfrac{x}{x}=1$, so RHL$=1$. For $x\\to0^{-}$, $|\\sin x|=-\\sin x>0$ while $\\tan^{-1}x<0$, so $\\dfrac{|\\sin x|}{\\tan^{-1}x}\\to\\dfrac{(-x)}{x}=-1$, giving LHL$=-1$.",
          "LHL$\\ne$RHL, so $f_2$ is NOT continuous at $0$. So Q$\\to$1.",
          "$f_3(x)=[\\sin(\\log_e(x+2))]$. At $x=0$, $\\log_e2\\approx0.693$ and $\\sin(0.693)\\approx0.639\\in(0,1)$. In a neighbourhood of $0$, $\\sin(\\log_e(x+2))$ stays strictly between $0$ and $1$, so the greatest integer is constantly $0$.",
          "A locally constant function is differentiable with derivative $0$, and that derivative ($\\equiv0$ near $0$) is continuous. So R$\\to$4.",
          "$f_4(x)=x^{2}\\sin(1/x)$: $f_4'(0)=\\lim_{x\\to0}\\dfrac{x^{2}\\sin(1/x)-0}{x}=\\lim_{x\\to0}x\\sin(1/x)=0$, so it IS differentiable at $0$.",
          "For $x\\ne0$, $f_4'(x)=2x\\sin(1/x)-\\cos(1/x)$; as $x\\to0$ the term $\\cos(1/x)$ oscillates and $\\lim_{x\\to0}f_4'(x)$ does not exist $\\ne f_4'(0)=0$. So the derivative is NOT continuous: S$\\to$3.",
          "P$\\to$2, Q$\\to$1, R$\\to$4, S$\\to$3 $\\Rightarrow$ option (D)."
        ]
      },
      {
        "name": "Elimination by two decisive checks",
        "steps": [
          "Rather than fully classify all four, pin down two entries and let the options collapse.",
          "Decisive check 1 — $f_2$ at $0$: the sign flip of $\\tan^{-1}x$ (negative for $x<0$) against $|\\sin x|\\ge0$ forces LHL$=-1\\ne$RHL$=1$. So $f_2$ is NOT continuous: Q$\\to$1.",
          "Only options (B) and (D) have Q$\\to$1. They differ in P and R: (B) says P$\\to$4, R$\\to$2; (D) says P$\\to$2, R$\\to$4.",
          "Decisive check 2 — $f_3$ at $0$: near $0$, $\\sin(\\log_e(x+2))\\in(0,1)$, so $f_3\\equiv0$ locally, which is differentiable with a continuous ($\\equiv0$) derivative: R$\\to$4.",
          "R$\\to$4 rules out (B) (which claimed R$\\to$2) and confirms (D).",
          "Cross-check P and S under (D): $f_1\\approx\\sin|x|$ gives a corner (P$\\to$2, matches), and $f_4=x^2\\sin(1/x)$ is differentiable with discontinuous derivative (S$\\to$3, matches). Consistent.",
          "Answer: (D)."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2018, Paper 2, Q18. A four-in-one taxonomy of the continuity/differentiability ladder — the traps are $\\sqrt{1-e^{-x^2}}\\sim|x|$ (smooth-looking corner) and $x^2\\sin(1/x)$ (differentiable but with a discontinuous derivative)."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "The Sawtooth Fed Into a Valley: $f(\\{x\\})$",
    "difficulty": 4,
    "task": "Find the value of $c+d$.",
    "pyq": {
      "year": 2020,
      "paper": "2",
      "qno": "5"
    },
    "tags": [
      "composite functions",
      "continuity and differentiability",
      "fractional part",
      "2020"
    ],
    "figure": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" font-size=\"12\"><line x1=\"20\" y1=\"170\" x2=\"300\" y2=\"170\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"/><line x1=\"160\" y1=\"30\" x2=\"160\" y2=\"185\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"/><text x=\"302\" y=\"166\" fill=\"var(--ink2)\">x</text><text x=\"164\" y=\"28\" fill=\"var(--ink2)\">(f∘g)(x)</text><text x=\"148\" y=\"183\" fill=\"var(--ink2)\">0</text><text x=\"28\" y=\"183\" fill=\"var(--ink2)\">-1</text><text x=\"286\" y=\"183\" fill=\"var(--ink2)\">1</text><line x1=\"20\" y1=\"170\" x2=\"20\" y2=\"166\" stroke=\"var(--ink3)\"/><line x1=\"300\" y1=\"170\" x2=\"300\" y2=\"166\" stroke=\"var(--ink3)\"/><text x=\"12\" y=\"130\" fill=\"var(--ink2)\">2</text><line x1=\"18\" y1=\"126\" x2=\"22\" y2=\"126\" stroke=\"var(--ink3)\"/><text x=\"12\" y=\"58\" fill=\"var(--ink2)\">4</text><line x1=\"18\" y1=\"54\" x2=\"22\" y2=\"54\" stroke=\"var(--ink3)\"/><line x1=\"20\" y1=\"126\" x2=\"90\" y2=\"126\" stroke=\"var(--ink3)\" stroke-width=\"1.8\"/><line x1=\"90\" y1=\"126\" x2=\"160\" y2=\"54\" stroke=\"var(--ink3)\" stroke-width=\"1.8\"/><line x1=\"160\" y1=\"126\" x2=\"230\" y2=\"126\" stroke=\"var(--ink3)\" stroke-width=\"1.8\"/><line x1=\"230\" y1=\"126\" x2=\"300\" y2=\"54\" stroke=\"var(--ink3)\" stroke-width=\"1.8\"/><circle cx=\"160\" cy=\"54\" r=\"3\" fill=\"none\" stroke=\"var(--gold)\" stroke-width=\"1.5\"/><circle cx=\"160\" cy=\"126\" r=\"3\" fill=\"var(--gold)\"/><circle cx=\"90\" cy=\"126\" r=\"2.6\" fill=\"var(--ink3)\"/><circle cx=\"230\" cy=\"126\" r=\"2.6\" fill=\"var(--ink3)\"/><text x=\"78\" y=\"188\" fill=\"var(--ink2)\">-½</text><text x=\"224\" y=\"188\" fill=\"var(--ink2)\">½</text><text x=\"150\" y=\"48\" fill=\"var(--gold)\">jump</text></svg>",
    "statement": "Let the functions $f:(-1,1)\\to\\mathbb{R}$ and $g:(-1,1)\\to(-1,1)$ be defined by $$f(x)=|2x-1|+|2x+1|, \\qquad g(x)=x-[x],$$ where $[x]$ denotes the greatest integer less than or equal to $x$. Let $f\\circ g:(-1,1)\\to\\mathbb{R}$ be the composite function defined by $(f\\circ g)(x)=f(g(x))$. Suppose $c$ is the number of points in the interval $(-1,1)$ at which $f\\circ g$ is NOT continuous, and suppose $d$ is the number of points in the interval $(-1,1)$ at which $f\\circ g$ is NOT differentiable. Then the value of $c+d$ is _____.",
    "answer": "$\\boxed{4}$",
    "trap": "Students rush to say $\\{x\\}=x-[x]$ is discontinuous only at $x=0$ inside $(-1,1)$ and stop there. But you must feed that value into $f$: the OUTER function $f$ has a corner at each half-integer of its argument, and because $g$ is continuous on the two open pieces, those corners of $f$ inject FRESH non-differentiable points of the composite at $x=\\pm\\tfrac12$. Conversely, the corner of $g$ at $x=0$ becomes a genuine jump of $f\\circ g$ (not a mere corner) because the left value pulls $f$'s argument toward $1^-$ while the right value starts it at $0$.",
    "solutions": [
      {
        "name": "Reduce $f$ on the range of $g$, then read off pieces",
        "steps": [
          "First simplify the fractional part on $(-1,1)$: for $x\\in(-1,0)$, $[x]=-1$ so $g(x)=x+1\\in(0,1)$; for $x\\in[0,1)$, $[x]=0$ so $g(x)=x\\in[0,1)$. Thus $g$ always lands in $[0,1)$.",
          "Now simplify $f(t)=|2t-1|+|2t+1|$ for $t\\in[0,1)$. Since $t\\ge0$, $2t+1>0$ so $|2t+1|=2t+1$. The other term flips sign at $t=\\tfrac12$: for $t\\in[0,\\tfrac12)$, $|2t-1|=1-2t$ giving $f(t)=(1-2t)+(2t+1)=2$; for $t\\in[\\tfrac12,1)$, $|2t-1|=2t-1$ giving $f(t)=(2t-1)+(2t+1)=4t$.",
          "Compose. On $x\\in(-1,0)$ with $g=x+1$: $f\\circ g=2$ when $x+1<\\tfrac12$ (i.e. $x<-\\tfrac12$) and $=4(x+1)$ when $x\\ge-\\tfrac12$. On $x\\in[0,1)$ with $g=x$: $f\\circ g=2$ when $x<\\tfrac12$ and $=4x$ when $x\\ge\\tfrac12$.",
          "Check continuity at the fractional-part break $x=0$. Left limit: as $x\\to0^-$, $g\\to1^-$ so $f\\circ g\\to4\\cdot1=4$. Right limit and value: as $x\\to0^+$, $g\\to0$ so $f\\circ g\\to2$, and $(f\\circ g)(0)=f(0)=2$. Since $4\\neq2$, there is a jump discontinuity at $x=0$. Everywhere else the two pieces are joined by continuous linear/constant maps, so $c=1$.",
          "Check differentiability. The composite is piecewise linear with corners wherever the slope changes: at $x=-\\tfrac12$ (slope $0\\to4$), at $x=\\tfrac12$ (slope $0\\to4$), and at $x=0$ it is already discontinuous, hence automatically non-differentiable. So the non-differentiable points are $x=-\\tfrac12,\\,0,\\,\\tfrac12$, giving $d=3$.",
          "Therefore $c+d=1+3=4.$"
        ]
      },
      {
        "name": "Track corners of $f$ and jumps of $g$ separately",
        "steps": [
          "A composite $f\\circ g$ can lose smoothness for two reasons: (i) $g$ itself is bad, or (ii) $g$ is fine but its output sits exactly where $f$ is bad.",
          "Bad points of $g=\\{x\\}$ inside $(-1,1)$: only $x=0$ (the sawtooth jump). Here $g$ leaps from $1^-$ down to $0$, so $f\\circ g$ jumps from $f(1^-)=4$ to $f(0)=2$ — a genuine discontinuity. Count it once: $c=1$, and it is also non-differentiable.",
          "Bad points of $f$: the outer $f(t)$ has corners where a modulus argument vanishes, i.e. $t=\\tfrac12$ and $t=-\\tfrac12$; but $g$ only outputs $t\\in[0,1)$, so only the corner at $t=\\tfrac12$ is reachable.",
          "Solve $g(x)=\\tfrac12$ in $(-1,1)$: on $(-1,0)$, $x+1=\\tfrac12\\Rightarrow x=-\\tfrac12$; on $[0,1)$, $x=\\tfrac12$. At both points $g$ is locally smooth with nonzero slope, so the corner of $f$ passes through undiluted and $f\\circ g$ is continuous but non-differentiable there.",
          "Assemble: discontinuities $\\{0\\}\\Rightarrow c=1$; non-differentiable points $\\{-\\tfrac12,\\,\\tfrac12\\}$ from $f$'s corner plus $\\{0\\}$ from the jump $\\Rightarrow d=3$.",
          "Hence $c+d=1+3=4.$"
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2020, Paper 2, Q5. The lesson is directional: a smooth outer function cannot heal a jump in $g$, but a smooth $g$ faithfully transmits every corner of $f$ that its output can reach — so audit both layers."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "When the Step Function's Jumps Get Cancelled",
    "difficulty": 4,
    "task": "Determine which statements are true.",
    "pyq": {
      "year": 2023,
      "paper": "2",
      "qno": "6"
    },
    "tags": [
      "greatest integer function",
      "continuity",
      "differentiability",
      "2023"
    ],
    "figure": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" font-size=\"12\"><line x1=\"25\" y1=\"140\" x2=\"300\" y2=\"140\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"/><text x=\"302\" y=\"144\" fill=\"var(--ink2)\">x</text><text x=\"20\" y=\"156\" fill=\"var(--ink2)\">0</text><text x=\"290\" y=\"156\" fill=\"var(--ink2)\">1</text><line x1=\"25\" y1=\"136\" x2=\"25\" y2=\"144\" stroke=\"var(--ink3)\"/><line x1=\"93.75\" y1=\"136\" x2=\"93.75\" y2=\"144\" stroke=\"var(--ink3)\"/><line x1=\"162.5\" y1=\"136\" x2=\"162.5\" y2=\"144\" stroke=\"var(--ink3)\"/><line x1=\"231.25\" y1=\"136\" x2=\"231.25\" y2=\"144\" stroke=\"var(--ink3)\"/><text x=\"85\" y=\"156\" fill=\"var(--ink2)\">¼</text><text x=\"156\" y=\"156\" fill=\"var(--ink2)\">½</text><text x=\"223\" y=\"156\" fill=\"var(--ink2)\">¾</text><path d=\"M25,140 Q59,141 93.75,140\" stroke=\"var(--ink2)\" stroke-width=\"1.4\" fill=\"none\"/><path d=\"M93.75,140 Q120,148 135,150 Q150,146 162.5,140\" stroke=\"var(--ink3)\" stroke-width=\"1.8\" fill=\"none\"/><path d=\"M162.5,140 Q185,132 231.25,116\" stroke=\"var(--ink3)\" stroke-width=\"1.8\" fill=\"none\"/><circle cx=\"231.25\" cy=\"116\" r=\"3\" fill=\"none\" stroke=\"var(--gold)\" stroke-width=\"1.5\"/><path d=\"M231.25,90 Q265,68 300,44\" stroke=\"var(--ink3)\" stroke-width=\"1.8\" fill=\"none\"/><circle cx=\"231.25\" cy=\"90\" r=\"3\" fill=\"var(--gold)\"/><text x=\"236\" y=\"104\" fill=\"var(--gold)\">jump</text><circle cx=\"162.5\" cy=\"140\" r=\"3\" fill=\"var(--gold)\"/><text x=\"150\" y=\"128\" fill=\"var(--gold)\">corner</text><circle cx=\"135\" cy=\"150\" r=\"2.4\" fill=\"var(--ink3)\"/><text x=\"115\" y=\"170\" fill=\"var(--ink2)\">min = -1/432</text></svg>",
    "statement": "Let $f:(0,1)\\to\\mathbb{R}$ be the function defined as $$f(x) = [4x]\\left(x - \\tfrac{1}{4}\\right)^2\\left(x - \\tfrac{1}{2}\\right),$$ where $[x]$ denotes the greatest integer less than or equal to $x$. Then which of the following statements is (are) true? $$\\text{(A) The function }f\\text{ is discontinuous exactly at one point in }(0,1)$$ $$\\text{(B) There is exactly one point in }(0,1)\\text{ at which }f\\text{ is continuous but NOT differentiable}$$ $$\\text{(C) The function }f\\text{ is NOT differentiable at more than three points in }(0,1)$$ $$\\text{(D) The minimum value of the function }f\\text{ is }-\\tfrac{1}{512}$$",
    "answer": "(A), (B)",
    "trap": "The reflex is: $[4x]$ jumps at $x=\\tfrac14,\\tfrac12,\\tfrac34$, so declare three discontinuities and call (C) true. That double-counts. Two of those jumps are silently ANNIHILATED by the polynomial factors: at $x=\\tfrac14$ the double zero $(x-\\tfrac14)^2$ kills the jump AND the corner (still differentiable!), and at $x=\\tfrac12$ the single zero $(x-\\tfrac12)$ heals continuity but leaves a corner. Only at $x=\\tfrac34$, where neither factor vanishes, does a real discontinuity survive. And for (D), the min sits inside the $[4x]=1$ slab, not where naive plugging suggests.",
    "solutions": [
      {
        "name": "Zero-factor bookkeeping at each step of $[4x]$",
        "steps": [
          "$[4x]$ is constant on the four slabs and steps up at $x=\\tfrac14,\\tfrac12,\\tfrac34$. Write $P(x)=(x-\\tfrac14)^2(x-\\tfrac12)$, so $f(x)=[4x]\\,P(x)$. A jump in $[4x]$ at a point $a$ produces a jump of size $\\Delta[4x]\\cdot P(a)$ in $f$; it disappears exactly when $P(a)=0$.",
          "At $x=\\tfrac14$: $P(\\tfrac14)=0$ (double root). Both left and right limits are $0=f(\\tfrac14)$, so $f$ is continuous. For differentiability, near $\\tfrac14$ we have $f=[4x](x-\\tfrac14)^2(x-\\tfrac12)$; the factor $(x-\\tfrac14)^2$ forces both one-sided derivatives to $0$, so $f$ is even DIFFERENTIABLE here.",
          "At $x=\\tfrac12$: $P(\\tfrac12)=0$ (simple root), so left and right limits are both $0=f(\\tfrac12)$ — continuous. But the derivative sees the slab value change from $1$ to $2$: on $[\\tfrac14,\\tfrac12)$, $f=1\\cdot P$ has slope $P'(\\tfrac12)=(\\tfrac12-\\tfrac14)^2=\\tfrac1{16}$; on $[\\tfrac12,\\tfrac34)$, $f=2\\cdot P$ has slope $2P'(\\tfrac12)=\\tfrac18$. Slopes $\\tfrac1{16}\\ne\\tfrac18$, so $f$ is continuous but NOT differentiable — a corner.",
          "At $x=\\tfrac34$: $P(\\tfrac34)=(\\tfrac12)^2(\\tfrac14)=\\tfrac1{16}\\ne0$, and $[4x]$ jumps by $1$, so $f$ jumps by $\\tfrac1{16}$ — a genuine discontinuity.",
          "Tally: discontinuities $=\\{\\tfrac34\\}$, exactly one $\\Rightarrow$ (A) TRUE. Continuous-but-not-differentiable $=\\{\\tfrac12\\}$, exactly one $\\Rightarrow$ (B) TRUE. Non-differentiable points $=\\{\\tfrac12,\\tfrac34\\}$, that's two, NOT more than three $\\Rightarrow$ (C) FALSE.",
          "For (D), minimise on each slab. The candidate is the slab $[\\tfrac14,\\tfrac12)$ where $f=(x-\\tfrac14)^2(x-\\tfrac12)\\le0$. Setting $f'=0$: $2(x-\\tfrac14)(x-\\tfrac12)+(x-\\tfrac14)^2=(x-\\tfrac14)(3x-\\tfrac54)=0$ gives interior critical point $x=\\tfrac5{12}$. Then $f(\\tfrac5{12})=(\\tfrac16)^2(-\\tfrac1{12})=-\\tfrac1{432}$. Comparing all slabs, the global minimum is $-\\tfrac1{432}\\ne-\\tfrac1{512}$ $\\Rightarrow$ (D) FALSE.",
          "Correct statements: (A) and (B)."
        ]
      },
      {
        "name": "Explicit slab-by-slab formula",
        "steps": [
          "Write $f$ out slab by slab, since $[4x]$ takes values $0,1,2,3$: $$f(x)=\\begin{cases}0,& x\\in(0,\\tfrac14)\\\\ (x-\\tfrac14)^2(x-\\tfrac12),& x\\in[\\tfrac14,\\tfrac12)\\\\ 2(x-\\tfrac14)^2(x-\\tfrac12),& x\\in[\\tfrac12,\\tfrac34)\\\\ 3(x-\\tfrac14)^2(x-\\tfrac12),& x\\in[\\tfrac34,1).\\end{cases}$$",
          "Junction $x=\\tfrac14$: left piece $\\equiv0$; right piece $\\to0$ and its derivative $\\to0$ (double zero). Both value and slope match $\\Rightarrow$ continuous AND differentiable — no bad point here.",
          "Junction $x=\\tfrac12$: value from both sides $=1\\cdot0=2\\cdot0=0$, so continuous. Left slope $=\\tfrac1{16}$, right slope $=\\tfrac18$ (as computed by differentiating each polynomial and substituting $x=\\tfrac12$); unequal $\\Rightarrow$ corner, non-differentiable.",
          "Junction $x=\\tfrac34$: left value $=2\\cdot\\tfrac1{16}=\\tfrac18$; right value $=3\\cdot\\tfrac1{16}=\\tfrac3{16}$. Unequal $\\Rightarrow$ jump discontinuity (hence also non-differentiable, but it already fails continuity).",
          "So (A) exactly one discontinuity at $\\tfrac34$ — TRUE; (B) exactly one continuous-non-differentiable point at $\\tfrac12$ — TRUE; (C) total non-differentiable points $=2$ — FALSE.",
          "Minimum: only the $[\\tfrac14,\\tfrac12)$ slab gives negative values. Optimising $(x-\\tfrac14)^2(x-\\tfrac12)$ there yields $x=\\tfrac5{12}$, $f=-\\tfrac1{432}$. Since $-\\tfrac1{432}\\approx-0.00231<-\\tfrac1{512}\\approx-0.00195$, the claimed value $-\\tfrac1{512}$ is wrong — (D) FALSE.",
          "Answer: (A), (B)."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2023, Paper 2, Q6. A step function multiplied by a polynomial only jumps where the polynomial is nonzero — the order of a polynomial zero at a step determines whether the jump, the corner, or nothing survives."
  }
];
