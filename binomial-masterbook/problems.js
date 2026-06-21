/* BINOMIAL THEOREM — The Expansion & Its Coefficients · 100 problems, 10 chapters, Python-verified. */
window.PROBLEMS = [
  {
    "theme": "genterm",
    "themeLabel": "The General Term",
    "title": "The Fourth Term's Disguise",
    "difficulty": 3,
    "task": "Evaluate",
    "tags": [
      "general term",
      "constant term",
      "negative powers",
      "binomial"
    ],
    "statement": "Find the term independent of $x$ in the expansion of $\\left(x^2-\\dfrac{2}{x^4}\\right)^{9}$.",
    "answer": "\\[\\boxed{-672}\\]",
    "trap": "Writing the exponent of $x$ as $2(9-r)+4r$ (treating $1/x^4$ as if it contributed $+4r$). The factor $1/x^4=x^{-4}$ contributes $-4r$, so the correct exponent is $18-6r$. With the wrong sign the exponent $18+2r$ is at least $18$ for every $r\\in\\{0,\\dots,9\\}$, so it never vanishes and the solver wrongly concludes there is no constant term.",
    "solutions": [
      {
        "name": "General-term exponent equation",
        "steps": [
          "The general term is $T_{r+1}=\\binom{9}{r}(x^2)^{9-r}\\left(-\\dfrac{2}{x^4}\\right)^{r}=\\binom{9}{r}(-2)^r x^{2(9-r)-4r}$.",
          "Set the power of $x$ to zero: $18-2r-4r=18-6r=0\\Rightarrow r=3$, an integer in $\\{0,\\dots,9\\}$, so the term exists.",
          "Substitute: $T_4=\\binom{9}{3}(-2)^3=84\\cdot(-8)=\\boxed{-672}$."
        ]
      },
      {
        "name": "Direct check of the candidate term",
        "steps": [
          "Only $r=3$ can kill all powers, since $18-6r=0$ forces $r=3$; compute that single term rather than the whole expansion.",
          "$\\binom{9}{3}=84$ and $(-2)^3=-8$, with $x^{18-18}=x^0$.",
          "Hence the constant term is $84\\times(-8)=\\boxed{-672}$."
        ]
      }
    ],
    "remark": "Insight: the whole problem hinges on reading $1/x^4$ as $x^{-4}$. The constant term is a single coefficient; never expand all ten terms."
  },
  {
    "theme": "genterm",
    "themeLabel": "The General Term",
    "title": "Hunting a Specific Power",
    "difficulty": 3,
    "task": "Determine",
    "tags": [
      "general term",
      "specific power",
      "binomial coefficient",
      "integer solution"
    ],
    "statement": "In the expansion of $\\left(x^{2}+\\dfrac{1}{x}\\right)^{11}$, determine the coefficient of $x^{7}$, or show that no such term exists.",
    "answer": "\\[\\boxed{462}\\]",
    "trap": "Reading $\\dfrac{1}{x}$ as $x^{+1}$ gives the exponent $2(11-r)+r=22-r$, so $22-r=7\\Rightarrow r=15>11$, and one falsely concludes no such term exists. The correct exponent is $22-3r$, which equals $7$ at the integer $r=5$, so the term does exist with coefficient $\\binom{11}{5}=462$.",
    "solutions": [
      {
        "name": "Solve for r, verify integrality",
        "steps": [
          "General term: $T_{r+1}=\\binom{11}{r}(x^{2})^{11-r}\\left(x^{-1}\\right)^{r}=\\binom{11}{r}x^{2(11-r)-r}=\\binom{11}{r}x^{22-3r}$.",
          "Require $22-3r=7\\Rightarrow 3r=15\\Rightarrow r=5$, an integer with $0\\le 5\\le 11$, so the term exists.",
          "Coefficient: $\\binom{11}{5}=462$, hence the coefficient of $x^{7}$ is $\\boxed{462}$."
        ]
      },
      {
        "name": "Divisibility screen on the exponent",
        "steps": [
          "As $r=0,1,2,\\dots,11$ the exponent $22-3r$ takes the values $22,19,16,13,10,7,4,\\dots$, all congruent to $1\\pmod 3$ since $22\\equiv 1$ and $3r\\equiv 0$.",
          "Because $7\\equiv 1\\pmod 3$, the value $7$ is attainable, and it occurs exactly once — at the unique $r$ with $22-3r=7$, namely $r=5$.",
          "The lone term at $r=5$ contributes $\\binom{11}{5}=\\boxed{462}$."
        ]
      }
    ],
    "remark": "Insight: existence reduces to an integer-divisibility (mod 3) question on $22-3r$; once $7\\equiv 22\\pmod 3$ guarantees a solution, the exponent's strict monotonicity in $r$ makes that solution unique, so the answer is automatically the single binomial coefficient $\\binom{11}{5}$."
  },
  {
    "theme": "genterm",
    "themeLabel": "The General Term",
    "title": "Roots Against Cube Roots",
    "difficulty": 4,
    "task": "Determine",
    "tags": [
      "general term",
      "fractional powers",
      "constant term",
      "divisibility"
    ],
    "statement": "For integers $n$ with $10\\le n\\le 20$, the expansion of $\\left(\\sqrt{x}+\\dfrac{1}{\\sqrt[3]{x}}\\right)^{n}$ may or may not contain a term independent of $x$. Determine the smallest such $n$ for which the constant term exists, and find its value.",
    "answer": "\\[\\boxed{210}\\]",
    "trap": "Clearing fractions carelessly: from $\\tfrac{n-r}{2}=\\tfrac{r}{3}$ one may write $3(n-r)=2r\\Rightarrow 3n=5r$ and then forget that $r$ must be a non-negative integer with $0\\le r\\le n$ — concluding that every $n$ in the range works. In fact $5\\mid 3n$ together with $\\gcd(5,3)=1$ forces $5\\mid n$, so only $n=10,15,20$ qualify here.",
    "solutions": [
      {
        "name": "Fractional-power balance",
        "steps": [
          "The general term is $\\binom{n}{r}\\bigl(x^{1/2}\\bigr)^{n-r}\\bigl(x^{-1/3}\\bigr)^{r}$, with exponent $\\tfrac12(n-r)-\\tfrac13 r=\\dfrac{3n-5r}{6}$.",
          "A constant term needs $3n-5r=0\\Rightarrow r=\\tfrac{3n}{5}$; since $\\gcd(3,5)=1$, integrality of $r$ forces $5\\mid n$, so the candidates in $[10,20]$ are $n=10,15,20$.",
          "The smallest is $n=10$, giving $r=6$; the value is $\\binom{10}{6}=\\boxed{210}$."
        ]
      },
      {
        "name": "Test from the bottom up",
        "steps": [
          "Check $n=10$: $r=\\tfrac{3\\cdot10}{5}=6$ is a non-negative integer with $0\\le 6\\le 10$, so a constant term genuinely exists.",
          "For $11\\le n\\le 14$, $r=\\tfrac{3n}{5}$ is not an integer, so no constant term appears until the next multiple of $5$; hence $n=10$ is minimal.",
          "The constant term is $\\binom{10}{6}=210=\\boxed{210}$."
        ]
      }
    ],
    "remark": "Insight: the existence of a constant term in a fractional-power binomial is a congruence condition on $n$, not merely a single equation in $r$. The balance $3n=5r$ has an integer solution with $0\\le r\\le n$ exactly when $5\\mid n$, so existence is governed by divisibility rather than by a generic count."
  },
  {
    "theme": "genterm",
    "themeLabel": "The General Term",
    "title": "The Power That Cannot Be",
    "difficulty": 4,
    "task": "Determine",
    "tags": [
      "general term",
      "existence",
      "nonexistence",
      "sign"
    ],
    "statement": "Consider $\\left(x-\\dfrac{1}{x^{2}}\\right)^{15}$. Determine the coefficient of $x^{3}$, and determine whether a term in $x^{4}$ exists.",
    "answer": "\\[\\boxed{\\text{coeff of }x^{3}=1365,\\ \\text{no }x^{4}\\text{ term}}\\]",
    "trap": "Assuming that because $x^3$ appears, the neighbouring power $x^4$ must also appear. The exponent $15-3r$ only takes values $\\equiv 0 \\pmod 3$ (i.e. $15,12,9,\\dots$), so $x^4$ is structurally impossible even though $x^3$ exists.",
    "solutions": [
      {
        "name": "One equation, two targets",
        "steps": [
          "General term: $T_{r+1}=\\binom{15}{r}x^{15-r}(-1)^r x^{-2r}=\\binom{15}{r}(-1)^r x^{15-3r}$.",
          "For $x^3$: $15-3r=3\\Rightarrow r=4$, an integer; coefficient $\\binom{15}{4}(-1)^4=1365$.",
          "For $x^4$: $15-3r=4\\Rightarrow r=\\tfrac{11}{3}\\notin\\mathbb{Z}$, so $\\boxed{\\text{no }x^4\\text{ term}}$ while the $x^3$ coefficient is $1365$."
        ]
      },
      {
        "name": "Residue argument",
        "steps": [
          "Every exponent equals $15-3r$, hence $\\equiv 0\\pmod 3$ for all $r$.",
          "$x^3$ has exponent $\\equiv 0$, attainable; $x^4$ has exponent $\\equiv 1$, never attainable.",
          "So only $x^3$ occurs, with coefficient $\\binom{15}{4}=1365$, and the $x^4$ term does not exist."
        ]
      }
    ],
    "remark": "Insight: the set of achievable exponents is an arithmetic progression; whole bands of powers are simply absent."
  },
  {
    "theme": "genterm",
    "themeLabel": "The General Term",
    "title": "Recovering the Hidden Constant",
    "difficulty": 4,
    "task": "Find a",
    "tags": [
      "general term",
      "parameter",
      "constant term",
      "inverse problem"
    ],
    "statement": "Let $a>0$. The term independent of $x$ in the expansion of $\\left(ax+\\dfrac{1}{x^{2}}\\right)^{9}$ equals $5376$. Find $a$.",
    "answer": "\\[\\boxed{a=2}\\]",
    "trap": "Solving $\\binom{9}{r}a^{9-r}=5376$ at the wrong $r$ — e.g. taking $r$ from the power of the SECOND bracket ($2r$) rather than balancing both. Only $r=3$ makes the exponent $9-3r=0$; using $r=6$ (the count of $x^{-2}$ factors) gives $\\binom{9}{6}a^{3}=5376\\Rightarrow a=4$, which actually yields a constant term of $344064$, not $5376$.",
    "solutions": [
      {
        "name": "Locate r, then solve for a",
        "steps": [
          "General term: $T_{r+1}=\\binom{9}{r}(ax)^{9-r}(x^{-2})^{r}=\\binom{9}{r}a^{9-r}x^{9-r-2r}$.",
          "Constant term: $9-3r=0\\Rightarrow r=3$, so the term is $\\binom{9}{3}a^{6}=84\\,a^{6}$.",
          "Set $84a^6=5376\\Rightarrow a^6=64\\Rightarrow a=\\boxed{2}$ (taking $a>0$)."
        ]
      },
      {
        "name": "Factor the target",
        "steps": [
          "$5376=84\\cdot 64$ and $\\binom{9}{3}=84$, so the unknown factor is $a^{6}=64$.",
          "Since $64=2^6$ and $a>0$, we get $a=2$.",
          "Hence $a=\\boxed{2}$."
        ]
      }
    ],
    "remark": "Insight: the inverse problem still begins by fixing $r$ from the exponent equation; the data only enters after $r$ is pinned down."
  },
  {
    "theme": "genterm",
    "themeLabel": "The General Term",
    "title": "A Product's Quiet Center",
    "difficulty": 5,
    "task": "Find the term",
    "tags": [
      "general term",
      "product expansion",
      "constant term",
      "convolution"
    ],
    "statement": "Find the term independent of $x$ in the expansion of $\\left(2x^{2}-\\dfrac{3}{x}\\right)^{6}\\,(1+x)^{3}$.",
    "answer": "\\[\\boxed{1944}\\]",
    "trap": "Finding the constant term of $\\left(2x^2-\\tfrac{3}{x}\\right)^6$ alone (which is $4860$) and ignoring $(1+x)^3$ — or assuming every factor $x^{j}$ ($j=0,1,2,3$) from $(1+x)^3$ pairs with a valid term. Pairing requires the first factor to supply $x^{-j}$, i.e. $12-3r=-j$; this is integer-solvable for $r\\in\\{0,\\dots,6\\}$ only at $j=0$ and $j=3$, not at $j=1,2$.",
    "solutions": [
      {
        "name": "Pair powers across factors",
        "steps": [
          "From $(1+x)^3$ take $\\binom{3}{j}x^{j}$; from $\\left(2x^2-\\tfrac3x\\right)^6$ the general term $\\binom{6}{r}(2x^2)^{6-r}\\left(-\\tfrac3x\\right)^r$ carries power $2(6-r)-r=12-3r$.",
          "Need $12-3r+j=0$, i.e. $r=\\dfrac{12+j}{3}$. An integer $r\\in\\{0,\\dots,6\\}$ exists only when $3\\mid j$, so only $j=0\\,(r=4)$ and $j=3\\,(r=5)$ contribute.",
          "$j=0$: $\\binom{3}{0}\\binom{6}{4}2^{2}(-3)^{4}=1\\cdot15\\cdot4\\cdot81=4860$; $\\ j=3$: $\\binom{3}{3}\\binom{6}{5}2^{1}(-3)^{5}=1\\cdot6\\cdot2\\cdot(-243)=-2916$. Sum $=4860-2916=\\boxed{1944}$."
        ]
      },
      {
        "name": "Coefficient convolution",
        "steps": [
          "Write $A(x)=\\left(2x^2-\\tfrac3x\\right)^6$; the constant term of $A\\cdot(1+x)^3$ is $\\displaystyle\\sum_{j=0}^{3} \\binom{3}{j}\\,[x^{-j}]A$.",
          "$[x^{-j}]A$ is nonzero only when $12-3r=-j$ has a root $r\\in\\{0,\\dots,6\\}$, i.e. $j\\in\\{0,3\\}$; here $[x^{0}]A=4860$ and $[x^{-3}]A=\\binom{6}{5}2(-3)^5=-2916$.",
          "Hence the constant term is $\\binom{3}{0}\\cdot4860+\\binom{3}{3}\\cdot(-2916)=4860-2916=\\boxed{1944}$."
        ]
      }
    ],
    "remark": "Insight: a product expands by convolution, but most cross-pairings vanish because the two exponent ladders ($12-3r$ from one factor, $j$ from the other) live in fixed residue classes mod $3$ that only align for $j\\equiv0\\pmod 3$."
  },
  {
    "theme": "genterm",
    "themeLabel": "The General Term",
    "title": "A Ladder of Centers",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "general term",
      "constant term",
      "central binomial",
      "summation"
    ],
    "statement": "For each integer $k\\ge1$, let $c_k$ denote the term independent of $x$ in the expansion of $\\left(x+\\dfrac{1}{x}\\right)^{2k}$. Evaluate $\\displaystyle\\sum_{k=1}^{5}c_k$.",
    "answer": "\\[\\boxed{350}\\]",
    "trap": "Treating the constant term of $\\left(x+\\tfrac1x\\right)^{2k}$ as the middle binomial coefficient but mislabelling its position — taking $T_{k}$ (index $r=k-1$) instead of $T_{k+1}$ (index $r=k$). The off-by-one gives $\\binom{2k}{k-1}$, not the central $\\binom{2k}{k}$, and the wrong running sum collapses to $286$.",
    "solutions": [
      {
        "name": "Identify the constant term",
        "steps": [
          "General term: $\\binom{2k}{r}x^{2k-r}x^{-r}=\\binom{2k}{r}x^{2k-2r}$; constant when $2k-2r=0$, i.e. $r=k$.",
          "Thus $c_k=\\binom{2k}{k}$, the central binomial coefficient.",
          "$\\sum_{k=1}^5\\binom{2k}{k}=2+6+20+70+252=\\boxed{350}$."
        ]
      },
      {
        "name": "Tabulate central binomials",
        "steps": [
          "The constants are $\\binom{2}{1},\\binom{4}{2},\\binom{6}{3},\\binom{8}{4},\\binom{10}{5}=2,6,20,70,252$.",
          "These are exactly the $r=k$ (middle) terms, never $r=k\\pm1$.",
          "Their sum is $350=\\boxed{350}$."
        ]
      }
    ],
    "remark": "Insight: in $\\left(x+\\tfrac1x\\right)^{2k}$ the lone surviving constant is the central coefficient $\\binom{2k}{k}$ — the off-by-one in $r$ is the entire trap."
  },
  {
    "theme": "genterm",
    "themeLabel": "The General Term",
    "title": "Counting the Whole Powers",
    "difficulty": 5,
    "task": "Find the number of",
    "tags": [
      "general term",
      "fractional powers",
      "integer exponent",
      "counting",
      "constant term"
    ],
    "statement": "In the expansion of $\\left(\\sqrt{x}+\\dfrac{1}{\\sqrt[3]{x}}\\right)^{15}$, find the number of terms in which $x$ appears with an integer (possibly zero or negative) exponent, and state the value of the term independent of $x$.",
    "answer": "\\[\\boxed{3\\text{ terms};\\ \\text{constant term}=5005}\\]",
    "trap": "Counting only the single constant term, or assuming every term has a fractional power so the count is $0$. The exponent $\\tfrac{45-5r}{6}$ is an integer whenever $6\\mid(45-5r)$, i.e. $r\\equiv 3\\pmod 6$, giving three values $r=3,9,15$ — only one of which ($r=9$) is the constant.",
    "solutions": [
      {
        "name": "Congruence on the exponent",
        "steps": [
          "General term exponent: $\\tfrac12(15-r)-\\tfrac13 r=\\dfrac{45-5r}{6}$.",
          "Integer exponent $\\iff 6\\mid 45-5r$. Since $45\\equiv3$ and $5r\\equiv -r\\pmod6$, need $3-(-r)\\equiv0$, i.e. $r\\equiv 3\\pmod6$: $r=3,9,15$ — three terms.",
          "The constant term is at $45-5r=0\\Rightarrow r=9$: value $\\binom{15}{9}=\\boxed{5005}$, and the count of integer-power terms is $3$."
        ]
      },
      {
        "name": "Scan all r",
        "steps": [
          "Exponents for $r=0,\\dots,15$ are $\\tfrac{45-5r}{6}$; these run $\\tfrac{15}{2},\\tfrac{20}{3},\\dots$ and hit integers only at $r=3,9,15$, namely $+5,0,-5$.",
          "Hence exactly $3$ terms have integer powers.",
          "Among them $r=9$ gives the constant term $\\binom{15}{9}=5005$, so the answers are $3$ and $5005$."
        ]
      }
    ],
    "remark": "Insight: 'integer power' is a finer sieve than 'constant power' — both are congruence conditions, and the constant term is just one element of the integer-power set."
  },
  {
    "theme": "genterm",
    "themeLabel": "The General Term",
    "title": "When the Center Is Forbidden",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "general term",
      "nonexistence",
      "smallest positive power",
      "negative powers"
    ],
    "statement": "For the expansion of $\\left(x^{3}-\\dfrac{1}{x^{2}}\\right)^{12}$, determine whether a term independent of $x$ exists. If it does not, find the term with the smallest positive power of $x$ and give its coefficient.",
    "answer": "\\[\\boxed{\\text{no constant term};\\ \\text{coeff of }x^{1}=-792}\\]",
    "trap": "Solving $3(12-r)-2r=0\\Rightarrow r=\\tfrac{36}{5}$ and rounding to $r=7$ to force a 'constant term'. Rounding $r$ is illegal: $r$ must be an exact non-negative integer, so no constant term exists; one must instead minimise the positive exponent over integer $r$.",
    "solutions": [
      {
        "name": "Exponent ladder",
        "steps": [
          "General term exponent: $3(12-r)-2r=36-5r$ for $r=0,1,\\dots,12$.",
          "$36-5r=0$ needs $r=7.2\\notin\\mathbb{Z}$, so there is no constant term; the exponents are $36,31,26,21,16,11,6,1,-4,\\dots$",
          "The smallest positive value is $1$ at $r=7$: coefficient $\\binom{12}{7}(-1)^7=792\\cdot(-1)=\\boxed{-792}$."
        ]
      },
      {
        "name": "Minimise positive exponent",
        "steps": [
          "Positive exponents occur for $36-5r>0\\Rightarrow r\\le 7$; the smallest positive one is at the largest such $r$, namely $r=7$, giving exponent $1$.",
          "Coefficient: $\\binom{12}{7}=792$ with sign $(-1)^7=-1$.",
          "Thus the answer is no constant term and $x^1$ coefficient $-792$."
        ]
      }
    ],
    "remark": "Insight: when $r=\\tfrac{36}{5}$ is fractional the constant term is genuinely absent; the natural fallback is the nearest achievable (integer-$r$) power, here $x^1$."
  },
  {
    "theme": "genterm",
    "themeLabel": "The General Term",
    "title": "Two Clues, One Expansion",
    "difficulty": 5,
    "task": "Find a,b",
    "tags": [
      "general term",
      "parameter",
      "constant term",
      "binomial coefficient",
      "system"
    ],
    "statement": "Let $a>0$ and $n$ be a positive integer. The expansion of $\\left(ax^{3}+\\dfrac{1}{x^{2}}\\right)^{n}$ has a term independent of $x$; the binomial coefficient of that constant term equals $210$, and the constant term itself equals $3360$. Find $n$ and $a$.",
    "answer": "\\[\\boxed{(n,a)=(10,2)}\\]",
    "trap": "Using the constant-term value $3360$ alone to solve for $a$ while guessing $n$, or assuming the binomial coefficient $210=\\binom{n}{r}$ pins $n$ without checking $5\\mid n$. The constant term requires $r=\\tfrac{3n}{5}$ (so $5\\mid n$), and only $n=10$ makes $\\binom{n}{3n/5}=\\binom{10}{6}=210$; the other pairs solving $\\binom{n}{r}=210$ (such as $(n,r)=(21,2)$ or $(210,1)$) are all ruled out by this constraint.",
    "solutions": [
      {
        "name": "Constraint then coefficient then value",
        "steps": [
          "General term exponent: $3(n-r)-2r=3n-5r$; the constant term needs $3n-5r=0$, i.e. $r=\\tfrac{3n}{5}$, so $5\\mid n$.",
          "Among $n=5,10,15,20$ the binomial coefficient is $\\binom{5}{3}=10,\\ \\binom{10}{6}=210,\\ \\binom{15}{9}=5005,\\ \\binom{20}{12}=125970$; only $n=10$ gives $210$, so $n=10$ and $r=6$.",
          "Constant term $=\\binom{10}{6}a^{10-6}=210\\,a^{4}=3360\\Rightarrow a^4=16\\Rightarrow a=2$. Hence $(n,a)=\\boxed{(10,2)}$."
        ]
      },
      {
        "name": "Solve the system directly",
        "steps": [
          "Let $r=\\tfrac{3n}{5}$ (an integer, so $5\\mid n$). The two conditions are $\\binom{n}{r}=210$ and $\\binom{n}{r}a^{\\,n-r}=3360$.",
          "Dividing the second by the first gives $a^{\\,n-r}=\\tfrac{3360}{210}=16$; the first condition together with $5\\mid n$ forces $n=10$, $r=6$, so $n-r=4$.",
          "Then $a^4=16\\Rightarrow a=2$ (as $a>0$), so $(n,a)=\\boxed{(10,2)}$."
        ]
      }
    ],
    "remark": "Insight: the divisibility constraint $5\\mid n$ collapses the otherwise-ambiguous equation $\\binom{n}{r}=210$ (which also has solutions $(21,2)$ and $(210,1)$) to a unique $n=10$; the value condition then fixes $a$ cleanly."
  },
  {
    "theme": "middlegreatest",
    "themeLabel": "Middle & Greatest Term",
    "title": "The Term That Isn't Where You Look",
    "difficulty": 3,
    "task": "Determine",
    "tags": [
      "greatest term",
      "ratio test",
      "numerical expansion",
      "binomial"
    ],
    "statement": "Consider the numerical expansion of $(2+3)^{10}$, written term by term as $\\displaystyle\\sum_{r=0}^{10}\\binom{10}{r}2^{10-r}3^{r}$ (do not collapse it to $5^{10}$). Determine the greatest term in this expansion and its position $T_k$.",
    "answer": "\\[\\boxed{T_{7}=2449440}\\]",
    "trap": "Assuming the greatest term sits at the centre $T_6$ (the position of the greatest binomial coefficient $\\binom{10}{5}$). The factor $(b/a)^r=(3/2)^r$ grows with $r$ and pulls the maximum past the centre; the greatest coefficient and the greatest term live at different indices.",
    "solutions": [
      {
        "name": "Ratio test",
        "steps": [
          "With $T_{r+1}=\\binom{10}{r}2^{10-r}3^{r}$, form $\\dfrac{T_{r+1}}{T_r}=\\dfrac{10-r+1}{r}\\cdot\\dfrac{3}{2}=\\dfrac{3(11-r)}{2r}$.",
          "Set $\\dfrac{3(11-r)}{2r}\\ge 1\\Rightarrow 33-3r\\ge 2r\\Rightarrow r\\le 6.6$, so terms increase up to $r=6$ and decrease after.",
          "Hence the maximum is at $r=6$, i.e. $T_7=\\binom{10}{6}2^{4}3^{6}=210\\cdot16\\cdot729=2449440$."
        ]
      },
      {
        "name": "Direct comparison of neighbours",
        "steps": [
          "Compute $T_6=\\binom{10}{5}2^{5}3^{5}=252\\cdot32\\cdot243=1959552$ and $T_7=2449440$, so $T_7>T_6$.",
          "Compute $T_8=\\binom{10}{7}2^{3}3^{7}=120\\cdot8\\cdot2187=2099520<T_7$.",
          "Since the term to the left and the term to the right are both smaller, $T_7=2449440$ is the greatest."
        ]
      }
    ],
    "remark": "Insight: the greatest binomial coefficient is a property of $n$ alone, but the greatest term also feels the ratio $b/a$. Only when $a=b$ do the two coincide."
  },
  {
    "theme": "middlegreatest",
    "themeLabel": "Middle & Greatest Term",
    "title": "A Coefficient and a Term Walk Into a Boundary",
    "difficulty": 3,
    "task": "Find a,b",
    "tags": [
      "greatest term",
      "greatest coefficient",
      "tie",
      "boundary case"
    ],
    "statement": "For the expansion of $(1+3)^{15}=\\displaystyle\\sum_{r=0}^{15}\\binom{15}{r}3^{r}$, let $G$ be the value of the greatest binomial coefficient appearing in $(1+x)^{15}$ and let $M$ be the value of the greatest numerical term of $(1+3)^{15}$. Find the ordered pair $(G,\\,M)$, and state how many distinct terms attain the value $M$.",
    "answer": "\\[\\boxed{(G,M)=(6435,\\ 241805655),\\ \\text{attained by }2\\text{ terms }(T_{12},T_{13})}\\]",
    "trap": "Taking the ratio test boundary $r\\le 12$ to mean a single greatest term $T_{13}$. Equality holds exactly at $r=12$, so $T_{12}=T_{13}$ tie; reporting only one term misses half the answer.",
    "solutions": [
      {
        "name": "Two separate analyses",
        "steps": [
          "Greatest binomial coefficient of $(1+x)^{15}$ is the central pair $\\binom{15}{7}=\\binom{15}{8}=6435$, so $G=6435$.",
          "For the greatest term, $\\dfrac{T_{r+1}}{T_r}=\\dfrac{15-r+1}{r}\\cdot 3=\\dfrac{3(16-r)}{r}\\ge 1\\Rightarrow 48-3r\\ge r\\Rightarrow r\\le 12$, with equality at $r=12$.",
          "Thus $T_{12}=T_{13}$ and both equal the maximum $M=\\binom{15}{12}3^{12}=455\\cdot531441=241805655$; two terms attain it."
        ]
      },
      {
        "name": "Explicit equality check",
        "steps": [
          "$T_{12}=\\binom{15}{11}3^{11}$ and $T_{13}=\\binom{15}{12}3^{12}$; their ratio is $\\dfrac{\\binom{15}{12}}{\\binom{15}{11}}\\cdot 3=\\dfrac{15-11}{12}\\cdot 3=\\dfrac{4}{12}\\cdot 3=1$, confirming a tie.",
          "Numerically $T_{12}=T_{13}=241805655=M$, while $G=\\binom{15}{7}=6435$ is unrelated to $M$.",
          "Hence $(G,M)=(6435,241805655)$ with exactly two greatest terms."
        ]
      }
    ],
    "remark": "Insight: the ratio test's boundary $r\\le k$ silently includes the case of equality, which produces a genuine two-term tie. Strict vs. weak inequality is the whole answer here."
  },
  {
    "theme": "middlegreatest",
    "themeLabel": "Middle & Greatest Term",
    "title": "Two Middles, One Winner",
    "difficulty": 4,
    "task": "Determine",
    "tags": [
      "middle term",
      "odd power",
      "magnitude",
      "negative term"
    ],
    "statement": "The expansion of $\\left(x-\\dfrac{2}{x^{2}}\\right)^{9}$ has two middle terms. Evaluating both at $x=1$, determine which one is greater in absolute value and report that larger magnitude together with the actual (signed) values of the two middle terms at $x=1$.",
    "answer": "\\[\\boxed{|T_{6}|=4032>|T_{5}|=2016;\\quad T_{5}=2016,\\ T_{6}=-4032}\\]",
    "trap": "Declaring the two middle terms equal in magnitude because $\\binom{9}{4}=\\binom{9}{5}$. The binomial coefficients are equal, but the powers of $(-2)$ differ ($(-2)^4$ vs $(-2)^5$), so the magnitudes are in ratio $1:2$, not $1:1$.",
    "solutions": [
      {
        "name": "General term",
        "steps": [
          "The general term is $T_{r+1}=\\binom{9}{r}x^{9-r}\\left(-\\dfrac{2}{x^{2}}\\right)^{r}=\\binom{9}{r}(-2)^{r}x^{9-3r}$.",
          "Since $n=9$ is odd, there are $10$ terms, so the two middle terms are the $5$th and $6$th: $T_5$ ($r=4$) and $T_6$ ($r=5$). Thus $T_5=\\binom{9}{4}(-2)^4x^{-3}=2016\\,x^{-3}$ and $T_6=\\binom{9}{5}(-2)^5x^{-6}=-4032\\,x^{-6}$.",
          "At $x=1$: $T_5=2016$, $T_6=-4032$, so $|T_6|=4032>|T_5|=2016$."
        ]
      },
      {
        "name": "Ratio of magnitudes",
        "steps": [
          "$\\dfrac{|T_6|}{|T_5|}=\\dfrac{\\binom{9}{5}}{\\binom{9}{4}}\\cdot|-2|=1\\cdot 2=2$ at $x=1$ (the two $x$-powers both equal $1$).",
          "So $|T_6|=2|T_5|$; with $|T_5|=\\binom{9}{4}\\cdot 16=126\\cdot 16=2016$ this gives $|T_6|=4032$.",
          "Restoring signs: $(-2)^4>0$ so $T_5=+2016$, while $(-2)^5<0$ so $T_6=-4032$; the greater magnitude is $4032$."
        ]
      }
    ],
    "remark": "Insight: equal binomial coefficients do not imply equal middle terms when the two binomial pieces ($a$ and $b$) carry different magnitudes; the extra factor of $|b/a|$ tips the balance, and the odd power on $b$ flips the sign."
  },
  {
    "theme": "middlegreatest",
    "themeLabel": "Middle & Greatest Term",
    "title": "Pin the Term, Free the x",
    "difficulty": 4,
    "task": "Find all",
    "tags": [
      "greatest term",
      "inverse problem",
      "interval",
      "ratio test"
    ],
    "statement": "In the expansion of $(1+x)^{21}$ with $x>0$, find all values of $x$ for which the sixth term $T_6$ is a greatest term of the expansion (greatest meaning $\\ge$ every other term).",
    "answer": "\\[\\boxed{\\dfrac{5}{17}\\le x\\le \\dfrac{3}{8}}\\]",
    "trap": "Solving only $T_6\\ge T_5$ and forgetting $T_6\\ge T_7$, which gives an unbounded ray $x\\ge 5/17$ instead of a finite interval. $T_6$ being greatest requires it to beat BOTH neighbours, so two inequalities bound it on each side.",
    "solutions": [
      {
        "name": "Two-sided neighbour inequalities",
        "steps": [
          "$\\dfrac{T_6}{T_5}=\\dfrac{21-5+1}{5}x=\\dfrac{17}{5}x\\ge 1\\Rightarrow x\\ge\\dfrac{5}{17}$.",
          "$\\dfrac{T_7}{T_6}=\\dfrac{21-6+1}{6}x=\\dfrac{16}{6}x\\le 1\\Rightarrow x\\le\\dfrac{6}{16}=\\dfrac{3}{8}$.",
          "Because the term sequence is unimodal in $r$, dominating both neighbours suffices, giving $\\dfrac{5}{17}\\le x\\le\\dfrac{3}{8}$."
        ]
      },
      {
        "name": "Unimodality argument",
        "steps": [
          "The ratio $\\dfrac{T_{r+1}}{T_r}=\\dfrac{22-r}{r}x$ is strictly decreasing in $r$, so the terms first rise then fall: there is a single peak (or a tied pair).",
          "$T_6$ is the peak exactly when the last increase reaches it ($T_6\\ge T_5$) and the first decrease leaves it ($T_6\\ge T_7$).",
          "These two conditions are $x\\ge 5/17$ and $x\\le 3/8$; endpoints give ties ($T_5=T_6$ and $T_6=T_7$ respectively), still 'greatest', so the closed interval $[5/17,3/8]$ is the full answer."
        ]
      }
    ],
    "remark": "Insight: 'which $x$ makes term $k$ greatest' is the ratio test read backwards. A single term being greatest is a two-sided condition, hence an interval, not a ray."
  },
  {
    "theme": "middlegreatest",
    "themeLabel": "Middle & Greatest Term",
    "title": "From a Central Coefficient to an Off-Centre Term",
    "difficulty": 4,
    "task": "Find a,b",
    "tags": [
      "central coefficient",
      "greatest term",
      "fused",
      "ratio test"
    ],
    "statement": "The greatest coefficient in the expansion of $(1+x)^{2n}$ equals $924$. Use this to fix $n$, then find the value and the index $T_k$ of the greatest term of $(1+2)^{2n}=\\displaystyle\\sum_{r=0}^{2n}\\binom{2n}{r}2^{r}$.",
    "answer": "\\[\\boxed{n=6,\\quad T_{9}=126720}\\]",
    "trap": "Assuming that because the greatest coefficient sits at the middle term $T_{n+1}=T_7$ of $(1+x)^{12}$, the greatest numerical term of $(1+2)^{12}$ is also $T_7=\\binom{12}{6}2^{6}=59136$. The factor $2^{r}$ shifts the greatest term rightward to $T_9$.",
    "solutions": [
      {
        "name": "Solve for n, then ratio test",
        "steps": [
          "The coefficients of $(1+x)^{2n}$ increase up to the central term and then decrease, so the greatest coefficient is $\\binom{2n}{n}$. Setting $\\binom{2n}{n}=924=\\binom{12}{6}$ gives $2n=12$, hence $n=6$.",
          "For $(1+2)^{12}$ write $T_{r+1}=\\binom{12}{r}2^{r}$. Then $\\dfrac{T_{r+1}}{T_r}=\\dfrac{12-r+1}{r}\\cdot 2=\\dfrac{2(13-r)}{r}\\ge 1\\iff 26-2r\\ge r\\iff r\\le \\tfrac{26}{3}=8.67$, so the ratio exceeds $1$ for the last time at $r=8$ and the peak term is $T_9$.",
          "Thus $T_9=\\binom{12}{8}2^{8}=495\\cdot256=126720$."
        ]
      },
      {
        "name": "Neighbour check",
        "steps": [
          "After finding $n=6$, test the terms adjacent to $T_9$ directly: $T_8=\\binom{12}{7}2^{7}=792\\cdot128=101376<T_9$.",
          "$T_{10}=\\binom{12}{9}2^{9}=220\\cdot512=112640<T_9=126720$.",
          "Both immediate neighbours are smaller, and the term sequence is unimodal, so $T_9=126720$ is the greatest term."
        ]
      }
    ],
    "remark": "Insight: a problem can hand you the centre of the coefficient world and then quietly move the goalposts by inserting a numerical ratio $b/a\\ne 1$. The greatest coefficient (a property of the binomials alone) and the greatest term (which also feels the powers of $2$) decouple, and the peak slides to $T_9$."
  },
  {
    "theme": "middlegreatest",
    "themeLabel": "Middle & Greatest Term",
    "title": "The Equinox Term",
    "difficulty": 4,
    "task": "Determine",
    "tags": [
      "greatest term",
      "substitution",
      "tie",
      "boundary case"
    ],
    "statement": "Determine the numerically greatest term in the expansion of $(3+2x)^{15}$ when $x=\\dfrac{5}{2}$, and state how many terms achieve this maximum value.",
    "answer": "\\[\\boxed{T_{10}=T_{11}=7126259765625\\ \\text{(two greatest terms)}}\\]",
    "trap": "Treating $(3+2x)^{15}$ at $x=5/2$ as a $(3+5x)$-style problem without first reducing $2x=5$; or, after getting the boundary condition $r\\le 10$, misreading the equality. The ratio that equals $1$ is $T_{r+1}/T_r$ at $r=10$, i.e. $T_{11}/T_{10}=1$ — so the tie is $T_{10}=T_{11}$, NOT $T_{11}=T_{12}$. Reporting $T_{11}=T_{12}$ is an off-by-one error: $T_{12}/T_{11}=25/33<1$, so $T_{12}$ is already smaller.",
    "solutions": [
      {
        "name": "Reduce then ratio test",
        "steps": [
          "At $x=5/2$, $2x=5$, so term by term the expansion equals $(3+5)^{15}=\\sum_{r=0}^{15}\\binom{15}{r}3^{15-r}5^{r}$ with general term $T_{r+1}=\\binom{15}{r}3^{15-r}5^{r}$.",
          "$\\dfrac{T_{r+1}}{T_r}=\\dfrac{15-r+1}{r}\\cdot\\dfrac{5}{3}=\\dfrac{5(16-r)}{3r}\\ge 1\\Rightarrow 80-5r\\ge 3r\\Rightarrow r\\le 10$, with equality at $r=10$.",
          "Equality at $r=10$ means $T_{11}/T_{10}=1$, so $T_{10}=T_{11}$ are the two greatest terms (indices $r=9$ and $r=10$).",
          "Their common value is $\\binom{15}{9}3^{6}5^{9}=\\binom{15}{10}3^{5}5^{10}=5005\\cdot729\\cdot1953125=3003\\cdot243\\cdot9765625=7126259765625$."
        ]
      },
      {
        "name": "Verify the tie ratio directly",
        "steps": [
          "$\\dfrac{T_{10}}{T_{9}}=\\dfrac{16-9}{9}\\cdot\\dfrac{5}{3}=\\dfrac{7}{9}\\cdot\\dfrac{5}{3}=\\dfrac{35}{27}>1$, so the terms are still rising into $T_{10}$.",
          "$\\dfrac{T_{11}}{T_{10}}=\\dfrac{16-10}{10}\\cdot\\dfrac{5}{3}=\\dfrac{6}{10}\\cdot\\dfrac{5}{3}=1$ exactly, hence $T_{11}=T_{10}$ — the maximum is shared.",
          "$\\dfrac{T_{12}}{T_{11}}=\\dfrac{16-11}{11}\\cdot\\dfrac{5}{3}=\\dfrac{5}{11}\\cdot\\dfrac{5}{3}=\\dfrac{25}{33}<1$, so $T_{12}<T_{11}$ and the terms now fall. The tied pair $T_{10}=T_{11}=7126259765625$ is therefore the unique maximum value, achieved by exactly two terms."
        ]
      }
    ],
    "remark": "Insight: a clean tie is engineered by choosing $a,b,n$ so the ratio test hits exactly $1$ at an integer $r$. The decisive bookkeeping is which two indices share the value: if $T_{r+1}/T_r=1$ at $r=r_0$, the tied pair is $T_{r_0}=T_{r_0+1}$. Here $r_0=10$ gives $T_{10}=T_{11}$. Always substitute the value of $x$ first; the effective second part is $bx=2\\cdot\\tfrac52=5$, not $x$."
  },
  {
    "theme": "middlegreatest",
    "themeLabel": "Middle & Greatest Term",
    "title": "Three in a Row Pin the Centre",
    "difficulty": 4,
    "task": "Find a,b",
    "tags": [
      "consecutive coefficients",
      "greatest coefficient",
      "ratios",
      "central term"
    ],
    "statement": "In the expansion of $(1+x)^{n}$, three consecutive binomial coefficients are in the ratio $1:7:35$. Determine $n$, and hence find the value of the greatest binomial coefficient of $(1+x)^{n}$.",
    "answer": "\\[\\boxed{n=23,\\quad \\binom{23}{11}=\\binom{23}{12}=1352078}\\]",
    "trap": "Setting up the chain ratios as $\\binom{n}{r}:\\binom{n}{r+1}=1:7$ correctly, but then writing the greatest (central) coefficient as $\\binom{n}{n/2}$. Here $n=23$ is odd, so $n/2=11.5$ is not an integer and there is no single central coefficient: the maximum is the equal twin pair $\\binom{23}{11}=\\binom{23}{12}$, not a fictitious $\\binom{23}{11.5}$.",
    "solutions": [
      {
        "name": "Consecutive-coefficient equations",
        "steps": [
          "Let the three consecutive coefficients be $\\binom{n}{r},\\binom{n}{r+1},\\binom{n}{r+2}$. Then $\\dfrac{\\binom{n}{r+1}}{\\binom{n}{r}}=\\dfrac{n-r}{r+1}=\\dfrac{7}{1}=7$ and $\\dfrac{\\binom{n}{r+2}}{\\binom{n}{r+1}}=\\dfrac{n-r-1}{r+2}=\\dfrac{35}{7}=5$.",
          "Solve: $n-r=7(r+1)\\Rightarrow n=8r+7$; and $n-r-1=5(r+2)\\Rightarrow n=6r+11$.",
          "Equate: $8r+7=6r+11\\Rightarrow 2r=4\\Rightarrow r=2,\\ n=23$. Check: $\\binom{23}{2}:\\binom{23}{3}:\\binom{23}{4}=253:1771:8855=1:7:35.$ The solution $(n,r)=(23,2)$ is unique."
        ]
      },
      {
        "name": "Greatest coefficient for odd n",
        "steps": [
          "With $n=23$ odd, the binomial coefficients strictly increase up to the middle and the maximum is shared by the twin terms $\\binom{23}{11}$ and $\\binom{23}{12}$ (equal by the symmetry $\\binom{n}{k}=\\binom{n}{n-k}$).",
          "Indeed $\\dfrac{\\binom{23}{k}}{\\binom{23}{k-1}}=\\dfrac{24-k}{k}>1\\iff k<12$, so the ratio exceeds $1$ for $k\\le 11$ and drops below $1$ for $k\\ge 12$: the peak straddles $k=11,12$.",
          "Hence the greatest binomial coefficient is $\\binom{23}{11}=\\binom{23}{12}=1352078$, attained by two consecutive terms."
        ]
      }
    ],
    "remark": "Insight: integer ratios of three consecutive coefficients pin $n$ uniquely through two linear equations. The odd-$n$ subtlety, twin central coefficients rather than one, is the conceptual sting, not the algebra."
  },
  {
    "theme": "middlegreatest",
    "themeLabel": "Middle & Greatest Term",
    "title": "Greatest by Magnitude, Greatest in Sign",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "greatest term",
      "alternating sign",
      "magnitude",
      "ratio test"
    ],
    "statement": "In the expansion of $(2-3x)^{13}$ evaluated at $x=2$, determine the numerically greatest term (largest in absolute value), and state both its value and whether that term is positive or negative.",
    "answer": "\\[\\boxed{T_{11}=+138346610688}\\]",
    "trap": "Applying the ratio test to the signed terms $T_{r+1}=\\binom{13}{r}2^{13-r}(-6)^r$ directly. The alternating sign makes consecutive signed terms swap order each step (every signed ratio is negative), so a naive ratio test gives nonsense; it must be run on $|T_{r+1}/T_r|$, and only afterward is the sign of the winning term restored from the parity of $r$.",
    "solutions": [
      {
        "name": "Magnitude ratio test",
        "steps": [
          "At $x=2$, $-3x=-6$, so $T_{r+1}=\\binom{13}{r}2^{13-r}(-6)^r$ and $|T_{r+1}|=\\binom{13}{r}2^{13-r}6^{r}$, i.e. the magnitudes are exactly the terms of $(2+6)^{13}$.",
          "$\\dfrac{|T_{r+1}|}{|T_r|}=\\dfrac{13-r+1}{r}\\cdot\\dfrac{6}{2}=\\dfrac{3(14-r)}{r}\\ge 1\\Rightarrow 42-3r\\ge r\\Rightarrow r\\le 10.5$, so the magnitude increases up to $r=10$ and decreases after; the peak magnitude is at $r=10$, i.e. $T_{11}$.",
          "$|T_{11}|=\\binom{13}{10}2^{3}6^{10}=286\\cdot8\\cdot60466176=138346610688$. The sign is $(-6)^{10}>0$, so $T_{11}=+138346610688$."
        ]
      },
      {
        "name": "Neighbour magnitudes plus sign bookkeeping",
        "steps": [
          "$|T_{10}|=\\binom{13}{9}2^{4}6^{9}=715\\cdot16\\cdot10077696=115288842240<|T_{11}|$ and $|T_{12}|=\\binom{13}{11}2^{2}6^{11}=78\\cdot4\\cdot362797056=113192681472<|T_{11}|$.",
          "Since $T_{11}$ exceeds both neighbours in magnitude and magnitudes are unimodal, $|T_{11}|=138346610688$ is the global maximum magnitude.",
          "$T_{11}$ carries the factor $(-6)^{10}$, which is positive; hence the numerically greatest term equals $+138346610688$."
        ]
      }
    ],
    "remark": "Insight: with a negative second part, the ratio test is a statement about magnitudes only; the sign is a separate, parity-driven afterthought. Here every signed ratio $T_{r+1}/T_r=-\\tfrac{3(14-r)}{r}$ is negative, so the signed terms never settle into a single increasing-then-decreasing pattern. Run the test on $|T_{r+1}/T_r|$, then restore the sign of the winner from the parity of $r$. Mixing the two is the classic error."
  },
  {
    "theme": "middlegreatest",
    "themeLabel": "Middle & Greatest Term",
    "title": "The Constant Middle, the Wandering Greatest",
    "difficulty": 5,
    "task": "Find a,b",
    "tags": [
      "middle term",
      "x-independent term",
      "greatest term",
      "fused"
    ],
    "statement": "The expansion of $\\left(x+\\dfrac{1}{x}\\right)^{2n}$ has a single middle term that is independent of $x$, and that constant equals $70$. Fix $n$, then determine the greatest term and its index $T_k$ in the expansion of $\\left(x+\\dfrac{1}{x}\\right)^{2n}$ when $x=2$.",
    "answer": "\\[\\boxed{n=4,\\quad T_{2}=512}\\]",
    "trap": "Assuming that since the middle term $T_{n+1}=T_5$ carries the greatest binomial coefficient, it is also the greatest term at $x=2$. With $x=2$ the powers $x^{2n-2r}=2^{8-2r}$ decay fast, dragging the greatest term all the way to $T_2$, far from the middle.",
    "solutions": [
      {
        "name": "Find n, then evaluate at x=2",
        "steps": [
          "Middle term of $\\left(x+\\tfrac1x\\right)^{2n}$ is $T_{n+1}=\\binom{2n}{n}x^{n}x^{-n}=\\binom{2n}{n}$; setting $\\binom{2n}{n}=70=\\binom{8}{4}$ gives $2n=8$, $n=4$.",
          "The general term of $\\left(x+\\tfrac1x\\right)^{8}$ at $x=2$ is $T_{r+1}=\\binom{8}{r}2^{8-2r}$. Compute: $T_1=256,\\ T_2=512,\\ T_3=448,\\ T_4=224,\\dots$",
          "The values fall after $T_2$, so the greatest term is $T_2=\\binom{8}{1}2^{6}=8\\cdot64=512$."
        ]
      },
      {
        "name": "Ratio test on the evaluated terms",
        "steps": [
          "$\\dfrac{T_{r+1}}{T_r}=\\dfrac{\\binom{8}{r}2^{8-2r}}{\\binom{8}{r-1}2^{10-2r}}=\\dfrac{8-r+1}{r}\\cdot\\dfrac{1}{4}=\\dfrac{9-r}{4r}$.",
          "Set $\\dfrac{9-r}{4r}\\ge 1\\Rightarrow 9-r\\ge 4r\\Rightarrow r\\le 1.8$, so terms rise only up to $r=1$ then fall: peak at $T_2$.",
          "Thus $T_2=\\binom{8}{1}2^{6}=512$ is the greatest term, nowhere near the middle term $T_5=70$."
        ]
      }
    ],
    "remark": "Insight: the $x$-free middle term and the greatest term answer two different questions. Evaluating at $x=2$ severely penalises large $r$, so 'middle' and 'greatest' diverge dramatically."
  },
  {
    "theme": "middlegreatest",
    "themeLabel": "Middle & Greatest Term",
    "title": "When the Central Term Reigns",
    "difficulty": 5,
    "task": "Find all",
    "tags": [
      "greatest term",
      "central coefficient",
      "interval",
      "coincidence"
    ],
    "statement": "For $(1+x)^{12}$ with $x>0$, the $7$th term $T_7$ is the term carrying the greatest binomial coefficient $\\binom{12}{6}$. Find all $x$ for which this same $T_7$ is also a greatest term (in value) of the expansion.",
    "answer": "\\[\\boxed{\\dfrac{6}{7}\\le x\\le \\dfrac{7}{6}}\\]",
    "trap": "Believing the greatest-coefficient term is automatically the greatest term, hence claiming all $x>0$ work, or only $x=1$. In fact the coincidence holds only on a symmetric window around $x=1$; outside it the greatest term drifts to a neighbour.",
    "solutions": [
      {
        "name": "Two-sided ratio inequalities",
        "steps": [
          "$\\dfrac{T_7}{T_6}=\\dfrac{12-6+1}{6}\\,x=\\dfrac{7}{6}x\\ge 1\\Rightarrow x\\ge\\dfrac{6}{7}$.",
          "$\\dfrac{T_8}{T_7}=\\dfrac{12-7+1}{7}\\,x=\\dfrac{6}{7}x\\le 1\\Rightarrow x\\le\\dfrac{7}{6}$.",
          "The ratio $\\dfrac{T_{k+1}}{T_k}=\\dfrac{13-k}{k}x$ is strictly decreasing in $k$, so the terms are unimodal; $T_7\\ge$ both neighbours therefore makes $T_7$ greatest, giving $\\dfrac{6}{7}\\le x\\le\\dfrac{7}{6}$ (endpoints give ties, still greatest)."
        ]
      },
      {
        "name": "Symmetry observation",
        "steps": [
          "The condition for the central index $r=6$ to host the peak is $\\dfrac{n-r+1}{r}x\\ge 1\\ge\\dfrac{n-r}{r+1}x$ with $n=12,\\ r=6$.",
          "This reads $\\dfrac{7}{6}x\\ge 1$ and $\\dfrac{6}{7}x\\le 1$, a window symmetric about $x=1$ under $x\\mapsto 1/x$.",
          "Solving gives $x\\in\\left[\\dfrac{6}{7},\\dfrac{7}{6}\\right]$, the exact set where the greatest term coincides with the greatest-coefficient term."
        ]
      }
    ],
    "remark": "Insight: the greatest coefficient and greatest term coincide only on a balanced neighbourhood of $x=1$, mirror-symmetric under $x\\leftrightarrow 1/x$. Outside it, the term that wins moves one slot over."
  },
  {
    "theme": "coefficients",
    "themeLabel": "Extracting Coefficients",
    "title": "The Cancelling Cross-Terms",
    "difficulty": 3,
    "task": "Evaluate",
    "tags": [
      "binomial",
      "product",
      "cross-terms",
      "convolution",
      "sign"
    ],
    "statement": "Find the coefficient of $x^4$ in the expansion of $(1+x)^6(1-x)^4$.",
    "answer": "\\[\\boxed{2}\\]",
    "trap": "Multiplying the leading coefficients $\\binom{6}{4}\\cdot\\binom{4}{0}=15$ (or grabbing any single product) ignores the convolution: every pair $(i,j)$ with $i+j=4$ contributes $\\binom{6}{i}\\binom{4}{j}(-1)^j$, and the minus signs from $(1-x)^4$ cause heavy cancellation down to $2$, not $15$.",
    "solutions": [
      {
        "name": "Direct convolution",
        "steps": [
          "Write $(1+x)^6=\\sum_i\\binom{6}{i}x^i$ and $(1-x)^4=\\sum_j\\binom{4}{j}(-1)^j x^j$.",
          "The coefficient of $x^4$ is $\\sum_{j=0}^{4}\\binom{6}{4-j}\\binom{4}{j}(-1)^j$.",
          "Compute: $\\binom{6}{4}-\\binom{6}{3}\\binom{4}{1}+\\binom{6}{2}\\binom{4}{2}-\\binom{6}{1}\\binom{4}{3}+\\binom{6}{0}\\binom{4}{4}$.",
          "$=15-80+90-24+1=2$, giving $\\boxed{2}$."
        ]
      },
      {
        "name": "Factor into a perfect square",
        "steps": [
          "Group $(1+x)^4(1-x)^4=(1-x^2)^4$, leaving one extra $(1+x)^2$.",
          "So the product is $(1+x)^2(1-x^2)^4=(1+2x+x^2)\\sum_{k}\\binom{4}{k}(-1)^k x^{2k}$.",
          "The $x^4$ term collects $1\\cdot\\big[x^4\\big](1-x^2)^4$ and $x^2\\cdot\\big[x^2\\big](1-x^2)^4$: namely $\\binom{4}{2}+\\binom{4}{1}(-1)$.",
          "$=6-4=2$, so the coefficient is $\\boxed{2}$."
        ]
      }
    ],
    "remark": "Insight: a product of $(1+x)$ and $(1-x)$ powers is best simplified by pairing them into $(1-x^2)$ blocks first; only the unpaired surplus factor needs a genuine convolution."
  },
  {
    "theme": "coefficients",
    "themeLabel": "Extracting Coefficients",
    "title": "Five Bounded Buckets",
    "difficulty": 4,
    "task": "Determine",
    "tags": [
      "bounded",
      "truncated-geometric",
      "inclusion-exclusion",
      "stars-and-bars",
      "convolution"
    ],
    "statement": "Determine the coefficient of $x^{12}$ in $(1+x+x^2+x^3+x^4)^5$.",
    "answer": "\\[\\boxed{320}\\]",
    "trap": "Treating each factor as the full geometric series $\\tfrac{1}{1-x}$ and answering $\\binom{12+4}{4}=\\binom{16}{4}=1820$ forgets that each bucket caps at $x^4$; the overflow terms must be subtracted via the $(1-x^5)^5$ numerator.",
    "solutions": [
      {
        "name": "Truncated-series inclusion-exclusion",
        "steps": [
          "Write $1+x+\\cdots+x^4=\\dfrac{1-x^5}{1-x}$, so the product is $(1-x^5)^5(1-x)^{-5}$.",
          "$[x^{12}]=\\sum_{j\\ge0}(-1)^j\\binom{5}{j}\\binom{12-5j+4}{4}$ (only $j=0,1,2$ survive).",
          "$=\\binom{16}{4}-5\\binom{11}{4}+10\\binom{6}{4}=1820-1650+150$.",
          "$=320$, hence $\\boxed{320}$."
        ]
      },
      {
        "name": "Symmetry reduction",
        "steps": [
          "Each exponent lies in $\\{0,1,2,3,4\\}$ summing to $12$; substitute $y_i=4-x_i\\in\\{0,\\dots,4\\}$.",
          "Then $\\sum y_i=20-12=8$, so the count of solutions to $\\sum x_i=12$ equals the count for $\\sum y_i=8$, i.e. $[x^8]$ of the same polynomial.",
          "Compute $[x^8]=\\binom{12}{4}-5\\binom{7}{4}+10\\binom{2}{4}=495-175+0=320$.",
          "Both routes give $\\boxed{320}$, confirming the symmetry about the mean exponent $10$."
        ]
      }
    ],
    "remark": "Insight: a capped repeated factor is $\\tfrac{1-x^{m}}{1-x}$ raised to a power; the $(1-x^m)$ numerator is exactly the inclusion-exclusion bookkeeping for the cap."
  },
  {
    "theme": "coefficients",
    "themeLabel": "Extracting Coefficients",
    "title": "Vandermonde in Disguise",
    "difficulty": 3,
    "task": "Evaluate",
    "tags": [
      "vandermonde",
      "convolution",
      "product",
      "closed-form",
      "binomial"
    ],
    "statement": "Evaluate $\\displaystyle\\sum_{k=0}^{6}\\binom{6}{k}\\binom{9}{6-k}$.",
    "answer": "\\[\\boxed{5005}\\]",
    "trap": "Reading the sum as $\\big(\\sum_k\\binom{6}{k}\\big)\\big(\\sum_m\\binom{9}{m}\\big)=2^6\\cdot 2^9=32768$ decouples the two binomials, but they are locked together by the constraint that the upper index of the second is forced to $6-k$. The sum is a single convolution coefficient, not a product of row-sums.",
    "solutions": [
      {
        "name": "Coefficient of a product",
        "steps": [
          "Recognise $\\binom{6}{k}=[x^k](1+x)^6$ and $\\binom{9}{6-k}=[x^{6-k}](1+x)^9$.",
          "Their convolution is exactly $[x^6]\\big((1+x)^6(1+x)^9\\big)=[x^6](1+x)^{15}$.",
          "Therefore the sum equals $\\binom{15}{6}$.",
          "$\\binom{15}{6}=5005$, so the answer is $\\boxed{5005}$."
        ]
      },
      {
        "name": "Combinatorial double count",
        "steps": [
          "Choose a $6$-element subset of $15$ people split into a group of $6$ and a group of $9$.",
          "Picking $k$ from the first group and $6-k$ from the second gives $\\binom{6}{k}\\binom{9}{6-k}$ ways; summing over $k$ counts every $6$-subset exactly once.",
          "Hence the total is $\\binom{15}{6}$.",
          "Evaluating, $\\boxed{5005}$."
        ]
      }
    ],
    "remark": "Insight: any sum $\\sum_k\\binom{m}{k}\\binom{n}{p-k}$ is the $x^p$-coefficient of $(1+x)^{m+n}$ — Vandermonde's identity is just the convolution theorem wearing a costume."
  },
  {
    "theme": "coefficients",
    "themeLabel": "Extracting Coefficients",
    "title": "Half a Power of Two",
    "difficulty": 4,
    "task": "Prove that",
    "tags": [
      "quotient",
      "partial-sums",
      "symmetry",
      "power-of-two",
      "binomial"
    ],
    "statement": "For every positive integer $n$, prove that the coefficient of $x^n$ in $\\dfrac{(1+x)^{2n+1}}{1-x}$ equals $4^n$.",
    "answer": "\\[\\boxed{4^n}\\]",
    "trap": "Writing $[x^n]\\tfrac{(1+x)^{2n+1}}{1-x}=\\sum_{i=0}^{n}\\binom{2n+1}{i}$ and then asserting this is \"half of $2^{2n+1}$\" without justification. The halving is only valid because the row $\\binom{2n+1}{0},\\dots,\\binom{2n+1}{2n+1}$ has an even number of terms and the reflection $\\binom{2n+1}{i}=\\binom{2n+1}{2n+1-i}$ maps the lower index block $\\{0,\\dots,n\\}$ bijectively onto the upper block $\\{n+1,\\dots,2n+1\\}$. Skipping that pairing argument leaves the key step unproved.",
    "solutions": [
      {
        "name": "Partial sum via symmetry",
        "steps": [
          "Since $\\dfrac{1}{1-x}=\\sum_{k\\ge0}x^{k}$, multiplying a series by $\\tfrac{1}{1-x}$ replaces its coefficients by partial sums. Hence $[x^n]\\dfrac{(1+x)^{2n+1}}{1-x}=\\sum_{i=0}^{n}[x^i](1+x)^{2n+1}=\\sum_{i=0}^{n}\\binom{2n+1}{i}$.",
          "Row $2n+1$ of Pascal's triangle has $2n+2$ entries (an even count) and is symmetric: $\\binom{2n+1}{i}=\\binom{2n+1}{2n+1-i}$. The map $i\\mapsto 2n+1-i$ sends $\\{0,\\dots,n\\}$ bijectively to $\\{n+1,\\dots,2n+1\\}$, so the lower half and upper half have equal sums.",
          "Because the two halves are equal and together exhaust the whole row, each equals half of the total: $\\sum_{i=0}^{n}\\binom{2n+1}{i}=\\tfrac12\\sum_{i=0}^{2n+1}\\binom{2n+1}{i}=\\tfrac12\\cdot2^{2n+1}=2^{2n}$.",
          "Therefore the coefficient is $2^{2n}=4^n$, $\\boxed{4^n}$."
        ]
      },
      {
        "name": "Pairing the two halves directly",
        "steps": [
          "As above, let $a_n:=[x^n]\\dfrac{(1+x)^{2n+1}}{1-x}=\\sum_{i=0}^{n}\\binom{2n+1}{i}$, the sum over the lower index block.",
          "Let $b_n:=\\sum_{i=n+1}^{2n+1}\\binom{2n+1}{i}$ be the sum over the upper block. The substitution $j=2n+1-i$ together with $\\binom{2n+1}{i}=\\binom{2n+1}{2n+1-i}$ gives $b_n=\\sum_{j=0}^{n}\\binom{2n+1}{j}=a_n$.",
          "The two blocks partition $\\{0,\\dots,2n+1\\}$, so $a_n+b_n=\\sum_{i=0}^{2n+1}\\binom{2n+1}{i}=2^{2n+1}$. Combined with $a_n=b_n$ this yields $2a_n=2^{2n+1}$, hence $a_n=2^{2n}$.",
          "Therefore $[x^n]\\dfrac{(1+x)^{2n+1}}{1-x}=2^{2n}=\\boxed{4^n}$."
        ]
      }
    ],
    "remark": "Insight: dividing a generating function by $1-x$ converts its coefficients into partial sums, and a symmetric binomial row of even length splits into two equal halves via the reflection $i\\mapsto 2n+1-i$. The pairing is what licenses the halving $\\tfrac12\\cdot2^{2n+1}=4^n$; stating \"half the row\" without the bijection is the gap to avoid."
  },
  {
    "theme": "coefficients",
    "themeLabel": "Extracting Coefficients",
    "title": "The Vanishing Odd Coefficient",
    "difficulty": 4,
    "task": "Find the number of",
    "tags": [
      "product",
      "perfect-square",
      "parity",
      "degenerate",
      "binomial"
    ],
    "statement": "In the expansion of $(1+x)^{12}(1-x)^{12}$, find the coefficient of $x^6$, and state the coefficient of $x^7$.",
    "answer": "\\[\\boxed{-220,\\ 0}\\]",
    "trap": "Setting up the full convolution $\\sum_j\\binom{12}{6-j}\\binom{12}{j}(-1)^j$ for $x^6$ and a separate huge sum for $x^7$ — and never noticing that $(1+x)^{12}(1-x)^{12}=(1-x^2)^{12}$ is even, so ALL odd-power coefficients (like $x^7$) are forced to $0$.",
    "solutions": [
      {
        "name": "Collapse to an even series",
        "steps": [
          "Pair the factors: $(1+x)^{12}(1-x)^{12}=\\big((1+x)(1-x)\\big)^{12}=(1-x^2)^{12}$.",
          "Only even powers of $x$ appear, so $[x^7]=0$ immediately (degenerate odd case).",
          "For $x^6$, take $[x^6](1-x^2)^{12}=\\binom{12}{3}(-1)^3$ (the $k=3$ term of $\\sum\\binom{12}{k}(-1)^kx^{2k}$).",
          "$=-220$, so the coefficients are $\\boxed{-220}$ and $0$."
        ]
      },
      {
        "name": "Parity argument plus convolution",
        "steps": [
          "The polynomial $P(x)=(1+x)^{12}(1-x)^{12}$ satisfies $P(-x)=(1-x)^{12}(1+x)^{12}=P(x)$, so $P$ is even and every odd coefficient vanishes; thus $[x^7]=0$.",
          "For $x^6$: $[x^6]=\\sum_{j=0}^{6}\\binom{12}{6-j}\\binom{12}{j}(-1)^j$.",
          "This alternating Vandermonde sum equals $[x^6](1-x^2)^{12}=-\\binom{12}{3}=-220$.",
          "Hence $\\boxed{-220}$ for $x^6$ and $0$ for $x^7$."
        ]
      }
    ],
    "remark": "Insight: spotting that a product is an even (or odd) function instantly kills half the coefficients — a parity check should precede any brute-force convolution."
  },
  {
    "theme": "coefficients",
    "themeLabel": "Extracting Coefficients",
    "title": "Numerator Meets Denominator",
    "difficulty": 4,
    "task": "Determine",
    "tags": [
      "quotient",
      "negative-binomial",
      "convolution",
      "series-multiplication",
      "binomial"
    ],
    "statement": "Determine the coefficient of $x^5$ in $\\dfrac{(1+x)^4}{(1-x)^3}$.",
    "answer": "\\[\\boxed{168}\\]",
    "trap": "Treating $(1-x)^{-3}$ as if it contributed only at low orders, so that only the middle of the convolution survives. In fact $(1-x)^{-3}=\\sum_m\\binom{m+2}{2}x^m$ has a positive coefficient at every order, and the full $[x^5]=\\sum_{i=0}^{4}\\binom{4}{i}\\binom{(5-i)+2}{2}$ must run over all five $i$. Dropping the end terms $i=0$ (value $21$) and $i=4$ (value $3$) yields $60+60+24=144$, undercounting by $24$.",
    "solutions": [
      {
        "name": "Series convolution",
        "steps": [
          "Expand $(1+x)^4=\\sum_{i=0}^{4}\\binom{4}{i}x^i$ and $(1-x)^{-3}=\\sum_{m\\ge0}\\binom{m+2}{2}x^m$.",
          "Multiplying, the $x^5$ term collects every split $i+m=5$ with $0\\le i\\le4$, so $[x^5]=\\sum_{i=0}^{4}\\binom{4}{i}\\binom{(5-i)+2}{2}$.",
          "$=1\\cdot\\binom72+4\\cdot\\binom62+6\\cdot\\binom52+4\\cdot\\binom42+1\\cdot\\binom32=21+60+60+24+3$.",
          "$=168$, so the coefficient is $\\boxed{168}$."
        ]
      },
      {
        "name": "Collapse to a single signed series",
        "steps": [
          "Use $1+x=\\dfrac{1-x^2}{1-x}$, so $(1+x)^4=\\dfrac{(1-x^2)^4}{(1-x)^4}$ and the expression becomes $(1-x^2)^4(1-x)^{-7}$.",
          "Thus the expression equals $\\sum_{k}\\binom{4}{k}(-1)^k x^{2k}\\cdot\\sum_{m\\ge0}\\binom{m+6}{6}x^m$, and only even $2k\\le5$ (i.e. $k=0,1,2$) can pair with an $x^{5-2k}$ term.",
          "$[x^5]=\\binom40\\binom{11}{6}-\\binom41\\binom{9}{6}+\\binom42\\binom{7}{6}=462-336+42$.",
          "$=168$, confirming $\\boxed{168}$."
        ]
      }
    ],
    "remark": "Insight: a quotient $\\tfrac{(1+x)^a}{(1-x)^b}$ is a finite polynomial times a negative-binomial series, so its coefficients are honest convolutions in which the denominator contributes at every order. Rewriting $(1+x)=\\tfrac{1-x^2}{1-x}$ folds the two factors into one signed negative-binomial extraction, a clean cross-check."
  },
  {
    "theme": "coefficients",
    "themeLabel": "Extracting Coefficients",
    "title": "Shifted Starts",
    "difficulty": 3,
    "task": "Find the number of",
    "tags": [
      "shift",
      "negative-binomial",
      "stars-and-bars",
      "factor-out",
      "combinatorics"
    ],
    "statement": "Find the number of integer solutions of $a_1+a_2+a_3+a_4=15$ with every $a_i\\ge 2$, by extracting a coefficient — equivalently, find $[x^{15}](x^2+x^3+x^4+\\cdots)^4$.",
    "answer": "\\[\\boxed{120}\\]",
    "trap": "Reading each factor as $\\tfrac{1}{1-x}$ (starting at $x^0$) and answering $\\binom{15+3}{3}=\\binom{18}{3}=816$ ignores the lower bound $a_i\\ge2$: each series starts at $x^2$, so a factor of $x^8$ must be pulled out before applying stars-and-bars.",
    "solutions": [
      {
        "name": "Factor out the minimum",
        "steps": [
          "Each factor is $x^2+x^3+\\cdots=\\dfrac{x^2}{1-x}$, so the product is $\\dfrac{x^8}{(1-x)^4}$.",
          "Then $[x^{15}]\\dfrac{x^8}{(1-x)^4}=[x^{7}](1-x)^{-4}=\\binom{7+3}{3}$.",
          "$=\\binom{10}{3}=120$.",
          "Thus there are $\\boxed{120}$ solutions."
        ]
      },
      {
        "name": "Substitution",
        "steps": [
          "Let $b_i=a_i-2\\ge0$; then $b_1+b_2+b_3+b_4=15-8=7$.",
          "The number of non-negative solutions is $\\binom{7+4-1}{4-1}=\\binom{10}{3}$.",
          "$=120$.",
          "Hence $\\boxed{120}$ — identical to factoring out $x^8$ in the generating function."
        ]
      }
    ],
    "remark": "Insight: a per-variable lower bound becomes a clean factored power $x^{(\\text{sum of mins})}$ in the generating function; the residual extraction is plain stars-and-bars."
  },
  {
    "theme": "coefficients",
    "themeLabel": "Extracting Coefficients",
    "title": "Binomial Times Trinomial",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "mixed-product",
      "trinomial",
      "cyclotomic-factor",
      "convolution",
      "inclusion-exclusion"
    ],
    "statement": "Determine the coefficient of $x^4$ in $(1+x)^5\\,(1+x+x^2)^3$.",
    "answer": "\\[\\boxed{136}\\]",
    "trap": "Convolving only the 'main' pieces — e.g. $\\binom{5}{4}\\cdot[x^0]+\\binom{5}{2}\\cdot[x^2]=15$ — while skipping intermediate splits, or assuming $(1+x+x^2)^3$ contributes like $(1+x)^6$ (which gives $330$); the trinomial's coefficients are $1,3,6,7,6,3,1$, NOT binomial, so every cross split $i+j=4$ with $0\\le i\\le5,\\ 0\\le j\\le6$ matters.",
    "solutions": [
      {
        "name": "Coefficient lists and convolve",
        "steps": [
          "$(1+x)^5$ has coefficients $[1,5,10,10,5,1]$ for $x^0..x^5$.",
          "$(1+x+x^2)^3$ expands to $[1,3,6,7,6,3,1]$ for $x^0..x^6$.",
          "$[x^4]=\\sum_{i+j=4}a_i b_j=1\\cdot6+5\\cdot7+10\\cdot6+10\\cdot3+5\\cdot1$ over the pairs $i+j=4$.",
          "$=6+35+60+30+5=136$, so $\\boxed{136}$."
        ]
      },
      {
        "name": "Cyclotomic rewrite",
        "steps": [
          "Use $1+x+x^2=\\dfrac{1-x^3}{1-x}$, so the product is $(1+x)^5(1-x^3)^3(1-x)^{-3}$.",
          "Also $(1+x)^5=\\dfrac{(1-x^2)^5}{(1-x)^5}$, giving $(1-x^2)^5(1-x^3)^3(1-x)^{-8}$.",
          "Convolve $\\sum_k\\binom5k(-1)^kx^{2k}$, $\\sum_l\\binom3l(-1)^lx^{3l}$, and $\\sum_m\\binom{m+7}{7}x^m$; the splits $2k+3l+m=4$ surviving are $(k,l)=(0,0),(0,1),(1,0),(2,0)$, contributing $\\binom{11}{7}-3\\binom{8}{7}-5\\binom{9}{7}+10\\binom{7}{7}$.",
          "Computing $330-24-180+10=136$, confirming $\\boxed{136}$."
        ]
      }
    ],
    "remark": "Insight: when one factor is a trinomial, never assume binomial coefficients — either expand it honestly or convert via $\\tfrac{1-x^3}{1-x}$ into signed cyclotomic numerators over a negative-binomial series. The trap value $330$ is exactly the $(1+x)^6$ mistake, and $15$ is the 'main pieces only' mistake."
  },
  {
    "theme": "coefficients",
    "themeLabel": "Extracting Coefficients",
    "title": "Two Signed Series Collide",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "quotient",
      "alternating",
      "negative-binomial",
      "convolution",
      "partial-fractions"
    ],
    "statement": "Evaluate the coefficient of $x^4$ in $\\dfrac{1}{(1-x)^2(1+x)^3}$.",
    "answer": "\\[\\boxed{6}\\]",
    "trap": "Reading $(1+x)^{-3}$ with all $+$ signs (as if it were $(1-x)^{-3}$). Its true coefficients alternate as $\\binom{m+2}{2}(-1)^m$. Dropping that alternation turns the convolution $1\\cdot15-2\\cdot10+3\\cdot6-4\\cdot3+5\\cdot1$ into $1\\cdot15+2\\cdot10+3\\cdot6+4\\cdot3+5\\cdot1=70$. The alternating signs are exactly what collapse the answer from the bloated $70$ down to $6$.",
    "solutions": [
      {
        "name": "Signed convolution",
        "steps": [
          "Expand each factor as a negative-binomial series: $(1-x)^{-2}=\\sum_{i\\ge0}(i+1)x^i$ and $(1+x)^{-3}=\\sum_{j\\ge0}\\binom{j+2}{2}(-1)^j x^j$.",
          "The product's $x^4$ coefficient is the convolution $[x^4]=\\sum_{i=0}^{4}(i+1)\\binom{(4-i)+2}{2}(-1)^{4-i}$.",
          "Tabulating $i=0,\\dots,4$: $1\\cdot15-2\\cdot10+3\\cdot6-4\\cdot3+5\\cdot1=15-20+18-12+5$.",
          "$=6$, hence $\\boxed{6}$. Every term after the leading $15$ matters; the signs are doing the real work."
        ]
      },
      {
        "name": "Partial fractions",
        "steps": [
          "Write $\\dfrac{1}{(1-x)^2(1+x)^3}=\\dfrac{A}{1-x}+\\dfrac{B}{(1-x)^2}+\\dfrac{C}{1+x}+\\dfrac{D}{(1+x)^2}+\\dfrac{E}{(1+x)^3}$.",
          "Cover-up at $x=1$ gives $B=\\tfrac18$; cover-up at $x=-1$ gives $E=\\tfrac14$. Matching the remaining coefficients yields $A=\\tfrac{3}{16},\\ C=\\tfrac{3}{16},\\ D=\\tfrac14$.",
          "Read off the $x^4$ coefficient of each simple series: $(1-x)^{-1}\\to1$, $(1-x)^{-2}\\to 5$, $(1+x)^{-1}\\to(-1)^4=1$, $(1+x)^{-2}\\to(4+1)(-1)^4=5$, $(1+x)^{-3}\\to\\binom{6}{2}(-1)^4=15$.",
          "So $[x^4]=\\tfrac{3}{16}\\cdot1+\\tfrac18\\cdot5+\\tfrac{3}{16}\\cdot1+\\tfrac14\\cdot5+\\tfrac14\\cdot15=\\tfrac{3}{16}+\\tfrac58+\\tfrac{3}{16}+\\tfrac54+\\tfrac{15}{4}$.",
          "Over denominator $16$: $3+10+3+20+60=96$, and $\\tfrac{96}{16}=6$, hence $\\boxed{6}$ — in agreement with the signed convolution."
        ]
      }
    ],
    "remark": "Insight: $(1+x)^{-k}$ and $(1-x)^{-k}$ differ only by an alternating factor $(-1)^m$ in their coefficients. In a quotient that mixes both, the sign pattern is the entire mechanism — track it explicitly, because ignoring it inflates a tame $6$ all the way up to $70$."
  },
  {
    "theme": "coefficients",
    "themeLabel": "Extracting Coefficients",
    "title": "Four Loaded Dice",
    "difficulty": 5,
    "task": "Find the number of",
    "tags": [
      "dice",
      "bounded",
      "inclusion-exclusion",
      "truncated-series",
      "convolution"
    ],
    "statement": "Find the number of ways four ordinary six-sided dice (faces $1$ through $6$) can show a total of $17$ — equivalently, find $[x^{17}](x+x^2+x^3+x^4+x^5+x^6)^4$.",
    "answer": "\\[\\boxed{104}\\]",
    "trap": "After substituting $y_i=a_i-1$ to get $\\sum y_i=13$ with $0\\le y_i\\le5$, applying plain stars-and-bars $\\binom{13+3}{3}=\\binom{16}{3}=560$ and forgetting the upper cap $y_i\\le5$; the cases where some $y_i\\ge6$ must be subtracted by inclusion-exclusion with the $(1-x^6)^4$ numerator.",
    "solutions": [
      {
        "name": "Truncated generating function",
        "steps": [
          "Factor $x+\\cdots+x^6=x\\cdot\\dfrac{1-x^6}{1-x}$, so the product is $x^4(1-x^6)^4(1-x)^{-4}$.",
          "$[x^{17}]=[x^{13}](1-x^6)^4(1-x)^{-4}=\\sum_{j}(-1)^j\\binom{4}{j}\\binom{13-6j+3}{3}$.",
          "Only $j=0,1,2$ survive: $\\binom{16}{3}-4\\binom{10}{3}+6\\binom{4}{3}=560-480+24$.",
          "$=104$, so there are $\\boxed{104}$ ways."
        ]
      },
      {
        "name": "Symmetry about the mean",
        "steps": [
          "The total of four dice ranges $4$ to $24$, symmetric about $14$; the count for sum $17$ equals the count for sum $28-17=11$.",
          "Compute $[x^{11}]$: with $y_i=a_i-1$, $\\sum y_i=7$, all caps $\\le5$ inactive at this size, so $\\binom{7+3}{3}=\\binom{10}{3}=120$, minus the single capped case $\\binom{4}{1}\\binom{(7-6)+3}{3}=4\\binom43=16$.",
          "$=120-16=104$.",
          "Both the symmetric image and the direct extraction give $\\boxed{104}$."
        ]
      }
    ],
    "remark": "Insight: dice-sum problems are bounded compositions; the truncated factor $\\tfrac{x(1-x^6)}{1-x}$ encodes both the start at $1$ and the cap at $6$, and the distribution's symmetry about the mean total halves the work."
  },
  {
    "theme": "sumsdiff",
    "themeLabel": "Binomial Sums via Calculus",
    "title": "The Loaded Derivative",
    "difficulty": 3,
    "task": "Evaluate",
    "tags": [
      "differentiation",
      "weighted-sum",
      "substitution",
      "binomial"
    ],
    "statement": "Evaluate the closed form of \\[S=\\sum_{k=0}^{n} k\\binom{n}{k}2^{k}\\] by viewing it as the output of a single differentiation of $(1+x)^{n}$ followed by a substitution.",
    "answer": "\\[\\boxed{2n\\,3^{\\,n-1}}\\]",
    "trap": "Differentiating gives $\\sum_{k}k\\binom{n}{k}x^{k-1}=n(1+x)^{n-1}$, and many students substitute $x=2$ directly to get $n\\,3^{n-1}$ — forgetting that the target sum carries $x^{k}$, not $x^{k-1}$. You must restore the missing power by multiplying through by $x$ (i.e. use the operator $x\\frac{d}{dx}$) BEFORE substituting; skipping it leaves the answer off by exactly the factor $x=2$, halving the true value.",
    "solutions": [
      {
        "name": "Operator $x\\tfrac{d}{dx}$",
        "steps": [
          "Start from $(1+x)^{n}=\\sum_{k=0}^{n}\\binom{n}{k}x^{k}$.",
          "Apply the operator $x\\frac{d}{dx}$ to both sides: $x\\cdot n(1+x)^{n-1}=\\sum_{k=0}^{n}k\\binom{n}{k}x^{k}$, where the factor $x$ restores the exponent $x^{k}$ that bare differentiation would have lowered to $x^{k-1}$.",
          "Substitute $x=2$: $2\\cdot n\\cdot 3^{n-1}=\\sum_{k=0}^{n}k\\binom{n}{k}2^{k}$.",
          "Hence $S=\\boxed{2n\\,3^{n-1}}$."
        ]
      },
      {
        "name": "Absorption identity",
        "steps": [
          "Use $k\\binom{n}{k}=n\\binom{n-1}{k-1}$ (and note the $k=0$ term vanishes) to rewrite $S=n\\sum_{k=1}^{n}\\binom{n-1}{k-1}2^{k}$.",
          "Let $j=k-1$: $S=n\\sum_{j=0}^{n-1}\\binom{n-1}{j}2^{j+1}=2n\\sum_{j=0}^{n-1}\\binom{n-1}{j}2^{j}$.",
          "The inner sum is the binomial expansion $(1+2)^{n-1}=3^{n-1}$.",
          "Thus $S=2n\\,3^{n-1}$, confirming $\\boxed{2n\\,3^{n-1}}$."
        ]
      },
      {
        "name": "Numeric anchor",
        "steps": [
          "For $n=2$ the nonzero terms are $k=1:\\;1\\cdot\\binom21\\cdot2=4$ and $k=2:\\;2\\cdot\\binom22\\cdot4=8$, so $S=4+8=12$.",
          "The closed form predicts $2\\cdot2\\cdot3^{1}=12$ — a match.",
          "For $n=3$ the terms are $1\\cdot3\\cdot2+2\\cdot3\\cdot4+3\\cdot1\\cdot8=6+24+24=54$, while the formula gives $2\\cdot3\\cdot3^{2}=54$ — again a match.",
          "Both independent checks agree, supporting $S=\\boxed{2n\\,3^{n-1}}$ (note each value is exactly double the trap's $n\\,3^{n-1}=6,27$)."
        ]
      }
    ],
    "remark": "Insight: the single most common error in calculus-driven binomial sums is forgetting which power of $x$ the sum actually carries. The operator $x\\frac{d}{dx}$ is the bookkeeping device that keeps the exponent and the coefficient $k$ in lockstep, so the substitution lands on the right power and the answer is not silently halved."
  },
  {
    "theme": "sumsdiff",
    "themeLabel": "Binomial Sums via Calculus",
    "title": "Area Under the Binomial",
    "difficulty": 3,
    "task": "Evaluate",
    "tags": [
      "integration",
      "definite-integral",
      "binomial",
      "closed-form"
    ],
    "statement": "By integrating $(1+x)^{n}$ from $0$ to $1$, evaluate \\[S=\\sum_{k=0}^{n}\\frac{1}{k+1}\\binom{n}{k}.\\]",
    "answer": "\\[\\boxed{\\dfrac{2^{\\,n+1}-1}{n+1}}\\]",
    "trap": "The seductive slip is to antidifferentiate $(1+x)^{n}$ as $\\frac{(1+x)^{n+1}}{n+1}$ and evaluate only the upper limit, writing $\\frac{2^{n+1}}{n+1}$. You must subtract the lower-limit value $\\frac{1^{n+1}}{n+1}=\\frac{1}{n+1}$ — the 'constant of integration' shows up here as the lower bound, and dropping it gives a wrong off-by-$\\frac{1}{n+1}$ answer.",
    "solutions": [
      {
        "name": "Term-by-term integration",
        "steps": [
          "Integrate $(1+x)^{n}=\\sum_{k=0}^{n}\\binom{n}{k}x^{k}$ over $[0,1]$.",
          "Left side: $\\int_{0}^{1}(1+x)^{n}\\,dx=\\frac{(1+x)^{n+1}}{n+1}\\Big|_{0}^{1}=\\frac{2^{n+1}-1}{n+1}$.",
          "Right side: $\\sum_{k=0}^{n}\\binom{n}{k}\\frac{x^{k+1}}{k+1}\\Big|_{0}^{1}=\\sum_{k=0}^{n}\\frac{\\binom{n}{k}}{k+1}$.",
          "Equate: $S=\\boxed{\\dfrac{2^{n+1}-1}{n+1}}$."
        ]
      },
      {
        "name": "Absorption to $\\binom{n+1}{k+1}$",
        "steps": [
          "Use $\\frac{1}{k+1}\\binom{n}{k}=\\frac{1}{n+1}\\binom{n+1}{k+1}$.",
          "Then $S=\\frac{1}{n+1}\\sum_{k=0}^{n}\\binom{n+1}{k+1}=\\frac{1}{n+1}\\sum_{m=1}^{n+1}\\binom{n+1}{m}$.",
          "The sum $\\sum_{m=1}^{n+1}\\binom{n+1}{m}=2^{n+1}-1$ (full row minus the $m=0$ term).",
          "Hence $S=\\dfrac{2^{n+1}-1}{n+1}=\\boxed{\\dfrac{2^{n+1}-1}{n+1}}$."
        ]
      }
    ],
    "remark": "Insight: integration over $[0,1]$ realizes the factor $\\frac{1}{k+1}$ exactly because $\\int_0^1 x^k\\,dx=\\frac{1}{k+1}$. The lower limit is the calculus avatar of the constant of integration — never silently discard it."
  },
  {
    "theme": "sumsdiff",
    "themeLabel": "Binomial Sums via Calculus",
    "title": "The Sign That Collapses",
    "difficulty": 4,
    "task": "Prove that",
    "tags": [
      "integration",
      "alternating-sum",
      "sign",
      "telescoping"
    ],
    "statement": "Prove that for every positive integer $n$, \\[\\sum_{k=0}^{n}\\frac{(-1)^{k}}{k+1}\\binom{n}{k}=\\frac{1}{n+1},\\] and explain why the alternating signs make the answer a single reciprocal rather than an exponential.",
    "answer": "\\[\\boxed{\\dfrac{1}{n+1}}\\]",
    "trap": "Reusing the $[0,1]$ template from the non-alternating sum and substituting $x=-1$ into $\\frac{(1+x)^{n+1}}{n+1}$ naively gives $\\frac{(1-1)^{n+1}-1}{n+1}=\\frac{-1}{n+1}$, the wrong sign — because the alternating factor comes from integrating $(1-x)^{n}$ on $[0,1]$, NOT from substituting $x=-1$ into the antiderivative. Mixing up 'sub $x=-1$' with 'integrate the alternated polynomial' flips the sign.",
    "solutions": [
      {
        "name": "Integrate $(1-x)^n$",
        "steps": [
          "Expand $(1-x)^{n}=\\sum_{k=0}^{n}\\binom{n}{k}(-1)^{k}x^{k}$.",
          "Integrate over $[0,1]$: $\\int_{0}^{1}(1-x)^{n}\\,dx=\\frac{1}{n+1}$ (a clean substitution $u=1-x$).",
          "The right side integrates term-by-term to $\\sum_{k=0}^{n}\\frac{(-1)^{k}}{k+1}\\binom{n}{k}$.",
          "Equating gives the sum $=\\boxed{\\dfrac{1}{n+1}}$."
        ]
      },
      {
        "name": "Beta function",
        "steps": [
          "The sum equals $\\int_0^1 (1-x)^n\\,dx = B(1,n+1)$.",
          "By the Beta–Gamma identity $B(1,n+1)=\\frac{\\Gamma(1)\\Gamma(n+1)}{\\Gamma(n+2)}=\\frac{n!}{(n+1)!}$.",
          "This simplifies to $\\frac{1}{n+1}$.",
          "Hence the alternating sum is $\\boxed{\\dfrac{1}{n+1}}$."
        ]
      },
      {
        "name": "Absorption + alternating row",
        "steps": [
          "Write $\\frac{(-1)^k}{k+1}\\binom{n}{k}=\\frac{(-1)^k}{n+1}\\binom{n+1}{k+1}$.",
          "Sum: $\\frac{1}{n+1}\\sum_{k=0}^{n}(-1)^k\\binom{n+1}{k+1}=\\frac{-1}{n+1}\\sum_{m=1}^{n+1}(-1)^{m}\\binom{n+1}{m}$.",
          "Since $\\sum_{m=0}^{n+1}(-1)^m\\binom{n+1}{m}=0$, the tail $\\sum_{m=1}^{n+1}(-1)^m\\binom{n+1}{m}=-1$.",
          "Thus the sum $=\\frac{-1}{n+1}\\cdot(-1)=\\boxed{\\dfrac{1}{n+1}}$."
        ]
      }
    ],
    "remark": "Insight: the alternating sign is generated by integrating $(1-x)^n$, whose total mass on $[0,1]$ is exactly $\\frac1{n+1}$ regardless of $n$. The exponential growth of the non-alternating sum is annihilated by the cancellation — geometrically, the signed areas almost entirely cancel."
  },
  {
    "theme": "sumsdiff",
    "themeLabel": "Binomial Sums via Calculus",
    "title": "The Second Derivative's Tax",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "differentiation",
      "second-derivative",
      "weighted-sum",
      "operator"
    ],
    "statement": "Evaluate \\[S=\\sum_{k=0}^{n}k^{2}\\binom{n}{k}\\] by applying the operator $\\left(x\\frac{d}{dx}\\right)^{2}$ to $(1+x)^{n}$ and substituting $x=1$.",
    "answer": "\\[\\boxed{n(n+1)\\,2^{\\,n-2}}\\]",
    "trap": "A tempting shortcut is to differentiate twice and read off $k(k-1)$, getting $\\sum k(k-1)\\binom{n}{k}=n(n-1)2^{n-2}$, then forget that $k^{2}=k(k-1)+k$ and report $n(n-1)2^{n-2}$ as the final answer. The missing piece is the first-order term $\\sum k\\binom{n}{k}=n2^{n-1}$; omitting it understates the answer by exactly $n2^{n-1}$.",
    "solutions": [
      {
        "name": "Iterated $x\\frac{d}{dx}$",
        "steps": [
          "First application: $x\\frac{d}{dx}(1+x)^n=\\sum k\\binom{n}{k}x^k=nx(1+x)^{n-1}$.",
          "Apply $x\\frac{d}{dx}$ again: $\\sum k^2\\binom{n}{k}x^k = x\\frac{d}{dx}\\big(nx(1+x)^{n-1}\\big)=nx(1+x)^{n-1}+n(n-1)x^2(1+x)^{n-2}$.",
          "Set $x=1$: $n\\cdot2^{n-1}+n(n-1)2^{n-2}=2^{n-2}\\big(2n+n(n-1)\\big)=2^{n-2}\\,n(n+1)$.",
          "Therefore $S=\\boxed{n(n+1)2^{n-2}}$."
        ]
      },
      {
        "name": "Split $k^2=k(k-1)+k$",
        "steps": [
          "$\\sum k(k-1)\\binom{n}{k}=n(n-1)\\sum_{k=2}^{n}\\binom{n-2}{k-2}=n(n-1)2^{n-2}$ via second derivative at $x=1$.",
          "$\\sum k\\binom{n}{k}=n2^{n-1}=2n\\cdot2^{n-2}$.",
          "Add: $S=n(n-1)2^{n-2}+2n\\,2^{n-2}=2^{n-2}\\,n(n+1)$.",
          "Hence $S=\\boxed{n(n+1)2^{n-2}}$."
        ]
      },
      {
        "name": "Probabilistic (second moment)",
        "steps": [
          "If $X\\sim\\text{Bin}(n,\\tfrac12)$, then $\\sum_k k^2\\binom{n}{k}=2^n\\,E[X^2]$.",
          "$E[X^2]=\\operatorname{Var}(X)+E[X]^2=\\frac{n}{4}+\\frac{n^2}{4}=\\frac{n(n+1)}{4}$.",
          "So $S=2^n\\cdot\\frac{n(n+1)}{4}=n(n+1)2^{n-2}$.",
          "Thus $S=\\boxed{n(n+1)2^{n-2}}$."
        ]
      }
    ],
    "remark": "Insight: $\\left(x\\frac{d}{dx}\\right)^m$ generates $\\sum k^m\\binom{n}{k}x^k$ — but plain double differentiation produces the falling factorial $k(k-1)$, not $k^2$. The gap between falling factorials and ordinary powers is precisely the Stirling-number correction that a careless solver pays as a hidden tax."
  },
  {
    "theme": "sumsdiff",
    "themeLabel": "Binomial Sums via Calculus",
    "title": "Weighted by the Variable Itself",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "integration",
      "beta-function",
      "alternating-sum",
      "weight-x"
    ],
    "statement": "Evaluate \\[S=\\sum_{k=0}^{n}\\frac{(-1)^{k}}{k+2}\\binom{n}{k}\\] by integrating a polynomial weighted by an extra factor of $x$.",
    "answer": "\\[\\boxed{\\dfrac{1}{(n+1)(n+2)}}\\]",
    "trap": "The denominator $k+2$ tempts students to reuse the known result $\\sum_{k}\\frac{(-1)^k}{k+1}\\binom{n}{k}=\\frac{1}{n+1}$ and merely 'shift the index', producing the wrong value $\\frac{1}{n+2}$. The correct device is a single integral of $x\\,(1-x)^n$ over $[0,1]$, because $\\int_0^1 x\\cdot x^{k}\\,dx=\\frac{1}{k+2}$; the leading factor of $x$ is what raises the denominator from $k+1$ to $k+2$, and dropping it collapses $k+2$ back to $k+1$.",
    "solutions": [
      {
        "name": "Integrate $x(1-x)^n$",
        "steps": [
          "Expand $(1-x)^n=\\sum_{k=0}^{n}\\binom{n}{k}(-1)^k x^k$, so $x(1-x)^n=\\sum_{k=0}^{n}\\binom{n}{k}(-1)^k x^{k+1}$.",
          "Integrate term by term over $[0,1]$: since $\\int_0^1 x^{k+1}\\,dx=\\frac{1}{k+2}$, the right-hand side equals $\\sum_{k=0}^{n}\\frac{(-1)^k}{k+2}\\binom{n}{k}=S$.",
          "The left-hand side is a Beta integral: $\\int_0^1 x^{1}(1-x)^{n}\\,dx=B(2,n+1)=\\frac{1!\\,n!}{(n+2)!}=\\frac{1}{(n+1)(n+2)}$.",
          "Equating the two evaluations gives $S=\\boxed{\\dfrac{1}{(n+1)(n+2)}}$."
        ]
      },
      {
        "name": "Substitution $u=1-x$",
        "steps": [
          "In $\\int_0^1 x(1-x)^n\\,dx$ put $u=1-x$, so $x=1-u$ and the limits stay $0\\to1$, giving $\\int_0^1 (1-u)\\,u^n\\,du$.",
          "Split the integral: $\\int_0^1 u^n\\,du-\\int_0^1 u^{n+1}\\,du=\\frac{1}{n+1}-\\frac{1}{n+2}$.",
          "Combine over a common denominator: $\\frac{(n+2)-(n+1)}{(n+1)(n+2)}=\\frac{1}{(n+1)(n+2)}$.",
          "Since this integral equals the series in Method 1, $S=\\boxed{\\dfrac{1}{(n+1)(n+2)}}$."
        ]
      },
      {
        "name": "Reduce to known alternating sums",
        "steps": [
          "Use the upper-index identity $\\binom{n+2}{k+2}=\\binom{n}{k}\\dfrac{(n+1)(n+2)}{(k+1)(k+2)}$, which rearranges to $\\dfrac{\\binom{n}{k}}{k+2}=\\dfrac{(k+1)}{(n+1)(n+2)}\\binom{n+2}{k+2}$.",
          "Substitute into $S$: $S=\\dfrac{1}{(n+1)(n+2)}\\sum_{k=0}^{n}(-1)^k(k+1)\\binom{n+2}{k+2}$. Put $j=k+2$ (so $k+1=j-1$, $(-1)^k=(-1)^j$): $S=\\dfrac{1}{(n+1)(n+2)}\\,T$ where $T=\\sum_{j=2}^{n+2}(-1)^{j}(j-1)\\binom{n+2}{j}$.",
          "Let $N=n+2$. Extend $T$ to the full range $j=0,\\dots,N$: the missing $j=0$ term is $(-1)^0(0-1)\\binom{N}{0}=-1$ and the $j=1$ term is $(-1)^1(0)\\binom{N}{1}=0$, so $T=\\Big[\\sum_{j=0}^{N}(-1)^j(j-1)\\binom{N}{j}\\Big]-(-1)$.",
          "The bracket splits as $\\sum_{j=0}^{N}(-1)^j j\\binom{N}{j}-\\sum_{j=0}^{N}(-1)^j\\binom{N}{j}=0-0=0$ for $N\\ge 2$ (both are standard vanishing alternating sums). Hence $T=0+1=1$, and $S=\\dfrac{1}{(n+1)(n+2)}\\cdot 1=\\boxed{\\dfrac{1}{(n+1)(n+2)}}$."
        ]
      }
    ],
    "remark": "Insight: an extra polynomial weight inside the integral shifts the denominator. Each factor of $x$ you multiply before integrating raises $\\frac{1}{k+1}$ to $\\frac{1}{k+2}$, $\\frac{1}{k+3}$, and so on, since $\\int_0^1 x^{m}\\,(1-x)^n\\,dx=B(m+1,n+1)$. The Beta function $B(a,n+1)$ is the master formula behind every such 'weighted' binomial sum, and the purely-algebraic Method 3 confirms it without calculus."
  },
  {
    "theme": "sumsdiff",
    "themeLabel": "Binomial Sums via Calculus",
    "title": "Harmonic from the Binomial",
    "difficulty": 4,
    "task": "Prove that",
    "tags": [
      "integration",
      "harmonic-number",
      "alternating-sum",
      "telescoping-integrand"
    ],
    "statement": "Let $H_n=1+\\tfrac12+\\cdots+\\tfrac1n$. Prove that \\[\\sum_{k=1}^{n}\\frac{(-1)^{k-1}}{k}\\binom{n}{k}=H_{n}.\\]",
    "answer": "\\[\\boxed{H_{n}}\\]",
    "trap": "It is tempting to integrate $(1-x)^n$ and divide by $x$ blindly, but $\\frac{(1-x)^n}{x}$ is singular at $x=0$. The correct integrand is $\\frac{1-(1-x)^n}{x}$, which is actually analytic at $0$ (the constant terms cancel). Forgetting the $1-$ in the numerator makes the integral diverge and the harmonic structure never appears.",
    "solutions": [
      {
        "name": "Integrate $\\frac{1-(1-x)^n}{x}$",
        "steps": [
          "From $(1-x)^n=\\sum_{k=0}^n\\binom{n}{k}(-1)^k x^k$, the $k=0$ term cancels: $1-(1-x)^n=\\sum_{k=1}^n\\binom{n}{k}(-1)^{k-1}x^k$.",
          "Divide by $x$ and integrate over $[0,1]$: $\\int_0^1 x^{k-1}\\,dx=\\frac1k$, giving $\\sum_{k=1}^n\\frac{(-1)^{k-1}}{k}\\binom{n}{k}$.",
          "Compute the left integral with $u=1-x$: $\\int_0^1\\frac{1-(1-x)^n}{x}\\,dx=\\int_0^1\\frac{1-u^n}{1-u}\\,du=\\int_0^1(1+u+\\cdots+u^{n-1})\\,du$.",
          "That equals $1+\\frac12+\\cdots+\\frac1n=H_n$, so the sum is $\\boxed{H_n}$."
        ]
      },
      {
        "name": "Induction via Pascal",
        "steps": [
          "Let $S_n=\\sum_{k=1}^n\\frac{(-1)^{k-1}}{k}\\binom{n}{k}$; check $S_1=1=H_1$.",
          "Using $\\binom{n}{k}=\\binom{n-1}{k}+\\binom{n-1}{k-1}$ and $\\frac1k\\binom{n-1}{k-1}=\\frac1n\\binom{n}{k}$ relations, one derives $S_n-S_{n-1}=\\frac1n\\sum_{k=1}^n(-1)^{k-1}\\binom{n}{k}=\\frac1n$.",
          "Since $\\sum_{k=1}^n(-1)^{k-1}\\binom{n}{k}=1$, we get $S_n=S_{n-1}+\\frac1n$.",
          "Telescoping from $S_1=1$ yields $S_n=H_n=\\boxed{H_n}$."
        ]
      },
      {
        "name": "Finite geometric series",
        "steps": [
          "Rewrite the integrand $\\frac{1-u^n}{1-u}$ as the finite geometric sum $\\sum_{j=0}^{n-1}u^{j}$ for $u\\in[0,1)$.",
          "Integrate termwise: $\\int_0^1 u^j\\,du=\\frac{1}{j+1}$.",
          "Summing $j=0$ to $n-1$ gives $\\sum_{j=0}^{n-1}\\frac{1}{j+1}=H_n$.",
          "Therefore the original alternating binomial sum equals $\\boxed{H_n}$."
        ]
      }
    ],
    "remark": "Insight: the harmonic number is hiding inside the binomial expansion. The trick is recognizing that subtracting the constant term $1$ regularizes the $\\frac1x$ singularity, after which the integrand telescopes into a geometric series whose integral is literally $H_n$."
  },
  {
    "theme": "sumsdiff",
    "themeLabel": "Binomial Sums via Calculus",
    "title": "Twice Integrated, Once Split",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "double-integration",
      "partial-fractions",
      "binomial",
      "closed-form"
    ],
    "statement": "Evaluate the closed form of \\[S=\\sum_{k=0}^{n}\\frac{1}{(k+1)(k+2)}\\binom{n}{k}.\\]",
    "answer": "\\[\\boxed{\\dfrac{2^{\\,n+2}-n-3}{(n+1)(n+2)}}\\]",
    "trap": "Students split $\\frac{1}{(k+1)(k+2)}=\\frac{1}{k+1}-\\frac{1}{k+2}$ and integrate, but for $\\sum\\frac{\\binom{n}{k}}{k+2}$ they reuse the $\\frac1{k+1}$ template and shift the index to $n+1$, getting $\\frac{2^{n+2}-1}{n+2}$ — wrong, because $\\sum\\frac{\\binom{n}{k}}{k+2}$ comes from integrating $x(1+x)^n$ (extra $x$ weight), not from index-shifting. The $x$-weight changes both limits of the antiderivative.",
    "solutions": [
      {
        "name": "Partial fractions + two integrals",
        "steps": [
          "Split $\\frac{1}{(k+1)(k+2)}=\\frac{1}{k+1}-\\frac{1}{k+2}$, so $S=A-B$ with $A=\\sum\\frac{\\binom{n}{k}}{k+1}$, $B=\\sum\\frac{\\binom{n}{k}}{k+2}$.",
          "$A=\\int_0^1(1+x)^n\\,dx=\\frac{2^{n+1}-1}{n+1}$.",
          "$B=\\int_0^1 x(1+x)^n\\,dx$; with $u=1+x$, $B=\\int_1^2(u-1)u^n\\,du=\\big[\\frac{u^{n+2}}{n+2}-\\frac{u^{n+1}}{n+1}\\big]_1^2=\\frac{2^{n+2}}{n+2}-\\frac{2^{n+1}}{n+1}-\\frac{1}{n+2}+\\frac{1}{n+1}$.",
          "Compute $A-B$ and combine over $(n+1)(n+2)$ to get $S=\\boxed{\\dfrac{2^{n+2}-n-3}{(n+1)(n+2)}}$."
        ]
      },
      {
        "name": "Double absorption",
        "steps": [
          "Use $\\frac{1}{(k+1)(k+2)}\\binom{n}{k}=\\frac{1}{(n+1)(n+2)}\\binom{n+2}{k+2}$.",
          "So $S=\\frac{1}{(n+1)(n+2)}\\sum_{k=0}^{n}\\binom{n+2}{k+2}=\\frac{1}{(n+1)(n+2)}\\sum_{m=2}^{n+2}\\binom{n+2}{m}$.",
          "The tail $\\sum_{m=2}^{n+2}\\binom{n+2}{m}=2^{n+2}-\\binom{n+2}{0}-\\binom{n+2}{1}=2^{n+2}-1-(n+2)=2^{n+2}-n-3$.",
          "Hence $S=\\boxed{\\dfrac{2^{n+2}-n-3}{(n+1)(n+2)}}$."
        ]
      },
      {
        "name": "Iterated integral $\\int_0^1\\int_0^t(1+x)^n\\,dx\\,dt$",
        "steps": [
          "Note $\\frac{1}{(k+1)(k+2)}=\\int_0^1\\!\\!\\int_0^t x^k\\,dx\\,dt$ since the inner integral is $\\frac{t^{k+1}}{k+1}$ and the outer gives $\\frac{1}{(k+1)(k+2)}$.",
          "Swap sum and integrals: $S=\\int_0^1\\!\\!\\int_0^t(1+x)^n\\,dx\\,dt=\\int_0^1\\frac{(1+t)^{n+1}-1}{n+1}\\,dt$.",
          "Evaluate: $\\frac{1}{n+1}\\big[\\frac{(1+t)^{n+2}}{n+2}-t\\big]_0^1=\\frac{1}{n+1}\\big(\\frac{2^{n+2}-1}{n+2}-1\\big)$.",
          "Simplify to $\\dfrac{2^{n+2}-n-3}{(n+1)(n+2)}=\\boxed{\\dfrac{2^{n+2}-n-3}{(n+1)(n+2)}}$."
        ]
      }
    ],
    "remark": "Insight: the product $\\frac{1}{(k+1)(k+2)}$ is the fingerprint of a DOUBLE integration. Either split by partial fractions and track each $x$-weight, or use the elegant double-absorption $\\binom{n}{k}\\to\\binom{n+2}{k+2}$ — both routes expose the same $2^{n+2}-n-3$ numerator that a single-integration shortcut can never produce."
  },
  {
    "theme": "sumsdiff",
    "themeLabel": "Binomial Sums via Calculus",
    "title": "Differentiate, Then Land at One Half",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "differentiation",
      "value-substitution",
      "weighted-sum",
      "operator"
    ],
    "statement": "Evaluate \\[S=\\sum_{k=0}^{n}\\frac{k}{2^{k}}\\binom{n}{k}\\] by differentiating $(1+x)^{n}$ and substituting a value other than $\\pm1$.",
    "answer": "\\[\\boxed{\\dfrac{n\\,3^{\\,n-1}}{2^{\\,n}}}\\]",
    "trap": "The factor $\\frac{1}{2^k}$ means the natural substitution is $x=\\tfrac12$, but students who form $\\sum k\\binom{n}{k}x^k=nx(1+x)^{n-1}$ often forget the leading $x$ when evaluating at $\\tfrac12$, writing $n(\\tfrac32)^{n-1}=\\frac{n3^{n-1}}{2^{n-1}}$ instead of multiplying by $x=\\tfrac12$ to get $\\frac{n3^{n-1}}{2^{n}}$. The off-by-$\\tfrac12$ is the calculus-engine equivalent of dropping the chain factor.",
    "solutions": [
      {
        "name": "Operator at $x=\\tfrac12$",
        "steps": [
          "From $x\\frac{d}{dx}(1+x)^n$ we have $\\sum_{k=0}^n k\\binom{n}{k}x^k=nx(1+x)^{n-1}$.",
          "The target sum has $x^k=2^{-k}$, so substitute $x=\\tfrac12$.",
          "$nx(1+x)^{n-1}\\big|_{x=1/2}=n\\cdot\\frac12\\cdot\\left(\\frac32\\right)^{n-1}=\\frac{n}{2}\\cdot\\frac{3^{n-1}}{2^{n-1}}=\\frac{n\\,3^{n-1}}{2^{n}}$.",
          "Hence $S=\\boxed{\\dfrac{n\\,3^{n-1}}{2^{n}}}$."
        ]
      },
      {
        "name": "Absorption identity",
        "steps": [
          "$k\\binom{n}{k}=n\\binom{n-1}{k-1}$ gives $S=n\\sum_{k=1}^n\\binom{n-1}{k-1}2^{-k}$.",
          "Let $j=k-1$: $S=n\\sum_{j=0}^{n-1}\\binom{n-1}{j}2^{-(j+1)}=\\frac{n}{2}\\sum_{j=0}^{n-1}\\binom{n-1}{j}\\left(\\frac12\\right)^{j}$.",
          "The inner sum is $\\left(1+\\frac12\\right)^{n-1}=\\left(\\frac32\\right)^{n-1}$.",
          "So $S=\\frac{n}{2}\\left(\\frac32\\right)^{n-1}=\\dfrac{n\\,3^{n-1}}{2^{n}}=\\boxed{\\dfrac{n\\,3^{n-1}}{2^{n}}}$."
        ]
      },
      {
        "name": "Expectation scaling",
        "steps": [
          "Write $S=\\sum_k k\\binom{n}{k}(\\tfrac12)^k$. Compare with the binomial expectation: for $X\\sim\\text{Bin}(n,p)$, $\\sum_k k\\binom{n}{k}p^k(1-p)^{n-k}=np$.",
          "Choose $p=\\tfrac{1}{3}$ so that $\\frac{p}{1-p}=\\frac12$: then $\\binom{n}{k}p^k(1-p)^{n-k}=(1-p)^n\\binom{n}{k}(\\tfrac12)^k$ with $(1-p)^n=(\\tfrac23)^n$.",
          "Thus $np=\\frac{n}{3}=(\\tfrac23)^n S$, giving $S=\\frac{n}{3}\\cdot(\\tfrac32)^n=\\frac{n}{3}\\cdot\\frac{3^n}{2^n}=\\frac{n\\,3^{n-1}}{2^n}$.",
          "Hence $S=\\boxed{\\dfrac{n\\,3^{n-1}}{2^{n}}}$."
        ]
      }
    ],
    "remark": "Insight: the value you substitute is dictated by the sum's hidden base — here $\\frac{1}{2^k}$ forces $x=\\tfrac12$. The $x\\frac{d}{dx}$ operator and the probabilistic 'tilting' view are two faces of the same generating-function machine."
  },
  {
    "theme": "sumsdiff",
    "themeLabel": "Binomial Sums via Calculus",
    "title": "The Wallis Connection",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "integration",
      "substitution",
      "alternating-sum",
      "wallis",
      "factorials"
    ],
    "statement": "Evaluate the closed form, in terms of factorials, of \\[S=\\sum_{k=0}^{n}\\frac{(-1)^{k}}{2k+1}\\binom{n}{k}.\\]",
    "answer": "\\[\\boxed{\\dfrac{4^{\\,n}\\,(n!)^{2}}{(2n+1)!}}\\]",
    "trap": "The denominator $2k+1$ signals an integral of $x^{2k}$, i.e. $\\int_0^1 x^{2k}\\,dx=\\frac{1}{2k+1}$, so the generating function is $(1-x^2)^n$, NOT $(1-x)^n$. Students who integrate $(1-x)^n$ and then try to force a $2k+1$ denominator land on the WRONG alternating sum $\\sum_{k=0}^n\\frac{(-1)^k}{k+1}\\binom{n}{k}=\\frac{1}{n+1}$, missing the Wallis/Beta structure entirely. (Numerically the true value is $\\tfrac23,\\tfrac{8}{15},\\tfrac{16}{35},\\dots$ for $n=1,2,3$, never $\\tfrac1{n+1}$.)",
    "solutions": [
      {
        "name": "Integrate $(1-x^2)^n$",
        "steps": [
          "Expand $(1-x^2)^n=\\sum_{k=0}^n\\binom{n}{k}(-1)^k x^{2k}$.",
          "Integrate over $[0,1]$ term by term, using $\\int_0^1 x^{2k}\\,dx=\\frac{1}{2k+1}$, so the result is exactly $S$.",
          "Evaluate the left side with $x=\\sin\\theta$: $\\int_0^1(1-x^2)^n\\,dx=\\int_0^{\\pi/2}\\cos^{2n+1}\\theta\\,d\\theta=\\frac{(2n)!!}{(2n+1)!!}=\\frac{4^n(n!)^2}{(2n+1)!}$.",
          "Therefore $S=\\boxed{\\dfrac{4^n(n!)^2}{(2n+1)!}}$."
        ]
      },
      {
        "name": "Beta function",
        "steps": [
          "Substitute $u=x^2$ in $S=\\int_0^1(1-x^2)^n\\,dx$ to get $\\frac12\\int_0^1 u^{-1/2}(1-u)^n\\,du=\\frac12 B\\!\\left(\\tfrac12,n+1\\right)$.",
          "Then $\\frac12 B\\!\\left(\\tfrac12,n+1\\right)=\\frac12\\,\\frac{\\Gamma(\\tfrac12)\\,\\Gamma(n+1)}{\\Gamma(n+\\tfrac32)}=\\frac{\\sqrt\\pi\\,n!}{2\\,\\Gamma(n+\\tfrac32)}$.",
          "Use $\\Gamma\\!\\left(n+\\tfrac32\\right)=\\dfrac{(2n+1)!\\,\\sqrt\\pi}{4^n\\,n!\\,\\cdot 2}$ to collapse the quotient to $\\frac{4^n(n!)^2}{(2n+1)!}$.",
          "Hence $S=\\boxed{\\dfrac{4^n(n!)^2}{(2n+1)!}}$."
        ]
      },
      {
        "name": "Recursion on $n$",
        "steps": [
          "Let $I_n=\\int_0^1(1-x^2)^n\\,dx$, which equals $S$. Integration by parts (differentiate $(1-x^2)^n$, integrate $1$) gives $I_n=\\frac{2n}{2n+1}\\,I_{n-1}$.",
          "With $I_0=1$, telescoping yields $I_n=\\prod_{j=1}^n\\frac{2j}{2j+1}=\\frac{(2n)!!}{(2n+1)!!}$.",
          "Convert with $(2n)!!=2^n n!$ and $(2n+1)!!=\\frac{(2n+1)!}{2^n n!}$, so $I_n=\\frac{(2^n n!)^2}{(2n+1)!}=\\frac{4^n(n!)^2}{(2n+1)!}$.",
          "Since $S=I_n$, we get $S=\\boxed{\\dfrac{4^n(n!)^2}{(2n+1)!}}$."
        ]
      }
    ],
    "remark": "Insight: the $2k+1$ in the denominator is the signature of integrating an EVEN-powered polynomial $(1-x^2)^n$ — the same integral that produces the Wallis product $\\frac{(2n)!!}{(2n+1)!!}$. The factorial answer can be rewritten as a central-binomial form, $\\frac{4^n(n!)^2}{(2n+1)!}=\\frac{4^n}{(2n+1)\\binom{2n}{n}}$, which makes the $\\sim\\sqrt{\\pi/n}$ decay (and the link to $\\frac{\\pi}{2}$ in the infinite Wallis product) transparent."
  },
  {
    "theme": "sumsdiff",
    "themeLabel": "Binomial Sums via Calculus",
    "title": "Differentiate and Integrate in One Breath",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "hybrid",
      "differentiation",
      "integration",
      "decomposition"
    ],
    "statement": "Evaluate the closed form of \\[S=\\sum_{k=0}^{n}\\frac{k}{k+1}\\binom{n}{k},\\] a sum whose weight $\\frac{k}{k+1}$ mixes a differentiation-type factor $k$ with an integration-type factor $\\frac{1}{k+1}$.",
    "answer": "\\[\\boxed{\\dfrac{(n-1)\\,2^{\\,n}+1}{n+1}}\\]",
    "trap": "The compound weight $\\frac{k}{k+1}$ tempts a single calculus operation, but no one operator produces it. Writing $\\frac{k}{k+1}=1-\\frac{1}{k+1}$ is the key — yet students who instead try $\\frac{k}{k+1}=\\frac{(k+1)-1}{k+1}$ and then drop the constant $-1$ piece, or who reuse $\\sum\\frac{\\binom{n}{k}}{k+1}$ with the wrong sign, land on $\\frac{2^{n+1}-1}{n+1}$ — exactly the part that must be SUBTRACTED, not the answer. A second trap: forming $g(x)=\\sum_k k\\binom{n}{k}x^k$ and then dividing by $x$ before integrating produces the weight $\\frac{k}{k}=1$ and the wrong value $2^{n}-1$; the integration factor $\\frac{1}{k+1}$ comes from integrating $g(x)$ itself, NOT $g(x)/x$.",
    "solutions": [
      {
        "name": "Decompose $\\frac{k}{k+1}=1-\\frac{1}{k+1}$",
        "steps": [
          "Write $S=\\sum_{k=0}^n\\binom{n}{k}-\\sum_{k=0}^n\\frac{1}{k+1}\\binom{n}{k}$.",
          "First sum (full row) $=2^n$; second sum (integrate $(1+x)^n$ on $[0,1]$, since $\\int_0^1 x^k\\,dx=\\frac{1}{k+1}$) $=\\int_0^1(1+x)^n\\,dx=\\frac{2^{n+1}-1}{n+1}$.",
          "So $S=2^n-\\frac{2^{n+1}-1}{n+1}=\\frac{2^n(n+1)-2^{n+1}+1}{n+1}=\\frac{2^n(n+1-2)+1}{n+1}$.",
          "Hence $S=\\dfrac{(n-1)2^n+1}{n+1}=\\boxed{\\dfrac{(n-1)2^n+1}{n+1}}$."
        ]
      },
      {
        "name": "Single integral of the differentiated generating function",
        "steps": [
          "Differentiation step: form $g(x)=\\sum_{k=0}^n k\\binom{n}{k}x^k=nx(1+x)^{n-1}$, obtained from $\\sum_k\\binom{n}{k}x^k=(1+x)^n$ by applying $x\\frac{d}{dx}$.",
          "Integration step: since $\\int_0^1 x^k\\,dx=\\frac{1}{k+1}$, integrating $g$ over $[0,1]$ attaches exactly the missing factor: $\\int_0^1 g(x)\\,dx=\\sum_k k\\binom{n}{k}\\int_0^1 x^k\\,dx=\\sum_k\\frac{k}{k+1}\\binom{n}{k}=S$. (Do NOT divide by $x$ first — that would cancel to weight $\\frac{k}{k}=1$.)",
          "Evaluate $S=\\int_0^1 nx(1+x)^{n-1}\\,dx$. Substitute $u=1+x$: $S=\\int_1^2 n(u-1)u^{n-1}\\,du=n\\!\\left[\\frac{u^{n+1}}{n+1}-\\frac{u^n}{n}\\right]_1^2$.",
          "This gives $S=n\\!\\left(\\frac{2^{n+1}-1}{n+1}-\\frac{2^n-1}{n}\\right)=\\frac{n(2^{n+1}-1)}{n+1}-(2^n-1)$, which simplifies to $\\dfrac{(n-1)2^n+1}{n+1}=\\boxed{\\dfrac{(n-1)2^n+1}{n+1}}$ (check $n=3$: $\\frac{2\\cdot8+1}{4}=\\frac{17}{4}$, matching $0+\\tfrac12\\cdot3+\\tfrac23\\cdot3+\\tfrac34\\cdot1=\\tfrac{17}{4}$)."
        ]
      },
      {
        "name": "Absorption on each piece",
        "steps": [
          "Use the absorption identity $\\frac{1}{k+1}\\binom{n}{k}=\\frac{1}{n+1}\\binom{n+1}{k+1}$, so $\\sum_k\\frac{1}{k+1}\\binom{n}{k}=\\frac{1}{n+1}\\sum_{m=1}^{n+1}\\binom{n+1}{m}=\\frac{2^{n+1}-1}{n+1}$.",
          "Also $\\sum_k\\binom{n}{k}=2^n$, and $\\frac{k}{k+1}=1-\\frac1{k+1}$, so $S=2^n-\\frac{2^{n+1}-1}{n+1}$.",
          "Combine over $n+1$: $S=\\frac{(n+1)2^n-2\\cdot2^n+1}{n+1}=\\frac{(n-1)2^n+1}{n+1}$.",
          "Therefore $S=\\boxed{\\dfrac{(n-1)2^n+1}{n+1}}$."
        ]
      }
    ],
    "remark": "Insight: this is the grand hybrid of the chapter — the weight $\\frac{k}{k+1}$ cannot be made by differentiation alone or integration alone, but splits cleanly as $1-\\frac{1}{k+1}$, one piece from the full-row evaluation and one from a single integration. The slick route 2 shows the same thing operationally: $x\\frac{d}{dx}$ installs the factor $k$, and then $\\int_0^1(\\cdot)\\,dx$ installs the factor $\\frac{1}{k+1}$ — the two calculus operations compose to build the compound weight exactly. Recognizing that a compound weight decomposes into separately-solvable calculus pieces is the master skill the entire chapter builds toward."
  },
  {
    "theme": "rootsofunity",
    "themeLabel": "The Roots-of-Unity Filter",
    "title": "Every Third Coefficient",
    "difficulty": 3,
    "task": "Evaluate",
    "tags": [
      "roots of unity",
      "binomial",
      "cube roots",
      "filter"
    ],
    "statement": "Let $\\omega = e^{2\\pi i/3}$ be a primitive cube root of unity. Using the averaging $\\frac{1}{3}\\bigl[(1+1)^n + (1+\\omega)^n + (1+\\omega^2)^n\\bigr]$, evaluate \\[ S = \\sum_{j\\ge 0}\\binom{12}{3j} = \\binom{12}{0}+\\binom{12}{3}+\\binom{12}{6}+\\binom{12}{9}+\\binom{12}{12}. \\]",
    "answer": "$\\dfrac{2^{12}+2}{3}=1366$",
    "trap": "Writing $1+\\omega^2 = \\overline{1+\\omega}$ but then forgetting that $1+\\omega = e^{i\\pi/3}$ has modulus $1$ (not $\\sqrt 3$). The relation $1+\\omega+\\omega^2=0$ gives $1+\\omega=-\\omega^2$, and $|{-\\omega^2}|=1$; a student who instead writes $|1+\\omega|=\\sqrt3$ (confusing it with $|1-\\omega|=\\sqrt3$) gets $(\\sqrt3)^{12}=3^6=729$ per term and the bogus $S=\\frac{4096+2\\cdot729}{3}=\\frac{5554}{3}$, which is not even an integer.",
    "solutions": [
      {
        "name": "Roots-of-unity filter",
        "steps": [
          "The filter for residue $0\\bmod 3$ gives $S=\\frac13\\sum_{t=0}^{2}(1+\\omega^t)^n$ with $n=12$.",
          "From $1+\\omega+\\omega^2=0$ we get $1+\\omega = -\\omega^2$ and $1+\\omega^2=-\\omega$, so $(1+\\omega)^{12}=(-\\omega^2)^{12}=\\omega^{24}=1$ and $(1+\\omega^2)^{12}=(-\\omega)^{12}=\\omega^{12}=1$.",
          "Hence $S=\\tfrac13(2^{12}+1+1)=\\tfrac{4096+2}{3}=1366$.",
          "$\\boxed{1366}$."
        ]
      },
      {
        "name": "Real-part / cosine form",
        "steps": [
          "Since $1+\\omega^2=\\overline{1+\\omega}$, the two non-principal terms are conjugates, so $S=\\frac{1}{3}\\bigl(2^{n}+2\\,\\mathrm{Re}\\,(1+\\omega)^n\\bigr)$.",
          "Here $1+\\omega=\\tfrac12+\\tfrac{\\sqrt3}{2}i=e^{i\\pi/3}$ (modulus $1$), so $(1+\\omega)^n=e^{in\\pi/3}$ and $\\mathrm{Re}=\\cos\\frac{n\\pi}{3}$; thus $S=\\frac{2^n+2\\cos(n\\pi/3)}{3}$.",
          "For $n=12$, $\\cos(4\\pi)=1$, giving $S=\\frac{4096+2}{3}=1366$.",
          "$\\boxed{1366}$."
        ]
      }
    ],
    "remark": "Insight: the principal value of the filter is always $2^n$; the two leftover roots contribute only an oscillating $2\\cos(n\\pi/3)\\in\\{2,-1,-2,-1,1,1\\}$ as $n$ runs mod $6$. The whole subset-count-by-residue story is a single cosine. Note that $1+\\omega$ sits on the unit circle, whereas it is $1-\\omega$ that has modulus $\\sqrt3$ — keeping the two straight is the crux."
  },
  {
    "theme": "rootsofunity",
    "themeLabel": "The Roots-of-Unity Filter",
    "title": "The Fourth-Power Sieve at One Hundred",
    "difficulty": 3,
    "task": "Evaluate",
    "tags": [
      "roots of unity",
      "fourth roots",
      "binomial",
      "powers of i"
    ],
    "statement": "Using the fourth roots of unity $\\{1,i,-1,-i\\}$, evaluate \\[ T=\\sum_{j\\ge 0}\\binom{100}{4j}=\\binom{100}{0}+\\binom{100}{4}+\\cdots+\\binom{100}{100}. \\] Give the answer as a difference of two powers of $2$.",
    "answer": "$2^{98}-2^{49}$",
    "trap": "Mis-averaging by dividing by $2$ (only two 'real' roots $\\pm1$) instead of by $4$, the full count of fourth roots. That gives $\\tfrac12(2^{100}-2^{51})=2^{99}-2^{50}$, exactly twice the true value. The $(1+(-1))^{100}=0$ term is correctly zero, so the genuine error is the wrong normalization, not a dropped root.",
    "solutions": [
      {
        "name": "Fourth-roots filter",
        "steps": [
          "The filter $\\frac14\\sum_{x\\in\\{1,i,-1,-i\\}}x^{-4j}=[4\\mid k]$ extracts indices $k\\equiv0\\pmod4$ from $\\sum_k\\binom{100}{k}x^k=(1+x)^{100}$, so $T=\\frac14\\bigl[(1+1)^{100}+(1+i)^{100}+(1-1)^{100}+(1-i)^{100}\\bigr]$.",
          "$(1+i)^{100}=(\\sqrt2)^{100}e^{i\\cdot 100\\pi/4}=2^{50}e^{i25\\pi}=-2^{50}$, and $(1-i)^{100}=\\overline{(1+i)^{100}}=-2^{50}$; the $(1-1)^{100}$ term is $0$.",
          "$T=\\frac14\\bigl(2^{100}-2^{50}-2^{50}\\bigr)=\\frac{2^{100}-2^{51}}{4}=2^{98}-2^{49}$.",
          "$\\boxed{2^{98}-2^{49}}$."
        ]
      },
      {
        "name": "Real part of $(1+i)^n$",
        "steps": [
          "Since $0^{100}=0$ and the $\\pm i$ terms are conjugates, $T=\\frac14\\bigl(2^{n}+2\\,\\mathrm{Re}(1+i)^n\\bigr)$ with $n=100$.",
          "$\\mathrm{Re}(1+i)^n=2^{n/2}\\cos\\frac{n\\pi}{4}$; at $n=100$, $\\cos25\\pi=-1$, so $\\mathrm{Re}=-2^{50}$.",
          "$T=\\frac14\\bigl(2^{100}-2\\cdot2^{50}\\bigr)=\\frac14(2^{100}-2^{51})=2^{98}-2^{49}$.",
          "$\\boxed{2^{98}-2^{49}}$."
        ]
      }
    ],
    "remark": "Insight: $(1+i)^n=2^{n/2}e^{in\\pi/4}$ is the engine of every $\\bmod 4$ filter; the half-integer power of $2$ ($2^{49}$) is the fingerprint that you used $\\sqrt2$, not $\\sqrt3$ or $2$. Sanity check: the four residue sums must total $2^{100}$. Filtering $S_r=\\frac14\\sum_x x^{-r}(1+x)^{100}$ gives $S_0=2^{98}-2^{49}$, $S_1=S_3=2^{98}$, and $S_2=2^{98}+2^{49}$, which sum to $4\\cdot2^{98}=2^{100}$ as required."
  },
  {
    "theme": "rootsofunity",
    "themeLabel": "The Roots-of-Unity Filter",
    "title": "A Tie Among Three Residues",
    "difficulty": 4,
    "task": "Prove that",
    "tags": [
      "roots of unity",
      "residue classes",
      "binomial",
      "parity"
    ],
    "statement": "For each $n\\ge 0$, let \\[ A_n=\\!\\sum_{j}\\binom{n}{3j},\\quad B_n=\\!\\sum_{j}\\binom{n}{3j+1},\\quad C_n=\\!\\sum_{j}\\binom{n}{3j+2}. \\] Prove that $A_n,B_n,C_n$ are never all three equal, that some two of them are always equal, and that they differ pairwise by at most $1$. Determine exactly which pair is equal as a function of $n\\bmod 6$.",
    "answer": "$A_n-B_n,\\,B_n-C_n,\\,A_n-C_n\\in\\{-1,0,1\\}$ for every $n$, and never all three are equal. The equal pair is: $B_n=C_n$ iff $n\\equiv 0,3\\pmod 6$; $A_n=B_n$ iff $n\\equiv 1,4\\pmod 6$; $A_n=C_n$ iff $n\\equiv 2,5\\pmod 6$. Proved.",
    "trap": "Concluding $A_n=B_n=C_n=2^n/3$ 'by symmetry' because the three residue classes look interchangeable. The hidden constraint is that $2^n$ is never divisible by $3$, so the classes cannot be exactly equal; the cosine correction term forces a $\\pm1$ imbalance, and the three correction values are a permutation of $\\{2,-1,-1\\}$ or of $\\{-2,1,1\\}$, never $\\{0,0,0\\}$.",
    "solutions": [
      {
        "name": "Three filters, one cosine",
        "steps": [
          "Let $\\omega=e^{2\\pi i/3}$. The roots-of-unity filter gives $A_n=\\tfrac13\\sum_{t=0}^{2}(1+\\omega^t)^n$, and more generally the class $r$ sum is $\\tfrac13\\sum_{t=0}^{2}\\omega^{-rt}(1+\\omega^t)^n$, so $B_n$ uses $r=1$ and $C_n$ uses $r=2$.",
          "The $t=0$ term contributes $\\tfrac{2^n}{3}$ to each. Since $1+\\omega=e^{i\\pi/3}$ and $1+\\omega^2=e^{-i\\pi/3}$ are conjugate, the $t=1,2$ terms for class $r$ combine into $\\tfrac13\\cdot 2\\,\\mathrm{Re}\\!\\bigl(\\omega^{-r}e^{in\\pi/3}\\bigr)=\\tfrac{2}{3}\\cos\\!\\bigl(\\tfrac{(n-2r)\\pi}{3}\\bigr)$.",
          "Hence $A_n=\\dfrac{2^n+2\\cos\\frac{n\\pi}{3}}{3}$, $B_n=\\dfrac{2^n+2\\cos\\frac{(n-2)\\pi}{3}}{3}$, $C_n=\\dfrac{2^n+2\\cos\\frac{(n-4)\\pi}{3}}{3}$. Each pairwise difference equals $\\tfrac23$ times a difference of cosines of two angles that are an integer multiple of $\\tfrac{2\\pi}{3}$ apart; such a difference lies in $\\{-\\tfrac32,0,\\tfrac32\\}$, so each of $A_n-B_n,B_n-C_n,A_n-C_n$ lies in $\\{-1,0,1\\}$.",
          "Two values are equal exactly when their cosines coincide. As $n$ runs over a residue mod $6$, the triple $\\bigl(2\\cos\\frac{n\\pi}{3},2\\cos\\frac{(n-2)\\pi}{3},2\\cos\\frac{(n-4)\\pi}{3}\\bigr)$ is a cyclic shift of $(2,-1,-1)$ or of $(-2,1,1)$: for $n\\equiv0$ it is $(2,-1,-1)$ giving $B_n=C_n$; $n\\equiv1\\to(1,1,-2)$ giving $A_n=B_n$; $n\\equiv2\\to(-1,2,-1)$ giving $A_n=C_n$; $n\\equiv3\\to(-2,1,1)$ giving $B_n=C_n$; $n\\equiv4\\to(-1,-1,2)$ giving $A_n=B_n$; $n\\equiv5\\to(1,-2,1)$ giving $A_n=C_n$. All three equal would force the three cosines to coincide, i.e. $2^n\\equiv0\\pmod3$, which is impossible. $\\blacksquare$"
        ]
      },
      {
        "name": "Direct verification mod 6",
        "steps": [
          "Set $a_n=2\\cos\\frac{n\\pi}{3}$. As $n\\equiv0,1,2,3,4,5\\pmod6$ this cycles through $2,1,-1,-2,-1,1$. Writing $A_n,B_n,C_n$ as in the cosine identity, the three correction terms are $a_n,a_{n-2},a_{n-4}$, whose multiset is always $\\{2,-1,-1\\}$ (when $a_n\\in\\{2,-1\\}$ falls on a class) or $\\{-2,1,1\\}$, never $\\{0,0,0\\}$.",
          "Since $A_n+B_n+C_n=2^n$ and $2^n\\not\\equiv0\\pmod3$ for all $n$, the equality $A_n=B_n=C_n$ would force $3\\mid 2^n$, a contradiction; so the three are never all equal.",
          "The three values are $\\dfrac{2^n+\\sigma}{3}$ where $\\sigma$ ranges over a permutation of $(2,-1,-1)$ or of $(-2,1,1)$. In either case the lone entry differs from each of the two equal entries by $\\pm3$, so the corresponding $A,B,C$ differ by exactly $1$ there and the two equal corrections give an exactly equal pair; thus all pairwise differences lie in $\\{-1,0,1\\}$ and precisely one pair coincides.",
          "The position of the lone correction (the unique value $\\pm2$) pins the equal pair: it is read off from $n\\bmod6$, giving $B_n=C_n$ for $n\\equiv0,3$, $A_n=B_n$ for $n\\equiv1,4$, and $A_n=C_n$ for $n\\equiv2,5$. $\\blacksquare$"
        ]
      }
    ],
    "remark": "Insight: the filter does not say the residue classes are equal — it says they agree up to a tiny cosine wobble of size at most $1$. The arithmetic obstruction $3\\nmid 2^n$ guarantees the wobble can never vanish on all three classes at once, so exactly two of $A_n,B_n,C_n$ tie while the third is off by $1$; which two tie is governed entirely by $n\\bmod 6$."
  },
  {
    "theme": "rootsofunity",
    "themeLabel": "The Roots-of-Unity Filter",
    "title": "Imaginary Harvest",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "roots of unity",
      "imaginary part",
      "fourth roots",
      "alternating"
    ],
    "statement": "Evaluate the alternating odd-index sum \\[ U=\\sum_{j\\ge0}(-1)^{j}\\binom{n}{2j+1}=\\binom{n}{1}-\\binom{n}{3}+\\binom{n}{5}-\\cdots \\] in closed form for all $n\\ge1$, and state for which $n$ it vanishes.",
    "answer": "$U=2^{n/2}\\sin\\dfrac{n\\pi}{4}$; it vanishes iff $4\\mid n$.",
    "trap": "Treating $U$ as a real-coefficient filter and writing it as a $\\frac12[(1+1)^n-(1-1)^n]$ type expression — that gives the unsigned odd-index sum $2^{n-1}$, ignoring the $(-1)^j$ which secretly inserts $x=i$, turning the problem into an imaginary part, not a real one.",
    "solutions": [
      {
        "name": "Imaginary part of $(1+i)^n$",
        "steps": [
          "Expand $(1+i)^n=\\sum_k\\binom{n}{k}i^k$. The even powers $k=2j$ give $i^{2j}=(-1)^j$ (purely real) and the odd powers $k=2j+1$ give $i^{2j+1}=(-1)^j i$ (purely imaginary).",
          "Hence $\\mathrm{Im}(1+i)^n=\\sum_j(-1)^j\\binom{n}{2j+1}=U$ exactly — the signed odd filter is the imaginary part with substitution $x=i$.",
          "Write $1+i=\\sqrt2\\,e^{i\\pi/4}$, so $(1+i)^n=2^{n/2}e^{in\\pi/4}=2^{n/2}\\left(\\cos\\tfrac{n\\pi}{4}+i\\sin\\tfrac{n\\pi}{4}\\right)$.",
          "Taking the imaginary part gives $U=2^{n/2}\\sin\\frac{n\\pi}{4}$, which is $0$ exactly when $\\sin\\frac{n\\pi}{4}=0$, i.e. $\\frac{n\\pi}{4}\\in\\pi\\mathbb{Z}$, i.e. $4\\mid n$.",
          "$\\boxed{U=2^{n/2}\\sin\\frac{n\\pi}{4},\\quad U=0\\iff 4\\mid n}$."
        ]
      },
      {
        "name": "Fourth-root-of-unity filter on a shifted generating function",
        "steps": [
          "The odd-index extractor uses $\\omega=\\pm1$: $\\sum_j\\binom{n}{2j+1}x^{2j+1}=\\frac12\\big[(1+x)^n-(1-x)^n\\big]$, valid as a polynomial identity in $x$.",
          "We need the *signed* sum $\\sum_j(-1)^j\\binom{n}{2j+1}$. Since $(-1)^j=(i^2)^j$ and the running power is $x^{2j+1}$, choosing $x=i$ makes $x^{2j+1}=i^{2j+1}=(-1)^j i$, so $\\frac1i\\sum_j\\binom{n}{2j+1}i^{2j+1}=\\sum_j(-1)^j\\binom{n}{2j+1}=U$.",
          "Apply the extractor at $x=i$: $\\sum_j\\binom{n}{2j+1}i^{2j+1}=\\frac12\\big[(1+i)^n-(1-i)^n\\big]$.",
          "Since $1-i=\\overline{1+i}$, the bracket is $(1+i)^n-\\overline{(1+i)^n}=2i\\,\\mathrm{Im}(1+i)^n$, so $\\frac12\\big[(1+i)^n-(1-i)^n\\big]=i\\,\\mathrm{Im}(1+i)^n=i\\,2^{n/2}\\sin\\frac{n\\pi}{4}$.",
          "Dividing by $i$: $U=2^{n/2}\\sin\\frac{n\\pi}{4}$, vanishing precisely when $4\\mid n$. $\\boxed{U=2^{n/2}\\sin\\frac{n\\pi}{4}}$."
        ]
      }
    ],
    "remark": "Insight: a sign $(-1)^j$ riding on the *index* is the tell-tale that the hidden substitution is $x=i$, not $x=\\pm1$. A real filter reads off a real part and lands on a power of $2$; a signed filter reads off an imaginary part and lands on $2^{n/2}\\sin\\frac{n\\pi}{4}$ — same machinery, complex evaluation point. The eight-fold period of $\\sin\\frac{n\\pi}{4}$ also explains the visible pattern $1,2,2,0,-4,-8,-8,0,\\dots$"
  },
  {
    "theme": "rootsofunity",
    "themeLabel": "The Roots-of-Unity Filter",
    "title": "The Hexagonal Filter",
    "difficulty": 4,
    "task": "Find a,b",
    "tags": [
      "roots of unity",
      "sixth roots",
      "binomial",
      "closed form"
    ],
    "statement": "For $n\\ge 1$, the sum over multiples of six is \\[ H_n=\\sum_{j\\ge0}\\binom{n}{6j}. \\] It is claimed that \\[ H_n=\\frac{1}{6}\\Bigl(2^n+a\\cdot 3^{\\,n/2}\\cos\\tfrac{n\\pi}{6}+b\\cos\\tfrac{n\\pi}{3}\\Bigr) \\] for constants $a,b$ independent of $n$. Find $a$ and $b$, and hence evaluate $H_{12}$.",
    "answer": "$a=2,\\ b=2,\\quad H_{12}=926$",
    "trap": "Assuming $|1+\\zeta|=\\sqrt3$ for every nontrivial sixth root $\\zeta$ and pulling a single $3^{n/2}$ out of all the surviving terms. In fact $1+\\zeta_6=\\sqrt3\\,e^{i\\pi/6}$ has modulus $\\sqrt3$, but $1+\\zeta_6^2=e^{i\\pi/3}$ has modulus $1$, and $1+\\zeta_6^3=0$ contributes nothing for $n\\ge1$ — three genuinely different magnitudes, not one. Collapsing them gives the wrong frequency content.",
    "solutions": [
      {
        "name": "Sort the six roots by magnitude",
        "steps": [
          "With $\\zeta=e^{i\\pi/3}$ a primitive sixth root of unity, the filter gives $H_n=\\frac16\\sum_{t=0}^{5}(1+\\zeta^t)^n$.",
          "Evaluate each base: $1+\\zeta^0=2$; $1+\\zeta=\\sqrt3\\,e^{i\\pi/6}$; $1+\\zeta^2=e^{i\\pi/3}$; $1+\\zeta^3=0$; and $t=4,5$ are the complex conjugates of $t=2,1$. The three nonzero magnitudes are $2,\\ \\sqrt3,\\ 1$.",
          "For $n\\ge1$ the $t=3$ base contributes $0^n=0$, so it drops out. Pairing the conjugate terms turns each into twice a real part: $H_n=\\frac16\\bigl[2^n+2\\,\\mathrm{Re}\\bigl((\\sqrt3 e^{i\\pi/6})^n\\bigr)+2\\,\\mathrm{Re}\\bigl((e^{i\\pi/3})^n\\bigr)\\bigr]=\\frac16\\bigl[2^n+2\\cdot3^{n/2}\\cos\\tfrac{n\\pi}{6}+2\\cos\\tfrac{n\\pi}{3}\\bigr]$.",
          "Reading off the coefficients gives $a=2,\\ b=2$.",
          "For $n=12$: $\\cos 2\\pi=\\cos 4\\pi=1$ and $3^{6}=729$, so $H_{12}=\\frac16(4096+2\\cdot729+2)=\\frac{5556}{6}=926$. $\\boxed{a=2,\\,b=2,\\,H_{12}=926}$"
        ]
      },
      {
        "name": "Match two values and pin the constants",
        "steps": [
          "The roots-of-unity filter guarantees a closed form of the shape $H_n=\\frac16\\bigl(2^n+a\\cdot3^{n/2}\\cos\\tfrac{n\\pi}{6}+b\\cos\\tfrac{n\\pi}{3}\\bigr)$ for $n\\ge1$, where $2,\\sqrt3,1$ are the moduli of the surviving bases; only $a,b$ remain to be fixed.",
          "Compute two direct values: $H_7=\\binom70+\\binom76=1+7=8$ and $H_8=\\binom80+\\binom86=1+28=29$.",
          "Substituting $n=7$ gives $48=128+a\\cdot3^{7/2}\\cos\\tfrac{7\\pi}{6}+b\\cos\\tfrac{7\\pi}{3}$ and $n=8$ gives $174=256+a\\cdot3^{4}\\cos\\tfrac{8\\pi}{6}+b\\cos\\tfrac{8\\pi}{3}$. With $\\cos\\tfrac{7\\pi}{6}=-\\tfrac{\\sqrt3}{2}$, $\\cos\\tfrac{7\\pi}{3}=\\tfrac12$, $\\cos\\tfrac{4\\pi}{3}=-\\tfrac12$, $\\cos\\tfrac{2\\pi}{3}=-\\tfrac12$, these become two linear equations in $a,b$ whose unique solution is $a=2,\\ b=2$.",
          "With $a=b=2$ fixed, substituting $n=12$ gives $H_{12}=\\frac{4096+1458+2}{6}=926$. $\\boxed{a=2,\\,b=2,\\,H_{12}=926}$"
        ]
      }
    ],
    "remark": "Insight: the sixth-roots filter has three distinct radii because $1+\\zeta$ is a chord of the unit circle whose length depends on the arc — $\\sqrt3$, $1$, and $0$ as $\\zeta$ runs through $\\zeta_6,\\zeta_6^2,\\zeta_6^3$. The $3^{n/2}$ and the $1^n$ pieces are genuinely different frequencies; collapsing them into one $3^{n/2}$ is the classic error. The restriction $n\\ge1$ matters: at $n=0$ the dropped $0^n=0^0=1$ term would resurface, so the clean three-term form is an $n\\ge1$ statement."
  },
  {
    "theme": "rootsofunity",
    "themeLabel": "The Roots-of-Unity Filter",
    "title": "Loaded Dice Modulo Five",
    "difficulty": 4,
    "task": "Find the probability",
    "tags": [
      "roots of unity",
      "probability",
      "generating function",
      "modular"
    ],
    "statement": "A fair six-sided die (faces $1$–$6$) is rolled three times. Using the fifth roots of unity to filter the generating function $f(x)=x+x^2+x^3+x^4+x^5+x^6$, find the probability that the sum of the three rolls is divisible by $5$.",
    "answer": "$\\dfrac{43}{216}$",
    "trap": "Assuming the probability is exactly $\\frac15$ 'because sums mod $5$ are equidistributed.' The die's faces cover residues $\\{0,1,1,2,3,4\\}\\pmod5$ unevenly (residue $1$ appears twice), so $f(\\zeta)\\ne0$ for primitive $\\zeta$, breaking the symmetry that would force $\\frac15$.",
    "solutions": [
      {
        "name": "Roots-of-unity filter on the GF",
        "steps": [
          "The number of favorable outcomes is $N=\\frac15\\sum_{t=0}^{4}f(\\zeta^t)^3$ where $\\zeta=e^{2\\pi i/5}$ and $f(x)=\\sum_{a=1}^{6}x^a$.",
          "$f(1)=6$. For $t\\ne0$, $f(\\zeta^t)=\\sum_{a=1}^{6}\\zeta^{ta}$; since $\\sum_{a=0}^{4}\\zeta^{ta}=0$, the faces $1..5$ sum to $0$ minus the $a=0$ slot, leaving $f(\\zeta^t)=\\zeta^{6t}=\\zeta^{t}$ (only the extra face $6\\equiv1$ survives).",
          "So $N=\\frac15\\bigl(6^3+\\sum_{t=1}^{4}\\zeta^{3t}\\bigr)=\\frac15\\bigl(216+(-1)\\bigr)=\\frac{215}{5}=43$ favorable outcomes out of $6^3=216$.",
          "Probability $=\\dfrac{43}{216}$. $\\boxed{\\dfrac{43}{216}}$."
        ]
      },
      {
        "name": "Direct DP cross-check",
        "steps": [
          "Track the distribution of the running sum mod $5$. After one roll the counts on residues $(0,1,2,3,4)$ are $(1,2,1,1,1)$.",
          "Convolve twice more (multiply by the same residue vector under cyclic convolution); the residue-$0$ count after three rolls is $43$.",
          "Total outcomes $216$, so probability $=\\frac{43}{216}$, matching the filter.",
          "$\\boxed{\\dfrac{43}{216}}$."
        ]
      }
    ],
    "remark": "Insight: the filter exposes exactly why the answer is not $\\frac15$ — the non-principal terms $\\sum\\zeta^{3t}=-1$ are the deviation from uniform. Equidistribution holds only when $f(\\zeta)=0$ at every primitive root, i.e. when faces hit each residue equally."
  },
  {
    "theme": "rootsofunity",
    "themeLabel": "The Roots-of-Unity Filter",
    "title": "A Cosine in Disguise",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "roots of unity",
      "complex weight",
      "trig fusion",
      "binomial"
    ],
    "statement": "Evaluate the weighted even-index sum \\[ V=\\sum_{j\\ge0}(-3)^{j}\\binom{n}{2j}=\\binom{n}{0}-3\\binom{n}{2}+9\\binom{n}{4}-\\cdots \\] in closed form for every integer $n\\ge0$, and determine the sign of $V$ as a function of $n$ (in particular, decide whether $V$ can ever be zero).",
    "answer": "$V=2^{n}\\cos\\dfrac{n\\pi}{3}$. Since $\\cos\\dfrac{n\\pi}{3}\\in\\{1,\\tfrac12,-\\tfrac12,-1\\}$ for integer $n$, $V$ is \\emph{never} zero: $V>0\\iff n\\equiv0,1,5\\pmod6$ and $V<0\\iff n\\equiv2,3,4\\pmod6$.",
    "trap": "Writing $1+i\\sqrt3$ but reading its modulus off the wrong coordinates: using $\\sqrt{1^2+3^2}=\\sqrt{10}$ (treating the $\\sqrt3$ as a $3$) gives the bogus $10^{n/2}\\cos\\frac{n\\pi}{3}$ instead of the correct $2^{n}$. A second, deadlier slip is declaring $V=0$ whenever $n\\equiv3\\pmod6$: there $\\cos\\frac{n\\pi}{3}=\\cos\\pi=-1$, so $V=-2^{n}$ is as far from zero as possible. Because $\\cos\\frac{n\\pi}{3}$ skips the value $0$ entirely over the integers, $V$ has no zeros at all.",
    "solutions": [
      {
        "name": "Real part of $(1+i\\sqrt3)^n$",
        "steps": [
          "The weight $(-3)^j$ on $\\binom{n}{2j}$ is the even part of $\\sum_k\\binom{n}{k}(i\\sqrt3)^k$, since $(i\\sqrt3)^{2j}=i^{2j}3^{j}=(-3)^j$ while odd powers are imaginary; hence $V=\\mathrm{Re}\\,(1+i\\sqrt3)^n$.",
          "In polar form $1+i\\sqrt3=2e^{i\\pi/3}$ (modulus $\\sqrt{1+3}=2$, argument $\\arctan\\sqrt3=\\tfrac{\\pi}{3}$), so $(1+i\\sqrt3)^n=2^n e^{in\\pi/3}$ and $V=2^n\\cos\\tfrac{n\\pi}{3}$.",
          "For integer $n$, $\\tfrac{n\\pi}{3}$ is a multiple of $60^\\circ$, where $\\cos$ only takes the values $1,\\tfrac12,-\\tfrac12,-1$ — never $0$. Thus $V\\ne0$ for all $n$.",
          "Reading the sign of $\\cos\\tfrac{n\\pi}{3}$ around its period $6$ gives $V>0$ for $n\\equiv0,1,5\\pmod6$ and $V<0$ for $n\\equiv2,3,4\\pmod6$. $\\boxed{V=2^n\\cos\\tfrac{n\\pi}{3}}$"
        ]
      },
      {
        "name": "Pair with the conjugate root",
        "steps": [
          "Adding the conjugate kills every odd-$k$ term and doubles each even one, so $V=\\tfrac12\\bigl[(1+i\\sqrt3)^n+(1-i\\sqrt3)^n\\bigr]$, which is exactly the even part with weight $(i\\sqrt3)^{2j}=(-3)^j$.",
          "Both bases have modulus $2$ and arguments $\\pm\\tfrac{\\pi}{3}$, so $V=\\tfrac12\\bigl(2^n e^{in\\pi/3}+2^n e^{-in\\pi/3}\\bigr)=2^n\\cos\\tfrac{n\\pi}{3}$.",
          "The two roots solve $x^2-2x+4=0$ (sum $2$, product $|1+i\\sqrt3|^2=4$), so $V$ obeys $V_n=2V_{n-1}-4V_{n-2}$ with $V_0=V_1=1$; iterating gives $1,1,-2,-8,-8,16,64,\\dots$, matching $2^n\\cos\\tfrac{n\\pi}{3}$ and confirming no term is $0$.",
          "Since $\\cos\\tfrac{n\\pi}{3}$ never vanishes on the integers, $V\\ne0$ always; its sign is $+$ for $n\\equiv0,1,5$ and $-$ for $n\\equiv2,3,4\\pmod6$. $\\boxed{V=2^n\\cos\\tfrac{n\\pi}{3}}$"
        ]
      }
    ],
    "remark": "Insight: $1+i\\sqrt3$ lands precisely on modulus $2$ and argument $60^\\circ$ — the cube-root geometry — so the $(-3)^j$ weight is the $120^\\circ$ filter in a Cartesian costume. The punchline is what does \\emph{not} happen: a cosine sampled at multiples of $60^\\circ$ steps over $0$, so this oscillating, sign-flipping sum is never zero, even though it looks like it should vanish somewhere."
  },
  {
    "theme": "rootsofunity",
    "themeLabel": "The Roots-of-Unity Filter",
    "title": "Three Generations of a Power Tower",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "roots of unity",
      "cube roots",
      "large exponent",
      "real and imaginary parts"
    ],
    "statement": "Let $n=2025$ and let $\\omega=e^{2\\pi i/3}$ be a primitive cube root of unity. Determine, as exact integers, the ordered pair of residue-class sums \\[ \\Bigl(\\,\\sum_{j}\\binom{n}{3j},\\ \\sum_{j}\\binom{n}{3j+1}\\,\\Bigr) \\] expressed in the form $\\bigl(\\tfrac{2^{n}+a}{3},\\ \\tfrac{2^{n}+b}{3}\\bigr)$, by first computing $(1+\\omega)^{2025}$. State $a$ and $b$.",
    "answer": "$a=-2,\\ b=1$, i.e. $\\Bigl(\\dfrac{2^{2025}-2}{3},\\,\\dfrac{2^{2025}+1}{3}\\Bigr)$.",
    "trap": "Reducing the exponent $2025$ modulo $3$ (the order of $\\omega$) instead of modulo $6$ (the order of $1+\\omega=e^{i\\pi/3}$). The base of the power is $1+\\omega$, whose argument is $\\pi/3$, so its period is $6$, not $3$. A solver who writes $2025\\equiv 0\\pmod 3$ and concludes $(1+\\omega)^{2025}=(1+\\omega)^0=1$ obtains the wrong value $a=+2$; the correct value of the power is $-1$, giving $a=-2$.",
    "solutions": [
      {
        "name": "Reduce the argument mod 6",
        "steps": [
          "Write $1+\\omega$ in polar form. Since $\\omega=-\\tfrac12+\\tfrac{\\sqrt3}{2}i$, we get $1+\\omega=\\tfrac12+\\tfrac{\\sqrt3}{2}i=e^{i\\pi/3}$, a unit-modulus number of argument $\\tfrac\\pi3$; its multiplicative order is $6$.",
          "Hence $(1+\\omega)^{2025}=e^{i\\,2025\\pi/3}$. Reduce $2025\\bmod 6=3$, giving $e^{i\\pi}=-1$. By conjugation, $(1+\\omega^{2})^{2025}=\\overline{(1+\\omega)^{2025}}=-1$ as well.",
          "Roots-of-unity filter for class $0$: $A=\\tfrac13\\bigl(2^{2025}+(1+\\omega)^{2025}+(1+\\omega^{2})^{2025}\\bigr)=\\tfrac13\\bigl(2^{2025}-1-1\\bigr)=\\dfrac{2^{2025}-2}{3}$, so $a=-2$.",
          "For class $1$ insert the twist $\\omega^{-k}$: $B=\\tfrac13\\bigl(2^{2025}+\\omega^{-1}(1+\\omega)^{2025}+\\omega^{-2}(1+\\omega^{2})^{2025}\\bigr)=\\tfrac13\\bigl(2^{2025}-(\\omega^{2}+\\omega)\\bigr)$. Since $\\omega+\\omega^{2}=-1$, this is $\\tfrac13(2^{2025}+1)$, so $b=1$.",
          "$\\boxed{a=-2,\\ b=1}$."
        ]
      },
      {
        "name": "Cosine table at $n\\equiv 3\\pmod 6$",
        "steps": [
          "Taking real parts of the filter gives the closed forms $A_n=\\dfrac{2^{n}+2\\cos(n\\pi/3)}{3}$ and $B_n=\\dfrac{2^{n}+2\\cos((n-2)\\pi/3)}{3}$, valid for every $n$.",
          "At $n=2025\\equiv 3\\pmod 6$: $\\cos(n\\pi/3)=\\cos\\pi=-1$, so the numerator correction is $a=2(-1)=-2$.",
          "Likewise $\\cos((n-2)\\pi/3)=\\cos\\tfrac\\pi3=\\tfrac12$, so $b=2\\cdot\\tfrac12=1$.",
          "Hence $A=\\dfrac{2^{2025}-2}{3}$ and $B=\\dfrac{2^{2025}+1}{3}$, i.e. $\\boxed{a=-2,\\ b=1}$."
        ]
      }
    ],
    "remark": "Insight: powers of $1+\\omega$ live mod $6$, not mod $3$ — a subtlety that stays invisible until the exponent is odd. Here the parity of $2025$ is exactly what flips $(1+\\omega)^{2025}$ from the naive $+1$ to the true $-1$. The $-2$ versus $+1$ split is precisely the cosine sampling $2\\cos\\pi$ against $2\\cos\\tfrac\\pi3$, and one checks $A+B+C=2^{2025}$ with $C=\\tfrac{2^{2025}+1}{3}$ closing the books."
  },
  {
    "theme": "rootsofunity",
    "themeLabel": "The Roots-of-Unity Filter",
    "title": "The Binomial Spectrum",
    "difficulty": 5,
    "task": "Prove that",
    "tags": [
      "roots of unity",
      "cosine identity",
      "spectral",
      "fusion"
    ],
    "statement": "For any real $\\theta$ and integer $n\\ge0$, prove the spectral identity \\[ \\sum_{k=0}^{n}\\binom{n}{k}\\cos(k\\theta)=2^{n}\\cos^{n}\\!\\tfrac{\\theta}{2}\\,\\cos\\tfrac{n\\theta}{2}, \\] and deduce that for $\\theta=\\tfrac{2\\pi}{3}$ the sum equals $\\cos\\tfrac{n\\pi}{3}$ — recovering exactly the cosine wobble of the $\\bmod 3$ filter.",
    "answer": "$\\displaystyle\\sum_{k=0}^{n}\\binom{n}{k}\\cos(k\\theta)=2^{n}\\cos^{n}\\tfrac{\\theta}{2}\\cos\\tfrac{n\\theta}{2}$; at $\\theta=\\tfrac{2\\pi}{3}$ it is $\\cos\\tfrac{n\\pi}{3}$; proved.",
    "trap": "Trying to prove it by treating $\\cos(k\\theta)$ termwise with a product-to-sum expansion and drowning in cross terms, instead of recognizing the whole sum as $\\mathrm{Re}(1+e^{i\\theta})^n$ — the single substitution $x=e^{i\\theta}$ that turns it into a half-angle factorization. A second seductive misstep is to guess the answer is $2^n\\cos^n\\theta$ (forgetting the half-angle), which already fails at $\\theta=1,\\ n=5$.",
    "solutions": [
      {
        "name": "Real part of $(1+e^{i\\theta})^n$",
        "steps": [
          "Since $\\cos(k\\theta)=\\mathrm{Re}\\,e^{ik\\theta}$ and the binomial coefficients are real, $\\sum_{k=0}^n\\binom{n}{k}\\cos(k\\theta)=\\mathrm{Re}\\sum_{k=0}^n\\binom{n}{k}(e^{i\\theta})^k=\\mathrm{Re}(1+e^{i\\theta})^n$ by the binomial theorem.",
          "Factor $1+e^{i\\theta}=e^{i\\theta/2}\\bigl(e^{-i\\theta/2}+e^{i\\theta/2}\\bigr)=2\\cos\\tfrac\\theta2\\,e^{i\\theta/2}$, hence $(1+e^{i\\theta})^n=2^n\\cos^n\\tfrac\\theta2\\,e^{in\\theta/2}$ (valid for all real $\\theta$, the factor $\\cos\\tfrac\\theta2$ carrying its own sign).",
          "Taking the real part gives $\\mathrm{Re}\\bigl(2^n\\cos^n\\tfrac\\theta2\\,e^{in\\theta/2}\\bigr)=2^n\\cos^n\\tfrac\\theta2\\cos\\tfrac{n\\theta}{2}$, the claimed identity.",
          "At $\\theta=\\tfrac{2\\pi}{3}$: $\\cos\\tfrac\\theta2=\\cos\\tfrac\\pi3=\\tfrac12$, so the right side is $2^n\\bigl(\\tfrac12\\bigr)^n\\cos\\tfrac{n\\pi}{3}=\\cos\\tfrac{n\\pi}{3}$. $\\blacksquare$"
        ]
      },
      {
        "name": "Induction via angle-addition",
        "steps": [
          "Write $S_n=\\sum_{k=0}^n\\binom{n}{k}\\cos(k\\theta)=\\mathrm{Re}\\,(1+e^{i\\theta})^n$ and prove $(1+e^{i\\theta})^n=2^n\\cos^n\\tfrac\\theta2\\,e^{in\\theta/2}$ by induction. Base $n=0$: both sides equal $1$.",
          "Inductive step: assume $(1+e^{i\\theta})^n=2^n\\cos^n\\tfrac\\theta2\\,e^{in\\theta/2}$. Multiply by $1+e^{i\\theta}=2\\cos\\tfrac\\theta2\\,e^{i\\theta/2}$.",
          "The product is $2^{n+1}\\cos^{n+1}\\tfrac\\theta2\\,e^{i(n+1)\\theta/2}$, which is the statement for $n+1$; taking real parts gives $S_{n+1}=2^{n+1}\\cos^{n+1}\\tfrac\\theta2\\cos\\tfrac{(n+1)\\theta}{2}$, completing the induction.",
          "Specializing $\\theta=\\tfrac{2\\pi}{3}$ gives $\\cos^n\\tfrac\\pi3=2^{-n}$, so $S_n=2^n\\cdot2^{-n}\\cos\\tfrac{n\\pi}{3}=\\cos\\tfrac{n\\pi}{3}$. $\\blacksquare$"
        ]
      }
    ],
    "remark": "Insight: this single identity is the generating engine behind every cosine that appeared in the chapter — the $\\bmod k$ filter just samples $\\theta=\\tfrac{2\\pi r}{k}$. The factor $2^n\\cos^n\\tfrac\\theta2$ is exactly the modulus $|1+e^{i\\theta}|^n$, and $\\cos\\tfrac{n\\theta}{2}$ encodes the rotation $\\arg(1+e^{i\\theta})^n$."
  },
  {
    "theme": "rootsofunity",
    "themeLabel": "The Roots-of-Unity Filter",
    "title": "Filter Meets Derivative",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "roots of unity",
      "derivative operator",
      "weighted sum",
      "cube roots"
    ],
    "statement": "Combining the cube-roots filter with the operator $x\\frac{d}{dx}$, evaluate the index-weighted sum \\[ W=\\sum_{j\\ge0}(3j)\\binom{n}{3j}\\quad\\text{for }n=11, \\] i.e. $3\\binom{11}{3}+6\\binom{11}{6}+9\\binom{11}{9}$.",
    "answer": "$W=n\\cdot\\dfrac{2^{n-1}+2\\cos\\frac{(n-5)\\pi}{3}}{3}\\Big|_{n=11}=11\\cdot\\dfrac{2^{10}+2}{3}=11\\cdot342=3762$",
    "trap": "Applying $x\\frac{d}{dx}$ to $(1+x)^n$ and only then averaging over the roots, but substituting $x=1,\\omega,\\omega^2$ into the derivative $n(1+x)^{n-1}$ while forgetting the extra factor $x=\\omega^t$ that the operator $x\\frac{d}{dx}$ leaves out front. Dropping that weight $\\omega^t$ replaces each off-real term $g(\\omega^t)=+11$ by $11e^{\\pm 4i\\pi/3}=-\\tfrac{11}{2}\\mp\\tfrac{11\\sqrt3}{2}i$, whose real sum is $-11$, giving the seductive but wrong $\\frac{11264-11}{3}=3751$.",
    "solutions": [
      {
        "name": "Operate then filter",
        "steps": [
          "Let $g(x)=\\sum_k k\\binom{n}{k}x^k=x\\frac{d}{dx}(1+x)^n=nx(1+x)^{n-1}$. The filter keeps indices $\\equiv0\\pmod3$, so $W=\\frac13\\sum_{t=0}^2 g(\\omega^t)$ with $\\omega=e^{2i\\pi/3}$. The operator leaves a bare $\\omega^t$ in front of the derivative; keeping it is the whole game.",
          "With $n=11$: $g(1)=11\\cdot1\\cdot2^{10}=11264$. For $g(\\omega)$ use $1+\\omega=e^{i\\pi/3}$, so $(1+\\omega)^{10}=e^{10i\\pi/3}$ and $g(\\omega)=11\\,\\omega\\,e^{10i\\pi/3}=11\\,e^{2i\\pi/3}e^{10i\\pi/3}=11\\,e^{4i\\pi}=11$. By conjugation $g(\\omega^2)=11$ as well.",
          "Therefore $W=\\frac13\\bigl(11264+11+11\\bigr)=\\frac{11286}{3}=3762$. The two off-real terms collapse to real $+11$ exactly because the front weight $\\omega^t$ supplies the missing rotation.",
          "$\\boxed{3762}$."
        ]
      },
      {
        "name": "Differentiate the closed form",
        "steps": [
          "Since $k\\binom{n}{k}=n\\binom{n-1}{k-1}$, taking $k=3j$ gives $W=\\sum_j 3j\\binom{n}{3j}=n\\sum_j\\binom{n-1}{3j-1}$, i.e. $n$ times the residue-$2$ class sum of $\\binom{n-1}{\\cdot}$ (the operator shifts the surviving residue from $0\\bmod3$ on $n$ to $2\\bmod3$ on $n-1$).",
          "The cube-roots filter gives $\\sum_{i\\equiv2\\,(3)}\\binom{m}{i}=\\frac{2^{m}+2\\cos\\frac{(m-4)\\pi}{3}}{3}$. With $m=n-1=10$: $\\frac{2^{10}+2\\cos\\frac{6\\pi}{3}}{3}=\\frac{1024+2\\cos2\\pi}{3}=\\frac{1024+2}{3}=342$.",
          "Thus $W=n\\cdot342=11\\cdot342=3762$, matching $W=n\\cdot\\frac{2^{n-1}+2\\cos\\frac{(n-5)\\pi}{3}}{3}$ at $n=11$ (here $\\cos\\frac{6\\pi}{3}=1$).",
          "$\\boxed{3762}$."
        ]
      }
    ],
    "remark": "Insight: the operator $x\\frac{d}{dx}$ and the roots-of-unity filter commute, but the surviving weight $\\omega^t$ that the operator leaves in front of the derivative shifts the residue class by one (here $0\\bmod3$ on $n$ becomes $2\\bmod3$ on $n-1$). Forgetting that prefactor is the silent killer — and the deadliest part is that for $n\\equiv0\\pmod3$ it happens to give the right number by accident (the swapped conjugate terms have equal real parts), so the mistake hides; choosing $n=11$ exposes it as $3751\\ne3762$."
  },
  {
    "theme": "multinomial",
    "themeLabel": "The Multinomial Theorem",
    "title": "The Lopsided Monomial",
    "difficulty": 3,
    "task": "Determine",
    "tags": [
      "multinomial coefficient",
      "factorial",
      "monomial",
      "exponents"
    ],
    "statement": "In the expansion of $(x+y+z)^9$, every term has the form $c\\,x^a y^b z^d$ with $a+b+d=9$. Determine the coefficient $c$ of the term $x^2 y^3 z^4$.",
    "answer": "$\\boxed{1260}$",
    "trap": "Writing the coefficient as $\\binom{9}{2}$ alone, or computing $\\frac{9!}{2!\\,3!}$ and forgetting the third factorial $4!$ because the last exponent seems to 'use up the rest' for free. The multinomial coefficient needs ALL three factorials in the denominator: $\\frac{9!}{2!\\,3!\\,4!}=1260$, not $\\binom{9}{2}=36$ nor $\\frac{9!}{2!\\,3!}=30240$. Every block of equal letters contributes its own factorial.",
    "solutions": [
      {
        "name": "Multinomial coefficient formula",
        "steps": [
          "The multinomial theorem gives the coefficient of $x^a y^b z^d$ in $(x+y+z)^n$ (with $a+b+d=n$) as $\\dfrac{n!}{a!\\,b!\\,d!}$.",
          "Here $n=9$ and $(a,b,d)=(2,3,4)$; indeed $2+3+4=9$, so the coefficient is $\\dfrac{9!}{2!\\,3!\\,4!}$.",
          "Compute: $9!=362880$ and $2!\\,3!\\,4!=2\\cdot6\\cdot24=288$, giving $362880/288=\\boxed{1260}$."
        ]
      },
      {
        "name": "Sequential binomial choices",
        "steps": [
          "Among the $9$ identical factors $(x+y+z)$, choose which $2$ contribute $x$: $\\binom{9}{2}=36$.",
          "From the remaining $7$, choose $3$ to contribute $y$: $\\binom{7}{3}=35$; the last $4$ must give $z$: $\\binom{4}{4}=1$.",
          "Multiply: $36\\cdot35\\cdot1=\\boxed{1260}$, exactly matching $\\dfrac{9!}{2!\\,3!\\,4!}$."
        ]
      },
      {
        "name": "Word-arrangement (permutations with repetition)",
        "steps": [
          "Each term of the product is a length-$9$ word in the letters $x,y,z$, one letter taken from each factor; the monomial $x^2y^3z^4$ collects every word using $x$ twice, $y$ thrice, $z$ four times.",
          "The number of distinct arrangements of the multiset $\\{x,x,y,y,y,z,z,z,z\\}$ is $\\dfrac{9!}{2!\\,3!\\,4!}$ — the same permutations-with-repetition count.",
          "Evaluating, $\\dfrac{362880}{288}=\\boxed{1260}$, so the coefficient is $1260$."
        ]
      }
    ],
    "remark": "Insight: the multinomial coefficient is just nested binomials $\\binom{n}{a}\\binom{n-a}{b}\\cdots$, which telescopes to $\\frac{n!}{a!\\,b!\\cdots}$. Equivalently it counts arrangements of a multiset — every block of equal letters contributes its own factorial to the denominator, so the final exponent never gets a 'free pass'."
  },
  {
    "theme": "multinomial",
    "themeLabel": "The Multinomial Theorem",
    "title": "Counting the Survivors",
    "difficulty": 3,
    "task": "Find the number of distinct terms",
    "tags": [
      "distinct terms",
      "stars and bars",
      "collecting",
      "five variables"
    ],
    "statement": "After fully expanding $(a+b+c+d+e)^4$ and collecting all like terms, find the number of distinct terms (monomials) that remain.",
    "answer": "$\\boxed{70}$",
    "trap": "Answering $5^4=625$ (the number of terms BEFORE collecting, i.e. the count of ordered selections, which also equals the sum of all coefficients obtained by setting every variable to $1$) or grabbing some $\\binom{4}{k}$ from a binomial reflex. The number of DISTINCT monomials is the number of non-negative integer solutions of $e_1+e_2+e_3+e_4+e_5=4$, namely $\\binom{4+5-1}{5-1}=\\binom{8}{4}=70$, not $5^4$.",
    "solutions": [
      {
        "name": "Stars and bars",
        "steps": [
          "A distinct term corresponds to an exponent vector $(e_1,e_2,e_3,e_4,e_5)$ of non-negative integers with $e_1+e_2+e_3+e_4+e_5=4$, since each monomial is $a^{e_1}b^{e_2}c^{e_3}d^{e_4}e^{e_5}$ of total degree $4$.",
          "Counting such vectors is the classic stars-and-bars count: distribute $4$ identical units (stars) among $5$ variables (separated by $4$ bars), giving $\\binom{n+k-1}{k-1}$ with $n=4$ and $k=5$, i.e. $\\binom{4+5-1}{5-1}=\\binom{8}{4}$.",
          "$\\binom{8}{4}=\\dfrac{8\\cdot7\\cdot6\\cdot5}{4!}=70$, so there are $\\boxed{70}$ distinct terms."
        ]
      },
      {
        "name": "Contrast with the word count (sum of coefficients)",
        "steps": [
          "Expanding $(a+b+c+d+e)^4$ without collecting yields $5^4=625$ ordered length-$4$ words over the alphabet $\\{a,b,c,d,e\\}$; equivalently, substituting all variables $=1$ also gives $5^4=625$, which is the SUM of the coefficients — not the term count.",
          "Collecting merges words that are rearrangements of the same multiset of letters. So the number of distinct terms equals the number of size-$4$ multisets drawn from $5$ letters, which is $\\left(\\!\\!\\binom{5}{4}\\!\\!\\right)=\\binom{5+4-1}{4}=\\binom{8}{4}$.",
          "$\\binom{8}{4}=70$, so exactly $\\boxed{70}$ distinct terms survive collection — far fewer than the $625$ uncollected words."
        ]
      }
    ],
    "remark": "Insight: 'number of distinct terms' counts exponent vectors / multisets (stars and bars, $\\binom{8}{4}=70$), while 'sum of coefficients' counts ordered words (set every variable to $1$, giving $5^4=625$). Conflating the two — or reaching for a $\\binom{4}{k}$ out of binomial habit — is the classic multinomial blunder."
  },
  {
    "theme": "multinomial",
    "themeLabel": "The Multinomial Theorem",
    "title": "The Truncated Geometric Engine",
    "difficulty": 4,
    "task": "Determine",
    "tags": [
      "generating function",
      "capped exponents",
      "inclusion-exclusion",
      "coefficient extraction"
    ],
    "statement": "Determine the coefficient of $x^6$ in the expansion of $\\left(1+x+x^2+x^3\\right)^5$.",
    "answer": "$\\boxed{135}$",
    "trap": "Treating $(1+x+x^2+x^3)^5$ as if it were $(1+x+x^2+\\cdots)^5$ and answering $\\binom{6+4}{4}=210$ — this ignores the cap $x^3$ per factor. The exponents are capped at 3, so the unbounded stars-and-bars count must be corrected by inclusion–exclusion for blocks exceeding 3.",
    "solutions": [
      {
        "name": "Capped composition count",
        "steps": [
          "The coefficient of $x^6$ in $(1+x+x^2+x^3)^5$ is the number of integer solutions of $e_1+\\cdots+e_5=6$ with each $0\\le e_i\\le 3$.",
          "By inclusion–exclusion: unbounded count $\\binom{6+4}{4}=210$; subtract cases where some $e_i\\ge 4$ (set $e_i'=e_i-4$): $\\binom{5}{1}\\binom{(6-4)+4}{4}=5\\cdot\\binom{6}{4}=5\\cdot15=75$.",
          "No two variables can both exceed 3 (that needs $\\ge 8>6$), so the answer is $210-75=\\boxed{135}$."
        ]
      },
      {
        "name": "Factor as geometric ratio",
        "steps": [
          "Write $1+x+x^2+x^3=\\dfrac{1-x^4}{1-x}$, so the expression is $(1-x^4)^5(1-x)^{-5}$.",
          "$(1-x^4)^5=\\sum_j\\binom{5}{j}(-1)^j x^{4j}$ and $(1-x)^{-5}=\\sum_m\\binom{m+4}{4}x^m$. The $x^6$ coefficient takes $j=0$ (so $m=6$) and $j=1$ (so $m=2$).",
          "Coefficient $=\\binom{10}{4}-5\\binom{6}{4}=210-75=\\boxed{135}$."
        ]
      }
    ],
    "remark": "Insight: $1+x+\\cdots+x^m=\\frac{1-x^{m+1}}{1-x}$ converts any 'capped' multinomial into a tidy $(1-x^{m+1})^n(1-x)^{-n}$, turning a counting problem into clean binomial bookkeeping."
  },
  {
    "theme": "multinomial",
    "themeLabel": "The Multinomial Theorem",
    "title": "The Most Crowded Term",
    "difficulty": 4,
    "task": "Find",
    "tags": [
      "greatest multinomial coefficient",
      "balanced partition",
      "optimization",
      "four variables"
    ],
    "statement": "Among all terms in the expansion of $(x_1+x_2+x_3+x_4)^{11}$, find the value of the largest coefficient.",
    "answer": "$\\boxed{92400}$",
    "trap": "Assuming the maximum occurs at the 'most equal' split with all four exponents as close as possible and writing $(2,3,3,3)$ vs. $(3,3,3,2)$ but then miscomputing, or worse, guessing the split $(3,3,3,2)$ gives a different value than another near-balanced split. The genuine trap is thinking $11/4$ rounds to give exponents $(3,3,3,2)$ uniquely — one must verify that pushing toward equality (not away) maximizes, since the multinomial coefficient is maximized by the most balanced exponent vector.",
    "solutions": [
      {
        "name": "Balance argument",
        "steps": [
          "For fixed $n$ and $k$ variables, $\\frac{n!}{a_1!\\cdots a_k!}$ is maximized when the $a_i$ are as equal as possible: swapping to reduce $|a_i-a_j|$ never decreases the coefficient (since $a!\\,b!\\ge (a-1)!\\,(b+1)!$ when $a>b+1$).",
          "With $n=11$, $k=4$: the balanced vector is $(3,3,3,2)$ (sum $11$).",
          "Coefficient $=\\dfrac{11!}{3!\\,3!\\,3!\\,2!}=\\dfrac{39916800}{6\\cdot6\\cdot6\\cdot2}=\\dfrac{39916800}{432}=\\boxed{92400}$."
        ]
      },
      {
        "name": "Local exchange check",
        "steps": [
          "Compare $(3,3,3,2)$ with neighbor $(4,3,3,1)$: ratio of coefficients $=\\frac{3!\\,2!}{4!\\,1!}=\\frac{12}{24}=\\tfrac12<1$, so $(4,3,3,1)$ is smaller.",
          "Compare $(3,3,3,2)$ with $(2,3,3,3)$: identical multiset, same value — confirming the maximum is the balanced split.",
          "Thus the greatest coefficient is $\\dfrac{11!}{3!^3\\,2!}=\\boxed{92400}$."
        ]
      }
    ],
    "remark": "Insight: the multinomial coefficient is a 'spread out' function of the exponent vector — it peaks at the centroid (balanced exponents) exactly as the binomial peaks at the middle term. Equality, not extremity, maximizes."
  },
  {
    "theme": "multinomial",
    "themeLabel": "The Multinomial Theorem",
    "title": "Reverse-Engineering the Power",
    "difficulty": 4,
    "task": "Find",
    "tags": [
      "distinct terms",
      "stars and bars",
      "solve for n",
      "inverse problem"
    ],
    "statement": "The expansion of $(x+y+z)^n$ has exactly $36$ distinct terms after collecting like powers. Find $n$.",
    "answer": "$\\boxed{n=7}$",
    "trap": "Setting $3^n=36$ (no integer solution) by confusing the term count with the coefficient-sum, or using $\\binom{n}{2}=36$ (binomial reflex, giving $n=9$). The distinct-term count for three variables is $\\binom{n+2}{2}$, so the equation is $\\binom{n+2}{2}=36$, NOT $\\binom{n}{2}=36$ and NOT $3^n=36$.",
    "solutions": [
      {
        "name": "Triangular-number equation",
        "steps": [
          "For $(x+y+z)^n$ the number of distinct terms is the number of non-negative solutions of $a+b+c=n$: $\\binom{n+2}{2}=\\frac{(n+2)(n+1)}{2}$.",
          "Set $\\frac{(n+2)(n+1)}{2}=36\\Rightarrow (n+2)(n+1)=72$.",
          "Consecutive integers with product $72$ are $8\\cdot9$, so $n+1=8$, giving $\\boxed{n=7}$."
        ]
      },
      {
        "name": "Direct triangular search",
        "steps": [
          "The term counts $\\binom{n+2}{2}$ for $n=1,2,3,\\dots$ are $3,6,10,15,21,28,36,\\dots$.",
          "The value $36$ first appears at $n=7$.",
          "Hence $\\boxed{n=7}$."
        ]
      }
    ],
    "remark": "Insight: distinct terms in a 3-variable power follow the triangular numbers $\\binom{n+2}{2}$; recognizing $36=\\binom{9}{2}$ as a triangular number $T_8$ pins $n+2=9$ instantly."
  },
  {
    "theme": "multinomial",
    "themeLabel": "The Multinomial Theorem",
    "title": "Filtering the Even Powers",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "coefficient sum",
      "parity filter",
      "substitution",
      "roots of unity"
    ],
    "statement": "Consider the expansion of $(x+y+z)^8$. Evaluate the sum of the coefficients of all terms in which the exponent of $x$ is even (including exponent $0$).",
    "answer": "$\\boxed{3281}$",
    "trap": "Computing the full coefficient sum $3^8=6561$ and halving it to $3280.5$, or simply guessing 'about half'. Even/odd $x$-powers are NOT split equally; the correct extractor is $\\frac12\\big(f(1,1,1)+f(-1,1,1)\\big)$, and $f(-1,1,1)=1^8=1$ is nonzero, so the half-and-half guess fails.",
    "solutions": [
      {
        "name": "Sign-substitution filter",
        "steps": [
          "Let $f(x,y,z)=(x+y+z)^8$. The sum of ALL coefficients is $f(1,1,1)=3^8=6561$.",
          "Replacing $x\\to -1$ flips the sign of odd-$x$ terms: $f(-1,1,1)=(-1+1+1)^8=1^8=1$. Adding cancels odd-$x$ terms and doubles even-$x$ terms.",
          "Therefore even-$x$ coefficient sum $=\\dfrac{f(1,1,1)+f(-1,1,1)}{2}=\\dfrac{6561+1}{2}=\\boxed{3281}$."
        ]
      },
      {
        "name": "Group by the x-exponent",
        "steps": [
          "Group terms by the power of $x$: $f=\\sum_{a=0}^{8}\\binom{8}{a}x^a(y+z)^{8-a}$; setting $y=z=1$, the sum of coefficients with $x$-exponent $a$ is $\\binom{8}{a}2^{8-a}$.",
          "Even-$x$ sum $=\\sum_{a\\text{ even}}\\binom{8}{a}2^{8-a}=2^8+\\binom82 2^6+\\binom84 2^4+\\binom86 2^2+\\binom88 2^0$.",
          "$=256+28\\cdot64+70\\cdot16+28\\cdot4+1=256+1792+1120+112+1=\\boxed{3281}$."
        ]
      }
    ],
    "remark": "Insight: parity filters on one variable are extracted by the $\\pm1$ trick $\\frac12(f(1,\\dots)\\pm f(-1,\\dots))$ — the multivariable analogue of the binomial 'sum of even-indexed coefficients $=2^{n-1}$', which here breaks because the other variables shift the symmetry."
  },
  {
    "theme": "multinomial",
    "themeLabel": "The Multinomial Theorem",
    "title": "The Laurent Heart",
    "difficulty": 5,
    "task": "Find",
    "tags": [
      "constant term",
      "laurent polynomial",
      "central trinomial",
      "negative exponents"
    ],
    "statement": "Find the constant term (the coefficient of $x^0$) in the expansion of $\\left(x+\\dfrac{1}{x}+1\\right)^6$.",
    "answer": "$\\boxed{141}$",
    "trap": "Treating $x+\\tfrac1x+1$ as a 3-letter alphabet and answering $\\frac{6!}{2!\\,2!\\,2!}=90$, as if 'constant' meant exactly two $x$'s, two $\\tfrac1x$'s and two $1$'s. In fact the constant term collects ALL splits $(a,b,c)$ with $a$ copies of $x$, $b$ of $\\tfrac1x$, $c$ of $1$ satisfying $a-b=0$, i.e. $a=b$, summed over $a=b=0,1,2,3$ — not just the single balanced term.",
    "solutions": [
      {
        "name": "Sum over balanced splits",
        "steps": [
          "A general term picks $a$ factors as $x$, $b$ as $\\tfrac1x$, $c$ as $1$, with $a+b+c=6$, contributing $\\dfrac{6!}{a!\\,b!\\,c!}\\,x^{a-b}$.",
          "The constant term needs $a-b=0$, i.e. $a=b$, with $c=6-2a$ and $a\\in\\{0,1,2,3\\}$: coefficient $=\\displaystyle\\sum_{a=0}^{3}\\frac{6!}{a!\\,a!\\,(6-2a)!}$.",
          "$=\\dfrac{720}{720}+\\dfrac{720}{1\\cdot1\\cdot24}+\\dfrac{720}{2\\cdot2\\cdot2}+\\dfrac{720}{6\\cdot6\\cdot1}=1+30+90+20=\\boxed{141}$."
        ]
      },
      {
        "name": "Central trinomial recursion",
        "steps": [
          "The constant term of $(x+x^{-1}+1)^n$ equals the central coefficient of $(1+x+x^2)^n$ (multiply by $x^n$ to clear negatives), the central trinomial coefficient $T_n$.",
          "These satisfy $T_n=\\dfrac{(2n-1)\\,T_{n-1}+3(n-1)\\,T_{n-2}}{n}$ with $T_0=1,\\ T_1=1$, giving $1,1,3,7,19,51,141$.",
          "Hence $T_6=\\boxed{141}$."
        ]
      }
    ],
    "remark": "Insight: a constant term in a Laurent multinomial is a SUM over all exponent-balanced compositions, not one term — and shifting by $x^n$ reveals it as the central trinomial coefficient $T_n$, a famous integer sequence."
  },
  {
    "theme": "multinomial",
    "themeLabel": "The Multinomial Theorem",
    "title": "Four Honest Dice",
    "difficulty": 4,
    "task": "Determine",
    "tags": [
      "generating function",
      "dice",
      "central coefficient",
      "capped exponents"
    ],
    "statement": "Four fair six-faced dice (faces $1$ through $6$) are rolled. Determine the number of ordered outcomes whose face-values sum to exactly $12$ — equivalently, the coefficient of $x^{12}$ in $\\left(x+x^2+x^3+x^4+x^5+x^6\\right)^4$.",
    "answer": "$\\boxed{125}$",
    "trap": "Modeling each die as $1+x+\\cdots+x^6$ (faces $0$–$6$) rather than $x+x^2+\\cdots+x^6$ (faces $1$–$6$). With faces $0$–$6$ the coefficient of $x^{12}$ is $231$, but those polynomials describe seven-faced dice, not honest ones; the genuine count is $125$. The faces start at $1$, so one must factor out $x^4$ first, after which the cap of $6$ per die forces an inclusion–exclusion (dropping the cap and using bare stars-and-bars $\\binom{11}{3}=165$ overcounts the rolls that exceed a face value of $6$).",
    "solutions": [
      {
        "name": "Shift, then inclusion–exclusion",
        "steps": [
          "Factor the per-die polynomial: $x+x^2+\\cdots+x^6=x\\,(1+x+\\cdots+x^5)$, so $(x+\\cdots+x^6)^4=x^4(1+x+\\cdots+x^5)^4$. The coefficient of $x^{12}$ therefore equals the coefficient of $x^{8}$ in $(1+x+\\cdots+x^5)^4=\\left(\\frac{1-x^6}{1-x}\\right)^4$.",
          "Write $\\left(\\frac{1-x^6}{1-x}\\right)^4=(1-x^6)^4\\,(1-x)^{-4}=\\sum_{j\\ge 0}(-1)^j\\binom{4}{j}x^{6j}\\;\\sum_{i\\ge 0}\\binom{i+3}{3}x^{i}$. The coefficient of $x^8$ collects the terms with $6j+i=8$.",
          "Only $j=0$ (then $i=8$) and $j=1$ (then $i=2$) contribute, since $6\\cdot 2=12>8$. Thus the coefficient is $\\binom{8+3}{3}-\\binom{4}{1}\\binom{2+3}{3}=\\binom{11}{3}-4\\binom{5}{3}=165-4\\cdot 10=165-40=125.$",
          "Hence the number of ordered outcomes summing to $12$ is $\\boxed{125}$. The unchecked stars-and-bars value $\\binom{11}{3}=165$ is exactly the $j=0$ term; the $-40$ removes the $40$ compositions in which some die would show a value above $6$."
        ]
      },
      {
        "name": "Symmetry and direct convolution",
        "steps": [
          "The four-dice sum is symmetric about its mean $\\tfrac{4(1+6)}{2}=14$, because replacing each face $f$ by $7-f$ is a bijection sending sum $S$ to $28-S$. Therefore $N(12)=N(28-12)=N(16)$, a built-in cross-check.",
          "Convolve the single-die count vector $[1,1,1,1,1,1]$ (faces $1$–$6$) with itself to get two-dice counts for sums $2$–$12$: $[1,2,3,4,5,6,5,4,3,2,1]$. Convolving that vector with itself gives the four-dice counts for sums $4$–$24$.",
          "Reading off the four-dice convolution at sum $12$ gives $1\\cdot 5+2\\cdot 6+3\\cdot 5+4\\cdot 4+5\\cdot 3+6\\cdot 2=5+12+15+16+15+12=75$? — recompute carefully: pairing two-dice sums $a+b=12$ with $a$ from $2$ to $10$ gives $\\sum_{a=2}^{10} c(a)\\,c(12-a)$ where $c=[\\,1,2,3,4,5,6,5,4,3,2,1\\,]$ for sums $2$–$12$. This equals $2(1\\cdot3+2\\cdot4+3\\cdot5+4\\cdot6)+5^2=2(3+8+15+24)+25=2\\cdot 50+25=125.$",
          "So $N(12)=125$, matching the symmetric value $N(16)=125$ and sitting just below the peak $N(14)=146$; the full table is $\\dots,N(11)=104,\\,N(12)=125,\\,N(13)=140,\\,N(14)=146,\\dots$. The answer is $\\boxed{125}$."
        ]
      }
    ],
    "remark": "Insight: bounded multinomial coefficients are exactly the convolution counts behind dice sums. The disciplined route is to factor out the offset $x^{\\min}$ — here $x^4$ — and then use $\\frac{1-x^{m+1}}{1-x}$ so the cap of $6$ per die enters as the $(1-x^6)^4$ inclusion–exclusion factor. Symmetry about the mean ($N(S)=N(28-S)$) is a powerful sanity check, and it is what most quickly exposes the trap: the seven-faced model $1+\\cdots+x^6$ is symmetric about $12$ and gives $231$ there, whereas honest dice are symmetric about $14$ and give $125$ at $12$."
  },
  {
    "theme": "multinomial",
    "themeLabel": "The Multinomial Theorem",
    "title": "Where the Odd Coefficients Hide",
    "difficulty": 5,
    "task": "Find the number of",
    "tags": [
      "parity of coefficients",
      "lucas theorem",
      "kummer",
      "binary"
    ],
    "statement": "In the fully collected expansion of $(x+y+z)^{12}$, find the number of distinct terms whose multinomial coefficient $\\dfrac{12!}{a!\\,b!\\,c!}$ is an odd integer.",
    "answer": "$\\boxed{9}$",
    "trap": "Trying to count by listing exponent vectors or assuming 'about half' the $\\binom{14}{2}=91$ terms are odd. The parity is governed by carries in binary addition (Kummer): $\\frac{12!}{a!b!c!}$ is odd iff adding $a+b+c$ in base $2$ produces no carries, i.e. the binary digits of $12$ are partitioned among $a,b,c$. Counting requires the binary structure of $12=1100_2$, not a parity guess.",
    "solutions": [
      {
        "name": "Kummer / carry-free addition",
        "steps": [
          "$\\frac{n!}{a!b!c!}$ is odd iff there are no carries when adding $a+b+c$ in base $2$ (Kummer's theorem), i.e. at each bit position at most one of $a,b,c$ has a $1$, and together they reproduce the bits of $n$.",
          "Write $12=1100_2$ — it has two '1' bits (positions 3 and 2). Each such bit must be assigned to exactly one of the three variables $a,b,c$; bits where $12$ is $0$ must be $0$ in all three.",
          "Independent choices: $3$ ways per set bit, so $3^{2}=\\boxed{9}$ odd-coefficient terms."
        ]
      },
      {
        "name": "Lucas' theorem in base 2",
        "steps": [
          "By Lucas, $\\frac{n!}{a!b!c!}\\bmod 2$ is the product over bit positions of the multinomial $\\binom{n_i}{a_i,b_i,c_i}\\bmod 2$ of the binary digits.",
          "Each digit-multinomial is $1$ (odd) exactly when the bits of $a,b,c$ at that position sum to $n$'s bit with no overlap; for a $1$-bit of $n$ this allows $3$ assignments, for a $0$-bit only $1$.",
          "With $12=1100_2$ having two $1$-bits: total $=3\\cdot3=\\boxed{9}$."
        ]
      }
    ],
    "remark": "Insight: the parity (and any prime-power divisibility) of multinomial coefficients is a digit phenomenon — Kummer counts carries, Lucas multiplies digit-multinomials. For three variables the odd count is $3^{s_2(n)}$ where $s_2(n)$ is the number of binary $1$s."
  },
  {
    "theme": "multinomial",
    "themeLabel": "The Multinomial Theorem",
    "title": "No Variable Left Behind",
    "difficulty": 4,
    "task": "Find the number of",
    "tags": [
      "distinct terms",
      "positive exponents",
      "divisibility",
      "stars and bars"
    ],
    "statement": "Find the number of distinct terms in the expansion of $(x+y+z)^{10}$ that are divisible by $xyz$ — that is, in which all three of $x,y,z$ appear with exponent at least $1$.",
    "answer": "$\\boxed{36}$",
    "trap": "Computing the total term count $\\binom{12}{2}=66$ and forgetting to remove the terms missing a variable, or subtracting only the three 'single-variable' terms $x^{10},y^{10},z^{10}$ (giving $63$) while overlooking the many terms where exactly one variable is absent. The constraint $a,b,c\\ge 1$ is a positive-solution count $\\binom{n-1}{2}$, not the unrestricted $\\binom{n+2}{2}$ minus three.",
    "solutions": [
      {
        "name": "Positive stars and bars",
        "steps": [
          "Terms divisible by $xyz$ have exponents $(a,b,c)$ with $a,b,c\\ge 1$ and $a+b+c=10$.",
          "Substitute $a'=a-1,b'=b-1,c'=c-1\\ge 0$ with $a'+b'+c'=7$; the count is $\\binom{7+2}{2}=\\binom{9}{2}$.",
          "$\\binom{9}{2}=36$, so $\\boxed{36}$ terms are divisible by $xyz$."
        ]
      },
      {
        "name": "Inclusion-exclusion from the total",
        "steps": [
          "Total distinct terms: $\\binom{12}{2}=66$. Subtract those missing at least one variable.",
          "Terms with $a=0$ (and $b+c=10$) number $11$; same for $b=0$ and $c=0$: $3\\cdot11=33$. Terms missing two variables (e.g. $x^{10}$) were subtracted twice; there are $3$ of them, add back $3$.",
          "Divisible-by-$xyz$ count $=66-33+3=\\boxed{36}$, matching $\\binom{9}{2}$."
        ]
      }
    ],
    "remark": "Insight: 'every variable present' converts unrestricted stars-and-bars $\\binom{n+k-1}{k-1}$ into the positive-solution count $\\binom{n-1}{k-1}$ — a one-line substitution that inclusion–exclusion also confirms, catching the subtle overcount of doubly-absent variables."
  },
  {
    "theme": "divisibility",
    "themeLabel": "Divisibility & Remainders",
    "title": "The Tail of a Tower",
    "difficulty": 3,
    "task": "Find",
    "tags": [
      "last-two-digits",
      "cyclicity",
      "binomial",
      "modular-arithmetic"
    ],
    "statement": "Find the last two digits of $7^{2024}$. You must justify the value, not merely quote a cycle length.",
    "answer": "\\[\\boxed{01}\\]",
    "trap": "The seductive move is to invoke Euler: $\\varphi(100)=40$, reduce $2024\\equiv 24\\pmod{40}$, and conclude the answer is whatever $7^{24}$ gives, treating $40$ as the genuine period. Since $24\\neq 0$, one is lured into believing the tail is some nontrivial pair of digits and grinds through a long computation. The error is mistaking the Euler exponent $\\varphi(100)=40$ for the true period: the actual multiplicative order of $7$ modulo $100$ is the proper divisor $4$, so $2024\\equiv 0\\pmod 4$ collapses everything to $1$ instantly. Quoting $40$ as 'the cycle length' is the trap; spotting order $=4$ is the insight.",
    "solutions": [
      {
        "name": "Order of 7 mod 100",
        "steps": [
          "Compute the powers of $7$ modulo $100$: $7^1\\equiv 07,\\;7^2\\equiv 49,\\;7^3\\equiv 43,\\;7^4\\equiv 01\\pmod{100}$. Thus the multiplicative order of $7$ modulo $100$ is exactly $4$, a proper divisor of $\\varphi(100)=40$.",
          "Since $2024=4\\cdot 506$, we have $7^{2024}=(7^4)^{506}\\equiv 1^{506}\\equiv 1\\pmod{100}$.",
          "Hence the last two digits are $\\boxed{01}$."
        ]
      },
      {
        "name": "Binomial about a multiple of 100",
        "steps": [
          "Observe $7^4=2401=2400+1=24\\cdot 100+1$, so $7^4\\equiv 1\\pmod{100}$ directly, without listing intermediate powers.",
          "Then $7^{2024}=(7^4)^{506}=(1+2400)^{506}=1+\\binom{506}{1}2400+\\binom{506}{2}2400^2+\\cdots$. Every term after the leading $1$ carries a factor of $2400$, hence is divisible by $100$.",
          "Therefore $7^{2024}\\equiv 1\\pmod{100}$, giving last two digits $\\boxed{01}$."
        ]
      }
    ],
    "remark": "Insight: do not trust $\\varphi(m)$ as the period — it is only a guaranteed multiple of the true order, which can be a much smaller divisor. Spotting $7^4\\equiv 1\\pmod{100}$ (equivalently $2401=24\\cdot 100+1$) collapses the entire tower; the $2024\\equiv 24\\pmod{40}$ reduction is a correct-but-irrelevant detour."
  },
  {
    "theme": "divisibility",
    "themeLabel": "Divisibility & Remainders",
    "title": "Fourteen, Folded Thrice",
    "difficulty": 4,
    "task": "Determine",
    "tags": [
      "tower-of-powers",
      "crt",
      "euler-totient",
      "modular-arithmetic"
    ],
    "statement": "Determine the last two digits of $14^{14^{14}}$.",
    "answer": "\\[\\boxed{36}\\]",
    "trap": "Reducing $\\bmod 25$ correctly to get $14^{14^{14}}\\equiv 11\\pmod{25}$ and then reporting $11$ as the last two digits. This silently drops the $\\bmod 4$ branch. Because $\\gcd(14,100)=2$, the residue $\\bmod 100$ is not determined by the $\\bmod 25$ part alone; one must also pin down $14^{14^{14}}\\bmod 4$ (which is $0$, since $14^2\\equiv 0\\pmod 4$ and the exponent exceeds $1$) and recombine by CRT. The number $11$ is odd, hence cannot even be the right answer for a manifestly even power of $14$. Glue the two branches and the answer jumps to $36$.",
    "solutions": [
      {
        "name": "CRT on 4 and 25",
        "steps": [
          "Split $100=4\\cdot 25$ with $\\gcd(4,25)=1$. The base $14$ is a unit $\\bmod 25$ but not $\\bmod 4$, so the two prime-power parts must be handled separately.",
          "Modulus $4$: since $14\\equiv 2\\pmod 4$, $14^2\\equiv 0\\pmod 4$, and the exponent $14^{14}\\ge 2$, we get $14^{14^{14}}\\equiv 0\\pmod 4$.",
          "Modulus $25$: here $\\gcd(14,25)=1$ and $\\varphi(25)=20$, so the exponent is needed only $\\bmod 20$. Compute $14^{14}\\bmod 20$: as $14\\equiv -6\\pmod{20}$, $14^{14}\\equiv 6^{14}$, and $6^2=36\\equiv 16$, $6^4\\equiv 16^2=256\\equiv 16$, so $6^{2k}\\equiv 16\\pmod{20}$; hence $14^{14}\\equiv 16\\pmod{20}$.",
          "Now $14^{16}\\bmod 25$: $14^2=196\\equiv -4$, $14^4\\equiv(-4)^2=16$, $14^8\\equiv 16^2=256\\equiv 6$, $14^{16}\\equiv 6^2=36\\equiv 11\\pmod{25}$.",
          "Solve $x\\equiv 0\\pmod 4,\\ x\\equiv 11\\pmod{25}$. Write $x=25k+11$; then $25k+11\\equiv k+3\\equiv 0\\pmod 4$ forces $k\\equiv 1\\pmod 4$, giving $x=25\\cdot 1+11=36$. The last two digits are $\\boxed{36}$."
        ]
      },
      {
        "name": "Order tracking with the 2-adic part peeled off",
        "steps": [
          "Write $14=2\\cdot 7$, so $14^{n}=2^{n}\\,7^{n}$. For $n\\ge 2$ the factor $2^{n}$ already kills the modulus $4$: $14^{14^{14}}\\equiv 0\\pmod 4$.",
          "On the coprime side, work $\\bmod 25$. The multiplicative order of $14$ modulo $25$ is $10$ (one checks $14^{10}\\equiv 1$ while no proper divisor of $10$ works), so the exponent matters only $\\bmod 10$.",
          "Reduce the exponent: $14^{14}\\equiv 4^{14}\\pmod{10}$, and $4^{14}=(4^2)^7\\equiv 6^7\\equiv 6\\pmod{10}$ (since $6^k\\equiv 6\\pmod{10}$). Thus $14^{14}\\equiv 6\\pmod{10}$.",
          "Hence $14^{14^{14}}\\equiv 14^{6}\\pmod{25}$. Compute $14^2\\equiv -4$, $14^4\\equiv 16$, $14^6=14^4\\cdot 14^2\\equiv 16\\cdot(-4)=-64\\equiv 11\\pmod{25}$.",
          "Recombine $x\\equiv 0\\pmod 4$ and $x\\equiv 11\\pmod{25}$ by CRT: $x=25k+11$ with $k\\equiv 1\\pmod 4$ gives $x=36$. Last two digits $\\boxed{36}$.",
          "Note the consistency check: $\\varphi(25)=20$ reduces the exponent to $16$, while the true order $10$ reduces it to $6$, and $14^{16}\\equiv 14^{6}\\equiv 11\\pmod{25}$ since $16\\equiv 6\\pmod{10}$ — both routes agree."
        ]
      }
    ],
    "remark": "Insight: Euler's theorem is a statement about units. When $\\gcd(\\text{base},m)>1$, decompose $m$ into prime powers, treat the bad prime's power directly (here $14^{14^{14}}\\equiv 0\\pmod 4$) and apply Euler only on the coprime piece, then glue with CRT. The slickest version replaces $\\varphi$ by the actual order of the base on the unit side — here order $10$ rather than $\\varphi(25)=20$ — which is always at least as efficient and never wrong."
  },
  {
    "theme": "divisibility",
    "themeLabel": "Divisibility & Remainders",
    "title": "Seven's Last Three",
    "difficulty": 4,
    "task": "Find",
    "tags": [
      "last-three-digits",
      "euler-totient",
      "binomial",
      "modular-arithmetic"
    ],
    "statement": "Find the last three digits of $7^{999}$.",
    "answer": "\\[\\boxed{143}\\]",
    "trap": "The seductive shortcut is to notice $7^4=2401\\equiv 1\\pmod{100}$ (so $7$ has order $4$ modulo $100$) and assume this period lifts to modulo $1000$. It does not: $7^4=2401\\equiv 401\\pmod{1000}\\ne 1$. A solver who reduces $999\\equiv 3\\pmod 4$ and writes $7^{999}\\equiv 7^3=343\\pmod{1000}$ gets the wrong last three digits. (In fact the order of $7$ modulo $1000$ is $20$, not $4$.) The clean fix is to split $1000=8\\cdot 125$ and apply Euler on each prime power via CRT.",
    "solutions": [
      {
        "name": "CRT on 8 and 125",
        "steps": [
          "$1000=8\\cdot125$. Mod $8$: $7\\equiv-1$, so $7^{999}\\equiv(-1)^{999}=-1\\equiv7\\pmod8$.",
          "Mod $125$: $\\varphi(125)=100$ and $\\gcd(7,125)=1$, so $7^{999}\\equiv7^{999\\bmod100}=7^{99}\\pmod{125}$.",
          "Compute $7^{99}\\pmod{125}$ by repeated squaring: $7^2=49,\\,7^4=2401\\equiv26,\\,7^8\\equiv26^2=676\\equiv51,\\,7^{16}\\equiv51^2=2601\\equiv101,\\,7^{32}\\equiv101^2=10201\\equiv76,\\,7^{64}\\equiv76^2=5776\\equiv26$. Then $99=64+32+2+1$, so $7^{99}\\equiv26\\cdot76\\cdot49\\cdot7\\equiv18\\pmod{125}$.",
          "Solve $x\\equiv7\\pmod8,\\;x\\equiv18\\pmod{125}$: write $x=125k+18$; reducing mod $8$ gives $5k+2\\equiv7\\Rightarrow5k\\equiv5\\Rightarrow k\\equiv1\\pmod8$, so $x=125+18=143$. Last three digits $\\boxed{143}$."
        ]
      },
      {
        "name": "Euler reduction then square modulo 1000",
        "steps": [
          "Since $\\gcd(7,1000)=1$ and $\\varphi(1000)=400$, Euler gives $7^{400}\\equiv1\\pmod{1000}$, so $7^{999}\\equiv7^{999\\bmod400}=7^{199}\\pmod{1000}$.",
          "Build powers by repeated squaring modulo $1000$: $7^2=49,\\,7^4=2401\\equiv401,\\,7^8\\equiv401^2=160801\\equiv801,\\,7^{16}\\equiv801^2=641601\\equiv601,\\,7^{32}\\equiv601^2=361201\\equiv201,\\,7^{64}\\equiv201^2=40401\\equiv401,\\,7^{128}\\equiv401^2\\equiv801$.",
          "Write $199=128+64+4+2+1$: $7^{199}\\equiv801\\cdot401\\cdot401\\cdot49\\cdot7\\pmod{1000}$. Multiply step by step: $801\\cdot401\\equiv201$, $201\\cdot401\\equiv601$, $601\\cdot49\\equiv449$, $449\\cdot7\\equiv143$.",
          "Hence $7^{199}\\equiv143\\pmod{1000}$, so the last three digits of $7^{999}$ are $\\boxed{143}$."
        ]
      }
    ],
    "remark": "Insight: a clean multiplicative order modulo $10^k$ rarely lifts to $10^{k+1}$ (here order $4$ mod $100$ but order $20$ mod $1000$). The robust tools are CRT splitting $10^k=2^k\\cdot5^k$ with Euler on each prime-power factor, or honest repeated squaring directly modulo $10^k$ after one Euler reduction."
  },
  {
    "theme": "divisibility",
    "themeLabel": "Divisibility & Remainders",
    "title": "The Conjugate That Hides in Plain Sight",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "conjugate-pair",
      "fractional-part",
      "integer-part",
      "surds"
    ],
    "statement": "Let $I$ be the integer part and $f$ the fractional part of $(2+\\sqrt3)^{n}$ for a positive integer $n$. Evaluate $(I+f)(1-f)$.",
    "answer": "\\[\\boxed{1}\\]",
    "trap": "Concluding $f=\\tfrac12$ or trying to compute $I$ and $f$ separately by estimating $\\sqrt3$. The whole point is that the conjugate $(2-\\sqrt3)^n$ lies in $(0,1)$ — but the seductive error is to claim the fractional part equals $(2-\\sqrt3)^n$. In fact $(2+\\sqrt3)^n+(2-\\sqrt3)^n$ is an integer $N$, so $(2-\\sqrt3)^n=N-(I+f)$, forcing $f=1-(2-\\sqrt3)^n$, NOT $(2-\\sqrt3)^n$. Getting that sign wrong flips $1-f$ and breaks the identity.",
    "solutions": [
      {
        "name": "Conjugate pairing",
        "steps": [
          "Let $x=(2+\\sqrt3)^n$ and $y=(2-\\sqrt3)^n$. Expanding by the binomial theorem, the odd powers of $\\sqrt3$ carry opposite signs in $x$ and $y$ and cancel in $x+y$, so $N:=x+y\\in\\mathbb{Z}$.",
          "Since $0<2-\\sqrt3<1$, we have $0<y<1$, hence $x=N-y\\in(N-1,N)$, giving $I=N-1$ and $f=x-(N-1)=1-y$.",
          "Then $1-f=y$ and $I+f=x$, so $(I+f)(1-f)=xy=\\big((2+\\sqrt3)(2-\\sqrt3)\\big)^n=(4-3)^n=1^n=\\boxed{1}$."
        ]
      },
      {
        "name": "Product invariant",
        "steps": [
          "The numbers $x=(2+\\sqrt3)^n$ and $y=(2-\\sqrt3)^n$ satisfy $xy=\\big((2+\\sqrt3)(2-\\sqrt3)\\big)^n=1^n=1$.",
          "Because $0<y<1$ and $x+y$ is an integer, $x$ is just below that integer: its fractional part is $f=1-y$, so $I+f=x$ and $1-f=y$.",
          "Thus $(I+f)(1-f)=x\\cdot y=1$, independent of $n$, giving $\\boxed{1}$."
        ]
      }
    ],
    "remark": "Insight: when the conjugate has product $1$ with the original, the identity $(I+f)(1-f)=1$ holds for every $n$ — a fingerprint of $xy=1$, not of any particular exponent. The same trick (pair with the conjugate, note it lies in $(0,1)$, read off $f=1-y$) cracks any $(a+\\sqrt b)^n$ where $0<a-\\sqrt b<1$."
  },
  {
    "theme": "divisibility",
    "themeLabel": "Divisibility & Remainders",
    "title": "When Adding Is Forbidden",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "conjugate-pair",
      "sign-trap",
      "fractional-part",
      "surds",
      "parity"
    ],
    "statement": "Let $n$ be a positive \\emph{odd} integer, and let $I,f$ be the integer and fractional parts of $(\\sqrt5+2)^{n}$. Evaluate $f\\,(I+f)$.",
    "answer": "\\[\\boxed{1}\\]",
    "trap": "Reflexively forming $(\\sqrt5+2)^n+(\\sqrt5-2)^n$ as in the standard recipe. For odd $n$ this SUM is irrational (it equals $2q\\sqrt5$), so it is useless! The correct conjugate manoeuvre is to SUBTRACT: $(\\sqrt5+2)^n-(\\sqrt5-2)^n$ is the integer. Choosing add-vs-subtract by the parity of $n$ is the entire trap; adding gives an irrational number and the whole approach collapses.",
    "solutions": [
      {
        "name": "Subtract the conjugate (odd parity)",
        "steps": [
          "Write $(\\sqrt5+2)^n=p+q\\sqrt5$ with $p,q\\in\\mathbb{Z}^+$. Since $n$ is odd, $(\\sqrt5-2)^n=-(2-\\sqrt5)^n=-p+q\\sqrt5$, so $x-y=(\\sqrt5+2)^n-(\\sqrt5-2)^n=2p\\in\\mathbb{Z}$ (the SUM $2q\\sqrt5$ is irrational, so one must subtract).",
          "Here $y=(\\sqrt5-2)^n\\in(0,1)$ because $0<\\sqrt5-2<1$. From $x=2p+y$ with $0<y<1$ we get $I=2p$ and $f=y$.",
          "Since $(\\sqrt5+2)(\\sqrt5-2)=5-4=1$, we have $xy=1$, i.e. $y=1/x$. Hence $f(I+f)=y\\cdot x=xy=\\boxed{1}$."
        ]
      },
      {
        "name": "Reciprocal observation",
        "steps": [
          "Let $x=(\\sqrt5+2)^n$, $y=(\\sqrt5-2)^n$; then $xy=1$ and $y\\in(0,1)$, so $y=1/x<1$.",
          "For odd $n$ the integer combination is $x-y$ (not $x+y$), and $x-y=I$ forces $f=x-I=y$.",
          "Therefore $f(I+f)=y\\,x=1$, so the value is $\\boxed{1}$."
        ]
      }
    ],
    "remark": "Insight: parity decides whether the conjugate is added or subtracted. With $(\\sqrt a+b)$ and $\\sqrt a-b\\in(0,1)$, odd powers need subtraction; the reciprocal relation $xy=1$ then delivers $f(I+f)=1$."
  },
  {
    "theme": "divisibility",
    "themeLabel": "Divisibility & Remainders",
    "title": "The Units Digit of an Integer Part",
    "difficulty": 5,
    "task": "Find",
    "tags": [
      "conjugate-pair",
      "recurrence",
      "units-digit",
      "parity",
      "surds"
    ],
    "statement": "Let $I$ be the integer part of $(1+\\sqrt2)^{2024}$. Find the units digit of $I$.",
    "answer": "\\[\\boxed{3}\\]",
    "trap": "Treating $(1-\\sqrt2)^{2024}$ as if it sat in $(0,1)$ with the same role as in the odd case. Here $1-\\sqrt2<0$, so its even power $(1-\\sqrt2)^{2024}=(\\sqrt2-1)^{2024}\\in(0,1)$ is a small POSITIVE number. The trap is the floor: since $(1+\\sqrt2)^{2024}=S-(\\text{small positive})$ where $S$ is the integer sum, we get $I=S-1$, NOT $S$. Forgetting the $-1$ (the off-by-one from the floor) reads off the units digit of $S$, namely $4$, instead of the correct $3$.",
    "solutions": [
      {
        "name": "Integer sum minus one",
        "steps": [
          "Let $a_n=(1+\\sqrt2)^n+(1-\\sqrt2)^n$. The surd cross terms cancel, so each $a_n\\in\\mathbb{Z}$, with $a_0=2,\\;a_1=2$ and recurrence $a_n=2a_{n-1}+a_{n-2}$.",
          "For even $n=2024$, $c:=(1-\\sqrt2)^{2024}=(\\sqrt2-1)^{2024}\\in(0,1)$. Then $(1+\\sqrt2)^{2024}=a_{2024}-c\\in(a_{2024}-1,a_{2024})$, so $I=a_{2024}-1$.",
          "Reduce the recurrence modulo $10$: $a_n\\equiv2a_{n-1}+a_{n-2}\\pmod{10}$. Iterating from $a_0\\equiv2,\\;a_1\\equiv2$ gives the units digit $a_{2024}\\equiv4\\pmod{10}$.",
          "Hence $I=a_{2024}-1\\equiv4-1=3\\pmod{10}$; the units digit of $I$ is $\\boxed{3}$."
        ]
      },
      {
        "name": "Period of the last digit",
        "steps": [
          "The last-digit sequence of $a_n=2a_{n-1}+a_{n-2}\\pmod{10}$ is periodic. Listing terms $2,2,6,4,4,2,8,8,4,6,6,8,\\dots$ shows the cycle repeats with period $12$.",
          "Since $2024\\equiv 8\\pmod{12}$, the units digit of $a_{2024}$ equals that of $a_8$, which is $4$, so $a_{2024}\\equiv4\\pmod{10}$.",
          "Because the conjugate is a small positive number (even exponent), $I=a_{2024}-1\\equiv3\\pmod{10}$, so the units digit is $\\boxed{3}$."
        ]
      }
    ],
    "remark": "Insight: the sign of the conjugate sets the floor. A positive small conjugate means $I=S-1$; combine that off-by-one with a mod-$10$ recurrence to extract a single digit without ever computing the $775$-digit number."
  },
  {
    "theme": "divisibility",
    "themeLabel": "Divisibility & Remainders",
    "title": "How Deep Does Three Go?",
    "difficulty": 5,
    "task": "Prove that",
    "tags": [
      "lifting-the-exponent",
      "p-adic-valuation",
      "binomial",
      "induction"
    ],
    "statement": "For a positive integer $m$, let $v_3(m)$ denote the exponent of $3$ in the prime factorisation of $m$. Prove that for every nonnegative integer $k$,\n\\[\nv_3\\!\\left(2^{3^{k}}+1\\right)=k+1.\n\\]",
    "answer": "\\[\\boxed{v_3\\!\\left(2^{3^k}+1\\right)=k+1}\\]",
    "trap": "Checking that $3\\mid 2^{3^k}+1$, inspecting $k=0,1,2$, and then 'guessing' the pattern $k+1$ without proof. Equally fatal: proving only the divisibility $3^{k+1}\\mid 2^{3^k}+1$ (a lower bound on the valuation) and declaring victory. The whole difficulty is the sharp upper bound, i.e. that $3^{k+2}\\nmid 2^{3^k}+1$. The valuation grows by exactly one at each step, never faster; pinning that down needs the Lifting-the-Exponent lemma (or an induction that tracks the exact extra factor), not a naive divisibility induction.",
    "solutions": [
      {
        "name": "Lifting the Exponent (LTE)",
        "steps": [
          "Write $2^{3^k}+1=2^{n}+1^{n}$ with $n=3^k$. The prime $p=3$ satisfies $3\\mid 2+1$, $3\\nmid 2$ and $3\\nmid 1$, and the exponent $n=3^k$ is odd. These are exactly the hypotheses of the Lifting-the-Exponent lemma for a sum $a^n+b^n$ with $p$ odd.",
          "LTE then gives the exact equality $v_3\\!\\left(2^{n}+1^{n}\\right)=v_3(2+1)+v_3(n)$, valuation included on both sides (it is an equality, not merely a divisibility).",
          "Here $v_3(2+1)=v_3(3)=1$ and $v_3(n)=v_3(3^k)=k$.",
          "Therefore $v_3\\!\\left(2^{3^k}+1\\right)=1+k=k+1$, the exact power of $3$ dividing the number. $\\boxed{v_3=k+1}$"
        ]
      },
      {
        "name": "Induction via the factorisation $A^3+1=(A+1)(A^2-A+1)$",
        "steps": [
          "Base case $k=0$: $2^{3^0}+1=2^1+1=3$, so $v_3=1=0+1$.",
          "Inductive step: assume $v_3\\!\\left(2^{3^k}+1\\right)=k+1$. Put $A=2^{3^k}$, so $A+1=2^{3^k}+1$ and by hypothesis $A\\equiv-1\\pmod{3^{k+1}}$, say $A=-1+3^{k+1}t$ with $3\\nmid t$. Then $2^{3^{k+1}}+1=A^3+1=(A+1)\\,(A^2-A+1)$.",
          "First factor: $v_3(A+1)=k+1$ by the inductive hypothesis.",
          "Second factor: substitute $A=-1+3^{k+1}t$. Then $A^2-A+1=(1-2\\cdot3^{k+1}t+3^{2k+2}t^2)-(-1+3^{k+1}t)+1=3-3\\cdot3^{k+1}t+3^{2k+2}t^2=3\\bigl(1-3^{k+1}t+3^{2k+1}t^2\\bigr)$. Since $k\\ge0$, the bracket is $\\equiv1\\pmod 3$, hence not divisible by $3$. Thus $v_3(A^2-A+1)=1$ exactly — one extra factor of $3$, no more.",
          "Adding the two valuations, $v_3\\!\\left(2^{3^{k+1}}+1\\right)=(k+1)+1=k+2=(k+1)+1$, which is the claim for $k+1$. By induction the formula holds for all $k\\ge0$. $\\boxed{v_3=k+1}$"
        ]
      }
    ],
    "remark": "Insight: the work is entirely in the EXACTNESS. The factor $A^2-A+1$ is divisible by $3$ but, because $A\\equiv-1\\pmod{3^{k+1}}$ kills the linear term cleanly, it is divisible by $3$ to the first power only — contributing precisely one new factor of $3$ per step. LTE packages this 'one and no more' into the single identity $v_3(a^n+b^n)=v_3(a+b)+v_3(n)$. The trap is to prove $3^{k+1}\\mid 2^{3^k}+1$ (a lower bound) and silently assume it is also an upper bound; the second factor is exactly where a careless argument would lose control of the valuation."
  },
  {
    "theme": "divisibility",
    "themeLabel": "Divisibility & Remainders",
    "title": "One Hundred Thirty-Three's Secret",
    "difficulty": 3,
    "task": "Prove that",
    "tags": [
      "divisibility-proof",
      "binomial-rewrite",
      "induction",
      "factoring-modulus"
    ],
    "statement": "Prove that $11^{\\,n+1}+12^{\\,2n-1}$ is divisible by $133$ for every positive integer $n$.",
    "answer": "\\[\\boxed{\\text{proved}}\\]",
    "trap": "Attacking $133$ as if it were prime and trying Fermat, or splitting $133=7\\cdot19$ and doing two separate inductions. The clean path is to notice $12^{2n-1}=12\\cdot144^{\\,n-1}$ and $144\\equiv11\\pmod{133}$, collapsing both terms to a common factor $11^{n-1}$. The seductive wrong move is to reduce bases mod $133$ without first matching the exponents, leaving mismatched powers that obscure the shared factor.",
    "solutions": [
      {
        "name": "Factor out the common power",
        "steps": [
          "Rewrite $11^{n+1}=11^{2}\\cdot11^{n-1}=121\\cdot11^{n-1}$ and $12^{2n-1}=12\\cdot(12^2)^{n-1}=12\\cdot144^{\\,n-1}$.",
          "Since $144=133+11\\equiv11\\pmod{133}$, we have $144^{\\,n-1}\\equiv11^{\\,n-1}\\pmod{133}$, so $12^{2n-1}\\equiv12\\cdot11^{\\,n-1}\\pmod{133}$.",
          "Therefore $11^{n+1}+12^{2n-1}\\equiv11^{\\,n-1}(121+12)=11^{\\,n-1}\\cdot133\\equiv0\\pmod{133}$. Hence $133$ divides the expression. $\\boxed{\\text{proved}}$"
        ]
      },
      {
        "name": "Induction",
        "steps": [
          "Base $n=1$: $11^{2}+12^{1}=121+12=133$, divisible by $133$.",
          "Assume $133\\mid 11^{n+1}+12^{2n-1}$. Then $11^{n+2}+12^{2n+1}=11\\cdot11^{n+1}+144\\cdot12^{2n-1}=11(11^{n+1}+12^{2n-1})+(144-11)12^{2n-1}$.",
          "The first bracket is divisible by $133$ by hypothesis, and $144-11=133$, so the second term is a multiple of $133$. Thus the whole is divisible by $133$, completing the induction. $\\boxed{\\text{proved}}$"
        ]
      }
    ],
    "remark": "Insight: divisibility proofs of $a^{f(n)}+b^{g(n)}$ usually hinge on a hidden congruence between the bases ($144\\equiv11$) that exposes a common factor — find it before reaching for induction."
  },
  {
    "theme": "divisibility",
    "themeLabel": "Divisibility & Remainders",
    "title": "Sixty-Four from a Single Expansion",
    "difficulty": 4,
    "task": "Prove that",
    "tags": [
      "binomial-expansion",
      "divisibility-proof",
      "truncation",
      "prime-power"
    ],
    "statement": "Prove that $3^{\\,2n+2}-8n-9$ is divisible by $64$ for every positive integer $n$.",
    "answer": "\\[\\boxed{\\text{proved}}\\]",
    "trap": "Writing $3^{2n+2}=9\\cdot 9^{n}$ and inducting on the power alone, then losing track of the linear part $-8n-9$. The clean route is $3^{2n+2}=9^{\\,n+1}=(1+8)^{\\,n+1}$ and reading off the binomial expansion: the $k=0$ and $k=1$ terms reproduce $9+8n$ exactly, so they cancel, and every surviving term carries $8^{k}$ with $k\\ge 2$. The subtle point is that it is not enough to see a factor of $8$ in the leftover; one must observe that the smallest surviving power is $8^{2}=64$, and that the binomial coefficients in front are integers, so the whole tail is a genuine multiple of $64$, not merely of $8$.",
    "solutions": [
      {
        "name": "Binomial about $1+8$",
        "steps": [
          "Write $3^{2n+2}=9^{\\,n+1}=(1+8)^{\\,n+1}=\\displaystyle\\sum_{k=0}^{n+1}\\binom{n+1}{k}8^{k}$.",
          "The $k=0$ and $k=1$ terms give $1+\\binom{n+1}{1}8=1+8(n+1)=9+8n$. Subtracting, $3^{2n+2}-8n-9=\\displaystyle\\sum_{k=2}^{n+1}\\binom{n+1}{k}8^{k}$.",
          "Every term of this sum has $k\\ge 2$, so it equals $8^{2}\\displaystyle\\sum_{k=2}^{n+1}\\binom{n+1}{k}8^{\\,k-2}$, an integer multiple of $8^{2}=64$. Hence $64\\mid 3^{2n+2}-8n-9$. $\\boxed{\\text{proved}}$"
        ]
      },
      {
        "name": "Induction with carried difference",
        "steps": [
          "Base $n=1$: $3^{4}-8-9=81-17=64$, divisible by $64$.",
          "Let $P(n)=3^{2n+2}-8n-9$. Compute the recurrence: $P(n+1)-9P(n)=\\big(3^{2n+4}-8n-17\\big)-9\\big(3^{2n+2}-8n-9\\big)$. The $3^{2n+4}-9\\cdot 3^{2n+2}=0$ cancels, leaving $-8n-17+72n+81=64n+64=64(n+1)$.",
          "Thus $P(n+1)=9P(n)+64(n+1)$. If $64\\mid P(n)$, then both terms on the right are multiples of $64$, so $64\\mid P(n+1)$. By induction $64\\mid P(n)$ for all positive integers $n$. $\\boxed{\\text{proved}}$"
        ]
      }
    ],
    "remark": "Insight: $(1+8)^{m}$ is the natural lens, because the modulus $64=8^{2}$ is a power of the very base of the expansion. The first two binomial terms reproduce the linear part $9+8n$ exactly and cancel it, and everything that survives starts at $8^{2}$. Matching the base of the expansion to the prime in the modulus is the decisive move; the induction route reaches the same place but only after one notices the carried remainder is itself $64(n+1)$."
  },
  {
    "theme": "divisibility",
    "themeLabel": "Divisibility & Remainders",
    "title": "The Lonely Prime of n^4+4^n",
    "difficulty": 5,
    "task": "Find all",
    "tags": [
      "sophie-germain",
      "factoring",
      "primality",
      "parity-cases"
    ],
    "statement": "Find all positive integers $n$ for which $n^{4}+4^{\\,n}$ is prime.",
    "answer": "\\[\\boxed{n=1}\\]",
    "trap": "Testing small $n$, finding $n=1$ gives $5$ (prime), then declaring 'only $n=1$' without proof, or worrying only about even $n$ (where $n^4+4^n$ is plainly even and $>2$). The deep case is ODD $n>1$: here one must invoke the Sophie Germain identity $a^4+4b^4=(a^2-2ab+2b^2)(a^2+2ab+2b^2)$ with $b=2^{(n-1)/2}$, producing a nontrivial factorisation. Believing odd inputs might stay prime is the conceptual gap.",
    "solutions": [
      {
        "name": "Parity split with Sophie Germain",
        "steps": [
          "If $n$ is even with $n\\ge2$, both $n^4$ and $4^n$ are even, so $n^4+4^n$ is even and exceeds $2$; hence it is composite.",
          "If $n$ is odd with $n\\ge3$, write $n=2m+1$ so that $4^n=4\\cdot 4^{2m}=4\\,(2^m)^4$. Applying the Sophie Germain identity with $a=n,\\ b=2^m$ gives $n^4+4(2^m)^4=\\bigl(n^2-2n\\cdot2^m+2\\cdot4^m\\bigr)\\bigl(n^2+2n\\cdot2^m+2\\cdot4^m\\bigr).$",
          "Complete the square in the smaller factor: $n^2-2n\\cdot2^m+2\\cdot4^m=(n-2^m)^2+(2^m)^2$. Since $m\\ge1$ forces $2^m\\ge2$, this is at least $0+4=4>1$, while the larger factor $(n+2^m)^2+(2^m)^2$ is clearly bigger still. So $n^4+4^n$ splits as a product of two integers each $>1$, hence is composite.",
          "Only $n=1$ remains, and $1^4+4^1=5$ is prime. Therefore the unique value is $\\boxed{n=1}$."
        ]
      },
      {
        "name": "Direct factorisation check",
        "steps": [
          "The Sophie Germain identity $x^4+4y^4=(x^2-2xy+2y^2)(x^2+2xy+2y^2)$ applies exactly when $4^n$ can be written as $4y^4$, i.e. when $n$ is odd, with $y=2^{(n-1)/2}$.",
          "For odd $n\\ge3$ we have $y=2^{(n-1)/2}\\ge2$, and the smaller factor equals $(x-y)^2+y^2=(n-y)^2+y^2\\ge y^2\\ge4>1$; thus the number is a genuine product of two factors $>1$ and is composite. For even $n\\ge2$ it is even and exceeds $2$.",
          "Hence the only prime value occurs at $n=1$, giving $\\boxed{n=1}$."
        ]
      }
    ],
    "remark": "Insight: $4^n$ secretly equals $4y^4$ precisely when $n$ is odd, which is exactly what unlocks the Sophie Germain factorisation. The complete argument needs both the even case (trivially even) and the odd case (factored) -- neither half alone settles the problem. A brute-force sweep over $1\\le n\\le 40$ confirms $n=1$ is the only prime, matching the proof."
  },
  {
    "theme": "approximation",
    "themeLabel": "Approximations & Inequalities",
    "title": "The Two-Term Verdict on $(1.002)^6$",
    "difficulty": 3,
    "task": "Determine",
    "statement": "Using the binomial expansion, approximate $(1.002)^6$ by its first two terms $1+6(0.002)=1.012$. Determine whether this two-term value is an over- or under-estimate, and find a rigorous bound on the error $E=(1.002)^6-1.012$ of the form $E<10^{-k}$ for the largest such integer $k$, justifying the bound from the omitted terms (not from the known exact value).",
    "answer": "\\[\\boxed{\\text{under-estimate},\\quad k=4\\ \\ (E<10^{-4})}\\]",
    "trap": "Declaring the approximation 'accurate to 3 decimals' by guessing the error is negligible. Without bounding the tail $\\sum_{j\\ge2}\\binom6j x^j$ you cannot certify the sign or size; here the first omitted term alone is $6.0\\times10^{-5}$, so the truth $1.01206\\ldots$ exceeds $1.012$, making it an under-estimate, and the full tail must be shown to stay below $10^{-4}$.",
    "solutions": [
      {
        "name": "Bound the positive tail",
        "steps": [
          "Write $(1.002)^6=\\sum_{j=0}^6\\binom6j(0.002)^j=1.012+\\underbrace{\\sum_{j=2}^6\\binom6j(0.002)^j}_{E}$.",
          "Every omitted term is positive, so $E>0$: the value $1.012$ is a strict under-estimate.",
          "The terms shrink fast: $E=15(0.002)^2+20(0.002)^3+\\cdots=6\\times10^{-5}+1.6\\times10^{-7}+\\cdots$.",
          "Crudely, $E<\\sum_{j=2}^{6}\\binom6j(0.002)^j<\\binom62(0.002)^2\\cdot\\frac1{1-r}$ with ratio $r=\\tfrac{20}{15}(0.002)\\approx0.0027$, giving $E<6.02\\times10^{-5}<10^{-4}$.",
          "Thus the largest valid $k$ is $4$, and $\\boxed{\\text{under-estimate},\\ k=4}$."
        ]
      },
      {
        "name": "Geometric over-bound of the tail",
        "steps": [
          "Set $x=0.002$. Each later coefficient satisfies $\\binom6{j+1}/\\binom6j=\\frac{6-j}{j+1}\\le2$ for $j\\ge2$.",
          "Hence successive omitted terms obey $t_{j+1}/t_j\\le2x=0.004$, so the tail $E$ is dominated by a geometric series with first term $t_2=15x^2=6\\times10^{-5}$ and ratio $\\le0.004$.",
          "Therefore $0<E\\le\\frac{6\\times10^{-5}}{1-0.004}<6.03\\times10^{-5}$.",
          "Since $6.03\\times10^{-5}<10^{-4}$ but $E>10^{-5}$, the largest $k$ with $E<10^{-k}$ is $k=4$; the sign is positive, so it is an under-estimate: $\\boxed{k=4}$."
        ]
      }
    ],
    "tags": [
      "binomial-expansion",
      "truncation-error",
      "estimation",
      "error-bound"
    ],
    "remark": "Insight: an approximation is only as good as its error certificate. The two-term value is fine, but the grade ($k$) comes entirely from bounding the discarded tail and noting all omitted terms share a sign."
  },
  {
    "theme": "approximation",
    "themeLabel": "Approximations & Inequalities",
    "title": "$(0.98)^{10}$ and the Treacherous Sign of the Remainder",
    "difficulty": 3,
    "task": "Determine",
    "statement": "Let $A=1+10(-0.02)=0.8$ be the two-term binomial estimate of $(0.98)^{10}$, and let $B=A+\\binom{10}{2}(-0.02)^2$ be the three-term estimate. Determine, with justification from the expansion's term signs, which of $A,B$ is an over-estimate and which is an under-estimate of the true value, and give $(0.98)^{10}$ correct to four decimal places.",
    "answer": "\\[\\boxed{A=0.8\\ \\text{under},\\ B=0.818\\ \\text{over};\\quad (0.98)^{10}=0.8171}\\]",
    "trap": "Assuming the three-term value $B$ is automatically closer/larger by analogy with the positive-$x$ case. With $x=-0.02$ the omitted terms alternate in sign; truncating after the quadratic term overshoots because the next (cubic) term $\\binom{10}{3}(-0.02)^3\\approx-9.6\\times10^{-4}$ is negative, so $B$ is an over-estimate, not an under-estimate.",
    "solutions": [
      {
        "name": "Track partial-sum signs",
        "steps": [
          "Expand with $x=-0.02$: $(0.98)^{10}=\\sum_{j=0}^{10}\\binom{10}{j}(-0.02)^j$, terms alternate in sign.",
          "$A=0.8$ omits $+\\binom{10}{2}x^2-\\binom{10}{3}|x|^3+\\cdots$; the leading omitted term $\\binom{10}{2}x^2=+0.018>0$ dominates, so $A$ is an under-estimate.",
          "$B=0.8+0.018=0.818$ then omits $-\\binom{10}{3}|x|^3+\\cdots$ whose leading term is negative, so $B$ is an over-estimate.",
          "Computing directly, $(0.98)^{10}=0.81707\\ldots\\Rightarrow\\boxed{0.8171}$, and indeed $0.8<0.8171<0.818$, confirming $A$ low, $B$ high."
        ]
      },
      {
        "name": "Alternating-series sandwich",
        "steps": [
          "Substitute $y=0.02$, so $(1-y)^{10}=1-10y+45y^2-120y^3+\\cdots$ is an alternating series with strictly decreasing magnitudes (since $y$ is small enough that $\\binom{10}{j}y^j$ decreases for $j\\ge1$).",
          "For such an alternating series, consecutive partial sums bracket the sum: the partial sum after an odd-index term is below, after an even-index term is above.",
          "Hence $A$ (stopping at the $-10y$ term, an odd-power omission to follow) lies below and $B$ (stopping at $+45y^2$) lies above the true value.",
          "Therefore $0.8<(0.98)^{10}<0.818$ and to four places $\\boxed{0.8171}$, with $A$ an under- and $B$ an over-estimate."
        ]
      }
    ],
    "tags": [
      "binomial-expansion",
      "alternating-series",
      "sign-of-error",
      "estimation"
    ],
    "remark": "Insight: for negative increments the truncation error flips sign with each new term. Knowing which partial sum brackets from which side is the whole game; the decimal value is incidental."
  },
  {
    "theme": "approximation",
    "themeLabel": "Approximations & Inequalities",
    "title": "How Late Does $\\left(1+\\tfrac1n\\right)^n$ Cross $2.7$?",
    "difficulty": 4,
    "task": "Find the number of …",
    "statement": "The sequence $a_n=\\left(1+\\dfrac1n\\right)^n$ increases strictly to $e=2.71828\\ldots$. Find the number of positive integers $n$ for which $a_n\\le 2.7$, i.e. for which the bound has not yet reached $2.7$.",
    "answer": "\\[\\boxed{73}\\]",
    "trap": "Reasoning 'since $a_n\\to e>2.7$, only finitely many small $n$ fail, surely around $n=10$ or $20$'. The convergence is painfully slow ($e-a_n\\sim e/(2n)$), so $a_n$ does not exceed $2.7$ until $n=74$; estimating the crossing by eye, or by a crude two-term expansion, badly undershoots the true index.",
    "solutions": [
      {
        "name": "Monotonicity + locate the crossing",
        "steps": [
          "Because $a_n$ is strictly increasing, $\\{n:a_n\\le2.7\\}$ is an initial block $\\{1,2,\\dots,N\\}$; we need the largest $N$ with $a_N\\le2.7$.",
          "Use the asymptotic $\\ln a_n=n\\ln(1+\\tfrac1n)=1-\\tfrac1{2n}+\\tfrac1{3n^2}-\\cdots$, so $a_n\\approx e\\,e^{-1/(2n)}\\approx e\\left(1-\\tfrac1{2n}\\right)$.",
          "Set $e(1-\\tfrac1{2n})=2.7\\Rightarrow\\tfrac1{2n}=1-\\tfrac{2.7}{e}=0.00673\\Rightarrow n\\approx74.3$.",
          "Checking the integers, $a_{73}=2.69989\\ldots\\le2.7$ while $a_{74}=2.70014\\ldots>2.7$, so $N=73$ and the count is $\\boxed{73}$."
        ]
      },
      {
        "name": "Direct inequality squeeze",
        "steps": [
          "We want the threshold where $n\\ln\\!\\left(1+\\tfrac1n\\right)>\\ln2.7$, with $\\ln2.7=0.993252\\ldots$.",
          "Using $\\ln(1+t)=t-\\tfrac{t^2}2+\\tfrac{t^3}3-\\cdots$ at $t=\\tfrac1n$ gives $n\\ln(1+\\tfrac1n)=1-\\tfrac1{2n}+\\tfrac1{3n^2}-\\cdots$.",
          "The inequality becomes $1-\\tfrac1{2n}+\\tfrac1{3n^2}>0.993252$, i.e. roughly $\\tfrac1{2n}<0.006748+\\tfrac1{3n^2}$, whose boundary near $n\\approx74$ is sharpened by the $+\\tfrac1{3n^2}$ term to put the crossing between $73$ and $74$.",
          "Hence exactly $n=1,\\dots,73$ satisfy $a_n\\le2.7$, giving $\\boxed{73}$."
        ]
      }
    ],
    "tags": [
      "e-limit",
      "monotonic-sequence",
      "slow-convergence",
      "logarithmic-expansion"
    ],
    "remark": "Insight: the famous limit converges like $1/n$, so 'it's basically $e$ already' intuition fails. The $-1/(2n)$ correction term pins the crossing index precisely."
  },
  {
    "theme": "approximation",
    "themeLabel": "Approximations & Inequalities",
    "title": "$1000^{1000}$ versus $1001^{999}$, Bare-Handed",
    "difficulty": 4,
    "task": "Determine",
    "statement": "Determine which of $1000^{1000}$ and $1001^{999}$ is larger, using Bernoulli's inequality (and no logarithms or calculators) to justify the comparison rigorously.",
    "answer": "\\[\\boxed{1000^{1000}>1001^{999}}\\]",
    "trap": "Taking logs and trusting a loose linear estimate $999\\ln1001\\approx1000\\ln1000$ to call it 'too close to tell'. The honest reduction is to compare $\\left(1+\\tfrac1{1000}\\right)^{999}$ with $1000$; a careless application of Bernoulli in the wrong direction (or expecting the bound to be near $1000$) misses that the bound is only about $2.7$, a landslide.",
    "solutions": [
      {
        "name": "Reduce to a power of $1+\\tfrac1{1000}$",
        "steps": [
          "Divide: $\\dfrac{1001^{999}}{1000^{999}}=\\left(\\dfrac{1001}{1000}\\right)^{999}=\\left(1+\\dfrac1{1000}\\right)^{999}$.",
          "So $1001^{999}=1000^{999}\\left(1+\\tfrac1{1000}\\right)^{999}$, and the comparison with $1000^{1000}=1000^{999}\\cdot1000$ reduces to comparing $\\left(1+\\tfrac1{1000}\\right)^{999}$ against $1000$.",
          "Since $\\left(1+\\tfrac1m\\right)^{m}<e<3$ for all $m$, we get $\\left(1+\\tfrac1{1000}\\right)^{999}<\\left(1+\\tfrac1{1000}\\right)^{1000}<3\\ll1000$.",
          "Therefore $1001^{999}=1000^{999}\\cdot(\\text{something}<1000)<1000^{1000}$, i.e. $\\boxed{1000^{1000}>1001^{999}}$."
        ]
      },
      {
        "name": "Bernoulli upper bound via the reciprocal",
        "steps": [
          "Equivalently compare $\\left(\\dfrac{1000}{1001}\\right)^{999}=\\left(1-\\dfrac1{1001}\\right)^{999}$ with $\\dfrac1{1000}$.",
          "By Bernoulli, $\\left(1-\\tfrac1{1001}\\right)^{999}\\ge1-\\tfrac{999}{1001}=\\tfrac{2}{1001}>\\tfrac1{1000}$.",
          "Hence $\\dfrac{1000^{999}}{1001^{999}}>\\dfrac1{1000}$, which rearranges to $1000^{999}\\cdot1000>1001^{999}$, i.e. $1000^{1000}>1001^{999}$.",
          "Thus $\\boxed{1000^{1000}>1001^{999}}$, proven with a single Bernoulli step."
        ]
      }
    ],
    "tags": [
      "bernoulli-inequality",
      "power-comparison",
      "e-bound",
      "no-calculator"
    ],
    "remark": "Insight: gigantic-looking exponent fights are tamed by factoring out the common base, collapsing the contest into $(1+1/n)^{n}<e$. The second proof shows even a one-line Bernoulli bound settles it."
  },
  {
    "theme": "approximation",
    "themeLabel": "Approximations & Inequalities",
    "title": "Where Bernoulli Turns Traitor",
    "difficulty": 4,
    "task": "Find all",
    "statement": "A student claims $(1+x)^3\\ge 1+3x$ for every real $x$, citing Bernoulli's inequality. Find all real $x$ for which the claim actually FAILS, i.e. $(1+x)^3<1+3x$, and explain precisely which hypothesis of Bernoulli's inequality was violated.",
    "answer": "\\[\\boxed{x<-3}\\]",
    "trap": "Believing Bernoulli $(1+x)^n\\ge1+nx$ holds for all real $x$. Its valid range for integer $n\\ge2$ is $x\\ge-1$ (while for even $n$ convexity does extend it to all real $x$). For odd $n=3$ and $x<-1$ the cube can dip below the tangent line; specifically it fails for all $x<-3$, exactly the region the student forgot to exclude.",
    "solutions": [
      {
        "name": "Factor the difference",
        "steps": [
          "Compute $(1+x)^3-(1+3x)=1+3x+3x^2+x^3-1-3x=3x^2+x^3=x^2(x+3)$.",
          "This is $\\ge0$ exactly when $x+3\\ge0$ (since $x^2\\ge0$), i.e. $x\\ge-3$; it is $<0$ exactly when $x<-3$.",
          "So the claim fails precisely for $x<-3$ (with equality at $x=-3$ and $x=0$).",
          "The violated hypothesis is the domain restriction $x\\ge-1$ in Bernoulli's inequality for $n=3$: $\\boxed{x<-3}$."
        ]
      },
      {
        "name": "Tangent-line / convexity view",
        "steps": [
          "The line $1+3x$ is the tangent to $f(x)=(1+x)^3$ at $x=0$ (since $f(0)=1,\\ f'(0)=3$).",
          "$f$ is convex only on $x\\ge-1$ (where $f''(x)=6(1+x)\\ge0$) and concave on $x<-1$, so the curve eventually lies below its tangent for sufficiently negative $x$.",
          "Setting $f(x)=1+3x$ gives the crossings $x^2(x+3)=0$, whose relevant root is $x=-3$; left of it the concave branch has fallen below the tangent line.",
          "Hence $(1+x)^3<1+3x\\iff x<-3$, so $\\boxed{x<-3}$, and the lost hypothesis was $x\\ge-1$."
        ]
      }
    ],
    "tags": [
      "bernoulli-inequality",
      "domain-restriction",
      "convexity",
      "odd-exponent"
    ],
    "remark": "Insight: Bernoulli is a tangent-line bound, valid where the function is convex. For odd exponents the curve goes concave past $x=-1$ and eventually undercuts the line; the boundary $x=-3$ falls out cleanly by factoring as $x^2(x+3)$."
  },
  {
    "theme": "approximation",
    "themeLabel": "Approximations & Inequalities",
    "title": "The Loose Bound That Lies About $(0.99)^{50}$",
    "difficulty": 5,
    "task": "Prove that",
    "statement": "A student bounds $(0.99)^{50}$ from below by Bernoulli: $(1-0.01)^{50}\\ge1-50(0.01)=\\tfrac12$, and concludes '$(0.99)^{50}$ is about $0.5$.' Prove the sharp two-sided estimate $\\dfrac12<(0.99)^{50}<e^{-1/2}$, and use it to show the true value exceeds the Bernoulli lower bound by more than $20\\%$ of that bound (so 'about $0.5$' is badly wrong).",
    "answer": "\\[\\boxed{\\tfrac12<(0.99)^{50}<e^{-1/2}=0.6065\\ldots,\\quad (0.99)^{50}\\approx0.605>1.2\\cdot\\tfrac12}\\]",
    "trap": "Treating a valid lower bound as an approximation. Bernoulli gives a true but slack floor of $\\tfrac12$; the actual value $0.605$ sits far above it, near the much tighter ceiling $e^{-1/2}$. Confusing 'a bound' with 'the answer' here causes a $>20\\%$ error.",
    "solutions": [
      {
        "name": "Lower by strict Bernoulli, upper by $1+t\\le e^t$",
        "steps": [
          "Strict Bernoulli (equality only at $x=0$): $(1-0.01)^{50}>1-50(0.01)=\\tfrac12$, giving the lower bound.",
          "For the upper bound use $1+t\\le e^{t}$ with $t=-0.01$: $0.99=1-0.01\\le e^{-0.01}$, so $(0.99)^{50}\\le e^{-0.50}=e^{-1/2}$.",
          "Equality $0.99=e^{-0.01}$ is impossible (the inequality $1+t<e^t$ is strict for $t\\ne0$), so $(0.99)^{50}<e^{-1/2}=0.6065\\ldots$.",
          "Hence $\\tfrac12<(0.99)^{50}<0.6065$; the value $0.605$ exceeds $1.2\\times\\tfrac12=0.6$, proving the Bernoulli floor underestimates by over $20\\%$: $\\boxed{\\tfrac12<(0.99)^{50}<e^{-1/2}}$."
        ]
      },
      {
        "name": "Second-order correction for the lower side",
        "steps": [
          "Expand $(1-0.01)^{50}=\\sum_{j\\ge0}\\binom{50}{j}(-0.01)^j=1-0.5+0.1225-\\cdots$ where the $j=2$ term is $\\binom{50}{2}(0.01)^2=0.1225$ and the $j=3$ term is $\\binom{50}{3}(0.01)^3=0.0196$.",
          "The terms $a_j=\\binom{50}{j}(0.01)^j$ are strictly decreasing for $j\\ge2$, so this alternating tail satisfies $\\sum_{j\\ge2}(-1)^j a_j>a_2-a_3=0.1225-0.0196=0.1029$; hence $(0.99)^{50}=0.5+\\sum_{j\\ge2}(-1)^j a_j>0.6029>0.6$, already beating $1.2\\times\\tfrac12$.",
          "For the ceiling, $\\ln(0.99)=-0.01-\\tfrac{0.0001}2-\\cdots<-0.01\\Rightarrow50\\ln(0.99)<-0.5\\Rightarrow(0.99)^{50}<e^{-1/2}$.",
          "Combining, $0.6<(0.99)^{50}<e^{-1/2}=0.6065$, so the value is about $0.605$, far from $0.5$: $\\boxed{\\tfrac12<(0.99)^{50}<e^{-1/2}}$."
        ]
      }
    ],
    "tags": [
      "bernoulli-inequality",
      "exponential-bound",
      "sharp-estimate",
      "truncation-error"
    ],
    "remark": "Insight: $1+t\\le e^t$ is the perfect tight companion to the loose Bernoulli floor. Sandwiching between $\\tfrac12$ and $e^{-1/2}$ exposes how slack a 'valid' linear bound can be when $nx$ is order $1$."
  },
  {
    "theme": "approximation",
    "themeLabel": "Approximations & Inequalities",
    "title": "When Does $2^n$ Overtake $n^2$ for Good?",
    "difficulty": 4,
    "task": "Find all",
    "statement": "Find all positive integers $n$ for which $2^n\\ge n^2$. Prove that the only failure is a single value, and that beyond a finite threshold the inequality is strict and never reverses, certifying the eventual dominance by a binomial lower bound for $2^n$ (no growth-rate hand-waving: exhibit an explicit polynomial that $2^n$ dominates).",
    "answer": "\\[\\boxed{2^n\\ge n^2\\iff n\\ne 3\\quad(\\text{i.e. }n\\in\\{1,2,4\\}\\cup\\{n\\ge5\\});\\ \\text{equality at }n=2,4,\\ \\text{strict failure only at }n=3}\\]",
    "trap": "Reading off a crude `$2^n$ grows faster' slogan and concluding $2^n\\ge n^2$ for every $n\\ge1$, thereby missing the single dip at $n=3$ (where $2^3=8<9=3^2$). The dual trap is the opposite over-correction: declaring the inequality `fails for $n=2,3,4$' because the curves touch there. But $2^2=4=2^2$ and $2^4=16=4^2$ are equalities, so $\\ge$ still holds; only $n=3$ is a genuine strict failure. The equality cases at $n=2,4$ flanking the lone gap at $n=3$ are exactly what a growth-rate slogan erases.",
    "solutions": [
      {
        "name": "Small cases + four-term binomial domination",
        "steps": [
          "Check directly: $n=1:2\\ge1$ (strict); $n=2:4=4$ (equality); $n=3:8<9$ (fails); $n=4:16=16$ (equality); $n=5:32>25$ (strict). So among $n\\le5$ the inequality holds except at $n=3$.",
          "For $n\\ge3$ expand $2^n=(1+1)^n\\ge\\binom{n}{0}+\\binom{n}{1}+\\binom{n}{2}+\\binom{n}{3}=1+n+\\tfrac{n(n-1)}2+\\tfrac{n(n-1)(n-2)}6$, keeping the first four (positive) terms of the binomial sum.",
          "Subtract $n^2$ and clear denominators: $6\\Big(\\text{(four-term sum)}-n^2\\Big)=n^3-6n^2+5n+6=(n-2)\\,(n^2-4n-3)$. The quadratic factor has positive root $2+\\sqrt7\\approx4.646$, so for every integer $n\\ge5$ both factors are positive, giving $(n-2)(n^2-4n-3)>0$ and hence $2^n>n^2$ strictly.",
          "Thus the inequality holds (strictly) for $n=1$ and all $n\\ge5$, with equality at $n=2,4$ and the sole strict failure at $n=3$: $\\boxed{2^n\\ge n^2\\iff n\\ne3}$."
        ]
      },
      {
        "name": "Ratio monotonicity past the threshold",
        "steps": [
          "Let $r_n=2^n/n^2$. Then $\\dfrac{r_{n+1}}{r_n}=2\\left(\\dfrac{n}{n+1}\\right)^2$, which exceeds $1$ iff $2n^2>(n+1)^2$, i.e. $n^2-2n-1>0$, i.e. $n>1+\\sqrt2\\approx2.414$, i.e. $n\\ge3$.",
          "Hence $r_n$ is strictly increasing for $n\\ge3$. Since $r_5=32/25>1$, monotonicity forces $r_n>1$ for every $n\\ge5$ — the inequality, once strict, never reverses.",
          "For $n\\le4$ evaluate directly: $r_1=2,\\ r_2=1,\\ r_3=8/9,\\ r_4=1$. So $2^n\\ge n^2$ holds at $n=1$ (strict), at $n=2,4$ (equality), and fails only at $n=3$.",
          "Combining strict holds at $n=1$ and $n\\ge5$ with equality at $n=2,4$ gives $2^n\\ge n^2\\iff\\boxed{n\\ne3}$."
        ]
      }
    ],
    "tags": [
      "binomial-lower-bound",
      "2^n-vs-polynomial",
      "threshold",
      "monotone-ratio"
    ],
    "remark": "Insight: asymptotic dominance conceals a finite anomalous value, and the answer hinges on reading $\\ge$ honestly — the equalities at $n=2,4$ keep the inequality true there, isolating $n=3$ as the unique failure. The four-term binomial expansion of $(1+1)^n$ furnishes an explicit polynomial $1+n+\\binom{n}{2}+\\binom{n}{3}$ whose excess over $n^2$ factors as $(n-2)(n^2-4n-3)/6$, certifying strict dominance for all $n\\ge5$ — note the cubic term alone is insufficient (it only overtakes $n^2$ at $n\\ge9$), so the full four-term bound is essential."
  },
  {
    "theme": "approximation",
    "themeLabel": "Approximations & Inequalities",
    "title": "The Last $k$ Where the Binomial Row Still Doubles",
    "difficulty": 4,
    "task": "Determine",
    "statement": "In the row $\\binom{100}{0},\\binom{100}{1},\\dots,\\binom{100}{100}$, determine the largest index $k$ for which the next entry is more than twice the current one, i.e. $\\binom{100}{k+1}>2\\binom{100}{k}$.",
    "answer": "\\[\\boxed{k=32}\\]",
    "trap": "Centering the reasoning on the peak at $k=50$ and guessing the 'doubling' persists almost to the middle. The growth ratio $\\binom{100}{k+1}/\\binom{100}{k}=\\frac{100-k}{k+1}$ decays well before the peak; it drops below $2$ already at $k=33$, so the doubling stops far left of center.",
    "solutions": [
      {
        "name": "Exact ratio inequality",
        "steps": [
          "The consecutive ratio is $\\dfrac{\\binom{100}{k+1}}{\\binom{100}{k}}=\\dfrac{100-k}{k+1}$.",
          "Require $\\dfrac{100-k}{k+1}>2\\iff100-k>2k+2\\iff98>3k\\iff k<\\dfrac{98}{3}=32.67$.",
          "Since $k$ is an integer, the largest qualifying index is $k=32$ (check: $\\frac{68}{33}=2.06>2$, while $\\frac{67}{34}=1.97<2$).",
          "Hence $\\boxed{k=32}$."
        ]
      },
      {
        "name": "Where the ratio passes 2",
        "steps": [
          "Define $g(k)=\\dfrac{100-k}{k+1}$, strictly decreasing in $k$ on $[0,100]$.",
          "Solve $g(k)=2$: $100-k=2(k+1)\\Rightarrow k=\\tfrac{98}{3}\\approx32.67$.",
          "By monotonicity, $g(k)>2$ for $k\\le32$ and $g(k)<2$ for $k\\ge33$.",
          "Therefore the largest integer with $\\binom{100}{k+1}>2\\binom{100}{k}$ is $\\boxed{k=32}$."
        ]
      }
    ],
    "tags": [
      "binomial-coefficients",
      "consecutive-ratio",
      "monotonicity",
      "row-growth"
    ],
    "remark": "Insight: the entire local structure of Pascal's row is governed by the simple rational ratio $\\frac{n-k}{k+1}$. Comparisons like 'still doubling' reduce to one linear inequality, no factorials needed."
  },
  {
    "theme": "approximation",
    "themeLabel": "Approximations & Inequalities",
    "title": "$(1.0001)^{10000}$ and the Distance to $e$",
    "difficulty": 5,
    "task": "Prove that",
    "statement": "Let $V=(1.0001)^{10000}=\\left(1+\\tfrac1{10000}\\right)^{10000}$. Prove that $V<e$ and that the deficit $e-V$ satisfies $\\dfrac{e}{2n+2}<e-V<\\dfrac{e}{2n}$ with $n=10000$; deduce $e-V$ to two significant figures.",
    "answer": "\\[\\boxed{V<e,\\qquad e-V\\approx1.4\\times10^{-4}}\\]",
    "trap": "Approximating $V\\approx1+n\\cdot\\tfrac1n=2$ from two terms, or asserting $V=e$ outright. The first is hopelessly crude (off by $0.7$); the second ignores that $(1+\\tfrac1n)^n$ is always strictly below $e$, with a deficit of exact order $e/(2n)$ that this problem demands you pin down, not wave away.",
    "solutions": [
      {
        "name": "Logarithmic expansion of the deficit",
        "steps": [
          "$\\ln V=n\\ln\\!\\left(1+\\tfrac1n\\right)=n\\left(\\tfrac1n-\\tfrac1{2n^2}+\\tfrac1{3n^3}-\\cdots\\right)=1-\\tfrac1{2n}+\\tfrac1{3n^2}-\\cdots<1$, so $V<e$.",
          "Thus $V=e\\cdot e^{-1/(2n)+1/(3n^2)-\\cdots}$, and $e-V=e\\left(1-e^{-1/(2n)+\\cdots}\\right)$.",
          "Using $1-e^{-t}\\in\\left(t-\\tfrac{t^2}2,\\,t\\right)$ for small $t=\\tfrac1{2n}-\\cdots>0$, we get $\\tfrac{e}{2n+2}<e-V<\\tfrac{e}{2n}$ for $n=10^4$ (the lower form absorbs the $+\\tfrac1{3n^2}$ correction).",
          "Numerically $\\tfrac{e}{2n}=\\tfrac{2.71828}{20000}=1.359\\times10^{-4}$, so to two significant figures $e-V\\approx\\boxed{1.4\\times10^{-4}}$."
        ]
      },
      {
        "name": "Two-sided $(1+\\tfrac1n)^n<e<(1+\\tfrac1n)^{n+1}$",
        "steps": [
          "The classical squeeze gives $\\left(1+\\tfrac1n\\right)^n<e<\\left(1+\\tfrac1n\\right)^{n+1}=V\\left(1+\\tfrac1n\\right)$.",
          "From the right inequality, $e<V\\left(1+\\tfrac1n\\right)\\Rightarrow e-V<V\\cdot\\tfrac1n<\\tfrac{e}{n}$; sharpening via the half-step bound $e<\\left(1+\\tfrac1n\\right)^{n+1/2}$ yields $e-V<\\tfrac{e}{2n}$.",
          "From $V<e$ and the companion lower estimate $e>\\left(1+\\tfrac1n\\right)^{n+1/2}\\!/(1+\\tfrac1{2(n+1)})$ one obtains $e-V>\\tfrac{e}{2n+2}$.",
          "Hence $\\tfrac{e}{2n+2}<e-V<\\tfrac{e}{2n}$, and with $n=10000$, $e-V\\approx1.4\\times10^{-4}$: $\\boxed{e-V\\approx1.4\\times10^{-4}}$."
        ]
      }
    ],
    "tags": [
      "e-limit",
      "logarithmic-expansion",
      "deficit-bound",
      "sharp-estimate"
    ],
    "remark": "Insight: the gap between $(1+1/n)^n$ and $e$ is not just 'small'—it is precisely $\\sim e/(2n)$, governed by the $-1/(2n)$ term of $\\ln(1+1/n)$. Quantifying convergence rate, not just asserting it, is the olympiad-level demand."
  },
  {
    "theme": "approximation",
    "themeLabel": "Approximations & Inequalities",
    "title": "Caging $(1.01)^{100}$ Between $2$ and $e$",
    "difficulty": 5,
    "task": "Prove that",
    "statement": "Prove the sharp sandwich $2<(1.01)^{100}<e$, where the left inequality is via Bernoulli and the right via the limit bound, and determine $\\lfloor 1000\\cdot(1.01)^{100}\\rfloor$ given that the value lies in $(2.704,2.705)$ (you must establish that finer window, not merely $(2,e)$).",
    "answer": "\\[\\boxed{2<(1.01)^{100}<e,\\qquad \\lfloor1000\\cdot(1.01)^{100}\\rfloor=2704}\\]",
    "trap": "Stopping at the crude Bernoulli floor $(1.01)^{100}\\ge2$ and the ceiling $e$, then guessing the floor function. The window $(2,e)$ gives $1000V\\in(2000,2718)$, far too wide to pin $\\lfloor1000V\\rfloor$; you must tighten using several binomial terms (which push the value up past $2.704$) before the floor is forced to $2704$.",
    "solutions": [
      {
        "name": "Bernoulli floor, $e$ ceiling, binomial tightening",
        "steps": [
          "Left (strict): Bernoulli with $n=100$, $x=0.01>0$ gives $(1+0.01)^{100}>1+100(0.01)=2$.",
          "Right: $(1+\\tfrac1{100})^{100}<e$ by the standard fact that $(1+\\tfrac1n)^n$ increases strictly to $e$, so $(1.01)^{100}<e=2.71828\\ldots$.",
          "Sharpen the floor with the binomial theorem, whose terms are all positive: $(1.01)^{100}=\\sum_{k=0}^{100}\\binom{100}{k}(0.01)^k$. Every partial sum is therefore a genuine lower bound. Summing through the $k=6$ term, $1+1+0.495+0.1617+0.039212+0.007529+0.001192=2.70463\\ldots>2.704$, so $(1.01)^{100}>2.704$.",
          "For the upper bound $2.705$, bound $\\ln(1.01)$ by an alternating-series partial sum (truncating after a $+$ term overestimates): $\\ln(1.01)<0.01-\\tfrac{0.01^2}2+\\tfrac{0.01^3}3=0.00995033\\overline{3}$, so $\\ln V<0.995034$ and $V<e^{0.995034}=2.70482\\ldots<2.705$.",
          "Hence $2.704<V<2.705$, giving $1000V\\in(2704,2705)$ and $\\lfloor1000V\\rfloor=\\boxed{2704}$, all inside the proven sandwich $2<V<e$."
        ]
      },
      {
        "name": "Logarithmic two-sided bound",
        "steps": [
          "Use the alternating series $\\ln(1.01)=0.01-\\tfrac{0.01^2}2+\\tfrac{0.01^3}3-\\cdots$. Truncating after a $+$ term gives an upper bound and after a $-$ term a lower bound: $0.01-\\tfrac{0.01^2}2<\\ln(1.01)<0.01-\\tfrac{0.01^2}2+\\tfrac{0.01^3}3$, i.e. $0.0099500<\\ln(1.01)<0.0099504$.",
          "Multiplying by $100$: $0.99500<\\ln V<0.99504<1$, which already confirms $V<e$. Also $\\ln V>0.995>\\ln2=0.6931$, so $V>2$ (consistent with Bernoulli).",
          "Exponentiate the tight value. Writing $V=e\\cdot e^{\\ln V-1}=e\\cdot e^{-0.004967\\ldots}$ and using $e^{-t}<1-t+\\tfrac{t^2}2$ controls show $V=e\\cdot(1-0.004967+\\cdots)=2.70481\\ldots$, so $2.704<V<2.705$.",
          "Therefore $1000V\\in(2704,2705)$ and $\\lfloor1000V\\rfloor=\\boxed{2704}$, all inside the proven sandwich $2<V<e$."
        ]
      }
    ],
    "tags": [
      "bernoulli-inequality",
      "e-bound",
      "binomial-expansion",
      "floor-function"
    ],
    "remark": "Insight: $(1+1/n)^n$ with $n=100$ is the protagonist again, but the task forces you past the lazy $(2,e)$ cage to a three-decimal pin-down. The exact value is $2.704813\\ldots$; note the lower bound only clears $2.704$ once you carry the binomial sum through the $k=6$ term (the partial sum through $k=5$ is $2.70344$, still below), and the upper bound falls out cleanly from the alternating $\\ln(1+x)$ series."
  },
  {
    "theme": "seriesindex",
    "themeLabel": "Negative & Fractional Index",
    "title": "The Tenth Echo of a Cubed Reciprocal",
    "difficulty": 3,
    "task": "Determine",
    "tags": [
      "negative index",
      "general coefficient",
      "negative binomial",
      "coefficient extraction"
    ],
    "statement": "In the expansion of $(1-x)^{-3}$, valid for $|x|<1$, determine the coefficient of $x^{10}$.",
    "answer": "$\\boxed{66}$",
    "trap": "Writing the falling factorial as $\\dfrac{(-3)(-4)\\cdots}{r!}$ and then losing a minus sign, or quoting $\\binom{n+r-1}{r}$ with $n=3$ but reading off $\\binom{12}{10}$ as if it were $\\binom{12}{3}=220$. The clean route is $(1-x)^{-n}=\\sum\\binom{n+r-1}{r}x^r$, so the coefficient is $\\binom{12}{10}=\\binom{12}{2}=66$, not $\\binom{12}{3}=220$.",
    "solutions": [
      {
        "name": "Negative-binomial template",
        "steps": [
          "For $(1-x)^{-n}=\\sum_{r\\ge0}\\binom{n+r-1}{r}x^r$, here $n=3$, $r=10$.",
          "Coefficient $=\\binom{3+10-1}{10}=\\binom{12}{10}=\\binom{12}{2}=\\dfrac{12\\cdot11}{2}=66$.",
          "$\\boxed{66}$"
        ]
      },
      {
        "name": "Triangular-number shortcut",
        "steps": [
          "Differentiating $(1-x)^{-1}=\\sum x^r$ twice gives $2(1-x)^{-3}=\\sum_{r\\ge0}(r+1)(r+2)x^r$, so the coefficient of $x^r$ in $(1-x)^{-3}$ is $\\tfrac{(r+1)(r+2)}{2}$.",
          "At $r=10$: $\\dfrac{11\\cdot12}{2}=66$.",
          "$\\boxed{66}$"
        ]
      },
      {
        "name": "Cauchy product / weak compositions",
        "steps": [
          "$(1-x)^{-3}=\\big(\\sum_a x^a\\big)\\big(\\sum_b x^b\\big)\\big(\\sum_c x^c\\big)$; the coefficient of $x^{10}$ counts triples with $a+b+c=10$ and $a,b,c\\ge0$.",
          "By stars and bars the number of solutions is $\\binom{10+2}{2}=\\binom{12}{2}=66$.",
          "$\\boxed{66}$"
        ]
      }
    ],
    "remark": "Insight: the coefficient of $x^r$ in $(1-x)^{-n}$ is purely combinatorial — the number of weak compositions of $r$ into $n$ parts — so no signs ever appear. Both the index gymnastics $\\binom{12}{10}=\\binom{12}{2}$ and the stars-and-bars count land on $66$, while $\\binom{12}{3}=220$ is the classic mis-read."
  },
  {
    "theme": "seriesindex",
    "themeLabel": "Negative & Fractional Index",
    "title": "A Staircase of Odd Numbers",
    "difficulty": 3,
    "task": "Evaluate",
    "tags": [
      "fractional index",
      "series summation",
      "closed form",
      "pochhammer"
    ],
    "statement": "Evaluate the infinite sum \\[ 1+\\frac{3}{4}+\\frac{3\\cdot5}{4\\cdot8}+\\frac{3\\cdot5\\cdot7}{4\\cdot8\\cdot12}+\\cdots \\] by recognising it as a binomial series at a suitable value of $x$.",
    "answer": "$\\boxed{2\\sqrt{2}}$",
    "trap": "Reading the numerators $3,5,7,\\dots$ as the Pochhammer of $\\tfrac32$ but forgetting that the denominators $4,8,12,\\dots=4r$ secretly carry both the $r!$ and a hidden factor $2^r$, so the value of $x$ is $\\tfrac12$, not $1$. Plugging $x=1$ would land you exactly on the boundary $(1-1)^{-3/2}$, where the terms fail to decay and the series diverges.",
    "solutions": [
      {
        "name": "Match to $(1-x)^{-3/2}$",
        "steps": [
          "The $r$-th term is $\\dfrac{3\\cdot5\\cdots(2r+1)}{4\\cdot8\\cdots(4r)}=\\dfrac{(3/2)_r}{r!}\\Big(\\tfrac12\\Big)^r$ since $4\\cdot8\\cdots(4r)=4^r\\,r!$ and $3\\cdot5\\cdots(2r+1)=2^r(3/2)_r$.",
          "Hence the sum is $\\sum_{r\\ge0}\\dfrac{(3/2)_r}{r!}\\big(\\tfrac12\\big)^r=(1-\\tfrac12)^{-3/2}$.",
          "$(1/2)^{-3/2}=2^{3/2}=\\boxed{2\\sqrt2}$"
        ]
      },
      {
        "name": "Ratio test then identify $\\alpha$",
        "steps": [
          "Term ratio $\\dfrac{a_{r+1}}{a_r}=\\dfrac{2r+3}{4r+4}=\\dfrac{(r+3/2)}{(r+1)}\\cdot\\tfrac12$, the signature of $(1-x)^{-3/2}$ with $x=\\tfrac12$.",
          "So $S=(1-\\tfrac12)^{-3/2}=2\\sqrt2$.",
          "$\\boxed{2\\sqrt2}$"
        ]
      },
      {
        "name": "Direct numeric confirmation",
        "steps": [
          "Partial sums $1,\\,1.75,\\,2.21875,\\,2.4921875,\\dots$ climb toward $2.8284\\dots$",
          "This equals $2\\sqrt2=2.8284\\dots$, confirming the closed form.",
          "$\\boxed{2\\sqrt2}$"
        ]
      }
    ],
    "remark": "Insight: every ratio $\\frac{a_{r+1}}{a_r}$ that is a rational function $\\frac{r+\\alpha}{r+1}\\cdot t$ is a binomial series $(1-t)^{-\\alpha}$ in disguise — read $\\alpha$ and $t$ straight off the ratio."
  },
  {
    "theme": "seriesindex",
    "themeLabel": "Negative & Fractional Index",
    "title": "Central Binomials Tamed by a Fifth",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "central binomial",
      "generating function",
      "fractional index",
      "range of validity"
    ],
    "statement": "Using the identity $(1-4x)^{-1/2}=\\sum_{r\\ge0}\\binom{2r}{r}x^r$, evaluate \\[ \\sum_{r=0}^{\\infty}\\frac{\\binom{2r}{r}}{5^{\\,r}}, \\] after first checking that the chosen $x$ lies inside the radius of convergence.",
    "answer": "$\\boxed{\\sqrt{5}}$",
    "trap": "Setting $4x=\\tfrac15$ (so $x=\\tfrac1{20}$) to make the $5^{-r}$ appear, which is wrong: you need $x^r=5^{-r}$, i.e. $x=\\tfrac15$, giving $4x=\\tfrac45<1$ — still valid. Confusing the role of the $4$ leads to evaluating $(1-\\tfrac15)^{-1/2}=\\sqrt{5}/2$ instead of $(1-\\tfrac45)^{-1/2}=\\sqrt5$.",
    "solutions": [
      {
        "name": "Identify $x$ and check validity",
        "steps": [
          "We need $x^r=5^{-r}$, so $x=\\tfrac15$; then $4x=\\tfrac45$ and $|4x|<1$, inside the disc.",
          "Sum $=(1-4x)^{-1/2}=(1-\\tfrac45)^{-1/2}=(\\tfrac15)^{-1/2}=\\sqrt5$.",
          "$\\boxed{\\sqrt5}$"
        ]
      },
      {
        "name": "Direct generating function",
        "steps": [
          "$\\sum\\binom{2r}{r}x^r=\\dfrac1{\\sqrt{1-4x}}$; substitute $x=\\tfrac15$.",
          "$=\\dfrac1{\\sqrt{1-4/5}}=\\dfrac1{\\sqrt{1/5}}=\\sqrt5$.",
          "$\\boxed{\\sqrt5}$"
        ]
      },
      {
        "name": "Numeric sanity",
        "steps": [
          "$1+\\tfrac25+\\tfrac6{25}+\\tfrac{20}{125}+\\cdots=1+0.4+0.24+0.16+\\cdots$ tends to $2.2360\\dots$",
          "$\\sqrt5=2.2360\\dots$, matching.",
          "$\\boxed{\\sqrt5}$"
        ]
      }
    ],
    "remark": "Insight: the radius of $(1-4x)^{-1/2}$ is $\\tfrac14$, so the series converges for $|x|<\\tfrac14$; at $x=\\tfrac15$ we are comfortably inside, and the $\\tfrac45$ scare is illusory."
  },
  {
    "theme": "seriesindex",
    "themeLabel": "Negative & Fractional Index",
    "title": "The Even-Only Ladder",
    "difficulty": 4,
    "task": "Determine",
    "tags": [
      "fractional index",
      "even powers",
      "coefficient extraction",
      "general term"
    ],
    "statement": "Determine the coefficient of $x^{10}$ in the expansion of $(1-4x^{2})^{-1/2}$, valid for $|x|<\\tfrac12$, and state which odd-power coefficients vanish.",
    "answer": "$\\boxed{252}$",
    "trap": "Treating $(1-4x^2)^{-1/2}$ as $(1-4x)^{-1/2}$ in the variable $x$ and reading off the coefficient of $x^{10}$ as $\\binom{20}{10}$. The expansion is in $x^2$, so $x^{10}$ corresponds to the $r=5$ term, giving $\\binom{10}{5}$, and every odd power vanishes.",
    "solutions": [
      {
        "name": "Substitute $u=x^2$",
        "steps": [
          "$(1-4u)^{-1/2}=\\sum_{r\\ge0}\\binom{2r}{r}u^r$, so $(1-4x^2)^{-1/2}=\\sum_{r\\ge0}\\binom{2r}{r}x^{2r}$.",
          "$x^{10}$ needs $2r=10\\Rightarrow r=5$, coefficient $\\binom{10}{5}=252$; all odd powers have coefficient $0$.",
          "$\\boxed{252}$"
        ]
      },
      {
        "name": "General term",
        "steps": [
          "General term $T_r=\\binom{-1/2}{r}(-4)^r x^{2r}=\\binom{2r}{r}x^{2r}$ after simplifying the fractional coefficient.",
          "Set $2r=10$: $T_5=\\binom{10}{5}x^{10}=252\\,x^{10}$.",
          "$\\boxed{252}$"
        ]
      },
      {
        "name": "Parity argument",
        "steps": [
          "$(1-4x^2)^{-1/2}$ is even in $x$, so only even powers survive — odd coefficients are zero.",
          "The even part matches $\\sum\\binom{2r}{r}x^{2r}$, and $x^{10}$ gives $\\binom{10}{5}=252$.",
          "$\\boxed{252}$"
        ]
      }
    ],
    "remark": "Insight: an inner substitution $x\\mapsto x^2$ halves the index and forces a strict even/odd parity — the radius also shrinks from $\\tfrac14$ to $\\tfrac12$ in $x$ because $|4x^2|<1$."
  },
  {
    "theme": "seriesindex",
    "themeLabel": "Negative & Fractional Index",
    "title": "Walking to the Very Edge",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "fractional index",
      "boundary convergence",
      "conditional convergence",
      "alternating series",
      "Abel's theorem"
    ],
    "statement": "The binomial series $(1+x)^{-1/2}=\\sum_{r\\ge0}\\binom{-1/2}{r}x^{r}$ converges for $|x|<1$. Show that at the boundary point $x=1$ the resulting numerical series \\[ 1-\\frac12+\\frac{3}{8}-\\frac{5}{16}+\\frac{35}{128}-\\cdots \\] still converges (though only conditionally), and evaluate its sum.",
    "answer": "$\\boxed{\\dfrac{1}{\\sqrt{2}}}$",
    "trap": "Declaring the sum undefined because $x=1$ lies on the boundary $|x|=1$, where the open-disc convergence theorem offers no guarantee. The disc condition $|x|<1$ is sufficient but not necessary. Here $\\binom{-1/2}{r}=(-1)^r\\binom{2r}{r}4^{-r}$, so the terms strictly alternate in sign and their magnitudes $\\binom{2r}{r}4^{-r}\\sim(\\pi r)^{-1/2}$ decrease monotonically to $0$. Leibniz's test therefore guarantees convergence, and Abel's theorem pins the value to $\\lim_{x\\to1^-}(1+x)^{-1/2}=2^{-1/2}$. A second, subtler trap is to call the convergence absolute: since $|a_r|\\sim(\\pi r)^{-1/2}$ and $\\sum r^{-1/2}$ diverges, the convergence is only conditional.",
    "solutions": [
      {
        "name": "Abel's limit theorem",
        "steps": [
          "For $|x|<1$, $f(x)=(1+x)^{-1/2}=\\sum_{r\\ge0}\\binom{-1/2}{r}x^{r}$ with $\\binom{-1/2}{r}=(-1)^r\\binom{2r}{r}4^{-r}$.",
          "At $x=1$ the numerical series $\\sum_r\\binom{-1/2}{r}$ is alternating with magnitudes $\\binom{2r}{r}4^{-r}\\to0$ monotonically, so it converges by Leibniz's test.",
          "Abel's theorem says that when a power series converges at a boundary point, its sum there equals the radial limit of $f$. Hence the sum is $\\lim_{x\\to1^-}(1+x)^{-1/2}=(2)^{-1/2}$.",
          "$\\boxed{1/\\sqrt2}$"
        ]
      },
      {
        "name": "Sign and decay check, then continuity",
        "steps": [
          "Using $\\binom{-1/2}{r}=(-1)^r\\dfrac{(2r)!}{4^r(r!)^2}=(-1)^r\\dfrac{1}{4^r}\\binom{2r}{r}$, the terms strictly alternate.",
          "By the central-binomial asymptotic $\\binom{2r}{r}4^{-r}\\sim(\\pi r)^{-1/2}$, the magnitudes decrease monotonically to $0$, so Leibniz convergence holds; note $\\sum(\\pi r)^{-1/2}$ diverges, so the convergence is conditional, not absolute.",
          "Because the series converges at $x=1$ and $(1+x)^{-1/2}$ is continuous there, the sum equals the value of the function: $(1+1)^{-1/2}=1/\\sqrt2$.",
          "$\\boxed{1/\\sqrt2}$"
        ]
      },
      {
        "name": "Averaged (Cesaro-accelerated) partial sums",
        "steps": [
          "The partial sums oscillate: $S_0,S_1,S_2,S_3=1,\\;0.5,\\;0.875,\\;0.5625,\\dots$, straddling the limit because the series is alternating.",
          "Averaging consecutive partial sums damps the oscillation: one pass gives $0.75,0.6875,0.71875,\\dots$ and a second pass gives $0.71875,0.70312,0.70898,\\dots\\to0.70711\\dots$.",
          "This matches $1/\\sqrt2=0.70710\\ldots$, confirming the Abel value.",
          "$\\boxed{1/\\sqrt2}$"
        ]
      }
    ],
    "remark": "Insight: $|x|<1$ is sufficient but not necessary for a binomial series to converge. When the boundary series converges on its own merits, Abel's theorem hands you the value for free as the radial limit. Two pitfalls lurk: (1) treating the open-disc condition as if it forbade the edge, and (2) over-claiming absolute convergence. The honest decay rate is $|a_r|=\\binom{2r}{r}4^{-r}\\sim(\\pi r)^{-1/2}$ (like $r^{-1/2}$, not $r^{-3/2}$), so $\\sum|a_r|$ diverges and the convergence at $x=1$ is strictly conditional, riding entirely on the alternation of signs."
  },
  {
    "theme": "seriesindex",
    "themeLabel": "Negative & Fractional Index",
    "title": "Where Two Half-Powers Collide",
    "difficulty": 5,
    "task": "Prove that",
    "tags": [
      "central binomial",
      "convolution",
      "cauchy product",
      "combinatorial identity"
    ],
    "statement": "Prove that for every non-negative integer $n$, \\[ \\sum_{k=0}^{n}\\binom{2k}{k}\\binom{2(n-k)}{\\,n-k\\,}=4^{n}, \\] by squaring a single fractional-index binomial series.",
    "answer": "$\\boxed{\\text{proved}}$",
    "trap": "Trying to force this into Vandermonde's convolution $\\sum_{k}\\binom{a}{k}\\binom{b}{n-k}=\\binom{a+b}{n}$ with $a=b=2n$, which would predict $\\binom{4n}{n}$. This fails: the upper indices $2k$ and $2(n-k)$ move with the summation variable $k$, so the summand is $\\binom{2k}{k}\\binom{2(n-k)}{n-k}$, not $\\binom{2n}{k}\\binom{2n}{n-k}$. Indeed at $n=2$ the true sum is $16$ while $\\binom{8}{2}=28$. The correct device is the Cauchy product of $(1-4x)^{-1/2}$ with itself.",
    "solutions": [
      {
        "name": "Square the central-binomial generating function",
        "steps": [
          "The negative-fractional-index binomial series gives $(1-4x)^{-1/2}=\\sum_{r\\ge0}\\binom{2r}{r}x^{r}$, valid for $|x|<\\tfrac14$; this follows from $\\binom{-1/2}{r}(-4)^{r}=\\binom{2r}{r}$.",
          "Multiply the series by itself: $(1-4x)^{-1/2}\\cdot(1-4x)^{-1/2}=\\Big(\\sum_{k\\ge0}\\binom{2k}{k}x^{k}\\Big)\\Big(\\sum_{m\\ge0}\\binom{2m}{m}x^{m}\\Big)$, and the Cauchy product has $x^{n}$-coefficient $\\sum_{k=0}^{n}\\binom{2k}{k}\\binom{2(n-k)}{n-k}$.",
          "But the left side collapses to a whole index: $(1-4x)^{-1/2}\\cdot(1-4x)^{-1/2}=(1-4x)^{-1}=\\sum_{n\\ge0}4^{n}x^{n}$, whose $x^{n}$-coefficient is $4^{n}$. Equating coefficients of $x^{n}$ gives the identity. $\\boxed{\\text{proved}}$"
        ]
      },
      {
        "name": "Geometric collapse of the self-convolution",
        "steps": [
          "Work entirely with formal power series. Let $f(x)=\\sum_{r\\ge0}\\binom{2r}{r}x^{r}$. The half-index binomial theorem identifies $f(x)=(1-4x)^{-1/2}$ as a formal series, so $f(x)^{2}=(1-4x)^{-1}$.",
          "By the geometric series, $(1-4x)^{-1}=\\sum_{n\\ge0}(4x)^{n}=\\sum_{n\\ge0}4^{n}x^{n}$, an elementary whole-index expansion with no fractional powers left.",
          "Comparing the $x^{n}$-coefficient of $f(x)^{2}$ (the convolution $\\sum_{k=0}^{n}\\binom{2k}{k}\\binom{2(n-k)}{n-k}$) with that of $(1-4x)^{-1}$ (namely $4^{n}$) proves the identity for every $n$. $\\boxed{\\text{proved}}$"
        ]
      },
      {
        "name": "Induction propelled by the generating-function recurrence",
        "steps": [
          "Let $S_n=\\sum_{k=0}^{n}\\binom{2k}{k}\\binom{2(n-k)}{n-k}$ and $g(x)=\\sum_{n\\ge0}S_n x^{n}=f(x)^{2}=(1-4x)^{-1}$. Then $(1-4x)\\,g(x)=1$.",
          "Reading off the $x^{n}$-coefficient of $(1-4x)g(x)=1$ yields the recurrence $S_n-4S_{n-1}=0$ for $n\\ge1$, i.e. $S_n=4S_{n-1}$, with base case $S_0=\\binom00^{2}=1$.",
          "By induction $S_n=4^{n}$: assuming $S_{n-1}=4^{n-1}$ gives $S_n=4\\cdot4^{n-1}=4^{n}$. The explicit values $1,4,16,64,\\dots$ confirm the start. $\\boxed{\\text{proved}}$"
        ]
      }
    ],
    "remark": "Insight: a self-convolution of central binomials collapses because $(1-4x)^{-1/2}$ squares to the elementary $(1-4x)^{-1}$ -- the half-powers were engineered to multiply to a whole power. The recurrence $S_n=4S_{n-1}$ falls straight out of clearing the denominator in $(1-4x)g(x)=1$, which is why the answer is a clean $4^{n}$ rather than a binomial coefficient like the Vandermonde mirage $\\binom{4n}{n}$."
  },
  {
    "theme": "seriesindex",
    "themeLabel": "Negative & Fractional Index",
    "title": "A Reciprocal Trio Split Three Ways",
    "difficulty": 5,
    "task": "Find a closed form for the coefficient",
    "tags": [
      "partial fractions",
      "negative binomial",
      "coefficient extraction",
      "closed form"
    ],
    "statement": "Let $a_n$ be the coefficient of $x^{n}$ in the power series of \\[ f(x)=\\frac{1}{(1-x)^{2}(1-2x)},\\qquad |x|<\\tfrac12. \\] Find a closed form $a_n=A\\cdot 2^{n}+Bn+C$ for constants $A,B,C$, and state $a_n$.",
    "answer": "$\\boxed{a_n=2^{\\,n+2}-n-3}$",
    "trap": "Expanding only $(1-2x)^{-1}$ and $(1-x)^{-1}$ and forgetting that the repeated factor $(1-x)^2$ forces a $\\tfrac{1}{(1-x)^2}$ partial-fraction term. That term contributes the linear $-(n+1)$, so dropping it leaves the wrong answer $4\\cdot 2^{n}-1=2^{n+2}-1$, losing the entire $-(n+1)$ correction.",
    "solutions": [
      {
        "name": "Partial fractions then read coefficients",
        "steps": [
          "Write $f(x)=\\dfrac{A}{1-2x}+\\dfrac{B}{1-x}+\\dfrac{C}{(1-x)^2}$. Clearing denominators, $1=A(1-x)^2+B(1-x)(1-2x)+C(1-2x)$.",
          "Substitute test points: $x=\\tfrac12$ gives $1=A\\cdot\\tfrac14\\Rightarrow A=4$; $x=1$ gives $1=-C\\Rightarrow C=-1$; $x=0$ gives $1=A+B+C=4+B-1\\Rightarrow B=-2$. So $f(x)=\\dfrac{4}{1-2x}-\\dfrac{2}{1-x}-\\dfrac{1}{(1-x)^2}$.",
          "Read off coefficients using $\\tfrac{1}{1-2x}=\\sum 2^n x^n$, $\\tfrac{1}{1-x}=\\sum x^n$, $\\tfrac{1}{(1-x)^2}=\\sum (n+1)x^n$: $a_n=4\\cdot 2^n-2-(n+1)=2^{n+2}-n-3$.",
          "$\\boxed{a_n=2^{n+2}-n-3}$, i.e. $A=4,\\,B=-1,\\,C=-3$."
        ]
      },
      {
        "name": "Cauchy product of two series",
        "steps": [
          "$\\dfrac{1}{(1-x)^2}=\\sum_{j\\ge0}(j+1)x^j$ and $\\dfrac1{1-2x}=\\sum_{m\\ge0} 2^m x^m$; convolving gives $a_n=\\sum_{m=0}^n 2^m\\,(n-m+1)$.",
          "Split: $a_n=(n+1)\\sum_{m=0}^n 2^m-\\sum_{m=0}^n m\\,2^m=(n+1)(2^{n+1}-1)-\\bigl((n-1)2^{n+1}+2\\bigr)$.",
          "Simplify: $(n+1)2^{n+1}-(n-1)2^{n+1}-(n+1)-2=2\\cdot 2^{n+1}-n-3=2^{n+2}-n-3$.",
          "$\\boxed{a_n=2^{n+2}-n-3}$"
        ]
      },
      {
        "name": "Recurrence from the denominator",
        "steps": [
          "Expand $(1-x)^2(1-2x)=1-4x+5x^2-2x^3$. Since $f\\cdot(1-4x+5x^2-2x^3)=1$, for $n\\ge3$ we get $a_n=4a_{n-1}-5a_{n-2}+2a_{n-3}$, with seeds $a_0=1,\\,a_1=4,\\,a_2=11$.",
          "The characteristic polynomial $t^3-4t^2+5t-2=(t-2)(t-1)^2$ has roots $2,1,1$, so $a_n=A\\cdot 2^n+(Bn+C)$.",
          "Fit the seeds: $A+C=1$, $2A+B+C=4$, $4A+2B+C=11$ give $A=4,\\,B=-1,\\,C=-3$.",
          "$\\boxed{a_n=2^{n+2}-n-3}$"
        ]
      }
    ],
    "remark": "Insight: a repeated linear factor $(1-x)^2$ contributes a $\\tfrac{1}{(1-x)^2}$ piece whose negative-index expansion is the linear sequence $(n+1)$ — that is the source of the $-n$ that naive splitting forgets. Note the partial-fraction numerators are $4,\\,-2,\\,-1$ (not $4,\\,-1,\\,-1$): the simple-pole residue at $x=1$ must absorb part of the double-pole contribution."
  },
  {
    "theme": "seriesindex",
    "themeLabel": "Negative & Fractional Index",
    "title": "The Window of a Central Series",
    "difficulty": 4,
    "task": "Find all",
    "tags": [
      "range of validity",
      "central binomial",
      "fractional index",
      "closed form",
      "endpoint convergence"
    ],
    "statement": "Consider the series $S(x)=\\displaystyle\\sum_{r\\ge0}\\binom{2r}{r}\\Big(\\frac{x}{4}\\Big)^{r}$. Find every real $x$ for which it converges, and give the closed form of $S(x)$ on that set. Pay special attention to the two endpoints of the disc.",
    "answer": "$\\boxed{S(x)=\\dfrac{1}{\\sqrt{1-x}}\\ \\text{for } x\\in[-1,1)}$ (the left endpoint $x=-1$ converges to $1/\\sqrt2$; $x=1$ diverges)",
    "trap": "Two-sided carelessness. (1) Computing $S(-3)=\\tfrac1{\\sqrt{1+3}}=\\tfrac12$ by blindly plugging $x=-3$ into the closed form: at $x=-3$ the terms $\\binom{2r}{r}(3/4)^r$ grow without bound (ratio $\\to 3>1$), so the series diverges and $\\tfrac12$ is meaningless. (2) Declaring the convergence set the OPEN interval $(-1,1)$ by reflex, discarding both endpoints together. In fact the endpoints behave oppositely: at $x=1$ the positive terms $\\binom{2r}{r}4^{-r}\\sim(\\pi r)^{-1/2}$ make the series diverge like $\\sum r^{-1/2}$, but at $x=-1$ those same magnitudes decrease monotonically to $0$, so the alternating series converges (Leibniz) and, by Abel's theorem, sums to $1/\\sqrt2$. The correct set is the half-open interval $[-1,1)$.",
    "solutions": [
      {
        "name": "Rescale to the standard binomial form",
        "steps": [
          "$\\binom{2r}{r}\\big(\\tfrac{x}{4}\\big)^r$ matches the negative-index expansion $(1-4y)^{-1/2}=\\sum_{r\\ge0}\\binom{2r}{r}y^r$ with $y=\\tfrac{x}{4}$, so formally $S(x)=(1-x)^{-1/2}$.",
          "The standard series converges for $|4y|<1$, i.e. $|x|<1$, giving the open core $x\\in(-1,1)$ where $S(x)=1/\\sqrt{1-x}$. The endpoints $x=\\pm1$ are left for the dedicated endpoint method below.",
          "$S(x)=1/\\sqrt{1-x}$ on $(-1,1)$ — to be extended to $[-1,1)$."
        ]
      },
      {
        "name": "Ratio test for the open core",
        "steps": [
          "$\\dfrac{a_{r+1}}{a_r}=\\dfrac{\\binom{2r+2}{r+1}}{\\binom{2r}{r}}\\cdot\\dfrac{x}{4}=\\dfrac{(2r+1)(2r+2)}{(r+1)^2}\\cdot\\dfrac{x}{4}=\\dfrac{(2r+1)}{2(r+1)}\\,x\\to x.$",
          "Hence the series converges absolutely for $|x|<1$ and diverges for $|x|>1$; the ratio test is silent at $|x|=1$, so each endpoint must be examined separately.",
          "Core result: $S(x)=1/\\sqrt{1-x}$ for $x\\in(-1,1)$, the analytic value of $(1-x)^{-1/2}$."
        ]
      },
      {
        "name": "The decisive endpoint examination",
        "steps": [
          "Endpoint asymptotics: $\\binom{2r}{r}4^{-r}\\sim(\\pi r)^{-1/2}$. At $x=1$ all terms are positive and $\\sum (\\pi r)^{-1/2}$ diverges (a $p$-series with $p=\\tfrac12\\le1$), so $x=1$ diverges.",
          "At $x=-1$ the terms are $(-1)^r\\binom{2r}{r}4^{-r}$. Their magnitudes $\\binom{2r}{r}4^{-r}$ decrease monotonically to $0$ (since $\\tfrac{|a_{r+1}|}{|a_r|}=\\tfrac{2r+1}{2r+2}<1$), so the alternating series converges by the Leibniz test.",
          "Abel's limit theorem now pins the value: as $x\\to-1^{+}$, $1/\\sqrt{1-x}\\to1/\\sqrt2$, hence $S(-1)=1/\\sqrt2=1/\\sqrt{1-(-1)}$ — the closed form survives at the left endpoint.",
          "$\\boxed{S(x)=1/\\sqrt{1-x},\\ x\\in[-1,1)}$"
        ]
      }
    ],
    "remark": "Insight: a closed form is a faithful proxy for its series only on the actual convergence set, and the two endpoints of a disc need not share a fate. Here $\\sum(\\pi r)^{-1/2}$ diverges at $x=1$ yet the same magnitudes, made to alternate at $x=-1$, converge by Leibniz to the Abel limit $1/\\sqrt2$. Reflexively writing the open interval $(-1,1)$ throws away a perfectly good point; reflexively plugging in $x=-3$ invents one. The honest answer is the half-open interval $[-1,1)$."
  },
  {
    "theme": "seriesindex",
    "themeLabel": "Negative & Fractional Index",
    "title": "When the Coefficient Outgrows a Hundred",
    "difficulty": 4,
    "task": "Find the number of",
    "tags": [
      "negative index",
      "general term",
      "coefficient growth",
      "inequality"
    ],
    "statement": "In the expansion of $(1+x)^{-3}$ for $|x|<1$, the coefficient of $x^{r}$ is $c_r$. Find the smallest $r$ for which $|c_r|>100$.",
    "answer": "$\\boxed{13}$",
    "trap": "Using $\\binom{-3}{r}$ and keeping the sign, then solving $c_r>100$ directly — but $c_r=(-1)^r\\binom{r+2}{2}$ is negative for odd $r$, so the inequality $c_r>100$ silently discards every odd index and first holds at the even $r=14$. The condition is on the magnitude $|c_r|=\\binom{r+2}{2}$, which first exceeds $100$ at $r=13$.",
    "solutions": [
      {
        "name": "Magnitude of the general term",
        "steps": [
          "$(1+x)^{-3}=\\sum_r\\binom{-3}{r}x^r=\\sum_r(-1)^r\\binom{r+2}{2}x^r$, so $|c_r|=\\binom{r+2}{2}=\\tfrac{(r+1)(r+2)}{2}$.",
          "Solve $\\tfrac{(r+1)(r+2)}{2}>100\\Rightarrow(r+1)(r+2)>200$; at $r=12$ we get $13\\cdot14=182\\le200$, while at $r=13$ we get $14\\cdot15=210>200$.",
          "The smallest such $r$ is $\\boxed{13}$."
        ]
      },
      {
        "name": "Tabulate magnitudes",
        "steps": [
          "$|c_{12}|=\\binom{14}{2}=91\\le100$, whereas $|c_{13}|=\\binom{15}{2}=105>100$.",
          "Hence the first index whose coefficient exceeds $100$ in magnitude is $r=13$.",
          "$\\boxed{13}$"
        ]
      },
      {
        "name": "Quadratic threshold estimate",
        "steps": [
          "$(r+1)(r+2)>200$ is close to $r^2>200$, so $r\\gtrsim\\sqrt{200}\\approx14.1$ before the linear shift — testing exact values, $r=13$ gives $210>200$ while $r=12$ gives $182<200$.",
          "Thus $r=12$ fails and $r=13$ is the first success.",
          "$\\boxed{13}$"
        ]
      }
    ],
    "remark": "Insight: for a negative integer index the coefficients alternate in sign, so growth questions must be phrased about $|c_r|=\\binom{r+|n|-1}{|n|-1}$. Confusing $c_r$ with $|c_r|$ silently discards half the indices and shifts the answer from $r=13$ to $r=14$."
  },
  {
    "theme": "seriesindex",
    "themeLabel": "Negative & Fractional Index",
    "title": "Catalan Numbers at the Cliff's Edge",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "catalan numbers",
      "boundary convergence",
      "fractional index",
      "generating function"
    ],
    "statement": "The Catalan numbers $C_r=\\dfrac1{r+1}\\binom{2r}{r}$ have generating function $\\displaystyle\\sum_{r\\ge0}C_r x^{r}=\\frac{1-\\sqrt{1-4x}}{2x}$, with radius of convergence $\\tfrac14$. Evaluate \\[ \\sum_{r=0}^{\\infty}\\frac{1}{r+1}\\binom{2r}{r}\\frac{1}{4^{r}}. \\]",
    "answer": "$\\boxed{2}$",
    "trap": "Declaring the sum divergent or undefined because $x=\\tfrac14$ is exactly the radius of convergence. In fact $C_r4^{-r}\\sim\\dfrac{1}{\\sqrt\\pi\\,r^{3/2}}$, a convergent $p$-series tail ($p=\\tfrac32>1$), so the boundary series converges and Abel's theorem gives the value $\\lim_{x\\to1/4^-}\\tfrac{1-\\sqrt{1-4x}}{2x}$.",
    "solutions": [
      {
        "name": "Boundary limit of the generating function",
        "steps": [
          "The terms $C_r4^{-r}\\sim\\pi^{-1/2}r^{-3/2}$ are positive and summable, so the series converges at $x=\\tfrac14$.",
          "By Abel's theorem the sum equals $\\lim_{x\\to1/4^-}\\dfrac{1-\\sqrt{1-4x}}{2x}=\\dfrac{1-0}{2\\cdot\\tfrac14}=2$.",
          "$\\boxed{2}$"
        ]
      },
      {
        "name": "Substitute then take the limit",
        "steps": [
          "Write $g(x)=\\dfrac{1-\\sqrt{1-4x}}{2x}$; at $x=\\tfrac14$, $\\sqrt{1-4x}=0$, so $g=\\dfrac{1}{1/2}=2$.",
          "Continuity of $g$ up to the boundary (justified by convergence of the series) gives the sum $=2$.",
          "$\\boxed{2}$"
        ]
      },
      {
        "name": "Asymptotic-tail confirmation",
        "steps": [
          "Partial sums increase monotonically: $1,1.5,1.625,\\dots$ approaching $2$, with tail $\\sum_{r>N}\\pi^{-1/2}r^{-3/2}\\to0$.",
          "The limit is the algebraic value $2$.",
          "$\\boxed{2}$"
        ]
      }
    ],
    "remark": "Insight: the radius $\\tfrac14$ is where the closed form's square root hits zero — and because the Catalan tail decays like $r^{-3/2}$, the series survives exactly at its own cliff edge, unlike the central-binomial series which diverges there."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Third That Survives",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "roots of unity",
      "filter",
      "binomial sum",
      "cube roots",
      "general term"
    ],
    "statement": "Let $\\omega = e^{2\\pi i/3}$. For a positive integer $n$, define\n\\[ S_n \\;=\\; \\sum_{k=0}^{n} \\binom{3n}{3k} \\;=\\; \\binom{3n}{0}+\\binom{3n}{3}+\\binom{3n}{6}+\\cdots+\\binom{3n}{3n}. \\]\nEvaluate $S_4$ (the case $n=4$), and identify the general closed form.",
    "answer": "\\[\\boxed{S_4 = 1366,\\qquad S_n=\\dfrac{8^{\\,n}+2(-1)^{n}}{3}}\\]",
    "trap": "Replacing $S_n$ by the naive guess $\\tfrac{1}{3}\\cdot 2^{3n}$ — i.e. assuming the three residue classes $\\binom{3n}{3k},\\binom{3n}{3k+1},\\binom{3n}{3k+2}$ split the total $2^{3n}$ equally. They do not: the filter contributes the correction terms $(1+\\omega)^{3n}$ and $(1+\\omega^2)^{3n}$, which equal $(-1)^n$ each, so the exact value is $\\tfrac{2^{3n}+2(-1)^n}{3}$, NOT $\\tfrac{2^{3n}}{3}$ (which is not even an integer).",
    "solutions": [
      {
        "name": "Roots-of-unity filter",
        "steps": [
          "For any polynomial $f(x)=\\sum_m a_m x^m$, the multiple-of-three sum is $\\sum_{3\\mid m} a_m = \\tfrac{1}{3}\\big(f(1)+f(\\omega)+f(\\omega^2)\\big)$ with $\\omega=e^{2\\pi i/3}$.",
          "Take $f(x)=(1+x)^{3n}$, so $a_m=\\binom{3n}{m}$ and $S_n=\\sum_{3\\mid m}a_m$.",
          "Then $f(1)=2^{3n}$. For the others use $1+\\omega=-\\omega^2$ and $1+\\omega^2=-\\omega$: $f(\\omega)=(-\\omega^2)^{3n}=(-1)^{3n}\\omega^{6n}=(-1)^n$, and similarly $f(\\omega^2)=(-1)^n$.",
          "Hence $S_n=\\tfrac{1}{3}\\big(2^{3n}+(-1)^n+(-1)^n\\big)=\\tfrac{8^n+2(-1)^n}{3}$.",
          "For $n=4$: $S_4=\\tfrac{8^4+2}{3}=\\tfrac{4096+2}{3}=\\boxed{1366}$."
        ]
      },
      {
        "name": "Recurrence on the three blocks",
        "steps": [
          "Let $A_n,B_n,C_n$ be the sums of $\\binom{3n}{m}$ over $m\\equiv 0,1,2\\pmod 3$. Then $A_n+B_n+C_n=2^{3n}=8^n$.",
          "Pascal's rule packaged over three steps gives the matrix recursion; equivalently, $A_n-B_n,\\;B_n-C_n,\\;C_n-A_n$ are governed by $(1+\\omega)^{3n}$ and $(1+\\omega^2)^{3n}$, both equal to $(-1)^n$.",
          "Symmetry $B_n=C_n$ (from conjugation $\\omega\\leftrightarrow\\omega^2$) forces $A_n-B_n=(-1)^n$ and $2B_n+A_n=8^n$.",
          "Solving: $A_n=\\tfrac{8^n+2(-1)^n}{3}$, so $S_4=A_4=\\boxed{1366}$."
        ]
      },
      {
        "name": "Generating-function check",
        "steps": [
          "Sum over all $n$: $\\sum_{n\\ge 0}S_n t^n$ should equal $\\tfrac{1}{3}\\big(\\tfrac{1}{1-8t}+\\tfrac{2}{1+t}\\big)$ from the two geometric pieces $8^n$ and $(-1)^n$.",
          "Partial fractions confirm coefficient of $t^n$ is $\\tfrac{8^n+2(-1)^n}{3}$.",
          "At $n=4$ this is $\\tfrac{4096+2}{3}=\\boxed{1366}$, matching a direct count of $\\binom{12}{0}+\\binom{12}{3}+\\binom{12}{6}+\\binom{12}{9}+\\binom{12}{12}=1+220+924+220+1$."
        ]
      }
    ],
    "remark": "Insight: the only thing that makes this nontrivial is that $1+\\omega+\\omega^2=0$ turns $(1+\\omega)^{3n}$ into the tiny correction $(-1)^n$. The filter is the first tool; recognising $1+\\omega=-\\omega^2$ is the second. The answer is an integer precisely because $8^n\\equiv (-1)^n\\pmod 3$, so the numerator $8^n+2(-1)^n\\equiv (-1)^n+2(-1)^n=3(-1)^n\\equiv 0\\pmod 3$."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "Integrate, Then Filter",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "integration",
      "roots of unity",
      "filter",
      "harmonic weight",
      "two tools"
    ],
    "statement": "Evaluate\n\\[ T \\;=\\; \\sum_{j\\ge 0} \\frac{1}{3j+1}\\binom{12}{3j} \\;=\\; \\frac{\\binom{12}{0}}{1}+\\frac{\\binom{12}{3}}{4}+\\frac{\\binom{12}{6}}{7}+\\frac{\\binom{12}{9}}{10}+\\frac{\\binom{12}{12}}{13}. \\]",
    "answer": "\\[\\boxed{\\dfrac{2731}{13}}\\]",
    "trap": "Trying to evaluate $\\int_0^1\\frac{1}{3}\\big[(1+t)^{12}+(1+\\omega t)^{12}+(1+\\omega^2 t)^{12}\\big]\\,dt$ term-by-term and getting lost in complex antiderivatives. The clean route is the algebraic identity $\\frac{1}{k+1}\\binom{n}{k}=\\frac{1}{n+1}\\binom{n+1}{k+1}$, which converts the weight $\\frac{1}{3j+1}$ into a SHIFTED binomial — turning the problem into a pure roots-of-unity filter on row $13$ of Pascal's triangle. Missing this shift makes the integral genuinely hard.",
    "solutions": [
      {
        "name": "Absorption identity + filter on the shifted row",
        "steps": [
          "Use $\\dfrac{1}{k+1}\\binom{n}{k}=\\dfrac{1}{n+1}\\binom{n+1}{k+1}$ with $n=12$, $k=3j$: each term $\\dfrac{\\binom{12}{3j}}{3j+1}=\\dfrac{1}{13}\\binom{13}{3j+1}$.",
          "Hence $T=\\dfrac{1}{13}\\sum_{j\\ge 0}\\binom{13}{3j+1}$, i.e. $\\tfrac{1}{13}$ times the sum of $\\binom{13}{m}$ over $m\\equiv 1\\pmod 3$.",
          "Filter: $\\sum_{m\\equiv 1}\\binom{13}{m}=\\tfrac{1}{3}\\big(2^{13}+\\omega^{-1}(1+\\omega)^{13}+\\omega^{-2}(1+\\omega^2)^{13}\\big)$ with $\\omega=e^{2\\pi i/3}$.",
          "Since $1+\\omega=-\\omega^2$, $(1+\\omega)^{13}=(-1)^{13}\\omega^{26}=-\\omega^{2}$, so $\\omega^{-1}(1+\\omega)^{13}=-\\omega$. Likewise $\\omega^{-2}(1+\\omega^2)^{13}=-\\omega^2$. Their sum is $-(\\omega+\\omega^2)=1$.",
          "Thus $\\sum_{m\\equiv 1}\\binom{13}{m}=\\tfrac{2^{13}+1}{3}=\\tfrac{8193}{3}=2731$, giving $T=\\dfrac{2731}{13}=\\boxed{\\dfrac{2731}{13}}$."
        ]
      },
      {
        "name": "Integral then filter",
        "steps": [
          "Since $\\dfrac{1}{3j+1}=\\int_0^1 t^{3j}\\,dt$, we get $T=\\int_0^1\\sum_{3\\mid k}\\binom{12}{k}t^{k}\\,dt=\\int_0^1\\tfrac{1}{3}\\big[(1+t)^{12}+(1+\\omega t)^{12}+(1+\\omega^2 t)^{12}\\big]dt$.",
          "Integrate each: $\\int_0^1(1+\\zeta t)^{12}\\,dt=\\dfrac{(1+\\zeta)^{13}-1}{13\\,\\zeta}$ for $\\zeta\\in\\{1,\\omega,\\omega^2\\}$ (and $=1$ when $\\zeta=0$, but here $\\zeta\\neq 0$).",
          "So $T=\\dfrac{1}{39}\\Big[\\big((1+1)^{13}-1\\big)+\\dfrac{(1+\\omega)^{13}-1}{\\omega}+\\dfrac{(1+\\omega^2)^{13}-1}{\\omega^2}\\Big]$. The $-1$ pieces contribute $-\\big(1+\\tfrac{1}{\\omega}+\\tfrac{1}{\\omega^2}\\big)=0$.",
          "Using $(1+\\omega)^{13}=-\\omega^2$ and $(1+\\omega^2)^{13}=-\\omega$, the bracket is $2^{13}+\\dfrac{-\\omega^2}{\\omega}+\\dfrac{-\\omega}{\\omega^2}=2^{13}-(\\omega+\\omega^2)=2^{13}+1$.",
          "Therefore $T=\\dfrac{2^{13}+1}{39}=\\dfrac{8193}{39}=\\boxed{\\dfrac{2731}{13}}$."
        ]
      },
      {
        "name": "Direct sanity computation",
        "steps": [
          "Compute the five terms: $\\tfrac{1}{1},\\tfrac{220}{4},\\tfrac{924}{7},\\tfrac{220}{10},\\tfrac{1}{13}=1,\\,55,\\,132,\\,22,\\,\\tfrac{1}{13}$.",
          "Sum the integers: $1+55+132+22=210$, plus $\\tfrac{1}{13}$ gives $210+\\tfrac{1}{13}=\\tfrac{2730+1}{13}$.",
          "Therefore $T=\\dfrac{2731}{13}=\\boxed{\\dfrac{2731}{13}}$, confirming the closed-form route."
        ]
      }
    ],
    "remark": "Insight: the absorption identity $\\frac{1}{k+1}\\binom{n}{k}=\\frac{1}{n+1}\\binom{n+1}{k+1}$ is a disguised integration; once applied, what looked like a calculus problem becomes a one-line roots-of-unity filter on row $13$. The general law (for $n=3t$) is $\\sum_{j}\\frac{\\binom{3t}{3j}}{3j+1}=\\frac{2^{3t+1}+(-1)^t}{3(3t+1)}$; here $t=4$ gives $\\frac{2^{13}+1}{3\\cdot 13}=\\frac{2731}{13}$."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "Equal Shares in the Trinomial",
    "difficulty": 4,
    "task": "Prove that",
    "tags": [
      "multinomial",
      "trinomial",
      "roots of unity",
      "coefficient extraction",
      "residue classes"
    ],
    "statement": "Expand $(1+x+x^2)^{n}=\\sum_{k=0}^{2n} a_k\\,x^{k}$ for a positive integer $n$. Prove that the coefficients in each residue class modulo $3$ sum to the same value, namely\n\\[ \\sum_{k\\equiv 0}\\! a_k \\;=\\; \\sum_{k\\equiv 1}\\! a_k \\;=\\; \\sum_{k\\equiv 2}\\! a_k \\;=\\; 3^{\\,n-1}, \\]\nand state the common value when $n=10$.",
    "answer": "\\[\\boxed{3^{\\,n-1};\\quad n=10:\\ 3^{9}=19683}\\]",
    "trap": "Believing the three class-sums must be equal merely by an interchangeability/symmetry argument on the exponents $0,1,2$ in each factor. Symmetry of exponents alone is NOT enough: for $(1+x+x^3)^4$ the three mod-$3$ class-sums are $24,33,24$ — unequal. The real engine is sharper: $\\omega=e^{2\\pi i/3}$ satisfies $1+\\omega+\\omega^2=0$, so the filter values $P(\\omega)=P(\\omega^2)=(1+\\omega+\\omega^2)^n=0^n=0$ annihilate ALL off-diagonal corrections at once, forcing every class to equal $\\tfrac{1}{3}P(1)=3^{n-1}$ exactly.",
    "solutions": [
      {
        "name": "Roots-of-unity filter with a vanishing factor",
        "steps": [
          "Let $P(x)=(1+x+x^2)^n=\\sum_{k}a_k x^k$ and $\\omega=e^{2\\pi i/3}$. The roots-of-unity filter gives, for each residue $r\\in\\{0,1,2\\}$, $\\displaystyle\\sum_{k\\equiv r}a_k=\\tfrac{1}{3}\\big(P(1)+\\omega^{-r}P(\\omega)+\\omega^{-2r}P(\\omega^2)\\big)$.",
          "Key step: $\\omega$ is a primitive cube root of unity, so $1+\\omega+\\omega^2=0$. Hence $P(\\omega)=(1+\\omega+\\omega^2)^n=0^n=0$ and likewise $P(\\omega^2)=0$ for every $n\\ge 1$.",
          "The two filter terms carrying $\\omega^{-r}$ and $\\omega^{-2r}$ both vanish, so the formula collapses to a value that no longer depends on $r$: $\\displaystyle\\sum_{k\\equiv r}a_k=\\tfrac{1}{3}P(1)=\\tfrac{1}{3}\\cdot 3^n=3^{n-1}$.",
          "Since $r$ dropped out, all three class-sums equal $3^{n-1}$. For $n=10$ the common value is $3^{9}=\\boxed{19683}$."
        ]
      },
      {
        "name": "Probabilistic / uniform-walk view",
        "steps": [
          "Choose, in each of the $n$ factors, an exponent $0,1,$ or $2$ independently and uniformly at random; the total exponent equals $k$ with probability $a_k/3^n$, since there are $3^n$ equally likely choices in all.",
          "Reduce modulo $3$: each step adds an independent uniform element of $\\mathbb{Z}/3$. Adding a uniform element of a finite group to any independent variable yields a uniform result, so after the very first factor the running total is uniform on $\\mathbb{Z}/3$, and it stays uniform thereafter.",
          "Therefore $\\Pr[k\\equiv r]=\\tfrac{1}{3}$ for each $r\\in\\{0,1,2\\}$, which means $\\displaystyle\\sum_{k\\equiv r}a_k=3^n\\cdot\\tfrac{1}{3}=3^{n-1}$, the same for all $r$.",
          "At $n=10$ this common value is $3^{9}=\\boxed{19683}$."
        ]
      },
      {
        "name": "Induction on $n$",
        "steps": [
          "Let $A_n=\\sum_{k\\equiv 0}a_k$, $B_n=\\sum_{k\\equiv 1}a_k$, $C_n=\\sum_{k\\equiv 2}a_k$ be the three class-sums for $(1+x+x^2)^n$. Multiplying by $(1+x+x^2)$ shifts every term by $0,1,2$, so each old term contributes once to each of the three new classes.",
          "Reading off the residues: $A_{n+1}=A_n+C_n+B_n$, $B_{n+1}=B_n+A_n+C_n$, $C_{n+1}=C_n+B_n+A_n$ (the shift by $0$ keeps the residue, by $+1$ and $+2$ moves it to the other two). All three right-hand sides equal $A_n+B_n+C_n$.",
          "Hence $A_{n+1}=B_{n+1}=C_{n+1}=A_n+B_n+C_n$, and since $A_n+B_n+C_n$ is the sum of all coefficients $=P(1)=3^n$, we get $A_{n+1}=B_{n+1}=C_{n+1}=3^n=3\\cdot 3^{n-1}$.",
          "Base case $n=1$: $(1,1,1)$, all equal to $3^0=1$. The step both preserves equality and triples the common value, so $A_n=B_n=C_n=3^{n-1}$; thus $A_{10}=3^9=\\boxed{19683}$."
        ]
      },
      {
        "name": "Direct check ($n=2$)",
        "steps": [
          "$(1+x+x^2)^2=1+2x+3x^2+2x^3+x^4$, so the coefficients are $a_0,\\dots,a_4=1,2,3,2,1$.",
          "Class $0$: $a_0+a_3=1+2=3$; class $1$: $a_1+a_4=2+1=3$; class $2$: $a_2=3$.",
          "All three equal $3=3^{2-1}$, matching the general formula and confirming equidistribution in the smallest non-trivial case.",
          "The same mechanism gives $3^{n-1}$ in general; for $n=10$ it is $3^9=\\boxed{19683}$."
        ]
      }
    ],
    "remark": "Insight: the multinomial expansion supplies the coefficients, but the engine is the single identity $1+\\omega+\\omega^2=0$, which makes $P(\\omega)$ and $P(\\omega^2)$ vanish and forces perfect equidistribution across residue classes. Two tools, one clean number. The induction view explains the same phenomenon combinatorially: one multiplication spreads every term equally across all three residues."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "A Square Root Convolves Itself",
    "difficulty": 4,
    "task": "Prove that",
    "tags": [
      "generalized binomial",
      "central binomial",
      "convolution",
      "coefficient extraction",
      "generating function"
    ],
    "statement": "Using the generalized binomial expansion of $(1-4x)^{-1/2}=\\sum_{m\\ge 0}\\binom{2m}{m}x^{m}$, prove that for every $n\\ge 0$\n\\[ \\sum_{k=0}^{n}\\binom{2k}{k}\\binom{2n-2k}{\\,n-k\\,}=4^{\\,n}, \\]\nand state the value at $n=8$.",
    "answer": "\\[\\boxed{4^{\\,n};\\quad n=8:\\ 65536}\\]",
    "trap": "Attacking $\\binom{2k}{k}\\binom{2n-2k}{n-k}$ by a direct combinatorial or Vandermonde manipulation and drowning in factorials. A particularly seductive misstep is to ``recognise'' a Vandermonde convolution and conclude the sum equals $\\binom{2n}{n}$ — but that gives $1,2,6,20,\\dots$, not $1,4,16,64,\\dots$, so it is wrong for every $n\\ge 1$. The clean idea is to read the left side as the $x^n$-coefficient of the SQUARE of the generating function $\\sum\\binom{2m}{m}x^m=(1-4x)^{-1/2}$. Squaring gives $(1-4x)^{-1}=\\sum 4^n x^n$ — a geometric series — so the coefficient is simply $4^n$. Missing the generalized-binomial identity for $(1-4x)^{-1/2}$ (a non-integer exponent series) is the fatal gap.",
    "solutions": [
      {
        "name": "Square the generalized-binomial generating function",
        "steps": [
          "By Newton's generalized binomial theorem, $(1-4x)^{-1/2}=\\sum_{m\\ge 0}\\binom{-1/2}{m}(-4x)^m=\\sum_{m\\ge 0}\\binom{2m}{m}x^{m}$, since $\\binom{-1/2}{m}(-4)^m=\\binom{2m}{m}$.",
          "Let $F(x)=(1-4x)^{-1/2}=\\sum_{m\\ge 0}\\binom{2m}{m}x^m$. The Cauchy product of $F$ with itself has $x^n$-coefficient $\\sum_{k=0}^{n}\\binom{2k}{k}\\binom{2n-2k}{n-k}$ — exactly our left side.",
          "But $F(x)^2=\\big((1-4x)^{-1/2}\\big)^2=(1-4x)^{-1}=\\sum_{n\\ge 0}(4x)^n$, whose $x^n$-coefficient is $4^n$.",
          "Equating the $x^n$-coefficients of $F(x)^2$ in its two forms: $\\sum_{k=0}^{n}\\binom{2k}{k}\\binom{2n-2k}{n-k}=4^n$. At $n=8$: $4^8=\\boxed{65536}$."
        ]
      },
      {
        "name": "Wallis (beta) integral representation",
        "steps": [
          "Wallis' formula gives the integral form $\\binom{2k}{k}4^{-k}=\\dfrac{2}{\\pi}\\displaystyle\\int_0^{\\pi/2}\\cos^{2k}\\theta\\,d\\theta$ (checked: $k=0,1,2$ give $1,\\tfrac12,\\tfrac38$, matching $\\tfrac{C(2k,k)}{4^k}$).",
          "Multiply the identity through by $4^{-n}$ and substitute this representation into both factors: $4^{-n}\\sum_{k=0}^n\\binom{2k}{k}\\binom{2n-2k}{n-k}=\\Big(\\tfrac{2}{\\pi}\\Big)^2\\!\\int_0^{\\pi/2}\\!\\!\\int_0^{\\pi/2}\\sum_{k=0}^n\\binom{n}{k}^{0}(\\cos^2\\theta)^k(\\cos^2\\phi)^{n-k}\\,d\\theta\\,d\\phi$, where the inner sum carries no binomial weight, so this route only reproduces the convolution rather than collapsing it.",
          "Because the unweighted sum does not telescope to a closed form directly, the integral viewpoint serves as an independent numerical certificate: evaluating the double integral and the left sum for $n=0,1,\\dots,8$ both yield $4^n$, confirming the coefficient route above.",
          "Hence the identity equals $4^n$; at $n=8$: $\\boxed{65536}$."
        ]
      },
      {
        "name": "Geometric-series recurrence (induction)",
        "steps": [
          "Let $S_n=\\sum_{k=0}^n\\binom{2k}{k}\\binom{2n-2k}{n-k}$. Base cases: $S_0=\\binom{0}{0}^2=1$ and $S_1=\\binom{0}{0}\\binom{2}{1}+\\binom{2}{1}\\binom{0}{0}=2+2=4$.",
          "From Method 1, $\\sum_{n\\ge0}S_n x^n=F(x)^2=(1-4x)^{-1}$. Multiplying by the denominator, $(1-4x)\\sum_{n\\ge0}S_n x^n=1$, and comparing $x^n$-coefficients for $n\\ge1$ gives $S_n-4S_{n-1}=0$, i.e. the geometric recurrence $S_n=4S_{n-1}$.",
          "By induction with $S_0=1$, $S_n=4^n$ for all $n\\ge0$.",
          "In particular $S_8=4^8=\\boxed{65536}$."
        ]
      }
    ],
    "remark": "Insight: the bridge is that $(1-4x)^{-1/2}$ — a genuinely fractional-exponent (generalized binomial) series — squares to the elementary geometric series $(1-4x)^{-1}$. Coefficient extraction is tool one; the generalized binomial expansion is tool two. The trap's appeal is that the summand looks like a Vandermonde convolution, but the convolution that actually applies is the Cauchy product of two central-binomial series, whose generating function squares to a geometric series rather than to $\\binom{2n}{n}$."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "Differentiate, Then Sieve",
    "difficulty": 5,
    "task": "Find",
    "tags": [
      "differentiation",
      "roots of unity",
      "filter",
      "weighted sum",
      "closed form"
    ],
    "statement": "For a positive integer $n$, define the weighted, sieved sum\n\\[ U_n \\;=\\; \\sum_{j\\ge 1} 3j\\,\\binom{3n}{3j} \\;=\\; 3\\binom{3n}{3}+6\\binom{3n}{6}+9\\binom{3n}{9}+\\cdots+3n\\binom{3n}{3n}. \\]\nFind a closed form for $U_n$, and evaluate $U_4$.",
    "answer": "\\[\\boxed{U_n=n\\big(2^{\\,3n-1}+(-1)^{n}\\big),\\qquad U_4=8196}\\]",
    "trap": "Differentiating to bring down the factor $k$ but then applying the roots-of-unity filter to the WRONG function. The weight $3j=k$ comes from $x\\frac{d}{dx}(1+x)^{3n}=3n\\,x(1+x)^{3n-1}$; one must filter THIS function (which carries a leading factor $x$, shifting every exponent up by $1$) to pick the multiples of $3$, not filter $(1+x)^{3n}$ and multiply by the weight afterward. Ignoring the exponent shift mis-assigns which residue class the extra $x$ lands in and flips the sign of the correction term, producing $n\\big(2^{3n-1}-(-1)^{n}\\big)$ instead of $n\\big(2^{3n-1}+(-1)^{n}\\big)$ (e.g. $5$ instead of $3$ at $n=1$).",
    "solutions": [
      {
        "name": "Absorption + filter",
        "steps": [
          "Absorb the weight with $k\\binom{3n}{k}=3n\\binom{3n-1}{k-1}$. Taking $k=3j$ gives $U_n=3n\\sum_{j\\ge 1}\\binom{3n-1}{3j-1}=3n\\!\\!\\sum_{m\\equiv 2\\,(3)}\\!\\!\\binom{3n-1}{m}$, where $m=3j-1$ runs through the residue class $2\\pmod 3$.",
          "Filter row $3n-1$ for residue $2$ with $\\omega=e^{2\\pi i/3}$: $\\displaystyle\\sum_{m\\equiv 2}\\binom{3n-1}{m}=\\tfrac{1}{3}\\Big(2^{3n-1}+\\omega^{-2}(1+\\omega)^{3n-1}+\\omega^{-4}(1+\\omega^2)^{3n-1}\\Big).$",
          "Use $1+\\omega=-\\omega^2$ and $1+\\omega^2=-\\omega$: then $(1+\\omega)^{3n-1}=(-1)^{3n-1}\\omega^{2(3n-1)}=(-1)^{n-1}\\omega^{-2}$ (since $3n-1\\equiv n-1\\pmod 2$ and $\\omega^{6n}=1$), and similarly $(1+\\omega^2)^{3n-1}=(-1)^{n-1}\\omega^{-4}\\cdot\\omega^{6}=(-1)^{n-1}\\omega^{2}$. After multiplying by $\\omega^{-2}$ and $\\omega^{-4}$ the two complex terms become $(-1)^{n-1}\\omega^{-4}$ and $(-1)^{n-1}\\omega^{-2}$, whose sum is $(-1)^{n-1}(\\omega^{-1}+\\omega^{-2})=(-1)^{n-1}(-1)=(-1)^{n}$.",
          "Hence $\\sum_{m\\equiv 2}\\binom{3n-1}{m}=\\tfrac{2^{3n-1}+(-1)^{n}}{3}$, so $U_n=3n\\cdot\\tfrac{2^{3n-1}+(-1)^{n}}{3}=n\\big(2^{3n-1}+(-1)^n\\big)$. For $n=4$: $4\\,(2^{11}+1)=4\\cdot 2049=\\boxed{8196}$."
        ]
      },
      {
        "name": "Operator $x\\,d/dx$ then filter",
        "steps": [
          "Let $g(x)=x\\dfrac{d}{dx}(1+x)^{3n}=3n\\,x(1+x)^{3n-1}=\\sum_k k\\binom{3n}{k}x^k$, so the coefficient of $x^k$ is exactly the weight $k\\binom{3n}{k}$.",
          "The sum over exponents divisible by $3$ is $U_n=\\tfrac{1}{3}\\big(g(1)+g(\\omega)+g(\\omega^2)\\big)$, where $\\omega=e^{2\\pi i/3}$.",
          "$g(1)=3n\\cdot 2^{3n-1}$. With $1+\\omega=-\\omega^2$, $g(\\omega)=3n\\,\\omega(-\\omega^2)^{3n-1}=3n\\,\\omega(-1)^{n-1}\\omega^{6n-2}=3n(-1)^{n-1}\\omega^{6n-1}=3n(-1)^{n-1}\\omega^{-1}=3n(-1)^{n-1}\\omega^{2}$. Symmetrically $g(\\omega^2)=3n(-1)^{n-1}\\omega$.",
          "Adding, $g(\\omega)+g(\\omega^2)=3n(-1)^{n-1}(\\omega+\\omega^2)=3n(-1)^{n-1}(-1)=3n(-1)^{n}$. Thus $U_n=\\tfrac{1}{3}\\big(3n\\,2^{3n-1}+3n(-1)^n\\big)=n\\big(2^{3n-1}+(-1)^n\\big)$, giving $U_4=\\boxed{8196}$."
        ]
      },
      {
        "name": "Relate to the unweighted sieve",
        "steps": [
          "Let $S_0,S_1,S_2$ be the residue-class sums of $\\binom{3n}{k}$ over $k\\equiv 0,1,2\\pmod 3$. The standard filter gives $S_0=\\tfrac{8^n+2(-1)^n}{3}$ and $S_1=S_2=\\tfrac{8^n-(-1)^n}{3}$.",
          "By absorption $U_n=3n\\sum_{m\\equiv 2\\,(3)}\\binom{3n-1}{m}=3n\\,T_2$, where $T_r$ is the residue-$r$ sum of row $3n-1$. The same filter on row $3n-1$ gives $T_0=\\tfrac{2^{3n-1}+2(-1)^{\\,n-1}}{3}$ and $T_1=T_2=\\tfrac{2^{3n-1}-(-1)^{\\,n-1}}{3}=\\tfrac{2^{3n-1}+(-1)^{n}}{3}$.",
          "Hence $U_n=3n\\,T_2=3n\\cdot\\tfrac{2^{3n-1}+(-1)^{n}}{3}=n\\big(2^{3n-1}+(-1)^{n}\\big)$, consistent with the calculus route above.",
          "For $n=4$: $4(2^{11}+1)=\\boxed{8196}$."
        ]
      }
    ],
    "remark": "Insight: two tools are genuinely required — the operator $x\\,d/dx$ (calculus) manufactures the linear weight $k$, and the roots-of-unity filter (algebra) sieves out the multiples of $3$. The extra factor $x$ produced by differentiation shifts every exponent by $1$, sending the relevant terms from residue class $0$ into class $2$; tracking that shift correctly is exactly what yields the clean $+(-1)^n$ correction rather than its sign-flipped impostor."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Alternating Integral of a Power",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "integration",
      "central binomial",
      "alternating sum",
      "beta integral",
      "generalized binomial"
    ],
    "statement": "Evaluate, for a non-negative integer $n$,\n\\[ V_n \\;=\\; \\sum_{k=0}^{n} \\frac{(-1)^k}{2k+1}\\binom{n}{k}, \\]\nexpressing the answer in closed form, and compute $V_5$.",
    "answer": "\\[\\boxed{V_n=\\dfrac{4^{\\,n}}{(2n+1)\\dbinom{2n}{n}},\\qquad V_5=\\dfrac{256}{693}}\\]",
    "trap": "Recognising the weight $\\frac{1}{2k+1}=\\int_0^1 x^{2k}\\,dx$ and writing $V_n=\\int_0^1(1-x^2)^n\\,dx$ correctly — then trying to expand $(1-x^2)^n$ and integrate term-by-term in a loop (going in a circle back to the same sum). The decisive second step is to evaluate $\\int_0^1(1-x^2)^n\\,dx$ as a Wallis/beta integral $=\\frac{(2n)!!}{(2n+1)!!}=\\frac{4^n (n!)^2}{(2n+1)!}$, which is where the CENTRAL BINOMIAL coefficient enters. Stopping at the integral without the Wallis evaluation leaves the answer unsimplified.",
    "solutions": [
      {
        "name": "Integrate $(1-x^2)^n$ via Wallis",
        "steps": [
          "Since $\\dfrac{1}{2k+1}=\\int_0^1 x^{2k}\\,dx$, $V_n=\\int_0^1\\sum_{k=0}^{n}\\binom{n}{k}(-1)^k x^{2k}\\,dx=\\int_0^1 (1-x^2)^n\\,dx$.",
          "Substitute $x=\\sin\\theta$: $\\int_0^{\\pi/2}\\cos^{2n+1}\\theta\\,d\\theta=\\dfrac{(2n)!!}{(2n+1)!!}$ (Wallis).",
          "Rewrite: $\\dfrac{(2n)!!}{(2n+1)!!}=\\dfrac{2^n n!\\cdot 2^n n!}{(2n+1)!}=\\dfrac{4^n (n!)^2}{(2n+1)!}=\\dfrac{4^n}{(2n+1)\\binom{2n}{n}}$.",
          "Thus $V_n=\\dfrac{4^n}{(2n+1)\\binom{2n}{n}}$, and $V_5=\\dfrac{4^5}{11\\cdot 252}=\\dfrac{1024}{2772}=\\boxed{\\dfrac{256}{693}}$."
        ]
      },
      {
        "name": "Beta-function route",
        "steps": [
          "$V_n=\\int_0^1(1-x^2)^n dx$; let $u=x^2$, $dx=\\tfrac{1}{2}u^{-1/2}du$, giving $V_n=\\tfrac{1}{2}\\int_0^1 u^{-1/2}(1-u)^n du=\\tfrac{1}{2}B\\!\\big(\\tfrac12,n+1\\big)$.",
          "Then $V_n=\\tfrac{1}{2}\\dfrac{\\Gamma(1/2)\\Gamma(n+1)}{\\Gamma(n+3/2)}=\\tfrac{1}{2}\\dfrac{\\sqrt\\pi\\,n!}{\\Gamma(n+3/2)}$.",
          "Using $\\Gamma(n+3/2)=\\dfrac{(2n+1)!\\,\\sqrt\\pi}{4^n n!\\,2}$ simplifies to $V_n=\\dfrac{4^n (n!)^2}{(2n+1)!}=\\dfrac{4^n}{(2n+1)\\binom{2n}{n}}$.",
          "At $n=5$: $\\boxed{\\dfrac{256}{693}}$."
        ]
      },
      {
        "name": "Recurrence from integration by parts",
        "steps": [
          "From $V_n=\\int_0^1(1-x^2)^n dx$, integrate by parts to get $V_n=\\dfrac{2n}{2n+1}V_{n-1}$, with $V_0=1$.",
          "Telescoping: $V_n=\\prod_{j=1}^{n}\\dfrac{2j}{2j+1}=\\dfrac{(2n)!!}{(2n+1)!!}=\\dfrac{4^n}{(2n+1)\\binom{2n}{n}}$.",
          "At $n=5$: $\\dfrac{2}{3}\\cdot\\dfrac{4}{5}\\cdot\\dfrac{6}{7}\\cdot\\dfrac{8}{9}\\cdot\\dfrac{10}{11}=\\dfrac{3840}{10395}=\\boxed{\\dfrac{256}{693}}$."
        ]
      }
    ],
    "remark": "Insight: integration converts the harmonic-style weight $\\frac{1}{2k+1}$ into a single power $(1-x^2)^n$ (tool one); the Wallis/beta evaluation then forces the central binomial coefficient $\\binom{2n}{n}$ into the denominator (tool two). The two ideas meet to produce a strikingly compact closed form."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "Six-Sided Sieve",
    "difficulty": 4,
    "task": "Determine",
    "tags": [
      "multinomial",
      "coefficient extraction",
      "inclusion-exclusion",
      "generating function",
      "stars and bars"
    ],
    "statement": "Determine the coefficient of $x^{10}$ in the expansion of\n\\[ \\big(1+x+x^2+x^3+x^4+x^5\\big)^{4}. \\]\nEquivalently, find the number of ways four ordinary dice can show faces summing to $14$.",
    "answer": "\\[\\boxed{146}\\]",
    "trap": "Treating $(1+x+\\cdots+x^5)^4$ as if it were $(1+x)^{\\,\\text{something}}$ and reaching for a single binomial coefficient, or counting non-negative solutions of $e_1+\\cdots+e_4=10$ by pure stars-and-bars $\\binom{13}{3}=286$ WITHOUT subtracting the cases where some $e_i\\ge 6$. Each variable is capped at $5$; the truncation $1-x^6$ in $\\big(\\tfrac{1-x^6}{1-x}\\big)^4$ is exactly the inclusion-exclusion correction that the naive count forgets.",
    "solutions": [
      {
        "name": "Geometric truncation + inclusion-exclusion",
        "steps": [
          "Write $1+x+\\cdots+x^5=\\dfrac{1-x^6}{1-x}$, so the generating function is $(1-x^6)^4(1-x)^{-4}$.",
          "Expand the two factors: $(1-x^6)^4=\\sum_{j}\\binom{4}{j}(-1)^j x^{6j}$ and $(1-x)^{-4}=\\sum_{i\\ge 0}\\binom{i+3}{3}x^i$.",
          "Coefficient of $x^{10}$ collects $6j+i=10$, i.e. $\\sum_{6j\\le 10}(-1)^j\\binom{4}{j}\\binom{10-6j+3}{3}$, so only $j=0,1$ contribute.",
          "$=\\binom{13}{3}-4\\binom{7}{3}=286-4\\cdot 35=286-140=\\boxed{146}$."
        ]
      },
      {
        "name": "Symmetry of the dice distribution",
        "steps": [
          "Substituting $e_i=f_i-1$ turns 'faces $f_i\\in\\{1,\\dots,6\\}$ summing to $14$' into 'exponents $e_i\\in\\{0,\\dots,5\\}$ summing to $10$', so the dice count equals the $x^{10}$-coefficient.",
          "For four dice the sum ranges $4$ to $24$ and the map $f_i\\mapsto 7-f_i$ sends sum $s$ to sum $28-s$; hence the distribution is symmetric about $14$, making sum $14$ the central (maximal) value.",
          "Computing that central count by the truncated-geometric expansion gives $\\binom{13}{3}-4\\binom{7}{3}=286-140=\\boxed{146}$.",
          "A direct enumeration confirms the peak: the four-dice multiplicities are $1,4,10,20,35,56,80,104,125,140,146,140,\\dots$ for sums $4,5,\\dots,14,15,\\dots$, peaking at $146$."
        ]
      },
      {
        "name": "Convolution of two-dice tables",
        "steps": [
          "Two dice give sums $2,\\dots,12$ with multiplicities $N_2=1,2,3,4,5,6,5,4,3,2,1$.",
          "Splitting the four dice into two pairs, the four-dice count at $14$ is the convolution $\\sum_{s=2}^{12} N_2(s)\\,N_2(14-s)$, where $14-s$ also lands in $\\{2,\\dots,12\\}$ for every $s$ in range.",
          "Because $14-s$ mirrors $s$ across the symmetric table, the terms are $N_2(s)\\,N_2(14-s)$ for $s=2,\\dots,12$: $1\\cdot1,\\;2\\cdot2,\\;3\\cdot3,\\;4\\cdot4,\\;5\\cdot5,\\;6\\cdot6,\\;5\\cdot5,\\;4\\cdot4,\\;3\\cdot3,\\;2\\cdot2,\\;1\\cdot1$.",
          "Summing $1+4+9+16+25+36+25+16+9+4+1=146$ gives $\\boxed{146}$, matching the algebraic count."
        ]
      }
    ],
    "remark": "Insight: the multinomial here is a capped one, so two tools combine — the truncated geometric series $\\big(\\frac{1-x^6}{1-x}\\big)^4$ (generating function) and inclusion-exclusion on the $(1-x^6)^4$ factor to subtract the over-limit faces $e_i\\ge 6$. Pure stars-and-bars over-counts by exactly the forgotten $4\\binom{7}{3}=140$, turning the wrong $286$ into the correct $146$."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "Hockey Stick Meets Vandermonde",
    "difficulty": 4,
    "task": "Prove that",
    "tags": [
      "coefficient extraction",
      "vandermonde",
      "hockey stick",
      "convolution",
      "generating function"
    ],
    "statement": "Prove that for non-negative integers $r,s,n$ with $r+s\\le n$,\n\\[ \\sum_{k=0}^{n}\\binom{k}{r}\\binom{n-k}{s}=\\binom{n+1}{\\,r+s+1\\,}. \\]\nThen evaluate the case $r=2,\\,s=3,\\,n=10$.",
    "answer": "\\[\\boxed{\\dbinom{n+1}{r+s+1};\\quad r=2,\\,s=3,\\,n=10:\\ \\dbinom{11}{6}=462}\\]",
    "trap": "Trying to finish in one stroke of Vandermonde's identity $\\sum_k\\binom{a}{k}\\binom{b}{m-k}=\\binom{a+b}{m}$. In Vandermonde the upper indices $a,b$ are FIXED and only the lower indices split; here the upper indices $k$ and $n-k$ themselves VARY with the summation variable, so plain Vandermonde does not apply. Pattern-matching $a=n$, $m=r+s$ to guess $\\binom{n}{r+s}$ gives $\\binom{10}{5}=252$, which is simply wrong (the true value is $462$). The honest route reads the sum as the $x^{n}$-coefficient of $\\big(\\sum_k\\binom{k}{r}x^{k}\\big)\\big(\\sum_j\\binom{j}{s}x^{j}\\big)=\\dfrac{x^{r}}{(1-x)^{r+1}}\\cdot\\dfrac{x^{s}}{(1-x)^{s+1}}$ (each factor a hockey-stick generating function) and extracts a single coefficient.",
    "solutions": [
      {
        "name": "Coefficient extraction from two hockey-stick series",
        "steps": [
          "Recall the hockey-stick generating function $\\displaystyle\\sum_{k\\ge 0}\\binom{k}{r}x^{k}=\\frac{x^{r}}{(1-x)^{r+1}}$, which follows from $\\sum_{m\\ge0}\\binom{m+r}{r}x^{m}=(1-x)^{-(r+1)}$ after shifting $k=m+r$ (so terms with $k<r$ vanish, matching $\\binom{k}{r}=0$ there).",
          "The left side is a Cauchy convolution of the two series, hence the coefficient of $x^{n}$ in their product: $\\displaystyle\\sum_{k}\\binom{k}{r}\\binom{n-k}{s}=[x^{n}]\\,\\frac{x^{r}}{(1-x)^{r+1}}\\cdot\\frac{x^{s}}{(1-x)^{s+1}}=[x^{n}]\\,\\frac{x^{r+s}}{(1-x)^{r+s+2}}$.",
          "Factor out $x^{r+s}$: this equals $[x^{\\,n-r-s}](1-x)^{-(r+s+2)}=\\binom{(n-r-s)+(r+s+1)}{r+s+1}=\\binom{n+1}{r+s+1}$, using $[x^{m}](1-x)^{-t}=\\binom{m+t-1}{t-1}$ with $t=r+s+2$.",
          "For $r=2,\\,s=3,\\,n=10$: $\\displaystyle\\binom{11}{6}=\\boxed{462}$."
        ]
      },
      {
        "name": "Double counting subsets of $\\{0,1,\\dots,n\\}$",
        "steps": [
          "The number of $(r+s+1)$-element subsets of $\\{0,1,\\dots,n\\}$ is $\\binom{n+1}{r+s+1}$.",
          "Count the same subsets by conditioning on the value $k$ of their $(r+1)$-th smallest element. Below $k$ we must choose the remaining $r$ elements from $\\{0,\\dots,k-1\\}$ in $\\binom{k}{r}$ ways; above $k$ we choose the remaining $s$ elements from $\\{k+1,\\dots,n\\}$ in $\\binom{n-k}{s}$ ways. These choices are independent and reconstruct the subset uniquely, so the count for a fixed $k$ is exactly $\\binom{k}{r}\\binom{n-k}{s}$.",
          "Summing over all admissible $k$ partitions the subsets, giving $\\displaystyle\\sum_{k=0}^{n}\\binom{k}{r}\\binom{n-k}{s}=\\binom{n+1}{r+s+1}$.",
          "With $r=2,\\,s=3,\\,n=10$: $\\displaystyle\\binom{11}{6}=\\boxed{462}$."
        ]
      },
      {
        "name": "Induction on $s$ via Pascal, anchored by hockey stick",
        "steps": [
          "Write $F(n,r,s)=\\sum_{k=0}^{n}\\binom{k}{r}\\binom{n-k}{s}$. Base case $s=0$: $F(n,r,0)=\\sum_{k=0}^{n}\\binom{k}{r}=\\binom{n+1}{r+1}$ by the hockey-stick identity, which is $\\binom{n+1}{r+0+1}$ as claimed.",
          "Inductive step. Apply Pascal $\\binom{n-k}{s}=\\binom{n-1-k}{s}+\\binom{n-1-k}{s-1}$ inside $F(n,r,s)$ and reindex; the top term $k=n$ contributes $0$ since $\\binom{0}{s}=0$ for $s\\ge1$. This yields the recurrence $F(n,r,s)=F(n-1,r,s)+F(n-1,r,s-1)$.",
          "By the induction hypothesis the right side equals $\\binom{n}{r+s+1}+\\binom{n}{r+s}$, which is $\\binom{n+1}{r+s+1}$ by Pascal — exactly the target. Hence $F(n,r,s)=\\binom{n+1}{r+s+1}$ for all admissible $r,s,n$.",
          "Specialising $r=2,\\,s=3,\\,n=10$ gives $\\displaystyle\\binom{11}{6}=\\boxed{462}$."
        ]
      }
    ],
    "remark": "Insight: the identity fuses two classical tools. Each factor of the product is a hockey-stick sum in disguise (a negative-binomial series), and combining them by Cauchy convolution is Vandermonde's spirit applied to varying upper indices — coefficient extraction is the glue that makes it rigorous. The naive one-line Vandermonde guess $\\binom{n}{r+s}=\\binom{10}{5}=252$ is exactly the trap to avoid; the correct value is $\\binom{11}{6}=462$. The degenerate case $r=s=0$ recovers $\\sum_{k=0}^{n}1=n+1=\\binom{n+1}{1}$."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "Logarithm Hidden in a Square Root",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "generalized binomial",
      "integration",
      "central binomial",
      "series convergence",
      "logarithm"
    ],
    "statement": "Starting from the generalized binomial series $(1-t)^{-1/2}=\\sum_{m\\ge 0}\\binom{2m}{m}\\dfrac{t^{m}}{4^{m}}$, evaluate the convergent series\n\\[ W \\;=\\; \\sum_{m\\ge 1} \\frac{1}{m}\\binom{2m}{m}\\frac{1}{4^{m}}. \\]",
    "answer": "\\[\\boxed{2\\ln 2}\\]",
    "trap": "Setting $t=1$ directly in $\\sum\\binom{2m}{m}4^{-m}t^m=(1-t)^{-1/2}$, which DIVERGES at $t=1$, and concluding the weighted series also diverges or trying to read off a value from the singular endpoint. The factor $\\frac1m$ comes from INTEGRATING the generating function: $\\sum_{m\\ge1}\\binom{2m}{m}\\frac{t^m}{4^m\\,m}=\\int_0^t\\frac{(1-u)^{-1/2}-1}{u}\\,du$, which has a finite limit as $t\\to 1^-$ (Abel summation), namely $2\\ln 2$. The terms behave like $\\frac{1}{m\\sqrt{\\pi m}}$, so the series converges (just slowly), unlike the ungapped one.",
    "solutions": [
      {
        "name": "Integrate the generating function, then take $t\\to1^-$",
        "steps": [
          "Let $f(t)=\\sum_{m\\ge 1}\\binom{2m}{m}\\dfrac{t^{m}}{4^{m}}=(1-t)^{-1/2}-1$. Then $\\dfrac{f(t)}{t}=\\sum_{m\\ge 1}\\binom{2m}{m}\\dfrac{t^{m-1}}{4^m}$.",
          "Integrate from $0$ to $t$: $\\displaystyle\\sum_{m\\ge 1}\\frac{1}{m}\\binom{2m}{m}\\frac{t^{m}}{4^{m}}=\\int_0^{t}\\frac{(1-u)^{-1/2}-1}{u}\\,du$.",
          "Substitute $1-u=v^2$ (so $u=1-v^2$, $du=-2v\\,dv$): the integrand $\\dfrac{v^{-1}-1}{1-v^2}\\cdot(-2v)\\,dv=\\dfrac{-2(1-v)}{1-v^2}dv=\\dfrac{-2}{1+v}dv$. As $u:0\\to t$, $v:1\\to\\sqrt{1-t}$.",
          "So the sum $=\\displaystyle\\int_{\\sqrt{1-t}}^{1}\\frac{2}{1+v}\\,dv=2\\ln(1+v)\\Big|_{\\sqrt{1-t}}^{1}=2\\ln 2-2\\ln\\!\\big(1+\\sqrt{1-t}\\big)$.",
          "Letting $t\\to 1^{-}$ (Abel's theorem justifies it since the series at $t=1$ converges): $W=2\\ln 2-2\\ln 1=\\boxed{2\\ln 2}$."
        ]
      },
      {
        "name": "Beta-integral term representation",
        "steps": [
          "Use $\\dfrac{1}{4^m}\\binom{2m}{m}=\\dfrac{2}{\\pi}\\displaystyle\\int_0^{\\pi/2}\\sin^{2m}\\theta\\,d\\theta$ (Wallis).",
          "Then $W=\\dfrac{2}{\\pi}\\int_0^{\\pi/2}\\sum_{m\\ge1}\\dfrac{\\sin^{2m}\\theta}{m}\\,d\\theta=\\dfrac{2}{\\pi}\\int_0^{\\pi/2}\\big(-\\ln(1-\\sin^2\\theta)\\big)d\\theta=\\dfrac{2}{\\pi}\\int_0^{\\pi/2}(-2\\ln\\cos\\theta)\\,d\\theta$.",
          "The classic log-cosine integral is $\\int_0^{\\pi/2}\\ln\\cos\\theta\\,d\\theta=-\\dfrac{\\pi}{2}\\ln 2$.",
          "Hence $W=\\dfrac{2}{\\pi}\\cdot(-2)\\cdot\\big(-\\tfrac{\\pi}{2}\\ln 2\\big)=\\boxed{2\\ln 2}$."
        ]
      },
      {
        "name": "Numerical confirmation",
        "steps": [
          "Partial sums $\\sum_{m=1}^{M}\\frac{1}{m}\\binom{2m}{m}4^{-m}$ increase slowly (terms $\\sim \\frac{1}{\\sqrt\\pi\\,m^{3/2}}$, so convergent).",
          "By $M=4\\times10^5$ the sum is $\\approx 1.3845$, approaching $2\\ln 2=1.38629\\ldots$ with the expected $O(M^{-1/2})$ tail.",
          "This confirms the exact value $W=\\boxed{2\\ln 2}$."
        ]
      }
    ],
    "remark": "Insight: two tools collide. The generalized binomial series $(1-t)^{-1/2}$ supplies the central binomial coefficients; dividing by $m$ is integration, which converts the algebraic square-root singularity into a logarithm. The endpoint $t=1$ is exactly where the un-integrated series blows up, so the gap $\\frac1m$ is what makes convergence — and the value $2\\ln 2$ — possible."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "Squares, Averaged",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "vandermonde",
      "integration",
      "coefficient extraction",
      "central binomial",
      "weighted sum"
    ],
    "statement": "Evaluate the weighted sum of squared binomial coefficients\n\\[ X_n \\;=\\; \\sum_{k=0}^{n} \\frac{1}{k+1}\\binom{n}{k}^{2}, \\]\nin closed form, and compute $X_6$.",
    "answer": "\\[\\boxed{X_n=\\dfrac{1}{n+1}\\dbinom{2n+1}{n},\\qquad X_6=\\dfrac{1716}{7}}\\]",
    "trap": "Pulling the weight $\\frac{1}{k+1}$ inside ONE binomial via absorption ($\\frac{1}{k+1}\\binom{n}{k}=\\frac{1}{n+1}\\binom{n+1}{k+1}$) but then forgetting that the OTHER $\\binom{n}{k}$ factor must be re-indexed to match, so that Vandermonde ($\\sum_k\\binom{n+1}{k+1}\\binom{n}{k}=\\binom{2n+1}{n}$) can be applied. A common wrong move is to absorb both factors symmetrically, producing $\\binom{n+1}{k+1}^2$, which is NOT what the weight gives. Only one factor carries the weight.",
    "solutions": [
      {
        "name": "Absorption on one factor + Vandermonde",
        "steps": [
          "Absorb the weight into one square's factor: $\\dfrac{1}{k+1}\\binom{n}{k}=\\dfrac{1}{n+1}\\binom{n+1}{k+1}$, leaving the other factor $\\binom{n}{k}=\\binom{n}{n-k}$.",
          "So $X_n=\\dfrac{1}{n+1}\\sum_{k=0}^{n}\\binom{n+1}{k+1}\\binom{n}{n-k}$.",
          "This is a Vandermonde convolution: $\\sum_{k}\\binom{n+1}{k+1}\\binom{n}{n-k}=\\sum_{j}\\binom{n+1}{j}\\binom{n}{n-j+1}=\\binom{2n+1}{n+1}=\\binom{2n+1}{n}$ (set $j=k+1$; total upper index $2n+1$, total lower $n+1$).",
          "Therefore $X_n=\\dfrac{1}{n+1}\\binom{2n+1}{n}$. For $n=6$: $\\dfrac{1}{7}\\binom{13}{6}=\\dfrac{1716}{7}=\\boxed{\\dfrac{1716}{7}}$."
        ]
      },
      {
        "name": "Integral representation",
        "steps": [
          "Since $\\dfrac{1}{k+1}=\\int_0^1 t^{k}\\,dt$, $X_n=\\int_0^1\\sum_{k=0}^{n}\\binom{n}{k}^2 t^{k}\\,dt=\\int_0^1 [x^n]\\big((1+x)^n(1+tx)^n\\big)\\,dt$.",
          "Here $\\sum_k\\binom{n}{k}^2 t^k=[x^n](1+x)^n(1+tx)^n$ by Vandermonde-coefficient extraction.",
          "Integrating the polynomial-in-$t$ coefficient and simplifying gives $X_n=\\dfrac{1}{n+1}\\binom{2n+1}{n}$.",
          "At $n=6$: $\\boxed{\\dfrac{1716}{7}}$."
        ]
      },
      {
        "name": "Catalan-style telescoping check",
        "steps": [
          "Compute small cases: $X_0=1,\\;X_1=\\tfrac{1}{1}\\cdot1+\\tfrac12\\cdot1=\\tfrac32,\\;X_2=1+\\tfrac12\\cdot4+\\tfrac13\\cdot1=\\tfrac{10}{3}$.",
          "Compare with $\\dfrac{1}{n+1}\\binom{2n+1}{n}$: $n=0\\to1$, $n=1\\to\\tfrac12\\binom31=\\tfrac32$, $n=2\\to\\tfrac13\\binom52=\\tfrac{10}{3}$ — all match.",
          "Hence the closed form holds, and $X_6=\\dfrac{1}{7}\\binom{13}{6}=\\boxed{\\dfrac{1716}{7}}$."
        ]
      }
    ],
    "remark": "Insight: the weight $\\frac{1}{k+1}$ is integration in disguise, and the squared coefficient is Vandermonde in disguise; the trick is to spend the integration on exactly ONE of the two factors so the remaining product is a clean Vandermonde convolution $\\binom{2n+1}{n}$. Two tools, surgically applied."
  }
];
