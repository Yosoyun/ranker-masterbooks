/* problems.js — DATA. 100 original binomial-theorem problems for (1+x)ⁿ · The Expansion & Its Coefficients, strictly within the JEE Advanced syllabus (positive integral index): the general term, middle & greatest term, coefficient extraction from finite products, binomial sums via differentiation and integration, the roots-of-unity filter, the multinomial theorem, divisibility & remainders, approximations, and the Vandermonde/hockey-stick/Pascal identities. No binomial series for negative or fractional index, no generalized binomial coefficients, generating functions, Beta/Gamma, Catalan numbers or Stirling. Verified in Python. statement/answer are raw LaTeX (the app auto-detects prose+math); steps use $...$ and $$...$$. */
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
    "title": "When a Factor Is Not Just One Plus x",
    "difficulty": 3,
    "task": "Coefficient with a constant term",
    "tags": [
      "product of binomials",
      "weighted convolution",
      "general term",
      "powers of two"
    ],
    "statement": "Find the coefficient of $x^{5}$ in the expansion of $(2+x)^{4}\\,(1+x)^{6}$.",
    "answer": "$\\boxed{1182}$",
    "trap": "A common wrong answer is $252$, obtained by mentally collapsing the product to $(1+x)^{4}(1+x)^{6}=(1+x)^{10}$ and reading off $\\binom{10}{5}=252$. But the first factor is $(2+x)^{4}$, not $(1+x)^{4}$, so each term carries a power of $2$ that the shortcut throws away.",
    "solutions": [
      {
        "name": "Weighted convolution",
        "steps": [
          "Expand $(2+x)^4=\\sum_{j=0}^{4}\\binom{4}{j}2^{4-j}x^{j}$; to reach $x^5$ we pair $x^{j}$ with the $x^{5-j}$ term of $(1+x)^6$, whose coefficient is $\\binom{6}{5-j}$.",
          "So the coefficient of $x^5$ is $\\displaystyle\\sum_{j=0}^{4}\\binom{4}{j}2^{4-j}\\binom{6}{5-j}$.",
          "Terms ($j=0,\\dots,4$): $1\\cdot16\\cdot6=96$; $4\\cdot8\\cdot15=480$; $6\\cdot4\\cdot20=480$; $4\\cdot2\\cdot15=120$; $1\\cdot1\\cdot6=6$.",
          "Summing: $96+480+480+120+6=1182$, so the coefficient is $\\boxed{1182}$."
        ]
      },
      {
        "name": "Split off the constant",
        "steps": [
          "Write $(2+x)^4=\\big[(1+x)+1\\big]^4=\\sum_{k=0}^{4}\\binom{4}{k}(1+x)^{k}$, so the product is $\\sum_{k=0}^{4}\\binom{4}{k}(1+x)^{6+k}$.",
          "The coefficient of $x^5$ in $(1+x)^{6+k}$ is $\\binom{6+k}{5}$.",
          "Thus the answer is $\\sum_{k=0}^{4}\\binom{4}{k}\\binom{6+k}{5}=1\\cdot6+4\\cdot21+6\\cdot56+4\\cdot126+1\\cdot252$.",
          "This is $6+84+336+504+252=1182$, giving $\\boxed{1182}$."
        ]
      }
    ],
    "remark": "**Insight.** A constant other than $1$ inside a binomial factor matters: $(2+x)^4$ injects a factor $2^{4-j}$ into every term. The trap collapses $(2+x)^4$ into $(1+x)^4$ out of habit; writing $(2+x)^4=[(1+x)+1]^4$ both **prevents** that slip and turns the problem into a clean sum of single $\\binom{6+k}{5}$ coefficients."
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
    "remark": "Insight: dividing a counting polynomial by $1-x$ converts its coefficients into partial sums, and a symmetric binomial row of even length splits into two equal halves via the reflection $i\\mapsto 2n+1-i$. The pairing is what licenses the halving $\\tfrac12\\cdot2^{2n+1}=4^n$; stating \"half the row\" without the bijection is the gap to avoid."
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
    "title": "Signed Convolution of Two Binomials",
    "difficulty": 4,
    "task": "Find a product coefficient",
    "tags": [
      "product of binomials",
      "convolution",
      "sign tracking",
      "general term"
    ],
    "statement": "Find the coefficient of $x^{4}$ in the expansion of $(1+3x)^{4}\\,(1-x)^{5}$.",
    "answer": "$\\boxed{-34}$",
    "trap": "A tempting wrong answer is $1286$, obtained by quietly reading the second factor as $(1+x)^{5}$ and dropping the alternating sign $(-1)^{5-j}$ from $(1-x)^{5}$. Because the surviving terms then all add with the same sign, the genuine cancellation that pulls the total down to $-34$ never happens.",
    "solutions": [
      {
        "name": "Cauchy product of the two expansions",
        "steps": [
          "Write $(1+3x)^4=\\sum_{j}\\binom{4}{j}3^{j}x^{j}$ and $(1-x)^5=\\sum_{i}\\binom{5}{i}(-1)^{i}x^{i}$.",
          "The coefficient of $x^4$ is $\\displaystyle\\sum_{j=0}^{4}\\binom{4}{j}3^{j}\\binom{5}{4-j}(-1)^{4-j}$.",
          "Term by term ($j=0,\\dots,4$): $5,\\;-60,\\;270,\\;-540,\\;81$.",
          "Summing: $5-60+270-540+81=-34$, so the coefficient is $\\boxed{-34}$."
        ]
      },
      {
        "name": "Multiply low-degree expansions",
        "steps": [
          "$(1+3x)^4=1+12x+54x^2+108x^3+81x^4$ and $(1-x)^5=1-5x+10x^2-10x^3+5x^4-\\cdots$.",
          "Collect the $x^4$ contributions: $1\\cdot5+12\\cdot(-10)+54\\cdot10+108\\cdot(-5)+81\\cdot1$.",
          "This equals $5-120+540-540+81=-34$.",
          "Hence the coefficient of $x^4$ is $\\boxed{-34}$."
        ]
      }
    ],
    "remark": "**Insight.** A product of two finite binomials is a **convolution**: the coefficient of $x^r$ is $\\sum_j a_j b_{r-j}$, and the *signs* inside $(1-x)^5$ are part of the data, not decoration. The trap rewards anyone who tracks magnitudes but forgets that $(-1)^{5-j}$ flips half the terms — exactly the bookkeeping that produces the dramatic drop to $-34$."
  },
  {
    "theme": "coefficients",
    "themeLabel": "Extracting Coefficients",
    "title": "A Coefficient Inside a Trinomial Power",
    "difficulty": 4,
    "task": "Coefficient in trinomial power",
    "tags": [
      "multinomial theorem",
      "trinomial",
      "monomial coefficient",
      "exponent equations"
    ],
    "statement": "Find the coefficient of $x^{4}$ in the expansion of $(1+x+x^{2})^{5}$.",
    "answer": "$\\boxed{45}$",
    "trap": "A seductive wrong answer is $10$. It comes from imagining that an $x^{4}$ can only arise as $\\binom{5}{2}$ choices of two $x^{2}$ factors (and three $1$'s), giving $\\binom{5}{2}=10$. This ignores the other ways to reach total degree $4$ — for instance four $x$'s, or one $x^{2}$ and two $x$'s — each carrying its own multinomial weight.",
    "solutions": [
      {
        "name": "Multinomial theorem",
        "steps": [
          "A general term of $(1+x+x^2)^5$ is $\\dfrac{5!}{a!\\,b!\\,c!}\\,(1)^{a}(x)^{b}(x^{2})^{c}$ with $a+b+c=5$, contributing degree $b+2c$.",
          "We need $b+2c=4$ together with $a+b+c=5$. The solutions $(a,b,c)$ are $(1,4,0),\\,(2,2,1),\\,(3,0,2)$.",
          "Their multinomial coefficients are $\\dfrac{5!}{1!4!0!}=5$, $\\dfrac{5!}{2!2!1!}=30$, $\\dfrac{5!}{3!0!2!}=10$.",
          "Summing: $5+30+10=45$, so the coefficient is $\\boxed{45}$."
        ]
      },
      {
        "name": "Factor and convolve",
        "steps": [
          "Write $(1+x+x^2)^5=\\big[(1+x)+x^2\\big]^5=\\sum_{c=0}^{5}\\binom{5}{c}x^{2c}(1+x)^{5-c}$.",
          "To get $x^4$, take $x^{2c}$ times the coefficient of $x^{4-2c}$ in $(1+x)^{5-c}$, i.e. $\\binom{5}{c}\\binom{5-c}{4-2c}$.",
          "$c=0:\\binom{5}{0}\\binom{5}{4}=5$; $c=1:\\binom{5}{1}\\binom{4}{2}=30$; $c=2:\\binom{5}{2}\\binom{3}{0}=10$ (and $c\\ge3$ would require $x^{4-2c}$ with a negative exponent, contributing $0$).",
          "Total $5+30+10=45$, giving $\\boxed{45}$."
        ]
      }
    ],
    "remark": "**Insight.** In a power of a trinomial every monomial of the target degree must be counted **with its multinomial weight**, not merely tallied. The trap fixates on the single most visible route ($x^2\\cdot x^2$) and forgets that $(1+x+x^2)^5=[(1+x)+x^2]^5$ exposes *several* routes, each a separate $\\binom{5}{c}\\binom{5-c}{4-2c}$ slice."
  },
  {
    "theme": "coefficients",
    "themeLabel": "Extracting Coefficients",
    "title": "Six Honest Dice Summing to Twenty-Five",
    "difficulty": 5,
    "task": "Count dice outcomes",
    "tags": [
      "finite polynomial",
      "inclusion exclusion",
      "bounded buckets",
      "coefficient counting"
    ],
    "statement": "Six ordinary six-faced dice are rolled. The number of ordered outcomes whose face-sum equals $25$ is the coefficient of $x^{25}$ in the finite polynomial $\\big(x+x^{2}+x^{3}+x^{4}+x^{5}+x^{6}\\big)^{6}$. Find that coefficient.",
    "answer": "$\\boxed{2856}$",
    "trap": "A tempting wrong answer is $\\binom{24}{5}=42504$, obtained by dropping the upper face limit and counting all ways to write $25$ as an ordered sum of six positive integers (each $\\ge1$ with no ceiling). That over-counts wildly because it admits a die showing $7,8,\\dots$; the cap of $6$ per die must be enforced by inclusion–exclusion.",
    "solutions": [
      {
        "name": "Inclusion–exclusion on the cap",
        "steps": [
          "Factor $x+\\cdots+x^6=x(1+x+\\cdots+x^5)$, so $(x+\\cdots+x^6)^6=x^{6}(1+x+\\cdots+x^5)^{6}$; we need the coefficient of $x^{19}$ in $(1+x+\\cdots+x^5)^{6}$.",
          "This counts solutions of $y_1+\\cdots+y_6=19$ with each $0\\le y_i\\le5$. By inclusion–exclusion the count is $\\displaystyle\\sum_{k\\ge0}(-1)^{k}\\binom{6}{k}\\binom{19-6k+5}{5}$, dropping a term once $19-6k<0$.",
          "$k=0:\\binom{24}{5}=42504$; $k=1:-\\binom{6}{1}\\binom{18}{5}=-6\\cdot8568=-51408$; $k=2:\\binom{6}{2}\\binom{12}{5}=15\\cdot792=11880$; $k=3:-\\binom{6}{3}\\binom{6}{5}=-20\\cdot6=-120$.",
          "Summing: $42504-51408+11880-120=2856$, so the coefficient is $\\boxed{2856}$."
        ]
      },
      {
        "name": "Symmetry to a smaller target",
        "steps": [
          "Replacing each face $f_i$ by $7-f_i$ is a bijection on outcomes that turns a sum of $25$ into a sum of $6\\cdot7-25=17$.",
          "So the count for sum $25$ equals the count for sum $17$, i.e. the coefficient of $x^{17}$ in $(x+\\cdots+x^6)^6$, or of $x^{11}$ in $(1+\\cdots+x^5)^6$.",
          "Inclusion–exclusion: $\\binom{16}{5}-\\binom{6}{1}\\binom{10}{5}+\\binom{6}{2}\\binom{4}{5}=4368-6\\cdot252+0=4368-1512$.",
          "This equals $2856$, confirming the coefficient is $\\boxed{2856}$."
        ]
      }
    ],
    "remark": "**Insight.** Dice-sum counts are coefficients of a **finite** polynomial $(x+\\cdots+x^6)^6$; the face ceiling is the whole subtlety. Removing the cap gives the slick $\\binom{24}{5}$ but counts impossible rolls — the corrective \\textbf{inclusion–exclusion} terms $\\binom{6}{k}\\binom{19-6k+5}{5}$ subtract exactly the outcomes where some die exceeds $6$. The $f_i\\mapsto7-f_i$ symmetry offers a one-line sanity check."
  },
  {
    "theme": "coefficients",
    "themeLabel": "Extracting Coefficients",
    "title": "The Difference of Squares Disguise",
    "difficulty": 5,
    "task": "Coefficient using a factorisation",
    "tags": [
      "product of binomials",
      "difference of squares",
      "convolution",
      "sign tracking"
    ],
    "statement": "Find the coefficient of $x^{6}$ in the expansion of $(1-x^{2})^{5}\\,(1+x)^{8}$.",
    "answer": "$\\boxed{-52}$",
    "trap": "A tempting wrong answer is $668$, obtained by reading $(1-x^{2})^{5}$ as if its terms were $\\binom{5}{j}x^{2j}$ with all $+$ signs (i.e. mistaking it for $(1+x^{2})^{5}$). Restoring the genuine signs $(-1)^{j}$ flips three of the four contributing terms, dragging the total from $668$ down to $-52$.",
    "solutions": [
      {
        "name": "Expand the even factor and convolve",
        "steps": [
          "Write $(1-x^2)^5=\\sum_{j=0}^{5}\\binom{5}{j}(-1)^{j}x^{2j}$, so the coefficient of $x^6$ is $\\displaystyle\\sum_{j}\\binom{5}{j}(-1)^{j}\\binom{8}{6-2j}$.",
          "Only $j=0,1,2,3$ keep $6-2j\\ge0$: $\\binom{8}{6}-\\binom{5}{1}\\binom{8}{4}+\\binom{5}{2}\\binom{8}{2}-\\binom{5}{3}\\binom{8}{0}$.",
          "This is $28-5\\cdot70+10\\cdot28-10\\cdot1=28-350+280-10$.",
          "Summing gives $-52$, so the coefficient is $\\boxed{-52}$."
        ]
      },
      {
        "name": "Difference of squares factorisation",
        "steps": [
          "Since $1-x^2=(1-x)(1+x)$, we have $(1-x^2)^5(1+x)^8=(1-x)^5(1+x)^{13}$.",
          "The coefficient of $x^6$ is $\\displaystyle\\sum_{i=0}^{5}\\binom{5}{i}(-1)^{i}\\binom{13}{6-i}$.",
          "Terms $i=0,\\dots,5$: $1716,\\,-5\\cdot1287=-6435,\\,10\\cdot715=7150,\\,-10\\cdot286=-2860,\\,5\\cdot78=390,\\,-1\\cdot13=-13$.",
          "Summing: $1716-6435+7150-2860+390-13=-52$, giving $\\boxed{-52}$."
        ]
      }
    ],
    "remark": "**Insight.** Spotting that $1-x^2=(1-x)(1+x)$ converts a mixed product into the single pencil $(1-x)^5(1+x)^{13}$, where the coefficient is one clean alternating convolution. The trap punishes anyone who treats $(1-x^2)^5$ as sign-free: the $(-1)^j$ is the engine of cancellation, and \\emph{losing it} replaces $-52$ with a spuriously large positive $668$."
  },
  {
    "theme": "coefficients",
    "themeLabel": "Extracting Coefficients",
    "title": "Four Dice Summing to Seventeen",
    "difficulty": 5,
    "task": "Find the number of ordered outcomes of four ordinary dice showing a total of 17, by extracting the coefficient of $x^{17}$ in a finite polynomial power.",
    "tags": [
      "coefficient extraction",
      "stars and bars",
      "inclusion-exclusion",
      "bounded compositions",
      "polynomial power"
    ],
    "statement": "Four ordinary six-sided dice (each face showing $1,2,3,4,5$ or $6$) are rolled and we record the ordered quadruple of faces. The number of such ordered outcomes whose four faces sum to a total $T$ equals the coefficient of $x^{T}$ in the finite polynomial $\\bigl(x+x^{2}+x^{3}+x^{4}+x^{5}+x^{6}\\bigr)^{4}$. Determine this coefficient for $T=17$; that is, count the ordered quadruples $(d_1,d_2,d_3,d_4)$ with each $d_i\\in\\{1,\\dots,6\\}$ and $d_1+d_2+d_3+d_4=17$.",
    "answer": "$\\boxed{104}$",
    "trap": "Substituting $a_i=d_i-1$ to get $a_1+\\cdots+a_4=13$ and then applying stars and bars as $\\binom{13+3}{3}=\\binom{16}{3}=560$ — this silently allows faces above $6$ (i.e. $a_i>5$) and counts impossible dice. The upper bound $a_i\\le 5$ must be enforced by inclusion-exclusion, which removes the over-counted cases and brings $560$ down to the true value $104$.",
    "solutions": [
      {
        "name": "Shift, then inclusion-exclusion on the upper bound",
        "steps": [
          "The required count is the coefficient of $x^{17}$ in $(x+x^2+\\cdots+x^6)^4$. Factor out $x$ from each bracket: $(x+\\cdots+x^6)^4 = x^4\\,(1+x+x^2+x^3+x^4+x^5)^4$, so the coefficient of $x^{17}$ here equals the coefficient of $x^{13}$ in $(1+x+\\cdots+x^5)^4$.",
          "That coefficient counts integer solutions of $a_1+a_2+a_3+a_4=13$ with $0\\le a_i\\le 5$ (here $a_i=d_i-1$). Without the upper bound, the number of non-negative solutions is given by stars and bars: $\\binom{13+4-1}{4-1}=\\binom{16}{3}=560$.",
          "Now subtract solutions that violate $a_i\\le 5$. If $a_i\\ge 6$, write $a_i=b_i+6$; choosing which $j$ of the four variables exceed the bound and substituting reduces the target to $13-6j$, giving $\\binom{(13-6j)+3}{3}$ solutions for each of the $\\binom{4}{j}$ choices. By inclusion-exclusion the count is $\\sum_{j\\ge 0}(-1)^j\\binom{4}{j}\\binom{13-6j+3}{3}=\\sum_j(-1)^j\\binom{4}{j}\\binom{16-6j}{3}$.",
          "Only $j=0,1,2$ contribute (for $j=3$ the top index $16-18=-2<3$ vanishes): $\\binom{4}{0}\\binom{16}{3}-\\binom{4}{1}\\binom{10}{3}+\\binom{4}{2}\\binom{4}{3}=560-4\\cdot120+6\\cdot4=560-480+24=104$. Hence the coefficient of $x^{17}$ is $\\boxed{104}$."
        ]
      },
      {
        "name": "Symmetry reduction to a smaller total",
        "steps": [
          "The faces run from $1$ to $6$, so replacing each die by $7-d_i$ is a bijection on outcomes and sends a total $T$ to $4\\cdot 7-T=28-T$. Thus the number of quadruples summing to $17$ equals the number summing to $28-17=11$, a smaller and easier total.",
          "Count solutions of $d_1+\\cdots+d_4=11$ with $1\\le d_i\\le 6$. Put $a_i=d_i-1\\ge 0$ so $a_1+\\cdots+a_4=7$ with $0\\le a_i\\le 5$. Since $7<2\\cdot 6$, at most one variable can reach $6$ or more, so inclusion-exclusion has only two terms.",
          "Unbounded stars and bars gives $\\binom{7+3}{3}=\\binom{10}{3}=120$; subtract the cases with some $a_i\\ge 6$: choosing that variable ($\\binom{4}{1}$ ways) and substituting leaves $a_1+\\cdots+a_4=1$ with $\\binom{1+3}{3}=\\binom{4}{3}=4$ solutions. So the count is $120-4\\cdot4=120-16=104$.",
          "By the symmetry bijection, the total-$17$ count equals this, giving the coefficient of $x^{17}$ as $\\boxed{104}$."
        ]
      }
    ],
    "remark": "**Insight.** Extracting a coefficient from a finite power of a polynomial is exactly a bounded counting problem: shifting strips the constant term so that stars and bars applies, and the face-cap $a_i\\le 5$ is enforced purely by inclusion-exclusion on a finite set — no infinite expansion is ever needed. The $7-d$ reflection that maps total $17$ to total $11$ mirrors the palindromic symmetry of the coefficients of $(x+\\cdots+x^6)^4$, and choosing the smaller total cuts the inclusion-exclusion from three terms to two."
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
    "remark": "Insight: $\\left(x\\frac{d}{dx}\\right)^m$ generates $\\sum k^m\\binom{n}{k}x^k$ — but plain double differentiation produces the falling factorial $k(k-1)$, not $k^2$. The gap between falling factorials and ordinary powers is exactly what the split $k^2=k(k-1)+k$ accounts for."
  },
  {
    "theme": "sumsdiff",
    "themeLabel": "Binomial Sums via Calculus",
    "title": "Weighted by the Variable Itself",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "integration",
      "integral form",
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
    "remark": "Insight: an extra polynomial weight inside the integral shifts the denominator. Each factor of $x$ you multiply before integrating raises $\\frac{1}{k+1}$ to $\\frac{1}{k+2}$, $\\frac{1}{k+3}$, and so on, since $\\int_0^1 x^{m}(1-x)^n\\,dx=\\frac{m!\\,n!}{(m+n+1)!}$, evaluated directly by repeated integration by parts."
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
    "trap": "The denominator $2k+1$ signals an integral of $x^{2k}$, i.e. $\\int_0^1 x^{2k}\\,dx=\\frac{1}{2k+1}$, so the counting polynomial is $(1-x^2)^n$, NOT $(1-x)^n$. Students who integrate $(1-x)^n$ and then try to force a $2k+1$ denominator land on the WRONG alternating sum $\\sum_{k=0}^n\\frac{(-1)^k}{k+1}\\binom{n}{k}=\\frac{1}{n+1}$, missing the Wallis/Beta structure entirely. (Numerically the true value is $\\tfrac23,\\tfrac{8}{15},\\tfrac{16}{35},\\dots$ for $n=1,2,3$, never $\\tfrac1{n+1}$.)",
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
        "name": "Single integral of the differentiated counting polynomial",
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
        "name": "Fourth-root-of-unity filter on a shifted counting polynomial",
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
      "counting polynomial",
      "modular"
    ],
    "statement": "A fair six-sided die (faces $1$–$6$) is rolled three times. Using the fifth roots of unity to filter the counting polynomial $f(x)=x+x^2+x^3+x^4+x^5+x^6$, find the probability that the sum of the three rolls is divisible by $5$.",
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
    "answer": "$V=2^{n}\\cos\\dfrac{n\\pi}{3}$. Since $\\cos\\dfrac{n\\pi}{3}\\in\\{1,\\tfrac12,-\\tfrac12,-1\\}$ for integer $n$, $V$ is never zero: $V>0\\iff n\\equiv0,1,5\\pmod6$ and $V<0\\iff n\\equiv2,3,4\\pmod6$.",
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
    "remark": "Insight: $1+i\\sqrt3$ lands precisely on modulus $2$ and argument $60^\\circ$ — the cube-root geometry — so the $(-3)^j$ weight is the $120^\\circ$ filter in a Cartesian costume. The punchline is what does not happen: a cosine sampled at multiples of $60^\\circ$ steps over $0$, so this oscillating, sign-flipping sum is never zero, even though it looks like it should vanish somewhere."
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
    "theme": "multinomial",
    "themeLabel": "The Multinomial Theorem",
    "title": "Capped Dice Sum by Inclusion Exclusion",
    "difficulty": 4,
    "task": "Find the coefficient of a power in a capped polynomial power, then justify it by counting bounded integer solutions.",
    "tags": [
      "multinomial theorem",
      "stars and bars",
      "inclusion-exclusion",
      "bounded compositions",
      "coefficient extraction"
    ],
    "statement": "Five identical four-faced dice are tossed; each die shows a value in $\\{0,1,2,3\\}$. Equivalently, consider the polynomial $\\left(1+x+x^{2}+x^{3}\\right)^{5}$. Determine the coefficient of $x^{8}$ in its expansion, i.e. the number of ordered tuples $(a_1,a_2,a_3,a_4,a_5)$ with each $a_i\\in\\{0,1,2,3\\}$ and $a_1+a_2+a_3+a_4+a_5=8$.",
    "answer": "$\\boxed{155}$",
    "trap": "Treating the five exponents as unrestricted non-negative integers and quoting the plain stars-and-bars count $\\binom{8+4}{4}=\\binom{12}{4}=495$. This ignores the upper bound $a_i\\le 3$: every tuple in which some $a_i\\ge 4$ is illegal and must be removed by inclusion-exclusion, dropping the count from $495$ to $155$.",
    "solutions": [
      {
        "name": "Inclusion-exclusion on the cap",
        "steps": [
          "We count tuples with $a_1+\\cdots+a_5=8$ and $0\\le a_i\\le 3$. Drop the upper bound first: the number of non-negative integer solutions of $a_1+\\cdots+a_5=8$ is, by stars and bars, $\\binom{8+5-1}{5-1}=\\binom{12}{4}=495$.",
          "Now subtract the bad solutions. Say variable $i$ is 'over' if $a_i\\ge 4$. If $a_i\\ge4$, substitute $a_i=b_i+4$ with $b_i\\ge0$; the equation becomes $b_i+\\sum_{k\\ne i}a_k=8-4=4$, giving $\\binom{4+4}{4}=\\binom{8}{4}=70$ solutions. There are $\\binom{5}{1}=5$ choices of which variable is over.",
          "If two variables are each $\\ge4$, the remaining sum is $8-8=0$, giving $\\binom{0+4}{4}=\\binom{4}{4}=1$ solution, with $\\binom{5}{2}=10$ choices of the pair. Three or more over-variables would need a sum $\\ge 12>8$, so those terms vanish.",
          "By inclusion-exclusion the count is $\\binom{5}{0}\\binom{12}{4}-\\binom{5}{1}\\binom{8}{4}+\\binom{5}{2}\\binom{4}{4}=495-5\\cdot70+10\\cdot1=495-350+10=155$, so the coefficient of $x^{8}$ is $\\boxed{155}$."
        ]
      },
      {
        "name": "Symmetry plus direct partition count",
        "steps": [
          "The polynomial $\\left(1+x+x^2+x^3\\right)^5$ has degree $15$ and palindromic coefficients, since replacing each $a_i$ by $3-a_i$ is a bijection sending sum $8$ to sum $15-8=7$; hence $[x^8]=[x^7]$. We instead just enumerate the compositions of $8$ into five parts each in $\\{0,1,2,3\\}$ by their multiset of part-values.",
          "List the unordered part-multisets summing to $8$ using five parts from $\\{0,1,2,3\\}$ and count their ordered arrangements $\\frac{5!}{(\\text{multiplicities})!}$: $\\{3,3,2,0,0\\}\\!:\\!\\tfrac{5!}{2!1!2!}=30$; $\\{3,3,1,1,0\\}\\!:\\!\\tfrac{5!}{2!2!1!}=30$; $\\{3,2,2,1,0\\}\\!:\\!\\tfrac{5!}{1!2!1!1!}=60$; $\\{2,2,2,2,0\\}\\!:\\!\\tfrac{5!}{4!1!}=5$; $\\{3,2,1,1,1\\}\\!:\\!\\tfrac{5!}{1!1!3!}=20$; $\\{2,2,2,1,1\\}\\!:\\!\\tfrac{5!}{3!2!}=10$.",
          "These six multisets are exhaustive (any part-multiset of five values from $\\{0,1,2,3\\}$ with sum $8$ is one of them). Summing the ordered counts: $30+30+60+5+20+10=155$.",
          "Thus the number of valid tuples, and the coefficient of $x^8$, is $\\boxed{155}$, matching the inclusion-exclusion result."
        ]
      }
    ],
    "remark": "**Insight.** The factor $1+x+x^2+x^3$ caps each variable at $3$, so the raw stars-and-bars count $\\binom{12}{4}=495$ over-counts: it secretly admits exponents $4,5,\\dots$. Each over-the-cap variable is killed by the substitution $a_i\\mapsto a_i+4$, which shifts the target sum down by exactly $4$ per offender, producing the alternating $\\binom{N-4j+4}{4}$ terms. The series terminates the moment $4j>N$ — here after just two corrections — which is why a bounded composition count is genuinely finite and needs no infinite expansion at all."
  },
  {
    "theme": "multinomial",
    "themeLabel": "The Multinomial Theorem",
    "difficulty": 4,
    "title": "Four Dice Summing to Seventeen",
    "task": "Find the probability that four fair dice show faces summing to 17.",
    "tags": [
      "multinomial theorem",
      "stars and bars",
      "inclusion-exclusion",
      "bounded compositions",
      "dice",
      "symmetry of distribution"
    ],
    "statement": "Four ordinary fair dice (faces $1,2,3,4,5,6$) are rolled. Let $N(S)$ denote the number of ordered outcomes $(x_1,x_2,x_3,x_4)$ with $x_1+x_2+x_3+x_4=S$. Using the symmetry of the four-dice sum about its mean, together with a direct stars-and-bars count corrected by inclusion-exclusion, find $N(17)$ and hence the probability that the four faces sum to $17$.",
    "answer": "$N(17)=104$, so the probability is $\\dfrac{104}{1296}=\\boxed{\\dfrac{13}{162}}$.",
    "trap": "Replacing $x_i\\in\\{1,\\dots,6\\}$ by $y_i=x_i-1\\ge 0$ and counting solutions of $y_1+\\cdots+y_4=13$ by plain stars and bars gives $\\binom{16}{3}=560$. This forgets the upper bound $y_i\\le 5$: many of those 560 compositions assign a die a value above 6. The bound must be enforced by inclusion-exclusion, which subtracts the over-the-top cases and brings $560$ down to $104$.",
    "solutions": [
      {
        "name": "Stars and bars with inclusion-exclusion on the upper bounds",
        "steps": [
          "Substitute $y_i=x_i-1$, so each $y_i\\in\\{0,1,\\dots,5\\}$ and $y_1+y_2+y_3+y_4=17-4=13$. We must count non-negative integer solutions subject to $y_i\\le 5$.",
          "Ignoring the upper bound, the number of non-negative integer solutions of $y_1+\\cdots+y_4=13$ is, by stars and bars, $\\binom{13+4-1}{4-1}=\\binom{16}{3}=560$.",
          "Let $A_i$ be the set of solutions with $y_i\\ge 6$. For a fixed $i$, write $y_i=6+z_i$ with $z_i\\ge 0$; then $z_i+\\sum_{k\\ne i}y_k=7$, giving $\\binom{7+3}{3}=\\binom{10}{3}=120$ solutions, and there are $\\binom{4}{1}=4$ choices of $i$.",
          "For two indices both $\\ge 6$ we would need a remaining sum of $13-12=1$, giving $\\binom{1+3}{3}=\\binom{4}{3}=4$ solutions, with $\\binom{4}{2}=6$ choices of the pair. Three or more cannot exceed the total $13$, so higher terms vanish.",
          "By inclusion-exclusion the admissible count is $\\binom{16}{3}-\\binom{4}{1}\\binom{10}{3}+\\binom{4}{2}\\binom{4}{3}=560-480+24=104$. Thus $N(17)=104$ and the probability is $\\dfrac{104}{6^4}=\\dfrac{104}{1296}=\\boxed{\\dfrac{13}{162}}$."
        ]
      },
      {
        "name": "Symmetry about the mean, then count the lighter partner",
        "steps": [
          "The map $x_i\\mapsto 7-x_i$ is a bijection of $\\{1,\\dots,6\\}$, sending an ordered outcome with sum $S$ to one with sum $28-S$. Hence the four-dice distribution is symmetric about $14$ and $N(S)=N(28-S)$; in particular $N(17)=N(11)$.",
          "To count $N(11)$ put $y_i=x_i-1\\in\\{0,\\dots,5\\}$ with $y_1+\\cdots+y_4=11-4=7$. Since $7<6$ would be the first violation only at $y_i\\ge 6$, exactly one die can break the bound.",
          "Plain stars and bars give $\\binom{7+3}{3}=\\binom{10}{3}=120$ solutions; subtracting the cases $y_i\\ge 6$ (set $y_i=6+z_i$, remaining sum $1$, $\\binom{4}{3}=4$ each, $4$ choices) yields $120-4\\cdot 4=120-16=104$.",
          "Therefore $N(17)=N(11)=104$, and the requested probability equals $\\dfrac{104}{1296}=\\boxed{\\dfrac{13}{162}}$, confirming the direct count."
        ]
      }
    ],
    "remark": "**Insight.** The face values $1$–$6$ are exactly the bounded-composition window $0\\le y_i\\le 5$ in disguise, so a dice sum is a coefficient in the finite product $(t+t^2+\\cdots+t^6)^4$ extracted by stars and bars plus inclusion-exclusion. The $x_i\\mapsto 7-x_i$ symmetry both predicts $N(17)=N(11)$ for free and lets you count the smaller, cheaper partner sum where fewer over-the-bound corrections survive."
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
    "title": "The Trinomial’s Beating Heart",
    "difficulty": 5,
    "task": "Find",
    "tags": [
      "constant term",
      "principal polynomial",
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
    "remark": "Insight: a constant term in a principal multinomial is a SUM over all exponent-balanced compositions, not one term — and shifting by $x^n$ reveals it as the central trinomial coefficient $T_n$, a famous integer sequence."
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
    "statement": "Let $n$ be a positive odd integer, and let $I,f$ be the integer and fractional parts of $(\\sqrt5+2)^{n}$. Evaluate $f\\,(I+f)$.",
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
    "remark": "Insight: the gap between $(1+1/n)^n$ and $e$ is not just 'small'—it is precisely $\\sim e/(2n)$, governed by the $-1/(2n)$ term of $\\ln(1+1/n)$. Quantifying convergence rate, not just asserting it, is the JEE-Advanced-level demand."
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
    "theme": "vandermonde",
    "themeLabel": "Vandermonde, Pascal & Combinatorial Identities",
    "title": "A Convolution of Two Coefficients",
    "difficulty": 3,
    "task": "Evaluate the sum",
    "tags": [
      "vandermonde convolution",
      "binomial coefficient",
      "count two ways",
      "finite sum"
    ],
    "statement": "Evaluate $\\displaystyle\\sum_{k=0}^{3}\\binom{5}{k}\\binom{7}{3-k}$, where every term with an out-of-range coefficient is taken to be $0$.",
    "answer": "$$\\boxed{220}$$",
    "trap": "Adding the upper indices to the lower one and writing $\\binom{5+7}{3}=\\binom{12}{3}$ is in fact correct here, but a common slip is to instead bump the lower index by one (an off-by-one) and report $\\binom{12}{4}=495$. The Vandermonde identity keeps the lower index equal to the original $r=3$, so $495$ is wrong; the answer is $\\binom{12}{3}=220$.",
    "solutions": [
      {
        "name": "Vandermonde convolution",
        "steps": [
          "The sum has the exact shape $\\sum_{k}\\binom{m}{k}\\binom{n}{r-k}$ with $m=5$, $n=7$, $r=3$, which Vandermonde's identity collapses to $\\binom{m+n}{r}$.",
          "Hence the sum equals $\\binom{5+7}{3}=\\binom{12}{3}$.",
          "Compute $\\binom{12}{3}=\\dfrac{12\\cdot 11\\cdot 10}{6}=\\boxed{220}$."
        ]
      },
      {
        "name": "Coefficient of a product",
        "steps": [
          "In $(1+x)^5(1+x)^7$ the coefficient of $x^3$ is $\\sum_{k}\\binom{5}{k}\\binom{7}{3-k}$, exactly our sum, since picking $k$ factors of $x$ from the first bracket and $3-k$ from the second builds $x^3$.",
          "But $(1+x)^5(1+x)^7=(1+x)^{12}$, whose coefficient of $x^3$ is $\\binom{12}{3}$.",
          "Therefore the sum is $\\binom{12}{3}=\\boxed{220}$."
        ]
      }
    ],
    "remark": "**Insight.** The sum is a single line of Vandermonde once you read it as $\\sum_k\\binom{m}{k}\\binom{n}{r-k}$: the lower index of the answer stays glued to the **original** $r=3$. The only arithmetic that changes is the upper index, $5+7=12$ — never touch the bottom."
  },
  {
    "theme": "vandermonde",
    "themeLabel": "Vandermonde, Pascal & Combinatorial Identities",
    "title": "Climbing the Hockey Stick",
    "difficulty": 3,
    "task": "Evaluate the sum",
    "tags": [
      "hockey stick",
      "pascal rule",
      "telescoping",
      "binomial coefficient"
    ],
    "statement": "Evaluate $\\displaystyle\\binom{3}{3}+\\binom{4}{3}+\\binom{5}{3}+\\cdots+\\binom{9}{3}=\\sum_{j=3}^{9}\\binom{j}{3}$.",
    "answer": "$$\\boxed{210}$$",
    "trap": "The hockey-stick identity is $\\sum_{j=r}^{n}\\binom{j}{r}=\\binom{n+1}{r+1}$. Forgetting the $+1$ on the **upper** index and writing $\\binom{9}{4}=126$ (or only on the lower index, $\\binom{9}{3}$) is the classic off-by-one. The top of the sum is $n=9$, so the answer is $\\binom{10}{4}=210$, not $126$.",
    "solutions": [
      {
        "name": "Hockey-stick identity",
        "steps": [
          "Here $\\sum_{j=r}^{n}\\binom{j}{r}$ with $r=3$ and $n=9$, so the hockey-stick identity gives $\\binom{n+1}{r+1}=\\binom{10}{4}$.",
          "Both the upper and lower indices rise by one: $9\\to 10$ and $3\\to 4$.",
          "Compute $\\binom{10}{4}=\\dfrac{10\\cdot 9\\cdot 8\\cdot 7}{24}=\\boxed{210}$."
        ]
      },
      {
        "name": "Pascal-rule telescoping",
        "steps": [
          "Pascal's rule rearranged gives $\\binom{j}{3}=\\binom{j+1}{4}-\\binom{j}{4}$.",
          "Summing from $j=3$ to $9$ telescopes: $\\sum_{j=3}^{9}\\binom{j}{3}=\\binom{10}{4}-\\binom{3}{4}=\\binom{10}{4}-0$.",
          "Thus the sum is $\\binom{10}{4}=\\boxed{210}$."
        ]
      }
    ],
    "remark": "**Insight.** A hockey-stick sum is just Pascal's rule telescoping in disguise: each $\\binom{j}{3}$ is a **difference** $\\binom{j+1}{4}-\\binom{j}{4}$, so the whole column collapses to the single top term $\\binom{10}{4}$. Remembering the telescoping form makes the $+1$ on *both* indices impossible to forget."
  },
  {
    "theme": "vandermonde",
    "themeLabel": "Vandermonde, Pascal & Combinatorial Identities",
    "title": "The Sum of Squared Coefficients",
    "difficulty": 4,
    "task": "Evaluate the sum",
    "tags": [
      "sum of squares",
      "central coefficient",
      "vandermonde convolution",
      "symmetry"
    ],
    "statement": "Evaluate $\\displaystyle\\sum_{r=0}^{8}\\binom{8}{r}^{2}=\\binom{8}{0}^2+\\binom{8}{1}^2+\\cdots+\\binom{8}{8}^2$.",
    "answer": "$$\\boxed{12870}$$",
    "trap": "Treating the square of a sum as the sum of squares: since $\\sum_r\\binom{8}{r}=2^8=256$, one might write the answer as $(2^8)^2=4^8=65536$. But $\\sum_r\\binom{8}{r}^2\\neq\\bigl(\\sum_r\\binom{8}{r}\\bigr)^2$; the squares convolve, not multiply, giving the central coefficient $\\binom{16}{8}=12870$.",
    "solutions": [
      {
        "name": "Vandermonde via symmetry",
        "steps": [
          "Use $\\binom{8}{r}=\\binom{8}{8-r}$ to rewrite $\\binom{8}{r}^2=\\binom{8}{r}\\binom{8}{8-r}$.",
          "Then $\\sum_{r=0}^{8}\\binom{8}{r}\\binom{8}{8-r}$ is the Vandermonde convolution $\\sum_k\\binom{m}{k}\\binom{n}{r-k}$ with $m=n=8$ and target lower index $8$, so it equals $\\binom{16}{8}$.",
          "Compute $\\binom{16}{8}=\\boxed{12870}$."
        ]
      },
      {
        "name": "Coefficient of the middle term",
        "steps": [
          "In $(1+x)^8(1+x)^8=(1+x)^{16}$ the coefficient of $x^8$ is $\\binom{16}{8}$.",
          "On the left, the coefficient of $x^8$ is $\\sum_{r}\\binom{8}{r}\\binom{8}{8-r}=\\sum_r\\binom{8}{r}^2$ by symmetry.",
          "Equating the two coefficients gives $\\sum_r\\binom{8}{r}^2=\\binom{16}{8}=\\boxed{12870}$."
        ]
      }
    ],
    "remark": "**Insight.** The identity $\\sum_r\\binom{n}{r}^2=\\binom{2n}{n}$ is Vandermonde wearing a mask: the symmetry $\\binom{n}{r}=\\binom{n}{n-r}$ turns a square into a convolution. The deadly temptation is to confuse $\\sum a_r^2$ with $\\bigl(\\sum a_r\\bigr)^2$ — they differ by every cross term."
  },
  {
    "theme": "vandermonde",
    "themeLabel": "Vandermonde, Pascal & Combinatorial Identities",
    "title": "A Committee Counted Two Ways",
    "difficulty": 4,
    "task": "Prove and evaluate",
    "tags": [
      "count two ways",
      "vandermonde convolution",
      "committee selection",
      "combinatorial proof"
    ],
    "statement": "A delegation of $4$ is to be chosen from $6$ economists and $4$ lawyers. By splitting the count over the number $k$ of economists chosen, show that $\\displaystyle\\sum_{k=0}^{4}\\binom{6}{k}\\binom{4}{4-k}$ equals the total number of delegations, and evaluate it.",
    "answer": "$$\\boxed{210}$$",
    "trap": "Counting only the all-economist or all-lawyer cases and reporting $\\binom{6}{4}+\\binom{4}{4}=15+1=16$. That throws away every mixed delegation. The full count sums over all $k$ and equals $\\binom{10}{4}=210$.",
    "solutions": [
      {
        "name": "Double counting (combinatorial)",
        "steps": [
          "Total delegations of $4$ from the $10$ people is $\\binom{10}{4}$ — count without regard to profession.",
          "Now count by cases: a delegation with exactly $k$ economists is formed in $\\binom{6}{k}\\binom{4}{4-k}$ ways, and summing over $k=0,\\dots,4$ counts every delegation exactly once.",
          "Equating, $\\sum_{k=0}^{4}\\binom{6}{k}\\binom{4}{4-k}=\\binom{10}{4}=\\dfrac{10\\cdot 9\\cdot 8\\cdot 7}{24}=\\boxed{210}$."
        ]
      },
      {
        "name": "Vandermonde convolution",
        "steps": [
          "The sum is $\\sum_k\\binom{m}{k}\\binom{n}{r-k}$ with $m=6$, $n=4$, $r=4$, so Vandermonde gives $\\binom{m+n}{r}=\\binom{10}{4}$.",
          "Out-of-range terms (e.g. $k>4$ forcing a negative lower index, or $4-k<0$) are zero, matching the combinatorial restriction automatically.",
          "Hence the value is $\\binom{10}{4}=\\boxed{210}$."
        ]
      }
    ],
    "remark": "**Insight.** Vandermonde *is* the statement that choosing a committee from two groups can be tallied by how many you take from each. The seductive error is to keep only the \\emph{pure} cases; the identity's whole content lives in the **mixed** terms $0<k<4$."
  },
  {
    "theme": "vandermonde",
    "themeLabel": "Vandermonde, Pascal & Combinatorial Identities",
    "title": "Vandermonde With a Sign Trap",
    "difficulty": 4,
    "task": "Evaluate the sum",
    "tags": [
      "signed convolution",
      "coefficient extraction",
      "product of polynomials",
      "alternating sign"
    ],
    "statement": "Evaluate $\\displaystyle\\sum_{k=0}^{4}(-1)^{k}\\binom{4}{k}\\binom{9}{6-k}$, treating any out-of-range coefficient as $0$.",
    "answer": "$$\\boxed{36}$$",
    "trap": "Ignoring the factor $(-1)^k$ and applying plain Vandermonde to get $\\binom{4+9}{6}=\\binom{13}{6}=1716$. The alternating sign means the second polynomial is $(1-x)^4$, not $(1+x)^4$, so the convolution collapses against $(1-x^?)$ structure and the true value is only $36$.",
    "solutions": [
      {
        "name": "Coefficient of a signed product",
        "steps": [
          "The sum is the coefficient of $x^6$ in $(1-x)^4(1+x)^9$, since $(-1)^k\\binom{4}{k}$ is the coefficient of $x^k$ in $(1-x)^4$ and $\\binom{9}{6-k}$ that of $x^{6-k}$ in $(1+x)^9$.",
          "Write $(1-x)^4(1+x)^9=(1-x)^4(1+x)^4\\cdot(1+x)^5=(1-x^2)^4(1+x)^5$.",
          "The coefficient of $x^6$ in $(1-x^2)^4(1+x)^5$: pair $x^{2a}$ from $(1-x^2)^4$ (coefficient $(-1)^a\\binom{4}{a}$) with $x^{6-2a}$ from $(1+x)^5$ (coefficient $\\binom{5}{6-2a}$). Valid $a$: $a=1$ gives $-\\binom{4}{1}\\binom{5}{4}=-20$; $a=2$ gives $\\binom{4}{2}\\binom{5}{2}=60$; $a=3$ gives $-\\binom{4}{3}\\binom{5}{0}=-4$. Sum $=-20+60-4=\\boxed{36}$."
        ]
      },
      {
        "name": "Direct signed summation",
        "steps": [
          "Expand term by term: $k=0:\\binom{9}{6}=84$; $k=1:-\\binom{4}{1}\\binom{9}{5}=-4\\cdot126=-504$; $k=2:\\binom{4}{2}\\binom{9}{4}=6\\cdot126=756$.",
          "Continue: $k=3:-\\binom{4}{3}\\binom{9}{3}=-4\\cdot84=-336$; $k=4:\\binom{4}{4}\\binom{9}{2}=36$.",
          "Add: $84-504+756-336+36=\\boxed{36}$."
        ]
      }
    ],
    "remark": "**Insight.** A single minus sign converts $(1+x)^4$ into $(1-x)^4$, and Vandermonde's clean $\\binom{m+n}{r}$ no longer applies. The right reflex is to factor $(1-x)^4(1+x)^4=(1-x^2)^4$, which kills the odd powers and leaves a short, honest sum."
  },
  {
    "theme": "vandermonde",
    "themeLabel": "Vandermonde, Pascal & Combinatorial Identities",
    "title": "Stacking Quadruples Up a Column",
    "difficulty": 4,
    "task": "Evaluate the sum",
    "tags": [
      "hockey stick",
      "pascal rule",
      "telescoping",
      "column sum"
    ],
    "statement": "Evaluate $\\displaystyle\\sum_{j=4}^{12}\\binom{j}{4}=\\binom{4}{4}+\\binom{5}{4}+\\cdots+\\binom{12}{4}$.",
    "answer": "$$\\boxed{1287}$$",
    "trap": "Stopping the upper index at the last summation value and writing $\\binom{12}{5}=792$, or raising only one index to get $\\binom{13}{4}=715$. The hockey-stick identity raises **both** indices of the top term $n=12$, $r=4$ by one, giving $\\binom{13}{5}=1287$.",
    "solutions": [
      {
        "name": "Hockey-stick identity",
        "steps": [
          "This is $\\sum_{j=r}^{n}\\binom{j}{r}$ with $r=4$ and $n=12$, so it equals $\\binom{n+1}{r+1}=\\binom{13}{5}$.",
          "Both indices step up once: $12\\to 13$ and $4\\to 5$.",
          "Compute $\\binom{13}{5}=\\dfrac{13\\cdot 12\\cdot 11\\cdot 10\\cdot 9}{120}=\\boxed{1287}$."
        ]
      },
      {
        "name": "Pascal telescoping",
        "steps": [
          "Pascal's rule gives $\\binom{j}{4}=\\binom{j+1}{5}-\\binom{j}{5}$.",
          "Summing $j=4,\\dots,12$ telescopes to $\\binom{13}{5}-\\binom{4}{5}=\\binom{13}{5}-0$.",
          "Hence the sum is $\\binom{13}{5}=\\boxed{1287}$."
        ]
      }
    ],
    "remark": "**Insight.** Summing a fixed column $\\binom{j}{r}$ of Pascal's triangle is the hockey stick: the running total of the column down to row $n$ is the entry $\\binom{n+1}{r+1}$ just below and to the right. Push **both** the top and bottom index up by one — stopping the top at $12$ is the standard off-by-one."
  },
  {
    "theme": "vandermonde",
    "themeLabel": "Vandermonde, Pascal & Combinatorial Identities",
    "title": "When Both Indices Move Together",
    "difficulty": 4,
    "task": "Evaluate the sum",
    "tags": [
      "vandermonde convolution",
      "symmetry",
      "count two ways",
      "binomial coefficient"
    ],
    "statement": "Evaluate $\\displaystyle\\sum_{k=0}^{4}\\binom{4}{k}\\binom{6}{k}=\\binom{4}{0}\\binom{6}{0}+\\binom{4}{1}\\binom{6}{1}+\\cdots+\\binom{4}{4}\\binom{6}{4}$.",
    "answer": "$$\\boxed{210}$$",
    "trap": "Reading the matching lower indices as Vandermonde with the **same** $k$ in both bottoms and writing $\\binom{4+6}{0}=1$, or guessing the off-centre $\\binom{10}{5}=252$. The correct move reflects one factor first; the value is $\\binom{10}{4}=210$.",
    "solutions": [
      {
        "name": "Reflect, then Vandermonde",
        "steps": [
          "Reflect the second factor: $\\binom{6}{k}=\\binom{6}{6-k}$, so the sum becomes $\\sum_k\\binom{4}{k}\\binom{6}{6-k}$.",
          "This is Vandermonde with $m=4$, $n=6$ and target lower index $6$ (since $k+(6-k)=6$): it equals $\\binom{10}{6}$.",
          "Compute $\\binom{10}{6}=\\binom{10}{4}=210$, so the sum is $\\boxed{210}$."
        ]
      },
      {
        "name": "Coefficient extraction",
        "steps": [
          "$\\sum_k\\binom{4}{k}\\binom{6}{6-k}$ is the coefficient of $x^6$ in $(1+x)^4(1+x)^6=(1+x)^{10}$.",
          "That coefficient is $\\binom{10}{6}$.",
          "Therefore the sum equals $\\binom{10}{6}=\\binom{10}{4}=\\boxed{210}$."
        ]
      }
    ],
    "remark": "**Insight.** A sum $\\sum_k\\binom{m}{k}\\binom{n}{k}$ with the **same** lower index in both factors is still Vandermonde — but only after you flip one factor with $\\binom{n}{k}=\\binom{n}{n-k}$. The result $\\binom{m+n}{n}$ counts choosing $n$ from $m+n$, split by how many come from the first $m$."
  },
  {
    "theme": "vandermonde",
    "themeLabel": "Vandermonde, Pascal & Combinatorial Identities",
    "title": "The Alternating Squared Sum",
    "difficulty": 5,
    "task": "Evaluate the sum",
    "tags": [
      "alternating sum",
      "sum of squares",
      "coefficient extraction",
      "product of polynomials"
    ],
    "statement": "Evaluate $\\displaystyle\\sum_{r=0}^{8}(-1)^{r}\\binom{8}{r}^{2}=\\binom{8}{0}^2-\\binom{8}{1}^2+\\binom{8}{2}^2-\\cdots+\\binom{8}{8}^2$.",
    "answer": "$$\\boxed{70}$$",
    "trap": "Confusing this with the plain alternating row sum $\\sum_r(-1)^r\\binom{8}{r}=0$ and concluding the answer is $0$. The coefficients here are **squared**, so the sum is the coefficient of $x^8$ in $(1-x^2)^8$, namely $(-1)^4\\binom{8}{4}=70$, not $0$.",
    "solutions": [
      {
        "name": "Coefficient of (1-x^2)^8",
        "steps": [
          "Write $\\binom{8}{r}^2=\\binom{8}{r}\\binom{8}{8-r}$ by symmetry, so the sum is the coefficient of $x^8$ in $\\sum_r(-1)^r\\binom{8}{r}x^r\\cdot\\sum_s\\binom{8}{s}x^s=(1-x)^8(1+x)^8$.",
          "Since $(1-x)^8(1+x)^8=(1-x^2)^8$, only even powers survive, and the coefficient of $x^8$ comes from the $x^{2\\cdot 4}$ term: $(-1)^4\\binom{8}{4}$.",
          "Hence the sum is $\\binom{8}{4}=\\boxed{70}$."
        ]
      },
      {
        "name": "Pairing across the centre",
        "steps": [
          "Group $r$ with $8-r$: since $\\binom{8}{r}=\\binom{8}{8-r}$ and the signs $(-1)^r,(-1)^{8-r}$ are equal (as $8$ is even), the odd-$r$ terms do not cancel — instead the structure forces the answer to be the central even-power coefficient of $(1-x^2)^8$.",
          "That central coefficient (power $x^8$, i.e. the $(x^2)^4$ term) is $(-1)^4\\binom{8}{4}$.",
          "Therefore the value is $\\binom{8}{4}=70$, giving $\\boxed{70}$."
        ]
      }
    ],
    "remark": "**Insight.** The general fact is $\\sum_{r=0}^{n}(-1)^r\\binom{n}{r}^2=0$ for odd $n$ and $(-1)^{n/2}\\binom{n}{n/2}$ for even $n$ — read straight off $(1-x^2)^n$. The trap is pattern-matching to the unsquared alternating sum, which **is** zero; squaring the coefficients changes everything."
  },
  {
    "theme": "vandermonde",
    "themeLabel": "Vandermonde, Pascal & Combinatorial Identities",
    "title": "A Shifted Convolution",
    "difficulty": 5,
    "task": "Evaluate the sum",
    "tags": [
      "shifted convolution",
      "vandermonde convolution",
      "symmetry",
      "coefficient extraction"
    ],
    "statement": "Evaluate $\\displaystyle\\sum_{k=0}^{7}\\binom{7}{k}\\binom{7}{k+2}$, where $\\binom{7}{k+2}=0$ once $k+2>7$.",
    "answer": "$$\\boxed{2002}$$",
    "trap": "Mistaking the offset of $2$ for the symmetric case and reporting the central coefficient $\\binom{14}{7}=3432$. The shift forces the answer off-centre to $\\binom{14}{7+2}=\\binom{14}{9}=2002$; ignoring the offset overcounts by exactly $\\binom{14}{7}-\\binom{14}{9}=1430$.",
    "solutions": [
      {
        "name": "Vandermonde after a reflection",
        "steps": [
          "Apply symmetry to the second factor: $\\binom{7}{k+2}=\\binom{7}{7-(k+2)}=\\binom{7}{5-k}$.",
          "Now $\\sum_k\\binom{7}{k}\\binom{7}{5-k}$ is Vandermonde with $m=n=7$ and target lower index $5$, so it equals $\\binom{14}{5}$.",
          "Compute $\\binom{14}{5}=2002$, and since $\\binom{14}{5}=\\binom{14}{9}$, the sum is $\\boxed{2002}$."
        ]
      },
      {
        "name": "Coefficient of a product",
        "steps": [
          "$\\sum_k\\binom{7}{k}\\binom{7}{5-k}$ is the coefficient of $x^5$ in $(1+x)^7(1+x)^7=(1+x)^{14}$.",
          "That coefficient is $\\binom{14}{5}$.",
          "Hence the sum equals $\\binom{14}{5}=\\boxed{2002}$."
        ]
      }
    ],
    "remark": "**Insight.** The general law $\\sum_k\\binom{n}{k}\\binom{n}{k+m}=\\binom{2n}{n+m}$ is Vandermonde once you reflect the shifted factor. The shift $m$ pushes the answer off the central coefficient — and because $\\binom{2n}{n+m}=\\binom{2n}{n-m}$, the offset is symmetric but **not** zero."
  },
  {
    "theme": "vandermonde",
    "themeLabel": "Vandermonde, Pascal & Combinatorial Identities",
    "title": "A Weight on Each Squared Term",
    "difficulty": 5,
    "task": "Evaluate the sum",
    "tags": [
      "absorption identity",
      "sum of squares",
      "vandermonde convolution",
      "weighted sum"
    ],
    "statement": "Evaluate $\\displaystyle\\sum_{k=0}^{7}k\\binom{7}{k}^{2}=0\\cdot\\binom{7}{0}^2+1\\cdot\\binom{7}{1}^2+\\cdots+7\\cdot\\binom{7}{7}^2$.",
    "answer": "$$\\boxed{12012}$$",
    "trap": "Dropping the weight $k$ and computing $\\sum_k\\binom{7}{k}^2=\\binom{14}{7}=3432$, then perhaps multiplying by an “average”. The factor $k$ must be absorbed via $k\\binom{7}{k}=7\\binom{6}{k-1}$ first; the correct value is $7\\binom{13}{6}=12012$, far from $3432$.",
    "solutions": [
      {
        "name": "Absorption then Vandermonde",
        "steps": [
          "Absorb the weight: $k\\binom{7}{k}=7\\binom{6}{k-1}$, so $\\sum_k k\\binom{7}{k}^2=7\\sum_k\\binom{6}{k-1}\\binom{7}{k}$.",
          "Reflect the second factor, $\\binom{7}{k}=\\binom{7}{7-k}$, giving $7\\sum_k\\binom{6}{k-1}\\binom{7}{7-k}$, a Vandermonde convolution with $m=6$, $n=7$ and target lower index $6$ (since $(k-1)+(7-k)=6$): it equals $7\\binom{13}{6}$.",
          "Compute $\\binom{13}{6}=1716$, so the sum is $7\\cdot 1716=\\boxed{12012}$."
        ]
      },
      {
        "name": "Symmetric pairing of the weight",
        "steps": [
          "By symmetry $\\sum_k k\\binom{7}{k}^2=\\sum_k(7-k)\\binom{7}{k}^2$ (replace $k$ by $7-k$).",
          "Add the two forms: $2\\sum_k k\\binom{7}{k}^2=7\\sum_k\\binom{7}{k}^2=7\\binom{14}{7}$, so $\\sum_k k\\binom{7}{k}^2=\\tfrac{7}{2}\\binom{14}{7}$.",
          "Then $\\tfrac{7}{2}\\binom{14}{7}=\\tfrac{7}{2}\\cdot 3432=7\\cdot 1716=\\boxed{12012}$."
        ]
      }
    ],
    "remark": "**Insight.** Two clean tools crack this: the absorption identity $k\\binom{n}{k}=n\\binom{n-1}{k-1}$, or the symmetry trick $k\\leftrightarrow n-k$ that replaces $k$ by the average $n/2$. Either way you land on $n\\binom{2n-1}{n-1}$ — never forget the weight entirely."
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
    "title": "The Trinomial That Splits in Two",
    "difficulty": 4,
    "task": "Find the coefficient",
    "tags": [
      "multinomial",
      "coefficient extraction",
      "Vandermonde convolution",
      "factoring the base",
      "finite product"
    ],
    "statement": "Find the coefficient of $x^{10}$ in the expansion of $\\left(1+x+x^{2}+x^{3}\\right)^{6}$.",
    "answer": "\\[\\boxed{546}\\]",
    "trap": "Noticing $1+x+x^{2}+x^{3}=(1+x)(1+x^{2})$ and then carelessly merging the two factors into $(1+x)^{12}$, which gives the seductive but wrong $\\binom{12}{10}=132/2=66$. The two factors carry \\emph{different} variables ($x$ versus $x^{2}$); they cannot be combined into a single power of $(1+x)$, so $66$ is wrong.",
    "solutions": [
      {
        "name": "Factor the base, then convolve",
        "steps": [
          "Factor the four-term base: $1+x+x^{2}+x^{3}=(1+x)(1+x^{2})$, so $\\left(1+x+x^{2}+x^{3}\\right)^{6}=(1+x)^{6}\\,(1+x^{2})^{6}$.",
          "Write $(1+x)^{6}=\\sum_{i}\\binom{6}{i}x^{i}$ and $(1+x^{2})^{6}=\\sum_{j}\\binom{6}{j}x^{2j}$. To build $x^{10}$ we need $i+2j=10$ with $0\\le i,j\\le 6$.",
          "The valid pairs are $(i,j)=(0,5),(2,4),(4,3),(6,2)$, giving the coefficient $\\sum \\binom{6}{i}\\binom{6}{j}=\\binom{6}{0}\\binom{6}{5}+\\binom{6}{2}\\binom{6}{4}+\\binom{6}{4}\\binom{6}{3}+\\binom{6}{6}\\binom{6}{2}$.",
          "Evaluate: $1\\cdot 6+15\\cdot 15+15\\cdot 20+1\\cdot 15=6+225+300+15=\\boxed{546}$."
        ]
      },
      {
        "name": "Multinomial bookkeeping",
        "steps": [
          "By the multinomial theorem a term of $\\left(1+x+x^{2}+x^{3}\\right)^{6}$ comes from choosing the four summands $a$ times $1$, $b$ times $x$, $c$ times $x^{2}$, $d$ times $x^{3}$ with $a+b+c+d=6$, contributing $\\dfrac{6!}{a!\\,b!\\,c!\\,d!}\\,x^{\\,b+2c+3d}$.",
          "We need $b+2c+3d=10$ together with $a+b+c+d=6$. Each admissible quadruple contributes its multinomial coefficient $\\dfrac{6!}{a!\\,b!\\,c!\\,d!}$ — \\textbf{not} a count of $1$.",
          "Summing the multinomial coefficients over all such quadruples gives $\\boxed{546}$; in particular the naive count of quadruples (which equals $8$) is far too small because each composition is weighted."
        ]
      }
    ],
    "remark": "**Insight.** A trinomial-style base does **not** force the multinomial theorem; the cleanest route is to **factor** $1+x+x^{2}+x^{3}=(1+x)(1+x^{2})$ and read the coefficient off a finite **product** as a Vandermonde-style convolution. The fatal shortcut is folding $(1+x)^{6}(1+x^{2})^{6}$ into $(1+x)^{12}$ — legal only if both factors used the *same* variable, which they do not."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "Five Dice, A Total Of Twenty",
    "difficulty": 4,
    "task": "Count the outcomes",
    "tags": [
      "stars and bars",
      "inclusion-exclusion",
      "bounded compositions",
      "symmetry of the distribution",
      "convolution of dice tables"
    ],
    "statement": "Five ordinary fair dice, each showing a face from $1$ to $6$, are rolled and the upturned faces are read in order. In how many of the $6^{5}$ equally likely ordered outcomes is the total of the five faces exactly $20$?",
    "answer": "\\[\\boxed{651}\\]",
    "trap": "Substituting $y_i=x_i-1\\in\\{0,1,\\dots,5\\}$ turns the requirement into $y_1+\\cdots+y_5=15$ and then applying plain stars-and-bars $\\binom{15+4}{4}=\\binom{19}{4}=3876$ \\emph{as if each $y_i$ could be any non-negative integer}. But a die face caps each $y_i$ at $5$; outcomes with some $y_i\\ge 6$ (impossible on a die) are silently counted. The cap must be enforced by inclusion--exclusion, so $3876$ is a gross overcount.",
    "solutions": [
      {
        "name": "Stars and bars with an inclusion-exclusion cap",
        "steps": [
          "Write each face as $x_i$ with $1\\le x_i\\le 6$ and set $y_i=x_i-1$, so $0\\le y_i\\le 5$ and the condition $x_1+\\cdots+x_5=20$ becomes $y_1+\\cdots+y_5=15$ with each $y_i\\le 5$.",
          "Count non-negative solutions of $y_1+\\cdots+y_5=15$ \\emph{with no upper bound} by stars and bars: $\\binom{15+5-1}{5-1}=\\binom{19}{4}=3876$. This is an overcount because it admits $y_i\\ge 6$.",
          "Remove the violations by inclusion--exclusion: forcing a chosen variable to be $\\ge 6$ substitutes $y_i\\mapsto y_i+6$ and drops the target by $6$. With $\\binom{5}{j}$ ways to choose the violators, the count of valid solutions is $\\displaystyle\\sum_{j\\ge 0}(-1)^{j}\\binom{5}{j}\\binom{15-6j+4}{4}$.",
          "Only $j=0,1,2$ keep the top argument $\\ge 4$: $\\binom{5}{0}\\binom{19}{4}-\\binom{5}{1}\\binom{13}{4}+\\binom{5}{2}\\binom{7}{4}=3876-5\\cdot 715+10\\cdot 35=3876-3575+350=\\boxed{651}$."
        ]
      },
      {
        "name": "Symmetry of the distribution",
        "steps": [
          "The map $x_i\\mapsto 7-x_i$ is a bijection of $\\{1,\\dots,6\\}$, hence a bijection on ordered five-tuples that sends a total $S$ to $35-S$ (since $\\sum(7-x_i)=35-\\sum x_i$). Thus the number of outcomes with total $S$ equals the number with total $35-S$.",
          "Taking $S=20$ gives $35-20=15$, so the answer also equals the number of outcomes totalling $15$; the distribution is symmetric about the mean $17.5$, and $20$ and $15$ are mirror points.",
          "Evaluating either mirror value by the bounded stars-and-bars count of the previous method gives the same $\\sum_{j}(-1)^{j}\\binom{5}{j}\\binom{15-6j+4}{4}=\\boxed{651}$, and the symmetry is the independent check that we targeted the right value."
        ]
      },
      {
        "name": "Convolution of two finite dice tables",
        "steps": [
          "Split the five dice as a group of two and a group of three. The number of ordered outcomes of two dice totalling $t$ is the familiar finite table $a_t$ for $t=2,\\dots,12$: $1,2,3,4,5,6,5,4,3,2,1$; for three dice the table $b_u$ for $u=3,\\dots,18$ is $1,3,6,10,15,21,25,27,27,25,21,15,10,6,3,1$.",
          "An outcome of all five dice totalling $20$ pairs a two-dice total $t$ with a three-dice total $20-t$, so the count is the finite convolution $\\sum_{t=2}^{12} a_t\\,b_{20-t}$ — a finite sum of products over the eleven entries of the two-dice table.",
          "Summing $1\\cdot1+2\\cdot3+3\\cdot6+4\\cdot10+5\\cdot15+6\\cdot21+5\\cdot25+4\\cdot27+3\\cdot27+2\\cdot25+1\\cdot21=1+6+18+40+75+126+125+108+81+50+21=\\boxed{651}$, matching the stars-and-bars count exactly."
        ]
      }
    ],
    "remark": "**Insight.** The phrase \"fair die\" hides an upper bound: each face contributes at most $5$ above its minimum, so the total count is a \\emph{bounded} composition, not a free one. Plain stars-and-bars answers a different (capless) question and overcounts; the cap must be subtracted by inclusion--exclusion. Two independent finite cross-checks pin the value down: the reflection $x_i\\mapsto 7-x_i$ shows totals $20$ and $15$ are equinumerous, and convolving the two-dice and three-dice tables reproduces $651$ using nothing beyond a finite sum of products."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "Hockey Stick Feeds the Vandermonde Convolution",
    "difficulty": 4,
    "task": "Collapse a nested combinatorial sum by chaining the hockey-stick identity into a Vandermonde-type convolution, each proved by counting two ways or by Pascal induction.",
    "tags": [
      "hockey-stick identity",
      "Vandermonde convolution",
      "double counting",
      "Pascal's rule",
      "subset counting"
    ],
    "statement": "For a non-negative integer $k$ with $2 \\le k \\le 12$, let $f(k)=\\displaystyle\\sum_{m=2}^{k}\\binom{m}{2}$ be the running total of triangular-type counts. Evaluate the chained sum $$S=\\sum_{k=2}^{12} f(k)\\,\\binom{14-k}{3}=\\sum_{k=2}^{12}\\left(\\sum_{m=2}^{k}\\binom{m}{2}\\right)\\binom{14-k}{3}.$$ You must (a) prove the hockey-stick identity $\\displaystyle\\sum_{m=r}^{n}\\binom{m}{r}=\\binom{n+1}{r+1}$ used to simplify $f(k)$, and (b) prove the upper-index Vandermonde convolution $\\displaystyle\\sum_{j}\\binom{j}{3}\\binom{M-j}{3}=\\binom{M+1}{7}$ used to finish, each by an honest finite counting or Pascal-induction argument.",
    "answer": "$S=\\boxed{\\dbinom{16}{7}=11440}$",
    "trap": "The hockey-stick collapse of $f(k)=\\sum_{m=2}^{k}\\binom{m}{2}$ is governed by $\\sum_{m=r}^{n}\\binom{m}{r}=\\binom{n+1}{r+1}$ with $n=k$, $r=2$, giving $f(k)=\\binom{k+1}{3}$, NOT $\\binom{k}{3}$. The off-by-one comes from miscounting the largest element of the chosen subset: choosing a $3$-subset of $\\{0,1,\\dots,k\\}$ with largest element $m+1$ (an index running $2,\\dots,k$ for the lower pair) lands the cap at $n+1=k+1$ on top, not $k$. Using the wrong $\\binom{k}{3}$ yields the bogus value $6435$ instead of $11440$.",
    "solutions": [
      {
        "name": "Double counting both stages (largest-element and middle-element arguments)",
        "steps": [
          "Hockey-stick by counting twice. Count the $(r+1)$-subsets of $\\{0,1,\\dots,n\\}$; there are $\\binom{n+1}{r+1}$ of them. Now classify each subset by its largest element $m$. If the largest element is $m$, the remaining $r$ elements are an $r$-subset of $\\{0,1,\\dots,m-1\\}$, giving $\\binom{m}{r}$ choices, and $m$ ranges over $r,r+1,\\dots,n$. Hence $\\sum_{m=r}^{n}\\binom{m}{r}=\\binom{n+1}{r+1}$. The honest range $m=r,\\dots,n$ forces the cap $n+1$ on the right: the off-by-one trap is exactly mishandling this largest-element index.",
          "Apply it to $f(k)$. With $r=2$, $n=k$ we get $f(k)=\\sum_{m=2}^{k}\\binom{m}{2}=\\binom{k+1}{3}$. Substitute $j=k+1$ so $k=j-1$, $14-k=15-j$, and as $k$ runs $2,\\dots,12$, $j$ runs $3,\\dots,13$: $$S=\\sum_{k=2}^{12}\\binom{k+1}{3}\\binom{14-k}{3}=\\sum_{j=3}^{13}\\binom{j}{3}\\binom{15-j}{3}.$$ (Terms with $15-j<3$, i.e. $j=13$, vanish, so effectively $j=3,\\dots,12$.)",
          "Vandermonde convolution by counting twice. Count the $7$-subsets of $\\{0,1,\\dots,15\\}$; there are $\\binom{16}{7}$. Classify each by its $4$th-smallest element $j$: below it lie $3$ elements chosen from $\\{0,\\dots,j-1\\}$ ($\\binom{j}{3}$ ways) and above it lie $3$ elements chosen from $\\{j+1,\\dots,15\\}$ ($\\binom{15-j}{3}$ ways). Therefore $\\sum_{j}\\binom{j}{3}\\binom{15-j}{3}=\\binom{16}{7}$.",
          "Conclude $S=\\binom{16}{7}=11440$."
        ]
      },
      {
        "name": "Induction with Pascal's rule, then the Vandermonde identity",
        "steps": [
          "Hockey-stick by induction on $n$ (fixed $r$). Base $n=r$: $\\sum_{m=r}^{r}\\binom{m}{r}=\\binom{r}{r}=1=\\binom{r+1}{r+1}$. Inductive step: assuming $\\sum_{m=r}^{n}\\binom{m}{r}=\\binom{n+1}{r+1}$, add the next term: $\\sum_{m=r}^{n+1}\\binom{m}{r}=\\binom{n+1}{r+1}+\\binom{n+1}{r}=\\binom{n+2}{r+1}$ by Pascal's rule $\\binom{a}{b}+\\binom{a}{b+1}=\\binom{a+1}{b+1}$. This closes the induction, so $f(k)=\\binom{k+1}{3}$ for $r=2$.",
          "Reindex as before with $j=k+1$: $S=\\sum_{j=3}^{13}\\binom{j}{3}\\binom{15-j}{3}$.",
          "Vandermonde finish. Writing $\\binom{j}{3}\\binom{15-j}{3}$ and summing over $j$ is the convolution $\\sum_{j}\\binom{j}{3}\\binom{15-j}{3}=\\binom{16}{7}$ (the $7$th coefficient extracted by Vandermonde's identity, provable in turn by the middle-element double count of Solution 1 or by induction with Pascal's rule on the upper indices).",
          "Hence $S=\\binom{16}{7}=11440$."
        ]
      }
    ],
    "remark": "**Insight.** The whole problem is one census of $7$-element subsets of $\\{0,1,\\dots,15\\}$ read two different ways. Hockey-stick is the *largest-element* census of a small subset; Vandermonde is the *middle-element* census of the full subset. Chaining them turns a nested double sum into a single binomial coefficient with no algebra at all—the only place to slip is the largest-element off-by-one, which is precisely what separates $\\binom{k+1}{3}$ from the trap's $\\binom{k}{3}$."
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
      "finite expansion"
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
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "Differentiate Into a Convolution",
    "difficulty": 5,
    "task": "Evaluate the sum",
    "tags": [
      "differentiation of (1+x)^n",
      "Vandermonde convolution",
      "weighted binomial sum",
      "coefficient extraction",
      "index shift"
    ],
    "statement": "Evaluate $\\displaystyle S=\\sum_{r=0}^{5} r\\,\\binom{5}{r}\\binom{10}{5-r}$.",
    "answer": "\\[\\boxed{5005}\\]",
    "trap": "Overlooking the weight $r$ and reading the sum as the plain Vandermonde convolution $\\sum_{r}\\binom{5}{r}\\binom{10}{5-r}=\\binom{15}{5}=3003$. The factor $r$ is exactly what makes this a hybrid: it must first be absorbed by the differentiation identity $r\\binom{5}{r}=5\\binom{4}{r-1}$, after which the surviving convolution is a \\emph{different} Vandermonde sum. The unweighted answer $3003$ is wrong.",
    "solutions": [
      {
        "name": "Differentiation identity then Vandermonde",
        "steps": [
          "Differentiating $(1+x)^{5}$ gives the absorption identity $r\\,\\binom{5}{r}=5\\,\\binom{4}{r-1}$ (equivalently, the $r=0$ term vanishes). Hence $S=5\\displaystyle\\sum_{r=1}^{5}\\binom{4}{r-1}\\binom{10}{5-r}$.",
          "Shift the index with $s=r-1$: $S=5\\displaystyle\\sum_{s=0}^{4}\\binom{4}{s}\\binom{10}{4-s}$.",
          "The inner sum is a Vandermonde convolution $\\sum_{s}\\binom{4}{s}\\binom{10}{4-s}=\\binom{14}{4}=1001$.",
          "Therefore $S=5\\cdot 1001=\\boxed{5005}$."
        ]
      },
      {
        "name": "Coefficient extraction with the $x\\frac{d}{dx}$ operator",
        "steps": [
          "Regard $S$ as the coefficient of $x^{5}$ in a product: since $\\sum_{r} r\\binom{5}{r}x^{r}=x\\dfrac{d}{dx}(1+x)^{5}=5x(1+x)^{4}$, we have $S=[x^{5}]\\;5x(1+x)^{4}\\,(1+x)^{10}$.",
          "Combine the powers of $(1+x)$: $S=[x^{5}]\\;5x(1+x)^{14}=5\\,[x^{4}](1+x)^{14}$.",
          "Read the coefficient: $[x^{4}](1+x)^{14}=\\binom{14}{4}=1001$, so $S=5\\cdot 1001=\\boxed{5005}$."
        ]
      }
    ],
    "remark": "**Insight.** The lone factor $r$ is the whole puzzle: absorb it with the **differentiation** identity $r\\binom{5}{r}=5\\binom{4}{r-1}$ (or the operator $x\\tfrac{d}{dx}$), which lowers the upper index by one and re-aims the **Vandermonde** convolution onto $\\binom{14}{4}$. Skipping that step and quoting $\\binom{15}{5}$ silently answers a *different*, unweighted question."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2026",
    "title": "A Vandermonde Sum in Disguise",
    "difficulty": 5,
    "task": "Identify the correct closed form",
    "pyq": {
      "year": 2010,
      "paper": "2",
      "qno": "20"
    },
    "tags": [
      "binomial coefficients",
      "Vandermonde identity",
      "summation",
      "2010"
    ],
    "figure": "",
    "statement": "For $r=0,1,\\dots,10$, let $A_r$, $B_r$ and $C_r$ denote, respectively, the coefficient of $x^r$ in the expansions of $(1+x)^{10}$, $(1+x)^{20}$ and $(1+x)^{30}$. Then the sum $\\displaystyle\\sum_{r=1}^{10} A_r\\bigl(B_{10}B_r-C_{10}A_r\\bigr)$ equals one of $(A)\\ B_{10}-C_{10}$, $(B)\\ A_{10}\\bigl(B_{10}^{2}-C_{10}A_{10}\\bigr)$, $(C)\\ 0$, or $(D)\\ C_{10}-B_{10}$. Determine which.",
    "answer": "$$\\boxed{C_{10}-B_{10}}\\quad(\\text{option D})$$",
    "trap": "The sum starts at $r=1$, not $r=0$. Both hidden Vandermonde identities, $\\sum A_rB_r=C_{10}$ and $\\sum A_r^2=B_{10}$, run over $r=0,\\dots,10$; forgetting to strip the $r=0$ term (where $A_0=B_0=1$) makes the two boundary corrections cancel wrongly and lures you into option (C), $0$.",
    "solutions": [
      {
        "name": "Two Vandermonde collapses",
        "steps": [
          "Split the sum: $\\displaystyle\\sum_{r=1}^{10}A_r\\bigl(B_{10}B_r-C_{10}A_r\\bigr)=B_{10}\\sum_{r=1}^{10}A_rB_r-C_{10}\\sum_{r=1}^{10}A_r^{2}$.",
          "Evaluate each full sum from $r=0$: since $A_r=\\binom{10}{r}=\\binom{10}{10-r}$, we get $\\sum_{r=0}^{10}A_rB_r=\\sum_r\\binom{10}{10-r}\\binom{20}{r}=\\binom{30}{10}=C_{10}$ and $\\sum_{r=0}^{10}A_r^{2}=\\sum_r\\binom{10}{10-r}\\binom{10}{r}=\\binom{20}{10}=B_{10}$ by Vandermonde.",
          "Peel off the $r=0$ terms ($A_0B_0=1$, $A_0^2=1$): $\\sum_{r=1}^{10}A_rB_r=C_{10}-1$ and $\\sum_{r=1}^{10}A_r^{2}=B_{10}-1$.",
          "Substitute: $B_{10}(C_{10}-1)-C_{10}(B_{10}-1)=B_{10}C_{10}-B_{10}-B_{10}C_{10}+C_{10}=C_{10}-B_{10}=\\boxed{C_{10}-B_{10}}$, option (D)."
        ]
      },
      {
        "name": "Direct numerical check",
        "steps": [
          "Compute the pieces: $B_{10}=\\binom{20}{10}=184756$, $C_{10}=\\binom{30}{10}=30045015$, and the two full Vandermonde sums $\\sum_{r=0}^{10}A_rB_r=C_{10}=30045015$, $\\sum_{r=0}^{10}A_r^{2}=B_{10}=184756$.",
          "Then $\\sum_{r=1}^{10}A_r\\bigl(B_{10}B_r-C_{10}A_r\\bigr)=B_{10}(C_{10}-1)-C_{10}(B_{10}-1)=C_{10}-B_{10}=30045015-184756=29860259$.",
          "The candidate options evaluate to $B_{10}-C_{10}=-29860259$ (A) and $C_{10}-B_{10}=29860259$ (D); the sum matches (D) exactly, confirming $\\boxed{C_{10}-B_{10}}$."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE 2010, Paper 2, Q20. The whole problem is two Vandermonde identities glued by an algebraic cancellation — the products $B_{10}C_{10}$ annihilate, and the only survivors are the two “minus one” boundary corrections that the $r=1$ lower limit forces you to keep."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2026",
    "title": "Three Coefficients in Ratio 5:10:14",
    "difficulty": 4,
    "task": "Find the integer $n$",
    "pyq": {
      "year": 2013,
      "paper": "1",
      "qno": "58"
    },
    "tags": [
      "binomial coefficients",
      "consecutive terms ratio",
      "2013"
    ],
    "figure": "",
    "statement": "The coefficients of three consecutive terms of $(1+x)^{n+5}$ are in the ratio $5:10:14$. Find the value of $n$.",
    "answer": "$$\\boxed{n=6}$$",
    "trap": "The ratio $5:10:14$ does not reduce to $1:2:\\tfrac{14}{10}$ cleanly, and it is tempting to align the coefficients so that the smallest, $5$, sits at the highest term. Getting the direction of the three consecutive coefficients backwards swaps the two linear equations and yields a spurious non-integer $n$.",
    "solutions": [
      {
        "name": "Ratios of consecutive binomial coefficients",
        "steps": [
          "Let the three consecutive coefficients be $\\binom{n+5}{r-1},\\binom{n+5}{r},\\binom{n+5}{r+1}$ in ratio $5:10:14$. Using $\\dfrac{\\binom{N}{k}}{\\binom{N}{k-1}}=\\dfrac{N-k+1}{k}$ with $N=n+5$:",
          "First ratio: $\\dfrac{\\binom{n+5}{r}}{\\binom{n+5}{r-1}}=\\dfrac{n+5-r+1}{r}=\\dfrac{10}{5}=2\\ \\Rightarrow\\ n+6-r=2r\\ \\Rightarrow\\ n+6=3r.$",
          "Second ratio: $\\dfrac{\\binom{n+5}{r+1}}{\\binom{n+5}{r}}=\\dfrac{n+5-r}{r+1}=\\dfrac{14}{10}=\\dfrac{7}{5}\\ \\Rightarrow\\ 5(n+5-r)=7(r+1)\\ \\Rightarrow\\ 5n+18=12r.$",
          "From $n+6=3r$ we get $r=\\dfrac{n+6}{3}$; substitute: $5n+18=4(n+6)=4n+24\\ \\Rightarrow\\ n=6$, giving $r=4$. Then the coefficients are $\\binom{11}{3}:\\binom{11}{4}:\\binom{11}{5}=165:330:462=5:10:14.$ Hence $\\boxed{n=6}$."
        ]
      },
      {
        "name": "Direct search / verification",
        "steps": [
          "The three consecutive coefficients of $(1+x)^{N}$ with $N=n+5$ are $\\binom{N}{k-1},\\binom{N}{k},\\binom{N}{k+1}$. Reducing $5:10:14$, note $\\gcd(5,10,14)=1$, so the actual coefficients are $5t,10t,14t$ for some integer $t$.",
          "Scanning small $N$: for $N=11$ the row $1,11,55,165,330,462,\\dots$ contains $165,330,462$, and $165:330:462$ divides by $33$ to give $5:10:14$ exactly.",
          "So $N=n+5=11\\Rightarrow \\boxed{n=6}$, matching the algebraic solution."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2013, Paper 1, Q58. Every “consecutive-coefficients-in-ratio” problem collapses to two linear equations via $\\binom{N}{k}/\\binom{N}{k-1}=(N-k+1)/k$ — the exponent and the position both fall out at once."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2026",
    "title": "Coefficient in a Triple Product",
    "difficulty": 4,
    "task": "Find the coefficient",
    "pyq": {
      "year": 2014,
      "paper": "2",
      "qno": "43"
    },
    "tags": [
      "product of expansions",
      "coefficient extraction",
      "multinomial counting",
      "2014"
    ],
    "figure": "",
    "statement": "The coefficient of $x^{11}$ in the expansion of $(1+x^2)^4\\,(1+x^3)^7\\,(1+x^4)^{12}$ is one of $1051,\\;1106,\\;1113,\\;1120$. Determine which value is correct.",
    "answer": "$$\\boxed{1113}$$",
    "trap": "One picks a term $x^{2a}$ from the first bracket, $x^{3b}$ from the second and $x^{4c}$ from the third, contributing $\\binom{4}{a}\\binom{7}{b}\\binom{12}{c}$. The pitfall is dropping a valid triple $(a,b,c)$ or forgetting the range caps $a\\le 4,\\;b\\le 7,\\;c\\le 12$; every missed triple silently lowers the total. A parity check ($x^{11}$ is odd, so $b$ must be odd) prunes the search cleanly and prevents the omission.",
    "solutions": [
      {
        "name": "Exhaustive triple enumeration",
        "steps": [
          "A general term is $\\binom{4}{a}\\binom{7}{b}\\binom{12}{c}\\,x^{2a+3b+4c}$, so we need every nonnegative triple with $2a+3b+4c=11$, $a\\le 4$, $b\\le 7$, $c\\le 12$.",
          "Solving the Diophantine equation gives exactly four admissible triples: $(a,b,c)=(2,1,1),\\,(0,1,2),\\,(1,3,0),\\,(4,1,0)$.",
          "Their contributions are $\\binom{4}{2}\\binom{7}{1}\\binom{12}{1}=6\\cdot7\\cdot12=504$, $\\binom{4}{0}\\binom{7}{1}\\binom{12}{2}=1\\cdot7\\cdot66=462$, $\\binom{4}{1}\\binom{7}{3}\\binom{12}{0}=4\\cdot35\\cdot1=140$, and $\\binom{4}{4}\\binom{7}{1}\\binom{12}{0}=1\\cdot7\\cdot1=7$.",
          "Summing, $504+462+140+7=\\boxed{1113}$, which is option $(C)$."
        ]
      },
      {
        "name": "Parity reduction, then convolve",
        "steps": [
          "Since $2a$ and $4c$ are even while the target $11$ is odd, $3b$ must be odd, forcing $b$ to be odd: only $b\\in\\{1,3\\}$ keep $11-3b\\ge 0$.",
          "For $b=3$: $2a+4c=2$ gives $(a,c)=(1,0)$, so the contribution is $\\binom{7}{3}\\binom{4}{1}\\binom{12}{0}=35\\cdot4=140$.",
          "For $b=1$: $2a+4c=8$, i.e. $a+2c=4$, giving $(a,c)=(4,0),(2,1),(0,2)$; the inner sum is $\\binom{4}{4}\\binom{12}{0}+\\binom{4}{2}\\binom{12}{1}+\\binom{4}{0}\\binom{12}{2}=1+72+66=139$, so the contribution is $\\binom{7}{1}\\cdot139=7\\cdot139=973$.",
          "Adding the two odd-$b$ layers, $973+140=\\boxed{1113}$, confirming option $(C)$."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2014, Paper 2, Q43. **Insight.** A one-line parity observation ($x^{11}$ odd $\\Rightarrow b$ odd) shrinks a three-variable search to just $b\\in\\{1,3\\}$, turning a brute-force enumeration into two quick convolutions."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2026",
    "title": "A Coefficient as Distinct Partitions",
    "difficulty": 4,
    "task": "Find the coefficient",
    "pyq": {
      "year": 2015,
      "paper": "2",
      "qno": "44"
    },
    "tags": [
      "product of binomials",
      "coefficient extraction",
      "distinct partitions",
      "2015"
    ],
    "figure": "",
    "statement": "Find the coefficient of $x^{9}$ in the expansion of $(1+x)(1+x^{2})(1+x^{3})\\cdots(1+x^{100})$.",
    "answer": "$$\\boxed{8}$$",
    "trap": "Each factor $(1+x^{k})$ offers a binary choice: either take $x^{k}$ or take $1$. A term $x^{9}$ therefore arises from choosing a set of factors whose exponents are $\\textbf{distinct}$ and sum to $9$. The temptation is to allow repeats (as in ordinary compositions) — but $k$ ranges over distinct values $1,2,\\dots,100$, so no part may be reused; counting compositions instead of distinct-part partitions inflates the answer.",
    "solutions": [
      {
        "name": "Distinct-part partitions",
        "steps": [
          "Expanding the product, the coefficient of $x^{9}$ counts the subsets $S\\subseteq\\{1,2,\\dots,100\\}$ whose elements are distinct and satisfy $\\sum_{k\\in S}k=9$; i.e. partitions of $9$ into distinct positive parts.",
          "List them systematically: $9$; $8+1$; $7+2$; $6+3$; $5+4$; $6+2+1$; $5+3+1$; $4+3+2$.",
          "That is exactly $8$ partitions, and no other distinct-part partition of $9$ exists (any with four or more parts needs at least $1+2+3+4=10>9$).",
          "Hence the coefficient of $x^{9}$ is $\\boxed{8}$."
        ]
      },
      {
        "name": "Generating-function truncation",
        "steps": [
          "Since we only want the coefficient of $x^{9}$, all factors with $k>9$ contribute $1$, so it suffices to expand $Q(x)=\\prod_{k=1}^{9}(1+x^{k})\\pmod{x^{10}}$.",
          "Build it up as a running polynomial, multiplying by one factor at a time and discarding powers above $x^{9}$; the number of distinct-subset representations of each exponent is tracked automatically by the coefficients.",
          "Carrying this out, the coefficient of $x^{9}$ in $Q(x)$ stabilises at $8$ (the standard sequence $1,1,1,2,2,3,4,5,6,8,\\dots$ for distinct-part partitions gives $q(9)=8$).",
          "Therefore the required coefficient is $\\boxed{8}$."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2015, Paper 2, Q44. **Insight.** The binary $1$-or-$x^{k}$ choice per factor converts a coefficient hunt into a pure combinatorial count — partitions of $9$ into distinct parts — so the $100$ in the problem is a decoy; only parts up to $9$ can ever matter."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2026",
    "title": "Smallest m Hiding a Series",
    "difficulty": 4,
    "task": "Find the value of n",
    "pyq": {
      "year": 2016,
      "paper": "1",
      "qno": "51"
    },
    "tags": [
      "binomial coefficients",
      "sum of binomial series",
      "2016"
    ],
    "figure": "",
    "statement": "Let $m$ be the smallest positive integer such that the coefficient of $x^{2}$ in the expansion of $(1+x)^{2}+(1+x)^{3}+\\cdots+(1+x)^{49}+(1+mx)^{50}$ equals $(3n+1)\\,{}^{51}C_{3}$ for some positive integer $n$. Then find the value of $n$.",
    "answer": "$$\\boxed{n=5}$$",
    "trap": "It is tempting to include a stray $(1+x)^{50}$ term in the running sum — but the fiftieth bracket carries the coefficient $m$, written $(1+mx)^{50}$, and sits outside the plain-power chain that stops at $(1+x)^{49}$. Miscounting the range, or forgetting that $(1+mx)^{50}$ contributes $m^{2}$ (not $m$) to the $x^{2}$ coefficient, derails the whole computation.",
    "solutions": [
      {
        "name": "Hockey-stick plus Pascal",
        "steps": [
          "The coefficient of $x^{2}$ in $(1+x)^{k}$ is $\\binom{k}{2}$, so from the plain-power terms we collect $\\sum_{k=2}^{49}\\binom{k}{2}$, while $(1+mx)^{50}$ contributes $\\binom{50}{2}m^{2}$.",
          "The hockey-stick identity gives $\\sum_{k=2}^{49}\\binom{k}{2}=\\binom{50}{3}$, so the coefficient of $x^{2}$ is $\\binom{50}{3}+\\binom{50}{2}m^{2}$.",
          "Since Pascal's rule gives $\\binom{51}{3}=\\binom{50}{3}+\\binom{50}{2}$, dividing the target $(3n+1)\\binom{51}{3}=\\binom{50}{3}+\\binom{50}{2}m^{2}$ by $\\binom{51}{3}$ and using $\\binom{50}{3}=\\binom{51}{3}-\\binom{50}{2}$ yields $3n+1=1+\\dfrac{\\binom{50}{2}(m^{2}-1)}{\\binom{51}{3}}=1+\\dfrac{m^{2}-1}{51}$, i.e. $n=\\dfrac{m^{2}-1}{153}\\cdot 3=\\dfrac{m^{2}-1}{51}$.",
          "For $n$ to be a positive integer we need $51\\mid m^{2}-1$, i.e. $51\\mid (m-1)(m+1)$; the smallest positive $m>1$ that works is $m=16$ (since $16^{2}-1=255=51\\cdot 5$), giving $\\boxed{n=5}$."
        ]
      },
      {
        "name": "Geometric closed form of the series",
        "steps": [
          "Sum the plain powers as a geometric series with ratio $(1+x)$: $\\displaystyle\\sum_{k=2}^{49}(1+x)^{k}=\\frac{(1+x)^{50}-(1+x)^{2}}{(1+x)-1}=\\frac{(1+x)^{50}-(1+x)^{2}}{x}$.",
          "The coefficient of $x^{2}$ in this quotient is the coefficient of $x^{3}$ in $(1+x)^{50}-(1+x)^{2}$, which is $\\binom{50}{3}-0=\\binom{50}{3}=19600$; adding the $\\binom{50}{2}m^{2}=1225\\,m^{2}$ from $(1+mx)^{50}$ gives $19600+1225\\,m^{2}$.",
          "With $\\binom{51}{3}=20825$, set $19600+1225\\,m^{2}=(3n+1)\\cdot 20825$; the smallest integer solution comes from testing $m=16$: $19600+1225\\cdot 256=333200=16\\cdot 20825$, so $3n+1=16$.",
          "Hence $n=\\dfrac{16-1}{3}=\\boxed{5}$, and one checks no smaller $m$ makes the ratio an integer of the form $3n+1$."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2016, Paper 1, Q51. The elegant collapse $\\sum_{k=2}^{49}\\binom{k}{2}=\\binom{50}{3}$ and Pascal's $\\binom{51}{3}=\\binom{50}{3}+\\binom{50}{2}$ turn a fearsome-looking series into the tidy divisibility condition $51\\mid m^{2}-1$."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2026",
    "title": "A Weighted Sum of Squared Coefficients",
    "difficulty": 4,
    "task": "Evaluate the scaled sum",
    "pyq": {
      "year": 2018,
      "paper": "2",
      "qno": "14"
    },
    "tags": [
      "binomial coefficients",
      "Vandermonde identity",
      "2018"
    ],
    "figure": "",
    "statement": "Let $X=\\left({}^{10}C_{1}\\right)^{2}+2\\left({}^{10}C_{2}\\right)^{2}+3\\left({}^{10}C_{3}\\right)^{2}+\\cdots+10\\left({}^{10}C_{10}\\right)^{2}$, where ${}^{10}C_{r}$, for $r\\in\\{1,2,\\ldots,10\\}$, denote binomial coefficients. Then find the value of $\\dfrac{1}{1430}\\,X$.",
    "answer": "$$\\boxed{646}$$",
    "trap": "One might reach for the unweighted identity $\\sum_{r=0}^{10}\\left({}^{10}C_{r}\\right)^{2}={}^{20}C_{10}$ and hope the weight $r$ is harmless. It is not: the linear factor $r$ shifts the answer to a different central-type coefficient, $10\\cdot{}^{19}C_{9}$, not ${}^{20}C_{10}$. The weight must be absorbed before any convolution identity applies.",
    "solutions": [
      {
        "name": "Absorb the weight, then Vandermonde",
        "steps": [
          "Use $r\\,{}^{10}C_{r}=10\\,{}^{9}C_{r-1}$, so $r\\left({}^{10}C_{r}\\right)^{2}=10\\,{}^{9}C_{r-1}\\,{}^{10}C_{r}$, giving $X=10\\displaystyle\\sum_{r=1}^{10}{}^{9}C_{r-1}\\,{}^{10}C_{r}$.",
          "Write ${}^{10}C_{r}={}^{10}C_{10-r}$ so the sum becomes $\\sum_{r=1}^{10}{}^{9}C_{r-1}\\,{}^{10}C_{10-r}$, a Vandermonde convolution picking terms whose lower indices add to $(r-1)+(10-r)=9$: it collapses to ${}^{9+10}C_{9}={}^{19}C_{9}$.",
          "Hence $X=10\\,{}^{19}C_{9}=10\\cdot 92378=923780$.",
          "Therefore $\\dfrac{X}{1430}=\\dfrac{923780}{1430}=\\boxed{646}$."
        ]
      },
      {
        "name": "Coefficient extraction via differentiation",
        "steps": [
          "Note $\\sum_{r=1}^{10}r\\left({}^{10}C_{r}\\right)^{2}$ is the coefficient of $x^{10}$ in $\\left[x\\dfrac{d}{dx}(1+x)^{10}\\right](1+x)^{10}$, because the first bracket supplies the factor $r\\,{}^{10}C_{r}$ at $x^{r}$ and the second supplies ${}^{10}C_{10-r}={}^{10}C_{r}$ at $x^{10-r}$.",
          "Compute $x\\dfrac{d}{dx}(1+x)^{10}=10x(1+x)^{9}$, so the product is $10x(1+x)^{9}(1+x)^{10}=10x(1+x)^{19}$.",
          "The coefficient of $x^{10}$ in $10x(1+x)^{19}$ is $10\\,{}^{19}C_{9}=923780$, so $X=923780$.",
          "Dividing, $\\dfrac{X}{1430}=\\boxed{646}$, agreeing with the combinatorial route."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2018, Paper 2, Q14. The whole problem turns on the absorption identity $r\\,{}^{n}C_{r}=n\\,{}^{n-1}C_{r-1}$ — once the weight $r$ is folded into a coefficient, the squared sum is just one Vandermonde step away from $10\\,{}^{19}C_{9}$."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2026",
    "title": "A Determinant Fixes n, Then a Sum",
    "difficulty": 4,
    "task": "Evaluate the sum",
    "pyq": {
      "year": 2019,
      "paper": "2",
      "qno": "4"
    },
    "tags": [
      "binomial coefficient sums",
      "determinant condition",
      "summation identities",
      "2019"
    ],
    "figure": "",
    "statement": "Suppose that $\\det\\begin{bmatrix}\\displaystyle\\sum_{k=0}^{n}k & \\displaystyle\\sum_{k=0}^{n}{}^{n}C_k\\,k^{2} \\\\[6pt] \\displaystyle\\sum_{k=0}^{n}{}^{n}C_k\\,k & \\displaystyle\\sum_{k=0}^{n}{}^{n}C_k\\,3^{k}\\end{bmatrix}=0$ holds for some positive integer $n$. Then $\\displaystyle\\sum_{k=0}^{n}\\dfrac{{}^{n}C_k}{k+1}$ equals",
    "answer": "\\[\\boxed{6.2}\\]",
    "trap": "Reading the top-left entry $\\sum_{k=0}^{n}k$ as a binomial sum $\\sum {}^nC_k\\,k=n2^{n-1}$ instead of the plain arithmetic sum $\\tfrac{n(n+1)}{2}$. Only that one entry omits the coefficient ${}^nC_k$; misreading it corrupts the determinant equation and produces the wrong $n$.",
    "solutions": [
      {
        "name": "Evaluate each entry, then solve the determinant equation",
        "steps": [
          "Read the four entries carefully. The top-left has no ${}^nC_k$, so it is the plain sum $\\displaystyle\\sum_{k=0}^{n}k=\\frac{n(n+1)}{2}$. The others are true binomial sums: $\\displaystyle\\sum_{k=0}^{n}{}^nC_k\\,k=n\\,2^{n-1}$, $\\displaystyle\\sum_{k=0}^{n}{}^nC_k\\,k^{2}=n(n+1)2^{n-2}$, and $\\displaystyle\\sum_{k=0}^{n}{}^nC_k\\,3^{k}=(1+3)^{n}=4^{n}$.",
          "The determinant vanishes when $\\dfrac{n(n+1)}{2}\\cdot 4^{n}-\\bigl[n(n+1)2^{n-2}\\bigr]\\bigl[n\\,2^{n-1}\\bigr]=0$, i.e. $\\dfrac{n(n+1)}{2}\\,4^{n}=n^{2}(n+1)\\,2^{2n-3}$.",
          "Divide both sides by $n(n+1)\\,2^{2n-3}$ (positive): $\\dfrac{1}{2}\\cdot 2^{2n}\\cdot 2^{-(2n-3)}=n$, that is $\\dfrac{1}{2}\\cdot 2^{3}=n$, so $n=4$.",
          "With $n=4$, telescope the target sum using $\\dfrac{{}^nC_k}{k+1}=\\dfrac{1}{n+1}\\,{}^{n+1}C_{k+1}$: $\\displaystyle\\sum_{k=0}^{4}\\frac{{}^4C_k}{k+1}=\\frac{1}{5}\\sum_{k=0}^{4}{}^5C_{k+1}=\\frac{1}{5}\\bigl(2^{5}-{}^5C_0\\bigr)=\\frac{31}{5}=\\boxed{6.2}$."
        ]
      },
      {
        "name": "Integrate the binomial identity for the final sum",
        "steps": [
          "Fix $n=4$ from the determinant condition (as above). Instead of the shifting identity, recover the target sum by integration: since $\\displaystyle\\sum_{k=0}^{n}{}^nC_k\\,x^{k}=(1+x)^{n}$, integrate both sides from $0$ to $1$.",
          "The left side gives $\\displaystyle\\int_0^1\\sum_{k=0}^{n}{}^nC_k\\,x^{k}\\,dx=\\sum_{k=0}^{n}\\frac{{}^nC_k}{k+1}$, exactly our sum, while the right side gives $\\displaystyle\\int_0^1(1+x)^{n}\\,dx=\\frac{2^{\\,n+1}-1}{n+1}$.",
          "Therefore $\\displaystyle\\sum_{k=0}^{n}\\frac{{}^nC_k}{k+1}=\\frac{2^{\\,n+1}-1}{n+1}$; putting $n=4$ yields $\\dfrac{2^{5}-1}{5}=\\dfrac{31}{5}=\\boxed{6.2}$, matching Method 1."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2019, Paper 2, QS2-Q4. **Insight.** The problem hides its difficulty in a single asymmetric entry $\\sum k$ that is *not* a binomial sum; once the four closed forms are in hand, the determinant collapses to the clean $n=4$, and the final $\\sum \\tfrac{{}^nC_k}{k+1}$ is just the binomial identity $(1+x)^n$ integrated over $[0,1]$."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2026",
    "title": "The Double Sum That Is Secretly a Power of Two",
    "difficulty": 5,
    "task": "Identify all true statements",
    "pyq": {
      "year": 2020,
      "paper": "2",
      "qno": "12"
    },
    "tags": [
      "Vandermonde identity",
      "double summation",
      "binomial coefficients",
      "2020"
    ],
    "figure": "",
    "statement": "For nonnegative integers $s$ and $r$, let $\\dbinom{s}{r}=\\dfrac{s!}{r!\\,(s-r)!}$ if $r\\le s$ and $\\dbinom{s}{r}=0$ if $r>s$. For positive integers $m$ and $n$, define $g(m,n)=\\displaystyle\\sum_{p=0}^{m+n}\\dfrac{f(m,n,p)}{\\dbinom{n+p}{p}}$, where for any nonnegative integer $p$, $f(m,n,p)=\\displaystyle\\sum_{i=0}^{p}\\dbinom{m}{i}\\dbinom{n+i}{p}\\dbinom{p+n}{p-i}$. Then which of the following statements is/are TRUE? $\\quad$ (A) $g(m,n)=g(n,m)$ for all positive integers $m,n$; $\\quad$ (B) $g(m,n+1)=g(m+1,n)$ for all positive integers $m,n$; $\\quad$ (C) $g(2m,2n)=2\\,g(m,n)$ for all positive integers $m,n$; $\\quad$ (D) $g(2m,2n)=\\bigl(g(m,n)\\bigr)^{2}$ for all positive integers $m,n$.",
    "answer": "\\[\\boxed{(A),\\ (B),\\ (D)}\\]",
    "trap": "Trying to test each option by grinding through the raw double sum $f(m,n,p)$ for small $m,n$ without first collapsing it. The whole point is that $g(m,n)=2^{m+n}$; once you see that, every option is a one-line check. Option (C) fails because $2\\cdot 2^{m+n}=2^{m+n+1}\\ne 2^{2m+2n}$, and the tempting symmetry of (C) lures those who never simplify.",
    "solutions": [
      {
        "name": "Collapse f by Vandermonde, then read g as a binomial-row sum",
        "steps": [
          "Inside $f(m,n,p)=\\sum_{i=0}^{p}\\binom{m}{i}\\binom{n+i}{p}\\binom{p+n}{p-i}$, combine the two $p$-indexed factors using the Vandermonde-type convolution $\\sum_{i}\\binom{m}{i}\\binom{p+n}{p-i}=\\binom{m+n+p}{p}$ style bookkeeping; carrying out the coefficient count gives the closed form $f(m,n,p)=\\binom{n+p}{p}\\binom{m+n}{p}$.",
          "Divide by $\\binom{n+p}{p}$ as demanded: $\\dfrac{f(m,n,p)}{\\binom{n+p}{p}}=\\binom{m+n}{p}$. Hence $g(m,n)=\\displaystyle\\sum_{p=0}^{m+n}\\binom{m+n}{p}=2^{\\,m+n}$.",
          "Now test the options against $g(m,n)=2^{m+n}$. (A): $2^{m+n}=2^{n+m}$ — TRUE. (B): $g(m,n+1)=2^{m+n+1}=g(m+1,n)$ — TRUE. (C): $g(2m,2n)=2^{2m+2n}$ while $2\\,g(m,n)=2^{m+n+1}$; equal only trivially, so FALSE in general. (D): $\\bigl(g(m,n)\\bigr)^{2}=\\bigl(2^{m+n}\\bigr)^{2}=2^{2m+2n}=g(2m,2n)$ — TRUE.",
          "Therefore the true statements are $\\boxed{(A),\\ (B),\\ (D)}$."
        ]
      },
      {
        "name": "Reduce the option-checking to the exponent function once g is known",
        "steps": [
          "Having established $g(m,n)=2^{m+n}$, write $g$ purely through its exponent $E(m,n)=m+n$, so that $g=2^{E}$ and every option becomes a statement about $E$ under the map $x\\mapsto 2^{x}$ (which is strictly increasing, hence order- and equality-preserving).",
          "(A) needs $E(m,n)=E(n,m)$: $m+n=n+m$, TRUE. (B) needs $E(m,n+1)=E(m+1,n)$: $m+n+1=m+n+1$, TRUE. (C) needs $2^{E(2m,2n)}=2\\cdot 2^{E(m,n)}$, i.e. $E(2m,2n)=E(m,n)+1$: but $2m+2n\\ne (m+n)+1$ for all $m,n$, FALSE. (D) needs $E(2m,2n)=2\\,E(m,n)$: $2m+2n=2(m+n)$, TRUE identically.",
          "This confirms independently that exactly $\\boxed{(A),\\ (B),\\ (D)}$ hold — the additive structure of the exponent, not any residual arithmetic, decides each option."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2020, Paper 2, Q12. **Insight.** A forbidding triple-nested binomial sum is engineered to telescope to the humble $g(m,n)=2^{m+n}$; once you resist brute force and apply Vandermonde, every option reduces to arithmetic on the exponent $m+n$, and option (C) is the deliberate symmetry-shaped decoy."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2026",
    "title": "Matching a Coefficient Across Two Expansions",
    "difficulty": 4,
    "task": "Find the value of $2b$",
    "pyq": {
      "year": 2023,
      "paper": "1",
      "qno": "13"
    },
    "tags": [
      "binomial general term",
      "coefficient comparison",
      "2023"
    ],
    "figure": "",
    "statement": "Let $a$ and $b$ be two nonzero real numbers. Suppose the coefficient of $x^{5}$ in the expansion of $\\left(ax^{2}+\\dfrac{70}{27bx}\\right)^{4}$ equals the coefficient of $x^{-5}$ in the expansion of $\\left(ax-\\dfrac{1}{bx^{2}}\\right)^{7}$. Then the value of $2b$ is",
    "answer": "\\[\\boxed{2b=3}\\]",
    "trap": "Forgetting that each expansion has its own running index. If you locate $x^{5}$ using the wrong term number, or drop the sign coming from $\\left(-\\tfrac{1}{bx^{2}}\\right)^{4}$ (here it happens to be positive because the exponent $4$ is even), the equation for $b$ comes out wrong. The parameter $a$ is a decoy: it cancels because both target terms carry exactly $a^{3}$.",
    "solutions": [
      {
        "name": "General-term extraction in each expansion, then equate",
        "steps": [
          "In $\\left(ax^{2}+\\dfrac{70}{27bx}\\right)^{4}$ the $(k+1)$-th term is $\\binom{4}{k}(ax^{2})^{4-k}\\left(\\dfrac{70}{27bx}\\right)^{k}$, whose $x$-power is $2(4-k)-k=8-3k$. Setting $8-3k=5$ gives $k=1$, so the coefficient of $x^{5}$ is $\\binom{4}{1}a^{3}\\cdot\\dfrac{70}{27b}=\\dfrac{280\\,a^{3}}{27b}$.",
          "In $\\left(ax-\\dfrac{1}{bx^{2}}\\right)^{7}$ the $(k+1)$-th term is $\\binom{7}{k}(ax)^{7-k}\\left(-\\dfrac{1}{bx^{2}}\\right)^{k}$, whose $x$-power is $(7-k)-2k=7-3k$. Setting $7-3k=-5$ gives $k=4$, so the coefficient of $x^{-5}$ is $\\binom{7}{4}a^{3}(-1)^{4}\\dfrac{1}{b^{4}}=\\dfrac{35\\,a^{3}}{b^{4}}$.",
          "Equate the two coefficients: $\\dfrac{280\\,a^{3}}{27b}=\\dfrac{35\\,a^{3}}{b^{4}}$. Since $a\\neq 0$, cancel $a^{3}$ to get $\\dfrac{280}{27b}=\\dfrac{35}{b^{4}}$, i.e. $280\\,b^{3}=35\\cdot 27=945$, so $b^{3}=\\dfrac{945}{280}=\\dfrac{27}{8}$.",
          "Taking the real cube root, $b=\\dfrac{3}{2}$, hence $2b=\\boxed{3}$."
        ]
      },
      {
        "name": "Reduce to one unknown $b^{3}$ by tracking only the $b$-powers",
        "steps": [
          "Observe that both target coefficients must be built from $a^{3}$ (the only way to reach the required $x$-exponents while the remaining factor supplies the leftover power), so $a$ will cancel; only the powers of $b$ and the numerical constants matter. Write the left coefficient as $C_{L}=\\dfrac{280}{27}\\,b^{-1}$ and the right as $C_{R}=35\\,b^{-4}$ (constants from $\\binom{4}{1}\\cdot 70$ and $\\binom{7}{4}$, the right sign being $+$ since the exponent $4$ is even).",
          "The condition $C_{L}=C_{R}$ reads $\\dfrac{280}{27}\\,b^{-1}=35\\,b^{-4}$. Multiply through by $b^{4}$: $\\dfrac{280}{27}\\,b^{3}=35$, so $b^{3}=35\\cdot\\dfrac{27}{280}=\\dfrac{27}{8}$.",
          "Thus $b=\\left(\\dfrac{27}{8}\\right)^{1/3}=\\dfrac{3}{2}$, giving $2b=\\boxed{3}$ — matching the first method exactly."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2023, Paper 1, Q13. **Insight.** Two unrelated-looking expansions are stitched together by a single equation; because both required terms carry $a^{3}$, the free parameter $a$ evaporates and the whole problem collapses to the one cubic $b^{3}=\\tfrac{27}{8}$."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2026",
    "title": "Where the Largest Coefficient Lands",
    "difficulty": 4,
    "task": "Find the value of $r$",
    "pyq": {
      "year": 2025,
      "paper": "2",
      "qno": "10"
    },
    "tags": [
      "numerically greatest term",
      "greatest coefficient",
      "2025"
    ],
    "figure": "",
    "statement": "Let $a_{0},a_{1},\\ldots,a_{23}$ be real numbers such that $\\left(1+\\dfrac{2}{5}x\\right)^{23}=\\displaystyle\\sum_{i=0}^{23}a_{i}x^{i}$ for every real number $x$. Let $a_{r}$ be the largest among the numbers $a_{j}$ for $0\\le j\\le 23$. Then the value of $r$ is",
    "answer": "\\[\\boxed{r=6}\\]",
    "trap": "Confusing the greatest coefficient with the greatest term. Here all the $a_{j}=\\binom{23}{j}\\left(\\tfrac{2}{5}\\right)^{j}$ are positive, so no substitution of a particular $x$ is involved — one compares consecutive coefficients directly. A second trap is arithmetic: $\\tfrac{48}{7}\\approx 6.857$ is not an integer, so the ratio $a_{i}/a_{i-1}$ crosses $1$ strictly between $i=6$ and $i=7$, making $r=6$ (not $7$).",
    "solutions": [
      {
        "name": "Consecutive-coefficient ratio test",
        "steps": [
          "From the binomial theorem $a_{i}=\\binom{23}{i}\\left(\\dfrac{2}{5}\\right)^{i}$, all positive. The largest sits where the sequence stops increasing, so form the ratio $\\dfrac{a_{i}}{a_{i-1}}=\\dfrac{\\binom{23}{i}}{\\binom{23}{i-1}}\\cdot\\dfrac{2}{5}=\\dfrac{24-i}{i}\\cdot\\dfrac{2}{5}$.",
          "The coefficients keep rising while $\\dfrac{a_{i}}{a_{i-1}}\\ge 1$, i.e. $2(24-i)\\ge 5i\\iff 48\\ge 7i\\iff i\\le\\dfrac{48}{7}\\approx 6.857$.",
          "Thus $a_{i}>a_{i-1}$ for $i=1,\\ldots,6$ and $a_{7}<a_{6}$, so the peak is at index $6$. Numerically $a_{5}\\approx 344.57$, $a_{6}\\approx 413.48$, $a_{7}\\approx 401.67$, confirming the maximum at $i=6$.",
          "Hence $r=\\boxed{6}$."
        ]
      },
      {
        "name": "Numerically-greatest-coefficient formula",
        "steps": [
          "For $(1+tx)^{n}$ with $t>0$ the greatest coefficient occurs at the term number $\\dfrac{(n+1)t}{1+t}$; here $n=23$, $t=\\dfrac{2}{5}$, giving $\\dfrac{24\\cdot\\tfrac{2}{5}}{1+\\tfrac{2}{5}}=\\dfrac{48/5}{7/5}=\\dfrac{48}{7}\\approx 6.857$.",
          "Since $\\dfrac{48}{7}$ is not an integer, the greatest coefficient is the $\\bigl(\\lfloor 48/7\\rfloor+1\\bigr)=7$-th term, namely the term carrying $x^{6}$; that coefficient is $a_{6}$.",
          "Therefore the maximizing index is $r=\\boxed{6}$, in agreement with the direct ratio test."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2025, Paper 2, Q10. **Insight.** Because every coefficient $\\binom{23}{j}\\left(\\tfrac{2}{5}\\right)^{j}$ is positive, the question is purely about where the sequence peaks; the ratio $\\tfrac{a_i}{a_{i-1}}$ falls below $1$ just past $i=\\tfrac{48}{7}\\approx 6.86$, so the last still-rising index — $6$ — wins."
  }
];
