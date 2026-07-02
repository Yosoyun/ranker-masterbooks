/* problems.js — DATA. 100 original differential-equations problems for dy/dx · Solving the Equations of Change, strictly within the JEE Advanced syllabus: order & degree, formation, and FIRST-ORDER FIRST-DEGREE equations only — variables separable and reducible-to-separable, homogeneous and reducible-to-homogeneous, linear equations and the integrating factor, initial-value problems, geometric applications, and growth/decay/cooling/mixing. No exact equations, Bernoulli, Clairaut, singular solutions, orthogonal trajectories, isobaric or second-order equations. Adversarially verified in sympy. statement/answer are raw LaTeX (the app auto-detects prose+math); steps use $...$ and $$...$$. */
window.PROBLEMS = [
  {
    "theme": "formation",
    "themeLabel": "Formation, Order & Degree",
    "title": "Two Exponentials, One Operator",
    "difficulty": 3,
    "task": "Determine",
    "tags": [
      "elimination",
      "exponential",
      "linear ode",
      "order"
    ],
    "statement": "The curves $y=Ae^{2x}+Be^{3x}$, with $A,B$ arbitrary real constants, all satisfy one common differential equation obtained by eliminating $A$ and $B$. Form that differential equation and state its order and degree.",
    "answer": "\\[\\boxed{y''-5y'+6y=0,\\quad \\text{order }2,\\ \\text{degree }1}\\]",
    "trap": "Differentiating only once and trying to kill both constants from $y$ and $y'$ alone: two independent constants need two differentiations, so a single derivative cannot eliminate them and gives no valid first-order ODE.",
    "solutions": [
      {
        "name": "Characteristic-root reverse engineering",
        "steps": [
          "The two basis functions $e^{2x},e^{3x}$ are solutions of a constant-coefficient linear ODE whose characteristic roots are exactly $2$ and $3$.",
          "Hence the characteristic polynomial is $(m-2)(m-3)=m^2-5m+6$, giving the operator $D^2-5D+6$.",
          "Therefore $y''-5y'+6y=0$; it is linear with two essential constants, so order $2$, degree $1$."
        ]
      },
      {
        "name": "Direct elimination",
        "steps": [
          "From $y=Ae^{2x}+Be^{3x}$ compute $y'=2Ae^{2x}+3Be^{3x}$ and $y''=4Ae^{2x}+9Be^{3x}$.",
          "Treat $u=Ae^{2x},v=Be^{3x}$: then $y=u+v,\\ y'=2u+3v,\\ y''=4u+9v$. Solve the first two for $u=3y-y',\\ v=y'-2y$.",
          "Substitute into $y''=4u+9v=4(3y-y')+9(y'-2y)=5y'-6y$, i.e. $y''-5y'+6y=0$ (order $2$, degree $1$)."
        ]
      }
    ],
    "remark": "Insight: a family built from $e^{r_1x},e^{r_2x}$ is the kernel of $(D-r_1)(D-r_2)$ — you can read the ODE straight off the roots without any algebra."
  },
  {
    "theme": "formation",
    "themeLabel": "Formation, Order & Degree",
    "title": "The Disguised Constant",
    "difficulty": 3,
    "task": "Determine",
    "tags": [
      "essential constants",
      "exponential",
      "order",
      "hidden dependency"
    ],
    "statement": "A student writes the family $y=Ae^{x+B}+C$ with three arbitrary constants $A,B,C$ and concludes its differential equation must have order $3$. Form the differential equation honestly and determine its true order and degree.",
    "answer": "\\[\\boxed{y''-y'=0,\\quad \\text{order }2,\\ \\text{degree }1}\\]",
    "trap": "Counting symbols instead of essential constants: $Ae^{x+B}=(Ae^{B})e^{x}$, so $A$ and $B$ collapse into a single constant. There are only two essential constants, so the order is $2$, not $3$.",
    "solutions": [
      {
        "name": "Collapse then eliminate",
        "steps": [
          "Write $Ae^{x+B}=(Ae^{B})e^{x}=De^{x}$, so $y=De^{x}+C$ with only the two essential constants $D,C$.",
          "Differentiate: $y'=De^{x}$ and $y''=De^{x}$, hence $y''=y'$, i.e. $y''-y'=0$.",
          "Two essential constants and highest derivative to the first power give order $2$, degree $1$."
        ]
      },
      {
        "name": "Rank of the constant-Jacobian",
        "steps": [
          "List $y,y',y'',y'''$ and form the Jacobian of these with respect to $(A,B,C)$.",
          "Because $A,B$ enter only through the product $Ae^{B}$, this Jacobian has rank $2$, not $3$, for all $x$.",
          "The number of essential constants equals that rank, $2$, so the eliminated ODE is the order-two equation $y''-y'=0$, degree $1$."
        ]
      }
    ],
    "remark": "Insight: 'order = number of arbitrary constants' is a lie unless the constants are essential (independent). Always test whether two symbols can be fused into one before counting."
  },
  {
    "theme": "formation",
    "themeLabel": "Formation, Order & Degree",
    "title": "Circles That Salute the Origin",
    "difficulty": 3,
    "task": "Form the differential equation and state its order and degree.",
    "tags": [
      "elimination",
      "circles",
      "geometry",
      "order",
      "degree"
    ],
    "statement": "Consider the family of all circles that pass through the origin and have their centres on the $x$-axis. A typical member is $x^2+y^2=2ax$, where $a$ is an arbitrary real constant. Eliminate $a$ to form the differential equation of this family, and state its order and degree.",
    "answer": "\\[\\boxed{2xy\\,y'=y^2-x^2,\\quad \\text{order }1,\\ \\text{degree }1}\\]",
    "trap": "Re-using the radius as a second constant and writing $(x-a)^2+y^2=a^2$ then trying to eliminate two symbols: here the through-origin condition forces the radius to equal $|a|$, so there is only ONE essential constant. Counting two leads to a spurious order-two equation.",
    "solutions": [
      {
        "name": "Direct single elimination",
        "steps": [
          "Write the family as $x^2+y^2=2ax$; only $a$ is free, so one differentiation suffices.",
          "Differentiate: $2x+2yy'=2a$, giving $a=x+yy'$.",
          "Substitute back: $x^2+y^2=2x(x+yy')=2x^2+2xy\\,y'$.",
          "Rearrange: $y^2-x^2=2xy\\,y'$, i.e. $2xy\\,y'=y^2-x^2$. Order $1$, degree $1$ (already polynomial of degree $1$ in $y'$)."
        ]
      },
      {
        "name": "Constant-isolation form",
        "steps": [
          "From $x^2+y^2=2ax$ solve for the constant: $a=\\dfrac{x^2+y^2}{2x}$.",
          "A family with one essential constant has order $1$; differentiate $a$ and set it to zero: $\\dfrac{d}{dx}\\!\\left(\\dfrac{x^2+y^2}{2x}\\right)=0$.",
          "Quotient rule: $\\dfrac{(2x+2yy')\\,2x-(x^2+y^2)\\,2}{4x^2}=0\\Rightarrow x(2x+2yy')=x^2+y^2$.",
          "Simplify: $2x^2+2xy\\,y'=x^2+y^2\\Rightarrow 2xy\\,y'=y^2-x^2$. Order $1$, degree $1$."
        ]
      }
    ],
    "remark": "Insight: a geometric side-condition (passing through a fixed point) can lock together what look like independent parameters; the radius is not free once the centre and the origin are tied. Always count essential, not visible, constants."
  },
  {
    "theme": "formation",
    "themeLabel": "Formation, Order & Degree",
    "title": "A Census of Families",
    "difficulty": 4,
    "task": "Find the number of …",
    "tags": [
      "essential constants",
      "order",
      "trig identity",
      "classification"
    ],
    "statement": "For each family below, let $n_i$ be the order of its differential equation (the number of essential arbitrary constants):\\[(i)\\ y=a\\sin^2x+b\\cos^2x+c\\cos 2x,\\quad (ii)\\ y=ae^{x}+be^{x+1},\\quad (iii)\\ y=(a+bx)e^{2x},\\]\\[(iv)\\ y=a+\\log(bx),\\quad (v)\\ y=a\\cos x+b\\sin x+c.\\] Find the value of $n_1+n_2+n_3+n_4+n_5$.",
    "answer": "\\[\\boxed{9}\\]",
    "trap": "Reading off the count of literal constants — $3+2+2+2+3=12$. Three of the families secretly contain redundant constants (trig identity in (i), $e\\cdot$factor in (ii), $\\log b$ additive in (iv)), so the symbol count overstates the order in each.",
    "solutions": [
      {
        "name": "Reduce each to essentials",
        "steps": [
          "(i) Use $\\sin^2x=\\tfrac{1-\\cos2x}{2},\\ \\cos^2x=\\tfrac{1+\\cos2x}{2}$: $y=\\tfrac{a+b}{2}+\\bigl(\\tfrac{b-a}{2}+c\\bigr)\\cos2x=P+Q\\cos2x$, and $(P,Q)$ range over all of $\\mathbb{R}^2$, so $n_1=2$.",
          "(ii) $ae^{x}+be^{x+1}=(a+be)e^{x}=De^{x}$, so $n_2=1$; (iv) $a+\\log(bx)=(a+\\log b)+\\log x=C+\\log x$, so $n_4=1$.",
          "(iii) $(a+bx)e^{2x}$ has basis $\\{e^{2x},xe^{2x}\\}$ (Wronskian $e^{4x}\\neq0$) $\\Rightarrow n_3=2$; (v) $a\\cos x+b\\sin x+c$ has basis $\\{\\cos x,\\sin x,1\\}$ (Wronskian $1\\neq0$) $\\Rightarrow n_5=3$.",
          "Sum: $2+1+2+1+3=9$."
        ]
      },
      {
        "name": "Jacobian-rank test",
        "steps": [
          "For each family form the Jacobian of $(y,y',y'',\\dots)$ with respect to its symbols; the essential order is its rank.",
          "Families (i),(ii),(iv) have rank one less than their symbol count because of the identity/scaling/additive redundancy; the ranks are $2,1,2,1,3$.",
          "Adding the ranks gives $n_1+\\cdots+n_5=9$."
        ]
      }
    ],
    "remark": "Insight: order is a property of the *function space spanned*, not of the notation. A trig identity, a multiplicative shift, or an additive log can each silently drop the dimension by one."
  },
  {
    "theme": "formation",
    "themeLabel": "Formation, Order & Degree",
    "title": "The Parabola Whose Vertex Wandered Off",
    "difficulty": 4,
    "task": "Form the differential equation and state its order and degree.",
    "tags": [
      "elimination",
      "parabola",
      "essential constants",
      "order",
      "degree"
    ],
    "statement": "All parabolas of the form $y^2=4a(x-h)$ — right-opening, with the latus-rectum parameter $a$ and the vertex abscissa $h$ both arbitrary — form a two-parameter family. Eliminate $a$ and $h$ to obtain the differential equation of the whole family, and state its order and degree. (Be careful: do the order and the parameter count actually agree here?)",
    "answer": "\\[\\boxed{y\\,y''+(y')^2=0,\\quad \\text{order }2,\\ \\text{degree }1}\\]",
    "trap": "Assuming two free symbols must force a order-two equation that still contains a leftover combination of $a,h$: in fact the first derivative already eliminates $h$ and the second eliminates $a$ — but a careless student differentiates only once, gets $yy'=2a$, and wrongly reports a first-order equation while $a$ is still present.",
    "solutions": [
      {
        "name": "Successive differentiation",
        "steps": [
          "Differentiate $y^2=4a(x-h)$ once: $2yy'=4a$, so $yy'=2a$ — this already removes $h$ but still holds $a$.",
          "Since one constant ($a$) remains, differentiate again: $\\dfrac{d}{dx}(yy')=0$ gives $(y')^2+yy''=0$.",
          "No arbitrary constant survives, so the equation $y\\,y''+(y')^2=0$ is the answer. Order $2$ (highest derivative $y''$), degree $1$.",
          "Check the count: although there are two parameters, the order is $2$ — they genuinely supply two essential constants, so order equals the count here."
        ]
      },
      {
        "name": "Parameter isolation",
        "steps": [
          "From $2yy'=4a$ obtain $a=\\tfrac12 yy'$; substitute into $y^2=4a(x-h)$: $y^2=2yy'(x-h)$.",
          "Solve for the second symbol: $x-h=\\dfrac{y}{2y'}$, i.e. $h=x-\\dfrac{y}{2y'}$.",
          "Differentiate the constant relation $h=x-\\dfrac{y}{2y'}$ with respect to $x$, using that the left side is constant: $\\dfrac{d}{dx}\\!\\left(x-\\dfrac{y}{2y'}\\right)=0$.",
          "This yields $1-\\dfrac{(y')^2-yy''}{2(y')^2}=0\\Rightarrow 2(y')^2-(y')^2+yy''=0$, i.e. $(y')^2+yy''=0$. Order $2$, degree $1$."
        ]
      },
      {
        "name": "Solve-back consistency check",
        "steps": [
          "Write $y\\,y''+(y')^2=0$ as $\\dfrac{d}{dx}\\!\\left(y\\,y'\\right)=0$, so $y\\,y'=C_1$ for a constant $C_1$.",
          "Integrate once more: $\\dfrac{d}{dx}\\!\\left(\\tfrac12 y^2\\right)=C_1$, giving $y^2=2C_1x+2C_2$.",
          "Compare with the family: $y^2=4a(x-h)=4ax-4ah$, which matches $2C_1x+2C_2$ via $a=\\tfrac12 C_1$ and $h=-C_2/C_1$.",
          "The general solution carries exactly two essential constants $C_1,C_2$, confirming the order is $2$ — it equals the parameter count, and the degree is $1$."
        ]
      }
    ],
    "remark": "Insight: the vertex shift $h$ is the easy one to lose — it falls out at the very first differentiation. The puzzle quietly invites you to under-differentiate; the order is honestly $2$, matching both essential constants, as the solve-back to $y^2=2C_1x+2C_2$ confirms."
  },
  {
    "theme": "formation",
    "themeLabel": "Formation, Order & Degree",
    "title": "Every Central Conic at Once",
    "difficulty": 4,
    "task": "Form the single differential equation satisfied by the whole family.",
    "tags": [
      "elimination",
      "conics",
      "two constants",
      "order",
      "degree"
    ],
    "statement": "The equation $Ax^2+By^2=1$, with $A,B$ arbitrary nonzero constants, simultaneously describes ellipses and hyperbolas centred at the origin with axes along the coordinate axes. Eliminate both $A$ and $B$ to find the one differential equation obeyed by every member of this family, and state its order and degree.",
    "answer": "\\[\\boxed{xy\\,y''+x(y')^2-y\\,y'=0,\\quad \\text{order }2,\\ \\text{degree }1}\\]",
    "trap": "Trying to eliminate $A$ and $B$ one at a time from the original equation and its first derivative only — two unknowns need two relations beyond the original, i.e. a SECOND differentiation. Stopping at the first derivative leaves a constant ($A/B$) lurking and produces a wrong first-order claim.",
    "solutions": [
      {
        "name": "Two differentiations + ratio",
        "steps": [
          "Differentiate $Ax^2+By^2=1$: $2Ax+2Byy'=0\\Rightarrow Ax+Byy'=0$, so $\\dfrac{A}{B}=-\\dfrac{yy'}{x}$.",
          "Differentiate $Ax+Byy'=0$ again: $A+B\\big(y y''+(y')^2\\big)=0\\Rightarrow \\dfrac{A}{B}=-\\big(yy''+(y')^2\\big).$",
          "Equate the two expressions for $A/B$: $-\\dfrac{yy'}{x}=-\\big(yy''+(y')^2\\big).$",
          "Multiply by $x$: $yy'=x\\,yy''+x(y')^2$, i.e. $xy\\,y''+x(y')^2-yy'=0$. Order $2$, degree $1$."
        ]
      },
      {
        "name": "Vanishing determinant (homogeneous in the constants)",
        "steps": [
          "The combination $Ax^2=1-By^2$ is awkward; instead use $Ax+Byy'=0$ from the first derivative, treating $A,B$ as the two unknowns to kill.",
          "Differentiate this linear-in-constants relation once more (it is the cleanest constant-bearing equation): $A+B\\,(yy''+(y')^2)=0$.",
          "Now $\\{Ax+Byy'=0,\\;A+B(yy''+(y')^2)=0\\}$ is homogeneous in $(A,B)$; a nontrivial solution forces the determinant to vanish: $x\\,(yy''+(y')^2)-1\\cdot yy'=0$.",
          "Hence $xy\\,y''+x(y')^2-yy'=0$. Order $2$, degree $1$."
        ]
      }
    ],
    "remark": "Insight: two arbitrary constants need exactly two extra equations. The determinant (Wronskian-style) view makes the elimination automatic — vanishing of the coefficient determinant is precisely the condition that nonzero $A,B$ exist."
  },
  {
    "theme": "formation",
    "themeLabel": "Formation, Order & Degree",
    "title": "Rolling Wheels of Fixed Radius",
    "difficulty": 4,
    "task": "Form the differential equation and state its order and degree.",
    "tags": [
      "elimination",
      "circles",
      "degree",
      "radical",
      "order"
    ],
    "statement": "A wheel of fixed radius $r$ rolls along the $x$-axis; at each instant its rim is the circle $(x-a)^2+y^2=r^2$, where the centre abscissa $a$ varies but $r$ is a known constant. Form the differential equation of this one-parameter family and state its order and degree. State the degree only after the equation is made polynomial in the derivatives.",
    "answer": "\\[\\boxed{y^2\\big(1+(y')^2\\big)=r^2,\\quad \\text{order }1,\\ \\text{degree }2}\\]",
    "trap": "Writing the slope as $y'=-\\dfrac{x-a}{y}=\\pm\\dfrac{\\sqrt{r^2-y^2}}{y}$ and reading off \"degree $1$\" while a square root is still present. Degree is defined only after rationalising; the radical hides a genuine degree-$2$ equation in $y'$.",
    "solutions": [
      {
        "name": "Eliminate centre, then square",
        "steps": [
          "Differentiate $(x-a)^2+y^2=r^2$: $2(x-a)+2yy'=0\\Rightarrow x-a=-yy'$.",
          "Substitute into the original: $(-yy')^2+y^2=r^2$, i.e. $y^2(y')^2+y^2=r^2$.",
          "This is already free of radicals and polynomial in $y'$: $y^2\\big(1+(y')^2\\big)=r^2$.",
          "Highest derivative is $y'$ (order $1$); its highest power after rationalisation is $2$, so degree $2$."
        ]
      },
      {
        "name": "Slope-from-radius route (showing the trap)",
        "steps": [
          "The radius to the point of the rim is perpendicular to the tangent there, so $y'=-\\dfrac{x-a}{y}$, and from the circle $(x-a)^2=r^2-y^2$.",
          "Hence $y'=\\pm\\dfrac{\\sqrt{r^2-y^2}}{y}$ — a tempting \"order $1$, degree $1$\" reading, but the $\\pm\\sqrt{\\;}$ is not polynomial in $y'$.",
          "Rationalise by squaring: $y^2(y')^2=r^2-y^2$.",
          "Thus $y^2(y')^2+y^2=r^2$, i.e. $y^2\\big(1+(y')^2\\big)=r^2$. Now legitimately order $1$, degree $2$."
        ]
      }
    ],
    "remark": "Insight: degree is a statement about the polynomial form. A lone square root masquerading as a first-power slope is the classic degree pitfall — clear the radical before you pronounce the degree."
  },
  {
    "theme": "formation",
    "themeLabel": "Formation, Order & Degree",
    "title": "Line Plus a Lonely Exponential",
    "difficulty": 4,
    "task": "Form the differential equation and state its order and degree.",
    "tags": [
      "elimination",
      "three constants",
      "exponential",
      "order",
      "degree"
    ],
    "statement": "For arbitrary constants $a,b,c$, the family $y=a+bx+c\\,e^{x}$ blends a straight line with one exponential term. Eliminate all three constants to obtain the differential equation of the family, and state its order and degree.",
    "answer": "\\[\\boxed{y'''-y''=0,\\quad \\text{order }3,\\ \\text{degree }1}\\]",
    "trap": "Assuming the presence of $e^x$ forces a characteristic factor $(D-1)$ AND treating the polynomial part $a+bx$ as needing $(D-1)^2$, then multiplying to guess a higher-order operator. The genuine annihilator is $D^2(D-1)$ — order $3$, matching the three essential constants exactly — not order $4$.",
    "solutions": [
      {
        "name": "Build the annihilator",
        "steps": [
          "$a$ is killed by $D=\\dfrac{d}{dx}$; the term $bx$ also needs $D^2$ (since $D^2(a+bx)=0$); the term $c e^x$ is killed by $(D-1)$.",
          "So $a+bx$ is annihilated by $D^2$ and $c e^x$ by $(D-1)$; the whole family by $D^2(D-1)$.",
          "Apply: $D^2(D-1)y=0\\Rightarrow (D^3-D^2)y=0$, i.e. $y'''-y''=0$.",
          "Three essential constants $\\Rightarrow$ order $3$; linear in $y'''$, so degree $1$."
        ]
      },
      {
        "name": "Successive differentiation",
        "steps": [
          "$y=a+bx+ce^x$; $y'=b+ce^x$; $y''=ce^x$; $y'''=ce^x$.",
          "From the last two: $y'''=y''$ (both equal $ce^x$), eliminating $c$ — and $a,b$ vanished by the second derivative.",
          "Hence $y'''-y''=0$, with no constants remaining.",
          "Order $3$ (highest derivative), degree $1$."
        ]
      }
    ],
    "remark": "Insight: the three constants split as ``$D^2$ for the linear part, $(D-1)$ for the exponential'', giving a degree-$3$ annihilator — not the over-counted $(D-1)^2D^2$. Read the polynomial degree of each piece to size the operator correctly."
  },
  {
    "theme": "formation",
    "themeLabel": "Formation, Order & Degree",
    "title": "One Constant, Hidden in the Exponent",
    "difficulty": 5,
    "task": "Form the differential equation and state its order and degree.",
    "tags": [
      "elimination",
      "exponential",
      "one constant",
      "order",
      "degree"
    ],
    "statement": "The family $y=e^{Cx}$ (with $x>0,\\ y>0$) contains a single arbitrary constant $C$ sitting inside the exponent. Eliminate $C$ to obtain the differential equation of the family and state its order and degree. Then explain why differentiating twice — as one would for a constant-coefficient exponential — is the wrong instinct here.",
    "answer": "\\[\\boxed{x\\,y'=y\\ln y,\\quad \\text{order }1,\\ \\text{degree }1}\\]",
    "trap": "Pattern-matching to $y=e^{2x}\\Rightarrow y'=2y$ and concluding $y'=Cy$ with $C$ still present, then differentiating again to “kill” $C$ — producing a bogus order-two equation. With only ONE essential constant the order must be $1$; the constant is removed algebraically via $C=\\dfrac{\\ln y}{x}$, not by a second differentiation.",
    "solutions": [
      {
        "name": "Logarithmic isolation",
        "steps": [
          "Take logs: $\\ln y=Cx$, so the lone constant is $C=\\dfrac{\\ln y}{x}$.",
          "Differentiate $\\ln y=Cx$ once: $\\dfrac{y'}{y}=C$.",
          "Equate the two expressions for $C$: $\\dfrac{y'}{y}=\\dfrac{\\ln y}{x}$.",
          "Clear denominators: $x\\,y'=y\\ln y$. One differentiation sufficed: order $1$, degree $1$."
        ]
      },
      {
        "name": "Why-not-twice argument",
        "steps": [
          "Naive route: $y'=Cy$ still contains $C$, so it is NOT yet the differential equation of the family.",
          "Tempted to differentiate again: $y''=Cy'$, then eliminate $C=\\dfrac{y'}{y}$ to get $yy''=(y')^2$ — order $2$.",
          "But a single arbitrary constant can yield at most a first-order equation; $yy''=(y')^2$ is the ODE of the LARGER family $y=Ae^{Cx}$ (two constants), not of $y=e^{Cx}$.",
          "Correct: use $C=\\dfrac{\\ln y}{x}$ directly with $\\dfrac{y'}{y}=C$ to get $x\\,y'=y\\ln y$, order $1$, degree $1$."
        ]
      }
    ],
    "remark": "Insight: where the constant lives (a multiplier vs. an exponent) decides the elimination technique. An exponent-constant is freed by a logarithm in one step; reflexively differentiating twice silently enlarges the family and inflates the order."
  },
  {
    "theme": "formation",
    "themeLabel": "Formation, Order & Degree",
    "title": "The Family That Adds Its Own Angle",
    "difficulty": 5,
    "task": "Form ODE; state order and degree",
    "tags": [
      "formation",
      "single-constant",
      "order-and-degree",
      "variables-separable",
      "arctan"
    ],
    "statement": "Consider the one-parameter family of curves $$y=\\frac{x+c}{1-cx},\\qquad c\\in\\mathbb{R}.$$ Eliminate the arbitrary constant $c$ to obtain the differential equation satisfied by every member of this family, and state its order and its degree. (Here $c$ is the only arbitrary constant; do not introduce a second one.)",
    "answer": "\\boxed{(1+x^{2})\\,\\dfrac{dy}{dx}=1+y^{2};\\quad \\text{order }1,\\ \\text{degree }1}",
    "trap": "Because the algebra looks heavy, a panicking student differentiates a second time to \"finish the job,\" manufacturing a order-two equation. But the family carries exactly one arbitrary constant, so exactly one differentiation is needed; the order of the formed ODE equals the number of independent constants, namely $1$. Differentiating again produces a spurious higher-order relation that is not the required answer.",
    "solutions": [
      {
        "name": "Differentiate once, then eliminate $c$ algebraically",
        "steps": [
          "The family $y=\\dfrac{x+c}{1-cx}$ has a single arbitrary constant $c$, so one differentiation suffices. By the quotient rule, $\\dfrac{dy}{dx}=\\dfrac{(1-cx)\\cdot 1-(x+c)(-c)}{(1-cx)^{2}}=\\dfrac{1+c^{2}}{(1-cx)^{2}}.$",
          "Solve the original relation for $c$: from $y(1-cx)=x+c$ we get $y-x=c(1+xy)$, hence $c=\\dfrac{y-x}{1+xy}$ (with $1+xy\\neq 0$).",
          "Now compute the building blocks. $1+c^{2}=1+\\dfrac{(y-x)^{2}}{(1+xy)^{2}}=\\dfrac{(1+xy)^{2}+(y-x)^{2}}{(1+xy)^{2}}=\\dfrac{(1+x^{2})(1+y^{2})}{(1+xy)^{2}},$ using the identity $(1+xy)^2+(y-x)^2=(1+x^2)(1+y^2)$.",
          "Also $1-cx=1-\\dfrac{x(y-x)}{1+xy}=\\dfrac{1+xy-xy+x^{2}}{1+xy}=\\dfrac{1+x^{2}}{1+xy},$ so $(1-cx)^{2}=\\dfrac{(1+x^{2})^{2}}{(1+xy)^{2}}.$",
          "Substitute: $\\dfrac{dy}{dx}=\\dfrac{1+c^{2}}{(1-cx)^{2}}=\\dfrac{(1+x^{2})(1+y^{2})/(1+xy)^{2}}{(1+x^{2})^{2}/(1+xy)^{2}}=\\dfrac{1+y^{2}}{1+x^{2}}.$ Hence $(1+x^{2})\\,\\dfrac{dy}{dx}=1+y^{2}.$ One constant was removed by one differentiation, so the equation is first order; $\\dfrac{dy}{dx}$ appears to the first power as a polynomial, so the degree is $1$."
        ]
      },
      {
        "name": "Recognise the angle-addition form",
        "steps": [
          "Write $c=\\tan\\alpha$ for a constant angle $\\alpha$ and $x=\\tan\\theta$. Then $y=\\dfrac{x+c}{1-cx}=\\dfrac{\\tan\\theta+\\tan\\alpha}{1-\\tan\\theta\\tan\\alpha}=\\tan(\\theta+\\alpha),$ so $\\arctan y=\\arctan x+\\alpha$, where $\\alpha$ is the single arbitrary constant.",
          "Differentiate the relation $\\arctan y=\\arctan x+\\alpha$ once with respect to $x$. The constant $\\alpha$ vanishes immediately: $\\dfrac{1}{1+y^{2}}\\dfrac{dy}{dx}=\\dfrac{1}{1+x^{2}}.$",
          "Clearing denominators gives $(1+x^{2})\\,\\dfrac{dy}{dx}=1+y^{2}.$ This is the required differential equation. Reversing the step (separating variables) recovers exactly $\\arctan y-\\arctan x=\\text{const}$, confirming the whole family and no extra solutions were introduced.",
          "Because a single constant was eliminated with a single differentiation, the order is $1$; the highest derivative $\\dfrac{dy}{dx}$ occurs to the first power, so the degree is $1$."
        ]
      }
    ],
    "remark": "**Insight.** The order of the ODE you form is dictated by the count of independent arbitrary constants, not by how messy the elimination looks: one constant means one differentiation and a first-order result. Spotting that this family is secretly $\\arctan y-\\arctan x=\\text{const}$ turns a quotient-rule grind into a one-line cancellation and makes the clean form $(1+x^{2})y'=1+y^{2}$ inevitable."
  },
  {
    "theme": "separable",
    "themeLabel": "Variables Separable",
    "title": "The Square That Hides a Tangent",
    "difficulty": 3,
    "task": "Solve the initial value problem",
    "tags": [
      "substitution",
      "ivp",
      "arctan",
      "first-order"
    ],
    "statement": "Solve $\\dfrac{dy}{dx}=(x+y)^2$ with $y(0)=0$, and give the largest open interval containing $0$ on which the solution is valid.",
    "answer": "\\[\\boxed{\\,y=\\tan x-x,\\quad x\\in\\left(-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2}\\right)\\,}\\]",
    "trap": "Treating $(x+y)^2$ as already-separable in $x$ and $y$ and trying to split $dy=(x+y)^2dx$ directly. It is NOT separable as written; only the substitution $t=x+y$ (so $t'=1+t^2$) makes it so. A second trap is forgetting the validity interval: $\\tan x$ blows up at $\\pm\\pi/2$, so the solution does not extend to all of $\\mathbb{R}$.",
    "solutions": [
      {
        "name": "Substitution t = x+y",
        "steps": [
          "Put $t=x+y$, so $\\dfrac{dt}{dx}=1+\\dfrac{dy}{dx}=1+t^2$.",
          "Separate: $\\dfrac{dt}{1+t^2}=dx\\Rightarrow \\arctan t=x+C$.",
          "Apply $y(0)=0\\Rightarrow t(0)=0\\Rightarrow \\arctan 0=0+C\\Rightarrow C=0$, so $\\arctan(x+y)=x$.",
          "Hence $x+y=\\tan x$, i.e. $y=\\tan x-x$; validity needs $x\\in(-\\pi/2,\\pi/2)$ where $\\tan x$ is finite, giving $\\boxed{y=\\tan x-x}$."
        ]
      },
      {
        "name": "Verification by back-substitution",
        "steps": [
          "For $y=\\tan x-x$, $\\dfrac{dy}{dx}=\\sec^2x-1=\\tan^2x$.",
          "Also $(x+y)^2=(\\tan x)^2=\\tan^2x$, matching the derivative, and $y(0)=\\tan0-0=0$.",
          "Since $\\tan x$ is real and smooth exactly on $(-\\pi/2,\\pi/2)$ around $0$, that is the maximal interval, confirming $\\boxed{y=\\tan x-x}$."
        ]
      }
    ],
    "remark": "Insight: an equation of the form $y'=f(ax+by+c)$ is never separable in the raw variables; the linear substitution collapses it to $t'=a+bf(t)$. Here the clean answer $\\tan x-x$ is a reminder that the interval of validity is part of the solution, not an afterthought."
  },
  {
    "theme": "separable",
    "themeLabel": "Variables Separable",
    "title": "The Logistic Trap: Which Equilibrium Survives the Constant?",
    "difficulty": 3,
    "task": "Find all solutions",
    "tags": [
      "singular-solution",
      "logistic",
      "lost-solution",
      "ivp"
    ],
    "statement": "Find every solution of $\\dfrac{dy}{dx}=y(1-y)$ on $\\mathbb{R}$. Write the non-constant solutions in the standard form $y=\\dfrac{1}{1+Ce^{-x}}$, decide precisely which of the equilibria $y\\equiv0$ and $y\\equiv1$ this one-parameter family already contains and which it loses, and then state the particular solution with $y(0)=\\tfrac12$.",
    "answer": "\\[\\boxed{\\,y=\\dfrac{1}{1+Ce^{-x}}\\ (\\text{this includes }y\\equiv1\\text{ at }C=0),\\ \\text{plus the lost solution }y\\equiv0;\\qquad y(0)=\\tfrac12\\Rightarrow y=\\dfrac{1}{1+e^{-x}}\\,}\\]",
    "trap": "The reflex is to say separation loses BOTH constant solutions $y\\equiv0$ and $y\\equiv1$. That is false for the standard family $y=\\dfrac{1}{1+Ce^{-x}}$: setting $C=0$ gives $y\\equiv1$ exactly, so $y\\equiv1$ is already inside the family. Only $y\\equiv0$ is genuinely lost, since it requires $C\\to\\infty$ and corresponds to no finite constant. Which equilibrium is recovered is decided by the parametrization you happen to write, not by the geometry, so you must inspect the actual formula rather than reciting 'both are lost.'",
    "solutions": [
      {
        "name": "Separate, then audit the family for hidden and lost equilibria",
        "steps": [
          "For $y\\neq0,1$ write $\\dfrac{dy}{y(1-y)}=dx$ and split $\\dfrac{1}{y(1-y)}=\\dfrac1y+\\dfrac1{1-y}$.",
          "Integrate: $\\ln|y|-\\ln|1-y|=x+c\\Rightarrow \\dfrac{y}{1-y}=Ae^{x}$, solving to $y=\\dfrac{1}{1+Ce^{-x}}$ with $C=1/A$.",
          "Audit the constants. Substituting $C=0$ collapses the family to $y\\equiv1$, so this equilibrium is already captured. By contrast $y\\equiv0$ forces $1+Ce^{-x}\\to\\infty$, i.e. $C\\to\\infty$, so it sits outside every finite-$C$ member and is the one genuinely lost solution.",
          "Verify both equilibria solve the ODE directly: $y\\equiv0$ gives $0=0\\cdot1$ and $y\\equiv1$ gives $0=1\\cdot0$. With $y(0)=\\tfrac12$: $\\tfrac12=\\tfrac{1}{1+C}\\Rightarrow C=1$, so $\\boxed{y=\\dfrac{1}{1+e^{-x}}}$, while the full solution set is the family $y=\\tfrac{1}{1+Ce^{-x}}$ together with the lost $y\\equiv0$."
        ]
      },
      {
        "name": "Equilibrium / phase-line analysis",
        "steps": [
          "Setting $y'=0$ gives equilibria $y=0$ and $y=1$; these are constant solutions that exist independently of any integration constant.",
          "On the regions $y<0$, $0<y<1$, $y>1$ the sign of $y(1-y)$ is fixed, so every non-constant trajectory is strictly monotone and cannot cross an equilibrium (uniqueness of the autonomous IVP). A trajectory launched in $0<y<1$ rises toward the stable equilibrium $y=1$ and falls away from the unstable $y=0$.",
          "Because the family $y=\\tfrac{1}{1+Ce^{-x}}$ already limits to $1$ as $x\\to\\infty$ and contains $y\\equiv1$ at $C=0$, the only equilibrium not realized by a finite parameter is $y\\equiv0$. Through $(0,\\tfrac12)$ the trajectory stays in $0<y<1$, increases, and limits to $1$, giving $\\boxed{y=\\dfrac{1}{1+e^{-x}}}$."
        ]
      }
    ],
    "remark": "Insight: dividing by $y(1-y)$ to separate can erase solutions on the dividing locus, but exactly which ones disappear is a property of the constant you introduce. Here the tidy form $y=1/(1+Ce^{-x})$ quietly keeps $y\\equiv1$ (as $C=0$) while expelling $y\\equiv0$ (as $C\\to\\infty$). Had you instead solved to $y/(1-y)=Ae^{x}$, the roles would flip: $A=0$ recovers $y\\equiv0$ and $y\\equiv1$ becomes the lost one. The lesson is to read your own formula, not to recite a slogan about lost equilibria."
  },
  {
    "theme": "separable",
    "themeLabel": "Variables Separable",
    "title": "Root of a Sum",
    "difficulty": 4,
    "task": "Determine the implicit solution",
    "tags": [
      "substitution",
      "ivp",
      "u-substitution",
      "implicit"
    ],
    "statement": "Determine the solution of $\\dfrac{dy}{dx}=\\sqrt{x+y}$ (with $x+y\\ge0$) satisfying $y(0)=0$, expressed as an implicit relation between $x$ and $y$.",
    "answer": "\\[\\boxed{\\,2\\sqrt{x+y}-2\\ln\\!\\left(1+\\sqrt{x+y}\\right)=x\\,}\\]",
    "trap": "After $t=x+y$ gives $t'=1+\\sqrt{t}$ and $\\dfrac{dt}{1+\\sqrt t}=dx$, the seductive move is to write $\\int\\dfrac{dt}{1+\\sqrt t}=\\ln(1+\\sqrt t)$ as if the denominator alone integrates. It does not: one must set $u=\\sqrt t$, turning the integral into $\\int\\dfrac{2u}{1+u}\\,du=2u-2\\ln(1+u)$. Skipping the $u=\\sqrt t$ step loses the leading $2\\sqrt{x+y}$ term entirely, and the bogus relation $\\ln(1+\\sqrt{x+y})=x$ fails to satisfy the ODE.",
    "solutions": [
      {
        "name": "Substitute then rationalize",
        "steps": [
          "Let $t=x+y$; then $\\dfrac{dt}{dx}=1+\\dfrac{dy}{dx}=1+\\sqrt t$, so $\\dfrac{dt}{1+\\sqrt t}=dx$.",
          "Set $u=\\sqrt t,\\;t=u^2,\\;dt=2u\\,du$: $\\displaystyle\\int\\frac{2u}{1+u}\\,du=\\int\\Big(2-\\frac{2}{1+u}\\Big)du=2u-2\\ln(1+u)$.",
          "Thus $2\\sqrt t-2\\ln(1+\\sqrt t)=x+C$; the IVP $y(0)=0$ gives $t(0)=0$, so $0-0=0+C\\Rightarrow C=0$.",
          "Restoring $t=x+y$: $\\boxed{2\\sqrt{x+y}-2\\ln(1+\\sqrt{x+y})=x}$."
        ]
      },
      {
        "name": "Differentiate the candidate relation",
        "steps": [
          "Let $F=2\\sqrt{x+y}-2\\ln(1+\\sqrt{x+y})-x$ and impose $F=0$ with $y=y(x)$.",
          "Differentiating, $\\dfrac{(1+y')}{\\sqrt{x+y}}-\\dfrac{(1+y')}{\\sqrt{x+y}\\,(1+\\sqrt{x+y})}-1=0$.",
          "The first two terms combine to $\\dfrac{(1+y')}{\\sqrt{x+y}}\\cdot\\dfrac{\\sqrt{x+y}}{1+\\sqrt{x+y}}=\\dfrac{1+y'}{1+\\sqrt{x+y}}$, so $\\dfrac{1+y'}{1+\\sqrt{x+y}}=1$, giving $y'=\\sqrt{x+y}$ and recovering the ODE; at $x=0,y=0$ the relation $F=0$ holds.",
          "Hence the implicit solution is $\\boxed{2\\sqrt{x+y}-2\\ln(1+\\sqrt{x+y})=x}$."
        ]
      }
    ],
    "remark": "Insight: the substitution $t=x+y$ is the easy half; the real work is recognizing that $1/(1+\\sqrt t)$ demands a second substitution $u=\\sqrt t$. Two nested substitutions, one separable core."
  },
  {
    "theme": "separable",
    "themeLabel": "Variables Separable",
    "title": "A Circle of Slopes, A Disk of Validity",
    "difficulty": 4,
    "task": "Solve and state the interval of validity",
    "tags": [
      "arctan",
      "ivp",
      "interval-of-validity",
      "trig-integral"
    ],
    "statement": "Solve $\\dfrac{dy}{dx}=2x\\,(1+y^2)$ with $y(0)=1$, and determine the largest open interval about $x=0$ on which the solution exists.",
    "answer": "\\[\\boxed{\\,y=\\tan\\!\\left(x^2+\\tfrac{\\pi}{4}\\right),\\qquad |x|<\\tfrac{\\sqrt{\\pi}}{2}\\,}\\]",
    "trap": "Because the formula $y=\\tan(x^2+\\pi/4)$ looks defined for many $x$, students declare the domain to be 'all $x$ except where $\\tan$ blows up' and quote a periodic set of intervals. But the solution must be the connected branch through $(0,1)$: it is valid only while $x^2+\\pi/4<\\pi/2$, i.e. $|x|<\\sqrt{\\pi}/2$. The first blow-up at $x^2=\\pi/4$ terminates the maximal interval; later branches are different solutions, not continuations.",
    "solutions": [
      {
        "name": "Separate and pin the branch",
        "steps": [
          "Separate: $\\dfrac{dy}{1+y^2}=2x\\,dx\\Rightarrow \\arctan y=x^2+C$.",
          "Use $y(0)=1$: $\\arctan 1=\\tfrac{\\pi}{4}=0+C$, so $\\arctan y=x^2+\\tfrac{\\pi}{4}$.",
          "Invert: $y=\\tan\\!\\big(x^2+\\tfrac{\\pi}{4}\\big)$; valid while the argument stays in the principal branch $(-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2})$.",
          "Since $x^2+\\tfrac{\\pi}{4}<\\tfrac{\\pi}{2}\\iff x^2<\\tfrac{\\pi}{4}$, the maximal interval is $\\boxed{|x|<\\tfrac{\\sqrt\\pi}{2}}$."
        ]
      },
      {
        "name": "Blow-up time of the quadratic-slope ODE",
        "steps": [
          "The right side grows like $1+y^2$, the hallmark of finite-time blow-up; the solution must escape to $\\pm\\infty$ at some finite $x$.",
          "From $\\arctan y=x^2+\\pi/4$, $y\\to+\\infty$ exactly when $x^2+\\pi/4\\to\\pi/2^-$.",
          "That first occurs at $x=\\pm\\sqrt{\\pi}/2$, so the solution through $(0,1)$ lives on $(-\\sqrt\\pi/2,\\sqrt\\pi/2)$ and nowhere larger.",
          "Answer: $\\boxed{y=\\tan(x^2+\\pi/4),\\ |x|<\\sqrt\\pi/2}$."
        ]
      }
    ],
    "remark": "Insight: an explicit formula can be defined past a singularity, but a solution of an IVP cannot jump across an infinite discontinuity. The interval of validity is dictated by the first blow-up of the connected branch, not by where the closed form happens to be finite again."
  },
  {
    "theme": "separable",
    "themeLabel": "Variables Separable",
    "title": "Two Partial Fractions Collide",
    "difficulty": 4,
    "task": "Solve the initial value problem",
    "tags": [
      "partial-fractions",
      "lost-solution",
      "ivp",
      "implicit"
    ],
    "statement": "Solve $\\dfrac{dy}{dx}=\\dfrac{y^2-1}{x^2-1}$ with $y(0)=0$. Identify any constant solutions lost in separation, and simplify the particular solution as far as possible.",
    "answer": "\\[\\boxed{\\,y=x\\,}\\]",
    "trap": "Dividing by $y^2-1$ to separate discards the constant solutions $y\\equiv1$ and $y\\equiv-1$; one must note them even though they are not the answer here. The subtler trap is stopping at the implicit relation $\\dfrac{y-1}{y+1}=A\\,\\dfrac{x-1}{x+1}$ with $A=1$ and declaring it the solution, when it actually collapses algebraically to the strikingly simple $y=x$, which is easy to miss.",
    "solutions": [
      {
        "name": "Symmetric partial fractions",
        "steps": [
          "Separate: $\\dfrac{dy}{y^2-1}=\\dfrac{dx}{x^2-1}$, and use $\\dfrac{1}{t^2-1}=\\tfrac12\\big(\\tfrac1{t-1}-\\tfrac1{t+1}\\big)$ on both sides.",
          "Integrate: $\\tfrac12\\ln\\Big|\\tfrac{y-1}{y+1}\\Big|=\\tfrac12\\ln\\Big|\\tfrac{x-1}{x+1}\\Big|+c\\Rightarrow \\dfrac{y-1}{y+1}=A\\,\\dfrac{x-1}{x+1}$.",
          "Apply $y(0)=0$: $\\dfrac{-1}{1}=A\\dfrac{-1}{1}\\Rightarrow A=1$, giving $(y-1)(x+1)=(y+1)(x-1)$.",
          "Expanding cancels $xy$ and the constants, leaving $2y=2x$, so $\\boxed{y=x}$ (and the lost constants $y\\equiv\\pm1$ are noted but excluded)."
        ]
      },
      {
        "name": "Guess-and-uniqueness",
        "steps": [
          "Test $y=x$: $\\dfrac{dy}{dx}=1$ and $\\dfrac{y^2-1}{x^2-1}=\\dfrac{x^2-1}{x^2-1}=1$, so it satisfies the ODE and passes through $(0,0)$.",
          "Near $(0,0)$ the field $f(x,y)=\\dfrac{y^2-1}{x^2-1}$ is $C^1$ (denominator $=-1\\neq0$), so Picard–Lindelöf gives a unique solution.",
          "That unique solution must therefore be $\\boxed{y=x}$, valid on $(-1,1)$ where $x^2-1\\neq0$."
        ]
      }
    ],
    "remark": "Insight: matching partial-fraction structures on both sides produces a homographic relation whose constant from the initial data can force a dramatic algebraic collapse. The clean $y=x$ rewards anyone who refuses to leave the answer implicit."
  },
  {
    "theme": "separable",
    "themeLabel": "Variables Separable",
    "title": "The Solution That Refuses to Explode",
    "difficulty": 4,
    "task": "Solve and analyze the long-term behavior",
    "tags": [
      "arctan",
      "ivp",
      "bounded-solution",
      "global-existence"
    ],
    "statement": "Solve $e^{x}\\,\\dfrac{dy}{dx}=1+y^2$ with $y(0)=0$. Decide whether the solution exists for all $x\\in\\mathbb{R}$ and find $\\displaystyle\\lim_{x\\to+\\infty}y(x)$.",
    "answer": "\\[\\boxed{\\,y=\\tan\\!\\left(1-e^{-x}\\right);\\ \\text{NOT global: it lives on }\\left(-\\ln\\!\\left(1+\\tfrac{\\pi}{2}\\right),\\,+\\infty\\right),\\quad \\lim_{x\\to+\\infty}y=\\tan 1\\,}\\]",
    "trap": "Seeing $1+y^2$ on the right, students reflexively predict finite-time blow-up (as in $y'=1+y^2$). The $e^{-x}$ weight does tame the $x\\to+\\infty$ direction — $\\arctan y=1-e^{-x}$ rises only to $1<\\pi/2$, so $y\\to\\tan 1$ rather than $+\\infty$. The seductive false step is to then declare the solution global: as $x\\to-\\infty$, $1-e^{-x}\\to-\\infty$, so it must cross $-\\tfrac{\\pi}{2}$, and indeed at $x=-\\ln(1+\\tfrac{\\pi}{2})$ we get $1-e^{-x}=-\\tfrac{\\pi}{2}$ and $y\\to-\\infty$. Forgetting the backward (left) blow-up — concluding 'exists for all $x$' — is exactly the error.",
    "solutions": [
      {
        "name": "Separate with the exponential weight",
        "steps": [
          "Rewrite $\\dfrac{dy}{1+y^2}=e^{-x}\\,dx$ and integrate: $\\arctan y=-e^{-x}+C$.",
          "Apply $y(0)=0$: $0=-1+C\\Rightarrow C=1$, so $\\arctan y=1-e^{-x}$.",
          "The relation $\\arctan y=1-e^{-x}$ defines a real $y$ only while $1-e^{-x}\\in(-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2})$. The upper side is automatic since $1-e^{-x}<1<\\tfrac{\\pi}{2}$, but the lower side fails: $1-e^{-x}=-\\tfrac{\\pi}{2}$ at $x=-\\ln(1+\\tfrac{\\pi}{2})$, where $y=\\tan(1-e^{-x})\\to-\\infty$. So $y=\\tan(1-e^{-x})$ on the maximal interval $\\left(-\\ln(1+\\tfrac{\\pi}{2}),\\,+\\infty\\right)$ — it is NOT global.",
          "As $x\\to+\\infty$, $e^{-x}\\to0$, so $\\arctan y\\to1$ and $\\boxed{y\\to\\tan 1}$; the solution extends to all of the right but blows up to $-\\infty$ at the left endpoint."
        ]
      },
      {
        "name": "A priori bound on arctan y",
        "steps": [
          "Let $w=\\arctan y\\in(-\\pi/2,\\pi/2)$; the ODE becomes $w'=e^{-x}$.",
          "Then $w(x)=w(0)+\\int_0^x e^{-s}ds=0+(1-e^{-x})$. Going right ($x\\to+\\infty$) it rises only to $1<\\tfrac{\\pi}{2}$, so $y$ stays finite; but going left, $w\\to-\\infty$, so $w$ must leave $(-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2})$ through its lower edge.",
          "Setting $w=-\\tfrac{\\pi}{2}$ gives $1-e^{-x}=-\\tfrac{\\pi}{2}$, i.e. $x=-\\ln(1+\\tfrac{\\pi}{2})$; there $y=\\tan w\\to-\\infty$, a genuine (leftward) blow-up.",
          "Hence $y=\\tan(1-e^{-x})$ on $\\left(-\\ln(1+\\tfrac{\\pi}{2}),\\,+\\infty\\right)$ — not all of $\\mathbb{R}$ — with $\\boxed{\\lim_{x\\to\\infty}y=\\tan 1}$."
        ]
      }
    ],
    "remark": "Insight: the weight $e^{-x}$ tames only the forward direction (its integral $1-e^{-x}$ is bounded above), so $y\\to\\tan 1$ rather than $+\\infty$ as $x\\to+\\infty$. But $\\int_0^x e^{-s}ds$ is unbounded below as $x\\to-\\infty$, so the 'arctan budget' overshoots $-\\tfrac{\\pi}{2}$ and the solution blows up to the left — a reminder that 'no forward blow-up' is not the same as 'global existence'."
  },
  {
    "theme": "separable",
    "themeLabel": "Variables Separable",
    "title": "Homogeneous, Not Hopeless",
    "difficulty": 4,
    "task": "Solve the initial value problem",
    "tags": [
      "homogeneous",
      "substitution",
      "ivp",
      "interval-of-validity"
    ],
    "statement": "Solve $\\dfrac{dy}{dx}=\\dfrac{x^2+y^2}{xy}$ with $y(1)=1$, giving $y$ explicitly and the interval of validity.",
    "answer": "\\[\\boxed{\\,y=x\\sqrt{2\\ln x+1},\\qquad x\\in\\left(e^{-1/2},\\,\\infty\\right)\\,}\\]",
    "trap": "The right side is not separable in $x,y$, so trying to integrate it term-by-term fails. The homogeneous substitution $y=vx$ rescues it, but two further traps lurk: (1) choosing the wrong sign of the square root — the branch through $(1,1)$ is the positive one; (2) ignoring that $y=x\\sqrt{2\\ln x+1}$ is only real while $2\\ln x+1\\ge0$, i.e. $x\\ge e^{-1/2}$, with the field undefined at $x=0$, so the solution does not extend down to $0$.",
    "solutions": [
      {
        "name": "Reduce to v = y/x",
        "steps": [
          "Write the RHS as $\\dfrac{x}{y}+\\dfrac{y}{x}=\\dfrac1v+v$ with $v=y/x$, and $\\dfrac{dy}{dx}=v+x\\dfrac{dv}{dx}$.",
          "Then $v+xv'=\\dfrac1v+v\\Rightarrow xv'=\\dfrac1v\\Rightarrow v\\,dv=\\dfrac{dx}{x}$.",
          "Integrate: $\\dfrac{v^2}{2}=\\ln|x|+C\\Rightarrow \\dfrac{y^2}{x^2}=2\\ln|x|+C'$. Use $y(1)=1$: $1=0+C'$, so $C'=1$.",
          "Thus $y^2=x^2(2\\ln x+1)$; the branch through $(1,1)$ is positive, giving $\\boxed{y=x\\sqrt{2\\ln x+1}}$, real for $x>e^{-1/2}$."
        ]
      },
      {
        "name": "Substitution w = y^2",
        "steps": [
          "Multiply the ODE by $2y$: $2yy'=\\dfrac{2(x^2+y^2)}{x}$. With $w=y^2$, $w'=\\dfrac{2x^2+2w}{x}=2x+\\dfrac{2}{x}w$.",
          "This linear ODE has integrating factor $x^{-2}$: $\\big(w/x^2\\big)'=2/x$, so $w/x^2=2\\ln x+C'$.",
          "$y(1)=1\\Rightarrow w(1)=1\\Rightarrow C'=1$, hence $w=y^2=x^2(2\\ln x+1)$.",
          "Taking the positive root through $(1,1)$: $\\boxed{y=x\\sqrt{2\\ln x+1}}$, valid on $(e^{-1/2},\\infty)$."
        ]
      }
    ],
    "remark": "Insight: $y=vx$ turns every homogeneous equation into a separable one in $v$, here trivially $v\\,dv=dx/x$. The reward is a closed form, but the logarithm fixes a hard lower edge $x=e^{-1/2}$ to the domain — a constraint the substitution hides until you reinstate the real square root."
  },
  {
    "theme": "separable",
    "themeLabel": "Variables Separable",
    "title": "The Equilibrium Line You Divided Away",
    "difficulty": 5,
    "task": "Find all solutions",
    "tags": [
      "substitution",
      "lost-solution",
      "singular-solution",
      "ivp",
      "trig"
    ],
    "statement": "Consider $\\dfrac{dy}{dx}=\\cos(x+y)$. (a) Exhibit a solution that the substitution-and-separation method loses. (b) Find the solution with $y(0)=\\tfrac{\\pi}{2}$ in explicit form.",
    "answer": "\\[\\boxed{\\,\\text{lost solution: } y=\\pi-x;\\qquad y(0)=\\tfrac{\\pi}{2}\\Rightarrow y=2\\arctan(x+1)-x\\,}\\]",
    "trap": "Setting $t=x+y$ gives $t'=1+\\cos t$ and one divides by $1+\\cos t$ to separate. But $1+\\cos t=0$ at $t=\\pi$, i.e. on the line $x+y=\\pi$, and $y=\\pi-x$ is an honest solution ($y'=-1=\\cos\\pi$) annihilated by that division — it is invisible in $\\tan\\!\\frac{t}{2}=x+C$ for every $C$. Forgetting it makes part (a) impossible to answer from the general formula.",
    "solutions": [
      {
        "name": "Half-angle separation plus the lost line",
        "steps": [
          "Let $t=x+y$, so $t'=1+y'=1+\\cos t=2\\cos^2\\tfrac{t}{2}$. Where $\\cos\\tfrac{t}{2}\\neq0$: $\\tfrac12\\sec^2\\tfrac{t}{2}\\,dt=dx\\Rightarrow \\tan\\tfrac{t}{2}=x+C$.",
          "The excluded case $\\cos\\tfrac{t}{2}=0$ means $t=\\pi$, i.e. $x+y=\\pi$; directly $y=\\pi-x$ gives $y'=-1=\\cos(\\pi)$, a valid lost solution — answering (a). It can never be recovered from $\\tan\\tfrac{t}{2}=x+C$, since $\\tan\\tfrac{\\pi}{2}$ is undefined for every $C$.",
          "For (b), $y(0)=\\tfrac{\\pi}{2}\\Rightarrow t(0)=\\tfrac{\\pi}{2}\\Rightarrow \\tan\\tfrac{\\pi}{4}=1=0+C\\Rightarrow C=1$, so $\\tan\\tfrac{x+y}{2}=x+1$.",
          "Invert: $\\tfrac{x+y}{2}=\\arctan(x+1)\\Rightarrow \\boxed{y=2\\arctan(x+1)-x}$."
        ]
      },
      {
        "name": "Verify both pieces directly",
        "steps": [
          "Line: for $y=\\pi-x$, $y'=-1$ and $\\cos(x+y)=\\cos\\pi=-1$ — equal, so $y=\\pi-x$ solves the ODE everywhere.",
          "Curve: for $y=2\\arctan(x+1)-x$, $y'=\\dfrac{2}{1+(x+1)^2}-1$, and $x+y=2\\arctan(x+1)$ so $\\cos(x+y)=\\dfrac{1-(x+1)^2}{1+(x+1)^2}$.",
          "Simplifying $\\dfrac{2}{1+(x+1)^2}-1=\\dfrac{1-(x+1)^2}{1+(x+1)^2}$ shows the two agree, and $y(0)=2\\arctan1-0=\\tfrac{\\pi}{2}$.",
          "Since $\\cos(x+y)$ is $C^1$ in $y$, Picard–Lindelöf gives a unique solution through $(0,\\tfrac{\\pi}{2})$; that is the curve. Thus the lost solution is $y=\\pi-x$ and the IVP solution is $\\boxed{y=2\\arctan(x+1)-x}$."
        ]
      }
    ],
    "remark": "Insight: for $y'=f(x+y)$, write $t=x+y$ so $t'=1+f(t)$; any root $t_0$ of $1+f(t)=0$ is an equilibrium of $t$, giving the straight-line solution $x+y=t_0$ that separation divides away. The cosine here plants exactly one such line, $x+y=\\pi$, hiding in plain sight — and it sits at $y(0)=\\pi$, just above the curve through $y(0)=\\tfrac{\\pi}{2}$."
  },
  {
    "theme": "separable",
    "themeLabel": "Variables Separable",
    "title": "When a and b Agree",
    "difficulty": 5,
    "task": "Solve the initial value problem",
    "tags": [
      "substitution",
      "ivp",
      "implicit",
      "interval-of-validity",
      "partial-fractions"
    ],
    "statement": "Solve $\\dfrac{dy}{dx}=\\dfrac{x+y+1}{x+y-1}$ with $y(0)=2$. Give the solution as an implicit relation, and state the branch on which it is valid.",
    "answer": "\\[\\boxed{\\,(x+y)-\\ln(x+y)=2x+2-\\ln 2,\\qquad x+y>0\\ \\ (\\text{in fact }x+y>1)\\,}\\]",
    "trap": "Because numerator and denominator share the SAME linear combination $x+y$, the usual 'shift the origin to kill the constants' trick for $y'=\\frac{a_1x+b_1y+c_1}{a_2x+b_2y+c_2}$ breaks down: the determinant $a_1b_2-a_2b_1=1\\cdot(-1)-1\\cdot1=0$, so the two lines $x+y+1=0$ and $x+y-1=0$ are parallel and never meet. Insisting on that method, or trying the homogeneous trick $y=vx$ (the equation is not homogeneous), leads nowhere. The correct move is the single substitution $t=x+y$. A second trap: the constant must be matched on the starting branch $t=x+y>0$ so $\\ln(x+y)$ is real, and since $t(0)=2>1$ the solution lives entirely on $t>1$ and may NOT cross the vertical-slope line $x+y=1$.",
    "solutions": [
      {
        "name": "Substitution t = x + y",
        "steps": [
          "The linear parts of numerator and denominator are proportional ($a_1b_2-a_2b_1=0$), so set $t=x+y$, giving $t'=1+y'=1+\\dfrac{t+1}{t-1}=\\dfrac{(t-1)+(t+1)}{t-1}=\\dfrac{2t}{t-1}$.",
          "Separate: $\\dfrac{t-1}{t}\\,dt=2\\,dx\\Rightarrow\\Big(1-\\dfrac1t\\Big)dt=2\\,dx\\Rightarrow t-\\ln|t|=2x+C$.",
          "Apply $y(0)=2\\Rightarrow t(0)=0+2=2$: $\\;2-\\ln 2=0+C\\Rightarrow C=2-\\ln2$. Here $t(0)=2>0$, so on this branch $|t|=t$.",
          "Restore $t=x+y$: $\\boxed{(x+y)-\\ln(x+y)=2x+2-\\ln2}$. Since $t'=\\dfrac{2t}{t-1}>0$ for $t>1$, the curve stays on $t=x+y>1$ (it never reaches the vertical-tangent line $x+y=1$); the validity interval is $x>\\tfrac12(\\ln2-1)$."
        ]
      },
      {
        "name": "Differentiate the implicit relation",
        "steps": [
          "Let $F=(x+y)-\\ln(x+y)-2x-(2-\\ln2)$ with $y=y(x)$, and differentiate with respect to $x$.",
          "$(1+y')-\\dfrac{1+y'}{x+y}-2=0\\Rightarrow (1+y')\\,\\dfrac{x+y-1}{x+y}=2$.",
          "Solve: $1+y'=\\dfrac{2(x+y)}{x+y-1}\\Rightarrow y'=\\dfrac{2(x+y)-(x+y-1)}{x+y-1}=\\dfrac{x+y+1}{x+y-1}$, recovering the ODE.",
          "Check the IC: at $x=0,\\,y=2$ we get $F=2-\\ln2-(2-\\ln2)=0$, so the implicit answer $\\boxed{(x+y)-\\ln(x+y)=2x+2-\\ln2}$ passes through $(0,2)$, confirming it solves the IVP on the branch $x+y>1$."
        ]
      }
    ],
    "remark": "Insight: the degenerate case of $y'=\\frac{a_1x+b_1y+c_1}{a_2x+b_2y+c_2}$ — proportional linear parts, $a_1b_2=a_2b_1$ — is exactly the one where a coordinate shift fails and instead $t=a_2x+b_2y$ (here $t=x+y$) collapses the equation to a separable one. Recognizing $a_1b_2=a_2b_1$ tells you which tool to reach for before any algebra. The function $g(t)=t-\\ln t$ has its minimum at $t=1$, which is why $x+y=1$ (where the slope is vertical) bounds the interval of validity: the initial point sits on the increasing branch $t>1$."
  },
  {
    "theme": "separable",
    "themeLabel": "Variables Separable",
    "title": "Hyperbolic in Disguise",
    "difficulty": 5,
    "task": "Solve the initial value problem",
    "tags": [
      "factoring",
      "hyperbolic",
      "ivp",
      "interval-of-validity",
      "gudermannian"
    ],
    "statement": "Solve $\\dfrac{dy}{dx}=e^{x+y}+e^{x-y}$ with $y(0)=0$, give $y$ explicitly, and determine the maximal open interval of existence about $x=0$.",
    "answer": "\\[\\boxed{\\,y=\\ln\\tan\\!\\left(e^{x}-1+\\tfrac{\\pi}{4}\\right),\\qquad \\ln\\!\\left(1-\\tfrac{\\pi}{4}\\right)<x<\\ln\\!\\left(1+\\tfrac{\\pi}{4}\\right)\\,}\\]",
    "trap": "The equation looks hopelessly non-separable until one factors $e^{x+y}+e^{x-y}=e^{x}(e^{y}+e^{-y})=2e^{x}\\cosh y$; missing this factorization is fatal. Then $\\int\\operatorname{sech}y\\,dy$ must be done as $2\\arctan(e^{y})$ (the Gudermannian), not guessed. Finally the interval: $\\arctan(e^{y})$ is forced into $(0,\\pi/2)$, which caps how far $e^{x}-1$ may roam, so the solution lives only on a bounded $x$-window — declaring 'all $x$' is wrong.",
    "solutions": [
      {
        "name": "Factor, then integrate the secant-hyperbolic",
        "steps": [
          "Factor: $\\dfrac{dy}{dx}=e^{x}(e^{y}+e^{-y})=2e^{x}\\cosh y$, so $\\operatorname{sech}y\\,dy=2e^{x}dx$.",
          "Use $\\displaystyle\\int\\operatorname{sech}y\\,dy=2\\arctan(e^{y})$: thus $2\\arctan(e^{y})=2e^{x}+C$.",
          "Apply $y(0)=0$: $2\\arctan(1)=\\tfrac{\\pi}{2}=2+C\\Rightarrow C=\\tfrac{\\pi}{2}-2$, so $\\arctan(e^{y})=e^{x}-1+\\tfrac{\\pi}{4}$.",
          "Invert: $e^{y}=\\tan(e^{x}-1+\\tfrac{\\pi}{4})\\Rightarrow \\boxed{y=\\ln\\tan(e^{x}-1+\\tfrac{\\pi}{4})}$."
        ]
      },
      {
        "name": "Existence window from the arctan range",
        "steps": [
          "For $y$ real we need $e^{y}=\\tan(e^{x}-1+\\tfrac{\\pi}{4})>0$ and finite, i.e. the argument in $(0,\\tfrac{\\pi}{2})$.",
          "So $0<e^{x}-1+\\tfrac{\\pi}{4}<\\tfrac{\\pi}{2}\\Rightarrow 1-\\tfrac{\\pi}{4}<e^{x}<1+\\tfrac{\\pi}{4}$.",
          "Since $1-\\tfrac{\\pi}{4}\\approx0.215>0$, taking logs gives $\\ln(1-\\tfrac{\\pi}{4})<x<\\ln(1+\\tfrac{\\pi}{4})$.",
          "Hence $\\boxed{y=\\ln\\tan(e^{x}-1+\\tfrac{\\pi}{4})}$ on that bounded interval, and nowhere larger."
        ]
      }
    ],
    "remark": "Insight: the gateway is the factorization $e^{x\\pm y}\\to e^x\\cdot e^{\\pm y}=2e^x\\cosh y$, which converts a two-variable mess into a clean $\\operatorname{sech}\\,dy=2e^x\\,dx$. The Gudermannian antiderivative then quietly imposes a finite existence window — a triple of ideas (factor, special integral, range constraint) fused into one IVP."
  },
  {
    "theme": "redsep",
    "themeLabel": "Reducible to Variables Separable",
    "title": "A Square That Resists Splitting",
    "difficulty": 3,
    "task": "Solve the equation",
    "tags": [
      "substitution",
      "linear combination",
      "arctangent",
      "first order"
    ],
    "statement": "Solve the differential equation $$\\frac{dy}{dx}=(x+y)^2.$$",
    "answer": "\\[\\boxed{\\,y=\\tan(x+C)-x\\,}\\]",
    "trap": "Treating $y$ as a constant and \"integrating the right side\" to get $y=\\dfrac{(x+y)^3}{3}+C$ or $y=\\dfrac{x^3}{3}+C$. The right-hand side mixes both variables, so it cannot be integrated in $x$ alone; substituting $y=\\tfrac{x^3}{3}$ back fails the equation.",
    "solutions": [
      {
        "name": "Substitution $v=x+y$",
        "steps": [
          "The right side depends only on the combination $x+y$, so put $v=x+y$. Then $\\dfrac{dv}{dx}=1+\\dfrac{dy}{dx}$.",
          "Substitute $\\dfrac{dy}{dx}=v^2$: $\\dfrac{dv}{dx}=1+v^2$, now separable.",
          "Separate: $\\dfrac{dv}{1+v^2}=dx\\Rightarrow \\arctan v=x+C$.",
          "Hence $v=\\tan(x+C)$, i.e. $x+y=\\tan(x+C)$, giving $y=\\tan(x+C)-x$."
        ]
      },
      {
        "name": "Verification by differentiation",
        "steps": [
          "Take the claimed solution $y=\\tan(x+C)-x$ and differentiate: $\\dfrac{dy}{dx}=\\sec^2(x+C)-1=\\tan^2(x+C)$.",
          "But $x+y=\\tan(x+C)$, so $\\tan^2(x+C)=(x+y)^2$, matching the right-hand side exactly.",
          "Thus $y=\\tan(x+C)-x$ satisfies $\\dfrac{dy}{dx}=(x+y)^2$ for every constant $C$."
        ]
      }
    ],
    "remark": "**Insight.** When the right side is a function of a single linear combination $ax+by$, naming that combination $v$ converts the equation into the always-separable form $\\frac{dv}{dx}=a+b\\,f(v)$. Here the $+1$ from $\\frac{dv}{dx}=1+\\frac{dy}{dx}$ is exactly what makes the $1+v^2$ integrable as an arctangent."
  },
  {
    "theme": "redsep",
    "themeLabel": "Reducible to Variables Separable",
    "title": "Cosine of a Sum",
    "difficulty": 3,
    "task": "Solve the equation",
    "tags": [
      "substitution",
      "trigonometric",
      "half-angle",
      "first order"
    ],
    "statement": "Solve $$\\frac{dy}{dx}=\\cos(x+y).$$",
    "answer": "\\[\\boxed{\\,y=2\\arctan(x+C)-x\\,}\\]",
    "trap": "Reading $\\cos(x+y)$ as depending on $x$ only and writing $y=\\sin(x)+C$. That ignores the $y$ inside the cosine; differentiating $y=\\sin x+C$ gives $\\cos x$, not $\\cos(x+y)$, so it is not a solution.",
    "solutions": [
      {
        "name": "Substitution $v=x+y$ and half-angle",
        "steps": [
          "Set $v=x+y$, so $\\dfrac{dv}{dx}=1+\\dfrac{dy}{dx}=1+\\cos v$.",
          "Use $1+\\cos v=2\\cos^2\\!\\frac{v}{2}$: $\\dfrac{dv}{2\\cos^2(v/2)}=dx$, i.e. $\\tfrac12\\sec^2\\!\\frac{v}{2}\\,dv=dx$.",
          "Integrate: $\\tan\\frac{v}{2}=x+C$, so $v=2\\arctan(x+C)$.",
          "Therefore $x+y=2\\arctan(x+C)$, giving $y=2\\arctan(x+C)-x$."
        ]
      },
      {
        "name": "Verification by back-substitution",
        "steps": [
          "From $\\tan\\frac{x+y}{2}=x+C$, differentiate implicitly: $\\tfrac12\\sec^2\\!\\frac{x+y}{2}\\,(1+y')=1$.",
          "So $1+y'=2\\cos^2\\!\\frac{x+y}{2}=1+\\cos(x+y)$, hence $y'=\\cos(x+y)$, the original equation.",
          "Thus the implicit relation $\\tan\\frac{x+y}{2}=x+C$, equivalently $y=2\\arctan(x+C)-x$, is the general solution."
        ]
      }
    ],
    "remark": "**Insight.** The half-angle identity $1+\\cos v=2\\cos^2\\frac v2$ is the key that turns $\\frac{dv}{dx}=1+\\cos v$ into a clean $\\sec^2$ integral. Always look for an identity that simplifies $a+b\\,f(v)$ before reaching for a messy partial-fraction or Weierstrass substitution."
  },
  {
    "theme": "redsep",
    "themeLabel": "Reducible to Variables Separable",
    "title": "A Ratio of Equal Slopes",
    "difficulty": 4,
    "task": "Solve the IVP",
    "tags": [
      "substitution",
      "rational right side",
      "initial value",
      "first order"
    ],
    "statement": "Solve the initial value problem $$\\frac{dy}{dx}=\\frac{x+y+1}{x+y-1},\\qquad y(0)=2.$$",
    "answer": "\\[\\boxed{\\,y-x-\\ln|x+y|=2-\\ln 2\\,}\\]",
    "trap": "Trying to make it homogeneous via $y=vx$. The two lines $x+y+1$ and $x+y-1$ are parallel (no finite intersection to shift to), so the origin-shift method breaks down. The combination $x+y$ must be used as a single variable instead.",
    "solutions": [
      {
        "name": "Substitution $v=x+y$",
        "steps": [
          "Both numerator and denominator depend on $x+y$, so put $v=x+y$, $\\dfrac{dv}{dx}=1+\\dfrac{dy}{dx}$.",
          "Then $\\dfrac{dv}{dx}=1+\\dfrac{v+1}{v-1}=\\dfrac{(v-1)+(v+1)}{v-1}=\\dfrac{2v}{v-1}$.",
          "Separate: $\\dfrac{v-1}{2v}\\,dv=dx\\Rightarrow \\tfrac12\\Big(1-\\tfrac1v\\Big)dv=dx$.",
          "Integrate: $\\tfrac12\\big(v-\\ln|v|\\big)=x+C_1\\Rightarrow v-\\ln|v|=2x+C_2$. With $v=x+y$: $(x+y)-\\ln|x+y|=2x+C_2$, i.e. $y-x-\\ln|x+y|=C$.",
          "Apply $y(0)=2$: $x+y=2$, so $2-0-\\ln 2=C\\Rightarrow C=2-\\ln 2$. Hence $y-x-\\ln|x+y|=2-\\ln 2$."
        ]
      },
      {
        "name": "Implicit check",
        "steps": [
          "Differentiate $y-x-\\ln|x+y|=C$ implicitly: $y'-1-\\dfrac{1+y'}{x+y}=0$.",
          "Multiply by $(x+y)$: $(y'-1)(x+y)-(1+y')=0\\Rightarrow y'\\,(x+y-1)=(x+y)+1$.",
          "So $y'=\\dfrac{x+y+1}{x+y-1}$, the given equation; and the point $(0,2)$ satisfies $2-0-\\ln 2=2-\\ln 2$, fixing the constant."
        ]
      }
    ],
    "remark": "**Insight.** A ratio $\\frac{a_1x+b_1y+c_1}{a_2x+b_2y+c_2}$ with the two lines **parallel** ($a_1b_2=a_2b_1$) cannot be reduced by shifting the origin — there is no intersection point. The parallel direction $a x+b y$ becomes the natural single variable, and the equation separates."
  },
  {
    "theme": "redsep",
    "themeLabel": "Reducible to Variables Separable",
    "title": "Weighted Sum, Squared",
    "difficulty": 4,
    "task": "Solve the IVP",
    "tags": [
      "substitution",
      "coefficient handling",
      "initial value",
      "arctangent"
    ],
    "statement": "Solve $$\\frac{dy}{dx}=(4x+y)^2,\\qquad y(0)=0.$$",
    "answer": "\\[\\boxed{\\,y=2\\tan(2x)-4x\\,}\\]",
    "trap": "Setting $v=4x+y$ but forgetting that $\\dfrac{dv}{dx}=4+\\dfrac{dy}{dx}$, and instead writing $\\dfrac{dv}{dx}=v^2$. That drops the coefficient $4$ and yields $\\arctan$ with the wrong scaling; the correct equation is $\\dfrac{dv}{dx}=4+v^2$.",
    "solutions": [
      {
        "name": "Substitution $v=4x+y$",
        "steps": [
          "Put $v=4x+y$, so $\\dfrac{dv}{dx}=4+\\dfrac{dy}{dx}=4+v^2$ (keep the $4$).",
          "Separate: $\\dfrac{dv}{4+v^2}=dx\\Rightarrow \\tfrac12\\arctan\\dfrac{v}{2}=x+C$.",
          "So $\\arctan\\dfrac{v}{2}=2x+2C$, giving $v=2\\tan(2x+K)$ with $K=2C$. Then $4x+y=2\\tan(2x+K)$.",
          "Apply $y(0)=0$: $0=2\\tan K\\Rightarrow K=0$. Hence $4x+y=2\\tan(2x)$, i.e. $y=2\\tan(2x)-4x$."
        ]
      },
      {
        "name": "Verification",
        "steps": [
          "Differentiate $y=2\\tan(2x)-4x$: $\\dfrac{dy}{dx}=4\\sec^2(2x)-4=4\\tan^2(2x)$.",
          "Since $4x+y=2\\tan(2x)$, we get $(4x+y)^2=4\\tan^2(2x)$, equal to $\\dfrac{dy}{dx}$.",
          "Also $y(0)=2\\tan 0-0=0$, so the particular solution is $y=2\\tan(2x)-4x$."
        ]
      }
    ],
    "remark": "**Insight.** With $v=ax+by$ the chain gives $\\frac{dv}{dx}=a+b\\,\\frac{dy}{dx}$; the constant $a$ rides along and changes the integral's scale. Here it shifts $\\int\\frac{dv}{v^2}$ into $\\int\\frac{dv}{4+v^2}$, an arctangent of argument $v/2$ — losing the $4$ is the single most common error."
  },
  {
    "theme": "redsep",
    "themeLabel": "Reducible to Variables Separable",
    "title": "An Inverse-Square Slope",
    "difficulty": 4,
    "task": "Solve the equation",
    "tags": [
      "substitution",
      "rational integrand",
      "implicit solution",
      "arctangent"
    ],
    "statement": "Solve $$\\frac{dy}{dx}=\\frac{1}{(x+y)^2}.$$",
    "answer": "\\[\\boxed{\\,y-\\arctan(x+y)=C\\,}\\]",
    "trap": "Cross-multiplying to $(x+y)^2\\,dy=dx$ and then integrating $\\int(x+y)^2\\,dy=\\tfrac13(x+y)^3$ as if $x$ were constant in $y$. Since $x$ varies with $y$ along a solution, this is invalid and produces an expression that does not satisfy the equation.",
    "solutions": [
      {
        "name": "Substitution $v=x+y$",
        "steps": [
          "Let $v=x+y$, $\\dfrac{dv}{dx}=1+\\dfrac{dy}{dx}=1+\\dfrac{1}{v^2}=\\dfrac{v^2+1}{v^2}$.",
          "Separate: $\\dfrac{v^2}{v^2+1}\\,dv=dx\\Rightarrow \\Big(1-\\dfrac{1}{v^2+1}\\Big)dv=dx$.",
          "Integrate: $v-\\arctan v=x+C$.",
          "With $v=x+y$: $(x+y)-\\arctan(x+y)=x+C$, i.e. $y-\\arctan(x+y)=C$."
        ]
      },
      {
        "name": "Implicit verification",
        "steps": [
          "Differentiate $y-\\arctan(x+y)=C$: $y'-\\dfrac{1+y'}{1+(x+y)^2}=0$.",
          "Multiply by $1+(x+y)^2$: $y'\\big(1+(x+y)^2\\big)-(1+y')=0\\Rightarrow y'\\,(x+y)^2=1$.",
          "Hence $y'=\\dfrac{1}{(x+y)^2}$, recovering the original equation."
        ]
      }
    ],
    "remark": "**Insight.** The trick $\\frac{v^2}{v^2+1}=1-\\frac{1}{v^2+1}$ is a polynomial-division reflex: whenever the numerator's degree is at least the denominator's, divide first, then the leftover is a clean standard integral. The lone $x$ cancels on both sides, leaving a compact implicit answer."
  },
  {
    "theme": "redsep",
    "themeLabel": "Reducible to Variables Separable",
    "title": "Spotting the Product xy",
    "difficulty": 4,
    "task": "Solve the equation",
    "tags": [
      "product substitution",
      "recognising a derivative",
      "separable",
      "first order"
    ],
    "statement": "Solve $$x\\,\\frac{dy}{dx}+y=(xy)^2,\\qquad x>0.$$",
    "answer": "\\[\\boxed{\\,y=\\dfrac{-1}{x\\,(x+C)}\\,}\\]",
    "trap": "Calling it linear and dividing by $x$ to get $\\dfrac{dy}{dx}+\\dfrac{y}{x}=x\\,y^2$, then using an integrating factor on a right side that still contains $y^2$. The integrating-factor method needs a right side free of $y$; the $y^2$ blocks it, so this route stalls.",
    "solutions": [
      {
        "name": "Substitution $v=xy$",
        "steps": [
          "Notice the left side is a perfect derivative: $\\dfrac{d}{dx}(xy)=x\\dfrac{dy}{dx}+y$. Set $v=xy$.",
          "The equation becomes $\\dfrac{dv}{dx}=v^2$, which is separable.",
          "Separate: $\\dfrac{dv}{v^2}=dx\\Rightarrow -\\dfrac1v=x+C$, so $v=\\dfrac{-1}{x+C}$.",
          "Since $v=xy$: $xy=\\dfrac{-1}{x+C}$, giving $y=\\dfrac{-1}{x\\,(x+C)}$."
        ]
      },
      {
        "name": "Verification",
        "steps": [
          "From $xy=\\dfrac{-1}{x+C}$, differentiate: $x\\dfrac{dy}{dx}+y=\\dfrac{d}{dx}(xy)=\\dfrac{1}{(x+C)^2}$.",
          "Also $(xy)^2=\\dfrac{1}{(x+C)^2}$, so the right and left sides agree.",
          "Hence $y=\\dfrac{-1}{x(x+C)}$ satisfies $x\\,y'+y=(xy)^2$."
        ]
      }
    ],
    "remark": "**Insight.** Before classifying an equation, scan for a group that is itself a derivative: $x\\,y'+y$ is literally $(xy)'$. Recognising the product $xy$ as one new variable collapses the whole equation to $\\frac{dv}{dx}=v^2$, far simpler than forcing it into a linear template."
  },
  {
    "theme": "redsep",
    "themeLabel": "Reducible to Variables Separable",
    "title": "Twice x Plus y",
    "difficulty": 4,
    "task": "Solve the equation",
    "tags": [
      "substitution",
      "coefficient handling",
      "logarithmic term",
      "implicit solution"
    ],
    "statement": "Solve $$\\frac{dy}{dx}=\\frac{2x+y}{2x+y+1}.$$",
    "answer": "\\[\\boxed{\\,3y-3x+\\ln|6x+3y+2|=C\\,}\\]",
    "trap": "Choosing $v=2x+y$ but writing $\\dfrac{dv}{dx}=\\dfrac{dy}{dx}$ (forgetting the $2$). Correctly $\\dfrac{dv}{dx}=2+\\dfrac{dy}{dx}$; dropping the $2$ changes the separated integrand and gives a wrong relation.",
    "solutions": [
      {
        "name": "Substitution $v=2x+y$",
        "steps": [
          "Let $v=2x+y$, so $\\dfrac{dv}{dx}=2+\\dfrac{dy}{dx}=2+\\dfrac{v}{v+1}=\\dfrac{2(v+1)+v}{v+1}=\\dfrac{3v+2}{v+1}$.",
          "Separate: $\\dfrac{v+1}{3v+2}\\,dv=dx$. With $u=3v+2$, $v+1=\\dfrac{u+1}{3}$ and $dv=\\dfrac{du}{3}$, the left side is $\\dfrac19\\Big(1+\\dfrac1u\\Big)du$.",
          "Integrate: $\\dfrac19\\big(u+\\ln|u|\\big)=x+C_1\\Rightarrow u+\\ln|u|=9x+C_2$, where $u=3v+2=6x+3y+2$.",
          "So $(6x+3y+2)+\\ln|6x+3y+2|=9x+C_2$, i.e. $3y-3x+\\ln|6x+3y+2|=C$."
        ]
      },
      {
        "name": "Implicit verification",
        "steps": [
          "Differentiate $3y-3x+\\ln|6x+3y+2|=C$: $3y'-3+\\dfrac{6+3y'}{6x+3y+2}=0$.",
          "Multiply by $(6x+3y+2)$ and simplify: $3y'\\,(6x+3y+2)-3(6x+3y+2)+6+3y'=0$, which reduces to $y'\\,(2x+y+1)=(2x+y)$.",
          "Hence $y'=\\dfrac{2x+y}{2x+y+1}$, the given equation."
        ]
      }
    ],
    "remark": "**Insight.** When the chosen combination is $2x+y$, the constant injected by the chain rule is $2$, not $1$. That extra unit is what builds the $3v+2$ in the numerator; carry it carefully and the polynomial-division step $\\frac{v+1}{3v+2}$ does the rest."
  },
  {
    "theme": "redsep",
    "themeLabel": "Reducible to Variables Separable",
    "title": "A Curve Whose Slope Is e to the Sum",
    "difficulty": 5,
    "task": "Find the curve",
    "tags": [
      "geometric tangent",
      "substitution",
      "exponential",
      "particular solution"
    ],
    "statement": "A curve passes through the origin, and at each point $(x,y)$ on it the slope of the tangent equals $e^{x+y}$. Find the equation of the curve.",
    "answer": "\\[\\boxed{\\,e^{-y}=2-e^{x}\\,}\\]",
    "trap": "Writing the tangent condition as $\\dfrac{dy}{dx}=e^x e^y$ and then mis-separating to $e^{-y}dy=e^{-x}dx$. The correct separation of $e^{-y}dy=e^{x}dx$ gives $-e^{-y}=e^{x}+C$; flipping a sign on the $x$-side produces a curve that fails the slope condition.",
    "solutions": [
      {
        "name": "Direct separation",
        "steps": [
          "The tangent condition is $\\dfrac{dy}{dx}=e^{x+y}=e^{x}e^{y}$.",
          "Separate: $e^{-y}\\,dy=e^{x}\\,dx\\Rightarrow -e^{-y}=e^{x}+C$.",
          "Use the origin $(0,0)$: $-e^{0}=e^{0}+C\\Rightarrow -1=1+C\\Rightarrow C=-2$.",
          "Thus $-e^{-y}=e^{x}-2$, i.e. $e^{-y}=2-e^{x}$."
        ]
      },
      {
        "name": "Substitution $v=x+y$",
        "steps": [
          "Set $v=x+y$, $\\dfrac{dv}{dx}=1+\\dfrac{dy}{dx}=1+e^{v}$.",
          "Separate: $\\dfrac{dv}{1+e^{v}}=dx$; using $\\dfrac{1}{1+e^v}=1-\\dfrac{e^v}{1+e^v}$ gives $v-\\ln(1+e^{v})=x+C$.",
          "With $v=x+y$: $y-\\ln(1+e^{x+y})=C$. At the origin, $0-\\ln 2=C$, so $y-\\ln(1+e^{x+y})=-\\ln 2$.",
          "Exponentiating, $\\dfrac{2e^{y}}{1+e^{x+y}}=1\\Rightarrow 2e^{y}=1+e^{x}e^{y}\\Rightarrow e^{-y}=2-e^{x}$, the same curve."
        ]
      }
    ],
    "remark": "**Insight.** A slope condition $\\frac{dy}{dx}=e^{x+y}$ both separates directly ($e^{x+y}=e^xe^y$) and yields to $v=x+y$; the two routes meet at $e^{-y}=2-e^{x}$. Pinning the constant with the through-point is what turns a family of curves into the one the problem asks for."
  },
  {
    "theme": "redsep",
    "themeLabel": "Reducible to Variables Separable",
    "title": "Parallel Lines in Disguise",
    "difficulty": 5,
    "task": "Solve the equation",
    "tags": [
      "parallel lines",
      "substitution",
      "logarithmic term",
      "implicit solution"
    ],
    "statement": "Solve $$\\frac{dy}{dx}=\\frac{x+y+1}{x+y+3}.$$",
    "answer": "\\[\\boxed{\\,y-x+\\ln|x+y+2|=C\\,}\\]",
    "trap": "Attempting the shift $x=X+h,\\;y=Y+k$ to make it homogeneous. Solving $h+k+1=0$ and $h+k+3=0$ together is impossible (the lines are parallel), so no shift exists. One must use $v=x+y$ instead.",
    "solutions": [
      {
        "name": "Substitution $v=x+y$",
        "steps": [
          "The lines $x+y+1=0$ and $x+y+3=0$ are parallel, so set $v=x+y$, $\\dfrac{dv}{dx}=1+\\dfrac{dy}{dx}$.",
          "Then $\\dfrac{dv}{dx}=1+\\dfrac{v+1}{v+3}=\\dfrac{(v+3)+(v+1)}{v+3}=\\dfrac{2v+4}{v+3}$.",
          "Separate: $\\dfrac{v+3}{2v+4}\\,dv=dx$. Write $\\dfrac{v+3}{2(v+2)}=\\dfrac12\\Big(1+\\dfrac{1}{v+2}\\Big)$.",
          "Integrate: $\\tfrac12\\big(v+\\ln|v+2|\\big)=x+C_1\\Rightarrow v+\\ln|v+2|=2x+C_2$.",
          "With $v=x+y$: $(x+y)+\\ln|x+y+2|=2x+C_2$, i.e. $y-x+\\ln|x+y+2|=C$."
        ]
      },
      {
        "name": "Implicit verification",
        "steps": [
          "Differentiate $y-x+\\ln|x+y+2|=C$: $y'-1+\\dfrac{1+y'}{x+y+2}=0$.",
          "Multiply by $(x+y+2)$: $(y'-1)(x+y+2)+(1+y')=0\\Rightarrow y'\\,(x+y+3)=(x+y+1)$.",
          "Hence $y'=\\dfrac{x+y+1}{x+y+3}$, the original equation, confirming the implicit solution."
        ]
      }
    ],
    "remark": "**Insight.** The homogeneous-via-shift method only works when the two lines actually meet. The moment you see equal direction coefficients ($1{:}1$ here), abandon the shift and let the shared direction $x+y$ be the new variable — parallelism is precisely what guarantees separability."
  },
  {
    "theme": "redsep",
    "themeLabel": "Reducible to Variables Separable",
    "title": "Proportional Lines, Hidden Variable",
    "difficulty": 5,
    "task": "Solve the equation",
    "tags": [
      "proportional coefficients",
      "substitution",
      "logarithmic term",
      "implicit solution"
    ],
    "statement": "Solve $$\\frac{dy}{dx}=\\frac{x+2y+3}{2x+4y-1}.$$",
    "answer": "\\[\\boxed{\\,8y-4x-7\\ln|4x+8y+5|=C\\,}\\]",
    "trap": "Trying the origin-shift toward the intersection of $x+2y+3=0$ and $2x+4y-1=0$. These lines are proportional ($2{:}4=1{:}2$) hence parallel, so they never meet and the shift is impossible. The combination $x+2y$ must be used as the single variable.",
    "solutions": [
      {
        "name": "Substitution $v=x+2y$",
        "steps": [
          "Since $2x+4y=2(x+2y)$, set $v=x+2y$; then $\\dfrac{dv}{dx}=1+2\\dfrac{dy}{dx}$, so $\\dfrac{dy}{dx}=\\dfrac{1}{2}\\Big(\\dfrac{dv}{dx}-1\\Big)$.",
          "Substitute: $\\dfrac12\\Big(\\dfrac{dv}{dx}-1\\Big)=\\dfrac{v+3}{2v-1}\\Rightarrow \\dfrac{dv}{dx}=1+\\dfrac{2(v+3)}{2v-1}=\\dfrac{4v+5}{2v-1}$.",
          "Separate: $\\dfrac{2v-1}{4v+5}\\,dv=dx$. With $u=4v+5$, $2v-1=\\dfrac{u-7}{2}$, $dv=\\dfrac{du}{4}$, the left side is $\\dfrac18\\Big(1-\\dfrac7u\\Big)du$.",
          "Integrate: $\\dfrac18\\big(u-7\\ln|u|\\big)=x+C_1\\Rightarrow u-7\\ln|u|=8x+C_2$, with $u=4v+5=4x+8y+5$.",
          "So $(4x+8y+5)-7\\ln|4x+8y+5|=8x+C_2$, i.e. $8y-4x-7\\ln|4x+8y+5|=C$."
        ]
      },
      {
        "name": "Implicit verification",
        "steps": [
          "Differentiate $8y-4x-7\\ln|4x+8y+5|=C$: $8y'-4-7\\cdot\\dfrac{4+8y'}{4x+8y+5}=0$.",
          "Clear the denominator and simplify to $y'\\,(2x+4y-1)=(x+2y+3)$.",
          "Therefore $y'=\\dfrac{x+2y+3}{2x+4y-1}$, matching the original equation."
        ]
      }
    ],
    "remark": "**Insight.** Proportional coefficient rows ($\\tfrac{a_1}{a_2}=\\tfrac{b_1}{b_2}$) are a louder version of the parallel-lines flag: the denominator is just a scalar multiple of the numerator's linear part. Naming that part $v$ and expressing $\\frac{dy}{dx}$ through $\\frac{dv}{dx}$ always lands a separable equation."
  },
  {
    "theme": "homogeneous",
    "themeLabel": "Homogeneous Equations",
    "title": "Arcsine in the Wedge",
    "difficulty": 3,
    "task": "Find all",
    "tags": [
      "homogeneous",
      "y=vx",
      "branch",
      "domain"
    ],
    "statement": "In the wedge $x>0,\\ |y|<x$, find all solutions of\n\\[ x\\,\\frac{dy}{dx}=y+\\sqrt{x^{2}-y^{2}} \\]\nas an implicit relation between $x$ and $y$.",
    "answer": "\\[\\boxed{\\,\\arcsin\\!\\frac{y}{x}=\\ln x+C\\,}\\]",
    "trap": "Pulling $x$ out of $\\sqrt{x^{2}-y^{2}}$ as $\\sqrt{x^{2}}=x$ without noting $x>0$, or substituting $y=vx$ and writing $\\sqrt{x^2-v^2x^2}=x\\sqrt{1-v^2}$ while forgetting the sign of $x$ — on $x<0$ the radical becomes $-x\\sqrt{1-v^2}$ and the answer flips sign.",
    "solutions": [
      {
        "name": "Substitution y=vx",
        "steps": [
          "Both sides are homogeneous of degree $1$; set $y=vx$ ($x>0$ so $\\sqrt{x^{2}-y^{2}}=x\\sqrt{1-v^{2}}$).",
          "Then $v+x v'=v+\\sqrt{1-v^{2}}$, so $x v'=\\sqrt{1-v^{2}}$.",
          "Separate: $\\frac{dv}{\\sqrt{1-v^{2}}}=\\frac{dx}{x}$, integrate to $\\arcsin v=\\ln x+C$.",
          "Restore $v=y/x$: $\\boxed{\\arcsin\\frac{y}{x}=\\ln x+C}$."
        ]
      },
      {
        "name": "Verify by differentiation",
        "steps": [
          "Differentiate $\\arcsin(y/x)=\\ln x+C$ implicitly: $\\frac{1}{\\sqrt{1-y^2/x^2}}\\cdot\\frac{xy'-y}{x^{2}}=\\frac{1}{x}$.",
          "Multiply by $x\\sqrt{1-y^2/x^2}=\\sqrt{x^{2}-y^{2}}$ (using $x>0$): $\\frac{xy'-y}{x}=\\sqrt{1-y^2/x^2}$.",
          "Rearrange: $xy'=y+x\\sqrt{1-y^2/x^2}=y+\\sqrt{x^{2}-y^{2}}$, the original ODE, confirming $\\boxed{\\arcsin\\frac{y}{x}=\\ln x+C}$."
        ]
      }
    ],
    "remark": "Insight: the $\\sqrt{x^2-y^2}$ pattern is a tell for $y=vx$ landing on $\\arcsin$; the sign of $x$ when extracting it from the radical is the whole subtlety. Because $\\arcsin$ outputs values in $[-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2}]$, the relation self-restricts each integral curve to the arc where $\\ln x+C\\in(-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2})$ — exactly where the radical $\\sqrt{x^2-y^2}=+x\\cos(\\ln x+C)$ stays nonnegative."
  },
  {
    "theme": "homogeneous",
    "themeLabel": "Homogeneous Equations",
    "title": "The Logarithm Trapped in a Square",
    "difficulty": 3,
    "task": "Find the integral curve",
    "tags": [
      "homogeneous",
      "y=vx substitution",
      "variables separable",
      "initial condition",
      "first-order"
    ],
    "statement": "A curve passes through the point $(1,0)$ and at every point $(x,y)$ with $x>0$ its slope satisfies $$\\frac{dy}{dx}=\\frac{x^{2}+3xy+y^{2}}{x^{2}}.$$ Find the equation of the curve, expressing $y$ explicitly as a function of $x$.",
    "answer": "\\boxed{\\,y=\\dfrac{x\\ln x}{1-\\ln x}\\,,\\quad 0<x<e\\,}",
    "trap": "The right side expands to $1+3\\dfrac{y}{x}+\\left(\\dfrac{y}{x}\\right)^{2}$. A hasty reader keeps only the term linear in $y$, reads the equation as the linear $\\dfrac{dy}{dx}-\\dfrac{3}{x}y=1$, and (with integrating factor $x^{-3}$) lands on $y=\\tfrac12(x^{3}-x)$. But the $(y/x)^{2}$ term is genuinely present, so the equation is homogeneous of degree $0$, not linear; substituting $y=\\tfrac12(x^{3}-x)$ leaves a residual $-\\tfrac14(x^{2}-1)^{2}\\neq0$. The square cannot be discarded.",
    "solutions": [
      {
        "name": "Substitution $y=vx$",
        "steps": [
          "Each term of $\\dfrac{x^{2}+3xy+y^{2}}{x^{2}}$ has degree $0$ in $y/x$, so write $\\dfrac{dy}{dx}=1+3\\dfrac{y}{x}+\\Big(\\dfrac{y}{x}\\Big)^{2}=f(y/x)$ — a homogeneous equation. Put $y=vx$, so $\\dfrac{dy}{dx}=v+x\\dfrac{dv}{dx}$.",
          "Then $v+x\\dfrac{dv}{dx}=1+3v+v^{2}$, giving $x\\dfrac{dv}{dx}=1+2v+v^{2}=(1+v)^{2}$.",
          "Separate: $\\dfrac{dv}{(1+v)^{2}}=\\dfrac{dx}{x}$. Integrate to get $-\\dfrac{1}{1+v}=\\ln x+C$.",
          "Restore $v=\\dfrac{y}{x}$: $-\\dfrac{x}{x+y}=\\ln x+C$. The point $(1,0)$ gives $v=0$, so $-1=\\ln 1+C\\Rightarrow C=-1$.",
          "Thus $\\dfrac{x}{x+y}=1-\\ln x$. Solving for $y$ gives $x\\ln x=y\\,(1-\\ln x)$, i.e. $y=\\dfrac{x\\ln x}{1-\\ln x}$, valid on $0<x<e$ where $1-\\ln x>0$."
        ]
      },
      {
        "name": "Separable in the ratio $t=y/x$",
        "steps": [
          "Let $t=\\dfrac{y}{x}$, so $y=tx$ and $\\dfrac{dy}{dx}=t+x\\dfrac{dt}{dx}$. The equation $\\dfrac{dy}{dx}=1+3t+t^{2}$ becomes $x\\dfrac{dt}{dx}=1+2t+t^{2}=(t+1)^{2}$, a variables-separable equation in $t$ and $x$.",
          "Write $\\dfrac{dt}{(t+1)^{2}}=\\dfrac{dx}{x}$ and integrate both sides: $-\\dfrac{1}{t+1}=\\ln x+C$.",
          "With $t=\\dfrac{y}{x}$ this is $-\\dfrac{x}{x+y}=\\ln x+C$; the condition $y(1)=0$ forces $C=-1$, so $\\dfrac{x}{x+y}=1-\\ln x$.",
          "Cross-multiplying, $x=(x+y)(1-\\ln x)$. Since $x=x(1-\\ln x)+y(1-\\ln x)$, we get $x\\ln x=y(1-\\ln x)$, hence $y=\\dfrac{x\\ln x}{1-\\ln x}$ for $0<x<e$. Differentiating back reproduces $\\dfrac{x^{2}+3xy+y^{2}}{x^{2}}$, confirming the curve."
        ]
      }
    ],
    "remark": "**Insight.** The whole problem turns on refusing to drop the $(y/x)^{2}$ term: keeping it makes the equation homogeneous, and the algebra then collapses beautifully because $1+2v+v^{2}$ is the perfect square $(1+v)^{2}$, whose reciprocal integrates to a single clean fraction. The hidden surprise is the domain — the curve only lives on $0<x<e$, where it blows up as $x\\to e^{-}$ because $1-\\ln x\\to 0$, a vertical asymptote that the trap's tidy cubic never reveals."
  },
  {
    "theme": "homogeneous",
    "themeLabel": "Homogeneous Equations",
    "title": "The Tangent Spiral",
    "difficulty": 4,
    "task": "Find all",
    "tags": [
      "homogeneous",
      "transcendental",
      "y=vx",
      "implicit"
    ],
    "statement": "Find all curves in $x>0$ for which the slope satisfies\n\\[ x\\,\\frac{dy}{dx}=y+x\\tan\\!\\Big(\\frac{y}{x}\\Big), \\]\nexpressing the answer as a clean implicit relation.",
    "answer": "\\[\\boxed{\\,\\sin\\!\\Big(\\frac{y}{x}\\Big)=Cx\\,}\\]",
    "trap": "Declaring the equation \"not homogeneous\" because of the $\\tan$. A function of $y/x$ alone is homogeneous of degree $0$; the whole right side is degree $1$. Treating $\\tan(y/x)$ as an obstacle to $y=vx$ rather than the reason to use it loses the entire method.",
    "solutions": [
      {
        "name": "Substitution y=vx",
        "steps": [
          "Since the right side is $x\\big(\\tfrac{y}{x}+\\tan\\tfrac{y}{x}\\big)$, it is homogeneous of degree $1$; put $y=vx$.",
          "Then $v+x v'=v+\\tan v$, so $x v'=\\tan v$, i.e. $\\cot v\\,dv=\\frac{dx}{x}$.",
          "Integrate: $\\ln|\\sin v|=\\ln x+c$, so $\\sin v=Cx$.",
          "Restore $v=y/x$: $\\boxed{\\sin\\frac{y}{x}=Cx}$."
        ]
      },
      {
        "name": "Differential-form check",
        "steps": [
          "Differentiate $\\sin(y/x)=Cx$: $\\cos(y/x)\\cdot\\frac{xy'-y}{x^{2}}=C=\\frac{\\sin(y/x)}{x}$.",
          "Multiply by $x^{2}/\\cos(y/x)$: $xy'-y=x\\tan(y/x)$.",
          "Hence $xy'=y+x\\tan(y/x)$, recovering the ODE; thus $\\boxed{\\sin\\frac{y}{x}=Cx}$."
        ]
      }
    ],
    "remark": "Insight: \"homogeneous of degree $0$\" is exactly the class of functions of $y/x$; transcendental dressing ($\\tan,\\ \\ln,\\ e^{\\cdot}$) never breaks homogeneity, it only changes the final integral."
  },
  {
    "theme": "homogeneous",
    "themeLabel": "Homogeneous Equations",
    "title": "Shift the Origin",
    "difficulty": 4,
    "task": "Find all",
    "tags": [
      "reducible",
      "origin-shift",
      "intersecting-lines",
      "implicit"
    ],
    "statement": "Solve\n\\[ \\frac{dy}{dx}=\\frac{x+2y-3}{\\,2x+y-3\\,}, \\]\ngiving the general solution as an implicit relation.",
    "answer": "\\[\\boxed{\\,(x+y-2)=C\\,(y-x)^{3}\\,}\\]",
    "trap": "Trying $y=vx$ directly on the affine quotient: the constants $-3$ break degree-homogeneity, so $y=vx$ produces a non-separable mess. One must first shift the origin to the intersection $(1,1)$ of the two lines.",
    "solutions": [
      {
        "name": "Origin shift then y=vx",
        "steps": [
          "Solve $x+2y=3,\\ 2x+y=3$: intersection $(1,1)$. Put $x=X+1,\\ y=Y+1$; the constants cancel: $\\frac{dY}{dX}=\\frac{X+2Y}{2X+Y}$.",
          "Now homogeneous: $Y=vX$ gives $v+Xv'=\\frac{1+2v}{2+v}$, so $Xv'=\\frac{1-v^{2}}{2+v}$.",
          "Separate and integrate $\\frac{2+v}{1-v^{2}}dv=\\frac{dX}{X}$ via partial fractions $\\tfrac{1}{2(1+v)}-\\tfrac{3}{2(1-v)}$: get $\\tfrac12\\ln(1+v)-\\tfrac32\\ln|1-v|=\\ln X+c$.",
          "Exponentiate: $\\frac{1+v}{(v-1)^{3}}=A X^{2}$; with $v=Y/X$ the $X^{2}$ cancels, leaving $X+Y=C(Y-X)^{3}$.",
          "Back-substitute $X=x-1,\\ Y=y-1$: $\\boxed{(x+y-2)=C(y-x)^{3}}$."
        ]
      },
      {
        "name": "Symmetric combinations",
        "steps": [
          "Add and subtract the line forms: with $s=x+y,\\ d=y-x$, one finds $\\frac{ds}{dd}=\\frac{s-2}{d}\\cdot\\frac{1}{?}$ — more directly, on the shifted system $\\frac{dY}{dX}=\\frac{X+2Y}{2X+Y}$ the combinations $X+Y$ and $Y-X$ satisfy $\\frac{d(X+Y)}{X+Y}=3\\,\\frac{d(Y-X)}{Y-X}$.",
          "Integrate: $\\ln(X+Y)=3\\ln(Y-X)+c$, so $X+Y=C(Y-X)^{3}$.",
          "Shift back: $\\boxed{(x+y-2)=C(y-x)^{3}}$."
        ]
      }
    ],
    "remark": "Insight: when the two lines meet, translating the origin to their intersection annihilates the constants and converts the problem to a pure homogeneous one — the constants are not the difficulty, they are the signpost."
  },
  {
    "theme": "homogeneous",
    "themeLabel": "Homogeneous Equations",
    "title": "When the Lines Never Meet",
    "difficulty": 4,
    "task": "Solve",
    "tags": [
      "reducible",
      "parallel-lines",
      "degenerate",
      "t=ax+by"
    ],
    "statement": "Solve\n\\[ \\frac{dy}{dx}=\\frac{x+y+1}{\\,2x+2y-1\\,}, \\]\nin the region $x+y>0$, as an implicit relation.",
    "answer": "\\[\\boxed{\\,2y-x-\\ln(x+y)=C\\,}\\]",
    "trap": "Attempting the origin-shift $x=X+h,\\ y=Y+k$: the two lines $x+y+1=0$ and $2x+2y-1=0$ are PARALLEL ($\\tfrac{1}{2}=\\tfrac{1}{2}$), so they have no intersection and the shift is impossible (the linear system is inconsistent). The correct device is $t=x+y$.",
    "solutions": [
      {
        "name": "Substitution t=x+y",
        "steps": [
          "The numerator and denominator share the combination $x+y$ (denominator $=2(x+y)-1$); set $t=x+y$, so $\\frac{dt}{dx}=1+\\frac{dy}{dx}$.",
          "Then $\\frac{dt}{dx}=1+\\frac{t+1}{2t-1}=\\frac{3t}{2t-1}$.",
          "Separate: $\\frac{2t-1}{3t}\\,dt=dx$, integrate to $\\frac{2t-\\ln t}{3}=x+c$, i.e. $2t-\\ln t=3x+C'$.",
          "Restore $t=x+y$: $2(x+y)-\\ln(x+y)=3x+C'$, which simplifies to $\\boxed{2y-x-\\ln(x+y)=C}$."
        ]
      },
      {
        "name": "Direct verification",
        "steps": [
          "Differentiate $2y-x-\\ln(x+y)=C$: $2y'-1-\\frac{1+y'}{x+y}=0$.",
          "Multiply by $(x+y)$: $(2y'-1)(x+y)-(1+y')=0\\Rightarrow y'\\big(2(x+y)-1\\big)=(x+y)+1$.",
          "Hence $y'=\\frac{x+y+1}{2x+2y-1}$, the original ODE; so $\\boxed{2y-x-\\ln(x+y)=C}$."
        ]
      }
    ],
    "remark": "Insight: equal coefficient ratios mean the would-be intersection is at infinity. Detecting the parallel (degenerate) case BEFORE reaching for the origin shift is the entire point — one new variable $t=ax+by$ collapses the equation to separable."
  },
  {
    "theme": "homogeneous",
    "themeLabel": "Homogeneous Equations",
    "title": "The Sine That Hides the Ratio",
    "difficulty": 4,
    "task": "Solve the equation",
    "tags": [
      "homogeneous",
      "y-equals-vx",
      "separation",
      "first-order",
      "transcendental"
    ],
    "statement": "Solve the first-order equation $$x\\,\\frac{dy}{dx}=y+x\\,\\tan\\!\\frac{y}{x},\\qquad x>0.$$ Express the general solution as a relation between $x$ and $y$.",
    "answer": "\\[\\boxed{\\;\\sin\\!\\left(\\dfrac{y}{x}\\right)=C\\,x\\;}\\]",
    "trap": "The seductive wrong answer is $y=Cx$. It comes from glancing at $x\\,y'=y+x\\tan(y/x)$, mentally deleting the $\\tan$ term as a small correction, and solving the leftover $x\\,y'=y$. But the $\\tan(y/x)$ term is the whole equation: dividing by $x$ gives $\\dfrac{dy}{dx}=\\dfrac{y}{x}+\\tan\\dfrac{y}{x}$, a genuine homogeneous law in which the angle $y/x$ is not constant. Substituting $y=Cx$ back leaves the residual $\\tan C\\neq 0$, so the straight lines are not solutions.",
    "solutions": [
      {
        "name": "Substitution y = vx",
        "steps": [
          "Divide by $x$: $\\dfrac{dy}{dx}=\\dfrac{y}{x}+\\tan\\dfrac{y}{x}=f\\!\\left(\\dfrac{y}{x}\\right)$, so the equation is homogeneous of degree zero.",
          "Put $y=vx$, hence $\\dfrac{dy}{dx}=v+x\\dfrac{dv}{dx}$. The equation becomes $v+x\\dfrac{dv}{dx}=v+\\tan v$, so $x\\dfrac{dv}{dx}=\\tan v$.",
          "Separate the variables: $\\dfrac{\\cos v}{\\sin v}\\,dv=\\dfrac{dx}{x}$, i.e. $\\cot v\\,dv=\\dfrac{dx}{x}$.",
          "Integrate: $\\ln|\\sin v|=\\ln x+\\ln C$, so $\\sin v=Cx$. Restoring $v=\\dfrac{y}{x}$ gives $\\boxed{\\sin\\!\\left(\\dfrac{y}{x}\\right)=Cx}$."
        ]
      },
      {
        "name": "Differential of sin(y/x)",
        "steps": [
          "From $x\\dfrac{dv}{dx}=\\tan v$ (with $v=y/x$) write it as $\\dfrac{\\cos v\\,dv}{\\sin v}=\\dfrac{dx}{x}$, and notice the left side is $d\\big(\\ln|\\sin v|\\big)$ while the right is $d(\\ln x)$.",
          "Equate the differentials of these logarithms: $d\\big(\\ln|\\sin v|-\\ln x\\big)=0$, so $\\dfrac{\\sin v}{x}$ is constant along every integral curve.",
          "Hence $\\dfrac{\\sin v}{x}=C$, that is $\\sin v=Cx$. Replacing $v=\\dfrac{y}{x}$ yields $\\boxed{\\sin\\!\\left(\\dfrac{y}{x}\\right)=Cx}$."
        ]
      }
    ],
    "remark": "**Insight.** A homogeneous equation is one whose slope depends only on the ray angle $y/x$, and the tell-tale here is that $\\tan(y/x)$ already packages the whole right side into that single ratio. The $y=Cx$ rays are the fixed points of the $v$-flow only where $\\tan v=0$; everywhere else the angle drifts, and the conserved quantity is the off-beat combination $\\sin(y/x)/x$, not the ratio itself."
  },
  {
    "theme": "homogeneous",
    "themeLabel": "Homogeneous Equations",
    "title": "The Cube of the Ratio",
    "difficulty": 4,
    "task": "Find the curve through (1,1)",
    "tags": [
      "homogeneous",
      "substitution y=vx",
      "variables separable",
      "initial condition",
      "sign trap"
    ],
    "statement": "A curve lies in the region $x>0,\\ y>0$ and satisfies the first-order equation $$\\frac{dy}{dx}=\\frac{y}{x}+\\frac{y^{3}}{x^{3}},$$ passing through the point $(1,1)$. The right-hand side depends only on the ratio $v=\\dfrac{y}{x}$, so the substitution $y=vx$ turns it into a separable equation. Determine $y$ as an explicit function of $x$ valid on the interval where the curve exists.",
    "answer": "\\boxed{\\,y=\\dfrac{x}{\\sqrt{\\,1-2\\ln x\\,}}\\,,\\qquad 0<x<\\sqrt{e}\\,}",
    "trap": "After reaching $x\\dfrac{dv}{dx}=v^{3}$ one writes $\\displaystyle\\int\\frac{dv}{v^{3}}=+\\frac{1}{2v^{2}}$ instead of $-\\dfrac{1}{2v^{2}}$. That dropped minus sign flips the logarithm and gives the bogus $y=\\dfrac{x}{\\sqrt{1+2\\ln x}}$, which does NOT satisfy the equation (substituting it leaves a nonzero residual).",
    "solutions": [
      {
        "name": "Substitution $y=vx$ then separate",
        "steps": [
          "The equation is homogeneous of degree $0$ in $y/x$. Put $y=vx$, so $\\dfrac{dy}{dx}=v+x\\dfrac{dv}{dx}$.",
          "The right side is $\\dfrac{y}{x}+\\dfrac{y^{3}}{x^{3}}=v+v^{3}$. Hence $v+x\\dfrac{dv}{dx}=v+v^{3}$, which collapses to $x\\dfrac{dv}{dx}=v^{3}$.",
          "Separate: $\\dfrac{dv}{v^{3}}=\\dfrac{dx}{x}$. Integrate carefully — $\\displaystyle\\int v^{-3}\\,dv=-\\dfrac{1}{2v^{2}}$ — so $-\\dfrac{1}{2v^{2}}=\\ln x+C$.",
          "Since $v=\\dfrac{y}{x}$, this is $-\\dfrac{x^{2}}{2y^{2}}=\\ln x+C$, i.e. $\\dfrac{x^{2}}{y^{2}}=-2\\ln x+C_{1}$.",
          "Apply $(1,1)$: $1=-2\\ln 1+C_{1}\\Rightarrow C_{1}=1$. Thus $\\dfrac{x^{2}}{y^{2}}=1-2\\ln x$, giving $y=\\dfrac{x}{\\sqrt{1-2\\ln x}}$, valid while $1-2\\ln x>0$, i.e. $0<x<\\sqrt{e}$."
        ]
      },
      {
        "name": "Reciprocal substitution $w=x^{2}/y^{2}$",
        "steps": [
          "With $v=y/x$ the reduced equation is $x\\dfrac{dv}{dx}=v^{3}$. Let $w=\\dfrac{1}{v^{2}}=\\dfrac{x^{2}}{y^{2}}$, so $\\dfrac{dw}{dx}=-2v^{-3}\\dfrac{dv}{dx}$.",
          "From $\\dfrac{dv}{dx}=\\dfrac{v^{3}}{x}$ we get $\\dfrac{dw}{dx}=-2v^{-3}\\cdot\\dfrac{v^{3}}{x}=-\\dfrac{2}{x}$, a linear (indeed directly integrable) equation in $w$.",
          "Integrate: $w=-2\\ln x+C_{1}$, i.e. $\\dfrac{x^{2}}{y^{2}}=-2\\ln x+C_{1}$.",
          "Use $(1,1)$: $C_{1}=1$, so $\\dfrac{x^{2}}{y^{2}}=1-2\\ln x$ and $y=\\dfrac{x}{\\sqrt{1-2\\ln x}}$ on $0<x<\\sqrt{e}$, matching the boxed answer."
        ]
      }
    ],
    "remark": "**Insight.** Once $y=vx$ kills the $v$-terms, everything rides on $\\int v^{-3}\\,dv=-\\tfrac{1}{2v^{2}}$: the negative power integrates to a negative coefficient, and that single sign decides whether the curve has a vanishing denominator at $x=\\sqrt{e}$ (correct, a genuine domain limit) or a spurious one at $x=e^{-1/2}$. Tracking the sign of the integrated reciprocal is the whole problem."
  },
  {
    "theme": "homogeneous",
    "themeLabel": "Homogeneous Equations",
    "title": "The Curve Through Twice Its Height",
    "difficulty": 5,
    "task": "Solve the IVP",
    "tags": [
      "homogeneous",
      "y-equals-vx",
      "initial-condition",
      "first-order",
      "linear-in-u"
    ],
    "statement": "A curve in the half-plane $x>0$ obeys $$2xy\\,\\frac{dy}{dx}=x^{2}+3y^{2}$$ and passes through the point $(1,2)$. Find the equation of the curve.",
    "answer": "\\[\\boxed{\\;y^{2}=5x^{3}-x^{2}\\;}\\]",
    "trap": "The tempting wrong answer is $y^{2}=5x^{3}$. It appears if, after the substitution $u=y^{2}$ turns the equation into $x\\dfrac{du}{dx}=u+\\,$(something), one drops the $-x^{2}$ that survives the integration and keeps only the $x^{3}$ growth, fitting the constant from $(1,2)$ to get $C=5$. But the full integration gives $u=Cx^{3}-x^{2}$; discarding the $-x^{2}$ breaks the equation. Indeed $y^{2}=5x^{3}$ substituted back leaves a residual of $-\\sqrt{5}$ in the slope, so it is not a solution even though it also passes through $(1,2)$.",
    "solutions": [
      {
        "name": "Substitution y = vx",
        "steps": [
          "Solve for the slope: $\\dfrac{dy}{dx}=\\dfrac{x^{2}+3y^{2}}{2xy}=\\dfrac{1+3(y/x)^{2}}{2(y/x)}$, a function of $y/x$ alone, so the equation is homogeneous.",
          "Put $y=vx$, $\\dfrac{dy}{dx}=v+x\\dfrac{dv}{dx}$. Then $v+x\\dfrac{dv}{dx}=\\dfrac{1+3v^{2}}{2v}$, so $x\\dfrac{dv}{dx}=\\dfrac{1+3v^{2}}{2v}-v=\\dfrac{1+v^{2}}{2v}$.",
          "Separate: $\\dfrac{2v\\,dv}{1+v^{2}}=\\dfrac{dx}{x}$. Integrate to get $\\ln(1+v^{2})=\\ln x+\\text{const}$, i.e. $1+v^{2}=Ax$.",
          "Restore $v=\\dfrac{y}{x}$: $1+\\dfrac{y^{2}}{x^{2}}=Ax$, so $y^{2}=Ax^{3}-x^{2}$. The point $(1,2)$ gives $4=A-1$, hence $A=5$ and $\\boxed{y^{2}=5x^{3}-x^{2}}$."
        ]
      },
      {
        "name": "Linearise with u = y^2",
        "steps": [
          "Let $u=y^{2}$, so $\\dfrac{du}{dx}=2y\\dfrac{dy}{dx}$. Multiplying the original equation by $1$ and using $2y\\,y'=u'$ gives $x\\,\\dfrac{du}{dx}=x^{2}+3u$, that is $\\dfrac{du}{dx}-\\dfrac{3}{x}u=x$.",
          "This is linear in $u$ with integrating factor $e^{\\int(-3/x)\\,dx}=x^{-3}$. Then $\\dfrac{d}{dx}\\big(x^{-3}u\\big)=x^{-3}\\cdot x=x^{-2}$.",
          "Integrate: $x^{-3}u=-x^{-1}+A$, so $u=Ax^{3}-x^{2}$, i.e. $y^{2}=Ax^{3}-x^{2}$.",
          "Apply $(1,2)$: $4=A-1$, so $A=5$, giving $\\boxed{y^{2}=5x^{3}-x^{2}}$."
        ]
      }
    ],
    "remark": "**Insight.** The same curve admits two readings: as a homogeneous law $y'=f(y/x)$ cracked by $y=vx$, and as a hidden linear law once you spot that $u=y^{2}$ makes $2yy'$ collapse to $u'$. The $-x^{2}$ term is the particular part of the linear solution; it is exactly what the trap throws away. Matching $(1,2)$ fixes the homogeneous coefficient $A=5$, but only the full $5x^{3}-x^{2}$ obeys the slope law everywhere."
  },
  {
    "theme": "homogeneous",
    "themeLabel": "Homogeneous Equations",
    "title": "The Exponential Picks the Substitution",
    "difficulty": 5,
    "task": "Solve the homogeneous initial-value problem",
    "tags": [
      "homogeneous",
      "substitution-choice",
      "dx/dy",
      "initial-value",
      "exponential-ratio"
    ],
    "statement": "Solve the first-order equation $$\\frac{dy}{dx}=\\frac{y}{\\,x+y\\,e^{x/y}\\,}\\,,\\qquad y>0,$$ given that the integral curve passes through $(0,1)$. Express the particular solution as a relation between $x$ and $y$.",
    "answer": "\\[\\boxed{\\;e^{-x/y}+\\ln y=1\\;}\\]",
    "trap": "Reaching for the reflex substitution $y=vx$. Because the exponent is $x/y$, that choice produces $\\dfrac{dy}{dx}=\\dfrac{v}{1+v\\,e^{1/v}}$ and forces the non-elementary integral $\\displaystyle\\int\\frac{1+v\\,e^{1/v}}{-v^{2}e^{1/v}}\\,dv$. The equation is homogeneous, so it is solvable in closed form — but only the mirror substitution $v=x/y$ (equivalently working with $\\tfrac{dx}{dy}$) separates the variables. The exponent $x/y$ is the tell for which ratio to name.",
    "solutions": [
      {
        "name": "Invert to $\\dfrac{dx}{dy}$ and set $x=vy$",
        "steps": [
          "Both numerator and denominator are degree-$1$ homogeneous, so the right side is a function of the ratio alone. Since the exponent is $x/y$, take the reciprocal to make $x$ the dependent variable: $$\\frac{dx}{dy}=\\frac{x+y\\,e^{x/y}}{y}=\\frac{x}{y}+e^{x/y}.$$",
          "Put $v=\\dfrac{x}{y}$, so $x=vy$ and $\\dfrac{dx}{dy}=v+y\\dfrac{dv}{dy}$. Substituting, $$v+y\\frac{dv}{dy}=v+e^{v}\\;\\Longrightarrow\\; y\\frac{dv}{dy}=e^{v}.$$",
          "Separate and integrate: $\\displaystyle\\int e^{-v}\\,dv=\\int\\frac{dy}{y}$, giving $-e^{-v}=\\ln y - C$, i.e. $e^{-v}+\\ln y=C$. Restoring $v=x/y$: $$e^{-x/y}+\\ln y=C.$$",
          "Apply $(0,1)$: $e^{0}+\\ln 1=1+0=1$, so $C=1$. Hence $e^{-x/y}+\\ln y=1$."
        ]
      },
      {
        "name": "Differentiate the candidate relation and match",
        "steps": [
          "The clean separation in Method 1 suggests the implicit family $F(x,y)=e^{-x/y}+\\ln y=C$. Differentiate it as a check: $\\dfrac{\\partial F}{\\partial x}=-\\dfrac{1}{y}e^{-x/y}$ and $\\dfrac{\\partial F}{\\partial y}=\\dfrac{x}{y^{2}}e^{-x/y}+\\dfrac{1}{y}.$",
          "Then $$\\frac{dy}{dx}=-\\frac{F_x}{F_y}=\\frac{\\tfrac{1}{y}e^{-x/y}}{\\tfrac{x}{y^{2}}e^{-x/y}+\\tfrac1y}.$$ Multiply top and bottom by $y^{2}e^{x/y}$: $$\\frac{dy}{dx}=\\frac{y}{\\,x+y\\,e^{x/y}\\,},$$ which is exactly the given equation, confirming the family is correct.",
          "Impose the point $(0,1)$: $e^{0}+\\ln 1=1\\Rightarrow C=1$, so the integral curve is $e^{-x/y}+\\ln y=1$."
        ]
      }
    ],
    "remark": "**Insight.** A degree-$0$ homogeneous equation can be attacked from either ratio, but the two substitutions are not equally kind: the variable sitting *inside* the awkward function — here the $x/y$ in the exponent — should become the numerator of your new variable. Naming $v=x/y$ and pivoting to $\\tfrac{dx}{dy}$ turns a non-elementary-looking integral into a one-line separation. Reading the equation before reaching for $y=vx$ is what separates a clean solution from a dead end."
  },
  {
    "theme": "homogeneous",
    "themeLabel": "Homogeneous Equations",
    "title": "The Arctangent of the Slope Ratio",
    "difficulty": 5,
    "task": "Solve and evaluate at a point",
    "tags": [
      "homogeneous",
      "y=vx substitution",
      "variables separable",
      "arctan integral",
      "initial condition"
    ],
    "statement": "A curve in the region $x>0$ satisfies $\\dfrac{dy}{dx}=\\dfrac{x^{2}+xy+y^{2}}{x^{2}}$ and passes through the point $(1,1)$. Find the value of $y$ at $x=e^{\\pi/12}$.",
    "answer": "\\boxed{\\,y\\big(e^{\\pi/12}\\big)=\\sqrt{3}\\,e^{\\pi/12}\\,}",
    "trap": "The right side splits as $1+\\frac{y}{x}+\\frac{y^{2}}{x^{2}}$, tempting you to declare $y=x$ a solution because it makes each term equal to $1$. But substituting $y=x$ gives $\\frac{dy}{dx}=1$ while the right side equals $3$, so $y=x$ solves nothing. The whole solution set is the single family $y=x\\tan(\\ln x+C)$; there is no stray line to bolt on.",
    "solutions": [
      {
        "name": "Substitution $y=vx$ then separate",
        "steps": [
          "The equation is homogeneous: $\\dfrac{dy}{dx}=1+\\dfrac{y}{x}+\\Big(\\dfrac{y}{x}\\Big)^{2}=f\\!\\left(\\dfrac{y}{x}\\right)$. Put $y=vx$, so $\\dfrac{dy}{dx}=v+x\\dfrac{dv}{dx}$.",
          "Then $v+x\\dfrac{dv}{dx}=1+v+v^{2}$, and the $v$ on each side cancels, leaving the separable equation $x\\dfrac{dv}{dx}=1+v^{2}$.",
          "Separate: $\\dfrac{dv}{1+v^{2}}=\\dfrac{dx}{x}$. Integrating gives $\\arctan v=\\ln x+C$, i.e. $v=\\tan(\\ln x+C)$, so $y=x\\tan(\\ln x+C)$.",
          "Apply $(1,1)$: $1=1\\cdot\\tan(\\ln 1+C)=\\tan C$, hence $C=\\dfrac{\\pi}{4}$. At $x=e^{\\pi/12}$ the argument is $\\ln x+C=\\dfrac{\\pi}{12}+\\dfrac{\\pi}{4}=\\dfrac{\\pi}{3}$, so $y=e^{\\pi/12}\\tan\\dfrac{\\pi}{3}=\\sqrt{3}\\,e^{\\pi/12}$."
        ]
      },
      {
        "name": "Solve generally, then impose the point",
        "steps": [
          "Write the slope as a function of the ratio $t=\\dfrac{y}{x}$: $\\dfrac{dy}{dx}=1+t+t^{2}$. Since $y=tx$ gives $\\dfrac{dy}{dx}=t+x\\dfrac{dt}{dx}$, equate to get $x\\dfrac{dt}{dx}=1+t^{2}$.",
          "This is variables-separable in $t$ and $x$: $\\displaystyle\\int\\dfrac{dt}{1+t^{2}}=\\int\\dfrac{dx}{x}$ yields $\\arctan t=\\ln x+C$.",
          "Hence the general solution family is $\\arctan\\!\\dfrac{y}{x}=\\ln x+C$, i.e. $y=x\\tan(\\ln x+C)$ — a single one-parameter family with no extra members.",
          "The condition $y(1)=1$ forces $\\arctan 1=\\ln 1+C\\Rightarrow C=\\dfrac{\\pi}{4}$. Then $\\arctan\\dfrac{y}{x}=\\ln x+\\dfrac{\\pi}{4}$; at $x=e^{\\pi/12}$ this is $\\dfrac{\\pi}{3}$, so $\\dfrac{y}{x}=\\tan\\dfrac{\\pi}{3}=\\sqrt{3}$ and $y=\\sqrt{3}\\,e^{\\pi/12}$."
        ]
      }
    ],
    "remark": "**Insight.** The arithmetic-looking numerator $x^{2}+xy+y^{2}$ is really a disguised $1+t+t^{2}$ in the ratio $t=y/x$, and the homogeneous cancellation always strips away the linear $t$, leaving the pure $\\arctan$ kernel $dt/(1+t^{2})$. The solution curves are therefore the family $\\arctan(y/x)=\\ln x+C$ — logarithmic spirals in disguise, captured entirely by the single constant $C$, with the seductive line $y=x$ belonging to none of them."
  },
  {
    "theme": "redhom",
    "themeLabel": "Reducible to Homogeneous",
    "title": "Two Lines That Meet at a Point",
    "difficulty": 3,
    "task": "Solve the equation",
    "tags": [
      "origin-shift",
      "homogeneous",
      "intersecting-lines",
      "first-order"
    ],
    "statement": "Solve $\\dfrac{dy}{dx}=\\dfrac{x+y-3}{x-y-1}$ by reducing it to a homogeneous equation.",
    "answer": "\\[\\boxed{\\;\\tan^{-1}\\!\\left(\\dfrac{y-1}{x-2}\\right)-\\tfrac12\\ln\\!\\big((x-2)^2+(y-1)^2\\big)=C\\;}\\]",
    "trap": "A common wrong move is to substitute $v=\\dfrac{y}{x}$ directly on the raw fractions, declaring $y=Cx$ as the family. That ignores the constants $-3$ and $-1$: the right-hand side is a ratio of $y/x$ only after the origin is moved to the intersection $(2,1)$. Skipping the shift and writing $\\tan^{-1}(y/x)-\\tfrac12\\ln(x^2+y^2)=C$ is centred on the wrong point and does not satisfy the equation.",
    "solutions": [
      {
        "name": "Shift the origin to the intersection",
        "steps": [
          "The lines $x+y-3=0$ and $x-y-1=0$ meet at $(2,1)$. Put $X=x-2,\\;Y=y-1$, so $\\dfrac{dY}{dX}=\\dfrac{X+Y}{X-Y}$, which is homogeneous.",
          "Let $Y=vX$, so $\\dfrac{dY}{dX}=v+X\\dfrac{dv}{dX}=\\dfrac{1+v}{1-v}$, giving $X\\dfrac{dv}{dX}=\\dfrac{1+v^2}{1-v}$.",
          "Separate: $\\dfrac{1-v}{1+v^2}\\,dv=\\dfrac{dX}{X}$, so $\\tan^{-1}v-\\tfrac12\\ln(1+v^2)=\\ln X+c$.",
          "With $v=\\dfrac{Y}{X}$ the $\\ln X$ merges, and restoring $X=x-2,\\,Y=y-1$ gives $\\boxed{\\tan^{-1}\\!\\left(\\tfrac{y-1}{x-2}\\right)-\\tfrac12\\ln((x-2)^2+(y-1)^2)=C}$."
        ]
      },
      {
        "name": "Polar form about (2,1)",
        "steps": [
          "Write $X=r\\cos\\theta,\\;Y=r\\sin\\theta$ about $(2,1)$. The homogeneous equation $\\dfrac{dY}{dX}=\\dfrac{X+Y}{X-Y}$ becomes $\\dfrac{1}{r}\\dfrac{dr}{d\\theta}=1$.",
          "Integrate: $\\ln r=\\theta+c$, i.e. $r=Ae^{\\theta}$ with $\\theta=\\tan^{-1}(Y/X)$ and $\\ln r=\\tfrac12\\ln(X^2+Y^2)$.",
          "Thus $\\tfrac12\\ln(X^2+Y^2)=\\tan^{-1}(Y/X)+c$, and substituting $X=x-2,\\,Y=y-1$ recovers $\\boxed{\\tan^{-1}\\!\\left(\\tfrac{y-1}{x-2}\\right)-\\tfrac12\\ln((x-2)^2+(y-1)^2)=C}$."
        ]
      }
    ],
    "remark": "**Insight.** When the numerator and denominator are non-parallel lines, the constants are pure baggage from a misplaced origin. Translating to their intersection $(2,1)$ deletes the constants and exposes a homogeneous core; the polar view then shows the integral curves are logarithmic spirals about that point."
  },
  {
    "theme": "redhom",
    "themeLabel": "Reducible to Homogeneous",
    "title": "A Gentle Parallel Pair",
    "difficulty": 3,
    "task": "Solve the equation",
    "tags": [
      "parallel-lines",
      "linear-substitution",
      "separable",
      "logarithm"
    ],
    "statement": "Solve $\\dfrac{dy}{dx}=\\dfrac{x+y}{x+y+2}$.",
    "answer": "\\[\\boxed{\\;y-x+\\ln|x+y+1|=C\\;}\\]",
    "trap": "Reading $\\dfrac{x+y}{x+y+2}$ as a ratio of two lines and hunting for their intersection is futile: $x+y=0$ and $x+y+2=0$ are parallel and disjoint. There is no origin to shift to. Treating the right side as already a function of $y/x$ and writing $y=vx$ is also wrong, since the $+2$ is not homogeneous. The substitution $t=x+y$ is the only clean path.",
    "solutions": [
      {
        "name": "Substitution t = x + y",
        "steps": [
          "Set $t=x+y$, so $\\dfrac{dt}{dx}=1+\\dfrac{dy}{dx}=1+\\dfrac{t}{t+2}=\\dfrac{2t+2}{t+2}$.",
          "Separate: $\\dfrac{t+2}{2(t+1)}\\,dt=dx$, and write $\\dfrac{t+2}{t+1}=1+\\dfrac{1}{t+1}$.",
          "Integrate: $\\tfrac12\\big(t+\\ln|t+1|\\big)=x+c$, so $t+\\ln|t+1|=2x+c'$.",
          "Put $t=x+y$: $x+y+\\ln|x+y+1|=2x+c'$, i.e. $\\boxed{y-x+\\ln|x+y+1|=C}$."
        ]
      },
      {
        "name": "Verification by differentiation",
        "steps": [
          "Differentiate $y-x+\\ln|x+y+1|=C$: $y'-1+\\dfrac{1+y'}{x+y+1}=0$.",
          "Multiply by $(x+y+1)$: $(y'-1)(x+y+1)+1+y'=0$, so $y'(x+y+2)=(x+y+1)-1=x+y$.",
          "Hence $y'=\\dfrac{x+y}{x+y+2}$, matching the equation, so $\\boxed{y-x+\\ln|x+y+1|=C}$."
        ]
      }
    ],
    "remark": "**Insight.** A missing constant in only one of the two lines (here $+2$ versus $+0$) still leaves the lines parallel, because parallelism depends only on the $x,y$ coefficients. The lone working variable is the shared combination $t=x+y$, and the division $\\dfrac{t+2}{t+1}=1+\\dfrac{1}{t+1}$ is what produces the logarithm in the answer."
  },
  {
    "theme": "redhom",
    "themeLabel": "Reducible to Homogeneous",
    "title": "A Cube Hidden in the Constant",
    "difficulty": 4,
    "task": "Solve the equation",
    "tags": [
      "origin-shift",
      "homogeneous",
      "partial-fractions",
      "intersecting-lines"
    ],
    "statement": "Solve $\\dfrac{dy}{dx}=\\dfrac{x+2y-3}{2x+y-3}$ and express the answer in a constant-free closed form.",
    "answer": "\\[\\boxed{\\;x+y-2=C\\,(x-y)^3\\;}\\]",
    "trap": "It is tempting to read the symmetric coefficients and guess $x+y=C(x-y)$, the answer one would get from $\\dfrac{dY}{dX}=\\dfrac{X+Y}{X+Y}$ type carelessness. The genuine homogeneous equation after shifting is $\\dfrac{dY}{dX}=\\dfrac{X+2Y}{2X+Y}$, whose partial-fraction integral produces the cube power $(x-y)^3$, not a linear relation.",
    "solutions": [
      {
        "name": "Origin shift then partial fractions",
        "steps": [
          "Lines $x+2y-3=0$ and $2x+y-3=0$ meet at $(1,1)$. With $X=x-1,\\;Y=y-1$, $\\dfrac{dY}{dX}=\\dfrac{X+2Y}{2X+Y}$.",
          "Put $Y=vX$: $v+X\\dfrac{dv}{dX}=\\dfrac{1+2v}{2+v}$, so $X\\dfrac{dv}{dX}=\\dfrac{1-v^2}{2+v}$.",
          "Separate and split: $\\dfrac{2+v}{(1-v)(1+v)}\\,dv=\\dfrac{dX}{X}$ with $\\dfrac{2+v}{(1-v)(1+v)}=\\dfrac{3/2}{1-v}+\\dfrac{1/2}{1+v}$.",
          "Integrate: $-\\tfrac32\\ln(1-v)+\\tfrac12\\ln(1+v)=\\ln X+c$, i.e. $\\dfrac{1+v}{(1-v)^3}=AX^2$.",
          "With $v=Y/X$ this is $\\dfrac{X+Y}{(X-Y)^3}=A$, so restoring variables $\\boxed{x+y-2=C\\,(x-y)^3}$."
        ]
      },
      {
        "name": "Rotated coordinates u=X+Y, w=X-Y",
        "steps": [
          "On the shifted equation, write it as $(X+2Y)\\,dX-(2X+Y)\\,dY=0$ and set $u=X+Y,\\;w=X-Y$ so $X=\\tfrac{u+w}{2},\\,Y=\\tfrac{u-w}{2}$.",
          "Then $X+2Y=\\tfrac{3u-w}{2}$ and $2X+Y=\\tfrac{3u+w}{2}$; with $dX=\\tfrac{du+dw}{2},\\,dY=\\tfrac{du-dw}{2}$ the form becomes $-\\tfrac{w}{2}\\,du+\\tfrac{3u}{2}\\,dw=0$, i.e. $\\dfrac{du}{u}=3\\,\\dfrac{dw}{w}$.",
          "Integrate: $\\ln u=3\\ln w+c$, so $u=Aw^3$, that is $X+Y=A(X-Y)^3$.",
          "Substituting $X=x-1,\\,Y=y-1$ gives $\\boxed{x+y-2=C\\,(x-y)^3}$."
        ]
      }
    ],
    "remark": "**Insight.** The exponent $3$ is not arbitrary. The directions $X+Y$ and $X-Y$ are the eigen-directions of the symmetric coefficient pattern, with eigenvalues $3$ and $-1$; in those rotated coordinates the equation separates as $\\dfrac{du}{u}=3\\dfrac{dw}{w}$, so the cube is forced. Symmetric coefficients tempt a linear guess, but the eigen-structure dictates the power."
  },
  {
    "theme": "redhom",
    "themeLabel": "Reducible to Homogeneous",
    "title": "When the Lines Refuse to Meet",
    "difficulty": 4,
    "task": "Solve the equation",
    "tags": [
      "parallel-lines",
      "linear-substitution",
      "separable",
      "no-intersection"
    ],
    "statement": "Solve $\\dfrac{dy}{dx}=\\dfrac{x+y+1}{2x+2y-1}$. Notice the two lines before choosing a method.",
    "answer": "\\[\\boxed{\\;2(x+y)-\\ln|x+y|=3x+C\\;}\\]",
    "trap": "If you reflexively try to shift the origin to the intersection of $x+y+1=0$ and $2x+2y-1=0$, you will be solving an empty system: the lines are parallel ($1:1=2:2$) and never meet, so no $(h,k)$ exists. The origin-shift method simply has nothing to centre on; the correct route is the substitution $t=x+y$, which turns the equation separable.",
    "solutions": [
      {
        "name": "Substitution t = x + y",
        "steps": [
          "Since the denominator is a multiple of the numerator's linear part, set $t=x+y$, so $\\dfrac{dt}{dx}=1+\\dfrac{dy}{dx}$.",
          "Then $\\dfrac{dt}{dx}=1+\\dfrac{t+1}{2t-1}=\\dfrac{(2t-1)+(t+1)}{2t-1}=\\dfrac{3t}{2t-1}$.",
          "Separate: $\\dfrac{2t-1}{3t}\\,dt=dx$, i.e. $\\left(\\dfrac23-\\dfrac{1}{3t}\\right)dt=dx$.",
          "Integrate: $\\dfrac{2t}{3}-\\dfrac{1}{3}\\ln|t|=x+c$; multiply by $3$ and put $t=x+y$ to get $\\boxed{2(x+y)-\\ln|x+y|=3x+C}$."
        ]
      },
      {
        "name": "Verification by differentiation",
        "steps": [
          "Differentiate $2(x+y)-\\ln|x+y|=3x+C$ implicitly: $2(1+y')-\\dfrac{1+y'}{x+y}=3$.",
          "Factor: $(1+y')\\left(2-\\dfrac{1}{x+y}\\right)=3$, so $(1+y')\\cdot\\dfrac{2(x+y)-1}{x+y}=3$.",
          "Hence $1+y'=\\dfrac{3(x+y)}{2(x+y)-1}$, giving $y'=\\dfrac{3(x+y)-(2(x+y)-1)}{2(x+y)-1}=\\dfrac{x+y+1}{2x+2y-1}$, matching the equation and confirming $\\boxed{2(x+y)-\\ln|x+y|=3x+C}$."
        ]
      }
    ],
    "remark": "**Insight.** The first thing to check on a ratio-of-lines equation is whether the lines are parallel. Proportional coefficients mean no intersection, so there is no point to translate to; the single combination $t=x+y$ that appears in both lines is the natural variable, and it makes the equation separable in one stroke."
  },
  {
    "theme": "redhom",
    "themeLabel": "Reducible to Homogeneous",
    "title": "A Curve Through the Origin",
    "difficulty": 4,
    "task": "Solve the IVP",
    "tags": [
      "origin-shift",
      "homogeneous",
      "ivp",
      "conic-solution"
    ],
    "statement": "Find the curve satisfying $\\dfrac{dy}{dx}=\\dfrac{x-y+1}{x+y-3}$ and passing through the origin $(0,0)$.",
    "answer": "\\[\\boxed{\\;(x-1)^2-2(x-1)(y-2)-(y-2)^2=-7\\;}\\]",
    "trap": "Plugging $(0,0)$ into a general solution written in the wrong variables is the usual slip. A second trap: after shifting to $(1,2)$ and integrating, students fix the constant using $X=0,Y=0$ (the shifted origin) instead of the actual point $(0,0)$, which corresponds to $X=-1,\\,Y=-2$. Using the wrong shifted coordinates gives $C=0$ and the degenerate locus, not the curve through $(0,0)$.",
    "solutions": [
      {
        "name": "Shift to (1,2) and group into a perfect differential",
        "steps": [
          "Lines $x-y+1=0$ and $x+y-3=0$ meet at $(1,2)$. With $X=x-1,\\,Y=y-2$, $\\dfrac{dY}{dX}=\\dfrac{X-Y}{X+Y}$, so $(X+Y)\\,dY=(X-Y)\\,dX$.",
          "Rearrange: $X\\,dX-Y\\,dY-(Y\\,dX+X\\,dY)=0$, i.e. $d\\!\\left(\\tfrac{X^2}{2}-\\tfrac{Y^2}{2}-XY\\right)=0$.",
          "Integrate: $X^2-2XY-Y^2=C$, that is $(x-1)^2-2(x-1)(y-2)-(y-2)^2=C$.",
          "Apply $(0,0)$, where $X=-1,\\,Y=-2$: $(-1)^2-2(-1)(-2)-(-2)^2=1-4-4=-7$, so $\\boxed{(x-1)^2-2(x-1)(y-2)-(y-2)^2=-7}$."
        ]
      },
      {
        "name": "Homogeneous substitution Y = vX",
        "steps": [
          "With $X=x-1,\\,Y=y-2$ and $Y=vX$: $v+X\\dfrac{dv}{dX}=\\dfrac{1-v}{1+v}$, so $X\\dfrac{dv}{dX}=\\dfrac{1-2v-v^2}{1+v}$.",
          "Separate: $\\dfrac{1+v}{1-2v-v^2}\\,dv=\\dfrac{dX}{X}$; since $\\dfrac{d}{dv}(1-2v-v^2)=-2(1+v)$, the left side is $-\\tfrac12\\,d\\ln|1-2v-v^2|$.",
          "Integrate: $-\\tfrac12\\ln|1-2v-v^2|=\\ln|X|+c$, so $1-2v-v^2=\\dfrac{C}{X^2}$, i.e. $X^2-2XY-Y^2=C$.",
          "Restoring variables and using $(0,0)\\Rightarrow C=-7$ gives $\\boxed{(x-1)^2-2(x-1)(y-2)-(y-2)^2=-7}$."
        ]
      }
    ],
    "remark": "**Insight.** Once the equation is homogeneous, the differential $X\\,dX-Y\\,dY-(X\\,dY+Y\\,dX)$ is a perfect differential of a quadratic, so the integral curves are conics centred at the intersection $(1,2)$. The boundary condition must be expressed in the shifted coordinates of that point, not the shifted origin."
  },
  {
    "theme": "redhom",
    "themeLabel": "Reducible to Homogeneous",
    "title": "The Fifth Power Surprise",
    "difficulty": 4,
    "task": "Solve the equation",
    "tags": [
      "origin-shift",
      "homogeneous",
      "partial-fractions",
      "intersecting-lines"
    ],
    "statement": "Solve $\\dfrac{dy}{dx}=\\dfrac{3x+2y-5}{2x+3y-5}$ and give a closed form free of the constant.",
    "answer": "\\[\\boxed{\\;(x-y)^5(x+y-2)=C\\;}\\]",
    "trap": "Because the coefficients $3,2$ and $2,3$ are symmetric, one expects symmetric exponents on $x+y$ and $x-y$. They are not symmetric: the partial-fraction integral assigns a $5$ to $(x-y)$ and only a $1$ to $(x+y-2)$. Writing $(x-y)(x+y-2)=C$ or $(x-y)^3(x+y-2)=C$ from a botched partial-fraction split is the seductive error.",
    "solutions": [
      {
        "name": "Origin shift then partial fractions",
        "steps": [
          "Lines $3x+2y-5=0$ and $2x+3y-5=0$ meet at $(1,1)$. With $X=x-1,\\,Y=y-1$, $\\dfrac{dY}{dX}=\\dfrac{3X+2Y}{2X+3Y}$.",
          "Put $Y=vX$: $v+X\\dfrac{dv}{dX}=\\dfrac{3+2v}{2+3v}$, so $X\\dfrac{dv}{dX}=\\dfrac{3-3v^2}{2+3v}=\\dfrac{3(1-v)(1+v)}{2+3v}$.",
          "Separate: $\\dfrac{2+3v}{3(1-v)(1+v)}\\,dv=\\dfrac{dX}{X}$ with $\\dfrac{2+3v}{(1-v)(1+v)}=\\dfrac{5/2}{1-v}-\\dfrac{1/2}{1+v}$.",
          "Integrate: $\\tfrac13\\big(-\\tfrac52\\ln(1-v)-\\tfrac12\\ln(1+v)\\big)=\\ln X+c$; multiply by $-6$ to get $5\\ln(1-v)+\\ln(1+v)=-6\\ln X+c'$.",
          "So $(1-v)^5(1+v)=A X^{-6}$, i.e. $(X-Y)^5(X+Y)=A$; restoring variables, $\\boxed{(x-y)^5(x+y-2)=C}$."
        ]
      },
      {
        "name": "Rotated coordinates u=X+Y, w=X-Y",
        "steps": [
          "On the shifted form $(3X+2Y)\\,dX-(2X+3Y)\\,dY=0$, set $u=X+Y,\\;w=X-Y$.",
          "Compute $3X+2Y=\\tfrac{5u+w}{2}$ and $2X+3Y=\\tfrac{5u-w}{2}$; with $dX=\\tfrac{du+dw}{2},\\,dY=\\tfrac{du-dw}{2}$ the form reduces to $\\tfrac{w}{2}\\,du+\\tfrac{5u}{2}\\,dw=0$, i.e. $w\\,du=-5u\\,dw$.",
          "Separate: $\\dfrac{du}{u}=-5\\,\\dfrac{dw}{w}$, so $u\\,w^{5}=A$, i.e. $(X+Y)(X-Y)^5=A$.",
          "Restoring $X=x-1,\\,Y=y-1$ gives $\\boxed{(x-y)^5(x+y-2)=C}$."
        ]
      }
    ],
    "remark": "**Insight.** Symmetric-looking coefficients hide an asymmetric structure: in the eigen-directions $u=X+Y$ and $w=X-Y$ the equation separates as $\\dfrac{du}{u}=-5\\dfrac{dw}{w}$, so the fifth power lands on $(x-y)$ while $(x+y-2)$ keeps power one. Always run the partial fractions; never assume symmetry of exponents from symmetry of coefficients."
  },
  {
    "theme": "redhom",
    "themeLabel": "Reducible to Homogeneous",
    "title": "Parallel With a Twist of Three",
    "difficulty": 4,
    "task": "Solve the IVP",
    "tags": [
      "parallel-lines",
      "linear-substitution",
      "ivp",
      "separable"
    ],
    "statement": "Solve $\\dfrac{dy}{dx}=\\dfrac{2x+3y+1}{4x+6y+5}$ with $y(0)=0$.",
    "answer": "\\[\\boxed{\\;14(2x+3y)+9\\ln|14x+21y+13|-49x=9\\ln 13\\;}\\]",
    "trap": "The coefficients satisfy $2:4=3:6$, so $2x+3y+1=0$ and $4x+6y+5=0$ are parallel and never intersect: there is no origin to shift to. Choosing the substitution $t=x+y$ (the reflex from simpler problems) does not work either, because neither line is a function of $x+y$. The line that actually appears is $t=2x+3y$, and only that substitution separates the equation.",
    "solutions": [
      {
        "name": "Substitution t = 2x + 3y",
        "steps": [
          "Both lines are functions of $2x+3y$, so set $t=2x+3y$; then $\\dfrac{dt}{dx}=2+3\\dfrac{dy}{dx}=2+3\\cdot\\dfrac{t+1}{2t+5}=\\dfrac{7t+13}{2t+5}$.",
          "Separate: $\\dfrac{2t+5}{7t+13}\\,dt=dx$, and write $\\dfrac{2t+5}{7t+13}=\\dfrac{2}{7}+\\dfrac{9/7}{7t+13}$.",
          "Integrate: $\\dfrac{2}{7}t+\\dfrac{9}{49}\\ln|7t+13|=x+c$; multiply by $49$ to get $14t+9\\ln|7t+13|=49x+c'$.",
          "Put $t=2x+3y$ (so $7t+13=14x+21y+13$); apply $y(0)=0\\Rightarrow t=0$, giving $c'=9\\ln 13$, hence $\\boxed{14(2x+3y)+9\\ln|14x+21y+13|-49x=9\\ln 13}$."
        ]
      },
      {
        "name": "Verification by differentiation",
        "steps": [
          "Let $t=2x+3y$. The relation is $14t+9\\ln|7t+13|=49x+9\\ln13$; differentiate: $14\\,t'+\\dfrac{63\\,t'}{7t+13}=49$.",
          "So $t'\\Big(14+\\dfrac{63}{7t+13}\\Big)=49$, i.e. $t'\\cdot\\dfrac{14(7t+13)+63}{7t+13}=49$, giving $t'=\\dfrac{49(7t+13)}{98t+245}=\\dfrac{7t+13}{2t+5}$.",
          "Since $t'=2+3y'$, we get $3y'=\\dfrac{7t+13}{2t+5}-2=\\dfrac{3t+3}{2t+5}$, so $y'=\\dfrac{t+1}{2t+5}=\\dfrac{2x+3y+1}{4x+6y+5}$, and at $x=0$ the curve passes through $0$, confirming $\\boxed{14(2x+3y)+9\\ln|14x+21y+13|-49x=9\\ln 13}$."
        ]
      }
    ],
    "remark": "**Insight.** When the lines are parallel the correct substitution is whichever linear form they are both built from, here $t=2x+3y$, not the habitual $x+y$. The proportional coefficients $2:4=3:6$ are the signal; reading them off first saves a doomed search for an intersection."
  },
  {
    "theme": "redhom",
    "themeLabel": "Reducible to Homogeneous",
    "title": "A Hyperbola From a Rotation",
    "difficulty": 5,
    "task": "Find the curve",
    "tags": [
      "origin-shift",
      "homogeneous",
      "ivp",
      "conic-solution"
    ],
    "statement": "Find the curve through $(3,2)$ whose slope at $(x,y)$ is $\\dfrac{2x-3y+1}{3x+2y-5}$.",
    "answer": "\\[\\boxed{\\;(x-1)^2-3(x-1)(y-1)-(y-1)^2=-3\\;}\\]",
    "trap": "The slopes $2,-3$ and $3,2$ look perpendicular, tempting a guess that the integral curves are circles. They are not. After shifting to the intersection $(1,1)$ the equation integrates to a quadratic with a cross term $-3XY$, whose discriminant $(-3)^2+4(1)>0$ marks a hyperbola, not a circle. A further slip is anchoring the constant at the shifted origin instead of at the actual point $(3,2)$, which sits at $X=2,\\,Y=1$.",
    "solutions": [
      {
        "name": "Shift to (1,1), group into a perfect differential",
        "steps": [
          "Lines $2x-3y+1=0$ and $3x+2y-5=0$ meet at $(1,1)$. With $X=x-1,\\,Y=y-1$, $(3X+2Y)\\,dY=(2X-3Y)\\,dX$.",
          "Rearrange to $2X\\,dX-3\\,(Y\\,dX+X\\,dY)-2Y\\,dY=0$, which is $d\\!\\big(X^2-3XY-Y^2\\big)=0$.",
          "Integrate: $X^2-3XY-Y^2=C$, that is $(x-1)^2-3(x-1)(y-1)-(y-1)^2=C$.",
          "Apply $(3,2)$, where $X=2,\\,Y=1$: $2^2-3(2)(1)-1^2=4-6-1=-3$, so $\\boxed{(x-1)^2-3(x-1)(y-1)-(y-1)^2=-3}$."
        ]
      },
      {
        "name": "Homogeneous substitution Y = vX",
        "steps": [
          "With $X=x-1,\\,Y=y-1$ and $Y=vX$: $v+X\\dfrac{dv}{dX}=\\dfrac{2-3v}{3+2v}$, so $X\\dfrac{dv}{dX}=\\dfrac{2-6v-2v^2}{3+2v}$.",
          "Separate: $\\dfrac{3+2v}{2(1-3v-v^2)}\\,dv=\\dfrac{dX}{X}$; since $\\dfrac{d}{dv}(1-3v-v^2)=-(3+2v)$, the left side is $-\\tfrac12\\,d\\ln|1-3v-v^2|$.",
          "Integrate: $-\\tfrac12\\ln|1-3v-v^2|=\\ln|X|+c$, so $1-3v-v^2=\\dfrac{A}{X^2}$, i.e. $X^2-3XY-Y^2=A$.",
          "Restore variables; the point $(3,2)$ gives $X=2,\\,Y=1$ and $A=4-6-1=-3$, so $\\boxed{(x-1)^2-3(x-1)(y-1)-(y-1)^2=-3}$."
        ]
      }
    ],
    "remark": "**Insight.** The cross term $-3XY$ in the integral is the fingerprint of a rotated conic; its positive discriminant guarantees a hyperbola about $(1,1)$, never the circle the perpendicular-looking slopes seem to promise. As always with a translated equation, the data point must be entered in the shifted coordinates of the intersection."
  },
  {
    "theme": "redhom",
    "themeLabel": "Reducible to Homogeneous",
    "title": "Parallel Lines in Disguise",
    "difficulty": 5,
    "task": "Solve the equation",
    "tags": [
      "parallel-lines",
      "linear-substitution",
      "separable",
      "disguise-trap"
    ],
    "statement": "Solve $\\dfrac{dy}{dx}=\\dfrac{x-y+3}{x-y-2}$, and state precisely why the origin-shift method is unavailable here.",
    "answer": "\\[\\boxed{\\;(x-y)^2-4(x-y)+10x=C\\;}\\]",
    "trap": "The numerator and denominator look like two distinct lines, so the eye expects an intersection to shift to. But both are level sets of the same expression $x-y$ (coefficients $1:-1$ in each), so they are parallel and never meet — the shift system is inconsistent. Forcing $X=x-h,\\,Y=y-k$ to kill both constants is impossible; only $t=x-y$ works, and forgetting that the substitution changes $dy/dx$ to $1-dt/dx$ is the second pitfall.",
    "solutions": [
      {
        "name": "Substitution t = x - y",
        "steps": [
          "Both lines depend only on $x-y$, so set $t=x-y$; then $\\dfrac{dt}{dx}=1-\\dfrac{dy}{dx}$.",
          "Hence $\\dfrac{dt}{dx}=1-\\dfrac{t+3}{t-2}=\\dfrac{(t-2)-(t+3)}{t-2}=\\dfrac{-5}{t-2}$.",
          "Separate: $(t-2)\\,dt=-5\\,dx$, so $\\dfrac{t^2}{2}-2t=-5x+c$.",
          "Multiply by $2$ and put $t=x-y$: $(x-y)^2-4(x-y)=-10x+C'$, i.e. $\\boxed{(x-y)^2-4(x-y)+10x=C}$."
        ]
      },
      {
        "name": "Verification by differentiation",
        "steps": [
          "Differentiate $(x-y)^2-4(x-y)+10x=C$: $2(x-y)(1-y')-4(1-y')+10=0$.",
          "Factor $(1-y')$: $(1-y')\\big(2(x-y)-4\\big)=-10$, so $1-y'=\\dfrac{-10}{2(x-y)-4}=\\dfrac{-5}{x-y-2}$.",
          "Therefore $y'=1+\\dfrac{5}{x-y-2}=\\dfrac{(x-y-2)+5}{x-y-2}=\\dfrac{x-y+3}{x-y-2}$, matching the equation and confirming $\\boxed{(x-y)^2-4(x-y)+10x=C}$."
        ]
      }
    ],
    "remark": "**Insight.** Two lines built from the *same* linear combination $x-y$ are automatically parallel, so there is no centre to translate to. The single substitution $t=x-y$ collapses the right-hand side to a function of $t$ alone, and the equation becomes separable. The cleanest tell is proportional coefficients of $x$ and $y$ in numerator and denominator."
  },
  {
    "theme": "redhom",
    "themeLabel": "Reducible to Homogeneous",
    "title": "Tangent Slope From a Pole",
    "difficulty": 5,
    "task": "Find the curve",
    "tags": [
      "geometry-of-tangent",
      "origin-shift",
      "homogeneous",
      "spiral"
    ],
    "statement": "At every point $(x,y)$ of a curve the slope of the tangent equals $\\dfrac{x+2y-3}{2x-y-1}$. Find the family of curves and describe its shape about the point $(1,1)$.",
    "answer": "\\[\\boxed{\\;2\\tan^{-1}\\!\\left(\\dfrac{y-1}{x-1}\\right)-\\tfrac12\\ln\\!\\big((x-1)^2+(y-1)^2\\big)=C\\;}\\]",
    "trap": "The denominator $2x-y-1$ and numerator $x+2y-3$ tempt a $y=vx$ substitution on the spot. But that only works after translating to the intersection $(1,1)$; applied to the raw fractions it leaves stray constants and fails. A further trap is dropping the factor $2$ in front of $\\tan^{-1}$: the homogeneous part here is $\\dfrac{X+2Y}{2X-Y}$, not $\\dfrac{X+Y}{X-Y}$, so the arctangent term carries a coefficient $2$.",
    "solutions": [
      {
        "name": "Shift to (1,1) then separate the homogeneous equation",
        "steps": [
          "Lines $x+2y-3=0$ and $2x-y-1=0$ meet at $(1,1)$. With $X=x-1,\\,Y=y-1$, $\\dfrac{dY}{dX}=\\dfrac{X+2Y}{2X-Y}$.",
          "Put $Y=vX$: $v+X\\dfrac{dv}{dX}=\\dfrac{1+2v}{2-v}$, so $X\\dfrac{dv}{dX}=\\dfrac{1+v^2}{2-v}$.",
          "Separate: $\\dfrac{2-v}{1+v^2}\\,dv=\\dfrac{dX}{X}$, giving $2\\tan^{-1}v-\\tfrac12\\ln(1+v^2)=\\ln X+c$.",
          "With $v=Y/X$ the $\\ln X$ merges into $-\\tfrac12\\ln(X^2+Y^2)$; restoring variables gives $\\boxed{2\\tan^{-1}\\!\\left(\\tfrac{y-1}{x-1}\\right)-\\tfrac12\\ln((x-1)^2+(y-1)^2)=C}$."
        ]
      },
      {
        "name": "Polar form about (1,1)",
        "steps": [
          "Set $X=r\\cos\\theta,\\,Y=r\\sin\\theta$ about $(1,1)$. The homogeneous equation $\\dfrac{dY}{dX}=\\dfrac{X+2Y}{2X-Y}$ converts to $\\dfrac{1}{r}\\dfrac{dr}{d\\theta}=2$.",
          "Integrate: $\\ln r=2\\theta+c$, with $\\theta=\\tan^{-1}(Y/X)$ and $\\ln r=\\tfrac12\\ln(X^2+Y^2)$.",
          "So $\\tfrac12\\ln(X^2+Y^2)=2\\tan^{-1}(Y/X)+c$; rearranging gives $2\\tan^{-1}(Y/X)-\\tfrac12\\ln(X^2+Y^2)=C$.",
          "Restoring $X=x-1,\\,Y=y-1$ yields $\\boxed{2\\tan^{-1}\\!\\left(\\tfrac{y-1}{x-1}\\right)-\\tfrac12\\ln((x-1)^2+(y-1)^2)=C}$. The curves are spirals winding about $(1,1)$."
        ]
      }
    ],
    "remark": "**Insight.** A purely geometric slope condition can still be a ratio-of-lines equation in disguise. Translating to the meeting point $(1,1)$ makes it homogeneous, and the polar reading $\\dfrac1r\\dfrac{dr}{d\\theta}=2$ reveals the integral curves as spirals; the rate $2$ at which $\\ln r$ grows with $\\theta$ is precisely what plants the factor $2$ on the arctangent term in the answer."
  },
  {
    "theme": "linear",
    "themeLabel": "Linear Equations & the Integrating Factor",
    "title": "The Equation That Refuses to Be Linear in y",
    "difficulty": 3,
    "task": "Determine",
    "tags": [
      "linear-in-x",
      "integrating-factor",
      "ivp",
      "disguise"
    ],
    "statement": "A curve through the origin satisfies $\\dfrac{dy}{dx}=\\dfrac{1}{\\,x+y^{2}\\,}$. Determine the $x$-coordinate of the point on the curve at which $y=1$.",
    "answer": "\\[\\boxed{x=2e-5}\\]",
    "trap": "Reading the equation as $y'+P(x)y=Q(x)$ and hunting for an integrating factor in $x$: the right side has $y^{2}$ in the denominator, so it is NOT linear in $y$ and no integrating factor in $x$ exists. The fix is to invert it: $\\frac{dx}{dy}=x+y^{2}$ is linear in $x$, with $x$ now the dependent variable.",
    "solutions": [
      {
        "name": "Invert and use the integrating factor in y",
        "steps": [
          "Reciprocate both sides: $\\frac{dx}{dy}=x+y^{2}$, i.e. $\\frac{dx}{dy}-x=y^{2}$, which is linear in $x$ with $P(y)=-1$ and $Q(y)=y^{2}$.",
          "The integrating factor is $e^{\\int(-1)\\,dy}=e^{-y}$, giving $\\big(x\\,e^{-y}\\big)'=y^{2}e^{-y}$.",
          "Integrate the right side by parts twice: $\\int y^{2}e^{-y}\\,dy=-(y^{2}+2y+2)e^{-y}+C$, so $x\\,e^{-y}=-(y^{2}+2y+2)e^{-y}+C$ and hence $x=C\\,e^{y}-y^{2}-2y-2$.",
          "Pin the curve to the origin, $x=0$ at $y=0$: $0=C-2\\Rightarrow C=2$, so $x=2e^{y}-y^{2}-2y-2$.",
          "At $y=1$: $x=2e-1-2-2=\\boxed{2e-5}\\approx0.4366$."
        ]
      },
      {
        "name": "Power-series cross-check at the origin",
        "steps": [
          "Since the curve passes through the origin, expand $x$ as a power series in $y$: $x=a_{1}y+a_{2}y^{2}+a_{3}y^{3}+\\dots$ (no constant term because $x(0)=0$).",
          "Substitute into $\\frac{dx}{dy}=x+y^{2}$ and match powers of $y$. The constant terms give $a_{1}=0$; the $y$ terms give $2a_{2}=a_{1}=0$ so $a_{2}=0$; the $y^{2}$ terms give $3a_{3}=a_{2}+1=1$ so $a_{3}=\\tfrac13$. Thus $x=\\tfrac{y^{3}}{3}+\\dots$, matching the closed form $x=2e^{y}-y^{2}-2y-2$ whose Taylor expansion is $\\tfrac{y^{3}}{3}+\\tfrac{y^{4}}{12}+\\dots$.",
          "Evaluating the closed form at $y=1$ gives $2e-5\\approx0.4366$, in agreement with the series being summed to $y=1$.",
          "Numerically integrating $\\frac{dx}{dy}=x+y^{2}$ from $(y,x)=(0,0)$ up to $y=1$ returns $x\\approx0.43656$, confirming $x=\\boxed{2e-5}$."
        ]
      }
    ],
    "remark": "Insight: the instant a $y$ appears nonlinearly in the slope while $x$ enters only to the first power, flip the roles of dependent and independent variable. The integrating factor lives in whichever variable enters linearly, here $x$."
  },
  {
    "theme": "linear",
    "themeLabel": "Linear Equations & the Integrating Factor",
    "title": "The Leading Coefficient You Cannot Ignore",
    "difficulty": 3,
    "task": "Find y given y of zero",
    "tags": [
      "linear",
      "integrating-factor",
      "leading-coefficient",
      "initial-condition"
    ],
    "statement": "Solve the differential equation $$\\left(1+x^{2}\\right)\\frac{dy}{dx}-2xy=\\left(1+x^{2}\\right)^{2},$$ given that $y(0)=2$. The coefficient of $\\dfrac{dy}{dx}$ is $1+x^{2}$, not $1$; the equation is linear only once it is written in the standard form $\\dfrac{dy}{dx}+P(x)\\,y=Q(x)$. Determine $y$ as an explicit function of $x$.",
    "answer": "\\boxed{y=(1+x^{2})(x+2)=x^{3}+2x^{2}+x+2}",
    "trap": "Reading $P=-2x$ and $Q=(1+x^{2})^{2}$ straight off the equation without first dividing by the leading coefficient $1+x^{2}$. That gives the false integrating factor $e^{\\int -2x\\,dx}=e^{-x^{2}}$ and forces the non-elementary integral $\\int (1+x^{2})^{2}e^{-x^{2}}dx$ (an $\\operatorname{erf}$ term) — a sign you have mis-identified $P$. You must divide through by $1+x^{2}$ first, after which $P=\\dfrac{-2x}{1+x^{2}}$ and the integrating factor is $\\dfrac{1}{1+x^{2}}$.",
    "solutions": [
      {
        "name": "Standard form, then integrating factor $e^{\\int P\\,dx}$",
        "steps": [
          "Divide the whole equation by the leading coefficient $1+x^{2}$ to reach standard form: $\\dfrac{dy}{dx}-\\dfrac{2x}{1+x^{2}}\\,y=1+x^{2}$. Now $P(x)=\\dfrac{-2x}{1+x^{2}}$ and $Q(x)=1+x^{2}$.",
          "Compute the integrating factor: $\\int P\\,dx=\\int\\dfrac{-2x}{1+x^{2}}\\,dx=-\\ln(1+x^{2})$, so $\\mu=e^{-\\ln(1+x^{2})}=\\dfrac{1}{1+x^{2}}$.",
          "Multiply through by $\\mu$: $\\dfrac{d}{dx}\\!\\left(\\dfrac{y}{1+x^{2}}\\right)=\\dfrac{1+x^{2}}{1+x^{2}}=1$.",
          "Integrate: $\\dfrac{y}{1+x^{2}}=x+C$, hence $y=(1+x^{2})(x+C)$.",
          "Apply $y(0)=2$: $2=(1)(0+C)\\Rightarrow C=2$. Therefore $y=(1+x^{2})(x+2)=x^{3}+2x^{2}+x+2$."
        ]
      },
      {
        "name": "Substitution $u=\\dfrac{y}{1+x^{2}}$ (guided by the same standard form)",
        "steps": [
          "The standard form $\\dfrac{dy}{dx}-\\dfrac{2x}{1+x^{2}}\\,y=1+x^{2}$ suggests setting $u=\\dfrac{y}{1+x^{2}}$, i.e. $y=(1+x^{2})\\,u$.",
          "Differentiate: $\\dfrac{dy}{dx}=2x\\,u+(1+x^{2})\\dfrac{du}{dx}$. Substitute back into the original equation $(1+x^{2})\\dfrac{dy}{dx}-2xy=(1+x^{2})^{2}$.",
          "The $2x$ terms cancel and everything reduces to $(1+x^{2})^{2}\\dfrac{du}{dx}=(1+x^{2})^{2}$, so $\\dfrac{du}{dx}=1$, giving $u=x+C$.",
          "Return to $y$: $y=(1+x^{2})(x+C)$. The condition $y(0)=2$ gives $C=2$, so $y=(1+x^{2})(x+2)=x^{3}+2x^{2}+x+2$."
        ]
      }
    ],
    "remark": "**Insight.** The single most common error in first-order linear equations is reading $P$ and $Q$ off an equation whose $\\dfrac{dy}{dx}$ still carries a coefficient. Standard form demands a leading coefficient of $1$: divide first, identify $P$ second. Here the honest division turns $-2x$ into $\\dfrac{-2x}{1+x^{2}}$, whose integral $-\\ln(1+x^{2})$ collapses the integrating factor to the clean $\\dfrac{1}{1+x^{2}}$ — and the right-hand side simplifies to a constant $1$. Skipping the division replaces this two-line solve with an impossible $\\operatorname{erf}$ integral, the tell-tale signature that you never reached standard form."
  },
  {
    "theme": "linear",
    "themeLabel": "Linear Equations & the Integrating Factor",
    "title": "Exponential Camouflage",
    "difficulty": 4,
    "task": "Find",
    "tags": [
      "substitution",
      "exponential",
      "linear",
      "ivp"
    ],
    "statement": "For $y(x)$ with $y(0)=0$, the equation $\\dfrac{dy}{dx}+1=e^{\\,x-y}$ holds. Find the exact value of $y(\\ln 2)$.",
    "answer": "\\[\\boxed{y(\\ln 2)=\\ln\\tfrac{5}{4}}\\]",
    "trap": "Attempting an integrating factor on $y'+1=e^{x}e^{-y}$ as though $e^{-y}$ were a linear forcing term. It is not linear in $y$. Multiplying through by $e^{y}$ and setting $u=e^{y}$ is what linearises it; the giveaway is that $e^{y}y'=(e^{y})'$.",
    "solutions": [
      {
        "name": "Substitute u=e^y",
        "steps": [
          "Multiply by $e^{y}$: $e^{y}y'+e^{y}=e^{x}$.",
          "Let $u=e^{y}$ so $u'=e^{y}y'$; then $u'+u=e^{x}$, linear in $u$.",
          "IF $=e^{x}$: $(ue^{x})'=e^{2x}\\Rightarrow ue^{x}=\\tfrac12e^{2x}+C\\Rightarrow u=\\tfrac12e^{x}+Ce^{-x}$.",
          "$y(0)=0\\Rightarrow u(0)=1=\\tfrac12+C\\Rightarrow C=\\tfrac12$, so $u=e^{y}=\\cosh x$.",
          "At $x=\\ln 2$: $\\cosh(\\ln2)=\\tfrac{2+1/2}{2}=\\tfrac54$, hence $y=\\boxed{\\ln\\tfrac54}$."
        ]
      },
      {
        "name": "Recognise the hyperbolic cosine",
        "steps": [
          "From $u'+u=e^x$ the general solution is $u=\\tfrac12e^x+Ce^{-x}$; with $C=\\tfrac12$ this is exactly $\\cosh x$.",
          "So $e^{y}=\\cosh x$, giving $y=\\ln(\\cosh x)$, which indeed satisfies $y(0)=\\ln 1=0$.",
          "Verify: $y'=\\tanh x$, and $y'+1-e^{x-y}=\\tanh x+1-\\frac{e^x}{\\cosh x}=\\tanh x+1-(\\tanh x+1)=0$.",
          "Therefore $y(\\ln 2)=\\ln\\cosh(\\ln2)=\\boxed{\\ln\\tfrac54}$."
        ]
      }
    ],
    "remark": "Insight: whenever $e^{y}$ multiplies the equation cleanly into a product-rule derivative, the hidden linear variable is $u=e^{y}$. The answer collapsing to $\\ln\\cosh x$ is the reward for seeing it."
  },
  {
    "theme": "linear",
    "themeLabel": "Linear Equations & the Integrating Factor",
    "title": "The Cubic Hiding in the Denominator",
    "difficulty": 4,
    "task": "Determine",
    "tags": [
      "linear-in-x",
      "integrating-factor",
      "disguise",
      "ivp"
    ],
    "statement": "A curve satisfies $\\dfrac{dy}{dx}=\\dfrac{y}{\\,x+y^{3}\\,}$ for $y>0$ and passes through $(6,2)$. Determine its $x$-coordinate when $y=4$.",
    "answer": "\\[\\boxed{x=36}\\]",
    "trap": "Cross-multiplying to $(x+y^3)y'=y$ and trying to force a linear-in-$y$ shape, where the $y^3$ wrecks any integrating factor in $x$. Inverting to $\\frac{dx}{dy}=\\frac{x}{y}+y^{2}$ exposes a linear ODE in $x$ with IF $=1/y$; choosing the integrating factor in $y$ (not $x$) is the crux.",
    "solutions": [
      {
        "name": "Flip to dx/dy",
        "steps": [
          "Reciprocate: $\\frac{dx}{dy}=\\frac{x+y^3}{y}=\\frac{x}{y}+y^{2}$, i.e. $\\frac{dx}{dy}-\\frac{x}{y}=y^{2}$, which is linear in $x$.",
          "Integrating factor $=e^{-\\int dy/y}=\\frac1y$: $\\big(\\frac{x}{y}\\big)'=y\\Rightarrow \\frac{x}{y}=\\frac{y^{2}}{2}+C$.",
          "So $x=\\frac{y^{3}}{2}+Cy$. Pin $(6,2)$: $6=4+2C\\Rightarrow C=1$, giving $x=\\frac{y^3}{2}+y$.",
          "At $y=4$: $x=\\frac{64}{2}+4=\\boxed{36}$."
        ]
      },
      {
        "name": "Substitution w=x/y",
        "steps": [
          "With $w=x/y$ the linear equation $x'-x/y=y^2$ becomes $w'=y$ after dividing by $y$ (since $(x/y)'=\\frac{x'}{y}-\\frac{x}{y^2}=\\frac{x'-x/y}{y}=y$).",
          "Integrate: $w=\\frac{y^2}{2}+C$, hence $x=\\frac{y^{3}}{2}+Cy$.",
          "Apply $(6,2)$ to get $C=1$, so $x=\\frac{y^3}{2}+y$.",
          "Evaluate at $y=4$: $x=\\frac{64}{2}+4=\\boxed{36}$."
        ]
      }
    ],
    "remark": "Insight: a lone first-power $x$ trapped in a denominator beside higher powers of $y$ is the universal signature of 'linear in $x$'. Reach for $\\frac{dx}{dy}$ before reaching for an integrating factor."
  },
  {
    "theme": "linear",
    "themeLabel": "Linear Equations & the Integrating Factor",
    "title": "When y Is the Coefficient, Flip the Roles",
    "difficulty": 4,
    "task": "Solve the equation",
    "tags": [
      "linear-in-x",
      "integrating-factor",
      "role-reversal",
      "first-order"
    ],
    "statement": "Solve $\\dfrac{dy}{dx}=\\dfrac{1}{e^{y}-x}.$",
    "answer": "\\[\\boxed{\\;x=\\tfrac12 e^{y}+C\\,e^{-y}\\;}\\]",
    "trap": "The seductive move is to reciprocate and write $\\dfrac{dy}{dx}\\,(e^{y}-x)=1$, then hunt for an integrating factor in $x$ as if the unknown were $y$. But $e^{y}$ is not a polynomial in $y$, so no choice of $P(x)$ makes this linear in $y$; chasing $e^{\\int P\\,dx}$ here leads nowhere. Declaring $x=e^{y}-1+C$ (the answer to the simpler $\\tfrac{dx}{dy}=e^{y}-x$ misread as $\\tfrac{dx}{dy}+x=e^{y}$ but with the constant dropped after forgetting the factor $e^{-y}$) does not satisfy the equation.",
    "solutions": [
      {
        "name": "Invert to a linear equation in x",
        "steps": [
          "Take reciprocals: $\\dfrac{dx}{dy}=e^{y}-x$, i.e. $\\dfrac{dx}{dy}+x=e^{y}$. This is linear in $x$ with $P(y)=1$ and $Q(y)=e^{y}$.",
          "The integrating factor is $e^{\\int 1\\,dy}=e^{y}$. Multiply through: $\\dfrac{d}{dy}\\big(x\\,e^{y}\\big)=e^{y}\\cdot e^{y}=e^{2y}.$",
          "Integrate: $x\\,e^{y}=\\tfrac12 e^{2y}+C.$",
          "Divide by $e^{y}$: $\\boxed{x=\\tfrac12 e^{y}+C\\,e^{-y}}.$"
        ]
      },
      {
        "name": "Verify by direct differentiation",
        "steps": [
          "From the claimed family $x=\\tfrac12 e^{y}+C\\,e^{-y}$ differentiate with respect to $y$: $\\dfrac{dx}{dy}=\\tfrac12 e^{y}-C\\,e^{-y}.$",
          "Then $e^{y}-x=e^{y}-\\tfrac12 e^{y}-C\\,e^{-y}=\\tfrac12 e^{y}-C\\,e^{-y}=\\dfrac{dx}{dy}.$",
          "Hence $\\dfrac{dy}{dx}=\\dfrac{1}{\\,dx/dy\\,}=\\dfrac{1}{e^{y}-x}$, matching the equation, so $\\boxed{x=\\tfrac12 e^{y}+C\\,e^{-y}}.$"
        ]
      }
    ],
    "remark": "**Insight.** The equation looks hopeless in $y$ because $e^{y}$ is non-linear there. Reading the same relation as $\\dfrac{dx}{dy}+x=e^{y}$ turns it into a textbook linear equation in $x$. The lesson: when one variable enters non-linearly but the **other** appears to first degree, swap the roles of dependent and independent variable before reaching for the integrating factor."
  },
  {
    "theme": "linear",
    "themeLabel": "Linear Equations & the Integrating Factor",
    "title": "The Tangent That Cuts the Axis at x Squared",
    "difficulty": 4,
    "task": "Find the curve",
    "tags": [
      "tangent-intercept",
      "geometric",
      "integrating-factor",
      "particular-solution"
    ],
    "statement": "A curve passes through $(1,2)$. At every point the tangent line meets the $y$-axis at the height $x^{2}$ (that is, the $y$-intercept of the tangent equals $x^{2}$). Find the equation of the curve.",
    "answer": "\\[\\boxed{\\;y=3x-x^{2}\\;}\\]",
    "trap": "It is tempting to write the $y$-intercept as just $y$ and set $y=x^{2}$, giving the parabola $y=x^{2}$ outright (which even fails the point $(1,2)$). The intercept of the **tangent**, not of the curve, is $y-x\\dfrac{dy}{dx}$. Ignoring the slope term discards the entire differential equation and produces a curve that does not have the stated tangent property.",
    "solutions": [
      {
        "name": "Translate the geometry, then use the integrating factor",
        "steps": [
          "The tangent at $(x,y)$ has equation $Y-y=\\dfrac{dy}{dx}(X-x)$; setting $X=0$ gives the $y$-intercept $y-x\\dfrac{dy}{dx}$. The condition is $y-x\\dfrac{dy}{dx}=x^{2}.$",
          "Rearrange: $x\\dfrac{dy}{dx}-y=-x^{2}$, i.e. $\\dfrac{dy}{dx}-\\dfrac{y}{x}=-x.$ This is linear with $P(x)=-\\dfrac1x,\\;Q(x)=-x.$",
          "Integrating factor $e^{\\int(-1/x)\\,dx}=e^{-\\ln x}=\\dfrac1x.$ Then $\\dfrac{d}{dx}\\!\\left(\\dfrac{y}{x}\\right)=\\dfrac1x\\cdot(-x)=-1.$",
          "Integrate: $\\dfrac{y}{x}=-x+C$, so $y=-x^{2}+Cx.$ Using $(1,2)$: $2=-1+C\\Rightarrow C=3$, giving $\\boxed{y=3x-x^{2}}.$"
        ]
      },
      {
        "name": "Subtangent-free direct check of the family",
        "steps": [
          "Solve the linear core $x y'-y=-x^{2}$ for its general family $y=Cx-x^{2}$ (slope $y'=C-2x$).",
          "Compute the tangent intercept: $y-xy'=(Cx-x^{2})-x(C-2x)=Cx-x^{2}-Cx+2x^{2}=x^{2}$, confirming the property holds for every member.",
          "Impose $(1,2)$: $2=C-1\\Rightarrow C=3$, so the required curve is $\\boxed{y=3x-x^{2}}.$"
        ]
      }
    ],
    "remark": "**Insight.** A tangent-intercept condition is really a first-order differential equation in disguise: the phrase \"$y$-intercept of the tangent\" must be encoded as $y-x\\,y'$, never as $y$. Once written that way the equation is plainly linear, and the integrating factor $1/x$ collapses the left side to a single derivative $\\big(y/x\\big)'$."
  },
  {
    "theme": "linear",
    "themeLabel": "Linear Equations & the Integrating Factor",
    "title": "The Sine That Linearises",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "substitution",
      "trigonometric",
      "linear",
      "ivp"
    ],
    "statement": "For $y(x)$ with $y(0)=0$, the equation $\\cos y\\,\\dfrac{dy}{dx}+\\sin y=x$ holds. Determine the exact value of $\\sin\\big(y(1)\\big)$.",
    "answer": "\\[\\boxed{\\sin\\big(y(1)\\big)=\\dfrac{1}{e}}\\]",
    "trap": "Dividing by $\\cos y$ to isolate $y'$ and then treating $\\sin y / \\cos y=\\tan y$ as a linear term — generating a nonlinear mess. The clean move is $u=\\sin y$, since $u'=\\cos y\\,y'$ is already sitting in the equation; then $u'+u=x$ is linear in $u$.",
    "solutions": [
      {
        "name": "Substitute u=sin y",
        "steps": [
          "Notice $\\cos y\\,y'=\\frac{d}{dx}(\\sin y)$. Let $u=\\sin y$; the equation is $u'+u=x$.",
          "IF $=e^{x}$: $(ue^{x})'=xe^{x}\\Rightarrow ue^{x}=(x-1)e^{x}+C\\Rightarrow u=x-1+Ce^{-x}$.",
          "$y(0)=0\\Rightarrow u(0)=\\sin0=0=-1+C\\Rightarrow C=1$, so $\\sin y=x-1+e^{-x}$.",
          "At $x=1$: $\\sin\\big(y(1)\\big)=1-1+e^{-1}=\\boxed{\\tfrac1e}$."
        ]
      },
      {
        "name": "Series sanity check",
        "steps": [
          "The linear solution $u=x-1+e^{-x}$ expands as $u=\\frac{x^2}{2}-\\frac{x^3}{6}+\\cdots$, vanishing to quadratic order at $0$ — consistent with $u(0)=u'(0)=0$ from $u'+u=x$.",
          "Verify $u'(0)=-u(0)+0=0$ and $u''(0)=1$, matching $\\frac{x^2}{2}$ leading term.",
          "At $x=1$ the series sums to $1-1+e^{-1}=e^{-1}$.",
          "Hence $\\sin\\big(y(1)\\big)=\\boxed{\\tfrac1e}$, independent of which branch $y(1)$ lies on, since only $\\sin y$ is asked."
        ]
      }
    ],
    "remark": "Insight: when $\\cos y\\,y'$ appears intact, it is begging to be read as $(\\sin y)'$. Asking for $\\sin(y(1))$ rather than $y(1)$ sidesteps the multivalued $\\arcsin$ — a deliberate, honest framing."
  },
  {
    "theme": "linear",
    "themeLabel": "Linear Equations & the Integrating Factor",
    "title": "Solve, Then Find the Closest Approach",
    "difficulty": 5,
    "task": "Find",
    "tags": [
      "linear-in-x",
      "substitution",
      "exponential",
      "optimisation",
      "hybrid"
    ],
    "statement": "A trajectory in the $xy$-plane satisfies $\\dfrac{dy}{dx}=\\dfrac{1}{\\,e^{y}-x\\,}$ and passes through $\\big(\\tfrac32,0\\big)$. Find the smallest $x$-coordinate attained anywhere on this trajectory.",
    "answer": "\\[\\boxed{x_{\\min}=\\sqrt{2}}\\]",
    "trap": "Two traps stacked. First, the slope has $e^{y}$ in the denominator, so the equation is not linear in $y$; invert it to read $\\frac{dx}{dy}+x=e^{y}$, which is linear in $x$ — trying an integrating factor in $x$ is hopeless. Second, after solving, the 'smallest $x$' is NOT a boundary value: since $x\\to\\infty$ at both ends of the curve, the minimum is an interior extremum found by setting $\\frac{dx}{dy}=0$. Reading $x$ at the given point yields $\\tfrac32>\\sqrt2$, which overshoots the true minimum.",
    "solutions": [
      {
        "name": "Linearise in x, then minimise",
        "steps": [
          "Reciprocate: $\\frac{dx}{dy}=e^{y}-x$, i.e. $\\frac{dx}{dy}+x=e^{y}$, which is linear in $x$.",
          "Integrating factor $e^{y}$: $(xe^{y})'=e^{2y}\\Rightarrow xe^{y}=\\tfrac12e^{2y}+C\\Rightarrow x=\\tfrac12e^{y}+Ce^{-y}$.",
          "Pin $\\big(\\tfrac32,0\\big)$: $\\tfrac32=\\tfrac12+C\\Rightarrow C=1$, so $x(y)=\\tfrac12e^{y}+e^{-y}$.",
          "Minimise over $y$: $\\frac{dx}{dy}=\\tfrac12e^{y}-e^{-y}=0\\Rightarrow e^{2y}=2\\Rightarrow y=\\tfrac12\\ln2$; the second derivative $\\tfrac12e^{y}+e^{-y}>0$ confirms a minimum.",
          "$x_{\\min}=\\tfrac12\\sqrt2+\\tfrac{1}{\\sqrt2}=\\tfrac{1}{\\sqrt2}+\\tfrac{1}{\\sqrt2}=\\boxed{\\sqrt2}$."
        ]
      },
      {
        "name": "AM-GM after solving",
        "steps": [
          "Having found $x(y)=\\tfrac12e^{y}+e^{-y}$, view it as a sum of two positive terms.",
          "By AM-GM, $\\tfrac12e^{y}+e^{-y}\\ge 2\\sqrt{\\tfrac12e^{y}\\cdot e^{-y}}=2\\sqrt{\\tfrac12}=\\sqrt2$.",
          "Equality holds when $\\tfrac12e^{y}=e^{-y}$, i.e. $e^{2y}=2$, which is attained on the curve at $y=\\tfrac12\\ln2$.",
          "Therefore the least $x$-coordinate is $\\boxed{\\sqrt2}$."
        ]
      }
    ],
    "remark": "Insight: the grand hybrid - recognise the equation is linear in $x$ (not $y$), integrate to get $x(y)=\\tfrac12e^{y}+e^{-y}$, then realise the question is an optimisation along the solved curve. Because $x\\to\\infty$ as $y\\to\\pm\\infty$, the minimum is interior; it falls straight out of AM-GM as $\\sqrt2$, rewarding structure over brute calculus."
  },
  {
    "theme": "linear",
    "themeLabel": "Linear Equations & the Integrating Factor",
    "title": "A Factor That Splits in Partial Fractions",
    "difficulty": 5,
    "task": "Solve the equation",
    "tags": [
      "integrating-factor",
      "partial-fractions",
      "rational-coefficient",
      "first-order"
    ],
    "statement": "Solve $\\dfrac{dy}{dx}+\\dfrac{y}{x(x+1)}=\\dfrac{x+1}{x}$ for $x>0.$",
    "answer": "\\[\\boxed{\\;y=(x+1)\\!\\left(1+\\dfrac{C}{x}\\right)\\;}\\]",
    "trap": "The fatal slip is to find the integrating factor $\\mu=\\dfrac{x}{x+1}$ correctly but then integrate $Q=\\dfrac{x+1}{x}$ **without** multiplying it by $\\mu$ first. That gives $\\mu y=\\displaystyle\\int\\dfrac{x+1}{x}\\,dx=x+\\ln x+C$, i.e. the bogus $y=\\dfrac{(x+1)(x+\\ln x+C)}{x}$. The rule is $\\dfrac{d}{dx}(\\mu y)=\\mu Q$, so one must integrate $\\mu Q$, not $Q$ alone; here $\\mu Q=1$, and the stray logarithm betrays the mistake.",
    "solutions": [
      {
        "name": "Partial-fraction the coefficient, then integrate",
        "steps": [
          "Split $P(x)=\\dfrac{1}{x(x+1)}=\\dfrac1x-\\dfrac1{x+1}.$ Hence $\\int P\\,dx=\\ln x-\\ln(x+1)=\\ln\\dfrac{x}{x+1}$, so the integrating factor is $\\mu=\\dfrac{x}{x+1}.$",
          "Crucially multiply the right side by $\\mu$ too: $\\mu Q=\\dfrac{x}{x+1}\\cdot\\dfrac{x+1}{x}=1.$ The equation becomes $\\dfrac{d}{dx}\\!\\left(\\dfrac{x}{x+1}\\,y\\right)=1.$",
          "Integrate: $\\dfrac{x}{x+1}\\,y=x+C.$",
          "Solve for $y$: $y=\\dfrac{(x+1)(x+C)}{x}=(x+1)\\!\\left(1+\\dfrac{C}{x}\\right)$, i.e. $\\boxed{y=(x+1)\\!\\left(1+\\dfrac{C}{x}\\right)}.$"
        ]
      },
      {
        "name": "Spot the particular solution and add the homogeneous part",
        "steps": [
          "Try a particular solution $y_p=x+1$: then $y_p'=1$ and $\\dfrac{y_p}{x(x+1)}=\\dfrac{x+1}{x(x+1)}=\\dfrac1x$, so $y_p'+\\dfrac{y_p}{x(x+1)}=1+\\dfrac1x=\\dfrac{x+1}{x}$, which matches $Q$. So $y_p=x+1$ works.",
          "The associated reduced equation $y'+\\dfrac{y}{x(x+1)}=0$ separates to $\\dfrac{dy}{y}=-\\Big(\\dfrac1x-\\dfrac1{x+1}\\Big)dx$, giving $y_h=C\\,\\dfrac{x+1}{x}.$",
          "The general solution is $y=y_p+y_h=(x+1)+C\\dfrac{x+1}{x}=(x+1)\\!\\left(1+\\dfrac{C}{x}\\right)$, i.e. $\\boxed{y=(x+1)\\!\\left(1+\\dfrac{C}{x}\\right)}.$"
        ]
      }
    ],
    "remark": "**Insight.** When $P(x)$ is a rational function, partial fractions are what make $\\int P\\,dx$ a clean sum of logs, and the integrating factor lands as a tidy ratio. The decisive discipline is that the integrating factor multiplies **both** sides: integrating $\\mu Q$ (here just $1$) rather than $Q$ is the difference between the right answer and a spurious logarithm."
  },
  {
    "theme": "linear",
    "themeLabel": "Linear Equations & the Integrating Factor",
    "title": "Linear Only After You Read It Sideways",
    "difficulty": 5,
    "task": "Solve the IVP",
    "tags": [
      "linear-in-x",
      "integrating-factor",
      "initial-value",
      "role-reversal"
    ],
    "statement": "Solve the initial value problem $\\dfrac{dy}{dx}=\\dfrac{y}{\\,2x+y^{4}\\,},\\qquad y\\!\\left(\\tfrac32\\right)=1.$",
    "answer": "\\[\\boxed{\\;x=\\tfrac12\\,y^{4}+y^{2}\\;}\\]",
    "trap": "Read as an equation for $y$, the $y^{4}$ in the denominator tempts one to clear it and chase a power-substitution of the form $\\dfrac{dy}{dx}+P(x)y=Q(x)\\,y^{n}$ — but the equation is not of that shape, and forcing it wastes effort. A second slip is to recover the correct linear-in-$x$ form $\\dfrac{dx}{dy}-\\dfrac{2}{y}x=y^{3}$ but use the integrating factor $e^{-2y}$ (treating $-\\tfrac2y$ as if it were a constant $-2$). That yields the bogus $x=\\tfrac12 y^{4}+C\\,e^{-2y}$, which fails to satisfy $y\\,\\dfrac{dx}{dy}-2x=y^{4}.$",
    "solutions": [
      {
        "name": "Reciprocate to a linear equation in x",
        "steps": [
          "Invert: $\\dfrac{dx}{dy}=\\dfrac{2x+y^{4}}{y}=\\dfrac{2}{y}\\,x+y^{3}.$ Hence $\\dfrac{dx}{dy}-\\dfrac{2}{y}\\,x=y^{3}$, which is linear in $x$ with $P(y)=-\\dfrac{2}{y}$ and $Q(y)=y^{3}.$",
          "Integrating factor $\\mu=e^{\\int(-2/y)\\,dy}=e^{-2\\ln y}=\\dfrac{1}{y^{2}}.$ Multiply both sides by $\\mu$, including the right side: $\\mu Q=\\dfrac{1}{y^{2}}\\cdot y^{3}=y.$ Thus $\\dfrac{d}{dy}\\!\\left(\\dfrac{x}{y^{2}}\\right)=y.$",
          "Integrate: $\\dfrac{x}{y^{2}}=\\dfrac{y^{2}}{2}+C$, so the general solution is $x=\\dfrac12 y^{4}+C\\,y^{2}.$",
          "Apply $y=1,\\,x=\\tfrac32$: $\\tfrac32=\\tfrac12+C\\Rightarrow C=1.$ Therefore $\\boxed{x=\\tfrac12 y^{4}+y^{2}}.$"
        ]
      },
      {
        "name": "Substitution u = x / y^2",
        "steps": [
          "From $\\dfrac{dx}{dy}-\\dfrac{2}{y}x=y^{3}$, set $u=\\dfrac{x}{y^{2}}$, so $x=u y^{2}$ and $\\dfrac{dx}{dy}=u'\\,y^{2}+2uy.$",
          "Substitute: $u'y^{2}+2uy-\\dfrac{2}{y}\\,(u y^{2})=y^{3}\\Rightarrow u'y^{2}=y^{3}\\Rightarrow \\dfrac{du}{dy}=y.$",
          "Integrate: $u=\\dfrac{y^{2}}{2}+C$, hence $x=u y^{2}=\\dfrac12 y^{4}+C y^{2}.$",
          "Impose $y(\\tfrac32)=1$, i.e. $x=\\tfrac32$ at $y=1$: $C=1$, giving $\\boxed{x=\\tfrac12 y^{4}+y^{2}}.$"
        ]
      }
    ],
    "remark": "**Insight.** The high power $y^{4}$ in the denominator is a decoy: viewed as $\\dfrac{dx}{dy}$, the relation is linear in $x$, and the variable coefficient $-\\tfrac2y$ demands the integrating factor $y^{-2}$ — not the constant-coefficient $e^{-2y}$. Reading a stubborn equation sideways, then computing $e^{\\int P\\,dy}$ honestly, turns a frightening fraction into two short integrations."
  },
  {
    "theme": "ivp",
    "themeLabel": "Initial-Value Problems",
    "title": "An Arctangent Tug of War",
    "difficulty": 3,
    "task": "Find the value",
    "tags": [
      "variables separable",
      "initial condition",
      "arctangent",
      "particular solution"
    ],
    "statement": "A curve passes through $(0,1)$ and satisfies $$\\frac{dy}{dx}=\\frac{1+y^{2}}{1+x^{2}}.$$ Find $y\\!\\left(\\tfrac12\\right)$.",
    "answer": "\\[\\boxed{\\,y\\!\\left(\\tfrac12\\right)=3\\,}\\]",
    "trap": "Separating to $\\arctan y=\\arctan x+C$ but then forgetting the constant and writing $\\arctan y=\\arctan x$, i.e. $y=x$, gives $y(\\tfrac12)=\\tfrac12$. This curve fails the condition $y(0)=1$ entirely; the constant must be fixed from the point before any value is read off.",
    "solutions": [
      {
        "name": "Separate, then fix the constant",
        "steps": [
          "The variables separate: $\\dfrac{dy}{1+y^{2}}=\\dfrac{dx}{1+x^{2}}$, so integrating gives $\\arctan y=\\arctan x+C$.",
          "Apply $y(0)=1$: $\\arctan 1=\\arctan 0+C\\Rightarrow C=\\dfrac{\\pi}{4}$.",
          "Thus $\\arctan y=\\arctan x+\\dfrac{\\pi}{4}$, so $y=\\tan\\!\\left(\\arctan x+\\dfrac{\\pi}{4}\\right)=\\dfrac{x+1}{1-x}$.",
          "At $x=\\tfrac12$: $y=\\dfrac{\\tfrac12+1}{1-\\tfrac12}=\\dfrac{3/2}{1/2}=\\boxed{3}.$"
        ]
      },
      {
        "name": "Tangent-addition shortcut",
        "steps": [
          "Write $u=\\arctan y$ and $v=\\arctan x$; the equation says $du=dv$, i.e. $u-v$ is constant along the curve.",
          "At the start $u-v=\\arctan 1-\\arctan 0=\\dfrac{\\pi}{4}$, a fixed angle preserved everywhere on the solution.",
          "Hence $\\arctan y-\\arctan x=\\dfrac{\\pi}{4}$, giving $\\dfrac{y-x}{1+xy}=\\tan\\dfrac{\\pi}{4}=1$, so $y-x=1+xy$.",
          "Put $x=\\tfrac12$: $y-\\tfrac12=1+\\tfrac12 y\\Rightarrow \\tfrac12 y=\\tfrac32\\Rightarrow y=\\boxed{3}.$"
        ]
      }
    ],
    "remark": "**Insight.** Integrating an ODE produces a *family*; the initial point is what selects one member of it. Stripping the constant collapses the whole family to the single boring line $y=x$ — which does not even pass through $(0,1)$. Always carry $+C$ and pin it down last."
  },
  {
    "theme": "ivp",
    "themeLabel": "Initial-Value Problems",
    "title": "Growth Riding on a Cosine",
    "difficulty": 3,
    "task": "Find the value",
    "tags": [
      "variables separable",
      "rate of change",
      "initial condition",
      "exponential"
    ],
    "statement": "A quantity grows at a rate proportional to itself with a periodically varying coefficient: $$\\frac{dy}{dx}=y\\cos x,\\qquad y(0)=1.$$ Find $y\\!\\left(\\tfrac{\\pi}{2}\\right)$.",
    "answer": "\\[\\boxed{\\,y=e^{\\sin x},\\qquad y\\!\\left(\\tfrac{\\pi}{2}\\right)=e\\,}\\]",
    "trap": "Integrating $\\dfrac{dy}{y}=\\cos x\\,dx$ to $\\ln y=\\sin x$ and forgetting the constant, then claiming $y(0)=e^{\\sin 0}=1$ \"already works\" — true here only by luck. The disciplined route writes $\\ln y=\\sin x+C$ and fixes $C=0$; skipping it would give nonsense for any condition other than $y(0)=1$ and trains a wrong habit.",
    "solutions": [
      {
        "name": "Separate variables",
        "steps": [
          "Separate: $\\dfrac{dy}{y}=\\cos x\\,dx$ (valid where $y>0$, which holds near the start since $y(0)=1$).",
          "Integrate: $\\ln y=\\sin x+C$. Apply $y(0)=1$: $\\ln 1=\\sin 0+C\\Rightarrow C=0$.",
          "Thus $\\ln y=\\sin x$, i.e. $y=e^{\\sin x}$.",
          "Then $y\\!\\left(\\tfrac{\\pi}{2}\\right)=e^{\\sin(\\pi/2)}=e^{1}=\\boxed{e}.$"
        ]
      },
      {
        "name": "Linear equation form",
        "steps": [
          "Write $\\dfrac{dy}{dx}-(\\cos x)\\,y=0$, linear with integrating factor $e^{-\\int\\cos x\\,dx}=e^{-\\sin x}$.",
          "Then $\\dfrac{d}{dx}\\!\\left(ye^{-\\sin x}\\right)=0$, so $ye^{-\\sin x}=C$, giving $y=Ce^{\\sin x}$.",
          "The condition $y(0)=1$ forces $C=1$, hence $y=e^{\\sin x}$.",
          "Therefore $y\\!\\left(\\tfrac{\\pi}{2}\\right)=e^{1}=\\boxed{e}.$"
        ]
      }
    ],
    "remark": "**Insight.** Proportional growth with a varying coefficient still integrates cleanly, because the coefficient's antiderivative rides into the exponent. The lesson of the constant stands even when it happens to vanish: write it, then earn its value from the data."
  },
  {
    "theme": "ivp",
    "themeLabel": "Initial-Value Problems",
    "title": "Integrating Factor, Then the Point",
    "difficulty": 4,
    "task": "Find the value",
    "tags": [
      "linear equation",
      "integrating factor",
      "initial condition",
      "particular solution"
    ],
    "statement": "Solve the initial-value problem $$\\frac{dy}{dx}+y=x,\\qquad y(0)=2,$$ and hence find $y(1)$, giving the answer in closed form.",
    "answer": "\\[\\boxed{\\,y(x)=x-1+3e^{-x},\\qquad y(1)=\\dfrac{3}{e}\\,}\\]",
    "trap": "Reading off only the particular part $y=x-1$ (the response to the right-hand side) and discarding the complementary term $Ce^{-x}$ gives $y(1)=0$. But $y=x-1$ has $y(0)=-1\\neq 2$; the homogeneous piece is exactly what lets the condition be met, so it must be kept and its constant fixed.",
    "solutions": [
      {
        "name": "Integrating factor",
        "steps": [
          "Here $P(x)=1$, so the integrating factor is $e^{\\int 1\\,dx}=e^{x}$.",
          "Multiplying, $\\dfrac{d}{dx}\\!\\left(ye^{x}\\right)=xe^{x}$, hence $ye^{x}=\\int xe^{x}\\,dx=(x-1)e^{x}+C$.",
          "So $y=x-1+Ce^{-x}$. Apply $y(0)=2$: $-1+C=2\\Rightarrow C=3$, giving $y=x-1+3e^{-x}$.",
          "Then $y(1)=1-1+3e^{-1}=\\boxed{\\dfrac{3}{e}}.$"
        ]
      },
      {
        "name": "General plus particular solution",
        "steps": [
          "The associated equation $y'+y=0$ has solution $y_{c}=Ce^{-x}$.",
          "Try a particular solution $y_{p}=ax+b$: then $a+ax+b=x$ forces $a=1,\\ a+b=0$, so $y_{p}=x-1$.",
          "The full solution is $y=x-1+Ce^{-x}$; the point $y(0)=2$ gives $C=3$.",
          "Therefore $y(1)=0+3e^{-1}=\\boxed{\\dfrac{3}{e}}.$"
        ]
      }
    ],
    "remark": "**Insight.** A first-order linear IVP always needs **both** pieces: the particular response to $Q(x)$ and the decaying complementary term that carries the freedom to satisfy the starting value. Dropping $Ce^{-x}$ throws away the only knob you have."
  },
  {
    "theme": "ivp",
    "themeLabel": "Initial-Value Problems",
    "title": "A Homogeneous Slope at the Origin",
    "difficulty": 4,
    "task": "Find the value",
    "tags": [
      "homogeneous equation",
      "substitution y=vx",
      "initial condition",
      "logarithm"
    ],
    "statement": "The curve through $(1,0)$ obeys $$\\frac{dy}{dx}=\\frac{x+y}{x}.$$ Find $y(e)$.",
    "answer": "\\[\\boxed{\\,y(x)=x\\ln x,\\qquad y(e)=e\\,}\\]",
    "trap": "Solving the family as $y=x\\ln x+Cx$ but then writing $y=x\\ln x+C$ (treating the lost constant as a free additive constant rather than the coefficient of $x$ produced by $y=vx$) makes $y(1)=C$, and $C=0$ gives $y=x\\ln x$ by accident — yet the same slip gives $y(e)=e+0$ only if you are lucky. Worse, applying $y(1)=0$ to $y=x\\ln x+C$ yields $C=0$ but the function $y=x\\ln x+C$ with $C\\neq0$ does not even solve the ODE, so the additive form is structurally wrong.",
    "solutions": [
      {
        "name": "Substitution y = vx",
        "steps": [
          "The right side is $1+\\dfrac{y}{x}$, a function of $y/x$, so set $y=vx$, $\\dfrac{dy}{dx}=v+x\\dfrac{dv}{dx}$.",
          "Then $v+x\\dfrac{dv}{dx}=1+v\\Rightarrow x\\dfrac{dv}{dx}=1$, i.e. $dv=\\dfrac{dx}{x}$, so $v=\\ln x+C$.",
          "Back-substitute: $\\dfrac{y}{x}=\\ln x+C\\Rightarrow y=x\\ln x+Cx$. Apply $y(1)=0$: $0=0+C\\Rightarrow C=0$.",
          "Hence $y=x\\ln x$ and $y(e)=e\\ln e=\\boxed{e}.$"
        ]
      },
      {
        "name": "Linear-equation viewpoint",
        "steps": [
          "Rewrite as $\\dfrac{dy}{dx}-\\dfrac{1}{x}\\,y=1$, a linear equation with integrating factor $e^{-\\int dx/x}=\\dfrac1x$.",
          "Then $\\dfrac{d}{dx}\\!\\left(\\dfrac{y}{x}\\right)=\\dfrac1x$, so $\\dfrac{y}{x}=\\ln x+C$ and $y=x\\ln x+Cx$.",
          "The point $(1,0)$ gives $C=0$, so $y=x\\ln x$.",
          "Therefore $y(e)=\\boxed{e}.$"
        ]
      }
    ],
    "remark": "**Insight.** When $y=vx$ unwinds, the freedom re-enters as $Cx$, **not** a bare $+C$. The shape of the arbitrary constant is dictated by the substitution; guessing an additive constant produces a function that may not solve the equation at all."
  },
  {
    "theme": "ivp",
    "themeLabel": "Initial-Value Problems",
    "title": "Where the Square Root Runs Out",
    "difficulty": 4,
    "task": "Find the interval",
    "tags": [
      "homogeneous equation",
      "substitution y=vx",
      "interval of validity",
      "domain"
    ],
    "statement": "The solution of $$\\frac{dy}{dx}=\\frac{x^{2}+y^{2}}{xy},\\qquad y(1)=1,$$ is a curve in the region $x>0,\\ y>0$. Find its explicit form $y(x)$ and the largest open interval of $x$ on which this particular solution is defined.",
    "answer": "\\[\\boxed{\\,y=x\\sqrt{2\\ln x+1}\\,,\\qquad x\\in\\left(e^{-1/2},\\ \\infty\\right)\\,}\\]",
    "trap": "Stopping at $y=x\\sqrt{2\\ln x+1}$ and declaring it valid for all $x>0$. But the radicand $2\\ln x+1$ turns negative once $x<e^{-1/2}$, where $y$ is no longer real; the particular solution lives only on $x>e^{-1/2}$, the branch containing the start point $x=1$.",
    "solutions": [
      {
        "name": "Substitution y = vx",
        "steps": [
          "Divide top and bottom by $x^{2}$: $\\dfrac{dy}{dx}=\\dfrac{1+(y/x)^{2}}{y/x}$. Put $y=vx$, $y'=v+xv'$.",
          "Then $v+xv'=\\dfrac{1+v^{2}}{v}=\\dfrac1v+v$, so $xv'=\\dfrac1v$, giving $v\\,dv=\\dfrac{dx}{x}$.",
          "Integrate: $\\dfrac{v^{2}}{2}=\\ln x+C$. At $x=1,\\ v=y/x=1$: $\\tfrac12=0+C\\Rightarrow C=\\tfrac12$.",
          "So $v^{2}=2\\ln x+1$ and $y=x\\sqrt{2\\ln x+1}$. Reality of the root needs $2\\ln x+1>0$, i.e. $x>e^{-1/2}$, hence $\\boxed{x\\in(e^{-1/2},\\infty)}.$"
        ]
      },
      {
        "name": "Direct integration in u = y^2",
        "steps": [
          "Let $u=y^{2}$, so $u'=2yy'$. Multiplying the ODE by $2y$: $2yy'=\\dfrac{2(x^{2}+y^{2})}{x}=2x+\\dfrac{2u}{x}$.",
          "Thus $u'-\\dfrac{2}{x}u=2x$, a linear equation with integrating factor $x^{-2}$: $\\left(\\dfrac{u}{x^{2}}\\right)'=\\dfrac{2}{x}$.",
          "Then $\\dfrac{u}{x^{2}}=2\\ln x+C$; with $u(1)=1$ we get $C=1$, so $y^{2}=x^{2}(2\\ln x+1)$.",
          "Taking the positive root through $(1,1)$ gives $y=x\\sqrt{2\\ln x+1}$, real only for $x>e^{-1/2}$, so $\\boxed{x\\in(e^{-1/2},\\infty)}.$"
        ]
      }
    ],
    "remark": "**Insight.** An IVP picks not just a formula but a *maximal interval* around the start point on which that formula stays valid. The square root quietly imposes $2\\ln x+1>0$; the honest answer is the open interval where the curve actually exists, not the whole half-line."
  },
  {
    "theme": "ivp",
    "themeLabel": "Initial-Value Problems",
    "title": "When y Is the Better Variable",
    "difficulty": 4,
    "task": "Solve the IVP",
    "tags": [
      "linear in x",
      "integrating factor",
      "initial condition",
      "particular solution"
    ],
    "statement": "A curve through the origin satisfies $$\\frac{dy}{dx}=\\frac{1}{\\,x+y^{2}\\,}.$$ Express $x$ as a function of $y$ for this particular curve.",
    "answer": "\\[\\boxed{\\,x=2e^{y}-y^{2}-2y-2\\,}\\]",
    "trap": "Insisting on $\\dfrac{dy}{dx}$ and trying to separate or treat it as homogeneous in $y$ — it is neither. Flipping to $\\dfrac{dx}{dy}=x+y^{2}$ reveals a linear equation in $x$; the trap is to integrate $\\int y^{2}e^{-y}dy$ as merely $-y^{2}e^{-y}$ (one integration by parts) instead of the full $-(y^{2}+2y+2)e^{-y}$, which corrupts the constant and the final formula.",
    "solutions": [
      {
        "name": "Linear in x with integrating factor",
        "steps": [
          "Invert: $\\dfrac{dx}{dy}=x+y^{2}$, i.e. $\\dfrac{dx}{dy}-x=y^{2}$, linear in $x$ with integrating factor $e^{-\\int dy}=e^{-y}$.",
          "Then $\\dfrac{d}{dy}\\!\\left(xe^{-y}\\right)=y^{2}e^{-y}$, so $xe^{-y}=\\int y^{2}e^{-y}\\,dy=-(y^{2}+2y+2)e^{-y}+C$.",
          "Hence $x=-(y^{2}+2y+2)+Ce^{y}$. The curve passes through the origin: $x=0$ when $y=0$ gives $0=-2+C\\Rightarrow C=2$.",
          "Therefore $\\boxed{x=2e^{y}-y^{2}-2y-2}.$"
        ]
      },
      {
        "name": "Verification by differentiation",
        "steps": [
          "From $x=2e^{y}-y^{2}-2y-2$, differentiate: $\\dfrac{dx}{dy}=2e^{y}-2y-2$.",
          "Compute $x+y^{2}=2e^{y}-y^{2}-2y-2+y^{2}=2e^{y}-2y-2$, which equals $\\dfrac{dx}{dy}$.",
          "So $\\dfrac{dy}{dx}=\\dfrac{1}{x+y^{2}}$ holds, and at the origin $y=0\\Rightarrow x=2-0-0-2=0$.",
          "Both the equation and the point are satisfied, confirming $\\boxed{x=2e^{y}-y^{2}-2y-2}.$"
        ]
      }
    ],
    "remark": "**Insight.** A messy $\\dfrac{dy}{dx}$ can be a tidy $\\dfrac{dx}{dy}$. Whenever the right side is awkward in $y$ but linear in $x$, swap roles — and integrate $\\int y^{2}e^{-y}\\,dy$ fully, since a half-done by-parts silently breaks the answer."
  },
  {
    "theme": "ivp",
    "themeLabel": "Initial-Value Problems",
    "title": "A Subnormal Condition on a Curve",
    "difficulty": 4,
    "task": "Find the value",
    "tags": [
      "linear equation",
      "geometry of tangent",
      "initial condition",
      "integrating factor"
    ],
    "statement": "At every point of a curve in $x>0$, the length $x\\dfrac{dy}{dx}$ exceeds the ordinate $y$ by exactly $x^{2}$; that is, $$x\\frac{dy}{dx}-y=x^{2}.$$ If the curve passes through $(1,2)$, find $y(2)$.",
    "answer": "\\[\\boxed{\\,y=x^{2}+x,\\qquad y(2)=6\\,}\\]",
    "trap": "Dividing by $x$ to get $\\dfrac{dy}{dx}-\\dfrac{y}{x}=x$ and then integrating the right side as if it were the whole equation, $y=\\tfrac{x^{2}}{2}$, ignoring the integrating factor $1/x$. That drops the $Cx$ term and fails $y(1)=2$; the correct factor turns the left side into a perfect derivative.",
    "solutions": [
      {
        "name": "Integrating factor",
        "steps": [
          "Divide by $x$: $\\dfrac{dy}{dx}-\\dfrac{1}{x}\\,y=x$. Here $P=-\\dfrac1x$, so the integrating factor is $e^{-\\int dx/x}=\\dfrac1x$.",
          "Then $\\dfrac{d}{dx}\\!\\left(\\dfrac{y}{x}\\right)=1$, so $\\dfrac{y}{x}=x+C$, i.e. $y=x^{2}+Cx$.",
          "Apply $y(1)=2$: $1+C=2\\Rightarrow C=1$, giving $y=x^{2}+x$.",
          "Hence $y(2)=4+2=\\boxed{6}.$"
        ]
      },
      {
        "name": "Guess the structure",
        "steps": [
          "The complementary equation $x y'-y=0$ separates to $y=Cx$.",
          "A particular solution of $xy'-y=x^{2}$: try $y_{p}=ax^{2}$, then $x(2ax)-ax^{2}=ax^{2}=x^{2}\\Rightarrow a=1$, so $y_{p}=x^{2}$.",
          "General solution $y=x^{2}+Cx$; the point $(1,2)$ gives $C=1$, so $y=x^{2}+x$.",
          "Therefore $y(2)=\\boxed{6}.$"
        ]
      }
    ],
    "remark": "**Insight.** A geometric phrasing is just a linear ODE in disguise. The integrating factor $1/x$ is the entire game: without it the left side is not a derivative, and the freedom $Cx$ — the only term able to hit the point $(1,2)$ — never appears."
  },
  {
    "theme": "ivp",
    "themeLabel": "Initial-Value Problems",
    "title": "An Arcsine With a Hard Edge",
    "difficulty": 5,
    "task": "Find the interval",
    "tags": [
      "homogeneous equation",
      "substitution y=vx",
      "interval of validity",
      "trigonometric"
    ],
    "statement": "The solution of $$\\frac{dy}{dx}=\\frac{y}{x}+\\tan\\!\\frac{y}{x},\\qquad y(1)=\\frac{\\pi}{2},$$ has the form $y=x\\arcsin x$. Verify this and determine the largest open interval of $x$ containing $x=1$ on which it is a valid solution of the equation.",
    "answer": "\\[\\boxed{\\,y=x\\arcsin x\\,,\\qquad x\\in(0,\\,1)\\,}\\]",
    "trap": "Reading off $y=x\\arcsin x$ and claiming the interval is $[-1,1]$ (the domain of $\\arcsin$) or $(0,1]$ (including the start). At $x=1$ the ratio $y/x=\\arcsin 1=\\tfrac{\\pi}{2}$, where $\\tan(y/x)$ in the equation is undefined and $y'\\to\\infty$; so $x=1$ is a boundary the solution cannot cross, and the maximal interval is the open $(0,1)$.",
    "solutions": [
      {
        "name": "Substitution y = vx",
        "steps": [
          "Set $y=vx$, $y'=v+xv'$. The equation becomes $v+xv'=v+\\tan v$, so $xv'=\\tan v$, i.e. $\\cot v\\,dv=\\dfrac{dx}{x}$.",
          "Integrate: $\\ln\\lvert\\sin v\\rvert=\\ln\\lvert x\\rvert+C$, so $\\sin v=Ax$. With $x=1,\\ v=\\tfrac{\\pi}{2}$: $\\sin\\tfrac{\\pi}{2}=A\\Rightarrow A=1$.",
          "Hence $\\sin(y/x)=x$, i.e. $y/x=\\arcsin x$ and $y=x\\arcsin x$.",
          "Validity needs $-1\\le x\\le1$ for $\\arcsin$ and $\\tan(y/x)$ finite, i.e. $y/x<\\tfrac{\\pi}{2}\\Rightarrow \\arcsin x<\\tfrac{\\pi}{2}\\Rightarrow x<1$; with $x>0$ from the start, $\\boxed{x\\in(0,1)}.$"
        ]
      },
      {
        "name": "Direct check and edge analysis",
        "steps": [
          "Differentiate $y=x\\arcsin x$: $y'=\\arcsin x+\\dfrac{x}{\\sqrt{1-x^{2}}}$.",
          "Now $\\dfrac{y}{x}=\\arcsin x$, so $\\tan\\dfrac{y}{x}=\\tan(\\arcsin x)=\\dfrac{x}{\\sqrt{1-x^{2}}}$; thus $\\dfrac{y}{x}+\\tan\\dfrac{y}{x}=\\arcsin x+\\dfrac{x}{\\sqrt{1-x^{2}}}=y'$, so the ODE holds.",
          "As $x\\to1^{-}$, $\\dfrac{x}{\\sqrt{1-x^{2}}}\\to\\infty$, so $y'$ diverges: the solution cannot be continued through $x=1$.",
          "The start $x=1$ is therefore an endpoint, not interior; the largest open interval on which $y=x\\arcsin x$ solves the equation is $\\boxed{(0,1)}.$"
        ]
      }
    ],
    "remark": "**Insight.** The initial point can sit exactly on the *boundary* of validity. Here $x=1$ is where the slope blows up, so no open interval straddles it; the honest maximal interval is the one-sided $(0,1)$, a reminder that \"defined at the start\" and \"solvable through the start\" are different things."
  },
  {
    "theme": "ivp",
    "themeLabel": "Initial-Value Problems",
    "title": "A Substitution That Tames a Square",
    "difficulty": 5,
    "task": "Find the interval",
    "tags": [
      "reducible to separable",
      "substitution v=x+y",
      "interval of validity",
      "initial condition"
    ],
    "statement": "Consider $$\\frac{dy}{dx}=(x+y)^{2},\\qquad y(0)=0.$$ Find the explicit solution $y(x)$ and the largest open interval about $x=0$ on which it is defined.",
    "answer": "\\[\\boxed{\\,y=\\tan x-x\\,,\\qquad x\\in\\left(-\\tfrac{\\pi}{2},\\ \\tfrac{\\pi}{2}\\right)\\,}\\]",
    "trap": "Concluding that since $\\tan x-x$ is an elementary formula it must work for every real $x$. In fact $\\tan x$ blows up at $x=\\pm\\tfrac{\\pi}{2}$, so the particular solution exists only on the open interval $\\left(-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2}\\right)$ containing the start; beyond the first blow-up it is a different branch, not this solution.",
    "solutions": [
      {
        "name": "Substitution v = x + y",
        "steps": [
          "Set $v=x+y$, so $\\dfrac{dv}{dx}=1+\\dfrac{dy}{dx}=1+v^{2}$, which separates as $\\dfrac{dv}{1+v^{2}}=dx$.",
          "Integrate: $\\arctan v=x+C$. At $x=0$, $v=x+y=0$, so $\\arctan 0=0+C\\Rightarrow C=0$.",
          "Thus $\\arctan(x+y)=x$, i.e. $x+y=\\tan x$, giving $y=\\tan x-x$.",
          "This requires $\\tan x$ finite, so the maximal interval through $x=0$ is $\\boxed{\\left(-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2}\\right)}.$"
        ]
      },
      {
        "name": "Verification by back-substitution",
        "steps": [
          "Claim $y=\\tan x-x$. Then $\\dfrac{dy}{dx}=\\sec^{2}x-1=\\tan^{2}x$.",
          "Meanwhile $x+y=x+(\\tan x-x)=\\tan x$, so $(x+y)^{2}=\\tan^{2}x$, matching $\\dfrac{dy}{dx}$ exactly.",
          "Also $y(0)=\\tan 0-0=0$, so both the equation and the initial condition hold.",
          "Since $\\tan x$ is finite precisely on $\\left(-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2}\\right)$, this is the largest interval of definition: $\\boxed{\\left(-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2}\\right)}.$"
        ]
      }
    ],
    "remark": "**Insight.** A clean closed form can hide a finite lifespan. Here a nonlinear right-hand side forces the solution to escape to infinity in finite \"time\"; the start point sits in just one window between consecutive blow-ups, and that window is the answer."
  },
  {
    "theme": "ivp",
    "themeLabel": "Initial-Value Problems",
    "title": "Parallel Lines Refuse to Meet",
    "difficulty": 5,
    "task": "Solve the IVP",
    "tags": [
      "reducible to homogeneous",
      "parallel lines",
      "substitution v=x+y",
      "implicit solution"
    ],
    "statement": "Solve $$\\frac{dy}{dx}=\\frac{x+y+1}{x+y-1},\\qquad y(0)=1,$$ giving the particular solution as an implicit relation in $x$ and $y$.",
    "answer": "\\[\\boxed{\\,y-x-\\ln\\lvert x+y\\rvert=1\\,}\\]",
    "trap": "Trying to clear the constants by shifting the origin, as one does when the two lines $x+y+1=0$ and $x+y-1=0$ intersect. They are parallel (same direction $x+y$), so no shift removes both constants; forcing a translation produces an inconsistent system and a wrong relation. The correct move is the substitution $v=x+y$, which makes the equation separable.",
    "solutions": [
      {
        "name": "Substitution v = x + y",
        "steps": [
          "Both lines depend only on $x+y$, so set $v=x+y$, $\\dfrac{dv}{dx}=1+\\dfrac{dy}{dx}$.",
          "Then $\\dfrac{dv}{dx}=1+\\dfrac{v+1}{v-1}=\\dfrac{2v}{v-1}$, separating as $\\dfrac{v-1}{2v}\\,dv=dx$, i.e. $\\dfrac12\\!\\left(1-\\dfrac1v\\right)dv=dx$.",
          "Integrate: $\\dfrac12\\bigl(v-\\ln\\lvert v\\rvert\\bigr)=x+C$, so $v-\\ln\\lvert v\\rvert=2x+C_{1}$.",
          "Restore $v=x+y$: $(x+y)-\\ln\\lvert x+y\\rvert=2x+C_{1}$. Apply $y(0)=1$ ($v=1$): $1-0=0+C_{1}\\Rightarrow C_{1}=1$, giving $\\boxed{y-x-\\ln\\lvert x+y\\rvert=1}.$"
        ]
      },
      {
        "name": "Verification by implicit differentiation",
        "steps": [
          "Differentiate $G=(x+y)-\\ln\\lvert x+y\\rvert-2x-1=0$ with respect to $x$, treating $y=y(x)$.",
          "This gives $(1+y')-\\dfrac{1+y'}{x+y}-2=0$, i.e. $(1+y')\\!\\left(1-\\dfrac{1}{x+y}\\right)=2$.",
          "So $(1+y')\\,\\dfrac{x+y-1}{x+y}=2\\Rightarrow 1+y'=\\dfrac{2(x+y)}{x+y-1}$, hence $y'=\\dfrac{x+y+1}{x+y-1}$, the original ODE.",
          "At $(0,1)$: $G=1-\\ln 1-0-1=0$, so the condition holds, confirming $\\boxed{y-x-\\ln\\lvert x+y\\rvert=1}.$"
        ]
      }
    ],
    "remark": "**Insight.** The translation trick only works when the two lines actually cross. When they are **parallel**, their whole content is the single combination $x+y$, so naming that combination $v$ is the right reduction — and the answer is honestly implicit, since $v-\\ln v$ has no elementary inverse."
  },
  {
    "theme": "geometry",
    "themeLabel": "Geometric Differential Equations",
    "title": "The Lamp on the Wall",
    "difficulty": 3,
    "task": "Find the curve",
    "tags": [
      "subtangent",
      "exponential",
      "first-order ode",
      "intercept"
    ],
    "statement": "A curve in the first quadrant has the property that for every point $P=(x,y)$ on it, the tangent at $P$ meets the $x$-axis at a point $T$, and the foot of the perpendicular from $P$ to the $x$-axis is $N=(x,0)$. The directed length $NT$ (the subtangent) is the same constant value $3$ at every point. If the curve passes through $(0,5)$, find its equation.",
    "answer": "\\[\\boxed{y=5\\,e^{x/3}}\\]",
    "trap": "Writing the subtangent as $y'\\!/y$ (slope over ordinate) instead of $y/y'$. That inversion turns the equation into $y'/y=1/3\\Rightarrow$ a different exponential, or worse, into $\\tfrac{dy}{dx}=\\tfrac{1}{3}$ giving the straight line $y=\\tfrac{x}{3}+5$; the subtangent is $NT=y/y'$, the run for the tangent to fall the full height $y$.",
    "solutions": [
      {
        "name": "Subtangent equation",
        "steps": [
          "The tangent at $P$ is $Y-y=y'(X-x)$; set $Y=0$ to get $T=(x-\\tfrac{y}{y'},0)$, so the subtangent $NT=x-(x-\\tfrac{y}{y'})=\\tfrac{y}{y'}$.",
          "Impose $\\tfrac{y}{y'}=3$, i.e. $\\tfrac{dy}{y}=\\tfrac{dx}{3}$.",
          "Integrate: $\\ln y=\\tfrac{x}{3}+c$, so $y=A e^{x/3}$.",
          "The point $(0,5)$ gives $A=5$, hence $\\boxed{y=5e^{x/3}}$."
        ]
      },
      {
        "name": "Verification by the geometric quantity",
        "steps": [
          "For $y=5e^{x/3}$ we have $y'=\\tfrac{5}{3}e^{x/3}=\\tfrac{y}{3}$.",
          "Then the subtangent $\\tfrac{y}{y'}=\\tfrac{y}{y/3}=3$ for every $x$, exactly the stated property.",
          "Since the property holds identically and $(0,5)$ lies on it, $\\boxed{y=5e^{x/3}}$."
        ]
      }
    ],
    "remark": "Insight: constant subtangent is the geometric fingerprint of exponential growth — the run needed to climb a full height is fixed, which is precisely the statement $dy/dx\\propto y$."
  },
  {
    "theme": "geometry",
    "themeLabel": "Geometric Differential Equations",
    "title": "Where the Normal Outruns the Tangent",
    "difficulty": 3,
    "task": "Determine the curve",
    "tags": [
      "subnormal",
      "rectangular hyperbola",
      "first-order ode",
      "through a point"
    ],
    "statement": "For a smooth curve in the first quadrant, drop the foot $N=(x,0)$ of the ordinate at each point $P=(x,y)$, and let the normal at $P$ meet the $x$-axis at $G$. It is observed that the subnormal $NG$ equals the abscissa $x$ at every point. Find the curve through $(3,5)$.",
    "answer": "\\[\\boxed{y^{2}-x^{2}=16}\\]",
    "trap": "Using the subtangent $y/y'$ in place of the subnormal $y\\,y'$. With subtangent$=x$ one gets $y/y'=x\\Rightarrow y=Ax$ (a line), whereas the subnormal $NG=y\\,y'$ produces the hyperbola; confusing the two is the classic slip.",
    "solutions": [
      {
        "name": "Form and solve the ODE",
        "steps": [
          "The normal at $P$ has slope $-1/y'$; setting $Y=0$ gives $G=(x+y\\,y',0)$, so the subnormal $NG=y\\,y'$.",
          "Impose $y\\,y'=x$, i.e. $y\\,dy=x\\,dx$.",
          "Integrate: $\\tfrac{y^2}{2}=\\tfrac{x^2}{2}+C_1\\Rightarrow y^2-x^2=C$.",
          "Through $(3,5)$: $25-9=16$, so $\\boxed{y^{2}-x^{2}=16}$."
        ]
      },
      {
        "name": "Check the geometry on the answer",
        "steps": [
          "On $y=\\sqrt{x^2+16}$, $y'=\\tfrac{x}{\\sqrt{x^2+16}}=\\tfrac{x}{y}$.",
          "Then the subnormal $y\\,y'=y\\cdot\\tfrac{x}{y}=x$, matching the condition for all $x$.",
          "The point $(3,5)$ satisfies $25-9=16$, so $\\boxed{y^2-x^2=16}$."
        ]
      }
    ],
    "remark": "Insight: subnormal$=x$ pairs the differentials $y\\,dy$ and $x\\,dx$ symmetrically, forcing a rectangular hyperbola — the same balance that makes the subnormal of a circle equal $-x$ (note the sign)."
  },
  {
    "theme": "geometry",
    "themeLabel": "Geometric Differential Equations",
    "title": "The Parabola That Hides Its Vertex",
    "difficulty": 4,
    "task": "Find the equation",
    "tags": [
      "subnormal",
      "parabola",
      "constant subnormal",
      "translation"
    ],
    "statement": "A curve in the upper half-plane has the feature that the foot of every normal lands on the $x$-axis exactly $2$ units to the right of the foot of the corresponding ordinate; that is, the subnormal is the constant $2$ at every point. Given that the curve passes through $(0,2)$, find its Cartesian equation and name the conic.",
    "answer": "\\[\\boxed{y^{2}=4(x+1)}\\]",
    "trap": "Concluding the answer is $y^2=4x$ because 'constant subnormal $=$ parabola through the origin.' The constant of integration is fixed by $(0,2)$, not by assuming the vertex sits at the origin; dropping it misplaces the vertex to $(-1,0)$.",
    "solutions": [
      {
        "name": "Integrate the subnormal condition",
        "steps": [
          "Subnormal $=y\\,y'=2$, so $y\\,dy=2\\,dx$.",
          "Integrate: $\\tfrac{y^2}{2}=2x+C_1\\Rightarrow y^2=4x+C$.",
          "Apply $(0,2)$: $4=0+C\\Rightarrow C=4$, giving $y^2=4x+4=4(x+1)$.",
          "This is a parabola with vertex $(-1,0)$: $\\boxed{y^{2}=4(x+1)}$."
        ]
      },
      {
        "name": "Standard form recognition",
        "steps": [
          "Constant subnormal $k$ always yields $y^2=2kx+C$, a parabola opening along the axis.",
          "Here $k=2$ so $y^2=4x+C$; the latus-rectum direction is fixed but the vertex floats until a point is supplied.",
          "The point $(0,2)$ pins $C=4$, hence $\\boxed{y^2=4(x+1)}$ with vertex $(-1,0)$."
        ]
      }
    ],
    "remark": "Insight: 'constant subnormal' alone names the family (parabolas of fixed latus rectum); the boundary point is what selects the member — forgetting the constant is the most common loss of an Advanced mark."
  },
  {
    "theme": "geometry",
    "themeLabel": "Geometric Differential Equations",
    "title": "Twice as Far Along the Axis",
    "difficulty": 4,
    "task": "Find the curve",
    "tags": [
      "tangent intercept",
      "rectangular hyperbola",
      "homogeneous",
      "abscissa"
    ],
    "statement": "At each point $P=(x,y)$ of a first-quadrant curve, the tangent line cuts the $x$-axis at a point $A$. It is found that the abscissa of $A$ is always twice the abscissa of $P$. Find the curve passing through $(2,3)$ and classify it.",
    "answer": "\\[\\boxed{xy=6}\\]",
    "trap": "Reading 'intercept $=2x$' as 'subtangent $=2x$' and solving $y/y'=2x$ to get a parabola $y^2=Cx$. The $x$-intercept of the tangent is $x-\\tfrac{y}{y'}$, so setting it to $2x$ gives $-\\tfrac{y}{y'}=x$, a sign-flipped equation that yields a hyperbola, not a parabola.",
    "solutions": [
      {
        "name": "Intercept equation",
        "steps": [
          "Tangent: $Y-y=y'(X-x)$; the $x$-intercept ($Y=0$) is $A=\\big(x-\\tfrac{y}{y'},\\,0\\big)$.",
          "Condition: $x-\\tfrac{y}{y'}=2x\\Rightarrow -\\tfrac{y}{y'}=x\\Rightarrow \\tfrac{dy}{y}=-\\tfrac{dx}{x}$.",
          "Integrate: $\\ln y=-\\ln x+c\\Rightarrow xy=A$.",
          "Through $(2,3)$: $A=6$, so $\\boxed{xy=6}$, a rectangular hyperbola."
        ]
      },
      {
        "name": "Slope from similar triangles",
        "steps": [
          "The intercept condition $x-\\tfrac{y}{y'}=2x$ rearranges to $y'=-\\tfrac{y}{x}$, the slope of the radius-vector reflected — characteristic of $xy=$const.",
          "Separating, $\\tfrac{dy}{y}+\\tfrac{dx}{x}=0\\Rightarrow \\tfrac{d}{dx}(\\ln(xy))=0\\Rightarrow xy=A$.",
          "$(2,3)$ gives $A=6$: $\\boxed{xy=6}$."
        ]
      }
    ],
    "remark": "Insight: a negative-slope intercept condition (the tangent meets the axis on the far side) is the signature of $xy=$const; the trap is that a tiny sign in 'where the intercept lands' flips the whole conic type."
  },
  {
    "theme": "geometry",
    "themeLabel": "Geometric Differential Equations",
    "title": "The Perpendicular That Measures the Abscissa",
    "difficulty": 4,
    "task": "Find the family of curves",
    "tags": [
      "perpendicular distance",
      "tangent line",
      "circle through origin",
      "homogeneous"
    ],
    "statement": "For a curve in the first quadrant, the perpendicular distance from the origin $O$ to the tangent at each point $P=(x,y)$ is always equal to the abscissa $x$ of $P$. Find the curve through $(2,2)$ and identify it geometrically.",
    "answer": "\\[\\boxed{x^{2}+y^{2}=4x}\\]",
    "trap": "Reading off the distance as the radius $OP=\\sqrt{x^2+y^2}$ instead of the foot-of-perpendicular formula $\\dfrac{|y-xy'|}{\\sqrt{1+y'^2}}$. The condition $OP=x$ forces $y=0$, which is absurd; the prescribed distance is from $O$ to the tangent line, never to the point $P$ itself.",
    "solutions": [
      {
        "name": "Distance-to-tangent ODE",
        "steps": [
          "The tangent at $P=(x,y)$ is $Y-y=y'(X-x)$, i.e. $y'\\,X-Y+(y-xy')=0$, so its distance from $O$ is $\\dfrac{|y-xy'|}{\\sqrt{1+y'^2}}=x$.",
          "Square and clear: $(y-xy')^2=x^2(1+y'^2)$. Expanding, $y^2-2xyy'+x^2y'^2=x^2+x^2y'^2$, so the $x^2y'^2$ terms cancel and $y^2-2xyy'=x^2$, giving $y'=\\dfrac{y^2-x^2}{2xy}$.",
          "This is homogeneous; put $y=vx$, so $y'=v+xv'$. Then $v+xv'=\\dfrac{v^2-1}{2v}$, hence $xv'=\\dfrac{-1-v^2}{2v}$, i.e. $\\dfrac{2v}{1+v^2}\\,dv=-\\dfrac{dx}{x}$.",
          "Integrate: $\\ln(1+v^2)=-\\ln x+\\text{const}$, so $x(1+v^2)=C$. With $v=y/x$ this is $x+\\dfrac{y^2}{x}=C$, i.e. $x^2+y^2=Cx$ — circles through $O$ centred on the $x$-axis.",
          "Impose $(2,2)$: $4+4=2C\\Rightarrow C=4$, so $\\boxed{x^{2}+y^{2}=4x}$."
        ]
      },
      {
        "name": "Geometric synthesis via the chord from O",
        "steps": [
          "Guess the self-similar family suggested by the homogeneous condition: a circle through $O$ centred at $(a,0)$, namely $x^2+y^2=2ax$. Its centre is $M=(a,0)$ and radius $a$.",
          "At a point $P=(x,y)$ on it, the tangent is perpendicular to the radius $MP$, so the tangent line through $P$ has the radius vector $MP$ as normal: its equation is $(x-a)(X-x)+y(Y-y)=0$, i.e. $(x-a)X+yY-\\big[(x-a)x+y^2\\big]=0$.",
          "The distance from $O$ to this line is $\\dfrac{\\big|(x-a)x+y^2\\big|}{\\sqrt{(x-a)^2+y^2}}$. The denominator is $|MP|=a$ (the radius). For the numerator use $x^2+y^2=2ax$: $(x-a)x+y^2=x^2+y^2-ax=2ax-ax=ax$.",
          "Hence the distance is $\\dfrac{ax}{a}=x$ identically — every circle $x^2+y^2=2ax$ has the property, confirming the family $x^2+y^2=Cx$.",
          "The point $(2,2)$ selects $2a=C=4$: $\\boxed{x^2+y^2=4x}$, the circle of radius $2$ centred at $(2,0)$."
        ]
      }
    ],
    "remark": "Insight: 'distance from $O$ to the tangent equals $x$' is a homogeneous (degree-$1$) condition, so its integral curves must be self-similar through $O$. Circles through the origin centred on the $x$-axis are exactly that one-parameter self-similar family, and the synthetic computation shows the foot-of-perpendicular distance collapses to the abscissa because the chord-projection $(x-a)x+y^2$ equals $ax$ on the circle."
  },
  {
    "theme": "geometry",
    "themeLabel": "Geometric Differential Equations",
    "title": "The Subtangent Doubles the Abscissa",
    "difficulty": 4,
    "task": "Find the curve",
    "tags": [
      "subtangent",
      "parabola",
      "separable",
      "through a point"
    ],
    "statement": "A first-quadrant curve has the property that, at every point $P=(x,y)$, the subtangent equals twice the abscissa. Find the curve through $(4,6)$, and state its vertex.",
    "answer": "\\[\\boxed{y^{2}=9x}\\]",
    "trap": "Treating 'subtangent $=2x$' as 'subnormal $=2x$' and solving $y\\,y'=2x$ to get the hyperbola $y^2=2x^2+4$ through $(4,6)$, the wrong conic. The subtangent is $y/y'$; equating it to $2x$ gives $y'/y=1/(2x)$ and a parabola, not the curve from $y\\,y'=2x$.",
    "solutions": [
      {
        "name": "Separate and integrate",
        "steps": [
          "Subtangent $\\tfrac{y}{y'}=2x\\Rightarrow \\tfrac{dy}{y}=\\tfrac{dx}{2x}$.",
          "Integrate: $\\ln y=\\tfrac12\\ln x+c\\Rightarrow y=A\\sqrt{x}\\Rightarrow y^2=A^2 x$.",
          "Through $(4,6)$: $36=4A^2\\Rightarrow A^2=9$, so $y^2=9x$.",
          "Vertex at the origin: $\\boxed{y^{2}=9x}$."
        ]
      },
      {
        "name": "Check on the answer",
        "steps": [
          "For $y=3\\sqrt{x}$, $y'=\\tfrac{3}{2\\sqrt{x}}$, so $\\tfrac{y}{y'}=\\tfrac{3\\sqrt{x}}{3/(2\\sqrt{x})}=2x$.",
          "The subtangent is exactly $2x$ at every point, as required.",
          "Since $(4,6)$ lies on it, $\\boxed{y^2=9x}$."
        ]
      }
    ],
    "remark": "Insight: subtangent $\\propto x$ is the hallmark of $y^2\\propto x$, the mirror of 'subnormal $\\propto x$' giving a hyperbola — keeping straight which of $y/y'$ and $yy'$ you have decides the conic."
  },
  {
    "theme": "geometry",
    "themeLabel": "Geometric Differential Equations",
    "title": "The Curve of Constant Subnormal",
    "difficulty": 4,
    "task": "Find the curve",
    "tags": [
      "subnormal",
      "variables-separable",
      "parabola",
      "first-order",
      "tangent-geometry"
    ],
    "statement": "At every point of a curve lying in the region $y>0,\\ x>0$, the length of the subnormal is the same constant $6$. The curve passes through the point $(1,4)$. Find the equation of the curve. (Recall that the subnormal at a point of $y=y(x)$ has length $y\\,\\dfrac{dy}{dx}$.)",
    "answer": "\\[\\boxed{\\;y^{2}=12x+4\\;}\\]",
    "trap": "The seductive wrong answer is the exponential $y=4\\,e^{(x-1)/6}$. It comes from writing the constant-length condition as $\\dfrac{y}{y'}=6$ — that is, setting the subtangent equal to $6$ instead of the subnormal. The subtangent has length $\\dfrac{y}{y'}$, but the subnormal has length $y\\,y'$; the two are reciprocally related and must not be swapped. Using $y/y'=6$ gives $\\dfrac{dy}{y}=\\dfrac{dx}{6}$, hence $y=Ce^{x/6}$, an exponential that grows without the parabolic shape forced by the true condition $y\\,y'=6$.",
    "solutions": [
      {
        "name": "Separation of variables",
        "steps": [
          "Translate the geometry: the subnormal length is $y\\,\\dfrac{dy}{dx}$, so the condition \"subnormal $=6$\" is the first-order, first-degree equation $y\\,\\dfrac{dy}{dx}=6$.",
          "The variables already separate: $y\\,dy=6\\,dx$.",
          "Integrate both sides: $\\dfrac{y^{2}}{2}=6x+C_{1}$, i.e. $y^{2}=12x+C$.",
          "Apply $(1,4)$: $16=12+C$, so $C=4$, giving the parabola $\\boxed{y^{2}=12x+4}$."
        ]
      },
      {
        "name": "Recognising a perfect differential",
        "steps": [
          "From $y\\,\\dfrac{dy}{dx}=6$ multiply through by $dx$ to get $y\\,dy=6\\,dx$, and note that the left side is the differential $d\\!\\left(\\dfrac{y^{2}}{2}\\right)$ while the right side is $d(6x)$.",
          "Equating these differentials gives $d\\!\\left(\\dfrac{y^{2}}{2}-6x\\right)=0$, so $\\dfrac{y^{2}}{2}-6x$ is constant along the curve: $y^{2}=12x+C$.",
          "The point $(1,4)$ forces $16=12+C$, so $C=4$ and the curve is $\\boxed{y^{2}=12x+4}$."
        ]
      }
    ],
    "remark": "**Insight.** A constant subnormal is the signature of a parabola with horizontal axis, exactly as a constant subtangent is the signature of an exponential. The whole problem turns on keeping the two formulas straight: the subnormal is $y\\,y'$ and the subtangent is $y/y'$. Once the condition $y\\,y'=6$ is written down, the equation separates instantly and the geometry — a parabola whose latus rectum is $12$ — falls out with a single integration."
  },
  {
    "theme": "geometry",
    "themeLabel": "Geometric Differential Equations",
    "title": "When Subtangent Meets Subnormal",
    "difficulty": 5,
    "task": "Find all curves",
    "tags": [
      "subtangent",
      "subnormal",
      "both signs",
      "missed branch"
    ],
    "statement": "A curve has, at every point, its subtangent equal in length to its subnormal. Find all such curves, and give every curve of this kind that passes through $(1,3)$.",
    "answer": "\\[\\boxed{y=\\pm x+c;\\quad y=x+2\\ \\text{and}\\ y=-x+4}\\]",
    "trap": "Writing $\\tfrac{y}{y'}=y\\,y'$, cancelling to $y'^2=1$, then taking only $y'=1$ and reporting the single line $y=x+2$. The equation $y'^2=1$ has two roots $y'=\\pm1$; the curve $y=-x+4$ also satisfies subtangent $=$ subnormal through $(1,3)$ and must be included.",
    "solutions": [
      {
        "name": "Equate the two lengths",
        "steps": [
          "At a point the subtangent has signed length $\\tfrac{y}{y'}$ and the subnormal has signed length $y\\,y'$; equal lengths means $\\left|\\tfrac{y}{y'}\\right|=|y\\,y'|$.",
          "For $y\\neq0$ this reduces to $\\left|\\tfrac1{y'}\\right|=|y'|$, i.e. $y'^2=1$, so $y'=1$ or $y'=-1$.",
          "Integrate each branch: $y=x+c$ or $y=-x+c$. These are the only curves (slope $0$ is excluded, and a smooth curve cannot jump between the two slopes without a corner).",
          "Through $(1,3)$: $c=2$ or $c=4$, hence $\\boxed{y=x+2\\text{ and }y=-x+4}$."
        ]
      },
      {
        "name": "Geometric reading (angle of the tangent)",
        "steps": [
          "Subtangent $=$ subnormal means $\\left|\\tfrac{y}{y'}\\right|=|y\\,y'|$, which for $y\\neq0$ collapses to $|y'|=1$ regardless of where the point sits.",
          "Thus the tangent makes a $45^\\circ$ angle with the $x$-axis at every point, so the only curves are the lines of slope $\\pm1$, namely $y=x+c$ and $y=-x+c$.",
          "Selecting those through $(1,3)$ gives $\\boxed{y=x+2\\text{ and }y=-x+4}$."
        ]
      }
    ],
    "remark": "Insight: equal subtangent and subnormal forces $|y'|=1$, a slope condition independent of position; the lesson is that $y'^2=1$ is two equations, and a one-sign answer is only half the locus."
  },
  {
    "theme": "geometry",
    "themeLabel": "Geometric Differential Equations",
    "title": "Where the Tangent Cuts the Axis",
    "difficulty": 5,
    "task": "Find the curve",
    "tags": [
      "tangent-intercept",
      "linear-equation",
      "integrating-factor",
      "first-order",
      "tangent-geometry"
    ],
    "statement": "A curve in the region $x>0$ has the property that the tangent drawn at any point $P=(x,y)$ meets the $y$-axis at a point whose ordinate (its $y$-coordinate) equals $x^{2}$. The curve passes through $(1,3)$. Find the equation of the curve.",
    "answer": "\\[\\boxed{\\;y=4x-x^{2}\\;}\\]",
    "trap": "The tempting wrong answer is $y=x^{2}+2x$. It arises from a sign slip when computing the intercept. The tangent at $(x,y)$ is $Y-y=\\dfrac{dy}{dx}(X-x)$, and its $y$-intercept (at $X=0$) is $Y=y-x\\dfrac{dy}{dx}$; setting this equal to $x^{2}$ gives $y-x\\dfrac{dy}{dx}=x^{2}$. The trap writes the intercept with the wrong sign as $y+x\\dfrac{dy}{dx}$, leading to $\\dfrac{dy}{dx}+\\dfrac{y}{x}=x$ and the solution $y=x^{2}+2x$. Although it also passes through $(1,3)$, its tangent cuts the $y$-axis at $-x^{2}$, not $x^{2}$, so it fails the stated property.",
    "solutions": [
      {
        "name": "Linear equation via integrating factor",
        "steps": [
          "The tangent at $(x,y)$ is $Y-y=\\dfrac{dy}{dx}(X-x)$; putting $X=0$ gives the $y$-intercept $Y=y-x\\dfrac{dy}{dx}$.",
          "The stated condition $y-x\\dfrac{dy}{dx}=x^{2}$ rearranges to the linear form $\\dfrac{dy}{dx}-\\dfrac{1}{x}\\,y=-x$, with $P(x)=-\\dfrac{1}{x}$ and $Q(x)=-x$.",
          "The integrating factor is $e^{\\int P\\,dx}=e^{-\\ln x}=\\dfrac{1}{x}$. Multiplying through gives $\\dfrac{1}{x}\\dfrac{dy}{dx}-\\dfrac{y}{x^{2}}=-1$, i.e. $\\dfrac{d}{dx}\\!\\left(\\dfrac{y}{x}\\right)=-1$.",
          "Integrate: $\\dfrac{y}{x}=-x+C$, so $y=Cx-x^{2}$. The point $(1,3)$ gives $3=C-1$, hence $C=4$ and $\\boxed{y=4x-x^{2}}$."
        ]
      },
      {
        "name": "Spotting the quotient derivative",
        "steps": [
          "From $y-x\\dfrac{dy}{dx}=x^{2}$, divide every term by $x^{2}$: $\\dfrac{y}{x^{2}}-\\dfrac{1}{x}\\dfrac{dy}{dx}=1$.",
          "The left side is exactly $-\\dfrac{d}{dx}\\!\\left(\\dfrac{y}{x}\\right)$, since $\\dfrac{d}{dx}\\!\\left(\\dfrac{y}{x}\\right)=\\dfrac{x\\,y'-y}{x^{2}}$. Hence $\\dfrac{d}{dx}\\!\\left(\\dfrac{y}{x}\\right)=-1$.",
          "Integrating gives $\\dfrac{y}{x}=-x+C$, that is $y=Cx-x^{2}$.",
          "Imposing $(1,3)$ yields $C=4$, so the curve is $\\boxed{y=4x-x^{2}}$."
        ]
      }
    ],
    "remark": "**Insight.** Geometric clues about a tangent almost always become first-order equations once you write the intercept honestly: the $y$-intercept of the tangent is $y-x\\,y'$, and the lone minus sign is where most attempts go wrong. After that, the equation is linear, and the integrating factor $1/x$ collapses the whole left side into $\\dfrac{d}{dx}(y/x)$ — a single derivative whose integration finishes the problem. The curve is a downward parabola pinned by the condition at $(1,3)$."
  },
  {
    "theme": "geometry",
    "themeLabel": "Geometric Differential Equations",
    "title": "The Normal That Reaches Back to the Axis",
    "difficulty": 5,
    "task": "Find the curve",
    "tags": [
      "subnormal",
      "first-order ODE",
      "variables separable",
      "tangent-normal geometry",
      "rectangular hyperbola"
    ],
    "statement": "At every point $P=(x,y)$ on a curve in the region $x>0,\\ y>0$, draw the normal and let it meet the $x$-axis at $G$. Drop the perpendicular $PM$ from $P$ to the $x$-axis, so $M=(x,0)$. It is found that the foot $G$ always lies as far to the right of $M$ as the origin lies to the left of $M$; that is, the length $MG$ equals the abscissa $x$ of $P$, and $G$ lies on the far side of $M$ from the origin. Given that the slope $\\dfrac{dy}{dx}>0$ throughout and that the curve passes through $\\left(\\sqrt{2},\\,1\\right)$, determine the equation of the curve.",
    "answer": "\\boxed{x^{2}-y^{2}=1}",
    "trap": "The signed length $MG$ — the projection of the normal onto the $x$-axis — is the SUBNORMAL $y\\,\\dfrac{dy}{dx}$, not the SUBTANGENT $\\dfrac{y}{\\,dy/dx\\,}$. A solver who writes $\\dfrac{y}{y'}=x$ instead of $y\\,y'=x$ gets $\\dfrac{dy}{y}=\\dfrac{dx}{x}$, i.e. the straight line $y=\\dfrac{x}{\\sqrt2}$ — which has slope $>0$ and passes through $(\\sqrt2,1)$, so it looks plausible, yet its subnormal is $\\dfrac{x}{2}\\neq x$. The geometry pins down the subnormal, giving the hyperbola, not a line.",
    "solutions": [
      {
        "name": "Subnormal condition, then separate variables",
        "steps": [
          "The normal at $P=(x,y)$ has slope $-1/y'$; it meets the $x$-axis at $G=\\left(x+y\\,y',\\,0\\right)$. With $M=(x,0)$ the signed horizontal run is $MG=y\\,y'$, the subnormal.",
          "The condition \"$MG=x$ on the far side of $M$ from the origin\" (so $MG>0$) gives the first-order ODE $\\;y\\,\\dfrac{dy}{dx}=x$.",
          "Separate: $y\\,dy=x\\,dx$. Integrate: $\\dfrac{y^{2}}{2}=\\dfrac{x^{2}}{2}+C_1$, i.e. $y^{2}-x^{2}=C$.",
          "Apply $(\\sqrt2,1)$: $1-2=C\\Rightarrow C=-1$, so $y^{2}-x^{2}=-1$, that is $x^{2}-y^{2}=1$. Since $y'=x/y>0$ here, the branch is uniquely the right half of this rectangular hyperbola."
        ]
      },
      {
        "name": "Substitution $u=y^{2}$ (linear in $u$)",
        "steps": [
          "From $y\\,y'=x$ note that $\\dfrac{d}{dx}\\left(y^{2}\\right)=2y\\,y'=2x$. Put $u=y^{2}$, giving the linear equation $\\dfrac{du}{dx}=2x$.",
          "Integrate directly: $u=x^{2}+C$, hence $y^{2}=x^{2}+C$.",
          "The point $(\\sqrt2,1)$ forces $1=2+C\\Rightarrow C=-1$, so $y^{2}=x^{2}-1$, i.e. $x^{2}-y^{2}=1$, matching the separable solution."
        ]
      },
      {
        "name": "Homogeneous form $y=vx$",
        "steps": [
          "Write the ODE as $\\dfrac{dy}{dx}=\\dfrac{x}{y}=\\dfrac{1}{\\,y/x\\,}$, a function of $y/x$ alone. Set $y=vx$, so $\\dfrac{dy}{dx}=v+x\\dfrac{dv}{dx}$.",
          "Then $v+x\\dfrac{dv}{dx}=\\dfrac1v\\Rightarrow x\\dfrac{dv}{dx}=\\dfrac{1-v^{2}}{v}$, so $\\dfrac{v\\,dv}{1-v^{2}}=\\dfrac{dx}{x}$.",
          "Integrate: $-\\tfrac12\\ln\\lvert 1-v^{2}\\rvert=\\ln x+c$, giving $1-v^{2}=\\dfrac{A}{x^{2}}$, i.e. $x^{2}-y^{2}=A$.",
          "Through $(\\sqrt2,1)$: $A=2-1=1$, so $x^{2}-y^{2}=1$."
        ]
      }
    ],
    "remark": "**Insight.** Every \"length\" you read off the tangent–normal figure is really a signed projection, and the geometry chooses which one: the run from the foot of the ordinate to where the *normal* cuts the axis is the subnormal $y\\,y'$, while the run to where the *tangent* cuts it is the subtangent $y/y'$. Demanding subnormal $=x$ makes $y\\,y'=x$, whose left side is exactly $\\tfrac12\\frac{d}{dx}(y^2)$ — so the curve is forced to be a rectangular hyperbola $x^2-y^2=\\text{const}$, and the single point selects one branch. Swap subnormal for subtangent and the same picture collapses to a straight line; the entire problem turns on that one distinction."
  },
  {
    "theme": "applications",
    "themeLabel": "Growth, Decay, Cooling & Mixing",
    "title": "The Two-Clock Rock",
    "difficulty": 3,
    "task": "Determine",
    "tags": [
      "radioactive decay",
      "half-life",
      "exponential",
      "dating",
      "ratio"
    ],
    "statement": "A freshly formed mineral grain traps two radioactive isotopes, $X$ and $Y$, in exactly equal amounts. Isotope $X$ has a half-life of $4$ million years and isotope $Y$ has a half-life of $12$ million years; each decays independently according to $\\dfrac{dN}{dt}=-\\lambda N$. A geologist today measures the surviving amounts and finds the ratio $X:Y=1:4$. \\[\\text{Determine the age of the grain (in millions of years).}\\]",
    "answer": "\\[\\boxed{12\\text{ million years}}\\]",
    "trap": "Averaging or adding the two half-lives (e.g. quoting $8$ Myr, the mean of $4$ and $12$, which actually corresponds to $t=16$), or trying to date with one isotope alone. The absolute amounts are never given and are not needed: only the RATIO matters, and the ratio decays with the DIFFERENCE of the decay rates, $2^{-t/4}/2^{-t/12}=2^{-t/6}$, whose effective half-life is $6$ Myr, not $4$, $12$, or their mean.",
    "solutions": [
      {
        "name": "Ratio collapses to a single exponential",
        "steps": [
          "With equal initial amounts $N_0$, the survivors are $X=N_0\\,2^{-t/4}$ and $Y=N_0\\,2^{-t/12}$.",
          "The ratio is $\\dfrac{X}{Y}=2^{-t/4+t/12}=2^{-t/6}$, independent of the unknown $N_0$.",
          "Set $2^{-t/6}=\\tfrac14=2^{-2}$, so $t/6=2$.",
          "Hence $t=12$ million years. $\\boxed{12}$"
        ]
      },
      {
        "name": "Logarithms with decay constants",
        "steps": [
          "$\\lambda_X=\\dfrac{\\ln 2}{4},\\ \\lambda_Y=\\dfrac{\\ln 2}{12}$, and $\\dfrac{X}{Y}=e^{-(\\lambda_X-\\lambda_Y)t}$.",
          "$\\lambda_X-\\lambda_Y=\\ln 2\\left(\\tfrac14-\\tfrac1{12}\\right)=\\dfrac{\\ln 2}{6}$.",
          "$\\ln(1/4)=-(\\ln2/6)\\,t\\Rightarrow -2\\ln2=-(\\ln2/6)\\,t\\Rightarrow t=12$.",
          "$\\boxed{12}$ million years."
        ]
      }
    ],
    "remark": "Insight: relative dating needs no initial calibration because the unknown $N_0$ cancels in the ratio; the pair of clocks behaves like a single clock whose decay constant is the difference of the two, $\\ln2/6$ (effective half-life $6$ Myr). This is the principle behind isochron and U-series dating."
  },
  {
    "theme": "applications",
    "themeLabel": "Growth, Decay, Cooling & Mixing",
    "title": "The Ambient You Cannot See",
    "difficulty": 3,
    "task": "Find",
    "tags": [
      "newtons cooling",
      "first-order ode",
      "geometric sequence",
      "ambient temperature"
    ],
    "statement": "A cup of coffee obeys Newton's law of cooling, $\\dfrac{dT}{dt}=-k\\,(T-E)$, in a room whose constant temperature $E$ is unknown. A thermometer records $T=95^{\\circ}$ at one instant, $T=80^{\\circ}$ exactly $5$ minutes later, and $T=68^{\\circ}$ after a further $5$ minutes. \\[\\text{Find the room temperature }E.\\]",
    "answer": "\\[\\boxed{E=20^{\\circ}}\\]",
    "trap": "Treating the three readings as an arithmetic progression and 'extrapolating' the constant drop ($-15,-12,\\dots$) toward zero, or assuming the coffee cools to $0^{\\circ}$. Over equal time gaps it is the EXCESSES $T-E$ that form a geometric progression (common ratio $e^{-5k}$), not the temperatures themselves; the room temperature is the hidden fixed point that makes them geometric.",
    "solutions": [
      {
        "name": "Equal gaps force a geometric progression",
        "steps": [
          "Integrating $\\dfrac{dT}{dt}=-k(T-E)$ gives $T-E=(T_0-E)\\,e^{-kt}$, so over each $5$-minute step $T-E$ multiplies by $r=e^{-5k}$.",
          "Hence $(95-E),(80-E),(68-E)$ are in geometric progression, forcing $(80-E)^2=(95-E)(68-E)$.",
          "Expand: $6400-160E+E^2=6460-163E+E^2\\Rightarrow 3E=60$.",
          "Thus $E=20^{\\circ}$. $\\boxed{20^{\\circ}}$"
        ]
      },
      {
        "name": "Solve for the ratio directly",
        "steps": [
          "$\\dfrac{80-E}{95-E}=\\dfrac{68-E}{80-E}=r$ since equal time gaps give equal multiplicative ratios.",
          "Cross-multiplying gives $(80-E)^2=(95-E)(68-E)$, i.e. $3E=60$.",
          "So $E=20$, and as a check $r=\\dfrac{60}{75}=\\dfrac45$, a clean common ratio (matching $48/60=\\tfrac45$).",
          "$\\boxed{E=20^{\\circ}}$"
        ]
      },
      {
        "name": "Difference test on the excesses",
        "steps": [
          "Let $u_n=T_n-E$. A geometric sequence satisfies $u_0\\,u_2=u_1^{2}$.",
          "With $u_0=95-E,\\,u_1=80-E,\\,u_2=68-E$: $(95-E)(68-E)=(80-E)^2$.",
          "This is linear in $E$ (the $E^2$ cancels) and yields $E=20$; the excess-drops $15,12$ then have ratio $\\tfrac45$, consistent.",
          "$\\boxed{20^{\\circ}}$"
        ]
      }
    ],
    "remark": "Insight: in Newton cooling, sampling at equal time intervals turns the continuous exponential into a discrete geometric sequence of temperature excesses. The ambient temperature is the unique value that makes the readings geometric, recovered without ever knowing $k$ or the start time. Here it forces $r=e^{-5k}=\\tfrac45$, i.e. $k=\\tfrac15\\ln\\tfrac54$."
  },
  {
    "theme": "applications",
    "themeLabel": "Growth, Decay, Cooling & Mixing",
    "title": "Halfway to Forever",
    "difficulty": 3,
    "task": "Prove that",
    "tags": [
      "linear ode",
      "steady state",
      "rc circuit",
      "relaxation",
      "half-time"
    ],
    "statement": "A quantity relaxes toward a steady state by the linear law $\\dfrac{dy}{dt}=a-by$ with $a,b>0$ (an RC charging current, a heater approaching equilibrium, a population with constant immigration and proportional death). Let $y_\\infty$ be its eventual steady value and $y(0)=y_0\\neq y_\\infty$. \\[\\text{Prove the time to cover half the gap from }y_0\\text{ to }y_\\infty\\text{ is }\\tfrac{\\ln 2}{b},\\text{ independent of }a,y_0,y_\\infty;\\text{ then evaluate it for }b=\\tfrac{\\ln 2}{5}\\text{ and report }y(5)\\text{ when }y_\\infty=50,\\,y_0=10.\\]",
    "answer": "\\[\\boxed{t_{1/2}=\\dfrac{\\ln 2}{b},\\qquad y(5)=30}\\]",
    "trap": "Thinking the half-gap time depends on how far away you start or on the steady value $y_\\infty=a/b$. Since $y(t)-y_\\infty=(y_0-y_\\infty)e^{-bt}$, the GAP decays purely exponentially with rate $b$; its half-life $\\ln2/b$ is set by $b$ alone, exactly as a radioactive half-life ignores the initial amount.",
    "solutions": [
      {
        "name": "Gap variable",
        "steps": [
          "Steady state: $0=a-by_\\infty\\Rightarrow y_\\infty=a/b$. Let $g=y-y_\\infty$.",
          "Then $\\dfrac{dg}{dt}=\\dfrac{dy}{dt}=a-by=-b(y-y_\\infty)=-bg$, so $g(t)=g_0e^{-bt}$.",
          "Half the gap means $|g|=\\tfrac12|g_0|$, i.e. $e^{-bt}=\\tfrac12\\Rightarrow t_{1/2}=\\dfrac{\\ln 2}{b}$, free of $a,y_0,y_\\infty$.",
          "With $b=\\tfrac{\\ln2}{5}$, $t_{1/2}=5$; and $y(5)=y_\\infty+(y_0-y_\\infty)e^{-b\\cdot5}=50+(10-50)\\cdot\\tfrac12=30$. $\\boxed{t_{1/2}=\\ln2/b,\\ y(5)=30}$"
        ]
      },
      {
        "name": "Direct solution",
        "steps": [
          "Integrating factor $e^{bt}$: $(ye^{bt})'=ae^{bt}\\Rightarrow y=\\dfrac{a}{b}+\\Big(y_0-\\dfrac ab\\Big)e^{-bt}$.",
          "The half-gap condition $y-y_\\infty=\\tfrac12(y_0-y_\\infty)$ gives $e^{-bt}=\\tfrac12$, so $t=\\ln2/b$ regardless of constants.",
          "Numerically $b=\\ln2/5$ gives the explicit curve $y=50-40\\cdot2^{-t/5}$; at $t=5$, $y=50-20=30$.",
          "$\\boxed{t_{1/2}=\\ln2/b,\\ y(5)=30}$"
        ]
      }
    ],
    "remark": "Insight: every first-order linear relaxation has a 'half-life of the remaining distance' that depends only on the rate constant. This is why charging a capacitor or warming a probe always covers equal fractions of the remaining gap in equal times."
  },
  {
    "theme": "applications",
    "themeLabel": "Growth, Decay, Cooling & Mixing",
    "title": "The Overflowing Brine Tank",
    "difficulty": 4,
    "task": "Determine",
    "tags": [
      "mixing",
      "variable volume",
      "linear ode",
      "brine tank",
      "integrating factor"
    ],
    "statement": "A tank holds $100$ litres of pure water. Starting at $t=0$, brine of concentration $2\\,\\text{kg/L}$ flows in at $3\\,\\text{L/min}$, and the well-stirred mixture is drawn off at only $2\\,\\text{L/min}$, so the tank fills. Let $x(t)$ be the kilograms of salt present. \\[\\text{Determine the amount of salt in the tank at the instant its volume first reaches }200\\text{ L.}\\]",
    "answer": "\\[\\boxed{x=350\\text{ kg}}\\]",
    "trap": "Using a constant outflow concentration of $\\frac{x}{100}$ (assuming the volume stays $100$ L). Because inflow exceeds outflow, the volume actually grows as $V(t)=100+t$, so the outflow concentration is $\\frac{x}{100+t}$ with a moving denominator. Freezing $V$ at $100$ replaces the equation by $\\frac{dx}{dt}=6-\\frac{2x}{100}$, whose solution $x=300\\bigl(1-e^{-t/50}\\bigr)$ gives only $x(100)=300(1-e^{-2})\\approx 259.4$ kg at $t=100$ — a wrong value, since the true tank is larger and holds more salt ($350$ kg).",
    "solutions": [
      {
        "name": "Set up the variable-volume ODE",
        "steps": [
          "Volume: $V(t)=100+(3-2)t=100+t$; the tank reaches $200$ L at $t=100$ min.",
          "Salt balance: $\\dfrac{dx}{dt}=\\underbrace{2\\cdot 3}_{\\text{in}}-\\underbrace{2\\cdot\\dfrac{x}{100+t}}_{\\text{out}}=6-\\dfrac{2x}{100+t}$.",
          "Linear: integrating factor $\\mu=(100+t)^2$, giving $\\big((100+t)^2x\\big)'=6(100+t)^2$.",
          "Integrate: $(100+t)^2x=2(100+t)^3+C$; with $x(0)=0$, $C=-2\\cdot 100^3$.",
          "So $x(t)=2(100+t)-\\dfrac{2\\cdot 10^6}{(100+t)^2}$; at $t=100$: $x=400-\\dfrac{2\\cdot10^6}{200^2}=400-50=350$. $\\boxed{350}$"
        ]
      },
      {
        "name": "Concentration as the variable",
        "steps": [
          "Let $c=x/V$, $V=100+t$. Then $x=cV$ and $\\dfrac{dx}{dt}=c+V\\dfrac{dc}{dt}$ (since $V'=1$).",
          "Balance $6-2c=c+V c'$ gives $V c'=6-3c$, i.e. $\\dfrac{dc}{6-3c}=\\dfrac{dt}{V}$.",
          "Integrate: $-\\tfrac13\\ln|6-3c|=\\ln V+\\text{const}$; with $c(0)=0$ at $V=100$: $6-3c=6\\,(100/V)^3$.",
          "At $V=200$: $6-3c=6/8\\Rightarrow c=\\tfrac{7}{4}$, so $x=cV=\\tfrac74\\cdot200=350$. $\\boxed{350}$"
        ]
      }
    ],
    "remark": "Insight: when inflow and outflow rates differ, the carrier volume is itself a function of time and must enter the outflow term. The clean answer $350$ kg ($1.75$ kg/L, below the inflow $2$ kg/L) shows the mixture is still 'catching up' to the feed concentration."
  },
  {
    "theme": "applications",
    "themeLabel": "Growth, Decay, Cooling & Mixing",
    "title": "Where Growth Is Fastest",
    "difficulty": 4,
    "task": "Find",
    "tags": [
      "logistic growth",
      "carrying capacity",
      "inflection",
      "separable ode",
      "population"
    ],
    "statement": "A fish population in a lake obeys logistic growth $\\dfrac{dP}{dt}=kP\\!\\left(1-\\dfrac{P}{M}\\right)$ with carrying capacity $M=1000$ and $P(0)=100$. Field data fix the rate so that $e^{-kt}=3^{-t/5}$ (time $t$ in years). \\[\\text{Find (i) the year in which the population is growing fastest, and (ii) the year it reaches }900.\\]",
    "answer": "\\[\\boxed{\\text{fastest at }t=10,\\quad P=900\\text{ at }t=20}\\]",
    "trap": "Believing the growth rate $\\frac{dP}{dt}$ is largest at $t=0$ (when $P$ is small but the brake $1-P/M$ is loose) or that it keeps increasing toward $M$. The rate $kP(1-P/M)$ is maximised at $P=M/2$, the inflection point of the S-curve, not at the endpoints; both are slower.",
    "solutions": [
      {
        "name": "Solve the logistic curve, locate inflection",
        "steps": [
          "Standard solution $P(t)=\\dfrac{M}{1+Ae^{-kt}}$ with $A=\\dfrac{M-P_0}{P_0}=9$ and $e^{-kt}=3^{-t/5}$.",
          "Maximum of $\\frac{dP}{dt}$ occurs at $P=M/2=500$: solve $\\dfrac{1000}{1+9\\cdot3^{-t/5}}=500\\Rightarrow 9\\cdot3^{-t/5}=1\\Rightarrow 3^{-t/5}=3^{-2}$, so $t=10$.",
          "For $P=900$: $1+9\\cdot3^{-t/5}=\\tfrac{1000}{900}=\\tfrac{10}{9}\\Rightarrow 9\\cdot3^{-t/5}=\\tfrac19\\Rightarrow 3^{-t/5}=3^{-4}$, so $t=20$.",
          "$\\boxed{t=10\\ \\text{(fastest)},\\ t=20\\ (P=900)}$"
        ]
      },
      {
        "name": "Second derivative test on P",
        "steps": [
          "Differentiate $\\frac{dP}{dt}=kP(1-P/M)$: $\\frac{d^2P}{dt^2}=k\\frac{dP}{dt}(1-2P/M)$, which is zero at $P=M/2$.",
          "So the unique inflection (fastest growth) is at $P=500$; substituting into the explicit curve gives $t=10$.",
          "Then setting $P=900$ in the same curve gives $t=20$ as above.",
          "$\\boxed{10\\ \\text{and}\\ 20}$"
        ]
      }
    ],
    "remark": "Insight: the logistic peak-growth year depends only on hitting half the carrying capacity, an internal landmark independent of where you started. The convenient encoding $e^{-kt}=3^{-t/5}$ turns both conditions into matching powers of $3$."
  },
  {
    "theme": "applications",
    "themeLabel": "Growth, Decay, Cooling & Mixing",
    "title": "Torricelli's Deceptive Half",
    "difficulty": 4,
    "task": "Find",
    "tags": [
      "torricelli",
      "draining tank",
      "square root",
      "separable ode",
      "nonlinear"
    ],
    "statement": "A vertical cylindrical tank drains through a small hole, so the water level obeys Torricelli's law $\\dfrac{dh}{dt}=-c\\sqrt{h}$ for a constant $c>0$. Filled to the brim, the tank takes exactly $12$ minutes to empty completely. \\[\\text{Find the time at which the water level has fallen to one quarter of its initial depth.}\\]",
    "answer": "\\[\\boxed{6\\text{ minutes}}\\]",
    "trap": "Assuming the level falls linearly, so that height $H/4$ is reached at $\\tfrac34$ of the total time ($9$ min), or that draining is symmetric in time. Because $\\frac{dh}{dt}\\propto-\\sqrt{h}$, the level follows a downward parabola $h=H(1-t/T)^2$; the level reaches $H/4$ at exactly HALF the total drain time, while half the depth ($H/2$) is reached even sooner.",
    "solutions": [
      {
        "name": "Integrate the square-root law",
        "steps": [
          "Separate: $\\dfrac{dh}{\\sqrt h}=-c\\,dt\\Rightarrow 2\\sqrt h=2\\sqrt H-c\\,t$, so $\\sqrt h=\\sqrt H-\\tfrac{c}{2}t$.",
          "Empty ($h=0$) at $T=\\dfrac{2\\sqrt H}{c}=12$ min, hence $\\sqrt h=\\sqrt H\\,(1-t/T)$ and $h=H(1-t/T)^2$.",
          "Set $h=H/4$: $(1-t/T)^2=\\tfrac14\\Rightarrow 1-t/T=\\tfrac12\\Rightarrow t=T/2$.",
          "With $T=12$, $t=6$ minutes. $\\boxed{6}$"
        ]
      },
      {
        "name": "Linear-in-$\\sqrt h$ shortcut",
        "steps": [
          "Torricelli makes $\\sqrt h$ decrease linearly in time, from $\\sqrt H$ to $0$ over $12$ min.",
          "Level $H/4$ means $\\sqrt h=\\tfrac12\\sqrt H$, exactly halfway down the linear $\\sqrt h$ track.",
          "Halfway in $\\sqrt h$ is reached at half the total time: $t=6$ min.",
          "$\\boxed{6\\text{ min}}$"
        ]
      }
    ],
    "remark": "Insight: it is $\\sqrt h$, not $h$, that is linear in time under Torricelli's law. The quarter-depth landmark therefore lands at the temporal midpoint, a counter-intuitive fact draining tanks exploit."
  },
  {
    "theme": "applications",
    "themeLabel": "Growth, Decay, Cooling & Mixing",
    "title": "Parent and Daughter",
    "difficulty": 4,
    "task": "Find",
    "tags": [
      "radioactive decay",
      "decay chain",
      "coupled ode",
      "half-life",
      "conservation"
    ],
    "statement": "A radioactive parent isotope decays into a stable daughter by $\\dfrac{dA}{dt}=-kA$, with every decayed atom becoming a daughter atom: $\\dfrac{dB}{dt}=+kA$. Initially $A(0)=A_0$ and $B(0)=0$, and the parent's half-life is $6$ hours. \\[\\text{Find the time at which the accumulated daughter is exactly three times the surviving parent.}\\]",
    "answer": "\\[\\boxed{12\\text{ hours}}\\]",
    "trap": "Treating the daughter as if it grew exponentially on its own, or forgetting that $A+B=A_0$ is conserved so $B=A_0-A$. A common slip is to set $B=3A$ and write $e^{+kt}=3$, getting the wrong sign; the correct condition is $A_0-A=3A$, i.e. $A=A_0/4$, which is TWO half-lives, not three.",
    "solutions": [
      {
        "name": "Conservation shortcut",
        "steps": [
          "Adding the equations, $(A+B)'=0$, so $A+B=A_0$ for all $t$; hence $B=A_0-A$.",
          "$B=3A\\Rightarrow A_0-A=3A\\Rightarrow A=\\tfrac{A_0}{4}$.",
          "$A=A_0e^{-kt}=A_0/4\\Rightarrow e^{-kt}=2^{-2}\\Rightarrow t=2\\cdot\\dfrac{\\ln2}{k}=2\\times(\\text{half-life})$.",
          "Two half-lives $=2\\times6=12$ hours. $\\boxed{12}$"
        ]
      },
      {
        "name": "Explicit solve",
        "steps": [
          "$A=A_0e^{-kt}$ and integrating $B'=kA_0e^{-kt}$ with $B(0)=0$ gives $B=A_0(1-e^{-kt})$.",
          "$B=3A:\\ A_0(1-e^{-kt})=3A_0e^{-kt}\\Rightarrow 1=4e^{-kt}\\Rightarrow e^{-kt}=\\tfrac14$.",
          "So $kt=2\\ln2$, $t=2\\ln2/k$; with half-life $6$ h ($k=\\ln2/6$), $t=12$ h.",
          "$\\boxed{12\\text{ hours}}$"
        ]
      }
    ],
    "remark": "Insight: in a single-step decay chain to a stable product, parent equals daughter at exactly one half-life and the daughter overtakes by powers of two thereafter. Conservation $A+B=A_0$ removes the need to integrate the daughter equation at all."
  },
  {
    "theme": "applications",
    "themeLabel": "Growth, Decay, Cooling & Mixing",
    "title": "Chasing a Moving Climate",
    "difficulty": 5,
    "task": "Find",
    "tags": [
      "newtons cooling",
      "time-varying ambient",
      "linear ode",
      "asymptotic lag",
      "fused"
    ],
    "statement": "A sensor cools and warms toward its surroundings by $\\dfrac{dT}{dt}=-k\\,(T-E(t))$ with $k=\\tfrac12$ per minute, but the surroundings are themselves warming at a steady $2^{\\circ}$ per minute: $E(t)=2t$. The sensor starts at $T(0)=10^{\\circ}$. \\[\\text{Find the limiting temperature gap }E(t)-T(t)\\text{ as }t\\to\\infty.\\]",
    "answer": "\\[\\boxed{4^{\\circ}}\\]",
    "trap": "Assuming the sensor eventually 'catches up' to the rising ambient so the gap vanishes, i.e. $E-T\\to 0$. For a ramping environment the sensor settles into a steady LAG behind it; the gap tends to $\\dot E/k=2/(1/2)=4^{\\circ}$, a permanent offset, not zero.",
    "solutions": [
      {
        "name": "Particular + homogeneous",
        "steps": [
          "ODE: $T'+\\tfrac12T=\\tfrac12 E(t)=t$. Try a linear particular solution $T_p=\\alpha t+\\beta$.",
          "$\\alpha+\\tfrac12(\\alpha t+\\beta)=t\\Rightarrow \\tfrac12\\alpha=1$ and $\\alpha+\\tfrac12\\beta=0$, so $\\alpha=2,\\beta=-4$, i.e. $T_p=2t-4$.",
          "General: $T=2t-4+Ce^{-t/2}$; $T(0)=10\\Rightarrow C=14$. Thus $T=2t-4+14e^{-t/2}$.",
          "Gap $E-T=2t-(2t-4+14e^{-t/2})=4-14e^{-t/2}\\to 4$ as $t\\to\\infty$. $\\boxed{4^{\\circ}}$"
        ]
      },
      {
        "name": "Steady-lag argument",
        "steps": [
          "Seek a tracking solution where the gap $g=E-T$ is eventually constant, so $g'\\to 0$.",
          "From $T'=-k(T-E)= k\\,g$ and $E'=2$: $g'=E'-T'=2-kg$.",
          "Setting $g'=0$ gives the equilibrium lag $g_\\infty=\\dfrac{E'}{k}=\\dfrac{2}{1/2}=4$; transients $e^{-kt}$ decay.",
          "$\\boxed{4^{\\circ}}$"
        ]
      }
    ],
    "remark": "Insight: against a uniformly drifting environment, a first-order tracker locks into a constant lag $\\dot E/k$, the same way a low-pass filter trails a ramp input. A slower sensor (smaller $k$) lags further behind."
  },
  {
    "theme": "applications",
    "themeLabel": "Growth, Decay, Cooling & Mixing",
    "title": "The Draining Brine Tank",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "mixing",
      "shrinking volume",
      "linear ode",
      "brine tank",
      "variable coefficients"
    ],
    "statement": "A tank starts with $200$ litres of pure water. From $t=0$, brine of concentration $1\\,\\text{kg/L}$ runs in at $4\\,\\text{L/min}$ while the well-stirred mixture is pumped out at $6\\,\\text{L/min}$, so the tank slowly empties. Let $x(t)$ be the kilograms of salt. \\[\\text{Determine the amount of salt present at the moment the tank contains exactly }100\\text{ L.}\\]",
    "answer": "\\[\\boxed{x=75\\text{ kg}}\\]",
    "trap": "Holding the volume fixed at $200$ L (giving outflow concentration $x/200$), or, worse, getting the shrinking-volume denominator $200-2t$ but using the wrong outflow rate $4$ instead of $6$. The decreasing volume both speeds removal and forces the tank to vanish at $t=100$, so the salt rises, peaks, then must fall back toward $0$.",
    "solutions": [
      {
        "name": "Variable-coefficient linear ODE",
        "steps": [
          "Volume $V(t)=200+(4-6)t=200-2t$; it equals $100$ L at $t=50$ min (and empties at $t=100$).",
          "Salt: $\\dfrac{dx}{dt}=\\underbrace{1\\cdot4}_{\\text{in}}-\\underbrace{6\\dfrac{x}{200-2t}}_{\\text{out}}=4-\\dfrac{3x}{100-t}$.",
          "Integrating factor $\\mu=(100-t)^{-3}$: $\\big((100-t)^{-3}x\\big)'=4(100-t)^{-3}$.",
          "Integrate: $(100-t)^{-3}x=2(100-t)^{-2}+C$; with $x(0)=0$, $C=-2\\cdot100^{-2}$.",
          "So $x(t)=2(100-t)-2\\dfrac{(100-t)^3}{100^2}=\\dfrac{t(t-100)(t-200)}{5000}$; at $t=50$, $x=\\dfrac{50(-50)(-150)}{5000}=75$. $\\boxed{75}$"
        ]
      },
      {
        "name": "Concentration variable",
        "steps": [
          "Let $c=x/V$ with $V=200-2t$, so $\\dot V=-2$. Differentiate $x=cV$: $\\dot x=\\dot cV+c\\dot V=\\dot cV-2c$.",
          "But $\\dot x=4-6c$, so $\\dot cV-2c=4-6c$, i.e. $(200-2t)\\dot c=4-4c$.",
          "Separate: $\\dfrac{dc}{1-c}=\\dfrac{4\\,dt}{200-2t}=\\dfrac{2\\,dt}{100-t}$; integrate with $c(0)=0$, giving $1-c=\\big(\\tfrac{100-t}{100}\\big)^{2}$, so $c=1-\\big(1-\\tfrac{t}{100}\\big)^2$.",
          "At $t=50$: $c=1-\\tfrac14=\\tfrac34$ kg/L, and $V=100$, so $x=cV=75$. $\\boxed{75\\text{ kg}}$"
        ]
      }
    ],
    "remark": "Insight: with outflow exceeding inflow the tank is racing toward empty, so the salt content cannot grow forever; here $x(t)=\\tfrac{t(t-100)(t-200)}{5000}$ rises to a peak near $t\\approx42.3$ then collapses to $0$ at $t=100$. The clean $75$ kg sits on the way up."
  },
  {
    "theme": "applications",
    "themeLabel": "Growth, Decay, Cooling & Mixing",
    "title": "The Self-Heating Probe",
    "difficulty": 5,
    "task": "Find",
    "tags": [
      "newtons cooling",
      "internal heat source",
      "two-stage",
      "steady state",
      "fused"
    ],
    "statement": "In a room held at $20^{\\circ}$, an unpowered metal probe obeying $\\dfrac{dT}{dt}=-k(T-20)$ cools from $80^{\\circ}$ to $50^{\\circ}$ in $10$ minutes. The probe is then switched on, adding internal heat at a constant rate; this raises its eventual steady temperature to $50^{\\circ}$. Starting (powered) from the room temperature $20^{\\circ}$, \\[\\text{Find the time for the powered probe to reach }35^{\\circ}.\\]",
    "answer": "\\[\\boxed{10\\text{ minutes}}\\]",
    "trap": "Reusing the unpowered cooling curve for the heating phase, or assuming the new steady state is still $20^{\\circ}$ because that's the ambient. With a constant internal source $H$, the balance shifts to $T_\\infty=20+H/k$; the approach is again exponential with the SAME $k$, so its half-gap time equals the cooling half-time, but the target and direction differ.",
    "solutions": [
      {
        "name": "Find k, then the heated approach",
        "steps": [
          "Cooling: $50=20+(80-20)e^{-10k}\\Rightarrow e^{-10k}=\\tfrac12$, so $k=\\dfrac{\\ln2}{10}$ (cooling half-time $10$ min).",
          "Powered ODE: $\\dfrac{dT}{dt}=-k(T-20)+H$, steady state $T_\\infty=20+\\dfrac{H}{k}=50$ (given), so $H/k=30$.",
          "Solution from $T(0)=20$: $T=50+(20-50)e^{-kt}=50-30e^{-kt}$.",
          "Reach $35$: $35=50-30e^{-kt}\\Rightarrow e^{-kt}=\\tfrac12\\Rightarrow t=\\dfrac{\\ln2}{k}=10$ min. $\\boxed{10}$"
        ]
      },
      {
        "name": "Half-gap reasoning",
        "steps": [
          "The powered probe relaxes toward $T_\\infty=50$ from $20$ with rate constant $k=\\ln2/10$ (unchanged by the source).",
          "Target $35^{\\circ}$ is exactly halfway between start $20$ and steady $50$.",
          "Covering half the remaining gap takes the half-time $\\ln2/k=10$ min, identical to the cooling half-time measured in stage one.",
          "$\\boxed{10\\text{ minutes}}$"
        ]
      }
    ],
    "remark": "Insight: a constant internal heat source only shifts the steady state to $20+H/k$; it leaves the relaxation rate $k$ untouched. So the half-gap time is a property of the probe and room alone, letting stage-one cooling data predict stage-two heating timing."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Constant Fixed by an Area",
    "difficulty": 4,
    "task": "Find the curve",
    "tags": [
      "linear ode",
      "integrating factor",
      "area condition",
      "initial value"
    ],
    "statement": "A curve $y=y(x)$ satisfies the linear equation $x\\,y'-y=x^{2}$ for $x>0$, and the area bounded by the curve, the $x$-axis and the lines $x=0,\\,x=1$ equals $\\dfrac{5}{6}$. Find the curve.",
    "answer": "\\[\\boxed{y=x^{2}+x}\\]",
    "trap": "Treating the ODE as having a unique solution and ignoring the free constant, or fixing the constant from a misread 'point' condition. The constant is determined only by the global area condition $\\int_0^1 y\\,dx=5/6$, not by any single point.",
    "solutions": [
      {
        "name": "Solve, then impose the area",
        "steps": [
          "Rewrite $y'-\\dfrac{y}{x}=x$. Integrating factor $\\mu=1/x$: $\\big(y/x\\big)'=1$.",
          "Integrate: $y/x=x+C\\Rightarrow y=x^2+Cx$.",
          "Impose area: $\\int_0^1 (x^2+Cx)\\,dx=\\tfrac13+\\tfrac{C}{2}=\\tfrac56$.",
          "Solve: $C/2=1/2\\Rightarrow C=1$.",
          "Hence $y=x^2+x$; check: $x y'-y=x(2x+1)-(x^2+x)=x^2$. $\\boxed{y=x^2+x}$"
        ]
      },
      {
        "name": "Guess-and-correct (particular + homogeneous)",
        "steps": [
          "A particular solution: try $y_p=x^2$, then $xy_p'-y_p=2x^2-x^2=x^2$. Works.",
          "Homogeneous $xy'-y=0$ gives $y_h=Cx$. General $y=x^2+Cx$.",
          "Area $\\int_0^1=1/3+C/2=5/6\\Rightarrow C=1$.",
          "So $y=x^2+x$. $\\boxed{y=x^2+x}$"
        ]
      }
    ],
    "remark": "Insight: an integral (area) condition can replace a pointwise initial condition — the constant of integration is pinned by a global functional, a common advanced fusion."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Circle That Forgot Its Centre",
    "difficulty": 4,
    "task": "Find the value",
    "tags": [
      "formation",
      "homogeneous",
      "y = vx",
      "initial condition"
    ],
    "statement": "Every member of a one-parameter family of circles passes through the origin with its centre on the $x$-axis, so the family is $x^{2}+y^{2}=2c\\,x$. First eliminate $c$ to form the differential equation of the family, then solve that equation afresh to recover the curve of the family that passes through $(4,2)$. For that curve, find $y(1)$ (take the value with $y>0$).",
    "answer": "\\[\\boxed{\\,y(1)=2\\,}\\]",
    "trap": "Differentiating $x^{2}+y^{2}=2cx$ to $2x+2yy'=2c$ and then quietly keeping the live constant $c$ in the answer gives the meaningless relation $x+yy'=c$ with $c$ still floating — or, reading the slope $\\tfrac{dy}{dx}=\\tfrac{c-x}{y}$ at $(4,2)$ with $c=5$ as if that single tangent slope $\\tfrac12$ were the requested $y(1)$. The constant must be eliminated to form a genuine ODE, the ODE re-solved, and only the resulting curve evaluated at $x=1$.",
    "solutions": [
      {
        "name": "Form, then solve as homogeneous",
        "steps": [
          "Differentiate $x^{2}+y^{2}=2cx$: $2x+2yy'=2c$, so $c=x+yy'$. Substituting back, $x^{2}+y^{2}=2(x+yy')x$, giving the ODE $\\dfrac{dy}{dx}=\\dfrac{y^{2}-x^{2}}{2xy}$ — first order, first degree.",
          "This is homogeneous; put $y=vx$, so $\\dfrac{dy}{dx}=v+x\\dfrac{dv}{dx}=\\dfrac{v^{2}-1}{2v}$, whence $x\\dfrac{dv}{dx}=\\dfrac{-(1+v^{2})}{2v}$.",
          "Separate: $\\dfrac{2v\\,dv}{1+v^{2}}=-\\dfrac{dx}{x}\\Rightarrow \\ln(1+v^{2})=-\\ln x+\\text{const}$, i.e. $x(1+v^{2})=k$, so $x^{2}+y^{2}=kx$.",
          "Through $(4,2)$: $16+4=4k\\Rightarrow k=5$, giving $x^{2}+y^{2}=5x$. At $x=1$: $y^{2}=4$, so $y(1)=\\boxed{2}.$"
        ]
      },
      {
        "name": "Re-fit the parameter directly",
        "steps": [
          "The formed ODE $\\dfrac{dy}{dx}=\\dfrac{y^{2}-x^{2}}{2xy}$ has the family $x^{2}+y^{2}=kx$ as its general solution, since differentiating that family reproduces the same equation with $k=2c$.",
          "Impose the point $(4,2)$ on the general solution: $4^{2}+2^{2}=k\\cdot 4\\Rightarrow k=5$.",
          "Hence the particular curve is $x^{2}+y^{2}=5x$.",
          "Setting $x=1$ gives $1+y^{2}=5$, so $y=2$ (positive branch): $y(1)=\\boxed{2}.$"
        ]
      }
    ],
    "remark": "**Insight.** A hybrid like this has three movements that must not be confused: **forming** the ODE kills the constant, **solving** it brings back a *general* constant $k$, and the **point** finally pins $k$ down. People who read a tangent slope at the data point mistake one local derivative for the global curve. The slope at $(4,2)$ and the height at $x=1$ are different questions about the same circle."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "Where the Tangent Cuts the Axis",
    "difficulty": 4,
    "task": "Find the curve",
    "tags": [
      "tangent condition",
      "linear equation",
      "integrating factor",
      "particular solution"
    ],
    "statement": "At every point of a curve in the first quadrant, the tangent line meets the $y$-axis at a height equal to the square of the abscissa of the point of contact. The curve passes through $(1,2)$. Set up the first-order equation this geometric condition forces, solve it, and hence find $y(2)$.",
    "answer": "\\[\\boxed{\\,y(2)=2,\\quad\\text{curve } y=3x-x^{2}\\,}\\]",
    "trap": "Reading 'meets the $y$-axis at height $x^{2}$' as $y=x^{2}$ (the point itself) instead of the $y$-intercept $y-xy'=x^{2}$ of the tangent line. That misreading hands back $y=x^{2}$, which through $(1,2)$ does not even pass (it gives $y(1)=1$), and predicts $y(2)=4$. The intercept of the tangent is $y-x\\,\\dfrac{dy}{dx}$, not the ordinate.",
    "solutions": [
      {
        "name": "Tangent intercept to a linear ODE",
        "steps": [
          "The tangent at $(x,y)$ is $Y-y=y'(X-x)$; its $y$-intercept (at $X=0$) is $y-xy'$. The condition is $y-xy'=x^{2}$.",
          "Rearrange to linear form: $xy'-y=-x^{2}$, i.e. $\\dfrac{dy}{dx}-\\dfrac{1}{x}\\,y=-x$, a first-order linear equation with $P=-\\tfrac1x$.",
          "Integrating factor $e^{\\int P\\,dx}=e^{-\\ln x}=\\dfrac1x$. Then $\\dfrac{d}{dx}\\!\\left(\\dfrac{y}{x}\\right)=-1$, so $\\dfrac{y}{x}=-x+C$, giving $y=-x^{2}+Cx$.",
          "Through $(1,2)$: $2=-1+C\\Rightarrow C=3$, so $y=3x-x^{2}$. Then $y(2)=6-4=2$: $\\boxed{y(2)=2}.$"
        ]
      },
      {
        "name": "Verify by the intercept directly",
        "steps": [
          "Guided solution $y=3x-x^{2}$ has $y'=3-2x$, so the tangent intercept is $y-xy'=(3x-x^{2})-x(3-2x)=x^{2}$, matching the stated condition for all $x$.",
          "It passes through $(1,2)$ since $3(1)-1=2$, so it is the correct particular curve.",
          "Therefore $y(2)=3(2)-2^{2}=6-4=2$.",
          "Hence $\\boxed{y(2)=2}.$"
        ]
      }
    ],
    "remark": "**Insight.** The whole problem turns on translating a sentence about a *line* into algebra about a *function*. The $y$-intercept of the tangent, $y-x\\,y'$, is a classic carrier of geometric data; once you write it down, the condition is already a linear ODE and the integrating factor $1/x$ finishes it. The trap punishes anyone who never drew the tangent at all."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "A Square That Begs a Shift",
    "difficulty": 4,
    "task": "Solve the IVP",
    "tags": [
      "reducible to separable",
      "substitution",
      "arctangent",
      "initial condition"
    ],
    "statement": "Solve $$\\frac{dy}{dx}=(x+y)^{2},\\qquad y(0)=0,$$ by first reducing it to a separable equation with a suitable substitution, and then evaluate $y\\!\\left(\\tfrac{\\pi}{4}\\right)$.",
    "answer": "\\[\\boxed{\\,y=\\tan x-x,\\qquad y\\!\\left(\\tfrac{\\pi}{4}\\right)=1-\\tfrac{\\pi}{4}\\,}\\]",
    "trap": "Treating $(x+y)^{2}$ as if the variables already separate and writing $\\dfrac{dy}{y^{2}}=\\,$something, or integrating the right side as $\\tfrac13(x+y)^{3}$ as though $x+y$ were a single variable independent of $x$. Both ignore that $\\dfrac{d}{dx}(x+y)=1+y'$, not $y'$. The honest move is the substitution $v=x+y$, after which the equation truly separates to $\\dfrac{dv}{1+v^{2}}=dx$.",
    "solutions": [
      {
        "name": "Substitution v = x + y",
        "steps": [
          "Let $v=x+y$. Then $\\dfrac{dv}{dx}=1+\\dfrac{dy}{dx}=1+v^{2}$, which is separable.",
          "Separate and integrate: $\\dfrac{dv}{1+v^{2}}=dx\\Rightarrow \\arctan v=x+C$.",
          "Apply $y(0)=0\\Rightarrow v(0)=0$: $\\arctan 0=0+C\\Rightarrow C=0$, so $\\arctan(x+y)=x$, i.e. $x+y=\\tan x$ and $y=\\tan x-x$.",
          "At $x=\\tfrac{\\pi}{4}$: $y=\\tan\\tfrac{\\pi}{4}-\\tfrac{\\pi}{4}=1-\\tfrac{\\pi}{4}$, so $\\boxed{y\\!\\left(\\tfrac{\\pi}{4}\\right)=1-\\tfrac{\\pi}{4}}.$"
        ]
      },
      {
        "name": "Differentiate the candidate back",
        "steps": [
          "From the reduced equation the only solution through the origin is $x+y=\\tan x$; write $y=\\tan x-x$.",
          "Differentiate: $y'=\\sec^{2}x-1=\\tan^{2}x=(x+y)^{2}$, so the ODE is satisfied identically.",
          "Check the start: $y(0)=\\tan 0-0=0$, matching the initial condition.",
          "Hence $y\\!\\left(\\tfrac{\\pi}{4}\\right)=1-\\tfrac{\\pi}{4}$: $\\boxed{1-\\tfrac{\\pi}{4}}.$"
        ]
      }
    ],
    "remark": "**Insight.** The single most reusable trick for $\\dfrac{dy}{dx}=f(ax+by+c)$ is the substitution $v=ax+by+c$, which converts an inseparable mess into a clean separable one. Here it also unlocks the identity $\\sec^{2}x-1=\\tan^{2}x$, the very fact that lets the answer close in elementary form. Skipping the substitution is what makes the cube-of-a-sum trap so tempting."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "Shift the Origin, Then Spin",
    "difficulty": 4,
    "task": "Solve the IVP",
    "tags": [
      "reducible to homogeneous",
      "shift of origin",
      "y = vx",
      "initial condition"
    ],
    "statement": "Solve $$\\frac{dy}{dx}=\\frac{x+y-2}{x-y},\\qquad y(2)=1,$$ by shifting the origin to make the equation homogeneous, and give the implicit equation of the particular solution.",
    "answer": "\\[\\boxed{\\;\\arctan\\!\\frac{y-1}{x-1}=\\tfrac12\\ln\\!\\big((x-1)^{2}+(y-1)^{2}\\big)\\;}\\]",
    "trap": "Trying to separate $\\dfrac{x+y-2}{x-y}$ as it stands, or substituting $y=vx$ directly without first removing the constant $-2$. Because of that constant the raw equation is not homogeneous, so $y=vx$ leaves an $x$ stranded and the variables refuse to separate. One must first locate where the lines $x+y-2=0$ and $x-y=0$ meet, namely $(1,1)$, and shift the origin there.",
    "solutions": [
      {
        "name": "Shift to the intersection, then y = vx",
        "steps": [
          "The lines $x+y-2=0$ and $x-y=0$ meet at $(1,1)$. Put $X=x-1,\\;Y=y-1$; then $\\dfrac{dY}{dX}=\\dfrac{X+Y}{X-Y}$, which is homogeneous.",
          "Set $Y=vX$: $v+X\\dfrac{dv}{dX}=\\dfrac{1+v}{1-v}$, so $X\\dfrac{dv}{dX}=\\dfrac{1+v}{1-v}-v=\\dfrac{1+v^{2}}{1-v}$.",
          "Separate: $\\dfrac{1-v}{1+v^{2}}\\,dv=\\dfrac{dX}{X}\\Rightarrow \\arctan v-\\tfrac12\\ln(1+v^{2})=\\ln X+\\text{const}$. With $v=Y/X$ this is $\\arctan\\dfrac{Y}{X}-\\tfrac12\\ln(X^{2}+Y^{2})=\\text{const}$.",
          "Apply $y(2)=1\\Rightarrow X=1,Y=0$: $\\arctan 0-\\tfrac12\\ln 1=0$, so the constant is $0$. Restoring $X=x-1,Y=y-1$ gives $\\boxed{\\arctan\\dfrac{y-1}{x-1}=\\tfrac12\\ln\\!\\big((x-1)^{2}+(y-1)^{2}\\big)}.$"
        ]
      },
      {
        "name": "Confirm by implicit differentiation",
        "steps": [
          "Let $F=\\arctan\\dfrac{y-1}{x-1}-\\tfrac12\\ln\\!\\big((x-1)^{2}+(y-1)^{2}\\big)$. Then $\\dfrac{dy}{dx}=-\\dfrac{F_{x}}{F_{y}}$.",
          "Computing the partials and simplifying yields $\\dfrac{dy}{dx}=\\dfrac{(x-1)+(y-1)}{(x-1)-(y-1)}=\\dfrac{x+y-2}{x-y}$, the given equation.",
          "At $(2,1)$, $F=\\arctan 0-\\tfrac12\\ln 1=0$, so the point lies on the curve $F=0$.",
          "Thus the particular solution is $\\boxed{\\arctan\\dfrac{y-1}{x-1}=\\tfrac12\\ln\\!\\big((x-1)^{2}+(y-1)^{2}\\big)}.$"
        ]
      }
    ],
    "remark": "**Insight.** A ratio of two linear expressions with nonzero constants is a homogeneous equation in disguise: translate the origin to where the two lines cross and the constants vanish. The leftover $\\dfrac{1-v}{1+v^{2}}$ splits into an arctangent piece and a logarithm piece — a spiral in polar form. The trap is purely procedural: forgetting the shift dooms the substitution."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Tank That Outgrows Itself",
    "difficulty": 5,
    "task": "Find the amount and the concentration",
    "tags": [
      "mixing model",
      "linear ode",
      "variable volume",
      "integrating factor"
    ],
    "statement": "A tank holds $100$ L of pure water. Brine of concentration $1$ g/L is pumped in at $6$ L/min, and the well-stirred mixture is drawn off at only $4$ L/min, so the volume rises. Let $A(t)$ be the grams of salt at time $t$. Find $A(50)$ and the salt $concentration$ in the tank at $t=50$ min.",
    "answer": "\\[\\boxed{A(50)=175\\text{ g},\\qquad c(50)=\\tfrac{7}{8}\\text{ g/L}}\\]",
    "trap": "Using a fixed volume $100$ in the outflow term, $dA/dt=6-4A/100$. Because inflow exceeds outflow the volume grows as $V=100+2t$, so the outflow concentration is $A/(100+2t)$; the constant-volume slip gives the wrong equation and a wrong limiting behaviour.",
    "solutions": [
      {
        "name": "Linear ODE with integrating factor",
        "steps": [
          "Volume $V(t)=100+2t$. Rate in $=1\\cdot6=6$ g/min; rate out $=\\dfrac{A}{100+2t}\\cdot4$.",
          "So $A'+\\dfrac{4}{100+2t}A=6$, i.e. $A'+\\dfrac{2}{50+t}A=6$.",
          "Integrating factor $\\mu=(50+t)^2$ (since $\\int 2/(50+t)\\,dt=2\\ln(50+t)$).",
          "$\\big[(50+t)^2A\\big]'=6(50+t)^2\\Rightarrow (50+t)^2A=2(50+t)^3+K$.",
          "$A(0)=0$: $2500\\cdot0=2\\cdot125000+K\\Rightarrow K=-250000$. Thus $A=2(50+t)-\\dfrac{250000}{(50+t)^2}$.",
          "At $t=50$: $A=2(100)-250000/10000=200-25=175$ g; $V=200$ L so $c=175/200=7/8$ g/L. $\\boxed{A(50)=175,\\ c=7/8}$"
        ]
      },
      {
        "name": "Reduce to a perfect derivative",
        "steps": [
          "Multiply $A'+\\dfrac{4}{100+2t}A=6$ by $(50+t)^2$ to get $\\dfrac{d}{dt}\\!\\big[(50+t)^2A\\big]=6(50+t)^2$.",
          "Integrate from $0$ to $t$: $(50+t)^2A-2500\\cdot0=2\\big[(50+t)^3-50^3\\big]$.",
          "So $A=2(50+t)-\\dfrac{2\\cdot50^3}{(50+t)^2}=2(50+t)-\\dfrac{250000}{(50+t)^2}$.",
          "$t=50$: $A=200-25=175$; concentration $=A/200=7/8$. $\\boxed{175,\\ 7/8}$"
        ]
      }
    ],
    "remark": "Insight: when inflow and outflow rates differ, the 'amount' ODE has a non-constant coefficient; the concentration question further forces you not to confuse grams with grams-per-litre."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "When y Is the Better Driver",
    "difficulty": 5,
    "task": "Find the value",
    "tags": [
      "linear in x",
      "integrating factor",
      "switch variables",
      "particular solution"
    ],
    "statement": "A curve through $(0,1)$ obeys $$\\frac{dy}{dx}=\\frac{y}{2x-y^{2}}.$$ Treating $x$ as the dependent variable, solve the equation and find the $x$-coordinate of the point on the curve where $y=\\dfrac{1}{e}$.",
    "answer": "\\[\\boxed{\\,x=-y^{2}\\ln y,\\qquad x\\big|_{y=1/e}=e^{-2}\\,}\\]",
    "trap": "Forcing the equation into the shape $\\dfrac{dy}{dx}+P(x)y=Q(x)$ in $y$. The denominator $2x-y^{2}$ makes $P$ depend on $y$, so no integrating factor in $x$ exists and the standard linear recipe stalls. Inverting to $\\dfrac{dx}{dy}=\\dfrac{2x-y^{2}}{y}$ exposes a clean linear equation in $x$; the seductive (wrong) reflex is to insist on $y$ as the unknown.",
    "solutions": [
      {
        "name": "Flip to dx/dy and use the integrating factor",
        "steps": [
          "Invert: $\\dfrac{dx}{dy}=\\dfrac{2x-y^{2}}{y}=\\dfrac{2}{y}\\,x-y$, i.e. $\\dfrac{dx}{dy}-\\dfrac{2}{y}\\,x=-y$ — linear in $x$ with $P(y)=-\\tfrac{2}{y}$.",
          "Integrating factor $e^{\\int P\\,dy}=e^{-2\\ln y}=y^{-2}$. Then $\\dfrac{d}{dy}\\!\\left(\\dfrac{x}{y^{2}}\\right)=-y\\cdot y^{-2}=-\\dfrac1y$, so $\\dfrac{x}{y^{2}}=-\\ln y+C$.",
          "Apply $(0,1)$, i.e. $x=0$ at $y=1$: $0=-\\ln 1+C\\Rightarrow C=0$. Hence $x=-y^{2}\\ln y$.",
          "At $y=\\tfrac1e$: $x=-\\tfrac{1}{e^{2}}\\ln\\tfrac1e=-\\tfrac{1}{e^{2}}(-1)=e^{-2}$, so $\\boxed{x=e^{-2}}.$"
        ]
      },
      {
        "name": "Verify the relation differentially",
        "steps": [
          "From $x=-y^{2}\\ln y$, $\\dfrac{dx}{dy}=-2y\\ln y-y=-2y\\ln y-y$.",
          "Independently, $\\dfrac{2x-y^{2}}{y}=\\dfrac{-2y^{2}\\ln y-y^{2}}{y}=-2y\\ln y-y$, which matches $\\dfrac{dx}{dy}$, so the relation solves the ODE.",
          "It passes through $(0,1)$ since $-1^{2}\\ln 1=0$.",
          "Therefore at $y=\\tfrac1e$, $x=-e^{-2}\\ln e^{-1}=e^{-2}$: $\\boxed{x=e^{-2}}.$"
        ]
      }
    ],
    "remark": "**Insight.** Linearity is not a property of $y$ alone — it can hide in the *other* variable. When $\\dfrac{dy}{dx}$ looks hopeless, ask whether $\\dfrac{dx}{dy}$ is linear in $x$; here that single flip turns a dead end into a one-line integrating-factor solve. The constant lands on $C=0$ precisely because the start point sits at $y=1$, where $\\ln y$ vanishes."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "Decay Fed by a Rising Source",
    "difficulty": 5,
    "task": "Find the amount",
    "tags": [
      "growth and decay",
      "linear equation",
      "integrating factor",
      "rate of change"
    ],
    "statement": "A substance decays at a rate proportional to the amount present, while being replenished by a source whose strength grows linearly with time. In suitable units the amount $N(t)$ satisfies $$\\frac{dN}{dt}=-N+t,\\qquad N(0)=2.$$ Find $N$ at the instant $t=\\ln 3$.",
    "answer": "\\[\\boxed{\\,N=t-1+3e^{-t},\\qquad N(\\ln 3)=\\ln 3\\,}\\]",
    "trap": "Treating the equation as pure decay $\\dfrac{dN}{dt}=-N$ and writing $N=2e^{-t}$, then reporting $N(\\ln 3)=2e^{-\\ln 3}=\\tfrac23$. That ignores the source term $+t$, which makes the equation linear but not separable; the genuine solution carries a particular part $t-1$ on top of the decaying part.",
    "solutions": [
      {
        "name": "Integrating factor for the linear ODE",
        "steps": [
          "Write $\\dfrac{dN}{dt}+N=t$, linear with $P=1$, so the integrating factor is $e^{\\int 1\\,dt}=e^{t}$.",
          "Then $\\dfrac{d}{dt}\\!\\left(Ne^{t}\\right)=te^{t}$, and integrating by parts $\\displaystyle\\int te^{t}\\,dt=(t-1)e^{t}$, so $Ne^{t}=(t-1)e^{t}+C$.",
          "Thus $N=t-1+Ce^{-t}$. Apply $N(0)=2$: $2=-1+C\\Rightarrow C=3$, giving $N=t-1+3e^{-t}$.",
          "At $t=\\ln 3$: $e^{-t}=\\tfrac13$, so $N=\\ln 3-1+3\\cdot\\tfrac13=\\ln 3-1+1=\\ln 3$, hence $\\boxed{N(\\ln 3)=\\ln 3}.$"
        ]
      },
      {
        "name": "Particular plus decaying part",
        "steps": [
          "A steady particular response to the source $t$ has the form $N_p=at+b$; substituting, $a=-(at+b)+t$ forces $a=1,\\;b=-1$, so $N_p=t-1$.",
          "Adding the decaying part $Ce^{-t}$ of $\\dfrac{dN}{dt}=-N$ gives $N=t-1+Ce^{-t}$.",
          "Fix $C$ from $N(0)=2$: $-1+C=2\\Rightarrow C=3$, so $N=t-1+3e^{-t}$.",
          "At $t=\\ln 3$, $3e^{-\\ln 3}=1$, so $N=\\ln 3-1+1=\\ln 3$: $\\boxed{N(\\ln 3)=\\ln 3}.$"
        ]
      }
    ],
    "remark": "**Insight.** A source term turns simple decay into a linear, non-separable problem, and the answer is the sum of a forced response that tracks the source and a transient that fades. The clean value $N(\\ln 3)=\\ln 3$ comes from the transient $3e^{-t}$ collapsing to exactly $1$ at $t=\\ln 3$, cancelling the $-1$. The trap is the all-too-common reflex of dropping the inhomogeneous term."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "Form It, Then Re-Solve It Elsewhere",
    "difficulty": 5,
    "task": "Find the value",
    "tags": [
      "formation",
      "homogeneous",
      "y = vx",
      "particular solution"
    ],
    "statement": "From the one-parameter family $y^{2}=c\\,x^{3}-x^{2}$, eliminate $c$ to form its differential equation. Then, treating that equation as given, solve it independently by a homogeneous substitution and select the curve through $(1,1)$. For that curve, find $y(2)$ with $y>0$.",
    "answer": "\\[\\boxed{\\,y^{2}=2x^{3}-x^{2},\\qquad y(2)=2\\sqrt{3}\\,}\\]",
    "trap": "After forming $\\dfrac{dy}{dx}=\\dfrac{x^{2}+3y^{2}}{2xy}$, sliding the original constant $c$ back into the 'general' answer (writing $y^{2}=cx^{3}-x^{2}$ and stopping) and reading off $y(2)$ with $c$ still unknown. Equivalently, fixing $c$ from the wrong point: $(1,1)$ gives $c=2$, but using the data point as if it were $(1,0)$ yields $c=1$ and the spurious $y(2)=2$. The point $(1,1)$ must set $c=2$.",
    "solutions": [
      {
        "name": "Form, then solve by y = vx",
        "steps": [
          "Differentiate $y^{2}=cx^{3}-x^{2}$: $2yy'=3cx^{2}-2x$, so $c=\\dfrac{2yy'+2x}{3x^{2}}$. Substituting back and simplifying gives the ODE $2xy\\,y'=x^{2}+3y^{2}$, i.e. $\\dfrac{dy}{dx}=\\dfrac{x^{2}+3y^{2}}{2xy}$ — first order, first degree.",
          "It is homogeneous; put $y=vx$: $v+x\\dfrac{dv}{dx}=\\dfrac{1+3v^{2}}{2v}$, so $x\\dfrac{dv}{dx}=\\dfrac{1+v^{2}}{2v}$.",
          "Separate: $\\dfrac{2v\\,dv}{1+v^{2}}=\\dfrac{dx}{x}\\Rightarrow \\ln(1+v^{2})=\\ln x+\\text{const}$, so $1+v^{2}=kx$, i.e. $x^{2}+y^{2}=kx^{3}$, equivalently $y^{2}=kx^{3}-x^{2}$.",
          "Through $(1,1)$: $1=k-1\\Rightarrow k=2$, giving $y^{2}=2x^{3}-x^{2}$. At $x=2$: $y^{2}=16-4=12$, so $y(2)=2\\sqrt{3}$: $\\boxed{y(2)=2\\sqrt{3}}.$"
        ]
      },
      {
        "name": "Fit the parameter on the family directly",
        "steps": [
          "The formed ODE has the family $y^{2}=kx^{3}-x^{2}$ as its general solution (the same shape as the original, with the live constant renamed $k$).",
          "Impose $(1,1)$: $1^{2}=k\\cdot 1^{3}-1^{2}\\Rightarrow k=2$.",
          "Hence the particular curve is $y^{2}=2x^{3}-x^{2}$.",
          "At $x=2$: $y^{2}=2(8)-4=12$, so the positive value is $y(2)=2\\sqrt{3}$: $\\boxed{2\\sqrt{3}}.$"
        ]
      }
    ],
    "remark": "**Insight.** Forming the ODE and re-solving it should return the *same* family with a freshly named constant — a built-in consistency check. The hybrid danger is mixing the stages: never report an answer that still contains the original parameter, and read the data point exactly. Here the homogeneous solve regenerates $y^{2}=kx^{3}-x^{2}$, and only $(1,1)$ turns $k$ into $2$."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "A Sine in Disguise Goes Linear",
    "difficulty": 5,
    "task": "Find the value",
    "tags": [
      "substitution",
      "linear equation",
      "integrating factor",
      "initial condition"
    ],
    "statement": "Solve $$\\cos y\\,\\frac{dy}{dx}+\\sin y=x,\\qquad y(0)=\\frac{\\pi}{2},$$ by a substitution that turns it into a linear equation, and hence find $\\sin y$ at $x=1$.",
    "answer": "\\[\\boxed{\\,\\sin y=x-1+2e^{-x},\\qquad \\sin y\\big|_{x=1}=\\tfrac{2}{e}\\,}\\]",
    "trap": "Reaching for the integrating factor of a linear equation in $y$ directly, even though $\\cos y\\,y'+\\sin y$ is not of the form $y'+P(x)y$. The fix is to notice $\\dfrac{d}{dx}\\sin y=\\cos y\\,y'$ and set $z=\\sin y$; the equation then becomes linear in $z$. Skipping the substitution and 'cancelling' $\\cos y$ to claim $y'+\\tan y\\cdot(\\text{stuff})$ leads nowhere clean.",
    "solutions": [
      {
        "name": "Substitute z = sin y, then integrating factor",
        "steps": [
          "Let $z=\\sin y$, so $\\dfrac{dz}{dx}=\\cos y\\,\\dfrac{dy}{dx}$. The equation becomes $\\dfrac{dz}{dx}+z=x$ — linear in $z$ with $P=1$.",
          "Integrating factor $e^{\\int 1\\,dx}=e^{x}$: $\\dfrac{d}{dx}\\!\\left(ze^{x}\\right)=xe^{x}$, so $ze^{x}=(x-1)e^{x}+C$ and $z=x-1+Ce^{-x}$.",
          "Apply $y(0)=\\tfrac{\\pi}{2}\\Rightarrow z(0)=\\sin\\tfrac{\\pi}{2}=1$: $1=-1+C\\Rightarrow C=2$. Hence $\\sin y=x-1+2e^{-x}$.",
          "At $x=1$: $\\sin y=1-1+2e^{-1}=\\dfrac{2}{e}$, so $\\boxed{\\sin y\\big|_{x=1}=\\tfrac{2}{e}}.$"
        ]
      },
      {
        "name": "Particular plus transient in z",
        "steps": [
          "With $z=\\sin y$ the equation is $z'+z=x$. A particular response to the right side $x$ is $z_p=x-1$ (since $z_p'+z_p=1+(x-1)=x$).",
          "The homogeneous part $z'+z=0$ contributes $Ce^{-x}$, so $z=x-1+Ce^{-x}$.",
          "From $z(0)=\\sin\\tfrac{\\pi}{2}=1$: $-1+C=1\\Rightarrow C=2$, giving $\\sin y=x-1+2e^{-x}$.",
          "Therefore $\\sin y$ at $x=1$ equals $0+2e^{-1}=\\dfrac{2}{e}$: $\\boxed{\\tfrac{2}{e}}.$"
        ]
      }
    ],
    "remark": "**Insight.** A trigonometric ODE can be secretly linear: spotting that $\\cos y\\,y'$ is exactly $\\dfrac{d}{dx}\\sin y$ collapses the equation to $z'+z=x$ in one stroke. The boundary value enters through $z=\\sin y$, not $y$ itself, so the natural unknown to track is $\\sin y$ — which is precisely what the question asks for, sidestepping any need to invert back to $y$."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2026",
    "title": "The tangent cut in ratio $3:1$",
    "difficulty": 3,
    "task": "Decide which statements about the curve are correct.",
    "pyq": {
      "year": 2006,
      "paper": "1",
      "qno": "15"
    },
    "tags": [
      "tangent geometry",
      "first-order ODE",
      "2006"
    ],
    "figure": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" font-size=\"12\"><line x1=\"20\" y1=\"185\" x2=\"305\" y2=\"185\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"/><line x1=\"40\" y1=\"205\" x2=\"40\" y2=\"15\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"/><text x=\"298\" y=\"200\" fill=\"var(--ink2)\">x</text><text x=\"26\" y=\"22\" fill=\"var(--ink2)\">y</text><path d=\"M60 30 C 110 90, 150 150, 290 178\" fill=\"none\" stroke=\"var(--ink2)\" stroke-width=\"1.6\"/><line x1=\"40\" y1=\"40\" x2=\"250\" y2=\"185\" stroke=\"var(--gold)\" stroke-width=\"1.6\"/><circle cx=\"40\" cy=\"40\" r=\"3\" fill=\"var(--gold)\"/><text x=\"14\" y=\"44\" fill=\"var(--ink2)\">B</text><circle cx=\"250\" cy=\"185\" r=\"3\" fill=\"var(--gold)\"/><text x=\"252\" y=\"200\" fill=\"var(--ink2)\">A</text><circle cx=\"197.5\" cy=\"148.75\" r=\"3.5\" fill=\"var(--gold)\"/><text x=\"203\" y=\"146\" fill=\"var(--ink2)\">P(x,y)</text><text x=\"110\" y=\"88\" fill=\"var(--ink2)\">BP</text><text x=\"222\" y=\"172\" fill=\"var(--ink2)\">AP</text></svg>",
    "statement": "A tangent drawn to the curve $y=f(x)$ at $P(x,y)$ cuts the $x$-axis and $y$-axis at $A$ and $B$ respectively such that $BP:AP=3:1$. Given that $f(1)=1$, then\n\n(A) equation of curve is $x\\dfrac{dy}{dx}-3y=0$\n\n(B) normal at $(1,1)$ is $x+3y=4$\n\n(C) curve passes through $\\left(2,\\tfrac18\\right)$\n\n(D) equation of curve is $x\\dfrac{dy}{dx}+3y=0$",
    "answer": "(C), (D)",
    "trap": "Rushing the section-formula ratio. $B$ is the $y$-axis end and $A$ the $x$-axis end, so $P=\\dfrac{3A+B}{4}$ (weight $3$ goes with $A$). Flip the weights and you get $xy'=+3y$ — the plausible-looking option (A) — and the wrong final curve $y=x^3$.",
    "solutions": [
      {
        "name": "Section formula on the intercepts",
        "steps": [
          "The tangent at $P(x,y)$ has slope $y'$. Its $x$-intercept is $A=\\left(x-\\dfrac{y}{y'},\\,0\\right)$ and its $y$-intercept is $B=\\left(0,\\,y-xy'\\right)$.",
          "$P$ lies on segment $BA$ with $BP:PA=3:1$, so $P$ divides $BA$ internally in ratio $3:1$ measured from $B$. By the section formula $P=\\dfrac{3\\,A+1\\,B}{4}$.",
          "Compare $x$-coordinates: $x=\\dfrac{3\\left(x-\\frac{y}{y'}\\right)+0}{4}$, i.e. $4x=3x-\\dfrac{3y}{y'}$, giving $x=-\\dfrac{3y}{y'}$.",
          "Hence $xy'=-3y$, i.e. $x\\dfrac{dy}{dx}+3y=0$ — option (D). (Option (A) is its sign-flipped decoy.)",
          "Separate: $\\dfrac{dy}{y}=-3\\dfrac{dx}{x}\\Rightarrow \\ln y=-3\\ln x+c\\Rightarrow y=\\dfrac{k}{x^{3}}$. Using $f(1)=1$ gives $k=1$, so $y=\\dfrac{1}{x^{3}}$.",
          "Check $(2,\\tfrac18)$: $\\dfrac{1}{2^{3}}=\\dfrac18$ ✓, so (C) holds. The normal at $(1,1)$ has slope $-1/y'(1)$; here $y'=-3x^{-4}$ so $y'(1)=-3$ and the normal slope is $\\tfrac13$, giving $x-3y+2=0$, not $x+3y=4$ — (B) is false.",
          "Correct options: (C) and (D)."
        ]
      },
      {
        "name": "Directly from the two segment lengths",
        "steps": [
          "Write the tangent as $Y-y=y'(X-x)$. The foot on the $x$-axis is $A$ and on the $y$-axis is $B$ as above.",
          "The horizontal run from $B(0,\\cdot)$ to $P(x,\\cdot)$ is $x$; the horizontal run from $P(x,\\cdot)$ to $A\\left(x-\\frac{y}{y'},\\cdot\\right)$ is $\\left|-\\frac{y}{y'}\\right|$. Because the three points are collinear, the ratio $BP:PA$ equals the ratio of these runs.",
          "So $\\dfrac{BP}{PA}=\\dfrac{x}{\\,|y/y'|\\,}=\\dfrac31\\Rightarrow \\left|\\dfrac{y}{y'}\\right|=\\dfrac{x}{3}$.",
          "For a curve falling in the first quadrant $y'<0$, so $\\dfrac{y}{y'}=-\\dfrac{x}{3}$, i.e. $xy'=-3y$ — the same equation $x\\dfrac{dy}{dx}+3y=0$, option (D).",
          "Integrating gives $y=x^{-3}$ after applying $f(1)=1$, which passes through $\\left(2,\\tfrac18\\right)$ — option (C). Answer: (C), (D)."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE 2006, Paper 1, Q15. The whole problem turns on which endpoint carries the weight $3$ in the section formula — get the intercepts right and the separable ODE $xy'+3y=0$ hands you $y=1/x^3$ immediately."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2026",
    "title": "A limit that hides a linear ODE",
    "difficulty": 3,
    "task": "Determine $f(x)$.",
    "pyq": {
      "year": 2007,
      "paper": "1",
      "qno": "48"
    },
    "tags": [
      "first-order linear ODE",
      "limit definition of derivative",
      "initial condition",
      "2007"
    ],
    "figure": "",
    "statement": "Let $f(x)$ be differentiable on the interval $(0,\\infty)$ such that $f(1)=1$, and\n$$\\lim_{t\\to x}\\frac{t^{2}f(x)-x^{2}f(t)}{t-x}=1$$\nfor each $x>0$. Then $f(x)$ is\n\n(A) $\\dfrac{1}{3x}+\\dfrac{2x^{2}}{3}$\n\n(B) $\\dfrac{-1}{3x}+\\dfrac{4x^{2}}{3}$\n\n(C) $\\dfrac{-1}{x}+\\dfrac{2}{x^{2}}$\n\n(D) $\\dfrac{1}{x}$",
    "answer": "(A) $\\dfrac{1}{3x}+\\dfrac{2x^{2}}{3}$",
    "trap": "The numerator does not vanish as $t\\to x$ unless you first spot the hidden $0/0$ setup — it equals $x^2f(x)-x^2f(x)=0$ at $t=x$, so L'Hôpital is legal. Differentiate with respect to $t$ (not $x$): the $t^2f(x)$ term gives $2t\\,f(x)$ and $x^2f(t)$ gives $x^2f'(t)$. Mixing up which variable is the limit variable scrambles every sign.",
    "solutions": [
      {
        "name": "L'Hôpital in $t$ $\\to$ linear ODE",
        "steps": [
          "At $t=x$ the numerator is $x^{2}f(x)-x^{2}f(x)=0$ and the denominator is $0$, so the limit is $\\tfrac00$; apply L'Hôpital differentiating with respect to $t$.",
          "$\\dfrac{d}{dt}\\big[t^{2}f(x)-x^{2}f(t)\\big]=2t\\,f(x)-x^{2}f'(t)$, and $\\dfrac{d}{dt}(t-x)=1$.",
          "Take $t\\to x$: $\\;2x\\,f(x)-x^{2}f'(x)=1$.",
          "Rearrange into standard linear form: $f'(x)-\\dfrac{2}{x}f(x)=-\\dfrac{1}{x^{2}}$.",
          "Integrating factor $\\mu=e^{\\int -\\frac{2}{x}dx}=x^{-2}$. Then $\\dfrac{d}{dx}\\big(x^{-2}f\\big)=-x^{-4}$.",
          "Integrate: $x^{-2}f=\\dfrac{1}{3x^{3}}+c$, so $f(x)=\\dfrac{1}{3x}+c\\,x^{2}$.",
          "Apply $f(1)=1$: $\\dfrac13+c=1\\Rightarrow c=\\dfrac23$. Hence $f(x)=\\dfrac{1}{3x}+\\dfrac{2x^{2}}{3}$ — option (A)."
        ]
      },
      {
        "name": "Recognise the exact derivative $\\dfrac{d}{dx}\\!\\left(\\dfrac{f}{x^2}\\right)$",
        "steps": [
          "From step 3 above the governing relation is $2x\\,f(x)-x^{2}f'(x)=1$.",
          "Divide by $-x^{4}$: $\\dfrac{x^{2}f'(x)-2x\\,f(x)}{x^{4}}=-\\dfrac{1}{x^{4}}$.",
          "The left side is exactly $\\dfrac{d}{dx}\\!\\left(\\dfrac{f(x)}{x^{2}}\\right)$ by the quotient rule.",
          "So $\\dfrac{d}{dx}\\!\\left(\\dfrac{f}{x^{2}}\\right)=-x^{-4}$, and integrating gives $\\dfrac{f}{x^{2}}=\\dfrac{1}{3x^{3}}+c$.",
          "Thus $f(x)=\\dfrac{1}{3x}+c\\,x^{2}$; the condition $f(1)=1$ forces $c=\\tfrac23$, giving $f(x)=\\dfrac{1}{3x}+\\dfrac{2x^{2}}{3}$ — option (A). A quick sanity check on the options: only (A) satisfies $f(1)=1$ AND the relation $2x f-x^2f'=1$."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE 2007, Paper 1, Q48. A textbook trap: the difference quotient is really the derivative $\\dfrac{d}{dt}\\big[t^2f(x)-x^2f(t)\\big]$ at $t=x$, and clearing the algebra exposes a first-order linear ODE with integrating factor $x^{-2}$."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2026",
    "title": "A Slope That Draws Circles",
    "difficulty": 2,
    "task": "Identify the family of curves.",
    "pyq": {
      "year": 2007,
      "paper": "2",
      "qno": "52"
    },
    "tags": [
      "variables separable",
      "family of circles",
      "first-order ODE",
      "2007"
    ],
    "figure": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" font-size=\"12\"><line x1=\"20\" y1=\"150\" x2=\"300\" y2=\"150\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"/><line x1=\"110\" y1=\"20\" x2=\"110\" y2=\"200\" stroke=\"var(--ink2)\" stroke-width=\"1\" stroke-dasharray=\"3 3\"/><text x=\"294\" y=\"165\" fill=\"var(--ink2)\">x</text><circle cx=\"110\" cy=\"110\" r=\"40\" fill=\"none\" stroke=\"var(--ink2)\" stroke-width=\"1\"/><circle cx=\"170\" cy=\"110\" r=\"40\" fill=\"none\" stroke=\"var(--gold)\" stroke-width=\"1.6\"/><circle cx=\"230\" cy=\"110\" r=\"40\" fill=\"none\" stroke=\"var(--ink2)\" stroke-width=\"1\"/><circle cx=\"170\" cy=\"110\" r=\"2.2\" fill=\"var(--gold)\"/><line x1=\"170\" y1=\"110\" x2=\"210\" y2=\"110\" stroke=\"var(--gold)\" stroke-width=\"1.2\"/><text x=\"184\" y=\"104\" fill=\"var(--ink2)\">1</text><text x=\"150\" y=\"178\" fill=\"var(--ink2)\">centres on x-axis</text></svg>",
    "statement": "The differential equation $$\\frac{dy}{dx}=\\frac{\\sqrt{1-y^{2}}}{y}$$ determines a family of circles with\n\n(A) variable radii and a fixed centre at $(0,1)$\n\n(B) variable radii and a fixed centre at $(0,-1)$\n\n(C) fixed radius $1$ and variable centres along the $x$-axis\n\n(D) fixed radius $1$ and variable centres along the $y$-axis",
    "answer": "(C)",
    "trap": "The word ‘family’ tempts you to expect variable radii — but here the arbitrary constant enters as the centre’s $x$-coordinate, not the radius. Reading $\\frac{dy}{dx}$ as slope of a circle also misleads: separating variables is the only clean route, and forgetting the $\\pm$ from $\\sqrt{1-y^{2}}$ is harmless because squaring restores the full circle.",
    "solutions": [
      {
        "name": "Separate variables and integrate",
        "steps": [
          "The equation is variable-separable. Cross-multiply: $$\\frac{y\\,dy}{\\sqrt{1-y^{2}}}=dx.$$",
          "Integrate the left side with the substitution $u=1-y^{2}$, $du=-2y\\,dy$, so $\\frac{y\\,dy}{\\sqrt{1-y^{2}}}=-d\\!\\left(\\sqrt{1-y^{2}}\\right)$.",
          "Hence $-\\sqrt{1-y^{2}}=x+c$, where $c$ is the constant of integration.",
          "Square both sides: $1-y^{2}=(x+c)^{2}$, i.e. $(x+c)^{2}+y^{2}=1$.",
          "This is a circle of radius $1$ centred at $(-c,0)$. As $c$ ranges over $\\mathbb{R}$ the centre slides along the $x$-axis while the radius stays $1$. Answer: (C)."
        ]
      },
      {
        "name": "Reverse-engineer from the standard circle",
        "steps": [
          "Test the candidate answer (C) directly: the family it names is $(x-h)^{2}+y^{2}=1$, circles of radius $1$ with centre $(h,0)$ on the $x$-axis.",
          "Differentiate implicitly with respect to $x$: $2(x-h)+2y\\dfrac{dy}{dx}=0$, so $x-h=-y\\dfrac{dy}{dx}$.",
          "Substitute back into the circle equation to eliminate the parameter $h$: $\\left(y\\dfrac{dy}{dx}\\right)^{2}+y^{2}=1$, giving $\\left(\\dfrac{dy}{dx}\\right)^{2}=\\dfrac{1-y^{2}}{y^{2}}$.",
          "Taking the positive root reproduces exactly $\\dfrac{dy}{dx}=\\dfrac{\\sqrt{1-y^{2}}}{y}$, the given equation.",
          "So the only family with no free radius but a free centre on the $x$-axis satisfies the ODE. The other options fail: options (A),(B) fix a centre and vary the radius, which cannot match a first-order equation with a single arbitrary constant governing translation. Answer: (C)."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE 2007, Paper 2, Q52. A first-order ODE carries exactly one arbitrary constant, so the geometric family it defines has exactly one degree of freedom — here that freedom is horizontal translation, not radius."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2026",
    "title": "Two Statements, One $\\sec^{-1}$",
    "difficulty": 3,
    "task": "Judge both statements.",
    "pyq": {
      "year": 2008,
      "paper": "2",
      "qno": "13"
    },
    "tags": [
      "variable separable",
      "inverse trig",
      "first-order ODE",
      "2008"
    ],
    "figure": "",
    "statement": "Let a solution $y=y(x)$ of the differential equation $$x\\sqrt{x^{2}-1}\\,dy-y\\sqrt{y^{2}-1}\\,dx=0$$ satisfy $y(2)=\\dfrac{2}{\\sqrt{3}}$.\n\nSTATEMENT-1: $\\;y(x)=\\sec\\!\\left(\\sec^{-1}x-\\dfrac{\\pi}{6}\\right)$.\n\nSTATEMENT-2: $\\;y(x)$ is given by $\\dfrac{1}{y}=\\dfrac{2\\sqrt{3}}{x}-\\sqrt{1-\\dfrac{1}{x^{2}}}$.\n\n(A) STATEMENT-1 is True, STATEMENT-2 is True; STATEMENT-2 is a correct explanation for STATEMENT-1\n\n(B) STATEMENT-1 is True, STATEMENT-2 is True; STATEMENT-2 is NOT a correct explanation for STATEMENT-1\n\n(C) STATEMENT-1 is True, STATEMENT-2 is False\n\n(D) STATEMENT-1 is False, STATEMENT-2 is True",
    "answer": "(C)",
    "trap": "Statement-2 looks like a faithful ‘expansion’ of Statement-1, so a hurried student marks (A). But when you actually expand $\\sec\\!\\left(\\sec^{-1}x-\\tfrac{\\pi}{6}\\right)$ the coefficient of the surd is $+\\tfrac12$, not the $-1$ that Statement-2 shows, and the constant term is $\\tfrac{\\sqrt3}{2x}$, not $\\tfrac{2\\sqrt3}{x}$. Statement-1 is genuinely correct; Statement-2 is a decoy that fails the very algebra it claims to perform.",
    "solutions": [
      {
        "name": "Separate variables using the $\\sec^{-1}$ integral",
        "steps": [
          "Separate: $$\\frac{dy}{y\\sqrt{y^{2}-1}}=\\frac{dx}{x\\sqrt{x^{2}-1}}.$$",
          "Both sides are the standard form $\\dfrac{dt}{t\\sqrt{t^{2}-1}}=d\\!\\left(\\sec^{-1}t\\right)$, so integrating gives $\\sec^{-1}y=\\sec^{-1}x+c$.",
          "Apply $y(2)=\\tfrac{2}{\\sqrt3}$: then $\\sec^{-1}\\tfrac{2}{\\sqrt3}=\\sec^{-1}2+c$. Since $\\sec^{-1}2=\\tfrac{\\pi}{3}$ and $\\sec^{-1}\\tfrac{2}{\\sqrt3}=\\cos^{-1}\\tfrac{\\sqrt3}{2}=\\tfrac{\\pi}{6}$, we get $\\tfrac{\\pi}{6}=\\tfrac{\\pi}{3}+c$, so $c=-\\tfrac{\\pi}{6}$.",
          "Therefore $\\sec^{-1}y=\\sec^{-1}x-\\tfrac{\\pi}{6}$, i.e. $y=\\sec\\!\\left(\\sec^{-1}x-\\tfrac{\\pi}{6}\\right)$. **Statement-1 is TRUE.**",
          "Now expand it. Write $\\theta=\\sec^{-1}x$, so $\\cos\\theta=\\tfrac1x$ and $\\sin\\theta=\\sqrt{1-\\tfrac{1}{x^{2}}}$. Then $$\\frac1y=\\cos\\!\\left(\\theta-\\tfrac{\\pi}{6}\\right)=\\cos\\theta\\cos\\tfrac{\\pi}{6}+\\sin\\theta\\sin\\tfrac{\\pi}{6}=\\frac{\\sqrt3}{2x}+\\frac12\\sqrt{1-\\tfrac{1}{x^{2}}}.$$",
          "Compare with Statement-2, which asserts $\\tfrac1y=\\tfrac{2\\sqrt3}{x}-\\sqrt{1-\\tfrac{1}{x^{2}}}$. The constant term ($\\tfrac{\\sqrt3}{2x}$ vs $\\tfrac{2\\sqrt3}{x}$) and the surd coefficient ($+\\tfrac12$ vs $-1$) both disagree. **Statement-2 is FALSE.** Hence (C)."
        ]
      },
      {
        "name": "Numerical spot-check at a second point",
        "steps": [
          "Take the correct solution $\\sec^{-1}y=\\sec^{-1}x-\\tfrac{\\pi}{6}$ (established above) and evaluate at a fresh value, $x=\\sqrt2$.",
          "There $\\sec^{-1}\\sqrt2=\\tfrac{\\pi}{4}$, so $\\sec^{-1}y=\\tfrac{\\pi}{4}-\\tfrac{\\pi}{6}=\\tfrac{\\pi}{12}$, giving $\\dfrac1y=\\cos\\tfrac{\\pi}{12}=\\dfrac{\\sqrt6+\\sqrt2}{4}\\approx0.9659$.",
          "Test Statement-2 at $x=\\sqrt2$: $\\dfrac{2\\sqrt3}{\\sqrt2}-\\sqrt{1-\\tfrac12}=\\sqrt6-\\tfrac{1}{\\sqrt2}\\approx2.449-0.707=1.742$.",
          "Since $1.742\\neq0.9659$, Statement-2 gives the wrong value even though Statement-1 is exact — a single counterexample kills it.",
          "So Statement-1 True, Statement-2 False: answer (C)."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE 2008, Paper 2, Q13. Recognising $\\tfrac{dt}{t\\sqrt{t^{2}-1}}=d(\\sec^{-1}t)$ turns the ODE into pure inverse-trig arithmetic; the assertion-reason twist is that the ‘reason’ is a mis-expanded decoy, so verify Statement-2 by actually running the $\\cos(\\theta-\\tfrac{\\pi}{6})$ expansion rather than trusting its form."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2026",
    "title": "The arc-length trap: $\\sqrt{1-(f')^2}=f$",
    "difficulty": 3,
    "task": "Decide the sign of $f(\\tfrac12)-\\tfrac12$ and $f(\\tfrac13)-\\tfrac13$.",
    "pyq": {
      "year": 2009,
      "paper": "1",
      "qno": "24"
    },
    "tags": [
      "fundamental theorem of calculus",
      "variables separable",
      "inequality sin x < x",
      "2009"
    ],
    "figure": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" font-size=\"12\"><line x1=\"30\" y1=\"185\" x2=\"300\" y2=\"185\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"/><line x1=\"30\" y1=\"185\" x2=\"30\" y2=\"20\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"/><text x=\"303\" y=\"189\" fill=\"var(--ink2)\">x</text><text x=\"20\" y=\"20\" fill=\"var(--ink2)\">y</text><path d=\"M30 185 Q 100 55 185 40\" fill=\"none\" stroke=\"var(--gold)\" stroke-width=\"2\"/><line x1=\"30\" y1=\"185\" x2=\"185\" y2=\"40\" stroke=\"var(--ink2)\" stroke-width=\"1\" stroke-dasharray=\"4 3\"/><text x=\"120\" y=\"110\" fill=\"var(--ink2)\">y=x</text><text x=\"150\" y=\"70\" fill=\"var(--gold)\">y=sin x</text><line x1=\"110\" y1=\"185\" x2=\"110\" y2=\"98\" stroke=\"var(--ink2)\" stroke-width=\"0.8\" stroke-dasharray=\"2 2\"/><circle cx=\"110\" cy=\"98\" r=\"2.5\" fill=\"var(--gold)\"/><text x=\"98\" y=\"200\" fill=\"var(--ink2)\">x&gt;0</text><text x=\"120\" y=\"150\" fill=\"var(--ink2)\">sin x &lt; x</text></svg>",
    "statement": "Let $f$ be a non-negative function defined on the interval $[0,1]$. If $$\\int_0^x \\sqrt{1-\\left(f'(t)\\right)^2}\\,dt=\\int_0^x f(t)\\,dt,\\qquad 0\\le x\\le 1,$$ and $f(0)=0$, then\n\n(A) $f\\!\\left(\\tfrac12\\right)<\\tfrac12$ and $f\\!\\left(\\tfrac13\\right)>\\tfrac13$\n\n(B) $f\\!\\left(\\tfrac12\\right)>\\tfrac12$ and $f\\!\\left(\\tfrac13\\right)>\\tfrac13$\n\n(C) $f\\!\\left(\\tfrac12\\right)<\\tfrac12$ and $f\\!\\left(\\tfrac13\\right)<\\tfrac13$\n\n(D) $f\\!\\left(\\tfrac12\\right)>\\tfrac12$ and $f\\!\\left(\\tfrac13\\right)<\\tfrac13$",
    "answer": "(C)",
    "trap": "The differentiated equation $\\sqrt{1-(f')^2}=f$ has TWO branches, $f'=\\pm\\sqrt{1-f^2}$, and it also admits the constant solution $f\\equiv 1$ (which fails $f(0)=0$). The trap is grabbing $f=\\sin x$ without checking that non-negativity plus $f(0)=0$ actually pins down $f'=+\\sqrt{1-f^2}$ on the relevant interval — and then forgetting the clean inequality $\\sin x<x$ that decides both parts at once.",
    "solutions": [
      {
        "name": "Differentiate the integral equation, then separate",
        "steps": [
          "Both sides are integrals from $0$ to $x$ of continuous integrands, so by the Fundamental Theorem of Calculus we differentiate with respect to $x$: $\\sqrt{1-\\left(f'(x)\\right)^2}=f(x)$.",
          "Square (both sides are $\\ge 0$ since $f\\ge 0$): $1-\\left(f'(x)\\right)^2=f(x)^2$, i.e. $\\left(f'(x)\\right)^2=1-f(x)^2$.",
          "Write $y=f(x)$. Then $\\dfrac{dy}{dx}=\\pm\\sqrt{1-y^2}$. Near $x=0$ we have $y=f(0)=0$ and $f$ non-negative, so $y$ must rise from $0$; take the $+$ branch: $\\dfrac{dy}{\\sqrt{1-y^2}}=dx$.",
          "Integrate: $\\sin^{-1}y=x+C$. The condition $f(0)=0$ gives $\\sin^{-1}0=C$, so $C=0$ and $y=\\sin x$, i.e. $f(x)=\\sin x$ on $[0,1]$.",
          "For $x>0$ the standard inequality $\\sin x<x$ holds, so $f(x)<x$ for every $x\\in(0,1]$.",
          "Hence $f\\!\\left(\\tfrac12\\right)=\\sin\\tfrac12<\\tfrac12$ and $f\\!\\left(\\tfrac13\\right)=\\sin\\tfrac13<\\tfrac13$. Both are less, so the answer is (C)."
        ]
      },
      {
        "name": "Geometric arc-length reading (no explicit solve)",
        "steps": [
          "The left integrand $\\sqrt{1-\\left(f'\\right)^2}$ can be read against $\\sqrt{1+\\left(f'\\right)^2}$ (arc length): here $\\sqrt{1-(f')^2}\\le 1$, and equals $f$, so $0\\le f(x)\\le 1$ automatically — $f$ never exceeds $1$.",
          "Differentiating gives $\\sqrt{1-(f')^2}=f\\le 1$, so $|f'(x)|=\\sqrt{1-f(x)^2}\\le 1$ for all $x$; the graph of $f$ has slope of magnitude at most $1$.",
          "Since $f(0)=0$ and $|f'|\\le 1$, the Mean Value Theorem gives $f(x)=f(x)-f(0)=f'(\\xi)\\,x\\le |f'(\\xi)|\\,x\\le x$ for each $x\\in(0,1]$.",
          "Equality $f(x)=x$ would force $|f'|\\equiv 1$ on $(0,x)$, hence $f\\equiv 0$ there (from $\\sqrt{1-1}=f$), contradicting a rising $f$. So the inequality is strict: $f(x)<x$ for $x>0$.",
          "Therefore $f\\!\\left(\\tfrac12\\right)<\\tfrac12$ and $f\\!\\left(\\tfrac13\\right)<\\tfrac13$ without ever writing $f=\\sin x$ — the answer is (C).",
          "(Solving explicitly confirms $f=\\sin x$, consistent with $\\sin x<x$.)"
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE 2009, Paper 1, Q24. The integral equation is a disguised separable ODE, but the winning move is spotting that $|f'|\\le 1$ with $f(0)=0$ forces $f(x)<x$ — the closed form $f=\\sin x$ is optional."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2026",
    "title": "When $y'=y$ collapses to zero",
    "difficulty": 2,
    "task": "Evaluate $f(\\ln 5)$.",
    "pyq": {
      "year": 2009,
      "paper": "2",
      "qno": "34"
    },
    "tags": [
      "fundamental theorem of calculus",
      "integral equation",
      "y'=y",
      "2009"
    ],
    "figure": "",
    "statement": "Let $f:\\mathbb{R}\\to\\mathbb{R}$ be a continuous function which satisfies $$f(x)=\\int_0^x f(t)\\,dt.$$ Then the value of $f(\\ln 5)$ is $\\underline{\\hphantom{000}}$.",
    "answer": "$\\boxed{0}$",
    "trap": "After differentiating you get $f'=f$, whose general solution is $f(x)=ke^{x}$ — and it is tempting to plug $x=\\ln 5$ to report $5k$ as if $k$ were free. But the ORIGINAL equation carries a hidden initial condition: setting $x=0$ gives $f(0)=\\int_0^0 f=0$, which kills $k$. The exponential family is a red herring; the only continuous solution is $f\\equiv 0$.",
    "solutions": [
      {
        "name": "Differentiate, then use the built-in initial value",
        "steps": [
          "The right side $\\int_0^x f(t)\\,dt$ is an accumulation function of the continuous $f$, so by the Fundamental Theorem of Calculus it is differentiable with derivative $f(x)$.",
          "Differentiate both sides of $f(x)=\\int_0^x f(t)\\,dt$: $f'(x)=f(x)$ for all $x$.",
          "This is the linear ODE $\\dfrac{dy}{dx}=y$, whose general solution is $f(x)=ke^{x}$.",
          "Recover the initial condition from the ORIGINAL equation by putting $x=0$: $f(0)=\\int_0^0 f(t)\\,dt=0$.",
          "But $f(0)=ke^{0}=k$, so $k=0$. Hence $f(x)\\equiv 0$ for all $x$.",
          "Therefore $f(\\ln 5)=0$."
        ]
      },
      {
        "name": "Integrating factor / Grönwall-style bound (no guessing the family)",
        "steps": [
          "Rewrite the differentiated relation $f'(x)-f(x)=0$ and multiply by the integrating factor $e^{-x}$: $\\dfrac{d}{dx}\\!\\left(e^{-x}f(x)\\right)=e^{-x}\\left(f'(x)-f(x)\\right)=0$.",
          "So $e^{-x}f(x)=C$, a constant, i.e. $f(x)=Ce^{x}$.",
          "Evaluate the original integral equation at $x=0$: the integral over $[0,0]$ is $0$, forcing $f(0)=0$, hence $C=0$.",
          "Alternatively, argue directly from the integral form: let $M=\\max_{[0,L]}|f|$ on any $[0,L]$. Then $|f(x)|=\\left|\\int_0^x f\\right|\\le M\\,|x|$, and iterating gives $|f(x)|\\le M\\dfrac{|x|^{n}}{n!}\\to 0$, so $f\\equiv 0$ on every bounded interval.",
          "Either route gives $f\\equiv 0$, so in particular $f(\\ln 5)=0$."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE 2009, Paper 2, Q34. A Volterra integral equation of the form $f(x)=\\int_0^x f$ silently encodes $f(0)=0$; that single evaluation collapses the whole $ke^{x}$ family to the trivial solution."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2026",
    "title": "The tangent whose $y$-intercept is $x^3$",
    "difficulty": 3,
    "task": "Find $f(-3)$.",
    "pyq": {
      "year": 2010,
      "paper": "1",
      "qno": "56"
    },
    "tags": [
      "first-order linear ODE",
      "tangent y-intercept",
      "initial value problem",
      "2010"
    ],
    "figure": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" font-size=\"12\"><line x1=\"20\" y1=\"180\" x2=\"300\" y2=\"180\" stroke=\"var(--ink3)\"/><line x1=\"70\" y1=\"200\" x2=\"70\" y2=\"20\" stroke=\"var(--ink3)\"/><text x=\"302\" y=\"184\" fill=\"var(--ink2)\">x</text><text x=\"60\" y=\"22\" fill=\"var(--ink2)\">y</text><path d=\"M 80 168 Q 150 60 210 40\" fill=\"none\" stroke=\"var(--ink2)\" stroke-width=\"1.5\"/><text x=\"196\" y=\"36\" fill=\"var(--ink2)\">y=f(x)</text><line x1=\"70\" y1=\"150\" x2=\"245\" y2=\"20\" stroke=\"var(--gold)\" stroke-width=\"1.5\"/><circle cx=\"170\" cy=\"78\" r=\"3\" fill=\"var(--gold)\"/><text x=\"176\" y=\"74\" fill=\"var(--ink2)\">P(x,y)</text><circle cx=\"70\" cy=\"150\" r=\"3\" fill=\"var(--gold)\"/><text x=\"18\" y=\"148\" fill=\"var(--ink2)\">(0, x³)</text><line x1=\"70\" y1=\"150\" x2=\"70\" y2=\"180\" stroke=\"var(--gold)\" stroke-width=\"2.5\"/><text x=\"74\" y=\"168\" fill=\"var(--gold)\">x³</text></svg>",
    "statement": "Let $f$ be a real-valued differentiable function on $\\mathbb{R}$ such that $f(1)=1$. If the $y$-intercept of the tangent at any point $P(x,y)$ on the curve $y=f(x)$ is equal to the cube of the abscissa of $P$, then the value of $f(-3)$ is equal to",
    "answer": "$\\boxed{9}$",
    "trap": "The $y$-intercept of the tangent is $y-x\\,y'$, NOT $y$ itself. Students who write $y=x^3$ (reading 'the curve's $y$ equals $x^3$') skip the tangent entirely and never form an ODE. The whole problem lives in that intercept expression.",
    "solutions": [
      {
        "name": "Tangent intercept $\\to$ linear ODE",
        "steps": [
          "The tangent at $P(x,y)$ is $Y-y=y'(X-x)$.",
          "Its $y$-intercept is found by setting $X=0$: $Y=y-x\\,y'$.",
          "The condition 'y-intercept equals the cube of the abscissa' reads $y-x\\,y'=x^3$.",
          "Rearrange into standard linear form: $y'-\\dfrac{y}{x}=-x^2$.",
          "Integrating factor: $\\mu=e^{\\int(-1/x)\\,dx}=e^{-\\ln x}=\\dfrac{1}{x}$.",
          "Multiply through: $\\dfrac{d}{dx}\\!\\left(\\dfrac{y}{x}\\right)=-x$, so $\\dfrac{y}{x}=-\\dfrac{x^2}{2}+c$.",
          "Apply $f(1)=1$: $1=-\\dfrac12+c\\Rightarrow c=\\dfrac32$. Hence $f(x)=\\dfrac{3x}{2}-\\dfrac{x^3}{2}$.",
          "Therefore $f(-3)=\\dfrac{-9}{2}-\\dfrac{-27}{2}=\\dfrac{-9+27}{2}=9$."
        ]
      },
      {
        "name": "Recognising the $(y/x)'$ structure directly",
        "steps": [
          "From $y-x\\,y'=x^3$, divide by $-x^2$ (valid for $x\\neq0$): $\\dfrac{x\\,y'-y}{x^2}=-x$.",
          "The left side is exactly the quotient derivative $\\dfrac{d}{dx}\\!\\left(\\dfrac{y}{x}\\right)$ — no integrating factor needed.",
          "Integrate both sides: $\\dfrac{y}{x}=-\\dfrac{x^2}{2}+c$.",
          "Use $f(1)=1$: $1=-\\dfrac12+c\\Rightarrow c=\\dfrac32$, so $y=\\dfrac{3x}{2}-\\dfrac{x^3}{2}$.",
          "The cubic $f$ is odd-plus-nothing about the transformation $x\\mapsto-x$? Check: $f(-x)=-\\dfrac{3x}{2}+\\dfrac{x^3}{2}=-f(x)$, so $f$ is odd.",
          "Thus $f(-3)=-f(3)=-\\left(\\dfrac{9}{2}-\\dfrac{27}{2}\\right)=-(-9)=9$."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE / JEE Advanced 2010, Paper 1, Q56. The step $x y'-y$ over $x^2$ is a quotient-rule derivative in disguise — spotting it turns a linear ODE into a one-line integration."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2026",
    "title": "Differentiate the integral: $6\\!\\int_1^x f=3xf-x^3$",
    "difficulty": 3,
    "task": "Find $f(2)$.",
    "pyq": {
      "year": 2011,
      "paper": "1",
      "qno": "65"
    },
    "tags": [
      "Leibniz differentiation of integral",
      "linear first-order ODE",
      "initial value",
      "2011"
    ],
    "figure": "",
    "statement": "Let $f:[1,\\infty)\\to[2,\\infty)$ be a differentiable function such that $f(1)=2$. If $6\\displaystyle\\int_{1}^{x}f(t)\\,dt=3x\\,f(x)-x^{3}$ for all $x\\ge 1$, then the value of $f(2)$ is",
    "answer": "$\\boxed{6}$",
    "trap": "You must differentiate BOTH sides — the right side $3x f(x)$ needs the product rule ($3f+3xf'$), and $\\frac{d}{dx}\\!\\int_1^x f\\,dt=f(x)$ by the FTC. Forgetting the product rule (writing $6f=3xf'-3x^2$) drops the $3f$ term and derails the ODE. Also, do NOT try to solve the integral equation as-is; differentiating converts it into a clean ODE.",
    "solutions": [
      {
        "name": "Differentiate, then linear ODE with $\\mu=1/x$",
        "steps": [
          "Differentiate both sides w.r.t. $x$. By the Fundamental Theorem, $\\dfrac{d}{dx}\\!\\int_1^x f(t)\\,dt=f(x)$; on the right use the product rule.",
          "$6f(x)=3f(x)+3x\\,f'(x)-3x^2$.",
          "Simplify: $3x\\,f'(x)-3f(x)=3x^2$, i.e. $x\\,f'(x)-f(x)=x^2$.",
          "Divide by $x$: $f'(x)-\\dfrac{f(x)}{x}=x$ — a first-order linear ODE.",
          "Integrating factor $\\mu=e^{\\int(-1/x)dx}=\\dfrac1x$, so $\\dfrac{d}{dx}\\!\\left(\\dfrac{f}{x}\\right)=1$.",
          "Integrate: $\\dfrac{f(x)}{x}=x+c\\Rightarrow f(x)=x^2+cx$.",
          "Apply $f(1)=2$: $2=1+c\\Rightarrow c=1$, so $f(x)=x^2+x$.",
          "Therefore $f(2)=4+2=6$."
        ]
      },
      {
        "name": "Assume a polynomial ansatz, then verify by the ODE",
        "steps": [
          "The relation $x f'-f=x^2$ is homogeneous-degree balanced: try $f(x)=ax^2+bx$ (a quadratic with no constant term, since $f/x$ must be differentiable and integrable cleanly).",
          "Then $f'(x)=2ax+b$, so $x f'-f=(2ax^2+bx)-(ax^2+bx)=ax^2$.",
          "Match with the required $x^2$: $a=1$. The $bx$ term is annihilated by $xf'-f$, so $b$ is fixed only by the initial data.",
          "Thus $f(x)=x^2+bx$; impose $f(1)=2$: $1+b=2\\Rightarrow b=1$.",
          "So $f(x)=x^2+x$, giving $f(2)=6$.",
          "Range check: for $x\\ge1$, $f(x)=x^2+x\\ge2$, consistent with the stated codomain $[2,\\infty)$."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE / JEE Advanced 2011, Paper 1, Q65. A textbook 'differentiate the integral equation' problem — the product rule on $3xf(x)$ is where careless solvers lose the crucial $3f$ term."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2026",
    "title": "The vanishing endpoints of $g$",
    "difficulty": 4,
    "task": "Find the value of $y(2)$.",
    "pyq": {
      "year": 2011,
      "paper": "2",
      "qno": "37"
    },
    "tags": [
      "linear first-order ODE",
      "integrating factor",
      "2011"
    ],
    "figure": "",
    "statement": "Let $y'(x)+y(x)\\,g'(x)=g(x)\\,g'(x)$, $y(0)=0$, $x\\in\\mathbb{R}$, where $f'(x)$ denotes $\\dfrac{d f(x)}{dx}$ and $g(x)$ is a given non-constant differentiable function on $\\mathbb{R}$ with $g(0)=g(2)=0$. Then the value of $y(2)$ is",
    "answer": "$\\boxed{0}$",
    "trap": "The temptation is to solve for $g$ or to assume the answer depends on the shape of $g$ between $0$ and $2$. It does not: the integrating factor is $e^{g(x)}$ (not $e^{\\int g'\\,dx}$ with $g$ treated as the variable), and the closed form $y=(g-1)+ce^{-g}$ depends on $x$ only through $g(x)$. Since $g(2)=g(0)=0$, the answer is forced to equal $y(0)=0$ regardless of what $g$ does in between.",
    "solutions": [
      {
        "name": "Integrating factor $e^{g(x)}$",
        "steps": [
          "The equation is linear in $y$: $\\dfrac{dy}{dx}+g'(x)\\,y=g(x)\\,g'(x)$, with coefficient $P(x)=g'(x)$.",
          "Integrating factor: $\\mu=e^{\\int g'(x)\\,dx}=e^{g(x)}$.",
          "Multiply through: $\\dfrac{d}{dx}\\big(e^{g}\\,y\\big)=e^{g}\\,g\\,g'$.",
          "Integrate the right side by parts (let $u=g$, $dv=e^{g}g'\\,dx$, so $v=e^{g}$): $\\displaystyle\\int e^{g}g\\,g'\\,dx=g\\,e^{g}-\\int e^{g}g'\\,dx=g\\,e^{g}-e^{g}=e^{g}(g-1).$",
          "Hence $e^{g}y=e^{g}(g-1)+c$, i.e. $y=(g-1)+c\\,e^{-g}$.",
          "Apply $y(0)=0$ with $g(0)=0$: $0=(0-1)+c\\cdot e^{0}=-1+c$, so $c=1$ and $y=(g-1)+e^{-g}$.",
          "At $x=2$, $g(2)=0$: $y(2)=(0-1)+e^{0}=-1+1=0.$"
        ]
      },
      {
        "name": "Substitution $u=e^{g(x)}$ (reduce to a plain integral)",
        "steps": [
          "Let $u=e^{g(x)}$, so $\\dfrac{du}{dx}=g'(x)e^{g(x)}=g'(x)\\,u$; this is exactly the combination that appears once we multiply by the integrating factor.",
          "Writing the ODE as $\\dfrac{d}{dx}\\big(e^{g}y\\big)=g\\,g'\\,e^{g}$ and noting $g=\\ln u$, $g'e^{g}\\,dx=du$, the right side becomes $\\ln u\\;du$.",
          "So $e^{g}y=\\displaystyle\\int \\ln u\\,du=u\\ln u-u+c=e^{g}g-e^{g}+c$, giving $y=g-1+c\\,e^{-g}$ — the same closed form.",
          "The value of $y$ at any point depends on $x$ only through $g(x)$; since $g(2)=g(0)=0$, the state at $x=2$ is identical to the state at $x=0$.",
          "Therefore $y(2)=y(0)=0$, with no need to know $g$ on the open interval $(0,2)$."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE / JEE Advanced 2011, Paper 2, Q37. The whole problem collapses once you see the left side is $\\tfrac{d}{dx}(e^{g}y)$: because the solution is a function of $g$ alone, the two equal endpoint values $g(0)=g(2)=0$ pin $y(2)=y(0)=0$."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2026",
    "title": "$y'-y\\tan x=2x\\sec x$",
    "difficulty": 3,
    "task": "Decide which options are correct.",
    "pyq": {
      "year": 2012,
      "paper": "1",
      "qno": "55"
    },
    "tags": [
      "linear first-order ODE",
      "integrating factor",
      "initial value",
      "2012"
    ],
    "figure": "",
    "statement": "If $y(x)$ satisfies the differential equation $y'-y\\tan x=2x\\sec x$ and $y(0)=0$, then\n\n(A) $y\\left(\\dfrac{\\pi}{4}\\right)=\\dfrac{\\pi^2}{8\\sqrt{2}}$\n\n(B) $y'\\left(\\dfrac{\\pi}{4}\\right)=\\dfrac{\\pi^2}{18}$\n\n(C) $y\\left(\\dfrac{\\pi}{3}\\right)=\\dfrac{\\pi^2}{9}$\n\n(D) $y'\\left(\\dfrac{\\pi}{3}\\right)=\\dfrac{4\\pi}{3}+\\dfrac{2\\pi^2}{3\\sqrt{3}}$",
    "answer": "(A), (D)",
    "trap": "Two traps. First, when checking $y'$ at a point, do not re-solve — use the ODE itself: $y'=y\\tan x+2x\\sec x$, which is the fastest, error-proof route. Second, the integrating factor is $e^{-\\int\\tan x\\,dx}=e^{\\ln\\cos x}=\\cos x$ (the minus sign cancels the minus inside $\\int\\tan x$); a sign slip here gives $\\sec x$ and wrecks every option.",
    "solutions": [
      {
        "name": "Integrating factor $\\cos x$, then test each option",
        "steps": [
          "Standard linear form: $\\dfrac{dy}{dx}+P(x)y=Q(x)$ with $P=-\\tan x$, $Q=2x\\sec x$.",
          "Integrating factor: $\\mu=e^{\\int P\\,dx}=e^{-\\int\\tan x\\,dx}=e^{\\ln|\\cos x|}=\\cos x$.",
          "Multiply through: $\\dfrac{d}{dx}(y\\cos x)=2x\\sec x\\cdot\\cos x=2x$.",
          "Integrate: $y\\cos x=x^2+C$. Apply $y(0)=0$: $0=0+C$, so $C=0$ and $y=x^2\\sec x$.",
          "(A) $y(\\pi/4)=\\dfrac{\\pi^2}{16}\\sec\\dfrac{\\pi}{4}=\\dfrac{\\pi^2}{16}\\cdot\\sqrt2=\\dfrac{\\pi^2}{8\\sqrt2}$ — TRUE.",
          "(C) $y(\\pi/3)=\\dfrac{\\pi^2}{9}\\sec\\dfrac{\\pi}{3}=\\dfrac{\\pi^2}{9}\\cdot 2=\\dfrac{2\\pi^2}{9}\\ne\\dfrac{\\pi^2}{9}$ — FALSE.",
          "Differentiate: $y'=2x\\sec x+x^2\\sec x\\tan x$.",
          "(B) $y'(\\pi/4)=2\\cdot\\dfrac{\\pi}{4}\\cdot\\sqrt2+\\dfrac{\\pi^2}{16}\\cdot\\sqrt2\\cdot1=\\dfrac{\\pi\\sqrt2}{2}+\\dfrac{\\pi^2\\sqrt2}{16}\\ne\\dfrac{\\pi^2}{18}$ — FALSE.",
          "(D) $y'(\\pi/3)=2\\cdot\\dfrac{\\pi}{3}\\cdot 2+\\dfrac{\\pi^2}{9}\\cdot 2\\cdot\\sqrt3=\\dfrac{4\\pi}{3}+\\dfrac{2\\sqrt3\\,\\pi^2}{9}=\\dfrac{4\\pi}{3}+\\dfrac{2\\pi^2}{3\\sqrt3}$ — TRUE.",
          "Hence the correct options are (A) and (D)."
        ]
      },
      {
        "name": "Recognise the exact-derivative structure directly",
        "steps": [
          "Guess that the RHS hints at a product rule: try to write the equation as $\\dfrac{d}{dx}(y\\cos x)=$ something clean.",
          "Compute $\\dfrac{d}{dx}(y\\cos x)=y'\\cos x-y\\sin x=\\cos x\\,(y'-y\\tan x)$.",
          "But $y'-y\\tan x=2x\\sec x$ by hypothesis, so $\\dfrac{d}{dx}(y\\cos x)=\\cos x\\cdot 2x\\sec x=2x$ — no integrating-factor computation needed, the structure is already exact after multiplying by $\\cos x$.",
          "Integrate: $y\\cos x=x^2+C$; $y(0)=0\\Rightarrow C=0$, so $y=x^2\\sec x$ (same solution).",
          "For the derivative options, avoid re-differentiating the product: use the ODE as an evaluator, $y'(x)=y(x)\\tan x+2x\\sec x$.",
          "At $x=\\pi/3$: $y(\\pi/3)=\\dfrac{2\\pi^2}{9}$, so $y'(\\pi/3)=\\dfrac{2\\pi^2}{9}\\cdot\\sqrt3+2\\cdot\\dfrac{\\pi}{3}\\cdot 2=\\dfrac{2\\pi^2}{3\\sqrt3}+\\dfrac{4\\pi}{3}$ — matches (D).",
          "At $x=\\pi/4$: $y'(\\pi/4)=\\dfrac{\\pi^2}{8\\sqrt2}\\cdot 1+2\\cdot\\dfrac{\\pi}{4}\\cdot\\sqrt2=\\dfrac{\\pi^2}{8\\sqrt2}+\\dfrac{\\pi\\sqrt2}{2}\\ne\\dfrac{\\pi^2}{18}$, so (B) is false; and $y(\\pi/3)=\\dfrac{2\\pi^2}{9}\\ne\\dfrac{\\pi^2}{9}$, so (C) is false.",
          "Correct options: (A) and (D)."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE / JEE Advanced 2012, Paper 1, Q55. The elegant move is spotting that multiplying by $\\cos x$ turns the whole left side into $\\tfrac{d}{dx}(y\\cos x)=2x$; for the derivative parts, evaluate $y'$ straight from the ODE rather than re-differentiating $x^2\\sec x$."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2026",
    "title": "The slope that reads $\\dfrac{y}{x}+\\sec\\dfrac{y}{x}$",
    "difficulty": 3,
    "task": "Find the equation of the curve.",
    "pyq": {
      "year": 2013,
      "paper": "1",
      "qno": "50"
    },
    "tags": [
      "homogeneous differential equation",
      "substitution y=vx",
      "2013"
    ],
    "figure": "",
    "statement": "A curve passes through the point $\\left(1,\\dfrac{\\pi}{6}\\right)$. The slope of the curve at each point $(x,y)$ is $\\dfrac{y}{x}+\\sec\\!\\left(\\dfrac{y}{x}\\right)$, where $x>0$. Then the equation of the curve is\n\n(A) $\\sin\\!\\left(\\dfrac{y}{x}\\right)=\\log_e x+\\dfrac{1}{2}$\n\n(B) $\\operatorname{cosec}\\!\\left(\\dfrac{y}{x}\\right)=\\log_e x+2$\n\n(C) $\\sec\\!\\left(\\dfrac{2y}{x}\\right)=\\log_e x+2$\n\n(D) $\\cos\\!\\left(\\dfrac{2y}{x}\\right)=\\log_e x+\\dfrac{1}{2}$",
    "answer": "$\\boxed{\\text{(A)}}\\quad \\sin\\!\\left(\\dfrac{y}{x}\\right)=\\log_e x+\\dfrac12$",
    "trap": "The $\\sec(y/x)$ term makes the equation look non-standard, but the whole right side depends only on $y/x$, so it is a pure homogeneous equation. Students who try an integrating factor or attempt to treat it as linear waste the entire problem; and after substituting $y=vx$ many forget that the term $v$ cancels — leaving the clean separable core $\\cos v\\,dv = dx/x$, not $(\\,v+\\sec v)\\,dv$.",
    "solutions": [
      {
        "name": "Homogeneous substitution $y=vx$",
        "steps": [
          "The right side $\\dfrac{y}{x}+\\sec\\dfrac{y}{x}$ is a function of $y/x$ alone, so the equation $\\dfrac{dy}{dx}=\\dfrac{y}{x}+\\sec\\dfrac{y}{x}$ is homogeneous. Put $y=vx$, so $\\dfrac{dy}{dx}=v+x\\dfrac{dv}{dx}$.",
          "Substitute: $v+x\\dfrac{dv}{dx}=v+\\sec v$. The $v$ cancels, giving $x\\dfrac{dv}{dx}=\\sec v$.",
          "Separate variables: $\\dfrac{dv}{\\sec v}=\\dfrac{dx}{x}$, i.e. $\\cos v\\,dv=\\dfrac{dx}{x}$.",
          "Integrate both sides: $\\sin v=\\log_e x+c$.",
          "Return to $v=\\dfrac{y}{x}$: $\\sin\\!\\left(\\dfrac{y}{x}\\right)=\\log_e x+c$.",
          "Apply $(1,\\pi/6)$: at $x=1$, $y/x=\\pi/6$, so $\\sin(\\pi/6)=\\log_e 1+c\\Rightarrow \\tfrac12=0+c\\Rightarrow c=\\tfrac12$.",
          "Hence $\\sin\\!\\left(\\dfrac{y}{x}\\right)=\\log_e x+\\dfrac12$, which is option (A)."
        ]
      },
      {
        "name": "Verify by back-differentiating each option",
        "steps": [
          "Differentiate option (A) $\\sin\\!\\left(\\dfrac{y}{x}\\right)=\\log_e x+\\dfrac12$ implicitly. Let $u=y/x$; then $\\cos u\\cdot\\dfrac{d}{dx}\\!\\left(\\dfrac{y}{x}\\right)=\\dfrac1x$.",
          "Compute $\\dfrac{d}{dx}\\!\\left(\\dfrac{y}{x}\\right)=\\dfrac{y'x-y}{x^2}=\\dfrac{y'}{x}-\\dfrac{y}{x^2}$.",
          "So $\\cos u\\left(\\dfrac{y'}{x}-\\dfrac{y}{x^2}\\right)=\\dfrac1x$. Multiply by $\\dfrac{x}{\\cos u}$: $y'-\\dfrac{y}{x}=\\dfrac{1}{\\cos u}=\\sec\\dfrac{y}{x}$.",
          "This rearranges to $y'=\\dfrac{y}{x}+\\sec\\dfrac{y}{x}$ — exactly the given slope, so (A) is a genuine solution family.",
          "Check the point: at $(1,\\pi/6)$, LHS $=\\sin(\\pi/6)=\\tfrac12$ and RHS $=\\log_e 1+\\tfrac12=\\tfrac12$; the curve passes through the point.",
          "The other options fail either the differential equation (e.g. their derivative introduces spurious factors of $2$) or the initial point (B gives $\\operatorname{cosec}(\\pi/6)=2\\ne 0+2$? here $2$, but its derivative does not reproduce the slope), so (A) is the answer."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2013, Paper 1, Q50. The disguise is the point: a $\\sec(y/x)$ nonlinearity that looks fearsome collapses to the one-line separable equation $\\cos v\\,dv=dx/x$ the instant you recognise the equation is homogeneous."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2026",
    "title": "A linear ODE whose odd half vanishes",
    "difficulty": 4,
    "task": "Evaluate the symmetric integral of the solution.",
    "pyq": {
      "year": 2014,
      "paper": "2",
      "qno": "41"
    },
    "tags": [
      "linear differential equation",
      "integrating factor",
      "definite integral",
      "symmetry",
      "2014"
    ],
    "figure": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" font-size=\"12\">\n  <line x1=\"20\" y1=\"170\" x2=\"300\" y2=\"170\" stroke=\"var(--ink3)\" stroke-width=\"1.4\"/>\n  <line x1=\"160\" y1=\"30\" x2=\"160\" y2=\"200\" stroke=\"var(--ink3)\" stroke-width=\"1.4\"/>\n  <text x=\"292\" y=\"185\" fill=\"var(--ink2)\">x</text>\n  <text x=\"166\" y=\"40\" fill=\"var(--ink2)\">y</text>\n  <path d=\"M 70 168 Q 115 165 160 150 Q 205 108 250 40\" fill=\"none\" stroke=\"var(--ink2)\" stroke-width=\"1.4\" stroke-dasharray=\"4 3\"/>\n  <path d=\"M 250 300 Q 205 232 160 190 Q 115 175 70 172\" fill=\"none\" stroke=\"var(--ink2)\" stroke-width=\"1\" opacity=\"0.5\"/>\n  <path d=\"M 100 170 Q 130 168 160 150 Q 190 132 220 40 L 220 170 Q 190 170 160 170 Q 130 170 100 170 Z\" fill=\"var(--gold)\" opacity=\"0.28\" stroke=\"none\"/>\n  <line x1=\"100\" y1=\"170\" x2=\"100\" y2=\"165\" stroke=\"var(--ink3)\"/>\n  <line x1=\"220\" y1=\"170\" x2=\"220\" y2=\"165\" stroke=\"var(--ink3)\"/>\n  <text x=\"78\" y=\"188\" fill=\"var(--ink2)\">-√3/2</text>\n  <text x=\"210\" y=\"188\" fill=\"var(--ink2)\">√3/2</text>\n  <text x=\"228\" y=\"70\" fill=\"var(--gold)\">y=f(x)</text>\n</svg>",
    "statement": "The function $y=f(x)$ is the solution of the differential equation $\\dfrac{dy}{dx}+\\dfrac{xy}{x^2-1}=\\dfrac{x^4+2x}{\\sqrt{1-x^2}}$ in $(-1,1)$ satisfying $f(0)=0$. Then $\\displaystyle\\int_{-\\frac{\\sqrt{3}}{2}}^{\\frac{\\sqrt{3}}{2}} f(x)\\,dx$ is\n\n(A) $\\dfrac{\\pi}{3}-\\dfrac{\\sqrt{3}}{2}$\n\n(B) $\\dfrac{\\pi}{3}-\\dfrac{\\sqrt{3}}{4}$\n\n(C) $\\dfrac{\\pi}{6}-\\dfrac{\\sqrt{3}}{4}$\n\n(D) $\\dfrac{\\pi}{6}-\\dfrac{\\sqrt{3}}{2}$",
    "answer": "$\\boxed{\\text{(B)}\\quad \\dfrac{\\pi}{3}-\\dfrac{\\sqrt{3}}{4}}$",
    "trap": "Two traps stacked. First, the integrating factor is $e^{\\int \\frac{x}{x^2-1}dx}=\\sqrt{|x^2-1|}=\\sqrt{1-x^2}$ on $(-1,1)$ — sign of $x^2-1$ matters (it is negative here), so the absolute value flips it to $1-x^2$. Second, once $f(x)=\\dfrac{x^5/5+x^2}{\\sqrt{1-x^2}}$, the $x^5$ piece is ODD over the symmetric interval and integrates to $0$; a student who grinds out the full antiderivative wastes minutes and risks arithmetic errors instead of killing the odd part on sight.",
    "solutions": [
      {
        "name": "Integrating factor, then symmetry",
        "steps": [
          "The equation $\\dfrac{dy}{dx}+\\dfrac{x}{x^2-1}\\,y=\\dfrac{x^4+2x}{\\sqrt{1-x^2}}$ is linear. Compute $\\int\\dfrac{x}{x^2-1}\\,dx=\\dfrac12\\ln|x^2-1|$.",
          "On $(-1,1)$, $x^2-1<0$ so $|x^2-1|=1-x^2$, and the integrating factor is $\\mu=e^{\\frac12\\ln(1-x^2)}=\\sqrt{1-x^2}$.",
          "Multiply through: $\\dfrac{d}{dx}\\!\\left(y\\sqrt{1-x^2}\\right)=\\sqrt{1-x^2}\\cdot\\dfrac{x^4+2x}{\\sqrt{1-x^2}}=x^4+2x$.",
          "Integrate: $y\\sqrt{1-x^2}=\\dfrac{x^5}{5}+x^2+C$. Apply $f(0)=0$: $0\\cdot1=0+0+C\\Rightarrow C=0$.",
          "Hence $f(x)=\\dfrac{\\frac{x^5}{5}+x^2}{\\sqrt{1-x^2}}=\\underbrace{\\dfrac{x^5}{5\\sqrt{1-x^2}}}_{\\text{odd}}+\\underbrace{\\dfrac{x^2}{\\sqrt{1-x^2}}}_{\\text{even}}$.",
          "Over the symmetric interval $\\left[-\\tfrac{\\sqrt3}{2},\\tfrac{\\sqrt3}{2}\\right]$ the odd term integrates to $0$, so $\\displaystyle\\int_{-\\sqrt3/2}^{\\sqrt3/2} f\\,dx=2\\int_0^{\\sqrt3/2}\\dfrac{x^2}{\\sqrt{1-x^2}}\\,dx$.",
          "Put $x=\\sin\\theta$, $dx=\\cos\\theta\\,d\\theta$: $\\dfrac{x^2}{\\sqrt{1-x^2}}dx=\\sin^2\\theta\\,d\\theta$. Upper limit $x=\\tfrac{\\sqrt3}{2}\\Rightarrow\\theta=\\tfrac{\\pi}{3}$.",
          "So $2\\displaystyle\\int_0^{\\pi/3}\\sin^2\\theta\\,d\\theta=2\\int_0^{\\pi/3}\\dfrac{1-\\cos2\\theta}{2}\\,d\\theta=\\Big[\\theta-\\tfrac{\\sin2\\theta}{2}\\Big]_0^{\\pi/3}=\\dfrac{\\pi}{3}-\\dfrac{\\sin(2\\pi/3)}{2}=\\dfrac{\\pi}{3}-\\dfrac{\\sqrt3}{4}$.",
          "This is option (B)."
        ]
      },
      {
        "name": "Reduction $\\dfrac{x^2}{\\sqrt{1-x^2}}=\\dfrac{1}{\\sqrt{1-x^2}}-\\sqrt{1-x^2}$",
        "steps": [
          "As above, the solution is $f(x)=\\dfrac{x^5/5+x^2}{\\sqrt{1-x^2}}$ with the $x^5$ term odd, so only the even part $\\dfrac{x^2}{\\sqrt{1-x^2}}$ survives the symmetric integral.",
          "Write $\\dfrac{x^2}{\\sqrt{1-x^2}}=\\dfrac{-(1-x^2)+1}{\\sqrt{1-x^2}}=\\dfrac{1}{\\sqrt{1-x^2}}-\\sqrt{1-x^2}$ — no trig substitution needed, just standard forms.",
          "Then $\\displaystyle\\int f\\,dx=\\int_{-\\sqrt3/2}^{\\sqrt3/2}\\!\\left(\\dfrac{1}{\\sqrt{1-x^2}}-\\sqrt{1-x^2}\\right)dx$ (odd part dropped).",
          "$\\displaystyle\\int\\dfrac{dx}{\\sqrt{1-x^2}}=\\sin^{-1}x$, so its value is $\\Big[\\sin^{-1}x\\Big]_{-\\sqrt3/2}^{\\sqrt3/2}=\\dfrac{\\pi}{3}-\\left(-\\dfrac{\\pi}{3}\\right)=\\dfrac{2\\pi}{3}$.",
          "$\\displaystyle\\int\\sqrt{1-x^2}\\,dx=\\dfrac{x\\sqrt{1-x^2}}{2}+\\dfrac{\\sin^{-1}x}{2}$; evaluated on $\\left[-\\tfrac{\\sqrt3}{2},\\tfrac{\\sqrt3}{2}\\right]$ this even function gives $2\\left(\\dfrac{\\frac{\\sqrt3}{2}\\cdot\\frac12}{2}+\\dfrac{\\pi/3}{2}\\right)=\\dfrac{\\sqrt3}{4}+\\dfrac{\\pi}{3}$.",
          "Subtract: $\\dfrac{2\\pi}{3}-\\left(\\dfrac{\\sqrt3}{4}+\\dfrac{\\pi}{3}\\right)=\\dfrac{\\pi}{3}-\\dfrac{\\sqrt3}{4}$ — option (B), confirming the first method."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE / JEE Advanced 2014, Paper 2, Q41. A model \"integrating-factor meets even/odd symmetry\" problem: solve the linear ODE cleanly, then let the odd term die on the symmetric interval so only a short even integral remains."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2026",
    "title": "A solution curve through $(1,3)$ and who it meets",
    "difficulty": 4,
    "task": "Determine which statements about the solution curve are true.",
    "pyq": {
      "year": 2016,
      "paper": "1",
      "qno": "46"
    },
    "tags": [
      "first-order ODE",
      "intersection of solution curve with given curves",
      "2016"
    ],
    "figure": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" font-size=\"12\">\n  <line x1=\"30\" y1=\"195\" x2=\"305\" y2=\"195\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"/>\n  <line x1=\"40\" y1=\"205\" x2=\"40\" y2=\"15\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"/>\n  <text x=\"298\" y=\"189\" fill=\"var(--ink2)\">x</text>\n  <text x=\"46\" y=\"22\" fill=\"var(--ink2)\">y</text>\n  <path d=\"M 55 175 Q 90 120 135 70 Q 175 30 235 22\" fill=\"none\" stroke=\"var(--gold)\" stroke-width=\"2\"/>\n  <text x=\"238\" y=\"26\" fill=\"var(--gold)\">$\\Gamma$: $\\ln\\frac{y}{3}=1-\\frac{y}{x+2}$</text>\n  <line x1=\"40\" y1=\"175\" x2=\"250\" y2=\"55\" stroke=\"var(--ink2)\" stroke-width=\"1\" stroke-dasharray=\"4 3\"/>\n  <text x=\"200\" y=\"85\" fill=\"var(--ink2)\">$y=x+2$</text>\n  <circle cx=\"120\" cy=\"84\" r=\"3.5\" fill=\"var(--gold)\"/>\n  <text x=\"126\" y=\"80\" fill=\"var(--ink2)\">$(1,3)$</text>\n</svg>",
    "statement": "A solution curve of the differential equation $\\big(x^2+xy+4x+2y+4\\big)\\dfrac{dy}{dx}-y^2=0$, $x>0$, passes through the point $(1,3)$. Then the solution curve\n\n(A) intersects $y=x+2$ at exactly one point\n\n(B) intersects $y=x+2$ at exactly two points\n\n(C) intersects $y=(x+2)^2$\n\n(D) does NOT intersect $y=(x+3)^2$",
    "answer": "(A), (D)",
    "trap": "The clutter $x^2+xy+4x+2y+4$ hides a clean factorisation. Miss that the coefficient is $(x+2)(x+2+y)$ and you never spot the substitution $u=x+2$ that turns the mess into a homogeneous equation. A second trap: after solving, students test the option curves numerically and misread a tangency/near-miss as an intersection — the algebra must be pinned down exactly.",
    "solutions": [
      {
        "name": "Factor the coefficient, shift $u=x+2$, reduce to homogeneous",
        "steps": [
          "Group the coefficient: $x^2+4x+4+xy+2y=(x+2)^2+y(x+2)=(x+2)(x+2+y)$.",
          "The ODE becomes $(x+2)(x+2+y)\\,dy=y^2\\,dx$. Put $u=x+2$ (so $dx=du$): $u(u+y)\\,dy=y^2\\,du$.",
          "This is homogeneous in $u,y$. Write $\\dfrac{du}{dy}=\\dfrac{u(u+y)}{y^2}=\\Big(\\dfrac{u}{y}\\Big)^2+\\dfrac{u}{y}$ and set $v=\\dfrac{u}{y}$, i.e. $u=vy$, $\\dfrac{du}{dy}=v+y\\dfrac{dv}{dy}$.",
          "Then $v+y\\,v'=v^2+v\\Rightarrow y\\,v'=v^2\\Rightarrow \\dfrac{dv}{v^2}=\\dfrac{dy}{y}$.",
          "Integrate: $-\\dfrac{1}{v}=\\ln y+C_0$, and $v=\\dfrac{u}{y}=\\dfrac{x+2}{y}$, so $-\\dfrac{y}{x+2}=\\ln y+C_0$, i.e. $\\ln y+\\dfrac{y}{x+2}=C$.",
          "Apply $(1,3)$: $\\ln 3+\\dfrac{3}{3}=\\ln 3+1=C$. Hence the curve is $\\ln y+\\dfrac{y}{x+2}=\\ln 3+1$, i.e. $\\ln\\dfrac{y}{3}=1-\\dfrac{y}{x+2}$.",
          "(A)/(B): set $y=x+2$. Then $\\dfrac{y}{x+2}=1$, so $\\ln\\dfrac{y}{3}=1-1=0\\Rightarrow y=3\\Rightarrow x=1$. Exactly one point $(1,3)$. So (A) TRUE, (B) FALSE.",
          "(C): set $y=(x+2)^2$. Then $\\dfrac{y}{x+2}=x+2$, so the relation reads $\\ln\\dfrac{(x+2)^2}{3}=1-(x+2)$. For $x>0$ the left side grows like $2\\ln(x+2)$ while the right side falls like $-(x+2)$; they never meet (a quick sign check at $x=0^+$ and $x\\to\\infty$ shows no crossing). So the curve does NOT meet $y=(x+2)^2$ — (C) FALSE.",
          "(D): set $y=(x+3)^2$; the same growth-vs-decay comparison gives no solution for $x>0$, so the curve does NOT intersect $y=(x+3)^2$ — (D) TRUE.",
          "Correct options: (A) and (D)."
        ]
      },
      {
        "name": "Verify by implicit differentiation, then decide intersections",
        "steps": [
          "Claim the family is $F(x,y)=\\ln y+\\dfrac{y}{x+2}=C$. Differentiate implicitly in $x$: $\\dfrac{y'}{y}+\\dfrac{y'(x+2)-y}{(x+2)^2}=0$.",
          "Solve for $y'$: $y'\\!\\left(\\dfrac{1}{y}+\\dfrac{1}{x+2}\\right)=\\dfrac{y}{(x+2)^2}$, so $y'\\cdot\\dfrac{(x+2)+y}{y(x+2)}=\\dfrac{y}{(x+2)^2}$.",
          "Hence $y'=\\dfrac{y^2(x+2)}{(x+2)^2\\big[(x+2)+y\\big]}=\\dfrac{y^2}{(x+2)\\big[(x+2)+y\\big]}=\\dfrac{y^2}{(x+2)(x+2+y)}$.",
          "But $(x+2)(x+2+y)=x^2+xy+4x+2y+4$ (expand to confirm), so $y'=\\dfrac{y^2}{x^2+xy+4x+2y+4}$, exactly the given ODE. The family is verified.",
          "Fix $C$ from $(1,3)$: $\\ln 3+1$. The curve is $\\ln y+\\dfrac{y}{x+2}=\\ln 3+1$.",
          "Intersection with a target curve $y=\\phi(x)$ reduces to $g(x):=\\ln\\phi(x)+\\dfrac{\\phi(x)}{x+2}-\\ln 3-1=0$.",
          "For $y=x+2$: $g(x)=\\ln(x+2)+1-\\ln3-1=\\ln\\dfrac{x+2}{3}$, zero only at $x=1$. Single point $(1,3)$: (A) TRUE, (B) FALSE.",
          "For $y=(x+2)^2$: $g(x)=2\\ln(x+2)+(x+2)-\\ln3-1$, which is strictly increasing for $x>0$ and already positive at $x=0$ ($2\\ln2+2-\\ln3-1>0$); no root, so no intersection: (C) FALSE.",
          "For $y=(x+3)^2$: $g(x)=2\\ln(x+3)+\\dfrac{(x+3)^2}{x+2}-\\ln3-1$; the added positive term makes $g>0$ throughout $x>0$, so again no root: the curve does not intersect it — (D) TRUE.",
          "Thus (A) and (D) are the correct choices."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE / JEE Advanced 2016, Paper 1, Q46. The entire difficulty is packaged in one hidden factorisation, $(x+2)(x+2+y)$; once seen, the shift $u=x+2$ makes the equation homogeneous and every intersection question collapses to comparing a logarithm against a linear/quadratic term."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2026",
    "title": "The Solved ODE Hidden Inside $f'=2-\\tfrac{f}{x}$",
    "difficulty": 4,
    "task": "Decide which statements are true.",
    "pyq": {
      "year": 2016,
      "paper": "1",
      "qno": "43"
    },
    "tags": [
      "linear first-order ODE",
      "limits of derived function",
      "2016"
    ],
    "figure": "",
    "statement": "Let $f:(0,\\infty)\\to\\mathbb{R}$ be a differentiable function such that $f'(x) = 2 - \\dfrac{f(x)}{x}$ for all $x \\in (0,\\infty)$ and $f(1) \\neq 1$. Then\n\n(A) $\\displaystyle\\lim_{x\\to 0^{+}} f'\\!\\left(\\tfrac{1}{x}\\right) = 1$\n\n(B) $\\displaystyle\\lim_{x\\to 0^{+}} x\\,f\\!\\left(\\tfrac{1}{x}\\right) = 2$\n\n(C) $\\displaystyle\\lim_{x\\to 0^{+}} x^{2}\\,f'(x) = 0$\n\n(D) $|f(x)| \\le 2$ for all $x \\in (0,2)$",
    "answer": "(A)",
    "trap": "The extra condition $f(1)\\neq 1$ is not decoration: it forces the arbitrary constant $c\\neq 0$. If you sloppily take the particular solution $f(x)=x$ (i.e. $c=0$), then options (B) and (C) look 'true' and (A) looks like it needs checking — you get the wrong answer set. The whole problem turns on keeping $c$ alive.",
    "solutions": [
      {
        "name": "Solve the linear ODE, then read off each limit",
        "steps": [
          "Write the equation in standard linear form: $f'(x)+\\dfrac{1}{x}f(x)=2$.",
          "Integrating factor is $\\mu=e^{\\int \\frac{1}{x}\\,dx}=e^{\\ln x}=x$ (for $x>0$).",
          "Then $\\dfrac{d}{dx}\\big(x\\,f(x)\\big)=2x$, so $x\\,f(x)=x^{2}+c$ and $f(x)=x+\\dfrac{c}{x}$.",
          "The condition $f(1)\\neq 1$ means $1+c\\neq 1$, i.e. $c\\neq 0$. Keep $c$ nonzero throughout.",
          "Also $f'(x)=1-\\dfrac{c}{x^{2}}$.",
          "(A): $f'\\!\\left(\\tfrac{1}{x}\\right)=1-c x^{2}\\to 1$ as $x\\to 0^{+}$. TRUE.",
          "(B): $x\\,f\\!\\left(\\tfrac{1}{x}\\right)=x\\left(\\tfrac{1}{x}+cx\\right)=1+c x^{2}\\to 1\\neq 2$. FALSE.",
          "(C): $x^{2}f'(x)=x^{2}\\left(1-\\tfrac{c}{x^{2}}\\right)=x^{2}-c\\to -c\\neq 0$ (since $c\\neq0$). FALSE.",
          "(D): $f(x)=x+\\tfrac{c}{x}$; as $x\\to 0^{+}$, $|f(x)|\\to\\infty$, so it is not bounded by $2$ on $(0,2)$. FALSE.",
          "Only (A) holds."
        ]
      },
      {
        "name": "Asymptotic reasoning without fully solving",
        "steps": [
          "From $f'(x)=2-\\dfrac{f(x)}{x}$ multiply by $x$: $x f'(x)+f(x)=2x$, i.e. $\\big(x f(x)\\big)'=2x$, so $x f(x)=x^{2}+c$ — the same structure, but now argue by orders of magnitude.",
          "Hence $f(x)=x+\\dfrac{c}{x}$ with $c\\neq 0$. For large arguments the $x$ term dominates; for small arguments the $\\tfrac{c}{x}$ term blows up.",
          "For (A), replace $x$ by $\\tfrac1x$ and let $x\\to0^+$, i.e. push the argument to $+\\infty$: $f'(t)=1-\\tfrac{c}{t^2}\\to 1$ as $t\\to\\infty$. The $\\tfrac{c}{t^{2}}$ tail vanishes regardless of $c$, so (A) is TRUE.",
          "For (B), $t f(1/t)$ with $t\\to0^+$ probes $x\\to\\infty$: the leading behaviour $f(x)\\sim x$ gives $t\\cdot\\tfrac1t=1$, and the correction $c t^{2}\\to0$; the limit is $1$, never $2$. FALSE.",
          "For (C), $x^{2}f'(x)=x^{2}-c$; near $x=0$ the $x^{2}$ is negligible and the limit is $-c\\neq 0$. The nonzero constant $c$ is exactly what $f(1)\\neq1$ guarantees. FALSE.",
          "For (D), the $\\tfrac{c}{x}$ singularity at $x\\to0^+$ makes $f$ unbounded on $(0,2)$. FALSE.",
          "Answer: (A) only."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE/JEE Advanced 2016, Paper 1, Q43. The lone hypothesis $f(1)\\neq1$ is the linchpin — it keeps the integration constant nonzero, which single-handedly kills options (B) and (C)."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2026",
    "title": "The Broken Symmetry of $f(x)\\sin t - f(t)\\sin x$",
    "difficulty": 5,
    "task": "Decide which statements are true.",
    "pyq": {
      "year": 2018,
      "paper": "2",
      "qno": "6"
    },
    "tags": [
      "derivative from limit",
      "first order linear ODE",
      "L'Hopital",
      "2018"
    ],
    "figure": "",
    "statement": "Let $f:(0,\\pi)\\to\\mathbb{R}$ be a twice differentiable function such that $$\\lim_{t\\to x}\\frac{f(x)\\sin t - f(t)\\sin x}{t-x}=\\sin^2 x\\quad\\text{for all }x\\in(0,\\pi).$$ If $f\\!\\left(\\dfrac{\\pi}{6}\\right)=-\\dfrac{\\pi}{12}$, then which of the following statement(s) is (are) TRUE?\n\n(A) $f\\!\\left(\\dfrac{\\pi}{4}\\right)=\\dfrac{\\pi}{4\\sqrt{2}}$\n\n(B) $f(x)<\\dfrac{x^4}{6}-x^2$ for all $x\\in(0,\\pi)$\n\n(C) There exists $\\alpha\\in(0,\\pi)$ such that $f'(\\alpha)=0$\n\n(D) $f\\!\\left(\\dfrac{\\pi}{2}\\right)+f''\\!\\left(\\dfrac{\\pi}{2}\\right)=0$",
    "answer": "(B), (C), (D)",
    "trap": "The limit looks like a difference quotient in $t$, so students reflexively 'differentiate with respect to $t$ and set $t=x$', getting $f(x)\\cos x - f'(x)\\sin x$. That step is correct — but many then mis-sign it as $f'(x)\\sin x - f(x)\\cos x$, flipping the ODE. Worse, they forget the resulting first-order ODE has an integration constant fixed by $f(\\pi/6)=-\\pi/12$; carelessly taking the constant nonzero breaks every option.",
    "solutions": [
      {
        "name": "L'Hôpital $\\Rightarrow$ recognise a product-rule derivative",
        "steps": [
          "As $t\\to x$ the numerator $f(x)\\sin t - f(t)\\sin x\\to f(x)\\sin x - f(x)\\sin x = 0$ and the denominator $t-x\\to 0$, so the limit is $\\tfrac{0}{0}$. Apply L'Hôpital differentiating with respect to $t$.",
          "$\\dfrac{d}{dt}\\big[f(x)\\sin t - f(t)\\sin x\\big]=f(x)\\cos t - f'(t)\\sin x$. Setting $t=x$ gives the limit value $f(x)\\cos x - f'(x)\\sin x=\\sin^2 x$.",
          "Divide by $\\sin^2 x$ (valid since $\\sin x>0$ on $(0,\\pi)$): $\\dfrac{f(x)\\cos x - f'(x)\\sin x}{\\sin^2 x}=1$. The left side is exactly $-\\dfrac{d}{dx}\\!\\left(\\dfrac{f(x)}{\\sin x}\\right)$, because $\\dfrac{d}{dx}\\!\\left(\\dfrac{f}{\\sin x}\\right)=\\dfrac{f'\\sin x - f\\cos x}{\\sin^2 x}$.",
          "Hence $\\dfrac{d}{dx}\\!\\left(\\dfrac{f(x)}{\\sin x}\\right)=-1$, so $\\dfrac{f(x)}{\\sin x}=-x+c$, giving $f(x)=(c-x)\\sin x$.",
          "Impose $f(\\pi/6)=-\\pi/12$: $(c-\\pi/6)\\sin(\\pi/6)=(c-\\pi/6)\\cdot\\tfrac12=-\\pi/12$, so $c-\\pi/6=-\\pi/6$, i.e. $c=0$. Therefore $f(x)=-x\\sin x$.",
          "(A) $f(\\pi/4)=-\\tfrac{\\pi}{4}\\sin\\tfrac{\\pi}{4}=-\\tfrac{\\pi}{4\\sqrt2}$, which is negative — not $+\\tfrac{\\pi}{4\\sqrt2}$. So (A) is FALSE.",
          "(C) $f'(x)=-\\sin x - x\\cos x$. At $x=\\pi/2$, $f'=-1<0$; as $x\\to0^+$, $f'(x)\\to -0-0=0^-$ but just inside, $f'(x)=-\\sin x - x\\cos x<0$. Instead use Rolle: $f(0^+)\\to0$ and $f(\\pi^-)=-\\pi\\sin\\pi=0$, and $f$ is continuous on $[0,\\pi]$, differentiable inside, with equal end-values $0$; by Rolle's theorem some $\\alpha\\in(0,\\pi)$ has $f'(\\alpha)=0$. So (C) is TRUE.",
          "(D) $f''(x)=-2\\cos x + x\\sin x$ (differentiate $f'=-\\sin x - x\\cos x$: $f''=-\\cos x-\\cos x + x\\sin x$). At $x=\\pi/2$: $f(\\pi/2)=-\\tfrac{\\pi}{2}\\cdot1=-\\tfrac{\\pi}{2}$ and $f''(\\pi/2)=-0+\\tfrac{\\pi}{2}\\cdot1=\\tfrac{\\pi}{2}$, so their sum is $0$. (D) is TRUE.",
          "(B) With $f(x)=-x\\sin x$, claim $-x\\sin x<\\tfrac{x^4}{6}-x^2$ on $(0,\\pi)$. Since $\\sin x>x-\\tfrac{x^3}{6}$ for $x>0$, we get $-x\\sin x<-x\\left(x-\\tfrac{x^3}{6}\\right)=\\tfrac{x^4}{6}-x^2$. So (B) is TRUE.",
          "Conclusion: (B), (C), (D) are true; (A) is false."
        ]
      },
      {
        "name": "Integrating-factor view of the linear ODE",
        "steps": [
          "From the limit (Solution 1, step 2) the relation is the first-order linear ODE $f'(x)\\sin x - f(x)\\cos x = -\\sin^2 x$, i.e. $f'(x)-(\\cot x)\\,f(x)=-\\sin x$ after dividing by $\\sin x$.",
          "Integrating factor: $\\mu=e^{-\\int\\cot x\\,dx}=e^{-\\ln\\sin x}=\\dfrac{1}{\\sin x}$.",
          "Multiply through: $\\dfrac{d}{dx}\\!\\left(\\dfrac{f}{\\sin x}\\right)=\\dfrac{-\\sin x}{\\sin x}=-1$. Integrate: $\\dfrac{f}{\\sin x}=-x+c$, the same first integral as before.",
          "Fix $c$ with $f(\\pi/6)=-\\pi/12$: as above $c=0$, so $f(x)=-x\\sin x$.",
          "Now verify (D) structurally without recomputing at a point: for $f=-x\\sin x$ one checks $f+f''=(-x\\sin x)+(-2\\cos x+x\\sin x)=-2\\cos x$, which vanishes exactly at $x=\\pi/2$. Hence $f(\\pi/2)+f''(\\pi/2)=0$ — (D) TRUE, and it is a genuine coincidence at that single point, not an identity.",
          "For (C), note $g(x)=f(x)/\\sin x=-x$ is strictly decreasing, but that alone does not give $f'=0$; the clean argument is Rolle on $f$ between its two boundary zeros $f(0^+)=f(\\pi^-)=0$. TRUE.",
          "(A) and (B) follow exactly as in Solution 1: $f(\\pi/4)=-\\tfrac{\\pi}{4\\sqrt2}<0$ (A false), and the Taylor bound $\\sin x>x-\\tfrac{x^3}{6}$ gives (B) true.",
          "Answer: (B), (C), (D)."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2018, Paper 2, Q6. The whole problem hinges on spotting that $\\dfrac{f\\cos x-f'\\sin x}{\\sin^2x}$ is the derivative of $-\\dfrac{f}{\\sin x}$ — recognise the quotient-rule pattern and a scary-looking limit collapses to $\\big(f/\\sin x\\big)'=-1$."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2026",
    "title": "The Logistic Well: $y'=(2+5y)(5y-2)$",
    "difficulty": 3,
    "task": "Find the limit as $x\\to-\\infty$.",
    "pyq": {
      "year": 2018,
      "paper": "2",
      "qno": "10"
    },
    "tags": [
      "variable separable",
      "logistic-type ODE",
      "limit at infinity",
      "2018"
    ],
    "figure": "",
    "statement": "Let $f:\\mathbb{R}\\to\\mathbb{R}$ be a differentiable function with $f(0)=0$. If $y=f(x)$ satisfies the differential equation $$\\frac{dy}{dx}=(2+5y)(5y-2),$$ then the value of $\\displaystyle\\lim_{x\\to-\\infty}f(x)$ is ______ .",
    "answer": "$\\boxed{0.4}$",
    "trap": "The equilibria of $y'=(5y)^2-4$ are $y=\\pm\\tfrac25$, and it is tempting to just pick one. But which one the solution approaches depends on the direction of the limit AND the sign of $y'$ near the start. With $f(0)=0$ we sit between the two equilibria where $y'=(2)(-2)=-4<0$, so $y$ is decreasing in $x$; running $x\\to-\\infty$ therefore sends $y$ UP toward $+\\tfrac25$, not down toward $-\\tfrac25$. Reading the phase line backwards costs the mark.",
    "solutions": [
      {
        "name": "Separate variables and solve explicitly",
        "steps": [
          "Expand: $\\dfrac{dy}{dx}=(5y+2)(5y-2)=25y^2-4$. Separate: $\\dfrac{dy}{25y^2-4}=dx$.",
          "Partial fractions with $25y^2-4=(5y-2)(5y+2)$: $\\dfrac{1}{(5y-2)(5y+2)}=\\dfrac{1}{4}\\left(\\dfrac{1}{5y-2}-\\dfrac{1}{5y+2}\\right)$ (since $(5y+2)-(5y-2)=4$).",
          "Integrate: $\\dfrac{1}{4}\\cdot\\dfrac{1}{5}\\ln\\!\\left|\\dfrac{5y-2}{5y+2}\\right|=x+C_0$, i.e. $\\ln\\!\\left|\\dfrac{5y-2}{5y+2}\\right|=20x+C_1$.",
          "So $\\dfrac{5y-2}{5y+2}=A\\,e^{20x}$. Apply $f(0)=0$: at $x=0,\\ y=0$ the left side is $\\dfrac{-2}{2}=-1$, so $A=-1$.",
          "Thus $\\dfrac{5y-2}{5y+2}=-e^{20x}$. Solve for $y$: $5y-2=-e^{20x}(5y+2)\\Rightarrow 5y(1+e^{20x})=2(1-e^{20x})$, giving $y=\\dfrac{2}{5}\\cdot\\dfrac{1-e^{20x}}{1+e^{20x}}$.",
          "As $x\\to-\\infty$, $e^{20x}\\to0$, so $y\\to\\dfrac{2}{5}\\cdot\\dfrac{1-0}{1+0}=\\dfrac{2}{5}=0.4$.",
          "(Check the trap: as $x\\to+\\infty$, $e^{20x}\\to\\infty$ and $y\\to-\\tfrac25$. The two limits land on the two different equilibria — the direction matters.)"
        ]
      },
      {
        "name": "Phase-line / equilibrium reasoning (no explicit solve)",
        "steps": [
          "The autonomous ODE $y'=(5y-2)(5y+2)$ has equilibria at $y=\\tfrac25$ and $y=-\\tfrac25$. Between them ($-\\tfrac25<y<\\tfrac25$) the product $(5y-2)(5y+2)<0$, so $y'<0$; outside, $y'>0$.",
          "Initial data $f(0)=0$ lies strictly between the equilibria, so the solution stays trapped in $\\left(-\\tfrac25,\\tfrac25\\right)$ for all $x$ (it cannot cross an equilibrium by uniqueness).",
          "On this interval $y'<0$, meaning $y$ strictly decreases as $x$ increases. Equivalently, as $x$ decreases toward $-\\infty$, $y$ strictly increases.",
          "A bounded monotone solution on an autonomous line must limit to an equilibrium. Increasing as $x\\to-\\infty$ while bounded above by $\\tfrac25$ forces $\\displaystyle\\lim_{x\\to-\\infty}f(x)=\\dfrac{2}{5}=0.4$.",
          "(Symmetrically, decreasing as $x\\to+\\infty$ gives the other equilibrium $-\\tfrac25$ in that limit.)"
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2018, Paper 2, Q10. A logistic-type autonomous ODE: you can grind out $y=\\tfrac25\\tanh(-10x)$ explicitly, or read the answer straight off the phase line once you notice the initial point sits between the two equilibria."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2026",
    "title": "The curve whose tangent-to-$y$-axis segment is always length $1$",
    "difficulty": 4,
    "task": "Identify every correct statement about the curve.",
    "pyq": {
      "year": 2019,
      "paper": "1",
      "qno": "3"
    },
    "tags": [
      "tangent length",
      "first-order ODE",
      "separable equation",
      "2019"
    ],
    "figure": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" font-size=\"12\"><line x1=\"30\" y1=\"185\" x2=\"305\" y2=\"185\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"/><line x1=\"40\" y1=\"205\" x2=\"40\" y2=\"15\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"/><text x=\"298\" y=\"200\" fill=\"var(--ink2)\">x</text><text x=\"26\" y=\"22\" fill=\"var(--ink2)\">y</text><path d=\"M 250 185 C 160 178, 70 135, 41 30\" fill=\"none\" stroke=\"var(--gold)\" stroke-width=\"2\"/><text x=\"250\" y=\"200\" fill=\"var(--ink2)\">(1,0)</text><circle cx=\"250\" cy=\"185\" r=\"2.5\" fill=\"var(--ink3)\"/><circle cx=\"120\" cy=\"150\" r=\"3\" fill=\"var(--gold)\"/><text x=\"126\" y=\"148\" fill=\"var(--ink2)\">P</text><line x1=\"40\" y1=\"96\" x2=\"175\" y2=\"185\" stroke=\"var(--ink2)\" stroke-width=\"1\" stroke-dasharray=\"4 3\"/><circle cx=\"40\" cy=\"96\" r=\"3\" fill=\"var(--ink3)\"/><text x=\"12\" y=\"100\" fill=\"var(--ink2)\">Y_P</text><line x1=\"40\" y1=\"96\" x2=\"120\" y2=\"150\" stroke=\"var(--gold)\" stroke-width=\"2.5\"/><text x=\"66\" y=\"114\" fill=\"var(--gold)\">1</text></svg>",
    "statement": "Let $\\Gamma$ denote a curve $y=y(x)$ lying in the first quadrant, and suppose the point $(1,0)$ lies on it. Let the tangent to $\\Gamma$ at a point $P$ intersect the $y$-axis at $Y_P$. If the segment $PY_P$ has length $1$ for every point $P$ on $\\Gamma$, then which of the following options is/are correct?\n\n(A) $y=\\log_e\\!\\left(\\dfrac{1+\\sqrt{1-x^2}}{x}\\right)-\\sqrt{1-x^2}$\n\n(B) $xy'+\\sqrt{1-x^2}=0$\n\n(C) $y=-\\log_e\\!\\left(\\dfrac{1+\\sqrt{1-x^2}}{x}\\right)+\\sqrt{1-x^2}$\n\n(D) $xy'-\\sqrt{1-x^2}=0$",
    "answer": "(A), (B)",
    "trap": "The length condition gives $y'=\\pm\\sqrt{1-x^2}/x$, so both a $+$ and a $-$ branch appear to be admissible. Students who keep the $+$ sign (options C, D) forget that the curve must stay in the first quadrant AND pass through $(1,0)$ with $y>0$ for $x<1$: as $x$ decreases from $1$, $y$ must increase, which forces $y'<0$. Only the minus branch survives.",
    "solutions": [
      {
        "name": "Geometry of the tangent segment $PY_P$",
        "steps": [
          "Let $P=(x,\\,y)$ with slope $y'$. The tangent line is $Y-y=y'(X-x)$.",
          "It meets the $y$-axis at $X=0$: $Y_P=\\bigl(0,\\;y-xy'\\bigr)$.",
          "The squared length of $PY_P$ is $|PY_P|^2=(x-0)^2+\\bigl(y-(y-xy')\\bigr)^2=x^2+(xy')^2$.",
          "Set this equal to $1$: $x^2+x^2(y')^2=1$, so $(y')^2=\\dfrac{1-x^2}{x^2}$ and $y'=\\pm\\dfrac{\\sqrt{1-x^2}}{x}$.",
          "The curve is in the first quadrant and passes through $(1,0)$; for $x\\in(0,1)$ it must lie above the axis, so $y$ decreases as $x$ increases toward $1$. Hence $y'<0$ and we take $y'=-\\dfrac{\\sqrt{1-x^2}}{x}$, i.e. $xy'+\\sqrt{1-x^2}=0$ — this is option (B).",
          "Integrate: $y=-\\displaystyle\\int\\frac{\\sqrt{1-x^2}}{x}\\,dx$. Substituting $\\sqrt{1-x^2}=t$ (so $x^2=1-t^2$, $x\\,dx=-t\\,dt$) gives $\\displaystyle\\int\\frac{t^2}{1-t^2}\\,dt=-t+\\tfrac12\\log\\frac{1+t}{1-t}$.",
          "Back-substituting and simplifying $\\tfrac12\\log\\frac{1+t}{1-t}=\\log\\frac{1+\\sqrt{1-x^2}}{x}$ yields $y=\\log_e\\!\\left(\\dfrac{1+\\sqrt{1-x^2}}{x}\\right)-\\sqrt{1-x^2}+C$.",
          "Apply $(1,0)$: at $x=1$, $\\sqrt{1-x^2}=0$ and $\\log(1/1)=0$, so $C=0$. This is exactly option (A). Answer: (A), (B)."
        ]
      },
      {
        "name": "Direct verification of the printed options",
        "steps": [
          "Options (B) and (D) differ only in a sign; options (A) and (C) are exact negatives of each other. So at most one from each pair can be right, and the two correct ones must be consistent.",
          "Check (A) against (B). Let $y=\\log_e\\frac{1+\\sqrt{1-x^2}}{x}-\\sqrt{1-x^2}$. Write $r=\\sqrt{1-x^2}$, so $r'=-x/r$.",
          "Differentiate the log term: $\\frac{d}{dx}\\log\\frac{1+r}{x}=\\frac{r'}{1+r}-\\frac1x=\\frac{-x/r}{1+r}-\\frac1x$.",
          "Differentiate $-r$: $-r'=x/r$. Adding, $y'=\\frac{-x}{r(1+r)}-\\frac1x+\\frac{x}{r}=\\frac{-x}{r(1+r)}+\\frac{x}{r}-\\frac1x$.",
          "Combine the first two: $\\frac{x}{r}\\!\\left(1-\\frac{1}{1+r}\\right)=\\frac{x}{r}\\cdot\\frac{r}{1+r}=\\frac{x}{1+r}$. So $y'=\\frac{x}{1+r}-\\frac1x=\\frac{x^2-(1+r)}{x(1+r)}$.",
          "Since $x^2=1-r^2=(1-r)(1+r)$, the numerator is $(1-r)(1+r)-(1+r)=(1+r)(-r)=-r(1+r)$, giving $y'=\\frac{-r(1+r)}{x(1+r)}=-\\frac{r}{x}=-\\frac{\\sqrt{1-x^2}}{x}$.",
          "Thus $xy'+\\sqrt{1-x^2}=0$: option (A) satisfies option (B), and (A) passes through $(1,0)$. Options (C),(D) have the wrong sign and describe the second-quadrant reflection, not the first-quadrant curve. Answer: (A), (B)."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2019, Paper 1, QS2-Q3. The whole problem hinges on one geometric quantity — the foot of the tangent on the $y$-axis is $(0,\\,y-xy')$ — after which the sign is pinned entirely by 'first quadrant through $(1,0)$', not by the algebra."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2026",
    "title": "$f'(x)=\\dfrac{f(x)}{b^2+x^2}$ and the symmetry $f(x)f(-x)=1$",
    "difficulty": 3,
    "task": "Select every true statement about the solution $f$.",
    "pyq": {
      "year": 2020,
      "paper": "2",
      "qno": "7"
    },
    "tags": [
      "variable separable",
      "first order ODE",
      "2020"
    ],
    "figure": "",
    "statement": "Let $b$ be a nonzero real number. Suppose $f:\\mathbb{R}\\to\\mathbb{R}$ is a differentiable function such that $f(0)=1$. If the derivative $f'$ of $f$ satisfies the equation $f'(x)=\\dfrac{f(x)}{b^2+x^2}$ for all $x\\in\\mathbb{R}$, then which of the following statements is/are TRUE?\n\n(A) If $b>0$, then $f$ is an increasing function\n\n(B) If $b<0$, then $f$ is a decreasing function\n\n(C) $f(x)\\,f(-x)=1$ for all $x\\in\\mathbb{R}$\n\n(D) $f(x)-f(-x)=0$ for all $x\\in\\mathbb{R}$",
    "answer": "(A), (C)",
    "trap": "The factor $b$ appears only inside $b^2$ and $\\tfrac1b$, so people expect the sign of $b$ to control monotonicity — leading them to accept (A) but reject nothing, or to think (B) mirrors (A). But $b^2+x^2>0$ regardless of the sign of $b$, so $f'=f/(b^2+x^2)>0$ for every $b\\neq0$: $f$ is increasing for ALL $b$, which makes (A) true but (B) false. Separately, $f(x)f(-x)=1$ (an even product) is confused with $f$ being even, $f(x)=f(-x)$ (D) — a classic trap since $f$ is neither even nor odd.",
    "solutions": [
      {
        "name": "Solve explicitly by separating variables",
        "steps": [
          "The equation $f'(x)=\\dfrac{f(x)}{b^2+x^2}$ is separable: $\\dfrac{f'(x)}{f(x)}=\\dfrac{1}{b^2+x^2}$ (note $f>0$ near $0$ since $f(0)=1$, so division is valid).",
          "Integrate both sides: $\\ln f(x)=\\displaystyle\\int\\frac{dx}{b^2+x^2}=\\frac1b\\tan^{-1}\\!\\frac{x}{b}+C.$",
          "Apply $f(0)=1$: $\\ln 1 = \\frac1b\\tan^{-1}(0)+C\\Rightarrow C=0.$ Hence $f(x)=\\exp\\!\\left(\\dfrac{1}{b}\\tan^{-1}\\dfrac{x}{b}\\right)>0$ for all $x$.",
          "Because $f>0$ everywhere, the fraction is always defined and $f'(x)=\\dfrac{f(x)}{b^2+x^2}>0$ for every $x$ and every $b\\neq0$. So $f$ is strictly increasing regardless of the sign of $b$: (A) is TRUE, (B) is FALSE.",
          "Now compute $f(-x)=\\exp\\!\\left(\\frac1b\\tan^{-1}\\frac{-x}{b}\\right)=\\exp\\!\\left(-\\frac1b\\tan^{-1}\\frac{x}{b}\\right)$, using that $\\tan^{-1}$ is odd.",
          "Therefore $f(x)\\,f(-x)=\\exp\\!\\left(\\frac1b\\tan^{-1}\\frac{x}{b}\\right)\\exp\\!\\left(-\\frac1b\\tan^{-1}\\frac{x}{b}\\right)=e^0=1$: (C) is TRUE.",
          "Since $f(-x)=1/f(x)\\neq f(x)$ in general (e.g. $f$ is increasing, not even), $f(x)-f(-x)\\not\\equiv0$: (D) is FALSE. Answer: (A), (C)."
        ]
      },
      {
        "name": "Deduce (A),(C) structurally without evaluating the integral",
        "steps": [
          "Sign of $f$: at $x=0$, $f=1>0$. If $f$ ever vanished, uniqueness for $f'=f/(b^2+x^2)$ (a linear ODE with continuous coefficient, since $b\\neq0$ keeps $b^2+x^2>0$) would force $f\\equiv0$, contradicting $f(0)=1$. So $f(x)>0$ for all $x$.",
          "Monotonicity: with $f>0$ and $b^2+x^2>0$, we get $f'(x)=\\dfrac{f(x)}{b^2+x^2}>0$ everywhere, for every nonzero $b$. Hence $f$ is increasing for all $b$ — (A) TRUE, (B) FALSE. The sign of $b$ never enters because only $b^2$ appears.",
          "Symmetry: define $g(x)=f(x)\\,f(-x)$. Then $g'(x)=f'(x)f(-x)-f(x)f'(-x)$.",
          "Substitute $f'(x)=\\dfrac{f(x)}{b^2+x^2}$ and $f'(-x)=\\dfrac{f(-x)}{b^2+x^2}$ (the denominator $b^2+(-x)^2=b^2+x^2$ is unchanged): $g'(x)=\\dfrac{f(x)f(-x)}{b^2+x^2}-\\dfrac{f(x)f(-x)}{b^2+x^2}=0.$",
          "So $g$ is constant; its value is $g(0)=f(0)^2=1$. Thus $f(x)f(-x)=1$ for all $x$ — (C) TRUE, with no integral computed.",
          "(D) would require $f$ even, i.e. $f(x)=f(-x)$; combined with (C) that would force $f(x)^2=1$, i.e. $f\\equiv1$, contradicting $f'>0$. So (D) is FALSE. Answer: (A), (C)."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2020, Paper 2, Q7. The elegant move is proving $f(x)f(-x)\\equiv1$ by showing its derivative vanishes — the symmetry falls out of the ODE itself, before you ever meet $\\tfrac1b\\tan^{-1}(x/b)$."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2026",
    "title": "The curve pinned at $y(1)=2$",
    "difficulty": 3,
    "task": "Find the value of $10\\,y(\\sqrt2)$.",
    "pyq": {
      "year": 2022,
      "paper": "2",
      "qno": "2"
    },
    "tags": [
      "variable separable",
      "partial fractions",
      "initial value problem",
      "2022"
    ],
    "figure": "",
    "statement": "If $y(x)$ is the solution of the differential equation $x\\,dy-(y^2-4y)\\,dx=0$ for $x>0$, with $y(1)=2$, and the slope of the curve $y=y(x)$ is never zero, then find the value of $10\\,y(\\sqrt2)$.",
    "answer": "$\\boxed{8}$",
    "trap": "The equilibrium solutions $y\\equiv0$ and $y\\equiv4$ make $y'=0$ everywhere, and $y=2$ sits exactly halfway between them. A hurried student divides by $y^2-4y$ without noticing that at the start point $y=2$ the ratio $\\frac{y-4}{y}=-1$ is negative, so the constant of integration is $C=0$ and the modulus must be resolved as $\\frac{4-y}{y}=+x^4$ (not $\\frac{y-4}{y}$). Getting the sign of the absolute value wrong flips the whole curve.",
    "solutions": [
      {
        "name": "Separation with partial fractions",
        "steps": [
          "Write the equation in separated form: $\\dfrac{dy}{y^2-4y}=\\dfrac{dx}{x}$.",
          "Decompose $\\dfrac{1}{y^2-4y}=\\dfrac{1}{y(y-4)}=\\dfrac14\\left(\\dfrac{1}{y-4}-\\dfrac{1}{y}\\right)$.",
          "Integrate both sides: $\\dfrac14\\left(\\ln|y-4|-\\ln|y|\\right)=\\ln x+C_1$, i.e. $\\dfrac14\\ln\\left|\\dfrac{y-4}{y}\\right|=\\ln x+C_1$.",
          "Apply $y(1)=2$: the left side is $\\dfrac14\\ln\\left|\\dfrac{2-4}{2}\\right|=\\dfrac14\\ln 1=0$ and the right side is $\\ln 1+C_1=C_1$, so $C_1=0$.",
          "Hence $\\left|\\dfrac{y-4}{y}\\right|=x^4$. Near the start point $y=2$ lies in $(0,4)$, so $y-4<0<y$ and $\\dfrac{y-4}{y}<0$; the correct signed relation is $\\dfrac{4-y}{y}=x^4$.",
          "Solve for $y$: $4-y=x^4 y\\Rightarrow y(1+x^4)=4\\Rightarrow y=\\dfrac{4}{1+x^4}$.",
          "Check: $y(1)=\\dfrac{4}{2}=2$ and $y'=-\\dfrac{16x^3}{(1+x^4)^2}\\ne0$ for $x>0$, so the slope is never zero, as required.",
          "Evaluate: $y(\\sqrt2)=\\dfrac{4}{1+(\\sqrt2)^4}=\\dfrac{4}{1+4}=\\dfrac45=0.8$, hence $10\\,y(\\sqrt2)=8$."
        ]
      },
      {
        "name": "Bernoulli substitution $u=1/y$",
        "steps": [
          "Since $y\\ne0$ on the curve, divide $x\\,dy=(y^2-4y)\\,dx$ by $y^2$: $\\dfrac{x}{y^2}\\dfrac{dy}{dx}=1-\\dfrac{4}{y}$.",
          "Let $u=\\dfrac1y$, so $\\dfrac{du}{dx}=-\\dfrac{1}{y^2}\\dfrac{dy}{dx}$. The equation becomes $-x\\dfrac{du}{dx}=1-4u$, i.e. $\\dfrac{du}{dx}-\\dfrac{4}{x}u=-\\dfrac1x$.",
          "This is linear in $u$ with integrating factor $x^{-4}$: $\\dfrac{d}{dx}\\!\\left(u\\,x^{-4}\\right)=-x^{-5}$.",
          "Integrate: $u\\,x^{-4}=\\dfrac{1}{4}x^{-4}+C$, so $u=\\dfrac14+Cx^4$.",
          "Apply $y(1)=2\\Rightarrow u(1)=\\tfrac12$: $\\tfrac12=\\tfrac14+C\\Rightarrow C=\\tfrac14$. Thus $u=\\dfrac{1+x^4}{4}$ and $y=\\dfrac1u=\\dfrac{4}{1+x^4}$.",
          "Then $y(\\sqrt2)=\\dfrac{4}{5}$ and $10\\,y(\\sqrt2)=8$."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2022, Paper 2, Q2. The “slope never zero” clause is not decoration — it rules out the constant equilibrium solutions $y\\equiv0,4$ and forces the branch that keeps $0<y<4$, which is exactly why $C=0$."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2026",
    "title": "Transient dies, oscillation survives",
    "difficulty": 4,
    "task": "Decide which statements about the solution are true.",
    "pyq": {
      "year": 2022,
      "paper": "2",
      "qno": "14"
    },
    "tags": [
      "linear first-order ODE",
      "integrating factor",
      "steady-state/transient behavior",
      "2022"
    ],
    "figure": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" font-size=\"12\"><line x1=\"20\" y1=\"120\" x2=\"305\" y2=\"120\" stroke=\"var(--ink3)\" stroke-width=\"1\"/><line x1=\"30\" y1=\"20\" x2=\"30\" y2=\"205\" stroke=\"var(--ink3)\" stroke-width=\"1\"/><text x=\"298\" y=\"134\" fill=\"var(--ink2)\">x</text><text x=\"14\" y=\"26\" fill=\"var(--ink2)\">y</text><path d=\"M30,120 C40,60 52,60 62,120 C72,175 84,175 94,120 C104,68 116,68 126,120 C136,168 148,168 158,120 C168,72 180,72 190,120 C200,166 212,166 222,120 C232,74 244,74 254,120 C264,165 276,165 286,120 C293,96 298,108 300,120\" fill=\"none\" stroke=\"var(--ink2)\" stroke-width=\"1\" opacity=\"0.55\"/><path d=\"M30,120 C42,55 54,55 66,120 C78,178 90,178 102,120 C114,66 126,66 138,120 C150,170 162,170 174,120 C186,70 198,70 210,120 C222,168 234,168 246,120 C258,72 270,72 282,120 C290,92 296,110 300,120\" fill=\"none\" stroke=\"var(--gold)\" stroke-width=\"2\"/><line x1=\"30\" y1=\"92\" x2=\"305\" y2=\"92\" stroke=\"var(--ink3)\" stroke-width=\"1\" stroke-dasharray=\"4 3\"/><text x=\"235\" y=\"88\" fill=\"var(--ink2)\">y=β</text><circle cx=\"46\" cy=\"92\" r=\"2.5\" fill=\"var(--gold)\"/><circle cx=\"126\" cy=\"92\" r=\"2.5\" fill=\"var(--gold)\"/><circle cx=\"210\" cy=\"92\" r=\"2.5\" fill=\"var(--gold)\"/><circle cx=\"282\" cy=\"92\" r=\"2.5\" fill=\"var(--gold)\"/><text x=\"90\" y=\"200\" fill=\"var(--ink2)\">steady oscillation about a level</text></svg>",
    "statement": "For $x\\in\\mathbb{R}$, let the function $y(x)$ be the solution of the differential equation $\\dfrac{dy}{dx}+12y=\\cos\\!\\left(\\dfrac{\\pi}{12}x\\right)$, with $y(0)=0$. Then, which of the following statements is (are) TRUE? (A) $y(x)$ is an increasing function. (B) $y(x)$ is a decreasing function. (C) There exists a real number $\\beta$ such that the line $y=\\beta$ intersects the curve $y=y(x)$ at infinitely many points. (D) $y(x)$ is a periodic function.",
    "answer": "(C)",
    "trap": "Because the transient $Ce^{-12x}$ decays, students are tempted to declare $y$ periodic (D) — but the exponential term never vanishes for finite $x$, so $y$ is only asymptotically periodic, not periodic. Likewise the sinusoidal particular part guarantees infinitely many oscillations for large $x$, so $y$ can be neither strictly increasing nor strictly decreasing; only (C) survives.",
    "solutions": [
      {
        "name": "Integrating factor + asymptotic analysis",
        "steps": [
          "The equation is linear with integrating factor $e^{\\int 12\\,dx}=e^{12x}$, so $\\dfrac{d}{dx}\\!\\left(y\\,e^{12x}\\right)=e^{12x}\\cos\\!\\left(\\dfrac{\\pi}{12}x\\right)$.",
          "Integrating the right side (standard $\\int e^{ax}\\cos bx\\,dx$) gives a particular solution of the form $y_p=A\\cos\\!\\left(\\dfrac{\\pi}{12}x\\right)+B\\sin\\!\\left(\\dfrac{\\pi}{12}x\\right)$ with $A=\\dfrac{12}{144+(\\pi/12)^2}$, $B=\\dfrac{\\pi/12}{144+(\\pi/12)^2}$.",
          "The full solution is $y=y_p+Ce^{-12x}$; the constant $C$ is fixed by $y(0)=0$, giving $C=-A$.",
          "As $x\\to+\\infty$ the transient $Ce^{-12x}\\to0$, so $y(x)\\to y_p(x)$, a genuine sinusoid of period $\\dfrac{2\\pi}{\\pi/12}=24$ that oscillates forever between $-\\sqrt{A^2+B^2}$ and $+\\sqrt{A^2+B^2}$.",
          "(A),(B): a function that oscillates for large $x$ cannot be monotonic on all of $\\mathbb{R}$ — both are FALSE.",
          "(D): the transient $Ce^{-12x}$ is present for every finite $x$ (it is nonzero for all $x$ since $C=-A\\ne0$), so $y(x+T)\\ne y(x)$ exactly; $y$ is not periodic — FALSE.",
          "(C): pick any level $\\beta$ strictly inside the eventual oscillation band, e.g. $\\beta=0$; since $y_p$ crosses that band infinitely often for large $x$ and the perturbation is exponentially small, the curve $y=y(x)$ meets $y=\\beta$ at infinitely many points — TRUE.",
          "Only statement (C) holds."
        ]
      },
      {
        "name": "Qualitative sign-of-slope argument",
        "steps": [
          "Read the ODE as $\\dfrac{dy}{dx}=\\cos\\!\\left(\\dfrac{\\pi}{12}x\\right)-12y$: the slope is the cosine forcing minus $12$ times the current height.",
          "Suppose, for contradiction, $y$ were increasing everywhere, so $y'\\ge0$ throughout. The bounded forcing $\\cos(\\pi x/12)\\in[-1,1]$ forces $y$ to stay bounded (the $-12y$ term drives large $|y|$ back toward $0$), so $y$ would converge to a finite limit $L$ with $y'\\to0$.",
          "But then $12y\\to\\cos(\\pi x/12)$ would have to hold in the limit, which is impossible because the right side keeps oscillating while $12L$ is constant — so $y'$ must change sign. This kills (A), and symmetrically (B).",
          "Boundedness plus persistent oscillation of $y'$ means $y$ itself oscillates within a bounded band for large $x$; by the Intermediate Value Theorem every horizontal line through the interior of that band is crossed infinitely often, giving (C).",
          "Periodicity (D) fails because the initial data $y(0)=0$ does not lie on the steady oscillation; the approach to it is monotone-in-envelope (exponential), so no finite period reproduces the curve exactly.",
          "Therefore the correct answer is (C) only."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2022, Paper 2, Q14. A model “steady-state vs transient” problem: the large decay rate ($12$) crushes the exponential fast, but “fast” is not “instant” — the transient is nonzero for every finite $x$, so the solution is asymptotically periodic, never exactly periodic."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2026",
    "title": "Three ODEs, one product: $y_1y_2y_3$",
    "difficulty": 4,
    "task": "Evaluate the limit.",
    "pyq": {
      "year": 2025,
      "paper": "1",
      "qno": "13"
    },
    "tags": [
      "first-order linear/separable ODE",
      "product of solutions",
      "limit at a point",
      "2025"
    ],
    "figure": "",
    "statement": "For all $x>0$, let $y_1(x),\\,y_2(x)$ and $y_3(x)$ be the functions satisfying\n$$\\frac{dy_1}{dx}-\\sin^2x\\,y_1=0,\\quad y_1(1)=\\sqrt5;$$\n$$\\frac{dy_2}{dx}-\\cos^2x\\,y_2=0,\\quad y_2(1)=\\tfrac13;$$\n$$\\frac{dy_3}{dx}-\\frac{2-x^3}{x^3}\\,y_3=0,\\quad y_3(1)=\\frac{3}{5e},$$\nrespectively. Then $\\displaystyle\\lim_{x\\to 0^+}\\frac{y_1(x)\\,y_2(x)\\,y_3(x)+2x}{e^{3x}\\sin x}$ is equal to __________.",
    "answer": "$\\boxed{2}$",
    "trap": "Multiplying the equations, the $\\sin^2x+\\cos^2x=1$ cancels the $-1$ inside $a_3=\\tfrac2{x^3}-1$, leaving $\\tfrac{P'}{P}=\\tfrac2{x^3}$ and $P=\\tfrac1{\\sqrt5}e^{-1/x^2}\\to0$. Because that decays faster than any power, only the $+2x$ in the numerator survives, giving the clean limit $2$.",
    "solutions": [
      {
        "name": "Multiply the three equations into one ODE for $P=y_1y_2y_3$",
        "steps": [
          "Each equation gives $\\dfrac{y_i'}{y_i}=a_i(x)$ with $a_1=\\sin^2x,\\ a_2=\\cos^2x,\\ a_3=\\dfrac{2-x^3}{x^3}=\\dfrac{2}{x^3}-1$.",
          "For $P=y_1y_2y_3$: $\\dfrac{P'}{P}=\\sin^2x+\\cos^2x+\\Big(\\dfrac2{x^3}-1\\Big)=1+\\dfrac2{x^3}-1=\\dfrac2{x^3}.$",
          "Integrate: $\\ln P=\\displaystyle\\int\\dfrac2{x^3}\\,dx=-\\dfrac1{x^2}+K$, so $P(x)=A\\,e^{-1/x^2}$. From $P(1)=\\sqrt5\\cdot\\tfrac13\\cdot\\dfrac3{5e}=\\dfrac1{\\sqrt5\\,e}$ and $P(1)=A e^{-1}$, we get $A=\\dfrac1{\\sqrt5}$, so $P(x)=\\dfrac1{\\sqrt5}e^{-1/x^2}$.",
          "As $x\\to0^+$, $e^{-1/x^2}\\to0$ faster than any power, so $P(x)=o(x)$. Then $\\dfrac{P(x)+2x}{e^{3x}\\sin x}=\\dfrac{2x+o(x)}{x+o(x)}\\to\\boxed{2}$."
        ]
      },
      {
        "name": "Leading-order Taylor",
        "steps": [
          "Denominator: $e^{3x}\\sin x=(1+3x+\\cdots)(x-\\tfrac{x^3}6+\\cdots)=x+3x^2+O(x^3)$, leading term $x$.",
          "Numerator: $P(x)+2x$ with $P(x)=\\tfrac1{\\sqrt5}e^{-1/x^2}$. Since $e^{-1/x^2}$ decays faster than every power of $x$, $P(x)$ contributes nothing to any finite Taylor order, so the numerator $=2x+o(x)$.",
          "Hence $\\displaystyle\\lim_{x\\to0^+}\\dfrac{P(x)+2x}{e^{3x}\\sin x}=\\dfrac{2x}{x}=2.$",
          "The product trick is the key: three coupled unknowns collapse to a single integration $\\ln P=\\int 2/x^3$."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2025, Paper 1, Q13. The product $y_1y_2y_3=\\tfrac1{\\sqrt5}e^{-1/x^2}\\to0$ super-fast, so $\\lim_{x\\to0^+}\\dfrac{y_1y_2y_3+2x}{e^{3x}\\sin x}=2$."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2026",
    "title": "Homogeneous curve through $(1,0)$",
    "difficulty": 3,
    "task": "Evaluate the given expression.",
    "pyq": {
      "year": 2025,
      "paper": "2",
      "qno": "9"
    },
    "tags": [
      "homogeneous differential equation",
      "substitution y=vx",
      "evaluating solution",
      "2025"
    ],
    "figure": "<svg viewBox=\"0 0 320 220\" xmlns=\"http://www.w3.org/2000/svg\" font-size=\"12\">\n  <line x1=\"20\" y1=\"185\" x2=\"305\" y2=\"185\" stroke=\"var(--ink3)\" stroke-width=\"1.4\"/>\n  <line x1=\"48\" y1=\"200\" x2=\"48\" y2=\"18\" stroke=\"var(--ink3)\" stroke-width=\"1.4\"/>\n  <text x=\"298\" y=\"200\" fill=\"var(--ink2)\">x</text>\n  <text x=\"34\" y=\"26\" fill=\"var(--ink2)\">y</text>\n  <path d=\"M 78 185 Q 150 140 210 92 Q 250 60 290 34\" fill=\"none\" stroke=\"var(--gold)\" stroke-width=\"2\"/>\n  <circle cx=\"78\" cy=\"185\" r=\"3\" fill=\"var(--gold)\"/>\n  <text x=\"62\" y=\"200\" fill=\"var(--ink2)\">(1,0)</text>\n  <line x1=\"48\" y1=\"185\" x2=\"78\" y2=\"185\" stroke=\"var(--ink2)\" stroke-width=\"1\" stroke-dasharray=\"3 3\"/>\n  <circle cx=\"165\" cy=\"120\" r=\"2.5\" fill=\"var(--ink3)\"/>\n  <text x=\"150\" y=\"112\" fill=\"var(--ink2)\">(e, e/2)</text>\n  <circle cx=\"255\" cy=\"56\" r=\"2.5\" fill=\"var(--ink3)\"/>\n  <text x=\"236\" y=\"48\" fill=\"var(--ink2)\">(e², 2e²/3)</text>\n  <text x=\"200\" y=\"175\" fill=\"var(--ink2)\">y = x·ln x / (1+ln x)</text>\n</svg>",
    "statement": "Let $y(x)$ be the solution of the differential equation\n$$x^2\\frac{dy}{dx}=xy+x^2-y^2,\\qquad x\\ge \\frac{1}{e},$$\nsatisfying $y(1)=0$. Then the value of $\\dfrac{2\\,y(e)-2}{y(e^2)}$ is __________.",
    "answer": "$\\boxed{0.30}$",
    "trap": "The tempting shortcut is to guess a “nice” closed form like $\\tfrac{x\\ln x}{1+\\ln x}$ — but that does NOT satisfy this ODE. The equation is homogeneous (degree-2 over degree-2), giving $\\tfrac{1+v}{1-v}=x^2$ and $y=\\tfrac{x(x^2-1)}{x^2+1}=x\\tanh(\\ln x)$; the final value is $\\approx0.30$, not $0.75$.",
    "solutions": [
      {
        "name": "Homogeneous substitution $y=vx$",
        "steps": [
          "Divide by $x^2$: $\\dfrac{dy}{dx}=1+\\dfrac yx-\\Big(\\dfrac yx\\Big)^2$, homogeneous. Put $y=vx$: $v+x\\dfrac{dv}{dx}=1+v-v^2$, so $x\\dfrac{dv}{dx}=1-v^2$.",
          "Separate and integrate: $\\dfrac{dv}{1-v^2}=\\dfrac{dx}{x}\\Rightarrow \\tfrac12\\ln\\dfrac{1+v}{1-v}=\\ln x+C$. From $y(1)=0$ ($v=0$ at $x=1$), $C=0$, so $\\dfrac{1+v}{1-v}=x^2$.",
          "Solve: $v=\\dfrac{x^2-1}{x^2+1}$, hence $y(x)=x\\cdot\\dfrac{x^2-1}{x^2+1}$. (One checks $y(1)=0$ and that it satisfies the ODE exactly.)",
          "Evaluate: $y(e)=\\dfrac{e(e^2-1)}{e^2+1}\\approx2.0702$ and $y(e^2)=\\dfrac{e^2(e^4-1)}{e^4+1}\\approx7.1233$. Then $\\dfrac{2y(e)-2}{y(e^2)}=\\dfrac{2.1404}{7.1233}\\approx\\boxed{0.30}$."
        ]
      },
      {
        "name": "Verify the closed form, then compute",
        "steps": [
          "Claim $y=\\dfrac{x(x^2-1)}{x^2+1}$. At $x=1$, $y=0$ ✓. Writing $y=x\\tanh(\\ln x)$ makes $\\dfrac yx=\\tanh(\\ln x)$ and $1-\\big(\\tfrac yx\\big)^2=\\operatorname{sech}^2(\\ln x)$.",
          "Differentiate: $\\dfrac{dy}{dx}=\\tanh(\\ln x)+\\operatorname{sech}^2(\\ln x)$, while $1+\\dfrac yx-\\big(\\tfrac yx\\big)^2=1+\\tanh(\\ln x)-\\tanh^2(\\ln x)=\\tanh(\\ln x)+\\operatorname{sech}^2(\\ln x)$. They match, so the ODE holds.",
          "Numerically $y(e)=e\\tanh1=2.0702$, $y(e^2)=e^2\\tanh2=7.1233$.",
          "Therefore $\\dfrac{2y(e)-2}{y(e^2)}=\\dfrac{2(2.0702)-2}{7.1233}=0.3005\\approx0.30$."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2025, Paper 2, Q9. The homogeneous substitution gives $y=\\dfrac{x(x^2-1)}{x^2+1}$; then $\\dfrac{2y(e)-2}{y(e^2)}\\approx0.30$."
  }
];
