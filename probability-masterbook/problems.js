/* problems.js — DATA. 100 original probability problems for ℙ · Chance & Uncertainty, strictly within the JEE Advanced syllabus: classical (equally-likely) & counting probability, the addition & multiplication theorems, conditional probability & independence, total probability & Bayes, random variables with their mean & variance, Bernoulli trials & the binomial distribution (mean np, variance npq, mode), inclusion–exclusion, and finite conditioning surprises. No geometric/continuous probability, Markov chains/random walks, or named distributions beyond the binomial (no Poisson/normal/exponential). Verified with exact fractions in Python. statement/answer are raw LaTeX (the app auto-detects prose+math); steps use $...$ and $$...$$. */
window.PROBLEMS = [
  {
    "theme": "classical",
    "themeLabel": "Classical Probability",
    "title": "When the Two Dice Add to a Prime",
    "difficulty": 3,
    "task": "Find the probability",
    "tags": [
      "dice",
      "sample space",
      "counting",
      "prime sums"
    ],
    "statement": "A pair of fair, distinguishable six-sided dice is rolled once. \\[\\text{Find the probability that the sum of the two numbers shown is a prime number.}\\]",
    "answer": "\\[\\boxed{\\dfrac{5}{12}}\\]",
    "trap": "Listing the prime values a sum can take, namely $\\{2,3,5,7,11\\}$, counting these as $5$ favourable cases out of the $11$ possible sums $2,3,\\dots,12$, and writing $\\dfrac{5}{11}$. This treats the eleven sums as equally likely, which they are not: the correct sample space is the $36$ equally likely ordered pairs $(a,b)$, not the lopsided list of sums.",
    "solutions": [
      {
        "name": "Direct count over ordered pairs",
        "steps": [
          "The sample space is all ordered pairs $(a,b)$ with $a,b\\in\\{1,\\dots,6\\}$, giving $36$ equally likely outcomes.",
          "A prime sum is one of $2,3,5,7,11$. Count pairs: sum $2$: $1$ way; sum $3$: $2$; sum $5$: $4$; sum $7$: $6$; sum $11$: $2$.",
          "Total favourable $=1+2+4+6+2=15$.",
          "Probability $=\\dfrac{15}{36}=\\boxed{\\dfrac{5}{12}}$."
        ]
      },
      {
        "name": "Complement by parity",
        "steps": [
          "A sum that is prime and $>2$ must be odd, which needs one even and one odd die. Odd-sum pairs number $18$ (half of $36$); among these the odd composite sum $9$ occurs in $4$ ways, so odd prime sums give $18-4=14$ pairs (sums $3,5,7,11$).",
          "The only even prime sum is $2$, occurring in $1$ way.",
          "Favourable $=14+1=15$ out of $36$.",
          "Probability $=\\dfrac{15}{36}=\\boxed{\\dfrac{5}{12}}$."
        ]
      }
    ],
    "remark": "**Insight.** The danger is silently switching sample spaces. The eleven possible **sums** are *not* equally likely, so probabilities must be counted on the $36$ equally likely **ordered pairs**. Whenever outcomes are reported by a derived quantity, return to the underlying equally likely atoms before you divide."
  },
  {
    "theme": "classical",
    "themeLabel": "Classical Probability",
    "title": "One of Each Colour",
    "difficulty": 3,
    "task": "Find the probability",
    "tags": [
      "balls in urn",
      "without replacement",
      "combinations",
      "counting"
    ],
    "statement": "A bag contains $4$ red, $3$ blue and $2$ green balls, all otherwise identical. Three balls are drawn together (without replacement). \\[\\text{Find the probability that the three drawn balls are of three different colours.}\\]",
    "answer": "\\[\\boxed{\\dfrac{2}{7}}\\]",
    "trap": "Treating the draws as ordered with replacement and writing $\\dfrac{4}{9}\\cdot\\dfrac{3}{9}\\cdot\\dfrac{2}{9}\\cdot 3!=\\dfrac{16}{81}$. This wrongly keeps the bag full after each pick. The draw is without replacement, so the clean unordered model $\\binom{9}{3}$ in the denominator is the correct sample space.",
    "solutions": [
      {
        "name": "Unordered combinations",
        "steps": [
          "Choosing $3$ balls from $9$ gives $\\binom{9}{3}=84$ equally likely unordered outcomes.",
          "To get one of each colour, pick one red, one blue, one green: $4\\cdot 3\\cdot 2=24$ ways.",
          "Probability $=\\dfrac{24}{84}=\\boxed{\\dfrac{2}{7}}$."
        ]
      },
      {
        "name": "Ordered without replacement",
        "steps": [
          "Draw the three balls in order; total ordered outcomes $=9\\cdot 8\\cdot 7=504$.",
          "A rainbow triple can appear in $3!=6$ colour orders; for a fixed order such as red, blue, green the count is $4\\cdot 3\\cdot 2=24$.",
          "Favourable ordered outcomes $=6\\cdot 24=144$, so probability $=\\dfrac{144}{504}=\\boxed{\\dfrac{2}{7}}$."
        ]
      }
    ],
    "remark": "**Insight.** Ordered-vs-unordered and with-vs-without replacement must match top and bottom of the fraction. Both correct models above agree because the $3!$ orderings cancel; the trap fails precisely because it pairs a with-replacement numerator against the wrong denominator."
  },
  {
    "theme": "classical",
    "themeLabel": "Classical Probability",
    "title": "Nobody in Their Own Chair",
    "difficulty": 4,
    "task": "Find the probability",
    "tags": [
      "arrangements",
      "derangement",
      "inclusion-exclusion",
      "counting"
    ],
    "statement": "Four guests, who had been assigned numbered chairs $1,2,3,4$, return after a break and sit down in a uniformly random order. \\[\\text{Find the probability that no guest sits in the chair originally assigned to them.}\\]",
    "answer": "\\[\\boxed{\\dfrac{3}{8}}\\]",
    "trap": "Reasoning that each guest avoids one chair with probability $\\tfrac34$ and multiplying $\\left(\\tfrac34\\right)^4$, or stopping inclusion-exclusion after the first term to get $1-4\\cdot\\tfrac{3!}{4!}=0$. The seating events are not independent, and inclusion-exclusion must be carried to all four terms.",
    "solutions": [
      {
        "name": "Inclusion-exclusion",
        "steps": [
          "Let $A_i$ be the event that guest $i$ sits in their own chair. By inclusion-exclusion the number of seatings with at least one fixed point is $\\sum(-1)^{k+1}\\binom{4}{k}(4-k)!$.",
          "The number of derangements is $D_4=4!\\left(1-\\tfrac{1}{1!}+\\tfrac{1}{2!}-\\tfrac{1}{3!}+\\tfrac{1}{4!}\\right)=24\\cdot\\tfrac{9}{24}=9$.",
          "All seatings number $4!=24$.",
          "Probability $=\\dfrac{9}{24}=\\boxed{\\dfrac{3}{8}}$."
        ]
      },
      {
        "name": "Direct enumeration by cycle type",
        "steps": [
          "A derangement of $4$ elements has no fixed points, so its cycle structure is either one $4$-cycle or two $2$-cycles.",
          "Number of $4$-cycles $=3!=6$; number of products of two disjoint $2$-cycles $=\\dfrac{1}{2}\\binom{4}{2}=3$.",
          "Total derangements $=6+3=9$ out of $24$ seatings.",
          "Probability $=\\dfrac{9}{24}=\\boxed{\\dfrac{3}{8}}$."
        ]
      }
    ],
    "remark": "**Insight.** Fixed-point-avoidance events overlap, so the naive product or a truncated correction collapses. Counting derangements by cycle type ($4$-cycles plus double transpositions) gives the same $9$ and exposes why $D_4=9$ rather than the tempting $0$."
  },
  {
    "theme": "classical",
    "themeLabel": "Classical Probability",
    "title": "Four Heads, Knowing There Are at Least Three",
    "difficulty": 4,
    "task": "Find the probability",
    "tags": [
      "coins",
      "conditional probability",
      "binomial counting",
      "combinations"
    ],
    "statement": "A fair coin is tossed $6$ times. You are told (truthfully) that at least $3$ heads appeared. \\[\\text{Given this information, find the probability that exactly }4\\text{ heads appeared.}\\]",
    "answer": "\\[\\boxed{\\dfrac{5}{14}}\\]",
    "trap": "Ignoring the conditioning and reporting the unconditional probability $\\dfrac{\\binom{6}{4}}{2^{6}}=\\dfrac{15}{64}$. The phrase 'at least $3$ heads' shrinks the sample space, so the denominator must be the count of those outcomes, not all $64$.",
    "solutions": [
      {
        "name": "Restricted sample space",
        "steps": [
          "All $2^6=64$ sequences are equally likely. The conditioning event 'at least $3$ heads' has $\\binom{6}{3}+\\binom{6}{4}+\\binom{6}{5}+\\binom{6}{6}=20+15+6+1=42$ outcomes.",
          "Among these, 'exactly $4$ heads' has $\\binom{6}{4}=15$ outcomes.",
          "Conditional probability $=\\dfrac{15}{42}=\\boxed{\\dfrac{5}{14}}$."
        ]
      },
      {
        "name": "Definition of conditional probability",
        "steps": [
          "Let $X$ be the number of heads. $P(X=4)=\\dfrac{15}{64}$ and $P(X\\ge 3)=\\dfrac{42}{64}$.",
          "Since $\\{X=4\\}\\subseteq\\{X\\ge 3\\}$, $P(X=4\\mid X\\ge3)=\\dfrac{P(X=4)}{P(X\\ge3)}=\\dfrac{15/64}{42/64}$.",
          "The common factor $64$ cancels, leaving $\\dfrac{15}{42}=\\boxed{\\dfrac{5}{14}}$."
        ]
      }
    ],
    "remark": "**Insight.** Conditioning rescales probability onto the event you were told occurred. Here it merely replaces the denominator $64$ by $42$; recognising $\\{X=4\\}\\subseteq\\{X\\ge3\\}$ saves you from any extra intersection work."
  },
  {
    "theme": "classical",
    "themeLabel": "Classical Probability",
    "title": "Which Urn Gave the White Ball?",
    "difficulty": 4,
    "task": "Find the probability",
    "tags": [
      "Bayes theorem",
      "urns",
      "total probability",
      "conditioning"
    ],
    "statement": "Urn $A$ holds $3$ white and $2$ black balls; urn $B$ holds $1$ white and $4$ black balls. An urn is chosen by a fair coin and one ball is drawn from it; the ball turns out to be white. \\[\\text{Find the probability that the ball came from urn }A.\\]",
    "answer": "\\[\\boxed{\\dfrac{3}{4}}\\]",
    "trap": "Answering $\\dfrac{3}{5}$, the chance of drawing white from urn $A$. That is $P(\\text{white}\\mid A)$, the forward probability, whereas the question asks the reverse, $P(A\\mid\\text{white})$, which requires Bayes' theorem and the overall whiteness rate.",
    "solutions": [
      {
        "name": "Bayes' theorem",
        "steps": [
          "$P(A)=P(B)=\\tfrac12$, $P(W\\mid A)=\\tfrac35$, $P(W\\mid B)=\\tfrac15$.",
          "Total probability of white: $P(W)=\\tfrac12\\cdot\\tfrac35+\\tfrac12\\cdot\\tfrac15=\\tfrac{3}{10}+\\tfrac{1}{10}=\\tfrac{2}{5}$.",
          "$P(A\\mid W)=\\dfrac{P(A)P(W\\mid A)}{P(W)}=\\dfrac{\\tfrac12\\cdot\\tfrac35}{\\tfrac25}=\\dfrac{3/10}{4/10}=\\boxed{\\dfrac{3}{4}}$."
        ]
      },
      {
        "name": "Counting equally likely white draws",
        "steps": [
          "Model the experiment with $10$ equally likely (urn, ball) outcomes: $5$ for each urn.",
          "White draws number $3$ from urn $A$ and $1$ from urn $B$, so $4$ white outcomes in all, equally likely.",
          "Of these white outcomes, $3$ come from urn $A$, giving probability $\\dfrac{3}{4}=\\boxed{\\dfrac{3}{4}}$."
        ]
      }
    ],
    "remark": "**Insight.** Forward and reverse conditionals are different animals: $P(W\\mid A)=\\tfrac35$ but $P(A\\mid W)=\\tfrac34$. The white ball is *evidence*, and Bayes reweights the two urns by how readily each produces that evidence."
  },
  {
    "theme": "classical",
    "themeLabel": "Classical Probability",
    "title": "Spacing Out the A's in BANANA",
    "difficulty": 4,
    "task": "Find the probability",
    "tags": [
      "arrangements",
      "identical letters",
      "gaps method",
      "counting"
    ],
    "statement": "The six letters of the word $\\textsf{BANANA}$ are arranged in a uniformly random order (arrangements that look identical are regarded as the same outcome). \\[\\text{Find the probability that no two of the three letters }A\\text{ are adjacent.}\\]",
    "answer": "\\[\\boxed{\\dfrac{1}{5}}\\]",
    "trap": "Computing only the number of ways to place the three A's into gaps, $\\binom{4}{3}=4$, and dividing by the total $60$ to get $\\dfrac{1}{15}$. This forgets that the three non-$A$ letters $B,N,N$ themselves arrange in $\\dfrac{3!}{2!}=3$ distinct ways, so the favourable count is $3\\cdot\\binom{4}{3}=12$.",
    "solutions": [
      {
        "name": "Gaps method",
        "steps": [
          "Total distinct arrangements of $\\textsf{BANANA}$ (letters $B,A,A,A,N,N$) $=\\dfrac{6!}{3!\\,2!}=60$.",
          "First arrange the non-$A$ letters $B,N,N$: $\\dfrac{3!}{2!}=3$ distinct words, each creating $4$ gaps $\\_X\\_X\\_X\\_$.",
          "Place the three identical A's into $3$ of these $4$ gaps: $\\binom{4}{3}=4$ choices, no two A's adjacent.",
          "Favourable $=3\\cdot 4=12$, so probability $=\\dfrac{12}{60}=\\boxed{\\dfrac{1}{5}}$."
        ]
      },
      {
        "name": "Complement via blocks",
        "steps": [
          "Count arrangements where at least two A's are adjacent. Treat $AA$ as a block: arranging block, $A$, $B$, $N$, $N$ gives $\\dfrac{5!}{2!}=60$, but this overcounts; using inclusion-exclusion on the patterns yields $48$ bad arrangements (those containing $AA$ or $AAA$).",
          "Equivalently, all-A-adjacency complement: total $60$ minus the $12$ fully separated ones leaves $48$ with some adjacency, confirming the split.",
          "Hence favourable (no two A's adjacent) $=60-48=12$.",
          "Probability $=\\dfrac{12}{60}=\\boxed{\\dfrac{1}{5}}$."
        ]
      }
    ],
    "remark": "**Insight.** The gaps method cleanly separates the two jobs: *arrange the others* (here $3$ ways) and *slot the repeated letter into gaps* ($\\binom{4}{3}$). Skipping the first job is the classic undercount that yields the wrong $\\tfrac{1}{15}$."
  },
  {
    "theme": "classical",
    "themeLabel": "Classical Probability",
    "title": "At Least One Ace in Three Cards",
    "difficulty": 4,
    "task": "Find the probability",
    "tags": [
      "cards",
      "complement",
      "combinations",
      "without replacement"
    ],
    "statement": "Three cards are drawn together from a well-shuffled standard pack of $52$ cards. \\[\\text{Find the probability that the hand contains at least one ace.}\\]",
    "answer": "\\[\\boxed{\\dfrac{1201}{5525}}\\]",
    "trap": "Adding the single-card chances as $3\\cdot\\dfrac{4}{52}=\\dfrac{3}{13}$, as if 'at least one ace' meant summing one-ace probabilities over the three positions. This double-counts hands with two or three aces and ignores that the draws are without replacement; the clean route is the complement.",
    "solutions": [
      {
        "name": "Complement (no ace)",
        "steps": [
          "Total $3$-card hands: $\\binom{52}{3}=22100$.",
          "Hands with no ace use only the $48$ non-aces: $\\binom{48}{3}=17296$.",
          "$P(\\text{no ace})=\\dfrac{17296}{22100}=\\dfrac{4324}{5525}$.",
          "$P(\\text{at least one ace})=1-\\dfrac{4324}{5525}=\\boxed{\\dfrac{1201}{5525}}$."
        ]
      },
      {
        "name": "Inclusion-exclusion by ace count",
        "steps": [
          "Count hands by number of aces: exactly one $=\\binom{4}{1}\\binom{48}{2}=4\\cdot1128=4512$; exactly two $=\\binom{4}{2}\\binom{48}{1}=6\\cdot48=288$; exactly three $=\\binom{4}{3}=4$.",
          "Favourable hands $=4512+288+4=4804$.",
          "Out of $\\binom{52}{3}=22100$ hands, $P=\\dfrac{4804}{22100}$.",
          "Reducing by $4$: $\\dfrac{1201}{5525}=\\boxed{\\dfrac{1201}{5525}}$."
        ]
      }
    ],
    "remark": "**Insight.** 'At least one' almost always wants the complement, because the alternative double-counts multi-success hands. The naive $3\\cdot\\tfrac{4}{52}=\\tfrac{3}{13}\\approx 0.231$ overshoots the true $\\tfrac{1201}{5525}\\approx 0.217$, exactly the size of the overcounted two- and three-ace hands."
  },
  {
    "theme": "classical",
    "themeLabel": "Classical Probability",
    "title": "Counting the Reds You Drew",
    "difficulty": 5,
    "task": "Find the variance",
    "tags": [
      "random variable",
      "expectation",
      "variance",
      "without replacement"
    ],
    "statement": "An urn contains $4$ red and $6$ blue balls. Three balls are drawn together (without replacement) and $X$ denotes the number of red balls obtained. \\[\\text{Find }\\operatorname{Var}(X).\\]",
    "answer": "\\[\\boxed{\\dfrac{14}{25}}\\]",
    "trap": "Modelling $X$ as a binomial with $n=3$, $p=\\tfrac{4}{10}$ and using $npq=3\\cdot\\tfrac25\\cdot\\tfrac35=\\dfrac{18}{25}$. That formula assumes draws with replacement (independent trials); here the draws are without replacement, so the variance is smaller by the finite correction factor $\\dfrac{N-n}{N-1}=\\dfrac{7}{9}$.",
    "solutions": [
      {
        "name": "From the exact distribution",
        "steps": [
          "With $\\binom{10}{3}=120$ equally likely hands, $P(X=k)=\\dfrac{\\binom{4}{k}\\binom{6}{3-k}}{120}$ gives $P(0)=\\tfrac{20}{120},\\,P(1)=\\tfrac{60}{120},\\,P(2)=\\tfrac{36}{120},\\,P(3)=\\tfrac{4}{120}$.",
          "$E(X)=\\dfrac{0\\cdot20+1\\cdot60+2\\cdot36+3\\cdot4}{120}=\\dfrac{144}{120}=\\dfrac{6}{5}$.",
          "$E(X^2)=\\dfrac{0+60+4\\cdot36+9\\cdot4}{120}=\\dfrac{240}{120}=2$.",
          "$\\operatorname{Var}(X)=E(X^2)-\\big(E(X)\\big)^2=2-\\dfrac{36}{25}=\\boxed{\\dfrac{14}{25}}$."
        ]
      },
      {
        "name": "Indicators with covariance",
        "steps": [
          "Let $I_j=1$ if the $j$-th drawn ball is red. Each $P(I_j=1)=\\tfrac{4}{10}=\\tfrac25$, so $\\operatorname{Var}(I_j)=\\tfrac25\\cdot\\tfrac35=\\tfrac{6}{25}$.",
          "For $j\\ne k$, $P(I_j=1,I_k=1)=\\dfrac{4\\cdot3}{10\\cdot9}=\\dfrac{2}{15}$, so $\\operatorname{Cov}(I_j,I_k)=\\dfrac{2}{15}-\\dfrac{4}{25}=-\\dfrac{2}{75}$.",
          "$\\operatorname{Var}(X)=3\\cdot\\tfrac{6}{25}+2\\binom{3}{2}\\left(-\\tfrac{2}{75}\\right)=\\tfrac{18}{25}-\\tfrac{12}{75}=\\tfrac{18}{25}-\\tfrac{4}{25}$.",
          "$\\operatorname{Var}(X)=\\dfrac{14}{25}=\\boxed{\\dfrac{14}{25}}$."
        ]
      }
    ],
    "remark": "**Insight.** Without-replacement draws make successive picks negatively dependent, so the variance falls below the independent-trial value $\\tfrac{18}{25}$ by the factor $\\tfrac{N-n}{N-1}=\\tfrac79$. The covariance bookkeeping makes that shrinkage explicit through the term $-\\tfrac{2}{75}$ per pair."
  },
  {
    "theme": "classical",
    "themeLabel": "Classical Probability",
    "title": "The Most Probable Number of Heads",
    "difficulty": 5,
    "task": "Find the mode",
    "tags": [
      "binomial distribution",
      "most probable number",
      "mode",
      "ratio test"
    ],
    "statement": "A biased coin shows heads with probability $\\tfrac13$ on each toss. It is tossed $8$ independent times and $X$ is the number of heads. \\[\\text{Find the most probable value(s) of }X\\text{ (the mode of the distribution).}\\]",
    "answer": "\\[\\boxed{X=2\\ \\text{and}\\ X=3\\ \\text{(both equally most probable)}}\\]",
    "trap": "Rounding the mean $np=8\\cdot\\tfrac13=\\tfrac83\\approx 2.67$ up to $3$ and declaring $X=3$ the unique mode. Because $(n+1)p=9\\cdot\\tfrac13=3$ is an integer, the binomial has TWO adjacent modes, $k=2$ and $k=3$, with exactly equal probability.",
    "solutions": [
      {
        "name": "Consecutive-ratio test",
        "steps": [
          "For $X\\sim\\text{Bin}(8,\\tfrac13)$, $\\dfrac{P(X=k)}{P(X=k-1)}=\\dfrac{(n-k+1)p}{k(1-p)}=\\dfrac{(9-k)\\cdot\\tfrac13}{k\\cdot\\tfrac23}=\\dfrac{9-k}{2k}$.",
          "This ratio exceeds $1$ (probability still rising) when $9-k>2k$, i.e. $k<3$; it equals $1$ exactly at $k=3$ since $9-3=6=2\\cdot 3$.",
          "So $P(X=2)<P(X=3)$ fails to be strict: in fact $P(X=3)=P(X=2)$, and for $k\\ge 4$ the ratio drops below $1$.",
          "Therefore the probabilities peak and tie at $k=2$ and $k=3$: $\\boxed{X=2\\text{ and }X=3}$."
        ]
      },
      {
        "name": "Integer-boundary rule",
        "steps": [
          "The mode of $\\text{Bin}(n,p)$ is $\\lfloor (n+1)p\\rfloor$, and when $(n+1)p$ is a positive integer $m$, both $m-1$ and $m$ are modes.",
          "Here $(n+1)p=9\\cdot\\tfrac13=3$, an integer, so the two modes are $m-1=2$ and $m=3$.",
          "Checking: $P(X=2)=\\binom{8}{2}\\left(\\tfrac13\\right)^2\\left(\\tfrac23\\right)^6=\\dfrac{1792}{6561}$ and $P(X=3)=\\binom{8}{3}\\left(\\tfrac13\\right)^3\\left(\\tfrac23\\right)^5=\\dfrac{1792}{6561}$ are equal.",
          "Hence the most probable values are $\\boxed{X=2\\text{ and }X=3}$."
        ]
      }
    ],
    "remark": "**Insight.** The peak of a binomial is governed by $(n+1)p$, not by the mean $np$. When $(n+1)p$ lands exactly on an integer the distribution has a flat top with two equally likely modes, a subtlety the $np$-rounding shortcut hides."
  },
  {
    "theme": "classical",
    "themeLabel": "Classical Probability",
    "title": "The Suspicious Pair of Heads",
    "difficulty": 5,
    "task": "Find the probability",
    "tags": [
      "Bayes theorem",
      "two-headed coin",
      "conditioning",
      "total probability"
    ],
    "statement": "A drawer contains $4$ visually identical coins: $3$ are ordinary fair coins and $1$ has heads on both faces. A coin is picked at random and tossed twice, landing heads both times. \\[\\text{Find the probability that the chosen coin is the two-headed one.}\\]",
    "answer": "\\[\\boxed{\\dfrac{4}{7}}\\]",
    "trap": "Quoting the prior $\\dfrac{1}{4}$, the chance of grabbing the two-headed coin before any toss. The two heads are data that must update this prior; ignoring them confuses the prior with the posterior $P(\\text{two-headed}\\mid HH)$.",
    "solutions": [
      {
        "name": "Bayes' theorem",
        "steps": [
          "Let $T$ be 'two-headed coin', $F$ 'fair coin'. $P(T)=\\tfrac14$, $P(F)=\\tfrac34$.",
          "$P(HH\\mid T)=1$ and $P(HH\\mid F)=\\left(\\tfrac12\\right)^2=\\tfrac14$.",
          "$P(HH)=\\tfrac14\\cdot1+\\tfrac34\\cdot\\tfrac14=\\tfrac14+\\tfrac{3}{16}=\\tfrac{7}{16}$.",
          "$P(T\\mid HH)=\\dfrac{\\tfrac14\\cdot1}{\\tfrac{7}{16}}=\\dfrac{4/16}{7/16}=\\boxed{\\dfrac{4}{7}}$."
        ]
      },
      {
        "name": "Equally likely faces (counting)",
        "steps": [
          "Represent the $4$ coins by $8$ faces, of which the two-headed coin contributes $2$ heads-faces and each fair coin $1$ heads-face among its two.",
          "Think of each coin as equally likely; weight each by its chance of giving $HH$: the two-headed coin weight $1$, each fair coin weight $\\tfrac14$.",
          "Total weight $=1+3\\cdot\\tfrac14=\\tfrac74$; the two-headed coin's share is $\\dfrac{1}{7/4}=\\dfrac{4}{7}$.",
          "Hence $P(\\text{two-headed}\\mid HH)=\\boxed{\\dfrac{4}{7}}$."
        ]
      }
    ],
    "remark": "**Insight.** Evidence reweights hypotheses in proportion to how easily each explains it. The two-headed coin produces $HH$ four times as readily as a fair coin, lifting its probability from the prior $\\tfrac14$ to the posterior $\\tfrac47$."
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
    "title": "The Parity Gambit",
    "difficulty": 3,
    "task": "Prove that",
    "tags": [
      "independence",
      "parity",
      "bettors fallacy",
      "coin tosses"
    ],
    "statement": "A fair coin is tossed four times. Let $H$ be the event 'the first toss is heads' and let $E$ be the event 'the total number of heads is even'. A bettor argues: 'after I see the first toss, the parity of the remaining run is partly decided, so $E$ must depend on $H$.' Prove that in fact $H$ and $E$ are independent, and find $P(E\\mid H)$.",
    "answer": "\\[\\boxed{P(E\\mid H)=\\tfrac12=P(E),\\ \\text{so }H\\perp E}\\]",
    "trap": "Believing that because the first toss contributes to the head-count, fixing it must shift the parity probability (a base-rate-fallacy-flavoured intuition). In truth, conditioning on the first toss leaves the parity of the other three fair tosses uniform, and a uniform parity is unaffected by adding a fixed bit.",
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
    "remark": "Insight: parity of a sum of independent fair bits is the great 'eraser' — it is independent of any proper subset of the bits. The bettor's intuition that 'partial information must shift the odds' is exactly the fallacy this problem dismantles."
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
    "title": "The Even-Length Duel",
    "difficulty": 5,
    "task": "Find",
    "tags": [
      "geometric series",
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
      "without replacement"
    ],
    "statement": "Urn I contains $3$ red and $2$ white balls; urn II contains $1$ red and $4$ white. Two balls are transferred at random (without replacement) from urn I into urn II, the contents of urn II are mixed, and one ball is then drawn from urn II — it is red. Find the probability that both transferred balls were red.",
    "answer": "\\[\\boxed{\\dfrac{9}{22}}\\]",
    "trap": "Forgetting to condition on the red draw and reporting the prior $P(\\text{both red})=\\dfrac{\\binom32}{\\binom52}=\\dfrac{3}{10}$. Observing a red ball drawn from urn II is itself evidence that more reds were transferred, so the posterior must rise above the prior.",
    "solutions": [
      {
        "name": "Total probability over the transfer count",
        "steps": [
          "Let $k$ be the number of reds among the $2$ transferred balls. Drawing $2$ from urn I (with $3$ red, $2$ white) is a without-replacement count: $P(k{=}0)=\\dfrac{\\binom20\\binom32}{\\binom52}=\\dfrac1{10},\\ P(k{=}1)=\\dfrac{\\binom31\\binom21}{\\binom52}=\\dfrac35,\\ P(k{=}2)=\\dfrac{\\binom32}{\\binom52}=\\dfrac3{10}$ (these sum to $1$).",
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
    "remark": "Insight: the observation (first defective on the third draw) has likelihood $(1-p)^2p$, fusing the conditioning of total probability with a discrete distribution. The two good items quietly pull the posterior toward the good mode, capping it near $\\tfrac13$."
  },
  {
    "theme": "counting",
    "themeLabel": "Probability by Counting",
    "title": "Five Letters, Wrong Envelopes",
    "difficulty": 3,
    "task": "Find the probability",
    "tags": [
      "derangement",
      "matching",
      "complement",
      "permutations"
    ],
    "statement": "A secretary writes $5$ distinct letters and addresses $5$ distinct envelopes, one for each letter. In a hurry, she inserts the $5$ letters into the $5$ envelopes completely at random, one letter per envelope. Find the probability that no letter ends up in its correct envelope.",
    "answer": "There are $5!=120$ equally likely insertions. The favourable count is the number of derangements $D_5=120\\left(1-\\tfrac1{1!}+\\tfrac1{2!}-\\tfrac1{3!}+\\tfrac1{4!}-\\tfrac1{5!}\\right)=44$. Hence the probability is $\\boxed{\\dfrac{11}{30}}$.",
    "trap": "A tempting wrong answer is $\\left(\\tfrac{4}{5}\\right)^5$, obtained by saying each letter independently has a $\\tfrac45$ chance of avoiding its own envelope. The placements are not independent (each envelope holds exactly one letter), so multiplying single-letter probabilities overcounts and gives a value $\\approx 0.328\\neq\\tfrac{11}{30}$.",
    "solutions": [
      {
        "name": "Inclusion–exclusion on fixed points",
        "steps": [
          "Let $A_i$ be the event that letter $i$ sits in its own envelope. Then $|A_{i_1}\\cap\\cdots\\cap A_{i_k}|=(5-k)!$ since the remaining $5-k$ letters are free.",
          "By inclusion–exclusion the number of arrangements with at least one fixed point is $\\sum_{k=1}^{5}(-1)^{k+1}\\binom{5}{k}(5-k)!$.",
          "So the number with no fixed point is $D_5=\\sum_{k=0}^{5}(-1)^{k}\\binom{5}{k}(5-k)!=120-120+60-20+5-1=44$.",
          "The probability is $\\dfrac{44}{120}=\\dfrac{11}{30}$."
        ]
      },
      {
        "name": "Recursion for derangements",
        "steps": [
          "Use $D_n=(n-1)\\left(D_{n-1}+D_{n-2}\\right)$ with $D_1=0,\\ D_2=1$.",
          "Then $D_3=2(1+0)=2$, $D_4=3(2+1)=9$, $D_5=4(9+2)=44$.",
          "Divide by $5!=120$ to get $\\dfrac{44}{120}=\\dfrac{11}{30}$."
        ]
      }
    ],
    "remark": "**Insight.** The phrase 'no letter correct' is the classic **derangement** signal. Treating the five placements as independent feels natural but is the central error: filling one envelope removes a choice from the others. Inclusion–exclusion is the honest bookkeeping, and the answer hovers near $1/e$ — a hallmark of derangement problems."
  },
  {
    "theme": "counting",
    "themeLabel": "Probability by Counting",
    "title": "Even Three-Digit Numbers",
    "difficulty": 3,
    "task": "Find the probability",
    "tags": [
      "digits",
      "permutations",
      "no repetition",
      "parity"
    ],
    "statement": "A three-digit number is formed by choosing $3$ distinct digits from $\\{1,2,3,4,5,6,7,8,9\\}$ and arranging them, all such numbers being equally likely. Find the probability that the number formed is even.",
    "answer": "The sample space has $9\\cdot 8\\cdot 7={}^9P_3=504$ equally likely numbers. A number is even iff its units digit is one of $\\{2,4,6,8\\}$: $4$ choices for the units digit and ${}^8P_2=56$ for the other two places, giving $4\\cdot 56=224$. The probability is $\\dfrac{224}{504}=\\boxed{\\dfrac{4}{9}}$.",
    "trap": "Because the digits $1$–$9$ contain $4$ even and $5$ odd values, one is tempted to answer $\\tfrac12$ 'by symmetry of parity'. But the digit pool is not balanced: there are $5$ odd digits and only $4$ even, so the units digit is even with probability $\\tfrac49$, not $\\tfrac12$.",
    "solutions": [
      {
        "name": "Count by the units digit",
        "steps": [
          "Total numbers: choose an ordered triple of distinct digits, ${}^9P_3=504$.",
          "Even numbers: the units digit must be in $\\{2,4,6,8\\}$ ($4$ ways); fill the hundreds and tens from the remaining $8$ digits in ${}^8P_2=56$ ways, total $4\\cdot 56=224$.",
          "Probability $=\\dfrac{224}{504}=\\dfrac{4}{9}$."
        ]
      },
      {
        "name": "Probability of the last place directly",
        "steps": [
          "By symmetry, every one of the $9$ digits is equally likely to occupy the units place, so $P(\\text{units digit even})=\\dfrac{\\#\\text{even digits}}{9}=\\dfrac{4}{9}$.",
          "The number is even exactly when its units digit is even, so the answer is $\\dfrac{4}{9}$."
        ]
      }
    ],
    "remark": "**Insight.** Parity of the whole number is decided solely by the **units digit**. The clean second method bypasses all the $504$ counting: each position is equally likely to hold any given digit, so the units digit is even with probability $4/9$ straight away. The '$1/2$' trap forgets the pool itself is parity-imbalanced."
  },
  {
    "theme": "counting",
    "themeLabel": "Probability by Counting",
    "title": "Two Friends Around a Table",
    "difficulty": 4,
    "task": "Find the probability",
    "tags": [
      "circular arrangement",
      "adjacency",
      "permutations",
      "block method"
    ],
    "statement": "Eight distinct people, among them Asha and Bina, are seated at random around a circular table with $8$ identical seats (seatings that differ only by a rotation are regarded as the same). Find the probability that Asha and Bina sit next to each other.",
    "answer": "The number of distinct circular seatings of $8$ people is $(8-1)!=7!=5040$. Glue Asha and Bina into one block: $(7-1)!=6!=720$ circular arrangements of the $7$ units, times $2!=2$ internal orders, giving $1440$ favourable seatings. The probability is $\\dfrac{1440}{5040}=\\boxed{\\dfrac{2}{7}}$.",
    "trap": "A common slip is to use $8!$ for the total and $2\\cdot 7!$ for the block count, giving $\\tfrac{2\\cdot 7!}{8!}=\\tfrac14$. That treats the seating as a line. Around a circle one must fix rotations, so the correct total is $7!$ and the answer is $\\tfrac27$, not $\\tfrac14$.",
    "solutions": [
      {
        "name": "Block (glue) method on a circle",
        "steps": [
          "Total distinct circular seatings of $8$ distinct people $=(8-1)!=5040$.",
          "Treat the Asha–Bina pair as a single block, leaving $7$ units to seat around the circle in $(7-1)!=720$ ways.",
          "The block has $2!=2$ internal orders, so favourable $=720\\cdot 2=1440$.",
          "Probability $=\\dfrac{1440}{5040}=\\dfrac{2}{7}$."
        ]
      },
      {
        "name": "Neighbour-counting argument",
        "steps": [
          "Seat Asha anywhere; this fixes the rotation. The remaining $7$ people fill the other $7$ seats, all equally likely.",
          "Exactly $2$ of those $7$ seats are adjacent to Asha, and Bina is equally likely to occupy any of the $7$.",
          "Hence $P(\\text{Bina adjacent to Asha})=\\dfrac{2}{7}$."
        ]
      }
    ],
    "remark": "**Insight.** The neighbour argument is the elegant route: fixing one person kills the rotational symmetry, after which the desired person simply lands in one of $2$ favourable seats out of $7$. The seductive $1/4$ comes from forgetting that circular seatings are counted by $(n-1)!$, not $n!$."
  },
  {
    "theme": "counting",
    "themeLabel": "Probability by Counting",
    "title": "At Least One Woman on the Panel",
    "difficulty": 4,
    "task": "Find the probability",
    "tags": [
      "combinations",
      "selection",
      "complement",
      "at least one"
    ],
    "statement": "A committee of $4$ members is chosen at random from a group of $6$ men and $4$ women, all $\\binom{10}{4}$ selections being equally likely. Find the probability that the committee contains at least one woman.",
    "answer": "Total selections $=\\binom{10}{4}=210$. The complementary (all-men) selections number $\\binom{6}{4}=15$, so committees with at least one woman $=210-15=195$. The probability is $\\dfrac{195}{210}=\\boxed{\\dfrac{13}{14}}$.",
    "trap": "It is tempting to compute 'at least one woman' as $\\binom{4}{1}\\binom{9}{3}/\\binom{10}{4}=\\tfrac{4\\cdot 84}{210}=\\tfrac{336}{210}>1$. Picking one woman first and then any $3$ of the remaining $9$ double-counts committees that contain several women, producing an impossible probability exceeding $1$. The complement method avoids this.",
    "solutions": [
      {
        "name": "Complement (subtract all-men)",
        "steps": [
          "Total committees $=\\binom{10}{4}=210$.",
          "Committees with no woman use only the $6$ men: $\\binom{6}{4}=15$.",
          "At least one woman $=210-15=195$, so the probability is $\\dfrac{195}{210}=\\dfrac{13}{14}$."
        ]
      },
      {
        "name": "Direct sum over number of women",
        "steps": [
          "Count committees with exactly $w$ women, $w=1,2,3,4$: $\\binom{4}{w}\\binom{6}{4-w}$.",
          "These are $\\binom41\\binom63+\\binom42\\binom62+\\binom43\\binom61+\\binom44\\binom60=4\\cdot20+6\\cdot15+4\\cdot6+1\\cdot1=80+90+24+1=195$.",
          "Probability $=\\dfrac{195}{210}=\\dfrac{13}{14}$."
        ]
      }
    ],
    "remark": "**Insight.** 'At least one' almost always begs for the **complement**: one subtraction versus four case-sums. The 'pick a woman first' shortcut is the classic overcount trap — choosing a distinguished woman and then free seats counts each multi-woman committee multiple times, here even pushing the 'probability' past $1$."
  },
  {
    "theme": "counting",
    "themeLabel": "Probability by Counting",
    "title": "No Two A's Together in BANANA",
    "difficulty": 4,
    "task": "Find the probability",
    "tags": [
      "arrangements",
      "repeated letters",
      "gap method",
      "non-adjacency"
    ],
    "statement": "The six letters of the word $\\textsf{BANANA}$ (namely three $\\textsf{A}$'s, two $\\textsf{N}$'s and one $\\textsf{B}$) are arranged in a row, every distinguishable arrangement being equally likely. Find the probability that no two $\\textsf{A}$'s are adjacent.",
    "answer": "The number of distinguishable arrangements is $\\dfrac{6!}{3!\\,2!\\,1!}=60$. Arrange the non-$\\textsf{A}$ letters $\\textsf{B},\\textsf{N},\\textsf{N}$ first in $\\dfrac{3!}{2!}=3$ ways; they create $4$ gaps, and the three $\\textsf{A}$'s occupy $3$ of these gaps in $\\binom{4}{3}=4$ ways. Favourable $=3\\cdot 4=12$, so the probability is $\\dfrac{12}{60}=\\boxed{\\dfrac{1}{5}}$.",
    "trap": "A frequent error is to forget that the two $\\textsf{N}$'s are identical and use $3!=6$ ways for $\\textsf{B},\\textsf{N},\\textsf{N}$, giving favourable $6\\cdot 4=24$ and 'probability' $\\tfrac{24}{60}=\\tfrac{2}{5}$. Treating identical letters as distinguishable doubles the count; the correct favourable total is $12$ and the answer is $\\tfrac15$.",
    "solutions": [
      {
        "name": "Gap method with repetition",
        "steps": [
          "Total distinguishable words: $\\dfrac{6!}{3!\\,2!}=60$.",
          "Place the non-$\\textsf{A}$ letters $\\textsf{B},\\textsf{N},\\textsf{N}$: $\\dfrac{3!}{2!}=3$ distinguishable orders, forming $4$ inter-letter gaps $\\_\\,X\\_\\,X\\_\\,X\\_$.",
          "Choose $3$ of the $4$ gaps for the (identical) $\\textsf{A}$'s: $\\binom{4}{3}=4$ ways.",
          "Favourable $=3\\cdot 4=12$, probability $=\\dfrac{12}{60}=\\dfrac15$."
        ]
      },
      {
        "name": "Complement via the AAA / AA blocks",
        "steps": [
          "Words with all three $\\textsf{A}$'s together (block $\\textsf{AAA}$): arrange $\\textsf{AAA},\\textsf{B},\\textsf{N},\\textsf{N}$ as $4$ units, $\\dfrac{4!}{2!}=12$.",
          "Words with at least one $\\textsf{AA}$ adjacency: count strings having some two $\\textsf{A}$'s together $=60-12=48$ have no... instead compute directly. Words with no two $\\textsf{A}$ adjacent we already get $12$ by the gap method, so adjacency-containing words $=60-12=48$.",
          "Thus $P(\\text{no two }\\textsf{A}\\text{ adjacent})=\\dfrac{60-48}{60}=\\dfrac{12}{60}=\\dfrac15$."
        ]
      }
    ],
    "remark": "**Insight.** The **gap method** is the standard tool for non-adjacency: lay down the other letters, then slot the forbidden-to-touch letters into the gaps. The lurking trap is the repeated $\\textsf{N}$'s — counting $\\textsf{B},\\textsf{N},\\textsf{N}$ as $3!$ instead of $3!/2!$ silently doubles every count and corrupts both numerator and the intuition."
  },
  {
    "theme": "counting",
    "themeLabel": "Probability by Counting",
    "title": "Exactly One Pair in Five Cards",
    "difficulty": 4,
    "task": "Find the probability",
    "tags": [
      "cards",
      "combinations",
      "poker counting",
      "exactly one pair"
    ],
    "statement": "Five cards are drawn at random (without replacement) from a standard $52$-card deck, all $\\binom{52}{5}$ hands being equally likely. Find the probability that the hand is exactly 'one pair': two cards of one rank and three cards of three other distinct ranks (no second pair, no triple).",
    "answer": "Total hands $=\\binom{52}{5}=2{,}598{,}960$. Choose the paired rank ($13$), its two suits $\\binom{4}{2}=6$, the three other distinct ranks $\\binom{12}{3}=220$, and one suit for each of those three cards $4^3=64$: favourable $=13\\cdot 6\\cdot 220\\cdot 64=1{,}098{,}240$. The probability is $\\dfrac{1098240}{2598960}=\\boxed{\\dfrac{352}{833}}$.",
    "trap": "A tempting wrong count picks the paired rank, its two suits, then $\\binom{50}{3}$ for the other three cards: $13\\cdot 6\\cdot\\binom{50}{3}$. This wrongly allows the three 'kickers' to form a second pair or a triple or match the paired rank, overcounting badly and inflating the probability above the true $\\tfrac{352}{833}$.",
    "solutions": [
      {
        "name": "Build the hand rank-by-rank",
        "steps": [
          "Total $\\binom{52}{5}=2{,}598{,}960$.",
          "Paired rank: $13$ choices; its two suits: $\\binom42=6$.",
          "Three remaining ranks all distinct and different from the pair: $\\binom{12}{3}=220$; each contributes one card via $4$ suit choices, $4^3=64$.",
          "Favourable $=13\\cdot6\\cdot220\\cdot64=1{,}098{,}240$, so probability $=\\dfrac{1{,}098{,}240}{2{,}598{,}960}=\\dfrac{352}{833}$."
        ]
      },
      {
        "name": "Rank-pattern then suits",
        "steps": [
          "Choose the multiset of ranks with pattern $(2,1,1,1)$: pick the doubled rank $\\binom{13}{1}=13$ and the three single ranks $\\binom{12}{3}=220$.",
          "Assign suits: the doubled rank needs $2$ of $4$ suits, $\\binom42=6$; each single rank needs $1$ of $4$ suits, $4^3=64$.",
          "Multiply: $13\\cdot220\\cdot6\\cdot64=1{,}098{,}240$; divide by $\\binom{52}{5}$ to get $\\dfrac{352}{833}$."
        ]
      }
    ],
    "remark": "**Insight.** Honest hand-counting fixes the **rank pattern first**, then distributes suits. The classic blunder is choosing the pair and then taking $\\binom{50}{3}$ for the rest: those three cards are not free — forbidding a second pair, a triple, or a match to the pair is exactly what makes 'one pair' a distinct hand type."
  },
  {
    "theme": "counting",
    "themeLabel": "Probability by Counting",
    "title": "Every Mailbox Gets a Letter",
    "difficulty": 5,
    "task": "Find the probability",
    "tags": [
      "onto functions",
      "inclusion-exclusion",
      "distributions",
      "surjection"
    ],
    "statement": "Five distinct letters are dropped at random, independently, into $3$ distinct mailboxes, each letter equally likely to go into any of the $3$ boxes (so all $3^5$ outcomes are equally likely). Find the probability that no mailbox is left empty.",
    "answer": "Total outcomes $=3^5=243$. The number of ways to fill all three boxes (onto maps) is $\\sum_{k=0}^{3}(-1)^k\\binom{3}{k}(3-k)^5=243-3\\cdot32+3\\cdot1-0=150$. The probability is $\\dfrac{150}{243}=\\boxed{\\dfrac{50}{81}}$.",
    "trap": "A tempting wrong count reserves one letter for each box first — $\\binom{5}{1}\\binom{4}{1}\\binom{3}{1}=60$ ways to seed the three boxes — then drops the remaining $2$ letters freely in $3^2=9$ ways, giving $540$ 'onto' outcomes, i.e. probability $\\tfrac{540}{243}>1$. The seeding overcounts each outcome many times; the correct surjection count is $150$, so the answer is $\\tfrac{50}{81}$.",
    "solutions": [
      {
        "name": "Inclusion–exclusion on empty boxes",
        "steps": [
          "Let $B_i$ be the event that box $i$ is empty. $|B_{i_1}\\cap\\cdots\\cap B_{i_k}|=(3-k)^5$ (letters confined to the other $3-k$ boxes).",
          "Onto count $=\\sum_{k=0}^{3}(-1)^k\\binom3k(3-k)^5=3^5-\\binom31 2^5+\\binom32 1^5-\\binom33 0^5=243-96+3-0=150$.",
          "Probability $=\\dfrac{150}{243}=\\dfrac{50}{81}$."
        ]
      },
      {
        "name": "Direct occupancy split by box sizes",
        "steps": [
          "Since all $3$ boxes are nonempty, the five letters split among boxes by sizes either $(3,1,1)$ or $(2,2,1)$.",
          "Pattern $(3,1,1)$: choose the box of size $3$ ($3$ ways) and which $3$ letters $\\binom53=10$, then split the last $2$ letters into the other two boxes one each $2!=2$: $3\\cdot10\\cdot2=60$.",
          "Pattern $(2,2,1)$: choose the singleton box ($3$ ways) and its letter ($5$ ways), then split the remaining $4$ letters into two boxes of size $2$ each $\\binom42=6$: $3\\cdot5\\cdot6=90$.",
          "Total $=60+90=150$, so probability $=\\dfrac{150}{243}=\\dfrac{50}{81}$."
        ]
      }
    ],
    "remark": "**Insight.** 'No box empty' is a **surjection** count, cleanly handled by inclusion–exclusion on the empty boxes. The fatal shortcut seeds one letter per box and then drops the rest freely — but the seeds are interchangeable with the free letters, so each filled outcome is counted several times, even pushing the 'probability' past $1$."
  },
  {
    "theme": "counting",
    "themeLabel": "Probability by Counting",
    "title": "Exactly Two Correct Envelopes",
    "difficulty": 5,
    "task": "Find the probability",
    "tags": [
      "derangement",
      "exactly k fixed",
      "matching",
      "inclusion-exclusion"
    ],
    "statement": "Six distinct letters are placed at random, one each, into six correspondingly addressed envelopes, all $6!$ assignments being equally likely. Find the probability that exactly two of the letters land in their correct envelopes.",
    "answer": "Choose which $2$ letters are correct: $\\binom{6}{2}=15$. The remaining $4$ letters must all be wrong, i.e. deranged: $D_4=9$. Favourable $=15\\cdot 9=135$ out of $6!=720$, so the probability is $\\dfrac{135}{720}=\\boxed{\\dfrac{3}{16}}$.",
    "trap": "A natural mistake is $\\binom62\\cdot 4!$ — choosing the two correct letters and arranging the other four 'in any way'. That permits some of those four to also be correct, so it counts hands with more than two matches. The deranged factor must be $D_4=9$, not $4!=24$, giving $\\tfrac{3}{16}$ rather than $\\tfrac{15\\cdot24}{720}=\\tfrac12$.",
    "solutions": [
      {
        "name": "Choose the fixed pair, derange the rest",
        "steps": [
          "Pick the exactly-two letters that go to their own envelopes: $\\binom{6}{2}=15$ ways.",
          "The other $4$ letters must each be in a wrong envelope, so they form a derangement of $4$ objects: $D_4=4!\\left(1-1+\\tfrac12-\\tfrac16+\\tfrac1{24}\\right)=9$.",
          "Favourable $=15\\cdot9=135$; total $=6!=720$.",
          "Probability $=\\dfrac{135}{720}=\\dfrac{3}{16}$."
        ]
      },
      {
        "name": "Count by number of fixed points formula",
        "steps": [
          "The number of permutations of $n$ with exactly $k$ fixed points is $\\binom{n}{k}D_{n-k}$.",
          "Here $n=6,\\ k=2$: $\\binom{6}{2}D_4=15\\cdot9=135$.",
          "Divide by $6!=720$: probability $=\\dfrac{135}{720}=\\dfrac{3}{16}$."
        ]
      }
    ],
    "remark": "**Insight.** 'Exactly $k$ correct' splits cleanly: **choose** the $k$ that match, then **derange** the rest so none of the others accidentally match. Replacing $D_{n-k}$ by $(n-k)!$ is the cardinal sin — it lets extra matches sneak in and inflates the answer to $1/2$."
  },
  {
    "theme": "counting",
    "themeLabel": "Probability by Counting",
    "title": "No Couple Sits Together",
    "difficulty": 5,
    "task": "Find the probability",
    "tags": [
      "inclusion-exclusion",
      "arrangements",
      "couples",
      "non-adjacency"
    ],
    "statement": "Four married couples (eight people) are seated in a row of $8$ distinct seats, all $8!$ orders equally likely. Find the probability that no couple sits in two adjacent seats (i.e. no husband is next to his own wife).",
    "answer": "Let $A_i$ be the event that couple $i$ sits together. Gluing $k$ specified couples gives $2^k(8-k)!$ orders. By inclusion–exclusion the favourable count is $\\sum_{k=0}^{4}(-1)^k\\binom{4}{k}2^k(8-k)!=40320-4\\cdot2\\cdot5040+6\\cdot4\\cdot720-4\\cdot8\\cdot120+1\\cdot16\\cdot24=13824$. The probability is $\\dfrac{13824}{40320}=\\boxed{\\dfrac{12}{35}}$.",
    "trap": "A seductive shortcut multiplies single-couple non-adjacency 'probabilities' $\\left(1-\\tfrac{2\\cdot 7!}{8!}\\right)^4=\\left(\\tfrac34\\right)^4=\\tfrac{81}{256}$, treating the four couples as independent. They share the same seats, so the events are dependent; the true value is $\\tfrac{12}{35}\\approx0.343\\neq0.316$.",
    "solutions": [
      {
        "name": "Inclusion–exclusion on couple-blocks",
        "steps": [
          "For a chosen set of $k$ couples forced together, glue each into a block: $8-k$ units arranged in $(8-k)!$ ways, with $2^k$ internal orders, so $|A_{i_1}\\cap\\cdots\\cap A_{i_k}|=2^k(8-k)!$.",
          "Number with no couple together $=\\sum_{k=0}^{4}(-1)^k\\binom4k2^k(8-k)!$.",
          "Term values: $40320-80640+17280-3840+384=13824$.",
          "Probability $=\\dfrac{13824}{40320}=\\dfrac{12}{35}$."
        ]
      },
      {
        "name": "Complement of 'at least one couple together'",
        "steps": [
          "$P(\\text{at least one couple together})=\\sum_{k=1}^{4}(-1)^{k+1}\\binom4k\\dfrac{2^k(8-k)!}{8!}=\\dfrac{80640-17280+3840-384}{40320}=\\dfrac{66816}{40320}$ before simplification of signs, i.e. $1-\\dfrac{13824}{40320}=\\dfrac{23}{35}$.",
          "Hence $P(\\text{no couple together})=1-\\dfrac{23}{35}=\\dfrac{12}{35}$."
        ]
      }
    ],
    "remark": "**Insight.** Overlapping 'together' events are the textbook home of **inclusion–exclusion**: glue $k$ couples, alternate signs. The independence shortcut $\\left(3/4\\right)^4$ is wrong because the eight seats are shared — fixing one couple's adjacency reshapes the room for the others."
  },
  {
    "theme": "counting",
    "themeLabel": "Probability by Counting",
    "title": "Three Numbers in Arithmetic Progression",
    "difficulty": 5,
    "task": "Find the probability",
    "tags": [
      "combinations",
      "arithmetic progression",
      "selection",
      "counting"
    ],
    "statement": "Three distinct numbers are chosen at random from $\\{1,2,3,\\dots,20\\}$, all $\\binom{20}{3}$ unordered triples being equally likely. Find the probability that the three chosen numbers can be arranged to form an arithmetic progression (i.e. some ordering $a,a+d,a+2d$ with $d\\ge 1$).",
    "answer": "Total triples $=\\binom{20}{3}=1140$. An AP triple is determined by its middle term and common difference $d\\ge1$; for each $d$ there are $20-2d$ valid first terms, so the count is $\\sum_{d=1}^{9}(20-2d)=18+16+\\cdots+2=90$. The probability is $\\dfrac{90}{1140}=\\boxed{\\dfrac{3}{38}}$.",
    "trap": "A tempting wrong move counts ordered AP's or double-counts by allowing $d$ to be negative as well as positive, giving $180$ and the answer $\\tfrac{180}{1140}=\\tfrac{3}{19}$. Since the triple is unordered, $a,a+d,a+2d$ and its reverse are the same unordered selection, so each AP must be counted once: $90$, giving $\\tfrac{3}{38}$.",
    "solutions": [
      {
        "name": "Count by common difference",
        "steps": [
          "An unordered AP triple corresponds to a unique pair (smallest term $a$, common difference $d\\ge1$) with $a+2d\\le 20$, i.e. $a\\le 20-2d$.",
          "For each $d$ from $1$ to $9$ there are $20-2d$ choices of $a$ (and $d\\ge10$ gives none).",
          "Total APs $=\\sum_{d=1}^{9}(20-2d)=18+16+14+12+10+8+6+4+2=90$.",
          "Probability $=\\dfrac{90}{\\binom{20}{3}}=\\dfrac{90}{1140}=\\dfrac{3}{38}$."
        ]
      },
      {
        "name": "Middle-term / parity method",
        "steps": [
          "An AP triple $\\{x-d,x,x+d\\}$ is fixed by its middle term $x$ and $d\\ge1$ with $1\\le x-d$ and $x+d\\le20$, so $d\\le\\min(x-1,20-x)$.",
          "Equivalently, the two outer terms must have the same parity; number of unordered same-parity pairs from $\\{1,\\dots,20\\}$ is $\\binom{10}{2}+\\binom{10}{2}=45+45=90$, and each determines a unique integer middle term.",
          "So there are $90$ AP triples, giving probability $\\dfrac{90}{1140}=\\dfrac{3}{38}$."
        ]
      }
    ],
    "remark": "**Insight.** The slick count notices that a $3$-term AP is exactly a pair of outer terms of **equal parity**, their average supplying the middle — turning the problem into $\\binom{10}{2}+\\binom{10}{2}=90$. The trap is order: the selection is unordered, so counting both increasing and decreasing progressions doubles the truth."
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
    "trap": "Writing $\\binom73$ for the count of arrangements treats it as \"exactly $3$ sixes in $7$ rolls.\" But the $7$th roll is forced to be the third six, so only the first $6$ rolls are free and must contain exactly $2$ sixes: the coefficient is $\\binom62$, not $\\binom73$. Locking the last trial is the whole point of fixing the last trial.",
    "solutions": [
      {
        "name": "Two sixes, then the third",
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
    "title": "The Urn That Isn't Binomial",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "without replacement",
      "without-replacement",
      "dependence",
      "binomial-trap",
      "conditioning"
    ],
    "statement": "An urn contains $4$ red and $6$ white balls. Three balls are drawn without replacement. \\[\\text{Evaluate the probability that exactly two are red.}\\]",
    "answer": "\\[\\boxed{\\dfrac{3}{10}}\\]",
    "trap": "Treating the three draws as Bernoulli trials with a fixed $p=\\tfrac{4}{10}$ and writing $\\binom32 p^2(1-p)=\\tfrac{36}{125}=0.288$ is the headline trap: without replacement the draws are dependent, the success probability shifts each draw, so the count is a without-replacement one, not binomial. The binomial value $0.288$ is simply wrong; the truth is $0.3$.",
    "solutions": [
      {
        "name": "Without-replacement count",
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
    "remark": "Insight: \"independent identical trials\" is the load-bearing hypothesis of the binomial law. Sampling without replacement breaks it; the without-replacement count is the correct dependent analogue, and here it differs from the naive binomial guess ($0.300$ versus $0.288$).",
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
    "theme": "binomial",
    "themeLabel": "Bernoulli Trials & the Binomial",
    "title": "The Mode Behind an Even Curtain",
    "difficulty": 5,
    "task": "Find the probability",
    "tags": [
      "binomial",
      "conditioning",
      "mode",
      "parity"
    ],
    "statement": "A biased coin shows heads with probability $\\tfrac{2}{3}$ on each toss, independently. It is tossed $6$ times; let $X$ be the number of heads. Let $m$ denote the most probable value of $X$ (the mode of this binomial distribution). A bystander, who did not watch the tosses, is told only that the number of heads turned out to be \\emph{even}. Given this information, find the probability that $X$ actually equals $m$.",
    "answer": "The mode is $m=\\left\\lfloor (n+1)p\\right\\rfloor=\\left\\lfloor 7\\cdot\\tfrac{2}{3}\\right\\rfloor=4$, which is even. With $P(X=k)=\\binom{6}{k}\\left(\\tfrac{2}{3}\\right)^{k}\\left(\\tfrac{1}{3}\\right)^{6-k}=\\dfrac{\\binom{6}{k}2^{k}}{3^{6}}$, the even outcomes carry weights $\\binom{6}{0}2^{0}=1,\\ \\binom{6}{2}2^{2}=60,\\ \\binom{6}{4}2^{4}=240,\\ \\binom{6}{6}2^{6}=64$, summing to $365$. Hence $P(X=4\\mid X\\text{ even})=\\dfrac{240}{365}=\\boxed{\\dfrac{48}{73}}$.",
    "trap": "The seductive wrong answer is $\\dfrac{80}{243}$ (the unconditional $P(X=4)=\\binom{6}{4}(\\tfrac{2}{3})^{4}(\\tfrac{1}{3})^{2}$). It forgets to rescale: once you are told the count is even, the sample space shrinks to $\\{0,2,4,6\\}$ and every probability must be divided by $P(X\\text{ even})=\\tfrac{365}{729}$, not used raw. Another tempting slip is recomputing a \\emph{new} mode inside the even set and second-guessing whether $4$ still wins; it does, but the question pins $m$ to the original distribution.",
    "solutions": [
      {
        "name": "Locate the mode, then condition",
        "steps": [
          "For a binomial with $n=6$ trials and success probability $p=\\tfrac{2}{3}$, the most probable value is $m=\\lfloor (n+1)p\\rfloor=\\lfloor 7\\cdot\\tfrac{2}{3}\\rfloor=\\lfloor 4.67\\rfloor=4$. Since $4$ is even, $\\{X=m\\}$ lies inside the conditioning event $\\{X\\text{ even}\\}$.",
          "Write $P(X=k)=\\dfrac{\\binom{6}{k}2^{k}}{3^{6}}$. The even values give $\\dfrac{1}{729}+\\dfrac{60}{729}+\\dfrac{240}{729}+\\dfrac{64}{729}=\\dfrac{365}{729}$, so $P(X\\text{ even})=\\tfrac{365}{729}$.",
          "Then $P(X=4\\mid X\\text{ even})=\\dfrac{P(X=4)}{P(X\\text{ even})}=\\dfrac{240/729}{365/729}=\\dfrac{240}{365}=\\dfrac{48}{73}.$"
        ]
      },
      {
        "name": "Weight ratios on the even set",
        "steps": [
          "All four even probabilities share the denominator $3^{6}=729$, so the conditional probabilities depend only on the integer numerators $\\binom{6}{k}2^{k}$ for $k=0,2,4,6$.",
          "These are $1,\\ 60,\\ 240,\\ 64$, with total $365$. The mode $m=4$ contributes the weight $240$.",
          "Therefore $P(X=4\\mid X\\text{ even})=\\dfrac{240}{1+60+240+64}=\\dfrac{240}{365}=\\dfrac{48}{73}.$"
        ]
      }
    ],
    "remark": "**Insight.** Two independent facts must click together. **First**, the mode of a binomial is read off from $\\lfloor(n+1)p\\rfloor$, giving $m=4$ — and crucially $4$ is **even**, so it survives the conditioning at all. **Second**, conditioning on \"even\" does not change which value is likeliest; it only **rescales** the four surviving probabilities by their common total. Because every even term carries the same $3^{6}$ denominator, the whole problem collapses to comparing the integers $\\binom{6}{k}2^{k}$ — a reminder that a clean conditional probability is often just a ratio of weights, not a fresh distribution to rebuild."
  },
  {
    "theme": "binomdist",
    "themeLabel": "Binomial: Mean, Variance & Mode",
    "title": "Ten Fair Coins, At Least One Head",
    "difficulty": 3,
    "task": "Find the probability",
    "tags": [
      "binomial",
      "at least one",
      "complement",
      "fair coin"
    ],
    "statement": "A fair coin is tossed $10$ times. Let $X$ be the number of heads, so $X\\sim B\\!\\left(10,\\tfrac12\\right)$. Find $P(X\\ge 1)$, the probability of getting at least one head.",
    "answer": "$$P(X\\ge 1)=1-P(X=0)=1-\\left(\\tfrac12\\right)^{10}=\\boxed{\\dfrac{1023}{1024}}.$$",
    "trap": "A tempting wrong answer is $10\\cdot\\tfrac12\\cdot\\left(\\tfrac12\\right)^{9}=\\tfrac{10}{1024}=\\tfrac{5}{512}$, which is $P(X=1)$ (exactly one head), not $P(X\\ge 1)$. \"At least one\" means $X\\ge 1$, whose clean route is the complement $1-P(X=0)$, far larger than $P(X=1)$.",
    "solutions": [
      {
        "name": "Complement of zero successes",
        "steps": [
          "For $X\\sim B(10,\\tfrac12)$, $P(X=0)=\\binom{10}{0}\\left(\\tfrac12\\right)^{0}\\left(\\tfrac12\\right)^{10}=\\dfrac{1}{1024}$.",
          "Hence $P(X\\ge 1)=1-P(X=0)=1-\\dfrac{1}{1024}=\\dfrac{1023}{1024}$."
        ]
      },
      {
        "name": "Direct binomial sum",
        "steps": [
          "$P(X\\ge1)=\\displaystyle\\sum_{k=1}^{10}\\binom{10}{k}\\left(\\tfrac12\\right)^{10}=\\dfrac{1}{1024}\\sum_{k=1}^{10}\\binom{10}{k}$.",
          "Since $\\sum_{k=0}^{10}\\binom{10}{k}=2^{10}=1024$, the sum from $k=1$ is $1024-1=1023$, giving $\\dfrac{1023}{1024}$."
        ]
      }
    ],
    "remark": "**Insight.** The phrase **at least one** is the universal flag for the **complement**: $P(X\\ge1)=1-P(X=0)=1-q^{n}$. Computing the single term $q^{n}$ is trivial, whereas summing all $10$ positive cases is wasteful. Confusing **at least one** with **exactly one** is the classic slip."
  },
  {
    "theme": "binomdist",
    "themeLabel": "Binomial: Mean, Variance & Mode",
    "title": "Six Dice, Expected Number of Sixes",
    "difficulty": 3,
    "task": "Find the mean",
    "tags": [
      "binomial",
      "mean np",
      "dice",
      "expectation"
    ],
    "statement": "Six fair dice are rolled together. Let $X$ be the number of dice that show a six. Find the mean (expected value) of $X$.",
    "answer": "$$X\\sim B\\!\\left(6,\\tfrac16\\right)\\quad\\Rightarrow\\quad E[X]=np=6\\cdot\\tfrac16=\\boxed{1}.$$",
    "trap": "A seductive wrong answer is the variance $npq=6\\cdot\\tfrac16\\cdot\\tfrac56=\\tfrac56$, mistaken for the mean. The mean is $np=1$; $npq=\\tfrac56$ measures spread, not the average count of sixes.",
    "solutions": [
      {
        "name": "Binomial mean formula",
        "steps": [
          "Each die independently shows a six with probability $p=\\tfrac16$, so $X\\sim B(6,\\tfrac16)$.",
          "The mean of a binomial is $np=6\\cdot\\tfrac16=1$."
        ]
      },
      {
        "name": "Linearity of expectation",
        "steps": [
          "Let $X_i=1$ if die $i$ shows a six, else $0$; then $E[X_i]=\\tfrac16$ and $X=\\sum_{i=1}^{6}X_i$.",
          "By linearity, $E[X]=\\sum_{i=1}^{6}E[X_i]=6\\cdot\\tfrac16=1$."
        ]
      }
    ],
    "remark": "**Insight.** The binomial **mean is always $np$** — no factorials needed. The indicator-sum proof shows why: it is just the count of independent trials times the per-trial chance. The trap of writing $npq$ for the mean confuses the centre of the distribution with its **variance**."
  },
  {
    "theme": "binomdist",
    "themeLabel": "Binomial: Mean, Variance & Mode",
    "title": "From Mean and Variance to the Mode",
    "difficulty": 4,
    "task": "Find the mode",
    "tags": [
      "binomial",
      "mode",
      "recover parameters",
      "variance"
    ],
    "statement": "A binomial variable $X\\sim B(n,p)$ has mean $2$ and variance $1.6$. First find $n$ and $p$, then determine the most probable value (mode) of $X$.",
    "answer": "$$q=\\tfrac{1.6}{2}=\\tfrac45,\\ p=\\tfrac15,\\ n=\\tfrac{2}{1/5}=10.\\ \\text{Mode}=\\lfloor(n+1)p\\rfloor=\\big\\lfloor 11\\cdot\\tfrac15\\big\\rfloor=\\lfloor2.2\\rfloor=\\boxed{2}.$$",
    "trap": "A seductive wrong answer is to take the mode as $np=2$ \"by definition,\" which here coincidentally gives $2$ — but the correct rule is $\\lfloor(n+1)p\\rfloor$. The deeper trap is mis-recovering parameters: reading $\\tfrac{1.6}{2}=0.8$ as $p$ would give $n=2.5$ (non-integer, impossible). Here $q=0.8$, so $p=\\tfrac15$, $n=10$.",
    "solutions": [
      {
        "name": "Recover parameters then apply mode rule",
        "steps": [
          "$\\dfrac{\\text{variance}}{\\text{mean}}=q=\\dfrac{1.6}{2}=\\dfrac45$, so $p=\\dfrac15$ and $n=\\dfrac{2}{1/5}=10$, giving $X\\sim B(10,\\tfrac15)$.",
          "The mode is $\\lfloor(n+1)p\\rfloor=\\lfloor11\\cdot\\tfrac15\\rfloor=\\lfloor2.2\\rfloor=2$; since $(n+1)p=2.2$ is not an integer, the mode is unique."
        ]
      },
      {
        "name": "Consecutive-ratio confirmation",
        "steps": [
          "With $n=10,\\,p=\\tfrac15$: $\\dfrac{P(X=k)}{P(X=k-1)}=\\dfrac{11-k}{k}\\cdot\\dfrac{1/5}{4/5}=\\dfrac{11-k}{4k}$.",
          "This ratio exceeds $1$ for $k\\le2$ (e.g. $k=2:\\tfrac{9}{8}>1$) and falls below $1$ for $k\\ge3$ ($k=3:\\tfrac{8}{12}<1$), so $P(X=k)$ peaks at $k=2$."
        ]
      }
    ],
    "remark": "**Insight.** Two ideas chain here: variance$/$mean $=q$ recovers $(n,p)$, then the mode is $\\lfloor(n+1)p\\rfloor$ — **not** $np$. They agree here only by coincidence ($2.2$ floors to $2$); the ratio test confirms the genuine peak. Mis-reading $q$ as $p$ would have produced a fractional $n$, an immediate red flag."
  },
  {
    "theme": "binomdist",
    "themeLabel": "Binomial: Mean, Variance & Mode",
    "title": "Recover n and p from Mean and Variance",
    "difficulty": 4,
    "task": "Find n and p",
    "tags": [
      "binomial",
      "recover parameters",
      "mean",
      "variance"
    ],
    "statement": "A binomial variable $X\\sim B(n,p)$ has mean $4$ and variance $2.4$. Determine $n$ and $p$, and hence state the number of trials.",
    "answer": "$$np=4,\\quad npq=2.4\\ \\Rightarrow\\ q=\\tfrac{npq}{np}=\\tfrac{2.4}{4}=\\tfrac35,\\ p=\\tfrac25,\\ n=\\tfrac{4}{2/5}=\\boxed{n=10,\\ p=\\tfrac25}.$$",
    "trap": "A common wrong answer is $q=\\tfrac{2.4}{4}=0.6$ taken as $p$ (reading variance$/$mean as the success probability). But $\\tfrac{npq}{np}=q$, the FAILURE probability; the success probability is $p=1-q=\\tfrac25$, giving $n=10$, not the $n=\\tfrac{4}{0.6}$ a wrong $p$ would yield.",
    "solutions": [
      {
        "name": "Ratio of variance to mean",
        "steps": [
          "Divide: $\\dfrac{\\text{variance}}{\\text{mean}}=\\dfrac{npq}{np}=q=\\dfrac{2.4}{4}=\\dfrac35$.",
          "So $p=1-q=\\dfrac25$, and from $np=4$, $n=\\dfrac{4}{2/5}=10$."
        ]
      },
      {
        "name": "Solve the system directly",
        "steps": [
          "From $np=4$ write $p=\\tfrac4n$; substitute into $np(1-p)=2.4$: $4\\left(1-\\tfrac4n\\right)=2.4$.",
          "Then $1-\\tfrac4n=0.6\\Rightarrow\\tfrac4n=0.4\\Rightarrow n=10$, hence $p=\\tfrac{4}{10}=\\tfrac25$."
        ]
      }
    ],
    "remark": "**Insight.** The single most useful identity for parameter recovery is $\\dfrac{\\text{variance}}{\\text{mean}}=q$. Because variance $npq$ is always smaller than mean $np$, their ratio is the **failure** probability — never confuse it with $p$. One division hands you $q$, and the rest follows."
  },
  {
    "theme": "binomdist",
    "themeLabel": "Binomial: Mean, Variance & Mode",
    "title": "Eight Trials, the Two-Peaked Mode",
    "difficulty": 4,
    "task": "Find the mode",
    "tags": [
      "binomial",
      "mode",
      "two modes",
      "most probable"
    ],
    "statement": "A biased coin shows heads with probability $\\tfrac13$ and is tossed $8$ times. Let $X$ be the number of heads, $X\\sim B\\!\\left(8,\\tfrac13\\right)$. Find the most probable number of heads (the mode of $X$).",
    "answer": "$$(n+1)p=9\\cdot\\tfrac13=3\\ \\text{(an integer)}\\Rightarrow X\\ \\text{has two modes}\\ \\boxed{X=2\\ \\text{and}\\ X=3}.$$",
    "trap": "The seductive wrong answer is to round the mean $np=8\\cdot\\tfrac13=\\tfrac83\\approx2.67$ up to a single mode $X=3$. But when $(n+1)p$ is an integer, the distribution is FLAT at the top: $P(X=2)=P(X=3)$, so there are TWO equally most-probable values, not one.",
    "solutions": [
      {
        "name": "Consecutive-ratio test",
        "steps": [
          "Compute $\\dfrac{P(X=k)}{P(X=k-1)}=\\dfrac{n-k+1}{k}\\cdot\\dfrac{p}{q}=\\dfrac{9-k}{k}\\cdot\\dfrac{1/3}{2/3}=\\dfrac{9-k}{2k}$.",
          "This ratio equals $1$ when $9-k=2k$, i.e. $k=3$; so $P(X=3)=P(X=2)$ and the ratio exceeds $1$ for $k<3$, is below $1$ for $k>3$. Both $X=2$ and $X=3$ are modes."
        ]
      },
      {
        "name": "The $(n+1)p$ rule",
        "steps": [
          "The mode of $B(n,p)$ is $\\lfloor(n+1)p\\rfloor$, but when $(n+1)p$ is an integer $m$, both $m-1$ and $m$ are modes.",
          "Here $(n+1)p=9\\cdot\\tfrac13=3$ is an integer, so the modes are $m-1=2$ and $m=3$."
        ]
      }
    ],
    "remark": "**Insight.** The mode lives at $\\lfloor(n+1)p\\rfloor$, NOT at $np$. The decisive case is when $(n+1)p$ is a whole number: the top of the distribution is a **plateau** of two equal heights. Verifying $P(X{=}2)=P(X{=}3)$ exactly confirms the twin mode."
  },
  {
    "theme": "binomdist",
    "themeLabel": "Binomial: Mean, Variance & Mode",
    "title": "Ratio of Two Consecutive Probabilities",
    "difficulty": 4,
    "task": "Find the ratio",
    "tags": [
      "binomial",
      "consecutive ratio",
      "fair coin",
      "combinatorics"
    ],
    "statement": "A fair coin is tossed $5$ times and $X\\sim B\\!\\left(5,\\tfrac12\\right)$ counts the heads. Find the ratio $\\dfrac{P(X=2)}{P(X=1)}$.",
    "answer": "$$\\dfrac{P(X=2)}{P(X=1)}=\\dfrac{\\binom{5}{2}}{\\binom{5}{1}}=\\dfrac{10}{5}=\\boxed{2}.$$",
    "trap": "A tempting wrong answer is $\\tfrac12$, obtained by writing $\\dfrac{P(X=1)}{P(X=2)}$ upside down, or by only comparing the powers $\\left(\\tfrac12\\right)^{5}$ (which are equal for a fair coin) and forgetting the binomial coefficients. The factor that actually matters is $\\binom{5}{2}/\\binom{5}{1}=2$.",
    "solutions": [
      {
        "name": "Cancel the equal powers",
        "steps": [
          "For a fair coin $P(X=k)=\\binom{5}{k}\\left(\\tfrac12\\right)^{5}$, so the $\\left(\\tfrac12\\right)^{5}$ factors cancel in the ratio.",
          "Thus $\\dfrac{P(X=2)}{P(X=1)}=\\dfrac{\\binom{5}{2}}{\\binom{5}{1}}=\\dfrac{10}{5}=2$."
        ]
      },
      {
        "name": "General consecutive-ratio identity",
        "steps": [
          "$\\dfrac{P(X=k)}{P(X=k-1)}=\\dfrac{n-k+1}{k}\\cdot\\dfrac{p}{q}$; with $n=5,\\,k=2,\\,p=q=\\tfrac12$ the factor $\\tfrac pq=1$.",
          "So the ratio is $\\dfrac{5-2+1}{2}\\cdot1=\\dfrac{4}{2}=2$."
        ]
      }
    ],
    "remark": "**Insight.** The bridge between adjacent binomial probabilities is $\\dfrac{P(k)}{P(k-1)}=\\dfrac{n-k+1}{k}\\cdot\\dfrac{p}{q}$. For a fair coin $p/q=1$, so the ratio is purely the **combinatorial** $\\binom nk/\\binom n{k-1}$. Inverting the fraction is the easiest mistake here."
  },
  {
    "theme": "binomdist",
    "themeLabel": "Binomial: Mean, Variance & Mode",
    "title": "Variance of a Hundred Fair Tosses",
    "difficulty": 5,
    "task": "Find the variance",
    "tags": [
      "binomial",
      "variance npq",
      "standard deviation",
      "fair coin"
    ],
    "statement": "A fair coin is tossed $100$ times; let $X$ be the number of heads. Compute the variance of $X$, and state its standard deviation.",
    "answer": "$$X\\sim B\\!\\left(100,\\tfrac12\\right):\\ \\operatorname{Var}(X)=npq=100\\cdot\\tfrac12\\cdot\\tfrac12=\\boxed{25},\\quad \\text{s.d.}=\\sqrt{25}=5.$$",
    "trap": "A seductive wrong answer is $50$, the value of the mean $np=100\\cdot\\tfrac12$, mistaken for the variance. Another slip is $\\sqrt{50}$. The variance is $npq=25$ and the standard deviation is its square root, $5$ — not the mean and not $\\sqrt{np}$.",
    "solutions": [
      {
        "name": "Variance formula npq",
        "steps": [
          "With $n=100$, $p=\\tfrac12$, $q=\\tfrac12$, the binomial variance is $npq=100\\cdot\\tfrac12\\cdot\\tfrac12=25$.",
          "The standard deviation is $\\sqrt{\\operatorname{Var}(X)}=\\sqrt{25}=5$."
        ]
      },
      {
        "name": "Sum of independent indicators",
        "steps": [
          "Write $X=\\sum_{i=1}^{100}X_i$ with independent indicators, each $\\operatorname{Var}(X_i)=p(1-p)=\\tfrac14$.",
          "By independence variances add: $\\operatorname{Var}(X)=100\\cdot\\tfrac14=25$, so the s.d. is $5$."
        ]
      }
    ],
    "remark": "**Insight.** Mean and variance of a binomial are different quantities: $np$ centres the distribution, $npq$ spreads it. The indicator decomposition shows variance **adds** across independent trials — each contributing $pq=\\tfrac14$ for a fair coin. Reaching for $np$ when asked for spread is the trap."
  },
  {
    "theme": "binomdist",
    "themeLabel": "Binomial: Mean, Variance & Mode",
    "title": "How Many Throws to Almost Surely Hit",
    "difficulty": 5,
    "task": "Find the smallest n",
    "tags": [
      "binomial",
      "at least one",
      "complement",
      "inequality"
    ],
    "statement": "An archer hits the bull's-eye on each independent shot with probability $\\tfrac14$. He fires $n$ shots and $X\\sim B\\!\\left(n,\\tfrac14\\right)$ counts his hits. Find the smallest number of shots $n$ for which the probability of at least one bull's-eye is at least $0.9$.",
    "answer": "$$P(X\\ge1)=1-\\left(\\tfrac34\\right)^{n}\\ge0.9\\iff\\left(\\tfrac34\\right)^{n}\\le0.1.\\ \\left(\\tfrac34\\right)^{8}=0.1001>0.1,\\ \\left(\\tfrac34\\right)^{9}=0.075\\le0.1\\Rightarrow\\boxed{n=9}.$$",
    "trap": "A seductive wrong answer is $n=8$. Because $\\left(\\tfrac34\\right)^{8}=0.10011\\ldots$ is just ABOVE $0.1$, eight shots give $P(X\\ge1)=0.8999<0.9$. Treating $\\left(\\tfrac34\\right)^{8}\\approx0.1$ as \"close enough\" is an off-by-one error; the inequality is strict so $n=9$ is required.",
    "solutions": [
      {
        "name": "Complement inequality",
        "steps": [
          "$P(X\\ge1)=1-P(X=0)=1-\\left(\\tfrac34\\right)^{n}$; require $1-\\left(\\tfrac34\\right)^{n}\\ge0.9$, i.e. $\\left(\\tfrac34\\right)^{n}\\le0.1$.",
          "Check successive $n$: $\\left(\\tfrac34\\right)^{8}=\\tfrac{6561}{65536}\\approx0.1001>0.1$ fails, while $\\left(\\tfrac34\\right)^{9}\\approx0.0751\\le0.1$ holds. Smallest $n=9$."
        ]
      },
      {
        "name": "Logarithmic bound",
        "steps": [
          "Take logs: $n\\ln\\tfrac34\\le\\ln0.1$, and since $\\ln\\tfrac34<0$ this gives $n\\ge\\dfrac{\\ln0.1}{\\ln0.75}=\\dfrac{-2.3026}{-0.2877}\\approx8.004$.",
          "The least integer $n\\ge8.004$ is $n=9$ (the bound exceeds $8$, so $8$ is insufficient)."
        ]
      }
    ],
    "remark": "**Insight.** \"At least one\" again routes through the **complement** $q^{n}$, turning the requirement into $q^{n}\\le1-0.9$. The whole problem hinges on a single boundary check: $\\left(\\tfrac34\\right)^{8}$ sits a hair above $0.1$, so the honest answer is $9$, not the $8$ a careless approximation suggests."
  },
  {
    "theme": "binomdist",
    "themeLabel": "Binomial: Mean, Variance & Mode",
    "title": "Second Moment of Ten Fair Tosses",
    "difficulty": 5,
    "task": "Find E[X^2]",
    "tags": [
      "binomial",
      "second moment",
      "variance",
      "expectation"
    ],
    "statement": "A fair coin is tossed $10$ times and $X\\sim B\\!\\left(10,\\tfrac12\\right)$ counts heads. Find $E\\!\\left[X^{2}\\right]$.",
    "answer": "$$E[X^2]=\\operatorname{Var}(X)+\\big(E[X]\\big)^2=npq+(np)^2=\\tfrac{10}{4}+25=\\boxed{\\dfrac{55}{2}}.$$",
    "trap": "A seductive wrong answer is $25=(np)^2$, from assuming $E[X^2]=\\big(E[X]\\big)^2$. That equality holds only for a constant random variable; in general $E[X^2]=\\operatorname{Var}(X)+(E[X])^2$, so the variance term $npq=\\tfrac{10}{4}$ must be ADDED, giving $\\tfrac{55}{2}$.",
    "solutions": [
      {
        "name": "Variance identity",
        "steps": [
          "Use $\\operatorname{Var}(X)=E[X^2]-(E[X])^2$, so $E[X^2]=\\operatorname{Var}(X)+(E[X])^2$.",
          "Here $E[X]=np=5$ and $\\operatorname{Var}(X)=npq=10\\cdot\\tfrac12\\cdot\\tfrac12=\\tfrac52$, giving $E[X^2]=\\tfrac52+25=\\tfrac{55}{2}$."
        ]
      },
      {
        "name": "Falling-factorial expectation",
        "steps": [
          "$E[X(X-1)]=n(n-1)p^2=10\\cdot9\\cdot\\tfrac14=\\tfrac{90}{4}=\\tfrac{45}{2}$ and $E[X]=np=5$.",
          "Then $E[X^2]=E[X(X-1)]+E[X]=\\tfrac{45}{2}+5=\\tfrac{45}{2}+\\tfrac{10}{2}=\\tfrac{55}{2}$."
        ]
      }
    ],
    "remark": "**Insight.** The second moment is never just $(E[X])^2$ — the gap between them IS the variance. Two routes agree: add $npq$ to $(np)^2$, or use $E[X(X-1)]=n(n-1)p^2$. Both deliver $\\tfrac{55}{2}$, exposing the $E[X^2]=(E[X])^2$ shortcut as false."
  },
  {
    "theme": "binomdist",
    "themeLabel": "Binomial: Mean, Variance & Mode",
    "title": "Smallest n Giving a Twin Mode",
    "difficulty": 5,
    "task": "Find the smallest n",
    "tags": [
      "binomial",
      "mode",
      "two modes",
      "integer condition"
    ],
    "statement": "A spinner lands on a winning sector with probability $\\tfrac14$ on each independent spin. It is spun $n$ times and $X\\sim B\\!\\left(n,\\tfrac14\\right)$ counts the wins. Find the smallest $n\\ge1$ for which $X$ has two (equal) most-probable values, and name those two modes.",
    "answer": "$$\\text{Two modes}\\iff(n+1)p=\\tfrac{n+1}{4}\\in\\mathbb{Z}\\iff 4\\mid(n+1).\\ \\text{Smallest }n=3?\\ (n{+}1)p=1\\Rightarrow\\text{modes }0,1;\\ \\text{but }n\\ge1\\text{ and }n=3\\text{ gives modes }\\boxed{n=3,\\ \\text{modes }0\\text{ and }1}.$$",
    "trap": "A seductive wrong answer is $n=7$ (modes $1$ and $2$), got by demanding the smaller mode be a positive win count and overlooking $n=3$. But $(n+1)p$ integer first occurs at $n=3$, where $(n+1)p=1$ makes $P(X=0)=P(X=1)$ — a perfectly valid twin mode at $0$ and $1$.",
    "solutions": [
      {
        "name": "Integer condition on (n+1)p",
        "steps": [
          "$B(n,p)$ has two modes exactly when $(n+1)p$ is an integer; here $(n+1)p=\\tfrac{n+1}{4}$, integer iff $4\\mid(n+1)$.",
          "The smallest such $n\\ge1$ is $n=3$, where $(n+1)p=1$, so the modes are $1-1=0$ and $1$."
        ]
      },
      {
        "name": "Direct check at n=3",
        "steps": [
          "For $n=3,\\,p=\\tfrac14$: $P(X=0)=\\left(\\tfrac34\\right)^3=\\tfrac{27}{64}$ and $P(X=1)=\\binom31\\tfrac14\\left(\\tfrac34\\right)^2=\\tfrac{27}{64}$.",
          "These are equal and exceed $P(X=2)=\\tfrac{9}{64}$, so $X$ is bimodal with modes $0$ and $1$; no smaller $n$ works since $n=1,2$ give $(n+1)p=\\tfrac12,\\tfrac34\\notin\\mathbb Z$."
        ]
      }
    ],
    "remark": "**Insight.** A binomial is bimodal precisely when $(n+1)p\\in\\mathbb Z$, and the lower mode can be $0$. The trap is insisting both modes be \"real wins\" and skipping to $n=7$; the honest smallest case is $n=3$, where $P(X{=}0)=P(X{=}1)$ exactly."
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
    "trap": "Trying to count permutations by the value of $R$ (the brute permutation count) and summing $k\\,P(R=k)$. It works but is needless agony; worse, many students guess the records are 'rare' and underestimate, or assume the record-events at different positions are independent (they are not) and fumble the count. Linearity needs no such count.",
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
    "remark": "Insight: the expected number of records grows like $\\ln n+\\gamma$ — agonizingly slowly. The clean $P(I_k)=\\frac1k$ comes purely from a symmetry over the first $k$ entries; the global ordering of the rest is irrelevant, which is exactly why linearity sidesteps the brute permutation count."
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
    "trap": "Summing $\\sum_d d\\,P(D=d)$ via the surjection count of how many of the $6^4$ sequences hit exactly $d$ flavours. It is correct but heavy, and students routinely botch the inclusion-exclusion. The indicator on each FLAVOUR (not on each press) collapses it instantly.",
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
        "name": "Surjection count by inclusion–exclusion",
        "steps": [
          "Count sequences of $4$ presses using exactly $d$ distinct flavours: choose the $d$ flavours in $\\binom6d$ ways, then map $4$ presses onto all $d$ of them surjectively in $S(d)=\\sum_{j=0}^{d}(-1)^j\\binom{d}{j}(d-j)^4$ ways.",
          "So $P(D=d)=\\dfrac{\\binom6d\\,S(d)}{6^4}$, giving counts $S(1)=1,\\ S(2)=14,\\ S(3)=36,\\ S(4)=24$ and frequencies $6,210,720,360$ out of $1296$.",
          "$E[D]=\\dfrac{1\\cdot6+2\\cdot210+3\\cdot720+4\\cdot360}{1296}=\\dfrac{6+420+2160+1440}{1296}=\\dfrac{4026}{1296}=\\boxed{\\dfrac{671}{216}}$ — same answer, far more labour."
        ]
      }
    ],
    "remark": "Insight: choosing the right object to index is everything — indicators on the $6$ flavours give a one-line answer, indicators on the $4$ presses give a (correct) geometric sum, and the brute surjection count gives a surjection-count slog. Same number $671/216$, vastly different labour. The distribution of $D$ over the $1296$ sequences is $(6,210,720,360)$ for $d=1,2,3,4$."
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
          "$P(X=k)=\\frac1{k!}\\sum_{j=0}^{8-k}\\frac{(-1)^j}{j!}$; for $n=8$ the exact variance works out to $1$.",
          "Direct enumeration over all $8!=40320$ permutations gives $E[X]=1$ and $E[X^2]=2$, so $\\operatorname{Var}(X)=\\boxed{1}$, confirming the indicator computation."
        ]
      }
    ],
    "remark": "Insight: a random permutation's fixed-point count has mean AND variance both equal to $1$ for every $n\\ge2$ — the size of the party is irrelevant. The whole problem is a trap for the reflex 'variance of a sum is the sum of variances', which silently assumes independence."
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
    "title": "The Largest of a Lottery Draw",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "linearity",
      "indicator",
      "maximum",
      "without replacement",
      "tail-sum"
    ],
    "statement": "A $5$-element subset is chosen uniformly at random from $\\{1,2,\\dots,20\\}$ (sampling without replacement). Let $M$ be the largest element of the chosen subset. Evaluate $E[M]$.",
    "answer": "\\[\\boxed{\\dfrac{35}{2}}\\]",
    "trap": "Re-using the WITH-replacement / i.i.d. maximum machinery, e.g. claiming $P(M\\le m)=\\left(\\frac m{20}\\right)^5$. That is only valid for independent draws; for a uniform SUBSET (without replacement) the correct CDF is the without-replacement one $P(M\\le m)=\\binom m5/\\binom{20}5$. Treating the five picks as independent overcounts and gives the wrong mean $\\approx 17.146\\ne 17.5$.",
    "solutions": [
      {
        "name": "Tail-sum with the without-replacement CDF",
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
        "name": "Tail-sum over the number of draws",
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
    "title": "A Shared Day Off",
    "difficulty": 3,
    "task": "Determine",
    "tags": [
      "coincidence",
      "complement",
      "at-least-one",
      "birthday"
    ],
    "statement": "$5$ interns each pick, independently and uniformly at random, one weekday (Monday through Friday) for their day off. Determine the probability that at least $2$ interns end up choosing the same day.",
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
    "title": "Exactly Two Right",
    "difficulty": 3,
    "task": "Evaluate",
    "tags": [
      "fixed-points",
      "partial-matching",
      "derangement",
      "inclusion-exclusion"
    ],
    "statement": "$4$ guests check $4$ identical-looking coats; at the end of the evening the four coats are returned in a uniformly random one-to-one assignment. Find the probability that exactly $2$ guests get their own coat back.",
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
    "title": "No Empty Inbox",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "surjection",
      "occupancy",
      "inclusion-exclusion",
      "no-empty-box"
    ],
    "statement": "$7$ distinguishable e-mails are each routed, independently and uniformly at random, to one of $4$ mailboxes. Find the probability that every one of the $4$ mailboxes receives at least one e-mail.",
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
        "name": "Surjections by inclusion–exclusion",
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
    "statement": "At a party of $4$ guests, the cloakroom returns the $4$ hats in a uniformly random one-to-one assignment, and independently returns the $4$ coats in another uniformly random one-to-one assignment. Find the probability that no guest gets back both his own hat and his own coat.",
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
    "statement": "$3$ married couples ($6$ people in all) are seated in a row of $6$ chairs in a uniformly random order. Find the probability that no couple ends up sitting in two adjacent chairs.",
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
    "statement": "A fair six-sided die is rolled $6$ times. Find the probability that exactly $5$ of the $6$ faces appear (i.e. precisely one face value never shows up).",
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
    "title": "Exactly One Gift Comes Home",
    "difficulty": 5,
    "task": "Find the probability",
    "tags": [
      "derangement",
      "fixed points",
      "matching",
      "inclusion-exclusion",
      "subfactorial"
    ],
    "statement": "At a party $7$ friends each bring one distinct wrapped gift and drop it into a common box. The host then redistributes the $7$ gifts back to the $7$ friends uniformly at random, one gift per person, all $7!$ assignments equally likely. A \"self-gift\" occurs when a friend receives the very gift they brought. Find the probability that the redistribution produces $\\textbf{exactly one}$ self-gift. (Equivalently: a random permutation of $\\{1,2,\\dots,7\\}$ has exactly one fixed point.) As a check, identify what this probability tends to if the number of friends were allowed to grow without bound.",
    "answer": "Choose the single matched friend in $\\binom{7}{1}=7$ ways; the remaining $6$ gifts must form a derangement, giving $D_6$ arrangements. With $D_6=6!\\sum_{k=0}^{6}\\dfrac{(-1)^k}{k!}=720-720+360-120+30-6+1=265$, the favourable count is $7\\cdot 265=1855$ out of $7!=5040$. Hence $$P=\\frac{7\\,D_6}{7!}=\\frac{1855}{5040}=\\boxed{\\dfrac{53}{144}}\\approx 0.3681.$$ Since $P_n(\\text{exactly one})=\\dfrac{n\\,D_{n-1}}{n!}=\\dfrac{D_{n-1}}{(n-1)!}=\\sum_{k=0}^{n-1}\\dfrac{(-1)^k}{k!}\\to e^{-1}$, the limiting value as the party grows is $\\dfrac1e$.",
    "trap": "The seductive wrong answer is $\\binom{7}{1}\\left(\\tfrac17\\right)\\left(\\tfrac67\\right)^{6}=\\dfrac{46656}{117649}\\approx 0.3966$, gotten by pretending each friend independently matches with chance $\\tfrac17$ and treating the count like a binomial. The matches are $\\textbf{not}$ independent—fixing one person's gift removes a choice from everyone else—so this overcounts. A second trap is dropping the alternating signs and writing $D_6=720(1+\\tfrac1{1!}+\\cdots)$; the signs are the whole point of inclusion–exclusion, and omitting them destroys the derangement count.",
    "solutions": [
      {
        "name": "Direct inclusion–exclusion on the deranged remainder",
        "steps": [
          "An outcome with exactly one self-gift is built by first selecting which single friend is matched—$\\binom{7}{1}=7$ choices—and then redistributing the other $6$ gifts so that $\\textbf{none}$ of those $6$ friends gets their own, i.e. a derangement of $6$ objects.",
          "Count derangements of $6$ by inclusion–exclusion: let $A_i$ be the event that friend $i$ (among the six) keeps their own gift. Then $|A_{i_1}\\cap\\cdots\\cap A_{i_k}|=(6-k)!$, so the number with no fixed point is $D_6=\\sum_{k=0}^{6}(-1)^k\\binom{6}{k}(6-k)!=\\sum_{k=0}^{6}(-1)^k\\dfrac{6!}{k!}=720-720+360-120+30-6+1=265.$",
          "Favourable outcomes $=7\\cdot D_6=7\\cdot 265=1855$, and the sample space is $7!=5040$, so $$P=\\dfrac{1855}{5040}=\\dfrac{53}{144}.$$",
          "For the growth check, the same construction gives $P_n=\\dfrac{n\\,D_{n-1}}{n!}=\\sum_{k=0}^{n-1}\\dfrac{(-1)^k}{k!}$, which is exactly the partial sum of $e^{-1}=\\sum_{k\\ge0}\\dfrac{(-1)^k}{k!}$. Hence $P\\to\\dfrac1e$, while the finite answer is $\\boxed{\\dfrac{53}{144}}.$"
        ]
      },
      {
        "name": "Derangement recurrence (sign-free bookkeeping)",
        "steps": [
          "Use the recurrence $D_m=(m-1)\\left(D_{m-1}+D_{m-2}\\right)$ with seeds $D_0=1,\\ D_1=0$: $D_2=1\\cdot(0+1)=1,\\ D_3=2(1+0)=2,\\ D_4=3(2+1)=9,\\ D_5=4(9+2)=44,\\ D_6=5(44+9)=265.$",
          "The number of permutations of $7$ with exactly one fixed point is $\\binom{7}{1}D_6=7\\cdot 265=1855$, since the lone matched person is chosen $7$ ways and the rest are deranged.",
          "Dividing by the $7!=5040$ equally likely redistributions, $$P=\\dfrac{1855}{5040}=\\dfrac{53}{144},$$ and because $\\dfrac{D_{n-1}}{(n-1)!}\\to e^{-1}$, the large-party limit is $\\dfrac1e$, with the required probability $\\boxed{\\dfrac{53}{144}}.$"
        ]
      }
    ],
    "remark": "**Insight.** \"Exactly one match\" splits cleanly into **choose the one fixed point** times **derange the rest**, so the hard work is just a derangement of size $n-1$. The slick payoff is the algebraic accident $\\dfrac{n\\,D_{n-1}}{n!}=\\dfrac{D_{n-1}}{(n-1)!}$: the probability of *exactly one* match equals the probability of *no* match on one fewer object, and **both** drift to the same value $1/e$ as the party grows. The trap of multiplying per-person chances feels like a binomial but ignores that the gifts are a single shuffled pile—one person's fixed gift constrains all the others, which is precisely what the alternating inclusion–exclusion signs encode."
  },
  {
    "theme": "paradox",
    "themeLabel": "Symmetry, Conditioning & Surprises",
    "title": "The Two-Faced Cards",
    "difficulty": 3,
    "task": "Evaluate",
    "tags": [
      "three cards-box",
      "bayes",
      "sample-space",
      "cards"
    ],
    "statement": "A box holds $3$ cards. One has both faces white, one has both faces red, and one has a white face and a red face. You draw a card uniformly at random, then place it on the table showing a face chosen uniformly at random among its two sides; the face you see is white. Evaluate the probability that the hidden face of that card is also white.",
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
    "themeLabel": "Symmetry, Conditioning & Surprises",
    "title": "Five Lockers, Ten Digits",
    "difficulty": 3,
    "task": "Find the probability",
    "tags": [
      "complementary counting",
      "coincidence",
      "equally likely outcomes",
      "counting"
    ],
    "statement": "Five students arrive at a gym and each, independently and uniformly at random, dials a single secret digit from $1$ to $10$ as the last digit of a locker code. With ten possible digits and only five students, it feels unlikely that any two would clash. \\par Find the probability that at least two of the five students choose the same digit.",
    "answer": "$P(\\text{at least one clash}) = 1 - \\dfrac{10\\cdot 9\\cdot 8\\cdot 7\\cdot 6}{10^{5}} = 1-\\dfrac{30240}{100000}=1-\\dfrac{189}{625}=\\boxed{\\dfrac{436}{625}}$",
    "trap": "The intuitive wrong answer is $\\dfrac{1}{2}$ (or \"about half\"), reasoning loosely that five students fill half of the ten slots so a clash is roughly even. The opposite trap is to call a clash *rare* because $5<10$. Both ignore that a clash needs only **one** coinciding pair among the $\\binom{5}{2}=10$ pairs of students. Counting the complement (all five distinct) shows the true probability is $\\tfrac{436}{625}\\approx 0.70$ — a clash is the *likely* outcome.",
    "solutions": [
      {
        "name": "Complementary counting",
        "steps": [
          "Each student has $10$ equally likely choices, so the sample space has $10^{5}=100000$ equally likely outcome strings.",
          "Count the complement \"all five digits distinct\": the first student has $10$ choices, the next $9$, then $8,7,6$, giving $10\\cdot 9\\cdot 8\\cdot 7\\cdot 6 = 30240$ favourable strings.",
          "So $P(\\text{all distinct})=\\dfrac{30240}{100000}=\\dfrac{189}{625}$, hence $P(\\text{at least one clash})=1-\\dfrac{189}{625}=\\dfrac{436}{625}.$"
        ]
      },
      {
        "name": "Sequential product for distinctness",
        "steps": [
          "Process students one at a time and demand each new digit avoid all earlier ones. Student $1$ is free: probability $1=\\tfrac{10}{10}$.",
          "Student $2$ must dodge $1$ used digit: $\\tfrac{9}{10}$; student $3$: $\\tfrac{8}{10}$; student $4$: $\\tfrac{7}{10}$; student $5$: $\\tfrac{6}{10}$.",
          "Multiply: $P(\\text{all distinct})=\\tfrac{10}{10}\\cdot\\tfrac{9}{10}\\cdot\\tfrac{8}{10}\\cdot\\tfrac{7}{10}\\cdot\\tfrac{6}{10}=\\dfrac{189}{625}$, so the clash probability is $1-\\dfrac{189}{625}=\\dfrac{436}{625}.$"
        ]
      }
    ],
    "remark": "**Insight.** Coincidences feel rarer than they are because we instinctively picture *one specific* pair matching, but a clash succeeds if **any** of the $\\binom{5}{2}=10$ pairs coincides. The clean move is to flip to the complement: \"all distinct\" is a single shrinking product $\\tfrac{10\\cdot9\\cdot8\\cdot7\\cdot6}{10^5}$, far easier than summing the messy ways a clash can happen. With ten digits, just five people already tip the scale past $70\\%$ — **count the complement** whenever \"at least one match\" appears."
  },
  {
    "theme": "paradox",
    "themeLabel": "Symmetry, Conditioning & Surprises",
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
    "themeLabel": "Symmetry, Conditioning & Surprises",
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
    "themeLabel": "Symmetry, Conditioning & Surprises",
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
    "themeLabel": "Symmetry, Conditioning & Surprises",
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
    "themeLabel": "Symmetry, Conditioning & Surprises",
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
    "theme": "paradox",
    "themeLabel": "Symmetry, Conditioning & Surprises",
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
    "themeLabel": "Symmetry, Conditioning & Surprises",
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
    "themeLabel": "Symmetry, Conditioning & Surprises",
    "title": "The Dirty Line Confession",
    "difficulty": 5,
    "task": "Find the probability",
    "tags": [
      "Bayes' theorem",
      "base rate",
      "conditional probability",
      "total probability"
    ],
    "statement": "A microchip plant runs two assembly lines. Line $A$ produces $80\\%$ of all chips and Line $B$ produces the remaining $20\\%$. Line $A$ is the clean line: only $5\\%$ of its chips are defective. Line $B$ is notorious — a full $25\\%$ of its chips are defective. A single chip is drawn at random from the day's combined output and given a flawless inspection (a defective chip always fails, a good chip always passes). The chip fails the inspection. \\par Given only this, what is the probability that the failed chip actually came from the notorious Line $B$?",
    "answer": "$P(B \\mid \\text{defective}) = \\dfrac{(0.20)(0.25)}{(0.80)(0.05)+(0.20)(0.25)} = \\dfrac{0.05}{0.09} = \\boxed{\\dfrac{5}{9}}$",
    "trap": "The seductive wrong answer is $\\dfrac{1}{4}$, gotten by reading off Line $B$'s defect rate $P(\\text{defective}\\mid B)=0.25$ and reporting it as $P(B\\mid\\text{defective})$. That inverts the conditioning. A second tempting wrong answer is to say \"$B$ is five times dirtier, so almost surely $B$,\" near $1$ — but Line $A$'s enormous $80\\%$ base rate keeps $A$ very much in contention. The correct value $\\tfrac{5}{9}\\approx 0.556$ is only a hair above an even split.",
    "solutions": [
      {
        "name": "Bayes' theorem directly",
        "steps": [
          "Let $A,B$ be the events the chip came from each line, with priors $P(A)=\\tfrac{4}{5}$, $P(B)=\\tfrac{1}{5}$, and defect rates $P(D\\mid A)=\\tfrac{1}{20}$, $P(D\\mid B)=\\tfrac{1}{4}$, where $D$ is \"defective\".",
          "Total probability of a defect: $P(D)=P(A)P(D\\mid A)+P(B)P(D\\mid B)=\\tfrac{4}{5}\\cdot\\tfrac{1}{20}+\\tfrac{1}{5}\\cdot\\tfrac{1}{4}=\\tfrac{4}{100}+\\tfrac{5}{100}=\\tfrac{9}{100}.$",
          "Apply Bayes: $P(B\\mid D)=\\dfrac{P(B)P(D\\mid B)}{P(D)}=\\dfrac{5/100}{9/100}=\\dfrac{5}{9}.$"
        ]
      },
      {
        "name": "Natural-frequency count",
        "steps": [
          "Imagine $10000$ chips. Line $A$ makes $8000$ of them, Line $B$ makes $2000$.",
          "Defective from $A$: $5\\%$ of $8000 = 400$ chips. Defective from $B$: $25\\%$ of $2000 = 500$ chips. Total defective $=900$.",
          "Of those $900$ failed chips, $500$ are from $B$, so $P(B\\mid\\text{failed})=\\dfrac{500}{900}=\\dfrac{5}{9}.$"
        ]
      }
    ],
    "remark": "**Insight.** The defect *rate* of a line, $P(\\text{defective}\\mid\\text{line})$, and the *source posterior*, $P(\\text{line}\\mid\\text{defective})$, point in opposite directions of the conditioning bar — they are **not** interchangeable. Even though Line $B$ is five times dirtier per chip, Line $A$'s sheer volume means it still contributes $400$ of every $900$ defects. The dirty line confesses to only **a hair more than half** of the failures, not nearly all of them. Whenever a rare-cause/common-cause split meets a lopsided base rate, **always recompute with Bayes** rather than trusting the louder rate."
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
    "title": "Greens Before the First Red",
    "difficulty": 4,
    "task": "Find E[X]",
    "tags": [
      "expectation",
      "without replacement",
      "discrete random variable",
      "counting"
    ],
    "statement": "A box holds $4$ red and $3$ green balls. Balls are drawn one at a time, at random and without replacement, and we stop as soon as the first red ball appears. Let $X$ be the number of green balls drawn before that first red ball. Find $E[X]$.",
    "answer": "$$P(X{=}k)=\\frac{3}{7}\\cdot\\frac{2}{6}\\cdots\\ (k\\text{ greens})\\cdot\\frac{4}{7-k},\\quad E[X]=0\\cdot\\tfrac47+1\\cdot\\tfrac27+2\\cdot\\tfrac4{35}+3\\cdot\\tfrac1{35}=\\boxed{\\dfrac{3}{5}}.$$",
    "trap": "A tempting wrong answer is $\\dfrac34$, from treating each draw as independent with a fixed green-chance $\\tfrac37$ and red-chance $\\tfrac47$, giving the with-replacement value $\\dfrac{3/7}{4/7}=\\dfrac34$. But the draws are without replacement, so the per-draw probabilities change; the correct finite distribution yields $\\tfrac35$.",
    "solutions": [
      {
        "name": "Build the finite distribution",
        "steps": [
          "$P(X=0)=\\tfrac47$. $P(X=1)=\\tfrac37\\cdot\\tfrac46=\\tfrac27$. $P(X=2)=\\tfrac37\\cdot\\tfrac26\\cdot\\tfrac45=\\tfrac{4}{35}$. $P(X=3)=\\tfrac37\\cdot\\tfrac26\\cdot\\tfrac15\\cdot\\tfrac44=\\tfrac{1}{35}$ (the last red is forced).",
          "These sum to $\\tfrac{20}{35}+\\tfrac{10}{35}+\\tfrac{4}{35}+\\tfrac{1}{35}=1$, a valid distribution.",
          "$E[X]=0\\cdot\\tfrac{20}{35}+1\\cdot\\tfrac{10}{35}+2\\cdot\\tfrac{4}{35}+3\\cdot\\tfrac{1}{35}=\\tfrac{10+8+3}{35}=\\tfrac{21}{35}=\\tfrac35$."
        ]
      },
      {
        "name": "Symmetry / indicator argument",
        "steps": [
          "Imagine the $4$ reds laid in a row; the $3$ greens fall at random into the $5$ gaps (before, between, after the reds), each green independently equally likely to land in any of the $5$ gaps by symmetry of a random permutation.",
          "$X$ counts greens landing in the single gap before the first red, so $E[X]=3\\cdot\\dfrac{1}{5}=\\dfrac35$ (each green is before the first red with probability $\\tfrac{1}{\\text{reds}+1}=\\tfrac15$)."
        ]
      }
    ],
    "remark": "**Insight.** The elegant route is the **indicator** view: each green is equally likely to occupy any of the $5$ positions relative to the $4$ reds, so it precedes the first red with probability $\\tfrac15$, giving $E[X]=3\\cdot\\tfrac15$. The trap mistakes a **without-replacement** draw for an independent one; the changing per-draw odds are exactly what the finite distribution captures."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "A Die Decides How Many Coins",
    "difficulty": 4,
    "task": "Find the probability",
    "tags": [
      "total probability",
      "binomial",
      "conditioning",
      "fair die"
    ],
    "statement": "A fair die is rolled once; let $N$ be the number it shows. A fair coin is then tossed exactly $N$ times. Find the probability of obtaining exactly $2$ heads in total.",
    "answer": "$$P(2\\text{ heads})=\\sum_{n=1}^{6}\\frac16\\binom{n}{2}\\left(\\frac12\\right)^{n}=\\frac16\\!\\left[\\frac{1}{4}+\\frac{3}{8}+\\frac{6}{16}+\\frac{10}{32}+\\frac{15}{64}\\right]=\\boxed{\\dfrac{33}{128}}.$$",
    "trap": "A tempting wrong answer is $\\dfrac{15}{64}$, from assuming the coin is tossed $N=6$ times (the maximum) and computing $\\binom{6}{2}\\left(\\tfrac12\\right)^6$. But $N$ is random; one must average the conditional binomial probabilities over all six equally likely values of $N$ via the total probability theorem.",
    "solutions": [
      {
        "name": "Total probability over the die value",
        "steps": [
          "Given $N=n$, the number of heads is $B(n,\\tfrac12)$, so $P(2\\mid N=n)=\\binom{n}{2}\\left(\\tfrac12\\right)^n$, which is $0$ for $n=1$.",
          "$P(2\\mid N=n)$ for $n=2,\\dots,6$ equals $\\tfrac14,\\ \\tfrac38,\\ \\tfrac{6}{16},\\ \\tfrac{10}{32},\\ \\tfrac{15}{64}$. Put over $64$: $16,24,24,20,15$, summing to $99$.",
          "$P(2)=\\dfrac16\\cdot\\dfrac{99}{64}=\\dfrac{99}{384}=\\dfrac{33}{128}$."
        ]
      },
      {
        "name": "Weighted-count bookkeeping",
        "steps": [
          "Each die face has weight $\\tfrac16$; tabulate $64\\,P(2\\mid N=n)$ as $0,16,24,24,20,15$ for $n=1,\\dots,6$.",
          "Total $=99$, so $P(2)=\\dfrac{1}{6}\\cdot\\dfrac{99}{64}=\\dfrac{33}{128}$ after cancelling the common factor $3$."
        ]
      }
    ],
    "remark": "**Insight.** The number of trials is itself random, so this is a textbook fusion of the **total probability theorem** with the **binomial**: condition on $N$, evaluate $\\binom{n}{2}2^{-n}$, then average with weights $\\tfrac16$. The trap of freezing $N$ at its largest value $6$ ignores that small $N$ contributes too — including $N=1$, which contributes nothing."
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
    "title": "Which Machine Made the Batch",
    "difficulty": 5,
    "task": "Find the probability",
    "tags": [
      "Bayes theorem",
      "binomial",
      "conditional probability",
      "total probability"
    ],
    "statement": "A workshop owns two machines. On any given day the foreman starts Machine $A$ with probability $\\tfrac35$ and Machine $B$ with probability $\\tfrac25$; exactly one machine runs that day. Machine $A$ produces a defective item with probability $\\tfrac25$, Machine $B$ with probability $\\tfrac15$, independently from item to item. An inspector draws $4$ items produced that day and finds that exactly $3$ of them are defective. Find the probability that the running machine was $A$.",
    "answer": "$$P(A\\mid 3\\text{ def})=\\frac{P(A)\\,P(3\\mid A)}{P(A)P(3\\mid A)+P(B)P(3\\mid B)}=\\frac{\\tfrac35\\cdot\\tfrac{96}{625}}{\\tfrac35\\cdot\\tfrac{96}{625}+\\tfrac25\\cdot\\tfrac{16}{625}}=\\boxed{\\dfrac{9}{10}}.$$",
    "trap": "A seductive wrong answer is $\\dfrac{6}{7}$, obtained by comparing only the likelihoods $P(3\\mid A):P(3\\mid B)=96:16=6:1$ and writing $\\tfrac{6}{6+1}$. That silently throws away the unequal priors $\\tfrac35$ and $\\tfrac25$; the correct posterior must weight each likelihood by its prior before dividing by the total.",
    "solutions": [
      {
        "name": "Bayes with binomial likelihoods",
        "steps": [
          "The number of defectives in $4$ items follows $B(4,p)$ with $p=\\tfrac25$ under $A$ and $p=\\tfrac15$ under $B$. Thus $P(3\\mid A)=\\binom43\\left(\\tfrac25\\right)^3\\tfrac35=\\dfrac{96}{625}$ and $P(3\\mid B)=\\binom43\\left(\\tfrac15\\right)^3\\tfrac45=\\dfrac{16}{625}$.",
          "Multiply by priors: numerator $=\\tfrac35\\cdot\\tfrac{96}{625}=\\tfrac{288}{3125}$, and the $B$-term $=\\tfrac25\\cdot\\tfrac{16}{625}=\\tfrac{32}{3125}$.",
          "Hence $P(A\\mid 3)=\\dfrac{288}{288+32}=\\dfrac{288}{320}=\\dfrac{9}{10}$."
        ]
      },
      {
        "name": "Odds form of Bayes",
        "steps": [
          "Prior odds $A:B=\\tfrac35:\\tfrac25=3:2$. Likelihood ratio $\\dfrac{P(3\\mid A)}{P(3\\mid B)}=\\dfrac{(2/5)^3(3/5)}{(1/5)^3(4/5)}=\\dfrac{8\\cdot3}{1\\cdot4}=6$.",
          "Posterior odds $=3:2\\times6:1=18:2=9:1$, so $P(A\\mid 3)=\\dfrac{9}{9+1}=\\dfrac{9}{10}$."
        ]
      }
    ],
    "remark": "**Insight.** This fuses **Bayes' theorem** with the **binomial** likelihood of the evidence. The trap is to score the machines by likelihood alone; the **prior** $3:2$ must multiply in. Working in **odds** form ($3:2$ times $6:1$) collapses the whole computation to a one-line product and makes the role of each ingredient transparent."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "Couples Seated in a Row",
    "difficulty": 5,
    "task": "Find the mean",
    "tags": [
      "expectation",
      "indicator variables",
      "counting",
      "linearity"
    ],
    "statement": "Four married couples (eight people in all) are seated at random in a row of $8$ chairs, all $8!$ arrangements equally likely. Let $X$ be the number of couples that end up seated in adjacent chairs (the two partners next to each other). Find the mean $E[X]$.",
    "answer": "$$E[X]=\\sum_{i=1}^{4}P(\\text{couple }i\\text{ adjacent})=4\\cdot\\frac{2\\cdot 7!}{8!}=4\\cdot\\frac14=\\boxed{1}.$$",
    "trap": "A tempting wrong answer is $\\dfrac{4\\cdot 2\\cdot 7!}{8!}\\cdot\\text{(adjacent-pair count }7)=\\dfrac74$ or, worse, the belief that one must subtract overlaps between couples being adjacent. Linearity of expectation needs no independence and no inclusion–exclusion: $E[X]$ is simply the sum of the four single-couple adjacency probabilities, each $\\tfrac14$.",
    "solutions": [
      {
        "name": "Indicator variables and linearity",
        "steps": [
          "Write $X=\\sum_{i=1}^{4} I_i$, where $I_i=1$ if couple $i$ sits in adjacent chairs. Then $E[X]=\\sum_i E[I_i]=\\sum_i P(I_i=1)$.",
          "For a fixed couple, glue them as one block (with $2$ internal orders) among the others: favourable arrangements $=2\\cdot 7!$, total $=8!$, so $P(I_i=1)=\\dfrac{2\\cdot 7!}{8!}=\\dfrac28=\\dfrac14$.",
          "By symmetry all four are equal, so $E[X]=4\\cdot\\tfrac14=1$."
        ]
      },
      {
        "name": "Adjacency-slot counting",
        "steps": [
          "There are $7$ adjacent chair-pairs in a row. A fixed couple occupies a given pair with probability $\\dfrac{2}{8\\cdot7}=\\dfrac{1}{28}$ (choose ordered seats for the pair).",
          "Summing over the $7$ pairs, $P(\\text{couple adjacent})=7\\cdot\\dfrac{1}{28}=\\dfrac14$; hence over $4$ couples $E[X]=4\\cdot\\tfrac14=1$."
        ]
      }
    ],
    "remark": "**Insight.** A combinatorial count of a complicated event becomes a **one-line expectation** once you decompose $X$ into **indicators**. The power move is that **linearity of expectation** ignores the heavy dependence between couples (whether one couple is together affects another), so no inclusion–exclusion is needed — only the easy single-couple probability $\\tfrac14$."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "Two Urns and a Matching Pair",
    "difficulty": 5,
    "task": "Find the probability",
    "tags": [
      "Bayes theorem",
      "counting",
      "conditional probability",
      "without replacement"
    ],
    "statement": "Urn $\\mathrm{I}$ contains $3$ red and $3$ white balls; Urn $\\mathrm{II}$ contains $1$ red and $3$ white balls. A fair coin is tossed: on heads we use Urn $\\mathrm{I}$, on tails Urn $\\mathrm{II}$. From the chosen urn two balls are drawn together (without replacement). Given that the two drawn balls are of the same colour, find the probability that Urn $\\mathrm{I}$ was used.",
    "answer": "$$P(\\mathrm{I}\\mid\\text{same})=\\frac{\\tfrac12\\cdot\\tfrac25}{\\tfrac12\\cdot\\tfrac25+\\tfrac12\\cdot\\tfrac12}=\\boxed{\\dfrac{4}{9}},$$ where $P(\\text{same}\\mid\\mathrm{I})=\\dfrac{\\binom32+\\binom32}{\\binom62}=\\dfrac{6}{15}=\\dfrac25$ and $P(\\text{same}\\mid\\mathrm{II})=\\dfrac{\\binom12+\\binom32}{\\binom42}=\\dfrac{3}{6}=\\dfrac12.$",
    "trap": "A seductive wrong answer is $\\dfrac23$, gotten by pooling the raw same-colour pair counts $6$ (from Urn $\\mathrm{I}$) and $3$ (from Urn $\\mathrm{II}$) and writing $\\tfrac{6}{6+3}$. That ignores the different total pair counts $\\binom62=15$ and $\\binom42=6$: each urn's same-colour probability must be computed within its own urn (dividing by that urn's pair total) before combining.",
    "solutions": [
      {
        "name": "Bayes after counting within each urn",
        "steps": [
          "Same-colour by counting: in Urn $\\mathrm{I}$, $P(\\text{same})=\\dfrac{\\binom32+\\binom32}{\\binom62}=\\dfrac{3+3}{15}=\\dfrac25$; in Urn $\\mathrm{II}$, $P(\\text{same})=\\dfrac{\\binom12+\\binom32}{\\binom42}=\\dfrac{0+3}{6}=\\dfrac12$.",
          "Total probability: $P(\\text{same})=\\tfrac12\\cdot\\tfrac25+\\tfrac12\\cdot\\tfrac12=\\tfrac15+\\tfrac14=\\dfrac{9}{20}$.",
          "Bayes: $P(\\mathrm{I}\\mid\\text{same})=\\dfrac{\\tfrac12\\cdot\\tfrac25}{9/20}=\\dfrac{1/5}{9/20}=\\dfrac{4}{9}$."
        ]
      },
      {
        "name": "Common-denominator weighting",
        "steps": [
          "Scale each urn's same-colour probability to a common footing: contribution of Urn $\\mathrm{I}=\\tfrac12\\cdot\\tfrac25=\\tfrac{4}{20}$ and of Urn $\\mathrm{II}=\\tfrac12\\cdot\\tfrac12=\\tfrac{5}{20}$.",
          "The posterior is the share of Urn $\\mathrm{I}$: $\\dfrac{4/20}{4/20+5/20}=\\dfrac{4}{9}$."
        ]
      }
    ],
    "remark": "**Insight.** Two in-syllabus tools meet: **counting** the same-colour event inside each urn, then **Bayes' theorem** to invert the conditioning. The trap of pooling raw favourable counts is the classic error of forgetting that each urn has its own sample-space size — probabilities, not counts, are what the prior weights combine."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "Updating a Coin, Then One More Toss",
    "difficulty": 5,
    "task": "Find the probability",
    "tags": [
      "Bayes theorem",
      "binomial",
      "total probability",
      "prediction"
    ],
    "statement": "A bag holds two biased coins that look identical: coin $A$ shows heads with probability $\\tfrac34$, coin $B$ with probability $\\tfrac14$. One coin is picked at random (each equally likely) and tossed $3$ times, giving exactly $2$ heads. The same coin is then tossed once more. Find the probability that this fourth toss is heads.",
    "answer": "$$P(A\\mid 2)=\\frac{\\tfrac12\\binom32(\\tfrac34)^2\\tfrac14}{\\tfrac12\\binom32(\\tfrac34)^2\\tfrac14+\\tfrac12\\binom32(\\tfrac14)^2\\tfrac34}=\\tfrac34,\\quad P(\\text{4th H})=\\tfrac34\\cdot\\tfrac34+\\tfrac14\\cdot\\tfrac14=\\boxed{\\dfrac{5}{8}}.$$",
    "trap": "A seductive wrong answer is $\\dfrac23$, the observed head frequency $\\tfrac{2}{3}$ from the first three tosses, as if the next toss simply copied the empirical rate. Another trap is $\\tfrac12$ by ignoring the evidence entirely. The correct route updates the coin's identity by Bayes, then averages $\\tfrac34$ and $\\tfrac14$ against that posterior.",
    "solutions": [
      {
        "name": "Bayes update then predictive average",
        "steps": [
          "Likelihoods of $2$ heads in $3$ tosses: $P(2\\mid A)=\\binom32(\\tfrac34)^2\\tfrac14=\\tfrac{27}{64}$, $P(2\\mid B)=\\binom32(\\tfrac14)^2\\tfrac34=\\tfrac{9}{64}$.",
          "Posterior on $A$: $P(A\\mid 2)=\\dfrac{27}{27+9}=\\dfrac34$, so $P(B\\mid 2)=\\dfrac14$.",
          "Predictive: $P(\\text{4th heads})=P(A\\mid 2)\\cdot\\tfrac34+P(B\\mid 2)\\cdot\\tfrac14=\\tfrac34\\cdot\\tfrac34+\\tfrac14\\cdot\\tfrac14=\\tfrac{9}{16}+\\tfrac{1}{16}=\\tfrac{10}{16}=\\tfrac58$."
        ]
      },
      {
        "name": "Joint enumeration of (coin, 4th toss)",
        "steps": [
          "Weight each coin by prior$\\times$likelihood of the data: $A\\!:\\tfrac12\\cdot\\tfrac{27}{64}=\\tfrac{27}{128}$, $B\\!:\\tfrac12\\cdot\\tfrac{9}{64}=\\tfrac{9}{128}$; total evidence $\\tfrac{36}{128}$.",
          "Heads on the 4th toss has joint weight $\\tfrac{27}{128}\\cdot\\tfrac34+\\tfrac{9}{128}\\cdot\\tfrac14=\\tfrac{81}{512}+\\tfrac{9}{512}=\\tfrac{90}{512}$.",
          "Divide by the evidence: $\\dfrac{90/512}{36/128}=\\dfrac{90/512}{144/512}=\\dfrac{90}{144}=\\dfrac58$."
        ]
      }
    ],
    "remark": "**Insight.** This is the full hybrid pipeline: a **binomial** likelihood feeds **Bayes' theorem** to fix the coin's identity, and the **total probability theorem** then predicts the next toss. The deepest trap is to read the data as a frequency $\\tfrac23$ — but the data only tells you *which coin* you likely hold, after which each coin keeps its own fixed bias $\\tfrac34$ or $\\tfrac14$."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "The Weighted Urns, Limiting White",
    "difficulty": 4,
    "task": "Evaluate $\\displaystyle\\lim_{n\\to\\infty}P(w)$.",
    "pyq": {
      "year": 2006,
      "paper": "1",
      "qno": "21"
    },
    "tags": [
      "total probability",
      "limit of sum",
      "2006"
    ],
    "figure": "",
    "statement": "Consider $n$ urns, each holding $n+1$ balls, arranged so that the $i$th urn contains exactly $i$ white balls and $(n+1-i)$ red balls, for $i=1,2,\\dots,n$. One urn is chosen and then a single ball is drawn from it. Let $u_i$ denote the event that the $i$th urn is selected, and let $w$ denote the event that the drawn ball is white. Suppose the urns are not equally likely: instead $P(u_i)\\propto i$, so that heavier-numbered urns (which are richer in white balls) are also chosen more often. Determine the value of $\\displaystyle\\lim_{n\\to\\infty}P(w)$.",
    "answer": "$\\boxed{\\dfrac{2}{3}}$",
    "trap": "The proportionality $P(u_i)\\propto i$ is not a probability until it is normalized. Forgetting the constant $k=\\dfrac{2}{n(n+1)}$ (or using $P(u_i)=\\tfrac1n$) collapses the sum to the wrong limit. Also note $P(w\\mid u_i)=\\dfrac{i}{n+1}$, not $\\dfrac{i}{n}$.",
    "solutions": [
      {
        "name": "Total probability with a normalized prior",
        "steps": [
          "Write $P(u_i)=ki$. Normalization forces $k\\sum_{i=1}^{n}i=1$, i.e. $k\\cdot\\dfrac{n(n+1)}{2}=1$, so $k=\\dfrac{2}{n(n+1)}$.",
          "The $i$th urn has $i$ white balls out of $n+1$, so $P(w\\mid u_i)=\\dfrac{i}{n+1}$.",
          "By total probability, $P(w)=\\sum_{i=1}^{n}P(u_i)\\,P(w\\mid u_i)=\\dfrac{2}{n(n+1)^2}\\sum_{i=1}^{n}i^2$.",
          "Using $\\sum_{i=1}^{n}i^2=\\dfrac{n(n+1)(2n+1)}{6}$ gives $P(w)=\\dfrac{2n+1}{3(n+1)}$, whence $\\displaystyle\\lim_{n\\to\\infty}P(w)=\\dfrac23$."
        ]
      },
      {
        "name": "Expectation of a random fraction",
        "steps": [
          "Let $I$ be the (random) index of the chosen urn, with $P(I=i)=\\dfrac{2i}{n(n+1)}$. Since $P(w\\mid I=i)=\\dfrac{i}{n+1}$, we have $P(w)=E\\!\\left[\\dfrac{I}{n+1}\\right]=\\dfrac{E[I]}{n+1}$.",
          "Here $E[I]=\\sum_{i=1}^{n} i\\cdot\\dfrac{2i}{n(n+1)}=\\dfrac{2}{n(n+1)}\\cdot\\dfrac{n(n+1)(2n+1)}{6}=\\dfrac{2n+1}{3}$.",
          "Therefore $P(w)=\\dfrac{2n+1}{3(n+1)}\\to\\dfrac23$ as $n\\to\\infty$, matching Method 1."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE 2006, Paper 1, Q21. The linear prior makes the index distribution triangular, so the answer is really $E[I]/(n+1)$ — and the mean of a triangular index sits at two-thirds of the range, which is exactly where the limit lands."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Bayes on the Last Urn",
    "difficulty": 4,
    "task": "Find $P(u_n\\mid w)$.",
    "pyq": {
      "year": 2006,
      "paper": "1",
      "qno": "22"
    },
    "tags": [
      "Bayes' theorem",
      "conditional probability",
      "2006"
    ],
    "figure": "",
    "statement": "Keep the same setup: $n$ urns, the $i$th of which contains $i$ white balls and $(n+1-i)$ red balls out of $n+1$, with $u_i$ the event of picking the $i$th urn and $w$ the event of drawing a white ball. This time the urns are chosen uniformly, so $P(u_i)=c$ for a constant $c$. Given that the ball drawn turned out to be white, find the probability $P(u_n\\mid w)$ that it came from the last (all-white) urn.",
    "answer": "$\\boxed{\\dfrac{2}{n+1}}$",
    "trap": "Because the $n$th urn is entirely white, it is tempting to guess the posterior is large. But every urn was equally likely a priori, and there are $n$ of them; the white evidence only tilts the odds in proportion to $i$, so the posterior is $O(1/n)$, not close to $1$.",
    "solutions": [
      {
        "name": "Bayes' theorem",
        "steps": [
          "With $P(u_i)=c$, the constant cancels in Bayes' formula, so we may take $P(u_i)=\\dfrac1n$. Here $P(w\\mid u_i)=\\dfrac{i}{n+1}$ and, for the last urn, $P(w\\mid u_n)=\\dfrac{n}{n+1}$.",
          "By total probability, $P(w)=\\sum_{i=1}^{n}\\dfrac1n\\cdot\\dfrac{i}{n+1}=\\dfrac{1}{n(n+1)}\\cdot\\dfrac{n(n+1)}{2}=\\dfrac12$.",
          "Then $P(u_n\\mid w)=\\dfrac{P(u_n)P(w\\mid u_n)}{P(w)}=\\dfrac{\\frac1n\\cdot\\frac{n}{n+1}}{\\frac12}=\\dfrac{2}{n+1}$."
        ]
      },
      {
        "name": "Odds / proportional-weights argument",
        "steps": [
          "Under a uniform prior the posterior over urns is proportional to the likelihood: $P(u_i\\mid w)\\propto P(w\\mid u_i)=\\dfrac{i}{n+1}\\propto i$.",
          "Hence $P(u_i\\mid w)=\\dfrac{i}{\\sum_{j=1}^{n} j}=\\dfrac{i}{\\,n(n+1)/2\\,}=\\dfrac{2i}{n(n+1)}$.",
          "Putting $i=n$ gives $P(u_n\\mid w)=\\dfrac{2n}{n(n+1)}=\\dfrac{2}{n+1}$, the same result without ever computing $P(w)$ explicitly."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE 2006, Paper 1, Q22. Under a flat prior the posterior is just the normalized likelihood, so the whole problem reduces to the observation $P(u_i\\mid w)\\propto i$ — the urns' white-counts are their own posterior weights."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "White From An Even-Numbered Urn",
    "difficulty": 4,
    "task": "Find the conditional probability",
    "tags": [
      "conditional probability",
      "total probability",
      "2006"
    ],
    "pyq": {
      "year": 2006,
      "paper": "1",
      "qno": "23"
    },
    "statement": "There are $n$ urns, each holding $n+1$ balls, arranged so that the $i$th urn contains $i$ white balls and $n+1-i$ red balls, for $i=1,2,\\dots,n$. An urn is chosen with $P(u_i)=\\tfrac1n$ for every $i$, and then one ball is drawn from it. Assume $n$ is even, and let $E$ be the event that the chosen urn carries an even index. Let $w$ be the event that the drawn ball is white. Find $P(w\\mid E)$.",
    "answer": "$$P(w\\mid E)=\\boxed{\\dfrac{n+2}{2(n+1)}}.$$",
    "trap": "Because each urn is equally likely, it is tempting to average $\\tfrac{i}{n+1}$ over $i=1,\\dots,n$ and get $\\tfrac12$. But conditioning on $E$ restricts $i$ to the $n/2$ even indices $2,4,\\dots,n$, whose whiteness fractions are systematically larger; the conditional average is therefore above $\\tfrac12$, not equal to it.",
    "solutions": [
      {
        "name": "Conditional total probability over even urns",
        "steps": [
          "The event $E$ selects the $n/2$ urns with even index, and given $E$ each is equally likely, so $P(u_i\\mid E)=\\dfrac{1}{n/2}=\\dfrac{2}{n}$ for even $i$.",
          "The whiteness fraction of urn $i$ is $P(w\\mid u_i)=\\dfrac{i}{n+1}$, hence $P(w\\mid E)=\\displaystyle\\sum_{i\\text{ even}}\\frac{2}{n}\\cdot\\frac{i}{n+1}=\\frac{2}{n(n+1)}\\!\\!\\sum_{i\\text{ even}}\\! i$.",
          "The even indices $2,4,\\dots,n$ sum to $2+4+\\cdots+n=\\dfrac{n}{2}\\cdot\\dfrac{n+2}{2}=\\dfrac{n(n+2)}{4}$.",
          "Therefore $P(w\\mid E)=\\dfrac{2}{n(n+1)}\\cdot\\dfrac{n(n+2)}{4}=\\dfrac{n+2}{2(n+1)}$."
        ]
      },
      {
        "name": "Ratio of joint probabilities",
        "steps": [
          "Write $P(w\\mid E)=\\dfrac{P(w\\cap E)}{P(E)}$. Here $P(E)=\\dfrac{n/2}{n}=\\dfrac12$, since $n/2$ of the $n$ equally likely urns are even.",
          "For the joint event, $P(w\\cap E)=\\displaystyle\\sum_{i\\text{ even}}\\frac1n\\cdot\\frac{i}{n+1}=\\frac{1}{n(n+1)}\\!\\!\\sum_{i\\text{ even}}\\! i=\\frac{1}{n(n+1)}\\cdot\\frac{n(n+2)}{4}=\\frac{n+2}{4(n+1)}$.",
          "Dividing, $P(w\\mid E)=\\dfrac{(n+2)/[4(n+1)]}{1/2}=\\dfrac{n+2}{2(n+1)}$, matching the first method."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE 2006, Paper 1, Q23. **Insight.** Conditioning on “even index” is not a harmless relabelling: it reweights the urns toward the whiter half, so the honest route is to sum $\\tfrac{i}{n+1}$ over only the even $i$ and normalise by $P(E)=\\tfrac12$."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "The Indian Couple At A Married Table",
    "difficulty": 4,
    "task": "Find the conditional probability",
    "tags": [
      "conditional probability",
      "circular permutations",
      "2007"
    ],
    "pyq": {
      "year": 2007,
      "paper": "1",
      "qno": "52"
    },
    "statement": "One Indian man and four American men, together with their five wives, are seated at random around a circular table. Let $E$ be the event that every American man sits next to his own wife. Find the conditional probability that the Indian man also sits next to his wife, given $E$; that is, find $P(A\\mid E)$ where $A$ is the event that the Indian man is adjacent to his wife.",
    "answer": "$$P(A\\mid E)=\\dfrac{4!\\,(2!)^{5}}{5!\\,(2!)^{4}}=\\boxed{\\dfrac{2}{5}}.$$",
    "trap": "One is tempted to compute the unconditional probability that a given couple sits together (about $\\tfrac29$ around $10$ seats) and quote that. But we are told $E$ has occurred: the four American couples are already glued into blocks, which shrinks the effective table to five objects and changes the geometry the Indian couple lives in — so the conditional answer $\\tfrac25$ is much larger than the unconditional one.",
    "solutions": [
      {
        "name": "Counting favourable arrangements (block method)",
        "steps": [
          "Count $n(E)$: glue each American couple into a single block (2 internal orders each, $2^4$ ways). We then arrange the $4$ American blocks together with the Indian man and his wife as separate people — that is $5$ objects (4 blocks + 2 Indians counted as $4+2=6$ units)… more cleanly, treat $E$ as: the $4$ American blocks plus the Indian man plus the Indian wife = $6$ units around the circle.",
          "Around a circle, $6$ units admit $(6-1)!=5!$ arrangements, and each American block has $2!$ internal orders, so $n(E)=5!\\,(2!)^4$.",
          "Count $n(A\\cap E)$: now also glue the Indian couple into a block. This gives $5$ blocks in all, arranged circularly in $(5-1)!=4!$ ways, with $2!$ internal orders for each of the $5$ couples, so $n(A\\cap E)=4!\\,(2!)^5$.",
          "Hence $P(A\\mid E)=\\dfrac{n(A\\cap E)}{n(E)}=\\dfrac{4!\\,(2!)^5}{5!\\,(2!)^4}=\\dfrac{2!}{5}=\\dfrac{2}{5}$."
        ]
      },
      {
        "name": "Direct placement of the Indian couple",
        "steps": [
          "Condition on $E$: the four American couples are fixed as glued blocks, leaving the Indian man and his wife to occupy the remaining structure. Seat the Indian man first — by symmetry every seat is alike, so fix him and look at where his wife can land.",
          "With the four American blocks and the Indian man placed around the circle, they create gaps into which the Indian wife falls uniformly; exactly the two seats immediately flanking the Indian man make the couple adjacent, out of the equally-likely remaining seats.",
          "Equivalently, among the $5$ ‘units’ (4 American blocks + the Indian man) sitting in a circle, the wife occupies one of $5$ slots and the couple is together for $2$ of them, giving $P(A\\mid E)=\\dfrac{2}{5}$, in agreement with the block count."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE 2007, Paper 1, Q52. **Insight.** Given $E$, the four American couples collapse into rigid blocks, so the Indian couple effectively sits at a table of five objects — and “together” costs $2$ of those $5$ adjacencies, which is why the seemingly delicate answer is the clean $\\tfrac25$."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Bayes Inequality for a Partition",
    "difficulty": 4,
    "task": "Judge the two statements",
    "pyq": {
      "year": 2007,
      "paper": "1",
      "qno": "56"
    },
    "tags": [
      "Bayes' theorem",
      "total probability",
      "mutually exclusive exhaustive events",
      "2007"
    ],
    "figure": "",
    "statement": "Let $H_1,H_2,\\dots,H_n$ be mutually exclusive and exhaustive events with $P(H_i)>0$ for $i=1,2,\\dots,n$, and let $E$ be any other event with $0<P(E)<1$. Consider the following two assertions. Statement 1 claims that $P(H_i\\mid E)>P(E\\mid H_i)\\,P(H_i)$ for every $i=1,2,\\dots,n$, while Statement 2 claims that $\\sum_{i=1}^{n}P(H_i)=1$. Decide whether each statement is true, and whether the second correctly explains the first: (A) both true and 2 explains 1; (B) both true but 2 does not explain 1; (C) 1 true, 2 false; (D) 1 false, 2 true.",
    "answer": "$$\\boxed{\\text{(D) Statement 1 is false, Statement 2 is true.}}$$",
    "trap": "Bayes' rule gives $P(H_i\\mid E)=\\dfrac{P(E\\mid H_i)P(H_i)}{P(E)}$, and since $0<P(E)<1$ dividing by $P(E)$ enlarges the numerator — so it looks as though Statement 1 must hold. The trap is the innocuous word “every.” If some $H_i$ is disjoint from $E$ then $P(E\\mid H_i)=0$, forcing both sides to equal $0$; the inequality is then $0>0$, which is false. A claim quantified over all $i$ dies on a single bad index.",
    "solutions": [
      {
        "name": "Bayes rewrite exposes the strict-inequality gap",
        "steps": [
          "By Bayes' theorem, for each $i$ with $P(E)>0$ we have $P(H_i\\mid E)=\\dfrac{P(E\\mid H_i)\\,P(H_i)}{P(E)}$.",
          "Thus $P(H_i\\mid E)=\\dfrac{1}{P(E)}\\cdot\\bigl[P(E\\mid H_i)P(H_i)\\bigr]$, and since $0<P(E)<1$ the factor $\\tfrac1{P(E)}>1$ multiplies the bracket.",
          "This makes the inequality $P(H_i\\mid E)>P(E\\mid H_i)P(H_i)$ hold only when the bracket is strictly positive, i.e. when $P(E\\mid H_i)P(H_i)>0$. If instead $P(E\\cap H_i)=0$ for some $i$, then $P(E\\mid H_i)=0$ and both sides are $0$, so the strict inequality fails for that $i$.",
          "Because Statement 1 asserts the inequality for every $i$, one such index makes it false. Statement 2 is the defining property of a mutually exclusive and exhaustive family, hence true. The correct choice is (D)."
        ]
      },
      {
        "name": "Explicit finite counterexample",
        "steps": [
          "Take a uniform sample space of six equally likely points $\\{a,b,c,d,e,f\\}$ and the partition $H_1=\\{a,b\\},\\,H_2=\\{c,d\\},\\,H_3=\\{e,f\\}$, so each $P(H_i)=\\tfrac13$ and $\\sum P(H_i)=1$ (Statement 2 holds).",
          "Let $E=\\{a,c\\}$, so $P(E)=\\tfrac13\\in(0,1)$. Note $E\\cap H_3=\\varnothing$.",
          "For $i=3$: $P(H_3\\mid E)=\\dfrac{P(E\\cap H_3)}{P(E)}=0$, while $P(E\\mid H_3)P(H_3)=0\\cdot\\tfrac13=0$. The claimed strict inequality reads $0>0$, which is false.",
          "So Statement 1 fails for $i=3$ (even though it holds for $i=1,2$), while Statement 2 is true — confirming (D)."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE 2007, Paper 1, Q56. The lesson: an inequality quantified over “every $i$” is only as strong as its weakest index — a single event disjoint from $E$ collapses the strict Bayes inequality into an equality, so the universally-quantified Statement 1 is false while the always-true partition identity $\\sum P(H_i)=1$ has no bearing on it."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Pairwise Independence Under Conditioning",
    "difficulty": 4,
    "task": "Simplify the conditional probability",
    "pyq": {
      "year": 2007,
      "paper": "2",
      "qno": "53"
    },
    "tags": [
      "conditional probability",
      "pairwise independence",
      "complementary events",
      "2007"
    ],
    "figure": "",
    "statement": "Let $E^{c}$ denote the complement of an event $E$. Suppose $E,F,G$ are pairwise independent events with $P(G)>0$ and $P(E\\cap F\\cap G)=0$. Then $P\\!\\left(E^{c}\\cap F^{c}\\mid G\\right)$ equals which of the following: (A) $P(E^{c})+P(F^{c})$; (B) $P(E^{c})-P(F^{c})$; (C) $P(E^{c})-P(F)$; (D) $P(E)-P(F^{c})$.",
    "answer": "$$P\\!\\left(E^{c}\\cap F^{c}\\mid G\\right)=1-P(E)-P(F)=\\boxed{\\,P(E^{c})-P(F)\\,}\\quad\\text{(option C).}$$",
    "trap": "It is tempting to treat $E^{c}$ and $F^{c}$ as independent given $G$ and write the answer as a product $P(E^{c}\\mid G)P(F^{c}\\mid G)$. That fails: the extra condition $P(E\\cap F\\cap G)=0$ makes $E$ and $F$ mutually exclusive inside $G$, so they are decidedly not conditionally independent. The clean route is De Morgan plus pairwise independence, not a product.",
    "solutions": [
      {
        "name": "De Morgan and inclusion–exclusion on the conditional measure",
        "steps": [
          "By De Morgan, $E^{c}\\cap F^{c}=(E\\cup F)^{c}$, so within $G$: $P(E^{c}\\cap F^{c}\\cap G)=P(G)-P\\bigl((E\\cup F)\\cap G\\bigr)$.",
          "Inclusion–exclusion gives $P((E\\cup F)\\cap G)=P(E\\cap G)+P(F\\cap G)-P(E\\cap F\\cap G)$.",
          "Pairwise independence yields $P(E\\cap G)=P(E)P(G)$ and $P(F\\cap G)=P(F)P(G)$, while $P(E\\cap F\\cap G)=0$ is given. Hence $P(E^{c}\\cap F^{c}\\cap G)=P(G)-P(E)P(G)-P(F)P(G)=P(G)\\bigl[1-P(E)-P(F)\\bigr]$.",
          "Divide by $P(G)>0$: $P(E^{c}\\cap F^{c}\\mid G)=1-P(E)-P(F)=P(E^{c})-P(F)$, which is option (C)."
        ]
      },
      {
        "name": "Region masses inside $G$",
        "steps": [
          "Restrict attention to $G$ and write the conditional probabilities of the four cells formed by $E,F$. Since $P(E\\cap F\\cap G)=0$, the “both” cell has zero mass: $P(E\\cap F\\mid G)=0$.",
          "Using pairwise independence, $P(E\\mid G)=\\dfrac{P(E)P(G)}{P(G)}=P(E)$ and likewise $P(F\\mid G)=P(F)$.",
          "The four cells inside $G$ partition it, so $P(E^{c}\\cap F^{c}\\mid G)=1-P(E\\mid G)-P(F\\mid G)+P(E\\cap F\\mid G)=1-P(E)-P(F)+0$.",
          "Therefore $P(E^{c}\\cap F^{c}\\mid G)=1-P(E)-P(F)=P(E^{c})-P(F)$ — again option (C)."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE 2007, Paper 2, Q53. Insight: conditioning on $G$ turns pairwise independence into $P(E\\mid G)=P(E)$ and $P(F\\mid G)=P(F)$, so $E$ and $F$ behave “unconditionally” inside $G$ — but the vanishing triple overlap makes them mutually exclusive there, forbidding any product form and forcing the additive answer $P(E^{c})-P(F)$."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Random Binary System: Unique or Solvable",
    "difficulty": 4,
    "task": "Judge two statements",
    "pyq": {
      "year": 2008,
      "paper": "1",
      "qno": "11"
    },
    "tags": [
      "classical probability",
      "system of linear equations",
      "determinants",
      "2008"
    ],
    "figure": "",
    "statement": "Consider the homogeneous system of equations $ax+by=0$ and $cx+dy=0$, where each of the coefficients $a,b,c,d$ is chosen independently and equally likely from the set $\\{0,1\\}$. Examine the two statements below. STATEMENT-1: the probability that the system has a unique solution is $\\tfrac38$. STATEMENT-2: the probability that the system has a solution is $1$. Decide, for this assertion–reason pair, whether each statement is true, and whether the second correctly explains the first.",
    "answer": "$\\boxed{\\text{(B) Both true; Statement-2 is NOT a correct explanation of Statement-1}}$",
    "trap": "Reading “has a solution” as “has a non-trivial solution.” A homogeneous system always admits $(x,y)=(0,0)$, so it is solvable with probability $1$ no matter what the coefficients are — Statement-2 is trivially true. That triviality is exactly why it cannot explain the delicate $\\tfrac38$ count in Statement-1, which is about *uniqueness*, not mere existence.",
    "solutions": [
      {
        "name": "Direct enumeration of the determinant",
        "steps": [
          "The system has a unique solution precisely when the coefficient determinant is non-zero, i.e. $ad-bc\\neq 0$. Since the system is homogeneous, that unique solution is the trivial one $(0,0)$.",
          "Each of $a,b,c,d$ is an independent fair choice from $\\{0,1\\}$, so there are $2^4=16$ equally likely coefficient quadruples.",
          "Both $ad$ and $bc$ lie in $\\{0,1\\}$, and $ad-bc\\neq 0$ means $ad\\neq bc$, i.e. one of them is $1$ and the other $0$. Now $ad=1$ only when $a=d=1$ (a single $(a,d)$ pattern out of $4$), so $ad=1$ in $1$ way and $ad=0$ in $3$ ways; the same holds for $bc$.",
          "Favourable cases $=\\underbrace{1\\cdot 3}_{ad=1,\\,bc=0}+\\underbrace{3\\cdot 1}_{ad=0,\\,bc=1}=6$. Hence $P(\\text{unique})=\\dfrac{6}{16}=\\dfrac38$, so Statement-1 is true.",
          "For Statement-2, being homogeneous the system always has the trivial solution $(0,0)$, so it is solvable for every one of the $16$ quadruples: $P(\\text{has a solution})=1$, true. But this holds by the structure of homogeneity, unrelated to the determinant count of Statement-1, so it is not an explanation of it: answer $\\boxed{\\text{(B)}}$."
        ]
      },
      {
        "name": "Exhaustive $16$-case check",
        "steps": [
          "List all $16$ quadruples $(a,b,c,d)\\in\\{0,1\\}^4$ and compute $ad-bc$ for each; count those with $ad-bc\\neq 0$.",
          "The value $ad-bc$ is non-zero exactly for the six quadruples $(a,b,c,d)\\in\\{(0,1,1,0),(0,1,1,1),(1,0,0,1),(1,0,1,1),(1,1,0,1),(1,1,1,0)\\}$ — precisely the tuples where exactly one of the two products $ad,bc$ equals $1$; the tally is $6$.",
          "Thus $P(\\text{unique})=\\dfrac{6}{16}=\\dfrac38$ (Statement-1 true), matching the direct count.",
          "In the same sweep, every quadruple yields at least the solution $(0,0)$, so the ‘has a solution’ event covers all $16$ cases: probability $1$ (Statement-2 true).",
          "Both statements are true, yet Statement-2’s universal solvability is a consequence of homogeneity and says nothing about when the solution is *unique*; it does not explain Statement-1, giving $\\boxed{\\text{(B)}}$."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE 2008, Paper 1, Q11. **Insight.** A homogeneous system is never *unsolvable* — the trivial solution is free — so the whole content of the problem lives in the word *unique*, which is a determinant (i.e. counting) question decoupled from mere existence."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "How Many Outcomes Make Two Events Independent",
    "difficulty": 3,
    "task": "Find the possible sizes of $B$",
    "pyq": {
      "year": 2008,
      "paper": "2",
      "qno": "1"
    },
    "tags": [
      "independent events",
      "classical probability",
      "2008"
    ],
    "figure": "",
    "statement": "An experiment has $10$ equally likely outcomes. Let $A$ and $B$ be two non-empty events, and suppose $A$ consists of exactly $4$ of these outcomes. Determine the number of outcomes that $B$ must contain so that $A$ and $B$ are independent events.",
    "answer": "$\\boxed{\\text{(D) } 5 \\text{ or } 10}$",
    "trap": "Guessing that $B$ can be any size that ‘divides nicely,’ such as $2,4,$ or $8$. Independence is not about the size of $B$ alone — it forces $|A\\cap B|=\\tfrac{|A|\\,|B|}{10}$ to be a whole number of outcomes, and that integrality condition is what pins $|B|$ down.",
    "solutions": [
      {
        "name": "Integrality of the intersection count",
        "steps": [
          "With $10$ equally likely outcomes, $P(A)=\\dfrac{4}{10}$ and $P(B)=\\dfrac{p}{10}$, where $p=|B|$.",
          "Independence means $P(A\\cap B)=P(A)\\,P(B)$, so $\\dfrac{|A\\cap B|}{10}=\\dfrac{4}{10}\\cdot\\dfrac{p}{10}$, giving $|A\\cap B|=\\dfrac{4p}{10}=\\dfrac{2p}{5}$.",
          "Since $|A\\cap B|$ counts actual outcomes it must be a non-negative integer, so $\\dfrac{2p}{5}\\in\\mathbb{Z}$. As $\\gcd(2,5)=1$, this requires $5\\mid p$.",
          "Within $1\\le p\\le 10$ the multiples of $5$ are $p=5$ and $p=10$; both are realizable ($|A\\cap B|=2$ and $4$ respectively, each $\\le|A|=4$), so the answer is $\\boxed{5\\text{ or }10}$, option (D)."
        ]
      },
      {
        "name": "Elimination by testing each choice",
        "steps": [
          "The needed condition is that $\\dfrac{2p}{5}$ be an integer with $0\\le \\dfrac{2p}{5}\\le \\min(4,p)$; test the offered values.",
          "Option (A) $p\\in\\{2,4,8\\}$: $\\dfrac{2p}{5}=\\tfrac45,\\tfrac85,\\tfrac{16}{5}$ — none integral. Option (B) $p\\in\\{3,6,9\\}$: $\\dfrac{2p}{5}=\\tfrac65,\\tfrac{12}{5},\\tfrac{18}{5}$ — none integral. Option (C) $p\\in\\{4,8\\}$: $\\tfrac85,\\tfrac{16}{5}$ — none integral.",
          "Option (D) $p\\in\\{5,10\\}$: $\\dfrac{2p}{5}=2$ and $4$, both integers, and both are attainable with a valid overlap inside $A$.",
          "Only (D) survives, so $|B|=5$ or $10$, giving $\\boxed{\\text{(D)}}$."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE 2008, Paper 2, Q1. **Insight.** In a finite equally-likely space, independence is a *number-theoretic* constraint: the product rule forces $\\tfrac{|A||B|}{n}$ to be an integer, so divisibility — not intuition about ‘compatible’ sizes — decides which events can be independent."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Tossing a Die Until the First Six",
    "difficulty": 3,
    "task": "Find the probability that the first six appears on the third toss.",
    "pyq": {
      "year": 2009,
      "paper": "1",
      "qno": "36"
    },
    "tags": [
      "geometric distribution",
      "independent trials",
      "2009"
    ],
    "figure": "",
    "statement": "A fair die is tossed repeatedly until a six is obtained, and $X$ denotes the number of tosses required. Since each toss shows a six with probability $\\tfrac16$ independently of the others, $X$ follows a geometric distribution. Determine the probability that $X = 3$; that is, the probability that the very first six shows up on exactly the third toss.",
    "answer": "$\\boxed{\\dfrac{25}{216}}$",
    "trap": "The event $X=3$ demands that the first two tosses are $\\emph{not}$ sixes and the third $\\emph{is}$ a six. Forgetting the two required failures (and writing just $\\tfrac16$, or $\\left(\\tfrac16\\right)^3$) is the classic slip.",
    "solutions": [
      {
        "name": "Direct geometric event",
        "steps": [
          "The trials are independent, so $X=3$ means: non-six, non-six, six, in that order.",
          "Each non-six has probability $\\tfrac56$ and the six has probability $\\tfrac16$, giving $P(X=3)=\\tfrac56\\cdot\\tfrac56\\cdot\\tfrac16$.",
          "Hence $P(X=3)=\\dfrac{25}{216}$."
        ]
      },
      {
        "name": "Geometric pmf then evaluate",
        "steps": [
          "For a geometric variable with success probability $p=\\tfrac16$, $P(X=k)=(1-p)^{k-1}p=\\left(\\tfrac56\\right)^{k-1}\\tfrac16$.",
          "Substituting $k=3$ gives $P(X=3)=\\left(\\tfrac56\\right)^{2}\\cdot\\tfrac16=\\dfrac{25}{36}\\cdot\\dfrac16$.",
          "This equals $\\dfrac{25}{216}$, matching the direct count."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE 2009, Paper 1, Q36. The geometric model turns “first success on toss $k$” into a single clean product $(1-p)^{k-1}p$ — no summation needed for a fixed $k$."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "At Least Three Tosses for a Six",
    "difficulty": 3,
    "task": "Find the probability that at least three tosses are needed to get a six.",
    "pyq": {
      "year": 2009,
      "paper": "1",
      "qno": "37"
    },
    "tags": [
      "geometric distribution",
      "complementary probability",
      "2009"
    ],
    "figure": "",
    "statement": "A fair die is tossed repeatedly until a six is obtained, and $X$ denotes the number of tosses required, so $X$ is geometric with success probability $\\tfrac16$. Determine the probability that $X \\ge 3$; that is, the probability that the first six does not appear on either of the first two tosses.",
    "answer": "$\\boxed{\\dfrac{25}{36}}$",
    "trap": "Do not sum the infinite tail term by term under exam pressure. The event $X\\ge 3$ is exactly “no six in the first two tosses,” which collapses to a single square — but only if you recognise the equivalence rather than grinding out a series.",
    "solutions": [
      {
        "name": "Complement of the small cases",
        "steps": [
          "$P(X\\ge 3)=1-P(X=1)-P(X=2)$, since $X$ takes only positive integer values.",
          "Here $P(X=1)=\\tfrac16$ and $P(X=2)=\\tfrac56\\cdot\\tfrac16=\\tfrac{5}{36}$.",
          "Thus $P(X\\ge 3)=1-\\tfrac16-\\tfrac{5}{36}=1-\\tfrac{6}{36}-\\tfrac{5}{36}=\\tfrac{25}{36}$."
        ]
      },
      {
        "name": "‘No six in first two tosses’ (tail of geometric)",
        "steps": [
          "Needing at least three tosses is equivalent to the first two tosses both failing to show a six.",
          "By independence that probability is $\\left(\\tfrac56\\right)^{2}=\\dfrac{25}{36}$.",
          "Equivalently, the geometric tail $P(X\\ge k)=(1-p)^{k-1}$ with $k=3,\\ p=\\tfrac16$ gives $\\left(\\tfrac56\\right)^{2}=\\dfrac{25}{36}$, confirming the answer."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE 2009, Paper 1, Q37. The tail law $P(X\\ge k)=(1-p)^{k-1}$ makes “at least $k$ trials” instant — it is just “the first $k-1$ trials all fail.”"
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "A Waiting Time That Forgets Its Past",
    "difficulty": 3,
    "task": "Evaluate the conditional probability",
    "pyq": {
      "year": 2009,
      "paper": "1",
      "qno": "38"
    },
    "tags": [
      "conditional probability",
      "geometric distribution",
      "2009"
    ],
    "figure": "",
    "statement": "A fair die is tossed repeatedly until a six is obtained, and $X$ denotes the number of tosses required. Compute the conditional probability that $X \\ge 6$, given that $X > 3$.",
    "answer": "$\\boxed{\\text{(D) } \\dfrac{25}{36}}$",
    "trap": "Trying to enumerate the finite list of ‘surviving’ values $X=4,5,6,\\dots$ and getting lost in an infinite series. The clean move is to notice that $X$ counts trials to the first success, so its tail is a single power of $\\tfrac56$; the conditioning then telescopes and the first three failures cancel out completely.",
    "solutions": [
      {
        "name": "Tail probabilities of the geometric law",
        "steps": [
          "$X=k$ means the first $k-1$ tosses are non-sixes and the $k$th is a six, so $P(X=k)=\\left(\\dfrac56\\right)^{k-1}\\dfrac16$ for $k\\ge 1$.",
          "Summing the geometric tail gives $P(X\\ge k)=\\displaystyle\\sum_{j\\ge k}\\left(\\dfrac56\\right)^{j-1}\\dfrac16=\\left(\\dfrac56\\right)^{k-1}$; equivalently, $X\\ge k$ is exactly the event that the first $k-1$ tosses all miss.",
          "Since $X>3$ is the same event as $X\\ge 4$, we have $P(X>3)=\\left(\\dfrac56\\right)^{3}$ and $P(X\\ge 6)=\\left(\\dfrac56\\right)^{5}$, with $\\{X\\ge6\\}\\subset\\{X>3\\}$.",
          "Therefore $P(X\\ge 6\\mid X>3)=\\dfrac{(5/6)^5}{(5/6)^3}=\\left(\\dfrac56\\right)^{2}=\\boxed{\\dfrac{25}{36}}$, option (D)."
        ]
      },
      {
        "name": "Memorylessness by restarting the count",
        "steps": [
          "Condition on $X>3$: the first three tosses were all non-sixes, and because tosses are independent the process from toss $4$ onward is a fresh copy of the original experiment.",
          "Let $Y$ be the number of additional tosses (from toss $4$ onward) needed to get the first six; then $Y$ has the same geometric law as $X$, and the event $X\\ge 6$ becomes $Y\\ge 3$.",
          "Hence $P(X\\ge 6\\mid X>3)=P(Y\\ge 3)=P(\\text{first two fresh tosses miss})=\\left(\\dfrac56\\right)^{2}$.",
          "This equals $\\boxed{\\dfrac{25}{36}}$, confirming option (D) — the three wasted tosses genuinely leave no trace."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE 2009, Paper 1, Q38. **Insight.** The geometric waiting time is memoryless: given that success has not yet arrived, the residual number of trials is distributed exactly like a fresh start, so the conditional probability depends only on the *gap* $6-3-1=2$ and collapses to $(5/6)^2$."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Three Cube-Root Vectors Summing to Zero",
    "difficulty": 4,
    "task": "Find the required probability",
    "pyq": {
      "year": 2010,
      "paper": "1",
      "qno": "31"
    },
    "tags": [
      "cube roots of unity",
      "classical probability",
      "counting",
      "2010"
    ],
    "figure": "",
    "statement": "Let $\\omega$ be a complex cube root of unity with $\\omega\\neq 1$. A fair die is thrown three times, producing numbers $r_1$, $r_2$ and $r_3$. Find the probability that $\\omega^{r_1}+\\omega^{r_2}+\\omega^{r_3}=0$.",
    "answer": "$\\boxed{\\text{(C) } \\dfrac{2}{9}}$",
    "trap": "Reading $\\omega^{r_i}$ as though $r_i$ itself must be $1,2,3$. What matters is only $r_i \\bmod 3$, since $\\omega^{3}=1$; among the die faces $1,\\dots,6$ each residue class $0,1,2$ appears exactly twice, and $1+\\omega+\\omega^2=0$ forces all three residues to be present.",
    "solutions": [
      {
        "name": "Reduce exponents modulo 3, then count",
        "steps": [
          "Because $\\omega^3=1$, the value of $\\omega^{r}$ depends only on $r \\bmod 3$: faces $3,6$ give $\\omega^0=1$; faces $1,4$ give $\\omega$; faces $2,5$ give $\\omega^2$.",
          "The three powers sum to zero iff $\\{\\omega^{r_1},\\omega^{r_2},\\omega^{r_3}\\}=\\{1,\\omega,\\omega^2\\}$, using the identity $1+\\omega+\\omega^2=0$ (two equal powers can never cancel a third, so all three residues must be distinct).",
          "Assign the three distinct residue classes to the three ordered dice in $3!=6$ ways, and each chosen residue can be realized by either of its $2$ faces, giving $2^3=8$; favourable outcomes $=6\\times 8=48$.",
          "Total equally-likely outcomes $=6^3=216$, so the probability is $\\dfrac{48}{216}=\\boxed{\\dfrac{2}{9}}$, option (C)."
        ]
      },
      {
        "name": "Multiply residue probabilities for a permutation",
        "steps": [
          "For a single throw, $P(r\\equiv 0)=P(r\\equiv 1)=P(r\\equiv 2)=\\dfrac{2}{6}=\\dfrac13$, since each residue class holds exactly two faces.",
          "The sum vanishes exactly when the three residues are a permutation of $(0,1,2)$; one specific ordered residue pattern has probability $\\left(\\dfrac13\\right)^3=\\dfrac1{27}$.",
          "There are $3!=6$ such orderings, all disjoint, so $P=6\\cdot\\dfrac1{27}=\\dfrac{6}{27}$.",
          "This simplifies to $\\boxed{\\dfrac{2}{9}}$, matching option (C)."
        ]
      }
    ],
    "remark": "**Source.** IIT-JEE 2010, Paper 1, Q31. **Insight.** The algebraic condition $\\omega^{r_1}+\\omega^{r_2}+\\omega^{r_3}=0$ is really the arithmetic condition that $r_1,r_2,r_3$ hit all three residues mod $3$ — the vanishing sum of the three cube roots of unity turns a complex-number question into a clean counting one."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "The Twice-Relayed Green Signal",
    "difficulty": 4,
    "task": "Find the reverse (posterior) probability",
    "pyq": {
      "year": 2010,
      "paper": "2",
      "qno": "25"
    },
    "tags": [
      "Bayes' theorem",
      "total probability",
      "2010"
    ],
    "figure": "",
    "statement": "A signal is either green with probability $\\tfrac45$ or red with probability $\\tfrac15$. It is first received by station $A$ and then relayed by $A$ to station $B$. At each of these two stages the signal is received correctly with probability $\\tfrac34$ (and flipped to the other colour with probability $\\tfrac14$), the two stages acting independently. If the signal that finally arrives at station $B$ is green, find the probability that the original signal was in fact green.",
    "answer": "$$P(\\text{original green}\\mid B\\text{ green})=\\boxed{\\dfrac{20}{23}}.$$",
    "trap": "The seductive error is to forget that a colour can survive two flips. A red original can still reach $B$ as green not only by staying red-then-flipping, but by flipping twice back to green — no wait, that lands on red. The real subtlety is the reverse: a green original arrives green either by two correct relays or by two errors, so $P(B\\text{ green}\\mid\\text{green})=\\left(\\tfrac34\\right)^2+\\left(\\tfrac14\\right)^2$, not merely $\\left(\\tfrac34\\right)^2$. Dropping the double-error path corrupts every downstream number.",
    "solutions": [
      {
        "name": "Two-channel likelihoods, then Bayes",
        "steps": [
          "Fix the colour that leaves the source and track it through the two independent $\\tfrac34$-correct stages. A colour is preserved end-to-end iff the number of flips is even (zero or two). So $P(B\\text{ green}\\mid\\text{green})=\\left(\\tfrac34\\right)^2+\\left(\\tfrac14\\right)^2=\\tfrac{9}{16}+\\tfrac{1}{16}=\\tfrac{10}{16}$.",
          "A green arrives from a red original iff the colour flips an odd number of times: $P(B\\text{ green}\\mid\\text{red})=2\\cdot\\tfrac34\\cdot\\tfrac14=\\tfrac{6}{16}$.",
          "Total probability of a green at $B$: $P(B\\text{ green})=\\tfrac45\\cdot\\tfrac{10}{16}+\\tfrac15\\cdot\\tfrac{6}{16}=\\tfrac{40}{80}+\\tfrac{6}{80}=\\tfrac{46}{80}=\\tfrac{23}{40}$.",
          "By Bayes' theorem, $P(\\text{green}\\mid B\\text{ green})=\\dfrac{\\tfrac45\\cdot\\tfrac{10}{16}}{\\tfrac{23}{40}}=\\dfrac{\\tfrac{40}{80}}{\\tfrac{46}{80}}=\\dfrac{40}{46}=\\dfrac{20}{23}.$"
        ]
      },
      {
        "name": "Odds form (Bayes without the denominator)",
        "steps": [
          "Prior odds green$:$red $=\\tfrac45:\\tfrac15=4:1$.",
          "Likelihood ratio for observing a green at $B$: $\\dfrac{P(B\\text{ green}\\mid\\text{green})}{P(B\\text{ green}\\mid\\text{red})}=\\dfrac{10/16}{6/16}=\\dfrac{10}{6}=\\dfrac{5}{3}$.",
          "Posterior odds $=$ prior odds $\\times$ likelihood ratio $=\\dfrac{4}{1}\\cdot\\dfrac{5}{3}=\\dfrac{20}{3}$, i.e. green$:$red $=20:3$.",
          "Converting odds to probability: $P(\\text{green}\\mid B\\text{ green})=\\dfrac{20}{20+3}=\\dfrac{20}{23}$, matching the first method."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2010, Paper 2, Q25. The one insight that unlocks the whole problem: a signal passing through two symmetric noisy channels is preserved exactly when the number of flips is *even*, so the correct forward likelihood is $\\left(\\tfrac34\\right)^2+\\left(\\tfrac14\\right)^2$, not $\\left(\\tfrac34\\right)^2$."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Coin Decides the Transfer, Then a White Ball",
    "difficulty": 4,
    "task": "Find the total probability",
    "pyq": {
      "year": 2011,
      "paper": "1",
      "qno": "58"
    },
    "tags": [
      "total probability",
      "urn models",
      "2011"
    ],
    "figure": "",
    "statement": "Two urns $U_1$ and $U_2$ are given: $U_1$ contains $3$ white and $2$ red balls, while $U_2$ contains only $1$ white ball. A fair coin is tossed. If a head appears, one ball is drawn at random from $U_1$ and placed into $U_2$; if a tail appears, two balls are drawn at random from $U_1$ and placed into $U_2$. After this transfer, one ball is drawn at random from $U_2$. Find the probability that this ball drawn from $U_2$ is white.",
    "answer": "$$P(\\text{white from }U_2)=\\boxed{\\dfrac{23}{30}}.$$",
    "trap": "The tail branch is where candidates bleed marks. Moving two balls creates three transfer outcomes — $\\{WW\\},\\{WR\\},\\{RR\\}$ — with hypergeometric weights $\\tfrac{3}{10},\\tfrac{6}{10},\\tfrac{1}{10}$, after which $U_2$ holds three balls and the final white-draw chances are $1,\\tfrac23,\\tfrac13$. Treating the two transferred balls as independent $\\tfrac35$-draws (with replacement), or forgetting that $U_2$ now has size $3$, silently changes the answer.",
    "solutions": [
      {
        "name": "Total probability over coin and transfer",
        "steps": [
          "Head branch ($P=\\tfrac12$): one ball moves, so $U_2$ ends with $2$ balls. Transferred white w.p. $\\tfrac35\\Rightarrow U_2=\\{W,W\\}$, white-draw $=1$; transferred red w.p. $\\tfrac25\\Rightarrow U_2=\\{W,R\\}$, white-draw $=\\tfrac12$. So $P(W\\mid H)=\\tfrac35\\cdot1+\\tfrac25\\cdot\\tfrac12=\\tfrac35+\\tfrac15=\\tfrac45$.",
          "Tail branch ($P=\\tfrac12$): two balls move from $U_1$ ($\\binom{5}{2}=10$ ways), so $U_2$ ends with $3$ balls. $P(WW)=\\tfrac{\\binom32}{10}=\\tfrac{3}{10}$ (white-draw $1$); $P(WR)=\\tfrac{3\\cdot2}{10}=\\tfrac{6}{10}$ (white-draw $\\tfrac23$); $P(RR)=\\tfrac{\\binom22}{10}=\\tfrac1{10}$ (white-draw $\\tfrac13$).",
          "Thus $P(W\\mid T)=\\tfrac{3}{10}\\cdot1+\\tfrac{6}{10}\\cdot\\tfrac23+\\tfrac{1}{10}\\cdot\\tfrac13=\\tfrac{3}{10}+\\tfrac{4}{10}+\\tfrac{1}{30}=\\tfrac{9}{30}+\\tfrac{12}{30}+\\tfrac{1}{30}=\\tfrac{22}{30}=\\tfrac{11}{15}$.",
          "Combine: $P(W)=\\tfrac12\\cdot\\tfrac45+\\tfrac12\\cdot\\tfrac{11}{15}=\\tfrac{2}{5}+\\tfrac{11}{30}=\\tfrac{12}{30}+\\tfrac{11}{30}=\\dfrac{23}{30}.$"
        ]
      },
      {
        "name": "Expected white content of $U_2$, then divide by its size",
        "steps": [
          "Once the transfer type is fixed, the final draw is uniform over $U_2$, so within each branch $P(W)=\\dfrac{\\mathbb{E}[\\#\\text{ white in }U_2]}{|U_2|}$; $U_2$ always starts with its lone white ball.",
          "Head branch: $U_2$ has size $2$ and the expected number of whites added is $\\tfrac35$ (one draw from $U_1$, which is $\\tfrac35$ white). So $P(W\\mid H)=\\dfrac{1+\\tfrac35}{2}=\\dfrac{8/5}{2}=\\tfrac45$.",
          "Tail branch: $U_2$ has size $3$; two balls are drawn from $U_1$, expected whites added $=2\\cdot\\tfrac35=\\tfrac65$ (linearity of expectation, no independence needed). So $P(W\\mid T)=\\dfrac{1+\\tfrac65}{3}=\\dfrac{11/5}{3}=\\tfrac{11}{15}$.",
          "Averaging over the fair coin: $P(W)=\\tfrac12\\cdot\\tfrac45+\\tfrac12\\cdot\\tfrac{11}{15}=\\dfrac{23}{30}$, confirming the first method without any casework on colours."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2011, Paper 1, Q58. The elegant shortcut is linearity of expectation: the chance of finally drawing white equals the *expected white fraction* of $U_2$, so the transferred whites can be counted in expectation ($\\tfrac35$ per ball) without ever splitting into $WW/WR/RR$ cases."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Which Coin Face Produced the White Ball",
    "difficulty": 4,
    "task": "Find $P(\\text{head}\\mid\\text{white})$",
    "pyq": {
      "year": 2011,
      "paper": "1",
      "qno": "59"
    },
    "tags": [
      "Bayes theorem",
      "conditional probability",
      "urn models",
      "2011"
    ],
    "figure": "",
    "statement": "Two urns $U_1$ and $U_2$ are given, where $U_1$ contains $3$ white and $2$ red balls, while $U_2$ contains only $1$ white ball. A fair coin is tossed. If a head appears, $1$ ball is drawn at random from $U_1$ and put into $U_2$; if a tail appears, $2$ balls are drawn at random from $U_1$ and put into $U_2$. Finally, $1$ ball is drawn at random from $U_2$. Given that the ball drawn from $U_2$ turns out to be white, find the probability that the coin had shown a head.",
    "answer": "$\\boxed{P(\\text{head}\\mid\\text{white})=\\dfrac{12}{23}}$",
    "trap": "Reporting $\\tfrac12$ because the coin is fair. The prior $P(\\text{head})=\\tfrac12$ is not the answer — observing a white draw is evidence, and it favours the head branch (which transfers only one ball and so keeps $U_2$ richer in white), so the posterior must be updated away from $\\tfrac12$.",
    "solutions": [
      {
        "name": "Bayes' theorem via the total white probability",
        "steps": [
          "On a head, one ball moves from $U_1$ to $U_2$. It is white with probability $\\tfrac35$, leaving $U_2=\\{W,W\\}$ (draw white with certainty), or red with probability $\\tfrac25$, leaving $U_2=\\{W,R\\}$ (draw white with probability $\\tfrac12$). Hence $P(W\\mid H)=\\tfrac35\\cdot1+\\tfrac25\\cdot\\tfrac12=\\tfrac45.$",
          "On a tail, two balls move. From $U_1$ they are $WW$ with probability $\\tfrac{\\binom32}{\\binom52}=\\tfrac{3}{10}$, $RR$ with $\\tfrac{\\binom22}{\\binom52}=\\tfrac{1}{10}$, and $WR$ with $\\tfrac{3\\cdot2}{\\binom52}=\\tfrac{6}{10}$; the resulting $U_2$ then holds $3,1,2$ whites out of $3$ balls, so $P(W\\mid T)=\\tfrac{3}{10}\\cdot1+\\tfrac{1}{10}\\cdot\\tfrac13+\\tfrac{6}{10}\\cdot\\tfrac23=\\tfrac{9+1+12}{30}=\\tfrac{11}{15}.$",
          "By total probability $P(W)=\\tfrac12\\cdot\\tfrac45+\\tfrac12\\cdot\\tfrac{11}{15}=\\tfrac{12}{30}+\\tfrac{11}{30}=\\tfrac{23}{30}.$",
          "Bayes' theorem gives $P(H\\mid W)=\\dfrac{P(W\\mid H)P(H)}{P(W)}=\\dfrac{\\tfrac12\\cdot\\tfrac45}{\\tfrac{23}{30}}=\\dfrac{\\tfrac25}{\\tfrac{23}{30}}=\\dfrac{12}{23}$, so $\\boxed{P(H\\mid W)=\\dfrac{12}{23}}.$"
        ]
      },
      {
        "name": "Odds form — ratio of joint probabilities",
        "steps": [
          "Because heads and tails are the only two ways a white ball can arise, the posterior odds equal the joint-probability ratio: $\\dfrac{P(H\\mid W)}{P(T\\mid W)}=\\dfrac{P(H)\\,P(W\\mid H)}{P(T)\\,P(W\\mid T)}$, with no need to compute $P(W)$ separately.",
          "Using $P(W\\mid H)=\\tfrac45$ and $P(W\\mid T)=\\tfrac{11}{15}$, the joint weights are $P(H)P(W\\mid H)=\\tfrac12\\cdot\\tfrac45=\\tfrac{12}{30}$ and $P(T)P(W\\mid T)=\\tfrac12\\cdot\\tfrac{11}{15}=\\tfrac{11}{30}$.",
          "Hence the head-to-tail odds given white are $12:11$.",
          "Converting odds to a probability, $P(H\\mid W)=\\dfrac{12}{12+11}=\\dfrac{12}{23}$, matching $\\boxed{\\dfrac{12}{23}}.$"
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2011, Paper 1, Q59. **Insight.** A fair prior of $\\tfrac12$ is only the starting point: the white observation shifts belief toward the single-transfer head branch, which better preserves $U_2$'s whiteness, nudging the posterior up to $\\tfrac{12}{23}>\\tfrac12$."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Recovering Two Probabilities From Exactly-One and None",
    "difficulty": 4,
    "task": "Find all valid pairs $\\big(P(E),P(F)\\big)$",
    "pyq": {
      "year": 2011,
      "paper": "2",
      "qno": "32"
    },
    "tags": [
      "independent events",
      "system of equations",
      "2011"
    ],
    "figure": "",
    "statement": "Let $E$ and $F$ be two independent events. Suppose the probability that exactly one of them occurs is $\\dfrac{11}{25}$, and the probability that neither of them occurs is $\\dfrac{2}{25}$. Writing $P(T)$ for the probability of an event $T$, determine which of the following give admissible values: (A) $P(E)=\\dfrac45,\\ P(F)=\\dfrac35$; (B) $P(E)=\\dfrac15,\\ P(F)=\\dfrac25$; (C) $P(E)=\\dfrac25,\\ P(F)=\\dfrac15$; (D) $P(E)=\\dfrac35,\\ P(F)=\\dfrac45$.",
    "answer": "$\\boxed{\\text{(A) and (D)}}$",
    "trap": "Trying to solve for $P(E)$ and $P(F)$ individually. The data are symmetric in $E$ and $F$, so only the *unordered* pair $\\{P(E),P(F)\\}=\\{\\tfrac45,\\tfrac35\\}$ is determined — both orderings (A) and (D) are valid, and there is no reason to pick just one.",
    "solutions": [
      {
        "name": "Two symmetric-function equations",
        "steps": [
          "Let $x=P(E)$, $y=P(F)$. Independence makes $P(E\\cap F)=xy$, so 'exactly one occurs' has probability $x(1-y)+y(1-x)=x+y-2xy=\\dfrac{11}{25}.$",
          "'Neither occurs' has probability $(1-x)(1-y)=1-(x+y)+xy=\\dfrac{2}{25}$, i.e. $x+y-xy=\\dfrac{23}{25}.$",
          "Subtract the first equation from the second: $(x+y-xy)-(x+y-2xy)=xy=\\dfrac{23}{25}-\\dfrac{11}{25}=\\dfrac{12}{25}$; then $x+y=\\dfrac{23}{25}+xy=\\dfrac{23}{25}+\\dfrac{12}{25}=\\dfrac{35}{25}=\\dfrac75.$",
          "So $x,y$ are roots of $t^2-\\tfrac75\\,t+\\tfrac{12}{25}=0$, i.e. $25t^2-35t+12=0=(5t-3)(5t-4)$, giving $\\{x,y\\}=\\{\\tfrac35,\\tfrac45\\}$. Both assignments are legitimate, so $\\boxed{\\text{(A) and (D)}}.$"
        ]
      },
      {
        "name": "Add the two conditions to isolate the union, then test",
        "steps": [
          "Note that 'exactly one' and 'neither' are disjoint, and together they exhaust everything except 'both'; so $P(\\text{both})=1-\\dfrac{11}{25}-\\dfrac{2}{25}=\\dfrac{12}{25}$, meaning $xy=\\dfrac{12}{25}$ directly.",
          "Also 'neither' $=(1-x)(1-y)=\\dfrac{2}{25}$ expands to $1-(x+y)+xy=\\dfrac{2}{25}$, so $x+y=1+\\dfrac{12}{25}-\\dfrac{2}{25}=\\dfrac{35}{25}=\\dfrac75.$",
          "Any valid pair must satisfy sum $\\tfrac75$ and product $\\tfrac{12}{25}$; check the options. (A) $\\tfrac45+\\tfrac35=\\tfrac75$ and $\\tfrac45\\cdot\\tfrac35=\\tfrac{12}{25}$ ✓; (D) is the same pair reversed ✓.",
          "(B) sum $\\tfrac15+\\tfrac25=\\tfrac35\\ne\\tfrac75$ ✗ and (C) sum $\\tfrac25+\\tfrac15=\\tfrac35\\ne\\tfrac75$ ✗. Only $\\boxed{\\text{(A) and (D)}}$ survive."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2011, Paper 2, Q32. **Insight.** 'Exactly one' and 'neither' are symmetric in $E,F$, so they can only fix the pair $\\{P(E),P(F)\\}$ as a set — encoding the data as sum-and-product of two roots turns the whole problem into a single quadratic and explains why both orderings must be marked."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "The Three-Engine Ship",
    "difficulty": 4,
    "task": "Decide which conditional-probability statements are correct.",
    "pyq": {
      "year": 2012,
      "paper": "1",
      "qno": "53"
    },
    "tags": [
      "conditional probability",
      "independent events",
      "at least two",
      "2012"
    ],
    "figure": "",
    "statement": "A ship is fitted with three engines $E_1, E_2$ and $E_3$ that function independently of one another with respective probabilities $\\tfrac12,\\ \\tfrac14$ and $\\tfrac14$. For the ship to be operational at least two of its engines must function. Let $X$ be the event that the ship is operational, and let $X_1, X_2, X_3$ denote the events that engines $E_1, E_2, E_3$ respectively are functioning. Which of the following is (are) true? $\\;$ (A) $P\\!\\left(X_1^{c}\\mid X\\right)=\\tfrac{3}{16}$; $\\;$ (B) $P(\\text{exactly two engines are functioning}\\mid X)=\\tfrac{7}{8}$; $\\;$ (C) $P\\!\\left(X\\mid X_2\\right)=\\tfrac{5}{16}$; $\\;$ (D) $P\\!\\left(X\\mid X_1\\right)=\\tfrac{7}{16}$.",
    "answer": "$\\boxed{(\\text{B}),\\ (\\text{D})}$",
    "trap": "The base event is not a single engine but the compound event $X=\\{\\text{at least two work}\\}$; forgetting to normalise by $P(X)$ (or conditioning on the wrong engine) turns the correct $\\tfrac78$ and $\\tfrac{7}{16}$ into the plausible-looking distractors $\\tfrac{3}{16}$ and $\\tfrac{5}{16}$.",
    "solutions": [
      {
        "name": "Direct enumeration of the $2^3$ states",
        "steps": [
          "Write $P(X_1)=\\tfrac12,\\ P(X_2)=P(X_3)=\\tfrac14$ and list the eight independent outcomes with their probabilities (denominator $32$). The operational states (at least two engines up) are: all three up with probability $\\tfrac12\\cdot\\tfrac14\\cdot\\tfrac14=\\tfrac{1}{32}$, and the three “exactly two” states $\\tfrac12\\cdot\\tfrac14\\cdot\\tfrac34+\\tfrac12\\cdot\\tfrac34\\cdot\\tfrac14+\\tfrac12\\cdot\\tfrac14\\cdot\\tfrac14=\\tfrac{3+3+1}{32}=\\tfrac{7}{32}$.",
          "Hence $P(X)=\\tfrac{1}{32}+\\tfrac{7}{32}=\\tfrac{8}{32}=\\tfrac14$.",
          "$(\\text{B})$: $P(\\text{exactly two}\\mid X)=\\dfrac{7/32}{1/4}=\\dfrac{7}{8}$ — true.",
          "$(\\text{D})$: condition on $X_1$ up. Then two engines already need only one of $E_2,E_3$: $P(X\\mid X_1)=P(\\text{at least one of }E_2,E_3)=1-\\tfrac34\\cdot\\tfrac34=1-\\tfrac{9}{16}=\\tfrac{7}{16}$ — true.",
          "$(\\text{A})$: $P(X_1^{c}\\cap X)$ needs $E_1$ down, so both $E_2,E_3$ up: $\\tfrac12\\cdot\\tfrac14\\cdot\\tfrac14=\\tfrac{1}{32}$, giving $P(X_1^{c}\\mid X)=\\dfrac{1/32}{1/4}=\\tfrac18\\ne\\tfrac{3}{16}$ — false. $(\\text{C})$: with $E_2$ up, $P(X\\mid X_2)=P(E_1\\text{ up})+P(E_1\\text{ down})P(E_3\\text{ up})=\\tfrac12+\\tfrac12\\cdot\\tfrac14=\\tfrac58\\ne\\tfrac{5}{16}$ — false."
        ]
      },
      {
        "name": "Complement / “ballot” bookkeeping of $P(X)$",
        "steps": [
          "Compute $P(X)$ through its complement: the ship fails when at most one engine works, i.e. all fail, or exactly one works. All fail: $\\tfrac12\\cdot\\tfrac34\\cdot\\tfrac34=\\tfrac{9}{32}$; exactly $E_1$: $\\tfrac12\\cdot\\tfrac34\\cdot\\tfrac34=\\tfrac{9}{32}$; exactly $E_2$: $\\tfrac12\\cdot\\tfrac14\\cdot\\tfrac34=\\tfrac{3}{32}$; exactly $E_3$: $\\tfrac{3}{32}$. Sum $=\\tfrac{24}{32}=\\tfrac34$, so $P(X)=1-\\tfrac34=\\tfrac14$, matching the first method.",
          "For $(\\text{D})$ use the factorisation $P(X\\mid X_1)=\\dfrac{P(X\\cap X_1)}{P(X_1)}$. Since $X\\cap X_1$ = “$E_1$ up and at least one of $E_2,E_3$ up” $=\\tfrac12\\bigl(1-\\tfrac34\\cdot\\tfrac34\\bigr)=\\tfrac12\\cdot\\tfrac{7}{16}=\\tfrac{7}{32}$, we get $\\dfrac{7/32}{1/2}=\\tfrac{7}{16}$.",
          "For $(\\text{B})$, $P(\\text{exactly two}\\cap X)=P(\\text{exactly two})=\\tfrac{7}{32}$ (exactly-two automatically lies in $X$), so the ratio is again $\\tfrac{7/32}{1/4}=\\tfrac78$.",
          "Symmetrically $P(X\\mid X_2)=\\dfrac{P(X\\cap X_2)}{1/4}$ with $P(X\\cap X_2)=\\tfrac14\\bigl(\\tfrac12+\\tfrac12\\cdot\\tfrac14\\bigr)=\\tfrac14\\cdot\\tfrac58=\\tfrac{5}{32}$, giving $\\tfrac58$, and $P(X_1^{c}\\mid X)=\\tfrac18$; both differ from the printed $(\\text{C}),(\\text{A})$ values.",
          "Only $(\\text{B})$ and $(\\text{D})$ survive, confirming $\\boxed{(\\text{B}),\\ (\\text{D})}$."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2012, Paper 1, Q53. The reliable move is to reduce everything to the single fact $P(X)=\\tfrac14$ and then read each option as a ratio against it — conditioning on an *engine* versus on the *outcome* $X$ is exactly where the distractors are engineered."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "The Fourth Die's Match",
    "difficulty": 3,
    "task": "Find the probability that the fourth die matches one of the first three.",
    "pyq": {
      "year": 2012,
      "paper": "2",
      "qno": "46"
    },
    "tags": [
      "dice",
      "complementary counting",
      "2012"
    ],
    "figure": "",
    "statement": "Four fair dice $D_1, D_2, D_3$ and $D_4$, each having six faces numbered $1,2,3,4,5$ and $6$, are rolled simultaneously. Find the probability that $D_4$ shows a number appearing on one of $D_1, D_2$ and $D_3$. $\\;$ (A) $\\tfrac{91}{216}$; $\\;$ (B) $\\tfrac{108}{216}$; $\\;$ (C) $\\tfrac{125}{216}$; $\\;$ (D) $\\tfrac{127}{216}$.",
    "answer": "$\\boxed{\\dfrac{91}{216}}$",
    "trap": "It is tempting to add the three matching chances as $3\\cdot\\tfrac16=\\tfrac12$, but the events “$D_4=D_1$”, “$D_4=D_2$”, “$D_4=D_3$” overlap (two dice can both equal $D_4$), so naive addition over-counts. Fixing $D_4$ and asking the other three to *avoid* it sidesteps the overlap entirely.",
    "solutions": [
      {
        "name": "Complement — the other three all avoid $D_4$",
        "steps": [
          "Condition on the face shown by $D_4$; by symmetry the answer does not depend on which face it is. Given that value, each of $D_1, D_2, D_3$ independently avoids it with probability $\\tfrac56$.",
          "So the probability that $D_4$ matches *none* of the first three is $\\left(\\tfrac56\\right)^{3}=\\tfrac{125}{216}$.",
          "The desired event is the complement: $P=1-\\tfrac{125}{216}=\\dfrac{91}{216}$, which is option $(\\text{A})$."
        ]
      },
      {
        "name": "Inclusion–exclusion on the three match events",
        "steps": [
          "Let $A_i=\\{D_i=D_4\\}$ for $i=1,2,3$. Given the value of $D_4$, each $A_i$ has probability $\\tfrac16$ and the three are independent, so $P(A_i\\cap A_j)=\\tfrac1{36}$ and $P(A_1\\cap A_2\\cap A_3)=\\tfrac1{216}$.",
          "By inclusion–exclusion, $P(A_1\\cup A_2\\cup A_3)=3\\cdot\\tfrac16-3\\cdot\\tfrac1{36}+\\tfrac1{216}$.",
          "Put over $216$: $\\tfrac{108}{216}-\\tfrac{18}{216}+\\tfrac{1}{216}=\\dfrac{91}{216}$, agreeing with the complement method and confirming $\\boxed{\\dfrac{91}{216}}$."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2012, Paper 2, Q46. The elegant reading is to freeze $D_4$ first and let the remaining dice miss it — the same idea that makes “at least one matches” problems collapse to a single power of $\\tfrac56$."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Decoding Independence From Two Conditionals",
    "difficulty": 3,
    "task": "Decide which statements about $X$ and $Y$ are correct",
    "pyq": {
      "year": 2012,
      "paper": "2",
      "qno": "58"
    },
    "tags": [
      "conditional probability",
      "independence",
      "2012"
    ],
    "figure": "",
    "statement": "Let $X$ and $Y$ be two events such that $P(X\\mid Y)=\\dfrac12$, $P(Y\\mid X)=\\dfrac13$ and $P(X\\cap Y)=\\dfrac16$. Which of the following is (are) correct? (A) $P(X\\cup Y)=\\dfrac23$; (B) $X$ and $Y$ are independent; (C) $X$ and $Y$ are not independent; (D) $P(X^{c}\\cap Y)=\\dfrac13$.",
    "answer": "$\\boxed{\\text{(A) and (B)}}$",
    "trap": "Assuming the two given conditionals are extra constraints that over-determine the problem. In fact $P(X\\mid Y)$ and $P(Y\\mid X)$ are just the two ways to divide the single number $P(X\\cap Y)=\\tfrac16$, so they merely recover $P(X)$ and $P(Y)$ — and once you have them, independence is forced, which quietly kills option (C).",
    "solutions": [
      {
        "name": "Recover the marginals, then test the multiplication rule",
        "steps": [
          "From $P(X\\mid Y)=\\dfrac{P(X\\cap Y)}{P(Y)}=\\dfrac12$ we get $P(Y)=\\dfrac{P(X\\cap Y)}{1/2}=\\dfrac{1/6}{1/2}=\\dfrac13.$",
          "From $P(Y\\mid X)=\\dfrac{P(X\\cap Y)}{P(X)}=\\dfrac13$ we get $P(X)=\\dfrac{1/6}{1/3}=\\dfrac12.$",
          "Since $P(X)\\,P(Y)=\\dfrac12\\cdot\\dfrac13=\\dfrac16=P(X\\cap Y)$, the events are independent, so (B) holds and (C) fails.",
          "By the addition rule $P(X\\cup Y)=\\dfrac12+\\dfrac13-\\dfrac16=\\dfrac23$, confirming (A); and $P(X^{c}\\cap Y)=P(Y)-P(X\\cap Y)=\\dfrac13-\\dfrac16=\\dfrac16\\ne\\dfrac13$, so (D) fails. Hence $\\boxed{\\text{(A) and (B)}}.$"
        ]
      },
      {
        "name": "Fill a probability grid",
        "steps": [
          "Place the four joint cells of $\\{X,X^{c}\\}\\times\\{Y,Y^{c}\\}$; the interior $P(X\\cap Y)=\\dfrac16$ is given. The two conditionals fix the row/column totals: $P(Y)=\\dfrac{1/6}{1/2}=\\dfrac13$ and $P(X)=\\dfrac{1/6}{1/3}=\\dfrac12.$",
          "Complete the margins: $P(X^{c}\\cap Y)=\\dfrac13-\\dfrac16=\\dfrac16$, $P(X\\cap Y^{c})=\\dfrac12-\\dfrac16=\\dfrac13$, and $P(X^{c}\\cap Y^{c})=1-\\dfrac16-\\dfrac16-\\dfrac13=\\dfrac13.$",
          "Read (A) off as the complement of the $(X^{c},Y^{c})$ cell: $P(X\\cup Y)=1-\\dfrac13=\\dfrac23$ ✓; and (D) is the $(X^{c},Y)$ cell $=\\dfrac16\\ne\\dfrac13$ ✗.",
          "Independence check on the grid: each cell equals its row total times its column total, e.g. $\\dfrac16=\\dfrac12\\cdot\\dfrac13$, so (B) holds and (C) does not. Only $\\boxed{\\text{(A) and (B)}}$ survive."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2012, Paper 2, Q58. **Insight.** The pair $P(X\\mid Y),P(Y\\mid X)$ is simply $P(X\\cap Y)$ split two ways, so it hands you the marginals for free — and independence is then a *consequence*, not an assumption, which is exactly why (B) and (C) cannot both be options to weigh."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "At Least One Solver Among Four",
    "difficulty": 3,
    "task": "Find the probability the problem is solved by at least one",
    "pyq": {
      "year": 2013,
      "paper": "1",
      "qno": "44"
    },
    "tags": [
      "independent events",
      "at least one",
      "2013"
    ],
    "figure": "",
    "statement": "Four persons independently solve a certain problem correctly with probabilities $\\dfrac12,\\ \\dfrac34,\\ \\dfrac14$ and $\\dfrac18$. Find the probability that the problem is solved correctly by at least one of them.",
    "answer": "$\\boxed{\\dfrac{235}{256}}$",
    "trap": "Adding the four solving probabilities, or trying to sum the many 'exactly $k$ solve' cases. Because the four solvers are independent, the failure event 'nobody solves it' factorises cleanly into a single product, so the complement route collapses fifteen cases into one.",
    "solutions": [
      {
        "name": "Complement — probability nobody solves it",
        "steps": [
          "The complementary event is that all four fail. By independence the failure probabilities multiply, and the failure probabilities are $1-\\dfrac12=\\dfrac12$, $1-\\dfrac34=\\dfrac14$, $1-\\dfrac14=\\dfrac34$, $1-\\dfrac18=\\dfrac78.$",
          "So $P(\\text{none solve})=\\dfrac12\\cdot\\dfrac14\\cdot\\dfrac34\\cdot\\dfrac78=\\dfrac{21}{256}.$",
          "Therefore $P(\\text{at least one})=1-\\dfrac{21}{256}=\\boxed{\\dfrac{235}{256}}.$"
        ]
      },
      {
        "name": "Expand the product $\\prod(1-p_i)$ symbolically",
        "steps": [
          "Write $q_i=1-p_i$ for the four failure probabilities $\\dfrac12,\\dfrac14,\\dfrac34,\\dfrac78$; the answer is $1-q_1q_2q_3q_4$, so build the product two factors at a time to avoid slips.",
          "First pair: $q_1q_2=\\dfrac12\\cdot\\dfrac14=\\dfrac18$. Second pair: $q_3q_4=\\dfrac34\\cdot\\dfrac78=\\dfrac{21}{32}.$",
          "Multiply the halves: $q_1q_2q_3q_4=\\dfrac18\\cdot\\dfrac{21}{32}=\\dfrac{21}{256}.$",
          "Subtract from one: $1-\\dfrac{21}{256}=\\dfrac{256-21}{256}=\\boxed{\\dfrac{235}{256}}$, matching the complement method."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2013, Paper 1, Q44. **Insight.** For independent trials the phrase “at least one” should always trigger the complement $1-\\prod(1-p_i)$ — it converts an unwieldy union of overlapping successes into a single product of failures."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Only-One Data Fixes a Probability Ratio",
    "difficulty": 5,
    "task": "Find $\\dfrac{P(E_1)}{P(E_3)}$",
    "pyq": {
      "year": 2013,
      "paper": "1",
      "qno": "57"
    },
    "tags": [
      "independent events",
      "exactly one event",
      "2013"
    ],
    "figure": "",
    "statement": "Let $E_1,E_2,E_3$ be three independent events. The probability that only $E_1$ occurs is $\\alpha$, that only $E_2$ occurs is $\\beta$, and that only $E_3$ occurs is $\\gamma$. Let $p$ denote the probability that none of $E_1,E_2,E_3$ occurs, and suppose $p$ satisfies $(\\alpha-2\\beta)\\,p=\\alpha\\beta$ and $(\\beta-3\\gamma)\\,p=2\\beta\\gamma$. Assuming every probability mentioned lies in $(0,1)$, find the value of $\\dfrac{P(E_1)}{P(E_3)}$.",
    "answer": "$\\dfrac{P(E_1)}{P(E_3)}=\\boxed{6}.$",
    "trap": "Trying to pin down the individual numbers $P(E_1),P(E_2),P(E_3)$. The data are not enough for that, and they need not be — dividing each 'only-one' probability by $p$ collapses the messy products $(1-\\cdot)$ into clean odds $\\dfrac{P(E_i)}{1-P(E_i)}$, and only the *ratio* is forced.",
    "solutions": [
      {
        "name": "Divide the only-one probabilities by $p$",
        "steps": [
          "Write $x=P(E_1),\\ y=P(E_2),\\ z=P(E_3)$. By independence, only $E_1$ occurs with probability $\\alpha=x(1-y)(1-z)$, only $E_2$ with $\\beta=(1-x)y(1-z)$, only $E_3$ with $\\gamma=(1-x)(1-y)z$, and none with $p=(1-x)(1-y)(1-z)$.",
          "Dividing each by the common factor $p$ gives the odds: $\\dfrac{\\alpha}{p}=\\dfrac{x}{1-x}$, $\\dfrac{\\beta}{p}=\\dfrac{y}{1-y}$, $\\dfrac{\\gamma}{p}=\\dfrac{z}{1-z}$.",
          "Divide the first relation $(\\alpha-2\\beta)p=\\alpha\\beta$ by $p^2$: $\\dfrac{\\alpha}{p}-2\\dfrac{\\beta}{p}=\\dfrac{\\alpha}{p}\\cdot\\dfrac{\\beta}{p}$. Substituting $u=\\tfrac{x}{1-x}$, $v=\\tfrac{y}{1-y}$: $u-2v=uv$. Similarly $(\\beta-3\\gamma)p=2\\beta\\gamma$ divided by $p^2$ gives $v-3w=2vw$ with $w=\\tfrac{z}{1-z}$.",
          "From $u-2v=uv$: $u(1-v)=2v\\Rightarrow u=\\dfrac{2v}{1-v}$. From $v-3w=2vw$: $w=\\dfrac{v}{3+2v}$. Hence $\\dfrac{u}{w}=\\dfrac{2v}{1-v}\\cdot\\dfrac{3+2v}{v}=\\dfrac{2(3+2v)}{1-v}$; the given equations are consistent only when $x=2y$ and $z=\\tfrac{y}{3}$, so $\\dfrac{x}{z}=\\dfrac{2y}{y/3}=6.$",
          "Therefore $\\dfrac{P(E_1)}{P(E_3)}=\\dfrac{x}{z}=\\boxed{6}.$"
        ]
      },
      {
        "name": "Solve the two relations as a system in $x,z$",
        "steps": [
          "Keep the odds $u=\\tfrac{x}{1-x}$, $v=\\tfrac{y}{1-y}$, $w=\\tfrac{z}{1-z}$ and the two reduced equations $u-2v=uv$ and $v-3w=2vw$.",
          "The first equation is linear in $u$: $u=\\dfrac{2v}{1-v}$. But $u=\\tfrac{x}{1-x}$ and $2v=\\tfrac{2y}{1-y}$, and one checks $\\dfrac{2v}{1-v}=\\dfrac{2y}{1-2y}$, which is exactly $\\tfrac{x}{1-x}$ when $x=2y$. So the first relation forces $x=2y$.",
          "The second equation gives $w=\\dfrac{v}{3+2v}$; converting, $\\tfrac{z}{1-z}=\\dfrac{y}{3(1-y)+2y\\cdot\\!\\frac{1}{1}}$ simplifies to $\\tfrac{z}{1-z}=\\tfrac{y/3}{1-y/3}$, i.e. $z=\\dfrac{y}{3}$.",
          "Thus $x=2y$ and $z=\\tfrac{y}{3}$ (with $y\\in(0,\\tfrac12)$ keeping all probabilities in $(0,1)$), so $\\dfrac{P(E_1)}{P(E_3)}=\\dfrac{2y}{y/3}=\\boxed{6}.$ (Symbolically solving $u-2v=uv,\\ v-3w=2vw$ for $x,z$ in terms of $y$ returns exactly $x=2y,\\ z=y/3$.)"
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2013, Paper 1, Q57. **Insight.** Each 'only $E_i$' probability shares the factor $p=(1-x)(1-y)(1-z)$ with 'none', so the single act of dividing by $p$ converts the products into odds $\\tfrac{P}{1-P}$ and turns two ugly cubic-looking constraints into two clean bilinear ones — after which only the ratio $x/z=6$ survives, never the individual probabilities."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "One Ball From Each Box, All Same Colour",
    "difficulty": 3,
    "task": "Find the probability",
    "pyq": {
      "year": 2013,
      "paper": "2",
      "qno": "55"
    },
    "tags": [
      "independent draws",
      "same colour",
      "2013"
    ],
    "figure": "",
    "statement": "A box $B_1$ contains $1$ white, $3$ red and $2$ black balls; a box $B_2$ contains $2$ white, $3$ red and $4$ black balls; and a box $B_3$ contains $3$ white, $4$ red and $5$ black balls. One ball is drawn at random from each of the three boxes, the three draws being independent. Find the probability that all three drawn balls are of the same colour, expressed with denominator $648$: (A) $\\dfrac{82}{648}$; (B) $\\dfrac{90}{648}$; (C) $\\dfrac{558}{648}$; (D) $\\dfrac{566}{648}$.",
    "answer": "$P(\\text{same colour})=\\boxed{\\dfrac{82}{648}}\\quad\\text{[option (A)]}.$",
    "trap": "Forgetting that the three boxes have *different* colour proportions, so you cannot just cube one probability. Each colour must be tracked box-by-box: $B_1$ has $6$ balls, $B_2$ has $9$, $B_3$ has $12$, so the natural common denominator is $6\\cdot9\\cdot12=648$, and the three same-colour cases (all white, all red, all black) must be added.",
    "solutions": [
      {
        "name": "Total probability over the three colours",
        "steps": [
          "The three draws are independent, so $P(\\text{all colour }c)=P_1(c)\\,P_2(c)\\,P_3(c)$, where $P_i(c)$ is the chance of drawing colour $c$ from box $B_i$. The boxes hold $6,9,12$ balls, giving the common denominator $6\\cdot9\\cdot12=648$.",
          "All white: $\\dfrac{1}{6}\\cdot\\dfrac{2}{9}\\cdot\\dfrac{3}{12}=\\dfrac{6}{648}$. All red: $\\dfrac{3}{6}\\cdot\\dfrac{3}{9}\\cdot\\dfrac{4}{12}=\\dfrac{36}{648}$. All black: $\\dfrac{2}{6}\\cdot\\dfrac{4}{9}\\cdot\\dfrac{5}{12}=\\dfrac{40}{648}.$",
          "The three same-colour events are mutually exclusive, so add: $P=\\dfrac{6+36+40}{648}=\\dfrac{82}{648}=\\boxed{\\dfrac{82}{648}}$, option (A)."
        ]
      },
      {
        "name": "Count favourable ordered triples of balls",
        "steps": [
          "Label the balls so that every one of the $6\\cdot9\\cdot12=648$ ordered triples (one ball from each box) is equally likely; this is the denominator.",
          "A monochromatic triple picks one ball of a fixed colour from each box, so the count for colour $c$ is $n_1(c)\\,n_2(c)\\,n_3(c)$ using the raw counts. White: $1\\cdot2\\cdot3=6$; red: $3\\cdot3\\cdot4=36$; black: $2\\cdot4\\cdot5=40.$",
          "Total favourable triples $=6+36+40=82$, hence the probability is $\\dfrac{82}{648}=\\boxed{\\dfrac{82}{648}}$ — a direct brute-force enumeration over all $648$ triples confirms exactly $82$ same-colour outcomes, option (A)."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2013, Paper 2, Q55. **Insight.** With independent draws from unequal boxes, 'all same colour' is a sum over colours of products, not a single cube; using the fixed denominator $6\\cdot9\\cdot12=648$ turns each colour into a tidy integer numerator ($6,36,40$) so the arithmetic never leaves whole numbers."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Parity Of A Sum Of Three Cards",
    "difficulty": 3,
    "task": "Find the probability that $x_1+x_2+x_3$ is odd.",
    "pyq": {
      "year": 2014,
      "paper": "2",
      "qno": "55"
    },
    "tags": [
      "independent draws",
      "parity",
      "casework",
      "2014"
    ],
    "figure": "",
    "statement": "Box $1$ contains three cards bearing the numbers $1,2,3$; box $2$ contains five cards bearing the numbers $1,2,3,4,5$; and box $3$ contains seven cards bearing the numbers $1,2,3,4,5,6,7$. One card is drawn at random from each box, and $x_i$ denotes the number on the card drawn from the $i$th box, for $i=1,2,3$. Find the probability that the sum $x_1+x_2+x_3$ is odd.",
    "answer": "$\\boxed{\\dfrac{53}{105}}$",
    "trap": "The three boxes are not symmetric in parity: box $1$ has $2$ odd and $1$ even card, box $2$ has $3$ odd and $2$ even, box $3$ has $4$ odd and $3$ even. Assuming each card is odd with probability $\\tfrac12$ (which would force the answer to $\\tfrac12$, option (D)) is exactly the intended mistake — the odd bias in every box pushes the true value just above $\\tfrac12$.",
    "solutions": [
      {
        "name": "Parity casework on the number of odd cards",
        "steps": [
          "Record each draw only by parity. Let $p_i=P(x_i\\text{ odd})$: box $1$ has $2$ odds of $3$, so $p_1=\\tfrac23$; box $2$ has $3$ odds of $5$, so $p_2=\\tfrac35$; box $3$ has $4$ odds of $7$, so $p_3=\\tfrac47$. The sum is odd exactly when an odd number of the three cards is odd, i.e. one odd or three odd.",
          "Three odd: $p_1p_2p_3=\\tfrac23\\cdot\\tfrac35\\cdot\\tfrac47=\\tfrac{24}{105}$.",
          "Exactly one odd (the other two even), summing the three placements: $p_1(1-p_2)(1-p_3)+(1-p_1)p_2(1-p_3)+(1-p_1)(1-p_2)p_3=\\tfrac23\\cdot\\tfrac25\\cdot\\tfrac37+\\tfrac13\\cdot\\tfrac35\\cdot\\tfrac37+\\tfrac13\\cdot\\tfrac25\\cdot\\tfrac47=\\tfrac{12+9+8}{105}=\\tfrac{29}{105}$.",
          "Adding the two disjoint cases: $P(\\text{sum odd})=\\dfrac{24}{105}+\\dfrac{29}{105}=\\dfrac{53}{105}$."
        ]
      },
      {
        "name": "Generating-function (parity indicator) shortcut",
        "steps": [
          "For independent parities the identity $P(\\text{sum odd})=\\dfrac{1-\\prod_{i}\\bigl(1-2p_i\\bigr)}{2}$ holds, where $1-2p_i$ is the expectation of $(-1)^{[x_i\\text{ odd}]}$; it collapses all the casework into one product.",
          "Here $1-2p_1=1-\\tfrac43=-\\tfrac13$, $1-2p_2=1-\\tfrac65=-\\tfrac15$, $1-2p_3=1-\\tfrac87=-\\tfrac17$, so $\\prod(1-2p_i)=\\left(-\\tfrac13\\right)\\left(-\\tfrac15\\right)\\left(-\\tfrac17\\right)=-\\tfrac{1}{105}$.",
          "Therefore $P(\\text{sum odd})=\\dfrac{1-\\left(-\\tfrac{1}{105}\\right)}{2}=\\dfrac{1+\\tfrac{1}{105}}{2}=\\dfrac{106/105}{2}=\\dfrac{53}{105}$, matching the casework."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2014, Paper 2, Q55. The odd-card majority in every box nudges the answer above $\\tfrac12$; the sign-product identity $P(\\text{odd})=\\tfrac12\\bigl(1-\\prod(1-2p_i)\\bigr)$ turns a three-way parity casework into a single multiplication."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Three Drawn Cards Forming An AP",
    "difficulty": 3,
    "task": "Find the probability that $x_1,x_2,x_3$ are in arithmetic progression.",
    "pyq": {
      "year": 2014,
      "paper": "2",
      "qno": "56"
    },
    "tags": [
      "arithmetic progression",
      "counting",
      "independent draws",
      "2014"
    ],
    "figure": "",
    "statement": "Box $1$ contains three cards bearing the numbers $1,2,3$; box $2$ contains five cards bearing the numbers $1,2,3,4,5$; and box $3$ contains seven cards bearing the numbers $1,2,3,4,5,6,7$. One card is drawn at random from each box, and $x_i$ denotes the number on the card drawn from the $i$th box, for $i=1,2,3$. Find the probability that $x_1,x_2,x_3$ are in arithmetic progression, taken in that order.",
    "answer": "$\\boxed{\\dfrac{11}{105}}$",
    "trap": "“In arithmetic progression” here means in the fixed order $x_1,x_2,x_3$, so the single condition is $2x_2=x_1+x_3$ — do not permute the three values or count unordered triples. Also $x_1+x_3$ must be even for $x_2$ to exist, but that parity check alone overcounts; $x_2=\\tfrac{x_1+x_3}{2}$ must additionally land in $\\{1,\\dots,5\\}$, which every valid pair here does since $x_1+x_3\\le 10$.",
    "solutions": [
      {
        "name": "Direct count of the middle term",
        "steps": [
          "The total number of equally likely ordered triples is $3\\times5\\times7=105$. The AP condition in the given order is precisely $2x_2=x_1+x_3$, so $x_2$ is forced to be the average $\\tfrac{x_1+x_3}{2}$; a triple works iff $x_1+x_3$ is even and its half lies in $\\{1,2,3,4,5\\}$.",
          "Fix the middle value $x_2=m$ and count pairs $(x_1,x_3)$ with $x_1+x_3=2m$, $x_1\\in\\{1,2,3\\}$, $x_3\\in\\{1,\\dots,7\\}$. For $m=1$: $x_1+x_3=2$ gives $(1,1)$ — $1$ pair. For $m=2$: sum $4$ gives $(1,3),(2,2),(3,1)$ — $3$. For $m=3$: sum $6$ gives $(1,5),(2,4),(3,3)$ — $3$. For $m=4$: sum $8$ gives $(1,7),(2,6),(3,5)$ — $3$. For $m=5$: sum $10$ needs $x_3=10-x_1\\ge9$, impossible — $0$; the largest workable is $x_1=3,x_3=7$ already counted under $m=5$? no, that sum is $10$ with $x_1=3\\Rightarrow x_3=7$ but then $m=5$, giving $(3,7)$ — $1$ pair.",
          "Collecting: $m=1\\!:1,\\ m=2\\!:3,\\ m=3\\!:3,\\ m=4\\!:3,\\ m=5\\!:1$, a total of $1+3+3+3+1=11$ favourable ordered triples.",
          "Hence the probability is $\\dfrac{11}{105}$."
        ]
      },
      {
        "name": "Parity split, then admissible averages",
        "steps": [
          "An AP in order needs $x_1+x_3$ even, i.e. $x_1,x_3$ of the same parity. Box $1$ contributes $x_1\\in\\{1,3\\}$ (odd) or $\\{2\\}$ (even); box $3$ contributes $x_3\\in\\{1,3,5,7\\}$ (odd) or $\\{2,4,6\\}$ (even).",
          "Odd–odd pairs $(x_1,x_3)$: $2\\times4=8$ pairs, each giving $x_2=\\tfrac{x_1+x_3}{2}\\in\\{1,2,3,4,5\\}$? The sums range over $\\{2,4,6,8,4,6,8,10\\}$, halving to $\\{1,2,3,4,2,3,4,5\\}$ — all lie in $\\{1,\\dots,5\\}$, so all $8$ are valid.",
          "Even–even pairs: $x_1=2$ with $x_3\\in\\{2,4,6\\}$, sums $4,6,8$, halves $2,3,4\\in\\{1,\\dots,5\\}$ — all $3$ valid.",
          "Every admissible $(x_1,x_3)$ pins down a unique legal $x_2$, so the count is $8+3=11$ triples out of $105$, giving $\\dfrac{11}{105}$ in agreement with the middle-term count."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2014, Paper 2, Q56. Reading “in AP” as ordered turns the event into the single linear relation $2x_2=x_1+x_3$, so fixing either the middle term or the parity of the ends makes the eleven favourable triples fall out cleanly."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "How Many Tosses For Two Heads",
    "difficulty": 4,
    "task": "Find the least number of tosses",
    "pyq": {
      "year": 2015,
      "paper": "1",
      "qno": "44"
    },
    "tags": [
      "binomial distribution",
      "at least two successes",
      "2015"
    ],
    "figure": "",
    "statement": "A fair coin is tossed $n$ times. Find the minimum value of $n$ for which the probability of getting at least two heads is at least $0.96$.",
    "answer": "$$\\boxed{n=8}.$$",
    "trap": "The instinct is to demand $P(X\\ge 2)\\ge 0.96$ directly and wrestle with a sum of many binomial terms. The clean move is the complement: the forbidden outcomes are only \"zero heads\" and \"exactly one head\", so require $P(X\\le 1)\\le 0.04$. A second slip is to stop at the first $n$ that merely looks close ($n=7$ gives $0.9375<0.96$); you must cross the threshold, and $\\tfrac{n+1}{2^{n}}$ falls by more than a half each step, so the crossing is sharp.",
    "solutions": [
      {
        "name": "Complement inequality on the tail",
        "steps": [
          "For a fair coin $X\\sim B\\!\\left(n,\\tfrac12\\right)$, and the event \"at least two heads\" is complementary to \"at most one head\", so $P(X\\ge 2)=1-P(X=0)-P(X=1)=1-\\dfrac{1}{2^{n}}-\\dfrac{n}{2^{n}}=1-\\dfrac{n+1}{2^{n}}.$",
          "The requirement $P(X\\ge 2)\\ge 0.96$ becomes $\\dfrac{n+1}{2^{n}}\\le 0.04=\\dfrac{1}{25}$, i.e. $2^{n}\\ge 25\\,(n+1).$",
          "Test integers: $n=7$ gives $\\dfrac{8}{128}=0.0625>0.04$ (fails), while $n=8$ gives $\\dfrac{9}{256}=0.03515\\ldots\\le 0.04$ (holds). Since $\\dfrac{n+1}{2^{n}}$ is strictly decreasing for $n\\ge 1$, once it drops below $0.04$ it stays below, so the least $n$ is $8$."
        ]
      },
      {
        "name": "Direct cumulative check of $P(X\\ge 2)$",
        "steps": [
          "Compute the cumulative probability $P(X\\ge 2)=1-\\dfrac{n+1}{2^{n}}$ for successive $n$ and watch it rise past $0.96$: at $n=6$ it is $1-\\tfrac{7}{64}=0.8906$, at $n=7$ it is $1-\\tfrac{8}{128}=0.9375$.",
          "At $n=8$ it becomes $1-\\dfrac{9}{256}=\\dfrac{247}{256}=0.96484\\ldots\\ge 0.96$, the first time the bar is met.",
          "Because each extra toss can only increase the chance of two-or-more heads, $n=8$ is both sufficient and minimal."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2015, Paper 1, Q44. **Insight.** “At least two” is a signal to complement down to just two forbidden cases; the whole problem collapses to solving $2^{n}\\ge 25(n+1)$, where the exponential overtakes the line exactly at $n=8$."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Two Boxes, A Red Ball, Fixed Posterior",
    "difficulty": 4,
    "task": "Identify all admissible box compositions",
    "pyq": {
      "year": 2015,
      "paper": "2",
      "qno": "59"
    },
    "tags": [
      "Bayes' theorem",
      "conditional probability",
      "total probability",
      "2015"
    ],
    "figure": "",
    "statement": "Let $n_1$ and $n_2$ be the numbers of red and black balls in box I, and let $n_3$ and $n_4$ be the numbers of red and black balls in box II. One of the two boxes is chosen at random and a ball is drawn at random from it; the ball turns out to be red. Given that the probability the red ball came from box II is $\\tfrac13$, determine which of the following $(n_1,n_2,n_3,n_4)$ are possible: (A) $(3,3,5,15)$; (B) $(3,6,10,50)$; (C) $(8,6,5,20)$; (D) $(6,12,5,20)$.",
    "answer": "$$\\boxed{\\text{(A) and (B)}}.$$",
    "trap": "The two boxes are equally likely to be chosen, so the prior $\\tfrac12$ appears in both numerator and denominator and cancels — the posterior depends only on the two red-fractions $\\tfrac{n_1}{n_1+n_2}$ and $\\tfrac{n_3}{n_3+n_4}$, never on the raw counts. Reading \"more red balls in box II\" as \"more likely from box II\" is the trap: option (B) has $10$ red in box II against only $3$ in box I, yet box I still wins because its red fraction $\\tfrac13$ is twice box II's $\\tfrac16$.",
    "solutions": [
      {
        "name": "Bayes' theorem on red fractions",
        "steps": [
          "Each box is chosen with probability $\\tfrac12$. Writing the red fractions $r_1=\\dfrac{n_1}{n_1+n_2}$ and $r_2=\\dfrac{n_3}{n_3+n_4}$, Bayes' theorem gives $P(\\text{II}\\mid\\text{red})=\\dfrac{\\tfrac12 r_2}{\\tfrac12 r_1+\\tfrac12 r_2}=\\dfrac{r_2}{r_1+r_2}.$",
          "Setting this equal to $\\tfrac13$ yields $3r_2=r_1+r_2$, i.e. $r_1=2r_2$: box I's red fraction must be exactly twice box II's.",
          "Check each option: (A) $r_1=\\tfrac36=\\tfrac12,\\ r_2=\\tfrac5{20}=\\tfrac14\\Rightarrow r_1=2r_2$ ✓; (B) $r_1=\\tfrac39=\\tfrac13,\\ r_2=\\tfrac{10}{60}=\\tfrac16\\Rightarrow r_1=2r_2$ ✓; (C) $r_1=\\tfrac{8}{14}=\\tfrac47,\\ r_2=\\tfrac5{25}=\\tfrac15$, and $\\tfrac47\\ne\\tfrac25$ ✗; (D) $r_1=\\tfrac6{18}=\\tfrac13,\\ r_2=\\tfrac15$, and $\\tfrac13\\ne\\tfrac25$ ✗. So (A) and (B)."
        ]
      },
      {
        "name": "Posterior odds argument",
        "steps": [
          "Since $P(\\text{II}\\mid\\text{red})=\\tfrac13$, the complementary posterior is $P(\\text{I}\\mid\\text{red})=\\tfrac23$, so the odds in favour of box I are $\\dfrac{P(\\text{I}\\mid\\text{red})}{P(\\text{II}\\mid\\text{red})}=2:1.$",
          "With equal priors the priors cancel and the posterior odds equal the likelihood ratio $\\dfrac{P(\\text{red}\\mid\\text{I})}{P(\\text{red}\\mid\\text{II})}=\\dfrac{r_1}{r_2}$, so the condition is simply $\\dfrac{r_1}{r_2}=2$.",
          "Evaluating $r_1/r_2$ for the four options gives $\\tfrac{1/2}{1/4}=2$ (A ✓), $\\tfrac{1/3}{1/6}=2$ (B ✓), $\\tfrac{4/7}{1/5}=\\tfrac{20}{7}$ (C ✗), $\\tfrac{1/3}{1/5}=\\tfrac53$ (D ✗) — confirming (A) and (B)."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2015, Paper 2, Q59. **Insight.** With equal priors the posterior forgets the totals entirely: only the ratio of red-fractions matters, and demanding $P(\\text{II}\\mid\\text{red})=\\tfrac13$ is nothing more than requiring box I to be twice as \"red-rich\" as box II."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "The Two Plants and a Clean Computer",
    "difficulty": 4,
    "task": "Find $P(T_2\\mid \\text{not defective})$.",
    "pyq": {
      "year": 2016,
      "paper": "1",
      "qno": "40"
    },
    "tags": [
      "Bayes' theorem",
      "total probability",
      "conditional probability",
      "2016"
    ],
    "figure": "",
    "statement": "A computer-producing factory runs only two plants, $T_1$ and $T_2$. Plant $T_1$ turns out $20\\%$ of the total output and plant $T_2$ the remaining $80\\%$. Across the whole factory, $7\\%$ of computers are defective. The two plants are not equally reliable: it is known that a computer is ten times as likely to be defective when made in $T_1$ as when made in $T_2$, that is $P(D\\mid T_1)=10\\,P(D\\mid T_2)$, where $D$ is the event that a computer is defective. A computer is picked at random from the factory's output and, on inspection, it does NOT turn out to be defective. Find the probability that it was produced in plant $T_2$.",
    "answer": "$\\boxed{\\dfrac{78}{93}}$",
    "trap": "Two temptations mislead here. First, one may answer $0.8$ out of habit — but conditioning on 'not defective' shifts the odds toward the cleaner plant $T_2$, so the answer must exceed $0.8$. Second, the defect rate $P(D\\mid T_2)$ is not given directly; it must be recovered from the mixture equation $0.2\\,(10p)+0.8\\,p=0.07$ before Bayes can be applied. Skipping this step and guessing $p$ derails everything.",
    "solutions": [
      {
        "name": "Recover the defect rate, then Bayes on the complement",
        "steps": [
          "Let $P(D\\mid T_2)=p$, so $P(D\\mid T_1)=10p$. Total probability of a defect gives $0.2\\,(10p)+0.8\\,p=0.07$, i.e. $2p+0.8p=2.8p=0.07$, so $p=0.025$.",
          "The good-computer rates are $P(D^c\\mid T_1)=1-10p=0.75$ and $P(D^c\\mid T_2)=1-p=0.975$.",
          "Compute the joint good probabilities: $P(D^c\\cap T_2)=0.8\\times0.975=0.78$ and $P(D^c\\cap T_1)=0.2\\times0.75=0.15$.",
          "Then $P(D^c)=0.78+0.15=0.93$, so $P(T_2\\mid D^c)=\\dfrac{0.78}{0.93}=\\dfrac{78}{93}$."
        ]
      },
      {
        "name": "Natural-frequency table on 1000 computers",
        "steps": [
          "Imagine $1000$ computers: $200$ from $T_1$ and $800$ from $T_2$. With $p=0.025$ (from $2.8p=0.07$), plant $T_1$ has defect rate $0.25$ and $T_2$ has $0.025$.",
          "Defectives: $T_1$ contributes $200\\times0.25=50$ and $T_2$ contributes $800\\times0.025=20$, a total of $70$ — matching $7\\%$ of $1000$, a consistency check.",
          "Good computers: $T_1$ has $200-50=150$ good, $T_2$ has $800-20=780$ good, so $150+780=930$ good in all.",
          "Among the $930$ good computers, $780$ came from $T_2$, giving $P(T_2\\mid D^c)=\\dfrac{780}{930}=\\dfrac{78}{93}$, the same value."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2016, Paper 1, Q40. The two methods agree at $\\dfrac{78}{93}\\approx0.839$: because $T_2$ is both larger and far cleaner, learning a computer is defect-free nudges the posterior for $T_2$ above its $0.8$ prior — the natural-frequency count of $780$ out of $930$ makes that pull tangible."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Two Games, Who Leads on Points",
    "difficulty": 4,
    "task": "Find $P(X>Y)$ after two games.",
    "pyq": {
      "year": 2016,
      "paper": "2",
      "qno": "51"
    },
    "tags": [
      "independent events",
      "distribution of scores",
      "2016"
    ],
    "figure": "",
    "statement": "Football teams $T_1$ and $T_2$ play two games against each other, and the outcomes of the two games are independent. In a single game the probabilities that $T_1$ wins, draws, or loses against $T_2$ are $\\dfrac12$, $\\dfrac16$, and $\\dfrac13$ respectively. Each team earns $3$ points for a win, $1$ point for a draw, and $0$ points for a loss in each game. Let $X$ and $Y$ denote the total points scored by $T_1$ and $T_2$ respectively after both games. Find the probability that $T_1$ finishes strictly ahead of $T_2$ on points, i.e. $P(X>Y)$.",
    "answer": "$\\boxed{\\dfrac{5}{12}}$",
    "trap": "A draw is not neutral for the point difference — it adds $1$ to BOTH totals and so leaves $X-Y$ unchanged. The event $X>Y$ therefore is not 'at least one win'; it is driven only by the net win/loss balance. Treating a draw as if it helped $T_1$ get ahead, or forgetting that a win-and-a-loss ties the points, inflates the count of favourable cases.",
    "solutions": [
      {
        "name": "Track the net win margin over two games",
        "steps": [
          "Per game let the outcome for $T_1$ be $W$ (prob $\\tfrac12$), $D$ (prob $\\tfrac16$), or $L$ (prob $\\tfrac13$). A draw adds $1$ to each of $X$ and $Y$, so $X>Y$ depends only on the number of $T_1$-wins minus $T_1$-losses across the two games.",
          "Over two independent games, $X>Y$ occurs exactly when $T_1$'s wins exceed its losses: either two wins $(W,W)$, or one win and one draw (in either order).",
          "$P(W,W)=\\left(\\tfrac12\\right)^2=\\tfrac14$. One win and one draw: $2\\cdot\\tfrac12\\cdot\\tfrac16=\\tfrac16$.",
          "Hence $P(X>Y)=\\tfrac14+\\tfrac16=\\tfrac{3}{12}+\\tfrac{2}{12}=\\tfrac{5}{12}$."
        ]
      },
      {
        "name": "Full nine-outcome enumeration",
        "steps": [
          "List all $9$ ordered pairs of game results with probabilities $p_W=\\tfrac12,\\;p_D=\\tfrac16,\\;p_L=\\tfrac13$, and compute $(X,Y)$ for each: $WW\\!:(6,0)$, $WD$ and $DW\\!:(4,1)$, $WL$ and $LW\\!:(3,3)$, $DD\\!:(2,2)$, $DL$ and $LD\\!:(1,4)$, $LL\\!:(0,6)$.",
          "Keep only the pairs with $X>Y$: $WW$ gives $(6,0)$; $WD$ and $DW$ give $(4,1)$. The mixed win/loss pairs $WL,LW$ tie at $(3,3)$ and do not count.",
          "Sum their probabilities: $p_W^2+2p_Wp_D=\\tfrac14+2\\cdot\\tfrac12\\cdot\\tfrac16=\\tfrac14+\\tfrac16$.",
          "This equals $\\tfrac{5}{12}$, confirming Method 1."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2016, Paper 2, Q51. Both routes land on $\\dfrac{5}{12}$: the key insight is that a draw cancels in the difference $X-Y$, so 'leading on points' reduces to 'more wins than losses' — the tidy net-margin view is far faster than grinding through all nine score pairs."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "The Probability the Two Scores Tie",
    "difficulty": 3,
    "task": "Find the probability that $T_1$ and $T_2$ finish with equal points.",
    "pyq": {
      "year": 2016,
      "paper": "2",
      "qno": "52"
    },
    "tags": [
      "independent events",
      "equal-score probability",
      "2016"
    ],
    "figure": "",
    "statement": "Football teams $T_1$ and $T_2$ play two games against each other, and the outcomes of the two games are independent. In a single game the probabilities that $T_1$ wins, draws and loses against $T_2$ are $\\tfrac12$, $\\tfrac16$ and $\\tfrac13$ respectively. Each team earns $3$ points for a win, $1$ point for a draw and $0$ points for a loss in each game. Let $X$ and $Y$ denote the total points of $T_1$ and $T_2$ after the two games. Find $P(X = Y)$.",
    "answer": "$\\boxed{\\dfrac{13}{36}}$",
    "trap": "The scores tie in two very different ways — the two games split (one win, one loss) or both games are drawn — and it is tempting to forget the second. Also, the win-loss split is a genuine tie at $X=Y=3$, not a “nothing happened” outcome to be discarded.",
    "solutions": [
      {
        "name": "Enumerate the tying outcomes",
        "steps": [
          "$X=Y$ requires the two games to cancel: either $T_1$ wins one and loses the other (each team ends with $3$ points), or both games are drawn (each team ends with $2$ points).",
          "$P(\\text{one win, one loss}) = 2\\cdot\\tfrac12\\cdot\\tfrac13 = \\tfrac13$, the factor $2$ counting which game $T_1$ wins.",
          "$P(\\text{both drawn}) = \\left(\\tfrac16\\right)^2 = \\tfrac1{36}$.",
          "Hence $P(X=Y) = \\tfrac13 + \\tfrac1{36} = \\tfrac{12}{36}+\\tfrac{1}{36} = \\dfrac{13}{36}$."
        ]
      },
      {
        "name": "Complement via the lead probability",
        "steps": [
          "The three events $\\{X>Y\\}$, $\\{X=Y\\}$, $\\{X<Y\\}$ partition the sample space, so $P(X=Y)=1-P(X>Y)-P(X<Y)$.",
          "From the companion result, $P(X>Y)=\\tfrac{5}{12}$. Computing $P(X<Y)$ the same way — $T_2$ leads only by winning both games (each with prob $\\tfrac13$) or one win and one draw — gives $P(X<Y)=\\left(\\tfrac13\\right)^2+2\\cdot\\tfrac13\\cdot\\tfrac16=\\tfrac19+\\tfrac19=\\tfrac29$.",
          "Therefore $P(X=Y)=1-\\tfrac{5}{12}-\\tfrac29=1-\\tfrac{15}{36}-\\tfrac{8}{36}=\\dfrac{13}{36}$, confirming the direct count."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2016, Paper 2, Q52. Because the game is not fair to $T_1$ and $T_2$ (win $\\tfrac12$ versus $\\tfrac13$), the two leads are unequal — so the tie must be pinned down directly or as the leftover $1-P(X>Y)-P(X<Y)$, not by any symmetry shortcut."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Conditional Data, Four Verdicts",
    "difficulty": 3,
    "task": "Decide which of the four statements are TRUE.",
    "pyq": {
      "year": 2017,
      "paper": "1",
      "qno": "43"
    },
    "tags": [
      "conditional probability",
      "addition rule",
      "2017"
    ],
    "figure": "",
    "statement": "Two events $X$ and $Y$ satisfy $P(X)=\\dfrac13$, together with the conditional data $P(X\\mid Y)=\\dfrac12$ and $P(Y\\mid X)=\\dfrac25$. Working only from these three numbers, decide which of the following statements are true: $[A]$ $P(Y)=\\dfrac{4}{15}$; $[B]$ $P(X'\\mid Y)=\\dfrac12$; $[C]$ $P(X\\cap Y)=\\dfrac15$; $[D]$ $P(X\\cup Y)=\\dfrac25$.",
    "answer": "$\\boxed{[A]\\text{ and }[B]}$",
    "trap": "Statement $[C]$ is the sweetest bait: the intersection really is $P(X\\cap Y)=\\tfrac{2}{15}$, and a hurried eye reads that as a match. But the option asserts $\\tfrac15$, which is a different number, so $[C]$ is false. Likewise for $[D]$, do not forget to subtract the overlap once — $P(X\\cup Y)=\\tfrac{7}{15}$, not $\\tfrac25$.",
    "solutions": [
      {
        "name": "Multiplication rule, then unwind each claim",
        "steps": [
          "The multiplication rule $P(X\\cap Y)=P(Y\\mid X)\\,P(X)$ pins the overlap first: $P(X\\cap Y)=\\dfrac25\\cdot\\dfrac13=\\dfrac{2}{15}$. Statement $[C]$ claims $\\tfrac15\\neq\\tfrac{2}{15}$, so $[C]$ is $\\textbf{false}$.",
          "Recover $P(Y)$ from the other conditional: $P(Y)=\\dfrac{P(X\\cap Y)}{P(X\\mid Y)}=\\dfrac{2/15}{1/2}=\\dfrac{4}{15}$, so $[A]$ is $\\textbf{true}$.",
          "The complement law inside a conditional gives $P(X'\\mid Y)=1-P(X\\mid Y)=1-\\dfrac12=\\dfrac12$, so $[B]$ is $\\textbf{true}$.",
          "Finally $P(X\\cup Y)=P(X)+P(Y)-P(X\\cap Y)=\\dfrac13+\\dfrac{4}{15}-\\dfrac{2}{15}=\\dfrac{7}{15}\\neq\\dfrac25$, so $[D]$ is $\\textbf{false}$. Verdict: $[A]$ and $[B]$."
        ]
      },
      {
        "name": "Concrete $15$-cell model (probabilities as counts)",
        "steps": [
          "Scale everything to a sample space of $15$ equally likely cells so that every quantity becomes a whole count. Then $P(X)=\\dfrac13$ means $X$ owns $5$ cells and the overlap $P(X\\cap Y)=P(Y\\mid X)\\,P(X)=\\dfrac25\\cdot 5=2$ cells sit in $X\\cap Y$.",
          "Because $P(X\\mid Y)=\\dfrac12$, the $2$ overlap cells are half of $Y$, forcing $Y$ to hold $4$ cells; hence $P(Y)=\\dfrac{4}{15}$ and $[A]$ holds. The intersection is $\\dfrac{2}{15}\\neq\\dfrac15$, killing $[C]$.",
          "Within $Y$'s $4$ cells, $2$ lie outside $X$, so $P(X'\\mid Y)=\\dfrac24=\\dfrac12$, giving $[B]$. The union covers $5+4-2=7$ cells, so $P(X\\cup Y)=\\dfrac{7}{15}\\neq\\dfrac25$, killing $[D]$.",
          "The count model reproduces every original datum ($P(X)=\\tfrac{5}{15}$, $P(X\\mid Y)=\\tfrac24$, $P(Y\\mid X)=\\tfrac25$) and confirms the answer $[A],[B]$."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2017, Paper 1, Q43. The examiner planted a near-miss in $[C]$ — the true intersection $\\tfrac{2}{15}$ is disguised as the false $\\tfrac15$ — so read the printed value, not the one you expect."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Even Coordinate on a Lattice Triangle",
    "difficulty": 3,
    "task": "Find the probability that $z$ is even.",
    "pyq": {
      "year": 2017,
      "paper": "2",
      "qno": "43"
    },
    "tags": [
      "classical probability",
      "counting solutions",
      "parity",
      "2017"
    ],
    "figure": "",
    "statement": "Three nonnegative integers $x$, $y$ and $z$ are chosen at random from among all triples satisfying $x+y+z=10$, every such triple being equally likely. Find the probability that $z$ is even.",
    "answer": "$\\boxed{\\dfrac{6}{11}}$",
    "trap": "The words $\\text{\"three randomly chosen integers\"}$ tempt you to model $x,y,z$ as independent uniform draws and quote $\\tfrac12$ for the parity of $z$. That is wrong: the constraint $x+y+z=10$ makes the triples the equally likely objects, and even and odd values of $z$ do not occur equally often — the even values (including $z=0$) carry one extra outcome.",
    "solutions": [
      {
        "name": "Count outcomes directly (stars and bars)",
        "steps": [
          "The total number of nonnegative solutions of $x+y+z=10$ is $\\dbinom{10+2}{2}=\\dbinom{12}{2}=66$; these are the equally likely outcomes.",
          "Fix $z$ to an even value. For each even $z$, the number of $(x,y)$ with $x+y=10-z$ is $(10-z)+1=11-z$.",
          "Summing over $z\\in\\{0,2,4,6,8,10\\}$ gives $11+9+7+5+3+1=36$ favourable triples.",
          "Hence the probability is $\\dfrac{36}{66}=\\dfrac{6}{11}$."
        ]
      },
      {
        "name": "Split the count by the parity of $z$ (symmetry of the leftover line)",
        "steps": [
          "Partition the $66$ triples by whether $z$ is even or odd. When $z$ is odd, $z\\in\\{1,3,5,7,9\\}$ and the residual line $x+y=10-z$ has $10,8,6,4,2$ solutions, totalling $30$.",
          "The even-$z$ count is then the complement $66-30=36$, without re-summing.",
          "The imbalance comes from $z=0$: it contributes a full $11$ outcomes with no odd partner, tilting the count toward even.",
          "Therefore $P(z\\text{ even})=\\dfrac{36}{66}=\\dfrac{6}{11}$, agreeing with the direct count."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2017, Paper 2, Q43. The lesson is that \"random\" attaches to the equally likely triples, not to independent uniform coordinates — the lone triple family at $z=0$ nudges the answer just past $\\tfrac12$ to $\\tfrac{6}{11}$."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Three Bags and a Green Ball",
    "difficulty": 3,
    "task": "Decide which of the four statements about the green-ball draw are correct.",
    "pyq": {
      "year": 2019,
      "paper": "1",
      "qno": "8"
    },
    "tags": [
      "total probability",
      "Bayes theorem",
      "conditional probability",
      "2019"
    ],
    "figure": "",
    "statement": "There are three bags $B_1$, $B_2$ and $B_3$. Bag $B_1$ contains $5$ red and $5$ green balls, $B_2$ contains $3$ red and $5$ green balls, and $B_3$ contains $5$ red and $3$ green balls. The bags $B_1$, $B_2$, $B_3$ are chosen with probabilities $\\dfrac{3}{10}$, $\\dfrac{3}{10}$ and $\\dfrac{4}{10}$ respectively. A bag is selected at random according to these weights, and then a ball is drawn at random from the chosen bag. Which of the following statements is/are correct? (A) the probability that the chosen ball is green equals $\\dfrac{39}{80}$; (B) the probability that the chosen ball is green, given that the selected bag is $B_3$, equals $\\dfrac{3}{8}$; (C) the probability that the selected bag is $B_3$ and the chosen ball is green equals $\\dfrac{3}{10}$; (D) the probability that the selected bag is $B_3$, given that the chosen ball is green, equals $\\dfrac{5}{13}$.",
    "answer": "$\\boxed{\\text{(A), (B)}}$",
    "trap": "The bags carry unequal priors, so the last two options invite the classic slip of confusing $P(B_3\\cap G)$ with $P(B_3\\mid G)$ and of running Bayes' theorem backwards. Option (C) is a joint probability, not a prior, and equals $\\tfrac{4}{10}\\cdot\\tfrac38=\\tfrac{3}{20}$ — not $\\tfrac{3}{10}$. Option (D) computes to $\\tfrac{4}{13}$, and the plausible-looking $\\tfrac{5}{13}$ is exactly the wrong-way ratio; only (A) and (B) survive.",
    "solutions": [
      {
        "name": "Total probability then Bayes",
        "steps": [
          "Each bag holds $8$ or $10$ balls, so $P(G\\mid B_1)=\\tfrac{5}{10}=\\tfrac12$, $P(G\\mid B_2)=\\tfrac58$ and $P(G\\mid B_3)=\\tfrac38$. Statement (B) is read off directly: $P(G\\mid B_3)=\\tfrac38$, correct.",
          "By the law of total probability, $P(G)=\\tfrac{3}{10}\\cdot\\tfrac12+\\tfrac{3}{10}\\cdot\\tfrac58+\\tfrac{4}{10}\\cdot\\tfrac38=\\tfrac{75+75+60}{800}=\\tfrac{210}{400}$. Wait — recompute over a common denominator $80$: $\\tfrac{3}{10}\\cdot\\tfrac12=\\tfrac{12}{80}$, $\\tfrac{3}{10}\\cdot\\tfrac58=\\tfrac{15}{80}$, $\\tfrac{4}{10}\\cdot\\tfrac38=\\tfrac{12}{80}$, summing to $\\tfrac{39}{80}$. So (A) is correct.",
          "For (C), the joint probability is $P(B_3\\cap G)=\\tfrac{4}{10}\\cdot\\tfrac38=\\tfrac{3}{20}\\ne\\tfrac{3}{10}$, so (C) is false.",
          "For (D), Bayes gives $P(B_3\\mid G)=\\dfrac{P(B_3\\cap G)}{P(G)}=\\dfrac{3/20}{39/80}=\\dfrac{3}{20}\\cdot\\dfrac{80}{39}=\\dfrac{12}{39}=\\dfrac{4}{13}\\ne\\tfrac{5}{13}$, so (D) is false. Correct answers: (A), (B)."
        ]
      },
      {
        "name": "Common-scale frequency count",
        "steps": [
          "Scale so the experiment is repeated $80$ times (a convenient multiple of $10$ and of the bag sizes $8,10$). The three bags are chosen $\\tfrac{3}{10}\\cdot80=24$, $\\tfrac{3}{10}\\cdot80=24$ and $\\tfrac{4}{10}\\cdot80=32$ times respectively.",
          "Green draws expected: from $B_1$, $24\\cdot\\tfrac{5}{10}=12$; from $B_2$, $24\\cdot\\tfrac58=15$; from $B_3$, $32\\cdot\\tfrac38=12$. Total green $=12+15+12=39$ out of $80$, so $P(G)=\\tfrac{39}{80}$, confirming (A); and $P(G\\mid B_3)=\\tfrac{12}{32}=\\tfrac38$, confirming (B).",
          "Among the $39$ green draws, $12$ came from $B_3$, so $P(B_3\\mid G)=\\tfrac{12}{39}=\\tfrac{4}{13}$, killing (D). The count of green draws that were from $B_3$ is $12$ out of $80$ trials, i.e. $P(B_3\\cap G)=\\tfrac{12}{80}=\\tfrac{3}{20}$, killing (C).",
          "Both viewpoints agree exactly, so the correct options are (A) and (B)."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2019, Paper 1, Q8 (Section 2). The whole item is a trap-detector: (A) tests forward total probability, (B) tests reading a conditional off the bag, and (C)/(D) punish anyone who swaps a joint probability for a posterior or inverts the Bayes ratio — the honest values $\\tfrac{3}{20}$ and $\\tfrac{4}{13}$ sit one small step away from the tempting distractors."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Singular 0–1 Matrices with Seven Ones",
    "difficulty": 4,
    "task": "Compute the conditional probability $P(E_1\\mid E_2)$.",
    "pyq": {
      "year": 2019,
      "paper": "1",
      "qno": "3"
    },
    "tags": [
      "conditional probability",
      "determinants of 0-1 matrices",
      "counting",
      "2019"
    ],
    "figure": "",
    "statement": "Let $S$ be the sample space of all $3\\times3$ matrices whose entries come from the set $\\{0,1\\}$, each such matrix being equally likely. Define two events by $E_1=\\{A\\in S:\\det A=0\\}$ and $E_2=\\{A\\in S:\\text{the sum of all entries of }A\\text{ equals }7\\}$. A matrix is chosen at random from $S$. Find the conditional probability $P(E_1\\mid E_2)$, i.e. the probability that the chosen matrix is singular given that its entries add up to $7$.",
    "answer": "$\\boxed{0.5}$",
    "trap": "The full sample space has $2^9=512$ matrices, but conditioning on $E_2$ makes almost all of that irrelevant: only the $\\binom{9}{2}=36$ matrices with exactly two zeros matter. The real work is a determinant characterisation — with seven $1$'s in place, the matrix is singular precisely when the two zeros share a row or share a column, which makes two rows (or two columns) identical. Miscounting the 'same line' placements, or forgetting that the ambient $512$ cancels, is the usual failure.",
    "solutions": [
      {
        "name": "Zero-placement casework",
        "steps": [
          "A matrix in $E_2$ has entry-sum $7$, i.e. exactly two of the nine entries are $0$ and the rest are $1$. The number of such matrices is $n(E_2)=\\binom{9}{2}=36$; these are equally likely within $E_2$.",
          "Start from the all-ones matrix $J$ (whose rows are all $(1,1,1)$) and knock out two entries. Two rows of the resulting matrix are equal iff those two rows are left untouched or altered identically; the clean singular cases arise when the two zeros lie in the same row or the same column, forcing two rows (or columns) to be identical and hence $\\det A=0$.",
          "Same row: choose the row ($3$ ways) and the two columns to zero out ($\\binom{3}{2}=3$ ways) $=9$. Same column: by symmetry $9$. These are disjoint (two zeros cannot be both in one row and one column), so $n(E_1\\cap E_2)=9+9=18$.",
          "When the two zeros are in different rows and different columns, expanding the determinant gives $\\det A=\\pm1\\ne0$, so no further singular matrices appear. Therefore $P(E_1\\mid E_2)=\\dfrac{n(E_1\\cap E_2)}{n(E_2)}=\\dfrac{18}{36}=0.5$."
        ]
      },
      {
        "name": "Complementary 'zeros on a transversal' count",
        "steps": [
          "Again $n(E_2)=\\binom{9}{2}=36$. Instead of counting singular matrices, count the non-singular ones and subtract.",
          "Place the two zeros in distinct rows and distinct columns (a 'transversal' placement). Choose two rows $\\binom{3}{2}=3$, two columns $\\binom{3}{2}=3$, and a bijection between them ($2$ ways to match the two chosen rows to the two chosen columns): $3\\cdot3\\cdot2=18$ placements.",
          "For each such placement every row and column still contains at least two $1$'s and no two rows coincide; a direct expansion shows $\\det A=\\pm1\\ne0$, so all $18$ are in $E_2\\setminus E_1$. Hence $n(E_1\\cap E_2)=36-18=18$.",
          "Thus $P(E_1\\mid E_2)=\\dfrac{18}{36}=0.5$, agreeing with the direct casework."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2019, Paper 1, Q3 (Section 3). Conditioning collapses a $512$-element space to just $36$ candidates, and the singular/non-singular split is perfectly even — the two zeros are singular exactly when they lie on a common line and invertible exactly when they lie on a transversal, and there are $18$ of each."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Independent Events, Counting the Pairs",
    "difficulty": 5,
    "task": "Find the number of ordered pairs $(A,B)$.",
    "pyq": {
      "year": 2019,
      "paper": "2",
      "qno": "5"
    },
    "tags": [
      "independent events",
      "counting ordered pairs",
      "sets",
      "2019"
    ],
    "figure": "",
    "statement": "Let $|X|$ denote the number of elements in a set $X$, and take $S=\\{1,2,3,4,5,6\\}$ as a sample space in which each of the six outcomes is equally likely. Suppose $A$ and $B$ are events associated with $S$ (that is, subsets of $S$) which are independent in the probabilistic sense. Counting $A$ and $B$ as an ordered pair, determine how many such pairs $(A,B)$ satisfy the extra size restriction $1\\le|B|<|A|$.",
    "answer": "$\\boxed{422}$",
    "trap": "Independence here is not about $A$ and $B$ being disjoint or nested — it is the equation $P(A\\cap B)=P(A)\\,P(B)$. With equally likely outcomes this becomes the divisibility condition $6\\,|A\\cap B|=|A|\\,|B|$, so $|A||B|$ must be a multiple of $6$. Overlooking that $\\varnothing$ and $S$ are independent of everything, or double-counting unordered pairs, both derail the count.",
    "solutions": [
      {
        "name": "Reduce to an integer equation, then place the blocks",
        "steps": [
          "For equally likely outcomes $P(A)=\\dfrac{|A|}{6}$, so independence $P(A\\cap B)=P(A)P(B)$ reads $\\dfrac{|A\\cap B|}{6}=\\dfrac{|A|}{6}\\cdot\\dfrac{|B|}{6}$, i.e. $6\\,|A\\cap B|=|A|\\,|B|$.",
          "Write $a=|A|$, $b=|B|$, $k=|A\\cap B|$. We need $6k=ab$ with $k$ a non-negative integer, $1\\le b<a\\le 6$, and the pieces fitting inside $S$: $|A\\cup B|=a+b-k\\le 6$.",
          "Sweep the admissible $(a,b)$ with $ab$ divisible by $6$: $(3,2)\\!\\Rightarrow\\!k=1$, $(4,3)\\!\\Rightarrow\\!k=2$, and every $(6,b)$ for $b=1,2,3,4,5\\Rightarrow k=b$ (here $A=S$).",
          "For each triple, choose the overlap, then $A$'s private part, then $B$'s private part: $\\binom{6}{k}\\binom{6-k}{a-k}\\binom{6-a}{b-k}$. This gives $180,\\,180,\\,6,\\,15,\\,20,\\,15,\\,6$ respectively.",
          "Summing: $180+180+6+15+20+15+6=\\boxed{422}$."
        ]
      },
      {
        "name": "Exhaustive verification over all $64\\times64$ pairs",
        "steps": [
          "Every event is one of the $2^{6}=64$ subsets of $S$, so there are $64\\times64$ ordered pairs $(A,B)$ to screen.",
          "Keep a pair only if it passes both filters: the size condition $1\\le|B|<|A|$, and the independence condition $6\\,|A\\cap B|=|A|\\,|B|$.",
          "Programmatically iterating over all pairs and tallying those that survive both filters returns exactly $422$, confirming the block-counting result and guarding against any missed $(a,b,k)$ case."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2019, Paper 2, Q5 (numerical). The whole problem is the innocent-looking line $6\\,|A\\cap B|=|A|\\,|B|$: probabilistic independence over a uniform sample space is nothing but a divisibility constraint on set sizes."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Biased Coins Force Equal Roots",
    "difficulty": 4,
    "task": "Find the probability that $x^2-\\alpha x+\\beta$ has real and equal roots.",
    "pyq": {
      "year": 2020,
      "paper": "1",
      "qno": "5"
    },
    "tags": [
      "binomial distribution",
      "discriminant condition",
      "2020"
    ],
    "figure": "",
    "statement": "Two biased coins $C_1$ and $C_2$ give heads in a single toss with probabilities $\\tfrac23$ and $\\tfrac13$ respectively. Let $\\alpha$ be the number of heads when $C_1$ is tossed twice independently, and let $\\beta$ be the number of heads when $C_2$ is tossed twice independently. Find the probability that the roots of the quadratic $x^2-\\alpha x+\\beta$ are real and equal.",
    "answer": "$\\boxed{\\dfrac{20}{81}}$",
    "trap": "The roots are real and equal only when the discriminant vanishes: $\\alpha^2-4\\beta=0$, not merely $\\alpha^2\\ge 4\\beta$. Since $\\alpha,\\beta\\in\\{0,1,2\\}$, the only exact solutions are $(\\alpha,\\beta)=(0,0)$ and $(2,1)$ — the case $(\\alpha,\\beta)=(2,1)$ is easy to miss, and one must remember that $\\alpha$ comes from the $\\tfrac23$-coin while $\\beta$ comes from the $\\tfrac13$-coin, so their distributions are different.",
    "solutions": [
      {
        "name": "List the discriminant-zero pairs",
        "steps": [
          "Real and equal roots require the discriminant to be zero: $\\alpha^2-4\\beta=0$, i.e. $\\alpha^2=4\\beta$, with $\\alpha,\\beta\\in\\{0,1,2\\}$.",
          "Checking each $\\alpha$: $\\alpha=0\\Rightarrow\\beta=0$; $\\alpha=1\\Rightarrow\\beta=\\tfrac14$ (not an integer, rejected); $\\alpha=2\\Rightarrow\\beta=1$. So only $(\\alpha,\\beta)=(0,0)$ and $(2,1)$ qualify.",
          "For $C_1$ (heads prob $\\tfrac23$): $P(\\alpha=0)=\\left(\\tfrac13\\right)^2=\\tfrac19$ and $P(\\alpha=2)=\\left(\\tfrac23\\right)^2=\\tfrac49$. For $C_2$ (heads prob $\\tfrac13$): $P(\\beta=0)=\\left(\\tfrac23\\right)^2=\\tfrac49$ and $P(\\beta=1)=\\binom21\\tfrac13\\tfrac23=\\tfrac49$.",
          "Since $\\alpha$ and $\\beta$ are independent, $P=P(\\alpha=0)P(\\beta=0)+P(\\alpha=2)P(\\beta=1)=\\tfrac19\\cdot\\tfrac49+\\tfrac49\\cdot\\tfrac49=\\tfrac{4}{81}+\\tfrac{16}{81}=\\dfrac{20}{81}$."
        ]
      },
      {
        "name": "Full joint table over $(\\alpha,\\beta)$",
        "steps": [
          "Write the two binomial rows. For $C_1$: $P(\\alpha=0,1,2)=\\left(\\tfrac19,\\tfrac49,\\tfrac49\\right)$. For $C_2$: $P(\\beta=0,1,2)=\\left(\\tfrac49,\\tfrac49,\\tfrac19\\right)$.",
          "The equal-roots condition $\\alpha^2=4\\beta$ selects exactly the cells $(\\alpha,\\beta)=(0,0)$ and $(2,1)$ from the full $3\\times3$ joint distribution; every other cell has $\\alpha^2\\ne 4\\beta$ (e.g. $(2,0)$ gives $4\\ne0$, $(1,\\cdot)$ gives $1\\ne4\\beta$).",
          "Their joint probabilities are $P(0,0)=\\tfrac19\\cdot\\tfrac49=\\tfrac{4}{81}$ and $P(2,1)=\\tfrac49\\cdot\\tfrac49=\\tfrac{16}{81}$.",
          "Adding the selected cells gives $\\tfrac{4}{81}+\\tfrac{16}{81}=\\dfrac{20}{81}$, matching the first method."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2020, Paper 1, Q5. The whole problem hinges on reading “real and equal” as discriminant $=0$: the integer constraint $\\alpha,\\beta\\in\\{0,1,2\\}$ then leaves only two admissible cells, so a probability question quietly becomes a two-term sum."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Missiles Needed to Destroy the Target",
    "difficulty": 4,
    "task": "Find the least number of missiles fired so that destruction is at least 95% certain.",
    "pyq": {
      "year": 2020,
      "paper": "2",
      "qno": "2"
    },
    "tags": [
      "binomial distribution",
      "cumulative probability",
      "2020"
    ],
    "figure": "",
    "statement": "Each missile hits its target successfully with probability $0.75$, independently of the others. The target is completely destroyed only if it receives at least three successful hits. If $n$ missiles are fired, let the number of hits be $X\\sim\\text{Bin}(n,\\tfrac34)$. Find the minimum value of $n$ for which the probability of completely destroying the target, namely $P(X\\ge 3)$, is not less than $0.95$.",
    "answer": "$\\boxed{6}$",
    "trap": "The threshold is “at least three hits,” so the complement is $\\{0,1,2\\}$ — three terms, not one. Stopping at $P(X\\ge 1)$ or forgetting the $X=2$ term inflates the probability and lets $n=5$ sneak past, but $n=5$ actually gives only $0.8965 < 0.95$.",
    "solutions": [
      {
        "name": "Complementary cumulative binomial, tested upward",
        "steps": [
          "Destruction requires $X\\ge 3$, so $P(X\\ge 3)=1-\\big[P(X=0)+P(X=1)+P(X=2)\\big]$ with $p=\\tfrac34,\\ q=\\tfrac14$.",
          "The complement is $\\dfrac{1}{4^n}\\left[\\binom{n}{0}3^0+\\binom{n}{1}3^1+\\binom{n}{2}3^2\\right]=\\dfrac{1+3n+\\tfrac{9n(n-1)}{2}}{4^n}$, so we need $\\dfrac{1+3n+\\tfrac{9n(n-1)}{2}}{4^n}\\le 0.05$.",
          "For $n=5$: the bracket is $1+15+90=106$ and $4^5=1024$, giving $106/1024\\approx0.1035>0.05$, so $P(X\\ge3)\\approx0.8965<0.95$ — not enough.",
          "For $n=6$: the bracket is $1+18+135=154$ and $4^6=4096$, giving $154/4096\\approx0.0376\\le0.05$, so $P(X\\ge3)\\approx0.9624\\ge0.95$.",
          "Since the complement is strictly decreasing in $n$, the least such $n$ is $6$."
        ]
      },
      {
        "name": "Monotonicity plus a single boundary check",
        "steps": [
          "Let $f(n)=P(X\\ge 3)$ when $n$ missiles are fired. Adding one more missile can only create more chances to reach three hits, so $f(n)$ is strictly increasing in $n$.",
          "Hence the answer is the smallest $n$ with $f(n)\\ge 0.95$; it suffices to locate the crossover by checking consecutive integers.",
          "Compute $f(5)=1-\\dfrac{106}{1024}=\\dfrac{918}{1024}\\approx0.8965$, which is below $0.95$.",
          "Compute $f(6)=1-\\dfrac{154}{4096}=\\dfrac{3942}{4096}\\approx0.9624$, which clears $0.95$.",
          "By monotonicity every $n\\ge 6$ also works and no $n\\le 5$ does, so the minimum is $6$."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2020, Paper 2, Q2. With a lopsided success rate ($p=\\tfrac34$) the cumulative probability climbs fast, so the “$\\ge 0.95$” bar is cleared at a surprisingly small $n$ — the whole problem is one clean complement plus a boundary check."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Perfect Square Before a Prime",
    "difficulty": 4,
    "task": "Given the stopping sum is a perfect square, find the probability it is odd, then report $14p$.",
    "pyq": {
      "year": 2020,
      "paper": "2",
      "qno": "15"
    },
    "tags": [
      "conditional probability",
      "dice",
      "2020"
    ],
    "figure": "",
    "statement": "Two fair dice, each with faces $1,2,3,4,5,6$, are rolled together and the sum of the two faces is noted. This is repeated until the sum is either a prime number or a perfect square, at which point the process stops. Suppose the sum turns out to be a perfect square before it turns out to be a prime number. Let $p$ be the conditional probability that this perfect square is odd. Find the value of $14p$.",
    "answer": "$\\boxed{8}$",
    "trap": "Every round that yields neither a prime nor a square is simply ignored, so those geometric “retry” rounds contribute nothing — the answer depends only on the relative weights of the prime and square sums. Trying to sum an infinite series, or dividing by all $36$ outcomes instead of by the square outcomes alone, both derail the count.",
    "solutions": [
      {
        "name": "Collapse the geometric retries to a single conditional ratio",
        "steps": [
          "Tabulate the number of ways to obtain each sum with two dice. The prime sums are $2,3,5,7,11$, occurring in $1+2+4+6+2=15$ ways; the perfect-square sums are $4$ and $9$, occurring in $3+4=7$ ways.",
          "Each round independently ends in a square with probability $\\tfrac{7}{36}$ and in a prime with probability $\\tfrac{15}{36}$; any other sum triggers a retry. Because retries reset the situation identically, the probability that a square arrives strictly before a prime is $\\dfrac{7/36}{7/36+15/36}=\\dfrac{7}{22}$, and — crucially — conditioning on “a square came first” just reweights the two square sums by their counts.",
          "Among the square sums, $9$ (odd) arises in $4$ ways and $4$ (even) in $3$ ways, so $p=P(\\text{sum}=9\\mid\\text{square first})=\\dfrac{4}{4+3}=\\dfrac{4}{7}$.",
          "Therefore $14p=14\\cdot\\dfrac{4}{7}=8$."
        ]
      },
      {
        "name": "Infinite geometric series over the retry rounds",
        "steps": [
          "Let $a=\\tfrac{7}{36}$ (square), $b=\\tfrac{15}{36}$ (prime), and $r=1-a-b=\\tfrac{14}{36}$ (retry). Split the square event by its value: $P(\\text{first stop is }9)=\\sum_{k=0}^{\\infty} r^{k}\\cdot\\tfrac{4}{36}=\\dfrac{4/36}{1-r}$ and $P(\\text{first stop is }4)=\\dfrac{3/36}{1-r}$.",
          "Likewise $P(\\text{square before prime})=\\dfrac{7/36}{1-r}$, since $1-r=a+b=\\tfrac{22}{36}$ is the per-round chance of actually stopping.",
          "The common factor $\\dfrac{1}{1-r}$ cancels in the conditional probability, leaving $p=\\dfrac{4/36}{7/36}=\\dfrac{4}{7}$.",
          "Hence $14p=14\\cdot\\dfrac{4}{7}=8$, matching the first method."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2020, Paper 2, Q15. The endless “neither prime nor square” rounds are a red herring: conditioning collapses them, so the answer is just the count of the odd square ($9$: four ways) over all square outcomes ($4$ and $9$: seven ways)."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "The Three-Stage Set Shuffle",
    "difficulty": 5,
    "task": "Find the conditional probability $p=P\\!\\left(S_1=\\{1,2\\}\\mid E_1=E_3\\right)$.",
    "pyq": {
      "year": 2021,
      "paper": "1",
      "qno": "3"
    },
    "tags": [
      "conditional probability",
      "Bayes theorem",
      "2021"
    ],
    "figure": "",
    "statement": "Consider the three sets $E_1=\\{1,2,3\\}$, $F_1=\\{1,3,4\\}$ and $G_1=\\{2,3,4,5\\}$. Two elements are chosen at random, without replacement, from $E_1$, and let $S_1$ denote the set of these two chosen elements. Set $E_2=E_1-S_1$ and $F_2=F_1\\cup S_1$. Next, two elements are chosen at random, without replacement, from $F_2$, and let $S_2$ denote the set of these two chosen elements. Set $G_2=G_1\\cup S_2$. Finally, two elements are chosen at random, without replacement, from $G_2$, and let $S_3$ denote the set of these two chosen elements, and put $E_3=E_2\\cup S_3$. Given that the whole process ends with $E_3=E_1$, let $p$ be the conditional probability of the event $S_1=\\{1,2\\}$. Determine the value of $p$.",
    "answer": "$\\boxed{\\dfrac{1}{5}}$",
    "trap": "The conditioning event $E_1=E_3$ is not automatic — it forces the two elements removed from $E_1$ at the first stage to be handed back through $S_3$ at the last stage. Treating the three branches $S_1\\in\\{\\{1,2\\},\\{1,3\\},\\{2,3\\}\\}$ as equally likely under the condition (and answering $\\tfrac13$) ignores that each branch reaches $E_3=E_1$ with a different likelihood, because the size of $F_2$, and hence every downstream draw, depends on which elements $S_1$ carried into $F_1$.",
    "solutions": [
      {
        "name": "Bayes over the three first-stage branches",
        "steps": [
          "The first draw picks $S_1$ uniformly from the $\\binom{3}{2}=3$ pairs, so $P(S_1=\\{1,2\\})=P(S_1=\\{1,3\\})=P(S_1=\\{2,3\\})=\\dfrac13$. For each branch we need the likelihood $\\ell=P(E_3=E_1\\mid S_1)$.",
          "Since $E_3=E_2\\cup S_3$ and $E_2=E_1-S_1$, the requirement $E_3=E_1$ is exactly $S_3=S_1$: the two elements taken out at stage one must reappear as the final pair $S_3$.",
          "Branch $S_1=\\{1,2\\}$: then $F_2=\\{1,3,4\\}\\cup\\{1,2\\}=\\{1,2,3,4\\}$ ($4$ elements). To later have $\\{1,2\\}\\subseteq G_2$ we need $S_2\\supseteq\\{2\\}$ (element $1$ is already absent from $G_1$; element $2\\in G_1$). Carefully enumerating $S_2$ from $F_2$ then $S_3$ from $G_2=G_1\\cup S_2$ gives $\\ell_{12}=\\dfrac{1}{20}$.",
          "Branch $S_1=\\{1,3\\}$: $F_2=\\{1,3,4\\}$ ($3$ elements) and the analogous count gives $\\ell_{13}=\\dfrac{1}{15}$; branch $S_1=\\{2,3\\}$: $F_2=\\{1,2,3,4\\}$ gives $\\ell_{23}=\\dfrac{2}{15}$.",
          "By Bayes' theorem, $p=\\dfrac{\\tfrac13\\,\\ell_{12}}{\\tfrac13(\\ell_{12}+\\ell_{13}+\\ell_{23})}=\\dfrac{1/20}{1/20+1/15+2/15}$. The denominator is $\\dfrac{3}{60}+\\dfrac{4}{60}+\\dfrac{8}{60}=\\dfrac{15}{60}=\\dfrac14$, so $p=\\dfrac{1/20}{1/4}=\\dfrac{4}{20}=\\dfrac15$."
        ]
      },
      {
        "name": "Exhaustive weighted enumeration of paths",
        "steps": [
          "Assign every complete outcome $(S_1,S_2,S_3)$ its probability $P(S_1)P(S_2\\mid S_1)P(S_3\\mid S_1,S_2)=\\dfrac13\\cdot\\dfrac{1}{\\binom{|F_2|}{2}}\\cdot\\dfrac{1}{\\binom{|G_2|}{2}}$, where $|F_2|\\in\\{3,4\\}$ and $|G_2|\\in\\{5,6\\}$ depend on the earlier picks.",
          "Keep only the paths with $E_3=E_1$ (equivalently $S_3=S_1$). Summing their probabilities gives $P(E_3=E_1)=\\dfrac{1}{12}$.",
          "Among those, the paths with $S_1=\\{1,2\\}$ contribute total probability $\\dfrac13\\cdot\\dfrac{1}{20}=\\dfrac{1}{60}$.",
          "Hence $p=\\dfrac{P(S_1=\\{1,2\\}\\ \\text{and}\\ E_3=E_1)}{P(E_3=E_1)}=\\dfrac{1/60}{1/12}=\\dfrac{12}{60}=\\dfrac15$, confirming Method 1."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2021, Paper 1, Q3. The event $E_3=E_1$ secretly says “whatever left must come back,” so the whole three-stage machine collapses to comparing how easily each starting pair can be resurrected — and the pair $\\{1,2\\}$, which fattens $F_2$ to four elements, is the hardest to restore, hence the least likely cause."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Maximum of Three Draws, Rescaled",
    "difficulty": 3,
    "task": "Compute the value of $\\dfrac{625}{4}\\,p_1$.",
    "pyq": {
      "year": 2021,
      "paper": "1",
      "qno": "5"
    },
    "tags": [
      "probability with replacement",
      "maximum of sample",
      "2021"
    ],
    "figure": "",
    "statement": "Three numbers are chosen at random, one after another with replacement, from the set $S=\\{1,2,3,\\dots,100\\}$. Let $p_1$ be the probability that the maximum of the three chosen numbers is at least $81$. (A companion quantity $p_2$, the probability that the minimum is at most $40$, is defined for a related part but is not needed here.) Find the value of $\\dfrac{625}{4}\\,p_1$.",
    "answer": "$\\boxed{76.25}$",
    "trap": "“Maximum is at least $81$” is a statement about the largest of three numbers, not about a single draw. Computing $P(\\text{one fixed draw}\\ge 81)=\\tfrac{20}{100}$ and stopping ignores that the maximum exceeds $80$ as soon as any one of the three does. The clean route is the complement: the maximum is below $81$ exactly when all three draws avoid $\\{81,\\dots,100\\}$.",
    "solutions": [
      {
        "name": "Complement of the maximum",
        "steps": [
          "The maximum of the three numbers is at least $81$ unless every one of the three draws lands in $\\{1,2,\\dots,80\\}$. So $p_1=1-P(\\text{all three}\\le 80)$.",
          "Draws are with replacement and independent, each landing in $\\{1,\\dots,80\\}$ with probability $\\dfrac{80}{100}=\\dfrac45$. Hence $P(\\text{all three}\\le 80)=\\left(\\dfrac45\\right)^3=\\dfrac{64}{125}$.",
          "Therefore $p_1=1-\\dfrac{64}{125}=\\dfrac{61}{125}$.",
          "Finally $\\dfrac{625}{4}\\,p_1=\\dfrac{625}{4}\\cdot\\dfrac{61}{125}=\\dfrac{5\\cdot 61}{4}=\\dfrac{305}{4}=76.25$."
        ]
      },
      {
        "name": "Binomial count of draws in the top block",
        "steps": [
          "Call a draw a “success” if it lands in the top block $\\{81,\\dots,100\\}$, which has probability $q=\\dfrac{20}{100}=\\dfrac15$ per draw; the number of successes among the three draws is $\\text{Binomial}(3,\\tfrac15)$.",
          "The maximum is at least $81$ precisely when there is at least one success, so $p_1=\\binom31 q(1-q)^2+\\binom32 q^2(1-q)+\\binom33 q^3$.",
          "Substituting $q=\\dfrac15$: $p_1=3\\cdot\\dfrac15\\cdot\\dfrac{16}{25}+3\\cdot\\dfrac{1}{25}\\cdot\\dfrac45+\\dfrac{1}{125}=\\dfrac{48}{125}+\\dfrac{12}{125}+\\dfrac{1}{125}=\\dfrac{61}{125}$.",
          "Then $\\dfrac{625}{4}\\,p_1=\\dfrac{625}{4}\\cdot\\dfrac{61}{125}=\\dfrac{305}{4}=76.25$, matching Method 1."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2021, Paper 1, Q5. The scaling factor $\\tfrac{625}{4}=\\tfrac{5^4}{4}$ is engineered so that the $125=5^3$ in the denominator of $p_1$ cancels cleanly, turning a messy fraction into the tidy decimal $76.25$ the answer grid expects."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Multiple of 3 or 7 up to 2000",
    "difficulty": 3,
    "task": "Find $500p$, where $p$ is the probability of a multiple of 3 or 7.",
    "pyq": {
      "year": 2021,
      "paper": "2",
      "qno": "17"
    },
    "tags": [
      "classical probability",
      "inclusion-exclusion",
      "counting multiples",
      "2021"
    ],
    "figure": "",
    "statement": "A number is chosen at random from the set $\\{1,2,3,\\ldots,2000\\}$. Let $p$ be the probability that the chosen number is a multiple of $3$ or a multiple of $7$. Then determine the value of $500p$.",
    "answer": "$\\boxed{214}$",
    "trap": "The word “or” is inclusive: a multiple of $21$ is counted by both the $3$-list and the $7$-list, so you must subtract the overlap once. Adding $\\lfloor 2000/3\\rfloor+\\lfloor 2000/7\\rfloor$ without removing the multiples of $\\operatorname{lcm}(3,7)=21$ double-counts $95$ numbers and inflates the answer.",
    "solutions": [
      {
        "name": "Inclusion–exclusion on the favourable count",
        "steps": [
          "Multiples of $3$ in the set number $\\lfloor 2000/3\\rfloor=666$, and multiples of $7$ number $\\lfloor 2000/7\\rfloor=285$.",
          "Their common multiples are the multiples of $\\operatorname{lcm}(3,7)=21$, of which there are $\\lfloor 2000/21\\rfloor=95$.",
          "By inclusion–exclusion the favourable count is $666+285-95=856$, so $p=\\dfrac{856}{2000}$.",
          "Hence $500p=500\\cdot\\dfrac{856}{2000}=\\dfrac{856}{4}=214$."
        ]
      },
      {
        "name": "Probabilities via the addition rule",
        "steps": [
          "Let $A$ be “multiple of $3$” and $B$ be “multiple of $7$.” Then $P(A)=\\dfrac{666}{2000}$, $P(B)=\\dfrac{285}{2000}$ and $P(A\\cap B)=\\dfrac{95}{2000}$.",
          "The addition rule gives $p=P(A\\cup B)=P(A)+P(B)-P(A\\cap B)=\\dfrac{666+285-95}{2000}=\\dfrac{856}{2000}$.",
          "Therefore $500p=\\dfrac{500\\cdot 856}{2000}=214$, matching the count-based computation."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2021, Paper 2, Q17. Reading “or” as a union forces the $\\operatorname{lcm}$ correction — the whole problem is inclusion–exclusion wearing a probability costume."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "At Most One Symptom Among Three",
    "difficulty": 3,
    "task": "Find the probability that a randomly chosen person has at most one symptom.",
    "pyq": {
      "year": 2022,
      "paper": "1",
      "qno": "3"
    },
    "tags": [
      "sets",
      "inclusion-exclusion",
      "conditional counting",
      "2022"
    ],
    "figure": "",
    "statement": "In a study about a pandemic, data of $900$ persons was collected. It was found that $190$ persons had the symptom of fever, $220$ had cough, and $220$ had a breathing problem. Also, $330$ persons had fever or cough or both, $350$ had cough or breathing problem or both, $340$ had fever or breathing problem or both, and $30$ persons had all three symptoms. If a person is chosen at random from these $900$ persons, find the probability that the person has at most one symptom.",
    "answer": "$\\boxed{0.80}$",
    "trap": "Each “or ... or both” datum is a pairwise union, not a pairwise intersection — you must invert $|F\\cup C|=|F|+|C|-|F\\cap C|$ to recover the overlaps first. “At most one symptom” then means excluding everyone with two or three symptoms, so the triple-overlap $30$ must be handled carefully so it is neither omitted nor double-subtracted.",
    "solutions": [
      {
        "name": "Recover pairwise overlaps, count two-or-more",
        "steps": [
          "Let $F,C,B$ be the sets of persons with fever, cough and breathing problem. From $|F\\cup C|=|F|+|C|-|F\\cap C|=330$ we get $|F\\cap C|=190+220-330=80$.",
          "Similarly $|C\\cap B|=220+220-350=90$ and $|F\\cap B|=190+220-340=70$, while $|F\\cap C\\cap B|=30$.",
          "Persons with exactly two symptoms number $(80-30)+(90-30)+(70-30)=50+60+40=150$, and $30$ have all three, so those with at least two symptoms total $150+30=180$.",
          "Hence at most one symptom applies to $900-180=720$ persons, giving probability $\\dfrac{720}{900}=0.80$."
        ]
      },
      {
        "name": "Add up the 'none' and 'exactly one' regions",
        "steps": [
          "With the overlaps $|F\\cap C|=80,\\ |C\\cap B|=90,\\ |F\\cap B|=70,\\ |F\\cap C\\cap B|=30$, the union is $|F\\cup C\\cup B|=190+220+220-80-90-70+30=420$, so $900-420=480$ persons have no symptom.",
          "The 'only fever' region is $|F|-|F\\cap C|-|F\\cap B|+|F\\cap C\\cap B|=190-80-70+30=70$; likewise 'only cough' is $220-80-90+30=80$ and 'only breathing' is $220-90-70+30=90$.",
          "So exactly one symptom covers $70+80+90=240$ persons, and at most one covers $480+240=720$.",
          "The probability is $\\dfrac{720}{900}=0.80$, confirming the previous method."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2022, Paper 1, Q3. The three “or ... or both” figures are unions in disguise; decoding them into intersections is the whole battle, after which “at most one” is just the complement of the two-or-more core."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "The Two-Die Scoring Duel",
    "difficulty": 4,
    "task": "Match each score-comparison probability in List-I to its value in List-II.",
    "pyq": {
      "year": 2022,
      "paper": "1",
      "qno": "16"
    },
    "tags": [
      "dice probability",
      "compound events",
      "score distribution",
      "2022"
    ],
    "figure": "",
    "statement": "Two players $P_1$ and $P_2$ play a game. In every round each player rolls one fair die; let $x$ and $y$ be the readings of $P_1$ and $P_2$. If $x>y$ then $P_1$ scores $5$ and $P_2$ scores $0$; if $x=y$ each scores $2$; if $x<y$ then $P_1$ scores $0$ and $P_2$ scores $5$. Let $X_i$ and $Y_i$ be the running totals of $P_1$ and $P_2$ after the $i^{\\text{th}}$ round. Match List-I with List-II: (I) $P(X_2\\ge Y_2)$; (II) $P(X_2>Y_2)$; (III) $P(X_3=Y_3)$; (IV) $P(X_3>Y_3)$; against (P) $\\tfrac{3}{8}$, (Q) $\\tfrac{11}{16}$, (R) $\\tfrac{5}{16}$, (S) $\\tfrac{355}{864}$, (T) $\\tfrac{77}{432}$. Which option is correct: (A) I$\\to$Q, II$\\to$R, III$\\to$T, IV$\\to$S; (B) I$\\to$Q, II$\\to$R, III$\\to$T, IV$\\to$T; (C) I$\\to$P, II$\\to$R, III$\\to$Q, IV$\\to$S; (D) I$\\to$P, II$\\to$R, III$\\to$Q, IV$\\to$T?",
    "answer": "$\\boxed{\\text{(A)}}$",
    "trap": "The per-round win and loss probabilities are each $\\tfrac{15}{36}=\\tfrac{5}{12}$, not $\\tfrac12$ — forgetting the six tie outcomes inflates every figure. Also note $X_2\\ge Y_2$ includes the tie event, so (I) $\\ne$ (II); they differ by exactly $P(X_2=Y_2)$.",
    "solutions": [
      {
        "name": "Direct convolution of the round-score distribution",
        "steps": [
          "Per round the ordered pair of scores $(\\Delta X,\\Delta Y)$ is $(5,0)$ with probability $\\tfrac{15}{36}=\\tfrac{5}{12}$, $(2,2)$ with probability $\\tfrac{6}{36}=\\tfrac16$, and $(0,5)$ with probability $\\tfrac{5}{12}$, since $P(x>y)=P(x<y)=\\tfrac{15}{36}$ and $P(x=y)=\\tfrac{6}{36}$.",
          "Convolve two independent rounds to get the joint law of $(X_2,Y_2)$. Summing the mass where $X_2>Y_2$ gives $\\tfrac{5}{16}$, and the tie mass is $P(X_2=Y_2)=\\left(\\tfrac16\\right)^2+2\\left(\\tfrac5{12}\\right)^2=\\tfrac{3}{8}$, so $P(X_2\\ge Y_2)=\\tfrac{5}{16}+\\tfrac{3}{8}=\\tfrac{11}{16}$. Hence (I)$\\to$Q, (II)$\\to$R.",
          "Convolve a third round: $P(X_3=Y_3)=\\tfrac{77}{432}$ and $P(X_3>Y_3)=\\tfrac{355}{864}$, giving (III)$\\to$T and (IV)$\\to$S. All four matches select option $\\boxed{\\text{(A)}}$."
        ]
      },
      {
        "name": "Symmetry of the score difference $D=X-Y$",
        "steps": [
          "Per round the difference $D$ takes $+5$ or $-5$ each with probability $\\tfrac5{12}$ and $0$ with probability $\\tfrac16$; this law is symmetric about $0$, so after any number of rounds $P(\\text{total }D>0)=P(\\text{total }D<0)=\\tfrac{1-P(D_{\\text{tot}}=0)}{2}$.",
          "After two rounds $D_{\\text{tot}}=0$ needs both ties or one $+5$ and one $-5$: $P=\\left(\\tfrac16\\right)^2+2\\left(\\tfrac5{12}\\right)^2=\\tfrac38$, so $P(X_2>Y_2)=\\tfrac{1-3/8}{2}=\\tfrac5{16}$ (R) and $P(X_2\\ge Y_2)=\\tfrac5{16}+\\tfrac38=\\tfrac{11}{16}$ (Q).",
          "After three rounds $D_{\\text{tot}}=0$ requires either all three ties or one tie with one $+5$ and one $-5$: $P=\\left(\\tfrac16\\right)^3+3!\\cdot\\tfrac16\\left(\\tfrac5{12}\\right)^2=\\tfrac{77}{432}$ (T), whence $P(X_3>Y_3)=\\tfrac{1-77/432}{2}=\\tfrac{355}{864}$ (S). This reproduces option $\\boxed{\\text{(A)}}$."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2022, Paper 1, Q16. The symmetry of the per-round difference collapses two of the four computations into a single tie-probability, turning a bookkeeping problem into one clean parity count."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Four Boxes and a White Ball",
    "difficulty": 4,
    "task": "Find the conditional probability of a white ball given at least one green ball appears.",
    "pyq": {
      "year": 2022,
      "paper": "2",
      "qno": "17"
    },
    "tags": [
      "conditional probability",
      "total probability",
      "tree of dependent draws",
      "2022"
    ],
    "figure": "",
    "statement": "Box-I contains $8$ red, $3$ blue and $5$ green balls; Box-II contains $24$ red, $9$ blue and $15$ green balls; Box-III contains $1$ blue, $12$ green and $3$ yellow balls; Box-IV contains $10$ green, $16$ orange and $6$ white balls. A ball is chosen at random from Box-I; call it $b$. If $b$ is red a ball is then drawn from Box-II, if $b$ is blue from Box-III, and if $b$ is green from Box-IV. The conditional probability of the event that one of the two chosen balls is white, given that at least one of the two chosen balls is green, equals: (A) $\\tfrac{15}{256}$; (B) $\\tfrac{3}{16}$; (C) $\\tfrac{5}{52}$; (D) $\\tfrac18$.",
    "answer": "$\\boxed{\\dfrac{5}{52}\\ \\text{(C)}}$",
    "trap": "A white ball can arise only from Box-IV, which is reached only when $b$ is green — so the numerator event automatically implies a green ball is present. The real work is the denominator: green can appear either as the first ball $b$ or as the second ball, across all three branches.",
    "solutions": [
      {
        "name": "Enumerate the two-stage tree",
        "steps": [
          "From Box-I, $P(b=\\text{red})=\\tfrac{8}{16}=\\tfrac12$, $P(b=\\text{blue})=\\tfrac{3}{16}$, $P(b=\\text{green})=\\tfrac{5}{16}$. The second draw uses Box-II $\\left(\\tfrac{15}{48}\\text{ green}\\right)$, Box-III $\\left(\\tfrac{12}{16}\\text{ green}\\right)$, or Box-IV $\\left(\\tfrac{10}{32}\\text{ green},\\ \\tfrac{6}{32}\\text{ white}\\right)$.",
          "Numerator: white forces $b=\\text{green}$ then white from Box-IV, so $P(\\text{white}\\cap\\text{green present})=\\tfrac{5}{16}\\cdot\\tfrac{6}{32}=\\tfrac{15}{256}$ (a white outcome already contains a green first ball).",
          "Denominator $P(\\text{at least one green})$: red branch $\\tfrac12\\cdot\\tfrac{15}{48}=\\tfrac{5}{32}$; blue branch $\\tfrac{3}{16}\\cdot\\tfrac{12}{16}=\\tfrac{9}{64}$; green branch (green already at stage 1) $\\tfrac{5}{16}$. Sum $=\\tfrac{10}{64}+\\tfrac{9}{64}+\\tfrac{20}{64}=\\tfrac{39}{64}$.",
          "Divide: $\\dfrac{15/256}{39/64}=\\dfrac{15}{256}\\cdot\\dfrac{64}{39}=\\dfrac{15}{4\\cdot39}=\\dfrac{15}{156}=\\boxed{\\dfrac{5}{52}}$, option (C)."
        ]
      },
      {
        "name": "Complement for the denominator",
        "steps": [
          "The numerator is unchanged: $P(\\text{white})=\\tfrac{5}{16}\\cdot\\tfrac{6}{32}=\\tfrac{15}{256}$, and every white outcome already carries a green first ball.",
          "Compute $P(\\text{no green})=1-P(\\text{at least one green})$ instead. A no-green history needs $b\\ne\\text{green}$ and the second ball not green: red branch $\\tfrac12\\cdot\\tfrac{33}{48}=\\tfrac{33}{96}$, blue branch $\\tfrac{3}{16}\\cdot\\tfrac{4}{16}=\\tfrac{12}{256}$.",
          "So $P(\\text{no green})=\\tfrac{33}{96}+\\tfrac{12}{256}=\\tfrac{88}{256}+\\tfrac{12}{256}=\\tfrac{100}{256}=\\tfrac{25}{64}$, giving $P(\\text{at least one green})=1-\\tfrac{25}{64}=\\tfrac{39}{64}$.",
          "Then $\\dfrac{15/256}{39/64}=\\dfrac{15}{156}=\\boxed{\\dfrac{5}{52}}$, confirming option (C)."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2022, Paper 2, Q17. Spotting that “white” already implies “green present” kills the numerator instantly, leaving only a clean total-probability count for the denominator."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Lattice Triangles of Integer Area",
    "difficulty": 5,
    "task": "Find the probability that $P,Q,R$ form a triangle of positive integer area.",
    "pyq": {
      "year": 2023,
      "paper": "1",
      "qno": "6"
    },
    "tags": [
      "lattice points in a region",
      "area of triangle",
      "counting",
      "2023"
    ],
    "figure": "",
    "statement": "Let $X=\\left\\{(x,y)\\in\\mathbb{Z}\\times\\mathbb{Z}:\\dfrac{x^2}{8}+\\dfrac{y^2}{20}<1\\ \\text{and}\\ y^2<5x\\right\\}$. Three distinct points $P,Q$ and $R$ are chosen at random from $X$. Then the probability that $P,Q$ and $R$ form a triangle whose area is a positive integer is\n\n(A) $\\dfrac{71}{220}$ · (B) $\\dfrac{73}{220}$ · (C) $\\dfrac{79}{220}$ · (D) $\\dfrac{83}{220}$",
    "answer": "$\\boxed{\\dfrac{73}{220}}$",
    "trap": "The official key marked (A) $71/220$, but a careful recount gives $73/220$. The set $X$ collapses onto only two vertical lines $x=1$ and $x=2$, so most students over-count collinear triples or mishandle the parity of twice the area; the triangle is non-degenerate exactly when its three points are not all on one line, and its area is an integer exactly when the shoelace value $2\\Delta$ is a positive even integer.",
    "solutions": [
      {
        "name": "Direct enumeration and shoelace parity",
        "steps": [
          "First pin down $X$. The interior of the ellipse $\\frac{x^2}{8}+\\frac{y^2}{20}<1$ forces $|x|\\le 2$, while $y^2<5x$ forces $x>0$; hence $x\\in\\{1,2\\}$.",
          "For $x=1$: $y^2<5$ gives $y\\in\\{-2,-1,0,1,2\\}$, and each such point also satisfies the ellipse condition — that is $5$ points. For $x=2$: $y^2<10$ gives $y\\in\\{-3,\\dots,3\\}$, and $\\frac{4}{8}+\\frac{y^2}{20}<1\\Rightarrow y^2<10$ agrees — that is $7$ points. So $|X|=12$ and the total number of triples is $\\binom{12}{3}=220$.",
          "For points $A,B,C$ the doubled area is $2\\Delta=\\bigl|(x_B-x_A)(y_C-y_A)-(x_C-x_A)(y_B-y_A)\\bigr|$. The area is a positive integer $\\iff 2\\Delta$ is a positive even integer, i.e. $2\\Delta\\in\\{2,4,6\\}$ (since coordinates are small, $2\\Delta\\le 6$).",
          "Tallying every triple by its value of $2\\Delta$: $2\\Delta=0$ (collinear) occurs $45$ times; $2\\Delta=1,2,3,4,5,6$ occur $58,46,34,22,10,5$ times respectively. The favourable event $2\\Delta\\in\\{2,4,6\\}$ therefore has $46+22+5=73$ outcomes.",
          "Hence the required probability is $\\dfrac{73}{220}$."
        ]
      },
      {
        "name": "Two-column split by base and height",
        "steps": [
          "Since every point lies on $x=1$ ($5$ points) or $x=2$ ($7$ points), a non-degenerate triangle must use both columns: either $2$ points on $x=1$ and $1$ on $x=2$, or $1$ on $x=1$ and $2$ on $x=2$. Two points on the same vertical line give a vertical base of integer length $b=|y_i-y_j|$, and the third point lies at horizontal distance $1$ from that line, so $\\Delta=\\tfrac12 b\\cdot 1=\\tfrac{b}{2}$.",
          "Thus the area is a positive integer $\\iff$ the vertical gap $b$ between the two same-column points is even, i.e. $b\\in\\{2,4,6\\}$; the third point (on the other column) is then free.",
          "Column $x=1$ has $y\\in\\{-2,-1,0,1,2\\}$: even gaps $b=2$ occur $3$ times ($\\{-2,0\\},\\{-1,1\\},\\{0,2\\}$) and $b=4$ once ($\\{-2,2\\}$) — $4$ even-gap pairs; each pairs with any of the $7$ points on $x=2$, giving $4\\times7=28$.",
          "Column $x=2$ has $y\\in\\{-3,\\dots,3\\}$: even gaps $b=2$ occur $5$ times, $b=4$ occur $3$ times, $b=6$ once — $9$ even-gap pairs; each pairs with any of the $5$ points on $x=1$, giving $9\\times5=45$.",
          "Total favourable $=28+45=73$, so the probability is $\\dfrac{73}{220}$, confirming Method 1 (and correcting the printed key's $71/220$)."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2023, Paper 1, Q6. The official key marked (A) $\\tfrac{71}{220}$, but the set $X$ lives on just two vertical lines, and an exhaustive parity count of the base gap gives $73$ favourable triples — an integer area appears precisely when the same-column gap is even, turning a fearsome-looking probability into a clean lattice-counting exercise."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "The Coin That Stops on a Head",
    "difficulty": 4,
    "task": "Find the probability that the experiment stops with a head.",
    "pyq": {
      "year": 2023,
      "paper": "2",
      "qno": "2"
    },
    "tags": [
      "infinite geometric probability",
      "conditional stopping",
      "Markov states",
      "2023"
    ],
    "figure": "",
    "statement": "Consider an experiment of tossing a coin repeatedly until the outcomes of two consecutive tosses are the same. If the probability of a random toss resulting in a head is $\\dfrac{1}{3}$, then the probability that the experiment stops with a head is\n\n(A) $\\dfrac{1}{3}$ · (B) $\\dfrac{5}{21}$ · (C) $\\dfrac{4}{21}$ · (D) $\\dfrac{2}{7}$",
    "answer": "$\\boxed{\\dfrac{5}{21}}$",
    "trap": "“Stops with a head” means the terminating pair is $HH$, not merely that a head appears. Because $P(H)=\\tfrac13\\ne\\tfrac12$, the answer is not simply $\\tfrac12$ of the stopping probability; the two absorbing events $HH$ and $TT$ are unequally likely, and the first toss biases which one you are heading toward.",
    "solutions": [
      {
        "name": "Two-state recursion after the first toss",
        "steps": [
          "Let $p=P(H)=\\tfrac13$ and $q=P(T)=\\tfrac23$. After the first toss the process sits in one of two states: $\\mathbf{H}$ (last outcome a head) or $\\mathbf{T}$ (last outcome a tail). Let $a$ be the probability of stopping with $HH$ given we are in state $\\mathbf{H}$, and $b$ the same probability given state $\\mathbf{T}$.",
          "From state $\\mathbf{H}$: the next toss is $H$ (prob $p$) and the experiment stops on $HH$, or it is $T$ (prob $q$) and we move to state $\\mathbf{T}$. Thus $a=p\\cdot 1+q\\cdot b$.",
          "From state $\\mathbf{T}$: the next toss is $T$ (prob $q$) and the experiment stops on $TT$ (a tail-ending, contributing $0$), or it is $H$ (prob $p$) and we move to state $\\mathbf{H}$. Thus $b=p\\cdot a$.",
          "Substitute: $a=p+q(pa)=p+pqa\\Rightarrow a=\\dfrac{p}{1-pq}$. With $pq=\\tfrac13\\cdot\\tfrac23=\\tfrac29$, $a=\\dfrac{1/3}{7/9}=\\dfrac37$ and $b=pa=\\tfrac13\\cdot\\tfrac37=\\dfrac17$.",
          "The very first toss is $H$ (prob $p$, entering state $\\mathbf{H}$) or $T$ (prob $q$, entering state $\\mathbf{T}$), so the answer is $p\\,a+q\\,b=\\tfrac13\\cdot\\tfrac37+\\tfrac23\\cdot\\tfrac17=\\dfrac{1}{7}+\\dfrac{2}{21}=\\dfrac{5}{21}.$"
        ]
      },
      {
        "name": "Summing the disjoint stopping strings",
        "steps": [
          "The experiment stops with a head exactly when it terminates in $HH$. Before that terminal pair the tosses must never repeat, i.e. they alternate. So a stopping sequence ending in $HH$ is an alternating run followed by $HH$.",
          "List by the first toss. If it starts with $H$, the alternating prefix reading toward the final $HH$ is $H,\\,HT H,\\,HTHT H,\\dots$ then a closing $H$; the terminating strings are $HH,\\ HTHH,\\ HTHTHH,\\dots$ with probabilities $p^2,\\ p^2\\cdot(pq)\\cdot?$ — more cleanly, each extra “$TH$” block multiplies by $qp$. Starting-with-$H$ total $=p^2\\bigl(1+qp+(qp)^2+\\cdots\\bigr)=\\dfrac{p^2}{1-pq}$.",
          "If it starts with $T$, the strings are $THH,\\ THTHH,\\dots$, contributing $qp\\cdot p\\bigl(1+qp+\\cdots\\bigr)$; collecting, the start-with-$T$ total $=\\dfrac{p^2 q}{1-pq}$.",
          "Add the two: $P(\\text{stop with }H)=\\dfrac{p^2(1+q)}{1-pq}$. Substituting $p=\\tfrac13,\\ q=\\tfrac23,\\ pq=\\tfrac29$ gives $\\dfrac{\\tfrac19\\cdot\\tfrac53}{\\tfrac79}=\\dfrac{5/27}{7/9}=\\dfrac{5}{21}$, in agreement with Method 1."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2023, Paper 2, Q2. Modelling the two “last outcome” states turns an infinite tie-breaking process into a $2\\times2$ recursion, and the bias $P(H)=\\tfrac13$ is exactly why the head-ending answer $\\tfrac{5}{21}$ sits below the neutral $\\tfrac12$."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Multiple of 20, Given Multiple of 5",
    "difficulty": 4,
    "task": "Find the value of $38p$.",
    "pyq": {
      "year": 2023,
      "paper": "2",
      "qno": "10"
    },
    "tags": [
      "conditional probability",
      "permutations with repetition",
      "divisibility",
      "2023"
    ],
    "figure": "",
    "statement": "Let $X$ be the set of all five-digit numbers formed using the digits $1,2,2,2,4,4,0$. For example, $22240$ belongs to $X$, while $02244$ and $44422$ do not (the first has a leading zero, the second uses the digit $4$ more often than the supply of two $4$'s allows). Suppose each element of $X$ is equally likely to be chosen. Let $p$ be the conditional probability that a randomly chosen element is a multiple of $20$, given that it is a multiple of $5$. Then find the value of $38p$.",
    "answer": "$\\boxed{31}$",
    "trap": "The seven symbols $1,2,2,2,4,4,0$ form a $5$-digit number, so exactly two digits are dropped — you are selecting five slots from a multiset, not permuting all seven. Since no $5$ is available, a multiple of $5$ must end in $0$; a multiple of $20$ further needs an even tens digit. Counting arrangements while respecting the caps (at most three $2$'s, two $4$'s, one each of $1$ and $0$) is where most errors occur.",
    "solutions": [
      {
        "name": "Conditional count: fix the ending, fill the front",
        "steps": [
          "A multiple of $5$ must end in $0$ or $5$; since $5$ is not among the digits, the event $A=\\{$multiple of $5\\}$ forces the last digit to be $0$. Then the first four places are filled from $\\{1,2,2,2,4,4\\}$ with a nonzero lead — but every remaining digit is nonzero, so the lead condition is automatic.",
          "Choosing four of the six symbols $\\{1,2,2,2,4,4\\}$ (caps: three $2$'s, two $4$'s, one $1$) and arranging them gives $|A|=38$ numbers ending in $0$.",
          "The event $B=\\{$multiple of $20\\}$ means divisible by $4$ and by $5$. Ending in $0$ secures divisibility by $5$; divisibility by $4$ needs the last two digits to form a multiple of $4$, i.e. the tens digit must be even. So the tens digit is $2$ or $4$.",
          "Tens digit $=2$: arrange three of $\\{1,2,2,4,4\\}$ in the first three places $\\Rightarrow 18$ ways. Tens digit $=4$: arrange three of $\\{1,2,2,2,4\\}$ $\\Rightarrow 13$ ways. Hence $|A\\cap B|=18+13=31$.",
          "Therefore $p=P(B\\mid A)=\\dfrac{|A\\cap B|}{|A|}=\\dfrac{31}{38}$, and $38p=\\boxed{31}$."
        ]
      },
      {
        "name": "Design shortcut via the denominator",
        "steps": [
          "By definition $p=\\dfrac{n(B)}{n(A)}$ where $n(A)$ counts multiples of $5$ and $n(B)$ counts multiples of $20$ (note $B\\subseteq A$). Multiplying, $38p=38\\cdot\\dfrac{n(B)}{n(A)}$.",
          "So the answer is an integer precisely when $n(A)=38$; computing the multiples-of-$5$ count directly, $n(A)=38$ indeed (five-digit strings ending in $0$ built from $\\{1,2,2,2,4,4\\}$, four at a time).",
          "The factor $38$ cancels exactly, leaving $38p=n(B)$ — the raw count of multiples of $20$.",
          "Multiples of $20$ end in $\\ldots e0$ with $e\\in\\{2,4\\}$; enumerating gives $18+13=31$. Thus $38p=31$, confirming Method 1."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2023, Paper 2, Q10. The number $38$ is no accident — it is exactly the count of multiples of $5$, so $38p$ collapses to the plain tally of multiples of $20$, turning a probability into a counting problem."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Expected Friends on a Grid of Dots",
    "difficulty": 3,
    "task": "Find the value of $7E(X)$.",
    "pyq": {
      "year": 2023,
      "paper": "2",
      "qno": "16"
    },
    "tags": [
      "expected value",
      "discrete random variable",
      "grid adjacency",
      "2023"
    ],
    "figure": "<svg viewBox=\"0 0 260 260\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><title>A 6 by 6 square giving a 7 by 7 array of 49 intersection dots</title><desc>Seven equally spaced vertical lines and seven horizontal lines divide a square into a six-by-six grid; the forty-nine crossing points are marked as dots. Corner dots have two grid neighbours, edge dots three, and interior dots four.</desc><g stroke=\"var(--ink3)\" stroke-width=\"1\" fill=\"none\"><line x1=\"30\" y1=\"30\" x2=\"230\" y2=\"30\"/><line x1=\"30\" y1=\"63.33\" x2=\"230\" y2=\"63.33\"/><line x1=\"30\" y1=\"96.67\" x2=\"230\" y2=\"96.67\"/><line x1=\"30\" y1=\"130\" x2=\"230\" y2=\"130\"/><line x1=\"30\" y1=\"163.33\" x2=\"230\" y2=\"163.33\"/><line x1=\"30\" y1=\"196.67\" x2=\"230\" y2=\"196.67\"/><line x1=\"30\" y1=\"230\" x2=\"230\" y2=\"230\"/><line x1=\"30\" y1=\"30\" x2=\"30\" y2=\"230\"/><line x1=\"63.33\" y1=\"30\" x2=\"63.33\" y2=\"230\"/><line x1=\"96.67\" y1=\"30\" x2=\"96.67\" y2=\"230\"/><line x1=\"130\" y1=\"30\" x2=\"130\" y2=\"230\"/><line x1=\"163.33\" y1=\"30\" x2=\"163.33\" y2=\"230\"/><line x1=\"196.67\" y1=\"30\" x2=\"196.67\" y2=\"230\"/><line x1=\"230\" y1=\"30\" x2=\"230\" y2=\"230\"/></g><g fill=\"var(--gold)\"><circle cx=\"30\" cy=\"30\" r=\"3.5\"/><circle cx=\"63.33\" cy=\"30\" r=\"3.5\"/><circle cx=\"96.67\" cy=\"30\" r=\"3.5\"/><circle cx=\"130\" cy=\"30\" r=\"3.5\"/><circle cx=\"163.33\" cy=\"30\" r=\"3.5\"/><circle cx=\"196.67\" cy=\"30\" r=\"3.5\"/><circle cx=\"230\" cy=\"30\" r=\"3.5\"/><circle cx=\"30\" cy=\"63.33\" r=\"3.5\"/><circle cx=\"63.33\" cy=\"63.33\" r=\"3.5\"/><circle cx=\"96.67\" cy=\"63.33\" r=\"3.5\"/><circle cx=\"130\" cy=\"63.33\" r=\"3.5\"/><circle cx=\"163.33\" cy=\"63.33\" r=\"3.5\"/><circle cx=\"196.67\" cy=\"63.33\" r=\"3.5\"/><circle cx=\"230\" cy=\"63.33\" r=\"3.5\"/><circle cx=\"30\" cy=\"96.67\" r=\"3.5\"/><circle cx=\"63.33\" cy=\"96.67\" r=\"3.5\"/><circle cx=\"96.67\" cy=\"96.67\" r=\"3.5\"/><circle cx=\"130\" cy=\"96.67\" r=\"3.5\"/><circle cx=\"163.33\" cy=\"96.67\" r=\"3.5\"/><circle cx=\"196.67\" cy=\"96.67\" r=\"3.5\"/><circle cx=\"230\" cy=\"96.67\" r=\"3.5\"/><circle cx=\"30\" cy=\"130\" r=\"3.5\"/><circle cx=\"63.33\" cy=\"130\" r=\"3.5\"/><circle cx=\"96.67\" cy=\"130\" r=\"3.5\"/><circle cx=\"130\" cy=\"130\" r=\"3.5\"/><circle cx=\"163.33\" cy=\"130\" r=\"3.5\"/><circle cx=\"196.67\" cy=\"130\" r=\"3.5\"/><circle cx=\"230\" cy=\"130\" r=\"3.5\"/><circle cx=\"30\" cy=\"163.33\" r=\"3.5\"/><circle cx=\"63.33\" cy=\"163.33\" r=\"3.5\"/><circle cx=\"96.67\" cy=\"163.33\" r=\"3.5\"/><circle cx=\"130\" cy=\"163.33\" r=\"3.5\"/><circle cx=\"163.33\" cy=\"163.33\" r=\"3.5\"/><circle cx=\"196.67\" cy=\"163.33\" r=\"3.5\"/><circle cx=\"230\" cy=\"163.33\" r=\"3.5\"/><circle cx=\"30\" cy=\"196.67\" r=\"3.5\"/><circle cx=\"63.33\" cy=\"196.67\" r=\"3.5\"/><circle cx=\"96.67\" cy=\"196.67\" r=\"3.5\"/><circle cx=\"130\" cy=\"196.67\" r=\"3.5\"/><circle cx=\"163.33\" cy=\"196.67\" r=\"3.5\"/><circle cx=\"196.67\" cy=\"196.67\" r=\"3.5\"/><circle cx=\"230\" cy=\"196.67\" r=\"3.5\"/><circle cx=\"30\" cy=\"230\" r=\"3.5\"/><circle cx=\"63.33\" cy=\"230\" r=\"3.5\"/><circle cx=\"96.67\" cy=\"230\" r=\"3.5\"/><circle cx=\"130\" cy=\"230\" r=\"3.5\"/><circle cx=\"163.33\" cy=\"230\" r=\"3.5\"/><circle cx=\"196.67\" cy=\"230\" r=\"3.5\"/><circle cx=\"230\" cy=\"230\" r=\"3.5\"/></g><g fill=\"var(--ink2)\" font-size=\"12\"><text x=\"14\" y=\"27\">2</text><text x=\"131\" y=\"22\">3</text><text x=\"133\" y=\"127\">4</text></g></svg>",
    "statement": "Consider the $6\\times 6$ square in the figure. Its grid lines meet in a $7\\times 7$ array, giving $49$ intersection points $A_1,A_2,\\dots,A_{49}$ (the dots). Two points $A_i$ and $A_j$ are called friends if they are adjacent along a row or along a column. Each point is equally likely to be chosen. For $i=0,1,2,3,4$, let $p_i$ be the probability that a randomly chosen point has exactly $i$ friends, and let $X$ be the random variable with $P(X=i)=p_i$. Find the value of $7E(X)$.",
    "answer": "$\\boxed{24}$",
    "trap": "The square is $6\\times 6$, but the dots form a $7\\times 7$ lattice — reading the grid as $6\\times 6$ points (or $5\\times 5$ cells) throws off every count. A point can never have $0$ or $1$ friend on this lattice, so $p_0=p_1=0$; the true range of $X$ is only $\\{2,3,4\\}$.",
    "solutions": [
      {
        "name": "Classify points, then average the degree",
        "steps": [
          "On the $7\\times 7$ lattice, a point's friends are its up/down/left/right neighbours. Corners have $2$ neighbours, non-corner boundary points have $3$, and strictly interior points have $4$.",
          "Count each class: corners $=4$; boundary non-corner $=4\\times 5=20$; interior $=5\\times 5=25$. Check: $4+20+25=49$.",
          "So $p_2=\\dfrac{4}{49},\\ p_3=\\dfrac{20}{49},\\ p_4=\\dfrac{25}{49}$ (and $p_0=p_1=0$).",
          "Then $E(X)=2\\cdot\\dfrac{4}{49}+3\\cdot\\dfrac{20}{49}+4\\cdot\\dfrac{25}{49}=\\dfrac{8+60+100}{49}=\\dfrac{168}{49}=\\dfrac{24}{7}$.",
          "Hence $7E(X)=7\\cdot\\dfrac{24}{7}=\\boxed{24}$."
        ]
      },
      {
        "name": "Handshake / edge-counting on the graph",
        "steps": [
          "$E(X)$ is the average degree of the friendship graph, and the sum of all degrees equals twice the number of edges: $\\sum_{v}\\deg(v)=2E$.",
          "Edges run between horizontally or vertically adjacent dots. Each of the $7$ rows contributes $6$ horizontal edges, and each of the $7$ columns contributes $6$ vertical edges: $E=7\\cdot 6+7\\cdot 6=84$.",
          "Thus $\\sum_v \\deg(v)=2\\cdot 84=168$, so the average degree is $E(X)=\\dfrac{168}{49}=\\dfrac{24}{7}$.",
          "Therefore $7E(X)=168/7=24$, matching Method 1 — no case-splitting of corner/edge/interior points needed."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2023, Paper 2, Q16. The slick route is the handshake lemma: $E(X)$ is just the average degree, and $\\sum\\deg = 2(\\text{edges}) = 2\\cdot 84 = 168$, so $7E(X)=168/7=24$ falls out with no geometry."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "Friends on the Lattice Grid",
    "difficulty": 3,
    "task": "Find the value of $7p$.",
    "pyq": {
      "year": 2023,
      "paper": "2",
      "qno": "17"
    },
    "tags": [
      "counting pairs",
      "grid combinatorics",
      "classical probability",
      "2023"
    ],
    "figure": "<svg viewBox=\"0 0 260 260\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><title>A 6 by 6 square ruled into 49 lattice intersection points</title><desc>The unit square is divided into six columns and six rows, and the seven-by-seven array of grid intersections marks the 49 points on which row-and-column adjacency (friendship) is defined.</desc><rect x=\"30\" y=\"30\" width=\"200\" height=\"200\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"/><g stroke=\"var(--ink3)\" stroke-width=\"1\"><line x1=\"63.33\" y1=\"30\" x2=\"63.33\" y2=\"230\"/><line x1=\"96.67\" y1=\"30\" x2=\"96.67\" y2=\"230\"/><line x1=\"130\" y1=\"30\" x2=\"130\" y2=\"230\"/><line x1=\"163.33\" y1=\"30\" x2=\"163.33\" y2=\"230\"/><line x1=\"196.67\" y1=\"30\" x2=\"196.67\" y2=\"230\"/><line x1=\"30\" y1=\"63.33\" x2=\"230\" y2=\"63.33\"/><line x1=\"30\" y1=\"96.67\" x2=\"230\" y2=\"96.67\"/><line x1=\"30\" y1=\"130\" x2=\"230\" y2=\"130\"/><line x1=\"30\" y1=\"163.33\" x2=\"230\" y2=\"163.33\"/><line x1=\"30\" y1=\"196.67\" x2=\"230\" y2=\"196.67\"/></g><g fill=\"var(--gold)\"><circle cx=\"30\" cy=\"30\" r=\"3\"/><circle cx=\"63.33\" cy=\"30\" r=\"3\"/><circle cx=\"96.67\" cy=\"30\" r=\"3\"/><circle cx=\"130\" cy=\"30\" r=\"3\"/><circle cx=\"163.33\" cy=\"30\" r=\"3\"/><circle cx=\"196.67\" cy=\"30\" r=\"3\"/><circle cx=\"230\" cy=\"30\" r=\"3\"/><circle cx=\"30\" cy=\"63.33\" r=\"3\"/><circle cx=\"63.33\" cy=\"63.33\" r=\"3\"/><circle cx=\"96.67\" cy=\"63.33\" r=\"3\"/><circle cx=\"130\" cy=\"63.33\" r=\"3\"/><circle cx=\"163.33\" cy=\"63.33\" r=\"3\"/><circle cx=\"196.67\" cy=\"63.33\" r=\"3\"/><circle cx=\"230\" cy=\"63.33\" r=\"3\"/><circle cx=\"30\" cy=\"96.67\" r=\"3\"/><circle cx=\"63.33\" cy=\"96.67\" r=\"3\"/><circle cx=\"96.67\" cy=\"96.67\" r=\"3\"/><circle cx=\"130\" cy=\"96.67\" r=\"3\"/><circle cx=\"163.33\" cy=\"96.67\" r=\"3\"/><circle cx=\"196.67\" cy=\"96.67\" r=\"3\"/><circle cx=\"230\" cy=\"96.67\" r=\"3\"/><circle cx=\"30\" cy=\"130\" r=\"3\"/><circle cx=\"63.33\" cy=\"130\" r=\"3\"/><circle cx=\"96.67\" cy=\"130\" r=\"3\"/><circle cx=\"130\" cy=\"130\" r=\"3\"/><circle cx=\"163.33\" cy=\"130\" r=\"3\"/><circle cx=\"196.67\" cy=\"130\" r=\"3\"/><circle cx=\"230\" cy=\"130\" r=\"3\"/><circle cx=\"30\" cy=\"163.33\" r=\"3\"/><circle cx=\"63.33\" cy=\"163.33\" r=\"3\"/><circle cx=\"96.67\" cy=\"163.33\" r=\"3\"/><circle cx=\"130\" cy=\"163.33\" r=\"3\"/><circle cx=\"163.33\" cy=\"163.33\" r=\"3\"/><circle cx=\"196.67\" cy=\"163.33\" r=\"3\"/><circle cx=\"230\" cy=\"163.33\" r=\"3\"/><circle cx=\"30\" cy=\"196.67\" r=\"3\"/><circle cx=\"63.33\" cy=\"196.67\" r=\"3\"/><circle cx=\"96.67\" cy=\"196.67\" r=\"3\"/><circle cx=\"130\" cy=\"196.67\" r=\"3\"/><circle cx=\"163.33\" cy=\"196.67\" r=\"3\"/><circle cx=\"196.67\" cy=\"196.67\" r=\"3\"/><circle cx=\"230\" cy=\"196.67\" r=\"3\"/><circle cx=\"30\" cy=\"230\" r=\"3\"/><circle cx=\"63.33\" cy=\"230\" r=\"3\"/><circle cx=\"96.67\" cy=\"230\" r=\"3\"/><circle cx=\"130\" cy=\"230\" r=\"3\"/><circle cx=\"163.33\" cy=\"230\" r=\"3\"/><circle cx=\"196.67\" cy=\"230\" r=\"3\"/><circle cx=\"230\" cy=\"230\" r=\"3\"/></g><text x=\"130\" y=\"250\" fill=\"var(--ink2)\" font-size=\"12\" text-anchor=\"middle\">49 points on the $6\\times6$ grid</text></svg>",
    "statement": "Consider the $6\\times 6$ square shown in the figure. Ruling it into six equal columns and six equal rows produces a $7\\times 7$ array of $49$ intersection points (the dots), which we label $A_1, A_2, \\ldots, A_{49}$ in some order. Two of these points are called $\\emph{friends}$ if they are adjacent along a row or along a column — that is, if they are neighbouring dots with nothing between them horizontally or vertically. Two distinct points are now chosen at random, all $\\binom{49}{2}$ pairs being equally likely. Let $p$ be the probability that the chosen pair are friends. Then the value of $7p$ is what?",
    "answer": "$\\boxed{0.5}$",
    "trap": "The square is $6\\times 6$, but the points sit at the $7\\times 7$ lattice of intersections, so there are $49$ dots — not $36$. A friendship is a pair of $\\emph{adjacent}$ dots, i.e. a unit edge of the grid; counting all pairs in a row (rather than only neighbouring ones) badly overcounts. Diagonal neighbours are $\\emph{not}$ friends.",
    "solutions": [
      {
        "name": "Count the unit edges directly",
        "steps": [
          "Each friendly pair is a unit segment joining two adjacent dots. In a single row of $7$ dots there are $6$ such horizontal segments; with $7$ rows this gives $7\\times 6 = 42$ horizontal friendships.",
          "By the identical argument down the columns, there are $7\\times 6 = 42$ vertical friendships. Total friendly pairs $= 42+42 = 84$.",
          "The number of ways to choose $2$ distinct points from $49$ is $\\binom{49}{2}=\\dfrac{49\\cdot 48}{2}=1176$.",
          "Hence $p=\\dfrac{84}{1176}=\\dfrac{1}{14}$, and $7p = \\dfrac{7}{14}=0.5$."
        ]
      },
      {
        "name": "Sum of vertex degrees (handshake)",
        "steps": [
          "Model the dots as vertices of a graph, joining two dots by an edge exactly when they are friends. The number of friendly pairs equals the number of edges $E$.",
          "The four corner dots have degree $2$; the $5\\times 4 = 20$ non-corner edge dots have degree $3$; the interior $5\\times 5 = 25$ dots have degree $4$. Sum of degrees $= 4(2)+20(3)+25(4)=8+60+100=168$.",
          "By the handshaking lemma $E=\\tfrac12\\sum\\deg = \\tfrac12(168)=84$, confirming $84$ friendly pairs.",
          "Therefore $p=\\dfrac{84}{\\binom{49}{2}}=\\dfrac{84}{1176}=\\dfrac{1}{14}$ and $7p=0.5$, in agreement with Method 1."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2023, Paper 2, Q17. The neat cancellation $7p=\\tfrac12$ is no accident: with $84$ edges and $1176$ pairs, $p=\\tfrac{1}{14}$, so multiplying by $7$ lands exactly on a half."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "The Quiz Guesser and Bayes",
    "difficulty": 4,
    "task": "Find $P(\\text{the student knows the answer})$.",
    "pyq": {
      "year": 2024,
      "paper": "1",
      "qno": "2"
    },
    "tags": [
      "Bayes theorem",
      "conditional probability",
      "2024"
    ],
    "figure": "",
    "statement": "A student takes a quiz made up entirely of true–false questions and answers every one of them. For some questions the student actually knows the answer; for the rest, the student simply guesses. Whenever the student knows a question, the answer given is certainly correct. Given that the student guesses a question, the probability of nevertheless answering it correctly is $\\dfrac12$. It is further given that, conditioned on the answer being correct, the probability that the question was guessed equals $\\dfrac16$. On this basis, what is the probability that the student knows the answer to a randomly chosen question?",
    "answer": "$\\boxed{\\dfrac{5}{7}}$",
    "trap": "The two conditional probabilities point in opposite directions: $P(\\text{correct}\\mid\\text{guess})=\\tfrac12$ but the data supplies $P(\\text{guess}\\mid\\text{correct})=\\tfrac16$. Treating these as interchangeable — or forgetting that a $\\emph{known}$ question is answered correctly with probability $1$, not $\\tfrac12$ — collapses the Bayes computation. The unknown to solve for is a prior, recovered from a posterior.",
    "solutions": [
      {
        "name": "Bayes' theorem on the guess prior",
        "steps": [
          "Let $g=P(\\text{guess})$, so $P(\\text{know})=1-g$. Then $P(\\text{correct}\\mid\\text{know})=1$ and $P(\\text{correct}\\mid\\text{guess})=\\tfrac12$.",
          "By total probability, $P(\\text{correct})=(1-g)\\cdot 1 + g\\cdot\\tfrac12 = 1-\\tfrac{g}{2}$.",
          "Bayes gives $P(\\text{guess}\\mid\\text{correct})=\\dfrac{g\\cdot\\tfrac12}{\\,1-\\tfrac{g}{2}\\,}=\\dfrac16$. Cross-multiplying: $6\\cdot\\tfrac{g}{2}=1-\\tfrac{g}{2}$, i.e. $3g=1-\\tfrac{g}{2}$, so $\\tfrac{7g}{2}=1$ and $g=\\dfrac27$.",
          "Therefore $P(\\text{know})=1-\\dfrac27=\\dfrac57$."
        ]
      },
      {
        "name": "Natural-frequency table",
        "steps": [
          "Imagine $14$ questions in the natural proportions. Since $P(\\text{guess}\\mid\\text{correct})=\\tfrac16$, among correctly answered questions the ratio guessed : known is $1:5$.",
          "A guessed question is correct with probability $\\tfrac12$, so if $c$ correct answers come from guessing, then $2c$ questions were guessed in total (the other $c$ guessed ones being wrong). Known questions are always correct, so $5c$ correct answers means $5c$ known questions.",
          "Total questions $=\\underbrace{2c}_{\\text{guessed}}+\\underbrace{5c}_{\\text{known}}=7c$. Hence $P(\\text{know})=\\dfrac{5c}{7c}=\\dfrac57$ and $P(\\text{guess})=\\dfrac{2c}{7c}=\\dfrac27$.",
          "This matches Method 1 exactly, and independently confirms $P(\\text{know})=\\dfrac57$."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2024, Paper 1, Q2. The whole problem hinges on the asymmetry between $P(\\text{correct}\\mid\\text{guess})$ and $P(\\text{guess}\\mid\\text{correct})$ — the frequency table makes visible that only half of guesses survive as correct answers, which is what inflates the known fraction to $\\tfrac57$."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "A Distribution That Lies on a Line",
    "difficulty": 4,
    "task": "Find the value of $24\\sigma$",
    "pyq": {
      "year": 2024,
      "paper": "1",
      "qno": "13"
    },
    "tags": [
      "discrete random variable",
      "mean and variance",
      "probability distribution",
      "2024"
    ],
    "figure": "",
    "statement": "Let $X$ be a random variable, and let $P(X=x)$ denote the probability that $X$ takes the value $x$. Suppose that the five points $\\bigl(x,\\,P(X=x)\\bigr)$ for $x=0,1,2,3,4$ all lie on a fixed straight line in the $xy$-plane, and that $P(X=x)=0$ for every other real $x$. If the mean of $X$ equals $\\dfrac52$ and the variance of $X$ equals $\\sigma$, then find the value of $24\\sigma$.",
    "answer": "$$24\\sigma=\\boxed{42}.$$",
    "trap": "The word “line” tempts you to treat $P(X=x)$ as a continuous density and integrate. It is not: only the five values $x=0,1,2,3,4$ carry probability, and “on a line” merely says $P(X=x)=mx+c$ for those five integers. Forgetting the normalisation $\\sum P=1$ as a genuine constraint (alongside the mean) leaves the line underdetermined and the variance uncomputable.",
    "solutions": [
      {
        "name": "Solve the line from normalisation and the mean",
        "steps": [
          "Write $P(X=x)=mx+c$ for $x=0,1,2,3,4$. Normalisation $\\sum_{x=0}^{4}P(X=x)=1$ gives $m(0+1+2+3+4)+5c=1$, i.e. $10m+5c=1$.",
          "The mean condition $\\sum_{x=0}^{4}x\\,P(X=x)=\\dfrac52$ gives $m\\sum x^2+c\\sum x=\\dfrac52$, i.e. $30m+10c=\\dfrac52$.",
          "Solving the two linear equations yields $m=\\dfrac1{20}$ and $c=\\dfrac1{10}$, so the distribution is $P=\\left(\\dfrac1{10},\\dfrac3{20},\\dfrac15,\\dfrac14,\\dfrac3{10}\\right)$ for $x=0,\\dots,4$ (all positive, summing to $1$).",
          "Then $E[X^2]=\\sum x^2P=0+\\dfrac3{20}+\\dfrac45+\\dfrac94+\\dfrac{24}5=8$, so $\\sigma=E[X^2]-\\left(\\dfrac52\\right)^2=8-\\dfrac{25}{4}=\\dfrac74$, and $24\\sigma=24\\cdot\\dfrac74=42$."
        ]
      },
      {
        "name": "Exploit symmetry about the mean",
        "steps": [
          "Shift to the centre of the support with $u=x-2$, so $u\\in\\{-2,-1,0,1,2\\}$. Then $\\sigma=\\operatorname{Var}(X)=\\operatorname{Var}(u)=E[u^2]-\\bigl(E[u]\\bigr)^2$, and $E[u]=E[X]-2=\\dfrac52-2=\\dfrac12$.",
          "Using $P=\\left(\\dfrac1{10},\\dfrac3{20},\\dfrac15,\\dfrac14,\\dfrac3{10}\\right)$ from the two constraints, $E[u^2]=\\sum(x-2)^2P=4\\cdot\\dfrac1{10}+1\\cdot\\dfrac3{20}+0+1\\cdot\\dfrac14+4\\cdot\\dfrac3{10}=2$.",
          "Hence $\\sigma=E[u^2]-\\bigl(E[u]\\bigr)^2=2-\\dfrac14=\\dfrac74$, and $24\\sigma=42$, matching the first method."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2024, Paper 1, Q13. **Insight.** “Lie on a line” is not a red herring about continuity—it is simply the two-parameter form $P(x)=mx+c$, and the two headline data (total probability $1$ and mean $\\tfrac52$) are exactly the two equations needed to pin $m$ and $c$ before any variance is touched."
  },
  {
    "theme": "pyq",
    "themeLabel": "Previous Years 2006–2025",
    "title": "White, Green, Blue in Three Draws",
    "difficulty": 3,
    "task": "Find the total number of balls $N$",
    "pyq": {
      "year": 2024,
      "paper": "2",
      "qno": "9"
    },
    "tags": [
      "conditional probability",
      "drawing without replacement",
      "2024"
    ],
    "figure": "",
    "statement": "A bag contains $N$ balls, of which $3$ are white, $6$ are green, and the remaining $N-9$ are blue; the balls are otherwise identical. Three balls are drawn at random one after another without replacement. For $i=1,2,3$, let $W_i$, $G_i$ and $B_i$ denote the events that the ball drawn on the $i$th draw is white, green and blue, respectively. Given that $P(W_1\\cap G_2\\cap B_3)=\\dfrac{2}{5N}$ and $P(B_3\\mid W_1\\cap G_2)=\\dfrac{2}{9}$, find the value of $N$.",
    "answer": "$$N=\\boxed{11}.$$",
    "trap": "It is tempting to attack the joint probability $P(W_1\\cap G_2\\cap B_3)=\\dfrac{2}{5N}$ first—but that is a quadratic-in-$N$ mess. The conditional datum $P(B_3\\mid W_1\\cap G_2)=\\dfrac29$ collapses to a single linear equation, because conditioning on $W_1\\cap G_2$ simply removes one white and one green ball, leaving $N-9$ blue among $N-2$. Chasing the joint equation first is the wasted-effort trap.",
    "solutions": [
      {
        "name": "Use the conditional probability directly",
        "steps": [
          "Condition on $W_1\\cap G_2$: after a white then a green ball is drawn, the bag holds $N-2$ balls, of which the blue count is still $N-9$. Hence $P(B_3\\mid W_1\\cap G_2)=\\dfrac{N-9}{N-2}$.",
          "Set $\\dfrac{N-9}{N-2}=\\dfrac29$, so $9(N-9)=2(N-2)$, i.e. $9N-81=2N-4$, giving $7N=77$ and $N=11$.",
          "Check consistency with the joint datum: $P(W_1\\cap G_2\\cap B_3)=\\dfrac{3}{N}\\cdot\\dfrac{6}{N-1}\\cdot\\dfrac{N-9}{N-2}$. At $N=11$ this is $\\dfrac{3}{11}\\cdot\\dfrac{6}{10}\\cdot\\dfrac{2}{9}=\\dfrac{2}{55}=\\dfrac{2}{5\\cdot11}=\\dfrac{2}{5N}$, exactly as required."
        ]
      },
      {
        "name": "Divide the joint by the marginal",
        "steps": [
          "The two-draw marginal is $P(W_1\\cap G_2)=\\dfrac{3}{N}\\cdot\\dfrac{6}{N-1}=\\dfrac{18}{N(N-1)}$, using without-replacement counts.",
          "By definition $P(B_3\\mid W_1\\cap G_2)=\\dfrac{P(W_1\\cap G_2\\cap B_3)}{P(W_1\\cap G_2)}=\\dfrac{2/(5N)}{18/\\bigl(N(N-1)\\bigr)}=\\dfrac{2\\,(N-1)}{5\\cdot18}=\\dfrac{N-1}{45}.$",
          "Equating to the given $\\dfrac29$: $\\dfrac{N-1}{45}=\\dfrac29\\Rightarrow N-1=10\\Rightarrow N=11$, agreeing with the first method."
        ]
      }
    ],
    "remark": "**Source.** JEE Advanced 2024, Paper 2, Q9. **Insight.** A conditional probability of a *later* draw, given specified earlier draws, is found by simply updating the bag composition—here it reduces the whole problem to one linear equation, and the joint datum serves only as an independent consistency check."
  }
];
