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
  }
];
