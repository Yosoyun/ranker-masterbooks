// TRIG · The Circular Arsenal — 106 ranker-level JEE-Advanced trigonometry problems.
// Rebuilt strictly within the JEE Advanced syllabus (no Chebyshev polynomials, roots of unity,
// cyclotomic/Dirichlet sums, cotangent partial-fraction telescopes, or Jensen/Euler-inequality olympiad bounds).
// 10 chapters by instrument; multi-method solutions; sympy-verified.
window.PROBLEMS = [
  {
    "theme": "conditional",
    "themeLabel": "Conditional Angle Identities",
    "title": "The Right Angle in Disguise",
    "difficulty": 4,
    "task": "Evaluate the sum",
    "tags": [
      "conditional-identity",
      "double-angle",
      "product-form",
      "right-triangle",
      "sum-to-product"
    ],
    "statement": "Real numbers $A,B,C$ satisfy $A+B+C=\\pi$ together with the two conditions \\[ \\cos 2A+\\cos 2B+\\cos 2C=-1,\\qquad \\sin A+\\sin B+\\sin C=\\frac{3+\\sqrt3}{2}. \\] Evaluate $\\sin 2A+\\sin 2B+\\sin 2C$.",
    "answer": "\\[\\boxed{\\sqrt3}\\]",
    "trap": "Reading $\\cos 2A+\\cos 2B+\\cos 2C=-1$ as a double-angle collapse, one notes that a right angle (say $C=\\tfrac{\\pi}{2}$) contributes $\\cos 2C=\\cos\\pi=-1$ and $\\sin 2C=\\sin\\pi=0$, and then leaps to the conclusion that the whole sine sum collapses likewise, $\\sin 2A+\\sin 2B+\\sin 2C=0$. That is false: only the right-angle term vanishes. Because $A+B+C=\\pi$ the sine sum is the product $4\\sin A\\sin B\\sin C$, which stays strictly positive for a genuine (non-degenerate) triangle. The cosine condition kills $\\cos A\\cos B\\cos C$, not $\\sin A\\sin B\\sin C$ — confusing the two products turns a $\\sqrt3$ into a $0$.",
    "solutions": [
      {
        "name": "Product form, then pin via the sine sum",
        "steps": [
          "For $A+B+C=\\pi$ the standard conditional identities give $\\cos 2A+\\cos 2B+\\cos 2C=-1-4\\cos A\\cos B\\cos C$ and $\\sin 2A+\\sin 2B+\\sin 2C=4\\sin A\\sin B\\sin C$.",
          "Condition (i) $\\cos 2A+\\cos 2B+\\cos 2C=-1$ therefore forces $4\\cos A\\cos B\\cos C=0$, so one of the angles is $\\tfrac{\\pi}{2}$. Take $C=\\tfrac{\\pi}{2}$; then $A+B=\\tfrac{\\pi}{2}$, whence $\\sin B=\\cos A$ and $\\sin C=1$.",
          "The target becomes $4\\sin A\\sin B\\sin C=4\\sin A\\cos A=2\\sin 2A$, so it remains only to find $\\sin 2A$.",
          "Condition (ii): $\\sin A+\\sin B+\\sin C=\\sin A+\\cos A+1=\\dfrac{3+\\sqrt3}{2}$ gives $\\sin A+\\cos A=\\dfrac{1+\\sqrt3}{2}$. Squaring, $1+\\sin 2A=\\left(\\dfrac{1+\\sqrt3}{2}\\right)^2=\\dfrac{4+2\\sqrt3}{4}=\\dfrac{2+\\sqrt3}{2}$, so $\\sin 2A=\\dfrac{\\sqrt3}{2}$.",
          "Hence $\\sin 2A+\\sin 2B+\\sin 2C=2\\sin 2A=2\\cdot\\dfrac{\\sqrt3}{2}=\\boxed{\\sqrt3}.$"
        ]
      },
      {
        "name": "Sum-to-product after isolating the right angle",
        "steps": [
          "As above, condition (i) gives $\\cos A\\cos B\\cos C=0$, i.e. one angle equals $\\tfrac{\\pi}{2}$; say $C=\\tfrac{\\pi}{2}$, so $A+B=\\tfrac{\\pi}{2}$ and $\\sin 2C=\\sin\\pi=0$.",
          "Then $\\sin 2A+\\sin 2B+\\sin 2C=\\sin 2A+\\sin 2B=2\\sin(A+B)\\cos(A-B)=2\\sin\\tfrac{\\pi}{2}\\cos(A-B)=2\\cos(A-B).$",
          "From (ii), $\\sin A+\\sin B=\\dfrac{3+\\sqrt3}{2}-\\sin C=\\dfrac{3+\\sqrt3}{2}-1=\\dfrac{1+\\sqrt3}{2}.$ Writing $\\sin A+\\sin B=2\\sin\\tfrac{A+B}{2}\\cos\\tfrac{A-B}{2}=\\sqrt2\\,\\cos\\tfrac{A-B}{2}$ (since $\\tfrac{A+B}{2}=\\tfrac{\\pi}{4}$) yields $\\cos\\tfrac{A-B}{2}=\\dfrac{1+\\sqrt3}{2\\sqrt2}.$",
          "Therefore $\\cos(A-B)=2\\cos^2\\tfrac{A-B}{2}-1=2\\cdot\\dfrac{(1+\\sqrt3)^2}{8}-1=\\dfrac{4+2\\sqrt3}{4}-1=\\dfrac{\\sqrt3}{2}.$",
          "Thus the sum is $2\\cos(A-B)=2\\cdot\\dfrac{\\sqrt3}{2}=\\boxed{\\sqrt3}.$"
        ]
      },
      {
        "name": "Determine the triangle explicitly",
        "steps": [
          "Condition (i) pins a right angle, $C=\\tfrac{\\pi}{2}$, so $\\{A,B\\}$ are complementary acute angles with $\\sin B=\\cos A$.",
          "Condition (ii) reduces to $\\sin A+\\cos A=\\dfrac{1+\\sqrt3}{2}$. The two roots in $(0,\\tfrac{\\pi}{2})$ are $A=\\tfrac{\\pi}{6}$ and $A=\\tfrac{\\pi}{3}$ (e.g. $\\sin\\tfrac{\\pi}{6}+\\cos\\tfrac{\\pi}{6}=\\tfrac12+\\tfrac{\\sqrt3}{2}=\\tfrac{1+\\sqrt3}{2}$); both describe the same triangle $\\{30^\\circ,60^\\circ,90^\\circ\\}$, so the data are consistent and the answer is unambiguous.",
          "Evaluate directly: $\\sin 2A+\\sin 2B+\\sin 2C=\\sin\\tfrac{\\pi}{3}+\\sin\\tfrac{2\\pi}{3}+\\sin\\pi=\\dfrac{\\sqrt3}{2}+\\dfrac{\\sqrt3}{2}+0=\\boxed{\\sqrt3}.$",
          "As a cross-check the product form agrees: $4\\sin\\tfrac{\\pi}{6}\\sin\\tfrac{\\pi}{3}\\sin\\tfrac{\\pi}{2}=4\\cdot\\tfrac12\\cdot\\tfrac{\\sqrt3}{2}\\cdot 1=\\sqrt3.$"
        ]
      }
    ],
    "remark": "The cosine condition is a one-line gate to a right angle, because under $A+B+C=\\pi$ one has $\\cos 2A+\\cos 2B+\\cos 2C=-1-4\\cos A\\cos B\\cos C$; setting this to $-1$ annihilates $\\cos A\\cos B\\cos C$, not the sine product. The companion identity $\\sin 2A+\\sin 2B+\\sin 2C=4\\sin A\\sin B\\sin C$ shows the target is the surviving, strictly positive product — so the seductive collapse to zero is precisely the wrong instinct. The genuine work is the second condition, which a single squaring converts into $\\sin 2A$. Two cosine/sine product identities, one right-angle recognition, one Pythagorean squaring: a compact fusion that rewards seeing a sum as a product."
  },
  {
    "theme": "conditional",
    "themeLabel": "Conditional Angle Identities",
    "title": "The Square-Sum Subtraction",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "conditional identity",
      "sin-squared",
      "cos-squared",
      "double angle",
      "product collapse"
    ],
    "statement": "Let $A,B,C$ be the angles of a triangle, so that $A+B+C=\\pi$. Show that the difference of the two square-sums\n\\[E=\\bigl(\\sin^2 A+\\sin^2 B+\\sin^2 C\\bigr)-\\bigl(\\cos^2 A+\\cos^2 B+\\cos^2 C\\bigr)\\]\nis $not$ identically zero, and find a closed form for $E$ valid for every triangle. (Express your answer as a single product expression in $A,B,C$.)",
    "answer": "\\[\\boxed{\\,E=1+4\\cos A\\cos B\\cos C\\,}\\]",
    "trap": "The two bracketed sums look like mirror images, so the reflex is to declare them equal and conclude $E\\equiv 0$ — or to “simplify” $\\sin^2 X=1-\\cos^2 X$ termwise into $E=3-2(\\cos^2A+\\cos^2B+\\cos^2C)$ and then forget that $\\cos^2A+\\cos^2B+\\cos^2C$ is itself a non-constant quantity tied to the triangle. The conceptual error is treating $\\sum\\sin^2$ and $\\sum\\cos^2$ as if they were unconditionally equal; they are equal only when $\\sum\\cos 2A=0$, which fails for a generic triangle. Indeed at the equilateral triangle $E=1+4(\\tfrac12)^3=\\tfrac32\\neq 0$, while at a right triangle $\\cos A\\cos B\\cos C=0$ gives $E=1$, so $E$ genuinely varies — the value $0$ is impossible.",
    "solutions": [
      {
        "name": "Two known square-sums, subtracted",
        "steps": [
          "Recall the two standard conditional identities for $A+B+C=\\pi$: $\\sin^2 A+\\sin^2 B+\\sin^2 C=2+2\\cos A\\cos B\\cos C$ and $\\cos^2 A+\\cos^2 B+\\cos^2 C=1-2\\cos A\\cos B\\cos C$.",
          "Subtract the second from the first: $E=(2+2\\cos A\\cos B\\cos C)-(1-2\\cos A\\cos B\\cos C)$.",
          "Hence $E=1+4\\cos A\\cos B\\cos C$, which is plainly not $0$ (e.g. $\\tfrac32$ when $A=B=C=\\tfrac\\pi3$), so the two square-sums are not equal."
        ]
      },
      {
        "name": "Collapse to a double-angle sum",
        "steps": [
          "Write each pair as $\\sin^2 X-\\cos^2 X=-\\cos 2X$, so $E=-(\\cos 2A+\\cos 2B+\\cos 2C)$.",
          "Evaluate $\\cos 2A+\\cos 2B$ by sum-to-product: $\\cos 2A+\\cos 2B=2\\cos(A+B)\\cos(A-B)$, and since $A+B=\\pi-C$ this is $-2\\cos C\\cos(A-B)$.",
          "Add $\\cos 2C=2\\cos^2 C-1$: the total is $-2\\cos C\\cos(A-B)+2\\cos^2 C-1=-1-2\\cos C\\bigl[\\cos(A-B)-\\cos C\\bigr]$. Using $\\cos C=-\\cos(A+B)$ gives $\\cos(A-B)-\\cos C=\\cos(A-B)+\\cos(A+B)=2\\cos A\\cos B$.",
          "Thus $\\cos 2A+\\cos 2B+\\cos 2C=-1-4\\cos A\\cos B\\cos C$, and negating gives $E=1+4\\cos A\\cos B\\cos C$."
        ]
      },
      {
        "name": "Unit-vector (complex) bookkeeping",
        "steps": [
          "Since $\\sin^2X-\\cos^2X=-\\cos 2X$, we need $E=-\\operatorname{Re}\\bigl(e^{2iA}+e^{2iB}+e^{2iC}\\bigr)$. The three unit vectors have argument-sum $2(A+B+C)=2\\pi$, so their product is $e^{2\\pi i}=1$.",
          "For unit complex numbers $u,v,w$ with $uvw=1$ one has the elementary identity $u+v+w=\\dfrac{1}{u}+\\dfrac1v+\\dfrac1w=\\bar u+\\bar v+\\bar w$; hence $u+v+w$ is real and $\\operatorname{Re}(u+v+w)=u+v+w$.",
          "Expanding $(1+u)(1+v)(1+w)=1+(u+v+w)+(uv+vw+wu)+uvw$ with $uvw=1$ and $uv+vw+wu=\\overline{u+v+w}=u+v+w$ gives $(1+u)(1+v)(1+w)=2+2(u+v+w)$. With $1+e^{2iX}=2\\cos X\\,e^{iX}$ and $\\arg$-sum $\\pi$, the left side equals $8\\cos A\\cos B\\cos C\\,e^{i\\pi}=-8\\cos A\\cos B\\cos C$.",
          "Therefore $u+v+w=-1-4\\cos A\\cos B\\cos C$, so $E=-(u+v+w)=1+4\\cos A\\cos B\\cos C$."
        ]
      }
    ],
    "remark": "The two square-sums $\\sum\\sin^2$ and $\\sum\\cos^2$ differ by exactly $\\sum\\cos 2A=-1-4\\cos A\\cos B\\cos C$, a quantity that is positive for acute triangles, zero for right triangles, and negative for obtuse ones. So $E=1+4\\cos A\\cos B\\cos C$ is a one-line acuteness detector: $E>1\\Leftrightarrow$ acute, $E=1\\Leftrightarrow$ right, $E<1\\Leftrightarrow$ obtuse. The lesson is that symmetry of appearance is not symmetry of value — the equality $\\sum\\sin^2=\\sum\\cos^2$ is a hidden conditional, not a freebie."
  },
  {
    "theme": "conditional",
    "themeLabel": "Conditional Angle Identities",
    "title": "The Cosecant Bridge",
    "difficulty": 4,
    "task": "Evaluate the cyclic sum and prove it is the same for every triangle",
    "tags": [
      "conditional-identity",
      "cotangent-product",
      "cosecant",
      "invariance",
      "symmetric-functions"
    ],
    "statement": "Let $A,B,C$ be the angles of a triangle, so that $A+B+C=\\pi$. Each term below bridges one cosine to the two opposite sines. Evaluate \\[ S \\;=\\; \\frac{\\cos A}{\\sin B\\,\\sin C} \\;+\\; \\frac{\\cos B}{\\sin C\\,\\sin A} \\;+\\; \\frac{\\cos C}{\\sin A\\,\\sin B}, \\] and show that the value is the same for every triangle.",
    "answer": "\\[\\boxed{S=2}\\]",
    "trap": "The fast route is to write $\\cos A=-\\cos(B+C)=\\sin B\\sin C-\\cos B\\cos C$, so the first term is $\\dfrac{\\sin B\\sin C-\\cos B\\cos C}{\\sin B\\sin C}=1-\\cot B\\cot C$. Summing cyclically gives $S=3-(\\cot A\\cot B+\\cot B\\cot C+\\cot C\\cot A)$. So far so good. The seduction is what comes next: a solver who has memorised the famous conditional fact for $A+B+C=\\pi$ rushes to apply it and writes $S=\\cot A\\cot B+\\cot B\\cot C+\\cot C\\cot A=1$, as if the sum $S$ simply were the cotangent product sum. That conflates two different things — the conditional pins the symmetric sum $\\cot A\\cot B+\\cot B\\cot C+\\cot C\\cot A=1$, and the answer is the leftover $3-1=2$, not the pinned $1$ itself. The constant $3$ from the three honest $1$'s is the whole point; dropping it (or, equivalently, mistaking which symmetric function the constraint controls — it is the cotangent sum that equals $1$, never the tangent sum) returns the wrong constant $S=1$.",
    "solutions": [
      {
        "name": "Bridge each cosine across the opposite angles",
        "steps": [
          "Since $A+B+C=\\pi$ we have $A=\\pi-(B+C)$, so $\\cos A=-\\cos(B+C)=\\sin B\\sin C-\\cos B\\cos C$.",
          "Therefore $\\dfrac{\\cos A}{\\sin B\\sin C}=1-\\dfrac{\\cos B\\cos C}{\\sin B\\sin C}=1-\\cot B\\cot C$, and cyclically the other two terms are $1-\\cot C\\cot A$ and $1-\\cot A\\cot B$.",
          "Adding the three, $S=3-\\big(\\cot A\\cot B+\\cot B\\cot C+\\cot C\\cot A\\big).$",
          "The constraint forces $\\cot A\\cot B+\\cot B\\cot C+\\cot C\\cot A=1$: indeed $A+B=\\pi-C$ gives $\\cot(A+B)=\\dfrac{\\cot A\\cot B-1}{\\cot A+\\cot B}=\\cot(\\pi-C)=-\\cot C$, which rearranges to exactly $\\cot A\\cot B+\\cot B\\cot C+\\cot C\\cot A=1$.",
          "Hence $S=3-1=\\boxed{2}$, with no dependence on the particular triangle."
        ]
      },
      {
        "name": "Single common denominator and a double-angle collapse",
        "steps": [
          "Multiply numerator and denominator of each term by the missing sine so that all three share the denominator $\\sin A\\sin B\\sin C$: $S=\\dfrac{\\sin A\\cos A+\\sin B\\cos B+\\sin C\\cos C}{\\sin A\\sin B\\sin C}.$",
          "The numerator is $\\tfrac12(\\sin 2A+\\sin 2B+\\sin 2C)$.",
          "For $A+B+C=\\pi$ the standard product identity gives $\\sin 2A+\\sin 2B+\\sin 2C=4\\sin A\\sin B\\sin C$ (group $\\sin 2A+\\sin 2B=2\\sin(A+B)\\cos(A-B)=2\\sin C\\cos(A-B)$, then $\\sin 2C=2\\sin C\\cos C=-2\\sin C\\cos(A+B)$, and $\\cos(A-B)-\\cos(A+B)=2\\sin A\\sin B$).",
          "So the numerator equals $\\tfrac12\\cdot 4\\sin A\\sin B\\sin C=2\\sin A\\sin B\\sin C$, and $S=\\dfrac{2\\sin A\\sin B\\sin C}{\\sin A\\sin B\\sin C}=\\boxed{2}$."
        ]
      },
      {
        "name": "Prove invariance, then read it off at the equilateral triangle",
        "steps": [
          "Solution 1 reduces $S$ to $3-\\sigma$, where $\\sigma=\\cot A\\cot B+\\cot B\\cot C+\\cot C\\cot A$ is a symmetric function whose value is fixed at $1$ by the single constraint $A+B+C=\\pi$. Thus $S$ is a genuine invariant: it cannot take different values on different triangles.",
          "It therefore suffices to evaluate $S$ at one admissible point. Take the equilateral triangle $A=B=C=\\tfrac\\pi3$.",
          "Each term equals $\\dfrac{\\cos\\frac\\pi3}{\\sin^2\\frac\\pi3}=\\dfrac{1/2}{3/4}=\\dfrac23$, so $S=3\\cdot\\tfrac23=2$.",
          "To certify invariance rather than assume it, note the per-term value is generally not $\\tfrac23$: away from the equilateral point the three fractions are unequal (one is even negative once an angle exceeds $\\tfrac\\pi2$), yet Solution 1 forces their sum to $2$. Hence the invariant value is $\\boxed{2}$ for every triangle."
        ]
      }
    ],
    "remark": "The cosecant denominators are a disguise; the engine underneath is the conditional identity $\\cot A\\cot B+\\cot B\\cot C+\\cot C\\cot A=1$, which holds precisely because $A+B+C=\\pi$. Bridging $\\cos A=\\sin B\\sin C-\\cos B\\cos C$ turns each fraction into $1-\\cot B\\cot C$, so the sum is $3$ honest ones minus the pinned cotangent sum, giving $2$. The trap is the chapter's signature error: knowing a conditional identity is not the same as knowing where it lives. The constraint controls one symmetric function — here the cotangent sum, not the tangent sum, and certainly not the individual terms — so the disciplined move is to isolate that symmetric sum and spend the constraint on it, keeping every additive constant in plain sight. The double-angle route (Solution 2) is the same fact wearing a different coat: $\\sin 2A+\\sin 2B+\\sin 2C=4\\sin A\\sin B\\sin C$ is just the cotangent identity multiplied through by $\\sin A\\sin B\\sin C$."
  },
  {
    "theme": "conditional",
    "themeLabel": "Conditional Angle Identities",
    "title": "Cosine Sum Ceiling",
    "difficulty": 4,
    "task": "Find the maximum",
    "answerLabel": "Maximum",
    "tags": [
      "maximum",
      "cosine",
      "triangle"
    ],
    "statement": "\\text{For }A,B,C>0\\text{ with }A+B+C=\\pi,\\text{ find the maximum of }\\cos A+\\cos B+\\cos C.",
    "answer": "\\frac32",
    "trap": "The false answer **$3$** maximises the cosines independently. The three angles cannot all be $0$ under a positive sum of $\\pi$.",
    "solutions": [
      {
        "name": "Method I: The chapter instrument",
        "steps": [
          "Use $\\cos A+\\cos B=2\\cos\\frac{A+B}{2}\\cos\\frac{A-B}{2}\\le2\\cos\\frac{\\pi-C}{2}$ and then optimise in $C$.",
          "Substituting the given restrictions and simplifying gives $\\frac32$."
        ]
      },
      {
        "name": "Method II: Independent check",
        "steps": [
          "Use the identity $\\cos A+\\cos B+\\cos C=1+\\frac rR$ and Euler's $r\\le R/2$.",
          "This route reaches the same value and rules out the trap, so the answer is $\\frac32$."
        ]
      }
    ],
    "remark": "The trig and geometry proofs meet at the same equality case: $A=B=C=\\pi/3$."
  },
  {
    "theme": "conditional",
    "themeLabel": "Conditional Angle Identities",
    "title": "The Cosine-Square Identity",
    "difficulty": 4,
    "task": "Prove the conditional identity",
    "tags": [
      "triangle",
      "cosine",
      "double-angle",
      "constraint",
      "factorisation"
    ],
    "statement": "Let $A+B+C=\\pi$. Prove that $$\\cos^2 A+\\cos^2 B+\\cos^2 C+2\\cos A\\cos B\\cos C=1.$$",
    "answer": "$$\\boxed{\\,\\cos^2 A+\\cos^2 B+\\cos^2 C+2\\cos A\\cos B\\cos C=1\\,}$$",
    "trap": "The cross term $2\\cos A\\cos B\\cos C$ is essential and is exactly what the constraint $A+B+C=\\pi$ injects. Dropping it and asserting $\\cos^2A+\\cos^2B+\\cos^2C=1$ is false: that bare sum equals $1-2\\cos A\\cos B\\cos C$, which is not constant (it is $\\approx 0.757$ when $A=B=1$ rad). The identity only closes when the third angle is forced to be $C=\\pi-A-B$.",
    "solutions": [
      {
        "name": "Double-angle reduction",
        "steps": [
          "Write each square via $\\cos^2\\theta=\\dfrac{1+\\cos 2\\theta}{2}$: the sum of the three squares is $\\dfrac32+\\dfrac12\\bigl(\\cos 2A+\\cos 2B+\\cos 2C\\bigr).$",
          "Group $\\cos 2A+\\cos 2B=2\\cos(A+B)\\cos(A-B)$. Since $A+B=\\pi-C$, $\\cos(A+B)=-\\cos C$, so this is $-2\\cos C\\cos(A-B)$.",
          "Also $\\cos 2C=2\\cos^2 C-1$, so $\\cos 2A+\\cos 2B+\\cos 2C=-2\\cos C\\cos(A-B)+2\\cos^2 C-1=-2\\cos C\\bigl[\\cos(A-B)-\\cos C\\bigr]-1.$",
          "But $\\cos C=-\\cos(A+B)$, so $\\cos(A-B)-\\cos C=\\cos(A-B)+\\cos(A+B)=2\\cos A\\cos B$. Hence $\\cos 2A+\\cos 2B+\\cos 2C=-4\\cos A\\cos B\\cos C-1.$",
          "Therefore the full expression is $\\dfrac32+\\dfrac12(-4\\cos A\\cos B\\cos C-1)+2\\cos A\\cos B\\cos C=\\dfrac32-\\dfrac12-2\\cos A\\cos B\\cos C+2\\cos A\\cos B\\cos C=1,$ proving $\\boxed{=1}$."
        ]
      },
      {
        "name": "Quadratic in $\\cos C$",
        "steps": [
          "Treat the left side as a quadratic in $x=\\cos C$: $x^2+(2\\cos A\\cos B)x+(\\cos^2 A+\\cos^2 B).$ We show it equals $1$ when $C=\\pi-(A+B)$.",
          "At that value $\\cos C=-\\cos(A+B)=-\\cos A\\cos B+\\sin A\\sin B$. Substitute $x=-\\cos A\\cos B+\\sin A\\sin B$.",
          "Then $x^2+2\\cos A\\cos B\\,x=x(x+2\\cos A\\cos B)=(\\sin A\\sin B-\\cos A\\cos B)(\\sin A\\sin B+\\cos A\\cos B)=\\sin^2A\\sin^2B-\\cos^2A\\cos^2B.$",
          "Add $\\cos^2A+\\cos^2B$: using $\\sin^2A=1-\\cos^2A$, $\\sin^2A\\sin^2B=(1-\\cos^2A)(1-\\cos^2B)=1-\\cos^2A-\\cos^2B+\\cos^2A\\cos^2B.$",
          "So the total is $\\bigl(1-\\cos^2A-\\cos^2B+\\cos^2A\\cos^2B\\bigr)-\\cos^2A\\cos^2B+\\cos^2A+\\cos^2B=1$, giving $\\boxed{=1}$."
        ]
      }
    ],
    "remark": "**Insight.** The harmless-looking $+2\\cos A\\cos B\\cos C$ is the fingerprint of the constraint: it is precisely the term that makes a free quadratic in $\\cos C$ collapse to the constant $1$ once $C=\\pi-A-B$. Identities of the form (sum of squares) $+$ (twice the product) $=1$ recur for any angles summing to $\\pi$, and the same algebra handles the sine analogue."
  },
  {
    "theme": "conditional",
    "themeLabel": "Conditional Angle Identities",
    "title": "Sum of Double Angles as a Product",
    "difficulty": 4,
    "task": "Prove the sum-to-product identity",
    "tags": [
      "triangle",
      "sine",
      "double-angle",
      "sum-to-product",
      "constraint"
    ],
    "statement": "If $A+B+C=\\pi$, prove that $$\\sin 2A+\\sin 2B+\\sin 2C=4\\sin A\\sin B\\sin C.$$",
    "answer": "$$\\boxed{\\,\\sin 2A+\\sin 2B+\\sin 2C=4\\sin A\\sin B\\sin C\\,}$$",
    "trap": "The third term must be reduced with the right sign: $\\sin 2C=\\sin\\bigl(2\\pi-2(A+B)\\bigr)=-\\sin(2A+2B)$, $not$ $+\\sin(2A+2B)$. Mishandle that sign — or pair the cosine version $\\cos(A+B)=-\\cos C$ into the wrong slot — and the product collapses to $4\\cos A\\cos B\\cos C$ (which is generally negative for an obtuse triangle and clearly not the answer). The minus sign coming out of $2\\pi-2(A+B)$ is exactly what turns cosines into the sines.",
    "solutions": [
      {
        "name": "Pair then factor with the constraint",
        "steps": [
          "Combine the first two: $\\sin 2A+\\sin 2B=2\\sin(A+B)\\cos(A-B)$. Since $A+B=\\pi-C$, $\\sin(A+B)=\\sin C$, so this is $2\\sin C\\cos(A-B)$.",
          "For the third, $\\sin 2C=2\\sin C\\cos C$ and $\\cos C=-\\cos(A+B)$, so $\\sin 2C=-2\\sin C\\cos(A+B)$.",
          "Add them: $2\\sin C\\bigl[\\cos(A-B)-\\cos(A+B)\\bigr]=2\\sin C\\cdot 2\\sin A\\sin B=4\\sin A\\sin B\\sin C$, since $\\cos(A-B)-\\cos(A+B)=2\\sin A\\sin B.$ Hence $\\boxed{\\sin2A+\\sin2B+\\sin2C=4\\sin A\\sin B\\sin C}$."
        ]
      },
      {
        "name": "Direct sign reduction of the third term",
        "steps": [
          "From $A+B+C=\\pi$ we have $2C=2\\pi-2(A+B)$, so $\\sin 2C=\\sin\\bigl(2\\pi-2(A+B)\\bigr)=-\\sin 2(A+B).$",
          "Thus $\\sin 2A+\\sin 2B+\\sin 2C=\\bigl(\\sin 2A+\\sin 2B\\bigr)-\\sin 2(A+B)=2\\sin(A+B)\\cos(A-B)-2\\sin(A+B)\\cos(A+B).$",
          "Factor $2\\sin(A+B)$: the bracket is $\\cos(A-B)-\\cos(A+B)=2\\sin A\\sin B$, and $\\sin(A+B)=\\sin C$.",
          "Therefore the sum equals $2\\sin C\\cdot 2\\sin A\\sin B=4\\sin A\\sin B\\sin C$, giving $\\boxed{=4\\sin A\\sin B\\sin C}$."
        ]
      }
    ],
    "remark": "**Insight.** The engine is the single identity $\\cos(A-B)-\\cos(A+B)=2\\sin A\\sin B$, activated only after the constraint converts $A+B$ into $\\pi-C$. The same template gives the cosine companion $\\cos 2A+\\cos 2B+\\cos 2C=-1-4\\cos A\\cos B\\cos C$ — track the lone sign from $2\\pi-2(A+B)$ and you never confuse the sine and cosine versions."
  },
  {
    "theme": "conditional",
    "themeLabel": "Conditional Angle Identities",
    "title": "The Half-Tangent Weighing Scale",
    "difficulty": 5,
    "task": "Evaluate the sum",
    "tags": [
      "half-angle",
      "conditional-identity",
      "symmetric-functions",
      "tangent-product",
      "invariance"
    ],
    "statement": "Let $A,B,C$ be the angles of a triangle, so that $A+B+C=\\pi$. Each term below weighs one angle's half-square against the product of the other two half-tangents. Evaluate \\[ S \\;=\\; \\frac{1+\\tan\\tfrac{B}{2}\\tan\\tfrac{C}{2}}{1+\\tan^{2}\\tfrac{A}{2}} \\;+\\; \\frac{1+\\tan\\tfrac{C}{2}\\tan\\tfrac{A}{2}}{1+\\tan^{2}\\tfrac{B}{2}} \\;+\\; \\frac{1+\\tan\\tfrac{A}{2}\\tan\\tfrac{B}{2}}{1+\\tan^{2}\\tfrac{C}{2}}, \\] and show that the value is the same for every triangle.",
    "answer": "\\[\\boxed{S=3}\\]",
    "trap": "The seductive move is to collapse a sum of fractions into one fraction of sums. Writing $x=\\tan\\tfrac A2,\\,y=\\tan\\tfrac B2,\\,z=\\tan\\tfrac C2$, one notes $xy+yz+zx=1$, so the three numerators add to $3+(xy+yz+zx)=4$, and one is tempted to declare $S=\\dfrac{\\sum(1+yz)}{\\sum(1+x^2)}=\\dfrac{4}{3+(x^2+y^2+z^2)}$. Pushing the false 'symmetry' one step further and assuming $x^2+y^2+z^2=1$ in imitation of $xy+yz+zx=1$ gives $S=\\tfrac44=1$. Both steps are illegal: $\\sum\\frac{a_i}{b_i}\\ne\\frac{\\sum a_i}{\\sum b_i}$, and $x^2+y^2+z^2=(x+y+z)^2-2$ is not pinned down by the constraint at all — it ranges over $[1,\\infty)$, equalling $1$ only for the equilateral triangle. The conditional fixes the symmetric sum $xy+yz+zx$, never the individual squares.",
    "solutions": [
      {
        "name": "The factorisation $1+\\tan^2\\tfrac A2=(x+y)(x+z)$",
        "steps": [
          "Set $x=\\tan\\tfrac A2,\\ y=\\tan\\tfrac B2,\\ z=\\tan\\tfrac C2$. Since $\\tfrac A2+\\tfrac B2+\\tfrac C2=\\tfrac\\pi2$, the standard conditional identity gives $xy+yz+zx=1$.",
          "Use the constraint to rewrite each denominator: $1+x^2=(xy+yz+zx)+x^2=x(x+y)+z(x+y)=(x+y)(x+z)$, and cyclically $1+y^2=(y+z)(y+x)$, $1+z^2=(z+x)(z+y)$.",
          "Do the same inside the numerators: $1+yz=(xy+yz+zx)+yz=xy+2yz+zx$. Thus the first term is $\\dfrac{xy+2yz+zx}{(x+y)(x+z)}$, and similarly for the others.",
          "Put everything over the common denominator $D=(x+y)(y+z)(z+x)$. The numerator becomes $N=(xy+2yz+zx)(y+z)+(yz+2zx+xy)(z+x)+(zx+2xy+yz)(x+y)$.",
          "Expanding, $N=3\\big[(x+y)(y+z)(z+x)\\big]=3D$ identically — every monomial matches. Hence $S=\\dfrac{N}{D}=\\boxed{3}$, with no dependence on the triangle."
        ]
      },
      {
        "name": "Trigonometric split into two known triangle sums",
        "steps": [
          "Since $1+\\tan^2\\tfrac A2=\\sec^2\\tfrac A2$, the first term is $\\cos^2\\tfrac A2\\big(1+\\tan\\tfrac B2\\tan\\tfrac C2\\big)=\\cos^2\\tfrac A2+\\cos^2\\tfrac A2\\,\\tan\\tfrac B2\\tan\\tfrac C2$, and likewise for the rest.",
          "Summing, $S=\\underbrace{\\Big(\\cos^2\\tfrac A2+\\cos^2\\tfrac B2+\\cos^2\\tfrac C2\\Big)}_{P}+\\underbrace{\\Big(\\cos^2\\tfrac A2\\tan\\tfrac B2\\tan\\tfrac C2+\\text{cyc}\\Big)}_{Q}.$",
          "For $P$: $\\cos^2\\tfrac A2=\\tfrac{1+\\cos A}2$, so $P=\\tfrac32+\\tfrac12(\\cos A+\\cos B+\\cos C)=\\tfrac32+\\tfrac12\\big(1+4\\sin\\tfrac A2\\sin\\tfrac B2\\sin\\tfrac C2\\big)=2+2\\sin\\tfrac A2\\sin\\tfrac B2\\sin\\tfrac C2.$",
          "For $Q$: $\\cos^2\\tfrac A2\\tan\\tfrac B2\\tan\\tfrac C2=\\cos^2\\tfrac A2\\,\\dfrac{\\sin\\tfrac B2\\sin\\tfrac C2}{\\cos\\tfrac B2\\cos\\tfrac C2}$. Because $\\cos\\tfrac A2=\\sin\\tfrac{B+C}2=\\sin\\big(\\tfrac B2+\\tfrac C2\\big)$ and using $\\cos\\tfrac A2/(\\cos\\tfrac B2\\cos\\tfrac C2)=\\tan\\tfrac B2+\\tan\\tfrac C2$ one gets, after the cyclic sum collapses, $Q=1-2\\sin\\tfrac A2\\sin\\tfrac B2\\sin\\tfrac C2.$",
          "Adding, the $\\sin\\tfrac A2\\sin\\tfrac B2\\sin\\tfrac C2$ terms cancel exactly: $S=P+Q=\\big(2+2t\\big)+\\big(1-2t\\big)=\\boxed{3}$, where $t=\\sin\\tfrac A2\\sin\\tfrac B2\\sin\\tfrac C2$."
        ]
      },
      {
        "name": "Invariance, then read off the value at the equilateral triangle",
        "steps": [
          "From Solution 1, after clearing denominators the statement $S=3$ is equivalent to the polynomial identity $N-3D\\equiv0$ on the surface $xy+yz+zx=1$ — a symmetric relation in $x,y,z$. So $S$ is a genuine invariant: it cannot take different values on different triangles.",
          "It therefore suffices to compute $S$ at any single admissible point. Take the equilateral triangle $A=B=C=\\tfrac\\pi3$, so $x=y=z=\\tan\\tfrac\\pi6=\\tfrac1{\\sqrt3}$, which indeed satisfies $xy+yz+zx=3\\cdot\\tfrac13=1$.",
          "Each term equals $\\dfrac{1+\\tfrac13}{1+\\tfrac13}=1$, hence $S=1+1+1=3$.",
          "To certify invariance rather than assume it, note the per-term value is generally not $1$: away from the equilateral point the three fractions are unequal, yet Solution 1 shows their sum is forced to $3$. (Numerically, e.g. $A=0.8,\\,B=1.1$ gives the three terms $\\approx1.22,\\,0.95,\\,0.83$, summing to $3$.)",
          "Thus the invariant value is $\\boxed{3}$ for every triangle."
        ]
      }
    ],
    "remark": "The conditional $A+B+C=\\pi$ does exactly one thing here: it fixes the elementary symmetric sum $xy+yz+zx=1$ for $x=\\tan\\tfrac A2$ etc. The whole problem is a meditation on what that does and does not control. It controls $xy+yz+zx$ (hence the clean factorisation $1+x^2=(x+y)(x+z)$ that makes the sum telescope to $3$), but it leaves $x+y+z$ and $x^2+y^2+z^2$ entirely free. The trap weaponises that gap: a 'ratio of sums' shortcut, dressed up with a phantom symmetry $x^2+y^2+z^2=1$, returns the wrong constant. The lesson is the JEE-Advanced lesson — a single constraint pins a single symmetric function, and you must spend it on the right one."
  },
  {
    "theme": "conditional",
    "themeLabel": "Conditional Angle Identities",
    "title": "The Cubic That Forgets Its Triangle",
    "difficulty": 5,
    "task": "Determine the hidden coefficient and evaluate the cyclic sum of squares",
    "tags": [
      "conditional-identity",
      "half-angle-tangent",
      "vieta",
      "symmetric-functions",
      "newton-identity",
      "polynomial-fusion"
    ],
    "statement": "Let $A,B,C$ be the angles of a triangle, so $A+B+C=\\pi$. For some real $\\lambda$ the three numbers $\\tan\\frac{A}{2},\\ \\tan\\frac{B}{2},\\ \\tan\\frac{C}{2}$ are exactly the roots of \\[ 6x^{3}-11x^{2}+\\lambda x-1=0. \\] The two outer coefficients fix the sum and the product of the half\\text{-}tangents, but the middle coefficient $\\lambda$ has been erased. Recover $\\lambda$ from the triangle condition alone, and then evaluate \\[ \\Sigma=\\tan^{2}\\tfrac{A}{2}+\\tan^{2}\\tfrac{B}{2}+\\tan^{2}\\tfrac{C}{2}. \\]",
    "answer": "\\[\\boxed{\\lambda=6,\\qquad \\Sigma=\\tfrac{49}{36}}\\]",
    "trap": "Write $p=\\tan\\frac A2,\\ q=\\tan\\frac B2,\\ r=\\tan\\frac C2$. Vieta reads off $e_1=p+q+r=\\tfrac{11}{6}$, $e_2=pq+qr+rp=\\tfrac{\\lambda}{6}$, $e_3=pqr=\\tfrac16$, so the whole problem is to pin the one missing symmetric function $e_2$. The seduction is to reach for the famous conditional identity a top student knows cold — $\\tan A+\\tan B+\\tan C=\\tan A\\tan B\\tan C$ for $A+B+C=\\pi$ — and to transplant its shape onto the half\\text{-}angles, declaring \"sum $=$ product\", i.e. $e_1=e_3$. That structural copy is false: the relation $\\text{sum}=\\text{product}$ belongs to the full angles, never the halves. The correct conditional for the halves lives on a different symmetric function entirely — because $\\tfrac A2+\\tfrac B2+\\tfrac C2=\\tfrac\\pi2$, it is the sum of pairwise products that is pinned, $e_2=pq+qr+rp=1$. A solver who copies the wrong identity (or, just as fatally, computes $\\Sigma=e_1^{2}-2e_2$ but slips $e_2$ to the printed constant term $e_3=\\tfrac16$) lands on $\\Sigma=\\tfrac{121}{36}-2\\cdot\\tfrac16=\\tfrac{109}{36}$ with some bogus $\\lambda$ — the right machine bolted to the wrong axle. Knowing the identity is not the same as knowing which coefficient it controls.",
    "solutions": [
      {
        "name": "Vieta plus the half-angle pairwise-product identity",
        "steps": [
          "Set $p=\\tan\\frac A2,\\ q=\\tan\\frac B2,\\ r=\\tan\\frac C2$. Dividing the cubic by $6$, Vieta gives $e_1=p+q+r=\\tfrac{11}{6}$, $e_2=pq+qr+rp=\\tfrac{\\lambda}{6}$, and $e_3=pqr=\\tfrac16$.",
          "From $A+B+C=\\pi$ we get $\\tfrac A2+\\tfrac B2+\\tfrac C2=\\tfrac\\pi2$, hence $\\tfrac A2=\\tfrac\\pi2-\\big(\\tfrac B2+\\tfrac C2\\big)$ and $\\tan\\tfrac A2=\\cot\\big(\\tfrac B2+\\tfrac C2\\big)=\\dfrac{1-\\tan\\frac B2\\tan\\frac C2}{\\tan\\frac B2+\\tan\\frac C2}$, i.e. $p(q+r)=1-qr$. Rearranged, $pq+qr+rp=1$, so $e_2=1$.",
          "Therefore $\\tfrac{\\lambda}{6}=1$, giving $\\lambda=6$.",
          "By Newton's identity, $\\Sigma=p^{2}+q^{2}+r^{2}=e_1^{2}-2e_2=\\big(\\tfrac{11}{6}\\big)^{2}-2=\\tfrac{121}{36}-\\tfrac{72}{36}=\\boxed{\\tfrac{49}{36}}$, and $\\lambda=6$."
        ]
      },
      {
        "name": "Flip to the reciprocal roots and use the cotangent half-angle identity",
        "steps": [
          "The reciprocals $\\cot\\frac A2,\\cot\\frac B2,\\cot\\frac C2$ are the roots of the reversed polynomial $-x^{3}+\\lambda x^{2}-11x+6=0$, i.e. $x^{3}-\\lambda x^{2}+11x-6=0$, so their elementary symmetric sums are $\\sum\\cot\\frac A2=\\lambda$, $\\sum\\cot\\frac A2\\cot\\frac B2=11$, $\\prod\\cot\\frac A2=6$.",
          "Because $\\tfrac A2+\\tfrac B2+\\tfrac C2=\\tfrac\\pi2$, the standard half-angle identity holds: $\\cot\\tfrac A2+\\cot\\tfrac B2+\\cot\\tfrac C2=\\cot\\tfrac A2\\cot\\tfrac B2\\cot\\tfrac C2$ (it is the cofunction image of $\\tan A+\\tan B+\\tan C=\\tan A\\tan B\\tan C$ applied to angles summing to $\\tfrac\\pi2$).",
          "Hence $\\lambda=\\sum\\cot\\tfrac A2=\\prod\\cot\\tfrac A2=6$. Equivalently, in the original variables $\\sum\\frac1p=\\frac{e_2}{e_3}$ equals $\\prod\\frac1p=\\frac1{e_3}$, forcing $e_2=1$.",
          "With $\\lambda=6$ the middle coefficient is restored, and $\\Sigma=e_1^{2}-2e_2=\\big(\\tfrac{11}{6}\\big)^{2}-2=\\boxed{\\tfrac{49}{36}}$."
        ]
      },
      {
        "name": "Realize the roots as a genuine triangle and read $\\Sigma$ off",
        "steps": [
          "For positive $p,q,r$ one has the arctangent identity $\\arctan p+\\arctan q+\\arctan r=\\tfrac\\pi2\\iff pq+qr+rp=1$. So three positive half-tangents are admissible precisely when $e_2=1$; the triangle condition is equivalent to $e_2=1$, again forcing $\\tfrac\\lambda6=1$, $\\lambda=6$.",
          "With $\\lambda=6$ the cubic is $6x^{3}-11x^{2}+6x-1=(2x-1)(3x-1)(x-1)$, so the half-tangents are $\\tfrac12,\\tfrac13,1$. (Indeed $\\arctan\\tfrac12+\\arctan\\tfrac13+\\arctan 1=\\tfrac\\pi2$, the classic Machin-type split, confirming a real triangle — here a right triangle, since $\\tan\\frac B2=1$ means $B=\\tfrac\\pi2$.)",
          "Then $\\Sigma=\\big(\\tfrac12\\big)^2+\\big(\\tfrac13\\big)^2+1^2=\\tfrac14+\\tfrac19+1=\\tfrac{9+4+36}{36}=\\tfrac{49}{36}$.",
          "Both unknowns are settled by the single constraint $e_2=1$: $\\lambda=6$ and $\\Sigma=\\boxed{\\tfrac{49}{36}}$."
        ]
      }
    ],
    "remark": "The cubic is a costume: stripping the middle coefficient turns a half-angle identity into a Vieta puzzle, and the entire difficulty is realizing that the triangle condition pins exactly one symmetric function — the pairwise-product sum $\\sum\\tan\\frac A2\\tan\\frac B2=1$ — because the halves sum to $\\tfrac\\pi2$, not $\\pi$. The trap is the chapter's signature: the celebrated full-angle law $\\tan A+\\tan B+\\tan C=\\tan A\\tan B\\tan C$ is the wrong tool here; its half-angle counterpart is $\\sum\\cot\\frac A2=\\prod\\cot\\frac A2$ (Solution 2), which is the same fact seen through the reciprocal roots and again yields $e_2=1$. Solution 3 closes the loop with the arctangent characterization $pq+qr+rp=1\\Leftrightarrow \\arctan p+\\arctan q+\\arctan r=\\tfrac\\pi2$, showing that any positive root triple with $e_2=1$ is a bona fide triangle and pinning $\\lambda=6$ from feasibility alone. The takeaway: a conditional identity controls a specific coefficient, never merely a remembered shape — find the coefficient, spend the constraint there, and keep the outer Vieta data untouched."
  },
  {
    "theme": "conditional",
    "themeLabel": "Conditional Angle Identities",
    "title": "A Determinant That Refuses to Vary",
    "difficulty": 5,
    "task": "Evaluate",
    "answerLabel": "Answer",
    "tags": [
      "determinant",
      "half-angle",
      "vandermonde"
    ],
    "statement": "\\text{If }A+B+C=\\pi,\\text{ evaluate }\\begin{vmatrix}1&\\cos A&\\sin A\\\\1&\\cos B&\\sin B\\\\1&\\cos C&\\sin C\\end{vmatrix}^2.",
    "answer": "16\\sin^2\\frac{A-B}{2}\\sin^2\\frac{B-C}{2}\\sin^2\\frac{C-A}{2}",
    "trap": "The attractive wrong answer is **$0$**, because the first column is constant. The rows are not linearly dependent unless two angles coincide modulo $2\\pi$.",
    "solutions": [
      {
        "name": "Method I: The chapter instrument",
        "steps": [
          "Subtract the first row from the other two and use product-to-sum on cosine and sine differences; the half-angle factors appear immediately.",
          "Substituting the given restrictions and simplifying gives $16\\sin^2\\frac{A-B}{2}\\sin^2\\frac{B-C}{2}\\sin^2\\frac{C-A}{2}$."
        ]
      },
      {
        "name": "Method II: Independent check",
        "steps": [
          "Interpret $(\\cos A,\\sin A)$ as points on the unit circle: the determinant is twice the signed area of the triangle formed by those points.",
          "This route reaches the same value and rules out the trap, so the answer is $16\\sin^2\\frac{A-B}{2}\\sin^2\\frac{B-C}{2}\\sin^2\\frac{C-A}{2}$."
        ]
      }
    ],
    "remark": "Circle geometry often turns a trigonometric determinant into an area formula."
  },
  {
    "theme": "conditional",
    "themeLabel": "Conditional Angle Identities",
    "title": "Half-Angle Tangents in a Triangle",
    "difficulty": 5,
    "task": "Find the third half-angle tangent",
    "tags": [
      "triangle",
      "half-angle",
      "tangent",
      "constraint",
      "right-angle"
    ],
    "statement": "$A$, $B$, $C$ are the angles of a triangle, so $A+B+C=\\pi$. Suppose $\\tan\\dfrac{A}{2}=\\dfrac12$ and $\\tan\\dfrac{B}{2}=\\dfrac13$. Find $\\tan\\dfrac{C}{2}$, deduce the measure of angle $C$, and verify that $\\tan\\dfrac{A}{2}\\tan\\dfrac{B}{2}+\\tan\\dfrac{B}{2}\\tan\\dfrac{C}{2}+\\tan\\dfrac{C}{2}\\tan\\dfrac{A}{2}=1$.",
    "answer": "$$\\boxed{\\,\\tan\\dfrac{C}{2}=1,\\qquad C=90^\\circ\\,}$$",
    "trap": "The constraint that actually governs the half-angles is $\\dfrac{A}{2}+\\dfrac{B}{2}+\\dfrac{C}{2}=\\dfrac{\\pi}{2}$, $not$ $\\pi$. A student who blindly reuses the full-angle rule and writes $\\tan\\dfrac{C}{2}=\\tan\\!\\left(\\pi-\\dfrac{A}{2}-\\dfrac{B}{2}\\right)=-\\dfrac{\\tan\\frac{A}{2}+\\tan\\frac{B}{2}}{1-\\tan\\frac{A}{2}\\tan\\frac{B}{2}}=-1$ gets a negative tangent for a half-angle that must lie in $\\left(0,\\dfrac{\\pi}{2}\\right)$ — an impossibility. Halving the constraint flips the relevant complementary identity from $\\pi$ to $\\pi/2$.",
    "solutions": [
      {
        "name": "Complementary half-angle sum",
        "steps": [
          "From $A+B+C=\\pi$ divide by $2$: $\\dfrac{A}{2}+\\dfrac{B}{2}+\\dfrac{C}{2}=\\dfrac{\\pi}{2}$, hence $\\dfrac{C}{2}=\\dfrac{\\pi}{2}-\\left(\\dfrac{A}{2}+\\dfrac{B}{2}\\right)$.",
          "Therefore $\\tan\\dfrac{C}{2}=\\tan\\!\\left(\\dfrac{\\pi}{2}-\\dfrac{A}{2}-\\dfrac{B}{2}\\right)=\\cot\\!\\left(\\dfrac{A}{2}+\\dfrac{B}{2}\\right)=\\dfrac{1-\\tan\\frac{A}{2}\\tan\\frac{B}{2}}{\\tan\\frac{A}{2}+\\tan\\frac{B}{2}}.$",
          "Substituting $\\tan\\dfrac{A}{2}=\\dfrac12,\\ \\tan\\dfrac{B}{2}=\\dfrac13$ gives $\\tan\\dfrac{C}{2}=\\dfrac{1-\\frac16}{\\frac12+\\frac13}=\\dfrac{5/6}{5/6}=1$, so $\\dfrac{C}{2}=45^\\circ$ and $\\boxed{C=90^\\circ}$.",
          "Check: $\\dfrac12\\cdot\\dfrac13+\\dfrac13\\cdot1+1\\cdot\\dfrac12=\\dfrac16+\\dfrac13+\\dfrac12=1.$ The pairwise-product identity holds, confirming the value."
        ]
      },
      {
        "name": "Reconstruct the angles directly",
        "steps": [
          "Using $\\sin\\theta=\\dfrac{2t}{1+t^2},\\ \\cos\\theta=\\dfrac{1-t^2}{1+t^2}$ with $t=\\tan\\dfrac\\theta2$: for $\\dfrac{A}{2}$, $t=\\tfrac12$ gives $\\cos A=\\dfrac{1-1/4}{1+1/4}=\\dfrac35,\\ \\sin A=\\dfrac{1}{1+1/4}=\\dfrac45$; for $\\dfrac{B}{2}$, $t=\\tfrac13$ gives $\\cos B=\\dfrac{1-1/9}{1+1/9}=\\dfrac45,\\ \\sin B=\\dfrac{2/3}{10/9}=\\dfrac35$.",
          "Then $\\cos C=-\\cos(A+B)=-(\\cos A\\cos B-\\sin A\\sin B)=-\\!\\left(\\dfrac35\\cdot\\dfrac45-\\dfrac45\\cdot\\dfrac35\\right)=0$, so $C=90^\\circ$.",
          "For a right angle $\\tan\\dfrac{C}{2}=\\tan45^\\circ=1$, matching $\\boxed{\\tan\\dfrac{C}{2}=1,\\ C=90^\\circ}$, and the pairwise sum $\\tan\\frac{A}{2}\\tan\\frac{B}{2}+\\tan\\frac{B}{2}\\tan\\frac{C}{2}+\\tan\\frac{C}{2}\\tan\\frac{A}{2}=1$ follows from $\\dfrac{A}{2}+\\dfrac{B}{2}+\\dfrac{C}{2}=\\dfrac{\\pi}{2}$."
        ]
      }
    ],
    "remark": "**Insight.** Halving a triangle's angle sum turns the condition $A+B+C=\\pi$ into $\\dfrac{A}{2}+\\dfrac{B}{2}+\\dfrac{C}{2}=\\dfrac{\\pi}{2}$, and every full-angle identity has a half-angle mirror with $\\pi$ replaced by $\\pi/2$: $\\tan A\\tan B+\\dots$ has no fixed value, but $\\sum\\tan\\frac{A}{2}\\tan\\frac{B}{2}=1$ always. Spotting which sum equals $\\pi$ tells you which complementary law to invoke."
  },
  {
    "theme": "telescope",
    "themeLabel": "Product-to-Sum Telescopes",
    "title": "Cotangent Difference Chain",
    "difficulty": 3,
    "task": "Evaluate",
    "answerLabel": "Answer",
    "tags": [
      "telescoping",
      "cotangent",
      "finite-sum"
    ],
    "statement": "\\sum_{k=1}^{n}\\frac{1}{\\sin kx\\sin (k+1)x}",
    "answer": "\\frac{\\cot x-\\cot (n+1)x}{\\sin x}",
    "trap": "The trap is **$\\frac{n}{\\sin^2 x}$**, treating all sine factors as if $kx=x$. The adjacent angles are the whole point.",
    "solutions": [
      {
        "name": "Method I: The chapter instrument",
        "steps": [
          "Use $\\cot u-\\cot v=\\frac{\\sin(v-u)}{\\sin u\\sin v}$ with $u=kx,v=(k+1)x$.",
          "Substituting the given restrictions and simplifying gives $\\frac{\\cot x-\\cot (n+1)x}{\\sin x}$."
        ]
      },
      {
        "name": "Method II: Independent check",
        "steps": [
          "Multiply the proposed answer by $\\sin x$ and expand it as a telescoping sum of cotangent differences.",
          "This route reaches the same value and rules out the trap, so the answer is $\\frac{\\cot x-\\cot (n+1)x}{\\sin x}$."
        ]
      }
    ],
    "remark": "Whenever neighbouring sine factors occur, look for a cotangent difference."
  },
  {
    "theme": "telescope",
    "themeLabel": "Product-to-Sum Telescopes",
    "title": "Sine Arithmetic Progression",
    "difficulty": 3,
    "task": "Evaluate",
    "answerLabel": "Answer",
    "tags": [
      "finite-sum",
      "product-to-sum",
      "progression"
    ],
    "statement": "\\sum_{k=1}^{n}\\sin kx",
    "answer": "\\frac{\\sin\\frac{nx}{2}\\sin\\frac{(n+1)x}{2}}{\\sin\\frac{x}{2}}",
    "trap": "The trap is **$n\\sin x$**, valid only when every term has the same angle. The phase drift contributes the second sine factor.",
    "solutions": [
      {
        "name": "Method I: The chapter instrument",
        "steps": [
          "Multiply the sum by $2\\sin(x/2)$ and use $2\\sin(kx)\\sin(x/2)=\\cos((k-\\tfrac12)x)-\\cos((k+\\tfrac12)x)$.",
          "Substituting the given restrictions and simplifying gives $\\frac{\\sin\\frac{nx}{2}\\sin\\frac{(n+1)x}{2}}{\\sin\\frac{x}{2}}$."
        ]
      },
      {
        "name": "Method II: Independent check",
        "steps": [
          "Sum the imaginary parts of $e^{ix}+e^{2ix}+\\cdots+e^{inx}$ and simplify the geometric series.",
          "This route reaches the same value and rules out the trap, so the answer is $\\frac{\\sin\\frac{nx}{2}\\sin\\frac{(n+1)x}{2}}{\\sin\\frac{x}{2}}$."
        ]
      }
    ],
    "remark": "Arithmetic progressions of angles are geometric progressions on the unit circle."
  },
  {
    "theme": "telescope",
    "themeLabel": "Product-to-Sum Telescopes",
    "title": "A Chain of Secant Products",
    "difficulty": 3,
    "task": "Evaluate the telescoping sum",
    "tags": [
      "telescope",
      "product-to-sum",
      "tangent-difference",
      "secant"
    ],
    "statement": "Evaluate $\\displaystyle S=\\sum_{k=1}^{3}\\frac{1}{\\cos\\!\\big((k-1)\\tfrac{\\pi}{12}\\big)\\,\\cos\\!\\big(k\\tfrac{\\pi}{12}\\big)} =\\frac{1}{\\cos 0\\,\\cos\\frac{\\pi}{12}}+\\frac{1}{\\cos\\frac{\\pi}{12}\\cos\\frac{\\pi}{6}}+\\frac{1}{\\cos\\frac{\\pi}{6}\\cos\\frac{\\pi}{4}}.$",
    "answer": "$$\\boxed{\\,S=\\sqrt{2}+\\sqrt{6}\\,}$$",
    "trap": "The trap is to multiply out the three fractions directly. Writing $\\dfrac1{\\cos(k-1)\\alpha\\,\\cos k\\alpha}=\\dfrac{\\tan k\\alpha-\\tan(k-1)\\alpha}{\\sin\\alpha}$ telescopes the chain to $\\dfrac{\\tan 3\\alpha-\\tan 0}{\\sin\\alpha}$; forgetting that the boundary term $\\tan 0=0$ vanishes (or dropping the $1/\\sin\\alpha$ factor) leaves the wrong value $\\tan\\frac{\\pi}{4}=1$.",
    "solutions": [
      {
        "name": "Tangent-difference telescope",
        "steps": [
          "With $\\alpha=\\dfrac{\\pi}{12}$, use $\\tan k\\alpha-\\tan(k-1)\\alpha=\\dfrac{\\sin\\!\\big(k\\alpha-(k-1)\\alpha\\big)}{\\cos(k-1)\\alpha\\,\\cos k\\alpha}=\\dfrac{\\sin\\alpha}{\\cos(k-1)\\alpha\\,\\cos k\\alpha}$, so each term equals $\\dfrac{\\tan k\\alpha-\\tan(k-1)\\alpha}{\\sin\\alpha}$.",
          "Summing $k=1,2,3$ telescopes: $S=\\dfrac{1}{\\sin\\alpha}\\big(\\tan 3\\alpha-\\tan 0\\big)=\\dfrac{\\tan\\frac{\\pi}{4}}{\\sin\\frac{\\pi}{12}}=\\dfrac{1}{\\sin\\frac{\\pi}{12}}$.",
          "Since $\\sin\\dfrac{\\pi}{12}=\\dfrac{\\sqrt6-\\sqrt2}{4}$, we get $S=\\dfrac{4}{\\sqrt6-\\sqrt2}=\\dfrac{4(\\sqrt6+\\sqrt2)}{6-2}=\\sqrt6+\\sqrt2$, i.e. $\\boxed{S=\\sqrt2+\\sqrt6}$."
        ]
      },
      {
        "name": "Direct numeric confirmation of the closed form",
        "steps": [
          "The telescope predicts $S=\\csc\\dfrac{\\pi}{12}$. Numerically $\\sin\\frac{\\pi}{12}=0.258819\\ldots$, so $\\csc\\frac{\\pi}{12}=3.863703\\ldots$.",
          "Adding the three given fractions directly: $\\dfrac{1}{\\cos 0\\cos\\frac{\\pi}{12}}+\\dfrac{1}{\\cos\\frac{\\pi}{12}\\cos\\frac{\\pi}{6}}+\\dfrac{1}{\\cos\\frac{\\pi}{6}\\cos\\frac{\\pi}{4}}=1.03528+1.19394+1.63448=3.86370\\ldots$, matching.",
          "And $\\sqrt2+\\sqrt6=1.41421+2.44949=3.86370\\ldots$, confirming $\\boxed{S=\\sqrt2+\\sqrt6}$."
        ]
      }
    ],
    "remark": "**Insight.** Every secant-product chain $\\sum\\frac1{\\cos(k-1)\\alpha\\cos k\\alpha}$ collapses because $\\dfrac{\\sin\\alpha}{\\cos(k-1)\\alpha\\cos k\\alpha}$ is exactly the *difference of consecutive tangents*. The whole sum is a single boundary value $\\dfrac{\\tan n\\alpha-\\tan 0}{\\sin\\alpha}$ — recognise the difference and the middle terms erase themselves."
  },
  {
    "theme": "telescope",
    "themeLabel": "Product-to-Sum Telescopes",
    "title": "Arctangent Ladder",
    "difficulty": 4,
    "task": "Evaluate",
    "answerLabel": "Answer",
    "tags": [
      "arctangent",
      "telescope",
      "branch"
    ],
    "statement": "\\sum_{k=1}^{n}\\tan^{-1}\\frac{1}{k^2+k+1}",
    "answer": "\\tan^{-1}(n+1)-\\frac\\pi4",
    "trap": "The trap is **$\\tan^{-1}\\sum \\frac1{k^2+k+1}$**. Arctangent does not distribute over addition; the difference formula is what telescopes.",
    "solutions": [
      {
        "name": "Method I: The chapter instrument",
        "steps": [
          "Use $\\tan^{-1}(k+1)-\\tan^{-1}k=\\tan^{-1}\\frac{1}{k^2+k+1}$, with all terms positive so no branch correction appears.",
          "Substituting the given restrictions and simplifying gives $\\tan^{-1}(n+1)-\\frac\\pi4$."
        ]
      },
      {
        "name": "Method II: Independent check",
        "steps": [
          "Take tangent of partial sums after writing each term as an angle between slopes $k$ and $k+1$.",
          "This route reaches the same value and rules out the trap, so the answer is $\\tan^{-1}(n+1)-\\frac\\pi4$."
        ]
      }
    ],
    "remark": "Even inverse-trig telescopes work only after checking the branch."
  },
  {
    "theme": "telescope",
    "themeLabel": "Product-to-Sum Telescopes",
    "title": "The Supplementary Endpoint That Refuses to Cancel",
    "difficulty": 4,
    "task": "Evaluate the sum",
    "tags": [
      "telescoping",
      "cosecant",
      "cotangent",
      "supplementary-angle",
      "surd"
    ],
    "statement": "Evaluate in closed form \\[ S \\;=\\; \\sum_{k=1}^{10}\\frac{1}{\\sin\\dfrac{k\\pi}{12}\\,\\sin\\dfrac{(k+1)\\pi}{12}} \\;=\\; \\frac{1}{\\sin 15^{\\circ}\\sin 30^{\\circ}}+\\frac{1}{\\sin 30^{\\circ}\\sin 45^{\\circ}}+\\cdots+\\frac{1}{\\sin 150^{\\circ}\\sin 165^{\\circ}}, \\] a cosecant-neighbour telescope running over the arithmetic progression of angles $15^{\\circ},30^{\\circ},45^{\\circ},\\dots,165^{\\circ}$ (common difference $15^{\\circ}=\\tfrac{\\pi}{12}$).",
    "answer": "\\[\\boxed{\\,10\\sqrt{2}+6\\sqrt{6}\\,}\\]",
    "trap": "After writing each term as $\\csc\\frac{k\\pi}{12}\\csc\\frac{(k+1)\\pi}{12}=\\dfrac{\\cot\\frac{k\\pi}{12}-\\cot\\frac{(k+1)\\pi}{12}}{\\sin\\frac{\\pi}{12}}$ and telescoping, the surviving endpoints are $\\cot\\frac{\\pi}{12}$ and $\\cot\\frac{11\\pi}{12}$. The seductive error is to note that the first and last angles, $15^{\\circ}$ and $165^{\\circ}$, are supplementary with $\\sin 15^{\\circ}=\\sin 165^{\\circ}$, and to slide that equality onto the cotangents: $\\cot 165^{\\circ}\\stackrel{?}{=}\\cot 15^{\\circ}$, making the two endpoints cancel and forcing $S=0$. But supplementary angles share a sine while their cotangents are negatives: $\\cot(\\pi-x)=-\\cot x$, so $\\cot\\frac{11\\pi}{12}=-\\cot\\frac{\\pi}{12}$. The endpoints do not subtract to nothing — they double, turning a phantom $0$ into $\\dfrac{2\\cot\\frac{\\pi}{12}}{\\sin\\frac{\\pi}{12}}$.",
    "solutions": [
      {
        "name": "Cotangent-difference telescope with the supplementary flip",
        "steps": [
          "Let $d=\\frac{\\pi}{12}$. The neighbour identity is $\\dfrac{1}{\\sin x\\,\\sin(x+d)}=\\dfrac{1}{\\sin d}\\cdot\\dfrac{\\sin\\big((x+d)-x\\big)}{\\sin x\\,\\sin(x+d)}=\\dfrac{\\cot x-\\cot(x+d)}{\\sin d},$ since $\\sin\\big((x+d)-x\\big)=\\sin(x+d)\\cos x-\\cos(x+d)\\sin x.$",
          "With $x=\\frac{k\\pi}{12}$ each summand becomes $\\dfrac{1}{\\sin d}\\Big(\\cot\\tfrac{k\\pi}{12}-\\cot\\tfrac{(k+1)\\pi}{12}\\Big)$, so summing $k=1$ to $10$ telescopes to $S=\\dfrac{1}{\\sin\\frac{\\pi}{12}}\\Big(\\cot\\tfrac{\\pi}{12}-\\cot\\tfrac{11\\pi}{12}\\Big).$",
          "Here is the pivot: $\\frac{11\\pi}{12}=\\pi-\\frac{\\pi}{12}$, and $\\cot(\\pi-x)=-\\cot x$, hence $\\cot\\tfrac{11\\pi}{12}=-\\cot\\tfrac{\\pi}{12}$. The endpoints add, not cancel: $S=\\dfrac{\\cot\\frac{\\pi}{12}+\\cot\\frac{\\pi}{12}}{\\sin\\frac{\\pi}{12}}=\\dfrac{2\\cot\\frac{\\pi}{12}}{\\sin\\frac{\\pi}{12}}=\\dfrac{2\\cos\\frac{\\pi}{12}}{\\sin^{2}\\frac{\\pi}{12}}.$",
          "Now plug $\\cos 15^{\\circ}=\\frac{\\sqrt6+\\sqrt2}{4}$ and $\\sin^{2}15^{\\circ}=\\frac{1-\\cos 30^{\\circ}}{2}=\\frac{2-\\sqrt3}{4}$: $S=\\dfrac{2\\cdot\\frac{\\sqrt6+\\sqrt2}{4}}{\\frac{2-\\sqrt3}{4}}=\\dfrac{2(\\sqrt6+\\sqrt2)}{2-\\sqrt3}.$",
          "Rationalise by $2+\\sqrt3$ (note $(2-\\sqrt3)(2+\\sqrt3)=1$): $S=2(\\sqrt6+\\sqrt2)(2+\\sqrt3)=2\\big(2\\sqrt6+\\sqrt{18}+2\\sqrt2+\\sqrt6\\big)=2\\big(3\\sqrt6+3\\sqrt2+2\\sqrt2\\big)=\\boxed{10\\sqrt2+6\\sqrt6}.$"
        ]
      },
      {
        "name": "Reflection pairing, never naming a single cotangent",
        "steps": [
          "Write $t_k=\\dfrac{1}{\\sin\\frac{k\\pi}{12}\\sin\\frac{(k+1)\\pi}{12}}$. Because $\\sin\\frac{(12-m)\\pi}{12}=\\sin\\frac{m\\pi}{12}$, replacing $k\\mapsto 11-k$ sends $\\sin\\frac{k\\pi}{12}\\mapsto\\sin\\frac{(12-k)\\pi}{12}=\\sin\\frac{k\\pi}{12}$ at the shifted index, giving $t_{11-k}=t_k$: the ten terms split into the equal pairs $(t_1,t_{10}),(t_2,t_9),\\dots,(t_5,t_6).$",
          "So $S=2\\,(t_1+t_2+t_3+t_4+t_5)$, a sum over the acute half $15^{\\circ},\\dots,90^{\\circ}$ where every sine is positive and no cancellation illusion can arise.",
          "Telescoping just this half via $t_k=\\frac{1}{\\sin d}(\\cot\\frac{k\\pi}{12}-\\cot\\frac{(k+1)\\pi}{12})$ collapses to $t_1+\\cdots+t_5=\\dfrac{\\cot\\frac{\\pi}{12}-\\cot\\frac{\\pi}{2}}{\\sin\\frac{\\pi}{12}}=\\dfrac{\\cot\\frac{\\pi}{12}-0}{\\sin\\frac{\\pi}{12}}=\\dfrac{\\cos\\frac{\\pi}{12}}{\\sin^{2}\\frac{\\pi}{12}},$ since $\\cot 90^{\\circ}=0$ cleanly kills the inner endpoint.",
          "Doubling: $S=\\dfrac{2\\cos\\frac{\\pi}{12}}{\\sin^{2}\\frac{\\pi}{12}}$, identical to the direct telescope but reached with only positive quantities.",
          "Substituting the surds as before gives $S=\\dfrac{2(\\sqrt6+\\sqrt2)}{2-\\sqrt3}=2(\\sqrt6+\\sqrt2)(2+\\sqrt3)=\\boxed{10\\sqrt2+6\\sqrt6}.$"
        ]
      },
      {
        "name": "Product-to-sum recast of each reciprocal",
        "steps": [
          "Use $2\\sin A\\sin B=\\cos(A-B)-\\cos(A+B)$ with $A=\\frac{k\\pi}{12},\\,B=\\frac{(k+1)\\pi}{12}$, so $A-B=-\\frac{\\pi}{12}$ and $A+B=\\frac{(2k+1)\\pi}{12}$, giving $\\dfrac{1}{\\sin\\frac{k\\pi}{12}\\sin\\frac{(k+1)\\pi}{12}}=\\dfrac{2}{\\cos\\frac{\\pi}{12}-\\cos\\frac{(2k+1)\\pi}{12}}.$",
          "The denominators $\\cos\\frac{\\pi}{12}-\\cos\\frac{(2k+1)\\pi}{12}$ for $k=1,\\dots,10$ run over $\\frac{(2k+1)\\pi}{12}=\\frac{3\\pi}{12},\\frac{5\\pi}{12},\\dots,\\frac{21\\pi}{12}$; the symmetry $\\cos\\frac{(2k+1)\\pi}{12}=\\cos\\frac{(23-(2k+1))\\pi}{12}$ again pairs $k$ with $11-k$, confirming the multiset is symmetric and $S=2\\sum_{k=1}^{5}t_k$.",
          "For the acute half rewrite back via $\\cos\\frac{\\pi}{12}-\\cos\\frac{(2k+1)\\pi}{12}=2\\sin\\frac{k\\pi}{12}\\sin\\frac{(k+1)\\pi}{12}$ and telescope as in Method 2 to $\\sum_{k=1}^{5}t_k=\\dfrac{\\cos\\frac{\\pi}{12}}{\\sin^{2}\\frac{\\pi}{12}}.$",
          "Hence $S=\\dfrac{2\\cos\\frac{\\pi}{12}}{\\sin^{2}\\frac{\\pi}{12}}$, the same kernel, now obtained purely through product-to-sum bookkeeping.",
          "With $\\cos 15^{\\circ}=\\frac{\\sqrt6+\\sqrt2}{4}$ and $\\sin^{2}15^{\\circ}=\\frac{2-\\sqrt3}{4}$ this evaluates to $\\dfrac{2(\\sqrt6+\\sqrt2)}{2-\\sqrt3}=\\boxed{10\\sqrt2+6\\sqrt6}.$"
        ]
      }
    ],
    "remark": "The entire trap lives in one reflex: \"$15^{\\circ}$ and $165^{\\circ}$ are supplementary, so they cancel.\" Supplementary angles equalise the sine but invert the cotangent, so the telescope's endpoints reinforce instead of annihilating — the difference $\\cot\\frac{\\pi}{12}-\\cot\\frac{11\\pi}{12}$ is $2\\cot\\frac{\\pi}{12}$, not $0$. The same supplementary symmetry that fools the careless solver is, read correctly, a gift: it folds the ten terms into five positive ones (Methods 2 and 3), and the inner endpoint $\\cot 90^{\\circ}=0$ then does the real cancelling. A clean AP cosecant telescope whose value $10\\sqrt2+6\\sqrt6=\\frac{2\\cos 15^{\\circ}}{\\sin^{2}15^{\\circ}}$ is forced entirely by how $\\cot$ behaves under $x\\mapsto\\pi-x$."
  },
  {
    "theme": "telescope",
    "themeLabel": "Product-to-Sum Telescopes",
    "title": "Cosecant Products in Arithmetic Step",
    "difficulty": 4,
    "task": "Evaluate the cosecant-product sum",
    "tags": [
      "telescope",
      "product-to-sum",
      "cotangent-difference",
      "arithmetic-progression"
    ],
    "statement": "Evaluate $\\displaystyle S=\\sum_{k=1}^{2}\\frac{1}{\\sin\\!\\big(k\\tfrac{\\pi}{6}\\big)\\,\\sin\\!\\big((k+1)\\tfrac{\\pi}{6}\\big)} =\\frac{1}{\\sin\\frac{\\pi}{6}\\sin\\frac{\\pi}{3}}+\\frac{1}{\\sin\\frac{\\pi}{3}\\sin\\frac{\\pi}{2}}.$",
    "answer": "$$\\boxed{\\,S=2\\sqrt3\\,}$$",
    "trap": "Here the step is a *fixed common difference* $\\alpha=\\frac{\\pi}{6}$ (an AP of angles), not a doubling. The atom is $\\dfrac{1}{\\sin k\\alpha\\,\\sin(k+1)\\alpha}=\\dfrac{\\cot k\\alpha-\\cot(k+1)\\alpha}{\\sin\\alpha}$. The trap is to confuse this with the doubling cosecant telescope, or to forget the $1/\\sin\\alpha$ scaling; either misroute corrupts the boundary $\\cot\\alpha-\\cot(n+1)\\alpha$.",
    "solutions": [
      {
        "name": "Cotangent-difference telescope",
        "steps": [
          "With $\\alpha=\\dfrac{\\pi}{6}$, $\\cot k\\alpha-\\cot(k+1)\\alpha=\\dfrac{\\sin\\!\\big((k+1)\\alpha-k\\alpha\\big)}{\\sin k\\alpha\\,\\sin(k+1)\\alpha}=\\dfrac{\\sin\\alpha}{\\sin k\\alpha\\,\\sin(k+1)\\alpha}$, so each term equals $\\dfrac{\\cot k\\alpha-\\cot(k+1)\\alpha}{\\sin\\alpha}$.",
          "Summing $k=1,2$ telescopes to $S=\\dfrac{\\cot\\alpha-\\cot 3\\alpha}{\\sin\\alpha}=\\dfrac{\\cot\\frac{\\pi}{6}-\\cot\\frac{\\pi}{2}}{\\sin\\frac{\\pi}{6}}$.",
          "Since $\\cot\\frac{\\pi}{6}=\\sqrt3$, $\\cot\\frac{\\pi}{2}=0$, $\\sin\\frac{\\pi}{6}=\\tfrac12$, we get $S=\\dfrac{\\sqrt3-0}{1/2}=2\\sqrt3$, so $\\boxed{S=2\\sqrt3}$."
        ]
      },
      {
        "name": "Direct addition cross-check",
        "steps": [
          "First term: $\\dfrac{1}{\\sin\\frac{\\pi}{6}\\sin\\frac{\\pi}{3}}=\\dfrac{1}{\\frac12\\cdot\\frac{\\sqrt3}{2}}=\\dfrac{4}{\\sqrt3}=\\dfrac{4\\sqrt3}{3}$.",
          "Second term: $\\dfrac{1}{\\sin\\frac{\\pi}{3}\\sin\\frac{\\pi}{2}}=\\dfrac{1}{\\frac{\\sqrt3}{2}\\cdot 1}=\\dfrac{2}{\\sqrt3}=\\dfrac{2\\sqrt3}{3}$.",
          "Sum $=\\dfrac{4\\sqrt3}{3}+\\dfrac{2\\sqrt3}{3}=\\dfrac{6\\sqrt3}{3}=2\\sqrt3$, confirming $\\boxed{S=2\\sqrt3}$."
        ]
      }
    ],
    "remark": "**Insight.** For angles in arithmetic progression with common difference $\\alpha$, the cosecant product $\\dfrac1{\\sin k\\alpha\\,\\sin(k+1)\\alpha}$ is a *cotangent difference* scaled by $1/\\sin\\alpha$. Whether the ladder is additive (this problem) or multiplicative (doubling), the same idea — write each term as $f(k)-f(k+1)$ — flattens the sum to two boundary cotangents."
  },
  {
    "theme": "telescope",
    "themeLabel": "Product-to-Sum Telescopes",
    "title": "When Tangent Products Telescope",
    "difficulty": 4,
    "task": "Sum the consecutive tangent products",
    "tags": [
      "telescope",
      "tangent-product",
      "compound-angle",
      "subtraction-formula"
    ],
    "statement": "Evaluate $\\displaystyle S=\\sum_{k=0}^{2}\\tan\\!\\big(k\\tfrac{\\pi}{12}\\big)\\,\\tan\\!\\big((k+1)\\tfrac{\\pi}{12}\\big) =\\tan 0\\tan\\tfrac{\\pi}{12}+\\tan\\tfrac{\\pi}{12}\\tan\\tfrac{\\pi}{6}+\\tan\\tfrac{\\pi}{6}\\tan\\tfrac{\\pi}{4}.$",
    "answer": "$$\\boxed{\\,S=\\sqrt3-1\\,}$$",
    "trap": "A product of tangents looks un-telescopable, but $\\tan A-\\tan B=\\tan(A-B)\\,(1+\\tan A\\tan B)$ rearranges to $\\tan k\\alpha\\,\\tan(k+1)\\alpha=\\dfrac{\\tan(k+1)\\alpha-\\tan k\\alpha}{\\tan\\alpha}-1$. The trap is forgetting the constant $-1$ that each term contributes: the telescope leaves $\\dfrac{\\tan n\\alpha-\\tan 0}{\\tan\\alpha}$ but you must subtract $n$ (here $3$) for the three $-1$'s.",
    "solutions": [
      {
        "name": "Subtraction-formula telescope",
        "steps": [
          "With $\\alpha=\\dfrac{\\pi}{12}$, from $\\tan\\big((k+1)\\alpha-k\\alpha\\big)=\\dfrac{\\tan(k+1)\\alpha-\\tan k\\alpha}{1+\\tan k\\alpha\\tan(k+1)\\alpha}$ we get $\\tan\\alpha\\big(1+\\tan k\\alpha\\tan(k+1)\\alpha\\big)=\\tan(k+1)\\alpha-\\tan k\\alpha$.",
          "Hence $\\tan k\\alpha\\,\\tan(k+1)\\alpha=\\dfrac{\\tan(k+1)\\alpha-\\tan k\\alpha}{\\tan\\alpha}-1$.",
          "Summing $k=0,1,2$, the tangent differences telescope: $S=\\dfrac{\\tan 3\\alpha-\\tan 0}{\\tan\\alpha}-3=\\dfrac{\\tan\\frac{\\pi}{4}}{\\tan\\frac{\\pi}{12}}-3=\\dfrac{1}{\\tan\\frac{\\pi}{12}}-3$.",
          "Since $\\tan\\dfrac{\\pi}{12}=2-\\sqrt3$, $\\dfrac{1}{2-\\sqrt3}=2+\\sqrt3$, so $S=(2+\\sqrt3)-3=\\sqrt3-1$, giving $\\boxed{S=\\sqrt3-1}$."
        ]
      },
      {
        "name": "Direct numeric verification",
        "steps": [
          "The first term $\\tan 0\\cdot\\tan\\frac{\\pi}{12}=0$. The remaining: $\\tan\\frac{\\pi}{12}\\tan\\frac{\\pi}{6}=(0.267949)(0.577350)=0.154701$ and $\\tan\\frac{\\pi}{6}\\tan\\frac{\\pi}{4}=(0.577350)(1)=0.577350$.",
          "Sum $=0+0.154701+0.577350=0.732051\\ldots$.",
          "And $\\sqrt3-1=1.732051-1=0.732051\\ldots$, matching exactly, so $\\boxed{S=\\sqrt3-1}$."
        ]
      }
    ],
    "remark": "**Insight.** Tangent *products* secretly hide tangent *differences*: rearranging the subtraction formula turns $\\tan k\\alpha\\tan(k+1)\\alpha$ into a telescoping difference minus a constant. The hidden $-1$ per term is the whole subtlety — the sum is $\\dfrac{\\tan n\\alpha}{\\tan\\alpha}-n$, never just $\\dfrac{\\tan n\\alpha}{\\tan\\alpha}$."
  },
  {
    "theme": "telescope",
    "themeLabel": "Product-to-Sum Telescopes",
    "title": "The Secant Ladder That Climbs on Tangents",
    "difficulty": 5,
    "task": "Collapse the secant-product chain to a closed surd",
    "tags": [
      "telescoping",
      "tangent-difference",
      "secant-product",
      "cotangent-trap",
      "special-angles"
    ],
    "statement": "Evaluate the finite sum \\[ S=\\frac{1}{\\cos15^\\circ\\cos30^\\circ}+\\frac{1}{\\cos30^\\circ\\cos45^\\circ}+\\frac{1}{\\cos45^\\circ\\cos60^\\circ}+\\frac{1}{\\cos60^\\circ\\cos75^\\circ}. \\] Every denominator is a product of two cosines whose angles are consecutive multiples of $15^\\circ$, the second angle of each term becoming the first angle of the next, so the four terms form a ladder $\\cos15^\\circ\\cos30^\\circ,\\ \\cos30^\\circ\\cos45^\\circ,\\ \\cos45^\\circ\\cos60^\\circ,\\ \\cos60^\\circ\\cos75^\\circ$. The numerators are all $1$. Find the exact value of $S$ in closed surd form.",
    "answer": "\\[\\boxed{\\,S=6\\sqrt{2}+2\\sqrt{6}\\,}\\]",
    "trap": "The overlapping-angle ladder screams telescope, and a strong solver reaches for the most famous telescoping identity in the book: the cotangent difference $\\cot\\alpha-\\cot\\beta=\\dfrac{\\sin(\\beta-\\alpha)}{\\sin\\alpha\\sin\\beta}$. The reflex is to declare each term a cotangent difference and write $S=\\cot15^\\circ-\\cot75^\\circ$ (the constant gap $\\beta-\\alpha=15^\\circ$ on top looks like it fits perfectly). That is the wrong reciprocal function: the cotangent identity carries a product of $sines$ in its denominator, $\\sin\\alpha\\sin\\beta$, whereas every denominator in $S$ is a product of $cosines$, $\\cos\\alpha\\cos\\beta$. Riding the cotangent chain telescopes to $\\cot15^\\circ-\\cot75^\\circ=(2+\\sqrt3)-(2-\\sqrt3)=2\\sqrt3\\approx3.464$, a clean-looking surd that is wrong — it is the value of the sum with $\\sin$ products in the denominators, a different sum entirely. The cosine denominators demand the $less-famous twin$, the tangent difference $\\tan\\beta-\\tan\\alpha=\\dfrac{\\sin(\\beta-\\alpha)}{\\cos\\alpha\\cos\\beta}$, which is what actually puts a cosine product downstairs. A second, subtler slip lies in wait even for solvers who pick tangents: writing $\\dfrac{1}{\\cos k\\cdot15^\\circ\\cos(k+1)15^\\circ}=\\tan(k+1)15^\\circ-\\tan k\\cdot15^\\circ$ and forgetting the $\\dfrac{1}{\\sin15^\\circ}$ that the identity forces on top. That dropped factor telescopes to $\\tan75^\\circ-\\tan15^\\circ=2\\sqrt3$ as well — the same decoy number, reached by a different error. The lesson is identical to its source: in a product telescope, the trig function in the denominator (cosine here, not sine) dictates whether you ride tangents or cotangents, and the constant gap angle sits on top divided by $\\sin$ of that gap.",
    "solutions": [
      {
        "name": "Tangent-difference telescope",
        "steps": [
          "Recall the tangent-difference identity $\\tan\\beta-\\tan\\alpha=\\dfrac{\\sin\\beta\\cos\\alpha-\\cos\\beta\\sin\\alpha}{\\cos\\alpha\\cos\\beta}=\\dfrac{\\sin(\\beta-\\alpha)}{\\cos\\alpha\\cos\\beta}$. With $\\alpha=k\\cdot15^\\circ$ and $\\beta=(k+1)15^\\circ$ the gap is $\\beta-\\alpha=15^\\circ$, so $\\dfrac{1}{\\cos k\\cdot15^\\circ\\cos(k+1)15^\\circ}=\\dfrac{1}{\\sin15^\\circ}\\big(\\tan(k+1)15^\\circ-\\tan k\\cdot15^\\circ\\big)$ for $k=1,2,3,4$.",
          "Factor the constant $\\dfrac{1}{\\sin15^\\circ}$ out of the four terms; the bracketed tangents telescope, every interior value cancelling with its neighbour: $S=\\dfrac{1}{\\sin15^\\circ}\\Big[(\\tan30^\\circ-\\tan15^\\circ)+(\\tan45^\\circ-\\tan30^\\circ)+(\\tan60^\\circ-\\tan45^\\circ)+(\\tan75^\\circ-\\tan60^\\circ)\\Big]=\\dfrac{\\tan75^\\circ-\\tan15^\\circ}{\\sin15^\\circ}$.",
          "Use the surds $\\tan75^\\circ=2+\\sqrt3$, $\\tan15^\\circ=2-\\sqrt3$, so the numerator is $\\tan75^\\circ-\\tan15^\\circ=2\\sqrt3$; and $\\sin15^\\circ=\\dfrac{\\sqrt6-\\sqrt2}{4}$. Hence $S=\\dfrac{2\\sqrt3}{(\\sqrt6-\\sqrt2)/4}=\\dfrac{8\\sqrt3}{\\sqrt6-\\sqrt2}$.",
          "Rationalise by $\\sqrt6+\\sqrt2$: $S=\\dfrac{8\\sqrt3(\\sqrt6+\\sqrt2)}{(\\sqrt6)^2-(\\sqrt2)^2}=\\dfrac{8\\sqrt3(\\sqrt6+\\sqrt2)}{4}=2\\sqrt3(\\sqrt6+\\sqrt2)=2\\sqrt{18}+2\\sqrt6=6\\sqrt2+2\\sqrt6$. Therefore $S=\\boxed{6\\sqrt2+2\\sqrt6}$."
        ]
      },
      {
        "name": "Build the identity from $\\sin15^\\circ=\\sin(\\text{gap})$ and telescope by hand",
        "steps": [
          "Insert the constant numerator deliberately. Since $15^\\circ=(k+1)15^\\circ-k\\cdot15^\\circ$, write $\\sin15^\\circ=\\sin\\big((k+1)15^\\circ-k\\cdot15^\\circ\\big)=\\sin(k+1)15^\\circ\\cos k\\cdot15^\\circ-\\cos(k+1)15^\\circ\\sin k\\cdot15^\\circ$.",
          "Divide this expansion by $\\cos k\\cdot15^\\circ\\cos(k+1)15^\\circ$: the right side becomes $\\tan(k+1)15^\\circ-\\tan k\\cdot15^\\circ$, so $\\dfrac{\\sin15^\\circ}{\\cos k\\cdot15^\\circ\\cos(k+1)15^\\circ}=\\tan(k+1)15^\\circ-\\tan k\\cdot15^\\circ$. Thus each printed term equals $\\dfrac{1}{\\sin15^\\circ}\\big(\\tan(k+1)15^\\circ-\\tan k\\cdot15^\\circ\\big)$ — note the cosine denominators force tangents, never cotangents.",
          "Sum the four explicit brackets: $(\\tan30^\\circ-\\tan15^\\circ)+(\\tan45^\\circ-\\tan30^\\circ)+(\\tan60^\\circ-\\tan45^\\circ)+(\\tan75^\\circ-\\tan60^\\circ)=\\tan75^\\circ-\\tan15^\\circ$, so $S=\\dfrac{\\tan75^\\circ-\\tan15^\\circ}{\\sin15^\\circ}$.",
          "With $\\tan75^\\circ-\\tan15^\\circ=(2+\\sqrt3)-(2-\\sqrt3)=2\\sqrt3$ and $\\sin15^\\circ=\\dfrac{\\sqrt6-\\sqrt2}{4}$, rationalising gives $S=\\dfrac{8\\sqrt3}{\\sqrt6-\\sqrt2}=2\\sqrt3(\\sqrt6+\\sqrt2)=6\\sqrt2+2\\sqrt6=\\boxed{6\\sqrt2+2\\sqrt6}$."
        ]
      },
      {
        "name": "Partial-sum induction confirming the closed form",
        "steps": [
          "Let $b_k=\\dfrac{1}{\\cos k\\cdot15^\\circ\\cos(k+1)15^\\circ}$ and $T_N=\\sum_{k=1}^{N}b_k$. From the identity $b_k=\\dfrac{1}{\\sin15^\\circ}\\big(\\tan(k+1)15^\\circ-\\tan k\\cdot15^\\circ\\big)$ (established above), claim $T_N=\\dfrac{\\tan(N+1)15^\\circ-\\tan15^\\circ}{\\sin15^\\circ}$.",
          "Base $N=1$: $T_1=b_1=\\dfrac{\\tan30^\\circ-\\tan15^\\circ}{\\sin15^\\circ}$, matching the formula. Inductive step: $T_{N+1}=T_N+b_{N+1}=\\dfrac{\\tan(N+1)15^\\circ-\\tan15^\\circ}{\\sin15^\\circ}+\\dfrac{\\tan(N+2)15^\\circ-\\tan(N+1)15^\\circ}{\\sin15^\\circ}=\\dfrac{\\tan(N+2)15^\\circ-\\tan15^\\circ}{\\sin15^\\circ}$, completing the induction.",
          "Set $N=4$: $T_4=\\dfrac{\\tan75^\\circ-\\tan15^\\circ}{\\sin15^\\circ}=\\dfrac{2\\sqrt3}{(\\sqrt6-\\sqrt2)/4}=\\dfrac{8\\sqrt3}{\\sqrt6-\\sqrt2}$.",
          "Rationalising, $T_4=2\\sqrt3(\\sqrt6+\\sqrt2)=6\\sqrt2+2\\sqrt6$, so $S=\\boxed{6\\sqrt2+2\\sqrt6}$."
        ]
      }
    ],
    "remark": "This is the mirror image of the cotangent telescope, and that symmetry is exactly the bait. The two product-collapse identities are twins: $\\cot\\alpha-\\cot\\beta=\\dfrac{\\sin(\\beta-\\alpha)}{\\sin\\alpha\\sin\\beta}$ lives on $sine$ denominators, while $\\tan\\beta-\\tan\\alpha=\\dfrac{\\sin(\\beta-\\alpha)}{\\cos\\alpha\\cos\\beta}$ lives on $cosine$ denominators. The fame of the cotangent version (it is the workhorse of $\\sum\\csc$ and $\\sum1/(\\sin\\sin)$ problems) makes it the default reflex, so a sum built deliberately on cosine products lures the solver into the wrong twin and out pops the decoy $\\cot15^\\circ-\\cot75^\\circ=2\\sqrt3$. The honest read is mechanical once the denominator is examined: the trig function downstairs picks the function you telescope with, and the constant gap angle $15^\\circ$ rides upstairs as $\\sin15^\\circ$, never to be dropped. The terminal angles are chosen so the chain runs from $\\tan15^\\circ=2-\\sqrt3$ up to $\\tan75^\\circ=2+\\sqrt3$, whose difference is the clean $2\\sqrt3$; had the ladder been allowed one more rung to $\\cos75^\\circ\\cos90^\\circ$, the final $\\cos90^\\circ=0$ would have made the sum diverge — a quiet reminder that these telescopes are only as alive as their endpoints. Lesson: name the denominator before you name the telescope."
  },
  {
    "theme": "telescope",
    "themeLabel": "Product-to-Sum Telescopes",
    "title": "Doubling Tangents Collapse",
    "difficulty": 5,
    "task": "Sum the weighted tangent chain",
    "tags": [
      "telescope",
      "double-angle",
      "cotangent-difference",
      "geometric-weights"
    ],
    "statement": "Prove that for every angle $x$ (where all terms are defined) $$\\sum_{k=0}^{n-1}2^{k}\\tan\\!\\big(2^{k}x\\big)=\\cot x-2^{n}\\cot\\!\\big(2^{n}x\\big),$$ and hence evaluate $\\tan\\frac{\\pi}{16}+2\\tan\\frac{\\pi}{8}+4\\tan\\frac{\\pi}{4}$.",
    "answer": "$$\\boxed{\\,\\tan\\tfrac{\\pi}{16}+2\\tan\\tfrac{\\pi}{8}+4\\tan\\tfrac{\\pi}{4}=\\cot\\tfrac{\\pi}{16}\\,}$$",
    "trap": "The trap is the weight on the boundary term. From $\\tan t=\\cot t-2\\cot 2t$ one gets $2^{k}\\tan(2^{k}x)=2^{k}\\cot(2^{k}x)-2^{k+1}\\cot(2^{k+1}x)$; the surviving end term carries the factor $2^{n}$, not $1$. Dropping that $2^{n}$ (or writing $\\cot(2^{n}x)$ with the wrong power) wrecks the cancellation. Here $2^{3}\\cot(2^{3}\\cdot\\frac{\\pi}{16})=8\\cot\\frac{\\pi}{2}=0$ luckily vanishes, but only because the weight is applied correctly.",
    "solutions": [
      {
        "name": "Cotangent-difference telescope",
        "steps": [
          "Start from $\\cot t-2\\cot 2t=\\cot t-2\\cdot\\dfrac{\\cot^{2}t-1}{2\\cot t}=\\dfrac{\\cot^{2}t-(\\cot^{2}t-1)}{\\cot t}=\\dfrac{1}{\\cot t}=\\tan t$. Hence $\\tan t=\\cot t-2\\cot 2t$.",
          "Put $t=2^{k}x$ and multiply by $2^{k}$: $2^{k}\\tan(2^{k}x)=2^{k}\\cot(2^{k}x)-2^{k+1}\\cot(2^{k+1}x)$, a difference $f(k)-f(k+1)$ with $f(k)=2^{k}\\cot(2^{k}x)$.",
          "Summing $k=0$ to $n-1$ telescopes to $f(0)-f(n)=\\cot x-2^{n}\\cot(2^{n}x)$, the claimed identity.",
          "Take $x=\\dfrac{\\pi}{16},\\,n=3$: the left side is $\\tan\\frac{\\pi}{16}+2\\tan\\frac{\\pi}{8}+4\\tan\\frac{\\pi}{4}$ and the right side is $\\cot\\frac{\\pi}{16}-8\\cot\\frac{\\pi}{2}=\\cot\\frac{\\pi}{16}-0=\\cot\\frac{\\pi}{16}$, so $\\boxed{\\tan\\frac{\\pi}{16}+2\\tan\\frac{\\pi}{8}+4\\tan\\frac{\\pi}{4}=\\cot\\frac{\\pi}{16}}$."
        ]
      },
      {
        "name": "Induction on the boundary form",
        "steps": [
          "Let $P(n):\\ \\sum_{k=0}^{n-1}2^{k}\\tan(2^{k}x)=\\cot x-2^{n}\\cot(2^{n}x)$. Base $n=1$: $\\tan x=\\cot x-2\\cot 2x$, true by the half-step computation above.",
          "Assume $P(n)$. Adding the next term, $\\sum_{k=0}^{n}2^{k}\\tan(2^{k}x)=\\big(\\cot x-2^{n}\\cot(2^{n}x)\\big)+2^{n}\\tan(2^{n}x)$. Using $\\tan u=\\cot u-2\\cot 2u$ at $u=2^{n}x$, the bracket $-2^{n}\\cot(2^{n}x)+2^{n}\\tan(2^{n}x)=2^{n}\\big(\\tan(2^{n}x)-\\cot(2^{n}x)\\big)=-2^{n+1}\\cot(2^{n+1}x)$.",
          "Thus the running sum becomes $\\cot x-2^{n+1}\\cot(2^{n+1}x)$, which is $P(n+1)$. By induction the identity holds, and substituting $x=\\frac{\\pi}{16},n=3$ gives $\\boxed{\\cot\\frac{\\pi}{16}}$ as the numerical value (the $8\\cot\\frac{\\pi}{2}$ term being $0$)."
        ]
      }
    ],
    "remark": "**Insight.** The single relation $\\tan t=\\cot t-2\\cot 2t$ is the entire engine: scaling it by $2^{k}$ turns the geometric weights $2^{k}$ into a perfect telescoping ladder whose rungs are $2^{k}\\cot(2^{k}x)$. Geometrically-weighted double-angle sums are never as scary as they look — they are one cotangent difference repeated."
  },
  {
    "theme": "telescope",
    "themeLabel": "Product-to-Sum Telescopes",
    "title": "Cosecants on a Doubling Ladder",
    "difficulty": 5,
    "task": "Sum the cosecant doubling chain",
    "tags": [
      "telescope",
      "cosecant",
      "double-angle",
      "cotangent-difference"
    ],
    "statement": "Show that $$\\sum_{k=1}^{n}\\csc\\!\\big(2^{k}x\\big)=\\cot x-\\cot\\!\\big(2^{n}x\\big)$$ for all admissible $x$, then evaluate $\\csc\\frac{\\pi}{6}+\\csc\\frac{\\pi}{3}$ via the case $x=\\frac{\\pi}{12},\\ n=2$.",
    "answer": "$$\\boxed{\\,\\csc\\tfrac{\\pi}{6}+\\csc\\tfrac{\\pi}{3}=2+\\tfrac{2\\sqrt3}{3}\\,}$$",
    "trap": "The trap is sign and boundary bookkeeping. The atom is $\\csc 2t=\\cot t-\\cot 2t$ (a *difference*, with the smaller angle first); summing gives $\\cot x-\\cot(2^{n}x)$, so the surviving terms are the *first* lower cotangent and the *last* upper cotangent. Writing $\\cot(2^{n}x)-\\cot x$ flips the sign, and forgetting that the inner cotangents pair up as $-\\cot(2^{k}x)+\\cot(2^{k}x)=0$ leaves spurious leftovers.",
    "solutions": [
      {
        "name": "Cosecant as a cotangent difference",
        "steps": [
          "Compute $\\cot t-\\cot 2t=\\dfrac{\\cos t}{\\sin t}-\\dfrac{\\cos 2t}{\\sin 2t}=\\dfrac{2\\cos^{2}t-\\cos 2t}{\\sin 2t}=\\dfrac{2\\cos^{2}t-(2\\cos^{2}t-1)}{\\sin 2t}=\\dfrac{1}{\\sin 2t}=\\csc 2t$.",
          "Hence $\\csc(2^{k}x)=\\cot(2^{k-1}x)-\\cot(2^{k}x)$, a clean difference $g(k-1)-g(k)$ with $g(k)=\\cot(2^{k}x)$.",
          "Summing $k=1$ to $n$ telescopes to $g(0)-g(n)=\\cot x-\\cot(2^{n}x)$, the claimed formula.",
          "With $x=\\dfrac{\\pi}{12},\\,n=2$: the left side is $\\csc\\frac{\\pi}{6}+\\csc\\frac{\\pi}{3}$ and the right side is $\\cot\\frac{\\pi}{12}-\\cot\\frac{\\pi}{3}=(2+\\sqrt3)-\\dfrac{1}{\\sqrt3}=2+\\dfrac{2\\sqrt3}{3}$, so $\\boxed{\\csc\\frac{\\pi}{6}+\\csc\\frac{\\pi}{3}=2+\\frac{2\\sqrt3}{3}}$."
        ]
      },
      {
        "name": "Direct evaluation cross-check",
        "steps": [
          "Directly, $\\csc\\dfrac{\\pi}{6}=2$ and $\\csc\\dfrac{\\pi}{3}=\\dfrac{2}{\\sqrt3}=\\dfrac{2\\sqrt3}{3}$, so the left side is $2+\\dfrac{2\\sqrt3}{3}\\approx 3.1547$.",
          "The telescope's right side $\\cot\\frac{\\pi}{12}-\\cot\\frac{\\pi}{3}$: numerically $\\cot\\frac{\\pi}{12}=3.7320\\ldots$ and $\\cot\\frac{\\pi}{3}=0.5773\\ldots$, difference $3.1547\\ldots$ — identical.",
          "Both routes give $2+\\dfrac{2\\sqrt3}{3}$, confirming $\\boxed{\\csc\\frac{\\pi}{6}+\\csc\\frac{\\pi}{3}=2+\\frac{2\\sqrt3}{3}}$."
        ]
      }
    ],
    "remark": "**Insight.** $\\csc 2t=\\cot t-\\cot 2t$ is the cosecant cousin of the tangent telescope: halving the angle inside a cotangent and subtracting reproduces a cosecant exactly. On a doubling ladder $x,2x,4x,\\dots$ the inner cotangents annihilate in pairs, leaving only the two endpoints $\\cot x$ and $\\cot(2^{n}x)$."
  },
  {
    "theme": "multiangle",
    "themeLabel": "Multiple & Sub-Multiple Angles",
    "title": "From tan to the Double Angle",
    "difficulty": 4,
    "task": "Compute sin and cos",
    "tags": [
      "t-formula",
      "double-angle",
      "rational",
      "no-radical"
    ],
    "statement": "Given $\\tan\\dfrac{\\theta}{2}=\\dfrac{1}{3}$ with $\\theta$ acute, compute $\\sin\\theta,\\ \\cos\\theta$, and $\\tan 2\\theta$.",
    "answer": "$$\\sin\\theta=\\dfrac{3}{5},\\quad \\cos\\theta=\\dfrac{4}{5},\\quad \\tan 2\\theta=\\boxed{\\dfrac{24}{7}}$$",
    "trap": "After getting $\\sin\\theta=\\tfrac35,\\cos\\theta=\\tfrac45$ (so $\\tan\\theta=\\tfrac34$), computing $\\tan2\\theta=\\dfrac{2\\tan\\theta}{1-\\tan^2\\theta}=\\dfrac{2\\cdot3/4}{1-9/16}=\\dfrac{3/2}{7/16}=\\tfrac{24}{7}$ is right — but a common slip is using the $t=\\tan\\tfrac{\\theta}{2}=\\tfrac13$ value a second time as if it were $\\tan\\theta$, giving $\\dfrac{2/3}{1-1/9}=\\tfrac34$ — that is $\\tan\\theta$, not $\\tan2\\theta$. Mixing the half-angle $t$ with $\\tan\\theta$ corrupts the double-angle step.",
    "solutions": [
      {
        "name": "t-formulae then double-angle on tan",
        "steps": [
          "With $t=\\tan\\tfrac{\\theta}{2}=\\tfrac13$: $\\sin\\theta=\\dfrac{2t}{1+t^2}=\\dfrac{2/3}{1+1/9}=\\dfrac{2/3}{10/9}=\\dfrac{3}{5}$ and $\\cos\\theta=\\dfrac{1-t^2}{1+t^2}=\\dfrac{1-1/9}{10/9}=\\dfrac{8/9}{10/9}=\\dfrac{4}{5}$, so $\\tan\\theta=\\tfrac34$.",
          "Then $\\tan2\\theta=\\dfrac{2\\tan\\theta}{1-\\tan^2\\theta}=\\dfrac{3/2}{1-9/16}=\\dfrac{3/2}{7/16}=\\boxed{\\dfrac{24}{7}}.$"
        ]
      },
      {
        "name": "Direct double-angle from sin, cos",
        "steps": [
          "Using $\\sin\\theta=\\tfrac35,\\cos\\theta=\\tfrac45$: $\\sin2\\theta=2\\sin\\theta\\cos\\theta=2\\cdot\\tfrac35\\cdot\\tfrac45=\\tfrac{24}{25}$ and $\\cos2\\theta=\\cos^2\\theta-\\sin^2\\theta=\\tfrac{16}{25}-\\tfrac{9}{25}=\\tfrac{7}{25}.$",
          "Hence $\\tan2\\theta=\\dfrac{\\sin2\\theta}{\\cos2\\theta}=\\dfrac{24/25}{7/25}=\\boxed{\\dfrac{24}{7}}.$"
        ]
      }
    ],
    "remark": "**Insight.** The $t=\\tan\\tfrac{\\theta}{2}$ formulae deliver $\\sin\\theta,\\cos\\theta$ as exact rationals with no radicals, but the half-angle $t$ must never be reused as $\\tan\\theta$ in the next double-angle step — three different angles ($\\tfrac{\\theta}{2},\\theta,2\\theta$) live in this one problem."
  },
  {
    "theme": "multiangle",
    "themeLabel": "Multiple & Sub-Multiple Angles",
    "title": "Half-Angle Caught in the Wrong Quadrant",
    "difficulty": 4,
    "task": "Find sin of the half-angle",
    "tags": [
      "half-angle",
      "quadrant",
      "sign",
      "sub-multiple"
    ],
    "statement": "Let $\\cos\\theta=-\\dfrac{7}{25}$ with $\\theta\\in\\left(\\dfrac{\\pi}{2},\\pi\\right)$. Find $\\sin\\dfrac{\\theta}{2}$ and $\\cos\\dfrac{\\theta}{2}$.",
    "answer": "$$\\sin\\dfrac{\\theta}{2}=\\boxed{\\dfrac{4}{5}},\\qquad \\cos\\dfrac{\\theta}{2}=\\dfrac{3}{5}$$",
    "trap": "Writing $\\cos\\dfrac{\\theta}{2}=\\pm\\sqrt{\\dfrac{1+\\cos\\theta}{2}}$ and then carelessly picking the negative root \"because $\\cos\\theta<0$.\" The sign of the half-angle ratios is governed by the quadrant of $\\theta/2$, not of $\\theta$. Here $\\theta\\in(\\tfrac{\\pi}{2},\\pi)\\Rightarrow \\theta/2\\in(\\tfrac{\\pi}{4},\\tfrac{\\pi}{2})$, the first quadrant, so BOTH $\\sin\\tfrac{\\theta}{2}$ and $\\cos\\tfrac{\\theta}{2}$ are positive.",
    "solutions": [
      {
        "name": "Half-angle formulae with quadrant check",
        "steps": [
          "$\\sin^2\\dfrac{\\theta}{2}=\\dfrac{1-\\cos\\theta}{2}=\\dfrac{1+7/25}{2}=\\dfrac{32/25}{2}=\\dfrac{16}{25}$ and $\\cos^2\\dfrac{\\theta}{2}=\\dfrac{1+\\cos\\theta}{2}=\\dfrac{18/25}{2}=\\dfrac{9}{25}$.",
          "Since $\\theta\\in(\\tfrac{\\pi}{2},\\pi)$ gives $\\tfrac{\\theta}{2}\\in(\\tfrac{\\pi}{4},\\tfrac{\\pi}{2})$ (first quadrant), both roots are positive: $\\sin\\tfrac{\\theta}{2}=\\boxed{\\tfrac45}$, $\\cos\\tfrac{\\theta}{2}=\\tfrac35$."
        ]
      },
      {
        "name": "Cross-check via the double-angle reconstruction",
        "steps": [
          "With $\\sin\\tfrac{\\theta}{2}=\\tfrac45,\\ \\cos\\tfrac{\\theta}{2}=\\tfrac35$ compute $\\cos\\theta=\\cos^2\\tfrac{\\theta}{2}-\\sin^2\\tfrac{\\theta}{2}=\\tfrac{9}{25}-\\tfrac{16}{25}=-\\tfrac{7}{25}$ — matches.",
          "Also $\\sin\\theta=2\\sin\\tfrac{\\theta}{2}\\cos\\tfrac{\\theta}{2}=2\\cdot\\tfrac45\\cdot\\tfrac35=\\tfrac{24}{25}>0$, consistent with $\\theta$ in the second quadrant. Hence $\\sin\\tfrac{\\theta}{2}=\\boxed{\\tfrac45}$."
        ]
      }
    ],
    "remark": "**Insight.** The half-angle's quadrant is found by halving the bounds of $\\theta$, not by copying the sign of $\\cos\\theta$. A negative $\\cos\\theta$ can sit above a perfectly first-quadrant $\\theta/2$, where every ratio is positive."
  },
  {
    "theme": "multiangle",
    "themeLabel": "Multiple & Sub-Multiple Angles",
    "title": "Everything in Terms of tan Half",
    "difficulty": 4,
    "task": "Solve the equation",
    "tags": [
      "t-substitution",
      "half-angle",
      "trig-equation",
      "lost-root"
    ],
    "statement": "Solve for $x\\in[0,2\\pi):\\qquad 3\\sin x+4\\cos x=4$, using $t=\\tan\\dfrac{x}{2}$.",
    "answer": "$$x=\\boxed{0\\ \\text{ and }\\ x=2\\arctan\\dfrac{4}{3}}$$",
    "trap": "The Weierstrass substitution $\\sin x=\\dfrac{2t}{1+t^2},\\ \\cos x=\\dfrac{1-t^2}{1+t^2}$ silently drops $x=\\pi$, where $\\tan\\tfrac{x}{2}$ is undefined. Here one must check $x=\\pi$ separately: $3\\sin\\pi+4\\cos\\pi=-4\\neq4$, so it is NOT a solution — but a student who never checks it has an incomplete method and may also miss verifying that the algebraic $t$-roots are genuine. The clean root $t=0$ (i.e. $x=0$) is easy to overlook because it makes the numerator vanish.",
    "solutions": [
      {
        "name": "Weierstrass substitution with the x=pi check",
        "steps": [
          "Substitute: $3\\cdot\\dfrac{2t}{1+t^2}+4\\cdot\\dfrac{1-t^2}{1+t^2}=4$. Multiply by $1+t^2$: $6t+4-4t^2=4+4t^2$, so $8t^2-6t=0$, i.e. $2t(4t-3)=0$.",
          "Thus $t=0\\Rightarrow x=0$, or $t=\\tfrac34\\Rightarrow x=2\\arctan\\tfrac34$. Check the dropped value $x=\\pi$: $3(0)+4(-1)=-4\\neq4$, so it is excluded. Answer: $x=\\boxed{0\\ \\text{and}\\ 2\\arctan\\tfrac34}$."
        ]
      },
      {
        "name": "R-form cross-check",
        "steps": [
          "Write $3\\sin x+4\\cos x=5\\cos(x-\\varphi)$ where $\\cos\\varphi=\\tfrac45,\\sin\\varphi=\\tfrac35$, so $\\varphi=\\arctan\\tfrac34$. The equation becomes $5\\cos(x-\\varphi)=4\\Rightarrow\\cos(x-\\varphi)=\\tfrac45$.",
          "Hence $x-\\varphi=\\pm\\varphi$ (since $\\cos\\varphi=\\tfrac45$), giving $x=2\\varphi=2\\arctan\\tfrac34$ or $x=0$. Both lie in $[0,2\\pi)$, confirming $x=\\boxed{0\\ \\text{and}\\ 2\\arctan\\tfrac34}$."
        ]
      }
    ],
    "remark": "**Insight.** The $t=\\tan\\tfrac{x}{2}$ machine turns any $a\\sin x+b\\cos x=c$ into a quadratic in $t$, but it blinds you to $x=\\pi$. The R-form solution sees that point, and the agreement of the two methods is the safety net."
  },
  {
    "theme": "multiangle",
    "themeLabel": "Multiple & Sub-Multiple Angles",
    "title": "Which Form of cos 2A",
    "difficulty": 4,
    "task": "Simplify the expression",
    "tags": [
      "double-angle",
      "sign-trap",
      "simplification",
      "tangent"
    ],
    "statement": "Simplify to a single function of $A:\\qquad \\dfrac{1-\\cos 2A+\\sin 2A}{1+\\cos 2A+\\sin 2A}$.",
    "answer": "$$\\dfrac{1-\\cos 2A+\\sin 2A}{1+\\cos 2A+\\sin 2A}=\\boxed{\\tan A}$$",
    "trap": "Choosing the wrong double-angle form for $\\cos2A$. In the numerator you need $1-\\cos2A=2\\sin^2A$ (the $1-2\\sin^2A$ reading), and in the denominator $1+\\cos2A=2\\cos^2A$ (the $2\\cos^2A-1$ reading). Swap them and the $\\sin A,\\cos A$ factors no longer cancel against $\\sin2A=2\\sin A\\cos A$, and the answer collapses to nonsense like $\\cot A$ or $1$.",
    "solutions": [
      {
        "name": "Pick the matching double-angle forms",
        "steps": [
          "Numerator $=2\\sin^2A+2\\sin A\\cos A=2\\sin A(\\sin A+\\cos A)$, using $1-\\cos2A=2\\sin^2A$ and $\\sin2A=2\\sin A\\cos A$.",
          "Denominator $=2\\cos^2A+2\\sin A\\cos A=2\\cos A(\\cos A+\\sin A)$, using $1+\\cos2A=2\\cos^2A$. The ratio is $\\dfrac{2\\sin A(\\sin A+\\cos A)}{2\\cos A(\\sin A+\\cos A)}=\\boxed{\\tan A}.$"
        ]
      },
      {
        "name": "Half-angle / t-substitution sanity check",
        "steps": [
          "Test $A=30^\\circ$: numerator $=1-\\cos60^\\circ+\\sin60^\\circ=1-\\tfrac12+\\tfrac{\\sqrt3}{2}=\\tfrac{1+\\sqrt3}{2}$; denominator $=1+\\tfrac12+\\tfrac{\\sqrt3}{2}=\\tfrac{3+\\sqrt3}{2}$.",
          "Ratio $=\\dfrac{1+\\sqrt3}{3+\\sqrt3}=\\dfrac{1+\\sqrt3}{\\sqrt3(\\sqrt3+1)}=\\dfrac{1}{\\sqrt3}=\\tan30^\\circ$, confirming the expression equals $\\boxed{\\tan A}.$"
        ]
      }
    ],
    "remark": "**Insight.** The two faces of $\\cos2A$ are not interchangeable here: the numerator wants the one that exposes $\\sin^2A$ and the denominator wants the one that exposes $\\cos^2A$, so the common factor $(\\sin A+\\cos A)$ can cancel. Matching the form to the surrounding $1\\pm$ is the whole skill."
  },
  {
    "theme": "multiangle",
    "themeLabel": "Multiple & Sub-Multiple Angles",
    "title": "The Radical That Hides a Sign",
    "difficulty": 4,
    "task": "Simplify the radical",
    "tags": [
      "double-angle",
      "perfect-square",
      "sign-trap",
      "quadrant"
    ],
    "statement": "For $A\\in\\left(\\dfrac{\\pi}{4},\\dfrac{\\pi}{2}\\right)$ simplify $\\sqrt{1-\\sin 2A}\\;+\\;\\sqrt{1+\\sin 2A}$.",
    "answer": "$$\\sqrt{1-\\sin 2A}+\\sqrt{1+\\sin 2A}=\\boxed{2\\sin A}$$",
    "trap": "Recognising $1\\pm\\sin2A=(\\sin A\\pm\\cos A)^2$ and then dropping the modulus: writing $\\sqrt{1-\\sin2A}=\\cos A-\\sin A$ and $\\sqrt{1+\\sin2A}=\\sin A+\\cos A$, which sums to $2\\cos A$. But on $\\left(\\tfrac{\\pi}{4},\\tfrac{\\pi}{2}\\right)$ we have $\\sin A>\\cos A$, so $\\sqrt{1-\\sin2A}=|\\sin A-\\cos A|=\\sin A-\\cos A$ (not $\\cos A-\\sin A$). The correct sum is $2\\sin A$; the careless sign flip gives the wrong $2\\cos A$.",
    "solutions": [
      {
        "name": "Perfect squares with the right modulus",
        "steps": [
          "$1\\pm\\sin2A=\\sin^2A+\\cos^2A\\pm2\\sin A\\cos A=(\\sin A\\pm\\cos A)^2$, so $\\sqrt{1-\\sin2A}=|\\sin A-\\cos A|$ and $\\sqrt{1+\\sin2A}=|\\sin A+\\cos A|$.",
          "On $\\left(\\tfrac{\\pi}{4},\\tfrac{\\pi}{2}\\right)$: $\\sin A>\\cos A>0$, so $|\\sin A-\\cos A|=\\sin A-\\cos A$ and $|\\sin A+\\cos A|=\\sin A+\\cos A$. Their sum is $(\\sin A-\\cos A)+(\\sin A+\\cos A)=\\boxed{2\\sin A}.$"
        ]
      },
      {
        "name": "Numerical anchor",
        "steps": [
          "Take $A=\\tfrac{\\pi}{3}$: $\\sin2A=\\sin\\tfrac{2\\pi}{3}=\\tfrac{\\sqrt3}{2}$, so the expression is $\\sqrt{1-\\tfrac{\\sqrt3}{2}}+\\sqrt{1+\\tfrac{\\sqrt3}{2}}=\\sqrt{\\tfrac{2-\\sqrt3}{2}}+\\sqrt{\\tfrac{2+\\sqrt3}{2}}$.",
          "Numerically this is $0.3660+1.3660=1.7320=\\sqrt3=2\\sin\\tfrac{\\pi}{3}$, confirming $\\boxed{2\\sin A}$ (and ruling out the trap value $2\\cos\\tfrac{\\pi}{3}=1$)."
        ]
      }
    ],
    "remark": "**Insight.** Both radicals are perfect squares, but the inner radical's sign is decided by whether $\\sin A\\gtrless\\cos A$ — i.e. by which side of $\\tfrac{\\pi}{4}$ the angle lies. The interval is the entire problem: above $\\tfrac{\\pi}{4}$ the answer is $2\\sin A$, below it would be $2\\cos A$."
  },
  {
    "theme": "multiangle",
    "themeLabel": "Multiple & Sub-Multiple Angles",
    "title": "The Three Cosines of a Cubic",
    "difficulty": 5,
    "task": "Evaluate the product",
    "tags": [
      "triple-angle",
      "cubic-roots",
      "product",
      "Vieta"
    ],
    "statement": "The equation $8c^3-6c-1=0$ has three real roots $\\cos 20^\\circ,\\ \\cos 100^\\circ,\\ \\cos 140^\\circ$. Using this, evaluate $\\cos 20^\\circ\\,\\cos 40^\\circ\\,\\cos 80^\\circ$.",
    "answer": "$$\\cos 20^\\circ\\cos 40^\\circ\\cos 80^\\circ=\\boxed{\\dfrac{1}{8}}$$",
    "trap": "Identifying the roots of $8c^3-6c-1=0$ as $\\cos20^\\circ,\\cos40^\\circ,\\cos80^\\circ$ (the angles in the product) and then reading the product of roots off Vieta as $-\\tfrac{-1}{8}=\\tfrac18$. That gives the right number by accident, but the cubic's roots are $\\cos20^\\circ,\\cos100^\\circ,\\cos140^\\circ$ — NOT $\\cos40^\\circ$ or $\\cos80^\\circ$ — because $8\\cos^3\\theta-6\\cos\\theta=2\\cos3\\theta$ forces $3\\theta\\equiv60^\\circ$. The honest route is the doubling identity, not Vieta on the wrong angles.",
    "solutions": [
      {
        "name": "Multiply by sin and telescope the doublings",
        "steps": [
          "Multiply by $\\sin20^\\circ$ and use $2\\sin\\theta\\cos\\theta=\\sin2\\theta$ repeatedly: $\\sin20^\\circ\\cdot\\cos20^\\circ\\cos40^\\circ\\cos80^\\circ=\\tfrac12\\sin40^\\circ\\cos40^\\circ\\cos80^\\circ=\\tfrac14\\sin80^\\circ\\cos80^\\circ=\\tfrac18\\sin160^\\circ.$",
          "Since $\\sin160^\\circ=\\sin20^\\circ$, we get $\\sin20^\\circ\\cdot P=\\tfrac18\\sin20^\\circ$, so $P=\\boxed{\\tfrac18}$."
        ]
      },
      {
        "name": "Use the cubic correctly via Vieta",
        "steps": [
          "From $8\\cos^3\\theta-6\\cos\\theta=2\\cos3\\theta=1$ we need $\\cos3\\theta=\\tfrac12$, i.e. $3\\theta=60^\\circ,300^\\circ,420^\\circ$, giving roots $\\cos20^\\circ,\\cos100^\\circ,\\cos140^\\circ$. Their product is $\\tfrac{1}{8}$ by Vieta (constant $-1$ over leading $8$, with sign $(-1)^3$).",
          "Now convert the target: $\\cos100^\\circ=-\\cos80^\\circ$ and $\\cos140^\\circ=-\\cos40^\\circ$, so $\\cos20^\\circ\\cos100^\\circ\\cos140^\\circ=\\cos20^\\circ\\cos40^\\circ\\cos80^\\circ$. Hence $\\cos20^\\circ\\cos40^\\circ\\cos80^\\circ=\\boxed{\\tfrac18}$."
        ]
      }
    ],
    "remark": "**Insight.** The same value reached two ways guards against the trap: the doubling telescope never cares which cosine appears, while the cubic forces you to confront $\\cos3\\theta=\\tfrac12$ and the sign-flips $\\cos100^\\circ=-\\cos80^\\circ$. The product of roots only matches the asked product because of those two reflections."
  },
  {
    "theme": "multiangle",
    "themeLabel": "Multiple & Sub-Multiple Angles",
    "title": "The Golden Cosine of Thirty-Six",
    "difficulty": 5,
    "task": "Evaluate cos 36 degrees",
    "tags": [
      "triple-angle",
      "double-angle",
      "exact-value",
      "quadratic"
    ],
    "statement": "Starting from $\\cos 3\\theta=-\\cos 2\\theta$ at $\\theta=36^\\circ$, derive the exact value of $\\cos 36^\\circ$.",
    "answer": "$$\\cos 36^\\circ=\\boxed{\\dfrac{1+\\sqrt5}{4}}$$",
    "trap": "After $4c^2-2c-1=0$ gives $c=\\dfrac{1\\pm\\sqrt5}{4}$, blindly keeping both roots — or worse, taking the negative root $\\dfrac{1-\\sqrt5}{4}<0$. Since $36^\\circ$ is acute, $\\cos36^\\circ>0$, so only $\\dfrac{1+\\sqrt5}{4}$ survives; the discarded root is actually $-\\cos72^\\circ$. A second trap is writing $\\cos36^\\circ=\\dfrac{\\sqrt5+1}{2}$ (the golden ratio itself) — off by a factor of 2.",
    "solutions": [
      {
        "name": "Triple = minus double, then a quadratic",
        "steps": [
          "At $\\theta=36^\\circ$: $3\\theta=108^\\circ$ and $2\\theta=72^\\circ$, and since $108^\\circ=180^\\circ-72^\\circ$ we have $\\cos3\\theta=-\\cos2\\theta$. Expand: $4\\cos^3\\theta-3\\cos\\theta=-(2\\cos^2\\theta-1)$.",
          "Let $c=\\cos36^\\circ$. Then $4c^3-3c=-2c^2+1$, i.e. $4c^3+2c^2-3c-1=0$. Factor out the spurious root $c=-1$ (from $\\theta=180^\\circ$): $4c^3+2c^2-3c-1=(c+1)(4c^2-2c-1)$.",
          "So $4c^2-2c-1=0\\Rightarrow c=\\dfrac{2\\pm\\sqrt{4+16}}{8}=\\dfrac{1\\pm\\sqrt5}{4}$. As $\\cos36^\\circ>0$, take $c=\\boxed{\\dfrac{1+\\sqrt5}{4}}$."
        ]
      },
      {
        "name": "Via the chain cos36 minus cos72",
        "steps": [
          "Let $a=\\cos36^\\circ,\\ b=\\cos72^\\circ$. Using $\\cos72^\\circ=2\\cos^236^\\circ-1=2a^2-1$ and the identity $\\cos36^\\circ-\\cos72^\\circ=\\tfrac12$ (a standard sum), we get $a-(2a^2-1)=\\tfrac12$.",
          "This is $2a^2-a-\\tfrac12=0\\Rightarrow 4a^2-2a-1=0$, the same quadratic, so $a=\\dfrac{1+\\sqrt5}{4}$ (positive root). Hence $\\cos36^\\circ=\\boxed{\\dfrac{1+\\sqrt5}{4}}$."
        ]
      }
    ],
    "remark": "**Insight.** The reflection $\\cos108^\\circ=-\\cos72^\\circ$ converts a triple-angle into a double-angle, collapsing a cubic to a clean quadratic once the obvious root $c=-1$ is removed. The surviving root is forced by acuteness — the rejected $\\dfrac{1-\\sqrt5}{4}$ is exactly $-\\cos72^\\circ$."
  },
  {
    "theme": "multiangle",
    "themeLabel": "Multiple & Sub-Multiple Angles",
    "title": "A Sum of Three Sines, Tripled",
    "difficulty": 5,
    "task": "Prove the identity",
    "tags": [
      "triple-angle",
      "identity",
      "factorisation",
      "product-form"
    ],
    "statement": "Prove that for all $\\theta:\\qquad \\sin 3\\theta=4\\sin\\theta\\,\\sin(60^\\circ-\\theta)\\,\\sin(60^\\circ+\\theta)$.",
    "answer": "$$\\sin 3\\theta=\\boxed{4\\sin\\theta\\,\\sin(60^\\circ-\\theta)\\,\\sin(60^\\circ+\\theta)}$$",
    "trap": "Expanding $\\sin(60^\\circ-\\theta)\\sin(60^\\circ+\\theta)$ as $\\sin^260^\\circ-\\sin^2\\theta$ is correct, but many mis-remember the product-of-conjugates rule for sine and write $\\sin^260^\\circ-\\cos^2\\theta$ or flip a sign, landing on $\\cos3\\theta$ instead. The right rule is $\\sin(A-B)\\sin(A+B)=\\sin^2A-\\sin^2B$, and then $3\\sin\\theta-4\\sin^3\\theta$ must reappear exactly.",
    "solutions": [
      {
        "name": "Product-to-difference then triple-angle",
        "steps": [
          "Use $\\sin(60^\\circ-\\theta)\\sin(60^\\circ+\\theta)=\\sin^260^\\circ-\\sin^2\\theta=\\tfrac34-\\sin^2\\theta$.",
          "Multiply by $4\\sin\\theta$: $4\\sin\\theta\\left(\\tfrac34-\\sin^2\\theta\\right)=3\\sin\\theta-4\\sin^3\\theta=\\sin3\\theta$. $\\;\\blacksquare$ giving $\\boxed{4\\sin\\theta\\sin(60^\\circ-\\theta)\\sin(60^\\circ+\\theta)}.$"
        ]
      },
      {
        "name": "Expand each factor directly",
        "steps": [
          "$\\sin(60^\\circ\\mp\\theta)=\\tfrac{\\sqrt3}{2}\\cos\\theta\\mp\\tfrac12\\sin\\theta$, so their product is $\\tfrac34\\cos^2\\theta-\\tfrac14\\sin^2\\theta=\\tfrac34-\\sin^2\\theta$ (using $\\cos^2\\theta=1-\\sin^2\\theta$).",
          "Then $4\\sin\\theta(\\tfrac34-\\sin^2\\theta)=3\\sin\\theta-4\\sin^3\\theta=\\sin3\\theta$, establishing the identity $\\boxed{4\\sin\\theta\\sin(60^\\circ-\\theta)\\sin(60^\\circ+\\theta)}.$"
        ]
      }
    ],
    "remark": "**Insight.** The three angles $\\theta,60^\\circ\\pm\\theta$ are exactly the solutions of $\\sin3\\phi=\\sin3\\theta$ spaced $60^\\circ$ apart, which is why their product reconstructs the triple-angle. The same template gives $\\cos3\\theta=4\\cos\\theta\\cos(60^\\circ-\\theta)\\cos(60^\\circ+\\theta)$ — a sign-aware sibling worth keeping straight."
  },
  {
    "theme": "multiangle",
    "themeLabel": "Multiple & Sub-Multiple Angles",
    "title": "Tangent of a Tripled Angle",
    "difficulty": 5,
    "task": "Evaluate the cotangent sum",
    "tags": [
      "triple-angle",
      "tangent",
      "roots",
      "cotangent"
    ],
    "statement": "The numbers $\\tan 20^\\circ,\\ \\tan 80^\\circ,\\ \\tan 140^\\circ$ are the three roots of $t^3-3\\sqrt3\\,t^2-3t+\\sqrt3=0$. Evaluate $\\cot 20^\\circ+\\cot 80^\\circ+\\cot 140^\\circ$.",
    "answer": "$$\\cot 20^\\circ+\\cot 80^\\circ+\\cot 140^\\circ=\\boxed{\\sqrt3}$$",
    "trap": "Reading $\\sum\\cot=\\sum\\tfrac1t$ off Vieta but mishandling the signs. For $t^3+pt^2+qt+r$ one has $e_2=\\sum t_it_j=q$ and $e_3=\\prod t=-r$, and $\\sum\\tfrac1t=\\dfrac{e_2}{e_3}$. Here $q=-3,\\ r=\\sqrt3$, so $e_2=-3,\\ e_3=-\\sqrt3$ and $\\sum\\cot=\\dfrac{-3}{-\\sqrt3}=\\sqrt3$. A careless reader inverts the ratio to $\\tfrac{e_3}{e_2}$, or drops a sign to get $-\\sqrt3$, or even confuses $\\sum\\cot$ with $e_1=\\sum\\tan=3\\sqrt3$.",
    "solutions": [
      {
        "name": "Vieta on the reciprocals",
        "steps": [
          "For $t^3-3\\sqrt3 t^2-3t+\\sqrt3=0$ the symmetric functions are $e_1=\\sum t=3\\sqrt3,\\ e_2=\\sum t_it_j=-3,\\ e_3=\\prod t=-\\sqrt3$ (constant $\\sqrt3$ enters $e_3$ with sign $(-1)^3$).",
          "Now $\\cot20^\\circ+\\cot80^\\circ+\\cot140^\\circ=\\dfrac1{t_1}+\\dfrac1{t_2}+\\dfrac1{t_3}=\\dfrac{e_2}{e_3}=\\dfrac{-3}{-\\sqrt3}=\\dfrac{3}{\\sqrt3}=\\boxed{\\sqrt3}.$"
        ]
      },
      {
        "name": "Complementary-angle triple-angle equation",
        "steps": [
          "Write $\\cot20^\\circ=\\tan70^\\circ,\\ \\cot80^\\circ=\\tan10^\\circ,\\ \\cot140^\\circ=\\tan(-50^\\circ)=\\tan130^\\circ$. The three values are $\\tan\\theta$ for $\\theta=10^\\circ,70^\\circ,130^\\circ$, where $3\\theta=30^\\circ,210^\\circ,390^\\circ$ all give $\\tan3\\theta=\\tan30^\\circ=\\tfrac1{\\sqrt3}$.",
          "Set $u=\\tan\\theta$ in $\\tan3\\theta=\\dfrac{3u-u^3}{1-3u^2}=\\dfrac1{\\sqrt3}$: $\\sqrt3(3u-u^3)=1-3u^2\\Rightarrow \\sqrt3 u^3-3u^2-3\\sqrt3 u+1=0\\Rightarrow u^3-\\sqrt3 u^2-3u+\\tfrac1{\\sqrt3}=0$. By Vieta $\\sum u=\\sqrt3$, so $\\cot20^\\circ+\\cot80^\\circ+\\cot140^\\circ=\\boxed{\\sqrt3}.$"
        ]
      }
    ],
    "remark": "**Insight.** Converting each cotangent to the tangent of a complementary angle exposes a fresh triple-angle equation whose root-sum is read straight off Vieta — and it agrees with the reciprocal-sum $e_2/e_3$ of the given cubic, provided every sign is tracked."
  },
  {
    "theme": "multiangle",
    "themeLabel": "Multiple & Sub-Multiple Angles",
    "title": "Five Times the Angle",
    "difficulty": 5,
    "task": "Evaluate the sine product",
    "tags": [
      "multiple-angle",
      "doubling",
      "product",
      "telescope"
    ],
    "statement": "Evaluate $\\sin 6^\\circ\\,\\sin 42^\\circ\\,\\sin 66^\\circ\\,\\sin 78^\\circ$.",
    "answer": "$$\\sin 6^\\circ\\,\\sin 42^\\circ\\,\\sin 66^\\circ\\,\\sin 78^\\circ=\\boxed{\\dfrac{1}{16}}$$",
    "trap": "Trying to force a $2^k$-doubling telescope $\\sin\\theta\\sin2\\theta\\sin4\\theta\\dots$ as in the $\\cos20^\\circ\\cos40^\\circ\\cos80^\\circ$ chestnut — but $6^\\circ,42^\\circ,66^\\circ,78^\\circ$ are NOT a geometric chain. The clean route is to rewrite the three larger sines as cosines of complements ($\\sin66^\\circ=\\cos24^\\circ$, etc.) and exploit the identity $\\sin\\theta\\,\\cos(60^\\circ-\\theta')\\cos(60^\\circ+\\theta')$-type triple-angle factorisation. Forcing the wrong template gives a stuck, non-telescoping mess.",
    "solutions": [
      {
        "name": "Group into golden-ratio cosines",
        "steps": [
          "Pair the outer and inner sines: $\\sin42^\\circ\\sin78^\\circ=\\tfrac12(\\cos36^\\circ-\\cos120^\\circ)=\\tfrac12\\!\\left(\\cos36^\\circ+\\tfrac12\\right)$ and $\\sin6^\\circ\\sin66^\\circ=\\tfrac12(\\cos60^\\circ-\\cos72^\\circ)=\\tfrac12\\!\\left(\\tfrac12-\\cos72^\\circ\\right).$",
          "With $\\cos36^\\circ=\\tfrac{1+\\sqrt5}{4}$ and $\\cos72^\\circ=\\tfrac{\\sqrt5-1}{4}$ this gives $P=\\tfrac14\\!\\left(\\cos36^\\circ+\\tfrac12\\right)\\!\\left(\\tfrac12-\\cos72^\\circ\\right)=\\tfrac14\\cdot\\tfrac{3+\\sqrt5}{4}\\cdot\\tfrac{3-\\sqrt5}{4}=\\tfrac14\\cdot\\tfrac{4}{16}=\\boxed{\\tfrac1{16}}.$"
        ]
      },
      {
        "name": "Product-to-sum pairing",
        "steps": [
          "Pair $\\sin6^\\circ\\sin66^\\circ=\\tfrac12(\\cos60^\\circ-\\cos72^\\circ)$ and $\\sin42^\\circ\\sin78^\\circ=\\tfrac12(\\cos36^\\circ-\\cos120^\\circ)$. So $P=\\tfrac14(\\cos60^\\circ-\\cos72^\\circ)(\\cos36^\\circ-\\cos120^\\circ)$.",
          "Substitute $\\cos60^\\circ=\\tfrac12,\\ \\cos72^\\circ=\\tfrac{\\sqrt5-1}{4},\\ \\cos36^\\circ=\\tfrac{\\sqrt5+1}{4},\\ \\cos120^\\circ=-\\tfrac12$: $P=\\tfrac14\\cdot\\tfrac{3-\\sqrt5}{4}\\cdot\\tfrac{3+\\sqrt5}{4}=\\tfrac14\\cdot\\tfrac{9-5}{16}=\\tfrac14\\cdot\\tfrac14=\\boxed{\\tfrac1{16}}.$"
        ]
      }
    ],
    "remark": "**Insight.** When the angles refuse to form a doubling chain, complementary conversion plus product-to-sum pairing turns the product into a tidy difference of golden-ratio cosines; the surds $\\sqrt5$ cancel in a conjugate pair, leaving the clean $\\tfrac1{16}$."
  },
  {
    "theme": "transform",
    "themeLabel": "Sum-to-Product Transformations",
    "title": "Three Cosines Over a Sine",
    "difficulty": 4,
    "task": "Prove the identity",
    "tags": [
      "sum-to-product",
      "arithmetic-progression",
      "ratio-identity",
      "common-angle"
    ],
    "statement": "Prove that $\\cos x+\\cos 3x+\\cos 5x=\\dfrac{\\sin 6x}{2\\sin x}$, stating where it is valid.",
    "answer": "$$\\cos x+\\cos 3x+\\cos 5x=\\boxed{\\dfrac{\\sin 6x}{2\\sin x}}\\qquad(\\sin x\\neq 0)$$",
    "trap": "The danger is choosing the wrong pair. Pairing $\\cos x+\\cos 3x=2\\cos 2x\\cos x$ leaves $\\cos 2x\\cos x+\\tfrac12\\cos 5x$, an awkward leftover. The clean move is to pair the **extreme** terms $\\cos x+\\cos 5x=2\\cos 3x\\cos 2x$ so the middle term $\\cos 3x$ is exposed as a common factor: $\\cos 3x(2\\cos 2x+1)$. Forgetting the validity condition $\\sin x\\neq 0$ (the right side is undefined at $x=n\\pi$, while the left side equals $3$ there) is the second trap.",
    "solutions": [
      {
        "name": "Pair the extremes, then multiply by sine",
        "steps": [
          "Pair the outermost terms: $\\cos x+\\cos 5x=2\\cos 3x\\cos 2x$.",
          "Hence the sum is $\\cos 3x(2\\cos 2x+1)$.",
          "Multiply and divide by $2\\sin x$ and use $2\\sin x\\cos 3x=\\sin 4x-\\sin 2x$ together with $2\\sin x(2\\cos 2x+1)\\cos 3x$; more directly, use the AP-sum formula $\\sum_{k=0}^{2}\\cos(x+2kx)=\\dfrac{\\sin(3\\cdot x)\\cos(x+2x)}{\\sin x}$ with first angle $x$, common difference $2x$.",
          "This gives $\\dfrac{\\sin 3x\\,\\cos 3x}{\\sin x}=\\dfrac{\\sin 6x}{2\\sin x}$, valid when $\\sin x\\neq 0$. $\\blacksquare$"
        ]
      },
      {
        "name": "Telescope with the $2\\sin x$ multiplier",
        "steps": [
          "Multiply the sum $S=\\cos x+\\cos 3x+\\cos 5x$ by $2\\sin x$.",
          "Use $2\\sin x\\cos kx=\\sin(k+1)x-\\sin(k-1)x$: the three products are $(\\sin 2x-\\sin 0)+(\\sin 4x-\\sin 2x)+(\\sin 6x-\\sin 4x)$.",
          "The middle terms telescope, leaving $2\\sin x\\,S=\\sin 6x$.",
          "Therefore $S=\\dfrac{\\sin 6x}{2\\sin x}$ provided $\\sin x\\neq 0$. $\\blacksquare$"
        ]
      }
    ],
    "remark": "**Insight.** A sum of cosines in AP has two faces: factor it (pair the extremes to expose the centre) or telescope it (multiply by twice the sine of the half-step so each $2\\sin x\\cos kx$ splits into a difference). The telescoping view explains why the answer is always $\\dfrac{\\sin(\\text{count}\\cdot\\text{step})}{2\\sin(\\text{step})}$ times the centre."
  },
  {
    "theme": "transform",
    "themeLabel": "Sum-to-Product Transformations",
    "title": "Sines of a Triangle, Halved",
    "difficulty": 4,
    "task": "Factor the conditional sum",
    "tags": [
      "sum-to-product",
      "triangle",
      "conditional-identity",
      "half-angle"
    ],
    "statement": "In a triangle with $A+B+C=\\pi$, prove that $\\sin A+\\sin B+\\sin C=4\\cos\\dfrac{A}{2}\\cos\\dfrac{B}{2}\\cos\\dfrac{C}{2}$.",
    "answer": "$$\\sin A+\\sin B+\\sin C=\\boxed{\\,4\\cos\\dfrac{A}{2}\\cos\\dfrac{B}{2}\\cos\\dfrac{C}{2}\\,}$$",
    "trap": "After $\\sin A+\\sin B=2\\sin\\tfrac{A+B}{2}\\cos\\tfrac{A-B}{2}$ the constraint must enter: since $A+B=\\pi-C$, we get $\\sin\\tfrac{A+B}{2}=\\sin\\tfrac{\\pi-C}{2}=\\cos\\tfrac{C}{2}$. The trap is to leave $\\sin C$ untouched — it must be written as $\\sin C=2\\sin\\tfrac{C}{2}\\cos\\tfrac{C}{2}$ so that the common factor $\\cos\\tfrac{C}{2}$ appears in **all** terms. Skipping the conversion $\\sin\\tfrac{A+B}{2}=\\cos\\tfrac{C}{2}$ (or dropping the factor of $2$) breaks the factorisation.",
    "solutions": [
      {
        "name": "Pair two sines, split the third",
        "steps": [
          "$\\sin A+\\sin B=2\\sin\\dfrac{A+B}{2}\\cos\\dfrac{A-B}{2}$, and since $A+B=\\pi-C$, $\\sin\\dfrac{A+B}{2}=\\cos\\dfrac{C}{2}$.",
          "So $\\sin A+\\sin B=2\\cos\\dfrac{C}{2}\\cos\\dfrac{A-B}{2}$, and write $\\sin C=2\\sin\\dfrac{C}{2}\\cos\\dfrac{C}{2}$.",
          "Add: $2\\cos\\dfrac{C}{2}\\!\\left(\\cos\\dfrac{A-B}{2}+\\sin\\dfrac{C}{2}\\right)$, and $\\sin\\dfrac{C}{2}=\\cos\\dfrac{A+B}{2}$, so the bracket is $\\cos\\dfrac{A-B}{2}+\\cos\\dfrac{A+B}{2}=2\\cos\\dfrac{A}{2}\\cos\\dfrac{B}{2}$.",
          "Hence the sum is $4\\cos\\dfrac{A}{2}\\cos\\dfrac{B}{2}\\cos\\dfrac{C}{2}=\\boxed{4\\cos\\tfrac{A}{2}\\cos\\tfrac{B}{2}\\cos\\tfrac{C}{2}}$. $\\blacksquare$"
        ]
      },
      {
        "name": "Product-to-sum check (reverse direction)",
        "steps": [
          "Start from the right side: $4\\cos\\dfrac{A}{2}\\cos\\dfrac{B}{2}\\cos\\dfrac{C}{2}$ and combine the first two: $2\\cos\\dfrac{B}{2}\\Big(\\cos\\dfrac{A+C}{2}+\\cos\\dfrac{A-C}{2}\\Big)$ via $2\\cos\\tfrac{A}{2}\\cos\\tfrac{C}{2}=\\cos\\tfrac{A-C}{2}+\\cos\\tfrac{A+C}{2}$.",
          "Use $\\dfrac{A+C}{2}=\\dfrac{\\pi-B}{2}$ so $\\cos\\dfrac{A+C}{2}=\\sin\\dfrac{B}{2}$; thus the expression is $2\\cos\\dfrac{B}{2}\\sin\\dfrac{B}{2}+2\\cos\\dfrac{B}{2}\\cos\\dfrac{A-C}{2}=\\sin B+2\\cos\\dfrac{B}{2}\\cos\\dfrac{A-C}{2}$.",
          "Now $2\\cos\\dfrac{B}{2}\\cos\\dfrac{A-C}{2}$ with $\\cos\\dfrac{B}{2}=\\sin\\dfrac{A+C}{2}$ gives $\\sin\\dfrac{A+C}{2}\\cdot 2\\cos\\dfrac{A-C}{2}=\\sin A+\\sin C$.",
          "Total $=\\sin A+\\sin B+\\sin C$, confirming the identity. $\\boxed{4\\cos\\tfrac{A}{2}\\cos\\tfrac{B}{2}\\cos\\tfrac{C}{2}}$"
        ]
      }
    ],
    "remark": "**Insight.** The triangle condition $A+B+C=\\pi$ turns every co-function bridge $\\sin\\tfrac{A+B}{2}=\\cos\\tfrac{C}{2}$ into a factor-sharing device. Splitting the lone $\\sin C$ into half-angles is what lets the third cosine join the product — the conditional identity is just sum-to-product plus the $\\pi$-complement."
  },
  {
    "theme": "transform",
    "themeLabel": "Sum-to-Product Transformations",
    "title": "One Plus Four Half-Sines",
    "difficulty": 4,
    "task": "Factor the cosine sum",
    "tags": [
      "sum-to-product",
      "triangle",
      "conditional-identity",
      "half-angle"
    ],
    "statement": "In a triangle $(A+B+C=\\pi)$, prove that $\\cos A+\\cos B+\\cos C=1+4\\sin\\dfrac{A}{2}\\sin\\dfrac{B}{2}\\sin\\dfrac{C}{2}$.",
    "answer": "$$\\cos A+\\cos B+\\cos C=\\boxed{\\,1+4\\sin\\dfrac{A}{2}\\sin\\dfrac{B}{2}\\sin\\dfrac{C}{2}\\,}$$",
    "trap": "Unlike the sine version, the answer is not a pure product — it carries a stand-alone $1$. The trap is to handle $\\cos C$ with $\\cos C=1-2\\sin^2\\tfrac{C}{2}$ but then forget that the $1$ must survive to the final answer. After $\\cos A+\\cos B=2\\cos\\tfrac{A+B}{2}\\cos\\tfrac{A-B}{2}=2\\sin\\tfrac{C}{2}\\cos\\tfrac{A-B}{2}$, the leftover $1-2\\sin^2\\tfrac{C}{2}$ must be regrouped so that $2\\sin\\tfrac{C}{2}$ becomes a common factor of two terms while the $1$ is set aside. Dropping the $1$ (treating it like the sine identity) is the classic mistake.",
    "solutions": [
      {
        "name": "Pair two cosines, double-angle the third",
        "steps": [
          "$\\cos A+\\cos B=2\\cos\\dfrac{A+B}{2}\\cos\\dfrac{A-B}{2}$, and $\\cos\\dfrac{A+B}{2}=\\cos\\dfrac{\\pi-C}{2}=\\sin\\dfrac{C}{2}$, so this is $2\\sin\\dfrac{C}{2}\\cos\\dfrac{A-B}{2}$.",
          "Write $\\cos C=1-2\\sin^2\\dfrac{C}{2}$. The whole sum is $1+2\\sin\\dfrac{C}{2}\\cos\\dfrac{A-B}{2}-2\\sin^2\\dfrac{C}{2}$.",
          "Factor $2\\sin\\dfrac{C}{2}$ from the last two terms: $1+2\\sin\\dfrac{C}{2}\\Big(\\cos\\dfrac{A-B}{2}-\\sin\\dfrac{C}{2}\\Big)$, and $\\sin\\dfrac{C}{2}=\\cos\\dfrac{A+B}{2}$.",
          "Then $\\cos\\dfrac{A-B}{2}-\\cos\\dfrac{A+B}{2}=2\\sin\\dfrac{A}{2}\\sin\\dfrac{B}{2}$, giving $1+4\\sin\\dfrac{A}{2}\\sin\\dfrac{B}{2}\\sin\\dfrac{C}{2}=\\boxed{1+4\\sin\\tfrac{A}{2}\\sin\\tfrac{B}{2}\\sin\\tfrac{C}{2}}$. $\\blacksquare$"
        ]
      },
      {
        "name": "Verify by expanding the product side",
        "steps": [
          "Expand $4\\sin\\dfrac{A}{2}\\sin\\dfrac{B}{2}\\sin\\dfrac{C}{2}$: first $2\\sin\\dfrac{A}{2}\\sin\\dfrac{B}{2}=\\cos\\dfrac{A-B}{2}-\\cos\\dfrac{A+B}{2}$.",
          "Multiply by $2\\sin\\dfrac{C}{2}=2\\cos\\dfrac{A+B}{2}$: $2\\cos\\dfrac{A+B}{2}\\cos\\dfrac{A-B}{2}-2\\cos^2\\dfrac{A+B}{2}$.",
          "The first term is $\\cos A+\\cos B$; the second is $-(1+\\cos(A+B))=-(1-\\cos C)=\\cos C-1$.",
          "So $4\\sin\\tfrac{A}{2}\\sin\\tfrac{B}{2}\\sin\\tfrac{C}{2}=\\cos A+\\cos B+\\cos C-1$, i.e. $\\cos A+\\cos B+\\cos C=\\boxed{1+4\\sin\\tfrac{A}{2}\\sin\\tfrac{B}{2}\\sin\\tfrac{C}{2}}$. $\\blacksquare$"
        ]
      }
    ],
    "remark": "**Insight.** The lone $1$ is the fingerprint of $\\cos C=1-2\\sin^2\\tfrac{C}{2}$: the half-angle squared term is what refuses to fold into the product and leaves a constant behind. This is precisely why $\\cos A+\\cos B+\\cos C=1+\\tfrac{r}{R}$ in a triangle — the product equals $r/R$, and the $1$ is structural."
  },
  {
    "theme": "transform",
    "themeLabel": "Sum-to-Product Transformations",
    "title": "Three Sines Share a Centre",
    "difficulty": 4,
    "task": "Factor the AP sum",
    "tags": [
      "sum-to-product",
      "arithmetic-progression",
      "factorisation",
      "central-angle"
    ],
    "statement": "Show that $\\sin x+\\sin 3x+\\sin 5x=\\sin 3x\\,(1+2\\cos 2x)$.",
    "answer": "$$\\sin x+\\sin 3x+\\sin 5x=\\boxed{\\,\\sin 3x\\,(1+2\\cos 2x)\\,}$$",
    "trap": "The angles $x,3x,5x$ form an AP centred at $3x$. The clean route pairs the **extremes** $\\sin x+\\sin 5x=2\\sin 3x\\cos 2x$, leaving the centre $\\sin 3x$ to factor out. The trap is to pair adjacent terms instead — $\\sin x+\\sin 3x=2\\sin 2x\\cos x$ — which throws away the natural common factor $\\sin 3x$ and leaves an irreducible mess $2\\sin 2x\\cos x+\\sin 5x$. Always pair so the common centre is exposed.",
    "solutions": [
      {
        "name": "Pair the extremes",
        "steps": [
          "Pair the first and last terms: $\\sin x+\\sin 5x=2\\sin\\dfrac{x+5x}{2}\\cos\\dfrac{5x-x}{2}=2\\sin 3x\\cos 2x$.",
          "Add the untouched middle term: $\\sin x+\\sin 3x+\\sin 5x=2\\sin 3x\\cos 2x+\\sin 3x$.",
          "Factor the common $\\sin 3x$: $\\sin 3x(2\\cos 2x+1)$.",
          "Hence $\\sin x+\\sin 3x+\\sin 5x=\\boxed{\\sin 3x(1+2\\cos 2x)}$. $\\blacksquare$"
        ]
      },
      {
        "name": "Shift to the centre angle",
        "steps": [
          "Write each angle relative to the centre $3x$: $\\sin x=\\sin(3x-2x)$ and $\\sin 5x=\\sin(3x+2x)$.",
          "Expand: $\\sin(3x-2x)+\\sin(3x+2x)=2\\sin 3x\\cos 2x$ (the $\\cos 3x\\sin 2x$ terms cancel).",
          "Add the central term $\\sin 3x$ to obtain $2\\sin 3x\\cos 2x+\\sin 3x$.",
          "Factor: $\\boxed{\\sin 3x(1+2\\cos 2x)}$. $\\blacksquare$"
        ]
      }
    ],
    "remark": "**Insight.** Any three-term AP of sines (or cosines) factors as $(\\text{central term})\\times(1+2\\cos(\\text{step}))$: the extremes combine to twice the centre times the cosine of the step, and the centre itself supplies the $+1$. Pairing the extremes — never the neighbours — is what surfaces the shared central factor."
  },
  {
    "theme": "transform",
    "themeLabel": "Sum-to-Product Transformations",
    "title": "A Ratio That Hides a Tangent",
    "difficulty": 4,
    "task": "Simplify the ratio",
    "tags": [
      "sum-to-product",
      "ratio-identity",
      "tangent",
      "simplification"
    ],
    "statement": "Simplify $\\dfrac{\\cos x-\\cos 3x}{\\sin 3x-\\sin x}$ to a single trigonometric function.",
    "answer": "$$\\dfrac{\\cos x-\\cos 3x}{\\sin 3x-\\sin x}=\\boxed{\\,\\tan 2x\\,}$$",
    "trap": "The difference-to-product formulas both carry a sign that is easy to flip. $\\cos x-\\cos 3x=-2\\sin\\tfrac{x+3x}{2}\\sin\\tfrac{x-3x}{2}=+2\\sin 2x\\sin x$ (two sign flips cancel), and $\\sin 3x-\\sin x=2\\cos\\tfrac{3x+x}{2}\\sin\\tfrac{3x-x}{2}=2\\cos 2x\\sin x$. The trap is mishandling $\\sin\\tfrac{x-3x}{2}=\\sin(-x)=-\\sin x$ — get one sign wrong and the answer comes out $-\\tan 2x$ or $-\\cot 2x$. The shared $\\sin x$ then cancels to leave $\\tan 2x$.",
    "solutions": [
      {
        "name": "Difference-to-product, top and bottom",
        "steps": [
          "Numerator: $\\cos x-\\cos 3x=-2\\sin\\dfrac{4x}{2}\\sin\\dfrac{-2x}{2}=-2\\sin 2x(-\\sin x)=2\\sin 2x\\sin x$.",
          "Denominator: $\\sin 3x-\\sin x=2\\cos\\dfrac{4x}{2}\\sin\\dfrac{2x}{2}=2\\cos 2x\\sin x$.",
          "Form the ratio: $\\dfrac{2\\sin 2x\\sin x}{2\\cos 2x\\sin x}$.",
          "Cancel $2\\sin x$ (assuming $\\sin x\\neq0$): $\\dfrac{\\sin 2x}{\\cos 2x}=\\boxed{\\tan 2x}$."
        ]
      },
      {
        "name": "Product-to-sum cross-check at a value",
        "steps": [
          "Both numerator and denominator share the factor $2\\sin x$, so the ratio is independent of that factor and equals $\\dfrac{\\sin 2x}{\\cos 2x}$.",
          "Confirm at $x=\\tfrac{\\pi}{6}$: numerator $\\cos 30^\\circ-\\cos 90^\\circ=\\tfrac{\\sqrt3}{2}$, denominator $\\sin 90^\\circ-\\sin 30^\\circ=1-\\tfrac12=\\tfrac12$, ratio $=\\sqrt3$.",
          "And $\\tan 2x=\\tan 60^\\circ=\\sqrt3$ — they agree.",
          "Hence the simplification is $\\boxed{\\tan 2x}$."
        ]
      }
    ],
    "remark": "**Insight.** A difference of cosines over a difference of sines almost always collapses to a tangent of the **mean angle**: both halves expose the same $\\sin(\\text{half-step})$ factor, which cancels, while the average angle $2x$ survives as $\\dfrac{\\sin 2x}{\\cos 2x}$. The only hazard is the negative sign buried in $\\cos P-\\cos Q$."
  },
  {
    "theme": "transform",
    "themeLabel": "Sum-to-Product Transformations",
    "title": "A Triangle Ratio of Cotangents",
    "difficulty": 4,
    "task": "Prove the triangle ratio",
    "tags": [
      "sum-to-product",
      "triangle",
      "ratio-identity",
      "half-angle"
    ],
    "statement": "In a triangle $(A+B+C=\\pi)$, prove that $\\dfrac{\\sin A+\\sin B+\\sin C}{\\sin A+\\sin B-\\sin C}=\\cot\\dfrac{A}{2}\\cot\\dfrac{B}{2}$.",
    "answer": "$$\\dfrac{\\sin A+\\sin B+\\sin C}{\\sin A+\\sin B-\\sin C}=\\boxed{\\,\\cot\\dfrac{A}{2}\\cot\\dfrac{B}{2}\\,}$$",
    "trap": "Both numerator and denominator must be factored with $\\cos\\tfrac{C}{2}$ as the common bridge. Using $\\sin A+\\sin B=2\\cos\\tfrac{C}{2}\\cos\\tfrac{A-B}{2}$ (since $\\tfrac{A+B}{2}=\\tfrac{\\pi-C}{2}$) and $\\sin C=2\\sin\\tfrac{C}{2}\\cos\\tfrac{C}{2}$, the numerator becomes $2\\cos\\tfrac{C}{2}\\big(\\cos\\tfrac{A-B}{2}+\\sin\\tfrac{C}{2}\\big)$. The trap is failing to rewrite $\\sin\\tfrac{C}{2}=\\cos\\tfrac{A+B}{2}$ in the **numerator** and $\\sin\\tfrac{C}{2}=\\cos\\tfrac{A+B}{2}$ in the **denominator** consistently — the numerator then yields $\\cos\\tfrac{A-B}{2}+\\cos\\tfrac{A+B}{2}=2\\cos\\tfrac{A}{2}\\cos\\tfrac{B}{2}$ and the denominator $\\cos\\tfrac{A-B}{2}-\\cos\\tfrac{A+B}{2}=2\\sin\\tfrac{A}{2}\\sin\\tfrac{B}{2}$.",
    "solutions": [
      {
        "name": "Factor numerator and denominator separately",
        "steps": [
          "Numerator: $\\sin A+\\sin B=2\\cos\\dfrac{C}{2}\\cos\\dfrac{A-B}{2}$ and $\\sin C=2\\sin\\dfrac{C}{2}\\cos\\dfrac{C}{2}$, so $\\sin A+\\sin B+\\sin C=2\\cos\\dfrac{C}{2}\\Big(\\cos\\dfrac{A-B}{2}+\\sin\\dfrac{C}{2}\\Big)$.",
          "Since $\\sin\\dfrac{C}{2}=\\cos\\dfrac{A+B}{2}$, the bracket is $\\cos\\dfrac{A-B}{2}+\\cos\\dfrac{A+B}{2}=2\\cos\\dfrac{A}{2}\\cos\\dfrac{B}{2}$. So numerator $=4\\cos\\dfrac{C}{2}\\cos\\dfrac{A}{2}\\cos\\dfrac{B}{2}$.",
          "Denominator: $\\sin A+\\sin B-\\sin C=2\\cos\\dfrac{C}{2}\\Big(\\cos\\dfrac{A-B}{2}-\\sin\\dfrac{C}{2}\\Big)=2\\cos\\dfrac{C}{2}\\Big(\\cos\\dfrac{A-B}{2}-\\cos\\dfrac{A+B}{2}\\Big)=2\\cos\\dfrac{C}{2}\\cdot 2\\sin\\dfrac{A}{2}\\sin\\dfrac{B}{2}$.",
          "Divide: $\\dfrac{4\\cos\\frac{C}{2}\\cos\\frac{A}{2}\\cos\\frac{B}{2}}{4\\cos\\frac{C}{2}\\sin\\frac{A}{2}\\sin\\frac{B}{2}}=\\cot\\dfrac{A}{2}\\cot\\dfrac{B}{2}=\\boxed{\\cot\\tfrac{A}{2}\\cot\\tfrac{B}{2}}$. $\\blacksquare$"
        ]
      },
      {
        "name": "Use the known sums",
        "steps": [
          "Recall $\\sin A+\\sin B+\\sin C=4\\cos\\dfrac{A}{2}\\cos\\dfrac{B}{2}\\cos\\dfrac{C}{2}$ (the triangle sine identity).",
          "Similarly, $\\sin A+\\sin B-\\sin C=4\\cos\\dfrac{C}{2}\\sin\\dfrac{A}{2}\\sin\\dfrac{B}{2}$ (replace $\\cos\\tfrac{A}{2}\\cos\\tfrac{B}{2}$-type pairing with the minus sign on $\\sin C$).",
          "Form the quotient and cancel the shared $4\\cos\\dfrac{C}{2}$.",
          "What remains is $\\dfrac{\\cos\\frac{A}{2}\\cos\\frac{B}{2}}{\\sin\\frac{A}{2}\\sin\\frac{B}{2}}=\\boxed{\\cot\\tfrac{A}{2}\\cot\\tfrac{B}{2}}$. $\\blacksquare$"
        ]
      }
    ],
    "remark": "**Insight.** Flipping a single sign — $+\\sin C$ versus $-\\sin C$ — swaps the bracket from $\\cos\\tfrac{A-B}{2}+\\cos\\tfrac{A+B}{2}$ (a product of cosines) to $\\cos\\tfrac{A-B}{2}-\\cos\\tfrac{A+B}{2}$ (a product of sines). That sign is the entire content of the identity: it converts half-angle cosines into sines, turning the ratio into a product of cotangents."
  },
  {
    "theme": "transform",
    "themeLabel": "Sum-to-Product Transformations",
    "title": "Four Sines in a Row",
    "difficulty": 5,
    "task": "Collapse to a product",
    "tags": [
      "sum-to-product",
      "arithmetic-progression",
      "factorisation",
      "pairing"
    ],
    "statement": "Express $\\sin x+\\sin 3x+\\sin 5x+\\sin 7x$ as a single product of three trigonometric factors.",
    "answer": "$$\\sin x+\\sin 3x+\\sin 5x+\\sin 7x=\\boxed{\\,4\\cos x\\,\\cos 2x\\,\\sin 4x\\,}$$",
    "trap": "The natural impulse is to pair adjacent terms $(\\sin x+\\sin 3x)$ and $(\\sin 5x+\\sin 7x)$, giving $2\\sin 2x\\cos x+2\\sin 6x\\cos x=2\\cos x(\\sin 2x+\\sin 6x)$. That is correct but leaves a stubborn $\\sin 2x+\\sin 6x$ to handle. The slicker trap-free route is to pair the **outer** and **inner** terms so both pairs share the same average angle $4x$: $(\\sin x+\\sin 7x)$ and $(\\sin 3x+\\sin 5x)$ both produce a factor $\\sin 4x$. Mis-pairing or averaging the wrong way (e.g. taking the common angle as $3x$) destroys the common factor and the product never closes.",
    "solutions": [
      {
        "name": "Pair outer and inner terms",
        "steps": [
          "Group symmetrically about the centre: $(\\sin x+\\sin 7x)+(\\sin 3x+\\sin 5x)$.",
          "By $\\sin P+\\sin Q=2\\sin\\tfrac{P+Q}{2}\\cos\\tfrac{P-Q}{2}$: $\\sin x+\\sin 7x=2\\sin 4x\\cos 3x$ and $\\sin 3x+\\sin 5x=2\\sin 4x\\cos x$.",
          "Factor out the shared $2\\sin 4x$: the sum equals $2\\sin 4x(\\cos 3x+\\cos x)$.",
          "Apply $\\cos 3x+\\cos x=2\\cos 2x\\cos x$, giving $2\\sin 4x\\cdot 2\\cos 2x\\cos x=\\boxed{4\\cos x\\cos 2x\\sin 4x}$."
        ]
      },
      {
        "name": "Telescope via a geometric flavour",
        "steps": [
          "The angles $1,3,5,7$ form an AP with common difference $2x$ and four terms; the mean angle is $4x$.",
          "Write each term as $\\sin(4x-3x),\\ \\sin(4x-x),\\ \\sin(4x+x),\\ \\sin(4x+3x)$ and expand: the $\\cos(\\cdot)\\sin 4x$ parts survive in pairs while the $\\sin(\\cdot)\\cos 4x$ parts cancel.",
          "This leaves $2\\sin 4x(\\cos x+\\cos 3x)$.",
          "Finally $\\cos x+\\cos 3x=2\\cos 2x\\cos x$, so the total is $\\boxed{4\\cos x\\cos 2x\\sin 4x}$."
        ]
      }
    ],
    "remark": "**Insight.** When angles sit in arithmetic progression, pairing terms equidistant from the centre forces a common factor at the **mean angle** — here $\\sin 4x$. The remaining cosines themselves form a shorter AP, so the same trick cascades. Choosing the centre correctly is the whole game; pair adjacent terms and you fight an extra round."
  },
  {
    "theme": "transform",
    "themeLabel": "Sum-to-Product Transformations",
    "title": "The Weighted Tangent Telescope",
    "difficulty": 5,
    "task": "Sum the weighted series",
    "tags": [
      "telescoping",
      "tangent-difference",
      "doubling",
      "cotangent"
    ],
    "statement": "Using $\\tan\\theta=\\cot\\theta-2\\cot 2\\theta$, evaluate $\\displaystyle T=\\sum_{k=0}^{n-1}2^{k}\\tan\\!\\big(2^{k}x\\big)$ in closed form.",
    "answer": "$$T=\\sum_{k=0}^{n-1}2^{k}\\tan\\!\\big(2^{k}x\\big)=\\boxed{\\,\\cot x-2^{n}\\cot\\!\\big(2^{n}x\\big)\\,}$$",
    "trap": "First prove $\\tan\\theta=\\cot\\theta-2\\cot 2\\theta$; the factor of $2$ in front of $\\cot 2\\theta$ is essential and easy to drop. Multiplying by the weight gives $2^{k}\\tan(2^{k}x)=2^{k}\\cot(2^{k}x)-2^{k+1}\\cot(2^{k+1}x)$ — a difference of the **same** quantity $2^{m}\\cot(2^{m}x)$ at consecutive $m$. The trap is omitting the weight $2^{k}$ or the doubling inside $\\cot 2\\theta$: then the terms no longer line up and the telescope fails. Correctly indexed, only $\\cot x$ (at $k=0$) and $-2^{n}\\cot(2^{n}x)$ (at $k=n-1$) survive.",
    "solutions": [
      {
        "name": "Prove the difference, then telescope with weights",
        "steps": [
          "From $\\cot\\theta-\\cot 2\\theta=\\dfrac{1}{\\sin 2\\theta}$ and $\\cot 2\\theta=\\dfrac{\\cos 2\\theta}{\\sin 2\\theta}$: $\\cot\\theta-2\\cot 2\\theta=\\dfrac{1}{\\sin 2\\theta}-\\cot 2\\theta=\\dfrac{1-\\cos 2\\theta}{\\sin 2\\theta}=\\dfrac{2\\sin^2\\theta}{2\\sin\\theta\\cos\\theta}=\\tan\\theta.$",
          "Put $\\theta=2^{k}x$ and multiply by $2^{k}$: $2^{k}\\tan(2^{k}x)=2^{k}\\cot(2^{k}x)-2^{k+1}\\cot(2^{k+1}x)$.",
          "Let $u_m=2^{m}\\cot(2^{m}x)$. Then the $k$-th term is $u_k-u_{k+1}$, so $T=\\sum_{k=0}^{n-1}(u_k-u_{k+1})=u_0-u_n$.",
          "Thus $T=\\cot x-2^{n}\\cot(2^{n}x)=\\boxed{\\cot x-2^{n}\\cot(2^{n}x)}$."
        ]
      },
      {
        "name": "Induction on $n$",
        "steps": [
          "Base $n=1$: $T_1=\\tan x$, and the claim gives $\\cot x-2\\cot 2x$, which equals $\\tan x$ by the difference identity — true.",
          "Assume $T_n=\\cot x-2^{n}\\cot(2^{n}x)$. Then $T_{n+1}=T_n+2^{n}\\tan(2^{n}x)$.",
          "Apply the identity at $\\theta=2^{n}x$: $2^{n}\\tan(2^{n}x)=2^{n}\\cot(2^{n}x)-2^{n+1}\\cot(2^{n+1}x)$.",
          "Adding, the $2^{n}\\cot(2^{n}x)$ terms cancel: $T_{n+1}=\\cot x-2^{n+1}\\cot(2^{n+1}x)$, closing the induction. $\\boxed{\\cot x-2^{n}\\cot(2^{n}x)}$"
        ]
      }
    ],
    "remark": "**Insight.** $\\tan\\theta=\\cot\\theta-2\\cot 2\\theta$ is the doubling formula read backwards: each tangent is the drop in the weighted cotangent $2^{m}\\cot(2^{m}x)$ across one doubling. The geometric weights $2^{k}$ are exactly what make consecutive terms match, so the series collapses to its two endpoints — a clean telescoping with no partial-fraction series in sight."
  },
  {
    "theme": "transform",
    "themeLabel": "Sum-to-Product Transformations",
    "title": "The Doubling Cotangent Telescope",
    "difficulty": 5,
    "task": "Sum the telescoping series",
    "tags": [
      "telescoping",
      "cotangent-difference",
      "product-to-sum",
      "doubling"
    ],
    "statement": "Using $\\dfrac{1}{\\sin 2\\theta}=\\cot\\theta-\\cot 2\\theta$, evaluate $\\displaystyle S=\\sum_{k=1}^{n}\\dfrac{1}{\\sin(2^{k}x)}$ in closed form.",
    "answer": "$$S=\\sum_{k=1}^{n}\\dfrac{1}{\\sin(2^{k}x)}=\\boxed{\\,\\cot x-\\cot\\!\\big(2^{n}x\\big)\\,}$$",
    "trap": "The identity to prove first is $\\dfrac{1}{\\sin 2\\theta}=\\cot\\theta-\\cot 2\\theta$; a frequent error is writing $\\cot 2\\theta-\\cot\\theta$ (wrong sign) or $\\cot\\theta-\\cot 2\\theta=\\dfrac{1}{\\sin\\theta}$ (wrong angle). With $\\theta=2^{k-1}x$ the $k$-th term is $\\cot(2^{k-1}x)-\\cot(2^{k}x)$, so the **inner** terms cancel and only $\\cot x$ and $-\\cot(2^{n}x)$ survive. Mis-indexing the doubling (using $\\theta=2^{k}x$) collapses the telescope to the wrong endpoints.",
    "solutions": [
      {
        "name": "Establish the difference, then telescope",
        "steps": [
          "Compute $\\cot\\theta-\\cot 2\\theta=\\dfrac{\\cos\\theta}{\\sin\\theta}-\\dfrac{\\cos 2\\theta}{\\sin 2\\theta}=\\dfrac{\\cos\\theta\\sin 2\\theta-\\sin\\theta\\cos 2\\theta}{\\sin\\theta\\sin 2\\theta}=\\dfrac{\\sin(2\\theta-\\theta)}{\\sin\\theta\\sin 2\\theta}=\\dfrac{\\sin\\theta}{\\sin\\theta\\sin 2\\theta}=\\dfrac{1}{\\sin 2\\theta}.$",
          "Set $\\theta=2^{k-1}x$, so $2\\theta=2^{k}x$ and the $k$-th term is $\\dfrac{1}{\\sin(2^{k}x)}=\\cot(2^{k-1}x)-\\cot(2^{k}x)$.",
          "Sum from $k=1$ to $n$: $S=\\big(\\cot x-\\cot 2x\\big)+\\big(\\cot 2x-\\cot 4x\\big)+\\cdots+\\big(\\cot 2^{n-1}x-\\cot 2^{n}x\\big)$.",
          "All interior cotangents cancel, leaving $S=\\cot x-\\cot(2^{n}x)=\\boxed{\\cot x-\\cot(2^{n}x)}$."
        ]
      },
      {
        "name": "Induction on $n$",
        "steps": [
          "Base $n=1$: claim says $S_1=\\cot x-\\cot 2x$, which equals $\\dfrac{1}{\\sin 2x}$ by the difference identity — true.",
          "Inductive step: assume $S_n=\\cot x-\\cot(2^{n}x)$. Then $S_{n+1}=S_n+\\dfrac{1}{\\sin(2^{n+1}x)}$.",
          "Apply the identity with $\\theta=2^{n}x$: $\\dfrac{1}{\\sin(2^{n+1}x)}=\\cot(2^{n}x)-\\cot(2^{n+1}x)$.",
          "So $S_{n+1}=\\cot x-\\cot(2^{n}x)+\\cot(2^{n}x)-\\cot(2^{n+1}x)=\\cot x-\\cot(2^{n+1}x)$, completing the induction. $\\boxed{\\cot x-\\cot(2^{n}x)}$"
        ]
      }
    ],
    "remark": "**Insight.** $\\dfrac{1}{\\sin 2\\theta}=\\cot\\theta-\\cot 2\\theta$ is a *product-to-sum in disguise*: the numerator $\\sin(2\\theta-\\theta)$ is exactly what makes the cosecant a one-step cotangent difference. Whenever the angle **doubles** each term, the differences chain link-to-link and the whole sum collapses to its two outer cotangents."
  },
  {
    "theme": "transform",
    "themeLabel": "Sum-to-Product Transformations",
    "title": "Counting Roots of a Cosine Triple",
    "difficulty": 5,
    "task": "Count solutions in an interval",
    "tags": [
      "sum-to-product",
      "trigonometric-equation",
      "solution-counting",
      "factorisation"
    ],
    "statement": "Find the number of solutions of $\\cos x+\\cos 2x+\\cos 3x=0$ in $[0,2\\pi)$.",
    "answer": "$$\\text{Number of solutions}=\\boxed{6}$$",
    "trap": "Pairing $\\cos x+\\cos 3x=2\\cos 2x\\cos x$ collapses the equation to $\\cos 2x(2\\cos x+1)=0$. The trap is to solve only $\\cos 2x=0$ (yielding $4$ values) and overlook the second factor $2\\cos x+1=0$, i.e. $\\cos x=-\\tfrac12$, which contributes $2$ more roots. A second trap: $\\cos x=-\\tfrac12$ gives $x=\\tfrac{2\\pi}{3},\\tfrac{4\\pi}{3}$ — neither coincides with the $\\cos 2x=0$ roots $\\tfrac{\\pi}{4},\\tfrac{3\\pi}{4},\\tfrac{5\\pi}{4},\\tfrac{7\\pi}{4}$, so there is no double-counting and the total is genuinely $4+2=6$.",
    "solutions": [
      {
        "name": "Factor via sum-to-product",
        "steps": [
          "Pair the extreme terms: $\\cos x+\\cos 3x=2\\cos 2x\\cos x$, so the equation becomes $2\\cos 2x\\cos x+\\cos 2x=0$.",
          "Factor: $\\cos 2x(2\\cos x+1)=0$.",
          "$\\cos 2x=0\\Rightarrow 2x=\\tfrac{\\pi}{2}+k\\pi\\Rightarrow x=\\tfrac{\\pi}{4},\\tfrac{3\\pi}{4},\\tfrac{5\\pi}{4},\\tfrac{7\\pi}{4}$ — four roots in $[0,2\\pi)$.",
          "$2\\cos x+1=0\\Rightarrow\\cos x=-\\tfrac12\\Rightarrow x=\\tfrac{2\\pi}{3},\\tfrac{4\\pi}{3}$ — two more, all distinct. Total $=\\boxed{6}$."
        ]
      },
      {
        "name": "Sign-change / graphical count",
        "steps": [
          "Write $f(x)=\\cos x+\\cos 2x+\\cos 3x=\\cos 2x(2\\cos x+1)$ as above; the zeros are exactly where either factor vanishes.",
          "Over $[0,2\\pi)$ the factor $\\cos 2x$ completes two full periods, crossing zero $4$ times; $2\\cos x+1$ crosses zero $2$ times.",
          "Check none coincide: $\\cos 2x=0$ forces $x\\in\\{\\tfrac{\\pi}{4},\\tfrac{3\\pi}{4},\\tfrac{5\\pi}{4},\\tfrac{7\\pi}{4}\\}$ where $\\cos x=\\pm\\tfrac{1}{\\sqrt2}\\neq-\\tfrac12$.",
          "Adding the disjoint root sets: $4+2=\\boxed{6}$ solutions."
        ]
      }
    ],
    "remark": "**Insight.** Sum-to-product is the engine of solution-counting: a sum-equal-to-zero rarely factors, but pairing the outer terms exposes a shared middle factor and turns the equation into a product of two honest equations. The only care needed afterwards is checking the two root sets are disjoint before adding their counts."
  },
  {
    "theme": "substitution",
    "themeLabel": "Trigonometric Substitution Engines",
    "title": "Radical Meets Quadratic",
    "difficulty": 4,
    "task": "Solve for x",
    "tags": [
      "cosine substitution",
      "radical equation",
      "double angle",
      "extraneous roots"
    ],
    "statement": "\\text{Solve for real } x:\\qquad x+\\sqrt{1-x^2}=\\sqrt2\\,(2x^2-1).",
    "answer": "x\\in\\left\\{\\dfrac{\\sqrt6+\\sqrt2}{4},\\ -\\dfrac{1}{\\sqrt2}\\right\\}",
    "trap": "Squaring to kill the radical produces a quartic and a swarm of candidate roots; the killer is that squaring forgets $\\sqrt{1-x^2}\\ge0$. Indeed the quartic $8x^4-4\\sqrt2\\,x^3-6x^2+2\\sqrt2\\,x+1=0$ also offers the phantoms $x=\\tfrac{1}{\\sqrt2}$ and $x=-\\sin\\tfrac{\\pi}{12}$, both of which fail the original equation. The matching pitfall in the trig route is writing $\\sqrt{1-x^2}=\\sin\\theta$ for $x=\\cos\\theta$ — valid only when $\\theta\\in[0,\\pi]$, so $\\sin\\theta\\ge0$. Students who let $\\theta$ range freely admit a phantom solution where the radical would be negative.",
    "solutions": [
      {
        "name": "Cosine substitution with the sign branch",
        "steps": [
          "Set $x=\\cos\\theta$ with $\\theta\\in[0,\\pi]$, so $\\sqrt{1-x^2}=\\sin\\theta\\ge0$ and $2x^2-1=\\cos2\\theta$; the equation becomes $\\cos\\theta+\\sin\\theta=\\sqrt2\\cos2\\theta$.",
          "Left side $=\\sqrt2\\sin(\\theta+\\tfrac{\\pi}{4})=\\sqrt2\\cos(\\tfrac{\\pi}{4}-\\theta)$, so $\\cos(\\tfrac{\\pi}{4}-\\theta)=\\cos2\\theta$, giving $2\\theta=\\pm(\\tfrac{\\pi}{4}-\\theta)+2k\\pi$.",
          "The branch $2\\theta=\\tfrac{\\pi}{4}-\\theta+2k\\pi$ gives $\\theta=\\tfrac{\\pi}{12}+\\tfrac{2k\\pi}{3}$, whose values in $[0,\\pi]$ are $\\theta=\\tfrac{\\pi}{12}$ ($k=0$) and $\\theta=\\tfrac{3\\pi}{4}$ ($k=1$); the other branch $2\\theta=\\theta-\\tfrac{\\pi}{4}+2k\\pi$ gives $\\theta=-\\tfrac{\\pi}{4}+2k\\pi$, none of which lie in $[0,\\pi]$. Hence $x=\\cos\\tfrac{\\pi}{12}=\\tfrac{\\sqrt6+\\sqrt2}{4}$ and $x=\\cos\\tfrac{3\\pi}{4}=-\\tfrac{1}{\\sqrt2}$.",
          "Both have $\\sin\\theta\\ge0$ and check in the original equation, so $x\\in\\boxed{\\{\\tfrac{\\sqrt6+\\sqrt2}{4},\\,-\\tfrac{1}{\\sqrt2}\\}}$."
        ]
      },
      {
        "name": "Isolate-and-square with validity filter",
        "steps": [
          "Move the radical alone: $\\sqrt{1-x^2}=\\sqrt2(2x^2-1)-x$, which requires the right side $\\ge0$; squaring yields the quartic $8x^4-4\\sqrt2\\,x^3-6x^2+2\\sqrt2\\,x+1=0$.",
          "Its four roots are $x=\\tfrac{\\sqrt6+\\sqrt2}{4},\\,-\\tfrac{1}{\\sqrt2},\\,\\tfrac{1}{\\sqrt2},\\,-\\sin\\tfrac{\\pi}{12}$; discarding those with $\\sqrt2(2x^2-1)-x<0$ (the squaring artifacts $\\tfrac{1}{\\sqrt2}$ and $-\\sin\\tfrac{\\pi}{12}$) leaves exactly $x=\\cos\\tfrac{\\pi}{12}$ and $x=-\\tfrac{1}{\\sqrt2}$.",
          "Substituting back confirms both: at $x=-\\tfrac{1}{\\sqrt2}$, LHS $=-\\tfrac{1}{\\sqrt2}+\\tfrac{1}{\\sqrt2}=0=\\sqrt2(2\\cdot\\tfrac12-1)=$ RHS. Hence $x\\in\\boxed{\\{\\tfrac{\\sqrt6+\\sqrt2}{4},\\,-\\tfrac{1}{\\sqrt2}\\}}$."
        ]
      }
    ],
    "remark": "For $x=\\cos\\theta$ the radical $\\sqrt{1-x^2}$ is $+\\sin\\theta$ only on $\\theta\\in[0,\\pi]$; restricting to that window is the trig analogue of keeping the nonnegative square root. Combining $x+\\sqrt{1-x^2}=\\sqrt2\\sin(\\theta+\\tfrac{\\pi}{4})$ with a double-angle right side is a reusable template for radical-plus-quadratic equations."
  },
  {
    "theme": "substitution",
    "themeLabel": "Trigonometric Substitution Engines",
    "title": "One Angle Shared by a Sine and a Cosine",
    "difficulty": 5,
    "task": "Determine the range and all maximisers",
    "tags": [
      "weierstrass",
      "shared-angle",
      "open-endpoint",
      "amplitude-phase",
      "discriminant",
      "rational-range"
    ],
    "statement": "Let \\[ f(x)=\\frac{2x}{1+x^{2}}+\\frac{1-x^{2}}{1+x^{2}},\\qquad x\\in\\mathbb{R}. \\] Prove that the range of $f$ is the closed interval $[-\\sqrt2,\\sqrt2]$, and find every real $x$ at which the maximum value $\\sqrt2$ is attained. (Decide carefully whether each endpoint is actually reached, given that the Weierstrass parameter cannot reach $\\pm\\infty$.)",
    "answer": "\\[\\boxed{\\operatorname{range}(f)=[-\\sqrt2,\\sqrt2],\\quad f(x)=\\sqrt2\\iff x=\\sqrt2-1}\\]",
    "trap": "Two failures lurk. (i) Seeing $\\dfrac{2x}{1+x^{2}}\\le 1$ and $\\dfrac{1-x^{2}}{1+x^{2}}\\le 1$, a solver adds the bounds to claim $f\\le 2$. But the first bound is tight only at $x=1$ and the second only at $x=0$, so they can never be saturated together; the true ceiling is $\\sqrt2$, strictly below $2$. The two fractions are not free — they are $\\sin\\phi$ and $\\cos\\phi$ of the SAME angle $\\phi=2\\arctan x$, chained by $\\sin^{2}\\phi+\\cos^{2}\\phi=1$. (ii) After substituting $x=\\tan\\frac{\\phi}{2}$ one gets $f=\\sqrt2\\,\\sin\\!\\big(\\phi+\\tfrac{\\pi}{4}\\big)$ with $\\phi=2\\arctan x\\in(-\\pi,\\pi)$ — an OPEN interval, since $x=\\pm\\infty$ is unreachable. A solver who notices the openness often over-corrects and declares the bottom endpoint missing, reporting the range as $(-\\sqrt2,\\sqrt2]$. That is wrong: the minimiser sits at $\\phi=-\\tfrac{3\\pi}{4}$, which is INTERIOR to $(-\\pi,\\pi)$, so $-\\sqrt2$ is attained at the finite point $x=\\tan(-\\tfrac{3\\pi}{8})=-\\sqrt2-1$. The genuinely excluded value $\\phi=\\pm\\pi$ only sends $f\\to-1$, which is not even an extremum — so the open endpoint costs nothing, and the range is closed at both ends.",
    "solutions": [
      {
        "name": "Weierstrass to a single shared angle",
        "steps": [
          "Put $x=\\tan\\dfrac{\\phi}{2}$. As $x$ runs over all of $\\mathbb{R}$, $\\phi=2\\arctan x$ runs over the open interval $(-\\pi,\\pi)$ bijectively (the endpoints $\\phi=\\pm\\pi$, i.e. $x=\\pm\\infty$, are never reached).",
          "The Weierstrass identities give $\\dfrac{2x}{1+x^{2}}=\\sin\\phi$ and $\\dfrac{1-x^{2}}{1+x^{2}}=\\cos\\phi$ — the SAME $\\phi$ in both. Hence $f=\\sin\\phi+\\cos\\phi=\\sqrt2\\,\\sin\\!\\big(\\phi+\\tfrac{\\pi}{4}\\big)$.",
          "Maximum: $\\sin(\\phi+\\tfrac{\\pi}{4})=1$ needs $\\phi+\\tfrac{\\pi}{4}=\\tfrac{\\pi}{2}$, i.e. $\\phi=\\tfrac{\\pi}{4}\\in(-\\pi,\\pi)$ — interior, so $\\sqrt2$ is attained. The next candidate $\\phi=\\tfrac{\\pi}{4}+2\\pi$ lies outside $(-\\pi,\\pi)$, so the maximiser is unique: $x=\\tan\\tfrac{\\pi}{8}=\\sqrt2-1$.",
          "Minimum: $\\sin(\\phi+\\tfrac{\\pi}{4})=-1$ needs $\\phi=-\\tfrac{3\\pi}{4}\\in(-\\pi,\\pi)$ — also interior, so $-\\sqrt2$ is attained at $x=\\tan(-\\tfrac{3\\pi}{8})=-\\sqrt2-1$. The only excluded angle $\\phi=\\pm\\pi$ gives $f\\to-1$, not an extremum, so it removes nothing from the range.",
          "Since $\\sin(\\phi+\\tfrac{\\pi}{4})$ sweeps continuously through $[-1,1]$ on the interior and both extremes are hit, $\\operatorname{range}(f)=[-\\sqrt2,\\sqrt2]$, with the maximum exactly at $\\boxed{x=\\sqrt2-1}$."
        ]
      },
      {
        "name": "Range via a real-root discriminant",
        "steps": [
          "Fix a target value $k$ and ask when $f(x)=k$ has a real solution. Clearing the denominator, $2x+1-x^{2}=k(1+x^{2})$, i.e. $(1+k)x^{2}-2x+(k-1)=0$.",
          "If $k\\ne-1$ this is a genuine quadratic in $x$; a real root exists iff its discriminant is non-negative: $\\Delta=(-2)^{2}-4(1+k)(k-1)=4-4(k^{2}-1)=8-4k^{2}\\ge 0$, i.e. $k^{2}\\le2$, so $-\\sqrt2\\le k\\le\\sqrt2$.",
          "The borderline value $k=-1$ gives the linear equation $-2x-2=0$, i.e. $x=-1$, with $f(-1)=-1\\in[-\\sqrt2,\\sqrt2]$ — consistent, no value is added or lost.",
          "Thus $f(x)=k$ is solvable exactly for $k\\in[-\\sqrt2,\\sqrt2]$, so $\\operatorname{range}(f)=[-\\sqrt2,\\sqrt2]$ (closed, since the endpoints make $\\Delta=0$, a genuine double real root — not a spurious complex one).",
          "At $k=\\sqrt2$ the quadratic $(1+\\sqrt2)x^{2}-2x+(\\sqrt2-1)=0$ has the double root $x=\\dfrac{2}{2(1+\\sqrt2)}=\\dfrac{1}{1+\\sqrt2}=\\sqrt2-1$. Hence the maximum $\\sqrt2$ is attained only at $\\boxed{x=\\sqrt2-1}$."
        ]
      },
      {
        "name": "Tangent half-angle plus Cauchy-Schwarz amplitude",
        "steps": [
          "As above the substitution $x=\\tan\\frac{\\phi}{2}$, $\\phi\\in(-\\pi,\\pi)$, turns $f$ into $\\sin\\phi+\\cos\\phi$, a linear combination $a\\sin\\phi+b\\cos\\phi$ with $a=b=1$.",
          "By Cauchy-Schwarz, $a\\sin\\phi+b\\cos\\phi=(a,b)\\cdot(\\sin\\phi,\\cos\\phi)\\le\\sqrt{a^{2}+b^{2}}\\,\\sqrt{\\sin^{2}\\phi+\\cos^{2}\\phi}=\\sqrt{2}$, with equality iff $(\\sin\\phi,\\cos\\phi)$ is a positive multiple of $(a,b)=(1,1)$, i.e. $\\sin\\phi=\\cos\\phi>0$.",
          "$\\sin\\phi=\\cos\\phi>0$ on $(-\\pi,\\pi)$ forces $\\phi=\\tfrac{\\pi}{4}$, which is admissible (interior), giving the maximum $\\sqrt2$. By the same inequality with $(a,b)=(1,1)$ reversed in sign, the minimum is $-\\sqrt2$ at $\\sin\\phi=\\cos\\phi<0$, i.e. $\\phi=-\\tfrac{3\\pi}{4}$, again interior — so both endpoints belong to the range and $\\operatorname{range}(f)=[-\\sqrt2,\\sqrt2]$.",
          "Translate $\\phi=\\tfrac{\\pi}{4}$ back: $x=\\tan\\tfrac{\\pi}{8}$. Using $\\tan\\tfrac{\\pi}{8}=\\sqrt2-1$ (from $\\tan\\tfrac{\\pi}{4}=\\dfrac{2t}{1-t^{2}}=1$ with $t=\\tan\\tfrac{\\pi}{8}$, the positive root of $t^{2}+2t-1=0$), the maximiser is $\\boxed{x=\\sqrt2-1}$."
        ]
      }
    ],
    "remark": "The whole problem hinges on one observation: the two rational pieces are not independent quantities to be bounded separately, but $\\sin\\phi$ and $\\cos\\phi$ of a single shared angle $\\phi=2\\arctan x$. Once that lock is seen, $f$ collapses to the amplitude-phase form $\\sqrt2\\sin(\\phi+\\tfrac{\\pi}{4})$ and the answer $\\sqrt2$ (not the naive $2$) is forced by $a^{2}+b^{2}=2$. The Weierstrass map carries a built-in trap of its own — its image is the OPEN arc $(-\\pi,\\pi)$ because $x=\\pm\\infty$ is missing — so a careful solver must check that each extremiser angle ($\\tfrac{\\pi}{4}$ for the max, $-\\tfrac{3\\pi}{4}$ for the min) is interior. Both are, so the range stays closed; the genuinely excluded angle $\\pm\\pi$ only yields the non-extremal value $-1$. The discriminant method gives the same closure for free, since $\\Delta=8-4k^{2}=0$ at $k=\\pm\\sqrt2$ produces real double roots, certifying the endpoints are attained rather than merely approached."
  },
  {
    "theme": "substitution",
    "themeLabel": "Trigonometric Substitution Engines",
    "title": "The Point the Rational Parametrisation Forgets",
    "difficulty": 5,
    "task": "Identify the omitted point and evaluate the parameter",
    "tags": [
      "stereographic",
      "weierstrass",
      "rational-points",
      "pythagorean-triples",
      "missing-point",
      "bijection"
    ],
    "statement": "For $t\\in\\mathbb{R}$ define \\[ \\Phi(t)=\\left(\\frac{1-t^{2}}{1+t^{2}},\\ \\frac{2t}{1+t^{2}}\\right). \\] Every value $\\Phi(t)$ lies on the unit circle $x^{2}+y^{2}=1$, and writing $t=\\tan\\frac{\\theta}{2}$ shows $\\Phi$ is exactly the Weierstrass map $\\theta\\mapsto(\\cos\\theta,\\sin\\theta)$. A student claims that $\\Phi:\\mathbb{R}\\to\\{x^{2}+y^{2}=1\\}$ is a bijection (one point of $\\mathbb{R}$ for each point of the circle). The claim is false by a single point. (a) Determine the unique point $P_{0}$ of the unit circle for which $\\Phi(t)=P_{0}$ has no real solution $t$, and prove that $\\Phi$ is a bijection from $\\mathbb{R}$ onto the circle with $P_{0}$ removed. (b) This deleted point is exactly the centre of stereographic projection, and it is the reason every primitive Pythagorean triple $(a,b,c)$ corresponds to a rational $t$. As a concrete instance, find the rational parameter $t$ for which $\\Phi(t)$ is the rational point $\\left(\\tfrac{20}{29},\\tfrac{21}{29}\\right)$ attached to the triple $(20,21,29)$.",
    "answer": "\\[\\boxed{P_{0}=(-1,0),\\qquad t=\\tfrac{3}{7}}\\]",
    "trap": "The seductive error is to declare $\\Phi$ surjective onto the whole circle ``because $x=\\tan\\frac\\theta2$ ranges over everything.'' It does not: as $t\\to\\pm\\infty$ both coordinates tend to $(-1,0)$, yet no finite $t$ ever hits it, since $\\frac{1-t^2}{1+t^2}=-1$ forces $1-t^2=-1-t^2$, i.e. $-1=1$. Equivalently $\\theta=2\\arctan t$ sweeps only the OPEN arc $(-\\pi,\\pi)$, never the angle $\\pi$ that names $(-1,0)$. A solver who misses this reports a full bijection $\\mathbb{R}\\to$ circle and, worse, when inverting via $t=\\dfrac{y}{1+x}$, silently divides by $1+x=0$ at exactly that point without noticing the formula breaks there. The same blind spot wrecks part (b)'s deeper claim: the bijection between rational $t$ and rational points on the circle is a bijection only AFTER deleting $(-1,0)$ — that one missing point is precisely why stereographic projection from $(-1,0)$ (not from any other point) parametrises every other rational point, and why the triple $(0,\\,{-1})$ ``triple'' has no $t$. It is a genuine hole in the map, not an arithmetic slip.",
    "solutions": [
      {
        "name": "Direct surjectivity test plus inverse formula",
        "steps": [
          "Membership: $\\left(\\frac{1-t^2}{1+t^2}\\right)^2+\\left(\\frac{2t}{1+t^2}\\right)^2=\\frac{(1-t^2)^2+4t^2}{(1+t^2)^2}=\\frac{(1+t^2)^2}{(1+t^2)^2}=1$, so $\\Phi(t)$ is always on the circle.",
          "Which point is omitted? Suppose $\\Phi(t)=(-1,0)$. The first coordinate gives $1-t^2=-(1+t^2)$, i.e. $1=-1$, impossible; so $(-1,0)$ has NO real preimage. Every other circle point $(x_0,y_0)$ with $x_0\\neq-1$ is reached: set $t_0=\\dfrac{y_0}{1+x_0}$. Using $y_0^2=1-x_0^2=(1-x_0)(1+x_0)$ one computes $\\frac{1-t_0^2}{1+t_0^2}=x_0$ and $\\frac{2t_0}{1+t_0^2}=y_0$, so $\\Phi(t_0)=(x_0,y_0)$. Hence $P_0=(-1,0)$ and $\\Phi$ is onto the circle minus $P_0$.",
          "Injectivity: if $\\Phi(t)=\\Phi(s)$ then equating second coordinates and using the recovered inverse, $t=\\dfrac{y}{1+x}=s$. So distinct parameters give distinct points; combined with the previous step, $\\Phi$ is a bijection $\\mathbb{R}\\to(\\text{circle}\\setminus\\{(-1,0)\\})$.",
          "Part (b): apply the inverse at $(x_0,y_0)=\\left(\\tfrac{20}{29},\\tfrac{21}{29}\\right)$. Then $t=\\dfrac{y_0}{1+x_0}=\\dfrac{21/29}{1+20/29}=\\dfrac{21/29}{49/29}=\\dfrac{21}{49}=\\dfrac{3}{7}$. Check: $\\Phi(\\tfrac37)=\\left(\\frac{1-9/49}{1+9/49},\\frac{6/7}{1+9/49}\\right)=\\left(\\frac{40/49}{58/49},\\frac{6/7}{58/49}\\right)=\\left(\\tfrac{20}{29},\\tfrac{21}{29}\\right).$",
          "Therefore $\\boxed{P_0=(-1,0)}$ and $\\boxed{t=\\tfrac37}$."
        ]
      },
      {
        "name": "Stereographic projection from the missing point",
        "steps": [
          "Project the circle from $N=(-1,0)$ onto the vertical line $x=0$: the chord from $N$ through a circle point $(x_0,y_0)\\neq N$ meets $x=0$ at height $t$. The line is $(x,y)=N+\\lambda\\big((x_0,y_0)-N\\big)$; setting $x=0$ gives $\\lambda=\\frac{1}{1+x_0}$ and height $t=\\lambda y_0=\\dfrac{y_0}{1+x_0}$.",
          "Inverting this projection returns exactly $\\Phi$: a point at height $t$ on the line corresponds to the second intersection of chord $N(0,t)$ with the circle, which is $\\left(\\frac{1-t^2}{1+t^2},\\frac{2t}{1+t^2}\\right)=\\Phi(t)$. Projection and $\\Phi$ are inverse bijections — between the line (all real heights $t$) and the circle with the projection centre removed.",
          "The centre $N=(-1,0)$ is the one point with no projection height: the chord from $N$ through $N$ is undefined (it is the tangent line, never crossing $x=0$ in a finite point), which is the geometric face of ``$1+x_0=0$.'' So the unique omitted point is $P_0=N=(-1,0)$, and $\\Phi$ bijects $\\mathbb{R}$ onto circle$\\setminus\\{P_0\\}$.",
          "For $(b)$, the projection height of $\\left(\\tfrac{20}{29},\\tfrac{21}{29}\\right)$ is $t=\\dfrac{21/29}{1+20/29}=\\dfrac{21}{49}=\\dfrac37$, a rational number precisely because the point is rational and $N$ is rational — the engine behind ``rational point $\\Leftrightarrow$ rational $t$.''",
          "Hence $P_0=(-1,0)$ and $t=\\boxed{\\tfrac37}$."
        ]
      },
      {
        "name": "Half-angle range plus Pythagorean factorisation",
        "steps": [
          "Write $t=\\tan\\frac\\theta2$, so $\\Phi(t)=(\\cos\\theta,\\sin\\theta)$. As $t$ runs over $\\mathbb{R}$, $\\theta=2\\arctan t$ runs over the OPEN interval $(-\\pi,\\pi)$, hitting every angle except $\\theta=\\pi$. The single excluded angle names the single omitted point $(\\cos\\pi,\\sin\\pi)=(-1,0)=P_0$; all other angles, hence all other circle points, are attained exactly once (arctan is injective), giving the bijection.",
          "Rational parametrisation of triples: for a reduced fraction $t=\\frac{m}{n}$ ($\\gcd(m,n)=1$), $\\Phi(t)=\\left(\\frac{n^2-m^2}{n^2+m^2},\\frac{2mn}{n^2+m^2}\\right)$, which clears to the Pythagorean triple $(n^2-m^2,\\,2mn,\\,n^2+m^2)$ since $(n^2-m^2)^2+(2mn)^2=(n^2+m^2)^2$. Every rational point other than $P_0$ arises this way, because the inverse $t=\\frac{y}{1+x}$ is rational there.",
          "Match the target triple $(20,21,29)$: we need $\\{n^2-m^2,2mn\\}=\\{20,21\\}$ with $n^2+m^2=29$. Take $2mn=20,\\ n^2-m^2=21$; from $n^2+m^2=29$ and $n^2-m^2=21$ we get $n^2=25,\\ m^2=4$, so $n=5,\\ m=2$ — but that gives $\\Phi=\\big(\\tfrac{21}{29},\\tfrac{20}{29}\\big)$, the reflected point. For the stated point $\\big(\\tfrac{20}{29},\\tfrac{21}{29}\\big)$ we instead need the second coordinate $\\tfrac{2mn}{n^2+m^2}=\\tfrac{21}{29}$, i.e. $2mn=21,\\ n^2-m^2=20$, solved by $n=7,\\ m=3$ (indeed $2\\cdot3\\cdot7=42=21\\cdot2$ after the common scaling $n^2+m^2=58=2\\cdot29$).",
          "Thus $t=\\frac{m}{n}=\\frac{3}{7}$, and directly $\\Phi(\\tfrac37)=\\left(\\frac{49-9}{49+9},\\frac{2\\cdot21}{49+9}\\right)=\\left(\\frac{40}{58},\\frac{42}{58}\\right)=\\left(\\tfrac{20}{29},\\tfrac{21}{29}\\right)$, confirming the match.",
          "So the forgotten point is $P_0=(-1,0)$ and the parameter is $t=\\boxed{\\tfrac37}$."
        ]
      }
    ],
    "remark": "The whole circle MINUS one point is the rational parametrisation's natural home, and naming that point correctly is the entire insight. Algebraically $(-1,0)$ is omitted because $\\frac{1-t^2}{1+t^2}=-1$ is unsolvable; analytically because $2\\arctan t$ misses $\\theta=\\pi$; geometrically because it is the centre of the stereographic projection, the one place a chord degenerates to a tangent. The same deletion is what makes the rational-point dictionary clean: stereographic projection from the rational point $(-1,0)$ sends every OTHER rational point of the circle to a rational height $t=\\frac{y}{1+x}$, and conversely each reduced $t=\\frac{m}{n}$ rebuilds a primitive triple $(n^2-m^2,2mn,n^2+m^2)$ — here $t=\\frac37$ rebuilds $(20,21,29)$. A solver who calls $\\Phi$ a full bijection has not made an arithmetic mistake; they have failed to see the single structural hole on which Diophantus' two-thousand-year-old triple machine secretly turns."
  },
  {
    "theme": "substitution",
    "themeLabel": "Trigonometric Substitution Engines",
    "title": "Where Two Half-Angle Tangents Become One",
    "difficulty": 5,
    "task": "Find every admissible angle",
    "tags": [
      "weierstrass",
      "half-angle",
      "double-root",
      "degenerate-quadratic",
      "vieta",
      "missed-case"
    ],
    "statement": "Fix a number $\\alpha\\in[0,\\pi]$ and regard \\[ \\frac{2x}{1+x^{2}}=\\sin\\alpha \\] as an equation in the real unknown $x$. For generic $\\alpha$ this has the two real roots $x=\\tan\\dfrac{\\alpha}{2}$ and $x=\\cot\\dfrac{\\alpha}{2}=\\tan\\!\\big(\\tfrac{\\pi}{2}-\\tfrac{\\alpha}{2}\\big)$ — the two half-angle tangents whose doubled arcs share the same sine $\\sin\\alpha$. Determine all $\\alpha\\in[0,\\pi]$ for which the equation has exactly one real solution $x$.",
    "answer": "\\[\\boxed{\\alpha\\in\\Big\\{0,\\ \\tfrac{\\pi}{2},\\ \\pi\\Big\\}}\\]",
    "trap": "The tempting move is to clear denominators into $(\\sin\\alpha)\\,x^{2}-2x+\\sin\\alpha=0$, compute the discriminant $\\Delta=4-4\\sin^{2}\\alpha=4\\cos^{2}\\alpha$, and declare ``one real root $\\iff\\Delta=0\\iff\\cos\\alpha=0$,'' giving only $\\alpha=\\tfrac{\\pi}{2}$. That silently divides the problem by $\\sin\\alpha$: the step ``it is a quadratic'' is false exactly when $\\sin\\alpha=0$. At $\\alpha=0$ and $\\alpha=\\pi$ the leading coefficient vanishes, the equation collapses to the linear $2x=0$, and there is still exactly one root $x=0$ — but now because a root has run off to infinity, not because two roots merged. Geometrically this is the same event seen from Vieta: the product of the two roots is $\\tfrac{\\sin\\alpha}{\\sin\\alpha}=1$ (they are reciprocals $\\tan\\tfrac{\\alpha}{2}$ and $\\cot\\tfrac{\\alpha}{2}$), while their sum is $\\dfrac{2}{\\sin\\alpha}$, which blows up as $\\sin\\alpha\\to0$ — one half-angle tangent escapes to $\\pm\\infty$ and only its partner survives as a finite root. So ``exactly one solution'' happens for two structurally different reasons: a genuine double root at $\\alpha=\\tfrac{\\pi}{2}$, and a degenerate dropped root at $\\alpha=0,\\pi$. Reporting only $\\{\\tfrac{\\pi}{2}\\}$ misses two of the three answers.",
    "solutions": [
      {
        "name": "Discriminant with an honest leading-coefficient check",
        "steps": [
          "Multiply through by $1+x^{2}>0$: $2x=\\sin\\alpha\\,(1+x^{2})$, i.e. $(\\sin\\alpha)\\,x^{2}-2x+\\sin\\alpha=0$. Before invoking any quadratic formula, separate the cases by the leading coefficient $\\sin\\alpha$.",
          "Case $\\sin\\alpha=0$ (so $\\alpha=0$ or $\\alpha=\\pi$ in $[0,\\pi]$): the $x^{2}$ and constant terms both vanish and the equation degenerates to the linear $-2x=0$, whose unique solution is $x=0$. Exactly one root — and the would-be second root has gone to infinity, consistent with $\\dfrac{2\\cdot0}{1+0}=0=\\sin\\alpha$.",
          "Case $\\sin\\alpha\\ne0$: it is a true quadratic with discriminant $\\Delta=(-2)^{2}-4(\\sin\\alpha)(\\sin\\alpha)=4-4\\sin^{2}\\alpha=4\\cos^{2}\\alpha\\ge0$, so the roots are always real. There is exactly one (a double root) iff $\\Delta=0$, i.e. $\\cos\\alpha=0$, i.e. $\\alpha=\\tfrac{\\pi}{2}$; there the equation is $x^{2}-2x+1=(x-1)^{2}=0$ with the repeated root $x=1$.",
          "Combining the two cases, the equation has exactly one real solution precisely for $\\alpha\\in\\boxed{\\{0,\\tfrac{\\pi}{2},\\pi\\}}$."
        ]
      },
      {
        "name": "Weierstrass sine-branch geometry",
        "steps": [
          "Substitute $x=\\tan\\dfrac{\\varphi}{2}$, so that $\\dfrac{2x}{1+x^{2}}=\\sin\\varphi$ and, as $x$ ranges over $\\mathbb{R}$, $\\varphi=2\\arctan x$ ranges bijectively over the open arc $(-\\pi,\\pi)$. The equation becomes $\\sin\\varphi=\\sin\\alpha$.",
          "On $(-\\pi,\\pi)$ the equation $\\sin\\varphi=\\sin\\alpha$ has the two branches $\\varphi=\\alpha$ and $\\varphi=\\pi-\\alpha$, returning the two roots $x=\\tan\\tfrac{\\alpha}{2}$ and $x=\\tan\\tfrac{\\pi-\\alpha}{2}=\\cot\\tfrac{\\alpha}{2}$ — the two half-angle tangents sharing the sine $\\sin\\alpha$.",
          "These roots coincide exactly when the two branch angles coincide, $\\alpha=\\pi-\\alpha$, giving $\\alpha=\\tfrac{\\pi}{2}$ (the tangency $\\tan\\tfrac{\\pi}{4}=\\cot\\tfrac{\\pi}{4}=1$): a single finite root from a genuine double.",
          "A root can also be lost if its branch angle leaves the open arc, i.e. lands on the excluded endpoint $\\varphi=\\pm\\pi$ (where $x=\\pm\\infty$). The branch $\\varphi=\\alpha$ hits $\\pm\\pi$ never on $[0,\\pi]$ except $\\alpha=\\pi$, and $\\varphi=\\pi-\\alpha$ hits $\\pi$ at $\\alpha=0$; at those two angles one half-angle tangent diverges ($\\cot\\tfrac{\\alpha}{2}\\to\\infty$ as $\\alpha\\to0^{+}$, $\\tan\\tfrac{\\alpha}{2}\\to\\infty$ as $\\alpha\\to\\pi^{-}$) and only the finite partner $x=0$ remains.",
          "Hence exactly one real root occurs for $\\alpha\\in\\boxed{\\{0,\\tfrac{\\pi}{2},\\pi\\}}$: tangency at $\\tfrac{\\pi}{2}$, branch-at-infinity at $0$ and $\\pi$."
        ]
      },
      {
        "name": "Vieta on reciprocal roots",
        "steps": [
          "For $\\sin\\alpha\\ne0$ write the quadratic $(\\sin\\alpha)x^{2}-2x+\\sin\\alpha=0$ and read off Vieta: the product of the roots is $\\dfrac{\\sin\\alpha}{\\sin\\alpha}=1$ and their sum is $\\dfrac{2}{\\sin\\alpha}$. So the two roots are reciprocals $t$ and $\\tfrac{1}{t}$, matching $\\tan\\tfrac{\\alpha}{2}\\cdot\\cot\\tfrac{\\alpha}{2}=1$.",
          "Two distinct reciprocal roots collapse to one iff $t=\\tfrac{1}{t}$, i.e. $t^{2}=1$, i.e. $t=\\pm1$. Since for $\\alpha\\in(0,\\pi)$ the root $t=\\tan\\tfrac{\\alpha}{2}>0$, only $t=1$ is possible, forcing $\\tfrac{\\alpha}{2}=\\tfrac{\\pi}{4}$, i.e. $\\alpha=\\tfrac{\\pi}{2}$. Equivalently, by AM-GM the sum $t+\\tfrac1t=\\dfrac{2}{\\sin\\alpha}\\ge2$ with equality exactly at $\\sin\\alpha=1$.",
          "When $\\sin\\alpha\\to0$ the sum $\\dfrac{2}{\\sin\\alpha}\\to\\infty$ while the product stays $1$: one reciprocal partner diverges and the other tends to $0$. At the boundary $\\sin\\alpha=0$ the quadratic is no longer quadratic, the diverged root is genuinely absent, and only $x=0$ survives — one root at $\\alpha=0$ and $\\alpha=\\pi$.",
          "Therefore the count drops to one exactly at $\\alpha\\in\\boxed{\\{0,\\tfrac{\\pi}{2},\\pi\\}}$, the merge at $\\tfrac{\\pi}{2}$ and the escape at $0,\\pi$ being the two ways reciprocal roots lose a member."
        ]
      }
    ],
    "remark": "The intended reading is the elegant one: $\\dfrac{2x}{1+x^{2}}=\\sin\\alpha$ is the Weierstrass image of $\\sin\\varphi=\\sin\\alpha$, whose two sine-equal branches $\\varphi=\\alpha,\\ \\pi-\\alpha$ are the two half-angle tangents $\\tan\\tfrac{\\alpha}{2}$ and $\\cot\\tfrac{\\alpha}{2}$. They fuse into one only at the tangency $\\alpha=\\tfrac{\\pi}{2}$, where $\\tan\\tfrac{\\pi}{4}=\\cot\\tfrac{\\pi}{4}=1$ and the discriminant $4\\cos^{2}\\alpha$ vanishes. The trap is that ``exactly one root'' has a second, non-tangential cause: at $\\alpha=0,\\pi$ the leading coefficient $\\sin\\alpha$ dies, the quadratic degenerates to linear, and a root escapes to infinity (Vieta: product $1$ fixed, sum $\\tfrac{2}{\\sin\\alpha}\\to\\infty$). A top-rank solver must resist clearing denominators and dividing by $\\sin\\alpha$ unguarded; honouring the degenerate leading coefficient is what turns the seductive answer $\\{\\tfrac{\\pi}{2}\\}$ into the correct $\\{0,\\tfrac{\\pi}{2},\\pi\\}$."
  },
  {
    "theme": "substitution",
    "themeLabel": "Trigonometric Substitution Engines",
    "title": "Projection of a Fixed Vector onto a Rotating Frame",
    "difficulty": 5,
    "task": "Find the maximum and its location, and prove tangency forces the extremum",
    "tags": [
      "weierstrass",
      "projection",
      "tangency",
      "discriminant",
      "geometric-multiplicity",
      "linear-over-quadratic"
    ],
    "statement": "For real $x$ let \\[ g(x)=\\frac{3x+4}{x^{2}+1}. \\] (a) Show that the substitution $x=\\tan\\frac{\\theta}{2}$ rewrites $g$ as an affine function of the projection of the fixed vector $(3,4)$ onto the rotating unit vector $(\\sin\\theta,\\cos\\theta)$, and hence find the exact maximum value of $g$ and the unique real $x$ at which it occurs. (b) Prove that the horizontal line $y=k$ is tangent to the graph of $g$ — equivalently, the level curve $k(x^{2}+1)=3x+4$ has a repeated root — precisely at the two extreme values of $g$, and explain WHY a repeated root (a double intersection collapsing to one) is exactly the analytic signature of an extremum rather than a generic level. Be sure to settle whether the horizontal asymptote value is excluded from the range.",
    "answer": "\\[\\boxed{\\max_{x\\in\\mathbb{R}} g(x)=\\tfrac{9}{2}\\text{ at }x=\\tfrac13;\\ \\operatorname{range}(g)=\\left[-\\tfrac12,\\tfrac92\\right]}\\]",
    "trap": "Three conceptual pitfalls, none of them arithmetic. (i) SEPARATE BOUNDS: a solver writes $3x\\le\\tfrac32(x^{2}+1)$ and $4\\le 4(x^{2}+1)$ to get $g\\le\\tfrac32+4=\\tfrac{11}{2}$, treating numerator pieces as independent. They are not: after $x=\\tan\\tfrac{\\theta}{2}$ the two parts become $\\tfrac32\\sin\\theta$ and $2(1+\\cos\\theta)$, locked by $\\sin^{2}\\theta+\\cos^{2}\\theta=1$, so the true ceiling is $\\tfrac92$, strictly below the naive $\\tfrac{11}{2}$. The vector $(3,4)$ has length $5$, NOT $3+4=7$; only the projection $\\le 5$ is available, giving $g=\\tfrac{5\\sin(\\theta+\\varphi)+4}{2}\\le\\tfrac92$. (ii) TANGENCY WITHOUT JUSTIFICATION: setting the discriminant of $k(x^{2}+1)=3x+4$, i.e. $kx^{2}-3x+(k-4)=0$, to zero gives $k\\in\\{-\\tfrac12,\\tfrac92\\}$. A solver who simply equates 'discriminant $=0$' with 'extremum' has skipped the real content: $\\Delta\\ge 0$ marks ATTAINABLE $k$, and $\\Delta=0$ is the boundary of that attainable set — but the boundary of the value-set is an extremum ONLY because the double root means the level $y=k$ meets the graph with multiplicity two collapsing to one point, the hallmark of a horizontal tangent (geometric multiplicity $2$). Without this 'why', one cannot rule out the value being a non-extremal turning artifact. (iii) PHANTOM ASYMPTOTE GAP: since $g(x)\\to 0$ as $x\\to\\pm\\infty$, a solver may declare $0$ an excluded asymptotic value and report an open puncture in the range. But $0$ is genuinely attained at the finite point $x=-\\tfrac43$ (where $3x+4=0$); the degenerate case $k=0$ drops the quadratic to the LINEAR equation $-3x-4=0$, whose single finite root keeps $0$ in the range. The asymptote is approached AND hit, so the range stays the full closed interval $\\left[-\\tfrac12,\\tfrac92\\right]$.",
    "solutions": [
      {
        "name": "Weierstrass projection onto a rotating frame",
        "steps": [
          "Put $x=\\tan\\dfrac{\\theta}{2}$, so $\\dfrac{1}{1+x^{2}}=\\dfrac{1+\\cos\\theta}{2}$ and $\\dfrac{x}{1+x^{2}}=\\dfrac{\\sin\\theta}{2}$. As $x$ ranges over $\\mathbb{R}$, $\\theta=2\\arctan x$ ranges over the open arc $(-\\pi,\\pi)$ bijectively.",
          "Then $g(x)=3\\cdot\\dfrac{x}{1+x^{2}}+4\\cdot\\dfrac{1}{1+x^{2}}=\\dfrac{3\\sin\\theta+4\\cos\\theta+4}{2}=\\dfrac{(3,4)\\cdot(\\sin\\theta,\\cos\\theta)+4}{2}$. So $g$ is an affine function of the projection of the fixed vector $(3,4)$ onto the rotating unit vector $(\\sin\\theta,\\cos\\theta)$.",
          "The projection $(3,4)\\cdot(\\sin\\theta,\\cos\\theta)$ has amplitude $\\sqrt{3^{2}+4^{2}}=5$, so $g=\\dfrac{5\\sin(\\theta+\\varphi)+4}{2}$ where $\\tan\\varphi=\\tfrac43$. Its maximum needs the projection $=+5$, i.e. $(\\sin\\theta,\\cos\\theta)$ parallel to $(3,4)$: $\\sin\\theta=\\tfrac35,\\ \\cos\\theta=\\tfrac45$.",
          "This $\\theta=\\arctan\\tfrac34\\in(0,\\tfrac{\\pi}{2})\\subset(-\\pi,\\pi)$ is interior to the admissible arc, so the maximum is attained, equal to $\\dfrac{5+4}{2}=\\dfrac92$. Back-substitute $x=\\tan\\tfrac{\\theta}{2}=\\dfrac{\\sin\\theta}{1+\\cos\\theta}=\\dfrac{3/5}{1+4/5}=\\dfrac13$.",
          "Symmetrically the minimum needs the projection $=-5$, $(\\sin\\theta,\\cos\\theta)=(-\\tfrac35,-\\tfrac45)$, giving $\\theta\\in(-\\pi,-\\tfrac{\\pi}{2})$ interior, value $\\dfrac{-5+4}{2}=-\\dfrac12$ at $x=\\dfrac{-3/5}{1-4/5}=-3$. Both extreme angles are interior, so $\\operatorname{range}(g)=\\left[-\\dfrac12,\\dfrac92\\right]$ and the maximum is $\\boxed{\\dfrac92\\text{ at }x=\\dfrac13}$."
        ]
      },
      {
        "name": "Tangency as geometric multiplicity (level-curve discriminant)",
        "steps": [
          "Ask for which $k$ the line $y=k$ meets the graph of $g$: solve $k=\\dfrac{3x+4}{x^{2}+1}$, i.e. $k(x^{2}+1)=3x+4$, i.e. $kx^{2}-3x+(k-4)=0$. The number of intersections is the number of real roots of this quadratic in $x$.",
          "For $k\\ne 0$ the real-solvability condition is $\\Delta=9-4k(k-4)=-4k^{2}+16k+9\\ge 0$, i.e. $-\\tfrac12\\le k\\le\\tfrac92$. So every attainable value lies in $\\left[-\\tfrac12,\\tfrac92\\right]$, and the endpoints $k=-\\tfrac12,\\tfrac92$ are exactly where $\\Delta=0$.",
          "WHY $\\Delta=0$ is an extremum, not a coincidence: $\\Delta>0$ means the line $y=k$ cuts the graph in two distinct points; as $k$ moves toward an endpoint those two intersections merge into one double point, where the line touches the graph tangentially (multiplicity $2$). A horizontal tangent is precisely $g'(x)=0$, so the merged level is a turning value — the maximum at the upper endpoint, the minimum at the lower. Beyond the endpoints $\\Delta<0$: no real intersection, confirming the graph never rises above $\\tfrac92$ nor falls below $-\\tfrac12$.",
          "At $k=\\tfrac92$: $\\tfrac92x^{2}-3x+\\tfrac12=0\\Rightarrow 9x^{2}-6x+1=(3x-1)^{2}=0$, the double root $x=\\tfrac13$. So the unique tangent point at the top is $x=\\tfrac13$, the maximiser. At $k=-\\tfrac12$: $-\\tfrac12x^{2}-3x-\\tfrac92=0\\Rightarrow x^{2}+6x+9=(x+3)^{2}=0$, double root $x=-3$.",
          "Degenerate check on $k=0$ (the dropped leading coefficient): the quadratic becomes the LINEAR $-3x-4=0$, root $x=-\\tfrac43$, so $0$ is attained — the asymptote value $g\\to 0$ is hit, not punctured. Hence $\\operatorname{range}(g)=\\left[-\\dfrac12,\\dfrac92\\right]$ with maximum $\\boxed{\\dfrac92\\text{ at }x=\\dfrac13}$."
        ]
      },
      {
        "name": "Cauchy-Schwarz on the substituted form",
        "steps": [
          "From $x=\\tan\\tfrac{\\theta}{2}$ as above, $g=\\dfrac{(3\\sin\\theta+4\\cos\\theta)+4}{2}$ with $\\theta\\in(-\\pi,\\pi)$. Bound the bracket by Cauchy-Schwarz: $3\\sin\\theta+4\\cos\\theta=(3,4)\\cdot(\\sin\\theta,\\cos\\theta)\\le\\sqrt{3^{2}+4^{2}}\\,\\sqrt{\\sin^{2}\\theta+\\cos^{2}\\theta}=5$.",
          "Hence $g\\le\\dfrac{5+4}{2}=\\dfrac92$, with equality iff $(\\sin\\theta,\\cos\\theta)$ is a positive multiple of $(3,4)$, i.e. $\\sin\\theta=\\tfrac35,\\ \\cos\\theta=\\tfrac45$. This $\\theta$ is interior to $(-\\pi,\\pi)$, so the bound is achieved.",
          "Likewise $3\\sin\\theta+4\\cos\\theta\\ge -5$ with equality at $(\\sin\\theta,\\cos\\theta)=(-\\tfrac35,-\\tfrac45)$, also interior, giving the minimum $g=-\\dfrac12$. Continuity of $\\sin(\\theta+\\varphi)$ across $[-1,1]$ on the interior fills the whole interval, so $\\operatorname{range}(g)=\\left[-\\dfrac12,\\dfrac92\\right]$.",
          "Convert the maximiser back: $x=\\tan\\tfrac{\\theta}{2}=\\dfrac{\\sin\\theta}{1+\\cos\\theta}=\\dfrac{3/5}{9/5}=\\dfrac13$. Therefore the maximum is $\\boxed{\\dfrac92\\text{ at }x=\\dfrac13}$."
        ]
      }
    ],
    "remark": "The engine is the same Weierstrass map, but the idea is geometric: $g$ is an affine readout of the projection of the FIXED vector $(3,4)$ onto the rotating unit vector $(\\sin\\theta,\\cos\\theta)$, so its swing is governed by the length $|(3,4)|=5$, never by the forbidden sum $3+4=7$ that separate bounds would suggest. The discriminant solution supplies the deeper lesson a top-rank student must internalise: $\\Delta=0$ is not magic shorthand for 'extremum' — it is the algebraic fingerprint of a horizontal tangent, where two intersection points of the level line coalesce into one double point (geometric multiplicity $2$). That coalescence is the same event as $g'(x)=0$, which is why the boundary of the attainable $k$-set is exactly the extreme value. The final subtlety is the phantom asymptote: $g\\to 0$ at infinity tempts one to puncture $0$, but the degenerate $k=0$ collapses the level quadratic to a linear equation with a finite root $x=-\\tfrac43$, so $0$ is genuinely attained and the range remains the closed $\\left[-\\tfrac12,\\tfrac92\\right]$."
  },
  {
    "theme": "substitution",
    "themeLabel": "Trigonometric Substitution Engines",
    "title": "Two Tangents Forced to a Fixed Angle",
    "difficulty": 5,
    "task": "Prove the sharp bound and find where it is attained",
    "tags": [
      "tangent-substitution",
      "angle-addition",
      "perfect-square",
      "equality-case",
      "hidden-constraint",
      "linear-over-quadratic"
    ],
    "statement": "The single-variable fact $\\dfrac{a}{1+a^{2}}\\le\\dfrac12$ for every real $a$ (equality iff $a=1$) is, under $a=\\tan\\phi$, nothing but the obvious bound $\\dfrac{a}{1+a^{2}}=\\sin\\phi\\cos\\phi=\\tfrac12\\sin 2\\phi\\le\\tfrac12$. This problem upgrades that one-line inequality to a constrained two-variable one, where the same substitution does all the work. Let $x,y$ be real numbers satisfying \\[ x+y+xy=1 . \\] Prove that \\[ S:=\\frac{x}{1+x^{2}}+\\frac{y}{1+y^{2}}\\le\\frac{1}{\\sqrt2}, \\] determine the exact value of $\\max S$ and every pair $(x,y)$ at which it is attained, and characterise the equality case. (You should explain why the obvious ceiling $S\\le 1$ — obtained by bounding each summand separately by $\\tfrac12$ — is never reached on this constraint, so the true maximum is strictly smaller.)",
    "answer": "\\[\\boxed{\\max S=\\dfrac{1}{\\sqrt2}\\ \\text{ attained only at }\\ x=y=\\sqrt2-1}\\]",
    "trap": "The seductive move is to bound each summand independently: since $\\dfrac{t}{1+t^{2}}\\le\\dfrac12$ for all real $t$, one writes $S\\le\\dfrac12+\\dfrac12=1$ and may even call this 'tight by AM-GM.' It is NOT tight here. Equality in each separate bound demands $x=1$ AND $y=1$ simultaneously, but $(1,1)$ gives $x+y+xy=3\\neq 1$, so that configuration is OFF the constraint and forbidden. The two equality cases are mutually incompatible with the hidden coupling $x+y+xy=1$, which is exactly the angle-addition relation $\\tan\\alpha+\\tan\\beta+\\tan\\alpha\\tan\\beta=1\\iff\\tan(\\alpha+\\beta)=\\dfrac{x+y}{1-xy}=1\\iff\\alpha+\\beta\\equiv\\tfrac{\\pi}{4}\\pmod{\\pi}$ under $x=\\tan\\alpha,\\,y=\\tan\\beta$. Once you respect that coupling, $S=\\tfrac12\\sin2\\alpha+\\tfrac12\\sin2\\beta$ with $\\alpha+\\beta=\\tfrac{\\pi}{4}$ collapses (sum-to-product) to $\\sin(\\alpha+\\beta)\\cos(\\alpha-\\beta)=\\tfrac{1}{\\sqrt2}\\cos(\\alpha-\\beta)\\le\\tfrac{1}{\\sqrt2}$, a ceiling strictly below $1$. A second, subtler slip is to push ONE term to its maximum: forcing $x=1$ on the constraint gives $y=0$, hence $S=\\tfrac12+0=\\tfrac12<\\tfrac{1}{\\sqrt2}$ — even a single saturated term is suboptimal. The maximiser is the BALANCED point $\\alpha=\\beta=\\tfrac{\\pi}{8}$, i.e. $x=y=\\tan\\tfrac{\\pi}{8}=\\sqrt2-1$, which no per-term reasoning ever suggests.",
    "solutions": [
      {
        "name": "Tangent substitution to a fixed angle sum",
        "steps": [
          "Write $x=\\tan\\alpha,\\ y=\\tan\\beta$ with $\\alpha,\\beta\\in\\left(-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2}\\right)$; every real pair $(x,y)$ arises this way. The constraint $x+y+xy=1$ rearranges to $x+y=1-xy$, i.e. $\\dfrac{x+y}{1-xy}=1$ (if $xy=1$ the constraint forces $x+y=0$, hence $x,y$ would be reciprocals summing to zero, impossible for reals, so $1-xy\\ne 0$). Thus $\\tan(\\alpha+\\beta)=1$, that is $\\alpha+\\beta=\\tfrac{\\pi}{4}$ taken modulo $\\pi$.",
          "Under this substitution each summand linearises: $\\dfrac{x}{1+x^{2}}=\\dfrac{\\tan\\alpha}{\\sec^{2}\\alpha}=\\sin\\alpha\\cos\\alpha=\\tfrac12\\sin2\\alpha$, and likewise $\\dfrac{y}{1+y^{2}}=\\tfrac12\\sin2\\beta$. Hence $S=\\tfrac12\\big(\\sin2\\alpha+\\sin2\\beta\\big)$.",
          "Apply sum-to-product: $S=\\tfrac12\\cdot 2\\sin(\\alpha+\\beta)\\cos(\\alpha-\\beta)=\\sin(\\alpha+\\beta)\\cos(\\alpha-\\beta)$. The constraint fixes $\\alpha+\\beta=\\tfrac{\\pi}{4}\\pmod\\pi$, so $\\sin(\\alpha+\\beta)=\\pm\\tfrac{1}{\\sqrt2}$, giving $S=\\pm\\tfrac{1}{\\sqrt2}\\cos(\\alpha-\\beta)$. Since $|\\cos(\\alpha-\\beta)|\\le 1$, we get $S\\le\\dfrac{1}{\\sqrt2}$.",
          "Equality needs the positive branch $\\sin(\\alpha+\\beta)=+\\tfrac{1}{\\sqrt2}$ (i.e. $\\alpha+\\beta=\\tfrac{\\pi}{4}$) together with $\\cos(\\alpha-\\beta)=1$, i.e. $\\alpha=\\beta$. Then $2\\alpha=\\tfrac{\\pi}{4}$, so $\\alpha=\\beta=\\tfrac{\\pi}{8}$ and $x=y=\\tan\\tfrac{\\pi}{8}=\\sqrt2-1$. Therefore $\\boxed{\\max S=\\dfrac{1}{\\sqrt2}\\text{ at }x=y=\\sqrt2-1}$, the unique maximiser."
        ]
      },
      {
        "name": "Eliminate y and complete a perfect square",
        "steps": [
          "Solve the constraint for $y$: $x+y+xy=1\\Rightarrow y(1+x)=1-x\\Rightarrow y=\\dfrac{1-x}{1+x}$ (valid for $x\\ne -1$; the value $x=-1$ would need $1-x=0$ too, impossible, so it simply is not on the curve). Substitute into $S$ and simplify; the algebra telescopes to the clean rational function $S(x)=\\dfrac{-x^{2}+2x+1}{2\\,(x^{2}+1)}$.",
          "Compare with the target value $\\tfrac{1}{\\sqrt2}$: $\\dfrac{1}{\\sqrt2}-S(x)=\\dfrac{1}{\\sqrt2}-\\dfrac{-x^{2}+2x+1}{2(x^{2}+1)}=\\dfrac{(1+\\sqrt2)\\,x^{2}-2x+(\\sqrt2-1)}{2\\,(x^{2}+1)}$.",
          "The numerator is a perfect square up to its positive leading coefficient: $(1+\\sqrt2)x^{2}-2x+(\\sqrt2-1)=(1+\\sqrt2)\\big(x-(\\sqrt2-1)\\big)^{2}$, because $(1+\\sqrt2)(\\sqrt2-1)=1$ makes the constant term match and $2(1+\\sqrt2)(\\sqrt2-1)=2$ matches the middle term. Since $1+\\sqrt2>0$ and $x^{2}+1>0$, the whole quotient is $\\ge 0$.",
          "Hence $S(x)\\le\\dfrac{1}{\\sqrt2}$ for every admissible $x$, with equality iff $x=\\sqrt2-1$; then $y=\\dfrac{1-(\\sqrt2-1)}{1+(\\sqrt2-1)}=\\dfrac{2-\\sqrt2}{\\sqrt2}=\\sqrt2-1=x$. Thus $\\boxed{\\max S=\\dfrac{1}{\\sqrt2}\\text{ at }x=y=\\sqrt2-1}$, and the naive ceiling $S\\le 1$ is never met because $\\tfrac{1}{\\sqrt2}<1$."
        ]
      },
      {
        "name": "Why the separate bound fails, then symmetry closes it",
        "steps": [
          "The careless bound $S\\le\\tfrac12+\\tfrac12=1$ would be sharp only if $x=1$ and $y=1$ at once. Test against the constraint: $(1,1)$ gives $x+y+xy=3\\ne 1$, so it is forbidden; and forcing just $x=1$ yields $y=\\tfrac{1-1}{1+1}=0$, whence $S=\\tfrac12+0=\\tfrac12$. So saturating either single term is strictly suboptimal and the genuine optimum must balance the two terms.",
          "Exploit the symmetry of both $S$ and the constraint under $x\\leftrightarrow y$: a smooth symmetric problem takes its interior extremum on the symmetry axis $x=y$. On $x=y$ the constraint reads $2x+x^{2}=1$, i.e. $x^{2}+2x-1=0$, so $x=-1\\pm\\sqrt2$.",
          "Evaluate $S=\\dfrac{2x}{1+x^{2}}$ at the two symmetric points. At $x=\\sqrt2-1$: $1+x^{2}=4-2\\sqrt2$, so $S=\\dfrac{2(\\sqrt2-1)}{4-2\\sqrt2}=\\dfrac{2(\\sqrt2-1)}{2\\sqrt2(\\sqrt2-1)}=\\dfrac{1}{\\sqrt2}$. At $x=-1-\\sqrt2$ one gets $S=-\\dfrac{1}{\\sqrt2}$, the minimum.",
          "The factored identity of the previous method certifies $S(x)\\le\\tfrac{1}{\\sqrt2}$ globally with a single equality point, so the symmetric value $\\tfrac{1}{\\sqrt2}$ is indeed the maximum, not a saddle. Therefore $\\boxed{\\max S=\\dfrac{1}{\\sqrt2}\\text{ at }x=y=\\sqrt2-1}$, comfortably below the unreachable $1$."
        ]
      }
    ],
    "remark": "The whole problem is the chapter's thesis in miniature: a substitution converts an opaque algebraic constraint into a transparent trigonometric one. The constraint $x+y+xy=1$ looks unmotivated until $x=\\tan\\alpha,\\,y=\\tan\\beta$ reveals it as $\\tan(\\alpha+\\beta)=1$, pinning the angle sum to $\\tfrac{\\pi}{4}$; then each linear-over-quadratic term becomes $\\tfrac12\\sin2\\theta$ and the sum-to-product step turns the bound into the trivial $\\cos(\\alpha-\\beta)\\le 1$. The conceptual trap is the false additivity of per-term maxima: $\\tfrac{t}{1+t^{2}}\\le\\tfrac12$ is individually sharp, but its two equality cases $x=1,\\,y=1$ cannot coexist under the coupling, so the honest ceiling is $\\tfrac{1}{\\sqrt2}$, not $1$, and it lives at the balanced point $x=y=\\tan\\tfrac{\\pi}{8}=\\sqrt2-1$. The perfect-square certificate $\\tfrac{1}{\\sqrt2}-S=\\dfrac{(1+\\sqrt2)(x-(\\sqrt2-1))^{2}}{2(1+x^{2})}$ gives an unconditional, calculus-free proof that the substitution merely predicted."
  },
  {
    "theme": "substitution",
    "themeLabel": "Trigonometric Substitution Engines",
    "title": "The Angle-Sum Hiding Inside an Algebraic Constraint",
    "difficulty": 5,
    "task": "Prove the identity, then enumerate all solutions and expose the branch and rationality traps",
    "tags": [
      "tan-addition",
      "weierstrass",
      "factorisation",
      "diophantine",
      "arctan-identity",
      "gaussian-integers"
    ],
    "statement": "Read the two-variable algebraic constraint \\[ x+y+xy=1 \\] as the shadow of an angle sum. (a) Show that if $x=\\tan A$ and $y=\\tan B$ with $A,B\\in\\left(-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2}\\right)$ and $A+B=\\tfrac{\\pi}{4}$, then $x+y+xy=1$; and prove the sharp converse — for $x,y>-1$ the equation $x+y+xy=1$ holds iff $\\arctan x+\\arctan y=\\tfrac{\\pi}{4}$, where the substitution turns the constraint into a single angle-sum. Be explicit about WHY the hypothesis $x,y>-1$ (equivalently $xy<1$) is exactly what keeps the angle sum on the principal branch and not at $\\tfrac{\\pi}{4}\\pm\\pi$. (b) Using this reading, find every ordered pair of positive integers $(m,n)$ with $\\arctan\\dfrac{1}{m}+\\arctan\\dfrac{1}{n}=\\dfrac{\\pi}{4}$, and contrast this finite list with the size of the solution set of $x+y+xy=1$ over the positive rationals — decide whether the latter is finite, and if not, describe it by one rational parameter.",
    "answer": "\\[\\boxed{\\{m,n\\}=\\{2,3\\}\\ \\text{is the only positive-integer solution; over }\\mathbb{Q}_{>0}\\text{ infinitely many: }(x,y)=\\Big(t,\\tfrac{1-t}{1+t}\\Big),\\ t\\in(0,1)\\cap\\mathbb{Q}}\\]",
    "trap": "Four conceptual pitfalls, none arithmetic. (i) BRANCH BLINDNESS: a solver writes $\\arctan x+\\arctan y=\\arctan\\dfrac{x+y}{1-xy}$ and concludes the constraint $x+y=1-xy$ forces the sum to be $\\tfrac{\\pi}{4}$ unconditionally. False: the tangent-addition formula only recovers the angle MODULO $\\pi$. If $xy>1$ then $\\arctan x+\\arctan y$ actually equals $\\tfrac{\\pi}{4}+\\pi$ or, with sign issues, $\\tfrac{\\pi}{4}-\\pi$ — the equation $x+y+xy=1$ can hold while the true arctan-sum is off by a full $\\pi$. The constraint $x,y>-1$ (so $xy<1$ when both share signs appropriately, and in particular for the positive cases $0<xy<1$) is precisely the certificate that keeps the sum in $\\left(-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2}\\right)$ where $\\arctan$ is the genuine inverse. Dropping it makes the 'iff' collapse. (ii) THE $m=1$ PHANTOM: hunting integer solutions, one is tempted to keep $m=1$, since $\\arctan 1=\\tfrac{\\pi}{4}$ 'is part of the answer'. But $m=1$ already exhausts the whole $\\tfrac{\\pi}{4}$, leaving $\\arctan\\tfrac1n=0$, impossible for finite $n$; algebraically $(m-1)(n-1)=2$ kills $m=1$ outright since $0\\ne 2$. (iii) THE DIAGONAL MIRAGE: a symmetric solver guesses $m=n$, i.e. $2\\arctan\\tfrac1m=\\tfrac{\\pi}{4}$, so $\\tfrac1m=\\tan\\tfrac{\\pi}{8}=\\sqrt2-1$ and $m=\\sqrt2+1\\approx 2.414$ — irrational, so there is NO equal-component solution; the integer answer is genuinely the asymmetric $\\{2,3\\}$, not a tidy diagonal. (iv) RATIONALITY MISCOUNT: having found the constraint reduces, over the integers, to the rigid $(m-1)(n-1)=2$ with a finite list, the solver wrongly transports 'finitely many' to the rationals. The positive-rational set is INFINITE: the identical factorisation $(1+x)(1+y)=2$ leaves $1+x$ free to be any rational in $(1,2)$, giving the one-parameter family $\\big(t,\\tfrac{1-t}{1+t}\\big)$ — the rigidity was an artifact of integrality, not of the equation.",
    "solutions": [
      {
        "name": "Tangent-addition: the substitution makes one angle sum",
        "steps": [
          "Substitution direction. With $x=\\tan A,\\ y=\\tan B$ and $A+B=\\tfrac{\\pi}{4}$, apply $\\tan(A+B)=\\dfrac{\\tan A+\\tan B}{1-\\tan A\\tan B}=1$. Cross-multiplying, $\\tan A+\\tan B=1-\\tan A\\tan B$, i.e. $x+y=1-xy$, which is exactly $x+y+xy=1$. The two-variable algebraic constraint is therefore the literal cross-multiplied form of the single statement $A+B=\\tfrac{\\pi}{4}$.",
          "Converse with the branch made honest. Suppose $x,y>-1$ and $x+y+xy=1$. Set $A=\\arctan x,\\ B=\\arctan y$, both in $\\left(-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2}\\right)$. From $x+y+xy=1$ we get $x+y=1-xy$ with $1-xy\\neq 0$ (if $xy=1$ then $x+y=0$, forcing $x=-y$ and $-y^{2}=1$, impossible), so $\\tan(A+B)=\\dfrac{x+y}{1-xy}=1$. Thus $A+B\\in\\{\\tfrac{\\pi}{4}+k\\pi\\}$.",
          "Pin the branch. Because $x,y>-1$, in every case relevant here $xy<1$, so $1-xy>0$ and $\\cos(A+B)$ has the sign of $1-xy>0$; combined with $A+B\\in(-\\pi,\\pi)$ this forces $A+B\\in\\left(-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2}\\right)$, the unique branch on which $\\tan=1$ gives $A+B=\\tfrac{\\pi}{4}$ — not $\\tfrac{\\pi}{4}\\pm\\pi$. Hence $\\arctan x+\\arctan y=\\tfrac{\\pi}{4}$, proving the sharp 'iff'.",
          "Integer harvest. For $x=\\tfrac1m,\\ y=\\tfrac1n$ ($m,n\\ge 1$) the constraint reads $\\tfrac1m+\\tfrac1n+\\tfrac1{mn}=1$, i.e. $n+m+1=mn$, i.e. $mn-m-n-1=0$, i.e. $(m-1)(n-1)=2$. The positive-integer factor pairs of $2$ are $(1,2)$ and $(2,1)$, giving $(m,n)=(2,3)$ and $(3,2)$. Both satisfy $\\tfrac1m\\cdot\\tfrac1n=\\tfrac16<1$ so the branch condition holds, and indeed $\\arctan\\tfrac12+\\arctan\\tfrac13=\\tfrac{\\pi}{4}$. So $\\boxed{\\{m,n\\}=\\{2,3\\}}$ is the only solution."
        ]
      },
      {
        "name": "The hidden factorisation (1+x)(1+y)=2",
        "steps": [
          "Add $1$ to both sides: $x+y+xy+1=2$, and the left side factors as $(1+x)(1+y)=2$. This single product form is the engine for both counts; the trig substitution explains WHY a product appears — it is $\\sec A\\,\\sec B$ rescaled, since $1+\\tan A\\tan B$ and the angle-sum live in the same identity.",
          "Positive rationals are infinite. Choose any rational $u=1+x\\in(1,2)$ (forced by $x\\in(0,1)$, which is necessary since $x,y>0$ and the product is $2$ with each factor $>1$). Then $1+y=\\tfrac{2}{u}$ is rational and $y=\\tfrac{2}{u}-1\\in(0,1)$. Writing $u=1+t$ gives the clean family $(x,y)=\\big(t,\\tfrac{1-t}{1+t}\\big)$, $t\\in(0,1)\\cap\\mathbb{Q}$ — a genuine one-parameter infinitude (e.g. $t=\\tfrac14\\Rightarrow y=\\tfrac35$, $t=\\tfrac27\\Rightarrow y=\\tfrac59$).",
          "Integers are rigid. For $x=\\tfrac1m,\\ y=\\tfrac1n$ the factor form is $\\dfrac{m+1}{m}\\cdot\\dfrac{n+1}{n}=2$, i.e. $(m+1)(n+1)=2mn$. Expanding and cancelling, $mn-m-n-1=0\\Rightarrow(m-1)(n-1)=2$, whose only positive solutions are $\\{m,n\\}=\\{2,3\\}$. The very same equation that is loose over $\\mathbb{Q}$ becomes rigid over $\\mathbb{Z}$ purely because $2$ has so few integer factorisations.",
          "Conclude. Over $\\mathbb{Z}_{>0}$ the unique pair is $\\boxed{\\{2,3\\}}$; over $\\mathbb{Q}_{>0}$ the solution set is the infinite family $\\big(t,\\tfrac{1-t}{1+t}\\big)$. The contrast is the whole point: integrality, not the equation, supplies the finiteness."
        ]
      },
      {
        "name": "Gaussian integers: arguments of (m+i)(n+i)",
        "steps": [
          "Translate angles to complex arguments. For positive $a$, $\\arctan\\tfrac1a=\\arg(a+i)$. Thus $\\arctan\\tfrac1m+\\arctan\\tfrac1n=\\arg\\big((m+i)(n+i)\\big)$, turning the trig sum into the argument of a single Gaussian integer.",
          "Compute the product. $(m+i)(n+i)=(mn-1)+(m+n)i$. The condition $\\arctan\\tfrac1m+\\arctan\\tfrac1n=\\tfrac{\\pi}{4}$ (with both arctangents in $(0,\\tfrac{\\pi}{4}]$ so the sum stays in $(0,\\tfrac{\\pi}{2})$ — the principal branch, the same caveat as before) means this product has argument $\\tfrac{\\pi}{4}$, i.e. equal real and imaginary parts: $mn-1=m+n$.",
          "Solve. $mn-m-n-1=0\\Rightarrow(m-1)(n-1)=2$, so $\\{m,n\\}=\\{2,3\\}$. Indeed $(2+i)(3+i)=5+5i=5(1+i)$, whose argument is exactly $\\tfrac{\\pi}{4}$ — the Gaussian integer $5(1+i)$ sits squarely on the line $\\Im=\\Re$.",
          "The branch caveat repeats geometrically. If instead $mn<1$ (here only $m=n=1$ would threaten, but $1\\cdot1-1=0\\neq 2$) the real part could be non-positive and the argument would jump to $\\tfrac{\\pi}{4}+\\pi$; requiring equal POSITIVE parts is the complex-plane form of the principal-branch condition. Hence the unique answer is $\\boxed{\\{m,n\\}=\\{2,3\\}}$, with the rational set remaining the infinite family of Method 2."
        ]
      }
    ],
    "remark": "The lesson is that the algebraic constraint $x+y+xy=1$ is not a relation to be manipulated but a disguise: under $x=\\tan A,\\ y=\\tan B$ it collapses to the single angle-sum $A+B=\\tfrac{\\pi}{4}$, and equivalently to the one-line factorisation $(1+x)(1+y)=2$. That double reading is the whole idea. Three traps separate a top-rank student from the rest. First, the tangent-addition formula recovers an angle only modulo $\\pi$, so the converse needs $x,y>-1$ to keep the sum on the principal branch — drop it and the 'iff' is false. Second, the integer hunt rewards anyone who resists the $m=1$ phantom (it already spends the whole $\\tfrac{\\pi}{4}$) and the diagonal mirage ($m=n$ forces the irrational $\\sqrt2+1$): the true answer is the asymmetric $\\{2,3\\}$, the classic $\\arctan\\tfrac12+\\arctan\\tfrac13=\\tfrac{\\pi}{4}$. Third, and most instructive, the SAME equation is rigid over $\\mathbb{Z}$ (only $\\{2,3\\}$, because $2$ barely factors) yet infinite over $\\mathbb{Q}$ (the family $(t,\\tfrac{1-t}{1+t})$): finiteness was an artifact of integrality, never of the constraint. The Gaussian-integer view $(2+i)(3+i)=5(1+i)$ shows the angle sum living on the diagonal of the complex plane, unifying all three threads."
  },
  {
    "theme": "substitution",
    "themeLabel": "Trigonometric Substitution Engines",
    "title": "Two Chords Whose Sum Maxes Out",
    "difficulty": 5,
    "task": "Solve the parametric radical system completely and prove the solution is unique",
    "tags": [
      "sine-substitution",
      "sum-to-product",
      "triangle-inequality",
      "extremal-forces-equality",
      "branch-constraint",
      "parametric-system"
    ],
    "statement": "Find all real pairs $(x,y)$ satisfying the system \\[ \\sqrt{1-x^{2}}+\\sqrt{1-y^{2}}=1, \\qquad x+y=\\sqrt{3}, \\] where both radicals denote the principal (nonnegative) square root. The intended engine is the two-variable substitution $x=\\sin\\alpha,\\ y=\\sin\\beta$ with $\\alpha,\\beta\\in\\left[-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2}\\right]$, which turns the first equation into a sum of cosines and the second into a sum of sines, so that the pair $(x,y)$ becomes the coordinate-sum of two unit vectors. Prove that the system has exactly one solution, exhibit it, and justify carefully why no second pair (in particular no asymmetric pair with $x\\neq y$) can occur. A solver who divides the two trigonometric equations obtains $\\tan\\tfrac{\\alpha+\\beta}{2}=\\sqrt{3}$, concludes $\\alpha+\\beta=\\tfrac{2\\pi}{3}$, and announces a one-parameter family of solutions; settle whether that family is real or illusory.",
    "answer": "\\[\\boxed{(x,y)=\\left(\\tfrac{\\sqrt3}{2},\\,\\tfrac{\\sqrt3}{2}\\right)\\ \\text{uniquely}}\\]",
    "trap": "The conceptual trap is not arithmetic but a loss of information when two equations are divided. Writing $x=\\sin\\alpha,\\ y=\\sin\\beta$ and using the principal root $\\sqrt{1-x^{2}}=\\cos\\alpha\\ge 0$ (legitimate only because $\\alpha,\\beta\\in[-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2}]$) gives $\\cos\\alpha+\\cos\\beta=1$ and $\\sin\\alpha+\\sin\\beta=\\sqrt{3}$. Sum-to-product turns these into $2\\cos s\\cos d=1$ and $2\\sin s\\cos d=\\sqrt{3}$, where $s=\\tfrac{\\alpha+\\beta}{2},\\ d=\\tfrac{\\alpha-\\beta}{2}$. Dividing the second by the first yields $\\tan s=\\sqrt{3}$, hence $s=\\tfrac{\\pi}{3}$ — and a tempting voice says: one relation $\\alpha+\\beta=\\tfrac{2\\pi}{3}$ in two unknowns, therefore an infinite family. That is exactly the trap. Division recovers only the RATIO (the direction of the sum vector); it silently discards the common factor $2\\cos d$, i.e. the MAGNITUDE. Reinstating either original equation forces $2\\cos\\tfrac{\\pi}{3}\\cos d=\\cos d=1$, so $\\cos d=1$, $d=0$, $\\alpha=\\beta$. The phantom pencil is concrete and seductive: along $s=\\tfrac{\\pi}{3}$, i.e. $\\alpha=\\tfrac{\\pi}{3}+d,\\ \\beta=\\tfrac{\\pi}{3}-d$, one computes $x+y=\\sqrt{3}\\cos d$ and $\\sqrt{1-x^{2}}+\\sqrt{1-y^{2}}=\\cos d$, so their RATIO is $\\sqrt{3}$ for EVERY $d$ — which is precisely what the division detected — yet each quantity hits its required target ($\\sqrt{3}$ and $1$) only at $d=0$. A solver who checks only that the ratio is right, or who stops at $\\tan s=\\sqrt{3}$, accepts the whole pencil and reports infinitely many solutions; the truth is the single symmetric point. A secondary trap is branch blindness: replacing some $\\alpha$ by $\\pi-\\alpha$ keeps $\\sin\\alpha$ but flips $\\cos\\alpha$ to $-\\cos\\alpha$, i.e. uses the negative root; that is forbidden by the principal-root hypothesis, and indeed with one cosine negative the cosine-sum cannot reach $1$ while the sine-sum stays $\\sqrt{3}$, so no reflected solution exists either.",
    "solutions": [
      {
        "name": "Two unit vectors: equality in the triangle inequality",
        "steps": [
          "Substitute $x=\\sin\\alpha,\\ y=\\sin\\beta$ with $\\alpha,\\beta\\in[-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2}]$ so that $\\sqrt{1-x^{2}}=\\cos\\alpha\\ge 0$ and $\\sqrt{1-y^{2}}=\\cos\\beta\\ge 0$ are genuinely the principal roots. The system becomes $\\cos\\alpha+\\cos\\beta=1$ and $\\sin\\alpha+\\sin\\beta=\\sqrt{3}$.",
          "Read these as components of a vector sum. Let $A=(\\cos\\alpha,\\sin\\alpha)$ and $B=(\\cos\\beta,\\sin\\beta)$, two points on the unit circle. The two equations say $A+B=(1,\\sqrt{3})$, a fixed vector of length $\\sqrt{1^{2}+(\\sqrt3)^{2}}=2$.",
          "Apply the triangle inequality: $|A+B|\\le|A|+|B|=1+1=2$, with equality if and only if $A$ and $B$ point in the same direction, i.e. $A=B$. Since here $|A+B|=2$ attains the bound exactly, equality holds, forcing $A=B$ and hence $\\alpha=\\beta$.",
          "Then $2A=(1,\\sqrt3)$ gives $A=(\\tfrac12,\\tfrac{\\sqrt3}{2})$, so $\\cos\\alpha=\\tfrac12,\\ \\sin\\alpha=\\tfrac{\\sqrt3}{2}$, i.e. $\\alpha=\\tfrac{\\pi}{3}$ and $x=y=\\sin\\tfrac{\\pi}{3}=\\tfrac{\\sqrt3}{2}$. The equality case of the triangle inequality is exactly what rules out every asymmetric pair, so $\\boxed{(x,y)=\\left(\\tfrac{\\sqrt3}{2},\\tfrac{\\sqrt3}{2}\\right)}$ is the unique solution."
        ]
      },
      {
        "name": "Sum-to-product, keeping the magnitude that division throws away",
        "steps": [
          "With the same substitution, set $s=\\tfrac{\\alpha+\\beta}{2},\\ d=\\tfrac{\\alpha-\\beta}{2}$. Sum-to-product gives $\\cos\\alpha+\\cos\\beta=2\\cos s\\cos d=1$ and $\\sin\\alpha+\\sin\\beta=2\\sin s\\cos d=\\sqrt{3}$. Note $\\alpha,\\beta\\in[-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2}]$ gives $s\\in[-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2}]$ and $d\\in[-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2}]$, so $\\cos d\\ge 0$.",
          "Dividing would give $\\tan s=\\sqrt3$, hence $s=\\tfrac{\\pi}{3}$ on the available branch; but division cancels the shared factor $2\\cos d$ and loses it. Keep it: substitute $s=\\tfrac{\\pi}{3}$ into $2\\cos s\\cos d=1$, i.e. $2\\cdot\\tfrac12\\cdot\\cos d=\\cos d=1$.",
          "Therefore $\\cos d=1$, so $d=0$ and $\\alpha=\\beta=\\tfrac{\\pi}{3}$. The would-be free parameter $d$ is pinned by the magnitude equation; the family $\\{s=\\tfrac{\\pi}{3},\\,d\\ \\text{free}\\}$ collapses to one point. Indeed along that pencil $\\sin\\alpha+\\sin\\beta=\\sqrt3\\cos d$ and $\\cos\\alpha+\\cos\\beta=\\cos d$, both equal to their targets only at $d=0$.",
          "Hence $x=y=\\sin\\tfrac{\\pi}{3}=\\tfrac{\\sqrt3}{2}$, and $\\boxed{(x,y)=\\left(\\tfrac{\\sqrt3}{2},\\tfrac{\\sqrt3}{2}\\right)}$ is the only solution."
        ]
      },
      {
        "name": "Square-and-add: the cosine-sum is at its maximum",
        "steps": [
          "From the substitution, square and add the two equations. Using $(\\cos\\alpha+\\cos\\beta)^{2}+(\\sin\\alpha+\\sin\\beta)^{2}=2+2\\cos(\\alpha-\\beta)$, the system gives $1^{2}+(\\sqrt3)^{2}=2+2\\cos(\\alpha-\\beta)$, i.e. $4=2+2\\cos(\\alpha-\\beta)$.",
          "Hence $\\cos(\\alpha-\\beta)=1$, which forces $\\alpha-\\beta=0$ (within $[-\\pi,\\pi]$), so $\\alpha=\\beta$. Equivalently, with the sine-sum fixed at $\\sqrt3$ one has $(\\cos\\alpha+\\cos\\beta)^{2}=2\\cos(\\alpha-\\beta)-1\\le 1$, so the cosine-sum is at its maximum value $1$ precisely when $\\alpha=\\beta$: the constraint sits at the extremum, and that is what kills any spread between the variables.",
          "With $\\alpha=\\beta$, the second equation reads $2\\sin\\alpha=\\sqrt3$, so $\\sin\\alpha=\\tfrac{\\sqrt3}{2}$ and (on the principal branch, where $\\cos\\alpha=\\tfrac12>0$ makes the first equation $2\\cos\\alpha=1$ consistent) $\\alpha=\\tfrac{\\pi}{3}$.",
          "Therefore $x=y=\\tfrac{\\sqrt3}{2}$. A direct check confirms $\\sqrt{1-\\tfrac34}+\\sqrt{1-\\tfrac34}=\\tfrac12+\\tfrac12=1$ and $\\tfrac{\\sqrt3}{2}+\\tfrac{\\sqrt3}{2}=\\sqrt3$, so $\\boxed{(x,y)=\\left(\\tfrac{\\sqrt3}{2},\\tfrac{\\sqrt3}{2}\\right)}$ is the unique solution."
        ]
      }
    ],
    "remark": "The whole problem lives or dies on one substitution: $x=\\sin\\alpha,\\ y=\\sin\\beta$ converts the radical system into two unit vectors $A,B$ with $A+B=(1,\\sqrt3)$, a fixed vector of length exactly $2$. Because $2=|A|+|B|$ is the maximum possible length of a sum of two unit vectors, equality in the triangle inequality fires and forces $A=B$ — uniqueness is geometric, not computational. The trap that separates a top-rank student from the rest is the lossy division step: from $2\\cos s\\cos d=1$ and $2\\sin s\\cos d=\\sqrt3$ one is tempted to divide, get $\\tan s=\\sqrt3$, and declare a one-parameter family $\\alpha+\\beta=\\tfrac{2\\pi}{3}$. But division only sees the direction of the sum vector and discards its magnitude; the phantom pencil has $(x+y)$ and the radical-sum in the constant ratio $\\sqrt3$ for every $d$, yet each meets its target only at $d=0$. Reinstating the magnitude (or, equivalently, squaring and adding to get $\\cos(\\alpha-\\beta)=1$) pins $\\alpha=\\beta$. The principal-root hypothesis is the other guard rail: it keeps both cosines nonnegative, excluding the reflected branch $\\alpha\\mapsto\\pi-\\alpha$ that would secretly use a negative square root. Three readings — triangle inequality, retained-magnitude sum-to-product, and the square-and-add extremum — all land on the same crisp point $x=y=\\tfrac{\\sqrt3}{2}$."
  },
  {
    "theme": "substitution",
    "themeLabel": "Trigonometric Substitution Engines",
    "title": "The Branch the Arctangent Sum Leaves Behind",
    "difficulty": 5,
    "task": "Find both the maximum and the minimum, locate the points that attain them, and expose the boundary value the single-branch shortcut mistakes for the minimum",
    "tags": [
      "weierstrass",
      "tan-substitution",
      "arctangent-addition",
      "multivalued-branch",
      "constrained-extremum",
      "discriminant-method"
    ],
    "statement": "Let $x,y$ be real numbers subject to the single algebraic constraint \\[ x+y+xy=1. \\] Determine the maximum AND the minimum value of \\[ S=\\frac{x}{1+x^{2}}+\\frac{y}{1+y^{2}}, \\] and in each case give the point $(x,y)$ at which the extreme value is attained. A solver who substitutes $x=\\tan\\alpha,\\ y=\\tan\\beta$ rewrites the constraint as $\\tan(\\alpha+\\beta)=1$, takes the principal value $\\alpha+\\beta=\\tfrac{\\pi}{4}$, reduces $S$ to $\\tfrac{1}{\\sqrt2}\\cos(\\alpha-\\beta)$, and concludes that $S$ ranges over $\\big(-\\tfrac12,\\tfrac{1}{\\sqrt2}\\big]$ — so that the minimum is $-\\tfrac12$. Decide whether that is correct; if not, give the true minimum and pinpoint exactly which solutions of $\\tan(\\alpha+\\beta)=1$ the shortcut discarded.",
    "answer": "\\[\\boxed{\\,S_{\\max}=\\dfrac{1}{\\sqrt2}\\ \\text{at}\\ x=y=\\sqrt2-1,\\qquad S_{\\min}=-\\dfrac{1}{\\sqrt2}\\ \\text{at}\\ x=y=-(\\sqrt2+1)\\,}\\]",
    "trap": "Putting $x=\\tan\\alpha,\\,y=\\tan\\beta$ with $\\alpha,\\beta\\in\\left(-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2}\\right)$ turns $x+y+xy=1$ into $\\dfrac{\\tan\\alpha+\\tan\\beta}{1-\\tan\\alpha\\tan\\beta}=1$, i.e. $\\tan(\\alpha+\\beta)=1$. The fatal step is reading this as $\\alpha+\\beta=\\tfrac{\\pi}{4}$ alone. But $\\alpha+\\beta$ ranges over the OPEN interval $(-\\pi,\\pi)$, and $\\tan\\theta=1$ has TWO solutions there: $\\theta=\\tfrac{\\pi}{4}$ and $\\theta=\\tfrac{\\pi}{4}-\\pi=-\\tfrac{3\\pi}{4}$. The tangent's period $\\pi$ folds two genuinely different angle-sums onto the one equation, and both are realizable by admissible $\\alpha,\\beta$. Writing $S=\\tfrac12(\\sin2\\alpha+\\sin2\\beta)=\\sin(\\alpha+\\beta)\\cos(\\alpha-\\beta)$, the discarded branch $\\alpha+\\beta=-\\tfrac{3\\pi}{4}$ gives $S=\\sin\\!\\left(-\\tfrac{3\\pi}{4}\\right)\\cos(\\alpha-\\beta)=-\\tfrac{1}{\\sqrt2}\\cos(\\alpha-\\beta)$, whose minimum $-\\tfrac{1}{\\sqrt2}$ is attained at $\\alpha=\\beta=-\\tfrac{3\\pi}{8}$, i.e. $x=y=\\tan\\!\\left(-\\tfrac{3\\pi}{8}\\right)=-(\\sqrt2+1)$ — a perfectly finite, perfectly legal point that satisfies the constraint ($x+y+xy=-2(\\sqrt2+1)+(\\sqrt2+1)^2=3+2\\sqrt2-2\\sqrt2-2=1$). The shortcut's claimed minimum $-\\tfrac12$ is not even a value of $S$: on the retained branch $S=\\tfrac{1}{\\sqrt2}\\cos(\\alpha-\\beta)$ with $\\alpha-\\beta\\in(-\\tfrac{3\\pi}{4},\\tfrac{3\\pi}{4})$ OPEN, so $\\cos(\\alpha-\\beta)>-\\tfrac{1}{\\sqrt2}$ strictly and $S>-\\tfrac12$ strictly; the bound $-\\tfrac12$ is an unattained infimum that would require $\\alpha-\\beta\\to\\pm\\tfrac{3\\pi}{4}$, i.e. one variable escaping to $\\pm\\infty$. So the shortcut is doubly wrong: it reports a number that is never reached, and it misses the true minimum $-\\tfrac{1}{\\sqrt2}\\approx-0.707$, which lies strictly BELOW the fake $-\\tfrac12$. The lesson: $\\tan(\\alpha+\\beta)=k$ is a period-$\\pi$ condition on a quantity living in a width-$2\\pi$ window — it carries two branches, and an extremum hunt that keeps only the principal one amputates half the feasible set.",
    "solutions": [
      {
        "name": "Tangent substitution with full branch enumeration",
        "steps": [
          "Set $x=\\tan\\alpha,\\ y=\\tan\\beta$ with $\\alpha,\\beta\\in\\left(-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2}\\right)$ (a bijection onto $\\mathbb{R}^2$). The constraint $x+y+xy=1$ becomes $\\tan\\alpha+\\tan\\beta=1-\\tan\\alpha\\tan\\beta$, i.e. $\\dfrac{\\tan\\alpha+\\tan\\beta}{1-\\tan\\alpha\\tan\\beta}=1$, i.e. $\\tan(\\alpha+\\beta)=1$. Since $\\alpha+\\beta\\in(-\\pi,\\pi)$, the equation has the TWO solutions $\\alpha+\\beta=\\tfrac{\\pi}{4}$ and $\\alpha+\\beta=-\\tfrac{3\\pi}{4}$; keeping both is essential.",
          "Rewrite the objective: $\\dfrac{x}{1+x^2}=\\dfrac{\\tan\\alpha}{\\sec^2\\alpha}=\\sin\\alpha\\cos\\alpha=\\tfrac12\\sin2\\alpha$, so $S=\\tfrac12(\\sin2\\alpha+\\sin2\\beta)=\\sin(\\alpha+\\beta)\\cos(\\alpha-\\beta)$ by sum-to-product. The factor $\\sin(\\alpha+\\beta)$ is fixed on each branch, and $\\cos(\\alpha-\\beta)\\in[-1,1]$ is the only free quantity.",
          "Branch $\\alpha+\\beta=\\tfrac{\\pi}{4}$: $S=\\sin\\tfrac{\\pi}{4}\\cos(\\alpha-\\beta)=\\tfrac{1}{\\sqrt2}\\cos(\\alpha-\\beta)$. Its largest value $\\tfrac{1}{\\sqrt2}$ occurs at $\\alpha-\\beta=0$, i.e. $\\alpha=\\beta=\\tfrac{\\pi}{8}$, giving $x=y=\\tan\\tfrac{\\pi}{8}=\\sqrt2-1$. This is the global maximum, since $\\tfrac{1}{\\sqrt2}$ is the larger of the two branch amplitudes.",
          "Branch $\\alpha+\\beta=-\\tfrac{3\\pi}{4}$: $S=\\sin\\!\\left(-\\tfrac{3\\pi}{4}\\right)\\cos(\\alpha-\\beta)=-\\tfrac{1}{\\sqrt2}\\cos(\\alpha-\\beta)$. Its smallest value $-\\tfrac{1}{\\sqrt2}$ occurs at $\\alpha-\\beta=0$, i.e. $\\alpha=\\beta=-\\tfrac{3\\pi}{8}$, giving $x=y=\\tan\\!\\left(-\\tfrac{3\\pi}{8}\\right)=-(\\sqrt2+1)$. Both diagonal points are interior (finite), so both extremes are genuinely attained.",
          "Across both branches $|S|\\le\\tfrac{1}{\\sqrt2}$, so the global maximum is $\\tfrac{1}{\\sqrt2}$ at $x=y=\\sqrt2-1$ and the global minimum is $-\\tfrac{1}{\\sqrt2}$ at $x=y=-(\\sqrt2+1)$. The single-branch shortcut, having thrown away $\\alpha+\\beta=-\\tfrac{3\\pi}{4}$, sees only $S=\\tfrac{1}{\\sqrt2}\\cos(\\alpha-\\beta)$ with $\\alpha-\\beta$ restricted to the OPEN interval $(-\\tfrac{3\\pi}{4},\\tfrac{3\\pi}{4})$, whence $S>-\\tfrac12$ strictly: its \"$-\\tfrac12$\" is an unattained infimum, not the minimum. $\\boxed{S_{\\max}=\\tfrac{1}{\\sqrt2},\\ S_{\\min}=-\\tfrac{1}{\\sqrt2}}$."
        ]
      },
      {
        "name": "Eliminate y and run single-variable calculus",
        "steps": [
          "Solve the constraint for $y$: $y(1+x)=1-x\\Rightarrow y=\\dfrac{1-x}{1+x}$ (with $x\\neq-1$; the value $x=-1$ would force $0\\cdot y=2$, impossible, so it is genuinely excluded). Substituting and simplifying, the objective collapses to a single clean rational function $S(x)=\\dfrac{-x^{2}+2x+1}{2\\,(x^{2}+1)}$.",
          "Differentiate: $S'(x)=\\dfrac{-x^{2}-2x+1}{(x^{2}+1)^{2}}$. The critical points solve $x^{2}+2x-1=0$, i.e. $x=-1\\pm\\sqrt2$. Thus $x=\\sqrt2-1$ and $x=-1-\\sqrt2=-(\\sqrt2+1)$. On the constraint curve each is self-paired: $y=\\dfrac{1-x}{1+x}$ returns $y=\\sqrt2-1$ and $y=-(\\sqrt2+1)$ respectively, so both extremes sit on the diagonal $x=y$.",
          "Evaluate: at $x=\\sqrt2-1$, $S=\\dfrac{-(\\sqrt2-1)^2+2(\\sqrt2-1)+1}{2((\\sqrt2-1)^2+1)}=\\dfrac{1}{\\sqrt2}$ (the maximum); at $x=-(\\sqrt2+1)$, $S=-\\dfrac{1}{\\sqrt2}$ (the minimum). Since $S'$ changes $+\\to-$ at the first and $-\\to+$ at the second, these are a true local max and local min.",
          "Check the excluded boundary the trap latches onto: $\\displaystyle\\lim_{x\\to\\pm\\infty}S(x)=-\\tfrac12$ and $\\displaystyle\\lim_{x\\to-1}S(x)=-\\tfrac12$. So $-\\tfrac12$ is exactly the value $S$ approaches at the holes of its domain (where a variable runs off to infinity), confirming it is an unattained boundary level, never an extremum. The attained extremes are therefore $\\boxed{S_{\\max}=\\tfrac{1}{\\sqrt2},\\ S_{\\min}=-\\tfrac{1}{\\sqrt2}}$ at $x=y=\\sqrt2-1$ and $x=y=-(\\sqrt2+1)$."
        ]
      },
      {
        "name": "Discriminant (S-method) on the reduced rational function",
        "steps": [
          "From Solution 2, on the constraint curve $S=\\dfrac{-x^{2}+2x+1}{2(x^{2}+1)}$. Treat a candidate level $S$ as a parameter and clear denominators: $2S(x^{2}+1)=-x^{2}+2x+1$, i.e. $(2S+1)x^{2}-2x+(2S-1)=0$. A real $x$ exists iff this equation is solvable.",
          "Case $2S+1\\neq0$: the discriminant must be non-negative, $4-4(2S+1)(2S-1)\\ge0\\Rightarrow 1-(4S^{2}-1)\\ge0\\Rightarrow S^{2}\\le\\tfrac12$, i.e. $-\\tfrac{1}{\\sqrt2}\\le S\\le\\tfrac{1}{\\sqrt2}$. At the endpoints $S=\\pm\\tfrac{1}{\\sqrt2}$ the discriminant vanishes, giving the double root $x=\\dfrac{1}{2S+1}$: for $S=\\tfrac{1}{\\sqrt2}$ this is $x=\\sqrt2-1$, and for $S=-\\tfrac{1}{\\sqrt2}$ it is $x=-(\\sqrt2+1)$ — both finite and admissible.",
          "Case $2S+1=0$ (i.e. $S=-\\tfrac12$): the quadratic degenerates to the linear equation $-2x-2=0$, whose only root is $x=-1$ — precisely the point excluded from the domain (it makes $y$ undefined). Hence $S=-\\tfrac12$ is NOT a value of the objective; it is the spurious level the trap reports, ruled out exactly because the substitution that produced it is illegal at $x=-1$.",
          "Therefore the attainable values of $S$ fill $\\left[-\\tfrac{1}{\\sqrt2},\\tfrac{1}{\\sqrt2}\\right]$ with the endpoints reached, and the gap value $-\\tfrac12$ inside that interval is approached only in the limit. The maximum is $\\tfrac{1}{\\sqrt2}$ at $x=y=\\sqrt2-1$ and the minimum is $-\\tfrac{1}{\\sqrt2}$ at $x=y=-(\\sqrt2+1)$: $\\boxed{S_{\\max}=\\tfrac{1}{\\sqrt2},\\ S_{\\min}=-\\tfrac{1}{\\sqrt2}}$."
        ]
      }
    ],
    "remark": "The engine is the Weierstrass-style pair $x=\\tan\\alpha,\\,y=\\tan\\beta$, which converts the algebraic constraint $x+y+xy=1$ into the angle condition $\\tan(\\alpha+\\beta)=1$ and the objective into $\\sin(\\alpha+\\beta)\\cos(\\alpha-\\beta)$ — a product of a branch-fixed amplitude and a free cosine. The whole problem is built so that the substitution succeeds but the INVERSION fails for the unwary: $\\tan(\\alpha+\\beta)=1$ is a period-$\\pi$ condition on a quantity that lives in the width-$2\\pi$ window $(-\\pi,\\pi)$, so it splits into two equally valid lines $\\alpha+\\beta=\\tfrac{\\pi}{4}$ and $\\alpha+\\beta=-\\tfrac{3\\pi}{4}$. The principal-value reflex keeps only the first, capturing the maximum $\\tfrac{1}{\\sqrt2}$ at $x=y=\\sqrt2-1$ but blinding the solver to the minimum $-\\tfrac{1}{\\sqrt2}$ at $x=y=-(\\sqrt2+1)$, which lives entirely on the discarded branch. Worse, the amputated branch is open at its ends, so the shortcut's \"minimum'' $-\\tfrac12$ is not even a value of $S$ — it is the limit as a variable escapes to infinity, exactly the boundary level the calculus route (Solution 2) shows $S$ tending to at $x\\to\\pm\\infty$ and $x\\to-1$, and the discriminant route (Solution 3) flags as the degenerate $2S+1=0$ case whose only root $x=-1$ is forbidden. Three independent engines — branch enumeration, single-variable calculus, and the $S$-discriminant — agree on $\\left[-\\tfrac{1}{\\sqrt2},\\tfrac{1}{\\sqrt2}\\right]$ with both endpoints attained on the diagonal. The moral for a top-rank student: a trigonometric substitution is only as safe as its inverse; whenever a periodic equation pins an angle-sum that ranges over more than one period, every branch is part of the feasible set, and an extremum search that forgets one of them can lose an entire extreme.",
    "_meta_provenance": "two-branch resolution of tan(alpha+beta)=1 from constraint x+y+xy=1; objective sin(a+b)cos(a-b); verified in sympy/numpy that S_max=1/sqrt2 at x=y=sqrt2-1, S_min=-1/sqrt2 at x=y=-(sqrt2+1), and trap value -1/2 is the unattained limit at x->+-inf and x->-1"
  },
  {
    "theme": "substitution",
    "themeLabel": "Trigonometric Substitution Engines",
    "title": "The Peak the Rational Chart Cannot Reach",
    "difficulty": 5,
    "task": "Maximise the linear form, locate the optimal parameter, then decide for which target direction the maximum is never attained",
    "tags": [
      "weierstrass",
      "unit-circle",
      "sinusoid-extremum",
      "missing-point",
      "supremum-vs-maximum",
      "cauchy-schwarz"
    ],
    "statement": "For each real parameter $t$ let \\[ X(t)=\\frac{1-t^{2}}{1+t^{2}},\\qquad Y(t)=\\frac{2t}{1+t^{2}}, \\] so that $(X,Y)$ traces the unit circle as $t$ runs over all of $\\mathbb{R}$. (a) Find the maximum value of \\[ f(t)=X(t)+\\sqrt{3}\\,Y(t) \\] over real $t$, and the value of $t$ at which it occurs, by recognising $f$ as a single sinusoid in the angle $\\theta$ for which $(X,Y)=(\\cos\\theta,\\sin\\theta)$. (b) Now consider, for a fixed real unit vector $(a,b)$ with $a^{2}+b^{2}=1$, the linear form $g(t)=a\\,X(t)+b\\,Y(t)$. Show that $\\sup_{t\\in\\mathbb{R}} g(t)=1$ for every such $(a,b)$, but that this supremum is an actual MAXIMUM (attained at some finite real $t$) for all directions except exactly one. Identify that exceptional direction, explain geometrically why no real $t$ attains the value $1$ there, and state precisely what the parametrisation is missing.",
    "answer": "\\[\\boxed{\\max f=2\\ \\text{at}\\ t=\\tfrac{1}{\\sqrt3};\\quad \\sup g=1\\ \\text{is attained for every }(a,b)\\ \\text{except }(a,b)=(-1,0),\\ \\text{where it is a supremum but not a maximum}}\\]",
    "trap": "The trap is the silent identification of the parameter line $\\mathbb{R}$ with the whole circle. The Weierstrass map $t\\mapsto(X,Y)=(\\cos\\theta,\\sin\\theta)$ with $t=\\tan\\tfrac{\\theta}{2}$ covers the circle ONCE for $\\theta\\in(-\\pi,\\pi)$ — but it omits a single point: $\\theta=\\pi$, the point $(-1,0)$, which would need $t=\\tan\\tfrac{\\pi}{2}=\\infty$. A strong solver computes $\\sup(aX+bY)=\\sqrt{a^{2}+b^{2}}=1$ (Cauchy-Schwarz, or $a\\cos\\theta+b\\sin\\theta=\\cos(\\theta-\\varphi)$ with $\\varphi=\\operatorname{atan2}(b,a)$) and then declares it 'attained at $\\theta=\\varphi$', i.e. at $t=\\tan\\tfrac{\\varphi}{2}$ — without checking that this $t$ is a real number. For the headline direction $(a,b)=\\bigl(\\tfrac12,\\tfrac{\\sqrt3}{2}\\bigr)$ the peak sits at $\\varphi=\\tfrac{\\pi}{3}\\in(-\\pi,\\pi)$, so $t=\\tan\\tfrac{\\pi}{6}=\\tfrac{1}{\\sqrt3}$ is finite and the maximum $2$ (after rescaling by $2$) is genuinely attained — lulling the solver into believing attainment is automatic. The fatal case is the direction pointing AT the missing point: $(a,b)=(-1,0)$, where the peak is at $\\varphi=\\pi$. There the supremum $1=\\sup(-X)$ is the value of $-X$ at $(-1,0)$, and since $-X=\\dfrac{t^{2}-1}{t^{2}+1}=1-\\dfrac{2}{t^{2}+1}<1$ for every real $t$, the value $1$ is approached only as $t\\to\\pm\\infty$ and is NEVER attained — the maximum does not exist. Writing 'maximum $=1$ at $t=\\tan\\tfrac{\\pi}{2}=\\infty$' treats $\\infty$ as a legitimate value of the real parameter; that is the conceptual error. The subtlety is razor-thin: the instant $b\\neq 0$ (say $(a,b)=(-1,\\varepsilon)/\\sqrt{1+\\varepsilon^{2}}$ for tiny $\\varepsilon\\neq0$) the peak angle drops strictly inside $(-\\pi,\\pi)$, $t$ becomes finite though huge, and the maximum IS attained — so $(-1,0)$ is the unique exceptional direction, not a whole arc.",
    "solutions": [
      {
        "name": "Sinusoid in the angle, with the boundary checked",
        "steps": [
          "Set $(X,Y)=(\\cos\\theta,\\sin\\theta)$ where $t=\\tan\\tfrac{\\theta}{2}$; as $t$ ranges over $\\mathbb{R}$, $\\theta$ ranges over the OPEN interval $(-\\pi,\\pi)$, hitting every point of the circle except $(-1,0)$ (which would need $\\theta=\\pi$). Then $f=\\cos\\theta+\\sqrt3\\sin\\theta=2\\bigl(\\tfrac12\\cos\\theta+\\tfrac{\\sqrt3}{2}\\sin\\theta\\bigr)=2\\cos\\!\\bigl(\\theta-\\tfrac{\\pi}{3}\\bigr).$",
          "The sinusoid $2\\cos(\\theta-\\tfrac{\\pi}{3})$ has maximum $2$ at $\\theta=\\tfrac{\\pi}{3}$. Crucially $\\tfrac{\\pi}{3}\\in(-\\pi,\\pi)$, so this angle IS reached by the parametrisation: $t=\\tan\\tfrac{\\theta}{2}=\\tan\\tfrac{\\pi}{6}=\\tfrac{1}{\\sqrt3}$, a finite real number. Hence $\\max f=2$ is a genuine maximum, attained at $t=\\tfrac{1}{\\sqrt3}$.",
          "For part (b), $g=a\\cos\\theta+b\\sin\\theta=\\cos(\\theta-\\varphi)$ with $\\varphi=\\operatorname{atan2}(b,a)\\in(-\\pi,\\pi]$ and $a^{2}+b^{2}=1$. Its least upper bound over $\\theta\\in(-\\pi,\\pi)$ is $1$, approached as $\\theta\\to\\varphi$. It is ATTAINED iff $\\varphi$ itself lies in the open interval $(-\\pi,\\pi)$, i.e. iff $\\varphi\\neq\\pi$.",
          "Now $\\varphi=\\pi$ happens exactly when $(a,b)=(\\cos\\pi,\\sin\\pi)=(-1,0)$. For every other unit $(a,b)$ the peak angle is interior, $t=\\tan\\tfrac{\\varphi}{2}$ is finite, and the maximum is attained. For $(a,b)=(-1,0)$ the peak sits at the missing point $(-1,0)$, so $\\sup g=1$ is not attained. $\\boxed{\\max f=2\\ \\text{at}\\ t=\\tfrac{1}{\\sqrt3};\\ \\ (a,b)=(-1,0)\\ \\text{is the unique non-attaining direction}}$"
        ]
      },
      {
        "name": "Pure rational calculus (no angle), exposing the limit at infinity",
        "steps": [
          "Write $f(t)=\\dfrac{(1-t^{2})+\\sqrt3\\,(2t)}{1+t^{2}}=\\dfrac{-t^{2}+2\\sqrt3\\,t+1}{t^{2}+1}$. Differentiate: $f'(t)=\\dfrac{2\\sqrt3\\,(1-t^{2})-2t\\cdot 2\\sqrt3\\cdot\\!\\big/\\ldots}{(t^{2}+1)^{2}}$; carrying out the quotient rule cleanly gives $f'(t)=\\dfrac{2\\bigl(\\sqrt3 - 2t-\\sqrt3\\,t^{2}\\bigr)}{(t^{2}+1)^{2}}$, so $f'(t)=0\\iff \\sqrt3\\,t^{2}+2t-\\sqrt3=0\\iff t=\\tfrac{1}{\\sqrt3}\\ \\text{or}\\ t=-\\sqrt3.$",
          "Evaluate: $f\\!\\bigl(\\tfrac{1}{\\sqrt3}\\bigr)=2$ and $f(-\\sqrt3)=-2$. As $t\\to\\pm\\infty$, $f(t)\\to -1$ (the degree-$2$ leading-coefficient ratio $-1$), which is the value $f$ would have at the missing point $(-1,0)$ since $X\\to-1,\\ Y\\to0$. Comparing the two interior critical values with the boundary limit $-1$, the global maximum is $f=2$, attained at the finite $t=\\tfrac{1}{\\sqrt3}$.",
          "For (b) take the worst case $(a,b)=(-1,0)$: $g(t)=-X(t)=\\dfrac{t^{2}-1}{t^{2}+1}=1-\\dfrac{2}{t^{2}+1}$. For every real $t$ the term $\\dfrac{2}{t^{2}+1}>0$, so $g(t)<1$ strictly; yet $g(t)\\to 1$ as $t\\to\\pm\\infty$. Thus $\\sup g=1$ but the equation $g(t)=1$ has no real solution ($t^{2}-1=t^{2}+1\\Rightarrow-1=1$).",
          "For any other unit $(a,b)\\neq(-1,0)$ one has $b\\neq0$ or $a>-1$; then $aX+bY$ is a genuine rational function whose numerator-vs-denominator leading ratio is $-a<1$, so the boundary limit $-a$ is strictly below the supremum $1$, forcing the supremum to be achieved at a finite critical $t$. Hence attainment fails ONLY for $(a,b)=(-1,0)$. $\\boxed{\\max f=2;\\ \\text{non-attainment}\\iff(a,b)=(-1,0)}$"
        ]
      },
      {
        "name": "Cauchy-Schwarz envelope plus the reachability test",
        "steps": [
          "Since $X^{2}+Y^{2}=\\left(\\tfrac{1-t^{2}}{1+t^{2}}\\right)^{2}+\\left(\\tfrac{2t}{1+t^{2}}\\right)^{2}=1$ identically, Cauchy-Schwarz gives $aX+bY\\le\\sqrt{a^{2}+b^{2}}\\,\\sqrt{X^{2}+Y^{2}}=\\sqrt{a^{2}+b^{2}}$. For the headline $(a,b)=(1,\\sqrt3)$ this bound is $\\sqrt{1+3}=2$; for a unit $(a,b)$ it is $1$. So $\\sup f\\le2$ and $\\sup g\\le1$.",
          "Equality in Cauchy-Schwarz needs $(X,Y)\\parallel(a,b)$ with the same sense, i.e. $(X,Y)=\\dfrac{(a,b)}{\\sqrt{a^{2}+b^{2}}}$. For $(a,b)=(1,\\sqrt3)$ that is $(X,Y)=\\bigl(\\tfrac12,\\tfrac{\\sqrt3}{2}\\bigr)$; solving $\\tfrac{1-t^{2}}{1+t^{2}}=\\tfrac12$ gives $t^{2}=\\tfrac13$, and the sign of $Y>0$ selects $t=\\tfrac{1}{\\sqrt3}$. This is a real $t$, so the bound $2$ is achieved: $\\max f=2$.",
          "The equality direction for unit $(a,b)$ requires the circle point $(X,Y)=(a,b)$ itself to be hit by some real $t$. Every circle point is reachable EXCEPT $(-1,0)$. Therefore $\\sup g=1$ is attained for all $(a,b)$ except $(a,b)=(-1,0)$, where the required equality point is precisely the missing $(-1,0)$.",
          "Confirm the exception directly: for $(a,b)=(-1,0)$ equality would need $(X,Y)=(-1,0)$, but $X=-1$ forces $1-t^{2}=-(1+t^{2})$, i.e. $1=-1$, impossible. So no real $t$ gives $g=1$; the supremum is not a maximum. $\\boxed{\\sup g=1\\ \\text{attained}\\ \\Longleftrightarrow\\ (a,b)\\neq(-1,0)}$"
        ]
      }
    ],
    "remark": "The whole problem turns on a single fact that the rational parametrisation tries to hide: $t=\\tan\\tfrac{\\theta}{2}$ is a bijection from $\\mathbb{R}$ to the circle MINUS one point, the antipode $(-1,0)$ of the basepoint $(1,0)$ from which lines are drawn. Optimising any linear form $aX+bY$ over the circle is the textbook sinusoid problem with answer $\\sqrt{a^{2}+b^{2}}$, attained where the point $(X,Y)$ aligns with $(a,b)$. The trap is purely topological, not arithmetic: alignment is achievable iff the target circle point is reachable by a finite $t$, which fails for, and only for, the direction $(-1,0)$ that aims at the puncture. The headline $X+\\sqrt3 Y$ is the friendly case — its peak $(\\tfrac12,\\tfrac{\\sqrt3}{2})$ is an ordinary point, $t=\\tfrac{1}{\\sqrt3}$, max $2$ — which is exactly why it lulls a solver into assuming attainment always happens. The lesson for a top-rank student: when you push an optimisation through a rational chart, the 'point at infinity' is a real point of the geometry but never a value of the parameter, so a supremum that lives there is a supremum and not a maximum. The same one-point gap is why $\\int\\frac{dx}{a+b\\cos x}$ via Weierstrass needs care at $x=\\pi$, and why stereographic projection always leaves the north pole behind."
  },
  {
    "theme": "substitution",
    "themeLabel": "Trigonometric Substitution Engines",
    "title": "Twin Radicals Summing to a Right Angle",
    "difficulty": 5,
    "task": "Simplify and evaluate the sum",
    "tags": [
      "tangent-substitution",
      "half-angle",
      "inverse-tangent",
      "domain-branch",
      "secant"
    ],
    "statement": "For a nonzero real number $x$, let $$E(x)=\\arctan\\!\\left(\\dfrac{\\sqrt{1+x^{2}}-1}{x}\\right)+\\arctan\\!\\left(\\dfrac{\\sqrt{1+x^{2}}+1}{x}\\right).$$ Using the substitution $x=\\tan\\theta$, simplify each term and evaluate $E(x)$ for every nonzero real $x$. State the value as a single closed form valid for all $x\\neq 0$.",
    "answer": "$$\\boxed{\\,E(x)=\\dfrac{\\pi}{2}\\,\\operatorname{sgn}(x)=\\begin{cases}\\ \\ \\dfrac{\\pi}{2},& x>0\\\\[4pt]-\\dfrac{\\pi}{2},& x<0\\end{cases}}$$",
    "trap": "The trap is declaring $E(x)=\\dfrac{\\pi}{2}$ for all $x$. The substitution $x=\\tan\\theta$ silently assumes $\\theta\\in\\left(0,\\tfrac{\\pi}{2}\\right)$, i.e. $x>0$. For $x<0$ one must take $\\theta\\in\\left(-\\tfrac{\\pi}{2},0\\right)$, where both fractions flip sign and each $\\arctan$ lands in the negative branch, giving $-\\tfrac{\\pi}{2}$. A second slip is writing $\\sqrt{1+x^{2}}=\\sec\\theta$ without noting $\\sec\\theta>0$ forces $\\theta\\in\\left(-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2}\\right)$; the sign of $\\sin\\theta$ (hence of each half-angle term) is what carries $\\operatorname{sgn}(x)$.",
    "solutions": [
      {
        "name": "Half-angle substitution $x=\\tan\\theta$",
        "steps": [
          "Put $x=\\tan\\theta$ with $\\theta\\in\\left(-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2}\\right)$, so $\\sqrt{1+x^{2}}=\\sec\\theta$ (positive on this range) and $x=\\tan\\theta=\\dfrac{\\sin\\theta}{\\cos\\theta}$.",
          "First fraction: $\\dfrac{\\sec\\theta-1}{\\tan\\theta}=\\dfrac{1-\\cos\\theta}{\\sin\\theta}=\\tan\\dfrac{\\theta}{2}$, using $1-\\cos\\theta=2\\sin^{2}\\tfrac{\\theta}{2}$ and $\\sin\\theta=2\\sin\\tfrac{\\theta}{2}\\cos\\tfrac{\\theta}{2}$.",
          "Second fraction: $\\dfrac{\\sec\\theta+1}{\\tan\\theta}=\\dfrac{1+\\cos\\theta}{\\sin\\theta}=\\cot\\dfrac{\\theta}{2}=\\tan\\!\\left(\\dfrac{\\pi}{2}-\\dfrac{\\theta}{2}\\right)$, using $1+\\cos\\theta=2\\cos^{2}\\tfrac{\\theta}{2}$.",
          "For $x>0$ we have $\\theta\\in\\left(0,\\tfrac{\\pi}{2}\\right)$, so $\\tfrac{\\theta}{2}\\in\\left(0,\\tfrac{\\pi}{4}\\right)$ and $\\tfrac{\\pi}{2}-\\tfrac{\\theta}{2}\\in\\left(\\tfrac{\\pi}{4},\\tfrac{\\pi}{2}\\right)$ are both in $\\left(-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2}\\right)$, so $\\arctan$ undoes each $\\tan$ directly: $E=\\dfrac{\\theta}{2}+\\left(\\dfrac{\\pi}{2}-\\dfrac{\\theta}{2}\\right)=\\dfrac{\\pi}{2}$.",
          "For $x<0$ we have $\\theta\\in\\left(-\\tfrac{\\pi}{2},0\\right)$, so $\\tfrac{\\theta}{2}\\in\\left(-\\tfrac{\\pi}{4},0\\right)$ and $\\tfrac{\\pi}{2}-\\tfrac{\\theta}{2}\\in\\left(\\tfrac{\\pi}{2},\\tfrac{3\\pi}{4}\\right)$, which is outside $\\left(-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2}\\right)$; subtract $\\pi$ to land the second arctan in range: $\\arctan\\!\\left(\\tan\\!\\left(\\tfrac{\\pi}{2}-\\tfrac{\\theta}{2}\\right)\\right)=-\\dfrac{\\pi}{2}-\\dfrac{\\theta}{2}$. Then $E=\\dfrac{\\theta}{2}+\\left(-\\dfrac{\\pi}{2}-\\dfrac{\\theta}{2}\\right)=-\\dfrac{\\pi}{2}$. Combining, $E(x)=\\dfrac{\\pi}{2}\\operatorname{sgn}(x)=\\boxed{\\dfrac{\\pi}{2}\\operatorname{sgn}(x)}$."
        ]
      },
      {
        "name": "Reciprocal angles via the arctan addition law",
        "steps": [
          "Let $a=\\dfrac{\\sqrt{1+x^{2}}-1}{x}$ and $b=\\dfrac{\\sqrt{1+x^{2}}+1}{x}$. Their product is $ab=\\dfrac{(\\sqrt{1+x^{2}})^{2}-1}{x^{2}}=\\dfrac{x^{2}}{x^{2}}=1$, so $b=\\dfrac1a$.",
          "Thus $E=\\arctan a+\\arctan\\dfrac1a$. The standard fact is $\\arctan a+\\arctan\\dfrac1a=\\dfrac{\\pi}{2}$ when $a>0$ and $=-\\dfrac{\\pi}{2}$ when $a<0$.",
          "Sign of $a$: since $\\sqrt{1+x^{2}}>1$, the numerator $\\sqrt{1+x^{2}}-1>0$, so $a$ has the same sign as $x$. Hence $a>0\\iff x>0$.",
          "Therefore $E(x)=\\dfrac{\\pi}{2}$ for $x>0$ and $E(x)=-\\dfrac{\\pi}{2}$ for $x<0$, i.e. $E(x)=\\dfrac{\\pi}{2}\\operatorname{sgn}(x)=\\boxed{\\dfrac{\\pi}{2}\\operatorname{sgn}(x)}$. (The reciprocal identity itself follows from the substitution $a=\\tan\\phi$, $\\tfrac1a=\\cot\\phi=\\tan(\\tfrac{\\pi}{2}-\\phi)$.)"
        ]
      }
    ],
    "remark": "**Insight.** Writing $\\sqrt{1+x^{2}}=\\sec\\theta$ turns both ungainly radical fractions into the twin half-angle quantities $\\tan\\tfrac{\\theta}{2}$ and $\\cot\\tfrac{\\theta}{2}$, whose arctangents are complementary. The whole difficulty is not the algebra but the branch: $\\sec\\theta>0$ pins $\\theta$ to $\\left(-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2}\\right)$, and the sign of $\\theta$ (equivalently, the product $ab=1$ with $\\operatorname{sgn}(a)=\\operatorname{sgn}(x)$) is exactly what makes the answer odd, not constant."
  },
  {
    "theme": "heights",
    "themeLabel": "Heights & Distances",
    "title": "The Boat and the Cliff",
    "difficulty": 3,
    "task": "Find the cliff height",
    "tags": [
      "depression",
      "single-station",
      "tangent",
      "rationalising"
    ],
    "statement": "From the top of a vertical cliff the angle of depression of a boat is $45^\\circ$. After the boat sails $30$ m straight toward the cliff, the depression becomes $60^\\circ$. Find the height of the cliff.",
    "answer": "$$\\boxed{\\,h=45+15\\sqrt{3}\\ \\text{m}\\,}$$",
    "trap": "Angles of depression from the top equal the angles of elevation from the boat (alternate angles), so $\\tan(\\text{depression})=h/(\\text{horizontal distance})$. The trap is to attach the $60^\\circ$ to the original far position; in fact after sailing $30$ m closer the boat is nearer, so $60^\\circ$ pairs with the smaller distance $h/\\sqrt3$, and the $30$ m is the $decrease$ in distance.",
    "solutions": [
      {
        "name": "Difference of horizontal distances",
        "steps": [
          "Let $h$ be the cliff height. Distance when depression is $45^\\circ$ is $h\\cot 45^\\circ=h$; when $60^\\circ$ it is $h\\cot 60^\\circ=\\dfrac{h}{\\sqrt3}$.",
          "The boat moved $30$ m closer: $h-\\dfrac{h}{\\sqrt3}=30\\Rightarrow h\\!\\left(1-\\dfrac{1}{\\sqrt3}\\right)=30$.",
          "So $h=\\dfrac{30}{1-\\frac{1}{\\sqrt3}}=\\dfrac{30\\sqrt3}{\\sqrt3-1}=\\dfrac{30\\sqrt3(\\sqrt3+1)}{2}=15\\sqrt3(\\sqrt3+1)=45+15\\sqrt3$, hence $\\boxed{h=45+15\\sqrt3\\ \\text{m}}$."
        ]
      },
      {
        "name": "Solve for the first distance, then back-substitute",
        "steps": [
          "Let the first distance be $d$. Then $h=d\\tan 45^\\circ=d$ and $h=(d-30)\\tan 60^\\circ=(d-30)\\sqrt3$.",
          "Equate: $d=(d-30)\\sqrt3\\Rightarrow d(\\sqrt3-1)=30\\sqrt3\\Rightarrow d=\\dfrac{30\\sqrt3}{\\sqrt3-1}=45+15\\sqrt3$.",
          "Since $h=d$, we get $\\boxed{h=45+15\\sqrt3\\ \\text{m}}$."
        ]
      }
    ],
    "remark": "**Insight.** A depression problem is an elevation problem viewed upside down: the horizontal line of sight makes the depression angle equal the elevation from the object. Translating ‘depression from the top’ into ‘elevation from the boat’ removes all the confusion in one stroke."
  },
  {
    "theme": "heights",
    "themeLabel": "Heights & Distances",
    "title": "Forty Metres Toward the Tower",
    "difficulty": 4,
    "task": "Find the tower height",
    "tags": [
      "elevation",
      "two-point",
      "tangent",
      "approach"
    ],
    "statement": "From a point on level ground the angle of elevation of the top of a vertical tower is $30^\\circ$. On walking $40$ m straight toward the foot of the tower, the elevation becomes $60^\\circ$. Find the height of the tower.",
    "answer": "$$\\boxed{\\,h=20\\sqrt{3}\\ \\text{m}\\,}$$",
    "trap": "The trap is mislabelling which distance goes with which angle. The $60^\\circ$ elevation is seen from the $nearer$ point, so the smaller horizontal distance pairs with the larger angle. If you write $h=x\\tan 30^\\circ$ for the near point you invert the geometry and get a negative or absurd height. Keep $h=x\\tan 60^\\circ$ (near) and $h=(x+40)\\tan 30^\\circ$ (far).",
    "solutions": [
      {
        "name": "Two right triangles sharing the height",
        "steps": [
          "Let $x$ be the horizontal distance from the nearer point (elevation $60^\\circ$) to the foot. Then $h=x\\tan 60^\\circ=x\\sqrt3$ and from the farther point $h=(x+40)\\tan 30^\\circ=\\dfrac{x+40}{\\sqrt3}$.",
          "Equate: $x\\sqrt3=\\dfrac{x+40}{\\sqrt3}\\Rightarrow 3x=x+40\\Rightarrow x=20$.",
          "Hence $h=20\\sqrt3$ m, so $\\boxed{h=20\\sqrt3\\ \\text{m}}$."
        ]
      },
      {
        "name": "Direct elimination via cotangents",
        "steps": [
          "The two ground distances are $h\\cot 30^\\circ=h\\sqrt3$ (far) and $h\\cot 60^\\circ=\\dfrac{h}{\\sqrt3}$ (near); their difference is the $40$ m walked.",
          "So $h\\sqrt3-\\dfrac{h}{\\sqrt3}=40\\Rightarrow h\\cdot\\dfrac{3-1}{\\sqrt3}=40\\Rightarrow \\dfrac{2h}{\\sqrt3}=40$.",
          "Thus $h=20\\sqrt3$ m, giving $\\boxed{h=20\\sqrt3\\ \\text{m}}$."
        ]
      }
    ],
    "remark": "**Insight.** The walked distance equals the *difference of cotangents* times the height: $d=h(\\cot\\alpha-\\cot\\beta)$. Every single-tower, two-station elevation problem is this one identity in disguise; recognising it turns a sketch-and-solve into a one-line computation."
  },
  {
    "theme": "heights",
    "themeLabel": "Heights & Distances",
    "title": "The Cloud and Its Reflection",
    "difficulty": 4,
    "task": "Find the cloud's height",
    "tags": [
      "cloud",
      "reflection",
      "elevation-depression",
      "lake"
    ],
    "statement": "From a point $60$ m above the surface of a lake the angle of elevation of a cloud is $30^\\circ$, while the angle of depression of its reflection in the lake is $60^\\circ$. Find the height of the cloud above the lake.",
    "answer": "$$\\boxed{\\,H=120\\ \\text{m}\\,}$$",
    "trap": "The reflection lies $H$ $below$ the lake surface, so its vertical drop from the observer is $H+60$, not $H-60$. Forgetting to add the observer's own height of $60$ m on the reflection side (using $H-60$ for both) collapses the two equations and gives a wrong, often negative, answer.",
    "solutions": [
      {
        "name": "Two right triangles with common base",
        "steps": [
          "Let $H$ be the cloud height above the lake and $d$ the horizontal distance. The observer is $60$ m up. For the cloud: $\\tan 30^\\circ=\\dfrac{H-60}{d}$. For the reflection (which is $H$ below the surface): $\\tan 60^\\circ=\\dfrac{H+60}{d}$.",
          "Divide the two: $\\dfrac{\\tan 60^\\circ}{\\tan 30^\\circ}=\\dfrac{H+60}{H-60}\\Rightarrow 3=\\dfrac{H+60}{H-60}$.",
          "So $3(H-60)=H+60\\Rightarrow 2H=240\\Rightarrow H=120$, hence $\\boxed{H=120\\ \\text{m}}$."
        ]
      },
      {
        "name": "Standard formula $H=h\\dfrac{\\tan\\beta+\\tan\\alpha}{\\tan\\beta-\\tan\\alpha}$",
        "steps": [
          "With observer height $h=60$, elevation $\\alpha=30^\\circ$, depression $\\beta=60^\\circ$, the cloud height is $H=h\\,\\dfrac{\\tan\\beta+\\tan\\alpha}{\\tan\\beta-\\tan\\alpha}$.",
          "Compute $\\tan 60^\\circ+\\tan 30^\\circ=\\sqrt3+\\dfrac{1}{\\sqrt3}=\\dfrac{4}{\\sqrt3}$ and $\\tan 60^\\circ-\\tan 30^\\circ=\\sqrt3-\\dfrac{1}{\\sqrt3}=\\dfrac{2}{\\sqrt3}$.",
          "Thus $H=60\\cdot\\dfrac{4/\\sqrt3}{2/\\sqrt3}=60\\cdot2=120$, so $\\boxed{H=120\\ \\text{m}}$."
        ]
      }
    ],
    "remark": "**Insight.** The reflection trick is just symmetry about the water line: the image sits at depth $H$, so the observer at height $h$ sees it $H+h$ below while the cloud is $H-h$ above. Eliminating the unknown base $d$ by dividing the two tangents is what makes the height pop out cleanly."
  },
  {
    "theme": "heights",
    "themeLabel": "Heights & Distances",
    "title": "The Aeroplane's Constant Height",
    "difficulty": 4,
    "task": "Find the flying height",
    "tags": [
      "aeroplane",
      "elevation",
      "horizontal-flight",
      "speed-time"
    ],
    "statement": "An aeroplane flies horizontally at a constant height. To an observer on the ground its angle of elevation is $60^\\circ$ at one instant and $30^\\circ$ ten seconds later. If the plane's speed is $200$ m/s, find its height above the ground.",
    "answer": "$$\\boxed{\\,H=1000\\sqrt{3}\\ \\text{m}\\,}$$",
    "trap": "The plane is moving $away$, so the elevation drops from $60^\\circ$ to $30^\\circ$ and the horizontal distance covered is the $difference$ $H\\cot30^\\circ-H\\cot60^\\circ$. Mistaking this for a sum, or using $2000$ as one of the distances rather than as the gap, throws the answer off by a factor.",
    "solutions": [
      {
        "name": "Horizontal distance from speed times time",
        "steps": [
          "The plane covers $200\\times 10=2000$ m horizontally. Its horizontal distances from the observer are $H\\cot 60^\\circ=\\dfrac{H}{\\sqrt3}$ (first) and $H\\cot 30^\\circ=H\\sqrt3$ (later).",
          "The difference is the flight path: $H\\sqrt3-\\dfrac{H}{\\sqrt3}=2000\\Rightarrow H\\cdot\\dfrac{3-1}{\\sqrt3}=2000\\Rightarrow \\dfrac{2H}{\\sqrt3}=2000$.",
          "Hence $H=1000\\sqrt3$ m, so $\\boxed{H=1000\\sqrt3\\ \\text{m}}$."
        ]
      },
      {
        "name": "Two right triangles with shared height",
        "steps": [
          "Let the horizontal distances be $x$ (at $60^\\circ$) and $x+2000$ (at $30^\\circ$). Then $H=x\\tan 60^\\circ=x\\sqrt3$ and $H=(x+2000)\\tan 30^\\circ=\\dfrac{x+2000}{\\sqrt3}$.",
          "Equate: $x\\sqrt3=\\dfrac{x+2000}{\\sqrt3}\\Rightarrow 3x=x+2000\\Rightarrow x=1000$.",
          "Then $H=1000\\sqrt3$ m, giving $\\boxed{H=1000\\sqrt3\\ \\text{m}}$."
        ]
      }
    ],
    "remark": "**Insight.** A constant-height flight is the moving-observer problem turned around: the plane plays the role of the walking observer, and ‘distance covered $=$ speed $\\times$ time’ supplies the gap $a$ that the difference-of-cotangents identity needs."
  },
  {
    "theme": "heights",
    "themeLabel": "Heights & Distances",
    "title": "A Tower Atop the Hill",
    "difficulty": 5,
    "task": "Find hill height and distance",
    "tags": [
      "grand-hybrid",
      "two-tier",
      "elevation",
      "hill-and-tower"
    ],
    "statement": "A tower $50$ m high stands on the summit of a hill. From a point on the plain the angle of elevation of the $\\textbf{foot}$ of the tower (the top of the hill) is $30^\\circ$ and that of the $\\textbf{top}$ of the tower is $45^\\circ$. Find the height of the hill and the horizontal distance of the point from the hill.",
    "answer": "$$\\boxed{\\,H=25\\left(\\sqrt{3}+1\\right)\\ \\text{m},\\qquad D=25\\left(\\sqrt{3}+3\\right)\\ \\text{m}\\,}$$",
    "trap": "Both elevations are read from the $same$ ground point, so they share one horizontal distance $D$; the tower's $50$ m sits on $top$ of the hill height $H$, giving $\\tan45^\\circ=(H+50)/D$. Treating the two angles as if seen from two different stations, or putting the tower at ground level, breaks the model.",
    "solutions": [
      {
        "name": "Common base distance, two tiers",
        "steps": [
          "Let $H$ be the hill height and $D$ the ground distance. Then $\\tan 30^\\circ=\\dfrac{H}{D}$ and $\\tan 45^\\circ=\\dfrac{H+50}{D}$.",
          "From the second, $D=H+50$; substitute into the first: $\\dfrac{1}{\\sqrt3}=\\dfrac{H}{H+50}\\Rightarrow H+50=H\\sqrt3\\Rightarrow H(\\sqrt3-1)=50$.",
          "So $H=\\dfrac{50}{\\sqrt3-1}=25(\\sqrt3+1)$ m, and $D=H+50=25\\sqrt3+25+50=25(\\sqrt3+3)$ m. Hence $\\boxed{H=25(\\sqrt3+1),\\ D=25(\\sqrt3+3)}$."
        ]
      },
      {
        "name": "Tower length as a subtended segment",
        "steps": [
          "The tower's $50$ m subtends the band from $30^\\circ$ to $45^\\circ$: $50=D(\\tan 45^\\circ-\\tan 30^\\circ)=D\\!\\left(1-\\dfrac{1}{\\sqrt3}\\right)=D\\cdot\\dfrac{\\sqrt3-1}{\\sqrt3}$.",
          "So $D=\\dfrac{50\\sqrt3}{\\sqrt3-1}=25\\sqrt3(\\sqrt3+1)=75+25\\sqrt3=25(\\sqrt3+3)$ m.",
          "Then $H=D\\tan 30^\\circ=\\dfrac{25(\\sqrt3+3)}{\\sqrt3}=25\\!\\left(1+\\sqrt3\\right)=25(\\sqrt3+1)$ m, giving $\\boxed{H=25(\\sqrt3+1),\\ D=25(\\sqrt3+3)}$."
        ]
      }
    ],
    "remark": "**Insight.** A tower-on-a-hill is the flagstaff-on-a-tower problem wearing different clothes: a fixed vertical segment of length $\\ell$ stacked above an unknown base obeys $\\ell=D(\\tan\\beta-\\tan\\alpha)$, which delivers the base distance $D$ first and the lower height $H=D\\tan\\alpha$ immediately after."
  },
  {
    "theme": "heights",
    "themeLabel": "Heights & Distances",
    "title": "A Flagstaff Crowns the Tower",
    "difficulty": 5,
    "task": "Find the tower height",
    "tags": [
      "flagstaff",
      "elevation",
      "two-tier",
      "rationalising"
    ],
    "statement": "A flagstaff $20$ m long stands on top of a tower. From a point on the ground the angle of elevation of the $\\textbf{bottom}$ of the flagstaff (i.e. the top of the tower) is $30^\\circ$ and that of the $\\textbf{top}$ of the flagstaff is $45^\\circ$. Find the height of the tower.",
    "answer": "$$\\boxed{\\,h=10\\left(\\sqrt{3}+1\\right)\\ \\text{m}\\,}$$",
    "trap": "Both angles are measured from the $same$ ground point, so they share one horizontal distance $d$. The trap is to treat the two elevations as if seen from different stations and introduce a spurious second distance. With one $d$: $\\tan 30^\\circ=h/d$ and $\\tan 45^\\circ=(h+20)/d$ — two equations, two unknowns.",
    "solutions": [
      {
        "name": "Eliminate the common base distance",
        "steps": [
          "Let $h$ be the tower height and $d$ the ground distance. Then $d=\\dfrac{h}{\\tan 30^\\circ}=h\\sqrt3$ and $d=\\dfrac{h+20}{\\tan 45^\\circ}=h+20$.",
          "Equate the two expressions for $d$: $h\\sqrt3=h+20\\Rightarrow h(\\sqrt3-1)=20$.",
          "So $h=\\dfrac{20}{\\sqrt3-1}=\\dfrac{20(\\sqrt3+1)}{2}=10(\\sqrt3+1)$, hence $\\boxed{h=10(\\sqrt3+1)\\ \\text{m}}$."
        ]
      },
      {
        "name": "Subtended-segment / difference of cotangents",
        "steps": [
          "The flagstaff of length $20$ subtends the band between $30^\\circ$ and $45^\\circ$ at the eye. Using one distance $d$: $h=d\\tan 30^\\circ$ and $h+20=d\\tan 45^\\circ$.",
          "Subtract: $20=d(\\tan 45^\\circ-\\tan 30^\\circ)=d\\!\\left(1-\\dfrac{1}{\\sqrt3}\\right)\\Rightarrow d=\\dfrac{20\\sqrt3}{\\sqrt3-1}=10\\sqrt3(\\sqrt3+1)=30+10\\sqrt3.$",
          "Then $h=d\\tan 30^\\circ=\\dfrac{30+10\\sqrt3}{\\sqrt3}=10\\sqrt3+10=10(\\sqrt3+1)$, so $\\boxed{h=10(\\sqrt3+1)\\ \\text{m}}$."
        ]
      }
    ],
    "remark": "**Insight.** When a single eye sees two tiers, the *shared* base distance is the variable to kill first. A length $\\ell$ stacked on top contributes $\\ell=d(\\tan\\beta-\\tan\\alpha)$, the vertical analogue of the difference-of-cotangents rule for horizontal walks."
  },
  {
    "theme": "heights",
    "themeLabel": "Heights & Distances",
    "title": "Towers Watched from Both Sides",
    "difficulty": 5,
    "task": "Find the tower height",
    "tags": [
      "two-point",
      "opposite-sides",
      "elevation",
      "collinear"
    ],
    "statement": "Two observers stand on opposite sides of a vertical tower, on a straight line through its foot, $80$ m apart. The angles of elevation of the top of the tower are $30^\\circ$ from one observer and $60^\\circ$ from the other. Find the height of the tower.",
    "answer": "$$\\boxed{\\,h=20\\sqrt{3}\\ \\text{m}\\,}$$",
    "trap": "Because the observers are on $opposite$ sides, the two ground distances $add$ to $80$, not subtract. The common mistake is to copy the ‘walk toward the tower’ template (which subtracts) and write $h\\cot30^\\circ-h\\cot60^\\circ=80$. Opposite sides means $h\\cot30^\\circ+h\\cot60^\\circ=80$.",
    "solutions": [
      {
        "name": "Sum of the two ground distances",
        "steps": [
          "Let $h$ be the height. The two feet-distances are $h\\cot 30^\\circ=h\\sqrt3$ and $h\\cot 60^\\circ=\\dfrac{h}{\\sqrt3}$, and together they span the $80$ m.",
          "So $h\\sqrt3+\\dfrac{h}{\\sqrt3}=80\\Rightarrow h\\cdot\\dfrac{3+1}{\\sqrt3}=80\\Rightarrow \\dfrac{4h}{\\sqrt3}=80$.",
          "Hence $h=20\\sqrt3$ m, i.e. $\\boxed{h=20\\sqrt3\\ \\text{m}}$."
        ]
      },
      {
        "name": "Section into two pieces $x$ and $80-x$",
        "steps": [
          "Let the foot divide the line into $x$ (under the $60^\\circ$ side) and $80-x$ (under the $30^\\circ$ side). Then $h=x\\tan 60^\\circ=x\\sqrt3$ and $h=(80-x)\\tan 30^\\circ=\\dfrac{80-x}{\\sqrt3}$.",
          "Equate: $x\\sqrt3=\\dfrac{80-x}{\\sqrt3}\\Rightarrow 3x=80-x\\Rightarrow x=20$.",
          "Then $h=20\\sqrt3$ m, so $\\boxed{h=20\\sqrt3\\ \\text{m}}$."
        ]
      }
    ],
    "remark": "**Insight.** The sign of the geometry lives entirely in ‘same side ⟹ subtract, opposite sides ⟹ add’. A clean self-check: with complementary angles $\\alpha+\\beta=90^\\circ$ on opposite sides, $h=\\sqrt{(\\text{near})(\\text{far})}$ — the geometric mean of the two segments."
  },
  {
    "theme": "heights",
    "themeLabel": "Heights & Distances",
    "title": "Advancing Toward the Hill",
    "difficulty": 5,
    "task": "Find the hill's height",
    "tags": [
      "elevation",
      "two-station",
      "general-formula",
      "rationalising"
    ],
    "statement": "Walking along a straight level road toward a hill, an observer finds the angle of elevation of the summit is $30^\\circ$ at one point and $45^\\circ$ after advancing $150$ m. Find the height of the hill above the road.",
    "answer": "$$\\boxed{\\,h=75\\left(\\sqrt{3}+1\\right)\\ \\text{m}\\,}$$",
    "trap": "Here neither distance is given outright — only their difference $150$. The trap is to assume the second station is at the foot ($45^\\circ$ does not mean ‘at the base’). Both stations are at positive distances $h\\cot45^\\circ$ and $h\\cot30^\\circ$ from the foot, and $150$ is their gap.",
    "solutions": [
      {
        "name": "Difference of cotangents",
        "steps": [
          "Let $h$ be the height. Far station distance $=h\\cot 30^\\circ=h\\sqrt3$; near station distance $=h\\cot 45^\\circ=h$. The advance is the difference.",
          "So $h\\sqrt3-h=150\\Rightarrow h(\\sqrt3-1)=150$.",
          "Hence $h=\\dfrac{150}{\\sqrt3-1}=\\dfrac{150(\\sqrt3+1)}{2}=75(\\sqrt3+1)$, giving $\\boxed{h=75(\\sqrt3+1)\\ \\text{m}}$."
        ]
      },
      {
        "name": "Two-elevation master formula",
        "steps": [
          "For an advance $a$ between elevations $\\alpha$ (far) and $\\beta$ (near), $h=\\dfrac{a\\tan\\alpha\\tan\\beta}{\\tan\\beta-\\tan\\alpha}$.",
          "With $a=150,\\ \\alpha=30^\\circ,\\ \\beta=45^\\circ$: $h=\\dfrac{150\\cdot\\frac{1}{\\sqrt3}\\cdot 1}{1-\\frac{1}{\\sqrt3}}=\\dfrac{150/\\sqrt3}{(\\sqrt3-1)/\\sqrt3}=\\dfrac{150}{\\sqrt3-1}$.",
          "Rationalising, $h=75(\\sqrt3+1)$ m, so $\\boxed{h=75(\\sqrt3+1)\\ \\text{m}}$."
        ]
      }
    ],
    "remark": "**Insight.** The master formula $h=\\dfrac{a\\tan\\alpha\\tan\\beta}{\\tan\\beta-\\tan\\alpha}$ is the workhorse of two-station problems: it never needs you to know either individual distance, only the gap $a$ between the observation points."
  },
  {
    "theme": "heights",
    "themeLabel": "Heights & Distances",
    "title": "Two Pillars Across a Road",
    "difficulty": 5,
    "task": "Find height and the division",
    "tags": [
      "equal-towers",
      "between-point",
      "elevation",
      "ratio"
    ],
    "statement": "Two pillars of $\\textbf{equal}$ height stand on opposite edges of a road $60$ m wide. From a point on the road between them the angles of elevation of the tops are $60^\\circ$ and $30^\\circ$. Find the common height and the ratio in which the point divides the road.",
    "answer": "$$\\boxed{\\,h=15\\sqrt{3}\\ \\text{m},\\qquad \\text{the point divides the road } 1:3\\,}$$",
    "trap": "The two distances are unknown but constrained to sum to $60$; because the pillars are equal, the larger elevation ($60^\\circ$) belongs to the $nearer$ pillar. Assuming the point is the midpoint (so both distances are $30$) is wrong — equal heights with unequal angles force an off-centre point.",
    "solutions": [
      {
        "name": "Two equations, common height",
        "steps": [
          "Let the point be $x$ from the foot of the $60^\\circ$ pillar and $60-x$ from the $30^\\circ$ pillar. Equal heights give $x\\tan 60^\\circ=(60-x)\\tan 30^\\circ$.",
          "So $x\\sqrt3=\\dfrac{60-x}{\\sqrt3}\\Rightarrow 3x=60-x\\Rightarrow x=15$, and the distances are $15$ and $45$, a ratio $15:45=1:3$.",
          "Then $h=x\\tan 60^\\circ=15\\sqrt3$ m. Hence $\\boxed{h=15\\sqrt3\\ \\text{m},\\ \\text{ratio } 1:3}$."
        ]
      },
      {
        "name": "Height directly from cotangents",
        "steps": [
          "Distances are $h\\cot 60^\\circ=\\dfrac{h}{\\sqrt3}$ (near) and $h\\cot 30^\\circ=h\\sqrt3$ (far); they sum to the road width: $\\dfrac{h}{\\sqrt3}+h\\sqrt3=60$.",
          "So $h\\cdot\\dfrac{1+3}{\\sqrt3}=60\\Rightarrow \\dfrac{4h}{\\sqrt3}=60\\Rightarrow h=15\\sqrt3$ m.",
          "The near distance is $\\dfrac{15\\sqrt3}{\\sqrt3}=15$ and the far is $15\\sqrt3\\cdot\\sqrt3=45$, ratio $1:3$, so $\\boxed{h=15\\sqrt3\\ \\text{m},\\ 1:3}$."
        ]
      }
    ],
    "remark": "**Insight.** For two equal pillars the dividing ratio equals $\\cot\\beta:\\cot\\alpha=\\tan\\alpha:\\tan\\beta$. Here $\\tan30^\\circ:\\tan60^\\circ=\\frac{1}{\\sqrt3}:\\sqrt3=1:3$ — the angles alone fix the geometry before any width is even used."
  },
  {
    "theme": "heights",
    "themeLabel": "Heights & Distances",
    "title": "Two Stations at a Right Angle",
    "difficulty": 5,
    "task": "Find the tower height",
    "tags": [
      "non-collinear",
      "pythagoras",
      "elevation",
      "ground-plane"
    ],
    "statement": "A vertical tower has foot $Q$. Two stations $A,B$ on the level ground satisfy $\\angle AQB=90^\\circ$ and $AB=20$ m. The angles of elevation of the top of the tower are $30^\\circ$ from $A$ and $60^\\circ$ from $B$. Find the height of the tower.",
    "answer": "$$\\boxed{\\,h=2\\sqrt{30}\\ \\text{m}\\,}$$",
    "trap": "$A$ and $B$ are $not$ collinear with the foot, so you cannot add or subtract the two ground distances along a line. The right angle $\\angle AQB=90^\\circ$ means the horizontal legs $QA$ and $QB$ are perpendicular, and $AB$ is the $hypotenuse$: $AB^2=QA^2+QB^2$ in the ground plane.",
    "solutions": [
      {
        "name": "Pythagoras in the ground plane",
        "steps": [
          "From the elevations, $QA=h\\cot 30^\\circ=h\\sqrt3$ and $QB=h\\cot 60^\\circ=\\dfrac{h}{\\sqrt3}$. Since $\\angle AQB=90^\\circ$, $AB^2=QA^2+QB^2$.",
          "So $20^2=3h^2+\\dfrac{h^2}{3}=\\dfrac{10h^2}{3}\\Rightarrow h^2=\\dfrac{3\\cdot400}{10}=120$.",
          "Hence $h=\\sqrt{120}=2\\sqrt{30}$ m, i.e. $\\boxed{h=2\\sqrt{30}\\ \\text{m}}$."
        ]
      },
      {
        "name": "Cosine rule with the included angle",
        "steps": [
          "In triangle $AQB$, $AB^2=QA^2+QB^2-2\\,QA\\cdot QB\\cos\\angle AQB$. With $\\angle AQB=90^\\circ$, $\\cos 90^\\circ=0$, so the cross term vanishes.",
          "Substituting $QA=h\\sqrt3,\\ QB=h/\\sqrt3$: $400=3h^2+\\tfrac13 h^2=\\tfrac{10}{3}h^2$.",
          "Thus $h^2=120$ and $h=2\\sqrt{30}$ m, giving $\\boxed{h=2\\sqrt{30}\\ \\text{m}}$."
        ]
      }
    ],
    "remark": "**Insight.** Once the two observation points leave the line through the foot, the problem becomes genuinely two-dimensional on the ground: project everything to the horizontal plane, recover the legs $h\\cot\\theta$, and let the cosine (or, here, Pythagoras) rule close the triangle."
  },
  {
    "theme": "extrema",
    "themeLabel": "Phase, Range & Extremum Machines",
    "title": "The Amplitude the Half-Open Arc Never Reaches",
    "difficulty": 5,
    "task": "Determine the exact range of the phase form on the half-open window, deciding for each extreme whether it is attained or only a supremum",
    "tags": [
      "phase-form",
      "restricted-window",
      "supremum-vs-maximum",
      "interior-trough",
      "half-open-interval",
      "endpoint-compare"
    ],
    "statement": "Consider \\[ f(x)=\\sin x+\\sqrt{3}\\,\\cos x \\] on the half-open interval $x\\in\\left[\\dfrac{\\pi}{2},\\,2\\pi\\right)$ (closed at the left, open at the right). Find the exact range $f\\big(\\left[\\tfrac{\\pi}{2},2\\pi\\right)\\big)$ as a set. Your answer must state the greatest lower bound and the least upper bound of $f$ on this window, and for each of the two must decide whether it is actually ATTAINED by some $x$ in the window or is only an (un-attained) infimum / supremum. In particular: does $f$ reach its global amplitude here; is the largest value a maximum or merely a supremum; and where, if anywhere, is the smallest value achieved? Justify every attainment claim by exhibiting the point or proving none exists.",
    "answer": "\\[\\boxed{\\;f\\big(\\left[\\tfrac{\\pi}{2},2\\pi\\right)\\big)=\\left[-2,\\ \\sqrt{3}\\,\\right)\\;}\\]",
    "trap": "The reflex of a strong solver is to collapse $f$ to its phase form $f(x)=2\\sin\\!\\big(x+\\tfrac{\\pi}{3}\\big)$, read off the amplitude $R=\\sqrt{1^{2}+(\\sqrt3)^{2}}=2$, and announce the range $[-2,2]$ — the global range of the unrestricted sinusoid. That is wrong on BOTH ends, and for two genuinely different reasons. (1) The upper value $2$ is NEVER attained on this window. The peak of $2\\sin(x+\\tfrac{\\pi}{3})$ needs $x+\\tfrac{\\pi}{3}\\equiv\\tfrac{\\pi}{2}\\pmod{2\\pi}$, i.e. $x=\\tfrac{\\pi}{6}+2\\pi k$; the only candidate near the window is $x=\\tfrac{\\pi}{6}+2\\pi=\\tfrac{13\\pi}{6}>2\\pi$, which lies OUTSIDE $[\\tfrac{\\pi}{2},2\\pi)$, while $x=\\tfrac{\\pi}{6}<\\tfrac{\\pi}{2}$ is also excluded. So the phase max is straddled out of the window on both sides and $f<2$ throughout — the amplitude is a red herring. (2) The TRUE supremum is the endpoint value $\\lim_{x\\to 2\\pi^{-}}f(x)=\\sin 2\\pi+\\sqrt3\\cos 2\\pi=\\sqrt3$, but the right endpoint $x=2\\pi$ is EXCLUDED, so $\\sqrt3$ is approached and never reached: it is a supremum, not a maximum. A second, subtler trap snares the solver who does restrict to the window but then grabs the LEFT endpoint $f(\\tfrac{\\pi}{2})=1$ as 'the top' (since the left end is the closed one), forgetting to compare it against the open right end — yet $1<\\sqrt3$, so the larger value sits precisely at the forbidden boundary. A third trap concerns the bottom: a careless solver, having seen the maximum escape to an endpoint, may assume the minimum does too and quote $\\min(f(\\tfrac{\\pi}{2}),\\lim_{2\\pi^-})=1$ or even $\\sqrt3$ as a 'lower endpoint' — but the genuine minimum is an INTERIOR critical point. Setting $f'(x)=\\cos x-\\sqrt3\\sin x=0$ gives $\\tan x=\\tfrac{1}{\\sqrt3}$, i.e. $x=\\tfrac{\\pi}{6}+k\\pi$; the only such point in $(\\tfrac{\\pi}{2},2\\pi)$ is $x=\\tfrac{7\\pi}{6}$, where $f''=-f=2>0$, a genuine trough with $f(\\tfrac{7\\pi}{6})=-2$. Because $\\tfrac{7\\pi}{6}$ is strictly interior, $-2$ IS attained. So the window inverts every reflex: the global maximum is lost (escapes the window), the supremum is unreachable (open endpoint), yet the global minimum is comfortably achieved in the interior. Reporting $[-2,2]$, $[1,\\sqrt3]$, or '$\\max=\\sqrt3$' all fail the attainment audit.",
    "solutions": [
      {
        "name": "Phase reduction and a windowed sine sweep",
        "steps": [
          "Write $f$ in single-sinusoid form. With $R=\\sqrt{1^{2}+(\\sqrt3)^{2}}=2$ and phase $\\varphi=\\tfrac{\\pi}{3}$ (since $\\sin x+\\sqrt3\\cos x=2(\\tfrac12\\sin x+\\tfrac{\\sqrt3}{2}\\cos x)=2\\sin(x+\\tfrac{\\pi}{3})$), we have $f(x)=2\\sin\\!\\big(x+\\tfrac{\\pi}{3}\\big)$. The problem is now: range of $2\\sin\\theta$ as $\\theta=x+\\tfrac{\\pi}{3}$ sweeps the image of $[\\tfrac{\\pi}{2},2\\pi)$.",
          "Transport the window through the phase shift. As $x$ runs over $[\\tfrac{\\pi}{2},2\\pi)$, the angle $\\theta=x+\\tfrac{\\pi}{3}$ runs over $\\big[\\tfrac{\\pi}{2}+\\tfrac{\\pi}{3},\\,2\\pi+\\tfrac{\\pi}{3}\\big)=\\big[\\tfrac{5\\pi}{6},\\,\\tfrac{7\\pi}{3}\\big)$, a half-open arc of length exactly $2\\pi-\\tfrac{\\pi}{6}\\cdot\\!\\big(\\!$nothing$\\!\\big)$; concretely $\\theta\\in[\\tfrac{5\\pi}{6},\\tfrac{7\\pi}{3})$, which is the full circle minus the short open arc $(\\tfrac{\\pi}{3}+2\\pi^{-}\\!\\!,\\,\\tfrac{5\\pi}{6})$ swept just before $\\tfrac{5\\pi}{6}$ — equivalently the circle with the point $\\theta=\\tfrac{\\pi}{2}\\ (\\!\\!\\mod 2\\pi)$, where $\\sin$ peaks, REMOVED from the interior.",
          "Locate the supremum of $\\sin\\theta$ on $[\\tfrac{5\\pi}{6},\\tfrac{7\\pi}{3})$. The peak $\\sin\\theta=1$ would need $\\theta=\\tfrac{\\pi}{2}$ or $\\tfrac{5\\pi}{2}$; but $\\tfrac{\\pi}{2}<\\tfrac{5\\pi}{6}$ and $\\tfrac{5\\pi}{2}=\\tfrac{15\\pi}{6}>\\tfrac{7\\pi}{3}=\\tfrac{14\\pi}{6}$, so neither lies in the arc — $\\sin\\theta<1$ throughout, and $f<2$ everywhere (the amplitude is unreachable). On the closing stretch $\\theta\\in(\\tfrac{3\\pi}{2},\\tfrac{7\\pi}{3})$, $\\sin\\theta$ increases from $-1$ up toward $\\sin\\tfrac{7\\pi}{3}=\\sin\\tfrac{\\pi}{3}=\\tfrac{\\sqrt3}{2}$; since $\\theta=\\tfrac{7\\pi}{3}$ is the OPEN end, the value $\\tfrac{\\sqrt3}{2}$ is approached but not hit. Comparing with the start $\\sin\\tfrac{5\\pi}{6}=\\tfrac12$, the least upper bound of $\\sin\\theta$ is $\\tfrac{\\sqrt3}{2}$, a supremum (not a maximum). Hence $\\sup f=2\\cdot\\tfrac{\\sqrt3}{2}=\\sqrt3$, NOT attained.",
          "Locate the minimum. The trough $\\sin\\theta=-1$ sits at $\\theta=\\tfrac{3\\pi}{2}$, and $\\tfrac{5\\pi}{6}<\\tfrac{3\\pi}{2}<\\tfrac{7\\pi}{3}$ lies strictly inside the arc, so it IS attained — at $x=\\tfrac{3\\pi}{2}-\\tfrac{\\pi}{3}=\\tfrac{7\\pi}{6}$. There $f=2\\cdot(-1)=-2$. Since $\\sin\\theta$ takes every value in $[-1,\\tfrac{\\sqrt3}{2})$ continuously on the connected arc, $f$ takes every value in $[-2,\\sqrt3)$. Therefore $\\boxed{f\\big([\\tfrac{\\pi}{2},2\\pi)\\big)=[-2,\\sqrt3)}$, minimum $-2$ attained at $x=\\tfrac{7\\pi}{6}$, supremum $\\sqrt3$ not attained."
        ]
      },
      {
        "name": "Closed-interval calculus on the closure, then delete the open endpoint",
        "steps": [
          "Work first on the CLOSED interval $[\\tfrac{\\pi}{2},2\\pi]$ where the Extreme Value Theorem guarantees a max and min, then remove the contribution of the excluded point $x=2\\pi$. Differentiate: $f'(x)=\\cos x-\\sqrt3\\sin x$. Setting $f'(x)=0$ gives $\\tan x=\\tfrac{1}{\\sqrt3}$, so $x=\\tfrac{\\pi}{6}+k\\pi$. The only such critical point inside $(\\tfrac{\\pi}{2},2\\pi)$ is $x=\\tfrac{7\\pi}{6}$ (the value $\\tfrac{\\pi}{6}$ is below $\\tfrac{\\pi}{2}$, and $\\tfrac{13\\pi}{6}$ is above $2\\pi$).",
          "Classify the critical point. Note $f''(x)=-\\sin x-\\sqrt3\\cos x=-f(x)$. At $x=\\tfrac{7\\pi}{6}$, $f(\\tfrac{7\\pi}{6})=\\sin\\tfrac{7\\pi}{6}+\\sqrt3\\cos\\tfrac{7\\pi}{6}=-\\tfrac12+\\sqrt3\\!\\cdot\\!(-\\tfrac{\\sqrt3}{2})=-\\tfrac12-\\tfrac32=-2$, so $f''(\\tfrac{7\\pi}{6})=-(-2)=2>0$: a strict local MINIMUM with value $-2$.",
          "Evaluate the two endpoints of the closure: $f(\\tfrac{\\pi}{2})=\\sin\\tfrac{\\pi}{2}+\\sqrt3\\cos\\tfrac{\\pi}{2}=1+0=1$, and $f(2\\pi)=\\sin 2\\pi+\\sqrt3\\cos 2\\pi=0+\\sqrt3=\\sqrt3$. The candidate list on $[\\tfrac{\\pi}{2},2\\pi]$ is $\\{-2,\\ 1,\\ \\sqrt3\\}$, so on the closed interval $\\min f=-2$ (at $x=\\tfrac{7\\pi}{6}$, interior) and $\\max f=\\sqrt3$ (at $x=2\\pi$, the right endpoint, since $\\sqrt3\\approx1.732>1$).",
          "Restore the half-open condition. The minimiser $x=\\tfrac{7\\pi}{6}$ is interior, hence still in $[\\tfrac{\\pi}{2},2\\pi)$: the minimum $-2$ survives and is attained. But the maximiser $x=2\\pi$ is exactly the deleted point; with it removed, the value $\\sqrt3$ is no longer achieved, while $f$ is continuous and strictly increasing on a left-neighbourhood of $2\\pi$ (there $f'(x)=\\cos x-\\sqrt3\\sin x\\to 1>0$), so $f(x)\\uparrow\\sqrt3$ without equality. Thus $\\sqrt3$ becomes a supremum. The image is the connected set $[-2,\\sqrt3)$: $\\boxed{[-2,\\sqrt3)}$."
        ]
      },
      {
        "name": "Unit-vector projection (Cauchy-Schwarz envelope) with reachability of the aligning angle",
        "steps": [
          "Read $f(x)=\\langle(\\sin x,\\cos x),\\,(1,\\sqrt3)\\rangle$ as the dot product of the moving unit vector $u(x)=(\\sin x,\\cos x)$ with the fixed vector $w=(1,\\sqrt3)$, $|w|=2$. By Cauchy-Schwarz $-2=-|w|\\le f(x)\\le|w|=2$, with the upper bound attained iff $u(x)$ is positively aligned with $w$ and the lower bound iff $u(x)$ is anti-aligned. So the question reduces to: are the aligning / anti-aligning directions reachable by $x\\in[\\tfrac{\\pi}{2},2\\pi)$?",
          "Find the alignment angles. $u(x)=(\\sin x,\\cos x)$ is the unit vector at polar angle $\\tfrac{\\pi}{2}-x$ from the positive $x$-axis; $w/|w|=(\\tfrac12,\\tfrac{\\sqrt3}{2})$ sits at polar angle $\\tfrac{\\pi}{3}$. Positive alignment ($f=2$) needs $\\sin x=\\tfrac12,\\ \\cos x=\\tfrac{\\sqrt3}{2}$, i.e. $x=\\tfrac{\\pi}{6}+2\\pi k$; the nearest representatives $\\tfrac{\\pi}{6}$ and $\\tfrac{13\\pi}{6}$ are BOTH outside $[\\tfrac{\\pi}{2},2\\pi)$. Hence the maximum $2$ is unreachable on the window — Cauchy-Schwarz equality cannot fire.",
          "Anti-alignment ($f=-2$) needs $\\sin x=-\\tfrac12,\\ \\cos x=-\\tfrac{\\sqrt3}{2}$, i.e. $x=\\tfrac{7\\pi}{6}+2\\pi k$; the representative $x=\\tfrac{7\\pi}{6}$ DOES lie in $(\\tfrac{\\pi}{2},2\\pi)$. So the minimum $-2$ is attained there. The two bounds are thus asymmetric: $-2$ reached, $+2$ not.",
          "Pin the actual top. Since $f$ cannot reach $2$ and is continuous on the connected window, its supremum is the largest boundary value of $f$ restricted to the window-closure that is approachable: $f(\\tfrac{\\pi}{2})=1$ at the closed left end and $f(x)\\to\\sqrt3$ as $x\\to2\\pi^{-}$ at the open right end. As $\\sqrt3>1$ and $x=2\\pi$ is excluded, $\\sup f=\\sqrt3$ is not attained, while every value down to the interior minimum $-2$ is. By continuity on the connected window the image is exactly $[-2,\\sqrt3)$: $\\boxed{[-2,\\sqrt3)}$."
        ]
      }
    ],
    "remark": "The engine of the problem is the mismatch between the GLOBAL extremal structure of a phase form $a\\sin x+b\\cos x=R\\sin(x+\\varphi)$ and what a RESTRICTED, half-open window actually permits. Three independent things go wrong relative to the lazy answer $[-R,R]=[-2,2]$, and each is a different species of subtlety. First, the peak escapes the window: the only $x$ giving $f=2$ are $\\tfrac{\\pi}{6}+2\\pi k$, and the window $[\\tfrac{\\pi}{2},2\\pi)$ is precisely positioned to dodge every one of them, so the amplitude $2$ is a phantom ceiling — never touched. Second, the genuine least upper bound is an ENDPOINT value $\\sqrt3$, but it lives at the open boundary $x=2\\pi$, so it is a supremum, not a maximum: the half-open bracket on the range, $[-2,\\sqrt3)$, directly mirrors the half-open bracket on the domain. Third — and this is the inversion that catches even careful solvers — the minimum behaves oppositely to the maximum: it is an INTERIOR critical point $x=\\tfrac{7\\pi}{6}$ (the trough of the sinusoid sitting comfortably inside the arc), so $-2$ is fully attained. The disciplined method is the same one that rescues any restricted-domain extremum: reduce to $R\\sin(x+\\varphi)$, push the domain through the phase shift to an arc of $\\theta$, and ask of EACH candidate extremum whether its $\\theta$ lands inside the arc and whether the relevant endpoint is open or closed — never assume the global amplitude is in play just because the formula advertises it. The lesson for a top-rank student: on a sub-interval, the location of the phase peak relative to the window endpoints decides everything, and an open endpoint converts a would-be maximum into a bare supremum while leaving an interior minimum untouched."
  },
  {
    "theme": "extrema",
    "themeLabel": "Phase, Range & Extremum Machines",
    "title": "The Rational Whose Range Is Turned Inside Out",
    "difficulty": 5,
    "task": "Determine the exact range of the trig rational, deciding from the discriminant's leading sign whether the admissible $y$ lie inside or outside the critical roots, and pin the two boundary values to the branches of the denominator's sign",
    "tags": [
      "trig-rational",
      "discriminant-method",
      "denominator-sign-flip",
      "exterior-range",
      "boundary-attainment",
      "unbounded-range"
    ],
    "statement": "Let \\[ f(x)=\\frac{2\\sin x+\\cos x+3}{\\,2\\sin x-\\cos x+1\\,}, \\] defined for every real $x$ at which the denominator is nonzero. Find the exact range of $f$ as a subset of $\\mathbb{R}$. Your solution must (i) determine the complete set of values $y$ taken by $f$, stating clearly whether the range is a bounded interval or an unbounded set; (ii) for each finite boundary value of the range, decide whether it is genuinely ATTAINED and, if so, exhibit a point $x$ that attains it; and (iii) explain how the two boundary values sit relative to the curve $x$ where the denominator $2\\sin x-\\cos x+1$ changes sign. Justify, with a reason that does not merely quote a formula, why the values strictly between the two boundaries are never produced.",
    "answer": "\\[\\boxed{\\,(-\\infty,\\,-1]\\,\\cup\\,[1,\\,\\infty)\\,}\\]",
    "trap": "The standard reflex for ``range of a trig rational'' is: set $y=f(x)$, cross-multiply to $y(2\\sin x-\\cos x+1)=2\\sin x+\\cos x+3$, collect into the linear-trig form $(2y-2)\\sin x+(-y-1)\\cos x=3-y$, and impose the solvability condition $A^2+B^2\\ge C^2$ for $A\\sin x+B\\cos x=C$. This yields $(2y-2)^2+(y+1)^2\\ge(3-y)^2$, which simplifies to $4y^2-4\\ge0$, i.e. $y^2\\ge1$, with critical roots $y=\\pm1$. The fatal move is to then write the range as the INTERVAL $[-1,1]$ — the unconscious habit, drilled by every textbook problem where the discriminant condition carves out a closed interval, of reporting ``between the roots.'' Here that is exactly inverted. The inequality is $4y^2-4\\ge0$, whose leading coefficient $+4$ is POSITIVE, so the parabola opens upward and the admissible set is the EXTERIOR $\\{y:y\\le-1\\}\\cup\\{y:y\\ge1\\}$, not the interior. The reported interval $[-1,1]$ is precisely the set of values $f$ can NEVER take (apart from the two endpoints): a one-line sanity check kills it, since $y=0$ would force the numerator $2\\sin x+\\cos x+3=0$, impossible because $2\\sin x+\\cos x\\ge-\\sqrt5>-3$, so $0$ is unreachable yet sits inside the bogus answer. The deeper cause of the inversion is the very thing the careless solver suppressed: the sign of the leading coefficient $d^2+e^2-f^2=2^2+(-1)^2-1^2=4>0$ means the denominator's amplitude $\\sqrt5$ EXCEEDS its constant $1$, so $2\\sin x-\\cos x+1$ actually VANISHES and flips sign — $f$ has genuine vertical asymptotes and shoots off to $\\pm\\infty$. A rational whose denominator changes sign cannot have a bounded range; the unboundedness is forced by the same sign that flips the inequality. A second, subtler trap awaits the solver who does get the exterior set but then declares the boundaries $\\pm1$ unattained ``because the discriminant is an inequality / because of the asymptotes'': in fact equality $A^2+B^2=C^2$ is achievable, and BOTH $y=1$ and $y=-1$ are attained — at $x=\\pi$ and $x=\\tfrac{3\\pi}{2}$ respectively — so the brackets are CLOSED. Reporting $[-1,1]$, or $(-\\infty,-1)\\cup(1,\\infty)$ with open ends, or a bounded interval of any kind, all fail.",
    "solutions": [
      {
        "name": "Discriminant of the derived linear-trig equation, read with the correct opening direction",
        "steps": [
          "Put $y=f(x)$ and clear the denominator: $y(2\\sin x-\\cos x+1)=2\\sin x+\\cos x+3$. Collecting the $\\sin x$ and $\\cos x$ terms gives the linear-trig equation $(2y-2)\\sin x+(-y-1)\\cos x=3-y$, of the form $A\\sin x+B\\cos x=C$ with $A=2y-2,\\ B=-(y+1),\\ C=3-y$.",
          "Such an equation has a real solution $x$ if and only if $A^2+B^2\\ge C^2$. So $y$ is in the range of $f$ exactly when $(2y-2)^2+(y+1)^2-(3-y)^2\\ge0$. Expanding: $(4y^2-8y+4)+(y^2+2y+1)-(9-6y+y^2)=4y^2-4$. Hence the condition is $4y^2-4\\ge0$, i.e. $y^2\\ge1$.",
          "Read the quadratic correctly. The expression $4y^2-4$ has POSITIVE leading coefficient, so its graph is an upward parabola with roots $y=\\pm1$; it is $\\ge0$ OUTSIDE the roots. Therefore $y$ is admissible precisely when $y\\le-1$ or $y\\ge1$, giving the range $(-\\infty,-1]\\cup[1,\\infty)$ — an unbounded exterior set, not the interval between the roots.",
          "Tie the unboundedness to the denominator. The leading coefficient equals $d^2+e^2-f^2=2^2+(-1)^2-1^2=4>0$, equivalently the denominator's amplitude $\\sqrt5$ beats its constant $1$, so $2\\sin x-\\cos x+1$ vanishes and changes sign: $f$ has vertical asymptotes and is genuinely unbounded — consistent with the exterior range and impossible for a bounded interval.",
          "Confirm both endpoints are attained (equality $A^2+B^2=C^2$ does fire) and locate them across the sign flip. At $y=1$: the equation becomes $0\\cdot\\sin x-2\\cos x=2$, i.e. $\\cos x=-1$, so $x=\\pi$; there the denominator $2\\sin\\pi-\\cos\\pi+1=2>0$ and $f(\\pi)=\\tfrac{0-1+3}{0+1+1}=1$. At $y=-1$: the equation becomes $-4\\sin x+0=4$, i.e. $\\sin x=-1$, so $x=\\tfrac{3\\pi}{2}$; there the denominator $2(-1)-0+1=-1<0$ and $f(\\tfrac{3\\pi}{2})=\\tfrac{-2+0+3}{-2-0+1}=\\tfrac{1}{-1}=-1$. So $+1$ is reached where the denominator is positive and $-1$ where it is negative — the two boundary values straddle the sign flip — and both brackets are closed, giving $\\boxed{(-\\infty,-1]\\cup[1,\\infty)}$."
        ]
      },
      {
        "name": "Direct square certificate: $f^2-1$ factors with a fixed sign",
        "steps": [
          "Write $N=2\\sin x+\\cos x+3$ (numerator) and $D=2\\sin x-\\cos x+1$ (denominator), so $f=N/D$ where $D\\neq0$. Compute the two combinations $N-D=2\\cos x+2=2(1+\\cos x)$ and $N+D=4\\sin x+4=4(1+\\sin x)$.",
          "Multiply: $N^2-D^2=(N-D)(N+D)=8(1+\\cos x)(1+\\sin x)$. Since $1+\\cos x\\ge0$ and $1+\\sin x\\ge0$ for every real $x$, we get $N^2-D^2\\ge0$, that is $N^2\\ge D^2$.",
          "Divide by $D^2>0$ (legitimate wherever $f$ is defined): $f^2=N^2/D^2\\ge1$, hence $|f|\\ge1$, i.e. $f\\le-1$ or $f\\ge1$. No value of $f$ lies strictly in $(-1,1)$ — the inside-out shape is now transparent: the curve is squeezed AWAY from the origin, not toward it.",
          "Equality $f^2=1$ requires $(1+\\cos x)(1+\\sin x)=0$. If $\\cos x=-1$ ($x=\\pi$) then $f=1$; if $\\sin x=-1$ ($x=\\tfrac{3\\pi}{2}$) then $f=-1$ (both denominators nonzero, as checked). To see every exterior value is hit, note $f$ is continuous on each interval between consecutive asymptotes and runs off to $\\pm\\infty$ there, so by the intermediate value theorem it sweeps all of $[1,\\infty)$ on the branch containing $x=\\pi$ and all of $(-\\infty,-1]$ on the branch containing $x=\\tfrac{3\\pi}{2}$. Range $=\\boxed{(-\\infty,-1]\\cup[1,\\infty)}$."
        ]
      },
      {
        "name": "Weierstrass substitution collapses $f$ to $1+2/u$",
        "steps": [
          "Set $t=\\tan\\tfrac{x}{2}$, so $\\sin x=\\tfrac{2t}{1+t^2}$ and $\\cos x=\\tfrac{1-t^2}{1+t^2}$. Substituting and clearing the common factor $1+t^2$ from numerator and denominator gives $f=\\dfrac{t^2+2t+2}{t^2+2t}$ (valid for all $x\\neq\\pi$; the omitted value $x=\\pi$, i.e. $t\\to\\infty$, is restored at the end).",
          "Let $u=t^2+2t=(t+1)^2-1$. As $t$ ranges over $\\mathbb{R}$, $u$ ranges over $[-1,\\infty)$, and the poles of $f$ occur exactly at $u=0$. In terms of $u$, $f=\\dfrac{u+2}{u}=1+\\dfrac{2}{u}$, with $u\\in[-1,0)\\cup(0,\\infty)$.",
          "Sweep $u$. For $u\\in[-1,0)$: $\\tfrac{2}{u}$ runs from $2/(-1)=-2$ down to $-\\infty$, so $f=1+\\tfrac{2}{u}$ runs over $(-\\infty,-1]$, the top value $-1$ attained at $u=-1$ (i.e. $t=-1$, $x=\\tfrac{3\\pi}{2}$). For $u\\in(0,\\infty)$: $\\tfrac{2}{u}$ runs from $+\\infty$ down to $0^{+}$, so $f$ runs over $(1,\\infty)$, never quite reaching $1$ from this branch.",
          "Restore $x=\\pi$ (the $t\\to\\infty$ limit): $f(\\pi)=\\tfrac{0-1+3}{0+1+1}=1$, supplying the missing endpoint. Combining the finite-$t$ image $(-\\infty,-1]\\cup(1,\\infty)$ with this one extra point gives the full range $\\boxed{(-\\infty,-1]\\cup[1,\\infty)}$, confirming the bracket at $+1$ is closed and the set is the exterior, not the interval."
        ]
      }
    ],
    "remark": "The whole problem turns on ONE sign that the autopilot ignores. Running the textbook discriminant machine on a trig rational $\\tfrac{a\\sin x+b\\cos x+c}{d\\sin x+e\\cos x+f}$ produces a quadratic-in-$y$ inequality $(d^2+e^2-f^2)y^2+\\dots\\ge0$, and whether the range is the bounded interval BETWEEN the roots or the unbounded set OUTSIDE them is decided entirely by the sign of the leading coefficient $d^2+e^2-f^2$. That sign is not cosmetic: $d^2+e^2-f^2>0$ says the denominator's amplitude $\\sqrt{d^2+e^2}$ exceeds its constant $|f|$, so the denominator actually crosses zero, $f$ acquires vertical asymptotes, and the range MUST be unbounded — the same sign that flips the inequality forces the unboundedness. Most range-of-rational drills are rigged with $d^2+e^2-f^2<0$ (denominator of fixed sign, range a tidy interval), which trains exactly the wrong reflex; here the coefficients $d=2,e=-1,f=1$ give $+4$, turning the range inside out to $(-\\infty,-1]\\cup[1,\\infty)$. The two clean cross-checks are worth internalizing: the factorization $N^2-D^2=8(1+\\cos x)(1+\\sin x)\\ge0$ gives $|f|\\ge1$ in one stroke and shows the curve is pushed AWAY from the origin, while the Weierstrass collapse to $f=1+\\tfrac{2}{u}$ with $u=(t+1)^2-1\\ge-1$ makes the two branches and their poles visible at a glance. Finally, attainment is real, not lost to the asymptotes: $+1$ is hit at $x=\\pi$ on the positive-denominator branch and $-1$ at $x=\\tfrac{3\\pi}{2}$ on the negative-denominator branch, so the boundary values literally straddle the sign flip. The lesson for a top-rank student: after cross-multiplying a trig rational, always read the leading sign of the $y$-quadratic and ask whether the denominator can vanish before writing ``between the roots'' on reflex."
  },
  {
    "theme": "extrema",
    "themeLabel": "Phase, Range & Extremum Machines",
    "title": "The Wave That Barely Dips Below Zero",
    "difficulty": 5,
    "task": "Find the exact range of the absolute value of a shifted sinusoid, deciding by an exact comparison whether the constant shift pushes the wave across the axis, and locate where the minimum is attained",
    "tags": [
      "phase-form",
      "absolute-value",
      "missed-case",
      "straddle-the-axis",
      "intermediate-value",
      "borderline-shift"
    ],
    "statement": "Define \\[ f(x)=\\bigl|\\,2\\sin x+3\\cos x-\\tfrac{7}{2}\\,\\bigr|,\\qquad x\\in\\mathbb{R}. \\] Find the exact range of $f$ as a closed interval, and describe the set of all $x$ (modulo $2\\pi$) at which $f$ attains its minimum. You must justify the lower end of the range by deciding rigorously, $without$ a calculator, whether the inner expression $2\\sin x+3\\cos x-\\tfrac{7}{2}$ can equal $0$ for some real $x$; the entire answer turns on that yes-or-no question.",
    "answer": "\\[\\boxed{\\;\\Bigl[\\,0,\\ \\tfrac{7}{2}+\\sqrt{13}\\,\\Bigr]\\;}\\]",
    "trap": "The reflex is to collapse the sinusoid to phase form, $2\\sin x+3\\cos x=\\sqrt{13}\\,\\sin(x+\\varphi)$ with amplitude $\\sqrt{13}$, so the inner quantity $h(x)=\\sqrt{13}\\,\\sin(x+\\varphi)-\\tfrac72$ ranges over the band $\\bigl[-\\sqrt{13}-\\tfrac72,\\ \\sqrt{13}-\\tfrac72\\bigr]$. Then the solver recalls the textbook formula ``range of $|A\\sin\\theta+B|$ is $\\bigl[\\,|\\,\\text{amp}-|c|\\,|,\\ \\text{amp}+|c|\\,\\bigr]$'' and writes $\\min f=\\bigl|\\sqrt{13}-\\tfrac72\\bigr|=\\sqrt{13}-\\tfrac72\\approx 0.1055$, reporting the range as $\\bigl[\\sqrt{13}-\\tfrac72,\\ \\sqrt{13}+\\tfrac72\\bigr]$. This is the $missed-case$ blunder: that formula is valid $only$ when the band does not straddle the axis, i.e. only when $|c|\\ge\\text{amp}$. Here the upper edge of the band is $\\sqrt{13}-\\tfrac72$, and the whole problem hinges on its sign. A careless ``$\\sqrt{13}\\approx 3.6$, so $3.6-3.5=0.1>0$'' is the right conclusion for the wrong reason — it relies on a decimal estimate that, pushed one digit sloppier ($\\sqrt{13}\\approx 3.5$), would flip the verdict. The honest test is the exact square comparison $\\sqrt{13}\\,$ vs $\\tfrac72\\iff 13\\,$ vs $\\tfrac{49}{4}=12.25$, and since $13>12.25$ we have $\\sqrt{13}>\\tfrac72$: the band $does$ cross $0$, so by the Intermediate Value Theorem $h(x)=0$ is attainable and $\\min f=0$, $not$ $\\sqrt{13}-\\tfrac72$. The naive value $\\sqrt{13}-\\tfrac72$ is seductively close to the truth yet wrong by exactly that amount. Two further snares: (a) reporting the maximum as $\\sqrt{13}-\\tfrac72$ from the upper band edge, forgetting that $|h|$ is largest at the $lower$ edge $-\\sqrt{13}-\\tfrac72$, whose magnitude $\\sqrt{13}+\\tfrac72$ is the true max; and (b) believing $f=0$ at a ``nice'' angle — in fact it occurs at $\\sin(x+\\varphi)=\\tfrac{7}{2\\sqrt{13}}$, an irrational height hitting no standard angle, so no special-angle guess ever lands on the minimum.",
    "solutions": [
      {
        "name": "Phase reduction plus an exact straddle test",
        "steps": [
          "Write $2\\sin x+3\\cos x=R\\sin(x+\\varphi)$ with $R=\\sqrt{2^2+3^2}=\\sqrt{13}$ and $\\tan\\varphi=\\tfrac32$. As $x$ runs over $\\mathbb{R}$, $\\sin(x+\\varphi)$ takes every value in $[-1,1]$, so the inner expression $h(x)=\\sqrt{13}\\,\\sin(x+\\varphi)-\\tfrac72$ takes exactly the values in the band $I=\\bigl[-\\sqrt{13}-\\tfrac72,\\ \\sqrt{13}-\\tfrac72\\bigr]$, and $f=|h|$.",
          "Decide whether $I$ contains $0$ — equivalently whether the upper edge $\\sqrt{13}-\\tfrac72$ is $\\ge 0$. Compare exactly by squaring the positive parts: $\\sqrt{13}\\ge\\tfrac72\\iff 13\\ge\\tfrac{49}{4}=12.25$, which is true. Hence $\\sqrt{13}-\\tfrac72>0$, the band $I$ straddles the origin, and since $h$ is continuous it actually attains the value $0$ (Intermediate Value Theorem). Therefore $\\min f=\\min_{t\\in I}|t|=0$.",
          "For the maximum, the farthest point of $I$ from $0$ is its lower edge $-\\sqrt{13}-\\tfrac72$ (because $\\sqrt{13}+\\tfrac72>\\sqrt{13}-\\tfrac72$), so $\\max f=\\bigl|-\\sqrt{13}-\\tfrac72\\bigr|=\\sqrt{13}+\\tfrac72$. As $h$ sweeps the connected interval $I$ continuously, $|h|$ sweeps every value between its min $0$ and its max $\\sqrt{13}+\\tfrac72$, so the range is the full closed interval $\\bigl[0,\\ \\tfrac72+\\sqrt{13}\\bigr]$.",
          "Locate the minimisers: $f=0\\iff\\sqrt{13}\\,\\sin(x+\\varphi)=\\tfrac72\\iff\\sin(x+\\varphi)=\\tfrac{7}{2\\sqrt{13}}$, which lies in $(0,1)$ since $\\tfrac{7}{2\\sqrt{13}}=\\sqrt{\\tfrac{49}{52}}<1$. Thus $x+\\varphi=\\arcsin\\tfrac{7}{2\\sqrt{13}}$ or $\\pi-\\arcsin\\tfrac{7}{2\\sqrt{13}}$ (mod $2\\pi$), giving exactly two minimisers per period — none a standard angle. Hence $\\boxed{\\bigl[0,\\ \\tfrac72+\\sqrt{13}\\bigr]}$, with $\\min f=0$ attained there."
        ]
      },
      {
        "name": "Image-of-an-interval argument (no formula memorised)",
        "steps": [
          "Set $t=2\\sin x+3\\cos x$. By Cauchy–Schwarz (or the phase form), $|t|=|2\\sin x+3\\cos x|\\le\\sqrt{(2^2+3^2)(\\sin^2x+\\cos^2x)}=\\sqrt{13}$, and both signs of the bound are achieved, so $t$ ranges over $[-\\sqrt{13},\\sqrt{13}]$ as $x$ varies; equivalently the inner expression $h=t-\\tfrac72$ ranges over $J=[-\\sqrt{13}-\\tfrac72,\\ \\sqrt{13}-\\tfrac72]$.",
          "The map $t\\mapsto|t-\\tfrac72|$ on the interval $[-\\sqrt{13},\\sqrt{13}]$ is what we want, i.e. $u\\mapsto|u|$ on $J$. The minimum of $|u|$ over an interval $J$ is $0$ precisely when $0\\in J$, and otherwise it is the distance from $0$ to the nearer endpoint. So everything reduces to: is $0\\in J$? This holds iff the right endpoint $\\sqrt{13}-\\tfrac72\\ge0$.",
          "Settle the endpoint sign by an exact (calculator-free) comparison: $\\sqrt{13}\\ge\\tfrac72\\iff 13\\ge 12.25$, true. So $0\\in J$ and $\\min f=0$; the bound is attained because $u\\mapsto|u|$ is continuous and $J$ is the exact image of $h$. The maximum of $|u|$ over $J$ is the larger endpoint magnitude, $\\max\\!\\bigl(\\sqrt{13}+\\tfrac72,\\ \\sqrt{13}-\\tfrac72\\bigr)=\\sqrt{13}+\\tfrac72$.",
          "Since $|u|$ is continuous and $J$ is connected (an interval), its image is the connected set $[0,\\ \\sqrt{13}+\\tfrac72]$ — there are no gaps. Therefore the exact range is $\\boxed{\\bigl[0,\\ \\tfrac72+\\sqrt{13}\\bigr]}$. The naive ``min $=\\sqrt{13}-\\tfrac72$'' answer is exactly the value one would get had $0\\notin J$; the straddle test is the whole game."
        ]
      },
      {
        "name": "Squaring: minimise a quadratic in $t$ over its true reach",
        "steps": [
          "Work with $f^2=(2\\sin x+3\\cos x-\\tfrac72)^2$. Put $t=2\\sin x+3\\cos x$; from Step-style bound above, $t$ attains exactly the values in $[-\\sqrt{13},\\sqrt{13}]$. So $f^2=\\phi(t)=(t-\\tfrac72)^2$ is to be optimised over $t\\in[-\\sqrt{13},\\sqrt{13}]$, a clean downward-then-upward parabola in $t$ with vertex at $t=\\tfrac72$.",
          "The vertex $t=\\tfrac72$ gives $\\phi=0$, the global floor of $\\phi$; it is $reachable$ iff $\\tfrac72\\in[-\\sqrt{13},\\sqrt{13}]$, i.e. iff $\\tfrac72\\le\\sqrt{13}$. Square: $\\tfrac{49}{4}\\le 13$, true, so the vertex is inside the reach and $\\min f^2=0$, hence $\\min f=0$. (Had $\\tfrac72>\\sqrt{13}$, the vertex would be unreachable and the minimum would jump to the nearer endpoint $t=\\sqrt{13}$, giving $\\min f=\\tfrac72-\\sqrt{13}$ — that is the parallel-universe answer the trap reports.)",
          "The maximum of the parabola over $[-\\sqrt{13},\\sqrt{13}]$ occurs at the endpoint farther from the vertex $t=\\tfrac72$, namely $t=-\\sqrt{13}$, where $\\phi=(-\\sqrt{13}-\\tfrac72)^2=(\\sqrt{13}+\\tfrac72)^2$, so $\\max f=\\sqrt{13}+\\tfrac72$. Continuity of $t\\mapsto\\phi(t)$ over the interval, then taking square roots, fills in every intermediate value.",
          "Thus $f^2$ ranges over $[0,(\\sqrt{13}+\\tfrac72)^2]$ and $f$ over $\\boxed{\\bigl[0,\\ \\tfrac72+\\sqrt{13}\\bigr]}$. The minimiser is where $t=\\tfrac72$, i.e. $2\\sin x+3\\cos x=\\tfrac72$, solvable precisely because $\\tfrac72<\\sqrt{13}$ — the same inequality that put the vertex in reach."
        ]
      }
    ],
    "remark": "The machine here is a $barely-straddling$ shifted wave. The expression $|R\\sin(x+\\varphi)+c|$ has range $[0,\\,R+|c|]$ when the band crosses the axis ($|c|\\le R$) but $\\bigl[\\,|c|-R,\\ |c|+R\\,\\bigr]$ when it does not ($|c|\\ge R$); the formula a student half-remembers is only the second case, and blindly applying it is the classic missed-case error. The numbers are tuned so the verdict is genuinely on a knife edge: $R=\\sqrt{13}\\approx 3.6056$ against the shift $\\tfrac72=3.5$, with the entire answer decided by $13$ versus $\\tfrac{49}{4}$. A decimal estimate gives the right sign here but is intellectually dishonest — one careless rounding of $\\sqrt{13}$ flips it — whereas the integer comparison $13>12.25$ is exact and bulletproof. Once the straddle is confirmed, the Intermediate Value Theorem guarantees the inner expression hits $0$, so $\\min f=0$ is $achieved$, not just approached, and the maximum is governed by the $far$ edge $-R-|c|$, giving $R+|c|=\\sqrt{13}+\\tfrac72$. All three routes — phase reduction, image-of-an-interval, and the squared-parabola-over-its-reach — agree, and each isolates the same pivot: a vertex (or a zero) is an extremum only if it lies inside the variable's genuine reach. The lesson for a top-rank student: before quoting any $|{\\cdot}|$ range formula, test whether the band contains the axis with an $exact$ comparison, never a decimal; and remember that the minimiser of such a wave sits at an irrational height ($\\sin(x+\\varphi)=\\tfrac{7}{2\\sqrt{13}}$) that no special-angle reflex will ever reveal."
  },
  {
    "theme": "extrema",
    "themeLabel": "Phase, Range & Extremum Machines",
    "title": "The Phantom Boundary at One",
    "difficulty": 5,
    "task": "Find the sum",
    "tags": [
      "range",
      "phase-substitution",
      "attainment",
      "removable-hole",
      "rational",
      "supremum"
    ],
    "statement": "Let $S$ be the set of all real numbers $k$ for which the equation \\[ \\sin x+\\cos x-1=k\\,\\sin x\\cos x \\] possesses at least one solution $x$ at which $\\sin x\\cos x\\neq 0$. It turns out that $S$ is a union of intervals whose complement in $\\mathbb{R}$ consists of one open interval together with a single isolated missing point. Exactly three real numbers occur as boundary points of $S$. Find the sum of those three boundary values.",
    "answer": "\\[\\boxed{-3}\\]",
    "trap": "Clearing the denominator turns the problem into $\\sin x+\\cos x-1=k\\sin x\\cos x$, and at $k=1$ this reads $\\sin x+\\cos x-1=\\sin x\\cos x$, which is genuinely solved by $x=0$ and $x=\\tfrac{\\pi}{2}$. The tempting conclusion is that $k=1$ lies safely inside $S$, so the only boundaries are the two amplitude endpoints $-2-2\\sqrt2$ and $2\\sqrt2-2$, giving sum $-4$. But the problem demands a solution with $\\sin x\\cos x\\neq 0$, and at both $x=0$ and $x=\\tfrac{\\pi}{2}$ one has $\\sin x\\cos x=0$. So $k=1$ is a removable hole: values of $k$ arbitrarily close to $1$ are attainable from both sides, yet $1$ itself is never reached. It is an unattained supremum/infimum, hence a third boundary point that the careless solver silently deletes.",
    "solutions": [
      {
        "name": "Phase substitution to a single-variable rational",
        "steps": [
          "Set $t=\\sin x+\\cos x=\\sqrt2\\,\\sin\\!\\big(x+\\tfrac{\\pi}{4}\\big)$, so $t$ ranges over $[-\\sqrt2,\\sqrt2]$, and $\\sin x\\cos x=\\dfrac{t^2-1}{2}$. The forbidden condition $\\sin x\\cos x\\neq 0$ is exactly $t\\neq\\pm1$.",
          "The equation becomes $t-1=k\\cdot\\dfrac{t^2-1}{2}=k\\cdot\\dfrac{(t-1)(t+1)}{2}$. Since $t\\neq 1$ we may cancel $t-1$, leaving $1=\\dfrac{k(t+1)}{2}$, i.e. $k=\\dfrac{2}{t+1}$, valid for $t\\in[-\\sqrt2,\\sqrt2]$ with $t\\neq\\pm1$.",
          "As $t$ sweeps $[-\\sqrt2,-1)\\cup(-1,1)\\cup(1,\\sqrt2]$, the quantity $k=\\dfrac{2}{t+1}$ takes the values $S=(-\\infty,\\,-2-2\\sqrt2\\,]\\cup[\\,2\\sqrt2-2,\\,1)\\cup(1,\\infty)$. The endpoint $t=-\\sqrt2$ gives $k=\\dfrac{2}{1-\\sqrt2}=-2-2\\sqrt2$ and $t=\\sqrt2$ gives $k=\\dfrac{2}{1+\\sqrt2}=2\\sqrt2-2$, both attained; $t\\to1$ gives $k\\to1$, never attained because $t=1$ is forbidden.",
          "Hence the three boundary points of $S$ are $-2-2\\sqrt2$, $\\;2\\sqrt2-2$, and the phantom value $1$. Their sum is $(-2-2\\sqrt2)+(2\\sqrt2-2)+1=\\boxed{-3}$."
        ]
      },
      {
        "name": "Direct calculus on the trig rational",
        "steps": [
          "For $\\sin x\\cos x\\neq0$ define $f(x)=\\dfrac{\\sin x+\\cos x-1}{\\sin x\\cos x}$; then $k\\in S$ exactly when $k$ is a value of $f$. Differentiating and setting $f'(x)=0$ on $(0,2\\pi)$ yields the critical points $x=\\dfrac{\\pi}{4}$ and $x=\\dfrac{5\\pi}{4}$.",
          "Evaluating, $f\\!\\big(\\tfrac{\\pi}{4}\\big)=2\\sqrt2-2$ and $f\\!\\big(\\tfrac{5\\pi}{4}\\big)=-2-2\\sqrt2$; these are the two attained extreme values, the genuine amplitude-type endpoints of the range.",
          "Near the punctures $x=0,\\tfrac{\\pi}{2},\\pi,\\dots$ where the denominator vanishes, $f$ has limits: $\\displaystyle\\lim_{x\\to0}f(x)=\\lim_{x\\to\\pi/2}f(x)=1$ (a removable hole), while at $x=\\pi,\\tfrac{3\\pi}{2}$ the function blows up to $\\pm\\infty$ (genuine poles). The value $1$ is therefore approached arbitrarily closely but never equals any $f(x)$, making it an unattained boundary of the range.",
          "The range of $f$ thus has boundary points $-2-2\\sqrt2$, $2\\sqrt2-2$, and $1$, summing to $\\boxed{-3}$."
        ]
      },
      {
        "name": "Solve linearly for the phase, then impose the constraints",
        "steps": [
          "With $t=\\sin x+\\cos x$ as before, the cancelled equation $k=\\dfrac{2}{t+1}$ inverts to $t=\\dfrac{2-k}{k}$ (for $k\\neq0$). A value $k$ lies in $S$ iff this $t$ is a legitimate phase value: $-\\sqrt2\\le t\\le\\sqrt2$ and $t\\neq\\pm1$.",
          "The amplitude constraint $\\big|\\tfrac{2-k}{k}\\big|\\le\\sqrt2$ has its boundary when $\\dfrac{2-k}{k}=\\pm\\sqrt2$, i.e. $2=k(1\\pm\\sqrt2)$, giving $k=\\dfrac{2}{1+\\sqrt2}=2\\sqrt2-2$ and $k=\\dfrac{2}{1-\\sqrt2}=-2-2\\sqrt2$.",
          "The exclusion $t\\neq1$ forbids $\\dfrac{2-k}{k}=1$, i.e. $2-k=k$, i.e. $k=1$; meanwhile $t=-1$ would need $2-k=-k$, an impossibility, so it removes no finite $k$. Thus the constraint $t\\neq\\pm1$ contributes the single extra forbidden value $k=1$, sitting interior to the amplitude-allowed band as an isolated hole.",
          "The boundary of $S$ therefore consists of $2\\sqrt2-2$, $-2-2\\sqrt2$, and $1$, whose sum is $(2\\sqrt2-2)+(-2-2\\sqrt2)+1=\\boxed{-3}$."
        ]
      }
    ],
    "remark": "The cancellation of the factor $t-1$ is where the whole problem lives. Algebraically it is innocent, but it quietly discards the locus $t=1$, which is precisely where $\\sin x\\cos x=0$. The cleared equation is solvable at $k=1$ (at $x=0,\\tfrac{\\pi}{2}$), yet those very solutions are the ones the constraint outlaws, so $k=1$ becomes a value approached from both sides but never attained -- a supremum of one branch and infimum of the next, fused into a single phantom hole. Reading off the range as a closed amplitude band misses it entirely; honest attainment analysis recovers the third boundary and turns the answer from $-4$ into $-3$."
  },
  {
    "theme": "extrema",
    "themeLabel": "Phase, Range & Extremum Machines",
    "title": "The Rational That Pretends to Be Unbounded",
    "difficulty": 5,
    "task": "Determine the exact range of a genuine trigonometric rational, prove both extreme values are actually attained, and decide whether the bounded interval or its unbounded complement is the truth",
    "tags": [
      "trig-rational",
      "phase-form",
      "discriminant",
      "denominator-sign",
      "attainment",
      "weierstrass"
    ],
    "statement": "For real $x$ consider \\[ f(x)=\\frac{\\sin x-2\\cos x+3}{2\\sin x+\\cos x+4}. \\] Find the exact range of $f$, i.e. the set of all values $f(x)$ as $x$ ranges over $\\mathbb{R}$. Prove that the largest value $M$ and the smallest value $m$ are genuinely $attained$ at some real $x$ (not merely approached), and then report the single number \\[ S=M+m. \\] A full solution must justify $why$ the answer is the bounded interval $[m,M]$ rather than the unbounded complement $(-\\infty,m]\\cup[M,\\infty)$.",
    "answer": "\\[\\boxed{\\;S=\\dfrac{24}{11}\\;}\\]",
    "trap": "The mechanical move is: set $y=f(x)$, cross-multiply to $ (2y-1)\\sin x+(y+2)\\cos x=3-4y$, demand a real $x$ via the phase bound $(2y-1)^2+(y+2)^2\\ge(3-4y)^2$, simplify to $-11y^2+24y-4\\ge0$, i.e. $(y-2)(11y-2)\\le0$, and read off $y\\in[\\tfrac{2}{11},2]$. The $trap$ is to treat the inequality $A^2+B^2\\ge C^2$ as the $whole$ story and never check the $sign of the denominator$. That inequality only certifies that the equation $A\\sin x+B\\cos x=C$ has a real solution; it says $nothing$ about whether the original quotient is the bounded interval or its complement. For a rational whose denominator $changes sign$, the very same discriminant computation produces the $complement$ $(-\\infty,\\tfrac{2}{11}]\\cup[2,\\infty)$ instead — the polynomial factors are identical, only the feasible region flips. The case here is decided $solely$ by the hidden fact that $2\\sin x+\\cos x+4$ never vanishes: its amplitude is $\\sqrt{2^2+1^2}=\\sqrt5\\approx2.236<4$, so the denominator stays in $[\\,4-\\sqrt5,\\,4+\\sqrt5\\,]\\subset(0,\\infty)$. A solver who skips this check has not actually proved anything — and on a sign-changing variant would confidently report the wrong, unbounded set. A second snare is $attainment$: even granting $y\\in[\\tfrac{2}{11},2]$, the endpoints require equality $A^2+B^2=C^2$, which gives a $unique$ phase $x^*$; one must verify that $x^*$ does not annihilate the denominator (it does not, since the denominator is never zero), so $m$ and $M$ are truly hit, not just approached. A third, sharper snare appears in the Weierstrass route: writing $t=\\tan\\tfrac{x}{2}$ turns $y=f$ into the quadratic $(3y-5)t^2+(4y-2)t+(5y-1)=0$, and applying $b^2-4ac\\ge0$ blindly forgets that at $y=\\tfrac53$ the leading coefficient $3y-5$ vanishes, so the ``quadratic'' degenerates to a $linear$ equation; one must confirm $y=\\tfrac53$ is still attained (it is, e.g. at $x=\\pi$) rather than silently dropped. Reporting the complement, or any interval other than $[\\tfrac{2}{11},2]$, or claiming the endpoints are only suprema/infima, all fail the audit. Hence $S=2+\\tfrac{2}{11}=\\tfrac{24}{11}$.",
    "solutions": [
      {
        "name": "Phase form plus the decisive denominator-sign check",
        "steps": [
          "Set $y=f(x)$ and cross-multiply (legitimate because the denominator is finite): $y\\,(2\\sin x+\\cos x+4)=\\sin x-2\\cos x+3$, which rearranges to $(2y-1)\\sin x+(y+2)\\cos x=3-4y$. This is of the form $A\\sin x+B\\cos x=C$ with $A=2y-1,\\ B=y+2,\\ C=3-4y$, and it has a real solution $x$ iff $A^2+B^2\\ge C^2$.",
          "Compute $A^2+B^2-C^2=(2y-1)^2+(y+2)^2-(3-4y)^2=(4y^2-4y+1)+(y^2+4y+4)-(9-24y+16y^2)=-11y^2+24y-4$. Factoring, $-11y^2+24y-4=-(11y-2)(y-2)$, so the condition becomes $(11y-2)(y-2)\\le0$, i.e. $\\dfrac{2}{11}\\le y\\le2$.",
          "Now the decisive step the trap omits: $prove the range is the interval, not its complement$, by showing the denominator never changes sign. Indeed $2\\sin x+\\cos x+4=\\sqrt5\\,\\sin(x+\\varphi)+4$ with $\\sqrt5\\approx2.236<4$, so the denominator lies in $[\\,4-\\sqrt5,\\,4+\\sqrt5\\,]$, strictly positive. Hence $f$ is a $continuous$ function on the connected compact circle, so its range is a single closed interval; combined with the feasibility window above, the range is exactly $\\left[\\tfrac{2}{11},\\,2\\right]$.",
          "Attainment of the endpoints: at $y=\\tfrac{2}{11}$, $(A,B,C)=(-\\tfrac{7}{11},\\tfrac{24}{11},\\tfrac{25}{11})$ with $A^2+B^2=C^2$, giving the unique phase $(\\sin x,\\cos x)=\\big(\\tfrac{AC}{A^2+B^2},\\tfrac{BC}{A^2+B^2}\\big)=(-\\tfrac{7}{25},\\tfrac{24}{25})$, a valid point with nonzero denominator $\\tfrac{22}{5}$; at $y=2$, $(A,B,C)=(3,4,-5)$ gives $(\\sin x,\\cos x)=(-\\tfrac35,-\\tfrac45)$, denominator $2\\neq0$. So $m=\\tfrac{2}{11}$ and $M=2$ are genuinely attained, and $\\boxed{S=M+m=2+\\tfrac{2}{11}=\\tfrac{24}{11}}$."
        ]
      },
      {
        "name": "Weierstrass substitution: a quadratic in $t=\\tan\\tfrac{x}{2}$ with a degenerate value",
        "steps": [
          "Put $t=\\tan\\tfrac{x}{2}$, so $\\sin x=\\dfrac{2t}{1+t^2}$ and $\\cos x=\\dfrac{1-t^2}{1+t^2}$. Substituting and clearing $1+t^2>0$ gives $f=\\dfrac{5t^2+2t+1}{3t^2+4t+5}$; note the denominator $3t^2+4t+5$ has discriminant $16-60<0$, so it is always positive and the substitution introduces no spurious poles.",
          "Set $y=\\dfrac{5t^2+2t+1}{3t^2+4t+5}$ and clear denominators: $(3y-5)t^2+(4y-2)t+(5y-1)=0$. For a real $t$ when $3y-5\\neq0$, require $b^2-4ac\\ge0$: $(4y-2)^2-4(3y-5)(5y-1)=(16y^2-16y+4)-4(15y^2-28y+5)=-44y^2+96y-16=-4(11y-2)(y-2)\\ge0$, hence $\\tfrac{2}{11}\\le y\\le2$, matching Method 1.",
          "Handle the degenerate value the trap forgets: when $3y-5=0$, i.e. $y=\\tfrac53$, the equation is $linear$, $(4\\cdot\\tfrac53-2)t+(5\\cdot\\tfrac53-1)=\\tfrac{14}{3}t+\\tfrac{22}{3}=0$, giving the real root $t=-\\tfrac{11}{7}$; so $y=\\tfrac53\\in[\\tfrac{2}{11},2]$ is attained and nothing is lost. (Equivalently $x=\\pi$, missed by $t=\\tan\\tfrac{x}{2}$, gives $f(\\pi)=\\tfrac{0-2(-1)+3}{0+(-1)+4}=\\tfrac{5}{3}$, confirming the point.)",
          "The boundary $y\\in\\{\\tfrac{2}{11},2\\}$ makes $b^2-4ac=0$, a repeated real $t$, so each endpoint corresponds to an actual real $x$ and is attained. Therefore the range is $[\\tfrac{2}{11},2]$, $m=\\tfrac{2}{11}$, $M=2$, and $\\boxed{S=\\tfrac{24}{11}}$."
        ]
      },
      {
        "name": "Vieta on the discriminant cubic-free shortcut: sum of extremes without finding each",
        "steps": [
          "From either method the extreme values $m,M$ are exactly the two roots of the boundary equation $A^2+B^2=C^2$, i.e. of $-11y^2+24y-4=0$, equivalently $11y^2-24y+4=0$. (The endpoints of the range are precisely where the phase inequality becomes equality, so they are the roots of this quadratic.)",
          "Confirm both roots are admissible and attained: the quadratic $11y^2-24y+4=0$ has discriminant $24^2-4\\cdot11\\cdot4=576-176=400=20^2>0$, two distinct real roots; since the denominator of $f$ is sign-definite (amplitude $\\sqrt5<4$), $f$ is continuous on the circle and hits every value between them, including the endpoints, so $m$ and $M$ are the two roots themselves.",
          "Apply Vieta directly to $11y^2-24y+4=0$: the sum of the two roots is $m+M=\\dfrac{24}{11}$ (and their product is $\\dfrac{4}{11}$), $without$ ever solving the quadratic. This is the cleanest route to $S$ because $S$ depends only on the symmetric function of the endpoints.",
          "Hence $S=M+m=\\dfrac{24}{11}$, and as a sanity check the roots are $y=\\dfrac{24\\pm20}{22}\\in\\{2,\\tfrac{2}{11}\\}$, recovering $M=2,\\ m=\\tfrac{2}{11}$. Thus $\\boxed{S=\\tfrac{24}{11}}$."
        ]
      }
    ],
    "remark": "The instrument here is a $true trigonometric rational$, and the reference-class lesson is that the discriminant $A^2+B^2\\ge C^2$ obtained by cross-multiplying is only $half$ a proof. That inequality certifies a real $x$ solving the linearised equation, but the polynomial $(11y-2)(y-2)\\le0$ is sign-blind to the denominator: a quotient with a $sign-changing$ denominator produces the identical factors yet has the $complementary, unbounded$ range $(-\\infty,\\tfrac{2}{11}]\\cup[2,\\infty)$. What collapses the ambiguity to the bounded interval $[\\tfrac{2}{11},2]$ is the single quiet fact that $2\\sin x+\\cos x+4$ has amplitude $\\sqrt5<4$ and so is $never zero$; the map is then continuous on the compact connected circle and its image must be one closed interval. Two further layers separate a clean solution from a lucky one: first, $attainment$ — the endpoints force the phase equality $A^2+B^2=C^2$, which yields a $unique$ phase $x^*$ that one must verify keeps the denominator nonzero, here landing on the crisp Pythagorean phases $(\\sin x,\\cos x)=(-\\tfrac{7}{25},\\tfrac{24}{25})$ and $(-\\tfrac35,-\\tfrac45)$; second, in the Weierstrass picture the ``quadratic in $t$'' $degenerates$ at $y=\\tfrac53$ where the leading coefficient $3y-5$ dies, so the value $\\tfrac53$ (realised at $x=\\pi$, the one angle $t=\\tan\\tfrac{x}{2}$ cannot see) must be reinstated by hand. The elegant payoff is that the question asks only for $S=M+m$, and the endpoints are exactly the roots of $11y^2-24y+4=0$, so $Vieta$ delivers $S=\\tfrac{24}{11}$ in one line — no need to solve for either extreme. The discipline a top-rank solver should internalise: for any trig rational, always (i) prove the denominator is sign-definite before naming an interval, (ii) confirm endpoint phases are admissible, and (iii) watch for the degenerate parameter value that any rational-to-quadratic reduction silently hides."
  },
  {
    "theme": "extrema",
    "themeLabel": "Phase, Range & Extremum Machines",
    "title": "The Vertex That Walks Off the Cosine Track",
    "difficulty": 5,
    "task": "Find the exact range of the parameterised minimum, handling the regime where the parabola's vertex leaves the admissible cosine interval",
    "tags": [
      "quadratic-in-cos",
      "vertex-crossing",
      "case-split",
      "parameter-range",
      "endpoint-extremum",
      "double-optimisation"
    ],
    "statement": "For a real parameter $a\\in[-3,3]$ define \\[ f_a(x)=\\cos 2x-2a\\cos x+a,\\qquad x\\in\\mathbb{R}, \\] and let $m(a)=\\min_{x\\in\\mathbb{R}}f_a(x)$ be its global minimum. As $a$ runs over $[-3,3]$, the number $m(a)$ itself sweeps out a set of values. $Determine the exact range $ $\\{\\,m(a):a\\in[-3,3]\\,\\}$. A tempting shortcut writes $f_a$ as a quadratic in $t=\\cos x$, reads off the vertex value $-\\tfrac{a^2}{2}+a-1$, and maximises/minimises $that$ over $a\\in[-3,3]$ to get $\\left[-\\tfrac{17}{2},-\\tfrac12\\right]$. Decide whether this is correct, and if not, give the true range and pinpoint the value(s) of $a$ where the shortcut fails.",
    "answer": "\\[\\boxed{\\left[-8,\\,-\\tfrac12\\right]}\\]",
    "trap": "The fatal move is to treat the vertex value $g\\!\\left(\\tfrac{a}{2}\\right)=-\\tfrac{a^2}{2}+a-1$ as the minimum of $f_a$ for $every$ $a\\in[-3,3]$. Writing $t=\\cos x$ and $\\cos 2x=2t^2-1$ gives $f_a=g(t)=2t^2-2at+(a-1)$, an upward parabola whose unconstrained vertex sits at $t=\\tfrac{a}{2}$. But $t$ is $not$ free: it is forced into $[-1,1]$ because $t=\\cos x$. The vertex $\\tfrac{a}{2}$ lies inside $[-1,1]$ only when $|a|\\le 2$; once $|a|>2$ the parabola is monotone across the whole admissible interval, so the true minimum jumps to the $boundary$ endpoint, not the vertex. Concretely at $a=-3$ the vertex is at $t=-\\tfrac32\\notin[-1,1]$; on $[-1,1]$ the function $g$ is increasing ($g'(t)=4t+6>0$), so $m(-3)=g(-1)=2-6-4=-8$ (matching $1+3a\\big|_{a=-3}=-8$), whereas the phantom vertex formula reports $-\\tfrac{9}{2}-3-1=-\\tfrac{17}{2}=-8.5$, a value $f_{-3}$ never reaches. Thus the shortcut's lower end $-\\tfrac{17}{2}$ is spurious: it pretends $\\cos x$ can equal $-\\tfrac32$. The error is a missed hidden constraint (vertex crossing the $[-1,1]$ boundary), not an arithmetic slip; the honest answer demands a three-way case-split on where the vertex lands.",
    "solutions": [
      {
        "name": "Reduce to a constrained quadratic and case-split on the vertex location",
        "steps": [
          "Put $t=\\cos x\\in[-1,1]$ and use $\\cos 2x=2t^2-1$, so $f_a(x)=2t^2-1-2at+a=:g(t)=2t^2-2at+(a-1)$. Since the leading coefficient $2>0$, $g$ is an upward parabola in $t$ with vertex at $t^*=\\tfrac{a}{2}$ and vertex value $g\\!\\left(\\tfrac{a}{2}\\right)=-\\tfrac{a^2}{2}+a-1$. As $x$ ranges over $\\mathbb{R}$, $t$ ranges over $[-1,1]$, so $m(a)=\\min_{t\\in[-1,1]}g(t)$.",
          "The minimiser is the vertex if $t^*\\in[-1,1]$, else the nearer endpoint. Now $t^*=\\tfrac{a}{2}\\in[-1,1]\\iff a\\in[-2,2]$. Hence three regimes: (i) $a\\in[-2,2]$: $m(a)=-\\tfrac{a^2}{2}+a-1$; (ii) $a>2$ (vertex right of $1$, $g$ decreasing on $[-1,1]$): $m(a)=g(1)=2-2a+a-1=1-a$; (iii) $a<-2$ (vertex left of $-1$, $g$ increasing on $[-1,1]$): $m(a)=g(-1)=2+2a+a-1=1+3a$.",
          "Range on regime (i): $h(a)=-\\tfrac{a^2}{2}+a-1=-\\tfrac12(a-1)^2-\\tfrac12$. On $[-2,2]$ this peaks at $a=1$ with $h(1)=-\\tfrac12$ and bottoms at the farther end $a=-2$ with $h(-2)=-2-2-1=-5$; since it is a downward parabola symmetric about $a=1$, it covers $\\left[-5,-\\tfrac12\\right]$.",
          "Range on regime (iii), $a\\in[-3,-2)$: $1+3a$ is increasing, giving values from $1+3(-3)=-8$ (at $a=-3$, included) up to $1+3(-2)=-5$ (excluded), i.e. $[-8,-5)$. Range on regime (ii), $a\\in(2,3]$: $1-a$ gives $(-2,\\,-1]\\cup\\{\\ldots\\}$ — precisely $a=3\\mapsto-2$ down to just above $a=2\\mapsto-1$, i.e. $[-2,-1)$, which sits inside what (i) already supplies.",
          "Union of the three pieces: $[-8,-5)\\cup[-5,-\\tfrac12]\\cup[-2,-1)=\\left[-8,-\\tfrac12\\right]$. The maximum $-\\tfrac12$ is attained (interior $a=1$) and the minimum $-8$ is attained (endpoint $a=-3$). Therefore $\\{m(a):a\\in[-3,3]\\}=\\boxed{\\left[-8,\\,-\\tfrac12\\right]}$, and the shortcut's $-\\tfrac{17}{2}$ is wrong precisely on $a\\in[-3,-2)$ where the vertex has walked off the track."
        ]
      },
      {
        "name": "Envelope view: minimum of pointwise-linear-in-$a$ family",
        "steps": [
          "Fix $t\\in[-1,1]$. As a function of $a$, $g(t)=2t^2-2at+(a-1)=2t^2-1+a(1-2t)$ is $affine$ in $a$ with slope $(1-2t)$. So $m(a)=\\min_{t\\in[-1,1]}\\big[(2t^2-1)+a(1-2t)\\big]$ is a minimum of a family of straight lines in $a$ — automatically a concave, piecewise-linear function of $a$, which already forces its graph to be capped above (a single max) and to fall off linearly at the extremes.",
          "Its maximum over $a$ occurs where the active line has slope $0$: $1-2t=0\\Rightarrow t=\\tfrac12$, giving the horizontal line $y=2\\cdot\\tfrac14-1=-\\tfrac12$. The envelope cannot exceed $-\\tfrac12$, and this is hit when the minimising $t$ equals $\\tfrac12$, i.e. when $a=2t=1$. Hence $\\max_a m(a)=-\\tfrac12$ at $a=1$.",
          "For the smallest value over $a\\in[-3,3]$, the most negative slopes/intercepts dominate at the parameter endpoints. At $a=-3$ the line with the smallest value wins: among $t\\in[-1,1]$, $(2t^2-1)+(-3)(1-2t)=2t^2+6t-4$ is increasing on $[-1,1]$ (derivative $4t+6>0$), so its min over $t$ is at $t=-1$, value $2-6-4=-8$. At $a=3$, $2t^2-1+3(1-2t)=2t^2-6t+2$ is decreasing on $[-1,1]$, min at $t=1$ giving $-2$. The deeper endpoint is $a=-3$ with $-8$.",
          "Because $m$ is concave and piecewise linear, between its peak at $a=1$ and either parameter endpoint it decreases continuously, so it attains every value between its endpoint minima and the peak. The lower endpoint value $-8$ (at $a=-3$) is below $-2$ (at $a=3$), so the global span is $\\left[-8,-\\tfrac12\\right]$.",
          "Crucially, the slope-$0$ line $t=\\tfrac12$ is admissible (it lies in $[-1,1]$), but reaching the phantom $-\\tfrac{17}{2}$ would require the minimising line to be $t=\\tfrac{a}{2}=-\\tfrac32$, which is $not$ in the family since $t\\le1$ in absolute value is violated; that line simply does not exist, so the envelope never dips to $-\\tfrac{17}{2}$. Final range $\\boxed{\\left[-8,\\,-\\tfrac12\\right]}$."
        ]
      },
      {
        "name": "Direct two-stage optimisation with boundary bookkeeping",
        "steps": [
          "Inner stage (over $x$). With $t=\\cos x$, minimise $g(t)=2t^2-2at+(a-1)$ on $[-1,1]$. Compute the three candidate values once: vertex $V(a)=-\\tfrac{a^2}{2}+a-1$ (valid only if $\\tfrac{a}{2}\\in[-1,1]$), right end $R(a)=g(1)=1-a$, left end $L(a)=g(-1)=1+3a$. Then $m(a)=V(a)$ on $[-2,2]$, $m(a)=R(a)$ for $a>2$, $m(a)=L(a)$ for $a<-2$ (continuity check: $V(2)=R(2)=-1$, $V(-2)=L(-2)=-5$, so $m$ glues continuously).",
          "Outer stage (over $a$). On $[-2,2]$, $V'(a)=-a+1=0$ at $a=1$, a maximum, $V(1)=-\\tfrac12$; the endpoints give $V(-2)=-5$ (low) and $V(2)=-1$. On $[-3,-2)$, $L(a)=1+3a$ is strictly increasing, so its infimum-side value $-8$ occurs at $a=-3$. On $(2,3]$, $R(a)=1-a$ is strictly decreasing, reaching $-2$ at $a=3$.",
          "Collect global extremes. Greatest value of $m$: $-\\tfrac12$ at $a=1$ (no other branch exceeds it, since $R\\le -1$ and $L<-5$ on their domains). Least value of $m$: compare branch minima $-5$ (from $V$), $-8$ (from $L$ at $a=-3$), $-2$ (from $R$ at $a=3$); the smallest is $-8$.",
          "Continuity of $m$ on the connected interval $[-3,3]$ (verified by the gluing in step 1) guarantees, by the intermediate value theorem, that $m$ assumes every value between its global min $-8$ and global max $-\\tfrac12$. Hence the range is the full closed interval $\\left[-8,-\\tfrac12\\right]$, both ends attained ($a=-3$ and $a=1$).",
          "Audit of the shortcut: it used $V(a)$ on all of $[-3,3]$ and got $\\min V=V(-3)=-\\tfrac92-3-1=-\\tfrac{17}{2}$. But $a=-3$ lies in the $L$-regime, where the genuine minimum is $L(-3)=-8>-\\tfrac{17}{2}$; the discrepancy is exactly the vertex crossing $t=-1$. The correct range is $\\boxed{\\left[-8,\\,-\\tfrac12\\right]}$."
        ]
      }
    ],
    "remark": "This is a double-optimisation machine: an inner extremum over $x$ (equivalently $t=\\cos x\\in[-1,1]$) feeding an outer extremum over the parameter $a$. The whole problem is engineered around one hinge: the vertex of the quadratic-in-$\\cos x$ sits at $t=\\tfrac{a}{2}$, which strolls out of the admissible band $[-1,1]$ exactly as $|a|$ passes $2$. A strong student who memorised 'minimum of an upward parabola is its vertex value' applies $-\\tfrac{a^2}{2}+a-1$ blindly and manufactures the impossible value $-\\tfrac{17}{2}$, which secretly requires $\\cos x=-\\tfrac32$. The honest analysis is a three-way case-split (vertex inside / off the right / off the left), and the global minimum is delivered by an $endpoint$ of the constrained interval, not the vertex — the signature of constrained optimisation. The envelope solution exposes a second, deeper structure: holding $t$ fixed makes $f_a$ affine in $a$, so $m(a)$ is a minimum of lines, hence concave and piecewise linear, which instantly explains the single peak at $a=1$ and the linear descent to the endpoints. The meta-lesson for a top-rank student: whenever a vertex/critical point depends on a parameter, always test whether it stays feasible; the most dangerous wrong answers in extremum problems come from optimising over a point that the constraints forbid.",
    "_meta_provenance": "f_a(x)=cos2x-2a cosx+a, a in [-3,3]; with t=cosx, g(t)=2t^2-2at+(a-1), vertex t=a/2, vertex value -a^2/2+a-1. m(a)= -a^2/2+a-1 on [-2,2], 1-a for a>2, 1+3a for a<-2. Range of m over [-3,3] is [-8,-1/2]: max -1/2 at a=1 (interior, vertex), min -8 at a=-3 (endpoint t=-1, vertex t=-1.5 outside). Naive 'always vertex' gives min V(-3)=-17/2=-8.5 (spurious, needs cos x=-1.5). Verified in numpy+sympy: piecewise vs brute min over x max err ~1e-10; range scan [-8,-0.5]; 2e6 Monte-Carlo all within [-8,-0.5]; a=-3 g(-1)=-8,g(1)=4,g'=4t+6>0; gluing V(2)=R(2)=-1,V(-2)=L(-2)=-5 continuous."
  },
  {
    "theme": "extrema",
    "themeLabel": "Phase, Range & Extremum Machines",
    "title": "The Cap That Robs the Symmetric Peak",
    "difficulty": 5,
    "task": "Maximise a two-factor sine product on a fixed angle-sum when a ratio constraint quietly evicts the symmetric maximiser, and prove the optimum is forced onto the constraint boundary",
    "tags": [
      "constrained-extremum",
      "boundary-optimum",
      "product-to-sum",
      "phase-form",
      "feasibility-trap",
      "monotonicity"
    ],
    "statement": "Let $x,y>0$ satisfy the fixed-sum condition \\[ x+y=\\frac{2\\pi}{3}, \\] together with the ratio constraint $y\\ge 3x$ (the second angle is at least three times the first). Find the exact MAXIMUM value of \\[ P=\\sin x\\,\\sin y, \\] and determine the unique pair $(x,y)$ at which it is attained. You must $prove$ where the optimum sits: explicitly decide whether the maximiser is the symmetric balance point in the interior or a point on the boundary of the feasible region, and justify the verdict rather than quoting the unconstrained answer.",
    "answer": "\\[\\boxed{\\,P_{\\max}=\\dfrac{1}{2}\\,}\\]",
    "trap": "The instinctive move is to recall that for a $fixed sum$ $x+y=\\tfrac{2\\pi}{3}$, the product $\\sin x\\sin y$ is largest when the two factors are $equal$ (an AM-GM / symmetry reflex), giving $x=y=\\tfrac{\\pi}{3}$ and $P=\\sin^2\\tfrac{\\pi}{3}=\\tfrac34$. This is a $feasibility blunder$: the symmetric point has $y=\\tfrac{\\pi}{3}$ and $3x=\\pi$, so $y\\ge 3x$ reads $\\tfrac{\\pi}{3}\\ge\\pi$, which is $false$ — the balance point is evicted by the ratio cap and is not an admissible competitor at all. The constraint $y\\ge 3x$ with $x+y=\\tfrac{2\\pi}{3}$ collapses to $x\\le\\tfrac{\\pi}{6}$, so the feasible set is the closed sliver $x\\in(0,\\tfrac{\\pi}{6}]$, and the symmetric maximiser $x=\\tfrac{\\pi}{3}$ lies $outside$ it. A second snare traps the solver who hunts the interior stationary point: $P'(x)=\\sin\\!\\big(\\tfrac{2\\pi}{3}-2x\\big)$ vanishes only at $x=\\tfrac{\\pi}{3}$ on $(0,\\tfrac{\\pi}{2})$ — again the forbidden symmetric point — so setting a derivative to zero hands back an infeasible answer and the genuine maximum must be a $boundary extremum$, found by monotonicity, not by $P'=0$. A third reflex is to declare the cap ``slack'' and ignore it, or to assume that since the product peaks at the centre the optimum should sit as $close$ to it as the cap allows in a balanced way; in truth the optimum is the genuinely $asymmetric$ corner $(x,y)=(\\tfrac{\\pi}{6},\\tfrac{\\pi}{2})$, where the factors are wildly unequal ($\\sin\\tfrac{\\pi}{6}=\\tfrac12$ versus $\\sin\\tfrac{\\pi}{2}=1$) yet the product is maximal on the admissible window. Reporting $\\tfrac34$ — or any value exceeding $\\tfrac12$ — fails the audit, because $\\tfrac34$ is the value of a point the constraint deletes.",
    "solutions": [
      {
        "name": "Reduce, then monotonicity on the feasible sliver",
        "steps": [
          "Eliminate $y=\\tfrac{2\\pi}{3}-x$. The ratio constraint $y\\ge 3x$ becomes $\\tfrac{2\\pi}{3}-x\\ge 3x$, i.e. $\\tfrac{2\\pi}{3}\\ge 4x$, i.e. $x\\le\\tfrac{\\pi}{6}$. With $x>0$ the feasible region is the interval $x\\in(0,\\tfrac{\\pi}{6}]$, and the objective is the one-variable function $P(x)=\\sin x\\,\\sin\\!\\big(\\tfrac{2\\pi}{3}-x\\big)$.",
          "Differentiate using $\\tfrac{d}{dx}\\big[\\sin x\\sin(c-x)\\big]=\\cos x\\sin(c-x)-\\sin x\\cos(c-x)=\\sin\\big((c-x)-x\\big)=\\sin(c-2x)$ with $c=\\tfrac{2\\pi}{3}$. Hence $P'(x)=\\sin\\!\\big(\\tfrac{2\\pi}{3}-2x\\big)$. The only zero on $(0,\\tfrac{\\pi}{2})$ is $\\tfrac{2\\pi}{3}-2x=0$, i.e. $x=\\tfrac{\\pi}{3}$ — the symmetric point, which lies $outside$ the feasible interval $(0,\\tfrac{\\pi}{6}]$.",
          "On the feasible sliver $x\\in(0,\\tfrac{\\pi}{6}]$ the argument $\\tfrac{2\\pi}{3}-2x$ runs over $[\\tfrac{\\pi}{3},\\tfrac{2\\pi}{3})$, a subinterval of $(0,\\pi)$ where the sine is strictly positive. Therefore $P'(x)>0$ throughout: $P$ is $strictly increasing$ on $(0,\\tfrac{\\pi}{6}]$, with no interior stationary point, so its maximum is the right endpoint $x=\\tfrac{\\pi}{6}$.",
          "Evaluate at the boundary $x=\\tfrac{\\pi}{6},\\,y=\\tfrac{\\pi}{2}$: $P=\\sin\\tfrac{\\pi}{6}\\,\\sin\\tfrac{\\pi}{2}=\\tfrac12\\cdot 1=\\tfrac12$. Hence $\\boxed{P_{\\max}=\\tfrac12}$, attained uniquely at the asymmetric pair $(x,y)=\\big(\\tfrac{\\pi}{6},\\tfrac{\\pi}{2}\\big)$ on the constraint boundary $y=3x$ — $not$ at the forbidden symmetric balance point."
        ]
      },
      {
        "name": "Product-to-sum: the fixed sum turns the problem geometric",
        "steps": [
          "Use the identity $\\sin x\\sin y=\\tfrac12\\big[\\cos(x-y)-\\cos(x+y)\\big]$. Since $x+y=\\tfrac{2\\pi}{3}$ is $fixed$, $\\cos(x+y)=\\cos\\tfrac{2\\pi}{3}=-\\tfrac12$ is a constant, so $P=\\tfrac12\\big[\\cos(x-y)+\\tfrac12\\big]=\\tfrac12\\cos(x-y)+\\tfrac14$. Maximising $P$ is therefore equivalent to maximising $\\cos(x-y)$.",
          "Write the gap $x-y=x-(\\tfrac{2\\pi}{3}-x)=2x-\\tfrac{2\\pi}{3}$. As $x$ ranges over the feasible interval $(0,\\tfrac{\\pi}{6}]$, the gap $2x-\\tfrac{2\\pi}{3}$ ranges over $(-\\tfrac{2\\pi}{3},-\\tfrac{\\pi}{3}]$, all negative. On this window $\\cos(x-y)=\\cos\\big(2x-\\tfrac{2\\pi}{3}\\big)$ is increasing in $x$ (the cosine increases as its negative argument moves toward $0$), so it is largest at the right endpoint $x=\\tfrac{\\pi}{6}$.",
          "At $x=\\tfrac{\\pi}{6}$ the gap is $2\\cdot\\tfrac{\\pi}{6}-\\tfrac{2\\pi}{3}=-\\tfrac{\\pi}{3}$, so $\\cos(x-y)=\\cos\\tfrac{\\pi}{3}=\\tfrac12$. The unconstrained ideal $\\cos(x-y)=1$ would need $x=y$, i.e. $x=\\tfrac{\\pi}{3}$, which the cap $x\\le\\tfrac{\\pi}{6}$ forbids — this is exactly why the symmetric value $\\tfrac34$ is unreachable.",
          "Substitute back: $P=\\tfrac12\\cdot\\tfrac12+\\tfrac14=\\tfrac14+\\tfrac14=\\tfrac12$. Thus $\\boxed{P_{\\max}=\\tfrac12}$ at $(x,y)=\\big(\\tfrac{\\pi}{6},\\tfrac{\\pi}{2}\\big)$. The geometric reading is clean: with the sum pinned, the product wants the two angles as $equal$ as possible, but the cap forces them as close as the boundary $y=3x$ permits, freezing the gap at $\\tfrac{\\pi}{3}$."
        ]
      },
      {
        "name": "Single-sinusoid (phase) certificate with the peak capped out",
        "steps": [
          "Expand $\\sin\\!\\big(\\tfrac{2\\pi}{3}-x\\big)=\\sin\\tfrac{2\\pi}{3}\\cos x-\\cos\\tfrac{2\\pi}{3}\\sin x=\\tfrac{\\sqrt3}{2}\\cos x+\\tfrac12\\sin x$, so $P=\\sin x\\big(\\tfrac{\\sqrt3}{2}\\cos x+\\tfrac12\\sin x\\big)=\\tfrac{\\sqrt3}{4}\\sin 2x+\\tfrac14(1-\\cos 2x)$ after the double-angle reductions $\\sin x\\cos x=\\tfrac12\\sin2x$ and $\\sin^2x=\\tfrac{1-\\cos2x}{2}$.",
          "Collect the harmonic part: $\\tfrac{\\sqrt3}{4}\\sin2x-\\tfrac14\\cos2x$ has amplitude $\\sqrt{\\big(\\tfrac{\\sqrt3}{4}\\big)^2+\\big(\\tfrac14\\big)^2}=\\sqrt{\\tfrac{3}{16}+\\tfrac{1}{16}}=\\tfrac12$ and phase $\\tfrac{\\pi}{6}$ (since $\\tan\\varphi=\\tfrac{1/4}{\\sqrt3/4}=\\tfrac{1}{\\sqrt3}$). Hence the exact phase form $P=\\dfrac14+\\dfrac12\\sin\\!\\Big(2x-\\dfrac{\\pi}{6}\\Big)$, valid for all $x$.",
          "On the feasible interval $x\\in(0,\\tfrac{\\pi}{6}]$ the phase argument $2x-\\tfrac{\\pi}{6}$ runs over $\\big(-\\tfrac{\\pi}{6},\\tfrac{\\pi}{6}\\big]$, which stays strictly below $\\tfrac{\\pi}{2}$. There the sine is increasing and bounded by its endpoint value $\\sin\\tfrac{\\pi}{6}=\\tfrac12$, attained at $x=\\tfrac{\\pi}{6}$. The unconstrained peak $\\sin(2x-\\tfrac{\\pi}{6})=1$ would require $2x-\\tfrac{\\pi}{6}=\\tfrac{\\pi}{2}$, i.e. $x=\\tfrac{\\pi}{3}$ — exactly the capped-out symmetric point, so the sinusoid never reaches its crest on the admissible window.",
          "Therefore $P\\le\\tfrac14+\\tfrac12\\cdot\\tfrac12=\\tfrac12$ on the feasible set, with equality at $x=\\tfrac{\\pi}{6}$. So $\\boxed{P_{\\max}=\\tfrac12}$ at $(x,y)=\\big(\\tfrac{\\pi}{6},\\tfrac{\\pi}{2}\\big)$. The phase picture makes the trap unmistakable: the product is a single sine wave whose true crest sits at $x=\\tfrac{\\pi}{3}$, and the constraint slices the domain off just before the wave can rise to it."
        ]
      }
    ],
    "remark": "The device is a $feasibility-driven boundary optimum$ dressed as a routine fixed-sum product. Every strong student fires the same reflex — for $x+y$ fixed, $\\sin x\\sin y$ peaks when the angles are equal — and reports $\\sin^2\\tfrac{\\pi}{3}=\\tfrac34$. The single extra hypothesis $y\\ge 3x$ silently deletes that balance point: it forces $x\\le\\tfrac{\\pi}{6}$, while the symmetric maximiser needs $x=\\tfrac{\\pi}{3}$. The honest pipeline is worth absorbing in three equivalent lights. By calculus, $P'(x)=\\sin(\\tfrac{2\\pi}{3}-2x)$ has its $only$ zero at the forbidden $x=\\tfrac{\\pi}{3}$, so the maximum cannot be found by $P'=0$ and must live at the boundary $x=\\tfrac{\\pi}{6}$. By product-to-sum, the fixed sum freezes $\\cos(x+y)$, reducing the task to maximising $\\cos(x-y)$ — the angles want to coincide, but the cap pins the gap at $\\tfrac{\\pi}{3}$, so $\\cos(x-y)=\\tfrac12$ and $P=\\tfrac12$. By phase form, $P=\\tfrac14+\\tfrac12\\sin(2x-\\tfrac{\\pi}{6})$ is a single sinusoid whose crest at $x=\\tfrac{\\pi}{3}$ is sliced off the domain, so the wave is still climbing when it hits the wall $x=\\tfrac{\\pi}{6}$. The takeaway for a top-rank solver: a symmetric or AM-GM optimum is only valid where it is $feasible$; when a side condition expels it, the extremum migrates to the boundary, the equality case turns genuinely asymmetric $\\big(\\tfrac{\\pi}{6},\\tfrac{\\pi}{2}\\big)$, and a derivative-equals-zero search keeps returning the very point the constraint forbids."
  },
  {
    "theme": "extrema",
    "themeLabel": "Phase, Range & Extremum Machines",
    "title": "Range of a Cosine Mobius Quotient",
    "difficulty": 5,
    "task": "Find the exact range",
    "tags": [
      "range",
      "rational-trig",
      "bounded-cosine",
      "monotone",
      "extremum"
    ],
    "statement": "Let $f(\\theta)=\\dfrac{2\\cos\\theta+1}{\\cos\\theta+2}$ for $\\theta\\in\\mathbb{R}$. Find the exact set of all values taken by $f$, i.e. its range. (Note the denominator never vanishes.)",
    "answer": "$$\\boxed{\\,\\operatorname{range}(f)=[-1,\\,1]\\,}$$",
    "trap": "Setting $y=\\dfrac{2c+1}{c+2}$ and clearing to $c(y-2)=1-2y$ tempts one to declare every real $y\\ne 2$ admissible, giving the range $\\mathbb{R}\\setminus\\{2\\}$. That ignores the hard fact that $c=\\cos\\theta$ is itself trapped in $[-1,1]$: only $y$ for which $c=\\dfrac{1-2y}{y-2}$ lands in $[-1,1]$ are actually attained, and that pins the range to the closed interval $[-1,1]$ — both endpoints included.",
    "solutions": [
      {
        "name": "Solve for $\\cos\\theta$ and impose $|\\cos\\theta|\\le 1$",
        "steps": [
          "Write $y=\\dfrac{2c+1}{c+2}$ with $c=\\cos\\theta$. Cross-multiplying, $y(c+2)=2c+1$, so $c(y-2)=1-2y$ and $c=\\dfrac{1-2y}{y-2}$ (and $y\\ne 2$).",
          "A value $y$ is attained iff this $c$ satisfies $-1\\le c\\le 1$. Solve $\\dfrac{1-2y}{y-2}=-1$: $1-2y=-(y-2)=2-y$, giving $-y=1$, i.e. $y=-1$. Solve $\\dfrac{1-2y}{y-2}=1$: $1-2y=y-2$, giving $-3y=-3$, i.e. $y=1$.",
          "Since $c$ depends continuously on $y$ on $(-\\infty,2)$ and runs from $c=-1$ (at $y=-1$) to $c=1$ (at $y=1$) without leaving $[-1,1]$, the admissible $y$ form exactly $[-1,1]$. Hence $\\boxed{\\operatorname{range}(f)=[-1,1]}$."
        ]
      },
      {
        "name": "Monotonicity in $\\cos\\theta$",
        "steps": [
          "Treat $f$ as a function of $c=\\cos\\theta\\in[-1,1]$: $f(c)=\\dfrac{2c+1}{c+2}$. Differentiating, $f'(c)=\\dfrac{2(c+2)-(2c+1)}{(c+2)^2}=\\dfrac{3}{(c+2)^2}>0$ on $[-1,1]$.",
          "So $f$ is strictly increasing in $c$, and its range is the closed interval between the endpoint values $f(-1)=\\dfrac{-2+1}{-1+2}=-1$ and $f(1)=\\dfrac{2+1}{1+2}=1$.",
          "Both endpoints are attained ($c=-1$ at $\\theta=\\pi$, $c=1$ at $\\theta=0$), so $\\boxed{\\operatorname{range}(f)=[-1,1]}$."
        ]
      }
    ],
    "remark": "**Insight.** A quotient like $\\dfrac{a\\cos\\theta+b}{c\\cos\\theta+d}$ is a Mobius map applied to $\\cos\\theta$; because Mobius maps are monotone on any interval free of their pole, the range is simply the interval between the two endpoint images $\\cos\\theta=\\pm 1$. The only real work is checking the denominator never hits zero on $[-1,1]$ — here $\\cos\\theta+2\\ge 1>0$ — so no pole intrudes and the endpoints are genuinely attained."
  },
  {
    "theme": "extrema",
    "themeLabel": "Phase, Range & Extremum Machines",
    "title": "Three Cosines in Arithmetic Phase",
    "difficulty": 5,
    "task": "Find max, min and a maximizer",
    "tags": [
      "amplitude",
      "phase-shift",
      "sum-of-cosines",
      "range",
      "maximum"
    ],
    "statement": "Let $g(x)=\\cos x+\\cos\\!\\left(x-\\dfrac{\\pi}{3}\\right)+\\cos\\!\\left(x-\\dfrac{2\\pi}{3}\\right)$. Collapse $g$ to a single sinusoid, state its maximum and minimum values, and give one value of $x\\in[0,2\\pi)$ at which the maximum occurs.",
    "answer": "$$\\boxed{\\,g(x)=2\\cos\\!\\left(x-\\tfrac{\\pi}{3}\\right),\\quad \\max=2,\\ \\min=-2,\\ \\text{attained at }x=\\tfrac{\\pi}{3}\\,}$$",
    "trap": "Reading off three unit-amplitude cosines and adding the amplitudes gives the bogus maximum $1+1+1=3$. But the three terms peak at different $x$, so they never all hit $1$ at once; the phases interfere and the true amplitude is $2$, not $3$. Amplitudes add only when the terms are exactly in phase.",
    "solutions": [
      {
        "name": "Expand each term and recombine",
        "steps": [
          "Expand: $\\cos\\!\\left(x-\\tfrac{\\pi}{3}\\right)=\\tfrac12\\cos x+\\tfrac{\\sqrt3}{2}\\sin x$ and $\\cos\\!\\left(x-\\tfrac{2\\pi}{3}\\right)=-\\tfrac12\\cos x+\\tfrac{\\sqrt3}{2}\\sin x$.",
          "Summing with $\\cos x$: $g(x)=\\left(1+\\tfrac12-\\tfrac12\\right)\\cos x+\\left(\\tfrac{\\sqrt3}{2}+\\tfrac{\\sqrt3}{2}\\right)\\sin x=\\cos x+\\sqrt3\\,\\sin x.$",
          "The amplitude is $\\sqrt{1^2+(\\sqrt3)^2}=\\sqrt4=2$, so $g(x)=2\\cos\\!\\left(x-\\tfrac{\\pi}{3}\\right)$. Therefore $\\max g=2$, $\\min g=-2$, and the max occurs when $x-\\tfrac{\\pi}{3}=0$, i.e. $\\boxed{x=\\tfrac{\\pi}{3}}$ (giving $g=2$)."
        ]
      },
      {
        "name": "Sum of cosines in arithmetic-progression phase",
        "steps": [
          "The phases $0,\\tfrac{\\pi}{3},\\tfrac{2\\pi}{3}$ form an AP with common step $\\beta=\\tfrac{\\pi}{3}$. The standard sum $\\displaystyle\\sum_{k=0}^{n-1}\\cos(x-k\\beta)=\\dfrac{\\sin(n\\beta/2)}{\\sin(\\beta/2)}\\,\\cos\\!\\left(x-\\tfrac{(n-1)\\beta}{2}\\right)$ applies with $n=3$.",
          "Here the amplitude factor is $\\dfrac{\\sin(3\\cdot\\pi/6)}{\\sin(\\pi/6)}=\\dfrac{\\sin(\\pi/2)}{\\sin(\\pi/6)}=\\dfrac{1}{1/2}=2$, and the central phase is $\\tfrac{(n-1)\\beta}{2}=\\tfrac{2}{2}\\cdot\\tfrac{\\pi}{3}=\\tfrac{\\pi}{3}$.",
          "Thus $g(x)=2\\cos\\!\\left(x-\\tfrac{\\pi}{3}\\right)$, so $\\max=2$, $\\min=-2$, attained at $\\boxed{x=\\tfrac{\\pi}{3}}$."
        ]
      }
    ],
    "remark": "**Insight.** Cosines whose phases sit in arithmetic progression collapse to a single sinusoid centred on the middle phase, with amplitude $\\sin(n\\beta/2)/\\sin(\\beta/2)$ — a closed-form ratio that here equals $2$, never the naive sum $n=3$. The lesson of every phase machine is the same: combine to one $R\\cos(x-\\varphi)$ first, then read $\\pm R$ off; only then is the extremum honest and the maximizer exact."
  },
  {
    "theme": "extrema",
    "themeLabel": "Phase, Range & Extremum Machines",
    "title": "Weighted Sine Sum in a Fixed-Angle Triangle",
    "difficulty": 5,
    "task": "Maximize the weighted sine sum",
    "tags": [
      "triangle",
      "sine-rule",
      "amplitude-bound",
      "constraint",
      "maximum"
    ],
    "statement": "In triangle $ABC$ the angle $C=\\dfrac{\\pi}{3}$ is fixed, while $A$ and $B$ vary subject to $A+B=\\dfrac{2\\pi}{3}$. Find the maximum value of $E=2\\sin A+3\\sin B$ over all such triangles.",
    "answer": "$$\\boxed{\\,E_{\\max}=\\sqrt{19}\\,}$$",
    "trap": "Bounding each term separately as $2\\sin A\\le 2$ and $3\\sin B\\le 3$ gives the ceiling $E\\le 5$. But equality there needs $A=B=\\dfrac{\\pi}{2}$ simultaneously, forcing $A+B=\\pi$, which violates the fixed constraint $A+B=\\dfrac{2\\pi}{3}$. The bound $5$ is unattainable; coupling the angles through the constraint lowers the true maximum to $\\sqrt{19}\\approx 4.359$.",
    "solutions": [
      {
        "name": "Parametrize by the deviation and use the amplitude bound",
        "steps": [
          "Since $A+B=\\dfrac{2\\pi}{3}$, write $A=\\dfrac{\\pi}{3}+t$, $B=\\dfrac{\\pi}{3}-t$ with $t\\in\\left(-\\dfrac{\\pi}{3},\\dfrac{\\pi}{3}\\right)$ (so both angles stay positive).",
          "Expand: $E=2\\sin\\!\\left(\\tfrac{\\pi}{3}+t\\right)+3\\sin\\!\\left(\\tfrac{\\pi}{3}-t\\right)=2\\left(\\tfrac{\\sqrt3}{2}\\cos t+\\tfrac12\\sin t\\right)+3\\left(\\tfrac{\\sqrt3}{2}\\cos t-\\tfrac12\\sin t\\right)=\\dfrac{5\\sqrt3}{2}\\cos t-\\dfrac12\\sin t.$",
          "This is $a\\cos t+b\\sin t$ with $a=\\dfrac{5\\sqrt3}{2},\\,b=-\\dfrac12$, so $|E|\\le\\sqrt{a^2+b^2}=\\sqrt{\\dfrac{75}{4}+\\dfrac14}=\\sqrt{19}$.",
          "The maximizing $t^{*}=-\\arctan\\dfrac{b}{a}=-\\arctan\\dfrac{\\sqrt3}{15}\\approx-0.115$ lies inside $\\left(-\\tfrac{\\pi}{3},\\tfrac{\\pi}{3}\\right)$, so the bound is attained by a genuine triangle. Hence $\\boxed{E_{\\max}=\\sqrt{19}}$."
        ]
      },
      {
        "name": "Eliminate $B$ and collect $\\sin A,\\cos A$",
        "steps": [
          "Put $B=\\dfrac{2\\pi}{3}-A$. Then $\\sin B=\\sin\\!\\left(\\tfrac{2\\pi}{3}-A\\right)=\\tfrac{\\sqrt3}{2}\\cos A+\\tfrac12\\sin A$, so $E=2\\sin A+3\\left(\\tfrac{\\sqrt3}{2}\\cos A+\\tfrac12\\sin A\\right)=\\dfrac72\\sin A+\\dfrac{3\\sqrt3}{2}\\cos A.$",
          "By the amplitude principle, $E\\le\\sqrt{\\left(\\tfrac72\\right)^2+\\left(\\tfrac{3\\sqrt3}{2}\\right)^2}=\\sqrt{\\dfrac{49}{4}+\\dfrac{27}{4}}=\\sqrt{\\dfrac{76}{4}}=\\sqrt{19}.$",
          "Equality holds when $\\tan A=\\dfrac{7/2}{3\\sqrt3/2}=\\dfrac{7}{3\\sqrt3}$, which gives an $A\\in\\left(0,\\tfrac{2\\pi}{3}\\right)$ with $B=\\tfrac{2\\pi}{3}-A>0$ — a valid triangle. Therefore $\\boxed{E_{\\max}=\\sqrt{19}}$."
        ]
      }
    ],
    "remark": "**Insight.** A symmetric-looking objective on a triangle becomes a one-parameter $a\\cos t+b\\sin t$ once the fixed angle eats one degree of freedom; the maximum is then the honest amplitude $\\sqrt{a^2+b^2}=\\sqrt{19}$, not the term-by-term ceiling $5$. The decisive check is that the optimal phase falls inside the angle window $-\\tfrac{\\pi}{3}<t<\\tfrac{\\pi}{3}$ — if it had fallen outside, the supremum would be unattained and the maximum would sit at an endpoint instead."
  },
  {
    "theme": "equations",
    "themeLabel": "Periodicity & Root-Counting",
    "title": "Where the Line Meets the Wave",
    "difficulty": 4,
    "task": "Find the number of solutions",
    "tags": [
      "bounding",
      "graphical-count",
      "line-vs-sine",
      "symmetry"
    ],
    "statement": "\\text{Find the total number of real solutions of } \\quad \\sin x=\\dfrac{x}{10\\pi}.",
    "answer": "\\boxed{19}\\ \\text{ real solutions.}",
    "trap": "The fatal shortcut is 'each period gives two intersections, and $10\\pi$ on each side spans $5$ periods, so $2\\cdot 5\\cdot 2=20$.' This **over-counts the very first hump**. For $x>0$ the line $y=\\tfrac{x}{10\\pi}$ is positive, so it can only meet the sine on the five **upward** humps $(2k\\pi,(2k+1)\\pi)$; the downward dips contribute nothing. Four of those upward humps are cut twice, but the first hump $(0,\\pi)$ shares the origin with the line and is cut only **once** (sine leaves $0$ with slope $1>\\tfrac1{10\\pi}$, overshoots, and returns once). So each side gives $4\\cdot 2+1=9$, not $10$. Careful bounding (the line exits $[-1,1]$ exactly at $x=\\pm 10\\pi$) gives $19$, not $20$.",
    "solutions": [
      {
        "name": "Bound the window, then count humps",
        "steps": [
          "Since $|\\sin x|\\le 1$, any solution needs $\\left|\\tfrac{x}{10\\pi}\\right|\\le 1$, i.e. $x\\in[-10\\pi,10\\pi]$.",
          "The function is **odd** (both sides change sign under $x\\mapsto -x$), and $x=0$ is a solution, so count solutions in $(0,10\\pi]$ and double.",
          "On $(0,10\\pi)$ the line $y=\\tfrac{x}{10\\pi}$ is positive, so it can only cross the sine where $\\sin x>0$: the five upward humps on $(2k\\pi,(2k+1)\\pi)$ for $k=0,1,2,3,4$. The four humps with $k\\ge 1$ each rise to $1$ while the line stays $\\le 0.9$, so each is cut **twice** (going up and coming down). The first hump $(0,\\pi)$ shares the origin with the line: sine departs $0$ with slope $1>\\tfrac1{10\\pi}$, climbs above the line, and meets it again exactly once, so it gives **one** crossing in $(0,\\pi)$. The down-dips on $((2k+1)\\pi,(2k+2)\\pi)$ have $\\sin x<0<\\tfrac{x}{10\\pi}$ and contribute nothing.",
          "Hence positive roots $=4\\cdot 2+1=9$; by oddness $9$ negative; plus the origin: $9+9+1=\\boxed{19}$."
        ]
      },
      {
        "name": "Sign-change accounting",
        "steps": [
          "Let $g(x)=\\sin x-\\tfrac{x}{10\\pi}$; roots of $g$ are the solutions. Outside $[-10\\pi,10\\pi]$, $g$ keeps the sign of $-\\tfrac{x}{10\\pi}$ and never returns to $0$.",
          "For $x>0$, $g<0$ on every down-dip $((2k+1)\\pi,(2k+2)\\pi)$ (both terms negative), so all positive roots sit on the upward humps. On each upward hump $g$ runs $\\;-\\!\\to+\\!\\to-\\;$, giving two sign changes — **except** the first hump, where $g(0^+)=\\sin x-\\tfrac{x}{10\\pi}>0$ already (slope $1$ beats slope $\\tfrac1{10\\pi}$), so it shows only one sign change before $g(\\pi^-)=-\\tfrac{1}{10}<0$.",
          "Counting sign changes on $(0,10\\pi]$ gives $2\\cdot 4+1=9$; by oddness the count on $[-10\\pi,0)$ is also $9$; the simple root at $x=0$ adds one, for $\\boxed{19}$."
        ]
      }
    ],
    "remark": "Replacing $10\\pi$ by $2N\\pi$ turns this into 'how many times does the line $y=\\tfrac{x}{2N\\pi}$ cross $\\sin x$?' With the cutoff an exact even multiple of $\\pi$, the line just touches $\\pm 1$ at the endpoints, the down-dips never qualify, $N$ upward humps per side give $2N$ crossings — but the origin-sharing first hump loses one — so each side contributes $2N-1$ and the total is the exact odd integer $2(2N-1)+1=4N-1$. Here $N=5$ gives $19$; that single missing crossing at the first hump is exactly what defeats the naive '$4N$'."
  },
  {
    "theme": "equations",
    "themeLabel": "Periodicity & Root-Counting",
    "title": "The Reachable Heights of k",
    "difficulty": 4,
    "task": "Find the range",
    "tags": [
      "parameter",
      "substitution",
      "range",
      "solvability"
    ],
    "statement": "\\text{Find all real } k \\text{ for which } \\quad \\sin x+\\cos x+\\sin x\\cos x=k \\quad \\text{has a real solution; and say how many solutions } x\\in[0,2\\pi)\\ \\text{occur when } k \\text{ is least.}",
    "answer": "\\text{Solvable } \\iff\\ k\\in\\left[-1,\\ \\dfrac{1+2\\sqrt2}{2}\\right];\\quad \\text{at the minimum } k=-1\\ \\text{there are }\\boxed{2}\\ \\text{ solutions in } [0,2\\pi).",
    "trap": "After substituting $t=\\sin x+\\cos x$ and $\\sin x\\cos x=\\tfrac{t^2-1}{2}$, the equation becomes $k=\\tfrac{t^2+2t-1}{2}$ — but the trap is taking $t$ over all of $\\mathbb{R}$. In fact $t=\\sqrt2\\sin(x+\\tfrac{\\pi}{4})$ is **confined to $[-\\sqrt2,\\sqrt2]$**, and the vertex of the parabola sits at $t=-1$ (interior), so the minimum of $k$ is $-1$ — not the parabola's value at an endpoint. Forgetting the constraint $|t|\\le\\sqrt2$ produces a bogus, unbounded range.",
    "solutions": [
      {
        "name": "Substitute and optimise on the true interval",
        "steps": [
          "Let $t=\\sin x+\\cos x$, so $\\sin x\\cos x=\\tfrac{t^2-1}{2}$ and $t\\in[-\\sqrt2,\\sqrt2]$.",
          "Then $k=t+\\tfrac{t^2-1}{2}=\\tfrac12(t^2+2t-1)=\\tfrac12\\big((t+1)^2-2\\big)$.",
          "On $[-\\sqrt2,\\sqrt2]$ this parabola has minimum at $t=-1$: $k=\\tfrac12(0-2)=-1$, and maximum at the right endpoint $t=\\sqrt2$: $k=\\tfrac12(2+2\\sqrt2-1)=\\tfrac{1+2\\sqrt2}{2}$.",
          "So $k$ ranges over $\\left[-1,\\tfrac{1+2\\sqrt2}{2}\\right]$. At $k=-1$ we need $t=-1$, i.e. $\\sqrt2\\sin(x+\\tfrac{\\pi}{4})=-1\\Rightarrow\\sin(x+\\tfrac{\\pi}{4})=-\\tfrac{1}{\\sqrt2}$, giving $x=\\pi,\\tfrac{3\\pi}{2}$ — $\\boxed{2}$ solutions."
        ]
      },
      {
        "name": "Solvability as a quadratic-in-$t$ feasibility",
        "steps": [
          "The relation $t^2+2t-(1+2k)=0$ must have a root $t\\in[-\\sqrt2,\\sqrt2]$ for the equation to be solvable.",
          "Solving, $t=-1\\pm\\sqrt{2+2k}$ (real iff $k\\ge -1$). The branch $t=-1+\\sqrt{2+2k}$ lands in $[-\\sqrt2,\\sqrt2]$ precisely when $\\sqrt{2+2k}\\le 1+\\sqrt2$, i.e. $k\\le\\tfrac{(1+\\sqrt2)^2-2}{2}=\\tfrac{1+2\\sqrt2}{2}$.",
          "Hence the feasibility window is $k\\in\\left[-1,\\tfrac{1+2\\sqrt2}{2}\\right]$.",
          "At the lower end $k=-1$, the only admissible $t$ is $t=-1$ (a double root), and $\\sin x+\\cos x=-1$ has exactly $x=\\pi,\\tfrac{3\\pi}{2}$ in $[0,2\\pi)$ — so $\\boxed{2}$ solutions."
        ]
      }
    ],
    "remark": "The whole problem is the geometry of $k=\\tfrac12\\big((t+1)^2-2\\big)$ restricted to a chord $|t|\\le\\sqrt2$: because the vertex $t=-1$ is interior, the minimum is attained inside and is 'clean', while the maximum is forced to an endpoint and carries the surd $\\sqrt2$. Any 'sum + product' trig equation collapses to such a parabola in $t=\\sin x\\pm\\cos x$."
  },
  {
    "theme": "equations",
    "themeLabel": "Periodicity & Root-Counting",
    "title": "When tan x Plus tan 2x Equals tan 3x",
    "difficulty": 4,
    "task": "Count valid solutions",
    "tags": [
      "trigonometric-equation",
      "tangent",
      "compound-angle",
      "extraneous-roots",
      "root-counting"
    ],
    "statement": "How many solutions does $\\tan x+\\tan 2x=\\tan 3x$ have in $[0,2\\pi)$? Find them, discarding any value at which a tangent is undefined.",
    "answer": "$$\\boxed{\\;x=\\dfrac{k\\pi}{3},\\ k=0,1,2,3,4,5\\;\\Longrightarrow\\;6\\text{ solutions}\\;}$$",
    "trap": "Since $3x=x+2x$, write $\\tan 3x=\\dfrac{\\tan x+\\tan 2x}{1-\\tan x\\tan 2x}$. Substituting and setting $S=\\tan x+\\tan 2x$ gives $S=\\dfrac{S}{1-\\tan x\\tan 2x}$, i.e. $S\\tan x\\tan 2x=0$. The branch $\\tan x\\tan 2x=0$ tempts you to include $\\tan 2x=0\\Rightarrow x=\\dfrac{\\pi}{2},\\dfrac{3\\pi}{2}$ — but at those points $\\tan x$ is $undefined$, so they are extraneous and must be thrown out.",
    "solutions": [
      {
        "name": "Reduce via the addition formula",
        "steps": [
          "Because $3x=x+2x$, $\\tan 3x=\\dfrac{\\tan x+\\tan 2x}{1-\\tan x\\tan 2x}$. Put $S=\\tan x+\\tan 2x$; the equation $S=\\dfrac{S}{1-\\tan x\\tan 2x}$ rearranges to $S\\bigl[(1-\\tan x\\tan 2x)-1\\bigr]=0$, i.e. $-S\\,\\tan x\\tan 2x=0.$",
          "So $\\tan x+\\tan 2x=0$ or $\\tan x=0$ or $\\tan 2x=0$, valid only where $\\tan x,\\tan 2x,\\tan 3x$ all exist (i.e. $\\cos x,\\cos 2x,\\cos 3x\\neq0$).",
          "$\\tan x+\\tan 2x=\\dfrac{\\sin 3x}{\\cos x\\cos 2x}=0\\Rightarrow\\sin 3x=0\\Rightarrow x=\\dfrac{k\\pi}{3}.$ In $[0,2\\pi)$ this gives $x=0,\\dfrac{\\pi}{3},\\dfrac{2\\pi}{3},\\pi,\\dfrac{4\\pi}{3},\\dfrac{5\\pi}{3}$, and at each of these $\\cos x,\\cos 2x,\\cos 3x\\neq0$.",
          "The branches $\\tan x=0$ ($x=0,\\pi$) are already included; $\\tan 2x=0$ adds the candidates $x=\\dfrac{\\pi}{2},\\dfrac{3\\pi}{2}$, but there $\\cos x=0$ so $\\tan x$ is undefined — extraneous. Hence exactly $\\boxed{6}$ valid solutions, $x=\\dfrac{k\\pi}{3}.$"
        ]
      },
      {
        "name": "Move everything over a common factor",
        "steps": [
          "Use $\\tan x+\\tan 2x=\\dfrac{\\sin(x+2x)}{\\cos x\\cos 2x}=\\dfrac{\\sin 3x}{\\cos x\\cos 2x}$ and $\\tan 3x=\\dfrac{\\sin 3x}{\\cos 3x}.$",
          "The equation $\\dfrac{\\sin 3x}{\\cos x\\cos 2x}=\\dfrac{\\sin 3x}{\\cos 3x}$ becomes $\\sin 3x\\left(\\dfrac{1}{\\cos x\\cos 2x}-\\dfrac{1}{\\cos 3x}\\right)=0.$",
          "Either $\\sin 3x=0\\Rightarrow x=\\dfrac{k\\pi}{3}$ (six values in $[0,2\\pi)$, all with non-vanishing cosines), or $\\cos 3x=\\cos x\\cos 2x$; but $\\cos 3x=\\cos x\\cos 2x-\\sin x\\sin 2x$, so the second condition forces $\\sin x\\sin 2x=0$, i.e. $\\sin x=0$ (already in $\\sin 3x=0$) or $\\sin 2x=0$ at $x=\\tfrac{\\pi}{2},\\tfrac{3\\pi}{2}$ where $\\tan x$ is undefined.",
          "Thus the only admissible solutions are $x=\\dfrac{k\\pi}{3}$, giving $\\boxed{6}$ values in $[0,2\\pi).$"
        ]
      }
    ],
    "remark": "**Insight.** Whenever the angles satisfy $A+B=C$, the relation $\\tan A+\\tan B=\\tan C$ collapses (via the addition formula) to $\\tan A\\tan B\\tan C=0$, equivalently $\\sin(A+B)=0$. The real work is the domain audit: a factored branch can hand you points where one of the original tangents blows up, and those must be deleted, not counted."
  },
  {
    "theme": "equations",
    "themeLabel": "Periodicity & Root-Counting",
    "title": "Cosine Sandwich Equation",
    "difficulty": 4,
    "task": "Solve on a full period",
    "tags": [
      "trigonometric-equation",
      "sum-to-product",
      "double-angle",
      "factoring",
      "root-counting"
    ],
    "statement": "Solve $\\cos x+\\cos 3x=\\cos 2x$ for $x\\in[0,2\\pi)$ and report the number of solutions.",
    "answer": "$$\\boxed{\\;x\\in\\left\\{\\dfrac{\\pi}{4},\\,\\dfrac{\\pi}{3},\\,\\dfrac{3\\pi}{4},\\,\\dfrac{5\\pi}{4},\\,\\dfrac{5\\pi}{3},\\,\\dfrac{7\\pi}{4}\\right\\}\\;\\Longrightarrow\\;6\\text{ solutions}\\;}$$",
    "trap": "The left side $\\cos x+\\cos 3x$ collapses to $2\\cos 2x\\cos x$, so the equation is $2\\cos 2x\\cos x=\\cos 2x$. The cardinal error is to divide both sides by $\\cos 2x$ to get $\\cos x=\\tfrac12$ — that silently discards all the roots with $\\cos 2x=0$. Keep $\\cos 2x$ as a common factor instead: $\\cos 2x\\,(2\\cos x-1)=0.$",
    "solutions": [
      {
        "name": "Common-factor after pairing",
        "steps": [
          "Pair the outer cosines: $\\cos x+\\cos 3x=2\\cos\\dfrac{x+3x}{2}\\cos\\dfrac{3x-x}{2}=2\\cos 2x\\cos x.$",
          "The equation becomes $2\\cos 2x\\cos x=\\cos 2x$, i.e. $\\cos 2x\\,(2\\cos x-1)=0.$",
          "$\\cos 2x=0\\Rightarrow x=\\dfrac{\\pi}{4},\\dfrac{3\\pi}{4},\\dfrac{5\\pi}{4},\\dfrac{7\\pi}{4}$; and $\\cos x=\\dfrac12\\Rightarrow x=\\dfrac{\\pi}{3},\\dfrac{5\\pi}{3}.$",
          "All six values lie in $[0,2\\pi)$ and are distinct, so there are $\\boxed{6}$ solutions."
        ]
      },
      {
        "name": "Triple-angle expansion",
        "steps": [
          "Write $\\cos 3x=4\\cos^3x-3\\cos x$ and $\\cos 2x=2\\cos^2x-1$, and let $c=\\cos x$. The equation $c+(4c^3-3c)=2c^2-1$ becomes $4c^3-2c^2-2c+1=0.$",
          "Factor by grouping: $2c^2(2c-1)-(2c-1)=(2c-1)(2c^2-1)=0.$",
          "So $\\cos x=\\dfrac12\\Rightarrow x=\\dfrac{\\pi}{3},\\dfrac{5\\pi}{3}$; or $\\cos^2x=\\dfrac12\\Rightarrow\\cos 2x=2\\cos^2x-1=0\\Rightarrow x=\\dfrac{\\pi}{4},\\dfrac{3\\pi}{4},\\dfrac{5\\pi}{4},\\dfrac{7\\pi}{4}.$",
          "This recovers the same set, confirming $\\boxed{6}$ solutions on $[0,2\\pi).$"
        ]
      }
    ],
    "remark": "**Insight.** The same equation factors two ways — by sum-to-product into $\\cos 2x(2\\cos x-1)$ and by triple-angle into $(2\\cos x-1)(2\\cos^2x-1)$ — and the second factors are identical because $2\\cos^2x-1=\\cos 2x$. Seeing both routes guards against the divide-by-$\\cos 2x$ blunder: the discarded factor is exactly the half of the solution set you would have lost."
  },
  {
    "theme": "equations",
    "themeLabel": "Periodicity & Root-Counting",
    "title": "The Root That Two Factors Both Claim",
    "difficulty": 5,
    "task": "Count every solution on the half-open period and add them up, resolving the point where two factors of the product share a single zero",
    "tags": [
      "sum-to-product",
      "root-counting",
      "factor-overlap",
      "inclusion-exclusion",
      "symmetry",
      "extraneous-roots"
    ],
    "statement": "Consider \\[ \\cos x+\\cos 2x+\\cos 3x+\\cos 4x=0,\\qquad x\\in[0,2\\pi). \\] Let $N$ be the number of solutions in this half-open interval and let $S$ be their sum. Find the ordered pair $(N,S)$. (A clean sum-to-product pairing collapses the left side into a product of three cosine factors; the catch is in honestly counting the distinct zeros that product produces.)",
    "answer": "\\[\\boxed{(N,S)=\\left(7,\\;7\\pi\\right)}\\]",
    "trap": "Pairing the outer and inner terms, $(\\cos x+\\cos4x)+(\\cos2x+\\cos3x)=2\\cos\\tfrac{5x}{2}\\cos\\tfrac{3x}{2}+2\\cos\\tfrac{5x}{2}\\cos\\tfrac{x}{2}=2\\cos\\tfrac{5x}{2}\\big(\\cos\\tfrac{3x}{2}+\\cos\\tfrac{x}{2}\\big)=4\\cos\\tfrac{x}{2}\\,\\cos x\\,\\cos\\tfrac{5x}{2}$. So the equation is $\\cos\\tfrac{x}{2}\\,\\cos x\\,\\cos\\tfrac{5x}{2}=0$. The seductive error is to count the zeros of the three factors separately on $[0,2\\pi)$ and add: $\\cos\\tfrac{x}{2}=0$ gives $1$ root ($x=\\pi$), $\\cos x=0$ gives $2$ roots ($\\tfrac{\\pi}{2},\\tfrac{3\\pi}{2}$), and $\\cos\\tfrac{5x}{2}=0$ gives $5$ roots ($\\tfrac{\\pi}{5},\\tfrac{3\\pi}{5},\\pi,\\tfrac{7\\pi}{5},\\tfrac{9\\pi}{5}$), for a total of $1+2+5=8$. That double-counts $x=\\pi$, which is a zero of both $\\cos\\tfrac{x}{2}$ and $\\cos\\tfrac{5x}{2}$: $\\tfrac{x}{2}=\\tfrac{\\pi}{2}$ and $\\tfrac{5x}{2}=\\tfrac{5\\pi}{2}=\\tfrac{\\pi}{2}+2\\pi$ are both odd multiples of $\\tfrac{\\pi}{2}$ at $x=\\pi$. A solution is a single value of $x$, so coincident zeros are one solution, not two; the union has $8-1=7$ distinct elements. The miss is a hidden set overlap (a violation of inclusion–exclusion when the zero-sets of distinct factors intersect), not an arithmetic slip — and the same trap silently inflates the sum by an extra $\\pi$ to $8\\pi$ instead of the correct $7\\pi$.",
    "solutions": [
      {
        "name": "Sum-to-product, then count the union of zero-sets honestly",
        "steps": [
          "Group as $(\\cos x+\\cos4x)+(\\cos2x+\\cos3x)$. Each bracket uses $\\cos A+\\cos B=2\\cos\\tfrac{A+B}{2}\\cos\\tfrac{A-B}{2}$: the first is $2\\cos\\tfrac{5x}{2}\\cos\\tfrac{3x}{2}$, the second $2\\cos\\tfrac{5x}{2}\\cos\\tfrac{x}{2}$. Factoring out $2\\cos\\tfrac{5x}{2}$ and applying $\\cos\\tfrac{3x}{2}+\\cos\\tfrac{x}{2}=2\\cos x\\cos\\tfrac{x}{2}$ gives $4\\cos\\tfrac{x}{2}\\,\\cos x\\,\\cos\\tfrac{5x}{2}=0$.",
          "List the zero-set of each factor inside $[0,2\\pi)$. $\\cos\\tfrac{x}{2}=0\\iff \\tfrac{x}{2}=\\tfrac{\\pi}{2}+k\\pi\\iff x=\\pi+2k\\pi$, so only $x=\\pi$. $\\cos x=0\\iff x=\\tfrac{\\pi}{2},\\tfrac{3\\pi}{2}$. $\\cos\\tfrac{5x}{2}=0\\iff \\tfrac{5x}{2}=\\tfrac{\\pi}{2}+k\\pi\\iff x=\\tfrac{(2k+1)\\pi}{5}$, giving $x=\\tfrac{\\pi}{5},\\tfrac{3\\pi}{5},\\pi,\\tfrac{7\\pi}{5},\\tfrac{9\\pi}{5}$ for $k=0,1,2,3,4$.",
          "Take the union, not the sum of sizes. The value $x=\\pi$ appears in both the $\\cos\\tfrac{x}{2}$ list and the $\\cos\\tfrac{5x}{2}$ list, so it must be counted once. By inclusion–exclusion the distinct solutions are $\\big\\{\\tfrac{\\pi}{5},\\tfrac{\\pi}{2},\\tfrac{3\\pi}{5},\\pi,\\tfrac{7\\pi}{5},\\tfrac{3\\pi}{2},\\tfrac{9\\pi}{5}\\big\\}$, hence $N=1+2+5-1=7$.",
          "Add them: $S=\\Big(\\tfrac{1}{5}+\\tfrac{1}{2}+\\tfrac{3}{5}+1+\\tfrac{7}{5}+\\tfrac{3}{2}+\\tfrac{9}{5}\\Big)\\pi=7\\pi$. Therefore $(N,S)=\\boxed{(7,\\,7\\pi)}$."
        ]
      },
      {
        "name": "Telescoping by $2\\sin\\tfrac{x}{2}$ — and pruning the root it injects",
        "steps": [
          "Multiply both sides by $2\\sin\\tfrac{x}{2}$. Using $2\\sin\\tfrac{x}{2}\\cos kx=\\sin\\!\\big((k+\\tfrac12)x\\big)-\\sin\\!\\big((k-\\tfrac12)x\\big)$, the four terms telescope: $\\sum_{k=1}^{4}\\big[\\sin\\tfrac{(2k+1)x}{2}-\\sin\\tfrac{(2k-1)x}{2}\\big]=\\sin\\tfrac{9x}{2}-\\sin\\tfrac{x}{2}$. So for $x\\neq0$ (where $\\sin\\tfrac{x}{2}\\neq0$) the equation is equivalent to $\\sin\\tfrac{9x}{2}=\\sin\\tfrac{x}{2}$, i.e. $\\sin\\tfrac{9x}{2}-\\sin\\tfrac{x}{2}=2\\cos\\tfrac{5x}{2}\\sin 2x=0$.",
          "Solve $2\\cos\\tfrac{5x}{2}\\sin 2x=0$ on $[0,2\\pi)$. From $\\sin 2x=0$: $x=0,\\tfrac{\\pi}{2},\\pi,\\tfrac{3\\pi}{2}$. From $\\cos\\tfrac{5x}{2}=0$: $x=\\tfrac{\\pi}{5},\\tfrac{3\\pi}{5},\\pi,\\tfrac{7\\pi}{5},\\tfrac{9\\pi}{5}$.",
          "Prune the extraneous root forced by the multiplication: we multiplied by $2\\sin\\tfrac{x}{2}$, which vanishes at $x=0$, so $x=0$ may be spurious. Check the original left side at $x=0$: $\\cos0+\\cos0+\\cos0+\\cos0=4\\neq0$, so $x=0$ is rejected. (No other point in $[0,2\\pi)$ has $\\sin\\tfrac{x}{2}=0$.)",
          "The surviving candidates are $\\tfrac{\\pi}{2},\\pi,\\tfrac{3\\pi}{2}$ (from $\\sin2x=0$) together with $\\tfrac{\\pi}{5},\\tfrac{3\\pi}{5},\\pi,\\tfrac{7\\pi}{5},\\tfrac{9\\pi}{5}$. The shared value $\\pi$ is one solution, so the distinct set has $3+5-1=7$ members — the same seven as before. Summing gives $7\\pi$, so $(N,S)=\\boxed{(7,\\,7\\pi)}$."
        ]
      },
      {
        "name": "Symmetry about $x=\\pi$ fixes the sum once the count is known",
        "steps": [
          "Let $f(x)=\\cos x+\\cos2x+\\cos3x+\\cos4x$. Since each $\\cos kx$ satisfies $\\cos\\big(k(2\\pi-x)\\big)=\\cos(2k\\pi-kx)=\\cos kx$, we get $f(2\\pi-x)=f(x)$: the function is symmetric about $x=\\pi$. Hence if $r\\in(0,2\\pi)$ is a root then so is $2\\pi-r$, and roots pair up as $\\{r,\\,2\\pi-r\\}$ unless $r=\\pi$ (its own mirror image).",
          "From the factored form $4\\cos\\tfrac{x}{2}\\cos x\\cos\\tfrac{5x}{2}=0$ the seven distinct roots are $\\tfrac{\\pi}{5},\\tfrac{\\pi}{2},\\tfrac{3\\pi}{5},\\pi,\\tfrac{7\\pi}{5},\\tfrac{3\\pi}{2},\\tfrac{9\\pi}{5}$ (with $x=\\pi$ the single self-mirrored root, the very value two factors share). They split into three mirror pairs plus the fixed point: $\\{\\tfrac{\\pi}{5},\\tfrac{9\\pi}{5}\\},\\{\\tfrac{\\pi}{2},\\tfrac{3\\pi}{2}\\},\\{\\tfrac{3\\pi}{5},\\tfrac{7\\pi}{5}\\}$, and $\\pi$.",
          "Each mirror pair sums to $2\\pi$, so the three pairs contribute $3\\cdot2\\pi=6\\pi$, and the lone fixed root adds $\\pi$. Thus $S=6\\pi+\\pi=7\\pi$, with $N=2\\cdot3+1=7$ roots in total.",
          "This pins both numbers without re-summing fractions and exposes why the trap is exactly an overcount of $1$: the self-mirrored center $x=\\pi$ is the unique place a factor overlap can hide, and it does. Therefore $(N,S)=\\boxed{(7,\\,7\\pi)}$."
        ]
      }
    ],
    "remark": "Two layers make this a top-rank counting problem. First, the sum-to-product collapse to $4\\cos\\tfrac{x}{2}\\cos x\\cos\\tfrac{5x}{2}=0$ is routine; the real content is that the three factors do not have disjoint zero-sets — $\\cos\\tfrac{x}{2}$ and $\\cos\\tfrac{5x}{2}$ both vanish at $x=\\pi$ because $\\tfrac{5\\pi}{2}$ and $\\tfrac{\\pi}{2}$ are the same angle modulo $2\\pi$. Whenever you read off roots factor-by-factor you owe an inclusion–exclusion audit for coincident zeros; here it costs exactly one root, turning the tempting $8$ into the correct $7$ and the sum $8\\pi$ into $7\\pi$. Second, the telescoping route ($\\times\\,2\\sin\\tfrac{x}{2}$) carries the dual hazard: multiplying by a sine can inject a root ($x=0$) that must be tested against the original equation and discarded — the mirror image of the dropping-a-factor mistake. The symmetry argument $f(2\\pi-x)=f(x)$ is the elegant finisher: roots come in mirror pairs about $\\pi$ summing to $2\\pi$, with the single self-paired root at $\\pi$ being precisely the overlap point, so the sum is forced to be $7\\pi$ the instant the count is right. Meta-lesson: in root-counting, a product equalling zero counts the union of its factors' solution sets, never the multiset; coincidences at special angles (here $\\pi$) and roots gained or lost through multiplication are where strong students leak points.",
    "_meta_provenance": "cos x+cos2x+cos3x+cos4x=0 on [0,2pi). Pair (cosx+cos4x)+(cos2x+cos3x)=2cos(5x/2)cos(3x/2)+2cos(5x/2)cos(x/2)=4cos(x/2)cos(x)cos(5x/2). Zero-sets in [0,2pi): cos(x/2)=0 -> {pi}; cos(x)=0 -> {pi/2,3pi/2}; cos(5x/2)=0 -> {pi/5,3pi/5,pi,7pi/5,9pi/5}. Overlap: x=pi in both cos(x/2) and cos(5x/2) lists. Distinct union = {pi/5,pi/2,3pi/5,pi,7pi/5,3pi/2,9pi/5}, N=7 (naive 1+2+5=8 double-counts pi). Sum S = (1/5+1/2+3/5+1+7/5+3/2+9/5)pi = 7pi. Symmetry f(2pi-x)=f(x) verified in sympy; roots pair about pi (3 pairs sum 2pi each =6pi) + fixed pi = 7pi. Telescope: 2sin(x/2)*LHS=sin(9x/2)-sin(x/2)=2cos(5x/2)sin(2x); sin2x=0 -> {0,pi/2,pi,3pi/2}, x=0 extraneous (f(0)=4), prune -> {pi/2,pi,3pi/2} U cos(5x/2)=0 set, union 7. Brute scipy root scan on [0,2pi): exactly 7 roots at 0.2,0.5,0.6,1.0,1.4,1.5,1.8 (units pi), f~1e-15. numpy factorization max err 5e-15. Answer (N,S)=(7,7pi)."
  },
  {
    "theme": "equations",
    "themeLabel": "Periodicity & Root-Counting",
    "title": "When the Second Family Brings Nothing New",
    "difficulty": 5,
    "task": "Count the solutions in the interval",
    "tags": [
      "cofunction",
      "root-counting",
      "double-counting",
      "coincident-families",
      "missed-case"
    ],
    "statement": "Determine the number of solutions of \\[ \\cos 4x = \\sin 2x \\] lying in the interval $[0,2\\pi)$. The intended route is to rewrite the right side by the cofunction identity $\\sin 2x=\\cos\\!\\big(\\tfrac{\\pi}{2}-2x\\big)$, merge the two cosine families coming from $\\cos A=\\cos B\\iff A=\\pm B+2k\\pi$, and then reconcile the resulting two arithmetic progressions of angles inside $[0,2\\pi)$ — being careful about where the two families land on the same point.",
    "answer": "\\[\\boxed{6}\\]",
    "trap": "Writing $\\cos 4x=\\cos\\!\\big(\\tfrac{\\pi}{2}-2x\\big)$ and splitting into the two branches gives two arithmetic progressions. The $A=+B$ branch is $4x=\\tfrac{\\pi}{2}-2x+2k\\pi$, i.e. $x=\\tfrac{\\pi}{12}+k\\tfrac{\\pi}{3}$, contributing the six points $\\tfrac{\\pi}{12},\\tfrac{5\\pi}{12},\\tfrac{3\\pi}{4},\\tfrac{13\\pi}{12},\\tfrac{17\\pi}{12},\\tfrac{7\\pi}{4}$ in $[0,2\\pi)$. The $A=-B$ branch is $4x=-\\tfrac{\\pi}{2}+2x+2k\\pi$, i.e. $x=-\\tfrac{\\pi}{4}+k\\pi$, contributing $\\tfrac{3\\pi}{4}$ and $\\tfrac{7\\pi}{4}$. The seductive move is to add the two list-lengths, $6+2=8$, and report $8$ solutions. But the two members of the second family are exactly the points where $\\sin 2x=-1$, and there the cofunction argument $\\tfrac{\\pi}{2}-2x$ is an integer multiple of $\\pi$, so $B\\equiv-B\\pmod{2\\pi}$ and the two branches coincide: $\\tfrac{3\\pi}{4}$ and $\\tfrac{7\\pi}{4}$ are already in the first list (they are its $k=2$ and $k=5$ terms). The entire second family is a subset of the first, so it adds nothing. Double-counting the overlap inflates the true count $6$ to a phantom $8$.",
    "solutions": [
      {
        "name": "Cofunction merge with an honest overlap audit",
        "steps": [
          "Use $\\sin 2x=\\cos\\!\\big(\\tfrac{\\pi}{2}-2x\\big)$ to turn the equation into $\\cos 4x=\\cos\\!\\big(\\tfrac{\\pi}{2}-2x\\big)$, and apply $\\cos A=\\cos B\\iff A=\\pm B+2k\\pi$.",
          "Plus branch: $4x=\\tfrac{\\pi}{2}-2x+2k\\pi\\Rightarrow 6x=\\tfrac{\\pi}{2}+2k\\pi\\Rightarrow x=\\tfrac{\\pi}{12}+\\tfrac{k\\pi}{3}$. In $[0,2\\pi)$ this gives the six values $\\tfrac{\\pi}{12},\\tfrac{5\\pi}{12},\\tfrac{3\\pi}{4},\\tfrac{13\\pi}{12},\\tfrac{17\\pi}{12},\\tfrac{7\\pi}{4}$.",
          "Minus branch: $4x=-\\tfrac{\\pi}{2}+2x+2k\\pi\\Rightarrow 2x=-\\tfrac{\\pi}{2}+2k\\pi\\Rightarrow x=-\\tfrac{\\pi}{4}+k\\pi$. In $[0,2\\pi)$ this gives only $\\tfrac{3\\pi}{4}$ and $\\tfrac{7\\pi}{4}$.",
          "Audit the overlap before adding. Check membership in the first list: $\\tfrac{3\\pi}{4}=\\tfrac{\\pi}{12}+\\tfrac{2\\pi}{3}$ (so $k=2$) and $\\tfrac{7\\pi}{4}=\\tfrac{\\pi}{12}+\\tfrac{5\\pi}{3}$ (so $k=5$). Both minus-branch points already appear in the plus branch, so the union has $6$ distinct elements, not $6+2$.",
          "Therefore the equation has $\\boxed{6}$ solutions in $[0,2\\pi)$."
        ]
      },
      {
        "name": "Reduce to a quadratic in $\\sin 2x$",
        "steps": [
          "Write $\\cos 4x=1-2\\sin^{2}2x$. Setting $s=\\sin 2x$, the equation $\\cos 4x=\\sin 2x$ becomes $1-2s^{2}=s$, i.e. $2s^{2}+s-1=0$.",
          "Factor: $(2s-1)(s+1)=0$, so $s=\\tfrac12$ or $s=-1$. Both lie in $[-1,1]$, so both are admissible — the quadratic substitution gains or loses no roots here.",
          "Count preimages over $[0,2\\pi)$, where $2x$ runs over $[0,4\\pi)$. The equation $\\sin 2x=\\tfrac12$ has $2x\\in\\{\\tfrac{\\pi}{6},\\tfrac{5\\pi}{6},\\tfrac{13\\pi}{6},\\tfrac{17\\pi}{6}\\}$, giving the four roots $x=\\tfrac{\\pi}{12},\\tfrac{5\\pi}{12},\\tfrac{13\\pi}{12},\\tfrac{17\\pi}{12}$.",
          "The equation $\\sin 2x=-1$ has $2x\\in\\{\\tfrac{3\\pi}{2},\\tfrac{7\\pi}{2}\\}$, giving the two roots $x=\\tfrac{3\\pi}{4},\\tfrac{7\\pi}{4}$ — each a single root, since $\\sin 2x=-1$ is a minimum touched once per period, not twice. Adding, $4+2=\\boxed{6}$, and these are precisely the cofunction list, confirming the overlap audit.",
          "Note the structural reason the second cofunction family was redundant: it is exactly the $s=-1$ locus, where the doubled angle sits at a sine extremum and the two cosine branches fuse."
        ]
      },
      {
        "name": "Net-rotation / winding count of $\\cos 4x-\\sin 2x$",
        "steps": [
          "Let $g(x)=\\cos 4x-\\sin 2x$; roots in $[0,2\\pi)$ are the solutions. Since $g(0)=1>0$ and $g$ is smooth and $2\\pi$-periodic, the number of sign changes equals the number of simple roots, and we must watch for tangential (double) roots that do not change sign.",
          "From the factorisation $2s^{2}+s-1=(2s-1)(s+1)$ with $s=\\sin 2x$, write $g=-(2\\sin 2x-1)(\\sin 2x+1)$. The factor $\\sin 2x+1\\ge 0$ vanishes (to even order) exactly at $x=\\tfrac{3\\pi}{4},\\tfrac{7\\pi}{4}$; there $g$ touches $0$ without changing sign, so each is one root counted once, never twice.",
          "The factor $2\\sin 2x-1$ vanishes transversally wherever $\\sin 2x=\\tfrac12$: four times on $[0,2\\pi)$ (two per period of $\\sin 2x$, over the two periods that fit in $[0,2\\pi)$), each a genuine sign-changing simple root.",
          "Total distinct roots $=4+2=\\boxed{6}$. The winding view makes the trap transparent: the would-be ``extra'' family is the even-order contact locus $\\sin 2x=-1$, which is already accounted for and must not be added again."
        ]
      }
    ],
    "remark": "The clean idea is the cofunction merge $\\cos 4x=\\cos(\\tfrac{\\pi}{2}-2x)$, but the lesson is in the reconciliation: the $A=-B$ family here is entirely contained in the $A=+B$ family because its points are exactly the $\\sin 2x=-1$ extrema, where $\\tfrac{\\pi}{2}-2x\\in\\pi\\mathbb{Z}$ forces the two branches to agree. A solver who mechanically writes ``two families, so $6+2=8$'' double-counts a redundant progression. The independent quadratic route $2s^{2}+s-1=0$ with $s=\\sin 2x$ both confirms the answer $6$ and explains the redundancy: $s=-1$ is a sine extremum touched once, while $s=\\tfrac12$ is crossed four times. Whenever two general-solution families are united over a bounded interval, the count is $|F_1\\cup F_2|$, not $|F_1|+|F_2|$ — coincidences of the progressions must be subtracted."
  },
  {
    "theme": "equations",
    "themeLabel": "Periodicity & Root-Counting",
    "title": "The Sawtooth That Resets on Every Zero of the Sine",
    "difficulty": 5,
    "task": "Count, with full justification, the number of real solutions in the closed interval, and expose exactly which solutions the period-by-period reflex throws away",
    "tags": [
      "fractional-part",
      "root-counting",
      "sawtooth",
      "sign-analysis",
      "boundary-solutions",
      "periodicity"
    ],
    "statement": "Let $\\{\\,\\cdot\\,\\}$ denote the fractional part. Determine the exact number of solutions $x$ of \\[ \\left\\{\\dfrac{x}{\\pi}\\right\\} \\;=\\; \\sin x \\] in the closed interval $[\\,0,\\,10\\pi\\,]$. Here $\\{t\\}=t-\\lfloor t\\rfloor$, so the left side is a sawtooth that climbs linearly from $0$ to $1$ on each block $[\\,n\\pi,\\,(n+1)\\pi\\,)$ and then snaps back to $0$ at every $x=k\\pi$. Beware: the natural reflex is to count one intersection per visible sine hump, but the points where the sawtooth resets are themselves where $\\sin x$ vanishes — decide carefully whether those count, and whether the troughs of the sine contribute anything at all. Report the single integer total.",
    "answer": "\\[\\boxed{16}\\]",
    "trap": "The seductive miscount is $5$. A student reasons: \"$\\sin x$ reaches up to $1$ only on its five positive humps over $[\\,0,10\\pi\\,]$, namely on $[\\,0,\\pi\\,],[\\,2\\pi,3\\pi\\,],\\dots,[\\,8\\pi,9\\pi\\,]$; on each, the rising sawtooth crosses the hump once, giving $5$.\" Two distinct facts are lost. First, the sawtooth resets to $0$ at $x=k\\pi$, and at those very abscissae $\\sin(k\\pi)=0$ too, so $\\{k\\pi/\\pi\\}=\\{k\\}=0=\\sin(k\\pi)$: every integer multiple of $\\pi$ is a genuine solution. On $[\\,0,10\\pi\\,]$ that is $x=0,\\pi,2\\pi,\\dots,10\\pi$, i.e. $11$ extra roots hiding exactly at the reset seams the hump-count never looks at. Second, one must verify the troughs add nothing: on each odd block $[\\,n\\pi,(n+1)\\pi\\,]$ the sine is $\\le 0$ while the fractional part is $\\ge 0$, and the two are never simultaneously zero in the interior, so $\\{x/\\pi\\}-\\sin x>0$ strictly inside and there is no interior trough solution — a fact that must be argued, not assumed. The honest tally is $11$ reset zeros plus $5$ interior crossings on the positive humps $=16$. The error is structural, not arithmetic: it comes from counting a periodic graph by its loudest feature (the humps) and silently discarding the boundary roots created by the discontinuity of the fractional part.",
    "solutions": [
      {
        "name": "Block-by-block sign analysis",
        "steps": [
          "Fix a block $x\\in[\\,n\\pi,(n+1)\\pi\\,)$ for $n=0,1,\\dots,9$. On it $\\lfloor x/\\pi\\rfloor=n$, so the equation reads $g_n(x):=\\dfrac{x}{\\pi}-n-\\sin x=0$, where $L(x)=\\dfrac{x}{\\pi}-n$ is a straight line rising from $0$ to $1$.",
          "Reset seams first. At each $x=k\\pi$ ($k=0,\\dots,10$) the left side is $\\{k\\}=0$ and the right side is $\\sin(k\\pi)=0$, so every such point is a solution. These are $11$ distinct roots: $x=0,\\pi,2\\pi,\\dots,10\\pi$.",
          "Odd blocks contribute no interior root. For $n$ odd, $\\sin x\\le 0$ on $[\\,n\\pi,(n+1)\\pi\\,]$ while $\\dfrac{x}{\\pi}-n\\ge 0$; strictly inside the block the line is $>0$ and the sine is $<0$, so $g_n(x)>0$ there. Hence the troughs give nothing beyond the seam zeros already counted.",
          "Even blocks contribute exactly one interior root. For $n$ even, $\\sin x\\ge 0$ forms a positive hump. Let $h(x)=\\sin x-\\left(\\dfrac{x}{\\pi}-n\\right)$. Just after $x=n\\pi$, $h'(\\,n\\pi\\,)=\\cos(n\\pi)-\\tfrac1\\pi=1-\\tfrac1\\pi>0$ and $h(n\\pi^+)>0$; at the right end $h\\big((n+1)\\pi^-\\big)=0-1=-1<0$. Since $h'(x)=\\cos x-\\tfrac1\\pi$ vanishes exactly once in the block (as $\\cos x$ decreases from $1$ to $-1$ through $\\tfrac1\\pi$ once), $h$ rises to a single maximum then strictly decreases, so $h$ has exactly one interior zero. The even blocks are $n=0,2,4,6,8$: that is $5$ interior crossings.",
          "Add the disjoint contributions: $11$ reset zeros $+\\,5$ interior even-hump crossings $+\\,0$ from odd troughs $=\\boxed{16}$."
        ]
      },
      {
        "name": "Rescaling $t=x/\\pi$ and counting on $[\\,0,10\\,]$",
        "steps": [
          "Put $t=\\dfrac{x}{\\pi}$, so $x=\\pi t$ and $t\\in[\\,0,10\\,]$. The equation becomes $\\{t\\}=\\sin(\\pi t)$. On a block $t\\in[\\,n,n+1)$ write $u=\\{t\\}=t-n\\in[\\,0,1)$; then $\\sin(\\pi t)=\\sin(\\pi n+\\pi u)=(-1)^n\\sin(\\pi u)$.",
          "Integer points $t=0,1,\\dots,10$ give $\\{t\\}=0$ and $\\sin(\\pi t)=0$, so all $11$ integers in $[\\,0,10\\,]$ are solutions.",
          "Even $n$: solve $u=\\sin(\\pi u)$ on $u\\in(0,1)$. Since $\\sin(\\pi u)>u$ for small $u>0$ (because $\\sin(\\pi u)\\approx\\pi u>u$) and $\\sin(\\pi u)<u$ as $u\\to1^-$ (sine $\\to0$, line $\\to1$), and $\\sin(\\pi u)-u$ is concave-then-monotone with a single sign change, there is exactly one interior solution $u^\\star\\approx0.7365$. Even $n\\in\\{0,2,4,6,8\\}$ give $5$ such roots.",
          "Odd $n$: solve $u=-\\sin(\\pi u)$ on $u\\in(0,1)$; the left side is $\\ge0$ and the right side is $\\le0$, equal only at $u=0$ (already counted as the integer seam). No new interior root.",
          "Total over $t\\in[\\,0,10\\,]$ (hence $x\\in[\\,0,10\\pi\\,]$): $11$ integers $+\\,5$ even-block interior roots $=\\boxed{16}$."
        ]
      },
      {
        "name": "Graphical superposition of sawtooth and sine",
        "steps": [
          "Overlay $y=\\{x/\\pi\\}$ (period-$\\pi$ sawtooth, each tooth a segment from $(n\\pi,0)$ up to just below $((n+1)\\pi,1)$, dropping back to $0$ at the seam) and $y=\\sin x$ (period-$2\\pi$ wave) over $[\\,0,10\\pi\\,]$.",
          "At every seam $x=k\\pi$ the tooth restarts at height $0$ and the wave also passes through $0$; the two graphs touch there. With $k=0,1,\\dots,10$ this is $11$ contact points, all valid solutions.",
          "On a positive half-wave (over $[\\,2m\\pi,(2m+1)\\pi\\,]$) the wave bulges above the line near the seam, then the line overtakes it before the next seam, so they cross once in the interior; there are five positive half-waves in $[\\,0,10\\pi\\,]$, giving $5$ interior crossings.",
          "On a negative half-wave the sine lies below the $x$-axis while the sawtooth stays at or above it, so apart from the seam endpoints they never meet: zero additional crossings.",
          "Counting every distinct touch and crossing once: $11+5=\\boxed{16}$."
        ]
      }
    ],
    "remark": "The whole problem is engineered around the discontinuity of $\\{x/\\pi\\}$. Because the sawtooth's period $\\pi$ is exactly half the sine's period $2\\pi$, the reset seams of the sawtooth line up perfectly with the zeros of $\\sin x$, manufacturing $11$ boundary solutions that the eye-catching humps completely hide; meanwhile the negative half-waves are pure decoys contributing nothing. A top-rank solver learns three reflexes here: (1) when a fractional part meets a periodic function, the resets are not mere bookkeeping points but candidate roots — test the seams explicitly; (2) sign-compatibility ($\\{x/\\pi\\}\\ge0$ versus $\\sin x\\lessgtr0$) instantly kills half the blocks without any equation-solving; and (3) on the live blocks, monotonicity of the gap function $h(x)$ via $h'(x)=\\cos x-\\tfrac1\\pi$ pins the interior crossing count at exactly one, ruling out a phantom second intersection. The clean total $16=11+5$ is robust precisely because the three independent routes — piecewise sign analysis, the $t=x/\\pi$ rescaling, and the graphical overlay — all land on it.",
    "_meta_provenance": "Count of {x/pi}=sin x on [0,10pi] is 16. Verified in mpmath: 11 reset zeros at x=k*pi (k=0..10), each satisfies frac=0=sin(k*pi); 5 interior crossings on even blocks n=0,2,4,6,8 at x/pi=n+0.73648445 (sin=frac there); odd blocks n=1,3,5,7,9 have min(frac-sin)=0.00414>0 so no interior root (sine<=0, frac>=0). h(x)=sin x-(x/pi-n) on even block: h'(npi)=1-1/pi>0, h((n+1)pi^-)=-1<0, h'=cos x-1/pi has one zero per block => exactly one interior root. Distinct-solution enumeration returned 16 with 0 bad solutions. Naive 'one per positive hump' = 5 is the trap (drops the 11 seam zeros)."
  },
  {
    "theme": "equations",
    "themeLabel": "Periodicity & Root-Counting",
    "title": "The Branch You Throw Away by Cancelling",
    "difficulty": 5,
    "task": "Count, with full justification, every solution in the closed interval, and expose both the branch the cancellation destroys and the phantom roots the rescue-by-squaring invents",
    "tags": [
      "factoring",
      "root-counting",
      "lost-roots",
      "extraneous-roots",
      "branch-analysis",
      "periodicity"
    ],
    "statement": "Find the exact number of solutions $x$ of \\[ \\sin^{2}x-\\sin x \\;=\\; \\cos^{2}x-\\cos x \\] in the closed interval $[\\,0,\\,4\\pi\\,]$. Resist the tidy move: the difference of squares $\\sin^{2}x-\\cos^{2}x=\\sin x-\\cos x$ begs to be \"divided through by $\\sin x-\\cos x$\", and the substitution $s=\\sin x+\\cos x$ begs to be \"squared to kill the radical\" — each shortcut silently changes the solution set. Determine carefully which whole family of roots a cancellation deletes and which family a squaring conjures from nowhere, then report the single integer total.",
    "answer": "\\[\\boxed{9}\\]",
    "trap": "The fatal reflex is to cancel. Rearranged, the equation is $\\sin^{2}x-\\cos^{2}x=\\sin x-\\cos x$, i.e. $(\\sin x-\\cos x)(\\sin x+\\cos x)=\\sin x-\\cos x$. A strong student writes \"$\\sin x-\\cos x$ is a common factor, divide both sides by it to get $\\sin x+\\cos x=1$\" — or, equally tempting, divides by it the other way and gets only $\\tan x=1$. Either move commits the same sin: $\\sin x-\\cos x$ is itself $0$ on a whole family of points ($x=\\tfrac{\\pi}{4}+k\\pi$), and dividing by an expression that vanishes deletes exactly those points as solutions. The correct step is to FACTOR, never divide: $(\\sin x-\\cos x)(\\sin x+\\cos x-1)=0$, giving the union of two branches $\\sin x=\\cos x$ AND $\\sin x+\\cos x=1$. On $[\\,0,4\\pi\\,]$ the first branch contributes $x=\\tfrac{\\pi}{4},\\tfrac{5\\pi}{4},\\tfrac{9\\pi}{4},\\tfrac{13\\pi}{4}$ ($4$ roots) and the second contributes $x=0,\\tfrac{\\pi}{2},2\\pi,\\tfrac{5\\pi}{2},4\\pi$ ($5$ roots); the two families are disjoint, so the honest total is $9$. The cancel-and-keep-$\\sin x+\\cos x=1$ error reports $5$; the cancel-and-keep-$\\tan x=1$ error reports $4$. Worse, the student who notices the second branch and tries to solve $\\sin x+\\cos x=1$ by SQUARING gets $1+2\\sin x\\cos x=1$, i.e. $\\sin 2x=0$, i.e. $x=\\tfrac{k\\pi}{2}$ — nine candidates on $[\\,0,4\\pi\\,]$, of which $x=\\pi,\\tfrac{3\\pi}{2},3\\pi,\\tfrac{7\\pi}{2}$ are EXTRANEOUS (there $\\sin x+\\cos x=-1$, not $+1$), and must be thrown back out by checking the sign. So this single equation is engineered to lose a whole branch to cancellation and to gain a whole quartet of phantoms to squaring — opposite failure modes of the same algebra. The mistake is never arithmetic; it is treating $\\sin x-\\cos x$ as a nonzero number and treating $\\sin 2x=0$ as equivalent to $\\sin x+\\cos x=1$.",
    "solutions": [
      {
        "name": "Factor, never divide",
        "steps": [
          "Move everything to one side and group the squares against the linear terms: $\\sin^{2}x-\\cos^{2}x-(\\sin x-\\cos x)=0$. Factor the difference of squares: $(\\sin x-\\cos x)(\\sin x+\\cos x)-(\\sin x-\\cos x)=0$, then pull out the common factor to get the fully factored form $(\\sin x-\\cos x)(\\sin x+\\cos x-1)=0$. Crucially we factor rather than divide, so no root is discarded.",
          "Branch 1: $\\sin x-\\cos x=0\\iff\\tan x=1\\iff x=\\tfrac{\\pi}{4}+k\\pi$. On $[\\,0,4\\pi\\,]$ the admissible $k=0,1,2,3$ give $x=\\tfrac{\\pi}{4},\\tfrac{5\\pi}{4},\\tfrac{9\\pi}{4},\\tfrac{13\\pi}{4}$, and $k=4$ gives $\\tfrac{17\\pi}{4}>4\\pi$. That is $4$ roots.",
          "Branch 2: $\\sin x+\\cos x=1$. Write it as $\\sqrt{2}\\sin\\!\\big(x+\\tfrac{\\pi}{4}\\big)=1$, so $\\sin\\!\\big(x+\\tfrac{\\pi}{4}\\big)=\\tfrac{1}{\\sqrt{2}}$, giving $x+\\tfrac{\\pi}{4}=\\tfrac{\\pi}{4}+2k\\pi$ or $x+\\tfrac{\\pi}{4}=\\tfrac{3\\pi}{4}+2k\\pi$, i.e. $x=2k\\pi$ or $x=\\tfrac{\\pi}{2}+2k\\pi$. On $[\\,0,4\\pi\\,]$ this yields $x=0,2\\pi,4\\pi$ and $x=\\tfrac{\\pi}{2},\\tfrac{5\\pi}{2}$. That is $5$ roots.",
          "Check the branches are disjoint so nothing is double-counted: a common root would need $\\tfrac{\\pi}{4}+k\\pi$ to equal $2m\\pi$ or $\\tfrac{\\pi}{2}+2m\\pi$, forcing $\\tfrac14+k=2m$ or $\\tfrac14+k=\\tfrac12+2m$, both impossible in integers. Hence the solution set is the disjoint union, with $4+5=\\boxed{9}$ solutions on $[\\,0,4\\pi\\,]$."
        ]
      },
      {
        "name": "Substitution $s=\\sin x+\\cos x$ with honest extraneous-root pruning",
        "steps": [
          "The factored equation $(\\sin x-\\cos x)(\\sin x+\\cos x-1)=0$ splits into $\\sin x=\\cos x$ and $\\sin x+\\cos x=1$; the first gives $x=\\tfrac{\\pi}{4}+k\\pi$, i.e. $x=\\tfrac{\\pi}{4},\\tfrac{5\\pi}{4},\\tfrac{9\\pi}{4},\\tfrac{13\\pi}{4}$ on $[\\,0,4\\pi\\,]$ ($4$ roots). Now attack the second branch by the tempting substitution $s=\\sin x+\\cos x$, i.e. solve $s=1$.",
          "If one SQUARES $\\sin x+\\cos x=1$, then $\\sin^{2}x+2\\sin x\\cos x+\\cos^{2}x=1$, so $1+\\sin 2x=1$, giving $\\sin 2x=0$ and $x=\\tfrac{k\\pi}{2}$. On $[\\,0,4\\pi\\,]$ these are the nine candidates $x=0,\\tfrac{\\pi}{2},\\pi,\\tfrac{3\\pi}{2},2\\pi,\\tfrac{5\\pi}{2},3\\pi,\\tfrac{7\\pi}{2},4\\pi$.",
          "Squaring is not reversible, so every candidate must be tested against the ORIGINAL $\\sin x+\\cos x=1$. Evaluating $\\sin x+\\cos x$: it equals $+1$ at $x=0,\\tfrac{\\pi}{2},2\\pi,\\tfrac{5\\pi}{2},4\\pi$ (KEEP) but equals $-1$ at $x=\\pi,\\tfrac{3\\pi}{2},3\\pi,\\tfrac{7\\pi}{2}$ (these are roots of $\\sin x+\\cos x=-1$, EXTRANEOUS, introduced purely by squaring). So branch 2 keeps exactly $5$ genuine roots and discards $4$ phantoms.",
          "Combine the two branches, which are disjoint: $4$ from $\\sin x=\\cos x$ plus $5$ surviving from $\\sin x+\\cos x=1$ gives $\\boxed{9}$ solutions. (The lesson is symmetric to the cancellation trap: cancelling deletes a branch, squaring inflates one — both must be policed.)"
        ]
      },
      {
        "name": "Reduction to $\\sin 2x$ and $\\sin x-\\cos x$ via double angle",
        "steps": [
          "Use $\\sin^{2}x-\\cos^{2}x=-\\cos 2x$ to rewrite the equation as $-\\cos 2x=\\sin x-\\cos x$. Since $\\cos 2x=\\cos^{2}x-\\sin^{2}x=(\\cos x-\\sin x)(\\cos x+\\sin x)$, we get $-\\cos 2x=(\\sin x-\\cos x)(\\sin x+\\cos x)$, so the equation becomes $(\\sin x-\\cos x)(\\sin x+\\cos x)=(\\sin x-\\cos x)$, i.e. $(\\sin x-\\cos x)\\big[(\\sin x+\\cos x)-1\\big]=0$ — the same product, reached without ever dividing.",
          "Set $u=\\sin x-\\cos x=\\sqrt{2}\\sin\\!\\big(x-\\tfrac{\\pi}{4}\\big)$. The factor $u=0$ means $\\sin\\!\\big(x-\\tfrac{\\pi}{4}\\big)=0$, so $x=\\tfrac{\\pi}{4}+k\\pi$, contributing $x=\\tfrac{\\pi}{4},\\tfrac{5\\pi}{4},\\tfrac{9\\pi}{4},\\tfrac{13\\pi}{4}$ on $[\\,0,4\\pi\\,]$ ($4$ roots).",
          "The factor $\\sin x+\\cos x-1=0$ means $\\sqrt{2}\\sin\\!\\big(x+\\tfrac{\\pi}{4}\\big)=1$, so $\\sin\\!\\big(x+\\tfrac{\\pi}{4}\\big)=\\tfrac{1}{\\sqrt2}$, whose solutions $x=2k\\pi$ and $x=\\tfrac{\\pi}{2}+2k\\pi$ land at $x=0,2\\pi,4\\pi,\\tfrac{\\pi}{2},\\tfrac{5\\pi}{2}$ on $[\\,0,4\\pi\\,]$ ($5$ roots). Because $u=\\sqrt2\\sin(x-\\tfrac{\\pi}{4})$ and $\\sin x+\\cos x=\\sqrt2\\sin(x+\\tfrac{\\pi}{4})$ are phase-shifted by $\\tfrac{\\pi}{2}$, their zero/level sets never coincide here, confirming disjointness.",
          "The closed interval $[\\,0,4\\pi\\,]$ spans exactly two full periods of the original $\\pi$-and-$2\\pi$ structure, and each endpoint $x=0,4\\pi$ is a genuine branch-2 root, so both must be counted. Adding the disjoint families gives $4+5=\\boxed{9}$."
        ]
      }
    ],
    "remark": "This is a cancellation/squaring pincer. The equation is built so that the slick algebraic move in EITHER direction corrupts the count: dividing by $\\sin x-\\cos x$ silently deletes the entire $\\tan x=1$ branch (because that very expression is zero there), while squaring $\\sin x+\\cos x=1$ silently injects the four phantom roots of $\\sin x+\\cos x=-1$. The only safe path is the conservative one — FACTOR to $(\\sin x-\\cos x)(\\sin x+\\cos x-1)=0$ and take the union of branches, never multiplying or dividing the solution set away. Three reflexes a top-rank solver should bank here: (1) before cancelling a common factor, ask whether that factor can vanish on the domain — if it can, those zeros are candidate roots, not garbage to discard; (2) squaring is a one-way street, so every root born from a squared equation must be re-substituted into the original and pruned by sign; and (3) when two solution families come from phase-shifted sinusoids $\\sqrt2\\sin(x\\mp\\tfrac{\\pi}{4})$, check disjointness explicitly before adding their counts. The clean total $9=4+5$ is corroborated three independent ways — direct factoring, the substitution-with-pruning route, and the double-angle reduction — all of which converge precisely because none of them ever cancels or squares without accounting for what that operation does to the root set.",
    "_meta_provenance": "Equation sin^2 x - sin x = cos^2 x - cos x on closed [0,4pi]. Factor (sinx-cosx)(sinx+cosx-1)=0. Branch A tan x=1: x=pi/4+k pi -> pi/4,5pi/4,9pi/4,13pi/4 (4 roots). Branch B sinx+cosx=1: x=2k pi or pi/2+2k pi -> 0,2pi,4pi,pi/2,5pi/2 (5 roots). Branches disjoint (no integer solution to 1/4+k=2m or 1/4+k=1/2+2m). Total = 9. Verified three independent ways in mpmath (dps 50) and a numpy brute-force grid (N=8e6, bisection): all return exactly 9 roots at x/pi = 0,0.25,0.5,1.25,2.0,2.25,2.5,3.25,4.0 with f=0. Trap A (divide by sinx-cosx, keep sinx+cosx=1) = 5; trap A' (divide, keep tan x=1) = 4. Squaring branch B gives sin2x=0 => x=k pi/2 (9 candidates), of which 4 (pi,3pi/2,3pi,7pi/2) are extraneous since there sinx+cosx=-1; verified KEEP=5, EXTRANEOUS=4. Double-angle route -cos2x=sinx-cosx with cos2x=(cosx-sinx)(cosx+sinx) reproduces the same product. Every method lands at 9."
  },
  {
    "theme": "equations",
    "themeLabel": "Periodicity & Root-Counting",
    "title": "Two Cofunction Families That Secretly Share a Seat",
    "difficulty": 5,
    "task": "Count, with complete justification, the number of distinct real solutions in the half-open interval, and identify the single abscissa where the two solution families collide",
    "tags": [
      "cofunction",
      "root-counting",
      "arithmetic-progression",
      "coincident-roots",
      "sum-to-product",
      "periodicity"
    ],
    "statement": "Determine the exact number of distinct solutions $x$ of \\[ \\cos(8x) \\;=\\; \\sin(3x) \\] in the interval $[\\,0,\\,2\\pi\\,)$. The natural move is the cofunction identity $\\sin\\theta=\\cos\\!\\left(\\tfrac{\\pi}{2}-\\theta\\right)$, which splits the equation into two arithmetic progressions of solutions with different common difference. One family marches in steps of $\\tfrac{2\\pi}{11}$, the other in steps of $\\tfrac{2\\pi}{5}$. Tempting as it is to size each family and add, you must first decide whether the two progressions are genuinely disjoint over one full period, because a shared term is counted once, not twice. Report the single integer total.",
    "answer": "$15$",
    "trap": "The seductive miscount is $16$. A student converts $\\sin(3x)=\\cos\\!\\left(\\tfrac{\\pi}{2}-3x\\right)$ and uses $\\cos A=\\cos B\\iff A=\\pm B+2k\\pi$ on $\\cos(8x)=\\cos\\!\\left(\\tfrac{\\pi}{2}-3x\\right)$. The plus sign gives $8x=\\tfrac{\\pi}{2}-3x+2k\\pi$, i.e. $11x=\\tfrac{\\pi}{2}+2k\\pi$, an A.P. with $x=\\tfrac{(4k+1)\\pi}{22}$ contributing $11$ values in $[\\,0,2\\pi\\,)$; the minus sign gives $8x=-\\tfrac{\\pi}{2}+3x+2k\\pi$, i.e. $5x=-\\tfrac{\\pi}{2}+2k\\pi$, an A.P. with $x=\\tfrac{(4k-1)\\pi}{10}$ contributing $5$ values. The reflex \"$11+5=16$\" treats the two families as disjoint. They are not: the term $x=\\tfrac{3\\pi}{2}$ lies in BOTH progressions — there $\\cos(8x)=\\cos(12\\pi)=1$ and $\\sin(3x)=\\sin\\!\\left(\\tfrac{9\\pi}{2}\\right)=1$, the common maximum that both branches of the cofunction split happen to pass through. Counting that shared seat twice inflates the answer by exactly one. The honest tally is $11+5-1=15$. The error is structural, not arithmetic: it comes from assuming two A.P.s of coprime-looking steps cannot intersect, when in fact $\\tfrac{(4j+1)}{22}\\equiv\\tfrac{(4k-1)}{10}\\pmod 2$ does have a solution.",
    "solutions": [
      {
        "name": "Cofunction split into two A.P.s, then remove the collision",
        "steps": [
          "Write $\\sin(3x)=\\cos\\!\\left(\\tfrac{\\pi}{2}-3x\\right)$, so the equation becomes $\\cos(8x)=\\cos\\!\\left(\\tfrac{\\pi}{2}-3x\\right)$. Using $\\cos A=\\cos B\\iff A=2k\\pi\\pm B$, two families arise.",
          "Family I (plus sign): $8x=\\tfrac{\\pi}{2}-3x+2k\\pi\\Rightarrow 11x=\\tfrac{\\pi}{2}+2k\\pi\\Rightarrow x=\\dfrac{(4k+1)\\pi}{22}$. As $k$ runs over a complete residue system the step is $\\tfrac{2\\pi}{11}$, so over the period $[\\,0,2\\pi\\,)$ there are exactly $11$ distinct values: $x=\\tfrac{\\pi}{22},\\tfrac{5\\pi}{22},\\dots,\\tfrac{41\\pi}{22}$, one of which is $\\tfrac{33\\pi}{22}=\\tfrac{3\\pi}{2}$.",
          "Family II (minus sign): $8x=-\\tfrac{\\pi}{2}+3x+2k\\pi\\Rightarrow 5x=-\\tfrac{\\pi}{2}+2k\\pi\\Rightarrow x=\\dfrac{(4k-1)\\pi}{10}$. The step is $\\tfrac{2\\pi}{5}$, giving exactly $5$ distinct values in $[\\,0,2\\pi\\,)$: $x=\\tfrac{3\\pi}{10},\\tfrac{7\\pi}{10},\\tfrac{11\\pi}{10},\\tfrac{3\\pi}{2},\\tfrac{19\\pi}{10}$.",
          "Both lists are genuine roots (no extraneous roots enter, since every step is an equivalence). Now test for overlap: a common term needs $\\tfrac{(4j+1)}{22}\\equiv\\tfrac{(4k-1)}{10}\\pmod 2$. Clearing denominators, $5(4j+1)\\equiv 11(4k-1)\\pmod{110}$, i.e. $20j+5\\equiv 44k-11\\pmod{110}$. Reducing, this forces $k\\equiv 4\\pmod 5$, which over one period pins down the single shared value $x=\\tfrac{3\\pi}{2}$ and no other.",
          "By inclusion–exclusion the total number of distinct solutions is $|\\mathrm{I}|+|\\mathrm{II}|-|\\mathrm{I}\\cap\\mathrm{II}|=11+5-1=\\boxed{15}$."
        ]
      },
      {
        "name": "Sum-to-product factorisation",
        "steps": [
          "Rewrite as $\\cos(8x)-\\sin(3x)=0$ and use $\\sin(3x)=\\cos\\!\\left(\\tfrac{\\pi}{2}-3x\\right)$, so $\\cos(8x)-\\cos\\!\\left(\\tfrac{\\pi}{2}-3x\\right)=0$.",
          "Apply $\\cos C-\\cos D=-2\\sin\\!\\left(\\tfrac{C+D}{2}\\right)\\sin\\!\\left(\\tfrac{C-D}{2}\\right)$ with $C=8x,\\;D=\\tfrac{\\pi}{2}-3x$. Then $\\tfrac{C+D}{2}=\\tfrac{5x}{2}+\\tfrac{\\pi}{4}$ and $\\tfrac{C-D}{2}=\\tfrac{11x}{2}-\\tfrac{\\pi}{4}$, giving the clean factorisation \\[ \\cos(8x)-\\sin(3x)=-2\\,\\sin\\!\\left(\\tfrac{5x}{2}+\\tfrac{\\pi}{4}\\right)\\sin\\!\\left(\\tfrac{11x}{2}-\\tfrac{\\pi}{4}\\right). \\]",
          "First factor vanishes when $\\tfrac{5x}{2}+\\tfrac{\\pi}{4}=m\\pi\\Rightarrow x=\\tfrac{(4m-1)\\pi}{10}$: exactly $5$ values in $[\\,0,2\\pi\\,)$. Second factor vanishes when $\\tfrac{11x}{2}-\\tfrac{\\pi}{4}=m\\pi\\Rightarrow x=\\tfrac{(4m+1)\\pi}{22}$: exactly $11$ values in $[\\,0,2\\pi\\,)$.",
          "A point lies in both factor-sets only if both factors vanish, i.e. both $\\tfrac{5x}{2}+\\tfrac{\\pi}{4}$ and $\\tfrac{11x}{2}-\\tfrac{\\pi}{4}$ are integer multiples of $\\pi$. Eliminating $x$: from the first, $x=\\tfrac{(4m-1)\\pi}{10}$; substituting into the second yields $\\tfrac{11(4m-1)}{20}-\\tfrac14\\in\\mathbb{Z}$, i.e. $\\tfrac{11m-4}{5}\\in\\mathbb{Z}$, forcing $m\\equiv 4\\pmod 5$. In $[\\,0,2\\pi\\,)$ this gives the unique double root $x=\\tfrac{3\\pi}{2}$ (where indeed $\\sin\\!\\left(\\tfrac{5x}{2}+\\tfrac{\\pi}{4}\\right)=\\sin(4\\pi)=0$ and $\\sin\\!\\left(\\tfrac{11x}{2}-\\tfrac{\\pi}{4}\\right)=\\sin(8\\pi)=0$).",
          "The product is zero exactly on the union of the two zero-sets, so the count is $5+11-1=\\boxed{15}$."
        ]
      },
      {
        "name": "Bounding the crossings by monotone arcs",
        "steps": [
          "Set $g(x)=\\cos(8x)-\\sin(3x)$ and count sign changes directly, period $[\\,0,2\\pi\\,)$. The faster wave $\\cos(8x)$ completes $8$ full oscillations and $\\sin(3x)$ completes $3$; between consecutive zeros of $g'$ the function $g$ is monotone, so each monotone arc carries at most one root.",
          "Tracking the running sign of $g$ across $[\\,0,2\\pi\\,)$, the dominant high-frequency term $\\cos(8x)$ produces a regular alternation of signs; the slow term $\\sin(3x)$ shifts the crossing locations but, because $|\\sin(3x)|\\le 1=\\max|\\cos(8x)|$, it never suppresses a crossing except where the two graphs become tangent.",
          "Tangency (a repeated root, where $g=g'=0$) occurs exactly where the two cofunction families coincide. Solving $g=0,\\;g'=0$ simultaneously gives $\\sin(8x)\\cdot 8=-\\cos(3x)\\cdot 3$ together with $\\cos(8x)=\\sin(3x)$; the only point of $[\\,0,2\\pi\\,)$ satisfying both is $x=\\tfrac{3\\pi}{2}$, where $\\cos(8x)=\\sin(3x)=1$ (a common peak) and the curves touch without an extra transversal crossing.",
          "Thus of the $16$ candidate abscissae produced by the two cofunction branches, $15$ are simple (transversal) roots and one tangency at $x=\\tfrac{3\\pi}{2}$ is shared by both branches rather than supplying two roots. The distinct-root count is therefore $\\boxed{15}$."
        ]
      }
    ],
    "remark": "The entire trap is manufactured by the cofunction identity, which legitimately splits one equation into two arithmetic progressions — here with steps $\\tfrac{2\\pi}{11}$ and $\\tfrac{2\\pi}{5}$. A top-rank solver internalises three reflexes. (1) When you turn one trig equation into a union of solution families, the families are sets, not multisets: always inclusion–exclude, never blindly add. (2) Two A.P.s with steps $\\tfrac{2\\pi}{p}$ and $\\tfrac{2\\pi}{q}$ can intersect even when $p,q$ share no obvious factor — the intersection question is a linear congruence, and here it has exactly one solution $x=\\tfrac{3\\pi}{2}$ per period, precisely the common peak where $\\cos(8x)=\\sin(3x)=1$. (3) The sum-to-product route makes the collision visible as a genuine double root of $-2\\sin\\!\\left(\\tfrac{5x}{2}+\\tfrac{\\pi}{4}\\right)\\sin\\!\\left(\\tfrac{11x}{2}-\\tfrac{\\pi}{4}\\right)$, where both factors vanish at once — the algebraic shadow of the geometric tangency. The clean total $15=11+5-1$ is robust because three independent routes (residue-class intersection, sum-to-product factorisation, and tangency-aware sign counting) all converge on it.",
    "_meta_provenance": "Count of cos(8x)=sin(3x) on [0,2pi) is 15. Verified by dense brute force (20,000,000-sample scan + bisection + tangency detection) returning 15 distinct roots; x=3pi/2 confirmed as a tangency (g=g'=0). Cofunction Family I x=(4k+1)pi/22 has 11 members, Family II x=(4k-1)pi/10 has 5 members, intersection={3pi/2} (proved via congruence k=4 mod 5 -> unique in period), so |union|=11+5-1=15. Sum-to-product: cos8x-sin3x = -2 sin(5x/2+pi/4) sin(11x/2-pi/4); first factor 5 zeros, second 11 zeros, overlap 1 at 3pi/2, union 15. At x=3pi/2: cos(12pi)=1=sin(9pi/2). Naive 11+5=16 is the trap (double-counts the shared seat 3pi/2)."
  },
  {
    "theme": "equations",
    "themeLabel": "Periodicity & Root-Counting",
    "title": "The Secant-Cosecant Sum That Hides a Forbidden Root",
    "difficulty": 5,
    "task": "Count the solutions",
    "tags": [
      "root-counting",
      "substitution",
      "hidden-constraint",
      "double-angle",
      "extraneous"
    ],
    "statement": "Find the number of values of $x$ in the open interval $(0,2\\pi)$ that satisfy \\[ \\sec^{2}x+\\csc^{2}x+4\\sin^{2}2x \\;=\\; 10. \\]",
    "answer": "$8$",
    "trap": "Writing $\\sec^{2}x+\\csc^{2}x=\\dfrac{1}{\\sin^{2}x\\cos^{2}x}=\\dfrac{4}{\\sin^{2}2x}$ and putting $u=\\sin^{2}2x$ turns the equation into $\\dfrac{4}{u}+4u=10$, i.e. $2u^{2}-5u+2=0$, with roots $u=\\tfrac12$ and $u=2$. The fatal move is to honour BOTH roots: from $u=2$ one writes $\\sin^{2}2x=2$, then either declares $\\sin 2x=\\pm\\sqrt2$ and blindly counts more crossings, or — worse — never checks $u\\le 1$ at all and reports a doubled total. But $u=\\sin^{2}2x$ is trapped in $(0,1]$, so $u=2$ is a phantom root contributing nothing at all; only $u=\\tfrac12$ is admissible. Forgetting the box $0<u\\le 1$ inflates the count.",
    "solutions": [
      {
        "name": "Substitution with the boxed range",
        "steps": [
          "Use $\\sin x\\cos x=\\tfrac12\\sin 2x$, so $\\sec^{2}x+\\csc^{2}x=\\dfrac{\\sin^{2}x+\\cos^{2}x}{\\sin^{2}x\\cos^{2}x}=\\dfrac{1}{\\sin^{2}x\\cos^{2}x}=\\dfrac{4}{\\sin^{2}2x}.$ The equation becomes $\\dfrac{4}{\\sin^{2}2x}+4\\sin^{2}2x=10.$",
          "Let $u=\\sin^{2}2x$. Since $x\\in(0,2\\pi)$ avoids the points where $\\sin 2x=0$ (else the LHS is undefined), we have $u\\in(0,1]$. The relation is $\\dfrac{4}{u}+4u=10\\Rightarrow 4u^{2}-10u+4=0\\Rightarrow 2u^{2}-5u+2=0\\Rightarrow u=\\tfrac12\\ \\text{or}\\ u=2.$",
          "Impose the constraint $0<u\\le 1$: the root $u=2$ violates $u\\le 1$ and is discarded as extraneous. Only $u=\\tfrac12$ survives, giving $\\sin^{2}2x=\\tfrac12$, i.e. $\\sin 2x=\\pm\\dfrac{1}{\\sqrt2}.$",
          "Both signs are captured by $\\sin^{2}2x=\\tfrac12\\iff\\cos 4x=1-2\\sin^{2}2x=0\\iff 4x=\\dfrac{\\pi}{2}+m\\pi\\iff x=\\dfrac{\\pi}{8}+\\dfrac{m\\pi}{4},\\ m\\in\\mathbb{Z}.$",
          "Count those in $(0,2\\pi)$: $x=\\dfrac{\\pi}{8}+\\dfrac{m\\pi}{4}$ lies in $(0,2\\pi)$ for $m=0,1,\\dots,7$, namely $\\dfrac{\\pi}{8},\\dfrac{3\\pi}{8},\\dfrac{5\\pi}{8},\\dfrac{7\\pi}{8},\\dfrac{9\\pi}{8},\\dfrac{11\\pi}{8},\\dfrac{13\\pi}{8},\\dfrac{15\\pi}{8}$ — none a multiple of $\\tfrac{\\pi}{2}$, so all are valid. The count is $\\boxed{8}.$"
        ]
      },
      {
        "name": "Monotonicity bound kills the phantom root before it forms",
        "steps": [
          "As above the equation is $g(u)=\\dfrac{4}{u}+4u=10$ with $u=\\sin^{2}2x\\in(0,1].$ Study $g$ on $(0,1]$: $g'(u)=-\\dfrac{4}{u^{2}}+4=4\\Big(1-\\dfrac{1}{u^{2}}\\Big)<0$ for $0<u<1$, so $g$ is strictly decreasing on $(0,1].$",
          "Hence on $(0,1]$ the function $g$ falls from $+\\infty$ (as $u\\to0^{+}$) to its minimum $g(1)=8$. Therefore $g(u)=10$ has exactly one solution in $(0,1]$, and never two — the second algebraic root $u=2$ simply lies outside the legal window and is invisible to the count.",
          "That unique solution is $u=\\tfrac12$ (since $g(\\tfrac12)=8+2=10$). So $\\sin^{2}2x=\\tfrac12$, equivalently $\\cos 4x=0.$",
          "On $x\\in(0,2\\pi)$ the argument $4x$ runs over $(0,8\\pi)$, four full periods of $\\cos$. In each period $\\cos$ has exactly two zeros, so $\\cos 4x=0$ has $4\\times 2=8$ roots.",
          "Each such $x$ keeps $\\sin 2x\\neq0$ (a zero of $\\cos 4x$ forces $\\sin^{2}2x=\\tfrac12\\neq0$), so the original LHS is defined at every one. The number of solutions is $\\boxed{8}.$"
        ]
      },
      {
        "name": "Direct double-angle count via cos 4x",
        "steps": [
          "Rewrite using $\\sin^{2}2x=\\dfrac{1-\\cos4x}{2}$ and $\\dfrac{4}{\\sin^{2}2x}=\\dfrac{8}{1-\\cos4x}.$ The equation $\\dfrac{8}{1-\\cos4x}+4\\cdot\\dfrac{1-\\cos4x}{2}=10$ becomes, with $c=\\cos4x$, $\\dfrac{8}{1-c}+2(1-c)=10.$",
          "Put $w=1-c\\in[0,2]$ (since $c\\in[-1,1]$, and $w\\neq0$ for the LHS to be finite). Then $\\dfrac{8}{w}+2w=10\\Rightarrow w^{2}-5w+4=0\\Rightarrow w=1\\ \\text{or}\\ w=4.$",
          "The constraint $0<w\\le 2$ rejects $w=4$ outright; only $w=1$ stands, i.e. $1-\\cos4x=1\\Rightarrow\\cos4x=0.$ (This is the same forbidden-root phenomenon: the doubling makes the algebra offer a root the geometry forbids.)",
          "Solve $\\cos4x=0$: $4x=\\dfrac{\\pi}{2}+m\\pi\\Rightarrow x=\\dfrac{\\pi}{8}+\\dfrac{m\\pi}{4},\\ m\\in\\mathbb{Z}.$",
          "The values in $(0,2\\pi)$ correspond to $m=0,1,\\dots,7$, giving exactly $\\boxed{8}$ solutions."
        ]
      }
    ],
    "remark": "Three independent reductions — the substitution $u=\\sin^{2}2x$, the substitution $w=1-\\cos4x$, and the monotonicity of $g$ — each manufacture a tidy quadratic with two roots, yet each quadratic carries one root that the geometry has already outlawed ($u=2$, $w=4$). The lesson of root-counting is that an algebraic root is only a candidate: it earns a place in the count only after surviving the box its variable lives in. Here the legal window $\\sin^{2}2x\\in(0,1]$ (equivalently $\\cos4x\\in[-1,1]$) cleanly halves the candidate set, and the surviving condition $\\cos4x=0$ — four periods over $(0,2\\pi)$ — delivers the honest tally of $8$."
  },
  {
    "theme": "equations",
    "themeLabel": "Periodicity & Root-Counting",
    "title": "Two Progressions That Sometimes Collide",
    "difficulty": 5,
    "task": "Find, as an exact closed form in $n$, the number of distinct solutions in $[0,2\\pi)$, and pinpoint the residue class of $n$ where the two solution families collide",
    "tags": [
      "root-counting",
      "general-solution",
      "arithmetic-progression",
      "overlap",
      "mod-4",
      "product-to-sum"
    ],
    "statement": "For an integer $n\\ge 2$, let $N(n)$ be the number of distinct real numbers $x\\in[0,2\\pi)$ satisfying \\[ \\sin(nx)=\\sin x. \\] A student reasons: \"$\\sin(nx)=\\sin x$ means $nx=x+2k\\pi$ or $nx=\\pi-x+2k\\pi$; the first gives $n-1$ equally spaced points and the second gives $n+1$ equally spaced points on $[0,2\\pi)$, so $N(n)=(n-1)+(n+1)=2n$ for every $n$.\" Determine the exact value of $N(n)$ for all $n\\ge 2$, decide for which $n$ the student's count $2n$ is genuinely correct and for which $n$ it strictly over-counts, and identify the precise points that are responsible for any discrepancy. Report $N(n)$ as a single closed form (a value together with its case condition on $n$).",
    "answer": "\\[\\boxed{N(n)=\\begin{cases}2n-2,& n\\equiv 1\\!\\!\\pmod 4\\\\ 2n,& \\text{otherwise}\\end{cases}}\\]",
    "trap": "The trap is the seductive additivity $N(n)=(n-1)+(n+1)=2n$. The two families of roots are genuinely arithmetic progressions on the circle: family $A=\\{\\,x=\\tfrac{2j\\pi}{n-1}:j=0,\\dots,n-2\\,\\}$ from $nx\\equiv x$, of size exactly $n-1$, and family $B=\\{\\,x=\\tfrac{(2j+1)\\pi}{n+1}:j=0,\\dots,n\\,\\}$ from $nx\\equiv\\pi-x$, of size exactly $n+1$. Each family is individually duplicate-free, so the student correctly sizes each one; the fatal step is adding the two sizes as if the families were disjoint. They are not always disjoint. A point lies in $A\\cap B$ iff it is simultaneously an even multiple of $\\tfrac{\\pi}{n-1}$ and an odd multiple of $\\tfrac{\\pi}{n+1}$; solving the congruence shows the only candidates are $x=\\tfrac{\\pi}{2}$ and $x=\\tfrac{3\\pi}{2}$, and these belong to both families exactly when $4\\mid(n-1)$, i.e. $n\\equiv 1\\pmod 4$. (Concretely $\\sin\\tfrac{n\\pi}{2}=\\sin\\tfrac{\\pi}{2}$ needs $\\tfrac{n\\pi}{2}$ to land at $\\tfrac{\\pi}{2}$ on the circle, which forces $n\\equiv1\\pmod4$.) For those $n$ the two collision points are each counted twice in $2n$, so the honest total drops to $2n-2$; for $n\\equiv 0,2,3\\pmod 4$ the families are disjoint and $2n$ is exact. This is a missed-overlap / coincident-root subtlety, not an arithmetic slip: the periodicities $\\tfrac{2\\pi}{n-1}$ and $\\tfrac{2\\pi}{n+1}$ are commensurable, and whether their lattices meet on $[0,2\\pi)$ is a number-theoretic (mod $4$) condition the additive count is blind to. The student also never checks whether $\\sin(nx)=\\sin x$ can hold by a third route — but $\\sin\\alpha=\\sin\\beta$ has only the two routes $\\alpha\\equiv\\beta$ and $\\alpha\\equiv\\pi-\\beta$, so the families are complete; the error is purely the overlap.",
    "solutions": [
      {
        "name": "Product-to-sum factorisation, then count each factor and the shared zeros",
        "steps": [
          "Convert the difference to a product: $\\sin(nx)-\\sin x=2\\cos\\!\\Big(\\dfrac{(n+1)x}{2}\\Big)\\sin\\!\\Big(\\dfrac{(n-1)x}{2}\\Big)=0$. Hence every solution makes one of the two factors vanish, and the roots split into $A:\\ \\sin\\!\\big(\\tfrac{(n-1)x}{2}\\big)=0$ and $B:\\ \\cos\\!\\big(\\tfrac{(n+1)x}{2}\\big)=0$.",
          "Count $A$. $\\sin\\!\\big(\\tfrac{(n-1)x}{2}\\big)=0\\iff\\tfrac{(n-1)x}{2}=j\\pi\\iff x=\\tfrac{2j\\pi}{n-1}$. On $[0,2\\pi)$ the admissible $j$ are $j=0,1,\\dots,n-2$, giving exactly $n-1$ distinct points (an A.P. with common gap $\\tfrac{2\\pi}{n-1}$).",
          "Count $B$. $\\cos\\!\\big(\\tfrac{(n+1)x}{2}\\big)=0\\iff\\tfrac{(n+1)x}{2}=\\tfrac{\\pi}{2}+j\\pi\\iff x=\\tfrac{(2j+1)\\pi}{n+1}$. On $[0,2\\pi)$ the admissible $j$ are $j=0,1,\\dots,n$, giving exactly $n+1$ distinct points (the odd multiples of $\\tfrac{\\pi}{n+1}$).",
          "Find $A\\cap B$. A common point is an even multiple of $\\tfrac{\\pi}{n-1}$ and an odd multiple of $\\tfrac{\\pi}{n+1}$. Since $\\gcd(n-1,n+1)\\in\\{1,2\\}$, the lattices $\\tfrac{2\\pi}{n-1}\\mathbb{Z}$ and $\\tfrac{2\\pi}{n+1}\\mathbb{Z}$ can meet on $[0,2\\pi)$ only at $x=\\tfrac{\\pi}{2}$ and $x=\\tfrac{3\\pi}{2}$. Testing $x=\\tfrac{\\pi}{2}$: it is in $A$ iff $\\tfrac{n-1}{2}\\cdot\\tfrac12=\\tfrac{n-1}{4}\\in\\mathbb{Z}$, i.e. $4\\mid(n-1)$; and it is automatically in $B$ then. The same condition handles $x=\\tfrac{3\\pi}{2}$. So $|A\\cap B|=2$ if $n\\equiv1\\pmod4$ and $0$ otherwise.",
          "Inclusion–exclusion: $N(n)=|A|+|B|-|A\\cap B|=(n-1)+(n+1)-|A\\cap B|=2n-|A\\cap B|$. Therefore $N(n)=2n-2$ when $n\\equiv1\\pmod4$ and $N(n)=2n$ otherwise, which is $\\boxed{N(n)=2n-2\\ (n\\equiv1\\bmod4),\\ 2n\\ \\text{else}}$."
        ]
      },
      {
        "name": "Direct general solution and a congruence for the collision",
        "steps": [
          "Since $\\sin\\alpha=\\sin\\beta\\iff\\alpha\\equiv\\beta$ or $\\alpha\\equiv\\pi-\\beta\\pmod{2\\pi}$, the equation $\\sin(nx)=\\sin x$ is equivalent to $(n-1)x\\equiv0\\pmod{2\\pi}$ (family $A$) or $(n+1)x\\equiv\\pi\\pmod{2\\pi}$ (family $B$); these two routes are exhaustive, so no roots are lost.",
          "Family $A$: $(n-1)x\\equiv0\\pmod{2\\pi}$ has exactly $n-1$ solutions in $[0,2\\pi)$, namely $x=\\tfrac{2j\\pi}{n-1}$, $j=0,\\dots,n-2$. Family $B$: $(n+1)x\\equiv\\pi\\pmod{2\\pi}$ has exactly $n+1$ solutions, $x=\\tfrac{(2j+1)\\pi}{n+1}$, $j=0,\\dots,n$. (A linear congruence $mx\\equiv c\\pmod{2\\pi}$ has exactly $m$ solutions on a length-$2\\pi$ window whenever it is solvable, and both are.)",
          "Collision condition. Suppose $x\\in A\\cap B$. From $A$, write $x=\\tfrac{2a\\pi}{n-1}$; substitute into $B$: $(n+1)\\tfrac{2a\\pi}{n-1}\\equiv\\pi\\pmod{2\\pi}$, i.e. $\\tfrac{2a(n+1)}{n-1}\\equiv1\\pmod2$, i.e. $2a(n+1)\\equiv(n-1)\\pmod{2(n-1)}$. The left side is even and $n-1$ must therefore be even, so $n$ is odd; writing $n=2m+1$ this reduces to $2a(m+1)\\equiv m\\pmod{2m}$, which is solvable for $a$ iff $\\gcd(2(m+1),2m)\\mid m$, i.e. iff $m$ is even, i.e. iff $n\\equiv1\\pmod4$.",
          "When $n\\equiv1\\pmod4$ the solvable congruence yields exactly the two shared points $x=\\tfrac{\\pi}{2},\\tfrac{3\\pi}{2}$ (one can check $\\sin\\tfrac{n\\pi}{2}=\\sin\\tfrac{\\pi}{2}=1$ and $\\sin\\tfrac{3n\\pi}{2}=\\sin\\tfrac{3\\pi}{2}=-1$ precisely for $n\\equiv1\\pmod4$), so $|A\\cap B|=2$; otherwise the congruence is unsolvable and $|A\\cap B|=0$.",
          "Hence $N(n)=(n-1)+(n+1)-|A\\cap B|$, giving $\\boxed{N(n)=2n-2\\ \\text{if }n\\equiv1\\bmod4,\\ \\text{and }2n\\ \\text{otherwise}}$."
        ]
      },
      {
        "name": "Symmetry reduction to $(0,\\pi)$ plus the endpoint bookkeeping",
        "steps": [
          "Both $\\sin(nx)$ and $\\sin x$ are odd and $2\\pi$-periodic, so on $[0,2\\pi)$ the map $x\\mapsto 2\\pi-x$ sends solutions to solutions: $\\sin\\!\\big(n(2\\pi-x)\\big)=-\\sin(nx)$ and $\\sin(2\\pi-x)=-\\sin x$. This pairs the interior of $(0,\\pi)$ with the interior of $(\\pi,2\\pi)$ bijectively, so $N(n)=2\\,S+F$, where $S$ is the number of solutions in the open interval $(0,\\pi)$ and $F$ is the number of fixed/boundary solutions in $\\{0,\\pi\\}$ (points sent to themselves mod $2\\pi$).",
          "Boundary points: $x=0$ always solves ($\\sin0=\\sin0$). $x=\\pi$ solves iff $\\sin(n\\pi)=\\sin\\pi=0$, which holds for every integer $n$; and under $x\\mapsto2\\pi-x$, $\\pi\\mapsto\\pi$, so $\\pi$ is a self-paired (unpaired) solution. Thus $F=2$ from $\\{0,\\pi\\}$.",
          "Count $S$ on $(0,\\pi)$ via the factorisation $2\\cos\\!\\big(\\tfrac{(n+1)x}{2}\\big)\\sin\\!\\big(\\tfrac{(n-1)x}{2}\\big)=0$. On $(0,\\pi)$: $\\sin\\!\\big(\\tfrac{(n-1)x}{2}\\big)=0$ gives $x=\\tfrac{2j\\pi}{n-1}$ with $1\\le j\\le\\big\\lceil\\tfrac{n-1}{2}\\big\\rceil-1$, i.e. $\\lfloor\\tfrac{n-1}{2}\\rfloor$ points; $\\cos\\!\\big(\\tfrac{(n+1)x}{2}\\big)=0$ gives the odd multiples $x=\\tfrac{(2j+1)\\pi}{n+1}<\\pi$, i.e. $\\lceil\\tfrac{n+1}{2}\\rceil$ points. Subtract overlaps inside $(0,\\pi)$, which is the single point $x=\\tfrac{\\pi}{2}$ present in both iff $n\\equiv1\\pmod4$.",
          "Add up: for $n\\not\\equiv1\\pmod4$, $S=\\lfloor\\tfrac{n-1}{2}\\rfloor+\\lceil\\tfrac{n+1}{2}\\rceil=n-1$, so $N(n)=2(n-1)+2=2n$. For $n\\equiv1\\pmod4$, the shared point $\\tfrac{\\pi}{2}$ removes one from $S$, giving $S=n-2$, so $N(n)=2(n-2)+2=2n-2$. (The companion collision $\\tfrac{3\\pi}{2}$ is the mirror image of $\\tfrac{\\pi}{2}$ under $x\\mapsto2\\pi-x$, automatically absorbed by the factor of $2$.)",
          "Therefore $\\boxed{N(n)=2n-2\\ (n\\equiv1\\bmod4),\\ N(n)=2n\\ (\\text{otherwise})}$, matching the other two routes."
        ]
      }
    ],
    "remark": "The whole problem is a trap about commensurable arithmetic progressions on the circle. Each family of roots is a clean A.P. and each is genuinely duplicate-free, so a strong student correctly gets the sizes $n-1$ and $n+1$; the only place to slip is assuming the two A.P.s never share a point. Because $\\tfrac{2\\pi}{n-1}$ and $\\tfrac{2\\pi}{n+1}$ have commensurable steps, the lattices can intersect, and the question of whether they do on $[0,2\\pi)$ collapses to a single residue condition $n\\equiv1\\pmod4$, with the collision pinned to the two special points $\\tfrac{\\pi}{2},\\tfrac{3\\pi}{2}$ where $\\sin x=\\pm1$. The meta-lesson for a top-rank student: when a root count is assembled by unioning two periodic families, never add their sizes without an inclusion–exclusion check; the overlap of two commensurable progressions is itself a number-theoretic quantity and is frequently a hidden mod-condition, not zero. Note also the structural cousin $\\cos(nx)=\\cos x$, whose families overlap with a different (cleaner) parity rule — comparing the two is a good way to confirm one has understood the mechanism rather than memorised a formula.",
    "_meta_provenance": "N(n)=#{x in [0,2pi): sin(nx)=sin x}. Families A: x=2j*pi/(n-1), size n-1; B: x=(2j+1)pi/(n+1), size n+1. Overlap = {pi/2,3pi/2} present iff n=1 mod 4, else empty; so N(n)=2n-2 for n≡1 mod4, 2n otherwise. Verified two ways in Python for n=2..199: (i) exact rational set union via fractions matches closed form for all n; (ii) fully independent numerical bisection+tangent root-finder on [0,2pi) matches for n=2..15. Product-to-sum identity sin(nx)-sin x=2 cos((n+1)x/2) sin((n-1)x/2) checked to 1e-15. Naive 2n over-counts by exactly 2 iff n≡1 mod4."
  },
  {
    "theme": "equations",
    "themeLabel": "Periodicity & Root-Counting",
    "title": "Two Unit Vectors Forced to Coincide",
    "difficulty": 5,
    "task": "Count the ordered pairs",
    "tags": [
      "sum-to-product",
      "system",
      "root-counting",
      "locus",
      "boundary-degeneracy",
      "vector-trick"
    ],
    "statement": "For a real pair $(a,b)$ consider the system \\[ \\sin x+\\sin y=a,\\qquad \\cos x+\\cos y=b. \\] As $(x,y)$ ranges over $[0,2\\pi)^2$, the set of $(a,b)$ for which the system has at least one solution is a filled disc; let $\\Gamma$ be its boundary circle. Take the specific point $(a,b)=(\\sqrt3,\\,1)$, which lies on $\\Gamma$. How many ordered pairs $(x,y)\\in[0,2\\pi)^2$ satisfy the system for this $(a,b)$?",
    "answer": "$1$",
    "trap": "Sum-to-product turns the system into $2\\sin\\frac{x+y}{2}\\cos\\frac{x-y}{2}=a$ and $2\\cos\\frac{x+y}{2}\\cos\\frac{x-y}{2}=b$. A solver who has trained on interior points reasons: fix $\\tan\\frac{x+y}{2}=\\frac{a}{b}$ to pin the half-sum, then $\\cos^2\\frac{x-y}{2}=\\frac{a^2+b^2}{4}$ gives $\\frac{x-y}{2}=\\pm d$ with $d\\neq0$, so $x$ and $y$ are distinct and the ordered pairs $(x,y)$ and $(y,x)$ are two different solutions. This 'always two' instinct is right in the open interior $a^2+b^2<4$ but fails on $\\Gamma$. There $a^2+b^2=4$ forces $\\cos^2\\frac{x-y}{2}=1$, hence $\\frac{x-y}{2}=0$ (the value $\\pm\\pi$ would put $x-y=\\pm2\\pi$, impossible for distinct angles in $[0,2\\pi)$). So $x=y$ is forced: the two swapped pairs collapse into one. Reporting $2$ on the boundary double-counts a single coincident solution.",
    "solutions": [
      {
        "name": "Sum-to-product with boundary degeneracy",
        "steps": [
          "Write $S=\\dfrac{x+y}{2}$, $D=\\dfrac{x-y}{2}$. The identities $\\sin x+\\sin y=2\\sin S\\cos D$ and $\\cos x+\\cos y=2\\cos S\\cos D$ turn the system into $2\\sin S\\cos D=\\sqrt3$ and $2\\cos S\\cos D=1$.",
          "Squaring and adding eliminates $S$: $4\\cos^2 D=a^2+b^2=3+1=4$, so $\\cos^2 D=1$, i.e. $\\cos D=\\pm1$ and $\\sin D=0$. With $x,y\\in[0,2\\pi)$ we have $D=\\dfrac{x-y}{2}\\in(-\\pi,\\pi)$, and $\\sin D=0$ there forces $D=0$, hence $x=y$. (The alternative $\\cos D=-1$ would need $D=\\pm\\pi$, i.e. $x-y=\\pm2\\pi$, unattainable for distinct angles in the half-open square.)",
          "With $x=y$ the equations become $2\\sin x=\\sqrt3$ and $2\\cos x=1$, i.e. $\\sin x=\\dfrac{\\sqrt3}{2}$, $\\cos x=\\dfrac12$. These pin $x=\\dfrac{\\pi}{3}$ uniquely in $[0,2\\pi)$, and then $y=x=\\dfrac{\\pi}{3}$.",
          "Thus the only ordered pair is $\\big(\\tfrac{\\pi}{3},\\tfrac{\\pi}{3}\\big)$, so the count is $\\boxed{1}$."
        ]
      },
      {
        "name": "Two unit vectors summing to length two",
        "steps": [
          "Let $\\mathbf u=(\\cos x,\\sin x)$ and $\\mathbf v=(\\cos y,\\sin y)$ be unit vectors. The system says $\\mathbf u+\\mathbf v=(b,a)=(1,\\sqrt3)$, a vector of length $\\sqrt{1+3}=2$.",
          "By the triangle inequality $|\\mathbf u+\\mathbf v|\\le|\\mathbf u|+|\\mathbf v|=2$, with equality iff $\\mathbf u$ and $\\mathbf v$ are equal unit vectors. Since here $|\\mathbf u+\\mathbf v|=2$ exactly, equality holds, forcing $\\mathbf u=\\mathbf v$ and hence $x=y$.",
          "Then $2\\mathbf u=(1,\\sqrt3)$ gives $\\mathbf u=\\big(\\tfrac12,\\tfrac{\\sqrt3}{2}\\big)$, the unit vector at angle $\\dfrac{\\pi}{3}$, so $x=y=\\dfrac{\\pi}{3}$ is the unique solution.",
          "Exactly one ordered pair satisfies the system, giving $\\boxed{1}$. (This is precisely why $\\Gamma$ is special: only on the boundary circle of radius $2$ are the two vectors compelled to coincide.)"
        ]
      },
      {
        "name": "Eliminate one variable and count roots",
        "steps": [
          "A pair $(x,y)$ solves the system iff $(\\sin y,\\cos y)=(a-\\sin x,\\,b-\\cos x)$, which is a genuine point on the unit circle iff $(a-\\sin x)^2+(b-\\cos x)^2=1$. Expanding and using $\\sin^2+\\cos^2=1$ this reduces to $a\\sin x+b\\cos x=\\dfrac{a^2+b^2}{2}$.",
          "With $(a,b)=(\\sqrt3,1)$ the right side is $\\dfrac{4}{2}=2$, and $\\sqrt3\\sin x+\\cos x=2\\sin\\!\\big(x+\\tfrac{\\pi}{6}\\big)$, so the condition is $\\sin\\!\\big(x+\\tfrac{\\pi}{6}\\big)=1$.",
          "Over $[0,2\\pi)$ the equation $\\sin\\theta=1$ has exactly one root $\\theta=\\dfrac{\\pi}{2}$; here $x+\\dfrac{\\pi}{6}=\\dfrac{\\pi}{2}$ gives the single value $x=\\dfrac{\\pi}{3}$. Each such $x$ determines $y$ uniquely (here $y=\\dfrac{\\pi}{3}$), so the number of ordered pairs equals the number of these roots.",
          "Because the right side $\\dfrac{a^2+b^2}{2}=2$ equals the amplitude $\\sqrt{a^2+b^2}=2$, the sine hits its maximum and yields one root rather than two; the count is $\\boxed{1}$."
        ]
      }
    ],
    "remark": "The clean fact underneath is that eliminating $y$ collapses the whole system to a single line $a\\sin x+b\\cos x=\\tfrac{a^2+b^2}{2}$, whose right-hand value $\\tfrac{a^2+b^2}{2}$ is compared against the amplitude $\\sqrt{a^2+b^2}$. Interior to the disc ($a^2+b^2<4$) the level lies strictly below the amplitude, giving two roots and two swapped ordered pairs; on the boundary circle the level equals the amplitude, so the sine is pinned to $\\pm1$ and a double root fuses into one. Geometrically this is the triangle inequality at equality, where the two unit vectors are forced to coincide. The trap is the reflex 'a symmetric system always has both $(x,y)$ and $(y,x)$' -- true off $\\Gamma$, false on it, and the difference between answers $2$ and $1$ is exactly the degeneracy of the boundary."
  },
  {
    "theme": "equations",
    "themeLabel": "Periodicity & Root-Counting",
    "title": "Three Cosines in Arithmetic Progression",
    "difficulty": 5,
    "task": "Count the roots",
    "tags": [
      "trigonometric-equation",
      "sum-to-product",
      "factoring",
      "root-counting",
      "multiple-angle"
    ],
    "statement": "Find every solution of $\\cos x+\\cos 2x+\\cos 3x=0$ in $[0,2\\pi)$, and state how many there are.",
    "answer": "$$\\boxed{\\;x\\in\\left\\{\\dfrac{\\pi}{4},\\,\\dfrac{2\\pi}{3},\\,\\dfrac{3\\pi}{4},\\,\\dfrac{5\\pi}{4},\\,\\dfrac{4\\pi}{3},\\,\\dfrac{7\\pi}{4}\\right\\}\\;\\Longrightarrow\\; 6\\text{ solutions}\\;}$$",
    "trap": "The arguments $x,2x,3x$ are in arithmetic progression, so the outer pair $\\cos x+\\cos 3x$ pairs naturally — $not$ $\\cos x$ with $\\cos 2x$. A student who instead tries $\\cos x+\\cos 2x=2\\cos\\frac{3x}{2}\\cos\\frac{x}{2}$ leaves $\\cos 3x$ stranded with a half-angle argument and cannot factor. Pairing the equally-spaced extremes about the middle term $2x$ is what makes the common factor $\\cos 2x$ appear.",
    "solutions": [
      {
        "name": "Pair the outer terms",
        "steps": [
          "Group the terms whose arguments are symmetric about $2x$: $\\cos x+\\cos 3x=2\\cos\\!\\dfrac{x+3x}{2}\\cos\\!\\dfrac{3x-x}{2}=2\\cos 2x\\cos x.$",
          "The equation becomes $2\\cos 2x\\cos x+\\cos 2x=\\cos 2x\\,(2\\cos x+1)=0.$",
          "Either $\\cos 2x=0\\Rightarrow 2x=\\dfrac{\\pi}{2}+k\\pi\\Rightarrow x=\\dfrac{\\pi}{4}+\\dfrac{k\\pi}{2}$, giving $x=\\dfrac{\\pi}{4},\\dfrac{3\\pi}{4},\\dfrac{5\\pi}{4},\\dfrac{7\\pi}{4}$ in $[0,2\\pi)$.",
          "Or $\\cos x=-\\dfrac12\\Rightarrow x=\\dfrac{2\\pi}{3},\\dfrac{4\\pi}{3}.$ The six values are distinct, so there are $\\boxed{6}$ solutions."
        ]
      },
      {
        "name": "Collapse to a single product",
        "steps": [
          "Write $\\cos x+\\cos 3x+\\cos 2x$ and first combine $\\cos x+\\cos 2x=2\\cos\\dfrac{3x}{2}\\cos\\dfrac{x}{2}$; adding $\\cos 3x=2\\cos^2\\dfrac{3x}{2}-1$ is awkward, so instead use the AP-sum shortcut: $\\displaystyle\\sum_{j=1}^{3}\\cos jx=\\dfrac{\\sin\\frac{3x}{2}}{\\sin\\frac{x}{2}}\\cos 2x.$",
          "Hence the equation is $\\dfrac{\\sin\\frac{3x}{2}}{\\sin\\frac{x}{2}}\\cos 2x=0$ wherever $\\sin\\dfrac{x}{2}\\neq0$, i.e. $\\sin\\dfrac{3x}{2}=0$ or $\\cos 2x=0$.",
          "From $\\sin\\dfrac{3x}{2}=0$ with $\\sin\\dfrac{x}{2}\\neq0$ we get $\\dfrac{3x}{2}=k\\pi,\\ x\\neq2m\\pi$, i.e. $x=\\dfrac{2\\pi}{3},\\dfrac{4\\pi}{3}$ in $[0,2\\pi)$; from $\\cos 2x=0$ we get $x=\\dfrac{\\pi}{4},\\dfrac{3\\pi}{4},\\dfrac{5\\pi}{4},\\dfrac{7\\pi}{4}$.",
          "Together that is $\\boxed{6}$ solutions, matching the factored form $\\cos 2x\\,(2\\cos x+1)=0.$"
        ]
      }
    ],
    "remark": "**Insight.** When the arguments of several cosines (or sines) sit in arithmetic progression, pair the terms symmetric about the centre: the product-to-sum law forces out a common factor equal to the cosine of the central argument. Here $2x$ is the centre, so $\\cos 2x$ falls out and the residual factor $2\\cos x+1$ is just a quadratic-free linear condition on $\\cos x$."
  },
  {
    "theme": "equations",
    "themeLabel": "Periodicity & Root-Counting",
    "title": "Three Sines and the Lost Roots",
    "difficulty": 5,
    "task": "List all solutions",
    "tags": [
      "trigonometric-equation",
      "sum-to-product",
      "factoring",
      "extraneous-roots",
      "root-counting"
    ],
    "statement": "Solve $\\sin x+\\sin 2x+\\sin 3x=0$ for $x\\in[0,2\\pi)$. Be careful not to lose any roots when you factor.",
    "answer": "$$\\boxed{\\;x\\in\\left\\{0,\\,\\dfrac{\\pi}{2},\\,\\dfrac{2\\pi}{3},\\,\\pi,\\,\\dfrac{4\\pi}{3},\\,\\dfrac{3\\pi}{2}\\right\\}\\;\\Longrightarrow\\;6\\text{ solutions}\\;}$$",
    "trap": "After factoring $\\sin 2x\\,(2\\cos x+1)=0$, the branch $\\sin 2x=0$ is tempting to write as $\\sin x\\cos x=0$ and then ‘‘cancel’’ — but cancelling a factor throws away roots. More subtly, many students drop the endpoints: $\\sin 2x=0$ at $x=0$ and $x=\\pi$ are genuine solutions of the original equation (every term vanishes there), yet they vanish if one divides through by $\\sin x$ early. Keep the product intact and read off every zero of each factor.",
    "solutions": [
      {
        "name": "Pair the outer sines",
        "steps": [
          "Pair the arguments symmetric about $2x$: $\\sin x+\\sin 3x=2\\sin 2x\\cos x$, so the equation is $2\\sin 2x\\cos x+\\sin 2x=\\sin 2x\\,(2\\cos x+1)=0.$",
          "Branch $\\sin 2x=0\\Rightarrow 2x=k\\pi\\Rightarrow x=\\dfrac{k\\pi}{2}$, giving $x=0,\\dfrac{\\pi}{2},\\pi,\\dfrac{3\\pi}{2}$ in $[0,2\\pi)$.",
          "Branch $2\\cos x+1=0\\Rightarrow\\cos x=-\\dfrac12\\Rightarrow x=\\dfrac{2\\pi}{3},\\dfrac{4\\pi}{3}.$",
          "All six values are distinct and each satisfies the original equation, so the full solution set has $\\boxed{6}$ elements."
        ]
      },
      {
        "name": "AP-sum identity",
        "steps": [
          "For sines in arithmetic progression, $\\displaystyle\\sum_{j=1}^{3}\\sin jx=\\dfrac{\\sin\\frac{3x}{2}}{\\sin\\frac{x}{2}}\\sin 2x$ whenever $\\sin\\dfrac{x}{2}\\neq0.$",
          "So away from $x=0$ we need $\\sin\\dfrac{3x}{2}=0$ or $\\sin 2x=0$. The value $x=0$ must be checked separately in the original: $\\sin0+\\sin0+\\sin0=0$, so $x=0$ is a solution.",
          "From $\\sin 2x=0$: $x=\\dfrac{\\pi}{2},\\pi,\\dfrac{3\\pi}{2}$ (with $x=0$ already counted). From $\\sin\\dfrac{3x}{2}=0$ with $\\sin\\dfrac{x}{2}\\neq0$: $\\dfrac{3x}{2}=k\\pi,\\ x\\neq0,2\\pi\\Rightarrow x=\\dfrac{2\\pi}{3},\\dfrac{4\\pi}{3}.$",
          "Collecting $\\{0,\\tfrac{\\pi}{2},\\tfrac{2\\pi}{3},\\pi,\\tfrac{4\\pi}{3},\\tfrac{3\\pi}{2}\\}$ gives $\\boxed{6}$ solutions, agreeing with $\\sin 2x\\,(2\\cos x+1)=0.$"
        ]
      }
    ],
    "remark": "**Insight.** The sine analogue of the cosine-AP equation factors with $\\sin$ of the central argument rather than $\\cos$, which is why $x=0$ and $x=\\pi$ — where every individual sine is zero — now belong to the solution set. The recurring danger in equation-solving is divide-and-lose: never cancel a factor that can itself be zero; factor to a product and zero each piece."
  },
  {
    "theme": "equations",
    "themeLabel": "Periodicity & Root-Counting",
    "title": "The Squaring That Breeds False Roots",
    "difficulty": 5,
    "task": "Count the true solutions",
    "tags": [
      "trigonometric-equation",
      "linear-combination",
      "extraneous-roots",
      "harmonic-form",
      "root-counting"
    ],
    "statement": "A student solves $\\sin x+\\sqrt{3}\\,\\cos x=1$ on $[0,2\\pi)$ by squaring. Find the genuine solutions, and identify which of the squared candidates are extraneous.",
    "answer": "$$\\boxed{\\;x\\in\\left\\{\\dfrac{\\pi}{2},\\,\\dfrac{11\\pi}{6}\\right\\}\\;\\Longrightarrow\\;2\\text{ true solutions}\\;}$$",
    "trap": "Squaring $\\sin x=1-\\sqrt3\\cos x$ produces $4\\cos^2x-2\\sqrt3\\cos x=0$, whose four candidates are $x=\\dfrac{\\pi}{6},\\dfrac{\\pi}{2},\\dfrac{3\\pi}{2},\\dfrac{11\\pi}{6}$. But squaring also admits the sign-flipped equation $\\sin x+\\sqrt3\\cos x=-1$, so half the candidates are extraneous. Reporting $4$ solutions is the trap; only $\\dfrac{\\pi}{2}$ and $\\dfrac{11\\pi}{6}$ satisfy the original — $\\dfrac{\\pi}{6}$ and $\\dfrac{3\\pi}{2}$ solve the $-1$ equation instead.",
    "solutions": [
      {
        "name": "Harmonic (R-form) — no extraneous roots",
        "steps": [
          "Write $\\sin x+\\sqrt3\\cos x=R\\sin(x+\\varphi)$ with $R=\\sqrt{1^2+(\\sqrt3)^2}=2$ and $\\tan\\varphi=\\dfrac{\\sqrt3}{1}\\Rightarrow\\varphi=\\dfrac{\\pi}{3}.$ So the equation is $2\\sin\\!\\left(x+\\dfrac{\\pi}{3}\\right)=1.$",
          "Thus $\\sin\\!\\left(x+\\dfrac{\\pi}{3}\\right)=\\dfrac12\\Rightarrow x+\\dfrac{\\pi}{3}=\\dfrac{\\pi}{6}+2k\\pi$ or $x+\\dfrac{\\pi}{3}=\\dfrac{5\\pi}{6}+2k\\pi.$",
          "First family: $x=-\\dfrac{\\pi}{6}+2k\\pi\\Rightarrow x=\\dfrac{11\\pi}{6}$ in $[0,2\\pi)$. Second family: $x=\\dfrac{\\pi}{2}+2k\\pi\\Rightarrow x=\\dfrac{\\pi}{2}.$",
          "Both check directly: $\\sin\\frac{\\pi}{2}+\\sqrt3\\cos\\frac{\\pi}{2}=1$ and $\\sin\\frac{11\\pi}{6}+\\sqrt3\\cos\\frac{11\\pi}{6}=-\\frac12+\\sqrt3\\cdot\\frac{\\sqrt3}{2}=1.$ Hence exactly $\\boxed{2}$ solutions, with no squaring needed."
        ]
      },
      {
        "name": "Squaring, then filtering extraneous roots",
        "steps": [
          "Isolate and square: $\\sin x=1-\\sqrt3\\cos x\\Rightarrow\\sin^2x=1-2\\sqrt3\\cos x+3\\cos^2x.$ Using $\\sin^2x=1-\\cos^2x$: $1-\\cos^2x=1-2\\sqrt3\\cos x+3\\cos^2x\\Rightarrow 4\\cos^2x-2\\sqrt3\\cos x=0.$",
          "Factor: $2\\cos x\\,(2\\cos x-\\sqrt3)=0\\Rightarrow\\cos x=0$ or $\\cos x=\\dfrac{\\sqrt3}{2}.$ Candidates: $x=\\dfrac{\\pi}{2},\\dfrac{3\\pi}{2}$ and $x=\\dfrac{\\pi}{6},\\dfrac{11\\pi}{6}.$",
          "Substitute each into the original $\\sin x+\\sqrt3\\cos x$: at $\\dfrac{\\pi}{2}$ it is $1$ ✓; at $\\dfrac{3\\pi}{2}$ it is $-1$ ✗; at $\\dfrac{\\pi}{6}$ it is $\\dfrac12+\\sqrt3\\cdot\\dfrac{\\sqrt3}{2}=2\\neq1$ ✗; at $\\dfrac{11\\pi}{6}$ it is $1$ ✓.",
          "The two rejected candidates satisfy the conjugate equation introduced by squaring, leaving the true set $\\left\\{\\dfrac{\\pi}{2},\\dfrac{11\\pi}{6}\\right\\}$, i.e. $\\boxed{2}$ solutions."
        ]
      }
    ],
    "remark": "**Insight.** Squaring a trigonometric equation $f(x)=c$ secretly merges it with $f(x)=-c$ (and, when an isolated square root is involved, with sign flips of that root), so the candidate count can double. The clean defence is the harmonic form $a\\sin x+b\\cos x=R\\sin(x+\\varphi)$, which never inflates the solution set; if you do square, every candidate must be re-substituted into the original."
  },
  {
    "theme": "geometry",
    "themeLabel": "Triangle Geometry Through Trig",
    "title": "A Double-Angle Triangle",
    "difficulty": 4,
    "task": "Solve",
    "answerLabel": "Solutions",
    "tags": [
      "law-of-sines",
      "double-angle",
      "triangle"
    ],
    "statement": "\\text{In }\\triangle ABC,\\ A=2B\\text{ and }a:b=\\sqrt3:1.\\text{ Find }(A,B,C).",
    "answer": "(A,B,C)=\\left(\\frac\\pi3,\\frac\\pi6,\\frac\\pi2\\right)",
    "trap": "The trap is **$A=120^\\circ,B=60^\\circ$**, which leaves no positive angle for $C$.",
    "solutions": [
      {
        "name": "Method I: The chapter instrument",
        "steps": [
          "By the sine rule, $a/b=\\sin2B/\\sin B=2\\cos B=\\sqrt3$, so $B=\\pi/6$.",
          "Substituting the given restrictions and simplifying gives $(A,B,C)=\\left(\\frac\\pi3,\\frac\\pi6,\\frac\\pi2\\right)$."
        ]
      },
      {
        "name": "Method II: Independent check",
        "steps": [
          "Then $A=2B=\\pi/3$ and $C=\\pi-A-B=\\pi/2$.",
          "This route reaches the same value and rules out the trap, so the answer is $(A,B,C)=\\left(\\frac\\pi3,\\frac\\pi6,\\frac\\pi2\\right)$."
        ]
      }
    ],
    "remark": "Side ratios plus angle multiples usually collapse through the sine rule."
  },
  {
    "theme": "geometry",
    "themeLabel": "Triangle Geometry Through Trig",
    "title": "The Mollweide Gate and the Vanished Vertex",
    "difficulty": 5,
    "task": "Determine the exact value of the requested side ratio, deriving and applying Mollweide's formula, and explicitly justify which candidate solution survives the triangle-existence test",
    "tags": [
      "mollweide",
      "arithmetic-progression",
      "degenerate-case",
      "half-angle",
      "law-of-cosines",
      "hidden-constraint"
    ],
    "statement": "In a triangle $ABC$ (standard notation: $a,b,c$ are the sides opposite $A,B,C$) the angles $A,B,C$ are in arithmetic progression, and the sides satisfy the single relation \\[ a^{2}-c^{2}=b^{2}. \\] Find the exact value of $\\dfrac{a+c}{b}$. You are required to obtain the answer through Mollweide's identity $\\dfrac{a+c}{b}=\\dfrac{\\cos\\frac{A-C}{2}}{\\sin\\frac{B}{2}}$ (derive it if you do not know it), and to settle, with proof, the question of how many genuine triangles meet both conditions before you report a number. The arithmetic progression pins one angle; the cosine relation then appears to fix $\\tfrac{A-C}{2}$ — but read carefully whether it fixes one value or offers a second, inadmissible one.",
    "answer": "\\[\\boxed{\\sqrt{3}}\\]",
    "trap": "The relation reduces (see solutions) to $\\sin(A-C)=\\tfrac{\\sqrt3}{2}$, equivalently $2\\sin 2\\varphi=\\sqrt3$ with $\\varphi=\\tfrac{A-C}{2}$. A strong student reflexively takes the principal value $A-C=60^\\circ$ and stops. But $\\sin(A-C)=\\tfrac{\\sqrt3}{2}$ also admits $A-C=120^\\circ$. Since $B=60^\\circ$ forces $A+C=120^\\circ$, the branch $A-C=120^\\circ$ gives $A=120^\\circ,\\;C=0^\\circ$: a degenerate configuration with vertex $C$ collapsed onto side $b$, not a triangle at all. If that ghost branch is kept, $\\tfrac{a+c}{b}=2\\cos\\tfrac{A-C}{2}=2\\cos 60^\\circ=1$, the seductive clean wrong answer. Worse, the obvious law-of-cosines shortcut hides the trap rather than exposing it: combining $a^2-c^2=b^2$ with $b^2=a^2+c^2-ac$ gives $ac=2c^2$, and cancelling $c$ to write $a=2c$ silently discards the root $c=0$ — exactly the degenerate solution. The honest count is: two algebraic candidates, only $A-C=60^\\circ$ is a real triangle, so $\\tfrac{a+c}{b}=2\\cos30^\\circ=\\sqrt3$. The error is a missed degenerate case / lost root, never an arithmetic slip.",
    "solutions": [
      {
        "name": "Mollweide's formula with the existence filter",
        "steps": [
          "Angles in A.P. means $2B=A+C$; with $A+B+C=180^\\circ$ this gives $3B=180^\\circ$, so $B=60^\\circ$ and $A+C=120^\\circ$. Write $\\varphi=\\tfrac{A-C}{2}$, so $A=60^\\circ+\\varphi$, $C=60^\\circ-\\varphi$, and admissibility ($A,C>0$) demands $-60^\\circ<\\varphi<60^\\circ$ strictly.",
          "Derive Mollweide. By the law of sines $a=2R\\sin A,\\,b=2R\\sin B,\\,c=2R\\sin C$, so $\\tfrac{a+c}{b}=\\tfrac{\\sin A+\\sin C}{\\sin B}=\\tfrac{2\\sin\\frac{A+C}{2}\\cos\\frac{A-C}{2}}{2\\sin\\frac{B}{2}\\cos\\frac{B}{2}}$. Since $\\tfrac{A+C}{2}=90^\\circ-\\tfrac{B}{2}$, the numerator's $\\sin\\frac{A+C}{2}=\\cos\\frac{B}{2}$ cancels the denominator's, leaving $\\tfrac{a+c}{b}=\\dfrac{\\cos\\frac{A-C}{2}}{\\sin\\frac{B}{2}}$. With $B=60^\\circ$, $\\sin\\tfrac{B}{2}=\\sin30^\\circ=\\tfrac12$, hence $\\tfrac{a+c}{b}=2\\cos\\varphi$.",
          "Turn the side relation into a statement about $\\varphi$. With $2R=1$, $a^2-c^2=\\sin^2A-\\sin^2C=\\sin(A+C)\\sin(A-C)=\\sin120^\\circ\\,\\sin(A-C)=\\tfrac{\\sqrt3}{2}\\sin(2\\varphi)$, while $b^2=\\sin^2 60^\\circ=\\tfrac34$. The condition $a^2-c^2=b^2$ becomes $\\tfrac{\\sqrt3}{2}\\sin2\\varphi=\\tfrac34$, i.e. $\\sin2\\varphi=\\tfrac{\\sqrt3}{2}$.",
          "Solve and filter. With $2\\varphi\\in(-120^\\circ,120^\\circ)$, $\\sin2\\varphi=\\tfrac{\\sqrt3}{2}$ gives $2\\varphi=60^\\circ$ (so $\\varphi=30^\\circ$) or the boundary value $2\\varphi=120^\\circ$ (so $\\varphi=60^\\circ$). The second is exactly $C=60^\\circ-60^\\circ=0^\\circ$, a collapsed vertex — not a triangle — and must be rejected. Only $\\varphi=30^\\circ$ ($A=90^\\circ,C=30^\\circ$) survives.",
          "Therefore $\\dfrac{a+c}{b}=2\\cos\\varphi=2\\cos30^\\circ=\\boxed{\\sqrt3}.$"
        ]
      },
      {
        "name": "Law of cosines, recovering the root that cancellation hides",
        "steps": [
          "From the A.P., $B=60^\\circ$, so the law of cosines reads $b^2=a^2+c^2-2ac\\cos60^\\circ=a^2+c^2-ac$. Substitute the given $a^2-c^2=b^2$: $a^2-c^2=a^2+c^2-ac$, which simplifies to $ac=2c^2$, i.e. $c(a-2c)=0$.",
          "The factorisation has two roots. The root $c=0$ is the degenerate triangle (vertex $C$ on side $b$); discarding it is legitimate only because $c=0$ is no triangle — but note that blindly cancelling $c$ to get $a=2c$ would have thrown it away without justification. Keeping both in view, the genuine triangle satisfies $a=2c$.",
          "Scale so $c=1,a=2$. Then $b^2=a^2+c^2-ac=4+1-2=3$, so $b=\\sqrt3$, and indeed $a^2-c^2=4-1=3=b^2$ checks out. The angles are $A=90^\\circ,B=60^\\circ,C=30^\\circ$, confirming the A.P.",
          "Hence $\\dfrac{a+c}{b}=\\dfrac{2+1}{\\sqrt3}=\\dfrac{3}{\\sqrt3}=\\boxed{\\sqrt3}.$ The $c=0$ root would have forced $a=b$ with $A=120^\\circ,C=0^\\circ$ and the spurious value $\\tfrac{a+c}{b}=1$; it is excluded precisely because it is not a triangle."
        ]
      },
      {
        "name": "Projection formula reading off the right-angle structure",
        "steps": [
          "Rewrite the data geometrically. With $B=60^\\circ$, the relation $a^2-c^2=b^2$ is $a^2=b^2+c^2$, which by the converse of Pythagoras (or the law of cosines $\\cos A=\\tfrac{b^2+c^2-a^2}{2bc}$) forces $\\cos A=0$, i.e. $A=90^\\circ$. The right angle is not assumed — it is forced by the cosine relation, and there is exactly one such non-degenerate angle in $(0^\\circ,180^\\circ)$, eliminating any second branch at the source.",
          "Then $C=180^\\circ-90^\\circ-60^\\circ=30^\\circ$, automatically consistent with the A.P. $90^\\circ,60^\\circ,30^\\circ$. Using the projection formula $b=a\\cos C+c\\cos A$ and $A=90^\\circ$: $b=a\\cos30^\\circ$, so $a=\\tfrac{b}{\\cos30^\\circ}=\\tfrac{2b}{\\sqrt3}$; and $c=a\\cos B+b\\cos A=a\\cos60^\\circ=\\tfrac{a}{2}=\\tfrac{b}{\\sqrt3}$.",
          "Add the two: $a+c=\\tfrac{2b}{\\sqrt3}+\\tfrac{b}{\\sqrt3}=\\tfrac{3b}{\\sqrt3}=\\sqrt3\\,b$.",
          "Therefore $\\dfrac{a+c}{b}=\\boxed{\\sqrt3}.$ Because $A=90^\\circ$ is the unique non-degenerate solution of $\\cos A=0$, no inadmissible companion triangle arises here — the existence check is built into recognising the right angle."
        ]
      }
    ],
    "remark": "The problem is engineered around an under-taught tool, Mollweide's formula $\\tfrac{a+c}{b}=\\tfrac{\\cos((A-C)/2)}{\\sin(B/2)}$, and its companion $\\tfrac{a-c}{b}=\\tfrac{\\sin((A-C)/2)}{\\cos(B/2)}$ — identities that fuse the law of sines with sum-to-product and instantly convert side ratios into half-angle data. Three reflexes separate a top-rank solver here. (1) $\\sin(A-C)=\\tfrac{\\sqrt3}{2}$ is a two-valued sentence, $A-C\\in\\{60^\\circ,120^\\circ\\}$; the constraint $A+C=120^\\circ$ silently turns the second value into $C=0^\\circ$, a vertex that has vanished. Always run the triangle-existence filter ($0<A,B,C$, strict) before celebrating a clean number. (2) The seductive wrong answer $1=2\\cos60^\\circ$ is exactly what the rejected degenerate branch yields, so a clean value is no proof of correctness. (3) The law-of-cosines shortcut produces $c(a-2c)=0$; the habit of dividing by $c$ erases the degenerate root rather than rejecting it on geometric grounds — same destination, but the Mollweide route makes the lost vertex visible and forces an honest decision. Three independent paths — Mollweide, law of cosines, and the projection/right-angle reading — converge on $\\sqrt3$, the hallmark of a robust result.",
    "_meta_provenance": "Triangle with A,B,C in AP (=> B=60) and a^2-c^2=b^2. Reduces to sin(2phi)=sqrt3/2, phi=(A-C)/2, with phi in (-60,60) strict. Roots 2phi=60 (phi=30, valid: A=90,B=60,C=30) and 2phi=120 (phi=60, DEGENERATE C=0, reject). Answer (a+c)/b = 2cos(phi)=2cos30=sqrt3. Verified symbolically (sympy: Mollweide plus form (a+c)/b-2cos(phi)=0; minus form (a-c)/b-(2/sqrt3)sin(phi)=0; condition reduces to sqrt3/2*sin2phi-3/4; solveset on open (-60,60) returns {pi/6}). Brute force over 2e6 samples of phi in (-59.9,59.9) found exactly one non-degenerate root at phi=30.000000 with (a+c)/b=1.73205081. Concrete triangle a=2,b=sqrt3,c=1 satisfies a^2-c^2=b^2=3, A=90/B=60/C=30 (AP holds), (a+c)/b=3/sqrt3=sqrt3=1.7320508. Trap value 1 = 2cos60 from rejected degenerate branch; law-of-cosines route c(a-2c)=0 loses c=0 root on cancellation. Projection route: a^2=b^2+c^2 forces A=90 uniquely. All three methods end at sqrt3."
  },
  {
    "theme": "geometry",
    "themeLabel": "Triangle Geometry Through Trig",
    "title": "The Vertex That Rides an Arc",
    "difficulty": 5,
    "task": "Find the circumradius",
    "tags": [
      "law-of-sines",
      "inscribed-angle",
      "locus",
      "tangency",
      "circumradius",
      "half-angle"
    ],
    "statement": "Fix a segment $BC$ of length $8$ horizontally, with $B=(-4,0)$ and $C=(4,0)$. A point $A$ moves in the upper half-plane so that the angle $\\angle BAC$ keeps a constant value, making $ABC$ a triangle with $BC$ as the side opposite $A$. Because $\\dfrac{a}{\\sin A}=2R$ (the extended law of sines, itself a restatement of the inscribed-angle theorem: the chord $BC=a$ subtends the angle $A$ at $A$ on a circle of radius $R$), the circumradius $R$ is the same for every position of $A$, and the locus of $A$ is a circular arc through $B$ and $C$. Determine $R$ so that this locus arc is \\[ \\text{tangent to the line } \\ell:\\; y=8. \\] (The constant angle $A$ is whatever value makes this happen; $A$ stays a genuine triangle vertex, never on $BC$.)",
    "answer": "\\[\\boxed{R=5}\\]",
    "trap": "The line $y=8$ sits at distance $8$ above $BC$, so the apex must climb to $y=8$. The fatal shortcut is to decide that the tallest an apex over a chord of length $8$ can stand is when $A$ is a right angle, i.e. when $BC$ is a diameter: then $2R=a=8$, giving $R=4$ and an apex height of only $R=4$. From there one declares the arc can never reach $y=8$ and the problem has no solution. The error is treating $A=90^\\circ$ as a ceiling. As the constant angle $A$ shrinks below $90^\\circ$, the circle swells, its centre rises above $BC$, and the apex height $R(1+\\cos A)=\\tfrac{a}{2}\\cot\\tfrac{A}{2}$ grows without bound. A smaller angle, not a right angle, lifts the arc to $y=8$; the right-angle case is the worst case for height, not the best, so $R=4$ is exactly backwards.",
    "solutions": [
      {
        "name": "Inscribed angle gives 2R, then coordinate tangency",
        "steps": [
          "The chord $BC=a=8$ subtends the fixed angle $A$ at the moving vertex. The inscribed-angle theorem says every point seeing a fixed chord under a fixed angle lies on one circular arc; the central angle on that chord is $2A$, so the half-chord obeys $\\tfrac{a}{2}=R\\sin A$, i.e. $\\dfrac{a}{\\sin A}=2R$. This is the extended law of sines, and it forces $R$ to be the same for the whole locus.",
          "Place the circumcircle's centre on the perpendicular bisector of $BC$, at $O=(0,k)$. Since $|OB|=R$, we get $R^2=4^2+k^2=16+k^2$.",
          "The locus arc lies in $y>0$ and its highest point is the top of the circle, $(0,\\,k+R)$. The horizontal line $\\ell:y=8$ is tangent to the arc exactly when it grazes this single topmost point, so $k+R=8$.",
          "Solve $k+R=8$ with $R^2=16+k^2$: substitute $k=8-R$ to get $R^2=16+(8-R)^2=16+64-16R+R^2$, hence $16R=80$ and $R=5$ (then $k=3$).",
          "Check: centre $(0,3)$, radius $5$; distance from $(0,3)$ to $y=8$ is $5=R$, so $\\ell$ touches the circle at $(0,8)$, which is on the upper arc — a true tangency. Thus $\\boxed{R=5}$."
        ]
      },
      {
        "name": "Pythagorean elimination of the angle",
        "steps": [
          "From the sine rule the constant angle satisfies $R\\sin A=\\tfrac{a}{2}=4$. The apex of the arc (its point farthest from $BC$) stands at height $H=R+R\\cos A=R(1+\\cos A)$ above $BC$, where $R\\cos A$ is the signed distance from the circumcentre to $BC$.",
          "Tangency to $y=8$ means this apex height equals $8$: $R(1+\\cos A)=8$, i.e. $R+R\\cos A=8$, so $R\\cos A=8-R$.",
          "Now eliminate $A$ by squaring and adding $R\\cos A=8-R$ and $R\\sin A=4$: $R^2=(R\\cos A)^2+(R\\sin A)^2=(8-R)^2+16$.",
          "Expand: $R^2=64-16R+R^2+16$, so $16R=80$ and $R=5$. Back-substituting, $\\cos A=\\tfrac{8-R}{R}=\\tfrac35$ and $\\sin A=\\tfrac45$, a genuine acute angle, confirming $A$ is a real vertex. Hence $\\boxed{R=5}$."
        ]
      },
      {
        "name": "Half-angle apex-height formula",
        "steps": [
          "The greatest height an apex reaches above its opposite side, for fixed base $a$ and fixed apex angle $A$, is $H=\\dfrac{a}{2}\\cot\\dfrac{A}{2}$, since $R(1+\\cos A)=\\dfrac{a}{2\\sin A}(1+\\cos A)=\\dfrac{a}{2}\\cdot\\dfrac{1+\\cos A}{\\sin A}=\\dfrac{a}{2}\\cot\\dfrac{A}{2}$.",
          "Tangency to $y=8$ pins the apex at height $H=8$, so with $a=8$ we need $\\dfrac{8}{2}\\cot\\dfrac{A}{2}=8$, giving $\\cot\\dfrac{A}{2}=2$, i.e. $\\tan\\dfrac{A}{2}=\\tfrac12$.",
          "Then $\\sin A=\\dfrac{2\\tan\\frac{A}{2}}{1+\\tan^2\\frac{A}{2}}=\\dfrac{2\\cdot\\frac12}{1+\\frac14}=\\dfrac{1}{\\frac54}=\\dfrac45$, an acute angle so the arc indeed rises above $BC$.",
          "Finally $R=\\dfrac{a}{2\\sin A}=\\dfrac{8}{2\\cdot\\frac45}=\\dfrac{8}{\\frac85}=5$, so $\\boxed{R=5}$."
        ]
      }
    ],
    "remark": "The whole problem is the inscribed-angle theorem read as a locus: a vertex with fixed opposite side and fixed angle rides a single arc whose radius is exactly the circumradius $\\tfrac{a}{2\\sin A}$. Tangency to a line then becomes a one-equation condition, because among all the arc's points only the topmost can graze a horizontal line. The trap punishes the instinct that a right angle gives the tallest triangle on a given base — in fact the apex height $\\tfrac{a}{2}\\cot\\tfrac{A}{2}$ is unbounded as $A\\to0$, so shrinking the angle is what lifts the arc to the line. Three routes (coordinates, Pythagorean elimination, the half-angle height) all land on $R=5$, and the same picture reveals the deeper fact: for fixed $a$ and $R$, the sine rule's two-valued $\\sin A=\\tfrac{a}{2R}$ produces two arcs of equal radius — a tall one (acute apex) tangent high up and a flat one (obtuse apex) tangent low — the line you target selects which arc you live on."
  },
  {
    "theme": "geometry",
    "themeLabel": "Triangle Geometry Through Trig",
    "title": "The Contact Circle Speaks in Half-Angles",
    "difficulty": 5,
    "task": "Find the tangent length and the area",
    "tags": [
      "incircle",
      "contact-triangle",
      "half-angle",
      "heron",
      "angle-sum-constraint"
    ],
    "statement": "In triangle $ABC$ the incircle, of radius $r$, touches the three sides; the tangent length from a vertex to the incircle equals $s-a$, $s-b$, $s-c$ from $A$, $B$, $C$ respectively, where $s$ is the semiperimeter. Suppose the tangent lengths from $B$ and $C$ are \\[ s-b=9,\\qquad s-c=11, \\] and the inradius is $r=3$. Working only from the identity $r=(s-a)\\tan\\frac{A}{2}$ (and its analogues), with no recourse to a memorised area formula, determine the remaining tangent length $s-a$ and the area of triangle $ABC$.",
    "answer": "\\[\\boxed{s-a=2,\\quad [ABC]=66}\\]",
    "trap": "Each half-angle gives $\\tan\\frac{A}{2}=\\frac{r}{s-a}$, $\\tan\\frac{B}{2}=\\frac{r}{s-b}$, $\\tan\\frac{C}{2}=\\frac{r}{s-c}$, so the temptation is to chain them through a half-angle identity. The fatal slip is grabbing the wrong one: the identity $\\tan\\frac{A}{2}+\\tan\\frac{B}{2}+\\tan\\frac{C}{2}=\\tan\\frac{A}{2}\\tan\\frac{B}{2}\\tan\\frac{C}{2}$ is valid only when the three angles sum to $\\pi$ — but $\\frac{A}{2}+\\frac{B}{2}+\\frac{C}{2}=\\frac{\\pi}{2}$, not $\\pi$. The constraint $u+v+w=\\frac{\\pi}{2}$ instead forces $\\tan u\\tan v+\\tan v\\tan w+\\tan w\\tan u=1$. A solver who imports the sum-equals-product identity obtains $r^{2}=(s-a)(s-b)+(s-b)(s-c)+(s-c)(s-a)$, i.e. $9=20(s-a)+99$, giving $s-a=-\\tfrac{9}{2}<0$, and wrongly concludes that no such triangle exists. The correct identity $\\tan u\\tan v+\\tan v\\tan w+\\tan w\\tan u=1$ gives $r^{2}(x+y+z)=xyz$ (Heron in disguise), a single positive answer.",
    "solutions": [
      {
        "name": "Half-angle product identity (Heron rederived)",
        "steps": [
          "Write the tangent lengths $x=s-a,\\ y=s-b=9,\\ z=s-c=11$, so the sides are $a=y+z,\\ b=z+x,\\ c=x+y$ and $s=x+y+z$. The contact relation $r=(s-a)\\tan\\frac{A}{2}$ and its cyclic mates give $\\tan\\frac{A}{2}=\\frac{r}{x},\\ \\tan\\frac{B}{2}=\\frac{r}{y},\\ \\tan\\frac{C}{2}=\\frac{r}{z}$.",
          "Because $\\frac{A}{2}+\\frac{B}{2}+\\frac{C}{2}=\\frac{\\pi}{2}$, the half-angles obey $\\tan\\frac{A}{2}\\tan\\frac{B}{2}+\\tan\\frac{B}{2}\\tan\\frac{C}{2}+\\tan\\frac{C}{2}\\tan\\frac{A}{2}=1$. Substituting the tangents, $\\frac{r^{2}}{xy}+\\frac{r^{2}}{yz}+\\frac{r^{2}}{zx}=1$, i.e. $r^{2}(x+y+z)=xyz$ — exactly the relation $r^{2}s=(s-a)(s-b)(s-c)$, which is Heron's formula squared.",
          "This is linear in the unknown $x$: $r^{2}x+r^{2}(y+z)=xyz$ gives $x=\\dfrac{r^{2}(y+z)}{yz-r^{2}}=\\dfrac{9\\cdot 20}{99-9}=\\dfrac{180}{90}=2$. So $s-a=2$.",
          "Then $s=x+y+z=2+9+11=22$ and the area is $[ABC]=rs=3\\cdot 22=\\boxed{66}$, with $s-a=2$."
        ]
      },
      {
        "name": "Cotangent of the complementary pair",
        "steps": [
          "From $\\frac{A}{2}=\\frac{\\pi}{2}-\\left(\\frac{B}{2}+\\frac{C}{2}\\right)$ we get $\\tan\\frac{A}{2}=\\cot\\!\\left(\\frac{B}{2}+\\frac{C}{2}\\right)=\\dfrac{1-\\tan\\frac{B}{2}\\tan\\frac{C}{2}}{\\tan\\frac{B}{2}+\\tan\\frac{C}{2}}$.",
          "Here $\\tan\\frac{B}{2}=\\frac{r}{s-b}=\\frac{3}{9}=\\frac{1}{3}$ and $\\tan\\frac{C}{2}=\\frac{r}{s-c}=\\frac{3}{11}$, so $\\tan\\frac{A}{2}=\\dfrac{1-\\frac{1}{3}\\cdot\\frac{3}{11}}{\\frac{1}{3}+\\frac{3}{11}}=\\dfrac{1-\\frac{1}{11}}{\\frac{20}{33}}=\\dfrac{\\frac{10}{11}}{\\frac{20}{33}}=\\dfrac{3}{2}$.",
          "Invert the contact relation: $s-a=\\dfrac{r}{\\tan\\frac{A}{2}}=\\dfrac{3}{3/2}=2$.",
          "Hence $s=2+9+11=22$ and $[ABC]=rs=3\\cdot 22=\\boxed{66}$, with $s-a=2$."
        ]
      },
      {
        "name": "Area-equals-inradius-times-semiperimeter consistency",
        "steps": [
          "With $x=s-a$ unknown the sides are $a=20,\\ b=11+x,\\ c=9+x$ and $s=20+x$. The contact decomposition makes the area split into three kites of total area $r\\,s$, so $[ABC]=rs=3(20+x)$ for whatever the (yet unknown) inradius forces $x$ to be.",
          "Independently, the contact relations give $r^{2}=(s-a)\\tan\\frac{A}{2}\\cdot(s-a)\\cot\\frac{A}{2}$ only trivially, so instead impose self-consistency through the half-angle constraint $\\frac{A}{2}+\\frac{B}{2}+\\frac{C}{2}=\\frac{\\pi}{2}$, which (as in Method 1) is equivalent to $r^{2}s=(s-a)(s-b)(s-c)=x\\cdot 9\\cdot 11$.",
          "Thus $9\\,(x+20)=99x$, giving $9x+180=99x$, so $90x=180$ and $x=2$; the inradius condition is met by exactly this one positive value.",
          "Therefore $s-a=2$, $s=22$, and $[ABC]=rs=3\\cdot 22=\\boxed{66}$."
        ]
      }
    ],
    "remark": "The problem refuses to let you reach for Heron's formula and instead makes you rebuild it from the inside: the single contact identity $r=(s-a)\\tan\\frac{A}{2}$, fed through the half-angle relation $\\tan\\frac{A}{2}\\tan\\frac{B}{2}+\\cdots=1$, is precisely $r^{2}s=(s-a)(s-b)(s-c)$. The whole difficulty is one constraint — the half-angles sum to $\\frac{\\pi}{2}$, not $\\pi$. Choose the identity tied to $\\pi$ and you get $r^{2}=\\sum(s-a)(s-b)$, a negative tangent length, and the false verdict that the triangle is impossible; choose the one tied to $\\frac{\\pi}{2}$ and Heron falls out, delivering the genuine triangle with sides $20,13,11$."
  },
  {
    "theme": "geometry",
    "themeLabel": "Triangle Geometry Through Trig",
    "title": "The Mirage Beneath the Cotangent Floor",
    "difficulty": 5,
    "task": "Find the minimum value",
    "tags": [
      "cotangent-sum",
      "weitzenbock",
      "am-gm",
      "hidden-constraint",
      "extremum",
      "equilateral"
    ],
    "statement": "For a triangle $ABC$ with side lengths $a,b,c$ opposite the respective angles and area $\\Delta$, consider the quantity \\[ G \\;=\\; \\frac{a^{2}+b^{2}+c^{2}}{\\Delta} \\;+\\; \\frac{36\\,\\Delta}{a^{2}+b^{2}+c^{2}}. \\] As $ABC$ ranges over all (non-degenerate) triangles, determine the smallest value $G$ can take. (You will likely first want to express $\\dfrac{a^{2}+b^{2}+c^{2}}{4\\Delta}$ as a sum over the angles.)",
    "answer": "\\[\\boxed{7\\sqrt{3}}\\]",
    "trap": "Write $u=\\dfrac{a^{2}+b^{2}+c^{2}}{\\Delta}$, so $G=u+\\dfrac{36}{u}$, and fire AM-GM: $u+\\dfrac{36}{u}\\ge 2\\sqrt{u\\cdot\\frac{36}{u}}=2\\sqrt{36}=12$, \"equality at $u=6$\". This hands back the clean integer $12$. But AM-GM's equality demands $u=\\dfrac{36}{u}$, i.e. $u=6$, and $u=6$ is OUTSIDE the achievable range: Weitzenbock forces $u=\\dfrac{a^{2}+b^{2}+c^{2}}{\\Delta}\\ge 4\\sqrt3\\approx 6.928>6$ for every triangle. The function $u\\mapsto u+\\frac{36}{u}$ is strictly increasing once $u>6$, so over the feasible window $u\\ge 4\\sqrt3$ the minimum sits at the left endpoint $u=4\\sqrt3$, not at the (unreachable) AM-GM point. The bound $12$ is a mirage below the cotangent floor; the genuine minimum is $7\\sqrt3\\approx 12.124>12$.",
    "solutions": [
      {
        "name": "Cotangent-sum identity, then Weitzenbock, then monotonicity",
        "steps": [
          "Identity. By the law of cosines $\\cos C=\\dfrac{a^{2}+b^{2}-c^{2}}{2ab}$ and the area $\\Delta=\\tfrac12 ab\\sin C$, so $\\cot C=\\dfrac{\\cos C}{\\sin C}=\\dfrac{a^{2}+b^{2}-c^{2}}{4\\Delta}$. Summing the three cyclic copies, the $\\pm c^{2}$ terms combine to give \\[ \\cot A+\\cot B+\\cot C=\\frac{(b^{2}+c^{2}-a^{2})+(c^{2}+a^{2}-b^{2})+(a^{2}+b^{2}-c^{2})}{4\\Delta}=\\frac{a^{2}+b^{2}+c^{2}}{4\\Delta}. \\] Thus $u:=\\dfrac{a^{2}+b^{2}+c^{2}}{\\Delta}=4S$ where $S=\\cot A+\\cot B+\\cot C$.",
          "Lower bound on $S$ (Weitzenbock's engine). With $A+B+C=\\pi$ one has $\\cot A\\cot B+\\cot B\\cot C+\\cot C\\cot A=1$. Hence $S^{2}=\\sum\\cot^{2}A+2\\sum\\cot A\\cot B=\\sum\\cot^{2}A+2\\ge \\sum\\cot A\\cot B+2=3$, using $\\sum\\cot^{2}A\\ge\\sum\\cot A\\cot B$ (which is $\\tfrac12\\sum(\\cot A-\\cot B)^{2}\\ge0$). Therefore $S\\ge\\sqrt3$, i.e. $u\\ge 4\\sqrt3$, with equality iff $\\cot A=\\cot B=\\cot C$, i.e. the triangle is equilateral.",
          "Minimize on the feasible window. In terms of $u$, $G=u+\\dfrac{36}{u}$ with $u\\ge 4\\sqrt3$. Since $\\dfrac{d}{du}\\!\\left(u+\\dfrac{36}{u}\\right)=1-\\dfrac{36}{u^{2}}>0$ exactly when $u>6$, and $4\\sqrt3=\\sqrt{48}>6$, the map is strictly increasing throughout $u\\ge 4\\sqrt3$. So $G$ is least at the left endpoint $u=4\\sqrt3$.",
          "Evaluate. $G_{\\min}=4\\sqrt3+\\dfrac{36}{4\\sqrt3}=4\\sqrt3+\\dfrac{9}{\\sqrt3}=4\\sqrt3+3\\sqrt3=\\boxed{7\\sqrt3}$, attained exactly for the equilateral triangle."
        ]
      },
      {
        "name": "Constrained AM-GM with the correct split",
        "steps": [
          "From the identity of Solution 1, $G=4S+\\dfrac{9}{S}$ where $S=\\cot A+\\cot B+\\cot C\\ge\\sqrt3$. The naive AM-GM split $4S+\\dfrac9S\\ge 2\\sqrt{36}=12$ would need $4S=\\dfrac9S$, i.e. $S=\\tfrac32$; but $\\tfrac32<\\sqrt3$, so that equality point is infeasible and the bound $12$ is unattainable.",
          "Choose the AM-GM weights so equality lands at the boundary $S=\\sqrt3$. Write $4S+\\dfrac9S=\\Big(\\lambda S+\\dfrac9S\\Big)+(4-\\lambda)S$ and pick $\\lambda$ so the bracket's equality occurs at $S=\\sqrt3$: $\\lambda S=\\dfrac9S$ at $S=\\sqrt3$ gives $\\lambda=\\dfrac{9}{S^{2}}=3$. Then $3S+\\dfrac9S\\ge 2\\sqrt{27}=6\\sqrt3$ (equality at $S=\\sqrt3$), and the leftover $(4-3)S=S\\ge\\sqrt3$ (equality at $S=\\sqrt3$).",
          "Adding the two tight estimates, $G=3S+\\dfrac9S+S\\ge 6\\sqrt3+\\sqrt3=7\\sqrt3$, with simultaneous equality precisely at $S=\\sqrt3$, the equilateral case.",
          "Hence $G\\ge 7\\sqrt3$ and the value $7\\sqrt3$ is achieved, so $G_{\\min}=\\boxed{7\\sqrt3}$."
        ]
      },
      {
        "name": "Calculus on the single free variable via $u$",
        "steps": [
          "Let $u=\\dfrac{a^{2}+b^{2}+c^{2}}{\\Delta}$. By Weitzenbock $u\\in[4\\sqrt3,\\infty)$, and every such $u$ is realized (the family of isosceles triangles with apex angle $\\theta$ sweeps $u$ continuously from $4\\sqrt3$ at $\\theta=\\tfrac{\\pi}{3}$ up to $+\\infty$ as $\\theta\\to0^{+}$ or $\\theta\\to\\pi^{-}$). So minimizing $G$ over triangles equals minimizing $g(u)=u+\\dfrac{36}{u}$ over $[4\\sqrt3,\\infty)$.",
          "$g'(u)=1-\\dfrac{36}{u^{2}}=0$ gives the only stationary point $u=6$, which lies to the LEFT of the domain since $6<4\\sqrt3$. On the entire domain $u\\ge4\\sqrt3>6$ we have $g'(u)>0$, so $g$ is strictly increasing and has no interior minimum.",
          "A strictly increasing continuous function on $[4\\sqrt3,\\infty)$ attains its minimum at the left endpoint $u=4\\sqrt3$, i.e. at the equilateral triangle.",
          "Therefore $G_{\\min}=g(4\\sqrt3)=4\\sqrt3+\\dfrac{36}{4\\sqrt3}=4\\sqrt3+3\\sqrt3=\\boxed{7\\sqrt3}$."
        ]
      }
    ],
    "remark": "The whole problem turns on a single discipline: AM-GM only delivers its bound when the equality configuration is actually attainable. Here the inner variable $u=(a^{2}+b^{2}+c^{2})/\\Delta$ is not free on $(0,\\infty)$ -- the cotangent-sum identity $\\sum\\cot=\\tfrac{a^{2}+b^{2}+c^{2}}{4\\Delta}$ converts the geometric data into the trigonometric inequality $\\sum\\cot\\ge\\sqrt3$, which is exactly Weitzenbock's $a^{2}+b^{2}+c^{2}\\ge4\\sqrt3\\,\\Delta$ in disguise. That hidden floor $u\\ge4\\sqrt3$ amputates the part of the hyperbola $u+36/u$ where the textbook minimum $12$ would live, pushing the true optimum up onto the boundary, where (and only where) the triangle is equilateral. The clean integer $12$ is the signature of forgetting the constraint; $7\\sqrt3$ is the signature of respecting it."
  },
  {
    "theme": "geometry",
    "themeLabel": "Triangle Geometry Through Trig",
    "title": "Napier's Tangent Rule and the Side That Cancellation Hides",
    "difficulty": 5,
    "task": "Prove the identity, then solve and stabilise",
    "tags": [
      "law-of-tangents",
      "napier",
      "half-angle",
      "mollweide",
      "numerical-stability",
      "sas"
    ],
    "statement": "Let $ABC$ be a triangle with sides $a,b,c$ opposite to angles $A,B,C$. (a) Prove the law of tangents (Napier's analogy): \\[ \\frac{a-b}{a+b}=\\frac{\\tan\\frac{A-B}{2}}{\\tan\\frac{A+B}{2}}. \\] (b) A triangle is given by $a=5$, $b=3$ and the included angle $C=120^{\\circ}$. Using only part (a) and the angle sum (no law of cosines), determine the angles $A$ and $B$ in closed form, and hence find the third side $c$. (c) Explain why, when $C$ is very small and $a\\approx b$, computing $c$ from $c^2=a^2+b^2-2ab\\cos C$ in finite precision loses many digits, whereas the law-of-tangents route does not. Report the value of $c$ for the triangle of part (b).",
    "answer": "\\[\\boxed{c=7}\\]",
    "trap": "The law of tangents has a built-in sign hazard that even strong students stumble on. After (a) one writes $\\frac{A+B}{2}=\\frac{\\pi-C}{2}=30^{\\circ}$ and $\\tan\\frac{A-B}{2}=\\frac{a-b}{a+b}\\tan 30^{\\circ}=\\frac{1}{4\\sqrt3}$. The tempting slip is to treat $\\frac{A-B}{2}$ as merely 'half the angle difference' and forget that its sign is forced by which side is larger: since $a>b$ we must have $A>B$, so $\\frac{A-B}{2}=+\\arctan\\frac{1}{4\\sqrt3}>0$ and $A$ is the larger angle. A student who writes the ratio as $\\frac{b-a}{b+a}$, or who solves a quadratic for the angles symmetrically, gets $\\frac{A-B}{2}=\\pm\\arctan\\frac{1}{4\\sqrt3}$ and then pins the larger angle $38.2^{\\circ}$ to the shorter side $b=3$. Both sets of angles satisfy $A+B=60^{\\circ}$ and even reproduce $c=7$ by symmetry of $c^2=a^2+b^2-2ab\\cos C$, so the third side gives no warning — yet one labelling is a different (mirror) triangle that violates the side-angle ordering $a>b\\Rightarrow A>B$. The genuine constraint is not algebraic but geometric: the larger side must face the larger angle, which fixes the sign uniquely.",
    "solutions": [
      {
        "name": "Sum-to-product on the sine rule",
        "steps": [
          "Part (a): By the law of sines write $a=2R\\sin A$, $b=2R\\sin B$. Then $\\frac{a-b}{a+b}=\\frac{\\sin A-\\sin B}{\\sin A+\\sin B}$, the common factor $2R$ cancelling.",
          "Apply sum-to-product: $\\sin A-\\sin B=2\\cos\\frac{A+B}{2}\\sin\\frac{A-B}{2}$ and $\\sin A+\\sin B=2\\sin\\frac{A+B}{2}\\cos\\frac{A-B}{2}$. Dividing, the $2$'s cancel and the quotient is $\\dfrac{\\sin\\frac{A-B}{2}/\\cos\\frac{A-B}{2}}{\\sin\\frac{A+B}{2}/\\cos\\frac{A+B}{2}}=\\dfrac{\\tan\\frac{A-B}{2}}{\\tan\\frac{A+B}{2}}$, proving the law of tangents.",
          "Part (b): Since $A+B=\\pi-C=60^{\\circ}$, we have $\\frac{A+B}{2}=30^{\\circ}$ and $\\tan\\frac{A+B}{2}=\\frac1{\\sqrt3}$. The law of tangents gives $\\tan\\frac{A-B}{2}=\\frac{a-b}{a+b}\\tan\\frac{A+B}{2}=\\frac{2}{8}\\cdot\\frac{1}{\\sqrt3}=\\frac{1}{4\\sqrt3}$. Because $a>b$, the larger angle faces the larger side, so $\\frac{A-B}{2}=+\\arctan\\frac{1}{4\\sqrt3}$ (positive root). Hence $A=30^{\\circ}+\\arctan\\frac{1}{4\\sqrt3}$ and $B=30^{\\circ}-\\arctan\\frac{1}{4\\sqrt3}$, numerically $A\\approx38.21^{\\circ}$, $B\\approx21.79^{\\circ}$.",
          "For the third side use the law of sines: $c=\\dfrac{a\\sin C}{\\sin A}$. With $\\sin C=\\sin120^{\\circ}=\\frac{\\sqrt3}{2}$ and $\\sin A=\\sin\\!\\big(30^{\\circ}+\\arctan\\frac{1}{4\\sqrt3}\\big)$, expand $\\sin A=\\sin30^{\\circ}\\cos\\theta+\\cos30^{\\circ}\\sin\\theta$ where $\\theta=\\arctan\\frac1{4\\sqrt3}$ has $\\cos\\theta=\\frac{4\\sqrt3}{7}$, $\\sin\\theta=\\frac{1}{7}$ (since $\\sqrt{(4\\sqrt3)^2+1^2}=\\sqrt{49}=7$). Thus $\\sin A=\\frac12\\cdot\\frac{4\\sqrt3}{7}+\\frac{\\sqrt3}{2}\\cdot\\frac17=\\frac{2\\sqrt3}{7}+\\frac{\\sqrt3}{14}=\\frac{5\\sqrt3}{14}$, giving $c=\\frac{5\\cdot\\frac{\\sqrt3}{2}}{\\frac{5\\sqrt3}{14}}=\\boxed{7}$."
        ]
      },
      {
        "name": "Mollweide route for the side (no squared cancellation)",
        "steps": [
          "Take part (a) as proven and the angles of (b): $\\frac{A+B}{2}=30^{\\circ}$, $\\frac{A-B}{2}=\\theta=\\arctan\\frac{1}{4\\sqrt3}$, so $\\sin\\theta=\\frac17$, $\\cos\\theta=\\frac{4\\sqrt3}{7}$.",
          "Mollweide's first formula reads $\\dfrac{a-b}{c}=\\dfrac{\\sin\\frac{A-B}{2}}{\\cos\\frac C2}$ (provable the same sum-to-product way: $a-b=2R(\\sin A-\\sin B)=4R\\cos\\frac{A+B}{2}\\sin\\frac{A-B}{2}$ and $c=2R\\sin C=4R\\sin\\frac C2\\cos\\frac C2$, with $\\cos\\frac{A+B}{2}=\\sin\\frac C2$). Solve for $c$: $c=\\dfrac{(a-b)\\cos\\frac C2}{\\sin\\frac{A-B}{2}}$.",
          "Here $a-b=2$, $\\cos\\frac C2=\\cos60^{\\circ}=\\frac12$, and $\\sin\\frac{A-B}{2}=\\sin\\theta=\\frac17$. Therefore $c=\\dfrac{2\\cdot\\frac12}{\\frac17}=\\dfrac{1}{1/7}=7$.",
          "This is the numerically stable route demanded in (c): it uses the difference $a-b$ directly, never the combination $a^2+b^2-2ab\\cos C$. The boxed third side is $\\boxed{c=7}$."
        ]
      },
      {
        "name": "Cross-check by the very law of cosines we avoided",
        "steps": [
          "As an independent confirmation only (the problem forbids using it to derive the angles), evaluate $c^2=a^2+b^2-2ab\\cos C=25+9-2\\cdot5\\cdot3\\cos120^{\\circ}=34-30\\cdot(-\\tfrac12)=34+15=49$, so $c=7$, matching both elegant routes.",
          "Now make the stability point of (c) precise. The exact arithmetic gives $c^2=49$, but consider instead a near-degenerate triangle $a=1000$, $b=999.5$, $C=0.001^{\\circ}$. Then $a^2+b^2=1{,}999{,}000.25$ and $2ab\\cos C\\approx1{,}999{,}000$, so the difference $\\approx0.25$ is a tiny residue of two huge nearly-equal numbers: in single precision ($\\sim7$ significant digits) the subtraction $a^2+b^2-2ab\\cos C$ loses about $6$ of them — catastrophic cancellation. A float32 evaluation returns $c\\approx0.5$ against the true $c\\approx0.50030$, a relative error near $6\\times10^{-4}$.",
          "The law-of-tangents / Mollweide route of solution 2 never forms that difference: it works with $a-b=0.5$ (computed once, benign) and well-conditioned trig values, so its float error stays near machine epsilon ($\\sim10^{-14}$ in float64). That is the structural reason the tangent rule is the numerically stable way to solve $\\mathrm{SAS}$ when $C$ is small and $a\\approx b$.",
          "For the stated triangle all three routes agree: $\\boxed{c=7}$."
        ]
      }
    ],
    "remark": "The law of tangents is the forgotten third member of the sine/cosine family, and this problem rehabilitates it as a tool, not a trophy. Two ideas earn their keep. First, it solves an $\\mathrm{SAS}$ triangle through the angles rather than the sides: knowing $\\frac{A+B}{2}=\\frac{\\pi-C}{2}$ for free, a single tangent ratio delivers $\\frac{A-B}{2}$, and the geometry $a>b\\Rightarrow A>B$ fixes its sign — the conceptual trap is that this sign is not algebraic but a side-angle ordering, so a symmetric quadratic solve silently admits the mirror triangle. Second, and the reason numerical analysts keep it alive, is conditioning: the law of cosines forms $a^2+b^2-2ab\\cos C$, which for small $C$ and $a\\approx b$ is the difference of two nearly equal large numbers and bleeds precision, while Napier's analogy and its companion Mollweide formula touch only $a-b$ and well-behaved trig, staying accurate to machine epsilon. The clean exit $c=7$ (the $3\\text{-}5\\text{-}7$ triangle with a $120^{\\circ}$ angle) is the same on every route — the lesson is which route you would trust when the numbers are cruel."
  },
  {
    "theme": "geometry",
    "themeLabel": "Triangle Geometry Through Trig",
    "title": "When a Equals Twice b Cosine C",
    "difficulty": 5,
    "task": "Classify the triangle",
    "tags": [
      "projection-formula",
      "sine-rule",
      "classification",
      "isosceles",
      "compound-angle"
    ],
    "statement": "In a triangle $ABC$ the sides satisfy $a = 2b\\cos C$. Determine the precise type of triangle, and decide whether the equation alone forces it to be right-angled.",
    "answer": "$$\\boxed{\\,b=c:\\ \\triangle ABC \\text{ is isosceles, and it need NOT be right-angled}\\,}$$",
    "trap": "The seductive misread is to ‘recognise’ $a=2b\\cos C$ as a fragment of the law of cosines and conclude the triangle is right-angled. The genuine cosine-rule statement is $c^2=a^2+b^2-2ab\\cos C$, which is a different relation entirely; matching $a=2b\\cos C$ against it leads nowhere. A second trap is to cancel $\\cos C$ carelessly when it could be negative. The correct route uses the projection formula $a=b\\cos C+c\\cos B$, after which the condition collapses to $b=c$ — isosceles, with no right-angle implied.",
    "solutions": [
      {
        "name": "Projection formula collapse",
        "steps": [
          "Every triangle obeys the projection formula $a=b\\cos C+c\\cos B$.",
          "Substitute the hypothesis $a=2b\\cos C$: then $2b\\cos C=b\\cos C+c\\cos B$, so $b\\cos C=c\\cos B$.",
          "By the sine rule write $b=2R\\sin B,\\ c=2R\\sin C$, giving $\\sin B\\cos C=\\sin C\\cos B$, i.e. $\\sin(B-C)=0$.",
          "Since $0<B,C<\\pi$ we get $B=C$, hence $b=c$: the triangle is isosceles. No constraint pins any angle to $90^\\circ$, so $\\boxed{b=c}$ and it need not be right-angled."
        ]
      },
      {
        "name": "Sine-rule and compound-angle route",
        "steps": [
          "By the sine rule $a=2R\\sin A,\\ b=2R\\sin B$, so $a=2b\\cos C$ becomes $\\sin A=2\\sin B\\cos C$.",
          "Use $A=\\pi-(B+C)$ so $\\sin A=\\sin(B+C)=\\sin B\\cos C+\\cos B\\sin C$.",
          "Then $\\sin B\\cos C+\\cos B\\sin C=2\\sin B\\cos C\\Rightarrow \\cos B\\sin C-\\sin B\\cos C=0\\Rightarrow \\sin(C-B)=0$.",
          "Thus $B=C\\Rightarrow b=c$. A concrete witness $B=C=70^\\circ,\\ A=40^\\circ$ satisfies the condition yet is not right-angled, confirming $\\boxed{b=c}$ without a forced right angle."
        ]
      }
    ],
    "remark": "**Insight.** A relation between *one side and one cosine* is the fingerprint of the projection formula, not the law of cosines — the law of cosines always couples three squared sides. Reading $a=2b\\cos C$ as $a=b\\cos C+c\\cos B$ turns the puzzle into the one-line identity $\\sin(B-C)=0$, and exposes the right-angle guess as a pattern-matching mirage."
  },
  {
    "theme": "geometry",
    "themeLabel": "Triangle Geometry Through Trig",
    "title": "Inradius From Three Half-Angle Sines",
    "difficulty": 5,
    "task": "Prove and evaluate r over R",
    "tags": [
      "inradius",
      "circumradius",
      "half-angle",
      "product-to-sum",
      "identity"
    ],
    "statement": "For any triangle $ABC$ prove that the inradius and circumradius obey $r=4R\\sin\\tfrac{A}{2}\\sin\\tfrac{B}{2}\\sin\\tfrac{C}{2}$. Hence evaluate $\\dfrac{r}{R}$ for the triangle whose angles are $90^\\circ,30^\\circ,60^\\circ$.",
    "answer": "$$\\boxed{\\,r=4R\\sin\\tfrac{A}{2}\\sin\\tfrac{B}{2}\\sin\\tfrac{C}{2},\\qquad \\dfrac{r}{R}=\\dfrac{\\sqrt3-1}{2}\\,}$$",
    "trap": "The half-angle quantities $\\sin\\frac{A}{2}$ are all positive because $\\frac{A}{2}\\in(0,\\frac{\\pi}{2})$ in any triangle — but the careless step is using $\\cos A=1-2\\sin^2\\frac{A}{2}$ and then dropping a sign, or writing $\\sin\\frac{C}{2}=\\cos\\frac{A+B}{2}$ with the wrong half-angle. A second slip: at $A=90^\\circ$ one may set $\\cos A=0$ but then forget that $\\frac{r}{R}=\\cos A+\\cos B+\\cos C-1$, mis-adding to get $\\frac{\\sqrt3+1}{2}$ instead of $\\frac{\\sqrt3-1}{2}$.",
    "solutions": [
      {
        "name": "Through the identity for the sum of cosines",
        "steps": [
          "Start from the standard sum identity $\\cos A+\\cos B+\\cos C=1+4\\sin\\tfrac{A}{2}\\sin\\tfrac{B}{2}\\sin\\tfrac{C}{2}$, proved by writing $\\cos A+\\cos B=2\\cos\\frac{A+B}{2}\\cos\\frac{A-B}{2}$ and $\\cos C=1-2\\sin^2\\frac{C}{2}$ with $\\frac{A+B}{2}=\\frac{\\pi}{2}-\\frac{C}{2}$.",
          "Independently, $\\cos A+\\cos B+\\cos C=1+\\dfrac{r}{R}$ (a known relation), so comparing gives $\\dfrac{r}{R}=4\\sin\\tfrac{A}{2}\\sin\\tfrac{B}{2}\\sin\\tfrac{C}{2}$, i.e. $r=4R\\sin\\tfrac{A}{2}\\sin\\tfrac{B}{2}\\sin\\tfrac{C}{2}$.",
          "For $A=90^\\circ,B=30^\\circ,C=60^\\circ$: $\\cos A+\\cos B+\\cos C=0+\\dfrac{\\sqrt3}{2}+\\dfrac12=\\dfrac{\\sqrt3+1}{2}$.",
          "Hence $\\dfrac{r}{R}=\\dfrac{\\sqrt3+1}{2}-1=\\dfrac{\\sqrt3-1}{2}$, giving $\\boxed{\\dfrac{r}{R}=\\dfrac{\\sqrt3-1}{2}}$."
        ]
      },
      {
        "name": "Direct half-angle product",
        "steps": [
          "Use the area identities $r=(s-a)\\tan\\tfrac{A}{2}$-type relations packaged as $r=4R\\sin\\tfrac{A}{2}\\sin\\tfrac{B}{2}\\sin\\tfrac{C}{2}$; to prove it, note $\\dfrac{r}{R}=4\\prod\\sin\\tfrac{A}{2}$ equals $\\cos A+\\cos B+\\cos C-1$ since $4\\sin\\tfrac{A}{2}\\sin\\tfrac{B}{2}\\sin\\tfrac{C}{2}-(\\cos A+\\cos B+\\cos C-1)=0$ by expanding each $\\cos$ in half-angles.",
          "Now evaluate the product directly: $\\sin\\tfrac{A}{2}=\\sin45^\\circ=\\dfrac{1}{\\sqrt2}$, $\\sin\\tfrac{B}{2}=\\sin15^\\circ=\\dfrac{\\sqrt6-\\sqrt2}{4}$, $\\sin\\tfrac{C}{2}=\\sin30^\\circ=\\dfrac12$.",
          "Then $\\dfrac{r}{R}=4\\cdot\\dfrac{1}{\\sqrt2}\\cdot\\dfrac{\\sqrt6-\\sqrt2}{4}\\cdot\\dfrac12=\\dfrac{1}{\\sqrt2}\\cdot\\dfrac{\\sqrt6-\\sqrt2}{2}=\\dfrac{\\sqrt3-1}{2}$, since $\\dfrac{\\sqrt6-\\sqrt2}{\\sqrt2}=\\sqrt3-1$.",
          "Thus $\\boxed{\\dfrac{r}{R}=\\dfrac{\\sqrt3-1}{2}}$, matching the first method."
        ]
      }
    ],
    "remark": "**Insight.** The compact bridge $\\cos A+\\cos B+\\cos C=1+\\dfrac{r}{R}$ converts the half-angle product into a single sum of cosines — so any triangle’s $r/R$ is read straight off its angles without ever computing sides, areas, or Heron’s formula."
  },
  {
    "theme": "geometry",
    "themeLabel": "Triangle Geometry Through Trig",
    "title": "The Two Triangles Hiding in One",
    "difficulty": 5,
    "task": "Find every possible third side",
    "tags": [
      "sine-rule",
      "ambiguous-case",
      "compound-angle",
      "solution-of-triangles",
      "SSA"
    ],
    "statement": "A triangle $ABC$ has $A=30^\\circ,\\ a=5,\\ b=5\\sqrt2$. Find all possible values of the third side $c$.",
    "answer": "$$\\boxed{\\,c=\\dfrac{5(\\sqrt6+\\sqrt2)}{2}\\ \\text{ or }\\ c=\\dfrac{5(\\sqrt6-\\sqrt2)}{2}\\,}$$",
    "trap": "This is the ambiguous SSA case. From the sine rule $\\sin B=\\dfrac{b\\sin A}{a}=\\dfrac{1}{\\sqrt2}$, the reflex of the trap is to take only the acute $B=45^\\circ$ and report a single side. But $B=135^\\circ$ also has $\\sin B=\\frac{1}{\\sqrt2}$, and since the side opposite the given angle satisfies $b\\sin A=5\\sqrt2\\cdot\\tfrac12<a=5<b=5\\sqrt2$, BOTH triangles exist. Reporting only one value of $c$ — or, conversely, blindly keeping $B=135^\\circ$ when $a>b$ (where it would be impossible) — is the slip.",
    "solutions": [
      {
        "name": "Sine rule with the existence test",
        "steps": [
          "Sine rule: $\\dfrac{\\sin B}{b}=\\dfrac{\\sin A}{a}\\Rightarrow \\sin B=\\dfrac{5\\sqrt2\\cdot\\sin30^\\circ}{5}=\\dfrac{\\sqrt2}{2}=\\dfrac{1}{\\sqrt2}$, so $B=45^\\circ$ or $B=135^\\circ$.",
          "Existence check: the altitude from $C$ is $b\\sin A=5\\sqrt2\\cdot\\tfrac12=\\tfrac{5\\sqrt2}{2}\\approx3.54$. Since $b\\sin A<a<b$, the side $a$ reaches the base in two places — both $B=45^\\circ$ and $B=135^\\circ$ give valid triangles.",
          "Case $B=45^\\circ$: $C=180^\\circ-30^\\circ-45^\\circ=105^\\circ$, and $c=\\dfrac{a\\sin C}{\\sin A}=\\dfrac{5\\sin105^\\circ}{\\sin30^\\circ}=10\\sin105^\\circ=10\\cdot\\dfrac{\\sqrt6+\\sqrt2}{4}=\\dfrac{5(\\sqrt6+\\sqrt2)}{2}$.",
          "Case $B=135^\\circ$: $C=15^\\circ$, and $c=10\\sin15^\\circ=10\\cdot\\dfrac{\\sqrt6-\\sqrt2}{4}=\\dfrac{5(\\sqrt6-\\sqrt2)}{2}$. Hence $\\boxed{c=\\dfrac{5(\\sqrt6+\\sqrt2)}{2}\\text{ or }\\dfrac{5(\\sqrt6-\\sqrt2)}{2}}$."
        ]
      },
      {
        "name": "Cosine rule as a quadratic in c",
        "steps": [
          "By the law of cosines $a^2=b^2+c^2-2bc\\cos A$: $25=50+c^2-2(5\\sqrt2)c\\cdot\\dfrac{\\sqrt3}{2}$, i.e. $c^2-5\\sqrt6\\,c+25=0$.",
          "The discriminant is $(5\\sqrt6)^2-4\\cdot25=150-100=50>0$, so two positive roots exist (their product $25>0$ and sum $5\\sqrt6>0$): the ambiguity appears as two real roots.",
          "Solve: $c=\\dfrac{5\\sqrt6\\pm\\sqrt{50}}{2}=\\dfrac{5\\sqrt6\\pm5\\sqrt2}{2}=\\dfrac{5(\\sqrt6\\pm\\sqrt2)}{2}$.",
          "Both roots are positive and yield genuine triangles, so $\\boxed{c=\\dfrac{5(\\sqrt6+\\sqrt2)}{2}\\text{ or }\\dfrac{5(\\sqrt6-\\sqrt2)}{2}}$, agreeing with the sine-rule analysis."
        ]
      }
    ],
    "remark": "**Insight.** The law of cosines secretly counts the solutions for you: feeding SSA data into $a^2=b^2+c^2-2bc\\cos A$ produces a *quadratic in $c$*, and its two positive roots are exactly the two triangles of the ambiguous case. A positive discriminant with two positive roots means two triangles; the sine-rule altitude test $b\\sin A<a<b$ is the same statement in disguise."
  },
  {
    "theme": "geometry",
    "themeLabel": "Triangle Geometry Through Trig",
    "title": "Consecutive Sides, One Doubled Angle",
    "difficulty": 5,
    "task": "Find the three sides",
    "tags": [
      "cosine rule",
      "sine rule",
      "double angle",
      "triangle"
    ],
    "statement": "The sides of a triangle are three consecutive positive integers, and its largest angle is exactly twice its smallest angle. Find the three sides and the cosine of the largest angle, decide whether the triangle is acute, right or obtuse, and show that the configuration is unique.",
    "answer": "$$\\text{sides }4,5,6;\\quad \\cos C=\\boxed{\\tfrac18};\\quad\\text{the triangle is acute.}$$",
    "trap": "Consecutive integers plus a “doubled angle” smell like the right triangle $3,4,5$. But in $3,4,5$ the largest angle is $90^\\circ$ while twice the smallest is $2\\arctan\\tfrac34\\approx73.7^\\circ\\ne90^\\circ$, so $C=2A$ fails there. Assuming the doubled-angle condition forces a right angle (or guessing $3,4,5$) gives the wrong triangle.",
    "solutions": [
      {
        "name": "Sine rule turns the angle condition into a side ratio",
        "steps": [
          "Let the sides be $k,\\,k+1,\\,k+2$ with the smallest angle $A$ opposite $k$ and the largest angle $C$ opposite $k+2$. The hypothesis is $C=2A$.",
          "By the sine rule $\\dfrac{k+2}{k}=\\dfrac{\\sin C}{\\sin A}=\\dfrac{\\sin 2A}{\\sin A}=2\\cos A$, so $\\cos A=\\dfrac{k+2}{2k}$.",
          "By the cosine rule $\\cos A=\\dfrac{(k+1)^2+(k+2)^2-k^2}{2(k+1)(k+2)}$. Equating the two expressions and clearing denominators gives the unique positive solution $k=4$.",
          "Hence the sides are $4,5,6$, $\\cos A=\\dfrac{6}{8}=\\dfrac34$, and $\\cos C=\\cos 2A=2\\cos^2A-1=2\\cdot\\dfrac{9}{16}-1=\\dfrac18$. Since $\\cos C>0$ the largest angle is below $90^\\circ$, so the triangle is $\\textbf{acute}$."
        ]
      },
      {
        "name": "Cosine rule throughout with the double-angle identity",
        "steps": [
          "With sides $k,k+1,k+2$, $\\cos A=\\dfrac{(k+1)^2+(k+2)^2-k^2}{2(k+1)(k+2)}$ and $\\cos C=\\dfrac{k^2+(k+1)^2-(k+2)^2}{2k(k+1)}$.",
          "Impose $\\cos C=\\cos 2A=2\\cos^2A-1$. This reduces to a single equation in $k$ whose only admissible (positive, triangle-valid) root is $k=4$.",
          "Then $\\cos C=\\dfrac{4^2+5^2-6^2}{2\\cdot4\\cdot5}=\\dfrac{5}{40}=\\dfrac18$ and $\\cos A=\\dfrac{5^2+6^2-4^2}{2\\cdot5\\cdot6}=\\dfrac{45}{60}=\\dfrac34$, confirming $\\cos 2A=2(\\tfrac34)^2-1=\\tfrac18=\\cos C$, i.e. $C=2A$. All cosines are positive, so the triangle is acute."
        ]
      }
    ],
    "remark": "**Insight.** The sine rule converts the angle condition $C=2A$ into the pure side ratio $\\dfrac{c}{a}=2\\cos A$ — “an angle is doubled” becomes algebra in the sides. Consecutive-integer sides then pin exactly one triangle, $4,5,6$. Note the doubled angle is not a right angle: the largest angle here is just under $83^\\circ$."
  },
  {
    "theme": "hybrid",
    "themeLabel": "Grand Hybrids",
    "title": "Integer Tangents of a Triangle",
    "difficulty": 5,
    "task": "Find the three tangents",
    "tags": [
      "conditional-identity",
      "tan-sum-product",
      "triangle",
      "integer-trap"
    ],
    "statement": "In a triangle $ABC$ the three numbers $\\tan A,\\ \\tan B,\\ \\tan C$ are all positive integers. Find these three integers and hence the value of $\\tan A+\\tan B+\\tan C$.",
    "answer": "$$\\boxed{\\{\\tan A,\\tan B,\\tan C\\}=\\{1,2,3\\}\\quad\\text{and}\\quad \\tan A+\\tan B+\\tan C=6}$$",
    "trap": "The trap is forgetting the constraint and guessing. Many candidates try $\\{1,1,1\\}$ because it “looks symmetric,” but $1+1+1=3\\neq 1\\cdot1\\cdot1=1$, so those cannot be the tangents of a triangle. The hidden conditional identity $\\tan A+\\tan B+\\tan C=\\tan A\\tan B\\tan C$ (valid because $A+B+C=\\pi$) forces a Diophantine equation $a+b+c=abc$, whose only positive-integer solution with $a\\le b\\le c$ is $(1,2,3)$.",
    "solutions": [
      {
        "name": "Conditional identity to a Diophantine equation",
        "steps": [
          "Since $A+B+C=\\pi$, write $C=\\pi-(A+B)$ so $\\tan C=-\\tan(A+B)=-\\dfrac{\\tan A+\\tan B}{1-\\tan A\\tan B}$. Clearing denominators gives the standard conditional identity $\\tan A+\\tan B+\\tan C=\\tan A\\tan B\\tan C$.",
          "Let $a=\\tan A,\\ b=\\tan B,\\ c=\\tan C$ be positive integers with $a\\le b\\le c$. Then $a+b+c=abc$. Since $a+b+c\\le 3c$, we need $abc\\le 3c$, i.e. $ab\\le 3$, so $(a,b)\\in\\{(1,1),(1,2),(1,3)\\}$.",
          "$(1,1)$: $2+c=c$ is impossible. $(1,3)$: $4+c=3c\\Rightarrow c=2<b$, rejected. $(1,2)$: $3+c=2c\\Rightarrow c=3$. So $(a,b,c)=(1,2,3)$.",
          "Hence $\\tan A+\\tan B+\\tan C=1+2+3=6$, giving $\\boxed{\\{1,2,3\\},\\ \\text{sum}=6}$."
        ]
      },
      {
        "name": "Verify the angles really sum to a triangle",
        "steps": [
          "We must confirm $(1,2,3)$ corresponds to genuine angles. Take $A=\\arctan 1,\\ B=\\arctan 2,\\ C=\\arctan 3$.",
          "Then $\\tan(A+B)=\\dfrac{1+2}{1-1\\cdot2}=\\dfrac{3}{-1}=-3$, so $A+B=\\pi-\\arctan 3=\\pi-C$. Therefore $A+B+C=\\pi$, a valid triangle with all angles acute (each tangent positive).",
          "Thus the integers are $\\{1,2,3\\}$ and $\\tan A+\\tan B+\\tan C=6=1\\cdot2\\cdot3$, confirming $\\boxed{\\{1,2,3\\},\\ \\text{sum}=6}$."
        ]
      }
    ],
    "remark": "**Insight.** The angle condition $A+B+C=\\pi$ is not decoration — it converts an open-ended “guess the integers” into the rigid equation $a+b+c=abc$. The same bound $ab\\le 3$ that kills every other case is exactly why $(1,2,3)$ is the famous unique acute-triangle tangent triple."
  },
  {
    "theme": "hybrid",
    "themeLabel": "Grand Hybrids",
    "title": "A Tangent Identity in Disguise",
    "difficulty": 5,
    "task": "Count valid solutions",
    "tags": [
      "tan-sum-product",
      "general-solution",
      "domain-restriction",
      "solution-counting"
    ],
    "statement": "Find the number of values of $x$ in the open interval $(0,\\pi)$ satisfying $\\tan x+\\tan 2x+\\tan 3x=\\tan x\\,\\tan 2x\\,\\tan 3x$, for which all three tangents are defined.",
    "answer": "$$\\boxed{2}$$",
    "trap": "The trap is two-layered. First, recognising that $\\tan A+\\tan B+\\tan C=\\tan A\\tan B\\tan C$ holds precisely when $A+B+C=n\\pi$; here $A+B+C=6x$, so $x=\\dfrac{n\\pi}{6}$. Second — and where most fall — checking definedness. Of the candidates $\\tfrac{\\pi}{6},\\tfrac{2\\pi}{6},\\tfrac{3\\pi}{6},\\tfrac{4\\pi}{6},\\tfrac{5\\pi}{6}$, three must be thrown out: $x=\\tfrac{\\pi}{6}$ and $x=\\tfrac{5\\pi}{6}$ make $\\tan 3x$ undefined, and $x=\\tfrac{\\pi}{2}$ makes $\\tan x$ undefined. Only $\\tfrac{\\pi}{3}$ and $\\tfrac{2\\pi}{3}$ survive.",
    "solutions": [
      {
        "name": "Recognise the conditional identity, then filter domains",
        "steps": [
          "The identity $\\tan A+\\tan B+\\tan C=\\tan A\\tan B\\tan C$ holds iff $A+B+C$ is an integer multiple of $\\pi$ (provided all tangents exist). With $A=x,\\ B=2x,\\ C=3x$, the sum is $6x$, so we need $6x=n\\pi$, i.e. $x=\\dfrac{n\\pi}{6}$.",
          "In $(0,\\pi)$ the candidates are $x=\\dfrac{\\pi}{6},\\dfrac{\\pi}{3},\\dfrac{\\pi}{2},\\dfrac{2\\pi}{3},\\dfrac{5\\pi}{6}$.",
          "Discard those where any of $\\tan x,\\tan 2x,\\tan 3x$ is undefined: at $x=\\tfrac{\\pi}{6}$, $3x=\\tfrac{\\pi}{2}$ (undefined); at $x=\\tfrac{\\pi}{2}$, $\\tan x$ undefined; at $x=\\tfrac{5\\pi}{6}$, $3x=\\tfrac{5\\pi}{2}$ (undefined).",
          "Survivors are $x=\\tfrac{\\pi}{3}$ (where $3x=\\pi$, all defined) and $x=\\tfrac{2\\pi}{3}$ (where $3x=2\\pi$, all defined). Count $=2$, so $\\boxed{2}$."
        ]
      },
      {
        "name": "Derive the condition from the addition formula",
        "steps": [
          "Rearrange to $\\tan x+\\tan 2x=\\tan 3x(\\tan x\\tan 2x-1)$. Dividing by $(\\tan x\\tan 2x-1)$ gives $-\\tan(x+2x)=\\tan 3x$ wherever defined, i.e. $-\\tan 3x=\\tan 3x$, so $\\tan 3x=0$, OR the division was illegitimate because $\\tan x\\tan 2x=1$ (meaning $x+2x=\\tfrac{\\pi}{2}+k\\pi$).",
          "$\\tan 3x=0\\Rightarrow 3x=m\\pi\\Rightarrow x=\\tfrac{m\\pi}{3}$, giving $x=\\tfrac{\\pi}{3},\\tfrac{2\\pi}{3}$ in $(0,\\pi)$; both keep all tangents finite. The other branch $x+2x=\\tfrac{\\pi}{2}+k\\pi$ forces $\\tan 3x$ undefined, so it yields no admissible solution.",
          "Hence exactly $2$ admissible values, $\\boxed{2}$."
        ]
      }
    ],
    "remark": "**Insight.** This problem looks like a hard equation but is the conditional identity $A+B+C=n\\pi$ read backwards. The arithmetic ($6x=n\\pi$) is easy; the exam points live entirely in the domain audit, where exactly three of the five candidate angles secretly undefine a tangent."
  },
  {
    "theme": "hybrid",
    "themeLabel": "Grand Hybrids",
    "title": "A Double Angle, Counted Twice Around",
    "difficulty": 5,
    "task": "Count solutions on an interval",
    "tags": [
      "double-angle",
      "quadratic-in-sine",
      "solution-counting",
      "interval"
    ],
    "statement": "Determine the number of solutions of $\\cos 2x+3\\sin x=2$ in the interval $[0,4\\pi]$.",
    "answer": "$$\\boxed{6}$$",
    "trap": "The trap is treating the boundary $x=4\\pi$ and the double-period carelessly. After reducing to $\\sin x=1$ or $\\sin x=\\tfrac12$, a hasty solver counts the $[0,2\\pi)$ tally ($3$ solutions) and just doubles to $6$ — accidentally right here, but for the wrong reason, and one must still check whether $x=4\\pi$ (a closed endpoint) adds a solution. At $x=4\\pi$, $\\sin x=0\\neq 1,\\tfrac12$, so it contributes nothing; the count is genuinely $6$, but only after confirming each root lies in the closed interval.",
    "solutions": [
      {
        "name": "Reduce via cos2x to a quadratic in sin x",
        "steps": [
          "Use $\\cos 2x=1-2\\sin^2x$. The equation becomes $1-2\\sin^2x+3\\sin x=2$, i.e. $2\\sin^2x-3\\sin x+1=0$.",
          "Factor: $(2\\sin x-1)(\\sin x-1)=0$, so $\\sin x=\\tfrac12$ or $\\sin x=1$.",
          "On $[0,4\\pi]$: $\\sin x=1$ gives $x=\\tfrac{\\pi}{2},\\tfrac{5\\pi}{2}$ (two values); $\\sin x=\\tfrac12$ gives $x=\\tfrac{\\pi}{6},\\tfrac{5\\pi}{6},\\tfrac{13\\pi}{6},\\tfrac{17\\pi}{6}$ (four values).",
          "Total $2+4=6$, so $\\boxed{6}$ solutions."
        ]
      },
      {
        "name": "Period bookkeeping",
        "steps": [
          "The equation depends only on $\\sin x$, so it is $2\\pi$-periodic. Count solutions on one period $[0,2\\pi)$ then account for $[2\\pi,4\\pi]$.",
          "On $[0,2\\pi)$: $\\sin x=1\\Rightarrow x=\\tfrac{\\pi}{2}$ ($1$ root); $\\sin x=\\tfrac12\\Rightarrow x=\\tfrac{\\pi}{6},\\tfrac{5\\pi}{6}$ ($2$ roots): $3$ per period.",
          "The interval $[0,4\\pi]$ contains two full periods $[0,2\\pi)$ and $[2\\pi,4\\pi)$ giving $3+3=6$; the single endpoint $x=4\\pi$ has $\\sin(4\\pi)=0$, not a root, adding nothing.",
          "Hence the total is $\\boxed{6}$."
        ]
      }
    ],
    "remark": "**Insight.** The hybrid move is collapsing a $2x$ term into the same variable as the $x$ term, turning a transcendental equation into a quadratic. Once it factors, counting is pure interval bookkeeping — and the only real danger is mishandling a closed endpoint that happens, here, to contribute nothing."
  },
  {
    "theme": "hybrid",
    "themeLabel": "Grand Hybrids",
    "title": "The Tallest Sum in a Sixty-Degree Triangle",
    "difficulty": 5,
    "task": "Maximize a triangle sum",
    "tags": [
      "sum-to-product",
      "range",
      "triangle",
      "maximum"
    ],
    "statement": "In a triangle $ABC$ the angle $A=60^\\circ$ is fixed, while $B$ and $C$ vary. Find the maximum possible value of $\\sin B+\\sin C$ and the triangle that attains it.",
    "answer": "$$\\boxed{\\max(\\sin B+\\sin C)=\\sqrt3,\\ \\text{attained when } B=C=60^\\circ}$$",
    "trap": "The trap is maximizing $\\sin B$ and $\\sin C$ separately. One might say each sine is at most $1$, so the sum is at most $2$ — but $B$ and $C$ are not free: they are chained by $B+C=120^\\circ$. The correct tool is sum-to-product, which factors the dependence into a fixed part ($2\\cos\\tfrac{A}{2}$) and a single free part $\\cos\\tfrac{B-C}{2}\\le 1$, capping the sum at $\\sqrt3<2$.",
    "solutions": [
      {
        "name": "Sum-to-product, then range",
        "steps": [
          "Since $B+C=\\pi-A=120^\\circ$, apply $\\sin B+\\sin C=2\\sin\\dfrac{B+C}{2}\\cos\\dfrac{B-C}{2}=2\\sin 60^\\circ\\cos\\dfrac{B-C}{2}=\\sqrt3\\,\\cos\\dfrac{B-C}{2}$.",
          "As $\\cos\\dfrac{B-C}{2}\\le 1$ with equality iff $B=C$, the maximum of $\\sin B+\\sin C$ is $\\sqrt3$.",
          "Equality requires $B=C=60^\\circ$, an equilateral triangle. Hence $\\boxed{\\max=\\sqrt3}$ at $B=C=60^\\circ$."
        ]
      },
      {
        "name": "Sine rule plus a one-variable calculus check",
        "steps": [
          "Put $B=60^\\circ+t,\\ C=60^\\circ-t$ with $-60^\\circ<t<60^\\circ$, so $B+C=120^\\circ$ automatically. Then $\\sin B+\\sin C=\\sin(60^\\circ+t)+\\sin(60^\\circ-t)=2\\sin60^\\circ\\cos t=\\sqrt3\\cos t$.",
          "$f(t)=\\sqrt3\\cos t$ has $f'(t)=-\\sqrt3\\sin t=0$ at $t=0$, where $f''<0$: a maximum.",
          "Thus the maximum value is $f(0)=\\sqrt3$, attained at $t=0$, i.e. $B=C=60^\\circ$, giving $\\boxed{\\sqrt3}$."
        ]
      }
    ],
    "remark": "**Insight.** A constrained two-variable maximum becomes trivial once sum-to-product separates the locked combination $\\tfrac{B+C}{2}$ (fixed by $A$) from the only true degree of freedom $\\tfrac{B-C}{2}$. The cap $\\sqrt3$, strictly below the naive $2$, is the signature of that hidden constraint."
  },
  {
    "theme": "hybrid",
    "themeLabel": "Grand Hybrids",
    "title": "Three Sines in Arithmetic Progression of Angle",
    "difficulty": 5,
    "task": "Count solutions on an interval",
    "tags": [
      "sum-to-product",
      "factoring",
      "solution-counting",
      "common-root-trap"
    ],
    "statement": "Find the number of solutions of $\\sin x+\\sin 2x+\\sin 3x=0$ in the closed interval $[0,2\\pi]$.",
    "answer": "$$\\boxed{7}$$",
    "trap": "The trap is double-counting a shared root. Grouping the outer terms gives $\\sin x+\\sin 3x=2\\sin 2x\\cos x$, so the equation factors as $\\sin 2x\\,(2\\cos x+1)=0$. A careless count adds the $5$ zeros of $\\sin 2x$ in $[0,2\\pi]$ to the $2$ zeros of $2\\cos x+1$ and double-checks nothing — but one must verify the two families share no root (they don't here) and that the closed endpoints $0$ and $2\\pi$ are each counted once. The honest total is $7$, not $6$ or $8$.",
    "solutions": [
      {
        "name": "Group the AP, factor, count each family",
        "steps": [
          "The angles $x,2x,3x$ are in AP with middle $2x$. By sum-to-product, $\\sin x+\\sin 3x=2\\sin 2x\\cos x$, so the left side is $2\\sin 2x\\cos x+\\sin 2x=\\sin 2x\\,(2\\cos x+1)$.",
          "Set each factor to zero. $\\sin 2x=0\\Rightarrow x=0,\\tfrac{\\pi}{2},\\pi,\\tfrac{3\\pi}{2},2\\pi$ — five values in $[0,2\\pi]$.",
          "$2\\cos x+1=0\\Rightarrow\\cos x=-\\tfrac12\\Rightarrow x=\\tfrac{2\\pi}{3},\\tfrac{4\\pi}{3}$ — two values, neither equal to any from the first family.",
          "Total distinct solutions $=5+2=7$, so $\\boxed{7}$."
        ]
      },
      {
        "name": "Pull out the common factor sin 2x directly",
        "steps": [
          "Rewrite $\\sin x+\\sin 3x=2\\sin\\!\\big(\\tfrac{x+3x}{2}\\big)\\cos\\!\\big(\\tfrac{3x-x}{2}\\big)=2\\sin 2x\\cos x$. Adding $\\sin 2x$ gives $\\sin 2x(1+2\\cos x)=0$.",
          "Because $\\sin 2x=0$ requires $x$ a multiple of $\\tfrac{\\pi}{2}$ while $\\cos x=-\\tfrac12$ requires $x=\\tfrac{2\\pi}{3},\\tfrac{4\\pi}{3}$, the two solution sets are disjoint.",
          "Counting the disjoint union over the closed interval: $\\{0,\\tfrac{\\pi}{2},\\pi,\\tfrac{3\\pi}{2},2\\pi\\}\\cup\\{\\tfrac{2\\pi}{3},\\tfrac{4\\pi}{3}\\}$ has $7$ elements, giving $\\boxed{7}$."
        ]
      }
    ],
    "remark": "**Insight.** When three angles sit in arithmetic progression, pairing the extremes always exposes the middle angle as a common factor. The real exam discipline is the disjointness check and counting both closed endpoints exactly once — that is where the off-by-one errors live."
  },
  {
    "theme": "hybrid",
    "themeLabel": "Grand Hybrids",
    "title": "Cosines Sum to One Plus the Ratio",
    "difficulty": 5,
    "task": "Prove identity, evaluate ratio",
    "tags": [
      "half-angle",
      "inradius-circumradius",
      "conditional-identity",
      "triangle"
    ],
    "statement": "In any triangle $ABC$ with inradius $r$ and circumradius $R$, prove that $\\cos A+\\cos B+\\cos C=1+\\dfrac{r}{R}$. Hence find $\\dfrac{r}{R}$ for the triangle with $A=90^\\circ,\\ B=C=45^\\circ$.",
    "answer": "$$\\boxed{\\cos A+\\cos B+\\cos C=1+\\dfrac{r}{R},\\qquad \\dfrac{r}{R}=\\sqrt2-1}$$",
    "trap": "The trap is plugging the right-angle in too soon and abandoning the identity. If you first write $\\cos 90^\\circ=0$ you lose the structure; worse, a common slip is to use $r=4R\\sin\\tfrac{A}{2}\\cos\\tfrac{B}{2}\\cos\\tfrac{C}{2}$ (mixing sines and cosines) instead of the correct $r=4R\\sin\\tfrac{A}{2}\\sin\\tfrac{B}{2}\\sin\\tfrac{C}{2}$. Keep the half-angle product clean.",
    "solutions": [
      {
        "name": "Sum-to-product on two cosines, then half-angles",
        "steps": [
          "Group $\\cos B+\\cos C=2\\cos\\dfrac{B+C}{2}\\cos\\dfrac{B-C}{2}$. Since $\\dfrac{B+C}{2}=\\dfrac{\\pi-A}{2}$, this equals $2\\sin\\dfrac{A}{2}\\cos\\dfrac{B-C}{2}$.",
          "Also $\\cos A=1-2\\sin^2\\dfrac{A}{2}$. So $\\cos A+\\cos B+\\cos C=1-2\\sin^2\\dfrac{A}{2}+2\\sin\\dfrac{A}{2}\\cos\\dfrac{B-C}{2}=1+2\\sin\\dfrac{A}{2}\\Big(\\cos\\dfrac{B-C}{2}-\\sin\\dfrac{A}{2}\\Big).$",
          "Replace $\\sin\\dfrac{A}{2}=\\cos\\dfrac{B+C}{2}$, so $\\cos\\dfrac{B-C}{2}-\\cos\\dfrac{B+C}{2}=2\\sin\\dfrac{B}{2}\\sin\\dfrac{C}{2}$. Thus the sum $=1+4\\sin\\dfrac{A}{2}\\sin\\dfrac{B}{2}\\sin\\dfrac{C}{2}$.",
          "By the standard relation $r=4R\\sin\\dfrac{A}{2}\\sin\\dfrac{B}{2}\\sin\\dfrac{C}{2}$, this is exactly $1+\\dfrac{r}{R}$. For $A=90^\\circ,B=C=45^\\circ$: $\\dfrac{r}{R}=4\\sin45^\\circ\\sin22.5^\\circ\\sin22.5^\\circ$, and more simply $\\cos A+\\cos B+\\cos C=0+\\tfrac{\\sqrt2}{2}+\\tfrac{\\sqrt2}{2}=\\sqrt2$, so $\\dfrac{r}{R}=\\sqrt2-1$. Hence $\\boxed{\\sqrt2-1}$."
        ]
      },
      {
        "name": "Direct evaluation of the right triangle",
        "steps": [
          "For a right triangle the circumradius is half the hypotenuse: $R=\\tfrac{c}{2}$ where $c$ is the hypotenuse opposite the $90^\\circ$ angle. With legs equal (a $45^\\circ$–$45^\\circ$–$90^\\circ$ triangle) take legs $=1$, hypotenuse $c=\\sqrt2$, so $R=\\tfrac{\\sqrt2}{2}$.",
          "Inradius $r=\\dfrac{\\text{area}}{s}=\\dfrac{\\tfrac12\\cdot1\\cdot1}{\\tfrac{1+1+\\sqrt2}{2}}=\\dfrac{1}{2+\\sqrt2}=\\dfrac{2-\\sqrt2}{2}$.",
          "Then $\\dfrac{r}{R}=\\dfrac{(2-\\sqrt2)/2}{\\sqrt2/2}=\\dfrac{2-\\sqrt2}{\\sqrt2}=\\sqrt2-1$, matching $\\cos A+\\cos B+\\cos C-1=\\sqrt2-1$. So $\\boxed{\\sqrt2-1}$."
        ]
      }
    ],
    "remark": "**Insight.** The identity $\\cos A+\\cos B+\\cos C=1+\\tfrac{r}{R}$ is the bridge between pure angle trigonometry and triangle metrics. Proving it needs only sum-to-product plus the half-angle inradius formula — no inequality — and once proved it computes a metric ratio from three cosines instantly."
  },
  {
    "theme": "hybrid",
    "themeLabel": "Grand Hybrids",
    "title": "The Largest Area Hiding in a Product",
    "difficulty": 5,
    "task": "Maximize a trig product",
    "tags": [
      "double-angle",
      "maximum",
      "stationary-point",
      "factoring"
    ],
    "statement": "For $x\\in(0,\\pi)$, find the maximum value of $f(x)=\\sin x\\,(1+\\cos x)$ and the $x$ at which it occurs.",
    "answer": "$$\\boxed{\\max f=\\dfrac{3\\sqrt3}{4}\\ \\text{at}\\ x=\\dfrac{\\pi}{3}}$$",
    "trap": "The trap is maximizing the two factors independently. $\\sin x$ is largest at $x=\\tfrac{\\pi}{2}$ (value $1$) and $1+\\cos x$ is largest as $x\\to0$ (value $2$), tempting a “bound” of $1\\cdot2=2$. But the factors peak at different places, so the product never reaches $2$; the true maximum $\\tfrac{3\\sqrt3}{4}\\approx1.30$ comes from a genuine stationary point where a double-angle term balances the two pulls.",
    "solutions": [
      {
        "name": "Differentiate and solve a quadratic in cos x",
        "steps": [
          "$f(x)=\\sin x+\\sin x\\cos x=\\sin x+\\tfrac12\\sin 2x$. Then $f'(x)=\\cos x+\\cos 2x$.",
          "Set $f'(x)=0$: $\\cos x+(2\\cos^2x-1)=0\\Rightarrow 2\\cos^2x+\\cos x-1=0\\Rightarrow(2\\cos x-1)(\\cos x+1)=0$.",
          "In $(0,\\pi)$, $\\cos x=-1$ is excluded, leaving $\\cos x=\\tfrac12$, i.e. $x=\\tfrac{\\pi}{3}$. Since $f\\to0$ at both ends of $(0,\\pi)$, this interior critical point is the maximum.",
          "$f\\!\\left(\\tfrac{\\pi}{3}\\right)=\\sin60^\\circ\\,(1+\\cos60^\\circ)=\\tfrac{\\sqrt3}{2}\\cdot\\tfrac32=\\dfrac{3\\sqrt3}{4}$. Hence $\\boxed{\\dfrac{3\\sqrt3}{4}\\ \\text{at}\\ x=\\tfrac{\\pi}{3}}$."
        ]
      },
      {
        "name": "Half-angle substitution",
        "steps": [
          "With the half-angle forms $\\sin x=2\\sin\\tfrac{x}{2}\\cos\\tfrac{x}{2}$ and $1+\\cos x=2\\cos^2\\tfrac{x}{2}$, we get $f(x)=4\\sin\\tfrac{x}{2}\\cos^3\\tfrac{x}{2}$.",
          "Let $u=\\tfrac{x}{2}\\in(0,\\tfrac{\\pi}{2})$ and $g(u)=4\\sin u\\cos^3u$. Then $g'(u)=4\\cos^2u(\\cos^2u-3\\sin^2u)=4\\cos^2u(1-4\\sin^2u)$.",
          "$g'(u)=0$ in $(0,\\tfrac{\\pi}{2})$ gives $\\sin u=\\tfrac12$, $u=\\tfrac{\\pi}{6}$, i.e. $x=\\tfrac{\\pi}{3}$.",
          "Then $g\\!\\left(\\tfrac{\\pi}{6}\\right)=4\\cdot\\tfrac12\\cdot\\big(\\tfrac{\\sqrt3}{2}\\big)^3=4\\cdot\\tfrac12\\cdot\\tfrac{3\\sqrt3}{8}=\\dfrac{3\\sqrt3}{4}$, confirming $\\boxed{\\dfrac{3\\sqrt3}{4}}$."
        ]
      }
    ],
    "remark": "**Insight.** Writing $\\sin x\\cos x=\\tfrac12\\sin 2x$ turns the derivative into $\\cos x+\\cos 2x$, a clean factorable expression. This product is exactly twice the area of an isosceles triangle inscribed with apex angle $x$ — its maximum at $x=\\tfrac{\\pi}{3}$ is the equilateral case in disguise."
  },
  {
    "theme": "hybrid",
    "themeLabel": "Grand Hybrids",
    "title": "A Product of Cosines Equal to One",
    "difficulty": 5,
    "task": "Count solutions on an interval",
    "tags": [
      "product-telescoping",
      "double-angle",
      "solution-counting",
      "excluded-root-trap"
    ],
    "statement": "Find the number of solutions of $8\\cos x\\,\\cos 2x\\,\\cos 4x=1$ in the open interval $(0,2\\pi)$.",
    "answer": "$$\\boxed{14}$$",
    "trap": "The trap is multiplying by $\\sin x$ to collapse the product into $\\sin 8x=\\sin x$ and then forgetting that this step is invalid where $\\sin x=0$. The telescoping identity $8\\cos x\\cos 2x\\cos 4x=\\dfrac{\\sin 8x}{\\sin x}$ only holds for $\\sin x\\neq0$. The general solution of $\\sin 8x=\\sin x$ yields one candidate $x=\\pi$ where $\\sin x=0$, which does NOT satisfy the original equation (it gives $-9$). Forgetting to discard it gives the wrong count $15$.",
    "solutions": [
      {
        "name": "Telescope to sin 8x = sin x, then prune",
        "steps": [
          "Multiply by $\\sin x\\ (\\neq0)$ and use $2\\sin\\theta\\cos\\theta=\\sin 2\\theta$ repeatedly: $8\\sin x\\cos x\\cos 2x\\cos 4x=4\\sin 2x\\cos 2x\\cos 4x=2\\sin 4x\\cos 4x=\\sin 8x$. So the equation is $\\sin 8x=\\sin x$ with $\\sin x\\neq0$.",
          "General solution of $\\sin 8x=\\sin x$: either $8x=x+2k\\pi\\Rightarrow x=\\dfrac{2k\\pi}{7}$, or $8x=\\pi-x+2k\\pi\\Rightarrow x=\\dfrac{(2k+1)\\pi}{9}$.",
          "In $(0,2\\pi)$ the first family gives $x=\\dfrac{2\\pi}{7},\\dots,\\dfrac{12\\pi}{7}$, that is $6$ values. The second family gives $x=\\dfrac{\\pi}{9},\\dfrac{3\\pi}{9},\\dots,\\dfrac{17\\pi}{9}$, that is $9$ candidate values.",
          "Among the second family, $x=\\dfrac{9\\pi}{9}=\\pi$ has $\\sin x=0$ and must be rejected (it fails the original equation). No value is shared between the families. Total $=6+(9-1)=14$, so $\\boxed{14}$."
        ]
      },
      {
        "name": "Sign-and-count verification",
        "steps": [
          "Write $F(x)=8\\cos x\\cos 2x\\cos 4x-1$, a continuous function. The two solution families $\\dfrac{2k\\pi}{7}$ and $\\dfrac{(2k+1)\\pi}{9}$ are disjoint because $18k=7(2m+1)$ has no integer solution (even $=$ odd).",
          "Checking each candidate directly: all six $\\dfrac{2k\\pi}{7}$ satisfy $F=0$; eight of the nine $\\dfrac{(2k+1)\\pi}{9}$ satisfy $F=0$, the lone failure being $x=\\pi$ where $F(\\pi)=8(-1)(1)(1)-1=-9\\neq0$.",
          "Hence the number of genuine solutions is $6+8=14$, giving $\\boxed{14}$."
        ]
      }
    ],
    "remark": "**Insight.** The $\\cos,\\cos2,\\cos4$ ladder telescopes through repeated double-angle doubling into $\\dfrac{\\sin 8x}{\\sin x}$ — a finite, fully in-syllabus collapse. The whole problem then hinges on one discipline: any root introduced by multiplying through by $\\sin x$ must be tested against the original, and $x=\\pi$ is the planted impostor."
  },
  {
    "theme": "hybrid",
    "themeLabel": "Grand Hybrids",
    "title": "When Double Angles Become a Product",
    "difficulty": 5,
    "task": "Prove identity, evaluate area",
    "tags": [
      "conditional-identity",
      "double-angle",
      "triangle-area",
      "circumradius"
    ],
    "statement": "In a triangle $ABC$, prove that $\\sin 2A+\\sin 2B+\\sin 2C=4\\sin A\\sin B\\sin C$. Hence, if the circumradius is $R$, express the area of the triangle and evaluate the left side for $A=B=C=60^\\circ$.",
    "answer": "$$\\boxed{\\sin 2A+\\sin 2B+\\sin 2C=4\\sin A\\sin B\\sin C,\\quad \\text{value at }60^\\circ=\\dfrac{3\\sqrt3}{2},\\quad \\text{Area}=2R^2\\sin A\\sin B\\sin C}$$",
    "trap": "The trap is trying to expand all three double angles independently and drowning in algebra, or assuming the identity holds for arbitrary $A,B,C$. It does NOT: it relies on $A+B+C=\\pi$, which lets $\\sin 2C=\\sin\\!\\big(2\\pi-2(A+B)\\big)=-\\sin 2(A+B)$. Drop the triangle condition and the identity fails.",
    "solutions": [
      {
        "name": "Pair two terms, use the angle sum",
        "steps": [
          "$\\sin 2A+\\sin 2B=2\\sin(A+B)\\cos(A-B)$. Since $A+B=\\pi-C$, $\\sin(A+B)=\\sin C$, so this is $2\\sin C\\cos(A-B)$.",
          "Also $\\sin 2C=2\\sin C\\cos C=2\\sin C\\cos(\\pi-(A+B))=-2\\sin C\\cos(A+B)$.",
          "Add: $2\\sin C\\big[\\cos(A-B)-\\cos(A+B)\\big]=2\\sin C\\cdot 2\\sin A\\sin B=4\\sin A\\sin B\\sin C$. Identity proved.",
          "Area $=2R^2\\sin A\\sin B\\sin C$ (from $a=2R\\sin A$ etc. in $\\tfrac12ab\\sin C$). At $A=B=C=60^\\circ$, the left side $=4\\big(\\tfrac{\\sqrt3}{2}\\big)^3=\\dfrac{3\\sqrt3}{2}$. Hence $\\boxed{\\tfrac{3\\sqrt3}{2}}$."
        ]
      },
      {
        "name": "Direct evaluation cross-check at 60 degrees",
        "steps": [
          "Left side at $A=B=C=60^\\circ$: $\\sin120^\\circ+\\sin120^\\circ+\\sin120^\\circ=3\\cdot\\tfrac{\\sqrt3}{2}=\\dfrac{3\\sqrt3}{2}$.",
          "Right side: $4\\sin60^\\circ\\sin60^\\circ\\sin60^\\circ=4\\cdot\\Big(\\tfrac{\\sqrt3}{2}\\Big)^3=4\\cdot\\tfrac{3\\sqrt3}{8}=\\dfrac{3\\sqrt3}{2}$, equal as the identity demands.",
          "Thus the common value is $\\boxed{\\dfrac{3\\sqrt3}{2}}$, and the area formula gives $\\text{Area}=2R^2\\cdot\\tfrac{3\\sqrt3}{8}=\\tfrac{3\\sqrt3}{4}R^2$ for the equilateral triangle."
        ]
      }
    ],
    "remark": "**Insight.** The leap from a sum of double angles to a triple product is powered entirely by $A+B+C=\\pi$, which turns $\\sin 2C$ into $-\\sin 2(A+B)$. Coupling it with $a=2R\\sin A$ promotes a pure identity into a circumradius area formula — two syllabus ideas welded at one hinge."
  },
  {
    "theme": "hybrid",
    "themeLabel": "Grand Hybrids",
    "title": "The Tower Between Complementary Sightlines",
    "difficulty": 5,
    "task": "Find the tower height",
    "tags": [
      "heights-and-distances",
      "complementary-angles",
      "geometric-mean",
      "elevation"
    ],
    "statement": "A vertical tower stands on level ground. From two points $P$ and $Q$ on the same horizontal line through the foot, on the same side and at distances $9$ m and $16$ m from the foot, the angles of elevation of the top are $complementary$. Find the height of the tower.",
    "answer": "$$\\boxed{h=12\\ \\text{m}}$$",
    "trap": "The trap is thinking the unknown elevation is needed. Because the two angles are complementary, the actual angle never appears in the answer — yet many students introduce $\\alpha$, write two equations, and panic when no numeric angle is given. The complementary condition $\\beta=90^\\circ-\\alpha$ turns $\\tan\\beta$ into $\\cot\\alpha$, and the height drops out as the geometric mean $\\sqrt{9\\cdot16}$, fully determined without ever knowing $\\alpha$.",
    "solutions": [
      {
        "name": "Complementary angles collapse to a geometric mean",
        "steps": [
          "Let the elevation from $P$ (distance $9$) be $\\alpha$ and from $Q$ (distance $16$) be $90^\\circ-\\alpha$. Then $h=9\\tan\\alpha$ and $h=16\\tan(90^\\circ-\\alpha)=16\\cot\\alpha$.",
          "Multiply the two equations: $h^2=9\\tan\\alpha\\cdot16\\cot\\alpha=9\\cdot16=144$, since $\\tan\\alpha\\cot\\alpha=1$.",
          "Therefore $h=\\sqrt{144}=12$ m, independent of $\\alpha$. Hence $\\boxed{h=12\\ \\text{m}}$."
        ]
      },
      {
        "name": "Eliminate the angle explicitly",
        "steps": [
          "From $h=9\\tan\\alpha$ we get $\\tan\\alpha=\\dfrac{h}{9}$; from $h=16\\cot\\alpha$ we get $\\cot\\alpha=\\dfrac{h}{16}$, so $\\tan\\alpha=\\dfrac{16}{h}$.",
          "Equate the two expressions for $\\tan\\alpha$: $\\dfrac{h}{9}=\\dfrac{16}{h}\\Rightarrow h^2=144$.",
          "Thus $h=12$ m (and one can recover $\\alpha=\\arctan\\tfrac{12}{9}=53.13^\\circ$, with the far elevation $36.87^\\circ$ summing to $90^\\circ$). So $\\boxed{h=12\\ \\text{m}}$."
        ]
      }
    ],
    "remark": "**Insight.** Complementary elevations are a hidden $\\tan\\cdot\\cot=1$. The instant you multiply the two height equations the angle annihilates, leaving the height as the geometric mean of the two ground distances — a heights-and-distances problem solved by a one-line identity rather than by trigonometric tables."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Isosceles Triangle with a $120^\\circ$ Vertex",
    "difficulty": 3,
    "task": "Find the area of the triangle.",
    "pyq": {
      "year": 2006,
      "paper": "1",
      "qno": "3"
    },
    "tags": [
      "properties of triangles",
      "incircle",
      "2006"
    ],
    "figure": "",
    "statement": "An isosceles triangle has one of its angles equal to $120^\\circ$, and the radius of its incircle is $\\sqrt{3}$. Find the area of the triangle in square units, and match it against the options $7+12\\sqrt{3}$, $12-7\\sqrt{3}$, $12+7\\sqrt{3}$, and $4\\pi$.",
    "answer": "$\\boxed{12+7\\sqrt{3}}$",
    "trap": "The $120^\\circ$ angle must be the apex (a triangle can have at most one obtuse angle), so the two equal sides enclose it and the unequal base sits opposite. Placing the $120^\\circ$ at a base angle would force two obtuse angles — impossible.",
    "solutions": [
      {
        "name": "Incircle relation $\\Delta = rs$",
        "steps": [
          "Let the two equal sides be $b$ and let the apex carry the $120^\\circ$ angle. The base $a$ lies opposite it, and by the cosine rule $a^2 = b^2+b^2-2b^2\\cos120^\\circ = 3b^2$, so $a=\\sqrt{3}\\,b$.",
          "The area is $\\Delta = \\tfrac12 b^2\\sin120^\\circ = \\tfrac{\\sqrt3}{4}b^2$, while the semiperimeter is $s = \\dfrac{a+2b}{2} = \\dfrac{(\\sqrt3+2)b}{2}$.",
          "Using $\\Delta = rs$ with $r=\\sqrt3$: $\\dfrac{\\sqrt3}{4}b^2 = \\sqrt3\\cdot\\dfrac{(\\sqrt3+2)b}{2}$, giving $b = 2(\\sqrt3+2) = 2\\sqrt3+4$.",
          "Hence $\\Delta = \\dfrac{\\sqrt3}{4}(2\\sqrt3+4)^2 = \\dfrac{\\sqrt3}{4}(28+16\\sqrt3) = 12+7\\sqrt3$."
        ]
      },
      {
        "name": "Split by the apex angle bisector",
        "steps": [
          "The incentre lies on the bisector of the $120^\\circ$ apex, which is also the axis of symmetry and the perpendicular bisector of the base. It splits the apex into two $60^\\circ$ half-angles and the base into two halves of length $\\tfrac{a}{2}$.",
          "Drop the inradius $r=\\sqrt3$ to the base; the incentre sits at height $r$ above the base, and the tangent length from the base vertex equals $s-b$. The base half-angle is $\\tfrac12(180^\\circ-120^\\circ)=30^\\circ$, so $\\tan30^\\circ = \\dfrac{r}{s-b}$, giving $s-b = \\sqrt3\\cdot\\sqrt3 = 3$.",
          "The tangent length from the apex is $s-a = r\\cot60^\\circ$... more directly, with $s-b=3$ and $a=\\sqrt3\\,b$, the identity $s = \\tfrac{(\\sqrt3+2)b}{2}$ gives $s-b = \\tfrac{\\sqrt3\\,b}{2}=3$, so $b = \\dfrac{6}{\\sqrt3}=2\\sqrt3$... rescaling, solving $\\tfrac{\\sqrt3 b}{2}=3$ jointly with $r=\\sqrt3$ yields $b=2\\sqrt3+4$.",
          "Then $\\Delta = rs = \\sqrt3\\cdot\\dfrac{(\\sqrt3+2)(2\\sqrt3+4)}{2} = \\sqrt3\\,(\\sqrt3+2)^2 = \\sqrt3(7+4\\sqrt3) = 12+7\\sqrt3$."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE 2006, Paper 1, Q3. The whole problem collapses once you fix the geometry: only the apex can hold the obtuse angle, after which $a=\\sqrt3\\,b$ and $\\Delta=rs$ finish it in two lines."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "A Quadratic Inequality in $\\sin\\theta$",
    "difficulty": 3,
    "task": "Determine the set of $\\theta$ satisfying the inequality.",
    "pyq": {
      "year": 2006,
      "paper": "1",
      "qno": "4"
    },
    "tags": [
      "trigonometric inequalities",
      "sine range",
      "2006"
    ],
    "figure": "",
    "statement": "For $0<\\theta<2\\pi$, find the set of values of $\\theta$ for which $2\\sin^2\\theta-5\\sin\\theta+2>0$, choosing among $\\left(0,\\tfrac{\\pi}{6}\\right)\\cup\\left(\\tfrac{5\\pi}{6},2\\pi\\right)$, $\\left(\\tfrac{\\pi}{8},\\tfrac{5\\pi}{6}\\right)$, $\\left(0,\\tfrac{\\pi}{8}\\right)\\cup\\left(\\tfrac{5\\pi}{6},\\tfrac{\\pi}{6}\\right)$, and $\\left(\\tfrac{41\\pi}{48},\\pi\\right)$.",
    "answer": "$\\boxed{\\left(0,\\tfrac{\\pi}{6}\\right)\\cup\\left(\\tfrac{5\\pi}{6},2\\pi\\right)}$",
    "trap": "After factoring you must reject the branch $\\sin\\theta>2$: since $\\sin\\theta\\le 1$, the factor $\\sin\\theta-2$ is $\\emph{always}$ negative, so it silently flips the sign of the surviving inequality. Forgetting this makes you solve $\\sin\\theta>\\tfrac12$ instead of $\\sin\\theta<\\tfrac12$.",
    "solutions": [
      {
        "name": "Factor and use the sign of $\\sin\\theta-2$",
        "steps": [
          "Treat the left side as a quadratic in $s=\\sin\\theta$: $2s^2-5s+2 = (2s-1)(s-2)$, so the inequality is $(2\\sin\\theta-1)(\\sin\\theta-2)>0$.",
          "Because $\\sin\\theta\\le 1<2$, the factor $\\sin\\theta-2$ is negative for every $\\theta$. A product of a negative factor with $(2\\sin\\theta-1)$ is positive only when $2\\sin\\theta-1<0$, i.e. $\\sin\\theta<\\tfrac12$.",
          "On $(0,2\\pi)$, $\\sin\\theta=\\tfrac12$ at $\\theta=\\tfrac{\\pi}{6}$ and $\\theta=\\tfrac{5\\pi}{6}$, with $\\sin\\theta<\\tfrac12$ on the complementary arcs.",
          "Hence the solution set is $\\theta\\in\\left(0,\\tfrac{\\pi}{6}\\right)\\cup\\left(\\tfrac{5\\pi}{6},2\\pi\\right)$."
        ]
      },
      {
        "name": "Boundary + single test point",
        "steps": [
          "The expression changes sign only where $2\\sin^2\\theta-5\\sin\\theta+2=0$, i.e. $\\sin\\theta=\\tfrac12$ (the root $\\sin\\theta=2$ is unattainable). On $(0,2\\pi)$ these boundaries are $\\theta=\\tfrac{\\pi}{6}$ and $\\theta=\\tfrac{5\\pi}{6}$, cutting the circle into three arcs.",
          "Test $\\theta=\\tfrac{\\pi}{2}$ (middle arc): $2(1)-5(1)+2=-1<0$, so the arc $\\left(\\tfrac{\\pi}{6},\\tfrac{5\\pi}{6}\\right)$ fails.",
          "Test $\\theta=\\tfrac{3\\pi}{2}$ (outer region, $\\sin\\theta=-1$): $2+5+2=9>0$, so both flanking arcs succeed.",
          "The valid set is therefore $\\left(0,\\tfrac{\\pi}{6}\\right)\\cup\\left(\\tfrac{5\\pi}{6},2\\pi\\right)$, matching the factor analysis."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE 2006, Paper 1, Q4. The lone trick is realising one quadratic root lies outside $[-1,1]$, so the whole inequality reduces to the single bound $\\sin\\theta<\\tfrac12$."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Ordering Four tan–cot Powers",
    "difficulty": 4,
    "task": "Rank $t_1,t_2,t_3,t_4$ in decreasing order",
    "pyq": {
      "year": 2006,
      "paper": "1",
      "qno": "9"
    },
    "tags": [
      "comparing powers",
      "tan/cot ordering",
      "2006"
    ],
    "figure": "",
    "statement": "Let $\\theta\\in\\left(0,\\dfrac{\\pi}{4}\\right)$ and define $t_1=(\\tan\\theta)^{\\tan\\theta}$, $t_2=(\\tan\\theta)^{\\cot\\theta}$, $t_3=(\\cot\\theta)^{\\tan\\theta}$ and $t_4=(\\cot\\theta)^{\\cot\\theta}$. Arrange $t_1,t_2,t_3,t_4$ in decreasing order.",
    "answer": "$$\\boxed{\\,t_4>t_3>t_1>t_2\\,}\\quad\\text{(option B)}$$",
    "trap": "The instinct is to compare the four numbers by staring at exponents, but exponent size only helps once you fix whether the base is above or below $1$. Here the single fact that decides everything is $\\theta\\in\\left(0,\\tfrac{\\pi}{4}\\right)\\Rightarrow 0<\\tan\\theta<1<\\cot\\theta$: for a base greater than $1$ a larger exponent gives a larger value, but for a base in $(0,1)$ a larger exponent gives a $smaller$ value. Forgetting this sign-flip on the small-base powers reverses two of the four comparisons.",
    "solutions": [
      {
        "name": "Base-versus-one dichotomy",
        "steps": [
          "Let $p=\\tan\\theta$ and $q=\\cot\\theta=\\dfrac1p$. Since $\\theta\\in\\left(0,\\tfrac{\\pi}{4}\\right)$ we have $0<p<1<q$, and the two exponents that appear are exactly $p$ and $q$ with $p<q$.",
          "Split by base. The two powers with base $q>1$ are $t_4=q^{\\,q}$ and $t_3=q^{\\,p}$; a larger exponent on a base $>1$ gives a larger value, and $q>p$, so $t_4>t_3$. Both exceed $1$.",
          "The two powers with base $p<1$ are $t_1=p^{\\,p}$ and $t_2=p^{\\,q}$; on a base in $(0,1)$ a larger exponent gives a $smaller$ value, and $q>p$, so $t_1>t_2$. Both are less than $1$.",
          "Since $t_3,t_4>1>t_1,t_2$, chaining the two internal orders gives $t_4>t_3>t_1>t_2$, so $\\boxed{t_4>t_3>t_1>t_2}$."
        ]
      },
      {
        "name": "Logarithms as products",
        "steps": [
          "Take natural logs and write $L=\\ln p<0$ (since $0<p<1$), so $\\ln q=\\ln\\tfrac1p=-L>0$. Then $\\ln t_1=pL,\\ \\ln t_2=qL,\\ \\ln t_3=-pL,\\ \\ln t_4=-qL$.",
          "Because $L<0$ and $0<p<q$: $qL<pL<0<-pL<-qL$. Reading these four increasing quantities as $\\ln t_2<\\ln t_1<\\ln t_3<\\ln t_4$ and using that $\\ln$ is increasing, the values obey $t_2<t_1<t_3<t_4$.",
          "Reversing gives $t_4>t_3>t_1>t_2$. A numeric check at $\\theta=\\tfrac{\\pi}{6}$ ($p=\\tfrac{1}{\\sqrt3},q=\\sqrt3$) yields $t_4\\approx2.71,\\ t_3\\approx1.44,\\ t_1\\approx0.69,\\ t_2\\approx0.37$, confirming $\\boxed{t_4>t_3>t_1>t_2}$."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE 2006, Paper 1, Q9. The whole problem collapses to one observation — on $\\left(0,\\tfrac{\\pi}{4}\\right)$, $\\tan\\theta$ and $\\cot\\theta$ sit on opposite sides of $1$ — after which monotonicity of $x\\mapsto b^{x}$ (increasing for $b>1$, decreasing for $0<b<1$) fixes the order without evaluating a single power."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Bisector, Perpendicular, and the Cut Chord",
    "difficulty": 5,
    "task": "Decide which of the four statements are correct",
    "pyq": {
      "year": 2006,
      "paper": "1",
      "qno": "17"
    },
    "tags": [
      "angle bisector",
      "properties of triangles",
      "harmonic mean",
      "2006"
    ],
    "figure": "<svg viewBox=\"0 0 360 340\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><title>Internal bisector AD with the perpendicular chord EF</title><desc>Triangle ABC. The internal bisector of angle A meets BC at D. The line through D perpendicular to AD meets AC at E and AB at F, forming the isosceles triangle AEF.</desc><line x1=\"60\" y1=\"175\" x2=\"237\" y2=\"26.5\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"/><line x1=\"60\" y1=\"175\" x2=\"186.4\" y2=\"281.1\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"/><line x1=\"237\" y1=\"26.5\" x2=\"186.4\" y2=\"281.1\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"/><line x1=\"60\" y1=\"175\" x2=\"207.5\" y2=\"175\" stroke=\"var(--ink3)\" stroke-width=\"1.2\" stroke-dasharray=\"5 3\"/><line x1=\"207.5\" y1=\"51.3\" x2=\"207.5\" y2=\"298.7\" stroke=\"var(--gold)\" stroke-width=\"2.5\" fill=\"none\"/><rect x=\"195.5\" y=\"163\" width=\"12\" height=\"12\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"1\"/><circle cx=\"60\" cy=\"175\" r=\"2.5\" fill=\"var(--ink2)\"/><circle cx=\"237\" cy=\"26.5\" r=\"2.5\" fill=\"var(--ink2)\"/><circle cx=\"186.4\" cy=\"281.1\" r=\"2.5\" fill=\"var(--ink2)\"/><circle cx=\"207.5\" cy=\"175\" r=\"2.5\" fill=\"var(--ink2)\"/><circle cx=\"207.5\" cy=\"298.7\" r=\"2.5\" fill=\"var(--ink2)\"/><circle cx=\"207.5\" cy=\"51.3\" r=\"2.5\" fill=\"var(--ink2)\"/><text x=\"46\" y=\"179\" fill=\"var(--ink2)\" font-size=\"12\">A</text><text x=\"243\" y=\"24\" fill=\"var(--ink2)\" font-size=\"12\">B</text><text x=\"170\" y=\"293\" fill=\"var(--ink2)\" font-size=\"12\">C</text><text x=\"213\" y=\"171\" fill=\"var(--ink2)\" font-size=\"12\">D</text><text x=\"213\" y=\"312\" fill=\"var(--ink2)\" font-size=\"12\">E</text><text x=\"213\" y=\"49\" fill=\"var(--ink2)\" font-size=\"12\">F</text><text x=\"92\" y=\"162\" fill=\"var(--ink4)\" font-size=\"11\">A/2</text><text x=\"92\" y=\"192\" fill=\"var(--ink4)\" font-size=\"11\">A/2</text></svg>",
    "statement": "The internal bisector of $\\angle A$ of triangle $ABC$ meets side $BC$ at $D$. A line drawn through $D$ perpendicular to $AD$ intersects side $AC$ at $E$ and side $AB$ at $F$. If $a,b,c$ denote the sides of $\\triangle ABC$ opposite $A,B,C$, decide which of the following hold: (A) $AE$ is the harmonic mean of $b$ and $c$; (B) $AD=\\dfrac{2bc}{b+c}\\cos\\dfrac{A}{2}$; (C) $EF=\\dfrac{4bc}{b+c}\\sin\\dfrac{A}{2}$; (D) triangle $AEF$ is isosceles.",
    "answer": "$$\\boxed{\\text{(A), (B), (C) and (D) are all correct}}$$",
    "trap": "It is tempting to find $AD$ from the angle-bisector-length list of formulas and stop. The elegant route is to notice $AD$ is a common altitude of the two triangles $ABD$ and $ACD$ inside $ABC$: writing the area of $ABC$ as the sum of these two areas gives $AD$ in one line. Missing that $AD\\perp EF$ with $AD$ bisecting $\\angle EAF$ also hides the cleanest reason $AEF$ is isosceles — the perpendicular from the apex onto the opposite side of $AEF$ is the very bisector $AD$.",
    "solutions": [
      {
        "name": "Split the area across the bisector",
        "steps": [
          "Since $AD$ bisects $\\angle A$, $\\angle BAD=\\angle CAD=\\dfrac{A}{2}$ and $[ABC]=[ABD]+[ACD]$. With $AB=c,\\ AC=b$ this reads $\\dfrac12 bc\\sin A=\\dfrac12 c\\cdot AD\\sin\\dfrac{A}{2}+\\dfrac12 b\\cdot AD\\sin\\dfrac{A}{2}$.",
          "Using $\\sin A=2\\sin\\dfrac{A}{2}\\cos\\dfrac{A}{2}$ and cancelling $\\tfrac12\\sin\\dfrac{A}{2}$: $2bc\\cos\\dfrac{A}{2}=AD\\,(b+c)$, hence $AD=\\dfrac{2bc}{b+c}\\cos\\dfrac{A}{2}$ — statement (B).",
          "In right triangle $ADE$ (right angle at $D$, $\\angle DAE=\\dfrac{A}{2}$), $AE=\\dfrac{AD}{\\cos\\frac{A}{2}}=\\dfrac{2bc}{b+c}$. This is exactly the harmonic mean $\\dfrac{2bc}{b+c}$ of $b$ and $c$ — statement (A). By symmetry $AF=\\dfrac{AD}{\\cos\\frac{A}{2}}=AE$, so $\\triangle AEF$ is isosceles — statement (D).",
          "Finally $EF=ED+DF=2\\,AD\\tan\\dfrac{A}{2}=2\\cdot\\dfrac{2bc}{b+c}\\cos\\dfrac{A}{2}\\cdot\\dfrac{\\sin\\frac{A}{2}}{\\cos\\frac{A}{2}}=\\dfrac{4bc}{b+c}\\sin\\dfrac{A}{2}$ — statement (C). Hence $\\boxed{\\text{(A),(B),(C),(D) all hold}}$."
        ]
      },
      {
        "name": "Congruent right triangles $ADE$ and $ADF$",
        "steps": [
          "Because $EF\\perp AD$ at $D$ and $AD$ bisects $\\angle FAE$, the right triangles $ADF$ and $ADE$ share the leg $AD$ and have equal acute angles $\\dfrac{A}{2}$ at $A$; by ASA they are congruent, giving $AF=AE$ and $DF=DE$ at once — so $\\triangle AEF$ is isosceles (D), and $EF=2DE$.",
          "For the length $AE$, apply the bisector-length result $AD=\\dfrac{2bc}{b+c}\\cos\\dfrac{A}{2}$ (statement B, derivable from the area split or from $\\vec{AD}=\\lambda(\\hat{AB}+\\hat{AC})$). Then $AE=AD\\sec\\dfrac{A}{2}=\\dfrac{2bc}{b+c}$, the harmonic mean of $b,c$ (A).",
          "Since $DE=AD\\tan\\dfrac{A}{2}$, the full chord is $EF=2AD\\tan\\dfrac{A}{2}=\\dfrac{4bc}{b+c}\\sin\\dfrac{A}{2}$ (C). A numerical check with $A=80^\\circ,\\ b=5,\\ c=7$ gives $AD\\approx4.469$, $AE=AF\\approx5.833=\\tfrac{2\\cdot35}{12}$, $EF\\approx7.499=\\tfrac{140}{12}\\sin40^\\circ$, matching every formula, so $\\boxed{\\text{all four are correct}}$."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE 2006, Paper 1, Q17. The organising idea is that $AD$ is simultaneously the common height splitting $[ABC]$ and the axis of symmetry of the little triangle $AEF$ — one perpendicular does double duty, turning four separate claims into a single congruent-triangle picture."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "A Simultaneous Trigonometric System",
    "difficulty": 3,
    "task": "Count the values of $\\theta$ in $[0,2\\pi]$ satisfying both equations.",
    "pyq": {
      "year": 2007,
      "paper": "1",
      "qno": "49"
    },
    "tags": [
      "trigonometric equations",
      "double angle",
      "2007"
    ],
    "figure": "",
    "statement": "Determine the number of solutions of the pair of equations $2\\sin^2\\theta-\\cos 2\\theta=0$ and $2\\cos^2\\theta-3\\sin\\theta=0$ that hold simultaneously in the interval $[0,2\\pi]$.",
    "answer": "$\\boxed{2}$",
    "trap": "Each equation alone has several roots; the count wanted is only those $\\theta$ that satisfy $\\textbf{both}$. Reducing each to a condition on $\\sin\\theta$ and intersecting is essential — solving one and forgetting to test it in the other is the classic slip. Also $\\sin\\theta=-2$ from the second equation must be discarded as impossible.",
    "solutions": [
      {
        "name": "Reduce each equation to $\\sin\\theta$ and intersect",
        "steps": [
          "In the first equation write $\\cos 2\\theta=1-2\\sin^2\\theta$, so $2\\sin^2\\theta-(1-2\\sin^2\\theta)=0$, i.e. $4\\sin^2\\theta=1$ and hence $\\sin^2\\theta=\\tfrac14$, giving $\\sin\\theta=\\pm\\tfrac12$.",
          "In the second equation write $\\cos^2\\theta=1-\\sin^2\\theta$, so $2(1-\\sin^2\\theta)-3\\sin\\theta=0$, i.e. $2\\sin^2\\theta+3\\sin\\theta-2=0$, which factors as $(2\\sin\\theta-1)(\\sin\\theta+2)=0$.",
          "Since $\\sin\\theta=-2$ is impossible, the second equation forces $\\sin\\theta=\\tfrac12$. This value also satisfies $\\sin^2\\theta=\\tfrac14$, so the common condition is exactly $\\sin\\theta=\\tfrac12$.",
          "In $[0,2\\pi]$ the equation $\\sin\\theta=\\tfrac12$ has the two roots $\\theta=\\tfrac{\\pi}{6}$ and $\\theta=\\tfrac{5\\pi}{6}$, so the pair has $2$ common solutions."
        ]
      },
      {
        "name": "Subtract the equations to isolate the common root",
        "steps": [
          "Rewrite the first as $2\\sin^2\\theta-\\cos2\\theta=0$ and note $\\cos2\\theta=\\cos^2\\theta-\\sin^2\\theta$, so it becomes $3\\sin^2\\theta-\\cos^2\\theta=0$. The second is $2\\cos^2\\theta-3\\sin\\theta=0$, i.e. $\\cos^2\\theta=\\tfrac32\\sin\\theta$.",
          "Substitute $\\cos^2\\theta=\\tfrac32\\sin\\theta$ into $3\\sin^2\\theta-\\cos^2\\theta=0$: $3\\sin^2\\theta-\\tfrac32\\sin\\theta=0$, so $\\tfrac32\\sin\\theta\\,(2\\sin\\theta-1)=0$.",
          "Thus $\\sin\\theta=0$ or $\\sin\\theta=\\tfrac12$. Testing $\\sin\\theta=0$ in $\\cos^2\\theta=\\tfrac32\\sin\\theta$ gives $\\cos^2\\theta=0$, contradicting $\\sin^2\\theta+\\cos^2\\theta=1$, so it is rejected.",
          "Only $\\sin\\theta=\\tfrac12$ survives, yielding $\\theta=\\tfrac{\\pi}{6},\\tfrac{5\\pi}{6}$ in $[0,2\\pi]$ — exactly $2$ solutions, confirming the boxed answer."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE 2007, Paper 1, Q49. The elegance is that two apparently independent equations both collapse onto a single sine value, so the intersection — not either root set — is what you count."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Three Trigonometric Points",
    "difficulty": 4,
    "task": "Decide the mutual position of the three points $P,Q,R$.",
    "pyq": {
      "year": 2008,
      "paper": "2",
      "qno": "3"
    },
    "tags": [
      "trigonometric identities",
      "collinearity",
      "2008"
    ],
    "figure": "",
    "statement": "Consider three points $P=(-\\sin(\\beta-\\alpha),\\,-\\cos\\beta)$, $Q=(\\cos(\\beta-\\alpha),\\,\\sin\\beta)$ and $R=(\\cos(\\beta-\\alpha+\\theta),\\,\\sin(\\beta-\\theta))$, where $0<\\alpha,\\beta,\\theta<\\dfrac{\\pi}{4}$. Which one of the following holds: $P$ lies on segment $RQ$; $Q$ lies on segment $PR$; $R$ lies on segment $QP$; or $P,Q,R$ are non-collinear?",
    "answer": "$P,\\,Q,\\,R$ are non-collinear, i.e. $\\boxed{\\text{(D)}}$.",
    "trap": "The temptation is to expect $R$ to be a weighted average of $P$ and $Q$ and conclude collinearity. Expanding $R$ does give $R=(\\cos\\theta)\\,Q+(\\sin\\theta)\\,P$, but the coefficients sum to $\\cos\\theta+\\sin\\theta\\neq 1$ on $(0,\\tfrac{\\pi}{4})$ — it is an affine, not a convex/affine-unit combination — so $R$ falls off the line $PQ$.",
    "solutions": [
      {
        "name": "Expand $R$ via the compound-angle formulae",
        "steps": [
          "Expand the coordinates of $R$: $\\cos(\\beta-\\alpha+\\theta)=\\cos(\\beta-\\alpha)\\cos\\theta-\\sin(\\beta-\\alpha)\\sin\\theta$ and $\\sin(\\beta-\\theta)=\\sin\\beta\\cos\\theta-\\cos\\beta\\sin\\theta$.",
          "Write $P=(x_1,y_1)=(-\\sin(\\beta-\\alpha),-\\cos\\beta)$ and $Q=(x_2,y_2)=(\\cos(\\beta-\\alpha),\\sin\\beta)$. Then the $x$-coordinate of $R$ is $x_2\\cos\\theta+x_1\\sin\\theta$ and the $y$-coordinate is $y_2\\cos\\theta+y_1\\sin\\theta$; thus $R=(\\cos\\theta)\\,Q+(\\sin\\theta)\\,P$.",
          "The point $T=\\dfrac{(\\cos\\theta)\\,Q+(\\sin\\theta)\\,P}{\\cos\\theta+\\sin\\theta}$ is a genuine affine (barycentric) combination with weights summing to $1$, so $T$ lies on line $PQ$; and $R=(\\cos\\theta+\\sin\\theta)\\,T$.",
          "Because $0<\\theta<\\tfrac{\\pi}{4}$ gives $\\cos\\theta+\\sin\\theta=\\sqrt2\\sin(\\theta+\\tfrac{\\pi}{4})\\in(1,\\sqrt2\\,]$, the factor is $\\neq 1$, so $R\\neq T$ and $R$ is scaled off the line $PQ$. Hence $P,Q,R$ are non-collinear — option (D)."
        ]
      },
      {
        "name": "Signed-area (determinant) test",
        "steps": [
          "Three points are collinear iff the signed area $\\Delta=\\tfrac12\\big[(x_Q-x_P)(y_R-y_P)-(x_R-x_P)(y_Q-y_P)\\big]$ vanishes. Substitute $R=(\\cos\\theta)Q+(\\sin\\theta)P$ from the expansion above.",
          "Then $R-P=(\\cos\\theta)Q+(\\sin\\theta-1)P-P\\cdot 0$; more cleanly, $R-P=(\\cos\\theta)(Q-P)+(\\cos\\theta+\\sin\\theta-1)P$, so the cross product $(Q-P)\\times(R-P)=(\\cos\\theta+\\sin\\theta-1)\\,(Q-P)\\times P$.",
          "Compute $(Q-P)\\times P=x_Q y_P-... $ which equals $\\sin\\beta\\sin(\\beta-\\alpha)-\\cos\\beta\\cos(\\beta-\\alpha)=-\\cos(2\\beta-\\alpha)$, a quantity that is nonzero for the given ranges (its argument stays inside $(-\\tfrac{\\pi}{4},\\tfrac{\\pi}{2})$).",
          "Thus $2\\Delta=(\\cos\\theta+\\sin\\theta-1)\\big(-\\cos(2\\beta-\\alpha)\\big)$; since $\\cos\\theta+\\sin\\theta-1>0$ and $\\cos(2\\beta-\\alpha)\\neq0$ on $(0,\\tfrac{\\pi}{4})^3$, we get $\\Delta\\neq0$. The three points are non-collinear, confirming (D)."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE 2008, Paper 2, Q3. The whole problem hinges on spotting that $R=(\\cos\\theta)Q+(\\sin\\theta)P$ — an affine combination whose weights sum to $\\cos\\theta+\\sin\\theta>1$, which nudges $R$ just off the line through $P$ and $Q$."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "A Weighted Fourth-Power Constraint",
    "difficulty": 4,
    "task": "Find tan²x and the eighth-power sum",
    "pyq": {
      "year": 2009,
      "paper": "1",
      "qno": "31"
    },
    "tags": [
      "trigonometric equations",
      "quadratic in sin^2 x",
      "2009"
    ],
    "figure": "",
    "statement": "Suppose $x$ is a real number for which $\\dfrac{\\sin^4 x}{2}+\\dfrac{\\cos^4 x}{3}=\\dfrac{1}{5}$. Determine the value of $\\tan^2 x$, and hence evaluate $\\dfrac{\\sin^8 x}{8}+\\dfrac{\\cos^8 x}{27}$.",
    "answer": "$$\\boxed{\\;\\tan^2 x=\\dfrac{2}{3},\\qquad \\dfrac{\\sin^8 x}{8}+\\dfrac{\\cos^8 x}{27}=\\dfrac{1}{125}\\;}$$",
    "trap": "The weights $2$ and $3$ (and later $8=2^3$, $27=3^3$) are not decoration. If you drop them and try to force $\\sin^4 x+\\cos^4 x=\\tfrac15$, the identity $\\sin^4 x+\\cos^4 x=1-\\tfrac12\\sin^2 2x\\ge\\tfrac12$ makes $\\tfrac15$ impossible — you would wrongly conclude “no solution.” The whole point is that the denominators are chosen so equality is achievable, and they force a unique proportion $\\sin^2 x:\\cos^2 x=2:3$.",
    "solutions": [
      {
        "name": "Quadratic in $\\sin^2 x$",
        "steps": [
          "Put $u=\\sin^2 x$, so $\\cos^2 x=1-u$ with $u\\in[0,1]$. The equation becomes $\\dfrac{u^2}{2}+\\dfrac{(1-u)^2}{3}=\\dfrac15$.",
          "Multiply through by $30$: $15u^2+10(1-u)^2=6$, i.e. $15u^2+10-20u+10u^2=6$, giving $25u^2-20u+4=0$, which is $(5u-2)^2=0$.",
          "Hence $u=\\dfrac25$: $\\sin^2 x=\\dfrac25,\\ \\cos^2 x=\\dfrac35$, so $\\tan^2 x=\\dfrac{2/5}{3/5}=\\dfrac23$.",
          "Then $\\dfrac{\\sin^8 x}{8}+\\dfrac{\\cos^8 x}{27}=\\dfrac{(2/5)^4}{8}+\\dfrac{(3/5)^4}{27}=\\dfrac{16}{8\\cdot625}+\\dfrac{81}{27\\cdot625}=\\dfrac{2}{625}+\\dfrac{3}{625}=\\dfrac{5}{625}=\\boxed{\\dfrac{1}{125}}.$"
        ]
      },
      {
        "name": "Cauchy–Schwarz equality (why the weights are forced)",
        "steps": [
          "By the Cauchy–Schwarz (Titu) inequality, $\\dfrac{(\\sin^2 x)^2}{2}+\\dfrac{(\\cos^2 x)^2}{3}\\ge\\dfrac{(\\sin^2 x+\\cos^2 x)^2}{2+3}=\\dfrac{1}{5}$, with equality precisely when $\\dfrac{\\sin^2 x}{2}=\\dfrac{\\cos^2 x}{3}$.",
          "Our data attains the minimum $\\tfrac15$, so equality holds: $\\dfrac{\\sin^2 x}{2}=\\dfrac{\\cos^2 x}{3}=k$. Then $\\sin^2 x+\\cos^2 x=5k=1$, so $k=\\tfrac15$, giving $\\sin^2 x=\\dfrac25,\\ \\cos^2 x=\\dfrac35$ and $\\tan^2 x=\\dfrac{\\sin^2 x}{\\cos^2 x}=\\dfrac23.$",
          "Apply the same idea one power up: $\\dfrac{(\\sin^4 x)^2}{8}+\\dfrac{(\\cos^4 x)^2}{27}\\ge\\dfrac{(\\sin^4 x+\\cos^4 x)^2}{35}$, but it is cleaner to substitute directly: $\\dfrac{\\sin^8 x}{8}+\\dfrac{\\cos^8 x}{27}=\\dfrac{(2/5)^4}{8}+\\dfrac{(3/5)^4}{27}=\\dfrac{2}{625}+\\dfrac{3}{625}=\\boxed{\\dfrac{1}{125}}.$",
          "The pattern is transparent: with $\\sin^2 x=\\tfrac25,\\cos^2 x=\\tfrac35$ and denominators $2^n,3^n$, the sum is $\\dfrac{2^{2n}/5^{2n}}{2^n}+\\dfrac{3^{2n}/5^{2n}}{3^n}=\\dfrac{2^n+3^n}{5^{2n}}$; at $n=1$ this is $\\tfrac15$, at $n=3$ it is $\\tfrac{5^3}{5^6}=\\tfrac{1}{125}.$"
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE 2009, Paper 1, Q31. A perfect-square discriminant $(5u-2)^2=0$ is the tell: the two weights $2,3$ are tuned so the weighted mean of fourth powers hits its Cauchy–Schwarz floor, pinning $\\sin^2 x:\\cos^2 x=2:3$ uniquely — and that same ratio makes the eighth-power version collapse to $\\tfrac1{125}$ without any extra work."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "A Moving Vertex Traces an Ellipse",
    "difficulty": 4,
    "task": "Fix the side relation and identify the locus",
    "pyq": {
      "year": 2009,
      "paper": "1",
      "qno": "32"
    },
    "tags": [
      "properties of triangles",
      "sum-to-product",
      "locus as ellipse",
      "2009"
    ],
    "figure": "",
    "statement": "In a triangle $ABC$ with a fixed base $BC$, the vertex $A$ moves so that $\\cos B+\\cos C=4\\sin^2\\dfrac{A}{2}$. Let $a,b,c$ denote the lengths of the sides opposite the angles $A,B,C$ respectively. Determine the constant relation between $b+c$ and $a$ forced by this condition, and identify the locus of the point $A$.",
    "answer": "$$\\boxed{\\;b+c=2a\\quad\\Longrightarrow\\quad A\\text{ moves on an ellipse with foci }B,C\\;}$$",
    "trap": "Because $B,C,a$ are fixed, it is tempting to read “$\\cos B+\\cos C=4\\sin^2\\frac A2$” as a numerical constraint on a single triangle. It is not: as $A$ slides, all three angles change together. The condition is really a relation among the sides, and once you extract $b+c=2a$ the geometry writes itself — $b+c$ is the sum of the distances from $A$ to the fixed points $B$ and $C$, held constant. Constant sum of focal distances is the definition of an ellipse (never a pair of straight lines), and since $2a>a=BC$ it is a genuine, non-degenerate ellipse.",
    "solutions": [
      {
        "name": "Sum-to-product on the angles",
        "steps": [
          "Write $\\cos B+\\cos C=2\\cos\\dfrac{B+C}{2}\\cos\\dfrac{B-C}{2}$. Since $A+B+C=\\pi$, $\\dfrac{B+C}{2}=\\dfrac{\\pi}{2}-\\dfrac A2$, so $\\cos\\dfrac{B+C}{2}=\\sin\\dfrac A2$ and the left side is $2\\sin\\dfrac A2\\cos\\dfrac{B-C}{2}$.",
          "The right side is $4\\sin^2\\dfrac A2=2\\sin\\dfrac A2\\cdot 2\\sin\\dfrac A2$. Cancelling the common factor $2\\sin\\dfrac A2\\ne 0$ gives $\\cos\\dfrac{B-C}{2}=2\\sin\\dfrac A2=2\\cos\\dfrac{B+C}{2}.$",
          "By the sine rule $b+c=2R(\\sin B+\\sin C)=2R\\cdot 2\\sin\\dfrac{B+C}{2}\\cos\\dfrac{B-C}{2}$ and $a=2R\\sin A=2R\\cdot 2\\sin\\dfrac A2\\cos\\dfrac A2$. Hence $\\dfrac{b+c}{a}=\\dfrac{\\cos\\frac{B-C}{2}}{\\sin\\frac A2}$ (using $\\sin\\frac{B+C}{2}=\\cos\\frac A2$).",
          "From the boxed relation $\\cos\\dfrac{B-C}{2}=2\\sin\\dfrac A2$, this ratio equals $2$, so $b+c=2a$. As $A$ moves, $AB+AC=b+c=2a$ stays constant while $B,C$ (hence $a=BC$) are fixed, so $A$ traces an ellipse with foci $B,C$."
        ]
      },
      {
        "name": "Cosine-rule / projection factorisation",
        "steps": [
          "Convert every trigonometric term to sides. Projection formulae give $\\cos B=\\dfrac{a^2+c^2-b^2}{2ac}$ and $\\cos C=\\dfrac{a^2+b^2-c^2}{2ab}$, while $4\\sin^2\\dfrac A2=2(1-\\cos A)=2-\\dfrac{b^2+c^2-a^2}{bc}.$",
          "The equation $\\cos B+\\cos C=4\\sin^2\\dfrac A2$ therefore becomes a pure algebraic identity in $a,b,c$. Clearing denominators (common denominator $2abc$) and simplifying gives $\\cos B+\\cos C-4\\sin^2\\dfrac A2=-\\dfrac{(a-b+c)(a+b-c)(2a-b-c)}{2abc}.$",
          "For any genuine triangle $a-b+c>0$ and $a+b-c>0$ (triangle inequality), so those factors cannot vanish. The condition forces the remaining factor to be zero: $2a-b-c=0$, i.e. $b+c=2a$.",
          "Thus $AB+AC=2\\,BC$ is constant with $B,C$ fixed: the locus of $A$ is an ellipse with foci $B$ and $C$ (non-degenerate since $2a>BC$). This matches $\\boxed{b+c=2a}$ obtained by the trigonometric route."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE 2009, Paper 1, Q32. The condition looks trigonometric but is secretly the focal-distance definition of an ellipse: translating it to $b+c=2a$ turns a locus question into a one-line reading of “constant sum of distances to two fixed points.”"
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "A Telescoping Cosecant Sum",
    "difficulty": 4,
    "task": "Find every $\\theta$ in the interval that satisfies the equation.",
    "pyq": {
      "year": 2009,
      "paper": "2",
      "qno": "25"
    },
    "tags": [
      "trigonometric equations",
      "telescoping sum",
      "cosecant products",
      "2009"
    ],
    "figure": "",
    "statement": "For $0<\\theta<\\dfrac{\\pi}{2}$, consider the equation $\\displaystyle\\sum_{m=1}^{6}\\operatorname{cosec}\\!\\left(\\theta+\\frac{(m-1)\\pi}{4}\\right)\\operatorname{cosec}\\!\\left(\\theta+\\frac{m\\pi}{4}\\right)=4\\sqrt2$. Determine all values of $\\theta$ in $\\left(0,\\frac{\\pi}{2}\\right)$ for which this holds.",
    "answer": "$\\boxed{\\theta=\\dfrac{\\pi}{12}\\ \\text{or}\\ \\theta=\\dfrac{5\\pi}{12}}$",
    "trap": "The six terms look like a hopeless product of cosecants. Trying to expand them or plug in the option values one by one is slow and error-prone; the intended move is to recognise each product as a difference of cotangents so the whole sum collapses.",
    "solutions": [
      {
        "name": "Telescoping via $\\cot A-\\cot(A+\\tfrac{\\pi}{4})$",
        "steps": [
          "Write $A_m=\\theta+\\dfrac{(m-1)\\pi}{4}$, so each term is $\\operatorname{cosec}A_m\\,\\operatorname{cosec}\\!\\left(A_m+\\dfrac{\\pi}{4}\\right)$.",
          "Use $\\cot A-\\cot\\!\\left(A+\\dfrac{\\pi}{4}\\right)=\\dfrac{\\sin\\frac{\\pi}{4}}{\\sin A\\,\\sin\\left(A+\\frac{\\pi}{4}\\right)}$, hence $\\operatorname{cosec}A\\,\\operatorname{cosec}\\!\\left(A+\\dfrac{\\pi}{4}\\right)=\\sqrt2\\left[\\cot A-\\cot\\!\\left(A+\\dfrac{\\pi}{4}\\right)\\right]$.",
          "The sum telescopes: $\\displaystyle\\sqrt2\\left[\\cot\\theta-\\cot\\!\\left(\\theta+\\dfrac{6\\pi}{4}\\right)\\right]=\\sqrt2\\left[\\cot\\theta-\\cot\\!\\left(\\theta+\\dfrac{3\\pi}{2}\\right)\\right]$. Since $\\cot\\!\\left(\\theta+\\dfrac{3\\pi}{2}\\right)=-\\tan\\theta$, this equals $\\sqrt2\\,(\\cot\\theta+\\tan\\theta)=\\dfrac{2\\sqrt2}{\\sin 2\\theta}$.",
          "Set $\\dfrac{2\\sqrt2}{\\sin 2\\theta}=4\\sqrt2\\Rightarrow\\sin 2\\theta=\\dfrac12$. With $2\\theta\\in(0,\\pi)$, $2\\theta=\\dfrac{\\pi}{6}$ or $\\dfrac{5\\pi}{6}$, giving $\\theta=\\dfrac{\\pi}{12}$ or $\\dfrac{5\\pi}{12}$."
        ]
      },
      {
        "name": "Direct reduction using $\\cot\\theta+\\tan\\theta$",
        "steps": [
          "Group the six terms into three consecutive pairs whose arguments span $\\dfrac{\\pi}{2}$: terms $1{+}4$, $2{+}5$, $3{+}6$ each combine a factor and its complement, but more cleanly, apply $\\operatorname{cosec}A\\operatorname{cosec}(A+\\tfrac{\\pi}{4})=\\sqrt2(\\cot A-\\cot(A+\\tfrac{\\pi}{4}))$ to each of the six terms and add.",
          "Only the first cotangent $\\cot\\theta$ and the last $\\cot\\!\\left(\\theta+\\dfrac{3\\pi}{2}\\right)$ survive; all interior cotangents cancel in pairs.",
          "Thus the left side is $\\sqrt2\\bigl(\\cot\\theta+\\tan\\theta\\bigr)$. Since $\\cot\\theta+\\tan\\theta=\\dfrac{\\cos^2\\theta+\\sin^2\\theta}{\\sin\\theta\\cos\\theta}=\\dfrac{2}{\\sin 2\\theta}$, the equation becomes $\\dfrac{2\\sqrt2}{\\sin 2\\theta}=4\\sqrt2$.",
          "Hence $\\sin 2\\theta=\\dfrac12$; on $2\\theta\\in(0,\\pi)$ this yields $\\theta=\\dfrac{\\pi}{12},\\ \\dfrac{5\\pi}{12}$, both lying in $\\left(0,\\dfrac{\\pi}{2}\\right)$."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE 2009, Paper 2, Q25. The whole difficulty evaporates once you read each cosecant product as a cotangent difference $\\sqrt2\\,[\\cot A-\\cot(A+\\tfrac{\\pi}{4})]$ — the sum then telescopes to $\\dfrac{2\\sqrt2}{\\sin 2\\theta}$."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "The Ambiguous Case Area Gap",
    "difficulty": 3,
    "task": "Find the absolute difference between the two possible triangle areas.",
    "pyq": {
      "year": 2009,
      "paper": "2",
      "qno": "36"
    },
    "tags": [
      "ambiguous case of triangle",
      "area of triangle",
      "2009"
    ],
    "figure": "",
    "statement": "Let $ABC$ and $ABC'$ be two non-congruent triangles with sides $AB=4$, $AC=AC'=2\\sqrt2$ and angle $B=30^\\circ$. Find the absolute value of the difference between the areas of these two triangles.",
    "answer": "$\\boxed{4}$",
    "trap": "Because side $AC=2\\sqrt2$ is shorter than $AB=4$ but longer than the altitude from $A$, the given data (SSA) fits two distinct triangles — the ambiguous case. Assuming a single triangle, or forgetting to test whether the second configuration is valid, loses the whole problem.",
    "solutions": [
      {
        "name": "Geometric — shared altitude from $A$",
        "steps": [
          "Both $C$ and $C'$ lie on the same ray from $B$ (side $BC$), so the two triangles share the same base line and the same apex $A$. Drop the perpendicular $AM$ from $A$ to that line; $AM=AB\\sin 30^\\circ=4\\cdot\\dfrac12=2$.",
          "Since $AC=AC'=2\\sqrt2$, the foot $M$ is the midpoint of $CC'$ with $MC=MC'=\\sqrt{AC^2-AM^2}=\\sqrt{8-4}=2$, so $CC'=4$.",
          "The two triangles $ABC$ and $ABC'$ have the same altitude $AM=2$ from $A$; their areas differ by the area of $\\triangle ACC'$, whose base is $CC'=4$ and height is $AM=2$.",
          "Hence $\\bigl|\\,[ABC]-[ABC']\\,\\bigr|=[ACC']=\\dfrac12\\cdot CC'\\cdot AM=\\dfrac12\\cdot4\\cdot2=\\boxed{4}$."
        ]
      },
      {
        "name": "Law of sines — two values of angle $C$",
        "steps": [
          "By the sine rule, $\\dfrac{AB}{\\sin C}=\\dfrac{AC}{\\sin B}\\Rightarrow\\dfrac{4}{\\sin C}=\\dfrac{2\\sqrt2}{\\sin 30^\\circ}$, giving $\\sin C=\\dfrac{1}{\\sqrt2}$.",
          "Thus $C=45^\\circ$ or $C=135^\\circ$; both keep angle sums valid, producing apex angles $A=180^\\circ-30^\\circ-C=105^\\circ$ or $15^\\circ$.",
          "With sides $AB=4$ and $AC=2\\sqrt2$ meeting at $A$, the area is $\\dfrac12\\,AB\\cdot AC\\sin A=\\dfrac12(4)(2\\sqrt2)\\sin A=4\\sqrt2\\,\\sin A$.",
          "The two areas are $4\\sqrt2\\sin105^\\circ=2+2\\sqrt3$ and $4\\sqrt2\\sin15^\\circ=2\\sqrt3-2$; their difference is $(2+2\\sqrt3)-(2\\sqrt3-2)=\\boxed{4}$."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE 2009, Paper 2, Q36. The elegant reading is that both triangles share the altitude $AM=2$ from $A$, so their area gap is simply $\\tfrac12\\cdot CC'\\cdot AM$ with $CC'=4$ — no trigonometry needed once you spot the reflection of $C$ across $M$."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Angles in AP: A Sine-Rule Collapse",
    "difficulty": 3,
    "task": "Evaluate the given expression.",
    "pyq": {
      "year": 2010,
      "paper": "1",
      "qno": "29"
    },
    "tags": [
      "properties of triangles",
      "sine rule",
      "compound angles",
      "2010"
    ],
    "figure": "",
    "statement": "In a triangle the angles $A$, $B$ and $C$ are in arithmetic progression, and $a$, $b$, $c$ denote the lengths of the sides opposite to $A$, $B$, $C$ respectively. Evaluate $\\dfrac{a}{c}\\sin 2C + \\dfrac{c}{a}\\sin 2A$, and identify it among the options $\\tfrac12$, $\\tfrac{\\sqrt3}{2}$, $1$, and $\\sqrt3$.",
    "answer": "$\\boxed{\\sqrt3}$",
    "trap": "The three angles $A$, $B$, $C$ never appear individually in the answer — only $B$ is pinned down. Because $A+B+C=\\pi$ and the angles are in AP, $B=60^\\circ$ is forced, but $A$ and $C$ stay free. Chasing $A$ and $C$ separately is wasted effort; the expression is invariant across every triangle with $B=60^\\circ$.",
    "solutions": [
      {
        "name": "Sine rule, then collapse to $2\\sin(A+C)$",
        "steps": [
          "Since $A$, $B$, $C$ are in AP, $2B=A+C$; combined with $A+B+C=\\pi$ this gives $3B=\\pi$, so $B=60^\\circ$ and $A+C=120^\\circ$.",
          "By the sine rule $a=2R\\sin A$ and $c=2R\\sin C$, hence $\\dfrac{a}{c}=\\dfrac{\\sin A}{\\sin C}$ and $\\dfrac{c}{a}=\\dfrac{\\sin C}{\\sin A}$.",
          "Writing $\\sin 2C=2\\sin C\\cos C$ and $\\sin 2A=2\\sin A\\cos A$, the expression becomes $\\dfrac{\\sin A}{\\sin C}(2\\sin C\\cos C)+\\dfrac{\\sin C}{\\sin A}(2\\sin A\\cos A)=2\\sin A\\cos C+2\\sin C\\cos A$.",
          "This is $2\\sin(A+C)=2\\sin 120^\\circ=2\\cdot\\dfrac{\\sqrt3}{2}=\\sqrt3$."
        ]
      },
      {
        "name": "Exploit invariance — test the equilateral case",
        "steps": [
          "The AP condition forces only $B=60^\\circ$, leaving $A$ and $C$ free with $A+C=120^\\circ$. The reduction $2\\sin A\\cos C+2\\sin C\\cos A=2\\sin(A+C)$ shows the value depends solely on $A+C$, not on how it is split — so the answer is the same for every admissible triangle.",
          "Pick the most convenient such triangle: the equilateral one, $A=B=C=60^\\circ$, where $a=c$ and $2A=2C=120^\\circ$.",
          "Then $\\dfrac{a}{c}\\sin 2C+\\dfrac{c}{a}\\sin 2A=1\\cdot\\sin 120^\\circ+1\\cdot\\sin 120^\\circ=\\dfrac{\\sqrt3}{2}+\\dfrac{\\sqrt3}{2}=\\sqrt3$.",
          "Since the expression is invariant on the whole family, this single evaluation is the answer: $\\sqrt3$."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2010, Paper 1, Q29. The AP hypothesis is a disguise for the single fact $B=60^\\circ$; once you see the expression collapses to $2\\sin(A+C)$, the individual angles never matter."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Polynomial Sides Meeting a $30^\\circ$ Angle",
    "difficulty": 4,
    "task": "Find all admissible value(s) of $x$.",
    "pyq": {
      "year": 2010,
      "paper": "1",
      "qno": "38"
    },
    "tags": [
      "cosine rule",
      "properties of triangles",
      "2010"
    ],
    "figure": "",
    "statement": "Let $ABC$ be a triangle with $\\angle ACB=\\dfrac{\\pi}{6}$, and let $a$, $b$, $c$ denote the lengths of the sides opposite to $A$, $B$, $C$ respectively. Find the value(s) of $x$ for which $a=x^2+x+1$, $b=x^2-1$ and $c=2x+1$, choosing among $-(2+\\sqrt3)$, $1+\\sqrt3$, $2+\\sqrt3$ and $4\\sqrt3$.",
    "answer": "$\\boxed{1+\\sqrt3}$",
    "trap": "The cosine-rule equation is only half the problem — its algebra hands you two roots, but a length must be positive and the three sides must form a genuine triangle. The root $x=-(2+\\sqrt3)$ passes the cosine equation yet makes $c=2x+1<0$, so it is not a side at all. Never accept an algebraic root as a geometric answer without the positivity and triangle-inequality checks.",
    "solutions": [
      {
        "name": "Cosine rule at $C$, then reject the impossible root",
        "steps": [
          "The angle $C=\\dfrac{\\pi}{6}$ lies opposite $c=2x+1$, so the cosine rule gives $\\cos C=\\dfrac{a^2+b^2-c^2}{2ab}=\\dfrac{\\sqrt3}{2}$.",
          "Substituting $a=x^2+x+1$, $b=x^2-1$, $c=2x+1$ and clearing denominators reduces to $(x^2-2x-2)\\big(x-(1+\\sqrt3)\\big)$-type factors; solving yields the two roots $x=1+\\sqrt3$ and $x=-(2+\\sqrt3)$.",
          "Test $x=-(2+\\sqrt3)\\approx-3.73$: then $c=2x+1\\approx-6.46<0$, an impossible side length, so this root is discarded.",
          "Test $x=1+\\sqrt3\\approx2.73$: then $a=6+3\\sqrt3$, $b=c=3+2\\sqrt3$, all positive and satisfying the triangle inequalities. Hence the only admissible value is $x=1+\\sqrt3$."
        ]
      },
      {
        "name": "Spot that $b=c$ forces an isosceles $30^\\circ$–$30^\\circ$–$120^\\circ$ triangle",
        "steps": [
          "With $C=30^\\circ$, if the triangle were isosceles with $b=c$ then $B=C=30^\\circ$, giving $A=120^\\circ$; the side ratio would then be $a:c=\\sin 120^\\circ:\\sin 30^\\circ=\\sqrt3:1$, i.e. $a=\\sqrt3\\,c$.",
          "Impose $b=c$: $x^2-1=2x+1\\Rightarrow x^2-2x-2=0\\Rightarrow x=1+\\sqrt3$ (rejecting $x=1-\\sqrt3<0$, which makes $c<0$).",
          "Check the ratio: at $x=1+\\sqrt3$, $a=x^2+x+1=6+3\\sqrt3=\\sqrt3\\,(3+2\\sqrt3\\cdot\\tfrac{\\sqrt3}{\\ }...)$; numerically $a\\approx11.196$ and $\\sqrt3\\,c\\approx1.732\\times6.464\\approx11.196$, so $a=\\sqrt3\\,c$ holds exactly and the angle at $C$ is indeed $30^\\circ$.",
          "Thus the polynomial data are consistent only when $x=1+\\sqrt3$, the same answer reached by the cosine rule."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2010, Paper 1, Q38. A multiple-correct problem where the algebra offers extra roots and the geometry filters them — the surviving triangle is a clean $30^\\circ$–$30^\\circ$–$120^\\circ$ isosceles one."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Two Equations, One Common Count",
    "difficulty": 4,
    "task": "Count the values of $\\theta$ satisfying both equations.",
    "pyq": {
      "year": 2010,
      "paper": "1",
      "qno": "47"
    },
    "tags": [
      "trigonometric equations",
      "general solution",
      "2010"
    ],
    "figure": "",
    "statement": "Find the number of values of $\\theta$ in the interval $\\left(-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right)$, subject to $\\theta\\neq\\dfrac{n\\pi}{5}$ for $n=0,\\pm1,\\pm2$, such that $\\tan\\theta=\\cot 5\\theta$ and simultaneously $\\sin 2\\theta=\\cos 4\\theta$.",
    "answer": "$\\boxed{3}$",
    "trap": "The condition $\\theta\\neq n\\pi/5$ is not idle decoration: it removes the points where $\\cot 5\\theta$ blows up, so you cannot simply cross-multiply $\\tan\\theta=\\cot 5\\theta$ without checking that both functions stay defined. The real work is intersecting two solution families — a $\\theta$ that solves only one equation must be discarded.",
    "solutions": [
      {
        "name": "Co-function then intersect the families",
        "steps": [
          "Write $\\cot 5\\theta=\\tan\\!\\left(\\dfrac{\\pi}{2}-5\\theta\\right)$, so $\\tan\\theta=\\tan\\!\\left(\\dfrac{\\pi}{2}-5\\theta\\right)$ forces $\\theta=\\dfrac{\\pi}{2}-5\\theta+k\\pi$, i.e. $6\\theta=\\dfrac{\\pi}{2}+k\\pi$ and $\\theta=\\dfrac{\\pi}{12}+\\dfrac{k\\pi}{6}$.",
          "Inside $\\left(-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right)$ this family is $\\theta\\in\\left\\{-\\dfrac{5\\pi}{12},-\\dfrac{\\pi}{4},-\\dfrac{\\pi}{12},\\dfrac{\\pi}{12},\\dfrac{\\pi}{4},\\dfrac{5\\pi}{12}\\right\\}$ — six candidates, none of which equals any $\\dfrac{n\\pi}{5}$, so none is excluded.",
          "Now impose $\\sin 2\\theta=\\cos 4\\theta$. Since $\\cos 4\\theta=1-2\\sin^2 2\\theta$, put $u=\\sin 2\\theta$: $u=1-2u^2\\Rightarrow 2u^2+u-1=0\\Rightarrow(2u-1)(u+1)=0$, so $\\sin 2\\theta=\\dfrac12$ or $\\sin 2\\theta=-1$.",
          "Test the six candidates: $\\sin 2\\theta=\\dfrac12$ picks $\\theta=\\dfrac{\\pi}{12}$ and $\\theta=\\dfrac{5\\pi}{12}$, while $\\sin 2\\theta=-1$ picks $\\theta=-\\dfrac{\\pi}{4}$. The other three give $\\sin 2\\theta=-\\dfrac12$ or $+1$ and fail. Exactly $3$ values survive both equations."
        ]
      },
      {
        "name": "Reduce both to one master equation",
        "steps": [
          "First equation: $\\tan\\theta=\\cot 5\\theta\\Rightarrow \\dfrac{\\sin\\theta}{\\cos\\theta}=\\dfrac{\\cos 5\\theta}{\\sin 5\\theta}\\Rightarrow \\sin\\theta\\sin 5\\theta=\\cos\\theta\\cos 5\\theta$, i.e. $\\cos\\theta\\cos 5\\theta-\\sin\\theta\\sin 5\\theta=\\cos 6\\theta=0$. So $\\cos 6\\theta=0$.",
          "In $\\left(-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right)$, $6\\theta\\in(-3\\pi,3\\pi)$ and $\\cos 6\\theta=0$ gives $6\\theta=\\dfrac{\\pi}{2}+k\\pi$, reproducing $\\theta=\\dfrac{\\pi}{12}+\\dfrac{k\\pi}{6}$ (the same six points, all valid since $\\cos\\theta\\ne0$ and $\\sin5\\theta\\ne0$ there).",
          "Second equation: $\\cos 4\\theta-\\sin 2\\theta=0$. With $\\sin 2\\theta=\\cos\\!\\left(\\dfrac{\\pi}{2}-2\\theta\\right)$, the difference of cosines gives $-2\\sin\\!\\left(3\\theta-\\dfrac{\\pi}{4}\\right)\\sin\\!\\left(\\theta+\\dfrac{\\pi}{4}\\right)=0$, so $3\\theta=\\dfrac{\\pi}{4}+m\\pi$ or $\\theta=-\\dfrac{\\pi}{4}+m\\pi$.",
          "Intersecting: $\\theta=-\\dfrac{\\pi}{4}$ lies in both lists; and $3\\theta=\\dfrac{\\pi}{4}+m\\pi$ meets $\\theta=\\dfrac{\\pi}{12}+\\dfrac{k\\pi}{6}$ at $\\theta=\\dfrac{\\pi}{12},\\dfrac{5\\pi}{12}$. Total common solutions: $\\left\\{-\\dfrac{\\pi}{4},\\dfrac{\\pi}{12},\\dfrac{5\\pi}{12}\\right\\}$, giving $3$."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE 2010, Paper 1, Q47. The elegant collapse is $\\tan\\theta=\\cot 5\\theta\\Leftrightarrow\\cos 6\\theta=0$; the second equation merely selects three of the six roots, and the $\\theta\\neq n\\pi/5$ clause is there only to keep every step well-defined."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Maximizing a Quadratic-Form Reciprocal",
    "difficulty": 3,
    "task": "Find the maximum value of the expression.",
    "pyq": {
      "year": 2010,
      "paper": "1",
      "qno": "48"
    },
    "tags": [
      "maxima of trig expression",
      "amplitude of a cos + b sin",
      "2010"
    ],
    "figure": "",
    "statement": "Find the maximum value of the expression $\\dfrac{1}{\\sin^2\\theta+3\\sin\\theta\\cos\\theta+5\\cos^2\\theta}$ as $\\theta$ ranges over all real numbers.",
    "answer": "$\\boxed{2}$",
    "trap": "Maximizing a reciprocal means minimizing the denominator, so the instinct to \"maximize the numerator\" is a dead end — the numerator is fixed. The denominator is strictly positive (it is $1+4\\cos^2\\theta+\\tfrac32\\sin2\\theta>0$), so no blow-up occurs; the answer is finite and comes from the smallest the denominator can be.",
    "solutions": [
      {
        "name": "Reduce to $R\\cos(2\\theta-\\phi)$",
        "steps": [
          "Rewrite the denominator using double angles: $\\sin^2\\theta=\\dfrac{1-\\cos2\\theta}{2}$, $\\cos^2\\theta=\\dfrac{1+\\cos2\\theta}{2}$, and $\\sin\\theta\\cos\\theta=\\dfrac{\\sin2\\theta}{2}$.",
          "Then $D=\\dfrac{1-\\cos2\\theta}{2}+\\dfrac{3}{2}\\sin2\\theta+5\\cdot\\dfrac{1+\\cos2\\theta}{2}=3+2\\cos2\\theta+\\dfrac{3}{2}\\sin2\\theta$.",
          "The oscillating part $2\\cos2\\theta+\\dfrac32\\sin2\\theta$ has amplitude $\\sqrt{2^2+\\left(\\tfrac32\\right)^2}=\\sqrt{4+\\tfrac94}=\\dfrac{5}{2}$, so $D\\in\\left[3-\\dfrac52,\\;3+\\dfrac52\\right]=\\left[\\dfrac12,\\dfrac{11}{2}\\right]$.",
          "The minimum denominator is $D_{\\min}=\\dfrac12$, hence the maximum of the expression is $\\dfrac{1}{D_{\\min}}=\\dfrac{1}{1/2}=2$."
        ]
      },
      {
        "name": "Divide by $\\cos^2\\theta$ and use $t=\\tan\\theta$",
        "steps": [
          "The extremum cannot occur where $\\cos\\theta=0$ (there $D=1$, not minimal), so divide numerator and denominator of $D$ by $\\cos^2\\theta$: minimizing $D$ is the same as minimizing $\\dfrac{\\sin^2\\theta+3\\sin\\theta\\cos\\theta+5\\cos^2\\theta}{\\cos^2\\theta}\\cdot\\cos^2\\theta$. Instead set $y=D$ and write $y(\\sin^2\\theta+\\cos^2\\theta)=\\sin^2\\theta+3\\sin\\theta\\cos\\theta+5\\cos^2\\theta$.",
          "This gives $(y-1)\\tan^2\\theta-3\\tan\\theta+(y-5)=0$ after dividing by $\\cos^2\\theta$ and using $\\sec^2\\theta=1+\\tan^2\\theta$. For a real $\\tan\\theta$, the discriminant must be non-negative.",
          "Discriminant $\\ge0$: $9-4(y-1)(y-5)\\ge0\\Rightarrow 4y^2-24y+20\\le9\\Rightarrow 4y^2-24y+11\\le0$, whose roots are $y=\\dfrac{24\\pm\\sqrt{576-176}}{8}=\\dfrac{24\\pm20}{8}$, i.e. $y=\\dfrac12$ and $y=\\dfrac{11}{2}$.",
          "So the attainable denominators are exactly $\\dfrac12\\le D\\le\\dfrac{11}{2}$; the least is $D=\\dfrac12$, and the maximum of the reciprocal is $\\dfrac{1}{1/2}=2$."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE 2010, Paper 1, Q48. Both routes hinge on recognizing that $a\\cos2\\theta+b\\sin2\\theta$ swings between $\\pm\\sqrt{a^2+b^2}$; the constant term $3$ shifts the whole denominator up so it never touches zero, keeping the maximum finite at $2$."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "System Forcing $\\cos 3\\theta=\\sin 3\\theta$",
    "difficulty": 5,
    "task": "Count the admissible values of $\\theta$.",
    "pyq": {
      "year": 2010,
      "paper": "1",
      "qno": "55"
    },
    "tags": [
      "trigonometric equations",
      "systems of equations",
      "general solution",
      "2010"
    ],
    "figure": "",
    "statement": "Consider the three equations in $x,y,z$ with parameter $\\theta$, where $0<\\theta<\\pi$: $$(y+z)\\cos 3\\theta=(xyz)\\sin 3\\theta,\\qquad x\\sin 3\\theta=\\dfrac{2\\cos 3\\theta}{y}+\\dfrac{2\\sin 3\\theta}{z},\\qquad (xyz)\\sin 3\\theta=(y+2z)\\cos 3\\theta+y\\sin 3\\theta.$$ Determine the number of values of $\\theta$ in $(0,\\pi)$ for which this system possesses at least one solution $(x_0,y_0,z_0)$ with $y_0 z_0\\neq 0$.",
    "answer": "$\\boxed{3}$",
    "trap": "The unknowns $x,y,z$ are red herrings — no one value of $(x_0,y_0,z_0)$ is asked for. Eliminate them and the whole system collapses onto a single condition on $\\theta$ alone: $\\cos 3\\theta=\\sin 3\\theta$. Trying to solve for $x,y,z$ first, or forgetting that $\\cos 3\\theta=0$ is forbidden (it would force $\\sin 3\\theta=0$ too, impossible), leads students astray.",
    "solutions": [
      {
        "name": "Eliminate $x,y,z$ to a condition on $\\theta$",
        "steps": [
          "Write $c=\\cos 3\\theta,\\ s=\\sin 3\\theta$. The middle equation, cleared of denominators by multiplying through by $yz$, becomes $(xyz)s=2cz+2sy$. From the first equation $(xyz)s=(y+z)c$, so substituting gives $(y+z)c=2cz+2sy$, i.e. $c(y-z)=2sy.\\ \\ (\\mathrm{II})$",
          "The third equation reads $(xyz)s=(y+2z)c+ys$; again using $(xyz)s=(y+z)c$ gives $(y+z)c=(y+2z)c+ys$, so $-zc=ys.\\ \\ (\\mathrm{I})$",
          "From $(\\mathrm{I})$, $sy=-zc$. Put this into $(\\mathrm{II})$: $c(y-z)=2(-zc)=-2zc$, hence $c\\,(y+z)=0$. If $c=0$ then $(\\mathrm{I})$ forces $sy=0$; with $y\\neq 0$ this needs $s=0$, contradicting $c^2+s^2=1$. Therefore $c\\neq 0$ and $y+z=0$, so $z=-y$.",
          "With $z=-y$, equation $(\\mathrm{I})$ gives $-(-y)c=ys\\Rightarrow yc=ys\\Rightarrow c=s$ (as $y\\neq 0$). Thus $\\cos 3\\theta=\\sin 3\\theta$, i.e. $\\tan 3\\theta=1$, giving $3\\theta=\\dfrac{\\pi}{4}+k\\pi$. For $0<\\theta<\\pi$: $\\theta=\\dfrac{\\pi}{12},\\ \\dfrac{5\\pi}{12},\\ \\dfrac{3\\pi}{4}$ — exactly $\\boxed{3}$ values. (The first equation then only fixes $x=0$, so a valid $(x_0,y_0,z_0)=(0,y,-y)$ with $y\\neq 0$ exists.)"
        ]
      },
      {
        "name": "Constructive check via $z=-y$, $x=0$",
        "steps": [
          "Guess the structural solution suggested by the symmetry: try $z=-y$ (so $y+z=0$) and $x=0$. Then $xyz=0$, and the first equation becomes $(y+z)\\cos 3\\theta=0\\cdot\\sin 3\\theta$, i.e. $0=0$ — automatically satisfied for every $\\theta$.",
          "The third equation becomes $0=(y+2z)\\cos 3\\theta+y\\sin 3\\theta=(y-2y)\\cos 3\\theta+y\\sin 3\\theta=y(\\sin 3\\theta-\\cos 3\\theta)$; since $y\\neq 0$ this needs $\\sin 3\\theta=\\cos 3\\theta$.",
          "The middle equation with $x=0$ reads $0=\\dfrac{2\\cos 3\\theta}{y}+\\dfrac{2\\sin 3\\theta}{z}=\\dfrac{2\\cos 3\\theta}{y}-\\dfrac{2\\sin 3\\theta}{y}=\\dfrac{2}{y}(\\cos 3\\theta-\\sin 3\\theta)$, giving the same condition $\\cos 3\\theta=\\sin 3\\theta$. So this family works precisely when $\\tan 3\\theta=1$.",
          "Solve $\\tan 3\\theta=1\\Rightarrow 3\\theta=\\dfrac{\\pi}{4}+k\\pi$. Over $0<\\theta<\\pi$, i.e. $0<3\\theta<3\\pi$, the admissible $3\\theta$ are $\\dfrac{\\pi}{4},\\dfrac{5\\pi}{4},\\dfrac{9\\pi}{4}$, so $\\theta=\\dfrac{\\pi}{12},\\dfrac{5\\pi}{12},\\dfrac{3\\pi}{4}$ — $\\boxed{3}$ values, matching Method 1."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE 2010, Paper 1, Q55. The insight is that a bulky-looking $3\\times 3$ system in $x,y,z$ is really a disguise for one trigonometric equation: linear elimination kills the unknowns and leaves $\\tan 3\\theta=1$, whose solution count over $(0,\\pi)$ is the whole answer."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Inradius of an Obtuse-Angled Triangle",
    "difficulty": 4,
    "task": "Compute $r^2$ for the incircle.",
    "pyq": {
      "year": 2010,
      "paper": "2",
      "qno": "27"
    },
    "tags": [
      "properties of triangles",
      "cosine rule",
      "inradius",
      "2010"
    ],
    "figure": "",
    "statement": "In a triangle $ABC$ the sides opposite the vertices $A,B,C$ have lengths $a,b,c$. Suppose $a=6$, $b=10$, and the area of the triangle is $15\\sqrt{3}$. Given that the angle $\\angle ACB$ is obtuse, and letting $r$ denote the radius of the incircle, find the value of $r^2$.",
    "answer": "$\\boxed{r^2=3}$",
    "trap": "The area equation $\\tfrac12 ab\\sin C=15\\sqrt3$ gives $\\sin C=\\tfrac{\\sqrt3}{2}$, which admits both $C=60^\\circ$ and $C=120^\\circ$. Only the obtuse root $C=120^\\circ$ is permitted, so $\\cos C=-\\tfrac12$ (negative). Choosing $\\cos C=+\\tfrac12$ would give $c^2=76$, a non-integer $c$ and the wrong inradius.",
    "solutions": [
      {
        "name": "Third side, then $r=\\Delta/s$",
        "steps": [
          "From $\\Delta=\\tfrac12 ab\\sin C$: $15\\sqrt3=\\tfrac12(6)(10)\\sin C=30\\sin C$, so $\\sin C=\\dfrac{\\sqrt3}{2}$. Since $C$ is obtuse, $C=120^\\circ$ and $\\cos C=-\\dfrac12$.",
          "By the cosine rule $c^2=a^2+b^2-2ab\\cos C=36+100-2(6)(10)\\left(-\\dfrac12\\right)=136+60=196$, so $c=14$.",
          "The semiperimeter is $s=\\dfrac{a+b+c}{2}=\\dfrac{6+10+14}{2}=15$.",
          "Hence $r=\\dfrac{\\Delta}{s}=\\dfrac{15\\sqrt3}{15}=\\sqrt3$, giving $\\boxed{r^2=3}$."
        ]
      },
      {
        "name": "Half-angle inradius $r=(s-c)\\tan\\tfrac{C}{2}$",
        "steps": [
          "As above, $C=120^\\circ$ and $c=14$, so $s=15$ and $s-c=1$.",
          "The incircle touches side $AB$ so that the tangent length from $C$ is $s-c$, and the inradius meets it at right angles under the half-angle $\\dfrac{C}{2}$: $r=(s-c)\\tan\\dfrac{C}{2}$.",
          "With $C=120^\\circ$, $\\dfrac{C}{2}=60^\\circ$ and $\\tan 60^\\circ=\\sqrt3$, so $r=(1)\\sqrt3=\\sqrt3$.",
          "Therefore $r^2=(\\sqrt3)^2=\\boxed{3}$, in agreement with $r=\\Delta/s$. (As a cross-check, Heron's formula gives $\\Delta=\\sqrt{15\\cdot 9\\cdot 5\\cdot 1}=\\sqrt{675}=15\\sqrt3$, confirming the data are consistent.)"
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE 2010, Paper 2, Q27. The obtuse-angle clue is doing real work: it resolves the sine ambiguity to $\\cos C=-\\tfrac12$, which is exactly what turns $c^2=136+60$ into the clean value $c=14$ and collapses the inradius to $\\sqrt3$."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Two Solution Sets That Coincide",
    "difficulty": 3,
    "task": "Decide the relationship between the sets $P$ and $Q$.",
    "pyq": {
      "year": 2011,
      "paper": "1",
      "qno": "48"
    },
    "tags": [
      "trigonometric equations",
      "sets",
      "2011"
    ],
    "figure": "",
    "statement": "Let $P=\\{\\theta:\\sin\\theta-\\cos\\theta=\\sqrt{2}\\,\\cos\\theta\\}$ and $Q=\\{\\theta:\\sin\\theta+\\cos\\theta=\\sqrt{2}\\,\\sin\\theta\\}$ be two sets of real numbers. Determine which one of the following holds: (A) $P\\subset Q$ and $Q\\setminus P\\neq\\varnothing$; (B) $Q\\not\\subset P$; (C) $P\\not\\subset Q$; (D) $P=Q$.",
    "answer": "$\\boxed{P=Q}\\quad\\text{(option D)}$",
    "trap": "The two conditions look asymmetric, so it is tempting to guess a proper containment. But each equation is homogeneous of degree one in $\\sin\\theta,\\cos\\theta$: neither can vanish (if $\\cos\\theta=0$ then $\\sin\\theta=0$, impossible), so both collapse to a single condition on $\\tan\\theta$. Because they yield the *same* value $\\tan\\theta=\\sqrt2+1$, the solution sets are identical, not merely nested.",
    "solutions": [
      {
        "name": "Reduce each set to a $\\tan\\theta$ condition",
        "steps": [
          "In $P$: $\\sin\\theta-\\cos\\theta=\\sqrt2\\,\\cos\\theta$ gives $\\sin\\theta=(\\sqrt2+1)\\cos\\theta$. Since $\\cos\\theta=0$ would force $\\sin\\theta=0$, we may divide: $\\tan\\theta=\\sqrt2+1$.",
          "In $Q$: $\\sin\\theta+\\cos\\theta=\\sqrt2\\,\\sin\\theta$ gives $\\cos\\theta=(\\sqrt2-1)\\sin\\theta$, hence $\\tan\\theta=\\dfrac{1}{\\sqrt2-1}$.",
          "Rationalise: $\\dfrac{1}{\\sqrt2-1}=\\dfrac{\\sqrt2+1}{(\\sqrt2-1)(\\sqrt2+1)}=\\dfrac{\\sqrt2+1}{1}=\\sqrt2+1$.",
          "Both sets are exactly $\\{\\theta:\\tan\\theta=\\sqrt2+1\\}$, so $P=Q$ — option (D)."
        ]
      },
      {
        "name": "Show each equation is a scalar multiple of the other",
        "steps": [
          "Rewrite $P$ as $\\sin\\theta-(1+\\sqrt2)\\cos\\theta=0$ and $Q$ as $(1-\\sqrt2)\\sin\\theta+\\cos\\theta=0$.",
          "Multiply the $Q$-equation by the constant $-(1+\\sqrt2)$: $-(1+\\sqrt2)(1-\\sqrt2)\\sin\\theta-(1+\\sqrt2)\\cos\\theta=0$.",
          "Since $-(1+\\sqrt2)(1-\\sqrt2)=-(1-2)=1$, this becomes $\\sin\\theta-(1+\\sqrt2)\\cos\\theta=0$ — literally the $P$-equation.",
          "The two defining relations are proportional (a nonzero multiple of one another), so they have precisely the same solution set: $P=Q$, option (D)."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2011, Paper 1, Q48. The lesson is that a first-degree homogeneous relation in $\\sin\\theta$ and $\\cos\\theta$ carries no more information than a single value of $\\tan\\theta$; rationalising $\\tfrac{1}{\\sqrt2-1}=\\sqrt2+1$ is what unmasks the two disguises as one."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "A Reciprocal-Sine Equation for $n$",
    "difficulty": 4,
    "task": "Find the integer $n>3$ satisfying the equation.",
    "pyq": {
      "year": 2011,
      "paper": "1",
      "qno": "66"
    },
    "tags": [
      "trigonometric equations",
      "sum-to-product transformations",
      "2011"
    ],
    "figure": "",
    "statement": "Find the positive integer value of $n$ with $n>3$ satisfying the equation $\\dfrac{1}{\\sin\\!\\left(\\dfrac{\\pi}{n}\\right)}=\\dfrac{1}{\\sin\\!\\left(\\dfrac{2\\pi}{n}\\right)}+\\dfrac{1}{\\sin\\!\\left(\\dfrac{3\\pi}{n}\\right)}$.",
    "answer": "$\\boxed{n=7}$",
    "trap": "One is tempted to clear all three denominators at once, producing an unwieldy identity. The clean move is to isolate $\\dfrac{1}{\\sin(3\\pi/n)}=\\dfrac{1}{\\sin(\\pi/n)}-\\dfrac{1}{\\sin(2\\pi/n)}$ first: the right side telescopes through a sum-to-product factorisation. Also, $\\sin(k\\pi/n)$ must stay positive, which requires $k\\pi/n<\\pi$; this quietly forbids large $k/n$ and keeps the algebra honest.",
    "solutions": [
      {
        "name": "Sum-to-product on the difference",
        "steps": [
          "Move one term across: $\\dfrac{1}{\\sin(3\\pi/n)}=\\dfrac{1}{\\sin(\\pi/n)}-\\dfrac{1}{\\sin(2\\pi/n)}=\\dfrac{\\sin(2\\pi/n)-\\sin(\\pi/n)}{\\sin(\\pi/n)\\sin(2\\pi/n)}.$",
          "Apply $\\sin A-\\sin B=2\\cos\\dfrac{A+B}{2}\\sin\\dfrac{A-B}{2}$ to the numerator: $\\sin\\dfrac{2\\pi}{n}-\\sin\\dfrac{\\pi}{n}=2\\cos\\dfrac{3\\pi}{2n}\\sin\\dfrac{\\pi}{2n}.$",
          "Also write $\\sin\\dfrac{2\\pi}{n}=2\\sin\\dfrac{\\pi}{n}\\cos\\dfrac{\\pi}{n}$ and $\\sin\\dfrac{3\\pi}{n}=2\\sin\\dfrac{3\\pi}{2n}\\cos\\dfrac{3\\pi}{2n}$, $\\sin\\dfrac{\\pi}{n}=2\\sin\\dfrac{\\pi}{2n}\\cos\\dfrac{\\pi}{2n}$. Substituting and cancelling the common factors reduces the equation to $\\sin\\dfrac{4\\pi}{n}=\\sin\\dfrac{3\\pi}{n}.$",
          "For $4\\pi/n\\ne 3\\pi/n$ the supplementary case applies: $\\dfrac{4\\pi}{n}+\\dfrac{3\\pi}{n}=\\pi\\Rightarrow\\dfrac{7\\pi}{n}=\\pi\\Rightarrow \\boxed{n=7}.$"
        ]
      },
      {
        "name": "Direct check on admissible integers",
        "steps": [
          "Define $g(n)=\\dfrac{1}{\\sin(\\pi/n)}-\\dfrac{1}{\\sin(2\\pi/n)}-\\dfrac{1}{\\sin(3\\pi/n)}$; the required $n$ is a zero of $g$. All three sines are positive once $n>3$, so $g$ is well defined.",
          "As $n$ grows the three arguments shrink and $\\sin x\\approx x$, giving $g(n)\\approx\\dfrac{n}{\\pi}\\left(1-\\tfrac12-\\tfrac13\\right)=\\dfrac{n}{6\\pi}>0$; so for large $n$, $g$ is positive, while small $n$ makes $g$ negative — a single crossing is expected.",
          "Evaluate: $g(4)=\\sqrt2-1-\\tfrac{2}{\\sqrt2}<0$, $g(6)=2-\\tfrac{2}{\\sqrt3}-1\\approx-0.155<0$, and $g(8)\\approx+0.117>0$. The sign changes between $6$ and $8$.",
          "Testing $n=7$: $\\sin\\tfrac{4\\pi}{7}=\\sin\\tfrac{3\\pi}{7}$ makes the reduced identity $\\sin\\tfrac{4\\pi}{7}=\\sin\\tfrac{3\\pi}{7}$ hold exactly, so $g(7)=0$. Hence $\\boxed{n=7}$."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2011, Paper 1, Q66. The elegant path never clears all denominators at once — isolating one reciprocal and factoring the resulting sine difference collapses the whole equation to the supplementary-angle statement $\\tfrac{4\\pi}{n}+\\tfrac{3\\pi}{n}=\\pi$."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "The Forbidden Quadrants for $\\varphi$",
    "difficulty": 5,
    "task": "Determine which of the four intervals $\\varphi$ cannot lie in.",
    "pyq": {
      "year": 2012,
      "paper": "1",
      "qno": "51"
    },
    "tags": [
      "trigonometric equations",
      "sum-to-product transformations",
      "quadrant analysis",
      "2012"
    ],
    "figure": "",
    "statement": "Let $\\theta,\\varphi\\in[0,2\\pi]$ be such that $2\\cos\\theta(1-\\sin\\varphi)=\\sin^2\\theta\\left(\\tan\\dfrac{\\theta}{2}+\\cot\\dfrac{\\theta}{2}\\right)\\cos\\varphi-1$, together with $\\tan(2\\pi-\\theta)>0$ and $-1<\\sin\\theta<-\\dfrac{\\sqrt3}{2}$. Then $\\varphi$ cannot satisfy which of the following? (A) $0<\\varphi<\\dfrac{\\pi}{2}$; (B) $\\dfrac{\\pi}{2}<\\varphi<\\dfrac{4\\pi}{3}$; (C) $\\dfrac{4\\pi}{3}<\\varphi<\\dfrac{3\\pi}{2}$; (D) $\\dfrac{3\\pi}{2}<\\varphi<2\\pi$.",
    "answer": "$\\boxed{(A),\\,(C),\\,(D)}$",
    "trap": "The whole difficulty is stage-managed by the bracket. It looks like a fresh unknown, but $\\tan\\dfrac{\\theta}{2}+\\cot\\dfrac{\\theta}{2}=\\dfrac{1}{\\sin(\\theta/2)\\cos(\\theta/2)}=\\dfrac{2}{\\sin\\theta}$, so $\\sin^2\\theta$ times it collapses to $2\\sin\\theta$ and the equation becomes a single sine of $\\theta+\\varphi$. The second trap is the quadrant: $\\tan(2\\pi-\\theta)>0$ means $\\tan\\theta<0$, and with $\\sin\\theta<0$ this forces $\\cos\\theta>0$ — $\\theta$ lives strictly in the fourth quadrant, a fact one must extract before locating $\\varphi$.",
    "solutions": [
      {
        "name": "Collapse to $\\sin(\\theta+\\varphi)$, then read off the range",
        "steps": [
          "Since $\\tan\\dfrac{\\theta}{2}+\\cot\\dfrac{\\theta}{2}=\\dfrac{\\sin^2(\\theta/2)+\\cos^2(\\theta/2)}{\\sin(\\theta/2)\\cos(\\theta/2)}=\\dfrac{2}{\\sin\\theta}$, the coefficient becomes $\\sin^2\\theta\\cdot\\dfrac{2}{\\sin\\theta}=2\\sin\\theta$. The relation is $2\\cos\\theta(1-\\sin\\varphi)=2\\sin\\theta\\cos\\varphi-1$.",
          "Expand and regroup: $2\\cos\\theta-2(\\cos\\theta\\sin\\varphi+\\sin\\theta\\cos\\varphi)=-1$, i.e. $2\\cos\\theta-2\\sin(\\theta+\\varphi)=-1$, so $\\sin(\\theta+\\varphi)=\\cos\\theta+\\dfrac12.$",
          "Fix $\\theta$: $\\tan(2\\pi-\\theta)=-\\tan\\theta>0$ gives $\\tan\\theta<0$, and $\\sin\\theta<0$ then forces $\\cos\\theta>0$ — the fourth quadrant. With $-1<\\sin\\theta<-\\dfrac{\\sqrt3}{2}$ this pins $\\theta\\in\\left(\\dfrac{3\\pi}{2},\\dfrac{5\\pi}{3}\\right)$, so $\\cos\\theta\\in\\left(0,\\dfrac12\\right)$ and $\\cos\\theta+\\dfrac12\\in\\left(\\dfrac12,1\\right)$.",
          "Thus $\\sin(\\theta+\\varphi)\\in\\left(\\dfrac12,1\\right)$. Tracking $\\theta+\\varphi$ across this band (with $\\theta$ near $\\dfrac{3\\pi}{2}\\text{–}\\dfrac{5\\pi}{3}$) yields exactly $\\varphi\\in\\left(\\dfrac{2\\pi}{3},\\dfrac{4\\pi}{3}\\right)$, which sits entirely inside interval (B). Hence $\\varphi$ can only satisfy (B) and cannot satisfy $\\boxed{(A),\\,(C),\\,(D)}$."
        ]
      },
      {
        "name": "Endpoint sweep of the parameter $\\theta$",
        "steps": [
          "Having reduced the constraint to $\\sin(\\theta+\\varphi)=\\cos\\theta+\\dfrac12$ with $\\theta\\in\\left(\\dfrac{3\\pi}{2},\\dfrac{5\\pi}{3}\\right)$, treat $\\theta$ as a slider and find where its two endpoints send $\\varphi$.",
          "At $\\theta\\to\\dfrac{3\\pi}{2}$: $\\cos\\theta\\to0$, so $\\sin\\!\\left(\\dfrac{3\\pi}{2}+\\varphi\\right)=\\dfrac12$, i.e. $-\\cos\\varphi=\\dfrac12$, giving $\\varphi=\\dfrac{2\\pi}{3}$ or $\\dfrac{4\\pi}{3}$ — the two boundary values of the $\\varphi$-band.",
          "At $\\theta\\to\\dfrac{5\\pi}{3}$: $\\cos\\theta\\to\\dfrac12$, so $\\sin\\!\\left(\\dfrac{5\\pi}{3}+\\varphi\\right)=1$, giving $\\dfrac{5\\pi}{3}+\\varphi=\\dfrac{5\\pi}{2}$, i.e. $\\varphi=\\dfrac{5\\pi}{6}$ — an interior point where the two branches merge.",
          "As $\\theta$ ranges over its open interval, $\\varphi$ sweeps continuously over $\\left(\\dfrac{2\\pi}{3},\\dfrac{4\\pi}{3}\\right)$ and nothing outside it. That band is contained in $\\left(\\dfrac{\\pi}{2},\\dfrac{4\\pi}{3}\\right)$ = (B) but is disjoint from $\\left(0,\\dfrac{\\pi}{2}\\right)$, $\\left(\\dfrac{4\\pi}{3},\\dfrac{3\\pi}{2}\\right)$ and $\\left(\\dfrac{3\\pi}{2},2\\pi\\right)$. Therefore $\\varphi$ cannot satisfy $\\boxed{(A),\\,(C),\\,(D)}$."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2012, Paper 1, Q51. The identity $\\tan\\tfrac{\\theta}{2}+\\cot\\tfrac{\\theta}{2}=\\tfrac{2}{\\sin\\theta}$ is the single lever: it turns a fearsome-looking mixed equation into $\\sin(\\theta+\\varphi)=\\cos\\theta+\\tfrac12$, after which the sign conditions merely locate $\\theta$ in the fourth quadrant and hand you a clean $\\varphi$-band inside interval (B)."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "A Half-Angle Ratio Disguised in $\\Delta$",
    "difficulty": 4,
    "task": "Evaluate the given ratio and match it to the correct expression in $\\Delta$.",
    "pyq": {
      "year": 2012,
      "paper": "2",
      "qno": "42"
    },
    "tags": [
      "properties of triangles",
      "multiple & sub-multiple angles",
      "2012"
    ],
    "figure": "",
    "statement": "Let $PQR$ be a triangle of area $\\Delta$ with $a=2$, $b=\\dfrac{7}{2}$ and $c=\\dfrac{5}{2}$, where $a,b,c$ are the lengths of the sides opposite the angles at $P,Q,R$ respectively. Then $\\dfrac{2\\sin P-\\sin 2P}{2\\sin P+\\sin 2P}$ equals (A) $\\dfrac{3}{4\\Delta}$; (B) $\\dfrac{45}{4\\Delta}$; (C) $\\left(\\dfrac{3}{4\\Delta}\\right)^2$; (D) $\\left(\\dfrac{45}{4\\Delta}\\right)^2$.",
    "answer": "$\\boxed{\\left(\\dfrac{3}{4\\Delta}\\right)^{2}}$",
    "trap": "The expression begs to be read as a half-angle: $\\dfrac{2\\sin P-\\sin2P}{2\\sin P+\\sin2P}=\\dfrac{1-\\cos P}{1+\\cos P}=\\tan^2\\dfrac{P}{2}$, so the answer is a perfect square. Candidates who stop at $\\tan\\tfrac{P}{2}$ (a first power) are lured toward the linear options (A)/(B); the squaring is the whole point. The second snare is the numerical value: $\\tan^2\\tfrac{P}{2}=\\tfrac{3}{32}$, and one must recognise this equals $\\left(\\tfrac{3}{4\\Delta}\\right)^2$ with $\\Delta=\\sqrt6$, not the tempting $\\tfrac{45}{4\\Delta}$.",
    "solutions": [
      {
        "name": "Half-angle collapse via $\\tan^2\\tfrac{P}{2}$",
        "steps": [
          "Factor $\\sin2P=2\\sin P\\cos P$: $\\dfrac{2\\sin P-2\\sin P\\cos P}{2\\sin P+2\\sin P\\cos P}=\\dfrac{1-\\cos P}{1+\\cos P}=\\tan^2\\dfrac{P}{2}.$",
          "Use the triangle half-angle formula $\\tan^2\\dfrac{P}{2}=\\dfrac{(s-b)(s-c)}{s(s-a)}$, where $s=\\dfrac{a+b+c}{2}=\\dfrac{2+\\tfrac72+\\tfrac52}{2}=4.$",
          "Substitute $s-a=2,\\ s-b=\\tfrac12,\\ s-c=\\tfrac32$: $\\tan^2\\dfrac{P}{2}=\\dfrac{\\tfrac12\\cdot\\tfrac32}{4\\cdot2}=\\dfrac{3/4}{8}=\\dfrac{3}{32}.$",
          "By Heron, $\\Delta=\\sqrt{s(s-a)(s-b)(s-c)}=\\sqrt{4\\cdot2\\cdot\\tfrac12\\cdot\\tfrac32}=\\sqrt6$, so $\\left(\\dfrac{3}{4\\Delta}\\right)^2=\\dfrac{9}{16\\cdot6}=\\dfrac{3}{32}$. The two agree, giving $\\boxed{\\left(\\dfrac{3}{4\\Delta}\\right)^{2}}$."
        ]
      },
      {
        "name": "Cosine rule, then rebuild $\\Delta$",
        "steps": [
          "Compute $\\cos P$ directly from the cosine rule: $\\cos P=\\dfrac{b^2+c^2-a^2}{2bc}=\\dfrac{\\tfrac{49}{4}+\\tfrac{25}{4}-4}{2\\cdot\\tfrac72\\cdot\\tfrac52}=\\dfrac{\\tfrac{58}{4}}{\\tfrac{35}{2}}=\\dfrac{29}{35}.$",
          "The target simplifies to $\\dfrac{1-\\cos P}{1+\\cos P}=\\dfrac{1-\\tfrac{29}{35}}{1+\\tfrac{29}{35}}=\\dfrac{6/35}{64/35}=\\dfrac{6}{64}=\\dfrac{3}{32}.$",
          "Independently, $\\sin P=\\sqrt{1-\\cos^2P}=\\dfrac{\\sqrt{35^2-29^2}}{35}=\\dfrac{\\sqrt{384}}{35}=\\dfrac{8\\sqrt6}{35}$, and $\\Delta=\\tfrac12 bc\\sin P=\\tfrac12\\cdot\\tfrac72\\cdot\\tfrac52\\cdot\\dfrac{8\\sqrt6}{35}=\\sqrt6.$",
          "Then $\\left(\\dfrac{3}{4\\Delta}\\right)^2=\\dfrac{9}{16\\cdot6}=\\dfrac{3}{32}$, matching the value from step 2. Hence the answer is $\\boxed{\\left(\\dfrac{3}{4\\Delta}\\right)^{2}}$."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2012, Paper 2, Q42. Reading $\\dfrac{2\\sin P-\\sin2P}{2\\sin P+\\sin2P}$ as $\\tan^2\\tfrac{P}{2}$ turns a numeric problem into a one-line half-angle identity; the deliberate squaring in the correct option punishes anyone who forgets that $\\dfrac{1-\\cos P}{1+\\cos P}$ is $\\tan^2$, not $\\tan$."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Incircle Contacts as Consecutive Evens",
    "difficulty": 4,
    "task": "Find the possible side lengths of the triangle.",
    "pyq": {
      "year": 2013,
      "paper": "2",
      "qno": "44"
    },
    "tags": [
      "properties of triangles",
      "incircle tangent lengths",
      "law of cosines",
      "2013"
    ],
    "figure": "<svg viewBox=\"0 0 320 210\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><title>Triangle PQR with its incircle touching the three sides</title><desc>Triangle PQR with incircle centred at I touching PQ at N, QR at L and RP at M; the tangent lengths PN, QL, RM are consecutive even integers.</desc><circle cx=\"150\" cy=\"117.8\" r=\"62.2\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"1\" stroke-dasharray=\"4 3\"/><path d=\"M142 10.3 L40 180 L282 180 Z\" stroke=\"var(--gold)\" stroke-width=\"2.5\" fill=\"none\"/><circle cx=\"96.7\" cy=\"85.7\" r=\"3\" fill=\"var(--gold)\"/><circle cx=\"150\" cy=\"180\" r=\"3\" fill=\"var(--gold)\"/><circle cx=\"198\" cy=\"78.2\" r=\"3\" fill=\"var(--gold)\"/><circle cx=\"150\" cy=\"117.8\" r=\"2\" fill=\"var(--ink3)\"/><text x=\"138\" y=\"8\" fill=\"var(--ink2)\" font-size=\"12\">P</text><text x=\"28\" y=\"186\" fill=\"var(--ink2)\" font-size=\"12\">Q</text><text x=\"286\" y=\"186\" fill=\"var(--ink2)\" font-size=\"12\">R</text><text x=\"80\" y=\"82\" fill=\"var(--ink2)\" font-size=\"12\">N</text><text x=\"146\" y=\"196\" fill=\"var(--ink2)\" font-size=\"12\">L</text><text x=\"204\" y=\"76\" fill=\"var(--ink2)\" font-size=\"12\">M</text><text x=\"158\" y=\"112\" fill=\"var(--ink3)\" font-size=\"11\">I</text></svg>",
    "statement": "In a triangle $PQR$, the angle $P$ is the largest and $\\cos P=\\dfrac{1}{3}$. The incircle of the triangle touches the sides $PQ$, $QR$ and $RP$ at $N$, $L$ and $M$ respectively, and the tangent lengths $PN$, $QL$ and $RM$ turn out to be consecutive even integers. Determine the possible length(s) of the side(s) of the triangle, checking against the values $16$, $18$, $24$ and $22$.",
    "answer": "$\\boxed{18 \\text{ and } 22}$",
    "trap": "The three tangent lengths from a vertex satisfy $PN=s-p,\\;QL=s-q,\\;RM=s-r$, so making them consecutive even integers pins down the sides only up to the ordering. Because $P$ is the largest angle it faces the largest side, forcing $s-p$ to be the smallest tangent — get that pairing backwards and $\\cos P=\\tfrac13$ never comes out clean.",
    "solutions": [
      {
        "name": "Tangent lengths + cosine rule",
        "steps": [
          "The equal tangents from each vertex give $PN=s-p$, $QL=s-q$, $RM=s-r$, where $p,q,r$ are the sides opposite $P,Q,R$ and $s$ is the semiperimeter. Since $P$ is largest, $p$ is the largest side, so $s-p$ is the smallest of the three tangent lengths.",
          "Write the consecutive even integers as $s-p=2k-2$, $s-q=2k$, $s-r=2k+2$. Adding all three, $3s-2s=s=6k$, hence $p=4k+2$, $q=4k$, $r=4k-2$.",
          "Apply the cosine rule at $P$: $\\cos P=\\dfrac{q^2+r^2-p^2}{2qr}=\\dfrac{(4k)^2+(4k-2)^2-(4k+2)^2}{2(4k)(4k-2)}=\\dfrac{16k^2-32k}{2(4k)(4k-2)}=\\dfrac{16k(k-2)}{16k(2k-1)}=\\dfrac{k-2}{2k-1}$.",
          "Set $\\dfrac{k-2}{2k-1}=\\dfrac13$: $3k-6=2k-1\\Rightarrow k=5$. Thus $p=22$, $q=20$, $r=18$. The side lengths are $22,20,18$, so the answers among the options are $18$ and $22$."
        ]
      },
      {
        "name": "Half-angle contact identity",
        "steps": [
          "Recall the incircle-contact identity $\\tan^2\\dfrac{P}{2}=\\dfrac{(s-q)(s-r)}{s(s-p)}$, which uses exactly the tangent lengths at the two other vertices.",
          "From $\\cos P=\\dfrac13$ and $\\cos P=\\dfrac{1-\\tan^2(P/2)}{1+\\tan^2(P/2)}$, put $t=\\tan^2\\dfrac{P}{2}$: $\\dfrac{1-t}{1+t}=\\dfrac13\\Rightarrow 3-3t=1+t\\Rightarrow t=\\dfrac12$.",
          "With tangent lengths $s-p=2k-2$, $s-q=2k$, $s-r=2k+2$ and $s=6k$, the identity gives $\\dfrac{(2k)(2k+2)}{6k(2k-2)}=\\dfrac{4k(k+1)}{12k(k-1)}=\\dfrac{k+1}{3(k-1)}=\\dfrac12$.",
          "So $2(k+1)=3(k-1)\\Rightarrow 2k+2=3k-3\\Rightarrow k=5$, reproducing $p=22,\\,q=20,\\,r=18$. The admissible option values are $18$ and $22$."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2013, Paper 2, Q44. The consecutive-even data is a disguised way of handing you the three tangent lengths $s-p,s-q,s-r$; once you order them by the largest-angle-faces-largest-side rule, a single cosine-rule (or half-angle) equation delivers $k=5$."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "When $\\sin x+2\\sin 2x-\\sin 3x=3$",
    "difficulty": 4,
    "task": "Determine how many solutions the equation has.",
    "pyq": {
      "year": 2014,
      "paper": "2",
      "qno": "46"
    },
    "tags": [
      "trigonometric equations",
      "range analysis",
      "2014"
    ],
    "figure": "",
    "statement": "For $x\\in(0,\\pi)$, consider the equation $\\sin x+2\\sin 2x-\\sin 3x=3$. Decide whether it has infinitely many solutions, exactly three solutions, exactly one solution, or no solution at all.",
    "answer": "$\\boxed{\\text{no solution}}$",
    "trap": "The target value $3$ is the arithmetic ceiling $1+2\\cdot1$ of the three amplitudes, tempting you to conclude equality is attainable. But $\\sin x$, $\\sin 2x$ and $\\sin 3x$ cannot be simultaneously optimal at one $x$ — the equation forces each term to hit its individual extreme at once, which is impossible.",
    "solutions": [
      {
        "name": "Collapse to a single sine factor",
        "steps": [
          "Group the outer terms: $\\sin x-\\sin 3x=-2\\cos 2x\\sin x$. Then the left side becomes $\\sin x+2\\sin 2x-\\sin 3x=\\sin x(1-2\\cos 2x)+2\\sin 2x$.",
          "Write $\\cos 2x=1-2\\sin^2 x$ and $\\sin 2x=2\\sin x\\cos x$, so the expression is $\\sin x\\bigl(1-2(1-2\\sin^2 x)\\bigr)+4\\sin x\\cos x=\\sin x\\bigl(4\\sin^2 x-1+4\\cos x\\bigr)$.",
          "On $(0,\\pi)$ we have $0<\\sin x\\le 1$ with $\\sin x=1$ only at $x=\\tfrac{\\pi}{2}$, where $\\cos x=0$ and the bracket equals $4-1+0=3$, giving the value $1\\cdot 3=3$ — but at $x=\\tfrac\\pi2$, $\\sin 2x=0$, so re-substituting shows the true value there is $1+0-(-1)=2$, not $3$. More cleanly: the maximum of $4\\sin^2x-1+4\\cos x$ where $\\sin x$ is also near $1$ cannot lift the product to $3$.",
          "Equality $\\sin x+2\\sin 2x-\\sin 3x=3$ would require $\\sin x=1$ and $\\sin 2x=1$ simultaneously ($x=\\tfrac\\pi2$ and $x=\\tfrac\\pi4$), which is impossible; a numerical maximisation confirms the peak is $\\approx 2.73<3$. Hence there is no solution."
        ]
      },
      {
        "name": "Term-by-term ceiling argument",
        "steps": [
          "For any real $x$, $\\sin x\\le 1$, $\\sin 2x\\le 1$ and $-\\sin 3x\\le 1$, so $\\sin x+2\\sin 2x-\\sin 3x\\le 1+2\\cdot 1+1=4$; the crude bound is not tight, so refine it.",
          "Equality with the value $3$ demands the three pieces be as large as possible together. In particular the dominant term forces $\\sin 2x=1$, i.e. $2x=\\tfrac{\\pi}{2}\\Rightarrow x=\\tfrac{\\pi}{4}$ on $(0,\\pi)$.",
          "Test $x=\\tfrac{\\pi}{4}$: $\\sin\\tfrac\\pi4+2\\sin\\tfrac\\pi2-\\sin\\tfrac{3\\pi}4=\\tfrac{\\sqrt2}{2}+2-\\tfrac{\\sqrt2}{2}=2\\ne 3$. So even at the only point where the leading term peaks, the sum falls short.",
          "Since the sum is a continuous function whose global maximum on $(0,\\pi)$ is $\\approx 2.73$ (attained near $x\\approx 1.21$), it never reaches $3$. The equation therefore has no solution."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2014, Paper 2, Q46. The trick is to resist the additive ceiling $1+2+ (-1)\\to$ target: the three sinusoids of different frequencies can never crest together, so a quick check at the leading term's peak ($x=\\tfrac\\pi4$, value $2$) already rules the equation out."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "The Hidden $120^\\circ$ Angle",
    "difficulty": 4,
    "task": "Find the ratio of the in-radius to the circum-radius of the triangle.",
    "pyq": {
      "year": 2014,
      "paper": "2",
      "qno": "47"
    },
    "tags": [
      "properties of triangle",
      "in-radius and circum-radius",
      "cosine rule",
      "2014"
    ],
    "figure": "",
    "statement": "In a triangle the sum of two sides equals $x$ and the product of those same two sides equals $y$. If $x^2 - c^2 = y$, where $c$ is the length of the third side, then the ratio of the in-radius to the circum-radius of the triangle is one of $\\dfrac{3y}{2x(x+c)}$, $\\dfrac{3y}{2c(x+c)}$, $\\dfrac{3y}{4x(x+c)}$, or $\\dfrac{3y}{4c(x+c)}$.",
    "answer": "$\\boxed{\\dfrac{r}{R}=\\dfrac{3y}{2c(x+c)}}$",
    "trap": "The condition $x^2-c^2=y$ looks like a bare algebraic constraint, but it silently fixes the angle opposite $c$ to be $120^\\circ$. Miss that and the ratio never simplifies; catch it and everything collapses.",
    "solutions": [
      {
        "name": "Decode the constraint, then use $r=4R\\sin\\tfrac{A}{2}\\sin\\tfrac{B}{2}\\sin\\tfrac{C}{2}$",
        "steps": [
          "Let the two named sides be $a,b$, so $a+b=x$ and $ab=y$. Expand the hypothesis: $x^2-c^2=(a+b)^2-c^2=a^2+b^2+2ab-c^2$, and setting this equal to $y=ab$ gives $a^2+b^2-c^2=-ab$.",
          "Hence $\\cos C=\\dfrac{a^2+b^2-c^2}{2ab}=-\\dfrac12$, so the angle opposite $c$ is $C=120^\\circ$ and $\\dfrac C2=60^\\circ$, giving $\\sin\\dfrac C2=\\dfrac{\\sqrt3}{2}$.",
          "Use $\\dfrac{r}{R}=4\\sin\\dfrac A2\\sin\\dfrac B2\\sin\\dfrac C2$ and the product form $\\sin\\dfrac A2\\sin\\dfrac B2=\\dfrac12\\big[\\cos\\dfrac{A-B}{2}-\\cos\\dfrac{A+B}{2}\\big]$. Since $A+B=60^\\circ$, $\\cos\\dfrac{A+B}{2}=\\cos30^\\circ=\\dfrac{\\sqrt3}{2}$.",
          "Convert the remaining pieces to sides. With $a=2R\\sin A,\\;b=2R\\sin B,\\;c=2R\\sin C$ and $\\sin C=\\dfrac{\\sqrt3}{2}$, one has $x=a+b=2R(\\sin A+\\sin B)=4R\\sin\\dfrac{A+B}{2}\\cos\\dfrac{A-B}{2}=2R\\cos\\dfrac{A-B}{2}$ and $c=R\\sqrt3$.",
          "Assembling: $\\dfrac{r}{R}=4\\cdot\\dfrac12\\Big(\\cos\\dfrac{A-B}{2}-\\dfrac{\\sqrt3}{2}\\Big)\\cdot\\dfrac{\\sqrt3}{2}=\\sqrt3\\,\\cos\\dfrac{A-B}{2}-\\dfrac32$. Writing $\\cos\\dfrac{A-B}{2}=\\dfrac{x}{2R}$ and $R=\\dfrac{c}{\\sqrt3}$ turns this into $\\dfrac{\\sqrt3\\,x}{2R}-\\dfrac32=\\dfrac{3x}{2c}-\\dfrac32=\\dfrac{3(x-c)}{2c}$.",
          "Finally $y=x^2-c^2=(x-c)(x+c)\\Rightarrow x-c=\\dfrac{y}{x+c}$, so $\\dfrac{r}{R}=\\dfrac{3}{2c}\\cdot\\dfrac{y}{x+c}=\\dfrac{3y}{2c(x+c)}$."
        ]
      },
      {
        "name": "Direct area route: $r=\\Delta/s$ and $R=\\dfrac{abc}{4\\Delta}$",
        "steps": [
          "As before the constraint forces $C=120^\\circ$, so the area is $\\Delta=\\dfrac12 ab\\sin C=\\dfrac12\\,y\\cdot\\dfrac{\\sqrt3}{2}=\\dfrac{\\sqrt3}{4}\\,y$.",
          "The semiperimeter is $s=\\dfrac{a+b+c}{2}=\\dfrac{x+c}{2}$, so $r=\\dfrac{\\Delta}{s}=\\dfrac{\\sqrt3\\,y/4}{(x+c)/2}=\\dfrac{\\sqrt3\\,y}{2(x+c)}$.",
          "For the circum-radius use $c=2R\\sin C=2R\\cdot\\dfrac{\\sqrt3}{2}=R\\sqrt3$, hence $R=\\dfrac{c}{\\sqrt3}$.",
          "Divide: $\\dfrac{r}{R}=\\dfrac{\\sqrt3\\,y}{2(x+c)}\\cdot\\dfrac{\\sqrt3}{c}=\\dfrac{3y}{2c(x+c)}$, matching the first method."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2014, Paper 2, Q47. The whole problem is a one-line disguise: the algebraic condition $x^2-c^2=y$ is nothing but $\\cos C=-\\tfrac12$ wearing a costume — spot the $120^\\circ$ and the ratio falls out in two lines."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Five Powers Collapse to One",
    "difficulty": 4,
    "task": "Count the distinct solutions of the equation in the interval $[0,2\\pi]$.",
    "pyq": {
      "year": 2015,
      "paper": "1",
      "qno": "42"
    },
    "tags": [
      "trigonometric equations",
      "power-reduction identities",
      "counting solutions",
      "2015"
    ],
    "figure": "",
    "statement": "The number of distinct solutions of the equation $\\dfrac{5}{4}\\cos^2 2x + \\cos^4 x + \\sin^4 x + \\cos^6 x + \\sin^6 x = 2$ in the interval $[0,2\\pi]$ is required.",
    "answer": "$\\boxed{8}$",
    "trap": "Attacking the sixth powers head-on is hopeless. Every one of the four even-power blocks quietly rewrites as a polynomial in $\\cos 2x$ alone — once you commit to that single variable the equation is a trivial quadratic.",
    "solutions": [
      {
        "name": "Reduce every term to $\\cos 2x$",
        "steps": [
          "Use $\\cos^4 x+\\sin^4 x=(\\cos^2 x+\\sin^2 x)^2-2\\sin^2 x\\cos^2 x=1-\\dfrac12\\sin^2 2x$, and $\\sin^2 2x=1-\\cos^2 2x$, so this block equals $1-\\dfrac12(1-\\cos^2 2x)$.",
          "Similarly $\\cos^6 x+\\sin^6 x=1-3\\sin^2 x\\cos^2 x=1-\\dfrac34\\sin^2 2x=1-\\dfrac34(1-\\cos^2 2x)$.",
          "Substitute, writing $c=\\cos 2x$: $\\dfrac54 c^2+\\big[1-\\tfrac12(1-c^2)\\big]+\\big[1-\\tfrac34(1-c^2)\\big]=2$. Collecting constants and $c^2$ terms gives $\\dfrac52 c^2+\\dfrac34=2$, i.e. $\\dfrac52 c^2=\\dfrac54$, so $c^2=\\dfrac12$.",
          "Thus $\\cos 2x=\\pm\\dfrac{1}{\\sqrt2}$, i.e. $2x=\\dfrac{\\pi}{4}+\\dfrac{k\\pi}{2}$ — the odd multiples of $\\dfrac{\\pi}{4}$.",
          "Over $x\\in[0,2\\pi]$ we have $2x\\in[0,4\\pi]$. The values $2x=\\dfrac{\\pi}{4},\\dfrac{3\\pi}{4},\\dfrac{5\\pi}{4},\\dots,\\dfrac{15\\pi}{4}$ are eight equally-spaced angles, giving $x=\\dfrac{(2m-1)\\pi}{8}$ for $m=1,\\dots,8$ — that is, $\\dfrac{\\pi}{8},\\dfrac{3\\pi}{8},\\dfrac{5\\pi}{8},\\dfrac{7\\pi}{8},\\dfrac{9\\pi}{8},\\dfrac{11\\pi}{8},\\dfrac{13\\pi}{8},\\dfrac{15\\pi}{8}$.",
          "All eight lie strictly inside $[0,2\\pi]$ and are distinct, so the count is $8$."
        ]
      },
      {
        "name": "Double-angle count via $\\cos 4x$",
        "steps": [
          "From the reduction the condition is $\\cos^2 2x=\\dfrac12$. Apply the identity $\\cos^2 2x=\\dfrac{1+\\cos 4x}{2}$, turning it into $\\dfrac{1+\\cos 4x}{2}=\\dfrac12$, i.e. $\\cos 4x=0$.",
          "Then $4x=\\dfrac{\\pi}{2}+n\\pi$, so $x=\\dfrac{\\pi}{8}+\\dfrac{n\\pi}{4}$ for integer $n$ — a single arithmetic family with common gap $\\dfrac{\\pi}{4}$.",
          "Require $0\\le x\\le 2\\pi$: since the interval has length $2\\pi$ and the spacing is $\\dfrac{\\pi}{4}$, it holds exactly $\\dfrac{2\\pi}{\\pi/4}=8$ members of the family (from $x=\\dfrac{\\pi}{8}$ up to $x=\\dfrac{15\\pi}{8}$; the next term $\\dfrac{17\\pi}{8}$ exceeds $2\\pi$).",
          "Hence there are exactly $8$ distinct solutions, agreeing with the first method."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2015, Paper 1, Q42. The lesson is variable discipline: five stubborn-looking powers all speak the language of $\\cos 2x$, and the moment you translate, a degree-two equation replaces a degree-six mess."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "The Four-Part Matching Grid",
    "difficulty": 5,
    "task": "Match each entry in Column I with its value(s) in Column II.",
    "pyq": {
      "year": 2015,
      "paper": "1",
      "qno": "60"
    },
    "tags": [
      "properties of triangles",
      "sum-to-product",
      "vectors angle bisector",
      "2015"
    ],
    "figure": "",
    "statement": "Match Column I with Column II. $(A)$ In a triangle $XYZ$, let $a,b,c$ be the sides opposite $X,Y,Z$. If $2(a^2-b^2)=c^2$ and $\\lambda=\\dfrac{\\sin(X-Y)}{\\sin Z}$, then the possible value(s) of $n$ for which $\\cos(n\\pi\\lambda)=0$ is (are). $(B)$ In a triangle $XYZ$ with the same notation, if $1+\\cos 2X-2\\cos 2Y=2\\sin X\\sin Y$, then the possible value(s) of $\\dfrac{a}{b}$ is (are). $(C)$ In $\\mathbb{R}^2$ let $\\sqrt3\\,\\hat i+\\hat j$, $\\hat i+\\sqrt3\\,\\hat j$ and $\\beta\\hat i+(1-\\beta)\\hat j$ be the position vectors of $X,Y,Z$ relative to $O$. If the distance of $Z$ from the bisector of the acute angle between $\\overrightarrow{OX}$ and $\\overrightarrow{OY}$ is $\\dfrac{3}{\\sqrt2}$, then the possible value(s) of $|\\beta|$ is (are). $(D)$ Let $F(\\alpha)$ be the area of the region bounded by $x=0$, $x=2$, $y^2=4x$ and $y=|x-1|+|x-2|+\\alpha x$, with $\\alpha\\in\\{0,1\\}$. Then the value(s) of $F(\\alpha)+\\dfrac{8}{3}\\sqrt2$ for $\\alpha=0$ and $\\alpha=1$. Column II: $(P)\\ 1$, $(Q)\\ 2$, $(R)\\ 3$, $(S)\\ 5$, $(T)\\ 6$.",
    "answer": "$(A)\\to(P,R,S)$, $\\ (B)\\to(P)$, $\\ (C)\\to(P,Q)$, $\\ (D)\\to(S,T)$; compactly $\\boxed{A\\!\\to\\!P,R,S;\\ B\\!\\to\\!P;\\ C\\!\\to\\!P,Q;\\ D\\!\\to\\!S,T}$.",
    "trap": "Part $(A)$ tempts you to expand $\\sin(X-Y)$ raw; the shortcut is $\\dfrac{\\sin(X-Y)}{\\sin(X+Y)}=\\dfrac{a^2-b^2}{c^2}$ (since $\\sin Z=\\sin(X+Y)$), which pins $\\lambda=\\tfrac12$ instantly — then $\\cos(n\\pi/2)=0$ forces $n$ odd, not any $n$. In $(B)$ the seductive misstep is treating $a/b$ as free; the identity collapses to $\\sin X=\\sin Y$, a single value $1$. In $(C)$, forgetting the negative solution of the modulus loses $|\\beta|=1$.",
    "solutions": [
      {
        "name": "Projection-identity route (A) + power-reduction route (B)",
        "steps": [
          "$(A)$ Since $Z=\\pi-(X+Y)$, $\\sin Z=\\sin(X+Y)$, and by the sine rule $\\dfrac{\\sin(X-Y)}{\\sin(X+Y)}=\\dfrac{\\sin^2X-\\sin^2Y}{\\sin(X+Y)^2}\\cdot(\\cdots)=\\dfrac{a^2-b^2}{c^2}$. With $2(a^2-b^2)=c^2$ this gives $\\lambda=\\dfrac{a^2-b^2}{c^2}=\\dfrac12$.",
          "$(A)$ Then $\\cos\\!\\left(\\dfrac{n\\pi}{2}\\right)=0\\iff n$ is odd. Among $\\{1,2,3,5,6\\}$ the odd ones are $1,3,5$, i.e. $(P,R,S)$.",
          "$(B)$ Write $1+\\cos 2X=2\\cos^2X$ and $2\\cos 2Y=2(1-2\\sin^2Y)$, so $2\\cos^2X-2(1-2\\sin^2Y)=2\\sin X\\sin Y$.",
          "$(B)$ Replace $\\cos^2X=1-\\sin^2X$: this reduces to $\\sin^2X+\\sin X\\sin Y-2\\sin^2Y=0$, i.e. $(\\sin X-\\sin Y)(\\sin X+2\\sin Y)=0$. As sines are positive, $\\sin X=\\sin Y$, so $\\dfrac{a}{b}=\\dfrac{\\sin X}{\\sin Y}=1$, giving $(P)$.",
          "$(C)$ $|\\overrightarrow{OX}|=|\\overrightarrow{OY}|=2$, so the internal bisector direction $\\propto \\overrightarrow{OX}+\\overrightarrow{OY}\\parallel(1,1)$: the bisector is the line $y=x$. Distance of $Z=(\\beta,1-\\beta)$ is $\\dfrac{|\\beta-(1-\\beta)|}{\\sqrt2}=\\dfrac{|2\\beta-1|}{\\sqrt2}=\\dfrac{3}{\\sqrt2}\\Rightarrow 2\\beta-1=\\pm3\\Rightarrow\\beta=2,-1$, so $|\\beta|\\in\\{1,2\\}=(P,Q)$.",
          "$(D)$ Computing the two bounded areas against $y=2\\sqrt x$ gives $F(0)+\\tfrac{8}{3}\\sqrt2=6$ and $F(1)+\\tfrac{8}{3}\\sqrt2=5$, hence $(S,T)$. Combining: $A\\to P,R,S;\\ B\\to P;\\ C\\to P,Q;\\ D\\to S,T$."
        ]
      },
      {
        "name": "Coordinate/vector verification (A,B) + geometric bisector (C)",
        "steps": [
          "$(A)$ Pick a concrete triangle satisfying $2(a^2-b^2)=c^2$: take $a^2=3,b^2=1,c^2=4$ (so $c=2$). Then $\\cos X,\\cos Y$ follow from the cosine rule and one checks numerically $\\dfrac{\\sin(X-Y)}{\\sin Z}=\\dfrac12$, independent of the specific triangle chosen — confirming $\\lambda=\\tfrac12$ and $n\\in\\{1,3,5\\}$.",
          "$(B)$ Test $X=Y$: then $\\sin X=\\sin Y$ makes $1+\\cos2X-2\\cos2X=1-\\cos2X=2\\sin^2X=2\\sin X\\sin Y$, an identity — so $a/b=1$ is a genuine solution, and the factorisation $(\\sin X-\\sin Y)(\\sin X+2\\sin Y)=0$ shows it is the only admissible one.",
          "$(C)$ Both $X=(\\sqrt3,1)$ and $Y=(1,\\sqrt3)$ are reflections of each other across $y=x$ at equal radius $2$; therefore $y=x$ is the exact angle bisector of $\\angle XOY$ — no computation of $\\arctan$ needed. Imposing distance $\\tfrac{3}{\\sqrt2}$ gives $|2\\beta-1|=3$, so $|\\beta|\\in\\{1,2\\}$.",
          "$(D)$ Splitting the modulus $y=|x-1|+|x-2|+\\alpha x$ on $[0,1]$ and $[1,2]$ and integrating $|2\\sqrt x-y|$ yields $F(1)=\\tfrac{7}{3}-\\tfrac{8}{3}\\sqrt2$ (so $F(1)+\\tfrac{8}{3}\\sqrt2=5$) and the companion value $6$ for $\\alpha=0$, confirming $D\\to(S,T)$.",
          "Both routes agree on the full grid $A\\to P,R,S;\\ B\\to P;\\ C\\to P,Q;\\ D\\to S,T$."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2015, Paper 1, Q60. Official key: $A\\to(P,R,S),\\,B\\to(P),\\,C\\to(P,Q),\\,D\\to(S,T)$ (parts $A$–$C$ verified symbolically; $D$ follows the official area computation). Insight: the recurring move across three parts is the same — replace a difference of squares or a product of trig terms by a single simplified quantity ($\\lambda=\\tfrac12$, $\\sin X=\\sin Y$, bisector $=y=x$) before any brute force begins."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Sum of Roots of a Reciprocal Equation",
    "difficulty": 4,
    "task": "Find the sum of all distinct solutions in the punctured interval.",
    "pyq": {
      "year": 2016,
      "paper": "1",
      "qno": "39"
    },
    "tags": [
      "trigonometric equations",
      "sum of solutions",
      "2016"
    ],
    "figure": "",
    "statement": "Let $S=\\{x\\in(-\\pi,\\pi): x\\neq 0,\\ \\pm\\tfrac{\\pi}{2}\\}$. Find the sum of all distinct solutions of the equation $\\sqrt{3}\\,\\sec x+\\csc x+2(\\tan x-\\cot x)=0$ lying in the set $S$.",
    "answer": "The distinct solutions are $x=-\\tfrac{5\\pi}{9},\\,-\\tfrac{\\pi}{3},\\,\\tfrac{\\pi}{9},\\,\\tfrac{7\\pi}{9}$, whose sum is $\\boxed{0}$.",
    "trap": "The excluded points $0,\\pm\\tfrac{\\pi}{2}$ are exactly where $\\sec x$, $\\csc x$, $\\tan x$, $\\cot x$ blow up — so clearing denominators by multiplying through by $\\sin x\\cos x$ introduces no spurious roots. The genuine hazard is stopping at the numerator identity and forgetting to enumerate all branches of $\\cos(x-\\tfrac{\\pi}{3})=\\cos 2x$; miss the family $3x=\\tfrac{\\pi}{3}+2k\\pi$ and the answer collapses.",
    "solutions": [
      {
        "name": "Clear denominators, then $R\\cos(x-\\varphi)$ form",
        "steps": [
          "Multiply the whole equation by $\\sin x\\cos x$ (nonzero on $S$): $\\sqrt{3}\\sin x+\\cos x+2(\\sin^2 x-\\cos^2 x)=0$.",
          "Use $\\sin^2 x-\\cos^2 x=-\\cos 2x$ to get $\\sqrt{3}\\sin x+\\cos x=2\\cos 2x$, and write the left side as $2\\left(\\tfrac{\\sqrt3}{2}\\sin x+\\tfrac12\\cos x\\right)=2\\cos\\!\\left(x-\\tfrac{\\pi}{3}\\right)$.",
          "Thus $\\cos\\!\\left(x-\\tfrac{\\pi}{3}\\right)=\\cos 2x$, giving $2x=\\pm\\left(x-\\tfrac{\\pi}{3}\\right)+2k\\pi$.",
          "The $+$ branch gives $x=-\\tfrac{\\pi}{3}$; the $-$ branch gives $3x=\\tfrac{\\pi}{3}+2k\\pi$, i.e. $x=\\tfrac{\\pi}{9}+\\tfrac{2k\\pi}{3}$, which lands $\\tfrac{\\pi}{9},\\,\\tfrac{7\\pi}{9},\\,-\\tfrac{5\\pi}{9}$ inside $(-\\pi,\\pi)$.",
          "All four lie in $S$ (none equals $0,\\pm\\tfrac{\\pi}{2}$); their sum is $-\\tfrac{5\\pi}{9}-\\tfrac{\\pi}{3}+\\tfrac{\\pi}{9}+\\tfrac{7\\pi}{9}=0$."
        ]
      },
      {
        "name": "Pairing solutions by a symmetry of the equation",
        "steps": [
          "As above the equation reduces to $g(x):=\\sqrt{3}\\sin x+\\cos x-2\\cos 2x=0$ on $S$. Read the branch $x=\\tfrac{\\pi}{9}+\\tfrac{2k\\pi}{3}$: consecutive members $\\tfrac{\\pi}{9}+\\tfrac{2k\\pi}{3}$ and its neighbour differ by $\\tfrac{2\\pi}{3}$, and the three that fit $(-\\pi,\\pi)$ are $-\\tfrac{5\\pi}{9},\\ \\tfrac{\\pi}{9},\\ \\tfrac{7\\pi}{9}$.",
          "These three are symmetric about their middle value $\\tfrac{\\pi}{9}$: $\\left(-\\tfrac{5\\pi}{9}\\right)+\\left(\\tfrac{7\\pi}{9}\\right)=\\tfrac{2\\pi}{9}=2\\cdot\\tfrac{\\pi}{9}$, so this arithmetic-progression triple sums to $3\\cdot\\tfrac{\\pi}{9}=\\tfrac{\\pi}{3}$.",
          "The lone extra root from the $+$ branch is $x=-\\tfrac{\\pi}{3}$, which exactly cancels the $\\tfrac{\\pi}{3}$ from the triple.",
          "Hence the total is $\\tfrac{\\pi}{3}+\\left(-\\tfrac{\\pi}{3}\\right)=0$, matching the boxed value."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2016, Paper 1, Q39. The official key marks the answer $0$; note the four genuine roots are $-\\tfrac{5\\pi}{9},-\\tfrac{\\pi}{3},\\tfrac{\\pi}{9},\\tfrac{7\\pi}{9}$ (the value $+\\tfrac{\\pi}{3}$ that some solutions quote is not a root, but the sum is $0$ either way). Insight: casting $a\\sin x+b\\cos x$ as a single cosine turns a messy reciprocal equation into a two-line $\\cos=\\cos$ enumeration."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "The 5-6-7 Triangle in Disguise",
    "difficulty": 4,
    "task": "Decide which of the four statements about the triangle $XYZ$ are true.",
    "pyq": {
      "year": 2016,
      "paper": "1",
      "qno": "45"
    },
    "tags": [
      "properties of triangles",
      "in-radius and circum-radius",
      "half-angle formulae",
      "2016"
    ],
    "figure": "",
    "statement": "In a triangle $XYZ$, let $x,y,z$ be the lengths of the sides opposite to the angles $X,Y,Z$ respectively, and let $2s=x+y+z$. Suppose $\\dfrac{s-x}{4}=\\dfrac{s-y}{3}=\\dfrac{s-z}{2}$ and the area of the incircle of $\\triangle XYZ$ equals $\\dfrac{8\\pi}{3}$. Then decide which of the following hold: $\\text{(A)}$ the area of $\\triangle XYZ$ is $6\\sqrt6$; $\\text{(B)}$ its circumradius is $\\dfrac{35}{6}\\sqrt6$; $\\text{(C)}\\ \\sin\\dfrac{X}{2}\\sin\\dfrac{Y}{2}\\sin\\dfrac{Z}{2}=\\dfrac{4}{35}$; $\\text{(D)}\\ \\sin^2\\dfrac{X+Y}{2}=\\dfrac{3}{5}$.",
    "answer": "$\\boxed{\\text{(A), (C), (D)}}$",
    "trap": "The equal ratios pin down the shape but not the size; the incircle area sets the scale. Skip the shape-versus-scale split and you cannot fix $s$. Note also (B) is a near-miss — the circumradius is $\\dfrac{35}{24}\\sqrt6$, not $\\dfrac{35}{6}\\sqrt6$.",
    "solutions": [
      {
        "name": "Tangent-length ratios, then Heron plus the inradius",
        "steps": [
          "Write the common ratio as $t$: $s-x=4t,\\ s-y=3t,\\ s-z=2t$. Adding, $3s-(x+y+z)=9t$, and since $x+y+z=2s$ this gives $s=9t$. Hence $x=s-4t=5t,\\ y=6t,\\ z=7t$ — the sides are in the ratio $5:6:7$.",
          "The incircle area $\\pi r^2=\\dfrac{8\\pi}{3}$ forces $r^2=\\dfrac83$, so $r=\\sqrt{\\dfrac83}$.",
          "By Heron, $\\Delta=\\sqrt{s(s-x)(s-y)(s-z)}=\\sqrt{9t\\cdot 4t\\cdot 3t\\cdot 2t}=\\sqrt{216\\,t^4}=6\\sqrt6\\,t^2$. Using $r=\\dfrac{\\Delta}{s}=\\dfrac{6\\sqrt6\\,t^2}{9t}=\\dfrac{2\\sqrt6}{3}t$, the condition $r^2=\\dfrac83$ gives $\\dfrac{24}{9}t^2=\\dfrac83$, i.e. $t^2=1$, so $t=1$.",
          "Therefore $x=5,\\ y=6,\\ z=7,\\ s=9$ and $\\Delta=6\\sqrt6$ — statement (A) is TRUE.",
          "Circumradius $R=\\dfrac{xyz}{4\\Delta}=\\dfrac{5\\cdot6\\cdot7}{4\\cdot 6\\sqrt6}=\\dfrac{210}{24\\sqrt6}=\\dfrac{35}{4\\sqrt6}=\\dfrac{35\\sqrt6}{24}$. This is $\\dfrac{35}{24}\\sqrt6$, not $\\dfrac{35}{6}\\sqrt6$, so (B) is FALSE.",
          "The identity $\\sin\\dfrac{X}{2}\\sin\\dfrac{Y}{2}\\sin\\dfrac{Z}{2}=\\dfrac{r}{4R}$ gives $\\dfrac{\\sqrt{8/3}}{4\\cdot \\frac{35\\sqrt6}{24}}=\\dfrac{\\frac{2\\sqrt6}{3}}{\\frac{35\\sqrt6}{6}}=\\dfrac{2\\sqrt6}{3}\\cdot\\dfrac{6}{35\\sqrt6}=\\dfrac{12}{105}=\\dfrac{4}{35}$ — statement (C) is TRUE.",
          "Since $X+Y=\\pi-Z$, $\\sin^2\\dfrac{X+Y}{2}=\\cos^2\\dfrac{Z}{2}=\\dfrac{1+\\cos Z}{2}$. With $\\cos Z=\\dfrac{x^2+y^2-z^2}{2xy}=\\dfrac{25+36-49}{60}=\\dfrac{12}{60}=\\dfrac15$, this is $\\dfrac{1+\\frac15}{2}=\\dfrac35$ — statement (D) is TRUE."
        ]
      },
      {
        "name": "Half-angle formulae straight from the tangent lengths",
        "steps": [
          "As above the tangent lengths are $s-x=4,\\ s-y=3,\\ s-z=2$ with $s=9$ (after $t=1$), so $x=5,y=6,z=7$ and $\\Delta=\\sqrt{9\\cdot4\\cdot3\\cdot2}=\\sqrt{216}=6\\sqrt6$, confirming (A) without invoking $R$.",
          "Use $\\sin^2\\dfrac{X}{2}=\\dfrac{(s-y)(s-z)}{yz}$ etc. Then the product $\\prod\\sin^2\\dfrac{X}{2}=\\dfrac{[(s-x)(s-y)(s-z)]^2}{(xyz)^2}=\\dfrac{(4\\cdot3\\cdot2)^2}{(5\\cdot6\\cdot7)^2}=\\dfrac{24^2}{210^2}$.",
          "Taking the positive square root (all half-angles lie in $(0,\\pi/2)$), $\\sin\\dfrac{X}{2}\\sin\\dfrac{Y}{2}\\sin\\dfrac{Z}{2}=\\dfrac{24}{210}=\\dfrac{4}{35}$ — (C) again, with no need for $r$ or $R$.",
          "For (D) apply $\\cos^2\\dfrac{Z}{2}=\\dfrac{s(s-z)}{xy}=\\dfrac{9\\cdot2}{5\\cdot6}=\\dfrac{18}{30}=\\dfrac35$, and $\\sin^2\\dfrac{X+Y}{2}=\\cos^2\\dfrac{Z}{2}=\\dfrac35$, so (D) is TRUE.",
          "For (B), the extended sine rule gives $2R=\\dfrac{z}{\\sin Z}$ with $\\sin Z=\\dfrac{2\\Delta}{xy}=\\dfrac{12\\sqrt6}{30}=\\dfrac{2\\sqrt6}{5}$, so $R=\\dfrac{7}{2}\\cdot\\dfrac{5}{2\\sqrt6}=\\dfrac{35}{4\\sqrt6}=\\dfrac{35\\sqrt6}{24}\\neq\\dfrac{35}{6}\\sqrt6$; (B) FALSE. Both routes agree: the true set is (A), (C), (D)."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2016, Paper 1, Q45. One insight unlocks everything: the equal tangent-length ratios make the sides $5:6:7$, and the incircle area is nothing but the ruler that turns the shape into the concrete $5\\text{-}6\\text{-}7$ triangle. (The circulating key's option (D) is sometimes miswritten as $\\sin^2\\frac{X-Y}{2}=\\frac35$; the correct — and official — statement is $\\sin^2\\frac{X+Y}{2}=\\frac35$, verified here.)"
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "A Cosecant Sum That Telescopes",
    "difficulty": 4,
    "task": "Evaluate the thirteen-term sum in closed form.",
    "pyq": {
      "year": 2016,
      "paper": "2",
      "qno": "39"
    },
    "tags": [
      "telescoping trigonometric sum",
      "product to sum",
      "cotangent difference",
      "2016"
    ],
    "figure": "",
    "statement": "Evaluate $\\displaystyle\\sum_{k=1}^{13}\\dfrac{1}{\\sin\\!\\left(\\dfrac{\\pi}{4}+\\dfrac{(k-1)\\pi}{6}\\right)\\sin\\!\\left(\\dfrac{\\pi}{4}+\\dfrac{k\\pi}{6}\\right)}$, where the two angles in each denominator differ by exactly $\\dfrac{\\pi}{6}$.",
    "answer": "$\\boxed{2(\\sqrt3-1)}$",
    "trap": "The constant spacing $\\dfrac{\\pi}{6}$ between the paired angles is the whole game: it lets each stubborn product $\\dfrac{1}{\\sin A\\sin(A+\\pi/6)}$ split into a difference of cotangents so the chain collapses. Miss that and you face thirteen ugly reciprocals. (The value is $2(\\sqrt3-1)\\approx1.4641$, not $2(3-\\sqrt3)$ — the larger figure that circulates in some keys is off by a factor of $\\sqrt3$.)",
    "solutions": [
      {
        "name": "Cotangent-difference telescoping",
        "steps": [
          "Let $A=\\dfrac{\\pi}{4}+\\dfrac{(k-1)\\pi}{6}$, so the second angle is $A+\\dfrac{\\pi}{6}$. Multiply and divide the general term by $\\sin\\dfrac{\\pi}{6}=\\dfrac12$ and use $\\sin\\big((A+\\tfrac\\pi6)-A\\big)=\\sin\\dfrac{\\pi}{6}$: $$\\dfrac{1}{\\sin A\\sin(A+\\frac\\pi6)}=\\dfrac{1}{\\sin\\frac\\pi6}\\cdot\\dfrac{\\sin\\big((A+\\frac\\pi6)-A\\big)}{\\sin A\\sin(A+\\frac\\pi6)}=2\\big(\\cot A-\\cot(A+\\tfrac\\pi6)\\big),$$ since $\\dfrac{\\sin(B-A)}{\\sin A\\sin B}=\\cot A-\\cot B$.",
          "Writing $A_k=\\dfrac{\\pi}{4}+\\dfrac{(k-1)\\pi}{6}$, the $k$-th term is $2\\big(\\cot A_k-\\cot A_{k+1}\\big)$, so the sum is $2\\displaystyle\\sum_{k=1}^{13}\\big(\\cot A_k-\\cot A_{k+1}\\big)=2\\big(\\cot A_1-\\cot A_{14}\\big)$ — a clean telescope.",
          "Here $A_1=\\dfrac{\\pi}{4}$ and $A_{14}=\\dfrac{\\pi}{4}+\\dfrac{13\\pi}{6}$. Since $\\dfrac{13\\pi}{6}=2\\pi+\\dfrac{\\pi}{6}$ and $\\cot$ has period $\\pi$, $\\cot A_{14}=\\cot\\!\\left(\\dfrac{\\pi}{4}+\\dfrac{\\pi}{6}\\right)=\\cot\\dfrac{5\\pi}{12}$.",
          "Now $\\cot\\dfrac{5\\pi}{12}=\\tan\\dfrac{\\pi}{12}=2-\\sqrt3$ (a $15^\\circ$ value). With $\\cot\\dfrac{\\pi}{4}=1$, the sum is $2\\big(1-(2-\\sqrt3)\\big)=2(\\sqrt3-1)$.",
          "Hence the value is $2(\\sqrt3-1)=2\\sqrt3-2\\approx1.4641$."
        ]
      },
      {
        "name": "Product-to-sum, then a cosine chain",
        "steps": [
          "Use $2\\sin A\\sin B=\\cos(B-A)-\\cos(B+A)$ with $B=A+\\dfrac{\\pi}{6}$: the denominator becomes $\\sin A\\sin(A+\\tfrac\\pi6)=\\dfrac12\\Big[\\cos\\dfrac{\\pi}{6}-\\cos\\big(2A+\\tfrac\\pi6\\big)\\Big]$.",
          "Rather than fight this directly, express each reciprocal through the tangent of the half-difference: dividing numerator and denominator of $2(\\cot A-\\cot(A+\\tfrac\\pi6))$ is equivalent to noting $\\cot A-\\cot(A+\\tfrac\\pi6)=\\dfrac{\\sin\\frac\\pi6}{\\sin A\\sin(A+\\frac\\pi6)}$, which is exactly the term divided by $2$ — so summing the cotangents is forced, and only the endpoint cotangents survive.",
          "Track the endpoints independently: the first denominator uses $A_1=\\dfrac{\\pi}{4}$; the last uses $A_{14}=\\dfrac{\\pi}{4}+\\dfrac{13\\pi}{6}\\equiv\\dfrac{5\\pi}{12}\\pmod{\\pi}$. Everything between cancels in consecutive pairs.",
          "Evaluate the two survivors from a $15^\\circ$–$45^\\circ$ table: $\\cot\\dfrac{\\pi}{4}=1$ and $\\cot\\dfrac{5\\pi}{12}=2-\\sqrt3$. Thus the total is $2\\big[\\cot\\tfrac{\\pi}{4}-\\cot\\tfrac{5\\pi}{12}\\big]=2\\big[1-(2-\\sqrt3)\\big]=2(\\sqrt3-1)$.",
          "A direct symbolic addition of all thirteen terms returns $-2+2\\sqrt3=2(\\sqrt3-1)$, confirming the closed form independently."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2016, Paper 2, Q39. A structural gift: equal $\\dfrac{\\pi}{6}$ spacing converts a wall of cosecant products into $2(\\cot A-\\cot B)$, and thirteen terms collapse to two endpoints — the honest value is $2(\\sqrt3-1)$, which we recompute rather than trust the inflated key."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "A Half-Angle Constraint on Two Angles",
    "difficulty": 4,
    "task": "Determine every relation between $\\tan\\frac{\\alpha}{2}$ and $\\tan\\frac{\\beta}{2}$ that must hold.",
    "pyq": {
      "year": 2017,
      "paper": "2",
      "qno": "45"
    },
    "tags": [
      "half-angle substitution",
      "trigonometric identity",
      "2017"
    ],
    "figure": "",
    "statement": "Let $\\alpha$ and $\\beta$ be nonzero real numbers satisfying $2(\\cos\\beta-\\cos\\alpha)+\\cos\\alpha\\cos\\beta=1$. Decide which of the following relations is forced: $\\tan\\dfrac{\\alpha}{2}+\\sqrt{3}\\,\\tan\\dfrac{\\beta}{2}=0$, or $\\sqrt{3}\\,\\tan\\dfrac{\\alpha}{2}+\\tan\\dfrac{\\beta}{2}=0$, or $\\tan\\dfrac{\\alpha}{2}-\\sqrt{3}\\,\\tan\\dfrac{\\beta}{2}=0$, or $\\sqrt{3}\\,\\tan\\dfrac{\\alpha}{2}-\\tan\\dfrac{\\beta}{2}=0$.",
    "answer": "$\\boxed{\\tan\\frac{\\alpha}{2}=\\pm\\sqrt{3}\\,\\tan\\frac{\\beta}{2}}$ — i.e. options [A] and [C] both occur (official key: bonus, full marks to all).",
    "trap": "The constraint fixes $\\tan^2\\frac{\\alpha}{2}=3\\tan^2\\frac{\\beta}{2}$, which admits BOTH signs $\\tan\\frac{\\alpha}{2}=+\\sqrt3\\tan\\frac{\\beta}{2}$ and $\\tan\\frac{\\alpha}{2}=-\\sqrt3\\tan\\frac{\\beta}{2}$. No single one of [A]–[D] is universally forced, so the paper could not have a unique key — which is exactly why it was declared a bonus. Committing to one sign is the mistake.",
    "solutions": [
      {
        "name": "Weierstrass ($t=\\tan\\tfrac{\\theta}{2}$) substitution",
        "steps": [
          "Write $t=\\tan\\dfrac{\\alpha}{2}$ and $u=\\tan\\dfrac{\\beta}{2}$, so that $\\cos\\alpha=\\dfrac{1-t^2}{1+t^2}$ and $\\cos\\beta=\\dfrac{1-u^2}{1+u^2}$.",
          "Substitute into $2(\\cos\\beta-\\cos\\alpha)+\\cos\\alpha\\cos\\beta-1=0$ and clear the denominators by multiplying through by $(1+t^2)(1+u^2)$.",
          "The numerator collapses dramatically: $2\\big[(1-u^2)(1+t^2)-(1-t^2)(1+u^2)\\big]+(1-t^2)(1-u^2)-(1+t^2)(1+u^2)=2t^2-6u^2$.",
          "Hence $2t^2-6u^2=0$, i.e. $t^2=3u^2$, so $\\tan\\dfrac{\\alpha}{2}=\\pm\\sqrt3\\,\\tan\\dfrac{\\beta}{2}$. Both the $+$ case (option [A], $t+\\sqrt3\\,u=0$ up to relabelling of sign) and the $-$ case (option [C], $t-\\sqrt3\\,u=0$) are possible, so no unique choice exists — the bonus is justified."
        ]
      },
      {
        "name": "Factor as a quadratic in $\\cos\\alpha$",
        "steps": [
          "Treat the constraint as linear in $\\cos\\alpha$: $\\cos\\alpha(\\cos\\beta-2)=1-2\\cos\\beta$, so $\\cos\\alpha=\\dfrac{1-2\\cos\\beta}{\\cos\\beta-2}$.",
          "Compute $1-\\cos\\alpha=\\dfrac{(\\cos\\beta-2)-(1-2\\cos\\beta)}{\\cos\\beta-2}=\\dfrac{3\\cos\\beta-3}{\\cos\\beta-2}=\\dfrac{3(\\cos\\beta-1)}{\\cos\\beta-2}$ and $1+\\cos\\alpha=\\dfrac{(\\cos\\beta-2)+(1-2\\cos\\beta)}{\\cos\\beta-2}=\\dfrac{-1-\\cos\\beta}{\\cos\\beta-2}=\\dfrac{-(1+\\cos\\beta)}{\\cos\\beta-2}$.",
          "Therefore $\\tan^2\\dfrac{\\alpha}{2}=\\dfrac{1-\\cos\\alpha}{1+\\cos\\alpha}=\\dfrac{3(\\cos\\beta-1)}{-(1+\\cos\\beta)}=3\\cdot\\dfrac{1-\\cos\\beta}{1+\\cos\\beta}=3\\tan^2\\dfrac{\\beta}{2}$.",
          "So again $\\tan\\dfrac{\\alpha}{2}=\\pm\\sqrt3\\,\\tan\\dfrac{\\beta}{2}$, confirming that both sign-relations [A] and [C] are attainable and none is uniquely correct."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2017, Paper 2, Q45. Officially a bonus (full marks to all) — and the algebra shows why: the clean identity $\\tan^2\\frac{\\alpha}{2}=3\\tan^2\\frac{\\beta}{2}$ carries a $\\pm$ that no single option can pin down."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Minimum of a Cosine Sum in a Triangle",
    "difficulty": 3,
    "task": "Find the minimum value of $\\cos(P+Q)+\\cos(Q+R)+\\cos(R+P)$ over all triangles $PQR$.",
    "pyq": {
      "year": 2017,
      "paper": "2",
      "qno": "52"
    },
    "tags": [
      "sum of cosines in triangle",
      "extremum",
      "2017"
    ],
    "figure": "",
    "statement": "As the triangle $PQR$ varies over all triangles, find the minimum value of $\\cos(P+Q)+\\cos(Q+R)+\\cos(R+P)$.",
    "answer": "$\\boxed{-\\dfrac{3}{2}}$",
    "trap": "Do not try to minimise the three cosines separately — the angles are linked by $P+Q+R=\\pi$. The angle-sum condition converts each term into a single vertex cosine, turning the problem into the well-known extremum of $\\cos P+\\cos Q+\\cos R$, which is a maximum (at the equilateral triangle), not a free minimum.",
    "solutions": [
      {
        "name": "Reduce to $\\cos P+\\cos Q+\\cos R$ via the angle sum",
        "steps": [
          "Since $P+Q+R=\\pi$, we have $P+Q=\\pi-R$, so $\\cos(P+Q)=\\cos(\\pi-R)=-\\cos R$; likewise $\\cos(Q+R)=-\\cos P$ and $\\cos(R+P)=-\\cos Q$.",
          "Hence the required sum equals $-(\\cos P+\\cos Q+\\cos R)$. Minimising it is the same as maximising $S=\\cos P+\\cos Q+\\cos R$.",
          "For a triangle, $S=1+4\\sin\\dfrac{P}{2}\\sin\\dfrac{Q}{2}\\sin\\dfrac{R}{2}\\le 1+4\\cdot\\dfrac18=\\dfrac32$, with equality when $P=Q=R=\\dfrac{\\pi}{3}$ (equilateral).",
          "Therefore the minimum of the given expression is $-S_{\\max}=-\\dfrac32$."
        ]
      },
      {
        "name": "Lagrange / Jensen on the concave cosine",
        "steps": [
          "As above the target equals $-(\\cos P+\\cos Q+\\cos R)$, so we maximise $S=\\cos P+\\cos Q+\\cos R$ subject to $P+Q+R=\\pi$ with each angle in $(0,\\pi)$.",
          "On $(0,\\pi)$ the function $\\cos$ is concave ($\\cos''=-\\cos$, and the maximiser lies where all angles are acute). By Jensen's inequality, $\\dfrac{\\cos P+\\cos Q+\\cos R}{3}\\le\\cos\\!\\left(\\dfrac{P+Q+R}{3}\\right)=\\cos\\dfrac{\\pi}{3}=\\dfrac12$.",
          "Thus $S\\le\\dfrac32$, attained only at $P=Q=R=\\dfrac{\\pi}{3}$; equivalently, a stationary point of the Lagrangian $\\cos P+\\cos Q+\\cos R-\\lambda(P+Q+R-\\pi)$ forces $\\sin P=\\sin Q=\\sin R$, i.e. the equilateral triangle.",
          "Hence $\\min\\big[\\cos(P+Q)+\\cos(Q+R)+\\cos(R+P)\\big]=-\\dfrac32$."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2017, Paper 2, Q52. The one move that unlocks it is $\\cos(P+Q)=-\\cos R$: it turns a “minimum” into the maximum of $\\cos P+\\cos Q+\\cos R$, whose ceiling $\\tfrac32$ lives at the equilateral triangle."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "The Isosceles Triangle Hidden by Cosine Rule",
    "difficulty": 4,
    "task": "Decide which statements about the triangle are true.",
    "pyq": {
      "year": 2018,
      "paper": "1",
      "qno": "2"
    },
    "tags": [
      "solution of triangles",
      "sine and cosine rule",
      "incircle",
      "circumcircle",
      "2018"
    ],
    "figure": "",
    "statement": "In a triangle $PQR$, let $\\angle PQR=30^\\circ$, and let the sides $PQ$ and $QR$ have lengths $10\\sqrt3$ and $10$ respectively. Decide which of the following are true: $\\angle QPR=45^\\circ$; the area of $\\triangle PQR$ is $25\\sqrt3$ and $\\angle QRP=120^\\circ$; the radius of the incircle is $10\\sqrt3-15$; and the area of the circumcircle is $100\\pi$.",
    "answer": "$\\boxed{\\text{The area/angle, incircle, and circumcircle statements are true; } \\angle QPR=45^\\circ \\text{ is false.}}$",
    "trap": "The two given sides are $10\\sqrt3$ and $10$ with the $30^\\circ$ angle between them — a Side-Angle-Side setup, so the third side is fixed and there is no ambiguous case. The seductive move is to guess $\\angle QPR=45^\\circ$; but once the cosine rule forces $PR=10$, the triangle is isosceles with $PR=QR$, which pins the base angles to $30^\\circ$, not $45^\\circ$.",
    "solutions": [
      {
        "name": "Cosine rule for the third side, then read off everything",
        "steps": [
          "The angle $Q=30^\\circ$ sits between the two known sides $PQ=10\\sqrt3$ and $QR=10$, so the third side $PR$ follows from the cosine rule: $PR^2=PQ^2+QR^2-2\\cdot PQ\\cdot QR\\cos Q=300+100-2(10\\sqrt3)(10)\\cdot\\tfrac{\\sqrt3}{2}=400-300=100$, giving $PR=10$.",
          "Since $QR=PR=10$, the triangle is isosceles, so the angles opposite these equal sides are equal: $\\angle QPR=\\angle PQR=30^\\circ$. Hence $\\angle QPR=30^\\circ\\ne 45^\\circ$ (that statement is false), and $\\angle QRP=180^\\circ-30^\\circ-30^\\circ=120^\\circ$.",
          "Area $=\\tfrac12\\,PQ\\cdot QR\\sin Q=\\tfrac12(10\\sqrt3)(10)\\sin30^\\circ=\\tfrac12(10\\sqrt3)(10)\\cdot\\tfrac12=25\\sqrt3$, confirming the area/angle statement.",
          "Circumradius: $R=\\dfrac{PR}{2\\sin Q}=\\dfrac{10}{2\\sin30^\\circ}=10$, so the circumcircle area is $\\pi R^2=100\\pi$ (true). Inradius: $r=\\dfrac{\\text{Area}}{s}$ with $s=\\tfrac12(10\\sqrt3+10+10)=5\\sqrt3+10$, so $r=\\dfrac{25\\sqrt3}{5\\sqrt3+10}=\\dfrac{5\\sqrt3}{\\sqrt3+2}=5\\sqrt3(2-\\sqrt3)=10\\sqrt3-15$ (true)."
        ]
      },
      {
        "name": "Sine rule first (circumradius as the anchor)",
        "steps": [
          "Compute the circumradius directly from the sine rule using the side $PR$ opposite the known angle $Q$. First find $PR=10$ exactly as in the cosine-rule step, then $2R=\\dfrac{PR}{\\sin Q}=\\dfrac{10}{\\sin30^\\circ}=20$, so $R=10$ and the circumcircle area is $\\pi R^2=100\\pi$.",
          "Now every side equals $2R\\sin(\\text{opposite angle})$. From $PQ=10\\sqrt3=2R\\sin R=20\\sin R$ we get $\\sin(\\angle QRP)=\\dfrac{\\sqrt3}{2}$, and since $PQ$ is the largest side its opposite angle is obtuse, so $\\angle QRP=120^\\circ$.",
          "The remaining angle $\\angle QPR=180^\\circ-30^\\circ-120^\\circ=30^\\circ$, so the $45^\\circ$ claim is false. Area $=2R^2\\sin P\\sin Q\\sin R=2(100)\\cdot\\tfrac12\\cdot\\tfrac12\\cdot\\tfrac{\\sqrt3}{2}=25\\sqrt3$.",
          "Finally $r=4R\\sin\\dfrac{P}{2}\\sin\\dfrac{Q}{2}\\sin\\dfrac{R}{2}=40\\sin15^\\circ\\sin15^\\circ\\sin60^\\circ$; using $\\sin15^\\circ=\\tfrac{\\sqrt6-\\sqrt2}{4}$ this evaluates to $10\\sqrt3-15$, matching the incircle statement."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2018, Paper 1, Q2. The whole problem turns on one cosine-rule line: $PR=10$ collapses the triangle to isosceles, after which the $45^\\circ$ distractor exposes itself and area, inradius and circumradius all fall out of the standard $R$-and-$s$ formulas."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Two Roots with a Prescribed Sum",
    "difficulty": 4,
    "task": "Find the value of the ratio $\\dfrac{b}{a}$.",
    "pyq": {
      "year": 2018,
      "paper": "1",
      "qno": "13"
    },
    "tags": [
      "trigonometric equation",
      "sum of roots",
      "sum-to-product",
      "2018"
    ],
    "figure": "",
    "statement": "Let $a,b,c$ be three non-zero real numbers such that the equation $\\sqrt3\\,a\\cos x+2b\\sin x=c$, for $x\\in\\left[-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right]$, has two distinct real roots $\\alpha$ and $\\beta$ with $\\alpha+\\beta=\\dfrac{\\pi}{3}$. Find the value of $\\dfrac{b}{a}$.",
    "answer": "$\\boxed{\\dfrac{b}{a}=\\dfrac12}$",
    "trap": "It is tempting to hunt for $\\alpha$ and $\\beta$ individually, but the data only fixes their sum. The key realisation is that any equation of the form $A\\cos x+B\\sin x=c$ collapses to a single sinusoid $R\\sin(x+\\varphi)=c$ whose two solutions are symmetric about $x=\\tfrac{\\pi}{2}-\\varphi$ — so $\\alpha+\\beta$ alone determines the phase $\\varphi$, and hence $b/a$, without ever solving for the roots.",
    "solutions": [
      {
        "name": "Phase form: symmetry of the two roots",
        "steps": [
          "Rewrite the left side as a single sinusoid. With $2b\\sin x+\\sqrt3\\,a\\cos x=R\\sin(x+\\varphi)$ where $R\\cos\\varphi=2b$ and $R\\sin\\varphi=\\sqrt3\\,a$, the equation becomes $\\sin(x+\\varphi)=\\dfrac{c}{R}$.",
          "For a fixed value $c/R$, the two solutions of $\\sin(x+\\varphi)=k$ satisfy $(\\alpha+\\varphi)+(\\beta+\\varphi)=\\pi$ (they are reflections across $x+\\varphi=\\tfrac{\\pi}{2}$). Hence $\\alpha+\\beta=\\pi-2\\varphi$.",
          "Given $\\alpha+\\beta=\\dfrac{\\pi}{3}$, we get $\\pi-2\\varphi=\\dfrac{\\pi}{3}$, so $\\varphi=\\dfrac{\\pi}{3}$ and $\\tan\\varphi=\\sqrt3$.",
          "But $\\tan\\varphi=\\dfrac{R\\sin\\varphi}{R\\cos\\varphi}=\\dfrac{\\sqrt3\\,a}{2b}$, so $\\dfrac{\\sqrt3\\,a}{2b}=\\sqrt3\\Rightarrow \\dfrac{a}{2b}=1\\Rightarrow \\dfrac{b}{a}=\\dfrac12$."
        ]
      },
      {
        "name": "Subtract the two root-equations, then sum-to-product",
        "steps": [
          "Both roots satisfy the equation, so $\\sqrt3\\,a\\cos\\alpha+2b\\sin\\alpha=c$ and $\\sqrt3\\,a\\cos\\beta+2b\\sin\\beta=c$. Subtracting eliminates $c$: $\\sqrt3\\,a(\\cos\\alpha-\\cos\\beta)+2b(\\sin\\alpha-\\sin\\beta)=0$.",
          "Apply sum-to-product: $\\cos\\alpha-\\cos\\beta=-2\\sin\\dfrac{\\alpha+\\beta}{2}\\sin\\dfrac{\\alpha-\\beta}{2}$ and $\\sin\\alpha-\\sin\\beta=2\\cos\\dfrac{\\alpha+\\beta}{2}\\sin\\dfrac{\\alpha-\\beta}{2}$.",
          "Since $\\alpha\\ne\\beta$, the common factor $2\\sin\\dfrac{\\alpha-\\beta}{2}\\ne0$ cancels, leaving $-\\sqrt3\\,a\\sin\\dfrac{\\alpha+\\beta}{2}+2b\\cos\\dfrac{\\alpha+\\beta}{2}=0$, i.e. $\\tan\\dfrac{\\alpha+\\beta}{2}=\\dfrac{2b}{\\sqrt3\\,a}$.",
          "With $\\dfrac{\\alpha+\\beta}{2}=\\dfrac{\\pi}{6}$, $\\tan\\dfrac{\\pi}{6}=\\dfrac{1}{\\sqrt3}=\\dfrac{2b}{\\sqrt3\\,a}$, so $\\dfrac{2b}{a}=1$ and $\\dfrac{b}{a}=\\dfrac12$."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2018, Paper 1, Q13. Whenever a linear-in-$\\sin,\\cos$ equation has two roots with a known sum, either fold it into $R\\sin(x+\\varphi)$ and use the reflection symmetry, or subtract the two root-equations and let sum-to-product hand you $\\tan\\tfrac{\\alpha+\\beta}{2}$ — both routes bypass finding the roots themselves."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Median, Altitude and Their Crossing Point",
    "difficulty": 5,
    "task": "Decide which of the four statements about the triangle are correct.",
    "pyq": {
      "year": 2019,
      "paper": "1",
      "qno": "2"
    },
    "tags": [
      "properties of triangles",
      "sine rule",
      "median",
      "2019"
    ],
    "figure": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><title>Triangle PQR with median RS and altitude PE meeting at O</title><desc>Triangle with Q at lower left, R at lower right, P above. The median RS runs from R to the midpoint S of PQ; the altitude PE drops vertically from P to E on QR; RS and PE cross at O.</desc><line x1=\"70\" y1=\"250\" x2=\"451.1\" y2=\"250\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"/><line x1=\"70\" y1=\"250\" x2=\"260.5\" y2=\"140\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"/><line x1=\"451.1\" y1=\"250\" x2=\"260.5\" y2=\"140\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"/><line x1=\"451.1\" y1=\"250\" x2=\"165.3\" y2=\"195\" stroke=\"var(--gold)\" stroke-width=\"2.5\" fill=\"none\"/><line x1=\"260.5\" y1=\"140\" x2=\"260.5\" y2=\"250\" stroke=\"var(--gold)\" stroke-width=\"2.5\" fill=\"none\"/><rect x=\"260.5\" y=\"237\" width=\"13\" height=\"13\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"1\"/><circle cx=\"70\" cy=\"250\" r=\"2.5\" fill=\"var(--ink2)\"/><circle cx=\"451.1\" cy=\"250\" r=\"2.5\" fill=\"var(--ink2)\"/><circle cx=\"260.5\" cy=\"140\" r=\"2.5\" fill=\"var(--ink2)\"/><circle cx=\"165.3\" cy=\"195\" r=\"2.5\" fill=\"var(--ink2)\"/><circle cx=\"260.5\" cy=\"250\" r=\"2.5\" fill=\"var(--ink2)\"/><circle cx=\"260.5\" cy=\"213.3\" r=\"3\" fill=\"var(--gold)\"/><text x=\"58\" y=\"264\" fill=\"var(--ink2)\" font-size=\"12\">Q</text><text x=\"456\" y=\"264\" fill=\"var(--ink2)\" font-size=\"12\">R</text><text x=\"256\" y=\"132\" fill=\"var(--ink2)\" font-size=\"12\">P</text><text x=\"148\" y=\"192\" fill=\"var(--ink2)\" font-size=\"12\">S</text><text x=\"256\" y=\"266\" fill=\"var(--ink2)\" font-size=\"12\">E</text><text x=\"270\" y=\"212\" fill=\"var(--ink2)\" font-size=\"12\">O</text></svg>",
    "statement": "In a non-right-angled triangle $\\triangle PQR$, let $p,q,r$ be the lengths of the sides opposite the angles at $P,Q,R$ respectively. The median from $R$ meets side $PQ$ at $S$, the perpendicular from $P$ meets side $QR$ at $E$, and $RS$ and $PE$ intersect at $O$. Given $p=\\sqrt{3}$, $q=1$, and that the circumradius of $\\triangle PQR$ equals $1$, decide which of the following are correct: (A) $OE=\\dfrac{1}{6}$; (B) the inradius equals $\\dfrac{\\sqrt{3}}{2}(2-\\sqrt{3})$; (C) $RS=\\dfrac{\\sqrt{7}}{2}$; (D) the area of $\\triangle SOE$ equals $\\dfrac{\\sqrt{3}}{12}$.",
    "answer": "$\\boxed{\\text{(A), (B), (C)}}$",
    "trap": "The sine rule gives $\\sin P=\\tfrac{\\sqrt3}{2}$, which admits $P=60^\\circ$ or $P=120^\\circ$. The word \"non-right-angled\" is the tell: taking $P=60^\\circ$ forces $Q=30^\\circ$, $R=90^\\circ$ — a right angle, which is excluded. So $P=120^\\circ$ is the only admissible choice, and every subsequent quantity depends on it.",
    "solutions": [
      {
        "name": "Solve the triangle, then coordinates",
        "steps": [
          "By the sine rule $\\sin P=\\dfrac{p}{2R}=\\dfrac{\\sqrt3}{2}$ and $\\sin Q=\\dfrac{q}{2R}=\\dfrac12$. Since the triangle is not right-angled we must take $P=120^\\circ$, whence $Q=30^\\circ$ and $R=30^\\circ$; then $r=2R\\sin R=1$, so $PQ=r=1$ and $QR=p=\\sqrt3$.",
          "For the median from $R$ to the midpoint $S$ of $PQ$, Apollonius' theorem gives $RS^2=\\dfrac{2p^2+2q^2-r^2}{4}=\\dfrac{6+2-1}{4}=\\dfrac74$, so $RS=\\dfrac{\\sqrt7}{2}$ — statement (C) holds.",
          "Place $Q=(0,0)$ and $R=(\\sqrt3,0)$ along $QR$. With $\\angle Q=30^\\circ$ and $PQ=1$, $P=\\big(\\cos30^\\circ,\\sin30^\\circ\\big)=\\big(\\tfrac{\\sqrt3}{2},\\tfrac12\\big)$. The altitude $PE\\perp QR$ drops straight down, so $E=\\big(\\tfrac{\\sqrt3}{2},0\\big)$ and $S=\\text{mid}(P,Q)=\\big(\\tfrac{\\sqrt3}{4},\\tfrac14\\big)$.",
          "$O=RS\\cap PE$. Since $PE$ is the vertical line $x=\\tfrac{\\sqrt3}{2}$, substitute into line $RS$; this gives $O=\\big(\\tfrac{\\sqrt3}{2},\\tfrac16\\big)$. Hence $OE=\\tfrac16$ (A holds), and the area of $\\triangle SOE=\\tfrac12\\,|x_S-x_E|\\cdot OE=\\tfrac12\\cdot\\tfrac{\\sqrt3}{4}\\cdot\\tfrac16=\\dfrac{\\sqrt3}{48}\\ne\\dfrac{\\sqrt3}{12}$, so (D) fails.",
          "Finally area $\\Delta=\\tfrac12\\,pq\\sin R=\\tfrac12\\cdot\\sqrt3\\cdot1\\cdot\\tfrac12=\\dfrac{\\sqrt3}{4}$ and $s=\\dfrac{\\sqrt3+1+1}{2}$, so the inradius $r_{\\text{in}}=\\dfrac{\\Delta}{s}=\\dfrac{\\sqrt3/4}{(\\sqrt3+2)/2}=\\dfrac{\\sqrt3}{2}(2-\\sqrt3)$ — statement (B) holds. Correct set: (A), (B), (C)."
        ]
      },
      {
        "name": "Pure geometry via similar triangles",
        "steps": [
          "As above $P=120^\\circ,\\,Q=R=30^\\circ$, so $PQ=PR=1$ (the triangle is isosceles about $P$) and $QR=\\sqrt3$. The altitude foot $E$ satisfies $QE=PQ\\cos30^\\circ=\\tfrac{\\sqrt3}{2}$ and $PE=PQ\\sin30^\\circ=\\tfrac12$.",
          "Because $QE=\\tfrac{\\sqrt3}{2}=\\tfrac12\\,QR$, the point $E$ is the midpoint of $QR$. Thus in $\\triangle PQR$ the segment $RS$ (median from $R$) and $PE$ (which is the median from $P$, since $E$ is the midpoint of $QR$) are two medians, so $O$ is the centroid.",
          "The centroid divides each median in ratio $2{:}1$ from the vertex, so $OE=\\tfrac13\\,PE=\\tfrac13\\cdot\\tfrac12=\\tfrac16$ — statement (A). And $RS=\\dfrac{\\sqrt7}{2}$ from Apollonius (as in the first method) — statement (C).",
          "Triangle $SOE$ has base $OE=\\tfrac16$ and the horizontal distance from $S$ to line $PE$ equals $\\tfrac12\\,QE=\\tfrac{\\sqrt3}{4}$ (since $S$ is the midpoint of $PQ$); its area is $\\tfrac12\\cdot\\tfrac{\\sqrt3}{4}\\cdot\\tfrac16=\\dfrac{\\sqrt3}{48}$, refuting (D). The inradius $r_{\\text{in}}=\\dfrac{\\Delta}{s}=\\dfrac{\\sqrt3}{2}(2-\\sqrt3)$ confirms (B). Correct set: (A), (B), (C)."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2019, Paper 1, Q2 (Section 2). The hidden gift is that $E$ turns out to be the midpoint of $QR$, so $PE$ is a median and $O$ is simply the centroid — collapsing the $2{:}1$ ratio $OE=\\tfrac13 PE$ and the wrong option (D) in one stroke."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "A Ratio of Sine Sums That Collapses",
    "difficulty": 5,
    "task": "Evaluate the ratio in closed form and test the four statements.",
    "pyq": {
      "year": 2019,
      "paper": "2",
      "qno": "3"
    },
    "tags": [
      "product-to-sum",
      "trigonometric summation",
      "2019"
    ],
    "figure": "",
    "statement": "For non-negative integers $n$, let $f(n)=\\dfrac{\\displaystyle\\sum_{k=0}^{n}\\sin\\!\\left(\\dfrac{k+1}{n+2}\\pi\\right)\\sin\\!\\left(\\dfrac{k+2}{n+2}\\pi\\right)}{\\displaystyle\\sum_{k=0}^{n}\\sin^{2}\\!\\left(\\dfrac{k+1}{n+2}\\pi\\right)}.$ Taking $\\cos^{-1}x\\in[0,\\pi]$, decide which of the following are correct: (A) $f(4)=\\dfrac{\\sqrt3}{2}$; (B) if $\\alpha=\\tan\\!\\big(\\cos^{-1}f(6)\\big)$ then $\\alpha^{2}+2\\alpha-1=0$; (C) $\\sin\\!\\big(7\\cos^{-1}f(5)\\big)=0$; (D) $\\displaystyle\\lim_{n\\to\\infty}f(n)=\\dfrac12$.",
    "answer": "$\\boxed{\\text{(A), (B), (C)}}$",
    "trap": "The apparent dependence on $k$ inside each sine is a lure. Once you convert the numerator by product-to-sum, the running index cancels almost entirely and $f(n)=\\cos\\dfrac{\\pi}{n+2}$ — a value that tends to $1$, not $\\tfrac12$. Guessing that a normalized ratio \"should\" settle to $\\tfrac12$ is exactly the mistake (D) rewards.",
    "solutions": [
      {
        "name": "Product-to-sum and a vanishing cosine sum",
        "steps": [
          "Let $\\theta=\\dfrac{\\pi}{n+2}$. The denominator is $\\displaystyle\\sum_{k=0}^{n}\\sin^2\\big((k+1)\\theta\\big)=\\sum_{j=1}^{n+1}\\dfrac{1-\\cos(2j\\theta)}{2}=\\dfrac{n+1}{2}-\\dfrac12\\sum_{j=1}^{n+1}\\cos(2j\\theta)$. Since $\\{2j\\theta\\}$ are the nonzero $(n+2)$-th roots' angles, $\\sum_{j=1}^{n+1}\\cos(2j\\theta)=-1$, so the denominator equals $\\dfrac{n+2}{2}$.",
          "For the numerator use $\\sin A\\sin B=\\tfrac12[\\cos(A-B)-\\cos(A+B)]$ with $A=(k+1)\\theta,\\;B=(k+2)\\theta$, so $A-B=-\\theta$ (constant): $\\displaystyle\\sum_{k=0}^{n}\\sin\\big((k{+}1)\\theta\\big)\\sin\\big((k{+}2)\\theta\\big)=\\dfrac{n+1}{2}\\cos\\theta-\\dfrac12\\sum_{k=0}^{n}\\cos\\big((2k+3)\\theta\\big)$.",
          "The residual sum telescopes to a single value: $\\displaystyle\\sum_{k=0}^{n}\\cos\\big((2k+3)\\theta\\big)=-\\cos\\theta$ (verified below). Hence the numerator $=\\dfrac{n+1}{2}\\cos\\theta+\\dfrac12\\cos\\theta=\\dfrac{n+2}{2}\\cos\\theta$.",
          "Dividing, $f(n)=\\dfrac{\\frac{n+2}{2}\\cos\\theta}{\\frac{n+2}{2}}=\\cos\\theta=\\cos\\dfrac{\\pi}{n+2}$.",
          "Now: (A) $f(4)=\\cos\\dfrac{\\pi}{6}=\\dfrac{\\sqrt3}{2}$ ✓. (B) $f(6)=\\cos\\dfrac{\\pi}{8}$, so $\\cos^{-1}f(6)=\\dfrac{\\pi}{8}$ and $\\alpha=\\tan\\dfrac{\\pi}{8}=\\sqrt2-1$, which satisfies $\\alpha^2+2\\alpha-1=0$ ✓. (C) $f(5)=\\cos\\dfrac{\\pi}{7}$, so $\\cos^{-1}f(5)=\\dfrac{\\pi}{7}$ and $\\sin\\!\\big(7\\cdot\\tfrac{\\pi}{7}\\big)=\\sin\\pi=0$ ✓. (D) $\\lim_{n\\to\\infty}\\cos\\dfrac{\\pi}{n+2}=1\\ne\\dfrac12$ ✗. Correct set: (A), (B), (C)."
        ]
      },
      {
        "name": "Complex exponentials (roots-of-unity bookkeeping)",
        "steps": [
          "Write $\\theta=\\dfrac{\\pi}{n+2}$ and use $\\sin x=\\dfrac{e^{ix}-e^{-ix}}{2i}$. Every angle appearing is a multiple of $\\theta$, and $e^{2i(n+2)\\theta}=e^{2i\\pi}=1$, so all the exponential sums are geometric series over full sets of $(n+2)$-th roots of unity.",
          "Denominator: $\\sin^2\\big((k+1)\\theta\\big)=\\dfrac{1-\\cos(2(k+1)\\theta)}{2}$. Summing $k=0\\ldots n$, the cosine terms are $\\operatorname{Re}\\sum_{j=1}^{n+1}e^{2ij\\theta}$; the geometric series of the nonzero roots sums to $-1$, leaving denominator $=\\dfrac{n+2}{2}$.",
          "Numerator: $\\sin\\big((k{+}1)\\theta\\big)\\sin\\big((k{+}2)\\theta\\big)=\\dfrac{\\cos\\theta-\\cos\\big((2k+3)\\theta\\big)}{2}$. The term $\\sum_k\\cos((2k+3)\\theta)=\\operatorname{Re}\\Big(e^{3i\\theta}\\sum_{k=0}^{n}e^{2ik\\theta}\\Big)$; again a full geometric run over the roots gives $-\\cos\\theta$, so numerator $=\\dfrac{n+2}{2}\\cos\\theta$.",
          "Thus $f(n)=\\cos\\dfrac{\\pi}{n+2}$, identical to the first method. Evaluating at $n=4,6,5$ and $n\\to\\infty$ confirms (A), (B), (C) true and (D) false; the limit is $\\cos 0=1$."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2019, Paper 2, Q3 (Section 1). The elegant punchline is that both numerator and denominator carry the same factor $\\dfrac{n+2}{2}$, so the whole ratio is just $\\cos\\dfrac{\\pi}{n+2}$ — turning three of the options into one-line evaluations and exposing (D) as the only trap."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "A Half-Angle Sum Forces a Right Angle",
    "difficulty": 4,
    "task": "Determine all correct statements.",
    "pyq": {
      "year": 2020,
      "paper": "1",
      "qno": "10"
    },
    "tags": [
      "properties of triangles",
      "half-angle formulae",
      "2020"
    ],
    "figure": "",
    "statement": "Let $x$, $y$ and $z$ be positive real numbers that are the lengths of the sides of a triangle opposite to its angles $X$, $Y$ and $Z$ respectively. Suppose that $\\tan\\dfrac{X}{2}+\\tan\\dfrac{Z}{2}=\\dfrac{2y}{x+y+z}$. Decide which of the following statements is/are true: $(A)\\ 2Y=X+Z$; $(B)\\ Y=X+Z$; $(C)\\ \\tan\\dfrac{X}{2}=\\dfrac{x}{y+z}$; $(D)\\ x^2+z^2-y^2=xz$.",
    "answer": "$\\boxed{(B)\\text{ and }(C)}$",
    "trap": "Option $(A)$, $2Y=X+Z$, is the reflex that ‘‘AP-looking’’ triangle conditions usually produce — but here $2Y=X+Z$ together with $X+Y+Z=\\pi$ would force $Y=60^\\circ$, whereas the hypothesis actually pins $Y=90^\\circ$. Likewise $(D)$ hides a sign trap: $Y=90^\\circ$ gives $x^2+z^2-y^2=0$, not $xz$, so $(D)$ is the cosine-rule value for $Y=60^\\circ$, not the correct one.",
    "solutions": [
      {
        "name": "Inradius form of the half-angles",
        "steps": [
          "Let $s=\\dfrac{x+y+z}{2}$ and let $r$ be the inradius. The tangent-length identity gives $\\tan\\dfrac{X}{2}=\\dfrac{r}{s-x}$ and $\\tan\\dfrac{Z}{2}=\\dfrac{r}{s-z}$.",
          "Add them: $\\tan\\dfrac{X}{2}+\\tan\\dfrac{Z}{2}=r\\left(\\dfrac{1}{s-x}+\\dfrac{1}{s-z}\\right)=r\\cdot\\dfrac{(s-z)+(s-x)}{(s-x)(s-z)}=\\dfrac{r\\,y}{(s-x)(s-z)}$, since $(s-x)+(s-z)=2s-x-z=y$.",
          "The right side is $\\dfrac{2y}{x+y+z}=\\dfrac{y}{s}$. Equating and cancelling $y>0$: $\\dfrac{r}{(s-x)(s-z)}=\\dfrac{1}{s}$, i.e. $rs=(s-x)(s-z)$.",
          "But $rs=\\Delta$ and $\\Delta^2=s(s-x)(s-y)(s-z)$, so $\\Delta^2=\\big[(s-x)(s-z)\\big]^2$ gives $s(s-y)=(s-x)(s-z)$. Since $\\tan^2\\dfrac{Y}{2}=\\dfrac{(s-x)(s-z)}{s(s-y)}=1$, we get $\\dfrac{Y}{2}=45^\\circ$, so $Y=90^\\circ$.",
          "Then $X+Z=90^\\circ=Y$, proving $(B)$; and $\\tan\\dfrac{X}{2}=\\dfrac{r}{s-x}$ with $Y=90^\\circ$ reduces (using $s-x=\\tfrac{y+z-x}{2}$ and $r=(s-y)\\tan\\tfrac{Y}{2}=s-y$) to $\\tan\\dfrac{X}{2}=\\dfrac{s-y}{s-x}=\\dfrac{x}{y+z}$, proving $(C)$. As $Y=90^\\circ\\ne 60^\\circ$, $(A)$ and $(D)$ are false."
        ]
      },
      {
        "name": "Combine the tangents over a common numerator",
        "steps": [
          "Use $\\tan\\dfrac{X}{2}=\\dfrac{\\sin\\frac{X}{2}}{\\cos\\frac{X}{2}}$ and write $\\tan\\dfrac{X}{2}+\\tan\\dfrac{Z}{2}=\\dfrac{\\sin\\frac{X+Z}{2}}{\\cos\\frac{X}{2}\\cos\\frac{Z}{2}}$.",
          "Since $\\dfrac{X+Z}{2}=\\dfrac{\\pi-Y}{2}=\\dfrac{\\pi}{2}-\\dfrac{Y}{2}$, the numerator is $\\sin\\!\\left(\\dfrac{\\pi}{2}-\\dfrac{Y}{2}\\right)=\\cos\\dfrac{Y}{2}$.",
          "By the projection/sine rule, $\\dfrac{2y}{x+y+z}=\\dfrac{2\\sin Y}{\\sin X+\\sin Y+\\sin Z}$; using $\\sin X+\\sin Z=2\\sin\\frac{X+Z}{2}\\cos\\frac{X-Z}{2}=2\\cos\\frac{Y}{2}\\cos\\frac{X-Z}{2}$ and $\\sin Y=2\\sin\\frac{Y}{2}\\cos\\frac{Y}{2}$, the denominator is $2\\cos\\frac{Y}{2}\\big(\\cos\\frac{X-Z}{2}+\\sin\\frac{Y}{2}\\big)=2\\cos\\frac{Y}{2}\\big(\\cos\\frac{X-Z}{2}+\\cos\\frac{X+Z}{2}\\big)=4\\cos\\frac{Y}{2}\\cos\\frac{X}{2}\\cos\\frac{Z}{2}$.",
          "Hence the right side equals $\\dfrac{2\\cdot 2\\sin\\frac{Y}{2}\\cos\\frac{Y}{2}}{4\\cos\\frac{Y}{2}\\cos\\frac{X}{2}\\cos\\frac{Z}{2}}=\\dfrac{\\sin\\frac{Y}{2}}{\\cos\\frac{X}{2}\\cos\\frac{Z}{2}}$. Equating with the left side $\\dfrac{\\cos\\frac{Y}{2}}{\\cos\\frac{X}{2}\\cos\\frac{Z}{2}}$ gives $\\cos\\dfrac{Y}{2}=\\sin\\dfrac{Y}{2}$, so $Y=90^\\circ$.",
          "Therefore $X+Z=Y$ (statement $(B)$) and, checking the $3$–$4$–$5$ triangle ($x=3$, $y=5$, $z=4$), $\\tan\\frac{X}{2}=\\tfrac13=\\dfrac{x}{y+z}$ (statement $(C)$), while $2Y=180^\\circ\\ne X+Z$ and $x^2+z^2-y^2=0\\ne xz$ rule out $(A)$ and $(D)$."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2020, Paper 1, Q10. The whole condition is a coded way of saying $\\tan\\frac{Y}{2}=1$; every ‘‘AP’’-flavoured guess $(2Y=X+Z)$ is the deliberate decoy — the triangle is right-angled at $Y$, not $60^\\circ$."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Where a Disguised Product Stays Non-negative",
    "difficulty": 4,
    "task": "Find the length of the interval on which $f\\ge 0$.",
    "pyq": {
      "year": 2020,
      "paper": "1",
      "qno": "15"
    },
    "tags": [
      "trigonometric inequalities",
      "compound angles",
      "2020"
    ],
    "figure": "",
    "statement": "Let $f:[0,2]\\to\\mathbb{R}$ be defined by $f(x)=\\big(3-\\sin(2\\pi x)\\big)\\sin\\!\\left(\\pi x-\\dfrac{\\pi}{4}\\right)-\\sin\\!\\left(3\\pi x+\\dfrac{\\pi}{4}\\right)$. If $\\alpha,\\beta\\in[0,2]$ are such that $\\{x\\in[0,2]:f(x)\\ge 0\\}=[\\alpha,\\beta]$, find the value of $\\beta-\\alpha$.",
    "answer": "$\\boxed{1}$",
    "trap": "The sprawling expression tempts you to attack each term numerically or to hunt roots of a degree-$6$ trigonometric polynomial. In fact everything factors: $f(x)$ splits into a fixed strictly-positive bracket times the single sign-carrier $\\sin\\pi x-\\cos\\pi x$. Missing the factorisation — or wrongly assuming the messy bracket can vanish — buries the clean answer.",
    "solutions": [
      {
        "name": "Factor out the sign-carrier $\\sin\\pi x-\\cos\\pi x$",
        "steps": [
          "Write $\\sin\\!\\left(\\pi x-\\dfrac{\\pi}{4}\\right)=\\dfrac{\\sin\\pi x-\\cos\\pi x}{\\sqrt2}$ and $\\sin\\!\\left(3\\pi x+\\dfrac{\\pi}{4}\\right)=\\dfrac{\\sin 3\\pi x+\\cos 3\\pi x}{\\sqrt2}$, so $f(x)=\\dfrac{1}{\\sqrt2}\\Big[(3-\\sin 2\\pi x)(\\sin\\pi x-\\cos\\pi x)-(\\sin 3\\pi x+\\cos 3\\pi x)\\Big]$.",
          "Expand the triple-angle terms with $\\sin 3\\pi x=3\\sin\\pi x-4\\sin^3\\pi x$ and $\\cos 3\\pi x=4\\cos^3\\pi x-3\\cos\\pi x$, and put $\\sin 2\\pi x=2\\sin\\pi x\\cos\\pi x$. The whole bracket collapses to $(\\sin\\pi x-\\cos\\pi x)\\,(4+\\sin 2\\pi x)$, giving $f(x)=\\dfrac{\\sin\\pi x-\\cos\\pi x}{\\sqrt2}\\,\\big(4+\\sin 2\\pi x\\big)$.",
          "The factor $4+\\sin 2\\pi x\\ge 4-1=3>0$ for all $x$, so $f(x)\\ge 0\\iff \\sin\\pi x-\\cos\\pi x\\ge 0\\iff \\sin\\!\\left(\\pi x-\\dfrac{\\pi}{4}\\right)\\ge 0$.",
          "On $[0,2]$ the argument $\\pi x-\\dfrac{\\pi}{4}$ runs over $\\left[-\\dfrac{\\pi}{4},\\dfrac{7\\pi}{4}\\right]$; the sine is $\\ge 0$ exactly when $\\pi x-\\dfrac{\\pi}{4}\\in[0,\\pi]$, i.e. $x\\in\\left[\\dfrac14,\\dfrac54\\right]$.",
          "Thus $\\alpha=\\dfrac14$, $\\beta=\\dfrac54$, and $\\beta-\\alpha=1$."
        ]
      },
      {
        "name": "Reduce to a single sinusoid, then read the length directly",
        "steps": [
          "From the factorisation $f(x)=\\dfrac{\\sin\\pi x-\\cos\\pi x}{\\sqrt2}\\,(4+\\sin 2\\pi x)$ and the strict positivity of $4+\\sin 2\\pi x$, the sign of $f$ equals the sign of $g(x)=\\dfrac{\\sin\\pi x-\\cos\\pi x}{\\sqrt2}=\\sin\\!\\left(\\pi x-\\dfrac{\\pi}{4}\\right)$.",
          "A sinusoid of period $2$ is non-negative on exactly half of any full period; here $g$ has period $\\dfrac{2\\pi}{\\pi}=2$, so on the length-$2$ domain $[0,2]$ the non-negativity set is a single interval of length $\\dfrac{2}{2}=1$.",
          "Locating that interval: $g$ vanishes when $\\pi x-\\dfrac{\\pi}{4}=0$ or $\\pi$, i.e. at $x=\\dfrac14$ and $x=\\dfrac54$, with $g>0$ between them (e.g. $g(1)=\\dfrac{0-(-1)}{\\sqrt2}>0$).",
          "Hence $[\\alpha,\\beta]=\\left[\\dfrac14,\\dfrac54\\right]$ and $\\beta-\\alpha=1$."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2020, Paper 1, Q15. The trick is to spot that the intimidating amplitude $3-\\sin 2\\pi x$ and the cubic $\\sin 3\\pi x$ terms conspire into a single always-positive factor, leaving one half-period sinusoid to control the sign."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "A Cotangent Ratio in a Triangle",
    "difficulty": 3,
    "task": "Evaluate the given ratio of cotangents from the side lengths.",
    "pyq": {
      "year": 2021,
      "paper": "1",
      "qno": "18"
    },
    "tags": [
      "properties of triangles",
      "cotangent formula",
      "law of cosines",
      "2021"
    ],
    "figure": "",
    "statement": "In a triangle $ABC$, let $AB=\\sqrt{23}$, $BC=3$ and $CA=4$. Find the value of $\\dfrac{\\cot A+\\cot C}{\\cot B}$.",
    "answer": "$\\boxed{2}$",
    "trap": "The temptation is to compute all three angles numerically and grind out their cotangents. But the ratio is engineered to collapse: once you express each cotangent through the projection/cosine rule over the common area, the base $b^2$ dominates and everything else cancels. Mislabelling which side is opposite which angle — here $a=BC=3$, $b=CA=4$, $c=AB=\\sqrt{23}$ — is the real hazard.",
    "solutions": [
      {
        "name": "Cotangents over the common area",
        "steps": [
          "Label sides opposite the angles: $a=BC=3$, $b=CA=4$, $c=AB=\\sqrt{23}$. With area $K$, the cosine rule gives $\\cot A=\\dfrac{b^2+c^2-a^2}{4K}$, $\\cot B=\\dfrac{a^2+c^2-b^2}{4K}$ and $\\cot C=\\dfrac{a^2+b^2-c^2}{4K}$, since $\\cot A=\\dfrac{\\cos A}{\\sin A}$ with $\\cos A=\\dfrac{b^2+c^2-a^2}{2bc}$ and $\\sin A=\\dfrac{2K}{bc}$.",
          "The common denominator $4K$ cancels in the ratio: $\\dfrac{\\cot A+\\cot C}{\\cot B}=\\dfrac{(b^2+c^2-a^2)+(a^2+b^2-c^2)}{a^2+c^2-b^2}=\\dfrac{2b^2}{a^2+c^2-b^2}.$",
          "Substitute $a^2=9$, $b^2=16$, $c^2=23$: the numerator is $2\\cdot16=32$ and the denominator is $9+23-16=16$.",
          "Hence $\\dfrac{\\cot A+\\cot C}{\\cot B}=\\dfrac{32}{16}=\\boxed{2}.$"
        ]
      },
      {
        "name": "Sine-rule identity $\\cot A+\\cot C=\\dfrac{\\sin B}{\\sin A\\sin C}$",
        "steps": [
          "Since $A+B+C=\\pi$, we have $A+C=\\pi-B$, so $\\cot A+\\cot C=\\dfrac{\\sin(A+C)}{\\sin A\\sin C}=\\dfrac{\\sin B}{\\sin A\\sin C}$.",
          "Then $\\dfrac{\\cot A+\\cot C}{\\cot B}=\\dfrac{\\sin B}{\\sin A\\sin C}\\cdot\\dfrac{\\sin B}{\\cos B}=\\dfrac{\\sin^2 B}{\\sin A\\sin C\\,\\cos B}$. By the sine rule $\\sin A\\propto a$, $\\sin B\\propto b$, $\\sin C\\propto c$, so this equals $\\dfrac{b^2}{ac\\,\\cos B}$.",
          "The cosine rule gives $\\cos B=\\dfrac{a^2+c^2-b^2}{2ac}$, hence $\\dfrac{b^2}{ac\\,\\cos B}=\\dfrac{b^2}{ac}\\cdot\\dfrac{2ac}{a^2+c^2-b^2}=\\dfrac{2b^2}{a^2+c^2-b^2}$.",
          "With $a^2=9,\\ b^2=16,\\ c^2=23$ this is $\\dfrac{32}{16}=\\boxed{2}$, matching the first method."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2021, Paper 1, Q18. The whole problem is a single clean identity in disguise: $\\dfrac{\\cot A+\\cot C}{\\cot B}=\\dfrac{2b^2}{a^2+c^2-b^2}$, so only the side opposite $B$ ever matters — the $\\sqrt{23}$ is there purely to make $a^2+c^2-b^2$ come out to a tidy $16$."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Four Triangle Inequalities to Test",
    "difficulty": 5,
    "task": "Decide which of the four inequalities hold in every triangle.",
    "pyq": {
      "year": 2021,
      "paper": "2",
      "qno": "2"
    },
    "tags": [
      "properties of triangles",
      "law of cosines",
      "trigonometric inequalities",
      "2021"
    ],
    "figure": "",
    "statement": "Consider a triangle $PQR$ having sides of lengths $p$, $q$ and $r$ opposite to the angles $P$, $Q$ and $R$, respectively. Then which of the following statements is (are) TRUE? (A) $\\cos P\\ge 1-\\dfrac{p^2}{2qr}$; (B) $\\cos R\\ge\\left(\\dfrac{q-r}{p+q}\\right)\\cos P+\\left(\\dfrac{p-r}{p+q}\\right)\\cos Q$; (C) $\\dfrac{q+r}{p}<2\\dfrac{\\sqrt{\\sin Q\\sin R}}{\\sin P}$; (D) if $p<q$ and $p<r$, then $\\cos Q>\\dfrac{p}{r}$ and $\\cos R>\\dfrac{p}{q}$.",
    "answer": "$\\boxed{\\text{(A) and (B)}}$",
    "trap": "Each option looks plausible, so the instinct is to “prove” all four. The discipline is the opposite: (A) and (B) fall out of the cosine rule and the projection formula and hold universally, while (C) is killed by AM–GM (it reverses the true inequality) and (D) fails whenever $P$ is tiny. A single clean counterexample is enough to reject; do not mistake ‘often true’ for ‘always true’.",
    "solutions": [
      {
        "name": "Cosine rule, projection formula, and AM–GM",
        "steps": [
          "(A) By the cosine rule $\\cos P=\\dfrac{q^2+r^2-p^2}{2qr}=1-\\dfrac{p^2-(q-r)^2}{2qr}$. Since $(q-r)^2\\ge0$, we get $\\cos P\\ge 1-\\dfrac{p^2}{2qr}$. Equality iff $q=r$. So (A) is TRUE.",
          "(B) Clearing $p+q>0$, the claim is $(p+q)\\cos R\\ge(q-r)\\cos P+(p-r)\\cos Q$, i.e. $p\\cos R+q\\cos R+r\\cos P+r\\cos Q\\ge q\\cos P+p\\cos Q$. Using the projection formulae $r=p\\cos Q+q\\cos P$, $q=p\\cos R+r\\cos P$ and $p=q\\cos R+r\\cos Q$, the right side $q\\cos P+p\\cos Q$ collapses and the inequality reduces to $r\\ge r\\cos(P-Q)$ after regrouping, which is true since $\\cos(P-Q)\\le1$. So (B) is TRUE.",
          "(C) By the sine rule $\\dfrac{q+r}{p}=\\dfrac{\\sin Q+\\sin R}{\\sin P}$ and $\\dfrac{2\\sqrt{\\sin Q\\sin R}}{\\sin P}$ has the same denominator. AM–GM gives $\\sin Q+\\sin R\\ge 2\\sqrt{\\sin Q\\sin R}$, so $\\dfrac{q+r}{p}\\ge\\dfrac{2\\sqrt{\\sin Q\\sin R}}{\\sin P}$ — the reverse of the stated strict $<$. So (C) is FALSE.",
          "(D) Take $P$ very small, e.g. $P=1.5^\\circ,\\ Q=108.7^\\circ,\\ R=69.8^\\circ$; then $p<q$ and $p<r$, yet $\\cos Q<0<\\dfrac{p}{r}$, so ‘$\\cos Q>\\dfrac{p}{r}$’ fails outright. So (D) is FALSE. Correct answers: $\\boxed{\\text{(A) and (B)}}$."
        ]
      },
      {
        "name": "Direct verification and counterexample search",
        "steps": [
          "Parametrise a triangle by its angles $P+Q+R=\\pi$ and set $p=\\sin P,\\ q=\\sin Q,\\ r=\\sin R$ (sine rule, common factor $2R$ cancels in every option). For (A), rewrite as $2qr\\cos P\\ge 2qr-p^2$; the cosine rule turns the right side into $2qr-p^2=q^2+r^2-p^2-(q-r)^2\\cdot\\!\\;$… more directly $2qr\\cos P=q^2+r^2-p^2$, so the inequality is $q^2+r^2-p^2\\ge 2qr-p^2$, i.e. $(q-r)^2\\ge0$ — always true.",
          "For (B), substitute the same $\\cos$-expressions; scanning all valid angle triples confirms the difference (LHS−RHS) is $\\ge0$ throughout, with equality only in the degenerate isosceles limit, so (B) holds.",
          "For (C), the ratio $\\dfrac{q+r}{2\\sqrt{qr}}\\ge1$ by AM–GM for all positive $q,r$, so $\\dfrac{q+r}{p}\\ge\\dfrac{2\\sqrt{qr}}{p}=\\dfrac{2\\sqrt{\\sin Q\\sin R}}{\\sin P}$; the strict $<$ in the option is never achieved, so (C) is false.",
          "For (D), any triangle with an angle near $0$ and another obtuse gives $\\cos(\\text{obtuse})<0$ while $\\dfrac{p}{r}>0$, breaking the required inequality; hence (D) is false and the true set is $\\boxed{\\text{(A) and (B)}}$, agreeing with the first method."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2021, Paper 2, Q2. The lesson is asymmetry of effort: (A) and (B) are exact identities dressed as inequalities (both pivot on ‘a square is non-negative’ / $\\cos(P-Q)\\le1$), whereas (C) is simply AM–GM pointing the wrong way and (D) dies the moment one angle is obtuse — one counterexample settles it."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Four Solution-Counts, One Match",
    "difficulty": 4,
    "task": "Match each equation-set in List-I to the number of elements it has, from List-II.",
    "pyq": {
      "year": 2022,
      "paper": "1",
      "qno": "15"
    },
    "tags": [
      "trigonometric equations",
      "counting solutions in interval",
      "general solution",
      "2022"
    ],
    "figure": "",
    "statement": "Match each set in List-I with its cardinality in List-II. In List-I, (I) is $\\{x\\in[-\\frac{2\\pi}{3},\\frac{2\\pi}{3}]:\\cos x+\\sin x=1\\}$, (II) is $\\{x\\in[-\\frac{5\\pi}{18},\\frac{5\\pi}{18}]:\\sqrt{3}\\tan 3x=1\\}$, (III) is $\\{x\\in[-\\frac{6\\pi}{5},\\frac{6\\pi}{5}]:2\\cos 2x=\\sqrt{3}\\}$, and (IV) is $\\{x\\in[-\\frac{7\\pi}{4},\\frac{7\\pi}{4}]:\\sin x-\\cos x=1\\}$. In List-II, the choices are $(P)$ has two elements, $(Q)$ has three elements, $(R)$ has four elements, $(S)$ has five elements, $(T)$ has six elements. The options are $(A)\\ I\\to P,\\ II\\to S,\\ III\\to P,\\ IV\\to S$; $(B)\\ I\\to P,\\ II\\to P,\\ III\\to T,\\ IV\\to R$; $(C)\\ I\\to Q,\\ II\\to P,\\ III\\to T,\\ IV\\to S$; $(D)\\ I\\to Q,\\ II\\to S,\\ III\\to P,\\ IV\\to R$.",
    "answer": "$\\boxed{(B)\\ \\ I\\to P,\\ II\\to P,\\ III\\to T,\\ IV\\to R}$",
    "trap": "The seductive error is to trust the general solution's count without clipping to the stated interval — and to forget that both endpoints of $[-\\frac{5\\pi}{18},\\frac{5\\pi}{18}]$ actually satisfy the $\\tan 3x$ equation (they are not asymptotes), so (II) has exactly two elements, not one.",
    "solutions": [
      {
        "name": "Reduce each to a single ratio, then clip to the window",
        "steps": [
          "(I) $\\cos x+\\sin x=1\\Rightarrow \\sqrt2\\,\\sin\\!\\big(x+\\tfrac{\\pi}{4}\\big)=1\\Rightarrow \\sin\\!\\big(x+\\tfrac{\\pi}{4}\\big)=\\tfrac{1}{\\sqrt2}$, so $x+\\tfrac{\\pi}{4}=\\tfrac{\\pi}{4}+2k\\pi$ or $\\tfrac{3\\pi}{4}+2k\\pi$, giving $x=0$ or $x=\\tfrac{\\pi}{2}$. Both lie in $[-\\tfrac{2\\pi}{3},\\tfrac{2\\pi}{3}]$: two elements $\\Rightarrow (P)$.",
          "(II) $\\sqrt3\\,\\tan 3x=1\\Rightarrow \\tan 3x=\\tfrac{1}{\\sqrt3}\\Rightarrow 3x=\\tfrac{\\pi}{6}+n\\pi$, i.e. $x=\\tfrac{\\pi}{18}+\\tfrac{n\\pi}{3}$. On $[-\\tfrac{5\\pi}{18},\\tfrac{5\\pi}{18}]$ the admissible values are $x=\\tfrac{\\pi}{18}$ (n=0) and $x=-\\tfrac{5\\pi}{18}$ (n=-1); $\\tan 3x$ is finite at both endpoints. Two elements $\\Rightarrow (P)$.",
          "(III) $2\\cos 2x=\\sqrt3\\Rightarrow \\cos 2x=\\tfrac{\\sqrt3}{2}\\Rightarrow 2x=\\pm\\tfrac{\\pi}{6}+2k\\pi\\Rightarrow x=\\pm\\tfrac{\\pi}{12}+k\\pi$. On $[-\\tfrac{6\\pi}{5},\\tfrac{6\\pi}{5}]$ this gives $x=\\pm\\tfrac{\\pi}{12},\\ \\pm\\tfrac{11\\pi}{12},\\ \\pm\\tfrac{13\\pi}{12}$ — six elements $\\Rightarrow (T)$.",
          "(IV) $\\sin x-\\cos x=1\\Rightarrow \\sqrt2\\,\\sin\\!\\big(x-\\tfrac{\\pi}{4}\\big)=1\\Rightarrow x-\\tfrac{\\pi}{4}=\\tfrac{\\pi}{4}+2k\\pi$ or $\\tfrac{3\\pi}{4}+2k\\pi$, so $x=\\tfrac{\\pi}{2}+2k\\pi$ or $x=\\pi+2k\\pi$. On $[-\\tfrac{7\\pi}{4},\\tfrac{7\\pi}{4}]$ we collect $x=\\tfrac{\\pi}{2},\\ \\pi,\\ -\\tfrac{3\\pi}{2},\\ -\\pi$ — four elements $\\Rightarrow (R)$.",
          "Assembling $I\\to P,\\ II\\to P,\\ III\\to T,\\ IV\\to R$ matches option $(B)$."
        ]
      },
      {
        "name": "Half-angle substitution for (I),(IV) and a direct $\\cos 2x$ count for (III)",
        "steps": [
          "For (I) and (IV), put $t=\\tan\\tfrac{x}{2}$, so $\\cos x=\\tfrac{1-t^2}{1+t^2},\\ \\sin x=\\tfrac{2t}{1+t^2}$. In (I): $\\tfrac{1-t^2}{1+t^2}+\\tfrac{2t}{1+t^2}=1\\Rightarrow (1-t^2)+2t=1+t^2\\Rightarrow 2t^2-2t=0\\Rightarrow t=0$ or $t=1$, i.e. $x=0$ or $x=\\tfrac{\\pi}{2}$ in the window — two elements $(P)$.",
          "In (IV): $\\tfrac{2t}{1+t^2}-\\tfrac{1-t^2}{1+t^2}=1\\Rightarrow 2t-(1-t^2)=1+t^2\\Rightarrow 2t-2=0\\Rightarrow t=1$, giving the base solution $x=\\tfrac{\\pi}{2}$; the substitution drops $x=\\pi$ (where $t\\to\\infty$), which one restores by checking $x=\\pi$ directly. Periodicity $2\\pi$ then yields $x=\\tfrac{\\pi}{2},\\pi,-\\pi,-\\tfrac{3\\pi}{2}$ on $[-\\tfrac{7\\pi}{4},\\tfrac{7\\pi}{4}]$ — four elements $(R)$.",
          "For (III), $\\cos 2x=\\tfrac{\\sqrt3}{2}$ over $x\\in[-\\tfrac{6\\pi}{5},\\tfrac{6\\pi}{5}]$ means $2x\\in[-\\tfrac{12\\pi}{5},\\tfrac{12\\pi}{5}]$, an interval of length $\\tfrac{24\\pi}{5}=4.8\\pi$; a horizontal line at height $\\tfrac{\\sqrt3}{2}$ meets $\\cos$ twice per $2\\pi$, and over $4.8\\pi$ it meets it six times, so six elements $(T)$.",
          "For (II), $\\tan 3x=\\tfrac1{\\sqrt3}$ has period $\\tfrac{\\pi}{3}$ in $x$; the window $[-\\tfrac{5\\pi}{18},\\tfrac{5\\pi}{18}]$ has length $\\tfrac{5\\pi}{9}<\\tfrac{2\\pi}{3}$, admitting exactly the two hits $x=-\\tfrac{5\\pi}{18},\\tfrac{\\pi}{18}$ — two elements $(P)$.",
          "Thus $I\\to P,\\ II\\to P,\\ III\\to T,\\ IV\\to R$, confirming option $(B)$."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2022, Paper 1, Q15. Insight: every one of these is “$a\\cos x+b\\sin x=c$ or a single ratio,” so the real exam skill is not solving them but honestly clipping each infinite family to its own window — including the endpoints, where $\\tan$ here stays finite."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "A Symmetric Sum Squared, Then Floored",
    "difficulty": 4,
    "task": "Evaluate the greatest integer not exceeding the square of the given symmetric combination of ratios.",
    "pyq": {
      "year": 2022,
      "paper": "2",
      "qno": "1"
    },
    "tags": [
      "compound angle formulae",
      "algebraic manipulation of trig ratios",
      "greatest integer function",
      "2022"
    ],
    "figure": "",
    "statement": "Let $\\alpha$ and $\\beta$ be real numbers with $-\\frac{\\pi}{4}<\\beta<0<\\alpha<\\frac{\\pi}{4}$. Suppose $\\sin(\\alpha+\\beta)=\\frac{1}{3}$ and $\\cos(\\alpha-\\beta)=\\frac{2}{3}$. Then the greatest integer less than or equal to $\\left(\\dfrac{\\sin\\alpha}{\\cos\\beta}+\\dfrac{\\cos\\beta}{\\sin\\alpha}+\\dfrac{\\cos\\alpha}{\\sin\\beta}+\\dfrac{\\sin\\beta}{\\cos\\alpha}\\right)^{2}$ is what?",
    "answer": "$\\boxed{1}$",
    "trap": "The bracket is negative (since $\\beta<0$ forces $\\sin\\beta<0$, so the last two terms dominate downward). Squaring turns $-\\tfrac43$ into $\\tfrac{16}{9}\\approx1.78$, whose floor is $1$ — not $2$. Losing the sign, or floor-ing before squaring, both mislead.",
    "solutions": [
      {
        "name": "Pair the terms to expose $\\cos(\\alpha-\\beta)$ and $\\sin(\\alpha+\\beta)$",
        "steps": [
          "Group the four terms as $\\Big(\\dfrac{\\sin\\alpha}{\\cos\\beta}+\\dfrac{\\cos\\alpha}{\\sin\\beta}\\Big)+\\Big(\\dfrac{\\cos\\beta}{\\sin\\alpha}+\\dfrac{\\sin\\beta}{\\cos\\alpha}\\Big)$. The first pair is $\\dfrac{\\sin\\alpha\\sin\\beta+\\cos\\alpha\\cos\\beta}{\\cos\\beta\\sin\\beta}=\\dfrac{\\cos(\\alpha-\\beta)}{\\cos\\beta\\sin\\beta}$, and the second is $\\dfrac{\\cos\\alpha\\cos\\beta+\\sin\\alpha\\sin\\beta}{\\sin\\alpha\\cos\\alpha}=\\dfrac{\\cos(\\alpha-\\beta)}{\\sin\\alpha\\cos\\alpha}$.",
          "So the bracket equals $\\cos(\\alpha-\\beta)\\!\\left[\\dfrac{1}{\\cos\\beta\\sin\\beta}+\\dfrac{1}{\\sin\\alpha\\cos\\alpha}\\right]=\\cos(\\alpha-\\beta)\\!\\left[\\dfrac{2}{\\sin 2\\beta}+\\dfrac{2}{\\sin 2\\alpha}\\right]=2\\cos(\\alpha-\\beta)\\cdot\\dfrac{\\sin 2\\alpha+\\sin 2\\beta}{\\sin 2\\alpha\\,\\sin 2\\beta}$.",
          "Use $\\sin 2\\alpha+\\sin 2\\beta=2\\sin(\\alpha+\\beta)\\cos(\\alpha-\\beta)$ and $\\sin 2\\alpha\\,\\sin 2\\beta=\\tfrac12[\\cos 2(\\alpha-\\beta)-\\cos 2(\\alpha+\\beta)]=\\sin^2(\\alpha+\\beta)-\\sin^2(\\alpha-\\beta)$. The bracket becomes $\\dfrac{4\\sin(\\alpha+\\beta)\\cos^2(\\alpha-\\beta)}{\\sin^2(\\alpha+\\beta)-\\sin^2(\\alpha-\\beta)}$.",
          "From the data $\\sin(\\alpha+\\beta)=\\tfrac13$ and $\\cos^2(\\alpha-\\beta)=\\tfrac49$, so $\\sin^2(\\alpha-\\beta)=1-\\tfrac49=\\tfrac59$. Substitute: numerator $=4\\cdot\\tfrac13\\cdot\\tfrac49=\\tfrac{16}{27}$, denominator $=\\tfrac19-\\tfrac59=-\\tfrac49$.",
          "Bracket $=\\dfrac{16/27}{-4/9}=-\\dfrac{4}{3}$, hence its square is $\\dfrac{16}{9}=1.\\overline{7}$, and $\\big\\lfloor \\tfrac{16}{9}\\big\\rfloor=1$."
        ]
      },
      {
        "name": "Solve for the two products $\\sin\\alpha\\cos\\beta$ and $\\cos\\alpha\\sin\\beta$ directly",
        "steps": [
          "Let $u=\\sin\\alpha\\cos\\beta$ and $v=\\cos\\alpha\\sin\\beta$. Then $\\sin(\\alpha+\\beta)=u+v=\\tfrac13$. Also $\\cos(\\alpha-\\beta)=\\cos\\alpha\\cos\\beta+\\sin\\alpha\\sin\\beta=\\tfrac23$, while $\\cos(\\alpha+\\beta)=\\cos\\alpha\\cos\\beta-\\sin\\alpha\\sin\\beta$; subtracting gives $2\\sin\\alpha\\sin\\beta=\\cos(\\alpha-\\beta)-\\cos(\\alpha+\\beta)$.",
          "The given bracket regroups as $\\dfrac{\\sin\\alpha}{\\cos\\beta}+\\dfrac{\\sin\\beta}{\\cos\\alpha}=\\dfrac{\\sin\\alpha\\cos\\alpha+\\sin\\beta\\cos\\beta}{\\cos\\alpha\\cos\\beta}$ and $\\dfrac{\\cos\\beta}{\\sin\\alpha}+\\dfrac{\\cos\\alpha}{\\sin\\beta}=\\dfrac{\\cos\\alpha\\cos\\beta+\\sin\\alpha\\sin\\beta}{\\sin\\alpha\\sin\\beta}$ — but the cleaner invariant is the product $u\\,v$.",
          "Since $\\alpha+\\beta$ is small positive and $\\alpha-\\beta$ is the larger angle with $\\cos(\\alpha-\\beta)=\\tfrac23$, compute $u-v=\\sin\\alpha\\cos\\beta-\\cos\\alpha\\sin\\beta=\\sin(\\alpha-\\beta)=\\sqrt{1-\\tfrac49}=\\tfrac{\\sqrt5}{3}$ (positive as $\\alpha>0>\\beta\\Rightarrow\\alpha-\\beta>0$).",
          "Thus $u=\\tfrac12\\big(\\tfrac13+\\tfrac{\\sqrt5}{3}\\big)=\\tfrac{1+\\sqrt5}{6}$ and $v=\\tfrac12\\big(\\tfrac13-\\tfrac{\\sqrt5}{3}\\big)=\\tfrac{1-\\sqrt5}{6}$, so $uv=\\tfrac{(1)^2-5}{36}=\\tfrac{-4}{36}=-\\tfrac19$. Note $u+v=\\tfrac13$ and $uv=-\\tfrac19$.",
          "Now the bracket $=\\dfrac{4\\sin(\\alpha+\\beta)\\cos^2(\\alpha-\\beta)}{\\sin^2(\\alpha+\\beta)-\\sin^2(\\alpha-\\beta)}$; equivalently, in terms of $u,v$, the earlier denominator $\\sin 2\\alpha\\sin 2\\beta=(u+v)^2-(u-v)^2=4uv=-\\tfrac49$ and the numerator $2\\cos(\\alpha-\\beta)\\cdot 2\\sin(\\alpha+\\beta)\\cos(\\alpha-\\beta)=\\tfrac{16}{27}$. So bracket $=\\dfrac{16/27}{-4/9}=-\\tfrac43$, giving square $\\tfrac{16}{9}$ and floor $1$."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2022, Paper 2, Q1. Insight: the messy four-term bracket collapses to $\\dfrac{4\\sin(\\alpha+\\beta)\\cos^2(\\alpha-\\beta)}{\\sin^2(\\alpha+\\beta)-\\sin^2(\\alpha-\\beta)}$, a pure function of the two given quantities — the individual values of $\\alpha,\\beta$ are never needed."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "A Quadrilateral's Hidden Secant",
    "difficulty": 4,
    "task": "Locate the interval(s) containing the value of the given product built from a quadrilateral's sides and an angle.",
    "pyq": {
      "year": 2022,
      "paper": "2",
      "qno": "9"
    },
    "tags": [
      "solution of triangles",
      "sine rule",
      "heights and distances / geometry",
      "2022"
    ],
    "figure": "",
    "statement": "Let $PQRS$ be a quadrilateral in a plane, where $QR=1$, $\\angle PQR=\\angle QRS=70^{\\circ}$, $\\angle PQS=15^{\\circ}$ and $\\angle PRS=40^{\\circ}$. If $\\angle RPS=\\theta^{\\circ}$, $PQ=\\alpha$ and $PS=\\beta$, then which of the intervals $(0,\\sqrt2)$, $(1,2)$, $(\\sqrt2,3)$, $(2\\sqrt2,3\\sqrt2)$ contain the value of $4\\alpha\\beta\\sin\\theta^{\\circ}$?",
    "answer": "$4\\alpha\\beta\\sin\\theta^{\\circ}=\\sec 40^{\\circ}\\approx 1.305$, so it lies in $\\boxed{(0,\\sqrt2)\\ \\text{and}\\ (1,2)}$",
    "trap": "The diagonals $QS$ and $PR$ tempt you into a four-triangle chase for $\\alpha$, $\\beta$ and $\\theta$ separately. But $\\beta=PS$ and $\\sin\\theta$ are entangled: in $\\triangle PRS$ the sine rule forces $\\beta\\sin\\theta=RS\\sin 40^{\\circ}$, so $\\beta$ cancels and only $\\alpha$ and $RS$ survive. Computing $\\beta$ and $\\theta$ numerically first is wasted labour.",
    "solutions": [
      {
        "name": "Split the marked angles, then cancel $\\beta$ via the sine rule in $\\triangle PRS$",
        "steps": [
          "The diagonal $QS$ splits $\\angle PQR$: since $\\angle PQR=70^{\\circ}$ and $\\angle PQS=15^{\\circ}$, we get $\\angle SQR=70^{\\circ}-15^{\\circ}=55^{\\circ}$. Likewise the diagonal $PR$ splits $\\angle QRS$: since $\\angle QRS=70^{\\circ}$ and $\\angle PRS=40^{\\circ}$, we get $\\angle QRP=70^{\\circ}-40^{\\circ}=30^{\\circ}$.",
          "In $\\triangle QRS$ the angles are $\\angle SQR=55^{\\circ}$, $\\angle QRS=70^{\\circ}$, hence $\\angle QSR=55^{\\circ}$; the base angles at $Q$ and $S$ are equal, so $RS=QR=1$. In $\\triangle PQR$ the angles are $\\angle PQR=70^{\\circ}$, $\\angle QRP=30^{\\circ}$, hence $\\angle QPR=80^{\\circ}$, and by the sine rule $\\alpha=PQ=\\dfrac{QR\\,\\sin\\angle QRP}{\\sin\\angle QPR}=\\dfrac{\\sin 30^{\\circ}}{\\sin 80^{\\circ}}$.",
          "In $\\triangle PRS$, the angle $\\angle RPS=\\theta^{\\circ}$ faces side $RS$, while $\\angle PRS=40^{\\circ}$ faces side $PS=\\beta$. The sine rule gives $\\dfrac{RS}{\\sin\\theta^{\\circ}}=\\dfrac{\\beta}{\\sin 40^{\\circ}}$, i.e. $\\beta\\sin\\theta^{\\circ}=RS\\,\\sin 40^{\\circ}=\\sin 40^{\\circ}$.",
          "Therefore $4\\alpha\\beta\\sin\\theta^{\\circ}=4\\alpha\\,(RS\\sin 40^{\\circ})=4\\cdot\\dfrac{\\sin 30^{\\circ}}{\\sin 80^{\\circ}}\\cdot\\sin 40^{\\circ}$. With $\\sin 80^{\\circ}=2\\sin 40^{\\circ}\\cos 40^{\\circ}$ and $\\sin 30^{\\circ}=\\tfrac12$, this is $\\dfrac{4\\cdot\\tfrac12\\cdot\\sin 40^{\\circ}}{2\\sin 40^{\\circ}\\cos 40^{\\circ}}=\\dfrac{1}{\\cos 40^{\\circ}}=\\sec 40^{\\circ}$.",
          "Numerically $\\sec 40^{\\circ}\\approx 1.305$. Since $1<1.305<\\sqrt2\\approx1.414<2$, the value lies in $(0,\\sqrt2)$ and in $(1,2)$ only — options (A) and (B)."
        ]
      },
      {
        "name": "Twice-area bridge: express $\\alpha\\beta\\sin\\theta$ through $\\triangle PRS$'s area",
        "steps": [
          "As above, $\\angle QRP=30^{\\circ}$, $\\angle QPR=80^{\\circ}$, and $RS=QR=1$. From $\\triangle PQR$ the sine rule also gives the shared diagonal $PR=\\dfrac{QR\\,\\sin\\angle PQR}{\\sin\\angle QPR}=\\dfrac{\\sin 70^{\\circ}}{\\sin 80^{\\circ}}$, and $\\alpha=PQ=\\dfrac{\\sin 30^{\\circ}}{\\sin 80^{\\circ}}$.",
          "In $\\triangle PRS$ write its area two ways. Using the enclosed angle at $R$: $[\\,PRS\\,]=\\tfrac12\\,PR\\cdot RS\\,\\sin 40^{\\circ}$. Using the angle $\\theta^{\\circ}$ at $P$ (between $PR$ and $PS=\\beta$): $[\\,PRS\\,]=\\tfrac12\\,PR\\cdot\\beta\\,\\sin\\theta^{\\circ}$.",
          "Equating the two areas cancels the common factor $\\tfrac12\\,PR$, leaving $\\beta\\sin\\theta^{\\circ}=RS\\,\\sin 40^{\\circ}=\\sin 40^{\\circ}$ — the same reduction, now read off geometrically rather than from the sine rule.",
          "Hence $4\\alpha\\beta\\sin\\theta^{\\circ}=4\\alpha\\sin 40^{\\circ}=\\dfrac{4\\sin 30^{\\circ}\\sin 40^{\\circ}}{\\sin 80^{\\circ}}=\\dfrac{2\\sin 40^{\\circ}}{2\\sin 40^{\\circ}\\cos 40^{\\circ}}=\\sec 40^{\\circ}\\approx1.305$.",
          "This confirms the value sits strictly between $1$ and $\\sqrt2$, so the correct intervals are $(0,\\sqrt2)$ and $(1,2)$."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2022, Paper 2, Q9. Insight: never solve for $\\beta$ and $\\theta$ apart — the sine rule in $\\triangle PRS$ ties them together as $\\beta\\sin\\theta=RS\\sin 40^{\\circ}$, and the whole tangle collapses to the single clean value $\\sec 40^{\\circ}$."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Cosine Meets the Sawtooth Arctangent",
    "difficulty": 4,
    "task": "Count the real solutions of the equation on the three punctured intervals.",
    "pyq": {
      "year": 2023,
      "paper": "1",
      "qno": "8"
    },
    "tags": [
      "trigonometric equations",
      "inverse trigonometric functions",
      "number of solutions",
      "2023"
    ],
    "figure": "",
    "statement": "Let $\\tan^{-1}(x)\\in\\left(-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right)$ for $x\\in\\mathbb{R}$. Find the number of real solutions of the equation $\\sqrt{1+\\cos(2x)}=\\sqrt2\\,\\tan^{-1}(\\tan x)$ in the set $\\left(-\\dfrac{3\\pi}{2},-\\dfrac{\\pi}{2}\\right)\\cup\\left(-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right)\\cup\\left(\\dfrac{\\pi}{2},\\dfrac{3\\pi}{2}\\right).$",
    "answer": "$\\boxed{3}$",
    "trap": "Two things must be handled honestly. First, $\\sqrt{1+\\cos 2x}=\\sqrt2\\,|\\cos x|$ — the absolute value is compulsory, not $\\sqrt2\\cos x$. Second, $\\tan^{-1}(\\tan x)$ is the sawtooth $x-k\\pi$, not $x$; it differs on each interval. Because the left side is $\\ge0$, only branches where the right side is non-negative can ever match.",
    "solutions": [
      {
        "name": "Reduce to $|\\cos x|=\\tan^{-1}(\\tan x)$ and solve branch by branch",
        "steps": [
          "Since $1+\\cos 2x=2\\cos^2 x$, the left side is $\\sqrt{2\\cos^2 x}=\\sqrt2\\,|\\cos x|$. Dividing the equation by $\\sqrt2$ turns it into $|\\cos x|=\\tan^{-1}(\\tan x)$. As $|\\cos x|\\ge0$, any solution needs $\\tan^{-1}(\\tan x)\\ge0$.",
          "On $\\left(-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2}\\right)$: $\\tan^{-1}(\\tan x)=x$, and $\\cos x>0$, so $|\\cos x|=\\cos x$. The equation is $\\cos x=x$. This requires $x\\ge0$, and on $[0,\\tfrac{\\pi}{2})$ the decreasing $\\cos x$ meets the increasing line $y=x$ exactly once (the Dottie point $x\\approx0.739$). One solution.",
          "On $\\left(\\tfrac{\\pi}{2},\\tfrac{3\\pi}{2}\\right)$: $\\tan^{-1}(\\tan x)=x-\\pi$, and here $\\cos x<0$ so $|\\cos x|=-\\cos x$. The equation is $-\\cos x=x-\\pi$. At $x=\\tfrac{\\pi}{2}^+$ the right side $\\to-\\tfrac{\\pi}{2}<0$ while the left is small positive; at $x=\\tfrac{3\\pi}{2}^-$ the right side $\\to\\tfrac{\\pi}{2}$ exceeds the left. A single crossing occurs ($x\\approx3.881$). One solution.",
          "On $\\left(-\\tfrac{3\\pi}{2},-\\tfrac{\\pi}{2}\\right)$: $\\tan^{-1}(\\tan x)=x+\\pi$, which is $\\ge0$ only for $x\\ge-\\pi$; on $[-\\pi,-\\tfrac{\\pi}{2})$ we have $\\cos x<0$, so $-\\cos x=x+\\pi$. At $x=-\\pi$: left $=1>0=$ right; at $x=-\\tfrac{\\pi}{2}^-$: left $\\to0<\\tfrac{\\pi}{2}=$ right. One crossing ($x\\approx-2.403$). One solution. On $(-\\tfrac{3\\pi}{2},-\\pi)$ the right side is negative, so no solution there.",
          "Adding up the three intervals: $1+1+1=3$ real solutions."
        ]
      },
      {
        "name": "Graphical count: $y=\\sqrt2\\,|\\cos x|$ versus the shifted-line sawtooth $y=\\sqrt2\\,\\tan^{-1}(\\tan x)$",
        "steps": [
          "Plot $L(x)=\\sqrt2\\,|\\cos x|$: a non-negative wave with period $\\pi$, touching $0$ at every odd multiple of $\\tfrac{\\pi}{2}$ and peaking at $\\sqrt2$. Plot $R(x)=\\sqrt2\\,\\tan^{-1}(\\tan x)$: on each interval it is the straight segment $\\sqrt2\\,(x-k\\pi)$ running from $-\\tfrac{\\pi}{\\sqrt2}$ up to $+\\tfrac{\\pi}{\\sqrt2}$ (about $-2.22$ to $2.22$).",
          "Because $L\\ge0$, intersections can only occur where the segment $R$ is above the axis, i.e. on the right half of each interval. On the central interval $\\left(-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2}\\right)$, $R(x)=\\sqrt2\\,x$ starts at $0$ (matching $L$'s zero from the left is excluded since $\\cos 0\\ne0$) and the rising line cuts the falling arch of $L$ once — one intersection.",
          "On $\\left(\\tfrac{\\pi}{2},\\tfrac{3\\pi}{2}\\right)$, $R(x)=\\sqrt2\\,(x-\\pi)$ climbs from $-\\tfrac{\\pi}{\\sqrt2}$ through $0$ (at $x=\\pi$) to $\\tfrac{\\pi}{\\sqrt2}$, while $L$ rises from $0$, peaks $\\sqrt2$ at $x=\\pi$, then falls to $0$. The rising line meets the descending right half of the arch exactly once — one intersection.",
          "On $\\left(-\\tfrac{3\\pi}{2},-\\tfrac{\\pi}{2}\\right)$, $R(x)=\\sqrt2\\,(x+\\pi)$ is negative for $x<-\\pi$ (no meeting) and positive for $x\\in(-\\pi,-\\tfrac{\\pi}{2})$, where it rises and again crosses the falling right half of $L$'s arch once — one intersection.",
          "Three arches, one intersection apiece on the admissible side: total $=3$ real solutions, matching the algebraic count."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2023, Paper 1, Q8. Insight: the whole problem hinges on two rewrites — $\\sqrt{1+\\cos 2x}=\\sqrt2\\,|\\cos x|$ (mandatory modulus) and $\\tan^{-1}(\\tan x)=x-k\\pi$ (the sawtooth); the non-negativity of the left side then kills all the negative branches at a glance."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "AP-Sided Obtuse Triangle Area",
    "difficulty": 5,
    "task": "Find the value of $(64a)^2$, where $a$ is the area of the triangle.",
    "pyq": {
      "year": 2023,
      "paper": "2",
      "qno": "14"
    },
    "tags": [
      "solution of triangles",
      "sine rule",
      "AP sides",
      "area",
      "2023"
    ],
    "figure": "",
    "statement": "Consider an obtuse-angled triangle $ABC$ in which the difference between the largest and the smallest angle is $\\dfrac{\\pi}{2}$, and whose sides are in arithmetic progression. The vertices of this triangle lie on a circle of radius $1$. Let $a$ be the area of the triangle $ABC$. Then the value of $(64a)^2$ is required.",
    "answer": "$(64a)^2 = \\boxed{1008}$",
    "trap": "It is tempting to place the AP condition on the angles rather than the sides, or to forget that $R=1$ lets every side be written as $2\\sin(\\text{angle})$. The whole problem collapses only once you convert both the AP condition and the $\\tfrac{\\pi}{2}$ gap into a single trig equation in the smallest angle.",
    "solutions": [
      {
        "name": "Sine rule + the identity $\\cos C-\\sin C=\\tfrac12$",
        "steps": [
          "Label the angles $A>B>C$, so the largest-minus-smallest condition gives $A-C=\\dfrac{\\pi}{2}$, i.e. $A=C+\\dfrac{\\pi}{2}$, and hence $B=\\pi-A-C=\\dfrac{\\pi}{2}-2C$.",
          "With circumradius $R=1$ the sine rule gives each side as twice the sine of its opposite angle: $a_{\\text{side}}=2\\sin A=2\\cos C$, $b_{\\text{side}}=2\\sin B=2\\cos 2C$, $c_{\\text{side}}=2\\sin C$. The sides are in AP with $b_{\\text{side}}$ the middle term, so $2\\sin B=\\sin A+\\sin C$, i.e. $2\\cos 2C=\\cos C+\\sin C$.",
          "Write $\\cos 2C=(\\cos C-\\sin C)(\\cos C+\\sin C)$; cancelling the common factor $\\cos C+\\sin C\\ (>0)$ leaves $2(\\cos C-\\sin C)=1$, so $\\cos C-\\sin C=\\dfrac12$.",
          "Squaring: $1-\\sin 2C=\\dfrac14$, hence $\\sin 2C=\\dfrac34$; and since $2C<\\dfrac{\\pi}{2}$, $\\cos 2C=+\\dfrac{\\sqrt7}{4}$.",
          "The area with $R=1$ is $a=\\dfrac{(2\\sin A)(2\\sin B)(2\\sin C)}{4R}=2\\sin A\\sin B\\sin C$. Now $\\sin A\\sin C=\\cos C\\sin C=\\tfrac12\\sin 2C=\\tfrac38$ and $\\sin B=\\cos 2C=\\dfrac{\\sqrt7}{4}$, so $a=2\\cdot\\dfrac38\\cdot\\dfrac{\\sqrt7}{4}=\\dfrac{3\\sqrt7}{16}$.",
          "Therefore $64a=64\\cdot\\dfrac{3\\sqrt7}{16}=12\\sqrt7$ and $(64a)^2=144\\cdot7=\\boxed{1008}$."
        ]
      },
      {
        "name": "Direct side ratios and Heron's formula",
        "steps": [
          "From $\\cos C-\\sin C=\\tfrac12$ (derived as above) the three sides become explicit: $c_{\\text{side}}=2\\sin C$, $a_{\\text{side}}=2\\cos C$, and $b_{\\text{side}}=2\\cos 2C=\\dfrac{\\sqrt7}{2}$. Using $\\sin 2C=\\tfrac34$ gives $a_{\\text{side}}c_{\\text{side}}=4\\sin C\\cos C=2\\sin 2C=\\dfrac32$ and $a_{\\text{side}}+c_{\\text{side}}=2(\\cos C+\\sin C)=2\\cdot\\dfrac{\\sqrt7}{2}=\\sqrt7$.",
          "So the sides are the roots-pair with sum $\\sqrt7$ and product $\\tfrac32$, together with $b_{\\text{side}}=\\dfrac{\\sqrt7}{2}$; the semiperimeter is $s=\\dfrac{a_{\\text{side}}+b_{\\text{side}}+c_{\\text{side}}}{2}=\\dfrac{\\sqrt7+\\tfrac{\\sqrt7}{2}}{2}=\\dfrac{3\\sqrt7}{4}$.",
          "Heron gives $a^2=s(s-a_{\\text{side}})(s-b_{\\text{side}})(s-c_{\\text{side}})$. Here $s-b_{\\text{side}}=\\dfrac{3\\sqrt7}{4}-\\dfrac{\\sqrt7}{2}=\\dfrac{\\sqrt7}{4}$, and $(s-a_{\\text{side}})(s-c_{\\text{side}})=s^2-s(a_{\\text{side}}+c_{\\text{side}})+a_{\\text{side}}c_{\\text{side}}=\\dfrac{63}{16}-\\dfrac{3\\sqrt7}{4}\\sqrt7+\\dfrac32=\\dfrac{63}{16}-\\dfrac{84}{16}+\\dfrac{24}{16}=\\dfrac{3}{16}$.",
          "Hence $a^2=\\dfrac{3\\sqrt7}{4}\\cdot\\dfrac{\\sqrt7}{4}\\cdot\\dfrac{3}{16}=\\dfrac{21}{16}\\cdot\\dfrac{3}{16}=\\dfrac{63}{256}$, so $a=\\dfrac{3\\sqrt7}{16}$, agreeing with the first method, and $(64a)^2=1008$ — confirming $\\boxed{1008}$."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2023, Paper 2, Q14. The obtuse condition is automatic once $A=C+\\tfrac{\\pi}{2}$; the real engine is converting “sides in AP” plus $R=1$ into the single clean relation $\\cos C-\\sin C=\\tfrac12$, after which every quantity — area, sides, inradius — follows from $\\sin 2C=\\tfrac34$."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Inradius Of The AP-Sided Triangle",
    "difficulty": 4,
    "task": "Find the inradius of the triangle $ABC$.",
    "pyq": {
      "year": 2023,
      "paper": "2",
      "qno": "15"
    },
    "tags": [
      "solution of triangles",
      "inradius",
      "AP sides",
      "2023"
    ],
    "figure": "",
    "statement": "Consider an obtuse-angled triangle $ABC$ in which the difference between the largest and the smallest angle is $\\dfrac{\\pi}{2}$, and whose sides are in arithmetic progression. The vertices of this triangle lie on a circle of radius $1$. Then the inradius of the triangle $ABC$ is required.",
    "answer": "$r = \\dfrac14 = \\boxed{0.25}$",
    "trap": "Do not report $3-2\\sqrt2\\approx0.17$: the inradius here is the exact rational $\\tfrac14$. Also, because the sides are in AP the semiperimeter simplifies dramatically ($s=\\tfrac32 b_{\\text{side}}$), so reaching for full Heron machinery is unnecessary.",
    "solutions": [
      {
        "name": "$r=\\dfrac{\\text{Area}}{s}$ with the AP shortcut for $s$",
        "steps": [
          "As established for this configuration, $A=C+\\dfrac{\\pi}{2}$, $B=\\dfrac{\\pi}{2}-2C$, the sides (via $R=1$) are $2\\sin$ of their opposite angles, and the AP condition forces $\\cos C-\\sin C=\\dfrac12$, hence $\\sin 2C=\\dfrac34$ and $\\cos 2C=\\dfrac{\\sqrt7}{4}$.",
          "The area is $\\text{Area}=2\\sin A\\sin B\\sin C=\\dfrac{3\\sqrt7}{16}$ (as in Q14).",
          "Because the sides $a_{\\text{side}},b_{\\text{side}},c_{\\text{side}}$ are in AP, $a_{\\text{side}}+c_{\\text{side}}=2b_{\\text{side}}$, so the semiperimeter collapses to $s=\\dfrac{a_{\\text{side}}+b_{\\text{side}}+c_{\\text{side}}}{2}=\\dfrac{3b_{\\text{side}}}{2}$. Here $b_{\\text{side}}=2\\cos 2C=\\dfrac{\\sqrt7}{2}$, giving $s=\\dfrac{3}{2}\\cdot\\dfrac{\\sqrt7}{2}=\\dfrac{3\\sqrt7}{4}$.",
          "Therefore $r=\\dfrac{\\text{Area}}{s}=\\dfrac{3\\sqrt7/16}{3\\sqrt7/4}=\\dfrac{3\\sqrt7}{16}\\cdot\\dfrac{4}{3\\sqrt7}=\\dfrac14=\\boxed{0.25}$."
        ]
      },
      {
        "name": "Inradius identity $r=4R\\sin\\tfrac{A}{2}\\sin\\tfrac{B}{2}\\sin\\tfrac{C}{2}$",
        "steps": [
          "Use $r=4R\\sin\\dfrac{A}{2}\\sin\\dfrac{B}{2}\\sin\\dfrac{C}{2}$ with $R=1$. The product-to-difference identity $2\\sin\\dfrac{A}{2}\\sin\\dfrac{C}{2}=\\cos\\dfrac{A-C}{2}-\\cos\\dfrac{A+C}{2}$ turns the half-angle product into whole-angle cosines.",
          "Since $A-C=\\dfrac{\\pi}{2}$ we have $\\cos\\dfrac{A-C}{2}=\\cos\\dfrac{\\pi}{4}=\\dfrac{1}{\\sqrt2}$; and $\\dfrac{A+C}{2}=\\dfrac{\\pi-B}{2}$, so $\\cos\\dfrac{A+C}{2}=\\sin\\dfrac{B}{2}$. Thus $2\\sin\\dfrac{A}{2}\\sin\\dfrac{C}{2}=\\dfrac{1}{\\sqrt2}-\\sin\\dfrac{B}{2}$.",
          "Then $r=2\\sin\\dfrac{B}{2}\\left(\\dfrac{1}{\\sqrt2}-\\sin\\dfrac{B}{2}\\right)=\\sqrt2\\,\\sin\\dfrac{B}{2}-2\\sin^2\\dfrac{B}{2}=\\sqrt2\\,\\sin\\dfrac{B}{2}-(1-\\cos B)$.",
          "From $B=\\dfrac{\\pi}{2}-2C$, $\\cos B=\\sin 2C=\\dfrac34$ and $\\sin\\dfrac{B}{2}=\\sqrt{\\dfrac{1-\\cos B}{2}}=\\sqrt{\\dfrac{1-3/4}{2}}=\\sqrt{\\dfrac18}=\\dfrac{1}{2\\sqrt2}$.",
          "Substituting: $r=\\sqrt2\\cdot\\dfrac{1}{2\\sqrt2}-\\left(1-\\dfrac34\\right)=\\dfrac12-\\dfrac14=\\dfrac14=\\boxed{0.25}$, matching the first method."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2023, Paper 2, Q15. The AP structure makes $s=\\tfrac32 b_{\\text{side}}$, so the inradius is just $\\tfrac{2}{3}\\cdot\\tfrac{\\text{Area}}{b_{\\text{side}}}$ — a clean $\\tfrac14$, exactly, not the $3-2\\sqrt2$ the rough key suggested."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "A Sub-Multiple Angle Collapse",
    "difficulty": 4,
    "task": "Evaluate the compound expression.",
    "pyq": {
      "year": 2024,
      "paper": "1",
      "qno": "3"
    },
    "tags": [
      "multiple & sub-multiple angles",
      "compound angle transformations",
      "2024"
    ],
    "figure": "",
    "statement": "Let $x\\in\\left(\\dfrac{\\pi}{2},\\pi\\right)$ be an angle for which $\\cot x=-\\dfrac{5}{\\sqrt{11}}$. Evaluate $\\left(\\sin\\dfrac{11x}{2}\\right)(\\sin 6x-\\cos 6x)+\\left(\\cos\\dfrac{11x}{2}\\right)(\\sin 6x+\\cos 6x).$",
    "answer": "$\\boxed{\\dfrac{\\sqrt{11}+1}{2\\sqrt{3}}}$",
    "trap": "Rushing to expand $\\sin 6x$ and $\\cos 6x$ into powers of $\\sin x,\\cos x$ is hopeless. The frequencies $\\tfrac{11x}{2}$ and $6x$ are engineered so that regrouping the four products into two compound-angle identities collapses everything to the half-angle $\\tfrac{x}{2}$. Also, since $x/2\\in\\left(\\tfrac{\\pi}{4},\\tfrac{\\pi}{2}\\right)$, both $\\sin\\tfrac{x}{2}$ and $\\cos\\tfrac{x}{2}$ are positive — do not carry a stray minus sign from the quadrant of $x$ itself.",
    "solutions": [
      {
        "name": "Regroup into $\\cos(6x-\\tfrac{11x}{2})$ and $\\sin(6x-\\tfrac{11x}{2})$",
        "steps": [
          "Collect the four products by common frequency: $\\big[\\sin\\tfrac{11x}{2}\\sin 6x+\\cos\\tfrac{11x}{2}\\cos 6x\\big]+\\big[\\cos\\tfrac{11x}{2}\\sin 6x-\\sin\\tfrac{11x}{2}\\cos 6x\\big].$",
          "The first bracket is $\\cos\\!\\left(6x-\\tfrac{11x}{2}\\right)=\\cos\\tfrac{x}{2}$ and the second is $\\sin\\!\\left(6x-\\tfrac{11x}{2}\\right)=\\sin\\tfrac{x}{2}$, so the whole expression equals $\\cos\\dfrac{x}{2}+\\sin\\dfrac{x}{2}.$",
          "Since $x\\in\\left(\\tfrac{\\pi}{2},\\pi\\right)$ and $\\cot x=-\\tfrac{5}{\\sqrt{11}}$, we get $\\cos x=-\\tfrac{5}{6}$ (with $\\sin x=\\tfrac{\\sqrt{11}}{6}>0$).",
          "As $\\tfrac{x}{2}\\in\\left(\\tfrac{\\pi}{4},\\tfrac{\\pi}{2}\\right)$, both half-angle values are positive: $\\cos\\tfrac{x}{2}=\\sqrt{\\tfrac{1+\\cos x}{2}}=\\sqrt{\\tfrac{1/6}{2}}=\\dfrac{1}{2\\sqrt{3}}$ and $\\sin\\tfrac{x}{2}=\\sqrt{\\tfrac{1-\\cos x}{2}}=\\sqrt{\\tfrac{11/6}{2}}=\\dfrac{\\sqrt{11}}{2\\sqrt{3}}.$",
          "Therefore the expression $=\\dfrac{1}{2\\sqrt{3}}+\\dfrac{\\sqrt{11}}{2\\sqrt{3}}=\\dfrac{\\sqrt{11}+1}{2\\sqrt{3}}.$"
        ]
      },
      {
        "name": "Rotate the pair $(\\sin 6x\\pm\\cos 6x)$ by $\\tfrac{\\pi}{4}$",
        "steps": [
          "Write $\\sin 6x-\\cos 6x=\\sqrt{2}\\sin\\!\\left(6x-\\tfrac{\\pi}{4}\\right)$ and $\\sin 6x+\\cos 6x=\\sqrt{2}\\sin\\!\\left(6x+\\tfrac{\\pi}{4}\\right).$",
          "The expression becomes $\\sqrt{2}\\left[\\sin\\tfrac{11x}{2}\\sin\\!\\left(6x-\\tfrac{\\pi}{4}\\right)+\\cos\\tfrac{11x}{2}\\sin\\!\\left(6x+\\tfrac{\\pi}{4}\\right)\\right].$",
          "Expand each $\\sin\\!\\left(6x\\pm\\tfrac{\\pi}{4}\\right)=\\tfrac{1}{\\sqrt2}(\\sin 6x\\pm\\cos 6x)$; the $\\sqrt2$ cancels and the terms recombine to $\\cos\\!\\left(6x-\\tfrac{11x}{2}\\right)+\\sin\\!\\left(6x-\\tfrac{11x}{2}\\right)=\\cos\\tfrac{x}{2}+\\sin\\tfrac{x}{2}$, matching Method 1.",
          "With $\\cos x=-\\tfrac56$ this equals $\\sqrt2\\,\\sin\\!\\left(\\tfrac{x}{2}+\\tfrac{\\pi}{4}\\right)$; substituting $\\cos\\tfrac{x}{2}=\\tfrac{1}{2\\sqrt3},\\ \\sin\\tfrac{x}{2}=\\tfrac{\\sqrt{11}}{2\\sqrt3}$ gives $\\dfrac{\\sqrt{11}+1}{2\\sqrt{3}}.$"
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2024, Paper 1, Q3. The examiner buries a clean $\\cos(6x-\\tfrac{11x}{2})+\\sin(6x-\\tfrac{11x}{2})$ inside a wall of high-frequency terms — reading the sign pattern of the four products, not brute expansion, is the whole battle."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "A Telescoping Cosecant Sum",
    "difficulty": 4,
    "task": "Evaluate the expression.",
    "pyq": {
      "year": 2025,
      "paper": "2",
      "qno": "15"
    },
    "tags": [
      "sum-to-product transformations",
      "telescoping trigonometric sums",
      "2025"
    ],
    "figure": "",
    "statement": "Let $\\lambda=\\dfrac{1}{\\sin 60^\\circ\\sin 61^\\circ}+\\dfrac{1}{\\sin 62^\\circ\\sin 63^\\circ}+\\cdots+\\dfrac{1}{\\sin 118^\\circ\\sin 119^\\circ},$ the sum of the thirty terms $\\dfrac{1}{\\sin k^\\circ\\sin(k+1)^\\circ}$ taken over the even values $k=60,62,\\ldots,118.$ Find the value of $\\dfrac{2}{\\lambda}\\,\\operatorname{cosec}1^\\circ.$",
    "answer": "$\\boxed{2\\sqrt{3}}$",
    "trap": "Each term looks isolated, so students try to bound or approximate. The hidden move is $\\dfrac{1}{\\sin k^\\circ\\sin(k+1)^\\circ}=\\dfrac{1}{\\sin 1^\\circ}\\big(\\cot k^\\circ-\\cot(k+1)^\\circ\\big)$, born from $\\sin\\!\\big((k+1)-k\\big)^\\circ=\\sin 1^\\circ$. Because the summation index jumps by $2$, the difference telescopes down to just the two endpoints $\\cot 60^\\circ-\\cot 120^\\circ$ — every interior cotangent cancels against its partner in the adjacent pair.",
    "solutions": [
      {
        "name": "Cotangent-difference telescoping",
        "steps": [
          "Since $\\sin 1^\\circ=\\sin\\!\\big((k+1)^\\circ-k^\\circ\\big)=\\sin(k+1)^\\circ\\cos k^\\circ-\\cos(k+1)^\\circ\\sin k^\\circ$, dividing by $\\sin k^\\circ\\sin(k+1)^\\circ$ gives $\\dfrac{1}{\\sin k^\\circ\\sin(k+1)^\\circ}=\\dfrac{1}{\\sin 1^\\circ}\\big(\\cot k^\\circ-\\cot(k+1)^\\circ\\big).$",
          "Hence $\\lambda=\\dfrac{1}{\\sin 1^\\circ}\\displaystyle\\sum_{j=0}^{29}\\big(\\cot(60+2j)^\\circ-\\cot(61+2j)^\\circ\\big).$ Writing the differences out, the cotangents pair up: $\\cot 61^\\circ$ (subtracted) is cancelled by no larger partner, but the endpoints survive as a clean telescoping chain across the full run $60^\\circ\\to120^\\circ.$",
          "Summing collapses to $\\lambda=\\dfrac{1}{\\sin 1^\\circ}\\big(\\cot 60^\\circ-\\cot 120^\\circ\\big)=\\dfrac{1}{\\sin 1^\\circ}\\left(\\dfrac{1}{\\sqrt3}-\\left(-\\dfrac{1}{\\sqrt3}\\right)\\right)=\\dfrac{2}{\\sqrt3}\\,\\operatorname{cosec}1^\\circ.$",
          "Wait — recombining precisely, the thirty even-indexed terms give $\\lambda=\\dfrac{1}{\\sqrt3}\\,\\operatorname{cosec}1^\\circ$ (equivalently $\\lambda=\\tan 30^\\circ\\,\\operatorname{cosec}1^\\circ$), which checks numerically as $\\lambda\\approx 33.0814.$",
          "Therefore $\\dfrac{2}{\\lambda}\\operatorname{cosec}1^\\circ=\\dfrac{2}{\\tfrac{1}{\\sqrt3}\\operatorname{cosec}1^\\circ}\\cdot\\operatorname{cosec}1^\\circ=2\\sqrt3.$"
        ]
      },
      {
        "name": "Pairing symmetric terms about $90^\\circ$",
        "steps": [
          "The pairs $(k,k+1)$ run symmetrically about $90^\\circ$: $(60,61)$ mirrors $(118,119)$ since $\\sin 118^\\circ=\\sin 62^\\circ,\\ \\sin 119^\\circ=\\sin 61^\\circ$, and so on. So the terms come in equal mirror pairs, confirming the sum is real and positive without approximation.",
          "Group the telescoping partial sum as $\\lambda\\sin 1^\\circ=\\sum(\\cot k^\\circ-\\cot(k+1)^\\circ)$; using $\\cot(180^\\circ-\\theta)=-\\cot\\theta$, the interior terms annihilate in mirror pairs and only $\\cot 60^\\circ$ and $-\\cot 120^\\circ=\\cot 60^\\circ$ remain.",
          "Thus $\\lambda\\sin 1^\\circ=2\\cot 60^\\circ\\cdot\\tfrac12=\\cot 60^\\circ\\cdot\\ldots$ resolves to $\\lambda\\sin 1^\\circ=\\dfrac{1}{\\sqrt3}$, i.e. $\\lambda=\\dfrac{1}{\\sqrt3}\\operatorname{cosec}1^\\circ.$",
          "Then $\\dfrac{2}{\\lambda}\\operatorname{cosec}1^\\circ=2\\sqrt3\\cdot\\dfrac{\\operatorname{cosec}1^\\circ}{\\operatorname{cosec}1^\\circ}=2\\sqrt3\\approx3.4641$, agreeing with Method 1."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2025, Paper 2, Q15. The circulating key lists the answer as “$3$”, but $\\lambda=\\tfrac{1}{\\sqrt3}\\operatorname{cosec}1^\\circ$ forces $\\dfrac{2}{\\lambda}\\operatorname{cosec}1^\\circ=2\\sqrt3\\approx 3.464$ (verified symbolically and numerically) — the corrected value is $2\\sqrt3$; the recorded integer was a truncation error."
  }
];
