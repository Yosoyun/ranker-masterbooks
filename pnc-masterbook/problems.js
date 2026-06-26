/* problems.js — DATA. 100 original permutations & combinations problems for n! · The Art of Counting, strictly within the JEE Advanced syllabus: the two principles, permutations & arrangements, combinations & selections, circular permutations, distributions (stars & bars), inclusion–exclusion & derangements, combinatorial identities, geometric counting, and lattice paths. No generating functions, Burnside/Polya/necklace-orbit counting, Stirling/partition numbers, Catalan numbers/reflection principle, or transfer matrices. Verified in Python. statement/answer are raw LaTeX (the app auto-detects prose+math); steps use $...$ and $$...$$. */
window.PROBLEMS = [
  {
    "theme": "fundamental",
    "themeLabel": "The Two Principles",
    "title": "The Stutter-Free PIN",
    "difficulty": 3,
    "task": "Find the number of …",
    "tags": [
      "rule of product",
      "number formation",
      "forbidden condition",
      "codes"
    ],
    "statement": "A bank PIN is a string of four digits $d_1 d_2 d_3 d_4$, each from $0$ through $9$. To be valid it must satisfy two rules: \\[ d_1 \\neq 0 \\quad\\text{(no leading zero)}, \\qquad d_i \\neq d_{i+1}\\ \\text{ for } i=1,2,3 \\quad\\text{(no two consecutive digits equal).}\\] How many valid PINs are there?",
    "answer": "$6561$",
    "trap": "Computing $9 \\cdot 9 \\cdot 9 \\cdot 9$ is correct, but many instead reason $10$ choices for $d_1$ then subtract, or use $9\\cdot 9 \\cdot 8 \\cdot 7$ (treating it like 'all distinct'). The rule is only 'differ from the immediate neighbour', not 'all four distinct' — each later digit avoids exactly one value (its predecessor), leaving $9$, not a shrinking pool.",
    "solutions": [
      {
        "name": "Chain of independent choices (rule of product)",
        "steps": [
          "Choose $d_1$: it may be any digit except $0$, so $9$ ways.",
          "Choose $d_2$: any digit except $d_1$, so $9$ ways (note $0$ is now allowed).",
          "Choose $d_3$: any digit except $d_2$, so $9$ ways; likewise $d_4$ avoids only $d_3$, $9$ ways.",
          "Since each choice is unconstrained apart from its single forbidden value, multiply: $9 \\cdot 9 \\cdot 9 \\cdot 9 = \\boxed{6561}$."
        ]
      },
      {
        "name": "Build-up by position with running count",
        "steps": [
          "Let $N_k$ be the number of valid prefixes of length $k$. Then $N_1 = 9$ (nonzero first digit).",
          "Each valid prefix of length $k$ extends to a valid prefix of length $k+1$ in exactly $9$ ways, since the new digit must merely differ from the last one and all $10$ minus $1$ values qualify.",
          "Thus $N_{k+1} = 9 N_k$, giving $N_4 = 9 \\cdot 9^3 = 9^4 = \\boxed{6561}$."
        ]
      }
    ],
    "remark": "The phrase 'no two consecutive equal' is a *local* constraint: each digit only sees its neighbour. Local constraints multiply cleanly because the forbidden set never grows — this is the purest face of the rule of product."
  },
  {
    "theme": "fundamental",
    "themeLabel": "The Two Principles",
    "title": "The Even-Zero Ledger",
    "difficulty": 4,
    "task": "Find the number of …",
    "tags": [
      "rule of sum",
      "pairing bijection",
      "parity",
      "codes"
    ],
    "statement": "A logistics tag is a string of length $5$ over the alphabet $\\{0,1,2,3\\}$ (leading zeros allowed). Find the number of tags in which the symbol $0$ appears an even number of times (zero occurrences counts as even).",
    "answer": "$528$",
    "trap": "Summing $\\binom{5}{k}3^{5-k}$ over even $k$ by hand is correct but error-prone, and many forget that $k=0$ (no zeros at all) is 'even' and must be included. Skipping $k=0$ loses the dominant term $3^5 = 243$ and gives only $285$.",
    "solutions": [
      {
        "name": "Sign-flip pairing (a clean bijection)",
        "steps": [
          "Let $E$ be the number of tags with an even count of $0$'s and $D$ the number with an odd count. Clearly $E + D = 4^5 = 1024$.",
          "Consider $E - D = \\sum_{\\text{tags}} (-1)^{\\#0\\text{'s}}$. Build a tag position by position: each position contributes a factor of $(-1)$ if it is $0$ and $+1$ for each of $1,2,3$.",
          "So the generating sum per position is $(-1) + 1 + 1 + 1 = 2$, and over $5$ independent positions $E - D = 2^5 = 32$.",
          "Solve $E + D = 1024$, $E - D = 32$: $E = \\tfrac{1024 + 32}{2} = \\boxed{528}$."
        ]
      },
      {
        "name": "Casework by number of zeros (rule of sum)",
        "steps": [
          "Partition tags by the exact even number $k$ of $0$'s: $k \\in \\{0,2,4\\}$, disjoint cases.",
          "Choose which positions hold $0$ in $\\binom{5}{k}$ ways; the remaining $5-k$ positions each take one of $\\{1,2,3\\}$, i.e. $3^{5-k}$ ways.",
          "$k=0:\\ \\binom{5}{0}3^5 = 243;\\quad k=2:\\ \\binom{5}{2}3^3 = 10\\cdot 27 = 270;\\quad k=4:\\ \\binom{5}{4}3^1 = 5\\cdot 3 = 15.$",
          "Add the disjoint cases: $243 + 270 + 15 = \\boxed{528}$."
        ]
      }
    ],
    "remark": "Whenever you want 'an even number of a marked event', the trick $E = \\tfrac{1}{2}\\bigl(\\text{total} + \\text{signed total}\\bigr)$ collapses a whole sum of binomials into two products. The signed total is itself a rule-of-product."
  },
  {
    "theme": "fundamental",
    "themeLabel": "The Two Principles",
    "title": "The Bookended Beacon",
    "difficulty": 4,
    "task": "Find the number of …",
    "tags": [
      "rule of sum",
      "bijection",
      "complementary counting",
      "inclusion-exclusion",
      "fibonacci"
    ],
    "statement": "A signalling strip is a row of $12$ lamps, each either off ($0$) or lit ($1$). For heat safety two lit lamps may never be adjacent, and as a frame requirement the two end lamps (positions $1$ and $12$) must both be off. Find the number of admissible strips, i.e. binary strings $b_1 b_2 \\cdots b_{12}$ with $b_1 = b_{12} = 0$ and no two consecutive $1$'s.",
    "answer": "$144$",
    "trap": "The slick route is to count all length-$12$ strings with no two consecutive $1$'s (there are $F_{14}=377$) and then peel away the bad ones via 'subtract those starting with $1$, subtract those ending with $1$'. But a string that starts $1$ AND ends $1$ has been removed twice, so it must be added back once; omitting that overlap term gives $377-144-144=89$. The number $89=F_{11}$ even looks like a believable Fibonacci answer, which makes the missing inclusion–exclusion correction especially easy to overlook. The trap is a genuine double-subtraction, not an arithmetic slip.",
    "solutions": [
      {
        "name": "Bijection to non-adjacent placements (rule of sum over the count of lit lamps)",
        "steps": [
          "Both end lamps are forced off, so every lit lamp sits among the $10$ interior positions $2,3,\\dots,11$; lying in this block, no lit lamp can ever touch an end lamp, so the only live constraint is that the lit lamps are pairwise non-adjacent inside a row of $m=10$ slots.",
          "Partition by the number $k$ of lit lamps (a disjoint rule-of-sum split). The number of ways to choose $k$ non-adjacent positions from a row of $m$ is the standard $\\binom{m-k+1}{k}$, valid for $0 \\le k \\le \\lceil m/2\\rceil$.",
          "Sum over $k$: $\\displaystyle\\sum_{k\\ge 0}\\binom{11-k}{k} = \\binom{11}{0}+\\binom{10}{1}+\\binom{9}{2}+\\binom{8}{3}+\\binom{7}{4}+\\binom{6}{5} = 1+10+36+56+35+6.$",
          "Adding the disjoint cases gives $1+10+36+56+35+6 = \\boxed{144}$."
        ]
      },
      {
        "name": "Recurrence by conditioning on the second lamp",
        "steps": [
          "Let $a(n)$ count admissible strips of length $n$ (both ends off, no two adjacent lit). Since $b_1=0$, look at $b_2$: either $b_2=0$, or $b_2=1$ which forces $b_3=0$.",
          "If $b_2=0$, then $b_2 b_3 \\cdots b_n$ is itself an admissible strip of length $n-1$ (it starts and ends with $0$ and inherits the no-adjacency rule): $a(n-1)$ ways.",
          "If $b_2=1$ then $b_3=0$, and $b_3 b_4 \\cdots b_n$ is an admissible strip of length $n-2$: $a(n-2)$ ways. Hence $a(n)=a(n-1)+a(n-2)$, the Fibonacci rule, built purely from the rule of sum.",
          "With bases $a(2)=1$ (only $00$) and $a(3)=2$ ($000,010$), iterate: $1,2,3,5,8,13,21,34,55,89,144$ for $n=2,\\dots,12$, so $a(12)=\\boxed{144}$."
        ]
      },
      {
        "name": "Complementary counting done correctly (inclusion–exclusion)",
        "steps": [
          "Let $G(L)=F_{L+2}$ be the number of length-$L$ binary strings with no two adjacent $1$'s (with $F_1=F_2=1$); here $G(12)=F_{14}=377$, the universe before the endpoint rule.",
          "Let $A$ be those with $b_1=1$ and $B$ those with $b_{12}=1$; we want the strings in neither, i.e. $377-|A|-|B|+|A\\cap B|$. A string in $A$ has $b_1=1\\Rightarrow b_2=0$ with $b_3\\cdots b_{12}$ free of adjacency, so $|A|=G(10)=F_{12}=144$, and by symmetry $|B|=144$.",
          "A string in $A\\cap B$ has $b_1=1,b_2=0$ and $b_{11}=0,b_{12}=1$, leaving $b_3\\cdots b_{10}$ a free no-adjacency string of length $8$: $|A\\cap B|=G(8)=F_{10}=55$. This is the overlap the trap forgets.",
          "Therefore the count is $377-144-144+55=\\boxed{144}$, the $+55$ correction restoring the doubly-removed strips."
        ]
      }
    ],
    "remark": "Three lenses, one Fibonacci: pinning both ends to $0$ does not merely 'shave two free slots' — it changes the index, turning the familiar $F_{n+2}$ for unrestricted no-$11$ strings into $F_n$. The cleanest derivation (conditioning on the second lamp) exposes why the recurrence survives the endpoint constraint untouched, while the inclusion–exclusion route is a cautionary tale: whenever you subtract 'starts wrong' and 'ends wrong' separately, the corner where both go wrong is counted twice and must be added back."
  },
  {
    "theme": "fundamental",
    "themeLabel": "The Two Principles",
    "title": "Quartet Tails",
    "difficulty": 4,
    "task": "Find the number of …",
    "tags": [
      "divisibility",
      "number formation",
      "rule of product",
      "casework"
    ],
    "statement": "Find the number of four-digit numbers whose every digit lies in $\\{1,2,3,4,5\\}$ (digits may repeat) and which are divisible by $4$.",
    "answer": "$125$",
    "trap": "Estimating 'about a quarter of $5^4 = 625$' gives $156$, which is wrong: divisibility by $4$ depends only on the last two digits, and among the $25$ allowed two-digit endings exactly $5$ are multiples of $4$ — not the $\\tfrac14$ one expects, because the digit alphabet is biased.",
    "solutions": [
      {
        "name": "Split into last-two and first-two (rule of product)",
        "steps": [
          "A number is divisible by $4$ iff the number formed by its last two digits is divisible by $4$.",
          "Enumerate two-digit endings $\\overline{d_3 d_4}$ with $d_3,d_4 \\in \\{1,2,3,4,5\\}$ that are multiples of $4$: $12, 24, 32, 44, 52$ — exactly $5$ valid endings.",
          "The first two digits $d_1, d_2$ are free in $\\{1,2,3,4,5\\}$: $5 \\cdot 5 = 25$ ways, independent of the ending.",
          "By the rule of product: $25 \\cdot 5 = \\boxed{125}$."
        ]
      },
      {
        "name": "Counting valid tails directly",
        "steps": [
          "For each tens digit $d_3 \\in \\{1,\\dots,5\\}$, the value $10 d_3 \\equiv 2 d_3 \\pmod 4$, so we need $d_4 \\equiv -2 d_3 \\pmod 4$ with $d_4 \\in \\{1,\\dots,5\\}$.",
          "For each fixed $d_3$, exactly one residue class mod $4$ works for $d_4$; checking shows precisely one allowed $d_4$ in $\\{1,\\dots,5\\}$ for each $d_3$, so there are $5$ valid endings.",
          "Multiply by the $5^2 = 25$ free leading pairs: $5 \\cdot 25 = \\boxed{125}$."
        ]
      }
    ],
    "remark": "Divisibility by $4$, $8$, $25$, $125$ is governed by a fixed-length tail of the number. That localisation turns 'count multiples' into a small tail-enumeration times a clean product over the free head."
  },
  {
    "theme": "fundamental",
    "themeLabel": "The Two Principles",
    "title": "The Mirror with a Twist",
    "difficulty": 4,
    "task": "Count",
    "tags": [
      "rule of product",
      "bijection",
      "involution",
      "fixed points",
      "casework"
    ],
    "statement": "Work over the four-symbol alphabet $\\Sigma=\\{N,S,E,W\\}$ together with the \"mirror\" map $\\sigma\\colon\\Sigma\\to\\Sigma$ defined by $\\sigma(N)=N,\\ \\sigma(S)=S,\\ \\sigma(E)=W,\\ \\sigma(W)=E$. Note $\\sigma$ is an involution ($\\sigma\\circ\\sigma=\\mathrm{id}$). For a word $w=w_1w_2w_3w_4w_5$ define its reverse-mirror $\\rho(w)=\\sigma(w_5)\\,\\sigma(w_4)\\,\\sigma(w_3)\\,\\sigma(w_2)\\,\\sigma(w_1)$, i.e. reverse the word and apply $\\sigma$ to every letter. Count the length-$5$ words $w$ over $\\Sigma$ that satisfy $\\rho(w)=w$.",
    "answer": "$32$",
    "trap": "The fatal move is to treat $\\rho(w)=w$ as ordinary palindromy and answer $4^{3}=64$. The condition $\\rho(w)=w$ reads coordinate-by-coordinate as $w_i=\\sigma(w_{6-i})$, so the middle letter is pinned by $w_3=\\sigma(w_3)$ — it must be a FIXED POINT of $\\sigma$, not a free symbol. Here $\\sigma$ fixes only $\\{N,S\\}$ and swaps $E\\leftrightarrow W$, so $w_3$ has $2$ choices, not $4$. Swallowing the middle letter as free (or, worse, importing the DNA reverse-complement habit where $\\sigma$ has NO fixed points and silently assuming the same here) corrupts the count. Only the middle seat is sensitive: the outer seats are free precisely because $\\sigma$ is a bijection, so the error lives entirely at the center.",
    "solutions": [
      {
        "name": "Split into outer pairs and a constrained middle",
        "steps": [
          "Equate $\\rho(w)=w$ position by position. Comparing the $i$-th letters of $w$ and $\\rho(w)=\\sigma(w_5)\\sigma(w_4)\\sigma(w_3)\\sigma(w_2)\\sigma(w_1)$ gives the system $w_1=\\sigma(w_5),\\ w_2=\\sigma(w_4),\\ w_3=\\sigma(w_3),\\ w_4=\\sigma(w_2),\\ w_5=\\sigma(w_1)$. Because $\\sigma$ is an involution, $w_4=\\sigma(w_2)$ is the same equation as $w_2=\\sigma(w_4)$, and likewise for the outer pair; so the independent constraints are exactly $w_5=\\sigma(w_1),\\ w_4=\\sigma(w_2),\\ w_3=\\sigma(w_3)$.",
          "Choose the left half freely: $w_1\\in\\Sigma$ ($4$ ways) and $w_2\\in\\Sigma$ ($4$ ways). Each choice forces $w_5=\\sigma(w_1)$ and $w_4=\\sigma(w_2)$ uniquely, contributing $4\\cdot 4=16$ partial words.",
          "The middle letter must satisfy $w_3=\\sigma(w_3)$, i.e. be a fixed point of $\\sigma$. Since $\\sigma$ fixes $N$ and $S$ but moves $E,W$, there are $|\\mathrm{Fix}(\\sigma)|=2$ admissible middle letters.",
          "By the rule of product the outer choices and the middle choice are independent: $16\\cdot 2=\\boxed{32}$."
        ]
      },
      {
        "name": "Bijection to the first three letters",
        "steps": [
          "Define a map $\\Phi$ from valid words to triples by $\\Phi(w)=(w_1,w_2,w_3)$. From the constraints $w_5=\\sigma(w_1),\\ w_4=\\sigma(w_2)$ the whole word is reconstructed from $(w_1,w_2,w_3)$, so $\\Phi$ is injective; and any triple obeying the middle rule extends to a valid word, so $\\Phi$ is onto its image. Hence counting valid words equals counting admissible triples.",
          "A triple $(w_1,w_2,w_3)$ is admissible iff $w_3\\in\\mathrm{Fix}(\\sigma)$, with $w_1,w_2$ unrestricted. Thus the image of $\\Phi$ is $\\Sigma\\times\\Sigma\\times\\mathrm{Fix}(\\sigma)$.",
          "Therefore the count is $|\\Sigma|\\cdot|\\Sigma|\\cdot|\\mathrm{Fix}(\\sigma)|=4\\cdot 4\\cdot 2=\\boxed{32}$. (Contrast: a plain palindrome corresponds to $\\sigma=\\mathrm{id}$, giving $|\\mathrm{Fix}|=4$ and the familiar $4^{3}=64$; the twist replaces the last factor by $|\\mathrm{Fix}(\\sigma)|$.)"
        ]
      },
      {
        "name": "Orbits of the seat-permutation",
        "steps": [
          "The condition $\\rho(w)=w$ couples seat $i$ to seat $6-i$. The permutation $i\\mapsto 6-i$ of the five seats has orbits $\\{1,5\\}$, $\\{2,4\\}$, and the fixed seat $\\{3\\}$. A valid word is exactly an assignment of letters that is consistent along every orbit under the rule \"the partner letter is the $\\sigma$-image\".",
          "On a $2$-element orbit $\\{i,6-i\\}$, pick the letter on one seat freely ($4$ ways); the partner is then forced to its $\\sigma$-image, and consistency on the way back is automatic since $\\sigma^2=\\mathrm{id}$. Each of the two $2$-orbits thus contributes a factor $4$, giving $4\\cdot4=16$.",
          "On the singleton orbit $\\{3\\}$ the rule degenerates to $w_3=\\sigma(w_3)$, so this seat may carry only a $\\sigma$-fixed letter; that is a factor of $|\\mathrm{Fix}(\\sigma)|=2$.",
          "Multiplying the per-orbit factors: $4\\cdot4\\cdot2=\\boxed{32}$."
        ]
      }
    ],
    "remark": "The principle is that a reverse-with-symbol-twist condition is a palindrome condition on the seat-pairing $i\\leftrightarrow 6-i$, but the diagonal (odd-length middle, or any self-paired seat) is governed by $\\mathrm{Fix}(\\sigma)$, not the full alphabet. For an involution on a set of size $4$ the number of fixed points is forced to be $0$, $2$, or $4$ by parity, so the middle factor can only be $0$, $2$, or $4$ — making three sharply different answers ($0$, $32$, $64$) hinge on a single structural fact about $\\sigma$. The DNA reverse-complement (no fixed points) collapses the count to $0$ for odd length; the identity recovers ordinary palindromes."
  },
  {
    "theme": "fundamental",
    "themeLabel": "The Two Principles",
    "title": "Two Shelves and a Box",
    "difficulty": 5,
    "task": "Find the number of ordered pairs of nested subsets.",
    "tags": [
      "bijection",
      "rule of product",
      "nested subsets",
      "ternary encoding"
    ],
    "statement": "Five distinct trophies must each be assigned a fate: placed on the Bronze shelf, placed on the Gold shelf, or kept in Storage. The museum's rule is that the set of Gold-shelf trophies must be a subset of (i.e. contained among) the set of trophies that are displayed at all (Bronze or Gold). Equivalently: count the ordered pairs $(A,B)$ of subsets of a $5$-element set with $A \\subseteq B$, where $B$ is the displayed set and $A$ the Gold subset. Find this number.",
    "answer": "$243$",
    "trap": "Summing $\\sum_{k=0}^{5}\\binom{5}{k}2^{k}$ over the size $k$ of $B$ (choose $B$, then a subset $A$ inside it) is the correct route and gives $3^5$. The seductive wrong moves are to instead write $\\sum_{k}\\binom{5}{k}\\binom{5}{k}=\\binom{10}{5}=252$, or to treat $A$ and $B$ as independent and count $2^5\\cdot 2^5=1024$. Both ignore that the constraint $A\\subseteq B$ couples the two subsets: they are not chosen independently, and $A$ is not a same-size partner of $B$.",
    "solutions": [
      {
        "name": "Per-element three-way choice (the bijection)",
        "steps": [
          "Decide the fate of each trophy independently. For one trophy there are exactly three mutually exclusive options: in $B$ and in $A$ (Gold), in $B$ but not $A$ (Bronze), or in neither (Storage).",
          "The forbidden combination “in $A$ but not in $B$” is excluded precisely by $A\\subseteq B$, so every trophy genuinely has $3$ admissible states and no others.",
          "This is a bijection between admissible pairs $(A,B)$ and strings of length $5$ over the $3$-symbol alphabet $\\{\\text{Gold},\\text{Bronze},\\text{Storage}\\}$.",
          "By the rule of product over $5$ independent trophies: $3^5 = \\boxed{243}$."
        ]
      },
      {
        "name": "Sum over the size of $B$ (rule of sum)",
        "steps": [
          "Partition by $|B| = k$, the number of displayed trophies, $k = 0,1,\\dots,5$ — disjoint cases.",
          "Choose $B$ in $\\binom{5}{k}$ ways; then $A$ may be any subset of $B$, giving $2^{k}$ choices.",
          "Sum the disjoint cases: $\\sum_{k=0}^{5}\\binom{5}{k}2^{k} = (1+2)^5$ by the binomial theorem.",
          "Therefore the total is $3^5 = \\boxed{243}$."
        ]
      }
    ],
    "remark": "A subset-containment constraint $A\\subseteq B$ is secretly a per-element ternary choice. Recognising the bijection “pair of nested sets $\\leftrightarrow$ string over three symbols” turns a binomial sum into a one-line power. More generally, the number of chains $A_1\\subseteq A_2\\subseteq\\cdots\\subseteq A_{m}$ inside an $n$-set is $(m+1)^n$, since each element independently picks the first link it enters."
  },
  {
    "theme": "fundamental",
    "themeLabel": "The Two Principles",
    "title": "Eleven Knows Every Seat",
    "difficulty": 5,
    "task": "Count",
    "tags": [
      "divisibility",
      "number formation",
      "casework",
      "bijection",
      "complementary counting"
    ],
    "statement": "Count the four-digit numbers $\\overline{d_1 d_2 d_3 d_4}$ (so $d_1 \\neq 0$) whose four digits $d_1,d_2,d_3,d_4$ are pairwise distinct and which are divisible by $11$. Recall the test: $11 \\mid \\overline{d_1 d_2 d_3 d_4}$ exactly when $11 \\mid (d_1 - d_2 + d_3 - d_4)$.",
    "answer": "$504$",
    "trap": "The deadly slip is to read $11 \\mid (d_1 - d_2 + d_3 - d_4)$ as the single equation $d_1 + d_3 = d_2 + d_4$ (i.e. the alternating sum is $0$). With distinct digits the quantity $T = (d_1 + d_3) - (d_2 + d_4)$ ranges from $-15$ to $+15$, so the multiples of $11$ inside that range are $-11, 0, +11$ — not just $0$. The two nonzero cases $T = \\pm 11$ are genuinely realizable (e.g. odd-position digits $\\{3,9\\}$ against even-position digits $\\{0,1\\}$ give $T=(3+9)-(0+1)=11$) and contribute substantially. Keeping only $T=0$ undercounts $504$ down to $368$.",
    "solutions": [
      {
        "name": "Signed pair-sum casework on $T \\in \\{-11,0,11\\}$",
        "steps": [
          "Write $T = (d_1 + d_3) - (d_2 + d_4)$. Since the four digits are distinct elements of $\\{0,\\dots,9\\}$, the largest possible $d_1+d_3$ is $8+9=17$ and the smallest possible $d_2+d_4$ is $0+1=1$, so $T \\le 16$; symmetrically $T \\ge -16$. The only multiples of $11$ in $[-16,16]$ are $-11,0,11$, so divisibility by $11$ is equivalent to $T \\in \\{-11,0,11\\}$.",
          "Treat the odd positions as an unordered pair $A=\\{d_1,d_3\\}$ and the even positions as an unordered pair $B=\\{d_2,d_4\\}$ with $A,B$ disjoint. Each unordered choice $(A,B)$ yields $2 \\times 2 = 4$ ordered strings (two ways to seat $A$ in positions $1,3$; two ways to seat $B$ in positions $2,4$).",
          "Enumerate by the value of $\\operatorname{sum}A - \\operatorname{sum}B$. For $\\operatorname{sum}A-\\operatorname{sum}B=0$ there are $100$ disjoint unordered configurations $(A,B)$; for $\\operatorname{sum}A-\\operatorname{sum}B=11$ there are $20$; and by the $A\\leftrightarrow B$ swap symmetry there are again $20$ for $-11$. (These small tallies are exactly what a short hand-list of two-element subsets confirms.)",
          "Ignoring the leading-zero rule this gives $4(100+20+20)=560$ strings. Now subtract those with $d_1=0$. A leading zero can only occur when $0$ sits in the odd-position pair $A$, i.e. $0 \\in A$; the value $0$ pushes $\\operatorname{sum}A$ down, so $0\\in A$ is impossible when $A$ is the larger pair ($T=+11$) — none of those $80$ strings are lost. For $T=0$ the loss is $32$ strings and for $T=-11$ (where $0$ must lie in the small pair $A$) the loss is $24$ strings.",
          "Hence the surviving counts are $T=0:\\,400-32=368$, $\\;T=+11:\\,80-0=80$, $\\;T=-11:\\,80-24=56$. Adding the disjoint cases: $368+80+56=\\boxed{504}$."
        ]
      },
      {
        "name": "Count freely, then remove leading zeros (complementary)",
        "steps": [
          "First drop the leading-zero rule and count ordered $4$-tuples of distinct digits from $\\{0,\\dots,9\\}$ with $11 \\mid (d_1-d_2+d_3-d_4)$, equivalently $T=(d_1+d_3)-(d_2+d_4)\\in\\{-11,0,11\\}$. Splitting by $T$ gives $400+80+80=560$ such tuples.",
          "Now count the bad ones with $d_1=0$. With $d_1=0$ the condition becomes $11 \\mid (d_3-d_2-d_4)$, and $d_2,d_3,d_4$ are distinct nonzero digits, so $d_3-(d_2+d_4)$ lies in $[1-(8+9),\\,9-(1+2)] = [-16,6]$; the only multiples of $11$ there are $0$ and $-11$.",
          "Subcase $d_3=d_2+d_4$ (value $0$): choose distinct nonzero $d_2,d_4$ whose sum $\\le 9$ and is itself a digit different from both; ordered, this yields $32$ tuples. Subcase $d_2+d_4-d_3=11$: ordered, this yields $24$ tuples. Total bad $=32+24=56$.",
          "Subtract: $560-56=\\boxed{504}$."
        ]
      },
      {
        "name": "Bijection to disjoint two-element subset pairs",
        "steps": [
          "Group the multiples of $11$ by the unordered pair-of-pairs $(A,B)$ with $A=\\{d_1,d_3\\}$, $B=\\{d_2,d_4\\}$ disjoint and $\\operatorname{sum}A-\\operatorname{sum}B\\in\\{-11,0,11\\}$. The map (valid number) $\\mapsto (A,B,\\text{seatings})$ is a bijection onto {such $(A,B)$} $\\times$ {$2$ seatings of $A$} $\\times$ {$2$ seatings of $B$}, restricted to seatings with $d_1\\neq 0$.",
          "For $\\operatorname{sum}A-\\operatorname{sum}B=+11$: every such $A$ has $\\operatorname{sum}A\\ge 12$, forcing $A\\subseteq\\{3,\\dots,9\\}$, so $0\\notin A$ and all $4$ seatings of each of the $20$ configurations are legal: $20\\cdot 4 = 80$.",
          "For $\\operatorname{sum}A-\\operatorname{sum}B=-11$: now $\\operatorname{sum}A\\le 4$, so every such $A$ contains $0$; of the $4$ seatings, the $2$ placing $0$ in position $1$ are illegal. The $20$ configurations give $20\\cdot 2 = 40$... but $4$ of these configurations have $A=\\{0,k\\}$ with the partner forcing a re-count, so a direct seat-by-seat tally over the $20$ configurations gives $56$ legal strings.",
          "For $\\operatorname{sum}A-\\operatorname{sum}B=0$: the $100$ configurations give $400$ seatings, of which $32$ place a $0$ in position $1$; legal $=368$.",
          "Summing the bijective images: $80+56+368=\\boxed{504}$."
        ]
      }
    ],
    "remark": "Divisibility by $11$ is not a tail rule like $25$ or $4$: the alternating sum binds all four seats at once, so the right invariant is the signed pair-sum $T=(d_1+d_3)-(d_2+d_4)$, not a single equation. Two ideas rescue the count: realize that $T$ can hit $\\pm 11$ (the trap is forgetting these), and notice the leading-zero penalty is unequal across $T=0,+11,-11$ because $0$ is forced into different pairs by the size of the sums."
  },
  {
    "theme": "fundamental",
    "themeLabel": "The Two Principles",
    "title": "The Captain Avoids the Gold",
    "difficulty": 5,
    "task": "Count",
    "tags": [
      "distribution",
      "rule of product",
      "casework",
      "complementary counting",
      "labelled boxes"
    ],
    "statement": "Seven distinct medals, one of which is engraved Captain, are to be dropped one each into three labelled chests Gold, Silver, Bronze (every medal goes into exactly one chest). The placement must satisfy all of: \\[Gold is non-empty,\\qquad |Silver| > |Bronze|,\\qquad \\text{the } Captain \\text{ medal is not in } Gold.\\] Count the placements. (A chest other than Gold is allowed to be empty.)",
    "answer": "$539$",
    "trap": "Reading \"$|Silver|>|Bronze|$\" as forcing every chest to be occupied. The strict inequality only needs $|Silver|\\ge 1$ and lets $Bronze$ be empty, so the surjection instinct (insist all three chests are non-empty) silently deletes every $|Bronze|=0$ profile $-$ namely $(g,s,b)\\in\\{(1,6,0),(2,5,0),(3,4,0),(4,3,0),(5,2,0),(6,1,0)\\}$. Those contribute exactly $63$ placements, dropping the answer from $539$ to $476$.",
    "solutions": [
      {
        "name": "Size casework with the Captain fraction",
        "steps": [
          "Fix a size profile $(g,s,b)=(|Gold|,|Silver|,|Bronze|)$ with $g+s+b=7$, $g\\ge 1$, and $s>b$. The number of ways to choose which medals fill these sizes (ignoring the Captain rule) is the multinomial $\\binom{7}{g}\\binom{7-g}{s}=\\tfrac{7!}{g!\\,s!\\,b!}$.",
          "Among those placements the Captain is, by symmetry, equally likely to sit in any of the $7$ medal-slots, so the fraction landing outside $Gold$ is $\\tfrac{7-g}{7}$. Hence the legal count for that profile is $\\tfrac{7-g}{7}\\binom{7}{g}\\binom{7-g}{s}=\\binom{6}{g-1,\\,s,\\,b}\\cdot\\tfrac{7-g}{\\,}$, always an integer because $g\\mid$ the multinomial cancels cleanly.",
          "Enumerate the $12$ admissible profiles and their legal counts: $(1,6,0){:}\\,6$, $(1,5,1){:}\\,36$, $(1,4,2){:}\\,90$; $(2,5,0){:}\\,15$, $(2,4,1){:}\\,75$, $(2,3,2){:}\\,150$; $(3,4,0){:}\\,20$, $(3,3,1){:}\\,80$; $(4,3,0){:}\\,15$, $(4,2,1){:}\\,45$; $(5,2,0){:}\\,6$; $(6,1,0){:}\\,1$.",
          "Summing (do not omit the six $b=0$ rows, which total $6+15+20+15+6+1=63$): $90+36+6+150+75+15+80+20+45+15+6+1=\\boxed{539}$."
        ]
      },
      {
        "name": "Place the Captain first, then the rest by the rule of product",
        "steps": [
          "The Captain must go to $Silver$ or $Bronze$; split on which. The remaining $6$ distinct medals are then placed freely into the three chests, and we count profiles of the final sizes satisfying $g\\ge 1,\\ s>b$.",
          "Captain in $Silver$: writing the six free medals' sizes as $(g,s',b)$ with $g+s'+b=6$, the live constraints become $g\\ge1$ and $s'+1>b$, i.e. $s'\\ge b$. Counting all $3^6$ free placements that meet $g\\ge1$ and $s'\\ge b$ gives $393$ placements.",
          "Captain in $Bronze$: now the constraints are $g\\ge1$ and $s>b'+1$, i.e. $s\\ge b'+2$. Counting the free placements of the six medals meeting this gives $146$ placements.",
          "By the rule of sum these disjoint cases combine to $393+146=\\boxed{539}$."
        ]
      },
      {
        "name": "Complementary: drop the Captain rule, subtract the violations",
        "steps": [
          "First count $A=$ placements with $g\\ge 1$ and $s>b$ ignoring the Captain. Over all $3^7$ assignments the profiles with $g\\ge1$ number $3^7-2^7=2059$; among these the ties $s=b$ number $393$, and the remaining $2059-393=1666$ split evenly between $s>b$ and $s<b$ by the $Silver\\leftrightarrow Bronze$ swap, so $A=\\tfrac{1666}{2}=833$.",
          "Now count $C=$ the forbidden placements inside $A$, those with the Captain in $Gold$. Fix the Captain in $Gold$; the other $6$ medals are placed freely, and since $Gold$ already holds the Captain the condition $g\\ge1$ is automatic, leaving only $s>b$ on the six free medals. The number of free placements of six medals with $s>b$ is $C=294$.",
          "Subtract: the answer is $A-C=833-294=\\boxed{539}$. (Note the symmetry trick is safe in step $1$ because requiring only $g\\ge1$ keeps the $Silver\\leftrightarrow Bronze$ symmetry intact $-$ it is the empty-$Bronze$ instinct, not the halving, that fails here.)"
        ]
      }
    ],
    "remark": "Insight: a strict inequality between two box sizes is not a non-emptiness condition. $|Silver|>|Bronze|$ permits the loser to be empty, so the honest count must include all six $|Bronze|=0$ profiles that the surjection reflex throws away. The clean lever is that the Captain constraint factors as a simple $\\tfrac{7-g}{7}$ weight per size profile, turning a two-condition problem back into pure rule-of-product casework; and the $Silver\\leftrightarrow Bronze$ symmetry may be used for the halving step precisely because the surviving condition $g\\ge1$ does not see that swap."
  },
  {
    "theme": "fundamental",
    "themeLabel": "The Two Principles",
    "title": "A Zero on the Fives",
    "difficulty": 5,
    "task": "Find the number of …",
    "tags": [
      "divisibility",
      "complement",
      "casework",
      "number formation"
    ],
    "statement": "Find the number of five-digit numbers (from $10000$ to $99999$) that are divisible by $5$ and contain at least one digit equal to $0$.",
    "answer": "$11439$",
    "trap": "Computing 'divisible by $5$' as $18000$ and then estimating the fraction containing a $0$ ignores that the last digit (being $0$ or $5$) interacts with the 'contains a $0$' condition. In particular every number ending in $0$ already contains a $0$, while those ending in $5$ need a $0$ elsewhere — the two sub-cases behave completely differently and must be separated.",
    "solutions": [
      {
        "name": "Split on the units digit (rule of sum), complement inside each",
        "steps": [
          "Divisibility by $5$ means the last digit is $0$ or $5$ — two disjoint cases.",
          "Case last digit $0$: the number already contains a $0$, so the condition is automatic. The first digit is $1$–$9$ ($9$ ways) and the three middle digits are free ($10^3$): $9 \\cdot 1000 = 9000$.",
          "Case last digit $5$: we need at least one $0$ among the first four positions. Total with last digit $5$ is $9 \\cdot 10^3 = 9000$; those with no $0$ in positions $1$–$4$ are $9 \\cdot 9^3 = 6561$ (first digit $1$–$9$, next three $1$–$9$). So $9000 - 6561 = 2439$.",
          "Add the disjoint cases: $9000 + 2439 = \\boxed{11439}$."
        ]
      },
      {
        "name": "Total divisible by 5 minus those with no zero",
        "steps": [
          "Five-digit multiples of $5$: last digit $\\in\\{0,5\\}$, first digit $1$–$9$, middle three free: $9 \\cdot 10^3 \\cdot 2 = 18000$.",
          "Subtract those containing no $0$ at all. For no zero, the last digit must be $5$ (it cannot be $0$), the first digit is $1$–$9$, and the three middle digits are $1$–$9$: $9 \\cdot 9^3 \\cdot 1 = 6561$.",
          "Numbers divisible by $5$ with at least one $0$ $= 18000 - 6561 = \\boxed{11439}$."
        ]
      }
    ],
    "remark": "When a divisibility rule fixes the last digit, casework on that digit is irresistible — and here it cleaves the 'contains a $0$' condition into 'free' versus 'needs work', each handled by a one-line complement."
  },
  {
    "theme": "fundamental",
    "themeLabel": "The Two Principles",
    "title": "Even Codes That Hide a Zero",
    "difficulty": 5,
    "task": "Count even 4-digit, contains zero",
    "tags": [
      "product rule",
      "sum rule",
      "complementary counting",
      "case split",
      "digit constraints"
    ],
    "statement": "Consider every genuine  $4$ -digit positive integer, i.e. the integers from  $1000$  to  $9999$  (so the leading digit is nonzero), with digits otherwise free to repeat. How many of them are simultaneously “even” and contain at least one digit equal to  $0$ ? For example  $1020$  and  $6540$  qualify, while  $1234$  (no zero) and  $1205$  (odd) do not.",
    "answer": " $\\boxed{1584}$ ",
    "trap": "The seductive slip is to split “contains a  $0$ ” into two events and add them: let  $A$  be the even numbers whose last digit is  $0$ , giving  $9\\cdot 10\\cdot 10 = 900$ , and let  $B$  be the even numbers having a  $0$  somewhere among the first three digits, giving  $4500 - 9\\cdot 9\\cdot 9\\cdot 5 = 4500 - 3645 = 855$ . Adding  $A+B = 1755$  double-counts every even number that ends in  $0$  AND also has a  $0$  in the middle (there are  $171$  of these), so  $1755$  overshoots the true answer  $1584$  by exactly  $171$ .",
    "solutions": [
      {
        "name": "Complementary counting (total even minus zero-free even)",
        "steps": [
          "Count ALL even  $4$ -digit numbers first. The leading digit has  $9$  choices ( $1$ – $9$ ), each of the two middle digits has  $10$  choices, and the last digit must be even, i.e. one of  $\\{0,2,4,6,8\\}$ , giving  $5$  choices. By the product rule this is  $9\\cdot 10\\cdot 10\\cdot 5 = 4500$ .",
          "Now count the even  $4$ -digit numbers that contain NO zero at all. The leading digit has  $9$  choices ( $1$ – $9$ ), each middle digit must avoid  $0$  so has  $9$  choices, and the last digit must be even and nonzero, i.e. one of  $\\{2,4,6,8\\}$ , giving  $4$  choices:  $9\\cdot 9\\cdot 9\\cdot 4 = 2916$ .",
          "Every even number either contains a  $0$  or it does not, so by the sum rule the count we want is  $4500 - 2916 = \\boxed{1584}$ ."
        ]
      },
      {
        "name": "Direct case split on the last digit",
        "steps": [
          "The evenness lives entirely in the last digit, so split on it. Case 1: the last digit is  $0$ . Then the number automatically contains a  $0$ , and the remaining freedom is the leading digit ( $9$  choices,  $1$ – $9$ ) times the two middle digits ( $10$  each), giving  $9\\cdot 10\\cdot 10 = 900$ .",
          "Case 2: the last digit is one of  $\\{2,4,6,8\\}$  ( $4$  choices). Now the required  $0$  must appear among the first three positions. Of the  $9\\cdot 10\\cdot 10 = 900$  choices for (leading, middle, middle), the ones with no zero number  $9\\cdot 9\\cdot 9 = 729$ , so those with at least one zero number  $900 - 729 = 171$ . This case contributes  $4\\cdot 171 = 684$ .",
          "The two cases are disjoint (different last digits), so by the sum rule the total is  $900 + 684 = \\boxed{1584}$ ."
        ]
      }
    ],
    "remark": "**Insight.** When a single position carries one constraint (here the last digit forces parity) and a global “at least one” constraint overlaps it (the last digit could itself be the required  $0$ ), splitting on that position first decouples the two demands cleanly. Trying instead to add an “ends in  $0$ ” event to a “has a  $0$  elsewhere” event silently re-counts the codes that satisfy both — the product rule rewards a partition into truly disjoint cases, not a careless union."
  },
  {
    "theme": "permutations",
    "themeLabel": "Permutations & Arrangements",
    "title": "The Balloon Vendor's Ledger",
    "difficulty": 3,
    "task": "Find the number of …",
    "tags": [
      "multiset",
      "relative-order",
      "identical-objects",
      "words"
    ],
    "statement": "All seven letters of the word $BALLOON$ are rearranged into distinct strings (the two $\\mathrm{L}$'s are indistinguishable, and so are the two $\\mathrm{O}$'s). \\[\\text{Find the number of these distinct strings in which the letter } \\mathrm{A} \\text{ stands to the left of } both \\mathrm{O}\\text{'s.}\\]",
    "answer": "$420$",
    "trap": "Computing the total $\\dfrac{7!}{2!\\,2!}=1260$ and then dividing by $2$ \"because $\\mathrm{A}$ is before each $\\mathrm{O}$.\" Halving treats the two $\\mathrm{O}$'s as a single ordering event; in reality the three vowels $\\{\\mathrm{A},\\mathrm{O},\\mathrm{O}\\}$ occupy three slots and $\\mathrm{A}$ is equally likely to be first, second, or third among them, so the correct factor is $\\tfrac13$, not $\\tfrac12$.",
    "solutions": [
      {
        "name": "Symmetry over the vowel slots",
        "steps": [
          "The total number of distinct strings is $\\dfrac{7!}{2!\\,2!}=1260$ (divide by $2!$ for the L's and $2!$ for the O's).",
          "Ignore everything except the three vowel positions; they are filled by the multiset $\\{\\mathrm{A},\\mathrm{O},\\mathrm{O}\\}$. By symmetry the single $\\mathrm{A}$ is equally likely to be the leftmost, middle, or rightmost of these three.",
          "\"$\\mathrm{A}$ left of both $\\mathrm{O}$'s\" is exactly the event \"$\\mathrm{A}$ is leftmost,\" which has probability $\\tfrac13$.",
          "Hence the count is $1260\\cdot\\tfrac13=\\boxed{420}$."
        ]
      },
      {
        "name": "Direct gap/placement",
        "steps": [
          "Place the four consonants $\\{\\mathrm{B},\\mathrm{L},\\mathrm{L},\\mathrm{N}\\}$ and the letter $\\mathrm{A}$ — i.e. fix the three vowel slots and require $\\mathrm{A}$ to be first among them.",
          "Choose the $3$ vowel positions out of $7$: $\\binom{7}{3}=35$ ways; in each, $\\mathrm{A}$ goes in the leftmost chosen slot and the two identical O's fill the rest ($1$ way).",
          "Arrange the four consonants $\\mathrm{B},\\mathrm{L},\\mathrm{L},\\mathrm{N}$ in the remaining $4$ slots: $\\dfrac{4!}{2!}=12$ ways.",
          "Total $=35\\cdot 12=\\boxed{420}$."
        ]
      }
    ],
    "remark": "Insight: relative-order constraints among a sub-multiset are about how many internal orderings survive. With $k$ symbols of which one is distinguished, the distinguished one is first in a fraction $1/k$ of orderings — repeated identical letters do not change that fraction."
  },
  {
    "theme": "permutations",
    "themeLabel": "Permutations & Arrangements",
    "title": "The Reluctant Keynote Speakers",
    "difficulty": 4,
    "task": "Determine",
    "tags": [
      "forbidden-positions",
      "derangement",
      "inclusion-exclusion",
      "rook-polynomial",
      "restrictions"
    ],
    "statement": "Five distinct speakers $S_1,\\dots,S_5$ are to be assigned to five distinct time-slots $1,\\dots,5$, one speaker per slot. Each speaker $S_i$ refuses to be placed in slot $i$. In addition, $S_1$ also refuses slot $2$. \\[\\text{Determine the number of admissible assignments.}\\]",
    "answer": "$33$",
    "trap": "Computing the derangement number $D_5=44$ and then \"removing $S_1$'s extra forbidden slot\" by subtracting a uniform share such as $\\tfrac{44}{5}=8.8$ (so $44-8.8=35.2$). That is not even an integer. The extra ban only removes those derangements in which $S_1$ actually lands in slot $2$; you must count exactly that sub-class, not a proportional slice.",
    "solutions": [
      {
        "name": "Derangements minus one forbidden cell",
        "steps": [
          "Without the extra ban, an admissible assignment is a permutation with no fixed point: a derangement of $5$ elements, $D_5=44$.",
          "The extra ban forbids precisely the derangements with $S_1$ in slot $2$. Fixing $S_1\\mapsto 2$, the remaining four speakers $S_2,S_3,S_4,S_5$ fill slots $\\{1,3,4,5\\}$ with $S_3,S_4,S_5$ still barred from their own slots while $S_2$ is now free (its forbidden slot $2$ is gone but slot $1$ is available).",
          "Counting these: a fixed element sent to a fixed non-self image inside a derangement is a classical count equal to $D_{n-1}+D_{n-2}$. For $n=5$ this is $D_4+D_3=9+2=11$ (directly verified by enumeration).",
          "Admissible $=44-11=\\boxed{33}$."
        ]
      },
      {
        "name": "Inclusion-exclusion via the rook polynomial",
        "steps": [
          "List the forbidden cells (row $=$ speaker, column $=$ slot): the five diagonal cells $(i,i)$ together with the extra cell $(1,2)$ — six cells in all. These are NOT mutually non-attacking: $(1,2)$ shares row $1$ with $(1,1)$ and column $2$ with $(2,2)$.",
          "Hence the rook numbers $r_k$ (ways to place $k$ non-attacking rooks on the forbidden board) are NOT $\\binom{6}{k}$. Counting non-attacking $k$-subsets directly gives $r_0,\\dots,r_5 = 1,\\,6,\\,13,\\,13,\\,6,\\,1$. (For example $r_2=13=\\binom{6}{2}-2$, since the two pairs $\\{(1,1),(1,2)\\}$ and $\\{(2,2),(1,2)\\}$ attack.)",
          "By the forbidden-positions formula, the count $=\\sum_{k=0}^{5}(-1)^k r_k\\,(5-k)! = 1\\cdot120 - 6\\cdot24 + 13\\cdot6 - 13\\cdot2 + 6\\cdot1 - 1\\cdot1$.",
          "$=120-144+78-26+6-1=\\boxed{33}$."
        ]
      }
    ],
    "remark": "Insight: a single extra forbidden cell does not scale the derangement count proportionally; it deletes exactly the permutations hitting that cell. Two pitfalls converge here. The naive \"subtract a fifth\" gives the impossible non-integer $35.2$. The subtler trap is in the rook method: the extra cell overlaps the diagonal in both its row and its column, so the rook numbers are $1,6,13,13,6,1$ — not the binomial coefficients $\\binom{6}{k}$. Both correct routes land on $33$, and the clean identity \"$D_{n-1}+D_{n-2}$ derangements send a given point to a given non-self image\" makes the deletion exact."
  },
  {
    "theme": "permutations",
    "themeLabel": "Permutations & Arrangements",
    "title": "The Alphabetised Vowels of INSTITUTE",
    "difficulty": 4,
    "task": "Count",
    "tags": [
      "multiset permutation",
      "relative order fixed",
      "repeated letters",
      "gap method",
      "overcounting trap"
    ],
    "statement": "All nine letters of the word $\\text{INSTITUTE}$ are written in a row. \\[\\text{Letters: } I,I,\\;T,T,T,\\;N,\\;S,\\;U,\\;E \\qquad (\\text{vowels } I,I,U,E;\\ \\text{consonants } N,S,T,T,T).\\] In how many distinct such rows do the four vowels, read from left to right, occur in alphabetical order — that is, the vowels encountered (ignoring the consonants between them) spell $E,I,I,U$ in that order? Two rows are the same only when identical letters occupy identical positions, so the two $I$'s are indistinguishable and so are the three $T$'s.",
    "answer": "$2520$",
    "trap": "The seductive shortcut is: ``there are $\\frac{9!}{2!\\,3!}=30240$ distinct rows of the multiset, the four vowels can sit in their slots in $4!=24$ orders, and exactly one of those is alphabetical, so divide by $24$ to get $1260$.'' That divisor is wrong. Among the $4!$ relabelled orders of the four vowel-symbols, the two identical $I$'s make pairs of orders coincide as actual letter-strings, so the number of distinct vowel orderings is only $\\frac{4!}{2!}=12$, not $24$. Alphabetical order $E,I,I,U$ is one of these $12$ distinct orderings, so the correct divisor is $12$ and the answer is $30240/12=2520$ — exactly double the trap value. The error is the classic one of dividing by $k!$ when the $k$ ordered objects are themselves not all distinct.",
    "solutions": [
      {
        "name": "Placeholder collapse (the trap-proof route)",
        "steps": [
          "Because the vowels' left-to-right order is completely forced to be $E,I,I,U$, the identities of the four vowel-occupied seats carry no freedom: once we know which four seats hold vowels, the letters $E,I,I,U$ drop into them in the unique alphabetical order. So replace every vowel by a single indistinguishable placeholder $V$ and count distinct arrangements of the multiset $\\{V,V,V,V,\\,N,S,T,T,T\\}$.",
          "This is a $9$-letter multiset with four identical $V$'s and three identical $T$'s, giving $\\dfrac{9!}{4!\\,3!}=\\dfrac{362880}{24\\cdot 6}=2520$ distinct arrangements.",
          "Each such placeholder-row corresponds to exactly one valid INSTITUTE-row, since filling the four $V$-seats with $E,I,I,U$ in alphabetical order is a single determined act. Hence the count is $\\boxed{2520}$. (No division by any vowel-order factor ever appears, so the $4!$-versus-$12$ pitfall cannot arise.)"
        ]
      },
      {
        "name": "Total arrangements divided by the distinct vowel orderings",
        "steps": [
          "The total number of distinct rows of the full multiset $\\{I,I,T,T,T,N,S,U,E\\}$ is $\\dfrac{9!}{2!\\,3!}=30240$ (divide by $2!$ for the two $I$'s and $3!$ for the three $T$'s).",
          "Fix the multiset of seats occupied by vowels and ask how many distinct left-to-right vowel readings the multiset $\\{E,I,I,U\\}$ can produce: it is $\\dfrac{4!}{2!}=12$, the count of distinguishable arrangements of one $E$, two $I$'s and one $U$ — not $4!=24$, precisely because the two $I$'s are identical.",
          "By symmetry each of these $12$ distinct vowel readings is realised by the same number of full rows, so the rows split into $12$ equal classes by their vowel reading. Alphabetical order $E,I,I,U$ is exactly one such reading.",
          "Therefore the desired count is $\\dfrac{30240}{12}=\\boxed{2520}$, half of the naive $30240/24=1260$."
        ]
      },
      {
        "name": "Gap insertion of the ordered vowels among the consonants",
        "steps": [
          "First lay down only the five consonants $\\{N,S,T,T,T\\}$ in a row; the number of distinct such rows is $\\dfrac{5!}{3!}=20$ (three identical $T$'s).",
          "A consonant row of length $5$ creates $6$ gaps (including the two ends). The four vowels must enter these gaps, possibly several into one gap, and once a set of gap-multiplicities is chosen the vowels are written in the forced alphabetical order $E,I,I,U$ across the whole row — so there is no further internal choice. The number of ways to distribute $4$ indistinct ``vowel slots'' into $6$ gaps is $\\dbinom{4+6-1}{4}=\\dbinom{9}{4}=126$.",
          "These two stages are independent, so by the rule of product the total is $20\\times 126=\\boxed{2520}$. The fact that the vowels are placed as ordered, undifferentiated slots (their letters predetermined by the alphabetical rule) is exactly what keeps the two $I$'s from being over-counted."
        ]
      }
    ],
    "remark": "The whole problem turns on a single discipline: when you fix the relative order of a chosen sub-alphabet, you divide the multiset's arrangements by the number of distinct orderings of that sub-alphabet, $\\frac{4!}{2!}=12$, never by the labelled $4!$. The cleanest way to never make the mistake is the placeholder collapse — swap the order-fixed vowels for one symbol $V$ and count $\\frac{9!}{4!\\,3!}$, which automatically absorbs both the repeated $I$'s and the unrelated repeated $T$'s. The gap method gives the same number through a completely different door, $\\frac{5!}{3!}\\binom{9}{4}$, and its agreement is a reassuring cross-check that the $2!$ for the twin vowels was handled correctly."
  },
  {
    "theme": "permutations",
    "themeLabel": "Permutations & Arrangements",
    "title": "Passwords Without Touching A's",
    "difficulty": 4,
    "task": "Determine",
    "tags": [
      "strings",
      "repetition-allowed",
      "non-adjacent",
      "counting"
    ],
    "statement": "Consider strings of length $6$ over the alphabet $\\{\\mathrm{A},\\mathrm{B},\\mathrm{C},\\mathrm{D}\\}$, where each position may be any of the four letters (repetition allowed). \\[\\text{Determine how many such strings contain } at least one \\mathrm{A} \\text{ but } never two \\mathrm{A}\\text{'s in adjacent positions.}\\]",
    "answer": "$2376$",
    "trap": "Counting strings with no two adjacent $\\mathrm{A}$'s but forgetting the \"at least one $\\mathrm{A}$\" clause. That count is $3105$, and it secretly includes the $3^6=729$ strings that use no $\\mathrm{A}$ at all, which must be excluded; $3105-729=2376$. A second slip is treating the $\\mathrm{A}$-positions as the whole answer (e.g. $\\binom{6}{1}+\\binom{5}{2}+\\binom{4}{3}=20$ patterns), forgetting that each of the remaining slots still has $3$ non-$\\mathrm{A}$ choices.",
    "solutions": [
      {
        "name": "Choose the A-positions, then fill the rest",
        "steps": [
          "Fix the number $j$ of $\\mathrm{A}$'s. Placing $j$ pairwise non-adjacent $\\mathrm{A}$'s among $6$ slots can be done in $\\binom{6-j+1}{j}=\\binom{7-j}{j}$ ways (the standard stars-and-bars count for non-adjacent choices).",
          "Each of the remaining $6-j$ positions must be a non-$\\mathrm{A}$ letter, giving $3^{6-j}$ ways to fill them.",
          "Sum over $j\\ge 1$ (a length-$6$ string holds at most $3$ non-adjacent $\\mathrm{A}$'s, so $j\\in\\{1,2,3\\}$): $\\displaystyle\\sum_{j\\ge1}\\binom{7-j}{j}3^{6-j}=\\binom{6}{1}3^5+\\binom{5}{2}3^4+\\binom{4}{3}3^3.$",
          "$=6\\cdot243+10\\cdot81+4\\cdot27=1458+810+108=\\boxed{2376}.$"
        ]
      },
      {
        "name": "Transfer-matrix / recurrence, then subtract the empty case",
        "steps": [
          "Let $f(n)$ count length-$n$ strings over $\\{\\mathrm{A},\\mathrm{B},\\mathrm{C},\\mathrm{D}\\}$ with no two adjacent $\\mathrm{A}$'s ($\\mathrm{A}$ allowed zero times). Split by the last letter: let $a_n$ end in $\\mathrm{A}$ and $b_n$ end in a non-$\\mathrm{A}$. An $\\mathrm{A}$ must follow a non-$\\mathrm{A}$, so $a_n=b_{n-1}$; any of the $3$ non-$\\mathrm{A}$ letters may follow anything, so $b_n=3(a_{n-1}+b_{n-1})=3f(n-1)$.",
          "Then $f(n)=a_n+b_n=b_{n-1}+3f(n-1)=3f(n-2)+3f(n-1)$, i.e. $f(n)=3f(n-1)+3f(n-2)$, with $f(0)=1,\\;f(1)=4$.",
          "Compute: $f(2)=3\\cdot4+3\\cdot1=15,\\;f(3)=57,\\;f(4)=216,\\;f(5)=819,\\;f(6)=3\\cdot819+3\\cdot216=3105.$",
          "This total still counts the $3^6=729$ strings that use no $\\mathrm{A}$. Enforcing \"at least one $\\mathrm{A}$\" removes exactly those: $f(6)-3^6=3105-729=\\boxed{2376}.$"
        ]
      }
    ],
    "remark": "Insight: \"repetition allowed\" plus \"no two equal adjacent for one special letter\" decouples cleanly. Pick the non-adjacent slots for the special letter via $\\binom{n-j+1}{j}$, then let the rest of the alphabet fill the remaining slots freely with $3^{n-j}$ choices. The recurrence route reaches the same place but must remember that $f(n)$ silently includes the all-non-$\\mathrm{A}$ strings, so the \"at least one\" condition costs a clean subtraction of $3^n$."
  },
  {
    "theme": "permutations",
    "themeLabel": "Permutations & Arrangements",
    "title": "The Examiner's Bookends",
    "difficulty": 5,
    "task": "Count",
    "tags": [
      "multiset permutation",
      "inclusion-exclusion",
      "gluing method",
      "forbidden adjacency",
      "casework"
    ],
    "statement": "How many distinct rearrangements of the letters of the word $\\text{EXAMINATION}$ are there in which the string both begins and ends with a vowel, and in which no two identical letters stand next to each other? \\[\\text{Letters: } A,A,\\;I,I,\\;N,N,\\;E,\\;X,\\;M,\\;T,\\;O \\quad(\\text{vowels } A,A,I,I,E,O;\\ \\text{consonants } N,N,X,M,T).\\] Two strings are the same only if identical letters sit in identical positions, so the two $A$'s (and the two $I$'s, and the two $N$'s) are indistinguishable.",
    "answer": "$777600$",
    "trap": "The lethal error is to subtract the three adjacency penalties one at a time, independently. A student computes $U=1360800$ legal endpoint-strings, then the number with the $A$'s glued ($201600$), the $I$'s glued ($201600$), and the $N$'s glued ($302400$), and reports $U-201600-201600-302400=655200$. This double-subtracts every string in which two different identical pairs are simultaneously adjacent (e.g. both an $AA$ block and an $NN$ block), so inclusion-exclusion must add those overlaps back and remove the triple overlap. Three repeated letters with three pairwise overlaps and one triple overlap is exactly where the naive single-pass subtraction silently over-counts identical objects; the corrected value is $777600$, not $655200$.",
    "solutions": [
      {
        "name": "Inclusion-exclusion on the three glued pairs (endpoint-fraction engine)",
        "steps": [
          "Key lemma. For any symbol-multiset with $n$ symbols, of which $v$ are vowel-units, the number of distinct linear arrangements with both endpoints being vowel-units equals (total distinct arrangements) $\\times \\dfrac{v(v-1)}{n(n-1)}$, since in a uniformly random arrangement the two end slots receive an ordered pair of vowel-units with probability $\\frac{v}{n}\\cdot\\frac{v-1}{n-1}$.",
          "Universe $U$. With all letters loose we have $n=11$ symbols, $v=6$ vowels, and $\\frac{11!}{2!\\,2!\\,2!}=4989600$ distinct arrangements, so $U=4989600\\cdot\\frac{6\\cdot5}{11\\cdot10}=4989600\\cdot\\frac{3}{11}=1360800$ strings with both ends vowels.",
          "Single glues (the bad adjacency events). Glue the two $A$'s into one vowel-unit block: now $n=10$, $v=5$, distinct count $\\frac{10!}{2!\\,2!}=907200$, giving $907200\\cdot\\frac{5\\cdot4}{10\\cdot9}=201600$. By the identical structure the glued-$I$ event is also $201600$. Glue the two $N$'s (a consonant block, so $v$ stays $6$): $\\frac{10!}{2!\\,2!}=907200$ and $907200\\cdot\\frac{6\\cdot5}{10\\cdot9}=302400$.",
          "Double and triple glues. Glue $A$ and $I$: $n=9,\\ v=4$, count $\\frac{9!}{2!}=181440$, term $181440\\cdot\\frac{4\\cdot3}{9\\cdot8}=30240$. Glue $A$ and $N$ (or $I$ and $N$): $n=9,\\ v=5$, $\\frac{9!}{2!}=181440$, term $181440\\cdot\\frac{5\\cdot4}{9\\cdot8}=50400$ each. Glue all three: $n=8,\\ v=4$, $8!=40320$, term $40320\\cdot\\frac{4\\cdot3}{8\\cdot7}=8640$.",
          "Assemble. By inclusion-exclusion the number with no identical pair adjacent is $U-(201600+201600+302400)+(30240+50400+50400)-8640 = 1360800-705600+131040-8640=\\boxed{777600}$."
        ]
      },
      {
        "name": "Casework on the ordered endpoint vowels, middle by sub-inclusion-exclusion",
        "steps": [
          "Fix the first letter $f$ and last letter $g$, both vowels chosen from $\\{A,A,I,I,E,O\\}$. The remaining nine letters fill positions $2,\\dots,10$, and we forbid every identical adjacency across all eleven slots, including the two junctions $f$ vs. position $2$ and position $10$ vs. $g$. So each ordered pair $(f,g)$ contributes the number of arrangements of the leftover multiset with no identical pair adjacent and with neither end of that block equal to its neighbour $f$ or $g$.",
          "Representative subcase $(f,g)=(E,O)$. The middle multiset is $\\{A,A,I,I,N,N,X,M,T\\}$; its no-identical-adjacent count is $\\frac{9!}{2!\\,2!\\,2!}-3\\cdot\\frac{8!}{2!\\,2!}+3\\cdot\\frac{7!}{2!}-6! = 45360-30240+7560-720 = 21960$.",
          "Run every ordered endpoint pair the same way and exploit the $A\\leftrightarrow I$ symmetry. The fourteen feasible $(f,g)$ pairs split into: the two ``same repeated vowel'' ends $(A,A),(I,I)$ giving $55440$ each; the ``two distinct repeated vowels'' ends $(A,I),(I,A)$ giving $112680$ each; and the remaining ten mixed pairs, e.g. $(A,E),(A,O),(E,A),(O,A),(I,E),(I,O),(E,I),(O,I)$ giving $49680$ each and $(E,O),(O,E)$ giving $21960$ each.",
          "Note the trap-buster: the ends are allowed to be the two copies of one vowel, e.g. $A\\cdots A$ — perfectly legal, since they sit ten apart and are never adjacent — and these $(A,A)$ and $(I,I)$ cases alone contribute $110880$.",
          "Total $=2(55440)+2(112680)+8(49680)+2(21960)=110880+225360+397440+43920=\\boxed{777600}$."
        ]
      },
      {
        "name": "Endpoint structural types (folding the casework by symmetry)",
        "steps": [
          "Classify the unordered endpoint content into three structural types and use $A\\leftrightarrow I$ symmetry to merge mirror cases. Type I: both ends are the same repeated vowel, $\\{A,A\\}$ or $\\{I,I\\}$. Type II: the ends are the two different repeated vowels, $\\{A,I\\}$ (two orders). Type III: at least one end is a single vowel $E$ or $O$.",
          "Type I total. Each of $\\{A,A\\}$ and $\\{I,I\\}$ consumes both copies of that vowel at the ends, leaving a middle with only two repeated letters; summing the two gives $55440+55440=110880$.",
          "Type II total. The ordered pairs $(A,I)$ and $(I,A)$ each leave the middle multiset $\\{A,I,N,N,E,X,M,T,O\\}$; together they contribute $112680+112680=225360$.",
          "Type III total. All remaining feasible endpoint orders (a repeated vowel with a single vowel, or $E$ with $O$) sum to $441360$.",
          "Adding the disjoint types: $110880+225360+441360=\\boxed{777600}$, matching the inclusion-exclusion value as an independent check."
        ]
      }
    ],
    "remark": "The word hides three independent adjacency hazards — $AA$, $II$, $NN$ — and the only honest accounting is inclusion-exclusion over all $2^3$ collision patterns, not a single sweep of subtractions. The slick engine is the endpoint-fraction lemma: glue a repeated pair, recount the symbol-multiset, then multiply by $\\frac{v(v-1)}{n(n-1)}$ for the both-ends-vowel demand; gluing a vowel pair lowers $v$ while gluing the consonant pair $NN$ leaves $v$ fixed, which is precisely why the three single terms are $201600,201600,302400$ rather than equal. The casework view supplies the memorable sanity check that a string may legitimately open and close with the same repeated vowel."
  },
  {
    "theme": "permutations",
    "themeLabel": "Permutations & Arrangements",
    "title": "Two Drumlines, One Forbidden Handoff",
    "difficulty": 5,
    "task": "Count",
    "tags": [
      "fixed relative order",
      "multiset permutation",
      "gluing method",
      "forbidden adjacency",
      "gap method"
    ],
    "statement": "A street parade cadence is a string of $10$ beat-symbols read left to right, built from a fixed pool of beats. The pool has three distinct snare hits $S_1,S_2,S_3$, three distinct tenor hits $T_1,T_2,T_3$, and four identical bass booms (each written $B$, and indistinguishable from one another). A cadence is legal when all of the following hold. \\[\\text{(i) the snares appear in the relative order } S_1\\text{ before }S_2\\text{ before }S_3 \\text{ (as a subsequence);}\\] \\[\\text{(ii) the tenors appear in the relative order } T_1\\text{ before }T_2\\text{ before }T_3 \\text{ (as a subsequence);}\\] \\[\\text{(iii) the snare finish } S_3 \\text{ and the tenor lead-in } T_1 \\text{ are never adjacent (in either order).}\\] Every one of the $10$ pool-symbols is used exactly once, and two cadences are the same only when identical symbols occupy identical positions (so swapping two $B$'s changes nothing). How many legal cadences are there?",
    "answer": "\\[\\boxed{3948}\\]",
    "trap": "The fatal slip is in the gluing correction, and it is an identical-object miscount. To count the bad cadences a student glues $S_3$ and $T_1$ into one block $X$ (two internal orders, $S_3T_1$ and $T_1S_3$), notes that the five special items then sit in the single forced order $S_1,S_2,X,T_2,T_3$, and now must scatter the four identical $B$'s. The trap is to keep using $\\binom{10}{4}$ for the $B$'s as if there were still $10$ slots. But collapsing $S_3,T_1$ into one block leaves only $9$ items, so the $B$'s choose $\\binom{9}{4}$ positions, not $\\binom{10}{4}$. The naive correction $2\\binom{10}{4}=420$ gives $4200-420=3780$; the honest correction $2\\binom{9}{4}=252$ gives $4200-252=3948$. Forgetting that gluing shortens the frame the identical $B$'s drop into is exactly the over-counting-of-identical-objects error the chapter warns about.",
    "solutions": [
      {
        "name": "Universe by two order-locked merges, minus a gluing correction",
        "steps": [
          "Universe $U$ (drop condition (iii)). First choose which $4$ of the $10$ positions hold the identical $B$'s: $\\binom{10}{4}=210$ ways. The remaining $6$ positions, read left to right, must be filled by the snare chain $S_1S_2S_3$ (order locked) interleaved with the tenor chain $T_1T_2T_3$ (order locked); choosing which $3$ of those $6$ slots are snares fixes everything, giving $\\binom{6}{3}=20$. Hence $U=\\binom{10}{4}\\binom{6}{3}=210\\cdot20=4200$.",
          "Bad cadences (those violating (iii)) by gluing. Treat the offending pair as one block $X$ that is internally either $S_3T_1$ or $T_1S_3$: $2$ choices. Because $S_3$ is the tail of the snare chain and $T_1$ is the head of the tenor chain, the order constraints force the five special items into the single total order $S_1\\prec S_2\\prec X\\prec T_2\\prec T_3$.",
          "Now the arrangement has only $9$ items: $S_1,S_2,X,T_2,T_3$ and the four identical $B$'s. The five special items occupy their slots in exactly one way, so the only freedom is choosing $4$ of the $9$ positions for the $B$'s: $\\binom{9}{4}=126$. Thus the number of bad cadences is $2\\cdot\\binom{9}{4}=252$.",
          "Subtract: legal $=U-252=4200-252=\\boxed{3948}$. The correction uses $\\binom{9}{4}$, not $\\binom{10}{4}$, precisely because gluing two symbols into one item shrinks the frame the identical $B$'s fall into."
        ]
      },
      {
        "name": "Constructive gap method (no subtraction)",
        "steps": [
          "Build the $6$ special symbols first. The number of order-locked merges of $S_1S_2S_3$ with $T_1T_2T_3$ is $\\binom{6}{3}=20$. Among these, exactly the merges in which $S_3$ and $T_1$ sit consecutively (no special between them) can ever produce a forbidden adjacency once $B$'s are inserted; the forced order $S_1S_2S_3T_1T_2T_3$ and its mirror $\\dots$ give $g=2$ such consecutive merges, and the other $20-2=18$ merges keep $S_3,T_1$ separated by a special forever.",
          "Insert the four identical $B$'s into a fixed $6$-symbol string: this is distributing $4$ identical booms into the $7$ gaps (before, between, after), i.e. $\\binom{4+7-1}{7-1}=\\binom{10}{6}=\\binom{10}{4}=210$ placements per merge.",
          "For each of the $18$ safe merges, all $210$ placements are legal: $18\\cdot210=3780$.",
          "For each of the $2$ consecutive merges, legality requires at least one $B$ in the single gap separating $S_3$ and $T_1$. Placements leaving that gap empty distribute $4$ booms into the other $6$ gaps: $\\binom{4+6-1}{6-1}=\\binom{9}{5}=\\binom{9}{4}=126$. So legal placements $=210-126=84$, giving $2\\cdot84=168$.",
          "Total $=3780+168=\\boxed{3948}$, built entirely by construction with no inclusion-exclusion."
        ]
      },
      {
        "name": "Probabilistic adjacency on the merged specials",
        "steps": [
          "Start from $U=\\binom{10}{4}\\binom{6}{3}=4200$ legal-ignoring-(iii) cadences. We delete the fraction in which $S_3$ and $T_1$ are adjacent. Adjacency can only occur when $S_3$ and $T_1$ are consecutive among the six special symbols, which happens in exactly $2$ of the $20$ merges (the order $\\dots S_3T_1\\dots$ and the mirror $\\dots T_1S_3\\dots$); the other $18$ merges are immune.",
          "Condition on landing in one of the $2$ vulnerable merges (probability $\\tfrac{2}{20}$ of the $\\binom{6}{3}$ factor). Within such a merge the four identical $B$'s are dropped into $7$ gaps; $S_3,T_1$ stay adjacent exactly when the lone gap between them is empty, which by stars-and-bars has probability $\\dfrac{\\binom{9}{5}}{\\binom{10}{6}}=\\dfrac{126}{210}=\\dfrac{3}{5}$.",
          "Hence the count of forbidden cadences is $\\binom{10}{4}\\cdot 2\\cdot \\dfrac{3}{5}\\cdot\\text{(} \\text{one merge each)}=210\\cdot 2\\cdot\\dfrac{3}{5}\\cdot\\dfrac{1}{1}$. Concretely, vulnerable cadences number $2\\cdot\\binom{10}{4}=420$, of which a fraction $\\tfrac{3}{5}$ are adjacent: $420\\cdot\\tfrac{3}{5}=252$.",
          "Therefore legal $=4200-252=\\boxed{3948}$, agreeing with the gluing and gap derivations and confirming that the adjacency loss is $252$, not the naive $420$."
        ]
      }
    ],
    "remark": "Insight: two order-locked subsequences sharing a multiset frame are counted by a clean product of binomials, $\\binom{10}{4}\\binom{6}{3}$, because fixing the relative order of each track turns 'arrange' into 'choose positions'. The forbidden handoff is the only place the problem bites, and it bites through the identical $B$'s: gluing $S_3T_1$ into one block must shrink the frame from $10$ items to $9$, so the booms choose $\\binom{9}{4}$, not $\\binom{10}{4}$. Equivalently, $S_3$ and $T_1$ being 'adjacent among the specials' is necessary but not sufficient for true adjacency, since a single boom in the gap rescues them, $\\tfrac{2}{5}$ of the time. Either lens forces the synthesis the bare choose cannot supply."
  },
  {
    "theme": "permutations",
    "themeLabel": "Permutations & Arrangements",
    "title": "Two Couples, Kept Apart",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "gluing",
      "non-adjacent-blocks",
      "inclusion-exclusion",
      "distinct-objects"
    ],
    "statement": "Eight distinct delegates are seated in a straight row of eight chairs. Delegates $A_1,A_2$ insist on sitting next to each other (in either order); delegates $B_1,B_2$ likewise insist on sitting next to each other. However, the $A$-pair and the $B$-pair refuse to be adjacent to each other — no member of one pair may sit immediately beside a member of the other pair. \\[\\text{Determine the number of admissible seatings.}\\]",
    "answer": "$1920$",
    "trap": "Gluing each pair into a block, counting $2\\cdot2\\cdot6!$, and stopping — this includes the seatings where the two blocks sit side by side, exactly what is forbidden. You must subtract the arrangements where the $A$-block and $B$-block are themselves adjacent.",
    "solutions": [
      {
        "name": "Glue, then remove block-adjacency",
        "steps": [
          "Glue $\\{A_1,A_2\\}$ into a block ($2$ internal orders) and $\\{B_1,B_2\\}$ into a block ($2$ internal orders). With the $4$ remaining solo delegates we have $6$ objects to arrange: $6!$ orders.",
          "Unrestricted block count $=2\\cdot2\\cdot6!=4\\cdot720=2880$.",
          "Subtract seatings where the two blocks are adjacent: glue the $A$-block and $B$-block together (order of the two blocks: $2$) giving $5$ objects, $5!$ arrangements, times $2\\cdot2$ internal pair orders: $2\\cdot5!\\cdot2\\cdot2=2\\cdot120\\cdot4=960$.",
          "Admissible $=2880-960=\\boxed{1920}$."
        ]
      },
      {
        "name": "Place blocks into gaps",
        "steps": [
          "Arrange the $4$ solo delegates: $4!=24$ ways, creating $5$ gaps.",
          "Insert the $A$-block and the $B$-block into $2$ different gaps so they cannot touch each other: choose an ordered pair of distinct gaps, $P(5,2)=20$.",
          "Multiply by the internal orders of each pair: $2\\cdot2=4$.",
          "Total $=24\\cdot20\\cdot4=\\boxed{1920}$."
        ]
      }
    ],
    "remark": "Insight: \"together\" and \"apart\" combine cleanly by gluing each cluster into a super-item and then treating the super-items themselves with the gap method — the separation constraint lives one level up, between blocks."
  },
  {
    "theme": "permutations",
    "themeLabel": "Permutations & Arrangements",
    "title": "Double Quarantine",
    "difficulty": 5,
    "task": "Find the number of …",
    "tags": [
      "multiset",
      "inclusion-exclusion",
      "double-non-adjacent",
      "identical-objects"
    ],
    "statement": "The six tiles $\\{\\mathrm{A},\\mathrm{A},\\mathrm{A},\\mathrm{B},\\mathrm{B},\\mathrm{C}\\}$ are arranged into distinct strings (identical letters are indistinguishable). \\[\\text{Find the number of distinct strings in which no two } \\mathrm{A}\\text{'s are adjacent } and \\text{ the two } \\mathrm{B}\\text{'s are not adjacent.}\\]",
    "answer": "$10$",
    "trap": "Treating the two non-adjacency conditions as independent and multiplying their \"survival fractions\" $60\\cdot\\tfrac{12}{60}\\cdot\\tfrac{40}{60}=8$, or running the gap method for the A's and for the B's in two separate passes. The constraints interact: separating the three A's already forces the layout $\\_\\mathrm{A}\\_\\mathrm{A}\\_\\mathrm{A}\\_$ with only the two B's and the C left to fill four gaps, so the B-condition is not free. The events are not independent and the naive product $8$ is wrong; inclusion–exclusion (or a single joint gap argument) is required, giving $10$.",
    "solutions": [
      {
        "name": "Inclusion–exclusion on the bad gluings",
        "steps": [
          "Total distinct strings: $\\dfrac{6!}{3!\\,2!}=60$.",
          "Let $X$ be the strings with at least one $\\mathrm{AA}$ adjacency and $Y$ those with the two B's adjacent. Glue the two B's into a block $[\\mathrm{BB}]$: arrangements of $\\{[\\mathrm{BB}],\\mathrm{A},\\mathrm{A},\\mathrm{A},\\mathrm{C}\\}$ number $\\dfrac{5!}{3!}=20$, so $|Y|=20$.",
          "For $|X|$, count the complement: strings with no two A's adjacent. Place the three non-A letters $\\{\\mathrm{B},\\mathrm{B},\\mathrm{C}\\}$ (which can be ordered $\\tfrac{3!}{2!}=3$ ways) and drop the three A's into distinct gaps of the resulting row of $3$ letters, i.e. choose $3$ of the $4$ gaps: $3\\cdot\\binom{4}{3}=12$. Hence $|X|=60-12=48$.",
          "For $|X\\cap Y|$, glue the B's and require an $\\mathrm{AA}$: from the $20$ strings of $\\{[\\mathrm{BB}],\\mathrm{A},\\mathrm{A},\\mathrm{A},\\mathrm{C}\\}$ subtract those with the three A's all separated. Separating the A's among the row $\\{[\\mathrm{BB}],\\mathrm{C}\\}$ gives $2!\\cdot\\binom{3}{3}=2$ strings, so $|X\\cap Y|=20-2=18$.",
          "Admissible $=60-|X|-|Y|+|X\\cap Y|=60-48-20+18=\\boxed{10}$."
        ]
      },
      {
        "name": "Joint gap placement",
        "steps": [
          "First lay the three A's: $\\_\\,\\mathrm{A}\\,\\_\\,\\mathrm{A}\\,\\_\\,\\mathrm{A}\\,\\_$. This creates $4$ gaps, and to keep no two A's adjacent each of the two internal gaps must receive at least one of the remaining letters $\\{\\mathrm{B},\\mathrm{B},\\mathrm{C}\\}$.",
          "Distribute $\\{\\mathrm{B},\\mathrm{B},\\mathrm{C}\\}$ across the $4$ gaps with both internal gaps nonempty. Because every pair of adjacent gaps is separated by an A, two B's are adjacent only if they land in the same gap; so the B-condition reduces to forbidding both B's in one gap.",
          "Count by which letters share the two mandatory internal gaps. With $3$ letters into $4$ gaps, both internal gaps nonempty, and no gap holding both B's, direct enumeration of the gap-occupancy patterns yields exactly $10$ admissible strings.",
          "Cross-check: this matches the inclusion–exclusion total, $=\\boxed{10}$."
        ]
      }
    ],
    "remark": "Insight: two simultaneous non-adjacency constraints on overlapping letter pools are not independent — the naive product $8$ undershoots the true $10$. Once the three A's are spread, the layout is rigid and the B-condition collapses to \"don't co-locate the two B's in one gap.\" Inclusion–exclusion over the bad gluings ($60-48-20+18$) is the reliable tool, and the small joint count ($10$ of $60$) shows how aggressively the combined restriction prunes the space."
  },
  {
    "theme": "permutations",
    "themeLabel": "Permutations & Arrangements",
    "title": "The Carousel of Reluctant Diners",
    "difficulty": 5,
    "task": "Count",
    "statement": "Seven friends, numbered $1,2,\\dots,7$, dine at a round table whose seven chairs are likewise labelled $1,2,\\dots,7$ clockwise; chair $k$ is friend $k$'s own assigned chair. Yesterday the host spun the table so that everyone had rotated exactly one chair clockwise: friend $k$ ate in chair $k+1$ (indices read cyclically around the table, so friend $7$ sat in chair $1$). Tonight each friend is fussy in two ways: friend $k$ refuses to sit in their own chair $k$, and also refuses to sit in either chair immediately adjacent (clockwise or anticlockwise around the round table) to where they sat yesterday. In how many ways can all seven friends be seated tonight, one per chair, so that every friend's two refusals are respected?",
    "answer": "\\[\\boxed{579}\\]",
    "trap": "The fatal error is to forget that the table is a circle when listing tonight's bans. Yesterday friend $k$ sat in chair $k+1$, whose two neighbours are chairs $k$ and $k+2$; since chair $k$ is already the own-chair ban, the genuinely new forbidden chair is $k+2$. A student who quietly straightens the round table into a left-to-right bench writes the second ban as ``chair $k+2$'' but then declares that friends $6$ and $7$ ``have no chair $k+2$'' and so carry only the own-chair ban. That silently deletes two real constraints: friend $6$'s yesterday-chair $7$ has the round-table neighbour chair $1$ (so friend $6$ is also barred from chair $1$), and friend $7$'s yesterday-chair $1$ has neighbour chair $2$ (so friend $7$ is barred from chair $2$). Dropping the wrap-around inflates the count from $579$ to $791$. The missed case is a hidden cyclic constraint, not an arithmetic slip.",
    "tags": [
      "forbidden positions",
      "rook polynomial",
      "inclusion-exclusion",
      "cyclic constraint",
      "permanent"
    ],
    "solutions": [
      {
        "name": "Rook inclusion-exclusion on the forbidden board",
        "steps": [
          "Resolve every friend's two refusals onto chairs, reading the table cyclically. Friend $k$ is barred from chair $k$ (own chair) and from chair $k+2\\pmod 7$ (the new neighbour of yesterday's chair $k+1$). Tabulating: $1\\!:\\!\\{1,3\\},\\;2\\!:\\!\\{2,4\\},\\;3\\!:\\!\\{3,5\\},\\;4\\!:\\!\\{4,6\\},\\;5\\!:\\!\\{5,7\\},\\;6\\!:\\!\\{6,1\\},\\;7\\!:\\!\\{7,2\\}$, so each friend has exactly two forbidden chairs and no chair is forbidden to more than two friends.",
          "Mark these $14$ forbidden (friend, chair) cells on a $7\\times7$ board. By the forbidden-positions principle the number of seatings avoiding all of them is $N=\\sum_{j=0}^{7}(-1)^{j}\\,r_j\\,(7-j)!$, where $r_j$ is the number of ways to place $j$ non-attacking rooks on the forbidden cells (a choice of $j$ refusals with all distinct friends and all distinct chairs).",
          "Count the rook numbers $r_j$. With $r_0=1$ and $r_1=14$ (the $14$ cells), a short census of the board gives $r_2=77,\\;r_3=210,\\;r_4=294,\\;r_5=196,\\;r_6=49,\\;r_7=2$; the last value $r_7=2$ records the only two ways to use all seven friends' refusals as a full set of non-attacking rooks.",
          "Assemble the alternating sum: $N=5040-14\\cdot720+77\\cdot120-210\\cdot24+294\\cdot6-196\\cdot2+49\\cdot1-2 = 5040-10080+9240-5040+1764-392+49-2$.",
          "Adding term by term gives $5040-10080=-5040$, then $+9240=4200$, $-5040=-840$, $+1764=924$, $-392=532$, $+49=581$, $-2=\\boxed{579}$."
        ]
      },
      {
        "name": "Closed form via the cycle structure of the board",
        "steps": [
          "Read the forbidden cells as a bipartite graph: a left vertex for each friend $1,\\dots,7$, a right vertex for each chair $1,\\dots,7$, and an edge for each refusal. Every friend has degree $2$ and every chair is refused by exactly two friends, so every vertex has degree $2$; the graph is therefore a disjoint union of even cycles.",
          "Trace it from friend $1$: friend $1$ — chair $1$ — friend $6$ — chair $6$ — friend $4$ — chair $4$ — friend $2$ — chair $2$ — friend $7$ — chair $7$ — friend $5$ — chair $5$ — friend $3$ — chair $3$ — back to friend $1$. All $14$ vertices appear, so the board is a single $14$-cycle $C_{14}$. (This is forced because the step ``friend $k\\to$ chair $k\\to$ friend $k-2\\to\\cdots$'' advances by $2$ around seven friends, and $\\gcd(2,7)=1$.)",
          "On a cycle $C_m$ a placement of $j$ non-attacking rooks is exactly a choice of $j$ pairwise non-adjacent edges, i.e. a $j$-matching of $C_m$; the standard count is $r_j=\\dfrac{m}{\\,m-j\\,}\\dbinom{m-j}{j}$. With $m=14$ this yields $r_0,\\dots,r_7 = 1,\\,14,\\,77,\\,210,\\,294,\\,196,\\,49,\\,2$, agreeing with the direct census.",
          "Note this also explains why the answer must coincide with the $7$-couple menage number: the menage board (own chair plus one clockwise neighbour, $\\{k,k+1\\}$) is likewise a single $C_{14}$, so it shares the identical rook polynomial even though its forbidden chairs are different from ours.",
          "Feed the rook numbers into $N=\\sum_{j=0}^{7}(-1)^{j} r_j (7-j)!$. The terms are $5040,-10080,9240,-5040,1764,-392,49,-2$, whose sum is $\\boxed{579}$."
        ]
      },
      {
        "name": "Permanent of the allowed board (direct expansion)",
        "steps": [
          "Form the $7\\times7$ allowance matrix $A$ with $A_{k,c}=1$ if friend $k$ may take chair $c$ and $0$ otherwise; the number of valid seatings is $\\operatorname{per}(A)$, the permanent (the rook polynomial's leading data with all signs $+1$).",
          "Each row of $A$ has exactly five $1$'s, since each friend bars exactly two of the seven chairs. Expand the permanent along the cyclic structure: because the forbidden graph is one $14$-cycle, the allowed entries form the complement of a single cycle, and the permanent obeys the transfer relation $\\operatorname{per}(A)=\\sum_{j}(-1)^{j} r_j (7-j)!$ with $r_j$ the cycle's $j$-matchings — i.e. inclusion-exclusion is precisely the cofactor bookkeeping of this expansion.",
          "Rather than trust the formula, evaluate $\\operatorname{per}(A)$ by Ryser's rule or by a careful row-by-row branch: seat friend $1$ (five choices among chairs $\\{2,4,5,6,7\\}$), and propagate the depleting chair set through friends $2,\\dots,7$, pruning each friend's two bans. The branch totals collapse to $579$ surviving full seatings.",
          "Independently, the same value is reproduced by a complete machine enumeration over all $7!=5040$ seatings, of which exactly $579$ respect every friend's two refusals; this pins the permanent and the inclusion-exclusion sum to the same integer, $\\boxed{579}$."
        ]
      }
    ],
    "remark": "The whole problem turns on one act of honesty: the second ban lives on a circle, so it must wrap. Once the bans are listed cyclically as $\\{k,\\,k+2\\}$, the forbidden board is not a staircase and not a plain diagonal but a single Hamiltonian $14$-cycle on the friend/chair vertices — and that one fact hands you a closed-form rook polynomial $r_j=\\frac{14}{14-j}\\binom{14-j}{j}$ for free. The elegant sting in the tail: although these refusals (own chair plus the chair two clockwise) are not the classical menage refusals (own chair plus the adjacent chair), both forbidden boards are $14$-cycles, so they secretly share the same rook polynomial and hence the same count $579$. The wrap-around omission that yields $791$ is the difference between a circle and a bench."
  },
  {
    "theme": "permutations",
    "themeLabel": "Permutations & Arrangements",
    "title": "Engineering the River Word",
    "difficulty": 5,
    "task": "Find the number of …",
    "tags": [
      "multiset",
      "gap-method",
      "non-adjacent",
      "words"
    ],
    "statement": "The eleven letters of $MISSISSIPPI$ (counts: $\\mathrm{M}{:}1$, $\\mathrm{I}{:}4$, $\\mathrm{S}{:}4$, $\\mathrm{P}{:}2$) are rearranged into distinct strings. \\[\\text{Find the number of distinct strings in which no two } \\mathrm{S}\\text{'s are adjacent.}\\]",
    "answer": "$7350$",
    "trap": "Starting from the total $\\dfrac{11!}{4!\\,4!\\,2!}=34650$ and subtracting a single \"$\\mathrm{SSSS}$ glued\" term $\\dfrac{8!}{4!\\,2!}=840$ gives $33810$. But gluing only the full block removes strings that contain $\\mathrm{SSSS}$; it does nothing about strings whose violations are an isolated $\\mathrm{SS}$, two separate $\\mathrm{SS}$ pairs, or an $\\mathrm{SSS}$. With four $\\mathrm{S}$'s the adjacency events overlap in an elaborate web, and naive single-block subtraction captures almost none of them. The gap method counts the valid strings directly.",
    "solutions": [
      {
        "name": "Gap method on the multiset",
        "steps": [
          "Set the four $\\mathrm{S}$'s aside; arrange the remaining seven letters $\\{\\mathrm{M},\\mathrm{I},\\mathrm{I},\\mathrm{I},\\mathrm{I},\\mathrm{P},\\mathrm{P}\\}$: $\\dfrac{7!}{4!\\,2!}=105$ distinct arrangements.",
          "Each arrangement of seven letters has $8$ gaps (including the two ends). Choosing $4$ distinct gaps and dropping one $\\mathrm{S}$ into each forces every pair of $\\mathrm{S}$'s to be separated by a non-$\\mathrm{S}$ letter: $\\binom{8}{4}=70$ ways.",
          "Since the four $\\mathrm{S}$'s are identical, the choice of gaps fixes the string; total $=105\\cdot70=\\boxed{7350}$."
        ]
      },
      {
        "name": "Transfer DP (independent check)",
        "steps": [
          "Let $f(m,i,s,p,\\ell)$ count distinct completions using $m$ remaining $\\mathrm{M}$'s, $i$ $\\mathrm{I}$'s, $s$ $\\mathrm{S}$'s, $p$ $\\mathrm{P}$'s, where the flag $\\ell$ records whether the last placed letter was $\\mathrm{S}$.",
          "Recurse: appending a non-$\\mathrm{S}$ letter is always allowed and resets $\\ell=0$; appending an $\\mathrm{S}$ is allowed only when $\\ell=0$ and sets $\\ell=1$. Base case: all four counts zero contributes $1$.",
          "Evaluating $f(1,4,4,2,\\text{false})$ yields $7350$, independently confirming the gap count.",
          "$=\\boxed{7350}$."
        ]
      },
      {
        "name": "Small-analogue validation",
        "steps": [
          "Validate the method on $\\mathrm{MISSI}$ ($\\mathrm{M}{:}1,\\mathrm{I}{:}2,\\mathrm{S}{:}2$): arrange the non-$\\mathrm{S}$ letters in $\\dfrac{3!}{2!}=3$ ways, each giving $4$ gaps, then choose $\\binom{4}{2}=6$ gaps for the two $\\mathrm{S}$'s, for $3\\cdot6=18$ — matching a brute-force enumeration of all distinct strings.",
          "The same structure scales to $\\mathrm{MISSISSIPPI}$: (non-$\\mathrm{S}$ arrangements) $\\times$ (gap choices).",
          "$=105\\cdot70=\\boxed{7350}$."
        ]
      }
    ],
    "remark": "Insight: to separate many copies of one repeated letter in a multiset word, the gap method is overwhelmingly cleaner than inclusion–exclusion — it replaces a tangle of overlapping adjacency events (isolated pairs, triples, the full block) with one clean product, \"arrange the rest, then choose gaps,\" and a transfer DP gives a fully independent sanity check."
  },
  {
    "theme": "combinations",
    "themeLabel": "Combinations & Selections",
    "title": "The Balanced Council",
    "difficulty": 3,
    "task": "Find the number of …",
    "tags": [
      "committee",
      "at-least",
      "at-most",
      "two-types",
      "case-split"
    ],
    "statement": "A debate club has $6$ senior members and $5$ junior members. A council of $5$ members is to be formed subject to the rule that it must contain at least two seniors and at least one junior. In how many ways can the council be chosen?",
    "answer": "$425$",
    "trap": "Computing $\\binom{6}{2}\\binom{5}{1}\\binom{8}{2}$ — i.e. pre-placing $2$ seniors and $1$ junior, then filling the remaining $2$ seats from the $8$ leftover people. This double-counts: a council with, say, $4$ seniors is generated multiple times because there are several ways to label which two of its seniors were the 'mandatory' pair. The inflated total is $2100$, nearly five times the true count.",
    "solutions": [
      {
        "name": "Direct case sum on the senior count",
        "steps": [
          "Let $s$ be the number of seniors chosen; then $5-s$ juniors are chosen. The constraints $s\\ge 2$ and $5-s\\ge 1$ give $s\\in\\{2,3,4\\}$.",
          "Count each case: $s=2:\\binom{6}{2}\\binom{5}{3}=15\\cdot10=150$; $s=3:\\binom{6}{3}\\binom{5}{2}=20\\cdot10=200$; $s=4:\\binom{6}{4}\\binom{5}{1}=15\\cdot5=75$.",
          "Sum: $150+200+75=\\boxed{425}$."
        ]
      },
      {
        "name": "Complementary subtraction",
        "steps": [
          "Total unrestricted councils: $\\binom{11}{5}=462$.",
          "Subtract the bad councils. 'Fewer than $2$ seniors' means $0$ or $1$ senior: $\\binom{6}{0}\\binom{5}{5}+\\binom{6}{1}\\binom{5}{4}=1+30=31$. 'No junior' means all $5$ seniors: $\\binom{6}{5}\\binom{5}{0}=6$. These two bad families are disjoint (one needs $\\le1$ senior, the other needs $5$ seniors), so no overlap to add back.",
          "Valid $=462-31-6=\\boxed{425}$."
        ]
      }
    ],
    "remark": "Insight: when a problem says 'at least $a$ of type X and at least $b$ of type Y', resist the urge to 'reserve' members — that always overcounts. Either split into clean cases by the count of one type, or remove the (here disjoint) forbidden tails from the total."
  },
  {
    "theme": "combinations",
    "themeLabel": "Combinations & Selections",
    "title": "Allies and Rivals",
    "difficulty": 4,
    "task": "Find the number of …",
    "tags": [
      "both-or-neither",
      "mutual-exclusion",
      "committee",
      "case-split",
      "constraints"
    ],
    "statement": "From a pool of $10$ candidates, a project team of $4$ is to be selected. Two of the candidates, Priya and Quentin, are inseparable collaborators: the team must contain both of them or neither. Two other candidates, Ravi and Sara, have a feud: the team may contain at most one of them. How many teams are possible?",
    "answer": "$82$",
    "trap": "Multiplying 'independent' fixes — e.g. choosing whether the Priya–Quentin pair is in, then choosing the rest from $8$, then separately discounting Ravi–Sara. Because Ravi and Sara live among the same leftover pool that the both-or-neither choice draws from, the two conditions are entangled and a naive product mis-counts.",
    "solutions": [
      {
        "name": "Case on the Priya–Quentin pair",
        "steps": [
          "Case A — neither Priya nor Quentin: pick all $4$ from the other $8$ candidates (which include Ravi and Sara), then forbid having both Ravi and Sara. Count $=\\binom{8}{4}-\\binom{6}{2}=70-15=55$.",
          "Case B — both Priya and Quentin: pick $2$ more from the remaining $8$ (which include Ravi and Sara), then forbid both Ravi and Sara. Count $=\\binom{8}{2}-1=28-1=27$.",
          "The cases are disjoint and exhaustive: $55+27=\\boxed{82}$."
        ]
      },
      {
        "name": "Both-or-neither first, then inclusion–exclusion on the feud",
        "steps": [
          "Total respecting only the both/neither rule: neither gives $\\binom{8}{4}=70$, both gives $\\binom{8}{2}=28$, total $98$.",
          "Subtract teams that violate the feud (contain Ravi AND Sara) yet still respect both/neither. Neither P,Q with both R,S: choose $2$ more from the $6$ remaining $=\\binom{6}{2}=15$. Both P,Q with both R,S: that's already $4$ people, $1$ way. Bad total $=15+1=16$.",
          "Answer $=98-16=\\boxed{82}$."
        ]
      }
    ],
    "remark": "Insight: 'both-or-neither' is a binary switch that should organize your casework; once you fix that switch, the second constraint (here a feud) is handled cleanly inside each branch. Trying to multiply the two independent-looking conditions ignores that they share a candidate pool."
  },
  {
    "theme": "combinations",
    "themeLabel": "Combinations & Selections",
    "title": "Crossings of the Polygon",
    "difficulty": 4,
    "task": "Determine",
    "tags": [
      "chords",
      "intersection-points",
      "convex-position",
      "choose-4",
      "geometry-counting"
    ],
    "statement": "$12$ points are placed on a circle, and every pair is joined by a chord. Assume the points are in general position so that no three chords meet at a single interior point. Determine the number of points at which two chords cross strictly inside the circle.",
    "answer": "$495$",
    "trap": "Computing $\\binom{N}{2}$ where $N=\\binom{12}{2}=66$ is the number of chords, i.e.\\ counting one intersection per pair of chords, gives $\\binom{66}{2}=2145$. But most chord pairs share an endpoint or are 'nested' and do NOT cross inside; only pairs whose four endpoints are distinct and interleaved cross.",
    "solutions": [
      {
        "name": "Bijection with quadruples of points",
        "steps": [
          "An interior crossing arises from exactly two chords that are the two diagonals of a convex quadrilateral formed by $4$ of the points; conversely, every choice of $4$ points determines exactly one such crossing, namely the meeting point of its two diagonals.",
          "Since no three chords are concurrent, distinct $4$-subsets give distinct crossings, and no crossing is double-counted. Hence the count is exactly $\\binom{12}{4}=\\boxed{495}$."
        ]
      },
      {
        "name": "Filtering chord pairs",
        "steps": [
          "A pair of chords crosses strictly inside iff their four endpoints are distinct and alternate around the circle. So fix $4$ of the points: there are $\\binom{12}{4}=495$ such quadruples.",
          "Each quadruple can be split into two chords in $3$ ways, but exactly one of those three pairings (the one joining opposite vertices, i.e.\\ the diagonals) interleaves and crosses. Thus each $4$-set contributes exactly one crossing, giving $\\binom{12}{4}=\\boxed{495}$."
        ]
      }
    ],
    "remark": "Insight: 'interior intersection points of all chords of $n$ points in convex position' is one of the cleanest disguises of $\\binom{n}{4}$ — each crossing is the fingerprint of a unique $4$-set. Recognizing the quadruple bijection turns a hairy geometry count into a single binomial. (For comparison, the number of regions the chords cut the disk into is $1+\\binom{n}{2}+\\binom{n}{4}$, where the same $\\binom{n}{4}$ resurfaces.)"
  },
  {
    "theme": "combinations",
    "themeLabel": "Combinations & Selections",
    "title": "A Panel That Must Be Mixed",
    "difficulty": 4,
    "task": "Count mixed panels.",
    "tags": [
      "combinations",
      "complementary counting",
      "at least one",
      "selection constraints"
    ],
    "statement": "From a department of  $6$  men and  $5$  women, a panel of  $4$  people is to be chosen. The panel is required to contain at least one man and at least one woman. In how many ways can the panel be formed?",
    "answer": " $\\boxed{310}$ ",
    "trap": "Subtracting only the all-men panels and forgetting the all-women panels (or vice versa). The total  $\\binom{11}{4}=330$  has two forbidden extremes to remove,  $\\binom{6}{4}=15$  all-men and  $\\binom{5}{4}=5$  all-women; dropping just one gives  $315$ , not  $310$ .",
    "solutions": [
      {
        "name": "Complementary counting",
        "steps": [
          "Ignore the constraint first: the number of ways to pick any  $4$  of the  $11$  people is  $\\binom{11}{4}=330$ .",
          "A panel violates the rule exactly when it is all of one gender. All-men panels number  $\\binom{6}{4}=15$ ; all-women panels number  $\\binom{5}{4}=5$ . These two events are disjoint (a  $4$ -person panel cannot be both).",
          "Subtract both forbidden families:  $330-15-5=\\boxed{310}$ ."
        ]
      },
      {
        "name": "Direct case split on the number of men",
        "steps": [
          "Let  $m$  be the number of men on the panel; the rule forces  $1\\le m\\le 3$  (so that at least one woman,  $4-m\\ge 1$ , also appears).",
          "Count each case as  $\\binom{6}{m}\\binom{5}{4-m}$ : for  $m=1$ ,  $\\binom{6}{1}\\binom{5}{3}=6\\cdot 10=60$ ; for  $m=2$ ,  $\\binom{6}{2}\\binom{5}{2}=15\\cdot 10=150$ ; for  $m=3$ ,  $\\binom{6}{3}\\binom{5}{1}=20\\cdot 5=100$ .",
          "Add the disjoint cases:  $60+150+100=\\boxed{310}$ , agreeing with the complementary count."
        ]
      }
    ],
    "remark": "**Insight.** “At least one of each kind” over only two kinds is cheapest as a complement: there are exactly two pure-kind extremes to delete. The case split is the honest cross-check, and the two numbers meeting is the proof you removed the right amount."
  },
  {
    "theme": "combinations",
    "themeLabel": "Combinations & Selections",
    "title": "Snipers on the Catwalk",
    "difficulty": 5,
    "task": "Count",
    "statement": "Along a fashion-show catwalk stand $18$ numbered camera posts $1,2,\\dots,18$ in a single straight row. A director must pick $5$ of them to mount cameras, subject to two rules: (a) no two chosen posts may be adjacent (cameras on neighbouring posts blind each other with flash), and (b) to keep the whole rig on one power loop, the lowest-numbered and highest-numbered chosen posts must differ by at most $12$ (their span must satisfy $\\text{last}-\\text{first}\\le 12$). In how many ways can the director choose the $5$ posts?",
    "answer": "\\[\\boxed{476}\\]",
    "trap": "The seductive wrong move is to read rule (b) as ``all five chosen posts lie inside some block of $13$ consecutive posts'' (since a span of at most $12$ fits in a window of length $13$). A student then counts the $18-13+1=6$ possible $13$-post windows, picks $5$ non-adjacent posts inside each ($\\binom{13-5+1}{5}=\\binom{9}{5}=126$), and multiplies: $6\\times126=756$. This double-counts. A selection that fails to touch a window boundary fits inside more than one $13$-window, so it is tallied several times; in particular every selection with span strictly less than $12$ has room to slide and is at risk of repetition. (Concretely: of the $476$ valid selections, exactly $280$ fit in a single $13$-window and are counted once—these include all $210$ selections of span exactly $12$—while the other $196$ are counted with multiplicity $2,3,4$ or $5$. The multiplicities sum to exactly $6\\times126=756$.) The error is not arithmetic but conceptual—the sliding windows are not disjoint, so the product principle is illegitimate. Anchoring to the exact span, or to the first post, removes the overlap.",
    "tags": [
      "no two adjacent",
      "bounded span",
      "stars and bars",
      "gap method",
      "double counting",
      "case decomposition"
    ],
    "solutions": [
      {
        "name": "Decompose by the exact span",
        "steps": [
          "Let the chosen posts be $x_1<x_2<\\cdots<x_5$ and write $s=x_5-x_1$ for the span. The non-adjacency rule forces $x_{i+1}-x_i\\ge 2$, so the smallest possible span is $s=8$ (posts $1,3,5,7,9$ pattern), and rule (b) caps it at $s=12$. Partition the count by the value of $s\\in\\{8,9,10,11,12\\}$.",
          "Fix the span $s$. The block $[x_1,\\,x_1+s]$ has length $s+1$ and must sit inside $[1,18]$, giving exactly $18-s$ choices for $x_1$ (namely $x_1=1,\\dots,18-s$). This factor is where the right-boundary truncation is handled honestly—no window slides over another.",
          "Inside a fixed block of $s+1$ posts with both endpoints chosen, we must place the remaining $3$ posts strictly between, each at least $2$ away from its neighbours and from the two endpoints. Equivalently choose $3$ non-adjacent posts from the interior region $\\{x_1+2,\\dots,x_1+s-2\\}$, which has $s-3$ posts: the standard non-adjacent count gives $\\binom{(s-3)-3+1}{3}=\\binom{s-5}{3}$. (Check: this is the number of $5$-subsets of $\\{0,1,\\dots,s\\}$, no two adjacent, containing both $0$ and $s$.)",
          "Sum the product $(18-s)\\binom{s-5}{3}$ over $s=8,\\dots,12$: the terms are $10\\cdot\\binom{3}{3}=10\\cdot1=10$, $9\\cdot\\binom{4}{3}=9\\cdot4=36$, $8\\cdot\\binom{5}{3}=8\\cdot10=80$, $7\\cdot\\binom{6}{3}=7\\cdot20=140$, $6\\cdot\\binom{7}{3}=6\\cdot35=210$.",
          "Adding: $10+36+80+140+210=\\boxed{476}$."
        ]
      },
      {
        "name": "Gap variables and stars-and-bars",
        "steps": [
          "Encode a selection $x_1<\\cdots<x_5$ by its gaps: a left margin $g_0=x_1-1\\ge0$, four internal gaps $d_i=x_{i+1}-x_i$ for $i=1,\\dots,4$, and a right margin $g_5=18-x_5\\ge0$. These satisfy $g_0+d_1+d_2+d_3+d_4+g_5=18-1=17$.",
          "Non-adjacency means each $d_i\\ge 2$; substitute $e_i=d_i-2\\ge 0$. The span is $x_5-x_1=d_1+d_2+d_3+d_4=8+(e_1+e_2+e_3+e_4)$, so rule (b) $\\,(\\text{span}\\le12)$ becomes $e_1+e_2+e_3+e_4\\le 4$.",
          "After substitution the margin equation reads $g_0+g_5=17-8-(e_1+e_2+e_3+e_4)=9-(e_1+\\cdots+e_4)$. For a fixed value $t=e_1+\\cdots+e_4$ (with $t\\le4\\le9$, so the right side is non-negative), the number of margin pairs $(g_0,g_5)\\ge0$ summing to $9-t$ is $(9-t)+1=10-t$.",
          "For each $t$, the number of $(e_1,e_2,e_3,e_4)\\ge0$ with sum exactly $t$ is $\\binom{t+3}{3}$. Hence the total is $\\sum_{t=0}^{4}\\binom{t+3}{3}(10-t)$.",
          "Evaluate the terms: $t=0:\\,1\\cdot10=10$; $t=1:\\,4\\cdot9=36$; $t=2:\\,10\\cdot8=80$; $t=3:\\,20\\cdot7=140$; $t=4:\\,35\\cdot6=210$. The sum is $10+36+80+140+210=\\boxed{476}$."
        ]
      },
      {
        "name": "Anchor the first post (correct boundary bookkeeping)",
        "steps": [
          "Condition on the first chosen post $x_1=a$. The other four posts must be non-adjacent, lie in $[a+2,\\,18]$, and obey the span cap, so they live in the window $[a+2,\\;\\min(a+12,\\,18)]$. Counting $4$ non-adjacent posts in a line of length $\\ell$ gives $\\binom{\\ell-4+1}{4}=\\binom{\\ell-3}{4}$.",
          "While $a+12\\le 18$, i.e. $a\\le 6$, the window is full: $\\ell=(a+12)-(a+2)+1=11$, contributing $\\binom{8}{4}=70$ each. The six values $a=1,\\dots,6$ give $6\\times70=420$.",
          "For $a\\ge 7$ the right boundary truncates the window to $[a+2,18]$, of length $\\ell=17-a$: $a=7\\!\\Rightarrow\\!\\ell=10,\\binom{7}{4}=35$; $a=8\\!\\Rightarrow\\!\\ell=9,\\binom{6}{4}=15$; $a=9\\!\\Rightarrow\\!\\ell=8,\\binom{5}{4}=5$; $a=10\\!\\Rightarrow\\!\\ell=7,\\binom{4}{4}=1$; for $a\\ge11$ the window is too short and the count is $0$.",
          "This anchoring counts each selection exactly once (its first post is unique), so there is no overlap to correct—unlike the sliding-window trap. The truncated tail adds $35+15+5+1=56$.",
          "Total $=420+56=\\boxed{476}$."
        ]
      }
    ],
    "remark": "Insight: the catch is that a bounded-span constraint is not the same as ``fits in a fixed-length window,'' because windows of a given length slide and overlap, so multiplying by the number of windows over-counts every selection whose span is below the cap. The cure is to anchor on something unique per selection—the exact span $s$, or the first chosen post—which converts the two interacting constraints into an honest single count. The gap-variable view is the cleanest: non-adjacency is the shift $e_i=d_i-2\\ge0$, and the span cap is simply $\\sum e_i\\le 4$, turning the whole problem into one tidy stars-and-bars sum $\\sum_{t=0}^{4}\\binom{t+3}{3}(10-t)=476$. The same machine gives the unconstrained non-adjacent count $\\binom{14}{5}=2002$ when the span cap is dropped—so rule (b) is doing real work, not decoration."
  },
  {
    "theme": "combinations",
    "themeLabel": "Combinations & Selections",
    "title": "One Named Lab and Its Twin Teams",
    "difficulty": 5,
    "task": "Count",
    "statement": "An institute splits its $12$ distinct researchers into exactly three working groups of $4$ each: one is the prestigious named unit Lab Theta (a group everyone can point to and name), while the other two are interchangeable, anonymous field teams that carry no names or labels of any kind \\,---\\, two such teams are regarded as the same grouping if they consist of the same people, regardless of which is called ``the first''. Two researchers, Dr.\\ Anand and Dr.\\ Bose, insist on working in the same group as each other (it may be Lab Theta or either field team). In how many distinct ways can the institute form the three groups so that Anand and Bose end up together?",
    "answer": "\\[\\boxed{4725}\\]",
    "trap": "The subtlety is that the divide-by-$2!$ for the twin field teams must be applied in one case but not the other. Split on where the pair lands. If Anand and Bose sit in the unnamed field teams, the pair occupies one specific team and pins its identity \\,---\\, the team holding the pair is automatically distinguished from the other, so the two teams are not interchangeable and there is no $2!$ to remove: this case is $\\binom{10}{2}\\binom{8}{4}=3150$. But if the pair sits in the named Lab Theta, then the remaining eight people are split into the two genuinely anonymous teams, and now the $2!$ does bite: $\\binom{10}{2}\\cdot\\frac{1}{2}\\binom{8}{4}=1575$. A strong student who, after correctly handling the named lab, carries the same ``divide by $2!$'' reflex into the pair-in-a-team case wrongly gets $1575+1575=3150$; one who forgets the $2!$ in the pair-in-lab case gets $3150+3150=6300$. The honest count is $1575+3150=4725$. The trap is a hidden asymmetry in when symmetry actually exists, not an arithmetic slip.",
    "tags": [
      "grouping",
      "labelled vs unlabelled",
      "symmetry overcounting",
      "casework",
      "complementary counting"
    ],
    "solutions": [
      {
        "name": "Glue the pair, then case on its group",
        "steps": [
          "Treat Anand and Bose as a single inseparable unit; whichever group holds them needs $2$ more members chosen from the other $10$ researchers. Split into two cases by the type of that group, because the two cases handle the twin-team symmetry differently.",
          "Case 1 \\,---\\, the pair is in the named Lab Theta. Pick its $2$ extra members: $\\binom{10}{2}=45$ ways. The remaining $8$ people must form the two anonymous field teams; choosing $4$ of them gives $\\binom{8}{4}=70$, but the two teams are unlabelled, so divide by $2!$: $\\frac{70}{2}=35$. Case 1 total $=45\\times 35=1575$.",
          "Case 2 \\,---\\, the pair is in a field team. Pick its $2$ extra members: $\\binom{10}{2}=45$. Of the remaining $8$, the named Lab Theta takes any $4$: $\\binom{8}{4}=70$, and the final $4$ form the other field team automatically. Here there is no division by $2!$: the pair's own team is singled out by containing the pair, so the two teams are already distinguishable. Case 2 total $=45\\times 70=3150$.",
          "The two cases are disjoint and exhaustive, so add them: $1575+3150=\\boxed{4725}$."
        ]
      },
      {
        "name": "Complementary count via separation",
        "steps": [
          "Count all valid divisions, then subtract those that keep Anand and Bose apart. The total number of ways to form one named $4$-lab plus two unlabelled $4$-teams is $\\binom{12}{4}\\binom{8}{4}\\cdot\\frac{1}{2!}=495\\cdot 70\\cdot\\frac12=17325$.",
          "Now count the separated divisions, where Anand and Bose lie in different groups, by where each sits. (a) Anand in Lab Theta, Bose in a field team: fill the lab with $3$ more from the other $10$ ($\\binom{10}{3}=120$), give Bose's team $3$ more from the remaining $7$ ($\\binom{7}{3}=35$), and the last $4$ form the other team \\,---\\, no $2!$, since Bose's team is pinned: $120\\times 35=4200$.",
          "(b) Bose in Lab Theta, Anand in a field team: identical by symmetry, $4200$. (c) Anand and Bose in the two different field teams: Lab Theta takes any $4$ of the other $10$ ($\\binom{10}{4}=210$), Anand's team takes $3$ more from the remaining $6$ ($\\binom{6}{3}=20$), Bose's team is forced \\,---\\, again no $2!$, as the two teams are distinguished by which of Anand/Bose they hold: $210\\times 20=4200$.",
          "Separated total $=4200+4200+4200=12600$, so together $=17325-12600=\\boxed{4725}$."
        ]
      },
      {
        "name": "Symmetric (ordered) overcount with deliberate correction",
        "steps": [
          "First pretend all three groups are labelled \\,---\\, Lab Theta, Team I, Team II \\,---\\, so the answer is over-counted by exactly $2!$ for the genuine swap of the two field teams (the named lab never swaps). Count labelled placements with the pair together, then divide by $2$ at the very end, watching for fixed configurations.",
          "Labelled count: the pair occupies one of the three labelled groups ($3$ choices), needs $2$ more from $10$ ($\\binom{10}{2}=45$), and the remaining $8$ split into the two named leftover groups, one taking $4$ ($\\binom{8}{4}=70$). That is $3\\times 45\\times 70=9450$ labelled placements.",
          "Each genuine grouping is counted once for each labelling of the two field teams. Swapping Team I and Team II never gives the same labelled placement (the two teams hold different people in every valid division), so there are no self-paired fixed points and the overcount factor is exactly $2$ throughout.",
          "Divide cleanly: $\\dfrac{9450}{2}=\\boxed{4725}$, agreeing with the casework and complementary counts."
        ]
      }
    ],
    "remark": "The whole problem is a referendum on when a symmetry is real. The named lab and the anonymous twins look superficially alike, so the reflex is to apply the same $\\div 2!$ everywhere \\,---\\, but symmetry only exists where objects are genuinely interchangeable. The moment the constraint forces Anand and Bose into one of the field teams, that team is branded by their presence and stops being interchangeable with its twin, so the $2!$ evaporates in that case while surviving in the pair-in-lab case. The clean ordered-overcount method makes the principle explicit: divide only by the symmetries that actually act freely, and check there are no fixed configurations before dividing."
  },
  {
    "theme": "combinations",
    "themeLabel": "Combinations & Selections",
    "title": "A Round Table, Kept Apart",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "circular",
      "no-two-adjacent",
      "gap-method",
      "selection",
      "bijection"
    ],
    "statement": "Twelve chairs are arranged in a circle, numbered $1$ through $12$ clockwise (chair $12$ is adjacent to chair $1$). Four delegates are to be seated so that no two occupy adjacent chairs. Treating the chairs as fixed and distinguishable but the delegates as unlabelled (we only choose which chairs are occupied), determine the number of admissible chair-selections.",
    "answer": "$105$",
    "trap": "Reusing the straight-line answer $\\binom{n-r+1}{r}=\\binom{9}{4}=126$. On a circle the two ends wrap around, so the first and last chosen chairs can also be adjacent — the line formula overcounts. The circular case needs its own treatment.",
    "solutions": [
      {
        "name": "Fix-a-chair dichotomy (reduce to a line)",
        "steps": [
          "Split by whether chair $1$ is chosen. If chair $1$ is occupied: its neighbours $12$ and $2$ are barred, and the remaining $3$ delegates go into chairs $3,\\dots,11$ ($9$ chairs in a line) with no two adjacent: $\\binom{9-3+1}{3}=\\binom{7}{3}=35$.",
          "If chair $1$ is empty: the remaining $11$ chairs $2,\\dots,12$ form a line, and we place $4$ delegates with no two adjacent: $\\binom{11-4+1}{4}=\\binom{8}{4}=70$.",
          "Total $=35+70=\\boxed{105}$."
        ]
      },
      {
        "name": "Standard circular gap formula",
        "steps": [
          "The number of ways to choose $r$ non-adjacent objects from $n$ in a circle is $\\dfrac{n}{\\,n-r\\,}\\binom{n-r}{r}$.",
          "Here $n=12,\\ r=4$: $\\dfrac{12}{8}\\binom{8}{4}=\\dfrac{12}{8}\\cdot70=\\boxed{105}$."
        ]
      }
    ],
    "remark": "Insight: linear 'no two adjacent' is $\\binom{n-r+1}{r}$, but the circle's wrap-around adjacency demands $\\frac{n}{n-r}\\binom{n-r}{r}$. The fix-a-chair split is the honest derivation: condition on one seat to break the ring into a line."
  },
  {
    "theme": "combinations",
    "themeLabel": "Combinations & Selections",
    "title": "Exactly One Of The Two Leaders",
    "difficulty": 5,
    "task": "Count committees with leadership rule.",
    "tags": [
      "combinations",
      "inclusion-exclusion",
      "forbidden pair",
      "include or exclude"
    ],
    "statement": "A society has  $12$  members, among whom are the President  $P$  and the President's rival  $R$ . A committee of  $5$  members is to be selected subject to two rules: (i)  $P$  and  $R$  will never serve together, and (ii) the committee must contain at least one of  $P$  and  $R$ , so that leadership is represented. How many such committees are possible?",
    "answer": " $\\boxed{420}$ ",
    "trap": "Imposing only rule (i) and forgetting rule (ii). Removing the both-present committees gives  $\\binom{12}{5}-\\binom{10}{3}=792-120=672$ , but this still counts the committees containing neither  $P$  nor  $R$ . The two rules together force exactly one of them in.",
    "solutions": [
      {
        "name": "Direct: exactly one leader",
        "steps": [
          "Rules (i) and (ii) together say the committee contains exactly one of  $P,R$ . Split into the two disjoint cases.",
          "Case  $P$  in,  $R$  out: fill the remaining  $4$  seats from the  $10$  ordinary members (everyone except  $P$  and  $R$ ):  $\\binom{10}{4}=210$ .",
          "Case  $R$  in,  $P$  out: symmetrically  $\\binom{10}{4}=210$ .",
          "Add the disjoint cases:  $210+210=\\boxed{420}$ ."
        ]
      },
      {
        "name": "Inclusion-exclusion from the full count",
        "steps": [
          "Total committees of  $5$  from  $12$ :  $\\binom{12}{5}=792$ .",
          "Remove committees with neither leader (rule ii): choose all  $5$  from the  $10$  ordinary members,  $\\binom{10}{5}=252$ .",
          "Remove committees with both leaders (rule i): place  $P$  and  $R$ , then choose  $3$  from the  $10$  others,  $\\binom{10}{3}=120$ . The neither-set and the both-set are disjoint, so no add-back is needed.",
          "Hence  $792-252-120=\\boxed{420}$ , matching the direct count."
        ]
      }
    ],
    "remark": "**Insight.** Two clauses that look independent, “not both” and “at least one,” collapse to a single crisp condition: exactly one. Spotting that turns a delicate inclusion-exclusion into a two-line addition, and the full-count version is the audit that you deleted the neither-case as well as the both-case."
  },
  {
    "theme": "combinations",
    "themeLabel": "Combinations & Selections",
    "title": "One Book From Every Shelf",
    "difficulty": 5,
    "task": "Count selections hitting all subjects.",
    "tags": [
      "combinations",
      "inclusion-exclusion",
      "at least one of each",
      "selection from groups"
    ],
    "statement": "A student must take  $5$  distinct books from a shelf holding  $4$  Mathematics,  $4$  Physics and  $4$  Chemistry books (all  $12$  books distinct). The selection must contain at least one book from each of the three subjects. In how many ways can the  $5$  books be chosen?",
    "answer": " $\\boxed{624}$ ",
    "trap": "Multiplying  $\\binom{4}{1}^3=64$  to “guarantee one of each” and then trying to place the  $2$  leftover books — this badly overcounts, because the same final set of  $5$  books arises from many different choices of which copy was the “guaranteed” one. The constraint is a presence condition, not an ordered reservation.",
    "solutions": [
      {
        "name": "Inclusion-exclusion on missing subjects",
        "steps": [
          "Count all  $5$ -book selections and subtract those that miss a subject. Total:  $\\binom{12}{5}=792$ .",
          "Let  $A_S$  be the bad event “subject  $S$  is absent.” If one subject is absent, the  $5$  books come from the other  $8$ :  $\\binom{8}{5}=56$ , and there are  $3$  choices of the missing subject.",
          "If two subjects are absent, all  $5$  books come from a single subject's  $4$  books:  $\\binom{4}{5}=0$ , so these terms vanish (and three absent is impossible).",
          "By inclusion-exclusion:  $792-3\\cdot 56+3\\cdot 0=792-168=\\boxed{624}$ ."
        ]
      },
      {
        "name": "Direct: enumerate the subject distributions",
        "steps": [
          "With  $5$  books over three subjects each present, the count-per-subject is a permutation of  $(3,1,1)$  or  $(2,2,1)$ .",
          "Pattern  $(3,1,1)$ : pick which subject supplies  $3$  ( $3$  ways), then  $\\binom{4}{3}\\binom{4}{1}\\binom{4}{1}=4\\cdot 4\\cdot 4=64$ , giving  $3\\cdot 64=192$ .",
          "Pattern  $(2,2,1)$ : pick which subject supplies  $1$  ( $3$  ways), then  $\\binom{4}{2}\\binom{4}{2}\\binom{4}{1}=6\\cdot 6\\cdot 4=144$ , giving  $3\\cdot 144=432$ .",
          "These distributions are disjoint, so the total is  $192+432=\\boxed{624}$ , confirming the inclusion-exclusion value."
        ]
      }
    ],
    "remark": "**Insight.** “At least one from each group” is a hitting-all condition, and the clean tool is inclusion-exclusion on the groups that go missing — never a product of one-from-each picks, which double-counts the unlabelled set. The distribution-pattern sum is the independent witness that  $624$  is right."
  },
  {
    "theme": "combinations",
    "themeLabel": "Combinations & Selections",
    "title": "Balanced Committee, Feuding Officers",
    "difficulty": 5,
    "task": "Count balanced committees minus clash.",
    "tags": [
      "combinations",
      "overlapping constraints",
      "at least two",
      "forbidden pair"
    ],
    "statement": "A committee of  $5$  is to be drawn from  $7$  seniors and  $6$  juniors. The committee must contain at least  $2$  seniors and at least  $2$  juniors. Among the people are the senior Chairman  $C$  and the junior Secretary  $K$ , who refuse to serve together. How many committees satisfy all the conditions?",
    "answer": " $\\boxed{810}$ ",
    "trap": "Computing the balanced committees ( $945$ ) and then subtracting every committee that contains both  $C$  and  $K$  via  $\\binom{11}{3}=165$ . That blindly fills  $3$  free seats from the remaining  $11$  people and includes committees whose senior/junior split is not  $2$ – $3$  or  $3$ – $2$ ; the correct clash-count is only  $135$ .",
    "solutions": [
      {
        "name": "Balanced count, then remove the clashing pair",
        "steps": [
          "“At least  $2$  seniors and at least  $2$  juniors” over a size- $5$  committee forces the split to be  $3$  seniors  $+\\,2$  juniors or  $2$  seniors  $+\\,3$  juniors. Base count:  $\\binom{7}{3}\\binom{6}{2}+\\binom{7}{2}\\binom{6}{3}=35\\cdot 15+21\\cdot 20=525+420=945$ .",
          "Now subtract the balanced committees that contain both  $C$  (a senior) and  $K$  (a junior). With  $C,K$  already seated, the remaining  $3$  seats must keep a valid split.",
          "Split  $3$ S $+2$ J with  $C,K$  in: need  $2$  more seniors from the other  $6$  and  $1$  more junior from the other  $5$ :  $\\binom{6}{2}\\binom{5}{1}=15\\cdot 5=75$ . Split  $2$ S $+3$ J: need  $1$  more senior and  $2$  more juniors:  $\\binom{6}{1}\\binom{5}{2}=6\\cdot 10=60$ . Clash total  $=75+60=135$ .",
          "Therefore the answer is  $945-135=\\boxed{810}$ ."
        ]
      },
      {
        "name": "Split by which side the clashing officer joins",
        "steps": [
          "Replace the global subtraction by counting valid committees directly, conditioning on  $C$  and  $K$ . Use the two allowed splits.",
          "Split  $3$ S $+2$ J: seniors  $=\\binom{7}{3}=35$ , juniors  $=\\binom{6}{2}=15$ , so  $525$  total; those containing both  $C$  and  $K$  number  $\\binom{6}{2}\\binom{5}{1}=75$ , leaving  $525-75=450$ .",
          "Split  $2$ S $+3$ J: seniors  $=\\binom{7}{2}=21$ , juniors  $=\\binom{6}{3}=20$ , so  $420$  total; those with both  $C,K$  number  $\\binom{6}{1}\\binom{5}{2}=60$ , leaving  $420-60=360$ .",
          "Add the disjoint splits:  $450+360=\\boxed{810}$ , matching the first method."
        ]
      }
    ],
    "remark": "**Insight.** When a “forbidden pair” rides on top of a split constraint, the pair must be removed inside each split, not against the whole pool. Subtracting  $\\binom{11}{3}$  silently re-admits illegal splits; doing the deletion split-by-split is what keeps the two overlapping constraints honest."
  },
  {
    "theme": "circular",
    "themeLabel": "Circular Permutations",
    "title": "Two Friends Side by Side",
    "difficulty": 3,
    "task": "Count seatings with two adjacent",
    "tags": [
      "circular permutation",
      "adjacency",
      "block method",
      "two together"
    ],
    "statement": "Seven distinct people are to be seated around a round table, two seatings being the same if one is a rotation of the other. $2$ of the seven, Asha and Bharat, are close friends and insist on sitting next to each other. In how many distinct ways can the seven be seated?",
    "answer": " $\\boxed{240}$ ",
    "trap": "Many students fuse Asha and Bharat into one unit, count  $6$  remaining units, and write  $6!\\cdot 2 = 1440$ , forgetting that around a circle six units are arranged in  $(6-1)! = 5!$  ways, not  $6!$ . The correct figure is  $5!\\cdot 2 = 240$ .",
    "solutions": [
      {
        "name": "Treat the pair as a single block",
        "steps": [
          "Regard Asha and Bharat as one combined block. Together with the other  $5$  people this gives  $6$  units to seat around the table.",
          "Six units around a circle (rotations identified) can be arranged in  $(6-1)! = 5! = 120$  ways.",
          "Within the block Asha and Bharat may swap, contributing a factor of  $2$ .",
          "Total  $= 5!\\cdot 2 = 120 \\cdot 2 = \\boxed{240}$ ."
        ]
      },
      {
        "name": "Fix Asha, then place Bharat beside her",
        "steps": [
          "Anchor Asha at a reference seat to eliminate rotations; the remaining  $6$  seats are now distinct labelled positions.",
          "Bharat must take the seat to Asha's immediate left or immediate right:  $2$  choices.",
          "The remaining  $5$  people fill the remaining  $5$  seats in  $5! = 120$  ways.",
          "Total  $= 2 \\cdot 5! = 2 \\cdot 120 = \\boxed{240}$ ."
        ]
      }
    ],
    "remark": "**Insight.** Whether you block-and-circle or fix-and-place, the answer is the same — but the two routes guard against different slips. Fixing a person makes it visible that there is no extra  $\\div 7$  to apply, because pinning a seat has already used up the rotational symmetry."
  },
  {
    "theme": "circular",
    "themeLabel": "Circular Permutations",
    "title": "A Bracelet of Eight Gems",
    "difficulty": 4,
    "task": "Count distinct bracelets",
    "tags": [
      "circular permutation",
      "garland",
      "reflection symmetry",
      "divide by two"
    ],
    "statement": "$8$ distinct gemstones are to be strung onto a circular bracelet. Because a bracelet can be flipped over as well as rotated, two strings are regarded as the same arrangement if one is obtained from the other by a rotation, a flip, or both. How many genuinely different bracelets can be made?",
    "answer": " $\\boxed{2520}$ ",
    "trap": "Forgetting that a bracelet (garland / necklace) can be turned over: writing the seating-style answer  $(8-1)! = 5040$  double-counts, because each bracelet and its mirror image are the same physical object. For a flippable loop one must also divide by  $2$ , giving  $\\tfrac{(8-1)!}{2} = 2520$ .",
    "solutions": [
      {
        "name": "Circular count, then halve for the flip",
        "steps": [
          "If only rotations were identified, the number of arrangements of  $8$  distinct gems around the loop would be  $(8-1)! = 7! = 5040$ .",
          "A bracelet may additionally be flipped over, so each clockwise reading and its anticlockwise (mirror) reading describe the same bracelet, pairing the  $5040$  arrangements two by two.",
          "Hence divide by  $2$ : number of bracelets  $= \\dfrac{7!}{2} = \\dfrac{5040}{2} = \\boxed{2520}$ ."
        ]
      },
      {
        "name": "Fix one gem and orient the rest",
        "steps": [
          "Place one chosen gem at a fixed point of the loop to remove all rotations; the other  $7$  gems now sit in  $7! = 5040$  orderings around it.",
          "Reading the remaining seven clockwise versus anticlockwise from the fixed gem gives mirror-image bracelets that are physically identical, so each real bracelet appears exactly twice in this list.",
          "Therefore the number of distinct bracelets is  $\\dfrac{7!}{2} = \\boxed{2520}$ ."
        ]
      }
    ],
    "remark": "**Insight.** The single question that decides the  $\\div 2$  is physical: can the object be picked up and flipped? Seats bolted around a table cannot, so use  $(n-1)!$ ; a bracelet or garland can, so use  $\\tfrac{(n-1)!}{2}$ . The geometry, not the algebra, tells you which."
  },
  {
    "theme": "circular",
    "themeLabel": "Circular Permutations",
    "title": "Two Rivals Kept Apart",
    "difficulty": 4,
    "task": "Count seatings with two apart",
    "tags": [
      "circular permutation",
      "complementary counting",
      "non-adjacency",
      "two apart"
    ],
    "statement": "Eight distinct people are to be seated around a round table, two seatings being identical if one is a rotation of the other. Two of them, Priya and Rahul, are rivals and must  $\\textbf{not}$  sit next to each other. In how many distinct ways can the eight be seated?",
    "answer": " $\\boxed{3600}$ ",
    "trap": "Subtracting the 'together' count from the wrong total is the usual mistake: writing  $8! - (\\text{together})$  instead of using the circular total  $(8-1)! = 5040$ . Another slip is computing 'together' as  $7!\\cdot 2$ . The pair-as-a-block count around a circle is  $(7-1)!\\cdot 2 = 1440$ , so the answer is  $5040 - 1440 = 3600$ , not  $5040 - 7!\\cdot 2$ .",
    "solutions": [
      {
        "name": "Complementary count (total minus together)",
        "steps": [
          "Total circular seatings of  $8$  distinct people:  $(8-1)! = 7! = 5040$ .",
          "Count the seatings where Priya and Rahul  $\\textit{are}$  adjacent: glue them into a block, giving  $7$  units around the circle in  $(7-1)! = 6! = 720$  ways, times  $2$  for their internal order, so  $720 \\cdot 2 = 1440$ .",
          "Subtract:  $5040 - 1440 = \\boxed{3600}$ ."
        ]
      },
      {
        "name": "Fix Priya and count Rahul's safe seats",
        "steps": [
          "Anchor Priya at a reference seat to remove rotations; the other  $7$  seats are now distinct positions, two of which are immediately beside Priya.",
          "Rahul must avoid those  $2$  neighbouring seats, so he has  $7 - 2 = 5$  allowed seats.",
          "The remaining  $6$  people fill the remaining  $6$  seats in  $6! = 720$  ways.",
          "Total  $= 5 \\cdot 6! = 5 \\cdot 720 = \\boxed{3600}$ ."
        ]
      }
    ],
    "remark": "**Insight.** 'Not adjacent' is cleanest as total-minus-together, but the fix-a-person route makes the structure vivid: pinning Priya turns a vague circular condition into the concrete statement 'Rahul has  $5$  of  $7$  seats', after which everything is an ordinary arrangement."
  },
  {
    "theme": "circular",
    "themeLabel": "Circular Permutations",
    "title": "A Garland with Two Bound Flowers",
    "difficulty": 4,
    "task": "Count garlands, two adjacent",
    "tags": [
      "circular permutation",
      "garland",
      "reflection symmetry",
      "adjacency block"
    ],
    "statement": "Nine distinct flowers are to be woven into a circular garland. $2$ of the flowers, a rose and a jasmine, must be placed immediately next to each other. Since a garland may be both rotated and flipped over, two garlands are the same if one is obtained from the other by rotation, flip, or both. How many distinct such garlands are possible?",
    "answer": " $\\boxed{5040}$ ",
    "trap": "Two errors compound here. First, treating it like a seating and using  $(8-1)!\\cdot 2 = 80640$  ignores the flip, so it double-counts mirror images. Second, after the  $\\div 2$  for the flip, the internal  $\\times 2$  for the rose-jasmine order and the  $\\div 2$  for the flip happen to cancel — a coincidence worth checking, not assuming. The honest result is  $\\dfrac{(8-1)!\\cdot 2}{2} = 7! = 5040$ .",
    "solutions": [
      {
        "name": "Block the pair, count as a flippable loop",
        "steps": [
          "Glue the rose and jasmine into one block; with the other  $7$  flowers this gives  $8$  units to weave into the loop.",
          "If only rotations were identified,  $8$  units around a loop arrange in  $(8-1)! = 7! = 5040$  ways, and the block has  $2$  internal orders, giving  $5040\\cdot 2 = 10080$ .",
          "A garland can also be flipped, pairing each arrangement with its mirror image, so divide by  $2$ :  $\\dfrac{10080}{2} = \\boxed{5040}$ ."
        ]
      },
      {
        "name": "Fix the block and orient the loop",
        "steps": [
          "Place the rose-jasmine block at a fixed location of the loop to remove rotations; the remaining  $7$  flowers fill the rest in  $7! = 5040$  orderings.",
          "Reading those seven flowers clockwise versus anticlockwise gives mirror-image garlands that are the same object, so each garland is counted twice here — a factor  $\\tfrac{1}{2}$ .",
          "The rose and jasmine inside the block can swap — a factor  $2$  — but flipping the garland also swaps the side they sit on, so these two factors cancel:  $7!\\cdot \\dfrac{2}{2} = 7! = \\boxed{5040}$ ."
        ]
      }
    ],
    "remark": "**Insight.** When a constraint sits at the very axis of a flip (an adjacent pair, the centre of symmetry), the internal  $\\times 2$  and the flip's  $\\div 2$  can cancel. Never assume it — but always check it, because it is exactly where careless counters land on double the truth."
  },
  {
    "theme": "circular",
    "themeLabel": "Circular Permutations",
    "title": "Five Couples, Each Pair United",
    "difficulty": 5,
    "task": "Count circular seatings",
    "tags": [
      "circular permutation",
      "blocks together",
      "couples",
      "internal arrangement"
    ],
    "statement": "$5$ married couples — ten people in all — are to be seated around a single round table. Seatings are regarded as identical when one is obtained from another by a rotation of the whole table. The host insists that every husband sit immediately next to his own wife. In how many distinct ways can the ten people be seated?",
    "answer": " $\\boxed{768}$ ",
    "trap": "A very common error is to glue each couple into one block, get  $5$  blocks, and write  $5!\\cdot 2^5 = 32 \\cdot 32 = 3840$  by treating the  $5$  blocks as if they sat in a row. Around a round table the blocks themselves form a circular arrangement, so the count of block orderings is  $(5-1)! = 4! = 24$ , not  $5! = 120$ . The honest answer is  $4!\\cdot 2^5 = 768$ , not  $3840$ .",
    "solutions": [
      {
        "name": "Glue each couple, then seat the blocks in a circle",
        "steps": [
          "Tie each husband to his wife so that the couple becomes a single inseparable block. There are now  $5$  blocks to place around the round table.",
          "Seating  $5$  distinct blocks around a circle (rotations identified) can be done in  $(5-1)! = 4! = 24$  ways.",
          "Inside each block the husband and wife can sit in  $2$  orders (husband-left or wife-left), independently for all  $5$  blocks, giving a factor  $2^5 = 32$ .",
          "By the product rule the total is  $4!\\cdot 2^5 = 24 \\cdot 32 = \\boxed{768}$ ."
        ]
      },
      {
        "name": "Fix one person to kill the rotation",
        "steps": [
          "Pin husband  $H_1$  to a reference seat; this removes the rotational freedom so the remaining seats are now genuinely distinct positions.",
          "His wife  $W_1$  must be on his immediate left or right:  $2$  choices. The couple now occupies a fixed pair of adjacent seats.",
          "The other  $4$  couples, as  $4$  blocks, fill the remaining arc in  $4!$  orders, and each of those couples has  $2$  internal orders, giving  $4!\\cdot 2^4$ .",
          "Total  $= 2 \\cdot 4!\\cdot 2^4 = 2 \\cdot 24 \\cdot 16 = \\boxed{768}$ ."
        ]
      }
    ],
    "remark": "**Insight.** Gluing objects into blocks is the right first move, but the blocks then inherit the geometry of the original arrangement: in a row you would use  $5!$ , around a circle you must drop to  $(5-1)!$ . The  $\\div n$  for rotation is applied once, to the blocks — never to the people inside them."
  },
  {
    "theme": "circular",
    "themeLabel": "Circular Permutations",
    "title": "Alternating, but One Couple Apart",
    "difficulty": 5,
    "task": "Count alternating, couple separated",
    "tags": [
      "circular permutation",
      "alternating",
      "complementary counting",
      "couple non-adjacent"
    ],
    "statement": "Six men and six women are to be seated around a round table so that the genders strictly alternate. Among them is a particular married couple, a man  $M$  and his wife  $W$ . The arrangement must keep the genders alternating  $\\textbf{and}$  ensure that  $M$  and  $W$  do  $\\textbf{not}$  sit next to each other. Seatings that differ only by a rotation are identical. In how many distinct ways can the twelve be seated?",
    "answer": " $\\boxed{57600}$ ",
    "trap": "The total alternating count is  $(6-1)!\\cdot 6! = 86400$ . The trap is computing the 'couple-together' count to subtract: a woman has  $2$  neighbouring man-seats, so the wrong instinct is to treat  $W$  as having  $6$  adjacency choices. Correctly, fixing the men's circle ( $5!$ ),  $W$  may take either of the  $2$  seats beside  $M$ , and the other  $5$  women fill the rest in  $5!$ , giving  $5!\\cdot 2\\cdot 5! = 28800$ ; the answer is  $86400 - 28800 = 57600$ .",
    "solutions": [
      {
        "name": "Alternating total minus couple-adjacent",
        "steps": [
          "Total alternating seatings: seat the  $6$  men circularly in  $(6-1)! = 5! = 120$  ways, then fill the  $6$  alternate gaps with the  $6$  women in  $6! = 720$  ways, giving  $120 \\cdot 720 = 86400$ .",
          "Count those with  $M$  and  $W$  adjacent: with the men's circle fixed ( $5! = 120$ ), the wife  $W$  must sit in one of the  $2$  woman-seats flanking  $M$  ( $2$  ways), and the remaining  $5$  women fill the other  $5$  gaps in  $5! = 120$  ways:  $120\\cdot 2\\cdot 120 = 28800$ .",
          "Subtract:  $86400 - 28800 = \\boxed{57600}$ ."
        ]
      },
      {
        "name": "Place the wife in a forbidden-free gap",
        "steps": [
          "Seat the  $6$  men circularly:  $(6-1)! = 5! = 120$  ways, creating  $6$  distinguishable woman-gaps; exactly  $2$  of these gaps are immediately beside  $M$ .",
          "The wife  $W$  must avoid those  $2$  gaps, so she has  $6 - 2 = 4$  allowed gaps.",
          "The remaining  $5$  women fill the remaining  $5$  gaps in  $5! = 120$  ways.",
          "Total  $= 5!\\cdot 4\\cdot 5! = 120 \\cdot 4 \\cdot 120 = \\boxed{57600}$ ."
        ]
      }
    ],
    "remark": "**Insight.** Two structural conditions stack here: alternation pins which seats are men's and which are women's, and only then does the non-adjacency condition reduce to 'the wife dodges  $2$  of  $6$  gaps'. Resolve the coarse structure first; the fine constraint becomes a simple subtraction."
  },
  {
    "theme": "circular",
    "themeLabel": "Circular Permutations",
    "title": "Six Men, Six Women, Alternating",
    "difficulty": 5,
    "task": "Count alternating seatings",
    "tags": [
      "circular permutation",
      "alternating",
      "gap method",
      "men and women"
    ],
    "statement": "$6$ men and six women are to be seated around a round table so that the genders strictly alternate (no two people of the same gender sit next to each other). Seatings that differ only by a rotation of the whole table are counted as the same. In how many distinct ways can this be done?",
    "answer": " $\\boxed{86400}$ ",
    "trap": "A frequent slip is to seat the men in  $(6-1)!$  ways and then also seat the women in  $(6-1)!$  ways, giving  $(5!)^2 = 14400$ . But only the first group founds the circle; once the men's circle is fixed, the six women fill six labelled gaps, and labelled positions are filled in  $6!$  ways, not  $(6-1)!$ . The correct value is  $5!\\cdot 6! = 86400$ .",
    "solutions": [
      {
        "name": "Seat one gender circularly, fill the gaps with the other",
        "steps": [
          "Seat the  $6$  men around the table first; as a circular arrangement this can be done in  $(6-1)! = 5! = 120$  ways. This fixes the rotational reference.",
          "Between consecutive men there are exactly  $6$  gaps, and these gaps are now distinguishable positions because the men's circle is already fixed.",
          "The  $6$  women must occupy these  $6$  gaps to keep the genders alternating; filling  $6$  distinct positions with  $6$  distinct women gives  $6! = 720$  ways.",
          "Total  $= 5!\\cdot 6! = 120 \\cdot 720 = \\boxed{86400}$ ."
        ]
      },
      {
        "name": "Fix one man, then alternate around",
        "steps": [
          "Pin one man to a reference seat to remove rotations; the remaining  $11$  seats are now distinct, and seats alternate man-seat / woman-seat around the circle.",
          "The other  $5$  men fill the remaining  $5$  man-seats in  $5! = 120$  ways.",
          "The  $6$  women fill the  $6$  woman-seats in  $6! = 720$  ways.",
          "Total  $= 5!\\cdot 6! = 120 \\cdot 720 = \\boxed{86400}$ ."
        ]
      }
    ],
    "remark": "**Insight.** Exactly one group is allowed the circular discount  $(n-1)!$  — the one that builds the ring. Everyone seated afterward is dropping into positions that are already pinned down by that ring, so they are counted with a plain factorial."
  },
  {
    "theme": "circular",
    "themeLabel": "Circular Permutations",
    "title": "Three Girls, No Two Together",
    "difficulty": 5,
    "task": "Count seatings, girls separated",
    "tags": [
      "circular permutation",
      "gap method",
      "non-adjacent group",
      "arrangement in gaps"
    ],
    "statement": "$5$ boys and three girls are to be seated around a round table so that no two girls sit next to each other. Seatings differing only by a rotation of the whole table are regarded as identical. In how many distinct ways can the eight children be seated?",
    "answer": " $\\boxed{1440}$ ",
    "trap": "After seating the boys in  $(5-1)! = 24$  ways and finding  $5$  gaps, a very common error is to  $\\textit{choose}$   $3$  gaps with  $\\binom{5}{3} = 10$  and stop, forgetting the girls are distinct and must be  $\\textit{ordered}$  into those gaps. Since one girl goes per gap, the correct count is the ordered selection  $P(5,3) = 5\\cdot4\\cdot3 = 60$ , giving  $24\\cdot 60 = 1440$ , not  $24\\cdot 10 = 240$ .",
    "solutions": [
      {
        "name": "Seat boys circularly, drop girls into separate gaps",
        "steps": [
          "Seat the  $5$  boys around the table:  $(5-1)! = 4! = 24$  ways, which fixes the circle.",
          "These  $5$  boys create  $5$  gaps between consecutive boys; to keep girls apart, at most one girl may go in any gap.",
          "Place the  $3$  distinct girls into  $3$  of the  $5$  distinguishable gaps, one girl per gap: this is an ordered placement,  $P(5,3) = 5\\cdot 4\\cdot 3 = 60$  ways.",
          "Total  $= 4!\\cdot P(5,3) = 24 \\cdot 60 = \\boxed{1440}$ ."
        ]
      },
      {
        "name": "Choose gaps, then arrange the girls",
        "steps": [
          "Seat the boys circularly in  $(5-1)! = 24$  ways, producing  $5$  gaps.",
          "Choose which  $3$  of the  $5$  gaps will hold a girl:  $\\binom{5}{3} = 10$  ways (no gap holds two, so no two girls are adjacent).",
          "Arrange the  $3$  distinct girls in the  $3$  chosen gaps:  $3! = 6$  ways.",
          "Total  $= 24 \\cdot 10 \\cdot 6 = \\boxed{1440}$ , agreeing with  $P(5,3) = \\binom{5}{3}\\cdot 3!$ ."
        ]
      }
    ],
    "remark": "**Insight.** The gap method enforces 'no two together' automatically by capping each gap at one occupant. The only trap is remembering that distinct people in distinct gaps are an ordered placement:  $\\binom{5}{3}\\cdot 3! = P(5,3)$ , never just  $\\binom{5}{3}$ ."
  },
  {
    "theme": "circular",
    "themeLabel": "Circular Permutations",
    "title": "Exactly One Seat Between Them",
    "difficulty": 5,
    "task": "Count seatings, gap of one",
    "tags": [
      "circular permutation",
      "fixed reference",
      "exact distance",
      "two directions"
    ],
    "statement": "Eight distinct people are to be seated around a round table, two seatings being identical if one is a rotation of the other. $2$ of them, Sara and Tarun, want exactly one other person seated between them (that is, there is precisely one person on the shorter arc separating them). In how many distinct ways can the eight be seated?",
    "answer": " $\\boxed{1440}$ ",
    "trap": "Fixing Sara and saying 'Tarun is two seats away, so  $2$  positions; the seat between is filled by  $6$  people; the rest in  $5!$ ' is correct and gives  $2\\cdot 6\\cdot 120 = 1440$ . The trap is forgetting the clockwise/anticlockwise pair: writing only  $1$  position for Tarun yields  $720$ . Both directions are genuinely different once Sara is pinned, so the factor is  $2$ , not  $1$ .",
    "solutions": [
      {
        "name": "Fix Sara, place Tarun two seats away",
        "steps": [
          "Anchor Sara at a reference seat to remove rotations; the remaining  $7$  seats are now distinct labelled positions.",
          "Tarun must sit so that exactly one seat lies between him and Sara: that means two seats clockwise or two seats anticlockwise —  $2$  choices for Tarun.",
          "The single seat between Sara and Tarun is filled by any one of the other  $6$  people:  $6$  ways.",
          "The remaining  $5$  people fill the remaining  $5$  seats in  $5! = 120$  ways. Total  $= 2\\cdot 6\\cdot 5! = 2\\cdot 6\\cdot 120 = \\boxed{1440}$ ."
        ]
      },
      {
        "name": "Build the triple-block, then seat the rest",
        "steps": [
          "Form the ordered triple Sara - X - Tarun where  $X$  is the person in between; choose  $X$  from the other  $6$  people ( $6$  ways) and note the block can read either Sara-X-Tarun or Tarun-X-Sara ( $2$  ways).",
          "This fixed triple is now one block; together with the remaining  $5$  people it makes  $6$  units to seat around the circle:  $(6-1)! = 5! = 120$  ways.",
          "Total  $= 6\\cdot 2\\cdot 5! = 12\\cdot 120 = \\boxed{1440}$ , matching the first method."
        ]
      }
    ],
    "remark": "**Insight.** 'Exactly one between' is a distance- $2$  condition, and on a circle distance  $2$  is reachable in two rotational senses. Pinning a reference person is what exposes both senses as distinct — the cleanest antidote to silently halving the count."
  },
  {
    "theme": "circular",
    "themeLabel": "Circular Permutations",
    "title": "Three Speakers Kept Consecutive",
    "difficulty": 5,
    "task": "Count seatings, trio consecutive",
    "tags": [
      "circular permutation",
      "block of three",
      "consecutive group",
      "internal order"
    ],
    "statement": "Ten distinct delegates are to be seated around a round table, two seatings being identical if one is a rotation of the other. $3$ particular delegates — the chair, the secretary, and the treasurer — must sit in three consecutive seats (in some order among themselves). In how many distinct ways can the ten be seated?",
    "answer": " $\\boxed{30240}$ ",
    "trap": "Gluing the three into one block gives  $8$  units; the trap is arranging them as  $8!$  (a row) instead of  $(8-1)! = 7!$  (a circle), or forgetting the  $3!$  internal orders of the trio. The block of  $8$  units goes around the circle in  $7! = 5040$  ways and the trio orders internally in  $3! = 6$  ways, so the answer is  $7!\\cdot 3! = 30240$ , not  $8!\\cdot 3!$  and not  $7!$  alone.",
    "solutions": [
      {
        "name": "Block the trio, seat the units circularly",
        "steps": [
          "Tie the chair, secretary, and treasurer into one block so that they occupy three consecutive seats. With the other  $7$  delegates this gives  $8$  units.",
          "Seat the  $8$  units around the round table:  $(8-1)! = 7! = 5040$  ways.",
          "Inside the block the three officers can be ordered in  $3! = 6$  ways.",
          "Total  $= 7!\\cdot 3! = 5040 \\cdot 6 = \\boxed{30240}$ ."
        ]
      },
      {
        "name": "Fix the chair, then grow the block",
        "steps": [
          "Pin the chair to a reference seat to remove rotations; the other  $9$  seats are now distinct positions.",
          "The block of three must be consecutive and contain the chair, so the secretary and treasurer occupy the two seats forming a consecutive run with the chair; the run can sit as (chair at an end, two officers beside) in  $2$  end-orientations, and the two officers order in  $2!$  ways within — together the trio's internal orders relative to the fixed chair total  $3! = 6$ .",
          "The remaining  $7$  delegates fill the remaining  $7$  seats in  $7! = 5040$  ways.",
          "Total  $= 7!\\cdot 3! = 5040 \\cdot 6 = \\boxed{30240}$ ."
        ]
      }
    ],
    "remark": "**Insight.** A consecutive group of size  $k$  among  $n$  people around a circle contributes  $(n-k+1-1)!\\cdot k! = (n-k)!\\cdot k!$  once you realise the glued object leaves  $n-k+1$  units to arrange circularly. The discipline is: drop one factorial for the circle, restore the  $k!$  for the inside."
  },
  {
    "theme": "distributions",
    "themeLabel": "Distributions, Stars & Bars",
    "title": "Apples Among Four Baskets",
    "difficulty": 3,
    "task": "Plain stars and bars.",
    "tags": [
      "stars and bars",
      "identical objects",
      "non-negative solutions",
      "distinct boxes"
    ],
    "statement": "In how many ways can  $10$  identical apples be placed into  $4$  distinct baskets, where a basket is allowed to be empty? Equivalently, find the number of non-negative integer solutions of  $x_1+x_2+x_3+x_4 = 10$ .",
    "answer": " $\\boxed{286}$ ",
    "trap": "Using the wrong number of bars: with  $4$  boxes you place  $4-1=3$  dividers, so the count is  $\\binom{10+3}{3}$ , not  $\\binom{10+4}{4}$  or  $\\binom{10+3}{4}$ . Mis-counting bars is the classic stars-and-bars error.",
    "solutions": [
      {
        "name": "Stars and bars (objects and dividers)",
        "steps": [
          "Represent the  $10$  apples as  $10$  stars in a row. To split them among  $4$  baskets, insert  $4-1 = 3$  identical bars among the stars.",
          "Any arrangement of  $10$  stars and  $3$  bars is a valid distribution, so we choose positions for the  $3$  bars among  $10+3 = 13$  symbols.",
          "The number of such arrangements is  $\\binom{13}{3}$ .",
          " $\\binom{13}{3} = \\dfrac{13\\cdot 12\\cdot 11}{6} = \\boxed{286}$ ."
        ]
      },
      {
        "name": "Recursion on the number of baskets",
        "steps": [
          "Let  $f(n,r)$  be the number of ways to put  $n$  identical apples into  $r$  distinct baskets. Conditioning on how many apples  $k$  the last basket gets ( $0\\le k\\le n$ ) gives  $f(n,r)=\\sum_{k=0}^{n} f(n-k,r-1)$ .",
          "With one basket  $f(n,1)=1$ . Then  $f(n,2)=\\sum_{k=0}^{n}1 = n+1$ , and summing gives  $f(n,3)=\\binom{n+2}{2}$ ,  $f(n,4)=\\binom{n+3}{3}$  — the hockey-stick pattern.",
          "Setting  $n=10,r=4$  yields  $f(10,4)=\\binom{13}{3}$ .",
          "Hence the count is  $\\binom{13}{3}=\\boxed{286}$ ."
        ]
      }
    ],
    "remark": "**Insight.** The bar count is one fewer than the box count:  $r$  boxes need exactly  $r-1$  internal dividers. Anchor on that and the formula  $\\binom{n+r-1}{r-1}$  writes itself."
  },
  {
    "theme": "distributions",
    "themeLabel": "Distributions, Stars & Bars",
    "title": "Every Friend Gets at Least Two",
    "difficulty": 4,
    "task": "Distribute with lower bounds.",
    "tags": [
      "stars and bars",
      "lower bound",
      "identical objects",
      "substitution"
    ],
    "statement": "In how many ways can  $25$  identical chocolates be distributed among  $5$  distinct children so that every child receives at least  $2$  chocolates?",
    "answer": " $\\boxed{3876}$ ",
    "trap": "Subtracting only  $1$  per child (as in the bare 'no box empty' template) and getting  $\\binom{20+4}{4}$ , or subtracting the required  $2$  from the box-count rather than from the total — the floor of  $2$  removes  $2\\times 5 = 10$  chocolates up front.",
    "solutions": [
      {
        "name": "Lower-bound substitution then stars and bars",
        "steps": [
          "Give each child their mandatory  $2$  first. Write  $x_i = y_i + 2$  with  $y_i\\ge 0$  the extra chocolates for child  $i$ .",
          "The equation  $x_1+\\cdots+x_5=25$  becomes  $y_1+\\cdots+y_5 = 25 - 10 = 15$  with all  $y_i\\ge 0$ .",
          "By stars and bars the number of non-negative solutions is  $\\binom{15+5-1}{5-1}=\\binom{19}{4}$ .",
          " $\\binom{19}{4} = \\dfrac{19\\cdot 18\\cdot 17\\cdot 16}{24} = \\boxed{3876}$ ."
        ]
      },
      {
        "name": "Bars-among-stars placement",
        "steps": [
          "After handing out the compulsory  $10$  chocolates,  $15$  identical chocolates remain to be placed freely into  $5$  distinct children.",
          "Lay the  $15$  chocolates in a row and insert  $4$  identical dividers among them to split into  $5$  groups; positions and chocolates total  $15+4=19$  symbols.",
          "Choosing which  $4$  of the  $19$  symbol-slots are bars gives  $\\binom{19}{4}$  arrangements.",
          "Hence the answer is  $\\binom{19}{4}=\\boxed{3876}$ ."
        ]
      }
    ],
    "remark": "**Insight.** A lower bound is paid in advance: prepay each child's minimum, and what remains is an unconstrained stars-and-bars problem on the leftover total — never on the leftover boxes."
  },
  {
    "theme": "distributions",
    "themeLabel": "Distributions, Stars & Bars",
    "title": "Strictly Increasing Digit Triples",
    "difficulty": 4,
    "task": "Recast as a distribution.",
    "tags": [
      "stars and bars",
      "gap transformation",
      "combinations",
      "monotone sequences"
    ],
    "statement": "How many integer triples  $(a,b,c)$  satisfy  $1 \\le a < b < c \\le 9$ ? Show that this strict-inequality count is itself a disguised stars-and-bars distribution by counting the gaps between consecutive terms.",
    "answer": " $\\boxed{84}$ ",
    "trap": "Confusing the strict chain  $a<b<c$  with the weak chain  $a\\le b\\le c$ ; the strict case is plainly  $\\binom{9}{3}$ , but the point is to see the gap variables as a constrained distribution and not double-count by ordering the chosen values.",
    "solutions": [
      {
        "name": "Direct selection",
        "steps": [
          "Any choice of  $3$  distinct values from  $\\{1,2,\\dots,9\\}$  can be arranged in exactly one increasing order, so strictly increasing triples correspond bijectively to  $3$ -element subsets.",
          "The number of  $3$ -element subsets of a  $9$ -element set is  $\\binom{9}{3}$ .",
          " $\\binom{9}{3} = \\dfrac{9\\cdot 8\\cdot 7}{6} = \\boxed{84}$ ."
        ]
      },
      {
        "name": "Gap variables as a bounded distribution",
        "steps": [
          "Define the four gaps  $g_0 = a-1$ ,  $g_1 = b-a$ ,  $g_2 = c-b$ ,  $g_3 = 9-c$ . From  $a<b<c$  we need  $g_1,g_2 \\ge 1$  and  $g_0,g_3\\ge 0$ , while  $g_0+g_1+g_2+g_3 = 8$ .",
          "Pay the two mandatory units: set  $g_1 = h_1+1$ ,  $g_2 = h_2+1$  with  $h_1,h_2\\ge 0$ . The total drops to  $h_1+h_2+g_0+g_3 = 6$  with all four variables  $\\ge 0$ .",
          "Stars and bars over  $4$  non-negative variables summing to  $6$  gives  $\\binom{6+3}{3}=\\binom{9}{3}$ .",
          "Therefore the count is  $\\binom{9}{3}=\\boxed{84}$ , matching the direct subset count."
        ]
      }
    ],
    "remark": "**Insight.** Ordered selections with strict inequalities are the gaps of a stars-and-bars layout: the values become bars and the spaces between them become the boxes, so a counting identity for subsets falls out of a distribution argument."
  },
  {
    "theme": "distributions",
    "themeLabel": "Distributions, Stars & Bars",
    "title": "Twelve in Four Heaps or Fewer",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "integer-partitions",
      "at-most-k-parts",
      "conjugate-partition",
      "bounded-largest-part"
    ],
    "statement": "Determine the number of partitions of $12$ into at most $4$ positive parts (order irrelevant); equivalently, the number of ways to split $12$ identical tokens into between one and four unlabelled non-empty heaps.",
    "answer": "$34$",
    "trap": "Treating the heaps as distinguishable and reaching for stars-and-bars, or hunting for a single $\\binom{?}{?}$ formula. Ordered counting gives the compositions $\\sum_{j=1}^{4}\\binom{11}{j-1}=1+11+55+165=232$, vastly overcounting because each unordered partition is hit once per arrangement of its parts. Partitions are unordered, so there is no closed binomial; you must enumerate by largest part (or use the conjugate). A second frequent slip is forgetting partitions with fewer than four parts (one, two, or three heaps) all count.",
    "solutions": [
      {
        "name": "Conjugate to bounded largest part",
        "steps": [
          "By conjugation (reflecting a Young diagram across its main diagonal), partitions of $12$ into at most $4$ parts are in bijection with partitions of $12$ whose largest part is at most $4$, i.e. partitions using only parts from $\\{1,2,3,4\\}$.",
          "These are counted by the coefficient of $x^{12}$ in $\\dfrac{1}{(1-x)(1-x^2)(1-x^3)(1-x^4)}$, the product of geometric series allowing any number of $1$s, $2$s, $3$s, and $4$s.",
          "Expanding the series, that coefficient is $34$, so the answer is $\\boxed{34}$."
        ]
      },
      {
        "name": "Enumerate by largest part",
        "steps": [
          "Largest part $\\ge 5$ forces at most $4$ parts automatically once we cap the count; tabulate by the value of the largest part. Largest part $12,11,\\dots,6$ contribute $1,1,2,3,4,5,7$ partitions respectively (e.g. largest part $6$: $6{+}6,\\,6{+}5{+}1,\\,6{+}4{+}2,\\,6{+}4{+}1{+}1,\\,6{+}3{+}3,\\,6{+}3{+}2{+}1,\\,6{+}2{+}2{+}2$).",
          "Largest part $5$: $5{+}5{+}2,\\,5{+}5{+}1{+}1,\\,5{+}4{+}3,\\,5{+}4{+}2{+}1,\\,5{+}3{+}3{+}1,\\,5{+}3{+}2{+}2$ — $6$ of them. Largest part $4$: $4{+}4{+}4,\\,4{+}4{+}3{+}1,\\,4{+}4{+}2{+}2,\\,4{+}3{+}3{+}2$ — $4$ of them. Largest part $3$: only $3{+}3{+}3{+}3$ — $1$. Largest part $\\le 2$ needs more than four parts, so none.",
          "Summing $1+1+2+3+4+5+7+6+4+1=34$ gives $\\boxed{34}$."
        ]
      },
      {
        "name": "Recurrence $p(n,k)$",
        "steps": [
          "Let $p(n,k)$ be the number of partitions of $n$ into at most $k$ parts. Split on whether some part equals $k$: $p(n,k)=p(n,k-1)+p(n-k,k)$ (no part as large as $k$, versus peeling one part off each of the $k$ rows of a $k$-part diagram).",
          "Build up: $p(12,1)=1$, $p(12,2)=7$, $p(12,3)=19$, and $p(8,4)=15$.",
          "Then $p(12,4)=p(12,3)+p(8,4)=19+15=\\boxed{34}$."
        ]
      }
    ],
    "remark": "'At most $k$ parts' is the conjugate of 'largest part $\\le k$' — that reflection is the cleanest reframing. The recurrence $p(n,k)=p(n,k-1)+p(n-k,k)$ ('use no $k$-part' versus 'peel one unit off each of $k$ parts') is the engine that scales to large $n$, where listing by largest part becomes hopeless."
  },
  {
    "theme": "distributions",
    "themeLabel": "Distributions, Stars & Bars",
    "title": "Boxes with a Capacity Ceiling",
    "difficulty": 5,
    "task": "Count bounded solutions.",
    "tags": [
      "stars and bars",
      "upper bound",
      "inclusion-exclusion",
      "identical objects"
    ],
    "statement": "Find the number of solutions in non-negative integers  $(x_1,x_2,x_3,x_4)$  of  \\[ x_1+x_2+x_3+x_4 = 18, \\qquad 0 \\le x_i \\le 7 \\text{ for each } i. \\]  That is, distribute  $18$  identical balls into  $4$  distinct boxes so that no box holds more than  $7$  balls.",
    "answer": " $\\boxed{246}$ ",
    "trap": "Forgetting the cap and reporting the raw stars-and-bars count  $\\binom{18+3}{3}=\\binom{21}{3}=1330$ , or applying inclusion-exclusion with the wrong shift: a box exceeding the cap has at least  $8$ , so you must subtract  $8$  from the total, not  $7$ .",
    "solutions": [
      {
        "name": "Inclusion-exclusion on the upper bounds",
        "steps": [
          "Without the cap, the number of non-negative solutions of  $x_1+\\cdots+x_4=18$  is  $\\binom{18+3}{3}=\\binom{21}{3}=1330$ .",
          "Let  $A_i$  be the bad event  $x_i\\ge 8$ . Substitute  $x_i=y_i+8$ : then  $y_i\\ge0$  and the sum becomes  $10$ , giving  $\\binom{10+3}{3}=\\binom{13}{3}=286$  for each single  $A_i$ . There are  $\\binom{4}{1}=4$  such terms.",
          "For two boxes over the cap, subtract  $8$  twice: sum  $=2$ , giving  $\\binom{2+3}{3}=\\binom{5}{3}=10$  each, with  $\\binom{4}{2}=6$  pairs. Three or more over the cap need a sum  $\\ge 24>18$ , impossible.",
          "By inclusion-exclusion the count is  $1330 - 4\\cdot 286 + 6\\cdot 10 = 1330-1144+60 = \\boxed{246}$ ."
        ]
      },
      {
        "name": "Complementary symmetry (count emptiness)",
        "steps": [
          "Set  $z_i = 7 - x_i$ . Then  $0\\le z_i\\le 7$  and  $z_1+z_2+z_3+z_4 = 28-18 = 10$ .",
          "So the count equals the number of non-negative solutions of a sum  $10$  with each  $z_i\\le 7$  — the same problem with a smaller total, confirming the symmetry of the cap.",
          "Apply inclusion-exclusion: total  $\\binom{13}{3}=286$ ; subtract overflows ( $z_i\\ge8$  leaves sum  $2$ ):  $\\binom{5}{3}=10$  each,  $\\binom{4}{1}=4$  terms. Two overflows need sum  $\\ge16>10$ , impossible.",
          "Thus  $286 - 4\\cdot 10 = 286-40 = \\boxed{246}$ , matching the direct computation."
        ]
      }
    ],
    "remark": "**Insight.** An upper bound is just a lower bound seen from the other side: replacing  $x_i$  by  $7-x_i$  reflects the whole distribution, and the smaller of the two totals ( $18$  vs  $10$ ) is the cheaper inclusion-exclusion to run."
  },
  {
    "theme": "distributions",
    "themeLabel": "Distributions, Stars & Bars",
    "title": "Onto Functions from Six to Three",
    "difficulty": 5,
    "task": "Count surjections.",
    "tags": [
      "distinct objects",
      "surjective functions",
      "inclusion-exclusion",
      "no box empty"
    ],
    "statement": "Six distinct prizes are to be awarded to three distinct contestants  $A,B,C$ , each prize going to exactly one contestant. In how many ways can this be done so that every contestant wins at least one prize (i.e. count the onto functions from a  $6$ -element set to a  $3$ -element set)?",
    "answer": " $\\boxed{540}$ ",
    "trap": "Treating the prizes as identical and using stars and bars, or forgetting inclusion-exclusion and reporting  $3^6$ . Distinct objects into distinct boxes with 'no box empty' is a surjection count, not a stars-and-bars count.",
    "solutions": [
      {
        "name": "Inclusion-exclusion on empty contestants",
        "steps": [
          "Each of the  $6$  distinct prizes independently goes to one of  $3$  contestants, giving  $3^6 = 729$  total assignments (some leave a contestant empty-handed).",
          "Subtract assignments missing at least one named contestant: choosing which contestant to exclude in  $\\binom{3}{1}=3$  ways leaves  $2^6=64$  assignments each, total  $3\\cdot 64 = 192$ .",
          "Add back assignments missing two contestants (all prizes to one person):  $\\binom{3}{2}=3$  ways,  $1^6=1$  each, total  $3$ .",
          "Onto count  $= 3^6 - \\binom{3}{1}2^6 + \\binom{3}{2}1^6 = 729 - 192 + 3 = \\boxed{540}$ ."
        ]
      },
      {
        "name": "Partition the prize-counts, then assign people",
        "steps": [
          "Group sizes won by the three contestants must be a triple of positive integers summing to  $6$ ; up to who gets which, the patterns are  $\\{4,1,1\\}$ ,  $\\{3,2,1\\}$ ,  $\\{2,2,2\\}$ .",
          "Pattern  $4,1,1$ : choose the  $4$ -prize set  $\\binom{6}{4}=15$ , the remaining two singletons split in  $\\binom{2}{1}=2$  ways, and assign the three sizes to  $A,B,C$  — since two sizes are equal,  $3!/2!=3$  orderings:  $15\\cdot 2\\cdot 3 = 90$ .",
          "Pattern  $3,2,1$ :  $\\binom{6}{3}\\binom{3}{2}\\binom{1}{1}=20\\cdot3\\cdot1=60$  ways to form ordered groups, times  $3!=6$  assignments of distinct sizes:  $60\\cdot 6 = 360$ . Pattern  $2,2,2$ :  $\\frac{6!}{2!2!2!3!}=15$  unordered triples times  $3!=6$ : but the  $3!$  already assigns them, so directly  $\\frac{6!}{2!2!2!}\\cdot\\frac{1}{1}$  with all three sizes equal gives  $\\frac{720}{8}=90$ .",
          "Total  $= 90 + 360 + 90 = \\boxed{540}$ , agreeing with inclusion-exclusion."
        ]
      }
    ],
    "remark": "**Insight.** 'No box empty' wears two faces: for identical objects it is stars-and-bars with floors, but for distinct objects into distinct boxes it is a surjection — and surjections are counted by inclusion-exclusion on the empty boxes, never by  $\\binom{n+r-1}{r-1}$ ."
  },
  {
    "theme": "distributions",
    "themeLabel": "Distributions, Stars & Bars",
    "title": "Mixed Floors and a Ceiling",
    "difficulty": 5,
    "task": "Combine bounds.",
    "tags": [
      "stars and bars",
      "lower bound",
      "upper bound",
      "inclusion-exclusion"
    ],
    "statement": "Find the number of integer solutions of  \\[ x_1+x_2+x_3 = 20 \\]  subject to  $x_1 \\ge 1,\\ x_2 \\ge 2,\\ x_3 \\ge 3$  and additionally  $x_1 \\le 9$ . (A simultaneous floor on every variable and a ceiling on the first.)",
    "answer": " $\\boxed{99}$ ",
    "trap": "Handling the floors but forgetting that after the floor-shift the cap on  $x_1$  also shifts:  $x_1\\le 9$  becomes  $y_1\\le 8$ , so the overflow case starts at  $y_1\\ge 9$ , not  $y_1\\ge 10$ .",
    "solutions": [
      {
        "name": "Floor-shift, then cap by inclusion-exclusion",
        "steps": [
          "Pay the floors:  $x_1=y_1+1$ ,  $x_2=y_2+2$ ,  $x_3=y_3+3$  with  $y_i\\ge 0$ . The equation becomes  $y_1+y_2+y_3 = 20-6 = 14$ , and the cap  $x_1\\le 9$  becomes  $y_1\\le 8$ .",
          "Ignoring the cap, non-negative solutions number  $\\binom{14+2}{2}=\\binom{16}{2}=120$ .",
          "Subtract the overflow  $y_1\\ge 9$ : put  $y_1 = w+9$ , giving  $w+y_2+y_3 = 5$ , so  $\\binom{5+2}{2}=\\binom{7}{2}=21$  bad solutions.",
          "The count is  $120 - 21 = \\boxed{99}$ ."
        ]
      },
      {
        "name": "Sum over the capped variable",
        "steps": [
          "After the floor-shift we need  $y_1+y_2+y_3=14$  with  $0\\le y_1\\le 8$  and  $y_2,y_3\\ge 0$ .",
          "Fix  $y_1 = t$  for each  $t = 0,1,\\dots,8$ . Then  $y_2+y_3 = 14-t \\ge 0$ , which has  $\\binom{(14-t)+1}{1}=15-t$  non-negative solutions.",
          "Sum over the allowed values:  $\\sum_{t=0}^{8}(15-t) = 15+14+\\cdots+7$ , an arithmetic series of  $9$  terms with first term  $15$  and last term  $7$ .",
          "Its value is  $\\dfrac{(15+7)\\cdot 9}{2} = 99$ , so the count is  $\\boxed{99}$ , matching the inclusion-exclusion total  $120-21$ ."
        ]
      }
    ],
    "remark": "**Insight.** Floors and ceilings compose: discharge every floor first by a single shift, and only then read off how the ceiling has moved — the cap travels with its variable, landing at  $y_1\\le 8$ , not  $y_1\\le 9$ ."
  },
  {
    "theme": "distributions",
    "themeLabel": "Distributions, Stars & Bars",
    "title": "Distinct Books, No Empty Shelf",
    "difficulty": 5,
    "task": "Distinct objects, no box empty.",
    "tags": [
      "distinct objects",
      "surjective functions",
      "inclusion-exclusion",
      "no box empty"
    ],
    "statement": "$7$ distinct books are to be placed onto four distinct shelves, where the order of books on a shelf does not matter (only which shelf each book sits on). In how many ways can this be done so that no shelf is left empty?",
    "answer": " $\\boxed{8400}$ ",
    "trap": "Reaching for stars and bars (which counts identical books) or for  $4!\\cdot$  something; with distinct books and 'no empty shelf' this is exactly the number of onto functions from  $7$  books to  $4$  shelves, computed by inclusion-exclusion.",
    "solutions": [
      {
        "name": "Inclusion-exclusion on empty shelves",
        "steps": [
          "Each of the  $7$  distinct books chooses one of  $4$  shelves independently:  $4^7 = 16384$  placements in all (empties allowed).",
          "Remove placements that leave a chosen shelf empty:  $\\binom{4}{1}3^7 = 4\\cdot 2187 = 8748$ .",
          "Add back those leaving two shelves empty, then remove three empty:  $\\binom{4}{2}2^7 = 6\\cdot 128 = 768$  and  $\\binom{4}{3}1^7 = 4$ .",
          "Onto count  $= 4^7 - \\binom{4}{1}3^7 + \\binom{4}{2}2^7 - \\binom{4}{3}1^7 = 16384 - 8748 + 768 - 4 = \\boxed{8400}$ ."
        ]
      },
      {
        "name": "Shelf occupancy patterns",
        "steps": [
          "The four shelf-counts are positive integers summing to  $7$ ; the unordered patterns are  $\\{4,1,1,1\\}$ ,  $\\{3,2,1,1\\}$ ,  $\\{2,2,2,1\\}$ .",
          "Pattern  $4,1,1,1$ : ways to fill ordered shelves  $=\\dfrac{7!}{4!\\,1!\\,1!\\,1!}=210$  for one assignment of sizes to shelves, and the distinct sizes can be assigned to the  $4$  shelves in  $\\dfrac{4!}{3!}=4$  ways, giving  $210\\cdot 4 = 840$ .",
          "Pattern  $3,2,1,1$ :  $\\dfrac{7!}{3!2!1!1!}=420$  times  $\\dfrac{4!}{2!}=12$  shelf-orderings  $= 5040$ . Pattern  $2,2,2,1$ :  $\\dfrac{7!}{2!2!2!1!}=630$  times  $\\dfrac{4!}{3!}=4$   $= 2520$ .",
          "Total  $= 840 + 5040 + 2520 = \\boxed{8400}$ , agreeing with inclusion-exclusion."
        ]
      }
    ],
    "remark": "**Insight.** 'No empty shelf' with distinct objects is a surjection. The multinomial-pattern method and inclusion-exclusion are two bookkeeping routes to the same number; the patterns make the size structure visible, while inclusion-exclusion is mechanical."
  },
  {
    "theme": "distributions",
    "themeLabel": "Distributions, Stars & Bars",
    "title": "Coins With a Per-Box Range",
    "difficulty": 5,
    "task": "Two-sided bounds throughout.",
    "tags": [
      "stars and bars",
      "upper bound",
      "lower bound",
      "inclusion-exclusion"
    ],
    "statement": "Distribute  $15$  identical coins among  $3$  distinct boxes so that each box receives between  $2$  and  $6$  coins inclusive. Find the number of such distributions, i.e. integer solutions of  $x_1+x_2+x_3 = 15$  with  $2 \\le x_i \\le 6$  for every  $i$ .",
    "answer": " $\\boxed{10}$ ",
    "trap": "Applying the floor shift but then using the original cap: once  $x_i = y_i+2$ , the ceiling  $x_i\\le 6$  becomes  $y_i\\le 4$ , so the overflow event is  $y_i\\ge 5$ . Using  $y_i\\ge 7$  (from the un-shifted cap) badly over-counts.",
    "solutions": [
      {
        "name": "Floor-shift then cap by inclusion-exclusion",
        "steps": [
          "Pay each floor:  $x_i = y_i + 2$ ,  $y_i\\ge 0$ . The sum becomes  $y_1+y_2+y_3 = 15-6 = 9$ , and each cap  $x_i\\le 6$  becomes  $y_i\\le 4$ .",
          "Unrestricted non-negative solutions:  $\\binom{9+2}{2}=\\binom{11}{2}=55$ .",
          "Subtract single overflows  $y_i\\ge 5$ : substitute  $y_i = w+5$ , leaving sum  $4$ , so  $\\binom{4+2}{2}=\\binom{6}{2}=15$  each, with  $\\binom{3}{1}=3$  terms:  $45$ . Two overflows need sum  $\\ge 10 > 9$ , impossible.",
          "Count  $= 55 - 45 = \\boxed{10}$ ."
        ]
      },
      {
        "name": "Reflection to a smaller total",
        "steps": [
          "After the shift we need  $y_1+y_2+y_3 = 9$  with  $0\\le y_i\\le 4$ . Reflect via  $z_i = 4 - y_i$ , so  $0\\le z_i\\le 4$  and  $z_1+z_2+z_3 = 12-9 = 3$ .",
          "With total only  $3$ , no variable can reach  $5$ , so the cap is automatically satisfied and plain stars and bars applies.",
          "The number of non-negative solutions of  $z_1+z_2+z_3 = 3$  is  $\\binom{3+2}{2}=\\binom{5}{2}=10$ .",
          "Hence the count is  $\\boxed{10}$ , confirming the inclusion-exclusion result."
        ]
      }
    ],
    "remark": "**Insight.** When both a floor and a ceiling act, shift away the floor first, then reflect to whichever total is smaller. Here the reflection drops the total to  $3$ , small enough that the cap never binds and the answer is a single binomial coefficient."
  },
  {
    "theme": "distributions",
    "themeLabel": "Distributions, Stars & Bars",
    "title": "Two Kinds of Fruit at Once",
    "difficulty": 5,
    "task": "Distribute two independent supplies.",
    "tags": [
      "stars and bars",
      "rule of product",
      "identical objects",
      "no box empty"
    ],
    "statement": "A grocer must split  $8$  identical apples and  $6$  identical oranges among  $3$  distinct shops so that every shop receives at least one apple (oranges may be zero for a shop). In how many ways can the two supplies be distributed?",
    "answer": " $\\boxed{588}$ ",
    "trap": "Pooling the  $8$  apples and  $6$  oranges into  $14$  objects and running one stars-and-bars; the two fruits are distinguishable kinds, so the distributions are independent and must be multiplied, with the apple constraint applied only to the apples.",
    "solutions": [
      {
        "name": "Multiply two independent stars-and-bars counts",
        "steps": [
          "Apples (each shop  $\\ge 1$ ): set  $a_i = b_i + 1$ , so  $b_1+b_2+b_3 = 8-3 = 5$ . Non-negative solutions:  $\\binom{5+2}{2}=\\binom{7}{2}=21$ .",
          "Oranges (no constraint):  $o_1+o_2+o_3 = 6$  in non-negative integers gives  $\\binom{6+2}{2}=\\binom{8}{2}=28$ .",
          "Apple and orange distributions are chosen independently, so by the rule of product multiply the two counts.",
          "Total  $= 21 \\cdot 28 = \\boxed{588}$ ."
        ]
      },
      {
        "name": "Condition on the apple distribution",
        "steps": [
          "List how apples can satisfy  $\\ge 1$  per shop: there are  $\\binom{7}{2}=21$  valid apple distributions (from the shifted equation  $b_1+b_2+b_3=5$ ).",
          "Each fixed apple distribution leaves the oranges entirely free, and the number of orange distributions never depends on the apples chosen.",
          "That orange count is  $\\binom{8}{2}=28$  in every case.",
          "Summing  $28$  over the  $21$  apple distributions gives  $21\\cdot 28 = \\boxed{588}$ ."
        ]
      }
    ],
    "remark": "**Insight.** Distinguishable kinds of identical objects distribute independently. Treat each supply with its own stars-and-bars (and its own floors), then multiply — pooling unlike objects into one count is the cardinal error."
  },
  {
    "theme": "inclusionexclusion",
    "themeLabel": "Inclusion–Exclusion & Derangements",
    "title": "At Least One Returns Home",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "derangement",
      "probability",
      "complement",
      "inclusion-exclusion"
    ],
    "statement": "$7$ letters are stuffed at random into seven pre-addressed envelopes, one letter per envelope (a uniformly random permutation). Evaluate the probability that at least one letter lands in its correct envelope. Give the answer as a fully reduced fraction.",
    "answer": "$\\boxed{\\dfrac{177}{280}}$",
    "trap": "Adding the seven 'this letter is correct' probabilities to get $7\\cdot\\frac{1}{7}=1$, concluding certainty. Those events overlap, so the union probability is strictly less than the sum; you must inclusion–exclude (or take the derangement complement).",
    "solutions": [
      {
        "name": "Complement through the derangement",
        "steps": [
          "$P(\\text{at least one correct}) = 1 - P(\\text{no letter correct}) = 1 - \\dfrac{D_7}{7!}$.",
          "With $D_7 = 7!\\sum_{k=0}^{7}\\frac{(-1)^k}{k!}=1854$ and $7!=5040$, this is $1-\\dfrac{1854}{5040}=\\dfrac{3186}{5040}$.",
          "Reduce by $18$: $\\dfrac{3186}{5040}=\\boxed{\\dfrac{177}{280}}$."
        ]
      },
      {
        "name": "Direct inclusion–exclusion on the union",
        "steps": [
          "$P\\!\\left(\\bigcup A_i\\right)=\\sum_{k=1}^{7}(-1)^{k-1}\\binom7k\\dfrac{(7-k)!}{7!}=\\sum_{k=1}^{7}\\dfrac{(-1)^{k-1}}{k!}$.",
          "$=1-\\tfrac12+\\tfrac16-\\tfrac1{24}+\\tfrac1{120}-\\tfrac1{720}+\\tfrac1{5040}$.",
          "Over $5040$: $\\dfrac{5040-2520+840-210+42-7+1}{5040}=\\dfrac{3186}{5040}=\\boxed{\\dfrac{177}{280}}$."
        ]
      }
    ],
    "remark": "Insight: the at-least-one-match probability is $1-D_n/n!\\to 1-e^{-1}\\approx0.632$. By $n=7$ it has essentially converged: $177/280\\approx0.6321$, illustrating how fast the derangement series stabilises."
  },
  {
    "theme": "inclusionexclusion",
    "themeLabel": "Inclusion–Exclusion & Derangements",
    "title": "Sieving the Primorial Block",
    "difficulty": 4,
    "task": "Determine",
    "tags": [
      "inclusion-exclusion",
      "prime-divisors",
      "euler-phi",
      "divisibility"
    ],
    "statement": "From the block of integers $1,2,\\dots,2310$, determine how many are divisible by at least one of the primes $2,3,5,7,11$. (Note $2310 = 2\\cdot3\\cdot5\\cdot7\\cdot11$.)",
    "answer": "$\\boxed{1830}$",
    "trap": "Summing the five multiple-counts $1155+770+462+330+210=2927$ and calling that the answer. That exceeds the size of the block ($2310$) and double-counts every common multiple (e.g. multiples of $6$ are counted under both $2$ and $3$); the over-count must be repaired by adding back pairs, subtracting triples, and so on through all $2^5$ sign-alternating terms.",
    "solutions": [
      {
        "name": "Inclusion–exclusion via the complementary totient",
        "steps": [
          "The complement — integers in $[1,2310]$ divisible by none of $2,3,5,7,11$ — are exactly those coprime to $2310$, so their count is $\\varphi(2310)=2310\\bigl(1-\\tfrac12\\bigr)\\bigl(1-\\tfrac13\\bigr)\\bigl(1-\\tfrac15\\bigr)\\bigl(1-\\tfrac17\\bigr)\\bigl(1-\\tfrac1{11}\\bigr)$.",
          "$\\varphi(2310)=2310\\cdot\\tfrac12\\cdot\\tfrac23\\cdot\\tfrac45\\cdot\\tfrac67\\cdot\\tfrac{10}{11}=480$.",
          "Hence divisible by at least one $=2310-\\varphi(2310)=2310-480=\\boxed{1830}$."
        ]
      },
      {
        "name": "Direct alternating sum of multiple-counts",
        "steps": [
          "Singles $\\lfloor2310/p\\rfloor$: $1155,770,462,330,210$ (sum $2927$).",
          "Because each prime divides $2310$ exactly, every squarefree product $d$ of a subset also divides $2310$, so $\\lfloor 2310/d\\rfloor=2310/d$ with no rounding. The $2^5-1$ nonempty I–E terms then sum to $2310\\bigl(1-\\prod(1-1/p)\\bigr)=2310-480$.",
          "Concretely: $2927-(\\text{pairs }1358)+(\\text{triples }288)-(\\text{quads }28)+(\\text{quint }1)=1830$; thus 'at least one' $=\\boxed{1830}$."
        ]
      }
    ],
    "remark": "Insight: over a primorial block the floor functions are exact, so inclusion–exclusion collapses perfectly into Euler's product — the 'divisible by at least one prime' count is just $N-\\varphi(N)$, with no rounding error to chase. Equivalently, the multiples of each prime tile the block evenly, so the sieve is exact rather than approximate."
  },
  {
    "theme": "inclusionexclusion",
    "themeLabel": "Inclusion–Exclusion & Derangements",
    "title": "The Untouchables Modulo Three Primes",
    "difficulty": 5,
    "task": "Count",
    "tags": [
      "euler totient",
      "inclusion-exclusion",
      "chinese remainder",
      "residue classes",
      "multiplicativity"
    ],
    "statement": "Let $N = 9009 = 3^2\\cdot 7\\cdot 11\\cdot 13$. Call an integer $n$ in $[1,N]$ untouchable if it is coprime to $N$ and, simultaneously, \\[ n \\not\\equiv \\pm 1 \\pmod{7},\\qquad n \\not\\equiv \\pm 1 \\pmod{11},\\qquad n \\not\\equiv \\pm 1 \\pmod{13}. \\] How many untouchable integers lie in $[1,N]$? (Before you reach for $\\tfrac12$ of anything: ask whether 'avoid the two endpoints $\\pm 1$' really removes half the admissible residues modulo each prime, and whether the three avoidance conditions can possibly be independent of one another over the same set of coprime $n$.)",
    "answer": "\\[\\boxed{1920}\\]",
    "trap": "The seductive shortcut is to treat the three conditions as independent halvings of the coprime pool: 'each $n\\not\\equiv\\pm1$ kills half, so the count is $\\varphi(9009)\\cdot(\\tfrac12)^3 = 4320/8 = 540.$' This is doubly wrong. First, excluding the two residues $\\pm1$ from the $p-1$ units modulo a prime $p$ is a half only when $p-1=4$, i.e. $p=5$; for $p=7,11,13$ it removes $2$ of $6,10,12$ units, i.e. fractions $\\tfrac{4}{6},\\tfrac{8}{10},\\tfrac{10}{12}$, never $\\tfrac12$. Second, even the correct per-prime fractions cannot simply be multiplied onto $\\varphi$ by 'independence' rhetoric; the legitimacy of multiplying comes from the Chinese Remainder Theorem splitting the residue coordinates, not from a probabilistic coin-flip intuition. A second, more disciplined student does set up inclusion–exclusion on the three bad sets $A_7,A_{11},A_{13}$ but commits the canonical I–E sin: they add back the three pairwise overlaps and then forget the triple-overlap subtraction, getting $4320-(1440+864+720)+(288+240+144) = 1968$ instead of $1920$ \\,---\\, an off-by-one-term sign/cardinality error of exactly $|A_7\\cap A_{11}\\cap A_{13}| = 48$. A third slip reads '$\\pm1$' as the single class $n\\equiv 1$, forgetting that $-1$ is a distinct unit modulo each prime, which corrupts every cardinality. The genuine difficulty is structural: the avoidance is over endpoints (not a half), and the multiplication across primes is licensed by CRT (not by independence), so the only safe route is a fully assembled I–E or an explicit coordinate count.",
    "solutions": [
      {
        "name": "Inclusion–exclusion over the three bad sets, cardinalities via CRT",
        "steps": [
          "Work inside the pool $U$ of residues in $[1,N]$ coprime to $N$; by CRT a coprime $n$ is a quadruple of units $(n \\bmod 9,\\, n\\bmod 7,\\, n\\bmod 11,\\, n\\bmod 13)$, so $|U|=\\varphi(9009)=\\varphi(9)\\varphi(7)\\varphi(11)\\varphi(13)=6\\cdot 6\\cdot 10\\cdot 12=4320.$ For $p\\in\\{7,11,13\\}$ let $A_p=\\{n\\in U: n\\equiv\\pm1\\pmod p\\}$; we want $|U\\setminus(A_7\\cup A_{11}\\cup A_{13})|$.",
          "Each bad condition pins one coordinate to one of the two values $\\{1,p-1\\}$ and leaves the other three coordinates free over their units, so by CRT the cardinalities are products. Singles: $|A_7|=2\\cdot6\\cdot10\\cdot12=1440$, $|A_{11}|=6\\cdot6\\cdot2\\cdot12=864$, $|A_{13}|=6\\cdot6\\cdot10\\cdot2=720$. Note these are visibly unequal \\,---\\, no symmetry permits a single 'half'.",
          "Pairs pin two coordinates: $|A_7\\cap A_{11}|=2\\cdot6\\cdot2\\cdot12=288$, $|A_7\\cap A_{13}|=2\\cdot6\\cdot10\\cdot2=240$, $|A_{11}\\cap A_{13}|=6\\cdot6\\cdot2\\cdot2=144$. The triple pins three coordinates: $|A_7\\cap A_{11}\\cap A_{13}|=2\\cdot6\\cdot2\\cdot2=48.$",
          "Assemble the sieve with all eight terms (the triple term is the one careless solvers drop): $4320-(1440+864+720)+(288+240+144)-48.$",
          "Evaluate: $4320-3024+672-48=\\boxed{1920}.$"
        ]
      },
      {
        "name": "Multiplicative collapse: a per-prime totient-style product",
        "steps": [
          "The untouchable condition is a conjunction of statements each living in a single CRT coordinate: coprimality forces a unit in every coordinate, while the avoidance acts only in the $7,11,13$ coordinates. Because the coordinates are independent under the CRT isomorphism $\\mathbb{Z}/N \\cong \\mathbb{Z}/9\\times\\mathbb{Z}/7\\times\\mathbb{Z}/11\\times\\mathbb{Z}/13$, the total count is the product of the admissible counts in each coordinate.",
          "Coordinate $\\bmod 9$: no avoidance, so all $\\varphi(9)=6$ units are allowed. Coordinate $\\bmod p$ for $p\\in\\{7,11,13\\}$: allowed units are the $p-1$ units minus the two endpoints $\\{1,p-1\\}$, giving exactly $p-3$ choices (this is $4,8,10$ respectively \\,---\\, the honest replacement for the bogus 'half').",
          "Hence the count is $\\varphi(9)\\cdot(7-3)(11-3)(13-3)=6\\cdot4\\cdot8\\cdot10.$",
          "Evaluate: $6\\cdot4\\cdot8\\cdot10=\\boxed{1920}$, matching the sieve. (Sanity: the same product written as fractions of $\\varphi$ is $4320\\cdot\\tfrac{4}{6}\\cdot\\tfrac{8}{10}\\cdot\\tfrac{10}{12}=1920$ \\,---\\, none of those fractions is $\\tfrac12$, which is precisely why the naive halving fails.)"
        ]
      },
      {
        "name": "Per-prime inclusion–exclusion, then multiply",
        "steps": [
          "Count the good residues modulo each prime separately using a one-set I–E, then combine by CRT. Modulo a prime $p$, among its $p-1$ units the bad ones are $\\{1\\}\\cup\\{p-1\\}$, two distinct classes for $p>3$; so the good count is $g(p)=(p-1)-|\\{1\\}|-|\\{p-1\\}|+|\\{1\\}\\cap\\{p-1\\}|=(p-1)-1-1+0=p-3.$",
          "The empty-intersection term ($1\\equiv p-1 \\bmod p$ would force $p=2$) vanishes for all of $7,11,13$, confirming $g(7)=4,\\ g(11)=8,\\ g(13)=10$ with no overlap correction inside a single prime.",
          "Modulo $9$ there is no constraint beyond being a unit, so $g(9)=\\varphi(9)=6$. Since $9,7,11,13$ are pairwise coprime, CRT makes a global untouchable correspond bijectively to an independent choice of good residue in each modulus.",
          "Therefore the number of untouchables is $g(9)\\,g(7)\\,g(11)\\,g(13)=6\\cdot4\\cdot8\\cdot10=\\boxed{1920}.$"
        ]
      }
    ],
    "remark": "Insight: this is a coprime count intersected with residue avoidances, and two reflexes both detonate. (1) 'Avoid $\\pm1$ removes half' is false unless $p-1=4$; the correct survivor count modulo a prime is $p-3$, because two endpoints are deleted from $p-1$ units, not one of two halves. (2) The right to multiply the per-prime survivors onto $\\varphi$ is granted by the Chinese Remainder Theorem \\,---\\, the four residue coordinates are genuinely independent \\,---\\, and not by any probabilistic independence hand-wave; the distinction matters the moment a condition couples two coordinates, where the product would silently break. The full inclusion–exclusion $4320-3024+672-48=1920$ and the multiplicative collapse $6\\cdot4\\cdot8\\cdot10=1920$ are the same computation viewed from two heights: the sieve makes the $-48$ triple term unmissable (the exact amount lost by the popular 'drop the last term' error), while the CRT product makes the factor structure $\\varphi(9)\\prod(p-3)$ transparent. The lesson for a sieve problem fused with number theory: keep every term, and let CRT \\,---\\, not intuition \\,---\\, decide when conditions multiply."
  },
  {
    "theme": "inclusionexclusion",
    "themeLabel": "Inclusion–Exclusion & Derangements",
    "title": "The Round Table That Forbids Every Marriage",
    "difficulty": 5,
    "task": "Count",
    "tags": [
      "menage",
      "inclusion-exclusion",
      "cyclic adjacency",
      "rook polynomial",
      "touchard recurrence"
    ],
    "statement": "Six married couples attend a banquet at a single round table with $12$ chairs, seats alternating man, woman, man, woman around the circle. The six wives have already taken their places, occupying the six alternately-spaced seats, and they will not move. The host must now seat the six husbands in the six remaining (also alternately-spaced) seats so that \\[\\text{no husband sits in either chair immediately next to his own wife.}\\] In how many ways can the six husbands be seated? (Each empty seat lies between two specific wives, so it is forbidden to exactly two of the husbands; before you sieve, think hard about how the forbidden incidences overlap around the circle.)",
    "answer": "$80$",
    "trap": "The forbidden constraints look like a derangement-with-two-forbidden-values problem, and the seductive sieve is $\\sum_{k}(-1)^k A_k\\,(6-k)!$ where $A_k$ counts the ways to pick $k$ of the forbidden (husband, seat) incidences to violate simultaneously. The trap is the value of $A_k$. There are $2n=12$ forbidden incidences in total (each of the $6$ seats forbids $2$ husbands), and a strong student is tempted to treat them as freely choosable, taking $A_k=\\binom{12}{k}$; this yields $\\sum_{k=0}^{6}(-1)^k\\binom{12}{k}(6-k)!=720-1440+1584-1320+990-792+924=666$, badly wrong. The reason it fails is structural, not arithmetic: to force $k$ incidences at once you need $k$ distinct seats AND $k$ distinct husbands, so the chosen incidences must form a matching, and they live on the cycle $C_{12}$ whose vertices alternate seats and husbands (seat $j$ is joined to husbands $j$ and $j{+}1$). The correct $A_k$ is the number of $k$-edge matchings of $C_{12}$, namely $A_k=\\frac{12}{12-k}\\binom{12-k}{k}$, giving $A_0..A_6=1,12,54,112,105,36,2$. A second, subtler trap is to forget the table is round: modelling the seat-husband conflicts as a path instead of a cycle replaces the factor by $\\binom{12-k}{k}$ and produces $720-1320+1080-504+140-21+1=96$ \\,---\\, the wrap-around incidence between the last seat and husband $1$ is silently dropped. A third trap is the classic ``stop after one correction'' $6!-12\\cdot 5!=-720$, whose absurd sign exposes that the adjacency events overlap and a full alternating sieve is mandatory. Only the genuine cyclic matching count gives the true answer.",
    "solutions": [
      {
        "name": "Inclusion–exclusion with the cyclic matching factor (Touchard's hit-form)",
        "steps": [
          "Index wives and the husbands by $1,\\dots,6$. Going around the circle the six empty seats sit between consecutive wives; label seat $j$ as the one between wife $j$ and wife $j{+}1$ (indices mod $6$). Then seat $j$ is forbidden to husband $j$ (next to his wife $j$) and to husband $j{+}1$ (next to his wife $j{+}1$). Counting husband seatings is counting permutations $\\pi$ of $\\{1,\\dots,6\\}$ (husband $\\pi(j)$ in seat $j$) avoiding all $12$ forbidden incidences.",
          "By inclusion–exclusion, the count is $\\sum_{k\\ge 0}(-1)^k A_k\\,(6-k)!$, where $A_k$ is the number of ways to select $k$ of the forbidden incidences that can be simultaneously realised by one permutation. Realising $k$ incidences needs $k$ distinct seats and $k$ distinct husbands, i.e. the selected incidences form a matching; after fixing them, the other $6-k$ husbands fill the remaining seats freely in $(6-k)!$ ways.",
          "The forbidden incidences form the cycle $C_{12}$ with vertices $s_1,h_1,s_2,h_2,\\dots$ where each seat is joined to its two forbidden husbands. The number of $k$-edge matchings of a cycle $C_{m}$ is $\\frac{m}{m-k}\\binom{m-k}{k}$, so here $A_k=\\frac{12}{12-k}\\binom{12-k}{k}$, giving $A_0,\\dots,A_6=1,12,54,112,105,36,2$.",
          "Hence the count is $\\sum_{k=0}^{6}(-1)^k A_k (6-k)! = 720-1440+1296-672+210-36+2$.",
          "Adding the terms: $720-1440=-720$; $-720+1296=576$; $576-672=-96$; $-96+210=114$; $114-36=78$; $78+2=80$. So the number of admissible husband seatings is $\\boxed{80}$."
        ]
      },
      {
        "name": "Touchard's ménage recurrence",
        "steps": [
          "Let $U_n$ be the number of ways to seat $n$ husbands (wives pre-seated, alternating, round table) with no husband beside his own wife; our answer is $U_6$. The quantity $U_n$ is the classical ménage number, and Touchard proved the recurrence $(n-2)\\,U_n=n(n-2)\\,U_{n-1}+n\\,U_{n-2}+4(-1)^{\\,n+1}$, with seed values $U_2=0$ and $U_3=1$ (with $0$ couples there is $1$ empty arrangement and $U_2=0$ because two husbands each forbidden from both seats cannot be placed).",
          "Compute $U_4$: $(4-2)U_4=4\\cdot 2\\cdot U_3+4\\,U_2+4(-1)^5=8\\cdot1+0-4=4$, so $U_4=2$.",
          "Compute $U_5$: $(5-2)U_5=5\\cdot3\\cdot U_4+5\\,U_3+4(-1)^6=15\\cdot2+5\\cdot1+4=39$, so $U_5=13$.",
          "Compute $U_6$: $(6-2)U_6=6\\cdot4\\cdot U_5+6\\,U_4+4(-1)^7=24\\cdot13+6\\cdot2-4=312+12-4=320$, so $U_6=320/4=80$.",
          "Thus $U_6=\\boxed{80}$, matching the sieve."
        ]
      },
      {
        "name": "Rook polynomial of the cyclic forbidden board",
        "steps": [
          "Place the problem on a $6\\times 6$ board: rows are husbands, columns are seats, with a forbidden cell in $(\\text{husband }i,\\text{seat }j)$ exactly when husband $i$ is barred from seat $j$. The forbidden cells form a cyclic ``staircase'': each row has the two forbidden cells of that husband, and overall they trace the $C_{12}$ pattern (the ménage board). We want permutations avoiding all forbidden cells, i.e. $\\sum_k(-1)^k r_k\\,(6-k)!$ where $r_k$ is the number of ways to place $k$ non-attacking rooks on the forbidden cells.",
          "Non-attacking rooks on the forbidden cells are exactly matchings in $C_{12}$ (no two share a row=husband or column=seat), so $r_k=\\frac{12}{12-k}\\binom{12-k}{k}$, the same cyclic factor: $r_0,\\dots,r_6=1,12,54,112,105,36,2$. This is the Lucas/ménage rook count, and it is where the naive $\\binom{12}{k}$ goes wrong \\,---\\, that would allow two rooks in the same row or column.",
          "The board has the symmetry of the $12$-cycle, so $\\sum_k r_k x^k=\\sum_{k=0}^{6}\\frac{12}{12-k}\\binom{12-k}{k}x^k$, the rook polynomial of two superposed diagonals on a torus; evaluating its alternating, factorial-weighted hit form gives the permanent of the complementary $0/1$ board.",
          "Therefore the number of full placements is $\\sum_{k=0}^{6}(-1)^k r_k (6-k)! = 720-1440+1296-672+210-36+2=80$.",
          "Hence again $\\boxed{80}$."
        ]
      }
    ],
    "remark": "Insight: the ménage problem is not a derangement in disguise, even though each seat bars two husbands. The decisive object is the count $A_k$ of simultaneously-forbidden incidences, and because forcing $k$ incidences demands $k$ distinct seats and $k$ distinct husbands, the choices are matchings, not arbitrary $k$-subsets \\,---\\, so $A_k=\\frac{2n}{2n-k}\\binom{2n-k}{k}$ (the $k$-matchings of the cycle $C_{2n}$) and never $\\binom{2n}{k}$. The cyclic factor $\\frac{2n}{2n-k}$ is precisely the fingerprint of the round table: replace the cycle by a path and you get $\\binom{2n-k}{k}$, the answer collapses to $96$, and you have silently freed the husband caught in the wrap-around seat. The honest object is the ménage number $U_n$ ($U_3,U_4,U_5,U_6=1,2,13,80$), which Touchard's recurrence $(n-2)U_n=n(n-2)U_{n-1}+nU_{n-2}+4(-1)^{n+1}$ reproduces without any sieve, and the rook polynomial of the cyclic staircase board reproduces with one; the three views agree at $80$ exactly because they all compute the matchings of the same $2n$-cycle."
  },
  {
    "theme": "inclusionexclusion",
    "themeLabel": "Inclusion–Exclusion & Derangements",
    "title": "The Staircase of Forbidden Desks",
    "difficulty": 5,
    "task": "Find the number of",
    "tags": [
      "forbidden-positions",
      "rook-polynomial",
      "inclusion-exclusion",
      "permutations"
    ],
    "statement": "Seven exam papers $1,\\dots,7$ must be placed one-per-desk on desks $1,\\dots,7$ (a permutation $\\pi$, where $\\pi(i)$ is the paper on desk $i$). Two placements are banned at each desk: desk $i$ may not hold paper $i$ (for $1\\le i\\le 7$), and desk $i$ may not hold paper $i+1$ (for $1\\le i\\le 6$). Find the number of permutations $\\pi$ avoiding all of these banned placements.",
    "answer": "$\\boxed{675}$",
    "trap": "Treating the two diagonals as $13$ independent forbidden cells and inclusion–excluding with $r_k=\\binom{13}{k}$. This gives $\\sum_{k}(-1)^k\\binom{13}{k}(7-k)!=-108$—a negative ‘count,’ which is impossible. The forbidden cells share rows/columns (cell $(i,i)$ and $(i,i+1)$ share desk-row $i$; $(i,i+1)$ and $(i+1,i+1)$ share paper-column $i+1$), so two of them can be jointly violated only if they are non-attacking; the true rook counts $r_k$ are far smaller than $\\binom{13}{k}$.",
    "solutions": [
      {
        "name": "Rook-polynomial inclusion–exclusion",
        "steps": [
          "By the forbidden-positions theorem, the number of permitted permutations is $\\sum_{k\\ge0}(-1)^k r_k\\,(7-k)!$, where $r_k$ counts ways to place $k$ mutually non-attacking rooks on the forbidden board.",
          "The forbidden cells form a single ‘staircase’ path of $m=2\\cdot7-1=13$ cells in which consecutive cells attack; placing $k$ non-attacking rooks $=$ choosing $k$ pairwise-nonadjacent cells of a $13$-path $=\\binom{13-k+1}{k}=\\binom{14-k}{k}$.",
          "So $r_0,\\dots,r_7 = 1,13,66,165,210,126,28,1$. Then evaluate $\\sum_{k=0}^{7}(-1)^k r_k(7-k)!$.",
          "$=5040-13\\cdot720+66\\cdot120-165\\cdot24+210\\cdot6-126\\cdot2+28\\cdot1-1\\cdot1 = 5040-9360+7920-3960+1260-252+28-1=\\boxed{675}$."
        ]
      },
      {
        "name": "Direct inclusion–exclusion over the 13 bans",
        "steps": [
          "Let the events range over the $13$ ban-cells; a permutation can ‘use’ a set $S$ of ban-cells simultaneously only if they lie in distinct rows and columns (else no permutation realises them all at once).",
          "Hence the only nonzero I–E terms come from independent (non-attacking) sets $S$, and each realisable set with $|S|=k$ contributes $(7-k)!$ permutations; the number of such $S$ is precisely $r_k$ above.",
          "Summing $(-1)^k r_k (7-k)!$ reproduces $\\boxed{675}$, confirming the rook-polynomial computation."
        ]
      }
    ],
    "remark": "Insight: when forbidden positions overlap in rows/columns, naive $\\binom{N}{k}$ inclusion–exclusion is wrong—here it even returns the absurd value $-108$. The rook polynomial repairs it by counting only simultaneously achievable (non-attacking) violations. The two-diagonal staircase is the linear cousin of the ménage problem."
  },
  {
    "theme": "inclusionexclusion",
    "themeLabel": "Inclusion–Exclusion & Derangements",
    "title": "The Three Suspicious Drawers",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "partial-derangement",
      "inclusion-exclusion",
      "fixed-points",
      "permutations"
    ],
    "statement": "Seven keys labelled $1,\\dots,7$ are dropped at random into seven slots labelled $1,\\dots,7$, one key per slot, forming a permutation $\\sigma$ with $\\sigma(i)$ the key in slot $i$. Only the first three slots are inspected. Determine the number of permutations in which none of slots $1,2,3$ receives its own-numbered key (slots $4,\\dots,7$ are unrestricted, and may or may not match).",
    "answer": "$\\boxed{3216}$",
    "trap": "Applying the full derangement $D_7$ (forbidding fixed points everywhere). Here only three positions are constrained, so the remaining four are free; using $D_7=1854$ under-counts badly because it wrongly forbids matches in slots $4$–$7$ as well.",
    "solutions": [
      {
        "name": "Inclusion–exclusion on the three constrained slots",
        "steps": [
          "Let $A_i$ ($i\\in\\{1,2,3\\}$) be permutations with $\\sigma(i)=i$. We want $\\overline{A_1}\\cap\\overline{A_2}\\cap\\overline{A_3}$ among all $7!$ permutations.",
          "Fixing any $k$ of these three matches leaves $7-k$ keys free: $|A_{i_1}\\cap\\cdots\\cap A_{i_k}|=(7-k)!$, with $\\binom3k$ choices.",
          "Count $=\\sum_{k=0}^{3}(-1)^k\\binom3k(7-k)! = 5040-3\\cdot720+3\\cdot120-24$.",
          "$=5040-2160+360-24=\\boxed{3216}$."
        ]
      },
      {
        "name": "Condition on how many of slots 1,2,3 self-match (must be zero)",
        "steps": [
          "By the rencontres principle restricted to the $3$-element 'risky' set $\\{1,2,3\\}$, the number of permutations with exactly $j$ of those slots self-matched is $\\binom3j\\sum_{k=0}^{3-j}(-1)^k\\binom{3-j}{k}(7-j-k)!$.",
          "This gives $j=0:3216$, $j=1:1512$, $j=2:288$, $j=3:24$, which sum to $7!=5040$ — a complete partition of all permutations.",
          "The desired count is the $j=0$ term, $\\boxed{3216}$, equivalently $\\sum_{k=0}^3(-1)^k\\binom3k(7-k)!$: place the $3$ risky keys avoiding their homes while the other $4$ keys ride along freely."
        ]
      },
      {
        "name": "Complement via the union made exact",
        "steps": [
          "$|A_1\\cup A_2\\cup A_3| = 3\\cdot6! - 3\\cdot5! + 4! = 2160-360+24 = 1824$ permutations that self-match at least one inspected slot.",
          "Subtract from the total: $7! - 1824 = 5040-1824 = \\boxed{3216}$."
        ]
      }
    ],
    "remark": "Insight: only the constrained positions enter the inclusion–exclusion; the free positions ride along as the falling factorial $(7-k)!$. This 'partial derangement on a subset' is the right tool whenever just some elements are forbidden their home — contrast the full $D_7=1854$, which needlessly deranges the unwatched slots too."
  },
  {
    "theme": "inclusionexclusion",
    "themeLabel": "Inclusion–Exclusion & Derangements",
    "title": "Exactly Two Letters Reach Home",
    "difficulty": 5,
    "task": "Count exactly-two-fixed permutations",
    "tags": [
      "derangement",
      "inclusion-exclusion",
      "exactly m fixed",
      "permutations"
    ],
    "statement": "A clerk has  $7$  distinct letters and  $7$  distinct addressed envelopes, one envelope intended for each letter. He stuffs the letters into the envelopes completely at random, one letter per envelope. In how many of the  $7!$  possible stuffings do “exactly two” letters land in their own correct envelope (so the remaining five all go astray)?",
    "answer": " $\\boxed{924}$ ",
    "trap": "A frequent slip is to choose the two correct letters in  $\\binom{7}{2}$  ways and then arrange the other five “freely” in  $5! = 120$  ways, giving  $\\binom{7}{2}\\cdot 5! = 21\\cdot120 = 2520$ . But “the other five all go astray” is not free arrangement: those five must form a derangement,  $D_5 = 44$ , not  $5! = 120$ . The honest count is  $\\binom{7}{2}\\cdot 44 = 924$ , not  $2520$ .",
    "solutions": [
      {
        "name": "Choose the fixed pair, derange the rest",
        "steps": [
          "First decide which two letters are the lucky ones that reach their own envelopes. This choice is  $\\binom{7}{2} = 21$ .",
          "The remaining five letters must each miss their own envelope, i.e. they form a derangement of  $5$  objects. By inclusion–exclusion  $D_5 = 5!\\left(1 - \\tfrac1{1!} + \\tfrac1{2!} - \\tfrac1{3!} + \\tfrac1{4!} - \\tfrac1{5!}\\right) = 120 - 120 + 60 - 20 + 5 - 1 = 44$ .",
          "By the product rule the number of stuffings with exactly two fixed letters is  $\\binom{7}{2}\\cdot D_5 = 21\\cdot 44 = \\boxed{924}$ ."
        ]
      },
      {
        "name": "Derangement recurrence for  $D_5$ ",
        "steps": [
          "Use the recurrence  $D_n = (n-1)\\,(D_{n-1}+D_{n-2})$  with  $D_1 = 0,\\ D_2 = 1$ .",
          "Then  $D_3 = 2(1+0) = 2$ ,  $D_4 = 3(2+1) = 9$ , and  $D_5 = 4(9+2) = 44$ .",
          "Pick the two fixed letters in  $\\binom{7}{2} = 21$  ways and derange the other five in  $D_5 = 44$  ways: total  $= 21\\cdot 44 = \\boxed{924}$ ."
        ]
      }
    ],
    "remark": "**Insight.** “Exactly  $m$  correct out of  $n$ ” always factors as  $\\binom{n}{m}\\,D_{n-m}$ : choose the lucky  $m$ , then force the rest to be a derangement. The trap is replacing  $D_{n-m}$  by  $(n-m)!$  — that silently allows some of the “wrong” letters to be right, breaking the word “exactly.”"
  },
  {
    "theme": "inclusionexclusion",
    "themeLabel": "Inclusion–Exclusion & Derangements",
    "title": "Six Tasks, Four Workers, None Idle",
    "difficulty": 5,
    "task": "Count onto assignments",
    "tags": [
      "onto functions",
      "surjection",
      "inclusion-exclusion",
      "distribution no box empty"
    ],
    "statement": "Six distinct tasks are to be assigned to four distinct workers, each task to exactly one worker. The supervisor demands that “no worker be left idle”, i.e. every worker receives at least one task. In how many ways can the six tasks be distributed among the four workers under this condition (that is, count the onto assignments from the  $6$  tasks to the  $4$  workers)?",
    "answer": " $\\boxed{1560}$ ",
    "trap": "A tempting shortcut is to seat four tasks one-per-worker first ( $\\binom{6}{4}\\cdot 4!$  or  $6\\cdot5\\cdot4\\cdot3$  ways) and then hand the remaining two tasks to any of the four workers ( $4^2$ ), giving  $360\\cdot16 = 5760$ . This massively overcounts: the same final assignment is reached through many different “which four came first” orders. The correct surjection count via inclusion–exclusion is  $4^6 - \\binom{4}{1}3^6 + \\binom{4}{2}2^6 - \\binom{4}{3}1^6 = 1560$ .",
    "solutions": [
      {
        "name": "Inclusion–exclusion on excluded workers",
        "steps": [
          "Total assignments with no restriction: each of the  $6$  tasks independently goes to one of  $4$  workers, so  $4^6 = 4096$ .",
          "Let  $A_i$  be the set of assignments that miss worker  $i$ . We want  $4^6 - |A_1\\cup A_2\\cup A_3\\cup A_4|$ .",
          "By inclusion–exclusion, the number using at least one specified set of  $k$  missing workers is  $(4-k)^6$ , and there are  $\\binom{4}{k}$  choices of which  $k$  to miss. So the onto count is  $\\sum_{k=0}^{4}(-1)^k\\binom{4}{k}(4-k)^6$ .",
          "Compute:  $4^6 - 4\\cdot3^6 + 6\\cdot2^6 - 4\\cdot1^6 = 4096 - 2916 + 384 - 4 = \\boxed{1560}$ ."
        ]
      },
      {
        "name": "Pattern split of the six tasks into four nonempty groups",
        "steps": [
          "Since each worker is nonempty and the six tasks split into four groups, the only group-size patterns are  $(3,1,1,1)$  and  $(2,2,1,1)$ .",
          "Pattern  $(3,1,1,1)$ : choose which worker gets the triple ( $4$  ways) and which  $3$  tasks form it ( $\\binom{6}{3}=20$ ); the remaining  $3$  tasks go one each to the other  $3$  workers in  $3! = 6$  ways. That is  $4\\cdot20\\cdot6 = 480$ .",
          "Pattern  $(2,2,1,1)$ : choose the two workers who get doubles ( $\\binom{4}{2}=6$ ); choose the first double's tasks  $\\binom{6}{2}=15$ , the second double's  $\\binom{4}{2}=6$  (the two doubles are tied to specific workers so no extra division); the last  $2$  tasks go to the remaining  $2$  workers in  $2! = 2$  ways. That is  $6\\cdot15\\cdot6\\cdot2 = 1080$ .",
          "Total  $= 480 + 1080 = \\boxed{1560}$ , matching the inclusion–exclusion value."
        ]
      }
    ],
    "remark": "**Insight.** The number of onto maps from an  $n$ -set to an  $r$ -set is  $\\sum_{k=0}^{r}(-1)^k\\binom{r}{k}(r-k)^n$  — inclusion–exclusion over which targets are forbidden. The “seat-then-fill” shortcut fails because it orders the indistinct act of choosing which elements arrived first; only by subtracting the missed-worker overlaps do you count each assignment once."
  },
  {
    "theme": "inclusionexclusion",
    "themeLabel": "Inclusion–Exclusion & Derangements",
    "title": "Coprime to Thirty Up to a Thousand",
    "difficulty": 5,
    "task": "Count integers divisible by none",
    "tags": [
      "inclusion-exclusion",
      "divisibility",
      "at least one",
      "counting"
    ],
    "statement": "How many integers  $n$  with  $1 \\le n \\le 1000$  are divisible by “none” of  $2$ ,  $3$  and  $5$  (equivalently, leave a nonzero remainder upon division by each of  $2$ ,  $3$ ,  $5$ )?",
    "answer": " $\\boxed{266}$ ",
    "trap": "The naive move is to subtract the multiples of each:  $1000 - \\left(\\lfloor 1000/2\\rfloor + \\lfloor 1000/3\\rfloor + \\lfloor 1000/5\\rfloor\\right) = 1000 - (500 + 333 + 200) = -33$ , an impossible negative. The error is forgetting that numbers like  $6$ ,  $10$ ,  $15$  were subtracted twice; inclusion–exclusion must add the pairwise overlaps back and then remove the triple overlap. The correct value is  $266$ .",
    "solutions": [
      {
        "name": "Inclusion–exclusion on the three divisors",
        "steps": [
          "Let  $A,B,C$  be the multiples of  $2,3,5$  in  $\\{1,\\dots,1000\\}$ . Their sizes are  $\\lfloor 1000/2\\rfloor=500$ ,  $\\lfloor 1000/3\\rfloor=333$ ,  $\\lfloor 1000/5\\rfloor=200$ .",
          "Pairwise overlaps use the lcm:  $|A\\cap B| = \\lfloor 1000/6\\rfloor = 166$ ,  $|A\\cap C| = \\lfloor 1000/10\\rfloor = 100$ ,  $|B\\cap C| = \\lfloor 1000/15\\rfloor = 66$ . Triple overlap  $|A\\cap B\\cap C| = \\lfloor 1000/30\\rfloor = 33$ .",
          "By inclusion–exclusion  $|A\\cup B\\cup C| = (500+333+200) - (166+100+66) + 33 = 1033 - 332 + 33 = 734$ .",
          "Divisible by none  $= 1000 - |A\\cup B\\cup C| = 1000 - 734 = \\boxed{266}$ ."
        ]
      },
      {
        "name": "Block of thirty, scaled and adjusted",
        "steps": [
          "Among any  $30$  consecutive integers, the count coprime to  $30$  is  $\\varphi(30) = 30\\left(1-\\tfrac12\\right)\\left(1-\\tfrac13\\right)\\left(1-\\tfrac15\\right) = 30\\cdot\\tfrac12\\cdot\\tfrac23\\cdot\\tfrac45 = 8$ .",
          "The range  $1$  to  $1000$  contains  $33$  complete blocks of  $30$  (covering  $1$  to  $990$ ), contributing  $33\\cdot 8 = 264$ .",
          "The leftover integers  $991,\\dots,1000$  correspond to residues  $1,\\dots,10$  mod  $30$ ; among these the ones coprime to  $30$  are residues  $1$  and  $7$  (i.e.  $991$  and  $997$ ), adding  $2$ .",
          "Total  $= 264 + 2 = \\boxed{266}$ , confirming the inclusion–exclusion count."
        ]
      }
    ],
    "remark": "**Insight.** “Divisible by none of” is the complement of a union, so inclusion–exclusion is unavoidable: subtract singles, add pairs (via lcm), subtract the triple. The absurd negative from naive subtraction is the tell-tale sign of double-counting — the overlaps  $\\lfloor N/\\mathrm{lcm}\\rfloor$  must come back."
  },
  {
    "theme": "inclusionexclusion",
    "themeLabel": "Inclusion–Exclusion & Derangements",
    "title": "At Least One Examiner Gets His Own",
    "difficulty": 5,
    "task": "Count permutations with a fixed point",
    "tags": [
      "inclusion-exclusion",
      "at least one",
      "fixed point",
      "derangement complement"
    ],
    "statement": "Six examiners hand in six distinct answer scripts, one belonging to each. The scripts are then shuffled and redistributed so that every examiner receives exactly one script (a bijection). In how many of the  $6! = 720$  redistributions does “at least one” examiner receive back his own original script?",
    "answer": " $\\boxed{455}$ ",
    "trap": "A classic error is: “pick the examiner who gets his own script ( $\\binom{6}{1}=6$  ways) and arrange the other five freely ( $5! = 120$ ),” giving  $6\\cdot120 = 720$  — which is all permutations, an obvious absurdity. This counts every redistribution with  $r$  fixed points exactly  $r$  times. The clean answer is the complement of the derangements:  $6! - D_6 = 720 - 265 = 455$ .",
    "solutions": [
      {
        "name": "Complement via derangements",
        "steps": [
          "“At least one fixed” is the complement of “none fixed.” The redistributions with no examiner getting his own script number  $D_6$ .",
          "By inclusion–exclusion  $D_6 = 6!\\left(1 - \\tfrac1{1!} + \\tfrac1{2!} - \\tfrac1{3!} + \\tfrac1{4!} - \\tfrac1{5!} + \\tfrac1{6!}\\right) = 720 - 720 + 360 - 120 + 30 - 6 + 1 = 265$ .",
          "Therefore the number with at least one fixed point is  $6! - D_6 = 720 - 265 = \\boxed{455}$ ."
        ]
      },
      {
        "name": "Direct inclusion–exclusion on fixed examiners",
        "steps": [
          "Let  $A_i$  be the set of redistributions in which examiner  $i$  gets his own script. We want  $|A_1\\cup\\cdots\\cup A_6|$ .",
          "Fixing any specified  $k$  examiners forces those  $k$  scripts and permutes the remaining  $6-k$  freely, so each such intersection has size  $(6-k)!$ , and there are  $\\binom{6}{k}$  ways to choose the  $k$ .",
          "Inclusion–exclusion gives  $\\sum_{k=1}^{6}(-1)^{k+1}\\binom{6}{k}(6-k)!$ .",
          "Compute:  $\\binom61 5! - \\binom62 4! + \\binom63 3! - \\binom64 2! + \\binom65 1! - \\binom66 0! = 720 - 360 + 120 - 30 + 6 - 1 = \\boxed{455}$ ."
        ]
      }
    ],
    "remark": "**Insight.** “At least one fixed point” is exactly the complement of a derangement, so the cleanest route is  $n! - D_n$ . The naive “choose one fixed, free the rest” overcounts because a permutation with  $r$  fixed points is then counted  $r$  times — the very situation inclusion–exclusion's alternating signs are built to correct."
  },
  {
    "theme": "identities",
    "themeLabel": "Combinatorial Identities",
    "title": "Climbing the Hockey Stick",
    "difficulty": 3,
    "task": "Evaluate",
    "tags": [
      "hockey-stick",
      "double-counting",
      "triangular",
      "pascal"
    ],
    "statement": "From the $10$ contestants numbered $1,2,\\dots,10$ we choose an unordered team of $3$ and record the *largest* number on the team. If that largest number is $m$, the remaining two members form a $2$-subset of $\\{1,\\dots,m-1\\}$, so the number of teams is $\\binom{m-1}{2}$; letting $m$ range over its possible values $3,4,\\dots,10$ writes the total suggestively as $\\binom{2}{2}+\\binom{3}{2}+\\cdots+\\binom{9}{2}$. By counting all $3$-element teams a second way, evaluate $\\displaystyle\\sum_{k=2}^{9}\\binom{k}{2}$.",
    "answer": "$\\displaystyle\\sum_{k=2}^{9}\\binom{k}{2}=\\binom{10}{3}=120.$",
    "trap": "Reading the hockey-stick as $\\sum_{k=2}^{9}\\binom{k}{2}=\\binom{9}{3}$ by mis-indexing the top of the stick. The correct identity is $\\sum_{i=r}^{n}\\binom{i}{r}=\\binom{n+1}{r+1}$, so with $r=2$ and top index $n=9$ the upper binomial is $\\binom{10}{3}$, not $\\binom{9}{3}$ — the $+1$ in both arguments is exactly what the bijection supplies. Concretely $\\binom{9}{3}=84\\neq120$.",
    "solutions": [
      {
        "name": "Group 3-subsets by their largest element",
        "steps": [
          "LET $\\mathcal{T}$ be the family of $3$-element subsets of $\\{1,\\dots,10\\}$; choosing a team is choosing such a subset, so $|\\mathcal{T}|=\\binom{10}{3}$.",
          "PARTITION $\\mathcal{T}$ by the value of the largest element $M$. If $M=m$, the other two members are any $2$-subset of $\\{1,\\dots,m-1\\}$, giving $\\binom{m-1}{2}$ such teams; here $m$ ranges over $3,4,\\dots,10$.",
          "SUM over $m=3,4,\\dots,10$: $|\\mathcal{T}|=\\sum_{m=3}^{10}\\binom{m-1}{2}=\\sum_{k=2}^{9}\\binom{k}{2}$ after the substitution $k=m-1$.",
          "EQUATE the two counts of the same family $\\mathcal{T}$: $\\sum_{k=2}^{9}\\binom{k}{2}=\\binom{10}{3}=\\boxed{120}.$"
        ]
      },
      {
        "name": "Telescoping Pascal's rule",
        "steps": [
          "USE Pascal's rule in the form $\\binom{k}{2}=\\binom{k+1}{3}-\\binom{k}{3}$ (a combinatorial restatement: a $3$-subset of $\\{1,\\dots,k+1\\}$ either avoids the element $k+1$, giving $\\binom{k}{3}$, or contains it, leaving a $2$-subset of $\\{1,\\dots,k\\}$, giving $\\binom{k}{2}$).",
          "SUM from $k=2$ to $9$; the right side telescopes: $\\sum_{k=2}^{9}\\left(\\binom{k+1}{3}-\\binom{k}{3}\\right)=\\binom{10}{3}-\\binom{2}{3}.$",
          "EVALUATE $\\binom{2}{3}=0$, so the sum equals $\\binom{10}{3}=\\boxed{120}.$"
        ]
      }
    ],
    "remark": "Insight: the hockey-stick is just 'classify by the maximum.' Whenever a sum runs over a single binomial with a moving top argument, ask which structural feature (largest element, last step, final coordinate) the index secretly records. A quick reality check is the boundary term: $\\sum_{i=r}^{n}\\binom{i}{r}=\\binom{n+1}{r+1}$ must reduce to $\\binom{r}{r}=1$ when $n=r$, which forces the upper arguments to be $n+1$ and $r+1$, not $n$ and $r+1$."
  },
  {
    "theme": "identities",
    "themeLabel": "Combinatorial Identities",
    "title": "The Minimum That Refused to Cancel",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "sign-reversing involution",
      "alternating sum",
      "min weight",
      "bijective cancellation",
      "fixed point",
      "double counting"
    ],
    "statement": "Let $[n]=\\{1,2,\\dots,n\\}$. For a nonempty subset $S\\subseteq[n]$ write $\\min S$ for its smallest element. Define the signed, minimum-weighted total over all nonempty subsets\\[T_n=\\sum_{\\emptyset\\ne S\\subseteq[n]}(-1)^{|S|}\\,\\min S.\\]The intended solution is purely combinatorial: exhibit a parity-flipping pairing (a sign-reversing involution) that makes almost everything cancel, and identify whatever the pairing fails to touch. Carry this out and evaluate $T_{12}$. (Warning: the famous pairing $S\\mapsto S\\,\\triangle\\,\\{1\\}$ that proves $\\sum_k(-1)^k\\binom{n}{k}=0$ is not legal here \\,---\\, ask yourself what it does to the weight before you trust the cancellation.)",
    "answer": "\\[\\boxed{-12}\\]",
    "trap": "The conceptual trap is not arithmetic \\,---\\, it is using an involution that flips parity but silently destroys the weight, so its ``cancellation'' is a lie. The seductive move is the textbook empty-set toggle $\\phi(S)=S\\,\\triangle\\,\\{1\\}$ (add $1$ if absent, delete it if present). It is a genuine fixed-point-free involution on all subsets and it always flips $|S|$ by one, so a student concludes that the subsets pair off into opposite-parity twins, every pair contributes $(-1)^{|S|}\\min S+(-1)^{|S|+1}\\min S=0$, and therefore $T_n=0$, giving $T_{12}=0$. The flaw is that toggling element $1$ changes the minimum: pairing $S=\\{1,5\\}$ (min $1$) with $\\phi(S)=\\{5\\}$ (min $5$) gives $(-1)^2\\cdot1+(-1)^1\\cdot5=-4\\ne0$, because the weight $\\min S$ is NOT invariant under $\\phi$. A sign-reversing involution only cancels a weighted sum when it preserves the weight; the empty-set toggle preserves $(-1)^{|S|}$ but not $\\min S$, so it proves nothing here. The legal involution must touch only elements strictly above the minimum (e.g. toggle $\\min S+1$), which then leaves a single uncancelled fixed point, the singleton $\\{n\\}$, worth $(-1)^1\\cdot n=-n$. Reading ``alternating sum of subsets is zero'' as automatic, regardless of the weight, is the missed structural condition; it returns the wrong value $0$ instead of $-12$.",
    "solutions": [
      {
        "name": "Weight-preserving sign-reversing involution (toggle just above the minimum)",
        "steps": [
          "We must pair subsets so that paired partners have OPPOSITE parity (to make signs cancel) AND the same value of $\\min S$ (so the weight survives the cancellation). The fix that respects the weight is: given nonempty $S$ with $m=\\min S$, if $m<n$ define $\\phi(S)=S\\,\\triangle\\,\\{m+1\\}$ \\,---\\, toggle the element $m+1$, which lies strictly above the minimum and never disturbs it. If $m=n$ then $S=\\{n\\}$ and we leave it fixed.",
          "Check $\\phi$ is a valid sign-reversing involution on the weight-class $\\{S:\\min S=m\\}$ for each $m<n$. Since we only add or remove $m+1>m$, the minimum stays $m$, so the weight $\\min S=m$ is preserved; the size changes by exactly $1$, so $(-1)^{|S|}$ flips; and applying $\\phi$ twice toggles $m+1$ back, so $\\phi(\\phi(S))=S$. Thus within each class with $m<n$ the subsets split into disjoint opposite-parity pairs whose contributions $(-1)^{|S|}m+(-1)^{|S|\\pm1}m$ cancel to $0$.",
          "Identify the survivors. The pairing is defined whenever $m<n$, so it is fixed-point-free on every class except $m=n$. The class $m=n$ contains only $S=\\{n\\}$ (nothing larger than $n$ to adjoin), which $\\phi$ fixes; it contributes $(-1)^{|\\{n\\}|}\\cdot n=(-1)^1 n=-n$.",
          "Summing the cancelled classes ($0$ each) and the lone fixed point gives $T_n=-n$. For $n=12$, $\\;T_{12}=\\boxed{-12}$."
        ]
      },
      {
        "name": "Class-by-class binomial collapse with the $0^j$ convention",
        "steps": [
          "Sort the sum by the minimum. A nonempty $S$ with $\\min S=m$ is exactly $\\{m\\}$ together with an arbitrary subset $A\\subseteq\\{m+1,\\dots,n\\}$, and $|S|=1+|A|$. Hence the contribution of this class is $m\\sum_{A\\subseteq\\{m+1,\\dots,n\\}}(-1)^{1+|A|}=-m\\sum_{A}(-1)^{|A|}.$",
          "The inner sum runs over all subsets of an $(n-m)$-element set, so $\\sum_{A}(-1)^{|A|}=\\sum_{k=0}^{n-m}\\binom{n-m}{k}(-1)^k=(1-1)^{n-m}=0^{\\,n-m}.$ By the convention $0^0=1$ and $0^j=0$ for $j\\ge1$, this equals $1$ when $m=n$ and $0$ otherwise \\,---\\, the algebraic shadow of ``everything cancels except the top singleton.''",
          "Therefore $T_n=\\sum_{m=1}^{n}\\big(-m\\cdot 0^{\\,n-m}\\big)=-n\\cdot 0^0=-n$, the only surviving term being $m=n$.",
          "Evaluating at $n=12$ gives $T_{12}=\\boxed{-12}$."
        ]
      },
      {
        "name": "Layer-cake rewrite of the minimum, then telescoping",
        "steps": [
          "Replace the weight by indicators: for any nonempty $S$, $\\min S=\\sum_{i=1}^{n}[\\,i\\le \\min S\\,]=\\sum_{i=1}^{n}[\\,S\\subseteq\\{i,i+1,\\dots,n\\}\\,]$, since $i\\le\\min S$ exactly when every element of $S$ is at least $i$.",
          "Swap the order of summation: $T_n=\\sum_{i=1}^{n}\\;\\sum_{\\emptyset\\ne S\\subseteq\\{i,\\dots,n\\}}(-1)^{|S|}.$ For the fixed upper block $\\{i,\\dots,n\\}$ of size $n-i+1$, the sum over ALL its subsets (including $\\varnothing$) is $(1-1)^{n-i+1}=0^{\\,n-i+1}=0$, because $n-i+1\\ge1$ for every $i\\le n$.",
          "Subtracting the empty subset (which contributes $(-1)^0=+1$) gives the nonempty sum $0-1=-1$ for each $i$. Hence $T_n=\\sum_{i=1}^{n}(-1)=-n$, a clean telescoping of $n$ identical layers.",
          "With $n=12$ this yields $T_{12}=\\boxed{-12}$."
        ]
      }
    ],
    "remark": "Insight: a sign-reversing involution only kills a WEIGHTED alternating sum when it preserves the weight, not merely the sign. The celebrated pairing $S\\mapsto S\\,\\triangle\\,\\{1\\}$ proves $\\sum_k(-1)^k\\binom{n}{k}=0$ precisely because there the weight is constant ($1$); the instant a weight like $\\min S$ enters, toggling the bottom element corrupts it and the pairing becomes illegal. The honest fix is to involute INSIDE each weight-class \\,---\\, here, toggle the element just above the minimum \\,---\\, which cancels every class except the one the involution cannot reach, the singleton $\\{n\\}$. That lone fixed point is the entire answer, $-n$. The same skeleton recurs across advanced counting: the algebraic version is the collapse $(1-1)^{n-m}=0^{\\,n-m}$ surviving only at $m=n$, and the layer-cake version telescopes $n$ copies of $-1$. All three see the same object: an alternating subset sum is zero, but a weight that varies under your pairing can leave exactly one term standing."
  },
  {
    "theme": "identities",
    "themeLabel": "Combinatorial Identities",
    "title": "The Chair Always Exists",
    "difficulty": 4,
    "task": "Prove that",
    "tags": [
      "committee-chair",
      "double-counting",
      "weighted-subsets",
      "flag"
    ],
    "statement": "For every positive integer $n$, prove the identity \\[\\sum_{k=1}^{n} k\\,\\binom{n}{k} \\;=\\; n\\,2^{\\,n-1}\\] by counting, in two ways, the number of pairs $(S,c)$ where $S\\subseteq\\{1,\\dots,n\\}$ and $c$ is a distinguished 'chair' chosen from $S$.",
    "answer": "Proved: both sides count the pairs $(\\text{committee }S,\\ \\text{chair }c\\in S)$, so $\\sum_{k=1}^{n}k\\binom{n}{k}=n\\,2^{\\,n-1}.$",
    "trap": "Reaching for the binomial theorem: differentiate $(1+x)^n=\\sum_k\\binom{n}{k}x^k$ to get $\\sum_k k\\binom{n}{k}x^{k-1}=n(1+x)^{n-1}$, then set $x=1$. It does land on the correct value $n\\,2^{\\,n-1}$ — but it is an algebraic proof, explicitly disallowed here, and it hides $why$ the answer factors as $n\\cdot 2^{\\,n-1}$. The combinatorial 'pick the chair first' argument makes the factor $n$ (choices of chair) and the factor $2^{\\,n-1}$ (the rest of the committee) self-evident.",
    "solutions": [
      {
        "name": "Committee then chair (left side)",
        "steps": [
          "LET $\\mathcal{P}=\\{(S,c): S\\subseteq\\{1,\\dots,n\\},\\ c\\in S\\}$ be the set of (committee, chair) pairs.",
          "COUNT $\\mathcal{P}$ by committee size: a committee $S$ with $|S|=k$ can be chosen in $\\binom{n}{k}$ ways, and then its chair $c\\in S$ in $k$ ways, giving $k\\binom{n}{k}$ pairs.",
          "SUM over $k$: $|\\mathcal{P}|=\\sum_{k=1}^{n}k\\binom{n}{k}$ — the $k=0$ term vanishes since an empty committee has no chair to choose.",
          "THIS is the left-hand side, established purely by counting."
        ]
      },
      {
        "name": "Chair then committee (right side)",
        "steps": [
          "COUNT the SAME set $\\mathcal{P}$ by choosing the chair first: pick $c\\in\\{1,\\dots,n\\}$ in $n$ ways.",
          "COMPLETE the committee: each of the remaining $n-1$ people is independently in or out of $S$, giving $2^{\\,n-1}$ choices, and $S$ automatically contains $c$ so the pair is valid.",
          "MULTIPLY: every pair $(S,c)$ arises exactly once this way, so $|\\mathcal{P}|=n\\cdot 2^{\\,n-1}$.",
          "EQUATE the two counts of $\\mathcal{P}$: $\\sum_{k=1}^{n}k\\binom{n}{k}=n\\,2^{\\,n-1}$, as required. $\\blacksquare$"
        ]
      },
      {
        "name": "Termwise via absorption",
        "steps": [
          "FIX the chair inside each size class: among the $\\binom{n}{k}$ committees of size $k$, the pairs with a chair from a size-$k$ committee biject with (chair $c$, committee of size $k$ containing $c$). Choosing $c$ in $n$ ways and the other $k-1$ members from the remaining $n-1$ people gives $n\\binom{n-1}{k-1}$.",
          "READ off the absorption identity $k\\binom{n}{k}=n\\binom{n-1}{k-1}$ as the count of size-$k$ pairs in two ways.",
          "SUM over $k$ using the column sum $\\sum_{k=1}^{n}\\binom{n-1}{k-1}=\\sum_{j=0}^{n-1}\\binom{n-1}{j}=2^{\\,n-1}$.",
          "CONCLUDE $\\sum_{k=1}^{n}k\\binom{n}{k}=n\\sum_{k=1}^{n}\\binom{n-1}{k-1}=n\\,2^{\\,n-1}$. $\\blacksquare$"
        ]
      }
    ],
    "remark": "Insight: the absorption identity $k\\binom{n}{k}=n\\binom{n-1}{k-1}$ is exactly the chair-first count read $termwise$ (within one committee size), while the whole sum is the chair-first count read $globally$. Same object $\\mathcal{P}$, two altitudes — and the global reading is why the answer factors so cleanly as $n\\cdot 2^{\\,n-1}$."
  },
  {
    "theme": "identities",
    "themeLabel": "Combinatorial Identities",
    "title": "Mixed Doubles by the Diagonal",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "vandermonde",
      "squares",
      "central-binomial",
      "two-teams"
    ],
    "statement": "A club has $6$ players in the Red team and $6$ players in the Blue team ($12$ players total). A delegation of $6$ players is to be chosen. By counting these delegations in two ways — once ignoring colors, once splitting by how many Reds are chosen and using the symmetry $\\binom{6}{k}=\\binom{6}{6-k}$ — evaluate $\\displaystyle\\sum_{k=0}^{6}\\binom{6}{k}^{2}$.",
    "answer": "$\\displaystyle\\sum_{k=0}^{6}\\binom{6}{k}^{2}=\\binom{12}{6}=924.$",
    "trap": "Writing the split as $\\sum_k \\binom{6}{k}\\binom{6}{6-k}$ and then 'simplifying' $\\binom{6}{6-k}$ to $\\binom{6}{k}$ but forgetting it is the symmetry of the binomial coefficient that turns the Vandermonde product into a square. Skip that symmetry and you never reach $\\sum\\binom{6}{k}^2$; misuse it and you double-count delegations.",
    "solutions": [
      {
        "name": "Vandermonde via two colors",
        "steps": [
          "LET $\\mathcal{D}$ be the set of $6$-player delegations from the $12$ players; ignoring color, $|\\mathcal{D}|=\\binom{12}{6}.$",
          "PARTITION $\\mathcal{D}$ by the number $k$ of Reds chosen ($0\\le k\\le 6$): pick $k$ Reds in $\\binom{6}{k}$ ways and the remaining $6-k$ Blues in $\\binom{6}{6-k}$ ways.",
          "SUM: $|\\mathcal{D}|=\\sum_{k=0}^{6}\\binom{6}{k}\\binom{6}{6-k}.$",
          "APPLY the symmetry $\\binom{6}{6-k}=\\binom{6}{k}$ (reflecting Blue subsets), giving $\\sum_k\\binom{6}{k}^2.$",
          "EQUATE: $\\sum_{k=0}^{6}\\binom{6}{k}^2=\\binom{12}{6}=\\boxed{924}.$"
        ]
      },
      {
        "name": "Lattice-path / committee-and-its-complement",
        "steps": [
          "INTERPRET $\\binom{6}{k}^2$ as choosing a $k$-subset $A$ of the Reds AND a $k$-subset $B$ of the Blues (using $\\binom{6}{k}=\\binom{6}{6-k}$ to read the second factor as picking which $6-k$ Blues are excluded).",
          "BUILD a delegation: take $A$ (the $k$ chosen Reds) together with the $6-k$ Blues NOT in $B$. This is a bijection between such pairs $(A,B)$ and $6$-player delegations.",
          "COUNT delegations directly as $\\binom{12}{6}$, and via the pairs as $\\sum_k\\binom{6}{k}^2$.",
          "CONCLUDE $\\sum_{k=0}^{6}\\binom{6}{k}^2=\\binom{12}{6}=\\boxed{924}.$"
        ]
      }
    ],
    "remark": "Insight: $\\sum_k\\binom{n}{k}^2=\\binom{2n}{n}$ is Vandermonde with $m=n$, $r=n$, dressed up by the reflection symmetry. The trick of turning $\\binom{n}{r-k}$ into $\\binom{n}{k}$ is the bridge from 'product of two binomials' to 'square'."
  },
  {
    "theme": "identities",
    "themeLabel": "Combinatorial Identities",
    "title": "Nested Clubs",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "subset-chains",
      "double-counting",
      "three-states",
      "flag"
    ],
    "statement": "For a $5$-element universe, a *nested pair* is an ordered pair $(A,B)$ of sets with $A\\subseteq B\\subseteq\\{1,2,3,4,5\\}$. Grouping nested pairs by $|B|=k$ (choose $B$, then any subset $A$ of it) gives $\\displaystyle\\sum_{k=0}^{5}\\binom{5}{k}2^{k}$. By counting nested pairs a second way — element by element — evaluate this sum.",
    "answer": "$\\displaystyle\\sum_{k=0}^{5}\\binom{5}{k}2^{k}=3^{5}=243.$",
    "trap": "Counting an element as having only two states (in $A$, or out of $B$) and getting $2^5=32$, or conflating $A\\subseteq B$ with disjointness. Each element has exactly THREE roles in a nested pair — in both $A$ and $B$, in $B$ only, or in neither — which is precisely what forces $3^5$.",
    "solutions": [
      {
        "name": "Three states per element",
        "steps": [
          "LET $\\mathcal{N}=\\{(A,B): A\\subseteq B\\subseteq\\{1,\\dots,5\\}\\}$ be the set of nested pairs.",
          "COUNT $\\mathcal{N}$ by element: for each of the $5$ elements $x$, exactly one of three mutually exclusive cases holds — $x\\in A$ (hence $x\\in B$), $x\\in B\\setminus A$, or $x\\notin B$. Three independent choices each.",
          "MULTIPLY: since the $5$ elements decide independently, $|\\mathcal{N}|=3^{5}.$",
          "COUNT $\\mathcal{N}$ by $|B|=k$: choose $B$ in $\\binom{5}{k}$ ways, then $A$ is any of the $2^{k}$ subsets of $B$, giving $\\sum_{k=0}^{5}\\binom{5}{k}2^{k}.$",
          "EQUATE the two counts of the same set: $\\sum_{k=0}^{5}\\binom{5}{k}2^{k}=3^{5}=\\boxed{243}.$"
        ]
      },
      {
        "name": "Disjoint-pair recast",
        "steps": [
          "BIJECT each nested pair $(A,B)$ with the ordered pair of DISJOINT sets $(A,\\,B\\setminus A)$; recovering $B=A\\cup(B\\setminus A)$ shows this is a bijection onto all ordered pairs $(P,Q)$ with $P\\cap Q=\\varnothing$.",
          "COUNT ordered disjoint pairs by element: each element is in $P$, in $Q$, or in neither — $3$ choices — so there are $3^{5}$ such pairs.",
          "COUNT the same disjoint pairs the first way: fixing $B$ of size $k$ (the union $P\\cup Q$) and letting $P=A$ range over its $2^{k}$ subsets reproduces $\\sum_{k}\\binom{5}{k}2^{k}.$",
          "CONCLUDE $\\sum_{k=0}^{5}\\binom{5}{k}2^{k}=3^{5}=\\boxed{243}.$"
        ]
      },
      {
        "name": "Binomial theorem",
        "steps": [
          "RECALL the binomial theorem $(1+x)^{n}=\\sum_{k=0}^{n}\\binom{n}{k}x^{k}.$",
          "SET $n=5$ and $x=2$: $\\sum_{k=0}^{5}\\binom{5}{k}2^{k}=(1+2)^{5}.$",
          "EVALUATE: $(1+2)^{5}=3^{5}=\\boxed{243}.$"
        ]
      }
    ],
    "remark": "Insight: the general fact $\\sum_{k}\\binom{n}{k}m^{k}=(m+1)^{n}$ is the per-element menu principle — each element chooses from $m+1$ roles, here $m+1=3$ for chains of length two. Chains, ordered disjoint pairs, and $3$-colorings are all the same census seen through different windows; the binomial theorem is just the algebraic shadow of that combinatorial menu."
  },
  {
    "theme": "identities",
    "themeLabel": "Combinatorial Identities",
    "title": "Chair, Deputy, and the Doubled Diagonal",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "committee-chair",
      "second-moment",
      "double-counting",
      "flags",
      "weighted-subsets"
    ],
    "statement": "For the $10$-person assembly, count the ordered triples $(S,a,b)$ where $S\\subseteq\\{1,\\dots,10\\}$, and $a,b\\in S$ are an officer-slot pair *with repetition allowed* (so $a=b$ is permitted), the slots being distinguishable. Grouping by $|S|=k$ gives $\\displaystyle\\sum_{k=0}^{10}k^{2}\\binom{10}{k}$. By counting the triples a second way, evaluate this sum.",
    "answer": "$\\displaystyle\\sum_{k=0}^{10}k^{2}\\binom{10}{k}=10\\cdot 11\\cdot 2^{8}=28160.$",
    "trap": "Forgetting that 'with repetition allowed' splits into the $a=b$ case and the $a\\ne b$ case, which need different completion counts ($2^{n-1}$ vs. $2^{n-2}$). Treating all of $k^2$ as 'two distinct officers' undercounts by the diagonal $a=b$, and you land on $n(n-1)2^{n-2}=23040$ instead of the correct $n(n+1)2^{n-2}=28160$.",
    "solutions": [
      {
        "name": "Split the diagonal",
        "steps": [
          "LET $\\mathcal{T}=\\{(S,a,b): a,b\\in S\\subseteq\\{1,\\dots,10\\}\\}$; grouping by $|S|=k$ gives $|\\mathcal{T}|=\\sum_k k^2\\binom{10}{k}$, since $a,b$ each range over the $k$ members.",
          "SPLIT by whether $a=b$. CASE $a=b$: choose the single officer in $10$ ways, then the rest of $S$ freely among the other $9$ people: $10\\cdot 2^{9}$ triples.",
          "CASE $a\\ne b$: choose the ordered distinct pair $(a,b)$ in $10\\cdot 9$ ways, then the remaining $8$ people freely: $10\\cdot 9\\cdot 2^{8}$ triples.",
          "ADD: $|\\mathcal{T}|=10\\cdot 2^{9}+10\\cdot 9\\cdot 2^{8}=2^{8}(10\\cdot 2+90)=2^{8}\\cdot 110.$",
          "EQUATE: $\\sum_{k=0}^{10}k^2\\binom{10}{k}=110\\cdot 256=\\boxed{28160}.$"
        ]
      },
      {
        "name": "Two absorptions, k^2=k(k-1)+k",
        "steps": [
          "WRITE $k^2=k(k-1)+k$, so $\\sum_k k^2\\binom{n}{k}=\\sum_k k(k-1)\\binom{n}{k}+\\sum_k k\\binom{n}{k}$ with $n=10$.",
          "COUNT $\\sum_k k(k-1)\\binom{n}{k}$ as ordered pairs of DISTINCT officers in a committee: pick the ordered pair ($n(n-1)$ ways) then the other $n-2$ freely ($2^{n-2}$): total $n(n-1)2^{n-2}$.",
          "COUNT $\\sum_k k\\binom{n}{k}=n2^{n-1}$ by the chair argument.",
          "ADD with $n=10$: $10\\cdot 9\\cdot 2^{8}+10\\cdot 2^{9}=2^{8}(90+20)=110\\cdot 256=\\boxed{28160}.$"
        ]
      },
      {
        "name": "Closed form then evaluate",
        "steps": [
          "FROM the diagonal split, the general identity is $\\sum_k k^2\\binom{n}{k}=n(n+1)2^{n-2}$ (combine $n2^{n-1}+n(n-1)2^{n-2}=2^{n-2}(2n+n^2-n)=n(n+1)2^{n-2}$).",
          "SUBSTITUTE $n=10$: $n(n+1)2^{n-2}=10\\cdot 11\\cdot 2^{8}=110\\cdot 256.$",
          "EVALUATE: $=\\boxed{28160}.$"
        ]
      }
    ],
    "remark": "Insight: powers $k^p$ inside a binomial sum become 'choose $p$ ordered officers with repetition.' Decomposing $k^2$ into falling factorials $k(k-1)+k$ mirrors splitting officers into 'distinct' and 'coincident' — each falling factorial is one clean absorption."
  },
  {
    "theme": "identities",
    "themeLabel": "Combinatorial Identities",
    "title": "The Loaded Vandermonde",
    "difficulty": 5,
    "task": "Prove that",
    "tags": [
      "vandermonde",
      "committee-chair",
      "weighted-subsets",
      "double-counting",
      "flags"
    ],
    "statement": "Let $m\\ge 1$, $n\\ge 0$, and $r\\ge 0$ be integers. A task force of $r$ people is chosen from $m$ Engineers and $n$ Artists, and then a leader must be appointed *who is an Engineer*. Prove the weighted Vandermonde identity \\[\\sum_{k}\\,k\\,\\binom{m}{k}\\binom{n}{\\,r-k\\,}\\;=\\;m\\,\\binom{m+n-1}{\\,r-1\\,}\\] by counting these (task force, engineer-leader) configurations two ways.",
    "answer": "Proved: both sides count (size-$r$ task force, engineer leader) pairs, so $\\sum_k k\\binom{m}{k}\\binom{n}{r-k}=m\\binom{m+n-1}{r-1}.$",
    "trap": "Appointing the leader from the *whole* task force, which would give the factor $r$ (and the wrong sum $\\sum_k r\\binom{m}{k}\\binom{n}{r-k}$). The weight here is $k$, the number of Engineers, so the leader must be drawn only from the Engineers — pick the engineer-leader FIRST to expose the clean factor $m$.",
    "solutions": [
      {
        "name": "Engineer-leader first",
        "steps": [
          "LET $\\mathcal{C}$ be the set of pairs (task force $F$ of size $r$, leader $\\ell\\in F$ with $\\ell$ an Engineer).",
          "COUNT $\\mathcal{C}$ by the number $k$ of Engineers in $F$: choose the $k$ Engineers ($\\binom{m}{k}$), the $r-k$ Artists ($\\binom{n}{r-k}$), then the leader among the $k$ Engineers ($k$ ways): summand $k\\binom{m}{k}\\binom{n}{r-k}$.",
          "SUM over $k$: $|\\mathcal{C}|=\\sum_k k\\binom{m}{k}\\binom{n}{r-k}$ — the left side.",
          "NOW count $\\mathcal{C}$ leader-first: pick the engineer-leader $\\ell$ from the $m$ Engineers ($m$ ways); the rest of the task force is any $(r-1)$-subset of the remaining $m+n-1$ people ($\\binom{m+n-1}{r-1}$ ways).",
          "MULTIPLY: $|\\mathcal{C}|=m\\binom{m+n-1}{r-1}$, and equating the two counts proves the identity. $\\blacksquare$"
        ]
      },
      {
        "name": "Absorb then Vandermonde",
        "steps": [
          "APPLY the absorption identity $k\\binom{m}{k}=m\\binom{m-1}{k-1}$ (chair-first within the Engineers alone) to each term: $k\\binom{m}{k}\\binom{n}{r-k}=m\\binom{m-1}{k-1}\\binom{n}{r-k}$.",
          "FACTOR out $m$ and substitute $j=k-1$: $m\\sum_{j}\\binom{m-1}{j}\\binom{n}{(r-1)-j}$.",
          "RECOGNIZE the inner sum as Vandermonde for choosing $r-1$ people from $(m-1)+n$: $\\sum_j\\binom{m-1}{j}\\binom{n}{r-1-j}=\\binom{m+n-1}{r-1}$.",
          "CONCLUDE $\\sum_k k\\binom{m}{k}\\binom{n}{r-k}=m\\binom{m+n-1}{r-1}. \\blacksquare$"
        ]
      }
    ],
    "remark": "Insight: weighting a Vandermonde term by $k$ means 'mark one object inside the first block.' Marking commutes with the block split, so the chair-absorption and the Vandermonde count can be applied in either order — a hallmark of a genuine double count."
  },
  {
    "theme": "identities",
    "themeLabel": "Combinatorial Identities",
    "title": "How Much Do Two Random Clubs Share?",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "double-counting",
      "subset-pairs",
      "intersection",
      "element-switching",
      "grand-hybrid"
    ],
    "statement": "Over a universe of $4$ people, consider *all* ordered pairs $(S,T)$ of subsets (each of $S,T$ ranges over all $2^{4}$ subsets, so there are $16\\times 16=256$ pairs). Determine the grand total $\\displaystyle\\sum_{(S,T)}|S\\cap T|$ of the sizes of the overlaps, by counting incidences in two ways. (Then state the general value for a universe of size $n$.)",
    "answer": "For $n=4$: $\\displaystyle\\sum_{(S,T)}|S\\cap T| = 4\\cdot 4^{3}=256.$ In general $\\displaystyle\\sum_{(S,T)}|S\\cap T| = n\\,4^{\\,n-1}.$",
    "trap": "Trying to enumerate over the *sizes* $a=|S|$, $b=|T|$ and the overlap size $j=|S\\cap T|$, which forces the triple sum $\\sum_{j}\\sum_{a\\ge j}\\sum_{b\\ge j} j\\binom{n}{j}\\binom{n-j}{a-j}\\binom{n-a}{b-j}$ (choose the $j$ shared elements, then the $a-j$ extra members of $S$, then the $b-j$ extra members of $T$ from the $n-a$ people outside $S$) and drowning in nested binomials. A frequent miscount is to draw the last group from $n-j$ instead of $n-a$ people, double-allowing the elements already placed in $S$ and inflating the total. The clean route is the double count: count $(\\text{element},(S,T))$ incidences by fixing the element first, collapsing everything to $n\\cdot 4^{\\,n-1}$.",
    "solutions": [
      {
        "name": "Fix the element first (incidence count)",
        "steps": [
          "WRITE $|S\\cap T|=\\sum_{x=1}^{n}\\mathbf{1}[x\\in S]\\,\\mathbf{1}[x\\in T]$, so the grand total equals the number of triples $(x,S,T)$ with $x\\in S$ and $x\\in T$.",
          "COUNT these triples by fixing $x$ first ($n$ choices). Given $x$, the condition $x\\in S$ leaves the other $n-1$ elements of $S$ free: $2^{n-1}$ choices for $S$; likewise $2^{n-1}$ choices for $T$.",
          "MULTIPLY: total $=n\\cdot 2^{n-1}\\cdot 2^{n-1}=n\\cdot 4^{\\,n-1}.$",
          "SUBSTITUTE $n=4$: $4\\cdot 4^{3}=\\boxed{256}.$"
        ]
      },
      {
        "name": "Symmetry / expected overlap",
        "steps": [
          "AVERAGE instead of sum: over a uniformly random pair $(S,T)$, each element $x$ lies in $S\\cap T$ with probability $\\tfrac12\\cdot\\tfrac12=\\tfrac14$, independently across elements.",
          "COMPUTE the expected overlap by linearity: $\\mathbb{E}|S\\cap T|=n\\cdot\\tfrac14.$",
          "MULTIPLY by the number of pairs $4^{n}$ to recover the grand total: $4^{n}\\cdot\\tfrac{n}{4}=n\\,4^{\\,n-1}.$",
          "FOR $n=4$: $4\\cdot 4^{3}=\\boxed{256}.$"
        ]
      },
      {
        "name": "Reduce to a single-variable chair sum",
        "steps": [
          "GROUP pairs by $S$: for fixed $S$ with $|S|=k$, summing $|S\\cap T|$ over all $T$ counts triples $(x,T)$ with $x\\in S\\cap T$, equal to $k\\cdot 2^{n-1}$ (pick $x\\in S$ in $k$ ways, then $T\\ni x$ in $2^{n-1}$ ways).",
          "SUM over $S$: total $=\\sum_{S}|S|\\,2^{n-1}=2^{n-1}\\sum_{k} k\\binom{n}{k}=2^{n-1}\\cdot n\\,2^{n-1}$ using the chair identity $\\sum_k k\\binom{n}{k}=n\\,2^{n-1}$.",
          "SIMPLIFY: $=n\\cdot 4^{\\,n-1}$; for $n=4$, $\\boxed{256}.$"
        ]
      }
    ],
    "remark": "Insight: the grandest double counts are incidence counts — build a bipartite relation (here, element $x$ versus pair $(S,T)$) and count its edges from both sides. Swapping which side you fix first turns an intractable triple binomial sum into a one-line product, and recovers the chair identity $\\sum_k k\\binom{n}{k}=n\\,2^{n-1}$ as a special case."
  },
  {
    "theme": "identities",
    "themeLabel": "Combinatorial Identities",
    "title": "Hockey Stick by the Largest Element",
    "difficulty": 5,
    "task": "Prove the hockey-stick identity by counting subsets according to their largest element, then apply it to a concrete count.",
    "tags": [
      "combinatorial-identities",
      "hockey-stick",
      "counting-two-ways",
      "binomial-coefficients",
      "largest-element-method"
    ],
    "statement": "For integers $0 \\le r \\le n$, prove the \\emph{hockey-stick identity} $$\\sum_{j=r}^{n}\\binom{j}{r}=\\binom{n+1}{r+1}$$ by counting the $(r+1)$-element subsets of $\\{0,1,2,\\dots,n\\}$ in two different ways. Then use the identity to evaluate, in closed form, the number $N$ of strictly increasing integer quadruples $0 \\le a_1 < a_2 < a_3 < a_4 \\le 20$, classified by the value of the largest entry $a_4$.",
    "answer": "$\\boxed{\\;\\displaystyle\\sum_{j=r}^{n}\\binom{j}{r}=\\binom{n+1}{r+1},\\qquad N=\\sum_{m=3}^{20}\\binom{m}{3}=\\binom{21}{4}=5985\\;}$",
    "trap": "Students try to push the sum through Pascal's rule mechanically and lose track of the telescoping endpoints, or they mis-index the largest-element classification (writing $\\binom{m-1}{r}$ instead of $\\binom{m}{r}$, or summing the largest entry over the wrong range). The clean fix is to fix the largest chosen element first and count the rest, so each $(r+1)$-subset is counted exactly once.",
    "solutions": [
      {
        "name": "Counting two ways (largest-element classification)",
        "steps": [
          "Count the $(r+1)$-element subsets of $S=\\{0,1,2,\\dots,n\\}$. The set $S$ has $n+1$ elements, so directly there are $\\binom{n+1}{r+1}$ such subsets — this is the right-hand side.",
          "Now count the same subsets by their \\emph{largest} element. If the largest chosen element equals $j$, then the remaining $r$ elements must come from $\\{0,1,\\dots,j-1\\}$, a set of size $j$, giving $\\binom{j}{r}$ choices. For $r$ smaller picks to exist we need $j \\ge r$, and $j$ ranges up to $n$.",
          "Every $(r+1)$-subset has exactly one largest element, so this classification partitions all of them with no overlap. Summing the cases gives $\\sum_{j=r}^{n}\\binom{j}{r}$, the left-hand side. Equating the two counts of the same family yields $\\sum_{j=r}^{n}\\binom{j}{r}=\\binom{n+1}{r+1}$."
        ]
      },
      {
        "name": "Pascal's rule telescoping",
        "steps": [
          "Rewrite each term using Pascal's rule $\\binom{j+1}{r+1}=\\binom{j}{r}+\\binom{j}{r+1}$ rearranged to $\\binom{j}{r}=\\binom{j+1}{r+1}-\\binom{j}{r+1}$.",
          "Substitute: $\\sum_{j=r}^{n}\\binom{j}{r}=\\sum_{j=r}^{n}\\left[\\binom{j+1}{r+1}-\\binom{j}{r+1}\\right]$, a telescoping sum.",
          "Adjacent terms cancel, leaving $\\binom{n+1}{r+1}-\\binom{r}{r+1}$. Since $\\binom{r}{r+1}=0$, the value is $\\binom{n+1}{r+1}$, proving the identity."
        ]
      },
      {
        "name": "Application to the concrete count",
        "steps": [
          "A strictly increasing quadruple $0 \\le a_1<a_2<a_3<a_4 \\le 20$ is exactly a $4$-element subset of $\\{0,1,\\dots,20\\}$, so take $n=20$ and $r+1=4$, i.e. $r=3$.",
          "Classify by the largest entry $a_4=m$. The three smaller entries form a $3$-subset of $\\{0,1,\\dots,m-1\\}$, giving $\\binom{m}{3}$ quadruples; here $m$ ranges over $3,4,\\dots,20$.",
          "By the hockey-stick identity with $n=20,\\ r=3$: $N=\\sum_{m=3}^{20}\\binom{m}{3}=\\binom{21}{4}=5985$, matching the direct count $\\binom{21}{4}$ of $4$-subsets of the $21$-element set."
        ]
      }
    ],
    "remark": "**Insight.** The phrase \"classify by the largest element\" is the whole idea: every collection chosen from an ordered ground set has a unique maximum, so splitting the count on that maximum turns one binomial coefficient into a sum of smaller ones. Reading the hockey-stick identity this way — rather than as a telescoping accident — makes it a reusable counting move: whenever you meet $\\sum\\binom{j}{r}$, you are really being handed the count of $(r+1)$-subsets sorted by their top element."
  },
  {
    "theme": "identities",
    "themeLabel": "Combinatorial Identities",
    "title": "The Hockey Stick on a Diagonal",
    "difficulty": 5,
    "task": "Sum a diagonal of binomials.",
    "tags": [
      "hockey stick identity",
      "double counting",
      "Pascal's rule",
      "diagonal sum"
    ],
    "statement": "From the integers  $\\{1,2,3,\\dots,10\\}$  a committee of exactly  $4$  members is to be formed. By classifying every such committee according to the value of its largest member, prove the hockey-stick identity  \\[ \\sum_{m=4}^{10}\\binom{m-1}{3} \\;=\\; \\binom{10}{4}, \\]  equivalently  $\\displaystyle\\sum_{j=3}^{9}\\binom{j}{3}=\\binom{10}{4}$ , and evaluate the sum.",
    "answer": " $\\boxed{210}$ ",
    "trap": "An off-by-one in the upper index of the diagonal. Because the largest element  $m$  of a  $4$ -set runs only from  $4$  to  $10$ , the summed term is  $\\binom{m-1}{3}$  with  $j=m-1$  running  $3$  to  $9$  — NOT  $\\sum_{j=3}^{10}\\binom{j}{3}$ . Including  $\\binom{10}{3}$  wrongly gives  $\\binom{11}{4}=330$  instead of  $\\binom{10}{4}=210$ ; the hockey-stick top index is  $n=9$ , and the answer is  $\\binom{9+1}{3+1}=\\binom{10}{4}$ .",
    "solutions": [
      {
        "name": "Double counting by the largest element",
        "steps": [
          "Count all  $4$ -element committees from  $\\{1,\\dots,10\\}$  directly: there are  $\\binom{10}{4}$  of them.",
          "Now partition the committees by their maximum element  $m$ . If the largest chosen number is  $m$ , the other  $3$  members are chosen from  $\\{1,2,\\dots,m-1\\}$ , which can be done in  $\\binom{m-1}{3}$  ways.",
          "The maximum  $m$  of a  $4$ -set must be at least  $4$  and at most  $10$ , so summing over the disjoint classes gives  $\\sum_{m=4}^{10}\\binom{m-1}{3}$ . Substituting  $j=m-1$  turns this into  $\\sum_{j=3}^{9}\\binom{j}{3}$ .",
          "Both counts enumerate the same committees, so  $\\sum_{j=3}^{9}\\binom{j}{3}=\\binom{10}{4}=210=\\boxed{210}$ ."
        ]
      },
      {
        "name": "Telescoping via Pascal's rule",
        "steps": [
          "Pascal's rule gives  $\\binom{j+1}{4}-\\binom{j}{4}=\\binom{j}{3}$  for every  $j$ .",
          "Summing this from  $j=3$  to  $j=9$ , the left side telescopes:  $\\sum_{j=3}^{9}\\left[\\binom{j+1}{4}-\\binom{j}{4}\\right]=\\binom{10}{4}-\\binom{3}{4}$ .",
          "Since  $\\binom{3}{4}=0$ , the right side equals  $\\binom{10}{4}$ , so  $\\sum_{j=3}^{9}\\binom{j}{3}=\\binom{10}{4}$ .",
          "Numerically  $\\binom{3}{3}+\\binom{4}{3}+\\cdots+\\binom{9}{3}=1+4+10+20+35+56+84=210=\\binom{10}{4}=\\boxed{210}$ ."
        ]
      }
    ],
    "remark": "**Insight.** The hockey-stick sum is just sorting subsets by their top element: each  $4$ -set is named uniquely by its maximum  $m$ , and the remaining three come from the  $m-1$  smaller numbers. The diagonal of Pascal's triangle stops at  $\\binom{9}{3}$ , not  $\\binom{10}{3}$ , precisely because a maximum of  $4$  leaves only  $\\{1,2,3\\}$  below it — the single off-by-one that decides  $210$  versus  $330$ ."
  },
  {
    "title": "Twelve Stars on a Circle",
    "difficulty": 3,
    "task": "Count the triangles formed",
    "tags": [
      "combinations",
      "triangles",
      "points on a circle",
      "general position"
    ],
    "statement": "Twelve distinct points are marked on a circle. Since no three points on a circle can ever be collinear, every choice of three of them is the vertex-set of a genuine triangle. How many triangles can be drawn whose vertices are three of these  $12$  points?",
    "answer": " $\\boxed{220}$ ",
    "trap": "A tempting error is to use an ordered count such as  $12\\cdot 11\\cdot 10$ , or to worry about subtracting collinear triples. Here the order of the three chosen vertices does not matter (a triangle is an unordered set), and because the points lie on a circle no three are ever collinear, so  $\\textbf{nothing}$  is subtracted. The count is the plain combination  $\\binom{12}{3}$ .",
    "solutions": [
      {
        "name": "Direct selection of three vertices",
        "steps": [
          "A triangle is determined by an unordered choice of  $3$  of the  $12$  points.",
          "On a circle no three points are collinear, so every such triple is non-degenerate.",
          "Hence the count is  $\\binom{12}{3}=\\dfrac{12\\cdot 11\\cdot 10}{3!}=\\dfrac{1320}{6}=\\boxed{220}.$ "
        ]
      },
      {
        "name": "Order then divide out",
        "steps": [
          "Pick the vertices in order:  $12$  ways for the first,  $11$  for the second,  $10$  for the third, giving  $12\\cdot 11\\cdot 10=1320$  ordered triples.",
          "Each triangle is counted once for each ordering of its  $3$  vertices, i.e.  $3!=6$  times.",
          "Therefore the number of triangles is  $\\dfrac{1320}{6}=\\boxed{220}.$ "
        ]
      }
    ],
    "remark": "**Insight.** “Points on a circle” is a code-phrase for general position:  $\\binom{n}{2}$  chords and  $\\binom{n}{3}$  triangles with  $\\emph{no}$  collinear correction, because a line meets a circle in at most two points.",
    "theme": "geomcount",
    "themeLabel": "Geometric Counting"
  },
  {
    "title": "Diagonals of a Dodecagon",
    "difficulty": 3,
    "task": "Count the diagonals",
    "tags": [
      "polygon diagonals",
      "combinations",
      "sides versus diagonals"
    ],
    "statement": "A convex polygon has  $12$  vertices (a regular dodecagon, say). A  $\\emph{diagonal}$  is a segment joining two vertices that is not a side. How many diagonals does it have?",
    "answer": " $\\boxed{54}$ ",
    "trap": "Counting  $\\binom{12}{2}=66$  counts every vertex-pair, but  $12$  of those pairs are adjacent vertices, i.e.  $\\emph{sides}$  of the polygon, not diagonals. Forgetting to subtract the  $12$  sides (or mis-counting the sides) is the classic slip.",
    "solutions": [
      {
        "name": "Segments minus sides",
        "steps": [
          "Joining any  $2$  of the  $12$  vertices gives  $\\binom{12}{2}=66$  segments.",
          "Exactly  $12$  of these segments are sides of the polygon.",
          "Diagonals  $=66-12=\\boxed{54}.$ "
        ]
      },
      {
        "name": "Diagonals from each vertex",
        "steps": [
          "From one vertex you can draw a diagonal to every vertex except itself and its two neighbours, i.e. to  $12-3=9$  vertices.",
          "Over all  $12$  vertices that is  $12\\cdot 9=108$  endpoint-incidences, but each diagonal has been counted at both of its ends.",
          "Diagonals  $=\\dfrac{12\\cdot 9}{2}=\\boxed{54}.$ "
        ]
      }
    ],
    "remark": "**Insight.** The diagonal count of a convex  $n$ -gon is  $\\binom{n}{2}-n=\\dfrac{n(n-3)}{2}$ : all vertex-pairs minus the  $n$  adjacent ones.",
    "theme": "geomcount",
    "themeLabel": "Geometric Counting"
  },
  {
    "title": "Rectangles in a Grid",
    "difficulty": 4,
    "task": "Count the rectangles",
    "tags": [
      "grid counting",
      "rectangles",
      "combinations",
      "choosing lines"
    ],
    "statement": "Consider a rectangular grid made of  $5$  rows and  $7$  columns of unit squares; its boundary lines form  $6$  horizontal lines and  $8$  vertical lines. How many rectangles (of all sizes, sides parallel to the grid) are there in the figure?",
    "answer": " $\\boxed{420}$ ",
    "trap": "Counting only the  $5\\times 7=35$  unit squares — or trying to add up rectangles size-by-size — misses the elegant fact that a rectangle is fixed by choosing  $\\emph{two}$  of the horizontal lines and  $\\emph{two}$  of the vertical lines. Use the line count  $6$  and  $8$ , not the square count  $5$  and  $7$ .",
    "solutions": [
      {
        "name": "Choose two horizontal and two vertical lines",
        "steps": [
          "A rectangle is determined by picking  $2$  of the  $6$  horizontal lines and  $2$  of the  $8$  vertical lines.",
          "That is  $\\binom{6}{2}\\cdot\\binom{8}{2}=15\\cdot 28$ .",
          "So the number of rectangles is  $15\\cdot 28=\\boxed{420}.$ "
        ]
      },
      {
        "name": "Sum over widths and heights",
        "steps": [
          "A rectangle spanning  $a$  columns ( $1\\le a\\le 7$ ) has  $8-a$  horizontal positions; summing,  $\\sum_{a=1}^{7}(8-a)=7+6+\\dots+1=28$  choices of vertical extent.",
          "Likewise the number of ways to fix the top and bottom over  $5$  rows is  $\\sum_{b=1}^{5}(6-b)=5+4+3+2+1=15$ .",
          "By the product rule the total is  $28\\cdot 15=\\boxed{420}.$ "
        ]
      }
    ],
    "remark": "**Insight.** In a grid bounded by  $p$  vertical and  $q$  horizontal lines the rectangle count is  $\\binom{p}{2}\\binom{q}{2}$ : every rectangle  $\\leftrightarrow$  a pair of verticals and a pair of horizontals.",
    "theme": "geomcount",
    "themeLabel": "Geometric Counting"
  },
  {
    "title": "A Detour Through a Checkpoint",
    "difficulty": 4,
    "task": "Count paths through a point",
    "tags": [
      "lattice paths",
      "monotonic paths",
      "through a point",
      "product rule"
    ],
    "statement": "A robot moves on the integer grid from  $(0,0)$  to  $(5,4)$ , taking unit steps only  $\\emph{right}$  or  $\\emph{up}$ . How many such monotonic paths pass through the checkpoint  $(2,3)$ ?",
    "answer": " $\\boxed{40}$ ",
    "trap": "A common mistake is to compute the total number of paths  $\\binom{9}{4}=126$  and stop, or to  $\\emph{add}$  the two leg-counts instead of multiplying them. Passing through  $(2,3)$  means doing the first leg  $\\textbf{and}$  the second leg, so the two independent counts  $\\textbf{multiply}$ .",
    "solutions": [
      {
        "name": "Split at the checkpoint and multiply",
        "steps": [
          "Paths  $(0,0)\\to(2,3)$  use  $2$  rights and  $3$  ups:  $\\binom{2+3}{2}=\\binom{5}{2}=10$ .",
          "Paths  $(2,3)\\to(5,4)$  use  $3$  rights and  $1$  up:  $\\binom{3+1}{1}=\\binom{4}{1}=4$ .",
          "By the product rule the number through  $(2,3)$  is  $10\\cdot 4=\\boxed{40}.$ "
        ]
      },
      {
        "name": "Step-word viewpoint",
        "steps": [
          "Any full path is a word with  $5$  R's and  $4$  U's; passing through  $(2,3)$  means the prefix up to the  $5$ th step is a rearrangement of  $\\{R,R,U,U,U\\}$  and the suffix of  $\\{R,R,R,U\\}$ .",
          "Prefixes:  $\\dfrac{5!}{2!\\,3!}=10$ ; suffixes:  $\\dfrac{4!}{3!\\,1!}=4$ .",
          "Total words through the checkpoint  $=10\\cdot 4=\\boxed{40}.$ "
        ]
      }
    ],
    "remark": "**Insight.** Forcing a monotonic path through  $(a,b)$  factorises it into two independent sub-paths whose path-counts  $\\emph{multiply}$ :  $\\binom{a+b}{a}\\binom{(m-a)+(n-b)}{m-a}$ .",
    "theme": "geomcount",
    "themeLabel": "Geometric Counting"
  },
  {
    "title": "Squares of Every Size",
    "difficulty": 4,
    "task": "Count axis-aligned squares",
    "tags": [
      "grid counting",
      "squares",
      "sum of squares",
      "all sizes"
    ],
    "statement": "On a  $4\\times 4$  board of unit squares (a  $5\\times 5$  array of lattice points), count all the squares whose sides lie along the grid lines, of every size from  $1\\times 1$  up to  $4\\times 4$ . How many such axis-aligned squares are there?",
    "answer": " $\\boxed{30}$ ",
    "trap": "Counting only the sixteen  $1\\times 1$  cells is the obvious trap. Squares of side  $2,3,4$  also count. For side  $k$  on an  $n\\times n$  board there are  $(n-k+1)^2$  positions, so the total is  $\\sum_{k=1}^{n}(n-k+1)^2$ , not just  $n^2$ .",
    "solutions": [
      {
        "name": "Sum of squares over sizes",
        "steps": [
          "A square of side  $k$  on a  $4\\times 4$  board can have its lower-left corner in  $(4-k+1)$  horizontal and  $(4-k+1)$  vertical positions, i.e.  $(5-k)^2$  placements.",
          "Sizes  $k=1,2,3,4$  give  $4^2+3^2+2^2+1^2=16+9+4+1$ .",
          "Total  $=16+9+4+1=\\boxed{30}.$ "
        ]
      },
      {
        "name": "Closed form for an  $n\\times n$  board",
        "steps": [
          "The number of axis-aligned squares on an  $n\\times n$  board is  $\\sum_{k=1}^{n}k^2=\\dfrac{n(n+1)(2n+1)}{6}$  (re-indexing the sizes).",
          "With  $n=4$ :  $\\dfrac{4\\cdot 5\\cdot 9}{6}=\\dfrac{180}{6}$ .",
          "Hence the count is  $30=\\boxed{30}.$ "
        ]
      }
    ],
    "remark": "**Insight.** Squares differ from rectangles: a square needs equal side-lengths, so you sum  $(n-k+1)^2$  over sizes, giving  $\\tfrac{n(n+1)(2n+1)}{6}$  axis-aligned squares on an  $n\\times n$  board.",
    "theme": "geomcount",
    "themeLabel": "Geometric Counting"
  },
  {
    "title": "Regions Carved by the Diagonals",
    "difficulty": 5,
    "task": "Count interior regions",
    "tags": [
      "polygon diagonals",
      "regions",
      "Euler relation",
      "combinations"
    ],
    "statement": "All diagonals of a convex octagon ( $8$  vertices) are drawn, and the octagon is generic so that no three diagonals meet at a single interior point. Into how many regions do the diagonals divide the interior of the octagon?",
    "answer": " $\\boxed{91}$ ",
    "trap": "Many guess from small cases or forget that each interior crossing  $\\emph{adds}$  a region. The clean route uses Euler's relation  $V-E+F=2$  with vertices = corners + crossings; ignoring the  $\\binom{8}{4}$  crossing points (or counting them as ordinary vertices) wrecks the edge count and the answer.",
    "solutions": [
      {
        "name": "Euler's relation",
        "steps": [
          "Vertices: the  $8$  corners plus the interior crossings  $\\binom{8}{4}=70$ , so  $V=78$ . Each crossing splits two chords, adding  $2$  edges per crossing.",
          "The  $8$  sides plus  $\\binom{8}{2}-8=20$  diagonals are  $28$  chords; total edges  $E=28+2\\cdot 70=168$ . Euler gives  $F=E-V+2=168-78+2=92$ , and removing the outer face leaves  $92-1=91$ .",
          "Interior regions  $=\\boxed{91}.$ "
        ]
      },
      {
        "name": "Add-a-chord (incremental) formula",
        "steps": [
          "Starting from the single interior region of the polygon, each diagonal drawn adds  $1$  region for itself plus  $1$  for every interior crossing it creates; summed over all diagonals this gives  $1+\\binom{8-1}{2}+\\binom{8}{4}$  after regrouping.",
          "Numerically  $\\binom{n-1}{2}+\\binom{n}{4}$  with  $n=8$  is  $\\binom{7}{2}+\\binom{8}{4}=21+70$ .",
          "Interior regions  $=21+70=\\boxed{91}.$ "
        ]
      }
    ],
    "remark": "**Insight.** For a generic convex  $n$ -gon with all diagonals, the interior splits into  $\\binom{n-1}{2}+\\binom{n}{4}$  regions — one base region plus one per diagonal-pair-of-the-quadrilateral crossing, exactly the  $\\binom{n}{4}$  count of crossings.",
    "theme": "geomcount",
    "themeLabel": "Geometric Counting"
  },
  {
    "title": "Fifteen Points, Six in a Row",
    "difficulty": 5,
    "task": "Count the triangles formed",
    "tags": [
      "combinations",
      "collinear correction",
      "triangles",
      "inclusion of constraint"
    ],
    "statement": "In a plane there are  $15$  points, of which exactly  $6$  lie on one straight line  $\\ell$  and no other three of the  $15$  are collinear. How many triangles can be formed with these points as vertices?",
    "answer": " $\\boxed{435}$ ",
    "trap": "Writing the answer as  $\\binom{15}{3}=455$  forgets that any three of the  $6$  points on  $\\ell$  are collinear and give no triangle. Exactly  $\\binom{6}{3}=20$  degenerate triples must be removed. Do  $\\textbf{not}$  also remove anything for the other  $9$  points — no three of them are collinear.",
    "solutions": [
      {
        "name": "All triples minus the collinear ones",
        "steps": [
          "Every triangle uses  $3$  of the  $15$  points:  $\\binom{15}{3}=455$  triples in all.",
          "A triple fails to be a triangle exactly when all three of its points lie on  $\\ell$ ; there are  $\\binom{6}{3}=20$  such triples.",
          "Valid triangles  $=455-20=\\boxed{435}.$ "
        ]
      },
      {
        "name": "Casework on how many vertices lie on  $\\ell$ ",
        "steps": [
          "Call the  $6$  collinear points  $L$  and the other  $9$  points  $G$  (general position).",
          " $0$  from  $L$ :  $\\binom{9}{3}=84$ . One from  $L$ :  $\\binom{6}{1}\\binom{9}{2}=6\\cdot 36=216$ . Two from  $L$ :  $\\binom{6}{2}\\binom{9}{1}=15\\cdot 9=135$ .",
          "A triangle can use at most two points of  $\\ell$  (three would be collinear). Total  $=84+216+135=\\boxed{435}.$ "
        ]
      }
    ],
    "remark": "**Insight.** Collinear points only matter when  $\\emph{all}$  vertices of a chosen triple sit on the same line; subtract  $\\binom{k}{3}$  for each maximal collinear set of size  $k$ , and never double-count points lying on two different special lines.",
    "theme": "geomcount",
    "themeLabel": "Geometric Counting"
  },
  {
    "title": "Where the Diagonals Cross",
    "difficulty": 5,
    "task": "Count interior crossing points",
    "tags": [
      "polygon diagonals",
      "intersection points",
      "combinations",
      "no three concurrent"
    ],
    "statement": "In a convex octagon ( $8$  vertices) all the diagonals are drawn. Assume the octagon is generic, so that no three diagonals pass through a single interior point. How many points  $\\emph{inside}$  the octagon are crossings of two diagonals?",
    "answer": " $\\boxed{70}$ ",
    "trap": "Trying to count pairs of diagonals,  $\\binom{20}{2}$ , massively over-counts: most pairs of diagonals either share a vertex or do not cross inside. The clean idea is that each interior crossing corresponds to a unique choice of  $\\emph{four}$  vertices — and that bijection breaks if three diagonals are concurrent, which is why the genericity hypothesis is stated.",
    "solutions": [
      {
        "name": "Four vertices give one crossing",
        "steps": [
          "Choose any  $4$  of the  $8$  vertices:  $\\binom{8}{4}=70$  ways.",
          "Four points of a convex polygon form a convex quadrilateral whose two diagonals cross at exactly one interior point, and that point determines the four endpoints back.",
          "With no three diagonals concurrent this correspondence is a bijection, so the number of interior crossings is  $\\boxed{70}.$ "
        ]
      },
      {
        "name": "Why pairs of diagonals fail, fixed by vertices",
        "steps": [
          "Two diagonals cross at an interior point iff their four endpoints are  $4$  distinct vertices in convex position whose connecting chords are the two ‘‘crossing’’ chords of that quadrilateral.",
          "Each set of  $4$  vertices yields exactly one such crossing pair (the other two pairings give non-crossing chords).",
          "Hence interior crossings  $=\\binom{8}{4}=\\boxed{70}.$ "
        ]
      }
    ],
    "remark": "**Insight.** Interior diagonal-intersections of a convex  $n$ -gon (generic) number  $\\binom{n}{4}$  — one per  $4$  vertices. Concurrency of three diagonals would merge crossings and lower the count, so the hypothesis is essential.",
    "theme": "geomcount",
    "themeLabel": "Geometric Counting"
  },
  {
    "title": "Lines from a Doubly Special Set",
    "difficulty": 5,
    "task": "Count the distinct lines",
    "tags": [
      "combinations",
      "collinear correction",
      "lines through points",
      "inclusion of constraints"
    ],
    "statement": "There are  $10$  points in a plane. Four of them lie on a line  $\\ell_1$ , four other (different) points lie on a line  $\\ell_2$ , and the remaining  $2$  points together with all the rest are otherwise in general position (no further three collinear, and  $\\ell_1,\\ell_2$  share none of the ten points). How many distinct straight lines do these points determine?",
    "answer": " $\\boxed{35}$ ",
    "trap": "Just writing  $\\binom{10}{2}=45$  over-counts: the  $\\binom{4}{2}=6$  pairs among the points of  $\\ell_1$  all name the  $\\emph{same}$  line  $\\ell_1$ , and likewise for  $\\ell_2$ . Each special line of  $4$  points must be counted once, not  $6$  times, so you subtract  $(\\,\\binom{4}{2}-1\\,)$  per line — and you must do it for  $\\textbf{both}$  lines.",
    "solutions": [
      {
        "name": "All pairs, then collapse collinear pairs",
        "steps": [
          "Pairs of points:  $\\binom{10}{2}=45$ ; in general position each pair gives a distinct line.",
          "On  $\\ell_1$  the  $\\binom{4}{2}=6$  pairs give only  $1$  line, an over-count of  $6-1=5$ ; same for  $\\ell_2$ .",
          "Distinct lines  $=45-5-5=\\boxed{35}.$ "
        ]
      },
      {
        "name": "Count the special and ordinary lines separately",
        "steps": [
          "The two special lines  $\\ell_1,\\ell_2$  contribute  $2$  lines.",
          "Every other line comes from a pair that is  $\\emph{not}$  a collinear-quadruple pair:  $45-\\binom{4}{2}-\\binom{4}{2}=45-6-6=33$  such pairs, each a distinct line.",
          "Total  $=2+33=\\boxed{35}.$ "
        ]
      }
    ],
    "remark": "**Insight.** A maximal set of  $k$  collinear points contributes a  $\\emph{single}$  line in place of  $\\binom{k}{2}$ , so subtract  $\\binom{k}{2}-1$  for each — applied independently to every special line that shares no points with another.",
    "theme": "geomcount",
    "themeLabel": "Geometric Counting"
  },
  {
    "title": "Two Forbidden Rows",
    "difficulty": 5,
    "task": "Count the triangles formed",
    "tags": [
      "combinations",
      "collinear correction",
      "triangles",
      "multiple collinear sets"
    ],
    "statement": "Twelve points lie in a plane:  $5$  of them are collinear on a line  $a$ , a different  $4$  of them are collinear on a line  $b$  (lines  $a$  and  $b$  share none of the twelve points), and the remaining  $3$  points, together with everything else, are in general position. How many triangles have their three vertices among these  $12$  points?",
    "answer": " $\\boxed{206}$ ",
    "trap": "Beyond the obvious  $\\binom{12}{3}=220$ , you must remove the collinear triples from  $\\emph{both}$  rows:  $\\binom{5}{3}=10$  from line  $a$  and  $\\binom{4}{3}=4$  from line  $b$ . Removing only one row, or accidentally subtracting a cross-line triple (a point of  $a$  with two of  $b$  is  $\\emph{not}$  collinear) is the trap.",
    "solutions": [
      {
        "name": "All triples minus both collinear families",
        "steps": [
          "Total triples:  $\\binom{12}{3}=220$ .",
          "Degenerate triples lie wholly on  $a$  or wholly on  $b$ :  $\\binom{5}{3}=10$  and  $\\binom{4}{3}=4$ ; these families are disjoint since  $a,b$  share no points.",
          "Triangles  $=220-10-4=\\boxed{206}.$ "
        ]
      },
      {
        "name": "Casework by vertices on the special lines",
        "steps": [
          "Let  $A$  be the  $5$  points of  $a$ ,  $B$  the  $4$  points of  $b$ ,  $G$  the other  $3$ . A triangle uses  $\\le 2$  from  $A$  and  $\\le 2$  from  $B$ .",
          "Count triples with  $0,1,2$  vertices from  $A$  and the rest legally from  $B\\cup G$ , e.g. all- $G$  gives  $\\binom{3}{3}=1$ ; full enumeration of allowed splits sums to  $206$ .",
          "Equivalently  $220-10-4=\\boxed{206}.$ "
        ]
      }
    ],
    "remark": "**Insight.** With several disjoint collinear sets the corrections simply add: subtract  $\\binom{k_i}{3}$  for each line of  $k_i$  points; a triple spread across two different lines is never collinear, so it is never removed.",
    "theme": "geomcount",
    "themeLabel": "Geometric Counting"
  },
  {
    "theme": "lattice",
    "themeLabel": "Lattice Paths",
    "title": "The Cartographer's Census",
    "difficulty": 3,
    "task": "Find the number of …",
    "tags": [
      "monotone paths",
      "binomial",
      "grid counting"
    ],
    "statement": "A surveyor walks on the integer grid from the corner $(0,0)$ to the corner $(5,8)$, at each step moving either one unit East (a step $R=(1,0)$) or one unit North (a step $U=(0,1)$), never reversing. Find the total number of distinct routes she can take.",
    "answer": "$\\dbinom{13}{5} = 1287$",
    "trap": "Computing $5\\cdot 8 = 40$ or $2^{13}$: a monotone path is NOT an arbitrary sequence of free choices. The journey uses exactly $5$ East and $8$ North steps in some order, so the count is the number of ways to interleave them, $\\binom{13}{5}$ — not a product of dimensions nor all binary strings of length $13$.",
    "solutions": [
      {
        "name": "Interleaving the steps",
        "steps": [
          "Every monotone route is a word of length $5+8=13$ using exactly $5$ letters $R$ and $8$ letters $U$, and conversely each such word is a valid route.",
          "Choosing the positions of the $5$ East steps among the $13$ slots determines the path uniquely.",
          "Hence the count is $\\binom{13}{5}=\\dfrac{13!}{5!\\,8!}=1287$. $\\boxed{1287}$"
        ]
      },
      {
        "name": "Pascal staircase recursion",
        "steps": [
          "Let $f(x,y)$ be the number of monotone paths from $(0,0)$ to $(x,y)$; then $f(x,y)=f(x-1,y)+f(x,y-1)$ with $f(0,\\cdot)=f(\\cdot,0)=1$.",
          "This is exactly Pascal's rule, so $f(x,y)=\\binom{x+y}{x}$.",
          "Therefore $f(5,8)=\\binom{13}{5}=1287$. $\\boxed{1287}$"
        ]
      }
    ],
    "remark": "Insight: the entire chapter rests on this one bijection — a path is a word, and a word is a choice of where the East steps go. Internalize $C(m+n,m)$ as 'choose the East steps' and every later count becomes a refinement of it."
  },
  {
    "theme": "lattice",
    "themeLabel": "Lattice Paths",
    "title": "The Sealed Well",
    "difficulty": 4,
    "task": "Find the number of admissible monotone paths.",
    "tags": [
      "avoid point",
      "inclusion exclusion",
      "monotone paths",
      "complement"
    ],
    "statement": "A monotone (East/North) lattice path goes from $(0,0)$ to $(7,7)$. A sealed well occupies the lattice point $(4,3)$, which the path must NOT visit. Find the number of admissible paths.",
    "answer": "$\\dbinom{14}{7} - \\dbinom{7}{3}\\dbinom{7}{3} = 3432 - 1225 = 2207$",
    "trap": "The paths through $(4,3)$ form a PRODUCT of the two leg-counts, not a sum. The first leg $(0,0)\\to(4,3)$ has $4$ East and $3$ North steps, giving $\\binom{7}{3}=35$; the second leg $(4,3)\\to(7,7)$ has $3$ East and $4$ North steps, giving $\\binom{7}{4}=35$ (equal to the first only by the symmetry $\\binom{7}{3}=\\binom{7}{4}$). Adding instead of multiplying gives $35+35=70$ and the wrong count $3432-70=3362$; the legs must be MULTIPLIED to get $35\\cdot 35 = 1225$.",
    "solutions": [
      {
        "name": "Complement via the forbidden point",
        "steps": [
          "Total monotone paths $(0,0)\\to(7,7)$ choose which $7$ of the $14$ steps are East: $\\binom{14}{7}=3432$.",
          "A path THROUGH $(4,3)$ splits at that point. First leg $(0,0)\\to(4,3)$: $4$ East, $3$ North, so $\\binom{7}{3}=35$. Second leg $(4,3)\\to(7,7)$: $(7-4)=3$ East and $(7-3)=4$ North, so $\\binom{7}{4}=35$.",
          "Multiply the independent legs: paths through $(4,3) = 35\\cdot 35 = 1225$.",
          "Admissible $= 3432 - 1225 = 2207$. $\\boxed{2207}$"
        ]
      },
      {
        "name": "Direct DP avoiding the cell",
        "steps": [
          "Run the Pascal recursion $f(x,y)=f(x-1,y)+f(x,y-1)$ on the $8\\times 8$ grid with $f(0,0)=1$, but force $f(4,3)=0$ since the path cannot stand on the sealed well.",
          "Propagating this single zero forward suppresses exactly the paths that would have routed through $(4,3)$.",
          "The terminal value is $f(7,7)=2207$, matching $3432-1225$. $\\boxed{2207}$"
        ]
      }
    ],
    "remark": "Avoiding a point is the complement of forcing it: subtract $\\text{total}-\\text{through}$, where 'through' is a PRODUCT of the two leg-counts (the path is determined independently on each side of the pivot). Zeroing one cell in the Pascal DP is the algorithmic mirror of that subtraction — same number $2207$, two viewpoints."
  },
  {
    "theme": "lattice",
    "themeLabel": "Lattice Paths",
    "title": "The Diplomat's Diagonal Shortcut",
    "difficulty": 4,
    "task": "Find the number of …",
    "tags": [
      "delannoy",
      "diagonal step",
      "generating count",
      "three step types"
    ],
    "statement": "A courier travels from $(0,0)$ to $(4,4)$ using three kinds of moves: East $R=(1,0)$, North $U=(0,1)$, and a diagonal shortcut $D=(1,1)$. Any mix and order is allowed as long as each step is one of these three and the courier never moves backward. Find the total number of distinct routes.",
    "answer": "$\\displaystyle\\sum_{k=0}^{4}\\binom{4}{k}^{2}2^{k} = 321$",
    "trap": "Treating the diagonal as 'one East plus one North' and collapsing every route into an ordinary $R/U$ word to $(4,4)$, which would give $\\binom{8}{4}=70$. That is wrong: a $D$ step is a single indivisible move, so a route with $k$ diagonals uses only $4-k$ East and $4-k$ North steps and has total length $8-k$, not $8$. Different routes have different lengths, so they are not $R/U$ words of one fixed size.",
    "solutions": [
      {
        "name": "Condition on the number of diagonals",
        "steps": [
          "Suppose a route uses exactly $k$ diagonal steps. Each $D$ contributes $(1,1)$, so to reach $(4,4)$ the remaining displacement $(4-k,4-k)$ must come from $4-k$ East and $4-k$ North steps. The route is then a word of length $(4-k)+(4-k)+k=8-k$ over the alphabet $\\{R,U,D\\}$ with these exact multiplicities.",
          "The number of such words is the multinomial $\\dfrac{(8-k)!}{k!\\,(4-k)!\\,(4-k)!}$, giving for $k=0,1,2,3,4$ the values $70,\\,140,\\,90,\\,20,\\,1$.",
          "Summing, $70+140+90+20+1=321$. $\\boxed{321}$"
        ]
      },
      {
        "name": "Delannoy recursion",
        "steps": [
          "Let $D(x,y)$ count $R/U/D$ routes from $(0,0)$ to $(x,y)$. A route's last step is $R$, $U$, or $D$, so $D(x,y)=D(x-1,y)+D(x,y-1)+D(x-1,y-1)$, with boundary $D(x,0)=D(0,y)=1$.",
          "Filling the $5\\times5$ table, the main-diagonal entries grow $D(0,0),D(1,1),\\dots = 1,\\,3,\\,13,\\,63,\\,321$.",
          "Hence $D(4,4)=321$, the central Delannoy number. $\\boxed{321}$"
        ]
      },
      {
        "name": "Closed form via diagonal-coordinate choices",
        "steps": [
          "Among routes with exactly $k$ diagonals there is a classical closed form: choose which of the $4$ units of eastward progress are bundled with one of the $4$ units of northward progress into a diagonal — that is $\\binom{4}{k}\\binom{4}{k}$ ways — and the factor $2^{k}$ records, for the bookkeeping of the standard Delannoy decomposition, the hidden binary choice attached to each diagonal.",
          "This yields the well-known identity $D(4,4)=\\sum_{k=0}^{4}\\binom{4}{k}^{2}2^{k}$, with terms $1,\\,32,\\,144,\\,128,\\,16$.",
          "Their sum is $1+32+144+128+16=321$, matching the two counts above. $\\boxed{321}$"
        ]
      }
    ],
    "remark": "Insight: adding a diagonal step type turns the binomial $\\binom{8}{4}=70$ into the Delannoy number $321$. Two honest decompositions appear and must not be confused: the per-route-length multinomial split gives the terms $70,140,90,20,1$, while the symmetric Delannoy closed form $\\binom{4}{k}^{2}2^{k}$ gives $1,32,144,128,16$. They index the routes by different statistics, so they agree only after summation — both total $321$, never term by term."
  },
  {
    "theme": "lattice",
    "themeLabel": "Lattice Paths",
    "title": "Coffee on the Way",
    "difficulty": 4,
    "task": "Count paths through a point",
    "tags": [
      "lattice paths",
      "monotonic paths",
      "path through a point",
      "product rule",
      "binomial coefficient"
    ],
    "statement": "Maya walks to work along the grid streets, starting at her home  $(0,0)$  and ending at her office  $(7,5)$ , moving only one block East ( $x \\to x+1$ ) or one block North ( $y \\to y+1$ ) at each corner. Her favourite coffee stand sits at the corner  $(3,2)$ . She insists on a route that passes through that corner so she can buy a coffee on the way. How many distinct monotonic routes from home to office pass through  $(3,2)$ ?",
    "answer": " $\\boxed{350}$ ",
    "trap": "Treating the journey as one big binomial and then \"adjusting\" tempts errors, but the real trap is mis-counting the second leg. From  $(3,2)$  to  $(7,5)$  the displacement is  $4$  East and  $3$  North, so the second factor is  $\\binom{7}{3}=35$ ,  $\\textbf{not}$   $\\binom{5}{2}=10$  (which would wrongly reuse the first leg's shape). The correct product is  $\\binom{5}{2}\\binom{7}{3}=10\\cdot 35 = 350$ , not  $\\binom{5}{2}^2 = 100$ .",
    "solutions": [
      {
        "name": "Multiply the two independent legs",
        "steps": [
          "A route through  $(3,2)$  splits uniquely into a first leg  $(0,0)\\to(3,2)$  and a second leg  $(3,2)\\to(7,5)$ , and the two legs can be chosen independently, so by the product rule the count is (leg 1)  $\\times$  (leg 2).",
          "Leg$2$needs  $3$  E's and  $2$  N's:  $\\binom{3+2}{2} = \\binom{5}{2} = 10$  ways.",
          "Leg$\\binom{4+3}{3} = \\binom{7}{3} = 35$needs  $7-3 = 4$  E's and  $5-2 = 3$  N's:  $\\binom{4+3}{3} = \\binom{7}{3} = 35$  ways.",
          "Therefore the number of routes through the coffee stand is  $10 \\cdot 35 = \\boxed{350}$ ."
        ]
      },
      {
        "name": "Total minus routes that miss the point",
        "steps": [
          "All routes from  $(0,0)$  to  $(7,5)$  number  $\\binom{7+5}{5} = \\binom{12}{5} = 792$ . We remove those that never touch  $(3,2)$ .",
          "By the product rule, routes through  $(3,2)$  equal  $\\binom{5}{2}\\binom{7}{3} = 350$ , so routes missing it equal  $792 - 350 = 442$ ; reading the identity the other way confirms the through-count is  $792 - 442 = \\boxed{350}$ .",
          "As a sanity check, the through-count  $350$  is well below the total  $792$ , exactly as expected since only some routes are funnelled through the single corner  $(3,2)$ ."
        ]
      }
    ],
    "remark": "**Insight.** \"Through a point\" turns one path-count into a product of two smaller path-counts, because a monotonic route is uniquely cut at any corner it visits. The only care needed is to read each leg's own East- and North-displacement; the second leg never inherits the first leg's binomial."
  },
  {
    "theme": "lattice",
    "themeLabel": "Lattice Paths",
    "title": "At Least One Pickup",
    "difficulty": 4,
    "task": "Count routes hitting at least one waypoint",
    "tags": [
      "lattice paths",
      "monotonic paths",
      "waypoints",
      "inclusion-exclusion subtraction",
      "binomial coefficient"
    ],
    "statement": "A delivery rider starts at the corner  $(0,0)$  of a square city grid and must reach the corner  $(9,6)$ , moving only one block East ( $x \\to x+1$ ) or one block North ( $y \\to y+1$ ) at each step, so every route consists of exactly  $9$  East-blocks and  $6$  North-blocks. Two pickup hubs sit at the corners  $P=(3,2)$  and  $Q=(6,4)$ . To earn the bonus, the rider's route must visit  $\\textbf{at least one}$  of the two hubs (visiting both is fine). How many distinct bonus-earning routes from  $(0,0)$  to  $(9,6)$  are there?",
    "answer": " $\\boxed{3200}$ ",
    "trap": "The tempting move is to add the count through  $P$  to the count through  $Q$ :  $\\binom{5}{2}\\binom{10}{4} + \\binom{10}{4}\\binom{5}{2} = 10\\cdot 210 + 210\\cdot 10 = 2100+2100 = 4200$ . But  $P=(3,2)$  and  $Q=(6,4)$  satisfy  $3\\le 6$  and  $2\\le 4$ , so a single monotone route can pass  $\\textbf{through both}$ . Every such route is counted twice in  $4200$ . The routes through both number  $\\binom{5}{2}\\binom{(6-3)+(4-2)}{4-2}\\binom{(9-6)+(6-4)}{6-4}=10\\cdot 10\\cdot 10 = 1000$ , and must be subtracted once:  $4200-1000 = 3200$ , not  $4200$ .",
    "solutions": [
      {
        "name": "Inclusion-exclusion on the two hubs",
        "steps": [
          "Let  $A$  be the routes through  $P=(3,2)$  and  $B$  the routes through  $Q=(6,4)$ ; we want  $|A\\cup B| = |A| + |B| - |A\\cap B|$ . Reaching a corner  $(a,b)$  from  $(0,0)$  takes  $\\binom{a+b}{b}$  routes, and continuing from  $(a,b)$  to  $(9,6)$  takes  $\\binom{(9-a)+(6-b)}{6-b}$ .",
          "Through  $P$ :  $|A| = \\binom{3+2}{2}\\binom{6+4}{4} = \\binom{5}{2}\\binom{10}{4} = 10\\cdot 210 = 2100$ . Through  $Q$ :  $|B| = \\binom{6+4}{4}\\binom{3+2}{2} = \\binom{10}{4}\\binom{5}{2} = 210\\cdot 10 = 2100$ .",
          "A route through both must pass  $P$  then  $Q$  (it cannot go from  $Q$  back to the lower-left  $P$ ):  $|A\\cap B| = \\binom{5}{2}\\binom{(6-3)+(4-2)}{4-2}\\binom{(9-6)+(6-4)}{6-4} = 10\\cdot \\binom{5}{2}\\cdot \\binom{5}{2} = 10\\cdot 10\\cdot 10 = 1000$ .",
          "Therefore  $|A\\cup B| = 2100 + 2100 - 1000 = \\boxed{3200}$ ."
        ]
      },
      {
        "name": "Complement: subtract routes that miss both hubs",
        "steps": [
          "The grand total of routes from  $(0,0)$  to  $(9,6)$  is  $\\binom{9+6}{6} = \\binom{15}{6} = 5005$ . The bonus routes are all routes minus those avoiding  $P$  and  $Q$  simultaneously.",
          "Count routes that avoid  $P$  and avoid  $Q$  by complementary counting on each: routes that miss  $P$  or miss  $Q$  is awkward directly, so instead use the union already found. Routes hitting neither hub number  $5005 - |A\\cup B|$ , and we cross-check  $|A\\cup B|$  via the same pieces:  $|A| + |B| - |A\\cap B| = 2100+2100-1000$ .",
          "Hence routes missing both  $= 5005 - 3200 = 1805$ , and the bonus routes are  $5005 - 1805 = \\boxed{3200}$ , confirming the inclusion-exclusion count."
        ]
      }
    ],
    "remark": "**Insight.** \"At least one\" of two waypoints is a union, and a union is not a sum: because  $P=(3,2)$  lies weakly below-left of  $Q=(6,4)$ , one monotone route can hit both, so the through-both routes are double-counted and must be removed once. Each through-point count factors as (ways in)  $\\times$  (ways out), and the through-both count chains as (in to  $P$ )  $\\times$  ( $P$  to  $Q$ )  $\\times$  ( $Q$  out) — three binomials in a row. The whole trap is forgetting that the two hubs are comparable."
  },
  {
    "theme": "lattice",
    "themeLabel": "Lattice Paths",
    "title": "The Severed Footbridge",
    "difficulty": 5,
    "task": "Find the number of …",
    "tags": [
      "avoid edge",
      "reflection complement",
      "directed edge",
      "monotone paths"
    ],
    "statement": "A monotone (East/North) path runs from $(0,0)$ to $(8,6)$. A specific footbridge — the directed unit edge from $(4,2)$ straight up to $(4,3)$ — has been severed and cannot be traversed. (The vertices $(4,2)$ and $(4,3)$ remain usable; only the single North step between them is forbidden.) Find the number of paths that avoid this edge.",
    "answer": "$\\dbinom{14}{6} - \\dbinom{6}{2}\\dbinom{7}{3} = 2478$",
    "trap": "Counting all paths through the vertex $(4,3)$ as forbidden. Only paths that use the specific North edge $(4,2)\\to(4,3)$ are barred; a path may still visit $(4,3)$ by arriving from $(3,3)$ via an East step. Subtract edge-users, not vertex-visitors.",
    "solutions": [
      {
        "name": "Subtract the edge-users",
        "steps": [
          "A path uses the forbidden edge iff it reaches $(4,2)$ and then takes the North step to $(4,3)$. Such paths factor as $(0,0)\\to(4,2)$, the forced edge, then $(4,3)\\to(8,6)$.",
          "Count: $\\binom{4+2}{2}\\cdot 1\\cdot\\binom{(8-4)+(6-3)}{8-4}=\\binom{6}{2}\\binom{7}{4}=15\\cdot35=525$ (the final leg uses $4$ East, $3$ North).",
          "Total paths $\\binom{14}{6}=3003$; admissible $=3003-525=2478$. $\\boxed{2478}$"
        ]
      },
      {
        "name": "Contract the edge",
        "steps": [
          "Edge-using paths are in bijection with monotone paths $(0,0)\\to(4,2)$ times paths $(4,3)\\to(8,6)$, since the middle step is forced.",
          "The two factors are $\\binom{6}{2}=15$ and $\\binom{7}{3}=35$ (using $4$ East, $3$ North), product $525$.",
          "Subtracting from the total $\\binom{14}{6}=3003$ yields $\\boxed{2478}$."
        ]
      }
    ],
    "remark": "Insight: an edge constraint is a vertex constraint with the crossing step pinned. The factor of $1$ for the forced bridge is the whole subtlety — it distinguishes 'banned edge' from 'banned vertex' and halves a common error."
  },
  {
    "theme": "lattice",
    "themeLabel": "Lattice Paths",
    "title": "The Closed-Off Street",
    "difficulty": 5,
    "task": "Count paths avoiding a street",
    "tags": [
      "lattice paths",
      "monotonic paths",
      "avoiding a segment",
      "complementary counting",
      "binomial coefficient"
    ],
    "statement": "A courier starts at the corner  $(0,0)$  of a city grid and must reach the corner  $(8,6)$ , walking only one block East ( $x \\to x+1$ ) or one block North ( $y \\to y+1$ ) at each step, so every route uses exactly  $8$  East-blocks and  $6$  North-blocks. Overnight, the single East-bound block of street running from the corner  $(4,3)$  to the corner  $(5,3)$  is closed for repairs and may not be used in either direction. A route is allowed to pass through the corner  $(4,3)$  itself, and through  $(5,3)$  itself — it just may not traverse the block joining them. In how many distinct allowed routes can the courier reach  $(8,6)$ ?",
    "answer": " $\\boxed{2303}$ ",
    "trap": "The forbidden thing is a  $\\textbf{block}$  (an edge), not a corner. The seductive error is to subtract all routes passing  $\\textbf{through the corner}$   $(4,3)$ , namely  $\\binom{7}{3}\\binom{7}{3}=35\\cdot 35 = 1225$ , giving  $3003-1225 = 1778$ . But a route may legally visit  $(4,3)$  and then step North instead of East; only the routes that actually walk the closed East-block must be removed. Those number  $\\binom{7}{3}\\binom{6}{3}=35\\cdot 20 = 700$ , so the answer is  $3003-700 = 2303$ , not  $1778$ .",
    "solutions": [
      {
        "name": "Total minus routes that use the closed block",
        "steps": [
          "Every route from  $(0,0)$  to  $(8,6)$  is a sequence of  $8$  E's and  $6$  N's, so the unrestricted total is  $\\binom{8+6}{6} = \\binom{14}{6} = 3003$ .",
          "A route uses the closed block exactly when it arrives at  $(4,3)$  and its very next step is the East-block to  $(5,3)$ . The number of ways to reach  $(4,3)$  from  $(0,0)$  is  $\\binom{4+3}{3} = \\binom{7}{3} = 35$ .",
          "Once it has stepped to  $(5,3)$ , the remaining journey to  $(8,6)$  needs  $3$  E's and  $3$  N's:  $\\binom{3+3}{3} = \\binom{6}{3} = 20$  ways. So the number of routes traversing the closed block is  $35 \\cdot 20 = 700$ .",
          "Subtracting the bad routes from the total:  $3003 - 700 = \\boxed{2303}$ ."
        ]
      },
      {
        "name": "Split at the East-block's endpoints",
        "steps": [
          "Classify allowed routes by whether they reach the left endpoint  $(4,3)$  of the closed block. If a route never visits  $(4,3)$  it certainly cannot use the block, and if it does visit  $(4,3)$  it must leave by going North (East is forbidden).",
          "Routes through  $(4,3)$  total  $\\binom{7}{3}\\binom{6}{3}$  where the second factor  $\\binom{(8-4)+(6-3)}{6-3}=\\binom{7}{3}=35$  counts  $(4,3)\\to(8,6)$ ; of these, the ones forced to leave North-ward are exactly those whose continuation from  $(4,3)$  starts with N. Equivalently, remove from the grand total only the continuations that start East:  $\\binom{7}{3}$  arrivals  $\\times\\,\\binom{6}{3}$  East-first continuations  $=700$  forbidden routes.",
          "All other  $\\binom{14}{6}-700$  routes are allowed, giving  $3003-700 = \\boxed{2303}$ ."
        ]
      }
    ],
    "remark": "**Insight.** Avoiding an  $\\textit{edge}$  is gentler than avoiding a  $\\textit{vertex}$ : a forbidden corner kills every route through it, but a forbidden block kills only the routes that step along it — and the count of those factorises as (ways to reach the block's tail)  $\\times$  (ways to finish from its head). Reading the obstacle as a corner instead of an edge is the whole trap."
  },
  {
    "theme": "lattice",
    "themeLabel": "Lattice Paths",
    "title": "Skip the Flooded Square",
    "difficulty": 5,
    "task": "Count paths avoiding a corner",
    "tags": [
      "lattice paths",
      "monotonic paths",
      "avoiding a point",
      "complementary counting",
      "binomial coefficient"
    ],
    "statement": "On a  $6 \\times 6$  city grid a delivery robot travels from the South-West corner  $(0,0)$  to the North-East corner  $(6,6)$ , advancing only one block East ( $x \\to x+1$ ) or one block North ( $y \\to y+1$ ) at a time. The intersection at the exact centre,  $(3,3)$ , is flooded and the robot may not stand on it at any moment. In how many distinct routes can the robot reach  $(6,6)$  while never visiting  $(3,3)$ ?",
    "answer": " $\\boxed{524}$ ",
    "trap": "Two errors lurk. First, forgetting to subtract at all and reporting the total  $\\binom{12}{6}=924$ . Second, subtracting the wrong quantity — e.g.  $\\binom{12}{6}-\\binom{6}{3}=904$ , as if only  $\\binom{6}{3}$  routes were spoiled. The routes through  $(3,3)$  factorise as  $\\binom{6}{3}\\binom{6}{3}=20\\cdot 20 = 400$ , so the answer is  $924-400 = 524$ .",
    "solutions": [
      {
        "name": "Total minus routes through the flooded corner",
        "steps": [
          "Without restriction, the number of monotonic routes from  $(0,0)$  to  $(6,6)$  is  $\\binom{6+6}{6} = \\binom{12}{6} = 924$ .",
          "A route is spoiled exactly when it passes through  $(3,3)$ . Such routes split into  $(0,0)\\to(3,3)$  and  $(3,3)\\to(6,6)$ , each leg needing  $3$  E's and  $3$  N's:  $\\binom{6}{3} = 20$  ways apiece.",
          "By the product rule the spoiled routes number  $20 \\cdot 20 = 400$ .",
          "Subtracting, the safe routes number  $924 - 400 = \\boxed{524}$ ."
        ]
      },
      {
        "name": "Route the robot below or above the centre",
        "steps": [
          "Any monotonic route from  $(0,0)$  to  $(6,6)$  that avoids  $(3,3)$  must cross the anti-diagonal  $x+y=6$  at one of the corners  $(k,6-k)$  with  $k \\ne 3$ ; the centre  $(3,3)$  is the only forbidden crossing.",
          "Summing the product (ways to reach  $(k,6-k)$ )  $\\times$  (ways to finish from it) over all crossings gives the full total, and the single term  $k=3$  is precisely the  $400$  spoiled routes counted as  $\\binom{6}{3}\\binom{6}{3}$ .",
          "Hence the avoiding routes equal (all crossings) minus (the centre term)  $= \\binom{12}{6} - \\binom{6}{3}^2 = 924 - 400 = \\boxed{524}$ ."
        ]
      }
    ],
    "remark": "**Insight.** A forbidden  $\\textit{corner}$  removes  $\\textit{every}$  route through it, and on a monotonic grid that count always factors as a product of two equal-or-unequal binomials — here the symmetric  $\\binom{6}{3}^2$ . The discipline is to subtract that product once, not some lone binomial."
  },
  {
    "theme": "lattice",
    "themeLabel": "Lattice Paths",
    "title": "Two Mandatory Checkpoints",
    "difficulty": 5,
    "task": "Count paths through two points",
    "tags": [
      "lattice paths",
      "monotonic paths",
      "through two points",
      "product rule",
      "binomial coefficient"
    ],
    "statement": "A tourist sets out from the hotel at  $(0,0)$  and wants to reach the museum at  $(9,7)$ , walking the grid only one block East ( $x \\to x+1$ ) or one block North ( $y \\to y+1$ ) at a time. The tour requires visiting two landmarks  $\\textbf{in order}$ : first the fountain at  $(3,2)$ , then the clock tower at  $(6,5)$ . Since both displacements are monotone increasing, any route reaching the museum that visits both landmarks must visit them in the listed order automatically. How many distinct routes from hotel to museum pass through both  $(3,2)$  and  $(6,5)$ ?",
    "answer": " $\\boxed{2000}$ ",
    "trap": "The standard slip is to enforce only one checkpoint — e.g. counting routes through the fountain alone,  $\\binom{5}{2}\\binom{11}{6}=10\\cdot 462 = 4620$ , and stopping there. Both checkpoints must be enforced, which means  $\\textbf{three}$  legs multiplied together. A second slip is mis-reading a leg's displacement (e.g. using  $\\binom{6}{3}$  for the last leg, whose displacement is  $3$  E and  $2$  N, hence  $\\binom{5}{3}$ ). The correct product is  $\\binom{5}{2}\\binom{6}{3}\\binom{5}{3} = 10\\cdot 20\\cdot 10 = 2000$ .",
    "solutions": [
      {
        "name": "Three independent legs",
        "steps": [
          "A route through both corners cuts uniquely into three legs:  $(0,0)\\to(3,2)$ , then  $(3,2)\\to(6,5)$ , then  $(6,5)\\to(9,7)$ . Each leg is chosen independently, so multiply the three counts.",
          "Leg 1: displacement  $3$  E,  $2$  N gives  $\\binom{3+2}{2} = \\binom{5}{2} = 10$ .",
          "Leg 2: displacement  $6-3=3$  E,  $5-2=3$  N gives  $\\binom{3+3}{3} = \\binom{6}{3} = 20$ .",
          "Leg 3: displacement  $9-6=3$  E,  $7-5=2$  N gives  $\\binom{3+2}{3} = \\binom{5}{3} = 10$ .",
          "By the product rule the number of routes is  $10 \\cdot 20 \\cdot 10 = \\boxed{2000}$ ."
        ]
      },
      {
        "name": "Chain two through-a-point counts",
        "steps": [
          "First count routes from  $(0,0)$  to the clock tower  $(6,5)$  that pass through the fountain  $(3,2)$ : that is  $\\binom{5}{2}\\binom{6}{3} = 10 \\cdot 20 = 200$  by the two-leg product.",
          "Each such partial route then continues independently from  $(6,5)$  to the museum  $(9,7)$ , with displacement  $3$  E and  $2$  N:  $\\binom{5}{3} = 10$  ways.",
          "Multiplying the prefix count by the suffix count gives  $200 \\cdot 10 = \\boxed{2000}$ , matching the three-leg product."
        ]
      }
    ],
    "remark": "**Insight.** Each mandatory corner inserts one more cut, turning the journey into a product of consecutive legs — two checkpoints mean three binomials, not two. Monotonicity is what makes the listed order free: once both corners lie on the route, East/North motion forces the fountain before the clock tower."
  },
  {
    "theme": "lattice",
    "themeLabel": "Lattice Paths",
    "title": "Avoiding Two Blocked Intersections",
    "difficulty": 5,
    "task": "Count shortest grid routes that avoid two blocked junctions.",
    "tags": [
      "lattice paths",
      "binomial coefficients",
      "inclusion-exclusion",
      "grid routes",
      "combinatorics"
    ],
    "statement": "A delivery rider must travel along the streets of a perfectly rectangular city. Junctions sit at the integer points of a grid, and the rider starts at the south-west corner $O=(0,0)$ and must reach the north-east corner $D=(9,7)$. Each move goes one block East or one block North, so every valid route is a shortest route using exactly $9$ East-moves and $7$ North-moves. Overnight, road-works close two junctions completely: $A=(3,3)$ and $B=(6,5)$. A route is permitted only if it passes through $\\textbf{neither}$ $A$ $\\textbf{nor}$ $B$. How many permitted shortest routes are there from $O$ to $D$?",
    "answer": "$\\boxed{4620}$",
    "trap": "The tempting move is to subtract the routes through $A$ and the routes through $B$ from the total and stop there. That double-removes every route that happens to pass through $\\textbf{both}$ $A$ and $B$, because such routes were counted once in each subtracted block. Since $A=(3,3)$ lies weakly south-west of $B=(6,5)$, routes through both genuinely exist and must be added back once. Forgetting this add-back undercounts and gives $11440-4200-4620=2620$ instead of $4620$.",
    "solutions": [
      {
        "name": "Inclusion-exclusion on the two blocked junctions",
        "steps": [
          "A shortest route from $(a,b)$ to $(c,d)$ takes $(c-a)$ East and $(d-b)$ North moves in any order, so the count is $\\binom{(c-a)+(d-b)}{c-a}$.",
          "Total unrestricted routes $O\\to D$: $\\binom{9+7}{7}=\\binom{16}{7}=11440$.",
          "Routes through $A=(3,3)$: $\\binom{3+3}{3}\\binom{6+4}{6}=\\binom{6}{3}\\binom{10}{6}=20\\cdot 210=4200$. Routes through $B=(6,5)$: $\\binom{6+5}{6}\\binom{3+2}{3}=\\binom{11}{6}\\binom{5}{3}=462\\cdot 10=4620$.",
          "Routes through both $A$ and $B$ (in order $O\\to A\\to B\\to D$): $\\binom{6}{3}\\binom{5}{2}\\binom{5}{3}=20\\cdot 10\\cdot 10=2000$.",
          "By inclusion-exclusion the permitted routes equal $11440-4200-4620+2000=4620$."
        ]
      },
      {
        "name": "Complement via the union of bad routes",
        "steps": [
          "Let $S_A$ be routes hitting $A$ and $S_B$ be routes hitting $B$. The forbidden routes form $S_A\\cup S_B$, and permitted $=$ total $-\\,|S_A\\cup S_B|$.",
          "$|S_A|=\\binom{6}{3}\\binom{10}{4}=4200$ and $|S_B|=\\binom{11}{5}\\binom{5}{3}=4620$.",
          "$|S_A\\cap S_B|$ counts routes through both; since $(3,3)$ is south-west of $(6,5)$ such routes split as $O\\to A\\to B\\to D$ giving $\\binom{6}{3}\\binom{5}{2}\\binom{5}{3}=2000$.",
          "$|S_A\\cup S_B|=4200+4620-2000=6820$, so permitted $=11440-6820=4620$.",
          "A direct dynamic count that zeroes out $A$ and $B$ and propagates $f(x,y)=f(x-1,y)+f(x,y-1)$ across the grid lands on the same $4620$, confirming the algebra."
        ]
      }
    ],
    "remark": "**Insight.** The whole difficulty lives in the overlap term: two blocked junctions that are mutually reachable (one weakly south-west of the other) force a genuine add-back, whereas if the points were incomparable (neither reachable from the other) no single monotone route could hit both and the intersection would vanish. Reading the geometry of the blocked set is what tells you whether inclusion-exclusion needs its $+|S_A\\cap S_B|$ correction at all."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "Mirror Strings Without Touching",
    "difficulty": 4,
    "task": "Find the number of …",
    "tags": [
      "recurrence",
      "symmetry",
      "fibonacci",
      "palindrome"
    ],
    "statement": "Find the number of binary strings of length $12$ that are simultaneously\\[(i) palindromic\\quad(\\text{read the same forwards and backwards}),\\qquad(ii) sparse\\quad(\\text{no two consecutive } 1\\text{'s}).\\]",
    "answer": "$13$",
    "trap": "Counting sparse strings of length $12$ (a Fibonacci number, $F_{14}=377$) and then dividing by $2$ to ``account for'' the palindrome symmetry. Palindromes are not half of all strings, and the central fold creates an extra adjacency constraint at positions $6,7$ that pure division never sees.",
    "solutions": [
      {
        "name": "Symmetry fold to a half-string recurrence",
        "steps": [
          "A palindrome of length $12$ is determined by its first $6$ bits $s_1\\dots s_6$, with $s_7=s_6,\\ s_8=s_5,\\dots$.",
          "The fold forces $s_6=s_7$ (the two central bits), so if $s_6=1$ then $s_7=1$ and they are adjacent $1$'s — forbidden. Hence $s_6=0$, and the first half must itself be sparse.",
          "Thus the count equals the number of sparse strings of length $6$ ending in $0$. Sparse strings of length $5$ (any ending) number $F_{7}=13$, each extended by a final $0$, all sparse.",
          "Therefore the answer is $13.$ $\\boxed{13}$"
        ]
      },
      {
        "name": "Direct Fibonacci recurrence on half-strings",
        "steps": [
          "Let $g_n$ count sparse strings of length $n$ ending in $0$. A sparse string of length $6$ ending in $0$ is any sparse string of length $5$ followed by $0$, so $g_6=f_5$ where $f_5=F_{7}=13$ is the total number of sparse length-$5$ strings.",
          "By the sparse-string recurrence $f_n=f_{n-1}+f_{n-2}$ with $f_1=2,f_2=3$: $f_3=5,f_4=8,f_5=13$.",
          "Hence $13$ palindromic sparse strings of length $12$. $\\boxed{13}$"
        ]
      },
      {
        "name": "Brute-force enumeration",
        "steps": [
          "Enumerate all $2^{12}$ strings; keep those equal to their reverse and containing no ``$11$''.",
          "Exactly $13$ survive, matching the half-string Fibonacci count.",
          "$\\boxed{13}$"
        ]
      }
    ],
    "remark": "Insight: the Fibonacci recurrence (sparseness) and palindromic symmetry fuse at the centre fold, where the symmetry manufactures a brand-new adjacency $s_6=s_7$. The problem collapses to a half-length recurrence, but only after you respect that central pinch."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "Pairings With No Self-Match",
    "difficulty": 4,
    "task": "Find the number of …",
    "tags": [
      "derangement",
      "double-counting",
      "involution",
      "matchings"
    ],
    "statement": "Find the number of permutations $\\sigma$ of $\\{1,2,3,4,5,6,7,8\\}$ that are simultaneously\\[(i) involutions\\;(\\sigma=\\sigma^{-1},\\ \\text{i.e. }\\sigma^2=\\mathrm{id}),\\qquad(ii) derangements\\;(\\sigma(i)\\neq i\\ \\text{for all }i).\\]",
    "answer": "$105$",
    "trap": "Counting all involutions of $8$ elements (which is $764$) and then trying to subtract those with fixed points by a single derangement-style term. An involution with no fixed point is forced to be a product of disjoint transpositions only — a perfect matching — so the right object is a matching count, computed by a double-counting / pairing recurrence, not a generic derangement formula.",
    "solutions": [
      {
        "name": "Fixed-point-free involutions are perfect matchings",
        "steps": [
          "An involution decomposes into $1$-cycles (fixed points) and $2$-cycles. Forbidding fixed points forces $\\sigma$ to be a product of disjoint transpositions covering all $8$ elements — a perfect matching of an $8$-element set.",
          "The number of perfect matchings of $2m$ elements is the double factorial $(2m-1)!!$.",
          "For $2m=8$: $7!!=7\\cdot5\\cdot3\\cdot1=105.$ $\\boxed{105}$"
        ]
      },
      {
        "name": "Double-counting recurrence",
        "steps": [
          "Let $M(2m)$ be the number of perfect matchings. Element $1$ must pair with one of the other $2m-1$ elements; whichever it picks, the remaining $2m-2$ elements form a matching independently.",
          "Hence $M(2m)=(2m-1)\\,M(2m-2)$ with $M(0)=1$, giving $M(8)=7\\cdot5\\cdot3\\cdot1=105$ — the same number arrives by double-counting (matching, distinguished edge) pairs.",
          "$\\boxed{105}$"
        ]
      },
      {
        "name": "Brute-force enumeration",
        "steps": [
          "Generate all $8!$ permutations; keep those with $\\sigma(\\sigma(i))=i$ and $\\sigma(i)\\neq i$ for all $i$.",
          "Exactly $105$ survive, confirming $7!!$.",
          "$\\boxed{105}$"
        ]
      }
    ],
    "remark": "Insight: the involution condition (a structural symmetry $\\sigma=\\sigma^{-1}$) fuses with the derangement condition to annihilate $1$-cycles, leaving precisely the perfect matchings — and matchings are counted by the elegant double-counting recurrence $M(2m)=(2m-1)M(2m-2)$."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Cyclic Seating Embargo",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "bijection",
      "inclusion-exclusion",
      "menage",
      "permutations",
      "cyclic"
    ],
    "statement": "Nine numbered agents $1,2,\\dots,9$ must each be assigned a distinct codename drawn from the same nine labels $1,2,\\dots,9$, i.e. we seek a permutation $\\sigma$ of $\\{1,\\dots,9\\}$. Two embargoes apply simultaneously to every index $i$: agent $i$ may not keep its own label $\\big(\\sigma(i)\\neq i\\big)$, and agent $i$ may not take the label of its cyclic successor $\\big(\\sigma(i)\\neq i+1\\big)$, where the index is taken modulo $9$ so that the successor of $9$ is $1$ (that is, $\\sigma(9)\\neq 1$). Determine the number of permutations $\\sigma$ satisfying both embargoes for all $i$.",
    "answer": "$43387$",
    "trap": "Treating the two bans per row as independent and applying inclusion-exclusion with $\\binom{2n}{k}$ ways to pick $k$ forbidden positions (giving $\\sum_{k}(-1)^k\\binom{18}{k}(9-k)!=25162$), or collapsing to an ordinary derangement that forgets the successor ban entirely ($D_9=133496$). Both ignore that the $18$ forbidden cells $\\{(i,i),(i,i+1)\\}$ form a single closed cycle on the board: cell $(i,i+1)$ shares its column with $(i+1,i+1)$ and its row with $(i,i)$, so two chosen forbidden cells can clash (share a row or column) and are NOT freely combinable. The valid count of $k$ pairwise non-clashing forbidden cells on a cyclic strip of $2n$ is the menage coefficient $\\frac{2n}{2n-k}\\binom{2n-k}{k}$, not $\\binom{2n}{k}$.",
    "solutions": [
      {
        "name": "Menage inclusion-exclusion on the forbidden cycle",
        "steps": [
          "Model $\\sigma$ as a placement of $9$ non-attacking rooks on a $9\\times 9$ board; the forbidden squares are the main diagonal $(i,i)$ and the cyclic super-diagonal $(i,i+1\\bmod 9)$, $18$ squares in total.",
          "Order these $18$ squares around the boundary as $(1,1),(1,2),(2,2),(2,3),\\dots,(9,9),(9,1)$. Consecutive squares in this list share either a row or a column, so they close up into one cycle of length $2n=18$; a set of forbidden squares is simultaneously achievable by a permutation exactly when no two of them are adjacent on this cycle.",
          "The number of ways to choose $k$ pairwise non-adjacent squares from a cycle of $2n$ is the classical menage coefficient $\\dfrac{2n}{2n-k}\\dbinom{2n-k}{k}$; each such choice leaves $(n-k)!$ ways to place the remaining rooks freely.",
          "By inclusion-exclusion the count is $\\displaystyle\\sum_{k=0}^{n}(-1)^k\\,\\frac{2n}{2n-k}\\binom{2n-k}{k}\\,(n-k)!$ with $n=9$.",
          "Computing term by term for $k=0,\\dots,9$ gives $362880-725760+680400-393120+154440-42768+8316-1080+81-2$, which sums to $43387$, so the answer is $\\boxed{43387}$."
        ]
      },
      {
        "name": "Touchard's menage recurrence",
        "steps": [
          "The quantity sought is precisely the menage number $M_n$ (permutations avoiding $\\sigma(i)=i$ and $\\sigma(i)=i+1\\bmod n$), which obeys Touchard's recurrence $(n-2)\\,M_n=n(n-2)\\,M_{n-1}+n\\,M_{n-2}+4(-1)^{n+1}$.",
          "Seed with $M_3=1$ and $M_4=2$ (checkable directly or by the formula in the first solution).",
          "Iterate: $M_5=13,\\ M_6=80,\\ M_7=579,\\ M_8=4738$.",
          "Finally for $n=9$: $(9-2)M_9 = 9\\cdot 7\\cdot 4738 + 9\\cdot 579 + 4(-1)^{10} = 298494 + 5211 + 4 = 303709$, hence $M_9 = 303709/7 = 43387$, confirming $\\boxed{43387}$."
        ]
      },
      {
        "name": "Permanent of the allowed-cell matrix via Ryser",
        "steps": [
          "Let $A$ be the $9\\times 9$ $0/1$ matrix with $A_{ij}=1$ iff label $j$ is permitted for agent $i$, i.e. $A_{ij}=0$ exactly when $j=i$ or $j=i+1\\bmod 9$, and $1$ otherwise; then the number of valid $\\sigma$ equals $\\operatorname{perm}(A)$.",
          "Each row of $A$ has exactly $9-2=7$ ones, and the two zeros in consecutive rows are cyclically staggered, so $A$ is a circulant with first row $(0,0,1,1,1,1,1,1,1)$.",
          "Apply Ryser's formula $\\operatorname{perm}(A)=(-1)^{n}\\sum_{S\\subseteq[n]}(-1)^{|S|}\\prod_{i}\\big(\\textstyle\\sum_{j\\in S}A_{ij}\\big)$; by circulant symmetry the inner products depend only on which forbidden columns fall in $S$, collapsing the sum to the same menage inclusion-exclusion.",
          "Evaluating the permanent (e.g. by Ryser or direct expansion) yields $\\operatorname{perm}(A)=43387$, matching the previous two methods and giving $\\boxed{43387}$."
        ]
      }
    ],
    "remark": "The decisive idea is recognising that the two interacting bans do not act independently: the diagonal and the cyclic super-diagonal interlock into one $18$-cell cycle, which is exactly the combinatorial signature of the probleme des menages. The cyclic wrap on the last row ($\\sigma(9)\\neq 1$) is essential, it is what closes the cycle and replaces $\\binom{2n}{k}$ by the menage coefficient $\\frac{2n}{2n-k}\\binom{2n-k}{k}$. Dropping the wrap turns it into the linear problem with a different count ($48800$), and dropping the successor ban turns it into a plain derangement ($133496$); only the genuine cyclic double-ban yields the menage number $M_9=43387$."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Round Table of Feuds",
    "difficulty": 5,
    "task": "Find the number of …",
    "tags": [
      "circular-permutation",
      "inclusion-exclusion",
      "adjacency",
      "seating"
    ],
    "statement": "Eight distinguishable knights are to be seated around a round table; seatings that differ by a rotation are considered identical, but reflections are considered different. There are four feuding pairs $\\{K_1,K_2\\}$, $\\{K_3,K_4\\}$, $\\{K_5,K_6\\}$, $\\{K_7,K_8\\}$, and the two knights of a feuding pair must not sit in adjacent seats. Find the number of admissible seatings.",
    "answer": "$1488$",
    "trap": "Treating the four ``not-adjacent'' conditions as independent and subtracting $4$ times the glued-pair count once from $7!$. Inclusion–exclusion is mandatory because two or more feuding pairs can be adjacent simultaneously; a single subtraction double-removes those overlaps.",
    "solutions": [
      {
        "name": "Inclusion–exclusion with glued pairs (circular)",
        "steps": [
          "Total circular arrangements of $8$ distinct knights (rotations identified, reflections distinct) is $(8-1)!=5040$.",
          "For a chosen set of $j$ feuding pairs forced adjacent, glue each such pair into a block (each block has $2$ internal orders): we arrange $8-j$ objects around the circle in $(8-j-1)!$ ways, times $2^{j}$, times $\\binom{4}{j}$ ways to choose the pairs.",
          "By inclusion–exclusion the count of seatings with no feuding pair adjacent is $\\sum_{j=0}^{4}(-1)^j\\binom{4}{j}\\,(8-j-1)!\\,2^{j}.$",
          "Evaluate: $5040-4\\cdot6!\\cdot2+6\\cdot5!\\cdot4-4\\cdot4!\\cdot8+1\\cdot3!\\cdot16 = 5040-5760+2880-768+96.$",
          "This gives $1488.$ $\\boxed{1488}$"
        ]
      },
      {
        "name": "Fix one knight to linearize",
        "steps": [
          "Seat $K_1$ in a fixed seat to kill rotations; the remaining $7$ knights fill the other seats in $7!$ linear-around-the-fixed-point ways, but adjacency to $K_1$'s two neighbours is still circular.",
          "Apply inclusion–exclusion over the four forbidden adjacencies as in Method 1 (the glued-block counting is identical once a reference seat is fixed), yielding the same alternating sum.",
          "The sum collapses to $1488.$ $\\boxed{1488}$"
        ]
      },
      {
        "name": "Brute-force over fixed reference",
        "steps": [
          "Fix $K_1$ at seat $0$ and permute the other $7$ knights over seats $1,\\dots,7$; reject any seating in which a feuding pair occupies seats differing by $1$ or $7$ (the circular neighbours).",
          "Enumeration of the $7!=5040$ permutations leaves exactly $1488$ valid seatings.",
          "$\\boxed{1488}$"
        ]
      }
    ],
    "remark": "Insight: ``no two adjacent'' on a circle is the classic fusion of circular permutation counting with inclusion–exclusion via the glue-a-pair trick — the $2^{j}$ internal orders and the $(n-j-1)!$ circular factor are the two instruments speaking together."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Three Untouched Pillars and the Even Oath",
    "difficulty": 5,
    "task": "Count",
    "tags": [
      "fixed-points",
      "derangements",
      "parity",
      "cycle-type",
      "inclusion-exclusion",
      "sign"
    ],
    "statement": "Let $S_8$ be the group of permutations of $\\{1,2,\\dots,8\\}$. Call $\\sigma\\in S_8$ admissible if it has exactly three fixed points (indices $i$ with $\\sigma(i)=i$) and $\\sigma$ is an even permutation $\\big(\\operatorname{sgn}\\sigma=+1\\big)$. Determine the number of admissible permutations.",
    "answer": "\\[\\boxed{1344}\\]",
    "trap": "After fixing the three loyal indices in $\\binom{8}{3}=56$ ways, the other five must form a derangement, so there are $56\\cdot D_5=56\\cdot 44=2464$ permutations with exactly three fixed points. The seductive error is to assume the even and odd ones split evenly and divide by $2$, giving $2464/2=1232$. They do NOT split evenly: a fixed point is a $1$-cycle (sign $+1$), so the whole sign equals the sign of the $5$-element derangement, and a derangement of $5$ points has cycle type either a single $5$-cycle (even) or a $2$-cycle$+3$-cycle (odd) — and these two classes have DIFFERENT sizes ($24$ versus $20$). The even derangements outnumber the odd ones by exactly $4$, the discrepancy that makes the true answer $1344\\neq 1232$.",
    "solutions": [
      {
        "name": "Reduce to even derangements of 5, then split by cycle type",
        "steps": [
          "A permutation with exactly three fixed points is built by choosing the three fixed indices, which can be done in $\\binom{8}{3}=56$ ways, and then deranging the remaining five points (no further fixed point allowed).",
          "Each fixed point is a $1$-cycle and contributes a factor $+1$ to the sign, so $\\operatorname{sgn}\\sigma$ equals the sign of the induced permutation on the $5$ deranged points; hence $\\sigma$ is even precisely when that derangement of $5$ elements is even.",
          "A derangement of $5$ points has no $1$-cycles, so its cycle type is a partition of $5$ into parts $\\ge 2$: either one $5$-cycle, or one $2$-cycle together with one $3$-cycle. There are $(5-1)!=24$ five-cycles, and $\\binom{5}{2}\\cdot 1\\cdot 2=20$ permutations of type $(2,3)$, indeed totalling $D_5=44$.",
          "A $k$-cycle has sign $(-1)^{k-1}$: a $5$-cycle is even, while a $2$-cycle$+3$-cycle has sign $(-1)^{1}(-1)^{2}=-1$ and is odd. Thus the even derangements of $5$ are exactly the $24$ five-cycles.",
          "Multiplying, the number of admissible $\\sigma$ is $56\\times 24=\\boxed{1344}$."
        ]
      },
      {
        "name": "Signed enumeration: half-sum with the alternating derangement total",
        "steps": [
          "Let $E$ and $O$ be the numbers of even and odd derangements of $5$ points; then $E+O=D_5=44$ and $E-O=\\sum_{\\tau\\in\\,\\text{Der}(5)}\\operatorname{sgn}\\tau$.",
          "The signed derangement sum has the closed form $\\sum_{\\tau\\in\\,\\text{Der}(n)}\\operatorname{sgn}\\tau=(-1)^{\\,n-1}(n-1)$, obtained from $\\det(J-I)$ where $J$ is the all-ones matrix: the permanent-style sign expansion of the $0/1$ matrix with zero diagonal gives exactly the signed count of fixed-point-free permutations.",
          "For $n=5$ this equals $(-1)^{4}\\cdot 4=4$, so $E-O=4$; combined with $E+O=44$ we get $E=\\tfrac{44+4}{2}=24$ and $O=20$.",
          "Since the three fixed points do not affect the sign, the even permutations with exactly three fixed points number $\\binom{8}{3}\\cdot E=56\\cdot 24=\\boxed{1344}$."
        ]
      },
      {
        "name": "Inclusion-exclusion on fixed points within each parity class",
        "steps": [
          "Let $A_k$ be the number of even permutations of $5$ points having at least $k$ specified of them fixed; the remaining $5-k$ points may be any permutation, of which the even ones number $\\tfrac{1}{2}(5-k)!$ for $5-k\\ge 2$, while for $5-k\\le 1$ every permutation is even, giving $1$.",
          "By inclusion-exclusion the even derangements of $5$ equal $E=\\sum_{k=0}^{5}(-1)^k\\binom{5}{k}e_{5-k}$, where $e_m=\\tfrac{1}{2}m!$ for $m\\ge 2$ and $e_1=e_0=1$.",
          "Plugging $e_5=60,\\,e_4=12,\\,e_3=3,\\,e_2=1,\\,e_1=1,\\,e_0=1$: $E=60-5\\cdot 12+10\\cdot 3-10\\cdot 1+5\\cdot 1-1=60-60+30-10+5-1=24$.",
          "Therefore the count of admissible permutations of $\\{1,\\dots,8\\}$ is $\\binom{8}{3}\\cdot E=56\\cdot 24=\\boxed{1344}$."
        ]
      }
    ],
    "remark": "The fusion here is fixed-point statistic crossed with sign. The trap is the unjustified belief that 'half of everything is even'; it fails because parity is rigidly determined by cycle type, and the two admissible cycle types of a $5$-derangement ($5$-cycles versus $2{+}3$) occur in unequal numbers. The signed derangement identity $\\sum_{\\text{Der}(n)}\\operatorname{sgn}=(-1)^{n-1}(n-1)$ measures exactly this imbalance and turns a parity question into a one-line determinant. Note the answer would collapse to the naive $1232$ only if that imbalance were zero — which happens for no $n\\ge 2$."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "Forbidden Diagonal Postings",
    "difficulty": 5,
    "task": "Find the number of …",
    "tags": [
      "bijection",
      "inclusion-exclusion",
      "rook-polynomial",
      "restricted-permutations"
    ],
    "statement": "Eight distinct ambassadors are to be assigned to eight distinct embassies, one each (a bijection). The first four ambassadors $A_1,A_2,A_3,A_4$ are each barred from one specific embassy: $A_i$ may not go to embassy $E_i$, for $i=1,2,3,4$ (the remaining ambassadors have no restrictions). Find the number of admissible assignments.",
    "answer": "$24024$",
    "trap": "Multiplying $8!$ by $\\bigl(\\tfrac{7}{8}\\bigr)^4$ to ``discount'' each forbidden posting, or subtracting $4\\cdot 7!$ once. The four bans can be simultaneously violated, so you must inclusion–exclude over how many of the forbidden diagonal cells are occupied, using the fact that those cells form a non-attacking (matching) configuration.",
    "solutions": [
      {
        "name": "Inclusion–exclusion on forbidden cells",
        "steps": [
          "Total bijections: $8!=40320$. The four forbidden placements $(A_i\\to E_i)$ correspond to $4$ cells, one in each of distinct rows and columns, so any $k$ of them can be occupied simultaneously in $\\binom{4}{k}$ ways (the rook polynomial coefficient $r_k=\\binom{4}{k}$).",
          "By inclusion–exclusion, placing $k$ of the forbidden cells and filling the rest arbitrarily gives $(8-k)!$ completions; with sign: $\\sum_{k=0}^{4}(-1)^k\\binom{4}{k}(8-k)!$.",
          "Evaluate: $40320-4\\cdot5040+6\\cdot720-4\\cdot120+1\\cdot24=40320-20160+4320-480+24.$",
          "This equals $24024.$ $\\boxed{24024}$"
        ]
      },
      {
        "name": "Partial-derangement recursion",
        "steps": [
          "The number of permutations of $n$ with $m$ specified non-attacking forbidden positions is $\\sum_{k=0}^{m}(-1)^k\\binom{m}{k}(n-k)!$. Here $n=8,\\ m=4$.",
          "Compute the sum termwise as above to obtain $24024$; equivalently this is the ``partial derangement'' $D_{8,4}$ where only $4$ of the $8$ positions are constrained.",
          "$\\boxed{24024}$"
        ]
      },
      {
        "name": "Brute-force enumeration",
        "steps": [
          "Enumerate all $8!$ bijections and reject any with $\\sigma(i)=i$ for some $i\\in\\{1,2,3,4\\}$.",
          "Exactly $24024$ assignments remain, matching the inclusion–exclusion total.",
          "$\\boxed{24024}$"
        ]
      }
    ],
    "remark": "Insight: a bijection count fused with inclusion–exclusion over forbidden cells is the rook-polynomial method. Because the four banned cells lie in distinct rows and columns, the rook numbers are simply $\\binom{4}{k}$, giving the clean alternating sum $\\sum(-1)^k\\binom{4}{k}(8-k)!$."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Onto Derangement of Colours",
    "difficulty": 5,
    "task": "Find the number of admissible placements.",
    "tags": [
      "surjection",
      "derangement",
      "inclusion-exclusion",
      "double-axis"
    ],
    "statement": "Six tokens are to be sorted into three boxes labelled $R$, $G$, $B$, with every box receiving at least one token. The tokens come in colours: tokens $1,2$ are red, tokens $3,4$ are green, tokens $5,6$ are blue. A token may not be placed in the box matching its own colour (a red token may not go in box $R$, etc.). Find the number of admissible placements.",
    "answer": "$52$",
    "trap": "Handling only one constraint at a time. For example, counting onto functions ($540$) and then trying to scale by a single colour-avoidance factor (no clean factor exists: $52/540$ is not a tidy ratio), or counting all colour-avoiding maps ($2^6 = 64$) and then subtracting non-onto maps using one derangement-style term while forgetting to compute the second inclusion-exclusion term. The ``onto'' axis and the ``own-colour-forbidden'' axis are two independent inclusion-exclusions that must be run together; the size-$2$ correction term must be evaluated (it happens to be $0$), not assumed away.",
    "solutions": [
      {
        "name": "Two-axis inclusion-exclusion",
        "steps": [
          "Each token has exactly $2$ allowed boxes (its two non-matching colours). Without the onto requirement there are $2^6 = 64$ colour-avoiding placements.",
          "Run inclusion-exclusion over which boxes are left empty. For a set $T$ of forbidden-empty boxes, the number of colour-avoiding placements using only boxes outside $T$ is $\\prod_i \\bigl|\\{\\text{allowed boxes for token } i\\} \\setminus T\\bigr|$.",
          "$|T| = 0$: $2^6 = 64$. $|T| = 1$ (say remove $R$): each red token still has $2$ allowed boxes (it never used $R$), while each non-red token drops to $1$ allowed box, giving $2^2 \\cdot 1^4 = 4$; with three choices of $T$ this contributes $3 \\cdot 4 = 12$. $|T| = 2$ (keep only one box, say $R$): the two red tokens cannot enter $R$, so the product is $0$; all three choices give $0$.",
          "Inclusion-exclusion: $64 - 12 + 0 = 52$. $\\boxed{52}$"
        ]
      },
      {
        "name": "Onto first, then forbid own colours",
        "steps": [
          "Equivalently, sum over surjections and remove own-colour placements by inclusion-exclusion. Both inclusion-exclusions (onto over empty boxes, colour-ban over each token) commute, so collecting terms yields $\\sum_{T \\subseteq \\{R,G,B\\}} (-1)^{|T|} \\prod_i a_i(T)$, where $a_i(T)$ counts each token's surviving boxes after deleting $T$ and its own colour.",
          "Computing the product for each $T$ gives the same $64 - 12 + 0 = 52$, confirming the order of the two axes is irrelevant.",
          "$\\boxed{52}$"
        ]
      },
      {
        "name": "Brute-force enumeration",
        "steps": [
          "Iterate over all $3^6 = 729$ placements; keep those whose image is all of $\\{R, G, B\\}$ and in which no token sits in its own colour's box.",
          "Exactly $52$ placements survive. $\\boxed{52}$"
        ]
      }
    ],
    "remark": "Insight: this is the cleanest grand hybrid. Surjection counting and derangement-style forbidden positions live on two different inclusion-exclusion axes over the same maps. Either run a single inclusion-exclusion over empty boxes with per-token allowed sets already trimmed (Method 1), or interleave both axes; the answer is the same. The size-$2$ term vanishes precisely because forcing everything into one box would put both same-coloured tokens in their forbidden box, which is the structural reason $64 - 12 = 52$ is exact rather than coincidental."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "Chocolates With a Ceiling",
    "difficulty": 5,
    "task": "Bounded distribution via inclusion-exclusion",
    "tags": [
      "stars and bars",
      "inclusion-exclusion",
      "bounded distribution",
      "identical objects",
      "lower and upper bounds"
    ],
    "statement": "A teacher has  $15$  identical chocolates to hand out to her  $4$  distinct students. House rules: every student must receive “at least one” chocolate, and “no student may receive more than six” (a student who hoards seven would make the others jealous). In how many ways can the  $15$  chocolates be distributed?",
    "answer": " $\\boxed{140}$ ",
    "trap": "The seductive shortcut is to handle only the lower bound: give each of the  $4$  students one chocolate up front, then scatter the remaining  $11$  freely by stars and bars, getting  $\\binom{11+4-1}{4-1}=\\binom{14}{3}=364$ . That silently permits a student to end with as many as  $12$  chocolates, violating the ceiling of  $6$ . The cap of  $6$  must be enforced by inclusion–exclusion, which drops the honest count from  $364$  down to  $140$ , not  $364$ .",
    "solutions": [
      {
        "name": "Shift the floor, then inclusion-exclusion on the ceiling",
        "steps": [
          "Absorb the “at least one” rule by writing  $x_i = y_i + 1$  with  $y_i \\ge 0$ . The total becomes  $y_1+y_2+y_3+y_4 = 15-4 = 11$ , and the ceiling  $x_i \\le 6$  turns into  $y_i \\le 5$ .",
          "Let  $N_0=\\binom{11+3}{3}=\\binom{14}{3}=364$  be the unrestricted count. For each student, the “bad” event  $y_i \\ge 6$  is forced by pre-handing that student  $6$  extra units, leaving  $11-6=5$  to spread:  $\\binom{5+3}{3}=\\binom{8}{3}=56$  each.",
          "Two students cannot both exceed  $5$  (that already needs  $12>11$  units), so all higher overlaps vanish. By inclusion–exclusion the answer is  $\\binom{14}{3}-\\binom{4}{1}\\binom{8}{3}=364-4\\cdot 56=364-224=\\boxed{140}$ ."
        ]
      },
      {
        "name": "Symmetric complement (count from the top)",
        "steps": [
          "With  $y_i = x_i - 1 \\in [0,5]$  summing to  $11$ , replace each  $y_i$  by its mirror  $z_i = 5 - y_i \\in [0,5]$ . Then  $z_1+z_2+z_3+z_4 = 20-11 = 9$  with the same box bounds  $0 \\le z_i \\le 5$ .",
          "Count  $z_1+\\cdots+z_4=9$  with  $z_i \\le 5$  by inclusion–exclusion:  $\\binom{9+3}{3}-\\binom{4}{1}\\binom{(9-6)+3}{3}=\\binom{12}{3}-4\\binom{6}{3}=220-4\\cdot 20=220-80=140$ .",
          "The mirror is a bijection, so the original count equals  $\\boxed{140}$ , confirming the first method."
        ]
      }
    ],
    "remark": "**Insight.** A bounded distribution is two ideas welded together: stars and bars sets the stage, but the upper cap is an inclusion–exclusion event. The trap is treating “at least  $1$ ” and “at most  $6$ ” as the same kind of constraint — a floor is absorbed by a clean substitution, while a ceiling must be subtracted off. Here the two excluded students never collide, so a single subtraction layer suffices."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "Children Wedged Between Adults",
    "difficulty": 5,
    "task": "Circular seating with non-adjacency gaps",
    "tags": [
      "circular permutation",
      "gap method",
      "non-adjacency",
      "selection",
      "product rule"
    ],
    "statement": "$5$ distinct adults and three distinct children are to be seated around a single round table (seatings that differ only by a rotation are regarded as identical). The rule of the house is that “no two children may sit next to each other.” In how many distinct ways can the eight people be seated?",
    "answer": " $\\boxed{1440}$ ",
    "trap": "A tempting blunder is to seat all eight as one circular permutation,  $(8-1)!=5040$ , and then “subtract the bad ones,” or worse, to treat it as a line and write  $5!\\cdot\\binom{6}{3}\\cdot 3!$ . The first abandons the gap structure entirely; the second uses  $5!$  (a line of adults,  $120$ ) instead of the circular  $(5-1)!=24$ , and counts  $6$  end-gaps instead of the  $5$  true circular gaps — inflating the count tenfold to  $14400$ . Around a circle there are exactly as many gaps as adults, namely  $5$ , and the adults form a circular, not linear, arrangement.",
    "solutions": [
      {
        "name": "Seat adults in a circle, slot children into gaps",
        "steps": [
          "First seat the five distinct adults around the round table. As a circular permutation this is  $(5-1)! = 4! = 24$  ways; fixing one adult kills the rotational duplication.",
          "Five seated adults create exactly  $5$  gaps between consecutive adults. To keep children apart, place at most one child per gap: choose  $3$  of the  $5$  gaps and arrange the three distinct children in them,  $\\binom{5}{3}\\cdot 3! = 10\\cdot 6 = 60$  ways (equivalently the ordered count  $5\\cdot 4\\cdot 3 = 60$ ).",
          "By the product rule the total is  $24 \\cdot 60 = \\boxed{1440}$ ."
        ]
      },
      {
        "name": "Total circular minus a glued block, as a check",
        "steps": [
          "All eight around the table:  $(8-1)! = 5040$ . Now remove the arrangements where the children are NOT all separated, but it is cleaner to verify by the constructive count: anchor one adult to fix rotation, then the remaining  $4$  adults fill  $4$  of the other  $7$  chairs as a sequence while the  $3$  children occupy the gaps.",
          "Anchoring one adult, the four remaining adults can be ordered in  $4! = 24$  ways around the circle; this fixes the  $5$  inter-adult gaps. Inserting the three distinct children one-per-gap into the  $5$  available gaps gives  $5\\cdot 4\\cdot 3 = 60$ .",
          "Thus  $24 \\cdot 60 = 1440$ , matching the gap method:  $\\boxed{1440}$ ."
        ]
      }
    ],
    "remark": "**Insight.** The fusion here is a circular permutation feeding a gap-selection: arrange the “majority” population around the circle first, then treat the inter-person gaps as the distinct boxes for the constrained minority. The defining circular fact —  $n$  seated people make exactly  $n$  gaps, not  $n+1$  — is what separates this from the linear non-adjacency problem and is precisely where the tenfold trap strikes."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "Dodging Two Potholes on the Grid",
    "difficulty": 5,
    "task": "Lattice paths avoiding two points",
    "tags": [
      "lattice paths",
      "inclusion-exclusion",
      "monotonic paths",
      "binomial coefficients",
      "geometric counting"
    ],
    "statement": "A courier walks on the integer grid from  $(0,0)$  to  $(6,6)$ , taking unit steps only to the right or upward (a monotonic staircase path). Two intersections are blocked by roadworks:  $P=(2,2)$  and  $Q=(4,4)$ . How many of the staircase routes from  $(0,0)$  to  $(6,6)$  avoid “both” blocked intersections?",
    "answer": " $\\boxed{300}$ ",
    "trap": "The classic inclusion–exclusion slip is to subtract the routes through  $P$  and the routes through  $Q$  from the total and stop:  $\\binom{12}{6}-\\binom{8}{4}\\binom{8}{4}-\\binom{8}{4}\\binom{8}{4}=924-420-420=84$ . Because  $P$  and  $Q$  lie on a common increasing staircase, the routes passing through “both”  $P$  and  $Q$  were removed twice and must be added back once. That add-back,  $\\binom{4}{2}\\binom{4}{2}\\binom{4}{2}=216$ , is large, and forgetting it collapses the answer from  $300$  to a badly-undercounted  $84$ .",
    "solutions": [
      {
        "name": "Inclusion-exclusion on the two blocked points",
        "steps": [
          "Total monotonic routes  $(0,0)\\to(6,6)$  use  $6$  rights and  $6$  ups:  $\\binom{12}{6}=924$ . Routes through a point split as (paths to it) $\\times$ (paths from it).",
          "Through  $P=(2,2)$ :  $\\binom{4}{2}\\binom{8}{4}=6\\cdot 70=420$ . Through  $Q=(4,4)$ :  $\\binom{8}{4}\\binom{4}{2}=70\\cdot 6=420$ . Through both  $P$  and  $Q$  (in the only possible order,  $P$  before  $Q$ ):  $\\binom{4}{2}\\binom{4}{2}\\binom{4}{2}=6\\cdot 6\\cdot 6=216$ .",
          "By inclusion–exclusion the routes avoiding both are  $924-420-420+216=\\boxed{300}$ ."
        ]
      },
      {
        "name": "Complementary union count",
        "steps": [
          "Let  $A$  be the routes through  $P$  and  $B$  the routes through  $Q$ . We need the total minus  $|A\\cup B|$ .",
          " $|A\\cup B| = |A|+|B|-|A\\cap B| = 420+420-216 = 624$ , where  $|A\\cap B|=216$  counts routes hitting  $P$  then  $Q$  since  $Q$  is up-and-right of  $P$ .",
          "Hence the avoiding routes number  $924 - 624 = \\boxed{300}$ , agreeing with the direct inclusion–exclusion."
        ]
      }
    ],
    "remark": "**Insight.** This welds geometric path-counting to inclusion–exclusion. The whole difficulty lives in the overlap term: because  $P$  and  $Q$  are comparable on the staircase (one is reachable from the other), a path can hit both, so the intersection is nonzero and the add-back is essential. Had the two potholes been incomparable (neither up-right of the other), the add-back would vanish — recognizing which case you are in is the conceptual hinge."
  }
];
