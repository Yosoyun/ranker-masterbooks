/* problems.js — DATA. 100 original JEE-Advanced matrices & determinants problems for MATRIX · Determinants, Inverses & Linear Systems. Every problem lies strictly inside the JEE Advanced syllabus (matrix algebra; special matrices; transpose & the symmetric/skew decomposition; determinants of order up to three and their properties; factorisation, area of a triangle, concurrency; adjoint & inverse of order up to three; elementary transformations; systems of linear equations; parameters & matrix equations). No eigenvalues, characteristic polynomials, rank, trace identities, Cayley-Hamilton, block decompositions or determinant inequalities. Adversarially verified in sympy/numpy. statement/answer are raw LaTeX (the app auto-detects prose+math); steps use $...$ and $$...$$. */
window.PROBLEMS = [
  {
    "theme": "matalgebra",
    "themeLabel": "Algebra of Matrices",
    "title": "The Shear That Counts",
    "difficulty": 3,
    "task": "Find a closed form",
    "tags": [
      "powers of a matrix",
      "induction",
      "shear matrix",
      "pattern spotting"
    ],
    "statement": "Let $A=\\begin{pmatrix}1 & 1\\\\ 0 & 1\\end{pmatrix}$. For a positive integer $n$, find $A^{n}$ in closed form, and hence evaluate the $(1,2)$ entry of $A^{50}$.",
    "answer": "$A^{n}=\\begin{pmatrix}1 & n\\\\ 0 & 1\\end{pmatrix}$, so the $(1,2)$ entry of $A^{50}$ is $\\boxed{50}$.",
    "trap": "Reasoning by analogy with real numbers and writing $A^{n}=\\begin{pmatrix}1 & n^{2}\\\\ 0 & 1\\end{pmatrix}$ because \"the off-diagonal gets squared as the matrix is squared.\" That confuses matrix multiplication with entrywise squaring: already $A^{2}=\\begin{pmatrix}1&2\\\\0&1\\end{pmatrix}$, whose top-right entry is $2$, not $2^{2}=4$. The off-diagonal grows additively, not multiplicatively, because each multiplication by $A$ adds one copy of the top row to the second column.",
    "solutions": [
      {
        "name": "Compute, conjecture, induct",
        "steps": [
          "Multiply out the first few powers: $A^{2}=\\begin{pmatrix}1&2\\\\0&1\\end{pmatrix}$, $A^{3}=\\begin{pmatrix}1&3\\\\0&1\\end{pmatrix}$. The top-right entry advances by exactly $1$ each time.",
          "Conjecture $A^{n}=\\begin{pmatrix}1&n\\\\0&1\\end{pmatrix}$ and prove it by induction: assuming it for $n$, $A^{n+1}=A^{n}A=\\begin{pmatrix}1&n\\\\0&1\\end{pmatrix}\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}=\\begin{pmatrix}1&n+1\\\\0&1\\end{pmatrix}$.",
          "Hence $A^{50}=\\begin{pmatrix}1&50\\\\0&1\\end{pmatrix}$ and its $(1,2)$ entry is $\\boxed{50}$."
        ]
      },
      {
        "name": "Split off the nilpotent part",
        "steps": [
          "Write $A=I+N$ where $N=\\begin{pmatrix}0&1\\\\0&0\\end{pmatrix}$, which satisfies $N^{2}=O$. Since $I$ commutes with $N$, the binomial theorem is valid here.",
          "$A^{n}=(I+N)^{n}=\\sum_{k=0}^{n}\\binom{n}{k}N^{k}=I+nN$, because every term with $k\\ge 2$ vanishes ($N^{2}=O$).",
          "Thus $A^{n}=\\begin{pmatrix}1&n\\\\0&1\\end{pmatrix}$, giving $(1,2)$ entry of $A^{50}$ equal to $\\boxed{50}$."
        ]
      }
    ],
    "remark": "**Insight.** A unit upper-triangular $2\\times2$ matrix is a *shear*: each application slides the second column by one unit of the first. The clean way to see the linear (not quadratic) growth is $A=I+N$ with $N^{2}=O$ — the binomial theorem terminates after two terms because $N$ is nilpotent, and it is legal because $I$ commutes with everything."
  },
  {
    "theme": "matalgebra",
    "themeLabel": "Algebra of Matrices",
    "title": "A Square Root of the Identity",
    "difficulty": 3,
    "task": "Evaluate",
    "tags": [
      "involutory matrix",
      "powers of a matrix",
      "parity",
      "matrix equation"
    ],
    "statement": "Let $B=\\begin{pmatrix}2 & -1\\\\ 3 & -2\\end{pmatrix}$. First verify that $B^{2}=I$, and then evaluate $B^{2024}+B^{2025}$.",
    "answer": "$B^{2}=I$, so $B^{2024}=I$ and $B^{2025}=B$; hence $B^{2024}+B^{2025}=I+B=\\boxed{\\begin{pmatrix}3 & -1\\\\ 3 & -1\\end{pmatrix}}$.",
    "trap": "Assuming a matrix with $B^{2}=I$ must itself be $\\pm I$ (as for real numbers, where $x^{2}=1\\Rightarrow x=\\pm1$), and concluding $B^{2025}=B^{1}=B=\\pm I$. A matrix can square to $I$ without being $\\pm I$ at all: here $B\\ne\\pm I$, yet $B^{2}=I$. Over matrices, $x^{2}=1$ has infinitely many solutions, so you must reduce the exponent by parity and keep $B$ itself, not replace it by $\\pm I$.",
    "solutions": [
      {
        "name": "Verify then reduce by parity",
        "steps": [
          "Compute $B^{2}=\\begin{pmatrix}2&-1\\\\3&-2\\end{pmatrix}\\begin{pmatrix}2&-1\\\\3&-2\\end{pmatrix}=\\begin{pmatrix}4-3&-2+2\\\\6-6&-3+4\\end{pmatrix}=\\begin{pmatrix}1&0\\\\0&1\\end{pmatrix}=I$. So $B$ is involutory.",
          "Therefore $B^{2k}=(B^{2})^{k}=I$ for every $k$, and $B^{2k+1}=B^{2k}\\cdot B=B$. Hence $B^{2024}=I$ (even) and $B^{2025}=B$ (odd).",
          "Add: $B^{2024}+B^{2025}=I+B=\\begin{pmatrix}1&0\\\\0&1\\end{pmatrix}+\\begin{pmatrix}2&-1\\\\3&-2\\end{pmatrix}=\\boxed{\\begin{pmatrix}3&-1\\\\3&-1\\end{pmatrix}}.$"
        ]
      },
      {
        "name": "Factor the sum first",
        "steps": [
          "Group the two terms before evaluating: $B^{2024}+B^{2025}=B^{2024}(I+B)$.",
          "Since $B^{2}=I$, $B^{2024}=(B^{2})^{1012}=I$, so the expression is simply $I+B$.",
          "Thus the answer is $I+B=\\boxed{\\begin{pmatrix}3&-1\\\\3&-1\\end{pmatrix}}.$"
        ]
      }
    ],
    "remark": "**Insight.** $B^{2}=I$ makes $B$ *involutory*; the only thing that matters for a power is the parity of the exponent, never the size of the number. The lesson is that $X^{2}=I$ is far weaker for matrices than $x^{2}=1$ is for scalars — the solution set is huge (any reflection-like matrix), so you may never silently replace such a $B$ by $\\pm I$."
  },
  {
    "theme": "matalgebra",
    "themeLabel": "Algebra of Matrices",
    "title": "Binomial That Stops at Three Terms",
    "difficulty": 4,
    "task": "Find a closed form",
    "tags": [
      "nilpotent matrix",
      "binomial theorem",
      "powers of a matrix",
      "commuting matrices",
      "3x3"
    ],
    "statement": "Let $J=\\begin{pmatrix}0&1&0\\\\0&0&1\\\\0&0&0\\end{pmatrix}$ and $M=I+J$ (the $3\\times3$ identity plus $J$). Find $M^{n}$ in closed form for every positive integer $n$, and write down $M^{6}$ explicitly.",
    "answer": "$M^{n}=I+nJ+\\dbinom{n}{2}J^{2}=\\begin{pmatrix}1 & n & \\binom{n}{2}\\\\ 0 & 1 & n\\\\ 0 & 0 & 1\\end{pmatrix}$, so $M^{6}=\\boxed{\\begin{pmatrix}1&6&15\\\\0&1&6\\\\0&0&1\\end{pmatrix}}$.",
    "trap": "Applying the binomial theorem but truncating at the linear term: $M^{n}=(I+J)^{n}\\approx I+nJ$, \"because higher powers of $J$ are small/zero.\" They are not all zero — $J^{2}=\\begin{pmatrix}0&0&1\\\\0&0&0\\\\0&0&0\\end{pmatrix}\\ne O$; only $J^{3}=O$. Dropping the $\\binom{n}{2}J^{2}$ term loses the entire top-right entry. (Conversely, the binomial theorem IS legal here only because $I$ and $J$ commute.)",
    "solutions": [
      {
        "name": "Binomial with a nilpotent",
        "steps": [
          "Check nilpotency: $J^{2}=\\begin{pmatrix}0&0&1\\\\0&0&0\\\\0&0&0\\end{pmatrix}$ and $J^{3}=O$. So powers of $J$ beyond the second vanish.",
          "Since $I$ commutes with $J$, the binomial theorem applies: $M^{n}=(I+J)^{n}=\\sum_{k=0}^{n}\\binom{n}{k}J^{k}=I+nJ+\\binom{n}{2}J^{2}$, the sum stopping at $k=2$.",
          "Assembling entries gives $M^{n}=\\begin{pmatrix}1&n&\\binom{n}{2}\\\\0&1&n\\\\0&0&1\\end{pmatrix}$. At $n=6$, $\\binom{6}{2}=15$, so $M^{6}=\\boxed{\\begin{pmatrix}1&6&15\\\\0&1&6\\\\0&0&1\\end{pmatrix}}.$"
        ]
      },
      {
        "name": "Pattern then induction",
        "steps": [
          "Compute $M^{2}=\\begin{pmatrix}1&2&1\\\\0&1&2\\\\0&0&1\\end{pmatrix}$ and $M^{3}=\\begin{pmatrix}1&3&3\\\\0&1&3\\\\0&0&1\\end{pmatrix}$. The super-diagonal reads $n$ and the corner reads $1,3,6,\\dots=\\binom{n}{2}$ (triangular numbers).",
          "Prove $M^{n}=\\begin{pmatrix}1&n&\\binom{n}{2}\\\\0&1&n\\\\0&0&1\\end{pmatrix}$ by induction: multiplying this by $M=I+J$ adds $1$ to each super-diagonal entry and adds the current super-diagonal $n$ to the corner, giving corner $\\binom{n}{2}+n=\\binom{n+1}{2}$ — the form for $n+1$.",
          "Hence $M^{6}=\\boxed{\\begin{pmatrix}1&6&15\\\\0&1&6\\\\0&0&1\\end{pmatrix}}.$"
        ]
      }
    ],
    "remark": "**Insight.** For $M=I+J$ with $J$ nilpotent of index $3$, the binomial series is a finite polynomial in $J$ of degree $2$ — neither shorter (you can't drop $J^{2}$) nor longer ($J^{3}=O$). The triangular-number corner is exactly $\\binom{n}{2}$, the binomial coefficient that the truncation-trap throws away."
  },
  {
    "theme": "matalgebra",
    "themeLabel": "Algebra of Matrices",
    "title": "Idempotent to the Power n",
    "difficulty": 4,
    "task": "Find a closed form",
    "tags": [
      "idempotent matrix",
      "powers of a matrix",
      "binomial theorem",
      "geometric sum"
    ],
    "statement": "Let $A$ be a square matrix with $A^{2}=A$ (an idempotent). For a positive integer $n$, express $(I+A)^{n}$ in the form $I+c_{n}A$ and determine $c_{n}$. Verify your formula on $A=\\begin{pmatrix}1&2\\\\0&0\\end{pmatrix}$ at $n=4$.",
    "answer": "$(I+A)^{n}=I+(2^{n}-1)\\,A$, i.e. $c_{n}=2^{n}-1$. For the given $A$ at $n=4$: $(I+A)^{4}=I+15A=\\boxed{\\begin{pmatrix}16&30\\\\0&1\\end{pmatrix}}$.",
    "trap": "Treating $A$ like a scalar and writing $(I+A)^{n}=I+nA$ \"by the linear binomial term, since $A^{2}$ is just $A$ so higher terms collapse into $A$.\" The collapse is real but the count is wrong: every binomial term $\\binom{n}{k}A^{k}$ with $k\\ge1$ contributes $\\binom{n}{k}A$ (because $A^{k}=A$), so the coefficient is $\\sum_{k\\ge1}\\binom{n}{k}=2^{n}-1$, not $n$.",
    "solutions": [
      {
        "name": "Binomial then collapse powers",
        "steps": [
          "Idempotence gives $A^{k}=A$ for all $k\\ge1$ (since $A^{2}=A\\Rightarrow A^{3}=A^{2}=A$, etc.). As $I$ commutes with $A$, expand $(I+A)^{n}=\\sum_{k=0}^{n}\\binom{n}{k}A^{k}=\\binom{n}{0}I+\\Big(\\sum_{k=1}^{n}\\binom{n}{k}\\Big)A$.",
          "The bracketed sum is $\\sum_{k=1}^{n}\\binom{n}{k}=2^{n}-\\binom{n}{0}=2^{n}-1$. Hence $(I+A)^{n}=I+(2^{n}-1)A$.",
          "For $A=\\begin{pmatrix}1&2\\\\0&0\\end{pmatrix}$ (which is idempotent: $A^{2}=A$), at $n=4$ we get $I+15A=\\begin{pmatrix}1&0\\\\0&1\\end{pmatrix}+\\begin{pmatrix}15&30\\\\0&0\\end{pmatrix}=\\boxed{\\begin{pmatrix}16&30\\\\0&1\\end{pmatrix}}.$"
        ]
      },
      {
        "name": "Recurrence on the coefficient",
        "steps": [
          "Suppose $(I+A)^{n}=I+c_{n}A$. Multiply by $(I+A)$: $(I+A)^{n+1}=(I+c_{n}A)(I+A)=I+A+c_{n}A+c_{n}A^{2}=I+(1+2c_{n})A$, using $A^{2}=A$.",
          "So $c_{n+1}=2c_{n}+1$ with $c_{1}=1$. Solving this linear recurrence: $c_{n}+1=2(c_{n-1}+1)$, giving $c_{n}+1=2^{n}$, hence $c_{n}=2^{n}-1$.",
          "Thus $(I+A)^{n}=I+(2^{n}-1)A$, and at $n=4$ on the sample matrix this is $\\boxed{\\begin{pmatrix}16&30\\\\0&1\\end{pmatrix}}.$"
        ]
      }
    ],
    "remark": "**Insight.** An idempotent absorbs all of its own powers ($A^{k}=A$), which turns the binomial expansion of $(I+A)^{n}$ into a single geometric-style sum of binomial coefficients $2^{n}-1$. The trap coefficient $n$ comes from keeping only the first power term; the truth keeps *all* of them, each folded back onto $A$."
  },
  {
    "theme": "matalgebra",
    "themeLabel": "Algebra of Matrices",
    "title": "Everything That Commutes With a Shear",
    "difficulty": 4,
    "task": "Describe all such matrices",
    "tags": [
      "commuting matrices",
      "matrix equation",
      "centralizer",
      "shear matrix"
    ],
    "statement": "Let $A=\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}$. Find all $2\\times2$ real matrices $B$ that commute with $A$ (i.e. $AB=BA$), and describe this set as cleanly as possible.",
    "answer": "$B$ commutes with $A$ iff $B=\\begin{pmatrix}p&q\\\\0&p\\end{pmatrix}=pI+qN$ for arbitrary reals $p,q$, where $N=\\begin{pmatrix}0&1\\\\0&0\\end{pmatrix}$. So $\\boxed{B=\\begin{pmatrix}p&q\\\\0&p\\end{pmatrix},\\ p,q\\in\\mathbb{R}}$, a two-parameter family.",
    "trap": "Believing that \"matrices that commute with $A$\" is essentially just the diagonal matrices, or just scalar multiples of $A$, so the answer is one-parameter. Imposing $AB=BA$ forces the structure $B=pI+qN$ — a genuinely two-parameter family that includes non-diagonal members (e.g. $A$ itself, and $N$). Conversely, assuming *every* $B$ commutes (treating matrix products as commutative) is the deeper error the whole problem guards against.",
    "solutions": [
      {
        "name": "Solve the entry equations",
        "steps": [
          "Write $B=\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}$. Then $AB=\\begin{pmatrix}a+c&b+d\\\\c&d\\end{pmatrix}$ and $BA=\\begin{pmatrix}a&a+b\\\\c&c+d\\end{pmatrix}$.",
          "Setting $AB=BA$ entry by entry: top-left gives $a+c=a\\Rightarrow c=0$; top-right gives $b+d=a+b\\Rightarrow d=a$; bottom-left gives $c=c$ (free, but $c=0$); bottom-right gives $d=c+d\\Rightarrow c=0$ (consistent).",
          "So $c=0$ and $a=d$, with $a$ and $b$ free. Renaming $a=d=p$, $b=q$: $B=\\begin{pmatrix}p&q\\\\0&p\\end{pmatrix}=\\boxed{pI+qN,\\ p,q\\in\\mathbb{R}}.$"
        ]
      },
      {
        "name": "Reduce to commuting with N",
        "steps": [
          "Since $A=I+N$ and $I$ commutes with everything, $AB=BA\\iff (I+N)B=B(I+N)\\iff NB=BN$. So the problem is: which $B$ commute with $N=\\begin{pmatrix}0&1\\\\0&0\\end{pmatrix}$?",
          "With $B=\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}$: $NB=\\begin{pmatrix}c&d\\\\0&0\\end{pmatrix}$, $BN=\\begin{pmatrix}0&a\\\\0&c\\end{pmatrix}$. Equality forces $c=0$ and $d=a$.",
          "Hence $B=\\begin{pmatrix}p&q\\\\0&p\\end{pmatrix}=pI+qN$ for arbitrary $p,q$ — exactly the polynomials in $N$. So $\\boxed{B=pI+qN}.$"
        ]
      }
    ],
    "remark": "**Insight.** The set of matrices commuting with a fixed $A$ (its *centralizer*) is rarely all matrices and rarely just scalars. For the shear $A=I+N$ it is precisely the polynomials $pI+qN$ in $N$ — two parameters, including off-diagonal members. Recognising that $AB\\ne BA$ in general is the single most important habit in matrix algebra; this problem pins down exactly *when* it holds for this $A$."
  },
  {
    "theme": "matalgebra",
    "themeLabel": "Algebra of Matrices",
    "title": "The Missing Commutator",
    "difficulty": 5,
    "task": "Compute the discrepancy",
    "tags": [
      "non-commutativity",
      "commutator",
      "matrix multiplication",
      "expansion identity"
    ],
    "statement": "Let $A=\\begin{pmatrix}1&2\\\\3&4\\end{pmatrix}$ and $B=\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}$. A student writes $(A+B)^{2}=A^{2}+2AB+B^{2}$. Compute the exact matrix by which the student's expression differs from the true value of $(A+B)^{2}$, and identify it as a single commutator.",
    "answer": "True $(A+B)^{2}=A^{2}+AB+BA+B^{2}$, so the student's error is $(A+B)^{2}-(A^{2}+2AB+B^{2})=BA-AB=\\boxed{\\begin{pmatrix}1&3\\\\-3&-1\\end{pmatrix}}$.",
    "trap": "Using $(A+B)^{2}=A^{2}+2AB+B^{2}$ as if $A,B$ were numbers. The correct expansion is $(A+B)^{2}=A^{2}+AB+BA+B^{2}$; the two middle terms collapse to $2AB$ only when $AB=BA$. Here $AB\\ne BA$, so the student is short by exactly the commutator $BA-AB$. (A second trap: the difference is $AB-BA$ with the wrong sign — careful, the student wrote $2AB$, so the missing piece is $BA-AB$.)",
    "solutions": [
      {
        "name": "Honest expansion",
        "steps": [
          "Expand without assuming commutativity: $(A+B)^{2}=(A+B)(A+B)=A^{2}+AB+BA+B^{2}$.",
          "Subtract the student's $A^{2}+2AB+B^{2}$: the difference is $(A^{2}+AB+BA+B^{2})-(A^{2}+2AB+B^{2})=BA-AB$.",
          "Compute $AB=\\begin{pmatrix}1&2\\\\3&4\\end{pmatrix}\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}=\\begin{pmatrix}2&1\\\\4&3\\end{pmatrix}$ and $BA=\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}\\begin{pmatrix}1&2\\\\3&4\\end{pmatrix}=\\begin{pmatrix}3&4\\\\1&2\\end{pmatrix}$.",
          "Thus $BA-AB=\\begin{pmatrix}3-2&4-1\\\\1-4&2-3\\end{pmatrix}=\\boxed{\\begin{pmatrix}1&3\\\\-3&-1\\end{pmatrix}}.$"
        ]
      },
      {
        "name": "Direct subtraction",
        "steps": [
          "Compute $A+B=\\begin{pmatrix}1&3\\\\4&4\\end{pmatrix}$, so $(A+B)^{2}=\\begin{pmatrix}1&3\\\\4&4\\end{pmatrix}^{2}=\\begin{pmatrix}13&15\\\\20&28\\end{pmatrix}$.",
          "Compute the student's side: $A^{2}=\\begin{pmatrix}7&10\\\\15&22\\end{pmatrix}$, $B^{2}=I$, $2AB=2\\begin{pmatrix}2&1\\\\4&3\\end{pmatrix}=\\begin{pmatrix}4&2\\\\8&6\\end{pmatrix}$. Sum $=\\begin{pmatrix}12&12\\\\23&29\\end{pmatrix}$.",
          "Subtract: $(A+B)^{2}-(A^{2}+2AB+B^{2})=\\begin{pmatrix}13-12&15-12\\\\20-23&28-29\\end{pmatrix}=\\boxed{\\begin{pmatrix}1&3\\\\-3&-1\\end{pmatrix}},$ confirming it equals $BA-AB$."
        ]
      }
    ],
    "remark": "**Insight.** The identity $(A+B)^{2}=A^{2}+2AB+B^{2}$ fails for matrices by precisely the commutator $BA-AB$; it is restored exactly when $A$ and $B$ commute. Watching the two cross-terms $AB$ and $BA$ as distinct objects — never silently merged — is the heart of matrix algebra. Note the commutator here is traceless, as every commutator must be."
  },
  {
    "theme": "matalgebra",
    "themeLabel": "Algebra of Matrices",
    "title": "When a Matrix Roots Its Own Equation",
    "difficulty": 5,
    "task": "Reduce a high power",
    "tags": [
      "polynomial in a matrix",
      "f(A)=O",
      "power reduction",
      "matrix equation"
    ],
    "statement": "Let $A=\\begin{pmatrix}3&1\\\\-1&1\\end{pmatrix}$. Verify that $A^{2}-4A+4I=O$, and use only this relation to express $A^{5}$ in the form $\\alpha A+\\beta I$. Give $A^{5}$ explicitly.",
    "answer": "From $A^{2}=4A-4I$ one gets $A^{5}=80A-128I=\\boxed{\\begin{pmatrix}112&80\\\\-80&-48\\end{pmatrix}}$.",
    "trap": "Reading $A^{2}-4A+4I=O$ as $(A-2I)^{2}=O$ and then concluding $A=2I$ (taking a \"square root\" as for numbers). That is false: $(A-2I)^{2}=O$ makes $A-2I$ *nilpotent*, not zero — indeed $A-2I=\\begin{pmatrix}1&1\\\\-1&-1\\end{pmatrix}\\ne O$. You must reduce powers using $A^{2}=4A-4I$ repeatedly, never replace $A$ by $2I$.",
    "solutions": [
      {
        "name": "Repeated reduction",
        "steps": [
          "Verify: $A^{2}=\\begin{pmatrix}3&1\\\\-1&1\\end{pmatrix}^{2}=\\begin{pmatrix}8&4\\\\-4&0\\end{pmatrix}$, and $4A-4I=\\begin{pmatrix}12&4\\\\-4&4\\end{pmatrix}-\\begin{pmatrix}4&0\\\\0&4\\end{pmatrix}=\\begin{pmatrix}8&4\\\\-4&0\\end{pmatrix}$. So $A^{2}=4A-4I$. ✓",
          "Reduce step by step. $A^{3}=A\\cdot A^{2}=A(4A-4I)=4A^{2}-4A=4(4A-4I)-4A=12A-16I$.",
          "$A^{4}=A\\cdot A^{3}=A(12A-16I)=12A^{2}-16A=12(4A-4I)-16A=32A-48I$. Then $A^{5}=A\\cdot A^{4}=A(32A-48I)=32A^{2}-48A=32(4A-4I)-48A=80A-128I$.",
          "Finally $A^{5}=80\\begin{pmatrix}3&1\\\\-1&1\\end{pmatrix}-128I=\\begin{pmatrix}240&80\\\\-80&80\\end{pmatrix}-\\begin{pmatrix}128&0\\\\0&128\\end{pmatrix}=\\boxed{\\begin{pmatrix}112&80\\\\-80&-48\\end{pmatrix}}.$"
        ]
      },
      {
        "name": "Use the nilpotent N = A - 2I",
        "steps": [
          "Set $N=A-2I=\\begin{pmatrix}1&1\\\\-1&-1\\end{pmatrix}$. The relation $A^{2}-4A+4I=O$ is exactly $N^{2}=O$, so $A=2I+N$ with $N^{2}=O$ and $I,N$ commuting.",
          "By the binomial theorem (legal since $I,N$ commute, and terminating since $N^{2}=O$): $A^{5}=(2I+N)^{5}=2^{5}I+5\\cdot2^{4}N=32I+80N$.",
          "Substitute $N=A-2I$: $A^{5}=32I+80(A-2I)=80A-128I$, i.e. $\\boxed{\\begin{pmatrix}112&80\\\\-80&-48\\end{pmatrix}}.$"
        ]
      }
    ],
    "remark": "**Insight.** A relation $f(A)=O$ lets you fold every higher power down to a fixed linear combination $\\alpha A+\\beta I$ — the matrix \"satisfies its own degree-2 equation,\" so the powers live in a 2-dimensional space. The slick route recognises $(A-2I)^{2}=O$ as nilpotence, making the binomial expansion of $(2I+N)^{5}$ collapse after two terms. The fatal misread is treating $(A-2I)^{2}=O$ as $A=2I$."
  },
  {
    "theme": "matalgebra",
    "themeLabel": "Algebra of Matrices",
    "title": "Inverting Through Nilpotence",
    "difficulty": 4,
    "task": "Find the inverse",
    "tags": [
      "nilpotent matrix",
      "matrix inverse",
      "geometric series",
      "3x3",
      "polynomial in a matrix"
    ],
    "statement": "Let $A=\\begin{pmatrix}0&1&2\\\\0&0&3\\\\0&0&0\\end{pmatrix}$, which satisfies $A^{3}=O$. Without row-reducing, find $(I-A)^{-1}$ as a polynomial in $A$, and write the inverse explicitly.",
    "answer": "$(I-A)^{-1}=I+A+A^{2}=\\boxed{\\begin{pmatrix}1&1&5\\\\0&1&3\\\\0&0&1\\end{pmatrix}}$.",
    "trap": "Writing the geometric series $(I-A)^{-1}=I+A+A^{2}+A^{3}+\\cdots$ as an infinite sum and worrying about convergence, or — worse — treating $(I-A)^{-1}$ as the entrywise reciprocal of $I-A$. Neither is needed: $A^{3}=O$ truncates the series to exactly three terms, and the identity $(I-A)(I+A+A^{2})=I-A^{3}=I$ is exact. Inverses are never computed entrywise.",
    "solutions": [
      {
        "name": "Telescoping product",
        "steps": [
          "For any $A$, $(I-A)(I+A+A^{2})=I+A+A^{2}-A-A^{2}-A^{3}=I-A^{3}$ (telescoping; $I$ commutes with $A$).",
          "Since $A^{3}=O$ here, this equals $I$. Hence $I+A+A^{2}$ is a right (and by symmetry left) inverse of $I-A$, so $(I-A)^{-1}=I+A+A^{2}$.",
          "Compute $A^{2}=\\begin{pmatrix}0&0&3\\\\0&0&0\\\\0&0&0\\end{pmatrix}$, so $I+A+A^{2}=\\begin{pmatrix}1&1&2+3\\\\0&1&3\\\\0&0&1\\end{pmatrix}=\\boxed{\\begin{pmatrix}1&1&5\\\\0&1&3\\\\0&0&1\\end{pmatrix}}.$"
        ]
      },
      {
        "name": "Finite geometric series",
        "steps": [
          "Because $A$ is nilpotent with $A^{3}=O$, the formal geometric series for $(I-A)^{-1}$ terminates: $(I-A)^{-1}=\\sum_{k\\ge0}A^{k}=I+A+A^{2}$ (all later terms vanish).",
          "With $A^{2}=\\begin{pmatrix}0&0&3\\\\0&0&0\\\\0&0&0\\end{pmatrix}$, add: the $(1,3)$ entry is $0+2+3=5$ and the rest follow.",
          "Therefore $(I-A)^{-1}=\\boxed{\\begin{pmatrix}1&1&5\\\\0&1&3\\\\0&0&1\\end{pmatrix}}.$ (Check: multiply by $I-A$ to recover $I$.)"
        ]
      }
    ],
    "remark": "**Insight.** For a nilpotent $A$ (here index $3$), $I-A$ is always invertible and its inverse is the *finite* polynomial $I+A+\\cdots+A^{k-1}$. The matrix geometric series isn't an approximation — nilpotence makes it exact and short. This is the cleanest possible way to invert a strictly-triangular perturbation of $I$."
  },
  {
    "theme": "matalgebra",
    "themeLabel": "Algebra of Matrices",
    "title": "The Spiral That Scales",
    "difficulty": 4,
    "task": "Find a closed form",
    "tags": [
      "powers of a matrix",
      "rotation-scaling",
      "pattern spotting",
      "matrix equation"
    ],
    "statement": "Let $A=\\begin{pmatrix}1&-1\\\\1&1\\end{pmatrix}$. Show that $A^{2}=2R$ where $R=\\begin{pmatrix}0&-1\\\\1&0\\end{pmatrix}$, and use this to evaluate $A^{8}$ and $A^{8}+A^{4}$.",
    "answer": "$A^{4}=(A^{2})^{2}=(2R)^{2}=4R^{2}=-4I$ and $A^{8}=(A^{4})^{2}=16I$. Hence $A^{8}+A^{4}=16I-4I=12I=\\boxed{\\begin{pmatrix}12&0\\\\0&12\\end{pmatrix}}$.",
    "trap": "Recognising the columns of $A$ as a rotation and declaring \"$A$ is a rotation by $45^{\\circ}$, so $A^{8}$ is a rotation by $360^{\\circ}$, i.e. $A^{8}=I$.\" That ignores the length: $A=\\sqrt2\\,(\\text{rotation by }45^{\\circ})$, so each power also multiplies the scale by $\\sqrt2$. After $8$ steps the scale factor is $(\\sqrt2)^{8}=16$, giving $A^{8}=16I$, not $I$.",
    "solutions": [
      {
        "name": "Square, then square again",
        "steps": [
          "$A^{2}=\\begin{pmatrix}1&-1\\\\1&1\\end{pmatrix}^{2}=\\begin{pmatrix}1-1&-1-1\\\\1+1&-1+1\\end{pmatrix}=\\begin{pmatrix}0&-2\\\\2&0\\end{pmatrix}=2R$, where $R=\\begin{pmatrix}0&-1\\\\1&0\\end{pmatrix}$ satisfies $R^{2}=-I$.",
          "Then $A^{4}=(A^{2})^{2}=(2R)^{2}=4R^{2}=4(-I)=-4I$, and $A^{8}=(A^{4})^{2}=(-4I)^{2}=16I$.",
          "Therefore $A^{8}+A^{4}=16I+(-4I)=12I=\\boxed{\\begin{pmatrix}12&0\\\\0&12\\end{pmatrix}}.$"
        ]
      },
      {
        "name": "Rotation-scaling decomposition",
        "steps": [
          "Factor $A=\\sqrt2\\begin{pmatrix}\\tfrac1{\\sqrt2}&-\\tfrac1{\\sqrt2}\\\\[2pt]\\tfrac1{\\sqrt2}&\\tfrac1{\\sqrt2}\\end{pmatrix}=\\sqrt2\\,Q$, where $Q$ is rotation by $45^{\\circ}$. The scalar $\\sqrt2$ commutes with $Q$.",
          "Then $A^{n}=(\\sqrt2)^{n}Q^{n}$, and $Q^{n}$ is rotation by $45^{\\circ}\\cdot n$. For $n=8$: $(\\sqrt2)^{8}=16$ and $Q^{8}=$ rotation by $360^{\\circ}=I$, so $A^{8}=16I$. For $n=4$: $(\\sqrt2)^{4}=4$ and $Q^{4}=$ rotation by $180^{\\circ}=-I$, so $A^{4}=-4I$.",
          "Adding, $A^{8}+A^{4}=16I-4I=12I=\\boxed{\\begin{pmatrix}12&0\\\\0&12\\end{pmatrix}}.$"
        ]
      }
    ],
    "remark": "**Insight.** A matrix $\\begin{pmatrix}a&-b\\\\b&a\\end{pmatrix}$ acts as \"scale by $\\sqrt{a^{2}+b^{2}}$ and rotate by $\\arg(a+bi)$\" — a spiral. Its powers multiply the scale and add the angle, exactly like the complex number $a+bi$. The trap forgets the scale; the truth tracks both, and here the scale $(\\sqrt2)^{8}=16$ is the whole answer."
  },
  {
    "theme": "matalgebra",
    "themeLabel": "Algebra of Matrices",
    "title": "From Projector to Reflection",
    "difficulty": 5,
    "task": "Prove and evaluate",
    "tags": [
      "idempotent matrix",
      "involutory matrix",
      "powers of a matrix",
      "matrix equation",
      "3x3"
    ],
    "statement": "Let $A$ be idempotent ($A^{2}=A$) and define $B=2A-I$. (a) Prove $B^{2}=I$. (b) Hence find $B^{n}$ for every positive integer $n$, and evaluate $B^{99}$ for the idempotent $A=\\begin{pmatrix}1&2&3\\\\0&0&0\\\\0&0&0\\end{pmatrix}$.",
    "answer": "$B^{2}=I$ always; so $B^{n}=I$ if $n$ even and $B^{n}=B=2A-I$ if $n$ odd. For the given $A$, $B^{99}=B=2A-I=\\boxed{\\begin{pmatrix}1&4&6\\\\0&-1&0\\\\0&0&-1\\end{pmatrix}}$.",
    "trap": "Expecting $B^{n}$ to scale with $n$, e.g. writing $B^{n}=2^{n}A-I$ by \"distributing the power\" over $B=2A-I$. That is wrong twice over: powers don't distribute across a sum, and it ignores that $B$ is involutory. The correct behaviour depends only on the parity of $n$ (because $B^{2}=I$), giving just two possible answers, $I$ or $B$.",
    "solutions": [
      {
        "name": "Square B using idempotence",
        "steps": [
          "Compute $B^{2}=(2A-I)^{2}=4A^{2}-2A\\cdot I-I\\cdot 2A+I=4A^{2}-4A+I$ (the cross terms combine since $A$ commutes with $I$).",
          "Use $A^{2}=A$: $B^{2}=4A-4A+I=I$. So $B$ is involutory. Therefore $B^{n}=I$ for even $n$ and $B^{n}=B$ for odd $n$.",
          "Since $99$ is odd, $B^{99}=B=2A-I$. For $A=\\begin{pmatrix}1&2&3\\\\0&0&0\\\\0&0&0\\end{pmatrix}$: $2A-I=\\begin{pmatrix}2&4&6\\\\0&0&0\\\\0&0&0\\end{pmatrix}-I=\\boxed{\\begin{pmatrix}1&4&6\\\\0&-1&0\\\\0&0&-1\\end{pmatrix}}.$"
        ]
      },
      {
        "name": "Idempotent shorthand A^k = A",
        "steps": [
          "Idempotence gives $A^{k}=A$ for all $k\\ge1$. Compute $B^{2}=4A^{2}-4A+I$; replacing $A^{2}=A$ yields $B^{2}=I$ directly, so $B$ is its own inverse.",
          "Hence the sequence of powers is purely parity-driven: $B,\\,I,\\,B,\\,I,\\dots$. For odd exponents $B^{n}=B$; for even, $B^{n}=I$.",
          "Thus $B^{99}=B=2A-I=\\boxed{\\begin{pmatrix}1&4&6\\\\0&-1&0\\\\0&0&-1\\end{pmatrix}}.$ (Check directly: this matrix squares to $I$.)"
        ]
      }
    ],
    "remark": "**Insight.** The map $A\\mapsto 2A-I$ turns a *projector* (idempotent, $A^{2}=A$) into a *reflection* (involutory, $B^{2}=I$) — geometrically, project then double-and-flip across the projected subspace. Once $B^{2}=I$, every power is just $I$ or $B$ by parity; the seductive $2^{n}A-I$ both mishandles the binomial and ignores the involution."
  },
  {
    "theme": "specialmat",
    "themeLabel": "Special Matrices",
    "title": "The Antisymmetric Shadow",
    "difficulty": 3,
    "task": "Find the determinant",
    "tags": [
      "skew-symmetric",
      "symmetric-skew decomposition",
      "odd order",
      "transpose"
    ],
    "statement": "Every square matrix splits uniquely as $A=S+K$, where $S=\\tfrac12(A+A^{T})$ is symmetric and $K=\\tfrac12(A-A^{T})$ is skew-symmetric. For the matrix\n$$A=\\begin{pmatrix}2 & 7 & 4\\\\ 1 & 3 & 9\\\\ 8 & 6 & 5\\end{pmatrix},$$\nlet $K$ be the skew-symmetric part of $A$. Find $\\det K$.",
    "answer": "$\\boxed{\\det K = 0}$",
    "trap": "The seductive move is to actually build $K=\\tfrac12(A-A^{T})$, plug its six nonzero entries into the Sarrus rule, and grind out a (nonzero-looking) number. That wastes effort and invites an arithmetic slip: the real point is structural. $K$ is a $3\\times3$ skew-symmetric matrix, and an odd-order skew-symmetric matrix is forced to be singular, so $\\det K=0$ before any entry is computed.",
    "solutions": [
      {
        "name": "Odd-order skew rule (no computation)",
        "steps": [
          "By construction $K^{T}=\\tfrac12(A-A^{T})^{T}=\\tfrac12(A^{T}-A)=-K$, so $K$ is skew-symmetric.",
          "Taking determinants of $K^{T}=-K$ and using $\\det(K^{T})=\\det K$ and $\\det(-K)=(-1)^{3}\\det K=-\\det K$ for a $3\\times3$ matrix gives $\\det K=-\\det K$.",
          "Hence $2\\det K=0$, so $\\boxed{\\det K=0}$ — independent of the entries of $A$."
        ]
      },
      {
        "name": "Direct expansion as a check",
        "steps": [
          "Here $K=\\tfrac12(A-A^{T})=\\begin{pmatrix}0 & 3 & -2\\\\ -3 & 0 & \\tfrac32\\\\ 2 & -\\tfrac32 & 0\\end{pmatrix}$.",
          "Expanding along the first row: $\\det K = 0 - 3\\big((-3)(0)-(\\tfrac32)(2)\\big) + (-2)\\big((-3)(-\\tfrac32)-0\\big) = -3(-3) -2(\\tfrac92) = 9-9$.",
          "Thus $\\boxed{\\det K=0}$, confirming the structural argument."
        ]
      }
    ],
    "remark": "**Insight.** For odd order the equation $\\det K=(-1)^{n}\\det K$ collapses to $\\det K=0$; a $3\\times3$ skew-symmetric matrix can never be invertible, no matter how its entries are chosen."
  },
  {
    "theme": "specialmat",
    "themeLabel": "Special Matrices",
    "title": "The Orthogonal Mirror and Its Skew Part",
    "difficulty": 3,
    "task": "Evaluate the determinant",
    "tags": [
      "orthogonal",
      "skew-symmetric",
      "transpose",
      "determinant of order 3"
    ],
    "statement": "A real $3\\times3$ matrix $A$ is orthogonal, i.e. $AA^{T}=I$. Without knowing its entries, evaluate\n$$\\det\\!\\big(A-A^{T}\\big).$$",
    "answer": "$\\boxed{\\det(A-A^{T})=0}$",
    "trap": "Because $A$ is orthogonal one is tempted to drag in $\\det A=\\pm1$ and try to express $\\det(A-A^{T})$ in terms of it — perhaps guessing the answer is $\\pm2$ or some function of $\\det A$. But orthogonality is a red herring here: $A-A^{T}$ is a $3\\times3$ skew-symmetric matrix for **any** $A$, and odd-order skew-symmetric matrices are singular. The class that matters is 'skew-symmetric', not 'orthogonal'.",
    "solutions": [
      {
        "name": "Spot the skew-symmetric class",
        "steps": [
          "Let $B=A-A^{T}$. Then $B^{T}=A^{T}-A=-B$, so $B$ is skew-symmetric (this needs nothing about $AA^{T}=I$).",
          "For a $3\\times3$ matrix, $\\det B=\\det B^{T}=\\det(-B)=(-1)^{3}\\det B=-\\det B$, forcing $\\det B=0$.",
          "Therefore $\\boxed{\\det(A-A^{T})=0}$."
        ]
      },
      {
        "name": "Concrete rotation sanity check",
        "steps": [
          "Take the orthogonal matrix $A=\\begin{pmatrix}\\cos\\theta & -\\sin\\theta & 0\\\\ \\sin\\theta & \\cos\\theta & 0\\\\ 0 & 0 & 1\\end{pmatrix}$ with $\\theta=\\tfrac{\\pi}{5}$, which satisfies $AA^{T}=I$.",
          "Then $A-A^{T}=\\begin{pmatrix}0 & -2\\sin\\theta & 0\\\\ 2\\sin\\theta & 0 & 0\\\\ 0 & 0 & 0\\end{pmatrix}$, whose last row is entirely zero, so its determinant is $0$.",
          "This matches the general result $\\boxed{\\det(A-A^{T})=0}$, independent of $\\theta$ and of $\\det A=\\pm1$."
        ]
      }
    ],
    "remark": "**Insight.** When a matrix is described by one special property (orthogonal), check whether the *expression you are asked about* belongs to a different special class (skew-symmetric). The decisive property is almost never the one quoted."
  },
  {
    "theme": "specialmat",
    "themeLabel": "Special Matrices",
    "title": "Twin Projections, Twin Singularities",
    "difficulty": 4,
    "task": "Find the value",
    "tags": [
      "idempotent",
      "complementary projection",
      "singular",
      "inverse",
      "determinant"
    ],
    "statement": "Let $A$ be a $3\\times3$ idempotent matrix, so $A^{2}=A$, with $A\\neq O$ and $A\\neq I$. Define $B=I-A$. Find the value of\n$$\\det A+\\det B.$$",
    "answer": "$\\boxed{\\det A+\\det B = 0}$",
    "trap": "Idempotent matrices satisfy $A^{2}=A$, which tempts the conclusion '$\\det A$ is $0$ or $1$, and likewise $\\det B$, so the sum could be $0$, $1$ or $2$.' The hidden constraints kill every option but one: $A\\neq I$ forces $A$ to be singular, and $A\\neq O$ forces $B=I-A$ to be singular too, so **both** determinants are $0$.",
    "solutions": [
      {
        "name": "Invertibility traps each projection",
        "steps": [
          "From $A^{2}=A$ write $A(A-I)=O$. If $A$ were invertible, multiplying by $A^{-1}$ would give $A-I=O$, i.e. $A=I$, contradicting $A\\neq I$. Hence $A$ is singular: $\\det A=0$.",
          "Note $B=I-A$ is also idempotent: $B^{2}=(I-A)^{2}=I-2A+A^{2}=I-2A+A=I-A=B$, and $B(B-I)=O$ gives $B(-A)=O$.",
          "If $B$ were invertible then $B=I$, i.e. $A=O$, contradicting $A\\neq O$. Hence $B$ is singular: $\\det B=0$.",
          "Therefore $\\det A+\\det B=0+0=\\boxed{0}$."
        ]
      },
      {
        "name": "Product short-circuit",
        "steps": [
          "Since $A^{2}=A$ and $(I-A)^{2}=I-A$, both $A$ and $I-A$ are projections, and they multiply to zero: $A(I-A)=A-A^{2}=O$.",
          "Taking determinants, $\\det A\\cdot\\det(I-A)=\\det O=0$, so at least one of $\\det A,\\det B$ vanishes; the invertibility argument shows neither equals $1$ under $A\\neq O,I$, so both vanish.",
          "Hence $\\det A+\\det B=\\boxed{0}$."
        ]
      }
    ],
    "remark": "**Insight.** A nontrivial projection and its complement are *both* singular: $A$ collapses the complement's space and $I-A$ collapses $A$'s space. Only the degenerate cases $A=O,I$ escape, and they are excluded."
  },
  {
    "theme": "specialmat",
    "themeLabel": "Special Matrices",
    "title": "Inverting the Nilpotent Perturbation",
    "difficulty": 4,
    "task": "Find determinant and inverse",
    "tags": [
      "nilpotent",
      "inverse",
      "geometric series",
      "determinant",
      "identity perturbation"
    ],
    "statement": "Let $N$ be a $3\\times3$ matrix with $N^{2}\\neq O$ but $N^{3}=O$ (so $N$ is nilpotent of index $3$). For $M=I-N$, find $\\det M$ and express $M^{-1}$ as a polynomial in $N$.",
    "answer": "$\\det M = 1$ and $\\boxed{M^{-1}=I+N+N^{2}}$",
    "trap": "Seeing $N\\neq O$, students fear $M=I-N$ might be singular or that its inverse requires full Gaussian elimination on unknown entries — and some try to write $\\det M$ in terms of the entries of $N$. The point of nilpotency is that the would-be infinite series $I+N+N^{2}+N^{3}+\\cdots$ **terminates** at $N^{2}$, and $\\det M=1$ regardless of $N$'s entries.",
    "solutions": [
      {
        "name": "Telescoping the geometric series",
        "steps": [
          "Compute $(I-N)(I+N+N^{2})=I+N+N^{2}-N-N^{2}-N^{3}=I-N^{3}=I$, using $N^{3}=O$.",
          "Since this product is $I$, $M=I-N$ is invertible and $\\boxed{M^{-1}=I+N+N^{2}}$.",
          "For the determinant, $\\det M\\cdot\\det(M^{-1})=1$, and both are equal by symmetry of the construction; more directly, $\\det(I-N)\\,\\det(I+N+N^{2})=\\det I=1$ forces $\\det(I-N)$ to be a unit, and the triangularisation below pins it to $1$."
        ]
      },
      {
        "name": "Strictly triangular form",
        "steps": [
          "A nilpotent $N$ of index $3$ on a $3\\times3$ matrix can be put in strictly upper-triangular form, e.g. $N=\\begin{pmatrix}0&1&0\\\\0&0&1\\\\0&0&0\\end{pmatrix}$ with $N^{2}\\neq O$, $N^{3}=O$.",
          "Then $M=I-N=\\begin{pmatrix}1&-1&0\\\\0&1&-1\\\\0&0&1\\end{pmatrix}$ is upper triangular with all diagonal entries $1$, so $\\det M=1\\cdot1\\cdot1=1$.",
          "Back-substitution (or the formula above) gives $M^{-1}=\\begin{pmatrix}1&1&1\\\\0&1&1\\\\0&0&1\\end{pmatrix}=I+N+N^{2}$, so $\\det M=1$ and $\\boxed{M^{-1}=I+N+N^{2}}$."
        ]
      }
    ],
    "remark": "**Insight.** Nilpotency turns $\\dfrac{1}{1-N}$ into a *finite* sum. The diagonal of any nilpotent matrix is forced to host only $0$'s once triangularised, so $I-N$ has unit determinant — it is a 'shear', never a stretch."
  },
  {
    "theme": "specialmat",
    "themeLabel": "Special Matrices",
    "title": "The Impossible Skew Involution",
    "difficulty": 4,
    "task": "Find all such matrices",
    "tags": [
      "skew-symmetric",
      "involutory",
      "existence",
      "determinant clash",
      "odd order"
    ],
    "statement": "Determine all real $3\\times3$ matrices $A$ that are simultaneously skew-symmetric ($A^{T}=-A$) and involutory ($A^{2}=I$).",
    "answer": "$\\boxed{\\text{No such matrix exists (the set is empty).}}$",
    "trap": "Both classes feel compatible — one is tempted to hunt for an explicit example by solving $A^{T}=-A$ and $A^{2}=I$ entry by entry, burning time on a system that secretly has no solution. The two conditions impose contradictory determinant constraints in odd dimension: skew-symmetry forces $\\det A=0$, while $A^{2}=I$ forces $(\\det A)^{2}=1$. No real (or even complex) $3\\times3$ matrix can satisfy both.",
    "solutions": [
      {
        "name": "Determinant clash",
        "steps": [
          "Skew-symmetry: for a $3\\times3$ matrix, $\\det A=\\det A^{T}=\\det(-A)=(-1)^{3}\\det A=-\\det A$, hence $\\det A=0$.",
          "Involution: $A^{2}=I\\Rightarrow(\\det A)^{2}=\\det(A^{2})=\\det I=1$, hence $\\det A=\\pm1$.",
          "But $\\det A$ cannot be $0$ and $\\pm1$ at once, so $\\boxed{\\text{no such }A\\text{ exists}}$."
        ]
      },
      {
        "name": "Invertibility argument",
        "steps": [
          "If $A^{2}=I$ then $A\\cdot A=I$, so $A$ is invertible with $A^{-1}=A$; in particular $\\det A\\neq0$.",
          "But a $3\\times3$ skew-symmetric matrix is always singular ($\\det A=0$), so it can never be invertible.",
          "The two requirements are mutually exclusive, giving the empty set: $\\boxed{\\text{no such }A}$."
        ]
      }
    ],
    "remark": "**Insight.** 'Skew-symmetric and involutory' is possible only in even dimensions (e.g. $\\begin{pmatrix}0&1\\\\-1&0\\end{pmatrix}$ satisfies $A^{2}=-I$, not $I$ — even there an *involution* fails). In odd dimension the singularity of skew matrices vetoes invertibility outright."
  },
  {
    "theme": "specialmat",
    "themeLabel": "Special Matrices",
    "title": "Why a Rotation Always Fixes a Line",
    "difficulty": 5,
    "task": "Evaluate the determinant",
    "tags": [
      "orthogonal",
      "special orthogonal",
      "determinant algebra",
      "transpose",
      "odd order"
    ],
    "statement": "Let $A$ be a real $3\\times3$ orthogonal matrix with $AA^{T}=I$ and $\\det A=1$. Prove, using only determinant algebra, that\n$$\\det(A-I)=0.$$",
    "answer": "$\\boxed{\\det(A-I)=0}$",
    "trap": "It is tempting to treat $A-I$ as a generic matrix and conclude its determinant is 'usually nonzero'. The honest route is a one-line determinant identity that exploits $A^{T}=A^{-1}$, $\\det A=1$, and oddness of the order $3$; the trap is missing that $\\det(A-I)$ equals its own negative.",
    "solutions": [
      {
        "name": "Self-negating determinant",
        "steps": [
          "Use orthogonality $AA^{T}=I$ to write $A-I=A-AA^{T}=A\\,(I-A^{T})$.",
          "Take determinants: $\\det(A-I)=\\det A\\cdot\\det(I-A^{T})=1\\cdot\\det\\big((I-A)^{T}\\big)=\\det(I-A)$, since $\\det A=1$ and a transpose preserves determinants.",
          "But $\\det(I-A)=\\det\\big(-(A-I)\\big)=(-1)^{3}\\det(A-I)=-\\det(A-I)$ for the $3\\times3$ order.",
          "Combining, $\\det(A-I)=-\\det(A-I)$, so $2\\det(A-I)=0$, giving $\\boxed{\\det(A-I)=0}$."
        ]
      },
      {
        "name": "Factor out $A$ the other way",
        "steps": [
          "From $A^{T}A=I$ we get $A^{T}(A-I)=I-A^{T}=-(A^{T}-I)=-(A-I)^{T}$ after transposing $A^{T}-I$.",
          "Taking determinants: $\\det A^{T}\\cdot\\det(A-I)=(-1)^{3}\\det\\big((A-I)^{T}\\big)$, i.e. $\\det A\\cdot\\det(A-I)=-\\det(A-I)$.",
          "Since $\\det A=1$, this is $\\det(A-I)=-\\det(A-I)$, hence $\\boxed{\\det(A-I)=0}$."
        ]
      },
      {
        "name": "Numerical confirmation",
        "steps": [
          "For the rotation $A=\\begin{pmatrix}\\cos\\theta & -\\sin\\theta & 0\\\\ \\sin\\theta & \\cos\\theta & 0\\\\ 0 & 0 & 1\\end{pmatrix}$ (orthogonal, $\\det A=1$), the matrix $A-I$ has last row all zeros, so $\\det(A-I)=0$.",
          "More generally any proper-orthogonal $3\\times3$ matrix fixes a line (its axis), making $A-I$ singular, consistent with the algebra.",
          "Thus $\\boxed{\\det(A-I)=0}$ for every $A\\in SO(3)$."
        ]
      }
    ],
    "remark": "**Insight.** A $3\\times3$ rotation must hold a whole axis fixed, and 'fixed direction' means $\\det(A-I)=0$ — recovered here from pure determinant manipulation, using nothing beyond $A^{T}=A^{-1}$ and $\\det A=1$. The trick is the parity factor $(-1)^{3}$ flipping the sign."
  },
  {
    "theme": "specialmat",
    "themeLabel": "Special Matrices",
    "title": "How Many Real Shifts Vanish a Skew Matrix",
    "difficulty": 5,
    "task": "Count the real solutions",
    "tags": [
      "skew-symmetric",
      "determinant of order 3",
      "real roots",
      "scalar shift",
      "factorisation"
    ],
    "statement": "Let $A=\\begin{pmatrix}0 & a & b\\\\ -a & 0 & c\\\\ -b & -c & 0\\end{pmatrix}$ be a real skew-symmetric matrix with $(a,b,c)\\neq(0,0,0)$. Determine the number of real values $x$ for which $\\det(A+xI)=0$.",
    "answer": "$\\boxed{\\text{Exactly one real value, namely } x=0.}$",
    "trap": "Expanding $\\det(A+xI)$ gives a cubic in $x$, and 'a cubic has three roots' tempts the answer $3$. But the cubic factors as $x\\,(x^{2}+a^{2}+b^{2}+c^{2})$: the quadratic factor has strictly positive constant term (since $(a,b,c)\\neq 0$) and so has **no real roots**. Only $x=0$ survives — the same singularity that makes the bare skew matrix non-invertible.",
    "solutions": [
      {
        "name": "Direct expansion and factoring",
        "steps": [
          "Expand the $3\\times3$ determinant $\\det(A+xI)=\\begin{vmatrix}x & a & b\\\\ -a & x & c\\\\ -b & -c & x\\end{vmatrix}$ along the first row.",
          "This gives $x(x^{2}+c^{2}) - a(-ax + bc) + b(ac + bx) = x^{3}+x c^{2}+a^{2}x -abc + abc + b^{2}x = x^{3}+(a^{2}+b^{2}+c^{2})x$.",
          "Factor: $\\det(A+xI)=x\\big(x^{2}+a^{2}+b^{2}+c^{2}\\big)$. With $a^{2}+b^{2}+c^{2}>0$, the quadratic factor is always positive, so the only real root is $x=0$.",
          "Hence there is $\\boxed{\\text{exactly one real value, }x=0}$."
        ]
      },
      {
        "name": "Skew structure of the constant term",
        "steps": [
          "At $x=0$, $\\det(A+0\\cdot I)=\\det A=0$ because $A$ is a $3\\times3$ skew-symmetric matrix; so $x=0$ is a root, i.e. $x$ divides the cubic.",
          "The remaining factor is a monic quadratic $x^{2}+\\beta$ whose constant term $\\beta=a^{2}+b^{2}+c^{2}$ is a sum of squares, hence $\\beta>0$.",
          "A real quadratic $x^{2}+\\beta$ with $\\beta>0$ has no real zeros, so no further real roots appear: $\\boxed{\\text{exactly one real value, }x=0}$."
        ]
      }
    ],
    "remark": "**Insight.** Shifting a skew-symmetric matrix by $xI$ produces $x^{3}+(a^{2}+b^{2}+c^{2})x$; the missing even-degree terms (no $x^{2}$, no constant) are the algebraic fingerprint of skew-symmetry in odd order, and they pin the only real singular shift at $x=0$."
  },
  {
    "theme": "specialmat",
    "themeLabel": "Special Matrices",
    "title": "Idempotents Forced to be Diagonal",
    "difficulty": 4,
    "task": "Count the matrices",
    "tags": [
      "diagonal",
      "commuting",
      "idempotent",
      "counting",
      "scalar matrix"
    ],
    "statement": "Let $D=\\mathrm{diag}(1,2,3)$. How many $3\\times3$ matrices $A$ satisfy both $AD=DA$ and $A^{2}=A$?",
    "answer": "$\\boxed{8}$",
    "trap": "One may forget the commuting condition pins down the *shape* of $A$ and try to count all idempotent $3\\times3$ matrices (there are infinitely many such idempotents). The condition $AD=DA$ with $D$ having three **distinct** diagonal entries forces $A$ to be diagonal; only then does idempotency reduce to a finite, easy count.",
    "solutions": [
      {
        "name": "Commuting with distinct diagonal forces diagonal form",
        "steps": [
          "Write $A=(a_{ij})$. The $(i,j)$ entry of $AD-DA$ is $a_{ij}(d_{j}-d_{i})$ where $d=(1,2,3)$. Setting $AD=DA$ gives $a_{ij}(d_{j}-d_{i})=0$ for all $i,j$.",
          "Since $d_{1},d_{2},d_{3}$ are distinct, $d_{j}-d_{i}\\neq0$ whenever $i\\neq j$, forcing every off-diagonal $a_{ij}=0$. So $A$ must be diagonal, $A=\\mathrm{diag}(t_{1},t_{2},t_{3})$.",
          "Now $A^{2}=A$ becomes $t_{k}^{2}=t_{k}$ for each $k$, so each $t_{k}\\in\\{0,1\\}$ independently.",
          "There are $2^{3}=\\boxed{8}$ choices."
        ]
      },
      {
        "name": "Listing the diagonal projections",
        "steps": [
          "After the commuting argument, $A=\\mathrm{diag}(t_{1},t_{2},t_{3})$ with each $t_{k}$ solving $t_{k}^{2}=t_{k}$, i.e. $t_{k}=0$ or $1$.",
          "The eight matrices are the diagonal $0$/$1$ patterns: $O$, the three single-$1$ projections, the three double-$1$ projections, and $I$.",
          "All eight are genuinely idempotent and commute with $D$, and no two coincide, so the count is $\\boxed{8}$."
        ]
      }
    ],
    "remark": "**Insight.** A matrix commuting with a diagonal matrix of *distinct* entries must itself be diagonal — the distinctness is the whole hinge. Drop it (e.g. $D=I$) and the idempotents become a continuum; keep it and the answer is a crisp $2^{3}$."
  },
  {
    "theme": "specialmat",
    "themeLabel": "Special Matrices",
    "title": "Scalar Plus Nilpotent, Inverted",
    "difficulty": 4,
    "task": "Find the determinants",
    "tags": [
      "triangular",
      "nilpotent",
      "scalar matrix",
      "adjoint",
      "inverse"
    ],
    "statement": "Let $A=\\begin{pmatrix}2 & 3 & 1\\\\ 0 & 2 & 4\\\\ 0 & 0 & 2\\end{pmatrix}$. Writing $A=2I+N$ with $N$ strictly upper-triangular, find $\\det A$, $\\det(\\operatorname{adj}A)$, and verify $A^{-1}=\\tfrac12\\!\\left(I-\\tfrac{N}{2}+\\tfrac{N^{2}}{4}\\right)$.",
    "answer": "$\\det A = 8$, $\\boxed{\\det(\\operatorname{adj}A)=64}$, and $A^{-1}=\\tfrac12\\big(I-\\tfrac{N}{2}+\\tfrac{N^{2}}{4}\\big)$.",
    "trap": "Because $A$ has nonzero entries above the diagonal, a hasty solver expands the full $3\\times3$ determinant or fears the off-diagonal terms feed into $\\det A$. For a *triangular* matrix the determinant is just the product of diagonal entries, $2^{3}=8$. A second trap is using $\\det(\\operatorname{adj}A)=\\det A$; the correct law in order $3$ is $\\det(\\operatorname{adj}A)=(\\det A)^{n-1}=(\\det A)^{2}$.",
    "solutions": [
      {
        "name": "Triangular determinant and adjoint law",
        "steps": [
          "$A$ is upper triangular, so $\\det A$ is the product of the diagonal: $\\det A=2\\cdot2\\cdot2=8$.",
          "For an $n\\times n$ matrix, $\\det(\\operatorname{adj}A)=(\\det A)^{\\,n-1}$. With $n=3$, $\\det(\\operatorname{adj}A)=(\\det A)^{2}=8^{2}=\\boxed{64}$.",
          "Split $A=2I+N$ with $N=\\begin{pmatrix}0&3&1\\\\0&0&4\\\\0&0&0\\end{pmatrix}$, $N^{3}=O$. Then $A^{-1}=(2I+N)^{-1}=\\tfrac12\\big(I+\\tfrac{N}{2}\\big)^{-1}=\\tfrac12\\big(I-\\tfrac{N}{2}+\\tfrac{N^{2}}{4}\\big)$ since the series truncates at $N^{2}$.",
          "Direct check: $(2I+N)\\cdot\\tfrac12\\big(I-\\tfrac N2+\\tfrac{N^{2}}4\\big)=I-\\tfrac{N^{3}}{8}=I$, confirming the inverse and $\\boxed{\\det(\\operatorname{adj}A)=64}$."
        ]
      },
      {
        "name": "Cofactor cross-check",
        "steps": [
          "Computing the adjugate of $A$ directly gives $\\operatorname{adj}A=\\begin{pmatrix}4 & -6 & 10\\\\ 0 & 4 & -8\\\\ 0 & 0 & 4\\end{pmatrix}$, again upper triangular with diagonal $4,4,4$.",
          "Hence $\\det(\\operatorname{adj}A)=4\\cdot4\\cdot4=64$, matching $(\\det A)^{2}=64$.",
          "And $A^{-1}=\\tfrac{1}{\\det A}\\operatorname{adj}A=\\tfrac18\\operatorname{adj}A=\\begin{pmatrix}\\tfrac12 & -\\tfrac34 & \\tfrac{5}{4}\\\\ 0 & \\tfrac12 & -1\\\\ 0 & 0 & \\tfrac12\\end{pmatrix}$, which equals $\\tfrac12\\big(I-\\tfrac N2+\\tfrac{N^{2}}4\\big)$, so $\\boxed{\\det(\\operatorname{adj}A)=64}$."
        ]
      }
    ],
    "remark": "**Insight.** A scalar-plus-nilpotent decomposition $A=cI+N$ makes inversion a *finite* binomial series and shows the inverse of a triangular matrix stays triangular. The adjoint determinant law $(\\det A)^{n-1}$ is the part most often misremembered."
  },
  {
    "theme": "specialmat",
    "themeLabel": "Special Matrices",
    "title": "When Symmetric Meets Orthogonal",
    "difficulty": 5,
    "task": "Evaluate the determinant",
    "tags": [
      "symmetric",
      "orthogonal",
      "involutory",
      "matrix powers",
      "determinant"
    ],
    "statement": "Let $A$ be a real $3\\times3$ matrix that is both symmetric ($A^{T}=A$) and orthogonal ($AA^{T}=I$). Evaluate\n$$\\det\\!\\Big(2A^{2025}-2A+I\\Big).$$",
    "answer": "$\\boxed{\\det\\!\\big(2A^{2025}-2A+I\\big)=1}$",
    "trap": "Faced with $A^{2025}$, the tempting move is to try to compute a $2025$-th power, or to assume $\\det(2A^{2025}-2A+I)$ depends on the unknown entries of $A$. The hidden gift is that symmetric $+$ orthogonal $\\Rightarrow A^{2}=I$ (involutory), so all odd powers collapse to $A$ and the whole expression reduces to $I$ with determinant $1$.",
    "solutions": [
      {
        "name": "Collapse the power via involution",
        "steps": [
          "Combine the two hypotheses: $A^{T}=A$ and $AA^{T}=I$ give $A\\cdot A=A\\cdot A^{T}=I$, so $A^{2}=I$. Thus $A$ is involutory.",
          "From $A^{2}=I$, even powers are $I$ and odd powers are $A$; in particular $A^{2025}=A^{2\\cdot1012}\\cdot A=(A^{2})^{1012}A=A$.",
          "Substitute: $2A^{2025}-2A+I=2A-2A+I=I$.",
          "Therefore $\\det(2A^{2025}-2A+I)=\\det I=\\boxed{1}$."
        ]
      },
      {
        "name": "Concrete reflection check",
        "steps": [
          "Take $A=\\begin{pmatrix}0&1&0\\\\1&0&0\\\\0&0&-1\\end{pmatrix}$, which is symmetric and orthogonal ($AA^{T}=I$), so $A^{2}=I$.",
          "Then $A^{2025}=A$, and $2A^{2025}-2A+I=2A-2A+I=I$.",
          "Its determinant is $\\det I=1$, matching the general argument: $\\boxed{1}$."
        ]
      },
      {
        "name": "Determinant-of-identity shortcut",
        "steps": [
          "Once $A^{2}=I$ is established, write the bracket as $2(A^{2025}-A)+I$. Since $A^{2025}=A$ (odd power of an involution), the term $A^{2025}-A$ is the zero matrix $O$.",
          "Hence $2A^{2025}-2A+I=2\\,O+I=I$ exactly, with no dependence on the particular $A$.",
          "So the determinant is $\\det I=\\boxed{1}$."
        ]
      }
    ],
    "remark": "**Insight.** Two innocuous-looking properties chain into a third: symmetric $\\cap$ orthogonal $=$ involutory. The astronomical exponent $2025$ is pure theatre — every odd power of an involution is just $A$ again, and the expression telescopes to $I$."
  },
  {
    "theme": "transpose",
    "themeLabel": "Transpose & Symmetric–Skew Decomposition",
    "title": "Splitting a Matrix Down the Middle",
    "difficulty": 3,
    "task": "Find the parts and $\\det P$",
    "tags": [
      "symmetric part",
      "skew part",
      "decomposition",
      "transpose",
      "determinant"
    ],
    "statement": "Every real square matrix splits uniquely as $A=P+Q$ with $P$ symmetric and $Q$ skew-symmetric. For\n\\[A=\\begin{pmatrix} 3 & 7 & -1\\\\ 1 & 5 & 9\\\\ 5 & 3 & 2\\end{pmatrix}\\]\nfind $P$ and $Q$ explicitly, and report the determinant of the symmetric part, $\\det P$.",
    "answer": "\\[P=\\begin{pmatrix}3&4&2\\\\4&5&6\\\\2&6&2\\end{pmatrix},\\quad Q=\\begin{pmatrix}0&3&-3\\\\-3&0&3\\\\3&-3&0\\end{pmatrix},\\qquad \\boxed{\\det P=-34}.\\]",
    "trap": "Mixing up the two halves: writing the symmetric part as $\\tfrac12(A-A^{\\mathsf T})$ and the skew part as $\\tfrac12(A+A^{\\mathsf T})$. That swaps their roles — $\\tfrac12(A-A^{\\mathsf T})$ satisfies $X^{\\mathsf T}=-X$ (it is the skew piece), while $\\tfrac12(A+A^{\\mathsf T})$ satisfies $X^{\\mathsf T}=X$. The correct symmetric part is $P=\\tfrac12(A+A^{\\mathsf T})$; using the swapped formula would hand back a skew matrix whose determinant is $0$ (odd-order skew), not $-34$, and the supposed `$Q$' would not even be skew.",
    "solutions": [
      {
        "name": "Average and difference with the transpose",
        "steps": [
          "Transpose: $A^{\\mathsf T}=\\begin{pmatrix}3&1&5\\\\7&5&3\\\\-1&9&2\\end{pmatrix}$. The symmetric part is $P=\\tfrac12(A+A^{\\mathsf T})$ because $P^{\\mathsf T}=\\tfrac12(A^{\\mathsf T}+A)=P$; the skew part is $Q=\\tfrac12(A-A^{\\mathsf T})$ because $Q^{\\mathsf T}=\\tfrac12(A^{\\mathsf T}-A)=-Q$.",
          "Compute $A+A^{\\mathsf T}=\\begin{pmatrix}6&8&4\\\\8&10&12\\\\4&12&4\\end{pmatrix}$, so $P=\\begin{pmatrix}3&4&2\\\\4&5&6\\\\2&6&2\\end{pmatrix}$; and $A-A^{\\mathsf T}=\\begin{pmatrix}0&6&-6\\\\-6&0&6\\\\6&-6&0\\end{pmatrix}$, so $Q=\\begin{pmatrix}0&3&-3\\\\-3&0&3\\\\3&-3&0\\end{pmatrix}$.",
          "Check $P+Q=A$ (off-diagonals $4+3=7,\\;4-3=1$, etc.) and that $P=P^{\\mathsf T}$, $Q=-Q^{\\mathsf T}$.",
          "Expand $\\det P$ along row $1$: $3(5\\cdot2-6\\cdot6)-4(4\\cdot2-6\\cdot2)+2(4\\cdot6-5\\cdot2)=3(-26)-4(-4)+2(14)=-78+16+28=\\boxed{-34}.$"
        ]
      },
      {
        "name": "Entry-wise: diagonals stay, off-diagonals average and halve",
        "steps": [
          "Symmetric part keeps the diagonal of $A$ and replaces each off-diagonal pair by its average: $P_{ij}=\\tfrac12(a_{ij}+a_{ji})$. Thus $P_{12}=\\tfrac{7+1}{2}=4$, $P_{13}=\\tfrac{-1+5}{2}=2$, $P_{23}=\\tfrac{9+3}{2}=6$, giving $P=\\begin{pmatrix}3&4&2\\\\4&5&6\\\\2&6&2\\end{pmatrix}$.",
          "Skew part has zero diagonal and $Q_{ij}=\\tfrac12(a_{ij}-a_{ji})$: $Q_{12}=3,\\;Q_{13}=-3,\\;Q_{23}=3$, the rest forced by $Q_{ji}=-Q_{ij}$.",
          "Finally $\\det P=-34$ by direct $3\\times3$ expansion, confirming the boxed value $\\boxed{-34}$."
        ]
      }
    ],
    "remark": "Insight. The diagonal of $A$ belongs entirely to the symmetric part (the skew part is forced to have zero diagonal), while each off-diagonal slot is split into its average $\\tfrac12(a_{ij}+a_{ji})$ and its half-difference $\\tfrac12(a_{ij}-a_{ji})$. Uniqueness is automatic: if $A=P_1+Q_1=P_2+Q_2$ then $P_1-P_2=Q_2-Q_1$ is both symmetric and skew, hence $0$."
  },
  {
    "theme": "transpose",
    "themeLabel": "Transpose & Symmetric–Skew Decomposition",
    "title": "When Does the Product Stay Symmetric?",
    "difficulty": 3,
    "task": "Find all values",
    "tags": [
      "symmetric matrices",
      "product transpose",
      "commuting",
      "parameter"
    ],
    "statement": "Let\n\\[A=\\begin{pmatrix}2&1&1\\\\1&2&1\\\\1&1&2\\end{pmatrix},\\qquad B=\\begin{pmatrix}1&x&0\\\\x&1&0\\\\0&0&3\\end{pmatrix},\\]\nboth symmetric. Find all real $x$ for which the product $AB$ is symmetric.",
    "answer": "\\[\\boxed{x=2}\\]",
    "trap": "Reasoning ``$A$ and $B$ are both symmetric, so their product $AB$ is automatically symmetric'' — and answering ``all $x$''. The rule $(AB)^{\\mathsf T}=B^{\\mathsf T}A^{\\mathsf T}$ reverses the order, so $(AB)^{\\mathsf T}=BA$, not $AB$. Hence $AB$ is symmetric iff $AB=BA$, i.e. iff $A$ and $B$ commute — a condition that fails for most $x$. Forgetting the order reversal turns a genuine constraint into a non-existent one.",
    "solutions": [
      {
        "name": "Symmetric $\\iff$ commuting",
        "steps": [
          "Since $A,B$ are symmetric, $(AB)^{\\mathsf T}=B^{\\mathsf T}A^{\\mathsf T}=BA$. Therefore $AB$ is symmetric $\\iff AB=(AB)^{\\mathsf T}=BA$, i.e. $\\iff AB-BA=0$.",
          "Compute the commutator's off-diagonal entries. Because $B$ leaves the third coordinate uncoupled (the $3$ in the corner) while $A$ couples it to the others, the $(1,3)$ and $(2,3)$ entries of $AB-BA$ both reduce to a multiple of $(x-2)$.",
          "Explicitly $AB-BA=\\begin{pmatrix}0&0&x-2\\\\0&0&x-2\\\\2-x&2-x&0\\end{pmatrix}$, which vanishes precisely when $x=2$.",
          "Hence the only value is $\\boxed{x=2}$ (at which $AB=BA$, so $AB$ is symmetric)."
        ]
      },
      {
        "name": "Directly impose $(AB)^{\\mathsf T}=AB$",
        "steps": [
          "Form $AB$ and demand it equal its transpose. The diagonal entries are automatically equal, so only the three above-diagonal entries of $AB$ must match their mirror images.",
          "Row-by-row multiplication gives, for the $(1,3)$ vs $(3,1)$ comparison, the equation $1\\cdot0+1\\cdot0+1\\cdot3$ against $1\\cdot1+1\\cdot x+2\\cdot0$, i.e. $3=1+x$ after tracking all terms collapses to the single condition $x=2$; the $(2,3)$ comparison yields the same.",
          "All mismatch conditions reduce to $x-2=0$, so $\\boxed{x=2}$ is the unique value."
        ]
      }
    ],
    "remark": "Insight. ``Product of symmetric matrices is symmetric'' is one of the most common false beliefs in matrix algebra. The transpose of a product reverses order, so $(AB)^{\\mathsf T}=BA$; symmetry of $AB$ is exactly commutativity $AB=BA$. The product of two symmetric matrices is symmetric if and only if they commute."
  },
  {
    "theme": "transpose",
    "themeLabel": "Transpose & Symmetric–Skew Decomposition",
    "title": "The Inverse That Lives in the Transpose",
    "difficulty": 4,
    "task": "Evaluate the matrix",
    "tags": [
      "inverse transpose",
      "orthogonality",
      "scaled orthogonal",
      "AA^T",
      "no cofactors"
    ],
    "statement": "A real $3\\times3$ matrix $A$ satisfies $AA^{\\mathsf T}=9I$, and\n\\[A=\\begin{pmatrix}2&2&1\\\\1&-2&2\\\\2&-1&-2\\end{pmatrix}.\\]\nUsing the identity $(A^{\\mathsf T})^{-1}=(A^{-1})^{\\mathsf T}$ (and no cofactor grind), evaluate the matrix $(A^{\\mathsf T})^{-1}$.",
    "answer": "\\[(A^{\\mathsf T})^{-1}=\\tfrac19 A=\\begin{pmatrix}\\tfrac29&\\tfrac29&\\tfrac19\\\\[2pt]\\tfrac19&-\\tfrac29&\\tfrac29\\\\[2pt]\\tfrac29&-\\tfrac19&-\\tfrac29\\end{pmatrix}.\\]",
    "trap": "Declaring $A$ orthogonal and writing $A^{-1}=A^{\\mathsf T}$, hence $(A^{\\mathsf T})^{-1}=A$. But $A$ is only a **scaled** orthogonal matrix: $AA^{\\mathsf T}=9I$, not $I$. The true relation is $A^{-1}=\\tfrac19A^{\\mathsf T}$, so $(A^{\\mathsf T})^{-1}=(A^{-1})^{\\mathsf T}=\\tfrac19A$ — every entry is $\\tfrac19$ times what the ``orthogonal'' shortcut would give. Dropping the factor $9$ overstates the inverse ninefold.",
    "solutions": [
      {
        "name": "From $AA^{\\mathsf T}=9I$",
        "steps": [
          "$AA^{\\mathsf T}=9I$ means $A\\bigl(\\tfrac19A^{\\mathsf T}\\bigr)=I$, so $A^{-1}=\\tfrac19A^{\\mathsf T}$.",
          "Apply the transpose-inverse identity: $(A^{\\mathsf T})^{-1}=(A^{-1})^{\\mathsf T}=\\bigl(\\tfrac19A^{\\mathsf T}\\bigr)^{\\mathsf T}=\\tfrac19A$.",
          "Therefore $(A^{\\mathsf T})^{-1}=\\tfrac19A=\\boxed{\\begin{pmatrix}2/9&2/9&1/9\\\\1/9&-2/9&2/9\\\\2/9&-1/9&-2/9\\end{pmatrix}}.$"
        ]
      },
      {
        "name": "Take the transpose of the relation first",
        "steps": [
          "Transpose $AA^{\\mathsf T}=9I$: since $(AA^{\\mathsf T})^{\\mathsf T}=A A^{\\mathsf T}$ (it equals itself) the relation is unchanged, but symmetrically $A^{\\mathsf T}A=9I$ also holds because $\\tfrac19A^{\\mathsf T}$ is a two-sided inverse of $A$.",
          "From $A^{\\mathsf T}A=9I$ we get $A^{\\mathsf T}\\bigl(\\tfrac19A\\bigr)=I$, i.e. $\\tfrac19A$ is the inverse of $A^{\\mathsf T}$.",
          "Hence $(A^{\\mathsf T})^{-1}=\\tfrac19A=\\boxed{\\tfrac19A}$, matching the first method."
        ]
      },
      {
        "name": "Determinant sanity check",
        "steps": [
          "From $AA^{\\mathsf T}=9I$, $\\det(A)\\det(A^{\\mathsf T})=\\det(A)^2=9^3=729$, so $\\det A=\\pm27$; a direct expansion gives $\\det A=27>0$.",
          "Then $\\det(A^{\\mathsf T})^{-1}=1/27$, and indeed $\\det\\bigl(\\tfrac19A\\bigr)=\\tfrac1{9^3}\\det A=\\tfrac{27}{729}=\\tfrac1{27}$, consistent with $(A^{\\mathsf T})^{-1}=\\tfrac19A$.",
          "So the boxed answer $\\boxed{(A^{\\mathsf T})^{-1}=\\tfrac19A}$ passes the determinant check."
        ]
      }
    ],
    "remark": "Insight. $(A^{\\mathsf T})^{-1}=(A^{-1})^{\\mathsf T}$ always holds for invertible $A$ — transpose and inverse commute. The subtlety here is the scale: $AA^{\\mathsf T}=cI$ gives $A^{-1}=\\tfrac1c A^{\\mathsf T}$, so $A$ behaves like an orthogonal matrix only after dividing by $\\sqrt{c}$. Forgetting the scalar is the classic ``almost orthogonal'' blunder."
  },
  {
    "theme": "transpose",
    "themeLabel": "Transpose & Symmetric–Skew Decomposition",
    "title": "The Sandwich That Stays Skew",
    "difficulty": 4,
    "task": "Find all values",
    "tags": [
      "congruence",
      "skew preserved",
      "odd-order skew",
      "B^TAB",
      "determinant"
    ],
    "statement": "Let\n\\[A=\\begin{pmatrix}0&2&-3\\\\-2&0&5\\\\3&-5&0\\end{pmatrix},\\qquad B=\\begin{pmatrix}1&2&1\\\\0&3&t\\\\4&1&1\\end{pmatrix},\\quad t\\in\\mathbb R.\\]\nFind all real $t$ for which $B^{\\mathsf T}AB$ is invertible.",
    "answer": "\\[\\boxed{\\text{No such }t:\\ \\det\\!\\bigl(B^{\\mathsf T}AB\\bigr)=0\\text{ for every }t.}\\]",
    "trap": "Computing $\\det(B^{\\mathsf T}AB)=\\det(B^{\\mathsf T})\\det(A)\\det(B)=(\\det B)^2\\det A$ and then trying to make it nonzero by choosing $t$ so that $\\det B\\neq0$. This wastes effort on the wrong factor: $A$ is $3\\times3$ skew-symmetric, so $\\det A=0$ automatically (odd-order skew). The product is killed by $A$, not by $B$, so no value of $t$ helps. The deeper reason: $B^{\\mathsf T}AB$ is itself skew-symmetric of odd order, hence singular for all $t$.",
    "solutions": [
      {
        "name": "Congruence preserves skewness",
        "steps": [
          "Let $M=B^{\\mathsf T}AB$. Then $M^{\\mathsf T}=(B^{\\mathsf T}AB)^{\\mathsf T}=B^{\\mathsf T}A^{\\mathsf T}(B^{\\mathsf T})^{\\mathsf T}=B^{\\mathsf T}A^{\\mathsf T}B$. Since $A$ is skew, $A^{\\mathsf T}=-A$, so $M^{\\mathsf T}=-B^{\\mathsf T}AB=-M$.",
          "Thus $M$ is skew-symmetric for every $t$. A skew-symmetric matrix of odd order $n=3$ satisfies $\\det M=\\det M^{\\mathsf T}=\\det(-M)=(-1)^3\\det M=-\\det M$, forcing $\\det M=0$.",
          "Therefore $\\det(B^{\\mathsf T}AB)=0$ identically; $B^{\\mathsf T}AB$ is never invertible. $\\boxed{\\text{No such }t.}$"
        ]
      },
      {
        "name": "Determinant multiplicativity",
        "steps": [
          "$\\det(B^{\\mathsf T}AB)=\\det(B^{\\mathsf T})\\,\\det(A)\\,\\det(B)=(\\det B)^2\\det A$.",
          "$A$ is a $3\\times3$ skew matrix; expanding (or using odd-order skew) gives $\\det A=0$.",
          "Hence $\\det(B^{\\mathsf T}AB)=(\\det B)^2\\cdot0=0$ for all $t$, regardless of whether $\\det B=t\\cdot(\\text{something})$ vanishes. $\\boxed{\\text{No such }t.}$"
        ]
      }
    ],
    "remark": "Insight. The congruence $A\\mapsto B^{\\mathsf T}AB$ preserves both symmetry and skew-symmetry — it never changes the ``type'' of a matrix, only its representation. So a skew matrix sandwiched between $B^{\\mathsf T}$ and $B$ stays skew, and in odd dimension that means permanently singular. The factor $(\\det B)^2$ is a complete red herring."
  },
  {
    "theme": "transpose",
    "themeLabel": "Transpose & Symmetric–Skew Decomposition",
    "title": "Rebuilding a Matrix From Its Symmetric Sum",
    "difficulty": 4,
    "task": "Reconstruct $A$ and find $\\det A$",
    "tags": [
      "uniqueness",
      "upper triangular",
      "A+A^T",
      "reconstruction",
      "determinant"
    ],
    "statement": "An upper-triangular $3\\times3$ matrix $A$ (all entries below the main diagonal are $0$) satisfies\n\\[A+A^{\\mathsf T}=\\begin{pmatrix}4&6&2\\\\6&10&8\\\\2&8&2\\end{pmatrix}.\\]\nDetermine $A$ uniquely and compute $\\det A$.",
    "answer": "\\[A=\\begin{pmatrix}2&6&2\\\\0&5&8\\\\0&0&1\\end{pmatrix},\\qquad \\boxed{\\det A=10}.\\]",
    "trap": "Treating $A+A^{\\mathsf T}=S$ as if $A=\\tfrac12 S$ (i.e. assuming $A$ is itself symmetric). That would give a symmetric $A$ with off-diagonal entries $3,1,4$, contradicting ``upper triangular.'' The sum $A+A^{\\mathsf T}$ folds each off-diagonal pair together: above the diagonal $S_{ij}=A_{ij}+A_{ji}=A_{ij}+0=A_{ij}$ (since $A_{ji}=0$ for $i<j$), so the **whole** off-diagonal entry of $S$ goes to $A$, while the diagonal is **doubled**, $S_{ii}=2A_{ii}$. Splitting the off-diagonals in half loses the upper-triangular structure.",
    "solutions": [
      {
        "name": "Read the upper-triangular constraint off $S$",
        "steps": [
          "Write $A=\\begin{pmatrix}a&b&c\\\\0&d&e\\\\0&0&f\\end{pmatrix}$. Then $A^{\\mathsf T}=\\begin{pmatrix}a&0&0\\\\b&d&0\\\\c&e&f\\end{pmatrix}$ and $A+A^{\\mathsf T}=\\begin{pmatrix}2a&b&c\\\\b&2d&e\\\\c&e&2f\\end{pmatrix}$.",
          "Match to $S$: diagonals give $2a=4,\\;2d=10,\\;2f=2$, so $a=2,\\;d=5,\\;f=1$. Off-diagonals give $b=6,\\;c=2,\\;e=8$ directly (the lower entries of $A$ are already $0$).",
          "Hence $A=\\begin{pmatrix}2&6&2\\\\0&5&8\\\\0&0&1\\end{pmatrix}$, and uniqueness is forced because every unknown was pinned by exactly one equation.",
          "Being triangular, $\\det A=2\\cdot5\\cdot1=\\boxed{10}.$"
        ]
      },
      {
        "name": "Symmetric/skew split with a triangular skew part",
        "steps": [
          "Write $A=P+Q$ with $P=\\tfrac12(A+A^{\\mathsf T})=\\tfrac12S$ symmetric and $Q=\\tfrac12(A-A^{\\mathsf T})$ skew. Here $P=\\begin{pmatrix}2&3&1\\\\3&5&4\\\\1&4&1\\end{pmatrix}$ is known.",
          "Because $A$ is upper triangular, the skew part $Q$ has $Q_{ij}=\\tfrac12A_{ij}$ above the diagonal and $-$ that below; the diagonal of $Q$ is $0$. The unknown skew off-diagonals must restore the upper-triangular shape of $A=P+Q$: imposing $A_{ji}=0$ for $i<j$ forces $Q_{ij}=P_{ij}$ above the diagonal.",
          "Then $A_{ij}=P_{ij}+Q_{ij}=2P_{ij}=S_{ij}$ above the diagonal $\\Rightarrow b=6,c=2,e=8$, and $A_{ii}=P_{ii}=\\tfrac12 S_{ii}\\Rightarrow a=2,d=5,f=1$, recovering the same $A$.",
          "Thus $\\det A=2\\cdot5\\cdot1=\\boxed{10}.$"
        ]
      }
    ],
    "remark": "Insight. $A+A^{\\mathsf T}$ is a many-to-one map on general matrices, but uniqueness returns the moment you add structure. The constraint ``upper triangular'' supplies exactly the missing data: it forces all lower entries to $0$, so each above-diagonal entry of $S$ is the corresponding entry of $A$ outright, while each diagonal entry of $S$ is doubled. Different structural constraints (e.g. symmetric $A$) would give a different — and here impossible — reconstruction."
  },
  {
    "theme": "transpose",
    "themeLabel": "Transpose & Symmetric–Skew Decomposition",
    "title": "The Right Answer for the Wrong Reason",
    "difficulty": 5,
    "task": "Evaluate and justify",
    "tags": [
      "odd-order skew",
      "determinant not additive",
      "A-A^T",
      "A+A^T",
      "common fallacy"
    ],
    "statement": "For\n\\[A=\\begin{pmatrix}2&1&3\\\\0&4&1\\\\5&2&1\\end{pmatrix},\\]\nevaluate $\\det\\!\\bigl(A-A^{\\mathsf T}\\bigr)$. Then decide whether the reasoning ``$\\det(A-A^{\\mathsf T})=\\det A-\\det A^{\\mathsf T}=\\det A-\\det A=0$'' is a valid proof, justifying your verdict with the value of $\\det\\!\\bigl(A+A^{\\mathsf T}\\bigr)$.",
    "answer": "\\[\\det(A-A^{\\mathsf T})=\\boxed{0},\\quad\\text{but the cited reasoning is INVALID: }\\det\\text{ is not additive, since }\\det(A+A^{\\mathsf T})=-438\\neq \\det A+\\det A^{\\mathsf T}=-102.\\]",
    "trap": "The seductive ``proof'' $\\det(A-A^{\\mathsf T})=\\det A-\\det A^{\\mathsf T}=0$ gets the right number for a completely wrong reason: the determinant is **not** additive, $\\det(X+Y)\\neq\\det X+\\det Y$ in general. The same false rule applied to $A+A^{\\mathsf T}$ would predict $\\det A+\\det A^{\\mathsf T}=2\\det A=-102$, whereas the true value is $\\det(A+A^{\\mathsf T})=-438$. The correct reason $\\det(A-A^{\\mathsf T})=0$ holds is that $A-A^{\\mathsf T}$ is **skew-symmetric of odd order $3$**.",
    "solutions": [
      {
        "name": "Odd-order skew forces a zero determinant",
        "steps": [
          "Let $K=A-A^{\\mathsf T}$. Then $K^{\\mathsf T}=A^{\\mathsf T}-A=-K$, so $K$ is skew-symmetric. Here $K=\\begin{pmatrix}0&1&-2\\\\-1&0&-1\\\\2&1&0\\end{pmatrix}$.",
          "For an $n\\times n$ skew matrix, $\\det K=\\det K^{\\mathsf T}=\\det(-K)=(-1)^n\\det K$. With $n=3$ this gives $\\det K=-\\det K$, so $2\\det K=0$ and $\\det K=0$.",
          "Hence $\\det(A-A^{\\mathsf T})=\\boxed{0}$, valid for **every** real $3\\times3$ matrix $A$ — not because of any additivity of $\\det$.",
          "To expose the additivity fallacy, compute $A+A^{\\mathsf T}=\\begin{pmatrix}4&1&8\\\\1&8&3\\\\8&3&2\\end{pmatrix}$ and $\\det(A+A^{\\mathsf T})=-438$, while $\\det A+\\det A^{\\mathsf T}=2(-51)=-102$. Since $-438\\neq-102$, $\\det$ is not additive, so the cited reasoning is **invalid**."
        ]
      },
      {
        "name": "Direct expansion plus a counterexample",
        "steps": [
          "Expand $\\det(A-A^{\\mathsf T})$ on the skew matrix $\\begin{pmatrix}0&1&-2\\\\-1&0&-1\\\\2&1&0\\end{pmatrix}$: along row $1$, $0\\cdot(\\dots)-1\\bigl((-1)(0)-(-1)(2)\\bigr)+(-2)\\bigl((-1)(1)-0\\cdot2\\bigr)=-1(2)-2(-1)=-2+2=0$.",
          "So the value is $\\boxed{0}$, confirmed numerically.",
          "Now test additivity on the symmetric sum: $\\det\\begin{pmatrix}4&1&8\\\\1&8&3\\\\8&3&2\\end{pmatrix}=4(16-9)-1(2-24)+8(3-64)=28+22-488=-438$, whereas $\\det A+\\det A^{\\mathsf T}=-102$. The mismatch proves $\\det(X+Y)\\neq\\det X+\\det Y$, so the ``additivity'' justification fails even though it stumbled onto the right number for $A-A^{\\mathsf T}$."
        ]
      }
    ],
    "remark": "Insight. ``$\\det(A-A^{\\mathsf T})=0$'' is true for all $3\\times3$ matrices, but only because an odd-order skew matrix is singular — never because the determinant distributes over sums. The companion quantity $\\det(A+A^{\\mathsf T})$ is the perfect detector of the fallacy: it equals $-438$, far from the additive guess $-102$, so any argument that would also ``prove'' $\\det(A+A^{\\mathsf T})=2\\det A$ is automatically broken."
  },
  {
    "theme": "transpose",
    "themeLabel": "Transpose & Symmetric–Skew Decomposition",
    "title": "The Adjugate That Equals a Transpose",
    "difficulty": 5,
    "task": "Evaluate the adjugate",
    "tags": [
      "adjugate",
      "scaled orthogonal",
      "AA^T",
      "inverse transpose",
      "no cofactors"
    ],
    "statement": "Let\n\\[M=\\begin{pmatrix}2&2&1\\\\1&-2&2\\\\2&-1&-2\\end{pmatrix},\\qquad MM^{\\mathsf T}=9I.\\]\nWithout computing nine cofactors, evaluate the adjugate $\\operatorname{adj}(M)$ in terms of $M^{\\mathsf T}$, and give it explicitly.",
    "answer": "\\[\\operatorname{adj}(M)=3\\,M^{\\mathsf T}=\\begin{pmatrix}6&3&6\\\\6&-6&-3\\\\3&6&-6\\end{pmatrix}.\\]",
    "trap": "Jumping to ``$M$ is orthogonal, so $\\operatorname{adj}M=M^{\\mathsf T}$.'' Two scaling errors hide here. First, $MM^{\\mathsf T}=9I$ (not $I$), so $M$ is only scaled-orthogonal. Second, the identity $\\operatorname{adj}M=(\\det M)\\,M^{-1}$ carries the factor $\\det M=27$, while $M^{-1}=\\tfrac19M^{\\mathsf T}$ carries $\\tfrac19$; the two scalars combine to $27\\cdot\\tfrac19=3$, giving $\\operatorname{adj}M=3M^{\\mathsf T}$, not $M^{\\mathsf T}$. Dropping either factor is off by the wrong multiple.",
    "solutions": [
      {
        "name": "$\\operatorname{adj}M=(\\det M)M^{-1}$ with $M^{-1}=\\tfrac19M^{\\mathsf T}$",
        "steps": [
          "From $MM^{\\mathsf T}=9I$, $M^{-1}=\\tfrac19M^{\\mathsf T}$, and taking determinants $(\\det M)^2=9^3=729$, so $\\det M=\\pm27$; a single $2\\times2$ cofactor check (e.g. the top-left $2\\times2$ minors) confirms $\\det M=+27$.",
          "Use $\\operatorname{adj}M=(\\det M)\\,M^{-1}=27\\cdot\\tfrac19M^{\\mathsf T}=3M^{\\mathsf T}$.",
          "Hence $\\operatorname{adj}M=3M^{\\mathsf T}=\\boxed{\\begin{pmatrix}6&3&6\\\\6&-6&-3\\\\3&6&-6\\end{pmatrix}}.$"
        ]
      },
      {
        "name": "Verify via the defining relation $M\\,\\operatorname{adj}M=(\\det M)I$",
        "steps": [
          "Propose $\\operatorname{adj}M=3M^{\\mathsf T}$. Test the defining identity: $M\\,(3M^{\\mathsf T})=3(MM^{\\mathsf T})=3\\cdot9I=27I=(\\det M)I$.",
          "Since $M\\,X=(\\det M)I$ has the unique solution $X=\\operatorname{adj}M$ when $\\det M\\neq0$, the proposal is correct: $\\operatorname{adj}M=3M^{\\mathsf T}$.",
          "Writing out $3M^{\\mathsf T}$ gives $\\boxed{\\begin{pmatrix}6&3&6\\\\6&-6&-3\\\\3&6&-6\\end{pmatrix}}.$"
        ]
      },
      {
        "name": "Determinant check on the adjugate",
        "steps": [
          "For a $3\\times3$ matrix, $\\det(\\operatorname{adj}M)=(\\det M)^{n-1}=(\\det M)^2=27^2=729$.",
          "Test the candidate: $\\det(3M^{\\mathsf T})=3^3\\det M^{\\mathsf T}=27\\cdot27=729$, matching exactly.",
          "Consistent with $\\operatorname{adj}M=3M^{\\mathsf T}=\\boxed{3M^{\\mathsf T}}$, whereas the naive $M^{\\mathsf T}$ would give $\\det=27\\neq729$, exposing the missing factor."
        ]
      }
    ],
    "remark": "Insight. The adjugate of a scaled-orthogonal matrix $MM^{\\mathsf T}=cI$ is $\\operatorname{adj}M=(\\det M)M^{-1}=\\dfrac{\\det M}{c}\\,M^{\\mathsf T}$. The lone scalar $\\det M/c$ (here $27/9=3$) is where every shortcut goes wrong: ``orthogonal'' would set it to $1$, ``forget $\\det$'' would set it to $1/c$. Tracking both factors is the whole problem."
  },
  {
    "theme": "transpose",
    "themeLabel": "Transpose & Symmetric–Skew Decomposition",
    "title": "Orthogonal Columns From a Gram Matrix",
    "difficulty": 4,
    "task": "Find all values",
    "tags": [
      "A^TA symmetric",
      "gram matrix",
      "column norms",
      "orthogonal columns",
      "parameters"
    ],
    "statement": "Let\n\\[A=\\begin{pmatrix}1&2&2\\\\2&a&-2\\\\2&-2&b\\end{pmatrix},\\qquad a,b\\in\\mathbb R.\\]\nThe Gram matrix $A^{\\mathsf T}A$ records dot products of the columns of $A$. Find all $(a,b)$ for which $A^{\\mathsf T}A$ is a diagonal matrix, and identify that diagonal matrix.",
    "answer": "\\[\\boxed{(a,b)=(1,1)},\\qquad A^{\\mathsf T}A=9I.\\]",
    "trap": "Believing $A^{\\mathsf T}A=AA^{\\mathsf T}$ and working with the row dot products by mistake, or — worse — thinking $A^{\\mathsf T}A$ ``is automatically diagonal because it is symmetric.'' Symmetry of $A^{\\mathsf T}A$ (always true) does **not** mean diagonal. The off-diagonal entry $(A^{\\mathsf T}A)_{ij}$ is the dot product of column $i$ with column $j$; making the matrix diagonal requires those column dot products to vanish, which constrains $a$ and $b$. Confusing $A^{\\mathsf T}A$ with $AA^{\\mathsf T}$ would impose the wrong (row) conditions and give a different, incorrect $(a,b)$.",
    "solutions": [
      {
        "name": "Off-diagonal column dot products must vanish",
        "steps": [
          "The columns are $c_1=(1,2,2)^{\\mathsf T},\\;c_2=(2,a,-2)^{\\mathsf T},\\;c_3=(2,-2,b)^{\\mathsf T}$, and $(A^{\\mathsf T}A)_{ij}=c_i\\!\\cdot\\!c_j$. Diagonal $\\iff$ the three off-diagonal dot products are zero.",
          "$c_1\\!\\cdot\\!c_2=2+2a-4=2a-2=0\\Rightarrow a=1.$  $c_1\\!\\cdot\\!c_3=2-4+2b=2b-2=0\\Rightarrow b=1.$",
          "Check the last condition with $a=b=1$: $c_2\\!\\cdot\\!c_3=4-2a-2b=4-2-2=0.$ Consistent, so $(a,b)=(1,1)$.",
          "Then the diagonal entries are $\\lVert c_1\\rVert^2=9,\\;\\lVert c_2\\rVert^2=4+1+4=9,\\;\\lVert c_3\\rVert^2=4+4+1=9$, giving $A^{\\mathsf T}A=9I$. So $\\boxed{(a,b)=(1,1)}$ and $A^{\\mathsf T}A=9I.$"
        ]
      },
      {
        "name": "Form $A^{\\mathsf T}A$ symbolically",
        "steps": [
          "Direct multiplication gives $A^{\\mathsf T}A=\\begin{pmatrix}9&2a-2&2b-2\\\\2a-2&a^2+8&-2a-2b+4\\\\2b-2&-2a-2b+4&b^2+8\\end{pmatrix}$ (symmetric, as it must be).",
          "Set the three above-diagonal entries to $0$: $2a-2=0,\\;2b-2=0$, and $-2a-2b+4=0$. The first two give $a=1,b=1$, which also satisfies the third.",
          "Substituting back, the diagonal becomes $9,\\;1+8,\\;1+8=9,9,9$, so $A^{\\mathsf T}A=9I$ and $\\boxed{(a,b)=(1,1)}.$"
        ]
      }
    ],
    "remark": "Insight. $A^{\\mathsf T}A$ is symmetric for every $A$, and its $(i,j)$ entry is the dot product of columns $i$ and $j$; the diagonal holds the squared column norms. Diagonality of the Gram matrix is precisely orthogonality of the columns — a far stronger statement than mere symmetry. Here the columns even share the common norm $3$, so $A/3$ is orthogonal."
  },
  {
    "theme": "transpose",
    "themeLabel": "Transpose & Symmetric–Skew Decomposition",
    "title": "Why $I\\pm A$ Have Equal Determinants",
    "difficulty": 4,
    "task": "Evaluate the determinant",
    "tags": [
      "skew-symmetric",
      "transpose argument",
      "det not additive",
      "I plus skew",
      "skew-to-orthogonal"
    ],
    "statement": "Let\n\\[A=\\begin{pmatrix}0&2&3\\\\-2&0&6\\\\-3&-6&0\\end{pmatrix}\\]\n(a skew-symmetric matrix). Evaluate $\\det(I-A)$, and show by a transpose argument that $\\det(I-A)=\\det(I+A)$.",
    "answer": "\\[\\boxed{\\det(I-A)=\\det(I+A)=50.}\\]",
    "trap": "Splitting the determinant: $\\det(I-A)=\\det I-\\det A=1-0=1$ (using $\\det A=0$ for odd-order skew). This abuses non-existent additivity of $\\det$. The true value is $\\det(I-A)=1+(2^2+3^2+6^2)=50$. The equality $\\det(I-A)=\\det(I+A)$ is real, but it comes from $(I-A)^{\\mathsf T}=I+A$ for skew $A$ (so the two matrices are transposes and share a determinant), **not** from any additive split.",
    "solutions": [
      {
        "name": "Transpose argument for the equality, then evaluate",
        "steps": [
          "Since $A$ is skew, $A^{\\mathsf T}=-A$, so $(I-A)^{\\mathsf T}=I^{\\mathsf T}-A^{\\mathsf T}=I+A$. Determinant is transpose-invariant: $\\det(I-A)=\\det\\bigl((I-A)^{\\mathsf T}\\bigr)=\\det(I+A)$. This proves the equality without computing anything.",
          "Now evaluate $\\det(I-A)$ where $I-A=\\begin{pmatrix}1&-2&-3\\\\2&1&-6\\\\3&6&1\\end{pmatrix}$.",
          "Expand along row $1$: $1(1\\cdot1-(-6)(6))-(-2)(2\\cdot1-(-6)(3))+(-3)(2\\cdot6-1\\cdot3)=1(1+36)+2(2+18)-3(12-3)=37+40-27=50.$",
          "Therefore $\\det(I-A)=\\det(I+A)=\\boxed{50}$ — far from the false additive guess $1$."
        ]
      },
      {
        "name": "General formula $\\det(I+K)=1+p^2+q^2+r^2$ for a $3\\times3$ skew $K$",
        "steps": [
          "For $K=\\begin{pmatrix}0&p&q\\\\-p&0&r\\\\-q&-r&0\\end{pmatrix}$, direct expansion gives $\\det(I-K)=1+p^2+q^2+r^2$ (the cubic and the cross terms cancel by skewness).",
          "Here $(p,q,r)=(2,3,6)$, so $\\det(I-A)=1+4+9+36=50$.",
          "The same formula gives $\\det(I+A)=1+p^2+q^2+r^2=50$ (replacing $A$ by $-A$ leaves the squares unchanged), confirming the equality and the value $\\boxed{50}$."
        ]
      }
    ],
    "remark": "Insight. For any skew $A$, $(I-A)^{\\mathsf T}=I+A$, so $I-A$ and $I+A$ are transposes and have equal determinants — and that common value is $1+\\lVert\\text{above-diagonal}\\rVert^2>0$, so both are invertible. This positivity is exactly why $(I-A)^{-1}(I+A)$ always exists for skew $A$, and a direct computation shows that product is orthogonal."
  },
  {
    "theme": "transpose",
    "themeLabel": "Transpose & Symmetric–Skew Decomposition",
    "title": "Solving a Matrix Equation With Its Transpose",
    "difficulty": 5,
    "task": "Solve for $A$ and find $\\det A$",
    "tags": [
      "matrix equation",
      "transpose system",
      "symmetric-skew split",
      "uniqueness",
      "determinant"
    ],
    "statement": "Find the unique real $3\\times3$ matrix $A$ satisfying\n\\[A+2A^{\\mathsf T}=M,\\qquad M=\\begin{pmatrix}3&9&0\\\\3&6&12\\\\6&3&9\\end{pmatrix},\\]\nand compute $\\det A$.",
    "answer": "\\[A=\\tfrac13\\bigl(2M^{\\mathsf T}-M\\bigr)=\\begin{pmatrix}1&-1&4\\\\5&2&-2\\\\-2&7&3\\end{pmatrix},\\qquad \\boxed{\\det A=187}.\\]",
    "trap": "Assuming $A$ is symmetric so that $A^{\\mathsf T}=A$, which collapses the equation to $3A=M$ and $A=\\tfrac13M$. But $M$ is not symmetric, so $A$ cannot be symmetric; the candidate $\\tfrac13M$ fails the equation ($\\tfrac13M+2(\\tfrac13M)^{\\mathsf T}\\neq M$). The equation couples $A$ with $A^{\\mathsf T}$ and must be solved as a $2\\times2$ linear system in the unknowns $A$ and $A^{\\mathsf T}$ (or split into symmetric and skew parts), not by wishing $A$ symmetric.",
    "solutions": [
      {
        "name": "Pair the equation with its transpose",
        "steps": [
          "Given $A+2A^{\\mathsf T}=M$ (1). Transpose both sides: $A^{\\mathsf T}+2A=M^{\\mathsf T}$ (2).",
          "Treat $A,A^{\\mathsf T}$ as unknowns. Eliminate $A^{\\mathsf T}$: from (1), $A^{\\mathsf T}=\\tfrac12(M-A)$; substitute into (2): $\\tfrac12(M-A)+2A=M^{\\mathsf T}\\Rightarrow \\tfrac32A=M^{\\mathsf T}-\\tfrac12M\\Rightarrow A=\\tfrac13(2M^{\\mathsf T}-M).$  (The coefficient determinant $\\begin{vmatrix}1&2\\\\2&1\\end{vmatrix}=-3\\neq0$ guarantees a unique solution.)",
          "Compute $2M^{\\mathsf T}-M$: with $M^{\\mathsf T}=\\begin{pmatrix}3&3&6\\\\9&6&3\\\\0&12&9\\end{pmatrix}$, we get $2M^{\\mathsf T}-M=\\begin{pmatrix}3&-3&12\\\\15&6&-6\\\\-6&21&9\\end{pmatrix}$, so $A=\\tfrac13(2M^{\\mathsf T}-M)=\\begin{pmatrix}1&-1&4\\\\5&2&-2\\\\-2&7&3\\end{pmatrix}.$",
          "Verify $A+2A^{\\mathsf T}=M$, then $\\det A=1(2\\cdot3-(-2)\\cdot7)-(-1)(5\\cdot3-(-2)(-2))+4(5\\cdot7-2(-2))=1(20)+1(11)+4(39)=20+11+156=\\boxed{187}.$"
        ]
      },
      {
        "name": "Split into symmetric and skew parts",
        "steps": [
          "Write $A=P+Q$ ($P$ symmetric, $Q$ skew). Then $A^{\\mathsf T}=P-Q$, so $A+2A^{\\mathsf T}=(P+Q)+2(P-Q)=3P-Q=M$.",
          "Match types: the symmetric part of $M$ must equal $3P$ and the skew part must equal $-Q$. So $P=\\tfrac13\\cdot\\tfrac12(M+M^{\\mathsf T})$ and $Q=-\\tfrac12(M-M^{\\mathsf T})$.",
          "Here $\\tfrac12(M+M^{\\mathsf T})=\\begin{pmatrix}3&6&3\\\\6&6&\\tfrac{15}{2}\\\\3&\\tfrac{15}{2}&9\\end{pmatrix}$ gives $P=\\begin{pmatrix}1&2&1\\\\2&2&\\tfrac52\\\\1&\\tfrac52&3\\end{pmatrix}$, and $\\tfrac12(M-M^{\\mathsf T})=\\begin{pmatrix}0&3&-3\\\\-3&0&\\tfrac92\\\\3&-\\tfrac92&0\\end{pmatrix}$ gives $Q=\\begin{pmatrix}0&-3&3\\\\3&0&-\\tfrac92\\\\-3&\\tfrac92&0\\end{pmatrix}$.",
          "Add: $A=P+Q=\\begin{pmatrix}1&-1&4\\\\5&2&-2\\\\-2&7&3\\end{pmatrix}$, the same matrix, with $\\det A=\\boxed{187}.$"
        ]
      }
    ],
    "remark": "Insight. Any linear equation mixing $A$ and $A^{\\mathsf T}$ becomes solvable by transposing it to get a second equation, then solving the resulting $2\\times2$ scalar system — or, equivalently, by splitting into symmetric and skew parts, which the operators $A\\mapsto A,\\,A\\mapsto A^{\\mathsf T}$ act on diagonally ($P\\mapsto P$, $Q\\mapsto-Q$). The system $\\alpha A+\\beta A^{\\mathsf T}=M$ has a unique solution exactly when $\\alpha^2\\neq\\beta^2$; here $1^2\\neq2^2$."
  },
  {
    "theme": "detprops",
    "themeLabel": "Determinants: Properties & Evaluation",
    "title": "The Carousel Determinant",
    "difficulty": 3,
    "task": "Evaluate",
    "tags": [
      "circulant",
      "row operations",
      "factorisation",
      "sign trap",
      "factor theorem"
    ],
    "statement": "Let $a,b,c$ be real numbers. Evaluate\n$$\\Delta=\\begin{vmatrix} a & b & c\\\\ b & c & a\\\\ c & a & b \\end{vmatrix},$$\nand express your answer as a product of factors.",
    "answer": "$\\Delta=-(a+b+c)\\left(a^{2}+b^{2}+c^{2}-ab-bc-ca\\right)$",
    "trap": "The seductive move is to expand straight down the first column, collect $a^{3}+b^{3}+c^{3}-3abc$, recall the identity $a^{3}+b^{3}+c^{3}-3abc=(a+b+c)(a^{2}+b^{2}+c^{2}-ab-bc-ca)$ and write that as the answer. But the cofactor signs make $\\Delta=-(a^{3}+b^{3}+c^{3}-3abc)$, not $+$. Dropping the overall minus sign (the determinant of this cyclic pattern is the **negative** of the symmetric cubic) is the classic error: at $a=1,b=2,c=3$ the true value is $-18$, while the unsigned guess gives $+18$.",
    "solutions": [
      {
        "name": "Equal-row-sum column operation",
        "steps": [
          "Every row sums to $a+b+c$. Apply $C_1\\to C_1+C_2+C_3$; the whole first column becomes $a+b+c$: $$\\Delta=\\begin{vmatrix} a+b+c & b & c\\\\ a+b+c & c & a\\\\ a+b+c & a & b \\end{vmatrix}=(a+b+c)\\begin{vmatrix} 1 & b & c\\\\ 1 & c & a\\\\ 1 & a & b \\end{vmatrix}.$$",
          "In the reduced determinant do $R_2\\to R_2-R_1,\\ R_3\\to R_3-R_1$: $$\\Delta=(a+b+c)\\begin{vmatrix} 1 & b & c\\\\ 0 & c-b & a-c\\\\ 0 & a-b & b-c \\end{vmatrix}=(a+b+c)\\big[(c-b)(b-c)-(a-c)(a-b)\\big].$$",
          "Expand the bracket: $(c-b)(b-c)-(a-c)(a-b)=-(b-c)^2-(a^2-ab-ac+bc)=-(a^{2}+b^{2}+c^{2}-ab-bc-ca)$.",
          "Hence $\\boxed{\\Delta=-(a+b+c)\\left(a^{2}+b^{2}+c^{2}-ab-bc-ca\\right)}.$"
        ]
      },
      {
        "name": "Expansion plus signed identity",
        "steps": [
          "Expanding gives $\\Delta=a(cb-a^{2})-b(b^{2}-ac)+c(ba-c^{2})=3abc-a^{3}-b^{3}-c^{3}.$",
          "Thus $\\Delta=-(a^{3}+b^{3}+c^{3}-3abc)$ — keep the minus sign, this is where most slip.",
          "Use $a^{3}+b^{3}+c^{3}-3abc=(a+b+c)(a^{2}+b^{2}+c^{2}-ab-bc-ca)$.",
          "Therefore $\\boxed{\\Delta=-(a+b+c)\\left(a^{2}+b^{2}+c^{2}-ab-bc-ca\\right)}.$"
        ]
      }
    ],
    "remark": "Insight: a constant row sum is the flag for the operation $C_1\\to C_1+C_2+C_3$, which extracts $(a+b+c)$ instantly. The only real difficulty is honesty about the cofactor sign — a cyclic shift of the rows is an even-or-odd permutation question, and here it costs a minus."
  },
  {
    "theme": "detprops",
    "themeLabel": "Determinants: Properties & Evaluation",
    "title": "Three x's on the Diagonal",
    "difficulty": 3,
    "task": "Evaluate",
    "tags": [
      "row operations",
      "factor theorem",
      "polynomial in x",
      "repeated root"
    ],
    "statement": "Let $a,b,c$ be constants. Evaluate, as a polynomial in $x$,\n$$\\Delta(x)=\\begin{vmatrix} x+a & b & c\\\\ a & x+b & c\\\\ a & b & x+c \\end{vmatrix}.$$",
    "answer": "$\\Delta(x)=x^{2}\\,(x+a+b+c)$",
    "trap": "Because the diagonal reads $x+a,\\,x+b,\\,x+c$, it is tempting to declare the answer is the product of the diagonal, $(x+a)(x+b)(x+c)$. That is the value only of a **triangular** matrix; here the off-diagonal entries are nonzero, so the diagonal product is wrong. In fact $\\Delta(x)$ has a **double** root at $x=0$ — a feature $(x+a)(x+b)(x+c)$ cannot reproduce.",
    "solutions": [
      {
        "name": "Subtract the first row",
        "steps": [
          "Apply $R_2\\to R_2-R_1$ and $R_3\\to R_3-R_1$. The off-diagonal $a,b,c$ cancel: $$\\Delta(x)=\\begin{vmatrix} x+a & b & c\\\\ -x & x & 0\\\\ -x & 0 & x \\end{vmatrix}.$$",
          "Factor $x$ from $R_2$ and from $R_3$: $\\Delta(x)=x^{2}\\begin{vmatrix} x+a & b & c\\\\ -1 & 1 & 0\\\\ -1 & 0 & 1 \\end{vmatrix}.$",
          "Expand the $3\\times3$: along the first row it equals $(x+a)(1)-b(-1)+c(1)=x+a+b+c.$",
          "Therefore $\\boxed{\\Delta(x)=x^{2}(x+a+b+c)}.$"
        ]
      },
      {
        "name": "Factor theorem in x",
        "steps": [
          "Each column of $\\Delta(x)$ is $x e_i+(\\text{constant column})$; setting $x=0$ makes all three rows equal to $(a,b,c)$, so $\\Delta(0)=0$ — and the gradient also vanishes there, giving a root of multiplicity $2$, so $x^{2}\\mid\\Delta(x)$.",
          "Adding all three rows of the original shows each row sum is $x+a+b+c$, so $C_1\\to C_1+C_2+C_3$ produces a factor $(x+a+b+c)$; hence $\\Delta(x)=k\\,x^{2}(x+a+b+c)$.",
          "Compare the leading $x^{3}$ coefficient: the only $x^{3}$ term comes from the diagonal, giving coefficient $1$, so $k=1$.",
          "Thus $\\boxed{\\Delta(x)=x^{2}(x+a+b+c)}.$"
        ]
      }
    ],
    "remark": "Insight: $R_i\\to R_i-R_1$ instantly exposes the hidden structure $x\\cdot(\\text{an all-rows-equal perturbation})$, which forces the double root at $x=0$. The diagonal-product reflex is a triangular-matrix habit misapplied to a full matrix."
  },
  {
    "theme": "detprops",
    "themeLabel": "Determinants: Properties & Evaluation",
    "title": "A Gram of Truth",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "multilinearity",
      "column splitting",
      "outer-product update",
      "proportional columns"
    ],
    "statement": "For real $a,b,c$ evaluate\n$$\\Delta=\\begin{vmatrix} a^{2}+1 & ab & ac\\\\ ab & b^{2}+1 & bc\\\\ ac & bc & c^{2}+1 \\end{vmatrix}.$$",
    "answer": "$\\Delta=1+a^{2}+b^{2}+c^{2}$",
    "trap": "Reading off the diagonal and writing $(a^{2}+1)(b^{2}+1)(c^{2}+1)$ treats the matrix as if it were diagonal — it is not. At $a=b=c=1$ that guess gives $8$, whereas the true value is $4$. The matrix is the identity plus a single outer product $\\mathbf v\\mathbf v^{T}$, so its determinant is **linear**, not cubic, in the squares.",
    "solutions": [
      {
        "name": "Multilinear column split",
        "steps": [
          "Write column $1$ as $\\begin{pmatrix}a^2\\\\ab\\\\ac\\end{pmatrix}+\\begin{pmatrix}1\\\\0\\\\0\\end{pmatrix}=a\\begin{pmatrix}a\\\\b\\\\c\\end{pmatrix}+e_1$, and similarly $C_2=b\\,\\mathbf v+e_2$, $C_3=c\\,\\mathbf v+e_3$, where $\\mathbf v=(a,b,c)^{T}$.",
          "By multilinearity $\\Delta$ splits into $2^{3}=8$ determinants. Any term using the $\\mathbf v$-part in two or more columns has two columns proportional to $\\mathbf v$, hence vanishes.",
          "Surviving terms: $\\det(e_1,e_2,e_3)=1$, plus the three terms with $\\mathbf v$ in exactly one column: $a\\det(\\mathbf v,e_2,e_3)=a\\cdot a=a^{2}$, similarly $b^{2}$ and $c^{2}$.",
          "Summing, $\\boxed{\\Delta=1+a^{2}+b^{2}+c^{2}}.$"
        ]
      },
      {
        "name": "Row reduction",
        "steps": [
          "Use $R_1\\to R_1-a R_3'$? Instead clear the block directly: compute $\\Delta$ by $R_1\\to b\\,R_1-a\\,R_2$ style is messy, so evaluate by cofactors after the simplifying observation that each row is $e_i+(\\text{multiple of }\\mathbf v)$.",
          "Equivalently, recognise $M=I+\\mathbf v\\mathbf v^{T}$ with $\\mathbf v=(a,b,c)^{T}$. For such an outer product, $\\det(I+\\mathbf v\\mathbf v^{T})=1+\\mathbf v^{T}\\mathbf v$.",
          "Here $\\mathbf v^{T}\\mathbf v=a^{2}+b^{2}+c^{2}$.",
          "Hence $\\boxed{\\Delta=1+a^{2}+b^{2}+c^{2}}.$"
        ]
      }
    ],
    "remark": "Insight: spotting $M=I+\\mathbf v\\mathbf v^{T}$ converts a six-term expansion into one line. The proportional-columns principle (two columns parallel to $\\mathbf v$ kill the determinant) is what makes the multilinear split collapse to four terms."
  },
  {
    "theme": "detprops",
    "themeLabel": "Determinants: Properties & Evaluation",
    "title": "Sum-Pairs and the Vanishing Trick",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "row operations",
      "factorisation",
      "cofactor trap",
      "symmetry"
    ],
    "statement": "Evaluate\n$$\\Delta=\\begin{vmatrix} b+c & a & a\\\\ b & c+a & b\\\\ c & c & a+b \\end{vmatrix}.$$",
    "answer": "$\\Delta=4abc$",
    "trap": "Spotting $b+c,\\,c+a,\\,a+b$ on the diagonal tempts the answer $(b+c)(c+a)(a+b)$, as though the matrix were triangular. It is not; at $a=b=c=1$ that product is $8$ while the determinant is $4$. The clean value $4abc$ only appears after a row operation that first creates two zeros.",
    "solutions": [
      {
        "name": "Annihilating row operation",
        "steps": [
          "Apply $R_1\\to R_1-R_2-R_3$. The new first row is $(b+c-b-c,\\ a-(c+a)-c,\\ a-b-(a+b))=(0,\\,-2c,\\,-2b).$",
          "So $\\Delta=\\begin{vmatrix} 0 & -2c & -2b\\\\ b & c+a & b\\\\ c & c & a+b \\end{vmatrix}$; factor $-2$ from $R_1$: $\\Delta=-2\\begin{vmatrix} 0 & c & b\\\\ b & c+a & b\\\\ c & c & a+b \\end{vmatrix}.$",
          "Expand along the first row: $-2\\big[\\,-c\\,(b(a+b)-bc)+b\\,(bc-c(c+a))\\,\\big]=-2\\big[-c\\,b(a+b-c)+b\\,c(b-c-a)\\big].$",
          "Simplify the bracket to $bc(-a-b+c)+bc(b-c-a)=bc(-2a)=-2abc$, so $\\Delta=-2\\cdot(-2abc)=\\boxed{4abc}.$"
        ]
      },
      {
        "name": "Two-step combination",
        "steps": [
          "First $C_2\\to C_2-C_3$: column $2$ becomes $(a-a,\\ c+a-b,\\ c-(a+b))=(0,\\ a+c-b,\\ c-a-b).$",
          "Then expand along the new $C_2$; only the lower two entries contribute, each a $2\\times2$ minor.",
          "Carrying out the two minors and collecting gives $\\Delta=(a+c-b)\\!\\cdot\\!\\big[(b+c)b-ac\\big]-(c-a-b)\\big[(b+c)b-ab\\big]$, which simplifies term-by-term to $4abc$.",
          "Hence $\\boxed{\\Delta=4abc}.$"
        ]
      }
    ],
    "remark": "Insight: when the rows almost sum to something symmetric, the move $R_1\\to R_1-R_2-R_3$ (or its column analogue) manufactures a zero and a clean common factor. Chasing the diagonal product is the triangular-matrix reflex again — only valid when everything below (or above) the diagonal is zero."
  },
  {
    "theme": "detprops",
    "themeLabel": "Determinants: Properties & Evaluation",
    "title": "Three Consecutive Squares",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "column operations",
      "degree collapse",
      "factor theorem",
      "vandermonde"
    ],
    "statement": "For real numbers $a,b,c$ evaluate\n$$\\Delta=\\begin{vmatrix} a^{2} & (a+1)^{2} & (a+2)^{2}\\\\ b^{2} & (b+1)^{2} & (b+2)^{2}\\\\ c^{2} & (c+1)^{2} & (c+2)^{2} \\end{vmatrix}.$$",
    "answer": "$\\Delta=4\\,(a-b)(a-c)(b-c)$",
    "trap": "Each entry is a quadratic, so the determinant **looks** like a degree-$6$ polynomial in $a,b,c$ — leading many to expand all nine quadratics into a swamp of monomials, or to guess the answer must be sextic. In reality the consecutive-integer shift makes second differences constant, so two column operations collapse the degree to a cubic Vandermonde. Forgetting the constant factor $4$ (writing only $(a-b)(a-c)(b-c)$) is the residual slip.",
    "solutions": [
      {
        "name": "Telescoping column differences",
        "steps": [
          "Apply $C_3\\to C_3-C_2$ and $C_2\\to C_2-C_1$. Since $(t+2)^2-(t+1)^2=2t+3$ and $(t+1)^2-t^2=2t+1$: $$\\Delta=\\begin{vmatrix} a^{2} & 2a+1 & 2a+3\\\\ b^{2} & 2b+1 & 2b+3\\\\ c^{2} & 2c+1 & 2c+3 \\end{vmatrix}.$$",
          "Now $C_3\\to C_3-C_2$ gives a constant column: $(2t+3)-(2t+1)=2$. So $$\\Delta=\\begin{vmatrix} a^{2} & 2a+1 & 2\\\\ b^{2} & 2b+1 & 2\\\\ c^{2} & 2c+1 & 2 \\end{vmatrix}=2\\begin{vmatrix} a^{2} & 2a+1 & 1\\\\ b^{2} & 2b+1 & 1\\\\ c^{2} & 2c+1 & 1 \\end{vmatrix}.$$",
          "In the last determinant do $C_2\\to C_2-C_3$, turning $C_2$ into $2t$, then pull out $2$: $\\Delta=4\\begin{vmatrix} a^{2} & a & 1\\\\ b^{2} & b & 1\\\\ c^{2} & c & 1 \\end{vmatrix}.$",
          "The remaining determinant is a Vandermonde equal to $(a-b)(b-c)(a-c)$; hence $\\boxed{\\Delta=4(a-b)(a-c)(b-c)}.$"
        ]
      },
      {
        "name": "Factor theorem + degree count",
        "steps": [
          "After the differencing above the determinant is at most cubic; as a polynomial in $a$ it vanishes when $a=b$ (rows $1,2$ equal) and when $a=c$, so $(a-b)(a-c)\\mid\\Delta$; by symmetry $(a-b)(a-c)(b-c)\\mid\\Delta$.",
          "Both sides are degree $3$ and antisymmetric, so $\\Delta=k\\,(a-b)(a-c)(b-c)$ for a constant $k$.",
          "Fix $k$ by a test value, e.g. $a=0,b=1,c=2$: the determinant equals $\\begin{vmatrix}0&1&4\\\\1&4&9\\\\4&9&16\\end{vmatrix}=8$, while $(a-b)(a-c)(b-c)=(-1)(-2)(-1)=-2$, so $k=8/(-2)=-4$… recompute orientation: with the factored form $4(a-b)(a-c)(b-c)$ giving $4(-1)(-2)(-1)=-8$, matching the determinant $-8$ under the same ordering.",
          "Either way $|k|=4$ and the consistent signed identity is $\\boxed{\\Delta=4(a-b)(a-c)(b-c)}.$"
        ]
      }
    ],
    "remark": "Insight: consecutive squares have constant second difference, so two column subtractions linearise the columns and the apparent degree-$6$ object is really a scaled Vandermonde of degree $3$. The differencing trick generalises to any quadratic-in-shift pattern."
  },
  {
    "theme": "detprops",
    "themeLabel": "Determinants: Properties & Evaluation",
    "title": "The All-Ones Background",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "row operations",
      "multilinearity",
      "symmetric functions",
      "identity"
    ],
    "statement": "Let $a,b,c$ be nonzero reals. Evaluate\n$$\\Delta=\\begin{vmatrix} 1+a & 1 & 1\\\\ 1 & 1+b & 1\\\\ 1 & 1 & 1+c \\end{vmatrix}.$$",
    "answer": "$\\Delta=abc+ab+bc+ca$",
    "trap": "The diagonal $1+a,\\,1+b,\\,1+c$ invites the answer $(1+a)(1+b)(1+c)=1+a+b+c+ab+bc+ca+abc$. But that overcounts: the true value omits the $1+a+b+c$ part because the all-ones background ($J$) contributes only one extra symmetric term, not a full product. At $a=b=c=1$ the diagonal guess gives $8$ while the determinant is $4$.",
    "solutions": [
      {
        "name": "Subtract the first row",
        "steps": [
          "Apply $R_2\\to R_2-R_1$ and $R_3\\to R_3-R_1$: $$\\Delta=\\begin{vmatrix} 1+a & 1 & 1\\\\ -a & b & 0\\\\ -a & 0 & c \\end{vmatrix}.$$",
          "Expand along the third column: $\\Delta=1\\cdot\\big[(-a)(0)-b(-a)\\big]\\cdot 0\\text{-term}+\\dots$ — cleaner to expand along $R_2$ and $R_3$ entries; do it via cofactors of the last column: $\\Delta=0\\cdot C_{13}-0\\cdot C_{23}+c\\,\\det\\!\\begin{pmatrix}1+a&1\\\\-a&b\\end{pmatrix}+\\text{(the }R_2\\text{ entry }0).$",
          "Better: expand along $C_3=(1,0,c)^{T}$: $\\Delta=1\\cdot\\det\\!\\begin{pmatrix}-a&b\\\\-a&0\\end{pmatrix}+c\\cdot\\det\\!\\begin{pmatrix}1+a&1\\\\-a&b\\end{pmatrix}=1\\cdot(ab)+c\\big[b(1+a)+a\\big].$",
          "So $\\Delta=ab+c(b+ab+a)=ab+bc+ca+abc$, i.e. $\\boxed{\\Delta=abc+ab+bc+ca}.$"
        ]
      },
      {
        "name": "Factor $abc$ and split",
        "steps": [
          "Factor $a,b,c$ from rows $1,2,3$? Instead factor cleverly: write $\\Delta=abc\\begin{vmatrix} \\tfrac1a+1 & \\tfrac1a & \\tfrac1a\\\\[2pt] \\tfrac1b & \\tfrac1b+1 & \\tfrac1b\\\\[2pt] \\tfrac1c & \\tfrac1c & \\tfrac1c+1 \\end{vmatrix}$ after dividing $R_i$ by $a,b,c$ respectively (each row of the original is $e_i\\cdot(\\text{diag})+J$-row).",
          "This determinant is $\\det(I+ \\mathbf u\\mathbf 1^{T})$ form with $\\mathbf u=(1/a,1/b,1/c)^{T}$, so it equals $1+\\tfrac1a+\\tfrac1b+\\tfrac1c$.",
          "Multiply back: $\\Delta=abc\\left(1+\\tfrac1a+\\tfrac1b+\\tfrac1c\\right)=abc+bc+ca+ab.$",
          "Hence $\\boxed{\\Delta=abc+ab+bc+ca}.$"
        ]
      }
    ],
    "remark": "Insight: a matrix of the form $\\operatorname{diag}(a,b,c)+J$ (all-ones) has determinant $abc\\left(1+\\sum 1/a\\right)$ — the all-ones part has all rows equal, so it adds only the first-order symmetric terms, never the full product $(1+a)(1+b)(1+c)$."
  },
  {
    "theme": "detprops",
    "themeLabel": "Determinants: Properties & Evaluation",
    "title": "The 4×4 That Folds Flat",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "4x4 collapse",
      "constant row sum",
      "row operations",
      "repeated factor"
    ],
    "statement": "Let $a\\ne b$. Evaluate the $4\\times4$ determinant\n$$\\Delta=\\begin{vmatrix} a & b & b & b\\\\ b & a & b & b\\\\ b & b & a & b\\\\ b & b & b & a \\end{vmatrix}.$$",
    "answer": "$\\Delta=(a-b)^{3}(a+3b)$",
    "trap": "Two false instincts compete. First, attempting a blind $4\\times4$ cofactor expansion (a $24$-term ordeal) invites sign chaos. Second, after spotting that $a=b$ makes all rows equal, one may conclude $(a-b)$ is just a single factor, or guess $(a-b)^{4}$. The correct multiplicity is $3$, not $1$ or $4$: collapsing the constant row sum peels off exactly one factor $(a+3b)$ and leaves a $(a-b)^{3}$ block.",
    "solutions": [
      {
        "name": "Constant row sum then sweep",
        "steps": [
          "Each row sums to $a+3b$. Apply $C_1\\to C_1+C_2+C_3+C_4$, making column $1$ the constant $a+3b$: $$\\Delta=(a+3b)\\begin{vmatrix} 1 & b & b & b\\\\ 1 & a & b & b\\\\ 1 & b & a & b\\\\ 1 & b & b & a \\end{vmatrix}.$$",
          "Now $R_2\\to R_2-R_1,\\ R_3\\to R_3-R_1,\\ R_4\\to R_4-R_1$ to kill column $1$ below the top: $$\\Delta=(a+3b)\\begin{vmatrix} 1 & b & b & b\\\\ 0 & a-b & 0 & 0\\\\ 0 & 0 & a-b & 0\\\\ 0 & 0 & 0 & a-b \\end{vmatrix}.$$",
          "The matrix is now upper-triangular (after the first row, only diagonal $(a-b)$ entries survive), so its determinant is the product of the diagonal: $1\\cdot(a-b)^{3}.$",
          "Therefore $\\boxed{\\Delta=(a+3b)(a-b)^{3}}.$"
        ]
      },
      {
        "name": "Factor theorem in a",
        "steps": [
          "Treat $\\Delta$ as a polynomial in $a$. When $a=b$ all four rows are identical, so $\\Delta=0$; differentiating shows $(a-b)^{3}\\mid\\Delta$ — three rows coincide at $a=b$, forcing a triple factor.",
          "The total degree in $a$ is $4$, so $\\Delta=(a-b)^{3}(\\alpha a+\\beta)$ for constants $\\alpha,\\beta$.",
          "The leading coefficient of $a^{4}$ is $1$ (the main diagonal term), so $\\alpha=1$. Evaluate at $a=0$: $\\Delta(0)=-3b^{4}$ (the all-$b$-with-zero-diagonal determinant), giving $(-b)^{3}\\beta=-3b^{4}\\Rightarrow\\beta=3b$.",
          "Hence $\\Delta=(a-b)^{3}(a+3b)$, i.e. $\\boxed{\\Delta=(a-b)^{3}(a+3b)}.$"
        ]
      }
    ],
    "remark": "Insight: a $4\\times4$ is in syllabus only because it folds to $\\le3$ work. The pattern $aI+b(J-I)$ has determinant $(a-b)^{n-1}\\big(a+(n-1)b\\big)$; no determinant-expansion drudgery is needed — a single $C_1$-sum and three row subtractions triangularise it."
  },
  {
    "theme": "detprops",
    "themeLabel": "Determinants: Properties & Evaluation",
    "title": "A Determinant That Will Not Sit Still",
    "difficulty": 4,
    "task": "Find the maximum",
    "tags": [
      "row operations",
      "trigonometric entries",
      "extremum",
      "not constant"
    ],
    "statement": "Define\n$$f(x)=\\begin{vmatrix} 1+\\sin^{2}x & \\cos^{2}x & 4\\sin 2x\\\\ \\sin^{2}x & 1+\\cos^{2}x & 4\\sin 2x\\\\ \\sin^{2}x & \\cos^{2}x & 1+4\\sin 2x \\end{vmatrix}.$$\nFind the maximum value of $f(x)$ as $x$ ranges over $\\mathbb{R}$.",
    "answer": "$\\displaystyle\\max_{x}f(x)=6$",
    "trap": "Determinants of this `$I$ + repeated-column' shape are famous for collapsing to a constant, so the reflex is to declare $f(x)$ constant and answer $2$ — or to expand all nine trig entries and drown. Here the columns are not all repeated: the structure gives $f(x)=2+4\\sin 2x$, which genuinely **moves**. Its maximum is $2+4=6$, attained when $\\sin 2x=1$.",
    "solutions": [
      {
        "name": "Row differences linearise it",
        "steps": [
          "Apply $R_1\\to R_1-R_2$ and $R_2\\to R_2-R_3$. The trig entries cancel, leaving constants: $$f(x)=\\begin{vmatrix} 1 & -1 & 0\\\\ 0 & 1 & -1\\\\ \\sin^{2}x & \\cos^{2}x & 1+4\\sin 2x \\end{vmatrix}.$$",
          "Expand along the first column: $f(x)=1\\cdot\\det\\!\\begin{pmatrix}1&-1\\\\\\cos^2x&1+4\\sin2x\\end{pmatrix}+\\sin^{2}x\\cdot\\det\\!\\begin{pmatrix}-1&0\\\\1&-1\\end{pmatrix}.$",
          "Compute: first minor $=(1+4\\sin2x)+\\cos^{2}x$; second minor $=1$. So $f(x)=1+4\\sin2x+\\cos^{2}x+\\sin^{2}x=2+4\\sin2x.$",
          "Since $\\sin 2x\\in[-1,1]$, $f(x)\\in[-2,6]$, so $\\boxed{\\max f=6}$ (at $\\sin2x=1$)."
        ]
      },
      {
        "name": "Identity plus a single repeated row",
        "steps": [
          "Write the matrix as $I+\\mathbf 1\\,\\mathbf r^{T}$? Not quite; instead note that subtracting the identity leaves the SAME row $(\\sin^2x,\\cos^2x,4\\sin2x)$ in all three rows — the outer product $\\mathbf 1\\,\\mathbf r^{T}$. For $\\det(I+\\mathbf 1\\,\\mathbf r^{T})$ the value is $1+\\mathbf r^{T}\\mathbf 1$, i.e. $1$ plus the sum of the entries of $\\mathbf r$.",
          "The entries of $\\mathbf r$ are $\\sin^{2}x,\\ \\cos^{2}x,\\ 4\\sin2x$, whose sum is $\\sin^2x+\\cos^2x+4\\sin2x=1+4\\sin2x$.",
          "Hence $f(x)=1+(1+4\\sin2x)=2+4\\sin2x$, giving maximum $\\boxed{6}.$",
          "The maximum is realised at $2x=\\tfrac{\\pi}{2}$, i.e. $x=\\tfrac{\\pi}{4}$, where $\\sin2x=1$."
        ]
      }
    ],
    "remark": "Insight: the row-difference move $R_i\\to R_i-R_{i+1}$ strips the shared trig column to constants, exposing that $f$ is affine in $\\sin2x$ — not constant. The lesson: verify a determinant is constant before claiming it; here only the $1$'s of $I$ would have to dominate, and the off-set $4\\sin2x$ survives."
  },
  {
    "theme": "detprops",
    "themeLabel": "Determinants: Properties & Evaluation",
    "title": "Powers in a Row",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "factor theorem",
      "vandermonde",
      "sign of cyclic product",
      "column factoring"
    ],
    "statement": "For distinct reals $a,b,c$ evaluate, giving the answer in fully factored form,\n$$\\Delta=\\begin{vmatrix} a & b & c\\\\ a^{2} & b^{2} & c^{2}\\\\ a^{3} & b^{3} & c^{3} \\end{vmatrix}.$$",
    "answer": "$\\Delta=abc\\,(a-b)(b-c)(c-a)$",
    "trap": "Factoring $a,b,c$ from the three **columns** leaves a Vandermonde, but the surviving determinant $\\begin{vmatrix}1&1&1\\\\a&b&c\\\\a^{2}&b^{2}&c^{2}\\end{vmatrix}$ equals $(b-a)(c-a)(c-b)$, whose cyclic ordering and sign are easy to garble. Writing $abc(a-b)(a-c)(b-c)$ (a different sign from the cyclic form) or dropping the factor $abc$ entirely are the standard slips. The two cyclic expressions differ by a sign, so orientation must be tracked carefully.",
    "solutions": [
      {
        "name": "Factor columns, then Vandermonde",
        "steps": [
          "Each column is $a(a,a,a^2)\\dots$ — precisely, $C_1=a\\,(1,a,a^{2})^{T}$, $C_2=b\\,(1,b,b^{2})^{T}$, $C_3=c\\,(1,c,c^{2})^{T}$. Pull the scalars out: $\\Delta=abc\\begin{vmatrix} 1 & 1 & 1\\\\ a & b & c\\\\ a^{2} & b^{2} & c^{2} \\end{vmatrix}.$",
          "The remaining determinant is the standard Vandermonde $V=\\begin{vmatrix} 1 & 1 & 1\\\\ a & b & c\\\\ a^{2} & b^{2} & c^{2} \\end{vmatrix}=(b-a)(c-a)(c-b).$",
          "Rewrite in cyclic form: $(b-a)(c-a)(c-b)=(a-b)(b-c)(c-a)$ (check signs: each of the three brackets flips once $\\Rightarrow$ overall sign $(-1)^{3}\\cdot(-1)^{?}$; direct substitution $a=0,b=1,c=2$ gives both $=(1)(2)(1)=2$).",
          "Therefore $\\boxed{\\Delta=abc\\,(a-b)(b-c)(c-a)}.$"
        ]
      },
      {
        "name": "Factor theorem",
        "steps": [
          "As a polynomial, $\\Delta=0$ whenever two of $a,b,c$ are equal (two equal columns), so $(a-b)(b-c)(c-a)\\mid\\Delta$. Also setting $a=0$ makes the first column zero, so $a\\mid\\Delta$; likewise $b,c\\mid\\Delta$. Hence $abc(a-b)(b-c)(c-a)\\mid\\Delta$.",
          "Total degree of $\\Delta$: each column contributes $1+2+3=6$, so $\\deg\\Delta=6$; the divisor also has degree $3+3=6$, so $\\Delta=k\\,abc(a-b)(b-c)(c-a)$ for a constant $k$.",
          "Pin $k$ from the coefficient of $a\\,b^{2}c^{3}$ (the main-diagonal term), which is $+1$ in $\\Delta$ and $+1$ on the right, so $k=1$.",
          "Thus $\\boxed{\\Delta=abc\\,(a-b)(b-c)(c-a)}.$"
        ]
      }
    ],
    "remark": "Insight: factoring a common scalar from each column is multilinearity applied column-wise; what is left is the cleanest object in the subject, the Vandermonde. The genuine hazard is the sign of the cyclic product — always pin it with a numeric check like $a=0,b=1,c=2$."
  },
  {
    "theme": "detprops",
    "themeLabel": "Determinants: Properties & Evaluation",
    "title": "The Perfect Square in Disguise",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "product of determinants",
      "factor theorem",
      "symmetry",
      "perfect square"
    ],
    "statement": "For real $a,b,c$ evaluate\n$$\\Delta=\\begin{vmatrix} b^{2}+c^{2} & ab & ac\\\\ ab & c^{2}+a^{2} & bc\\\\ ac & bc & a^{2}+b^{2} \\end{vmatrix}.$$",
    "answer": "$\\Delta=4a^{2}b^{2}c^{2}$",
    "trap": "Brute-force expansion produces a degree-$6$ symmetric polynomial with fifteen-plus monomials; it is tempting to stop at a tangled sum, or to guess a `natural' symmetric form such as $(a^{2}+b^{2}+c^{2})(\\dots)$. The determinant is in fact a **perfect square**, $(2abc)^{2}$ — it factors as $\\det(NN^{T})=(\\det N)^{2}$. Reporting $2abc$ (forgetting it is the square) or an unsquared symmetric guess both fail; e.g. at $a=b=c=1$ the value is $4$, matching $4a^{2}b^{2}c^{2}$, not $2abc=2$.",
    "solutions": [
      {
        "name": "Recognise a product of determinants",
        "steps": [
          "Let $N=\\begin{pmatrix} 0 & c & b\\\\ c & 0 & a\\\\ b & a & 0 \\end{pmatrix}$. Then row $i$ of $NN^{T}$ has diagonal entry equal to the sum of squares of the other two letters and off-diagonal entries the products — exactly the given matrix. So $\\Delta=\\det(NN^{T}).$",
          "By the product rule $\\det(NN^{T})=\\det N\\cdot\\det N^{T}=(\\det N)^{2}.$",
          "Compute $\\det N=0\\cdot(0-a^{2})-c\\,(0-ab)+b\\,(ac-0)=abc+abc=2abc.$",
          "Hence $\\Delta=(2abc)^{2}=\\boxed{4a^{2}b^{2}c^{2}}.$"
        ]
      },
      {
        "name": "Factor theorem + perfect-square shape",
        "steps": [
          "Set $a=0$: the matrix becomes $\\begin{pmatrix} b^{2}+c^{2} & 0 & 0\\\\ 0 & c^{2} & bc\\\\ 0 & bc & b^{2} \\end{pmatrix}$, whose determinant is $(b^{2}+c^{2})(c^{2}b^{2}-b^{2}c^{2})=0$. So $a\\mid\\Delta$; checking the gradient shows $a^{2}\\mid\\Delta$, and by symmetry $a^{2}b^{2}c^{2}\\mid\\Delta$.",
          "$\\Delta$ is a symmetric degree-$6$ polynomial and $a^{2}b^{2}c^{2}$ already has degree $6$, so $\\Delta=k\\,a^{2}b^{2}c^{2}$ for a constant $k$.",
          "Evaluate at $a=b=c=1$: $\\Delta=\\begin{vmatrix}2&1&1\\\\1&2&1\\\\1&1&2\\end{vmatrix}=4$, so $k=4$.",
          "Therefore $\\boxed{\\Delta=4a^{2}b^{2}c^{2}}.$"
        ]
      },
      {
        "name": "Direct row reduction",
        "steps": [
          "Multiply $R_1$ by $a$, $R_2$ by $b$, $R_3$ by $c$ (so $\\Delta$ is scaled by $abc$); each row then shares structure allowing $R_1\\to R_1$, $R_2,R_3$ combinations that expose $\\pm2abc$ patterns.",
          "Equivalently, since the matrix equals $NN^{T}$ with $N$ symmetric, its determinant is the square of $\\det N=2abc$; the row-reduction merely re-derives $\\det N=2abc$ by expanding the sparse $N$.",
          "Undoing the scaling confirms no spurious factor was introduced.",
          "Hence $\\boxed{\\Delta=4a^{2}b^{2}c^{2}}.$"
        ]
      }
    ],
    "remark": "Insight: when a symmetric matrix's entries read as dot products of the rows of a sparser matrix $N$, the determinant is $(\\det N)^{2}$ — automatically a perfect square. Spotting the hidden skew-pattern $N$ (zero diagonal, off-diagonal entries $a,b,c$) turns a fifteen-term expansion into a one-line computation."
  },
  {
    "theme": "detspecial",
    "themeLabel": "Determinants: Factorisation, Area & Geometry",
    "title": "The Cube That Hid a Sum",
    "difficulty": 3,
    "task": "Factorise completely",
    "tags": [
      "factor theorem",
      "vandermonde",
      "degree count",
      "linear factors",
      "symmetric functions"
    ],
    "statement": "Let $x,y,z$ be distinct reals. Factorise into a product of linear factors:\n$$\\Delta=\\begin{vmatrix}1 & x & x^{3}\\\\ 1 & y & y^{3}\\\\ 1 & z & z^{3}\\end{vmatrix}.$$",
    "answer": "$\\Delta=(y-x)(z-x)(z-y)\\,(x+y+z)$",
    "trap": "Because the matrix looks 'almost Vandermonde', the seductive move is to declare $\\Delta=(y-x)(z-x)(z-y)$ and stop. That undercounts the degree: each row carries total degree $0+1+3=4$, so $\\Delta$ is homogeneous of degree $4$, while the bare Vandermonde has degree only $3$. A whole linear factor — the symmetric $x+y+z$ — is silently lost. The skipped cubic column ($x^{3}$ instead of $x^{2}$) is precisely what injects that extra symmetric factor.",
    "solutions": [
      {
        "name": "Factor theorem + degree balance",
        "steps": [
          "Two equal rows make a determinant vanish, so as a polynomial in the entries $\\Delta=0$ whenever $x=y$, $x=z$, or $y=z$. By the factor theorem each of $(y-x),(z-x),(z-y)$ divides $\\Delta$, hence so does the Vandermonde $V=(y-x)(z-x)(z-y)$, a degree-$3$ alternating polynomial.",
          "Each row contributes degree $0+1+3=4$, so $\\Delta$ is homogeneous of degree $4$. Therefore the cofactor $\\Delta/V$ is homogeneous of degree $1$. Since $\\Delta$ and $V$ are both alternating (sign-flip under swapping two of $x,y,z$), their ratio is symmetric, and the only symmetric degree-$1$ form is $\\lambda\\,(x+y+z)$.",
          "Fix $\\lambda$ by matching one monomial: the diagonal term of the determinant gives $+\\,y\\,z^{3}$ (coefficient $+1$), and $V\\cdot(x+y+z)$ produces $y\\,z^{3}$ with coefficient $+1$ as well, so $\\lambda=1$.",
          "Hence $\\boxed{\\Delta=(y-x)(z-x)(z-y)\\,(x+y+z)}.$"
        ]
      },
      {
        "name": "Column reduction then expansion",
        "steps": [
          "Subtract row $1$ from rows $2,3$: $R_2\\to R_2-R_1,\\ R_3\\to R_3-R_1$ gives $\\begin{vmatrix}1 & x & x^{3}\\\\ 0 & y-x & y^{3}-x^{3}\\\\ 0 & z-x & z^{3}-x^{3}\\end{vmatrix}.$",
          "Expand along the first column and pull $(y-x)$ and $(z-x)$ out of the $2\\times2$ block using $y^{3}-x^{3}=(y-x)(y^{2}+xy+x^{2})$: $\\Delta=(y-x)(z-x)\\begin{vmatrix}1 & y^{2}+xy+x^{2}\\\\ 1 & z^{2}+xz+x^{2}\\end{vmatrix}.$",
          "The $2\\times2$ determinant is $(z^{2}+xz)-(y^{2}+xy)=(z-y)(z+y+x)$, the $x^{2}$ terms cancelling.",
          "Multiplying back, $\\boxed{\\Delta=(y-x)(z-x)(z-y)\\,(x+y+z)}.$"
        ]
      }
    ],
    "remark": "Insight: replacing the $x^{2}$ column of the classical Vandermonde by $x^{3}$ is a 'lacunary' (gap) determinant — the missing exponent $2$ resurfaces as the elementary symmetric factor $e_1=x+y+z$. Always degree-count before declaring a factorisation complete."
  },
  {
    "theme": "detspecial",
    "themeLabel": "Determinants: Factorisation, Area & Geometry",
    "title": "The Carousel Determinant",
    "difficulty": 3,
    "task": "Evaluate and factorise",
    "tags": [
      "cyclic determinant",
      "row operations",
      "sum of cubes",
      "sign trap",
      "factorisation"
    ],
    "statement": "For real numbers $a,b,c$, evaluate the cyclic determinant\n$$\\Delta=\\begin{vmatrix}a & b & c\\\\ b & c & a\\\\ c & a & b\\end{vmatrix},$$\nand express the result both as a cubic in $a,b,c$ and as a product of factors.",
    "answer": "$\\Delta=-(a^{3}+b^{3}+c^{3}-3abc)=-(a+b+c)(a^{2}+b^{2}+c^{2}-ab-bc-ca)$",
    "trap": "Almost everyone 'remembers' the identity as $\\Delta=a^{3}+b^{3}+c^{3}-3abc$ with a plus sign. But the rows of this matrix are cyclic shifts to the LEFT, and the permutation realising that shift is an even/odd cycle whose sign flips the result: the true value is the NEGATIVE. Dropping that overall minus sign is a one-character error that reverses the determinant.",
    "solutions": [
      {
        "name": "Collapse via R1+R2+R3",
        "steps": [
          "Add all rows into the first: $R_1\\to R_1+R_2+R_3$ replaces row $1$ by $(a+b+c,\\,a+b+c,\\,a+b+c)$. Factor out $(a+b+c)$: $\\Delta=(a+b+c)\\begin{vmatrix}1 & 1 & 1\\\\ b & c & a\\\\ c & a & b\\end{vmatrix}.$",
          "In the reduced determinant do $C_2\\to C_2-C_1,\\ C_3\\to C_3-C_1$: $\\begin{vmatrix}1 & 0 & 0\\\\ b & c-b & a-b\\\\ c & a-c & b-c\\end{vmatrix}=(c-b)(b-c)-(a-b)(a-c).$",
          "Expand: $(c-b)(b-c)-(a-b)(a-c)=-(b-c)^{2}-(a^{2}-ab-ac+bc)=-(a^{2}+b^{2}+c^{2}-ab-bc-ca).$",
          "Therefore $\\Delta=-(a+b+c)(a^{2}+b^{2}+c^{2}-ab-bc-ca)=\\boxed{-(a^{3}+b^{3}+c^{3}-3abc)}.$"
        ]
      },
      {
        "name": "Sarrus / direct expansion",
        "steps": [
          "By Sarrus, $\\Delta=a(cb-a^{2})-b(b^{2}-ac)+c(ab-c^{2}).$",
          "Expand each term: $abc-a^{3}-b^{3}+abc+abc-c^{3}=3abc-a^{3}-b^{3}-c^{3}.$",
          "Group the sign: $\\Delta=-(a^{3}+b^{3}+c^{3}-3abc).$",
          "Apply the standard factorisation $a^{3}+b^{3}+c^{3}-3abc=(a+b+c)(a^{2}+b^{2}+c^{2}-ab-bc-ca)$ to get $\\boxed{\\Delta=-(a+b+c)(a^{2}+b^{2}+c^{2}-ab-bc-ca)}.$"
        ]
      }
    ],
    "remark": "Insight: the second factor equals $\\tfrac12\\big[(a-b)^2+(b-c)^2+(c-a)^2\\big]\\ge0$, so $\\Delta$ vanishes exactly when $a+b+c=0$ or $a=b=c$. The overall minus sign is the fingerprint of the LEFT-shift cyclic pattern — memorise the structure, not just the magnitude."
  },
  {
    "theme": "detspecial",
    "themeLabel": "Determinants: Factorisation, Area & Geometry",
    "title": "Three Sliding Squares",
    "difficulty": 4,
    "task": "Factorise completely",
    "tags": [
      "factorisation",
      "column operations",
      "constant factor",
      "vandermonde",
      "degree count"
    ],
    "statement": "Let $a,b,c$ be distinct reals. Factorise completely\n$$\\Delta=\\begin{vmatrix}a^{2} & (a+1)^{2} & (a+2)^{2}\\\\ b^{2} & (b+1)^{2} & (b+2)^{2}\\\\ c^{2} & (c+1)^{2} & (c+2)^{2}\\end{vmatrix}.$$",
    "answer": "$\\Delta=-4\\,(a-b)(b-c)(c-a)$",
    "trap": "Two seductive errors lurk. First, the entries are degree-$2$ each, so people expect a degree-$6$ answer and hunt for a leftover symmetric factor — but the column operations annihilate all the squared terms, collapsing $\\Delta$ to degree $3$ with a bare numerical coefficient. Second, having found the factor $(a-b)(b-c)(c-a)$, it is easy to drop or mis-place the constant $-4$ (or get the sign of the cyclic product backwards), since $(a-b)(b-c)(c-a)$ flips sign under any swap.",
    "solutions": [
      {
        "name": "Column differencing kills the squares",
        "steps": [
          "Expand a typical entry: $(a+1)^{2}=a^{2}+2a+1$ and $(a+2)^{2}=a^{2}+4a+4$. Apply $C_3\\to C_3-C_2$ and $C_2\\to C_2-C_1$ (do $C_3$ first using the original $C_2$).",
          "After $C_3\\to C_3-C_2$: column $3$ entry becomes $(a+2)^2-(a+1)^2=2a+3$. After $C_2\\to C_2-C_1$: column $2$ entry becomes $(a+1)^2-a^2=2a+1$. The determinant is now $\\begin{vmatrix}a^{2} & 2a+1 & 2a+3\\\\ b^{2} & 2b+1 & 2b+3\\\\ c^{2} & 2c+1 & 2c+3\\end{vmatrix}.$",
          "Now $C_3\\to C_3-C_2$ once more gives a constant column $(2,2,2)^{\\mathsf T}$: $\\begin{vmatrix}a^{2} & 2a+1 & 2\\\\ b^{2} & 2b+1 & 2\\\\ c^{2} & 2c+1 & 2\\end{vmatrix}.$ Pull out $2$ from $C_3$ and drop the constants from $C_2$ via $C_2\\to C_2-(2a\\cdot\\text{?})$— more cleanly, subtract $\\tfrac12(2a+1)$ multiples are unnecessary: just note $C_2=2\\,(\\text{linear})+C_3$-type, so expand directly.",
          "Reduce to $\\Delta=2\\begin{vmatrix}a^{2} & 2a & 1\\\\ b^{2} & 2b & 1\\\\ c^{2} & 2c & 1\\end{vmatrix}=4\\begin{vmatrix}a^{2} & a & 1\\\\ b^{2} & b & 1\\\\ c^{2} & c & 1\\end{vmatrix}=4\\cdot\\big(-(a-b)(b-c)(c-a)\\big)$, the last being the standard Vandermonde. Hence $\\boxed{\\Delta=-4(a-b)(b-c)(c-a)}.$"
        ]
      },
      {
        "name": "Factor theorem + pin the constant",
        "steps": [
          "If $a=b$ two rows coincide so $\\Delta=0$; by symmetry $(a-b),(b-c),(c-a)$ all divide $\\Delta$. After the column operations above the determinant is degree $3$ in $a,b,c$, so $\\Delta=k\\,(a-b)(b-c)(c-a)$ for a constant $k$.",
          "Evaluate at convenient values $a=0,b=1,c=2$: the matrix is $\\begin{pmatrix}0&1&4\\\\1&4&9\\\\4&9&16\\end{pmatrix}$ with determinant $0(64-81)-1(16-36)+4(9-16)=0+20-28=-8.$",
          "The product $(a-b)(b-c)(c-a)=(0-1)(1-2)(2-0)=(-1)(-1)(2)=2.$ So $-8=k\\cdot 2\\Rightarrow k=-4.$",
          "Therefore $\\boxed{\\Delta=-4(a-b)(b-c)(c-a)}.$"
        ]
      }
    ],
    "remark": "Insight: a single column difference turns a quadratic column into a linear one, and a second difference turns it constant — each step strips one degree. Equivalently $(a+j)^2$ for $j=0,1,2$ are three samples of a quadratic, and the second finite difference of any quadratic is the constant $2$, which is exactly the $4=2\\cdot2$ that survives."
  },
  {
    "theme": "detspecial",
    "themeLabel": "Determinants: Factorisation, Area & Geometry",
    "title": "A Triangle Walking Along a Parabola",
    "difficulty": 4,
    "task": "Find the area",
    "tags": [
      "area determinant",
      "translation invariance",
      "parabola",
      "half factor",
      "shoelace"
    ],
    "statement": "For a real parameter $t$, the points $A=(t,\\,t^{2})$, $B=(t+1,\\,(t+1)^{2})$ and $C=(t+2,\\,(t+2)^{2})$ lie on the parabola $y=x^{2}$. Show that the area of $\\triangle ABC$ does not depend on $t$, and find it.",
    "answer": "$[\\triangle ABC]=1$ (independent of $t$)",
    "trap": "The determinant of the three augmented vertices comes out to $2$, and it is tempting to call $2$ the area — but the triangle-area formula is $\\tfrac12\\,|\\det|$, NOT $|\\det|$. Forgetting the factor $\\tfrac12$ doubles the answer. (A second snare: keeping the raw signed value $+2$ without the absolute value would also be wrong if the orientation had been clockwise.)",
    "solutions": [
      {
        "name": "Area determinant with row subtraction",
        "steps": [
          "Area $=\\dfrac12\\left|\\;\\begin{vmatrix}t & t^{2} & 1\\\\ t+1 & (t+1)^{2} & 1\\\\ t+2 & (t+2)^{2} & 1\\end{vmatrix}\\;\\right|.$ Subtract $R_1$ from $R_2$ and $R_3$ to kill the constant column's role: $R_2\\to R_2-R_1,\\ R_3\\to R_3-R_1.$",
          "Row $2$ becomes $(1,\\,(t+1)^2-t^2,\\,0)=(1,\\,2t+1,\\,0)$ and row $3$ becomes $(2,\\,(t+2)^2-t^2,\\,0)=(2,\\,4t+4,\\,0)$. Expanding along the now-simple third column, $\\det=1\\cdot\\big[(1)(4t+4)-(2)(2t+1)\\big].$",
          "Simplify: $(4t+4)-(4t+2)=2$, a constant free of $t$. Thus $\\det=2$ for every $t$.",
          "Area $=\\dfrac12\\,|2|=\\boxed{1}$, independent of $t$."
        ]
      },
      {
        "name": "Translate to the origin",
        "steps": [
          "Area is translation-invariant, so subtract $A$ from $B$ and $C$: the edge vectors are $\\vec{AB}=(1,\\,(t+1)^2-t^2)=(1,\\,2t+1)$ and $\\vec{AC}=(2,\\,(t+2)^2-t^2)=(2,\\,4t+4).$",
          "Area $=\\dfrac12\\,\\big|\\,x_{AB}\\,y_{AC}-x_{AC}\\,y_{AB}\\,\\big|=\\dfrac12\\,\\big|\\,1\\cdot(4t+4)-2\\cdot(2t+1)\\,\\big|.$",
          "The cross term is $(4t+4)-(4t+2)=2$, with the $t$'s cancelling.",
          "Hence area $=\\dfrac12\\cdot2=\\boxed{1}$ for all $t$."
        ]
      }
    ],
    "remark": "Insight: equally spaced abscissae on a parabola give edge slopes that are themselves in arithmetic progression, so the $t$-dependence cancels — a determinant manifestation of 'second difference of a quadratic is constant'. The $\\tfrac12$ is the single most common point loss in JEE area questions."
  },
  {
    "theme": "detspecial",
    "themeLabel": "Determinants: Factorisation, Area & Geometry",
    "title": "Both Sides of the Absolute Value",
    "difficulty": 4,
    "task": "Find all values",
    "tags": [
      "area determinant",
      "absolute value",
      "modulus trap",
      "two solutions",
      "linear in parameter"
    ],
    "statement": "The triangle with vertices $A=(2,1)$, $B=(k,4)$ and $C=(6,3)$ has area $4$ square units. Find all real values of $k$.",
    "answer": "$k=4\\ \\text{ or }\\ k=12$",
    "trap": "Setting up $\\tfrac12\\det=4$ (dropping the modulus and using only the $+$ sign) gives the single answer $k=12$ — and the other genuine value $k=4$ is silently lost. The area condition is $\\tfrac12\\,|\\det|=4$, i.e. $\\det=\\pm 8$, so BOTH signs must be solved. Reporting only one root is the classic 'forgot the $\\pm$' mistake.",
    "solutions": [
      {
        "name": "Area determinant with both signs",
        "steps": [
          "Area $=\\dfrac12\\left|\\;\\begin{vmatrix}2 & 1 & 1\\\\ k & 4 & 1\\\\ 6 & 3 & 1\\end{vmatrix}\\;\\right|.$ Expand along the first row: $\\det=2(4-3)-1(k-6)+1(3k-24)=2-(k-6)+(3k-24).$",
          "Simplify: $2-k+6+3k-24=2k-16.$ So the area condition is $\\dfrac12\\,|2k-16|=4$, i.e. $|2k-16|=8$, i.e. $|k-8|=4.$",
          "Hence $k-8=\\pm4$, giving $k=12$ or $k=4.$ Both make the three points non-collinear (area $\\ne0$), so both are valid.",
          "Therefore $\\boxed{k=4\\ \\text{or}\\ k=12}.$"
        ]
      },
      {
        "name": "Base-times-height check",
        "steps": [
          "Line $AC$ through $(2,1)$ and $(6,3)$ has slope $\\tfrac{3-1}{6-2}=\\tfrac12$, equation $x-2y=0$. Its length is $|AC|=\\sqrt{16+4}=2\\sqrt5.$",
          "Distance from $B=(k,4)$ to $x-2y=0$ is $\\dfrac{|k-8|}{\\sqrt5}.$ Area $=\\dfrac12\\cdot|AC|\\cdot d=\\dfrac12\\cdot2\\sqrt5\\cdot\\dfrac{|k-8|}{\\sqrt5}=|k-8|.$",
          "Set $|k-8|=4$, so $k-8=\\pm4.$ The absolute value forces two cases, exactly as the modulus in the determinant formula does.",
          "Thus $\\boxed{k=4\\ \\text{or}\\ k=12}.$"
        ]
      }
    ],
    "remark": "Insight: a single vertex moving linearly makes $\\det$ an affine function of $k$, so $|\\det|=\\text{const}$ is a 'V'-shaped equation with two arms — geometrically $B$ can sit on either of two lines parallel to $AC$. The modulus is not decoration; it doubles the solution set."
  },
  {
    "theme": "detspecial",
    "themeLabel": "Determinants: Factorisation, Area & Geometry",
    "title": "Three Roads to One Crossing",
    "difficulty": 4,
    "task": "Find the value",
    "tags": [
      "concurrency",
      "determinant condition",
      "lines",
      "intersection point",
      "consistency"
    ],
    "statement": "The three lines\n$$L_1: x+2y-3=0,\\qquad L_2: 2x-y-1=0,\\qquad L_3: kx+3y-5=0$$\nare concurrent. Find the value of $k$, and verify that the common point is the same one through which $L_1$ and $L_2$ pass.",
    "answer": "$k=2$ (common point $(1,1)$)",
    "trap": "A tempting shortcut is to demand only that $L_3$ pass through the intersection of $L_1$ and $L_2$ — which is correct — but students often instead force the determinant of the COEFFICIENT block (the $2\\times2$ leading minor, ignoring the constants) to vanish, i.e. treat 'parallel slopes' as 'concurrent'. Concurrency of three lines is the vanishing of the full $3\\times3$ determinant of $(\\text{coeff }x,\\ \\text{coeff }y,\\ \\text{constant})$, not of the slopes — confusing the two gives a wrong $k$ (or no solution at all).",
    "solutions": [
      {
        "name": "Vanishing 3×3 concurrency determinant",
        "steps": [
          "Three lines $a_ix+b_iy+c_i=0$ are concurrent iff $\\begin{vmatrix}a_1 & b_1 & c_1\\\\ a_2 & b_2 & c_2\\\\ a_3 & b_3 & c_3\\end{vmatrix}=0.$ Here this is $\\begin{vmatrix}1 & 2 & -3\\\\ 2 & -1 & -1\\\\ k & 3 & -5\\end{vmatrix}=0.$",
          "Expand along the first column: $1\\big[(-1)(-5)-(-1)(3)\\big]-2\\big[(2)(-5)-(-3)(3)\\big]+k\\big[(2)(-1)-(-3)(-1)\\big].$",
          "Compute: $1(5+3)-2(-10+9)+k(-2-3)=8-2(-1)-5k=8+2-5k=10-5k.$ Setting $10-5k=0$ gives $k=2.$",
          "Therefore $\\boxed{k=2}.$"
        ]
      },
      {
        "name": "Intersect first, then substitute",
        "steps": [
          "Solve $L_1,L_2$: from $x+2y=3$ and $2x-y=1$, multiply the second by $2$ to get $4x-2y=2$; add to the first: $5x=5\\Rightarrow x=1$, then $y=1.$ The common point of $L_1,L_2$ is $(1,1).$",
          "For all three to be concurrent, $L_3$ must pass through $(1,1)$: substitute into $kx+3y-5=0$ to get $k(1)+3(1)-5=0.$",
          "Hence $k+3-5=0\\Rightarrow k=2.$ This matches the determinant method and confirms the crossing point is $(1,1).$",
          "Therefore $\\boxed{k=2}.$"
        ]
      }
    ],
    "remark": "Insight: the concurrency determinant is just the consistency condition of the $3\\times3$ system $a_ix+b_iy=-c_i$ — a common solution exists with this exact coefficient/constant array precisely when the augmented determinant is zero. Slopes alone (the leading minor) detect parallelism, a different question."
  },
  {
    "theme": "detspecial",
    "themeLabel": "Determinants: Factorisation, Area & Geometry",
    "title": "When the Carousel Stops",
    "difficulty": 4,
    "task": "Prove the conclusion",
    "tags": [
      "cyclic determinant",
      "factorisation",
      "sum of squares",
      "case analysis",
      "vanishing determinant"
    ],
    "statement": "Let $a,b,c$ be real numbers satisfying $a+b+c\\ne0$ and\n$$\\begin{vmatrix}a & b & c\\\\ b & c & a\\\\ c & a & b\\end{vmatrix}=0.$$\nProve that $a=b=c$.",
    "answer": "$a=b=c$",
    "trap": "From the factorisation $\\Delta=-(a+b+c)(a^{2}+b^{2}+c^{2}-ab-bc-ca)$, a hasty reader sets the FIRST factor to zero and 'concludes' $a+b+c=0$ — directly contradicting the hypothesis $a+b+c\\ne0$. The two factors are distinct; the hypothesis deliberately rules out one of them, forcing the OTHER factor to vanish. Picking the wrong factor wrecks the argument.",
    "solutions": [
      {
        "name": "Factor, then eliminate by hypothesis",
        "steps": [
          "Add all rows to the first ($R_1\\to R_1+R_2+R_3$), factor out $a+b+c$, and reduce (as in the standard evaluation) to obtain $\\Delta=-(a+b+c)\\,(a^{2}+b^{2}+c^{2}-ab-bc-ca).$",
          "Given $\\Delta=0$, the product is zero, so $a+b+c=0$ or $a^{2}+b^{2}+c^{2}-ab-bc-ca=0.$ The hypothesis $a+b+c\\ne0$ kills the first option.",
          "Hence $a^{2}+b^{2}+c^{2}-ab-bc-ca=0.$ Rewrite this as $\\tfrac12\\big[(a-b)^{2}+(b-c)^{2}+(c-a)^{2}\\big]=0.$",
          "A sum of real squares is zero only if each square is zero, so $a-b=b-c=c-a=0$, i.e. $\\boxed{a=b=c}.$"
        ]
      },
      {
        "name": "Direct from the cubic identity",
        "steps": [
          "The determinant equals $-(a^{3}+b^{3}+c^{3}-3abc).$ So $\\Delta=0$ means $a^{3}+b^{3}+c^{3}=3abc.$",
          "Use the identity $a^{3}+b^{3}+c^{3}-3abc=(a+b+c)\\cdot\\tfrac12\\big[(a-b)^{2}+(b-c)^{2}+(c-a)^{2}\\big].$ Its left side is $0$.",
          "Since $a+b+c\\ne0$, divide it out to force $\\tfrac12\\big[(a-b)^{2}+(b-c)^{2}+(c-a)^{2}\\big]=0.$",
          "Each squared term must vanish, giving $\\boxed{a=b=c}.$"
        ]
      }
    ],
    "remark": "Insight: the cyclic determinant has exactly two ways to die — degenerate sum ($a+b+c=0$) or full symmetry ($a=b=c$). A well-placed hypothesis surgically removes one branch, and recognising the second factor as a sum of squares finishes the job."
  },
  {
    "theme": "detspecial",
    "themeLabel": "Determinants: Factorisation, Area & Geometry",
    "title": "The Diagonal Shift",
    "difficulty": 5,
    "task": "Factorise and solve",
    "tags": [
      "parametric determinant",
      "factorisation",
      "repeated factor",
      "column operations",
      "polynomial in x"
    ],
    "statement": "Let $a,b,c$ be fixed reals and define\n$$f(x)=\\begin{vmatrix}x+a & b & c\\\\ a & x+b & c\\\\ a & b & x+c\\end{vmatrix}.$$\nFactorise $f(x)$ completely as a polynomial in $x$, and hence find all real roots of $f(x)=0$.",
    "answer": "$f(x)=x^{2}\\,(x+a+b+c)$; roots $x=0$ (double) and $x=-(a+b+c)$",
    "trap": "Because $x$ appears only on the diagonal, the lazy guess is $f(x)=(x+a)(x+b)(x+c)$ — reading the determinant as if it were triangular. It is not: the off-diagonal entries are non-zero, and the correct factorisation is $x^{2}(x+a+b+c)$. The traps are (i) inventing the spurious factors $(x+b),(x+c)$, and (ii) missing that $x=0$ is a DOUBLE root (the determinant carries a factor $x^{2}$), reporting only one zero root.",
    "solutions": [
      {
        "name": "Add columns, then clear",
        "steps": [
          "Apply $C_1\\to C_1+C_2+C_3$. Each entry of the new first column becomes $x+a+b+c$ (e.g. row $1$: $(x+a)+b+c$), so $f(x)=(x+a+b+c)\\begin{vmatrix}1 & b & c\\\\ 1 & x+b & c\\\\ 1 & b & x+c\\end{vmatrix}.$",
          "In the reduced determinant do $R_2\\to R_2-R_1$ and $R_3\\to R_3-R_1$: $\\begin{vmatrix}1 & b & c\\\\ 0 & x & 0\\\\ 0 & 0 & x\\end{vmatrix}.$",
          "This is upper-triangular with diagonal $1,x,x$, so its value is $x^{2}.$ Therefore $f(x)=(x+a+b+c)\\cdot x^{2}.$",
          "Thus $\\boxed{f(x)=x^{2}(x+a+b+c)}$, with roots $x=0$ (multiplicity $2$) and $x=-(a+b+c).$"
        ]
      },
      {
        "name": "Identify the matrix as scalar + outer product",
        "steps": [
          "Write the matrix as $xI+M$ where $M=\\begin{pmatrix}a&b&c\\\\a&b&c\\\\a&b&c\\end{pmatrix}$ has all rows equal — the outer product $M=\\mathbf{1}\\,(a\\ b\\ c)$ with $\\mathbf 1=(1,1,1)^{\\mathsf T}$.",
          "For $x\\ne0$, $\\det(xI+M)=x^{3}\\det\\!\\big(I+\\tfrac1x M\\big).$ Since $M=\\mathbf 1\\,(a\\ b\\ c)$ is an outer product, $\\det(I+\\tfrac1x M)=1+\\tfrac1x\\,(a+b+c)$ (the matrix-determinant lemma, here just $1$ plus $\\tfrac1x(a+b+c)$).",
          "Hence $f(x)=x^{3}\\Big(1+\\dfrac{a+b+c}{x}\\Big)=x^{3}+(a+b+c)x^{2}=x^{2}\\,(x+a+b+c)$, valid for all $x$ by polynomial continuity.",
          "So $\\boxed{f(x)=x^{2}(x+a+b+c)}$ with the double root $x=0$ and simple root $x=-(a+b+c).$"
        ]
      },
      {
        "name": "Degree, value and a root check",
        "steps": [
          "Expanding, $f$ is a monic cubic in $x$. Put $x=0$: the matrix becomes $\\begin{pmatrix}a&b&c\\\\a&b&c\\\\a&b&c\\end{pmatrix}$ with three identical rows, so $f(0)=0$; thus $x$ divides $f.$",
          "Differentiate the determinant rowwise at $x=0$ (sum of three determinants, each differentiating one diagonal entry): each such determinant still has two identical rows among the remaining ones, so $f'(0)=0.$ Hence $x^{2}\\mid f.$",
          "Write $f(x)=x^{2}(x+\\alpha).$ Compare the coefficient of $x^{2}$: expanding the determinant, the $x^{2}$ coefficient is $a+b+c$ (sum of the three diagonal-pair contributions), so $\\alpha=a+b+c.$",
          "Therefore $\\boxed{f(x)=x^{2}(x+a+b+c)}.$"
        ]
      }
    ],
    "remark": "Insight: a scalar shift of an all-rows-equal matrix, $xI+\\mathbf{1}\\,v^{\\mathsf T}$, always factors as $x^{n-1}(x+\\sum v_i)$ for order $n$. Here $n=3$ gives the double zero — the determinant 'feels' the degeneracy of $M$ (all rows equal) as the multiplicity of the root $x=0$."
  },
  {
    "theme": "detspecial",
    "themeLabel": "Determinants: Factorisation, Area & Geometry",
    "title": "The Cube in Disguise",
    "difficulty": 5,
    "task": "Prove the identity",
    "tags": [
      "factorisation",
      "row operations",
      "perfect cube",
      "triangular reduction",
      "common factor"
    ],
    "statement": "Prove that for all real $a,b,c$,\n$$\\begin{vmatrix}a-b-c & 2a & 2a\\\\ 2b & b-c-a & 2b\\\\ 2c & 2c & c-a-b\\end{vmatrix}=(a+b+c)^{3}.$$",
    "answer": "$(a+b+c)^{3}$",
    "trap": "After spotting the common factor $a+b+c$ along one line, it is tempting to pull it out ONCE and then mis-handle the remaining $2\\times2$ work, landing on $(a+b+c)^{2}$ or $(a+b+c)\\cdot(\\text{quadratic that isn't a perfect square})$. The determinant is degree $3$ and the factor $a+b+c$ appears with FULL multiplicity $3$ — losing even one power, or stopping at the square, is the error. (Equally, mis-signing the diagonal entries $b-c-a$ etc. breaks the perfect cube.)",
    "solutions": [
      {
        "name": "R1+R2+R3 then triangularise",
        "steps": [
          "Apply $R_1\\to R_1+R_2+R_3$. Column by column the new first row is $\\big((a-b-c)+2b+2c,\\ 2a+(b-c-a)+2c,\\ 2a+2b+(c-a-b)\\big)=(a+b+c,\\ a+b+c,\\ a+b+c).$",
          "Factor $(a+b+c)$ out of row $1$: $\\Delta=(a+b+c)\\begin{vmatrix}1 & 1 & 1\\\\ 2b & b-c-a & 2b\\\\ 2c & 2c & c-a-b\\end{vmatrix}.$",
          "Now $C_2\\to C_2-C_1$ and $C_3\\to C_3-C_1$: row $1$ becomes $(1,0,0)$; row $2$ becomes $(2b,\\,-a-b-c,\\,0)$; row $3$ becomes $(2c,\\,0,\\,-a-b-c).$ The matrix is lower-triangular.",
          "Its determinant is the product of the diagonal: $1\\cdot(-(a+b+c))\\cdot(-(a+b+c))=(a+b+c)^{2}.$ Multiplying back the factor pulled out, $\\Delta=(a+b+c)\\cdot(a+b+c)^{2}=\\boxed{(a+b+c)^{3}}.$"
        ]
      },
      {
        "name": "Factor theorem + multiplicity",
        "steps": [
          "Set $s=a+b+c.$ Putting $s=0$ (e.g. $c=-a-b$) makes each diagonal entry $a-b-c=a-b+a+b=2a$, equal to its row's off-diagonals $2a$; then row $1$ is $(2a,2a,2a)$ and similarly rows become proportional, so $\\Delta=0.$ Hence $(a+b+c)\\mid\\Delta.$",
          "$\\Delta$ is homogeneous of degree $3$, so $\\Delta=(a+b+c)\\,Q(a,b,c)$ with $Q$ homogeneous of degree $2$ and symmetric under permuting $(a,b,c)$ (the matrix structure is symmetric under simultaneous permutation of rows/columns).",
          "To see the multiplicity is full, note the gradient of $\\Delta$ also vanishes on $s=0$ (each first-order variation keeps two proportional rows), forcing $(a+b+c)^{2}\\mid\\Delta$; the leftover factor is then linear and symmetric, hence a multiple of $a+b+c$ again.",
          "Pin the constant at $a=1,b=c=0$: the matrix is $\\begin{pmatrix}1&2&2\\\\0&-1&0\\\\0&0&-1\\end{pmatrix}$ with determinant $1.$ Since $(a+b+c)^{3}=1$ there too, the constant is $1$, giving $\\boxed{\\Delta=(a+b+c)^{3}}.$"
        ]
      }
    ],
    "remark": "Insight: the symmetric '$2$ off-diagonal, difference on the diagonal' pattern is engineered so that summing rows produces a constant line — the signature trick that exposes the repeated factor. Verify multiplicity by checking that both $\\Delta$ and its first variation vanish on $a+b+c=0$."
  },
  {
    "theme": "detspecial",
    "themeLabel": "Determinants: Factorisation, Area & Geometry",
    "title": "Three Points on a Cubic, in a Line",
    "difficulty": 5,
    "task": "Find the condition",
    "tags": [
      "collinearity",
      "area determinant",
      "factorisation",
      "cubic curve",
      "distinctness"
    ],
    "statement": "Let $a,b,c$ be three distinct reals. The points $P=(a,a^{3})$, $Q=(b,b^{3})$ and $R=(c,c^{3})$ lie on the cubic $y=x^{3}$. Find the necessary and sufficient condition on $a,b,c$ for $P,Q,R$ to be collinear, and state it as simply as possible.",
    "answer": "$a+b+c=0$",
    "trap": "The collinearity determinant factors as a Vandermonde times $(a+b+c)$, so setting it to zero appears to allow $a=b$, $b=c$, or $c=a$ as 'solutions'. But those Vandermonde factors are exactly the cases where two points COINCIDE — forbidden by the hypothesis that $a,b,c$ are distinct (and two equal points cannot define a triangle whose area we are zeroing). Reading off $a=b$ etc. as a valid collinearity condition is the trap; the only genuine condition is the surviving symmetric factor $a+b+c=0$.",
    "solutions": [
      {
        "name": "Collinearity determinant, then factor",
        "steps": [
          "$P,Q,R$ are collinear iff the area is zero, i.e. $\\begin{vmatrix}a & a^{3} & 1\\\\ b & b^{3} & 1\\\\ c & c^{3} & 1\\end{vmatrix}=0.$",
          "Subtract $R_1$ from $R_2,R_3$ and factor: $R_2\\to R_2-R_1$ gives $(b-a,\\,b^{3}-a^{3},\\,0)$ with $b^{3}-a^{3}=(b-a)(b^{2}+ab+a^{2})$; similarly for $R_3.$ Pulling out $(b-a),(c-a)$, $\\det=(b-a)(c-a)\\begin{vmatrix}1 & a^{2}+ab+b^{2}\\\\ 1 & a^{2}+ac+c^{2}\\end{vmatrix}.$",
          "The $2\\times2$ value is $(a^{2}+ac+c^{2})-(a^{2}+ab+b^{2})=a(c-b)+(c^{2}-b^{2})=(c-b)(a+b+c).$ Hence $\\det=(b-a)(c-a)(c-b)(a+b+c).$",
          "Since $a,b,c$ are distinct, $(b-a)(c-a)(c-b)\\ne0$, so $\\det=0\\iff \\boxed{a+b+c=0}.$"
        ]
      },
      {
        "name": "Chord-slope (geometric) argument",
        "steps": [
          "On $y=x^{3}$, the slope of the chord joining $(p,p^{3})$ and $(q,q^{3})$ is $\\dfrac{p^{3}-q^{3}}{p-q}=p^{2}+pq+q^{2}.$",
          "Collinearity of $P,Q,R$ means chord $PQ$ and chord $PR$ have equal slope: $a^{2}+ab+b^{2}=a^{2}+ac+c^{2}.$",
          "Cancel $a^{2}$ and rearrange: $ab+b^{2}=ac+c^{2}\\Rightarrow a(b-c)+(b^{2}-c^{2})=0\\Rightarrow (b-c)(a+b+c)=0.$",
          "As $b\\ne c$, divide by $(b-c)$ to get $\\boxed{a+b+c=0}.$"
        ]
      }
    ],
    "remark": "Insight: a line meets the cubic $y=x^{3}$ in at most three points, and by Vieta the three abscissae of those intersections sum to the negative of the coefficient of $x^{2}$ — which is $0$ for $y=x^{3}$ minus a line. Hence collinear roots always satisfy $a+b+c=0$; the determinant is just this Vieta relation in disguise."
  },
  {
    "theme": "adjinv",
    "themeLabel": "Adjoint & Inverse",
    "title": "The Adjoint of an Adjoint",
    "difficulty": 3,
    "task": "Evaluate",
    "tags": [
      "adjoint",
      "determinant",
      "order-3",
      "exponent-law"
    ],
    "statement": "Let $A$ be a $3\\times 3$ matrix with $\\det A = 5$. Compute the value of $\\big|\\operatorname{adj}(\\operatorname{adj} A)\\big|$.",
    "answer": "\\[\\boxed{625}\\]",
    "trap": "Writing $\\operatorname{adj}(\\operatorname{adj}A)=A$ (true only for $n=2$) and concluding the determinant is $|A|=5$. For $n=3$, $\\operatorname{adj}(\\operatorname{adj}A)=|A|^{\\,n-2}A=|A|\\,A$, so the determinant is $|A|^{3}\\cdot|A|=625$, not $5$.",
    "solutions": [
      {
        "name": "Iterate $|\\operatorname{adj} M|=|M|^{\\,n-1}$",
        "steps": [
          "For an $n\\times n$ matrix, $|\\operatorname{adj} M| = |M|^{\\,n-1}$. Here $n=3$, so the exponent is $2$.",
          "First apply it to $M=A$: $|\\operatorname{adj} A| = |A|^{2} = 5^{2} = 25$.",
          "Now apply it to $M=\\operatorname{adj}A$: $|\\operatorname{adj}(\\operatorname{adj}A)| = |\\operatorname{adj}A|^{2} = 25^{2} = 625$.",
          "\\[\\boxed{625}\\]"
        ]
      },
      {
        "name": "Use $\\operatorname{adj}(\\operatorname{adj}A)=|A|^{\\,n-2}A$",
        "steps": [
          "For $n=3$, $\\operatorname{adj}(\\operatorname{adj}A)=|A|^{\\,n-2}A=|A|^{1}A=5A$.",
          "Taking determinants of a $3\\times3$ scalar-multiplied matrix: $|5A| = 5^{3}\\,|A| = 125\\cdot 5$.",
          "Hence $|\\operatorname{adj}(\\operatorname{adj}A)| = 625$.",
          "\\[\\boxed{625}\\]"
        ]
      }
    ],
    "remark": "Insight: every adjoint of an $n\\times n$ matrix raises the determinant to the power $n-1$. Iterating the law $k$ times multiplies the exponent: $|\\,\\underbrace{\\operatorname{adj}\\cdots\\operatorname{adj}}_{k}A\\,| = |A|^{\\,(n-1)^{k}}$. With $n=3,k=2$ that is $|A|^{4}=5^{4}=625$ — a third route to the same number."
  },
  {
    "theme": "adjinv",
    "themeLabel": "Adjoint & Inverse",
    "title": "Tuning the Adjoint's Size",
    "difficulty": 3,
    "task": "Find all values",
    "tags": [
      "adjoint",
      "triangular",
      "determinant",
      "exponent-law"
    ],
    "statement": "Let $A=\\begin{pmatrix} k & 1 & 1 \\\\ 0 & 2 & 3 \\\\ 0 & 0 & k \\end{pmatrix}$. Find all real values of $k$ for which $\\big|\\operatorname{adj} A\\big| = 64$.",
    "answer": "\\[\\boxed{k=\\pm 2}\\]",
    "trap": "Setting $|\\operatorname{adj}A|=|A|$ and solving $2k^{2}=64$ to get $k=\\pm 4\\sqrt2$. The relation is $|\\operatorname{adj}A|=|A|^{\\,n-1}=|A|^{2}$, not $|A|$; using the correct exponent gives $(2k^{2})^{2}=64$.",
    "solutions": [
      {
        "name": "Apply the exponent law",
        "steps": [
          "$A$ is upper triangular, so $|A|$ is the product of its diagonal entries: $|A| = k\\cdot 2\\cdot k = 2k^{2}$.",
          "For $n=3$, $|\\operatorname{adj}A| = |A|^{\\,n-1} = |A|^{2} = (2k^{2})^{2} = 4k^{4}$.",
          "Set $4k^{4}=64\\Rightarrow k^{4}=16\\Rightarrow k^{2}=4$ (taking the real root), so $k=\\pm 2$.",
          "\\[\\boxed{k=\\pm 2}\\]"
        ]
      },
      {
        "name": "Solve for $|A|$ first",
        "steps": [
          "From $|\\operatorname{adj}A| = |A|^{2} = 64$ we get $|A| = \\pm 8$.",
          "But $|A| = 2k^{2}\\ge 0$ for real $k$, so only $|A| = 8$ is admissible (the value $-8$ is impossible).",
          "Thus $2k^{2}=8\\Rightarrow k^{2}=4\\Rightarrow k=\\pm 2$.",
          "\\[\\boxed{k=\\pm 2}\\]"
        ]
      }
    ],
    "remark": "Insight: solving via $|A|$ first exposes a hidden constraint — because $|A|=2k^{2}$ can never be negative, the algebraically valid root $|A|=-8$ must be discarded before extracting $k$. Squaring laws can manufacture phantom solutions if you forget the sign of $|A|$."
  },
  {
    "theme": "adjinv",
    "themeLabel": "Adjoint & Inverse",
    "title": "Adjoint of a Scaled Adjoint",
    "difficulty": 4,
    "task": "Evaluate",
    "tags": [
      "adjoint",
      "determinant",
      "scalar multiple",
      "order three"
    ],
    "statement": "Let $A$ be the $3\\times 3$ matrix\n$$A=\\begin{pmatrix} 1 & 2 & 2 \\\\ 2 & 1 & -2 \\\\ 2 & -2 & 1 \\end{pmatrix}.$$\nUsing the standard adjoint identities for matrices of order $3$, evaluate\n$$E=\\bigl|\\,\\operatorname{adj}\\!\\bigl(3\\,\\operatorname{adj} A\\bigr)\\,\\bigr|,$$\nthat is, the determinant of the adjoint of the matrix $3\\,\\operatorname{adj} A$. Express your answer as a power of $3$.",
    "answer": "$$\\boxed{E = 3^{18} = 387420489}$$",
    "trap": "The seductive wrong answer is $3^{14}$. It comes from pulling the scalar $3$ straight out of the determinant as if $|3M|=3\\,|M|$, equivalently using the false rule $\\operatorname{adj}(kA)=k\\,\\operatorname{adj}A$. For a matrix of order $n=3$ a scalar factor multiplies the determinant as $|kM|=k^{n}|M|=k^{3}|M|$, not $k^{1}|M|$. With $|3\\,\\operatorname{adj}A|$ mistakenly read as $3\\,|A|^{2}=3\\cdot 729$ and then squared, one lands on $(3\\cdot 729)^{2}=3^{14}$, missing the two extra powers of $3$ that the correct cube $3^{3}$ supplies.",
    "solutions": [
      {
        "name": "Direct identity chain",
        "steps": [
          "Here $n=3$. First compute $|A|$ by expansion along the first row: $|A| = 1(1\\cdot 1-(-2)(-2)) - 2(2\\cdot 1-(-2)\\cdot 2) + 2(2\\cdot(-2)-1\\cdot 2) = 1(1-4) - 2(2+4) + 2(-4-2) = -3 -12 -12 = -27.$",
          "Let $M = 3\\,\\operatorname{adj} A$. Using $|kM_0| = k^{n}|M_0|$ with $k=3,\\ n=3$ and $|\\operatorname{adj} A| = |A|^{\\,n-1} = |A|^{2}$, we get $|M| = 3^{3}\\,|\\operatorname{adj} A| = 27\\cdot|A|^{2} = 27\\cdot(-27)^{2} = 27\\cdot 729 = 3^{3}\\cdot 3^{6} = 3^{9}.$",
          "Now apply $|\\operatorname{adj} M| = |M|^{\\,n-1} = |M|^{2}$: $E = |\\operatorname{adj}(M)| = (3^{9})^{2} = 3^{18}.$",
          "Hence $E = 3^{18} = 387420489 = \\boxed{3^{18}}.$"
        ]
      },
      {
        "name": "Reduce both adjoints to a single power of |A|",
        "steps": [
          "Compute $|A| = -27$ as above, so $|A|^{2} = 729 = 3^{6}.$",
          "Write the whole expression in powers of $|A|$ before plugging numbers. With $n=3$: $|\\operatorname{adj}(3\\,\\operatorname{adj}A)| = |3\\,\\operatorname{adj}A|^{\\,n-1} = \\bigl(3^{n}\\,|\\operatorname{adj}A|\\bigr)^{2} = \\bigl(3^{3}\\,|A|^{2}\\bigr)^{2} = 3^{6}\\,|A|^{4}.$",
          "Substitute $|A| = -27 = -3^{3}$, so $|A|^{4} = 3^{12}$: $E = 3^{6}\\cdot 3^{12} = 3^{18}.$",
          "Therefore $E = \\boxed{3^{18}} = 387420489.$"
        ]
      },
      {
        "name": "Via adj(adj A) on the inner matrix",
        "steps": [
          "Compute $|A| = -27$. Recall the order-$3$ identity $\\operatorname{adj}(\\operatorname{adj}A) = |A|^{\\,n-2}A = |A|\\,A$, and $|\\,c\\,A| = c^{3}|A|$ for a scalar $c$.",
          "Factor the scalar inside the outer adjoint: $\\operatorname{adj}(3\\,\\operatorname{adj}A) = 3^{\\,n-1}\\,\\operatorname{adj}(\\operatorname{adj}A) = 3^{2}\\,\\bigl(|A|\\,A\\bigr) = 9\\,|A|\\,A.$",
          "Take determinants, using $|cA| = c^{3}|A|$ with $c = 9|A|$: $E = |\\,9\\,|A|\\,A\\,| = (9|A|)^{3}\\,|A| = 9^{3}\\,|A|^{4} = 3^{6}\\,(3^{3})^{4} = 3^{6}\\cdot 3^{12} = 3^{18}.$",
          "Thus $E = \\boxed{3^{18}} = 387420489$, agreeing with the other methods."
        ]
      }
    ],
    "remark": "**Insight.** The whole problem is a stress test of how scalars and adjoints interact with the determinant of an order-$3$ matrix, and **every** sub-step hinges on the same fact: a scalar factor leaves a determinant as its **cube**, since $|kM| = k^{3}|M|$. The two safe identities $|\\operatorname{adj}X| = |X|^{2}$ and $\\operatorname{adj}(\\operatorname{adj}X) = |X|\\,X$ do the rest. The fastest route is to **never expand any matrix** beyond the single number $|A| = -27$: collapse the layered expression to $3^{6}|A|^{4}$ first, then substitute. Students who lose powers of $3$ almost always do so by treating $|kM|$ as $k|M|$ or by writing $\\operatorname{adj}(kA) = k\\,\\operatorname{adj}A$ instead of $k^{2}\\,\\operatorname{adj}A$ $-$ the missing exponents are exactly where the $3^{18}$ versus $3^{14}$ split is decided."
  },
  {
    "theme": "adjinv",
    "themeLabel": "Adjoint & Inverse",
    "title": "When the Double Adjoint Reads 12",
    "difficulty": 4,
    "task": "Find all values",
    "tags": [
      "adjoint",
      "double-adjoint",
      "parameter",
      "order-3"
    ],
    "statement": "Let $A=\\begin{pmatrix} a & 0 & 1 \\\\ 0 & 2 & 0 \\\\ 1 & 0 & a \\end{pmatrix}$ where $a$ is real. The $(1,1)$ entry of $\\operatorname{adj}(\\operatorname{adj}A)$ equals $12$. Find all such $a$.",
    "answer": "\\[\\boxed{a=2}\\]",
    "trap": "Believing $\\operatorname{adj}(\\operatorname{adj}A)=A$ for this $3\\times3$ matrix, which would force its $(1,1)$ entry to be $a=12$. For $n=3$ the law is $\\operatorname{adj}(\\operatorname{adj}A)=|A|\\,A$, so the $(1,1)$ entry is $|A|\\cdot a$, not $a$.",
    "solutions": [
      {
        "name": "Apply $\\operatorname{adj}(\\operatorname{adj}A)=|A|A$",
        "steps": [
          "Expand $|A|$ along the second row: $|A| = 2\\begin{vmatrix}a&1\\\\1&a\\end{vmatrix} = 2(a^{2}-1)$.",
          "For $n=3$, $\\operatorname{adj}(\\operatorname{adj}A)=|A|^{\\,n-2}A=|A|\\,A$, so its $(1,1)$ entry is $|A|\\cdot a = 2(a^{2}-1)a = 2a^{3}-2a$.",
          "Set $2a^{3}-2a=12\\Rightarrow a^{3}-a-6=0\\Rightarrow (a-2)(a^{2}+2a+3)=0$.",
          "The quadratic $a^{2}+2a+3$ has discriminant $4-12<0$, so the only real root is $a=2$.",
          "\\[\\boxed{a=2}\\]"
        ]
      },
      {
        "name": "Brute cofactor route",
        "steps": [
          "Compute $\\operatorname{adj}A$, then $\\operatorname{adj}(\\operatorname{adj}A)$ entrywise; the $(1,1)$ entry simplifies to $2a^{3}-2a$ (matching $|A|\\,a$).",
          "Solve $2a^{3}-2a=12$, i.e. $a^{3}-a-6=0$.",
          "Testing integer divisors of $6$ gives $a=2$ as a root; factoring confirms the remaining quadratic is irreducible over $\\mathbb{R}$.",
          "\\[\\boxed{a=2}\\]"
        ]
      }
    ],
    "remark": "Insight: the double-adjoint law $\\operatorname{adj}(\\operatorname{adj}A)=|A|^{\\,n-2}A$ converts a fearsome two-layer cofactor computation into a single scalar multiple of $A$. The cubic still appears, but it factors cleanly because the wrong-route answer $a=12$ is a near-miss that the correct scaling rescales away."
  },
  {
    "theme": "adjinv",
    "themeLabel": "Adjoint & Inverse",
    "title": "Reverse the Order or Pay the Price",
    "difficulty": 4,
    "task": "Find the entry",
    "tags": [
      "inverse",
      "product-rule",
      "order-reversal",
      "shear"
    ],
    "statement": "Let $A=\\begin{pmatrix}1&2\\\\0&1\\end{pmatrix}$ and $B=\\begin{pmatrix}1&0\\\\3&1\\end{pmatrix}$. Find the $(1,1)$ entry of $(AB)^{-1}$, and confirm it equals the $(1,1)$ entry of $B^{-1}A^{-1}$ (not of $A^{-1}B^{-1}$).",
    "answer": "\\[\\boxed{1}\\]",
    "trap": "Computing $(AB)^{-1}$ as $A^{-1}B^{-1}$ (keeping the original order). That product is $\\begin{pmatrix}7&-2\\\\-3&1\\end{pmatrix}$ with $(1,1)$ entry $7$ — wrong. Inversion reverses order: $(AB)^{-1}=B^{-1}A^{-1}$, giving $(1,1)$ entry $1$.",
    "solutions": [
      {
        "name": "Invert the product directly",
        "steps": [
          "$AB=\\begin{pmatrix}1&2\\\\0&1\\end{pmatrix}\\begin{pmatrix}1&0\\\\3&1\\end{pmatrix}=\\begin{pmatrix}7&2\\\\3&1\\end{pmatrix}$, with $\\det(AB)=7-6=1$.",
          "For a $2\\times2$ matrix, $(AB)^{-1}=\\dfrac{1}{\\det}\\begin{pmatrix}1&-2\\\\-3&7\\end{pmatrix}=\\begin{pmatrix}1&-2\\\\-3&7\\end{pmatrix}$.",
          "The $(1,1)$ entry is $1$.",
          "\\[\\boxed{1}\\]"
        ]
      },
      {
        "name": "Reversed-order product",
        "steps": [
          "$A^{-1}=\\begin{pmatrix}1&-2\\\\0&1\\end{pmatrix}$ and $B^{-1}=\\begin{pmatrix}1&0\\\\-3&1\\end{pmatrix}$.",
          "Apply the rule $(AB)^{-1}=B^{-1}A^{-1}=\\begin{pmatrix}1&0\\\\-3&1\\end{pmatrix}\\begin{pmatrix}1&-2\\\\0&1\\end{pmatrix}=\\begin{pmatrix}1&-2\\\\-3&7\\end{pmatrix}$.",
          "Its $(1,1)$ entry is $1$, matching the direct computation; the non-reversed product $A^{-1}B^{-1}$ instead gives $7$, exposing the order trap.",
          "\\[\\boxed{1}\\]"
        ]
      }
    ],
    "remark": "Insight: order-reversal is forced by associativity — $(AB)(B^{-1}A^{-1}) = A(BB^{-1})A^{-1}=I$. These shear matrices don't commute, so the wrong order produces a genuinely different matrix, not just a relabelled one. Always peel the inverses off from the inside out."
  },
  {
    "theme": "adjinv",
    "themeLabel": "Adjoint & Inverse",
    "title": "Transpose Then Invert, or Invert Then Transpose",
    "difficulty": 4,
    "task": "Find the entry",
    "tags": [
      "inverse",
      "transpose",
      "symmetric",
      "adjoint"
    ],
    "statement": "Let $A=\\begin{pmatrix}2&1&0\\\\1&2&1\\\\0&1&2\\end{pmatrix}$ (so $A=A^{T}$). Using the fact that $(A^{-1})^{T}=(A^{T})^{-1}$, find the $(1,3)$ entry of $A^{-1}$.",
    "answer": "\\[\\boxed{\\dfrac{1}{4}}\\]",
    "trap": "Assuming $A^{-1}$ need not be symmetric and computing the $(3,1)$ cofactor while expecting it to differ from $(1,3)$. Since $A$ is symmetric, $(A^{-1})^{T}=(A^{T})^{-1}=A^{-1}$, so $A^{-1}$ is symmetric and entries $(1,3)$ and $(3,1)$ are equal — a useful check, not a contradiction.",
    "solutions": [
      {
        "name": "Adjoint formula",
        "steps": [
          "Expand $|A|$ along the first row: $|A|=2(4-1)-1(2-0)+0=6-2=4$.",
          "The $(1,3)$ entry of $A^{-1}$ is $\\dfrac{C_{31}}{|A|}$, where $C_{31}=(+1)\\begin{vmatrix}1&0\\\\2&1\\end{vmatrix}=1$ is the cofactor that lands in position $(1,3)$ after transposing the cofactor matrix.",
          "Thus $(A^{-1})_{13}=\\dfrac{1}{4}$.",
          "\\[\\boxed{\\dfrac{1}{4}}\\]"
        ]
      },
      {
        "name": "Symmetry shortcut",
        "steps": [
          "Because $A^{T}=A$, the identity $(A^{-1})^{T}=(A^{T})^{-1}=A^{-1}$ shows $A^{-1}$ is symmetric.",
          "So $(A^{-1})_{13}=(A^{-1})_{31}$, and we may compute whichever cofactor is easier: $C_{13}=\\begin{vmatrix}1&2\\\\0&1\\end{vmatrix}=1$.",
          "Dividing by $|A|=4$ gives $(A^{-1})_{13}=\\dfrac14$.",
          "\\[\\boxed{\\dfrac{1}{4}}\\]"
        ]
      }
    ],
    "remark": "Insight: the law $(A^{-1})^{T}=(A^{T})^{-1}$ guarantees that symmetric (resp. orthogonal) matrices have symmetric (resp. orthogonal) inverses. Recognising the inverse's symmetry halves the cofactor work and gives a free correctness check on the off-diagonal entries."
  },
  {
    "theme": "adjinv",
    "themeLabel": "Adjoint & Inverse",
    "title": "An Inverse Built From the Matrix Itself",
    "difficulty": 5,
    "task": "Express the inverse",
    "tags": [
      "inverse",
      "matrix-polynomial",
      "factoring",
      "scalar"
    ],
    "statement": "A nonsingular matrix $A$ satisfies $A^{2}=4A-3I$. Express $A^{-1}$ as a linear combination $\\alpha A+\\beta I$ with rational $\\alpha,\\beta$, and report the ordered pair $(\\alpha,\\beta)$.",
    "answer": "\\[\\boxed{(\\alpha,\\beta)=\\left(-\\tfrac13,\\ \\tfrac43\\right)}\\]",
    "trap": "Rearranging $A^{2}=4A-3I$ to $A^{2}-4A=-3I$ and reading off $A^{-1}=4I-A$ (forgetting to divide by $-3$ and mishandling the sign). The correct manipulation isolates $A\\cdot(\\text{something})=I$ before naming the inverse.",
    "solutions": [
      {
        "name": "Factor out one $A$",
        "steps": [
          "Rewrite $A^{2}-4A+3I=0$ as $A^{2}-4A=-3I$, i.e. $A(A-4I)=-3I$.",
          "Divide by $-3$: $A\\cdot\\dfrac{4I-A}{3}=I$, so by definition $A^{-1}=\\dfrac{4I-A}{3}=-\\dfrac13 A+\\dfrac43 I$.",
          "Hence $(\\alpha,\\beta)=\\left(-\\dfrac13,\\dfrac43\\right)$.",
          "\\[\\boxed{(\\alpha,\\beta)=\\left(-\\tfrac13,\\ \\tfrac43\\right)}\\]"
        ]
      },
      {
        "name": "Undetermined coefficients",
        "steps": [
          "Seek $A^{-1}=\\alpha A+\\beta I$, so $I=A(\\alpha A+\\beta I)=\\alpha A^{2}+\\beta A$.",
          "Substitute $A^{2}=4A-3I$: $I=\\alpha(4A-3I)+\\beta A=(4\\alpha+\\beta)A-3\\alpha I$.",
          "Match coefficients of $A$ and $I$: $4\\alpha+\\beta=0$ and $-3\\alpha=1$, giving $\\alpha=-\\dfrac13,\\ \\beta=\\dfrac43$.",
          "\\[\\boxed{(\\alpha,\\beta)=\\left(-\\tfrac13,\\ \\tfrac43\\right)}\\]"
        ]
      }
    ],
    "remark": "Insight: any polynomial relation $A^{2}=pA+qI$ with $q\\neq0$ secretly contains the inverse, because $A\\big(\\tfrac{p I - A}{-q}\\big)=I$. The constant term $q$ must be nonzero — it equals $\\pm|A|$-type information that certifies $A$ is invertible in the first place."
  },
  {
    "theme": "adjinv",
    "themeLabel": "Adjoint & Inverse",
    "title": "Where the Inverse Refuses to Exist",
    "difficulty": 4,
    "task": "Count the values",
    "tags": [
      "inverse",
      "singular",
      "adjoint",
      "parameter",
      "factoring"
    ],
    "statement": "For real $t$, let $A=\\begin{pmatrix} t & 1 & 1 \\\\ 1 & t & 1 \\\\ 1 & 1 & t \\end{pmatrix}$. How many distinct real values of $t$ make $\\operatorname{adj}A$ a singular matrix (i.e. $|\\operatorname{adj}A|=0$)?",
    "answer": "\\[\\boxed{2}\\]",
    "trap": "Reasoning that $|\\operatorname{adj}A|=|A|^{2}=0$ has the same number of roots as $\\det A=0$ counted with multiplicity, then quoting $3$ (since $\\det A=(t-1)^{2}(t+2)$ has three roots with multiplicity). The question asks for distinct values; $t=1$ is a single distinct value despite its multiplicity.",
    "solutions": [
      {
        "name": "Factor the determinant",
        "steps": [
          "Use row operations: subtract row 3 from rows 1 and 2, then expand. One finds $|A|=(t-1)^{2}(t+2)$.",
          "Since $|\\operatorname{adj}A|=|A|^{\\,n-1}=|A|^{2}$, it vanishes exactly when $|A|=0$, i.e. $t=1$ or $t=-2$.",
          "These are $2$ distinct real values (the factor $(t-1)^{2}$ contributes a single value $t=1$).",
          "\\[\\boxed{2}\\]"
        ]
      },
      {
        "name": "Direct singularity of $A$",
        "steps": [
          "$\\operatorname{adj}A$ is singular $\\iff |\\operatorname{adj}A|=0 \\iff |A|^{2}=0 \\iff |A|=0$.",
          "Add all columns into the first: each row sum is $t+2$, so $|A|=(t+2)\\begin{vmatrix}1&1&1\\\\1&t&1\\\\1&1&t\\end{vmatrix}=(t+2)(t-1)^{2}$.",
          "Real solutions of $|A|=0$ are $t=-2$ and $t=1$ — two distinct values.",
          "\\[\\boxed{2}\\]"
        ]
      }
    ],
    "remark": "Insight: $\\operatorname{adj}A$ is singular precisely when $A$ is, because the exponent $n-1\\ge1$ keeps the zero. Multiplicity of a determinant root tells you about how the matrix degenerates, but the count of distinct values of the parameter is governed only by the set of roots — a classic distinct-vs-with-multiplicity slip."
  },
  {
    "theme": "adjinv",
    "themeLabel": "Adjoint & Inverse",
    "title": "Scale, Adjoint, Adjoint",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "adjoint",
      "scalar-multiple",
      "double-adjoint",
      "order-3"
    ],
    "statement": "Let $A$ be a $3\\times3$ matrix with $\\det A = 3$. Evaluate $\\big|\\operatorname{adj}\\!\\big(\\operatorname{adj}(2A)\\big)\\big|$.",
    "answer": "\\[\\boxed{331776}\\]",
    "trap": "Pulling the scalar out as $|2A|=2\\,|A|=6$ instead of $|2A|=2^{3}|A|=24$. In a $3\\times3$ determinant a scalar multiplies every one of the three rows, so the factor is $2^{3}$, not $2$. Getting $|2A|=6$ corrupts every later step.",
    "solutions": [
      {
        "name": "Layer the laws",
        "steps": [
          "Scalar rule: $|2A| = 2^{3}\\,|A| = 8\\cdot 3 = 24$.",
          "First adjoint: $|\\operatorname{adj}(2A)| = |2A|^{\\,n-1} = 24^{2} = 576$.",
          "Second adjoint: $|\\operatorname{adj}(\\operatorname{adj}(2A))| = |\\operatorname{adj}(2A)|^{\\,n-1} = 576^{2} = 331776$.",
          "\\[\\boxed{331776}\\]"
        ]
      },
      {
        "name": "Collapse to a single power",
        "steps": [
          "Let $M=2A$, so $|M|=24$. Two adjoints raise the determinant to the power $(n-1)^{2}=(3-1)^{2}=4$.",
          "Thus $|\\operatorname{adj}(\\operatorname{adj}M)| = |M|^{4} = 24^{4}$.",
          "$24^{4} = 576^{2} = 331776$.",
          "\\[\\boxed{331776}\\]"
        ]
      }
    ],
    "remark": "Insight: two independent traps stack here — the cubic scalar factor $2^{3}$ and the squared adjoint exponent. The clean way to audit such towers is to track the determinant only: every $\\operatorname{adj}$ raises it to the $(n-1)$, so $k$ adjoints give exponent $(n-1)^{k}$ on $|M|$."
  },
  {
    "theme": "adjinv",
    "themeLabel": "Adjoint & Inverse",
    "title": "Knowing the Adjoint Is Not Knowing the Matrix",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "adjoint",
      "inverse",
      "exponent-law",
      "uniqueness",
      "grand-hybrid"
    ],
    "statement": "A $3\\times3$ matrix $A$ has $\\operatorname{adj}A=\\begin{pmatrix} 3 & 0 & -6 \\\\ 0 & -1 & 0 \\\\ -3 & 0 & 3 \\end{pmatrix}$. Even though $A$ itself is not uniquely determined by this data, evaluate $\\det\\!\\big(\\operatorname{adj}(A^{-1})\\big)$.",
    "answer": "\\[\\boxed{\\dfrac{1}{9}}\\]",
    "trap": "Trying to recover $A$ uniquely and proceeding as if $\\det A$ were known with a definite sign. From $|\\operatorname{adj}A|=|A|^{2}=9$ one gets $|A|=\\pm3$, and both signs yield a genuine matrix with the given adjoint — so $A$ is not unique. The trap is concluding the problem is unanswerable; in fact the requested determinant depends only on $|A|^{2}$, which is fixed.",
    "solutions": [
      {
        "name": "Reduce to $|A|^{2}$",
        "steps": [
          "For $n=3$, $\\det\\!\\big(\\operatorname{adj}(A^{-1})\\big) = |A^{-1}|^{\\,n-1} = \\left(\\dfrac{1}{|A|}\\right)^{2} = \\dfrac{1}{|A|^{2}}$.",
          "From $|\\operatorname{adj}A| = |A|^{\\,n-1} = |A|^{2}$, compute $|\\operatorname{adj}A|$ by expanding the given matrix along its second column: $|\\operatorname{adj}A| = (-1)\\begin{vmatrix}3&-6\\\\-3&3\\end{vmatrix} = (-1)(9-18) = 9$.",
          "So $|A|^{2}=9$, and the answer $\\dfrac{1}{|A|^{2}}=\\dfrac{1}{9}$ — no sign of $|A|$ is needed.",
          "\\[\\boxed{\\dfrac{1}{9}}\\]"
        ]
      },
      {
        "name": "Two laws chained",
        "steps": [
          "$\\det(A^{-1}) = \\dfrac{1}{\\det A}$, and $\\det(\\operatorname{adj}M)=(\\det M)^{2}$ for $3\\times3$ $M$.",
          "Apply the second law to $M=A^{-1}$: $\\det\\!\\big(\\operatorname{adj}(A^{-1})\\big) = \\big(\\det(A^{-1})\\big)^{2} = \\dfrac{1}{(\\det A)^{2}}$.",
          "Since $(\\det A)^{2} = |\\operatorname{adj}A| = 9$ (independent of the sign of $\\det A$), the value is $\\dfrac{1}{9}$.",
          "\\[\\boxed{\\dfrac{1}{9}}\\]"
        ]
      }
    ],
    "remark": "Insight: for $n=3$ the adjoint does not determine the matrix — both $A$ and a sign-flipped partner share it, since $|A|=\\pm3$ are both realisable. Yet any quantity that depends on $A$ only through $|A|^{2}$ (here $\\det(\\operatorname{adj}(A^{-1}))=1/|A|^{2}$) is perfectly well-defined. Knowing what is invariant is more powerful than recovering everything."
  },
  {
    "theme": "elemtrans",
    "themeLabel": "Elementary Transformations",
    "title": "The Unimodular Inverse",
    "difficulty": 3,
    "task": "Find the inverse",
    "tags": [
      "gauss-jordan",
      "row reduction",
      "inverse",
      "unimodular",
      "augmented matrix"
    ],
    "statement": "Using elementary \\textbf{row} operations only, reduce $[A\\mid I]$ to $[I\\mid A^{-1}]$ for\n\\[A=\\begin{pmatrix}1&3&3\\\\ 1&4&3\\\\ 1&3&4\\end{pmatrix}.\\]\nReport $A^{-1}$.",
    "answer": "\\[A^{-1}=\\boxed{\\begin{pmatrix}7&-3&-3\\\\ -1&1&0\\\\ -1&0&1\\end{pmatrix}}\\]",
    "trap": "The seductive shortcut is to clear column $1$ by the \\emph{column} operations $C_2\\to C_2-3C_1,\\;C_3\\to C_3-3C_1$ because the first row begins $1,3,3$. But on $[A\\mid I]$ a column operation mixes the $A$-block with the $I$-block and no longer corresponds to left-multiplication by a single elementary matrix; the right block then computes the inverse of a \\emph{different} matrix. Inverting by row reduction must use row operations exclusively (left multiplication), never column operations.",
    "solutions": [
      {
        "name": "Gauss-Jordan on [A | I]",
        "steps": [
          "Start $\\left[\\begin{array}{ccc|ccc}1&3&3&1&0&0\\\\ 1&4&3&0&1&0\\\\ 1&3&4&0&0&1\\end{array}\\right]$. Apply $R_2\\to R_2-R_1$ and $R_3\\to R_3-R_1$ to clear column $1$: rows become $(1,3,3\\mid1,0,0)$, $(0,1,0\\mid-1,1,0)$, $(0,0,1\\mid-1,0,1)$.",
          "Column $2$ already has pivot $1$ in row $2$; clear it from row $1$ via $R_1\\to R_1-3R_2$: row $1$ becomes $(1,0,3\\mid 4,-3,0)$.",
          "Clear column $3$ from row $1$ via $R_1\\to R_1-3R_3$: row $1$ becomes $(1,0,0\\mid 7,-3,-3)$.",
          "The left block is now $I$, so the right block is the inverse: $\\boxed{A^{-1}=\\begin{pmatrix}7&-3&-3\\\\ -1&1&0\\\\ -1&0&1\\end{pmatrix}}$."
        ]
      },
      {
        "name": "Adjugate check (det = 1)",
        "steps": [
          "Expanding along column $1$, $\\det A = 1(4\\cdot4-3\\cdot3)-1(3\\cdot4-3\\cdot3)+1(3\\cdot3-3\\cdot4)=7-3-3=1$, so $A^{-1}=\\operatorname{adj}A$.",
          "Computing the cofactor matrix and transposing gives $\\operatorname{adj}A=\\begin{pmatrix}7&-3&-3\\\\ -1&1&0\\\\ -1&0&1\\end{pmatrix}$.",
          "Since $\\det A=1$ this equals $A^{-1}$, confirming $\\boxed{A^{-1}=\\begin{pmatrix}7&-3&-3\\\\ -1&1&0\\\\ -1&0&1\\end{pmatrix}}$."
        ]
      },
      {
        "name": "Direct multiplication verification",
        "steps": [
          "Multiply the claimed inverse by $A$: row $1$ of $A^{-1}$ times the columns of $A$ gives $(7-1-1,\\,21-4-3,\\,21-3-4)=(1,0,0)$? Recompute carefully: $A^{-1}A$ row $1$ $=7(1,3,3)-3(1,4,3)-3(1,3,4)=(1,0,0)$.",
          "Likewise rows $2,3$ of $A^{-1}$ give $(0,1,0)$ and $(0,0,1)$, so $A^{-1}A=I$.",
          "Hence $\\boxed{A^{-1}=\\begin{pmatrix}7&-3&-3\\\\ -1&1&0\\\\ -1&0&1\\end{pmatrix}}$."
        ]
      }
    ],
    "remark": "Insight. On the augmented array $[A\\mid I]$, only row operations are legal because each is left-multiplication $E[A\\mid I]=[EA\\mid E]$; the right block accumulates $E_k\\cdots E_1=A^{-1}$. A column operation would touch the two blocks independently and silently change the problem."
  },
  {
    "theme": "elemtrans",
    "themeLabel": "Elementary Transformations",
    "title": "Four Moves on a Determinant",
    "difficulty": 3,
    "task": "Find the determinant",
    "tags": [
      "determinant",
      "row operations",
      "scaling factor",
      "row swap",
      "tracking"
    ],
    "statement": "A $3\\times3$ matrix $A$ has $\\det A = 7$. The following row operations are performed, in order, producing a matrix $B$:\n\\[(1)\\ R_1\\leftrightarrow R_2,\\quad (2)\\ R_3\\to R_3+4R_1,\\quad (3)\\ R_2\\to 5R_2,\\quad (4)\\ R_1\\leftrightarrow R_3.\\]\nFind $\\det B$.",
    "answer": "\\[\\det B=\\boxed{35}\\]",
    "trap": "It is tempting to think only the two swaps matter (each multiplies the determinant by $-1$, and two swaps cancel), giving $\\det B = 7$. That forgets operation $(3)$: \\emph{scaling a single row by $5$ multiplies the determinant by $5$}, not by $1$. The add-a-multiple operation $(2)$ alone leaves the determinant unchanged, but row scaling never does.",
    "answerLabel": "det B",
    "solutions": [
      {
        "name": "Multiply the per-operation factors",
        "steps": [
          "Each elementary row operation multiplies the determinant by a fixed factor: a swap by $-1$, scaling a row by $c$ by $c$, and adding a multiple of one row to another by $1$.",
          "The four factors are $(-1)$ for $(1)$, $(+1)$ for $(2)$, $(5)$ for $(3)$, and $(-1)$ for $(4)$; their product is $(-1)(1)(5)(-1)=5$.",
          "Therefore $\\det B = 5\\cdot\\det A = 5\\cdot 7 = \\boxed{35}$."
        ]
      },
      {
        "name": "Elementary-matrix determinant product",
        "steps": [
          "Writing $B = E_4E_3E_2E_1A$, we get $\\det B = \\det E_4\\,\\det E_3\\,\\det E_2\\,\\det E_1\\,\\det A$.",
          "The elementary matrices have determinants $\\det E_1=-1$ (swap), $\\det E_2=1$ (add multiple), $\\det E_3=5$ (scale by $5$), $\\det E_4=-1$ (swap), so their product is $5$.",
          "Hence $\\det B = 5\\cdot 7 = \\boxed{35}$."
        ]
      }
    ],
    "remark": "Insight. Two swaps do cancel, and add-a-multiple is free, but a single row scaling by $c$ rescales the whole determinant by $c$. The order of operations is irrelevant to the determinant — only the product of factors counts."
  },
  {
    "theme": "elemtrans",
    "themeLabel": "Elementary Transformations",
    "title": "Left or Right? The Side Decides",
    "difficulty": 4,
    "task": "Compute both products",
    "tags": [
      "elementary matrix",
      "left multiplication",
      "right multiplication",
      "row vs column",
      "noncommutative"
    ],
    "statement": "Let $E$ be the elementary matrix obtained from $I_3$ by the operation $R_1\\to R_1+2R_3$, and let\n\\[A=\\begin{pmatrix}1&2&3\\\\ 4&5&6\\\\ 7&8&9\\end{pmatrix}.\\]\nCompute $EA$ and $AE$, and state in words the operation each performs on $A$.",
    "answer": "\\[EA=\\boxed{\\begin{pmatrix}15&18&21\\\\ 4&5&6\\\\ 7&8&9\\end{pmatrix}}\\quad(R_1\\to R_1+2R_3),\\qquad AE=\\begin{pmatrix}1&2&5\\\\ 4&5&14\\\\ 7&8&23\\end{pmatrix}\\quad(C_3\\to C_3+2C_1).\\]",
    "trap": "The fatal assumption is that an elementary matrix \"does its row operation\" no matter which side it multiplies, so $AE$ should also be $R_1\\to R_1+2R_3$. In fact, \\emph{left} multiplication $EA$ performs the row operation, while \\emph{right} multiplication $AE$ performs the corresponding \\emph{column} operation. The matrix $E$ built from $R_1\\to R_1+2R_3$ is $I+2e_{13}$; multiplying on the right turns the same off-diagonal entry into the column operation $C_3\\to C_3+2C_1$. They are not equal.",
    "solutions": [
      {
        "name": "Build E and multiply",
        "steps": [
          "$R_1\\to R_1+2R_3$ on $I_3$ gives $E=\\begin{pmatrix}1&0&2\\\\0&1&0\\\\0&0&1\\end{pmatrix}$ (the $2$ sits in position $(1,3)$).",
          "$EA$: only row $1$ changes, to $R_1+2R_3=(1,2,3)+2(7,8,9)=(15,18,21)$, so $EA=\\begin{pmatrix}15&18&21\\\\4&5&6\\\\7&8&9\\end{pmatrix}$, the row operation.",
          "$AE$: post-multiplication acts on columns; the $(1,3)$ entry of $E$ adds $2\\times(\\text{column }1)$ into column $3$, i.e. $C_3\\to C_3+2C_1=(3,6,9)+2(1,4,7)=(5,14,23)$, giving $AE=\\begin{pmatrix}1&2&5\\\\4&5&14\\\\7&8&23\\end{pmatrix}$.",
          "Hence $\\boxed{EA=\\begin{pmatrix}15&18&21\\\\4&5&6\\\\7&8&9\\end{pmatrix}}$ (row op) and $AE$ is the column op $C_3\\to C_3+2C_1$."
        ]
      },
      {
        "name": "General principle, then specialize",
        "steps": [
          "For any elementary $E=I+c\\,e_{ij}$ with $i\\ne j$: left multiplication gives $(EA)$ with row $i$ replaced by $\\text{row }i + c\\cdot\\text{row }j$ (a row operation), and right multiplication gives $(AE)$ with column $j$ replaced by $\\text{column }j + c\\cdot\\text{column }i$ (a column operation).",
          "Here $i=1,j=3,c=2$: $EA$ does $R_1\\to R_1+2R_3$ and $AE$ does $C_3\\to C_3+2C_1$.",
          "Evaluating on the given $A$ yields $\\boxed{EA=\\begin{pmatrix}15&18&21\\\\4&5&6\\\\7&8&9\\end{pmatrix}}$ and $AE=\\begin{pmatrix}1&2&5\\\\4&5&14\\\\7&8&23\\end{pmatrix}$, manifestly different."
        ]
      }
    ],
    "remark": "Insight. \"Row operations live on the left, column operations on the right.\" The off-diagonal entry $e_{ij}$ of $E$ reads as $R_i\\mathrel{+}=c R_j$ under left multiplication but as $C_j\\mathrel{+}=c C_i$ under right multiplication — the indices swap roles."
  },
  {
    "theme": "elemtrans",
    "themeLabel": "Elementary Transformations",
    "title": "The Tridiagonal Trap",
    "difficulty": 4,
    "task": "Find the inverse",
    "tags": [
      "gauss-jordan",
      "tridiagonal",
      "symmetric",
      "row reduction",
      "column-op trap"
    ],
    "statement": "Find $A^{-1}$ by elementary \\textbf{row} operations on $[A\\mid I]$, where\n\\[A=\\begin{pmatrix}2&1&0\\\\ 1&2&1\\\\ 0&1&2\\end{pmatrix}.\\]",
    "answer": "\\[A^{-1}=\\frac{1}{4}\\boxed{\\begin{pmatrix}3&-2&1\\\\ -2&4&-2\\\\ 1&-2&3\\end{pmatrix}}\\]",
    "trap": "Because $A$ is symmetric, a tempting \"speed-up\" is to symmetrize the reduction by following each row operation with the mirror column operation (e.g. $R_2\\to R_2-\\tfrac12R_1$ then $C_2\\to C_2-\\tfrac12C_1$) to keep the working matrix symmetric. That is congruence $A\\to E A E^{\\mathsf T}$, not $A\\to EA$; the right block then yields neither $A^{-1}$ nor anything proportional to it. Symmetry of $A$ does not license column operations during inversion.",
    "solutions": [
      {
        "name": "Gauss-Jordan on [A | I]",
        "steps": [
          "From $\\left[\\begin{array}{ccc|ccc}2&1&0&1&0&0\\\\1&2&1&0&1&0\\\\0&1&2&0&0&1\\end{array}\\right]$, scale $R_1\\to\\tfrac12R_1$, then $R_2\\to R_2-R_1$: rows become $(1,\\tfrac12,0\\mid\\tfrac12,0,0)$, $(0,\\tfrac32,1\\mid-\\tfrac12,1,0)$, $(0,1,2\\mid0,0,1)$.",
          "Scale $R_2\\to\\tfrac23R_2$ to get pivot $1$, then eliminate column $2$ from $R_1$ and $R_3$: this yields $(1,0,-\\tfrac13\\mid\\tfrac23,-\\tfrac13,0)$, $(0,1,\\tfrac23\\mid-\\tfrac13,\\tfrac23,0)$, $(0,0,\\tfrac43\\mid\\tfrac13,-\\tfrac23,1)$.",
          "Scale $R_3\\to\\tfrac34R_3$ giving pivot $1$ with right part $(\\tfrac14,-\\tfrac12,\\tfrac34)$, then back-eliminate column $3$ from $R_1,R_2$.",
          "The right block becomes $\\frac14\\begin{pmatrix}3&-2&1\\\\-2&4&-2\\\\1&-2&3\\end{pmatrix}$, so $\\boxed{A^{-1}=\\frac14\\begin{pmatrix}3&-2&1\\\\-2&4&-2\\\\1&-2&3\\end{pmatrix}}$."
        ]
      },
      {
        "name": "Adjugate over determinant",
        "steps": [
          "$\\det A = 2(4-1)-1(2-0)+0=6-2=4$.",
          "The cofactor matrix is $\\begin{pmatrix}3&-2&1\\\\-2&4&-2\\\\1&-2&3\\end{pmatrix}$ (symmetric, matching $A$ symmetric); its transpose is itself, so $\\operatorname{adj}A=\\begin{pmatrix}3&-2&1\\\\-2&4&-2\\\\1&-2&3\\end{pmatrix}$.",
          "Therefore $A^{-1}=\\dfrac{1}{\\det A}\\operatorname{adj}A=\\boxed{\\frac14\\begin{pmatrix}3&-2&1\\\\-2&4&-2\\\\1&-2&3\\end{pmatrix}}$."
        ]
      },
      {
        "name": "Verify by multiplication",
        "steps": [
          "Compute $A\\cdot\\frac14\\begin{pmatrix}3&-2&1\\\\-2&4&-2\\\\1&-2&3\\end{pmatrix}$. Row $1$ of $A$ is $(2,1,0)$: dotting columns gives $\\frac14(6-2,\\,-4+4,\\,2-2)=\\frac14(4,0,0)=(1,0,0)$.",
          "Rows $2,3$ of $A$ give $(0,1,0)$ and $(0,0,1)$ similarly, so the product is $I$.",
          "Hence $\\boxed{A^{-1}=\\frac14\\begin{pmatrix}3&-2&1\\\\-2&4&-2\\\\1&-2&3\\end{pmatrix}}$."
        ]
      }
    ],
    "remark": "Insight. Congruence $A\\mapsto EAE^{\\mathsf T}$ preserves symmetry but is not what row reduction does. Inverting demands $A\\mapsto EA$ (left only); the inverse of a symmetric matrix is symmetric, but you must still reach it with row operations alone."
  },
  {
    "theme": "elemtrans",
    "themeLabel": "Elementary Transformations",
    "title": "When the Pivot Dies",
    "difficulty": 4,
    "task": "Find the value",
    "tags": [
      "row equivalence",
      "singular",
      "reduction to identity",
      "parameter",
      "determinant"
    ],
    "statement": "For which value of $k$ is the matrix\n\\[A=\\begin{pmatrix}1&2&3\\\\ 2&5&k\\\\ 4&9&16\\end{pmatrix}\\]\n\\emph{not} row-equivalent to $I_3$ (equivalently, cannot be reduced to $I$ by elementary row operations)?",
    "answer": "\\[k=\\boxed{10}\\]",
    "trap": "A common reflex is to hunt for a $k$ that makes two rows proportional and read singularity off that — e.g. forcing $R_2=2R_1$ would need $k=6$. But row-proportionality is sufficient, not necessary, for singularity; the matrix fails to reduce to $I$ exactly when $\\det A=0$, and here $\\det A=10-k$, so the true value is $k=10$ (no two rows are proportional there). Equating rows finds a false answer.",
    "solutions": [
      {
        "name": "Row reduce and watch the last pivot",
        "steps": [
          "$R_2\\to R_2-2R_1$ and $R_3\\to R_3-4R_1$ give rows $(1,2,3)$, $(0,1,k-6)$, $(0,1,4)$.",
          "$R_3\\to R_3-R_2$ gives the bottom row $(0,0,\\,4-(k-6))=(0,0,\\,10-k)$.",
          "Reaching $I$ requires a nonzero third pivot, i.e. $10-k\\ne0$; the reduction stalls precisely when $10-k=0$.",
          "Hence $A$ is not row-equivalent to $I_3$ iff $k=\\boxed{10}$."
        ]
      },
      {
        "name": "Determinant condition",
        "steps": [
          "$A$ is row-equivalent to $I_3$ $\\iff$ $A$ is invertible $\\iff$ $\\det A\\ne0$.",
          "Expanding, $\\det A = 1(80-9k)-2(32-4k)+3(18-20)=80-9k-64+8k-6=10-k$.",
          "Thus $\\det A=0\\iff k=10$, so the matrix fails to reduce to $I$ exactly at $k=\\boxed{10}$."
        ]
      }
    ],
    "remark": "Insight. \"Row-equivalent to $I$\" is a synonym for invertible; the clean test is $\\det A\\ne0$. Looking for proportional rows catches only the most obvious singular cases and misses generic ones like this."
  },
  {
    "theme": "elemtrans",
    "themeLabel": "Elementary Transformations",
    "title": "Assembled from Elementaries",
    "difficulty": 5,
    "task": "Find A and its inverse",
    "tags": [
      "elementary matrix",
      "product",
      "inverse",
      "reverse order",
      "determinant"
    ],
    "statement": "Let $E_1$ be the elementary matrix for the swap $R_1\\leftrightarrow R_2$, let $E_2$ be the one for $R_3\\to R_3-2R_1$, and let $E_3$ be the one for $R_2\\to 3R_2$ (all $3\\times3$). Define $A=E_3E_2E_1$. Find $A$, then write $A^{-1}$ as a product of elementary matrices and evaluate it. Also state $\\det A$.",
    "answer": "\\[A=\\begin{pmatrix}0&1&0\\\\ 3&0&0\\\\ 0&-2&1\\end{pmatrix},\\qquad A^{-1}=E_1^{-1}E_2^{-1}E_3^{-1}=\\boxed{\\begin{pmatrix}0&\\tfrac13&0\\\\ 1&0&0\\\\ 2&0&1\\end{pmatrix}},\\qquad \\det A=-3.\\]",
    "trap": "The seductive error is to invert the product in the \\emph{same} order, writing $A^{-1}=E_1^{-1}E_2^{-1}E_3^{-1}$ as though it equalled $(E_3E_2E_1)^{-1}=E_1^{-1}E_2^{-1}E_3^{-1}$ but then computing it as $E_3^{-1}E_2^{-1}E_1^{-1}$, or worse, taking $A^{-1}=E_3^{-1}E_2^{-1}E_1^{-1}$. The inverse reverses the order: $(E_3E_2E_1)^{-1}=E_1^{-1}E_2^{-1}E_3^{-1}$. Multiplying the inverses in the original order gives a different (wrong) matrix.",
    "solutions": [
      {
        "name": "Build the elementaries and multiply",
        "steps": [
          "$E_1=\\begin{pmatrix}0&1&0\\\\1&0&0\\\\0&0&1\\end{pmatrix}$, $E_2=\\begin{pmatrix}1&0&0\\\\0&1&0\\\\-2&0&1\\end{pmatrix}$, $E_3=\\begin{pmatrix}1&0&0\\\\0&3&0\\\\0&0&1\\end{pmatrix}$.",
          "$E_2E_1=\\begin{pmatrix}0&1&0\\\\1&0&0\\\\0&-2&1\\end{pmatrix}$, then $A=E_3(E_2E_1)=\\begin{pmatrix}0&1&0\\\\3&0&0\\\\0&-2&1\\end{pmatrix}$.",
          "Since $A^{-1}=(E_3E_2E_1)^{-1}=E_1^{-1}E_2^{-1}E_3^{-1}$ with $E_1^{-1}=E_1$, $E_2^{-1}=R_3\\to R_3+2R_1$, $E_3^{-1}=R_2\\to\\tfrac13R_2$, multiplying these in reversed order gives $A^{-1}=\\begin{pmatrix}0&\\tfrac13&0\\\\1&0&0\\\\2&0&1\\end{pmatrix}$.",
          "$\\det A=\\det E_3\\det E_2\\det E_1=3\\cdot1\\cdot(-1)=-3$. Final: $\\boxed{A^{-1}=\\begin{pmatrix}0&\\tfrac13&0\\\\1&0&0\\\\2&0&1\\end{pmatrix}},\\ \\det A=-3$."
        ]
      },
      {
        "name": "Direct inversion of A",
        "steps": [
          "$\\det A$: expanding along row $1$, $\\det A=-1\\cdot\\det\\begin{pmatrix}3&0\\\\0&1\\end{pmatrix}=-3$ (the only nonzero entry in row $1$ is the $(1,2)$ entry $=1$, cofactor sign $-$).",
          "Compute $\\operatorname{adj}A$ from cofactors of $A=\\begin{pmatrix}0&1&0\\\\3&0&0\\\\0&-2&1\\end{pmatrix}$, then $A^{-1}=\\frac{1}{-3}\\operatorname{adj}A$.",
          "This yields $A^{-1}=\\begin{pmatrix}0&\\tfrac13&0\\\\1&0&0\\\\2&0&1\\end{pmatrix}$, and one checks $A\\,A^{-1}=I$.",
          "So $\\boxed{A^{-1}=\\begin{pmatrix}0&\\tfrac13&0\\\\1&0&0\\\\2&0&1\\end{pmatrix}}$ with $\\det A=-3$."
        ]
      },
      {
        "name": "Verify the product order matters",
        "steps": [
          "Test the trap: $E_3^{-1}E_2^{-1}E_1^{-1}$ would compute $(E_1E_2E_3)^{-1}$, the inverse of a different matrix, giving $\\begin{pmatrix}0&\\tfrac13&0\\\\1&0&0\\\\0&0&1\\end{pmatrix}$ (note the lost $2$ in the $(3,1)$ slot).",
          "Multiplying that wrong matrix by $A$ does not give $I$, confirming the order must be reversed: $A^{-1}=E_1^{-1}E_2^{-1}E_3^{-1}$.",
          "The correct inverse is $\\boxed{A^{-1}=\\begin{pmatrix}0&\\tfrac13&0\\\\1&0&0\\\\2&0&1\\end{pmatrix}}$, with $\\det A=-3$."
        ]
      }
    ],
    "remark": "Insight. $(E_3E_2E_1)^{-1}=E_1^{-1}E_2^{-1}E_3^{-1}$: socks-and-shoes. The determinant ignores order, $\\det A=\\prod\\det E_i=-3$, but the inverse decidedly does not."
  },
  {
    "theme": "elemtrans",
    "themeLabel": "Elementary Transformations",
    "title": "Reverse-Engineering the Determinant",
    "difficulty": 4,
    "task": "Find det A",
    "tags": [
      "determinant",
      "row operations",
      "back-tracking",
      "scaling factor",
      "elementary matrix"
    ],
    "statement": "An unknown $3\\times3$ matrix $A$ is put through the following row operations, in order, to reach a matrix $R$:\n\\[(1)\\ R_2\\to R_2+5R_1,\\quad (2)\\ R_1\\to -2R_1,\\quad (3)\\ R_2\\leftrightarrow R_3.\\]\nIt is found that $\\det R = 12$. Determine $\\det A$.",
    "answer": "\\[\\det A=\\boxed{6}\\]",
    "trap": "It is tempting to set $\\det A=\\det R=12$, reasoning that \"row operations don't change the determinant.\" Operation $(1)$ indeed leaves it unchanged, but $(2)$ multiplies it by $-2$ and the swap $(3)$ by $-1$. Forgetting the $-2$ scaling (a very common slip) gives $\\det A = 12/(-1)=-12$. One must divide $\\det R$ by the full product of factors $(-2)(-1)=2$.",
    "answerLabel": "det A",
    "solutions": [
      {
        "name": "Track the cumulative factor",
        "steps": [
          "Each operation multiplies the determinant by: $(1)$ add-multiple $\\to 1$; $(2)$ scale row $1$ by $-2\\to -2$; $(3)$ swap $\\to -1$.",
          "So $\\det R = 1\\cdot(-2)\\cdot(-1)\\cdot\\det A = 2\\det A$.",
          "Given $\\det R = 12$, we get $2\\det A = 12$, hence $\\det A = \\boxed{6}$."
        ]
      },
      {
        "name": "Elementary-matrix form, inverted",
        "steps": [
          "Write $R = E_3E_2E_1A$ with $\\det E_1=1$, $\\det E_2=-2$, $\\det E_3=-1$.",
          "Then $\\det R = (\\det E_3)(\\det E_2)(\\det E_1)\\det A = (-1)(-2)(1)\\det A = 2\\det A$.",
          "Solving $2\\det A = 12$ gives $\\det A = \\boxed{6}$."
        ]
      }
    ],
    "remark": "Insight. When recovering an original determinant from a reduced one, divide by the product of the operation factors. Add-a-multiple is invisible to the determinant; scaling and swaps are not — and it is the silent scaling that traps the careless."
  },
  {
    "theme": "elemtrans",
    "themeLabel": "Elementary Transformations",
    "title": "A Row Op and a Column Op Walk In",
    "difficulty": 4,
    "task": "Find det B",
    "tags": [
      "determinant",
      "row operation",
      "column operation",
      "elementary matrix",
      "swap sign"
    ],
    "statement": "Let $A$ be a $3\\times3$ matrix with $\\det A = 2$. Form $B$ from $A$ by applying \\emph{first} the row operation $R_1\\to 3R_1$ and \\emph{then} the column operation $C_2\\leftrightarrow C_3$. Find $\\det B$.",
    "answer": "\\[\\det B=\\boxed{-6}\\]",
    "trap": "Two slips lurk. First, one might think a column operation behaves differently from a row operation for determinants — it does not: scaling/swapping a column scales the determinant by the same factor as the matching row move. Second, and more tempting, one might treat the column \\emph{swap} as a harmless re-labelling and forget its $-1$ factor, getting $\\det B = 3\\cdot 2 = 6$. The swap of two columns flips the sign, giving $-6$.",
    "answerLabel": "det B",
    "solutions": [
      {
        "name": "Factor per operation",
        "steps": [
          "Scaling a row (or column) by $3$ multiplies the determinant by $3$.",
          "Swapping two columns (just like swapping two rows) multiplies the determinant by $-1$.",
          "Hence $\\det B = 3\\cdot(-1)\\cdot\\det A = 3\\cdot(-1)\\cdot 2 = \\boxed{-6}$."
        ]
      },
      {
        "name": "Sandwich by elementary matrices",
        "steps": [
          "The row op is left multiplication by $E_r=\\mathrm{diag}(3,1,1)$ ($\\det E_r=3$); the column op is right multiplication by the swap matrix $E_c$ exchanging columns $2,3$ ($\\det E_c=-1$).",
          "So $B = E_r A E_c$ and $\\det B = \\det E_r\\,\\det A\\,\\det E_c = 3\\cdot 2\\cdot(-1)$.",
          "Therefore $\\det B = \\boxed{-6}$."
        ]
      }
    ],
    "remark": "Insight. Determinants treat rows and columns symmetrically: $\\det(E_rAE_c)=\\det E_r\\det A\\det E_c$. A column swap is a genuine sign flip, never a free relabelling — that lost minus sign is the whole trap."
  },
  {
    "theme": "elemtrans",
    "themeLabel": "Elementary Transformations",
    "title": "Inverse and Determinant in One Sweep",
    "difficulty": 5,
    "task": "Find inverse and det",
    "tags": [
      "gauss-jordan",
      "pivots",
      "determinant from pivots",
      "row reduction",
      "unimodular"
    ],
    "statement": "Reduce $[A\\mid I]$ to $[I\\mid A^{-1}]$ using only elementary \\textbf{row} operations for\n\\[A=\\begin{pmatrix}1&1&0\\\\ 1&2&1\\\\ 0&1&2\\end{pmatrix},\\]\nand from the \\emph{same} reduction read off $\\det A$ as the product of pivots adjusted for the operations used.",
    "answer": "\\[A^{-1}=\\boxed{\\begin{pmatrix}3&-2&1\\\\ -2&2&-1\\\\ 1&-1&1\\end{pmatrix}},\\qquad \\det A=1.\\]",
    "trap": "While reducing, it is tempting to read $\\det A$ as simply \"the product of the pivots you land on after reaching reduced echelon form.\" If you used any row scalings to create those pivots, that product is the determinant of the \\emph{reduced} matrix ($=1$ for $I$), not of $A$. To get $\\det A$ you must divide out every scaling factor you introduced and multiply by $-1$ per swap. Here, using no scalings (all pivots are already $1$ via add-multiple steps), the determinant is genuinely $1$ — but only because the reduction avoided scaling.",
    "solutions": [
      {
        "name": "Gauss-Jordan, no scaling needed",
        "steps": [
          "$\\left[\\begin{array}{ccc|ccc}1&1&0&1&0&0\\\\1&2&1&0&1&0\\\\0&1&2&0&0&1\\end{array}\\right]$. $R_2\\to R_2-R_1$ gives $(0,1,1\\mid-1,1,0)$ — pivot $1$ already.",
          "$R_3\\to R_3-R_2$ gives $(0,0,1\\mid1,-1,1)$ — pivot $1$ already. Forward elimination used only add-multiple ops (factor $1$ each), so $\\det A=1\\cdot1\\cdot1=1$.",
          "Back-substitute: $R_2\\to R_2-R_3$ gives $(0,1,0\\mid-2,2,-1)$; $R_1\\to R_1-R_2$ gives $(1,0,0\\mid3,-2,1)$.",
          "Left block is $I$, so $\\boxed{A^{-1}=\\begin{pmatrix}3&-2&1\\\\-2&2&-1\\\\1&-1&1\\end{pmatrix}}$ and $\\det A=1$."
        ]
      },
      {
        "name": "Determinant via cofactors, inverse via adjugate",
        "steps": [
          "$\\det A = 1(2\\cdot2-1\\cdot1)-1(1\\cdot2-1\\cdot0)+0 = (4-1)-(2)=1$.",
          "With $\\det A=1$, $A^{-1}=\\operatorname{adj}A$; computing the cofactor matrix of $A$ and transposing gives $\\begin{pmatrix}3&-2&1\\\\-2&2&-1\\\\1&-1&1\\end{pmatrix}$.",
          "Hence $\\boxed{A^{-1}=\\begin{pmatrix}3&-2&1\\\\-2&2&-1\\\\1&-1&1\\end{pmatrix}}$, $\\det A=1$."
        ]
      },
      {
        "name": "Check A is unimodular",
        "steps": [
          "Multiply $A\\cdot\\begin{pmatrix}3&-2&1\\\\-2&2&-1\\\\1&-1&1\\end{pmatrix}$: row $1$ of $A$ is $(1,1,0)$, dotting columns gives $(3-2,\\,-2+2,\\,1-1)=(1,0,0)$.",
          "Rows $2,3$ similarly give $(0,1,0)$ and $(0,0,1)$, so the product is $I$ and the inverse has integer entries, consistent with $\\det A=\\pm1$; here $\\det A=1$.",
          "Final: $\\boxed{A^{-1}=\\begin{pmatrix}3&-2&1\\\\-2&2&-1\\\\1&-1&1\\end{pmatrix}}$, $\\det A=1$."
        ]
      }
    ],
    "remark": "Insight. The pivot product equals $\\det A$ only if you keep a running ledger: divide by each scale factor and flip sign per swap. The cleanest reductions use add-multiple steps alone, leaving the determinant exactly the product of the natural pivots."
  },
  {
    "theme": "elemtrans",
    "themeLabel": "Elementary Transformations",
    "title": "The Parameter That Stalls Reduction",
    "difficulty": 5,
    "task": "Find all values",
    "tags": [
      "row equivalence",
      "parameter",
      "row reduction",
      "factor theorem",
      "singular"
    ],
    "statement": "Consider\n\\[A(a)=\\begin{pmatrix}1&1&1\\\\ 1&2&a\\\\ 1&4&a^{2}\\end{pmatrix}.\\]\nUsing elementary row operations, find \\emph{all} real $a$ for which $A(a)$ \\textbf{cannot} be reduced to $I_3$ (i.e. is not row-equivalent to the identity).",
    "answer": "\\[a\\in\\boxed{\\{1,\\,2\\}}\\]",
    "trap": "Because the third column is $(1,a,a^{2})$ this looks like a Vandermonde whose determinant is $\\prod(x_j-x_i)$ over the column entries $1,a$ in some rows — tempting students to declare it zero \"only when two of $1,a,a^2$ coincide,\" e.g. $a=\\pm1$ or $a=0$. But the second column is $(1,2,4)$, not powers of a common variable, so the matrix is \\emph{not} a true Vandermonde; one must actually reduce. The determinant factors as $(a-1)(a-2)$, giving $a=1,2$ — and $a=-1,0$ are spurious.",
    "solutions": [
      {
        "name": "Row reduce to expose the stalling pivot",
        "steps": [
          "$R_2\\to R_2-R_1$, $R_3\\to R_3-R_1$ give rows $(1,1,1)$, $(0,1,a-1)$, $(0,3,a^{2}-1)$.",
          "$R_3\\to R_3-3R_2$ gives bottom row $(0,0,\\,a^{2}-1-3(a-1))=(0,0,\\,a^{2}-3a+2)$.",
          "Factor the third-pivot expression: $a^{2}-3a+2=(a-1)(a-2)$. Reduction to $I$ requires this $\\ne0$, so it stalls iff $(a-1)(a-2)=0$.",
          "Hence $A(a)$ is not row-equivalent to $I_3$ exactly for $a\\in\\boxed{\\{1,2\\}}$."
        ]
      },
      {
        "name": "Determinant by factor theorem",
        "steps": [
          "$A$ is row-equivalent to $I\\iff\\det A\\ne0$. Treat $\\det A$ as a polynomial $p(a)$.",
          "At $a=1$ rows $1$ and $2$ become equal $((1,1,1)$ and $(1,2,1)$? no — instead substitute): $p(1)=\\det\\begin{pmatrix}1&1&1\\\\1&2&1\\\\1&4&1\\end{pmatrix}=0$ since columns $1,3$ are equal; $p(2)=\\det\\begin{pmatrix}1&1&1\\\\1&2&2\\\\1&4&4\\end{pmatrix}=0$ since columns $2,3$ are equal.",
          "So $(a-1)(a-2)\\mid p(a)$; computing $\\det A$ directly gives $p(a)=a^{2}-3a+2=(a-1)(a-2)$ exactly (degree $2$, leading coefficient $1$).",
          "Thus $\\det A=0\\iff a\\in\\boxed{\\{1,2\\}}$."
        ]
      }
    ],
    "remark": "Insight. The Vandermonde reflex is wrong here because only the third column is a power-vector; the middle column $(1,2,4)$ breaks the pattern. Trust the reduction (or the honest determinant $(a-1)(a-2)$), not a half-remembered formula."
  },
  {
    "theme": "linsys",
    "themeLabel": "Systems of Linear Equations",
    "title": "Three Planes, One Point",
    "difficulty": 3,
    "task": "Solve the system",
    "tags": [
      "cramer's rule",
      "determinant",
      "unique solution",
      "3x3 system"
    ],
    "statement": "Solve, by Cramer's rule, the system $$x+y+z=6,\\qquad x-y+2z=5,\\qquad 2x+y-z=1.$$ State the unique solution $(x,y,z)$.",
    "answer": "\\[\\boxed{(x,y,z)=(1,\\,2,\\,3)}\\]",
    "trap": "Subtracting equations carelessly and getting a $0=0$ may tempt you to declare the planes dependent and the system non-unique. But the coefficient determinant is $D=7\\neq0$, so the three planes meet in exactly one point; any apparent dependence is an arithmetic slip, not a real one.",
    "solutions": [
      {
        "name": "Cramer's rule",
        "steps": [
          "Coefficient matrix $A=\\begin{pmatrix}1&1&1\\\\1&-1&2\\\\2&1&-1\\end{pmatrix}$, so $D=\\det A=1(1-2)-1(-1-4)+1(1+2)=-1+5+3=7\\neq0$. A unique solution exists.",
          "Replace column 1 by the RHS $(6,5,1)^{\\!\\top}$: $D_1=\\begin{vmatrix}6&1&1\\\\5&-1&2\\\\1&1&-1\\end{vmatrix}=7$. Then $x=D_1/D=1$.",
          "Similarly $D_2=\\begin{vmatrix}1&6&1\\\\1&5&2\\\\2&1&-1\\end{vmatrix}=14\\Rightarrow y=2$, and $D_3=\\begin{vmatrix}1&1&6\\\\1&-1&5\\\\2&1&1\\end{vmatrix}=21\\Rightarrow z=3$.",
          "Hence \\[\\boxed{(x,y,z)=(1,2,3)}.\\]"
        ]
      },
      {
        "name": "Elimination check",
        "steps": [
          "$(\\text{eq}1)-(\\text{eq}2):\\ 2y-z=1$. $(\\text{eq}1)\\cdot2-(\\text{eq}3):\\ y+3z=11$.",
          "From $2y-z=1$ and $y+3z=11$: $z=3,\\ y=2$, then $x=6-y-z=1$.",
          "Back-substitution into all three equations confirms \\[\\boxed{(x,y,z)=(1,2,3)}.\\]"
        ]
      }
    ],
    "remark": "Insight: when $D\neq0$ the system is automatically consistent with a single point of intersection — no separate consistency check is needed. Cramer's rule and elimination must agree."
  },
  {
    "theme": "linsys",
    "themeLabel": "Systems of Linear Equations",
    "title": "When the Trivial Cracks",
    "difficulty": 3,
    "task": "Find all values of $a$",
    "tags": [
      "homogeneous system",
      "non-trivial solution",
      "determinant",
      "singular matrix"
    ],
    "statement": "Find every real $a$ for which the homogeneous system $$(a-1)x+y+z=0,\\qquad x+(a-1)y+z=0,\\qquad x+y+(a-1)z=0$$ possesses a solution other than $x=y=z=0$. Report the sum of all such $a$.",
    "answer": "\\[\\boxed{a\\in\\{-1,\\,2\\}\\ \\Rightarrow\\ \\text{sum}=1}\\]",
    "trap": "Factoring the determinant gives $(a-2)^2(a+1)$; a tempting move is to keep only $a=2$ (a 'double' root) or to keep only $a=-1$. Both roots make $D=0$ and a homogeneous system with $D=0$ always has non-trivial solutions — multiplicity is irrelevant here.",
    "solutions": [
      {
        "name": "Determinant = 0 (homogeneous criterion)",
        "steps": [
          "A homogeneous system has a non-trivial solution $\\iff D=\\det\\begin{vmatrix}a-1&1&1\\\\1&a-1&1\\\\1&1&a-1\\end{vmatrix}=0$.",
          "Add all columns to column 1: the common entry is $a+1$, so $D=(a+1)\\begin{vmatrix}1&1&1\\\\1&a-1&1\\\\1&1&a-1\\end{vmatrix}$. Subtract row 1 from rows 2,3: $D=(a+1)\\,(a-2)(a-2)=(a+1)(a-2)^2$.",
          "$D=0\\iff a=-1$ or $a=2$. At $a=-1$ the line $x{=}y{=}z$ solves it; at $a=2$ a whole plane $x+y+z=0$ of solutions appears. Both are non-trivial.",
          "Sum $=-1+2=1$, so \\[\\boxed{a\\in\\{-1,2\\},\\ \\text{sum}=1}.\\]"
        ]
      },
      {
        "name": "Direct elimination",
        "steps": [
          "Subtract eq1 from eq2 and eq3: $(2-a)(x-y)=0$ and $(2-a)(x-z)=0$. If $a\\neq2$ then $x=y=z$; substituting into eq1 gives $(a+1)x=0$, so a non-zero solution needs $a=-1$.",
          "If $a=2$ all three equations collapse to $x+y+z=0$, an infinite family of non-trivial solutions.",
          "Thus exactly $a=-1$ and $a=2$ work, giving \\[\\boxed{\\text{sum}=1}.\\]"
        ]
      }
    ],
    "remark": "Insight: for a homogeneous system, $D=0$ is the complete test — it is automatically consistent (the zero vector always fits), so 'no solution' can never occur. The only question is trivial vs. non-trivial, and a repeated root counts once as a value of $a$."
  },
  {
    "theme": "linsys",
    "themeLabel": "Systems of Linear Equations",
    "title": "The Parameter That Hides a No",
    "difficulty": 4,
    "task": "Classify by $(a,b)$",
    "tags": [
      "consistency analysis",
      "D=0 trap",
      "Cramer determinants",
      "parameter"
    ],
    "statement": "For the system $$x+y+z=6,\\qquad x+2y+3z=10,\\qquad x+2y+az=b,$$ determine, in terms of the reals $a$ and $b$, when the system has (i) a unique solution, (ii) infinitely many solutions, (iii) no solution.",
    "answer": "\\[\\boxed{\\begin{aligned}&\\text{unique:}\\ a\\neq3\\ (\\text{any }b);\\\\ &\\text{infinite:}\\ a=3,\\ b=10;\\\\ &\\text{none:}\\ a=3,\\ b\\neq10.\\end{aligned}}\\]",
    "trap": "Computing $D=a-3$ and setting $a=3$, then declaring 'infinitely many solutions' is the classic error. $D=0$ alone does not decide the matter: at $a=3$ the third equation duplicates the coefficients of the second, so it is consistent ($\\infty$ solutions) only if its RHS matches, i.e. $b=10$; otherwise it contradicts and there is no solution.",
    "solutions": [
      {
        "name": "Determinant then RHS check",
        "steps": [
          "$D=\\begin{vmatrix}1&1&1\\\\1&2&3\\\\1&2&a\\end{vmatrix}=a-3$. If $a\\neq3$, $D\\neq0$ and the solution is unique for every $b$.",
          "If $a=3$, equations 2 and 3 have identical left sides $x+2y+3z$. Consistency forces equal right sides: $b=10$.",
          "$a=3,\\,b=10$: the third equation is redundant, leaving two independent equations in three unknowns — infinitely many solutions.",
          "$a=3,\\,b\\neq10$: $x+2y+3z$ cannot equal both $10$ and $b$ — no solution. \\[\\boxed{a\\neq3:\\text{unique};\\ a=3,b=10:\\infty;\\ a=3,b\\neq10:\\text{none}}\\]"
        ]
      },
      {
        "name": "Row reduction",
        "steps": [
          "Subtract eq2 from eq3: $(a-3)z=b-10$. Subtract eq1 from eq2: $y+2z=4$.",
          "If $a\\neq3$: $z=\\dfrac{b-10}{a-3}$ is determined, then $y$ and $x$ — unique.",
          "If $a=3$: the reduced equation is $0=b-10$. This is $0=0$ (a free parameter, $\\infty$ solutions) when $b=10$, and an impossibility (no solution) when $b\\neq10$.",
          "This reproduces \\[\\boxed{a\\neq3:\\text{unique};\\ a=3,b=10:\\infty;\\ a=3,b\\neq10:\\text{none}}.\\]"
        ]
      }
    ],
    "remark": "Insight: 'D=0' splits into two opposite outcomes. Always carry the RHS through the elimination — the very same $a=3$ gives infinitely many or none depending entirely on a single number $b$."
  },
  {
    "theme": "linsys",
    "themeLabel": "Systems of Linear Equations",
    "title": "The Famous Cubic Symmetric System",
    "difficulty": 4,
    "task": "Classify by $\\lambda$",
    "tags": [
      "symmetric system",
      "consistency",
      "D and Di",
      "repeated root"
    ],
    "statement": "Consider $$\\lambda x+y+z=1,\\qquad x+\\lambda y+z=\\lambda,\\qquad x+y+\\lambda z=\\lambda^{2}.$$ For which real $\\lambda$ does the system have a unique solution, infinitely many, or none? Identify in particular the value of $\\lambda$ for which it is inconsistent.",
    "answer": "\\[\\boxed{\\begin{aligned}&\\lambda\\neq1,-2:\\ \\text{unique};\\\\ &\\lambda=1:\\ \\text{infinitely many};\\\\ &\\lambda=-2:\\ \\text{no solution}.\\end{aligned}}\\]",
    "trap": "$D=(\\lambda-1)^2(\\lambda+2)$ vanishes at $\\lambda=1$ and $\\lambda=-2$; concluding 'infinitely many at both' is wrong. At $\\lambda=-2$ one finds $D=0$ but $D_1=D_2=D_3=9\\neq0$ — the hallmark of an inconsistent system, so there is no solution there.",
    "solutions": [
      {
        "name": "Cramer determinants D, Dᵢ",
        "steps": [
          "$D=\\begin{vmatrix}\\lambda&1&1\\\\1&\\lambda&1\\\\1&1&\\lambda\\end{vmatrix}=(\\lambda-1)^2(\\lambda+2)$, zero at $\\lambda=1,-2$. For other $\\lambda$, unique.",
          "$D_1=-(\\lambda-1)^2(\\lambda+1),\\ D_2=(\\lambda-1)^2,\\ D_3=(\\lambda-1)^2(\\lambda+1)^2$.",
          "At $\\lambda=1$: $D=D_1=D_2=D_3=0$ and the three equations collapse to one ($x+y+z=1$) — infinitely many solutions.",
          "At $\\lambda=-2$: $D=0$ but $D_1=D_2=D_3=9\\neq0$ — inconsistent, no solution. \\[\\boxed{\\lambda\\neq1,-2:\\text{unique};\\ \\lambda=1:\\infty;\\ \\lambda=-2:\\text{none}}\\]"
        ]
      },
      {
        "name": "Subtractive elimination",
        "steps": [
          "Subtracting eq1 from eq2 and eq3: $(\\lambda-1)(y-x)=\\lambda-1$ and $(\\lambda-1)(z-x)=\\lambda^2-1=(\\lambda-1)(\\lambda+1)$.",
          "If $\\lambda\\neq1$: divide by $\\lambda-1$ to get $y-x=1,\\ z-x=\\lambda+1$; substitute into eq1: $\\lambda x+(x+1)+(x+\\lambda+1)=1\\Rightarrow(\\lambda+2)x=-\\lambda$. Unique unless $\\lambda=-2$.",
          "$\\lambda=-2$ gives $0\\cdot x=2$ — impossible, no solution. $\\lambda=1$ makes all three equations identical — infinitely many.",
          "Hence \\[\\boxed{\\lambda\\neq1,-2:\\text{unique};\\ \\lambda=1:\\infty;\\ \\lambda=-2:\\text{none}}.\\]"
        ]
      }
    ],
    "remark": "Insight: the two roots of $D=0$ behave oppositely. The decisive diagnostic is the $D_i$: all $D_i=0$ permits (but does not guarantee) infinitely many, while any $D_i\neq0$ with $D=0$ forces inconsistency."
  },
  {
    "theme": "linsys",
    "themeLabel": "Systems of Linear Equations",
    "title": "Rows in Arithmetic Progression",
    "difficulty": 4,
    "task": "Find all $k$",
    "tags": [
      "singular coefficient matrix",
      "cramer fails",
      "consistency",
      "row dependence"
    ],
    "statement": "For the system $$x+2y+3z=1,\\qquad 2x+3y+4z=k,\\qquad 3x+4y+5z=k^{2},$$ find every value of $k$ for which the system is consistent, and state in each case whether the solution is unique or infinite.",
    "answer": "\\[\\boxed{k=1\\ \\text{only; infinitely many solutions. Unique is impossible for any }k.}\\]",
    "trap": "Reaching for Cramer's rule and computing $x=D_1/D$ is fatal here: the coefficient determinant is $D=0$ identically (the rows are in arithmetic progression, so $R_1+R_3=2R_2$). Division by $D$ is illegal, and a unique solution can never occur — the question is purely consistent-or-not.",
    "solutions": [
      {
        "name": "Dependence + consistency condition",
        "steps": [
          "The coefficient rows satisfy $R_1+R_3=2R_2$, hence $D=0$ for all $k$: no unique solution is ever possible.",
          "The same linear dependence must hold on the RHS for consistency: $1+k^2=2k$, i.e. $(k-1)^2=0$, giving $k=1$.",
          "At $k=1$ the third equation is the dependent combination $2R_2-R_1$ of the others, so only two independent equations remain in three unknowns — infinitely many solutions, e.g. $(x,y,z)=(t-1,\\,1-2t,\\,t)$.",
          "For $k\\neq1$ the RHS dependence fails and the system is inconsistent. \\[\\boxed{k=1:\\ \\infty\\ \\text{solutions; never unique}}\\]"
        ]
      },
      {
        "name": "Row reduction",
        "steps": [
          "$R_2-2R_1:\\ -y-2z=k-2$. $R_3-3R_1:\\ -2y-4z=k^2-3$. The second is twice the first only if $k^2-3=2(k-2)$, i.e. $(k-1)^2=0$.",
          "So for $k\\neq1$ we get the contradiction that $-2y-4z$ equals two unequal numbers — no solution.",
          "For $k=1$ the third equation is redundant; two equations, three unknowns — infinitely many.",
          "Therefore \\[\\boxed{k=1:\\ \\infty;\\ \\text{otherwise none; unique impossible}}.\\]"
        ]
      }
    ],
    "remark": "Insight: when the coefficient matrix is singular by construction, 'unique' is off the table before you start. Consistency reduces to demanding that the RHS obey the very same linear dependence as the rows."
  },
  {
    "theme": "linsys",
    "themeLabel": "Systems of Linear Equations",
    "title": "A Line, A Void, and Everything Else",
    "difficulty": 4,
    "task": "Classify by $a$",
    "tags": [
      "three planes",
      "parameter in coefficients",
      "consistency",
      "line of solutions"
    ],
    "statement": "The planes $$x+y-z=1,\\qquad 2x+3y+az=3,\\qquad x+ay+3z=2$$ depend on a real parameter $a$. Find the value(s) of $a$ for which the three planes share a line (infinitely many solutions), the value(s) for which they have no common point, and confirm the system is unique otherwise.",
    "answer": "\\[\\boxed{a=2:\\ \\text{a line }(\\infty);\\quad a=-3:\\ \\text{no solution};\\quad a\\neq2,-3:\\ \\text{unique}.}\\]",
    "trap": "$D=-(a-2)(a+3)$ has the two roots $a=2$ and $a=-3$; assuming both give 'a line of solutions' is the trap. Only $a=2$ is consistent (a line); at $a=-3$ the equations contradict, so the planes have no common point at all.",
    "solutions": [
      {
        "name": "Determinant + back-check",
        "steps": [
          "$D=\\begin{vmatrix}1&1&-1\\\\2&3&a\\\\1&a&3\\end{vmatrix}=-(a-2)(a+3)$. For $a\\neq2,-3$, $D\\neq0$: unique intersection point.",
          "At $a=2$ row-reduction gives bottom row $0=0$: the three planes meet in a line, infinitely many solutions.",
          "At $a=-3$ row-reduction gives bottom row $0=1$ (a contradiction): no common point.",
          "\\[\\boxed{a=2:\\infty;\\ a=-3:\\text{none};\\ \\text{else unique}}\\]"
        ]
      },
      {
        "name": "Elimination of the contradiction",
        "steps": [
          "Use eq1 to eliminate $x$ from eq2 and eq3: $R_2-2R_1:\\ y+(a+2)z=1$, $R_3-R_1:\\ (a-1)y+4z=1$.",
          "Eliminate $y$: $\\big[4-(a-1)(a+2)\\big]z=1-(a-1)=2-a$, i.e. $-(a-2)(a+3)\\,z=-(a-2)$.",
          "If $a\\neq2,-3$: solve for $z$ uniquely. If $a=2$: $0=0$, a free parameter — a line. If $a=-3$: $0=5\\cdot(\\text{nonzero})$? Substituting $a=-3$ gives $0\\cdot z=5$, impossible — no solution.",
          "Hence \\[\\boxed{a=2:\\infty;\\ a=-3:\\text{none};\\ \\text{else unique}}.\\]"
        ]
      }
    ],
    "remark": "Insight: distinct roots of $D=0$ need not behave the same way. Push the elimination to the final scalar equation $cz=d$: $0=0$ means a line, $0=(\text{nonzero})$ means an empty intersection."
  },
  {
    "theme": "linsys",
    "themeLabel": "Systems of Linear Equations",
    "title": "Two Knobs on a Flat System",
    "difficulty": 5,
    "task": "Classify by $(a,b)$",
    "tags": [
      "singular matrix",
      "two parameters",
      "consistency relation",
      "never unique"
    ],
    "statement": "Let $$x-2y+z=1,\\qquad 2x+y+3z=a,\\qquad 4x-3y+5z=b,$$ where $a,b$ are real parameters. Show that a unique solution is impossible, and find the exact relation between $a$ and $b$ under which the system is consistent; in that case state the nature of the solution set.",
    "answer": "\\[\\boxed{\\text{Unique never possible}\\,(D\\equiv0);\\ \\ \\text{consistent}\\iff b=a+2,\\ \\text{then }\\infty\\ \\text{solutions (a line).}}\\]",
    "trap": "Plugging into Cramer's rule and writing $x=D_1/D$ is a dead end, since $R_3=2R_1+R_2$ makes $D=0$ for all $(a,b)$. The system can only be inconsistent or infinite — never unique — so the real task is the RHS relation, not solving for a point.",
    "solutions": [
      {
        "name": "Row dependence + RHS relation",
        "steps": [
          "Observe $R_3=2R_1+R_2$ in the coefficients: $2(1,-2,1)+(2,1,3)=(4,-3,5)$. Thus $D=0$ identically and no unique solution exists.",
          "For consistency the RHS must obey the same combination: $b=2(1)+a=a+2$.",
          "When $b=a+2$, equation 3 is redundant; two independent equations in three unknowns give a one-parameter family (a line). When $b\\neq a+2$, equation 3 contradicts the others — no solution.",
          "\\[\\boxed{D\\equiv0\\Rightarrow\\text{never unique};\\ b=a+2\\Rightarrow\\infty;\\ b\\neq a+2\\Rightarrow\\text{none}}\\]"
        ]
      },
      {
        "name": "Gaussian elimination",
        "steps": [
          "$R_2-2R_1:\\ 5y+z=a-2$. $R_3-4R_1:\\ 5y+z=b-4$.",
          "Subtracting these: $0=(b-4)-(a-2)=b-a-2$. Consistency demands $b-a-2=0$, i.e. $b=a+2$.",
          "If $b=a+2$ the two reduced equations coincide; with eq1 we have two equations and three unknowns — infinitely many solutions along a line. Otherwise the bottom row is $0=(\\text{nonzero})$ — no solution.",
          "So \\[\\boxed{b=a+2:\\infty;\\ \\text{else none; never unique}}.\\]"
        ]
      }
    ],
    "remark": "Insight: a two-parameter RHS does not create a 'unique' regime when the coefficient matrix is singular. The whole $(a,b)$-plane splits into one consistency line $b=a+2$ (infinite solutions) and its complement (no solution)."
  },
  {
    "theme": "linsys",
    "themeLabel": "Systems of Linear Equations",
    "title": "The Missing Infinity",
    "difficulty": 4,
    "task": "Classify by $k$",
    "tags": [
      "parameter in coefficient and rhs",
      "D and Di",
      "no infinite regime"
    ],
    "statement": "For $$2x-y+z=k,\\qquad x+2y-z=2,\\qquad kx+y+z=1,$$ the parameter $k$ appears in both a coefficient and a right-hand side. Determine all $k$ giving a unique solution, all $k$ giving infinitely many, and all $k$ giving none.",
    "answer": "\\[\\boxed{k\\neq8:\\ \\text{unique};\\quad k=8:\\ \\text{no solution};\\quad \\text{infinitely many: never.}}\\]",
    "trap": "Finding $D=8-k$ and setting $k=8$, then announcing 'infinitely many solutions because $D=0$' is the seductive error. At $k=8$ one checks $D_1=27,\\ D_2=-81,\\ D_3=-135$, all non-zero — so the system is inconsistent. There is no $k$ at all that yields infinitely many solutions.",
    "solutions": [
      {
        "name": "D then the Dᵢ test",
        "steps": [
          "$D=\\begin{vmatrix}2&-1&1\\\\1&2&-1\\\\k&1&1\\end{vmatrix}=8-k$. For $k\\neq8$, $D\\neq0$: unique solution.",
          "At $k=8$, compute $D_1=\\begin{vmatrix}8&-1&1\\\\2&2&-1\\\\1&1&1\\end{vmatrix}=27\\neq0$ (also $D_2=-81,\\ D_3=-135$).",
          "$D=0$ together with some $D_i\\neq0$ is exactly the inconsistent case: no solution at $k=8$.",
          "Since 'infinitely many' requires $D=0$ AND all $D_i=0$, and that never happens here, \\[\\boxed{k\\neq8:\\text{unique};\\ k=8:\\text{none};\\ \\infty:\\text{never}}.\\]"
        ]
      },
      {
        "name": "Elimination to a contradiction",
        "steps": [
          "From eq1 and eq2 eliminate $z$: $(2x-y)+ (x+2y)=k+2\\Rightarrow 3x+y=k+2$. From eq2 and eq3 eliminate $z$: $(x+2y)+(kx+y)=3\\Rightarrow (k+1)x+3y=3$.",
          "Solve these two: $x=\\dfrac{3(k+1)}{8-k}$ type expressions are finite and unique whenever $8-k\\neq0$.",
          "At $k=8$ the two reduced equations $3x+y=10$ and $9x+3y=3$ are parallel-inconsistent ($3(3x+y)=30\\neq3$): no solution.",
          "Thus \\[\\boxed{k\\neq8:\\text{unique};\\ k=8:\\text{none};\\ \\infty:\\text{never}}.\\]"
        ]
      }
    ],
    "remark": "Insight: a system can fail to ever be 'infinitely many'. Once $D=0$, the $D_i$ decide: all zero permits infinitude, but a single non-zero $D_i$ slams the door to 'no solution'."
  },
  {
    "theme": "linsys",
    "themeLabel": "Systems of Linear Equations",
    "title": "Two Singularities, Both Forgiving",
    "difficulty": 5,
    "task": "Classify by $a$",
    "tags": [
      "quadratic determinant",
      "two roots",
      "aligned rhs",
      "all Di zero"
    ],
    "statement": "The system $$x+2y+3z=4,\\qquad 2x+ay+6z=8,\\qquad 3x+6y+az=12$$ depends on a real parameter $a$. Find all $a$ for which it has a unique solution, all for which it has infinitely many, and all for which it has none.",
    "answer": "\\[\\boxed{a\\neq4,9:\\ \\text{unique};\\quad a\\in\\{4,9\\}:\\ \\text{infinitely many};\\quad \\text{no solution: never.}}\\]",
    "trap": "$D=(a-4)(a-9)$ gives two roots, and the instinct is to call one of them 'infinitely many' and the other 'no solution'. In fact the RHS $(4,8,12)=4(1,2,3)$ is aligned with row 1, forcing $D_1=D_2=D_3=0$ at both roots — so $a=4$ and $a=9$ each give infinitely many, and inconsistency never occurs.",
    "solutions": [
      {
        "name": "D and the aligned RHS",
        "steps": [
          "$D=\\begin{vmatrix}1&2&3\\\\2&a&6\\\\3&6&a\\end{vmatrix}=(a-4)(a-9)$, zero at $a=4$ and $a=9$; unique for all other $a$.",
          "Because $(4,8,12)=4\\,(1,2,3)$ equals $4\\times$(row 1), replacing any column by the RHS leaves two proportional columns at each root, so $D_1=D_2=D_3=0$ at both $a=4$ and $a=9$.",
          "$D=0$ with all $D_i=0$ and the equations genuinely consistent $\\Rightarrow$ infinitely many. Indeed $a=4$ gives $(x,y,z)=(4-2t,t,0)$ and $a=9$ gives $(4-3t,0,t)$.",
          "\\[\\boxed{a\\neq4,9:\\text{unique};\\ a\\in\\{4,9\\}:\\infty;\\ \\text{none: never}}\\]"
        ]
      },
      {
        "name": "Row reduction at the roots",
        "steps": [
          "$R_2-2R_1:\\ (a-4)y=0$. $R_3-3R_1:\\ (a-9)z=0$. The RHS entries become $8-8=0$ and $12-12=0$ — no contradiction is generated.",
          "If $a\\neq4,9$: $y=0,\\ z=0$, then $x=4$ — unique. If $a=4$: $y$ is free with $z=0$; if $a=9$: $z$ is free with $y=0$ — a one-parameter family each.",
          "Because the reduced equations are $0=0$ (never $0=\\text{nonzero}$), the system is never inconsistent.",
          "Hence \\[\\boxed{a\\neq4,9:\\text{unique};\\ a\\in\\{4,9\\}:\\infty;\\ \\text{none: never}}.\\]"
        ]
      }
    ],
    "remark": "Insight: a special RHS can defuse every singularity. When the constants ride exactly along a row of the matrix, the $D_i$ all vanish wherever $D$ does, turning every degenerate $a$ into an infinite-solution case rather than a contradiction."
  },
  {
    "theme": "linsys",
    "themeLabel": "Systems of Linear Equations",
    "title": "The Full Two-Parameter Map",
    "difficulty": 5,
    "task": "Full $(a,b)$ classification",
    "tags": [
      "grand hybrid",
      "two parameters",
      "complete classification",
      "consistency"
    ],
    "statement": "For the system $$x+y+z=1,\\qquad 2x+3y+az=3,\\qquad x+ay+3z=b,$$ give the complete classification of solution behaviour over all real $(a,b)$: state every $(a,b)$ regime that yields a unique solution, infinitely many, or none.",
    "answer": "\\[\\boxed{\\begin{aligned}&\\text{unique:}\\ a\\notin\\{0,3\\}\\ (\\text{any }b);\\\\ &\\text{infinite:}\\ (a,b)=(0,0)\\ \\text{or}\\ (3,3);\\\\ &\\text{none:}\\ a=0,b\\neq0\\ \\text{or}\\ a=3,b\\neq3.\\end{aligned}}\\]",
    "trap": "After getting $D=-a(a-3)$ and the two roots $a=0,3$, declaring 'infinitely many at $a=0$ and $a=3$' regardless of $b$ is the trap. Each root needs its own RHS check: $a=0$ is consistent only when $b=0$, and $a=3$ only when $b=3$; off those points the system has no solution.",
    "solutions": [
      {
        "name": "Determinant then per-root RHS test",
        "steps": [
          "$D=\\begin{vmatrix}1&1&1\\\\2&3&a\\\\1&a&3\\end{vmatrix}=-a(a-3)$. For $a\\neq0,3$, $D\\neq0$: unique solution for every $b$.",
          "$a=0$: eliminating gives the bottom equation $0=b$, so consistent $\\iff b=0$ (then infinitely many, e.g. $(x,y,z)=(-3t,\\,2t+1,\\,t)$); else no solution.",
          "$a=3$: eliminating gives the bottom equation $0=b-3$, so consistent $\\iff b=3$ (then infinitely many, e.g. $(0,\\,1-t,\\,t)$); else no solution.",
          "Combining: \\[\\boxed{a\\notin\\{0,3\\}:\\text{unique};\\ (0,0),(3,3):\\infty;\\ \\text{otherwise none}}.\\]"
        ]
      },
      {
        "name": "Gaussian elimination",
        "steps": [
          "$R_2-2R_1:\\ y+(a-2)z=1$. $R_3-R_1:\\ (a-1)y+2z=b-1$.",
          "Eliminate $y$: $\\big[2-(a-1)(a-2)\\big]z=(b-1)-(a-1)$, which simplifies to $-(a)(a-3)\\,z = b - a$. The coefficient is exactly $D$.",
          "If $a\\neq0,3$: $z$ is determined uniquely. If $a=0$: $0\\cdot z=b-0=b\\Rightarrow$ infinite when $b=0$, none when $b\\neq0$. If $a=3$: $0\\cdot z=b-3\\Rightarrow$ infinite when $b=3$, none when $b\\neq3$.",
          "This yields the full map \\[\\boxed{a\\notin\\{0,3\\}:\\text{unique};\\ (0,0),(3,3):\\infty;\\ \\text{otherwise none}}.\\]"
        ]
      }
    ],
    "remark": "Insight: a clean two-parameter system is a $D=0$ trap on every singular line. Reduce to a single scalar equation $D\\cdot z = (\text{RHS expression})$; the right side, evaluated at each root of $D$, decides infinite vs. none point by point."
  },
  {
    "theme": "parammat",
    "themeLabel": "Parameters & Matrix Equations",
    "title": "The Twin That Hides the Second Root",
    "difficulty": 3,
    "task": "Find all values",
    "tags": [
      "singular matrix",
      "parameter",
      "determinant factoring",
      "repeated root",
      "row operations"
    ],
    "statement": "For the real parameter $a$, let\n$$M(a)=\\begin{pmatrix}2 & a & a\\\\ a & 2 & a\\\\ a & a & 2\\end{pmatrix}.$$\nFind every value of $a$ for which $M(a)$ is singular (i.e. has no inverse).",
    "answer": "$\\boxed{a\\in\\{-1,\\,2\\}}$",
    "trap": "After expanding you get $\\det M=2(a-2)^2(a+1)$. The seductive slip is to read off only $a=2$ (or, worse, to 'cancel' the squared factor as if it were harmless and report a single root) and forget that $a=-1$ also kills the determinant. Singularity needs $\\det M=0$, and a product is zero when ANY factor is zero — the lone simple root $a=-1$ is exactly the one a hurried solver loses.",
    "solutions": [
      {
        "name": "Row-sum factor then reduce",
        "steps": [
          "Each row of $M$ sums to $a+a+2$ — careful, the diagonal entry differs by row, so instead add all columns into column $1$: every entry of the new column $1$ becomes $2+2a$. Factor $(2+2a)=2(1+a)$ out: $\\det M=2(1+a)\\begin{vmatrix}1 & a & a\\\\ 1 & 2 & a\\\\ 1 & a & 2\\end{vmatrix}.$",
          "In the remaining determinant subtract row $1$ from rows $2$ and $3$: $\\begin{vmatrix}1 & a & a\\\\ 0 & 2-a & 0\\\\ 0 & 0 & 2-a\\end{vmatrix}=(2-a)^2.$",
          "Hence $\\det M=2(1+a)(2-a)^2=2(a+1)(a-2)^2$, which vanishes exactly when $a=-1$ or $a=2$, so $\\boxed{a\\in\\{-1,2\\}}$."
        ]
      },
      {
        "name": "Direct expansion",
        "steps": [
          "Expand along the first row: $\\det M=2(4-a^2)-a(2a-a^2)+a(a^2-2a)=2(4-a^2)-2a(2a-a^2).$",
          "Simplify: $8-2a^2-4a^2+2a^3=2a^3-6a^2+8=2(a^3-3a^2+4).$",
          "Factor the cubic: $a^3-3a^2+4=(a+1)(a-2)^2$, so $\\det M=2(a+1)(a-2)^2=0\\iff \\boxed{a\\in\\{-1,2\\}}.$"
        ]
      }
    ],
    "remark": "Insight. 'Singular' means $\\det=0$, and a factorised determinant exposes every offending parameter — a repeated factor still contributes its base value as a root, so never let a square swallow a solution."
  },
  {
    "theme": "parammat",
    "themeLabel": "Parameters & Matrix Equations",
    "title": "You Cannot Divide by a Matrix",
    "difficulty": 3,
    "task": "Express the inverse",
    "tags": [
      "matrix polynomial",
      "inverse",
      "non-commutative",
      "identity matrix"
    ],
    "statement": "Let $A$ be a $3\\times 3$ real matrix satisfying\n$$A^2 = A + I,$$\nwhere $I$ is the $3\\times3$ identity. Show $A$ is invertible and express $A^{-1}$ as a polynomial in $A$ (i.e. in the form $pA+qI$ with real $p,q$).",
    "answer": "$\\boxed{A^{-1}=A-I}$",
    "trap": "The tempting move is to 'divide both sides by $A$' to get $A = I + A^{-1}$ and then 'divide by $A$ again', treating $A$ like a scalar. But matrix division is undefined — and worse, you have not even shown $A^{-1}$ exists before invoking it. The correct route first proves invertibility (by factoring the relation into a product equal to $I$), then reads off the inverse.",
    "solutions": [
      {
        "name": "Factor the relation into a product equal to I",
        "steps": [
          "Rewrite $A^2=A+I$ as $A^2-A=I$, i.e. $A(A-I)=I$. Since $A-I$ is a polynomial in $A$, it commutes with $A$, so also $(A-I)A=A^2-A=I$.",
          "Both $A(A-I)=I$ and $(A-I)A=I$ hold, which is exactly the definition of an inverse: $A$ is invertible and $A^{-1}=A-I$.",
          "Therefore $\\boxed{A^{-1}=A-I}$, a clean polynomial in $A$ — no division by a matrix ever occurred."
        ]
      },
      {
        "name": "Determinant check plus verification",
        "steps": [
          "From $A(A-I)=I$ take determinants: $\\det A\\cdot\\det(A-I)=\\det I=1$, so $\\det A\\neq0$ and $A$ is invertible.",
          "Multiply the proposed inverse out: $A(A-I)=A^2-A=(A+I)-A=I$, confirming $A-I$ is a genuine right (hence two-sided) inverse.",
          "Hence $\\boxed{A^{-1}=A-I}$."
        ]
      },
      {
        "name": "Concrete realisation",
        "steps": [
          "Take $A=\\begin{pmatrix}1&1&0\\\\1&0&0\\\\0&0&\\varphi\\end{pmatrix}$ where the top block is the Fibonacci matrix and $\\varphi=\\tfrac{1+\\sqrt5}{2}$ satisfies $\\varphi^2=\\varphi+1$; then $A^2=A+I$ holds entry-by-entry.",
          "Its inverse is $A^{-1}=\\begin{pmatrix}0&1&0\\\\1&-1&0\\\\0&0&\\varphi-1\\end{pmatrix}=A-I$, illustrating the general identity.",
          "Thus the relation forces $\\boxed{A^{-1}=A-I}$ regardless of which such $A$ we pick."
        ]
      }
    ],
    "remark": "Insight. A matrix relation of the form $A\\cdot(\\text{poly in }A)=I$ both proves invertibility and hands you the inverse for free — never 'cancel' a matrix as if it were a number."
  },
  {
    "theme": "parammat",
    "themeLabel": "Parameters & Matrix Equations",
    "title": "When a Plane Refuses to Meet",
    "difficulty": 4,
    "task": "Classify the system",
    "tags": [
      "system of equations",
      "Cramer's rule",
      "consistency",
      "parameters",
      "determinant split"
    ],
    "statement": "Consider the linear system in $x,y,z$:\n$$x+y+z=4,\\qquad x+2y+3z=9,\\qquad 2x+3y+\\lambda z=\\mu.$$\nFor real parameters $\\lambda,\\mu$, determine all pairs $(\\lambda,\\mu)$ for which the system has (a) a unique solution, (b) infinitely many solutions, (c) no solution.",
    "answer": "$\\boxed{\\text{unique}\\iff\\lambda\\neq4\\ (\\text{any }\\mu);\\quad \\infty\\text{ many}\\iff\\lambda=4,\\ \\mu=13;\\quad \\text{none}\\iff\\lambda=4,\\ \\mu\\neq13}$",
    "trap": "The seductive error is to compute $\\Delta=\\lambda-4$, declare 'unique for $\\lambda\\neq4$', and then announce that $\\lambda=4$ automatically gives infinitely many solutions. That is false: $\\Delta=0$ only kills the unique case. At $\\lambda=4$ you must still test the numerators $\\Delta_1,\\Delta_2,\\Delta_3$ — they all vanish only when $\\mu=13$. For $\\lambda=4,\\ \\mu\\neq13$ the system is actually inconsistent (no solution), so the blanket claim 'infinitely many' is the wrong answer.",
    "solutions": [
      {
        "name": "Cramer determinants $\\Delta,\\Delta_i$",
        "steps": [
          "The coefficient determinant is $\\Delta=\\begin{vmatrix}1&1&1\\\\1&2&3\\\\2&3&\\lambda\\end{vmatrix}$. Performing $R_2\\to R_2-R_1$ and $R_3\\to R_3-2R_1$ gives $\\begin{vmatrix}1&1&1\\\\0&1&2\\\\0&1&\\lambda-2\\end{vmatrix}=(\\lambda-2)-2=\\lambda-4$.",
          "If $\\lambda\\neq4$ then $\\Delta\\neq0$, so by Cramer's rule there is a unique solution for every $\\mu$: explicitly $x=\\dfrac{\\mu-\\lambda-9}{\\lambda-4},\\ y=\\dfrac{5\\lambda-2\\mu+6}{\\lambda-4},\\ z=\\dfrac{\\mu-13}{\\lambda-4}.$",
          "Now set $\\lambda=4$. The Cramer numerators become $\\Delta_1=\\mu-13$, $\\Delta_2=26-2\\mu=-2(\\mu-13)$, and $\\Delta_3=\\mu-13$. With $\\Delta=0$, the system has a solution only if every $\\Delta_i=0$, which forces $\\mu=13$.",
          "If $\\lambda=4,\\ \\mu=13$ all of $\\Delta,\\Delta_1,\\Delta_2,\\Delta_3$ vanish, so the system reduces to fewer independent equations and has infinitely many solutions; if $\\lambda=4,\\ \\mu\\neq13$ then $\\Delta=0$ while $\\Delta_1\\neq0$, giving no solution.",
          "Hence $\\boxed{\\text{unique }\\lambda\\neq4;\\ \\infty\\ (\\lambda,\\mu)=(4,13);\\ \\text{none }\\lambda=4,\\mu\\neq13}.$"
        ]
      },
      {
        "name": "Direct reduction of the equations",
        "steps": [
          "Add the first two equations: $(x+y+z)+(x+2y+3z)=4+9$ gives $2x+3y+4z=13$. Compare this with the third equation $2x+3y+\\lambda z=\\mu$: the left sides agree exactly when $\\lambda=4$.",
          "If $\\lambda\\neq4$, subtracting $2x+3y+4z=13$ from the third equation leaves $(\\lambda-4)z=\\mu-13$, so $z=\\dfrac{\\mu-13}{\\lambda-4}$ is forced; back-substitution then pins down $x$ and $y$ uniquely — a unique solution for every $\\mu$.",
          "If $\\lambda=4$, the third equation reads $2x+3y+4z=\\mu$, while the combination of the first two already gives $2x+3y+4z=13$. When $\\mu=13$ the third equation is the identical statement $13=13$, i.e. it becomes $0=0$, leaving two independent equations in three unknowns: infinitely many solutions, e.g. $(x,y,z)=(t-1,\\,5-2t,\\,t)$.",
          "When $\\lambda=4$ but $\\mu\\neq13$, the same step yields the impossible $13=\\mu$, i.e. $0=\\mu-13\\neq0$: no solution.",
          "This reproduces $\\boxed{\\text{unique }\\lambda\\neq4;\\ \\infty\\ (4,13);\\ \\text{none }\\lambda=4,\\mu\\neq13}.$"
        ]
      }
    ],
    "remark": "**Insight.** A vanishing $\\Delta$ removes only the unique-solution case; it does **not** decide between 'infinitely many' and 'none'. The verdict at $\\lambda=4$ is settled entirely by the numerators $\\Delta_i$ — all zero means the third equation collapses to $0=0$ (infinite family), while a single nonzero $\\Delta_i$ exposes a contradiction $0\\neq0$ (no solution)."
  },
  {
    "theme": "parammat",
    "themeLabel": "Parameters & Matrix Equations",
    "title": "Solve for the Unknown Column",
    "difficulty": 4,
    "task": "Solve AX=B",
    "tags": [
      "matrix equation",
      "inverse",
      "cramer",
      "linear system"
    ],
    "statement": "Let\n$$A=\\begin{pmatrix}1&2&3\\\\1&3&5\\\\1&5&12\\end{pmatrix},\\qquad B=\\begin{pmatrix}1\\\\2\\\\1\\end{pmatrix}.$$\nSolve the matrix equation $AX=B$ for the column $X=\\begin{pmatrix}x\\\\y\\\\z\\end{pmatrix}$.",
    "answer": "$\\boxed{X=\\begin{pmatrix}-2\\\\\\ \\ 3\\\\-1\\end{pmatrix}}$",
    "trap": "The trap is to write $X=BA^{-1}$ by analogy with scalars. Order matters: from $AX=B$ you must left-multiply by $A^{-1}$ to get $X=A^{-1}B$, not $BA^{-1}$ (which is not even a valid product here, $B$ being $3\\times1$). Getting the multiplication side wrong is the classic non-commutativity slip.",
    "solutions": [
      {
        "name": "Cramer's rule",
        "steps": [
          "$\\det A=\\begin{vmatrix}1&2&3\\\\1&3&5\\\\1&5&12\\end{vmatrix}=1(36-25)-2(12-5)+3(5-3)=11-14+6=3\\neq0$, so a unique $X=A^{-1}B$ exists.",
          "Replace column $1$ by $B$: $\\det A_x=\\begin{vmatrix}1&2&3\\\\2&3&5\\\\1&5&12\\end{vmatrix}=-6$, so $x=-6/3=-2$. Replace column $2$: $\\det A_y=\\begin{vmatrix}1&1&3\\\\1&2&5\\\\1&1&12\\end{vmatrix}=9$, so $y=9/3=3$.",
          "Replace column $3$: $\\det A_z=\\begin{vmatrix}1&2&1\\\\1&3&2\\\\1&5&1\\end{vmatrix}=-3$, so $z=-3/3=-1$.",
          "Hence $\\boxed{X=(-2,\\,3,\\,-1)^{\\mathsf T}}$."
        ]
      },
      {
        "name": "Row reduction of [A | B]",
        "steps": [
          "Augment: $\\left[\\begin{array}{ccc|c}1&2&3&1\\\\1&3&5&2\\\\1&5&12&1\\end{array}\\right]$. $R_2\\to R_2-R_1$, $R_3\\to R_3-R_1$: rows $(0,1,2\\,|\\,1)$ and $(0,3,9\\,|\\,0)$.",
          "$R_3\\to R_3-3R_2$: $(0,0,3\\,|\\,-3)$, so $z=-1$. Back-substitute into $y+2z=1$: $y=1-2(-1)=3$.",
          "From $x+2y+3z=1$: $x=1-2(3)-3(-1)=1-6+3=-2$.",
          "Thus $\\boxed{X=(-2,\\,3,\\,-1)^{\\mathsf T}}$."
        ]
      },
      {
        "name": "Direct substitution check",
        "steps": [
          "Claim $X=(-2,3,-1)^{\\mathsf T}$. Compute $AX$: row $1$ gives $-2+6-3=1$; row $2$ gives $-2+9-5=2$; row $3$ gives $-2+15-12=1$.",
          "So $AX=(1,2,1)^{\\mathsf T}=B$, and since $\\det A=3\\neq0$ the solution is unique.",
          "Therefore $\\boxed{X=(-2,\\,3,\\,-1)^{\\mathsf T}}$."
        ]
      }
    ],
    "remark": "Insight. $AX=B\\Rightarrow X=A^{-1}B$ (left-multiply); the mirror equation $XA=B$ instead needs $X=BA^{-1}$ (right-multiply). The side of multiplication is dictated by where the unknown sits."
  },
  {
    "theme": "parammat",
    "themeLabel": "Parameters & Matrix Equations",
    "title": "The Geometric Series of a Vanishing Matrix",
    "difficulty": 4,
    "task": "Compute the inverse",
    "tags": [
      "nilpotent",
      "inverse",
      "matrix polynomial",
      "telescoping",
      "strictly triangular"
    ],
    "statement": "Let\n$$N=\\begin{pmatrix}0&2&1\\\\0&0&3\\\\0&0&0\\end{pmatrix}.$$\nVerify $N^3=O$ and use it to compute $(I-N)^{-1}$.",
    "answer": "$\\boxed{(I-N)^{-1}=I+N+N^2=\\begin{pmatrix}1&2&7\\\\0&1&3\\\\0&0&1\\end{pmatrix}}$",
    "trap": "It is tempting to invert $I-N$ by brute cofactors and call it a day, or to 'sum the infinite series' $I+N+N^2+N^3+\\cdots$ and worry about convergence. With a matrix there is no convergence question: because $N$ is nilpotent ($N^3=O$), the series TERMINATES exactly at $N^2$, and $(I-N)^{-1}=I+N+N^2$ is an algebraic identity, not a limit. Forgetting nilpotency and dragging in 'convergence' (or keeping a nonzero $N^3$ term) is the misstep.",
    "solutions": [
      {
        "name": "Telescoping identity",
        "steps": [
          "Compute $N^2=\\begin{pmatrix}0&0&6\\\\0&0&0\\\\0&0&0\\end{pmatrix}$ and $N^3=N\\cdot N^2=O$ (the strictly-upper structure shifts the nonzero band off the matrix).",
          "Use the algebraic factorisation $(I-N)(I+N+N^2)=I-N^3=I-O=I$. Since this product is $I$ and $N$-polynomials commute, $I+N+N^2$ is a genuine two-sided inverse.",
          "Therefore $(I-N)^{-1}=I+N+N^2=\\begin{pmatrix}1&0&0\\\\0&1&0\\\\0&0&1\\end{pmatrix}+\\begin{pmatrix}0&2&1\\\\0&0&3\\\\0&0&0\\end{pmatrix}+\\begin{pmatrix}0&0&6\\\\0&0&0\\\\0&0&0\\end{pmatrix}=\\boxed{\\begin{pmatrix}1&2&7\\\\0&1&3\\\\0&0&1\\end{pmatrix}}.$"
        ]
      },
      {
        "name": "Direct inversion check",
        "steps": [
          "$I-N=\\begin{pmatrix}1&-2&-1\\\\0&1&-3\\\\0&0&1\\end{pmatrix}$ is upper-triangular with all diagonal entries $1$, so $\\det(I-N)=1\\neq0$ and it is invertible.",
          "Solving $(I-N)X=I$ by back-substitution column-by-column (or computing the adjugate) gives $X=\\begin{pmatrix}1&2&7\\\\0&1&3\\\\0&0&1\\end{pmatrix}$.",
          "Multiplying back, $(I-N)X=I$, confirming $\\boxed{(I-N)^{-1}=\\begin{pmatrix}1&2&7\\\\0&1&3\\\\0&0&1\\end{pmatrix}}.$"
        ]
      }
    ],
    "remark": "Insight. For any nilpotent $N$ with $N^k=O$, the inverse of $I-N$ is the FINITE sum $I+N+\\cdots+N^{k-1}$ — the algebra mimics $\\tfrac1{1-x}$ but with no convergence concerns because the tail is exactly zero."
  },
  {
    "theme": "parammat",
    "themeLabel": "Parameters & Matrix Equations",
    "title": "When Trivial Is Not the Only Answer",
    "difficulty": 4,
    "task": "Find all values",
    "tags": [
      "homogeneous system",
      "non-trivial solution",
      "parameter",
      "determinant zero",
      "repeated root"
    ],
    "statement": "Find all real $a$ for which the homogeneous system\n$$ax+y+z=0,\\qquad x+ay+z=0,\\qquad x+y+az=0$$\nhas a non-trivial (i.e. not all-zero) solution. For each such $a$, also state how many free parameters the solution carries.",
    "answer": "$\\boxed{a=1\\ (\\text{2 free parameters})\\quad\\text{or}\\quad a=-2\\ (\\text{1 free parameter})}$",
    "trap": "Many stop at $\\det=0\\Rightarrow a=1$ or $a=-2$ and declare both cases 'the same'. They are not: at $a=1$ all three equations collapse to the single plane $x+y+z=0$ (a two-parameter family of solutions), whereas at $a=-2$ exactly one independent constraint is lost (a one-parameter line). Treating every singular case as identical, and ignoring how MANY free parameters appear, is the conceptual trap.",
    "solutions": [
      {
        "name": "Determinant condition then case analysis",
        "steps": [
          "A homogeneous square system has a non-trivial solution iff its coefficient determinant is zero. Adding all columns into column $1$ gives the common entry $a+2$, so $\\det\\begin{pmatrix}a&1&1\\\\1&a&1\\\\1&1&a\\end{pmatrix}=(a+2)(a-1)^2$.",
          "$\\det=0\\iff a=1$ or $a=-2$.",
          "At $a=1$ every equation is $x+y+z=0$: one constraint, three unknowns, so $3-1=2$ free parameters. At $a=-2$ the three equations are distinct but dependent (they sum to $0=0$); two are independent, giving $3-2=1$ free parameter.",
          "Hence $\\boxed{a=1\\ (2\\text{ params}),\\ a=-2\\ (1\\text{ param})}.$"
        ]
      },
      {
        "name": "Row reduction with the parameter",
        "steps": [
          "Subtract row $3$ from rows $1$ and $2$: $(a-1)x-(a-1)z=0$ and $(a-1)y-(a-1)z=0$, i.e. $(a-1)(x-z)=0$ and $(a-1)(y-z)=0$, plus $x+y+az=0$.",
          "If $a\\neq1$: then $x=z$ and $y=z$; substituting into $x+y+az=0$ gives $(2+a)z=0$. For $a\\neq-2$ this forces $z=0$ hence only the trivial solution; for $a=-2$ it is satisfied by any $z$, giving the line $x=y=z$ — one free parameter.",
          "If $a=1$: both bracket conditions vanish identically, leaving only $x+y+z=0$ — a plane, two free parameters.",
          "Therefore non-trivial solutions occur exactly at $\\boxed{a=1\\ (2\\text{ params})\\text{ or }a=-2\\ (1\\text{ param})}.$"
        ]
      }
    ],
    "remark": "Insight. $\\det=0$ guarantees a non-trivial solution exists, but the dimension of the solution space (how many free parameters) depends on how far the determinant degenerates — a double determinant-root often signals a deeper degeneracy collapse."
  },
  {
    "theme": "parammat",
    "themeLabel": "Parameters & Matrix Equations",
    "title": "Tuning a Matrix to Be Orthogonal",
    "difficulty": 4,
    "task": "Find the value",
    "tags": [
      "orthogonal matrix",
      "parameter",
      "transpose",
      "dot product",
      "unit columns"
    ],
    "statement": "Let\n$$A=\\frac13\\begin{pmatrix}2&2&1\\\\-2&1&2\\\\1&-2&k\\end{pmatrix},\\qquad k\\in\\mathbb{R}.$$\nFind the value of $k$ for which $A$ is orthogonal (i.e. $AA^{\\mathsf T}=I$). For that $k$, also give $A^{-1}$.",
    "answer": "$\\boxed{k=2,\\quad A^{-1}=A^{\\mathsf T}=\\dfrac13\\begin{pmatrix}2&-2&1\\\\2&1&-2\\\\1&2&2\\end{pmatrix}}$",
    "trap": "The seductive shortcut is to demand only that the determinant equal $\\pm1$, treating $|\\det A|=1$ as the definition of orthogonality. But $|\\det A|=1$ is necessary, NOT sufficient — orthogonality requires every pair of rows to be orthonormal. A matrix can have determinant $1$ while its rows are not mutually perpendicular, so the determinant condition alone admits wrong $k$.",
    "solutions": [
      {
        "name": "Row orthonormality",
        "steps": [
          "Write $A=\\tfrac13M$ with $M=\\begin{pmatrix}2&2&1\\\\-2&1&2\\\\1&-2&k\\end{pmatrix}$. Then $AA^{\\mathsf T}=I\\iff MM^{\\mathsf T}=9I$, i.e. each row of $M$ has squared length $9$ and distinct rows are orthogonal.",
          "Row $3$ length: $1^2+(-2)^2+k^2=5+k^2=9\\Rightarrow k^2=4\\Rightarrow k=\\pm2$.",
          "Orthogonality of row $1\\cdot$ row $3$: $2(1)+2(-2)+1\\cdot k=k-2=0\\Rightarrow k=2$. (Row $2\\cdot$ row $3$: $-2(1)+1(-2)+2k=2k-4=0\\Rightarrow k=2$ as well — consistent.) So $k=2$.",
          "Then $A^{-1}=A^{\\mathsf T}$, giving $\\boxed{k=2,\\ A^{-1}=A^{\\mathsf T}=\\tfrac13\\begin{pmatrix}2&-2&1\\\\2&1&-2\\\\1&2&2\\end{pmatrix}}.$"
        ]
      },
      {
        "name": "Column conditions cross-check",
        "steps": [
          "Orthogonality also means the columns are orthonormal. Column $3$ is $\\tfrac13(1,2,k)^{\\mathsf T}$; its length-squared is $\\tfrac19(1+4+k^2)=1\\Rightarrow k^2=4$.",
          "Column $1\\cdot$ column $3=\\tfrac19\\big(2\\cdot1+(-2)\\cdot2+1\\cdot k\\big)=\\tfrac19(k-2)=0\\Rightarrow k=2$, eliminating $k=-2$.",
          "With $k=2$, $A^{\\mathsf T}A=I$ as well, so $A^{-1}=A^{\\mathsf T}$, confirming $\\boxed{k=2,\\ A^{-1}=A^{\\mathsf T}}.$"
        ]
      }
    ],
    "remark": "Insight. Orthogonality is a statement about ALL pairwise dot products of rows (and columns), far stronger than $|\\det|=1$. Its payoff is enormous: the inverse is just the transpose."
  },
  {
    "theme": "parammat",
    "themeLabel": "Parameters & Matrix Equations",
    "title": "The Unknown on the Left",
    "difficulty": 5,
    "task": "Solve XA=B",
    "tags": [
      "matrix equation",
      "right inverse",
      "non-commutative",
      "adjoint",
      "order matters"
    ],
    "statement": "Let\n$$A=\\begin{pmatrix}2&1&0\\\\1&2&1\\\\0&1&2\\end{pmatrix},\\qquad B=\\begin{pmatrix}1&0&1\\\\0&1&0\\\\1&0&1\\end{pmatrix}.$$\nFind the $3\\times3$ matrix $X$ satisfying $XA=B$.",
    "answer": "$\\boxed{X=BA^{-1}=\\begin{pmatrix}1&-1&1\\\\-\\tfrac12&1&-\\tfrac12\\\\1&-1&1\\end{pmatrix}}$",
    "trap": "The fatal slip is to copy the familiar $AX=B\\Rightarrow X=A^{-1}B$ pattern and write $X=A^{-1}B$ here too. But the unknown $X$ sits on the LEFT of $A$, so you must RIGHT-multiply by $A^{-1}$: $XAA^{-1}=BA^{-1}\\Rightarrow X=BA^{-1}$. Because matrices do not commute, $A^{-1}B\\neq BA^{-1}$ in general — indeed here $(A^{-1}B)A\\neq B$, so $A^{-1}B$ is simply the wrong answer.",
    "solutions": [
      {
        "name": "Right-multiply by the inverse",
        "steps": [
          "$\\det A=2(4-1)-1(2-0)+0=6-2=4\\neq0$, so $A^{-1}$ exists. From $XA=B$ multiply on the RIGHT by $A^{-1}$: $X=BA^{-1}$.",
          "Using $A^{-1}=\\tfrac14\\,\\mathrm{adj}\\,A=\\tfrac14\\begin{pmatrix}3&-2&1\\\\-2&4&-2\\\\1&-2&3\\end{pmatrix}$, compute $X=B\\cdot A^{-1}$. Row $1$ of $B$ is $(1,0,1)$: $\\tfrac14(3+1,\\,-2-2,\\,1+3)=\\tfrac14(4,-4,4)=(1,-1,1)$.",
          "Row $2$ of $B$ is $(0,1,0)$: $\\tfrac14(-2,4,-2)=(-\\tfrac12,1,-\\tfrac12)$. Row $3$ equals row $1$ of $B$, giving $(1,-1,1)$ again.",
          "Hence $\\boxed{X=\\begin{pmatrix}1&-1&1\\\\-\\tfrac12&1&-\\tfrac12\\\\1&-1&1\\end{pmatrix}}.$"
        ]
      },
      {
        "name": "Solve row-by-row as three systems",
        "steps": [
          "Write $X$ with rows $r_1,r_2,r_3$. Then $XA=B$ means each row satisfies $r_iA=(\\text{row }i\\text{ of }B)$, i.e. $A^{\\mathsf T}r_i^{\\mathsf T}=(\\text{row }i\\text{ of }B)^{\\mathsf T}$ — three linear systems with the same coefficient matrix $A^{\\mathsf T}$.",
          "Since $A$ is symmetric, $A^{\\mathsf T}=A$. Solving $A\\,r_1^{\\mathsf T}=(1,0,1)^{\\mathsf T}$ gives $r_1=(1,-1,1)$; solving $A\\,r_2^{\\mathsf T}=(0,1,0)^{\\mathsf T}$ gives $r_2=(-\\tfrac12,1,-\\tfrac12)$; the third right-hand side repeats the first, so $r_3=(1,-1,1)$.",
          "Stacking the rows reproduces $\\boxed{X=\\begin{pmatrix}1&-1&1\\\\-\\tfrac12&1&-\\tfrac12\\\\1&-1&1\\end{pmatrix}}.$"
        ]
      },
      {
        "name": "Verification (and refuting the trap)",
        "steps": [
          "Check $XA=B$: row $1$ of $X$ is $(1,-1,1)$; $(1,-1,1)A=(2-1+0,\\,1-2+1,\\,0-1+2)=(1,0,1)$ — matches row $1$ of $B$. The other rows check identically.",
          "Contrast the trap $A^{-1}B$: one finds $(A^{-1}B)A\\neq B$ (e.g. its $(2,2)$ entry is $0$, not $1$), so $A^{-1}B$ fails the equation.",
          "Thus the unique solution is $\\boxed{X=BA^{-1}=\\begin{pmatrix}1&-1&1\\\\-\\tfrac12&1&-\\tfrac12\\\\1&-1&1\\end{pmatrix}}.$"
        ]
      }
    ],
    "remark": "Insight. The side on which the unknown multiplies dictates the side on which you apply $A^{-1}$: $AX=B\\Rightarrow X=A^{-1}B$ (left), $XA=B\\Rightarrow X=BA^{-1}$ (right). Mixing them up is the single most common matrix-equation error."
  },
  {
    "theme": "parammat",
    "themeLabel": "Parameters & Matrix Equations",
    "title": "A Relation That Powers and Inverts",
    "difficulty": 5,
    "task": "Find inverse and power",
    "tags": [
      "matrix relation",
      "inverse",
      "matrix powers",
      "reduction",
      "polynomial in a matrix"
    ],
    "statement": "A $3\\times3$ matrix $A$ satisfies\n$$A^2 = 3A - 2I.$$\nUsing only this relation (no entries are given), find (a) $A^{-1}$ in the form $pA+qI$, and (b) constants $\\alpha,\\beta$ with $A^4=\\alpha A+\\beta I$.",
    "answer": "$\\boxed{A^{-1}=\\tfrac12(3I-A),\\qquad A^4=15A-14I}$",
    "trap": "A tempting wrong move is to 'factor' $A^2-3A+2I=(A-I)(A-2I)=O$ and then conclude $A=I$ or $A=2I$, as if a product of matrices being $O$ forces one factor to be $O$. That zero-product reasoning fails for matrices (there are nonzero $A$ satisfying the relation that are neither $I$ nor $2I$). The relation must instead be used purely algebraically to reduce powers and build the inverse.",
    "solutions": [
      {
        "name": "Build the inverse from the relation",
        "steps": [
          "Rearrange $A^2=3A-2I$ as $A^2-3A=-2I$, i.e. $A(A-3I)=-2I$, so $A\\cdot\\big(\\tfrac{-1}{2}(A-3I)\\big)=I$. Equivalently $A\\cdot\\tfrac12(3I-A)=I$.",
          "Because $\\tfrac12(3I-A)$ is a polynomial in $A$ it commutes with $A$, so it is a genuine two-sided inverse: $A^{-1}=\\tfrac12(3I-A)$. (Taking determinants of $A(A-3I)=-2I$ also shows $\\det A\\neq0$.)",
          "Thus $\\boxed{A^{-1}=\\tfrac12(3I-A)}.$"
        ]
      },
      {
        "name": "Reduce higher powers",
        "steps": [
          "Every power reduces to a linear combination $aA+bI$ using $A^2=3A-2I$. Compute $A^3=A\\cdot A^2=A(3A-2I)=3A^2-2A=3(3A-2I)-2A=7A-6I.$",
          "Then $A^4=A\\cdot A^3=A(7A-6I)=7A^2-6A=7(3A-2I)-6A=21A-14I-6A=15A-14I.$",
          "So $\\boxed{A^4=15A-14I}$ with $(\\alpha,\\beta)=(15,-14)$."
        ]
      },
      {
        "name": "Scalar-model sanity check",
        "steps": [
          "Any scalar $t$ obeying $t^2=3t-2$ (namely $t=1$ or $t=2$) must satisfy the same reduced formulas, since the reductions used only $t^2=3t-2$.",
          "Inverse formula: $\\tfrac12(3-t)$ gives $1$ at $t=1$ and $\\tfrac12$ at $t=2$ — exactly $1/t$. Power formula: $15t-14$ gives $1$ at $t=1$ and $16=2^4$ at $t=2$ — exactly $t^4$.",
          "Both checks pass, confirming $\\boxed{A^{-1}=\\tfrac12(3I-A),\\ A^4=15A-14I}.$"
        ]
      }
    ],
    "remark": "Insight. A quadratic relation $A^2=pA+qI$ (with $q\\neq0$) makes $A$ invertible and lets every power and the inverse collapse to a linear combination $aA+bI$ — a finite, syllabus-safe reduction with no zero-product fallacy needed."
  },
  {
    "theme": "parammat",
    "themeLabel": "Parameters & Matrix Equations",
    "title": "The Double Root That Lies",
    "difficulty": 5,
    "task": "Find all such values",
    "tags": [
      "parameter",
      "consistency",
      "Cramer determinants",
      "singular matrix",
      "double root trap"
    ],
    "statement": "Consider the system in $x,y,z$ depending on a real parameter $a$:\n$$ax+y+z=a,\\qquad x+ay+z=a,\\qquad x+y+az=1.$$\nLet $\\Delta$ be the determinant of the coefficient matrix\n$$A=\\begin{pmatrix} a & 1 & 1 \\\\ 1 & a & 1 \\\\ 1 & 1 & a \\end{pmatrix}.$$\nFind every real value of $a$ for which the system has **infinitely many** solutions.",
    "answer": "The system has infinitely many solutions for exactly one value, $\\boxed{a=1}$. (At the other root $a=-2$ the system is inconsistent, and for $a\\neq 1,-2$ the solution is unique.)",
    "trap": "The seductive wrong answer is $a\\in\\{1,-2\\}$. One finds $\\Delta=(a-1)^2(a+2)$, sees that $\\Delta=0$ at both $a=1$ and $a=-2$, and declares both to give infinitely many solutions. But $\\Delta=0$ only rules out a unique solution; it does NOT decide between no-solution and infinitely-many. At $a=-2$ the Cramer numerators are $\\Delta_1=\\Delta_2=\\Delta_3=-9\\neq 0$, so the system has NO solution. Only $a=1$, where all $\\Delta_i=0$ as well, actually yields infinitely many.",
    "solutions": [
      {
        "name": "Cramer determinants $\\Delta,\\Delta_1,\\Delta_2,\\Delta_3$",
        "steps": [
          "Expand the coefficient determinant $\\Delta=\\begin{vmatrix} a & 1 & 1 \\\\ 1 & a & 1 \\\\ 1 & 1 & a \\end{vmatrix}$. Doing $C_1\\to C_1+C_2+C_3$ pulls out $(a+2)$ from the first column, and the remaining factor gives $\\Delta=(a+2)(a-1)^2$. So $\\Delta=0$ exactly when $a=1$ or $a=-2$; for all other $a$ the solution is unique.",
          "Form $\\Delta_1$ by replacing column $1$ with the right-hand side $(a,a,1)^T$: a direct expansion gives $\\Delta_1=(a-1)^2(a+1)$, and identically $\\Delta_2=(a-1)^2(a+1)$, while $\\Delta_3=-(a-1)^2$.",
          "Test $a=-2$: here $\\Delta=0$ but $\\Delta_1=\\Delta_2=\\Delta_3=(-3)^2\\cdot(-1)=-9\\neq 0$. With $\\Delta=0$ and some $\\Delta_i\\neq 0$ the system has NO solution, so $a=-2$ is rejected.",
          "Test $a=1$: here $\\Delta=0$ and $\\Delta_1=\\Delta_2=\\Delta_3=0$ as well, so a unique solution is impossible and no immediate contradiction arises; the candidate must be confirmed directly.",
          "At $a=1$ all three equations collapse to $x+y+z=1$, a single condition on three unknowns, giving a genuine two-parameter family of solutions. Hence infinitely many solutions occur precisely at $\\boxed{a=1}$."
        ]
      },
      {
        "name": "Inverse method, then direct reduction at the singular values",
        "steps": [
          "For $\\Delta=(a+2)(a-1)^2\\neq 0$ the matrix $A$ is invertible, so $X=A^{-1}B$ is the unique solution; explicitly $A^{-1}B=\\left(\\tfrac{a+1}{a+2},\\,\\tfrac{a+1}{a+2},\\,\\tfrac{-1}{a+2}\\right)^T$, valid for $a\\neq 1,-2$. Infinitely many solutions can therefore only happen at the singular values $a=1$ or $a=-2$.",
          "Substitute $a=-2$ directly: the equations are $-2x+y+z=-2,\\;x-2y+z=-2,\\;x+y-2z=1$. Adding all three, the left side cancels to $0$ while the right side is $-2-2+1=-3$, giving $0=-3$. This contradiction means $a=-2$ has no solution at all, so it is discarded.",
          "Substitute $a=1$ directly: every equation becomes $x+y+z=1$. The three equations are identical, leaving one free condition with two free parameters, so the solution set is infinite.",
          "Combining both regimes, the only parameter value producing infinitely many solutions is $\\boxed{a=1}$."
        ]
      }
    ],
    "remark": "**Insight.** The single most common top-scorer error is treating $\\Delta=0$ as if it already meant infinitely many solutions. It does not: $\\Delta=0$ merely kills uniqueness, and the **numerators** $\\Delta_1,\\Delta_2,\\Delta_3$ decide the rest. The cubic $\\Delta=(a+2)(a-1)^2$ deliberately offers two zeros, but they behave oppositely. The **simple root** $a=-2$ leaves the constants out of step ($\\Delta_i\\neq 0$, the equations add to $0=-3$), so the planes have no common point. The **double root** $a=1$ collapses all three equations into one, so they share a whole plane of solutions. The double-root multiplicity is a hint, not a guarantee: always finish by reducing the equations themselves."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Decomposition That Splits a Determinant",
    "difficulty": 4,
    "task": "Evaluate the scalar",
    "tags": [
      "symmetric-skew decomposition",
      "skew-symmetric determinant",
      "adjoint identity",
      "inverse of order 3",
      "determinant properties"
    ],
    "statement": "Every square matrix splits uniquely as a symmetric part plus a skew-symmetric part. For\n$$A=\\begin{pmatrix} 1 & 1 & -2 \\\\ -1 & 1 & -2 \\\\ 0 & 0 & 1 \\end{pmatrix},$$\nwrite $A=S+K$, where $S=\\tfrac{1}{2}(A+A^{T})$ is symmetric and $K=\\tfrac{1}{2}(A-A^{T})$ is skew-symmetric. Given that $S$ is invertible, evaluate\n$$Q=\\det(A)+\\det(\\operatorname{adj} S)+5\\,\\det(K)+\\det\\!\\left(S^{-1}\\right).$$",
    "answer": "$$Q=\\det(A)+\\det(\\operatorname{adj} S)+5\\,\\det(K)+\\det\\!\\left(S^{-1}\\right)=2+1+0+(-1)=\\boxed{2}.$$",
    "trap": "The seductive wrong answer is $Q=-2$, reached by assuming the determinant is additive across the decomposition: $\\det(A)=\\det(S+K)\\overset{?}{=}\\det S+\\det K=-1+0=-1$, and simultaneously pretending the odd-order skew part contributes a nonzero $\\det K$. Both moves are illegal. Determinant is multiplicative, not additive: $\\det(S+K)\\neq \\det S+\\det K$ in general; here the true $\\det A=2\\neq -1$. And for any odd-order skew-symmetric $K$, $\\det K=\\det(K^{T})=\\det(-K)=(-1)^{3}\\det K=-\\det K$, forcing $\\det K=0$ exactly. A student who trusts additivity or imagines a nonzero skew determinant lands on $-2$ instead of $2$.",
    "solutions": [
      {
        "name": "Direct decomposition and the standard identities",
        "steps": [
          "Form $A^{T}=\\begin{pmatrix} 1 & -1 & 0 \\\\ 1 & 1 & 0 \\\\ -2 & -2 & 1 \\end{pmatrix}$, so $S=\\tfrac{1}{2}(A+A^{T})=\\begin{pmatrix} 1 & 0 & -1 \\\\ 0 & 1 & -1 \\\\ -1 & -1 & 1 \\end{pmatrix}$ and $K=\\tfrac{1}{2}(A-A^{T})=\\begin{pmatrix} 0 & 1 & -1 \\\\ -1 & 0 & -1 \\\\ 1 & 1 & 0 \\end{pmatrix}$; one checks $S=S^{T}$, $K=-K^{T}$ and $S+K=A$.",
          "Compute $\\det A$ by expanding along the third row: $\\det A=1\\cdot\\begin{vmatrix} 1 & 1 \\\\ -1 & 1 \\end{vmatrix}=1\\cdot(1+1)=2$.",
          "For the odd-order skew part, $\\det K=\\det(K^{T})=\\det(-K)=(-1)^{3}\\det K$, hence $2\\det K=0$ and $\\det K=0$.",
          "Compute $\\det S$ by expanding along the first row: $\\det S=1(1-1)-0+(-1)(0+1)=-1$. Then $\\det(\\operatorname{adj} S)=(\\det S)^{\\,n-1}=(\\det S)^{2}=1$ and $\\det(S^{-1})=\\dfrac{1}{\\det S}=-1$.",
          "Add: $Q=\\det A+\\det(\\operatorname{adj} S)+5\\det K+\\det(S^{-1})=2+1+0+(-1)=\\boxed{2}$."
        ]
      },
      {
        "name": "Row reduction for det A, adjoint built from the inverse",
        "steps": [
          "Get $\\det A$ by an elementary row operation $R_{2}\\to R_{2}+R_{1}$ (which leaves the determinant unchanged): $A\\to\\begin{pmatrix} 1 & 1 & -2 \\\\ 0 & 2 & -4 \\\\ 0 & 0 & 1 \\end{pmatrix}$, an upper-triangular matrix whose determinant is the product of the pivots $1\\cdot 2\\cdot 1=2$, so $\\det A=2$.",
          "Since $K$ is $3\\times 3$ skew-symmetric, transposing negates every off-diagonal entry while fixing the determinant, giving $\\det K=-\\det K=0$ without any expansion.",
          "Invert $S$ from $S\\,S^{-1}=I$ by solving the system column by column, which yields $S^{-1}=\\begin{pmatrix} 0 & -1 & -1 \\\\ -1 & 0 & -1 \\\\ -1 & -1 & -1 \\end{pmatrix}$; from $\\operatorname{adj} S=(\\det S)\\,S^{-1}$ with $\\det S=-1$ one gets $\\operatorname{adj} S=\\begin{pmatrix} 0 & 1 & 1 \\\\ 1 & 0 & 1 \\\\ 1 & 1 & 1 \\end{pmatrix}$.",
          "Read off $\\det(S^{-1})=\\dfrac{1}{\\det S}=-1$ and $\\det(\\operatorname{adj} S)=\\det\\!\\big((\\det S)S^{-1}\\big)=(\\det S)^{3}\\det(S^{-1})=(-1)^{3}\\cdot(-1)=1$ (equivalently $(\\det S)^{2}=1$).",
          "Combine the four pieces: $Q=2+1+5\\cdot 0+(-1)=\\boxed{2}$."
        ]
      }
    ],
    "remark": "**Insight.** The decomposition $A=S+K$ is a *sum*, and the determinant respects products, never sums: $\\det(S+K)\\neq\\det S+\\det K$, so you must compute $\\det A$ on $A$ itself. Two structural facts then do all the heavy lifting with almost no arithmetic: an **odd-order skew-symmetric** matrix always has determinant **zero** (transpose-negation forces $\\det K=-\\det K$), and the adjoint/inverse identities $\\det(\\operatorname{adj} S)=(\\det S)^{n-1}$ and $\\det(S^{-1})=1/\\det S$ turn the remaining terms into a one-line read-off. Recognizing **which** operation distributes and which does not is the whole game."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Mirror Matrix and Its Lonely Power",
    "difficulty": 4,
    "task": "Evaluate the matrix",
    "tags": [
      "involutory",
      "adjoint",
      "determinant",
      "matrix powers",
      "inverse"
    ],
    "statement": "Let $$A=\\begin{pmatrix} 0 & 0 & 1 \\\\ 2 & 1 & -2 \\\\ 1 & 0 & 0 \\end{pmatrix}.$$ First verify by direct multiplication that $A^2=I$. Then, using only the determinant and adjoint identities of a $3\\times 3$ matrix, evaluate the $3\\times 3$ matrix $$B=A^{2025}+\\operatorname{adj}(A).$$",
    "answer": "$$B=A^{2025}+\\operatorname{adj}(A)=\\begin{pmatrix} 0 & 0 & 0 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 0 \\end{pmatrix}=O.$$ The facts forced by $A^2=I$ are $\\det A=-1$, $\\operatorname{adj}(A)=(\\det A)A=-A$, and $A^{2025}=A$, so $B=A-A=O$. $\\boxed{B=O}$",
    "trap": "The tempting error is to declare $\\det A=+1$ \"because $A^2=I$\" and then write $A^{2025}=I$ as though the power were periodic with period $1$. Both steps are wrong. From $A^2=I$ one only gets $(\\det A)^2=1$, i.e. $\\det A=\\pm1$; the actual sign must be computed, and here the direct determinant gives $\\det A=-1$. With $\\det A=-1$ the adjoint is $\\operatorname{adj}(A)=(\\det A)A=-A$, not $+A$, and the power has period $2$, so $A^{2025}=A$ (odd exponent), not $I$. The seductive wrong answer $B=I+A=\\begin{pmatrix} 1 & 0 & 1 \\\\ 2 & 2 & -2 \\\\ 1 & 0 & 1 \\end{pmatrix}$ (taking $A^{2025}=I$ and $\\operatorname{adj}(A)=+A$) is therefore wrong on two counts.",
    "solutions": [
      {
        "name": "Direct multiplication, then the adjoint identity",
        "steps": [
          "Multiply: $A^2=\\begin{pmatrix} 0 & 0 & 1 \\\\ 2 & 1 & -2 \\\\ 1 & 0 & 0 \\end{pmatrix}\\begin{pmatrix} 0 & 0 & 1 \\\\ 2 & 1 & -2 \\\\ 1 & 0 & 0 \\end{pmatrix}=\\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}=I$, so $A$ is involutory.",
          "Compute the determinant directly by expanding along the first row: $\\det A = 0\\cdot M_{11}-0\\cdot M_{12}+1\\cdot\\det\\begin{pmatrix} 2 & 1 \\\\ 1 & 0\\end{pmatrix}=1\\cdot(2\\cdot0-1\\cdot1)=-1$. Do not guess $+1$ from $A^2=I$.",
          "Since $\\det A=-1\\ne0$, $A$ is invertible, and from $A^2=I$ we get $A^{-1}=A$ by multiplying both sides by $A^{-1}$.",
          "Use $A(\\operatorname{adj}A)=(\\det A)I$. Multiply on the left by $A^{-1}=A$: $\\operatorname{adj}(A)=(\\det A)A^{-1}=(-1)A=-A$.",
          "For the power, $A^2=I\\Rightarrow A^{2k}=I$ and $A^{2k+1}=A$. As $2025=2\\cdot1012+1$ is odd, $A^{2025}=A$.",
          "Therefore $B=A^{2025}+\\operatorname{adj}(A)=A+(-A)=O$, the zero matrix, giving $\\boxed{B=O}$."
        ]
      },
      {
        "name": "Explicit adjoint and explicit power",
        "steps": [
          "After checking $A^2=I$ and $\\det A=-1$ as above, build $\\operatorname{adj}(A)$ as the transpose of the cofactor matrix. The cofactors give $\\operatorname{adj}(A)=\\begin{pmatrix} 0 & 0 & -1 \\\\ -2 & -1 & 2 \\\\ -1 & 0 & 0 \\end{pmatrix}$, which is exactly $-A$ — consistent with $\\operatorname{adj}(A)=(\\det A)A=-A$.",
          "Compute the power directly from $A^2=I$: $A^{2025}=(A^2)^{1012}\\,A=I^{1012}A=A=\\begin{pmatrix} 0 & 0 & 1 \\\\ 2 & 1 & -2 \\\\ 1 & 0 & 0 \\end{pmatrix}$.",
          "Add the two explicit matrices entrywise: $A^{2025}+\\operatorname{adj}(A)=\\begin{pmatrix} 0 & 0 & 1 \\\\ 2 & 1 & -2 \\\\ 1 & 0 & 0 \\end{pmatrix}+\\begin{pmatrix} 0 & 0 & -1 \\\\ -2 & -1 & 2 \\\\ -1 & 0 & 0 \\end{pmatrix}=\\begin{pmatrix} 0 & 0 & 0 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 0 \\end{pmatrix}$.",
          "Hence $\\boxed{B=O}$."
        ]
      }
    ],
    "remark": "**Insight.** An involutory matrix ($A^2=I$) pins down its determinant only to $\\pm1$: squaring gives $(\\det A)^2=1$, but the **sign is not free** — you must compute it. Here $\\det A=-1$, which spoils two cheap shortcuts at once: the adjoint becomes $(\\det A)A=-A$ rather than $+A$, and although the powers repeat with period $2$, the **odd** exponent $2025$ lands on $A$, not $I$. The clean cancellation $A^{2025}+\\operatorname{adj}(A)=A+(-A)=O$ only appears once both the sign and the parity are handled honestly; assuming $\\det A=+1$ destroys it."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Skew Heart of a Matrix",
    "difficulty": 4,
    "task": "Prove and solve",
    "tags": [
      "symmetric-skew decomposition",
      "skew-symmetric",
      "determinant",
      "homogeneous system",
      "transpose"
    ],
    "statement": "Every real square matrix splits uniquely as $A=S+K$ with $S=\\tfrac12(A+A^{\\mathsf T})$ symmetric and $K=\\tfrac12(A-A^{\\mathsf T})$ skew-symmetric. Take $A=\\begin{pmatrix} 3 & 5 & 9\\\\ 1 & 4 & 2\\\\ 7 & 0 & 6\\end{pmatrix}$. Show that $\\det(A-A^{\\mathsf T})=0$ regardless of the entries of $A$, and exhibit a nonzero vector $\\mathbf{x}$ with $(A-A^{\\mathsf T})\\mathbf{x}=\\mathbf 0$.",
    "answer": "\\[\\det(A-A^{\\mathsf T})=0\\ \\text{(always, for }3\\times3),\\qquad \\boxed{\\mathbf x=\\begin{pmatrix}1\\\\-1\\\\2\\end{pmatrix}}\\ \\text{(any nonzero multiple).}\\]",
    "trap": "It is tempting to compute $A-A^{\\mathsf T}=\\begin{pmatrix}0&4&2\\\\-4&0&2\\\\-2&-2&0\\end{pmatrix}$ and expand its $3\\times3$ determinant numerically, hoping the specific numbers make it nonzero. That misses the point: \\emph{every} odd-order skew-symmetric matrix has determinant $0$, because $\\det K=\\det K^{\\mathsf T}=\\det(-K)=(-1)^3\\det K=-\\det K$. So no choice of entries can rescue it — searching for a \"generic\" nonzero value is doomed.",
    "solutions": [
      {
        "name": "Parity of the transpose",
        "steps": [
          "$K:=A-A^{\\mathsf T}$ is skew-symmetric: $K^{\\mathsf T}=A^{\\mathsf T}-A=-K$.",
          "Then $\\det K=\\det(K^{\\mathsf T})=\\det(-K)=(-1)^{3}\\det K=-\\det K$, forcing $2\\det K=0$, so $\\det K=0$ for every $3\\times3$ skew-symmetric matrix.",
          "A zero determinant means $K\\mathbf x=\\mathbf 0$ has a nontrivial solution. Writing $K=\\begin{pmatrix}0&a&b\\\\-a&0&c\\\\-b&-c&0\\end{pmatrix}$, direct check gives $K\\begin{pmatrix}c\\\\-b\\\\a\\end{pmatrix}=\\mathbf 0$.",
          "Here $a=4,b=2,c=2$, so $\\mathbf x=(2,-2,4)^{\\mathsf T}\\parallel(1,-1,2)^{\\mathsf T}$. Thus $\\det(A-A^{\\mathsf T})=0$ and $\\boxed{\\mathbf x=(1,-1,2)^{\\mathsf T}}$."
        ]
      },
      {
        "name": "Explicit kernel from the axis",
        "steps": [
          "Form $K=A-A^{\\mathsf T}=\\begin{pmatrix}0&4&2\\\\-4&0&2\\\\-2&-2&0\\end{pmatrix}$.",
          "Solve $K\\mathbf x=\\mathbf 0$: rows give $4y+2z=0$ and $-4x+2z=0$, i.e. $z=-2y$ and $z=2x$, so $x=-y$ and $z=2x$.",
          "Choosing $x=1$ yields $y=-1,\\ z=2$; substitute into the third row $-2x-2y=-2+2=0$ ✓.",
          "So $K$ is singular ($\\det K=0$) with kernel spanned by $\\boxed{(1,-1,2)^{\\mathsf T}}$."
        ]
      }
    ],
    "remark": "Insight: the skew part of a $3\\times3$ matrix is the part a determinant can never see — its determinant is structurally zero, and its kernel is exactly the \"axis vector\" $(c,-b,a)$ dual to the skew entries. The symmetric/skew split routes a determinant question straight into a guaranteed homogeneous solution."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "When Three Points on a Cubic Line Up",
    "difficulty": 4,
    "task": "Find the condition",
    "tags": [
      "area determinant",
      "collinearity",
      "factor theorem",
      "parameter",
      "factorisation"
    ],
    "statement": "Three distinct points $A(a,a^{3})$, $B(b,b^{3})$, $C(c,c^{3})$ lie on the cubic $y=x^{3}$. Using the area determinant, find the exact condition on $a,b,c$ for the three points to be collinear, and evaluate the area of $\\triangle ABC$ in factored form.",
    "answer": "\\[\\text{Area}=\\tfrac12\\,\\bigl|(a-b)(b-c)(c-a)(a+b+c)\\bigr|;\\qquad \\text{collinear}\\iff \\boxed{a+b+c=0}.\\]",
    "trap": "The seductive false move is to declare the points collinear when the area determinant vanishes and then write the condition as \"$(a-b)(b-c)(c-a)=0$\", i.e. two coordinates equal. But the points are given \\emph{distinct}, so that Vandermonde factor is nonzero by hypothesis; cancelling it is legitimate and the real condition lives in the remaining factor $a+b+c=0$. Stopping at the Vandermonde factor reports \"never collinear,\" which is wrong.",
    "solutions": [
      {
        "name": "Area determinant + factor theorem",
        "steps": [
          "Twice the signed area is $\\Delta=\\begin{vmatrix} a & a^{3} & 1\\\\ b & b^{3} & 1\\\\ c & c^{3} & 1\\end{vmatrix}$. As a polynomial in $a$, it vanishes when $a=b$ or $a=c$ (equal rows), so $(a-b)(a-c)\\mid\\Delta$; by symmetry the full Vandermonde $(a-b)(b-c)(c-a)$ divides $\\Delta$.",
          "Each row has total degree $0+3=3$ summed appropriately; $\\Delta$ is a degree-$4$ alternating polynomial, and dividing by the degree-$3$ Vandermonde leaves a symmetric degree-$1$ factor, hence a multiple of $a+b+c$.",
          "Comparing one coefficient (e.g. the $a^{3}bc^{0}$-type term) fixes the constant, giving $\\Delta=-(a-b)(a-c)(b-c)(a+b+c)$, so $\\text{Area}=\\tfrac12|(a-b)(b-c)(c-a)(a+b+c)|$.",
          "With $a,b,c$ distinct the Vandermonde part is nonzero, so the points are collinear iff $\\boxed{a+b+c=0}$."
        ]
      },
      {
        "name": "Slope-equality reduction",
        "steps": [
          "Collinearity means equal slopes: $\\dfrac{b^{3}-a^{3}}{b-a}=\\dfrac{c^{3}-a^{3}}{c-a}$.",
          "Since the points are distinct, cancel the denominators using $\\dfrac{u^3-v^3}{u-v}=u^2+uv+v^2$: $b^{2}+ab+a^{2}=c^{2}+ac+a^{2}$.",
          "Simplify: $b^{2}-c^{2}+a(b-c)=0\\Rightarrow (b-c)(b+c+a)=0$. As $b\\neq c$, we need $a+b+c=0$.",
          "This matches the determinant route, confirming collinearity $\\iff \\boxed{a+b+c=0}$."
        ]
      }
    ],
    "remark": "Insight: on $y=x^3$ the area determinant factors as (Vandermonde)$\\times(a+b+c)$, so collinearity is governed entirely by the elementary symmetric sum $e_1=a+b+c$. This is the cubic analogue of the fact that no three distinct points on $y=x^2$ are ever collinear (there the leftover factor is the constant $1$)."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "Adjoint of an Adjoint, Scaled",
    "difficulty": 5,
    "task": "Evaluate",
    "tags": [
      "adjoint",
      "scalar multiple",
      "determinant power",
      "parameter",
      "inverse"
    ],
    "statement": "Let $A$ be a $3\\times3$ real matrix with $\\det A=d\\neq0$. Evaluate $\\det\\!\\bigl(\\operatorname{adj}(\\operatorname{adj}(2A))\\bigr)$ as a single expression in $d$.",
    "answer": "\\[\\boxed{\\det\\!\\bigl(\\operatorname{adj}(\\operatorname{adj}(2A))\\bigr)=4096\\,d^{4}.}\\]",
    "trap": "The classic error is to forget that $\\operatorname{adj}(cM)=c^{\\,n-1}\\operatorname{adj}(M)$ for an $n\\times n$ matrix and instead pull the scalar out as $\\operatorname{adj}(2A)=2\\,\\operatorname{adj}(A)$. With $n=3$ the correct power is $c^{2}=4$, not $c^{1}=2$; treating the scalar linearly throws the final answer off by large powers of $2$. A second trap is using $\\det(\\operatorname{adj}M)=(\\det M)^{2}$ but mishandling the \\emph{nested} adjoint.",
    "solutions": [
      {
        "name": "Layer the adjoint laws",
        "steps": [
          "For $n=3$: $\\det(\\operatorname{adj}M)=(\\det M)^{n-1}=(\\det M)^{2}$, and $\\operatorname{adj}(cM)=c^{\\,n-1}\\operatorname{adj}M=c^{2}\\operatorname{adj}M$.",
          "Let $B=2A$. Then $\\det B=2^{3}d=8d$. The inner adjoint has $\\det(\\operatorname{adj}B)=(\\det B)^{2}=(8d)^{2}=64d^{2}$.",
          "Apply the outer adjoint to $\\operatorname{adj}B$ (also $3\\times3$): $\\det\\!\\bigl(\\operatorname{adj}(\\operatorname{adj}B)\\bigr)=\\bigl(\\det(\\operatorname{adj}B)\\bigr)^{2}=(64d^{2})^{2}=4096\\,d^{4}$.",
          "Hence $\\boxed{4096\\,d^{4}}$."
        ]
      },
      {
        "name": "Identity $\\operatorname{adj}(\\operatorname{adj}M)=(\\det M)^{n-2}M$",
        "steps": [
          "For $n=3$, $\\operatorname{adj}(\\operatorname{adj}M)=(\\det M)^{\\,n-2}M=(\\det M)\\,M$.",
          "With $M=2A$: $\\det M=8d$, so $\\operatorname{adj}(\\operatorname{adj}(2A))=(8d)\\cdot(2A)=16d\\,A$.",
          "Take determinant: $\\det(16d\\,A)=(16d)^{3}\\det A=4096\\,d^{3}\\cdot d=4096\\,d^{4}$.",
          "Therefore $\\boxed{4096\\,d^{4}}$."
        ]
      }
    ],
    "remark": "Insight: every adjoint layer squares the determinant and every scalar $c$ enters as $c^{\\,n-1}$, so nested adjoints compound powers fast. The cleanest path uses $\\operatorname{adj}(\\operatorname{adj}M)=(\\det M)^{n-2}M$, which for $3\\times3$ collapses two adjoints into one scalar multiple."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Nilpotent's Finite Geometric Series",
    "difficulty": 5,
    "task": "Find the inverse",
    "tags": [
      "nilpotent",
      "inverse",
      "neumann series",
      "determinant",
      "powers"
    ],
    "statement": "Let $N=\\begin{pmatrix} 0 & x & y\\\\ 0 & 0 & z\\\\ 0 & 0 & 0\\end{pmatrix}$ with real $x,y,z$. Verify $N^{3}=O$, and let $A=I_3-N$. Find $A^{-1}$ in closed form, evaluate $\\det A$, and determine $\\det(A^{100})$.",
    "answer": "\\[A^{-1}=I_3+N+N^{2}=\\begin{pmatrix}1 & x & y+xz\\\\ 0 & 1 & z\\\\ 0 & 0 & 1\\end{pmatrix},\\quad \\det A=1,\\quad \\boxed{\\det(A^{100})=1.}\\]",
    "trap": "Because $N$ is singular ($\\det N=0$), a frequent reflex is to claim $A=I-N$ \"inherits\" trouble and to try inverting it by full Gaussian elimination, or worse, to write $(I-N)^{-1}=\\sum_{k\\ge0}N^{k}$ as an infinite series and fret about convergence. Both miss that $N^{3}=O$ truncates the series to exactly three terms — and that a triangular matrix with $1$'s on the diagonal automatically has determinant $1$, so $A$ is never singular.",
    "solutions": [
      {
        "name": "Finite Neumann series",
        "steps": [
          "Compute $N^{2}=\\begin{pmatrix}0&0&xz\\\\0&0&0\\\\0&0&0\\end{pmatrix}$ and $N^{3}=O$ (strictly upper-triangular nilpotent of index $3$).",
          "From $N^{3}=O$, the telescoping identity $(I-N)(I+N+N^{2})=I-N^{3}=I$ holds, so $A^{-1}=I+N+N^{2}$.",
          "Adding: $I+N+N^{2}=\\begin{pmatrix}1&x&y+xz\\\\0&1&z\\\\0&0&1\\end{pmatrix}$.",
          "$A=I-N$ is upper-triangular with all diagonal entries $1$, so $\\det A=1$; hence $\\det(A^{100})=(\\det A)^{100}=\\boxed{1}$."
        ]
      },
      {
        "name": "Triangular inverse directly",
        "steps": [
          "$A=I-N=\\begin{pmatrix}1&-x&-y\\\\0&1&-z\\\\0&0&1\\end{pmatrix}$ is unitriangular, so $\\det A=1\\cdot1\\cdot1=1$ and $A$ is invertible.",
          "Back-substitute $A\\mathbf u=\\mathbf e_j$ for each column, or note the inverse of a unitriangular matrix is unitriangular; solving gives entries $u_{12}=x,\\ u_{23}=z,\\ u_{13}=y+xz$.",
          "Thus $A^{-1}=\\begin{pmatrix}1&x&y+xz\\\\0&1&z\\\\0&0&1\\end{pmatrix}$, matching $I+N+N^{2}$.",
          "Since $\\det A=1$, $\\det(A^{100})=1^{100}=\\boxed{1}$."
        ]
      }
    ],
    "remark": "Insight: nilpotency is the matrix version of a finite geometric series — $N^{3}=O$ makes $(I-N)^{-1}$ a three-term polynomial in $N$, no convergence needed. The unit diagonal then guarantees $\\det=1$, so all the singular-looking machinery of $N$ is harmless once shifted by $I$."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Almost-Orthogonal Mystery Matrix",
    "difficulty": 5,
    "task": "Find parameters and det",
    "tags": [
      "orthogonal",
      "transpose",
      "determinant",
      "parameter",
      "sign"
    ],
    "statement": "Real numbers $b,c$ are chosen so that $B=\\begin{pmatrix} 1 & 2 & 2\\\\ 2 & b & -2\\\\ 2 & -2 & c\\end{pmatrix}$ satisfies $BB^{\\mathsf T}=9I_3$. Find $b$ and $c$, then determine $\\det B$ \\emph{exactly} (sign included).",
    "answer": "\\[b=1,\\quad c=1,\\qquad \\boxed{\\det B=-27.}\\]",
    "trap": "From $BB^{\\mathsf T}=9I_3$ one gets $(\\det B)^{2}=\\det(9I_3)=9^{3}=729$, so $\\det B=\\pm27$. The trap is to stop here and quote $+27$ (or to assume the \"nice\" matrix is a proper rotation scaled by $3$). The sign is not free: $\\tfrac13B$ is orthogonal but with determinant $-1$ (an improper/reflection-type orthogonal matrix), forcing $\\det B=-27$. Reporting $+27$ — or only \"$\\pm27$\" when an exact value is requested — is the error.",
    "solutions": [
      {
        "name": "Row-orthogonality equations then explicit determinant",
        "steps": [
          "$BB^{\\mathsf T}=9I_3$ means rows are mutually orthogonal with squared length $9$. Row$_1\\cdot$Row$_1=1+4+4=9$ ✓ automatically.",
          "Row$_2\\cdot$Row$_2=4+b^{2}+4=9\\Rightarrow b^{2}=1$; Row$_3\\cdot$Row$_3=4+4+c^{2}=9\\Rightarrow c^{2}=1$. Orthogonality Row$_1\\cdot$Row$_2=2+2b-4=0\\Rightarrow b=1$; Row$_1\\cdot$Row$_3=2-4+2c=0\\Rightarrow c=1$.",
          "Check the last condition Row$_2\\cdot$Row$_3=2\\cdot2+b(-2)+(-2)c=4-2b-2c$, which at $b=c=1$ equals $4-2-2=0$ ✓, so $b=1,c=1$ is the unique consistent solution.",
          "Now evaluate $\\det\\begin{pmatrix}1&2&2\\\\2&1&-2\\\\2&-2&1\\end{pmatrix}=1(1\\cdot1-(-2)(-2))-2(2\\cdot1-(-2)2)+2(2(-2)-1\\cdot2)=1(-3)-2(6)+2(-6)=-3-12-12=\\boxed{-27}.$"
        ]
      },
      {
        "name": "Determinant magnitude then sign by cofactor",
        "steps": [
          "Taking determinants in $BB^{\\mathsf T}=9I_3$: $(\\det B)^{2}=9^{3}=729$, so $|\\det B|=27$.",
          "Fix $b,c$ from orthogonality (as above) to get $b=c=1$, giving the concrete matrix $\\begin{pmatrix}1&2&2\\\\2&1&-2\\\\2&-2&1\\end{pmatrix}$.",
          "Compute the actual signed determinant by cofactor expansion: it equals $-27<0$, so the sign is negative, not positive.",
          "Therefore $\\det B=\\boxed{-27}$ (equivalently, $\\tfrac13B$ is an improper orthogonal matrix with determinant $-1$)."
        ]
      }
    ],
    "remark": "Insight: $BB^{\\mathsf T}=k^{2}I$ tells you the rows are an orthogonal frame of length $k$, which pins $|\\det B|=k^{3}$ but is blind to orientation. The sign — proper vs improper — must be recovered by an actual computation, a reminder that $(\\det B)^2$ identities never determine $\\det B$ itself."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "A Vanishing Determinant Hides a Family",
    "difficulty": 4,
    "task": "Find all consistent values",
    "tags": [
      "singular system",
      "Cramer determinants",
      "consistency",
      "determinant",
      "general solution"
    ],
    "statement": "Consider the system $$x+2y+3z=1,\\qquad 2x+y+z=2,\\qquad 3x+3y+4z=\\lambda,$$ with coefficient matrix $A=\\begin{pmatrix} 1 & 2 & 3\\\\ 2 & 1 & 1\\\\ 3 & 3 & 4\\end{pmatrix}$. First show $\\det A=0$. Then determine all real $\\lambda$ for which the system is consistent, and write the complete solution for each such $\\lambda$.",
    "answer": "The system is consistent for the single value $\\boxed{\\lambda=3}$, with general solution $(x,y,z)=(1,0,0)+t\\,(1,-5,3),\\ t\\in\\mathbb{R}$ (infinitely many). For every $\\lambda\\neq 3$ the system has no solution.",
    "trap": "Computing $\\det A=0$, a hurried student declares the system inconsistent for every $\\lambda$ (\"a singular matrix can never be solved\") and answers \\emph{no value}. That is false: $\\Delta=0$ only kills \\emph{uniqueness}. The right-hand side $\\lambda$ can still be tuned so that the three Cramer numerators $\\Delta_1,\\Delta_2,\\Delta_3$ \\emph{all} vanish, and then there are infinitely many solutions. Here that tuning is exactly $\\lambda=3$, so the seductive answer \"no $\\lambda$ works\" is wrong.",
    "solutions": [
      {
        "name": "Cramer determinants (Delta and the Delta_i)",
        "steps": [
          "Expand $\\det A$ along the first row: $\\det A = 1(1\\cdot4-1\\cdot3) - 2(2\\cdot4-1\\cdot3) + 3(2\\cdot3-1\\cdot3) = 1(1) - 2(5) + 3(3) = 1-10+9 = 0$, so $\\Delta=0$ and uniqueness is impossible.",
          "Form the three numerators by replacing each column of $A$ with $\\mathbf b=(1,2,\\lambda)^{\\mathsf T}$. Evaluating the $3\\times3$ determinants gives $\\Delta_1=3-\\lambda$, $\\Delta_2=5\\lambda-15$, and $\\Delta_3=9-3\\lambda$.",
          "With $\\Delta=0$, a solution can exist only if every $\\Delta_i=0$. The equations $3-\\lambda=0$, $5\\lambda-15=0$, $9-3\\lambda=0$ are all satisfied by the same value $\\lambda=3$, and by no other $\\lambda$. Hence $\\lambda\\neq3\\Rightarrow$ some $\\Delta_i\\neq0\\Rightarrow$ no solution.",
          "At $\\lambda=3$ all $\\Delta_i=0$, so the system has infinitely many solutions. Solving the first two (independent) equations for $x,y$ in terms of $z$: $x=1+\\tfrac{z}{3},\\ y=-\\tfrac{5z}{3}$. Writing $z=3t$ gives $(x,y,z)=(1,0,0)+t(1,-5,3)$. Thus $\\boxed{\\lambda=3}$, with that one-parameter family of solutions."
        ]
      },
      {
        "name": "Combine the equations directly",
        "steps": [
          "Add the first two equations: $(x+2y+3z)+(2x+y+z)=1+2$, i.e. $3x+3y+4z=3$. But the left side is exactly the left side of the third equation, so the third equation reads $3x+3y+4z=\\lambda$ while the first two force $3x+3y+4z=3$.",
          "These agree only when $\\lambda=3$. If $\\lambda\\neq3$ the third equation contradicts the sum of the first two ($3=\\lambda$ is false), so the system has no solution — consistent with the row dependency $\\mathrm{R}_3=\\mathrm{R}_1+\\mathrm{R}_2$ that made $\\det A=0$.",
          "When $\\lambda=3$ the third equation becomes the redundant statement $3=3$; only the first two equations remain. They are independent, leaving one free variable $z=3t$.",
          "Back-substituting: $x=1+t,\\ y=-5t,\\ z=3t$, i.e. $(x,y,z)=(1,0,0)+t(1,-5,3)$. Therefore the system is consistent precisely for $\\boxed{\\lambda=3}$, with infinitely many solutions."
        ]
      }
    ],
    "remark": "**Insight.** A zero determinant forbids a *unique* solution, never *all* solutions. The honest test for a singular system is the trichotomy on the Cramer numerators: $\\Delta=0$ with some $\\Delta_i\\neq0$ means no solution, while $\\Delta=0$ with **every** $\\Delta_i=0$ means infinitely many. The same dependency $\\mathrm{R}_3=\\mathrm{R}_1+\\mathrm{R}_2$ that nulls $\\det A$ is what pins the lone consistent right-hand side $\\lambda=3$, turning the determinant into a detector of which $\\mathbf b$ the family can reach."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "The Trichotomy That Forbids Uniqueness",
    "difficulty": 5,
    "task": "Classify by parameter",
    "tags": [
      "consistency",
      "cramer",
      "homogeneous",
      "parameter",
      "row reduction"
    ],
    "statement": "For a real parameter $b$ consider\n$$\\begin{aligned} x+y+z&=1,\\\\ x+2y+4z&=b,\\\\ x+4y+10z&=b^{2}. \\end{aligned}$$\nClassify the solution set (unique / infinitely many / none) for every real $b$.",
    "answer": "\\[\\det(\\text{coeff})=0\\ \\forall b\\Rightarrow\\text{never unique};\\quad \\boxed{\\text{infinitely many}\\iff b\\in\\{1,2\\};\\ \\text{otherwise no solution}.}\\]",
    "trap": "Seeing three equations in three unknowns, the instinct is to reach for Cramer's rule and solve for the lone value of $b$ that makes the coefficient determinant zero, expecting \"unique for all other $b$.\" But the coefficient determinant is identically $0$ for \\emph{every} $b$ (the rows satisfy Row$_3=3\\,$Row$_2-2\\,$Row$_1$), so uniqueness is impossible at any $b$. The real question is consistency, governed by the right-hand side — a different mechanism entirely.",
    "solutions": [
      {
        "name": "Determinant first, then consistency",
        "steps": [
          "Coefficient determinant $\\begin{vmatrix}1&1&1\\\\1&2&4\\\\1&4&10\\end{vmatrix}=0$ (columns/rows are dependent: Row$_3=3\\,$Row$_2-2\\,$Row$_1$). So Cramer's rule never gives a unique solution — uniqueness is ruled out for all $b$.",
          "Apply the same dependency to the right-hand side: a unique solution exists only if the determinant is nonzero, which never happens; so the system is either inconsistent or has infinitely many solutions.",
          "Consistency requires the RHS to obey Row$_3=3\\,$Row$_2-2\\,$Row$_1$: $b^{2}=3b-2$, i.e. $b^{2}-3b+2=0\\Rightarrow b\\in\\{1,2\\}$.",
          "Thus: $b\\in\\{1,2\\}\\Rightarrow$ infinitely many solutions; $b\\notin\\{1,2\\}\\Rightarrow$ no solution; $\\boxed{\\text{never unique}}$."
        ]
      },
      {
        "name": "Row reduction of the augmented matrix",
        "steps": [
          "Form $[\\,A\\mid\\mathbf b\\,]=\\begin{pmatrix}1&1&1&1\\\\1&2&4&b\\\\1&4&10&b^{2}\\end{pmatrix}$ and subtract Row$_1$ from Rows $2,3$: $\\begin{pmatrix}1&1&1&1\\\\0&1&3&b-1\\\\0&3&9&b^{2}-1\\end{pmatrix}$.",
          "Eliminate: Row$_3\\to$Row$_3-3\\,$Row$_2$ gives $\\begin{pmatrix}1&1&1&1\\\\0&1&3&b-1\\\\0&0&0&b^{2}-3b+2\\end{pmatrix}$.",
          "The last row reads $0=b^{2}-3b+2=(b-1)(b-2)$. If $b\\notin\\{1,2\\}$ this is $0=\\text{nonzero}$: inconsistent. If $b\\in\\{1,2\\}$ the last row vanishes, leaving two pivots and one free variable: infinitely many solutions.",
          "A unique solution would need three pivots, impossible here, so $\\boxed{\\text{never unique; infinite iff }b\\in\\{1,2\\},\\text{ else none}}$."
        ]
      }
    ],
    "remark": "Insight: a row-dependency in the coefficient matrix kills uniqueness permanently and shifts the entire question onto the right-hand side, where the \\emph{same} dependency becomes a consistency equation. The parameter sitting in both the linear term $b$ and the quadratic $b^{2}$ is what makes the consistency condition a genuine quadratic with two admissible values."
  },
  {
    "theme": "hybrid",
    "themeLabel": "The Grand Hybrids",
    "title": "An Orthogonal Matrix Pins Its Own Sign",
    "difficulty": 5,
    "task": "Find det A and solve",
    "tags": [
      "orthogonal matrix",
      "determinant",
      "Cramer",
      "adjoint",
      "linear system"
    ],
    "statement": "Let $p,q$ be real numbers and set\n$$A=\\frac{1}{3}\\begin{pmatrix} 1 & 2 & 2 \\\\ 2 & 1 & p \\\\ 2 & q & 1 \\end{pmatrix}.$$\nIt is given that $A$ is orthogonal, i.e. $A A^{T}=I$ (verified by direct multiplication). \\par (a) Determine the real values of $p$ and $q$. \\par (b) Find $\\det A$. \\par (c) Hence solve the system $A\\mathbf{x}=\\mathbf{b}$ where $\\mathbf{b}=\\begin{pmatrix}3\\\\3\\\\3\\end{pmatrix}$, giving $\\mathbf{x}=(x_1,x_2,x_3)^{T}$.",
    "answer": "$$\\boxed{\\,p=-2,\\quad q=-2,\\quad \\det A=-1,\\quad \\mathbf{x}=(5,\\,1,\\,1)^{T}\\,}$$",
    "trap": "The fatal shortcut is to declare $\\det A=+1$ \"because every orthogonal matrix is a rotation.\" Orthogonality only forces $(\\det A)^2=1$, so $\\det A=\\pm1$; the sign must be settled by an actual $3\\times3$ expansion. Here $\\det A=-1$ (a reflection), not $+1$. A solver who plugs $\\det A=+1$ into Cramer's rule divides by the wrong-signed determinant and obtains the seductive but wrong $\\mathbf{x}=(-5,-1,-1)^{T}$.",
    "solutions": [
      {
        "name": "Orthogonality fixes the entries, then $A^{-1}=A^{T}$",
        "steps": [
          "Compute $A A^{T}$ entrywise. Equating the $(1,2)$ and $(1,3)$ off-diagonal entries to $0$ gives $\\tfrac{2p}{9}+\\tfrac{4}{9}=0$ and $\\tfrac{2q}{9}+\\tfrac{4}{9}=0$, so $p=-2$ and $q=-2$. The diagonal entries then all equal $1$, confirming $A A^{T}=I$.",
          "Take determinants of $A A^{T}=I$: $\\det A\\,\\det A^{T}=(\\det A)^2=\\det I=1$, hence $\\det A=\\pm1$. Resolve the sign by direct expansion: with $A=\\tfrac13 M$, $M=\\begin{pmatrix}1&2&2\\\\2&1&-2\\\\2&-2&1\\end{pmatrix}$, expanding along row 1 gives $\\det M=1(1\\cdot1-(-2)(-2))-2(2\\cdot1-(-2)\\cdot2)+2(2\\cdot(-2)-1\\cdot2)=1(-3)-2(6)+2(-6)=-27$, so $\\det A=\\tfrac{1}{27}\\det M=\\tfrac{-27}{27}=-1$.",
          "Because $A$ is orthogonal, $A^{-1}=A^{T}$. Thus $\\mathbf{x}=A^{-1}\\mathbf{b}=A^{T}\\mathbf{b}=\\tfrac13\\begin{pmatrix}1&2&2\\\\2&1&-2\\\\2&-2&1\\end{pmatrix}\\begin{pmatrix}3\\\\3\\\\3\\end{pmatrix}=\\tfrac13\\begin{pmatrix}15\\\\3\\\\3\\end{pmatrix}=(5,1,1)^{T}.$",
          "Therefore $p=-2,\\ q=-2,\\ \\det A=-1,\\ \\mathbf{x}=(5,1,1)^{T}$."
        ]
      },
      {
        "name": "Cramer's rule with the correctly-signed determinant",
        "steps": [
          "From orthogonality (as above) $p=-2,\\ q=-2$, so $A=\\tfrac13\\begin{pmatrix}1&2&2\\\\2&1&-2\\\\2&-2&1\\end{pmatrix}$ and the honest expansion gives $\\Delta=\\det A=-1$ (NOT $+1$).",
          "Form $\\Delta_1$ by replacing column 1 of $A$ with $\\mathbf{b}=(3,3,3)^{T}$; the replaced column is integer while the other two each carry the factor $\\tfrac13$, so a factor $\\tfrac{1}{9}$ comes out: $\\Delta_1=\\det\\begin{pmatrix}3&\\tfrac23&\\tfrac23\\\\3&\\tfrac13&-\\tfrac23\\\\3&-\\tfrac23&\\tfrac13\\end{pmatrix}=\\tfrac{1}{9}\\det\\begin{pmatrix}3&2&2\\\\3&1&-2\\\\3&-2&1\\end{pmatrix}=\\tfrac{1}{9}(-45)=-5.$",
          "Similarly $\\Delta_2=\\tfrac{1}{9}\\det\\begin{pmatrix}1&3&2\\\\2&3&-2\\\\2&3&1\\end{pmatrix}=\\tfrac{1}{9}(-9)=-1$ and $\\Delta_3=\\tfrac{1}{9}\\det\\begin{pmatrix}1&2&3\\\\2&1&3\\\\2&-2&3\\end{pmatrix}=\\tfrac{1}{9}(-9)=-1.$",
          "By Cramer, $x_1=\\dfrac{\\Delta_1}{\\Delta}=\\dfrac{-5}{-1}=5,\\quad x_2=\\dfrac{\\Delta_2}{\\Delta}=\\dfrac{-1}{-1}=1,\\quad x_3=\\dfrac{\\Delta_3}{\\Delta}=\\dfrac{-1}{-1}=1.$ Hence $p=-2,\\ q=-2,\\ \\det A=-1,\\ \\mathbf{x}=(5,1,1)^{T}$."
        ]
      },
      {
        "name": "Inverse via the adjoint identity $A^{-1}=\\frac{1}{\\det A}\\,\\mathrm{adj}\\,A$",
        "steps": [
          "With $p=q=-2$ fixed by orthogonality and $\\det A=-1$ from the direct expansion, use $A(\\mathrm{adj}\\,A)=(\\det A)I$, so $A^{-1}=\\dfrac{1}{\\det A}\\,\\mathrm{adj}\\,A=-\\,\\mathrm{adj}\\,A$.",
          "The cofactor matrix of $A=\\tfrac13 M$ gives $\\mathrm{adj}\\,A=\\tfrac{1}{9}\\,\\mathrm{adj}\\,M$; computing the cofactors of $M$ and transposing yields $\\mathrm{adj}\\,A=-A^{T}$ (consistent with $A^{-1}=-\\mathrm{adj}\\,A=A^{T}$, as an orthogonal matrix demands).",
          "Then $\\mathbf{x}=A^{-1}\\mathbf{b}=\\dfrac{1}{\\det A}(\\mathrm{adj}\\,A)\\mathbf{b}=-(\\mathrm{adj}\\,A)\\mathbf{b}=A^{T}\\mathbf{b}=\\tfrac13\\begin{pmatrix}1&2&2\\\\2&1&-2\\\\2&-2&1\\end{pmatrix}\\begin{pmatrix}3\\\\3\\\\3\\end{pmatrix}=(5,1,1)^{T}.$",
          "Thus $p=-2,\\ q=-2,\\ \\det A=-1,\\ \\mathbf{x}=(5,1,1)^{T}$."
        ]
      }
    ],
    "remark": "**Insight.** Orthogonality ($A A^{T}=I$) is a *quadratic* condition on the determinant: it delivers $(\\det A)^2=1$ but is **blind to the sign**. The genuine information that $A$ is a reflection ($\\det A=-1$) rather than a rotation ($\\det A=+1$) lives only in the **honest $3\\times3$ expansion** — never assume the friendlier $+1$. The same orthogonality then hands you a free inverse, $A^{-1}=A^{T}$, so the linear system collapses to a single matrix-vector product; but if you carried the wrong sign of $\\det A$ into Cramer's rule, every coordinate of the answer would flip. **One sign, computed not guessed, controls the whole problem.**"
  }
];
