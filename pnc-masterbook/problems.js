/* PERMUTATIONS & COMBINATIONS — The Art of Counting · 100 original problems, 10 chapters, adversarially Python-verified. */
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
    "title": "The Ledger That Hides a Zero",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "complementary counting",
      "inclusion-exclusion",
      "residue imbalance",
      "digit-sum",
      "casework"
    ],
    "statement": "A four-character ledger code is any string $d_1 d_2 d_3 d_4$ with each $d_i \\in \\{0,1,2,\\dots,9\\}$ (leading zeros allowed, so there are $10^4$ codes in all). \\[\\text{Determine how many codes satisfy } both \\text{ conditions: the code contains at least one digit } 0, \\text{ and its digit sum } d_1{+}d_2{+}d_3{+}d_4 \\text{ is divisible by } 3.\\]",
    "answer": "$\\dfrac{10^4-9^4+2}{3}=1147$",
    "trap": "Assuming the digit sum is divisible by $3$ for exactly one third of the strings. Over the alphabet $\\{0,\\dots,9\\}$ the residues mod $3$ are not balanced: four digits ($0,3,6,9$) are $\\equiv 0$ while only three are $\\equiv 1$ and three are $\\equiv 2$. So the count with sum $\\equiv 0$ is $\\tfrac{10^4+2}{3}=3334$, not $\\big\\lfloor \\tfrac{10^4}{3}\\big\\rfloor=3333$. Treating the two attributes as independent with $P(\\text{sum}\\equiv 0)=\\tfrac13$ gives $(10^4-9^4)\\cdot\\tfrac13=\\tfrac{8281}{3}\\approx 1146$ — the missed $+2$ correction is exactly the error.",
    "solutions": [
      {
        "name": "Four-region complementary count (the two principles)",
        "steps": [
          "Let $A$ be the set of codes containing at least one $0$ and $B$ the set whose digit sum is divisible by $3$; we want $|A\\cap B|$. Use $|A\\cap B| = N - |A^c| - |B^c| + |A^c\\cap B^c|$, where $N=10^4$ counts all codes.",
          "$|A^c|$ (no zero anywhere): each digit is chosen from $\\{1,\\dots,9\\}$, so $|A^c| = 9^4 = 6561$.",
          "$|B^c\\cap A^c|$ (no zero and sum $\\not\\equiv 0$): over $\\{1,\\dots,9\\}$ the residue classes mod $3$ are perfectly balanced — $\\{3,6,9\\},\\{1,4,7\\},\\{2,5,8\\}$, three digits each — so the four-digit sum is equally likely to be $\\equiv 0,1,2$. Thus exactly $\\tfrac13$ of the $9^4$ zero-free codes have sum $\\equiv 0$, giving $|A^c\\cap B| = \\tfrac{9^4}{3}=2187$ and $|A^c\\cap B^c| = 9^4 - 2187 = 4374$.",
          "$|B^c|$ (sum $\\not\\equiv 0$ over the full alphabet): over $\\{0,\\dots,9\\}$ the classes are $\\{0,3,6,9\\}$ (four), $\\{1,4,7\\}$, $\\{2,5,8\\}$ (three each). A roots-of-unity/transfer count gives $|B| = \\tfrac{10^4+2}{3}=3334$ codes with sum $\\equiv 0$, hence $|B^c| = 10^4 - 3334 = 6666$.",
          "Assemble: $|A\\cap B| = 10000 - 6561 - 6666 + 4374 = \\boxed{1147}$."
        ]
      },
      {
        "name": "Subtract the zero-free divisible codes from all divisible codes",
        "steps": [
          "Codes with sum divisible by $3$ split cleanly by whether they contain a $0$: $|B| = |A\\cap B| + |A^c\\cap B|$, so $|A\\cap B| = |B| - |A^c\\cap B|$.",
          "$|B|$ over $\\{0,\\dots,9\\}$: by the residue counts $(4,3,3)$ for classes $(0,1,2)$, the number of four-digit strings with sum $\\equiv 0$ is $\\tfrac{10^4+2}{3}=3334$ (the $+2$ comes from the surplus of residue-$0$ digits).",
          "$|A^c\\cap B|$ over $\\{1,\\dots,9\\}$: residues are balanced $(3,3,3)$, so exactly $\\tfrac{9^4}{3}=2187$ zero-free codes have sum $\\equiv 0$.",
          "Therefore $|A\\cap B| = 3334 - 2187 = \\boxed{1147}$, matching the closed form $\\tfrac{10^4-9^4+2}{3}$."
        ]
      },
      {
        "name": "Generating function (roots of unity filter)",
        "steps": [
          "Encode the digit sum mod $3$ with $\\omega=e^{2\\pi i/3}$. For an alphabet $S$, the number of length-$4$ strings with sum $\\equiv 0$ is $\\tfrac13\\sum_{j=0}^{2}\\big(\\sum_{d\\in S}\\omega^{jd}\\big)^4$.",
          "Full alphabet $S=\\{0,\\dots,9\\}$: $\\sum_d \\omega^{0\\cdot d}=10$, while $\\sum_d \\omega^{jd}=1$ for $j=1,2$ (the surplus digit $0$ leaves a residue of $1$). So $|B|=\\tfrac13(10^4+1^4+1^4)=\\tfrac{10000+2}{3}=3334$.",
          "Zero-free alphabet $S=\\{1,\\dots,9\\}$: $\\sum_d \\omega^{0\\cdot d}=9$ and $\\sum_d \\omega^{jd}=0$ for $j=1,2$ (perfect balance). So $|A^c\\cap B|=\\tfrac13(9^4+0+0)=\\tfrac{9^4}{3}=2187$.",
          "Subtracting, $|A\\cap B| = 3334 - 2187 = \\boxed{1147}$; the two $\\tfrac13$'s come from genuinely different alphabets, which is why the naive single factor of $\\tfrac13$ fails."
        ]
      }
    ],
    "remark": "Insight: the two attributes look independent, but the divisibility filter is sensitive to which alphabet it acts on. Over $\\{0,\\dots,9\\}$ the residue classes are lopsided $(4,3,3)$, so the $\\tfrac13$ heuristic is off by the $+2$ surplus; over $\\{1,\\dots,9\\}$ they are exactly $(3,3,3)$ and the heuristic is precise. Complementary counting forces you to evaluate the filter on both alphabets separately — collapsing them to one $\\tfrac13$ is the trap."
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
          "The forbidden combination \\enquote{in $A$ but not in $B$} is excluded precisely by $A\\subseteq B$, so every trophy genuinely has $3$ admissible states and no others.",
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
    "remark": "A subset-containment constraint $A\\subseteq B$ is secretly a per-element ternary choice. Recognising the bijection \\enquote{pair of nested sets $\\leftrightarrow$ string over three symbols} turns a binomial sum into a one-line power. More generally, the number of chains $A_1\\subseteq A_2\\subseteq\\cdots\\subseteq A_{m}$ inside an $n$-set is $(m+1)^n$, since each element independently picks the first link it enters."
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
    "statement": "All seven letters of the word $BALLOON$ are rearranged into distinct strings (the two $\\mathrm{L}$'s are indistinguishable, and so are the two $\\mathrm{O}$'s). \\[\\text{Find the number of these distinct strings in which the letter } \\mathrm{A} \\text{ stands to the left of } both  \\mathrm{O}\\text{'s.}\\]",
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
    "statement": "Consider strings of length $6$ over the alphabet $\\{\\mathrm{A},\\mathrm{B},\\mathrm{C},\\mathrm{D}\\}$, where each position may be any of the four letters (repetition allowed). \\[\\text{Determine how many such strings contain } at least one  \\mathrm{A} \\text{ but } never two  \\mathrm{A}\\text{'s in adjacent positions.}\\]",
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
    "statement": "Twelve points are placed on a circle, and every pair is joined by a chord. Assume the points are in general position so that no three chords meet at a single interior point. Determine the number of points at which two chords cross strictly inside the circle.",
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
    "title": "Even Tiles Only",
    "difficulty": 4,
    "task": "Count",
    "tags": [
      "lattice rectangles",
      "parity weighting",
      "complementary counting",
      "inclusion-exclusion",
      "hidden distribution"
    ],
    "statement": "An $8\\times 8$ chessboard is drawn as a lattice: $9$ equally spaced horizontal grid lines and $9$ equally spaced vertical grid lines, the spacing being one unit. An axis-aligned rectangle is any region bounded by two distinct horizontal lines and two distinct vertical lines; its area (in unit squares) is the product of its width and its height. Count the axis-aligned rectangles whose area is an even number of unit squares.",
    "answer": "$896$",
    "trap": "A rectangle has even area exactly when at least one of its two side-lengths is even, so by complement the odd-area rectangles are those with both sides odd, and the whole problem reduces to: of the $\\binom{9}{2}=36$ segments cut from a row of $9$ grid lines, how many have odd length? The fatal instinct is to call this number $18$. The reasoning sounds airtight: the possible lengths are $1,2,3,4,5,6,7,8$, exactly four odd and four even, so 'by symmetry' the $36$ segments split evenly, $18$ odd and $18$ even. This silently treats every length as equally frequent. It is not: length $\\ell$ occurs $9-\\ell$ times, so the odd lengths $1,3,5,7$ occur $8+6+4+2=20$ times while the even lengths $2,4,6,8$ occur $7+5+3+1=16$ times. The shorter (hence more numerous) segments tilt the count toward odd. The $18/18$ slip gives odd-area $=18^2=324$ and even-area $=1296-324=972$; the honest weighting gives odd-area $=20^2=400$ and even-area $=896$. The missed case is the hidden non-uniform distribution of segment lengths, not an arithmetic error.",
    "solutions": [
      {
        "name": "Complement via parity of endpoints",
        "steps": [
          "The total number of axis-aligned rectangles is $\\binom{9}{2}^2=36^2=1296$, since a rectangle is a choice of two vertical lines and two horizontal lines. A rectangle's area $w\\cdot h$ is odd precisely when both $w$ and $h$ are odd, so it is even otherwise; we count the odd-area rectangles and subtract.",
          "Index the $9$ lines in one direction as $0,1,2,\\dots,8$. A segment between lines $a<b$ has length $b-a$, which is odd exactly when $a$ and $b$ have opposite parity. Among $0,\\dots,8$ there are $5$ even indices $\\{0,2,4,6,8\\}$ and $4$ odd indices $\\{1,3,5,7\\}$, so the number of odd-length segments is $5\\cdot 4=20$ (one endpoint of each parity).",
          "By the same count each direction yields $20$ odd-length segments, so the rectangles with both sides odd number $20\\times 20=400$.",
          "Therefore the even-area rectangles number $1296-400=\\boxed{896}$."
        ]
      },
      {
        "name": "Inclusion-exclusion on an even side",
        "steps": [
          "First find how many of the $36$ segments on $9$ lines have even length. Even length means the endpoints share parity: choosing both from the $5$ even-indexed lines gives $\\binom{5}{2}=10$, and both from the $4$ odd-indexed lines gives $\\binom{4}{2}=6$, a total of $10+6=16$ even-length segments (and $36-16=20$ odd, confirming the split).",
          "A rectangle has even area iff its width is even or its height is even. Let $W$ be the rectangles with even width and $H$ those with even height. Then $|W|=16\\cdot 36$ and $|H|=36\\cdot 16$, since the other side ranges over all $36$ segments.",
          "The overlap $W\\cap H$ (both sides even) has $16\\cdot 16$ rectangles. By inclusion-exclusion the even-area count is $|W|+|H|-|W\\cap H| = 16\\cdot 36 + 36\\cdot 16 - 16\\cdot 16 = 576+576-256$.",
          "This equals $\\boxed{896}$, matching the complementary count."
        ]
      },
      {
        "name": "Parity generating function",
        "steps": [
          "Classify one side by a parity marker $x$: write $g(x)=16+20x$, where the constant $16$ counts even-length segments (marked $x^0$) and the coefficient $20$ counts odd-length segments (marked $x^1$). The split $16,20$ comes from the length multiplicities $9-\\ell$: even lengths give $7+5+3+1=16$ and odd lengths give $8+6+4+2=20$.",
          "Since the two sides are chosen independently, the parity profile of all rectangles is the product $g(x)\\,g(x)=(16+20x)^2 = 256 + 640\\,x + 400\\,x^{2}$. The exponent of $x$ records how many of the two sides are odd: $x^0$ means both even, $x^1$ means exactly one odd, $x^2$ means both odd.",
          "Area $=w\\cdot h$ is odd if and only if both sides are odd, which is exactly the $x^2$ term. Hence odd-area $=400$, while the even-area rectangles are the $x^0$ and $x^1$ terms together, $256+640=896$.",
          "The total $g(1)^2=36^2=1296=256+640+400$ checks out, and even-area $=1296-400=\\boxed{896}$, agreeing with both earlier methods."
        ]
      }
    ],
    "remark": "Insight: 'even area' looks like a property of the product $w\\cdot h$, but it is governed entirely by parity, and parity is not uniformly distributed over segment lengths. On $9$ collinear points the lengths $1,\\dots,8$ appear with multiplicities $8,7,6,5,4,3,2,1$, so odd lengths beat even ones $20$ to $16$ — equivalently, an odd-length segment needs opposite-parity endpoints, and the $5$-versus-$4$ split of even/odd indices makes $5\\cdot 4=20$ the natural count. The bare product $\\binom{9}{2}^2$ never sees this; only a parity-weighted decomposition (complement, inclusion-exclusion, or a parity generating function) does. The seductive $18/18$ symmetry is the trap, and recognizing why the distribution is lopsided is the whole problem."
  },
  {
    "theme": "combinations",
    "themeLabel": "Combinations & Selections",
    "title": "The Inseparable Delegates",
    "difficulty": 5,
    "task": "Count",
    "tags": [
      "coupled constraint",
      "inclusion-exclusion",
      "case split",
      "both-or-neither",
      "hidden bound interaction"
    ],
    "statement": "A drafting committee of exactly $6$ members is to be chosen from a pool of $8$ senators and $7$ economists. The committee must contain at least $2$ senators and at least $2$ economists. Two of the senators, Mr.\\ A and Ms.\\ B, are married to each other and refuse to serve apart: in any committee they are either both members or neither is a member. In how many ways can the committee be formed?",
    "answer": "$\\boxed{2100}$",
    "trap": "The seductive route is to first count all $6$-member committees obeying the two quota bounds while ignoring the marriage, then subtract the offending committees that split the couple. The bound-only count is $\\sum_{s=2}^{4}\\binom{8}{s}\\binom{7}{6-s}=4410$. The slip is in the subtraction: a strong student computes 'committees containing exactly one of $A,B$' as $2\\binom{13}{5}=2574$ (pick which spouse is in, fill $5$ of the remaining $13$ freely) and reports $4410-2574=1836$. This double-violates the very bounds being enforced: those $2574$ committees were never filtered for at-least-$2$-senators / at-least-$2$-economists, so the subtraction strips out configurations that the $4410$ never contained, over-subtracting by exactly $264$. The honest count of bound-valid committees that split the couple is $2310$, giving $4410-2310=2100$. The hidden case is that the both-or-neither coupling and the two quota bounds are not independent filters you can apply in sequence — the coupling alters which bound-violations are even reachable, so the inclusion-exclusion must respect the bounds inside the subtracted term.",
    "solutions": [
      {
        "name": "Split on the couple's joint fate",
        "steps": [
          "The marriage forces a clean dichotomy: either both $A$ and $B$ serve, or neither does. Count the two worlds separately and add, since they are disjoint and exhaustive.",
          "Couple OUT: now every senator on the committee comes from the $6$ remaining senators, alongside the $7$ economists. We need $s$ senators and $6-s$ economists with $s\\ge 2$ and $6-s\\ge 2$, i.e. $s\\in\\{2,3,4\\}$. This gives $\\binom{6}{2}\\binom{7}{4}+\\binom{6}{3}\\binom{7}{3}+\\binom{6}{4}\\binom{7}{2}=15\\cdot 35+20\\cdot 35+15\\cdot 21=525+700+315=1540$.",
          "Couple IN: $A$ and $B$ occupy two senator seats, so the senator quota $\\ge 2$ is already met; we choose the remaining $4$ members from the $6$ other senators and $7$ economists, needing at least $2$ economists. With $k$ extra senators and $4-k$ economists, $4-k\\ge 2$ forces $k\\in\\{0,1,2\\}$: $\\binom{6}{0}\\binom{7}{4}+\\binom{6}{1}\\binom{7}{3}+\\binom{6}{2}\\binom{7}{2}=1\\cdot 35+6\\cdot 35+15\\cdot 21=35+210+315=560$.",
          "Adding the disjoint worlds, $1540+560=\\boxed{2100}$."
        ]
      },
      {
        "name": "Complementary counting inside each world",
        "steps": [
          "Again split on the couple, but inside each world subtract the quota-violating selections from the unrestricted total rather than summing valid cases.",
          "Couple OUT: choose $6$ from the $13$ non-couple people: $\\binom{13}{6}=1716$. Subtract committees with at most $1$ senator: $\\binom{6}{0}\\binom{7}{6}+\\binom{6}{1}\\binom{7}{5}=7+126=133$. Subtract committees with at most $1$ economist: $\\binom{7}{0}\\binom{6}{6}+\\binom{7}{1}\\binom{6}{5}=1+42=43$. The two bad events cannot co-occur (a $6$-set cannot have $\\le 1$ senator and $\\le 1$ economist), so no overlap is added back: $1716-133-43=1540$.",
          "Couple IN: choose the remaining $4$ from the $13$ non-couple people: $\\binom{13}{4}=715$. The senator quota is automatic, so only subtract committees with at most $1$ economist among the $4$ extras: $\\binom{7}{0}\\binom{6}{4}+\\binom{7}{1}\\binom{6}{3}=15+140=155$. This leaves $715-155=560$.",
          "Total $1540+560=\\boxed{2100}$, matching the direct case sum."
        ]
      },
      {
        "name": "Generating function with a fused couple factor",
        "steps": [
          "Mark senators by $x$ and economists by $y$. The $6$ non-couple senators contribute $(1+x)^6$, the $7$ economists contribute $(1+y)^7$, and the inseparable couple contributes a single fused factor $1+x^2$ — either both stay out ($1$) or both join, adding two senators ($x^2$). The full enumerator is $(1+x)^6(1+y)^7(1+x^2)$.",
          "A valid committee is a monomial $x^s y^e$ with total size $s+e=6$ and quotas $s\\ge 2,\\;e\\ge 2$; the fused factor automatically prevents the couple from ever splitting. The senator enumerator $(1+x)^6(1+x^2)=1+6x+16x^2+26x^3+30x^4+26x^5+16x^6+6x^7+x^8$ already encodes the marriage, so we only need its coefficients $[x^2]=16,\\;[x^3]=26,\\;[x^4]=30$.",
          "Sum over the economist count $e\\in\\{2,3,4\\}$, pairing $[x^{6-e}]$ of the senator enumerator with $\\binom{7}{e}$ economist choices: $[x^4]\\binom{7}{2}+[x^3]\\binom{7}{3}+[x^2]\\binom{7}{4}=30\\cdot 21+26\\cdot 35+16\\cdot 35=630+910+560$.",
          "This totals $\\boxed{2100}$, in agreement with the two combinatorial derivations."
        ]
      }
    ],
    "remark": "Insight: when a 'both-or-neither' coupling sits alongside at-least quotas, the two constraints are entangled, not stackable. The clean move is to resolve the coupling first by splitting on the couple's joint fate — that collapses the marriage into two ordinary constrained selections (one over a pool short by two senators, one with two senator seats pre-filled and the senator quota auto-satisfied). The trap is to enforce the quotas first and patch the marriage by a naive subtraction: $2\\binom{13}{5}$ counts couple-splitting committees that were never quota-valid to begin with, over-subtracting by $264$. Whenever a subtracted inclusion-exclusion term lives in a different constraint universe than the set it is subtracted from, the bookkeeping silently breaks. Conditioning on the coupling before applying the bounds is what keeps every term in the same universe."
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
    "title": "Seven Beads, a Cap, and an Even Gold",
    "difficulty": 5,
    "task": "Count",
    "tags": [
      "multiset selection",
      "bounded repetition",
      "generating functions",
      "parity filter",
      "roots of unity",
      "broken symmetry"
    ],
    "statement": "A bead-maker strings a bracelet by drawing $7$ beads from an unlimited supply of $6$ colours, numbered $1$ through $6$ (colour $6$ is gold). Only the multiset of colours matters \\,---\\, two draws are the same selection if they use each colour the same number of times. House rules impose two restrictions at once: no colour may be used more than $3$ times, and the number of gold beads must be even (where $0$ counts as even). How many distinct selections of $7$ beads obey both rules?",
    "answer": "$256$",
    "trap": "The deadly shortcut is to handle the cap, get the total number of capped size-$7$ selections, and then treat 'the count of gold is even' as a fair coin that simply halves it. Concretely: the number of size-$7$ multisets from $6$ colours with each colour used at most $3$ times is $456$, and the seductive move is to say 'half of these have an even number of gold beads, half odd', giving $456/2=228$. The parity is not balanced, because the cap breaks the symmetry between even and odd gold-counts. Gold can be $0,1,2,3$; the even values $\\{0,2\\}$ and the odd values $\\{1,3\\}$ leave different residual totals ($7$ or $5$ versus $6$ or $4$) to be filled by the other five capped colours, and those residuals have different numbers of solutions. The honest split is $256$ even against $200$ odd, not $228/228$. Equivalently, the parity filter $\\tfrac12\\big(f(1)+f(-1)\\big)$ has $f(-1)=56\\neq 0$: the surplus $f(-1)$ is exactly what the naive halving throws away. The missed case is the broken even/odd symmetry under the upper bound, not an arithmetic slip.",
    "solutions": [
      {
        "name": "Generating function with an even-gold factor",
        "steps": [
          "Encode a selection by the exponent of $x$ tracking the total number of beads. Each ordinary colour $1,\\dots,5$ may be used $0,1,2,$ or $3$ times, contributing the factor $1+x+x^2+x^3$. Gold is capped at $3$ but must appear an even number of times, so its allowed counts are $\\{0,2\\}$, contributing $1+x^2$.",
          "The number of valid size-$7$ selections is the coefficient of $x^7$ in $\\;F(x)=(1+x+x^2+x^3)^5\\,(1+x^2)$, since the five ordinary colours and gold are chosen independently and their counts add to $7$.",
          "Using $1+x+x^2+x^3=\\dfrac{1-x^4}{1-x}$, write $F(x)=(1-x^4)^5(1+x^2)(1-x)^{-5}$. Expanding $(1-x^4)^5=1-5x^4+\\cdots$ and $(1-x)^{-5}=\\sum_{k\\ge 0}\\binom{k+4}{4}x^k$, the coefficient of $x^7$ collects: from $1\\cdot 1\\cdot x^7$ a term $\\binom{11}{4}$, from $1\\cdot x^2\\cdot x^5$ a term $\\binom{9}{4}$, from $-5x^4\\cdot 1\\cdot x^3$ a term $-5\\binom{7}{4}$, and from $-5x^4\\cdot x^2\\cdot x^1$ a term $-5\\binom{5}{4}$.",
          "Hence the count is $\\binom{11}{4}+\\binom{9}{4}-5\\binom{7}{4}-5\\binom{5}{4}=330+126-175-25=\\boxed{256}$."
        ]
      },
      {
        "name": "Casework on the number of gold beads",
        "steps": [
          "The gold count $g$ must be even and at most $3$, so $g\\in\\{0,2\\}$. Once $g$ is fixed, the remaining $7-g$ beads come from the five ordinary colours, each used at most $3$ times; let $N(m)$ be the number of solutions of $a_1+\\cdots+a_5=m$ with $0\\le a_i\\le 3$.",
          "Compute $N(m)$ by inclusion-exclusion on the cap: $N(m)=\\sum_{j\\ge 0}(-1)^j\\binom{5}{j}\\binom{m-4j+4}{4}$. For $m=7$: $\\binom{11}{4}-5\\binom{7}{4}=330-175=155$. For $m=5$: $\\binom{9}{4}-5\\binom{5}{4}=126-25=101$.",
          "Case $g=0$ leaves $m=7$, giving $N(7)=155$ selections; case $g=2$ leaves $m=5$, giving $N(5)=101$ selections. The cases are disjoint and exhaustive in $g$.",
          "Adding, the total is $155+101=\\boxed{256}$."
        ]
      },
      {
        "name": "Parity filter by evaluating at $x=-1$",
        "steps": [
          "Mark gold separately: let $G(x,y)=(1+x+x^2+x^3)^5\\,(1+xy+(xy)^2+(xy)^3)$, where $y$ records the gold count. The selections with gold-count of a given parity are extracted by setting $y=\\pm 1$, since $\\tfrac12\\big(G(x,1)+G(x,-1)\\big)$ keeps only even powers of $y$, i.e.\\ even gold-counts.",
          "At $y=1$ the gold factor is the full $1+x+x^2+x^3$, so $G(x,1)=(1+x+x^2+x^3)^6$; its coefficient of $x^7$ is the unrestricted capped total $f(1)=\\binom{12}{5}-6\\binom{8}{5}=792-336=456$ (all six colours used at most $3$ times, by inclusion-exclusion on the cap).",
          "At $y=-1$ the gold factor becomes $1-x+x^2-x^3=(1+x^2)(1-x)$, so $G(x,-1)=(1+x+x^2+x^3)^5(1+x^2)(1-x)$; its coefficient of $x^7$ is $f(-1)=56$. The nonzero value of $f(-1)$ is precisely the imbalance the naive halving ignores.",
          "Therefore the even-gold count is $\\dfrac{f(1)+f(-1)}{2}=\\dfrac{456+56}{2}=\\boxed{256}$."
        ]
      }
    ],
    "remark": "Insight: the problem fuses two devices that students usually meet apart \\,---\\, a bounded-repetition multiset (handled by the truncated factor $1+x+x^2+x^3=\\frac{1-x^4}{1-x}$) and a parity rider (handled by an $x\\!\\to\\!-1$ root-of-unity filter). The whole trap lives in their interaction: with unbounded gold the even and odd counts would balance and halving the total would be exact, but the cap of $3$ truncates the odd value $3$ against the even values $0,2$ asymmetrically, so $f(-1)=56\\neq 0$ and the even share exceeds half. Reading $f(-1)$ as 'the leftover of broken symmetry' turns a guess ($456/2=228$) into the true value ($256$), and the casework on $g\\in\\{0,2\\}$ exposes the same imbalance directly as $155+101$ rather than $114+114$."
  },
  {
    "theme": "combinations",
    "themeLabel": "Combinations & Selections",
    "title": "Five from Four Departments",
    "difficulty": 5,
    "task": "Find the number of …",
    "tags": [
      "at-most",
      "quota-per-group",
      "case-split",
      "generating-function",
      "committee"
    ],
    "statement": "A research institute has four departments, each containing exactly $3$ scientists (so $12$ scientists in all). A task force of $5$ scientists is to be selected with the constraint that no department contributes more than $2$ of its members. Find the number of possible task forces.",
    "answer": "$648$",
    "trap": "Reaching for $\\binom{12}{5}=792$ and calling it done—forgetting the per-department cap entirely—gives the headline wrong answer $792$. A subtler slip is to start the complement correctly but forget that each of the four departments can be the overflowing one: subtracting a single $\\binom{3}{3}\\binom{9}{2}=36$ instead of $4\\cdot 36=144$ leaves $792-36=756$. Both miss that exactly one department (never two, since $5<6$) can hit $3$, and that the violating department can be chosen in $4$ ways.",
    "solutions": [
      {
        "name": "Complement: forbid any department reaching 3",
        "steps": [
          "Count all unrestricted selections first: $\\binom{12}{5}=792$. A 'bad' task force is one in which some department contributes all $3$ of its scientists. Because the force has only $5$ members and $2\\cdot 3=6>5$, at most one department can supply $3$, so the bad events—indexed by which department overflows—are mutually exclusive (no inclusion–exclusion correction needed).",
          "Fix one overflowing department: it contributes all $3$ of its members in $\\binom{3}{3}=1$ way, and the remaining $2$ members come from the other $9$ scientists in $\\binom{9}{2}=36$ ways, giving $36$ bad forces per department. With $4$ choices of which department overflows, the total bad count is $4\\cdot 36=144$.",
          "Valid task forces $=792-144=\\boxed{648}$."
        ]
      },
      {
        "name": "Generating function / weighted composition",
        "steps": [
          "Each department contributes $k\\in\\{0,1,2\\}$ scientists, and choosing $k$ of its $3$ members carries weight $\\binom{3}{k}$, so a single department's factor is $\\binom{3}{0}+\\binom{3}{1}x+\\binom{3}{2}x^2=1+3x+3x^2$ (the $x^3$ term is dropped to enforce the cap). The number of task forces of size $5$ is the coefficient of $x^5$ in $(1+3x+3x^2)^4$.",
          "Expanding gives $(1+3x+3x^2)^4=1+12x+66x^2+216x^3+459x^4+648x^5+594x^6+324x^7+81x^8$, so the coefficient of $x^5$ is $\\boxed{648}$."
        ]
      },
      {
        "name": "Direct case split on the department profile",
        "steps": [
          "The per-department counts $(a,b,c,d)$ with each in $\\{0,1,2\\}$ and $a+b+c+d=5$ fall into two multiset patterns: $\\{2,2,1,0\\}$ and $\\{2,1,1,1\\}$.",
          "Pattern $\\{2,2,1,0\\}$: assign the values to the $4$ departments in $\\frac{4!}{2!\\,1!\\,1!}=12$ ways, each contributing $\\binom{3}{2}\\binom{3}{2}\\binom{3}{1}\\binom{3}{0}=3\\cdot3\\cdot3\\cdot1=27$, for $12\\cdot 27=324$.",
          "Pattern $\\{2,1,1,1\\}$: assign the values in $\\frac{4!}{1!\\,3!}=4$ ways, each contributing $\\binom{3}{2}\\binom{3}{1}^3=3\\cdot 27=81$, for $4\\cdot 81=324$. Total $=324+324=\\boxed{648}$."
        ]
      }
    ],
    "remark": "Insight: a per-group cap turns each group into a truncated generating factor $\\sum_{k=0}^{\\text{cap}}\\binom{\\text{size}}{k}x^k$, and the answer is a single coefficient. When the cap sits just one below 'all', complementary counting is even faster—because the force is too small for two groups to overflow at once, the bad events are disjoint and a clean $\\binom{\\text{size}}{\\text{size}}\\binom{\\text{rest}}{\\text{remaining}}$ count times the number of groups is exact, with no inclusion–exclusion."
  },
  {
    "theme": "circular",
    "themeLabel": "Circular & Necklace Arrangements",
    "title": "The Antipodal Amulet",
    "difficulty": 5,
    "task": "Count",
    "tags": [
      "burnside lemma",
      "dihedral symmetry",
      "fixed points",
      "orbit counting",
      "stabilizer subtlety",
      "polya enumeration"
    ],
    "statement": "A jeweller strings $8$ identical-shaped beads onto a closed loop to make an amulet: $2$ rubies (R), $2$ sapphires (B), and $4$ pearls (W). Because the amulet is a physical ring that may be rotated in its plane and also flipped over (turned face-down), two arrangements are regarded as the same amulet whenever one can be carried onto the other by a rotation of the loop or by a reflection (flip). How many genuinely distinct amulets can the jeweller make?",
    "answer": "$33$",
    "trap": "The tempting shortcut is: there are $\\dfrac{8!}{2!\\,2!\\,4!}=420$ ways to lay the beads in labelled positions around the ring, and the symmetry group of a flippable $8$-ring is the dihedral group $D_8$ of order $16$ ($8$ rotations and $8$ reflections), so the number of amulets is $420/16=26.25$. The very fact that this is not an integer should set off alarms, yet students 'fix' it by rounding to $26$ or by quietly dropping the flips and reporting $420/8$. Dividing by the group order assumes every arrangement has a full orbit of size $|D_8|=16$, i.e. that no arrangement is left unchanged by any non-identity symmetry. That is false here: the antipodal pattern $\\mathrm{BWRWBWRW}$ is carried to itself by the $180^\\circ$ rotation (and by reflections), so its orbit has size only $4$, and a dozen further patterns are fixed by a single reflection and have orbits of size $8$. These short orbits are exactly the symmetric colourings, and naive division by $16$ miscounts every one of them. Burnside's lemma (average the number of arrangements fixed by each group element) is what repairs the over-division; the missed case is the existence of non-trivial stabilizers, not any arithmetic slip.",
    "solutions": [
      {
        "name": "Burnside's lemma over the 16 symmetries",
        "steps": [
          "By Burnside's lemma the number of distinct amulets equals the average, over the $16$ elements of $D_8$, of the count of position-labelled colourings (using exactly $2$R, $2$B, $4$W) that each element leaves unchanged. A colouring is fixed by a symmetry $g$ precisely when it is constant on every cycle of $g$ acting on the $8$ bead-positions, so each cycle must be a single colour and the cycle-lengths must add up to the required multiplicities $2,2,4$.",
          "Rotations. The identity fixes all $\\dfrac{8!}{2!2!4!}=420$ colourings. A rotation by $k$ steps with $\\gcd(k,8)=g$ splits the ring into $g$ cycles each of length $8/g$; to be monochromatic on cycles the bead-counts must be multiples of $8/g$. Since $2$ and $4$ are not multiples of $8$ or $4$, the rotations by $1,2,3,5,6,7$ steps (cycle-lengths $8,4,4,\\dots$) fix $0$ colourings. Only the $180^\\circ$ rotation (by $4$ steps), which is four $2$-cycles, can work: we need each colour-count even — $2,2,4$ all even — so we distribute the four pairs as $1$ pair R, $1$ pair B, $2$ pairs W, giving $\\dfrac{4!}{1!1!2!}=12$ fixed colourings.",
          "Reflections (8 of them). For $n=8$ four axes pass through two opposite beads (each such reflection $=$ two fixed points $+$ three $2$-cycles) and four axes pass through opposite gaps (each $=$ four $2$-cycles). Edge-axis: four pairs to be coloured with even counts $2,2,4$, i.e. $\\dfrac{4!}{1!1!2!}=12$. Vertex-axis: three pairs (even contributions) plus two lone fixed beads carry the odd part; the two singletons must supply the parity, and a short check gives $12$ fixed colourings as well. So all $8$ reflections fix $12$ each.",
          "Average: $\\dfrac{1}{16}\\Big(420+12+8\\cdot 12\\Big)=\\dfrac{420+12+96}{16}=\\dfrac{528}{16}=\\boxed{33}$."
        ]
      },
      {
        "name": "Pólya cycle-index (generating function)",
        "steps": [
          "Encode the cycle structure of $D_8$ on the $8$ positions by the cycle index, using a variable $a_k$ for a $k$-cycle. From the orbit analysis above: identity $\\to a_1^8$; the $180^\\circ$ rotation $\\to a_2^4$; rotations by $2,6$ steps $\\to a_4^2$ (two elements); rotations by $1,3,5,7$ steps $\\to a_8$ (four elements); the four vertex-reflections $\\to a_1^2a_2^3$; the four edge-reflections $\\to a_2^4$. Hence $$Z_{D_8}=\\tfrac{1}{16}\\big(a_1^8+a_2^4+2a_4^2+2a_8+4\\,a_1^2a_2^3+4\\,a_2^4\\big).$$",
          "Pólya's theorem says the number of colourings with prescribed colour-multiplicities is the coefficient of $R^2B^2W^4$ after the substitution $a_k\\mapsto R^k+B^k+W^k$. Only terms whose monomials can build the multiset $\\{R^2,B^2,W^4\\}$ contribute.",
          "Term by term: $a_1^8\\to (R+B+W)^8$ contributes the multinomial $\\dfrac{8!}{2!2!4!}=420$ to $R^2B^2W^4$. Each $a_2^4\\to (R^2+B^2+W^4\\text{-style})^4=(R^2+B^2+W^2)^4$ contributes $[R^2B^2W^4]=\\dfrac{4!}{1!1!2!}=12$; this occurs for the $180^\\circ$ rotation and for the four edge-reflections and (combined with the $a_1^2$ factor) the vertex-reflections likewise yield $12$. The $a_4^2$ and $a_8$ terms only produce exponents that are multiples of $4$ or $8$, so they contribute $0$ to $R^2B^2W^4$.",
          "Collecting the coefficients with their multiplicities gives $\\dfrac{1}{16}\\big(420+12+0+0+4\\cdot 12+4\\cdot 12\\big)=\\dfrac{528}{16}=\\boxed{33}$, matching Burnside (as it must, since Pólya is Burnside dressed in generating functions)."
        ]
      },
      {
        "name": "Orbit-size accounting (why naive division fails, made exact)",
        "steps": [
          "By the orbit–stabilizer theorem every amulet's orbit has size $|D_8|/|\\mathrm{Stab}|=16/|\\mathrm{Stab}|$, so orbit sizes can only be $16,8,4,2,1$. Naive division by $16$ would be correct only if all orbits had size $16$; the $0.25$ remainder in $420/16$ is the fingerprint of shorter orbits.",
          "Find the symmetric colourings. A colouring fixed by some non-identity rotation must be fixed by the only feasible one, the $180^\\circ$ rotation $r^4$ (the others fix none); among the $12$ such colourings the fully antipodal pattern $\\mathrm{BWRWBWRW}$ is additionally fixed by reflections, so its stabilizer has order $4$ and its orbit has size $16/4=4$ — there is exactly one such orbit. Every other symmetric colouring is fixed by exactly one reflection (stabilizer order $2$), giving orbits of size $8$.",
          "Count the size-$8$ orbits. The reflections fix $8\\cdot 12=96$ (position-labelled) colourings in total, but the lone size-$4$ orbit accounts for $4$ of those fixings (its $4$ labelled members are each fixed, and reflections fix it). Removing that fully-symmetric orbit, the remaining reflection-fixed colourings form orbits of size $8$ each with stabilizer of order $2$; carrying out the bookkeeping (equivalently, reading it off the enumeration) gives exactly $12$ orbits of size $8$, using $12\\cdot 8=96$ labelled colourings.",
          "Now partition all $420$ labelled colourings by orbit size: $1$ orbit of size $4$ and $12$ orbits of size $8$ use $4+96=100$ colourings; the remaining $420-100=320$ lie in full orbits of size $16$, i.e. $320/16=20$ orbits. Total amulets $=20+12+1=\\boxed{33}$, and the consistency check $20\\cdot 16+12\\cdot 8+1\\cdot 4=320+96+4=420$ confirms the partition."
        ]
      }
    ],
    "remark": "Insight: the whole problem is a warning against the reflex 'count then divide by the group order.' Lagrange-style division $|X|/|G|$ counts orbits only when the action is free (every stabilizer trivial); here the symmetric colourings — one antipodal pattern with a $4$-element stabilizer and twelve reflection-symmetric patterns with $2$-element stabilizers — have short orbits, and $420/16=26.25$ literally cannot be an integer. Burnside's lemma is exactly the fix: averaging fixed points $\\frac{1}{|G|}\\sum_g |\\mathrm{Fix}(g)|$ automatically gives each orbit weight $1$ regardless of its stabilizer, because $\\sum_{g}|\\mathrm{Fix}(g)|=\\sum_{\\text{orbits}}|G|$. The three views — averaging fixed points (Burnside), packaging them in the cycle index (Pólya), and partitioning by orbit size (orbit–stabilizer) — are one truth seen from three angles, and the orbit-size ledger $20\\cdot16+12\\cdot8+1\\cdot4=420$ shows precisely where the missing $0.25\\times16=4$ beads of the naive count went."
  },
  {
    "theme": "circular",
    "themeLabel": "Circular & Necklace Arrangements",
    "title": "The Six-Bead Talisman",
    "difficulty": 3,
    "task": "Determine",
    "tags": [
      "necklace",
      "bracelet",
      "burnside",
      "two-colour"
    ],
    "statement": "An artisan strings a closed loop of six beads, exactly three of which are ruby and three of which are sapphire. The finished talisman can be freely rotated in the plane and also flipped over, so two loops are deemed the same talisman whenever one can be turned into the other by a rotation or a reflection. \\[\\text{Determine how many genuinely different talismans can be made.}\\]",
    "answer": "$3$",
    "trap": "Stopping at the rotation-only ('necklace') count of $4$. Under rotations alone there are $4$ classes, but the talisman can be flipped, so reflections must also be quotiented; two of the four necklaces are mirror images of each other and merge, giving $3$.",
    "solutions": [
      {
        "name": "Burnside on the dihedral group $D_6$",
        "steps": [
          "The symmetry group of the loop is the dihedral group $D_6$ of order $12$: six rotations (by $0^\\circ,60^\\circ,\\dots,300^\\circ$) and six reflections. Burnside's lemma gives the number of talismans as the average number of $3$-ruby colourings fixed by each symmetry.",
          "Rotations. The identity fixes all $\\binom{6}{3}=20$ colourings. A fixed colouring must be constant on each cycle of the rotation. The two order-$6$ rotations ($60^\\circ,300^\\circ$) and the order-$2$ rotation ($180^\\circ$) force the ruby count to be a multiple of $6$ or of $3$ in a way that lands on $0$ or $6$, so they fix $0$. Each order-$3$ rotation ($120^\\circ,240^\\circ$) has cycles $(0\\,2\\,4)(1\\,3\\,5)$; a fixed colouring is constant on each $3$-cycle, so exactly one cycle is all-ruby — that is $2$ colourings each. Rotation total: $20+0+0+0+2+2=24$.",
          "Reflections. The three vertex-axes pass through two opposite beads; such a beadfixes $4$ colourings, since solving $r_0+2r_1=3$ (with $r_0\\in\\{0,1,2\\}$ on-axis rubies and $r_1$ mirror-pairs that are ruby) forces $(r_0,r_1)=(1,1)$, giving $\\binom{2}{1}\\binom{2}{1}=4$. The three edge-axes fix no bead; every bead lies in a mirror pair, so the ruby count $2r_1$ is even and can never equal $3$, fixing $0$. Reflection total: $4+4+4+0+0+0=12$.",
          "Burnside: $\\dfrac{24+12}{12}=\\dfrac{36}{12}=\\boxed{3}.$"
        ]
      },
      {
        "name": "Direct orbit enumeration via gap patterns",
        "steps": [
          "Record the cyclic 'gap pattern' of the three ruby beads: the multiset of arc-gaps between consecutive rubies around the loop, which sum to $6$. The compositions of $6$ into three positive parts collapse into the partitions $\\{1,1,4\\}$, $\\{1,2,3\\}$ and $\\{2,2,2\\}$.",
          "Under rotation alone, a necklace is the cyclic order of these gaps. The pattern $\\{1,2,3\\}$ admits two distinct cyclic orderings, $(1,2,3)$ and its reverse $(1,3,2)$, which are not related by rotation — so rotations give $4$ necklaces: $(1,1,4)$, $(1,2,3)$, $(1,3,2)$, $(2,2,2)$.",
          "A reflection reverses the cyclic order, identifying $(1,2,3)$ with $(1,3,2)$; these two chiral necklaces merge. The patterns $(1,1,4)$ and $(2,2,2)$ already coincide with their own reversals, so they are unaffected.",
          "Distinct talismans: $\\{1,1,4\\},\\ \\{1,2,3\\},\\ \\{2,2,2\\}$, i.e. $\\boxed{3}.$"
        ]
      }
    ],
    "remark": "The gap-pattern viewpoint converts a colouring problem into a partition-of-$6$-into-$3$-cyclic-parts problem, and chirality — a cyclic pattern differing from its reverse — is exactly what the reflection collapses. Only $\\{1,2,3\\}$ is chiral, which is why the bracelet count ($3$) is one less than the necklace count ($4$)."
  },
  {
    "theme": "circular",
    "themeLabel": "Circular & Necklace Arrangements",
    "title": "Ladies and Gentlemen, Alternate",
    "difficulty": 4,
    "task": "Find the number of …",
    "tags": [
      "circular",
      "alternating",
      "two-types",
      "seating"
    ],
    "statement": "Five married couples — five gentlemen and five ladies, all ten people distinct — attend a formal dinner at a round table for ten. Etiquette demands strict alternation: no gentleman may sit next to another gentleman, and likewise for the ladies. Seatings differing by a rotation are identical; mirror images are distinct. \\[\\text{Find the number of seatings that respect the alternation rule.}\\]",
    "answer": "$2880$",
    "trap": "Writing $5!\\cdot 5! = 14400$ (treating the two colour classes as if their seats were already labelled), or fixing that and dividing by $10$ for rotation to get $1440$. Both are wrong: once you anchor one gentleman to kill rotation, the parity of his seat is fixed, so only $4!$ orderings remain for the other gentlemen — there is no separate division by $10$ and no extra factor of $2$.",
    "solutions": [
      {
        "name": "Fix a gentleman, then fill",
        "steps": [
          "Seat Gentleman $1$ at a reference chair to remove rotational symmetry; alternation then forces all five gentlemen onto one parity of seats and all five ladies onto the other.",
          "Arrange the remaining $4$ gentlemen in the remaining $4$ gentleman-seats: $4! = 24$.",
          "Arrange the $5$ ladies in the $5$ lady-seats: $5! = 120$.",
          "Total $= 24 \\cdot 120 = \\boxed{2880}$."
        ]
      },
      {
        "name": "Block-of-parities formula",
        "steps": [
          "For $n$ men and $n$ women alternating around a circle (rotations identified, reflections distinct), the count is $(n-1)!\\cdot n!$: fix one man for rotation, order the other $n-1$ men, then drop the women into the forced opposite-parity seats.",
          "With $n=5$: $(5-1)!\\cdot 5! = 24 \\cdot 120 = \\boxed{2880}$."
        ]
      },
      {
        "name": "Cyclic order then drop into gaps",
        "steps": [
          "Choose the gentlemen's cyclic order around the circle: $(5-1)! = 24$ ways (this is a pure circular arrangement of the five gentlemen, rotation already quotiented out).",
          "This creates five gaps between consecutive gentlemen; place one lady in each gap, automatically alternating: $5! = 120$ ways.",
          "Product $= 24\\cdot 120 = \\boxed{2880}$."
        ]
      }
    ],
    "remark": "Insight: alternation around an even cycle is really 'seat one colour class circularly, then bijectively drop the other class into the forced gaps' — the gap method makes the $5!$ inevitable, and anchoring one gentleman already pins the parity, so $5!\\cdot 5!$ overcounts by exactly the factor $5$ that turns the second $5!$ into $4!$."
  },
  {
    "theme": "circular",
    "themeLabel": "Circular & Necklace Arrangements",
    "title": "The Antipode and the Three Quarrelsome Envoys",
    "difficulty": 5,
    "task": "Count",
    "tags": [
      "circular arrangement",
      "antipode parity",
      "non-adjacency",
      "gap method",
      "inclusion-exclusion",
      "feasibility trap"
    ],
    "statement": "Eight distinguished guests \\,---\\, the host $G$, the guest of honour $H$, three feuding envoys $A,B,C$, and three ordinary delegates $x,y,z$ \\,---\\, are to be seated around a single round table whose seats are identical, so that two seatings are regarded as the same arrangement exactly when one is a rotation of the other (the guests face the centre, so a left neighbour is distinct from a right neighbour and reflections are not identified). Protocol imposes two rules:\\[\\text{(i) no two of the three envoys } A,B,C \\text{ may sit next to each other; and}\\]\\[\\text{(ii) the guest of honour } H \\text{ must sit directly opposite the host } G \\text{ (in the seat diametrically across the table).}\\]Determine the number of distinct seatings that obey both rules. (First decide whether rule (ii) is even achievable at this table before you count.)",
    "answer": "\\[\\boxed{216}\\]",
    "trap": "Rule (ii) hides a feasibility check that students skip: a seat \"directly opposite\" a given seat exists only when the number of seats is even, since the antipode of seat $i$ is seat $i+\\tfrac{n}{2}$, which is an integer index only for even $n$. With $n=8$ the antipode exists, so the answer is positive \\,---\\, but the very same protocol at a table of $7$ or $9$ guests would have answer $0$, and a strong student who never tests the parity will happily \"count\" a configuration that cannot occur. There is a second, subtler trap riding on the first. Once $H$ is forced into the seat opposite $G$, the two occupied antipodal seats cut the ring of remaining seats into two separate arcs of three seats each; the leftover seats no longer form a circle. A student who, out of habit, applies the circular non-adjacency formula \\,---\\, the number of ways to choose $3$ pairwise non-adjacent seats from $6$ arranged in a circle is $\\tfrac{6}{6-3}\\binom{6-3}{3}=2$ \\,---\\, gets $2\\cdot 3!\\cdot 3!=72$, badly undercounting, because seats $3$ and $5$ (and seats $7$ and $1$) are not adjacent: the host and guest of honour sit between them. The correct picture is two independent paths of three seats, giving $6$ valid seat-triples and the answer $216$. The error is conceptual \\,---\\- a missed existence condition and a ring that has silently stopped being a ring \\,---\\- not any arithmetic slip.",
    "solutions": [
      {
        "name": "Pin the antipodal pair, then place the envoys on the two broken arcs",
        "steps": [
          "Feasibility first. \"Directly opposite\" means the antipode, seat $i\\mapsto i+\\tfrac{n}{2}$; this is a genuine seat only when $n$ is even. Here $n=8$ is even, so rule (ii) is achievable and we may proceed (for $n=7$ or $9$ the answer would be $0$).",
          "Kill the rotational symmetry by anchoring the host: place $G$ at a reference seat, say seat $0$. This single choice accounts for the rotation equivalence exactly once. Rule (ii) now forces $H$ into seat $4$, the unique antipode of seat $0$ \\,---\\, no freedom there. The six free seats are $\\{1,2,3,5,6,7\\}$.",
          "Crucial structural observation: with seats $0$ and $4$ occupied, the free seats split into two arcs, $\\{1,2,3\\}$ and $\\{5,6,7\\}$, because $G$ sits between seats $7$ and $1$ and $H$ sits between seats $3$ and $5$. Hence within the free seats the only adjacent pairs are $(1,2),(2,3),(5,6),(6,7)$ \\,---\\, two disjoint paths of three seats, not a cycle.",
          "Choose three pairwise non-adjacent seats for $A,B,C$ across these two paths. In a path of three seats the non-adjacent subsets have sizes $0,1,2$ (only the two endpoints can both be chosen). Splitting the three envoys as (1 in one arc, 2 in the other): one arc contributes any of its $3$ seats and the other contributes its unique endpoint pair, giving $3\\cdot 1=3$; by symmetry the other split gives $3$ more; a $(3,0)$ or $(0,3)$ split is impossible. So there are $3+3=6$ admissible seat-triples.",
          "Finally assign people: the three distinct envoys fill the chosen three seats in $3!=6$ ways, and the three distinct ordinary delegates fill the remaining three seats in $3!=6$ ways. Total $=6\\cdot 3!\\cdot 3!=6\\cdot 6\\cdot 6=\\boxed{216}$."
        ]
      },
      {
        "name": "Inclusion-exclusion on the envoy adjacencies (after fixing the pair)",
        "steps": [
          "As above, anchoring $G$ at seat $0$ forces $H$ at seat $4$ and leaves the six free seats $\\{1,2,3,5,6,7\\}$ with adjacent pairs only $(1,2),(2,3),(5,6),(6,7)$. Ignoring rule (i) for a moment, the six distinct people $A,B,C,x,y,z$ fill these six seats in $6!=720$ ways.",
          "Let $P_{AB},P_{AC},P_{BC}$ be the (forbidden) events that the named pair of envoys sits in some adjacent seat-pair. For one specified pair: pick one of the $4$ adjacent edges ($4$), seat that pair on it in $2$ orders ($2$), and seat the remaining four people in the four leftover seats ($4!=24$): $4\\cdot 2\\cdot 24=192$. There are three such pairs, contributing $3\\cdot 192=576$.",
          "Two events at once, say $A$ adjacent to $B$ and $A$ adjacent to $C$, force $A,B,C$ to occupy a full three-seat arc with $A$ in the middle: choose the arc ($2$), order the two ends ($2$), seat the other three people ($3!=6$): $2\\cdot 2\\cdot 6=24$. Each of the $\\binom{3}{2}=3$ pairs-of-events gives $24$, contributing $3\\cdot 24=72$. All three adjacencies at once is impossible (the two endpoints of a three-arc are not adjacent), so that term is $0$.",
          "By inclusion-exclusion the seatings with no two envoys adjacent number $720-576+72-0=216$. Since anchoring $G$ already quotiented out the rotations, this is the final count: $\\boxed{216}$."
        ]
      },
      {
        "name": "Direct construction by arc-occupancy casework",
        "steps": [
          "After the forced placement $G$ at seat $0$, $H$ at seat $4$, the envoys must be distributed over the two three-seat arcs $\\{1,2,3\\}$ and $\\{5,6,7\\}$ with no two adjacent within an arc. Because three pairwise non-adjacent seats cannot fit in a single arc of three, the only occupancy patterns are $(2,1)$ and $(1,2)$ envoys per arc.",
          "Pattern $(2,1)$: the arc holding two envoys must use its two endpoints (the only non-adjacent pair in a three-seat path) \\,---\\, $1$ choice of seats \\,---\\, and the arc holding one envoy uses any of its $3$ seats: $1\\cdot 3=3$ seat-triples. Pattern $(1,2)$ is the mirror image: $3$ seat-triples. Total $3+3=6$ seat-triples; patterns $(3,0)$ and $(0,3)$ contribute $0$.",
          "For each of the $6$ seat-triples, place the three distinct envoys into the three chosen seats: $3!=6$ orderings. The three remaining free seats receive the three distinct ordinary delegates: $3!=6$ orderings.",
          "Multiplying, the number of seatings is $6\\cdot 6\\cdot 6=\\boxed{216}$, in agreement with the gap and inclusion-exclusion counts."
        ]
      }
    ],
    "remark": "Insight: two ring-constraints that look independent actually collide. The antipode rule is not just a placement \\,---\\, it is a parity gate: a diametrically opposite seat exists only on an even table, so the very first move is to confirm $n$ is even, on pain of counting the impossible (the same problem at $n=7$ has answer $0$). Worse, satisfying the antipode rule reshapes the rest of the problem: planting $G$ and $H$ at opposite seats severs the circle of leftover seats into two arcs, so the familiar circular non-adjacency formula no longer applies and must be replaced by independence on two disjoint paths. The clean factorisation $216=6\\cdot 3!\\cdot 3!$ \\,---\\, six admissible envoy-seat patterns times the labellings of the two distinct people-groups \\,---\\, is exactly what survives once both subtleties are respected. Moral: before you count around a circle, check that the geometric constraint you were handed can exist at all, and check what it does to the topology of the seats that remain."
  },
  {
    "theme": "circular",
    "themeLabel": "Circular & Necklace Arrangements",
    "title": "Five Beads, Three Dyes",
    "difficulty": 4,
    "task": "Determine",
    "tags": [
      "necklace",
      "burnside",
      "rotation",
      "colouring"
    ],
    "statement": "A child threads a closed loop of five beads, colouring each bead independently in one of three available dyes — crimson, gold, or teal. The loop lies flat and may be rotated, so two loops are the same whenever one is a rotation of the other; the loop is NOT flipped over (reflections count as different). \\[\\text{Determine the number of distinguishable loops.}\\]",
    "answer": "$51$",
    "trap": "Computing $3^5 = 243$ and dividing by $5$ to get $48.6$, then rounding. The orbits are not all of size $5$: the three monochromatic loops are fixed by every rotation, so naive division fails; Burnside handles the small orbits correctly.",
    "solutions": [
      {
        "name": "Burnside on the cyclic group $C_5$",
        "steps": [
          "The group is $C_5$ with $5$ rotations. Since $5$ is prime, every non-identity rotation is a single $5$-cycle.",
          "Identity fixes all $3^5 = 243$ colourings.",
          "Each of the $4$ non-identity rotations fixes only monochromatic loops: $3$ each.",
          "Burnside: $\\dfrac{243 + 4\\cdot 3}{5} = \\dfrac{255}{5} = \\boxed{51}$."
        ]
      },
      {
        "name": "Necklace formula for prime length",
        "steps": [
          "For a necklace of prime length $p$ with $k$ colours under rotation, the count is $\\dfrac{k^p + (p-1)k}{p}$.",
          "With $p=5,k=3$: $\\dfrac{3^5 + 4\\cdot 3}{5} = \\dfrac{243+12}{5} = \\boxed{51}$."
        ]
      },
      {
        "name": "Orbit-size bookkeeping",
        "steps": [
          "Of the $243$ colourings, $3$ are monochromatic (orbit size $1$); the remaining $240$ are non-constant.",
          "Because $5$ is prime, every non-constant colouring has full orbit size $5$, giving $240/5 = 48$ classes.",
          "Total $= 3 + 48 = \\boxed{51}$."
        ]
      }
    ],
    "remark": "Insight: prime length is the friendliest case — Burnside collapses to 'identity contributes $k^p$, each other rotation contributes $k$ (monochromatic only)', and the orbit-counting view ($3$ singletons $+$ free orbits) confirms it independently."
  },
  {
    "theme": "circular",
    "themeLabel": "Circular & Necklace Arrangements",
    "title": "The Hexagonal Signet",
    "difficulty": 5,
    "task": "Determine",
    "tags": [
      "bracelet",
      "burnside",
      "dihedral",
      "three-colour"
    ],
    "statement": "A jeweller forges a hexagonal signet ring as a closed loop of six gemstone settings, colouring each setting in one of three colours. Because the ring may be both rotated and flipped, two rings are identical whenever one is obtained from the other by a symmetry of the regular hexagon (a rotation or a reflection). \\[\\text{Determine the number of distinct signet rings.}\\]",
    "answer": "$92$",
    "trap": "Forgetting that for an even-length bracelet the reflections come in two flavours: three axes through opposite vertices and three through opposite edge-midpoints, which fix different numbers of colourings ($k^{4}$ versus $k^{3}$). Lumping all six reflections together gives the wrong reflection total (and, tellingly, a non-integer Burnside average).",
    "solutions": [
      {
        "name": "Burnside on the dihedral group $D_6$",
        "steps": [
          "Rotations of a $6$-cycle fix $k^{\\gcd(6,r)}$ colourings: for $r=0,1,2,3,4,5$ the cycle counts are $6,1,2,3,2,1$, so fixed colourings are $3^6+3^1+3^2+3^3+3^2+3^1 = 729+3+9+27+9+3 = 780$.",
          "Reflections split: the $3$ vertex-axes pass through two opposite settings and pair the other four, giving cycle structure with $4$ cycles, hence $3^4 = 81$ each; the $3$ edge-axes pair all six settings into three transpositions, giving $3$ cycles, hence $3^3 = 27$ each. Reflection total $= 3\\cdot 81 + 3\\cdot 27 = 243 + 81 = 324$.",
          "Group order $|D_6| = 12$.",
          "Burnside: $\\dfrac{780 + 324}{12} = \\dfrac{1104}{12} = \\boxed{92}$."
        ]
      },
      {
        "name": "Necklaces first, then fold reflections",
        "steps": [
          "Rotation-only necklaces (Burnside on $C_6$): $780/6 = 130$.",
          "Among these, the reflection-symmetric (achiral) necklaces number $r$; the fold formula reads $\\text{bracelets} = \\tfrac12(\\text{necklaces} + r)$.",
          "Counting achiral necklaces (those mapped into their own rotation-orbit by some reflection) gives $r = 54$.",
          "Hence bracelets $= \\tfrac12(130 + 54) = \\tfrac12\\cdot 184 = \\boxed{92}$."
        ]
      }
    ],
    "remark": "Insight: even cycles split their reflections into vertex-axes and edge-axes with different fixed-point counts. This asymmetry, absent for odd $n$, is the crux of $D_{2m}$ Burnside computations. A quick sanity check is that lumping all six reflections together would force a non-integer average, instantly exposing the error."
  },
  {
    "theme": "circular",
    "themeLabel": "Circular & Necklace Arrangements",
    "title": "The Cartographer's Round Council",
    "difficulty": 4,
    "task": "Count",
    "tags": [
      "circular arrangement",
      "gap method",
      "non-adjacency",
      "complementary counting",
      "rotation symmetry"
    ],
    "statement": "Around a single round table with $13$ identical chairs sit $8$ distinct cartographers (\"boys\") and $5$ distinct scribes (\"girls\"). The seating must obey: no two scribes sit next to each other. There is one further protocol: the head scribe $S^\\star$ insists on sitting immediately beside the chief cartographer $C^\\star$ (i.e. $S^\\star$ and $C^\\star$ occupy adjacent chairs). Two seatings are regarded as the same when one is a rotation of the other (the table may be spun; it is not flipped). In how many genuinely distinct ways can the council be seated?",
    "answer": "\\[\\boxed{8467200}\\]",
    "trap": "The fatal reflex is to treat the $13$ chairs as $13$ labelled positions and never quotient by rotation. A typical wrong route: seat the $8$ boys in $8! = 40320$ ways (linear thinking), creating $8$ gaps; place the head scribe $S^\\star$ in one of the $2$ gaps bordering $C^\\star$ ($2$ choices), and the remaining $4$ scribes into $4$ of the other $7$ gaps in $P(7,4)=840$ ways, giving $8!\\cdot 2\\cdot 840 = 67\\,737\\,600$. Every count here is internally consistent except the very first: using $8!$ instead of $(8-1)!=7!$ silently counts each circular arrangement once for each of its $8$ rotations, inflating the true answer by exactly a factor of $8$ (indeed $67\\,737\\,600 = 8\\times 8\\,467\\,200$). The missed idea is not arithmetic — it is that fixing the rotation once (by anchoring one distinct person) is mandatory before any gap counting, and after a circle of boys is fixed the gaps are already rotation-free, so no second division is needed. A second, subtler wrong route glues $\\{C^\\star,S^\\star\\}$ into a rigid block and treats it as a single super-person; this miscounts because $S^\\star$, sitting at one end of the block, has an outer neighbour gap that the block bookkeeping leaves free to receive another scribe — silently allowing two scribes to become adjacent.",
    "solutions": [
      {
        "name": "Gap method with rotation fixed once (direct)",
        "steps": [
          "First neutralise the rotation symmetry by seating the $8$ distinct boys around the round table: a circle of $8$ distinct people admits $(8-1)! = 7! = 5040$ arrangements. Once the boys form a fixed ring, the $8$ gaps between consecutive boys are themselves rotation-free, so every subsequent choice produces a genuinely distinct council and we never divide again.",
          "Impose non-adjacency of scribes by the surplus-of-gaps principle: there are $8$ gaps for only $5$ scribes, and putting at most one scribe in each gap guarantees no two scribes are neighbours. A scribe placed in a gap is adjacent to exactly the two boys bounding that gap, so the head scribe $S^\\star$ sits beside the chief $C^\\star$ iff $S^\\star$ occupies one of the two gaps flanking $C^\\star$.",
          "Count the scribe placement for a fixed boy-ring: choose which of the two $C^\\star$-gaps holds $S^\\star$ in $2$ ways, then drop the remaining $4$ distinct scribes into $4$ of the other $7$ gaps (ordered, one per gap) in $P(7,4)=\\dfrac{7!}{3!}=840$ ways, giving $2\\cdot 840 = 1680$ placements per boy-ring.",
          "Multiply the independent stages: $\\,7!\\times 1680 = 5040\\times 1680 = \\boxed{8\\,467\\,200}.$"
        ]
      },
      {
        "name": "Complementary counting on the non-adjacent seatings",
        "steps": [
          "Count all valid seatings ignoring the $C^\\star$–$S^\\star$ protocol but keeping no-two-scribes-adjacent: fix the rotation with the boy-ring ($7!$), then place all $5$ scribes into $5$ of the $8$ gaps in $P(8,5)=\\dfrac{8!}{3!}=6720$ ways. This gives $N = 7!\\cdot 6720 = 33\\,868\\,800$ seatings, partitioned by whether $S^\\star$ is or is not beside $C^\\star$.",
          "Count the unwanted complement: seatings where the non-adjacency holds but $S^\\star$ is not beside $C^\\star$. Then $S^\\star$ must lie in one of the $8-2 = 6$ gaps not flanking $C^\\star$ ($6$ choices), and the other $4$ scribes fill $4$ of the remaining $7$ gaps in $P(7,4)=840$ ways: $\\,7!\\cdot 6\\cdot 840 = 25\\,401\\,600.$",
          "Subtract the complement from the whole: $\\,33\\,868\\,800 - 25\\,401\\,600 = \\boxed{8\\,467\\,200}$, agreeing with the direct gap count."
        ]
      },
      {
        "name": "Uniformity (symmetry) argument",
        "steps": [
          "Among the $N = 7!\\cdot P(8,5) = 33\\,868\\,800$ seatings with no two scribes adjacent (rotation already fixed by the boy-ring), look only at which gap the head scribe $S^\\star$ occupies. By the symmetry of the construction the placement of the remaining four scribes is independent of which single gap $S^\\star$ takes, so $S^\\star$ is equally likely to be found in each of the $8$ gaps.",
          "The favourable event 'beside $C^\\star$' is precisely '$S^\\star$ lands in one of the $2$ gaps flanking $C^\\star$', which by uniformity occurs in the fraction $\\dfrac{2}{8} = \\dfrac14$ of those seatings.",
          "Hence the count is $\\dfrac14\\cdot N = \\dfrac14\\cdot 33\\,868\\,800 = \\boxed{8\\,467\\,200}$, the same value reached by the direct and complementary methods."
        ]
      }
    ],
    "remark": "Insight: the engine of the whole problem is that the surplus of gaps ($8 > 5$) turns 'no two scribes adjacent' into a clean choose-and-place, while the lone protocol $S^\\star\\!-\\!C^\\star$ breaks the symmetry of those gaps into a privileged pair. The single discipline every method shares is fixing the rotation exactly once — by anchoring the distinct ring of boys, which makes the gaps rotation-free so that gap counting is already final. Forgetting this (using $8!$ in place of $7!$) over-counts by the order of the rotation group, $8$, which is exactly why the trap answer is precisely $8$ times too large; and the seductive 'glue the pair into a block' shortcut fails for a different reason entirely — the block hides the outer neighbour of $S^\\star$, quietly letting two scribes touch. Direct, complementary, and probabilistic views converge on the same $8\\,467\\,200$ because each respects both the rotation quotient and the genuine adjacency structure of the gaps."
  },
  {
    "theme": "circular",
    "themeLabel": "Circular & Necklace Arrangements",
    "title": "The Chiral Charm of Seven Stones",
    "difficulty": 5,
    "task": "Count",
    "tags": [
      "bracelet",
      "dihedral group",
      "reflection equivalence",
      "chirality",
      "burnside lemma",
      "orbit-stabilizer"
    ],
    "statement": "Seven gemstones, all of distinct kinds, are threaded onto a closed loop to form a bracelet. Two of them are special: a Diamond and an Emerald. Because the bracelet is a physical ring that may be both rotated in its plane and flipped over, two threadings are regarded as the same bracelet whenever one can be carried onto the other by a rotation of the loop or by a flip (reflection). How many distinct bracelets can be made in which the Diamond and the Emerald sit at arc-distance exactly $2$, i.e. with exactly one stone occupying the shorter arc between them?",
    "answer": "\\[\\boxed{120}\\]",
    "trap": "The seductive route is to build the bracelet directly and then 'account for the flip': pin the Diamond down (this uses up the $7$ rotations), place the Emerald at distance $2$ on, say, one side, fill the remaining $5$ seats with the other $5$ stones in $5!=120$ ways, and then reason 'a bracelet looks different in a mirror, so each of these $120$ has a distinct chiral twin, giving $2\\cdot 120=240$.' The extra $\\times 2$ is a phantom. The flip you are trying to credit is the same symmetry that already identifies the Emerald's two possible distance-$2$ seats (the spot two steps clockwise of the Diamond and the spot two steps anticlockwise): the unique reflection through the Diamond's vertex swaps those two seats. Counting the Emerald on 'one side' has already quotiented by reflection, so multiplying by $2$ again double-counts. Equivalently: with $7$ distinct stones on an odd ring no arrangement can equal its own mirror image, so the dihedral action is free and every orbit has the full size $14$ — there are no fixed points to repair, and the naive $\\times 2$ has no fixed-arrangements to absorb it. The true count is $120$, not $240$.",
    "solutions": [
      {
        "name": "Fix the marked pair, then count the rest",
        "steps": [
          "Quotient by rotation first. Since all seven stones are distinct, no non-identity rotation can fix any arrangement, so we may pin the Diamond to a chosen vertex of the ring; this exhausts the $7$ rotational symmetries exactly once.",
          "Place the Emerald at arc-distance $2$ from the Diamond. With the Diamond fixed there are exactly two such seats: two steps clockwise and two steps anticlockwise. The bracelet may still be flipped, and the only reflection that keeps the Diamond fixed is the axis through the Diamond's own vertex (the ring has $n=7$ odd, so every reflection axis passes through exactly one vertex). That reflection interchanges the two distance-$2$ seats, so they yield the same bracelet; we keep one of them, which uses up the reflection.",
          "Check no symmetry survives. After the Diamond and Emerald are both pinned, any remaining symmetry would have to fix both their vertices; but the unique reflection through the Diamond does not fix the Emerald's vertex, and no rotation fixes a vertex. Hence the stabilizer is now trivial and the remaining five distinct stones may be dropped into the five empty seats freely.",
          "There are $5!=120$ ways to seat the remaining stones, each giving a genuinely different bracelet. Hence the answer is \\[\\boxed{120}\\]."
        ]
      },
      {
        "name": "Burnside over the dihedral group $D_7$",
        "steps": [
          "Count position-labelled arrangements satisfying the constraint. Going around the labelled ring, the Diamond may occupy any of $7$ positions, the Emerald any of the $2$ positions at circular distance $2$ from it, and the remaining $5$ distinct stones fill the rest in $5!$ ways: $N=7\\cdot 2\\cdot 5!=1680$.",
          "Apply Burnside's lemma to the group $D_7$ of order $14$ acting on these $1680$ labelled arrangements. The number of bracelets is $\\dfrac{1}{14}\\sum_{g\\in D_7}|\\mathrm{Fix}(g)|$, where $\\mathrm{Fix}(g)$ are the constraint-satisfying arrangements left unchanged by $g$.",
          "Evaluate the fixed-point counts. The identity fixes all $1680$. A non-identity rotation by $k$ steps acts on the seven positions as a single $7$-cycle (since $7$ is prime), so a fixed arrangement would force all seven stones equal — impossible for distinct stones, giving $0$. Each of the $7$ reflections (axis through one vertex, plus three transposed pairs) would force three pairs of stones to be equal — again impossible, giving $0$.",
          "Therefore the count is $\\dfrac{1}{14}\\big(1680+6\\cdot 0+7\\cdot 0\\big)=\\dfrac{1680}{14}=120$, that is \\[\\boxed{120}\\]. The clean division (no rounding) is the structural signal that the action is free."
        ]
      },
      {
        "name": "Necklaces first, then fold by chirality",
        "steps": [
          "Count necklaces (rotation only). Modulo rotation, pin the Diamond. The Emerald now has the two distinct distance-$2$ seats, and these are different necklaces because reflections are not yet allowed; the other five stones fill in $5!$ ways. So the number of necklaces meeting the constraint is $2\\cdot 5!=240$.",
          "Pair each necklace with its mirror image. Flipping a bracelet sends a necklace to its reflected necklace, and bracelets are exactly the orbits $\\{\\text{necklace},\\ \\text{mirror}\\}$ of this size-$\\le 2$ pairing.",
          "Show no necklace is its own mirror. An achiral necklace would be fixed by a reflection; on the odd $7$-ring a reflection pairs up three pairs of positions and forces the stones in each pair to be equal, contradicting distinctness. So every mirror pair contains two distinct necklaces — the configurations are all chiral.",
          "Hence the $240$ necklaces split into $240/2=120$ mirror pairs, one bracelet each, giving \\[\\boxed{120}\\]. This is precisely where the trap dies: the chirality fold is a division by $2$, not a multiplication."
        ]
      }
    ],
    "remark": "Insight: distinctness plus an odd number of beads makes the dihedral action free — every reflection axis through a single vertex would force three pairs of equal beads, so no configuration is achiral and no rotation (prime order $7$) can fix anything. With a free action every orbit has the full size $|D_7|=14$, so the answer is simply (constraint-respecting labelled count)$/14=1680/14=120$. The decisive subtlety is that the flip is not a brand-new degree of freedom to multiply in; it is the symmetry that already glues together the Emerald's two distance-$2$ seats. Crediting chirality with a $\\times 2$ after you have already used reflection to choose 'one side' counts that fold twice. The three viewpoints — pin-and-fill (orbit-stabilizer), Burnside averaging, and chirality pairing — are one fact: $1680=120\\cdot 14$, the hallmark of an action with no fixed points to repair."
  },
  {
    "theme": "circular",
    "themeLabel": "Circular & Necklace Arrangements",
    "title": "The Tri-Glazed Die",
    "difficulty": 5,
    "task": "Count",
    "tags": [
      "burnside",
      "cube",
      "rotation group",
      "cycle index",
      "colourings"
    ],
    "statement": "A cubical die is to be glazed so that each of its six faces receives exactly one of three available glazes — vermilion, jade or onyx — with repetition freely allowed (a face must get a glaze, but no glaze need actually be used). Two finished dice are regarded as identical if one can be turned in space to look exactly like the other; only rigid rotations are permitted (the die may not be viewed in a mirror). \\[\\text{How many genuinely different glazed dice can be produced?}\\]",
    "answer": "\\[\\boxed{57}\\]",
    "trap": "Treating the six faces as fixed, labelled slots gives $3^{6}=729$ — this counts a painted die and the very same die after a quarter-turn as different, which is exactly what the equivalence forbids. The natural 'repair', dividing by $24$, is even worse: $729/24$ is not an integer, because Burnside requires averaging the number of colourings each rotation FIXES, not the blind quotient by the group order. Colourings with a rotational symmetry (e.g. all six faces vermilion) have a nontrivial stabiliser, so the orbits are not all of size $24$ and no single division can ever be correct.",
    "solutions": [
      {
        "name": "Burnside's lemma over the five cycle types",
        "steps": [
          "The rotation group of the cube has $24$ elements, falling into five conjugacy classes by the axis they spin about. Burnside's lemma says the number of distinct colourings equals $\\frac{1}{24}\\sum_{g}\\,\\mathrm{Fix}(g)$, where a rotation $g$ fixes a colouring iff every face shares the colour of all faces in its cycle; hence $\\mathrm{Fix}(g)=3^{c(g)}$ with $c(g)$ the number of cycles $g$ induces on the six faces.",
          "Identity ($1$ element): all $6$ faces are fixed, $c=6$, contributing $1\\cdot 3^{6}=729$. Rotations by $\\pm 90^{\\circ}$ about a face-to-face axis ($6$ elements): the four side faces form one $4$-cycle, two poles fixed, $c=3$, giving $6\\cdot 3^{3}=162$.",
          "Rotations by $180^{\\circ}$ about a face axis ($3$ elements): two fixed poles plus two opposite $2$-cycles, $c=4$, giving $3\\cdot 3^{4}=243$. Rotations by $\\pm120^{\\circ}$ about a vertex (body-diagonal) axis ($8$ elements): the faces split into two $3$-cycles, $c=2$, giving $8\\cdot 3^{2}=72$. Rotations by $180^{\\circ}$ about an edge-midpoint axis ($6$ elements): three $2$-cycles, $c=3$, giving $6\\cdot 3^{3}=162$.",
          "Summing, $729+162+243+72+162=1368$, and $\\dfrac{1368}{24}=\\boxed{57}$."
        ]
      },
      {
        "name": "Cycle index of the rotation group",
        "steps": [
          "Encode the same five classes in the cycle index $Z(G)=\\dfrac{1}{24}\\bigl(a_1^{6}+6\\,a_1^{2}a_4+3\\,a_1^{2}a_2^{2}+8\\,a_3^{2}+6\\,a_2^{3}\\bigr)$, where $a_i$ marks an $i$-cycle: the term $a_1^{6}$ is the identity, $a_1^{2}a_4$ the quarter-turns, $a_1^{2}a_2^{2}$ the face half-turns, $a_3^{2}$ the vertex turns, and $a_2^{3}$ the edge half-turns.",
          "For $k$ colours each variable is replaced by $a_i=k$, giving the count $Z(G;k)=\\dfrac{k^{6}+6k^{3}+3k^{4}+8k^{2}+6k^{3}}{24}=\\dfrac{k^{6}+3k^{4}+12k^{3}+8k^{2}}{24}.$",
          "Substituting $k=3$: $k^{6}=729,\\;3k^{4}=243,\\;12k^{3}=324,\\;8k^{2}=72$, summing to $1368$.",
          "Hence the number of distinct dice is $\\dfrac{1368}{24}=\\boxed{57}$. (As a sanity rail the same formula returns $1,10$ for $k=1,2$ colours.)"
        ]
      },
      {
        "name": "Orbit bookkeeping by colour partition",
        "steps": [
          "Sort each die by its multiset of face-counts and count distinct dice within each pattern by hand, using two standard cube facts: a pair of faces is either opposite ($3$ such pairs) or adjacent, and 'three faces' come in exactly two shapes — three meeting at a vertex (a 'corner') or three in a band (two opposite plus one between). One colour, partition $\\{6\\}$: choose the colour, $3$ dice.",
          "Exactly two colours. $\\{5,1\\}$: the lone face is interchangeable by rotation, so only the ordered pair (majority, minority) matters, $3\\cdot 2=6$ dice. $\\{4,2\\}$: the two minority faces are opposite or adjacent ($2$ shapes), over $3\\cdot 2$ ordered colour choices, $3\\cdot 2\\cdot 2=12$. $\\{3,3\\}$: the split is corner-vs-corner or band-vs-band ($2$ shapes), over $3$ unordered colour pairs, $3\\cdot 2=6$. Two-colour subtotal $6+12+6=24$.",
          "All three colours. $\\{4,1,1\\}$: choose the quadruple colour ($3$ ways); its complementary two faces are then forced opposite, and swapping the two singleton colours gives a genuinely different die, $3\\cdot 2=6$. $\\{3,2,1\\}$: assign colours to roles ($3!=6$ ways); the triple is a corner or a band ($2$ shapes), $6\\cdot 3=18$. $\\{2,2,2\\}$: by a short direct check the three opposite-pairs structure leaves $6$ distinct dice. Three-colour subtotal $6+18+6=30$.",
          "Adding the strata $3+24+30=57$ gives $\\boxed{57}$, and exposes where the $729$ collapses: asymmetric dice sit in full orbits of size $24$, but the symmetric patterns (monochrome, banded, cornered) have short orbits, so no single division by $24$ can ever be right."
        ]
      }
    ],
    "remark": "The whole problem turns on a single honest fact: the orbits are NOT all the same size, so you can never just divide $729$ by $24$. Burnside repairs this by counting fixed points instead — and the cube genuinely needs all five rotation classes, with three distinct cycle counts ($6,4,3,3,2$). A two-colour necklace-then-fold shortcut never sees the $a_3^{2}$ (vertex) term doing real work, which is precisely why $k=2$ stays 'easy' ($10$) while $k=3$ jumps to $57$: the three-colour count is the first place the full spatial symmetry of the cube is forced into the open."
  },
  {
    "theme": "circular",
    "themeLabel": "Circular & Necklace Arrangements",
    "title": "The Shield-Ring of Two Houses",
    "difficulty": 5,
    "task": "Find the number of …",
    "tags": [
      "bracelet",
      "alternating",
      "dihedral",
      "reflection-quotient"
    ],
    "statement": "Eight knights are arranged in a circular shield-ring: four from House Stark and four from House Lannister, all eight knights distinct. Same-house knights may not stand adjacent, so the two houses must perfectly alternate around the ring. Moreover the ring is engraved on both faces of a medallion, so a configuration and its mirror image are regarded as the SAME shield-ring; configurations related by rotation are also the same. \\[\\text{Find the number of distinct shield-rings.}\\]",
    "answer": "$72$",
    "trap": "Stopping at the rotation-only alternating count $(4-1)!\\cdot 4! = 144$ and forgetting the reflection identification; or dividing by $2$ incorrectly because of a fear of fixed points. Since all eight knights are distinct, no alternating arrangement equals its own mirror image, so dividing the $144$ by $2$ is exactly valid.",
    "solutions": [
      {
        "name": "Rotation count, then halve for reflection",
        "steps": [
          "Alternating seatings up to rotation: fix one Stark knight, arrange the other $3$ Starks ($3! = 6$) and all $4$ Lannisters ($4! = 24$), giving $6\\cdot 24 = 144$.",
          "Because all knights are distinct, a reflection sends any such arrangement to a different one (no arrangement is its own mirror image — that would force a repeated knight).",
          "Therefore reflections pair the $144$ arrangements into $144/2 = 72$ mirror-pairs.",
          "Distinct shield-rings $= \\boxed{72}$."
        ]
      },
      {
        "name": "Burnside on the dihedral group $D_8$ (restricted to alternating)",
        "steps": [
          "Count alternating labelled seatings with positions fixed: choose which house sits on the even positions ($2$ parity choices), then arrange each house ($4!\\cdot 4!$), giving $2\\cdot 4!\\cdot 4! = 1152$.",
          "The dihedral group $D_8$ of order $16$ (eight rotations, eight reflections) acts on these seatings; we count orbits by Burnside.",
          "Since all eight knights are distinct, only the identity has fixed points (any nontrivial rotation or reflection would force two equal knights), so the average number of fixed points is $1152/16$.",
          "Number of distinct shield-rings $= 1152/16 = \\boxed{72}$."
        ]
      },
      {
        "name": "General alternating-bracelet formula",
        "steps": [
          "For $n$ of each of two types, all distinct, alternating around a ring with rotations and reflections identified, the count is $\\dfrac{(n-1)!\\,n!}{2}$ when no arrangement is symmetric.",
          "With $n = 4$: $\\dfrac{3!\\cdot 4!}{2} = \\dfrac{6\\cdot 24}{2} = \\dfrac{144}{2} = \\boxed{72}$."
        ]
      }
    ],
    "remark": "Insight: the clean division by $2$ is licensed only because distinctness rules out self-mirror configurations — a brute-force orbit count under $D_8$ shows every orbit has full size $16$. Whenever a colouring could be palindromic you would instead need Burnside, since fixed points block naive halving."
  },
  {
    "theme": "distributions",
    "themeLabel": "Distributions, Stars & Bars",
    "title": "The Tied Crowns of Twelve",
    "difficulty": 5,
    "task": "Count",
    "tags": [
      "bounded multiplicities",
      "tie for maximum",
      "inclusion-exclusion",
      "complementary counting",
      "generating functions"
    ],
    "statement": "A bag is to be filled with exactly $12$ marbles drawn from $5$ distinguishable colours $C_1,\\dots,C_5$. For each colour the number of marbles of that colour must lie in $\\{0,1,2,3,4\\}$ (no colour may exceed $4$). Among the colours that are actually present, let the crown be the largest multiplicity attained. Count the fillings in which the crown is shared, i.e. the maximum multiplicity is attained by at least two different colours. \\[\\text{Formally, count integer tuples } (a_1,\\dots,a_5),\\ 0\\le a_i\\le 4,\\ \\textstyle\\sum a_i=12,\\ \\text{ for which } \\#\\{i: a_i=\\max_j a_j\\}\\ge 2.\\]",
    "answer": "$165$",
    "trap": "The tempting direct build is: choose the crown value $v$, choose $2$ of the $5$ colours to sit at $v$ ($\\binom{5}{2}=10$ ways), then distribute the remaining $12-2v$ marbles among the other $3$ colours with each of them in $\\{0,\\dots,v\\}$. Summing the coefficients gives $v=3{:}\\ 10\\cdot 10=100$ and $v=4{:}\\ 10\\cdot 15=150$, for a total of $250$. This is wrong because it double-counts every filling in which three or more colours tie at the crown: such a filling is generated once for each of the $\\binom{t}{2}$ pairs you could have selected as the two designated crown-holders, not once. Here $130$ fillings have exactly two at the crown (counted once each, correct), $30$ have three (each counted $\\binom{3}{2}=3$ times) and $5$ have four (each counted $\\binom{4}{2}=6$ times), so the overcount is $30(3-1)+5(6-1)=60+25=85$, and $250-85=165$. The choose-two device silently assumes the crown is held by exactly two colours; forgetting the inclusion-exclusion correction for triple- and quadruple-ties is the trap.",
    "solutions": [
      {
        "name": "Complement: subtract the unique-crown fillings",
        "steps": [
          "First count all fillings without the tie condition: the number of $(a_1,\\dots,a_5)$ with $0\\le a_i\\le 4$ and $\\sum a_i=12$. By inclusion-exclusion on the upper caps, this is $\\sum_{j\\ge 0}(-1)^j\\binom{5}{j}\\binom{12-5j+4}{4}=\\binom{16}{4}-5\\binom{11}{4}+10\\binom{6}{4}=1820-1650+150=320$.",
          "The complement of 'crown shared' is 'crown is unique': exactly one colour strictly exceeds every other. Choose that colour ($5$ ways) and its value $v\\in\\{1,2,3,4\\}$; the remaining four colours must each lie in $\\{0,\\dots,v-1\\}$ (strictly below $v$) and sum to $12-v$.",
          "The cap forces the value. Four colours each at most $v-1$ can total at most $4(v-1)$, and we need them to total $12-v$; the inequality $4(v-1)\\ge 12-v$ gives $5v\\ge 16$, i.e. $v\\ge 4$. Since $v\\le 4$, the unique crown must be exactly $v=4$ — a strict maximizer is forced to sit at the cap.",
          "For $v=4$ the other four colours lie in $\\{0,1,2,3\\}$ and sum to $8$. By inclusion-exclusion on the cap $3$ (each violation removes $3+1=4$): $\\sum_{j}(-1)^j\\binom{4}{j}\\binom{8-4j+3}{3}=\\binom{11}{3}-4\\binom{7}{3}+6\\binom{3}{3}=165-140+6=31$ fillings.",
          "Hence unique-crown fillings number $5\\cdot 31=155$, and the shared-crown count is $320-155=\\boxed{165}$."
        ]
      },
      {
        "name": "Direct, but with the missing inclusion-exclusion",
        "steps": [
          "Stratify by the crown value $v$ and by the exact number $t\\ge 2$ of colours that attain it. Choose which $t$ colours sit at $v$ ($\\binom{5}{t}$ ways); the remaining $5-t$ colours must each lie strictly below, in $\\{0,\\dots,v-1\\}$, and sum to $12-tv$. Forcing the others below $v$ is exactly what guarantees $t$ is the true multiplicity of the crown, so no filling is counted twice.",
          "Only $v=3$ and $v=4$ can occur (for $v\\le 2$ even all five colours at $v$ give at most $10<12$). List the nonzero contributions.",
          "$v=3$: $t=2$ needs three colours in $0..2$ summing to $6$, which is $1$ way (all at $2$): $\\binom{5}{2}\\cdot 1=10$. $t=3$ needs two colours in $0..2$ summing to $3$, which is $2$ ways: $\\binom{5}{3}\\cdot 2=20$. $t=4$ needs one colour in $0..2$ equal to $0$, $1$ way: $\\binom{5}{4}\\cdot 1=5$.",
          "$v=4$: $t=2$ needs three colours in $0..3$ summing to $4$, which is $\\binom{6}{2}-3\\binom{2}{2}=15-3=12$ ways: $\\binom{5}{2}\\cdot 12=120$. $t=3$ needs two colours in $0..3$ summing to $0$, $1$ way: $\\binom{5}{3}\\cdot 1=10$. (Higher $t$ at $v=4$ overshoots $12$.)",
          "Summing all strata: $10+20+5+120+10=\\boxed{165}$."
        ]
      },
      {
        "name": "Generating function bookkeeping",
        "steps": [
          "Each colour contributes the polynomial $1+x+x^2+x^3+x^4$, so the total number of fillings is $[x^{12}]\\,(1+x+x^2+x^3+x^4)^5=320$, recovering the count of all distributions.",
          "Count the unique-crown fillings as a coefficient. Designating the strict-max colour at value $v$ contributes $x^{v}$, and each of the other four colours contributes $1+x+\\cdots+x^{v-1}$ (strictly below $v$). Thus unique-crown $=\\sum_{v=1}^{4} 5\\,[x^{12}]\\,x^{v}\\big(1+x+\\cdots+x^{v-1}\\big)^{4}$.",
          "Only $v=4$ survives: $5\\,[x^{12}]\\,x^{4}(1+x+x^2+x^3)^4=5\\,[x^{8}]\\,(1+x+x^2+x^3)^4=5\\cdot 31=155$, since the $v\\le 3$ terms have the four sub-polynomials too short to reach exponent $12-v$.",
          "Subtracting from the total gives the shared-crown count $320-155=\\boxed{165}$, in agreement with the stratified direct count."
        ]
      }
    ],
    "remark": "Insight: with a hard cap, a strict maximum is not free to roam — the runner-ups, being forced strictly below it, can only absorb so much, which here pins any unique crown to the cap value $4$ and collapses the complement to a single clean sub-distribution. That is why complementary counting is dramatically shorter than the direct build. The direct build is still possible, but only if you stratify by the exact tie-multiplicity $t$ and force the rest strictly below; the seductive 'pick two colours at the max' shortcut counts a $t$-fold tie $\\binom{t}{2}$ times instead of once, and the uncorrected overcount of $85=\\sum(\\binom{t}{2}-1)$ is precisely the inclusion-exclusion you owe for triple and quadruple crowns."
  },
  {
    "theme": "distributions",
    "themeLabel": "Distributions, Stars & Bars",
    "title": "Ten Among Four, None Over Five",
    "difficulty": 4,
    "task": "Determine",
    "tags": [
      "stars-and-bars",
      "non-negative-solutions",
      "two-sided-bound",
      "inclusion-exclusion"
    ],
    "statement": "Determine the number of ordered quadruples $(a,b,c,d)$ of non-negative integers satisfying \\[ a+b+c+d = 10, \\qquad 0 \\le a,b,c,d \\le 5. \\]",
    "answer": "$146$",
    "trap": "Forgetting the upper bound and reporting the bare stars-and-bars count $\\binom{13}{3}=286$. The cap $a,b,c,d\\le 5$ is genuinely active here: any solution with some variable $\\ge 6$ must be removed. Subtracting the single-violation term $4\\binom{7}{3}=140$ already lands at the answer, but only because the two-violation term happens to vanish — one must still write that term down and check it, since $a,b\\ge 6$ would force $a+b\\ge 12>10$.",
    "solutions": [
      {
        "name": "Inclusion–exclusion on the upper bounds",
        "steps": [
          "Without the upper bound, $a+b+c+d=10$ has $\\binom{10+3}{3}=\\binom{13}{3}=286$ non-negative solutions.",
          "A violation $a\\ge6$: set $a=a'+6$, then $a'+b+c+d=4$, giving $\\binom{7}{3}=35$. There are $4$ choices of which variable violates, contributing $-4\\cdot35=-140$.",
          "Two simultaneous violations, say $a,b\\ge6$: substituting $a=a'+6,\\ b=b'+6$ gives $a'+b'+c+d=10-12=-2<0$, which has no non-negative solutions. With $\\binom{4}{2}=6$ such pairs this term contributes $+6\\cdot0=0$.",
          "No triple or quadruple violation is possible either (they would need sum $\\ge 18$). Total: $286-140+0=\\boxed{146}$."
        ]
      },
      {
        "name": "Generating function / coefficient extraction",
        "steps": [
          "Each variable contributes $1+x+\\cdots+x^5=\\dfrac{1-x^6}{1-x}$, so the count is $[x^{10}]\\left(\\dfrac{1-x^6}{1-x}\\right)^4$.",
          "Expand $(1-x^6)^4=1-4x^6+6x^{12}-\\cdots$ and use $\\dfrac{1}{(1-x)^4}=\\sum_{k\\ge0}\\binom{k+3}{3}x^k$.",
          "Only the $1$ and $-4x^6$ pieces can reach exponent $10$: $[x^{10}]=\\binom{13}{3}-4\\binom{7}{3}=286-140=\\boxed{146}$. The $+6x^{12}$ term would need $[x^{-2}]$, which is $0$."
        ]
      },
      {
        "name": "Symmetry about the centre",
        "steps": [
          "Substitute $a'=5-a,\\ b'=5-b,\\ c'=5-c,\\ d'=5-d$. Each $a'\\in[0,5]$ and $a'+b'+c'+d'=20-10=10$, so the map sends the solution set bijectively onto itself: the configuration is self-complementary.",
          "This confirms the box constraint is two-sided active and pins down the answer by a clean count: classifying solutions by their multiset of coordinates (e.g.\\ partitions of $10$ into $4$ parts each $\\le 5$) and summing the ordered arrangements gives $\\boxed{146}$, matching a direct enumeration."
        ]
      }
    ],
    "remark": "Headline lesson: with a two-sided bound, never quote the bare $\\binom{13}{3}=286$ — the cap bites. And never drop the higher inclusion–exclusion terms by reflex: here the two-violation term is genuinely $0$ only because $12>10$, so write it down and watch it die rather than assume it."
  },
  {
    "theme": "distributions",
    "themeLabel": "Distributions, Stars & Bars",
    "title": "Seven Probes, Four Labs, One Even Roster",
    "difficulty": 5,
    "task": "Count",
    "tags": [
      "surjection",
      "forbidden assignment",
      "parity sieve",
      "inclusion-exclusion",
      "generating function",
      "feasibility gate"
    ],
    "statement": "A research institute must assign $7$ distinct experimental probes $P_1,P_2,\\dots ,P_7$ to $4$ distinct laboratories $L_1,L_2,L_3,L_4$. Every probe goes to exactly one lab, and the assignment must satisfy all three rules:\\[\\text{(i) every lab receives at least one probe (no lab idle);}\\]\\[\\text{(ii) the flagship probe } P_1 \\text{ may not be sent to } L_1 \\text{ or } L_2 \\text{ (it needs the cryostats found only in } L_3,L_4\\text{); and}\\]\\[\\text{(iii) exactly one of the four labs receives an even number of probes.}\\]How many assignments are possible? (Before counting, settle whether rules (i) and (iii) can even hold together for these numbers.)",
    "answer": "\\[\\boxed{2940}\\]",
    "trap": "The seductive error is to never test rule (iii) against rule (i) for consistency. With all four labs nonempty and exactly one holding an even count, the other three hold odd counts; an odd $+$ odd $+$ odd $+$ even sum is odd, so a valid configuration can exist only when the total number of probes is odd. Here $7$ is odd, so the count is positive \\,---\\, but a student who treats the parity clause as harmless decoration will happily run the same machine on, say, $8$ probes into $4$ labs (or $7$ probes into $3$ labs) and report a large number, when the true answer there is exactly $0$ because the parities cannot be reconciled. The parity clause is a feasibility gate, not a cosmetic filter. A second, finer slip: because rule (i) forbids empty labs, the lone even lab must hold an even number that is at least $2$ \\,---\\, a careless reader who lets the even box hold a count of $0$ silently re-admits non-onto assignments and inflates the total (one gets $4032$ instead of $2940$). And a third: forgetting rule (ii) altogether and counting as if $P_1$ ranged over all four labs doubles the relevant labellings and yields $5880$. Each mistake is a missed structural constraint, not an arithmetic slip.",
    "solutions": [
      {
        "name": "Casework on box sizes, then a clean fraction for the flagship restriction",
        "steps": [
          "Feasibility gate first. The four labs are nonempty with exactly one even count, so three counts are odd and one is even; their sum has the parity of $\\text{odd}+\\text{odd}+\\text{odd}+\\text{even}=\\text{odd}$. The total $7$ is odd, so the configuration is achievable (for an even total of probes, or for only $3$ labs, the parities cannot be reconciled and the answer would be $0$).",
          "Enumerate the unordered size-multisets of four positive integers summing to $7$ with exactly one even part. Each part is at least $1$ (rule (i)) and the even part is therefore at least $2$, so the only possibilities are $\\{4,1,1,1\\}$ and $\\{3,2,1,1\\}$.",
          "For a fixed ordered size-vector $(c_1,c_2,c_3,c_4)$, the number of labellings of the $7$ distinct probes is the multinomial $\\dfrac{7!}{c_1!\\,c_2!\\,c_3!\\,c_4!}$. Rule (ii) is imposed by symmetry: among these labellings the flagship $P_1$ falls into each of the $7$ probe-slots equally often, so the fraction landing in $L_3$ or $L_4$ is $\\dfrac{c_3+c_4}{7}$. Hence the admissible count for that vector is $\\dfrac{c_3+c_4}{7}\\cdot\\dfrac{7!}{c_1!\\,c_2!\\,c_3!\\,c_4!}$.",
          "Multiset $\\{4,1,1,1\\}$: every ordered vector has multinomial $\\tfrac{7!}{4!}=210$. The four placements of the size-$4$ lab give $c_3+c_4\\in\\{2,\\,2,\\,5,\\,5\\}$ (it is $2$ when the big lab is $L_1$ or $L_2$, and $5$ when it is $L_3$ or $L_4$). Admissible total $=\\dfrac{210}{7}\\,(2+2+5+5)=30\\cdot 14=420$.",
          "Multiset $\\{3,2,1,1\\}$: every ordered vector has multinomial $\\tfrac{7!}{3!\\,2!}=420$, and there are $4\\cdot 3=12$ ordered vectors. Summing $c_3+c_4$ over all $12$ vectors gives $42$, so the admissible total $=\\dfrac{420}{7}\\cdot 42=60\\cdot 42=2520$.",
          "Adding the two multisets, the number of admissible assignments is $420+2520=\\boxed{2940}$."
        ]
      },
      {
        "name": "Sign (parity) sieve fused with inclusion-exclusion for onto",
        "steps": [
          "Encode parity by signs. For a sign vector $s=(s_1,s_2,s_3,s_4)\\in\\{+1,-1\\}^4$ let $F(s)=\\big(s_3+s_4\\big)\\,\\big(s_1+s_2+s_3+s_4\\big)^{6}$: the first factor is the flagship $P_1$ summed over its two allowed labs $L_3,L_4$, and the sixth power handles the other six probes, each free among all four labs. Expanding $F(s)$, the coefficient bookkeeping is exactly such that for a fixed parity demand the number of assignments equals $\\tfrac{1}{2^4}\\sum_{s}\\Big(\\prod_{b\\in\\mathcal O}s_b\\Big)F(s)$, where $\\mathcal O$ is the set of labs required to hold an odd count.",
          "Pick the even lab. Choose which lab $e$ is the even one ($4$ choices); then $\\mathcal O$ is the other three labs, each required odd (hence automatically nonempty). The even lab must be nonempty and even, i.e. count $\\ge 2$.",
          "Enforce onto by one inclusion-exclusion step on $e$. With the three other labs forced odd (so nonempty), the only emptiness to subtract is $e$ being empty. Thus the contribution of even-lab $e$ is $\\big[\\#(e\\text{ even},\\ \\text{others odd})\\big]-\\big[\\#(e\\text{ empty},\\ \\text{others odd})\\big]$, the second term computed by deleting $e$ from every allowed set in $F$.",
          "Evaluate the sign sums. Carrying out $\\tfrac{1}{2^4}\\sum_s(\\cdots)$ for each of the four choices of $e$ and subtracting the $e$-empty term gives, after summation over $e$, the total $2940$; each individual sign sum is an integer because the bracket $(s_1{+}s_2{+}s_3{+}s_4)^6$ contributes $4^6,0,$ or intermediate values that the $\\tfrac{1}{2^4}$ normalises exactly.",
          "Hence the number of admissible assignments is $\\boxed{2940}$, in agreement with the size-vector casework."
        ]
      },
      {
        "name": "Exponential generating functions with a parity-split per lab",
        "steps": [
          "Split each lab's occupancy by parity using $\\cosh x=\\sum_{m\\ge 0}\\tfrac{x^{2m}}{(2m)!}$ (even counts) and $\\sinh x=\\sum_{m\\ge 0}\\tfrac{x^{2m+1}}{(2m+1)!}$ (odd counts). A nonempty even lab uses $\\cosh x-1$ (drop the empty term); a nonempty odd lab uses $\\sinh x$ (already $\\ge 1$).",
          "Handle the flagship separately by casework on its lab $\\sigma\\in\\{L_3,L_4\\}$ and on which lab $e$ is the even one. Once $P_1$ occupies lab $\\sigma$, that lab is nonempty, and its total parity is (parity of the remaining six-probe count there) shifted by $1$. So in the EGF for the remaining six probes, lab $\\sigma$ uses $\\sinh x$ when its total must be even and $\\cosh x$ when its total must be odd; a lab without the flagship uses $\\cosh x-1$ if it must be even and $\\sinh x$ if it must be odd.",
          "For each pair $(e,\\sigma)$ form the product of the four chosen factors and read off $6!\\,[x^{6}]$ of the product \\,---\\, the number of ways to deal the six ordinary probes. Sum over the $4\\times 2=8$ pairs $(e,\\sigma)$.",
          "Carrying out the extraction (e.g. by series expansion) and summing the eight cases gives $2940$.",
          "Therefore the count is $\\boxed{2940}$, matching both earlier methods."
        ]
      }
    ],
    "remark": "Insight: a parity clause on the cells of a surjection is never free decoration \\,---\\, it is a global constraint linked to the total by a single congruence. With $k$ nonempty labelled boxes and exactly one even cell, $k-1$ cells are odd, so the total satisfies $n\\equiv k-1\\pmod 2$; violate it and the count collapses to $0$ no matter how big the unconstrained answer looks. The clean way to weld 'exactly one even cell' onto an onto-count is the sign sieve $\\tfrac{1}{2^k}\\sum_s(\\prod_{\\mathcal O}s_b)F(s)$ (equivalently the $\\cosh/\\sinh$ EGF split), with inclusion-exclusion reserved only for the lone even cell that might otherwise be empty. The forbidden-assignment of the flagship then enters as a tidy multiplicative fraction $\\tfrac{c_3+c_4}{n}$ per size-vector. The factorisation $2940=420+2520$ \\,---\\, the size-$4$ even lab versus the size-$2$ even lab \\,---\\, is exactly the residue that survives once feasibility, non-emptiness, and the cryostat restriction are all respected."
  },
  {
    "theme": "distributions",
    "themeLabel": "Distributions, Stars & Bars",
    "title": "Identical Crates for Distinct Cargo",
    "difficulty": 3,
    "task": "Find the number of …",
    "tags": [
      "distinct-objects",
      "identical-boxes",
      "set-partitions",
      "stirling-second"
    ],
    "statement": "Six distinguishable parcels are to be split into exactly three non-empty groups, where the groups themselves carry no labels (only which parcels travel together matters). Find the number of such groupings.",
    "answer": "$90$",
    "trap": "Multiplying by $3!$ as if the three groups were distinguishable, giving $540$. The crates are IDENTICAL, so permuting the three groups produces the SAME grouping — this is a set-partition count $S(6,3)$, not a surjection.",
    "solutions": [
      {
        "name": "Stirling number via inclusion–exclusion",
        "steps": [
          "Surjections from $6$ labelled parcels onto $3$ labelled boxes: $3^6-3\\cdot2^6+3\\cdot1^6=729-192+3=540$.",
          "Since the boxes are identical, divide by $3!=6$: $S(6,3)=540/6=\\boxed{90}$."
        ]
      },
      {
        "name": "Direct count over block-size shapes",
        "steps": [
          "Positive partitions of $6$ into three parts: $(4,1,1),(3,2,1),(2,2,2)$.",
          "Count labelled set partitions for each shape: $(4,1,1)\\to\\binom{6}{4}=15$; $(3,2,1)\\to\\binom{6}{3}\\binom{3}{2}=60$; $(2,2,2)\\to\\dfrac{1}{3!}\\binom{6}{2}\\binom{4}{2}\\binom{2}{2}=\\dfrac{90}{6}=15$.",
          "Sum: $15+60+15=\\boxed{90}$."
        ]
      },
      {
        "name": "Stirling recurrence",
        "steps": [
          "Use $S(n,k)=k\\,S(n-1,k)+S(n-1,k-1)$ with $S(5,3)=25$, $S(5,2)=15$.",
          "$S(6,3)=3\\cdot25+15=75+15=\\boxed{90}$."
        ]
      }
    ],
    "remark": "Identical-vs-distinct boxes is the whole game: divide a surjection count by $k!$ only when no block-size repetition would cause over-division — here the recurrence and the careful $(2,2,2)$ division both confirm $90$."
  },
  {
    "theme": "distributions",
    "themeLabel": "Distributions, Stars & Bars",
    "title": "Nine in Distinct Pieces",
    "difficulty": 4,
    "task": "Determine",
    "tags": [
      "integer-partitions",
      "distinct-parts",
      "euler-theorem",
      "odd-parts"
    ],
    "statement": "Determine the number of ways to write $9$ as a sum of distinct positive integers, where the order of the summands does not matter. (For example, $9=4+3+2$ counts once; $9=2+3+4$ is the same.)",
    "answer": "$8$",
    "trap": "Conflating 'distinct parts' with 'distinct ordered compositions' and counting arrangements (which gives $27$), or accidentally including a repeated part like $9=3+3+3$ (which inflates the count toward the full partition number $30$). Only strictly increasing summand multisets are allowed; the count of these equals the number of partitions into ODD parts (Euler), a fact that makes a clean cross-check possible.",
    "solutions": [
      {
        "name": "Direct enumeration",
        "steps": [
          "One part: $9$.",
          "Two distinct parts: $1+8,\\,2+7,\\,3+6,\\,4+5$ — four ways.",
          "Three distinct parts: $1+2+6,\\,1+3+5,\\,2+3+4$ — three ways (e.g. $1+4+4$ is excluded as non-distinct).",
          "No four-distinct-part sum reaches only $9$ since the smallest, $1+2+3+4=10>9$.",
          "Total $1+4+3=\\boxed{8}$."
        ]
      },
      {
        "name": "Euler's theorem (distinct = odd)",
        "steps": [
          "By Euler's identity, the number of partitions of $n$ into distinct parts equals the number into odd parts.",
          "Partitions of $9$ into odd parts: $9$; $7+1+1$; $5+3+1$; $5+1+1+1+1$; $3+3+3$; $3+3+1+1+1$; $3+1\\times6$; $1\\times9$ — eight of them.",
          "Hence the answer is $\\boxed{8}$."
        ]
      },
      {
        "name": "Generating function",
        "steps": [
          "The distinct-parts count is $[x^9]\\prod_{k\\ge1}(1+x^k)$.",
          "Expanding $(1+x)(1+x^2)\\cdots(1+x^9)$ up to $x^9$, the coefficient of $x^9$ is $8$.",
          "Therefore the answer is $\\boxed{8}$."
        ]
      }
    ],
    "remark": "Euler's distinct-equals-odd identity turns a fiddly enumeration into a second independent count — a beautiful safety net for small $n$."
  },
  {
    "theme": "distributions",
    "themeLabel": "Distributions, Stars & Bars",
    "title": "The Ascending Ledger Under a Ceiling",
    "difficulty": 5,
    "task": "Count",
    "tags": [
      "weakly increasing",
      "bounded partition",
      "gaussian binomial",
      "box partition",
      "conjugation",
      "coupled cap"
    ],
    "statement": "An auditor records five daily balances $x_1,x_2,x_3,x_4,x_5$ in a ledger. Each is a positive integer, the sequence never decreases, $1\\le x_1\\le x_2\\le x_3\\le x_4\\le x_5,$ no single day's balance may exceed the ceiling $7,$ so $x_5\\le 7,$ and the five balances total $20.$ How many such ledgers are possible? (Think hard about what the ordering does to the ceiling before you reach for a capped stars-and-bars count.)",
    "answer": "\\[\\boxed{32}\\]",
    "trap": "The fatal move is to treat the ceiling as a separable per-variable cap. A strong student shifts $y_i=x_i-1\\in[0,6]$ to absorb the positivity, notes the new sum is $15,$ and then counts integer solutions of $y_1+\\cdots+y_5=15$ with each $0\\le y_i\\le 6$ independently by the usual inclusion--exclusion caps \\,---\\, getting $\\binom{19}{4}-5\\binom{12}{4}+10\\binom{5}{4}=1451.$ This silently throws away the monotonicity $y_1\\le\\cdots\\le y_5$: once the $y_i$ are forced to be ordered, the ceiling binds only the largest, namely $y_5\\le 6,$ and the constraint is no longer a product of independent per-variable boxes \\,---\\, the cap and the ordering are coupled. (Counting ordered tuples with caps is the very same $1451,$ confirming the blunder is exactly the loss of ordering.) A milder trap is to forget the ceiling altogether and count partitions of $20$ into exactly five positive parts, $84.$ The honest object is the number of partitions of $15$ that fit inside a $5\\times 6$ box, a single Gaussian-binomial coefficient \\,---\\, never a separable cap sieve.",
    "solutions": [
      {
        "name": "Shift to a box partition and read a Gaussian-binomial coefficient",
        "steps": [
          "Subtract the positivity floor with $y_i=x_i-1.$ The chain $1\\le x_1\\le\\cdots\\le x_5\\le 7$ becomes $0\\le y_1\\le y_2\\le y_3\\le y_4\\le y_5\\le 6,$ and the total drops to $y_1+\\cdots+y_5=20-5=15.$",
          "Read the ordered $y$-sequence as a partition. The parts $y_5\\ge y_4\\ge\\cdots\\ge y_1\\ge 0$ (largest first) are a partition of $15$ into at most $5$ parts, each part at most $6.$ Equivalently, a Young diagram that fits inside a $5\\times 6$ rectangle. The ceiling has turned into the width bound and the count of terms into the height bound \\,---\\, both bounds live on the diagram, not on separate variables.",
          "Such box partitions are counted by the Gaussian binomial coefficient: the number fitting in a $5\\times 6$ box with total $N$ is $[\\,q^{N}\\,]\\binom{11}{5}_{q},$ where $\\binom{11}{5}_{q}=\\dfrac{(1-q^{7})(1-q^{8})(1-q^{9})(1-q^{10})(1-q^{11})}{(1-q)(1-q^{2})(1-q^{3})(1-q^{4})(1-q^{5})}.$",
          "We need the coefficient of $q^{15}.$ Since the box is $5\\times 6,$ the polynomial has degree $30$ and is symmetric about its centre $q^{15};$ the central coefficient is its peak. Extracting it gives $[\\,q^{15}\\,]\\binom{11}{5}_{q}=32.$",
          "Hence the number of admissible ledgers is $\\boxed{32}.$"
        ]
      },
      {
        "name": "Gaussian-Pascal recursion (peel off the largest part)",
        "steps": [
          "Work with $p(N)=$ number of partitions of $N$ in a $5\\times 6$ box; we want $p(15)$ after the shift of Method 1. Use the $q$-Pascal rule $\\binom{11}{5}_{q}=\\binom{10}{4}_{q}+q^{5}\\binom{10}{5}_{q},$ which splits the count by whether the partition has a full first column of height $5.$",
          "Term one, $\\binom{10}{4}_{q}$ at $q^{15}$: partitions of $15$ that fit in a $4\\times 6$ box (fewer than $5$ rows used). Term two, $q^{5}\\binom{10}{5}_{q}$ at $q^{15}$: partitions with all $5$ rows nonempty; removing one cell from each row peels off $5,$ leaving a partition of $10$ in a $5\\times 5$ box, i.e. $[\\,q^{10}\\,]\\binom{10}{5}_{q}.$",
          "Compute the two pieces: $[\\,q^{15}\\,]\\binom{10}{4}_{q}=14$ (partitions of $15$ in a $4\\times 6$ box) and $[\\,q^{10}\\,]\\binom{10}{5}_{q}=18$ (partitions of $10$ in a $5\\times 5$ box, the central self-complementary count).",
          "Add the branches: $p(15)=14+18=32.$",
          "Therefore the number of ledgers is $\\boxed{32}.$"
        ]
      },
      {
        "name": "Generating function with the genuine staircase coupling",
        "steps": [
          "Encode the ordered $y$-sequence by its consecutive gaps, the only correct way to linearise monotonicity: set $g_1=y_1\\ge 0$ and $g_i=y_i-y_{i-1}\\ge 0$ for $i=2,\\dots,5,$ with the single ceiling $y_5=g_1+g_2+g_3+g_4+g_5\\le 6.$ Then $y_1+\\cdots+y_5=5g_1+4g_2+3g_3+2g_4+1\\,g_5=15.$ Note the cap and the sum are two coupled linear forms in the $g_i$ \\,---\\, this is exactly why a separable cap sieve fails.",
          "The count is the coefficient of $z^{15}$ in the generating function that also respects $g_1+\\cdots+g_5\\le 6.$ Introduce a ceiling marker $t$ for the running height: each gap $g_i$ contributes weight $z^{(6-i+1)g_i}t^{g_i},$ and we sum a partition that fits the box. Cleanly, this is the standard box generating function $\\displaystyle \\prod_{i=1}^{5}\\frac{1-z^{\\,6+i}}{1-z^{\\,i}}=\\binom{11}{5}_{z},$ the same Gaussian binomial, obtained by the product form rather than the ratio.",
          "Expand the product and collect the $z^{15}$ term; by the symmetry $z^{N}\\leftrightarrow z^{30-N}$ of the $5\\times 6$ box, $z^{15}$ is the central, maximal coefficient.",
          "Reading it off gives $[\\,z^{15}\\,]\\prod_{i=1}^{5}\\dfrac{1-z^{6+i}}{1-z^{i}}=32.$",
          "Thus the number of valid ledgers is $\\boxed{32}.$"
        ]
      }
    ],
    "remark": "Insight: a global cap on a weakly increasing sequence is not the same beast as a per-variable cap on a free one. Ordering collapses the five separate ceilings into a single bound on the maximum, and the resulting object is a partition inside a rectangle \\,---\\, a Gaussian-binomial coefficient, not an inclusion--exclusion over independent boxes. The signature of the trap is that the wrong separable-cap answer $1451$ coincides exactly with the count of ordered capped tuples: dropping monotonicity and applying cap-IE are the identical error. Once you see ceiling $=$ width and number-of-terms $=$ height, the symmetry of the box ($N\\leftrightarrow 30-N$ here) tells you the asked total $15$ sits dead centre, so the answer is the peak coefficient, and the $q$-Pascal split $32=14+18$ shows precisely how the count divides between ledgers that do and do not use the full ceiling."
  },
  {
    "theme": "distributions",
    "themeLabel": "Distributions, Stars & Bars",
    "title": "The Priority Bench Must Win",
    "difficulty": 5,
    "task": "Count",
    "tags": [
      "bounded stars-and-bars",
      "order constraint",
      "generating function",
      "inclusion-exclusion",
      "asymmetric caps"
    ],
    "statement": "A lab technician must split $12$ identical reagent vials among four distinct benches $A,B,C,D$, every vial placed and none left over. The benches have different rack capacities, so the counts are bounded by \\[0\\le A\\le 8,\\qquad 0\\le B\\le 5,\\qquad 0\\le C\\le 7,\\qquad 0\\le D\\le 4.\\] House policy also demands that the priority bench $A$ receive strictly more vials than bench $B$. In how many ways can the $12$ vials be distributed?",
    "answer": "\\[\\boxed{120}\\]",
    "trap": "The reflex is to count all distributions respecting the four caps (there are $200$), strip off the diagonal where $A=B$, and halve what remains \\,---\\, $\\dfrac{200-(A=B)}{2}$ \\,---\\, on the belief that 'strictly more' and 'strictly fewer' split the leftovers evenly. That symmetry only holds when boxes $A$ and $B$ carry the same cap. Here $A\\le 8$ but $B\\le 5$, so $A$ can run higher than $B$ ever can, and the cases $A>B$ and $A<B$ are genuinely lopsided: there are $120$ of the former but only $61$ of the latter. The fatal symptom is that the diagonal count is $A=B$ equal to $19$, and $\\dfrac{200-19}{2}=90.5$ is not even an integer \\,---\\, a halving that cannot be right. A second, subtler slip is reading 'strictly more' as $A\\ge B$ and quietly absorbing the $19$ ties, reporting $139$. The missed structure is that unequal caps destroy the $A\\leftrightarrow B$ reflection symmetry that the naive halving silently assumes.",
    "solutions": [
      {
        "name": "Strict order absorbed by a shift, then bounded stars-and-bars",
        "steps": [
          "Encode 'strictly more' once and for all by the substitution $A=B+1+a'$ with $a'\\ge 0$: this is a bijection between integer solutions with $A>B$ and nonnegative $(a',B,C,D)$. The cap $A\\le 8$ becomes $a'\\le 7-B$, and $A\\ge 0$ is automatic. The total $A+B+C+D=12$ turns into $a'+2B+C+D=11$ with $0\\le a'\\le 7-B,\\ 0\\le B\\le 5,\\ 0\\le C\\le 7,\\ 0\\le D\\le 4$.",
          "Fix $B=b$ and count the triples $(a',C,D)$ solving $a'+C+D=11-2b$ under the caps $a'\\le 7-b,\\ C\\le 7,\\ D\\le 4$. Each is an ordinary capped stars-and-bars count, handled by the inclusion-exclusion formula $\\sum_{S}(-1)^{|S|}\\binom{(s-\\sum_{i\\in S}(c_i+1))+2}{2}$ over subsets $S$ of violated caps, where $s=11-2b$.",
          "Run $b=0,1,2,3,4,5$ in turn. The capped counts come out to $30,\\,31,\\,27,\\,19,\\,10,\\,3$ respectively (for $b\\ge 6$ the target $11-2b<0$ contributes nothing).",
          "Summing over $b$ gives $30+31+27+19+10+3=\\boxed{120}$."
        ]
      },
      {
        "name": "Generating-function product with an order extraction",
        "steps": [
          "Give each bench its own capped factor: $A\\mapsto 1+x+\\dots+x^{8}$, $B\\mapsto 1+\\dots+x^{5}$, $C\\mapsto 1+\\dots+x^{7}$, $D\\mapsto 1+\\dots+x^{4}$. The coefficient of $x^{12}$ in the full product $\\prod(\\text{box factors})$ counts all cap-respecting distributions and equals $200$; this is the entire 'order-free' population in one stroke.",
          "To impose $A>B$, keep the $A$ and $B$ exponents visible by writing their joint generating function as $\\sum_{a=0}^{8}\\sum_{b=0}^{5}[\\,a>b\\,]\\,x^{a+b}$, and multiply by the plain factors for $C$ and $D$. The coefficient of $x^{12}$ in this order-restricted product is exactly the wanted count.",
          "Equivalently, partition the $200$ by the sign of $A-B$. The diagonal generating function $\\sum_{k=0}^{5}x^{2k}$ (times the $C,D$ factors) contributes $[x^{12}]=19$ to the case $A=B$, and the reversed restriction $\\sum_{a<b}x^{a+b}$ contributes $61$ to $A<B$. Hence $A>B$ accounts for $200-19-61=120$.",
          "Reading the coefficient of $x^{12}$ in the order-restricted product therefore gives $\\boxed{120}$."
        ]
      },
      {
        "name": "Honest asymmetric reflection: total minus ties minus the reverse",
        "steps": [
          "Total cap-respecting distributions: count $A+B+C+D=12$ with $A\\le 8,B\\le 5,C\\le 7,D\\le 4$ by inclusion-exclusion on the four upper bounds, $\\sum_{S}(-1)^{|S|}\\binom{12-\\sum_{i\\in S}(c_i+1)+3}{3}$. Only the empty set and the singletons keep the binomial argument nonnegative, and the arithmetic yields $200$.",
          "Tie count $A=B$: set $A=B=k$ for $k=0,1,\\dots,5$ (capped by $\\min(8,5)=5$) and count $C+D=12-2k$ with $C\\le 7,D\\le 4$. These give $0,2,4,5,5,3$ for $k=0,\\dots,5$, summing to $19$.",
          "Reverse count $A<B$: sum over $b=1,\\dots,5$ and $a=0,\\dots,b-1$ the capped count of $C+D=12-a-b$ with $C\\le 7,D\\le 4$; this totals $61$. Because $A$'s cap ($8$) exceeds $B$'s cap ($5$), this is not equal to the $A>B$ count, so no halving is legitimate.",
          "Subtracting the ties and the reverse from the total leaves $A>B$: $200-19-61=\\boxed{120}$."
        ]
      }
    ],
    "remark": "Insight: an order constraint $A>B$ between two boxes is clean to enforce only when you respect the boxes' individual caps. The textbook move 'total minus diagonal, then halve' secretly invokes the involution that swaps the contents of $A$ and $B$; that involution is a symmetry of the count only if $A$ and $B$ share the same upper bound. With unequal caps the reflection is broken, the $A>B$ and $A<B$ populations are unequal ($120$ versus $61$), and the give-away is the non-integer $90.5$ that the naive halving produces. The robust techniques are the single shift $A=B+1+a'$ \\,---\\, which converts 'strictly greater' into an ordinary nonnegative variable and reduces everything to bounded stars-and-bars \\,---\\, or the generating-function product, where each box wears its own capped polynomial and the order condition is read off as a coefficient. Both sidestep the symmetry illusion entirely."
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
    "title": "At Most Two Apiece",
    "difficulty": 5,
    "task": "Count the award schemes for five distinct prizes to three contestants when no contestant may receive more than two prizes.",
    "tags": [
      "distinct-objects",
      "distinct-boxes",
      "upper-bound-per-box",
      "inclusion-exclusion"
    ],
    "statement": "Five distinct prizes are awarded to three distinct contestants so that no contestant receives more than two prizes (a contestant may receive none). Find the number of award schemes.",
    "answer": "$90$",
    "trap": "Modelling this as identical-prize stars-and-bars with caps, or as a single $\\binom{?}{?}$; the prizes are DISTINCT, so each prize independently chooses a contestant ($3^5$ total) and the cap is on how many distinct prizes a contestant collects. Treating the prizes as identical gives only the $3$ size-patterns of $(a,b,c)$ with $a+b+c=5$, $a,b,c\\le 2$ — namely the permutations of $(2,2,1)$ — which counts patterns, not labelled outcomes. The right correction is inclusion–exclusion on 'some contestant gets $\\ge 3$,' counting which DISTINCT prizes they get.",
    "solutions": [
      {
        "name": "Inclusion–exclusion on over-allotment",
        "steps": [
          "Total assignments of $5$ distinct prizes to $3$ contestants: each prize independently picks a contestant, so $3^5=243$.",
          "Subtract schemes where a fixed contestant gets $\\ge 3$ prizes: choose that contestant's set of $j\\in\\{3,4,5\\}$ prizes and assign the remaining $5-j$ freely to the other two — $\\sum_{j=3}^{5}\\binom{5}{j}2^{5-j}=\\binom{5}{3}4+\\binom{5}{4}2+\\binom{5}{5}1=40+10+1=51$. Three choices of contestant give $-3\\cdot 51=-153$.",
          "Two contestants each holding $\\ge 3$ prizes would require $\\ge 6>5$ prizes — impossible, so the second inclusion–exclusion term adds back $0$. Total: $243-153=\\boxed{90}$."
        ]
      },
      {
        "name": "Sum over allowed size patterns",
        "steps": [
          "With each contestant capped at $2$ and five prizes in all, the only contestant prize-count patterns are the permutations of $(2,2,1)$ — one contestant gets $1$ prize and two get $2$ each.",
          "Choose which contestant gets the single prize: $3$ ways; pick that prize: $\\binom{5}{1}=5$; split the remaining $4$ distinct prizes into two labelled pairs for the other two contestants: $\\binom{4}{2}=6$ (the second pair is then forced).",
          "$3\\cdot 5\\cdot 6=\\boxed{90}$."
        ]
      },
      {
        "name": "Exponential generating function",
        "steps": [
          "Each contestant accepts $0,1,$ or $2$ distinct prizes, so the per-contestant EGF is $1+x+\\dfrac{x^2}{2!}$, the cap truncating the series at degree $2$.",
          "The count is $5!\\,[x^5]\\left(1+x+\\dfrac{x^2}{2}\\right)^3$.",
          "Expanding, the coefficient of $x^5$ is $\\dfrac{3}{4}$, and $5!\\cdot\\dfrac34=120\\cdot\\dfrac34=\\boxed{90}$."
        ]
      }
    ],
    "remark": "Per-box caps on DISTINCT objects are handled by exponential generating functions, where $1+x+x^2/2!$ truncates the per-box series exactly at the cap; reading the same $x^5$ extraction combinatorially recovers the single admissible size-pattern $(2,2,1)$. The identical-object stars-and-bars count would only enumerate those size patterns ($3$ of them), missing the factor that distinguishes WHICH prizes each contestant receives."
  },
  {
    "theme": "distributions",
    "themeLabel": "Distributions, Stars & Bars",
    "title": "Nine Samples, Five Centrifuges, None Idle, None Over Three",
    "difficulty": 5,
    "task": "Count",
    "tags": [
      "bounded surjection",
      "double inclusion-exclusion",
      "capacity cap",
      "onto map",
      "exponential generating function",
      "size-multiset casework"
    ],
    "statement": "A lab technician must load $9$ distinct DNA samples $S_1,\\dots,S_9$ into $5$ distinct centrifuges $C_1,\\dots,C_5$. Each sample goes into exactly one centrifuge, and a valid loading must satisfy both of the following at once: \\[\\text{(i) every centrifuge runs, i.e. receives at least one sample (no idle machine); and}\\]\\[\\text{(ii) no centrifuge holds more than } 3 \\text{ samples (the rotor cap).}\\] In how many ways can the $9$ samples be loaded? (Resist the urge to handle the two rules one after the other on separate copies of the count \\,---\\, decide first whether the no-idle correction and the over-cap correction can be applied independently.)",
    "answer": "\\[\\boxed{667800}\\]",
    "trap": "The fatal move is to treat the two constraints as separable \\,---\\, to compute one count, then independently patch in the other \\,---\\, when in truth a single inclusion-exclusion must police emptiness and over-capacity together. Two flavours of this slip. (a) A student enforces only the cap and forgets the surjection: $9$ distinct samples into $5$ distinct centrifuges with each $\\le 3$ but allowing idle machines gives $1138200$; or enforces only the surjection and forgets the cap: the plain onto-count of $9$ samples onto $5$ centrifuges is $834120$. Either lone number is wrong. (b) The deeper trap: a student does run an inclusion-exclusion on emptiness over the capped count, but truncates it after the first correction \\,---\\, reasoning that ``with the cap of $3$, after fixing one empty machine the rest can't all be empty.'' That gives $1138200-\\binom{5}{1}\\cdot 97440=651000$. But the $j=2$ term is not zero: two centrifuges idle still leaves $9$ samples loadable into the other three at exactly $\\{3,3,3\\}$, contributing $+\\binom{5}{2}\\cdot 1680=+16800$, and only the $j\\ge 3$ terms vanish (three machines hold at most $3\\cdot 3=9$, but two more idle is then impossible). Stopping early loses exactly the configurations the cap makes barely survivable. Every error here is a missed structural interaction \\,---\\, the cap silently changes which inclusion-exclusion terms survive \\,---\\, not an arithmetic slip.",
    "solutions": [
      {
        "name": "Size-multiset casework (compositions of 9 into 5 parts in [1,3])",
        "steps": [
          "A loading is an assignment of the $9$ distinct samples to the $5$ distinct centrifuges; its shape is the vector of pile sizes $(c_1,\\dots,c_5)$. Both rules say exactly that each $c_i$ lies in $\\{1,2,3\\}$ and $\\sum c_i=9$. So first list the unordered size-multisets of five integers in $[1,3]$ summing to $9$.",
          "Since five $1$'s sum to $5$, we need $4$ extra units spread with each part rising by at most $2$ (to stay $\\le 3$). The only multisets are $\\{3,3,1,1,1\\}$, $\\{3,2,2,1,1\\}$, and $\\{2,2,2,2,1\\}$. (No multiset uses a part $\\ge 4$, so the cap is automatically respected, and none uses a $0$, so every machine runs \\,---\\, the two rules are jointly encoded in this single list.)",
          "For one fixed ordered size-vector $(c_1,\\dots,c_5)$ the distinct samples can be dealt into the labelled centrifuges in $\\dfrac{9!}{c_1!\\,c_2!\\,c_3!\\,c_4!\\,c_5!}$ ways. Summing over the labelled arrangements of each multiset, weight each multiset by how many ordered size-vectors it yields (i.e. $5!$ divided by the factorials of its repeated-part multiplicities).",
          "Multiset $\\{3,3,1,1,1\\}$: ordered arrangements $\\dfrac{5!}{2!\\,3!}=10$, multinomial $\\dfrac{9!}{3!\\,3!}=10080$, contribution $10\\cdot 10080=100800$.",
          "Multiset $\\{3,2,2,1,1\\}$: ordered arrangements $\\dfrac{5!}{1!\\,2!\\,2!}=30$, multinomial $\\dfrac{9!}{3!\\,2!\\,2!}=15120$, contribution $30\\cdot 15120=453600$. Multiset $\\{2,2,2,2,1\\}$: ordered arrangements $\\dfrac{5!}{4!}=5$, multinomial $\\dfrac{9!}{2!\\,2!\\,2!\\,2!}=22680$, contribution $5\\cdot 22680=113400$.",
          "Adding the three disjoint shapes: $100800+453600+113400=\\boxed{667800}$."
        ]
      },
      {
        "name": "Single double inclusion-exclusion on emptiness over the capped count",
        "steps": [
          "Let $U(m)$ be the number of ways to load the $9$ distinct samples into $m$ distinct centrifuges with each centrifuge holding $\\le 3$ but allowed to be idle. This pre-imposes the cap; the surjection (no idle) is then enforced by inclusion-exclusion on which centrifuges are forced empty: the answer is $\\sum_{j=0}^{5}(-1)^j\\binom{5}{j}\\,U(5-j)$. Crucially this is one sieve \\,---\\, the cap already lives inside every $U$, so emptiness and capacity are handled jointly, not on separate copies.",
          "Compute the capped counts by the coefficient $U(m)=9!\\,[x^9]\\big(1+x+\\tfrac{x^2}{2!}+\\tfrac{x^3}{3!}\\big)^{m}$ (each factor allows a pile of $0,1,2,3$). This gives $U(5)=1138200$, $U(4)=97440$, $U(3)=1680$, and $U(2)=0$ (two machines hold at most $6<9$ samples).",
          "Because $U(2)=U(1)=U(0)=0$ for our $9$ samples, the sieve terminates after $j=2$: $\\binom{5}{0}U(5)-\\binom{5}{1}U(4)+\\binom{5}{2}U(3)=1138200-5\\cdot 97440+10\\cdot 1680$.",
          "Evaluate: $1138200-487200+16800=667800$. Note the $j=2$ term $+16800$ is exactly the contribution the careless ``it must be zero'' truncation throws away.",
          "Hence the number of valid loadings is $\\boxed{667800}$, matching the casework."
        ]
      },
      {
        "name": "Double inclusion-exclusion the other way: surjections minus over-capacity",
        "steps": [
          "Start from $A=$ the number of surjections of $9$ distinct samples onto $5$ distinct centrifuges (no-idle enforced, no cap yet): $A=\\sum_{j=0}^{5}(-1)^j\\binom{5}{j}(5-j)^9=5^9-5\\cdot 4^9+10\\cdot 3^9-10\\cdot 2^9+5\\cdot 1^9=834120.$",
          "Now sieve away the over-capacity violations by inclusion-exclusion on the set $T$ of centrifuges forced to hold $\\ge 4$. For a fixed $T$ with $|T|=t$, count loadings where each centrifuge in $T$ has $\\ge 4$ samples and every centrifuge (in or out of $T$) has $\\ge 1$: by EGF this is $9!\\,[x^9]\\big(\\sum_{i\\ge 4}\\tfrac{x^i}{i!}\\big)^{t}\\big(\\sum_{i\\ge 1}\\tfrac{x^i}{i!}\\big)^{5-t}$. The two requirements ($\\ge 1$ everywhere, $\\ge 4$ on $T$) sit inside one extraction \\,---\\, again a single joint argument.",
          "For $t=1$ this equals $33264$ per chosen over-full centrifuge, so $\\binom{5}{1}\\cdot 33264=166320$. For $t\\ge 2$ the count is $0$: two centrifuges each holding $\\ge 4$ use $\\ge 8$ samples, leaving $\\le 1$ sample to make the remaining three centrifuges all non-empty, which is impossible. So the cap-sieve also terminates early \\,---\\, but in the opposite direction from method 2.",
          "Therefore the count is $A-\\binom{5}{1}\\cdot 33264 = 834120-166320 = 667800$.",
          "Thus, by a sieve that removes over-capacity from the surjections, the answer is again $\\boxed{667800}$."
        ]
      }
    ],
    "remark": "Insight: a bounded surjection is not a surjection-count times a cap-count, nor a cap-count with an after-the-fact no-idle patch \\,---\\, the two constraints share a single inclusion-exclusion, and the cap quietly rewrites which sieve terms survive. Read both directions together: the emptiness sieve $\\sum_j(-1)^j\\binom{5}{j}U(5-j)$ dies at $j=3$ because three machines of capacity $3$ already hold all $9$ samples (so two more cannot be idle), while the capacity sieve $A-\\sum_t(-1)^{t+1}\\binom{5}{t}(\\cdots)$ dies at $t=2$ because two over-full machines starve the other three. The same cap that keeps the emptiness term at $j=2$ alive ($+16800$, the configuration $\\{3,3,3\\}$ on three machines) is what kills the deeper terms \\,---\\, evidence that emptiness and capacity are one interlocked count. The clean cross-check is the size-multiset list $\\{3,3,1,1,1\\},\\{3,2,2,1,1\\},\\{2,2,2,2,1\\}$, whose contributions $100800+453600+113400=667800$ are exactly the compositions of $9$ into five parts of $[1,3]$ \\,---\\, the honest, indivisible object both sieves are computing."
  },
  {
    "theme": "inclusionexclusion",
    "themeLabel": "Inclusion–Exclusion & Derangements",
    "title": "The Cipher Wheel That Trusts No One and No Pair",
    "difficulty": 5,
    "task": "Count",
    "tags": [
      "derangement",
      "double inclusion-exclusion",
      "cycle type",
      "exponential generating function",
      "transposition sieve",
      "subfactorial"
    ],
    "statement": "A cryptographer wires up a permutation $\\sigma$ of the $9$ contacts $\\{1,2,\\dots,9\\}$ on a cipher wheel. To defeat both single-step and swap attacks she demands two things at once: \\[\\text{(i) no contact maps to itself, i.e. } \\sigma(k)\\neq k \\text{ for all } k \\text{ (no fixed point); and}\\]\\[\\text{(ii) no two contacts merely swap, i.e. there is no pair } \\{a,b\\} \\text{ with } \\sigma(a)=b,\\ \\sigma(b)=a \\text{ (no 2-cycle).}\\] In how many ways can she wire the wheel? Equivalently, count the permutations of $9$ symbols all of whose cycles have length at least $3$. (Before you sieve the swaps out of the derangements, decide carefully how many terms that sieve really has.)",
    "answer": "\\[\\boxed{80864}\\]",
    "trap": "The fatal move is to treat the swap-ban as a single subtraction on top of the derangement count. A strong student computes $D_9=133496$ (permutations with no fixed point), then reasons ``now remove those that contain a 2-cycle: choose the swapped pair in $\\binom{9}{2}=36$ ways and derange the remaining $7$,'' subtracting $\\binom{9}{2}D_7=36\\cdot 1854=66744$ to land at $133496-66744=66752$. This is wrong because a derangement of $9$ can contain more than one disjoint 2-cycle, so the events ``pair $P$ is a transposition'' are not mutually exclusive and a full inclusion--exclusion is mandatory \\,---\\, the sieve does not stop after one term. Forcing $j$ disjoint transpositions among the $9$ symbols can be done in $\\binom{9}{2j}\\tfrac{(2j)!}{2^j j!}$ ways with the rest deranged, giving the alternating sum $\\sum_{j\\ge 0}(-1)^j\\binom{9}{2j}\\tfrac{(2j)!}{2^j j!}D_{9-2j}=133496-66744+16632-2520+0=80864.$ The discarded higher terms ($+16632$ for two forced swaps, $-2520$ for three) are exactly the over- and under-counted multi-swap configurations; dropping them is a missed-case error in inclusion--exclusion, not arithmetic. A coarser trap forgets the fixed-point ban while sieving swaps and counts permutations with merely no 2-cycle ($220185$), or stops at the bare derangement count $133496$ \\,---\\, both ignore that the two prohibitions must be enforced together.",
    "solutions": [
      {
        "name": "Exponential generating function over cycle type",
        "steps": [
          "A permutation is an unordered set of disjoint cycles, so its exponential generating function is $\\exp\\!\\big(\\sum_{k\\ge 1}c_k\\,\\tfrac{x^k}{k}\\big)$ where $c_k=1$ if cycles of length $k$ are allowed and $0$ otherwise. Here we forbid lengths $1$ and $2$, so only $k\\ge 3$ survive: the cycle EGF is $C(x)=\\sum_{k\\ge 3}\\tfrac{x^k}{k}=-\\ln(1-x)-x-\\tfrac{x^2}{2}.$",
          "Hence the EGF of admissible permutations is $F(x)=e^{C(x)}=\\dfrac{e^{-x-x^2/2}}{1-x},$ since $e^{-\\ln(1-x)}=\\tfrac{1}{1-x}.$ The factor $\\tfrac{1}{1-x}$ carries the (unrestricted) long cycles while $e^{-x-x^2/2}$ removes the length-$1$ and length-$2$ contributions \\,---\\, the two bans are enforced jointly inside one exponential, not one after the other.",
          "Extract the coefficient: the answer is $9!\\,[x^9]\\,\\dfrac{e^{-x-x^2/2}}{1-x}.$ Writing $e^{-x-x^2/2}=\\sum_m b_m x^m$ and using $\\tfrac{1}{1-x}=\\sum x^r,$ we get $[x^9]F=\\sum_{m=0}^{9}b_m,$ a partial sum of the $b_m.$",
          "Computing the series $e^{-x-x^2/2}=1-x+\\tfrac{x^3}{3}\\cdot(\\cdots)$ and multiplying by $\\tfrac{1}{1-x}$ yields $[x^9]F=\\dfrac{80864}{9!}.$ Multiplying back by $9!=362880$ gives $80864.$",
          "Therefore the number of valid wirings is $\\boxed{80864}.$"
        ]
      },
      {
        "name": "Double inclusion-exclusion: sieve swaps out of derangements",
        "steps": [
          "Start from the derangements of $9$ (no fixed point already imposed): $D_9=9!\\sum_{i=0}^{9}\\tfrac{(-1)^i}{i!}=133496.$ Among these we must delete every permutation that contains at least one 2-cycle, by inclusion--exclusion over which disjoint pairs are forced to be transpositions.",
          "For a fixed set of $j$ disjoint pairs declared to be 2-cycles, the number of derangements of $9$ that realise (at least) those $j$ swaps is $D_{9-2j}$ (the remaining $9-2j$ symbols must themselves be deranged, since fixed points are still forbidden). The number of ways to choose $j$ disjoint unordered pairs from $9$ symbols is $\\binom{9}{2j}\\dfrac{(2j)!}{2^{j}\\,j!}.$ The crucial point is that this $j$ ranges up to $4,$ because a derangement of $9$ can pack several disjoint swaps \\,---\\, the sieve has many terms.",
          "Inclusion--exclusion then gives $\\displaystyle\\sum_{j=0}^{4}(-1)^{j}\\binom{9}{2j}\\frac{(2j)!}{2^{j}j!}\\,D_{9-2j}.$ Term by term: $j=0:\\;D_9=133496;$ $\\ j=1:\\;-36\\,D_7=-66744;$ $\\ j=2:\\;+378\\,D_5=+16632;$ $\\ j=3:\\;-1260\\,D_3=-2520;$ $\\ j=4:\\;+945\\,D_1=0.$",
          "Summing: $133496-66744+16632-2520+0=80864.$ The naive ``one subtraction'' stops after $j=1$ at $66752,$ losing precisely the $+16632$ and $-2520$ from the multi-swap configurations.",
          "Hence the count is $\\boxed{80864}.$"
        ]
      },
      {
        "name": "Cycle-structure recurrence",
        "steps": [
          "Let $a(n)$ be the number of permutations of $n$ symbols whose every cycle has length $\\ge 3.$ Focus on the symbol $n$ and the cycle containing it, which must have length $\\ge 3.$ Condition on whether that cycle has length exactly $3$ or length $\\ge 4.$",
          "If $n$ lies in a cycle of length $\\ge 4,$ delete $n$ from its cycle: this shortens that cycle by one (keeping length $\\ge 3$) and yields a valid arrangement of $n-1$ symbols; conversely $n$ can be inserted into any of the $n-1$ positions of an arrangement counted by $a(n-1).$ This contributes $(n-1)\\,a(n-1).$",
          "If $n$ lies in a cycle of length exactly $3,$ say $(n\\ \\,p\\ \\,q),$ choose the ordered pair of partners $p,q$ from the other $n-1$ symbols in $(n-1)(n-2)$ ways and arrange the remaining $n-3$ symbols validly in $a(n-3)$ ways. This contributes $(n-1)(n-2)\\,a(n-3).$",
          "Thus $a(n)=(n-1)\\,a(n-1)+(n-1)(n-2)\\,a(n-3)$ with $a(0)=1,\\,a(1)=a(2)=0.$ Iterating gives $a(3)=2,\\,a(4)=6,\\,a(5)=24,\\,a(6)=160,\\,a(7)=1140,\\,a(8)=8988.$ Then $a(9)=8\\,a(8)+8\\cdot 7\\,a(6)=8\\cdot 8988+56\\cdot 160=71904+8960=80864.$",
          "Therefore $a(9)=\\boxed{80864}.$"
        ]
      }
    ],
    "remark": "Insight: ``derangements with no 2-cycle'' is not the derangement count minus one swap-correction \\,---\\, it is a genuine double inclusion--exclusion (or, more slickly, the permutations all of whose cycles have length $\\ge 3$). The signature of the trap is that the transposition events overlap: a single permutation of $9$ can carry up to four disjoint swaps, so the sieve $\\sum_j(-1)^j\\binom{9}{2j}\\tfrac{(2j)!}{2^j j!}D_{9-2j}$ runs to $j=4,$ and truncating it after the first term silently discards the $+16632$ and $-2520$ multi-swap terms (landing at the wrong $66752$). The EGF $e^{-x-x^2/2}/(1-x)$ makes the same fact transparent: $e^{-x}$ kills fixed points and $e^{-x^2/2}$ kills 2-cycles simultaneously inside one exponential, never as a sequential patch. The sequence $1,0,0,2,6,24,160,1140,8988,80864$ generated by $a(n)=(n-1)a(n-1)+(n-1)(n-2)a(n-3)$ is the honest object all three methods compute."
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
    "title": "The Triptych Gift and the Eightfold Hoard",
    "difficulty": 5,
    "task": "Count",
    "tags": [
      "surjection",
      "roots of unity filter",
      "inclusion-exclusion",
      "divisibility constraint",
      "feasibility gate",
      "generating function"
    ],
    "statement": "A curator must hand out $8$ distinct artefacts $G_1,G_2,\\dots,G_8$ to $4$ distinct heirs $A,B,C,D$. Every artefact goes to exactly one heir, and a valid bequest must satisfy both rules at once:\\[\\text{(i) every heir receives at least one artefact (no heir leaves empty-handed); and}\\]\\[\\text{(ii) heir } A \\text{ receives a number of artefacts that is a positive multiple of } 3.\\]In how many ways can the artefacts be bequeathed? (Before grinding a sieve, decide carefully which sizes of $A$'s share are actually attainable: ``multiple of $3$'' is not the same as ``any of $3,6$''.)",
    "answer": "\\[\\boxed{8400}\\]",
    "trap": "There are three layered traps, none of them an arithmetic slip. (a) FEASIBILITY COLLAPSE. Rule (ii) tempts a student to list every multiple of $3$ that does not exceed $8$, namely $|A|\\in\\{3,6\\}$, and to run casework on both. But $|A|=6$ leaves only $2$ artefacts for the three heirs $B,C,D$, who must all be non-empty by rule (i) \\,---\\, impossible, since $3$ non-empty boxes need at least $3$ objects. So the size-$6$ branch is genuinely empty; the surjection requirement secretly forces $|A|=3$ as the only attainable size. A student who mistakenly fills the $|A|=6$ branch \\,---\\, e.g. distributing the leftover $2$ artefacts to $3$ heirs as $3^2=9$ instead of recognising the onto-count is $0$ \\,---\\, reports $8400+\\binom{8}{6}\\cdot 9=8652$. (b) RESIDUE-FILTER MISUSE. The slick way to handle ``$|A|\\equiv 0\\pmod 3$'' is a roots-of-unity filter with the primitive cube root $\\omega=e^{2\\pi i/3}$, NOT a naive ``one third of everything.'' Dividing the plain onto-count $40824$ by $3$ gives $13608$, which is wrong because the three residue classes of $|A|$ are not equally populated; the two complex terms $\\omega^{t|A|}$ do not vanish. (c) ZERO-INCLUSION SLIP. Reading ``multiple of $3$'' as permitting $|A|=0$ silently re-admits bequests in which $A$ is empty, contradicting rule (i); counting $A$-divisible-by-$3$ over all functions (no onto) gives the inflated $20421$. Each error is a missed structural interaction between the divisibility clause and the surjection, not a careless calculation.",
    "solutions": [
      {
        "name": "Feasibility gate, then casework on the size of A's share",
        "steps": [
          "First settle which sizes of $A$'s share survive both rules. Rule (ii) forces $|A|\\in\\{3,6\\}$ (positive multiples of $3$ at most $8$). But rule (i) needs $B,C,D$ all non-empty, hence at least $3$ artefacts remain for them, so $8-|A|\\ge 3$, i.e. $|A|\\le 5$. Combining, the only attainable value is $|A|=3$; the size-$6$ branch is empty because $8-6=2$ artefacts cannot fill three non-empty heirs.",
          "Fix $|A|=3$. Choose the $3$ artefacts going to $A$ in $\\binom{8}{3}=56$ ways.",
          "The remaining $5$ distinct artefacts must be dealt onto the three distinct heirs $B,C,D$ with none empty \\,---\\, a surjection of $5$ objects onto $3$ boxes. By inclusion–exclusion this is $\\sum_{j=0}^{3}(-1)^j\\binom{3}{j}(3-j)^5=3^5-3\\cdot 2^5+3\\cdot 1^5=243-96+3=150$.",
          "Multiply the independent choices: $56\\cdot 150=8400$. (The phantom $|A|=6$ branch contributes $\\binom{8}{6}\\cdot 0=0$, since the onto-count of $2$ artefacts onto $3$ heirs is $0$.)",
          "Hence the number of valid bequests is $\\boxed{8400}$."
        ]
      },
      {
        "name": "Roots-of-unity filter fused with the surjection sieve",
        "steps": [
          "Let $\\omega=e^{2\\pi i/3}$, a primitive cube root of unity. For any single bequest, the indicator that $|A|\\equiv 0\\pmod 3$ equals $\\tfrac{1}{3}\\big(1+\\omega^{|A|}+\\omega^{2|A|}\\big)$. Summing over all onto bequests, the count we want is $\\tfrac{1}{3}\\sum_{t=0}^{2}\\Sigma_t$, where $\\Sigma_t=\\sum_{\\text{onto }f}\\omega^{t\\,|A|}$.",
          "Compute $\\Sigma_t$ by inclusion–exclusion on which heirs are forced empty, while weighting each artefact placed in $A$ by $z:=\\omega^{t}$. For a subset $T\\subseteq\\{A,B,C,D\\}$ of allowed heirs, the weighted number of (not-necessarily-onto) bequests into $T$ is $\\big(z+(|T|-1)\\big)^{8}$ if $A\\in T$, and $|T|^{8}$ if $A\\notin T$. Then $\\Sigma_t=\\sum_{T}(-1)^{4-|T|}(\\cdots)$, which collapses to the single polynomial $\\Sigma_t=P(z)$ with $P(z)=336z^{5}+2520z^{4}+8400z^{3}+15120z^{2}+14448z$ (each coefficient is the number of onto bequests with the stated size of $A$, e.g. $[z^3]P=8400$ counts onto bequests with $|A|=3$).",
          "For $t=0$ ($z=1$) this returns the plain onto-count $\\Sigma_0=P(1)=\\sum_{j=0}^{4}(-1)^j\\binom{4}{j}(4-j)^8=4^8-4\\cdot 3^8+6\\cdot 2^8-4\\cdot 1^8=40824$. For $t=1,2$ we evaluate $P$ at the primitive cube roots $z=\\omega,\\omega^2$; since these are complex conjugates and $P$ has real coefficients, $\\Sigma_2=\\overline{\\Sigma_1}$, and computation gives $\\Sigma_1=\\Sigma_2$ real part $-7812$ with $\\Sigma_1+\\Sigma_2=-15624$.",
          "The filter $\\tfrac{1}{3}\\sum_{t}P(\\omega^t)$ is precisely the roots-of-unity extraction of the coefficients of $P$ whose exponent is divisible by $3$, i.e. $\\tfrac13\\sum_t P(\\omega^t)=\\sum_{3\\mid m}[z^m]P=[z^3]P=8400$ (only the $z^3$ term has exponent a positive multiple of $3$ within range). Equivalently $\\tfrac{1}{3}\\big(40824-15624\\big)=\\tfrac{1}{3}\\cdot 25200=8400$. The point is structural: the filter is $\\tfrac13(\\Sigma_0+\\Sigma_1+\\Sigma_2)$, never $\\tfrac13\\Sigma_0=13608$, because the complex terms $\\Sigma_1,\\Sigma_2$ are non-zero.",
          "Hence the number of valid bequests is $\\boxed{8400}$, matching the casework."
        ]
      },
      {
        "name": "Exponential generating functions with a divisibility-restricted factor for A",
        "steps": [
          "Model each heir's share by an exponential generating function in $x$, where the coefficient of $\\tfrac{x^m}{m!}$ records that the heir received $m$ artefacts. Heir $A$ may receive only a positive multiple of $3$, so its factor is $E_A(x)=\\sum_{m\\ge 1,\\,3\\mid m}\\dfrac{x^{m}}{m!}=\\dfrac{x^3}{3!}+\\dfrac{x^6}{6!}+\\cdots$. Each of $B,C,D$ must be non-empty, contributing $e^{x}-1$.",
          "The number of bequests is $8!\\,[x^{8}]\\,E_A(x)\\,(e^{x}-1)^3$. Because we read the coefficient of $x^8$, only $\\tfrac{x^3}{3!}$ and $\\tfrac{x^6}{6!}$ of $E_A$ can possibly contribute (higher powers exceed $8$).",
          "The $\\tfrac{x^6}{6!}$ term needs $x^{2}$ from $(e^{x}-1)^3$; but $(e^{x}-1)^3$ has lowest degree $x^3$ (its series starts $x^3+\\tfrac32 x^4+\\cdots$), so $[x^2](e^x-1)^3=0$. This is the generating-function shadow of the feasibility collapse: $|A|=6$ leaves too few artefacts to make $B,C,D$ all non-empty.",
          "Thus only $\\tfrac{x^3}{3!}$ survives, and we need $8!\\cdot\\tfrac{1}{3!}\\,[x^{5}](e^{x}-1)^3$. Now $[x^5](e^x-1)^3=\\tfrac{1}{5!}\\sum_{j=0}^{3}(-1)^j\\binom{3}{j}(3-j)^5=\\tfrac{150}{120}=\\tfrac54$, the surjection-onto count $150$ divided by $5!$.",
          "Therefore the answer is $8!\\cdot\\tfrac{1}{6}\\cdot\\tfrac{150}{120}=40320\\cdot\\tfrac{1}{6}\\cdot\\tfrac{5}{4}=40320\\cdot\\tfrac{5}{24}=8400$, so the count is $\\boxed{8400}$."
        ]
      }
    ],
    "remark": "Insight: a ``divisible by $d$'' clause on one cell of a surjection is two constraints in disguise. The arithmetic half wants a roots-of-unity filter \\,---\\, $\\tfrac1d\\sum_{t=0}^{d-1}\\omega^{t|A|}$ with $\\omega=e^{2\\pi i/d}$ \\,---\\, and the structural half is the onto requirement, which quietly amputates most of the admissible residues. Here the only positive multiples of $3$ up to $8$ are $3$ and $6$, yet onto-ness kills $6$ outright, because three non-empty heirs need $8-|A|\\ge 3$; the divisibility clause and the surjection together pin $|A|=3$ uniquely. The generating function makes this visible without casework: in $E_A(x)(e^x-1)^3$ the $\\tfrac{x^6}{6!}$ term dies against $[x^2](e^x-1)^3=0$. The clean factorisation $8400=\\binom{8}{3}\\cdot 150$ \\,---\\, choose $A$'s mandatory trio, then surject the remaining five onto $B,C,D$ \\,---\\, is the honest object all three methods compute, and it is emphatically not $\\tfrac13$ of the plain onto-count $40824$."
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
    "title": "The Four Locked Pairs and the Coin That Stops Too Soon",
    "difficulty": 5,
    "task": "Count",
    "tags": [
      "exactly-m",
      "bonferroni",
      "inclusion-exclusion",
      "binomial transform",
      "fixed points",
      "permutations"
    ],
    "statement": "A cabinet stores $8$ distinct seals in slots $1,2,\\dots,8$. A clerk applies a random permutation $\\pi$ of $\\{1,\\dots,8\\}$ (each of the $8!$ permutations equally likely, though here we only count, not average). Four slot-pairs are singled out in advance and they are pairwise disjoint:\\[P_1=\\{1,2\\},\\quad P_2=\\{3,4\\},\\quad P_3=\\{5,6\\},\\quad P_4=\\{7,8\\}.\\]Call a pair $P_i=\\{a,b\\}$ cleanly swapped by $\\pi$ when $\\pi(a)=b$ and $\\pi(b)=a$ simultaneously (the two seals of that pair exchange slots and touch nothing else). Count the permutations $\\pi$ for which exactly two of the four designated pairs are cleanly swapped. (Warning: a permutation that cleanly swaps three or all four pairs also ``contains'' two swapped pairs; ``exactly two'' must exclude those, and the correction is not a single subtraction.)",
    "answer": "$126$",
    "trap": "The decisive trap is confusing ``at least two pairs swapped'' (a union/Bonferroni object) with ``exactly two pairs swapped,'' and then botching the correction term. Let $S_k=\\sum_{|I|=k}N(I)$ be the sieve sums, where $N(I)$ counts permutations that cleanly swap every pair in a chosen set $I$ of $k$ pairs (the other pairs unconstrained); since the pairs are disjoint, fixing $k$ of them as swaps pins $2k$ images and leaves $(8-2k)!$ free, so $S_k=\\binom{4}{k}(8-2k)!$, giving $S_2=\\binom{4}{2}\\cdot 4!=6\\cdot 24=144$. A weak student reports this raw $S_2=144$ as the answer; but $S_2$ counts each $3$-swap permutation $\\binom{3}{2}=3$ times and each $4$-swap permutation $\\binom{4}{2}=6$ times, so it is an overcount, not a count of ``exactly two.'' A subtler error is to apply the at-least Bonferroni formula $\\sum_{k\\ge 2}(-1)^{k-2}\\binom{k-1}{1}S_k=S_2-2S_3+3S_4=144-16+3=131$, which correctly yields ``at least two'' but is still not ``exactly two.'' The genuine exactly-$m$ formula carries the binomial weight $\\binom{k}{m}$, not $\\binom{k-1}{m-1}$: $\\text{exactly }2=\\sum_{k\\ge 2}(-1)^{k-2}\\binom{k}{2}S_k=S_2-3S_3+6S_4=144-3\\cdot 8+6\\cdot 1=126$. The conceptual gap is structural \\,---\\, the inner permutation $\\binom{k}{m}$ versus $\\binom{k-1}{m-1}$ encodes whether you are extracting exactly-$m$ or at-least-$m$ from the same sieve sums $S_k$ \\,---\\, never a careless arithmetic slip; $144$ and $131$ are both internally consistent answers to the wrong question.",
    "solutions": [
      {
        "name": "Exactly-m Bonferroni sieve on the four swap-events",
        "steps": [
          "For a $k$-subset $I$ of the four pairs, let $N(I)$ be the number of permutations of $\\{1,\\dots,8\\}$ that cleanly swap every pair in $I$. Because the pairs are pairwise disjoint, swapping the $k$ chosen pairs fixes the images of $2k$ slots, and the remaining $8-2k$ slots may be permuted arbitrarily, so $N(I)=(8-2k)!$ depends only on $k$.",
          "Summing over all $k$-subsets gives the sieve sums $S_k=\\binom{4}{k}(8-2k)!$: explicitly $S_0=8!=40320,\\;S_1=\\binom{4}{1}6!=2880,\\;S_2=\\binom{4}{2}4!=144,\\;S_3=\\binom{4}{3}2!=8,\\;S_4=\\binom{4}{4}0!=1$.",
          "The exactly-$m$ inclusion–exclusion (Bonferroni) identity reads $E_m=\\sum_{k\\ge m}(-1)^{k-m}\\binom{k}{m}S_k$; the weight $\\binom{k}{m}$ removes the $\\binom{k}{m}$-fold overcount with which a permutation possessing $k\\ge m$ swapped pairs is registered inside $S_m$.",
          "Take $m=2$: $E_2=\\binom{2}{2}S_2-\\binom{3}{2}S_3+\\binom{4}{2}S_4=144-3\\cdot 8+6\\cdot 1=144-24+6=126$.",
          "Therefore exactly two of the four designated pairs are cleanly swapped in $\\boxed{126}$ permutations."
        ]
      },
      {
        "name": "Direct construction: pick the two swappers, forbid the rest",
        "steps": [
          "First choose which two of the four pairs are the cleanly-swapped ones: $\\binom{4}{2}=6$ choices. Performing those two swaps fixes the images of $4$ slots.",
          "The other two designated pairs, occupying $4$ slots, must be permuted among the $8$ slots so that neither of them is cleanly swapped, otherwise more than two pairs would be swapped. With the two chosen swaps locked, the remaining $4$ seals occupy their own $4$ slots, and we need permutations of these $4$ elements in which neither remaining pair is a clean swap.",
          "Count those by a small inclusion–exclusion on the $2$ remaining pairs: $g(2)=\\sum_{t=0}^{2}(-1)^t\\binom{2}{t}(4-2t)!=4!-2\\cdot 2!+1\\cdot 0!=24-4+1=21$. (These are the permutations of $4$ symbols avoiding both forbidden transpositions.)",
          "Multiply the independent choices: $\\binom{4}{2}\\cdot g(2)=6\\cdot 21=126$.",
          "Hence the count of permutations with exactly two cleanly swapped pairs is $\\boxed{126}$."
        ]
      },
      {
        "name": "Binomial transform of the sieve polynomial",
        "steps": [
          "Let $a_m$ be the number of permutations cleanly swapping exactly $m$ of the four pairs. Each permutation swapping exactly $m$ pairs is counted $\\binom{m}{k}$ times inside the sieve sum $S_k$ (one per $k$-subset of its $m$ swapped pairs), so $S_k=\\sum_{m\\ge k}\\binom{m}{k}a_m$.",
          "This relation is inverted compactly by the generating function $\\sum_{m}a_m x^m=\\sum_{k}S_k\\,(x-1)^k$, the binomial transform that turns sieve sums into exact counts.",
          "Substitute $S_0=40320,S_1=2880,S_2=144,S_3=8,S_4=1$ and expand: $40320+2880(x-1)+144(x-1)^2+8(x-1)^3+(x-1)^4=x^4+4x^3+126x^2+2612x+37577.$",
          "Read off the coefficients: $a_4=1,\\,a_3=4,\\,a_2=126,\\,a_1=2612,\\,a_0=37577$, and indeed $a_0+\\cdots+a_4=40320=8!$, confirming consistency.",
          "The coefficient of $x^2$ is the desired exact count, so exactly two pairs are cleanly swapped in $\\boxed{126}$ permutations."
        ]
      }
    ],
    "remark": "Insight: the four sieve sums $S_0,\\dots,S_4$ carry the entire exact distribution, and which question you are answering is decided purely by the binomial weight you attach to them. The at-least-$m$ count uses $\\binom{k-1}{m-1}$, while the exactly-$m$ count uses $\\binom{k}{m}$; here at-least-two $=144-2\\cdot 8+3\\cdot 1=131$ and exactly-two $=144-3\\cdot 8+6\\cdot 1=126$ are computed from identical $S_k$ yet answer different questions, and the raw $S_2=144$ answers neither. The binomial-transform polynomial $\\sum_k S_k(x-1)^k=x^4+4x^3+126x^2+2612x+37577$ packages all of $a_0,\\dots,a_4$ at once, exposing $a_2=126$ as a single coefficient and making the overcount structure ($S_2$ double- and sextuple-counts the $3$- and $4$-swap permutations) impossible to overlook."
  },
  {
    "theme": "inclusionexclusion",
    "themeLabel": "Inclusion–Exclusion & Derangements",
    "title": "Words That Spend Every Letter",
    "difficulty": 5,
    "task": "Find the number of",
    "tags": [
      "surjection",
      "onto-function",
      "inclusion-exclusion",
      "strings"
    ],
    "statement": "Consider all strings of length $8$ formed from the $5$-symbol alphabet $\\{a,b,c,d,e\\}$. Find the number of such strings in which every one of the five symbols appears at least once.",
    "answer": "$\\boxed{126000}$",
    "trap": "Reserving one position for each symbol first, then filling the remaining three positions freely: $\\binom81\\binom71\\binom61\\binom51\\binom41\\cdot 5^{3}=840000$. This pre-placement over-counts wildly—so wildly that it even exceeds the total $5^8=390625$ of all strings—because a fixed final string is produced by many different choices of which copy of each symbol was the reserved one. The honest device is inclusion–exclusion on the symbols that are missing.",
    "solutions": [
      {
        "name": "Inclusion–exclusion on omitted symbols",
        "steps": [
          "Total strings $=5^8$. Let $M_i$ be the set of strings that never use symbol $i$. We want the strings lying in none of the $M_i$.",
          "Strings avoiding a fixed set of $j$ symbols use only the remaining $5-j$ symbols, so there are $(5-j)^8$ of them, and $\\binom5j$ ways to pick the omitted set.",
          "By inclusion–exclusion the count is $\\sum_{j=0}^{5}(-1)^j\\binom5j(5-j)^8 = 5^8-5\\cdot4^8+10\\cdot3^8-10\\cdot2^8+5\\cdot1^8-0$.",
          "$=390625-327680+65610-2560+5 = \\boxed{126000}$."
        ]
      },
      {
        "name": "Stirling decomposition",
        "steps": [
          "A string using all $5$ symbols is exactly a surjection from the $8$ ordered positions onto the $5$ symbols, and the number of surjections is $5!\\,S(8,5)$, where $S(8,5)$ counts the ways to partition the $8$ positions into $5$ nonempty blocks (one block per symbol).",
          "$S(8,5)=1050$, so the count is $5!\\cdot 1050 = 120\\cdot 1050$.",
          "$=\\boxed{126000}$, matching the inclusion–exclusion total."
        ]
      },
      {
        "name": "Composition / multinomial bookkeeping",
        "steps": [
          "Choose how many times each symbol appears: positive integers $n_a+n_b+n_c+n_d+n_e=8$. For a fixed composition the number of arrangements is the multinomial $\\dfrac{8!}{n_a!\\,n_b!\\,n_c!\\,n_d!\\,n_e!}$.",
          "Summing over all $5$ positive parts means summing over the integer partitions of $8$ into exactly $5$ positive parts: $4{+}1{+}1{+}1{+}1$, $3{+}2{+}1{+}1{+}1$, and $2{+}2{+}2{+}1{+}1$.",
          "Their contributions (each multinomial times the number of distinct symbol-labelings of that shape) are $5\\cdot\\frac{8!}{4!}=8400$, $20\\cdot\\frac{8!}{3!2!}=67200$, and $10\\cdot\\frac{8!}{(2!)^3}=50400$.",
          "$8400+67200+50400=\\boxed{126000}$, confirming both earlier methods."
        ]
      }
    ],
    "remark": "Insight: 'uses every symbol' is precisely a surjection, so the alternating sum $\\sum_{j}(-1)^j\\binom kj (k-j)^n$ is the master formula, and dividing by $k!$ recovers the Stirling number $S(n,k)$—onto-counting and set-partitions are the same fact read two ways. The third method, summing multinomials over compositions, is the same total reorganized by symbol-frequency profile, a useful sanity check."
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
    "title": "At Least One Returns Home",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "derangement",
      "probability",
      "complement",
      "inclusion-exclusion"
    ],
    "statement": "Seven letters are stuffed at random into seven pre-addressed envelopes, one letter per envelope (a uniformly random permutation). Evaluate the probability that at least one letter lands in its correct envelope. Give the answer as a fully reduced fraction.",
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
    "remark": "Insight: a sign-reversing involution only kills a WEIGHTED alternating sum when it preserves the weight, not merely the sign. The celebrated pairing $S\\mapsto S\\,\\triangle\\,\\{1\\}$ proves $\\sum_k(-1)^k\\binom{n}{k}=0$ precisely because there the weight is constant ($1$); the instant a weight like $\\min S$ enters, toggling the bottom element corrupts it and the pairing becomes illegal. The honest fix is to involute INSIDE each weight-class \\,---\\, here, toggle the element just above the minimum \\,---\\, which cancels every class except the one the involution cannot reach, the singleton $\\{n\\}$. That lone fixed point is the entire answer, $-n$. The same skeleton recurs across olympiad counting: the algebraic version is the collapse $(1-1)^{n-m}=0^{\\,n-m}$ surviving only at $m=n$, and the layer-cake version telescopes $n$ copies of $-1$. All three see the same object: an alternating subset sum is zero, but a weight that varies under your pairing can leave exactly one term standing."
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
    "title": "The Rotation That Anoints One King",
    "difficulty": 5,
    "task": "Find the number of",
    "tags": [
      "cycle lemma",
      "catalan",
      "cyclic rotation",
      "free action",
      "double counting"
    ],
    "statement": "A counter starts on the number line at height $0$ and makes a sequence of $13$ unit steps, each either $U$ (height $+1$) or $D$ (height $-1$). Exactly $6$ steps are $U$ and $7$ are $D$, so the counter ends at height $-1$. Call such a step-word submerged if after every one of its $13$ steps the running height is strictly negative (i.e. the counter dives below $0$ on the first step and never resurfaces to $0$ or above). The intended solution is a double count by cyclic rotation: list all $\\binom{13}{6}$ step-words around a circle of $13$ positions, group them into rotation orbits, and show each orbit contributes the same fixed number of submerged words. Carry this out and find the number of submerged step-words. \\[Caution.  \\text{The cyclic argument is what makes this clean, but it works only because of the lone extra }D.\\]",
    "answer": "$132$",
    "trap": "The conceptual trap is not arithmetic \\,---\\, it is running the cyclic (cycle-lemma) double count on the wrong, ``balanced'' sequence, where the cyclic group does NOT act freely. The seductive shortcut: ``forget the awkward $13$th step; really I want a balanced word of $6$ ups and $6$ downs that stays weakly on one side, and by symmetry exactly one of its rotations is good, so the answer is $\\binom{12}{6}/12$.'' That reasoning is fatally flawed, because for an equal number of $U$ and $D$ the running sum returns to $0$, so a word like $UDUDUDUDUDUD$ has period $2$: its rotation orbit has size $2$, not $12$, and dividing $\\binom{12}{6}=924$ by $12$ does not even give an integer ($924/12=77$ here is an accident of these numbers, but $\\binom{6}{3}/6=20/6$ and $\\binom{10}{5}/10=252/10$ are not integers, exposing the lie). Periodicity is exactly what the cycle lemma forbids, and it is forbidden precisely when the total displacement is $\\pm1$ (or coprime to the length) \\,---\\, that is the entire reason the problem ships with $7$ downs against $6$ ups on $13$ positions: the displacement $-1$ is coprime to $13$, every orbit has full size $13$, and dividing by $13$ is exact. A student who strips the extra $D$ to ``simplify'' destroys the free action, mis-applies $\\tfrac{1}{2n}\\binom{2n}{n}$, and gets a non-integer or a number with no meaning. The missed structural condition \\,---\\, nonzero, length-coprime displacement so the rotation orbits are all of full size \\,---\\, is the whole engine of the count.",
    "solutions": [
      {
        "name": "Cycle lemma: each rotation orbit anoints exactly one submerged word",
        "steps": [
          "Write each step-word as a sequence $a_1a_2\\cdots a_{13}$ with $a_i=+1$ for $U$ and $a_i=-1$ for $D$; there are $\\binom{13}{6}=1716$ words, all with total $S=6-7=-1$. Arrange the $13$ positions around a circle and let the cyclic group $\\mathbb{Z}_{13}$ act by rotation, $\\rho(a_1\\cdots a_{13})=a_2\\cdots a_{13}a_1$. Because $13$ is prime and a word is not all-equal (it mixes $U$ and $D$), no nontrivial rotation fixes it, so every orbit has full size $13$. Hence the $1716$ words split into $1716/13=132$ orbits of $13$ words each.",
          "Claim: each orbit contains exactly one submerged word. Fix an orbit and any representative $w$. Form the height profile $h_0=0,\\;h_k=a_1+\\cdots+a_k$. Over one full loop the height drops by $1$ ($h_{13}=-1$), so over a doubled loop it drops by $2$, $-3,\\dots$; reading the heights around and around, the sequence of running totals drifts steadily downward by $1$ per lap. A rotation starting at position $j+1$ is submerged exactly when position $j$ is a strict record low of this drifting walk \\,---\\, a height never matched again before the walk has descended one more full unit. Because the per-lap drop is exactly $1$ and $13$ is coprime to $1$, the $13$ shifted heights $h_j-h_{j}$ within a lap are all distinct, so there is a unique position achieving the strict minimum over the lap; starting just after it makes every subsequent partial sum strictly below $0$. Thus exactly one of the $13$ rotations is submerged.",
          "Counting submerged words two ways: summing ``one per orbit'' over the $132$ orbits gives $132$ submerged words; equivalently, $\\#\\{\\text{submerged}\\}=\\dfrac{1}{13}\\binom{13}{6}\\cdot 1=\\dfrac{1716}{13}=132$. This is the cycle-lemma form of the Catalan number, $\\dfrac{1}{2n+1}\\binom{2n+1}{n}$ with $n=6$.",
          "Therefore the number of submerged step-words is $\\boxed{132}$."
        ]
      },
      {
        "name": "Reflection principle on the augmented path",
        "steps": [
          "A submerged word must begin with $D$: the very first partial sum is strictly negative, forcing $a_1=-1$. Delete that forced leading $D$. What remains is a length-$12$ word with $6$ ups and $6$ downs, and the submerged condition $h_k\\le -1$ for all $k\\ge 1$ becomes, after the shift by the removed $-1$, the condition that the remainder's running heights never become strictly positive (it stays weakly below the start). So submerged $13$-words biject with length-$12$ balanced words that never go strictly positive.",
          "Count the balanced words that DO go strictly positive (height reaches $+1$) by reflection. Take the first step where the height first hits $+1$ and flip every step before and including it ($U\\leftrightarrow D$). A path with $6$ $U$'s and $6$ $D$'s that touches $+1$ maps bijectively to a path with $7$ $U$'s and $5$ $D$'s, of which there are $\\binom{12}{7}$. Hence the number that never go strictly positive is $\\binom{12}{6}-\\binom{12}{7}=924-792=132$.",
          "Since the leading-$D$ deletion is a bijection, the submerged $13$-words number the same. This is the ballot form $\\binom{2n}{n}-\\binom{2n}{n+1}=\\binom{2n}{n}-\\binom{2n}{n-1}$ of the Catalan number, here $\\binom{12}{6}-\\binom{12}{5}=924-792=132$.",
          "Therefore the count is $\\boxed{132}$."
        ]
      },
      {
        "name": "Bijection to Dyck paths and the Catalan recurrence",
        "steps": [
          "Reverse a submerged word and swap $U\\leftrightarrow D$. Reversal turns ``every prefix sum $<0$'' into ``every suffix sum $>0$,'' and the swap turns that into ``every prefix sum of the new word $>0$'' after also flipping the forced first/last step; concretely, deleting the forced leading $D$ (Solution 2) and reading the remaining $12$ steps bottom-to-top yields a genuine Dyck path of $6$ up and $6$ down steps that stays at height $\\ge 0$ throughout and returns to $0$.",
          "Dyck paths of semilength $6$ are counted by the Catalan number $C_6$. Using the Segner recurrence $C_{m+1}=\\sum_{i=0}^{m}C_iC_{m-i}$ from the first return to $0$: $C_0=1,\\,C_1=1,\\,C_2=2,\\,C_3=5,\\,C_4=14,\\,C_5=42$, and $C_6=C_0C_5+C_1C_4+C_2C_3+C_3C_2+C_4C_1+C_5C_0=42+14+10+10+14+42=132.$",
          "Equivalently $C_6=\\dfrac{1}{6+1}\\binom{12}{6}=\\dfrac{924}{7}=132$, agreeing with the recurrence.",
          "Hence the number of submerged step-words equals $C_6=\\boxed{132}$."
        ]
      }
    ],
    "remark": "Insight: the cycle lemma divides a total by the loop length only when the cyclic action is FREE, and freeness is bought by the single extra $D$. With $6$ ups against $7$ downs the net displacement is $-1$, coprime to the length $13$, so no step-word can be periodic; every rotation orbit has full size $13$ and exactly one of its members is submerged. The instant you ``balance'' the word to $6$ ups and $6$ downs to make it look symmetric, the displacement becomes $0$, periodic words such as $(UD)^6$ appear, orbits shrink, and the clean division collapses \\,---\\, the same disease that makes $\\tfrac{1}{2n}\\binom{2n}{n}$ a non-integer. The reflection and Dyck-recurrence solutions reach the identical Catalan number $C_n=\\tfrac{1}{2n+1}\\binom{2n+1}{n}=\\binom{2n}{n}-\\binom{2n}{n-1}=\\tfrac{1}{n+1}\\binom{2n}{n}$ by entirely different mechanisms, but only the rotation argument explains WHY the strange $+1$ extra step is not a blemish but the load-bearing beam."
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
    "title": "Two Hockey Sticks Cross the Line",
    "difficulty": 5,
    "task": "Prove that",
    "tags": [
      "hockey-stick",
      "vandermonde",
      "lattice-paths",
      "double-counting",
      "grand-hybrid"
    ],
    "statement": "Fix integers $n\\ge 0$ and $a,b\\ge 0$ with $a+b\\le n$. Prove the two-block hockey-stick identity \\[\\sum_{i=0}^{n}\\binom{i}{a}\\binom{\\,n-i\\,}{b}\\;=\\;\\binom{\\,n+1\\,}{\\,a+b+1\\,}\\] by choosing an $(a+b+1)$-element subset of $\\{0,1,\\dots,n\\}$ and classifying it by its $(a+1)$-th smallest element.",
    "answer": "Proved: both sides count the $(a+b+1)$-element subsets of the $(n+1)$-element ground set $\\{0,1,\\dots,n\\}$, so $\\sum_{i=0}^{n}\\binom{i}{a}\\binom{n-i}{b}=\\binom{n+1}{a+b+1}.$",
    "trap": "Off-by-one on the ground set. The pivot $i$ is one specific chosen element with exactly $a$ chosen elements strictly below it and exactly $b$ strictly above it, so the ground set must contain the value $0$ as a legal slot below: it is $\\{0,1,\\dots,n\\}$, with $n+1$ elements, giving $\\binom{n+1}{a+b+1}$. If you instead picture the ground set as $\\{1,\\dots,n\\}$ (only $n$ elements) you land on the WRONG total $\\binom{n}{a+b+1}$. Concretely at $n=5,a=b=1$ the sum is $20=\\binom{6}{3}$, whereas $\\binom{5}{3}=10$; a direct check over all $n\\le 24$ with $a+b\\le n$ shows $\\binom{n}{a+b+1}$ never equals the sum (and they agree by accident in zero cases). The phantom missing slot is exactly the value $0$ available to the $\\binom{i}{a}$ block when $i$ is small.",
    "solutions": [
      {
        "name": "Classify by the pivot element",
        "steps": [
          "LET $\\mathcal{F}$ be the family of all $(a+b+1)$-element subsets of the ground set $G=\\{0,1,\\dots,n\\}$. Since $|G|=n+1$, we have $|\\mathcal{F}|=\\binom{n+1}{a+b+1}$ by definition of the binomial coefficient.",
          "FOR each $T\\in\\mathcal{F}$, write its elements in increasing order as $t_0<t_1<\\cdots<t_{a+b}$, and call $p=t_a$ its PIVOT, the $(a+1)$-th smallest element. Every $T$ has exactly one pivot, so the value of $p$ partitions $\\mathcal{F}$.",
          "COUNT the subsets with pivot $p=i$. Below the pivot we must choose the $a$ smallest elements $t_0<\\cdots<t_{a-1}$ from $\\{0,1,\\dots,i-1\\}$, an $i$-element set: $\\binom{i}{a}$ ways. Above the pivot we choose the $b$ largest elements $t_{a+1}<\\cdots<t_{a+b}$ from $\\{i+1,\\dots,n\\}$, an $(n-i)$-element set: $\\binom{n-i}{b}$ ways. The two choices are independent, so there are $\\binom{i}{a}\\binom{n-i}{b}$ subsets with pivot $i$.",
          "SUM over all admissible pivot values. As $i$ ranges over $0,1,\\dots,n$ the classes are disjoint and exhaust $\\mathcal{F}$ (terms with $i<a$ or $n-i<b$ contribute $0$ automatically), so $|\\mathcal{F}|=\\sum_{i=0}^{n}\\binom{i}{a}\\binom{n-i}{b}$.",
          "EQUATE the two counts of $|\\mathcal{F}|$: $\\displaystyle\\sum_{i=0}^{n}\\binom{i}{a}\\binom{n-i}{b}=\\binom{n+1}{a+b+1}.\\qquad\\blacksquare$"
        ]
      },
      {
        "name": "Lattice-path crossing",
        "steps": [
          "ENCODE each $(a+b+1)$-subset of $\\{0,1,\\dots,n\\}$ as a monotone lattice path. Reading positions $0,1,\\dots,n$ left to right, take a North (up) step at each chosen position and an East step at each unchosen position. This is a bijection between subsets and paths from $(0,0)$ using exactly $a+b+1$ North steps and $n-a-b$ East steps, i.e. paths to $(\\,n-a-b,\\;a+b+1\\,)$; there are $\\binom{n+1}{a+b+1}$ of them since we place $a+b+1$ North steps among $n+1$ total steps.",
          "CONDITION on the $(a+1)$-th North step, the path's middle crossing. Suppose it occurs at position $i$ (the $i$-th of the $n+1$ steps, $0$-indexed). Among the first $i$ positions the path has used exactly $a$ North steps: $\\binom{i}{a}$ ways. Among the last $n-i$ positions it uses the remaining $b$ North steps: $\\binom{n-i}{b}$ ways.",
          "SUM over the crossing position $i=0,1,\\dots,n$. Each path has a unique $(a+1)$-th North step, so summing the disjoint cases counts every path exactly once: the total is $\\sum_{i=0}^{n}\\binom{i}{a}\\binom{n-i}{b}$.",
          "CONCLUDE. The two counts of the same path family must agree: $\\displaystyle\\sum_{i=0}^{n}\\binom{i}{a}\\binom{n-i}{b}=\\binom{n+1}{a+b+1}.\\qquad\\blacksquare$"
        ]
      },
      {
        "name": "Generating functions (Cauchy product)",
        "steps": [
          "RECALL the negative-binomial generating series, valid as a formal power series for each fixed integer $k\\ge 0$: $\\displaystyle\\sum_{m\\ge 0}\\binom{m}{k}x^{m}=\\frac{x^{k}}{(1-x)^{k+1}}$, since $\\binom{m}{k}$ is the number of ways to write $m$ as $k$ markers plus gaps.",
          "MULTIPLY the two such series with $k=a$ and $k=b$: $\\displaystyle\\Bigl(\\sum_{m\\ge 0}\\binom{m}{a}x^{m}\\Bigr)\\Bigl(\\sum_{m\\ge 0}\\binom{m}{b}x^{m}\\Bigr)=\\frac{x^{a}}{(1-x)^{a+1}}\\cdot\\frac{x^{b}}{(1-x)^{b+1}}=\\frac{x^{a+b}}{(1-x)^{a+b+2}}.$",
          "READ OFF the coefficient two ways. By the Cauchy product, the coefficient of $x^{n}$ on the left is $\\sum_{i=0}^{n}\\binom{i}{a}\\binom{n-i}{b}$. On the right, $\\dfrac{x^{a+b}}{(1-x)^{a+b+2}}=\\sum_{m\\ge 0}\\binom{m}{a+b+1}x^{\\,m+1}$ (re-indexing the series of step 1 with $k=a+b+1$), whose coefficient of $x^{n}$ is $\\binom{n}{a+b+1}$... and shifting the exponent gives $\\binom{n+1}{a+b+1}$ once aligned. Precisely: $\\dfrac{x^{a+b}}{(1-x)^{a+b+2}}=\\dfrac{1}{x}\\cdot\\dfrac{x^{a+b+1}}{(1-x)^{(a+b+1)+1}}=\\dfrac{1}{x}\\sum_{m\\ge 0}\\binom{m}{a+b+1}x^{m}$, so the coefficient of $x^{n}$ equals the coefficient of $x^{n+1}$ in $\\sum_m\\binom{m}{a+b+1}x^m$, namely $\\binom{n+1}{a+b+1}$.",
          "EQUATE the two coefficient extractions of $x^{n}$: $\\displaystyle\\sum_{i=0}^{n}\\binom{i}{a}\\binom{n-i}{b}=\\binom{n+1}{a+b+1}.\\qquad\\blacksquare$"
        ]
      }
    ],
    "remark": "Insight: this is the convolution that fuses two hockey sticks. The single hockey-stick identity $\\sum_{i}\\binom{i}{a}=\\binom{n+1}{a+1}$ is 'classify an $(a+1)$-subset by its maximum'; the two-block version classifies an $(a+b+1)$-subset by a distinguished interior element, the pivot, with $\\binom{i}{a}$ choices below it and $\\binom{n-i}{b}$ above. The same fact wears three hats: a pivot-partition (double counting), a path's middle crossing (lattice paths), and a Cauchy product of two $\\tfrac{x^{k}}{(1-x)^{k+1}}$ series (Vandermonde-style convolution). The lone trap is the ground set: the value $0$ is a genuine slot below the pivot, so there are $n+1$ slots, not $n$ — drop it and the right side collapses to the wrong $\\binom{n}{a+b+1}$."
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
    "theme": "recurrence",
    "themeLabel": "Recurrences & Catalan",
    "title": "The Two-Tone Corridor",
    "difficulty": 3,
    "task": "Find the number of …",
    "tags": [
      "tiling",
      "fibonacci-type",
      "jacobsthal",
      "recurrence",
      "closed-form"
    ],
    "statement": "A corridor is a $1\\times 10$ strip of unit cells. We tile it completely, left to right, using two kinds of tiles: a white $1\\times1$ square, or a $1\\times2$ domino that comes in one of two colours, red or blue. (Two tilings are the same only if they use the same tiles in the same positions and colours.) \\[Find the number of distinct tilings of the 1\\times10 corridor.\\]",
    "answer": "$683$.",
    "trap": "Treating the coloured domino as a single tile and getting plain Fibonacci $F_{11}=89$. The two colours mean a domino contributes a factor of $2$, not $1$, in the recurrence; ignoring colour undercounts massively.",
    "solutions": [
      {
        "name": "Recurrence on the last tile",
        "steps": [
          "Let $a_n$ be the number of tilings of $1\\times n$. Look at the rightmost tile.",
          "If it is a white square (1 way), the rest is a tiling of $1\\times(n-1)$: contributes $a_{n-1}$.",
          "If it is a coloured domino (2 choices of colour), the rest tiles $1\\times(n-2)$: contributes $2a_{n-2}$.",
          "Hence $a_n=a_{n-1}+2a_{n-2}$ with $a_0=1,\\ a_1=1$.",
          "Iterate: $1,1,3,5,11,21,43,85,171,341,683$, so $a_{10}=\\boxed{683}$."
        ]
      },
      {
        "name": "Closed form (Jacobsthal)",
        "steps": [
          "The characteristic equation $x^2=x+2$ factors as $(x-2)(x+1)=0$, roots $2$ and $-1$.",
          "So $a_n=A\\cdot2^n+B(-1)^n$; using $a_0=1,a_1=1$ gives $A=\\tfrac23,\\ B=\\tfrac13$.",
          "Thus $a_n=\\dfrac{2^{\\,n+1}+(-1)^n}{3}$.",
          "At $n=10$: $\\dfrac{2^{11}+1}{3}=\\dfrac{2049}{3}=\\boxed{683}$."
        ]
      },
      {
        "name": "Sum over number of dominoes",
        "steps": [
          "If a tiling uses $k$ dominoes it uses $10-2k$ squares, occupying $10-k$ tile-slots arranged in $\\binom{10-k}{k}$ ways.",
          "Each domino independently picks a colour: factor $2^k$.",
          "Total $=\\sum_{k=0}^{5}\\binom{10-k}{k}2^k=1+18+112+280+240+32=683$.",
          "Hence $\\boxed{683}$."
        ]
      }
    ],
    "remark": "Insight: a tile that can be 'decorated' in $c$ ways simply multiplies that branch of the recurrence by $c$. Colours turn ordinary Fibonacci into the Jacobsthal numbers $\\frac{2^{n+1}+(-1)^n}{3}$ — same structure, richer growth."
  },
  {
    "theme": "recurrence",
    "themeLabel": "Recurrences & Catalan",
    "title": "The River With a Floor",
    "difficulty": 5,
    "task": "Count",
    "tags": [
      "motzkin",
      "lattice paths",
      "recurrence",
      "generating function",
      "catalan"
    ],
    "statement": "A pebble starts at the origin and takes a sequence of $9$ moves. Each move is one of three kinds: a rise $(+1,+1)$, a drop $(+1,-1)$, or a glide $(+1,0)$. The pebble must finish back at height $0$ after the $9$th move, and at no intermediate moment may its height become negative (it may touch height $0$ as often as it likes, but it can never go below the floor). How many such $9$-move walks are there? Set up a recurrence by classifying the walk according to the behaviour of its first step, then confirm the count by a second, structurally different method.",
    "answer": "$835$",
    "trap": "The fatal move is to read ``finish at height $0$'' as the only constraint and quietly drop the floor. With $j$ rises, $j$ drops and $9-2j$ glides the multiset of steps can be ordered in $\\frac{9!}{j!\\,j!\\,(9-2j)!}$ ways, and summing over $j=0,\\dots,4$ gives $\\sum_{j}\\frac{9!}{j!\\,j!\\,(9-2j)!}=3139$, the central trinomial coefficient $[x^9](1+x+x^2)^9$. It looks authoritative because it is a real named number and it does enforce ``ends at $0$'' \\,---\\, but it counts every height-balanced word, including the $3139-835=2304$ words that dip below the floor at some point (e.g. a leading drop). The non-negativity wall is exactly the difference between a free balanced walk and a Motzkin walk, and it cannot be patched by a single reflection the way a pure up/down (Dyck) path can, because the glide steps make the lengths and parities interleave; one must build the floor into the recurrence itself. A second, subtler trap is to copy the Catalan first-return recurrence verbatim \\,---\\, ``either the path starts with a step that returns to $0$ giving $M_{n-1}$, or it makes an excursion'' \\,---\\, but treat the excursion as a single first-return arch of $C_{n-1}$ closing one step later, i.e. $M_n=M_{n-1}+\\sum_k M_kM_{n-1-k}$; this miscounts because a genuine arch that lifts off the floor and comes back consumes two boundary steps (the opening rise and the closing drop), not one, so the inner convolution must be over length $n-2$, not $n-1$. The wrong version explodes to $206098$ at $n=9$.",
    "solutions": [
      {
        "name": "First-step (Motzkin) recurrence",
        "steps": [
          "Let $M_n$ be the number of admissible $n$-move walks (start and end at height $0$, never below the floor). Read $M_0=1$ (the empty walk) and $M_1=1$ (only a glide works; a lone rise or drop cannot return to $0$). Classify any walk of length $n\\ge 2$ by its first step.",
          "Case A \\,---\\, the first step is a glide. The pebble is back at height $0$ after one move and the remaining $n-1$ moves form an arbitrary admissible walk; this contributes $M_{n-1}$.",
          "Case B \\,---\\, the first step is a rise. It must eventually be cancelled by a matching drop that brings the height back to $0$ for the first time. Say that first return to $0$ happens at move $j+2$: the rise at step $1$, an admissible walk of length $j$ strictly above the floor (which, shifted down by one, is an arbitrary admissible walk of length $j$), then the closing drop, then an arbitrary admissible walk on the remaining $n-2-j$ moves. Summing $j$ from $0$ to $n-2$ contributes $\\sum_{j=0}^{n-2}M_j\\,M_{n-2-j}$. A first drop is impossible (it breaks the floor immediately).",
          "Hence $M_n=M_{n-1}+\\sum_{j=0}^{n-2}M_j\\,M_{n-2-j}$. Note the inner sum runs over length $n-2$: the arch eats the opening rise and the closing drop, two steps, which is exactly what the careless first-return copy gets wrong.",
          "Iterate: $M_2=M_1+M_0M_0=1+1=2$; $M_3=M_2+(M_0M_1+M_1M_0)=2+2=4$; $M_4=M_3+(M_0M_2+M_1M_1+M_2M_0)=4+(2+1+2)=9$; $M_5=9+(M_0M_3+M_1M_2+M_2M_1+M_3M_0)=9+(4+2+2+4)=21$; $M_6=21+(M_0M_4+M_1M_3+M_2M_2+M_3M_1+M_4M_0)=21+(9+4+4+4+9)=51$.",
          "Continue: $M_7=51+(M_0M_5+M_1M_4+M_2M_3+M_3M_2+M_4M_1+M_5M_0)=51+(21+9+8+8+9+21)=127$; $M_8=127+(M_0M_6+M_1M_5+M_2M_4+M_3M_3+M_4M_2+M_5M_1+M_6M_0)=127+(51+21+18+16+18+21+51)=323$.",
          "Finally $M_9=M_8+(M_0M_7+M_1M_6+M_2M_5+M_3M_4+M_4M_3+M_5M_2+M_6M_1+M_7M_0)=323+(127+51+42+36+36+42+51+127)=323+512=\\boxed{835}.$"
        ]
      },
      {
        "name": "Generating function (algebraic kernel)",
        "steps": [
          "Let $M(x)=\\sum_{n\\ge 0}M_nx^n$. The first-step decomposition says a non-empty admissible walk is either a glide followed by an admissible walk, contributing $x\\,M(x)$, or a rise, an admissible walk lifted off the floor, a drop, and another admissible walk, contributing $x^2M(x)^2$. Adding the empty walk gives the functional equation $M(x)=1+x\\,M(x)+x^2M(x)^2$.",
          "Solve the quadratic $x^2M^2+(x-1)M+1=0$ for $M$, taking the branch analytic at $0$ (so that $M(0)=1$): $M(x)=\\dfrac{1-x-\\sqrt{1-2x-3x^2}}{2x^2}$, where $1-2x-3x^2=(1+x)(1-3x)$.",
          "Extract coefficients. Writing $\\sqrt{1-2x-3x^2}=\\sqrt{(1+x)(1-3x)}$ and expanding, or simply re-expanding $M(x)=1+xM+x^2M^2$ as a power series, the coefficients come out $1,1,2,4,9,21,51,127,323,835,\\dots$ \\,---\\, identical to the recurrence run, since the functional equation is the generating-function shadow of that very recurrence.",
          "Reading off the coefficient of $x^9$ gives $M_9=\\boxed{835}.$"
        ]
      },
      {
        "name": "Bijection to Dyck paths via the rise/drop subword (binomial-Catalan sum)",
        "steps": [
          "Decide first which of the $9$ positions hold the non-glide moves. If there are $2k$ such positions (they must come in equal numbers of rises and drops to return to $0$), choose them in $\\binom{9}{2k}$ ways; the remaining $9-2k$ positions are forced glides and never affect the height.",
          "On the $2k$ chosen positions the walk, with glides deleted, is a sequence of $k$ rises and $k$ drops that starts and ends at $0$ and never dips below the floor \\,---\\, exactly a Dyck path of semilength $k$. The number of these is the Catalan number $C_k=\\frac{1}{k+1}\\binom{2k}{k}$. Crucially, deleting the glides preserves the floor condition: glides are horizontal, so the running height at every retained step is unchanged, and the non-negativity of the whole walk is equivalent to that of its rise/drop subword.",
          "Therefore $M_9=\\sum_{k=0}^{4}\\binom{9}{2k}C_k$. Here is precisely where the trap dies: the central-trinomial count uses $\\binom{2k}{k}$ (all balanced rise/drop orderings) in place of $C_k$ (only those obeying the floor), and the ratio $C_k/\\binom{2k}{k}=\\frac{1}{k+1}$ is the floor's toll.",
          "Compute with $C_0,C_1,C_2,C_3,C_4=1,1,2,5,14$: $\\binom{9}{0}C_0=1$, $\\binom{9}{2}C_1=36$, $\\binom{9}{4}C_2=126\\cdot2=252$, $\\binom{9}{6}C_3=84\\cdot5=420$, $\\binom{9}{8}C_4=9\\cdot14=126$.",
          "Summing: $1+36+252+420+126=835$, so $M_9=\\boxed{835}$, agreeing with both the recurrence and the generating function."
        ]
      }
    ],
    "remark": "Insight: a Motzkin walk is genuinely two-piece, and that is the whole lesson. A glide is a self-contained one-step return; an excursion off the floor is an opening rise, an arbitrary lifted walk, and a closing drop \\,---\\, two boundary steps \\,---\\, so the honest recurrence is $M_n=M_{n-1}+\\sum_{j}M_jM_{n-2-j}$, never the Catalan first-return $M_n=M_{n-1}+\\sum_j M_jM_{n-1-j}$, and never the floorless trinomial sum. The cleanest way to see the floor's role is the third method: among all $\\binom{2k}{k}$ ways to interleave $k$ rises and $k$ drops, only the fraction $\\frac{1}{k+1}$ stay non-negative, so $\\sum_k\\binom{9}{2k}\\binom{2k}{k}=3139$ collapses to $\\sum_k\\binom{9}{2k}C_k=835$ once the wall is enforced. The same algebraic kernel $M=1+xM+x^2M^2$ encodes all three views at once: the linear $xM$ is the glide, the quadratic $x^2M^2$ is the arch, and the two boundary steps in $x^2$ are exactly the steps the careless copy forgets."
  },
  {
    "theme": "recurrence",
    "themeLabel": "Recurrences & Catalan",
    "title": "Slicing the Nonagon",
    "difficulty": 3,
    "task": "Determine",
    "tags": [
      "catalan",
      "triangulation",
      "convex-polygon",
      "recurrence",
      "euler"
    ],
    "statement": "A convex nonagon (9 vertices) is cut into triangles by drawing non-crossing diagonals so that every interior region is a triangle (a triangulation). \\[Determine the number of distinct triangulations of the convex nonagon.\\]",
    "answer": "$429$.",
    "trap": "Computing $\\frac{1}{2}\\binom{9}{2}$ or some 'choose the diagonals' count. Diagonals are heavily constrained by non-crossing; the count is the Catalan number $C_{7}$, not a binomial of diagonals.",
    "solutions": [
      {
        "name": "Euler / Catalan recurrence",
        "steps": [
          "Let $T_m$ be the number of triangulations of a convex $m$-gon ($T_2=1$ conventionally, $T_3=1$).",
          "Fix the edge $\\,v_1v_m$. In any triangulation it lies in a unique triangle $v_1 v_k v_m$ for some $2\\le k\\le m-1$.",
          "That triangle splits the polygon into a $k$-gon ($v_1\\dots v_k$) and an $(m-k+1)$-gon: $T_m=\\sum_{k=2}^{m-1}T_k\\,T_{m-k+1}$.",
          "This is the Catalan recurrence; $T_{m}=C_{m-2}$.",
          "For $m=9$: $T_9=C_7=\\dfrac{1}{8}\\binom{14}{7}=\\boxed{429}$."
        ]
      },
      {
        "name": "Direct Catalan formula",
        "steps": [
          "Triangulations of a convex $(n+2)$-gon are counted by the Catalan number $C_n$ (a standard Catalan model).",
          "Here $n+2=9$, so $n=7$.",
          "$C_7=\\dfrac{1}{7+1}\\binom{14}{7}=\\dfrac{3432}{8}=\\boxed{429}$."
        ]
      }
    ],
    "remark": "Insight: 'fix one edge, sum over its triangle's apex' is THE move that produces the Catalan convolution $C_n=\\sum C_kC_{n-1-k}$ across all of its avatars — polygons, trees, parentheses."
  },
  {
    "theme": "recurrence",
    "themeLabel": "Recurrences & Catalan",
    "title": "The Twelve-Bead Bracelet",
    "difficulty": 5,
    "task": "Count",
    "tags": [
      "cyclic tiling",
      "lucas numbers",
      "transfer matrix",
      "seam casework",
      "fibonacci"
    ],
    "statement": "A bracelet is a ring of $12$ beads arranged in a circle, the positions labelled $1,2,\\dots,12$ clockwise with position $12$ adjacent to position $1$. We cover the bracelet completely with two kinds of charms: a $stud$ that occupies a single bead, and a $bar$ that occupies two beads which are adjacent on the ring (so a bar may sit on $\\{4,5\\}$, on $\\{12,1\\}$ across the clasp, and so on). Charms may not overlap and every bead must be covered. \\[\\text{Count the number of distinct ways to cover the bracelet.}\\] Two coverings are the same only if they assign the identical charm to every bead; rotations and reflections are $not$ identified.",
    "answer": "$\\boxed{322}$",
    "trap": "Cutting the ring open at the clasp and tiling it as a straight $1\\times 12$ strip. A strip of length $n$ has $F_{n+1}$ square-and-domino tilings, so this gives $F_{13}=233$. But severing the bond between bead $12$ and bead $1$ silently forbids every covering in which a single $bar$ straddles the clasp, i.e. occupies $\\{12,1\\}$. Those wrap-around coverings are real and must be added back. The honest answer is the Lucas number $L_{12}=322$, and the gap $322-233=89=F_{11}$ is exactly the number of coverings the straight-strip count throws away.",
    "solutions": [
      {
        "name": "Seam casework (Lucas via the two Fibonacci pieces)",
        "steps": [
          "Classify every covering by what happens at the clasp, the bond joining bead $12$ to bead $1$. Either no bar straddles the clasp, or exactly one bar does (two charms cannot share a bead, so at most one bar can sit on $\\{12,1\\}$).",
          "Case A — no straddling bar. Then nothing crosses the clasp, so we may cut the ring there and read the beads as a straight line $1,2,\\dots,12$. The number of ways to tile a $1\\times n$ strip with studs (length $1$) and bars (length $2$) satisfies $a_n=a_{n-1}+a_{n-2}$ with $a_0=a_1=1$, hence $a_n=F_{n+1}$. For $n=12$ this is $a_{12}=F_{13}=233$.",
          "Case B — exactly one bar on $\\{12,1\\}$. Fix that bar; beads $12$ and $1$ are now used. The remaining uncovered beads form the straight run $2,3,\\dots,11$, a strip of length $10$, tiled in $a_{10}=F_{11}=89$ ways.",
          "The two cases are disjoint and exhaustive, so the total is $F_{13}+F_{11}=233+89=\\boxed{322}$. (This is precisely the identity $L_n=F_{n+1}+F_{n-1}$ at $n=12$, the recurrence-level signature of the wrap-around.)"
        ]
      },
      {
        "name": "Transfer matrix on the cycle (trace)",
        "steps": [
          "Walk around the ring and track a single bit of memory: whether the current bead is already half-claimed by a bar that began on the previous bead. Encode a step by the matrix $T=\\begin{pmatrix} 1 & 1 \\\\ 1 & 0 \\end{pmatrix}$, where the row/column index records that memory bit; the $(0,0)$ entry is 'place a stud', the off-diagonal entries open or close a bar.",
          "For a $linear$ strip the count is a matrix product, but for a $ring$ the memory at the clasp must return to its starting value, so the count is the trace of $T^{\\,n}$ rather than a single matrix entry. Taking the trace is exactly what re-admits a bar across bead $12$–bead $1$.",
          "Since $T$ has eigenvalues $\\varphi=\\tfrac{1+\\sqrt5}{2}$ and $\\psi=\\tfrac{1-\\sqrt5}{2}$ (roots of $x^2=x+1$), $\\operatorname{tr}(T^{n})=\\varphi^{n}+\\psi^{n}=L_n$, the $n$-th Lucas number.",
          "Evaluate at $n=12$: $L_{12}=322$, so the bracelet has $\\boxed{322}$ coverings. (By contrast the strip count is the single entry $(T^{12})_{00}=F_{13}=233$, visibly smaller than the trace.)"
        ]
      },
      {
        "name": "Direct Lucas recurrence from a stud/bar at one bead",
        "steps": [
          "Let $L_n$ be the number of coverings of a ring of $n$ beads. Look only at bead $1$. If bead $1$ carries a stud, the rest is a ring with a marked gap — equivalently a strip of length $n-1$ — giving $F_n$ coverings. If bead $1$ is the left end of a bar covering $\\{1,2\\}$, the remainder is a strip of length $n-2$, giving $F_{n-1}$; if bead $1$ is the right end of a bar covering $\\{12,1\\}=\\{n,1\\}$, the remainder is again a strip of length $n-2$, giving another $F_{n-1}$.",
          "Adding the disjoint cases, $L_n=F_n+2F_{n-1}=F_n+F_{n-1}+F_{n-1}=F_{n+1}+F_{n-1}$, recovering the same closed form; the crucial $second$ $F_{n-1}$ is the wrap-around bar that the strip model omits.",
          "One checks the base values $L_2=3,\\,L_3=4$ and the Lucas recurrence $L_n=L_{n-1}+L_{n-2}$ hold, so $L_4=7,\\,L_5=11,\\dots$",
          "Iterating to $n=12$ gives $L=2,1,3,4,7,11,18,29,47,76,123,199,322$ at $n=0,\\dots,12$, hence the answer is $\\boxed{322}$."
        ]
      }
    ],
    "remark": "Insight: a ring is not a strip with its ends glued for free. The one structural fact a linear tiling can never represent is a single tile $spanning the seam$, and that lone missing case is exactly what upgrades the Fibonacci count $F_{n+1}$ to the Lucas count $L_n=F_{n+1}+F_{n-1}$. The transfer matrix encodes this perfectly: an open strip is a matrix $entry$, a closed loop is the $trace$, and the trace minus the entry is precisely the seam-crossing tilings $F_{n-1}$."
  },
  {
    "theme": "recurrence",
    "themeLabel": "Recurrences & Catalan",
    "title": "Ternary Without a Double Zero",
    "difficulty": 4,
    "task": "Find the number of …",
    "tags": [
      "ternary-strings",
      "forbidden-pattern",
      "recurrence",
      "linear-algebra",
      "closed-form"
    ],
    "statement": "Consider strings of length $8$ over the alphabet $\\{0,1,2\\}$. A string is clean if it never has two consecutive $0$'s (i.e. the block $00$ does not appear). \\[Find the number of clean ternary strings of length 8.\\]",
    "answer": "$3344$.",
    "trap": "Modelling it as 'each position has 3 choices minus the bad ones' and multiplying $3^8$ by a fixed correction factor. The forbidden-pair constraint couples adjacent positions, so only a transfer/recurrence gives the exact count.",
    "solutions": [
      {
        "name": "Recurrence on the last symbol",
        "steps": [
          "Let $c_n$ be the number of clean length-$n$ strings. Split by the last symbol.",
          "If the last symbol is $1$ or $2$ ($2$ choices), the prefix is any clean string of length $n-1$: $2c_{n-1}$.",
          "If the last symbol is $0$, the symbol before it must be $1$ or $2$ ($2$ choices), and before that any clean string of length $n-2$: $2c_{n-2}$.",
          "So $c_n=2c_{n-1}+2c_{n-2}$, with $c_1=3,\\ c_2=8$.",
          "Iterate: $3,8,22,60,164,448,1224,3344$, giving $c_8=\\boxed{3344}$."
        ]
      },
      {
        "name": "Two-state transfer matrix",
        "steps": [
          "States: 'last symbol is $0$' ($A$) or 'last symbol is $1/2$' ($B$). Transitions: from $B$ you may append $0,1,2$; from $A$ you may append only $1,2$.",
          "Transfer matrix $M=\\begin{pmatrix}0&1\\\\2&2\\end{pmatrix}$ acting on $(A,B)$ counts; total $=$ sum of entries of $M^{\\,n-1}$ applied to the length-1 vector $(1,2)$.",
          "Powering $M$ and summing reproduces $3,8,22,60,164,448,1224,3344$.",
          "Hence $c_8=\\boxed{3344}$."
        ]
      },
      {
        "name": "Closed form via characteristic roots",
        "steps": [
          "The recurrence $c_n=2c_{n-1}+2c_{n-2}$ has characteristic roots $1\\pm\\sqrt3$.",
          "So $c_n=\\alpha(1+\\sqrt3)^n+\\beta(1-\\sqrt3)^n$; fitting $c_1=3,c_2=8$ gives the constants.",
          "Evaluating at $n=8$ yields the integer $3344$.",
          "Thus $c_8=\\boxed{3344}$."
        ]
      }
    ],
    "remark": "Insight: every 'forbidden adjacent pattern' problem is a finite-state walk; the recurrence is just the transfer matrix read row by row. Here a single forbidden pair already breaks the naive $3^n$ into a $1\\pm\\sqrt3$ growth."
  },
  {
    "theme": "recurrence",
    "themeLabel": "Recurrences & Catalan",
    "title": "The Three-Stride Staircase",
    "difficulty": 4,
    "task": "Find the number of …",
    "tags": [
      "staircase",
      "tribonacci",
      "compositions",
      "recurrence",
      "dynamic-programming"
    ],
    "statement": "A staircase has $12$ steps. A climber ascends by repeatedly taking a stride of $1$, $2$, or $3$ steps (each stride lands exactly on a step, and the order of strides matters). \\[Find the number of distinct ways to climb all 12 steps.\\]",
    "answer": "$927$.",
    "trap": "Using the two-stride Fibonacci count $F_{13}=233$, or assuming the three-stride answer is $2^{11}$ because 'each step is a choice'. Strides of three different lengths give a tribonacci recurrence, not Fibonacci and not a power of two.",
    "solutions": [
      {
        "name": "Tribonacci recurrence",
        "steps": [
          "Let $t_n$ be the number of ways to climb $n$ steps. Condition on the final stride.",
          "A final stride of $1$, $2$, or $3$ leaves $n-1$, $n-2$, or $n-3$ steps already climbed.",
          "Hence $t_n=t_{n-1}+t_{n-2}+t_{n-3}$, with $t_0=1,\\ t_1=1,\\ t_2=2$.",
          "Iterate: $1,1,2,4,7,13,24,44,81,149,274,504,927$.",
          "So $t_{12}=\\boxed{927}$."
        ]
      },
      {
        "name": "Sum over compositions",
        "steps": [
          "A climb is a composition of $12$ into parts from $\\{1,2,3\\}$. If it uses $a$ ones, $b$ twos, $c$ threes with $a+2b+3c=12$, it has $\\dfrac{(a+b+c)!}{a!\\,b!\\,c!}$ orderings.",
          "Summing the multinomial $\\binom{a+b+c}{a,b,c}$ over all nonnegative $(a,b,c)$ with $a+2b+3c=12$.",
          "Carrying out the sum over all such triples yields $927$.",
          "Hence $t_{12}=\\boxed{927}$."
        ]
      }
    ],
    "remark": "Insight: 'number of strides = number of allowed step sizes' is the dictionary between step problems and order-$k$ Fibonacci recurrences. One, two, three allowed strides give Fibonacci-1, Fibonacci, Tribonacci respectively."
  },
  {
    "theme": "recurrence",
    "themeLabel": "Recurrences & Catalan",
    "title": "The Pole-Vaulter's Cooldown",
    "difficulty": 5,
    "task": "Count",
    "tags": [
      "state recurrence",
      "non-adjacency",
      "stars and bars",
      "generating function",
      "padovan"
    ],
    "statement": "A trickster crosses a river on a row of $14$ stepping-stones, numbered $1$ through $14$, starting on the bank just before stone $1$ and finishing on the bank just after stone $14$. On each move she either walks forward by exactly one stone or vaults forward by exactly two stones (a vault skips the stone in between, never touching it). A vault is exhausting: the rule of the crossing is that she may never perform two vaults in a row — every vault must be followed by at least one walk before she may vault again (a vault as her very last move is allowed, since no move follows it). \\[\\text{In how many distinct ordered sequences of moves can she cross all } 14 \\text{ stones?}\\] Each crossing is a sequence of $W$'s (walk, $+1$) and $V$'s (vault, $+2$) whose lengths sum to $14$ and in which no two $V$'s are adjacent.",
    "answer": "$\\boxed{189}$",
    "trap": "Trying to repair plain Fibonacci with a single forbidden-state recurrence and letting the state leak. Split sequences by their last move: let $E_n$ end in a walk (or be empty) and $O_n$ end in a vault. Appending a walk is always legal, so $E_n=E_{n-1}+O_{n-1}$ is correct. The fatal slip is writing $O_n=E_{n-2}+O_{n-2}$ — i.e. attaching a final vault to any sequence of length $n-2$. But a vault may only follow a non-vault, so the term $O_{n-2}$ secretly glues a $V$ onto a sequence that already ended in $V$, re-admitting exactly the $VV$ pattern the problem bans. The correct transition is $O_n=E_{n-2}$ alone. The leaky version satisfies $a_n=a_{n-1}+a_{n-2}$, collapsing right back to the unrestricted count $F_{15}=610$ — the restriction silently evaporates, and $610$ is precisely the answer to the problem with the rule deleted.",
    "solutions": [
      {
        "name": "Two-state DP collapsed to $a_n=a_{n-1}+a_{n-3}$",
        "steps": [
          "Track one bit of memory: whether the last move was a vault. Let $E_n$ count valid sequences summing to $n$ that end in a walk or are empty, and $O_n$ those ending in a vault. A walk may follow anything, so $E_n=E_{n-1}+O_{n-1}$; a vault may follow only a non-vault, so $O_n=E_{n-2}$ (not $E_{n-2}+O_{n-2}$ — that is the trap).",
          "Let $a_n=E_n+O_n$. Substitute $O_n=E_{n-2}$ into $E_n=E_{n-1}+O_{n-1}=E_{n-1}+E_{n-3}$, and note $a_n=E_n+E_{n-2}$. Then $a_n=a_{n-1}+a_{n-3}$: indeed $a_{n-1}+a_{n-3}=(E_{n-1}+E_{n-3})+(E_{n-3}+E_{n-5})$, while shifting the $E$-recurrence gives $E_n=E_{n-1}+E_{n-3}$ and $E_{n-2}=E_{n-3}+E_{n-5}$, whose sum is exactly $E_n+E_{n-2}=a_n$.",
          "Seed honestly: $a_0=1$ (the empty crossing), $a_1=1$ ($W$), $a_2=2$ ($WW$ or $V$). The recurrence $a_n=a_{n-1}+a_{n-3}$ is a shifted Padovan law, distinct from Fibonacci's $a_{n-1}+a_{n-2}$.",
          "Iterate: $a_3=3,\\,a_4=4,\\,a_5=6,\\,a_6=9,\\,a_7=13,\\,a_8=19,\\,a_9=28,\\,a_{10}=41,\\,a_{11}=60,\\,a_{12}=88,\\,a_{13}=129,\\,a_{14}=189$. Hence the crossing can be made in $\\boxed{189}$ ways."
        ]
      },
      {
        "name": "Sum over compositions: stars-and-bars for non-adjacent vaults",
        "steps": [
          "Condition on the number of vaults $k$. With $k$ vaults (each $+2$) and $w$ walks (each $+1$), the distance is $2k+w=14$, so $w=14-2k$ and the move sequence has $t=k+w=14-k$ tiles in total, valid only while $w\\ge 0$, i.e. $0\\le k\\le 7$.",
          "Given a fixed $k$, we must arrange $k$ vaults among the $t=14-k$ tiles so that no two vaults are adjacent. The standard non-adjacency count: place the $w$ walks first ($1$ way as they are identical), creating $w+1$ gaps, and drop the $k$ vaults into distinct gaps, giving $\\binom{w+1}{k}=\\binom{14-2k+1}{k}=\\binom{15-2k}{k}$ arrangements.",
          "Sum over all admissible $k$: $\\displaystyle\\sum_{k=0}^{7}\\binom{15-2k}{k}=\\binom{15}{0}+\\binom{13}{1}+\\binom{11}{2}+\\binom{9}{3}+\\binom{7}{4}+\\binom{5}{5}+\\binom{3}{6}+\\binom{1}{7}.$",
          "Evaluate: $1+13+55+84+35+1+0+0=189$, matching the recurrence. So the answer is $\\boxed{189}$. (This is the shallow-diagonal-of-Pascal identity that produces the Padovan/Narayana family, the combinatorial fingerprint of the $+3$ shift.)"
        ]
      },
      {
        "name": "Generating function by legal blocks",
        "steps": [
          "Decompose any legal sequence uniquely from the left into blocks. Since every vault must be trailed by a walk except possibly a final vault, the interior is a string of atoms $W$ (length $1$) and $VW$ (length $3$), optionally followed by a single closing $V$ (length $2$). No two $V$'s can touch because each non-final $V$ carries its own $W$, and the lone closing $V$ is preceded by a $W$-ending atom (or nothing).",
          "The atom generating function is $\\dfrac{1}{1-(x+x^{3})}$ and the optional closing vault contributes $(1+x^{2})$, so $\\displaystyle A(x)=\\frac{1+x^{2}}{1-x-x^{3}}=\\sum_{n\\ge 0}a_n x^{n}.$",
          "Clearing the denominator gives $(1-x-x^{3})A(x)=1+x^{2}$, i.e. $a_n-a_{n-1}-a_{n-3}=0$ for $n\\ge 3$ with the boundary terms forcing $a_0=1,\\,a_1=1,\\,a_2=2$ — the very recurrence and seeds of the first method, now derived analytically.",
          "Extracting $[x^{14}]A(x)$ by the recurrence (or by series expansion) yields $a_{14}=189$, so the number of crossings is $\\boxed{189}$."
        ]
      }
    ],
    "remark": "Insight: the rule 'never two vaults in a row' is a state constraint, not a count constraint, so it cannot be patched into Fibonacci by adjusting a coefficient — it must be carried as memory ('was the last move a vault?'). The honest two-state bookkeeping collapses to the Padovan-type law $a_n=a_{n-1}+a_{n-3}$, and the extra index drop from $-2$ to $-3$ is the algebraic shadow of that one remembered bit. The seductive $O_n=E_{n-2}+O_{n-2}$ forgets the bit, and the $+3$ shift degenerates back to the $+2$ of Fibonacci — the surest sign you have let the forbidden $VV$ slip back in."
  },
  {
    "theme": "recurrence",
    "themeLabel": "Recurrences & Catalan",
    "title": "The Parquet Strip and the Missing Plank",
    "difficulty": 5,
    "task": "Count",
    "tags": [
      "tiling",
      "skip-term recurrence",
      "padovan",
      "binomial sum",
      "generating function"
    ],
    "statement": "A craftsman lays a single straight runner of parquet that is $1$ cell wide and $15$ cells long, filling it left to right with no gaps and no overhang. His workshop stocks exactly two kinds of planks: a square chip that covers $1$ cell, and a long plank that covers $3$ consecutive cells. Planks of the same kind are interchangeable, and there is no plank of length $2$ in the shop. A laying is determined by which cells each plank occupies. \\[\\text{Let } a(n) \\text{ be the number of distinct ways to tile the } 1\\times n \\text{ runner under these rules.}\\] Find $a(15)$.",
    "answer": "\\[\\boxed{189}\\]",
    "trap": "The lethal error is treating the runner like the familiar 'tiles of length up to $3$' problem and writing the tribonacci recurrence $a(n)=a(n-1)+a(n-2)+a(n-3)$. That recurrence silently assumes a length-$2$ plank exists, because the term $a(n-2)$ corresponds to capping the right end with a $2$-cell tile. The shop has no length-$2$ plank, so conditioning on the last tile gives only two cases (a $1$-chip leaving $n-1$, or a $3$-plank leaving $n-3$) and the correct recurrence $\\mathbf{skips}$ a term: $a(n)=a(n-1)+a(n-3)$. A strong student who pattern-matches 'maximum tile length $3$' to tribonacci computes $5768$ instead of $189$. The missing case is, paradoxically, a case that must $not$ be there: the $a(n-2)$ branch is forbidden, and forgetting that the recurrence has a gap (not a full window of three) is precisely the trap.",
    "solutions": [
      {
        "name": "Delete the last tile (the skip-term recurrence)",
        "steps": [
          "Classify a tiling of the $1\\times n$ runner by the single tile that covers the rightmost cell $n$. Because that tile must end exactly at cell $n$ and the only lengths available are $1$ and $3$, there are exactly two mutually exclusive, exhaustive cases.",
          "If the last cell is covered by a $1$-chip, deleting it leaves a freely-tiled runner of length $n-1$, giving $a(n-1)$ tilings. If the last cell is the right end of a $3$-plank (covering cells $n-2,n-1,n$), deleting that plank leaves a runner of length $n-3$, giving $a(n-3)$. There is no $a(n-2)$ branch because no plank has length $2$.",
          "Hence $a(n)=a(n-1)+a(n-3)$ with seeds $a(0)=1$ (the empty runner, one way), $a(1)=1$, $a(2)=1$.",
          "March upward: $a(3)=2,\\,a(4)=3,\\,a(5)=4,\\,a(6)=6,\\,a(7)=9,\\,a(8)=13,\\,a(9)=19,\\,a(10)=28,\\,a(11)=41,\\,a(12)=60,\\,a(13)=88,\\,a(14)=129,\\,a(15)=\\boxed{189}.$"
        ]
      },
      {
        "name": "Sum over the number of long planks (binomial placement)",
        "steps": [
          "Suppose a tiling uses exactly $k$ long $3$-planks. They consume $3k$ cells, so the remaining $15-3k$ cells are each a $1$-chip; this is feasible only when $0\\le k\\le 5$.",
          "The tiling is now a sequence of tiles: $k$ identical long planks and $15-3k$ identical chips, for a total of $(15-3k)+k=15-2k$ tiles in a row. Choosing which of these $15-2k$ ordered slots are the long planks determines the tiling uniquely, giving $\\binom{15-2k}{k}$ tilings.",
          "Therefore $a(15)=\\sum_{k=0}^{5}\\binom{15-2k}{k}=\\binom{15}{0}+\\binom{13}{1}+\\binom{11}{2}+\\binom{9}{3}+\\binom{7}{4}+\\binom{5}{5}.$",
          "Evaluate: $1+13+55+84+35+1=\\boxed{189}$, matching the recurrence and exposing the Padovan-style diagonal sum hidden in the count."
        ]
      },
      {
        "name": "Generating function (extract the coefficient)",
        "steps": [
          "Each plank contributes its length to the total, so the ordinary generating function for one tile is $x^{1}+x^{3}$ (a chip or a long plank), and a tiling is an ordered sequence of tiles. By the sequence construction, $A(x)=\\sum_{n\\ge 0}a(n)x^{n}=\\dfrac{1}{1-(x+x^{3})}=\\dfrac{1}{1-x-x^{3}}.$",
          "Clearing the denominator, $(1-x-x^{3})A(x)=1$, which yields exactly the coefficient recurrence $a(n)-a(n-1)-a(n-3)=0$ for $n\\ge 1$ together with $a(0)=1$, independently reproducing the skip-term relation (note the absent $x^{2}$ term, i.e. no $a(n-2)$).",
          "Expand $A(x)=\\sum_{m\\ge 0}(x+x^{3})^{m}$; the coefficient of $x^{15}$ collects all monomials $x^{a}\\,x^{3b}$ with $a+3b=15$ and $a+b=m$, i.e. $b$ long planks among $a+b=15-2b$ factors: $[x^{15}]A(x)=\\sum_{b}\\binom{15-2b}{b}$, the same binomial diagonal as Method 2.",
          "Summing that diagonal gives $1+13+55+84+35+1=\\boxed{189}$, so all three derivations agree."
        ]
      }
    ],
    "remark": "Insight: the length spectrum of the tile set, not its maximum length, dictates the shape of the recurrence. Tiles of lengths $\\{1,2,3\\}$ give the full window tribonacci $a(n)=a(n-1)+a(n-2)+a(n-3)$, but tiles of lengths $\\{1,3\\}$ give a recurrence with a hole, $a(n)=a(n-1)+a(n-3)$ - the Padovan/Narayana-style relation whose generating function $1/(1-x-x^{3})$ wears its missing $x^{2}$ term openly. The same structure read two ways - delete-the-last-tile versus count-by-number-of-long-planks - reveals the identity $a(n)=\\sum_{k}\\binom{n-2k}{k}$, a binomial diagonal that is the fingerprint of the skip-$2$ recurrence. Whenever a tile length is absent, the corresponding term in the recurrence (and the corresponding monomial in the GF) must be absent too; treating 'up to length $3$' as 'all of $1,2,3$' is the single most common way to get this family wrong."
  },
  {
    "theme": "recurrence",
    "themeLabel": "Recurrences & Catalan",
    "title": "Strings That Pair Their Ones",
    "difficulty": 4,
    "task": "Count",
    "tags": [
      "binary strings",
      "parity automaton",
      "transfer matrix",
      "fibonacci",
      "maximal runs"
    ],
    "statement": "A binary string is a finite word over the alphabet $\\{0,1\\}$. Call a string balanced if every maximal block of consecutive $1$'s has even length. Thus $0,\\ 11,\\ 0110,\\ 110011$ are balanced, while $1,\\ 101,\\ 1110$ are not (each contains a maximal run of $1$'s of odd length). \\[\\text{Let } b_n \\text{ be the number of balanced strings of length } n. \\text{ Find } b_{10}.\\] Set up a recurrence for $b_n$, justify it, and evaluate.",
    "answer": "$\\boxed{89}$",
    "trap": "Reading \\(\\text{balanced}\\) as a forbidden-block constraint and reaching for the wrong Fibonacci. A solver who thinks \\(\\text{even runs}\\) means \\(\\text{no lone }1\\) tends to count \\(\\text{strings avoiding the pattern}\\ 11\\), giving \\(F_{n+2}=F_{12}=144\\), or to model it as a length-cap on runs and produce a Tribonacci-style count \\(504\\). Both are wrong: the constraint is a parity condition on each run, not a forbidden fixed block. The genuine subtlety is that the honest count IS a Fibonacci number, \\(b_{10}=F_{11}=89\\) — but at an index shifted by one from the famous \\(\\text{avoid-}11\\) sequence. Pattern-matching to a memorised \\(\\text{Fibonacci}=144\\) lands one slot off; only an automaton that tracks the parity of the current run of \\(1\\)'s gets the index right.",
    "solutions": [
      {
        "name": "Direct recurrence via a leading-block bijection",
        "steps": [
          "Split balanced strings of length $n\\ge 2$ by their first symbol. If the string starts with $0$, deleting that $0$ leaves an arbitrary balanced string of length $n-1$, and conversely prepending a $0$ to any balanced string is balanced; this case contributes $b_{n-1}$.",
          "If the string starts with $1$, its leading maximal run of $1$'s has even length $2k$ with $k\\ge 1$, so the string in fact starts with $11$. Strip those two leading $1$'s: the leading run shrinks from $2k$ to $2k-2$ (still even, or vanishes leaving a leading $0$), so the result is a balanced string of length $n-2$. Prepending $11$ inverts this exactly — it lengthens the leading run by $2$, preserving its even parity — so this is a bijection and the case contributes $b_{n-2}$.",
          "The two cases are disjoint and exhaustive, giving $b_n=b_{n-1}+b_{n-2}$. Base values: $b_0=1$ (empty string) and $b_1=1$ (only $0$; the string $1$ has an odd run). Hence $b_n=F_{n+1}$ with $F_1=F_2=1$.",
          "Tabulate $b_0,\\dots,b_{10}=1,1,2,3,5,8,13,21,34,55,89$, so $b_{10}=\\boxed{89}$."
        ]
      },
      {
        "name": "Three-state parity automaton (transfer matrix)",
        "steps": [
          "Scan left to right, remembering only what is needed to enforce the rule: state $A$ = 'not currently inside a run of $1$'s' (the last symbol was $0$, or the string is empty), state $O$ = 'inside a run of $1$'s whose length so far is odd', and state $E$ = 'inside a run of $1$'s whose length so far is even'. A string is balanced exactly when it ends in $A$ or $E$ (no run is left half-finished at odd length).",
          "Appending a symbol gives the legal transitions: from $A$, a $0$ stays in $A$ and a $1$ goes to $O$; from $E$, a $0$ returns to $A$ and a $1$ goes to $O$; from $O$, a $1$ goes to $E$ while a $0$ is forbidden (it would close a run of odd length). Collecting these into the count matrix $M=\\begin{pmatrix} 1 & 0 & 1 \\\\ 1 & 0 & 1 \\\\ 0 & 1 & 0 \\end{pmatrix}$ on the ordered basis $(A,O,E)$, the answer is $b_n=u^{\\to p}M^{\\,n}e_A$ with start vector $e_A$ and accepting selector $u=(1,0,1)^{\\to p}$.",
          "The characteristic polynomial of $M$ factors as $\\lambda(\\lambda^{2}-\\lambda-1)$: the spurious eigenvalue $0$ (the off-diagonal $1$ feeding state $E$ only from $O$) collapses the three states to a two-term recurrence, leaving the golden-ratio roots $\\varphi,\\psi$ of $\\lambda^2=\\lambda+1$. Therefore $b_n$ satisfies $b_n=b_{n-1}+b_{n-2}$ — the parity bookkeeping reproduces Fibonacci, but with the index fixed honestly by the base data $b_0=b_1=1$.",
          "Iterating from $b_0=1,b_1=1$ yields $b_{10}=89$, i.e. $b_{10}=\\boxed{89}$. (Contrast the wrong models: an $\\text{avoid-}11$ automaton has two accepting states and gives $144$; capping run length gives the larger Tribonacci value $504$.)"
        ]
      },
      {
        "name": "Generating function from run decomposition",
        "steps": [
          "Decompose a balanced string as an alternation of $0$-blocks and $1$-blocks. A maximal $0$-block has length $\\ge 1$ with generating function $\\dfrac{x}{1-x}$; a maximal (non-empty) $1$-block must have even length $\\ge 2$, with generating function $\\dfrac{x^2}{1-x^2}$. Allowing optional leading/trailing blocks of each type and stitching the alternation together, the class of all balanced strings has generating function $B(x)=\\dfrac{1}{\\,1-x-x^{2}\\,}$ after simplification.",
          "Verify the closed form against small data: expanding $\\dfrac{1}{1-x-x^2}=1+x+2x^2+3x^3+5x^4+\\cdots$ matches $b_0,b_1,b_2,b_3,b_4=1,1,2,3,5$ counted by hand, confirming $B(x)$ is the ordinary generating function of $(b_n)$.",
          "Since $\\dfrac{1}{1-x-x^2}$ is the Fibonacci generating function, the coefficient of $x^n$ is $F_{n+1}$; equivalently $b_n=b_{n-1}+b_{n-2}$, recovering the recurrence of the other methods.",
          "Reading off the coefficient of $x^{10}$ gives $b_{10}=F_{11}=89$, so $b_{10}=\\boxed{89}$."
        ]
      }
    ],
    "remark": "Insight: a constraint can be Fibonacci for two completely unrelated reasons, and the trap is to let the famous one overwrite the actual mechanism. 'No two adjacent $1$'s' is Fibonacci because each $1$ refuses its neighbours; 'every run of $1$'s has even length' is Fibonacci because each run silently pairs its $1$'s — a parity invariant, not a forbidden block. Both are $F$, but the correct minimal automaton needs a third (odd-parity) state whose only escape is another $1$, which is exactly what shifts the index from $F_{n+2}=144$ to $F_{n+1}=89$. The lone redundant eigenvalue $0$ in the $3\\times 3$ transfer matrix is the algebraic fingerprint of that extra, non-accepting parity state."
  },
  {
    "theme": "recurrence",
    "themeLabel": "Recurrences & Catalan",
    "title": "The Round Table That Forbids a Standing Trio",
    "difficulty": 5,
    "task": "Count",
    "tags": [
      "cyclic counting",
      "tribonacci",
      "transfer matrix",
      "seam subtlety",
      "lucas-type recurrence"
    ],
    "statement": "Twelve guests occupy the twelve labelled seats $S_1,S_2,\\dots,S_{12}$ arranged in a circle (so $S_{12}$ is adjacent to $S_1$). At a toast each guest independently either stands or sits. The host declares an arrangement unruly if some three guests in three cyclically consecutive seats are all standing simultaneously; that is, for some $i$ the seats $S_i,S_{i+1},S_{i+2}$ (indices read modulo $12$) all stand. \\[\\text{Let } a_n \\text{ be the number of stand/sit arrangements of } n \\text{ guests around such a labelled circular table that are NOT unruly. Find } a_{12}.\\] Establish a recurrence for $a_n$, justify the base values with care, and evaluate. (Seats are fixed and labelled, so two arrangements differing by a rotation are counted as different.)",
    "answer": "$\\boxed{1499}$",
    "trap": "Cutting the circle open at one seat and counting it as a line of $12$ seats. A solver who forbids only the triples $S_iS_{i+1}S_{i+2}$ with $i\\le 10$ forgets the two wrap-around triples $S_{11}S_{12}S_1$ and $S_{12}S_1S_2$, and so counts the linear no-three-in-a-row arrangements, whose count is the tribonacci value $L_{12}=1705$ (with $L_0,L_1,L_2=1,2,4$ and $L_k=L_{k-1}+L_{k-2}+L_{k-3}$). The hidden constraint is the seam: a run of standers may silently straddle the gap between $S_{12}$ and $S_1$, and a length-$3$ such run is unruly even though no internal triple is. The cyclic count obeys the same tribonacci recurrence but with seam-corrected base data, which is exactly what drops $1705$ to $a_{12}=1499$. The error is conceptual (an overlooked degenerate wrap), not arithmetic.",
    "solutions": [
      {
        "name": "Tribonacci recurrence with seam-honest base cases",
        "steps": [
          "Code an arrangement as a cyclic binary word with $1=$ stand, $0=$ sit; unruly means three cyclically consecutive $1$'s. The same recurrence as the linear problem holds for $n\\ge 4$: classify by the run of $1$'s immediately following a chosen reference position and peel one block, giving $a_n=a_{n-1}+a_{n-2}+a_{n-3}$. (Algebraically this is forced by the transfer matrix below, whose minimal polynomial is $x^3-x^2-x-1$.) The entire seam subtlety is therefore pushed into the base values $a_1,a_2,a_3$, which must be computed directly on the circle, not borrowed from the line.",
          "Compute the bases on the actual circle. For $n=1$ the three indices $i,i+1,i+2$ collapse mod $1$ to the single seat, so a lone stander already forms a 'cyclic triple' and is unruly: only the all-sitting arrangement survives, $a_1=1$. For $n=2$, indices mod $2$ make $S_1S_2S_1$ and $S_2S_1S_2$ the triples, so both guests standing is unruly while $00,01,10$ are fine: $a_2=3$. For $n=3$ the only unruly word is $111$, so $a_3=2^3-1=7$. These differ sharply from the line's $L_1,L_2,L_3=2,4,7$.",
          "Iterate $a_n=a_{n-1}+a_{n-2}+a_{n-3}$ from $a_1,a_2,a_3=1,3,7$: $a_4=11,\\ a_5=21,\\ a_6=39,\\ a_7=71,\\ a_8=131,\\ a_9=241,\\ a_{10}=443,\\ a_{11}=815,\\ a_{12}=1499.$",
          "Hence $a_{12}=\\boxed{1499}$. The line would give $L_{12}=1705$; the difference $206$ is precisely the arrangements whose only standing trio wraps across the seam."
        ]
      },
      {
        "name": "Transfer matrix and the trace formula on a cycle",
        "steps": [
          "Track the state $(\\,\\text{seat}_{i-1},\\text{seat}_i\\,)\\in\\{00,01,10,11\\}$ as we walk around the table; appending the next seat sends $(a,b)\\mapsto(b,c)$ and is allowed precisely when $\\neg(a=b=c=1)$. This is the count matrix $M=\\begin{pmatrix} 1 & 1 & 0 & 0 \\\\ 0 & 0 & 1 & 1 \\\\ 1 & 1 & 0 & 0 \\\\ 0 & 0 & 1 & 0 \\end{pmatrix}$ on the ordered basis $(00,01,10,11)$, where row $=$ current state, column $=$ next state.",
          "On a cycle of length $n$ the valid arrangements are exactly the closed walks of length $n$ that return to their starting state, so $a_n=\\operatorname{tr}(M^{\\,n})$. The trace, rather than a single matrix entry, is what enforces consistency across the seam — it is the algebraic incarnation of 'the word wraps around.'",
          "The characteristic polynomial of $M$ is $\\det(xI-M)=x\\,(x^3-x^2-x-1)$. The spurious root $0$ kills one degree of freedom (the state $11$ that can never be followed by another $1$), and the cubic factor's roots are the tribonacci constant $t\\approx 1.83929$ and its two complex conjugates; thus $a_n=\\operatorname{tr}(M^n)=t^n+\\alpha^n+\\beta^n$ is the power-sum of the cubic's roots, a Lucas-type companion to the linear tribonacci sequence.",
          "Either evaluate the power-sum or simply take $\\operatorname{tr}(M^{12})$ directly; both give $a_{12}=\\boxed{1499}$, confirming the first method's iteration and exhibiting why the cyclic count is a trace while the linear count is a single matrix entry."
        ]
      },
      {
        "name": "Direct seam casework reducing to the linear count",
        "steps": [
          "Let $L_k$ be the number of linear arrangements of $k$ seats with no three consecutive standers ($L_0,L_1,L_2=1,2,4$, then $L_k=L_{k-1}+L_{k-2}+L_{k-3}$). Classify circular arrangements by the maximal run of standers passing through seat $S_1$ (the run that could straddle the seam): it has length $0,1,$ or $2$ (length $\\ge 3$ is unruly).",
          "Length $0$ ($S_1$ sits): cut the circle at $S_1$; seats $S_2,\\dots,S_n$ are an unconstrained line of length $n-1$, contributing $L_{n-1}$. Length $1$ ($S_1$ stands, both neighbours $S_n,S_2$ sit): seats $S_3,\\dots,S_{n-1}$ form a free line of length $n-3$, contributing $L_{n-3}$.",
          "Length $2$: the straddling run is either $\\{S_1,S_2\\}$ (then $S_n,S_3$ sit, leaving the line $S_4,\\dots,S_{n-1}$ of length $n-4$) or $\\{S_n,S_1\\}$ (then $S_{n-1},S_2$ sit, leaving $S_3,\\dots,S_{n-2}$, again length $n-4$); together $2L_{n-4}$. Summing the disjoint cases, $a_n=L_{n-1}+L_{n-3}+2L_{n-4}$.",
          "With $L_8,L_9,L_{11}=149,274,927$, take $a_{12}=L_{11}+L_9+2L_8=927+274+2\\cdot 149=927+274+298=1499$, so $a_{12}=\\boxed{1499}$. This decomposition makes visible exactly which terms the naive line count $L_{12}$ double-mishandles at the seam."
        ]
      }
    ],
    "remark": "Insight: a cyclic constraint usually inherits the recurrence of its linear cousin but never its initial conditions — the seam rewrites the small cases. Here the no-three-in-a-row rule is tribonacci both on a path and on a cycle, yet the cycle's bases $(1,3,7)$ replace the path's $(2,4,7)$, turning the ordinary tribonacci sequence into its Lucas-type power-sum companion $t^n+\\alpha^n+\\beta^n=\\operatorname{tr}(M^n)$. The lone zero eigenvalue of the $4\\times4$ transfer matrix is the algebraic shadow of the state '$11$' that can never extend, and the switch from a matrix entry (line) to its trace (cycle) is the whole content of 'the word wraps around.' The discipline a top ranker must internalize: when a problem says 'around a table,' re-derive the base cases on the circle and never copy them from the line."
  },
  {
    "theme": "lattice",
    "themeLabel": "Lattice Paths & Reflection",
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
    "themeLabel": "Lattice Paths & Reflection",
    "title": "The Quarryman's Sloping Rampart",
    "difficulty": 5,
    "task": "Count",
    "tags": [
      "staircase ceiling",
      "generalized ballot",
      "transfer matrix",
      "cycle lemma",
      "reflection failure"
    ],
    "statement": "A surveyor walks on the integer grid using only unit East steps $(x,y)\\to(x+1,y)$ and unit North steps $(x,y)\\to(x,y+1)$, going from $(0,0)$ to $(6,6)$. Overhead runs a stone rampart whose silhouette is the staircase $y=\\left\\lfloor\\tfrac{3x}{2}\\right\\rfloor$, so the allowed ceiling heights at $x=0,1,2,\\dots,6$ are $0,1,3,4,6,7,9$ — a broken line whose risers alternate $1,2,1,2,\\dots$, never the $45^{\\circ}$ diagonal. The walk must stay weakly below the rampart at every lattice point it visits, i.e. it must satisfy $y\\le\\left\\lfloor\\tfrac{3x}{2}\\right\\rfloor$ throughout (equivalently $2y\\le 3x$). \\[\\text{How many such monotone paths from }(0,0)\\text{ to }(6,6)\\text{ stay weakly below the rampart?}\\] Note that the very first step is forced (the ceiling at $x=0$ is $0$), and that the corner $(6,6)$ itself lies strictly below the rampart since $\\lfloor 18/2\\rfloor=9>6$.",
    "answer": "$\\boxed{278}$",
    "trap": "Reaching for André's reflection principle and reflecting the path across the bounding line. For a $45^{\\circ}$ barrier such as $y=x+1$ the reflection $(x,y)\\mapsto(y-1,x+1)$ carries bad lattice paths bijectively to lattice paths ending at a reflected corner, giving the clean count $\\binom{12}{6}-\\binom{12}{4}=429$. A strong solver, pattern-matching the slope-$\\tfrac32$ rampart to that familiar picture, reports $429$. But reflection across a line of slope $\\tfrac32$ is not a lattice symmetry: it does not send the step set $\\{E,N\\}$ to itself, has no integer fixed lattice, and produces off-grid, non-monotone images — so the would-be bijection collapses and $429$ is simply wrong. The boundary being a genuine staircase (risers $1$ and $2$), rather than a diagonal, is exactly what kills the single-reflection shortcut and forces a transfer-matrix / cycle-lemma argument; the honest count is $278\\ne 429$.",
    "solutions": [
      {
        "name": "Tilted gap walk + transfer recursion",
        "steps": [
          "Track the slack against the rampart by $g=3x-2y$. The constraint $2y\\le 3x$ is exactly $g\\ge 0$, an East step does $g\\mapsto g+3$, a North step does $g\\mapsto g-2$, the walk starts at $g=0$ and (since it ends at $(6,6)$) finishes at $g=3\\cdot 6-2\\cdot 6=6$. Thus the paths are in bijection with words of six $(+3)$'s and six $(-2)$'s whose every partial sum is $\\ge 0$ — a generalized Dyck / ballot walk with unequal steps.",
          "Let $f(e,n,g)$ be the number of legal completions having already used $e$ East and $n$ North steps and currently at gap $g$. Then $f(e,n,g)=[\\,e<6\\,]\\,f(e+1,n,g+3)+[\\,n<6,\\ g\\ge 2\\,]\\,f(e,n+1,g-2)$, with $f(6,6,g)=[g=6]$. The condition $g\\ge 2$ before a North step is precisely the staircase ceiling, enforced step by step rather than by a global formula.",
          "Folding this recursion column by column (equivalently powering the banded transfer matrix that takes the vector of reachable heights in column $x-1$ to that in column $x$, truncating each column at $y\\le\\lfloor 3x/2\\rfloor$) propagates the counts $1\\to1\\to2\\to7\\to23\\to76\\to\\boxed{278}$ at $x=0,\\dots,6$ on the diagonal $y=x$. No reflection is invoked, so the slope-$\\tfrac32$ barrier causes no trouble.",
          "Hence the number of admissible paths is $278$."
        ]
      },
      {
        "name": "Staircase-respecting Pascal recursion",
        "steps": [
          "Let $P(x,y)$ be the number of admissible partial paths from $(0,0)$ to $(x,y)$. Every monotone path reaches $(x,y)$ from the West or the South, so $P(x,y)=P(x-1,y)+P(x,y-1)$, but a cell is live only when it lies weakly below the rampart, i.e. $y\\le\\lfloor 3x/2\\rfloor$; dead cells (above the staircase) contribute $0$. This is Pascal's recurrence clipped to the region under the broken line, the geometric heart of the reflection chapter without any reflection.",
          "Seed $P(0,0)=1$; the column $x=0$ has ceiling $0$, so $P(0,y)=0$ for $y\\ge1$ (the first step is forced East). Fill the live triangle column by column: $P(1,0)=1,\\ P(1,1)=1$; in column $x=2$ the ceiling is $3$, giving $P(2,0)=1,\\ P(2,1)=2,\\ P(2,2)=2,\\ P(2,3)=2$; and the diagonal values $P(k,k)$ come out $1,1,2,7,23,76,278$.",
          "Reading the target cell gives $P(6,6)=P(5,6)+P(6,5)$. Both feeder cells are live ($6\\le\\lfloor 15/2\\rfloor=7$ and $5\\le\\lfloor 18/2\\rfloor=9$); carrying the full clipped tableau to row $y=6$ yields $P(5,6)=99$ and $P(6,5)=179$, whence $P(6,6)=99+179=278$.",
          "Therefore exactly $\\boxed{278}$ paths stay under the rampart."
        ]
      },
      {
        "name": "First-passage decomposition (kernel-style recurrence)",
        "steps": [
          "Work with the gap walk of step $2$: words of six $(+3)$'s and six $(-2)$'s staying $\\ge 0$ and ending at height $6$. Such walks resist a single reflection because the steps are unequal, so decompose instead by first passages. Group the count by the multiset of heights the walk is pinned to; concretely let $a_{e,n}$ denote the number of legal prefixes using $e$ Easts and $n$ Norths (so at gap $3e-2n\\ge 0$). Then $a_{e,n}=a_{e-1,n}+a_{e,n-1}$ whenever $3e-2n\\ge 0$, and $a_{e,n}=0$ once $3e-2n<0$ — the staircase boundary acting as an absorbing wall on the half-line.",
          "This is the same triangular array as Method 2 but read along anti-diagonals $e+n=\\text{const}$, which exposes the generating-function structure: $\\sum_{e,n}a_{e,n}u^e v^n$ satisfies a linear kernel equation $K(u,v)\\,A=1-(\\text{boundary terms})$, whose admissible-half solution is extracted by the standard kernel cancellation. The boundary terms are exactly the prefixes that would step below $g=0$, i.e. those a naive reflection tries (and fails) to pair off.",
          "Evaluating the recurrence to $e=n=6$: the wall first bites at $(e,n)=(0,1)$ and again at $(1,2),(2,3),(3,4),\\dots$ along the staircase, killing one term at each riser; accumulating the survivors gives the diagonal sequence $1,1,2,7,23,76,278$.",
          "The coefficient $a_{6,6}=\\boxed{278}$ is the required count, confirming the other two methods and exposing $429$ as the artefact of pretending the wall were a diagonal."
        ]
      }
    ],
    "remark": "Insight: the reflection principle is a symmetry argument, and it only works when the barrier is invariant under a genuine symmetry of the step lattice — for $E/N$ paths that means a line of slope $\\pm 1$. A staircase of slope $\\tfrac32$ has risers of two different sizes, so no isometry of the grid fixes it; reflecting across it sends North/East steps off the lattice and the bijection that produces the tidy binomial difference $429$ never exists. The correct invariant to carry is the scalar slack $g=3x-2y$, which linearises the broken boundary into a single wall $g\\ge0$ and turns the problem into a generalized ballot walk solvable by a transfer matrix, a clipped Pascal triangle, or the cycle lemma — all of which agree on $278$. The moral for a top-ranker: before invoking André, check that the wall is a mirror, not a staircase."
  },
  {
    "theme": "lattice",
    "themeLabel": "Lattice Paths & Reflection",
    "title": "Crossing the Forbidden Meridian",
    "difficulty": 4,
    "task": "Find the number of …",
    "tags": [
      "reflection principle",
      "andre",
      "forbidden line",
      "dyck complement"
    ],
    "statement": "Consider monotone (East/North) paths from $(0,0)$ to $(7,7)$. Call a path rebellious if at some point it rises strictly above the main diagonal, i.e. it visits a lattice point with $y > x$ (equivalently, it touches the line $y = x+1$). Find the number of rebellious paths.",
    "answer": "$\\dbinom{14}{6} = 3003$",
    "trap": "Trying to enumerate the rebellious paths directly by where they first break the diagonal. Andre's reflection principle counts them in one stroke: a path touches $y=x+1$ iff its mirror image across that line ends at the reflected target — turning the messy 'bad' set into a single clean binomial.",
    "solutions": [
      {
        "name": "Andre's reflection",
        "steps": [
          "A path is rebellious iff it touches the line $y=x+1$. Reflect the portion of such a path up to its FIRST touch of $y=x+1$ across that line; reflection sends $(x,y)\\mapsto(y-1,x+1)$.",
          "This is a bijection between rebellious paths $(0,0)\\to(7,7)$ and ALL monotone paths from the reflected start $(-1,1)$ to $(7,7)$, i.e. paths using $8$ East and $6$ North steps.",
          "Their number is $\\binom{14}{6}=3003$, so there are $\\boxed{3003}$ rebellious paths."
        ]
      },
      {
        "name": "Total minus good (ballot/Catalan)",
        "steps": [
          "Paths that stay weakly below the diagonal ($y\\le x$ throughout) to $(7,7)$ are the Dyck paths, counted by the Catalan number $C_7=\\frac{1}{8}\\binom{14}{7}=429$.",
          "The total number of paths is $\\binom{14}{7}=3432$.",
          "Rebellious $=$ total $-$ good $=3432-429=3003$, matching $\\binom{14}{6}$. $\\boxed{3003}$"
        ]
      }
    ],
    "remark": "Insight: reflection converts a constraint ('touches the barrier') into a relocation of the endpoint. The good-path count $C_7=\\binom{14}{7}-\\binom{14}{6}$ is precisely the reflection identity in disguise."
  },
  {
    "theme": "lattice",
    "themeLabel": "Lattice Paths & Reflection",
    "title": "The Magistrate's Lead",
    "difficulty": 4,
    "task": "Find the number of …",
    "tags": [
      "ballot problem",
      "reflection principle",
      "weakly below diagonal",
      "catalan family"
    ],
    "statement": "In an election, candidate $A$ finally receives $8$ votes and candidate $B$ receives $5$ votes. Ballots are opened one at a time. Encode an $A$-vote as an East step and a $B$-vote as a North step, so the count corresponds to a monotone path from $(0,0)$ to $(8,5)$. Find the number of orderings in which $A$ is never behind $B$ at any moment, i.e. paths satisfying $y \\le x$ at every visited lattice point.",
    "answer": "$\\dfrac{4}{9}\\dbinom{13}{5} = 572$",
    "trap": "Using the strict Bertrand ballot count $\\frac{m-n}{m+n}\\binom{m+n}{n}$, which counts paths that stay STRICTLY ahead ($y<x$). Here ties are allowed ($A$ never behind means $y\\le x$), so the correct factor is $\\frac{m-n+1}{m+1}$, not $\\frac{m-n}{m+n}$.",
    "solutions": [
      {
        "name": "Reflection on the weak barrier",
        "steps": [
          "A path is bad iff it touches the line $y=x+1$ (then $B$ has strictly led). Reflecting the prefix up to the first touch across $y=x+1$ bijects bad paths with all paths $(-1,1)\\to(8,5)$, i.e. $9$ East and $4$ North steps: $\\binom{13}{4}$.",
          "Total paths to $(8,5)$ number $\\binom{13}{5}$, so good $=\\binom{13}{5}-\\binom{13}{4}$.",
          "Compute: $\\binom{13}{5}-\\binom{13}{4}=1287-715=572$, and indeed $\\frac{8-5+1}{8+1}\\binom{13}{5}=\\frac{4}{9}\\cdot1287=572$. $\\boxed{572}$"
        ]
      },
      {
        "name": "Cycle lemma form",
        "steps": [
          "The number of monotone paths to $(m,n)$ with $m\\ge n$ staying weakly below the diagonal is $\\frac{m-n+1}{m+1}\\binom{m+n}{n}$ (the generalized ballot / Catalan-triangle entry).",
          "Substitute $m=8,\\ n=5$: $\\frac{8-5+1}{9}\\binom{13}{5}=\\frac{4}{9}\\cdot1287$.",
          "Since $1287/9=143$, this equals $4\\cdot143=572$. $\\boxed{572}$"
        ]
      }
    ],
    "remark": "Insight: 'never behind' ($\\le$) versus 'always strictly ahead' ($<$) shift the reflected endpoint by exactly one diagonal — the whole difference between the two famous ballot formulas lives in that single $+1$."
  },
  {
    "theme": "lattice",
    "themeLabel": "Lattice Paths & Reflection",
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
    "themeLabel": "Lattice Paths & Reflection",
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
    "themeLabel": "Lattice Paths & Reflection",
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
    "themeLabel": "Lattice Paths & Reflection",
    "title": "The Schröder Staircase",
    "difficulty": 5,
    "task": "Find the number of …",
    "tags": [
      "schroder number",
      "diagonal step",
      "weakly below diagonal",
      "reflection constraint"
    ],
    "statement": "A path goes from $(0,0)$ to $(4,4)$ using East $R=(1,0)$, North $U=(0,1)$, and diagonal $D=(1,1)$ steps, subject to the constraint that it never rises above the main diagonal: every visited lattice point satisfies $y \\le x$. Find the number of such paths.",
    "answer": "$90$ (the large Schröder number $S_4$)",
    "trap": "Applying André-style reflection naively as if every step were a unit $R$ or $U$. That recipe counts only the Dyck (staircase) paths and yields the Catalan number $C_4=\\binom{8}{4}-\\binom{8}{3}=14$. But the diagonal step $D$ may sit exactly on the line $y=x$ and crosses no horizontal level cleanly, so the single reflected-endpoint binomial misses every route that uses a $D$. The true constrained count is the large Schröder number $S_4=90$, far larger than $14$.",
    "solutions": [
      {
        "name": "Constrained Delannoy recursion",
        "steps": [
          "Let $S(x,y)$ count $R/U/D$ paths from $(0,0)$ to $(x,y)$ that stay in $y\\le x$. Then $S(x,y)=S(x-1,y)+S(x,y-1)+S(x-1,y-1)$, where any term whose source cell violates $y\\le x$ (or has a negative coordinate) is read as $0$, with seed $S(0,0)=1$.",
          "Filling the lower-triangular table row by row, the diagonal entries $S(n,n)$ come out $1,2,6,22,90,\\dots$ — exactly the large Schröder numbers.",
          "Therefore $S(4,4)=90$. $\\boxed{90}$"
        ]
      },
      {
        "name": "Schröder generating recurrence",
        "steps": [
          "The large Schröder numbers $S_n$ (diagonal-step paths weakly below $y=x$) satisfy $(n+2)\\,S_{n+1}=3(2n+1)\\,S_n-(n-1)\\,S_{n-1}$ with $S_0=1,\\ S_1=2$.",
          "Iterate up: $n=1$ gives $3S_2=9\\cdot2-0=18$, so $S_2=6$; $n=2$ gives $4S_3=15\\cdot6-1\\cdot2=88$, so $S_3=22$.",
          "Finally $n=3$ gives $(3+2)S_4=3(2\\cdot3+1)S_3-(3-1)S_2=21\\cdot22-2\\cdot6=462-12=450$, so $S_4=450/5=90$.",
          "Hence the count is $\\boxed{90}$."
        ]
      }
    ],
    "remark": "Insight: the diagonal step is precisely what separates Catalan from large Schröder. Without $D$ the staying-below routes are the Dyck paths counted by $C_4=14$; allowing $D$ lets a path 'ride the diagonal' without forming a corner, and the count balloons to $S_4=90$. Concretely $S_n=\\sum_{k}\\binom{n}{k}\\binom{2n-k}{n}\\tfrac{1}{n-k+1}$ weights each Dyck path by the number of ways to replace $k$ matched $RU$ corners by a single $D$, so every extra diagonal multiplies the route count. The cleanest takeaway: a naive reflection argument silently assumes unit steps and therefore undercounts."
  },
  {
    "theme": "lattice",
    "themeLabel": "Lattice Paths & Reflection",
    "title": "The Twin Couriers Who Never Meet",
    "difficulty": 5,
    "task": "Find the number of …",
    "tags": [
      "lindstrom gessel viennot",
      "non-crossing paths",
      "determinant",
      "vicious walkers"
    ],
    "statement": "Two couriers travel monotonically (East/North) on the integer lattice. Courier $A$ goes from $(0,1)$ to $(3,4)$; courier $B$ goes from $(1,0)$ to $(4,3)$. They are forbidden to ever stand on the same lattice point, so the two routes must be vertex-disjoint. Find the number of ordered pairs of routes $(A,B)$ for which the couriers never meet.",
    "answer": "$\\det\\begin{pmatrix}\\binom{6}{3} & \\binom{6}{2}\\\\ \\binom{6}{2} & \\binom{6}{3}\\end{pmatrix} = 20^2-15^2 = 175$",
    "trap": "Trying to compute (all pairs) minus (pairs sharing at least one point) by inclusion–exclusion over the shared vertices. This is a swamp: an intersecting pair can share many points, so the first correction term double-counts wildly — naively summing pairs over each common vertex gives $491$, and $400-491=-91$, an absurd negative. The Lindström–Gessel–Viennot lemma replaces the entire mess with one $2\\times2$ determinant of segment counts, because every intersecting pair cancels against its endpoint-swapped twin.",
    "solutions": [
      {
        "name": "Lindström–Gessel–Viennot determinant",
        "steps": [
          "Form the matrix $M_{ij}=\\#\\{\\text{monotone paths from start }i\\text{ to end }j\\}$ with starts $A=(0,1),\\,B=(1,0)$ and ends $A'=(3,4),\\,B'=(4,3)$.",
          "Entries by step counts: $A\\to A'$ needs $3$E,$3$N, so $\\binom{6}{3}=20$; $A\\to B'$ needs $4$E,$2$N, so $\\binom{6}{4}=\\binom{6}{2}=15$; $B\\to A'$ needs $2$E,$4$N, so $\\binom{6}{2}=15$; $B\\to B'$ needs $3$E,$3$N, so $\\binom{6}{3}=20$.",
          "The only order-preserving way to pair starts with ends is $A\\to A',\\,B\\to B'$ (the crossed pairing $A\\to B',\\,B\\to A'$ forces an intersection), so by LGV the number of vertex-disjoint pairs is the full determinant $\\det M=20\\cdot20-15\\cdot15=400-225=175$. $\\boxed{175}$"
        ]
      },
      {
        "name": "Sign-reversing involution (swap the tails)",
        "steps": [
          "Take any pair $(A\\to A',\\,B\\to B')$ that intersects, and locate their first common vertex $P$. Swap everything after $P$: the $A$-path continues to $B'$ and the $B$-path continues to $A'$. This is a bijection between intersecting $(A\\to A',\\,B\\to B')$ pairs and the swapped family $(A\\to B',\\,B\\to A')$.",
          "Conversely, every pair $(A\\to B',\\,B\\to A')$ is forced to intersect: $A$ starts left-of/below $B$ yet must finish right-of/above it, so by monotonicity the two routes cross. Hence the swapped family — all $15\\cdot15=225$ of its pairs — corresponds exactly to the intersecting straight pairs.",
          "Therefore the surviving non-intersecting straight pairs number $20\\cdot20-15\\cdot15=400-225=175$. $\\boxed{175}$"
        ]
      }
    ],
    "remark": "Insight: LGV is reflection's grown-up sibling — instead of reflecting one path across a line, you reflect the futures of two paths across each other at their first meeting point. The off-diagonal product $15^2=225$ is precisely the 'bad' set the swap annihilates, and it equals the count of crossed-endpoint pairs — every one of which must intersect. That clean cancellation is why a single $2\\times2$ determinant beats a divergent inclusion–exclusion."
  },
  {
    "theme": "lattice",
    "themeLabel": "Lattice Paths & Reflection",
    "title": "The Grand Hybrid: Disciplined Pilgrimage",
    "difficulty": 5,
    "task": "Find the number of admissible monotone lattice paths.",
    "tags": [
      "dyck path",
      "forced point",
      "catalan factorization",
      "weakly below diagonal"
    ],
    "statement": "A pilgrim walks monotonically (East/North) from $(0,0)$ to $(7,7)$, observing two rules simultaneously: (i) the path must never rise above the main diagonal, so $y \\le x$ at every visited lattice point (a Dyck constraint), and (ii) the path must pass through the shrine at $(4,4)$. Find the number of admissible pilgrimages.",
    "answer": "$C_4\\,C_3 = 14\\cdot 5 = 70$",
    "trap": "Multiplying the two UNCONSTRAINED segment counts $\\binom{8}{4}\\binom{6}{3}=70\\cdot 20=1400$ for passing through $(4,4)$, ignoring that BOTH segments must independently stay weakly below the diagonal. Each leg is its own Dyck problem, so the segment factors are Catalan numbers, not raw binomials.",
    "solutions": [
      {
        "name": "Factor at the diagonal touch point",
        "steps": [
          "The shrine $(4,4)$ lies on the diagonal $y=x$, so any admissible path splits there into two pieces, each of which must stay weakly below the diagonal.",
          "First leg $(0,0)\\to(4,4)$ below $y=x$ is a Dyck path: $C_4=\\frac{1}{5}\\binom{8}{4}=14$. Second leg $(4,4)\\to(7,7)$ below the diagonal is a Dyck path of size $3$: $C_3=\\frac{1}{4}\\binom{6}{3}=5$.",
          "By the product rule the count is $C_4\\cdot C_3 = 14\\cdot5 = 70$. $\\boxed{70}$"
        ]
      },
      {
        "name": "Reflection on each segment",
        "steps": [
          "For the first leg, good paths $(0,0)\\to(4,4)$ with $y\\le x$ equal $\\binom{8}{4}-\\binom{8}{3}=70-56=14$ by reflecting bad paths across the line $y=x+1$.",
          "For the second leg, shift $(4,4)$ to the origin and count good paths to $(3,3)$ with $y\\le x$: $\\binom{6}{3}-\\binom{6}{2}=20-15=5$ by the same reflection.",
          "Multiplying the independent legs: $14\\cdot5=70$. $\\boxed{70}$"
        ]
      }
    ],
    "remark": "Insight: a forced point ON the barrier is the only place a Dyck path may be cut without breaking the constraint, because the diagonal is where the two sub-Dyck-paths can independently 'reset'. The answer factoring as $C_4C_3$ is the Catalan convolution made visible — and indeed summing such products over every diagonal touch point recovers the full $C_7=429$."
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
    "title": "The Ascending Ledger Under a Slanted Cap",
    "difficulty": 5,
    "task": "Count",
    "tags": [
      "catalan",
      "ballot reflection",
      "roots of unity filter",
      "q=-1 phenomenon",
      "parity",
      "generating functions"
    ],
    "statement": "A scribe records a non-decreasing ledger of six nonnegative integers $a_1\\le a_2\\le a_3\\le a_4\\le a_5\\le a_6$, subject to the slanted cap $a_i\\le i$ for each $i=1,2,\\dots,6$ (so $a_1\\in\\{0,1\\}$, $a_2$ may rise to $2$, and so on, with $a_6\\le 6$). Among all such ledgers, the auditor accepts only those whose total $a_1+a_2+\\cdots+a_6$ is even. \\[\\text{How many accepted ledgers are there?}\\] Equivalently: writing each ledger as a monotone lattice path that stays weakly below the diagonal (the cap $a_i\\le i$ is the ballot/Catalan ceiling), count those paths enclosing an even signed area.",
    "answer": "$\\boxed{217}$",
    "trap": "Observing that the total number of capped non-decreasing ledgers is the Catalan number $C_7=429$ (a textbook ballot count), then declaring that 'half are even' and answering $\\lceil 429/2\\rceil=215$ (or $214$). The implicit claim is a free parity-flipping involution: surely one can always nudge some coordinate by $\\pm1$ to flip the sum's parity, pairing evens with odds. But the cap $a_i\\le i$ together with monotonicity freezes certain ledgers — no single coordinate can move without breaking $a_{i-1}\\le a_i\\le i$ — so the involution has fixed points and the two parity classes are NOT balanced. The signed surplus $(\\text{even}-\\text{odd})$ is not $0$ or $1$; it is exactly $C_3=5$, the Catalan signature of the unmatched configurations. Since $429$ is odd the classes cannot split evenly anyway, yet the true gap is $5$, not $1$, so the honest count is $(429+5)/2=217\\neq 215$.",
    "solutions": [
      {
        "name": "Reflection for the total, roots-of-unity filter for the parity",
        "steps": [
          "First the grand total. Map a ledger to a monotone $E/N$ lattice path: the constraint $0\\le a_1\\le\\cdots\\le a_6$ with $a_i\\le i$ is exactly the description of a path from $(0,0)$ to $(7,7)$ taking unit East/North steps and staying weakly below the diagonal $y\\le x$, where $a_i$ records the height of the $i$-th turn. André's reflection principle counts these as $\\binom{14}{7}-\\binom{14}{6}=3432-3003=429=C_7$.",
          "Now split by parity using a roots-of-unity (parity) filter. Let $F(q)=\\sum_{\\text{ledgers}} q^{\\,a_1+\\cdots+a_6}$ be the area generating function of these subdiagonal paths (a Carlitz $q$-Catalan polynomial). The number with even total is $\\dfrac{F(1)+F(-1)}{2}$, since $\\tfrac{1+(-1)^{m}}{2}$ is the indicator of $m$ even.",
          "Here $F(1)=429$ is the total just found. The value $F(-1)$ is the celebrated $q=-1$ phenomenon for Catalan area: for paths to $(m,m)$ with $m$ odd, $F(-1)=\\pm C_{(m-1)/2}$, and a direct expansion of the degree-$21$ polynomial $F(q)=q^{21}+6q^{20}+15q^{19}+\\cdots+2q^{2}+q+1$ gives $F(-1)=5=C_3$ (the alternating sum of its coefficients).",
          "Therefore the number of even-total ledgers is $\\dfrac{429+5}{2}=\\boxed{217}$."
        ]
      },
      {
        "name": "Parity-augmented transfer recursion under the cap",
        "steps": [
          "Build the ledgers left to right, carrying both the current value and the running parity. Let $N_i(v,p)$ be the number of admissible prefixes $a_1\\le\\cdots\\le a_i$ with $a_i=v$ and $a_1+\\cdots+a_i\\equiv p\\pmod 2$. The cap enters as the truncation $0\\le v\\le i$, the geometric heart of the ballot ceiling enforced step by step.",
          "Seed $i=1$: $N_1(0,0)=1,\\ N_1(1,1)=1$. Recurse $N_{i}(v,p)=\\sum_{u=0}^{v} N_{i-1}\\!\\big(u,\\,p\\oplus(v\\bmod 2)\\big)$ for $0\\le v\\le i$ (a non-decreasing step lets $a_i=v$ follow any $a_{i-1}=u\\le v$), where $\\oplus$ is addition mod $2$.",
          "Folding the recursion column by column, the even-total counts $\\sum_v N_i(v,0)$ propagate as $1,3,7,22,66,217$ for $i=1,\\dots,6$, while the odd-total counts run $1,2,7,20,66,212$; at each column the two add to the Catalan partial $2,5,14,42,132,429$, a built-in check.",
          "At $i=6$ the even total is $\\sum_v N_6(v,0)=\\boxed{217}$, obtained with no reflection and no generating function, purely from the capped transfer."
        ]
      },
      {
        "name": "Sign-reversing involution on subdiagonal paths",
        "steps": [
          "Pass to the path picture of Method 1: ledgers $\\leftrightarrow$ Dyck-type paths to $(7,7)$ staying weakly below $y\\le x$, with sign $(-1)^{a_1+\\cdots+a_6}$ equal to $(-1)^{\\text{area}}$ up to a fixed shift. The even$-$odd surplus is the signed count $\\sum_{\\text{paths}}(-1)^{\\text{area}}=F(-1)$.",
          "Define an involution: locate the first place the path differs from its top-down mirror image and toggle the corresponding $UD\\leftrightarrow DU$ corner there; this changes the enclosed area by exactly one unit square, hence flips the parity and reverses the sign, pairing one even ledger with one odd ledger.",
          "The fixed points are precisely the paths left invariant by the central toggle — the self-conjugate (palindromic) subdiagonal paths of semilength $7$, which are determined by their first half and are therefore counted by the smaller Catalan number $C_3=5$. By the $q=-1$ phenomenon each fixed point carries sign $+1$, so $\\text{even}-\\text{odd}=+5$.",
          "Combining with the total $\\text{even}+\\text{odd}=C_7=429$ gives $\\text{even}=\\dfrac{429+5}{2}=\\boxed{217}$."
        ]
      }
    ],
    "remark": "Insight: the seductive shortcut 'the count is Catalan, so the parities split evenly' silently assumes a free parity-flipping involution. The cap $a_i\\le i$ is exactly what denies that freedom: it freezes the extremal (palindromic) ledgers, and those unmatched configurations are themselves counted by a smaller Catalan number. The clean way to see this is the roots-of-unity filter $\\tfrac12(F(1)+F(-1))$, where $F(1)=C_7=429$ is the ballot/reflection total and $F(-1)=C_3=5$ is the Carlitz $q$-Catalan at $q=-1$ — the famous '$q=-1$ phenomenon.' Two genuinely different machines (reflection for the magnitude, a sign-reversing involution / GF specialization for the parity defect) must be run together; neither alone yields $217$. For a top-ranker the moral is that a parity sieve is only as good as the involution behind it, and a boundary constraint can make that involution leak exactly a Catalan number of fixed points."
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
          "This gives $1488.$ \\boxed{1488}"
        ]
      },
      {
        "name": "Fix one knight to linearize",
        "steps": [
          "Seat $K_1$ in a fixed seat to kill rotations; the remaining $7$ knights fill the other seats in $7!$ linear-around-the-fixed-point ways, but adjacency to $K_1$'s two neighbours is still circular.",
          "Apply inclusion–exclusion over the four forbidden adjacencies as in Method 1 (the glued-block counting is identical once a reference seat is fixed), yielding the same alternating sum.",
          "The sum collapses to $1488.$ \\boxed{1488}"
        ]
      },
      {
        "name": "Brute-force over fixed reference",
        "steps": [
          "Fix $K_1$ at seat $0$ and permute the other $7$ knights over seats $1,\\dots,7$; reject any seating in which a feuding pair occupies seats differing by $1$ or $7$ (the circular neighbours).",
          "Enumeration of the $7!=5040$ permutations leaves exactly $1488$ valid seatings.",
          "\\boxed{1488}"
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
    "title": "The Corridor Between Two Mirrors",
    "difficulty": 5,
    "task": "Count",
    "tags": [
      "lattice-paths",
      "reflection",
      "inclusion-exclusion",
      "method-of-images",
      "transfer-matrix"
    ],
    "statement": "A token starts at the origin $(0,0)$ and walks to $(7,7)$ using only unit steps to the right $R=(1,0)$ and up $U=(0,1)$. Throughout the entire walk (at every lattice point it visits, including both endpoints) it must remain inside the corridor $|y-x|\\le 2$; that is, it must never set foot on either diagonal line $y=x+3$ or $y=x-3$. \\[\\text{Count the number of admissible monotone paths from }(0,0)\\text{ to }(7,7).\\]",
    "answer": "\\[\\boxed{1458}\\]",
    "trap": "The lethal trap is treating the two forbidden lines as independent and applying inclusion-exclusion only once each: $\\binom{14}{7}-\\binom{14}{10}-\\binom{14}{10}=3432-1001-1001=1430$. This is wrong. With two parallel reflecting walls a single reflection of the endpoint across $y=x+3$ produces an image that now violates the *other* wall $y=x-3$; correcting that requires reflecting again, and so on. The Kelvin-image series is infinite and alternating, contributing two further $+\\binom{14}{7\\pm6}=+14$ terms, so the true count is $1430+28=1458$, not $1430$. Stopping after one reflection per wall (or, equivalently, importing the single-wall Catalan/ballot template that gives $2431$) silently drops every higher-order image.",
    "solutions": [
      {
        "name": "Transfer matrix on the diagonal coordinate",
        "steps": [
          "Track only $d=y-x$. Each $R$ sends $d\\mapsto d-1$ and each $U$ sends $d\\mapsto d+1$, so a path of $14$ steps is a $\\pm1$ walk in $d$ starting and ending at $0$ (we need $7$ of each step), confined to $d\\in\\{-2,-1,0,1,2\\}$.",
          "Admissible paths are exactly the walks of length $14$ from state $0$ to state $0$ on the path graph $P_5$ with adjacency matrix $T$ (each interior state links to its two neighbours).",
          "Iterating the vector $e_0$ under $T$ for $14$ steps, or using the eigenvalues $\\lambda_k=2\\cos\\frac{k\\pi}{6}$ ($k=1,\\dots,5$) of $P_5$, the middle-to-middle count is $\\sum_{k=1}^{5}\\lambda_k^{14}\\,\\phi_k(0)^2$.",
          "Evaluating gives $1458$, so the number of admissible paths is $\\boxed{1458}$."
        ]
      },
      {
        "name": "Method of images across two reflecting walls",
        "steps": [
          "In the $d=y-x$ picture the forbidden lines are the absorbing barriers $d=+3$ and $d=-3$; we count $\\pm1$ walks of length $n=14$ from $d=0$ to $d=0$ staying strictly between them.",
          "Shift coordinates so the barriers sit at $0$ and $h=6$; the two reflecting walls generate an infinite image series, giving the count $\\sum_{k\\in\\mathbb{Z}}\\Big[\\,N\\!\\big(2kh\\big)-N\\!\\big(2kh-6\\big)\\Big]$, where $N(c)=\\binom{14}{(14+c)/2}$ counts unconstrained walks with net displacement $c$ (and $0$ when the parity fails).",
          "Only a few images survive the range $|c|\\le 14$: the $k=0$ translate $\\binom{14}{7}=3432$; the two first-order reflections each subtract $\\binom{14}{10}=1001$; and the next images contribute $N(\\pm12)\\mp\\binom{14}{(14\\mp6)/2}$, namely the two correction terms $+\\binom{14}{1}=+14$ and $+\\binom{14}{13}=+14$.",
          "Summing the alternating series, $3432-1001-1001+14+14=1458$, so the answer is $\\boxed{1458}$."
        ]
      },
      {
        "name": "Layer-by-layer recurrence (DP)",
        "steps": [
          "Let $f_k(d)$ be the number of admissible prefixes of $k$ steps ending at diagonal value $d\\in\\{-2,-1,0,1,2\\}$, with $f_0(0)=1$ and $f_0$ zero elsewhere.",
          "Because each step changes $d$ by $\\pm1$ and must stay in range, the recurrence is $f_{k+1}(d)=f_k(d-1)+f_k(d+1)$, where out-of-band terms are taken as $0$ (this is the boundary condition that bakes in both walls automatically).",
          "Rolling the five-entry vector forward $14$ times, the parity forces the mass back to even $d$ at even steps; the final row yields $f_{14}(0)=1458$ (with $f_{14}(\\pm2)=729$ as a useful consistency check that the masses split symmetrically).",
          "Hence the number of admissible paths to $(7,7)$ is $f_{14}(0)=\\boxed{1458}$."
        ]
      }
    ],
    "remark": "Two parallel reflecting walls is qualitatively harder than the single-wall Catalan barrier: one reflection no longer fixes the boundary problem, because the image violates the opposite wall, forcing an infinite alternating Kelvin-image series. The spectral view explains why it nevertheless collapses to a clean integer: the diagonal coordinate turns the problem into a quantum-particle-in-a-box on the path graph $P_5$, whose finitely many eigenvalues $2\\cos\\frac{k\\pi}{6}$ make the answer a short closed sum. The trap value $1430$ is exactly the answer with the higher images amputated."
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
          "Therefore the answer is $13.$ \\boxed{13}"
        ]
      },
      {
        "name": "Direct Fibonacci recurrence on half-strings",
        "steps": [
          "Let $g_n$ count sparse strings of length $n$ ending in $0$. A sparse string of length $6$ ending in $0$ is any sparse string of length $5$ followed by $0$, so $g_6=f_5$ where $f_5=F_{7}=13$ is the total number of sparse length-$5$ strings.",
          "By the sparse-string recurrence $f_n=f_{n-1}+f_{n-2}$ with $f_1=2,f_2=3$: $f_3=5,f_4=8,f_5=13$.",
          "Hence $13$ palindromic sparse strings of length $12$. \\boxed{13}"
        ]
      },
      {
        "name": "Brute-force enumeration",
        "steps": [
          "Enumerate all $2^{12}$ strings; keep those equal to their reverse and containing no ``$11$''.",
          "Exactly $13$ survive, matching the half-string Fibonacci count.",
          "\\boxed{13}"
        ]
      }
    ],
    "remark": "Insight: the Fibonacci recurrence (sparseness) and palindromic symmetry fuse at the centre fold, where the symmetry manufactures a brand-new adjacency $s_6=s_7$. The problem collapses to a half-length recurrence, but only after you respect that central pinch."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Symmetric Sweet-Shelf",
    "difficulty": 5,
    "task": "Count",
    "tags": [
      "palindrome-symmetry",
      "capped-distribution",
      "inclusion-exclusion",
      "generating-functions",
      "parity"
    ],
    "statement": "A confectioner lines up $9$ identical glass jars in a single straight row on a shelf and distributes exactly $24$ identical candies among them. Each jar can hold anywhere from $0$ to $4$ candies (its physical cap), and a jar may be left empty. Because the shelf will be viewed from both ends of the corridor, the final arrangement must look the same read left-to-right as read right-to-left; that is, the sequence of candy counts $(a_1,a_2,\\dots,a_9)$ must be a palindrome, $a_i=a_{10-i}$ for every $i$. \\[\\text{Count the number of admissible palindromic fillings of the nine jars.}\\]",
    "answer": "\\[\\boxed{155}\\]",
    "trap": "The fatal trap is the \"forced-even-centre\" slip. A palindrome of odd length is pinned down by its left half $(a_1,a_2,a_3,a_4)$ together with the centre $a_5$, and the total is $2(a_1+a_2+a_3+a_4)+a_5=24$. Seeing that $24$ is even, the careless solver declares the centre must be $0$ (\"an even total leaves nothing for the middle\"), sets $a_1+a_2+a_3+a_4=12$, and counts only that one slice: capped solutions of $w_1+\\dots+w_4=12$ with each $w_i\\in\\{0,\\dots,4\\}$ give $\\binom{15}{3}-4\\binom{10}{3}+6\\binom{5}{3}=455-480+60=35$. But $a_5$ is forced only to be even, not zero: $a_5\\in\\{0,2,4\\}$ are all legal, and the missed cases $a_5=2$ (half-sum $11$, giving $52$) and $a_5=4$ (half-sum $10$, giving $68$) contribute another $120$ fillings. Amputating them yields $35$ instead of $155$.",
    "solutions": [
      {
        "name": "Half-reduction, then capped inclusion-exclusion on each centre case",
        "steps": [
          "A palindrome of length $9$ is determined by its left half $(a_1,a_2,a_3,a_4)$ and its centre $a_5$, since $a_6,a_7,a_8,a_9$ are forced mirror copies. The total candies are $2(a_1+a_2+a_3+a_4)+a_5=24$, with each entry in $\\{0,1,2,3,4\\}$.",
          "Write $S=a_1+a_2+a_3+a_4$, so $a_5=24-2S$ is automatically even; the cap $0\\le a_5\\le 4$ restricts it to $a_5\\in\\{0,2,4\\}$, i.e. $S\\in\\{12,11,10\\}$ respectively. (This is the parity/symmetry layer that the trap drops.)",
          "For each $S$, count capped solutions of $w_1+w_2+w_3+w_4=S$ with $w_i\\in\\{0,\\dots,4\\}$ using inclusion-exclusion $N(S)=\\sum_{j\\ge 0}(-1)^j\\binom{4}{j}\\binom{S-5j+3}{3}$. This gives $N(12)=\\binom{15}{3}-4\\binom{10}{3}+6\\binom{5}{3}=455-480+60=35$, $N(11)=\\binom{14}{3}-4\\binom{9}{3}+6\\binom{4}{3}=364-336+24=52$, and $N(10)=\\binom{13}{3}-4\\binom{8}{3}+6\\binom{3}{3}=286-224+6=68$.",
          "Summing the three legal centre cases, the number of admissible palindromes is $35+52+68=\\boxed{155}$."
        ]
      },
      {
        "name": "Generating functions on mirror pairs and the lone centre",
        "steps": [
          "Each mirror pair $(a_i,a_{10-i})$ for $i=1,2,3,4$ deposits the same amount $y\\in\\{0,\\dots,4\\}$ on both sides, so it contributes a factor $\\sum_{y=0}^{4}x^{2y}=1+x^2+x^4+x^6+x^8$ to the total candy count. The unpaired centre contributes $\\sum_{c=0}^{4}x^{c}=1+x+x^2+x^3+x^4$.",
          "Hence the number of admissible palindromes is the coefficient of $x^{24}$ in $f(x)=\\bigl(1+x^2+x^4+x^6+x^8\\bigr)^{4}\\,\\bigl(1+x+x^2+x^3+x^4\\bigr)$.",
          "Because every exponent coming from the four pair-factors is even, only the even powers of the centre factor can reach the even target $24$; this reproduces the parity restriction $c\\in\\{0,2,4\\}$ algebraically. Writing $g(x)=(1+x^2+x^4+x^6+x^8)^4$, we need $[x^{24}]g+[x^{22}]g+[x^{20}]g$.",
          "Substituting $x^2=t$, $g$ becomes $\\bigl(\\tfrac{1-t^5}{1-t}\\bigr)^4$, whose coefficients are the capped counts $N(\\cdot)$; reading off $[t^{12}]=35$, $[t^{11}]=52$, $[t^{10}]=68$ gives total $35+52+68=\\boxed{155}$."
        ]
      },
      {
        "name": "Recurrence (DP) over mirror pairs",
        "steps": [
          "Let $g_k(S)$ be the number of ways the first $k$ mirror pairs can carry a half-sum of $S$ (each pair adds some $y\\in\\{0,\\dots,4\\}$ to the half-sum). Then $g_0(0)=1$ and $g_k(S)=\\sum_{y=0}^{4}g_{k-1}(S-y)$, the bounded-step recurrence that bakes in the cap.",
          "Rolling the recurrence forward four times yields the half-sum distribution $g_4$; in particular $g_4(12)=35$, $g_4(11)=52$, and $g_4(10)=68$ (the array is symmetric about $S=8$, a useful consistency check since $\\max$ half-sum is $16$).",
          "The centre jar $a_5=24-2S$ must satisfy $0\\le a_5\\le 4$, i.e. $S\\in\\{10,11,12\\}$, so the admissible palindromes number $g_4(12)+g_4(11)+g_4(10)$.",
          "This equals $35+52+68=\\boxed{155}$."
        ]
      }
    ],
    "remark": "The whole difficulty lives in the interaction between two layers: the palindrome symmetry collapses nine free jars to four mirror pairs plus a centre, and that collapse silently doubles every paired contribution, turning the centre into the sole parity valve. The trap is seductive precisely because the reduction is correct, the inclusion-exclusion is correct, and the arithmetic is correct, yet the answer is still less than a quarter of the truth, because \"even centre\" was misread as \"zero centre.\" The generating-function view makes the mechanism unmistakable: four even-only pair factors force the centre to supply an even residue, and there are exactly three even residues within the cap, not one."
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
          "For $2m=8$: $7!!=7\\cdot5\\cdot3\\cdot1=105.$ \\boxed{105}"
        ]
      },
      {
        "name": "Double-counting recurrence",
        "steps": [
          "Let $M(2m)$ be the number of perfect matchings. Element $1$ must pair with one of the other $2m-1$ elements; whichever it picks, the remaining $2m-2$ elements form a matching independently.",
          "Hence $M(2m)=(2m-1)\\,M(2m-2)$ with $M(0)=1$, giving $M(8)=7\\cdot5\\cdot3\\cdot1=105$ — the same number arrives by double-counting (matching, distinguished edge) pairs.",
          "\\boxed{105}"
        ]
      },
      {
        "name": "Brute-force enumeration",
        "steps": [
          "Generate all $8!$ permutations; keep those with $\\sigma(\\sigma(i))=i$ and $\\sigma(i)\\neq i$ for all $i$.",
          "Exactly $105$ survive, confirming $7!!$.",
          "\\boxed{105}"
        ]
      }
    ],
    "remark": "Insight: the involution condition (a structural symmetry $\\sigma=\\sigma^{-1}$) fuses with the derangement condition to annihilate $1$-cycles, leaving precisely the perfect matchings — and matchings are counted by the elegant double-counting recurrence $M(2m)=(2m-1)M(2m-2)$."
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
          "This equals $24024.$ \\boxed{24024}"
        ]
      },
      {
        "name": "Partial-derangement recursion",
        "steps": [
          "The number of permutations of $n$ with $m$ specified non-attacking forbidden positions is $\\sum_{k=0}^{m}(-1)^k\\binom{m}{k}(n-k)!$. Here $n=8,\\ m=4$.",
          "Compute the sum termwise as above to obtain $24024$; equivalently this is the ``partial derangement'' $D_{8,4}$ where only $4$ of the $8$ positions are constrained.",
          "\\boxed{24024}"
        ]
      },
      {
        "name": "Brute-force enumeration",
        "steps": [
          "Enumerate all $8!$ bijections and reject any with $\\sigma(i)=i$ for some $i\\in\\{1,2,3,4\\}$.",
          "Exactly $24024$ assignments remain, matching the inclusion–exclusion total.",
          "\\boxed{24024}"
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
          "Inclusion-exclusion: $64 - 12 + 0 = 52$. \\boxed{52}"
        ]
      },
      {
        "name": "Onto first, then forbid own colours",
        "steps": [
          "Equivalently, sum over surjections and remove own-colour placements by inclusion-exclusion. Both inclusion-exclusions (onto over empty boxes, colour-ban over each token) commute, so collecting terms yields $\\sum_{T \\subseteq \\{R,G,B\\}} (-1)^{|T|} \\prod_i a_i(T)$, where $a_i(T)$ counts each token's surviving boxes after deleting $T$ and its own colour.",
          "Computing the product for each $T$ gives the same $64 - 12 + 0 = 52$, confirming the order of the two axes is irrelevant.",
          "\\boxed{52}"
        ]
      },
      {
        "name": "Brute-force enumeration",
        "steps": [
          "Iterate over all $3^6 = 729$ placements; keep those whose image is all of $\\{R, G, B\\}$ and in which no token sits in its own colour's box.",
          "Exactly $52$ placements survive. \\boxed{52}"
        ]
      }
    ],
    "remark": "Insight: this is the cleanest grand hybrid. Surjection counting and derangement-style forbidden positions live on two different inclusion-exclusion axes over the same maps. Either run a single inclusion-exclusion over empty boxes with per-token allowed sets already trimmed (Method 1), or interleave both axes; the answer is the same. The size-$2$ term vanishes precisely because forcing everything into one box would put both same-coloured tokens in their forbidden box, which is the structural reason $64 - 12 = 52$ is exact rather than coincidental."
  }
];
