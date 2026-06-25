/* PROBABILITY — Chance & Uncertainty · 100 original problems, 10 chapters, adversarially Python-verified. */
window.PROBLEMS = [
  {
    "theme": "classical",
    "themeLabel": "Classical & Geometric Probability",
    "title": "Does the Center Survive the Polygon?",
    "difficulty": 4,
    "task": "Determine",
    "tags": [
      "geometric probability",
      "circle",
      "convex hull",
      "symmetry",
      "semicircle"
    ],
    "statement": "Five points are chosen independently and uniformly at random on the circumference of a circle. They are the vertices of a (convex) pentagon. \\[\\text{Find the probability that the center of the circle lies strictly inside this pentagon.}\\]",
    "answer": "\\[\\boxed{\\dfrac{11}{16}}\\]",
    "trap": "Trying to compute the favorable area of pentagon-configurations directly, or assuming the center is 'usually' inside. The seductive error is to forget the clean equivalence: the center fails to be inside EXACTLY when all five points lie in some common open semicircle. People also miscount by fixing one point as the 'start' of the bad arc and then double-counting, or by using $\\binom{5}{?}$ guesses. The correct count uses that, almost surely, exactly one point can serve as the clockwise-most point of a covering semicircle.",
    "solutions": [
      {
        "name": "Semicircle complement",
        "steps": [
          "The center lies inside the convex hull of the points iff the points are NOT all contained in some open half-plane through the center, i.e. iff they do not all lie in a common semicircle.",
          "Compute $P(\\text{all }n\\text{ in some semicircle})$. For each point $i$, let $A_i$ be the event that the semicircle starting at point $i$ and sweeping clockwise $180^\\circ$ contains all the others. Almost surely the events $A_i$ are disjoint (at most one point is the clockwise-most of a covering arc).",
          "Each $A_i$ requires the other $n-1$ points to fall in a fixed semicircle: probability $(1/2)^{n-1}$. So $P(\\text{semicircle})=n\\,(1/2)^{n-1}$.",
          "For $n=5$: $P(\\text{semicircle})=5/16$, hence $P(\\text{center inside})=1-5/16=\\boxed{11/16}$."
        ]
      },
      {
        "name": "Gap (spacing) argument",
        "steps": [
          "Sort the five angles; they split the circle into $5$ arcs (gaps) summing to $2\\pi$. The points all lie in a semicircle iff some gap is $\\ge\\pi$ (the complementary arc is the semicircle that holds all points).",
          "At most one gap can exceed $\\pi$. By symmetry of the $5$ gaps, $P(\\text{gap}_1\\ge\\pi)$ is the same for each, so $P(\\exists\\,\\text{gap}\\ge\\pi)=5\\,P(\\text{gap}_1\\ge\\pi)$.",
          "For uniform spacings, $P(\\text{a particular gap}\\ge\\pi)=(1-\\tfrac{\\pi}{2\\pi})^{n-1}=(1/2)^{4}=1/16$. Thus the bad probability is $5/16$.",
          "Therefore the center is inside with probability $1-5/16=\\boxed{11/16}$."
        ]
      },
      {
        "name": "Monte Carlo confirmation",
        "steps": [
          "Sample $8\\times10^6$ quintuples of uniform angles; sort and form the five gaps including the wrap-around gap.",
          "Flag a trial as 'all in a semicircle' iff the maximum gap is $\\ge\\pi$; this matches the bad event.",
          "Empirical bad probability $\\approx 0.3123\\approx 5/16$, so center-inside $\\approx 0.6877$.",
          "This agrees with $\\boxed{11/16}$."
        ]
      }
    ],
    "remark": "Insight: the messy-sounding 'center inside a random polygon' collapses to the one-line semicircle criterion. The formula $1-n/2^{n-1}$ unifies the $n=3$ triangle ($1/4$), $n=4$ quadrilateral ($1/2$), and $n=5$ pentagon ($11/16$) cases — a beautiful instance of replacing area-integration with a counting symmetry."
  },
  {
    "theme": "classical",
    "themeLabel": "Classical & Geometric Probability",
    "title": "The Impatient and the Patient",
    "difficulty": 3,
    "task": "Evaluate",
    "tags": [
      "geometric probability",
      "meeting problem",
      "area ratio",
      "asymmetry"
    ],
    "statement": "Anaya and Bhuvan each agree to come to a cafe at some moment chosen independently and uniformly at random during the hour from $3{:}00$ to $4{:}00$. Anaya, impatient, will wait only $10$ minutes for the other before leaving; Bhuvan, patient, will wait $15$ minutes. \\[\\text{Find the probability that the two of them actually meet.}\\]",
    "answer": "\\[\\boxed{\\dfrac{107}{288}}\\]",
    "trap": "Using the symmetric meeting formula with a single waiting time, e.g. averaging $10$ and $15$ to $12.5$ and writing $2\\cdot\\frac{w}{60}-\\frac{w^2}{60^2}$ with one $w$. That gives $\\frac{215}{576}\\approx 0.3733$, which is wrong. The waiting times are asymmetric, so the meeting band $-10\\le a-b\\le 15$ is NOT symmetric about the diagonal; the two cut-off triangles have DIFFERENT legs ($45$ and $50$), not equal ones, and no single $w$ reproduces them.",
    "solutions": [
      {
        "name": "Strip area",
        "steps": [
          "Let $a,b\\in[0,60]$ be the arrival minutes. Anaya is present on $[a,a+10]$, Bhuvan on $[b,b+15]$. They meet iff these intervals overlap: $a\\le b+15$ and $b\\le a+10$, i.e. $-10\\le a-b\\le 15$.",
          "Total sample area $=60^2=3600$. The non-meeting region splits into two right triangles: $a-b>15$ (legs $60-15=45$) and $b-a>10$ (legs $60-10=50$).",
          "Non-meeting area $=\\tfrac12(45^2)+\\tfrac12(50^2)=1012.5+1250=2262.5$.",
          "Meeting area $=3600-2262.5=1337.5$, so probability $=\\dfrac{1337.5}{3600}=\\dfrac{2675}{7200}=\\boxed{\\dfrac{107}{288}}$."
        ]
      },
      {
        "name": "Direct integration",
        "steps": [
          "Probability $=\\dfrac{1}{3600}\\displaystyle\\int_0^{60}\\big(\\text{length of }b\\text{ with }a-15\\le b\\le a+10\\big)\\,da$, since $a\\le b+15$ and $b\\le a+10$ force $b\\in[a-15,\\,a+10]$.",
          "For $a\\in[15,50]$ the full window $[a-15,a+10]$ of length $25$ lies inside $[0,60]$; near the two edges the window is clipped by $0$ and $60$.",
          "Summing the clipped trapezoids, $\\int_0^{60}\\min(60,a+10)-\\max(0,a-15)\\,da=1337.5$.",
          "Hence probability $=1337.5/3600=\\boxed{107/288}$."
        ]
      },
      {
        "name": "Monte Carlo",
        "steps": [
          "Draw $2\\times10^7$ pairs $(a,b)$ uniform on $[0,60]^2$ and test $-10\\le a-b\\le 15$.",
          "Empirical frequency $\\approx 0.3715$.",
          "Compare to $107/288\\approx 0.37153$.",
          "Match confirms $\\boxed{107/288}$."
        ]
      }
    ],
    "remark": "Insight: the only structural change from the textbook two-friends meeting problem is that the tolerance band is two-sided with unequal half-widths. Watch the orientation carefully: because Bhuvan ($15$ min) is the patient one, the band reaches farther on the side where Anaya arrives first, giving $a-b\\le 15$ and $b-a\\le 10$. Geometry handles the asymmetry effortlessly by subtracting two unequal corner triangles, where a memorized symmetric formula silently assumes one waiting time and fails."
  },
  {
    "theme": "classical",
    "themeLabel": "Classical & Geometric Probability",
    "title": "Break the Longer Half",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "geometric probability",
      "broken stick",
      "triangle inequality",
      "conditional density",
      "logarithm"
    ],
    "statement": "A stick of length $1$ is broken at a point chosen uniformly at random, giving two pieces. The longer of the two pieces is then broken again at a point chosen uniformly at random along its length. \\[\\text{Find the probability that the three resulting pieces can form a (nondegenerate) triangle.}\\]",
    "answer": "\\[\\boxed{2\\ln 2-1}\\]",
    "trap": "Assuming the answer is the classic $1/4$ (which is the probability for breaking the stick at TWO independent uniform points). Here the second cut is restricted to the LONGER piece, which changes the geometry entirely: the never-broken short piece is automatically $\\le 1/2$, so the binding constraints fall only on the two new pieces, and the conditional length of the longer piece is not uniform on $[1/2,1]$.",
    "solutions": [
      {
        "name": "Condition on the longer piece",
        "steps": [
          "First cut at $x\\sim U(0,1)$; let $L=\\max(x,1-x)\\in[\\tfrac12,1]$ be the longer piece and $1-L\\le\\tfrac12$ the short piece, which never gets cut.",
          "Cut $L$ at $y\\sim U(0,L)$, giving pieces $y$ and $L-y$. Since the three lengths sum to $1$, a triangle forms iff every piece is $<\\tfrac12$. The short piece satisfies $1-L\\le\\tfrac12$ automatically, so we only need $y<\\tfrac12$ and $L-y<\\tfrac12$, i.e. $L-\\tfrac12<y<\\tfrac12$.",
          "Given $L$, this $y$-interval has length $\\tfrac12-(L-\\tfrac12)=1-L$ and lies inside $[0,L]$, so $P(\\text{triangle}\\mid L)=\\dfrac{1-L}{L}$.",
          "The density of $L$ on $[\\tfrac12,1]$ is $2$ (the two symmetric branches $x$ and $1-x$ both map onto $L$). Hence $P=\\displaystyle\\int_{1/2}^{1}\\frac{1-L}{L}\\,2\\,dL=2\\big[\\ln L-L\\big]_{1/2}^{1}=2\\big[(0-1)-(\\ln\\tfrac12-\\tfrac12)\\big]=2\\ln 2-1.$",
          "Thus $P=\\boxed{2\\ln 2-1}\\approx 0.3863.$"
        ]
      },
      {
        "name": "Direct double integral",
        "steps": [
          "By symmetry, the longer piece $L$ has density $2$ on $[\\tfrac12,1]$, and the second cut $y$ is uniform on $[0,L]$ with density $1/L$.",
          "$P=\\displaystyle\\int_{1/2}^{1}\\!\\!\\int_{0}^{L}\\frac{2}{L}\\,\\mathbf 1\\{L-\\tfrac12<y<\\tfrac12\\}\\,dy\\,dL$.",
          "The inner integral equals $\\dfrac{2}{L}\\cdot(1-L)$, since the admissible $y$-range has length $1-L$.",
          "$\\displaystyle\\int_{1/2}^{1}\\frac{2(1-L)}{L}\\,dL=2\\big[\\ln L-L\\big]_{1/2}^{1}=2\\ln 2-1=\\boxed{2\\ln 2-1}\\approx 0.3863.$"
        ]
      },
      {
        "name": "Monte Carlo",
        "steps": [
          "Sample many first cuts $x\\sim U(0,1)$, identify the longer piece $L=\\max(x,1-x)$, then sample $y\\sim U(0,L)$.",
          "Form the three pieces $\\{1-L,\\;y,\\;L-y\\}$ and test that all three are $<\\tfrac12$.",
          "Over $2\\times10^{7}$ trials the empirical probability is $\\approx 0.38635$.",
          "This matches $2\\ln 2-1\\approx 0.38629$ to within $5\\times10^{-5}$, confirming the closed form (and ruling out the classic value $0.25$)."
        ]
      }
    ],
    "remark": "Insight: the instruction 'break the longer piece' silently guarantees one triangle inequality for free (the untouched short piece is already $\\le\\tfrac12$) and biases the cut location, turning the flat classic answer $1/4$ into a logarithmic answer. The lesson is that conditioning on 'longer' is a hidden re-weighting of where the cut lands, not a harmless relabeling."
  },
  {
    "theme": "classical",
    "themeLabel": "Classical & Geometric Probability",
    "title": "Bertrand's Midpoint Coin",
    "difficulty": 4,
    "task": "Find",
    "tags": [
      "geometric probability",
      "random chord",
      "bertrand paradox",
      "disk",
      "area ratio"
    ],
    "statement": "A point $P$ is chosen uniformly at random inside a disk of radius $R$ (uniform with respect to area). Draw the chord of the disk having $P$ as its midpoint. \\[\\text{Find the probability that this chord is longer than the radius } R.\\]",
    "answer": "\\[\\boxed{\\dfrac{3}{4}}\\]",
    "trap": "Invoking a reflex that the answer to a random-chord question is $1/3$ or $1/2$ from the Bertrand paradox without checking which randomization is specified. Here the chord is pinned by its midpoint being a uniform-area point, the third Bertrand method; the random-endpoint or random-radius convention would give a different, wrong number. A second trap is to confuse the threshold with the famous chord-exceeds-the-inscribed-triangle-side question (which forces $d<R/2$ and gives $1/4$); here the threshold is the radius $R$, not the side $R\\sqrt3$, so the condition is $d<\\tfrac{\\sqrt3}{2}R$ and the answer is $3/4$. A third trap is forgetting that the chord length depends only on the distance $d=|OP|$, via $2\\sqrt{R^2-d^2}$.",
    "solutions": [
      {
        "name": "Reduce to a distance condition",
        "steps": [
          "If the midpoint $P$ is at distance $d$ from the center $O$, the chord it bisects is perpendicular to $OP$, so its half-length is $\\sqrt{R^2-d^2}$ and the chord has length $2\\sqrt{R^2-d^2}$.",
          "Require $2\\sqrt{R^2-d^2}>R \\iff R^2-d^2>R^2/4 \\iff d^2<\\tfrac34 R^2 \\iff d<\\tfrac{\\sqrt3}{2}R$.",
          "Since $P$ is uniform by area, $P(d<r)=\\pi r^2/(\\pi R^2)=(r/R)^2$.",
          "With $r=\\tfrac{\\sqrt3}{2}R$: probability $=\\big(\\tfrac{\\sqrt3}{2}\\big)^2=\\boxed{\\dfrac34}.$"
        ]
      },
      {
        "name": "Annulus picture",
        "steps": [
          "The favorable midpoints form the inner disk $d<\\tfrac{\\sqrt3}{2}R$; the unfavorable midpoints form the outer annulus $\\tfrac{\\sqrt3}{2}R\\le d\\le R$.",
          "Area of the favorable disk $=\\pi\\big(\\tfrac{\\sqrt3}{2}R\\big)^2=\\tfrac34\\pi R^2$; total area $=\\pi R^2$.",
          "Uniform-by-area probability is the area ratio $\\tfrac34$.",
          "Hence the chord exceeds $R$ with probability $\\boxed{\\dfrac34}.$"
        ]
      },
      {
        "name": "Radial density (integration)",
        "steps": [
          "For a uniform-area point the radial density is $f(d)=\\dfrac{2d}{R^2}$ on $[0,R]$ (since $P(d<r)=r^2/R^2$, differentiate).",
          "The favorable event is $d<\\tfrac{\\sqrt3}{2}R$, so the probability is $\\displaystyle\\int_0^{\\frac{\\sqrt3}{2}R}\\frac{2d}{R^2}\\,dd=\\Big[\\frac{d^2}{R^2}\\Big]_0^{\\frac{\\sqrt3}{2}R}.$",
          "This evaluates to $\\dfrac{(\\sqrt3/2)^2R^2}{R^2}=\\dfrac34.$",
          "So $P(\\text{chord}>R)=\\boxed{\\dfrac34}.$"
        ]
      }
    ],
    "remark": "Insight: a 'random chord' problem is meaningless until the randomization is fixed; once 'uniform-area midpoint' is named, the whole problem collapses to a one-line area ratio. Note the threshold matters too: chord $>R$ gives $3/4$, while the celebrated Bertrand question chord $>$ side of the inscribed equilateral triangle ($R\\sqrt3$) gives $1/4$ from the same setup. This is the sharp, honest face of the Bertrand paradox."
  },
  {
    "theme": "classical",
    "themeLabel": "Classical & Geometric Probability",
    "title": "All Three at Once",
    "difficulty": 4,
    "task": "Determine",
    "tags": [
      "geometric probability",
      "range of uniforms",
      "simultaneous overlap",
      "meeting problem",
      "order statistics"
    ],
    "statement": "Three friends arrive at a coffee shop at three moments chosen independently and uniformly at random during a one-hour window. Each stays for exactly $15$ minutes after arriving (a quarter of the hour) and then leaves. \\[\\text{Find the probability that at some single instant all three are present in the shop together.}\\]",
    "answer": "\\[\\boxed{\\dfrac{5}{32}}\\]",
    "trap": "Computing the probability that the friends meet PAIRWISE and combining them, or reasoning 'each pair overlaps with prob $p$ so all three with $p^3$'. Pairwise overlaps are NOT independent, and three intervals can pairwise overlap yet share no common instant. The clean criterion is that ALL three equal-length intervals share a point iff the range (max minus min) of the three arrival times is $\\le 15$ minutes.",
    "solutions": [
      {
        "name": "Common-overlap criterion",
        "steps": [
          "Scale the hour to $[0,1]$ and the stay to $w=\\tfrac14$. Friend $i$ occupies $[x_i,x_i+w]$. The three intervals have a common point iff $\\max_i x_i\\le \\min_i x_i+w$, i.e. $\\text{range}(x_1,x_2,x_3)\\le w$ (all intervals have equal length).",
          "For $n$ i.i.d. uniforms on $[0,1]$, $P(\\text{range}\\le r)=n\\,r^{\\,n-1}-(n-1)\\,r^{\\,n}$.",
          "With $n=3,\\ r=\\tfrac14$: $P=3\\cdot\\tfrac1{16}-2\\cdot\\tfrac1{64}=\\tfrac{3}{16}-\\tfrac{1}{32}=\\tfrac{6-1}{32}=\\boxed{\\dfrac{5}{32}}.$"
        ]
      },
      {
        "name": "Volume integral",
        "steps": [
          "By symmetry, condition on the minimum arrival $m=\\min x_i$ and require the other two to land within $[m,m+w]$.",
          "$P=\\displaystyle\\int_0^{1}3\\big(\\min(m+w,1)-m\\big)^2\\,dm$; the bulk $m\\in[0,1-w]$ gives $\\int_0^{1-w}3w^2\\,dm=3w^2(1-w)$ and the boundary strip $m\\in[1-w,1]$ adds $\\int_{1-w}^{1}3(1-m)^2\\,dm=w^3$.",
          "Summing, $P=3w^2(1-w)+w^3=3w^2-2w^3=3(\\tfrac14)^2-2(\\tfrac14)^3=\\tfrac{3}{16}-\\tfrac{1}{32}=\\tfrac{5}{32}$.",
          "Thus $\\boxed{5/32}$."
        ]
      },
      {
        "name": "Monte Carlo",
        "steps": [
          "Sample $8\\times10^6$ triples of uniform arrivals on $[0,1]$ and test the physical criterion $\\max x_i\\le\\min x_i+0.25$.",
          "Flag every trial whose three $15$-minute intervals share a common instant.",
          "Empirical probability $\\approx 0.1564$.",
          "Matches $5/32=0.15625$, confirming the answer."
        ]
      }
    ],
    "remark": "Insight: 'all three present at once' is a statement about the RANGE of the arrivals, not about pairwise gaps — equal-length intervals have a common point precisely when their starts cluster within one stay-length. On the line ($1$-D), Helly's theorem says pairwise overlap of intervals already forces a common point, but the count is cleanest when bookkept directly through the range $\\max-\\min$."
  },
  {
    "theme": "classical",
    "themeLabel": "Classical & Geometric Probability",
    "title": "A Quadratic with Two Bad Roots",
    "difficulty": 3,
    "task": "Evaluate",
    "tags": [
      "geometric probability",
      "unit square",
      "quadratic roots",
      "discriminant",
      "area under curve"
    ],
    "statement": "A point $(p,q)$ is chosen uniformly at random in the unit square $[0,1]\\times[0,1]$. Consider the quadratic equation \\[t^{2}+p\\,t+q=0.\\] \\[\\text{Find the probability that this equation has two real roots, both of which are negative.}\\]",
    "answer": "\\[\\boxed{\\dfrac{1}{12}}\\]",
    "trap": "Stopping at the discriminant condition $p^2\\ge 4q$ and reporting that area, forgetting the 'both roots negative' requirement; or conversely doing wasted casework on sign conditions that are automatically satisfied. Since $p,q\\in[0,1]$, the sum of roots $-p\\le 0$ and the product $q\\ge 0$ are essentially free (almost surely strict), so the ONLY binding constraint is $q\\le p^2/4$ — but one must verify that, not assume extra sign work is needed.",
    "solutions": [
      {
        "name": "Translate root conditions",
        "steps": [
          "Roots are real iff the discriminant satisfies $p^2-4q\\ge 0$, i.e. $q\\le p^2/4$.",
          "By Vieta, the sum of the roots is $-p$ and the product is $q$. Both roots are negative iff the sum is negative and the product is positive, i.e. $-p<0$ and $q>0$; on $[0,1]^2$ these hold for almost every point (they fail only on the measure-zero edges $p=0$ or $q=0$). So they remove no area.",
          "The favorable set is $\\{(p,q):0\\le q\\le p^2/4,\\ 0\\le p\\le 1\\}$ (note $p^2/4\\le 1/4<1$, so the curve stays inside the square).",
          "Area $=\\displaystyle\\int_0^1 \\frac{p^2}{4}\\,dp=\\frac{1}{4}\\cdot\\frac{1}{3}=\\frac{1}{12}=\\boxed{\\dfrac1{12}}.$"
        ]
      },
      {
        "name": "Direct root sign check (no Vieta)",
        "steps": [
          "When real, the roots are $t=\\dfrac{-p\\pm\\sqrt{p^2-4q}}{2}$; the larger is $t_{+}=\\dfrac{-p+\\sqrt{p^2-4q}}{2}$.",
          "For $q>0$ we have $\\sqrt{p^2-4q}<\\sqrt{p^2}=p$, so $t_{+}<0$; hence whenever the roots are real and $q>0$, the larger — and therefore both — root is automatically negative.",
          "Thus the event reduces exactly to the real-roots region $q\\le p^2/4$ inside the square, with no further restriction.",
          "Probability $=\\displaystyle\\int_0^1 \\frac{p^2}{4}\\,dp=\\boxed{\\dfrac1{12}}.$"
        ]
      },
      {
        "name": "Geometry of the region",
        "steps": [
          "The boundary $q=p^2/4$ is a parabola from $(0,0)$ to $(1,\\tfrac14)$, lying entirely inside the unit square.",
          "The favorable region is the thin sliver between the $p$-axis and this parabola.",
          "Its area accumulates as $\\tfrac14\\int_0^1 p^2\\,dp=\\tfrac14\\cdot\\tfrac13=\\tfrac1{12}$.",
          "Probability $=\\boxed{\\dfrac1{12}}.$"
        ]
      },
      {
        "name": "Monte Carlo",
        "steps": [
          "Sample $3\\times 10^{7}$ points $(p,q)$ in the unit square; form the actual roots and test that both are real and negative.",
          "Empirical frequency $\\approx 0.08332$.",
          "Compare to $1/12\\approx 0.08333$.",
          "Confirms $\\boxed{\\dfrac1{12}}.$"
        ]
      }
    ],
    "remark": "Insight: the discriminant is necessary, but the conceptual gift is that the coefficient signs in $[0,1]$ pre-guarantee Vieta's sign conditions, so 'two negative roots' collapses to a single inequality $q\\le p^2/4$. Recognizing which constraints are vacuous — here the sum-negative and product-positive conditions — is the whole problem; the area is then a one-line integral."
  },
  {
    "theme": "classical",
    "themeLabel": "Classical & Geometric Probability",
    "title": "The Half-Spacing Needle",
    "difficulty": 4,
    "task": "Find",
    "tags": [
      "geometric probability",
      "buffon needle",
      "integration over angle",
      "expected crossings"
    ],
    "statement": "A thin needle of length $\\ell$ equal to the spacing $d$ between the parallel rulings of a wide floor is dropped at random (position and orientation uniform and independent). \\[\\text{Find the probability that the needle crosses one of the lines.}\\]",
    "answer": "\\[\\boxed{\\dfrac{2}{\\pi}}\\]",
    "trap": "Treating $\\ell=d$ as a degenerate case where the needle 'always' or 'never' crosses, or plugging the long-needle formula $P=\\frac{2}{\\pi}\\!\\left(\\frac{\\ell}{d}-\\sqrt{(\\ell/d)^2-1}+\\operatorname{arcsec}\\frac{\\ell}{d}\\right)$ while mishandling its $\\operatorname{arccos}$ term. At $\\ell=d$ exactly we sit on the borderline between the short- and long-needle regimes; the short-needle formula $\\frac{2\\ell}{\\pi d}$ stays valid because the event of crossing two lines has measure zero, and the long-needle expression continuously limits to the same value (its $\\sqrt{\\;}$ and $\\operatorname{arccos}$ pieces both vanish as $\\ell/d\\to 1^{+}$). The danger is naive formula-matching at the seam.",
    "solutions": [
      {
        "name": "Average projection",
        "steps": [
          "Let $y\\in[0,d/2]$ be the distance from the needle's center to the nearest line (uniform), and $\\theta\\in[0,\\pi/2]$ the acute angle to the lines (uniform and independent).",
          "The needle crosses iff $y\\le \\tfrac{\\ell}{2}\\sin\\theta$. For $\\ell=d$ we have $\\tfrac{\\ell}{2}\\sin\\theta\\le d/2$ for all $\\theta$, so the favorable region never spills past $y=d/2$ — the short-needle geometry holds exactly and no double-crossing occurs.",
          "$P=\\dfrac{1}{(d/2)(\\pi/2)}\\displaystyle\\int_0^{\\pi/2}\\frac{\\ell}{2}\\sin\\theta\\,d\\theta=\\frac{4}{\\pi d}\\cdot\\frac{\\ell}{2}\\cdot 1=\\frac{2\\ell}{\\pi d}.$",
          "With $\\ell=d$: $P=\\dfrac{2}{\\pi}=\\boxed{\\dfrac{2}{\\pi}}.$"
        ]
      },
      {
        "name": "Expected number of crossings",
        "steps": [
          "The expected number of line-crossings of a needle of length $\\ell$ is $E[N]=\\dfrac{2\\ell}{\\pi d}$ — by additivity of expectation over infinitesimal segments it is linear in length and independent of the needle's shape.",
          "For $\\ell=d$ this gives $E[N]=\\dfrac{2}{\\pi}<1$, and a needle of length $\\ell=d$ can cross at most one line except on a null set, so $N\\in\\{0,1\\}$ almost surely and $E[N]=P(N\\ge 1)$.",
          "Hence $P(\\text{cross})=E[N]=\\dfrac{2}{\\pi}$.",
          "$\\boxed{2/\\pi}$."
        ]
      },
      {
        "name": "Continuity from the long-needle formula",
        "steps": [
          "For $\\ell\\ge d$ the long-needle probability is $P(t)=\\dfrac{2}{\\pi}\\!\\left(t-\\sqrt{t^2-1}+\\operatorname{arccos}\\tfrac{1}{t}\\right)$ with $t=\\ell/d$.",
          "Take the one-sided limit $t\\to 1^{+}$: $\\sqrt{t^2-1}\\to 0$ and $\\operatorname{arccos}(1/t)\\to\\operatorname{arccos}(1)=0$, so $P(t)\\to\\dfrac{2}{\\pi}\\,(1-0+0)=\\dfrac{2}{\\pi}.$",
          "This matches the short-needle value, confirming the true probability is continuous across $\\ell=d$ and equals the borderline value with no jump.",
          "$\\boxed{2/\\pi}.$"
        ]
      },
      {
        "name": "Monte Carlo",
        "steps": [
          "Sample $2\\times10^{7}$ drops with $\\ell=d$: center $y_c\\sim U(0,d)$ within a strip, full orientation $\\phi\\sim U(0,2\\pi)$, endpoints $y_c\\pm\\tfrac{\\ell}{2}\\sin\\phi$.",
          "Count a crossing whenever the two endpoints straddle an integer multiple of $d$ (exact geometry, not a proxy).",
          "Empirical probability $\\approx 0.63665$, with maximum crossings observed equal to $1$ and zero double-crossings.",
          "Matches $2/\\pi\\approx 0.63662$, confirming $\\boxed{2/\\pi}$."
        ]
      }
    ],
    "remark": "Insight: the expected-crossings viewpoint sidesteps the entire short/long-needle case split — it is additive and shape-free, and at $\\ell=d$ the bound $E[N]<1$ lets expectation equal probability. The borderline length $\\ell=d$ is exactly where naive formula-matching is most dangerous, yet all three analytic routes (average projection, expected crossings, and the continuous limit of the long-needle formula) converge on $2/\\pi$, and a full-geometry simulation confirms it to four digits."
  },
  {
    "theme": "classical",
    "themeLabel": "Classical & Geometric Probability",
    "title": "When Is the Floor of a Ratio Even?",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "geometric probability",
      "unit square",
      "floor function",
      "infinite series",
      "logarithm"
    ],
    "statement": "Two numbers $x$ and $y$ are chosen independently and uniformly at random from $[0,1]$. \\[\\text{Find the probability that }\\big\\lfloor x/y\\big\\rfloor\\text{ is an even number (with }0\\text{ counted as even).}\\]",
    "answer": "\\[\\boxed{1-\\dfrac{\\ln 2}{2}}\\]",
    "trap": "Assuming the answer is $1/2$ 'by symmetry' between even and odd, or ignoring the dominant region $x<y$ (where the floor is $0$, which is even). The wedges $\\{2k\\le x/y<2k+1\\}$ for $k\\ge1$ shrink but do not vanish, and forgetting that the $x<y$ wedge alone already contributes $1/2$ leads to a badly low estimate.",
    "solutions": [
      {
        "name": "Sum the even wedges",
        "steps": [
          "$\\lfloor x/y\\rfloor$ is even iff $x/y\\in[0,1)\\cup[2,3)\\cup[4,5)\\cup\\cdots$, i.e. $x<y$ (the $k=0$ wedge) or $2k\\,y\\le x<(2k+1)\\,y$ for some $k\\ge1$.",
          "The $k=0$ wedge $\\{x<y\\}$ has area $\\tfrac12$. For $k\\ge1$, integrating the $x$-length $\\min((2k+1)y,1)-2k\\,y$ over $y$ gives wedge area $\\dfrac{1}{4k(2k+1)}$.",
          "Total $=\\dfrac12+\\displaystyle\\sum_{k=1}^{\\infty}\\frac{1}{4k(2k+1)}=\\dfrac12+\\frac14\\sum_{k=1}^{\\infty}\\Big(\\frac1k-\\frac{2}{2k+1}\\Big).$",
          "The series $\\sum_{k\\ge1}\\big(\\tfrac1k-\\tfrac{2}{2k+1}\\big)=2-2\\ln 2$, so total $=\\tfrac12+\\tfrac14(2-2\\ln2)=1-\\tfrac{\\ln 2}{2}=\\boxed{1-\\dfrac{\\ln 2}{2}}.$"
        ]
      },
      {
        "name": "Slope-line bookkeeping",
        "steps": [
          "In the unit square, $\\lfloor x/y\\rfloor=m$ is the wedge between lines $x=my$ and $x=(m+1)y$ (through the origin).",
          "The even-$m$ wedges are $m=0,2,4,\\dots$; their areas form the series above, with the $m=0$ wedge dominating at area $\\tfrac12$.",
          "Summing the geometric-like (actually telescoping-with-log) series gives $1-\\tfrac{\\ln 2}{2}$.",
          "Probability $=\\boxed{1-\\tfrac{\\ln2}{2}}\\approx 0.6534.$"
        ]
      },
      {
        "name": "Monte Carlo",
        "steps": [
          "Sample $2\\times10^7$ pairs $(x,y)$, compute $\\lfloor x/y\\rfloor\\bmod 2$.",
          "Empirical frequency of 'even' $\\approx 0.6534$.",
          "Compare to $1-\\tfrac{\\ln 2}{2}\\approx 0.65343$.",
          "Confirms $\\boxed{1-\\tfrac{\\ln2}{2}}$."
        ]
      }
    ],
    "remark": "Insight: the unit square is sliced by origin-lines into wedges of slope $1/m$, and 'even floor' selects alternate wedges whose areas sum to a logarithm. The huge $m=0$ wedge breaks the naive even/odd symmetry — geometry plus a telescoping series, no symmetry shortcut."
  },
  {
    "theme": "classical",
    "themeLabel": "Classical & Geometric Probability",
    "title": "A Triangle from a Cube",
    "difficulty": 4,
    "task": "Determine",
    "tags": [
      "geometric probability",
      "unit cube",
      "triangle inequality",
      "volume",
      "symmetry"
    ],
    "statement": "A point $(a,b,c)$ is chosen uniformly at random inside the unit cube $[0,1]^3$. \\[\\text{Find the probability that }a,\\ b,\\ c\\text{ are the side lengths of a (nondegenerate) triangle.}\\]",
    "answer": "\\[\\boxed{\\dfrac{1}{2}}\\]",
    "trap": "Trying to enforce all three triangle inequalities at once and getting tangled in overlapping regions, or assuming the three failure events $\\{a\\ge b+c\\}$, $\\{b\\ge a+c\\}$, $\\{c\\ge a+b\\}$ overlap and inclusion–exclusion is needed. In fact at most one of these can hold (only the largest side can violate), so the failures are essentially disjoint and simply add — overcounting via inclusion–exclusion is the classic error.",
    "solutions": [
      {
        "name": "Disjoint failure volumes",
        "steps": [
          "The triple fails to be a triangle iff one side is $\\ge$ the sum of the other two. Only the largest side can do this, so the three failure events are disjoint (their pairwise intersections have measure zero).",
          "By symmetry each has the same volume; compute $V=\\text{vol}\\{c\\ge a+b\\}=\\displaystyle\\int_0^1\\!\\Big(\\text{area }\\{a+b\\le c\\}\\Big)dc=\\int_0^1 \\frac{c^2}{2}\\,dc=\\frac16.$",
          "Total failure volume $=3\\cdot\\tfrac16=\\tfrac12$.",
          "Probability of a triangle $=1-\\tfrac12=\\boxed{\\dfrac12}.$"
        ]
      },
      {
        "name": "Direct favorable volume",
        "steps": [
          "Favorable region $=\\{a<b+c,\\ b<a+c,\\ c<a+b\\}$. Its volume is $1$ minus the three corner solids where one side dominates.",
          "Each corner solid $\\{c\\ge a+b\\}\\cap[0,1]^3$ is a cone-like region of volume $1/6$.",
          "$\\text{vol}=1-3(1/6)=1/2$ (no inclusion–exclusion correction since the solids are disjoint).",
          "Probability $=\\boxed{1/2}$."
        ]
      },
      {
        "name": "Monte Carlo",
        "steps": [
          "Sample $10^7$ points in the cube and test the three triangle inequalities.",
          "Empirical probability $\\approx 0.4995$.",
          "Compare to $1/2$.",
          "Confirms $\\boxed{1/2}$."
        ]
      }
    ],
    "remark": "Insight: the key observation 'only the largest side can break the inequality' makes the three failure events disjoint, turning a potential inclusion–exclusion mess into a single multiplication by $3$. The same disjointness idea recurs across triangle-formation problems."
  },
  {
    "theme": "classical",
    "themeLabel": "Classical & Geometric Probability",
    "title": "Viviani's Hidden Stick",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "geometric probability",
      "equilateral triangle",
      "viviani",
      "barycentric",
      "broken stick",
      "simplex"
    ],
    "statement": "A point $P$ is chosen uniformly at random inside an equilateral triangle. Let $d_1,d_2,d_3$ be the perpendicular distances from $P$ to the three sides. Find the probability that $d_1,\\ d_2,\\ d_3$ can themselves be the side lengths of a (non-degenerate) triangle.",
    "answer": "\\[\\boxed{\\dfrac{1}{4}}\\]",
    "trap": "Trying to integrate over the triangle in Cartesian coordinates and untangle the three distance functions, or assuming $d_1,d_2,d_3$ are independent. They are NOT independent: by Viviani's theorem $d_1+d_2+d_3$ equals the constant altitude $h$, so the triple lives on a $2$-simplex. Missing this constraint makes the problem look like a hard $3$-D integral and an i.i.d. argument would wrongly give $1/2$ instead of the correct $1/4$.",
    "solutions": [
      {
        "name": "Viviani to the broken stick",
        "steps": [
          "By Viviani's theorem, $d_1+d_2+d_3=h$ (the altitude) is constant for every interior point. Writing $P$ in barycentric coordinates $(\\alpha_1,\\alpha_2,\\alpha_3)$ with $\\alpha_1+\\alpha_2+\\alpha_3=1$, one has $d_i=\\alpha_i\\,h$.",
          "A point chosen uniformly by area has its barycentric coordinates uniform on the simplex $\\{\\alpha_1+\\alpha_2+\\alpha_3=1,\\ \\alpha_i\\ge0\\}$ — exactly the joint law of the three pieces produced by two independent uniform cuts of a unit stick.",
          "Scaling out $h$, the distances form a triangle iff each $d_i<\\tfrac{h}{2}$ (no side may reach half the perimeter, since they sum to $h$), i.e. each barycentric coordinate is $<\\tfrac12$.",
          "This is precisely the classical broken-stick condition, whose probability is $\\dfrac14$. Hence $P=\\boxed{\\dfrac14}.$"
        ]
      },
      {
        "name": "Direct simplex area",
        "steps": [
          "On the simplex $\\alpha_1+\\alpha_2+\\alpha_3=1$ the failure event 'no triangle' is $\\{\\alpha_1\\ge\\tfrac12\\}\\cup\\{\\alpha_2\\ge\\tfrac12\\}\\cup\\{\\alpha_3\\ge\\tfrac12\\}$; since two coordinates cannot each reach $\\tfrac12$, these three corner regions are disjoint.",
          "Each corner region is a sub-triangle similar to the whole simplex with linear ratio $\\tfrac12$, hence area $\\left(\\tfrac12\\right)^2=\\tfrac14$ of it; the three together cover $\\tfrac34$.",
          "The central triangle where all coordinates are $<\\tfrac12$ therefore has area $1-\\tfrac34=\\tfrac14$ of the simplex.",
          "Probability $=\\boxed{\\dfrac14}.$"
        ]
      },
      {
        "name": "Monte Carlo confirmation",
        "steps": [
          "Sample a genuinely uniform-by-area interior point (e.g. $P=A+r_1(B-A)+r_2(C-A)$, reflecting across the diagonal when $r_1+r_2>1$), then compute the three perpendicular distances $d_i$ directly.",
          "Check the triangle inequalities $d_i<d_j+d_k$, equivalently each $d_i<h/2$; over $10^7$ trials the empirical relative frequency is $\\approx 0.2500$.",
          "As a sanity check, the simulated $d_1+d_2+d_3$ is constant to machine precision (Viviani), and the marginal of each barycentric coordinate matches the density $2(1-x)$.",
          "All evidence confirms $\\boxed{\\dfrac14}.$"
        ]
      }
    ],
    "remark": "Insight: Viviani's constant-sum theorem secretly maps 'uniform point in an equilateral triangle' onto 'break a stick at two uniform points', so a geometry question about foot-of-perpendicular distances IS the broken-stick problem in disguise. Spotting the simplex is the entire battle; the $1/4$ then falls out for free. Note the seductive wrong path: pretending $d_1,d_2,d_3$ are independent uniforms gives $1/2$, double the truth."
  },
  {
    "theme": "conditional",
    "themeLabel": "Conditional Probability & Independence",
    "title": "The XOR Triangle",
    "difficulty": 4,
    "task": "Determine",
    "tags": [
      "pairwise independence",
      "mutual independence",
      "parity",
      "indicator random variables"
    ],
    "statement": "Two fair coins are tossed; let $X,Y\\in\\{0,1\\}$ record the outcomes (heads $=1$), and define $Z=X\\oplus Y$ (the XOR, i.e. $Z=1$ exactly when the two coins differ). A student claims: \"$X,Y,Z$ are each fair, every pair is independent, so the three are mutually independent and $P(X{=}1,Y{=}1,Z{=}1)=\\tfrac18$.\" Determine the true value of $P(X{=}1,Y{=}1,Z{=}1)$, and state precisely which of the four independence equations (the three pairwise, the one triple) actually hold.",
    "answer": "\\[\\boxed{P(X{=}1,Y{=}1,Z{=}1)=0}\\]",
    "trap": "Treating pairwise independence as if it forced mutual independence and multiplying $\\tfrac12\\cdot\\tfrac12\\cdot\\tfrac12$. The triple event is impossible: $X{=}1,Y{=}1$ forces $Z=1\\oplus1=0$, so knowing any two of $X,Y,Z$ pins down the third, destroying mutual independence even though all three pairwise equations hold.",
    "solutions": [
      {
        "name": "Direct enumeration",
        "steps": [
          "The four equally likely outcomes $(X,Y)$ are $(0,0),(0,1),(1,0),(1,1)$ giving $Z=0,1,1,0$.",
          "Each of $X,Y,Z$ equals $1$ in exactly $2$ of the $4$ outcomes, so each is fair.",
          "For any pair, the four joint value-combinations occur once each (e.g. $(X,Z)$ takes $(0,0),(0,1),(1,1),(1,0)$), so $P(\\cdot,\\cdot)=\\tfrac14=\\tfrac12\\cdot\\tfrac12$: all three pairs are independent.",
          "But $X{=}1,Y{=}1$ occurs only at $(1,1)$, where $Z=0$; hence $\\{X{=}1,Y{=}1,Z{=}1\\}=\\varnothing$ and its probability is $0\\ne\\tfrac18$, so the triple is NOT mutually independent. $\\boxed{0}$"
        ]
      },
      {
        "name": "Algebraic constraint",
        "steps": [
          "The relation $Z=X\\oplus Y$ means $X+Y+Z$ is always even (each toss is counted twice in $X\\oplus Y$ logic): the support lies in the parity-even set.",
          "The point $(1,1,1)$ has odd coordinate sum $3$, so it cannot occur: $P(X{=}1,Y{=}1,Z{=}1)=0$.",
          "Pairwise independence survives because fixing one variable still leaves the XOR of it with a fresh fair coin uniform; mutual independence fails because the third coordinate is a deterministic function of the other two. $\\boxed{0}$"
        ]
      }
    ],
    "remark": "Insight: independence is not a transitive or 'compositional' property. This is the canonical counterexample showing pairwise independence is strictly weaker than mutual independence — three random variables can be perfectly compatible in every pair yet rigidly linked as a trio."
  },
  {
    "theme": "conditional",
    "themeLabel": "Conditional Probability & Independence",
    "title": "Two Tests, One Disease",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "bayes theorem",
      "conditional independence",
      "medical testing",
      "base rate"
    ],
    "statement": "A disease afflicts $1\\%$ of a population. A diagnostic test has sensitivity $P(+\\mid\\text{disease})=\\tfrac{9}{10}$ and false-positive rate $P(+\\mid\\text{healthy})=\\tfrac{1}{10}$. A patient is tested twice by two separate, identical machines; conditional on the patient's true status the two results are independent. Both tests come back positive. Evaluate $P(\\text{disease}\\mid +,+)$.",
    "answer": "\\[\\boxed{\\dfrac{9}{20}}\\]",
    "trap": "Assuming the two test results are unconditionally independent and writing $P(+,+)=P(+)^2$. With $P(+)=\\tfrac1{100}\\cdot\\tfrac9{10}+\\tfrac{99}{100}\\cdot\\tfrac1{10}=\\tfrac{27}{250}$ this gives the wrong denominator $\\left(\\tfrac{27}{250}\\right)^2$ and the bogus posterior $\\tfrac{25}{36}\\approx0.69$. Independence holds only given the true status; the unconditional results are positively correlated (both are driven by the same hidden disease state), so $P(+,+)\\ne P(+)^2$.",
    "solutions": [
      {
        "name": "Bayes with conditional independence",
        "steps": [
          "Let $D$ be 'has disease', $P(D)=\\tfrac1{100}$, $P(D^c)=\\tfrac{99}{100}$.",
          "Given the status, the two tests are independent: $P(+,+\\mid D)=\\left(\\tfrac9{10}\\right)^2=\\tfrac{81}{100}$ and $P(+,+\\mid D^c)=\\left(\\tfrac1{10}\\right)^2=\\tfrac1{100}$.",
          "Numerator $P(D)\\,P(+,+\\mid D)=\\tfrac1{100}\\cdot\\tfrac{81}{100}=\\tfrac{81}{10000}$; the healthy term $\\tfrac{99}{100}\\cdot\\tfrac1{100}=\\tfrac{99}{10000}$.",
          "$P(D\\mid +,+)=\\dfrac{81}{81+99}=\\dfrac{81}{180}=\\boxed{\\tfrac{9}{20}}$."
        ]
      },
      {
        "name": "Sequential updating (odds form)",
        "steps": [
          "Prior odds of disease $=\\dfrac{P(D)}{P(D^c)}=\\tfrac{1}{99}$. The likelihood ratio of one positive test is $\\tfrac{9/10}{1/10}=9$.",
          "Conditional independence lets the two positives multiply the odds by $9$ each: posterior odds $=\\tfrac{1}{99}\\cdot 9\\cdot 9=\\tfrac{81}{99}$.",
          "Convert odds to probability: $P=\\dfrac{81}{81+99}=\\boxed{\\tfrac{9}{20}}$, matching the direct computation."
        ]
      }
    ],
    "remark": "Insight: 'independent tests' almost never means unconditionally independent — it means conditionally independent given the latent cause. The base rate ($1\\%$) keeps even two strong positives from reaching certainty; the posterior is under one-half, at exactly $0.45$."
  },
  {
    "theme": "conditional",
    "themeLabel": "Conditional Probability & Independence",
    "title": "Three Dice Events That Lie",
    "difficulty": 4,
    "task": "Prove that",
    "tags": [
      "pairwise independence",
      "dice",
      "conditioning",
      "counterexample"
    ],
    "statement": "Two fair dice are rolled. Let $A=\\{\\text{the sum is }7\\}$, $B=\\{\\text{the first die shows }4\\}$, $C=\\{\\text{the second die shows }3\\}$. Prove that $A,B,C$ are pairwise independent, yet $P(A\\mid B\\cap C)=1$. Reconcile this with the (false) intuition that pairwise independence should make $A$ roughly $\\tfrac16$-likely regardless of what you condition on.",
    "answer": "\\[\\boxed{P(A\\mid B\\cap C)=1\\quad\\text{while}\\quad P(A)=\\tfrac16}\\]",
    "trap": "Concluding from the three pairwise-independence equations that $A$ is independent of the combined information $B\\cap C$. Pairwise independence says nothing about conditioning on an intersection; here $B\\cap C$ forces the dice to be $(4,3)$, whose sum is exactly $7$, so $A$ becomes certain.",
    "solutions": [
      {
        "name": "Counting on the 36 outcomes",
        "steps": [
          "$P(A)=\\tfrac6{36}=\\tfrac16$, $P(B)=P(C)=\\tfrac6{36}=\\tfrac16$.",
          "$A\\cap B$ is $(4,3)$ only: $P=\\tfrac1{36}=\\tfrac16\\cdot\\tfrac16$. Likewise $A\\cap C$ is $(4,3)$: $P=\\tfrac1{36}$. And $B\\cap C$ is $(4,3)$: $P=\\tfrac1{36}=\\tfrac16\\cdot\\tfrac16$. So all three pairs are independent.",
          "$B\\cap C=\\{(4,3)\\}$ and $A\\cap B\\cap C=\\{(4,3)\\}$ too, so $P(A\\mid B\\cap C)=\\dfrac{1/36}{1/36}=1$.",
          "Thus $A,B,C$ are pairwise independent but $P(A\\mid B\\cap C)=\\boxed{1}\\ne\\tfrac16=P(A)$. $\\blacksquare$"
        ]
      },
      {
        "name": "Why mutual independence fails",
        "steps": [
          "For mutual independence we would need $P(A\\cap B\\cap C)=P(A)P(B)P(C)=\\tfrac1{216}$.",
          "But $P(A\\cap B\\cap C)=P(\\{(4,3)\\})=\\tfrac1{36}\\ne\\tfrac1{216}$, so the triple is not mutually independent.",
          "Knowing both $B$ and $C$ determines both dice, hence determines the sum: the 'extra' information from a second event collapses the uncertainty that a single event left intact. $\\blacksquare$"
        ]
      }
    ],
    "remark": "Insight: $P(A\\mid B)=P(A)$ and $P(A\\mid C)=P(A)$ do not imply $P(A\\mid B\\cap C)=P(A)$. Conditioning on the conjunction can be wildly more informative than conditioning on either piece — the cleanest possible illustration of pairwise-but-not-mutual independence."
  },
  {
    "theme": "conditional",
    "themeLabel": "Conditional Probability & Independence",
    "title": "Pólya's Backward Glance",
    "difficulty": 3,
    "task": "Find",
    "tags": [
      "polya urn",
      "exchangeability",
      "reverse conditioning",
      "reinforcement"
    ],
    "statement": "An urn holds one red and one black ball. A ball is drawn at random; it is returned together with one extra ball of the same colour. Then a second ball is drawn from the now three-ball urn. Find $P(\\text{first draw was red}\\mid\\text{second draw is red})$.",
    "answer": "\\[\\boxed{\\dfrac{2}{3}}\\]",
    "trap": "Reasoning that the second draw is 'in the future', so it cannot give information about the first, hence answering $P(R_1)=\\tfrac12$. Conditioning runs in both directions: a red second draw makes a red first draw (which loaded the urn with reds) more likely. Also tempting is to confuse $P(R_1\\mid R_2)$ with $P(R_2\\mid R_1)=\\tfrac23$ — here they coincide by symmetry, but for the wrong reason.",
    "solutions": [
      {
        "name": "Bayes from the tree",
        "steps": [
          "$P(R_1)=\\tfrac12$. After a red first draw the urn is $\\{$2 red, 1 black$\\}$, so $P(R_2\\mid R_1)=\\tfrac23$.",
          "After a black first draw the urn is $\\{$1 red, 2 black$\\}$, so $P(R_2\\mid B_1)=\\tfrac13$.",
          "$P(R_1\\cap R_2)=\\tfrac12\\cdot\\tfrac23=\\tfrac13$ and $P(R_2)=\\tfrac12\\cdot\\tfrac23+\\tfrac12\\cdot\\tfrac13=\\tfrac12$.",
          "$P(R_1\\mid R_2)=\\dfrac{1/3}{1/2}=\\boxed{\\tfrac23}$."
        ]
      },
      {
        "name": "Exchangeability shortcut",
        "steps": [
          "In a Pólya urn the draw sequence is exchangeable, so $(R_1,R_2)$ and $(R_2,R_1)$ have equal joint probabilities; in particular $P(R_2)=P(R_1)=\\tfrac12$.",
          "Hence $P(R_1\\mid R_2)=\\dfrac{P(R_1\\cap R_2)}{P(R_2)}=\\dfrac{P(R_1)\\,P(R_2\\mid R_1)}{1/2}=\\dfrac{(1/2)(2/3)}{1/2}=\\boxed{\\tfrac23}$.",
          "The future draw is informative precisely because the urn's composition carries the memory of the past."
        ]
      }
    ],
    "remark": "Insight: a 'later' observation is perfectly legitimate evidence about an 'earlier' one — time-order is irrelevant to Bayes. Pólya urns make the dependence vivid: reinforcement means a red second draw whispers that the first was probably red."
  },
  {
    "theme": "conditional",
    "themeLabel": "Conditional Probability & Independence",
    "title": "The Weekend Boy",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "two children problem",
      "conditioning on a subset",
      "selection effect",
      "counterintuitive"
    ],
    "statement": "A family has two children, each independently a boy or girl with probability $\\tfrac12$, and each child's day of birth is uniform over the seven days of the week, independent of everything else. You learn only that at least one of the two children is a boy born on a weekend (Saturday or Sunday). Evaluate the probability that both children are boys.",
    "answer": "\\[\\boxed{\\dfrac{6}{13}}\\]",
    "trap": "Answering $\\tfrac13$ (the bare 'at least one boy' answer) by discarding the weekend information as irrelevant flavour, or answering $\\tfrac12$ by treating the two children as independent given the clue. The weekend restriction shrinks the conditioning event asymmetrically — it is rarer to satisfy via a single boy than via two — nudging the answer above $\\tfrac13$ toward but not reaching $\\tfrac12$.",
    "solutions": [
      {
        "name": "Direct conditional count",
        "steps": [
          "Each child has $14$ equally likely (gender, day) labels; a pair has $14^2=196$ equally likely outcomes. A 'weekend boy' label is one of $2$ (boy, Sat/Sun) out of $14$, probability $\\tfrac1{7}$ per child.",
          "$P(\\text{no weekend boy})=\\left(\\tfrac{6}{7}\\right)^2=\\tfrac{36}{49}$, so $P(\\text{at least one weekend boy})=1-\\tfrac{36}{49}=\\tfrac{13}{49}$.",
          "$P(\\text{both boys and at least one weekend boy})$: both children boys (prob $\\tfrac14$) and not both born on weekdays. Among boy–boy pairs, $P(\\text{neither on weekend})=\\left(\\tfrac57\\right)^2=\\tfrac{25}{49}$, so the event has probability $\\tfrac14\\left(1-\\tfrac{25}{49}\\right)=\\tfrac14\\cdot\\tfrac{24}{49}=\\tfrac{6}{49}$.",
          "$P(\\text{both boys}\\mid\\text{weekend boy})=\\dfrac{6/49}{13/49}=\\boxed{\\tfrac{6}{13}}$."
        ]
      },
      {
        "name": "Inclusion–exclusion on labelled children",
        "steps": [
          "Mark each child by whether it is a 'weekend boy' (W, prob $\\tfrac17$) or not (prob $\\tfrac67$). The conditioning event is $\\{$at least one W$\\}$ with probability $1-(6/7)^2=\\tfrac{13}{49}$.",
          "Decompose by how many of the two children are weekend boys: exactly one W contributes $2\\cdot\\tfrac17\\cdot\\tfrac67=\\tfrac{12}{49}$; two W contribute $\\tfrac1{49}$.",
          "If a child is W it is a boy; if the other child is a non-W it is a boy with conditional probability $\\tfrac{5/14}{6/7}=\\tfrac{5}{12}$ (boy-but-not-weekend among non-weekend-boys). So 'exactly one W' yields both-boys with prob $\\tfrac5{12}$, contributing $\\tfrac{12}{49}\\cdot\\tfrac5{12}=\\tfrac{5}{49}$; 'two W' always gives both boys, contributing $\\tfrac1{49}$.",
          "Both-boys total $=\\tfrac{5}{49}+\\tfrac1{49}=\\tfrac6{49}$, so the answer is $\\dfrac{6/49}{13/49}=\\boxed{\\tfrac6{13}}$."
        ]
      }
    ],
    "remark": "Insight: a seemingly irrelevant tag ('weekend') changes the answer because it changes how the conditioning event can be satisfied. As the tag grows rarer, the single-boy route becomes vanishingly likely relative to the two-boy route, and the answer slides from $\\tfrac13$ up toward $\\tfrac12$ — a quantitative anatomy of the 'Tuesday boy' paradox."
  },
  {
    "theme": "conditional",
    "themeLabel": "Conditional Probability & Independence",
    "title": "The Gambler's Parity",
    "difficulty": 3,
    "task": "Prove that",
    "tags": [
      "independence",
      "parity",
      "gamblers fallacy",
      "coin tosses"
    ],
    "statement": "A fair coin is tossed four times. Let $H$ be the event 'the first toss is heads' and let $E$ be the event 'the total number of heads is even'. A gambler argues: 'after I see the first toss, the parity of the remaining run is partly decided, so $E$ must depend on $H$.' Prove that in fact $H$ and $E$ are independent, and find $P(E\\mid H)$.",
    "answer": "\\[\\boxed{P(E\\mid H)=\\tfrac12=P(E),\\ \\text{so }H\\perp E}\\]",
    "trap": "Believing that because the first toss contributes to the head-count, fixing it must shift the parity probability (a gambler's-fallacy-flavoured intuition). In truth, conditioning on the first toss leaves the parity of the other three fair tosses uniform, and a uniform parity is unaffected by adding a fixed bit.",
    "solutions": [
      {
        "name": "Conditioning on the remaining tosses",
        "steps": [
          "Write the head-count as $X_1+R$ where $X_1\\in\\{0,1\\}$ is the first toss and $R$ is the number of heads in tosses $2,3,4$.",
          "For any fixed value of $X_1$, $E$ holds iff $R\\equiv X_1\\pmod 2$. The parity of $R$ (a sum of three independent fair bits) is itself a fair bit: $P(R\\text{ even})=P(R\\text{ odd})=\\tfrac12$.",
          "Hence $P(E\\mid X_1=1)=P(R\\text{ odd})=\\tfrac12$ and $P(E\\mid X_1=0)=P(R\\text{ even})=\\tfrac12$.",
          "Therefore $P(E\\mid H)=\\tfrac12=P(E)$, so $H$ and $E$ are independent. $\\boxed{P(E\\mid H)=\\tfrac12}$ $\\blacksquare$"
        ]
      },
      {
        "name": "Enumeration",
        "steps": [
          "Of the $16$ equally likely outcomes, exactly $8$ have an even number of heads ($0,2,$ or $4$ heads: $\\binom40+\\binom42+\\binom44=1+6+1=8$), so $P(E)=\\tfrac12$.",
          "Among the $8$ outcomes with first toss heads, the remaining three tosses give an even total iff they contain an odd number of heads — which happens in $4$ of $8$ sub-cases.",
          "Thus $P(H\\cap E)=\\tfrac{4}{16}=\\tfrac14=P(H)P(E)$, confirming independence and $P(E\\mid H)=\\tfrac14/\\tfrac12=\\boxed{\\tfrac12}$. $\\blacksquare$"
        ]
      }
    ],
    "remark": "Insight: parity of a sum of independent fair bits is the great 'eraser' — it is independent of any proper subset of the bits. The gambler's intuition that 'partial information must shift the odds' is exactly the fallacy this problem dismantles."
  },
  {
    "theme": "conditional",
    "themeLabel": "Conditional Probability & Independence",
    "title": "The Island of One Match",
    "difficulty": 5,
    "task": "Find",
    "tags": [
      "prosecutor's fallacy",
      "bayes theorem",
      "forensic probability",
      "base rate"
    ],
    "statement": "On an island, exactly one of $N+1=10001$ inhabitants committed a crime and certainly carries a forensic marker. An innocent inhabitant carries the same marker, independently, with probability $p=\\tfrac1{1000}$. The authorities test a randomly chosen inhabitant who turns out to carry the marker; they announce: 'the chance an innocent person matches is only $\\tfrac1{1000}$, so this person is guilty with probability $\\tfrac{999}{1000}$.' Find the actual probability that the matched person is guilty, given only that they match.",
    "answer": "\\[\\boxed{\\dfrac{1}{11}}\\]",
    "trap": "The prosecutor's fallacy: equating $P(\\text{guilty}\\mid\\text{match})$ with $1-P(\\text{match}\\mid\\text{innocent})=\\tfrac{999}{1000}$, i.e. swapping $P(A\\mid B)$ for $1-P(B\\mid A^c)$. The tiny match probability must be weighed against the huge population of innocents ($N=10000$), each a potential false match.",
    "solutions": [
      {
        "name": "Bayes on a single random tester",
        "steps": [
          "Prior that a random inhabitant is the culprit: $P(G)=\\tfrac{1}{N+1}$; innocent: $\\tfrac{N}{N+1}$.",
          "$P(\\text{match}\\mid G)=1$ and $P(\\text{match}\\mid G^c)=p$, so $P(\\text{match})=\\tfrac{1}{N+1}\\cdot1+\\tfrac{N}{N+1}\\cdot p=\\tfrac{1+Np}{N+1}$.",
          "$P(G\\mid\\text{match})=\\dfrac{1/(N+1)}{(1+Np)/(N+1)}=\\dfrac{1}{1+Np}$.",
          "With $N=10000,\\ p=\\tfrac1{1000}$: $Np=10$, so $P(G\\mid\\text{match})=\\dfrac1{1+10}=\\boxed{\\tfrac1{11}}$."
        ]
      },
      {
        "name": "Expected-matchers heuristic",
        "steps": [
          "Among the $10000$ innocents, the expected number of marker-carriers is $10000\\cdot\\tfrac1{1000}=10$; the single guilty person also carries it.",
          "So in expectation $11$ inhabitants carry the marker, of whom exactly $1$ is guilty.",
          "A random matcher is therefore guilty with probability $\\dfrac{1}{11}=\\boxed{\\tfrac1{11}}$, vindicating the Bayesian count over the prosecutor's $\\tfrac{999}{1000}$."
        ]
      }
    ],
    "remark": "Insight: $P(\\text{innocent}\\mid\\text{match})$ and $P(\\text{match}\\mid\\text{innocent})$ are different numbers connected by the base rate. With $10000$ innocents and a $1$-in-$1000$ false-match rate, false matches outnumber the lone true match $10$ to $1$ — the courtroom statistic is almost the opposite of the prosecutor's claim."
  },
  {
    "theme": "conditional",
    "themeLabel": "Conditional Probability & Independence",
    "title": "The Bag of Two Dice",
    "difficulty": 4,
    "task": "Find",
    "tags": [
      "sequential bayes",
      "loaded die",
      "conditional independence",
      "posterior prediction"
    ],
    "statement": "A bag contains two dice: a fair one, and a trick die that shows $6$ on every face. You pick a die uniformly at random and, without looking at it, roll that same die repeatedly. The first two rolls are both $6$. Find (a) the probability the chosen die is the trick die, and (b) the probability the third roll is also a $6$.",
    "answer": "\\[\\boxed{P(\\text{trick}\\mid 6,6)=\\tfrac{36}{37},\\qquad P(\\text{third}=6\\mid 6,6)=\\tfrac{217}{222}}\\]",
    "trap": "Treating the rolls as independent so that 'two sixes' carries no information, and predicting the third roll as $\\tfrac12\\cdot1+\\tfrac12\\cdot\\tfrac16$. Given the same unknown die, the rolls are only conditionally independent; the observed sixes sharply update which die you hold, and the prediction must average $P(6)$ over the posterior, not the prior.",
    "solutions": [
      {
        "name": "Posterior then predictive",
        "steps": [
          "Prior $\\tfrac12$ each. Likelihood of two sixes: trick die $1$, fair die $\\left(\\tfrac16\\right)^2=\\tfrac1{36}$.",
          "$P(\\text{trick}\\mid 6,6)=\\dfrac{\\tfrac12\\cdot1}{\\tfrac12\\cdot1+\\tfrac12\\cdot\\tfrac1{36}}=\\dfrac{1}{1+\\tfrac1{36}}=\\boxed{\\tfrac{36}{37}}$.",
          "Predict the third roll by conditioning on which die you hold: $P(6\\mid\\text{trick})=1$, $P(6\\mid\\text{fair})=\\tfrac16$.",
          "$P(\\text{third}=6\\mid 6,6)=\\tfrac{36}{37}\\cdot1+\\tfrac1{37}\\cdot\\tfrac16=\\tfrac{36}{37}+\\tfrac{1}{222}=\\dfrac{216+1}{222}=\\boxed{\\tfrac{217}{222}}$."
        ]
      },
      {
        "name": "Direct three-roll ratio",
        "steps": [
          "$P(\\text{third}=6\\mid 6,6)=\\dfrac{P(6,6,6)}{P(6,6)}$.",
          "$P(6,6,6)=\\tfrac12\\cdot1+\\tfrac12\\cdot\\left(\\tfrac16\\right)^3=\\tfrac12+\\tfrac1{432}=\\tfrac{217}{432}$.",
          "$P(6,6)=\\tfrac12+\\tfrac12\\cdot\\tfrac1{36}=\\tfrac{37}{72}=\\tfrac{222}{432}$.",
          "Ratio $=\\dfrac{217/432}{222/432}=\\boxed{\\tfrac{217}{222}}$, and the posterior for the trick die is $\\dfrac{1/2}{37/72}=\\tfrac{36}{37}$."
        ]
      }
    ],
    "remark": "Insight: rolls of an unknown die are exchangeable but not independent — each $6$ is evidence about the hidden die, and prediction must integrate over the updated belief. The third-roll probability $\\tfrac{217}{222}\\approx0.977$ sits far above the na\\\"ive $\\tfrac{7}{12}$ you'd get by ignoring the evidence."
  },
  {
    "theme": "conditional",
    "themeLabel": "Conditional Probability & Independence",
    "title": "Independent or Disjoint?",
    "difficulty": 3,
    "task": "Find a,b",
    "tags": [
      "independence",
      "mutual exclusivity",
      "union",
      "classic confusion"
    ],
    "statement": "Two events $A,B$ in a probability space satisfy $P(A)=\\tfrac12$ and $P(A\\cup B)=\\tfrac34$. (a) Find $P(B)$ under the hypothesis that $A$ and $B$ are independent. (b) Find $P(B)$ under the hypothesis that $A$ and $B$ are mutually exclusive. (c) Prove that for these data, $A$ and $B$ cannot be both independent and mutually exclusive at once.",
    "answer": "\\[\\boxed{\\text{(a) }P(B)=\\tfrac12,\\quad\\text{(b) }P(B)=\\tfrac14,\\quad\\text{(c) impossible}}\\]",
    "trap": "Conflating 'independent' with 'mutually exclusive' is the single most common probability confusion. Mutually exclusive events with positive probability are in fact maximally dependent (one occurring forbids the other), so the two hypotheses give genuinely different values of $P(B)$ and cannot coexist when both events have positive probability.",
    "solutions": [
      {
        "name": "Two inclusion-exclusion formulas",
        "steps": [
          "Independent case: $P(A\\cap B)=P(A)P(B)$, so $P(A\\cup B)=P(A)+P(B)-P(A)P(B)=\\tfrac12+P(B)\\bigl(1-\\tfrac12\\bigr)$.",
          "Set equal to $\\tfrac34$: $\\tfrac12+\\tfrac12P(B)=\\tfrac34\\Rightarrow P(B)=\\tfrac12$.",
          "Disjoint case: $P(A\\cap B)=0$, so $P(A\\cup B)=P(A)+P(B)=\\tfrac34\\Rightarrow P(B)=\\tfrac14$.",
          "Both lie in $[0,1]$ and reproduce $P(A\\cup B)=\\tfrac34$, and they differ, giving $\\boxed{\\tfrac12}$ and $\\boxed{\\tfrac14}$."
        ]
      },
      {
        "name": "Impossibility of coexistence",
        "steps": [
          "If $A,B$ are simultaneously independent and disjoint, then $P(A\\cap B)=P(A)P(B)$ and $P(A\\cap B)=0$, forcing $P(A)P(B)=0$.",
          "Since $P(A)=\\tfrac12\\ne0$, this requires $P(B)=0$.",
          "But then $P(A\\cup B)=P(A)+P(B)-0=P(A)=\\tfrac12\\ne\\tfrac34$, contradicting the data. Hence the two properties cannot hold together here. $\\boxed{\\text{impossible}}$"
        ]
      }
    ],
    "remark": "Insight: independence and mutual exclusivity are nearly opposite ideas. Disjoint positive-probability events are as dependent as events can be; the only way to be both independent and disjoint is for one event to be null. Numerically the gap is stark here, $P(B)=\\tfrac12$ versus $P(B)=\\tfrac14$."
  },
  {
    "theme": "conditional",
    "themeLabel": "Conditional Probability & Independence",
    "title": "The Even-Length Duel",
    "difficulty": 5,
    "task": "Find",
    "tags": [
      "geometric distribution",
      "conditioning on parity",
      "first success",
      "infinite series"
    ],
    "statement": "Players Anya, Bharat, and Chetan take turns — in that fixed cyclic order, Anya first — flipping a single fair coin; the first player to flip heads wins, and the game then stops. Let $T$ be the total number of flips made when the game ends. You are told only that $T$ is even. Find the conditional probability that each of the three players won, i.e. $P(\\text{Anya}\\mid T\\text{ even})$, $P(\\text{Bharat}\\mid T\\text{ even})$, $P(\\text{Chetan}\\mid T\\text{ even})$.",
    "answer": "\\[\\boxed{P(A)=\\tfrac{4}{21},\\quad P(B)=\\tfrac{16}{21},\\quad P(C)=\\tfrac{1}{21}}\\]",
    "trap": "Assuming the parity of $T$ is independent of who wins (since 'each flip is a fair independent coin'), and answering with the unconditional turn-order odds $\\tfrac47,\\tfrac27,\\tfrac17$. Who wins is exactly determined by $T\\bmod 3$, and constraining $T$ to be even interacts with that residue through the Chinese-Remainder pattern of $T\\bmod 6$, reshuffling the probabilities completely.",
    "solutions": [
      {
        "name": "Sum the geometric series by residue",
        "steps": [
          "The game ends at flip $T=k$ with probability $\\left(\\tfrac12\\right)^k$ (the first $k-1$ tails then a head). Anya wins iff $k\\equiv1$, Bharat iff $k\\equiv2$, Chetan iff $k\\equiv0\\pmod 3$.",
          "Restrict to even $k$, i.e. $k=2j$. Then $k\\bmod3$ cycles as $j$ runs: $j\\equiv2\\Rightarrow k\\equiv1$ (Anya), $j\\equiv1\\Rightarrow k\\equiv2$ (Bharat), $j\\equiv0\\Rightarrow k\\equiv0$ (Chetan), with weight $\\left(\\tfrac14\\right)^{j}$.",
          "Summing geometric series with ratio $\\tfrac1{64}$ per period: Anya $\\propto\\left(\\tfrac14\\right)^2\\frac{1}{1-1/64}=\\tfrac1{16}\\cdot\\tfrac{64}{63}=\\tfrac{4}{63}$; Bharat $\\propto\\tfrac14\\cdot\\tfrac{64}{63}=\\tfrac{16}{63}$; Chetan $\\propto\\left(\\tfrac14\\right)^3\\frac{64}{63}=\\tfrac{1}{63}$.",
          "Their sum is $\\tfrac{21}{63}=\\tfrac13=P(T\\text{ even})$; normalising gives $\\boxed{\\tfrac4{21},\\ \\tfrac{16}{21},\\ \\tfrac1{21}}$."
        ]
      },
      {
        "name": "Period-6 conditioning",
        "steps": [
          "Group flips into blocks of $6$. Within one period the winning flip lands on $k\\in\\{1,\\dots,6\\}$ with weights $\\left(\\tfrac12\\right)^k$, and the pattern repeats scaled by $\\left(\\tfrac12\\right)^6=\\tfrac1{64}$ each period.",
          "Even $k$ in $\\{2,4,6\\}$ correspond to winners Bharat ($k{=}2$, weight $\\tfrac14$), Anya ($k{=}4$, weight $\\tfrac1{16}$), Chetan ($k{=}6$, weight $\\tfrac1{64}$).",
          "Total even weight per period $=\\tfrac14+\\tfrac1{16}+\\tfrac1{64}=\\tfrac{21}{64}$; the geometric factor $\\tfrac{1}{1-1/64}$ cancels in the conditional ratios.",
          "Conditional probabilities are the within-period proportions: Anya $\\tfrac{1/16}{21/64}=\\tfrac{4}{21}$, Bharat $\\tfrac{1/4}{21/64}=\\tfrac{16}{21}$, Chetan $\\tfrac{1/64}{21/64}=\\tfrac{1}{21}$. $\\boxed{\\tfrac4{21},\\tfrac{16}{21},\\tfrac1{21}}$"
        ]
      }
    ],
    "remark": "Insight: 'fair independent flips' does not make $T$'s parity independent of the winner — the winner is a deterministic function of $T\\bmod3$, so conditioning on $T\\bmod2$ couples to it via $T\\bmod6$. Bharat, who normally trails Anya, becomes the overwhelming favourite ($\\tfrac{16}{21}$) once you know the duel ran an even number of flips."
  },
  {
    "theme": "bayes",
    "themeLabel": "Total Probability & Bayes",
    "title": "The Die Chooses the Urn",
    "difficulty": 3,
    "task": "Determine",
    "tags": [
      "total-probability",
      "posterior",
      "partition",
      "urns"
    ],
    "statement": "A fair die is rolled once. If it shows $1,2,$ or $3$ we draw from urn $A$ (containing $2$ white, $3$ black balls); if it shows $4$ or $5$ we draw from urn $B$ ($4$ white, $1$ black); if it shows $6$ we draw from urn $C$ ($1$ white, $4$ black). One ball is drawn and turns out white. Find the probability that it came from urn $B$.",
    "answer": "\\[\\boxed{\\dfrac{8}{15}}\\]",
    "trap": "Treating the three urns as equally likely sources and computing $\\tfrac{4/5}{2/5+4/5+1/5}=\\tfrac{4}{7}$. The die makes the prior on the urn $(\\tfrac12,\\tfrac13,\\tfrac16)$, not uniform — the partition probabilities, not just the colour likelihoods, drive the posterior.",
    "solutions": [
      {
        "name": "Law of total probability then invert",
        "steps": [
          "Prior on the urn from the die: $P(A)=\\tfrac{3}{6}=\\tfrac12,\\ P(B)=\\tfrac{2}{6}=\\tfrac13,\\ P(C)=\\tfrac16$.",
          "Colour likelihoods: $P(W\\mid A)=\\tfrac25,\\ P(W\\mid B)=\\tfrac45,\\ P(W\\mid C)=\\tfrac15$.",
          "Total: $P(W)=\\tfrac12\\cdot\\tfrac25+\\tfrac13\\cdot\\tfrac45+\\tfrac16\\cdot\\tfrac15=\\tfrac15+\\tfrac{4}{15}+\\tfrac1{30}=\\tfrac12$.",
          "Bayes: $P(B\\mid W)=\\dfrac{\\tfrac13\\cdot\\tfrac45}{\\tfrac12}=\\dfrac{4/15}{1/2}=\\boxed{\\tfrac{8}{15}}$."
        ]
      },
      {
        "name": "Weighted-count model",
        "steps": [
          "Scale to a common denominator of draws. Weight each urn by its prior $\\times$ a fixed pool; using denominator $30$, the 'white mass' is $A:\\tfrac12\\cdot\\tfrac25=\\tfrac{6}{30}$, $B:\\tfrac13\\cdot\\tfrac45=\\tfrac{8}{30}$, $C:\\tfrac16\\cdot\\tfrac15=\\tfrac1{30}$.",
          "Total white mass $=\\tfrac{15}{30}$.",
          "Posterior for $B$ is its share: $\\dfrac{8/30}{15/30}=\\boxed{\\tfrac{8}{15}}$."
        ]
      }
    ],
    "remark": "Insight: the die is the partition. The most common error is to forget that the urn prior is non-uniform; the colour evidence only reweights an already-skewed prior."
  },
  {
    "theme": "bayes",
    "themeLabel": "Total Probability & Bayes",
    "title": "A Positive Test, A Rare Disease",
    "difficulty": 3,
    "task": "Evaluate",
    "tags": [
      "base-rate",
      "false-positive",
      "medical-test",
      "posterior"
    ],
    "statement": "A disease afflicts $1$ in every $1000$ people. A screening test has sensitivity $99\\%$ (it is positive for $99\\%$ of the diseased) and specificity $98\\%$ (it is negative for $98\\%$ of the healthy). A randomly chosen person tests positive. Find the exact probability that this person actually has the disease.",
    "answer": "\\[\\boxed{\\dfrac{11}{233}}\\]",
    "trap": "Reading 'sensitivity $99\\%$' as 'a positive result is right $99\\%$ of the time' and answering $0.99$. The sensitivity is $P(+\\mid D)$, not $P(D\\mid +)$; with a $1/1000$ base rate the false positives from the huge healthy population swamp the true positives.",
    "solutions": [
      {
        "name": "Direct Bayes",
        "steps": [
          "$P(D)=\\tfrac1{1000},\\ P(+\\mid D)=\\tfrac{99}{100},\\ P(+\\mid \\bar D)=1-\\tfrac{98}{100}=\\tfrac{2}{100}$.",
          "True-positive mass: $\\tfrac1{1000}\\cdot\\tfrac{99}{100}=\\tfrac{99}{100000}$.",
          "False-positive mass: $\\tfrac{999}{1000}\\cdot\\tfrac{2}{100}=\\tfrac{1998}{100000}$.",
          "$P(D\\mid +)=\\dfrac{99}{99+1998}=\\dfrac{99}{2097}=\\boxed{\\tfrac{11}{233}}$."
        ]
      },
      {
        "name": "Natural frequencies",
        "steps": [
          "Imagine $100000$ people: $100$ diseased, $99900$ healthy.",
          "Positives among diseased: $99$. Positives among healthy: $2\\%$ of $99900=1998$.",
          "Of $99+1998=2097$ positives, $99$ are truly diseased.",
          "$\\dfrac{99}{2097}=\\boxed{\\tfrac{11}{233}}\\approx 4.7\\%$."
        ]
      }
    ],
    "remark": "Insight: even an excellent test is dominated by the base rate when the condition is rare — roughly $19$ of every $20$ positives are false. This is the canonical base-rate fallacy."
  },
  {
    "theme": "bayes",
    "themeLabel": "Total Probability & Bayes",
    "title": "The Boy Born on a Tuesday",
    "difficulty": 5,
    "task": "Find the number of",
    "tags": [
      "two-children",
      "conditioning",
      "partition",
      "counting",
      "information"
    ],
    "statement": "A family has two children, each independently a boy or girl with probability $\\tfrac12$, and each child's day of birth is uniform over the seven weekdays, independent of everything else. You learn the single fact: at least one of the two children is a boy who was born on a Tuesday. Compute the probability that both children are boys, as a reduced fraction $\\tfrac{m}{n}$, and report $m+n$.",
    "answer": "\\[\\boxed{40}\\]",
    "trap": "Arguing that the weekday is irrelevant and the answer must be the plain 'at least one boy' value $\\tfrac13$. The extra coordinate (Tuesday) shrinks the conditioning event asymmetrically: a two-boy family has two chances to supply a 'boy-Tuesday', so it is over-represented among qualifying families, pushing the answer up to $\\tfrac{13}{27}$.",
    "solutions": [
      {
        "name": "Direct enumeration",
        "steps": [
          "Each child is one of $2\\times 7=14$ equally likely types; an ordered pair of children is one of $196$ equally likely outcomes.",
          "Outcomes with at least one boy-born-Tuesday: by inclusion–exclusion $2\\cdot 14-1=27$ (each child can be the boy-Tuesday in $14$ ways, minus the doubly-counted both-boy-Tuesday case).",
          "Among these, both-boys outcomes: a boy-Tuesday paired with any of the $7$ boy-types on the other side, both orders, minus the double count: $2\\cdot 7-1=13$.",
          "$P(\\text{both boys}\\mid \\text{event})=\\tfrac{13}{27}$, so $m+n=13+27=\\boxed{40}$."
        ]
      },
      {
        "name": "Complementary counting",
        "steps": [
          "Let $T$ be the event 'a given child is a boy-Tuesday', $P(T)=\\tfrac{1}{14}$ per child.",
          "$P(\\text{no boy-Tuesday})=\\left(\\tfrac{13}{14}\\right)^2=\\tfrac{169}{196}$, so $P(\\text{at least one})=\\tfrac{27}{196}$.",
          "$P(\\text{both boys and at least one boy-Tuesday})=P(\\text{both boys})\\cdot\\big[1-(\\tfrac{6}{7})^2\\big]=\\tfrac14\\cdot\\tfrac{13}{49}=\\tfrac{13}{196}$.",
          "Ratio $=\\dfrac{13/196}{27/196}=\\tfrac{13}{27}\\Rightarrow m+n=\\boxed{40}$."
        ]
      }
    ],
    "remark": "Insight: adding an independent label to the witnessed child is not innocent — it changes how many ways each family configuration can satisfy the clue. As the label set grows (more days, hours, …) the answer drifts toward $\\tfrac12$."
  },
  {
    "theme": "bayes",
    "themeLabel": "Total Probability & Bayes",
    "title": "Three Heads and the Hidden Coin",
    "difficulty": 4,
    "task": "Find a,b",
    "tags": [
      "sequential-update",
      "predictive",
      "two-headed-coin",
      "posterior"
    ],
    "statement": "A box holds $5$ visually identical coins: four are fair ($P(H)=\\tfrac12$) and one is double-headed ($P(H)=1$). A coin is chosen uniformly at random and flipped, landing heads three times in a row. Let $a$ be the probability that the chosen coin is the double-headed one, and $b$ the probability that a fourth flip of the same coin is also heads. Find $a$ and $b$.",
    "answer": "\\[\\boxed{a=\\tfrac{2}{3},\\quad b=\\tfrac{5}{6}}\\]",
    "trap": "Concluding $b=1$ because \"three straight heads means the coin must be double-headed.\" It need not be: the fair coin survives with posterior weight $1-a=\\tfrac13$, so the fourth-flip probability is strictly below $1$. A subtler error is to compute $b$ from the prior bias $\\tfrac45\\cdot\\tfrac12+\\tfrac15\\cdot1=\\tfrac35$ instead of the posterior-updated weights; the correct predictive must re-weight by the probabilities $a,1-a$ obtained after seeing $HHH$.",
    "solutions": [
      {
        "name": "Posterior then predictive",
        "steps": [
          "Likelihoods of $HHH$: fair gives $(\\tfrac12)^3=\\tfrac18$; double-headed gives $1$.",
          "Joint masses: fair $\\tfrac45\\cdot\\tfrac18=\\tfrac1{10}$; double-headed $\\tfrac15\\cdot1=\\tfrac2{10}$.",
          "Evidence $P(HHH)=\\tfrac1{10}+\\tfrac2{10}=\\tfrac3{10}$, so $a=P(\\text{DH}\\mid HHH)=\\dfrac{2/10}{3/10}=\\tfrac23$.",
          "Fourth flip is a posterior-weighted average: $b=a\\cdot 1+(1-a)\\cdot\\tfrac12=\\tfrac23+\\tfrac13\\cdot\\tfrac12=\\boxed{\\tfrac56}$, with $a=\\boxed{\\tfrac23}$."
        ]
      },
      {
        "name": "Four-heads ratio shortcut",
        "steps": [
          "Use $b=P(H_4\\mid HHH)=\\dfrac{P(HHHH)}{P(HHH)}$, bypassing the posterior.",
          "$P(HHHH)=\\tfrac45\\cdot\\tfrac1{16}+\\tfrac15\\cdot1=\\tfrac1{20}+\\tfrac15=\\tfrac14$.",
          "$P(HHH)=\\tfrac45\\cdot\\tfrac18+\\tfrac15=\\tfrac1{10}+\\tfrac15=\\tfrac3{10}$.",
          "Hence $b=\\dfrac{1/4}{3/10}=\\boxed{\\tfrac56}$, and $a=\\dfrac{1/5}{3/10}=\\boxed{\\tfrac23}$."
        ]
      }
    ],
    "remark": "Insight: the predictive probability is a posterior-weighted average of per-hypothesis likelihoods, not a plug-in of the prior (or posterior) mean bias into a single Bernoulli. The ratio-of-evidences identity $P(H_4\\mid HHH)=P(HHHH)/P(HHH)$ sidesteps the posterior entirely and reproduces the same answer."
  },
  {
    "theme": "bayes",
    "themeLabel": "Total Probability & Bayes",
    "title": "Two Balls Cross Over",
    "difficulty": 4,
    "task": "Determine",
    "tags": [
      "urn-swap",
      "transfer",
      "posterior",
      "hypergeometric"
    ],
    "statement": "Urn I contains $3$ red and $2$ white balls; urn II contains $1$ red and $4$ white. Two balls are transferred at random (without replacement) from urn I into urn II, the contents of urn II are mixed, and one ball is then drawn from urn II — it is red. Find the probability that both transferred balls were red.",
    "answer": "\\[\\boxed{\\dfrac{9}{22}}\\]",
    "trap": "Forgetting to condition on the red draw and reporting the prior $P(\\text{both red})=\\dfrac{\\binom32}{\\binom52}=\\dfrac{3}{10}$. Observing a red ball drawn from urn II is itself evidence that more reds were transferred, so the posterior must rise above the prior.",
    "solutions": [
      {
        "name": "Total probability over the transfer count",
        "steps": [
          "Let $k$ be the number of reds among the $2$ transferred balls. Drawing $2$ from urn I (with $3$ red, $2$ white) is hypergeometric: $P(k{=}0)=\\dfrac{\\binom20\\binom32}{\\binom52}=\\dfrac1{10},\\ P(k{=}1)=\\dfrac{\\binom31\\binom21}{\\binom52}=\\dfrac35,\\ P(k{=}2)=\\dfrac{\\binom32}{\\binom52}=\\dfrac3{10}$ (these sum to $1$).",
          "After the transfer urn II holds $7$ balls of which $1+k$ are red, so $P(\\text{red draw}\\mid k)=\\dfrac{1+k}{7}$.",
          "By total probability $P(\\text{red})=\\dfrac1{10}\\cdot\\dfrac17+\\dfrac35\\cdot\\dfrac27+\\dfrac3{10}\\cdot\\dfrac37=\\dfrac{1+12+9}{70}=\\dfrac{22}{70}=\\dfrac{11}{35}$.",
          "Bayes gives $P(k{=}2\\mid\\text{red})=\\dfrac{P(k{=}2)\\,P(\\text{red}\\mid k{=}2)}{P(\\text{red})}=\\dfrac{\\frac3{10}\\cdot\\frac37}{\\frac{11}{35}}=\\dfrac{9/70}{22/70}=\\boxed{\\dfrac{9}{22}}$."
        ]
      },
      {
        "name": "Weighted-reds bookkeeping",
        "steps": [
          "Bayes' posterior is proportional to $P(k)\\cdot P(\\text{red}\\mid k)=P(k)\\cdot\\dfrac{1+k}{7}$; the common factor $\\dfrac17$ cancels in the ratio, so weight each $k$ by $P(k)\\,(1+k)$.",
          "The weights are $k{=}0\\!:\\dfrac1{10}\\cdot1=\\dfrac1{10}$, $k{=}1\\!:\\dfrac35\\cdot2=\\dfrac{12}{10}$, $k{=}2\\!:\\dfrac3{10}\\cdot3=\\dfrac9{10}$, totalling $\\dfrac{1+12+9}{10}=\\dfrac{22}{10}$.",
          "The posterior for $k{=}2$ is its share of the total weight: $\\dfrac{9/10}{22/10}=\\boxed{\\dfrac{9}{22}}$."
        ]
      }
    ],
    "remark": "Insight: choosing the transfer-count $k$ as the partition variable turns a messy two-stage experiment into one clean total-probability sum, and the observed red draw Bayesian-updates $k$ upward — the posterior $\\frac{9}{22}\\approx0.409$ exceeds the prior $\\frac{3}{10}=0.3$, exactly as evidence of a red ball should."
  },
  {
    "theme": "bayes",
    "themeLabel": "Total Probability & Bayes",
    "title": "A Bit Through Two Noisy Gates",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "noisy-channel",
      "posterior",
      "parity",
      "series"
    ],
    "statement": "A single bit (equally likely $0$ or $1$) is sent through two independent noisy gates in series. Each gate, independently, flips the bit with probability $\\tfrac14$ and leaves it unchanged otherwise. The receiver, who sees only the output of the second gate, reads a $1$. Find the probability that the original bit was a $1$.",
    "answer": "\\[\\boxed{\\dfrac{5}{8}}\\]",
    "trap": "Using the single-gate flip probability $\\tfrac14$ as the end-to-end error, giving $P(\\text{sent }1\\mid\\text{recv }1)=\\tfrac{3/4}{3/4+1/4}=\\tfrac34$. Two gates in series flip the bit overall only when an odd number of flips occurs; the correct end-to-end flip probability is $2\\cdot\\tfrac14\\cdot\\tfrac34=\\tfrac38$, not $\\tfrac14$.",
    "solutions": [
      {
        "name": "Collapse the channel, then Bayes",
        "steps": [
          "Net flip occurs iff exactly one gate flips: $q=2\\cdot\\tfrac14\\cdot\\tfrac34=\\tfrac38$; net no-flip $=1-q=\\tfrac58$.",
          "$P(\\text{recv }1\\mid\\text{sent }1)=\\tfrac58$, $P(\\text{recv }1\\mid\\text{sent }0)=\\tfrac38$.",
          "With prior $\\tfrac12$ each: $P(\\text{recv }1)=\\tfrac12\\cdot\\tfrac58+\\tfrac12\\cdot\\tfrac38=\\tfrac12$.",
          "$P(\\text{sent }1\\mid\\text{recv }1)=\\dfrac{\\tfrac12\\cdot\\tfrac58}{\\tfrac12}=\\boxed{\\tfrac58}$."
        ]
      },
      {
        "name": "Symmetry argument",
        "steps": [
          "Since the prior is symmetric and the channel is symmetric, $P(\\text{recv }1)=\\tfrac12$, so the posterior equals the forward likelihood $P(\\text{recv }1\\mid\\text{sent }1)$.",
          "That likelihood is the probability of an even number of flips across the two gates: $\\left(\\tfrac34\\right)^2+\\left(\\tfrac14\\right)^2=\\tfrac9{16}+\\tfrac1{16}=\\tfrac{10}{16}$.",
          "Hence $P(\\text{sent }1\\mid\\text{recv }1)=\\tfrac{10}{16}=\\boxed{\\tfrac58}$."
        ]
      }
    ],
    "remark": "Insight: composing two binary symmetric channels multiplies in 'flip space' via parity, not by naive addition. The clean $\\tfrac58$ exposes the parity structure that the $\\tfrac34$ trap ignores."
  },
  {
    "theme": "bayes",
    "themeLabel": "Total Probability & Bayes",
    "title": "The Drawer's Loaded Die",
    "difficulty": 4,
    "task": "Determine",
    "tags": [
      "posterior",
      "loaded-die",
      "repeated-evidence",
      "odds"
    ],
    "statement": "A drawer holds two visually identical dice: a fair one, and a loaded one for which $P(6)=\\tfrac12$ while each of $1,2,3,4,5$ has probability $\\tfrac1{10}$. One die is chosen at random and rolled twice, showing a $6$ both times. Find the probability that the loaded die was chosen.",
    "answer": "\\[\\boxed{\\dfrac{9}{10}}\\]",
    "trap": "Updating on only one $6$ (getting $\\tfrac34$) and stopping, or multiplying the single-roll posterior by itself to get $\\tfrac{9}{16}$. The two rolls are conditionally independent given the die, so likelihoods multiply, not posteriors; the likelihood ratio compounds as $3\\times3=9$, not $3$.",
    "solutions": [
      {
        "name": "Likelihood-ratio (odds) update",
        "steps": [
          "Prior odds loaded:fair $=1:1$.",
          "Per-roll likelihood ratio $=\\dfrac{P(6\\mid\\text{loaded})}{P(6\\mid\\text{fair})}=\\dfrac{1/2}{1/6}=3$.",
          "Two independent sixes multiply the ratio: $3\\times3=9$, giving posterior odds $9:1$.",
          "$P(\\text{loaded}\\mid 66)=\\dfrac{9}{9+1}=\\boxed{\\tfrac9{10}}$."
        ]
      },
      {
        "name": "Direct Bayes",
        "steps": [
          "$P(66\\mid\\text{loaded})=\\left(\\tfrac12\\right)^2=\\tfrac14$; $P(66\\mid\\text{fair})=\\left(\\tfrac16\\right)^2=\\tfrac1{36}$.",
          "Joint masses: loaded $\\tfrac12\\cdot\\tfrac14=\\tfrac18$; fair $\\tfrac12\\cdot\\tfrac1{36}=\\tfrac1{72}$.",
          "$P(\\text{loaded}\\mid66)=\\dfrac{1/8}{1/8+1/72}=\\dfrac{9/72}{10/72}=\\boxed{\\tfrac9{10}}$."
        ]
      }
    ],
    "remark": "Insight: independent evidence multiplies likelihood ratios. The odds form makes the compounding transparent — each $6$ triples the loaded-to-fair odds."
  },
  {
    "theme": "bayes",
    "themeLabel": "Total Probability & Bayes",
    "title": "Two Screens Agree",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "base-rate",
      "conditional-independence",
      "two-tests",
      "posterior"
    ],
    "statement": "A condition has prevalence $1$ in $100$. Two screening tests are applied that are conditionally independent given a person's true status; each has sensitivity $90\\%$ and false-positive rate $10\\%$. A person tests positive on both tests. Find the exact probability that the person has the condition.",
    "answer": "\\[\\boxed{\\dfrac{9}{20}}\\]",
    "trap": "Multiplying the two single-test posteriors ($\\tfrac1{12}\\cdot\\tfrac1{12}$) or assuming the two positive results are unconditionally independent. Independence holds only given the true status; the correct route multiplies the per-test likelihood ratios on the prior odds, not the posteriors.",
    "solutions": [
      {
        "name": "Compounded likelihood ratio",
        "steps": [
          "Prior odds condition:not $=1:99$.",
          "Per-test likelihood ratio $=\\dfrac{\\text{sens}}{\\text{FPR}}=\\dfrac{0.9}{0.1}=9$.",
          "Two conditionally-independent positives: total LR $=9^2=81$, so posterior odds $=\\tfrac{1}{99}\\cdot81=\\tfrac{81}{99}=\\tfrac{9}{11}$.",
          "$P(\\text{condition}\\mid ++)=\\dfrac{9/11}{1+9/11}=\\dfrac{9}{20}=\\boxed{\\tfrac9{20}}$."
        ]
      },
      {
        "name": "Natural frequencies",
        "steps": [
          "Take $10000$ people: $100$ have the condition, $9900$ do not.",
          "Both-positive among diseased: $100\\cdot 0.9^2=81$. Both-positive among healthy: $9900\\cdot 0.1^2=99$.",
          "Total both-positive $=81+99=180$.",
          "$P(\\text{condition}\\mid++)=\\dfrac{81}{180}=\\boxed{\\tfrac9{20}}=45\\%$."
        ]
      }
    ],
    "remark": "Insight: a single positive leaves the posterior at only $\\tfrac1{12}\\approx8\\%$, but a second conditionally-independent positive vaults it to $45\\%$ — the base rate is overcome by compounding evidence, not by any one test."
  },
  {
    "theme": "bayes",
    "themeLabel": "Total Probability & Bayes",
    "title": "Knew It or Guessed It",
    "difficulty": 4,
    "task": "Determine",
    "tags": [
      "posterior",
      "exam-guessing",
      "partition",
      "elimination"
    ],
    "statement": "On a $4$-option multiple-choice question, a student knows the answer with probability $\\tfrac23$ (and then answers correctly for sure). If she does not know it, she guesses: with probability $\\tfrac12$ she can eliminate one wrong option and then picks uniformly among the remaining three, and with probability $\\tfrac12$ she guesses uniformly among all four. Given that her answer is correct, find the probability that she actually knew it.",
    "answer": "\\[\\boxed{\\dfrac{48}{55}}\\]",
    "trap": "Using the textbook guess-probability $\\tfrac14$ for the whole 'didn't know' branch and getting $\\tfrac{2/3}{2/3+\\,1/3\\cdot1/4}=\\tfrac{8}{9}$. The guessing branch is itself a mixture ($\\tfrac13$ or $\\tfrac14$ correct), so its correct-probability is $\\tfrac{7}{24}$, not $\\tfrac14$.",
    "solutions": [
      {
        "name": "Nested total probability",
        "steps": [
          "Correct-given-guess: $P(C\\mid G)=\\tfrac12\\cdot\\tfrac13+\\tfrac12\\cdot\\tfrac14=\\tfrac16+\\tfrac18=\\tfrac{7}{24}$.",
          "Correct overall: $P(C)=\\tfrac23\\cdot1+\\tfrac13\\cdot\\tfrac{7}{24}=\\tfrac23+\\tfrac{7}{72}=\\tfrac{48+7}{72}=\\tfrac{55}{72}$.",
          "$P(\\text{knew}\\mid C)=\\dfrac{2/3}{55/72}=\\dfrac{48/72}{55/72}=\\boxed{\\tfrac{48}{55}}$."
        ]
      },
      {
        "name": "Common-denominator counting",
        "steps": [
          "Scale all masses to denominator $72$: knew-and-correct $=\\tfrac23=\\tfrac{48}{72}$.",
          "Guess-and-correct $=\\tfrac13\\cdot\\tfrac{7}{24}=\\tfrac{7}{72}$.",
          "Total correct mass $=\\tfrac{48+7}{72}=\\tfrac{55}{72}$.",
          "Posterior $=\\dfrac{48}{55}=\\boxed{\\tfrac{48}{55}}$."
        ]
      }
    ],
    "remark": "Insight: the 'guess' branch hides a sub-partition. Collapsing it to a single $\\tfrac14$ is the seductive shortcut; honoring the elimination case changes the answer from $\\tfrac89$ to $\\tfrac{48}{55}$."
  },
  {
    "theme": "bayes",
    "themeLabel": "Total Probability & Bayes",
    "title": "The Third Item Is the First Defective",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "posterior",
      "geometric",
      "hybrid",
      "machine-mode",
      "waiting-time"
    ],
    "statement": "A machine runs in one of two modes. In the good mode (prior probability $\\tfrac34$) each item is defective independently with probability $\\tfrac1{10}$; in the bad mode (prior $\\tfrac14$) the defect probability is $\\tfrac12$. Items are inspected one at a time until the first defective appears, and it turns out that the first two items are good and the third is defective. Find the probability that the machine is in the bad mode.",
    "answer": "\\[\\boxed{\\dfrac{125}{368}}\\]",
    "trap": "Conditioning only on 'the third item is defective' and ignoring that the first two were observed good — or using the per-item defect probabilities as if they were the likelihoods. The evidence is the whole waiting-time pattern $G,G,D$, whose likelihood under each mode is $(1-p)^2 p$; two good items are themselves evidence favoring the good mode. (Conditioning on a single defective item instead would give $\\tfrac58$, badly inflated.)",
    "solutions": [
      {
        "name": "Waiting-time likelihood + Bayes",
        "steps": [
          "Likelihood of $G,G,D$: good mode $(\\tfrac9{10})^2\\cdot\\tfrac1{10}=\\tfrac{81}{1000}$; bad mode $(\\tfrac12)^2\\cdot\\tfrac12=\\tfrac18$.",
          "Joint masses: good $\\tfrac34\\cdot\\tfrac{81}{1000}=\\tfrac{243}{4000}$; bad $\\tfrac14\\cdot\\tfrac18=\\tfrac1{32}=\\tfrac{125}{4000}$.",
          "Evidence $=\\tfrac{243+125}{4000}=\\tfrac{368}{4000}$.",
          "$P(\\text{bad}\\mid GGD)=\\dfrac{125/4000}{368/4000}=\\boxed{\\tfrac{125}{368}}$."
        ]
      },
      {
        "name": "Odds form",
        "steps": [
          "Prior odds bad:good $=\\tfrac14:\\tfrac34=1:3$.",
          "Likelihood ratio $=\\dfrac{(\\tfrac12)^2\\tfrac12}{(\\tfrac9{10})^2\\tfrac1{10}}=\\dfrac{1/8}{81/1000}=\\dfrac{1000}{648}=\\dfrac{125}{81}$.",
          "Posterior odds $=\\tfrac13\\cdot\\tfrac{125}{81}=\\tfrac{125}{243}$.",
          "$P(\\text{bad}\\mid GGD)=\\dfrac{125}{125+243}=\\boxed{\\tfrac{125}{368}}$."
        ]
      }
    ],
    "remark": "Insight: the observation is a geometric waiting time, so the likelihood is $(1-p)^2p$, fusing the conditioning of total probability with a discrete distribution. The two good items quietly pull the posterior toward the good mode, capping it near $\\tfrac13$."
  },
  {
    "theme": "binomial",
    "themeLabel": "Bernoulli Trials & the Binomial",
    "title": "The Crowded Mode",
    "difficulty": 3,
    "task": "Determine",
    "tags": [
      "binomial",
      "most-probable-number",
      "mode",
      "ratio-test"
    ],
    "statement": "A bent coin shows heads on each toss with probability $\\tfrac{2}{5}$, independently. It is tossed $12$ times. \\[\\text{Determine the most probable number of heads.}\\]",
    "answer": "\\[\\boxed{5}\\]",
    "trap": "Reading $np=12\\cdot\\tfrac25=4.8$ and rounding to $5$ happens to give the right number here, but the seductive wrong rule is to round $np$ to the nearest integer, which fails in general (e.g. $np=4.2$ would wrongly suggest $4$ when the true mode can be $4$ only after the correct test). The honest tool is the ratio $\\tfrac{P(X=k)}{P(X=k-1)}=\\tfrac{(n-k+1)p}{k\\,q}\\ge 1$, giving mode $=\\lfloor (n+1)p\\rfloor$, not $\\mathrm{round}(np)$.",
    "solutions": [
      {
        "name": "Successive-ratio test",
        "steps": [
          "For $X\\sim\\mathrm{Bin}(12,\\tfrac25)$, form $r_k=\\dfrac{P(X=k)}{P(X=k-1)}=\\dfrac{(13-k)}{k}\\cdot\\dfrac{2/5}{3/5}=\\dfrac{2(13-k)}{3k}.$",
          "Solve $r_k\\ge 1\\iff 2(13-k)\\ge 3k\\iff 26\\ge 5k\\iff k\\le 5.2$.",
          "So probabilities rise through $k=5$ and fall after, i.e. the maximum is at $k=5$.",
          "\\[\\boxed{5}\\]"
        ]
      },
      {
        "name": "Floor formula",
        "steps": [
          "The mode of $\\mathrm{Bin}(n,p)$ is $\\lfloor (n+1)p\\rfloor$ when $(n+1)p\\notin\\mathbb Z$.",
          "Here $(n+1)p=13\\cdot\\tfrac25=\\tfrac{26}{5}=5.2\\notin\\mathbb Z$, so the unique mode is $\\lfloor 5.2\\rfloor=5$.",
          "\\[\\boxed{5}\\]"
        ]
      }
    ],
    "remark": "Insight: the mode is governed by where the term-to-term ratio crosses $1$, i.e. by $(n+1)p$, not by rounding the mean $np$. The two agree often enough to lull students into the wrong rule."
  },
  {
    "theme": "binomial",
    "themeLabel": "Bernoulli Trials & the Binomial",
    "title": "At Least Two, Not At Least One",
    "difficulty": 3,
    "task": "Evaluate",
    "tags": [
      "binomial",
      "at-least",
      "complement",
      "off-by-one"
    ],
    "statement": "A machine fires $5$ independent shots, each hitting its target with probability $\\tfrac13$. \\[\\text{Evaluate the probability that at least two shots hit.}\\]",
    "answer": "\\[\\boxed{\\dfrac{131}{243}}\\]",
    "trap": "The reflex \"at least\" $\\Rightarrow 1-P(\\text{none})$ is the off-by-one killer here: that computes \"at least one.\" \"At least two\" requires subtracting BOTH $P(0)$ and $P(1)$, i.e. $1-P(0)-P(1)$. Forgetting the $k=1$ term inflates the answer to $1-(2/3)^5=\\tfrac{211}{243}$.",
    "solutions": [
      {
        "name": "Complement of the tail",
        "steps": [
          "$P(X\\ge 2)=1-P(X=0)-P(X=1)$ for $X\\sim\\mathrm{Bin}(5,\\tfrac13)$.",
          "$P(X=0)=\\left(\\tfrac23\\right)^5=\\tfrac{32}{243}$, and $P(X=1)=\\binom51\\tfrac13\\left(\\tfrac23\\right)^4=5\\cdot\\tfrac13\\cdot\\tfrac{16}{81}=\\tfrac{80}{243}$.",
          "$P(X\\ge2)=1-\\tfrac{32}{243}-\\tfrac{80}{243}=1-\\tfrac{112}{243}=\\tfrac{131}{243}$.",
          "\\[\\boxed{\\dfrac{131}{243}}\\]"
        ]
      },
      {
        "name": "Direct summation",
        "steps": [
          "Sum the relevant terms: $P(X\\ge2)=\\sum_{k=2}^{5}\\binom5k\\left(\\tfrac13\\right)^k\\left(\\tfrac23\\right)^{5-k}$.",
          "With denominator $3^5=243$, each term's numerator is $\\binom5k\\,2^{5-k}$: $k{=}2{:}\\,\\binom52\\,2^{3}=10\\cdot8=80$, $k{=}3{:}\\,\\binom53\\,2^{2}=10\\cdot4=40$, $k{=}4{:}\\,\\binom54\\,2^{1}=5\\cdot2=10$, $k{=}5{:}\\,\\binom55\\,2^{0}=1$.",
          "Total numerator $=80+40+10+1=131$, giving $\\tfrac{131}{243}$.",
          "\\[\\boxed{\\dfrac{131}{243}}\\]"
        ]
      }
    ],
    "remark": "Insight: \"at least $m$\" complements to the tail $1-\\sum_{k<m}$, and the boundary count $m$ is exactly where students drop a term. The direct sum is a clean cross-check on the off-by-one."
  },
  {
    "theme": "binomial",
    "themeLabel": "Bernoulli Trials & the Binomial",
    "title": "The Odd Awakening",
    "difficulty": 4,
    "task": "Find",
    "tags": [
      "geometric",
      "waiting-time",
      "first-success",
      "infinite-series",
      "parity"
    ],
    "statement": "A trial succeeds with probability $p=\\tfrac13$ on each independent attempt; trials repeat until the first success. \\[\\text{Find the probability that the first success occurs on an odd-numbered trial.}\\]",
    "answer": "\\[\\boxed{\\dfrac{3}{5}}\\]",
    "trap": "Many feel that odd and even should split $\\tfrac12$ each by symmetry, but there is no symmetry: trial $1$ is reachable with no prior failures, so odd positions are systematically favored. The other trap is summing only the odd-index geometric series but forgetting it is $p\\sum q^{2k}$ (ratio $q^2$), not $p\\sum q^{k}$ (ratio $q$).",
    "solutions": [
      {
        "name": "Geometric series on odd indices",
        "steps": [
          "The first success is on trial $2k+1$ ($k\\ge0$) with probability $q^{2k}p$, where $q=1-p=\\tfrac23$.",
          "Sum: $\\displaystyle\\sum_{k\\ge0}q^{2k}p=\\frac{p}{1-q^2}=\\frac{p}{(1-q)(1+q)}=\\frac{p}{p(1+q)}=\\frac1{1+q}=\\frac1{2-p}.$",
          "With $p=\\tfrac13$: $\\dfrac1{2-\\frac13}=\\dfrac1{5/3}=\\dfrac35$.",
          "\\[\\boxed{\\dfrac{3}{5}}\\]"
        ]
      },
      {
        "name": "One-step recursion",
        "steps": [
          "Let $O=P(\\text{first success odd})$. With probability $p$ the first trial succeeds (odd, done). With probability $q$ it fails and we restart shifted by one, so a success that is now odd from the restarted clock lands on an even original trial.",
          "Thus $O=p+q(1-O)$, i.e. $O=p+q-qO\\Rightarrow O(1+q)=p+q=1$, so $O=\\dfrac1{1+q}=\\dfrac1{2-p}$.",
          "Substitute $p=\\tfrac13$: $O=\\tfrac35$.",
          "\\[\\boxed{\\dfrac{3}{5}}\\]"
        ]
      },
      {
        "name": "Odd minus even via a single geometric ratio",
        "steps": [
          "Let $O$ and $E$ be the probabilities of odd and even first success; certainly $O+E=1$ since success is eventual.",
          "Pair trial $2k+1$ with the next trial $2k+2$: the even term is exactly $q$ times the odd term, so $E=qO$. Hence $O+qO=1$, giving $O=\\dfrac1{1+q}=\\dfrac1{2-p}$.",
          "With $p=\\tfrac13$, $q=\\tfrac23$: $O=\\dfrac1{1+2/3}=\\dfrac35$ (and $E=\\tfrac25$).",
          "\\[\\boxed{\\dfrac{3}{5}}\\]"
        ]
      }
    ],
    "remark": "Insight: $O=\\dfrac1{2-p}>\\dfrac12$ for every $p\\in(0,1)$ because the count starts at $1$, so odd is always favored. The recursion (and the $E=qO$ pairing) converts an infinite series into a single linear equation."
  },
  {
    "theme": "binomial",
    "themeLabel": "Bernoulli Trials & the Binomial",
    "title": "The Third Six's Arrival",
    "difficulty": 4,
    "task": "Find",
    "tags": [
      "negative-binomial",
      "r-th-success",
      "waiting-time",
      "dice"
    ],
    "statement": "A fair die is rolled repeatedly; a six counts as a success. \\[\\text{Find the probability that the third six appears on exactly the seventh roll.}\\]",
    "answer": "\\[\\boxed{\\dfrac{3125}{93312}}\\]",
    "trap": "Writing $\\binom73$ for the count of arrangements treats it as \"exactly $3$ sixes in $7$ rolls.\" But the $7$th roll is forced to be the third six, so only the first $6$ rolls are free and must contain exactly $2$ sixes: the coefficient is $\\binom62$, not $\\binom73$. Locking the last trial is the whole point of the negative binomial.",
    "solutions": [
      {
        "name": "Negative binomial formula",
        "steps": [
          "For the $r$-th success on trial $n$: $P=\\binom{n-1}{r-1}p^{r}q^{\\,n-r}$ with $p=\\tfrac16,\\ q=\\tfrac56,\\ n=7,\\ r=3$.",
          "$P=\\binom{6}{2}\\left(\\tfrac16\\right)^{3}\\left(\\tfrac56\\right)^{4}=15\\cdot\\tfrac1{216}\\cdot\\tfrac{625}{1296}.$",
          "$=\\dfrac{15\\cdot625}{216\\cdot1296}=\\dfrac{9375}{279936}=\\dfrac{3125}{93312}.$",
          "\\[\\boxed{\\dfrac{3125}{93312}}\\]"
        ]
      },
      {
        "name": "Condition on the last roll",
        "steps": [
          "The event $=$ (exactly $2$ sixes among rolls $1$–$6$) $\\cap$ (roll $7$ is a six), and these are independent.",
          "$P(\\text{2 sixes in 6})=\\binom62\\left(\\tfrac16\\right)^2\\left(\\tfrac56\\right)^4=15\\cdot\\tfrac1{36}\\cdot\\tfrac{625}{1296}=\\tfrac{9375}{46656}.$",
          "Multiply by $P(\\text{roll }7=\\text{six})=\\tfrac16$: $\\tfrac{9375}{46656}\\cdot\\tfrac16=\\tfrac{9375}{279936}=\\tfrac{3125}{93312}.$",
          "\\[\\boxed{\\dfrac{3125}{93312}}\\]"
        ]
      }
    ],
    "remark": "Insight: a waiting-time event silently pins the final trial. The binomial coefficient counts placements of the earlier successes only — here $\\binom62$, decisively not $\\binom73$."
  },
  {
    "theme": "binomial",
    "themeLabel": "Bernoulli Trials & the Binomial",
    "title": "No Two Heads Back to Back",
    "difficulty": 4,
    "task": "Find",
    "tags": [
      "runs",
      "fibonacci",
      "recursion",
      "fair-coin",
      "enumeration"
    ],
    "statement": "A fair coin is tossed $6$ times. \\[\\text{Find the probability that no two heads occur on consecutive tosses.}\\]",
    "answer": "\\[\\boxed{\\dfrac{21}{64}}\\]",
    "trap": "Treating \"no two consecutive heads\" as a binomial constraint on the *number* of heads (e.g. \"at most $3$ heads\") is the trap: the constraint is on the *arrangement*, not the count — three non-adjacent heads are allowed but three adjacent ones are not. Independence of tosses does not make this event binomial in $k$; it is a run/adjacency condition counted combinatorially.",
    "solutions": [
      {
        "name": "Fibonacci recursion",
        "steps": [
          "Let $a_n$ = number of binary strings of length $n$ with no two adjacent $H$. A valid string ends in $T$ (preceded by any valid length-$(n-1)$ string) or in $H$ (preceded by $T$ then any valid length-$(n-2)$ string): $a_n=a_{n-1}+a_{n-2}$.",
          "With $a_1=2,\\ a_2=3$: $a_3=5,\\ a_4=8,\\ a_5=13,\\ a_6=21$ (the Fibonacci numbers $F_{n+2}$).",
          "All $2^6=64$ strings are equally likely, so $P=\\dfrac{a_6}{64}=\\dfrac{21}{64}.$",
          "\\[\\boxed{\\dfrac{21}{64}}\\]"
        ]
      },
      {
        "name": "Gap (stars-and-bars) count",
        "steps": [
          "If there are $k$ heads with no two adjacent among $6$ tosses, choose their positions from the $6-k+1$ gaps around the $6-k$ tails: $\\binom{6-k+1}{k}=\\binom{7-k}{k}$ valid strings.",
          "Sum over admissible $k$ ($k=0,\\dots,3$): $\\binom70+\\binom61+\\binom52+\\binom43=1+6+10+4=21.$",
          "$P=\\dfrac{21}{64}.$",
          "\\[\\boxed{\\dfrac{21}{64}}\\]"
        ]
      }
    ],
    "remark": "Insight: adjacency constraints are recurrence/Fibonacci objects, not binomial-in-$k$ objects. The gap-count $\\sum_k\\binom{7-k}{k}=F_8$ is the same Fibonacci appearing combinatorially."
  },
  {
    "theme": "binomial",
    "themeLabel": "Bernoulli Trials & the Binomial",
    "title": "A Tie at the Top",
    "difficulty": 4,
    "task": "Find all",
    "tags": [
      "binomial",
      "mode",
      "integer-boundary",
      "two-modes",
      "ratio-test"
    ],
    "statement": "A coin with $P(\\text{head})=\\tfrac14$ is tossed $11$ times. \\[\\text{Find all values of }k\\text{ for which }P(X=k)\\text{ is maximal, where }X\\text{ is the number of heads.}\\]",
    "answer": "\\[\\boxed{\\{2,\\,3\\}}\\]",
    "trap": "Applying the unique-mode formula $\\lfloor (n+1)p\\rfloor$ blindly gives a single answer $3$ and hides the tie. Here $(n+1)p=12\\cdot\\tfrac14=3$ is an *integer*, the degenerate boundary case where $P(X=2)=P(X=3)$ exactly — two modes. Quoting one mode misses half the answer.",
    "solutions": [
      {
        "name": "Ratio equals one",
        "steps": [
          "$\\dfrac{P(X=k)}{P(X=k-1)}=\\dfrac{(12-k)}{k}\\cdot\\dfrac{1/4}{3/4}=\\dfrac{12-k}{3k}.$",
          "Set $=1$: $12-k=3k\\Rightarrow k=3$. So $P(X=3)=P(X=2)$, the ratio exceeds $1$ for $k<3$ and is below $1$ for $k>3$.",
          "Hence the probability climbs to $k=2$, stays equal at $k=3$, then falls: the maximum is attained at both $k=2$ and $k=3$.",
          "\\[\\boxed{\\{2,\\,3\\}}\\]"
        ]
      },
      {
        "name": "Integer-boundary criterion",
        "steps": [
          "The mode of $\\mathrm{Bin}(n,p)$ is double precisely when $(n+1)p\\in\\mathbb Z$, the modes being $(n+1)p$ and $(n+1)p-1$.",
          "Here $(n+1)p=12\\cdot\\tfrac14=3\\in\\mathbb Z$, so the two modes are $3$ and $2$.",
          "\\[\\boxed{\\{2,\\,3\\}}\\]"
        ]
      }
    ],
    "remark": "Insight: the mode is unique except on the measure-zero boundary $(n+1)p\\in\\mathbb Z$, where it splits into two adjacent values. A well-set problem hides exactly on that boundary."
  },
  {
    "theme": "binomial",
    "themeLabel": "Bernoulli Trials & the Binomial",
    "title": "Which Coin Did I Grab?",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "binomial",
      "bayes",
      "posterior",
      "mixture",
      "conditional"
    ],
    "statement": "A box holds two coins: a fair coin ($P(\\text{head})=\\tfrac12$) and a biased coin ($P(\\text{head})=\\tfrac34$). One coin is chosen at random and tossed $4$ times, yielding exactly $3$ heads. \\[\\text{Determine the probability that the biased coin was chosen.}\\]",
    "answer": "\\[\\boxed{\\dfrac{27}{43}}\\]",
    "trap": "Two snares. (1) Plugging in the *prior* $\\tfrac12$ as if it were the answer — ignoring that the evidence (3 heads in 4) updates it. (2) Computing the likelihoods without the binomial coefficient $\\binom43$ and worrying it changes the posterior — it appears in every term and cancels, but students either wrongly include it asymmetrically or wrongly think omitting it biases the result. The clean move: equal priors, so the posterior is the *normalized likelihood ratio*.",
    "solutions": [
      {
        "name": "Bayes with cancellation",
        "steps": [
          "Let $B$=biased, $F$=fair, priors $\\tfrac12$ each. Evidence $E$ = $3$ heads in $4$ tosses.",
          "$P(E\\mid B)=\\binom43\\left(\\tfrac34\\right)^3\\tfrac14=\\binom43\\tfrac{27}{256}$ and $P(E\\mid F)=\\binom43\\left(\\tfrac12\\right)^4=\\binom43\\tfrac{16}{256}.$",
          "Equal priors $\\Rightarrow P(B\\mid E)=\\dfrac{P(E\\mid B)}{P(E\\mid B)+P(E\\mid F)}=\\dfrac{27}{27+16}=\\dfrac{27}{43}$ ($\\binom43$ and $256$ cancel).",
          "\\[\\boxed{\\dfrac{27}{43}}\\]"
        ]
      },
      {
        "name": "Odds form",
        "steps": [
          "Posterior odds = prior odds $\\times$ likelihood ratio. Prior odds $B{:}F=1{:}1$.",
          "Likelihood ratio $\\dfrac{P(E\\mid B)}{P(E\\mid F)}=\\dfrac{(3/4)^3(1/4)}{(1/2)^4}=\\dfrac{27/256}{16/256}=\\dfrac{27}{16}$ (binomial coefficient cancels).",
          "Posterior odds $27{:}16\\Rightarrow P(B\\mid E)=\\dfrac{27}{43}.$",
          "\\[\\boxed{\\dfrac{27}{43}}\\]"
        ]
      }
    ],
    "remark": "Insight: with equal priors the posterior is just the likelihood ratio normalized, and the shared $\\binom{n}{k}$ never matters. The data move the belief from $\\tfrac12$ up to $\\tfrac{27}{43}$."
  },
  {
    "theme": "binomial",
    "themeLabel": "Bernoulli Trials & the Binomial",
    "title": "Waiting for a Double",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "runs",
      "markov-states",
      "expected-waiting-time",
      "recursion",
      "bernoulli"
    ],
    "statement": "A coin shows heads with probability $p=\\tfrac13$ on each independent toss. Let $T$ be the toss on which two heads first appear in a row ($HH$). \\[\\text{Evaluate }\\;\\mathbb E[T].\\]",
    "answer": "\\[\\boxed{12}\\]",
    "trap": "Modeling $T$ as a single geometric/negative-binomial waiting time — e.g. \"wait for two heads\" $\\Rightarrow \\tfrac{2}{p}=6$ — ignores that the two heads must be consecutive: a tail after a lone head resets all progress. The pattern $HH$ has overlap structure, so the correct object is a Markov chain (or the pattern-correlation/Conway formula), not a plain negative binomial.",
    "solutions": [
      {
        "name": "First-step Markov states",
        "steps": [
          "States: $S_0$ (no progress), $S_1$ (last toss was a lone $H$), absorb on $HH$. Let $E_0,E_1$ be expected further tosses.",
          "$E_1=1+p\\cdot0+q\\,E_0$ (from one $H$: another $H$ absorbs, a $T$ returns to $S_0$). $E_0=1+p\\,E_1+q\\,E_0$.",
          "With $p=\\tfrac13,q=\\tfrac23$: $E_1=1+\\tfrac23E_0$, and $E_0=1+\\tfrac13E_1+\\tfrac23E_0\\Rightarrow \\tfrac13E_0=1+\\tfrac13E_1\\Rightarrow E_0=3+E_1.$",
          "Substitute: $E_0=3+1+\\tfrac23E_0\\Rightarrow \\tfrac13E_0=4\\Rightarrow E_0=12.$",
          "\\[\\boxed{12}\\]"
        ]
      },
      {
        "name": "Closed form via self-overlap",
        "steps": [
          "For the first occurrence of a run of two heads, $\\mathbb E[T]=\\dfrac1p+\\dfrac1{p^2}=\\dfrac{1+p}{p^2}$ (the pattern $HH$ overlaps itself at shift $1$, contributing the $\\tfrac1p$ term).",
          "With $p=\\tfrac13$: $\\mathbb E[T]=\\dfrac{1+\\frac13}{(1/3)^2}=\\dfrac{4/3}{1/9}=\\dfrac43\\cdot9=12.$",
          "\\[\\boxed{12}\\]"
        ]
      }
    ],
    "remark": "Insight: waiting for a run is not negative-binomial — the self-overlap of $HH$ injects the extra $\\tfrac1p$ via Conway's leading-numbers / Markov reset. Two independent methods (states and the overlap formula) converge on $12$."
  },
  {
    "theme": "binomial",
    "themeLabel": "Bernoulli Trials & the Binomial",
    "title": "The Urn That Isn't Binomial",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "hypergeometric",
      "without-replacement",
      "dependence",
      "binomial-trap",
      "conditioning"
    ],
    "statement": "An urn contains $4$ red and $6$ white balls. Three balls are drawn without replacement. \\[\\text{Evaluate the probability that exactly two are red.}\\]",
    "answer": "\\[\\boxed{\\dfrac{3}{10}}\\]",
    "trap": "Treating the three draws as Bernoulli trials with a fixed $p=\\tfrac{4}{10}$ and writing $\\binom32 p^2(1-p)=\\tfrac{36}{125}=0.288$ is the headline trap: without replacement the draws are dependent, the success probability shifts each draw, so the count is hypergeometric, not binomial. The binomial value $0.288$ is simply wrong; the truth is $0.3$.",
    "solutions": [
      {
        "name": "Hypergeometric count",
        "steps": [
          "Choose which balls are drawn: total equally-likely $3$-subsets number $\\binom{10}{3}=120.$",
          "Favorable $=$ (choose $2$ of the $4$ red)$\\times$(choose $1$ of the $6$ white) $=\\binom42\\binom61=6\\cdot 6=36.$",
          "$P=\\dfrac{36}{120}=\\dfrac{3}{10}.$",
          "\\[\\boxed{\\dfrac{3}{10}}\\]"
        ]
      },
      {
        "name": "Ordered conditional product",
        "steps": [
          "Fix one order pattern, say R,R,W: $\\dfrac4{10}\\cdot\\dfrac39\\cdot\\dfrac68=\\dfrac{72}{720}=\\dfrac1{10}.$",
          "Each of the $\\binom32=3$ placements of the two reds among the three draws gives the same product by symmetry, so $P=3\\cdot\\dfrac1{10}=\\dfrac3{10}.$",
          "The per-draw probabilities $\\tfrac4{10},\\tfrac39,\\tfrac68$ change between draws, confirming dependence rather than a fixed-$p$ binomial.",
          "\\[\\boxed{\\dfrac{3}{10}}\\]"
        ]
      }
    ],
    "remark": "Insight: \"independent identical trials\" is the load-bearing hypothesis of the binomial law. Sampling without replacement breaks it; the hypergeometric distribution is the correct dependent analogue, and here it differs from the naive binomial guess ($0.300$ versus $0.288$).",
    "verification": "Python-verified: $\\binom42\\binom61/\\binom{10}{3}=36/120=3/10$; the ordered product $3\\cdot\\tfrac4{10}\\tfrac39\\tfrac68=3/10$; exhaustive enumeration over all $120$ labeled $3$-subsets gives $36$ favorable $=3/10$. The binomial trap $\\binom32(0.4)^2(0.6)=36/125=0.288\\neq3/10$."
  },
  {
    "theme": "binomial",
    "themeLabel": "Bernoulli Trials & the Binomial",
    "title": "Pinning the Mode",
    "difficulty": 5,
    "task": "Find the number of",
    "tags": [
      "binomial",
      "mode",
      "parameter-range",
      "integer-boundary",
      "uniqueness"
    ],
    "statement": "A coin has $P(\\text{head})=\\tfrac14$. For a positive integer $n$, let $X\\sim\\mathrm{Bin}(n,\\tfrac14)$. \\[\\text{Find the number of integers }n\\text{ for which }k=3\\text{ is the }unique\\text{ most probable number of heads.}\\]",
    "answer": "\\[\\boxed{3}\\]",
    "trap": "Solving $\\lfloor (n+1)/4\\rfloor=3$ gives $12\\le n+1\\le 15$, i.e. $n\\in\\{11,12,13,14\\}$ — and stopping there wrongly counts $n=11$. But at $n=11$, $(n+1)p=3$ is an integer, so the mode is the *tie* $\\{2,3\\}$ — not unique. Demanding *uniqueness* excludes that boundary; similarly $n=15$ gives the tie $\\{3,4\\}$ and is excluded. Only $n=12,13,14$ survive.",
    "solutions": [
      {
        "name": "Unique-mode inequality",
        "steps": [
          "The unique mode of $\\mathrm{Bin}(n,p)$ equals $3$ iff $(n+1)p$ lies strictly between $3$ and $4$ (open interval, to forbid the integer-boundary ties): $3<(n+1)\\tfrac14<4.$",
          "Multiply by $4$: $12<n+1<16$, i.e. $11<n<15$, so $n\\in\\{12,13,14\\}.$",
          "Check ends: $n=11\\Rightarrow(n+1)p=3$ gives modes $\\{2,3\\}$ (not unique); $n=15\\Rightarrow(n+1)p=4$ gives modes $\\{3,4\\}$ (not unique). Both rejected.",
          "Hence there are $\\boxed{3}$ such $n$.",
          "\\[\\boxed{3}\\]"
        ]
      },
      {
        "name": "Direct ratio bracketing",
        "steps": [
          "Unique mode at $3$ needs $P(X{=}3)>P(X{=}2)$ and $P(X{=}3)>P(X{=}4)$.",
          "$P(3)>P(2)\\iff \\tfrac{n-2}{3}\\cdot\\tfrac13>1\\iff n>11$; $P(3)>P(4)\\iff \\tfrac{n-3}{4}\\cdot\\tfrac13<1\\iff n<15.$",
          "So $11<n<15\\Rightarrow n\\in\\{12,13,14\\}$, three values (strict inequalities automatically drop the tied boundaries).",
          "\\[\\boxed{3}\\]"
        ]
      },
      {
        "name": "Enumeration check",
        "steps": [
          "Compute the mode set for each candidate: $n=11\\to\\{2,3\\}$, $n=12\\to\\{3\\}$, $n=13\\to\\{3\\}$, $n=14\\to\\{3\\}$, $n=15\\to\\{3,4\\}$.",
          "Exactly $n=12,13,14$ have $3$ as the sole mode.",
          "\\[\\boxed{3}\\]"
        ]
      }
    ],
    "remark": "Insight: 'unique mode $=3$' is an open-interval condition $3<(n+1)p<4$; the closed-interval version silently swallows the two boundary ties. The word 'unique' is doing all the work — it removes exactly the two endpoints."
  },
  {
    "theme": "expectation",
    "themeLabel": "Random Variables & Expectation",
    "title": "The Honest Variance of Returned Hats",
    "difficulty": 4,
    "task": "Determine",
    "tags": [
      "linearity",
      "indicator",
      "variance",
      "permutations",
      "covariance"
    ],
    "statement": "Eight guests at a party each toss their hat into a pile; the hats are returned to the eight guests uniformly at random (a uniformly random permutation). Let $X$ be the number of guests who receive their own hat back. Determine $\\operatorname{Var}(X)$.",
    "answer": "\\[\\boxed{1}\\]",
    "trap": "Writing $X=\\sum_{i=1}^{8} I_i$ with $I_i=\\mathbf 1[\\text{guest } i \\text{ gets own hat}]$ and then claiming $\\operatorname{Var}(X)=\\sum \\operatorname{Var}(I_i)=8\\cdot\\frac18\\cdot\\frac78=\\frac78$. This treats the indicators as independent, but they are NOT: knowing one guest got their own hat changes the probabilities for the others. The positive pairwise covariances exactly add back $\\tfrac18$ to give $1$.",
    "solutions": [
      {
        "name": "Indicators with covariance (the honest way)",
        "steps": [
          "Let $I_i=\\mathbf 1[\\pi(i)=i]$, so $X=\\sum_{i=1}^{8} I_i$ and $E[X]=8\\cdot\\frac18=1$.",
          "$\\operatorname{Var}(X)=\\sum_i \\operatorname{Var}(I_i)+\\sum_{i\\ne j}\\operatorname{Cov}(I_i,I_j)$. Here $\\operatorname{Var}(I_i)=\\frac18\\cdot\\frac78$.",
          "For $i\\ne j$: $E[I_iI_j]=P(\\pi(i)=i,\\pi(j)=j)=\\frac{6!}{8!}=\\frac1{8\\cdot7}$, so $\\operatorname{Cov}(I_i,I_j)=\\frac1{56}-\\frac1{64}=\\frac1{8^2\\cdot7}$.",
          "$\\sum_i\\operatorname{Var}=8\\cdot\\frac7{64}=\\frac78$; $\\sum_{i\\ne j}\\operatorname{Cov}=8\\cdot7\\cdot\\frac1{448}=\\frac18$. Total $\\operatorname{Var}(X)=\\frac78+\\frac18=\\boxed{1}$."
        ]
      },
      {
        "name": "Falling factorial moments",
        "steps": [
          "The number of permutations of $\\{1,\\dots,8\\}$ fixing a chosen pair $\\{i,j\\}$ is $6!$, and $\\binom{8}{2}$ such pairs, so $E\\!\\big[\\binom{X}{2}\\big]=\\binom{8}{2}\\frac{6!}{8!}=\\frac12$. Hence $E[X(X-1)]=1$.",
          "Thus $E[X^2]=E[X(X-1)]+E[X]=1+1=2$, and with $E[X]=1$ we get $\\operatorname{Var}(X)=2-1^2=\\boxed{1}$."
        ]
      },
      {
        "name": "Exact distribution (derangement count)",
        "steps": [
          "$P(X=k)=\\frac1{k!}\\sum_{j=0}^{8-k}\\frac{(-1)^j}{j!}$; for large $8$ this is essentially a Poisson$(1)$ law, whose variance is $1$.",
          "Direct enumeration over all $8!=40320$ permutations gives $E[X]=1$ and $E[X^2]=2$, so $\\operatorname{Var}(X)=\\boxed{1}$, confirming the indicator computation."
        ]
      }
    ],
    "remark": "Insight: a random permutation's fixed-point count has mean AND variance both equal to $1$ for every $n\\ge2$ — the size of the party is irrelevant. The whole problem is a trap for the reflex 'variance of a sum is the sum of variances', which silently assumes independence."
  },
  {
    "theme": "expectation",
    "themeLabel": "Random Variables & Expectation",
    "title": "Record-Breaking Heights",
    "difficulty": 3,
    "task": "Evaluate",
    "tags": [
      "linearity",
      "indicator",
      "records",
      "permutations",
      "harmonic"
    ],
    "statement": "Ten people of distinct heights walk past a window one at a time in a uniformly random order. An observer shouts \"new record!\" each time the person currently passing is taller than everyone seen so far (the very first person always triggers a shout). Let $R$ be the total number of shouts. Evaluate $E[R]$.",
    "answer": "\\[\\boxed{\\dfrac{7381}{2520}}\\]",
    "trap": "Trying to count permutations by the value of $R$ (Stirling numbers of the first kind) and summing $k\\,P(R=k)$. It works but is needless agony; worse, many students guess the records are 'rare' and underestimate, or assume the record-events at different positions are independent (they are not) and fumble the count. Linearity needs no such count.",
    "solutions": [
      {
        "name": "Indicator per position",
        "steps": [
          "Let $I_k=\\mathbf 1[\\text{the } k\\text{-th person is a new record}]$, so $R=\\sum_{k=1}^{10} I_k$.",
          "The $k$-th person is a record iff, among the first $k$ people, the tallest happens to be in position $k$. By symmetry each of those $k$ is equally likely to be the tallest, so $P(I_k=1)=\\frac1k$.",
          "By linearity $E[R]=\\sum_{k=1}^{10}\\frac1k=H_{10}$.",
          "$H_{10}=1+\\tfrac12+\\cdots+\\tfrac1{10}=\\boxed{\\dfrac{7381}{2520}}\\approx2.929$."
        ]
      },
      {
        "name": "Insertion recursion",
        "steps": [
          "Let $a_n=E[R]$ for $n$ people. Insert the shortest person into a uniformly random one of $n$ slots of a random arrangement of the other $n-1$: it is a record only if placed first (prob $\\frac1n$), contributing $\\frac1n$ on top of the records among the taller $n-1$.",
          "So $a_n=a_{n-1}+\\frac1n$ with $a_1=1$, giving $a_n=H_n$ and $a_{10}=\\boxed{\\dfrac{7381}{2520}}$."
        ]
      }
    ],
    "remark": "Insight: the expected number of records grows like $\\ln n+\\gamma$ — agonizingly slowly. The clean $P(I_k)=\\frac1k$ comes purely from a symmetry over the first $k$ entries; the global ordering of the rest is irrelevant, which is exactly why linearity sidesteps the Stirling-number count."
  },
  {
    "theme": "expectation",
    "themeLabel": "Random Variables & Expectation",
    "title": "How Many Flavours in the Bag",
    "difficulty": 3,
    "task": "Find the number of",
    "tags": [
      "linearity",
      "indicator",
      "coupon-collector",
      "complementary",
      "distinct-count"
    ],
    "statement": "A vending machine dispenses one of $6$ equally likely sticker flavours each time, independently. A child presses the button $4$ times. Let $D$ be the number of distinct flavours among the $4$ stickers obtained. Find $E[D]$.",
    "answer": "\\[\\boxed{\\dfrac{671}{216}}\\]",
    "trap": "Summing $\\sum_d d\\,P(D=d)$ via the surjection / Stirling-number count of how many of the $6^4$ sequences hit exactly $d$ flavours. It is correct but heavy, and students routinely botch the inclusion-exclusion. The indicator on each FLAVOUR (not on each press) collapses it instantly.",
    "solutions": [
      {
        "name": "Indicator per flavour (complementary)",
        "steps": [
          "For flavour $f\\in\\{1,\\dots,6\\}$ let $J_f=\\mathbf 1[\\text{flavour } f \\text{ appears at least once}]$, so $D=\\sum_{f=1}^{6} J_f$.",
          "$P(J_f=1)=1-P(f \\text{ never appears})=1-\\left(\\tfrac56\\right)^4$.",
          "By linearity $E[D]=6\\left(1-\\left(\\tfrac56\\right)^4\\right)=6\\cdot\\dfrac{1296-625}{1296}=6\\cdot\\dfrac{671}{1296}$.",
          "$E[D]=\\boxed{\\dfrac{671}{216}}\\approx3.106$."
        ]
      },
      {
        "name": "Newcomer per press",
        "steps": [
          "Let $N_k=\\mathbf 1[\\text{press } k \\text{ shows a flavour not seen in presses } 1..k-1]$; then $D=\\sum_{k=1}^4 N_k$, and $N_1=1$.",
          "Press $k$ is a newcomer iff none of the previous $k-1$ presses matched its flavour; this has probability $\\left(\\tfrac56\\right)^{k-1}$, so $E[N_k]=\\left(\\tfrac56\\right)^{k-1}$.",
          "$E[D]=\\sum_{k=1}^4\\left(\\tfrac56\\right)^{k-1}=\\dfrac{1-(5/6)^4}{1-5/6}=6\\left(1-\\left(\\tfrac56\\right)^4\\right)=\\boxed{\\dfrac{671}{216}}$."
        ]
      },
      {
        "name": "Surjection / Stirling count (the trap, done right)",
        "steps": [
          "Count sequences of $4$ presses using exactly $d$ distinct flavours: choose the $d$ flavours in $\\binom6d$ ways, then map $4$ presses onto all $d$ of them surjectively in $S(d)=\\sum_{j=0}^{d}(-1)^j\\binom{d}{j}(d-j)^4$ ways.",
          "So $P(D=d)=\\dfrac{\\binom6d\\,S(d)}{6^4}$, giving counts $S(1)=1,\\ S(2)=14,\\ S(3)=36,\\ S(4)=24$ and frequencies $6,210,720,360$ out of $1296$.",
          "$E[D]=\\dfrac{1\\cdot6+2\\cdot210+3\\cdot720+4\\cdot360}{1296}=\\dfrac{6+420+2160+1440}{1296}=\\dfrac{4026}{1296}=\\boxed{\\dfrac{671}{216}}$ — same answer, far more labour."
        ]
      }
    ],
    "remark": "Insight: choosing the right object to index is everything — indicators on the $6$ flavours give a one-line answer, indicators on the $4$ presses give a (correct) geometric sum, and the brute surjection count gives a Stirling-number slog. Same number $671/216$, vastly different labour. The distribution of $D$ over the $1296$ sequences is $(6,210,720,360)$ for $d=1,2,3,4$."
  },
  {
    "theme": "expectation",
    "themeLabel": "Random Variables & Expectation",
    "title": "Empty Pigeonholes",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "linearity",
      "indicator",
      "occupancy",
      "empty-boxes",
      "complementary"
    ],
    "statement": "Seven distinguishable balls are dropped independently and uniformly at random into five distinguishable boxes. Let $Z$ be the number of boxes that end up empty. Evaluate $E[Z]$, and state whether $E[Z]$ would change if the balls were instead indistinguishable but every distinct occupancy outcome were taken equally likely.",
    "answer": "\\[\\boxed{E[Z]=\\dfrac{16384}{15625},\\quad \\text{yes, it changes}}\\]",
    "trap": "Assuming the answer is 'model-free': computing $E[Z]$ under the natural distinguishable-balls model and asserting it must be the same for the 'equally-likely occupancy vectors' model. It is NOT — uniform over occupancy vectors (Bose-Einstein) is a different probability law, and the empty-box count has a different mean. Forgetting that an expectation depends on the underlying distribution, not just the outcome set.",
    "solutions": [
      {
        "name": "Indicator per box (distinguishable balls)",
        "steps": [
          "Let $E_b=\\mathbf 1[\\text{box } b \\text{ is empty}]$, so $Z=\\sum_{b=1}^5 E_b$ and by linearity $E[Z]=\\sum_{b=1}^5 P(E_b=1)$.",
          "Each of the $7$ balls independently misses box $b$ with probability $\\frac45$, and the balls are independent, so $P(E_b=1)=\\left(\\frac45\\right)^7$.",
          "$E[Z]=5\\left(\\frac45\\right)^7=5\\cdot\\frac{16384}{78125}=\\dfrac{16384}{15625}\\approx1.049$.",
          "Hence $E[Z]=\\boxed{\\dfrac{16384}{15625}}$ in the standard model."
        ]
      },
      {
        "name": "Inclusion-exclusion on the empty-box probability",
        "steps": [
          "Count surjection-type configurations: the number of ways the $7$ labelled balls hit a chosen set of $k$ boxes (none of the other boxes) is governed by $j^7$ placements into $j$ boxes.",
          "By inclusion-exclusion, $P(\\text{a fixed box } b \\text{ is empty})=\\frac{4^7}{5^7}$ directly, since 'box $b$ empty' just means all $7$ balls land in the other $4$ boxes: $\\frac{4^7}{5^7}=\\frac{16384}{78125}$.",
          "Summing over the $5$ symmetric boxes gives $E[Z]=5\\cdot\\frac{16384}{78125}=\\dfrac{16384}{15625}$, matching the indicator computation and confirming $\\boxed{\\dfrac{16384}{15625}}$.",
          "As a sanity check, the full distribution of the number of occupied boxes uses $\\sum_{k}(-1)^{\\cdots}\\binom{5}{k}(5-k)^7$; its mean of empties reduces to the same $5\\cdot(4/5)^7$."
        ]
      },
      {
        "name": "Why the second model differs",
        "steps": [
          "Under 'all occupancy vectors equally likely', the number of vectors is the number of nonnegative integer solutions of $x_1+\\cdots+x_5=7$, namely $\\binom{11}{4}=330$, each with probability $\\frac1{330}$.",
          "$Z$ counts how many $x_b=0$. By symmetry $P(x_b=0)=\\dfrac{\\#\\{\\text{solutions with } x_b=0\\}}{330}=\\dfrac{\\binom{10}{3}}{330}=\\dfrac{120}{330}=\\dfrac4{11}$.",
          "So here $E[Z]=5\\cdot\\frac4{11}=\\frac{20}{11}\\approx1.818\\neq\\frac{16384}{15625}$. The expectation genuinely depends on the law, confirming the boxed claim that it changes."
        ]
      }
    ],
    "remark": "Insight: linearity gives the empty-box mean for free in BOTH models, but the per-box probability differs ($(4/5)^7\\approx0.21$ versus $4/11\\approx0.36$). The conceptual point is that 'the same set of outcomes' does not mean 'the same expectation' — the probability measure is what an expectation integrates against. The distinguishable-balls (Maxwell-Boltzmann) law concentrates mass on more-balanced fillings, so boxes are less often empty than under the flat Bose-Einstein law over occupancy vectors."
  },
  {
    "theme": "expectation",
    "themeLabel": "Random Variables & Expectation",
    "title": "The Tallest of Four Rolls",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "expectation",
      "tail-sum",
      "maximum",
      "indicator",
      "order-statistic"
    ],
    "statement": "A fair six-sided die is rolled $4$ times independently. Let $M$ be the largest value rolled. Evaluate $E[M]$.",
    "answer": "\\[\\boxed{\\dfrac{6797}{1296}}\\]",
    "trap": "Computing $E[M]=\\sum_{m=1}^{6} m\\,P(M=m)$ but mistakenly using the CDF value $P(M\\le m)=\\left(\\frac m6\\right)^4$ in place of the true pmf $P(M=m)=\\left(\\frac m6\\right)^4-\\left(\\frac{m-1}6\\right)^4$. That CDF-for-pmf slip gives $\\sum_{m=1}^6 m\\left(\\frac m6\\right)^4=\\frac{4067}{432}\\approx9.41$, which is impossible since $M\\le6$. The tail-sum identity sidesteps the subtraction of consecutive fourth powers altogether.",
    "solutions": [
      {
        "name": "Tail-sum (layer cake) identity",
        "steps": [
          "For a random variable taking values in $\\{1,2,\\dots,6\\}$, $E[M]=\\sum_{m=1}^{6} P(M\\ge m)=\\sum_{m=1}^{6}\\big(1-P(M\\le m-1)\\big)$.",
          "$P(M\\le m-1)=\\left(\\frac{m-1}6\\right)^4$, since $M\\le m-1$ exactly when all four independent rolls land in $\\{1,\\dots,m-1\\}$.",
          "$E[M]=\\sum_{m=1}^6\\Big(1-\\left(\\tfrac{m-1}6\\right)^4\\Big)=6-\\frac{0^4+1^4+2^4+3^4+4^4+5^4}{6^4}=6-\\frac{979}{1296}$.",
          "$E[M]=\\dfrac{7776-979}{1296}=\\boxed{\\dfrac{6797}{1296}}\\approx5.245$."
        ]
      },
      {
        "name": "Direct pmf",
        "steps": [
          "$P(M=m)=P(M\\le m)-P(M\\le m-1)=\\left(\\frac m6\\right)^4-\\left(\\frac{m-1}6\\right)^4$ for $m=1,\\dots,6$.",
          "Then $E[M]=\\sum_{m=1}^6 m\\left[\\left(\\tfrac m6\\right)^4-\\left(\\tfrac{m-1}6\\right)^4\\right]=\\dfrac{1\\cdot1+2\\cdot15+3\\cdot65+4\\cdot175+5\\cdot369+6\\cdot671}{1296}$.",
          "The numerator is $1+30+195+700+1845+4026=6797$, so $E[M]=\\boxed{\\dfrac{6797}{1296}}$. Abel summation reorganizes this very sum into the tail sum above, confirming both routes agree."
        ]
      }
    ],
    "remark": "Insight: the tail-sum $E[M]=\\sum_m P(M\\ge m)$ turns a maximum — whose pmf needs differences of fourth powers — into a sum of clean CDF complements, because $\\{M\\ge m\\}$ has the trivial complement $\\{$all rolls $\\le m-1\\}$. This is the indicator method in disguise: writing $M=\\sum_{m\\ge1}\\mathbf 1[M\\ge m]$ and taking expectations term by term."
  },
  {
    "theme": "expectation",
    "themeLabel": "Random Variables & Expectation",
    "title": "Two Shuffled Decks, Card for Card",
    "difficulty": 5,
    "task": "Find a,b",
    "tags": [
      "linearity",
      "indicator",
      "matching",
      "variance",
      "covariance"
    ],
    "statement": "Two standard $13$-card suits are each shuffled independently and uniformly, then laid out in two rows, position by position. Let $X$ be the number of positions $i$ at which the two rows show the same rank. Find the pair $(a,b)=(E[X],\\operatorname{Var}(X))$.",
    "answer": "\\[\\boxed{(a,b)=(1,\\,1)}\\]",
    "trap": "Modelling each position as an independent Bernoulli$(1/13)$ 'match' and concluding $\\operatorname{Var}(X)=13\\cdot\\frac1{13}\\cdot\\frac{12}{13}=\\frac{12}{13}$. The match indicators are NOT independent: the two shuffles induce a single relative permutation, so the matches are exactly the fixed points of a uniform permutation of $13$ symbols, whose positive pairwise covariances push the variance up from $\\frac{12}{13}$ to the honest value $1$.",
    "solutions": [
      {
        "name": "Reduce to fixed points of one permutation",
        "steps": [
          "Relabel positions by the first row's order; then a match at position $i$ means the second row's symbol equals the first's, i.e. the relative arrangement $\\sigma=\\pi_2\\pi_1^{-1}$ satisfies $\\sigma(i)=i$. Since $\\pi_1,\\pi_2$ are independent and uniform, $\\sigma$ is a uniformly random permutation of $13$ symbols, and $X$ is its number of fixed points.",
          "With indicators $I_i=\\mathbf 1[\\sigma(i)=i]$ we have $P(\\sigma(i)=i)=\\frac{12!}{13!}=\\frac1{13}$, so by linearity $E[X]=\\sum_{i=1}^{13}E[I_i]=13\\cdot\\frac1{13}=1$.",
          "For the second factorial moment, sum over the $13\\cdot12$ ordered pairs $i\\ne j$: $P(\\sigma(i)=i,\\ \\sigma(j)=j)=\\frac{11!}{13!}=\\frac1{13\\cdot12}$, hence $E[X(X-1)]=\\sum_{i\\ne j}P=13\\cdot12\\cdot\\frac1{13\\cdot12}=1$.",
          "Therefore $E[X^2]=E[X(X-1)]+E[X]=1+1=2$ and $\\operatorname{Var}(X)=E[X^2]-E[X]^2=2-1^2=1$, giving $(E[X],\\operatorname{Var}(X))=\\boxed{(1,1)}$."
        ]
      },
      {
        "name": "Covariance bookkeeping",
        "steps": [
          "Write $\\operatorname{Var}(X)=\\sum_i\\operatorname{Var}(I_i)+\\sum_{i\\ne j}\\operatorname{Cov}(I_i,I_j)$ with $\\operatorname{Var}(I_i)=\\frac1{13}\\cdot\\frac{12}{13}=\\frac{12}{169}$.",
          "For $i\\ne j$, $E[I_iI_j]=P(\\sigma(i)=i,\\ \\sigma(j)=j)=\\frac1{13\\cdot12}=\\frac1{156}$, so $\\operatorname{Cov}(I_i,I_j)=\\frac1{156}-\\frac1{169}=\\frac1{13^2\\cdot12}=\\frac1{2028}>0$.",
          "Summing: $\\sum_i\\operatorname{Var}(I_i)=13\\cdot\\frac{12}{169}=\\frac{12}{13}$ and $\\sum_{i\\ne j}\\operatorname{Cov}(I_i,I_j)=13\\cdot12\\cdot\\frac1{2028}=\\frac1{13}$.",
          "Hence $\\operatorname{Var}(X)=\\frac{12}{13}+\\frac1{13}=1$, and with $E[X]=1$ we again get $(E[X],\\operatorname{Var}(X))=\\boxed{(1,1)}$."
        ]
      }
    ],
    "remark": "Insight: 'two independent shuffles' is a smokescreen — only the relative permutation matters, and matching two random orders is identical to counting fixed points of one uniform permutation. The variance trap ($12/13$ via false independence) is the whole point: the matches are positively correlated, and the extra $\\frac1{13}$ of total covariance restores the honest answer $\\operatorname{Var}(X)=1$. Note the answer is independent of the deck size $n\\ge2$."
  },
  {
    "theme": "expectation",
    "themeLabel": "Random Variables & Expectation",
    "title": "Couples at the Round Table",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "linearity",
      "indicator",
      "circular",
      "adjacency",
      "seating"
    ],
    "statement": "Five married couples (ten people) are seated uniformly at random around a circular table with ten distinct seats. Let $C$ be the number of couples seated in adjacent seats. Evaluate $E[C]$.",
    "answer": "\\[\\boxed{\\dfrac{10}{9}}\\]",
    "trap": "Using $P(\\text{a given couple adjacent})=\\frac1{10}$ as on a LINE (treating one seat as fixed and the partner needing the 'next' seat). On a CYCLE of $n$ seats a fixed person has TWO neighbours, so the adjacency probability is $\\frac{2}{n-1}=\\frac29$, not $\\frac1{10}$. Mishandling the circular geometry (and the rotational symmetry) underestimates the count.",
    "solutions": [
      {
        "name": "Indicator per couple",
        "steps": [
          "Let $A_c=\\mathbf 1[\\text{couple } c \\text{ sits in adjacent seats}]$, so $C=\\sum_{c=1}^5 A_c$.",
          "Fix one partner of couple $c$ anywhere; the other partner occupies one of the remaining $9$ seats uniformly, and exactly $2$ of them (the two cyclic neighbours) are adjacent. So $P(A_c=1)=\\frac29$.",
          "By linearity $E[C]=5\\cdot\\frac29=\\boxed{\\dfrac{10}{9}}\\approx1.111$."
        ]
      },
      {
        "name": "Counting adjacent edges",
        "steps": [
          "The cycle has $10$ unordered adjacent seat-pairs (edges). A uniformly random seating makes each specific pair of PEOPLE equally likely to occupy any given edge.",
          "For one edge, $P(\\text{its two occupants form a couple})=\\frac{5 \\text{ couples}}{\\binom{10}{2}}=\\frac5{45}=\\frac19$.",
          "By linearity over the $10$ edges, $E[C]=10\\cdot\\frac19=\\boxed{\\dfrac{10}{9}}$, matching the per-couple computation."
        ]
      }
    ],
    "remark": "Insight: the same expectation is reachable by indexing couples (each adjacent with prob $\\frac29$) or by indexing edges (each a couple with prob $\\frac19$) — $5\\cdot\\frac29=10\\cdot\\frac19$. The decisive subtlety is the factor $2$ from a cycle's two neighbours, the classic line-vs-circle adjacency trap."
  },
  {
    "theme": "expectation",
    "themeLabel": "Random Variables & Expectation",
    "title": "Peaks Around the Ring",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "linearity",
      "indicator",
      "circular",
      "variance",
      "local-maximum",
      "covariance"
    ],
    "statement": "Twelve distinct numbers are placed uniformly at random into the twelve positions of a circular ring. A position is a peak if its number exceeds both of its two cyclic neighbours. Let $P$ be the number of peaks. Determine $\\operatorname{Var}(P)$.",
    "answer": "\\[\\boxed{\\dfrac{8}{15}}\\]",
    "trap": "After finding $E[P]=\\dfrac{12}{3}=4$, computing $\\operatorname{Var}(P)=12\\cdot\\frac13\\cdot\\frac23=\\dfrac{8}{3}$ by treating the peak indicators as independent Bernoulli$(1/3)$. They are strongly dependent: two adjacent positions can never both be peaks (they share a neighbour-comparison and one would have to beat the other), so adjacent covariances are large and negative. A second, subtler error is to stop at the adjacent pairs and forget that positions two apart are also dependent, with a small positive covariance. Both corrections together drag the true variance to $\\dfrac{8}{15}\\approx0.533$, five times below the bogus $\\dfrac{8}{3}$.",
    "solutions": [
      {
        "name": "Indicators with adjacent and gap-two covariances",
        "steps": [
          "Let $B_i=\\mathbf 1[\\text{position } i \\text{ is a peak}]$, for $i=1,\\dots,12$ on the cycle. Among position $i$ and its two neighbours, each of the three is equally likely to hold the largest of those three numbers, so $\\Pr(B_i=1)=\\frac13$, giving $E[P]=\\sum_i E[B_i]=12\\cdot\\frac13=4$ and $\\operatorname{Var}(B_i)=\\frac13\\cdot\\frac23=\\frac29$.",
          "Adjacent positions: if $i$ and $i+1$ were both peaks, then $a_i>a_{i+1}$ (since $i$ beats its right neighbour) and $a_{i+1}>a_i$ (since $i+1$ beats its left neighbour), a contradiction. Hence $E[B_iB_{i+1}]=0$ and $\\operatorname{Cov}(B_i,B_{i+1})=0-\\frac19=-\\frac19$.",
          "Positions two apart, $i$ and $i+2$, involve the five seats $i-1,i,i+1,i+2,i+3$. Over the $5!$ relative orders of those five numbers one counts the arrangements making both $i$ and $i+2$ peaks; this gives $E[B_iB_{i+2}]=\\frac{16}{120}=\\frac{2}{15}$, so $\\operatorname{Cov}(B_i,B_{i+2})=\\frac{2}{15}-\\frac19=\\frac{1}{45}$. Positions three or more apart involve disjoint neighbour sets and are independent, so their covariance is $0$.",
          "Sum over ordered pairs: $\\operatorname{Var}(P)=\\sum_i\\operatorname{Var}(B_i)+\\sum_{i\\ne j}\\operatorname{Cov}(B_i,B_j)=12\\cdot\\frac29+12\\cdot2\\left(-\\frac19\\right)+12\\cdot2\\left(\\frac{1}{45}\\right)$, where each position contributes two adjacent and two gap-two neighbours.",
          "$\\operatorname{Var}(P)=\\frac{24}{9}-\\frac{24}{9}+\\frac{24}{45}=\\frac{24}{45}=\\boxed{\\dfrac{8}{15}}\\approx0.533$, vastly below the bogus $\\frac83$."
        ]
      },
      {
        "name": "Closed form via the local five-window",
        "steps": [
          "Only the relative order of nearby seats matters, so all covariances follow from small symmetric computations. From step-level enumeration of five consecutive positions: $\\operatorname{Cov}(B_i,B_{i+1})=-\\frac19$ (adjacent peaks impossible), $\\operatorname{Cov}(B_i,B_{i+2})=\\frac{1}{45}$, and $\\operatorname{Cov}(B_i,B_{i+k})=0$ for $k\\ge3$ since the relevant neighbour windows become disjoint.",
          "Each position has exactly two neighbours at distance $1$ and two at distance $2$ around the ring. Writing $n=12$: $\\operatorname{Var}(P)=n\\operatorname{Var}(B_i)+2n\\,\\operatorname{Cov}(B_i,B_{i+1})+2n\\,\\operatorname{Cov}(B_i,B_{i+2})=n\\left(\\frac29-\\frac29+\\frac{2}{45}\\right)=\\frac{2n}{45}$.",
          "This yields the clean closed form $\\operatorname{Var}(P)=\\dfrac{2n}{45}$ for any cycle with $n\\ge5$, exactly the regime where distance-$2$ neighbours are distinct from distance-$1$ neighbours and no extra wrap-around coincidences occur.",
          "At $n=12$: $\\operatorname{Var}(P)=\\frac{2\\cdot12}{45}=\\frac{24}{45}=\\boxed{\\dfrac{8}{15}}$, a fivefold drop from the independence guess $\\frac{2n}{9}=\\frac{8}{3}$."
        ]
      },
      {
        "name": "Direct enumeration / simulation check",
        "steps": [
          "Since only relative order matters, $P$ is determined by a uniform random permutation of $\\{1,\\dots,12\\}$ around the ring. Enumerating all $5!$ orders of a five-window confirms $E[B_iB_{i+2}]=\\frac{2}{15}$, hence $\\operatorname{Cov}(B_i,B_{i+2})=\\frac{1}{45}$, and brute-forcing all permutations for small $n\\le8$ matches $\\operatorname{Var}(P)=\\frac{2n}{45}$ exactly.",
          "A Monte Carlo run of several million random rings at $n=12$ gives $E[P]\\approx4.000$ and $\\operatorname{Var}(P)\\approx0.533$, agreeing with $\\frac{8}{15}=0.5\\overline{3}$ and ruling out the independence value $\\frac{8}{3}\\approx2.667$.",
          "$\\boxed{\\dfrac{8}{15}}.$"
        ]
      }
    ],
    "remark": "Insight: $E[P]=n/3$ is immediate from a three-element symmetry, but the variance is where the structure bites. Adjacency forbids twin peaks, forcing $\\operatorname{Cov}(B_i,B_{i+1})=-\\frac19$, while a small positive $\\operatorname{Cov}(B_i,B_{i+2})=\\frac{1}{45}$ partly compensates; everything farther is independent. The closed form $\\operatorname{Var}(P)=\\frac{2n}{45}$ sits a full factor of five below the independence guess $\\frac{2n}{9}$, exposing the 'assume independence' fallacy. The hidden trap inside the trap is forgetting the gap-two term: dropping it would give $\\frac{24}{45}-\\frac{48}{45}\\ne\\frac{8}{15}$, so both covariance corrections are essential."
  },
  {
    "theme": "expectation",
    "themeLabel": "Random Variables & Expectation",
    "title": "Collecting Every Sticker",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "linearity",
      "geometric",
      "coupon-collector",
      "waiting-time",
      "phases"
    ],
    "statement": "A cereal brand hides one of $6$ equally likely cards in each box, independently. Let $T$ be the number of boxes bought until all $6$ distinct cards have been collected. Evaluate $E[T]$.",
    "answer": "\\[\\boxed{\\dfrac{147}{10}}\\]",
    "trap": "Trying to write $T$ as a single indicator sum over boxes and applying linearity to a fixed list — but $T$ is a random STOPPING time, not a sum over a fixed index set. The correct decomposition is into phases $T=\\sum_{k} T_k$ where $T_k$ is the wait for the $k$-th NEW card; forgetting that these waits are geometric (and that linearity still applies to a random number of summands here only because the phase count $6$ is deterministic) leads people to mis-set up the sum.",
    "solutions": [
      {
        "name": "Phase decomposition into geometric waits",
        "steps": [
          "Write $T=T_1+T_2+\\cdots+T_6$, where $T_k$ is the number of boxes bought while exactly $k-1$ distinct cards are already held, until a new one appears.",
          "When $k-1$ cards are held, each box is new with probability $\\frac{6-(k-1)}{6}$, so $T_k$ is Geometric with $E[T_k]=\\frac{6}{6-(k-1)}=\\frac{6}{7-k}$.",
          "By linearity $E[T]=\\sum_{k=1}^{6}\\frac{6}{7-k}=6\\left(1+\\tfrac12+\\tfrac13+\\tfrac14+\\tfrac15+\\tfrac16\\right)=6H_6$.",
          "$H_6=\\frac{49}{20}$, so $E[T]=6\\cdot\\frac{49}{20}=\\frac{294}{20}=\\boxed{\\dfrac{147}{10}}=14.7$."
        ]
      },
      {
        "name": "Tail-sum over the maximum waiting time",
        "steps": [
          "By inclusion–exclusion, $P(T>t)=\\sum_{j=1}^{6}(-1)^{j+1}\\binom6j\\left(\\frac{6-j}6\\right)^t$ (probability some card is still missing after $t$ boxes).",
          "Then $E[T]=\\sum_{t\\ge0}P(T>t)=\\sum_{j=1}^6(-1)^{j+1}\\binom6j\\frac1{1-(6-j)/6}=\\sum_{j=1}^6(-1)^{j+1}\\binom6j\\frac6j$.",
          "Evaluating, $6\\sum_{j=1}^6\\frac{(-1)^{j+1}\\binom6j}{j}=6H_6=\\boxed{\\dfrac{147}{10}}$, agreeing with the phase computation."
        ]
      }
    ],
    "remark": "Insight: the coupon-collector wait $6H_6$ is dominated by the LAST card — the final phase alone has mean $6$. Linearity of expectation applies cleanly because the number of phases is a fixed $6$; the randomness lives entirely inside the geometric phase lengths."
  },
  {
    "theme": "expectation",
    "themeLabel": "Random Variables & Expectation",
    "title": "The Largest of a Lottery Draw",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "linearity",
      "indicator",
      "maximum",
      "hypergeometric",
      "tail-sum"
    ],
    "statement": "A $5$-element subset is chosen uniformly at random from $\\{1,2,\\dots,20\\}$ (sampling without replacement). Let $M$ be the largest element of the chosen subset. Evaluate $E[M]$.",
    "answer": "\\[\\boxed{\\dfrac{35}{2}}\\]",
    "trap": "Re-using the WITH-replacement / i.i.d. maximum machinery, e.g. claiming $P(M\\le m)=\\left(\\frac m{20}\\right)^5$. That is only valid for independent draws; for a uniform SUBSET (without replacement) the correct CDF is the hypergeometric $P(M\\le m)=\\binom m5/\\binom{20}5$. Treating the five picks as independent overcounts and gives the wrong mean $\\approx 17.146\\ne 17.5$.",
    "solutions": [
      {
        "name": "Tail-sum with the correct hypergeometric CDF",
        "steps": [
          "For a subset, $P(M\\le m)=\\dfrac{\\binom m5}{\\binom{20}5}$ (all $5$ chosen from $\\{1,\\dots,m\\}$), valid for $m\\ge5$.",
          "$E[M]=\\sum_{m=1}^{20}P(M\\ge m)=\\sum_{m=1}^{20}\\Big(1-\\frac{\\binom{m-1}5}{\\binom{20}5}\\Big)=20-\\frac1{\\binom{20}5}\\sum_{m=1}^{20}\\binom{m-1}5$.",
          "Hockey-stick: $\\sum_{m=1}^{20}\\binom{m-1}5=\\sum_{r=0}^{19}\\binom r5=\\binom{20}6$, and $\\frac{\\binom{20}6}{\\binom{20}5}=\\frac{20-5}{6}=\\frac{15}6=\\frac52$.",
          "$E[M]=20-\\frac52=\\boxed{\\dfrac{35}{2}}=17.5$."
        ]
      },
      {
        "name": "Symmetry / gap argument",
        "steps": [
          "Place the $5$ chosen and $15$ unchosen items in a row $1..20$; by symmetry the $5$ chosen split the $15$ unchosen into $6$ gaps with equal expected size $\\frac{15}{6}=\\frac52$, where the last gap is the number of unchosen elements ABOVE $M$.",
          "Thus $E[20-M]=\\frac52$ (expected count strictly above the maximum), giving $E[M]=20-\\frac52=\\boxed{\\dfrac{35}{2}}$.",
          "Equivalently the general formula $E[M]=\\frac{k(N+1)}{k+1}=\\frac{5\\cdot21}{6}=\\frac{35}2$ confirms it."
        ]
      }
    ],
    "remark": "Insight: for a uniform $k$-subset of $\\{1,\\dots,N\\}$ the chosen elements partition the rest into $k+1$ equal-expectation gaps, so $E[\\max]=\\frac{k(N+1)}{k+1}$. The trap is importing the with-replacement maximum law; the without-replacement structure is what makes the elegant gap symmetry — and the hockey-stick collapse — possible."
  },
  {
    "theme": "recurrence",
    "themeLabel": "Recursive & Markov Probability",
    "title": "The Lopsided Ladder",
    "difficulty": 3,
    "task": "Determine",
    "tags": [
      "gambler's ruin",
      "first-step analysis",
      "recurrence",
      "biased walk"
    ],
    "statement": "A counter sits on rung $3$ of a ladder whose rungs are labelled $0,1,\\dots,7$. At each tick it climbs one rung with probability $\\tfrac{2}{3}$ and slips down one rung with probability $\\tfrac{1}{3}$, independently. The counter stops the instant it reaches rung $0$ (it shatters) or rung $7$ (it escapes). Determine the probability that the counter escapes.",
    "answer": "\\[\\boxed{\\dfrac{112}{127}}\\]",
    "trap": "Writing $h(k)=\\tfrac{2}{3}h(k+1)+\\tfrac{1}{3}h(k-1)$ but then 'simplifying' it to the symmetric answer $k/N=3/7$ — that linear interpolation is only correct for a fair walk. With a bias the homogeneous recurrence has characteristic roots $1$ and $r=q/p=\\tfrac12$, so the solution is geometric, $h(k)=\\frac{1-r^k}{1-r^N}$, not linear.",
    "solutions": [
      {
        "name": "Characteristic-root recurrence",
        "steps": [
          "Let $h(k)$ be the escape probability from rung $k$, with boundary $h(0)=0,\\ h(7)=1$.",
          "First-step analysis gives $h(k)=\\tfrac{2}{3}h(k+1)+\\tfrac{1}{3}h(k-1)$ for $1\\le k\\le 6$.",
          "The characteristic equation $\\tfrac23 x^2 - x + \\tfrac13=0$ has roots $x=1$ and $x=r=\\tfrac13/\\tfrac23=\\tfrac12$, so $h(k)=A+B\\left(\\tfrac12\\right)^k$.",
          "Boundary conditions: $A+B=0$ and $A+B\\,r^{7}=1$, giving $A=\\frac{1}{1-r^{7}}$, $B=-A$.",
          "Hence $h(k)=\\dfrac{1-r^{k}}{1-r^{7}}$, and $h(3)=\\dfrac{1-(1/2)^3}{1-(1/2)^7}=\\dfrac{7/8}{127/128}=\\boxed{\\dfrac{112}{127}}$."
        ]
      },
      {
        "name": "Martingale (optional stopping)",
        "steps": [
          "Since each step multiplies the 'odds quantity' $r^{S}$ with $r=\\tfrac12$, $M_n=r^{S_n}$ is a martingale: $\\mathbb E[r^{S+1}\\cdot\\tfrac23 + r^{S-1}\\cdot\\tfrac13]=r^{S}(\\tfrac23 r+\\tfrac13 r^{-1})=r^{S}$.",
          "By optional stopping at the absorbing time $T$, $\\mathbb E[r^{S_T}]=r^{S_0}=r^{3}$.",
          "With $P=\\Pr(\\text{escape})$: $P\\,r^{7}+(1-P)\\,r^{0}=r^{3}$.",
          "Solve: $P=\\dfrac{1-r^{3}}{1-r^{7}}=\\dfrac{1-1/8}{1-1/128}=\\boxed{\\dfrac{112}{127}}$."
        ]
      }
    ],
    "remark": "Insight: the bias turns the linear ladder of a fair walk into a geometric one. The 'natural coordinate' is $r^{S}$, not $S$, because that combination is conserved in expectation."
  },
  {
    "theme": "recurrence",
    "themeLabel": "Recursive & Markov Probability",
    "title": "Waiting for HTH",
    "difficulty": 3,
    "task": "Evaluate",
    "tags": [
      "pattern waiting time",
      "absorbing chain",
      "first-step analysis",
      "overlap"
    ],
    "statement": "A fair coin is tossed repeatedly. Let $T$ be the number of tosses until the pattern $\\mathrm{HTH}$ first appears as three consecutive outcomes. Evaluate $\\mathbb E[T]$, and state how it compares with the expected wait for $\\mathrm{HTT}$.",
    "answer": "\\[\\boxed{\\mathbb E[T_{\\mathrm{HTH}}]=10,\\qquad \\mathbb E[T_{\\mathrm{HTT}}]=8}\\]",
    "trap": "Assuming every length-$3$ pattern is waited for equally — i.e. $\\mathbb E[T]=2^3=8$ for all of them. This treats the search as a disjoint block lottery. In fact $\\mathrm{HTH}$ self-overlaps (its prefix $\\mathrm{H}$ equals its suffix $\\mathrm{H}$), so a failed completion leaves you partway along again, inflating the wait to $10$, whereas the non-overlapping $\\mathrm{HTT}$ takes exactly $8$.",
    "solutions": [
      {
        "name": "Suffix-state recurrence",
        "steps": [
          "Track progress by the longest suffix of the toss-string that is a prefix of $\\mathrm{HTH}$: states $\\varnothing,\\ \\mathrm{H},\\ \\mathrm{HT}$, plus the absorbing 'done'. Let $E_\\bullet$ be the expected further tosses.",
          "From $\\varnothing$: $E_\\varnothing=1+\\tfrac12 E_{\\mathrm H}+\\tfrac12 E_\\varnothing$ (a T keeps you empty).",
          "From $\\mathrm H$: $E_{\\mathrm H}=1+\\tfrac12 E_{\\mathrm H}+\\tfrac12 E_{\\mathrm{HT}}$ (another H keeps suffix $\\mathrm H$).",
          "From $\\mathrm{HT}$: $E_{\\mathrm{HT}}=1+\\tfrac12\\cdot 0+\\tfrac12 E_\\varnothing$ (an H finishes; a T gives $\\mathrm{HTT}$, whose longest useful suffix is empty).",
          "Solving bottom-up: $E_{\\mathrm{HT}}=6,\\ E_{\\mathrm H}=8,\\ E_\\varnothing=\\boxed{10}$. The same method on $\\mathrm{HTT}$ (no self-overlap) gives $8$."
        ]
      },
      {
        "name": "Conway's correlation formula",
        "steps": [
          "For a fair coin and target $A$ of length $L$, $\\mathbb E[T_A]=\\sum_{i=1}^{L}\\,2^{\\,i}\\,[\\,A_{1\\ldots i}=A_{L-i+1\\ldots L}\\,]$, summing over self-overlap lengths.",
          "For $A=\\mathrm{HTH}$: the full overlap $i=3$ contributes $2^3=8$; the overlap $i=1$ ($\\mathrm H=\\mathrm H$) contributes $2^1=2$; $i=2$ ($\\mathrm{HT}\\ne\\mathrm{TH}$) contributes $0$.",
          "Thus $\\mathbb E[T_{\\mathrm{HTH}}]=8+2=\\boxed{10}$.",
          "For $A=\\mathrm{HTT}$ only $i=3$ overlaps, so $\\mathbb E[T_{\\mathrm{HTT}}]=8$."
        ]
      }
    ],
    "remark": "Insight: self-overlap is the whole story. The extra $+2$ for $\\mathrm{HTH}$ is exactly $2^1$, paying for the leftover $\\mathrm H$ that a botched finish leaves behind."
  },
  {
    "theme": "recurrence",
    "themeLabel": "Recursive & Markov Probability",
    "title": "A Rigged Race of Patterns",
    "difficulty": 4,
    "task": "Find",
    "tags": [
      "penney's game",
      "pattern race",
      "absorbing chain",
      "nontransitivity"
    ],
    "statement": "A fair coin is tossed until either $\\mathrm{HTH}$ or $\\mathrm{HHT}$ first appears as three consecutive outcomes; the pattern that appears first wins. Find the probability that $\\mathrm{HTH}$ wins.",
    "answer": "\\[\\boxed{\\dfrac{1}{3}}\\]",
    "trap": "Declaring the contest 'symmetric' because the two patterns look interchangeable, or noting that $\\mathrm{HTH}$ has solo expected wait $\\mathbb E=10$ while $\\mathrm{HHT}$ has $\\mathbb E=8$ and concluding each wins with probability $\\tfrac12$. Marginal waiting times do not govern a head-to-head race: what matters is how one pattern's tail can seed the other's head. Here $\\mathrm{HHT}$ ambushes $\\mathrm{HTH}$ and wins twice as often, so $\\mathrm{HTH}$ wins with probability only $\\tfrac13$, not $\\tfrac12$.",
    "solutions": [
      {
        "name": "Shared-progress absorbing Markov chain",
        "steps": [
          "Let $f(s)=\\Pr(\\mathrm{HTH}\\text{ wins}\\mid\\text{current relevant suffix }s)$ where $s$ ranges over the states $\\varnothing,\\ \\mathrm H,\\ \\mathrm{HH},\\ \\mathrm{HT}$ (the only proper prefixes of a target). The chain is absorbed the instant either target is completed.",
          "Transitions from the start-like states: $\\varnothing\\xrightarrow{\\mathrm H}\\mathrm H$ and $\\varnothing\\xrightarrow{\\mathrm T}\\varnothing$; $\\ \\mathrm H\\xrightarrow{\\mathrm H}\\mathrm{HH}$ and $\\mathrm H\\xrightarrow{\\mathrm T}\\mathrm{HT}$. The $\\mathrm T$-loop at $\\varnothing$ shows $f(\\varnothing)=f(\\mathrm H)$.",
          "From $\\mathrm{HH}$: a $\\mathrm T$ completes $\\mathrm{HHT}$ (so $\\mathrm{HTH}$ loses, value $0$); an $\\mathrm H$ keeps the suffix $\\mathrm{HH}$. Hence $f(\\mathrm{HH})=\\tfrac12 f(\\mathrm{HH})+\\tfrac12\\cdot 0$, giving $f(\\mathrm{HH})=0$.",
          "From $\\mathrm{HT}$: an $\\mathrm H$ completes $\\mathrm{HTH}$ (value $1$); a $\\mathrm T$ gives $\\mathrm{HTT}$, whose longest useful suffix is empty, so we restart at $\\varnothing$. Hence $f(\\mathrm{HT})=\\tfrac12\\cdot 1+\\tfrac12 f(\\varnothing)$.",
          "Combine $f(\\mathrm H)=\\tfrac12 f(\\mathrm{HH})+\\tfrac12 f(\\mathrm{HT})=\\tfrac12 f(\\mathrm{HT})$ with $f(\\varnothing)=f(\\mathrm H)$ and the $\\mathrm{HT}$ equation: writing $p=f(\\varnothing)$, we get $p=\\tfrac12\\!\\left(\\tfrac12+\\tfrac12 p\\right)$, i.e. $4p=1+p$, so $p=\\boxed{\\tfrac13}$."
        ]
      },
      {
        "name": "Conway's leading-number ratio",
        "steps": [
          "For patterns $A,B$ define the correlation $A\\!*\\!B=\\sum_{k=1}^{L}2^{k}\\,[\\,A_{L-k+1\\ldots L}=B_{1\\ldots k}\\,]$: add $2^{k}$ whenever the length-$k$ suffix of $A$ equals the length-$k$ prefix of $B$.",
          "Take $A=\\mathrm{HTH}$ and $B=\\mathrm{HHT}$. Self-correlations: $A\\!*\\!A=2^{3}+2^{1}=10$ (full word, plus suffix $\\mathrm H$ = prefix $\\mathrm H$) and $B\\!*\\!B=2^{3}=8$ (full word only).",
          "Cross-correlations: $A\\!*\\!B=2^{1}=2$ (suffix $\\mathrm H$ of $\\mathrm{HTH}$ equals prefix $\\mathrm H$ of $\\mathrm{HHT}$; the length-$2$ suffix $\\mathrm{TH}$ is not a prefix of $\\mathrm{HHT}$). And $B\\!*\\!A=2^{2}=4$ (suffix $\\mathrm{HT}$ of $\\mathrm{HHT}$ equals prefix $\\mathrm{HT}$ of $\\mathrm{HTH}$; the length-$1$ suffix $\\mathrm T$ is not a prefix of $\\mathrm{HTH}$).",
          "Conway's odds formula gives $\\dfrac{\\Pr(B\\text{ wins})}{\\Pr(A\\text{ wins})}=\\dfrac{A\\!*\\!A-A\\!*\\!B}{B\\!*\\!B-B\\!*\\!A}=\\dfrac{10-2}{8-4}=\\dfrac{8}{4}=\\dfrac{2}{1}$, so $\\mathrm{HHT}$ is twice as likely to win.",
          "Therefore $\\Pr(\\mathrm{HTH}\\text{ wins})=\\dfrac{1}{1+2}=\\boxed{\\tfrac13}$, in agreement with the Markov chain (and with a Monte-Carlo estimate of $\\approx 0.3332$)."
        ]
      }
    ],
    "remark": "Insight: this is a Penney-style nontransitive trap. Equal-looking patterns and their solo waiting times tell you nothing about a head-to-head race — what decides it is how one pattern's tail seeds the other's head. The asymmetric cross-correlations ($A\\!*\\!B=2$ versus $B\\!*\\!A=4$) are exactly what tips the contest $2{:}1$ toward $\\mathrm{HHT}$."
  },
  {
    "theme": "recurrence",
    "themeLabel": "Recursive & Markov Probability",
    "title": "How Long the Drunk Wanders",
    "difficulty": 4,
    "task": "Find",
    "tags": [
      "expected duration",
      "biased walk",
      "gambler's ruin",
      "recurrence"
    ],
    "statement": "A token starts at position $2$ on the integers $0,1,2,3,4,5$. Each second it moves to $k+1$ with probability $\\tfrac{2}{3}$ and to $k-1$ with probability $\\tfrac{1}{3}$; positions $0$ and $5$ are absorbing. Find the expected number of seconds until the token is absorbed.",
    "answer": "\\[\\boxed{\\dfrac{174}{31}}\\]",
    "trap": "Using the fair-walk duration $\\mathbb E=k(N-k)=2\\cdot 3=6$. That product formula is valid only when $p=q$. For a biased walk the duration solves the inhomogeneous recurrence $D(k)=1+pD(k+1)+qD(k-1)$, whose particular solution is linear $k/(q-p)$ — and here $q-p<0$, so the geometric correction term is essential.",
    "solutions": [
      {
        "name": "Inhomogeneous recurrence",
        "steps": [
          "Let $D(k)$ be the expected absorption time, $D(0)=D(5)=0$, and $D(k)=1+\\tfrac23 D(k+1)+\\tfrac13 D(k-1)$.",
          "Particular solution: try $D_p(k)=ck$; then $ck=1+\\tfrac23 c(k+1)+\\tfrac13 c(k-1)\\Rightarrow 0=1+\\tfrac13 c$, so $c=-3$, $D_p(k)=-3k=k/(q-p)$ with $q-p=-\\tfrac13$.",
          "Homogeneous solution $A+B r^{k}$ with $r=q/p=\\tfrac12$. General: $D(k)=-3k+A+B(\\tfrac12)^k$.",
          "Boundaries: $A+B=0$ and $-15+A+B(\\tfrac1{32})=0$. Subtract: $B(\\tfrac1{32}-1)=15\\Rightarrow B=-\\tfrac{480}{31}$, $A=\\tfrac{480}{31}$.",
          "Then $D(2)=-6+\\tfrac{480}{31}-\\tfrac{480}{31}\\cdot\\tfrac14=-6+\\tfrac{480}{31}\\cdot\\tfrac34=-6+\\tfrac{360}{31}=\\boxed{\\dfrac{174}{31}}$."
        ]
      },
      {
        "name": "Duration via escape probabilities",
        "steps": [
          "First find $h(k)=\\Pr(\\text{absorbed at }5)=\\frac{1-r^k}{1-r^5}$, $r=\\tfrac12$, so $h(2)=\\frac{3/4}{31/32}=\\frac{24}{31}$.",
          "Use the standard closed form for biased duration: $D(k)=\\dfrac{k}{q-p}-\\dfrac{N}{q-p}\\cdot\\dfrac{1-r^{k}}{1-r^{N}}$ with $N=5$.",
          "Here $\\dfrac{1}{q-p}=-3$, so $D(2)=-3\\cdot2-(-3)\\cdot5\\cdot h(2)=-6+15\\cdot\\tfrac{24}{31}$.",
          "Compute $15\\cdot\\tfrac{24}{31}=\\tfrac{360}{31}$, giving $D(2)=-6+\\tfrac{360}{31}=\\boxed{\\dfrac{174}{31}}$."
        ]
      }
    ],
    "remark": "Insight: duration splits into a deterministic drift part $k/(q-p)$ and a curvature correction tied to the escape probability. The fair-walk parabola $k(N-k)$ is the degenerate $p\\to q$ limit, not a shortcut."
  },
  {
    "theme": "recurrence",
    "themeLabel": "Recursive & Markov Probability",
    "title": "Deuce, Deuce, Deuce",
    "difficulty": 4,
    "task": "Find",
    "tags": [
      "absorbing chain",
      "expected duration",
      "tennis deuce",
      "two-in-a-row"
    ],
    "statement": "From deuce, a server wins each point independently with probability $\\tfrac{2}{3}$. The game is won by whoever first leads by two points. Find (i) the probability that the server wins the game and (ii) the expected number of points played until the game ends.",
    "answer": "\\[\\boxed{\\Pr(\\text{server wins})=\\dfrac{4}{5},\\qquad \\mathbb E[\\text{points}]=\\dfrac{18}{5}}\\]",
    "trap": "Modelling deuce as 'win two points in a row from scratch', giving $\\mathbb E=1/p+1/p^2$ for a two-run, or computing $\\Pr=p^2$ for an immediate two-point burst. The real chain has a third state, namely 'advantage receiver', and from advantage a lost point returns to deuce rather than restarting a clean run; ignoring that wrong boundary collapses the recurrence.",
    "solutions": [
      {
        "name": "Three-state absorbing chain",
        "steps": [
          "States: $D$ (deuce), $A$ (server ahead by one), $B$ (server behind by one); server wins from $A$ on a point, loses from $B$ on a lost point. Let $p=\\tfrac23,q=\\tfrac13$.",
          "Win probabilities: $W_D=pW_A+qW_B$, $W_A=p\\cdot1+qW_D$, $W_B=pW_D+q\\cdot0$.",
          "Substitute: $W_D=p(p+qW_D)+q\\,pW_D=p^2+2pq\\,W_D\\Rightarrow W_D=\\dfrac{p^2}{1-2pq}=\\dfrac{p^2}{p^2+q^2}=\\dfrac{4/9}{5/9}=\\boxed{\\tfrac45}$.",
          "Durations: $E_D=1+pE_A+qE_B$, $E_A=1+qE_D$, $E_B=1+pE_D$, so $E_D=1+p(1+qE_D)+q(1+pE_D)=2+2pq\\,E_D$.",
          "Thus $E_D=\\dfrac{2}{1-2pq}=\\dfrac{2}{p^2+q^2}=\\dfrac{2}{5/9}=\\boxed{\\dfrac{18}{5}}$."
        ]
      },
      {
        "name": "Two-point block reduction",
        "steps": [
          "Group play into consecutive *pairs* of points starting from deuce. A pair ends the game (server wins w.p. $p^2$, loses w.p. $q^2$) or returns to deuce (w.p. $2pq$).",
          "Decisive-pair probability is $p^2+q^2=\\tfrac59$; conditional on decision, server wins w.p. $\\dfrac{p^2}{p^2+q^2}=\\boxed{\\tfrac45}$.",
          "Number of pairs is geometric with success $\\tfrac59$, mean $\\tfrac{9}{5}$ pairs.",
          "Each pair is exactly $2$ points, so $\\mathbb E[\\text{points}]=2\\cdot\\tfrac95=\\boxed{\\dfrac{18}{5}}$."
        ]
      }
    ],
    "remark": "Insight: the deuce recurrence telescopes because every non-decisive exchange returns you to the *same* state. That memorylessness lets a three-state chain collapse to a single geometric trial in disguised pairs."
  },
  {
    "theme": "recurrence",
    "themeLabel": "Recursive & Markov Probability",
    "title": "Three Heads, Heavy Coin",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "run waiting time",
      "biased coin",
      "recurrence",
      "absorbing chain"
    ],
    "statement": "A biased coin shows heads with probability $\\tfrac{1}{3}$. Let $T$ be the number of tosses until heads appears three times in a row for the first time. Evaluate $\\mathbb E[T]$.",
    "answer": "\\[\\boxed{39}\\]",
    "trap": "Reaching for the fair-coin value $2^3+2^2+2^1=14$ and merely rescaling, or guessing $1/p^3=27$. The correct run-length recurrence telescopes to $\\sum_{i=1}^{3}p^{-i}$, not $p^{-3}$ alone: each level of the run must be *rebuilt from scratch* after a tail, and the cost of partial progress accumulates geometrically.",
    "solutions": [
      {
        "name": "Level recurrence",
        "steps": [
          "Let $E_j$ be the expected additional tosses to finish, given a current run of exactly $j$ heads ($j=0,1,2$); $E_3=0$.",
          "From level $j$: with prob $p=\\tfrac13$ advance to $j+1$, with prob $q=\\tfrac23$ a tail resets to level $0$. So $E_j=1+pE_{j+1}+qE_0$.",
          "Write $E_0$ in terms of itself: $E_2=1+qE_0$ (since $pE_3=0$). Then $E_1=1+pE_2+qE_0$ and $E_0=1+pE_1+qE_0$.",
          "Back-substitute: $E_0=\\dfrac{1+p+p^2}{p^3}$ after simplification (a clean telescoping of the resets).",
          "With $p=\\tfrac13$: $E_0=\\dfrac{1+\\tfrac13+\\tfrac19}{1/27}=27\\cdot\\tfrac{13}{9}=\\boxed{39}$."
        ]
      },
      {
        "name": "Sum-of-stages formula",
        "steps": [
          "A standard identity for the wait for $n$ consecutive successes with success prob $p$ is $\\mathbb E[T]=\\sum_{i=1}^{n}p^{-i}=\\dfrac{p^{-n}-1}{1-p}$ adjusted, here $\\mathbb E[T]=\\dfrac1p+\\dfrac1{p^2}+\\dfrac1{p^3}$.",
          "This is the geometric-series form of the telescoped recurrence, each term being the expected cost of securing one more level of the run.",
          "With $p=\\tfrac13$: $\\dfrac1p=3,\\ \\dfrac1{p^2}=9,\\ \\dfrac1{p^3}=27$.",
          "Sum: $3+9+27=\\boxed{39}$."
        ]
      }
    ],
    "remark": "Insight: a run-of-$n$ wait is a geometric *cascade* — securing level $k$ costs $p^{-k}$, and these add. The fair-coin $2+4+8=14$ and this $3+9+27=39$ are the same formula at $p=\\tfrac12$ and $\\tfrac13$."
  },
  {
    "theme": "recurrence",
    "themeLabel": "Recursive & Markov Probability",
    "title": "Emptying the Ehrenfest Urn",
    "difficulty": 5,
    "task": "Find",
    "tags": [
      "ehrenfest",
      "absorbing chain",
      "first-passage",
      "state-dependent rates",
      "recurrence"
    ],
    "statement": "Three labelled balls are distributed between urns $A$ and $B$; initially all three are in $A$. At each step one of the three balls is chosen uniformly at random and moved to the other urn. Find the expected number of steps until urn $A$ becomes empty for the first time.",
    "answer": "\\[\\boxed{10}\\]",
    "trap": "Treating the count in $A$ as an unbiased symmetric walk on $\\{0,1,2,3\\}$ and applying a $k(N-k)$ or constant-rate formula. The transition rates are state-dependent: from $k$ balls in $A$ the chain moves down with probability $k/3$ and up with $(3-k)/3$, an inward drift toward the centre. A symmetric walk (down probability $\\tfrac12$ everywhere) reflecting at $3$ gives $9$, not $10$; ignoring the state-dependence and the non-absorbing nature of state $3$ destroys the recurrence and the answer.",
    "solutions": [
      {
        "name": "First-passage recurrence",
        "steps": [
          "Let $E_k$ be the expected number of steps to reach $0$ starting from $k$ balls in $A$, with target $E_0=0$. From state $k$ the count moves to $k-1$ with probability $\\tfrac k3$ and to $k+1$ with probability $\\tfrac{3-k}{3}$.",
          "State $3$: the only available move sends a ball out, so $E_3=1+E_2$.",
          "State $2$: $E_2=1+\\tfrac23 E_1+\\tfrac13 E_3$.",
          "State $1$: $E_1=1+\\tfrac13\\cdot E_0+\\tfrac23 E_2=1+\\tfrac23 E_2$.",
          "Substitute $E_3=1+E_2$ into the $E_2$ equation: $E_2=1+\\tfrac23 E_1+\\tfrac13(1+E_2)$, i.e. $\\tfrac23 E_2=\\tfrac43+\\tfrac23 E_1$. Combined with $E_1=1+\\tfrac23 E_2$ this yields $E_1=7,\\ E_2=9,$ and $E_3=1+E_2=\\boxed{10}$."
        ]
      },
      {
        "name": "Edge-by-edge expected crossings",
        "steps": [
          "For a birth–death chain the first-passage time from $3$ to $0$ decomposes over the directed down-edges; let $t_k$ be the expected number of steps to go from $k$ to $k-1$ for the first time.",
          "Conditioning on the first move from $k$: with probability $\\tfrac k3$ we descend in one step, otherwise we ascend to $k+1$ and must first return to $k$. This gives $t_k=\\dfrac{1}{k/3}\\Big(1+\\tfrac{3-k}{3}\\,t_{k+1}\\Big)$, with $t_4=0$ (state $4$ does not exist).",
          "Compute upward from the top: $t_3=\\dfrac{1}{1}(1+0)=1$, then $t_2=\\dfrac{3}{2}\\big(1+\\tfrac13 t_3\\big)=\\dfrac32\\cdot\\tfrac43=2$, and $t_1=\\dfrac{3}{1}\\big(1+\\tfrac23 t_2\\big)=3\\cdot\\tfrac73=7$.",
          "Total from $3$ to $0$: $t_3+t_2+t_1=1+2+7=\\boxed{10}$."
        ]
      }
    ],
    "remark": "Insight: the Ehrenfest urn has a restoring drift toward equilibrium ($k=1$ or $2$), so emptying it completely is an 'uphill' first passage. The escalating per-edge costs $1,2,7$ show how stubbornly the last ball resists expulsion — the signature of the birth–death recurrence. A symmetric-walk shortcut returns $9$ and silently misses this asymmetry."
  },
  {
    "theme": "recurrence",
    "themeLabel": "Recursive & Markov Probability",
    "title": "How Often Home Is Revisited",
    "difficulty": 5,
    "task": "Find",
    "tags": [
      "green's function",
      "fundamental matrix",
      "expected visits",
      "symmetric walk",
      "recurrence"
    ],
    "statement": "A symmetric random walk on $\\{0,1,\\dots,6\\}$ starts at position $2$ and is absorbed at $0$ or $6$. Counting the initial occupancy as one visit, find (i) the expected number of times the walk is at its starting position $2$ before absorption, and (ii) the expected total number of steps until absorption.",
    "answer": "\\[\\boxed{\\text{(i) }\\dfrac{8}{3},\\qquad \\text{(ii) }8}\\]",
    "trap": "Computing only the absorption time via $k(N-k)=2\\cdot4=8$ and then assuming the number of visits to the start is 'about' that, or that it equals the time divided by the number of states (giving $\\tfrac{8}{7}$). The expected-visits count is a Green's-function quantity, the diagonal entry $N_{ii}=\\dfrac{2\\,i\\,(N-i)}{N}$ of the fundamental matrix $(I-Q)^{-1}$, governed by a different recurrence than the absorption-time parabola; here $N_{22}=\\tfrac{8}{3}$, not $8$ and not $\\tfrac{8}{7}$.",
    "solutions": [
      {
        "name": "Green's function / fundamental matrix",
        "steps": [
          "Restrict the chain to the transient states $\\{1,2,3,4,5\\}$ and let $Q$ be the substochastic transition matrix among them. The fundamental matrix $N=(I-Q)^{-1}$ has entry $N_{ij}=$ expected number of visits to $j$ starting from $i$ (the initial occupancy counts as a visit).",
          "For the symmetric walk on $\\{0,1,\\dots,M\\}$ absorbed at $0,M$, the visit counts are the Green's function $N_{ij}=\\dfrac{2\\,a\\,(M-b)}{M}$, where $a=\\min(i,j)$ and $b=\\max(i,j)$. With $M=6$ and $i=j=2$ this gives $N_{22}=\\dfrac{2\\cdot 2\\cdot(6-2)}{6}=\\dfrac{16}{6}=\\boxed{\\dfrac{8}{3}}$.",
          "The expected absorption time from $i$ is the row sum $\\displaystyle\\sum_{j=1}^{5}N_{ij}$. Summing the Green's function over $j$ telescopes to $i(M-i)$, so from $i=2$ it equals $2\\cdot 4=8$.",
          "Cross-check by first passage: the absorption time satisfies $D(k)=1+\\tfrac12 D(k+1)+\\tfrac12 D(k-1)$ with $D(0)=D(6)=0$, whose solution is the parabola $D(k)=k(6-k)$, giving $D(2)=8$. Hence (i) $\\tfrac{8}{3}$ and (ii) $8$."
        ]
      },
      {
        "name": "Direct first-step systems",
        "steps": [
          "Visits to the start: from $2$ each visit is followed by a return to $2$ before absorption with some probability $\\rho$, so the visit count is geometric, $v=\\dfrac{1}{1-\\rho}$. One step from $2$ lands at $1$ or $3$, each with probability $\\tfrac12$.",
          "Gambler's ruin gives the chance of returning to $2$ before being absorbed: from $1$ the walk reaches $2$ before $0$ with probability $\\tfrac12$; from $3$ it reaches $2$ before $6$ with probability $\\dfrac{6-3}{6-2}=\\tfrac34$. Hence $\\rho=\\tfrac12\\cdot\\tfrac12+\\tfrac12\\cdot\\tfrac34=\\tfrac58$.",
          "Therefore $v=\\dfrac{1}{1-\\rho}=\\dfrac{1}{1-5/8}=\\dfrac{1}{3/8}=\\boxed{\\dfrac{8}{3}}$.",
          "Expected steps: solve $D(k)=1+\\tfrac12 D(k+1)+\\tfrac12 D(k-1)$ with $D(0)=D(6)=0$. The solution is $D(k)=k(6-k)$, so $D(2)=2\\cdot 4=\\boxed{8}$."
        ]
      }
    ],
    "remark": "Two different recurrences live on the same walk: the inhomogeneous one for time, whose solution is the parabola $D(k)=k(6-k)$, and the resolvent one for visit counts, the Green's function $N_{ij}$. They agree only after the visit counts are summed over all transient states; mistaking one quantity for the other, or dividing the time by the number of states, is the deep trap."
  },
  {
    "theme": "recurrence",
    "themeLabel": "Recursive & Markov Probability",
    "title": "The Self-Echoing Pattern",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "pattern waiting time",
      "overlap",
      "conway",
      "absorbing chain",
      "recurrence"
    ],
    "statement": "A fair coin is tossed repeatedly. Let $T$ be the number of tosses until the overlapping pattern $\\mathrm{HTHT}$ first appears. Evaluate $\\mathbb E[T]$, and explain why it exceeds $\\mathbb E$ for both $\\mathrm{HTHH}$ and the naive $2^4$.",
    "answer": "\\[\\boxed{\\mathbb E[T_{\\mathrm{HTHT}}]=20}\\]",
    "trap": "Assuming all length-$4$ patterns wait $2^4=16$ tosses, or that the extra overlap only adds a small constant. $\\mathrm{HTHT}$ has two self-overlaps — the full length $4$ and the length-$2$ prefix/suffix $\\mathrm{HT}$ — so a near-miss leaves you two symbols deep, forcing $\\mathbb E=16+4=20$. Treating overlaps as if only the full match counted (or none) gives the wrong $16$ or $18$.",
    "solutions": [
      {
        "name": "Conway correlation sum",
        "steps": [
          "For a fair coin, $\\mathbb E[T_A]=\\sum_{i=1}^{4}2^{\\,i}\\,[\\,A_{1\\ldots i}=A_{4-i+1\\ldots4}\\,]$.",
          "For $A=\\mathrm{HTHT}$: $i=4$ matches (full) $\\Rightarrow 2^4=16$; $i=2$ matches ($\\mathrm{HT}=\\mathrm{HT}$) $\\Rightarrow 2^2=4$; $i=1$ ($\\mathrm H\\ne\\mathrm T$) and $i=3$ ($\\mathrm{HTH}\\ne\\mathrm{THT}$) contribute $0$.",
          "Sum: $16+4=\\boxed{20}$.",
          "By contrast $\\mathrm{HTHH}$ overlaps only at $i=4$ and $i=1$ ($\\mathrm H=\\mathrm H$) giving $16+2=18$, and a non-self-overlapping pattern gives exactly $16$ — so the double echo of $\\mathrm{HTHT}$ is what pushes it to $20$."
        ]
      },
      {
        "name": "Suffix-state Markov chain",
        "steps": [
          "States are the longest suffix that is a prefix of $\\mathrm{HTHT}$: $\\varnothing,\\mathrm H,\\mathrm{HT},\\mathrm{HTH}$, then absorb at $\\mathrm{HTHT}$.",
          "Transitions: $\\varnothing\\!:H\\to\\mathrm H,T\\to\\varnothing$; $\\mathrm H\\!:H\\to\\mathrm H,T\\to\\mathrm{HT}$; $\\mathrm{HT}\\!:H\\to\\mathrm{HTH},T\\to\\varnothing$; $\\mathrm{HTH}\\!:H\\to\\mathrm H,T\\to\\text{done}$ (the $H$ collapses to suffix $\\mathrm H$ because the longest useful suffix of $\\mathrm{HTHH}$ is $\\mathrm H$).",
          "Equations: $E_\\varnothing=1+\\tfrac12E_{\\mathrm H}+\\tfrac12E_\\varnothing$, $E_{\\mathrm H}=1+\\tfrac12E_{\\mathrm H}+\\tfrac12E_{\\mathrm{HT}}$, $E_{\\mathrm{HT}}=1+\\tfrac12E_{\\mathrm{HTH}}+\\tfrac12E_\\varnothing$, $E_{\\mathrm{HTH}}=1+\\tfrac12E_{\\mathrm H}+\\tfrac12\\cdot0$.",
          "Solving the linear system gives $E_{\\mathrm{HTH}}=10,\\ E_{\\mathrm{HT}}=16,\\ E_{\\mathrm H}=18,\\ E_\\varnothing=\\boxed{20}$, confirming Conway."
        ]
      }
    ],
    "remark": "Insight: every self-overlap of length $i$ adds $2^{i}$ to the expected wait, because a failed completion drops you exactly $i$ symbols deep. $\\mathrm{HTHT}$ echoes itself twice, so it is the slowest of its length class to appear."
  },
  {
    "theme": "recurrence",
    "themeLabel": "Recursive & Markov Probability",
    "title": "Will the Lineage Die Out?",
    "difficulty": 5,
    "task": "Find",
    "tags": [
      "galton-watson",
      "generating function",
      "extinction",
      "fixed point",
      "branching"
    ],
    "statement": "A colony starts from a single organism. Each organism, independently, produces a number of offspring distributed as $\\Pr(0)=\\tfrac14,\\ \\Pr(1)=\\tfrac14,\\ \\Pr(2)=\\tfrac12$ before dying; offspring then reproduce by the same law, generation after generation. Find the probability that the colony eventually becomes extinct.",
    "answer": "\\[\\boxed{\\dfrac{1}{2}}\\]",
    "trap": "Since the mean offspring number $\\mu=\\tfrac54>1$ the lineage is supercritical, and one is tempted to say extinction is impossible (probability $0$) — or to take the fixed point $q=1$ of $q=f(q)$. The extinction probability is the smallest root in $[0,1]$ of $q=f(q)$, and for a supercritical process that root is strictly between $0$ and $1$; the root $q=1$ is the wrong (unstable) one.",
    "solutions": [
      {
        "name": "Generating-function fixed point",
        "steps": [
          "Let $q$ be the extinction probability and $f(s)=\\tfrac14+\\tfrac14 s+\\tfrac12 s^{2}$ the offspring generating function. Conditioning on the first generation (each of the offspring lineages must die out independently) gives the recurrence $q=f(q)$.",
          "Solve $\\tfrac12 q^{2}+\\tfrac14 q+\\tfrac14=q\\ \\Rightarrow\\ \\tfrac12 q^{2}-\\tfrac34 q+\\tfrac14=0\\ \\Rightarrow\\ 2q^{2}-3q+1=0$.",
          "Factor: $(2q-1)(q-1)=0$, roots $q=\\tfrac12$ and $q=1$.",
          "Because $\\mu=f'(1)=\\tfrac54>1$ (supercritical), the extinction probability is the smaller root: $q=\\boxed{\\tfrac12}$."
        ]
      },
      {
        "name": "Monotone iteration",
        "steps": [
          "Define $q_0=0$ and $q_{n+1}=f(q_n)$, where $q_n=\\Pr(\\text{extinct by generation }n)$ is increasing and converges to $q$.",
          "Iterate: $q_1=f(0)=\\tfrac14$, $q_2=f(\\tfrac14)=\\tfrac14+\\tfrac1{16}+\\tfrac1{32}=\\tfrac{13}{32}$, $q_3=f(\\tfrac{13}{32})\\approx 0.461$, climbing toward $\\tfrac12$.",
          "The limit is the smallest fixed point of $f$ in $[0,1]$; since $f$ is convex with $f(0)>0$ and $f'(1)>1$, that fixed point is unique below $1$.",
          "It equals the root $q=\\boxed{\\tfrac12}$ found algebraically, and the iteration never approaches the unstable fixed point $1$."
        ]
      }
    ],
    "remark": "Insight: extinction is a fixed-point problem, and supercriticality ($\\mu>1$) guarantees a genuine root below $1$ — survival is possible but not certain. Picking the wrong fixed point $q=1$ is the canonical branching-process error. A Monte-Carlo run of the process matches $q=\\tfrac12$ to two decimals."
  },
  {
    "theme": "inclusionexcl",
    "themeLabel": "Inclusion–Exclusion & Matching",
    "title": "The Six Misdelivered Letters",
    "difficulty": 3,
    "task": "Evaluate",
    "tags": [
      "derangement",
      "matching",
      "inclusion-exclusion",
      "probability"
    ],
    "statement": "A clerk addresses $6$ letters to $6$ distinct people and, in a hurry, stuffs the $6$ letters into the $6$ pre-addressed envelopes in a uniformly random one-to-one fashion. Find the probability that not a single letter lands in its correct envelope.",
    "answer": "\\[\\boxed{\\dfrac{53}{144}}\\]",
    "trap": "Reasoning \"each letter has a $5/6$ chance of being wrong, and there are $6$ letters, so the answer is $(5/6)^6$.\" This treats the six placements as independent; once five letters are placed the sixth is forced, so the events are strongly dependent and the product is wrong.",
    "solutions": [
      {
        "name": "Inclusion–exclusion over fixed points",
        "steps": [
          "Let $A_i$ be the event that letter $i$ is in its own envelope. We want $P\\!\\left(\\bigcap \\overline{A_i}\\right)=1-P\\!\\left(\\bigcup A_i\\right)$.",
          "For any $k$ chosen letters, $P(A_{i_1}\\cap\\cdots\\cap A_{i_k})=\\dfrac{(6-k)!}{6!}$, since the remaining $6-k$ letters are free.",
          "By inclusion–exclusion, $P(\\text{no fixed point})=\\sum_{k=0}^{6}(-1)^k\\binom{6}{k}\\dfrac{(6-k)!}{6!}=\\sum_{k=0}^{6}\\dfrac{(-1)^k}{k!}$.",
          "Summing: $1-1+\\tfrac12-\\tfrac16+\\tfrac1{24}-\\tfrac1{120}+\\tfrac1{720}=\\dfrac{265}{720}=\\boxed{\\dfrac{53}{144}}$."
        ]
      },
      {
        "name": "Derangement count",
        "steps": [
          "The favourable permutations are derangements; $D_6=6!\\sum_{k=0}^{6}\\frac{(-1)^k}{k!}=265$.",
          "The probability is $D_6/6!=265/720=\\boxed{\\dfrac{53}{144}}$."
        ]
      },
      {
        "name": "Recurrence",
        "steps": [
          "Use $D_n=(n-1)(D_{n-1}+D_{n-2})$ with $D_1=0,\\;D_2=1$.",
          "Then $D_3=2,\\;D_4=9,\\;D_5=44,\\;D_6=5(44+9)=265$, giving probability $265/720=\\boxed{\\dfrac{53}{144}}$."
        ]
      }
    ],
    "remark": "Insight: the derangement probability $D_n/n!=\\sum_{k=0}^n(-1)^k/k!$ converges to $1/e$ astonishingly fast — already at $n=6$ it equals $0.3680\\ldots$ versus $e^{-1}=0.3678\\ldots$, so a random shuffle of $6$ items misses everything roughly $37\\%$ of the time."
  },
  {
    "theme": "inclusionexcl",
    "themeLabel": "Inclusion–Exclusion & Matching",
    "title": "No Empty Inbox",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "surjection",
      "occupancy",
      "inclusion-exclusion",
      "no-empty-box"
    ],
    "statement": "Seven distinguishable e-mails are each routed, independently and uniformly at random, to one of four mailboxes. Find the probability that every one of the four mailboxes receives at least one e-mail.",
    "answer": "\\[\\boxed{\\dfrac{525}{1024}}\\]",
    "trap": "Subtracting only $4\\cdot(3/4)^7$ for \"some box is empty\" and stopping, which gives $1-4(3/4)^7=\\tfrac{1909}{4096}$. That single correction over-counts: routings missing two boxes are subtracted twice, so the alternating inclusion–exclusion tail $+\\binom{4}{2}(2/4)^7-\\cdots$ is mandatory. Equally tempting are bare $\\binom{4}{1}$-style heuristics with no exclusion at all.",
    "solutions": [
      {
        "name": "Inclusion–exclusion on empty boxes",
        "steps": [
          "Let $E_j$ be the event that mailbox $j$ is empty. We want $P\\!\\left(\\bigcap_{j}\\overline{E_j}\\right)$ among the $4^7$ equally likely routings.",
          "For a fixed set of $j$ boxes, the probability they are all empty is $\\big((4-j)/4\\big)^7$, and there are $\\binom{4}{j}$ such sets, so the surjection count is $\\sum_{j=0}^{4}(-1)^j\\binom{4}{j}(4-j)^7$.",
          "Evaluate: $4^7-4\\cdot3^7+6\\cdot2^7-4\\cdot1^7=16384-8748+768-4=8400$.",
          "Probability $=\\dfrac{8400}{4^7}=\\dfrac{8400}{16384}=\\boxed{\\dfrac{525}{1024}}$."
        ]
      },
      {
        "name": "Stirling numbers of the second kind",
        "steps": [
          "A routing hitting all four boxes is exactly a surjection from the $7$-element set of e-mails onto the $4$-element set of mailboxes.",
          "Such surjections number $4!\\,S(7,4)$, where $S(7,4)=350$ counts the ways to partition the seven e-mails into four nonempty unlabelled groups.",
          "Thus there are $24\\cdot350=8400$ favourable routings out of $4^7=16384$, giving $\\dfrac{8400}{16384}=\\boxed{\\dfrac{525}{1024}}$."
        ]
      }
    ],
    "remark": "Insight: \"no empty box\" is the occupancy mirror of \"no fixed point\" — both are inclusion–exclusion over a family of forbidden coincidences. Here the forbidden events $E_j$ live on the cells (mailboxes), not the items, and the surjection count $\\sum_j(-1)^j\\binom{4}{j}(4-j)^7=4!\\,S(7,4)$ ties the two methods together exactly."
  },
  {
    "theme": "inclusionexcl",
    "themeLabel": "Inclusion–Exclusion & Matching",
    "title": "A Shared Day Off",
    "difficulty": 3,
    "task": "Determine",
    "tags": [
      "coincidence",
      "complement",
      "at-least-one",
      "birthday"
    ],
    "statement": "Five interns each pick, independently and uniformly at random, one weekday (Monday through Friday) for their day off. Determine the probability that at least two interns end up choosing the same day.",
    "answer": "\\[\\boxed{\\dfrac{601}{625}}\\]",
    "trap": "Trying to add $\\binom{5}{2}\\cdot\\frac15$ as \"the probability some pair coincides.\" Those pairwise coincidence events overlap heavily, and the naive sum $\\binom{5}{2}\\cdot\\frac15=2$ even exceeds $1$; the clean route is the complement of \"all distinct.\"",
    "solutions": [
      {
        "name": "Complement (all distinct)",
        "steps": [
          "The total number of choice-tuples is $5^5=3125$.",
          "All five days distinct means a bijection of $5$ interns onto $5$ days: $5!=120$ tuples.",
          "$P(\\text{all distinct})=120/3125=24/625$.",
          "$P(\\text{at least two coincide})=1-24/625=\\boxed{\\dfrac{601}{625}}$."
        ]
      },
      {
        "name": "Falling factorial",
        "steps": [
          "Assign interns one at a time, demanding a new day each time: $P(\\text{all distinct})=\\dfrac{5}{5}\\cdot\\dfrac{4}{5}\\cdot\\dfrac{3}{5}\\cdot\\dfrac{2}{5}\\cdot\\dfrac{1}{5}=\\dfrac{120}{3125}=\\dfrac{24}{625}$.",
          "Therefore the answer is $1-\\dfrac{24}{625}=\\boxed{\\dfrac{601}{625}}$."
        ]
      },
      {
        "name": "Inclusion–exclusion on the days (surjection count)",
        "steps": [
          "\"All distinct\" with $5$ interns and $5$ days is equivalent to every day being used exactly once, i.e. a surjection from interns onto days.",
          "Count surjections by inclusion–exclusion: $\\sum_{k=0}^{5}(-1)^k\\binom{5}{k}(5-k)^5 = 3125-5\\cdot 1024+10\\cdot 243-10\\cdot 64+5\\cdot 1-0 = 120$.",
          "So $P(\\text{all distinct})=120/3125=24/625$, and $P(\\text{at least two coincide})=1-\\dfrac{24}{625}=\\boxed{\\dfrac{601}{625}}$."
        ]
      }
    ],
    "remark": "Insight: with exactly as many people as days, \"all distinct\" forces a perfect matching, so the probability is just $n!/n^n$ — a tiny $24/625$, making a collision almost certain ($96.16\\%$). The naive pairwise sum $\\binom{5}{2}\\cdot\\frac15=2$ overshoots precisely because it double-counts the heavy overlaps among the ten pair-coincidence events."
  },
  {
    "theme": "inclusionexcl",
    "themeLabel": "Inclusion–Exclusion & Matching",
    "title": "The Forbidden Gift",
    "difficulty": 4,
    "task": "Find",
    "tags": [
      "derangement",
      "secret-santa",
      "conditional",
      "matching"
    ],
    "statement": "Five friends play Secret Santa: a uniformly random permutation assigns each person the name of the person they must gift, subject to the single rule that nobody draws their own name (a derangement of $\\{1,2,3,4,5\\}$). Given that the draw is a valid derangement, find the probability that person $1$ does not gift person $2$.",
    "answer": "\\[\\boxed{\\dfrac{3}{4}}\\]",
    "trap": "Computing $P(\\sigma(1)=2)=1/5$ from the full symmetric group and answering $4/5$. The conditioning is on the set of derangements, not all permutations, so the relevant denominator is $D_5=44$, not $120$.",
    "solutions": [
      {
        "name": "Direct count among derangements",
        "steps": [
          "There are $D_5=44$ derangements of $\\{1,2,3,4,5\\}$.",
          "Count those with $\\sigma(1)=2$: fixing $1\\mapsto2$, the remaining map must avoid fixed points on $\\{2,3,4,5\\}$ with $2$ now needing a target $\\neq2$. This count equals $D_4+D_3=9+2=11$.",
          "So $P(\\sigma(1)=2\\mid\\text{derangement})=11/44=1/4$.",
          "The requested probability is $1-1/4=\\boxed{\\dfrac{3}{4}}$."
        ]
      },
      {
        "name": "Symmetry argument",
        "steps": [
          "For a uniformly chosen derangement, $\\sigma(1)$ is equally likely to be any of $2,3,4,5$ by relabeling symmetry of the four non-self targets.",
          "Hence $P(\\sigma(1)=2)=1/4$, and $P(\\sigma(1)\\neq2)=1-1/4=\\boxed{\\dfrac{3}{4}}$."
        ]
      }
    ],
    "remark": "Insight: conditioning on \"no fixed point\" breaks the naive $1/n$ uniformity over all targets but restores a clean $1/(n-1)$ uniformity over the allowed targets — symmetry, once you condition on the right event."
  },
  {
    "theme": "inclusionexcl",
    "themeLabel": "Inclusion–Exclusion & Matching",
    "title": "Exactly Two Right",
    "difficulty": 3,
    "task": "Evaluate",
    "tags": [
      "fixed-points",
      "partial-matching",
      "derangement",
      "inclusion-exclusion"
    ],
    "statement": "Four guests check four identical-looking coats; at the end of the evening the four coats are returned in a uniformly random one-to-one assignment. Find the probability that exactly two guests get their own coat back.",
    "answer": "\\[\\boxed{\\dfrac{1}{4}}\\]",
    "trap": "Stopping at $\\binom{4}{2}\\cdot\\frac{1}{4}\\cdot\\frac{1}{3}=\\frac12$, i.e. \"pick the two lucky guests and place their coats.\" That counts arrangements where the other two also happen to match, overcounting; the remaining two must be deranged.",
    "solutions": [
      {
        "name": "Choose-then-derange",
        "steps": [
          "Choose which $2$ of the $4$ guests are matched: $\\binom{4}{2}=6$ ways.",
          "The remaining $2$ coats must go to the wrong owners, i.e. a derangement of $2$ elements: $D_2=1$ way.",
          "Favourable permutations $=6\\cdot1=6$; total $=4!=24$.",
          "Probability $=6/24=\\boxed{\\dfrac{1}{4}}$."
        ]
      },
      {
        "name": "Fixed-point distribution",
        "steps": [
          "The number of permutations of $4$ with exactly $k$ fixed points is $\\binom{4}{k}D_{4-k}$: for $k=0,1,2,3,4$ this is $9,8,6,0,1$ (sum $24$).",
          "For $k=2$ the count is $6$, so the probability is $6/24=\\boxed{\\dfrac{1}{4}}$."
        ]
      }
    ],
    "remark": "Insight: \"exactly $k$ correct\" always splits as choose-the-$k$ times derange-the-rest, $\\binom{n}{k}D_{n-k}$. The impossibility of \"exactly $3$ of $4$\" ($D_1=0$) is the giveaway that fixed points cannot be sprinkled freely."
  },
  {
    "theme": "inclusionexcl",
    "themeLabel": "Inclusion–Exclusion & Matching",
    "title": "Divisible by Design",
    "difficulty": 4,
    "task": "Determine",
    "tags": [
      "inclusion-exclusion",
      "number-theory",
      "at-least-one",
      "divisibility"
    ],
    "statement": "An integer is chosen uniformly at random from $\\{1,2,\\dots,30\\}$. Determine the probability that it is divisible by at least one of $2,\\,3,\\,5$.",
    "answer": "\\[\\boxed{\\dfrac{11}{15}}\\]",
    "trap": "Adding $P(2\\mid n)+P(3\\mid n)+P(5\\mid n)=\\tfrac12+\\tfrac13+\\tfrac15=\\tfrac{31}{30}>1$ and accepting a probability above $1$. The events \"divisible by $2$\", \"by $3$\", \"by $5$\" are not disjoint; the pairwise and triple overlaps must be corrected.",
    "solutions": [
      {
        "name": "Inclusion–exclusion on divisibility",
        "steps": [
          "Among $1,\\dots,30$: multiples of $2$: $15$; of $3$: $10$; of $5$: $6$.",
          "Pairwise: of $6$: $5$; of $10$: $3$; of $15$: $2$. Triple: of $30$: $1$.",
          "Inclusion–exclusion: $15+10+6-5-3-2+1=22$ integers divisible by at least one.",
          "Probability $=22/30=\\boxed{\\dfrac{11}{15}}$."
        ]
      },
      {
        "name": "Complement via coprimality",
        "steps": [
          "The count divisible by none of $2,3,5$ equals the integers coprime to $30$ in the range: $30\\big(1-\\tfrac12\\big)\\big(1-\\tfrac13\\big)\\big(1-\\tfrac15\\big)=30\\cdot\\tfrac{4}{15}=8$.",
          "So $30-8=22$ are divisible by at least one, giving $22/30=\\boxed{\\dfrac{11}{15}}$."
        ]
      }
    ],
    "remark": "Insight: divisibility events are the cleanest laboratory for inclusion–exclusion because the overlaps factor multiplicatively — the complement count is exactly Euler's product $30\\prod(1-1/p)$, here yielding $8$ survivors."
  },
  {
    "theme": "inclusionexcl",
    "themeLabel": "Inclusion–Exclusion & Matching",
    "title": "Keep the Couples Apart",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "inclusion-exclusion",
      "adjacency",
      "matching",
      "seating",
      "blocks"
    ],
    "statement": "Three married couples — six people in all — are seated in a row of six chairs in a uniformly random order. Find the probability that no couple ends up sitting in two adjacent chairs.",
    "answer": "\\[\\boxed{\\dfrac{1}{3}}\\]",
    "trap": "Computing $P(\\text{couple }i\\text{ adjacent})=2\\cdot5!/6!=1/3$ and subtracting $3\\times\\tfrac13=1$ to conclude the answer is $0$. The three adjacency events overlap; their intersections (two or three couples glued at once) must be added back.",
    "solutions": [
      {
        "name": "Inclusion–exclusion on glued couples",
        "steps": [
          "Let $A_i$ be the event that couple $i$ sits adjacently. Glue $k$ specified couples into blocks: $(6-k)!$ arrangements of the $6-k$ objects, each glued pair internally orderable $2$ ways, so $P(A_{i_1}\\cap\\cdots\\cap A_{i_k})=\\dfrac{2^k(6-k)!}{6!}$.",
          "$P(\\bigcup A_i)=\\binom{3}{1}\\tfrac{2\\cdot120}{720}-\\binom{3}{2}\\tfrac{4\\cdot24}{720}+\\binom{3}{3}\\tfrac{8\\cdot6}{720}=1-\\tfrac{2}{5}+\\tfrac{1}{15}=\\tfrac{2}{3}$.",
          "Therefore $P(\\text{no couple adjacent})=1-\\tfrac{2}{3}=\\boxed{\\dfrac{1}{3}}$."
        ]
      },
      {
        "name": "Direct counting check",
        "steps": [
          "Number with no couple adjacent $=6!-\\big(3\\cdot2\\cdot5!-3\\cdot2^2\\cdot4!+2^3\\cdot3!\\big)=720-(720-288+48)=720-480=240$.",
          "Probability $=240/720=\\boxed{\\dfrac{1}{3}}$."
        ]
      }
    ],
    "remark": "Insight: gluing a couple into a block multiplies by $2$ (internal order) and drops one object from the row, so each higher intersection term grows like $2^k(6-k)!$ — the alternating sum is what rescues the over-subtracted first term from giving the absurd answer $0$."
  },
  {
    "theme": "inclusionexcl",
    "themeLabel": "Inclusion–Exclusion & Matching",
    "title": "Five Faces of Six Rolls",
    "difficulty": 5,
    "task": "Find",
    "tags": [
      "occupancy",
      "inclusion-exclusion",
      "surjection",
      "dice",
      "exact-count"
    ],
    "statement": "A fair six-sided die is rolled six times. Find the probability that exactly five of the six faces appear (i.e. precisely one face value never shows up).",
    "answer": "\\[\\boxed{\\dfrac{25}{108}}\\]",
    "trap": "Choosing the missing face ($6$ ways) and then assigning each of the $6$ rolls freely to the remaining $5$ faces ($5^6$ ways), giving $6\\cdot 5^6=93750$. This is not a surjection: it lets a second face also stay empty, so it overcounts wildly—so badly that $93750/46656>1$. The image must be exactly the chosen five faces, which forces a genuine surjection of the $6$ rolls onto the $5$-set, not a free map into it.",
    "solutions": [
      {
        "name": "Choose the missing face, then count surjections",
        "steps": [
          "Pick the one absent face: $6$ ways. The six rolls must then land on each of the remaining five faces at least once—a surjection of a $6$-set onto a $5$-set.",
          "Surjections $6\\to5$ by inclusion–exclusion: $\\sum_{j=0}^{5}(-1)^j\\binom{5}{j}(5-j)^6 = 5^6-\\binom{5}{1}4^6+\\binom{5}{2}3^6-\\binom{5}{3}2^6+\\binom{5}{4}1^6 = 15625-20480+7290-960+5 = 1800$ (equivalently $5!\\,S(6,5)=120\\cdot15$).",
          "Favourable outcomes $=6\\cdot1800=10800$ out of $6^6=46656$.",
          "Probability $=\\dfrac{10800}{46656}=\\boxed{\\dfrac{25}{108}}$."
        ]
      },
      {
        "name": "Multiplicity pattern (one pair, four singletons)",
        "steps": [
          "Exactly five distinct faces in six rolls forces the multiplicity pattern $2+1+1+1+1$: one face appears twice and four faces appear once.",
          "Choose the doubled face ($6$ ways), choose which four of the remaining five faces also appear ($\\binom{5}{4}=5$), then arrange the multiset $\\{a,a,b,c,d,e\\}$ across the six ordered rolls in $\\dfrac{6!}{2!}=360$ ways.",
          "Count $=6\\cdot5\\cdot360=10800$, so probability $=\\dfrac{10800}{46656}=\\boxed{\\dfrac{25}{108}}$."
        ]
      },
      {
        "name": "Pure inclusion–exclusion on the number of empty faces",
        "steps": [
          "Let $A_i$ be the event that face $i$ never appears. The number of outcomes missing a specified set of $k$ faces is $(6-k)^6$, and there are $\\binom{6}{k}$ such sets.",
          "Outcomes hitting at least five distinct faces means at most one face is missing; we want exactly one missing. Outcomes with at least one specified empty face summed signed-ly give, for exactly one empty face, $\\binom{6}{1}\\big[(6-1)^6-\\binom{5}{1}(6-2)^6+\\cdots\\big]$, which is precisely $\\binom{6}{1}\\cdot(\\text{surjections }6\\to5)=6\\cdot1800=10800$.",
          "Hence probability $=\\dfrac{10800}{6^6}=\\dfrac{10800}{46656}=\\boxed{\\dfrac{25}{108}}$."
        ]
      }
    ],
    "remark": "Insight: “exactly five faces” is an occupancy problem one rung below a full surjection onto six. The engine is the same inclusion–exclusion surjection count $5!\\,S(6,5)=1800$ that powers “no empty box”—you simply choose the single empty box first. The seductive $6\\cdot5^6$ fails the sanity check instantly: it exceeds the total $6^6$, so its “probability” is greater than $1$. A correct surjection count is mandatory, and equivalently the multiplicity pattern must be exactly $2+1+1+1+1$."
  },
  {
    "theme": "inclusionexcl",
    "themeLabel": "Inclusion–Exclusion & Matching",
    "title": "The Limit of Almost Right",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "derangement",
      "limit",
      "poisson",
      "matching",
      "one-over-e"
    ],
    "statement": "For each $n$, let $p_n$ be the probability that a uniformly random permutation of $\\{1,2,\\dots,n\\}$ has exactly two fixed points. Evaluate $\\displaystyle\\lim_{n\\to\\infty}p_n$.",
    "answer": "\\[\\boxed{\\dfrac{1}{2e}}\\]",
    "trap": "Believing the chance of \"exactly two correct\" shrinks to $0$ as $n\\to\\infty$ because \"matching gets harder.\" In fact the number of fixed points converges in law to Poisson$(1)$, so $p_n$ tends to a positive constant $e^{-1}/2!$, not $0$.",
    "solutions": [
      {
        "name": "Exact formula then limit",
        "steps": [
          "$p_n=\\dfrac{\\binom{n}{2}D_{n-2}}{n!}=\\dfrac{1}{2!}\\cdot\\dfrac{D_{n-2}}{(n-2)!}$, since $\\binom{n}{2}/n!=1/(2!\\,(n-2)!)$.",
          "As $n\\to\\infty$, $\\dfrac{D_{n-2}}{(n-2)!}=\\sum_{k=0}^{n-2}\\dfrac{(-1)^k}{k!}\\to e^{-1}$.",
          "Hence $\\lim_{n\\to\\infty}p_n=\\dfrac{1}{2!}\\,e^{-1}=\\boxed{\\dfrac{1}{2e}}$."
        ]
      },
      {
        "name": "Poisson limit of fixed points",
        "steps": [
          "Let $X_n$ count fixed points of a random permutation. By inclusion–exclusion the factorial moments satisfy $E\\big[\\binom{X_n}{k}\\big]=1/k!$ for $k\\le n$, matching Poisson$(1)$.",
          "Therefore $X_n\\xrightarrow{d}\\text{Poisson}(1)$, so $P(X_n=2)\\to \\dfrac{e^{-1}1^2}{2!}=\\boxed{\\dfrac{1}{2e}}$."
        ]
      }
    ],
    "remark": "Insight: the entire fixed-point distribution of a random permutation converges to Poisson$(1)$ — \"no match\" gives $1/e$, \"exactly one\" gives $1/e$, \"exactly two\" gives $1/(2e)$ — a beautiful bridge from inclusion–exclusion to a limiting law."
  },
  {
    "theme": "inclusionexcl",
    "themeLabel": "Inclusion–Exclusion & Matching",
    "title": "Hat and Coat, Both Wrong",
    "difficulty": 4,
    "task": "Find",
    "tags": [
      "inclusion-exclusion",
      "two-permutations",
      "matching",
      "independence-trap",
      "fixed-points"
    ],
    "statement": "At a party of four guests, the cloakroom returns the four hats in a uniformly random one-to-one assignment, and independently returns the four coats in another uniformly random one-to-one assignment. Find the probability that no guest gets back both his own hat and his own coat.",
    "answer": "\\[\\boxed{\\dfrac{151}{192}}\\]",
    "trap": "Treating it as $\\big(P(\\text{hats deranged})\\big)\\cdot\\big(P(\\text{coats deranged})\\big)=(D_4/4!)^2$. The condition is far weaker — a guest may keep his hat or his coat, just not both — so the relevant events $B_i=\\{\\text{guest }i\\text{ keeps both}\\}$ must be handled by inclusion–exclusion, and crucially the $B_i$ are not independent.",
    "solutions": [
      {
        "name": "Inclusion–exclusion on the \"both own\" events",
        "steps": [
          "Let $B_i$ be the event that guest $i$ gets his own hat and own coat. We want $P\\!\\left(\\bigcap\\overline{B_i}\\right)$.",
          "For $k$ specified guests, $P(B_{i_1}\\cap\\cdots\\cap B_{i_k})=\\dfrac{(4-k)!}{4!}\\cdot\\dfrac{(4-k)!}{4!}=\\left(\\dfrac{(4-k)!}{4!}\\right)^2$ (the hat-permutation and coat-permutation each independently fix those $k$).",
          "$P(\\bigcup B_i)=\\sum_{k=1}^{4}(-1)^{k+1}\\binom{4}{k}\\left(\\tfrac{(4-k)!}{4!}\\right)^2=4\\cdot\\tfrac{36}{576}-6\\cdot\\tfrac{4}{576}+4\\cdot\\tfrac{1}{576}-1\\cdot\\tfrac{1}{576}$.",
          "This equals $\\tfrac{144-24+4-1}{576}=\\tfrac{123}{576}$, so the answer is $1-\\tfrac{123}{576}=\\tfrac{453}{576}=\\boxed{\\dfrac{151}{192}}$."
        ]
      },
      {
        "name": "Direct enumeration",
        "steps": [
          "Over all $4!\\times4!=576$ equally likely (hat-perm, coat-perm) pairs, count those for which some guest has both items correct.",
          "Pairs with at least one common fixed point number $123$ by the count above; the complement is $576-123=453$.",
          "Probability $=453/576=\\boxed{\\dfrac{151}{192}}$."
        ]
      }
    ],
    "remark": "Insight: the intersection term $\\left((4-k)!/4!\\right)^2$ is where independence does legitimately enter — the two shuffles being independent lets the per-event probabilities multiply, but the events $B_i$ across guests still demand inclusion–exclusion, not a single product."
  },
  {
    "theme": "distributions",
    "themeLabel": "Named Distributions & Limits",
    "title": "The Factory's Rare Defect",
    "difficulty": 3,
    "task": "Evaluate",
    "tags": [
      "poisson",
      "law-of-rare-events",
      "binomial-limit",
      "at-least"
    ],
    "statement": "A factory ships boxes of $n$ light bulbs. Each bulb independently fails on its first day with probability $p_n=\\dfrac{2}{n}$, and bulbs fail independently of one another. Let $X_n$ be the number of bulbs that fail on the first day. Evaluate \\[\\lim_{n\\to\\infty}\\mathbb{P}\\big(X_n\\ge 2\\big).\\]",
    "answer": "\\[\\boxed{1-3e^{-2}}\\]",
    "trap": "Computing $\\mathbb{P}(X_n\\ge 2)=1-\\mathbb{P}(X_n=0)=1-e^{-2}$ by forgetting the $k=1$ term. The complement of $\\{X\\ge 2\\}$ is $\\{X=0\\}\\cup\\{X=1\\}$, so you must subtract BOTH $e^{-2}$ and $2e^{-2}$.",
    "solutions": [
      {
        "name": "Poisson limit of the binomial",
        "steps": [
          "$X_n\\sim\\mathrm{Bin}(n,2/n)$ with $np_n=2$ fixed, so by the law of rare events $X_n\\xrightarrow{d}\\mathrm{Poisson}(2)$.",
          "$\\mathbb{P}(X=0)=e^{-2}$ and $\\mathbb{P}(X=1)=2e^{-2}$.",
          "$\\mathbb{P}(X\\ge 2)=1-e^{-2}-2e^{-2}=\\boxed{1-3e^{-2}}$."
        ]
      },
      {
        "name": "Direct binomial limits",
        "steps": [
          "$\\mathbb{P}(X_n=0)=(1-2/n)^n\\to e^{-2}$.",
          "$\\mathbb{P}(X_n=1)=n\\cdot\\tfrac{2}{n}(1-2/n)^{n-1}=2(1-2/n)^{n-1}\\to 2e^{-2}$.",
          "Hence $\\lim \\mathbb{P}(X_n\\ge2)=1-(e^{-2}+2e^{-2})=\\boxed{1-3e^{-2}}$."
        ]
      }
    ],
    "remark": "Insight: the Poisson approximation is a tail statement; the first two probability masses dominate the error you'd make by stopping at $X=0$. Monte Carlo with $n=2\\times10^5$ gives $0.593\\approx 1-3e^{-2}=0.5940$."
  },
  {
    "theme": "distributions",
    "themeLabel": "Named Distributions & Limits",
    "title": "Five Drops on the Unit Interval",
    "difficulty": 3,
    "task": "Evaluate",
    "tags": [
      "order-statistics",
      "uniform",
      "expectation",
      "range"
    ],
    "statement": "Five points $X_1,\\dots,X_5$ are dropped independently and uniformly on $[0,1]$. Let $M=\\max_i X_i$, $L=\\min_i X_i$, and let $X_{(3)}$ be the median (third smallest). Evaluate the vector \\[\\big(\\,\\mathbb{E}[M]-\\mathbb{E}[L],\\ \\mathbb{E}[X_{(3)}],\\ \\mathbb{E}[M-L]\\,\\big).\\]",
    "answer": "\\[\\boxed{\\left(\\tfrac{2}{3},\\ \\tfrac{1}{2},\\ \\tfrac{2}{3}\\right)}\\]",
    "trap": "Guessing $\\mathbb{E}[M]=\\tfrac12+$ something or using $\\mathbb{E}[M]=1-\\tfrac1n=\\tfrac45$. The correct uniform order-statistic mean is $\\mathbb{E}[X_{(k)}]=\\dfrac{k}{n+1}$, NOT $\\dfrac{k}{n}$ (which would force the absurd $\\mathbb{E}[M]=\\tfrac55=1$); the $n+1$ comes from the $n+1$ exchangeable spacings.",
    "solutions": [
      {
        "name": "Spacings symmetry",
        "steps": [
          "The $n$ points cut $[0,1]$ into $n+1$ spacings which are exchangeable, each with mean $\\tfrac{1}{n+1}$.",
          "$\\mathbb{E}[X_{(k)}]=$ (sum of first $k$ spacings) $=\\tfrac{k}{n+1}$. With $n=5$: $\\mathbb{E}[L]=\\tfrac16,\\ \\mathbb{E}[X_{(3)}]=\\tfrac36=\\tfrac12,\\ \\mathbb{E}[M]=\\tfrac56$.",
          "$\\mathbb{E}[M]-\\mathbb{E}[L]=\\tfrac46=\\tfrac23$; $\\mathbb{E}[X_{(3)}]=\\tfrac12$; $\\mathbb{E}[M-L]=\\tfrac{n-1}{n+1}=\\tfrac46=\\tfrac23$, giving $\\boxed{(\\tfrac23,\\tfrac12,\\tfrac23)}$."
        ]
      },
      {
        "name": "CDF integration for the extremes",
        "steps": [
          "$\\mathbb{P}(M\\le m)=m^5$ so $\\mathbb{E}[M]=\\int_0^1(1-m^5)\\,dm=1-\\tfrac16=\\tfrac56$.",
          "$\\mathbb{P}(L>l)=(1-l)^5$ so $\\mathbb{E}[L]=\\int_0^1(1-l)^5\\,dl=\\tfrac16$.",
          "Median by symmetry of the uniform is $\\tfrac12$; range mean $=\\tfrac56-\\tfrac16=\\tfrac23$, so $\\boxed{(\\tfrac23,\\tfrac12,\\tfrac23)}$."
        ]
      },
      {
        "name": "Beta-density direct integration",
        "steps": [
          "The $k$-th order statistic of $n$ uniforms is $\\mathrm{Beta}(k,\\,n-k+1)$ with density $\\dfrac{n!}{(k-1)!(n-k)!}\\,x^{k-1}(1-x)^{n-k}$.",
          "Its mean is $\\dfrac{k}{k+(n-k+1)}=\\dfrac{k}{n+1}$; integrating $x\\cdot f_{(k)}(x)$ for $k=1,3,5$ at $n=5$ gives $\\tfrac16,\\tfrac12,\\tfrac56$.",
          "Hence $\\mathbb{E}[M]-\\mathbb{E}[L]=\\tfrac23$, $\\mathbb{E}[X_{(3)}]=\\tfrac12$, and $\\mathbb{E}[M-L]=\\mathbb{E}[M]-\\mathbb{E}[L]=\\tfrac23$, confirming $\\boxed{(\\tfrac23,\\tfrac12,\\tfrac23)}$."
        ]
      }
    ],
    "remark": "Insight: linearity of expectation through exchangeable spacings sidesteps every density. Note the cute coincidence $\\mathbb{E}[M-L]=\\mathbb{E}[M]-\\mathbb{E}[L]$ here equals $\\tfrac23$ both ways — the first equality is just linearity, always true, while the spacings picture makes the value $\\tfrac{n-1}{n+1}$ transparent."
  },
  {
    "theme": "distributions",
    "themeLabel": "Named Distributions & Limits",
    "title": "The Widest Empty Stretch",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "uniform",
      "spacings",
      "order-statistics",
      "maximum-gap",
      "harmonic"
    ],
    "statement": "Three points are dropped independently and uniformly on $[0,1]$, splitting the interval into four consecutive pieces. Let $G$ be the length of the LONGEST of these four pieces. Evaluate $\\mathbb{E}[G]$.",
    "answer": "\\[\\boxed{\\dfrac{25}{48}}\\]",
    "trap": "Answering $\\tfrac14$ because each spacing has mean $\\tfrac14$. The expected value of the MAXIMUM spacing is far larger than the common mean of one spacing; the spacings are exchangeable but strongly dependent, and the max is not the mean.",
    "solutions": [
      {
        "name": "Inclusion–exclusion on uniform spacings",
        "steps": [
          "For $m$ uniform points the $m+1$ spacings $(S_1,\\dots,S_{m+1})$ are uniform on the simplex; $\\mathbb{P}(\\text{all }S_i>t)=(1-(m+1)t)_+^{m}$.",
          "By the union bound made exact, $\\mathbb{P}(\\max_i S_i>t)=\\sum_{j\\ge1}(-1)^{j+1}\\binom{m+1}{j}(1-jt)_+^{m}$, and integrating gives the classical result $\\mathbb{E}[\\max_i S_i]=\\dfrac{1}{m+1}\\sum_{j=1}^{m+1}\\dfrac1j$.",
          "Here $m=3$, $m+1=4$: $\\mathbb{E}[G]=\\tfrac14\\big(1+\\tfrac12+\\tfrac13+\\tfrac14\\big)=\\tfrac14\\cdot\\tfrac{25}{12}=\\boxed{\\tfrac{25}{48}}$."
        ]
      },
      {
        "name": "Tail integral directly",
        "steps": [
          "$\\mathbb{E}[G]=\\int_0^1\\mathbb{P}(G>t)\\,dt$ with $\\mathbb{P}(G>t)=4(1-t)^3-6(1-2t)_+^3+4(1-3t)_+^3-(1-4t)_+^3$.",
          "Integrate each piece over its support: $\\int_0^1 4(1-t)^3=1$, $\\int_0^{1/2}6(1-2t)^3=\\tfrac34$, $\\int_0^{1/3}4(1-3t)^3=\\tfrac13$, $\\int_0^{1/4}(1-4t)^3=\\tfrac1{16}$.",
          "$\\mathbb{E}[G]=1-\\tfrac34+\\tfrac13-\\tfrac1{16}=\\tfrac{48-36+16-3}{48}=\\boxed{\\tfrac{25}{48}}$."
        ]
      }
    ],
    "remark": "Insight: the harmonic-number formula $\\tfrac{1}{m+1}H_{m+1}$ for the largest gap is a gem—the longest empty stretch grows like $\\tfrac{\\ln m}{m}$, not $\\tfrac1m$. Monte Carlo gives $0.5208\\approx 25/48=0.52083$."
  },
  {
    "theme": "distributions",
    "themeLabel": "Named Distributions & Limits",
    "title": "The Patient Gambler's Memory",
    "difficulty": 4,
    "task": "Determine",
    "tags": [
      "geometric",
      "memorylessness",
      "conditional-expectation",
      "waiting-time"
    ],
    "statement": "A fair six-sided die is rolled repeatedly until the first $6$ appears; let $N$ be the roll on which it appears. A gambler has already rolled four times with no $6$. Determine the expected number of ADDITIONAL rolls he still needs, $\\mathbb{E}[\\,N-4\\mid N>4\\,]$, and also determine $\\mathbb{E}[N\\mid N>4]$.",
    "answer": "\\[\\boxed{\\mathbb{E}[N-4\\mid N>4]=6,\\quad \\mathbb{E}[N\\mid N>4]=10}\\]",
    "trap": "Thinking 'four failures have used up some of the wait, so fewer than $6$ remain.' The geometric distribution is memoryless: conditioning on $N>4$ resets the clock, so the additional wait again has mean $6$. The trap is treating elapsed time as 'progress.'",
    "solutions": [
      {
        "name": "Memorylessness",
        "steps": [
          "For geometric $N$ with success probability $p$, $\\mathbb{P}(N>4+j\\mid N>4)=\\dfrac{(1-p)^{4+j}}{(1-p)^4}=(1-p)^{j}=\\mathbb{P}(N>j)$.",
          "Thus $N-4\\mid N>4$ has the same distribution as $N$ itself, so $\\mathbb{E}[N-4\\mid N>4]=\\mathbb{E}[N]=\\tfrac1p=6$.",
          "Therefore $\\mathbb{E}[N\\mid N>4]=4+6=\\boxed{10}$."
        ]
      },
      {
        "name": "Direct conditional sum",
        "steps": [
          "$\\mathbb{E}[N-4\\mid N>4]=\\sum_{m\\ge1} m\\,\\mathbb{P}(N=4+m\\mid N>4)$ and $\\mathbb{P}(N=4+m\\mid N>4)=(1-p)^{m-1}p$.",
          "This is exactly the mean of a fresh geometric$(p)$ variable, $=\\tfrac1p=6$.",
          "Adding back the elapsed $4$ gives $\\mathbb{E}[N\\mid N>4]=10$, so $\\boxed{6\\text{ and }10}$."
        ]
      }
    ],
    "remark": "Insight: the 'gambler's fallacy' is precisely the denial of memorylessness. Among discrete laws on $\\{1,2,\\dots\\}$, only the geometric has this property. MC over $2\\times10^6$ runs gives $6.01$."
  },
  {
    "theme": "distributions",
    "themeLabel": "Named Distributions & Limits",
    "title": "Which Component Dies First",
    "difficulty": 4,
    "task": "Find a,b",
    "tags": [
      "exponential",
      "memorylessness",
      "minimum",
      "competing-risks"
    ],
    "statement": "Two independent components have exponential lifetimes: component $A$ with mean $3$ hours and component $B$ with mean $6$ hours. A system fails the instant EITHER component fails. Find the pair $(a,b)$ where $a=\\mathbb{P}(A\\text{ fails strictly before }B)$ and $b=\\mathbb{E}[\\text{system lifetime}]$.",
    "answer": "\\[\\boxed{\\left(\\dfrac{2}{3},\\ 2\\right)}\\]",
    "trap": "Reasoning 'B lasts twice as long on average, so the system mostly lives near B's behavior' or guessing $a=\\tfrac12$. You must work with RATES, not means: $A$ has rate $\\tfrac13$, $B$ rate $\\tfrac16$, and $a=\\dfrac{\\lambda_A}{\\lambda_A+\\lambda_B}$, the faster rate winning more often.",
    "solutions": [
      {
        "name": "Rates and the racing exponentials",
        "steps": [
          "Rates $\\lambda_A=\\tfrac13,\\ \\lambda_B=\\tfrac16$. The probability the $A$-clock rings first is $\\mathbb{P}(A<B)=\\dfrac{\\lambda_A}{\\lambda_A+\\lambda_B}=\\dfrac{1/3}{1/2}=\\tfrac23$.",
          "The minimum of independent exponentials is exponential with rate $\\lambda_A+\\lambda_B=\\tfrac12$, so the system lifetime has mean $\\dfrac{1}{\\lambda_A+\\lambda_B}=2$.",
          "Hence $(a,b)=\\boxed{(\\tfrac23,\\,2)}$."
        ]
      },
      {
        "name": "Direct double integral",
        "steps": [
          "$\\mathbb{P}(A<B)=\\int_0^\\infty \\lambda_A e^{-\\lambda_A t}\\,e^{-\\lambda_B t}\\,dt=\\dfrac{\\lambda_A}{\\lambda_A+\\lambda_B}=\\tfrac23$.",
          "$\\mathbb{P}(\\min>t)=e^{-\\lambda_A t}e^{-\\lambda_B t}=e^{-t/2}$, an exponential of rate $\\tfrac12$, mean $2$.",
          "So $(a,b)=\\boxed{(\\tfrac23,\\,2)}$."
        ]
      }
    ],
    "remark": "Insight: independent exponentials hold a 'competition' decided by relative rates, while the survival time forgets who is competing—its rate is just the sum. MC confirms $\\mathbb{P}(A<B)=0.667$ and $\\mathbb{E}[\\min]=2.00$."
  },
  {
    "theme": "distributions",
    "themeLabel": "Named Distributions & Limits",
    "title": "The Ratio of Neighbours",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "order-statistics",
      "uniform",
      "ratio",
      "renyi-representation",
      "beta"
    ],
    "statement": "Six points are dropped independently and uniformly on $[0,1]$. Let $X_{(5)}$ and $X_{(6)}$ be the second-largest and the largest. Evaluate \\[\\mathbb{E}\\!\\left[\\dfrac{X_{(5)}}{X_{(6)}}\\right].\\]",
    "answer": "\\[\\boxed{\\dfrac{5}{6}}\\]",
    "trap": "Computing $\\dfrac{\\mathbb{E}[X_{(5)}]}{\\mathbb{E}[X_{(6)}]}=\\dfrac{5/7}{6/7}=\\dfrac56$ 'by luck'—the right answer here, but for the WRONG reason. $\\mathbb{E}[Y/Z]\\ne \\mathbb{E}[Y]/\\mathbb{E}[Z]$ in general; you must show the ratio's true law, otherwise the coincidence misleads you on other order-statistic ratios.",
    "solutions": [
      {
        "name": "Rényi / scaling representation",
        "steps": [
          "Conditional on $X_{(6)}=m$, the other five points are iid Uniform$(0,m)$, so $X_{(5)}/m$ is the maximum of five iid Uniform$(0,1)$ variables, independent of $m$.",
          "More cleanly, for uniform order statistics the ratio $X_{(k)}/X_{(k+1)}$ has the law of $U^{1/k}$ with $U\\sim\\mathrm{Uniform}(0,1)$ (Rényi representation), independent of $n$.",
          "With $k=5$: $\\mathbb{E}[U^{1/5}]=\\dfrac{1}{1+\\tfrac15}=\\dfrac{5}{6}$, so the answer is $\\boxed{\\tfrac56}$."
        ]
      },
      {
        "name": "Joint density integration",
        "steps": [
          "The joint density of $(X_{(5)},X_{(6)})=(u,v)$ for $n=6$ is $f(u,v)=\\dfrac{6!}{4!}\\,u^{4}\\,\\mathbf 1_{0<u<v<1}=30\\,u^4$ on $0<u<v<1$.",
          "$\\mathbb{E}\\!\\left[\\tfrac{u}{v}\\right]=\\int_0^1\\!\\!\\int_0^v \\tfrac{u}{v}\\,30u^4\\,du\\,dv=\\int_0^1 \\tfrac{30}{v}\\cdot\\tfrac{v^6}{6}\\,dv=\\int_0^1 5v^5\\,dv=\\dfrac56$.",
          "Hence $\\mathbb{E}\\!\\left[X_{(5)}/X_{(6)}\\right]=\\boxed{\\tfrac56}$."
        ]
      }
    ],
    "remark": "Insight: $X_{(k)}/X_{(k+1)}\\stackrel{d}{=}U^{1/k}$ makes the ratios of consecutive uniform order statistics independent with $\\mathbb{E}=k/(k+1)$—a structural fact, not a numerical fluke. MC gives $0.8334\\approx5/6$."
  },
  {
    "theme": "distributions",
    "themeLabel": "Named Distributions & Limits",
    "title": "Spam Among the Six",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "poisson",
      "thinning",
      "conditioning",
      "binomial",
      "superposition"
    ],
    "statement": "Phone calls to a help-desk arrive as a Poisson process with mean $6$ per hour. Each call is independently 'spam' with probability $\\tfrac13$. In a particular hour exactly $6$ calls arrived. Given this information, evaluate the probability that NONE of them was spam.",
    "answer": "\\[\\boxed{\\dfrac{64}{729}}\\]",
    "trap": "Applying Poisson thinning to get spam $\\sim\\mathrm{Poisson}(2)$ and answering $e^{-2}\\approx0.135$. That ignores the conditioning on the TOTAL being $6$. Given the total, the spam count is Binomial$(6,\\tfrac13)$, not Poisson—conditioning on the sum destroys the Poisson form.",
    "solutions": [
      {
        "name": "Conditioning on the total",
        "steps": [
          "Given $N=6$ total calls, each is independently spam with probability $\\tfrac13$, so the number of spam calls is $\\mathrm{Binomial}(6,\\tfrac13)$.",
          "$\\mathbb{P}(0\\text{ spam}\\mid N=6)=\\big(1-\\tfrac13\\big)^6=\\big(\\tfrac23\\big)^6=\\dfrac{64}{729}$.",
          "So the probability is $\\boxed{\\tfrac{64}{729}}$."
        ]
      },
      {
        "name": "Bayes from the unconditional split",
        "steps": [
          "Unconditionally spam$\\sim\\mathrm{Poisson}(2)$ and ham$\\sim\\mathrm{Poisson}(4)$ independently. $\\mathbb{P}(\\text{spam}=0,\\,\\text{total}=6)=\\mathbb{P}(\\text{spam}=0)\\,\\mathbb{P}(\\text{ham}=6)=e^{-2}\\cdot e^{-4}\\tfrac{4^6}{6!}$.",
          "$\\mathbb{P}(\\text{total}=6)=e^{-6}\\tfrac{6^6}{6!}$; dividing gives $\\dfrac{4^6}{6^6}=\\big(\\tfrac23\\big)^6$.",
          "Thus the conditional probability is $\\dfrac{64}{729}=\\boxed{\\tfrac{64}{729}}$."
        ]
      }
    ],
    "remark": "Insight: thinning and conditioning pull in opposite directions—Poisson thinning answers an UNconditional question, while 'given the total' is a Binomial allocation. The two answers ($0.0878$ vs $0.135$) differ markedly. MC gives $0.0876$."
  },
  {
    "theme": "distributions",
    "themeLabel": "Named Distributions & Limits",
    "title": "The Minimum's Exponential Heartbeat",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "order-statistics",
      "exponential-limit",
      "laplace-transform",
      "uniform-minimum",
      "scaling"
    ],
    "statement": "For each $n$, let $X_{(1)}^{(n)}=\\min(U_1,\\dots,U_n)$ be the minimum of $n$ independent Uniform$[0,1]$ variables. Evaluate \\[\\lim_{n\\to\\infty}\\mathbb{E}\\!\\left[e^{-\\,n\\,X_{(1)}^{(n)}}\\right].\\]",
    "answer": "\\[\\boxed{\\dfrac{1}{2}}\\]",
    "trap": "Substituting $\\mathbb{E}[X_{(1)}^{(n)}]=\\tfrac1{n+1}$ into $e^{-nx}$ to get $e^{-n/(n+1)}\\to e^{-1}$. This is Jensen-flawed: $\\mathbb{E}[e^{-nX}]\\ne e^{-n\\mathbb{E}[X]}$. The correct route recognizes $nX_{(1)}^{(n)}\\xrightarrow{d}\\mathrm{Exp}(1)$ and uses its Laplace transform.",
    "solutions": [
      {
        "name": "Scaling limit to Exp(1)",
        "steps": [
          "$\\mathbb{P}(nX_{(1)}^{(n)}>t)=\\mathbb{P}\\big(X_{(1)}^{(n)}>\\tfrac{t}{n}\\big)=\\big(1-\\tfrac{t}{n}\\big)^n\\to e^{-t}$, so $nX_{(1)}^{(n)}\\xrightarrow{d}Y\\sim\\mathrm{Exp}(1)$.",
          "The integrand $e^{-nX}\\in[0,1]$ is bounded, so by the bounded convergence/continuous-mapping theorem $\\mathbb{E}[e^{-nX_{(1)}^{(n)}}]\\to\\mathbb{E}[e^{-Y}]$.",
          "$\\mathbb{E}[e^{-Y}]=\\dfrac{1}{1+1}=\\dfrac12$, giving $\\boxed{\\tfrac12}$."
        ]
      },
      {
        "name": "Exact integral then limit",
        "steps": [
          "The density of $X_{(1)}^{(n)}$ is $n(1-x)^{n-1}$, so $\\mathbb{E}[e^{-nX}]=\\int_0^1 e^{-nx}\\,n(1-x)^{n-1}\\,dx$.",
          "Substituting $x=u/n$, $\\;n\\!\\int_0^n e^{-u}(1-\\tfrac un)^{n-1}\\tfrac{du}{n}=\\int_0^n e^{-u}(1-\\tfrac un)^{n-1}\\,du\\to\\int_0^\\infty e^{-u}e^{-u}\\,du=\\tfrac12$.",
          "Hence the limit equals $\\boxed{\\tfrac12}$."
        ]
      }
    ],
    "remark": "Insight: the universal scaling $n\\cdot\\min\\to\\mathrm{Exp}(1)$ converts an order-statistic limit into a one-line Laplace-transform evaluation; Jensen warns you why $e^{-1}$ is wrong. Exact value at $n=2000$ is $0.50006$, MC at $n=5000$ gives $0.5002$."
  },
  {
    "theme": "distributions",
    "themeLabel": "Named Distributions & Limits",
    "title": "Ramanujan's Half",
    "difficulty": 5,
    "task": "Prove that",
    "tags": [
      "poisson",
      "central-limit",
      "median",
      "clt",
      "incomplete-gamma"
    ],
    "statement": "Prove that \\[\\lim_{n\\to\\infty}\\; e^{-n}\\sum_{k=0}^{n}\\frac{n^{k}}{k!}=\\frac{1}{2}.\\]",
    "answer": "\\[\\boxed{\\dfrac{1}{2}}\\]",
    "trap": "Believing the limit is $1$ because the full series $\\sum_{k\\ge 0}n^{k}/k!=e^{n}$ makes the prefactor cancel. Cutting the sum at exactly $k=n$ keeps only HALF (asymptotically) of a distribution that is centering at $n$: the omitted upper tail $\\sum_{k>n}$ is not negligible, it carries the other half. Equivalently $e^{-n}\\sum_{k\\le n}+e^{-n}\\sum_{k>n}=1$, and by symmetry of the limiting normal each piece tends to $\\tfrac12$, not $1$ and $0$.",
    "solutions": [
      {
        "name": "Poisson CLT at the mean",
        "steps": [
          "Let $S_n\\sim\\mathrm{Poisson}(n)$. Since $S_n$ takes value $k$ with probability $e^{-n}n^{k}/k!$, the partial sum is a CDF value: $e^{-n}\\sum_{k=0}^{n}\\dfrac{n^{k}}{k!}=\\mathbb{P}(S_n\\le n)=\\mathbb{P}\\!\\left(\\dfrac{S_n-n}{\\sqrt n}\\le 0\\right)$.",
          "A $\\mathrm{Poisson}(n)$ variable is the sum of $n$ i.i.d. $\\mathrm{Poisson}(1)$ variables, each with mean $1$ and variance $1$. By the Central Limit Theorem, $\\dfrac{S_n-n}{\\sqrt n}\\xrightarrow{d}\\mathcal N(0,1)$.",
          "The point $0$ is a continuity point of the limiting normal CDF, so $\\mathbb{P}\\!\\left(\\dfrac{S_n-n}{\\sqrt n}\\le 0\\right)\\to\\Phi(0)=\\dfrac12$. Hence the limit is $\\boxed{\\tfrac12}$. (The mean $n$ is asymptotically the median, which is the whole point.)"
        ]
      },
      {
        "name": "Incomplete-gamma integral with dominated convergence",
        "steps": [
          "Integration by parts (or the incomplete-gamma identity) gives the exact equality $e^{-n}\\sum_{k=0}^{n}\\dfrac{n^{k}}{k!}=\\dfrac{1}{n!}\\int_{n}^{\\infty} t^{n}e^{-t}\\,dt$. Substitute $t=n+\\sqrt n\\,s$, so $dt=\\sqrt n\\,ds$ and $s$ ranges over $(0,\\infty)$, turning the right side into $\\dfrac{\\sqrt n\\,n^{n}e^{-n}}{n!}\\int_{0}^{\\infty}\\Big(1+\\tfrac{s}{\\sqrt n}\\Big)^{n}e^{-\\sqrt n\\,s}\\,ds.$",
          "By Stirling, $\\dfrac{\\sqrt n\\,n^{n}e^{-n}}{n!}\\to\\dfrac{1}{\\sqrt{2\\pi}}$. For the integrand, $n\\ln\\!\\big(1+\\tfrac{s}{\\sqrt n}\\big)-\\sqrt n\\,s\\to-\\dfrac{s^{2}}{2}$ pointwise on $s>0$, so $\\big(1+\\tfrac{s}{\\sqrt n}\\big)^{n}e^{-\\sqrt n\\,s}\\to e^{-s^{2}/2}$.",
          "The elementary bound $\\ln(1+x)\\le x-\\dfrac{x^{2}}{2(1+x)}$ for $x\\ge 0$ (with $x=s/\\sqrt n\\le s$) gives the domination $\\big(1+\\tfrac{s}{\\sqrt n}\\big)^{n}e^{-\\sqrt n\\,s}\\le e^{-s^{2}/(2(1+s))}$, which is integrable on $(0,\\infty)$. By Dominated Convergence the integral tends to $\\int_{0}^{\\infty}e^{-s^{2}/2}\\,ds=\\sqrt{\\pi/2}$.",
          "Therefore the whole expression $\\to\\dfrac{1}{\\sqrt{2\\pi}}\\cdot\\sqrt{\\dfrac{\\pi}{2}}=\\dfrac{1}{\\sqrt{2\\pi}}\\int_{0}^{\\infty}e^{-s^{2}/2}\\,ds=\\dfrac12$, so the limit is $\\boxed{\\tfrac12}$."
        ]
      }
    ],
    "remark": "Insight: the Poisson$(n)$ ladder turns the truncated exponential series into the probability of landing at or below the mean, and the mean is asymptotically the median, so the answer is $\\tfrac12$, not $1$. The convergence is slow and one-sided from above because the Poisson$(n)$ law has positive skewness $1/\\sqrt n$: numerically the sequence reads $0.583,\\,0.527,\\,0.508,\\,0.504$ for $n=10,10^{2},10^{3},5\\times10^{3}$, descending to $\\tfrac12$ like $\\tfrac{1}{3}\\sqrt{2/(\\pi n)}$ (an Edgeworth correction). This is the classic Ramanujan problem on the median of the Poisson distribution."
  },
  {
    "theme": "distributions",
    "themeLabel": "Named Distributions & Limits",
    "title": "How Wide Will They Spread",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "order-statistics",
      "range",
      "uniform",
      "cdf",
      "gamma-limit"
    ],
    "statement": "Four points are dropped independently and uniformly on $[0,1]$; let $R=X_{(4)}-X_{(1)}$ be their range. (a) Evaluate $\\mathbb{P}\\big(R\\le \\tfrac12\\big)$. (b) Evaluate $\\displaystyle\\lim_{n\\to\\infty}\\mathbb{E}\\big[n\\,(1-R_n)\\big]$, where $R_n$ is the range of $n$ uniform points.",
    "answer": "\\[\\boxed{\\mathbb{P}(R\\le\\tfrac12)=\\tfrac{5}{16},\\qquad \\lim_{n\\to\\infty}\\mathbb{E}[n(1-R_n)]=2}\\]",
    "trap": "For (a), treating the range like the maximum: $\\mathbb{P}(R\\le r)=r^{n}$ gives $(\\tfrac12)^4=\\tfrac1{16}$, which is far too small. The range CDF has TWO terms, $\\mathbb{P}(R\\le r)=n\\,r^{\\,n-1}-(n-1)r^{\\,n}$. For (b), writing $1-R_n\\approx 1-X_{(n)}$ and forgetting the gap $X_{(1)}$ at the left end yields only one $\\mathrm{Exp}(1)$, so $\\mathbb{E}\\to1$ — exactly HALF the true answer.",
    "solutions": [
      {
        "name": "Range CDF and a tail decomposition",
        "steps": [
          "Fix the smallest point at $X_{(1)}=x$ and require all the rest to land in $[x,x+r]$. Integrating the joint density of the minimum and the conditional placement gives $\\mathbb{P}(R\\le r)=n\\!\\int_0^{1-r}\\!\\big[(x+r)-x\\big]^{n-1}dx=n\\!\\int_0^{1-r}\\!r^{\\,n-1}dx$ for the interior, plus the boundary case $X_{(1)}>1-r$; combining yields the standard $\\mathbb{P}(R\\le r)=n\\,r^{\\,n-1}-(n-1)r^{\\,n}$ for $0\\le r\\le1$. At $n=4,\\ r=\\tfrac12$: $4(\\tfrac12)^3-3(\\tfrac12)^4=\\tfrac12-\\tfrac{3}{16}=\\tfrac{5}{16}$.",
          "Write $1-R_n=(1-X_{(n)})+X_{(1)}$. Then $n(1-X_{(n)})\\xrightarrow{d}\\mathrm{Exp}(1)$ and $nX_{(1)}\\xrightarrow{d}\\mathrm{Exp}(1)$, and the two end-gaps become asymptotically independent.",
          "Each limit has mean $1$, so $\\mathbb{E}[n(1-R_n)]\\to 1+1=2$. Final: $\\boxed{\\tfrac5{16}\\text{ and }2}$."
        ]
      },
      {
        "name": "Direct density / moments",
        "steps": [
          "The range density for $n$ uniforms is $f_R(r)=n(n-1)r^{\\,n-2}(1-r)$ on $[0,1]$; at $n=4$ this is $12\\,r^{2}(1-r)$, so $\\mathbb{P}(R\\le\\tfrac12)=\\int_0^{1/2}12\\,r^2(1-r)\\,dr=12\\big(\\tfrac1{24}-\\tfrac1{64}\\big)=\\tfrac5{16}$.",
          "For general $n$, $\\mathbb{E}[R_n]=\\int_0^1 r\\,f_R(r)\\,dr=\\dfrac{n-1}{n+1}$, hence $\\mathbb{E}[n(1-R_n)]=n\\Big(1-\\dfrac{n-1}{n+1}\\Big)=\\dfrac{2n}{n+1}\\to 2$.",
          "Hence $\\boxed{\\tfrac5{16}\\text{ and }2}$."
        ]
      }
    ],
    "remark": "Insight: the exact identity $\\mathbb{E}[n(1-R_n)]=\\tfrac{2n}{n+1}$ pins the limit $2$ instantly, while the decomposition reveals WHY — two independent $\\mathrm{Exp}(1)$ gaps, one at each end, so $n(1-R_n)\\xrightarrow{d}\\mathrm{Gamma}(2,1)$ (mean $2$, variance $2$). Monte Carlo confirms: $\\mathbb{P}(R\\le\\tfrac12)\\approx0.3125$ and $\\mathbb{E}[n(1-R_n)]\\to1.995$ at large $n$."
  },
  {
    "theme": "paradox",
    "themeLabel": "Bounds, Symmetry & Paradoxes",
    "title": "The Two-Car Game Show",
    "difficulty": 4,
    "task": "Determine",
    "tags": [
      "monty-hall",
      "conditional-probability",
      "symmetry",
      "game-show"
    ],
    "statement": "A show has $5$ identical doors; behind two of them sit cars and behind the other three sit goats, placed uniformly at random. You point at door $1$ (you do not open it). The host, who knows every door, then opens exactly two of the four doors you did NOT pick, always choosing two doors that hide goats (such a choice is always possible). You may now either keep door $1$, or switch to one of the two still-closed unpicked doors, chosen uniformly at random. Determine the probability of winning a car under the switching strategy, and how many times more likely that is than keeping door $1$.",
    "answer": "\\[\\boxed{P_{\\text{switch}}=\\tfrac{4}{5}=2\\,P_{\\text{stay}}}\\]",
    "trap": "Reasoning 'two cars among five doors, so each closed door is worth $2/5$, switching can't help' — this ignores that the host's goat-reveals are NOT independent of where the cars are: opening two guaranteed goats from the unpicked side concentrates probability mass onto the surviving unpicked doors exactly as in classic Monty Hall.",
    "solutions": [
      {
        "name": "Condition on your door",
        "steps": [
          "Your door hides a car with probability $2/5$; in that case the remaining one car sits among the four unpicked doors, the host removes two goats, leaving two unpicked doors with exactly one car, so a uniform switch wins with probability $1/2$.",
          "With probability $3/5$ your door is a goat; then both cars are among the four unpicked doors, the host opens its only two goats, so the two surviving unpicked doors are BOTH cars and switching wins with probability $1$.",
          "Combine: $P_{\\text{switch}}=\\tfrac25\\cdot\\tfrac12+\\tfrac35\\cdot1=\\tfrac15+\\tfrac35=\\tfrac45$.",
          "Since $P_{\\text{stay}}=2/5$, switching wins $\\dfrac{4/5}{2/5}=2$ times as often, giving $\\boxed{P_{\\text{switch}}=4/5=2P_{\\text{stay}}}$."
        ]
      },
      {
        "name": "Mass-transfer / expected cars",
        "steps": [
          "Total car-probability is $2$ spread over $5$ doors; your fixed door carries $2/5$, so the four unpicked doors together carry $8/5$ of expected cars.",
          "The host's reveals never sit on a car, so all $8/5$ of that unpicked car-mass stays among the two surviving unpicked doors; by symmetry each surviving door carries $4/5$.",
          "A uniform switch lands on a surviving door, inheriting its $4/5$ car-mass, hence $P_{\\text{switch}}=4/5$, twice the $2/5$ of staying, so $\\boxed{P_{\\text{switch}}=4/5=2P_{\\text{stay}}}$."
        ]
      }
    ],
    "remark": "Insight: Monty Hall is not about counting doors but about which closed doors the host's informed action enriches. The unpicked block keeps all its car-mass; squeezing it from four doors onto two doubles each survivor's value, so even with multiple prizes the host's knowledge is what tilts the odds — verified by exact enumeration and Monte-Carlo at $0.800$."
  },
  {
    "theme": "paradox",
    "themeLabel": "Bounds, Symmetry & Paradoxes",
    "title": "Bertrand's Two-Faced Cards",
    "difficulty": 3,
    "task": "Evaluate",
    "tags": [
      "bertrand-box",
      "bayes",
      "sample-space",
      "cards"
    ],
    "statement": "A box holds three cards. One has both faces white, one has both faces red, and one has a white face and a red face. You draw a card uniformly at random, then place it on the table showing a face chosen uniformly at random among its two sides; the face you see is white. Evaluate the probability that the hidden face of that card is also white.",
    "answer": "\\[\\boxed{\\dfrac{2}{3}}\\]",
    "trap": "Saying 'the card is either white-white or white-red, and those were equally likely, so the answer is $1/2$' — this conditions on cards instead of on the observed white FACE; the white-white card offers two ways to show a white face while the mixed card offers only one, breaking the symmetry.",
    "solutions": [
      {
        "name": "Count equally-likely faces",
        "steps": [
          "List the six faces, two from each card; exactly three are white: both faces of the white-white card and the white face of the mixed card.",
          "Given the seen face is white, each of these three white faces is equally likely to be the one on display.",
          "On two of those three, the hidden face is also white (the white-white card's two faces); hence the probability is $\\boxed{2/3}$."
        ]
      },
      {
        "name": "Bayes' theorem",
        "steps": [
          "$P(\\text{see white}\\mid WW)=1,\\ P(\\text{see white}\\mid WR)=1/2,\\ P(\\text{see white}\\mid RR)=0$, with priors $1/3$ each.",
          "$P(WW\\mid\\text{white})=\\dfrac{\\frac13\\cdot1}{\\frac13\\cdot1+\\frac13\\cdot\\frac12+0}=\\dfrac{1/3}{1/2}=\\dfrac23$.",
          "The hidden face is white exactly when the card is $WW$, so the answer is $\\boxed{2/3}$."
        ]
      }
    ],
    "remark": "Insight: the seductive $1/2$ comes from forgetting that the evidence (a white face) is twice as likely to be produced by the all-white card. Always update on what you actually observed (a face), not on the latent object (a card)."
  },
  {
    "theme": "paradox",
    "themeLabel": "Bounds, Symmetry & Paradoxes",
    "title": "The Chord With Three Answers",
    "difficulty": 5,
    "task": "Find all",
    "tags": [
      "bertrand-chord",
      "geometric-probability",
      "ill-posed",
      "measure"
    ],
    "statement": "An equilateral triangle is inscribed in a circle of radius $1$ (its side length is $\\sqrt{3}$). Three different but equally natural procedures generate a 'random chord': (A) pick two independent uniform points on the circle and join them; (B) pick a uniform direction, then a point uniform along the corresponding radius, and draw the chord perpendicular to that radius through the point; (C) pick a point uniform over the interior disk and take it as the chord's midpoint. For each procedure, find the probability that the random chord is longer than $\\sqrt{3}$, and explain why 'the probability' is not well defined.",
    "answer": "\\[\\boxed{P_A=\\tfrac13,\\quad P_B=\\tfrac12,\\quad P_C=\\tfrac14}\\]",
    "trap": "Believing the phrase 'a chord chosen at random' names a single number — it does not. Each procedure induces a different distribution on chords (uniform over a different parameter), so each yields a different, internally-correct probability; demanding one answer is the paradox.",
    "solutions": [
      {
        "name": "Distance-to-centre criterion",
        "steps": [
          "A chord of a unit circle at distance $r$ from the centre has length $2\\sqrt{1-r^2}$; this exceeds the triangle's side $\\sqrt3$ exactly when $r<\\tfrac12$, the apothem $R\\cos 60^\\circ=\\tfrac12$ of the inscribed equilateral triangle. So in every model the event is $\\{r<\\tfrac12\\}$.",
          "(A) Fix one endpoint and let the other be uniform on the circle. The chord beats $\\sqrt3$ iff the central angle $\\theta$ between the points lies in $(120^\\circ,240^\\circ)$ (since $2\\sin(\\theta/2)>\\sqrt3$), a $120^\\circ$ window, giving $P_A=120/360=\\tfrac13$.",
          "(B) Here the midpoint distance $r$ is uniform on $[0,1]$, so $P_B=P(r<\\tfrac12)=\\tfrac12$.",
          "(C) The midpoint is uniform over the disk, so the event $\\{r<\\tfrac12\\}$ is the disk of radius $\\tfrac12$: $P_C=\\dfrac{\\pi(1/2)^2}{\\pi(1)^2}=\\tfrac14$; hence $\\boxed{P_A=\\tfrac13,\\;P_B=\\tfrac12,\\;P_C=\\tfrac14}$."
        ]
      },
      {
        "name": "Why ill-posed (Jaynes' lens)",
        "steps": [
          "A 'random chord' must be uniform over SOME parametrisation, but chords can be coordinatised by endpoint angles, by signed distance along a radius, or by midpoint position — and a density that is uniform in one of these is non-uniform in another (the Jacobians between them are non-constant).",
          "Procedures A, B, C are uniform in three different coordinates, so they are genuinely different probability spaces — not three opinions about one space. Pushing each forward to the midpoint-distance $r$ gives densities proportional to $r/\\sqrt{1-r^2}$, to $1$, and to $2r$ respectively on $[0,1]$, which integrate over $[0,\\tfrac12]$ to $\\tfrac13,\\tfrac12,\\tfrac14$.",
          "Without a stated invariance principle the question has no unique answer; computing all three gives $\\boxed{P_A=\\tfrac13,\\;P_B=\\tfrac12,\\;P_C=\\tfrac14}$, the canonical resolution. (Jaynes argued translation/scale/rotation invariance singles out model B, but that is an extra postulate, not a consequence of 'at random'.)"
        ]
      }
    ],
    "remark": "Insight: 'at random' is meaningless until you name the measure. Bertrand's chord is the cleanest demonstration that geometric probability lives or dies by an explicitly specified sampling mechanism — all three values were confirmed by simulation ($0.333,0.500,0.250$ over $4\\times10^6$ trials) and by exact symbolic computation of the criterion $r<\\tfrac12$."
  },
  {
    "theme": "paradox",
    "themeLabel": "Bounds, Symmetry & Paradoxes",
    "title": "Birthdays on Planet Quincenta",
    "difficulty": 4,
    "task": "Find the number of",
    "tags": [
      "birthday-problem",
      "collision",
      "threshold",
      "approximation"
    ],
    "statement": "On the planet Quincenta a year has exactly $500$ days, and each inhabitant's birthday is independent and uniform over those days. Find the smallest number $n$ of inhabitants in a room for which the probability that at least two share a birthday is at least $\\tfrac12$.",
    "answer": "\\[\\boxed{n=27}\\]",
    "trap": "Scaling the Earth answer linearly — '$23$ for $365$ days, so about $23\\cdot\\frac{500}{365}\\approx 32$ for $500$ days.' The threshold grows like $\\sqrt{d}$, not like $d$, so the true value is far smaller than the linear guess.",
    "solutions": [
      {
        "name": "Exact complementary product",
        "steps": [
          "The probability of NO shared birthday among $n$ people is $\\displaystyle Q(n)=\\prod_{k=0}^{n-1}\\frac{500-k}{500}$.",
          "We need the least $n$ with $1-Q(n)\\ge\\tfrac12$, i.e. $Q(n)\\le\\tfrac12$.",
          "Direct computation gives $Q(26)=0.5162>\\tfrac12$ but $Q(27)=0.4893<\\tfrac12$ (so collision probability $0.4838$ then $0.5107$).",
          "Therefore the smallest such $n$ is $\\boxed{27}$."
        ]
      },
      {
        "name": "Square-root heuristic then verify",
        "steps": [
          "Using $1-Q(n)\\approx 1-e^{-n(n-1)/(2d)}$, set the exponent to $\\ln 2$: $n(n-1)\\approx 2d\\ln2=500\\cdot1.386=693$.",
          "This gives $n\\approx\\tfrac{1+\\sqrt{1+4\\cdot693}}{2}\\approx 26.8$, so test $n=26,27$.",
          "Exact evaluation confirms $n=26$ falls just short and $n=27$ just clears $1/2$, so $\\boxed{n=27}$."
        ]
      }
    ],
    "remark": "Insight: the birthday threshold scales as $1.18\\sqrt d$, a $\\sqrt{}$-law born from the $\\binom n2$ pairs sharing one of $d$ days. The linear instinct overshoots badly; the right mental model is 'pairs vs. days,' verified exactly."
  },
  {
    "theme": "paradox",
    "themeLabel": "Bounds, Symmetry & Paradoxes",
    "title": "The Other Birthday Question",
    "difficulty": 4,
    "task": "Find the number of",
    "tags": [
      "birthday-problem",
      "conditioning",
      "specific-match",
      "geometric-tail"
    ],
    "statement": "At a party you wish to find someone who shares YOUR exact birthday (year of $365$ days, birthdays independent and uniform, and your own birthday already fixed). Find the smallest number $n$ of OTHER guests that makes the probability of at least one of them matching your birthday at least $\\tfrac12$.",
    "answer": "\\[\\boxed{n=253}\\]",
    "trap": "Quoting '$23$ people' from the famous birthday problem. That number answers a different question — *some* pair coinciding, which has $\\binom{n}{2}$ chances — whereas here only the $n$ pairs that include YOU count, so the required crowd is an order of magnitude larger.",
    "solutions": [
      {
        "name": "Geometric tail",
        "steps": [
          "Each other guest misses your birthday with probability $\\tfrac{364}{365}$, independently.",
          "Probability nobody among $n$ matches you is $\\left(\\tfrac{364}{365}\\right)^{n}$, so we need $1-\\left(\\tfrac{364}{365}\\right)^{n}\\ge\\tfrac12$.",
          "Solve $\\left(\\tfrac{364}{365}\\right)^{n}\\le\\tfrac12\\Rightarrow n\\ge\\dfrac{\\ln 2}{\\ln(365/364)}\\approx 252.65$.",
          "The least integer is $\\boxed{253}$ (the match probability is $0.4991$ at $252$ and $0.5005$ at $253$)."
        ]
      },
      {
        "name": "Why it differs from 23",
        "steps": [
          "The classic problem counts $\\binom n2$ pairs each colliding with chance $1/365$, so $\\binom n2/365\\approx1$ already near $n=23$.",
          "Here only pairs containing you matter — exactly $n$ of them — so the relevant count is $n/365$, demanding $n$ about $365\\ln 2\\approx253$ to reach probability $1/2$.",
          "Hence the answer is $\\boxed{253}$, roughly eleven times the $23$ of the unrestricted problem."
        ]
      }
    ],
    "remark": "Insight: 'a coincidence' and 'a coincidence with me' differ by a factor of $\\binom n2$ vs $n$. Specifying the target collapses your favourable pairs from quadratic to linear, which is precisely why $23$ balloons to $253$."
  },
  {
    "theme": "paradox",
    "themeLabel": "Bounds, Symmetry & Paradoxes",
    "title": "The Treatment That Wins Both Wards but Loses the Hospital",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "simpsons-paradox",
      "aggregation",
      "confounding",
      "rates"
    ],
    "statement": "A hospital compares two kidney-stone treatments. Treatment $A$ succeeds in $81$ of $87$ patients with small stones and $192$ of $263$ with large stones. Treatment $B$ succeeds in $234$ of $270$ with small stones and $55$ of $80$ with large stones. Determine which treatment has the higher success rate within each stone-size group, and which has the higher OVERALL success rate, and reconcile the two findings.",
    "answer": "\\[\\boxed{A\\ \\text{wins both subgroups }(0.931>0.867,\\ 0.730>0.688);\\ B\\ \\text{wins overall }(0.826>0.780)}\\]",
    "trap": "Pooling the two wards and trusting the aggregate ('$B$ has the higher overall rate, so $B$ is better'). The aggregate is confounded: large stones are far harder AND treatment $A$ was given disproportionately to them, so the marginal rate compares treatments on incomparable case-mixes.",
    "solutions": [
      {
        "name": "Compute every rate",
        "steps": [
          "Small stones: $A=81/87=0.931$, $B=234/270=0.867$, so $A$ wins; Large stones: $A=192/263=0.730$, $B=55/80=0.688$, so $A$ wins again.",
          "Aggregate: $A=(81+192)/(87+263)=273/350=0.780$; $B=(234+55)/(270+80)=289/350=0.826$, so $B$ wins overall.",
          "Thus $A$ dominates in each subgroup yet $B$ leads on the pooled data: $\\boxed{A\\text{ per stratum},\\ B\\text{ overall}}$."
        ]
      },
      {
        "name": "Weighted-average reconciliation",
        "steps": [
          "Each overall rate is a weighted mean of its subgroup rates with weights equal to that treatment's case distribution.",
          "$A$ treated $263/350=75\\%$ large (hard) cases while $B$ treated only $80/350=23\\%$ large cases, so $A$'s average is dragged toward its low large-stone rate.",
          "Because the weights — not the rates — flip the ranking, the per-stratum verdict ($A$) is the causally valid one; this confounding-driven reversal is Simpson's paradox, giving $\\boxed{A\\text{ better per stratum},\\ B\\text{ better in aggregate}}$."
        ]
      }
    ],
    "remark": "Insight: a rate is a weighted average, and reversing the weights can reverse the conclusion. When a lurking variable (stone size) drives both outcome and treatment assignment, only the stratified comparison is trustworthy — aggregation here actively misleads."
  },
  {
    "theme": "paradox",
    "themeLabel": "Bounds, Symmetry & Paradoxes",
    "title": "Two Envelopes, Finally Settled",
    "difficulty": 5,
    "task": "Find all",
    "tags": [
      "two-envelope",
      "expected-value",
      "prior",
      "conditional-decision"
    ],
    "statement": "A host picks $k$ uniformly from $\\{0,1,2,3\\}$ and fills two envelopes with $2^{k}$ and $2^{k+1}$ rupees (so the pairs $(1,2),(2,4),(4,8),(8,16)$ each occur with probability $\\tfrac14$). You receive one envelope, chosen uniformly between the two, open it, and see its value $v$. You may keep $v$ or switch unseen to the other envelope. Find all observed values $v$ for which switching strictly increases your expected payoff, and determine the expected gain of the blanket policy 'always switch'.",
    "answer": "\\[\\boxed{\\text{Switch iff }v\\in\\{1,2,4,8\\};\\ \\text{stay iff }v=16;\\ \\ \\mathbb{E}[\\text{gain of always-switch}]=0}\\]",
    "trap": "The classic fallacy: 'the other envelope holds $2v$ or $v/2$ each with probability $\\tfrac12$, so its expectation is $1.25v>v$ — always switch.' With a genuine (proper) prior the two outcomes are NOT equally likely at every $v$; in particular at the top value $v=16$ the other envelope is certainly smaller (it is $8$, not the claimed $20$), so the universal-switch argument breaks.",
    "solutions": [
      {
        "name": "Condition on the observed value",
        "steps": [
          "For an interior value $v=2^m$ with $1\\le m\\le 3$, the value could come from the lower slot of pair $m$ (other $=2v$) or the higher slot of pair $m-1$ (other $=v/2$). Each $(\\text{pair},\\text{slot})$ has equal prior weight $\\tfrac18$, so the two are equally likely given $v$ and $\\mathbb E[\\text{other}\\mid v]=\\tfrac12(2v)+\\tfrac12(v/2)=\\tfrac54 v>v$: switch.",
          "The boundary values are forced: $v=1$ arises only as the smaller of $(1,2)$, so the other is surely $2>1$ — switch; $v=16$ arises only as the larger of $(8,16)$, so the other is surely $8<16$ — stay.",
          "Hence switching strictly helps exactly when $v\\in\\{1,2,4,8\\}$ and you stay only at $v=16$."
        ]
      },
      {
        "name": "Unconditional indifference",
        "steps": [
          "The expected money in YOUR envelope is $\\sum_{k=0}^{3}\\tfrac14\\cdot\\tfrac12(2^{k}+2^{k+1})=\\tfrac{45}{8}$, since each pair is equally likely and within a pair you hold each slot with probability $\\tfrac12$.",
          "Switching merely swaps the two slots of whatever pair was drawn, so by symmetry the other envelope has the identical expectation $\\tfrac{45}{8}$.",
          "Therefore the always-switch policy's expected gain is $\\tfrac{45}{8}-\\tfrac{45}{8}=0$: the positive seen-value gains for $v\\le 8$ are exactly cancelled by the loss whenever $v=16$, so $\\mathbb E[\\text{gain}]=0$."
        ]
      }
    ],
    "remark": "Insight: the paradox dies the instant a proper prior is named. The naive $\\tfrac54 v$ rule is locally correct for interior values but silently assumes an impossible prior with no top value; the boundary $v=16$, where 'double' cannot occur, restores consistency and zeroes the net advantage of blanket switching."
  },
  {
    "theme": "paradox",
    "themeLabel": "Bounds, Symmetry & Paradoxes",
    "title": "Points Under One Sun",
    "difficulty": 3,
    "task": "Prove that",
    "tags": [
      "symmetry",
      "geometric-probability",
      "semicircle",
      "circle"
    ],
    "statement": "$n$ points are dropped independently and uniformly at random on a circle. Prove that the probability that all $n$ points lie within some common semicircle (i.e. some diameter has all of them on one side) equals $\\dfrac{n}{2^{\\,n-1}}$, by a symmetry argument rather than integration.",
    "answer": "\\[\\boxed{\\dfrac{n}{2^{\\,n-1}}}\\]",
    "trap": "Trying to integrate over all $n$ angular positions and fighting the overlapping cases where several different semicircles cover the points at once. Worse, after fixing one point as a reference and noting the other $n-1$ each land in its forward half-circle with probability $\\tfrac12$, one is tempted to call the answer $\\left(\\tfrac12\\right)^{n-1}$ and forget that any of the $n$ points could play the reference role; dropping the factor $n$ gives e.g. $\\tfrac14$ instead of $\\tfrac34$ for $n=3$.",
    "solutions": [
      {
        "name": "Anchor on the leading point",
        "steps": [
          "For point $i$, let $E_i$ be the event that all of the other $n-1$ points lie in the half-circle that starts at point $i$ and sweeps clockwise through $180^\\circ$. Each of the other points lands in that fixed half-circle independently with probability $\\tfrac12$, so $P(E_i)=\\left(\\tfrac12\\right)^{n-1}$.",
          "If all $n$ points fit inside some semicircle, there is a unique point that is the clockwise-most one of a covering semicircle (the leader): every other point lies in the half-circle swept clockwise from it, and no other point can play this role. Hence exactly one of the events $E_i$ occurs, so the $E_i$ are mutually exclusive.",
          "Almost surely no two of the $n$ random points coincide, so the leader is well defined and these $n$ events partition the coverable outcomes. Therefore $P(\\text{all in a semicircle})=\\sum_{i=1}^{n}P(E_i)=n\\cdot 2^{-(n-1)}=\\boxed{\\dfrac{n}{2^{\\,n-1}}}.$"
        ]
      },
      {
        "name": "Largest gap on the circle",
        "steps": [
          "The $n$ points cut the circle into $n$ arcs (gaps). The points fail to fit in any semicircle exactly when every gap is shorter than a half-circle; they DO fit in a semicircle exactly when some gap is at least a half-circle, since the diametrically opposite edge of that gap bounds a covering semicircle.",
          "Let $A_i$ be the event that the gap immediately clockwise of point $i$ has length $\\ge\\pi$ (taking circumference $2\\pi$). At most one gap can be this long, so the $A_i$ are disjoint, and 'all in a semicircle' is their union. By symmetry $P(A_i)$ is the same for all $i$.",
          "Fixing point $i$, the gap after it has length $\\ge\\pi$ iff all $n-1$ other points avoid the half-circle clockwise from $i$, which has probability $\\left(\\tfrac12\\right)^{n-1}$. Summing the $n$ disjoint events gives $n\\cdot 2^{-(n-1)}$, the same $\\boxed{\\dfrac{n}{2^{\\,n-1}}}$, confirming the leader argument from the gap side.",
          "Sanity check $n=2$: the formula gives $2/2=1$, and indeed two points always share a semicircle. For $n=3$ it gives $3/4$, so the complement is $1/4$ — exactly the classical chance that three random points have the centre inside their triangle."
        ]
      },
      {
        "name": "Monte Carlo",
        "steps": [
          "Draw $5\\times 10^{6}$ samples of $n$ uniform angles, sort each sample, and test whether the largest cyclic gap is at least a half-circle (equivalently whether all points fit in a semicircle).",
          "Empirical frequencies match the formula across $n=2,\\dots,8$: e.g. $n=3\\to 0.7497$, $n=4\\to 0.5004$, $n=5\\to 0.3126$, $n=8\\to 0.0626$.",
          "These agree with $n/2^{\\,n-1}=0.75,\\,0.5,\\,0.3125,\\,0.0625$ to within Monte-Carlo error, while the trap value $\\left(\\tfrac12\\right)^{n-1}$ (e.g. $0.25$ at $n=3$) is decisively rejected, confirming $\\boxed{\\dfrac{n}{2^{\\,n-1}}}$."
        ]
      }
    ],
    "remark": "Insight: the right symmetry turns a tangled overlap problem into a disjoint sum. Whether you name each point's role as a unique leader or track the unique gap that exceeds a half-circle, the covering events become mutually exclusive and identically distributed, and the answer $n/2^{\\,n-1}$ falls out with no integral. The factor $n$ is exactly the count of points that could serve as leader; forgetting it is the whole trap."
  },
  {
    "theme": "paradox",
    "themeLabel": "Bounds, Symmetry & Paradoxes",
    "title": "The Host Who Didn't Know",
    "difficulty": 4,
    "task": "Determine",
    "tags": [
      "monty-hall",
      "ignorant-host",
      "conditioning",
      "selection-effect"
    ],
    "statement": "Three doors hide one car and two goats, uniformly placed. You pick door $1$. The host this time does NOT know where the car is; he opens one of doors $2$ and $3$ uniformly at random. It happens to reveal a goat. Conditioned on this, determine the probability that switching to the remaining unopened door wins the car, and contrast it with the standard ($1/2$ vs $2/3$) case.",
    "answer": "\\[\\boxed{\\dfrac12}\\]",
    "trap": "Reciting 'switching wins with probability $2/3$' from the famous Monty Hall problem. That result needs an INFORMED host who never reveals the car; an ignorant host's accidental goat-reveal carries different information, and the runs where he would have exposed the car must be discarded, restoring symmetry.",
    "solutions": [
      {
        "name": "Bayes with the reveal as evidence",
        "steps": [
          "Let $C_1,C_2,C_3$ (probability $\\tfrac13$ each) name the car's door. The host opens one of doors $2,3$ at random; condition on the event that the opened door shows a goat.",
          "$P(\\text{goat shown}\\mid C_1)=1$, $P(\\text{goat shown}\\mid C_2)=\\tfrac12$, $P(\\text{goat shown}\\mid C_3)=\\tfrac12$.",
          "Posterior on your door: $P(C_1\\mid\\text{goat})=\\dfrac{\\frac13\\cdot1}{\\frac13\\cdot1+\\frac13\\cdot\\frac12+\\frac13\\cdot\\frac12}=\\dfrac{1/3}{2/3}=\\dfrac12$.",
          "So staying and switching are each $1/2$; switching gives $\\boxed{1/2}$."
        ]
      },
      {
        "name": "Discarded-runs symmetry",
        "steps": [
          "Among all car placements and random openings, the cases where the host accidentally reveals the car are thrown away.",
          "The surviving cases split symmetrically: the car is equally likely to sit behind your door or behind the other closed door, because the ignorant reveal provided no extra evidence favouring either.",
          "Hence each remaining door is equally likely to hide the car and switching wins with probability $\\boxed{1/2}$, unlike the informed-host value $2/3$."
        ]
      }
    ],
    "remark": "Insight: Monty Hall's $2/3$ lives entirely in the host's intent. An informed host's reveal is data about the car; an ignorant host's lucky reveal is a selection effect that conditions away its own information. The mechanism, not the picture, sets the odds, and simulation gives $0.500$."
  },
  {
    "theme": "paradox",
    "themeLabel": "Bounds, Symmetry & Paradoxes",
    "title": "When You Should Expect a Coincidence",
    "difficulty": 4,
    "task": "Find the number of",
    "tags": [
      "birthday-problem",
      "expectation",
      "pairs",
      "linearity"
    ],
    "statement": "In a $365$-day year with independent uniform birthdays, define a 'coincidence' as any unordered pair of people sharing a birthday. Find the smallest number $n$ of people for which the EXPECTED number of coincidences is at least $1$, and explain why this differs from the well-known value $23$.",
    "answer": "\\[\\boxed{n=28}\\]",
    "trap": "Answering $23$ by conflating 'expected number of coincidences $\\ge 1$' with 'probability of a coincidence $\\ge \\tfrac12$.' These are different thresholds: a probability of one-half is reached earlier (at $23$) than the point where you expect a whole coincidence on average ($28$).",
    "solutions": [
      {
        "name": "Linearity of expectation",
        "steps": [
          "Each of the $\\binom n2$ unordered pairs shares a birthday with probability $\\tfrac1{365}$, so the expected number of coincidences is $\\mathbb E[X]=\\dfrac{\\binom n2}{365}=\\dfrac{n(n-1)}{730}$.",
          "Require $\\dfrac{n(n-1)}{730}\\ge 1$, i.e. $n(n-1)\\ge 730$.",
          "Test: $27\\cdot26=702<730$ but $28\\cdot27=756\\ge730$, so the least $n$ is $\\boxed{28}$."
        ]
      },
      {
        "name": "Why not 23",
        "steps": [
          "At $n=23$, $\\mathbb E[X]=\\dfrac{23\\cdot22}{730}=0.693<1$, yet $P(X\\ge1)\\approx0.507$ already exceeds $\\tfrac12$ because $X$ is concentrated near $0$ and $1$.",
          "Expectation crossing $1$ is a strictly stronger demand than probability crossing $\\tfrac12$, so it happens at a larger crowd.",
          "Solving $n(n-1)\\ge730$ gives the threshold $\\boxed{28}$, distinct from the probability-based $23$."
        ]
      }
    ],
    "remark": "Insight: 'more likely than not' and 'expect at least one' are different bars, and the gap between $23$ and $28$ makes that vivid. Linearity of expectation needs no independence and sidesteps the inclusion-exclusion entirely, which is its quiet power."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Record Where the King Sits Third",
    "difficulty": 4,
    "task": "Determine",
    "tags": [
      "records",
      "indicator method",
      "conditioning",
      "permutations",
      "linearity"
    ],
    "statement": "A permutation $(a_1,a_2,\\dots,a_6)$ of $\\{1,2,\\dots,6\\}$ is chosen uniformly at random. Call position $i$ a record if $a_i>a_j$ for all $j<i$ (position $1$ is always a record). Let $X$ be the total number of records. Given the event that the largest value $6$ occupies position $3$, find $E[X]$.",
    "answer": "\\[\\boxed{\\dfrac{5}{2}}\\]",
    "trap": "Reusing the unconditional fact $E[X]=H_6=\\tfrac{49}{20}$, or assuming $P(\\text{position }i\\text{ is a record})=\\tfrac1i$ still holds for every $i$ after conditioning. Conditioning on $a_3=6$ destroys the record chance of every position $i>3$ (the global max has already appeared) and makes position $3$ a guaranteed record.",
    "solutions": [
      {
        "name": "Indicator decomposition after conditioning",
        "steps": [
          "Write $X=\\sum_{i=1}^{6}\\mathbf 1[i\\text{ is a record}]$ and condition on $a_3=6$.",
          "For $i>3$ the value $6$ has already been seen, so $P(i\\text{ is a record}\\mid a_3=6)=0$.",
          "Position $3$ holds the global maximum, so it is certainly a record: contribution $1$.",
          "For $i\\in\\{1,2\\}$ the relative order of the first $i$ entries is uniform (they are a random arrangement of an $i$-subset of $\\{1,\\dots,5\\}$), so $P(i\\text{ is a record})=\\tfrac1i$, giving $1+\\tfrac12$.",
          "Sum: $1+\\tfrac12+1=\\tfrac52$, hence $E[X\\mid a_3=6]=\\boxed{\\tfrac52}$."
        ]
      },
      {
        "name": "Direct enumeration logic",
        "steps": [
          "Among the $6!$ permutations, exactly $5!=120$ have $a_3=6$, and by symmetry the first two entries are a uniformly random ordered pair of distinct values from $\\{1,\\dots,5\\}$.",
          "Expected records among positions $1,2$ equals $\\tfrac11+\\tfrac12=\\tfrac32$ by the relative-order argument.",
          "Add the forced record at position $3$ and zero from positions $4,5,6$.",
          "Total $\\tfrac32+1=\\boxed{\\tfrac52}$."
        ]
      }
    ],
    "remark": "Insight: the indicator method survives conditioning, but each indicator's probability must be recomputed from the conditioned relative order. The hidden constraint is that no position after the global maximum can ever be a record."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "Two Tests, Two Tribes",
    "difficulty": 4,
    "task": "Find the value",
    "tags": [
      "bayes",
      "total probability",
      "mixture prior",
      "complement",
      "conditioning"
    ],
    "statement": "A population splits into two groups: a fraction $\\tfrac25$ belong to group $A$ where the disease prevalence is $\\tfrac1{10}$, and the rest to group $B$ where the prevalence is $\\tfrac12$. A randomly chosen person (group unknown) is given two independent screening tests, each with sensitivity $\\tfrac{9}{10}$ (probability of testing positive when diseased) and specificity $\\tfrac45$ (probability of testing negative when healthy). Given that at least one of the two tests comes back positive, find the probability that the person is diseased.",
    "answer": "\\[\\boxed{\\dfrac{17}{29}}\\]",
    "trap": "Computing the prior as $\\tfrac12(\\tfrac1{10})+\\tfrac12(\\tfrac12)$ instead of weighting by the true group fractions $\\tfrac25,\\tfrac35$; or computing $P(\\text{at least one positive})$ as $2\\times(\\text{single-test rate})$ instead of via the complement $1-(\\text{both negative})$, which double counts the overlap.",
    "solutions": [
      {
        "name": "Collapse the mixture, then Bayes via complement",
        "steps": [
          "Marginal prevalence: $\\pi=\\tfrac25\\cdot\\tfrac1{10}+\\tfrac35\\cdot\\tfrac12=\\tfrac{17}{50}$ (law of total probability over groups).",
          "For a diseased person, $P(\\text{at least one positive})=1-(1-\\tfrac9{10})^2=\\tfrac{99}{100}$.",
          "For a healthy person, each test is positive with probability $1-\\tfrac45=\\tfrac15$, so $P(\\text{at least one positive})=1-(\\tfrac45)^2=\\tfrac9{25}$.",
          "Bayes: $\\dfrac{\\tfrac{17}{50}\\cdot\\tfrac{99}{100}}{\\tfrac{17}{50}\\cdot\\tfrac{99}{100}+\\tfrac{33}{50}\\cdot\\tfrac9{25}}=\\boxed{\\tfrac{17}{29}}$."
        ]
      },
      {
        "name": "Odds form",
        "steps": [
          "Prior odds diseased:healthy $=\\tfrac{17}{50}:\\tfrac{33}{50}=17:33$.",
          "Likelihood ratio for the event 'at least one positive' $=\\tfrac{99/100}{9/25}=\\tfrac{99}{36}=\\tfrac{11}{4}$.",
          "Posterior odds $=17\\cdot 11 : 33\\cdot 4 = 187:132 = 17:12$.",
          "Posterior probability $=\\tfrac{17}{17+12}=\\boxed{\\tfrac{17}{29}}$."
        ]
      }
    ],
    "remark": "Insight: two distinct probabilistic layers stack here — a total-probability collapse of the hidden group structure into a single prevalence, and a Bayes update whose likelihoods are cleanest through the complement of 'both negative.'"
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Frog and the Far Vertex",
    "difficulty": 5,
    "task": "Find the probability",
    "tags": [
      "markov chain",
      "first-step analysis",
      "symmetry",
      "gambler's ruin",
      "hitting probability"
    ],
    "statement": "A frog sits at vertex $0$ of a regular hexagon with vertices labelled $0,1,2,3,4,5$ in order around the cycle. At each step it hops to one of its two neighbours, each with probability $\\tfrac12$. Find the probability that the frog visits the opposite vertex $3$ before it returns to its starting vertex $0$.",
    "answer": "\\[\\boxed{\\dfrac{1}{3}}\\]",
    "trap": "Declaring the race symmetric: vertex $3$ is distance $3$ from $0$ along either arc, so it looks like a fair contest and one writes $\\tfrac12$. But the question is about returning to $0$, and after the obligatory first hop the frog is only $1$ step from home yet still $2$ steps from $3$. That asymmetry, not the arc lengths, governs the race. A second snare is to treat the two arcs as independent competitors and add their probabilities; once the frog commits to an arc, both $0$ and $3$ are absorbing on a single $3$-step path and there is nothing to add.",
    "solutions": [
      {
        "name": "Symmetry fold + gambler's ruin",
        "steps": [
          "The frog must leave $0$ on the first hop, so condition on it. By the left-right symmetry of the hexagon assume it goes to vertex $1$; the hop to vertex $5$ is the mirror image and gives the identical probability.",
          "From vertex $1$ onward, both $0$ and $3$ act as absorbing barriers, and the relevant sites are exactly the path $0\\,\\text{-}\\,1\\,\\text{-}\\,2\\,\\text{-}\\,3$ (a symmetric walk cannot reach $4$ or $5$ without first passing through $3$).",
          "This is gambler's ruin on $\\{0,1,2,3\\}$ started at position $1$: the probability of reaching $3$ before $0$ is $\\tfrac{1}{3}$, because hitting probabilities are linear in position, $P=\\tfrac{1-0}{3-0}=\\tfrac13$.",
          "By symmetry the first hop to $5$ yields the same $\\tfrac13$, so the overall probability is $\\boxed{\\tfrac13}$."
        ]
      },
      {
        "name": "Harmonic function on the cycle",
        "steps": [
          "Let $h(v)=P(\\text{hit }3\\text{ before }0\\mid\\text{currently at }v)$ with boundary values $h(0)=0$ and $h(3)=1$, and the harmonic relation $h(v)=\\tfrac12\\big(h(v_-)+h(v_+)\\big)$ at every interior vertex of the cycle.",
          "Symmetry gives $h(1)=h(5)$ and $h(2)=h(4)$. Solving the linear system yields $h(1)=h(5)=\\tfrac13$ and $h(2)=h(4)=\\tfrac23$.",
          "The required probability is the value just after the first hop from $0$: $\\tfrac12 h(1)+\\tfrac12 h(5)=\\tfrac12\\cdot\\tfrac13+\\tfrac12\\cdot\\tfrac13=\\boxed{\\tfrac13}$."
        ]
      }
    ],
    "remark": "Insight: a six-state Markov problem collapses to a three-step gambler's ruin once symmetry identifies the two arcs and the first hop fixes which barrier you are racing toward. The apparent $3$-versus-$3$ symmetry is a decoy; what matters is that the obligatory first step leaves you distance $1$ from home but distance $2$ from the goal, so the home barrier is twice as easy to reach and the answer is $\\tfrac13$, not $\\tfrac12$."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "Ascents After a Climbing Start",
    "difficulty": 4,
    "task": "Determine",
    "tags": [
      "indicator method",
      "conditioning",
      "permutations",
      "ascents",
      "relative order"
    ],
    "statement": "A permutation $(a_1,\\dots,a_{10})$ of $\\{1,2,\\dots,10\\}$ is chosen uniformly at random. An ascent occurs at position $i$ ($1\\le i\\le 9$) whenever $a_i<a_{i+1}$. Given that the permutation begins with a strictly increasing run of length $3$, i.e. $a_1<a_2<a_3$, find the expected total number of ascents.",
    "answer": "\\[\\boxed{\\dfrac{21}{4}}\\]",
    "trap": "Assuming that conditioning on $a_1<a_2<a_3$ leaves every remaining adjacent comparison at probability $\\tfrac12$. The comparison at position $3$ (between $a_3$ and $a_4$) is suppressed to probability $\\tfrac14$, because $a_3$ is forced to be the largest of the first three entries and hence tends to exceed $a_4$.",
    "solutions": [
      {
        "name": "Position-by-position indicators",
        "steps": [
          "Write the ascent count $X=\\sum_{i=1}^{9}\\mathbf 1[a_i<a_{i+1}]$ and condition on $G:\\,a_1<a_2<a_3$.",
          "Positions $i=1,2$ are forced ascents: probability $1$ each, contributing $2$.",
          "At $i=3$: given $G$, $a_3=\\max(a_1,a_2,a_3)$, so $P(a_3<a_4\\mid G)$ equals the chance that $a_4$ exceeds the max of three uniform values, which is $\\tfrac14$.",
          "For $i\\ge 4$ the index pair $\\{i,i+1\\}$ is disjoint from $\\{1,2,3\\}$; by exchangeability the relative order of $a_i,a_{i+1}$ is uniform and independent of $G$, giving $\\tfrac12$ each across the $6$ positions $i=4,\\dots,9$.",
          "Total: $2+\\tfrac14+6\\cdot\\tfrac12=2+\\tfrac14+3=\\boxed{\\tfrac{21}{4}}$."
        ]
      },
      {
        "name": "General formula then substitute",
        "steps": [
          "For general $n\\ge 4$ the same decomposition gives $E[X\\mid a_1<a_2<a_3]=2+\\tfrac14+(n-4)\\cdot\\tfrac12=\\tfrac{2n+1}{4}$.",
          "The single non-trivial term is the $i=3$ comparison: among the $4!$ relative orders of $a_1,a_2,a_3,a_4$ in which $a_3$ is largest of the first three, exactly one quarter also have $a_4>a_3$, so $P=\\tfrac14$.",
          "Substituting $n=10$ yields $\\tfrac{21}{4}$.",
          "Hence the expected number of ascents is $\\boxed{\\tfrac{21}{4}}$."
        ]
      }
    ],
    "remark": "Insight: conditioning on a head-start run only contaminates the boundary comparison at position $3$; deep adjacent comparisons stay independent of the front by exchangeability. The lone $\\tfrac14$ is the whole game."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Longest Shard of a Triangle",
    "difficulty": 5,
    "task": "Find the value",
    "tags": [
      "geometric probability",
      "order statistics",
      "conditioning",
      "broken stick",
      "expectation"
    ],
    "statement": "A unit stick is broken at two points chosen independently and uniformly along its length, producing three pieces. Given that the three pieces can form a (non-degenerate) triangle, find the expected length of the longest piece.",
    "answer": "\\[\\boxed{\\dfrac{4}{9}}\\]",
    "trap": "Conflating the unconditional $E[\\text{longest piece}]=\\tfrac{11}{18}$ with the conditional value, or assuming the triangle event is symmetric enough to leave $E[\\text{longest}]$ unchanged. Conditioning on every piece being below $\\tfrac12$ shrinks the longest piece, dropping the answer from $\\tfrac{11}{18}\\approx0.611$ to $\\tfrac49\\approx0.444$. A second trap is to misread the order-statistic tail: on the simplex $P(M>t)=3(1-t)^2-3(1-2t)^2$ on $[\\tfrac13,\\tfrac12]$, and using the bare $3(1-2t)^2$ wrongly forces $P(\\text{triangle})=1$.",
    "solutions": [
      {
        "name": "Uniform spacings on the medial triangle",
        "steps": [
          "The two break points split $[0,1]$ into three pieces $(a,b,c)$ whose lengths are uniformly distributed on the simplex $\\{a+b+c=1,\\ a,b,c\\ge0\\}$. Charting by $(a,b)$ with $c=1-a-b$, the density on the triangle $\\{a>0,\\,b>0,\\,a+b<1\\}$ is the constant $2$ (its area is $\\tfrac12$).",
          "A triangle forms iff no piece reaches $\\tfrac12$, i.e. $a<\\tfrac12$, $b<\\tfrac12$, $c<\\tfrac12$. The last condition is $a+b>\\tfrac12$, so the triangle region $R$ is the central medial triangle. Its area in the chart is $\\tfrac18$, giving $P(\\text{triangle})=2\\cdot\\tfrac18=\\tfrac14$, the classical value.",
          "By the threefold symmetry of $R$ under permuting $(a,b,c)$, $\\displaystyle\\int_R \\max(a,b,c)\\,dA = 3\\int_{S_c} c\\,dA$, where $S_c=R\\cap\\{c\\ge a,\\ c\\ge b\\}$ is the sub-region in which $c$ is the largest piece.",
          "Splitting $S_c$ at $a=\\tfrac13$ gives $\\displaystyle\\int_{S_c} c\\,dA=\\int_0^{1/3}\\!\\!\\int_{1/2-a}^{(1-a)/2} c\\,db\\,da+\\int_{1/3}^{1/2}\\!\\!\\int_{1/2-a}^{1-2a} c\\,db\\,da=\\tfrac1{54}$, so $\\displaystyle\\int_R\\max\\,dA=3\\cdot\\tfrac1{54}=\\tfrac1{18}$.",
          "Multiplying by the density $2$, $E[\\max\\cdot\\mathbf1_R]=2\\cdot\\tfrac1{18}=\\tfrac19$. Dividing by $P(\\text{triangle})=\\tfrac14$ yields $E[\\max\\mid\\text{triangle}]=\\dfrac{1/9}{1/4}=\\boxed{\\tfrac49}$."
        ]
      },
      {
        "name": "Order-statistic tail of the maximum",
        "steps": [
          "Let $M=\\max(a,b,c)$ on the simplex. By inclusion–exclusion, for $t\\in[\\tfrac13,\\tfrac12]$ exactly two of the three corner caps $\\{a>t\\}$, $\\{b>t\\}$, $\\{c>t\\}$ can overlap, giving the tail $P(M>t)=3(1-t)^2-3(1-2t)^2$; for $t\\in[\\tfrac12,1]$ the caps are disjoint and $P(M>t)=3(1-t)^2$.",
          "Check: $P(M>\\tfrac12)=3(1-\\tfrac12)^2=\\tfrac34$, so $P(\\text{triangle})=P(M<\\tfrac12)=\\tfrac14$, and the unconditional mean $E[M]=\\int_0^1 P(M>t)\\,dt=\\tfrac{11}{18}$ — the trap value.",
          "For the conditional mean use $E[M\\cdot\\mathbf1\\{M<\\tfrac12\\}]=\\int_0^{1/2}P(t<M<\\tfrac12)\\,dt$, where $P(t<M<\\tfrac12)=P(M>t)-\\tfrac34$. This is $\\tfrac14$ for $t\\in[0,\\tfrac13]$ and $3(1-t)^2-3(1-2t)^2-\\tfrac34$ for $t\\in[\\tfrac13,\\tfrac12]$.",
          "Integrating, $E[M\\cdot\\mathbf1\\{M<\\tfrac12\\}]=\\tfrac14\\cdot\\tfrac13+\\int_{1/3}^{1/2}\\!\\big(3(1-t)^2-3(1-2t)^2-\\tfrac34\\big)dt=\\tfrac19$, matching Method 1.",
          "Hence $E[M\\mid M<\\tfrac12]=\\dfrac{1/9}{1/4}=\\boxed{\\tfrac49}$."
        ]
      }
    ],
    "remark": "Insight: the broken-stick spacings are uniform on a simplex, so the triangle condition is a geometric (medial-triangle) event while the longest piece is an order statistic — the answer needs both pictures fused on the same simplex. Conditioning is essential: the longest shard averages $\\tfrac{11}{18}$ in general but only $\\tfrac49$ once you know a triangle is possible."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "When Three Kings Have Been Crowned",
    "difficulty": 5,
    "task": "Find the probability",
    "tags": [
      "records",
      "stirling numbers",
      "counting",
      "conditioning",
      "left-to-right maxima"
    ],
    "statement": "The cards $1,2,\\dots,6$ are shuffled into a uniformly random order and dealt one at a time. A record occurs whenever a card exceeds all previously dealt cards. Given that exactly $3$ records occur over the whole deal, find the probability that the last card dealt is itself a record.",
    "answer": "\\[\\boxed{\\dfrac{2}{9}}\\]",
    "trap": "Assuming records behave like cycles of a permutation per outcome (they only share the same distribution; outcome-by-outcome the two counts disagree for $484$ of the $720$ permutations), or forgetting that the last card is a record precisely when it is the global maximum $6$. One must count permutations with a fixed record number using the unsigned Stirling numbers of the first kind.",
    "solutions": [
      {
        "name": "Stirling-first-kind counting",
        "steps": [
          "The number of permutations of $\\{1,\\dots,n\\}$ with exactly $k$ records equals the unsigned Stirling number $c(n,k)$ (the fundamental bijection sends records to cycle-leaders, so the distributions coincide even though individual outcomes need not match).",
          "Here $c(6,3)=225$ is the size of the conditioning event.",
          "The last card is a record iff $a_6=6$; placing $6$ last makes it the global maximum (a record), and the first five entries must be a permutation of $\\{1,\\dots,5\\}$ with exactly $2$ records, counted by $c(5,2)=50$.",
          "Therefore $P=\\dfrac{c(5,2)}{c(6,3)}=\\dfrac{50}{225}=\\boxed{\\tfrac29}$."
        ]
      },
      {
        "name": "Recursive split on the maximum's slot",
        "steps": [
          "Condition on the position of the global maximum $6$. The last card is a record exactly when $6$ sits in slot $6$.",
          "Among permutations with $3$ records, those ending in $6$ correspond bijectively to permutations of $\\{1,\\dots,5\\}$ with $2$ records: append $6$, which always adds exactly one record without disturbing the earlier ones.",
          "Count: $c(5,2)=50$ favourable out of $c(6,3)=225$ total.",
          "Ratio $\\boxed{\\tfrac29}$, confirmed by direct enumeration over all $720$ permutations."
        ]
      }
    ],
    "remark": "Insight: the 'number of records' is a counting statistic governed by the Stirling numbers of the first kind, and the geometric event 'last card is a record' is the clean condition $a_6=6$. Combining the two converts a probability into a ratio of Stirling numbers. Beware the seductive but false move of equating records with cycles outcome-by-outcome: only their distributions agree."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "Touring the Complete Quartet",
    "difficulty": 4,
    "task": "Find the value",
    "tags": [
      "markov chain",
      "cover time",
      "coupon collector",
      "indicator method",
      "expectation"
    ],
    "statement": "A token performs a random walk on the complete graph $K_4$ (four vertices, every pair joined by an edge). From its current vertex it jumps to one of the other three vertices, each with probability $\\tfrac13$ (it never stays put). Find the expected number of steps until all four vertices have been visited at least once.",
    "answer": "\\[\\boxed{\\dfrac{11}{2}}\\]",
    "trap": "Treating it as ordinary coupon collecting with success probability $\\tfrac{4-m}{4}$ per step. Because the walk cannot remain in place, when $m$ vertices are known the chance the next jump hits a new one is $\\tfrac{4-m}{3}$ (denominator $3$, not $4$). Using $\\tfrac{4-m}{4}$ gives $\\tfrac41+\\tfrac42+\\tfrac43=\\tfrac{22}{3}$, an overcount that ignores the no-self-loop rule.",
    "solutions": [
      {
        "name": "Coupon collecting on the no-self-loop chain",
        "steps": [
          "Decompose the cover time into the waiting times to discover the $2$nd, $3$rd, and $4$th vertices (the start gives the $1$st free).",
          "When $m$ distinct vertices have been seen, the current vertex is one of them. The three equally likely jump targets are the three vertices different from the current one; among these, exactly $4-m$ are unvisited, so the per-step success probability is $\\tfrac{4-m}{3}$ (crucially, the current vertex can never be re-chosen).",
          "Each discovery is therefore geometric with mean $\\tfrac{3}{4-m}$ steps, for $m=1,2,3$.",
          "Sum the means: $\\tfrac31+\\tfrac32+\\tfrac33=3+\\tfrac32+1=\\boxed{\\tfrac{11}{2}}$."
        ]
      },
      {
        "name": "State-based first-step expectation",
        "steps": [
          "Let $E_m$ be the expected remaining steps when $m$ vertices have been visited and the token sits on one of them; $E_4=0$.",
          "Of the three jump targets (all $\\neq$ current vertex), $4-m$ are new and the remaining $(m-1)$ are old, since the current vertex is excluded as a target. First-step relation: $E_m=1+\\tfrac{m-1}{3}E_m+\\tfrac{4-m}{3}E_{m+1}$.",
          "$m=3$: $E_3=1+\\tfrac23 E_3+0$, so $\\tfrac13 E_3=1\\Rightarrow E_3=3$.",
          "$m=2$: $E_2=1+\\tfrac13 E_2+\\tfrac23 E_3$, so $\\tfrac23 E_2=1+\\tfrac23\\cdot3=3\\Rightarrow E_2=\\tfrac{9}{2}$.",
          "$m=1$: $E_1=1+0\\cdot E_1+1\\cdot E_2=1+\\tfrac92=\\boxed{\\tfrac{11}{2}}$, matching the coupon-collector sum."
        ]
      }
    ],
    "remark": "Insight: the cover time is a coupon-collector sum, but the Markov 'no staying put' rule changes the bookkeeping. Naively the chance of a new vertex looks like $\\tfrac{4-m}{4}$; in truth the current vertex is forbidden as a target, so among the three live targets $4-m$ are new and the success rate is $\\tfrac{4-m}{3}$. The same exclusion makes the already-seen probability $\\tfrac{m-1}{3}$, not $\\tfrac{m}{3}$ — which is exactly what keeps the $m=3$ recurrence non-degenerate. The fusion of the indicator decomposition with the transition structure is where the subtlety lives."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Urn That Hid a Colour",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "inclusion-exclusion",
      "surjections",
      "bayes",
      "conditioning",
      "sampling with replacement"
    ],
    "statement": "Two urns are equally likely. Urn $A$ contains balls of exactly three colours $\\{1,2,3\\}$ in equal proportion; urn $B$ contains balls of four colours $\\{1,2,3,4\\}$ in equal proportion. One urn is chosen at random and a ball is drawn with replacement $5$ times. It is observed that the multiset of colours seen was exactly $\\{1,2,3\\}$ (all three of these colours appeared and colour $4$ never did). Find the total probability of this observation.",
    "answer": "\\[\\boxed{\\dfrac{31675}{82944}}\\]",
    "trap": "Forgetting the surjectivity requirement 'all three colours $1,2,3$ actually appear' and writing the likelihood as a single power; the constraint forces an inclusion-exclusion count of surjections, $\\sum_{j}(-1)^j\\binom{3}{j}(3-j)^5$. Omitting it overcounts samples that miss a colour.",
    "solutions": [
      {
        "name": "Inclusion-exclusion likelihoods, then total probability",
        "steps": [
          "Let $S(m)=\\sum_{j=0}^{3}(-1)^j\\binom3j(3-j)^m$ count surjections of $m$ draws onto three colours; here $S(5)=150$.",
          "Under urn $A$ (three colours, uniform): $P(\\text{obs})=\\dfrac{S(5)}{3^5}=\\dfrac{150}{243}=\\dfrac{50}{81}$.",
          "Under urn $B$ (four colours, uniform): all $5$ draws must land in $\\{1,2,3\\}$ and cover all three, so $P(\\text{obs})=\\dfrac{S(5)}{4^5}=\\dfrac{150}{1024}=\\dfrac{75}{512}$.",
          "Total: $\\tfrac12\\cdot\\tfrac{50}{81}+\\tfrac12\\cdot\\tfrac{75}{512}=\\boxed{\\tfrac{31675}{82944}}$."
        ]
      },
      {
        "name": "Complement bookkeeping",
        "steps": [
          "For urn $A$, $P(\\text{cover all 3 in 5 draws})=1-\\big[3(\\tfrac23)^5-3(\\tfrac13)^5\\big]=\\tfrac{50}{81}$ by inclusion-exclusion on the missing colours.",
          "For urn $B$, factor $P(\\text{no colour 4})=(\\tfrac34)^5$ and multiply by the same surjection-onto-3 probability $\\tfrac{50}{81}$: $(\\tfrac34)^5\\cdot\\tfrac{50}{81}=\\tfrac{75}{512}$.",
          "Average the two with equal weights $\\tfrac12$.",
          "Result $\\boxed{\\tfrac{31675}{82944}}$; the associated posterior on urn $A$ collapses to $\\tfrac{4^5}{4^5+3^5}=\\tfrac{1024}{1267}$."
        ]
      }
    ],
    "remark": "Insight: the observation 'exactly these colours' is a surjection event whose probability only inclusion-exclusion can express, and the two-urn prior demands a Bayes/total-probability combination - neither tool alone reaches the answer."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Arc That Owns the North Star",
    "difficulty": 4,
    "task": "Find the probability",
    "tags": [
      "geometric probability",
      "order statistics",
      "spacings",
      "size bias",
      "circle"
    ],
    "statement": "Three points are dropped independently and uniformly on a circle of circumference $1$, splitting it into three arcs. A fixed marker $Q$ is painted on the circle beforehand. Find the probability that the particular arc which happens to contain $Q$ is the longest of the three arcs.",
    "answer": "\\[\\boxed{\\dfrac{11}{18}}\\]",
    "trap": "Answering $\\tfrac13$ by symmetry, 'each arc is equally likely to be longest.' That symmetry holds for an arc chosen by its label, but the arc containing a fixed point $Q$ is size-biased — longer arcs are more likely to swallow $Q$ — so its chance of being longest is strictly above $\\tfrac13$. Numerically the $Q$-arc has mean length $\\tfrac12$, not $\\tfrac13$, betraying the bias.",
    "solutions": [
      {
        "name": "Size-bias to the longest-arc distribution",
        "steps": [
          "Condition on the three arc lengths $\\ell_1,\\ell_2,\\ell_3$ (with $\\ell_1+\\ell_2+\\ell_3=1$). Given them, the fixed marker $Q$ is uniform, so $P(Q\\in\\text{arc }i\\mid\\ell)=\\ell_i$: the arc containing $Q$ is a length-biased pick of the three arcs.",
          "Therefore $P(Q\\text{'s arc is the longest})=\\sum_{i=1}^3 E\\!\\left[\\ell_i\\,\\mathbf1\\{\\ell_i=\\max\\}\\right]=E\\!\\left[\\max_i \\ell_i\\right]$, because in each realisation exactly the maximal arc carries the indicator and contributes its own length to the sum.",
          "So the answer is precisely the expected longest arc. For $n$ uniform points the spacings are exchangeable Dirichlet$(1,\\dots,1)$, and the classical spacings result gives $E[\\text{longest arc}]=\\dfrac{H_n}{n}=\\dfrac1n\\sum_{k=1}^n\\dfrac1k$.",
          "With $n=3$: $E[\\max]=\\dfrac{H_3}{3}=\\dfrac13\\Big(1+\\dfrac12+\\dfrac13\\Big)=\\dfrac13\\cdot\\dfrac{11}{6}=\\boxed{\\dfrac{11}{18}}.$"
        ]
      },
      {
        "name": "Direct simplex integration",
        "steps": [
          "The arc lengths $(x,y,z)$ are uniform on the simplex $\\{x,y,z\\ge0,\\;x+y+z=1\\}$; parametrised by $(x,y)$ with $z=1-x-y$, the density is the constant $2$ over the triangle.",
          "By the size-bias step, the required probability equals $E[\\max]=\\displaystyle\\iint 2\\,\\max(x,y,z)\\,dx\\,dy$ over that triangle. Splitting on which coordinate is largest (three congruent regions by symmetry) gives $E[\\max]=3\\!\\iint_{x=\\max} 2x\\,dx\\,dy.$",
          "Carrying out the integral $\\displaystyle 3\\int_0^1\\!\\!\\int_0^{1-x} 2x\\,\\mathbf1\\{x\\ge y,\\;x\\ge 1-x-y\\}\\,dy\\,dx$ evaluates exactly to $\\dfrac{11}{18}$ (equivalently $E[\\max]=H_3/3$).",
          "Hence $P(Q\\text{'s arc is the longest})=\\boxed{\\dfrac{11}{18}}$, in agreement with the first method."
        ]
      }
    ],
    "remark": "Insight: a geometric spacing problem meets order statistics through size-biasing. The arc containing a fixed point is the length-weighted pick of the three arcs, and the probability that a length-weighted pick is the maximum is exactly the expected maximum, $E[\\max]=H_3/3=\\tfrac{11}{18}$ — not the naive $\\tfrac13$. The same argument gives $H_n/n$ for $n$ points (e.g. $\\tfrac34$ for two points), a clean signature of the bias."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "How Long the Winning Walk",
    "difficulty": 5,
    "task": "Find the value",
    "tags": [
      "gambler's ruin",
      "first-step analysis",
      "conditional expectation",
      "biased random walk",
      "markov chain"
    ],
    "statement": "A token starts at position $2$ on the integers and performs a biased walk: each step it moves $+1$ with probability $\\tfrac23$ and $-1$ with probability $\\tfrac13$. The walk stops when it first reaches $0$ (a loss) or $6$ (a win). Given that the walk ends in a win, find the expected number of steps it takes.",
    "answer": "\\[\\boxed{\\dfrac{60}{7}}\\]",
    "trap": "Assuming the conditional expected duration equals the unconditional one. This is true only for the symmetric walk (or, by accident, when the start sits at the exact midpoint), but here the start is off-center, so the false shortcut gives $\\tfrac{54}{7}$ instead of $\\tfrac{60}{7}$. The conditioned (winning) walk is governed by a Doob $h$-transformed chain, so one must compute $E[T\\cdot\\mathbf1\\{\\text{win}\\}]$ and divide by $P(\\text{win})$.",
    "solutions": [
      {
        "name": "Win probability plus weighted duration",
        "steps": [
          "First-step ruin formula with ratio $r=\\tfrac{q}{p}=\\tfrac12$ on $\\{0,\\dots,6\\}$: $w_i=P(\\text{win from }i)=\\dfrac{1-r^{\\,i}}{1-r^{6}}$, so $w_2=\\dfrac{1-1/4}{1-1/64}=\\dfrac{16}{21}$.",
          "Let $m_i=E[T\\cdot\\mathbf1\\{\\text{win}\\}\\mid\\text{at }i]$. Splitting on the first step, the surviving time gains $1$ only on paths that win, giving $m_i=p\\,(w_{i+1}+m_{i+1})+q\\,(w_{i-1}+m_{i-1})$ with $m_0=m_6=0$.",
          "Solving this linear system on $i=1,\\dots,5$ together with the known $w_i$ yields $m_2=\\dfrac{320}{49}$.",
          "Conditional expectation $E[T\\mid\\text{win}]=\\dfrac{m_2}{w_2}=\\dfrac{320/49}{16/21}=\\dfrac{320}{49}\\cdot\\dfrac{21}{16}=\\boxed{\\dfrac{60}{7}}$."
        ]
      },
      {
        "name": "Doob h-transform",
        "steps": [
          "Condition on winning: the transformed walk has state-dependent step probabilities $\\tilde p_i=p\\,\\dfrac{w_{i+1}}{w_i}$ and $\\tilde q_i=q\\,\\dfrac{w_{i-1}}{w_i}$, where $w_i=\\dfrac{1-2^{-i}}{1-2^{-6}}$ is the win probability used as the harmonic $h$-function.",
          "Let $\\tau_i$ be the expected absorption time of this $h$-transformed chain from $i$, solving $\\tau_i=1+\\tilde p_i\\,\\tau_{i+1}+\\tilde q_i\\,\\tau_{i-1}$ with $\\tau_0=\\tau_6=0$.",
          "Substituting the $w_i$ and solving the $5\\times5$ tridiagonal system gives $\\tau_2=\\dfrac{60}{7}$.",
          "Hence the expected length of a winning walk started at $2$ is $\\boxed{\\dfrac{60}{7}}$, matching the first method."
        ]
      }
    ],
    "remark": "Insight: a single biased random walk forces two distinct first-step computations — one for the ruin probability and one for the conditioned duration. The trap is the seductive but false belief that conditioning on success leaves the expected time unchanged; starting off the midpoint exposes it, since the honest value $\\tfrac{60}{7}$ exceeds the unconditional $\\tfrac{54}{7}$ — winning runs of a forward-biased walk are, on average, longer than typical runs."
  }
];
